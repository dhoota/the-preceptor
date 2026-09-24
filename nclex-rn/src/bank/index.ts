import type { CaseStudy, Item } from "@/engine/types";
import { ITEMS as S01 } from "./s01";
import { ITEMS as S02 } from "./s02";
import { ITEMS as S03 } from "./s03";
import { ITEMS as S04 } from "./s04";
import { ITEMS as S05 } from "./s05";
import { ITEMS as S06 } from "./s06";
import { ITEMS as S07 } from "./s07";
import { ITEMS as S08 } from "./s08";
import { ITEMS as S09 } from "./s09";
import { ITEMS as S10 } from "./s10";
import { ITEMS as S11 } from "./s11";
import { ITEMS as S12 } from "./s12";
import { ITEMS as S13 } from "./s13";
import { ITEMS as S14 } from "./s14";
import { ITEMS as S15 } from "./s15";
import { ITEMS as S16 } from "./s16";
import { ITEMS as S17 } from "./s17";
import { ITEMS as S18 } from "./s18";
import { ITEMS as S19 } from "./s19";
import { ITEMS as S20 } from "./s20";
import { ITEMS as S21 } from "./s21";
import { ITEMS as S22 } from "./s22";
import { ITEMS as S23 } from "./s23";
import { ITEMS as S24 } from "./s24";
import { ITEMS as S25 } from "./s25";
import { ITEMS as S26 } from "./s26";
import { ITEMS as S27 } from "./s27";
import { ITEMS as S28 } from "./s28";
import { CASES as C01 } from "./c01";
import { CASES as C02 } from "./c02";
import { CASES as C03 } from "./c03";
import { CASES as C04 } from "./c04";
import { CASES as C05 } from "./c05";
import { CASES as C06 } from "./c06";
import { CASES as C07 } from "./c07";
import { CASES as C08 } from "./c08";
import { CASES as C09 } from "./c09";
import { CASES as C10 } from "./c10";
import { CASES as C11 } from "./c11";
import { CASES as C12 } from "./c12";
import { CASES as C13 } from "./c13";
import { CASES as C14 } from "./c14";
import { CASES as C15 } from "./c15";
import { CASES as C16 } from "./c16";
import { CASES as C17 } from "./c17";
import { CASES as C18 } from "./c18";
import { CASES as C19 } from "./c19";
import { CASES as C20 } from "./c20";

/** Stand-alone items by batch. */
export const ITEM_BATCHES: Record<string, Item[]> = { s01: S01, s02: S02, s03: S03, s04: S04, s05: S05, s06: S06, s07: S07, s08: S08, s09: S09, s10: S10, s11: S11, s12: S12, s13: S13, s14: S14, s15: S15, s16: S16, s17: S17, s18: S18, s19: S19, s20: S20, s21: S21, s22: S22, s23: S23, s24: S24, s25: S25, s26: S26, s27: S27, s28: S28 };

/** Case studies by batch. */
export const CASE_BATCHES: Record<string, CaseStudy[]> = { c01: C01, c02: C02, c03: C03, c04: C04, c05: C05, c06: C06, c07: C07, c08: C08, c09: C09, c10: C10, c11: C11, c12: C12, c13: C13, c14: C14, c15: C15, c16: C16, c17: C17, c18: C18, c19: C19, c20: C20 };

export const ITEMS: Item[] = Object.values(ITEM_BATCHES).flat();
export const CASES: CaseStudy[] = Object.values(CASE_BATCHES).flat();

/** Every item, stand-alone and inside case studies. */
export const ALL_ITEMS: Item[] = [...ITEMS, ...CASES.flatMap((c) => c.items)];
