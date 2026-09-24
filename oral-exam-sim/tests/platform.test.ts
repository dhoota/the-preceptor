import { describe, expect, it } from "vitest";
import { FREE_CASE_COUNT, FREE_SAMP_TOPICS, canOpenCase, canOpenSamp, freeCaseIds, freeSampIds } from "@/lib/access";
import {
  NO_ACCESS,
  PRODUCTS,
  RC_KEY_ANDROID,
  RC_KEY_IOS,
  RC_OFFERING,
  accessFrom,
  allKeysConfigured,
  ccfpemPackages,
  findPackage,
  keysConfigured,
  reconcileAccess,
  webAdapter,
  type Access,
  type PurchasesAdapter,
} from "@/lib/purchases";
import { MAX_ATTEMPTS, createRepo, memoryKV } from "@/lib/storage";
import { speakable } from "@/lib/speech";
import { newAttempt } from "@/engine";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { FIXTURE } from "./fixture";

const A = (written: boolean, oral: boolean): Access => ({ written, oral });

function fake(check: Access | null, restore: Access | null): PurchasesAdapter & { restores: number } {
  const a = {
    restores: 0,
    async check() {
      return check;
    },
    async restore() {
      a.restores++;
      return restore;
    },
    async purchase() {
      return "purchased" as const;
    },
    async prices() {
      return {};
    },
  };
  return a;
}

describe("free sample gating", () => {
  it("opens exactly the first two oral cases without oral access", () => {
    expect(FREE_CASE_COUNT).toBe(2);
    expect([...freeCaseIds(CASES)]).toEqual(CASES.slice(0, 2).map((c) => c.id));
    for (const c of CASES.slice(2)) expect(canOpenCase(c.id, CASES, A(true, false))).toBe(false);
    for (const c of CASES) expect(canOpenCase(c.id, CASES, A(false, true))).toBe(true);
  });
  it("opens one SAMP in each of the first ten topics without written access", () => {
    const free = freeSampIds(SAMPS);
    const topics = new Set(SAMPS.filter((s) => free.has(s.id)).map((s) => s.topic));
    expect(free.size).toBe(Math.min(FREE_SAMP_TOPICS, new Set(SAMPS.map((s) => s.topic)).size));
    expect(topics.size).toBe(free.size);
    for (const s of SAMPS) expect(canOpenSamp(s.id, SAMPS, A(false, true))).toBe(free.has(s.id));
    for (const s of SAMPS) expect(canOpenSamp(s.id, SAMPS, A(true, false))).toBe(true);
  });
});

describe("products and entitlements", () => {
  it("complete grants both components", () => {
    expect(PRODUCTS.complete.grants.sort()).toEqual(["oral", "written"]);
    expect(PRODUCTS.written.grants).toEqual(["written"]);
    expect(PRODUCTS.oral.grants).toEqual(["oral"]);
  });
  it("reads entitlements from customer info", () => {
    expect(accessFrom({ entitlements: { active: { written_access: {}, oral_full_access: {} } } })).toEqual(A(true, true));
    expect(accessFrom({ entitlements: { active: { oral_full_access: {} } } })).toEqual(A(false, true));
    expect(accessFrom(null)).toEqual(NO_ACCESS);
  });
});

describe("reconcileAccess", () => {
  it("grants what the store reports", async () => {
    expect(await reconcileAccess(NO_ACCESS, fake(A(true, false), null))).toEqual(A(true, false));
  });
  it("keeps the cache when the store cannot be reached", async () => {
    expect(await reconcileAccess(A(true, true), fake(null, null))).toEqual(A(true, true));
  });
  it("tries a silent restore before revoking a cached entitlement", async () => {
    const p = fake(A(false, false), A(true, false));
    expect(await reconcileAccess(A(true, false), p)).toEqual(A(true, false));
    expect(p.restores).toBe(1);
  });
  it("revokes only on a clean confirmed no", async () => {
    expect(await reconcileAccess(A(true, true), fake(NO_ACCESS, NO_ACCESS))).toEqual(NO_ACCESS);
    expect(await reconcileAccess(A(true, true), fake(NO_ACCESS, null))).toEqual(A(true, true));
  });
  it("does not call restore for a user who never bought", async () => {
    const p = fake(NO_ACCESS, A(true, true));
    expect(await reconcileAccess(NO_ACCESS, p)).toEqual(NO_ACCESS);
    expect(p.restores).toBe(0);
  });
});

describe("web adapter", () => {
  it("never grants access in a production web build", async () => {
    const p = webAdapter(false);
    expect(await p.purchase("complete")).toBe("unavailable");
    expect(await p.check()).toEqual(NO_ACCESS);
  });
  it("simulates each product in local dev", async () => {
    const p = webAdapter(true);
    expect(await p.purchase("written")).toBe("purchased");
    expect(await p.check()).toEqual(A(true, false));
    await p.purchase("oral");
    expect(await p.restore()).toEqual(A(true, true));
  });
});

describe("storage", () => {
  it("round trips attempts newest first and replaces by id", async () => {
    const repo = createRepo(memoryKV());
    const a = newAttempt(FIXTURE, "practice", 1, "a");
    const b = newAttempt(FIXTURE, "exam", 2, "b");
    await repo.saveAttempt(a);
    await repo.saveAttempt(b);
    await repo.saveAttempt({ ...a, finishedAt: 9 });
    const list = await repo.attempts();
    expect(list.map((x) => x.id)).toEqual(["a", "b"]);
    expect(list[0].finishedAt).toBe(9);
  });
  it("caps history", async () => {
    const repo = createRepo(memoryKV());
    for (let i = 0; i < MAX_ATTEMPTS + 3; i++) await repo.saveAttempt(newAttempt(FIXTURE, "practice", i, `a${i}`));
    expect(await repo.attempts()).toHaveLength(MAX_ATTEMPTS);
  });
  it("survives corrupt data", async () => {
    const repo = createRepo(memoryKV({ oral_attempts_v1: "{not json", oral_settings_v1: "[]" }));
    expect(await repo.attempts()).toEqual([]);
    expect((await repo.settings()).rate).toBe(1);
  });
  it("reset keeps purchases and clears written and oral progress", async () => {
    const repo = createRepo(memoryKV());
    await repo.setCachedAccess(A(true, false));
    await repo.saveAttempt(newAttempt(FIXTURE, "practice", 1, "a"));
    await repo.saveMockExam({ id: "m", sampIds: [], startedAt: 1, durationMs: 1, responses: {}, submittedAt: null });
    await repo.resetProgress();
    expect(await repo.attempts()).toEqual([]);
    expect(await repo.mockExams()).toEqual([]);
    expect(await repo.cachedAccess()).toEqual(A(true, false));
  });
  it("replaces SAMP attempts by id, newest first", async () => {
    const repo = createRepo(memoryKV());
    const base = { sampId: "s", topic: "t", mode: "practice" as const, responses: {}, mark: { sampId: "s", topic: "t", questions: [], score: 0 } };
    await repo.saveSampAttempts([{ ...base, id: "a", at: 1 }]);
    await repo.saveSampAttempts([{ ...base, id: "b", at: 2 }]);
    const list = await repo.saveSampAttempts([{ ...base, id: "a", at: 3, mark: { ...base.mark, score: 1 } }]);
    expect(list.map((x) => x.id)).toEqual(["a", "b"]);
    expect(list[0].mark.score).toBe(1);
  });
});

describe("speakable", () => {
  it("reads vitals and units aloud", () => {
    expect(speakable("BP 80/50, glucose 2.1 mmol/L, give 20 mL/kg IV")).toBe(
      "BP 80 over 50, glucose 2.1 millimoles per litre, give 20 millilitres per kilogram I V",
    );
  });
});

describe("RevenueCat offering", () => {
  // The shared RevenueCat project's Current offering belongs to another app.
  const other = { availablePackages: [{ identifier: "$rc_annual", product: { identifier: "preceptor_ccfp_annual" } }] };
  const mine = {
    availablePackages: [
      { identifier: "complete", product: { identifier: "ccfpem_complete_lifetime" } },
      { identifier: "written", product: { identifier: "ccfpem_written_lifetime" } },
      { identifier: "oral", product: { identifier: "oral_full_lifetime" } },
    ],
  };
  it("uses the ccfpem offering by id, never offerings.current", () => {
    expect(RC_OFFERING).toBe("ccfpem");
    expect(ccfpemPackages({ current: other, all: { default: other, ccfpem: mine } })).toBe(mine.availablePackages);
    expect(ccfpemPackages({ current: other, all: { default: other } })).toEqual([]);
    expect(ccfpemPackages(null)).toEqual([]);
  });
  it("finds packages complete, written and oral", () => {
    for (const k of ["complete", "written", "oral"] as const) expect(findPackage(mine.availablePackages, k)?.identifier).toBe(k);
    const byProduct = [{ identifier: "x", product: { identifier: "oral_full_lifetime" } }];
    expect(findPackage(byProduct, "oral")?.identifier).toBe("x");
    expect(findPackage(other.availablePackages, "complete")).toBeUndefined();
  });
  it("never reads offerings.current in the source", async () => {
    const { readFileSync } = await import("node:fs");
    const src = readFileSync(new URL("../src/lib/purchases.ts", import.meta.url), "utf8");
    expect(src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "")).not.toMatch(/\.current\b/);
  });
  it("has the Android public key and checks keys per platform", () => {
    expect(RC_KEY_ANDROID).toMatch(/^goog_[A-Za-z0-9]+$/);
    expect(keysConfigured("android")).toBe(true);
    expect(keysConfigured("web")).toBe(false);
    expect(RC_KEY_IOS.startsWith("appl_")).toBe(true);
  });
  // Release builds run LAUNCH_GATE=1. They must not ship with a placeholder key.
  if (process.env.LAUNCH_GATE)
    it("launch gate: both store keys are real", () => {
      expect(RC_KEY_IOS, "iOS RevenueCat key is still a placeholder").not.toContain("REPLACE");
      expect(RC_KEY_ANDROID, "Android RevenueCat key is still a placeholder").not.toContain("REPLACE");
      expect(allKeysConfigured()).toBe(true);
    });
});

describe("Codemagic", () => {
  // Codemagic reads only the repository root file. It must mirror this folder's copy.
  it("root codemagic.yaml mirrors oral-exam-sim/codemagic.yaml", async () => {
    const { readFileSync } = await import("node:fs");
    const root = readFileSync(new URL("../../codemagic.yaml", import.meta.url), "utf8");
    const local = readFileSync(new URL("../codemagic.yaml", import.meta.url), "utf8");
    const ids = (y: string) => [...y.slice(y.indexOf("workflows:")).matchAll(/^  ([a-z0-9-]+):$/gm)].map((m) => m[1]);
    expect(ids(root)).toEqual(["android-debug", "android-release", "android-play-internal", "ios-release"]);
    expect(ids(root)).toEqual(ids(local));
    expect(root.match(/^    working_directory: oral-exam-sim$/gm)?.length).toBe(4);
    for (const s of ["preceptor_signing", "preceptor_play", "app_store_connect: preceptor_appstore"]) expect(root, s).toContain(s);
    for (const a of root.match(/^      - [^*\s]\S*\/\S*$/gm) ?? []) expect(a, "artifact paths start at the repo root").toMatch(/^      - oral-exam-sim\//);
    // Every script step of the local file appears in the root file.
    for (const m of local.matchAll(/^\s+name: (.+)$/gm)) expect(root).toContain(m[1]);
  });
});
