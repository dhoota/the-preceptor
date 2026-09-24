import type { OralCase } from "@/engine/types";

/** Number of cases open without a purchase. The first cases in CASES order. */
export const FREE_CASE_COUNT = 2;

export function freeCaseIds(cases: OralCase[]): Set<string> {
  return new Set(cases.slice(0, FREE_CASE_COUNT).map((c) => c.id));
}

export function canOpen(caseId: string, cases: OralCase[], unlocked: boolean): boolean {
  return unlocked || freeCaseIds(cases).has(caseId);
}
