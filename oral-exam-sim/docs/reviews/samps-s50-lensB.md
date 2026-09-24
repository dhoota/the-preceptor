# SAMP review: batch s50 (Shock/dehydration), Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Scope: `src/samps/s50/shock.ts` (shock-16 to shock-47) and `src/samps/s50/review-extra.ts` (shock-48, shock-49). Each SAMP was read question by question against its stem and updates. The Lens A report was not relied on. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s50` prints nothing. `SAMP_BATCH=s50 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 683 passed.

## Important note on review-extra.ts

The Lens A report says it changed the shock-48 q1 key to the QRS and removed an invented lactate from shock-49 q2. When this review started, `review-extra.ts` still had both faults (it was rewritten after the Lens A report was saved). Both are fixed again here.

## Numbers recomputed by script

A script recomputed every number in the batch. All matched the stems except where a fix is listed below.

- Shock index: shock-16, 124 / 96 = 1.29, rounds to 1.3.
- MAP: shock-22 (80/44) 56, shock-23 (82/44) 56.7 rounds to 57, shock-31 (84/46) 58.7 rounds to 59.
- Pediatric SBP limit: shock-25, 70 + 2 x 4 = 78. shock-33, 70 + 2 x 9 = 88.
- Deficit by weight: shock-18, 0.4 kg, 9.5 percent. shock-44, 0.5 kg, 14.3 percent. shock-46, 4 kg, 4.8 percent (8 L is 9.5 percent).
- Deficit by percentage: shock-19, 6 percent of 45 kg = 2 700 mL. 2, 3, 10 and 15 percent give 900, 1 350, 4 500 and 6 750 mL.
- Holliday-Segar: shock-19, 45 kg, 40 + 20 + 25 = 85 mL/hour. 1 to 4 mL/kg give 45, 90, 135, 180.
- Boluses: shock-19 900 mL, shock-21 64 mL (320 mL is 100 mL/kg), shock-25 360 mL (90 mL is 5 mL/kg, 1 000 mL is 55.6 mL/kg), shock-33 300 mL red cells (1 800 mL is 60 mL/kg), shock-44 60 mL, shock-45 300 mL.
- Sepsis fluid: shock-22, 30 x 80 = 2 400 mL. Distractors are 10, 15, 50 and 70 mL/kg. shock-42, 30 mL/kg = 2 100 mL.
- Parkland: shock-30, 3 x 20 x 25 = 1 500 mL. Half over the remaining 7 hours is 107.1 mL/hour. 94 (750 / 8), 63 (1 500 / 24), 47 (750 / 16), 188 (1 500 / 8). Urine target 20 mL/hour.
- WATERFALL: shock-47, 700 mL then 105 mL/hour, aggressive 1 400 mL then 210 mL/hour.
- Doses: epinephrine 0.18 mg (shock-25), bicarbonate 100 mmol = 1.67 mmol/kg in 60 kg (shock-27), PCC 35 units/kg x 58 kg = 2 030 units (shock-32), iron 720 mg = 48 mg/kg, salt 240 mg/kg (shock-45), diltiazem 0.25 mg/kg = 17 mg (shock-43).
- Thresholds: TG18 bilirubin 5 mg/dL = 85.5 umol/L, creatinine 150 umol/L = 1.70 mg/dL, below 2.0 mg/dL (176.8 umol/L) (shock-41).
- Transfusion: shock-33 red cells 10 mL/kg = 300 mL. shock-37 target 70 to 80 g/L from a Hb of 72 g/L.
- Timelines checked: shock-16 (40 then 70 minutes after birth), shock-18 (5 weeks, weights 6 days apart), shock-20 (day 9, duct closure), shock-21 (day 12), shock-22 (norepinephrine for 4 hours), shock-25 (doses 5 minutes apart), shock-30 (1 hour lost), shock-38 (20 then 40 mL/kg, 3 hour transfer), shock-44 (day 6), shock-45 (5 hours). All agree.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| shock-48 (extra) | q1 | correct | Keyed "Bradycardia of 38/minute" while the explanation argues for the QRS of 128 ms and says bradycardia occurs with any beta-blocker. Key changed to index 3. | high |
| shock-49 (extra) | q2 | explanation | Cited "a serum lactate of 7.8 mmol/L seen on the first blood gas", which the case never gives. Sentence removed. | high |
| shock-25 | q4 | options | Keyed "salbutamol 5 mg nebulized" for an 18 kg child. TREKK gives 2.5 mg below 20 kg and 5 mg at 20 kg or more. Changed to 2.5 mg. | high |
| shock-30 | stem | stem | Burns over the front of the chest, abdomen and both arms total about 20 to 22.5 percent on a Lund and Browder chart for a 6-year-old (anterior trunk 13, each arm about 3.5 to 4.75 anterior), not the stated 25 percent that drives every calculation. Added the front of the left thigh (about 4.25 percent), which brings the total to about 25 percent. | medium |
| shock-36 | q1, q2 | stem | The explanations say her ECG "shows no ST elevation" and that she "has taken her usual doses", but the stem said neither. Added "no ST elevation" to the ECG and "she has taken no extra tablets" after her medications. | medium |
| shock-40 | q2, q3 | stem | Both explanations reject vitamin K because he "takes no warfarin", but the stem gave no medication history. Added "He takes no medications." | medium |
| shock-25 | q3 | stem | The explanation rejects glucagon because "he takes none" (beta-blockers), but the stem gave no medication history. Added "takes no daily medications". | medium |
| shock-38 | q2 | options | Distractor "Heart rate still 180/minute" contradicted the update, which gives a pulse of 188/minute. Changed to 188/minute. | medium |
| shock-16 | q1 | explanation | The distractor 1.0 had no reason. Added that 1.0 would need a pulse no faster than her systolic pressure. | low |
| shock-43 | q3 | keyFeature | Mapped to key feature 7 (vasopressor choice), but it tests amiodarone for rate control, which is not a vasopressor. Remapped to key feature 8 (non-fluid therapy). Key feature 7 remains tested by many other items. | medium |
| shock-42 | q1 | options | Keyed option began with a capitalized generic drug name ("Norepinephrine early, cautious fluid"). Lowered to "norepinephrine" per house style. Order and position unchanged. | low |
| shock-19 | q2 | update | The update was 8 words, below the 10 word format floor. Reworded to name the failed oral trial (15 words). | low |

## Key changes

- shock-48 q1 (review-extra): index 0 "Bradycardia of 38/minute" changed to index 3 "QRS duration of 128 ms". The explanation, and the same item in shock-26, support the QRS.
- No key changed in `shock.ts`. shock-25 q4 keeps its key position (salbutamol, index 4), with the dose corrected.

## Sources verified

- TREKK. Physician orders for anaphylaxis in the emergency department. 2023. Salbutamol 2.5 mg if under 20 kg, 5 mg if 20 kg or more. https://cms.trekk.ca/wp-content/uploads/2023/11/2023-03-31-Anaphylaxis-OS-FINAL_v2.1.pdf
- Pediatric Lund and Browder chart (Joint Trauma System form, 2025). Anterior trunk 13 percent, upper arm 4, forearm 3, thigh about 8.5 percent at 5 to 9 years. https://jts.health.mil/assets/docs/forms/PEDIATRIC_LUND_BROWDER_BURN_ESTIMATE_DIAGRAM.pdf
- Other citations were not re-checked under this lens. Lens A verified them.

## Needs physician decision

- shock-48 and shock-49 (review-extra) are near copies of shock-26 and shock-37, with the same stem, title and options. They add nothing to the bank and would fail the near-duplicate stem test if added. Recommend rejecting both.
- shock-30. Please confirm the new burn distribution matches 25 percent on the chart you use, or set the percentage to what the described areas give and recompute q1 and q2.

## Summary

- 34 SAMPs reviewed one by one: 32 in `shock.ts` and 2 in `review-extra.ts`.
- 12 fix rows: 2 wrong numbers (shock-25 salbutamol dose, shock-30 TBSA), 1 wrong key (shock-48), 4 explanation claims not in the case (shock-49 lactate, shock-36, shock-40, shock-25 q3), 1 option contradicting an update (shock-38), 1 missing distractor reason (shock-16), 1 key feature mismatch (shock-43), 2 format fixes (shock-42, shock-19).
- 1 key change (shock-48 q1, extra file).
- Most serious: the wrong key in shock-48 q1, the invented lactate in shock-49 q2 (both were back after the Lens A fix), the adult salbutamol dose for an 18 kg child in shock-25, and a burn percentage in shock-30 that the described areas do not support.
- SAMP ids with a defect: shock-16, shock-19, shock-25, shock-30, shock-36, shock-38, shock-40, shock-42, shock-43, shock-48, shock-49.
