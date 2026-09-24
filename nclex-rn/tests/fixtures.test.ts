import { describe, expect, it } from "vitest";
import { batchCueingProblems, caseContext, caseProblems, itemProblems } from "@/engine/quality";
import { ALL_FIXTURES, fixtureCase } from "./fixture";

/** The worked examples must pass every gate. A gate that rejects good items is broken too. */
describe("fixtures pass every gate", () => {
  for (const f of ALL_FIXTURES) it(f.id, () => expect(itemProblems(f)).toEqual([]));
  it("fixture case", () => {
    const c = fixtureCase();
    expect(caseProblems(c)).toEqual([]);
    c.items.forEach((it, k) => expect(itemProblems(it, caseContext(c, k))).toEqual([]));
  });
  it("fixture set passes batch cueing", () => expect(batchCueingProblems(ALL_FIXTURES)).toEqual([]));
});
