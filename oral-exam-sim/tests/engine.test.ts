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
    c.rubric.push({ id: "x1", competency: "resuscitation", criterion: "management", text: "x", points: 1, teaching: "x", source: "s1" });
    const errs = validateCase(c).join();
    expect(errs).toContain('"orphan" is unreachable');
    expect(errs).toContain('rubric "x1" is never tested');
  });
  it("reports unknown rubric references, competencies and sources", () => {
    const c = clone();
    (c.nodes[1] as { rubric: string[] }).rubric.push("zz");
    (c.rubric[0] as { competency: string }).competency = "nope";
    c.rubric[1].source = "missing";
    const errs = validateCase(c).join();
    expect(errs).toContain('unknown rubric "zz"');
    expect(errs).toContain('unknown competency "nope"');
    expect(errs).toContain('cites unknown source "missing"');
  });
  it("requires feedback on every choice and a strong option", () => {
    const c = clone();
    const q = c.nodes[1] as { choices: { feedback: string; quality: string }[] };
    q.choices[0].feedback = "";
    q.choices[0].quality = "partial";
    const errs = validateCase(c).join();
    expect(errs).toContain("has no feedback");
    expect(errs).toContain("has no strong choice");
  });
  it("flags sources nobody cites and unknown blueprint areas", () => {
    const c = clone();
    c.sources.push({ id: "s3", citation: "Unused." });
    (c as { blueprint: string }).blueprint = "space";
    const errs = validateCase(c).join();
    expect(errs).toContain('"s3" is never cited');
    expect(errs).toContain('unknown blueprint area "space"');
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

