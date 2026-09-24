import type { Item, Response, Score, Scoring } from "./types";

/**
 * Deterministic scoring for every item type. Three rules, as NCSBN describes
 * them for the NCLEX:
 *   zero-one   1 point for each correct response, 0 for each wrong one.
 *   plus-minus +1 for each correct response, -1 for each wrong one, floored at 0.
 *   rationale  points only when linked responses are all correct.
 * Golden tests in tests/score.test.ts pin every case.
 */

const uniq = (xs: number[]) => [...new Set(xs)];

/** Plus/minus over a set of selections, floored at 0. */
export function plusMinus(selected: number[], correct: number[]): Score {
  const key = new Set(correct);
  let s = 0;
  for (const x of uniq(selected)) s += key.has(x) ? 1 : -1;
  return { earned: Math.max(0, s), max: key.size };
}

/** Zero-one or rationale scoring over slots that each have one correct answer. */
export function slotScore(picks: (number | null)[], correct: number[], scoring: Scoring): Score {
  const ok = correct.map((c, i) => picks[i] === c);
  if (scoring === "dyad") return { earned: ok[0] && ok[1] ? 1 : 0, max: 1 };
  if (scoring === "triad") return { earned: (ok[0] && ok[1] ? 1 : 0) + (ok[0] && ok[2] ? 1 : 0), max: 2 };
  return { earned: ok.filter(Boolean).length, max: correct.length };
}

export function maxScore(item: Item): number {
  switch (item.kind) {
    case "mc":
      return 1;
    case "msn":
      return item.select;
    case "sata":
    case "highlight":
      return item.correct.length;
    case "dnd":
      return slotScore([], item.correct, item.scoring).max;
    case "cloze":
      return slotScore([], item.blanks.map((b) => b.correct), item.scoring).max;
    case "matrix":
      return item.mode === "single" ? item.rows.length : item.rows.reduce((n, r) => n + r.correct.length, 0);
    case "bowtie":
      return 5;
  }
}

export function score(item: Item, r: Response | null | undefined): Score {
  const max = maxScore(item);
  if (!r || r.kind !== item.kind) return { earned: 0, max };
  switch (item.kind) {
    case "mc": {
      const x = r as Extract<Response, { kind: "mc" }>;
      return { earned: x.choice === item.correct ? 1 : 0, max };
    }
    case "msn": {
      // Only the first N selections count. The UI stops at N.
      const x = r as Extract<Response, { kind: "msn" }>;
      const key = new Set(item.correct);
      return { earned: uniq(x.choices).slice(0, item.select).filter((c) => key.has(c)).length, max };
    }
    case "sata":
      return plusMinus((r as Extract<Response, { kind: "sata" }>).choices, item.correct);
    case "highlight":
      return plusMinus((r as Extract<Response, { kind: "highlight" }>).spans, item.correct);
    case "dnd":
      return slotScore((r as Extract<Response, { kind: "dnd" }>).placed, item.correct, item.scoring);
    case "cloze":
      return slotScore((r as Extract<Response, { kind: "cloze" }>).picks, item.blanks.map((b) => b.correct), item.scoring);
    case "matrix": {
      const x = r as Extract<Response, { kind: "matrix" }>;
      if (item.mode === "single") {
        const earned = item.rows.filter((row, i) => (x.rows[i] ?? []).length === 1 && x.rows[i][0] === row.correct[0]).length;
        return { earned, max };
      }
      // Plus/minus per column, each column floored at 0.
      let earned = 0;
      item.columns.forEach((_, c) => {
        const sel = item.rows.map((_, i) => i).filter((i) => (x.rows[i] ?? []).includes(c));
        const key = item.rows.map((_, i) => i).filter((i) => item.rows[i].correct.includes(c));
        earned += plusMinus(sel, key).earned;
      });
      return { earned, max };
    }
    case "bowtie": {
      const x = r as Extract<Response, { kind: "bowtie" }>;
      const c = item.correct;
      const hits = (sel: number[], key: number[]) => uniq(sel).slice(0, 2).filter((s) => key.includes(s)).length;
      return { earned: (x.condition === c.condition ? 1 : 0) + hits(x.actions, c.actions) + hits(x.parameters, c.parameters), max };
    }
  }
}

/** The correct response, for review screens and tests. */
export function keyResponse(item: Item): Response {
  switch (item.kind) {
    case "mc":
      return { kind: "mc", choice: item.correct };
    case "msn":
      return { kind: "msn", choices: [...item.correct] };
    case "sata":
      return { kind: "sata", choices: [...item.correct] };
    case "highlight":
      return { kind: "highlight", spans: [...item.correct] };
    case "dnd":
      return { kind: "dnd", placed: [...item.correct] };
    case "cloze":
      return { kind: "cloze", picks: item.blanks.map((b) => b.correct) };
    case "matrix":
      return { kind: "matrix", rows: item.rows.map((r) => [...r.correct]) };
    case "bowtie":
      return { kind: "bowtie", condition: item.correct.condition, actions: [...item.correct.actions], parameters: [...item.correct.parameters] };
  }
}

export function emptyResponse(item: Item): Response {
  switch (item.kind) {
    case "mc":
      return { kind: "mc", choice: null };
    case "msn":
      return { kind: "msn", choices: [] };
    case "sata":
      return { kind: "sata", choices: [] };
    case "highlight":
      return { kind: "highlight", spans: [] };
    case "dnd":
      return { kind: "dnd", placed: item.targets.map(() => null) };
    case "cloze":
      return { kind: "cloze", picks: item.blanks.map(() => null) };
    case "matrix":
      return { kind: "matrix", rows: item.rows.map(() => []) };
    case "bowtie":
      return { kind: "bowtie", condition: null, actions: [], parameters: [] };
  }
}

/** True when the candidate has given enough to submit. */
export function isComplete(item: Item, r: Response): boolean {
  switch (r.kind) {
    case "mc":
      return r.choice !== null;
    case "msn":
      return item.kind === "msn" && r.choices.length === item.select;
    case "sata":
      return r.choices.length > 0;
    case "highlight":
      return r.spans.length > 0;
    case "dnd":
      return r.placed.every((p) => p !== null);
    case "cloze":
      return r.picks.every((p) => p !== null);
    case "matrix":
      return item.kind === "matrix" && (item.mode === "single" ? r.rows.every((x) => x.length === 1) : r.rows.some((x) => x.length > 0));
    case "bowtie":
      return r.condition !== null && r.actions.length === 2 && r.parameters.length === 2;
  }
}

export const KIND_NAMES: Record<Item["kind"], string> = {
  mc: "Multiple choice",
  msn: "Multiple response select N",
  sata: "Select all that apply",
  dnd: "Drag and drop",
  cloze: "Drop-down cloze",
  highlight: "Highlight",
  matrix: "Matrix",
  bowtie: "Bow-tie",
};
