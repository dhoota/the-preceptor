import { CASES, ITEMS } from "@/bank";
import type { CaseStudy, Item } from "@/engine/types";

/**
 * The bank the app runs on. Always the shipped bank, except in the dev
 * server, where ?seed=1 may swap in a demo bank while the real one is small.
 */
export interface Bank {
  items: Item[];
  cases: CaseStudy[];
  demo: boolean;
}

let current: Bank = { items: ITEMS, cases: CASES, demo: false };

export const getBank = (): Bank => current;

export function setBank(b: Bank): void {
  current = b;
}
