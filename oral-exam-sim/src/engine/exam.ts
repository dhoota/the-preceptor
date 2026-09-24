import { latestPerCase } from "./score";
import { sampFormat, type Samp, type SampMark } from "./samp";
import type { Attempt, OralCase } from "./types";

/**
 * Exam composition and per priority topic analytics. Pure and offline.
 */

/** Written mock. The real SAMP exam is designed to last four hours. */
export const MOCK_WRITTEN = {
  full: { minutes: 240, samps: 40 },
  half: { minutes: 120, samps: 20 },
} as const;

/** Structured oral: four stations of 12 minutes, four different topics. */
export const ORAL_STATION_MINUTES = 12;
/** Reading time before each station, when the candidate reads the scenario out loud. */
export const ORAL_READING_MINUTES = 2;
export const MOCK_ORAL_STATIONS = 4;

/** Small seeded generator so a composed exam is reproducible in tests. */
export function rng(seed: number): () => number {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 1_000_000) / 1_000_000;
  };
}

function shuffle<T>(xs: T[], rand: () => number): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Blueprint balanced draw: one SAMP per topic in turn, topics in random
 * order, until the count is reached. SAMPs the candidate has not seen come
 * first within each topic. Only multiple choice and menu SAMPs are drawn,
 * as on the exam from 2027.
 */
export function composeWrittenMock(
  samps: Samp[],
  count: number,
  opts: { rand?: () => number; seen?: Set<string>; allowed?: (id: string) => boolean } = {},
): string[] {
  const rand = opts.rand ?? Math.random;
  const pool = samps.filter((s) => sampFormat(s) === "mcq" && (opts.allowed?.(s.id) ?? true));
  const byTopic = new Map<string, Samp[]>();
  for (const s of pool) byTopic.set(s.topic, [...(byTopic.get(s.topic) ?? []), s]);
  const queues = new Map<string, Samp[]>();
  for (const [t, list] of byTopic) {
    const fresh = shuffle(list.filter((s) => !opts.seen?.has(s.id)), rand);
    const old = shuffle(list.filter((s) => opts.seen?.has(s.id)), rand);
    queues.set(t, [...fresh, ...old]);
  }
  const out: string[] = [];
  let topics = shuffle([...queues.keys()], rand);
  while (out.length < Math.min(count, pool.length)) {
    for (const t of topics) {
      const q = queues.get(t)!;
      const next = q.shift();
      if (next) out.push(next.id);
      if (out.length >= count) break;
    }
    topics = topics.filter((t) => queues.get(t)!.length > 0);
    if (!topics.length) break;
  }
  return out;
}

/** Four oral cases on four different priority topics. Unseen cases first. */
export function composeOralMock(
  cases: OralCase[],
  opts: { rand?: () => number; seen?: Set<string>; allowed?: (id: string) => boolean } = {},
): string[] {
  const rand = opts.rand ?? Math.random;
  const pool = shuffle(cases.filter((c) => opts.allowed?.(c.id) ?? true), rand).sort(
    (a, b) => Number(opts.seen?.has(a.id) ?? false) - Number(opts.seen?.has(b.id) ?? false),
  );
  const topics = new Set<string>();
  const out: string[] = [];
  for (const c of pool) {
    if (topics.has(c.priorityTopic)) continue;
    topics.add(c.priorityTopic);
    out.push(c.id);
    if (out.length === MOCK_ORAL_STATIONS) break;
  }
  return out;
}

export interface TopicStat {
  topic: string;
  sampsTotal: number;
  sampsDone: number;
  /** Mean question score in percent across the latest attempt at each SAMP. */
  written: number | null;
  oralTotal: number;
  oralDone: number;
  /** Mean oral percent across the latest attempt at each case. */
  oral: number | null;
  keyFeaturesTotal: number;
  /** Key features with at least one scored written question or oral case. */
  keyFeaturesSeen: number;
  /** Per key feature written score in percent, where tested. */
  byKeyFeature: Record<number, number>;
}

/**
 * Coverage and performance for every priority topic, written and oral.
 * Latest attempt per SAMP and per case, so progress reflects current skill.
 */
export function topicStats(
  topics: readonly { id: string; keyFeatures: readonly { n: number }[] }[],
  samps: Samp[],
  sampMarks: { sampId: string; at: number; mark: SampMark }[],
  cases: OralCase[],
  attempts: Attempt[],
): TopicStat[] {
  const latest = new Map<string, { at: number; mark: SampMark }>();
  for (const m of sampMarks) {
    const prev = latest.get(m.sampId);
    if (!prev || m.at > prev.at) latest.set(m.sampId, m);
  }
  const sampById = new Map(samps.map((s) => [s.id, s]));
  const kfScores = new Map<string, number[]>();
  const topicScores = new Map<string, number[]>();
  for (const [sampId, { mark }] of latest) {
    const s = sampById.get(sampId);
    if (!s) continue;
    for (const qm of mark.questions) {
      const q = s.questions.find((x) => x.id === qm.questionId);
      if (!q) continue;
      const key = `${q.keyFeature.topic}#${q.keyFeature.n}`;
      kfScores.set(key, [...(kfScores.get(key) ?? []), qm.score]);
      topicScores.set(q.keyFeature.topic, [...(topicScores.get(q.keyFeature.topic) ?? []), qm.score]);
    }
  }
  const oralLatest = latestPerCase(attempts);
  const oralSeen = new Set<string>();
  for (const a of oralLatest.values()) {
    const c = cases.find((x) => x.id === a.caseId);
    for (const kf of c?.keyFeatures ?? []) oralSeen.add(`${kf.topic}#${kf.n}`);
  }
  const mean = (xs: number[]) => (xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 100) : null);

  return topics.map((t) => {
    const tSamps = samps.filter((s) => s.topic === t.id);
    const tCases = cases.filter((c) => c.priorityTopic === t.id);
    const oralPcts = tCases.map((c) => oralLatest.get(c.id)?.score?.percent).filter((p): p is number => typeof p === "number");
    const byKeyFeature: Record<number, number> = {};
    let seen = 0;
    for (const k of t.keyFeatures) {
      const key = `${t.id}#${k.n}`;
      const w = kfScores.get(key);
      if (w?.length) byKeyFeature[k.n] = mean(w)!;
      if (w?.length || oralSeen.has(key)) seen++;
    }
    return {
      topic: t.id,
      sampsTotal: tSamps.length,
      sampsDone: tSamps.filter((s) => latest.has(s.id)).length,
      written: mean(topicScores.get(t.id) ?? []),
      oralTotal: tCases.length,
      oralDone: oralPcts.length,
      oral: oralPcts.length ? Math.round(oralPcts.reduce((a, b) => a + b, 0) / oralPcts.length) : null,
      keyFeaturesTotal: t.keyFeatures.length,
      keyFeaturesSeen: seen,
      byKeyFeature,
    };
  });
}
