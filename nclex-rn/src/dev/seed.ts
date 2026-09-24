import type { Answered } from "@/engine/analytics";
import { CJMM_IDS, NEED_IDS } from "@/engine/blueprint";
import { answer, createMock, nextItem, type Mock, type MockBank } from "@/engine/mock";
import { logitOf, mulberry32, prob } from "@/engine/rasch";
import { emptyResponse, keyResponse, maxScore } from "@/engine/score";
import type { CaseStudy, Item } from "@/engine/types";
import { toAnswered } from "@/engine/ui";
import { getBank, setBank } from "../bankSource";

/**
 * Development only. Loaded by main.tsx in the dev server, or in a static
 * build made with VITE_SEED=1 for the screenshot script. Never in a store build.
 *
 * ?seed=1 writes a believable history so Progress and the mock screens have
 * something to show. In the dev server it also swaps in a demo bank built from
 * the test fixtures while the real bank holds fewer than 10 items. ?demo=1
 * forces the demo bank for the rest of the browser session.
 */

const DEMO_KEY = "nclexrn_dev_demo_bank";

async function demoBank(): Promise<{ items: Item[]; cases: CaseStudy[] } | null> {
  // The fixtures live in tests/. The DEV guard keeps them out of every build.
  if (!import.meta.env.DEV) return null;
  const { ALL_FIXTURES, fixtureCase } = await import("../../tests/fixture");
  const clones: Item[] = Array.from({ length: 150 }, (_, i) => {
    const base = ALL_FIXTURES[i % ALL_FIXTURES.length];
    return {
      ...base,
      id: `demo-${String(i).padStart(3, "0")}`,
      need: NEED_IDS[i % NEED_IDS.length],
      cjmm: CJMM_IDS[(i * 5) % CJMM_IDS.length],
      difficulty: (((i * 7) % 5) + 1) as Item["difficulty"],
    } as Item;
  });
  const cases = [1, 2, 3, 4].map((k) => ({ ...fixtureCase(`demo-case-${k}`), title: `Example case ${k}` }));
  return { items: [...ALL_FIXTURES, ...clones], cases };
}

function buildHistory(bank: MockBank): { answers: Answered[]; mocks: Mock[]; flags: string[] } {
  const rand = mulberry32(7);
  const day = 86_400_000;
  const now = Date.now();
  const pool = [...bank.items, ...bank.cases.flatMap((c) => c.items)];
  const picks = pool.filter(() => rand() < 0.6);
  // At least one answer in every Client Needs area the bank covers, so Progress has no empty rows.
  for (const n of NEED_IDS) if (!picks.some((i) => i.need === n)) picks.push(...pool.filter((i) => i.need === n).slice(0, 2));
  const answers: Answered[] = picks.map((it, k) => {
    const skill = 0.45 + (k / Math.max(1, picks.length)) * 0.35;
    const max = maxScore(it);
    const x = rand();
    const earned = x < skill ? max : x < skill + 0.2 ? Math.floor(max / 2) : 0;
    return toAnswered(it, { earned, max }, now - (picks.length - k) * 0.3 * day);
  });
  answers.reverse();

  const mocks: Mock[] = [];
  if (bank.items.length) {
    [-0.6, 0.4].forEach((theta, n) => {
      const t0 = now - (10 - n * 5) * day;
      let m = createMock(bank, 1000 + n, t0, `seed-mock-${n}`);
      const r = mulberry32(99 + n);
      for (let guard = 0; guard < 200 && !m.result; guard++) {
        const ref = nextItem(m, bank);
        if (!ref) break;
        const good = r() < prob(theta, logitOf(ref.item.difficulty));
        m = answer(m, bank, ref, good ? keyResponse(ref.item) : emptyResponse(ref.item), 70_000);
      }
      if (m.result) mocks.unshift(m);
    });
  }
  const flags = bank.items.filter((_, i) => i % 13 === 5).map((i) => i.id);
  return { answers, mocks, flags };
}

export async function applySeed(fromUrl: boolean, forceDemo = false): Promise<void> {
  let wantDemo = false;
  try {
    wantDemo = fromUrl || sessionStorage.getItem(DEMO_KEY) === "1";
    if (forceDemo) sessionStorage.setItem(DEMO_KEY, "force");
    forceDemo = forceDemo || sessionStorage.getItem(DEMO_KEY) === "force";
  } catch {
    // ignore
  }
  if (forceDemo || (wantDemo && getBank().items.length < 10)) {
    const demo = await demoBank();
    if (demo) {
      setBank({ ...demo, demo: true });
      try {
        if (!forceDemo) sessionStorage.setItem(DEMO_KEY, "1");
      } catch {
        // ignore
      }
    }
  }
  // The screenshot script reads the bank to pick and answer items by kind.
  (window as unknown as { __BANK?: unknown }).__BANK = getBank();
  if (!fromUrl) return;
  const { answers, mocks, flags } = buildHistory(getBank());
  localStorage.setItem("nclexrn_answers_v1", JSON.stringify(answers));
  localStorage.setItem("nclexrn_mocks_v1", JSON.stringify(mocks));
  localStorage.setItem("nclexrn_flags_v1", JSON.stringify(flags));
  localStorage.setItem("nclexrn_settings_v1", JSON.stringify({ acceptedDisclaimer: true, revealEachItem: true, largeText: false }));
  window.history.replaceState(null, "", location.pathname);
}
