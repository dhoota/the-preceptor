import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CASES } from "@/cases";
import { SAMPS } from "@/samps";
import { finishAttempt, updateDeckFromAttempt, review as reviewCard, type Attempt, type Deck, type SelfMark } from "@/engine";
import { canOpenCase, canOpenSamp } from "@/lib/access";
import {
  DURATION_MONTHS,
  NO_EXPIRY,
  TIERS,
  accessAt,
  defaultAdapter,
  laterExpiry,
  reconcileExpiry,
  type Access,
  type Duration,
  type Expiry,
  type Plan,
  type PurchaseOutcome,
  type Tier,
} from "@/lib/purchases";
import { settle } from "@/lib/settle";
import { createRepo, DEFAULT_SETTINGS, type MockExam, type MockOral, type SampAttempt, type Settings } from "@/lib/storage";

const repo = createRepo();
/** Longest the launch waits on one storage read before using an empty default. */
const READ_MS = 2500;
/** Longest a background store check may take before the cached dates stand. */
const STORE_MS = 20_000;
const purchases = defaultAdapter();

interface AppState {
  ready: boolean;
  attempts: Attempt[];
  deck: Deck;
  settings: Settings;
  access: Access;
  /** When each component's access ends, or null if never bought. */
  expiry: Expiry;
  /** Plans in the live store offering, with store prices. Empty until loaded or when none can be read. */
  plans: Plan[];
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
  buy(tier: Tier, duration: Duration): Promise<PurchaseOutcome>;
  /** Reads the offering again, for the paywall. */
  refreshPlans(): Promise<void>;
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
  const [plans, setPlans] = useState<Plan[]>([]);
  const [busy, setBusy] = useState(false);
  const [sampAttempts, setSampAttempts] = useState<SampAttempt[]>([]);
  const [mockExams, setMockExams] = useState<MockExam[]>([]);
  const [mockOrals, setMockOrals] = useState<MockOral[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Each read falls back to empty after a short wait, so a storage fault
      // can never keep the app closed. The splash does not wait on any of it.
      const [a, d, s, cached, sa, me, mo] = await Promise.all([
        settle(() => repo.attempts(), [] as Attempt[], READ_MS),
        settle(() => repo.deck(), {} as Deck, READ_MS),
        settle(() => repo.settings(), DEFAULT_SETTINGS, READ_MS),
        settle(() => repo.cachedExpiry(), NO_EXPIRY, READ_MS),
        settle(() => repo.sampAttempts(), [] as SampAttempt[], READ_MS),
        settle(() => repo.mockExams(), [] as MockExam[], READ_MS),
        settle(() => repo.mockOrals(), [] as MockOral[], READ_MS),
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
      // Store check runs after first paint. Offline, slow or failing keeps the cached dates.
      const next = await settle(() => reconcileExpiry(cached, purchases), cached, STORE_MS);
      if (cancelled) return;
      setExpiry(next);
      if (next.written !== cached.written || next.oral !== cached.oral) await settle(() => repo.setCachedExpiry(next), undefined, READ_MS);
      const offered = await settle(() => purchases.plans(), [] as Plan[], STORE_MS);
      if (!cancelled) setPlans(offered);
    })().catch(() => {
      // Never leaves the app unopened. The paywall still decides access.
      if (!cancelled) setReady(true);
    });
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

  const refreshPlans = useCallback(async () => {
    setPlans(await settle(() => purchases.plans(), [] as Plan[], STORE_MS));
  }, []);

  const buy = useCallback(
    async (tier: Tier, duration: Duration) => {
      setBusy(true);
      try {
        const r = await purchases.purchase(tier, duration);
        if (r === "purchased") {
          const fromStore = await purchases.check();
          // The purchase already confirmed the entitlements. If the store cannot be
          // read back right away, hold the plan's length locally. The next
          // launch replaces it with the entitlement dates.
          const local: Expiry = { ...expiry };
          const until = new Date();
          until.setUTCMonth(until.getUTCMonth() + DURATION_MONTHS[duration]);
          for (const c of TIERS[tier].grants) local[c] = until.toISOString();
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
      plans,
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
      refreshPlans,
      restore,
      resetProgress,
    }),
    [ready, attempts, deck, settings, access, expiry, plans, busy, sampAttempts, mockExams, mockOrals, saveAttempt, submitMarks, answerReview, updateSettings, saveSampAttempts, saveMockExam, saveMockOral, buy, refreshPlans, restore, resetProgress],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside provider");
  return v;
}
