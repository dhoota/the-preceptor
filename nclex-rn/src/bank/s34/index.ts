import type { Item } from "@/engine/types";
import { PART1 } from "./part1";
import { PART2 } from "./part2";
import { PART3 } from "./part3";

/** Batch s34. Stand-alone items. Basic Care and Comfort and Pharmacological and Parenteral Therapies. */
export const ITEMS: Item[] = [...PART1, ...PART2, ...PART3];
