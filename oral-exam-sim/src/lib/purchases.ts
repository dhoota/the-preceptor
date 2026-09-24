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

// Public SDK keys. Safe to ship in the app. REPLACE with the keys from
// RevenueCat > Project > API keys. Placeholders keep purchases disabled.
export const RC_KEY_IOS = "appl_REPLACE_WITH_CCFPEM_IOS_PUBLIC_KEY";
export const RC_KEY_ANDROID = "goog_REPLACE_WITH_CCFPEM_ANDROID_PUBLIC_KEY";

export const ENTITLEMENTS = { written: "written_access", oral: "oral_full_access" } as const;
export const RC_OFFERING = "ccfpem";

export type ProductKey = "complete" | "written" | "oral";

/** Store product IDs. `oral_full_lifetime` keeps the record already created. */
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

export function keysConfigured(): boolean {
  return !RC_KEY_IOS.includes("REPLACE") && !RC_KEY_ANDROID.includes("REPLACE");
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

async function packages(m: RCModule) {
  const offerings = await m.Purchases.getOfferings();
  const off = offerings?.all?.[RC_OFFERING] ?? offerings?.current ?? null;
  return off?.availablePackages ?? [];
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
      const pkg = (await packages(m)).find((p) => p.product?.identifier === PRODUCTS[product].id);
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
        const p = pkgs.find((x) => x.product?.identifier === PRODUCTS[key].id);
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
  return isNative() ? revenueCat : webAdapter(Boolean(import.meta.env?.DEV));
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
