import { COMPETENCIES, ORAL_CRITERIA, type Attempt, type Band, type OralCase, type Score, type SelfMark } from "./types";

/**
 * Fixed standard, the same for every case:
 *   pass        70 percent or more and no critical misses
 *   borderline  60 to 69 percent with no critical misses, or one critical miss at 60 percent or more
 *   fail        under 60 percent, or two or more critical misses
 * A critical item counts as missed unless marked "yes".
 */
export const STANDARD = { pass: 0.7, borderline: 0.6 } as const;

const VALUE: Record<SelfMark, number> = { yes: 1, partly: 0.5, no: 0 };

export function bandFor(ratio: number, criticalMisses: number): Band {
  if (criticalMisses >= 2 || ratio < STANDARD.borderline) return "fail";
  if (criticalMisses === 1 || ratio < STANDARD.pass) return "borderline";
  return "pass";
}

export const BAND_LABEL: Record<Band, string> = {
  pass: "Pass",
  borderline: "Borderline",
  fail: "Below standard",
};

/** Unmarked items count as "no" so skipping the checklist never inflates a score. */
export function scoreMarks(c: OralCase, marks: Record<string, SelfMark>): Score {
  const byId = new Map(COMPETENCIES.map((d) => [d.id, { id: d.id, name: d.label, awarded: 0, max: 0 }]));
  const byCriterion = new Map(ORAL_CRITERIA.map((d) => [d.id, { id: d.id, name: d.label, awarded: 0, max: 0 }]));
  const criticalMisses: string[] = [];
  const missed: string[] = [];

  for (const item of c.rubric) {
    const mark = marks[item.id] ?? "no";
    const d = byId.get(item.competency);
    if (d) {
      d.awarded += item.points * VALUE[mark];
      d.max += item.points;
    }
    const k = byCriterion.get(item.criterion);
    if (k) {
      k.awarded += item.points * VALUE[mark];
      k.max += item.points;
    }
    if (mark !== "yes") {
      missed.push(item.id);
      if (item.critical) criticalMisses.push(item.id);
    }
  }

  const competencies = [...byId.values()].filter((d) => d.max > 0);
  const awarded = competencies.reduce((s, d) => s + d.awarded, 0);
  const max = competencies.reduce((s, d) => s + d.max, 0);
  const ratio = max ? awarded / max : 0;
  return {
    awarded,
    max,
    percent: Math.round(ratio * 1000) / 10,
    band: bandFor(ratio, criticalMisses.length),
    criticalMisses,
    competencies,
    criteria: [...byCriterion.values()].filter((d) => d.max > 0),
    missed,
  };
}

export function finishAttempt(c: OralCase, a: Attempt, marks: Record<string, SelfMark>, now: number): Attempt {
  return { ...a, marks, score: scoreMarks(c, marks), finishedAt: a.finishedAt ?? now };
}

/** Latest scored attempt per case. Old mistakes fade once the candidate improves. */
export function latestPerCase(attempts: Attempt[]): Map<string, Attempt> {
  const latest = new Map<string, Attempt>();
  for (const a of attempts) {
    if (!a.score) continue;
    const prev = latest.get(a.caseId);
    if (!prev || a.startedAt > prev.startedAt) latest.set(a.caseId, a);
  }
  return latest;
}
