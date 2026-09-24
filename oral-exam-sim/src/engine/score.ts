import type { Attempt, OralCase, Score, SelfMark } from "./types";

const VALUE: Record<SelfMark, number> = { yes: 1, partly: 0.5, no: 0 };

/**
 * Scores a self-marked rubric. Unmarked items count as "no" so skipping the
 * checklist can never inflate a score. A critical item counts as missed
 * unless marked "yes".
 */
export function scoreMarks(c: OralCase, marks: Record<string, SelfMark>): Score {
  const domains = c.domains.map((d) => ({ id: d.id, name: d.name, awarded: 0, max: 0 }));
  const byDomain = new Map(domains.map((d) => [d.id, d]));
  const criticalMisses: string[] = [];
  const missed: string[] = [];

  for (const item of c.rubric) {
    const mark = marks[item.id] ?? "no";
    const got = item.points * VALUE[mark];
    const d = byDomain.get(item.domain);
    if (d) {
      d.awarded += got;
      d.max += item.points;
    }
    if (mark !== "yes") {
      missed.push(item.id);
      if (item.critical) criticalMisses.push(item.id);
    }
  }

  const awarded = domains.reduce((s, d) => s + d.awarded, 0);
  const max = domains.reduce((s, d) => s + d.max, 0);
  const ratio = max ? awarded / max : 0;
  return {
    awarded,
    max,
    percent: Math.round(ratio * 1000) / 10,
    passed: max > 0 && ratio >= c.passThreshold && criticalMisses.length === 0,
    criticalMisses,
    domains,
    missed,
  };
}

export function finishAttempt(c: OralCase, a: Attempt, marks: Record<string, SelfMark>, now: number): Attempt {
  return { ...a, marks, score: scoreMarks(c, marks), finishedAt: a.finishedAt ?? now };
}

export interface WeakArea {
  /** Normalised domain name, e.g. "communication". */
  key: string;
  name: string;
  awarded: number;
  max: number;
  percent: number;
  attempts: number;
}

/**
 * Aggregates domain scores across every scored attempt. Domains are matched
 * by name so "Communication" in two cases pools together. Sorted weakest
 * first. Only the latest attempt per case counts, so old mistakes fade once
 * the candidate improves.
 */
export function weakAreas(attempts: Attempt[], below = 101): WeakArea[] {
  const latest = new Map<string, Attempt>();
  for (const a of attempts) {
    if (!a.score) continue;
    const prev = latest.get(a.caseId);
    if (!prev || a.startedAt > prev.startedAt) latest.set(a.caseId, a);
  }
  const pool = new Map<string, WeakArea>();
  for (const a of latest.values()) {
    for (const d of a.score!.domains) {
      const key = d.name.trim().toLowerCase();
      const w = pool.get(key) ?? { key, name: d.name, awarded: 0, max: 0, percent: 0, attempts: 0 };
      w.awarded += d.awarded;
      w.max += d.max;
      w.attempts += 1;
      pool.set(key, w);
    }
  }
  return [...pool.values()]
    .map((w) => ({ ...w, percent: w.max ? Math.round((w.awarded / w.max) * 100) : 0 }))
    .filter((w) => w.percent < below)
    .sort((x, y) => x.percent - y.percent || y.max - x.max);
}
