import { decodedBank } from "@/bank/decode";
import type { CaseStudy, Item } from "@/engine/types";

/**
 * The bank the app runs on. Always the shipped bank, except in the dev
 * server, where ?seed=1 may swap in a demo bank while the real one is small.
 *
 * The shipped bank comes from the obfuscated snapshot (src/bank/decode.ts),
 * not a direct import of src/bank/**: that keeps the per-batch item/case
 * text out of the production JS bundle. src/bank/** (plaintext) stays the
 * source of truth for the content pipeline and for tests, which read it
 * directly.
 */
export interface Bank {
  items: Item[];
  cases: CaseStudy[];
  demo: boolean;
}

const shipped = decodedBank();
let current: Bank = { items: shipped.items, cases: shipped.cases, demo: false };

export const getBank = (): Bank => current;

export function setBank(b: Bank): void {
  current = b;
}
