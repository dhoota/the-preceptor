import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { styleProblems } from "@/engine/style";

/** Store listing copy: store character limits, house style, trademark rules. */
const md = readFileSync(join(__dirname, "..", "store", "listing.md"), "utf8");

function sections(): { title: string; limit: number; body: string }[] {
  const out: { title: string; limit: number; body: string }[] = [];
  const re = /^### (.+?) \((\d+)\)\n([\s\S]*?)(?=\n#{2,3} |(?![\s\S]))/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(md))) out.push({ title: m[1], limit: Number(m[2]), body: m[3].trim() });
  return out;
}

describe("store listing", () => {
  it("finds the limited fields", () => expect(sections().length).toBeGreaterThanOrEqual(10));
  for (const s of sections())
    it(`${s.title} fits in ${s.limit} characters`, () => expect(s.body.length, s.body).toBeLessThanOrEqual(s.limit));
  it("keywords have no spaces after commas", () => {
    expect(sections().find((s) => s.title === "Keywords")!.body).not.toMatch(/, /);
  });
  it("follows house style and avoids marketing words", () => {
    expect(md).not.toMatch(/[–—;]/);
    expect(md.toLowerCase()).not.toMatch(/\b(seamless|unlock|empower|elevate|ultimate|guaranteed pass)/);
    for (const s of sections()) expect(styleProblems(s.body), s.title).toEqual([]);
  });
  it("carries the NCSBN disclaimer and never the banned product phrase", () => {
    const desc = sections().find((s) => s.title === "Description")!.body;
    expect(desc).toContain("not affiliated with, sponsored or endorsed by NCSBN");
    expect(desc).toContain("NCLEX, NCLEX-RN and NCLEX-PN are registered trademarks of NCSBN");
    expect(md).not.toMatch(/NCLEX practice exam/i);
  });
  it("never promises a chance of passing", () => {
    expect(md).not.toMatch(/\d+ ?% (chance|likely|probability)|pass guarantee/i);
  });
  it("discloses the subscription terms", () => {
    const desc = sections().find((s) => s.title === "Description")!.body;
    expect(desc).toMatch(/renews each period unless cancelled at least 24 hours before the period ends/);
    expect(desc).toMatch(/every 6 months/);
    expect(desc).toMatch(/every 3 months/);
    // Prices live only in the stores. No price, percent saving or per month figure in store text.
    expect(md).not.toMatch(/(US|CA)?\$\s?\d|\d+\.\d\d\b|\d+ ?(%|percent)\s*(off|less|cheaper|saving)|per month/i);
    expect(md).not.toMatch(/lifetime purchase|one time purchase|monthly subscription/i);
  });
});
