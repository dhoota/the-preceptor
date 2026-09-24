import { describe, expect, it } from "vitest";
import { EXAM, NEED_IDS, midpoint } from "@/engine/blueprint";
import { answer, checkTime, createMock, nextItem, type Mock, type MockBank } from "@/engine/mock";
import { band, estimate, hash, logitOf, mulberry32, prob } from "@/engine/rasch";
import { emptyResponse, keyResponse } from "@/engine/score";
import type { CaseStudy, Item } from "@/engine/types";
import { MC_CALC, fixtureCase } from "./fixture";

/** A synthetic bank: 400 mc items spread over the eight areas and five difficulties, and 5 cases. */
function bank(): MockBank {
  const items: Item[] = [];
  for (let i = 0; i < 400; i++)
    items.push({ ...MC_CALC, id: `b${i}`, need: NEED_IDS[i % 8], difficulty: ((Math.floor(i / 8) % 5) + 1) as Item["difficulty"] });
  const cases: CaseStudy[] = [1, 2, 3, 4, 5].map((k) => fixtureCase(`case${k}`));
  return { items, cases };
}

/** Every item exactly at the standard, no cases. Alternating right and wrong keeps the estimate at 0. */
function flatBank(): MockBank {
  return { items: Array.from({ length: 300 }, (_, i) => ({ ...MC_CALC, id: `f${i}`, need: NEED_IDS[i % 8], difficulty: 3 as const })), cases: [] };
}

/** A simulated candidate of true ability theta answers by the Rasch probability, seeded. */
function run(theta: number, seed: number, msPerItem = 60_000) {
  const b = bank();
  let m = createMock(b, seed, 0);
  const rand = mulberry32(hash("candidate", seed));
  for (let guard = 0; guard < 200 && !m.result; guard++) {
    const ref = nextItem(m, b)!;
    const right = rand() < prob(theta, logitOf(ref.item.difficulty));
    m = answer(m, b, ref, right ? keyResponse(ref.item) : emptyResponse(ref.item), msPerItem);
  }
  return m;
}

describe("Rasch estimate", () => {
  it("is 0 with no data and moves toward the responses", () => {
    expect(estimate([]).theta).toBe(0);
    const up = estimate([{ b: 0, x: 1 }, { b: 0.8, x: 1 }, { b: 1.6, x: 1 }]);
    expect(up.theta).toBeGreaterThan(0);
    const mixed = estimate(Array.from({ length: 40 }, (_, i) => ({ b: 0, x: i % 2 })));
    expect(Math.abs(mixed.theta)).toBeLessThan(1e-6);
    expect(mixed.se).toBeCloseTo(1 / Math.sqrt(40 * 0.25 + 1 / 9), 6);
  });
  it("stays finite on all right or all wrong", () => {
    expect(estimate(Array(30).fill({ b: 0, x: 1 })).theta).toBeLessThanOrEqual(6);
    expect(estimate(Array(30).fill({ b: 0, x: 0 })).theta).toBeGreaterThanOrEqual(-6);
  });
  it("treats partial credit as a fraction", () => {
    const half = estimate(Array(50).fill({ b: 0.8, x: 0.5 }));
    expect(half.theta).toBeCloseTo(0.8, 1);
  });
  it("bands the 95% interval against the standard", () => {
    expect(band({ theta: 0.5, se: 0.2 })).toBe("above");
    expect(band({ theta: -0.5, se: 0.2 })).toBe("below");
    expect(band({ theta: 0.3, se: 0.2 })).toBe("near");
  });
  it("maps writer ratings to logits", () => {
    expect([1, 2, 3, 4, 5].map(logitOf)).toEqual([-1.6, -0.8, 0, 0.8, 1.6].map((x) => expect.closeTo(x, 9)));
  });
});

describe("mock structure", () => {
  it("places 3 cases and 15 pretest slots inside the first 85 items without overlap", () => {
    for (const seed of [1, 2, 3, 99, 12345]) {
      const m = createMock(bank(), seed, 0);
      expect(m.caseIds).toHaveLength(3);
      expect(new Set(m.caseIds).size).toBe(3);
      expect(m.pretestSlots).toHaveLength(15);
      const caseSlots = m.caseStarts.flatMap((s) => [0, 1, 2, 3, 4, 5].map((k) => s + k));
      expect(Math.max(...caseSlots, ...m.pretestSlots)).toBeLessThan(EXAM.minItems);
      expect(caseSlots.some((s) => m.pretestSlots.includes(s))).toBe(false);
      // 85 - 18 - 15 = 52 scored stand-alone items in the minimum length.
      expect(EXAM.minItems - caseSlots.length - m.pretestSlots.length).toBe(EXAM.minScoredStandalone);
    }
  });
  it("delivers case items in CJMM order and never repeats an item", () => {
    const m = run(0, 7);
    const ids = m.log.map((e) => e.itemId);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of m.caseStarts) expect(m.log.slice(s, s + 6).map((e) => e.role)).toEqual(Array(6).fill("case"));
    expect(m.log.filter((e) => e.role === "pretest")).toHaveLength(15);
  });
  it("is deterministic for a seed", () => {
    const a = run(0.4, 42);
    const b = run(0.4, 42);
    expect(a.log.map((e) => e.itemId)).toEqual(b.log.map((e) => e.itemId));
    expect(a.result).toEqual(b.result);
  });
  it("balances scored items toward the test plan midpoints", () => {
    const m = run(0, 3);
    const scored = m.log.filter((e) => e.role === "scored");
    for (const n of NEED_IDS) expect(Math.abs(scored.filter((e) => e.need === n).length / scored.length - midpoint(n))).toBeLessThan(0.03);
  });
  it("pretest items do not move the estimate", () => {
    const b = bank();
    let m = createMock(b, 5, 0);
    while (!m.pretestSlots.includes(m.log.length)) m = answer(m, b, nextItem(m, b)!, emptyResponse(MC_CALC), 1000);
    const before = m.estimate;
    const ref = nextItem(m, b)!;
    expect(ref.role).toBe("pretest");
    m = answer(m, b, ref, keyResponse(ref.item), 1000);
    expect(m.estimate).toEqual(before);
  });
});

describe("stopping rules", () => {
  it("a strong candidate stops early by the 95% rule, above the standard", () => {
    const m = run(2.5, 11);
    expect(m.result?.rule).toBe("ci");
    expect(m.result?.decision).toBe("above");
    expect(m.result?.band).toBe("above");
    expect(m.log.length).toBeGreaterThanOrEqual(EXAM.minItems);
    expect(m.log.length).toBeLessThan(EXAM.maxItems);
  });
  it("a weak candidate stops early by the 95% rule, below the standard", () => {
    const m = run(-2.5, 12);
    expect(m.result?.rule).toBe("ci");
    expect(m.result?.decision).toBe("below");
  });
  it("never stops before the minimum", () => {
    const m = run(4, 13);
    expect(m.log.length).toBe(EXAM.minItems);
  });
  it("a candidate at the standard runs to 150 and the final estimate decides", () => {
    const b = flatBank();
    let m = createMock(b, 21, 0);
    // Alternate right and wrong on items at the standard: the estimate stays at 0.
    while (!m.result) {
      const ref = nextItem(m, b)!;
      m = answer(m, b, ref, m.log.length % 2 ? keyResponse(ref.item) : emptyResponse(ref.item), 1000);
    }
    expect(m.result.rule).toBe("max");
    expect(m.log.length).toBe(EXAM.maxItems);
    expect(m.result.band).toBe("near");
    expect(m.result.decision).toBe(m.estimate.theta >= 0 ? "above" : "below");
  });
  it("running out of time before the minimum is below the standard", () => {
    const m = run(3, 14, 4 * 60_000);
    expect(m.result?.rule).toBe("time");
    expect(m.log.length).toBeLessThan(EXAM.minItems);
    expect(m.result?.decision).toBe("below");
  });
  it("running out of time after the minimum uses the final estimate", () => {
    const b = flatBank();
    let m: Mock = createMock(b, 31, 0);
    while (m.log.length < 100 && !m.result) {
      const ref = nextItem(m, b)!;
      m = answer(m, b, ref, m.log.length % 2 ? keyResponse(ref.item) : emptyResponse(ref.item), 1000);
    }
    expect(m.result).toBeNull();
    m = checkTime(m, EXAM.durationMs);
    expect(m.result?.rule).toBe("time");
    expect(m.result?.decision).toBe(m.estimate.theta >= 0 ? "above" : "below");
  });
  it("answers after the end change nothing", () => {
    const m = run(2.5, 11);
    expect(answer(m, bank(), { item: MC_CALC, role: "scored" }, keyResponse(MC_CALC), 1)).toBe(m);
    expect(nextItem(m, bank())).toBeNull();
  });
});
