// DRAFT. Clinical content written for simulation only. Requires physician review before release.
//
// The app's entry point for the case bank. Reads the obfuscated snapshot
// (decode.ts) instead of importing the plaintext per-batch files directly,
// so the case text isn't shipped as readable source in the production
// bundle. src/cases/source.ts (plaintext, batch-keyed) is still the source
// of truth for the content pipeline and for tests.

import type { OralCase } from "@/engine/types";
import { decodedCases } from "./decode";

/** Seed cases first. The first two cases are the free sample. */
export const CASES: OralCase[] = decodedCases();

export function getCase(id: string): OralCase | undefined {
  return CASES.find((c) => c.id === id);
}
