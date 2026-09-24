import type { OralCase } from "@/engine/types";
import type { Samp } from "@/engine/samp";
import type { Access } from "@/lib/purchases";

/** Oral cases open without a purchase. The first cases in CASES order. */
export const FREE_CASE_COUNT = 2;
/** SAMPs open without a purchase. The first SAMP of this many topics. */
export const FREE_SAMP_TOPICS = 10;

export function freeCaseIds(cases: OralCase[]): Set<string> {
  return new Set(cases.slice(0, FREE_CASE_COUNT).map((c) => c.id));
}

export function freeSampIds(samps: Samp[]): Set<string> {
  const seen = new Set<string>();
  const out = new Set<string>();
  for (const s of samps) {
    if (seen.has(s.topic) || seen.size >= FREE_SAMP_TOPICS) continue;
    seen.add(s.topic);
    out.add(s.id);
  }
  return out;
}

export function canOpenCase(caseId: string, cases: OralCase[], access: Access): boolean {
  return access.oral || freeCaseIds(cases).has(caseId);
}

export function canOpenSamp(sampId: string, samps: Samp[], access: Access): boolean {
  return access.written || freeSampIds(samps).has(sampId);
}
