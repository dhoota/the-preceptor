/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, buyer-safe
 * revocation, no server of our own.
 *
 * Three products, each giving 11 months of access from the day of purchase:
 *   complete  grants written and oral
 *   written   grants written (the SAMP bank and mock exam)
 *   oral      grants oral (the oral cases and mock oral)
 * App Store: non-renewing subscriptions. Google Play: one-time products,
 * set as non-consumable in RevenueCat so a reinstall can restore them.
 *
 * Neither store gives an expiry for these, and RevenueCat treats any product
 * attached to an entitlement as unlocked forever. So the products are not
 * attached to entitlements, and the app works out access itself from each
 * purchase date in customerInfo.nonSubscriptionTransactions.
 * Owner setup is in LAUNCH.md.
 */

// Public SDK keys. Safe to ship in the app. From RevenueCat > Project > API
// keys. A placeholder keeps purchases off on that platform, and the launch
// gate (LAUNCH_GATE=1 tests/platform.test.ts) fails while one remains.
// The iOS key arrives once the App Store in-app purchase key is uploaded.
export const RC_KEY_IOS = "appl_REPLACE_WITH_CCFPEM_IOS_PUBLIC_KEY";
export const RC_KEY_ANDROID = "goog_ytowRSJmXGIejpeGDKurvANZWCy";

/** Length of access bought by one purchase, in calendar months. */
export const ACCESS_MONTHS = 11;

export type Component = "written" | "oral";

/**
 * All Preceptor apps share one RevenueCat project, and its Current offering
 * belongs to another app. Always fetch this offering by id. Never use
 * offerings.current.
 */
export const RC_OFFERING = "ccfpem";

export type ProductKey = "complete" | "written" | "oral";

/** Store product IDs, the same on the App Store and Google Play. */
export const PRODUCTS: Record<ProductKey, { id: string; grants: Component[]; fallbackPrice: string }> = {
  complete: { id: "ccfpem_complete_11mo", grants: ["written", "oral"], fallbackPrice: "CA$199.99" },
  written: { id: "ccfpem_written_11mo", grants: ["written"], fallbackPrice: "CA$149.99" },
  oral: { id: "ccfpem_oral_11mo", grants: ["oral"], fallbackPrice: "CA$99.99" },
};

export interface Access {
  written: boolean;
  oral: boolean;
}

export const NO_ACCESS: Access = { written: false, oral: false };

/** When access to each component ends, as an ISO date, or null if never bought. */
export interface Expiry {
  written: string | null;
  oral: string | null;
}

export const NO_EXPIRY: Expiry = { written: null, oral: null };

const COMPONENTS: Component[] = ["written", "oral"];

/** Adds calendar months. A day past the end of the target month clamps to its last day. */
export function addMonths(from: Date, months: number): Date {
  const d = new Date(from.getTime());
  const day = d.getUTCDate();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() + months);
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  return d;
}

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

type CustomerInfoLike = { nonSubscriptionTransactions?: { productIdentifier?: string; purchaseDate?: string }[] } | null | undefined;

/**
 * Expiry dates from the purchase history. Each purchase gives ACCESS_MONTHS.
 * A purchase made while a component is still open extends it from its
 * current end, so buying early never loses time. Entitlements are ignored
 * on purpose: RevenueCat would report these products as unlocked forever.
 */
export function expiryFrom(ci: CustomerInfoLike): Expiry {
  const byId = new Map(Object.values(PRODUCTS).map((p) => [p.id, p.grants]));
  const buys = (ci?.nonSubscriptionTransactions ?? [])
    .map((t) => ({ grants: byId.get(t.productIdentifier ?? ""), at: Date.parse(t.purchaseDate ?? "") }))
    .filter((t): t is { grants: Component[]; at: number } => Boolean(t.grants) && Number.isFinite(t.at))
    .sort((a, b) => a.at - b.at);
  const until: Record<Component, number | null> = { written: null, oral: null };
  for (const b of buys) {
    for (const c of b.grants) {
      const start = Math.max(b.at, until[c] ?? 0);
      until[c] = addMonths(new Date(start), ACCESS_MONTHS).getTime();
    }
  }
  const iso = (t: number | null) => (t === null ? null : new Date(t).toISOString());
  return { written: iso(until.written), oral: iso(until.oral) };
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
      const res = await m.Purchases.purchasePackage({ aPackage: pkg });
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
  const bought: { productIdentifier: string; purchaseDate: string }[] = [];
  const current = () => (dev ? expiryFrom({ nonSubscriptionTransactions: bought }) : { ...NO_EXPIRY });
  return {
    async check() {
      return current();
    },
    async restore() {
      return current();
    },
    async purchase(product) {
      if (!dev) return "unavailable";
      bought.push({ productIdentifier: PRODUCTS[product].id, purchaseDate: new Date(now()).toISOString() });
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
