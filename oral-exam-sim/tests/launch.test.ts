import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Run effects at once so the splash timer can be driven without a DOM.
const cleanups: (void | (() => void))[] = [];
vi.mock("react", async (orig) => {
  const real = await orig<typeof import("react")>();
  return { ...real, useEffect: (f: () => void | (() => void)) => void cleanups.push(f()) };
});

const { Splash, SPLASH_MS } = await import("@/components/Splash");
const { settle } = await import("@/lib/settle");
const { configureWithStableId, APP_USER_ID_KEY } = await import("@/lib/purchases");

const SRC = new URL("../src/", import.meta.url).pathname;
function files(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return /cases|samps|generated/.test(f) ? [] : files(p);
    return /\.(ts|tsx|css)$/.test(f) ? [p] : [];
  });
}
const read = (rel: string) => readFileSync(join(SRC, rel), "utf8");
const code = files(SRC).map((p) => [p, readFileSync(p, "utf8")] as const);

beforeEach(() => {
  vi.useFakeTimers();
  cleanups.length = 0;
});
afterEach(() => vi.useRealTimers());

describe("launch splash", () => {
  it("ends itself about 1.2 s after mount, with nothing to tap", () => {
    const onDone = vi.fn();
    const el = Splash({ onDone });
    expect(SPLASH_MS).toBe(1200);
    vi.advanceTimersByTime(SPLASH_MS - 1);
    expect(onDone).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1);
    expect(onDone).toHaveBeenCalledTimes(1);
    // A tap or click anywhere on the splash also ends it.
    expect(el.props.onClick).toBe(onDone);
    expect(el.props.onPointerDown).toBe(onDone);
  });
  it("stops its timer when unmounted", () => {
    const onDone = vi.fn();
    Splash({ onDone });
    for (const c of cleanups) if (typeof c === "function") c();
    vi.advanceTimersByTime(SPLASH_MS * 2);
    expect(onDone).not.toHaveBeenCalled();
  });
  it("has no button and waits on nothing", () => {
    const src = read("components/Splash.tsx");
    expect(src).not.toMatch(/<button|role="button"|await|Purchases|purchases|fetch\(|Promise/);
  });
});

describe("app entry is never gated", () => {
  it("opens the app without a click-through screen or a ready gate", () => {
    const app = read("App.tsx");
    expect(app).not.toMatch(/Disclaimer|acceptedDisclaimer|onAccept/);
    expect(app).not.toMatch(/if \(!app\.ready\)/);
    expect(app).toMatch(/<Splash onDone=/);
    expect(app).not.toMatch(/\bawait\b/);
  });
  it("has no TAP TO BEGIN or 'I understand' gate anywhere", () => {
    for (const [p, s] of code) expect(s, p).not.toMatch(/tap to begin|tap to start|I understand|acceptedDisclaimer/i);
  });
  it("bounds every launch read so a storage fault cannot keep the app closed", () => {
    const state = read("state.tsx");
    for (const r of ["attempts", "deck", "settings", "cachedExpiry", "sampAttempts", "mockExams", "mockOrals"])
      expect(state, r).toMatch(new RegExp(`settle\\(\\(\\) => repo\\.${r}\\(\\)`));
    expect(state).toMatch(/settle\(\(\) => reconcileExpiry/);
  });
});

describe("RevenueCat rules", () => {
  it("configures once, with an app user ID, and never logs out", () => {
    const all = code.map(([, s]) => s).join("\n");
    // One configure call site, reached only through the memoised startPurchases().
    expect(all.match(/\.configure\(/g)?.length).toBe(1);
    expect(read("lib/purchases.ts")).toMatch(/await configureWithStableId\(m\.Purchases/);
    expect(all).not.toMatch(/\.(logOut|logIn)\(/);
    expect(read("main.tsx")).toMatch(/startPurchases\(\)/);
  });
  it("gates only on customerInfo.entitlements.active", () => {
    const p = read("lib/purchases.ts");
    expect(p).toMatch(/entitlements\?\.active\?\.\[id\]/);
    expect(p).not.toMatch(/\.isActive\)/);
  });
});

describe("helpers", () => {
  it("settle returns the value, or the fallback on a throw or a hang", async () => {
    await expect(settle(Promise.resolve(3), 0, 100)).resolves.toBe(3);
    await expect(settle(Promise.reject(new Error("x")), 0, 100)).resolves.toBe(0);
    await expect(
      settle(() => {
        throw new Error("sync");
      }, 7, 100),
    ).resolves.toBe(7);
    const hung = settle(new Promise<number>(() => undefined), -1, 100);
    vi.advanceTimersByTime(100);
    await expect(hung).resolves.toBe(-1);
  });
  const memory = (init: Record<string, string> = {}) => {
    const kv = new Map(Object.entries(init));
    return { kv, get: async (k: string) => kv.get(k) ?? null, set: async (k: string, v: string) => void kv.set(k, v) };
  };
  const sdk = (existing: string | null | (() => Promise<never>)) => {
    const calls: { apiKey: string; appUserID?: string }[] = [];
    return {
      calls,
      configure: async (o: { apiKey: string; appUserID?: string }) => void calls.push(o),
      getAppUserID: async () => (typeof existing === "function" ? existing() : { appUserID: existing ?? "" }),
    };
  };
  it("upgrade: no stored ID, SDK already has an anonymous ID -> adopts it, never replaces it", async () => {
    vi.useRealTimers();
    const store = memory();
    const rc = sdk("$RCAnonymousID:0123456789abcdef0123456789abcdef");
    const id = await configureWithStableId(rc, "key", store);
    expect(rc.calls).toEqual([{ apiKey: "key" }]); // configured WITHOUT an appUserID
    expect(id).toBe("$RCAnonymousID:0123456789abcdef0123456789abcdef");
    expect(store.kv.get(APP_USER_ID_KEY)).toBe(id);
    // Next launch: the adopted ID is passed explicitly, configure still runs once.
    const next = sdk("ignored");
    expect(await configureWithStableId(next, "key", store)).toBe(id);
    expect(next.calls).toEqual([{ apiKey: "key", appUserID: id }]);
  });
  it("fresh install: SDK returns no ID at all -> mints preceptor_<uuid> and keeps it", async () => {
    vi.useRealTimers();
    const store = memory();
    const rc = sdk("");
    const id = await configureWithStableId(rc, "key", store);
    expect(id).toMatch(/^preceptor_[A-Za-z0-9-]{16,}$/);
    expect(store.kv.get(APP_USER_ID_KEY)).toBe(id);
    expect(rc.calls).toHaveLength(1);
  });
  it("stored ID: configures with it and does not ask the SDK", async () => {
    vi.useRealTimers();
    const store = memory({ [APP_USER_ID_KEY]: "preceptor_abcdefabcdefabcdef" });
    const rc = sdk(() => Promise.reject(new Error("should not be called")));
    expect(await configureWithStableId(rc, "key", store)).toBe("preceptor_abcdefabcdefabcdef");
    expect(rc.calls).toEqual([{ apiKey: "key", appUserID: "preceptor_abcdefabcdefabcdef" }]);
  });
  it("SDK read fails or hangs -> stores nothing, so no one is moved to a new identity", async () => {
    vi.useRealTimers();
    const store = memory();
    expect(await configureWithStableId(sdk(() => Promise.reject(new Error("x"))), "key", store)).toBeNull();
    expect(await configureWithStableId(sdk(() => new Promise<never>(() => undefined)), "key", store, 20)).toBeNull();
    expect(store.kv.size).toBe(0);
  });
  it("Preferences throwing or hanging still configures, without an appUserID", async () => {
    vi.useRealTimers();
    const broken = { get: () => Promise.reject(new Error("io")), set: () => Promise.reject(new Error("io")) };
    const rc = sdk("$RCAnonymousID:ffffffffffffffffffffffffffffffff");
    expect(await configureWithStableId(rc, "key", broken)).toBe("$RCAnonymousID:ffffffffffffffffffffffffffffffff");
    expect(rc.calls).toEqual([{ apiKey: "key" }]);
    const hung = { get: () => new Promise<string | null>(() => undefined), set: () => new Promise<void>(() => undefined) };
    const rc2 = sdk("$RCAnonymousID:eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    expect(await configureWithStableId(rc2, "key", hung, 20)).toBe("$RCAnonymousID:eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  });
});
