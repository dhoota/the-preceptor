import type { Source } from "./types";

/**
 * Written component: SAMPs (short answer management problems).
 *
 * Three question formats, as in the CFPC sample SAMP document:
 *   single  Multiple choice. Select one.
 *   menu    Select N from a list. The list may include "None".
 *   short   Free text. List N. Scored against an answer key.
 *
 * Scoring is deterministic and offline. Each question is worth one point,
 * split evenly across the items it asks for. Only the first N answers count.
 */

/** Reference to a CFPC priority topic key feature. */
export interface KeyFeatureRef {
  topic: string;
  n: number;
}

interface QuestionBase {
  id: string;
  /** New information revealed before this question, as in a real SAMP. */
  update?: string;
  prompt: string;
  /** Why the answer is right. Shown after marking. Two to four short sentences. */
  explanation: string;
  keyFeature: KeyFeatureRef;
  /** ID of an entry in the SAMP's sources. */
  source: string;
}

export interface SingleQuestion extends QuestionBase {
  kind: "single";
  options: string[];
  /** Index into options. */
  correct: number;
}

export interface MenuQuestion extends QuestionBase {
  kind: "menu";
  options: string[];
  /** How many the candidate must select. */
  select: number;
  /** Indexes into options. Length equals select, unless the answer is None. */
  correct: number[];
}

/** One acceptable answer in a short answer key. */
export interface KeyItem {
  id: string;
  /** How the answer reads in the key. */
  text: string;
  /**
   * Phrases that count as this answer. A candidate line matches when every
   * word of any phrase appears in it. Lowercase. Include common synonyms,
   * abbreviations and drug classes where the key accepts them.
   */
  match: string[];
}

export interface UnacceptableItem {
  text: string;
  match: string[];
  /** A dangerous answer scores the whole question zero. */
  dangerous?: boolean;
}

export interface ShortQuestion extends QuestionBase {
  kind: "short";
  /** Number of answers asked for. "List THREE." */
  required: number;
  accept: KeyItem[];
  unacceptable?: UnacceptableItem[];
}

export type SampQuestion = SingleQuestion | MenuQuestion | ShortQuestion;

export interface Samp {
  id: string;
  /** Primary CFPC priority topic id. */
  topic: string;
  alsoTopics?: string[];
  /** Neutral heading. Must not give away the diagnosis. */
  title: string;
  stem: string;
  questions: SampQuestion[];
  sources: Source[];
  reviewed: boolean;
  author: string;
  version: number;
}

/* Answer matching ------------------------------------------------------- */

/** Lowercase, strip accents and punctuation, singularise simple plurals. */
export function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9.%/ ]+/g, " ")
    .replace(/(?<![0-9])\.|\.(?![0-9])/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w));
}

/** True when every word of any phrase appears in the line. */
export function lineMatches(line: string, phrases: string[]): boolean {
  const have = new Set(tokens(line));
  return phrases.some((p) => {
    const need = tokens(p);
    return need.length > 0 && need.every((w) => have.has(w));
  });
}

/* Scoring --------------------------------------------------------------- */

export type SampResponse =
  | { kind: "single"; choice: number | null }
  | { kind: "menu"; choices: number[] }
  | { kind: "short"; lines: string[]; overrides?: Record<number, boolean> };

export interface LineMark {
  line: string;
  /** Key item this line was matched to, if any. */
  itemId: string | null;
  unacceptable: string | null;
  dangerous: boolean;
  counted: boolean;
  /** The candidate changed the automatic mark. */
  overridden: boolean;
}

export interface QuestionMark {
  questionId: string;
  earned: number;
  max: number;
  /** earned / max, from 0 to 1. */
  score: number;
  lines?: LineMark[];
}

/**
 * Marks a short answer. Only the first `required` non-empty lines count.
 * Each accepted key item can score once. A line that matches an
 * unacceptable answer scores zero. A dangerous answer zeroes the question.
 * The candidate may override the automatic mark on any counted line,
 * because free text matching can miss a correct answer worded differently.
 */
export function markShort(q: ShortQuestion, lines: string[], overrides: Record<number, boolean> = {}): QuestionMark {
  const used = new Set<string>();
  const counted = lines.map((l) => l.trim()).filter(Boolean).slice(0, q.required);
  const marks: LineMark[] = counted.map((line, i) => {
    const bad = (q.unacceptable ?? []).find((u) => lineMatches(line, u.match)) ?? null;
    let itemId: string | null = null;
    if (!bad) {
      const hit = q.accept.find((a) => !used.has(a.id) && lineMatches(line, a.match));
      if (hit) {
        itemId = hit.id;
        used.add(hit.id);
      }
    }
    const auto = Boolean(itemId);
    const overridden = i in overrides && overrides[i] !== auto && !bad?.dangerous;
    return {
      line,
      itemId,
      unacceptable: bad?.text ?? null,
      dangerous: Boolean(bad?.dangerous),
      counted: overridden ? overrides[i] : auto,
      overridden,
    };
  });
  const dangerous = marks.some((m) => m.dangerous);
  const earned = dangerous ? 0 : Math.min(q.required, marks.filter((m) => m.counted).length);
  return { questionId: q.id, earned, max: q.required, score: q.required ? earned / q.required : 0, lines: marks };
}

export function markSingle(q: SingleQuestion, choice: number | null): QuestionMark {
  const earned = choice === q.correct ? 1 : 0;
  return { questionId: q.id, earned, max: 1, score: earned };
}

/** Menu: one point per correct selection, up to `select`. Extra picks beyond `select` are ignored. */
export function markMenu(q: MenuQuestion, choices: number[]): QuestionMark {
  const picked = [...new Set(choices)].slice(0, q.select);
  const right = new Set(q.correct);
  const max = Math.max(1, q.correct.length);
  const earned = Math.min(max, picked.filter((c) => right.has(c)).length);
  return { questionId: q.id, earned, max, score: earned / max };
}

export function markQuestion(q: SampQuestion, r: SampResponse | undefined): QuestionMark {
  if (q.kind === "single") return markSingle(q, r?.kind === "single" ? r.choice : null);
  if (q.kind === "menu") return markMenu(q, r?.kind === "menu" ? r.choices : []);
  return markShort(q, r?.kind === "short" ? r.lines : [], r?.kind === "short" ? r.overrides : {});
}

export interface SampMark {
  sampId: string;
  topic: string;
  questions: QuestionMark[];
  /** Mean question score, from 0 to 1. */
  score: number;
}

export function markSamp(s: Samp, responses: Record<string, SampResponse>): SampMark {
  const questions = s.questions.map((q) => markQuestion(q, responses[q.id]));
  const score = questions.length ? questions.reduce((a, m) => a + m.score, 0) / questions.length : 0;
  return { sampId: s.id, topic: s.topic, questions, score };
}

/* Validation ------------------------------------------------------------ */

export function validateSamp(s: Samp, topicKeyFeatureCount: (topic: string) => number | undefined): string[] {
  const errors: string[] = [];
  const err = (m: string) => errors.push(`${s.id}: ${m}`);
  if (!topicKeyFeatureCount(s.topic)) err(`unknown priority topic "${s.topic}"`);
  for (const t of s.alsoTopics ?? []) if (!topicKeyFeatureCount(t)) err(`unknown alsoTopics "${t}"`);
  if (s.questions.length < 3 || s.questions.length > 6) err("must have 3 to 6 questions");
  const sourceIds = new Set(s.sources.map((x) => x.id));
  if (!s.sources.length) err("no sources");
  const cited = new Set<string>();
  const qids = new Set<string>();
  for (const q of s.questions) {
    if (qids.has(q.id)) err(`duplicate question id "${q.id}"`);
    qids.add(q.id);
    if (!q.prompt.trim()) err(`${q.id} has no prompt`);
    if (!q.explanation.trim()) err(`${q.id} has no explanation`);
    if (!sourceIds.has(q.source)) err(`${q.id} cites unknown source "${q.source}"`);
    cited.add(q.source);
    const kfMax = topicKeyFeatureCount(q.keyFeature.topic);
    if (!kfMax) err(`${q.id} key feature has unknown topic "${q.keyFeature.topic}"`);
    else if (!(q.keyFeature.n >= 1 && q.keyFeature.n <= kfMax)) err(`${q.id} key feature ${q.keyFeature.n} out of range`);
    if (q.kind === "single") {
      if (q.options.length < 4 || q.options.length > 6) err(`${q.id} single needs 4 to 6 options`);
      if (!(q.correct >= 0 && q.correct < q.options.length)) err(`${q.id} correct index out of range`);
    } else if (q.kind === "menu") {
      if (q.options.length < 6 || q.options.length > 20) err(`${q.id} menu needs 6 to 20 options`);
      if (q.select < 1) err(`${q.id} select must be at least 1`);
      if (q.correct.some((c) => !(c >= 0 && c < q.options.length))) err(`${q.id} correct index out of range`);
      if (new Set(q.correct).size !== q.correct.length) err(`${q.id} duplicate correct index`);
      const isNone = q.correct.length === 1 && /^none\b/i.test(q.options[q.correct[0]]);
      if (!isNone && q.correct.length !== q.select) err(`${q.id} correct count must equal select`);
    } else {
      if (q.required < 1 || q.required > 6) err(`${q.id} required must be 1 to 6`);
      if (q.accept.length < q.required) err(`${q.id} key has fewer acceptable answers than required`);
      const ids = new Set<string>();
      for (const a of q.accept) {
        if (ids.has(a.id)) err(`${q.id} duplicate key item "${a.id}"`);
        ids.add(a.id);
        if (!a.match.length || a.match.some((m) => !tokens(m).length)) err(`${q.id} key item "${a.id}" has no usable match phrase`);
        if (!lineMatches(a.text, a.match)) err(`${q.id} key item "${a.id}" does not match its own text`);
      }
      for (const u of q.unacceptable ?? []) {
        if (!u.match.length) err(`${q.id} unacceptable "${u.text}" has no match phrase`);
        for (const a of q.accept) {
          if (lineMatches(a.text, u.match)) err(`${q.id} unacceptable "${u.text}" would also reject key item "${a.id}"`);
        }
      }
    }
  }
  for (const id of sourceIds) if (!cited.has(id)) err(`source "${id}" is never cited`);
  return errors;
}
