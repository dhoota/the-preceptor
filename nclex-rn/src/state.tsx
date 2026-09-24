import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Answered } from "@/engine/analytics";
import type { Mock } from "@/engine/mock";
import type { CaseStudy, Item } from "@/engine/types";
import { freeCaseIds, freeItemIds } from "@/lib/access";
import { NO_ACCESS, defaultAdapter, reconcileAccess, type Access, type ProductKey, type PurchaseOutcome } from "@/lib/purchases";
import { createRepo, DEFAULT_SETTINGS, type Settings } from "@/lib/storage";
import { getBank } from "./bankSource";

const repo = createRepo();
const purchases = defaultAdapter();

interface AppState {
  ready: boolean;
  /** Stand-alone items. */
  items: Item[];
  cases: CaseStudy[];
  /** True when the dev server runs on the demo bank. */
  demo: boolean;
  /** Any item by id, stand-alone or inside a case. */
  itemById(id: string): Item | undefined;
  answers: Answered[];
  mocks: Mock[];
  flags: string[];
  settings: Settings;
  access: Access;
  prices: Partial<Record<ProductKey, string>>;
  busy: boolean;
  canOpenItem(id: string): boolean;
  canOpenCase(id: string): boolean;
  addAnswers(a: Answered[]): Promise<void>;
  saveMock(m: Mock): Promise<void>;
  deleteMock(id: string): Promise<void>;
  toggleFlag(id: string): Promise<void>;
  updateSettings(patch: Partial<Settings>): Promise<void>;
  buy(product: ProductKey): Promise<PurchaseOutcome>;
  restore(): Promise<Access | null>;
  resetProgress(): Promise<void>;
}

const Ctx = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const bank = getBank();
  const [ready, setReady] = useState(false);
  const [answers, setAnswers] = useState<Answered[]>([]);
  const [mocks, setMocks] = useState<Mock[]>([]);
  const [flags, setFlags] = useState<string[]>([]);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [access, setAccess] = useState<Access>(NO_ACCESS);
  const [prices, setPrices] = useState<Partial<Record<ProductKey, string>>>({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [a, m, f, s, cached] = await Promise.all([repo.answers(), repo.mocks(), repo.flags(), repo.settings(), repo.cachedAccess()]);
      if (cancelled) return;
      setAnswers(a);
      setMocks(m);
      setFlags(f);
      setSettings(s);
      setAccess(cached);
      setReady(true);
      // The store check runs after first paint. Offline keeps the cached state.
      const now = await reconcileAccess(cached, purchases);
      if (cancelled) return;
      setAccess(now);
      if (now.full !== cached.full) await repo.setCachedAccess(now);
      const p = await purchases.prices();
      if (!cancelled) setPrices(p);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const byId = useMemo(() => {
    const m = new Map<string, Item>();
    for (const i of bank.items) m.set(i.id, i);
    for (const c of bank.cases) for (const i of c.items) m.set(i.id, i);
    return m;
  }, [bank]);
  const freeItems = useMemo(() => freeItemIds(bank.items), [bank]);
  const freeCases = useMemo(() => freeCaseIds(bank.cases), [bank]);

  const addAnswers = useCallback(async (a: Answered[]) => {
    if (!a.length) return;
    setAnswers(await repo.addAnswers(a));
  }, []);

  const deleteMock = useCallback(async (id: string) => {
    setMocks(await repo.deleteMock(id));
  }, []);

  const saveMock = useCallback(async (m: Mock) => {
    setMocks((list) => [m, ...list.filter((x) => x.id !== m.id)]);
    setMocks(await repo.saveMock(m));
  }, []);

  const toggleFlag = useCallback(
    async (id: string) => {
      const next = flags.includes(id) ? flags.filter((x) => x !== id) : [...flags, id];
      setFlags(next);
      await repo.saveFlags(next);
    },
    [flags],
  );

  const updateSettings = useCallback(
    async (patch: Partial<Settings>) => {
      const next = { ...settings, ...patch };
      setSettings(next);
      await repo.saveSettings(next);
    },
    [settings],
  );

  const grant = useCallback(async (a: Access) => {
    setAccess(a);
    await repo.setCachedAccess(a);
  }, []);

  const buy = useCallback(
    async (product: ProductKey) => {
      setBusy(true);
      try {
        const r = await purchases.purchase(product);
        if (r === "purchased") await grant({ full: true });
        return r;
      } finally {
        setBusy(false);
      }
    },
    [grant],
  );

  const restore = useCallback(async () => {
    setBusy(true);
    try {
      const r = await purchases.restore();
      if (r?.full) await grant(r);
      return r;
    } finally {
      setBusy(false);
    }
  }, [grant]);

  const resetProgress = useCallback(async () => {
    await repo.resetProgress();
    setAnswers([]);
    setMocks([]);
    setFlags([]);
  }, []);

  const value = useMemo<AppState>(
    () => ({
      ready,
      items: bank.items,
      cases: bank.cases,
      demo: bank.demo,
      itemById: (id: string) => byId.get(id),
      answers,
      mocks,
      flags,
      settings,
      access,
      prices,
      busy,
      canOpenItem: (id: string) => access.full || freeItems.has(id),
      canOpenCase: (id: string) => access.full || freeCases.has(id),
      addAnswers,
      saveMock,
      deleteMock,
      toggleFlag,
      updateSettings,
      buy,
      restore,
      resetProgress,
    }),
    [ready, bank, byId, answers, mocks, flags, settings, access, prices, busy, freeItems, freeCases, addAnswers, saveMock, deleteMock, toggleFlag, updateSettings, buy, restore, resetProgress],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useApp outside provider");
  return v;
}
