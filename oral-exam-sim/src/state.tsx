import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { finishAttempt, updateDeckFromAttempt, review as reviewCard, type Attempt, type Deck, type SelfMark } from "@/engine";
import { canOpenCase, canOpenSamp } from "@/lib/access";
import { NO_ACCESS, defaultAdapter, reconcileAccess, type Access, type ProductKey, type PurchaseOutcome } from "@/lib/purchases";
import { createRepo, DEFAULT_SETTINGS, type MockExam, type MockOral, type SampAttempt, type Settings } from "@/lib/storage";

const repo = createRepo();
const purchases = defaultAdapter();

interface AppState {
  ready: boolean;
  attempts: Attempt[];
  deck: Deck;
  settings: Settings;
  access: Access;
  prices: Partial<Record<ProductKey, string>>;
  busy: boolean;
  sampAttempts: SampAttempt[];
  mockExams: MockExam[];
  mockOrals: MockOral[];
  canOpen(caseId: string): boolean;
  canOpenSamp(sampId: string): boolean;
  saveAttempt(a: Attempt): Promise<void>;
  submitMarks(a: Attempt, marks: Record<string, SelfMark>): Promise<Attempt>;
  answerReview(key: string, recalled: boolean): Promise<void>;
  updateSettings(patch: Partial<Settings>): Promise<void>;
  saveSampAttempts(list: SampAttempt[]): Promise<void>;
  saveMockExam(m: MockExam): Promise<void>;
  saveMockOral(m: MockOral): Promise<void>;
  buy(product: ProductKey): Promise<PurchaseOutcome>;
  restore(): Promise<Access | null>;
  resetProgress(): Promise<void>;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [deck, setDeck] = useState<Deck>({});
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [access, setAccess] = useState<Access>(NO_ACCESS);
  const [prices, setPrices] = useState<Partial<Record<ProductKey, string>>>({});
  const [busy, setBusy] = useState(false);
  const [sampAttempts, setSampAttempts] = useState<SampAttempt[]>([]);
  const [mockExams, setMockExams] = useState<MockExam[]>([]);
  const [mockOrals, setMockOrals] = useState<MockOral[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [a, d, s, cached, sa, me, mo] = await Promise.all([
        repo.attempts(),
        repo.deck(),
        repo.settings(),
        repo.cachedAccess(),
        repo.sampAttempts(),
        repo.mockExams(),
        repo.mockOrals(),
      ]);
      if (cancelled) return;
      setAttempts(a);
      setDeck(d);
      setSettings(s);
      setAccess(cached);
      setSampAttempts(sa);
      setMockExams(me);
      setMockOrals(mo);
      setReady(true);
      // Store check runs after first paint. Offline keeps the cached state.
      const now = await reconcileAccess(cached, purchases);
      if (cancelled) return;
      setAccess(now);
      if (now.written !== cached.written || now.oral !== cached.oral) await repo.setCachedAccess(now);
      setPrices(await purchases.prices());
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

  const saveSampAttempts = useCallback(async (list: SampAttempt[]) => {
    setSampAttempts(await repo.saveSampAttempts(list));
  }, []);

  const saveMockExam = useCallback(async (m: MockExam) => {
    setMockExams(await repo.saveMockExam(m));
  }, []);

  const saveMockOral = useCallback(async (m: MockOral) => {
    setMockOrals(await repo.saveMockOral(m));
  }, []);

  const grant = useCallback(async (a: Access) => {
    setAccess(a);
    await repo.setCachedAccess(a);
  }, []);

  const buy = useCallback(
    async (product: ProductKey) => {
      setBusy(true);
      try {
        const r = await purchases.purchase(product);
        if (r === "purchased") {
          const now = (await purchases.check()) ?? access;
          await grant({
            written: now.written || access.written || product !== "oral",
            oral: now.oral || access.oral || product !== "written",
          });
        }
        return r;
      } finally {
        setBusy(false);
      }
    },
    [access, grant],
  );

  const restore = useCallback(async () => {
    setBusy(true);
    try {
      const r = await purchases.restore();
      if (r && (r.written || r.oral)) await grant({ written: r.written || access.written, oral: r.oral || access.oral });
      return r;
    } finally {
      setBusy(false);
    }
  }, [access, grant]);

  const resetProgress = useCallback(async () => {
    await repo.resetProgress();
    setAttempts([]);
    setDeck({});
    setSampAttempts([]);
    setMockExams([]);
    setMockOrals([]);
  }, []);

  const value = useMemo<AppState>(
    () => ({
      ready,
      attempts,
      deck,
      settings,
      access,
      prices,
      busy,
      sampAttempts,
      mockExams,
      mockOrals,
      canOpen: (id: string) => canOpenCase(id, CASES, access),
      canOpenSamp: (id: string) => canOpenSamp(id, SAMPS, access),
      saveAttempt,
      submitMarks,
      answerReview,
      updateSettings,
      saveSampAttempts,
      saveMockExam,
      saveMockOral,
      buy,
      restore,
      resetProgress,
    }),
    [ready, attempts, deck, settings, access, prices, busy, sampAttempts, mockExams, mockOrals, saveAttempt, submitMarks, answerReview, updateSettings, saveSampAttempts, saveMockExam, saveMockOral, buy, restore, resetProgress],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside provider");
  return v;
}
