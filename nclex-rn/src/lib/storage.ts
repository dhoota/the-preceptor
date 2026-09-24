import type { Answered } from "@/engine/analytics";
import type { Mock } from "@/engine/mock";
import type { Access } from "@/lib/purchases";

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
  /** Show the answer after each item in practice. Off means answers show at the end of a set. */
  revealEachItem: boolean;
  /** Seen the one time disclaimer. */
  acceptedDisclaimer: boolean;
  /** Larger text. */
  largeText: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  revealEachItem: true,
  acceptedDisclaimer: false,
  largeText: false,
};

const K = {
  answers: "nclexrn_answers_v1",
  mocks: "nclexrn_mocks_v1",
  settings: "nclexrn_settings_v1",
  access: "nclexrn_access_v1",
  flags: "nclexrn_flags_v1",
};

/** Keeps history bounded so storage never grows without limit. */
export const MAX_ANSWERS = 6000;
export const MAX_MOCKS = 30;

async function readJson<T>(kv: KV, key: string, fallback: T): Promise<T> {
  try {
    const raw = await kv.get(key);
    const v = raw ? (JSON.parse(raw) as T) : fallback;
    return Array.isArray(fallback) && !Array.isArray(v) ? fallback : v;
  } catch {
    return fallback;
  }
}

export function createRepo(kv: KV = defaultKV()) {
  return {
    async answers(): Promise<Answered[]> {
      return readJson<Answered[]>(kv, K.answers, []);
    },
    /** Newest first. */
    async addAnswers(add: Answered[]): Promise<Answered[]> {
      const next = [...add, ...(await this.answers())].slice(0, MAX_ANSWERS);
      await kv.set(K.answers, JSON.stringify(next));
      return next;
    },
    async mocks(): Promise<Mock[]> {
      return readJson<Mock[]>(kv, K.mocks, []);
    },
    async saveMock(m: Mock): Promise<Mock[]> {
      const next = [m, ...(await this.mocks()).filter((x) => x.id !== m.id)].slice(0, MAX_MOCKS);
      await kv.set(K.mocks, JSON.stringify(next));
      return next;
    },
    /** Items the candidate flagged for review. */
    async flags(): Promise<string[]> {
      return readJson<string[]>(kv, K.flags, []);
    },
    async saveFlags(ids: string[]): Promise<void> {
      await kv.set(K.flags, JSON.stringify(ids));
    },
    async settings(): Promise<Settings> {
      const s = await readJson<Partial<Settings>>(kv, K.settings, {});
      return { ...DEFAULT_SETTINGS, ...(s && typeof s === "object" && !Array.isArray(s) ? s : {}) };
    },
    async saveSettings(s: Settings): Promise<void> {
      await kv.set(K.settings, JSON.stringify(s));
    },
    /** Cached entitlement so purchases work offline. RevenueCat stays the source of truth. */
    async cachedAccess(): Promise<Access> {
      const a = await readJson<Partial<Access>>(kv, K.access, {});
      return { full: Boolean(a?.full) };
    },
    async setCachedAccess(a: Access): Promise<void> {
      if (!a.full) await kv.remove(K.access);
      else await kv.set(K.access, JSON.stringify(a));
    },
    /** Clears progress. Keeps purchases and settings. */
    async resetProgress(): Promise<void> {
      for (const k of [K.answers, K.mocks, K.flags]) await kv.remove(k);
    },
  };
}

export type Repo = ReturnType<typeof createRepo>;
