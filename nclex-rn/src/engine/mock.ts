import { EXAM, NEED_IDS, midpoint, type ClientNeed } from "./blueprint";
import { band, estimate, hash, logitOf, mulberry32, type Band, type Estimate } from "./rasch";
import { score } from "./score";
import type { CaseStudy, Item, Response, Score } from "./types";

/**
 * The adaptive mock. It follows the published NCLEX-RN structure:
 *   85 to 150 items in 5 hours.
 *   The minimum length holds 52 scored stand-alone items, 3 case studies of 6
 *   items and 15 unscored pretest items, in an order the candidate cannot see.
 *   After the minimum, scored stand-alone items continue until a stopping rule.
 * Stopping rules:
 *   ci    the 95% interval clears the passing standard, after the minimum.
 *   max   150 items. The final estimate decides.
 *   time  5 hours. Below the minimum is a fail. Otherwise the final estimate decides.
 * Everything is a pure function of the seed and the responses.
 */

export type Role = "scored" | "case" | "pretest";

export interface MockEntry {
  itemId: string;
  caseId?: string;
  role: Role;
  b: number;
  need: ClientNeed;
  response: Response;
  score: Score;
  ms: number;
}

export type StopRule = "ci" | "max" | "time" | "bank";

export interface MockResult {
  rule: StopRule;
  /** The decision the stopping rule makes against the passing standard. */
  decision: "above" | "below";
  /** Where the 95% interval sits. The honest readiness band. */
  band: Band;
  estimate: Estimate;
  items: number;
}

export interface Mock {
  id: string;
  seed: number;
  startedAt: number;
  /** Time spent on screen. The clock runs only while the exam is open. */
  elapsedMs: number;
  caseIds: string[];
  /** Position of the first item of each case. */
  caseStarts: number[];
  pretestSlots: number[];
  log: MockEntry[];
  estimate: Estimate;
  result: MockResult | null;
}

export interface MockBank {
  items: Item[];
  cases: CaseStudy[];
}

export interface NextRef {
  item: Item;
  caseId?: string;
  role: Role;
  /** 1-based position in the case, when role is case. */
  caseStep?: number;
}

function pickDistinct(rand: () => number, pool: number[], n: number): number[] {
  const p = [...pool];
  const out: number[] = [];
  while (out.length < n && p.length) out.push(p.splice(Math.floor(rand() * p.length), 1)[0]);
  return out;
}

export function createMock(bank: MockBank, seed: number, now: number, id = `mock-${seed}`): Mock {
  const rand = mulberry32(hash("plan", seed));
  const nCases = Math.min(EXAM.caseStudies, bank.cases.length);
  const caseIdx = pickDistinct(rand, bank.cases.map((_, i) => i), nCases);
  // One case in each third of the minimum length.
  const windows: [number, number][] = [
    [6, 20],
    [32, 46],
    [58, 72],
  ];
  const caseStarts = windows.slice(0, nCases).map(([a, z]) => a + Math.floor(rand() * (z - a + 1)));
  const inCase = (p: number) => caseStarts.some((s) => p >= s && p < s + EXAM.itemsPerCase);
  const free = Array.from({ length: EXAM.minItems }, (_, i) => i).filter((p) => !inCase(p));
  const pretestSlots = pickDistinct(rand, free, EXAM.pretest).sort((a, b) => a - b);
  return {
    id,
    seed,
    startedAt: now,
    elapsedMs: 0,
    caseIds: caseIdx.map((i) => bank.cases[i].id),
    caseStarts,
    pretestSlots,
    log: [],
    estimate: { theta: 0, se: Infinity },
    result: null,
  };
}

/** The next item to show, or null when the exam has ended. */
export function nextItem(m: Mock, bank: MockBank): NextRef | null {
  if (m.result) return null;
  const p = m.log.length;
  for (let k = 0; k < m.caseStarts.length; k++) {
    const s = m.caseStarts[k];
    if (p >= s && p < s + EXAM.itemsPerCase) {
      const c = bank.cases.find((x) => x.id === m.caseIds[k]);
      if (!c) break;
      return { item: c.items[p - s], caseId: c.id, role: "case", caseStep: p - s + 1 };
    }
  }
  const used = new Set(m.log.map((e) => e.itemId));
  const unused = bank.items.filter((i) => !used.has(i.id));
  if (!unused.length) return null;
  const rand = mulberry32(hash("pick", m.seed, p));
  if (m.pretestSlots.includes(p)) return { item: unused[Math.floor(rand() * unused.length)], role: "pretest" };

  // Content balance: the Client Needs area furthest below its test plan midpoint.
  const scored = m.log.filter((e) => e.role === "scored");
  const n = scored.length + 1;
  const order = [...NEED_IDS]
    .map((need, i) => ({ need, i, deficit: midpoint(need) * n - scored.filter((e) => e.need === need).length }))
    .sort((a, b) => b.deficit - a.deficit || a.i - b.i);
  const theta = Number.isFinite(m.estimate.se) ? m.estimate.theta : 0;
  for (const { need } of order) {
    const pool = unused.filter((i) => i.need === need);
    if (!pool.length) continue;
    // Most information under Rasch: difficulty closest to the current estimate.
    const best = Math.min(...pool.map((i) => Math.abs(logitOf(i.difficulty) - theta)));
    const ties = pool.filter((i) => Math.abs(logitOf(i.difficulty) - theta) === best);
    return { item: ties[Math.floor(rand() * ties.length)], role: "scored" };
  }
  return null;
}

function decide(m: Mock, rule: StopRule): MockResult {
  const e = m.estimate;
  return {
    rule,
    decision: rule === "ci" ? (band(e, EXAM.passingStandard) === "above" ? "above" : "below") : e.theta >= EXAM.passingStandard ? "above" : "below",
    band: band(e, EXAM.passingStandard),
    estimate: e,
    items: m.log.length,
  };
}

/**
 * Ends a mock that cannot continue, for example when the bank changed and no
 * unseen item is left. Below the minimum the result is below the standard,
 * as with the run-out-of-time rule.
 */
export function endMock(m: Mock): Mock {
  if (m.result) return m;
  if (m.log.length < EXAM.minItems) return { ...m, result: { rule: "bank", decision: "below", band: band(m.estimate), estimate: m.estimate, items: m.log.length } };
  return { ...m, result: decide(m, "bank") };
}

/** Records an answer, updates the estimate and applies the stopping rules. */
export function answer(m: Mock, bank: MockBank, ref: NextRef, response: Response, ms: number): Mock {
  if (m.result) return m;
  const s = score(ref.item, response);
  const log = [
    ...m.log,
    { itemId: ref.item.id, caseId: ref.caseId, role: ref.role, b: logitOf(ref.item.difficulty), need: ref.item.need, response, score: s, ms },
  ];
  const obs = log.filter((e) => e.role !== "pretest").map((e) => ({ b: e.b, x: e.score.max ? e.score.earned / e.score.max : 0 }));
  let next: Mock = { ...m, log, elapsedMs: m.elapsedMs + ms, estimate: estimate(obs) };
  next = checkTime(next);
  if (next.result) return next;
  const n = log.length;
  if (n >= EXAM.minItems && band(next.estimate, EXAM.passingStandard) !== "near") return { ...next, result: decide(next, "ci") };
  if (n >= EXAM.maxItems) return { ...next, result: decide(next, "max") };
  if (!nextItem(next, bank)) return { ...next, result: decide(next, "bank") };
  return next;
}

/** Run-out-of-time rule. Call with the latest elapsed time. */
export function checkTime(m: Mock, elapsedMs = m.elapsedMs): Mock {
  if (m.result || elapsedMs < EXAM.durationMs) return { ...m, elapsedMs };
  const t = { ...m, elapsedMs };
  if (m.log.length < EXAM.minItems)
    return { ...t, result: { rule: "time", decision: "below", band: band(m.estimate), estimate: m.estimate, items: m.log.length } };
  return { ...t, result: decide(t, "time") };
}

export const RULE_TEXT: Record<StopRule, string> = {
  ci: "The 95% confidence rule ended the exam.",
  max: "The exam reached 150 items. The final estimate decided.",
  time: "Time ran out. The final estimate decided, if the minimum was met.",
  bank: "The mock ran out of unseen items. The final estimate decided.",
};
