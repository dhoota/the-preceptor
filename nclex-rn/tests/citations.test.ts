import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { ALL_ITEMS } from "@/bank/index";
import { NEED_IDS } from "@/engine/blueprint";
import { AREA_REFS, REFERENCES, guidelineCitations, itemCitations } from "@/lib/references";

// App Review guideline 1.4.1: medical information must cite its sources, easy to find, with links.
const read = (p: string) => readFileSync(join(__dirname, "..", p), "utf8");

describe("citations", () => {
  it("every question cites at least one named source and at least one link", () => {
    const missing: string[] = [];
    for (const item of ALL_ITEMS) {
      const own = itemCitations(item);
      const links = [...own, ...guidelineCitations(item)].filter((c) => c.url?.startsWith("https://"));
      if (!own.length || !links.length) missing.push(item.id);
    }
    expect(ALL_ITEMS.length).toBe(2000);
    expect(missing).toEqual([]);
  });

  it("every Client Needs area maps to the test plan and real references", () => {
    const ids = new Set(REFERENCES.map((r) => r.id));
    for (const n of NEED_IDS) {
      expect(AREA_REFS[n].length, n).toBeGreaterThan(0);
      for (const id of AREA_REFS[n]) expect(ids.has(id), `${n} ${id}`).toBe(true);
    }
    for (const r of REFERENCES) expect(r.url, r.id).toMatch(/^https:\/\/[a-z0-9.-]+\.(gov|org|com|int)\//);
    expect(REFERENCES.find((r) => r.id === "testplan")?.url).toBe("https://www.nclex.com/test-plans.page");
  });

  it("every source URL in the bank is https", () => {
    for (const item of ALL_ITEMS) for (const s of item.sources) if (s.url) expect(s.url, item.id).toMatch(/^https:\/\//);
  });

  it("shows sources on the answer screen and links Sources & References from Settings, the paywall and the first-run notice", () => {
    expect(read("src/components/ItemPlayer.tsx")).toContain("<ItemSources item={item} />");
    for (const f of ["src/screens/Settings.tsx", "src/screens/Paywall.tsx", "src/screens/Disclaimer.tsx"]) expect(read(f), f).toContain("useSources()");
    expect(read("src/components/Sources.tsx")).toContain("Sources &amp; References");
    expect(read("src/components/Sources.tsx")).toContain("EDUCATION_ONLY");
  });
});
