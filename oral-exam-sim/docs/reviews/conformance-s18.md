# Format conformance: batch s18 (toxicology)

Batch s18 holds 15 SAMPs (tox-01 to tox-15) in `src/samps/s18/tox.ts`. The physician signed off these SAMPs on 24 September 2026. This pass changed format only. No answer changed. Every `correct` index was remapped to the same keyed text after reordering, and the script check below confirms it. `required`, `accept` and `unacceptable` are untouched in every write-in question.

## Checks

- `npx tsc --noEmit -p . | grep samps/s18`: no errors.
- `CONFORM=s18 SAMP_BATCH=s18 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 260 passed, 11 failed. All 11 failures are the expected "keeps its keys" test for the 11 SAMPs with a reworded keyed option (tables below). Nothing else fails.
- Other agents were editing other batches at the same time. Two runs broke while the bank loaded ("Cannot read properties of undefined"). This came from files outside s18. A rerun was clean.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 69 of 69 (51 write-in, 18 single or menu) |
| Prompt lead sentences moved into `update` | 4 (tox-04 q4, tox-11 q5, tox-12 q4, tox-12 q5) |
| Options added or removed | 0 (all 15 singles already had 5 options, menus have 8 and 7) |
| Options reworded | 61 of 98 |
| Keyed options reworded | 14, in 11 SAMPs |
| Explanations updated | 16 |
| Stems changed | 15 |
| Vitals moved to the `vitals` field | 15 SAMPs (weight moved too, except the son's weight in tox-12, which stays in the stem) |
| Names removed | 0 (none were present) |
| Citations completed | 3 |
| Citations replaced | 0 |

## Key position across the 15 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 3 | 8 | 4 | 0 | 0 |
| After | 3 | 4 | 3 | 2 | 3 |

No position now holds more than 4 of 15 keys (27 percent). The key is now the single longest option in 4 of 15 single questions, down from 13 of 15.

## Keyed option rewordings

Each rewording keeps the same answer. Detail that no longer fit within 60 characters and 10 words moved to the explanation, which now states it in full.

| SAMP | Question | Before | After |
|---|---|---|---|
| tox-01 | q2 | A full 300 mg/kg IV course over about 21 hours, as 150 mg/kg over 1 hour, 50 mg/kg over 4 hours and 100 mg/kg over 16 hours, or the equivalent 2 bag regimen, reassessed at the end | Acetylcysteine 300 mg/kg IV over about 21 hours |
| tox-02 | q3 | Give a sodium bicarbonate bolus, intubate with the most experienced operator, and set a high minute ventilation to match his pre intubation PCO2 | Bicarbonate bolus, expert operator, high minute ventilation |
| tox-03 | q3 | Physostigmine is contraindicated because of the wide QRS and risk of asystole in tricyclic poisoning | Physostigmine is contraindicated here |
| tox-04 | q4 | Regular insulin infusion starting at 1 unit/kg/h, titrated upward to effect | Regular insulin 1 unit/kg/h infusion, titrated upward |
| tox-05 | q3 | 1 to 2 vials IV over 30 minutes, then reassess and repeat if needed | 1 to 2 vials IV over 30 minutes, then reassess |
| tox-05 | q4 | Empiric digoxin immune Fab, a larger dose given rapidly, with pads applied | Empiric Fab, larger dose given rapidly, pads applied |
| tox-08 | q1 | Bag valve mask ventilation with oxygen, and naloxone 0.04 to 0.1 mg IV repeated every 2 to 3 minutes, titrated to adequate breathing | Bag-mask ventilation, titrated naloxone 0.04 to 0.1 mg IV |
| tox-08 | q4 | Once he has objective moderate withdrawal, for example a COWS score of about 12 or more | Once in objective moderate withdrawal, COWS about 12 or more |
| tox-11 | q4 | Physostigmine 0.5 to 1 mg IV given slowly over at least 5 minutes, repeated after 10 to 15 minutes if needed, with atropine at the bedside | Physostigmine 0.5 to 1 mg IV slowly over 5 minutes |
| tox-12 | q3 | High flow oxygen by non rebreather mask and urgent discussion with a hyperbaric centre about transfer | Non-rebreather oxygen, urgent call to a hyperbaric centre |
| tox-13 | q3 | Whole bowel irrigation with polyethylene glycol at about 500 mL per hour by nasogastric tube | Whole bowel irrigation, about 500 mL/hour by NG tube |
| tox-13 | q5 | 15 mg/kg/h IV infusion, starting slower and titrating up to limit hypotension, usually for no more than 24 hours | Up to 15 mg/kg/hour IV, usually 24 hours or less |
| tox-14 | q4 | Admit with frequent glucose checks, continuing observation for at least 12 to 24 hours after octreotide is stopped | Admit, observe at least 12 to 24 hours after octreotide |
| tox-15 | q3 | Diazepam 10 to 20 mg IV every 5 to 10 minutes, titrated until he is calm but rousable | Diazepam 10 to 20 mg IV, repeated until calm |

Keyed options kept word for word: tox-04 q4 bolus, tox-06 q1, tox-07 q2, tox-09 q3 (both keys), tox-10 q2 (all three keys). In tox-09 q3 two distractors gained "once" so the sublingual nitroglycerin key could keep its full wording.

## Citation changes

| Source id | Before | After | Verification |
|---|---|---|---|
| goldfrank | Nelson LS, Howland MA, Lewin NA, et al, editors. Goldfrank's Toxicologic Emergencies. McGraw Hill. | Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. | https://store.ashp.org/Default.aspx?TabID=251&productId=870407286 (11th edition, 2019, ISBN 978-1-25985-961-8) |
| uhms | Undersea and Hyperbaric Medical Society. Hyperbaric oxygen therapy indications. Carbon monoxide poisoning. | Huang ET, editor. UHMS Hyperbaric Medicine Indications Manual. 15th ed. Undersea and Hyperbaric Medical Society. 2023. Chapter: carbon monoxide poisoning. | https://uhms.org/images/indications/UHMS%20Indications%2015th%20Ed%20Front%20Matter%20and%20References.pdf (copyright page: "Copyright © 2023 Undersea and Hyperbaric Medical Society") |
| cag | Centre antipoison du Québec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. | Same, plus "Online edition. Accessed 24 September 2026." and url https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes | The guide is a continuously updated online and app resource with no edition year. The Ontario Poison Centre 2025 stocking guideline cites it by this title and URL. See the note below. |

The other 18 citations already had an author or body, a work and a year. I checked them against what I know of the literature and changed none.

## Other format changes

- Stems: ages hyphenated, vitals and patient weight moved to `vitals` in CFPC formats. Every value is kept exactly. tox-03 oxygen reads "95% on 4 L/minute by nasal prongs". tox-05 pulse reads "42/minute regular". In tox-04, "HR 58 sinus" became "58/minute", and the stem still says "ECG shows sinus rhythm". In tox-12 the vitals are the mother's, and the stem now says "The vital signs below are the mother's."
- tox-01 q4 update: "45 year old" became "45-year-old".
- Options: alphabetical, "No ..." last, numbers low to high in tox-05 q3 (0.5, 1 to 2, 10, 20 vials). Reason text moved out of options into explanations (for example "as in DKA", "to avoid alkalemia", "because of her age"). "Never in the ED. Refer to an outpatient clinic" became "No ED dose, refer to an outpatient clinic" to drop the absolute word and the final period.
- Some distractors were lengthened for parity with plausible but still wrong detail: "Esmolol IV bolus, then infusion", "Metoprolol 5 mg IV every 5 minutes", "Furosemide 40 mg IV once", "Ketorolac 15 mg IV once", "Methylene blue 1 mg/kg IV over 5 minutes", "Calcium gluconate 3 g IV as a bolus", "Activated charcoal 1 g/kg orally or by nasogastric tube", "Whole bowel irrigation with polyethylene glycol" (the lithium distractor), and the Fab distractors ending "then reassess".

## Needs physician decision

1. Review the 14 keyed option rewordings above. The ones that lose the most detail from the option itself (the detail is now in the explanation):
   - tox-11 q4: "over at least 5 minutes" became "slowly over 5 minutes". The repeat dose and atropine at the bedside are in the explanation only.
   - tox-15 q3: the 5 to 10 minute interval and the "calm but rousable" target are in the explanation only.
   - tox-12 q3: "high flow" and "about transfer" are in the explanation only.
   - tox-02 q3: "to match his pre intubation PCO2" is in the explanation only.
   - tox-13 q5: "usually for no more than 24 hours" became "usually 24 hours or less". The slower start is in the explanation.
2. Canadian Antidote Guide citation. I could find no publication or edition year. The citation now uses an access date. Please accept this form, or name a dated alternative.
3. Goldfrank's 12th edition (Hoffman RS, Biary R, Gosselin S, et al, copyright 2027) is listed by McGraw Hill. I cited the 11th edition (2019), which matches the current author list. Consider updating once you have checked the 12th edition content.
4. New explanation sentences carry the reasons moved out of distractors. Please confirm they are accurate: tox-02 q3 (stopping bicarbonate removes protection, furosemide delay wastes time), tox-04 q4 (the DKA rate and the 10 unit hyperkalemia dose are far too low), tox-05 q3 (age is not a reason for half a vial), tox-07 q2 (furosemide is not a substitute for dialysis).
5. Units. SAMP_SPEC section 10 asks for "umol/L" or "micromol/L" in place of µmol/L. The micro sign stays in stems, updates and explanations because the signed-off write-in `accept` text uses it (tox-01 q3 and q4, tox-13 q4) and cannot change. Four digit values (1000, 1450, 6400) have no thousands space, and the one five digit value already has one ("20 000").
6. Clinical content: I found no clinical errors. I rechecked the osmolal gap (297, gap 34), the anion gap (33), the Fab dose (about 1.7 vials), the iron dose (48 mg/kg) and the acetaminophen timing.

## Not done (outside this brief or outside `src/samps/s18/`)

- `docs/conformance.json` and `docs/conformance-key-edits.json` are not updated. The orchestrator logs the keyed edits.
- Stem openings ("presents to the emergency department") and "ED" in place of "emergency department" were left as they were. The brief does not list them.
