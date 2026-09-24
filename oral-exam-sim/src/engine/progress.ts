import { areaStats } from "./report";
import { latestPerCase, STANDARD } from "./score";
import { BLUEPRINT, COMPETENCIES, blueprintLabel, type Attempt, type Band, type OralCase } from "./types";

/** Cross-case dashboard. Rule based. Runs on the device. */

export interface HeatCell {
  awarded: number;
  max: number;
  percent: number | null;
}

export interface Heatmap {
  rows: { area: string; label: string; cells: HeatCell[]; percent: number | null; tried: number; total: number }[];
  columns: { id: string; label: string }[];
}

/** Blueprint area by competency, from the latest attempt at each case. */
export function heatmap(cases: OralCase[], attempts: Attempt[]): Heatmap {
  const latest = latestPerCase(attempts);
  const byCase = new Map(cases.map((c) => [c.id, c]));
  const grid = new Map<string, HeatCell>();
  const key = (a: string, d: string) => `${a}|${d}`;
  for (const a of latest.values()) {
    const c = byCase.get(a.caseId);
    if (!c) continue;
    for (const d of a.score!.competencies) {
      const k = key(c.blueprint, d.id);
      const cell = grid.get(k) ?? { awarded: 0, max: 0, percent: null };
      cell.awarded += d.awarded;
      cell.max += d.max;
      grid.set(k, cell);
    }
  }
  const stats = new Map(areaStats(cases, attempts).map((s) => [s.area, s]));
  return {
    columns: COMPETENCIES.map((d) => ({ id: d.id, label: d.label })),
    rows: BLUEPRINT.map((b) => ({
      area: b.id,
      label: b.label,
      percent: stats.get(b.id)!.percent,
      tried: stats.get(b.id)!.cases,
      total: cases.filter((c) => c.blueprint === b.id).length,
      cells: COMPETENCIES.map((d) => {
        const cell = grid.get(key(b.id, d.id));
        return cell && cell.max > 0
          ? { ...cell, percent: Math.round((cell.awarded / cell.max) * 100) }
          : { awarded: 0, max: 0, percent: null };
      }),
    })),
  };
}

export interface TrendPoint {
  at: number;
  percent: number;
  band: Band;
  /** Mean of this and up to four previous attempts. */
  rolling: number;
}

export function trend(attempts: Attempt[]): TrendPoint[] {
  const scored = attempts.filter((a) => a.score).sort((x, y) => (x.finishedAt ?? x.startedAt) - (y.finishedAt ?? y.startedAt));
  return scored.map((a, i) => {
    const win = scored.slice(Math.max(0, i - 4), i + 1).map((x) => x.score!.percent);
    return {
      at: a.finishedAt ?? a.startedAt,
      percent: a.score!.percent,
      band: a.score!.band,
      rolling: Math.round(win.reduce((s, p) => s + p, 0) / win.length),
    };
  });
}

export type ReadinessBand = "early" | "building" | "close" | "ready";

export interface Readiness {
  score: number;
  band: ReadinessBand;
  label: string;
  coverage: number;
  recentAverage: number | null;
  reasons: string[];
}

const READINESS_LABEL: Record<ReadinessBand, string> = {
  early: "Early days",
  building: "Building",
  close: "Getting close",
  ready: "On track",
};

/**
 * Readiness estimate from 0 to 100. A study guide, not a prediction.
 *   50 percent weight: average score across the areas tried
 *   30 percent weight: blueprint coverage (areas tried out of 16)
 *   20 percent weight: depth (distinct cases done, capped at 30)
 *   minus up to 15 for critical misses in the last ten attempts
 * "On track" also needs 75 percent coverage and a recent average at the pass mark.
 */
export function readiness(cases: OralCase[], attempts: Attempt[]): Readiness {
  const stats = areaStats(cases, attempts);
  const tried = stats.filter((s) => s.percent !== null);
  const coverage = tried.length / BLUEPRINT.length;
  const perf = tried.length ? tried.reduce((s, x) => s + x.percent!, 0) / tried.length : 0;
  const distinct = latestPerCase(attempts).size;
  const depth = Math.min(1, distinct / 30);

  const recent = trend(attempts).slice(-10);
  const critRecent = attempts
    .filter((a) => a.score)
    .sort((x, y) => (y.finishedAt ?? y.startedAt) - (x.finishedAt ?? x.startedAt))
    .slice(0, 10)
    .filter((a) => a.score!.criticalMisses.length > 0).length;
  const last5 = recent.slice(-5);
  const recentAverage = last5.length ? Math.round(last5.reduce((s, p) => s + p.percent, 0) / last5.length) : null;

  const raw = 100 * (0.5 * (perf / 100) + 0.3 * coverage + 0.2 * depth) - Math.min(15, critRecent * 3);
  const score = Math.max(0, Math.min(100, Math.round(raw)));

  let band: ReadinessBand = score >= 75 ? "ready" : score >= 60 ? "close" : score >= 40 ? "building" : "early";
  if (band === "ready" && (coverage < 0.75 || (recentAverage ?? 0) < STANDARD.pass * 100)) band = "close";

  const reasons: string[] = [];
  if (distinct === 0) reasons.push("Finish a case to start your estimate.");
  const untried = stats.filter((s) => s.percent === null).map((s) => blueprintLabel(s.area).toLowerCase());
  if (distinct > 0 && untried.length) {
    reasons.push(
      untried.length > 4
        ? `You have not tried ${untried.length} of 16 areas yet.`
        : `Not yet tried: ${untried.join(", ")}.`,
    );
  }
  const weak = tried.filter((s) => s.percent! < STANDARD.pass * 100).sort((x, y) => x.percent! - y.percent!);
  if (weak.length) reasons.push(`Below the pass mark in ${weak.slice(0, 3).map((s) => blueprintLabel(s.area).toLowerCase()).join(", ")}.`);
  if (critRecent) reasons.push(`Critical misses in ${critRecent} of your last ${Math.min(10, recent.length)} cases.`);
  if (recentAverage !== null) reasons.push(`Your last ${last5.length} ${last5.length === 1 ? "case averages" : "cases average"} ${recentAverage} percent.`);
  if (distinct > 0 && distinct < 30) reasons.push(`${distinct} of ${cases.length} cases done. Aim for at least 30 before exam day.`);

  return { score, band, label: READINESS_LABEL[band], coverage, recentAverage, reasons };
}
