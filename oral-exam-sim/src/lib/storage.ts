import type { Attempt } from "@/engine/types";
import type { Deck } from "@/engine/review";

/**
 * On-device storage only. No accounts, no server, no sync.
 * Native: Capacitor Preferences (UserDefaults on iOS, SharedPreferences on
 * Android). Browser: localStorage. Tests: in memory.
 */

export interface KV {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
}

function isNative(): boolean {
  try {
    const cap = (window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
    return Boolean(cap?.isNativePlatform?.());
  } catch {
    return false;
  }
}

export function memoryKV(seed: Record<string, string> = {}): KV {
  const m = new Map(Object.entries(seed));
  return {
    async get(k) {
      return m.has(k) ? m.get(k)! : null;
    },
    async set(k, v) {
      m.set(k, v);
    },
    async remove(k) {
      m.delete(k);
    },
  };
}

const localKV: KV = {
  async get(k) {
    try {
      return localStorage.getItem(k);
    } catch {
      return null;
    }
  },
  async set(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch {
      // storage full or blocked. The app keeps working in memory.
    }
  },
  async remove(k) {
    try {
      localStorage.removeItem(k);
    } catch {
      // ignore
    }
  },
};

const prefsKV: KV = {
  async get(key) {
    const { Preferences } = await import("@capacitor/preferences");
    return (await Preferences.get({ key })).value;
  },
  async set(key, value) {
    const { Preferences } = await import("@capacitor/preferences");
    await Preferences.set({ key, value });
  },
  async remove(key) {
    const { Preferences } = await import("@capacitor/preferences");
    await Preferences.remove({ key });
  },
};

export function defaultKV(): KV {
  return isNative() ? prefsKV : localKV;
}

export interface Settings {
  /** Read examiner lines aloud. Always on in exam-day mode unless muted. */
  speak: boolean;
  /** Speech rate, 0.7 to 1.3. */
  rate: number;
  /** Show model answers after each question in practice mode. */
  revealEachQuestion: boolean;
  /** Seen the one time disclaimer. */
  acceptedDisclaimer: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  speak: true,
  rate: 1,
  revealEachQuestion: true,
  acceptedDisclaimer: false,
};

const K = {
  attempts: "oral_attempts_v1",
  deck: "oral_review_deck_v1",
  settings: "oral_settings_v1",
  unlocked: "oral_unlocked",
};

/** Keeps history bounded so storage never grows without limit. */
export const MAX_ATTEMPTS = 500;

async function readJson<T>(kv: KV, key: string, fallback: T): Promise<T> {
  try {
    const raw = await kv.get(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function createRepo(kv: KV = defaultKV()) {
  return {
    async attempts(): Promise<Attempt[]> {
      const list = await readJson<Attempt[]>(kv, K.attempts, []);
      return Array.isArray(list) ? list : [];
    },
    /** Inserts or replaces by id. Newest first. */
    async saveAttempt(a: Attempt): Promise<Attempt[]> {
      const list = (await this.attempts()).filter((x) => x.id !== a.id);
      const next = [a, ...list].slice(0, MAX_ATTEMPTS);
      await kv.set(K.attempts, JSON.stringify(next));
      return next;
    },
    async deck(): Promise<Deck> {
      return readJson<Deck>(kv, K.deck, {});
    },
    async saveDeck(d: Deck): Promise<void> {
      await kv.set(K.deck, JSON.stringify(d));
    },
    async settings(): Promise<Settings> {
      return { ...DEFAULT_SETTINGS, ...(await readJson<Partial<Settings>>(kv, K.settings, {})) };
    },
    async saveSettings(s: Settings): Promise<void> {
      await kv.set(K.settings, JSON.stringify(s));
    },
    /** Cached entitlement so a purchase works offline. RevenueCat stays the source of truth. */
    async cachedUnlock(): Promise<boolean> {
      return (await kv.get(K.unlocked)) === "1";
    },
    async setCachedUnlock(on: boolean): Promise<void> {
      if (on) await kv.set(K.unlocked, "1");
      else await kv.remove(K.unlocked);
    },
    /** Clears progress. Keeps the purchase cache and settings. */
    async resetProgress(): Promise<void> {
      await kv.remove(K.attempts);
      await kv.remove(K.deck);
    },
  };
}

export type Repo = ReturnType<typeof createRepo>;
