/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, buyer-safe
 * revocation, no server of our own.
 *
 * Three yearly subscriptions that renew automatically:
 *   complete  unlocks written_access and oral_full_access
 *   written   unlocks written_access (the SAMP bank and mock exam)
 *   oral      unlocks oral_full_access (the oral cases and mock oral)
 * App Store: auto-renewable subscriptions of one year in one subscription
 * group. Google Play: subscriptions with a one year auto-renewing base plan.
 * The store supplies each expiry date through the RevenueCat entitlements.
 * The app caches those dates so access works offline and ends on time.
 * Owner setup is in LAUNCH.md.
 */

// Public SDK keys. Safe to ship in the app. From RevenueCat > Project > API
// keys. A placeholder keeps purchases off on that platform, and the launch
// gate (LAUNCH_GATE=1 tests/platform.test.ts) fails while one remains.
export const RC_KEY_IOS = "appl_YxaBlQZmJUqbaUJyqapCBTpHUAX";
export const RC_KEY_ANDROID = "goog_ytowRSJmXGIejpeGDKurvANZWCy";

export type Component = "written" | "oral";

/**
 * All Preceptor apps share one RevenueCat project, and its Current offering
 * belongs to another app. Always fetch this offering by id. Never use
 * offerings.current.
 */
export const RC_OFFERING = "ccfpem";

export type ProductKey = "complete" | "written" | "oral";

/**
 * Store product IDs, the same on the App Store and Google Play. On Play these
 * are subscription IDs, and RevenueCat may append the base plan after a colon.
 */
export const PRODUCTS: Record<ProductKey, { id: string; grants: Component[]; fallbackPrice: string }> = {
  complete: { id: "ccfpem_complete_1y", grants: ["written", "oral"], fallbackPrice: "US$199.99" },
  written: { id: "ccfpem_written_1y", grants: ["written"], fallbackPrice: "US$149.99" },
  oral: { id: "ccfpem_oral_1y", grants: ["oral"], fallbackPrice: "US$99.99" },
};

/** RevenueCat entitlement per component. Complete is attached to both. */
export const ENTITLEMENTS: Record<Component, string> = { written: "written_access", oral: "oral_full_access" };

export interface Access {
  written: boolean;
  oral: boolean;
}

export const NO_ACCESS: Access = { written: false, oral: false };

/** When access to each component ends or renews, as an ISO date, or null if never bought. */
export interface Expiry {
  written: string | null;
  oral: string | null;
}

export const NO_EXPIRY: Expiry = { written: null, oral: null };

const COMPONENTS: Component[] = ["written", "oral"];

/** A date for display, such as "12 Aug 2027". */
export function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", { day: "numeric", month: "short", year: "numeric" });
}

/** Access now, from the expiry dates. Uses the device clock, so it also works offline. */
export function accessAt(e: Expiry, now: number = Date.now()): Access {
  const on = (iso: string | null) => (iso ? Date.parse(iso) > now : false);
  return { written: on(e.written), oral: on(e.oral) };
}

export type PurchaseOutcome = "purchased" | "cancelled" | "failed" | "unavailable";

export interface PurchasesAdapter {
  /** Current expiry dates, or null when the store cannot be reached. */
  check(): Promise<Expiry | null>;
  /** Same, after asking the store to restore purchases. */
  restore(): Promise<Expiry | null>;
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

type EntitlementLike = { isActive?: boolean; expirationDate?: string | null };
type CustomerInfoLike = { entitlements?: { all?: Record<string, EntitlementLike | undefined> } } | null | undefined;

/** Stands in for an active entitlement with no end date, such as a promotional grant. */
export const NO_END = "9999-12-31T00:00:00.000Z";

/**
 * Expiry dates from the RevenueCat entitlements. For a yearly subscription
 * this is the current period end, and it moves forward on each renewal. An
 * expired entitlement keeps its past date, so the app can say when it ended.
 * Products of the other Preceptor apps unlock other entitlements and are ignored.
 */
export function expiryFrom(ci: CustomerInfoLike): Expiry {
  const date = (c: Component): string | null => {
    const e = ci?.entitlements?.all?.[ENTITLEMENTS[c]];
    if (!e) return null;
    const t = Date.parse(e.expirationDate ?? "");
    if (e.isActive) return Number.isFinite(t) ? new Date(t).toISOString() : NO_END;
    return Number.isFinite(t) ? new Date(t).toISOString() : null;
  };
  return { written: date("written"), oral: date("oral") };
}

type PackageLike = { identifier?: string; product?: { identifier?: string; priceString?: string } };
type OfferingsLike = { all?: Record<string, { availablePackages?: PackageLike[] } | undefined>; current?: unknown } | null | undefined;

/** Packages of the CCFP-EM offering only. Never falls back to offerings.current. */
export function ccfpemPackages<P extends PackageLike>(offerings: OfferingsLike): P[] {
  return (offerings?.all?.[RC_OFFERING]?.availablePackages ?? []) as P[];
}

/** True when a store product id is this product, with or without a Play base plan suffix. */
export function isProduct(storeId: string | undefined, key: ProductKey): boolean {
  return storeId?.split(":")[0] === PRODUCTS[key].id;
}

/** The package for a product: by package id (complete, written, oral), else by store product id. */
export function findPackage<P extends PackageLike>(pkgs: P[], key: ProductKey): P | undefined {
  return pkgs.find((p) => p.identifier === key) ?? pkgs.find((p) => isProduct(p.product?.identifier, key));
}

/**
 * The subscription a purchase replaces. Written and Oral are one level below
 * Complete, so a candidate who owns one of them upgrades to Complete. The
 * App Store does this itself inside the subscription group. Google Play needs
 * the old product named, or the candidate would pay for both.
 */
export function replaces(product: ProductKey, activeSubscriptions: string[]): string | null {
  if (product !== "complete") return null;
  const old = activeSubscriptions.find((id) => isProduct(id, "written") || isProduct(id, "oral"));
  return old ? old.split(":")[0] : null;
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
      return expiryFrom((await m.Purchases.getCustomerInfo()).customerInfo);
    } catch {
      return null;
    }
  },
  async restore() {
    const m = await rc();
    if (!m) return null;
    try {
      return expiryFrom((await m.Purchases.restorePurchases()).customerInfo);
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
      let googleProductChangeInfo = null;
      if (platform() === "android") {
        const { customerInfo } = await m.Purchases.getCustomerInfo();
        const old = replaces(product, customerInfo.activeSubscriptions);
        if (old) googleProductChangeInfo = { oldProductIdentifier: old, prorationMode: m.PRORATION_MODE.IMMEDIATE_WITH_TIME_PRORATION };
      }
      const res = await m.Purchases.purchasePackage({ aPackage: pkg, googleProductChangeInfo });
      const got = accessAt(expiryFrom(res?.customerInfo));
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
export function webAdapter(dev: boolean, now: () => number = Date.now): PurchasesAdapter {
  let owned: Expiry = { ...NO_EXPIRY };
  return {
    async check() {
      return { ...owned };
    },
    async restore() {
      return { ...owned };
    },
    async purchase(product) {
      if (!dev) return "unavailable";
      const d = new Date(now());
      d.setUTCFullYear(d.getUTCFullYear() + 1);
      for (const c of PRODUCTS[product].grants) owned = { ...owned, [c]: d.toISOString() };
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

/** The later of two expiry dates, per component. */
export function laterExpiry(a: Expiry, b: Expiry): Expiry {
  const pick = (x: string | null, y: string | null) => (!x ? y : !y ? x : Date.parse(x) >= Date.parse(y) ? x : y);
  return { written: pick(a.written, b.written), oral: pick(a.oral, b.oral) };
}

/**
 * Decides expiry dates at launch without ever cutting a paying user short
 * by mistake. The dates themselves still end access on time, offline too.
 *   store unreachable                     -> keep the cached dates
 *   store dates keep everything now open  -> use the store dates
 *   store dates would close something     -> try a silent restore first
 *   restore unreachable                   -> keep the cached dates
 *   restore answers                       -> use the restored dates
 */
export async function reconcileExpiry(cached: Expiry, p: PurchasesAdapter, now: number = Date.now()): Promise<Expiry> {
  const fromStore = await p.check();
  if (!fromStore) return cached;
  const before = accessAt(cached, now);
  const after = accessAt(fromStore, now);
  if (!COMPONENTS.some((c) => before[c] && !after[c])) return fromStore;
  const restored = await p.restore();
  return restored ?? cached;
}
