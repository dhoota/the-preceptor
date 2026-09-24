import type { CjmmStep, ClientNeed, IntegratedProcess } from "./blueprint";

/**
 * The item contract. docs/ITEM_SPEC.md explains every field. Items are static
 * data. The app runs no AI. Every item ships with reviewed: false until a
 * nurse educator signs it off.
 */

/** A response option with the reason it is right or wrong. Every reason must be true. */
export interface Choice {
  text: string;
  why: string;
}

/** A named source: author or body, work, year. A category is not a source. */
export interface Source {
  body: string;
  work: string;
  year: number;
  url?: string;
}

/** A chart tab, as in an electronic health record. */
export interface Tab {
  title: string;
  /** Free text, one note per line. */
  text?: string;
  /** A table. For trend items the columns are time points. */
  table?: { head: string[]; rows: string[][] };
}

/** A dosage or rate calculation, recomputed by the tests from stem values. */
export interface Calc {
  /** Arithmetic on numbers that appear in the stem or exhibit. + - * / ( ) only. */
  expr: string;
  /** The result, before rounding. */
  answer: number;
  unit: string;
  /** Decimal places the keyed option shows. */
  round: number;
  /** Working shown in the rationale, one step each, written "18 * 80 = 1440". The tests recompute every step. */
  steps: string[];
}

export type Scoring = "zero-one" | "dyad" | "triad";

export type ItemBody =
  /** Multiple choice. 4 options, one key. Scored 0/1. */
  | { kind: "mc"; options: Choice[]; correct: number }
  /** Multiple response select N. Scored 0/1 per option, up to N. */
  | { kind: "msn"; options: Choice[]; select: number; correct: number[] }
  /** Select all that apply. Scored plus/minus, floored at 0. */
  | { kind: "sata"; options: Choice[]; correct: number[] }
  /**
   * Drag and drop. Each target takes one token. With a template the targets
   * are blanks in a sentence, written {0}, {1}. Zero-one scores 1 per target.
   * Dyad and triad use rationale scoring.
   */
  | { kind: "dnd"; targets: string[]; tokens: Choice[]; correct: number[]; scoring: Scoring; template?: string }
  /** Cloze drop-down. One drop-down per blank {0}, {1} in the template. */
  | { kind: "cloze"; template: string; blanks: { options: Choice[]; correct: number }[]; scoring: Scoring }
  /**
   * Enhanced hot spot. The passage marks each selectable phrase as [[phrase]].
   * spans[i].text equals the i-th marked phrase. Scored plus/minus.
   */
  | { kind: "highlight"; passage: string; spans: Choice[]; correct: number[] }
  /**
   * Matrix. single: one column per row, 0/1 per row. multi: any columns per
   * row, plus/minus per column, each column floored at 0.
   */
  | { kind: "matrix"; mode: "single" | "multi"; columns: string[]; rows: { text: string; correct: number[]; why: string }[] }
  /** Bow-tie. 1 condition of 4, 2 actions of 5, 2 parameters of 5. 0/1 per slot. */
  | {
      kind: "bowtie";
      conditions: Choice[];
      actions: Choice[];
      parameters: Choice[];
      correct: { condition: number; actions: [number, number]; parameters: [number, number] };
    };

export type ItemKind = ItemBody["kind"];

export interface ItemMeta {
  id: string;
  need: ClientNeed;
  /** Our own short topic label. */
  topic: string;
  cjmm: CjmmStep;
  process: IntegratedProcess;
  /** Writer-rated, 1 easiest to 5 hardest. Not calibrated on candidates. */
  difficulty: 1 | 2 | 3 | 4 | 5;
  /** The scenario and the question. */
  stem: string;
  /** Chart exhibit. In a case study these tabs add to or replace the case tabs of the same title. */
  tabs?: Tab[];
  /** A stand-alone trend item: the exhibit shows one table with 3 or more time points. */
  trend?: boolean;
  /** Why the key is right, tied to facts in the stem. Each option carries its own why. */
  rationale: string;
  calc?: Calc;
  /** Reference values the rationale relies on, such as a normal range. Each must be supported by a source. */
  refs?: string[];
  sources: Source[];
  /** Where Canadian practice or the NCLEX RN in Canada differs. Empty string when there is no material difference. */
  canada: string;
  reviewed: boolean;
  version: number;
}

export type Item = ItemMeta & ItemBody;

/** A case study: six items walking the CJMM steps in order. */
export interface CaseStudy {
  id: string;
  /** Neutral title that never names the diagnosis. */
  title: string;
  /** Opening scenario. */
  intro: string;
  tabs: Tab[];
  items: Item[];
  reviewed: boolean;
  version: number;
}

export type Response =
  | { kind: "mc"; choice: number | null }
  | { kind: "msn"; choices: number[] }
  | { kind: "sata"; choices: number[] }
  | { kind: "dnd"; placed: (number | null)[] }
  | { kind: "cloze"; picks: (number | null)[] }
  | { kind: "highlight"; spans: number[] }
  | { kind: "matrix"; rows: number[][] }
  | { kind: "bowtie"; condition: number | null; actions: number[]; parameters: number[] };

export interface Score {
  earned: number;
  max: number;
}
