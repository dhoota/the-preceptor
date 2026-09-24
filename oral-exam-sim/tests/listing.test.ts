import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/** Store listing copy: store character limits and house style. */
const md = readFileSync(join(__dirname, "..", "store", "listing.md"), "utf8");

function sections(): { title: string; limit: number; body: string }[] {
  const out: { title: string; limit: number; body: string }[] = [];
  const re = /^### (.+?) \((\d+)\)\n([\s\S]*?)(?=\n#{2,3} |$)/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) out.push({ title: m[1], limit: Number(m[2]), body: m[3].trim() });
  return out;
}

describe("store listing", () => {
  it("finds the limited fields", () => {
    expect(sections().length).toBeGreaterThanOrEqual(9);
  });

  for (const s of sections()) {
    it(`${s.title} fits in ${s.limit} characters`, () => {
      expect(s.body.length, s.body).toBeLessThanOrEqual(s.limit);
    });
  }

  it("keywords have no spaces after commas", () => {
    const kw = sections().find((s) => s.title === "Keywords")!.body;
    expect(kw).not.toMatch(/, /);
  });

  it("follows house style", () => {
    expect(md).not.toMatch(/[–—]/);
    expect(md).not.toContain(";");
    expect(md.toLowerCase()).not.toMatch(/\b(seamless|unlock|empower|elevate)/);
  });
});
