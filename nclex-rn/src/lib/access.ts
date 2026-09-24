import { NEED_IDS } from "@/engine/blueprint";
import type { CaseStudy, Item } from "@/engine/types";
import type { Access } from "@/lib/purchases";

/** Stand-alone items open without a purchase. */
export const FREE_ITEMS = 50;
/** Case studies open without a purchase. */
export const FREE_CASES = 1;

/**
 * The free items: round robin across the eight Client Needs areas, in bank
 * order, so the sample shows the whole test plan.
 */
export function freeItemIds(items: Item[]): Set<string> {
  const queues = NEED_IDS.map((n) => items.filter((i) => i.need === n));
  const out = new Set<string>();
  for (let k = 0; out.size < Math.min(FREE_ITEMS, items.length); k++)
    for (const q of queues) if (q[k] && out.size < FREE_ITEMS) out.add(q[k].id);
  return out;
}

export function freeCaseIds(cases: CaseStudy[]): Set<string> {
  return new Set(cases.slice(0, FREE_CASES).map((c) => c.id));
}

export const canOpenItem = (id: string, items: Item[], a: Access) => a.full || freeItemIds(items).has(id);
export const canOpenCase = (id: string, cases: CaseStudy[], a: Access) => a.full || freeCaseIds(cases).has(id);
/** The adaptive mock needs the full bank. */
export const canOpenMock = (a: Access) => a.full;
