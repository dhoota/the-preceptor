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
    expect(PRODUCTS.threeMonth).toMatchObject({ id: "nclexrn_3month", basePlan: "p3m", packageType: "$rc_three_month", fallbackPrice: "US$99.99" });
    expect(PRODUCTS.sixMonth).toMatchObject({ id: "nclexrn_6month", basePlan: "p6m", packageType: "$rc_six_month", fallbackPrice: "US$149.99" });
    expect(Object.keys(PRODUCTS).sort()).toEqual(["sixMonth", "threeMonth"]);
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
  it("revokes on a clean confirmed no, such as a lapsed subscription", async () => {
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
    expect(await p.purchase("sixMonth")).toBe("unavailable");
    expect(await p.check()).toEqual(NO_ACCESS);
  });
  it("simulates a purchase in local dev", async () => {
    const p = webAdapter(true);
    expect(await p.purchase("threeMonth")).toBe("purchased");
    expect(await p.restore()).toEqual(FULL);
  });
});

describe("RevenueCat offering", () => {
  // The shared project's Current offering belongs to another app.
  const other = { availablePackages: [{ identifier: "$rc_annual", product: { identifier: "preceptor_ccfp_annual" } }] };
  const mine = {
    availablePackages: [
      { identifier: "$rc_three_month", product: { identifier: "nclexrn_3month" } },
      { identifier: "$rc_six_month", product: { identifier: "nclexrn_6month" } },
    ],
  };
  it("uses offerings.all['nclexrn'], never offerings.current", () => {
    expect(offeringPackages({ current: other, all: { default: other, nclexrn: mine } })).toBe(mine.availablePackages);
    expect(offeringPackages({ current: other, all: { default: other } })).toEqual([]);
    expect(offeringPackages(null)).toEqual([]);
  });
  it("finds both plans by package type, App Store product id or Play product id", () => {
    expect(findPackage(mine.availablePackages, "threeMonth")?.product?.identifier).toBe("nclexrn_3month");
    expect(findPackage(mine.availablePackages, "sixMonth")?.product?.identifier).toBe("nclexrn_6month");
    // Play products arrive as "subscriptionId:basePlanId".
    const play = [
      { identifier: "custom_a", product: { identifier: "nclexrn_6month:p6m" } },
      { identifier: "custom_b", product: { identifier: "nclexrn_3month:p3m" } },
    ];
    expect(findPackage(play, "sixMonth")?.identifier).toBe("custom_a");
    expect(findPackage(play, "threeMonth")?.identifier).toBe("custom_b");
    expect(findPackage([{ identifier: "x", product: { identifier: "nclexrn_3monthly" } }], "threeMonth")).toBeUndefined();
    expect(findPackage(other.availablePackages, "sixMonth")).toBeUndefined();
  });
  it("never reads offerings.current in the source", () => {
    const src = read("../src/lib/purchases.ts");
    expect(src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "")).not.toMatch(/\.current\b/);
  });
  it("has the NCLEX public SDK keys from RevenueCat project 9de07656", () => {
    expect(RC_KEY_IOS).toBe("appl_qgQcyvKZciCQsltVKSlDmmfrGeq");
    expect(RC_KEY_ANDROID).toBe("goog_pxjNpwnbZtVIDDQXvWbqeTDswPq");
    expect(keysConfigured("ios")).toBe(true);
    expect(keysConfigured("android")).toBe(true);
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
    expect(cap.appName).toBe("Preceptor: NCLEX");
    expect(read("../android/app/build.gradle")).toContain('applicationId "com.preceptor.nclex"');
    expect(read("../android/app/src/main/res/values/strings.xml")).toContain("Preceptor: NCLEX");
    expect(read("../ios/App/App.xcodeproj/project.pbxproj").match(/PRODUCT_BUNDLE_IDENTIFIER = ([\w.]+);/g)).toEqual([
      "PRODUCT_BUNDLE_IDENTIFIER = com.preceptor.nclex;",
      "PRODUCT_BUNDLE_IDENTIFIER = com.preceptor.nclex;",
    ]);
    expect(read("../ios/App/App/Info.plist")).toContain("Preceptor: NCLEX");
  });
  it("states the NCSBN disclaimer", () => {
    const d = DISCLAIMER.join(" ");
    expect(d).toContain("not affiliated with, sponsored or endorsed by NCSBN");
    expect(d).toContain("NCLEX, NCLEX-RN and NCLEX-PN are registered trademarks of NCSBN");
  });
});

describe("Codemagic", () => {
  // Codemagic reads only the repository root file. It must mirror this folder's copy.
  const root = read("../../codemagic.yaml");
  const local = read("../codemagic.yaml");
  const flow = (y: string, id: string) => {
    const at = y.indexOf(`\n  ${id}:\n`);
    const next = y.slice(at + 1).search(/\n  [a-z0-9-]+:\n/);
    return next < 0 ? y.slice(at) : y.slice(at, at + 1 + next);
  };
  it("root codemagic.yaml mirrors nclex-rn/codemagic.yaml", () => {
    expect(root.slice(root.indexOf("definitions:"))).toBe(local.slice(local.indexOf("definitions:")));
  });
  it("has six uniquely named NCLEX workflows in nclex-rn", () => {
    const ids = [...root.slice(root.indexOf("workflows:")).matchAll(/^  ([a-z0-9-]+):$/gm)].map((m) => m[1]);
    expect(ids).toEqual([
      "nclex-android-debug",
      "nclex-android-build-only",
      "nclex-android-release",
      "nclex-ios-release",
      "nclex-android-production",
      "nclex-ios-appstore",
    ]);
    const names = [...root.matchAll(/^    name: (.+)$/gm)].map((m) => m[1]);
    expect(names).toHaveLength(6);
    for (const n of names) expect(n).toMatch(/^Preceptor NCLEX /);
    expect(root.match(/^    working_directory: nclex-rn$/gm)?.length).toBe(6);
    expect(root).not.toMatch(/com\.preceptor\.oral|oral-exam-sim|preceptor_signing|PRECEPTOR_KEYSTORE/);
    // Artifact globs resolve from the working directory, so no nclex-rn/ prefix.
    for (const a of root.match(/^      - [^*\s]\S*\/\S*$/gm) ?? []) expect(a).not.toMatch(/nclex-rn\//);
  });
  it("signs Android with the team keystore and uploads only to Play alpha as a draft", () => {
    for (const id of ["nclex-android-build-only", "nclex-android-release", "nclex-android-production"]) {
      const f = flow(root, id);
      expect(f, id).toMatch(/android_signing:\n\s+- preceptor_upload_key/);
      expect(f, id).toContain("bash scripts/ci/check-keystore.sh");
    }
    const rel = flow(root, "nclex-android-release");
    expect(rel).toContain("- preceptor_play");
    expect(rel).toContain('--package-name "com.preceptor.nclex"');
    expect(rel).toMatch(/track: alpha/);
    expect(rel).toMatch(/submit_as_draft: true/);
    expect(rel).not.toMatch(/track: production/);
    // Only the hand-started production workflow targets Play production.
    const prod = flow(root, "nclex-android-production");
    expect(prod).toContain("- preceptor_play");
    expect(prod).toMatch(/track: production/);
    expect(root.match(/track: production/g)).toHaveLength(1);
    const only = flow(root, "nclex-android-build-only");
    expect(only).not.toMatch(/publishing:|preceptor_play|GCLOUD/);
  });
  it("signs iOS with Codemagic managed signing and publishes to TestFlight only", () => {
    const ios = flow(root, "nclex-ios-release");
    expect(ios).toContain("app_store_connect: preceptor_appstore");
    expect(ios).toMatch(/ios_signing:[\s\S]*distribution_type: app_store[\s\S]*bundle_identifier: com\.preceptor\.nclex/);
    expect(ios).toMatch(/submit_to_testflight: true/);
    expect(ios).not.toMatch(/submit_to_app_store: true/);
    const store = flow(root, "nclex-ios-appstore");
    expect(store).toContain("app_store_connect: preceptor_appstore");
    expect(store).toMatch(/ios_signing:[\s\S]*distribution_type: app_store[\s\S]*bundle_identifier: com\.preceptor\.nclex/);
    expect(store).toMatch(/submit_to_app_store: true/);
    expect(store).toMatch(/cancel_previous_submissions: true/);
    expect(root.match(/submit_to_app_store: true/g)).toHaveLength(1);
  });
  it("ships release notes and one version everywhere", () => {
    const notes = JSON.parse(read("../release_notes.json"));
    expect(notes).toEqual([{ language: "en-US", text: "User interface improvements" }]);
    const v = JSON.parse(read("../package.json")).version;
    expect(read("../src/lib/constants.ts")).toContain(`APP_VERSION = "${v}"`);
    expect(read("../android/app/build.gradle")).toContain(`versionName "${v}"`);
    for (const m of read("../ios/App/App.xcodeproj/project.pbxproj").match(/MARKETING_VERSION = [^;]+;/g) ?? []) expect(m).toBe(`MARKETING_VERSION = ${v};`);
  });
  it("targets Android API 36 and iOS 15.0", () => {
    const v = read("../android/variables.gradle");
    expect(v).toMatch(/compileSdkVersion = 36/);
    expect(v).toMatch(/targetSdkVersion = 36/);
    expect(read("../ios/App/Podfile")).toContain("platform :ios, '15.0'");
    const pbx = read("../ios/App/App.xcodeproj/project.pbxproj");
    expect(pbx).not.toMatch(/IPHONEOS_DEPLOYMENT_TARGET = 1[0-4]\./);
    expect(pbx).toMatch(/IPHONEOS_DEPLOYMENT_TARGET = 15\.0;/);
    expect(read("../android/app/build.gradle")).toContain("System.getenv('CM_KEYSTORE_PATH')");
  });
});


describe("paywall", () => {
  const src = read("../src/screens/Paywall.tsx");
  it("offers both subscriptions, the renewal terms, Restore and the Terms and Privacy links", () => {
    for (const s of ["PLAN_ORDER", "every 6 months", "every 3 months", "at least 24 hours before the current period ends", "Restore purchases", "TERMS_URL", "PRIVACY_URL"])
      expect(src, s).toContain(s);
    expect(src).not.toMatch(/lifetime|monthly/i);
  });
});
