import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { finishAttempt, updateDeckFromAttempt, review as reviewCard, type Attempt, type Deck, type SelfMark } from "@/engine";
import { canOpenCase, canOpenSamp } from "@/lib/access";
import {
  NO_EXPIRY,
  PRODUCTS,
  accessAt,
  defaultAdapter,
  laterExpiry,
  reconcileExpiry,
  type Access,
  type Expiry,
  type ProductKey,
  type PurchaseOutcome,
} from "@/lib/purchases";
import { createRepo, DEFAULT_SETTINGS, type MockExam, type MockOral, type SampAttempt, type Settings } from "@/lib/storage";

const repo = createRepo();
const purchases = defaultAdapter();

interface AppState {
  ready: boolean;
  attempts: Attempt[];
  deck: Deck;
  settings: Settings;
  access: Access;
  /** When each component's access ends, or null if never bought. */
  expiry: Expiry;
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
  const [expiry, setExpiry] = useState<Expiry>(NO_EXPIRY);
  // Re-reads the clock each minute so access closes on time without a restart.
  const [clock, setClock] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setClock(Date.now()), 60_000);
    return () => clearInterval(t);
  }, []);
  const access = useMemo(() => accessAt(expiry, clock), [expiry, clock]);
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
        repo.cachedExpiry(),
        repo.sampAttempts(),
        repo.mockExams(),
        repo.mockOrals(),
      ]);
      if (cancelled) return;
      setAttempts(a);
      setDeck(d);
      setSettings(s);
      setExpiry(cached);
      setSampAttempts(sa);
      setMockExams(me);
      setMockOrals(mo);
      setReady(true);
      // Store check runs after first paint. Offline keeps the cached dates.
      const next = await reconcileExpiry(cached, purchases);
      if (cancelled) return;
      setExpiry(next);
      if (next.written !== cached.written || next.oral !== cached.oral) await repo.setCachedExpiry(next);
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

  const grant = useCallback(async (e: Expiry) => {
    setExpiry(e);
    setClock(Date.now());
    await repo.setCachedExpiry(e);
  }, []);

  const buy = useCallback(
    async (product: ProductKey) => {
      setBusy(true);
      try {
        const r = await purchases.purchase(product);
        if (r === "purchased") {
          const fromStore = await purchases.check();
          // The purchase already confirmed the entitlements. If the store cannot be
          // read back right away, hold one subscription year locally. The next
          // launch replaces it with the entitlement dates.
          const local: Expiry = { ...expiry };
          const yearOn = new Date();
          yearOn.setUTCFullYear(yearOn.getUTCFullYear() + 1);
          for (const c of PRODUCTS[product].grants) local[c] = yearOn.toISOString();
          await grant(fromStore ? laterExpiry(expiry, fromStore) : local);
        }
        return r;
      } finally {
        setBusy(false);
      }
    },
    [expiry, grant],
  );

  const restore = useCallback(async () => {
    setBusy(true);
    try {
      const r = await purchases.restore();
      if (r && (r.written || r.oral)) await grant(laterExpiry(expiry, r));
      return r ? accessAt(r) : null;
    } finally {
      setBusy(false);
    }
  }, [expiry, grant]);

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
      expiry,
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
    [ready, attempts, deck, settings, access, expiry, prices, busy, sampAttempts, mockExams, mockOrals, saveAttempt, submitMarks, answerReview, updateSettings, saveSampAttempts, saveMockExam, saveMockOral, buy, restore, resetProgress],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside provider");
  return v;
}
