import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CASES } from "@/cases";
import { finishAttempt, updateDeckFromAttempt, review as reviewCard, type Attempt, type Deck, type SelfMark } from "@/engine";
import { canOpen } from "@/lib/access";
import { defaultAdapter, reconcileAccess, type PurchaseOutcome } from "@/lib/purchases";
import { createRepo, DEFAULT_SETTINGS, type Settings } from "@/lib/storage";

const repo = createRepo();
const purchases = defaultAdapter();

interface AppState {
  ready: boolean;
  attempts: Attempt[];
  deck: Deck;
  settings: Settings;
  unlocked: boolean;
  price: string | null;
  busy: boolean;
  canOpen(caseId: string): boolean;
  saveAttempt(a: Attempt): Promise<void>;
  submitMarks(a: Attempt, marks: Record<string, SelfMark>): Promise<Attempt>;
  answerReview(key: string, recalled: boolean): Promise<void>;
  updateSettings(patch: Partial<Settings>): Promise<void>;
  buy(): Promise<PurchaseOutcome>;
  restore(): Promise<boolean | null>;
  resetProgress(): Promise<void>;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [deck, setDeck] = useState<Deck>({});
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [unlocked, setUnlocked] = useState(false);
  const [price, setPrice] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [a, d, s, cached] = await Promise.all([repo.attempts(), repo.deck(), repo.settings(), repo.cachedUnlock()]);
      if (cancelled) return;
      setAttempts(a);
      setDeck(d);
      setSettings(s);
      setUnlocked(cached);
      setReady(true);
      // Store check runs after first paint. Offline keeps the cached state.
      const access = await reconcileAccess(cached, purchases);
      if (cancelled) return;
      setUnlocked(access);
      if (access !== cached) await repo.setCachedUnlock(access);
      setPrice(await purchases.price());
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const saveAttempt = useCallback(async (a: Attempt) => {
    setAttempts(await repo.saveAttempt(a));
  }, []);

  const submitMarks = useCallback(
    async (a: Attempt, marks: Record<string, SelfMark>) => {
      const c = CASES.find((x) => x.id === a.caseId)!;
      const done = finishAttempt(c, a, marks, Date.now());
      const gotRight = Object.entries(marks)
        .filter(([, m]) => m === "yes")
        .map(([id]) => id);
      const nextDeck = updateDeckFromAttempt(deck, c.id, done.score!.missed, gotRight, Date.now());
      await repo.saveDeck(nextDeck);
      setDeck(nextDeck);
      setAttempts(await repo.saveAttempt(done));
      return done;
    },
    [deck],
  );

  const answerReview = useCallback(
    async (key: string, recalled: boolean) => {
      const next = reviewCard(deck, key, recalled, Date.now());
      setDeck(next);
      await repo.saveDeck(next);
    },
    [deck],
  );

  const updateSettings = useCallback(
    async (patch: Partial<Settings>) => {
      const next = { ...settings, ...patch };
      setSettings(next);
      await repo.saveSettings(next);
    },
    [settings],
  );

  const grant = useCallback(async () => {
    setUnlocked(true);
    await repo.setCachedUnlock(true);
  }, []);

  const buy = useCallback(async () => {
    setBusy(true);
    try {
      const r = await purchases.purchase();
      if (r === "purchased") await grant();
      return r;
    } finally {
      setBusy(false);
    }
  }, [grant]);

  const restore = useCallback(async () => {
    setBusy(true);
    try {
      const r = await purchases.restore();
      if (r) await grant();
      return r;
    } finally {
      setBusy(false);
    }
  }, [grant]);

  const resetProgress = useCallback(async () => {
    await repo.resetProgress();
    setAttempts([]);
    setDeck({});
  }, []);

  const value = useMemo<AppState>(
    () => ({
      ready,
      attempts,
      deck,
      settings,
      unlocked,
      price,
      busy,
      canOpen: (id: string) => canOpen(id, CASES, unlocked),
      saveAttempt,
      submitMarks,
      answerReview,
      updateSettings,
      buy,
      restore,
      resetProgress,
    }),
    [ready, attempts, deck, settings, unlocked, price, busy, saveAttempt, submitMarks, answerReview, updateSettings, buy, restore, resetProgress],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside provider");
  return v;
}
