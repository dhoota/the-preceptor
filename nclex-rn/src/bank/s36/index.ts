import type { Item } from "@/engine/types";
import { PART1 } from "./part1";
import { PART2 } from "./part2";
import { PART3 } from "./part3";
import { PART4 } from "./part4";

/** Batch s36. Stand-alone items. Pharmacological and Parenteral Therapies and Reduction of Risk Potential. */
export const ITEMS: Item[] = [...PART1, ...PART2, ...PART3, ...PART4];
