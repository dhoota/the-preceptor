import { describe, expect, it } from "vitest";
import {
  BLUEPRINT,
  advance,
  bandFor,
  buildReport,
  finishAttempt,
  heatmap,
  newAttempt,
  rankFixes,
  readiness,
  scoreMarks,
  suggestNext,
  trend,
  type Attempt,
  type OralCase,
  type SelfMark,
} from "@/engine";
import { FIXTURE } from "./fixture";

const make = (id: string, blueprint: OralCase["blueprint"]): OralCase => ({ ...FIXTURE, id, blueprint, title: `Case ${id}` });

function run(c: OralCase, id: string, at: number, marks: Record<string, SelfMark>, choice = "good"): Attempt {
  let a = newAttempt(c, "practice", at, id);
  a = advance(c, a, at + 1);
  a = advance(c, a, at + 2, { choiceId: choice });
  if (choice === "bad") a = advance(c, a, at + 3);
  a = advance(c, a, at + 4);
  return finishAttempt(c, a, marks, at + 5);
}

describe("fixed standard", () => {
  it("bands by percent and critical misses", () => {
    expect(bandFor(0.7, 0)).toBe("pass");
    expect(bandFor(0.69, 0)).toBe("borderline");
    expect(bandFor(0.6, 0)).toBe("borderline");
    expect(bandFor(0.59, 0)).toBe("fail");
    expect(bandFor(0.95, 1)).toBe("borderline");
    expect(bandFor(0.95, 2)).toBe("fail");
    expect(bandFor(0.55, 1)).toBe("fail");
  });

  it("scores by competency and counts partly as half", () => {
    const s = scoreMarks(FIXTURE, { r1: "yes", r2: "yes", d1: "partly", d2: "no" });
    expect(s.awarded).toBe(5.5);
    expect(s.percent).toBe(55);
    expect(s.band).toBe("fail");
    expect(s.competencies.map((d) => [d.id, d.awarded, d.max])).toEqual([
      ["resuscitation", 4, 4],
      ["disposition", 1.5, 6],
    ]);
  });

  it("treats a partly marked critical item as a miss", () => {
    const s = scoreMarks(FIXTURE, { r1: "yes", r2: "partly", d1: "yes", d2: "yes" });
    expect(s.percent).toBe(90);
    expect(s.criticalMisses).toEqual(["r2"]);
    expect(s.band).toBe("borderline");
  });

  it("counts unmarked items as missed", () => {
    expect(scoreMarks(FIXTURE, {}).missed).toHaveLength(4);
  });
});

describe("case report", () => {
  it("puts critical misses first and ranks the top three fixes", () => {
    const a = run(FIXTURE, "a", 0, { r1: "partly", r2: "no", d1: "no", d2: "partly" });
    const fixes = rankFixes(FIXTURE, a).map((x) => x.id);
    expect(fixes).toEqual(["r2", "d1", "d2", "r1"]);
    const r = buildReport(FIXTURE, a, { cases: [FIXTURE], attempts: [a] });
    expect(r.criticalMisses.map((x) => x.id)).toEqual(["r2"]);
    expect(r.criticalMisses[0].source?.citation).toBe("Test source one.");
    expect(r.topFixes.map((x) => x.id)).toEqual(["r2", "d1", "d2"]);
    expect(r.reviewKeys).toContain("fixture:r2");
    expect(r.band).toBe("fail");
  });

  it("replays each decision with its scripted feedback", () => {
    const a = run(FIXTURE, "a", 0, {}, "bad");
    const r = buildReport(FIXTURE, a, { cases: [FIXTURE], attempts: [a] });
    expect(r.decisions).toEqual([
      { questionId: "q1", prompt: "What do you do first?", choice: "I waited.", quality: "unsafe", feedback: "Unsafe. Waiting lets shock progress." },
    ]);
  });

  it("writes a rule based summary", () => {
    const a = run(FIXTURE, "a", 0, { r1: "yes", r2: "yes", d1: "yes", d2: "yes" });
    const r = buildReport(FIXTURE, a, { cases: [FIXTURE], attempts: [a] });
    expect(r.summary).toBe("Pass. You scored 100 percent. You hit every critical action.");
  });
});

describe("next case suggestions", () => {
  const cases = [make("t1", "tox"), make("t2", "tox"), make("n1", "neuro"), make("c1", "cardio"), make("c2", "cardio")];

  it("targets the weakest tried area and spreads across areas", () => {
    const attempts = [
      run(cases[0], "a1", 0, {}), // tox 0 percent
      run(cases[3], "a2", 10, { r1: "yes", r2: "yes", d1: "yes", d2: "yes" }), // cardio 100
    ];
    const next = suggestNext(cases, attempts, { exclude: "t1" });
    expect(next[0]).toMatchObject({ caseId: "t2", area: "Toxicology" });
    expect(next[0].reason).toContain("0 percent");
    expect(new Set(next.map((x) => x.area)).size).toBe(next.length);
    expect(next.some((x) => x.caseId === "n1")).toBe(true);
  });

  it("prefers cases the candidate can open", () => {
    const next = suggestNext(cases, [], { canOpen: (id) => id === "c2" });
    expect(next[0].caseId).toBe("c2");
  });
});

describe("dashboard", () => {
  const cases = [make("t1", "tox"), make("n1", "neuro")];

  it("builds a blueprint by competency heatmap from latest attempts", () => {
    const attempts = [
      run(cases[0], "old", 0, {}),
      run(cases[0], "new", 100, { r1: "yes", r2: "yes" }),
    ];
    const h = heatmap(cases, attempts);
    expect(h.rows).toHaveLength(BLUEPRINT.length);
    const tox = h.rows.find((r) => r.area === "tox")!;
    expect(tox.cells.find((_, i) => h.columns[i].id === "resuscitation")!.percent).toBe(100);
    expect(tox.cells.find((_, i) => h.columns[i].id === "disposition")!.percent).toBe(0);
    expect(tox.cells.find((_, i) => h.columns[i].id === "communication")!.percent).toBeNull();
    expect(h.rows.find((r) => r.area === "neuro")!.percent).toBeNull();
    expect(tox).toMatchObject({ tried: 1, total: 1, percent: 40 });
  });

  it("tracks a trend with a rolling average", () => {
    const attempts = [0, 1, 2].map((i) => run(cases[0], `a${i}`, i * 10, i === 2 ? { r1: "yes", r2: "yes", d1: "yes", d2: "yes" } : {}));
    const t = trend(attempts);
    expect(t.map((p) => p.percent)).toEqual([0, 0, 100]);
    expect(t[2].rolling).toBe(33);
  });

  it("estimates readiness and explains it", () => {
    expect(readiness(cases, []).band).toBe("early");
    const good = run(cases[0], "g", 0, { r1: "yes", r2: "yes", d1: "yes", d2: "yes" });
    const r = readiness(cases, [good]);
    expect(r.score).toBeGreaterThan(0);
    expect(r.band).not.toBe("ready");
    expect(r.reasons.join(" ")).toContain("15 of 16 areas");
  });

  it("never calls the candidate ready without broad coverage", () => {
    const many = BLUEPRINT.slice(0, 4).map((b, i) => make(`x${i}`, b.id));
    const attempts = many.map((c, i) => run(c, `r${i}`, i, { r1: "yes", r2: "yes", d1: "yes", d2: "yes" }));
    expect(readiness(many, attempts).band).not.toBe("ready");
  });
});
