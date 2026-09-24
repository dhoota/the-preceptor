// DRAFT. Clinical content written for simulation only. Requires physician review before release.

import type { OralCase } from "@/engine/types";
import { SEED } from "./seed";
import { BATCH_01 } from "./batch01";
import { BATCH_02 } from "./batch02";
import { BATCH_03 } from "./batch03";
import { BATCH_04 } from "./batch04";
import { BATCH_05 } from "./batch05";
import { BATCH_06 } from "./batch06";
import { BATCH_07 } from "./batch07";
import { BATCH_08 } from "./batch08";
import { BATCH_09 } from "./batch09";
import { BATCH_10 } from "./batch10";

export const BATCHES: Record<string, OralCase[]> = {
  seed: SEED,
  batch01: BATCH_01,
  batch02: BATCH_02,
  batch03: BATCH_03,
  batch04: BATCH_04,
  batch05: BATCH_05,
  batch06: BATCH_06,
  batch07: BATCH_07,
  batch08: BATCH_08,
  batch09: BATCH_09,
  batch10: BATCH_10,
};

/** Seed cases first. The first two cases are the free sample. */
export const CASES: OralCase[] = Object.values(BATCHES).flat();

export function getCase(id: string): OralCase | undefined {
  return CASES.find((c) => c.id === id);
}
