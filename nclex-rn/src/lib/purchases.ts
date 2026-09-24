/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, buyer-safe
 * revocation, no server of our own.
 *
 * One entitlement, two products:
 *   nclexrn_lifetime  one time purchase
 *   nclexrn_monthly   auto-renewing monthly subscription
 * Both grant nclexrn_access. Owner setup is in LAUNCH.md.
 */

// Public SDK keys. Safe to ship in the app. From RevenueCat > Project > API
// keys. A placeholder keeps purchases off on that platform, and the launch
// gate (LAUNCH_GATE=1 tests/platform.test.ts) fails while one remains.
export const RC_KEY_IOS = "appl_REPLACE_WITH_NCLEXRN_IOS_PUBLIC_KEY";
export const RC_KEY_ANDROID = "goog_REPLACE_WITH_NCLEXRN_ANDROID_PUBLIC_KEY";

export const ENTITLEMENT = "nclexrn_access";

/**
 * All Preceptor apps share one RevenueCat project, and its Current offering
 * belongs to another app. Always fetch this offering by id. Never use
 * offerings.current.
 */
export const RC_OFFERING = "nclexrn";

export type ProductKey = "lifetime" | "monthly";

/** Store product IDs. fallbackPrice shows only until the store price loads. */
export const PRODUCTS: Record<ProductKey, { id: string; fallbackPrice: string; period: string | null }> = {
  lifetime: { id: "nclexrn_lifetime", fallbackPrice: "US$59.99", period: null },
  monthly: { id: "nclexrn_monthly", fallbackPrice: "US$14.99", period: "month" },
};

export interface Access {
  full: boolean;
}

export const NO_ACCESS: Access = { full: false };

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
  return { full: Boolean(ci?.entitlements?.active?.[ENTITLEMENT]) };
}

type PackageLike = { identifier?: string; product?: { identifier?: string; priceString?: string } };
type OfferingsLike = { all?: Record<string, { availablePackages?: PackageLike[] } | undefined>; current?: unknown } | null | undefined;

/** Packages of the nclexrn offering only. Never falls back to offerings.current. */
export function offeringPackages<P extends PackageLike>(offerings: OfferingsLike): P[] {
  return (offerings?.all?.[RC_OFFERING]?.availablePackages ?? []) as P[];
}

/** The package for a product: by store product id, else by the RevenueCat package type. */
export function findPackage<P extends PackageLike>(pkgs: P[], key: ProductKey): P | undefined {
  const byType = key === "lifetime" ? "$rc_lifetime" : "$rc_monthly";
  return pkgs.find((p) => p.product?.identifier === PRODUCTS[key].id) ?? pkgs.find((p) => p.identifier === byType || p.identifier === key);
}

async function packages(m: RCModule) {
  const offerings = await m.Purchases.getOfferings();
  return offeringPackages<(typeof offerings.all)[string]["availablePackages"][number]>(offerings);
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
      return accessFrom(res?.customerInfo).full ? "purchased" : "failed";
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
    async purchase() {
      if (!dev) return "unavailable";
      on.full = true;
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
 * Decides access at launch without ever locking out a paying user by mistake.
 *   store says active          -> granted
 *   store unreachable          -> keep the cached state
 *   store says inactive        -> if cached as granted, try a silent restore
 *   restore also says inactive -> revoke (a lapsed monthly subscription ends here)
 */
export async function reconcileAccess(cached: Access, p: PurchasesAdapter): Promise<Access> {
  const now = await p.check();
  if (!now) return cached;
  if (now.full || !cached.full) return now;
  const restored = await p.restore();
  return restored ?? cached;
}
