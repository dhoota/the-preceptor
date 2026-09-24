import { describe, expect, it } from "vitest";
import { BATCHES, CASES } from "@/cases";
import { BLUEPRINT, ORAL_CRITERIA, questionRange, validateCase } from "@/engine";
import { topicById } from "@/blueprint/priorityTopics";

/**
 * Structure and house style for every shipped case.
 * CASE_BATCH=batch03 limits the run to one batch while it is being written.
 * LAUNCH_GATE=1 also enforces the pre-launch blueprint minimums.
 */

const only = process.env.CASE_BATCH;
const target = only ? BATCHES[only] ?? [] : CASES;

/** Every string a candidate can see. URLs are exempt from style rules. */
function strings(value: unknown, out: string[] = [], key = ""): string[] {
  if (typeof value === "string") {
    if (key !== "url") out.push(value);
  } else if (Array.isArray(value)) value.forEach((v) => strings(v, out, key));
  else if (value && typeof value === "object") Object.entries(value).forEach(([k, v]) => strings(v, out, k));
  return out;
}

describe("case bank", () => {
  it("has unique case ids across every batch", () => {
    const ids = CASES.map((c) => c.id);
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([]);
  });

  it("keeps the two free sample cases first", () => {
    expect(CASES.slice(0, 2).map((c) => c.id)).toEqual(["chest-pain-rural", "febrile-infant"]);
  });

  if (only) {
    it(`batch ${only} exists and is not empty`, () => {
      expect(target.length).toBeGreaterThan(0);
    });
  }

  if (process.env.LAUNCH_GATE) {
    it("meets the launch minimum of 100 cases", () => {
      expect(CASES.length).toBeGreaterThanOrEqual(100);
    });
    it("covers every blueprint area with at least 5 cases", () => {
      const thin = BLUEPRINT.filter((b) => CASES.filter((c) => c.blueprint === b.id).length < 5).map((b) => b.id);
      expect(thin).toEqual([]);
    });
  }
});

for (const c of target) {
  describe(c.id, () => {
    it("is structurally valid", () => {
      expect(validateCase(c)).toEqual([]);
    });
    it("maps to a CFPC priority topic and real key features", () => {
      expect(topicById(c.priorityTopic), c.priorityTopic).toBeTruthy();
      expect(c.keyFeatures.length).toBeGreaterThanOrEqual(2);
      for (const k of c.keyFeatures) {
        const t = topicById(k.topic);
        expect(t, k.topic).toBeTruthy();
        expect(t!.keyFeatures.some((x) => x.n === k.n), `${k.topic}#${k.n}`).toBe(true);
      }
    });
    it("tags every rubric item with an examiner criterion", () => {
      for (const r of c.rubric) expect(ORAL_CRITERIA.some((k) => k.id === r.criterion), r.id).toBe(true);
      expect(new Set(c.rubric.map((r) => r.criterion)).size).toBeGreaterThanOrEqual(2);
    });
    it("uses a kebab case id", () => {
      expect(c.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    });
    it("awaits physician review", () => {
      expect(c.reviewed).toBe(false);
    });
    it("has 6 to 12 questions on every path and real branching", () => {
      const r = questionRange(c);
      expect(r.min).toBeGreaterThanOrEqual(6);
      expect(r.max).toBeLessThanOrEqual(12);
      const branching = c.nodes.filter((n) => n.kind === "question" && (n.choices?.length ?? 0) > 1);
      expect(branching.length).toBeGreaterThanOrEqual(3);
    });
    it("has between 8 and 14 findings and 12 to 26 rubric items with 2 to 4 critical", () => {
      expect(c.findings.length).toBeGreaterThanOrEqual(8);
      expect(c.findings.length).toBeLessThanOrEqual(14);
      expect(c.rubric.length).toBeGreaterThanOrEqual(12);
      expect(c.rubric.length).toBeLessThanOrEqual(26);
      const crit = c.rubric.filter((r) => r.critical).length;
      expect(crit).toBeGreaterThanOrEqual(2);
      expect(crit).toBeLessThanOrEqual(4);
    });
    it("follows house style", () => {
      for (const s of strings(c)) {
        expect(s, s).not.toMatch(/[–—]/);
        expect(s, s).not.toContain(";");
      }
    });
  });
}
