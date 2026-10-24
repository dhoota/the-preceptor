// DRAFT. Written for exam practice only. Requires physician review before release.
//
// The authored SAMP batches, with no held-back filtering applied (that
// needs import.meta.glob, a Vite-only feature — see source.ts, which wraps
// this file for the app and for Vitest). Split out so scripts/build-bank-cache.mjs
// can bundle this one plain module with esbuild in Node.

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
import { SAMPS_S54 } from "./s54";
import { SAMPS_S55 } from "./s55";
import { SAMPS_S56 } from "./s56";
import { SAMPS_S57 } from "./s57";
import { SAMPS_S58 } from "./s58";
import { SAMPS_S59 } from "./s59";
import { SAMPS_S60 } from "./s60";
import { SAMPS_S61 } from "./s61";
import { SAMPS_S62 } from "./s62";
import { SAMPS_S63 } from "./s63";
import { SAMPS_S64 } from "./s64";
import { SAMPS_S65 } from "./s65";
import { SAMPS_S66 } from "./s66";
import { SAMPS_S67 } from "./s67";
import { SAMPS_S68 } from "./s68";
import { SAMPS_S69 } from "./s69";
import { SAMPS_S70 } from "./s70";
import { SAMPS_S71 } from "./s71";
import { SAMPS_S72 } from "./s72";
import { SAMPS_S73 } from "./s73";
import { SAMPS_S74 } from "./s74";
import { SAMPS_S75 } from "./s75";
import { SAMPS_S76 } from "./s76";
import { SAMPS_S77 } from "./s77";
import { SAMPS_S78 } from "./s78";
import { SAMPS_S79 } from "./s79";
import { SAMPS_S80 } from "./s80";
import { SAMPS_S81 } from "./s81";
import { SAMPS_S82 } from "./s82";
import { SAMPS_S83 } from "./s83";
import { SAMPS_S84 } from "./s84";
import { SAMPS_S85 } from "./s85";
import { SAMPS_S86 } from "./s86";
import { SAMPS_S87 } from "./s87";
import { SAMPS_S88 } from "./s88";

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
  s54: SAMPS_S54,
  s55: SAMPS_S55,
  s56: SAMPS_S56,
  s57: SAMPS_S57,
  s58: SAMPS_S58,
  s59: SAMPS_S59,
  s60: SAMPS_S60,
  s61: SAMPS_S61,
  s62: SAMPS_S62,
  s63: SAMPS_S63,
  s64: SAMPS_S64,
  s65: SAMPS_S65,
  s66: SAMPS_S66,
  s67: SAMPS_S67,
  s68: SAMPS_S68,
  s69: SAMPS_S69,
  s70: SAMPS_S70,
  s71: SAMPS_S71,
  s72: SAMPS_S72,
  s73: SAMPS_S73,
  s74: SAMPS_S74,
  s75: SAMPS_S75,
  s76: SAMPS_S76,
  s77: SAMPS_S77,
  s78: SAMPS_S78,
  s79: SAMPS_S79,
  s80: SAMPS_S80,
  s81: SAMPS_S81,
  s82: SAMPS_S82,
  s83: SAMPS_S83,
  s84: SAMPS_S84,
  s85: SAMPS_S85,
  s86: SAMPS_S86,
  s87: SAMPS_S87,
  s88: SAMPS_S88,
};

/** Every authored SAMP, including any held back from release. Tests check all of these. */
export const AUTHORED_SAMPS: Samp[] = Object.values(SAMP_BATCHES).flat();
