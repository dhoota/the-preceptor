/**
 * Items pulled from the shipped bank after independent review. Each stays in
 * its batch file so the batch gates and the review trail keep working, but
 * ITEMS and ALL_ITEMS leave it out, so the app never shows it. A pulled id is
 * not on docs/signoff.json. The reasons are in docs/reviews/<batch>-review.md
 * and docs/SIGNOFF_QUEUE.md.
 */
export const PULLED_IDS: string[] = [
  // repeats rn-s21-03 and rn-c13-1-2 (adult escort home after anesthesia).
  "rn-s29-19",
  // repeats rn-s04-31 and rn-s04-46 (LPN scope for stable clients).
  "rn-s29-23",
  // repeats rn-s29-25 and rn-s01-36 (OPO call and trained requester).
  "rn-s29-28",
  // repeats rn-s01-21 and rn-c16-4-5 (LPN and aide assignments).
  "rn-s29-30",
  // repeats rn-s02-29 (competence shown by performance).
  "rn-s29-50",
  // repeats rn-s14-44 (sorbitol and diarrhea in tube feeding), with strawman blanks.
  "rn-s30-29",
  // repeats rn-s14-34 (daily kcal from a 1.5 kcal/mL formula).
  "rn-s30-36",
  // near copy of rn-s37-40 (exercise-associated hyponatremia bow-tie). Both pulled.
  "rn-s31-47",
  // keyed advice to stand still conflicts with AAP advice to back away slowly.
  "rn-s32-49",
  // repeats rn-s11-47 (support group against caregiver strain).
  "rn-s33-33",
  // keyed option was reworded in review, a key change that needs approval.
  "rn-s33-44",
  // repeats rn-s09-47 (pinna position by age).
  "rn-s34-02",
  // repeats rn-s21-35 (shivering works against cooling).
  "rn-s34-42",
  // keyed option was rewritten in review, a key change that needs approval.
  "rn-s35-28",
  // repeats rn-s17-29 (ototoxicity from two drugs).
  "rn-s35-35",
  // repeats rn-s15-21, rn-c09-2-5 and rn-c19-3-5 (mcg/kg/minute to mL/hour).
  "rn-s35-50",
  // repeats rn-s24-26 (spontaneous bacterial peritonitis by neutrophil count).
  "rn-s36-26",
  // repeats rn-c06-4-2 and rn-s22-33 (SIADH after pituitary surgery).
  "rn-s36-45",
  // uses nearly the same diabetes insipidus data as rn-s25-12.
  "rn-s36-46",
  // fully rewritten in review, not a contained fix.
  "rn-s36-47",
  // near copy of rn-s31-47 (exercise-associated hyponatremia bow-tie). Both pulled.
  "rn-s37-40",
  // repeats rn-s25-06 and rn-c02-1 (Trousseau sign).
  "rn-s37-47",
  // repeats rn-s06-47 and rn-s05-46 (telemetry electrode care).
  "rn-s37-50",
  // repeats rn-c15-1-2 (autonomic dysfunction in Guillain-Barre).
  "rn-s38-01",
  // repeats rn-s25-12 (diabetes insipidus findings, near identical values).
  "rn-s38-05",
  // repeats rn-s25-12 and rn-s22-33 (DI and SIADH patterns).
  "rn-s38-06",
  // repeats rn-s24-32 (bleeding precautions).
  "rn-s38-24",
  // near copy of rn-s23-13 (pericarditis presentation).
  "rn-s38-26",
  // keyed option was reworded in review, a key change that needs approval.
  "rn-s38-36",
  // repeats rn-s09-18 (newborn respiratory distress versus acrocyanosis).
  "rn-s38-46",
];
