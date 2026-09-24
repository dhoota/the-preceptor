# Format conformance: batch s16 (seizures, shock)

Scope: `src/samps/s16/seizures.ts` and `src/samps/s16/shock.ts`, 30 SAMPs signed off by Arjan Dhoot, MD. Format only. No answer was changed. Every `correct` index was remapped to the same option text, and no `required`, `accept` or `unacceptable` entry was touched. Menu `correct` arrays keep their original order.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s16` gives no output.
- `CONFORM=s16 SAMP_BATCH=s16 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts` gives 469 passed and 6 failed. All 6 are the expected "keeps its keys" failures for the keyed option rewordings listed below (seizures-09, seizures-13, shock-02, shock-03, shock-13, shock-14). With those 7 edits added to `docs/conformance-key-edits.json` in a scratch copy, all 475 tests pass.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 111 |
| Options added | 0 |
| Options removed | 6 |
| Options reworded (distractors) | 44 |
| Keyed options reworded | 7 (6 questions) |
| Stems changed | 30 |
| SAMPs with vitals moved to the `vitals` field | 30 |
| Patient names removed | 0 (none present) |
| Citations completed | 9 |
| Citations replaced | 1 |

Options removed (single questions with 6 options, weakest distractor out, none named in the explanation): seizures-02 q1 "Phenobarbital 300 mg IM", seizures-12 q3 "Skull X-ray", shock-03 q3 "D5W", shock-07 q1 "Salbutamol 5 mg nebulized", shock-08 q2 "Phenylephrine", shock-12 q4 "Vasopressin".

Other format edits: ages hyphenated, °C for every temperature, "/minute" for rates, "mmHg" added to blood pressures in stems and updates, a space as the thousands separator in options and explanations (1 000 mg, 3 000 mg, 2 000 units), "ED" written in full in stems and single prompts.

## Key position across the 18 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 17 | 0 | 1 | 0 | 0 |
| After | 2 | 4 | 4 | 4 | 4 |

The key is the single longest option in 4 of 18 single questions after the pass (22 percent).

## Keyed option rewordings

| SAMP | Question | Before | After |
|---|---|---|---|
| seizures-09 | q1 (menu) | Neuroimaging, CT in the ED or early outpatient MRI | Neuroimaging, CT or early MRI |
| seizures-09 | q3 | It is not routinely needed after a single unprovoked seizure with a normal exam | Not routinely needed after a single unprovoked seizure |
| seizures-13 | q2 | CT head because this is his first seizure and he has a head abrasion | CT head in the emergency department |
| shock-02 | q3 | Normal saline or Ringer's lactate 120 mL as a rapid bolus | Normal saline or Ringer's lactate 120 mL rapid bolus |
| shock-03 | q4 (menu) | Norepinephrine by peripheral IV, titrated to a MAP of 65 mmHg | Norepinephrine by peripheral IV, titrated to MAP 65 mmHg |
| shock-13 | q2 | Transfuse red cells now, targeting a hemoglobin of 70 to 90 g/L, and more if bleeding continues | Red cells to 70 to 90 g/L, more if bleeding |
| shock-14 | q1 | Normal saline or Ringer's lactate 500 mL bolus, then reassess | Normal saline or Ringer's lactate 500 mL bolus then reassess |

Why each changed:

- seizures-09 q1. The menu spread rule (longest at most 2.6 times the shortest) cannot hold with a 50 character key beside "Serum sodium" (12). The explanation already says CT in the ED or early MRI.
- seizures-09 q3. Over 60 characters. "With a normal exam" moved into the prompt ("Given his normal examination, which of the following ...").
- seizures-13 q2. Over 60 characters and held reason text. The reason moved to the explanation, which now adds "He has both a first seizure and a head abrasion."
- shock-02 q3 and shock-14 q1. The original keys were 11 words and 61 characters. The limits are 10 words and 60 characters.
- shock-03 q4. Over 60 characters. The distractors now use the same "by peripheral IV, titrated to MAP 65 mmHg" pattern.
- shock-13 q2. 95 characters. The 10 word limit forced "now" into the prompt ("the most appropriate immediate transfusion approach"). "More if bleeding" stands for "more if bleeding continues". Please confirm this reads the same to you.

## Citation changes

| SAMP source id | Change | Verification |
|---|---|---|
| goldfrank | Added editors, 11th ed., 2019 | https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html |
| dc-hypo | Now Yale JF, Paty B, Senior PA. Hypoglycemia. Can J Diabetes. 2018 | https://guidelines.diabetes.ca/GuideLines/media/Docs/cpg/Ch14-Hypoglycemia.pdf |
| cma-driver | Added 2023 (10th edition) | https://driversguide.ca/sites/default/files/2023-12/CMA-Drivers-Guide-10th-edition-English-FINAL.pdf |
| cps-hsv | Now Allen UD, Robinson JL. Paediatr Child Health. 2014 | https://pubmed.ncbi.nlm.nih.gov/24855418/ |
| rosen (both files) | Added 10th ed., 2023 | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| trekk-ge | Title corrected to "Gastroenteritis", Version 5.0, 2025, URL added | https://trekk.ca/resources/bottom-line-recommendations-gastroenteritis |
| cps-ort | Now Leung A, Prince T. Paediatr Child Health. 2006 | https://academic.oup.com/pch/article/11/8/527/4560375 |
| tc-doac | Added 2024 (date of version 5 February 2024 in the PDF) | https://thrombosiscanada.ca/clinical_guides/pdfs/MANAGEMENTOFBLEEDINGINPATIENTS_75.pdf |
| trekk-fs (replaced) | Could not verify a TREKK febrile seizures bottom line document. The trekk.ca URL returns 404 and the topic page lists no BLR. Replaced by AAP. Febrile seizures. Clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008 (new id `aap-fs-long`, cited by seizures-11 q1, q3, q4) | https://pubmed.ncbi.nlm.nih.gov/18519501/ |

Already complete and left alone: hta (1990 statute), who-neo (2011) and all other sources with a year.

## Needs physician decision

1. O2 saturation with no stated oxygen source. In 17 stems (seizures-05, 06, 07, 08, 09, 10, 11, 13, 14, 15 and shock-02, 04, 05, 10, 11, 13, 14) the original gave "SpO2 NN%" with no route. The CFPC vitals format needs "on room air" or "on ...", and adding "room air" would invent a fact. These values stay in the stem as "Her O2 sat is NN%." All other vitals moved. Please confirm room air, or give the source, so these can move to the vitals list.
2. shock-13 q2 key wording (see above). "Red cells to 70 to 90 g/L, more if bleeding" with "immediate" in the prompt.
3. seizures-11. The replacement AAP 2008 source supports the simple febrile seizure definition, no prophylaxis and antipyretics not preventing recurrence. It does not give the acetaminophen 15 mg/kg and ibuprofen 10 mg/kg doses in q3. A Canadian source for those doses would be stronger.
4. seizures-02 q1 explanation says "7.5 mg is a buccal dose, not an intranasal one." For a 3-year-old the usual buccal midazolam dose is 5 mg. The distractor is still wrong (0.5 mg/kg, over the 0.2 mg/kg dose), but the stated reason may not be accurate. Left unchanged.
5. seizures-01 stem. "Estimated weight 80 kg" became vitals weight "80 kg" plus the stem sentence "His weight is an estimate." Please confirm this keeps the intent.
6. shock-01 stem. "Today he weighs 10.0 kg" moved to vitals weight "10.0 kg". The stem keeps "He was 10.6 kg at a clinic visit last week." The deficit answer (600 mL) still follows.
