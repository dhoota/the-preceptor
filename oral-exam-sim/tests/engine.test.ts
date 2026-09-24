import { describe, expect, it } from "vitest";
import {
  advance,
  askFinding,
  atEnd,
  currentNode,
  newAttempt,
  questionRange,
  questionsOnPath,
  rubricOrder,
  scoreMarks,
  unsafeChoices,
  validateCase,
  weakAreas,
  finishAttempt,
} from "@/engine";
import type { OralCase } from "@/engine";
import { FIXTURE } from "./fixture";

const clone = (): OralCase => JSON.parse(JSON.stringify(FIXTURE));

describe("validateCase", () => {
  it("accepts a well formed case", () => {
    expect(validateCase(FIXTURE)).toEqual([]);
  });
  it("reports a missing next node", () => {
    const c = clone();
    (c.nodes[0] as { next: string }).next = "nowhere";
    expect(validateCase(c).join()).toContain('missing node "nowhere"');
  });
  it("reports cycles", () => {
    const c = clone();
    (c.nodes[2] as { next: string }).next = "q1";
    expect(validateCase(c).join()).toContain("cycle");
  });
  it("reports unreachable nodes and untested rubric items", () => {
    const c = clone();
    c.nodes.push({ kind: "end", id: "orphan", text: "x" });
    c.rubric.push({ id: "x1", domain: "resus", text: "x", points: 1, teaching: "x" });
    const errs = validateCase(c).join();
    expect(errs).toContain('"orphan" is unreachable');
    expect(errs).toContain('rubric "x1" is never tested');
  });
  it("reports unknown rubric references and domains", () => {
    const c = clone();
    (c.nodes[1] as { rubric: string[] }).rubric.push("zz");
    c.rubric[0].domain = "nope";
    const errs = validateCase(c).join();
    expect(errs).toContain('unknown rubric "zz"');
    expect(errs).toContain('unknown domain "nope"');
  });
  it("requires at least one critical item", () => {
    const c = clone();
    c.rubric.forEach((r) => delete r.critical);
    expect(validateCase(c).join()).toContain("no critical");
  });
});

describe("runner", () => {
  it("walks the strong path", () => {
    let a = newAttempt(FIXTURE, "practice", 0, "a1");
    expect(currentNode(FIXTURE, a).id).toBe("open");
    a = advance(FIXTURE, a, 1);
    a = advance(FIXTURE, a, 2, { choiceId: "good", usedSeconds: 42.4 });
    expect(currentNode(FIXTURE, a).id).toBe("q2");
    expect(a.path[1]).toMatchObject({ nodeId: "q1", choiceId: "good", usedSeconds: 42 });
    a = advance(FIXTURE, a, 3);
    expect(atEnd(FIXTURE, a)).toBe(true);
    expect(a.finishedAt).toBe(3);
    expect(unsafeChoices(FIXTURE, a)).toEqual([]);
  });

  it("routes an unsafe choice through the consequence node", () => {
    let a = advance(FIXTURE, newAttempt(FIXTURE, "exam", 0, "a2"), 1);
    a = advance(FIXTURE, a, 2, { choiceId: "bad" });
    expect(currentNode(FIXTURE, a).id).toBe("crash");
    a = advance(FIXTURE, advance(FIXTURE, a, 3), 4);
    expect(atEnd(FIXTURE, a)).toBe(true);
    expect(unsafeChoices(FIXTURE, a)).toEqual(["I waited."]);
  });

  it("requires a choice when the question branches", () => {
    const a = advance(FIXTURE, newAttempt(FIXTURE, "practice", 0, "a3"), 1);
    expect(() => advance(FIXTURE, a, 2)).toThrow(/choose an option/);
    expect(() => advance(FIXTURE, a, 2, { choiceId: "zzz" })).toThrow();
  });

  it("does nothing past the end", () => {
    let a = newAttempt(FIXTURE, "practice", 0, "a4");
    a = advance(FIXTURE, advance(FIXTURE, advance(FIXTURE, a, 1), 2, { choiceId: "good" }), 3);
    expect(advance(FIXTURE, a, 9)).toBe(a);
  });

  it("records findings once", () => {
    const a = newAttempt(FIXTURE, "practice", 0, "a5");
    const r1 = askFinding(FIXTURE, a, "ecg");
    expect(r1.result).toBe("Sinus rhythm at 90.");
    const r2 = askFinding(FIXTURE, r1.attempt, "ecg");
    expect(r2.attempt.findingsAsked).toEqual(["ecg"]);
  });

  it("orders the rubric by the questions on the path", () => {
    let a = newAttempt(FIXTURE, "practice", 0, "a6");
    a = advance(FIXTURE, a, 1);
    expect(questionsOnPath(FIXTURE, a).map((q) => q.id)).toEqual(["q1"]);
    expect(rubricOrder(FIXTURE, a)).toEqual(["r1", "r2", "d1", "d2"]);
  });

  it("counts the question range across branches", () => {
    expect(questionRange(FIXTURE)).toEqual({ min: 2, max: 2 });
  });
});

describe("scoring", () => {
  it("scores yes, partly and no", () => {
    const s = scoreMarks(FIXTURE, { r1: "yes", r2: "yes", d1: "partly", d2: "no" });
    expect(s.awarded).toBe(5.5);
    expect(s.max).toBe(10);
    expect(s.percent).toBe(55);
    expect(s.passed).toBe(false);
    expect(s.missed).toEqual(["d1", "d2"]);
  });

  it("counts unmarked items as no", () => {
    const s = scoreMarks(FIXTURE, {});
    expect(s.awarded).toBe(0);
    expect(s.missed).toHaveLength(4);
  });

  it("fails on a critical miss even above the pass mark", () => {
    const s = scoreMarks(FIXTURE, { r1: "yes", r2: "partly", d1: "yes", d2: "yes" });
    expect(s.percent).toBe(90);
    expect(s.passed).toBe(false);
    expect(s.criticalMisses).toEqual(["r2"]);
  });

  it("passes exactly at the threshold", () => {
    const s = scoreMarks(FIXTURE, { r2: "yes", d1: "yes", r1: "partly" });
    expect(s.percent).toBe(60);
    expect(s.passed).toBe(true);
  });

  it("totals by domain", () => {
    const s = scoreMarks(FIXTURE, { r1: "yes", r2: "yes" });
    expect(s.domains).toEqual([
      { id: "resus", name: "Resuscitation", awarded: 4, max: 4 },
      { id: "dispo", name: "Disposition", awarded: 0, max: 6 },
    ]);
  });
});

describe("weak areas", () => {
  const scored = (id: string, caseId: string, startedAt: number, marks: Record<string, "yes" | "partly" | "no">) =>
    finishAttempt({ ...FIXTURE, id: caseId }, { ...newAttempt(FIXTURE, "practice", startedAt, id), caseId }, marks, startedAt + 1);

  it("pools domains by name and sorts weakest first", () => {
    const w = weakAreas([
      scored("1", "c1", 1, { r1: "yes", r2: "yes" }),
      scored("2", "c2", 1, { r1: "yes", r2: "yes", d1: "yes" }),
    ]);
    expect(w.map((x) => [x.name, x.percent])).toEqual([
      ["Disposition", 25],
      ["Resuscitation", 100],
    ]);
  });

  it("uses only the latest attempt per case", () => {
    const w = weakAreas([scored("old", "c1", 1, {}), scored("new", "c1", 5, { d1: "yes", d2: "yes" })]);
    expect(w.find((x) => x.name === "Disposition")!.percent).toBe(100);
  });

  it("filters by a threshold and ignores unscored attempts", () => {
    const unscored = newAttempt(FIXTURE, "practice", 0, "u");
    const w = weakAreas([unscored, scored("1", "c1", 1, { r1: "yes", r2: "yes" })], 70);
    expect(w.map((x) => x.name)).toEqual(["Disposition"]);
  });
});
