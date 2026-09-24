import type { Attempt } from "@/engine/types";
import type { Deck } from "@/engine/review";
import type { SampMark, SampResponse } from "@/engine/samp";
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

/** One finished SAMP, in practice or inside a mock exam. */
export interface SampAttempt {
  id: string;
  sampId: string;
  topic: string;
  mode: "practice" | "mock";
  mockId?: string;
  at: number;
  responses: Record<string, SampResponse>;
  mark: SampMark;
}

/** A timed full mock SAMP exam. Kept until submitted so it survives restarts. */
export interface MockExam {
  id: string;
  sampIds: string[];
  startedAt: number;
  durationMs: number;
  responses: Record<string, Record<string, SampResponse>>;
  submittedAt: number | null;
}

/** A four station mock oral. */
export interface MockOral {
  id: string;
  caseIds: string[];
  attemptIds: string[];
  startedAt: number;
  finishedAt: number | null;
}

const K = {
  attempts: "oral_attempts_v1",
  deck: "oral_review_deck_v1",
  settings: "oral_settings_v1",
  access: "ccfpem_access_v1",
  sampAttempts: "samp_attempts_v1",
  mockExams: "samp_mocks_v1",
  mockOrals: "oral_mocks_v1",
};

/** Keeps SAMP history bounded. */
export const MAX_SAMP_ATTEMPTS = 3000;

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
    /** Cached entitlements so purchases work offline. RevenueCat stays the source of truth. */
    async cachedAccess(): Promise<Access> {
      const a = await readJson<Partial<Access>>(kv, K.access, {});
      return { written: Boolean(a.written), oral: Boolean(a.oral) };
    },
    async setCachedAccess(a: Access): Promise<void> {
      if (!a.written && !a.oral) await kv.remove(K.access);
      else await kv.set(K.access, JSON.stringify(a));
    },
    async sampAttempts(): Promise<SampAttempt[]> {
      const list = await readJson<SampAttempt[]>(kv, K.sampAttempts, []);
      return Array.isArray(list) ? list : [];
    },
    async saveSampAttempts(add: SampAttempt[]): Promise<SampAttempt[]> {
      const ids = new Set(add.map((a) => a.id));
      const next = [...add, ...(await this.sampAttempts()).filter((a) => !ids.has(a.id))].slice(0, MAX_SAMP_ATTEMPTS);
      await kv.set(K.sampAttempts, JSON.stringify(next));
      return next;
    },
    async mockExams(): Promise<MockExam[]> {
      const list = await readJson<MockExam[]>(kv, K.mockExams, []);
      return Array.isArray(list) ? list : [];
    },
    async saveMockExam(m: MockExam): Promise<MockExam[]> {
      const next = [m, ...(await this.mockExams()).filter((x) => x.id !== m.id)].slice(0, 50);
      await kv.set(K.mockExams, JSON.stringify(next));
      return next;
    },
    async mockOrals(): Promise<MockOral[]> {
      const list = await readJson<MockOral[]>(kv, K.mockOrals, []);
      return Array.isArray(list) ? list : [];
    },
    async saveMockOral(m: MockOral): Promise<MockOral[]> {
      const next = [m, ...(await this.mockOrals()).filter((x) => x.id !== m.id)].slice(0, 50);
      await kv.set(K.mockOrals, JSON.stringify(next));
      return next;
    },
    /** Clears progress. Keeps purchases and settings. */
    async resetProgress(): Promise<void> {
      for (const k of [K.attempts, K.deck, K.sampAttempts, K.mockExams, K.mockOrals]) await kv.remove(k);
    },
  };
}

export type Repo = ReturnType<typeof createRepo>;
