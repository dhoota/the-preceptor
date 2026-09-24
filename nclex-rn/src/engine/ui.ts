import type { Answered } from "./analytics";
import { EXAM } from "./blueprint";
import { hash, mulberry32, type Estimate } from "./rasch";
import type { CaseStudy, Item, Score, Tab } from "./types";

/**
 * Small pure helpers for the screens. No React and no storage here, so the
 * tests can pin them in node.
 */

/** Adds tabs to a chart. A tab with the same title replaces the earlier one in place. */
export function mergeTabs(base: Tab[], add: Tab[] = []): Tab[] {
  const out = [...base];
  for (const t of add) {
    const i = out.findIndex((x) => x.title === t.title);
    if (i >= 0) out[i] = t;
    else out.push(t);
  }
  return out;
}

/** The case chart as it stands at item k (0-based): case tabs plus every item's tabs up to k. */
export function caseTabsAt(c: CaseStudy, k: number): Tab[] {
  return c.items.slice(0, k + 1).reduce((tabs, it) => mergeTabs(tabs, it.tabs), c.tabs);
}

/** Splits "a {0} b {1}" into text parts and blank numbers. */
export function splitTemplate(t: string): (string | number)[] {
  const out: (string | number)[] = [];
  const re = /\{(\d+)\}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(t))) {
    if (m.index > last) out.push(t.slice(last, m.index));
    out.push(Number(m[1]));
    last = m.index + m[0].length;
  }
  if (last < t.length) out.push(t.slice(last));
  return out;
}

export type PassagePart = { text: string; span?: number };

/** Splits a highlight passage into plain text and numbered [[spans]]. */
export function parsePassage(p: string): PassagePart[] {
  const out: PassagePart[] = [];
  const re = /\[\[([\s\S]+?)\]\]/g;
  let last = 0;
  let n = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(p))) {
    if (m.index > last) out.push({ text: p.slice(last, m.index) });
    out.push({ text: m[1], span: n++ });
    last = m.index + m[0].length;
  }
  if (last < p.length) out.push({ text: p.slice(last) });
  return out;
}

/** Toggles x in a selection. A cap stops new picks once full. Cap 1 replaces the pick. */
export function toggle(list: number[], x: number, cap = Infinity): number[] {
  if (list.includes(x)) return list.filter((y) => y !== x);
  if (cap === 1) return [x];
  if (list.length >= cap) return list;
  return [...list, x];
}

/** Places a token on a target. The token leaves any other target. null clears the target. */
export function place(placed: (number | null)[], target: number, token: number | null): (number | null)[] {
  const out = placed.map((p) => (token !== null && p === token ? null : p));
  out[target] = token;
  return out;
}

/** Latest score per item. */
export function latestScores(answers: Answered[]): Map<string, Score> {
  const m = new Map<string, { at: number; score: Score }>();
  for (const a of answers) {
    const prev = m.get(a.itemId);
    if (!prev || a.at >= prev.at) m.set(a.itemId, { at: a.at, score: a.score });
  }
  return new Map([...m].map(([k, v]) => [k, v.score]));
}

/** Items whose latest answer earned less than full marks. */
export function missedIds(answers: Answered[]): Set<string> {
  return new Set([...latestScores(answers)].filter(([, s]) => s.earned < s.max).map(([id]) => id));
}

/** A practice set: unseen items first, then the rest, each group shuffled by the seed. */
export function buildSet(pool: Item[], n: number, answers: Answered[], seed: number): string[] {
  const seen = new Set(answers.map((a) => a.itemId));
  const rand = mulberry32(hash("set", seed));
  const shuffle = (xs: Item[]) => {
    const a = [...xs];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const fresh = shuffle(pool.filter((i) => !seen.has(i.id)));
  const old = shuffle(pool.filter((i) => seen.has(i.id)));
  return [...fresh, ...old].slice(0, n).map((i) => i.id);
}

export function toAnswered(item: Item, score: Score, at: number): Answered {
  return { itemId: item.id, need: item.need, cjmm: item.cjmm, kind: item.kind, score, at };
}

/** h:mm:ss */
export function hms(ms: number): string {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(s / 3600)}:${String(Math.floor((s % 3600) / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

/**
 * Positions on a 0 to 100 scale for drawing the 95% interval against the
 * passing standard. The scale runs from lo to hi logits and clips at the ends.
 */
export function bandScale(e: Estimate, lo = -3, hi = 3, standard: number = EXAM.passingStandard) {
  const pos = (x: number) => Math.max(0, Math.min(100, ((x - lo) / (hi - lo)) * 100));
  const se = Number.isFinite(e.se) ? e.se : hi - lo;
  return { from: pos(e.theta - 1.96 * se), to: pos(e.theta + 1.96 * se), mid: pos(e.theta), standard: pos(standard) };
}

/** Whole percent, or "none" when nothing was answered. */
export const pct = (x: number | null) => (x === null ? "none" : `${Math.round(x * 100)}%`);
