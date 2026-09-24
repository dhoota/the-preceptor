import { describe, expect, it } from "vitest";
import { CASES, ITEMS } from "@/bank";
import { EXAM, NEED_IDS } from "@/engine/blueprint";
import { answer, createMock, nextItem } from "@/engine/mock";
import { hash, logitOf, mulberry32, prob } from "@/engine/rasch";
import { emptyResponse, keyResponse, score } from "@/engine/score";
import { FREE_ITEMS, freeCaseIds, freeItemIds } from "@/lib/access";

/** End to end on the shipped bank, not a synthetic one. Skipped while the bank is small. */
const full = ITEMS.length >= 1000 && CASES.length >= 20;

describe.runIf(full)("the real bank", () => {
  it("every item scores full marks on its key and 0 when empty", () => {
    for (const it_ of [...ITEMS, ...CASES.flatMap((c) => c.items)]) {
      const k = score(it_, keyResponse(it_));
      expect(k.earned, it_.id).toBe(k.max);
      expect(score(it_, emptyResponse(it_)).earned, it_.id).toBe(0);
    }
  });
  it("the free tier opens 50 items across all eight areas and one case", () => {
    const free = freeItemIds(ITEMS);
    expect(free.size).toBe(FREE_ITEMS);
    for (const n of NEED_IDS) expect(ITEMS.filter((i) => free.has(i.id) && i.need === n).length, n).toBeGreaterThanOrEqual(6);
    expect(freeCaseIds(CASES).size).toBe(1);
  });
  for (const [theta, seed] of [[2, 1], [0, 2], [-2, 3]] as const)
    it(`a full adaptive mock completes for a candidate at ${theta} logits`, () => {
      const bank = { items: ITEMS, cases: CASES };
      let m = createMock(bank, seed, 0);
      const rand = mulberry32(hash("real", seed));
      while (!m.result) {
        const ref = nextItem(m, bank)!;
        expect(ref, `no item at position ${m.log.length}`).toBeTruthy();
        const right = rand() < prob(theta, logitOf(ref.item.difficulty));
        m = answer(m, bank, ref, right ? keyResponse(ref.item) : emptyResponse(ref.item), 60_000);
      }
      expect(m.log.length).toBeGreaterThanOrEqual(EXAM.minItems);
      expect(m.log.length).toBeLessThanOrEqual(EXAM.maxItems);
      expect(m.log.filter((e) => e.role === "case")).toHaveLength(18);
      expect(m.log.filter((e) => e.role === "pretest")).toHaveLength(15);
      expect(["ci", "max"]).toContain(m.result.rule);
      if (theta === 2) expect(m.result.decision).toBe("above");
      if (theta === -2) expect(m.result.decision).toBe("below");
    });
});
