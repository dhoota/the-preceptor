# Review of batch s49 (Seizures), Lens B: internal consistency and numbers

Reviewer lens: B (internal consistency and numbers). Scope: `src/samps/s49/seizures.ts` (seizures-16 to seizures-47) and `src/samps/s49/review-extra.ts` (seizures-48 and seizures-49). I checked every SAMP myself, one at a time, and did not rely on the Lens A report. Every SAMP stays `reviewed: false`.

Checks after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s49` shows no errors. `SAMP_BATCH=s49 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (651 tests). No em or en dashes or semicolons in any string in either file.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| seizures-48 (extra) | q1 | correct | Key was still index 2, "IV magnesium sulfate bolus", while the explanation teaches calcium and rejects magnesium (magnesium 0.80 mmol/L is normal). The Lens A report says this was fixed, but the file still held the wrong key. Changed to index 0 | high |
| seizures-49 (extra) | q2 | explanation | The invented sentence "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" was still in the file, although the Lens A report says it was removed. No lactate or blood gas is in the case. Removed | high |
| seizures-27 | q4 | stem | Explanation rejects tocolysis because "She has no contractions", but the stem never said so. Added "and she has no contractions" to the stem | medium |
| seizures-34 | q3 | stem | Explanation counts "two unprovoked seizures more than 24 hours apart", but the stem said only "one seizure afterward" after surgery, which could have been an early postoperative (provoked) seizure. Stem now says the seizure came 6 months after surgery, so the count holds | medium |
| seizures-41 | q3 | options, explanation | Osmolality given in mOsm/kg. SI units are required (spec section 10), and the rest of the bank and Diabetes Canada use mmol/kg. Changed to mmol/kg. Arithmetic rechecked: 2 x 142 + 42 = 326, plus urea 18 = 344, 2 x 142 = 284, doubling glucose gives 368 | medium |
| seizures-44 | q3 | explanation | "A brisk water diuresis after stopping the thiazide" relied on a stop that the case never describes. Now "as the thiazide effect wears off" | low |
| seizures-21 | q2 | stem | Explanation says tests are guided by vomiting, dehydration, a focal deficit or failure to return to baseline, "and she has none". The stem did not mention vomiting. Added "She has had no vomiting or fever" | low |
| seizures-47 | q2 | explanation | "Cortical visual loss" goes further than the stem, which says only that she cannot count fingers (no pupil or fundus findings). Now "visual loss on a calcineurin inhibitor" | low |
| batch | none | `S` constants | `S.hirtz` and `S.acep24` were cited by no SAMP. Removed. Every other constant is cited, and every SAMP's `sources` list matches the ids its questions cite exactly | high |

## Key changes

- seizures-48 q1 (review-extra only): before index 2 "IV magnesium sulfate bolus", after index 0 "IV calcium gluconate with monitoring". The update gives ionized calcium 0.72 mmol/L and magnesium 0.80 mmol/L (normal), and the explanation already taught calcium. The Lens A report records this change, but it was not present in the file I reviewed.

No key changed in `seizures.ts`.

## Numbers recomputed by script

All doses below were recomputed with a script from the weight in the vitals. All match the stem, options and explanations.

- Levetiracetam 60 mg/kg: 16 (60 kg) 3 600 mg. 17 (82 kg) 4 920, capped at 4 500 mg. 23 (13 kg) 780 mg, under the TREKK 3 000 mg maximum. 27 (72 kg) 4 320 mg, under 4 500. 41 (76 kg) 4 560, capped at 4 500. 44 (52 kg) 3 120 (distractor 3 000). 46 (21 kg) 1 260 mg. 20 (74 kg) 4 440 (distractor 4 500, a plausible wrong dose).
- Fosphenytoin 20 mg PE/kg: 16 1 200 mg PE (300 mg PE underdose). 17 1 640, capped at 1 500. 18 (55 kg) 1 100. 19 (85 kg) 1 700, capped at 1 500. 23 130 mg PE = 10 mg PE/kg, half the load. 27 360 mg PE = 5 mg PE/kg, a quarter. 30 (64 kg) 1 280. 38 (75 kg) 1 500, and 300 mg PE = 4 mg PE/kg. 39 (90 kg) 1 800, capped. Phenytoin 32 (80 kg) 1 600 mg, 20 (74 kg) 1 480 (option 1 500).
- Valproic acid 40 mg/kg: 27 2 880 mg. Valproate levels in 28: 480 umol/L = 69 mg/L (therapeutic), 95 umol/L = 14 mg/L.
- Benzodiazepines: 18 lorazepam 0.1 mg/kg = 5.5 mg, so the 4 mg maximum applies. 23 lorazepam 1.3 mg, 4 mg is 3.1 times her dose, rectal diazepam 0.5 mg/kg = 6.5 mg, intranasal midazolam 2.5 mg close to 0.2 mg/kg (2.6 mg). 29 intranasal midazolam 5 mg for 40 kg is below 0.2 mg/kg (8 mg), acceptable as a home rescue dose and not tested.
- Phenobarbital 20 mg/kg: 23 260 mg, and 60 mg = 4.6 mg/kg.
- Other: 18 bupropion 20 x 300 = 6 000 mg. 19 amitriptyline 60 x 50 = 3 000 mg, bicarbonate 1 to 2 mmol/kg = 85 to 170 mmol (key 150). 38 GCS E1 V2 M4 = 7, mannitol 75 g = 1 g/kg. 43 mannitol 60 g and enoxaparin 60 mg = 1 per kg for 60 kg. 46 hydroxocobalamin 70 mg/kg and sodium nitrite 6 mg/kg (distractors).
- Sodium (44): 112 to 118 in 2 hours is a rise of 6. 112 to 140 is 28. Target 5 in the first hour and limit 10 (or 8) in 24 hours are consistent with the named 2014 European guideline. A 150 mL bolus of 3% saline raises sodium by about 2.5 mmol/L by the Adrogue formula, consistent with "repeated as needed".
- Calcium (26 and 48): ionized 0.72 mmol/L below the stated 1.10 to 1.30, magnesium 0.80 mmol/L normal.
- Glucose and osmolality (41): as in the table. Beta-hydroxybutyrate 0.4 and bicarbonate 22 fit the stated absence of ketoacidosis.
- Timelines checked: 16, 17 (45 minutes, drugs in order), 20 (day 6 postpartum, 3 days of headache), 22, 23 (18 minutes, midazolam 8 minutes ago, one prior dose), 25 (06:00, 20 minutes confused, 2 hours later), 28 (discharged 5 days ago on ertapenem), 29 (7 minutes to rescue), 30 (25 + 5 = 30 minutes, then 10 more), 34 (50 minutes, 90 minutes later), 36 (7 weeks on the pill), 37 (07:00, 3 hours of sleep), 42 (discharged 5 days ago, 2 days of confusion), 44, 47. All agree.

## Sources verified

- Sabers 2003, Neurology (PMID 12939444): lamotrigine 13 umol/L with oral contraceptives versus 28 umol/L without, a fall of more than 50%, as seizures-36 q1 states. https://pubmed.ncbi.nlm.nih.gov/12939444/
- Other sources were verified by the Lens A reviewer. I checked only that each citation names a body or author, a work and a year, and that every listed source is cited.

## Needs physician decision

- seizures-48 and seizures-49 (review-extra) are exact copies of seizures-26 and seizures-37 (stem, options and explanations). Even with the fixes above, they should be dropped, not added.
- seizures-16 q3 update: lorazepam 2 mg for 60 kg is 0.03 mg/kg, a third of the status dose the batch teaches elsewhere (0.1 mg/kg, maximum 4 mg). No lorazepam option is offered, so the key holds, but a physician may prefer 4 mg in the update for consistency. Low confidence.
- Key feature mapping, low confidence: seizures-20 q4, 33 q3 and 43 q1 test starting an antiseizure drug after a seizure has stopped, but are mapped to key feature 4 (ongoing seizures). No key feature fits exactly. Left as is.
- seizures-30 q2 remains the item Lens A flagged (observation with EEG over a further benzodiazepine). The numbers (25 + 5 = 30 minutes, O2 sat 99%) are internally consistent.

## Summary

- 34 SAMPs checked (32 in the batch and 2 extras). 9 fixes across 8 SAMPs plus the source list. One key change, in a review-extra SAMP.
- Fixes by category: wrong key 1 (48 q1), invented fact in an explanation 1 (49 q2), explanation claim not in the stem 5 (21 q2, 27 q4, 34 q3, 44 q3, 47 q2), units 1 (41 q3), unused source constants 1 (hirtz and acep24 removed).
- Most serious errors: the magnesium key in seizures-48 q1 and the invented lactate in seizures-49 q2. The Lens A report lists both as fixed, but neither fix was in the file. Next, the unstated "no contractions" in seizures-27 q4 and the uncountable "two unprovoked seizures" in seizures-34 q3.
- Every weight based dose, maximum, sodium rate, calcium, glucose and osmolality value and timeline in the batch was recomputed and is correct apart from the items above.
- SAMP ids with a defect: seizures-21, seizures-27, seizures-34, seizures-41, seizures-44, seizures-47, seizures-48, seizures-49.
