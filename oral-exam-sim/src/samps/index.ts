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
import { SAMPS_S19 } from "./s19";
import { SAMPS_S20 } from "./s20";
import { SAMPS_S21 } from "./s21";
import { SAMPS_S22 } from "./s22";
import { SAMPS_S23 } from "./s23";
import { SAMPS_S24 } from "./s24";
import { SAMPS_S25 } from "./s25";
import { SAMPS_S26 } from "./s26";
import { SAMPS_S27 } from "./s27";
import { SAMPS_S28 } from "./s28";
import { SAMPS_S29 } from "./s29";
import { SAMPS_S30 } from "./s30";
import { SAMPS_S31 } from "./s31";
import { SAMPS_S32 } from "./s32";
import { SAMPS_S33 } from "./s33";
import { SAMPS_S34 } from "./s34";
import { SAMPS_S35 } from "./s35";
import { SAMPS_S36 } from "./s36";
import { SAMPS_S37 } from "./s37";
import { SAMPS_S38 } from "./s38";
import { SAMPS_S39 } from "./s39";
import { SAMPS_S40 } from "./s40";
import { SAMPS_S41 } from "./s41";
import { SAMPS_S42 } from "./s42";
import { SAMPS_S43 } from "./s43";
import { SAMPS_S44 } from "./s44";
import { SAMPS_S45 } from "./s45";
import { SAMPS_S46 } from "./s46";
import { SAMPS_S47 } from "./s47";
import { SAMPS_S48 } from "./s48";
import { SAMPS_S49 } from "./s49";
import { SAMPS_S50 } from "./s50";
import { SAMPS_S51 } from "./s51";
import { SAMPS_S52 } from "./s52";
import { SAMPS_S53 } from "./s53";

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
  s19: SAMPS_S19,
  s20: SAMPS_S20,
  s21: SAMPS_S21,
  s22: SAMPS_S22,
  s23: SAMPS_S23,
  s24: SAMPS_S24,
  s25: SAMPS_S25,
  s26: SAMPS_S26,
  s27: SAMPS_S27,
  s28: SAMPS_S28,
  s29: SAMPS_S29,
  s30: SAMPS_S30,
  s31: SAMPS_S31,
  s32: SAMPS_S32,
  s33: SAMPS_S33,
  s34: SAMPS_S34,
  s35: SAMPS_S35,
  s36: SAMPS_S36,
  s37: SAMPS_S37,
  s38: SAMPS_S38,
  s39: SAMPS_S39,
  s40: SAMPS_S40,
  s41: SAMPS_S41,
  s42: SAMPS_S42,
  s43: SAMPS_S43,
  s44: SAMPS_S44,
  s45: SAMPS_S45,
  s46: SAMPS_S46,
  s47: SAMPS_S47,
  s48: SAMPS_S48,
  s49: SAMPS_S49,
  s50: SAMPS_S50,
  s51: SAMPS_S51,
  s52: SAMPS_S52,
  s53: SAMPS_S53,
};

/** Every authored SAMP, including any held back from release. Tests check all of these. */
export const AUTHORED_SAMPS: Samp[] = Object.values(SAMP_BATCHES).flat();

const heldBackFiles = import.meta.glob<{ ids: Record<string, string> }>("./held-back/*.json", { eager: true, import: "default" });

/** Ids held back from the release until they have a fresh sign-off. See held-back/README.md. */
export const HELD_BACK = new Set<string>(Object.values(heldBackFiles).flatMap((f) => Object.keys(f.ids)));

/** The SAMPs the app shows. Held-back SAMPs are left out. */
export const SAMPS: Samp[] = AUTHORED_SAMPS.filter((s) => !HELD_BACK.has(s.id));

export function getSamp(id: string): Samp | undefined {
  return SAMPS.find((s) => s.id === id);
}
