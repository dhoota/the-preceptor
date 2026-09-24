import { describe, expect, it } from "vitest";
import { bandScale, buildSet, caseTabsAt, hms, mergeTabs, missedIds, parsePassage, place, splitTemplate, toggle } from "@/engine/ui";
import type { Answered } from "@/engine/analytics";
import { ALL_FIXTURES, HIGHLIGHT, fixtureCase } from "./fixture";

const ans = (itemId: string, earned: number, max: number, at: number): Answered => ({ itemId, need: "PA", cjmm: "action", kind: "mc", score: { earned, max }, at });

describe("ui helpers", () => {
  it("merges tabs by title, replacing in place", () => {
    const a = [{ title: "Nurses' Notes", text: "a" }, { title: "Vital Signs", text: "v1" }];
    expect(mergeTabs(a, [{ title: "Vital Signs", text: "v2" }, { title: "Orders", text: "o" }])).toEqual([
      { title: "Nurses' Notes", text: "a" },
      { title: "Vital Signs", text: "v2" },
      { title: "Orders", text: "o" },
    ]);
    expect(mergeTabs(a)).toEqual(a);
  });
  it("builds the case chart cumulatively", () => {
    const c = fixtureCase();
    c.items[1] = { ...c.items[1], tabs: [{ title: "Vital Signs", text: "HR 90" }] };
    c.items[3] = { ...c.items[3], tabs: [{ title: "Vital Signs", text: "HR 120" }] };
    expect(caseTabsAt(c, 0).map((t) => t.title)).toEqual(["Nurses' Notes"]);
    expect(caseTabsAt(c, 2).find((t) => t.title === "Vital Signs")?.text).toBe("HR 90");
    expect(caseTabsAt(c, 5).find((t) => t.title === "Vital Signs")?.text).toBe("HR 120");
  });
  it("splits templates and passages", () => {
    expect(splitTemplate("At risk for {0} as shown by {1}.")).toEqual(["At risk for ", 0, " as shown by ", 1, "."]);
    const parts = parsePassage((HIGHLIGHT as Extract<typeof HIGHLIGHT, { kind: "highlight" }>).passage);
    const spans = parts.filter((p) => p.span !== undefined);
    expect(spans.map((p) => p.text)).toEqual((HIGHLIGHT as Extract<typeof HIGHLIGHT, { kind: "highlight" }>).spans.map((s) => s.text));
    expect(spans.map((p) => p.span)).toEqual(spans.map((_, i) => i));
  });
  it("toggles with a cap", () => {
    expect(toggle([], 1, 1)).toEqual([1]);
    expect(toggle([1], 2, 1)).toEqual([2]);
    expect(toggle([1, 2], 3, 2)).toEqual([1, 2]);
    expect(toggle([1, 2], 2, 2)).toEqual([1]);
  });
  it("places a token on one target only", () => {
    expect(place([0, null, null], 2, 0)).toEqual([null, null, 0]);
    expect(place([0, 1, null], 1, null)).toEqual([0, null, null]);
  });
  it("finds missed items on the latest answer", () => {
    expect([...missedIds([ans("a", 0, 1, 1), ans("a", 1, 1, 2), ans("b", 1, 2, 1)])]).toEqual(["b"]);
  });
  it("builds sets with unseen items first", () => {
    const ids = buildSet(ALL_FIXTURES, 5, [ans(ALL_FIXTURES[0].id, 1, 1, 1)], 3);
    expect(ids).toHaveLength(5);
    expect(ids).not.toContain(ALL_FIXTURES[0].id);
    expect(new Set(ids).size).toBe(5);
    expect(buildSet([], 10, [], 1)).toEqual([]);
  });
  it("formats time and clips the band scale", () => {
    expect(hms(3_723_000)).toBe("1:02:03");
    const s = bandScale({ theta: 0, se: Infinity });
    expect(s.from).toBe(0);
    expect(s.to).toBe(100);
    expect(s.standard).toBe(50);
  });
});
