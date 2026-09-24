import { describe, expect, it } from "vitest";
import { CASES } from "@/cases";
import { questionRange, validateCase } from "@/engine";

/** Every string a candidate can see in a case. */
function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === "object") Object.values(value).forEach((v) => strings(v, out));
  return out;
}

describe("seed cases", () => {
  it("ships five cases with unique ids", () => {
    expect(CASES).toHaveLength(5);
    expect(new Set(CASES.map((c) => c.id)).size).toBe(5);
  });

  for (const c of CASES) {
    describe(c.id, () => {
      it("is structurally valid", () => {
        expect(validateCase(c)).toEqual([]);
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
      it("follows house style", () => {
        for (const s of strings(c)) {
          expect(s, s).not.toMatch(/[–—]/);
          expect(s, s).not.toContain(";");
        }
      });
    });
  }
});
