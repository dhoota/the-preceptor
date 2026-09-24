import { cardKey } from "./review";
import { nodeById } from "./runner";
import { BAND_LABEL, latestPerCase } from "./score";
import {
  BLUEPRINT,
  blueprintLabel,
  competencyLabel,
  type Attempt,
  type Band,
  type BlueprintId,
  type CompetencyScore,
  type OralCase,
  type SelfMark,
  type Source,
} from "./types";

/**
 * Rule-built feedback. No AI. Everything here is a pure function of the
 * case data, the candidate's path, their self-marks and their history.
 */

export interface ReportItem {
  id: string;
  text: string;
  competency: string;
  points: number;
  mark: SelfMark;
  critical: boolean;
  teaching: string;
  source?: Source;
  reviewKey: string;
}

export interface Decision {
  questionId: string;
  prompt: string;
  choice: string;
  quality: "strong" | "partial" | "unsafe";
  feedback: string;
}

export interface NextCase {
  caseId: string;
  title: string;
  area: string;
  reason: string;
}

export interface CaseReport {
  caseId: string;
  band: Band;
  bandLabel: string;
  percent: number;
  awarded: number;
  max: number;
  summary: string;
  criticalMisses: ReportItem[];
  competencies: CompetencyScore[];
  topFixes: ReportItem[];
  decisions: Decision[];
  reviewKeys: string[];
  nextCases: NextCase[];
}

function item(c: OralCase, id: string, mark: SelfMark): ReportItem {
  const r = c.rubric.find((x) => x.id === id)!;
  return {
    id,
    text: r.text,
    competency: competencyLabel(r.competency),
    points: r.points,
    mark,
    critical: Boolean(r.critical),
    teaching: r.teaching,
    source: c.sources.find((s) => s.id === r.source),
    reviewKey: cardKey(c.id, id),
  };
}

/** Decisions the candidate made, in order, with the scripted feedback. */
export function decisions(c: OralCase, a: Attempt): Decision[] {
  const out: Decision[] = [];
  for (const step of a.path) {
    if (!step.choiceId) continue;
    const n = nodeById(c, step.nodeId);
    if (n.kind !== "question") continue;
    const ch = n.choices?.find((x) => x.id === step.choiceId);
    if (!ch) continue;
    out.push({ questionId: n.id, prompt: n.prompt, choice: ch.label, quality: ch.quality, feedback: ch.feedback });
  }
  return out;
}

/**
 * Ranks what to fix first: critical items, then outright misses before
 * partial ones, then heavier items, then items in the weakest competency
 * of this attempt, then rubric order.
 */
export function rankFixes(c: OralCase, a: Attempt): ReportItem[] {
  const s = a.score!;
  const compPct = new Map(s.competencies.map((d) => [d.id as string, d.max ? d.awarded / d.max : 1]));
  const order = new Map(c.rubric.map((r, i) => [r.id, i]));
  return s.missed
    .map((id) => {
      const r = c.rubric.find((x) => x.id === id)!;
      const mark = a.marks[id] ?? "no";
      const rank =
        (r.critical ? 1000 : 0) + (mark === "no" ? 100 : 0) + r.points * 10 + (1 - (compPct.get(r.competency) ?? 1)) * 5;
      return { id, mark, rank };
    })
    .sort((x, y) => y.rank - x.rank || order.get(x.id)! - order.get(y.id)!)
    .map((x) => item(c, x.id, x.mark));
}

interface AreaStat {
  area: BlueprintId;
  percent: number | null;
  cases: number;
}

export function areaStats(cases: OralCase[], attempts: Attempt[]): AreaStat[] {
  const latest = latestPerCase(attempts);
  return BLUEPRINT.map((b) => {
    const pcts = cases
      .filter((c) => c.blueprint === b.id)
      .map((c) => latest.get(c.id)?.score?.percent)
      .filter((p): p is number => typeof p === "number");
    return {
      area: b.id,
      percent: pcts.length ? Math.round(pcts.reduce((x, y) => x + y, 0) / pcts.length) : null,
      cases: pcts.length,
    };
  });
}

/**
 * Picks the next cases to try. Weak areas first. Areas never tried rank
 * as moderately weak. Cases never attempted and cases the candidate can
 * open are preferred.
 */
export function suggestNext(
  cases: OralCase[],
  attempts: Attempt[],
  opts: { exclude?: string; canOpen?: (id: string) => boolean; n?: number } = {},
): NextCase[] {
  const stats = new Map(areaStats(cases, attempts).map((s) => [s.area, s]));
  const tried = new Set(attempts.filter((a) => a.score).map((a) => a.caseId));
  const open = opts.canOpen ?? (() => true);
  const scored = cases
    .filter((c) => c.id !== opts.exclude)
    .map((c, i) => {
      const st = stats.get(c.blueprint)!;
      const weakness = st.percent === null ? 50 : 100 - st.percent;
      const score = weakness + (tried.has(c.id) ? 0 : 30) + (open(c.id) ? 20 : 0);
      const reason =
        st.percent === null
          ? `You have not tried ${blueprintLabel(c.blueprint).toLowerCase()} yet.`
          : `${blueprintLabel(c.blueprint)} is at ${st.percent} percent across your cases.`;
      return { c, i, score, reason };
    })
    .sort((x, y) => y.score - x.score || x.i - y.i);

  // One case per area so the suggestions spread out.
  const seen = new Set<string>();
  const out: NextCase[] = [];
  for (const s of scored) {
    if (seen.has(s.c.blueprint)) continue;
    seen.add(s.c.blueprint);
    out.push({ caseId: s.c.id, title: s.c.title, area: blueprintLabel(s.c.blueprint), reason: s.reason });
    if (out.length >= (opts.n ?? 3)) break;
  }
  return out;
}

function summarize(percent: number, band: Band, criticalCount: number, comps: CompetencyScore[]): string {
  const parts = [`${BAND_LABEL[band]}. You scored ${Math.round(percent)} percent.`];
  if (criticalCount === 0) parts.push("You hit every critical action.");
  else parts.push(`You missed ${criticalCount} critical ${criticalCount === 1 ? "action" : "actions"}.`);
  const ranked = comps.filter((d) => d.max > 0).map((d) => ({ d, p: d.awarded / d.max }));
  if (ranked.length > 1) {
    ranked.sort((x, y) => y.p - x.p);
    const best = ranked[0];
    const worst = ranked[ranked.length - 1];
    if (best.p > worst.p) parts.push(`Strongest: ${best.d.name.toLowerCase()}. Weakest: ${worst.d.name.toLowerCase()}.`);
  }
  return parts.join(" ");
}

export function buildReport(
  c: OralCase,
  a: Attempt,
  ctx: { cases: OralCase[]; attempts: Attempt[]; canOpen?: (id: string) => boolean },
): CaseReport {
  if (!a.score) throw new Error("attempt is not scored");
  const s = a.score;
  const criticalMisses = s.criticalMisses.map((id) => item(c, id, a.marks[id] ?? "no"));
  return {
    caseId: c.id,
    band: s.band,
    bandLabel: BAND_LABEL[s.band],
    percent: s.percent,
    awarded: s.awarded,
    max: s.max,
    summary: summarize(s.percent, s.band, criticalMisses.length, s.competencies),
    criticalMisses,
    competencies: s.competencies,
    topFixes: rankFixes(c, a).slice(0, 3),
    decisions: decisions(c, a),
    reviewKeys: s.missed.map((id) => cardKey(c.id, id)),
    nextCases: suggestNext(ctx.cases, ctx.attempts, { exclude: c.id, canOpen: ctx.canOpen }),
  };
}
