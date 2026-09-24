import { describe, expect, it } from "vitest";
import {
  batchCueingProblems,
  calcProblems,
  caseProblems,
  citationProblems,
  contradictionProblems,
  cueingProblems,
  houseStyleProblems,
  itemProblems,
  nearDuplicates,
  structureProblems,
  termProblems,
  traceProblems,
  unitProblems,
} from "@/engine/quality";
import type { Item } from "@/engine/types";
import { BOWTIE, CLOZE_TRIAD, HIGHLIGHT, MC_CALC, MSN, SATA, TREND, fixtureCase } from "./fixture";

/**
 * Every gate is run once against known-bad input to prove it fails. A gate
 * that never fails proves nothing. Each planted defect below is one that
 * shipped, or nearly shipped, in another Preceptor bank.
 */

const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x));
const hit = (problems: string[], re: RegExp) => expect(problems.some((p) => re.test(p)), problems.join("\n") || "no problems found").toBe(true);

describe("tripwires: each gate catches its planted defect", () => {
  it("rationale asserts a value the stem never gave (most common defect in MCCQE and CCFP)", () => {
    const it = clone(MC_CALC);
    it.rationale += " The aPTT of 94 seconds confirms the dose.";
    hit(traceProblems(it), /states 94/);
  });
  it("a distractor's why asserts an invented number", () => {
    const it = clone(SATA) as Extract<Item, { kind: "sata" }>;
    it.options[1].why = "A surgical mask filters only 60% of particles.";
    hit(traceProblems(it), /options\[1\]\.why states 60/);
  });
  it("wrong arithmetic in the calc block", () => {
    const it = clone(MC_CALC);
    it.calc!.answer = 14;
    hit(calcProblems(it), /not 14/);
  });
  it("a wrong working step (the 62% called roughly 50% class)", () => {
    const it = clone(MC_CALC);
    it.calc!.steps[0] = "18 * 80 = 1400";
    hit(calcProblems(it), /is wrong/);
  });
  it("calc uses a number that is not in the stem", () => {
    const it = clone(MC_CALC);
    it.calc!.expr = "18 * 75 / (25000 / 250)";
    hit(calcProblems(it), /uses 75/);
  });
  it("keyed option disagrees with the calculation", () => {
    const it = clone(MC_CALC) as Extract<Item, { kind: "mc" }>;
    it.options[1].text = "15 mL/hour";
    hit(calcProblems(it), /keyed option/);
  });
  it("a dose question with no calc block", () => {
    const it = clone(MC_CALC);
    delete it.calc;
    hit(calcProblems(it), /no calc block/);
  });
  it("length cueing: the key carries its own justification", () => {
    const it = clone(TREND) as Extract<Item, { kind: "mc" }>;
    it.options[3].text = "Hypovolemia from bleeding, shown by the rising pulse and falling urine output";
    hit(cueingProblems(it), /times the mean distractor length/);
  });
  it("length cueing in a multi-key pool", () => {
    const it = clone(SATA) as Extract<Item, { kind: "sata" }>;
    for (const k of it.correct) it.options[k].text += " to protect staff and other clients on the unit";
    hit(cueingProblems(it), /keyed choices are/);
  });
  it("batch length bias: the key is the longest option too often", () => {
    const batch = Array.from({ length: 10 }, (_, i) => {
      const it = clone(TREND) as Extract<Item, { kind: "mc" }>;
      it.id = `b${i}`;
      it.correct = i % 4;
      it.options[i % 4].text = "A somewhat longer keyed option";
      return it;
    });
    hit(batchCueingProblems(batch), /length bias: the key is the longest/);
  });
  it("batch key position skew (85% A in one AI batch)", () => {
    const batch = Array.from({ length: 10 }, (_, i) => ({ ...clone(TREND), id: `p${i}`, correct: 0 }) as Item);
    hit(batchCueingProblems(batch), /key position skew/);
  });
  it("batch multi-key length bias", () => {
    const batch = Array.from({ length: 8 }, (_, i) => {
      const it = clone(SATA) as Extract<Item, { kind: "sata" }>;
      it.id = `m${i}`;
      for (const k of it.correct) it.options[k].text += " now";
      return it;
    });
    hit(batchCueingProblems(batch), /keyed choices run longer/);
  });
  it("absolute language in an option", () => {
    const it = clone(MSN) as Extract<Item, { kind: "msn" }>;
    it.options[1].text = "\"I will never take aspirin.\"";
    hit(cueingProblems(it), /absolute word/);
  });
  it("an option that points at other options", () => {
    const it = clone(TREND) as Extract<Item, { kind: "mc" }>;
    it.options[2].text = "All of the above";
    hit(cueingProblems(it), /refers to other options/);
  });
  it("the keyed option's why calls it wrong (NCA validator)", () => {
    const it = clone(TREND) as Extract<Item, { kind: "mc" }>;
    it.options[3].why = "Incorrect. Bleeding would not change the pulse.";
    hit(contradictionProblems(it), /keyed but its why calls it wrong/);
  });
  it("a distractor's why calls it correct", () => {
    const it = clone(TREND) as Extract<Item, { kind: "mc" }>;
    it.options[0].why = "This is the correct answer because the BP falls.";
    hit(contradictionProblems(it), /distractor but its why calls it correct/);
  });
  it("the rationale calls the keyed option wrong", () => {
    const it = clone(TREND);
    it.rationale += " Hypovolemia from bleeding is incorrect here.";
    hit(contradictionProblems(it), /rationale calls the keyed/);
  });
  it("a category citation (the NDEB 1.4.1 rejection)", () => {
    const it = clone(SATA);
    it.sources = [{ body: "Standard nursing references", work: "Nursing references", year: 2024 }];
    hit(citationProblems(it), /not a named/);
  });
  it("a placeholder hidden in the second source slot", () => {
    const it = clone(SATA);
    it.sources[1] = { body: "Various", work: "Guidelines", year: 0 };
    hit(citationProblems(it), /sources\[1\]/);
  });
  it("a unit conversion that does not match", () => {
    const it = clone(BOWTIE);
    it.stem = it.stem.replace("28.9 mmol/L", "32.1 mmol/L");
    hit(unitProblems(it), /does not convert/);
  });
  it("a conventional lab value with no SI value", () => {
    const it = clone(BOWTIE);
    it.stem = it.stem.replace(" (28.9 mmol/L)", "");
    hit(unitProblems(it), /needs its SI value/);
  });
  it("a Fahrenheit conversion that does not match", () => {
    const it = clone(CLOZE_TRIAD);
    it.stem = it.stem.replace("(99.0°F)", "(100.4°F)");
    hit(unitProblems(it), /not 100.4/);
  });
  it("patient and doctor instead of client and primary health care provider", () => {
    const it = clone(TREND);
    it.stem = "The doctor asks the nurse to review the patient flow sheet. " + it.stem;
    hit(termProblems(it), /client, not patient/);
    hit(termProblems(it), /primary health care provider/);
  });
  it("house style: dash, semicolon, filler and long sentences", () => {
    const it = clone(TREND);
    it.rationale = "The pulse rises — the BP falls; it is important to note this. " + "word ".repeat(40) + ".";
    const p = houseStyleProblems(it);
    hit(p, /dash/);
    hit(p, /semicolon/);
    hit(p, /filler/);
    hit(p, /sentence of/);
  });
  it("highlight spans that do not match the passage", () => {
    const it = clone(HIGHLIGHT) as Extract<Item, { kind: "highlight" }>;
    it.spans[0].text = "Awake and oriented.";
    hit(structureProblems(it), /span text matches/);
  });
  it("select N with the wrong key count", () => {
    const it = clone(MSN) as Extract<Item, { kind: "msn" }>;
    it.correct = [0];
    hit(structureProblems(it), /key count equals N/);
  });
  it("a trend item with no time series", () => {
    const it = clone(TREND);
    it.tabs = [];
    hit(structureProblems(it), /time points/);
  });
  it("a missing why on a distractor", () => {
    const it = clone(SATA) as Extract<Item, { kind: "sata" }>;
    it.options[4].why = "";
    hit(structureProblems(it), /needs a why/);
  });
  it("a tripwire id can never enter the bank", () => {
    hit(structureProblems({ ...clone(TREND), id: "tripwire-001" }), /tripwire/);
  });
  it("near duplicate stems", () => {
    const d = nearDuplicates([
      { id: "a", text: TREND.stem },
      { id: "b", text: TREND.stem.replace("this morning", "yesterday") },
      { id: "c", text: SATA.stem },
    ]);
    expect(d.map((x) => [x.a, x.b])).toEqual([["a", "b"]]);
  });
  it("a case that skips a CJMM step", () => {
    const c = fixtureCase();
    c.items[2] = { ...c.items[2], cjmm: "action" };
    hit(caseProblems(c), /do not walk the CJMM/);
  });
  it("a bow-tie inside a case", () => {
    const c = fixtureCase();
    c.items[3] = { ...clone(BOWTIE), id: c.items[3].id, cjmm: "generate" };
    hit(caseProblems(c), /stand-alone only/);
  });
  it("itemProblems runs every gate", () => {
    const it = clone(TREND);
    it.stem += " The patient is 62 years old; stable.";
    const p = itemProblems(it);
    hit(p, /patient/);
    hit(p, /semicolon/);
  });
});

import planted from "../docs/tripwires.json";

describe("review calibration items", () => {
  // These carry defects no automated gate can see. If a gate ever catches one,
  // the item no longer calibrates the review and must be replaced.
  for (const t of planted.tripwires)
    it(`${t.item.id} (${t.defect}) passes the automated gates, so only review can catch it`, () => {
      expect(itemProblems(t.item as unknown as Item)).toEqual([]);
    });
});
