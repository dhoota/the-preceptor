/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, one
 * entitlement, buyer-safe revocation. No server of our own.
 *
 * Product: one non-consumable "lifetime" unlock of every case.
 * Owner setup is in LAUNCH.md.
 */

// Public SDK keys. These are safe to ship in the app (they are not secrets).
// REPLACE with the keys from RevenueCat > Project > API keys once the
// Preceptor: Oral apps are added. Placeholders keep purchases disabled.
export const RC_KEY_IOS = "appl_REPLACE_WITH_ORAL_IOS_PUBLIC_KEY";
export const RC_KEY_ANDROID = "goog_REPLACE_WITH_ORAL_ANDROID_PUBLIC_KEY";
export const RC_ENTITLEMENT = "oral_full_access";
export const RC_OFFERING = "oral_unlock";

export type PurchaseOutcome = "purchased" | "cancelled" | "failed" | "unavailable";

export interface PurchasesAdapter {
  /** true = entitled, false = definitely not, null = could not tell (offline, error). */
  check(): Promise<boolean | null>;
  /** Same tri-state, after asking the store to restore. */
  restore(): Promise<boolean | null>;
  purchase(): Promise<PurchaseOutcome>;
  /** Localised store price, e.g. "CA$129.99". Null until loaded. */
  price(): Promise<string | null>;
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
const entitled = (ci: CustomerInfoLike) => Boolean(ci?.entitlements?.active?.[RC_ENTITLEMENT]);

async function lifetimePackage(m: RCModule) {
  const offerings = await m.Purchases.getOfferings();
  const off = offerings?.all?.[RC_OFFERING] ?? offerings?.current ?? null;
  const pkgs = off?.availablePackages ?? [];
  return off?.lifetime ?? pkgs.find((p) => p.packageType === "LIFETIME") ?? pkgs[0] ?? null;
}

export const revenueCat: PurchasesAdapter = {
  async check() {
    const m = await rc();
    if (!m) return null;
    try {
      return entitled((await m.Purchases.getCustomerInfo()).customerInfo);
    } catch {
      return null;
    }
  },
  async restore() {
    const m = await rc();
    if (!m) return null;
    try {
      return entitled((await m.Purchases.restorePurchases()).customerInfo);
    } catch {
      return null;
    }
  },
  async purchase() {
    const m = await rc();
    if (!m) return "unavailable";
    try {
      const pkg = await lifetimePackage(m);
      if (!pkg) return "unavailable";
      const res = await m.Purchases.purchasePackage({ aPackage: pkg });
      return entitled(res?.customerInfo) ? "purchased" : "failed";
    } catch (e) {
      const err = e as { userCancelled?: boolean; code?: string | number };
      return err?.userCancelled || err?.code === "1" || err?.code === 1 ? "cancelled" : "failed";
    }
  },
  async price() {
    const m = await rc();
    if (!m) return null;
    try {
      return (await lifetimePackage(m))?.product?.priceString ?? null;
    } catch {
      return null;
    }
  },
};

/**
 * Browser build. Purchases only exist in the store apps. In local dev the
 * unlock is simulated so the full flow can be clicked through. A hosted
 * production web build never hands out access.
 */
export function webAdapter(dev: boolean): PurchasesAdapter {
  let on = false;
  return {
    async check() {
      return dev ? on : false;
    },
    async restore() {
      return dev ? on : false;
    },
    async purchase() {
      if (!dev) return "unavailable";
      on = true;
      return "purchased";
    },
    async price() {
      return dev ? "CA$129.99 (demo)" : null;
    },
  };
}

export function defaultAdapter(): PurchasesAdapter {
  return isNative() ? revenueCat : webAdapter(Boolean(import.meta.env?.DEV));
}

/**
 * Decides access at launch without ever locking out a paying user by
 * mistake. Mirrors the Preceptor CCFP logic:
 *   entitled            -> unlocked
 *   not entitled        -> try a silent restore
 *   restore says no     -> locked (a clean, confirmed "no purchase")
 *   any unknown/offline -> keep the cached state
 */
export async function reconcileAccess(cached: boolean, p: PurchasesAdapter): Promise<boolean> {
  const now = await p.check();
  if (now === true) return true;
  if (now === null) return cached;
  if (!cached) return false;
  const restored = await p.restore();
  if (restored === true) return true;
  if (restored === false) return false;
  return cached;
}
