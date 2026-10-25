/**
 * Items pulled from the shipped bank after independent review. Each stays in
 * its batch file so the batch gates and the review trail keep working, but
 * ITEMS and ALL_ITEMS leave it out, so the app never shows it. A pulled id is
 * not on docs/signoff.json. The reasons are in docs/reviews/<batch>-review.md
 * and docs/SIGNOFF_QUEUE.md.
 */
export const PULLED_IDS: string[] = [
  // s30: repeats rn-s14-44 (sorbitol and diarrhea in tube feeding), with strawman blanks.
  "rn-s30-29",
  // s30: repeats rn-s14-34 (daily kcal from a 1.5 kcal/mL formula).
  "rn-s30-36",
];
