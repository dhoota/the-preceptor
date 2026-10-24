import type { Item } from "@/engine/types";
import { PART1 } from "./part1";
import { PART2 } from "./part2";
import { PART3 } from "./part3";

/** Batch s35. Stand-alone items. Pharmacological and Parenteral Therapies. */
export const ITEMS: Item[] = [...PART1, ...PART2, ...PART3];
