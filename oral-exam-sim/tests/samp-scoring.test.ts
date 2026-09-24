import { describe, expect, it } from "vitest";
import { lineMatches, markMenu, markSamp, markShort, markSingle, tokens, type Samp, type ShortQuestion } from "@/engine/samp";

const short: ShortQuestion = {
  kind: "short",
  id: "q1",
  prompt: "List THREE initial medications.",
  required: 3,
  explanation: "x",
  keyFeature: { topic: "anaphylaxis", n: 1 },
  source: "s1",
  accept: [
    { id: "epi", text: "Epinephrine 0.5 mg IM", match: ["epinephrine im", "epinephrine intramuscular", "epi im", "adrenaline im"] },
    { id: "fluid", text: "IV crystalloid bolus", match: ["crystalloid", "normal saline", "ringer", "fluid bolus"] },
    { id: "salb", text: "Salbutamol", match: ["salbutamol", "ventolin"] },
    { id: "o2", text: "Oxygen", match: ["oxygen", "o2"] },
  ],
  unacceptable: [
    { text: "Epinephrine IV push", match: ["epinephrine iv push", "epi iv push"], dangerous: true },
    { text: "Diphenhydramine alone", match: ["diphenhydramine alone"] },
  ],
};

describe("matching", () => {
  it("normalises case, punctuation, accents and plurals", () => {
    expect(tokens("Épinéphrine, 0.5 mg I.M.!")).toEqual(["epinephrine", "0.5", "mg", "i", "m"]);
    expect(lineMatches("give IV fluids bolus", ["fluid bolus"])).toBe(true);
    expect(lineMatches("ketorolac 15mg IV", ["ketorolac 15 mg"])).toBe(true);
    expect(lineMatches("epi 0.5mg/kg", ["0.5 mg/kg"])).toBe(true);
  });
  it("ignores a negated phrase", () => {
    expect(lineMatches("no nitrates", ["nitrate"])).toBe(false);
    expect(lineMatches("avoid giving heparin", ["heparin"])).toBe(false);
    expect(lineMatches("don't intubate yet", ["intubate"])).toBe(false);
    expect(lineMatches("stop the infusion and give calcium chloride", ["calcium"])).toBe(true);
    expect(lineMatches("avoid all nitrates", ["avoid nitrate"])).toBe(true);
    expect(lineMatches("ct head", ["ct head"])).toBe(true);
  });
  it("ignores a phrase negated after it", () => {
    expect(lineMatches("enoxaparin, warfarin contraindicated", ["warfarin"])).toBe(false);
    expect(lineMatches("enoxaparin, warfarin contraindicated", ["enoxaparin"])).toBe(true);
    expect(lineMatches("nitrates are contraindicated", ["nitrate"])).toBe(false);
    expect(lineMatches("nitrates are contraindicated", ["nitrate contraindicated"])).toBe(true);
    expect(lineMatches("heparin withheld until CT", ["heparin"])).toBe(false);
    expect(lineMatches("epinephrine 0.5 mg IM, not IV push", ["epinephrine iv push"])).toBe(false);
    expect(lineMatches("Don't attempt to remove the foreign body", ["remove foreign body"])).toBe(false);
    expect(lineMatches("epinephrine 0.5 mg IM, then IV push if refractory", ["epinephrine iv push"])).toBe(true);
  });
  it("does not zero a question for a negated dangerous answer", () => {
    expect(markShort(short, ["no epinephrine IV push", "oxygen", "salbutamol"]).earned).toBe(2);
  });
  it("needs every word of a phrase, in any order", () => {
    expect(lineMatches("IM epinephrine 0.5 mg", ["epinephrine im"])).toBe(true);
    expect(lineMatches("epinephrine", ["epinephrine im"])).toBe(false);
  });
});

describe("short answer marking", () => {
  it("scores distinct key items among the first N lines only", () => {
    const m = markShort(short, ["IM epinephrine", "normal saline 1 L", "oxygen by mask", "salbutamol neb"]);
    expect(m.earned).toBe(3);
    expect(m.lines).toHaveLength(3);
    expect(m.lines!.map((l) => l.itemId)).toEqual(["epi", "fluid", "o2"]);
  });
  it("gives credit for an item once", () => {
    const m = markShort(short, ["epinephrine IM", "adrenaline IM thigh", "oxygen"]);
    expect(m.earned).toBe(2);
  });
  it("ignores blank lines", () => {
    expect(markShort(short, ["", "  ", "oxygen"]).earned).toBe(1);
  });
  it("zeroes the line for an unacceptable answer", () => {
    const m = markShort(short, ["diphenhydramine alone", "oxygen", "salbutamol"]);
    expect(m.earned).toBe(2);
    expect(m.lines![0].unacceptable).toBe("Diphenhydramine alone");
  });
  it("zeroes the question for a dangerous answer", () => {
    const m = markShort(short, ["epinephrine IV push", "oxygen", "salbutamol"]);
    expect(m.earned).toBe(0);
    expect(m.score).toBe(0);
  });
  it("lets the candidate override a missed match, but never a dangerous one", () => {
    const m = markShort(short, ["adrenaline autoinjector in thigh", "oxygen", "salbutamol"], { 0: true });
    expect(m.earned).toBe(3);
    expect(m.lines![0].overridden).toBe(true);
    const d = markShort(short, ["epinephrine IV push", "oxygen", "salbutamol"], { 0: true });
    expect(d.earned).toBe(0);
  });
  it("lets the candidate withdraw credit", () => {
    expect(markShort(short, ["oxygen", "salbutamol", "normal saline"], { 2: false }).earned).toBe(2);
  });
});

describe("choice marking", () => {
  const single = { kind: "single" as const, id: "q2", prompt: "p", options: ["a", "b", "c", "d"], correct: 2, explanation: "x", keyFeature: { topic: "anaphylaxis", n: 1 }, source: "s1" };
  const menu = { kind: "menu" as const, id: "q3", prompt: "p", options: ["a", "b", "c", "d", "e", "f", "None"], select: 2, correct: [1, 4], explanation: "x", keyFeature: { topic: "anaphylaxis", n: 1 }, source: "s1" };
  it("marks single best answer", () => {
    expect(markSingle(single, 2).earned).toBe(1);
    expect(markSingle(single, 1).earned).toBe(0);
    expect(markSingle(single, null).earned).toBe(0);
  });
  it("marks menu selections and ignores picks beyond the limit", () => {
    expect(markMenu(menu, [1, 4]).score).toBe(1);
    expect(markMenu(menu, [1, 0]).score).toBe(0.5);
    expect(markMenu(menu, [0, 2, 1, 4]).score).toBe(0);
  });
  it("marks None correctly", () => {
    const none = { ...menu, select: 1, correct: [6] };
    expect(markMenu(none, [6]).score).toBe(1);
    expect(markMenu(none, [1]).score).toBe(0);
  });
});

describe("SAMP marking", () => {
  it("averages question scores", () => {
    const s: Samp = {
      id: "x", topic: "anaphylaxis", title: "t", stem: "s", reviewed: false, author: "a", version: 1,
      sources: [{ id: "s1", citation: "c" }],
      questions: [short, { kind: "single", id: "q2", prompt: "p", options: ["a", "b", "c", "d"], correct: 0, explanation: "x", keyFeature: { topic: "anaphylaxis", n: 1 }, source: "s1" }],
    };
    const m = markSamp(s, { q1: { kind: "short", lines: ["oxygen", "salbutamol", "normal saline"] }, q2: { kind: "single", choice: 1 } });
    expect(m.score).toBe(0.5);
  });
});

describe("instruction display", () => {
  it("strips an instruction written into the prompt", async () => {
    const { stripInstruction } = await import("../src/screens/SampParts");
    expect(stripInstruction("What would you give? List THREE.")).toBe("What would you give?");
    expect(stripInstruction("Which of the following is best? Select one.")).toBe("Which of the following is best?");
    expect(stripInstruction("Which apply? Select one, or None if none are required.")).toBe("Which apply?");
    expect(stripInstruction("Give ONE answer.")).toBe("");
    expect(stripInstruction("List the causes of a raised anion gap.")).toBe("List the causes of a raised anion gap.");
  });
});
