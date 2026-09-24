import { describe, expect, it } from "vitest";
import { FREE_CASE_COUNT, canOpen, freeCaseIds } from "@/lib/access";
import { reconcileAccess, webAdapter, type PurchasesAdapter } from "@/lib/purchases";
import { MAX_ATTEMPTS, createRepo, memoryKV } from "@/lib/storage";
import { speakable } from "@/lib/speech";
import { newAttempt } from "@/engine";
import { CASES } from "@/cases";
import { FIXTURE } from "./fixture";

function fake(check: boolean | null, restore: boolean | null): PurchasesAdapter & { restores: number } {
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
    async price() {
      return null;
    },
  };
  return a;
}

describe("free sample gating", () => {
  it("opens exactly the first two cases without a purchase", () => {
    expect(FREE_CASE_COUNT).toBe(2);
    const free = freeCaseIds(CASES);
    expect([...free]).toEqual(CASES.slice(0, 2).map((c) => c.id));
    for (const c of CASES.slice(2)) expect(canOpen(c.id, CASES, false)).toBe(false);
  });
  it("opens every case once unlocked", () => {
    for (const c of CASES) expect(canOpen(c.id, CASES, true)).toBe(true);
  });
});

describe("reconcileAccess", () => {
  it("unlocks when the entitlement is active", async () => {
    expect(await reconcileAccess(false, fake(true, null))).toBe(true);
  });
  it("keeps the cache when the store cannot be reached", async () => {
    expect(await reconcileAccess(true, fake(null, null))).toBe(true);
    expect(await reconcileAccess(false, fake(null, null))).toBe(false);
  });
  it("tries a silent restore before revoking a cached unlock", async () => {
    const p = fake(false, true);
    expect(await reconcileAccess(true, p)).toBe(true);
    expect(p.restores).toBe(1);
  });
  it("revokes only on a clean confirmed no", async () => {
    expect(await reconcileAccess(true, fake(false, false))).toBe(false);
    expect(await reconcileAccess(true, fake(false, null))).toBe(true);
  });
  it("does not call restore for a user who never bought", async () => {
    const p = fake(false, true);
    expect(await reconcileAccess(false, p)).toBe(false);
    expect(p.restores).toBe(0);
  });
});

describe("web adapter", () => {
  it("never unlocks a production web build", async () => {
    const p = webAdapter(false);
    expect(await p.purchase()).toBe("unavailable");
    expect(await p.check()).toBe(false);
  });
  it("simulates a purchase in local dev", async () => {
    const p = webAdapter(true);
    expect(await p.check()).toBe(false);
    expect(await p.purchase()).toBe("purchased");
    expect(await p.restore()).toBe(true);
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
  it("reset keeps the purchase cache", async () => {
    const repo = createRepo(memoryKV());
    await repo.setCachedUnlock(true);
    await repo.saveAttempt(newAttempt(FIXTURE, "practice", 1, "a"));
    await repo.resetProgress();
    expect(await repo.attempts()).toEqual([]);
    expect(await repo.cachedUnlock()).toBe(true);
  });
});

describe("speakable", () => {
  it("reads vitals and units aloud", () => {
    expect(speakable("BP 80/50, glucose 2.1 mmol/L, give 20 mL/kg IV")).toBe(
      "BP 80 over 50, glucose 2.1 millimoles per litre, give 20 millilitres per kilogram I V",
    );
  });
});
