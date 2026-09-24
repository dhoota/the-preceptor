# SAMP review. Batch s27, CVA. Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Scope: all 32 SAMPs in `src/samps/s27/cva.ts` (cva-16 to cva-47) and the 2 SAMPs in `src/samps/s27/review-extra.ts` (cva-48 and cva-49). Each SAMP was read on its own, every explanation sentence against its stem and updates. The Lens A report was not relied on. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| cva-48 (extra) | q1 | correct | Keyed index 2 "Left middle cerebral artery" while the explanation argues for the left ACA and against the MCA. The Lens A report says this was fixed, but the file on disk still held the wrong key. Key set to index 0 "Left anterior cerebral artery" | high |
| cva-49 (extra) | q2 | explanation | Invented fact. "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" is in no stem or update and has no bearing on thrombectomy. The Lens A report says it was removed, but it was still on disk. Sentence removed | high |
| cva-44 | q1 | stem, explanation | The explanation rejects orthostatic presyncope because he "had no presyncope". The stem never said so, and the episodes came on standing quickly, so the claim carried the distractor. Stem now says he did not feel faint. Explanation reworded to match | medium |
| cva-19 | q1 | prompt | Lead-in asked for a finding "in her arm examination", but three options (face, speech, plantar responses) are not arm findings. Now "Which of the following examination findings ..." | medium |
| cva-30 | q2 | update | "His GCS falls from 15 to 11". The stem gives expressive aphasia at baseline, so a verbal score of 5 and a GCS of 15 were never given or consistent. Now "becomes drowsy with a GCS of 11" | medium |
| cva-23 | q1 | stem | The explanation rejects Dix-Hallpike because it "does not fit constant symptoms". The stem said only "sudden dizziness". Added "constant" to the stem | medium |
| cva-18 | q4 | explanation | "In the largest case series" is not supported by the cited abstract. Now "In a series of 153 patients", and the 69% is stated as a share of episodes with a recorded end time, as in the source (91 of 131) | low |
| cva-42 | q2 | explanation | The distractor "ASA and clopidogrel for 21 days" had no reason given in this question. Added that dual antiplatelet therapy is for non-cardioembolic TIA and protects less than anticoagulation in atrial fibrillation | low |
| cva-36 | q4 | explanation | "She is not in labour" was not in the stem. Now "No preterm labour is described" | low |
| cva-46 | q3 | explanation | "No fever or meningism". Meningism was never examined in the stem. Now rests on what the stem gives: afebrile, no headache | low |
| cva-39 | q1 | options | "Nitroglycerin patch to below 185/110" had no unit. Now "185/110 mmHg" | low |
| cva-24 | q3 | options | Key "Cardioembolism from atrial fibrillation" was the longest option at 1.49 times the mean distractor, just under the 1.5 limit, and restated the stem cue. Now "Cardioembolism from the atrium". Position unchanged (index 0) | low |
| cva-17, cva-18, cva-40 | q4, q3, q2, q3 | options, explanation | Thousands separator. "3000", "2900", "1000", "4000" and "2000" units and "1000 mg" are now written with a space ("3 000 units") per SAMP_SPEC section 10 | low |
| cva-40 | q3 | explanation | The aPCC 4 000 units distractor was rejected only by implication. Now states that 4 000 units would exceed the cap | low |

## Key changes

- cva-48 q1 (review-extra): index 2 (Left middle cerebral artery) to index 0 (Left anterior cerebral artery). The explanation already argued for index 0 and against index 2.
- No key changes in cva.ts. cva-24 q3 was reworded but keeps index 0.

## Numbers recomputed by script

All correct as written unless listed under Fixes.

- Tenecteplase 0.25 mg/kg, maximum 25 mg. cva-26 and cva-48: 64 x 0.25 = 16 mg. The 6.4 mg distractor is 0.1 mg/kg. 25 mg is the cap reached at 100 kg. Alteplase 0.9 mg/kg for 64 kg is 57.6 mg ("about 58 mg"), so 90 mg is far above.
- PCC. cva-17 q4: 58 x 50 = 2 900 units, under the 3 000 unit cap. The 1 000 unit distractor is 17.2 units/kg, below 25 units/kg. cva-40 q2: PCC 4 000 units exceeds the 3 000 cap.
- cva-40 q3, activated PCC. 80 x 50 = 4 000 units, capped at 2 000 units. Key 2 000 units is right. Verified against the CSBPR ICH emergency management page ("FEIBA ... 50 units per Kg to a maximum of 2000 u", with four-factor PCC 50 units/kg to a maximum of 3000 units as the backup) and the NAC 2022 PCC recommendations (FEIBA typically at 50 IU/kg, maximum 2000 IU). No key exceeds a cap. The q2 statement that PCC is the fallback after idarucizumab and aPCC matches the CSBPR order.
- Enoxaparin cva-35: 1 mg/kg x 72 kg = 72 mg every 12 hours.
- Idarucizumab 5 g as two 2.5 g boluses (cva-40).
- GCS: cva-17 E4 V4 M6 = 14. cva-25 E3 V3 M5 = 11. cva-28 E1 V2 M4 = 7. cva-40 E3 V5 M6 = 14.
- Canadian TIA Score. cva-41: first TIA 2, duration 10 minutes or more 2, carotid stenosis 2, on antiplatelet 3, unilateral weakness 1, dysarthria 1 = 11, high (9 or more). cva-45: 2 + 2 + 1 = 5, medium (4 to 8). cva-47: not a first TIA 0, under 10 minutes 0, vertigo minus 3 = minus 3, low (3 or less). Risk bands 0.5%, 2.3% and 5.9% match the Perry 2021 abstract.
- ABCD2. cva-42: age 1, BP 150/86 (systolic 140 or more) 1, speech without weakness 1, 40 minutes 1, diabetes 1 = 5. cva-43: age 1, BP 162/94 1, speech 1, 30 minutes 1, no diabetes 0 = 4.
- Apixaban dose cva-42: 71 years, 68 kg, creatinine 84 umol/L, no reduction criterion, 5 mg twice daily.
- BP thresholds: 185/110 before and for 24 hours after thrombolysis, 220/120 without thrombolysis with about 15% lowering, and lowering above 185/110 in symptomatic ICH after thrombolysis. All match the current CSBPR pages. cva-17 164/88, cva-29 158/84 and cva-31 165/90 sit below 185/110. cva-39 204/108 is above 185/110 and below 220/120.
- Lab exclusions cva-27 q4: INR above 1.7 (1.9), platelets below 100 (85), glucose 12.0 inside 2.7 to 22.2. cva-33: INR 2.6.
- ASPECTS: cva-27 and cva-33 at 9 (small core, 6 or more). cva-37 and cva-49 at 4 (moderate core, 3 to 5).
- NIHSS: cva-24 NIHSS 2 and cva-26 NIHSS 7 are below and above the EVT threshold of more than 5 as the explanations say. cva-32 NIHSS 1 and cva-39 NIHSS 4 against the DAPT range of 0 to 3. cva-29 NIHSS 6 qualifies for basilar EVT.
- Time windows: cva-17 apixaban 6 hours. cva-18 last well to arrival 12 hours. cva-22 07:30 to 12:10 is 4 hours 40 minutes, beyond 4.5 hours. cva-24 23:00 to 16:00 is 17 hours. cva-25 23:30 to 08:10 is 8 hours 40 minutes ("about 9"). cva-26 onset to tenecteplase 1 hour 50 minutes. cva-27 11:30 to 13:55 is 2 hours 25 minutes. cva-28 23:00 to 03:55 is 4 hours 55 minutes. cva-30 onset to tenecteplase 1 hour 20 minutes. cva-32 09:40 to 11:10 is 90 minutes. cva-37 09:00 to 14:50 is 5 hours 50 minutes ("almost 6"). cva-39 20:00 to 17:00 is 21 hours. cva-38 MRI at 14 hours after 08:15 is 22:15. cva-41 and cva-43 inside 48 hours. cva-29 surgery 6 days ago, inside 14 days.
- Other figures: ASH transfusion threshold cva-21, Hb 79 is 85 g/L or less. HINTS false negative MRI 15 of 105 = 14.3%. Mimic thrombolysis sICH 0.5% (95% CI 0% to 2%) and RR 0.33 ("about one third"). Angioedema 9 of 176 = 5.1%. Recrudescence 18.4 hours and 91 of 131 = 69%. Lateral medullary series VA disease 67% ("two thirds") and dissection 15%. ASA in endocarditis 325 mg for 4 weeks.
- Laterality: cva-38 right sensorineural loss with Weber to the left, left-beating nystagmus and a right-sided corrective saccade all point to the right labyrinth or AICA. cva-22 ipsilateral face and contralateral body loss with left Horner fits a left lateral medulla. cva-44 left arm shaking fits the right carotid.

Format script (stem 50 to 150 words, updates 10 to 45 words, 3 to 6 explanation sentences, no semicolons or dashes) found no breach. After the fixes, single key positions in cva.ts are 25, 25, 25, 15, 21 of 111 (highest 22.5%), and the key is the single longest option in 32 of 111 (28.8%).

## Sources verified

- CSBPR ICH emergency management, 2020. https://www.strokebestpractices.ca/recommendations/management-of-intracerebral-hemorrhage/emergency-management-of-intracerebral-hemorrhage (idarucizumab, FEIBA and PCC caps, cerebellar hemorrhage referral, platelets)
- NAC. Recommendations for use of PCCs in Canada, revised 2022. https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada
- CSBPR Acute Stroke Management 2022, section 5. https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment (tenecteplase dose, symptomatic ICH after thrombolysis, angioedema, DOAC wording, EVT NIHSS and ASPECTS)
- CSBPR Acute Stroke Management 2022, section 4. https://www.strokebestpractices.ca/en/recommendations/acute-stroke-management/emergency-department-evaluation-and-management (BP thresholds)
- PubMed abstracts: Perry 2021 (33541890), Newman-Toker 2013 (24127701), Topcuoglu 2017 (28783808), Tsivgoulis 2015 (25791717), Hill 2003 (12743244), Kim 2003 (12805095), Chan 2003 (12957419).

No citation was added or changed under this lens.

## Needs physician decision

1. review-extra.ts. cva-48 duplicates cva-26 and cva-49 duplicates cva-37 word for word. Both extras are now internally correct, but neither should enter the bank, and the near duplicate stem gate would reject them. Recommend dropping both. The Lens A fixes to these two SAMPs were not on disk when this review started.
2. cva-26 NIHSS 7 and cva-29 NIHSS 6 are stated, not derivable item by item from the stems. Both are plausible and the keys do not depend on the exact value except cva-29, where 6 just clears the EVT threshold of more than 5.
3. cva-25 "mumbles words" is scored V3. Some examiners would score mumbling V2 (GCS 10). The key does not depend on it.
4. cva-21 q2 says transfusion should start "without delay beyond 2 hours from presentation". The ASH wording refers to the presentation of acute neurological symptoms. With onset 17:50 and arrival 18:40 the key is the same either way.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s27` prints nothing.
- `SAMP_BATCH=s27 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 715 passed, 0 failed.

## Summary

- 34 SAMPs reviewed (32 in the batch, 2 extra). 14 fix rows in 14 SAMPs.
- By category: 1 wrong key (cva-48), 1 invented fact in an explanation (cva-49), 4 explanation or option claims resting on facts the stem never gave (cva-44, cva-23, cva-36, cva-46), 1 internal inconsistency in an update (cva-30 GCS 15 with aphasia), 1 misleading lead-in (cva-19), 1 overstated source claim (cva-18), 1 distractor without a reason (cva-42), 1 missing unit (cva-39), 1 key length cue (cva-24), 1 implicit distractor reason (cva-40), and thousands separators (cva-17, cva-18, cva-40).
- Most serious: the wrong key in cva-48 q1 and the invented lactate in cva-49 q2, both still on disk although the Lens A report says they were fixed. Next, cva-44 q1, where the only reason given against the orthostatic presyncope distractor was a fact the stem never stated.
- Every tenecteplase, alteplase, PCC and aPCC dose, GCS, ABCD2, Canadian TIA Score, ASPECTS band, BP threshold and time window recomputed correctly. cva-40 q3 (aPCC 2 000 units) is correct under both CSBPR ICH and NAC 2022.
- SAMPs with a defect: cva-17, cva-18, cva-19, cva-23, cva-24, cva-30, cva-36, cva-39, cva-40, cva-42, cva-44, cva-46, cva-48, cva-49.
