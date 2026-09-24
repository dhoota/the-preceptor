import { CJMM, NEEDS, type CjmmStep, type ClientNeed } from "./blueprint";
import type { ItemKind, Score } from "./types";

/** One answered item, from practice, a case study or a mock. */
export interface Answered {
  itemId: string;
  need: ClientNeed;
  cjmm: CjmmStep;
  kind: ItemKind;
  score: Score;
  at: number;
}

export interface Tally {
  items: number;
  earned: number;
  max: number;
  /** earned / max, or null when nothing was answered. */
  pct: number | null;
}

const tally = (xs: Answered[]): Tally => {
  const earned = xs.reduce((n, x) => n + x.score.earned, 0);
  const max = xs.reduce((n, x) => n + x.score.max, 0);
  return { items: xs.length, earned, max, pct: max ? earned / max : null };
};

/** Latest answer per item, so repeats do not inflate a score. */
export function latest(xs: Answered[]): Answered[] {
  const m = new Map<string, Answered>();
  for (const x of xs) {
    const prev = m.get(x.itemId);
    if (!prev || x.at >= prev.at) m.set(x.itemId, x);
  }
  return [...m.values()];
}

export function byNeed(xs: Answered[]): { id: ClientNeed; name: string; tally: Tally }[] {
  const l = latest(xs);
  return NEEDS.map((n) => ({ id: n.id, name: n.name, tally: tally(l.filter((x) => x.need === n.id)) }));
}

export function byStep(xs: Answered[]): { id: CjmmStep; name: string; tally: Tally }[] {
  const l = latest(xs);
  return CJMM.map((s) => ({ id: s.id, name: s.name, tally: tally(l.filter((x) => x.cjmm === s.id)) }));
}

export function byKind(xs: Answered[]): Partial<Record<ItemKind, Tally>> {
  const l = latest(xs);
  const out: Partial<Record<ItemKind, Tally>> = {};
  for (const k of new Set(l.map((x) => x.kind))) out[k] = tally(l.filter((x) => x.kind === k));
  return out;
}

export const overall = (xs: Answered[]) => tally(latest(xs));

/** The weakest areas with enough answers to mean something. */
export function weakest<T extends { tally: Tally }>(rows: T[], minItems = 5, n = 3): T[] {
  return rows
    .filter((r) => r.tally.items >= minItems && r.tally.pct !== null)
    .sort((a, b) => a.tally.pct! - b.tally.pct!)
    .slice(0, n);
}
