/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, buyer-safe
 * revocation, no server of our own.
 *
 * One entitlement, two auto-renewing subscriptions:
 *   nclexrn_6month  every 6 months (App Store group level 1, Play base plan p6m)
 *   nclexrn_3month  every 3 months (App Store group level 2, Play base plan p3m)
 * Prices come only from the store, through RevenueCat. The app has no price of its own.
 * Both grant nclexrn_access. Both sit in the App Store subscription group
 * "NCLEX-RN Access". There is no lifetime purchase. Owner setup is in LAUNCH.md.
 */

// Public SDK keys for the NCLEX iOS and Android apps in the shared Preceptor
// RevenueCat project (9de07656). Safe to ship in the app. The launch gate
// (LAUNCH_GATE=1 tests/platform.test.ts) fails if either is a placeholder.
export const RC_KEY_IOS = "appl_qgQcyvKZciCQsltVKSlDmmfrGeq";
export const RC_KEY_ANDROID = "goog_pxjNpwnbZtVIDDQXvWbqeTDswPq";

export const ENTITLEMENT = "nclexrn_access";

/**
 * All Preceptor apps share one RevenueCat project, and its Current offering
 * belongs to another app. Always fetch this offering by id. Never use
 * offerings.current.
 */
export const RC_OFFERING = "nclexrn";

export type ProductKey = "sixMonth" | "threeMonth";

/** Store product IDs, the Play base plan and the RevenueCat package type. */
export const PRODUCTS: Record<ProductKey, { id: string; basePlan: string; packageType: string; period: string; months: number }> = {
  sixMonth: { id: "nclexrn_6month", basePlan: "p6m", packageType: "$rc_six_month", period: "6 months", months: 6 },
  threeMonth: { id: "nclexrn_3month", basePlan: "p3m", packageType: "$rc_three_month", period: "3 months", months: 3 },
};

/** Localised price strings of the packages in the live offering, by plan. */
export type Prices = Partial<Record<ProductKey, string>>;

export interface PlanView {
  /** loading: the offering has not answered yet. failed: it could not load or has neither plan. */
  status: "loading" | "failed" | "ready";
  /** Plans to show, 6 months first. When not ready, both plans show disabled with no price. */
  plans: { key: ProductKey; price: string | null; enabled: boolean }[];
  /** The plan shown as the main choice. 6 months when it exists. */
  primary: ProductKey;
}

/**
 * What the paywall shows. undefined means still loading, null means the
 * offering failed. A plan appears only when its package is in the live
 * offering, and only with the store's own priceString.
 */
export function planView(prices: Prices | null | undefined): PlanView {
  const live = prices ? PLAN_ORDER.filter((k) => Boolean(prices[k])) : [];
  if (!live.length) {
    return {
      status: prices === undefined ? "loading" : "failed",
      plans: PLAN_ORDER.map((key) => ({ key, price: null, enabled: false })),
      primary: "sixMonth",
    };
  }
  return { status: "ready", plans: live.map((key) => ({ key, price: prices![key]!, enabled: true })), primary: live[0] };
}

/** Paywall order: the 6 month plan first, as on the App Store group (level 1). */
export const PLAN_ORDER: ProductKey[] = ["sixMonth", "threeMonth"];

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
  /** priceString of each plan whose package is in the live offering. null when the offering cannot be loaded. */
  prices(): Promise<Prices | null>;
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

/**
 * The package for a product: by RevenueCat package type, else by store
 * product id. On Play, RevenueCat reports a subscription as
 * "subscriptionId:basePlanId", for example "nclexrn_3month:p3m".
 */
export function findPackage<P extends PackageLike>(pkgs: P[], key: ProductKey): P | undefined {
  const { id, packageType } = PRODUCTS[key];
  return (
    pkgs.find((p) => p.identifier === packageType) ??
    pkgs.find((p) => p.product?.identifier === id || p.product?.identifier?.startsWith(`${id}:`))
  );
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
    if (!m) return null;
    try {
      const pkgs = await packages(m);
      const out: Prices = {};
      for (const key of Object.keys(PRODUCTS) as ProductKey[]) {
        const p = findPackage(pkgs, key);
        if (p?.product?.priceString) out[key] = p.product.priceString;
      }
      return out;
    } catch {
      return null;
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
      // Local dev only: stand-in labels so the paid flow can be clicked through. Never a real price.
      return dev ? { sixMonth: "Test price", threeMonth: "Test price" } : null;
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
 *   restore also says inactive -> revoke (a lapsed subscription ends here)
 */
export async function reconcileAccess(cached: Access, p: PurchasesAdapter): Promise<Access> {
  const now = await p.check();
  if (!now) return cached;
  if (now.full || !cached.full) return now;
  const restored = await p.restore();
  return restored ?? cached;
}
