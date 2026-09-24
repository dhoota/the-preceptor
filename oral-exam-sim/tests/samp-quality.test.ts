import { describe, expect, it } from "vitest";
import { VITAL_LABELS, sampFormat, type Samp, type SampQuestion } from "@/engine/samp";
import { SAMPS, SAMP_BATCHES } from "@/samps";
import { stripInstruction } from "../src/screens/SampParts";
import expansion from "../docs/samp-expansion.json";
import conformance from "../docs/conformance.json";
import signoffKeys from "../docs/signoff-keys-2026-09.json";
import keyEdits from "../docs/conformance-key-edits.json";

/**
 * Quality gates from docs/SAMP_SPEC.md. They record defects found in the
 * other Preceptor banks (answer position and length cueing, absolute words,
 * explanations that contradict the key, category citations that got an app
 * rejected under App Store guideline 1.4.1, near duplicate stems).
 *
 * Per SAMP and per batch gates apply to the expansion batches (s19 onward),
 * which are written in the 2027 MCQ format. SAMP_BATCH=s19 limits the run.
 * The near duplicate gate covers the whole bank.
 */

const PLAN = expansion.batches as Record<string, { topic: string; count: number }>;
const only = process.env.SAMP_BATCH;
/** Legacy batches (s01 to s18) that passed the format conformance pass. They keep write-in questions. */
const CONFORMED = new Set<string>([...conformance.batches, ...(process.env.CONFORM ? [process.env.CONFORM] : [])]);
const batches = [...Object.keys(PLAN), ...CONFORMED].filter((b) => (only ? b === only : true));

const ABSOLUTE = /\b(always|never|completely|entirely|absolutely|invariably|guaranteed)\b/i;
const LAST_OK = /^(none|no)\b/i;
const CATEGORY_CITATION = /\b(standard|general|usual|common)\b.*\breferences?\b|^(canadian )?guidelines?\.?$|reference text/i;

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const sortKey = (o: string) => o.toLowerCase().replace(/[0-9.,/%]+/g, "").replace(/\s+/g, " ").trim();
const firstNumber = (o: string) => {
  const m = o.replace(/\s(?=\d{3}\b)/g, "").match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : NaN;
};

/** True when options are alphabetical (doses of one drug may sit in any order) or ascending numbers, with None or "No ..." options last. */
export function optionsOrdered(options: string[]): boolean {
  let body = options;
  while (body.length && LAST_OK.test(body[body.length - 1])) body = body.slice(0, -1);
  if (body.some((o) => LAST_OK.test(o) && /^none\b/i.test(o))) return false;
  const nums = body.map(firstNumber);
  if (nums.every((n) => !Number.isNaN(n)) && body.every((o) => /^[<>≤≥]?\s*\d/.test(o.trim()))) {
    return nums.every((n, i) => i === 0 || n >= nums[i - 1]);
  }
  const keys = body.map(sortKey);
  return keys.every((k, i) => i === 0 || k.localeCompare(keys[i - 1], "en") >= 0);
}

const keyed = (q: SampQuestion): number[] => (q.kind === "single" ? [q.correct] : q.kind === "menu" ? q.correct : []);
const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / Math.max(1, xs.length);

function parityOk(q: SampQuestion): boolean {
  if (q.kind === "short") return true;
  const k = new Set(keyed(q));
  const distract = q.options.filter((_, i) => !k.has(i)).map((o) => o.length);
  const key = q.options.filter((_, i) => k.has(i) && !LAST_OK.test(q.options[i])).map((o) => o.length);
  if (!key.length || !distract.length) return true;
  return mean(key) <= 1.5 * mean(distract);
}

/**
 * Similar length for all options, as in the CFPC sample: the longest option
 * is at most 2.1 times the shortest in a single question, and 2.6 times in a
 * menu. None and "No ..." options are left out.
 */
export function spreadOk(q: SampQuestion): boolean {
  if (q.kind === "short") return true;
  const L = q.options.filter((o) => !LAST_OK.test(o)).map((o) => o.length);
  if (L.length < 2) return true;
  return Math.max(...L) / Math.min(...L) <= (q.kind === "single" ? 2.1 : 2.6);
}

/** An explanation must never call its own keyed option wrong. */
function contradictsKey(q: SampQuestion): boolean {
  if (q.kind === "short") return false;
  const text = q.explanation.toLowerCase();
  return keyed(q).some((i) => {
    const opt = q.options[i].toLowerCase();
    const at = text.indexOf(opt);
    if (at < 0 || opt.length < 4) return false;
    const after = text.slice(at + opt.length, at + opt.length + 40);
    return /^\s*(is|are|would be)\s+(incorrect|wrong|inappropriate|not indicated|not appropriate|contraindicated)/.test(after);
  });
}

const VITAL_FORMAT: Record<string, RegExp> = {
  temperature: /^\d{2}(\.\d)?°C( (oral|rectal|tympanic|axillary|core|temporal))?$/,
  pulse: /^\d{2,3}\/minute( (regular|irregular))?$/,
  resp: /^\d{1,2}\/minute$/,
  bp: /^\d{2,3}\/\d{2,3} mmHg$/,
  o2sat: /^\d{2,3}% (on room air|on .+)$/,
  weight: /^\d+(\.\d)? kg$/,
};

function trigrams(text: string): Set<string> {
  const w = text.toLowerCase().replace(/[^a-z0-9 ]+/g, " ").split(/\s+/).filter(Boolean);
  const out = new Set<string>();
  for (let i = 0; i + 2 < w.length; i++) out.add(`${w[i]} ${w[i + 1]} ${w[i + 2]}`);
  return out;
}

function jaccard(a: Set<string>, b: Set<string>): number {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / Math.max(1, a.size + b.size - inter);
}

function citationProblems(s: Samp): string[] {
  return s.sources
    .filter((src) => !/\b(19|20)\d{2}\b/.test(src.citation) || CATEGORY_CITATION.test(src.citation))
    .map((src) => `${s.id} source ${src.id}: "${src.citation}"`);
}

for (const b of batches) {
  const list = SAMP_BATCHES[b] ?? [];
  if (!list.length) continue;
  // Expansion batches get every gate. Conformed legacy batches keep their write-in
  // questions and their stems, so they get the question and option gates only.
  const full = b in PLAN;
  describe(`quality ${b}`, () => {
    for (const s of list) {
      describe(s.id, () => {
        if (full) it("uses the 2027 MCQ format with 3 to 5 questions", () => {
          expect(sampFormat(s)).toBe("mcq");
          expect(s.questions.length).toBeGreaterThanOrEqual(3);
          expect(s.questions.length).toBeLessThanOrEqual(5);
        });
        if (full) it("follows the CFPC stem conventions", () => {
          expect(s.stem, "vitals belong in the vitals field").not.toMatch(/\b\d{2,3}\/\d{2,3}\s*(mm ?hg)?\b/i);
          expect(s.stem, "hyphenate ages").not.toMatch(/\b\d+ (year|month|week|day)s? old\b/i);
          expect(words(s.stem)).toBeGreaterThanOrEqual(40);
          expect(words(s.stem)).toBeLessThanOrEqual(170);
          expect(s.stem).not.toContain("µ");
        });
        if (full || s.vitals) it("formats vitals as the CFPC does", () => {
          expect(s.vitals, "vitals field").toBeDefined();
          for (const [k] of VITAL_LABELS) {
            const v = s.vitals?.[k];
            if (v !== undefined) expect(v, `${k}: ${v}`).toMatch(VITAL_FORMAT[k]);
          }
        });
        it("cites real, specific sources", () => {
          expect(citationProblems(s)).toEqual([]);
        });
        for (const q of s.questions) {
          describe(q.id, () => {
            it("words the question as the CFPC does", () => {
              expect(q.prompt.trim().endsWith("?"), q.prompt).toBe(true);
              expect(stripInstruction(q.prompt), "no instruction in the prompt").toBe(q.prompt.trim());
              if (q.kind === "short") return;
              expect(q.prompt).toMatch(/^(.*\s)?which of the following\b/i);
              const w = words(q.prompt);
              expect(w, "question sentence 10 to 30 words, as in the CFPC sample").toBeGreaterThanOrEqual(10);
              expect(w).toBeLessThanOrEqual(30);
            });
            if (q.kind === "single") it("has exactly 5 options", () => expect(q.options).toHaveLength(5));
            if (q.kind === "menu")
              it("has 6 to 12 options and selects 1 to 4", () => {
                expect(q.options.length).toBeGreaterThanOrEqual(6);
                expect(q.options.length).toBeLessThanOrEqual(12);
                expect(q.select).toBeGreaterThanOrEqual(1);
                expect(q.select).toBeLessThanOrEqual(4);
              });
            if (q.kind !== "short")
              it("has ordered, parallel, uncued options", () => {
                expect(optionsOrdered(q.options), q.options.join(" | ")).toBe(true);
                for (const o of q.options) {
                  expect(o, "no final period").not.toMatch(/\.$/);
                  expect(words(o), o).toBeLessThanOrEqual(10);
                  expect(o, "no absolute words").not.toMatch(ABSOLUTE);
                }
                expect(parityOk(q), "key no longer than 1.5 times the mean distractor").toBe(true);
                expect(spreadOk(q), `similar option lengths: ${q.options.map((o) => o.length).join(",")}`).toBe(true);
                for (const o of q.options) expect(o.length, o).toBeLessThanOrEqual(60);
              });
            it("explains without contradicting the key", () => {
              if (full) expect(q.explanation.length).toBeGreaterThanOrEqual(150);
              expect(contradictsKey(q)).toBe(false);
            });
          });
        }
      });
    }
    it("balances key position and length across single questions", () => {
      const singles = list.flatMap((s) => s.questions).filter((q) => q.kind === "single");
      if (singles.length < 10) return;
      const pos = [0, 0, 0, 0, 0];
      let longest = 0;
      for (const q of singles) {
        if (q.kind !== "single") continue;
        pos[q.correct]++;
        const len = q.options[q.correct].length;
        if (q.options.every((o, i) => i === q.correct || o.length < len)) longest++;
      }
      expect(Math.max(...pos) / singles.length, `positions ${pos.join(",")}`).toBeLessThanOrEqual(0.3);
      expect(pos.every((n) => n > 0), `every position holds a key: ${pos.join(",")}`).toBe(true);
      expect(longest / singles.length, "key is the single longest option").toBeLessThanOrEqual(0.35);
    });
  });
}

describe("signed-off answer keys", () => {
  // Keys a physician signed off never change silently. Write-in keys must match
  // the snapshot. A keyed option may be reworded for length parity only when the
  // edit is logged in docs/conformance-key-edits.json for physician review.
  type Snap = { id: string; kind: string; keyed?: string[]; select?: number; required?: number; accept?: unknown; unacceptable?: unknown };
  const snap = signoffKeys as Record<string, Snap[]>;
  const edits = keyEdits.edits as Record<string, { before: string[]; after: string[] }>;
  for (const s of SAMPS.filter((x) => x.reviewed && (!only || SAMP_BATCHES[only]?.includes(x)))) {
    it(`${s.id} keeps its keys`, () => {
      const before = snap[s.id];
      expect(before, "in the key snapshot").toBeDefined();
      expect(s.questions.map((q) => q.id)).toEqual(before.map((q) => q.id));
      s.questions.forEach((q, i) => {
        const b = before[i];
        if (q.kind === "short") {
          expect({ required: q.required, accept: q.accept, unacceptable: q.unacceptable ?? [] }).toEqual({ required: b.required, accept: b.accept, unacceptable: b.unacceptable });
          return;
        }
        // Compared as sets: reordering options must not look like a key change.
        const keyed = (q.kind === "single" ? [q.correct] : q.correct).map((k) => q.options[k]).sort();
        expect(q.kind).toBe(b.kind);
        expect(q.kind === "menu" ? q.select : 1).toBe(b.select);
        const logged = edits[`${s.id}#${q.id}`];
        expect(keyed, "keyed options changed without a logged edit").toEqual([...(logged ? logged.after : b.keyed!)].sort());
        if (logged) expect([...logged.before].sort()).toEqual([...b.keyed!].sort());
      });
    });
  }
});

describe("bank wide", () => {
  it("has no near duplicate stems", () => {
    const grams = SAMPS.map((s) => ({ id: s.id, g: trigrams(s.stem) }));
    const dups: string[] = [];
    for (let i = 0; i < grams.length; i++)
      for (let j = i + 1; j < grams.length; j++) {
        const x = jaccard(grams[i].g, grams[j].g);
        if (x >= 0.5) dups.push(`${grams[i].id} ~ ${grams[j].id} (${x.toFixed(2)})`);
      }
    expect(dups).toEqual([]);
  });
});

describe("gate self test", () => {
  // Each gate must fail on known-bad input, or it proves nothing.
  it("catches bad option order, absolute words, parity and contradiction", () => {
    expect(optionsOrdered(["ceftriaxone", "amoxicillin", "doxycycline"])).toBe(false);
    expect(optionsOrdered(["amoxicillin", "ceftriaxone", "doxycycline", "None"])).toBe(true);
    expect(optionsOrdered(["None", "amoxicillin", "ceftriaxone"])).toBe(false);
    expect(optionsOrdered(["10 to 20%", "21 to 40%", "41 to 60%"])).toBe(true);
    expect(optionsOrdered(["epinephrine 0.5 mg IM", "epinephrine 0.3 mg IM", "glucagon 1 mg IV"])).toBe(true);
    expect(ABSOLUTE.test("Never give fluids")).toBe(true);
    const q = { kind: "single", id: "q", prompt: "Which of the following?", options: ["a", "b", "c", "d", "a very long and detailed keyed answer"], correct: 4, explanation: "", keyFeature: { topic: "x", n: 1 }, source: "s" } as SampQuestion;
    expect(parityOk(q)).toBe(false);
    expect(spreadOk(q)).toBe(false);
    expect(spreadOk({ ...q, options: ["aspirin 160 mg PO", "heparin 5000 units IV", "clopidogrel 300 mg PO", "None"] } as SampQuestion)).toBe(true);
    expect(contradictsKey({ ...q, explanation: "The option a very long and detailed keyed answer is incorrect here." } as SampQuestion)).toBe(true);
    expect(citationProblems({ id: "t", sources: [{ id: "s1", citation: "Standard emergency medicine references" }] } as Samp)).toHaveLength(1);
    expect(citationProblems({ id: "t", sources: [{ id: "s1", citation: "Thrombosis Canada. DVT treatment guide. 2024." }, { id: "s2", citation: "Rosen's Emergency Medicine" }] } as Samp)).toHaveLength(1);
    expect(jaccard(trigrams("a b c d e f"), trigrams("a b c d e f"))).toBe(1);
  });
});
