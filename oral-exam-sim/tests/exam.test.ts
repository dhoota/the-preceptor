import { describe, expect, it } from "vitest";
import {
  composeOralMock,
  composeWrittenMock,
  finishAttempt,
  markSamp,
  newAttempt,
  rng,
  sampFormat,
  topicStats,
  type OralCase,
  type Samp,
} from "@/engine";
import { FIXTURE } from "./fixture";

const samp = (id: string, topic: string, n = 1): Samp => ({
  id, topic, title: "t", stem: "s", reviewed: false, author: "a", version: 1,
  sources: [{ id: "s1", citation: "c" }],
  questions: [
    { kind: "single", id: "q1", prompt: "p", options: ["a", "b", "c", "d"], correct: 0, explanation: "x", keyFeature: { topic, n }, source: "s1" },
    { kind: "single", id: "q2", prompt: "p", options: ["a", "b", "c", "d"], correct: 0, explanation: "x", keyFeature: { topic, n: n + 1 }, source: "s1" },
  ],
});

const bank = ["a", "b", "c"].flatMap((t) => [1, 2, 3, 4].map((i) => samp(`${t}-${i}`, t)));

describe("written mock", () => {
  it("spreads draws across topics", () => {
    const ids = composeWrittenMock(bank, 6, { rand: rng(1) });
    expect(ids).toHaveLength(6);
    const perTopic = ["a", "b", "c"].map((t) => ids.filter((id) => id.startsWith(t)).length);
    expect(perTopic).toEqual([2, 2, 2]);
    expect(new Set(ids).size).toBe(6);
  });
  it("puts unseen SAMPs first", () => {
    const seen = new Set(["a-1", "a-2", "a-3"]);
    const ids = composeWrittenMock(bank, 3, { rand: rng(2), seen });
    expect(ids.find((x) => x.startsWith("a"))).toBe("a-4");
  });
  it("respects access and stops when the pool runs out", () => {
    const ids = composeWrittenMock(bank, 50, { rand: rng(3), allowed: (id) => id.endsWith("-1") });
    expect(ids.sort()).toEqual(["a-1", "b-1", "c-1"]);
  });
  it("draws only multiple choice and menu SAMPs", () => {
    const writein: Samp = {
      ...samp("w-1", "a"),
      questions: [{ kind: "short", id: "q1", prompt: "p?", required: 1, accept: [{ id: "k", text: "k", match: ["k"] }], explanation: "x", keyFeature: { topic: "a", n: 1 }, source: "s1" }],
    };
    expect(sampFormat(writein)).toBe("writein");
    expect(sampFormat(bank[0])).toBe("mcq");
    expect(composeWrittenMock([writein, ...bank], 50, { rand: rng(5) })).not.toContain("w-1");
  });
  it("is reproducible with the same seed", () => {
    expect(composeWrittenMock(bank, 5, { rand: rng(9) })).toEqual(composeWrittenMock(bank, 5, { rand: rng(9) }));
  });
});

describe("oral mock", () => {
  const cases: OralCase[] = ["t1", "t1", "t2", "t3", "t4", "t5"].map((topic, i) => ({ ...FIXTURE, id: `c${i}`, priorityTopic: topic }));
  it("picks four cases on four different topics", () => {
    const ids = composeOralMock(cases, { rand: rng(4) });
    expect(ids).toHaveLength(4);
    const topics = ids.map((id) => cases.find((c) => c.id === id)!.priorityTopic);
    expect(new Set(topics).size).toBe(4);
  });
});

describe("topic stats", () => {
  it("reports written, oral and key feature coverage per topic", () => {
    const topics = [{ id: "a", keyFeatures: [{ n: 1 }, { n: 2 }, { n: 3 }] }];
    const s = samp("a-1", "a");
    const old = { sampId: "a-1", at: 1, mark: markSamp(s, {}) };
    const now = { sampId: "a-1", at: 2, mark: markSamp(s, { q1: { kind: "single", choice: 0 }, q2: { kind: "single", choice: 1 } }) };
    const c: OralCase = { ...FIXTURE, id: "oc", priorityTopic: "a", keyFeatures: [{ topic: "a", n: 3 }] };
    let at = newAttempt(c, "practice", 5, "x");
    at = finishAttempt(c, at, { r1: "yes", r2: "yes", d1: "yes", d2: "yes" }, 6);
    const [t] = topicStats(topics, [s, samp("a-2", "a")], [old, now], [c], [at]);
    expect(t).toMatchObject({ sampsTotal: 2, sampsDone: 1, written: 50, oralTotal: 1, oralDone: 1, oral: 100, keyFeaturesSeen: 3 });
    expect(t.byKeyFeature).toEqual({ 1: 100, 2: 0 });
  });
});
