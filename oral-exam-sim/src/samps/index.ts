// DRAFT. Written for exam practice only. Requires physician review before release.

import type { Samp } from "@/engine/samp";
import { SAMPS_S01 } from "./s01";
import { SAMPS_S02 } from "./s02";
import { SAMPS_S03 } from "./s03";
import { SAMPS_S04 } from "./s04";
import { SAMPS_S05 } from "./s05";
import { SAMPS_S06 } from "./s06";
import { SAMPS_S07 } from "./s07";
import { SAMPS_S08 } from "./s08";
import { SAMPS_S09 } from "./s09";
import { SAMPS_S10 } from "./s10";
import { SAMPS_S11 } from "./s11";
import { SAMPS_S12 } from "./s12";
import { SAMPS_S13 } from "./s13";
import { SAMPS_S14 } from "./s14";
import { SAMPS_S15 } from "./s15";
import { SAMPS_S16 } from "./s16";
import { SAMPS_S17 } from "./s17";
import { SAMPS_S18 } from "./s18";

export const SAMP_BATCHES: Record<string, Samp[]> = {
  s01: SAMPS_S01,
  s02: SAMPS_S02,
  s03: SAMPS_S03,
  s04: SAMPS_S04,
  s05: SAMPS_S05,
  s06: SAMPS_S06,
  s07: SAMPS_S07,
  s08: SAMPS_S08,
  s09: SAMPS_S09,
  s10: SAMPS_S10,
  s11: SAMPS_S11,
  s12: SAMPS_S12,
  s13: SAMPS_S13,
  s14: SAMPS_S14,
  s15: SAMPS_S15,
  s16: SAMPS_S16,
  s17: SAMPS_S17,
  s18: SAMPS_S18,
};

export const SAMPS: Samp[] = Object.values(SAMP_BATCHES).flat();

export function getSamp(id: string): Samp | undefined {
  return SAMPS.find((s) => s.id === id);
}
