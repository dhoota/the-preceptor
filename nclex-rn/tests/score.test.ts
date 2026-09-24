import { describe, expect, it } from "vitest";
import { emptyResponse, isComplete, keyResponse, maxScore, plusMinus, score, slotScore } from "@/engine/score";
import type { Item, Response } from "@/engine/types";
import { ALL_FIXTURES, BOWTIE, CLOZE_TRIAD, DND_ORDER, HIGHLIGHT, MATRIX_MULTI, MATRIX_SINGLE, MC_CALC, MSN, SATA, TREND } from "./fixture";

/** Golden scores. Each expectation was worked out by hand from the NCSBN rule for the item type. */

const s = (item: Item, r: Response) => score(item, r);

describe("every item type", () => {
  for (const f of ALL_FIXTURES) {
    it(`${f.id}: the key earns full marks and an empty response earns 0`, () => {
      expect(s(f, keyResponse(f))).toEqual({ earned: maxScore(f), max: maxScore(f) });
      expect(s(f, emptyResponse(f)).earned).toBe(0);
      expect(isComplete(f, keyResponse(f))).toBe(true);
    });
  }
  it("a response of the wrong kind scores 0", () => {
    expect(score(MC_CALC, { kind: "sata", choices: [1] })).toEqual({ earned: 0, max: 1 });
    expect(score(MC_CALC, null)).toEqual({ earned: 0, max: 1 });
  });
});

describe("multiple choice: 0/1", () => {
  it("scores the key 1 and anything else 0", () => {
    expect(s(MC_CALC, { kind: "mc", choice: 1 })).toEqual({ earned: 1, max: 1 });
    expect(s(MC_CALC, { kind: "mc", choice: 0 })).toEqual({ earned: 0, max: 1 });
    expect(s(TREND, { kind: "mc", choice: 3 })).toEqual({ earned: 1, max: 1 });
  });
});

describe("multiple response select N: 0/1 per option", () => {
  it("gives 1 point per correct selection, max N", () => {
    expect(s(MSN, { kind: "msn", choices: [0, 3] })).toEqual({ earned: 2, max: 2 });
    expect(s(MSN, { kind: "msn", choices: [0, 1] })).toEqual({ earned: 1, max: 2 });
    expect(s(MSN, { kind: "msn", choices: [1, 2] })).toEqual({ earned: 0, max: 2 });
  });
  it("counts only the first N selections and ignores repeats", () => {
    expect(s(MSN, { kind: "msn", choices: [1, 0, 3] })).toEqual({ earned: 1, max: 2 });
    expect(s(MSN, { kind: "msn", choices: [0, 0, 3] })).toEqual({ earned: 2, max: 2 });
  });
});

describe("select all that apply: plus/minus, floored at 0", () => {
  // Keys 0, 2, 3, 5. Distractors 1, 4.
  it("adds 1 per key and subtracts 1 per distractor", () => {
    expect(s(SATA, { kind: "sata", choices: [0, 2, 3, 5] })).toEqual({ earned: 4, max: 4 });
    expect(s(SATA, { kind: "sata", choices: [0, 2, 3, 5, 1] })).toEqual({ earned: 3, max: 4 });
    expect(s(SATA, { kind: "sata", choices: [0, 1] })).toEqual({ earned: 0, max: 4 });
    expect(s(SATA, { kind: "sata", choices: [0, 2, 1] })).toEqual({ earned: 1, max: 4 });
  });
  it("never goes below 0", () => {
    expect(s(SATA, { kind: "sata", choices: [1, 4] })).toEqual({ earned: 0, max: 4 });
    expect(s(SATA, { kind: "sata", choices: [1, 4, 0] })).toEqual({ earned: 0, max: 4 });
  });
  it("selecting everything scores keys minus distractors", () => {
    expect(s(SATA, { kind: "sata", choices: [0, 1, 2, 3, 4, 5] })).toEqual({ earned: 2, max: 4 });
  });
});

describe("drag and drop", () => {
  it("zero-one gives 1 per correctly placed target", () => {
    expect(s(DND_ORDER, { kind: "dnd", placed: [1, 0, 3, 5, 2] })).toEqual({ earned: 5, max: 5 });
    expect(s(DND_ORDER, { kind: "dnd", placed: [0, 1, 3, 5, 2] })).toEqual({ earned: 3, max: 5 });
    expect(s(DND_ORDER, { kind: "dnd", placed: [1, 0, null, null, 4] })).toEqual({ earned: 2, max: 5 });
  });
  it("dyad gives 1 point only when both targets are right", () => {
    expect(slotScore([2, 5], [2, 5], "dyad")).toEqual({ earned: 1, max: 1 });
    expect(slotScore([2, 4], [2, 5], "dyad")).toEqual({ earned: 0, max: 1 });
    expect(slotScore([1, 5], [2, 5], "dyad")).toEqual({ earned: 0, max: 1 });
  });
});

describe("drop-down cloze", () => {
  // Triad keys 0, 0, 0. One point for blanks 1 and 2 together, one for 1 and 3 together.
  it("triad gives 1 point per correct pair with the first blank", () => {
    expect(s(CLOZE_TRIAD, { kind: "cloze", picks: [0, 0, 0] })).toEqual({ earned: 2, max: 2 });
    expect(s(CLOZE_TRIAD, { kind: "cloze", picks: [0, 0, 1] })).toEqual({ earned: 1, max: 2 });
    expect(s(CLOZE_TRIAD, { kind: "cloze", picks: [0, 1, 0] })).toEqual({ earned: 1, max: 2 });
    expect(s(CLOZE_TRIAD, { kind: "cloze", picks: [1, 0, 0] })).toEqual({ earned: 0, max: 2 });
  });
  it("zero-one gives 1 per blank", () => {
    const zo = { ...CLOZE_TRIAD, scoring: "zero-one" } as Item;
    expect(s(zo, { kind: "cloze", picks: [1, 0, 0] })).toEqual({ earned: 2, max: 3 });
  });
  it("dyad needs both blanks", () => {
    expect(slotScore([0, 3], [0, 3], "dyad").earned).toBe(1);
    expect(slotScore([0, null], [0, 3], "dyad").earned).toBe(0);
  });
});

describe("enhanced hot spot: plus/minus", () => {
  // Keys 2, 3, 4, 5 of 7 spans.
  it("scores like select all that apply", () => {
    expect(s(HIGHLIGHT, { kind: "highlight", spans: [2, 3, 4, 5] })).toEqual({ earned: 4, max: 4 });
    expect(s(HIGHLIGHT, { kind: "highlight", spans: [2, 3, 1] })).toEqual({ earned: 1, max: 4 });
    expect(s(HIGHLIGHT, { kind: "highlight", spans: [0, 1, 6] })).toEqual({ earned: 0, max: 4 });
  });
});

describe("matrix", () => {
  it("multiple choice gives 1 per correct row", () => {
    // Keys by row: 1, 0, 1, 0, 1, 1.
    expect(s(MATRIX_SINGLE, { kind: "matrix", rows: [[1], [0], [1], [0], [1], [1]] })).toEqual({ earned: 6, max: 6 });
    expect(s(MATRIX_SINGLE, { kind: "matrix", rows: [[0], [0], [1], [1], [1], []] })).toEqual({ earned: 3, max: 6 });
    // Two picks in one row never earn that row.
    expect(s(MATRIX_SINGLE, { kind: "matrix", rows: [[0, 1], [0], [1], [0], [1], [1]] })).toEqual({ earned: 5, max: 6 });
  });
  it("multiple response is plus/minus per column, each column floored at 0", () => {
    // Keys: airborne rows 0, 2, 4. Droplet rows 2, 5. Contact rows 1, 2, 3. Max 8.
    expect(s(MATRIX_MULTI, keyResponse(MATRIX_MULTI))).toEqual({ earned: 8, max: 8 });
    // Airborne: rows 0, 2 right, row 1 wrong = 1. Droplet: rows 0, 1 wrong = -2, floored 0. Contact: row 1 right = 1.
    expect(s(MATRIX_MULTI, { kind: "matrix", rows: [[0, 1], [0, 1, 2], [0], [], [], []] })).toEqual({ earned: 2, max: 8 });
    // Everything checked. Airborne 3 - 3 = 0. Droplet 2 - 4 = 0. Contact 3 - 3 = 0.
    expect(s(MATRIX_MULTI, { kind: "matrix", rows: Array(6).fill([0, 1, 2]) })).toEqual({ earned: 0, max: 8 });
  });
});

describe("bow-tie: 0/1 per slot, 5 points", () => {
  it("scores the condition, 2 actions and 2 parameters", () => {
    expect(s(BOWTIE, { kind: "bowtie", condition: 0, actions: [0, 2], parameters: [1, 3] })).toEqual({ earned: 5, max: 5 });
    expect(s(BOWTIE, { kind: "bowtie", condition: 1, actions: [2, 0], parameters: [3, 1] })).toEqual({ earned: 4, max: 5 });
    expect(s(BOWTIE, { kind: "bowtie", condition: 0, actions: [0, 1], parameters: [0, 4] })).toEqual({ earned: 2, max: 5 });
    expect(s(BOWTIE, { kind: "bowtie", condition: null, actions: [], parameters: [] })).toEqual({ earned: 0, max: 5 });
  });
  it("counts only 2 actions and 2 parameters", () => {
    expect(s(BOWTIE, { kind: "bowtie", condition: 0, actions: [1, 0, 2], parameters: [1, 3] }).earned).toBe(4);
  });
});

describe("plusMinus", () => {
  it("ignores duplicate selections", () => {
    expect(plusMinus([1, 1, 2], [1, 2])).toEqual({ earned: 2, max: 2 });
  });
});
