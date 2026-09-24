import type { Item } from "@/engine/types";
import { PART1 } from "./part1";
import { PART2 } from "./part2";
import { PART3 } from "./part3";
import { PART4 } from "./part4";
import { PART5 } from "./part5";

/** Batch s17. Stand-alone items. Pharmacological and Parenteral Therapies. */
export const ITEMS: Item[] = [...PART1, ...PART2, ...PART3, ...PART4, ...PART5];
