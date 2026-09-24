/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, buyer-safe
 * revocation, no server of our own.
 *
 * Two entitlements, three non-consumable products:
 *   complete  grants written and oral
 *   written   grants written (the SAMP bank and mock exam)
 *   oral      grants oral (the oral cases and mock oral)
 * Owner setup is in LAUNCH.md.
 */

// Public SDK keys. Safe to ship in the app. From RevenueCat > Project > API
// keys. A placeholder keeps purchases off on that platform, and the launch
// gate (LAUNCH_GATE=1 tests/platform.test.ts) fails while one remains.
// The iOS key arrives once the App Store in-app purchase key is uploaded.
export const RC_KEY_IOS = "appl_REPLACE_WITH_CCFPEM_IOS_PUBLIC_KEY";
export const RC_KEY_ANDROID = "goog_ytowRSJmXGIejpeGDKurvANZWCy";

export const ENTITLEMENTS = { written: "written_access", oral: "oral_full_access" } as const;

/**
 * All Preceptor apps share one RevenueCat project, and its Current offering
 * belongs to another app. Always fetch this offering by id. Never use
 * offerings.current.
 */
export const RC_OFFERING = "ccfpem";

export type ProductKey = "complete" | "written" | "oral";

/** Store product IDs. All three are created new in App Store Connect and Play Console. */
export const PRODUCTS: Record<ProductKey, { id: string; grants: (keyof typeof ENTITLEMENTS)[]; fallbackPrice: string }> = {
  complete: { id: "ccfpem_complete_lifetime", grants: ["written", "oral"], fallbackPrice: "CA$199.99" },
  written: { id: "ccfpem_written_lifetime", grants: ["written"], fallbackPrice: "CA$149.99" },
  oral: { id: "oral_full_lifetime", grants: ["oral"], fallbackPrice: "CA$99.99" },
};

export interface Access {
  written: boolean;
  oral: boolean;
}

export const NO_ACCESS: Access = { written: false, oral: false };

export type PurchaseOutcome = "purchased" | "cancelled" | "failed" | "unavailable";

export interface PurchasesAdapter {
  /** Current access, or null when the store cannot be reached. */
  check(): Promise<Access | null>;
  /** Same, after asking the store to restore purchases. */
  restore(): Promise<Access | null>;
  purchase(product: ProductKey): Promise<PurchaseOutcome>;
  /** Localised store prices. Missing keys fall back to PRODUCTS. */
  prices(): Promise<Partial<Record<ProductKey, string>>>;
}

type RCModule = typeof import("@revenuecat/purchases-capacitor");

function platform(): string {
  try {
    const cap = (window as unknown as { Capacitor?: { getPlatform?: () => string } }).Capacitor;
    return cap?.getPlatform?.() ?? "web";
  } catch {
    return "web";
  }
}

export function isNative(): boolean {
  return platform() === "ios" || platform() === "android";
}

const isPlaceholder = (key: string) => key.includes("REPLACE");

/** True when the key for this platform is real. Web never has one. */
export function keysConfigured(p: string = platform()): boolean {
  if (p === "ios") return !isPlaceholder(RC_KEY_IOS);
  if (p === "android") return !isPlaceholder(RC_KEY_ANDROID);
  return false;
}

/** Both store keys are real. Required before a release build. */
export function allKeysConfigured(): boolean {
  return !isPlaceholder(RC_KEY_IOS) && !isPlaceholder(RC_KEY_ANDROID);
}

let mod: RCModule | null = null;
let configured = false;

async function rc(): Promise<RCModule | null> {
  if (!isNative() || !keysConfigured()) return null;
  if (!mod) {
    try {
      mod = await import("@revenuecat/purchases-capacitor");
    } catch {
      return null;
    }
  }
  if (!configured) {
    try {
      await mod.Purchases.configure({ apiKey: platform() === "ios" ? RC_KEY_IOS : RC_KEY_ANDROID });
      configured = true;
    } catch {
      return null;
    }
  }
  return mod;
}

type CustomerInfoLike = { entitlements?: { active?: Record<string, unknown> } } | null | undefined;

export function accessFrom(ci: CustomerInfoLike): Access {
  const active = ci?.entitlements?.active ?? {};
  return { written: Boolean(active[ENTITLEMENTS.written]), oral: Boolean(active[ENTITLEMENTS.oral]) };
}

type PackageLike = { identifier?: string; product?: { identifier?: string; priceString?: string } };
type OfferingsLike = { all?: Record<string, { availablePackages?: PackageLike[] } | undefined>; current?: unknown } | null | undefined;

/** Packages of the CCFP-EM offering only. Never falls back to offerings.current. */
export function ccfpemPackages<P extends PackageLike>(offerings: OfferingsLike): P[] {
  return (offerings?.all?.[RC_OFFERING]?.availablePackages ?? []) as P[];
}

/** The package for a product: by package id (complete, written, oral), else by store product id. */
export function findPackage<P extends PackageLike>(pkgs: P[], key: ProductKey): P | undefined {
  return pkgs.find((p) => p.identifier === key) ?? pkgs.find((p) => p.product?.identifier === PRODUCTS[key].id);
}

async function packages(m: RCModule) {
  const offerings = await m.Purchases.getOfferings();
  return ccfpemPackages<(typeof offerings.all)[string]["availablePackages"][number]>(offerings);
}

export const revenueCat: PurchasesAdapter = {
  async check() {
    const m = await rc();
    if (!m) return null;
    try {
      return accessFrom((await m.Purchases.getCustomerInfo()).customerInfo);
    } catch {
      return null;
    }
  },
  async restore() {
    const m = await rc();
    if (!m) return null;
    try {
      return accessFrom((await m.Purchases.restorePurchases()).customerInfo);
    } catch {
      return null;
    }
  },
  async purchase(product) {
    const m = await rc();
    if (!m) return "unavailable";
    try {
      const pkg = findPackage(await packages(m), product);
      if (!pkg) return "unavailable";
      const res = await m.Purchases.purchasePackage({ aPackage: pkg });
      const got = accessFrom(res?.customerInfo);
      return PRODUCTS[product].grants.every((g) => got[g]) ? "purchased" : "failed";
    } catch (e) {
      const err = e as { userCancelled?: boolean; code?: string | number };
      return err?.userCancelled || err?.code === "1" || err?.code === 1 ? "cancelled" : "failed";
    }
  },
  async prices() {
    const m = await rc();
    if (!m) return {};
    try {
      const pkgs = await packages(m);
      const out: Partial<Record<ProductKey, string>> = {};
      for (const key of Object.keys(PRODUCTS) as ProductKey[]) {
        const p = findPackage(pkgs, key);
        if (p?.product?.priceString) out[key] = p.product.priceString;
      }
      return out;
    } catch {
      return {};
    }
  },
};

/**
 * Browser build. Purchases only exist in the store apps. In local dev a
 * purchase is simulated so the paid flow can be clicked through. A hosted
 * production web build never grants access.
 */
export function webAdapter(dev: boolean): PurchasesAdapter {
  const on: Access = { ...NO_ACCESS };
  return {
    async check() {
      return dev ? { ...on } : { ...NO_ACCESS };
    },
    async restore() {
      return dev ? { ...on } : { ...NO_ACCESS };
    },
    async purchase(product) {
      if (!dev) return "unavailable";
      for (const g of PRODUCTS[product].grants) on[g] = true;
      return "purchased";
    },
    async prices() {
      return {};
    },
  };
}

export function defaultAdapter(): PurchasesAdapter {
  // VITE_SEED is set only for the static build the screenshot script uses.
  return isNative() ? revenueCat : webAdapter(Boolean(import.meta.env?.DEV || import.meta.env?.VITE_SEED === "1"));
}

/**
 * Decides access at launch without ever locking out a paying user by
 * mistake. Per entitlement:
 *   store says active          -> granted
 *   store unreachable          -> keep the cached state
 *   store says inactive        -> if cached as granted, try a silent restore
 *   restore also says inactive -> revoke
 */
export async function reconcileAccess(cached: Access, p: PurchasesAdapter): Promise<Access> {
  const now = await p.check();
  if (!now) return cached;
  const lost = (Object.keys(cached) as (keyof Access)[]).some((k) => cached[k] && !now[k]);
  if (!lost) return { written: cached.written || now.written, oral: cached.oral || now.oral };
  const restored = await p.restore();
  if (!restored) return { written: cached.written || now.written, oral: cached.oral || now.oral };
  return restored;
}
