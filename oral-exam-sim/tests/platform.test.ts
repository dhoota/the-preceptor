import { describe, expect, it } from "vitest";
import { FREE_CASE_COUNT, FREE_SAMP_TOPICS, canOpenCase, canOpenSamp, freeCaseIds, freeSampIds } from "@/lib/access";
import {
  NO_ACCESS,
  ENTITLEMENTS,
  NO_END,
  NO_EXPIRY,
  DEFAULT_DURATION,
  DURATIONS,
  DURATION_LABEL,
  TIERS,
  TIER_ORDER,
  RC_KEY_ANDROID,
  RC_KEY_IOS,
  RC_OFFERING,
  accessAt,
  allKeysConfigured,
  ccfpemPackages,
  expiryFrom,
  findPackage,
  packageId,
  parseStoreId,
  plansFrom,
  productId,
  keysConfigured,
  laterExpiry,
  reconcileExpiry,
  replaces,
  webAdapter,
  type Access,
  type Expiry,
  type PurchasesAdapter,
} from "@/lib/purchases";
import { MAX_ATTEMPTS, createRepo, memoryKV } from "@/lib/storage";
import { speakable } from "@/lib/speech";
import { newAttempt } from "@/engine";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { FIXTURE } from "./fixture";

const A = (written: boolean, oral: boolean): Access => ({ written, oral });
const E = (written: string | null, oral: string | null): Expiry => ({ written, oral });
const NOW = Date.parse("2026-10-01T12:00:00Z");
const ent = (isActive: boolean, expirationDate: string | null) => ({ isActive, expirationDate });

function fake(check: Expiry | null, restore: Expiry | null): PurchasesAdapter & { restores: number } {
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
    async plans() {
      return [];
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

describe("products", () => {
  it("complete grants both components", () => {
    expect([...TIERS.complete.grants].sort()).toEqual(["oral", "written"]);
    expect(TIERS.written.grants).toEqual(["written"]);
    expect(TIERS.oral.grants).toEqual(["oral"]);
  });
  it("sells 3 and 6 month plans of each tier, 6 months first, never 1 year", () => {
    expect(DURATIONS).toEqual(["6m", "3m"]);
    expect(DEFAULT_DURATION).toBe("6m");
    expect(DURATION_LABEL).toEqual({ "3m": "3 months", "6m": "6 months" });
    const ids = TIER_ORDER.flatMap((t) => DURATIONS.map((d) => productId(t, d)));
    expect(ids).toEqual(["ccfpem_complete_6m", "ccfpem_complete_3m", "ccfpem_written_6m", "ccfpem_written_3m", "ccfpem_oral_6m", "ccfpem_oral_3m"]);
    expect(TIER_ORDER.flatMap((t) => DURATIONS.map((d) => packageId(t, d)))).toEqual(["complete_6m", "complete_3m", "written_6m", "written_3m", "oral_6m", "oral_3m"]);
  });
  it("has no 1 year plan, and no price or savings text in the app code", async () => {
    const { readFileSync, readdirSync } = await import("node:fs");
    const files = ["../src/lib/purchases.ts", "../src/lib/constants.ts", "../src/state.tsx", ...readdirSync(new URL("../src/screens", import.meta.url)).map((f) => `../src/screens/${f}`)];
    for (const f of files) {
      const src = readFileSync(new URL(f, import.meta.url), "utf8");
      expect(src, f).not.toMatch(/_1y|\b1 year|yearly|per year|\/ year|annual/i);
      expect(src, f).not.toMatch(/\$\d|fallbackPrice|FALLBACK_PRICE/);
      expect(src, f).not.toMatch(/line-through|strikethrough|\bsave \d|% off|savings/i);
    }
  });
  it("maps components to the written_access and oral_full_access entitlements", () => {
    expect(ENTITLEMENTS).toEqual({ written: "written_access", oral: "oral_full_access" });
  });
});

describe("entitlement expiry", () => {
  const RENEW = "2027-10-01T12:00:00.000Z";
  // RevenueCat lists an active entitlement under both active and all.
  const live = (m: Record<string, ReturnType<typeof ent>>) => ({ entitlements: { active: m, all: m } });
  it("takes each date from its active entitlement", () => {
    const e = expiryFrom(live({ written_access: ent(true, RENEW) }), NOW);
    expect(e).toEqual(E(RENEW, null));
    expect(accessAt(e, NOW)).toEqual(A(true, false));
    expect(accessAt(e, Date.parse("2027-10-01T12:00:01Z"))).toEqual(NO_ACCESS);
  });
  it("opens both components when Complete unlocks both entitlements", () => {
    const e = expiryFrom(live({ written_access: ent(true, RENEW), oral_full_access: ent(true, RENEW) }), NOW);
    expect(accessAt(e, NOW)).toEqual(A(true, true));
  });
  it("moves the date forward when the subscription renews", () => {
    const next = "2028-10-01T12:00:00.000Z";
    const e = expiryFrom(live({ oral_full_access: ent(true, next) }), NOW);
    expect(accessAt(e, Date.parse("2028-01-01T00:00:00Z"))).toEqual(A(false, true));
  });
  it("keeps the past date of an expired entitlement so the app can say when it ended", () => {
    const e = expiryFrom({ entitlements: { active: {}, all: { oral_full_access: ent(false, "2026-09-01T12:00:00Z") } } }, NOW);
    expect(e).toEqual(E(null, "2026-09-01T12:00:00.000Z"));
    expect(accessAt(e, NOW)).toEqual(NO_ACCESS);
  });
  it("opens nothing that is missing from entitlements.active, whatever its date or flag", () => {
    const ci = { entitlements: { active: {}, all: { written_access: ent(true, RENEW), oral_full_access: ent(false, RENEW) } } };
    expect(accessAt(expiryFrom(ci, NOW), NOW)).toEqual(NO_ACCESS);
    expect(accessAt(expiryFrom({ entitlements: { all: { written_access: ent(true, RENEW) } } }, NOW), NOW)).toEqual(NO_ACCESS);
  });
  it("treats an active entitlement with no end date as open", () => {
    const e = expiryFrom(live({ written_access: ent(true, null) }), NOW);
    expect(e.written).toBe(NO_END);
    expect(accessAt(e, NOW).written).toBe(true);
  });
  it("opens a promotional grant with a null productIdentifier and no active subscriptions", () => {
    const promo = { isActive: true, expirationDate: null, productIdentifier: null };
    const ci = { entitlements: { active: { written_access: promo, oral_full_access: promo }, all: {} }, activeSubscriptions: [] };
    expect(accessAt(expiryFrom(ci, NOW), NOW)).toEqual(A(true, true));
    const dated = { isActive: true, expirationDate: RENEW, productIdentifier: null };
    expect(expiryFrom({ entitlements: { active: { oral_full_access: dated } }, activeSubscriptions: null }, NOW)).toEqual(E(null, RENEW));
  });
  it("keeps an active entitlement open a day past its date while the store still calls it active", () => {
    const e = expiryFrom(live({ written_access: ent(true, "2026-09-30T12:00:00Z") }), NOW);
    expect(accessAt(e, NOW).written).toBe(true);
    expect(accessAt(e, NOW + 25 * 3600_000).written).toBe(false);
  });
  it("survives missing or malformed customer info", () => {
    expect(expiryFrom(null)).toEqual(NO_EXPIRY);
    expect(expiryFrom({})).toEqual(NO_EXPIRY);
    expect(expiryFrom({ entitlements: null })).toEqual(NO_EXPIRY);
    expect(expiryFrom({ entitlements: { active: { written_access: null } } })).toEqual(NO_EXPIRY);
  });
  it("ignores other apps' entitlements", () => {
    const ci = live({ ccfp_full_access: ent(true, RENEW), pro: ent(true, null) });
    expect(expiryFrom(ci, NOW)).toEqual(NO_EXPIRY);
  });
  it("keeps the later date per component", () => {
    expect(laterExpiry(E("2027-01-01T00:00:00Z", null), E("2026-12-01T00:00:00Z", "2027-02-01T00:00:00Z"))).toEqual(
      E("2027-01-01T00:00:00Z", "2027-02-01T00:00:00Z"),
    );
  });
});

describe("upgrades", () => {
  it("replaces Written or Oral when upgrading to Complete, on either store", () => {
    expect(replaces("complete", ["ccfpem_written:p6m"])).toBe("ccfpem_written");
    expect(replaces("complete", ["ccfpem_oral_3m"])).toBe("ccfpem_oral_3m");
    expect(replaces("complete", ["preceptor_ccfp_annual"])).toBeNull();
    expect(replaces("oral", ["ccfpem_written_6m"])).toBeNull();
  });
  it("handles a promotional customer with no store subscriptions", () => {
    expect(replaces("complete", [])).toBeNull();
    expect(replaces("complete", null)).toBeNull();
    expect(replaces("complete", undefined)).toBeNull();
    expect(replaces("complete", [null, "", "ccfpem_oral:p3m"])).toBe("ccfpem_oral");
  });
  it("reads tier and length from App Store and Play product IDs", () => {
    expect(parseStoreId("ccfpem_complete_6m")).toEqual({ tier: "complete", duration: "6m" });
    expect(parseStoreId("ccfpem_oral_3m")).toEqual({ tier: "oral", duration: "3m" });
    expect(parseStoreId("ccfpem_written:p3m")).toEqual({ tier: "written", duration: "3m" });
    expect(parseStoreId("ccfpem_complete_1y:p6m")).toEqual({ tier: "complete", duration: "6m" });
    expect(parseStoreId("ccfpem_complete_1y")?.duration).toBeNull();
    expect(parseStoreId("ccfpem_complete_1y:yearly")?.duration).toBeNull();
    expect(parseStoreId("ccfpem_completex_6m")).toBeNull();
    expect(parseStoreId("preceptor_ccfp_annual")).toBeNull();
  });
});

describe("reconcileExpiry", () => {
  const OPEN = "2027-09-01T12:00:00.000Z";
  const PAST = "2026-09-01T12:00:00.000Z";
  it("uses the store's dates", async () => {
    expect(await reconcileExpiry(NO_EXPIRY, fake(E(OPEN, null), null), NOW)).toEqual(E(OPEN, null));
  });
  it("keeps the cached dates when the store cannot be reached", async () => {
    expect(await reconcileExpiry(E(OPEN, OPEN), fake(null, null), NOW)).toEqual(E(OPEN, OPEN));
  });
  it("still ends cached access on time while offline", async () => {
    const kept = await reconcileExpiry(E(PAST, OPEN), fake(null, null), NOW);
    expect(accessAt(kept, NOW)).toEqual(A(false, true));
  });
  it("tries a silent restore before closing something the cache has open", async () => {
    const p = fake(NO_EXPIRY, E(OPEN, null));
    expect(await reconcileExpiry(E(OPEN, null), p, NOW)).toEqual(E(OPEN, null));
    expect(p.restores).toBe(1);
  });
  it("closes only on a clean confirmed answer", async () => {
    expect(await reconcileExpiry(E(OPEN, OPEN), fake(NO_EXPIRY, NO_EXPIRY), NOW)).toEqual(NO_EXPIRY);
    expect(await reconcileExpiry(E(OPEN, OPEN), fake(NO_EXPIRY, null), NOW)).toEqual(E(OPEN, OPEN));
  });
  it("does not call restore for a user who never bought or whose access already ended", async () => {
    const p = fake(NO_EXPIRY, E(OPEN, OPEN));
    expect(await reconcileExpiry(NO_EXPIRY, p, NOW)).toEqual(NO_EXPIRY);
    expect(await reconcileExpiry(E(PAST, null), p, NOW)).toEqual(NO_EXPIRY);
    expect(p.restores).toBe(0);
  });
});

describe("web adapter", () => {
  it("never grants access in a production web build", async () => {
    const p = webAdapter(false);
    expect(await p.purchase("complete", "6m")).toBe("unavailable");
    expect(await p.plans()).toEqual([]);
    expect(await p.check()).toEqual(NO_EXPIRY);
  });
  it("simulates each plan for its length in local dev", async () => {
    let t = NOW;
    const p = webAdapter(true, () => t);
    expect((await p.plans()).map((x) => `${x.tier}_${x.duration}`)).toEqual(["complete_6m", "complete_3m", "written_6m", "written_3m", "oral_6m", "oral_3m"]);
    expect(await p.purchase("written", "3m")).toBe("purchased");
    expect(accessAt((await p.check())!, t)).toEqual(A(true, false));
    await p.purchase("oral", "6m");
    expect(accessAt((await p.restore())!, t)).toEqual(A(true, true));
    t = Date.parse("2027-01-02T12:00:00Z"); // past 3 months, inside 6
    expect(accessAt((await p.check())!, t)).toEqual(A(false, true));
    t = Date.parse("2027-04-02T12:00:00Z"); // past 6 months
    expect(accessAt((await p.check())!, t)).toEqual(NO_ACCESS);
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
    await repo.setCachedExpiry(E("2027-09-01T12:00:00.000Z", null));
    await repo.saveAttempt(newAttempt(FIXTURE, "practice", 1, "a"));
    await repo.saveMockExam({ id: "m", sampIds: [], startedAt: 1, durationMs: 1, responses: {}, submittedAt: null });
    await repo.resetProgress();
    expect(await repo.attempts()).toEqual([]);
    expect(await repo.mockExams()).toEqual([]);
    expect(await repo.cachedExpiry()).toEqual(E("2027-09-01T12:00:00.000Z", null));
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
      { identifier: "complete_6m", product: { identifier: "ccfpem_complete_6m", priceString: "US$199.99" } },
      { identifier: "complete_3m", product: { identifier: "ccfpem_complete_3m", priceString: "US$129.99" } },
      { identifier: "written_6m", product: { identifier: "ccfpem_written_6m", priceString: "US$149.99" } },
      { identifier: "oral_3m", product: { identifier: "ccfpem_oral_3m", priceString: "US$69.99" } },
    ],
  };
  it("uses the ccfpem offering by id, never offerings.current", () => {
    expect(RC_OFFERING).toBe("ccfpem");
    expect(ccfpemPackages({ current: other, all: { default: other, ccfpem: mine } })).toBe(mine.availablePackages);
    expect(ccfpemPackages({ current: other, all: { default: other } })).toEqual([]);
    expect(ccfpemPackages(null)).toEqual([]);
  });
  it("finds a package by tier and length, by package id or store id", () => {
    expect(findPackage(mine.availablePackages, "complete", "6m")?.identifier).toBe("complete_6m");
    expect(findPackage(mine.availablePackages, "written", "3m")).toBeUndefined();
    const byProduct = [{ identifier: "x", product: { identifier: "ccfpem_oral:p6m" } }];
    expect(findPackage(byProduct, "oral", "6m")?.identifier).toBe("x");
    expect(findPackage(byProduct, "oral", "3m")).toBeUndefined();
    expect(findPackage(other.availablePackages, "complete", "6m")).toBeUndefined();
  });
  it("lists only the plans the offering holds, with the store's own price strings", () => {
    expect(plansFrom(mine.availablePackages)).toEqual([
      { tier: "complete", duration: "6m", priceString: "US$199.99" },
      { tier: "complete", duration: "3m", priceString: "US$129.99" },
      { tier: "written", duration: "6m", priceString: "US$149.99" },
      { tier: "oral", duration: "3m", priceString: "US$69.99" },
    ]);
    // A 1 year product left in the offering is never shown.
    expect(plansFrom([{ identifier: "complete", product: { identifier: "ccfpem_complete_1y", priceString: "US$199.99" } }])).toEqual([]);
    // A package without a store price is not shown either.
    expect(plansFrom([{ identifier: "oral_6m", product: { identifier: "ccfpem_oral_6m" } }])).toEqual([]);
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
    // gitleaks-scan is the manual secret scan; it has no working_directory and touches no store.
    expect(ids(root)).toEqual(["gitleaks-scan", "android-debug", "android-release", "android-build-only", "android-play-internal", "ios-release", "android-production", "ios-production"]);
    expect(ids(root)).toEqual(ids(local));
    expect(root.match(/^    working_directory: oral-exam-sim$/gm)?.length).toBe(7);
    for (const s of ["android_signing:\n        - preceptor_upload_key", "preceptor_play", "app_store_connect: preceptor_appstore", "distribution_type: app_store", "bundle_identifier: com.preceptor.oral"]) expect(root, s).toContain(s);
    // Signing comes from Codemagic code signing identities, never from pasted secrets.
    for (const s of ["preceptor_signing", "IOS_CERT_KEY", "PRECEPTOR_KEYSTORE_BASE64"]) expect(root, s).not.toContain(s);
    expect(root.match(/- preceptor_upload_key/g)?.length).toBe(4);
    // android-release uploads to closed testing as a draft. Production is only
    // android-production, and the production workflows start only from a release tag.
    expect(root).toContain("track: alpha");
    expect(root).toContain("submit_as_draft: true");
    // One workflow's text: from its id line to the next workflow id, or the end of the file.
    const block = (y: string, id: string) => {
      const start = y.indexOf(`\n  ${id}:\n`);
      const next = y.slice(start + 1).search(/\n  [a-z0-9-]+:\n/);
      return next < 0 ? y.slice(start) : y.slice(start, start + 1 + next);
    };
    expect(root.match(/track: production/g)?.length).toBe(1);
    expect(block(root, "android-production")).toContain("track: production");
    for (const id of ["android-production", "ios-production"]) expect(block(root, id), id).toMatch(/events:\n\s+- tag\n\s+tag_patterns:\n\s+- pattern: 'ccfpem-v\*'/);
    expect(root.match(/- tag$/gm)?.length).toBe(2);
    expect(root).not.toMatch(/- push$|- pull_request$/m);
    expect(block(root, "ios-production")).toContain("cancel_previous_submissions: true");
    // With working_directory set, Codemagic resolves artifact globs from that folder
    // (build 1 found nothing with an oral-exam-sim/ prefix), so the paths match the local file.
    const arts = (y: string) => y.match(/^      - [^*\s]\S*\/\S*$/gm) ?? [];
    expect(arts(root)).toEqual(arts(local));
    for (const a of arts(root)) expect(a).not.toMatch(/oral-exam-sim\//);
    // Every script step of the local file appears in the root file.
    for (const m of local.matchAll(/^\s+name: (.+)$/gm)) expect(root).toContain(m[1]);
  });
});
