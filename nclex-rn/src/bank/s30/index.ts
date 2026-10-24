import type { Item } from "@/engine/types";
import { PART1 } from "./part1";
import { PART2 } from "./part2";
import { PART3 } from "./part3";

/** Batch s30. Stand-alone items. Management of Care and Safety and Infection Prevention and Control. */
export const ITEMS: Item[] = [...PART1, ...PART2, ...PART3];
