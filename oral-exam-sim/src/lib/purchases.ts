/**
 * RevenueCat in-app purchases. Same pattern as the other Preceptor apps:
 * lazy import of @revenuecat/purchases-capacitor on native only, buyer-safe
 * revocation, no server of our own.
 *
 * RevenueCat is configured once, at bootstrap (startPurchases in main.tsx),
 * with an app user ID kept in Capacitor Preferences, so the same install is
 * always the same customer. An existing install adopts the ID the SDK already
 * has; only a fresh install gets a new one (configureWithStableId). There is no logOut anywhere. Access comes only
 * from customerInfo.entitlements.active.
 *
 * Three tiers, each sold for 3 months or 6 months, renewing automatically:
 *   complete  unlocks written_access and oral_full_access
 *   written   unlocks written_access (the SAMP bank and mock exam)
 *   oral      unlocks oral_full_access (the oral cases and mock oral)
 * App Store: six auto-renewable subscriptions in one subscription group,
 * ccfpem_<tier>_3m and ccfpem_<tier>_6m. Google Play: one subscription per
 * tier with a P3M and a P6M auto-renewing base plan. The packages shown and
 * their prices come only from the live RevenueCat offering.
 * The store supplies each expiry date through the RevenueCat entitlements.
 * The app caches those dates so access works offline and ends on time.
 * Owner setup is in LAUNCH.md.
 */

import { settle } from "./settle";

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

export type Tier = "complete" | "written" | "oral";
export type Duration = "3m" | "6m";

/** Tiers in paywall order, and the components each one opens. */
export const TIERS: Record<Tier, { grants: Component[] }> = {
  complete: { grants: ["written", "oral"] },
  written: { grants: ["written"] },
  oral: { grants: ["oral"] },
};
export const TIER_ORDER: Tier[] = ["complete", "written", "oral"];

/** Plan lengths in paywall order. Six months is the default. */
export const DURATIONS: Duration[] = ["6m", "3m"];
export const DEFAULT_DURATION: Duration = "6m";
export const DURATION_LABEL: Record<Duration, string> = { "3m": "3 months", "6m": "6 months" };
export const DURATION_MONTHS: Record<Duration, number> = { "3m": 3, "6m": 6 };

/** App Store product ID, such as ccfpem_complete_6m. */
export const productId = (tier: Tier, duration: Duration) => `ccfpem_${tier}_${duration}`;
/** RevenueCat package identifier in the ccfpem offering, such as complete_6m. */
export const packageId = (tier: Tier, duration: Duration) => `${tier}_${duration}`;

/** A plan the store actually offers, with its localised price from RevenueCat. */
export interface Plan {
  tier: Tier;
  duration: Duration;
  priceString: string;
}

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
  purchase(tier: Tier, duration: Duration): Promise<PurchaseOutcome>;
  /** The plans in the live offering, with store prices. Empty when none can be read. */
  plans(): Promise<Plan[]>;
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

/** Preferences key for the RevenueCat app user ID of this install. */
export const APP_USER_ID_KEY = "rc_app_user_id_v1";

/** Key-value store for the app user ID. Capacitor Preferences in the store apps. */
export interface IdStore {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
}

const preferencesStore: IdStore = {
  async get(key) {
    const { Preferences } = await import("@capacitor/preferences");
    return (await Preferences.get({ key })).value;
  },
  async set(key, value) {
    const { Preferences } = await import("@capacitor/preferences");
    await Preferences.set({ key, value });
  },
};

function randomId(): string {
  const c = (globalThis as { crypto?: Crypto }).crypto;
  if (c?.randomUUID) return c.randomUUID();
  const b = new Uint8Array(16);
  if (c?.getRandomValues) c.getRandomValues(b);
  else for (let i = 0; i < b.length; i++) b[i] = Math.floor(Math.random() * 256);
  return Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}

const hasId = (v: string | null | undefined): v is string => typeof v === "string" && v.trim().length > 0;

/** The two RevenueCat calls the identity logic needs. The real SDK in the store apps. */
export interface RcIdentity {
  configure(options: { apiKey: string; appUserID?: string }): Promise<void>;
  getAppUserID(): Promise<{ appUserID: string } | null | undefined>;
}

/**
 * Configures RevenueCat exactly once with a stable app user ID, without ever
 * moving an existing customer to a new identity.
 *   stored ID                -> configure with it
 *   no stored ID (upgrade)   -> configure WITHOUT an appUserID, so the SDK keeps the
 *                               identity it already has (the one any purchase is attached
 *                               to), read it with getAppUserID(), store it, use it from then on
 *   SDK returns no ID at all -> a genuinely fresh install: mint preceptor_<uuid> and store it
 *   SDK read fails or hangs  -> store nothing; the SDK keeps its own identity this session
 *                               and the next launch tries again
 * A storage fault never blocks configure. Returns the ID in use, or null if unknown.
 */
export async function configureWithStableId(sdk: RcIdentity, apiKey: string, store: IdStore = preferencesStore, ms = 2500): Promise<string | null> {
  const saved = await settle(() => store.get(APP_USER_ID_KEY), null, ms);
  await sdk.configure(hasId(saved) ? { apiKey, appUserID: saved } : { apiKey });
  if (hasId(saved)) return saved;
  const unread = Symbol("unread");
  const current = await settle<string | typeof unread>(async () => (await sdk.getAppUserID())?.appUserID ?? "", unread, ms);
  if (current === unread) return null;
  const id = hasId(current) ? current : `preceptor_${randomId()}`;
  await settle(() => store.set(APP_USER_ID_KEY, id), undefined, ms);
  return id;
}

let boot: Promise<RCModule | null> | null = null;
/** Longest one read from RevenueCat may take before it counts as unreachable. */
const STORE_CALL_MS = 20_000;

/**
 * Configures RevenueCat once for the app's lifetime. Called at bootstrap and
 * never awaited by anything that draws the screen. Later callers share the
 * same promise. A configure that failed (no network module, bad key) may be
 * tried again by the next purchase call; a successful one never repeats.
 */
export function startPurchases(): Promise<RCModule | null> {
  if (!boot) {
    boot = (async () => {
      if (!isNative() || !keysConfigured()) return null;
      const m = await import("@revenuecat/purchases-capacitor");
      await configureWithStableId(m.Purchases, platform() === "ios" ? RC_KEY_IOS : RC_KEY_ANDROID);
      return m;
    })().catch(() => {
      boot = null;
      return null;
    });
  }
  return boot;
}

async function rc(): Promise<RCModule | null> {
  return settle(() => startPurchases(), null, 15_000);
}

type EntitlementLike = { isActive?: boolean; expirationDate?: string | null; productIdentifier?: string | null };
type EntitlementMap = Record<string, EntitlementLike | null | undefined> | null | undefined;
type CustomerInfoLike =
  | { entitlements?: { active?: EntitlementMap; all?: EntitlementMap } | null; activeSubscriptions?: string[] | null }
  | null
  | undefined;

/** How long an active entitlement whose date has already passed (store grace period) stays open before the next check. */
const GRACE_MS = 24 * 60 * 60 * 1000;

/** Stands in for an active entitlement with no end date, such as a promotional grant. */
export const NO_END = "9999-12-31T00:00:00.000Z";

/**
 * Expiry dates from the RevenueCat entitlements. Access is decided only by
 * customerInfo.entitlements.active: an entitlement there opens its component,
 * one that is not there never does, whatever its date says.
 *   active, with an end date     -> that date (the current period end, moving forward on renewal)
 *   active, end date passed      -> open for one more day; the next check refreshes it (store grace period)
 *   active, no end date          -> NO_END. Promotional and lifetime grants look like this, often
 *                                   with a null productIdentifier and no activeSubscriptions, so
 *                                   neither of those is ever read here.
 *   not active                   -> only a past end date, kept so the app can say when it ended
 * Products of the other Preceptor apps unlock other entitlements and are ignored.
 */
export function expiryFrom(ci: CustomerInfoLike, now: number = Date.now()): Expiry {
  const date = (c: Component): string | null => {
    const id = ENTITLEMENTS[c];
    const active = ci?.entitlements?.active?.[id];
    if (active) {
      const t = Date.parse(active.expirationDate ?? "");
      if (!Number.isFinite(t)) return NO_END;
      return new Date(t > now ? t : now + GRACE_MS).toISOString();
    }
    const t = Date.parse(ci?.entitlements?.all?.[id]?.expirationDate ?? "");
    return Number.isFinite(t) && t <= now ? new Date(t).toISOString() : null;
  };
  return { written: date("written"), oral: date("oral") };
}

type PackageLike = { identifier?: string; product?: { identifier?: string; priceString?: string } };
type OfferingsLike = { all?: Record<string, { availablePackages?: PackageLike[] } | undefined>; current?: unknown } | null | undefined;

/** Packages of the CCFP-EM offering only. Never falls back to offerings.current. */
export function ccfpemPackages<P extends PackageLike>(offerings: OfferingsLike): P[] {
  return (offerings?.all?.[RC_OFFERING]?.availablePackages ?? []) as P[];
}

/**
 * Tier and length from a store product id. App Store: ccfpem_complete_6m.
 * Google Play, as RevenueCat reports it: subscriptionId:basePlanId, where the
 * subscription id starts with ccfpem_<tier> and the base plan id ends in 3m or
 * 6m, such as ccfpem_complete:p6m. A product of any other length is not a
 * plan this app sells.
 */
export function parseStoreId(storeId: string | undefined): { tier: Tier; duration: Duration | null } | null {
  if (!storeId) return null;
  const [sub, base] = storeId.split(":");
  const m = /^ccfpem_(complete|written|oral)(?:_([a-z0-9]+))?$/.exec(sub);
  if (!m) return null;
  const tail = base ?? m[2] ?? "";
  const d = /(?:^|[^0-9])([36])m$/i.exec(tail);
  return { tier: m[1] as Tier, duration: d ? (`${d[1]}m` as Duration) : null };
}

/** The package for a plan: by package id (complete_6m), else by store product id. */
export function findPackage<P extends PackageLike>(pkgs: P[], tier: Tier, duration: Duration): P | undefined {
  return (
    pkgs.find((p) => p.identifier === packageId(tier, duration)) ??
    pkgs.find((p) => {
      const x = parseStoreId(p.product?.identifier);
      return x?.tier === tier && x.duration === duration;
    })
  );
}

/** Every plan the offering holds, in paywall order. Only packages that exist and carry a store price. */
export function plansFrom(pkgs: PackageLike[]): Plan[] {
  const out: Plan[] = [];
  for (const tier of TIER_ORDER)
    for (const duration of DURATIONS) {
      const priceString = findPackage(pkgs, tier, duration)?.product?.priceString;
      if (priceString) out.push({ tier, duration, priceString });
    }
  return out;
}

/**
 * The subscription a purchase replaces. Written and Oral are one level below
 * Complete, so a candidate who owns one of them upgrades to Complete. The
 * App Store does this itself inside the subscription group. Google Play needs
 * the old product named, or the candidate would pay for both.
 */
export function replaces(tier: Tier, activeSubscriptions: readonly (string | null | undefined)[] | null | undefined): string | null {
  if (tier !== "complete") return null;
  // A promotional grant has no store subscription, so this list can be empty or missing.
  const ids = (activeSubscriptions ?? []).filter((id): id is string => typeof id === "string" && id.length > 0);
  const old = ids.find((id) => {
    const t = parseStoreId(id)?.tier;
    return t === "written" || t === "oral";
  });
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
      const res = await settle(() => m.Purchases.getCustomerInfo(), null, STORE_CALL_MS);
      return res ? expiryFrom(res.customerInfo) : null;
    } catch {
      return null;
    }
  },
  async restore() {
    const m = await rc();
    if (!m) return null;
    try {
      const res = await settle(() => m.Purchases.restorePurchases(), null, STORE_CALL_MS);
      return res ? expiryFrom(res.customerInfo) : null;
    } catch {
      return null;
    }
  },
  async purchase(tier, duration) {
    const m = await rc();
    if (!m) return "unavailable";
    try {
      const pkg = findPackage(await packages(m), tier, duration);
      if (!pkg) return "unavailable";
      let googleProductChangeInfo = null;
      if (platform() === "android") {
        const { customerInfo } = await m.Purchases.getCustomerInfo();
        const old = replaces(tier, customerInfo?.activeSubscriptions);
        if (old) googleProductChangeInfo = { oldProductIdentifier: old, prorationMode: m.PRORATION_MODE.IMMEDIATE_WITH_TIME_PRORATION };
      }
      const res = await m.Purchases.purchasePackage({ aPackage: pkg, googleProductChangeInfo });
      const got = accessAt(expiryFrom(res?.customerInfo));
      return TIERS[tier].grants.every((g) => got[g]) ? "purchased" : "failed";
    } catch (e) {
      const err = e as { userCancelled?: boolean; code?: string | number };
      return err?.userCancelled || err?.code === "1" || err?.code === 1 ? "cancelled" : "failed";
    }
  },
  async plans() {
    const m = await rc();
    if (!m) return [];
    try {
      return plansFrom(await settle(() => packages(m), [], STORE_CALL_MS));
    } catch {
      return [];
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
    async purchase(tier, duration) {
      if (!dev) return "unavailable";
      const d = new Date(now());
      d.setUTCMonth(d.getUTCMonth() + DURATION_MONTHS[duration]);
      for (const c of TIERS[tier].grants) owned = { ...owned, [c]: d.toISOString() };
      return "purchased";
    },
    async plans() {
      // Local dev only: a fixture offering so the paid flow can be clicked through.
      // Kept in src/dev and loaded on demand, so no price is in the store app's code.
      if (!dev) return [];
      return plansFrom((await import("@/dev/offering")).DEV_PACKAGES);
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
