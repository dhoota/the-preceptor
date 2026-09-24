import { describe, expect, it } from "vitest";
import { BANK_PLAN, CJMM_IDS, NEEDS, NEED_IDS, type ClientNeed } from "@/engine/blueprint";
import { batchCueingProblems, caseContext, caseProblems, itemProblems, nearDuplicates } from "@/engine/quality";
import type { CaseStudy, Item } from "@/engine/types";
import { ALL_ITEMS, CASES, CASE_BATCHES, ITEMS, ITEM_BATCHES } from "@/bank";
import plan from "../docs/bank-plan.json";
import signoff from "../docs/signoff.json";

/**
 * Bank gates. BATCH=s01 limits the run to one batch. A batch is checked once
 * it holds any content. Empty batches are skipped until LAUNCH_GATE=1, which
 * requires the full 2,000 item bank.
 */

type Plan = { type: "standalone" | "cases"; needs: Partial<Record<ClientNeed, number>>; cases?: number };
const PLAN = plan.batches as Record<string, Plan>;
const MIX = plan.standaloneMix as Record<string, number>;
const only = process.env.BATCH;
const SIGNED = new Set<string>(signoff.ids);

const count = <T,>(xs: T[], f: (x: T) => string) => xs.reduce<Record<string, number>>((m, x) => ((m[f(x)] = (m[f(x)] ?? 0) + 1), m), {});
const kindOf = (i: Item) => (i.trend ? "trend" : i.kind);

describe("bank plan", () => {
  it("allocates 2,000 items by the test plan midpoints", () => {
    const tot: Record<string, number> = {};
    for (const b of Object.values(PLAN)) for (const [n, c] of Object.entries(b.needs)) tot[n] = (tot[n] ?? 0) + c!;
    expect(tot).toEqual(Object.fromEntries(NEEDS.map((n) => [n.id, n.bank])));
    expect(Object.values(tot).reduce((a, b) => a + b, 0)).toBe(BANK_PLAN.total);
    expect(Object.values(PLAN).filter((b) => b.type === "cases").reduce((n, b) => n + b.cases!, 0)).toBe(BANK_PLAN.caseStudies);
    expect(Object.values(MIX).reduce((a, b) => a + b, 0)).toBe(50);
  });
  it("every planned batch is wired into the bank index", () => {
    expect(Object.keys({ ...ITEM_BATCHES, ...CASE_BATCHES }).sort()).toEqual(Object.keys(PLAN).sort());
  });
});

for (const [b, p] of Object.entries(PLAN)) {
  if (only && b !== only) continue;
  if (p.type === "standalone") {
    const items = ITEM_BATCHES[b] ?? [];
    if (!items.length) continue;
    describe(`batch ${b}`, () => {
      it("has the planned count and Client Needs split", () => {
        expect(items.length).toBe(50);
        expect(count(items, (i) => i.need)).toEqual(p.needs);
      });
      it("has the planned item type mix", () => {
        expect(count(items, kindOf)).toEqual(MIX);
      });
      it("uses ids rn-<batch>-01 to -50 in order", () => {
        expect(items.map((i) => i.id)).toEqual(Array.from({ length: 50 }, (_, k) => `rn-${b}-${String(k + 1).padStart(2, "0")}`));
      });
      it("spreads difficulty and CJMM steps", () => {
        const d = count(items, (i) => String(i.difficulty));
        expect(Object.keys(d).length).toBeGreaterThanOrEqual(4);
        expect(Math.max(...Object.values(d))).toBeLessThanOrEqual(20);
        expect(Object.keys(count(items, (i) => i.cjmm)).sort()).toEqual([...CJMM_IDS].sort());
      });
      it("includes dosage calculations where pharmacology is tested", () => {
        const ppt = p.needs.PPT ?? 0;
        if (ppt >= 20) expect(items.filter((i) => i.calc).length).toBeGreaterThanOrEqual(Math.ceil(ppt * 0.12));
      });
      it("passes the batch cueing gates (length bias and key position)", () => {
        expect(batchCueingProblems(items)).toEqual([]);
      });
      for (const it_ of items) it(`${it_.id} passes every item gate`, () => expect(itemProblems(it_)).toEqual([]));
    });
  } else {
    const cases = CASE_BATCHES[b] ?? [];
    if (!cases.length) continue;
    const items = cases.flatMap((c) => c.items);
    describe(`batch ${b}`, () => {
      it("has 5 cases of 6 items and the planned Client Needs split", () => {
        expect(cases.length).toBe(p.cases);
        expect(items.length).toBe(p.cases! * 6);
        expect(count(items, (i) => i.need)).toEqual(p.needs);
      });
      it("uses ids rn-<batch>-1 to -5", () => {
        expect(cases.map((c) => c.id)).toEqual(cases.map((_, k) => `rn-${b}-${k + 1}`));
      });
      it("uses every case item type and both rationale scorings", () => {
        const kinds = new Set(items.map((i) => i.kind));
        for (const k of ["matrix", "cloze", "dnd", "highlight"]) expect(kinds.has(k as Item["kind"]), k).toBe(true);
        expect(kinds.has("sata") || kinds.has("msn")).toBe(true);
        const scorings = new Set(items.flatMap((i) => (i.kind === "cloze" || i.kind === "dnd" ? [i.scoring] : [])));
        expect(scorings.has("dyad") && scorings.has("triad")).toBe(true);
      });
      it("passes the batch cueing gates", () => {
        expect(batchCueingProblems(items)).toEqual([]);
      });
      for (const c of cases) {
        it(`${c.id} walks the CJMM steps`, () => expect(caseProblems(c)).toEqual([]));
        c.items.forEach((it_, k) => it(`${it_.id} passes every item gate`, () => expect(itemProblems(it_, caseContext(c, k))).toEqual([])));
      }
    });
  }
}

describe("whole bank", () => {
  it("has unique ids", () => {
    const ids = [...ALL_ITEMS.map((i) => i.id), ...CASES.map((c) => c.id)];
    expect(ids.length - new Set(ids).size).toBe(0);
  });
  it("has no near duplicate stems (word trigram Jaccard 0.5)", () => {
    const stems = [...ALL_ITEMS.map((i) => ({ id: i.id, text: i.stem })), ...CASES.map((c) => ({ id: c.id, text: c.intro }))];
    expect(nearDuplicates(stems)).toEqual([]);
  });
  it("marks content reviewed only when it is on the sign-off list", () => {
    const bad = [...ALL_ITEMS, ...CASES].filter((x: Item | CaseStudy) => x.reviewed !== SIGNED.has(x.id)).map((x) => x.id);
    expect(bad).toEqual([]);
  });
  if (process.env.LAUNCH_GATE)
    it("launch gate: the full bank is present", () => {
      expect(ITEMS.length).toBe(BANK_PLAN.standalone);
      expect(CASES.length).toBe(BANK_PLAN.caseStudies);
      expect(ALL_ITEMS.length).toBe(BANK_PLAN.total);
      expect(count(ALL_ITEMS, (i) => i.need)).toEqual(Object.fromEntries(NEED_IDS.map((n) => [n, NEEDS.find((x) => x.id === n)!.bank])));
    });
});
