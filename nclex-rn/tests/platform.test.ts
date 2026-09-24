import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { FREE_CASES, FREE_ITEMS, canOpenCase, canOpenItem, canOpenMock, freeCaseIds, freeItemIds } from "@/lib/access";
import {
  ENTITLEMENT,
  NO_ACCESS,
  PRODUCTS,
  RC_KEY_ANDROID,
  RC_KEY_IOS,
  RC_OFFERING,
  accessFrom,
  allKeysConfigured,
  findPackage,
  keysConfigured,
  offeringPackages,
  reconcileAccess,
  webAdapter,
  type Access,
  type PurchasesAdapter,
} from "@/lib/purchases";
import { MAX_ANSWERS, createRepo, memoryKV } from "@/lib/storage";
import { DISCLAIMER } from "@/lib/constants";
import { NEED_IDS } from "@/engine/blueprint";
import type { Item } from "@/engine/types";
import { MC_CALC, fixtureCase } from "./fixture";

const read = (p: string) => readFileSync(new URL(p, import.meta.url), "utf8");
const FULL: Access = { full: true };

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

describe("free tier", () => {
  const items: Item[] = Array.from({ length: 400 }, (_, i) => ({ ...MC_CALC, id: `i${String(i).padStart(3, "0")}`, need: NEED_IDS[Math.floor(i / 50)] }));
  const cases = [fixtureCase("c1"), fixtureCase("c2")];
  it("opens 50 items spread across all eight Client Needs areas", () => {
    const free = freeItemIds(items);
    expect(FREE_ITEMS).toBe(50);
    expect(free.size).toBe(50);
    const byNeed = NEED_IDS.map((n) => items.filter((i) => free.has(i.id) && i.need === n).length);
    expect(Math.min(...byNeed)).toBeGreaterThanOrEqual(6);
    for (const i of items) expect(canOpenItem(i.id, items, NO_ACCESS)).toBe(free.has(i.id));
    for (const i of items) expect(canOpenItem(i.id, items, FULL)).toBe(true);
  });
  it("opens exactly 1 case study", () => {
    expect(FREE_CASES).toBe(1);
    expect([...freeCaseIds(cases)]).toEqual(["c1"]);
    expect(canOpenCase("c2", cases, NO_ACCESS)).toBe(false);
    expect(canOpenCase("c2", cases, FULL)).toBe(true);
  });
  it("keeps the adaptive mock for full access", () => {
    expect(canOpenMock(NO_ACCESS)).toBe(false);
    expect(canOpenMock(FULL)).toBe(true);
  });
});

describe("products and entitlement", () => {
  it("uses the planned ids, entitlement and offering", () => {
    expect(PRODUCTS.lifetime.id).toBe("nclexrn_lifetime");
    expect(PRODUCTS.monthly.id).toBe("nclexrn_monthly");
    expect(ENTITLEMENT).toBe("nclexrn_access");
    expect(RC_OFFERING).toBe("nclexrn");
  });
  it("reads the entitlement from customer info", () => {
    expect(accessFrom({ entitlements: { active: { nclexrn_access: {} } } })).toEqual(FULL);
    expect(accessFrom({ entitlements: { active: { other_app: {} } } })).toEqual(NO_ACCESS);
    expect(accessFrom(null)).toEqual(NO_ACCESS);
  });
});

describe("reconcileAccess", () => {
  it("grants what the store reports", async () => expect(await reconcileAccess(NO_ACCESS, fake(FULL, null))).toEqual(FULL));
  it("keeps the cache when the store cannot be reached", async () => expect(await reconcileAccess(FULL, fake(null, null))).toEqual(FULL));
  it("tries a silent restore before revoking", async () => {
    const p = fake(NO_ACCESS, FULL);
    expect(await reconcileAccess(FULL, p)).toEqual(FULL);
    expect(p.restores).toBe(1);
  });
  it("revokes on a clean confirmed no, such as a lapsed monthly subscription", async () => {
    expect(await reconcileAccess(FULL, fake(NO_ACCESS, NO_ACCESS))).toEqual(NO_ACCESS);
    expect(await reconcileAccess(FULL, fake(NO_ACCESS, null))).toEqual(FULL);
  });
  it("does not call restore for a user who never bought", async () => {
    const p = fake(NO_ACCESS, FULL);
    expect(await reconcileAccess(NO_ACCESS, p)).toEqual(NO_ACCESS);
    expect(p.restores).toBe(0);
  });
});

describe("web adapter", () => {
  it("never grants access in a production web build", async () => {
    const p = webAdapter(false);
    expect(await p.purchase("lifetime")).toBe("unavailable");
    expect(await p.check()).toEqual(NO_ACCESS);
  });
  it("simulates a purchase in local dev", async () => {
    const p = webAdapter(true);
    expect(await p.purchase("monthly")).toBe("purchased");
    expect(await p.restore()).toEqual(FULL);
  });
});

describe("RevenueCat offering", () => {
  // The shared project's Current offering belongs to another app.
  const other = { availablePackages: [{ identifier: "$rc_annual", product: { identifier: "preceptor_ccfp_annual" } }] };
  const mine = {
    availablePackages: [
      { identifier: "$rc_lifetime", product: { identifier: "nclexrn_lifetime" } },
      { identifier: "$rc_monthly", product: { identifier: "nclexrn_monthly" } },
    ],
  };
  it("uses offerings.all['nclexrn'], never offerings.current", () => {
    expect(offeringPackages({ current: other, all: { default: other, nclexrn: mine } })).toBe(mine.availablePackages);
    expect(offeringPackages({ current: other, all: { default: other } })).toEqual([]);
    expect(offeringPackages(null)).toEqual([]);
  });
  it("finds both packages by product id or package type", () => {
    expect(findPackage(mine.availablePackages, "lifetime")?.product?.identifier).toBe("nclexrn_lifetime");
    expect(findPackage(mine.availablePackages, "monthly")?.product?.identifier).toBe("nclexrn_monthly");
    expect(findPackage([{ identifier: "$rc_monthly", product: { identifier: "x" } }], "monthly")?.identifier).toBe("$rc_monthly");
    expect(findPackage(other.availablePackages, "lifetime")).toBeUndefined();
  });
  it("never reads offerings.current in the source", () => {
    const src = read("../src/lib/purchases.ts");
    expect(src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "")).not.toMatch(/\.current\b/);
  });
  it("keeps keys as placeholders until the owner pastes them", () => {
    expect(RC_KEY_IOS.startsWith("appl_")).toBe(true);
    expect(RC_KEY_ANDROID.startsWith("goog_")).toBe(true);
    expect(keysConfigured("web")).toBe(false);
  });
  // Release builds run LAUNCH_GATE=1. They must not ship with a placeholder key.
  if (process.env.LAUNCH_GATE)
    it("launch gate: both store keys are real", () => {
      expect(RC_KEY_IOS, "iOS RevenueCat key is still a placeholder").not.toContain("REPLACE");
      expect(RC_KEY_ANDROID, "Android RevenueCat key is still a placeholder").not.toContain("REPLACE");
      expect(allKeysConfigured()).toBe(true);
    });
});

describe("storage", () => {
  const ans = (id: string, at: number) => ({ itemId: id, need: "PA" as const, cjmm: "action" as const, kind: "mc" as const, score: { earned: 1, max: 1 }, at });
  it("keeps answers newest first and caps history", async () => {
    const repo = createRepo(memoryKV());
    await repo.addAnswers([ans("a", 1)]);
    const list = await repo.addAnswers([ans("b", 2)]);
    expect(list.map((x) => x.itemId)).toEqual(["b", "a"]);
    await repo.addAnswers(Array.from({ length: MAX_ANSWERS }, (_, i) => ans(`x${i}`, i)));
    expect(await repo.answers()).toHaveLength(MAX_ANSWERS);
  });
  it("survives corrupt data", async () => {
    const repo = createRepo(memoryKV({ nclexrn_answers_v1: "{not json", nclexrn_settings_v1: "[]", nclexrn_mocks_v1: "{}" }));
    expect(await repo.answers()).toEqual([]);
    expect(await repo.mocks()).toEqual([]);
    expect((await repo.settings()).revealEachItem).toBe(true);
  });
  it("reset keeps the purchase and clears progress", async () => {
    const repo = createRepo(memoryKV());
    await repo.setCachedAccess(FULL);
    await repo.addAnswers([ans("a", 1)]);
    await repo.saveFlags(["a"]);
    await repo.resetProgress();
    expect(await repo.answers()).toEqual([]);
    expect(await repo.flags()).toEqual([]);
    expect(await repo.cachedAccess()).toEqual(FULL);
  });
});

describe("identity and disclaimer", () => {
  it("uses com.preceptor.nclex and the app name everywhere", () => {
    const cap = JSON.parse(read("../capacitor.config.json"));
    expect(cap.appId).toBe("com.preceptor.nclex");
    expect(cap.appName).toBe("Preceptor: NCLEX-RN Prep");
    expect(read("../android/app/build.gradle")).toContain('applicationId "com.preceptor.nclex"');
    expect(read("../android/app/src/main/res/values/strings.xml")).toContain("Preceptor: NCLEX-RN Prep");
    expect(read("../ios/App/App.xcodeproj/project.pbxproj").match(/PRODUCT_BUNDLE_IDENTIFIER = ([\w.]+);/g)).toEqual([
      "PRODUCT_BUNDLE_IDENTIFIER = com.preceptor.nclex;",
      "PRODUCT_BUNDLE_IDENTIFIER = com.preceptor.nclex;",
    ]);
    expect(read("../ios/App/App/Info.plist")).toContain("Preceptor: NCLEX-RN Prep");
  });
  it("states the NCSBN disclaimer", () => {
    const d = DISCLAIMER.join(" ");
    expect(d).toContain("not affiliated with, sponsored or endorsed by NCSBN");
    expect(d).toContain("NCLEX, NCLEX-RN and NCLEX-PN are registered trademarks of NCSBN");
  });
});

describe("Codemagic", () => {
  // Codemagic reads only the repository root file. It must mirror this folder's copy.
  it("root codemagic.yaml mirrors nclex-rn/codemagic.yaml", () => {
    const root = read("../../codemagic.yaml");
    const local = read("../codemagic.yaml");
    const ids = (y: string) => [...y.slice(y.indexOf("workflows:")).matchAll(/^  ([a-z0-9-]+):$/gm)].map((m) => m[1]);
    expect(ids(root)).toEqual(["android-debug", "android-release", "android-play-internal", "ios-release"]);
    expect(ids(root)).toEqual(ids(local));
    expect(root.match(/^    working_directory: nclex-rn$/gm)?.length).toBe(4);
    for (const s of ["preceptor_signing", "preceptor_play", "app_store_connect: preceptor_appstore", "com.preceptor.nclex"]) expect(root, s).toContain(s);
    expect(root).not.toMatch(/com\.preceptor\.oral|oral-exam-sim/);
    // Artifact globs resolve from the working directory, so no nclex-rn/ prefix.
    const arts = (y: string) => y.match(/^      - [^*\s]\S*\/\S*$/gm) ?? [];
    expect(arts(root).length).toBeGreaterThan(0);
    expect(arts(root)).toEqual(arts(local));
    for (const a of arts(root)) expect(a).not.toMatch(/nclex-rn\//);
    expect(root.slice(root.indexOf("definitions:"))).toBe(local.slice(local.indexOf("definitions:")));
  });
});
