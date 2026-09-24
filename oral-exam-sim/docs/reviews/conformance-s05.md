# Format conformance: batch s05 (CVA and chest pain)

Format pass on the 30 signed-off SAMPs in `src/samps/s05/` (cva-01 to cva-15, chest-pain-01 to chest-pain-15). Brief: `docs/CONFORMANCE_BRIEF.md`. Format only. No answer was changed. `correct` was remapped for every reordered single and menu question and checked by script against the signed-off keyed text. `required`, `accept`, `unacceptable`, `select`, `keyFeature` and every clinical value are unchanged.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 117 (all 85 write-in, 26 single, 6 menu) |
| Write-in context sentences moved from the prompt to `update` | 7 (cva-13 q2, chest-pain-03 q5, chest-pain-04 q3 and q4, chest-pain-05 q2, chest-pain-09 q2 and q3) |
| Options added | 0 |
| Options removed | 3 (single questions with 6 options) |
| Options reworded | 81 (64 distractors, 17 keyed) |
| Keyed options reworded | 17 option texts in 16 questions |
| Stems changed | 29 (chest-pain-02 had no vitals in its stem) |
| Vitals moved to the `vitals` field | 29 stems |
| Updates with vitals reformatted (Pulse /minute, O2 sat) | 5 |
| Names removed | 0 (none present) |
| Micro signs replaced with "umol/L" | 4 (2 stems, 1 update, 1 explanation) |
| Explanations edited | 2 (cva-08 q2, cva-11 q4 unit only) |
| Citations completed | 3 |
| Citations replaced | 1 |

Options removed:
- cva-05 q3: "Admit to medicine for delirium workup". By q3 the CT is done and the update calls the aphasia disabling, so it was the weakest distractor.
- cva-11 q4: "ASA 81 mg daily".
- chest-pain-06 q2: "CT chest".

## Key position across the 26 single questions

| Position | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Before | 2 | 18 | 5 | 1 | 0 | 0 |
| After | 5 | 6 | 5 | 4 | 6 | n/a |

Largest share after: 6 of 26 (23 percent). The key is the single longest option in 9 of 26 questions (35 percent), down from 13 of 26 (50 percent).

## Keyed option rewordings

All are for the 60 character limit, the 10 word limit, option length spread or parity. The meaning is intended to be the same. Each one fails "keeps its keys" until it is logged.

| SAMP | Question | Before | After |
|---|---|---|---|
| cva-02 | q2 | Non-contrast CT head and CT angiogram from the aortic arch to the vertex | Non-contrast CT head and CTA, aortic arch to vertex |
| cva-04 | q2 | Non-contrast CT head and CT angiogram from the aortic arch to the vertex | Non-contrast CT head and CTA, aortic arch to vertex |
| cva-05 | q3 | Tenecteplase 19 mg IV bolus now, with CTA head and neck | Tenecteplase 19 mg IV now, with CTA head and neck |
| cva-08 | q2 | Thrombolysis is contraindicated. Proceed with CTA to assess for thrombectomy | Thrombolysis contraindicated, CTA for thrombectomy |
| cva-09 | q3 | Non-contrast CT head and CT angiogram of the neck, chest, abdomen and pelvis | Non-contrast CT head and CTA neck, chest, abdomen, pelvis |
| cva-10 | q4 (menu) | Clopidogrel 300 to 600 mg loading dose, then 75 mg daily | Clopidogrel 300 to 600 mg load, then 75 mg daily |
| cva-15 | q2 | Non-contrast CT head, followed by contrast CT or MRI if a lesion is seen | Non-contrast CT head, contrast CT or MRI if lesion seen |
| chest-pain-02 | q3 (menu) | Enoxaparin 30 mg IV bolus, then 1 mg/kg SC every 12 hours | Enoxaparin 30 mg IV, then 1 mg/kg SC twice daily |
| chest-pain-05 | q3 | PE is ruled out by PERC with low gestalt probability. No D-dimer is needed | PERC and low gestalt rule out PE, no D-dimer needed |
| chest-pain-08 | q3 | Treat as NSTEMI with ASA, anticoagulation and cardiology consultation for an invasive strategy | Treat as NSTEMI: ASA, anticoagulation, invasive strategy |
| chest-pain-09 | q4 | Further cardiac evaluation, by observation or admission or by expedited cardiology assessment with testing within days | Observation, admission or expedited cardiology testing |
| chest-pain-10 | q2 (menu) | Age | Patient age |
| chest-pain-13 | q3 (menu) | Ibuprofen 600 mg PO three times daily with gastric protection | Ibuprofen 600 mg PO three times daily with gastroprotection |
| chest-pain-13 | q3 (menu) | Colchicine 0.5 mg PO twice daily for at least 3 months | Colchicine 0.5 mg PO twice daily, at least 3 months |
| chest-pain-14 | q2 | Admit, start ASA and anticoagulation, and arrange early coronary angiography | Admit, ASA, anticoagulation and early angiography |
| chest-pain-15 | q2 | Fibrinolysis within 30 minutes of arrival, then transfer to the PCI centre | Fibrinolysis within 30 minutes, then transfer to PCI centre |
| chest-pain-15 | q3 (menu) | Enoxaparin 0.75 mg/kg SC every 12 hours with no IV bolus | Enoxaparin 0.75 mg/kg SC every 12 hours, no IV bolus |

Why some could not be avoided: the three menus with enoxaparin and the HEART menu failed the 2.6 spread rule between two keyed options, so a key had to change. The other long keys were over 60 characters or 10 words.

## Distractor changes worth noting

- Reason text moved out of options: cva-08 q2 ("... because more than 6 hours have passed since the last dose" became "Give full-dose tenecteplase now, then CTA"), chest-pain-05 q4 ("... because PERC is negative" became "Discharge home"), chest-pain-14 q2 ("... because the troponin is normal" removed), chest-pain-15 q2 ("... because of his age" removed). The cva-08 q2 explanation now says 8.5 hours since the last dose is not enough. The other explanations already covered the point.
- chest-pain-05 q4 options were kept very short ("CT angiogram", "Leg ultrasound", "V/Q scan") so the unchanged key "D-dimer" meets the spread rule.
- Some distractors gained plausible detail to meet length parity, for example "Acetaminophen 1 g PO four times daily" in place of "Acetaminophen alone" (chest-pain-13 q3) and "Target mean arterial pressure above 130 mmHg" (cva-14 q3).

## Stems and vitals

- Vitals moved to `vitals` in CFPC formats with every value kept. Glucose, GCS and creatinine stay in the stem as sentences.
- Two-arm blood pressures (cva-09, chest-pain-01) stay in the stem as a finding ("BP is 108/64 mmHg in the right arm and 162/94 mmHg in the left arm"). The `bp` field holds one value, and the arm difference is the teaching point.
- cva-11 "HR 118 irregularly irregular" became pulse "118/minute irregular", and the stem keeps "The pulse is irregularly irregular."
- 14 CVA stems gave SpO2 with no oxygen status. The format needs "on ...". These are recorded as "on arrival" (for example "98% on arrival") rather than inventing "on room air". See below.

## Citation changes

| SAMP | Before | After | Verification |
|---|---|---|---|
| cva-12 | Society of Obstetricians and Gynaecologists of Canada. Canadian Contraception Consensus. | Black A, Guilbert E and colleagues. No. 329. Canadian Contraception Consensus Part 4 of 4 Chapter 9: combined hormonal contraception. Society of Obstetricians and Gynaecologists of Canada. J Obstet Gynaecol Can. 2017. | https://pubmed.ncbi.nlm.nih.gov/28413042/ (J Obstet Gynaecol Can 2017 39(4):269 to 314) |
| cva-08 | Thrombosis Canada. Clinical guides on anticoagulant management and reversal. | Thrombosis Canada. Clinical guide: rivaroxaban. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/RIVAROXABAN_54.pdf (date of version 2 November 2025, states 15 and 20 mg with food) |
| cva-14 (replaced) | Thrombosis Canada. Clinical guides on anticoagulant management and reversal. | National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. 2022. | https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada (revised February 2022, PCC and IV vitamin K given together for VKA reversal) |
| chest-pain-04 | Thrombosis Canada. Clinical guides on pulmonary embolism treatment and on venous thromboembolism in pregnancy and the postpartum period. | Thrombosis Canada. Clinical guide: pregnancy: venous thromboembolism treatment. 2025. | https://thrombosiscanada.ca/clinical_guides/pdfs/TREATMENTOFDEEPVEINTHROMBOSISP_51.pdf (date of version 1 May 2025, UFH, LMWH and warfarin safe in breastfeeding, DOACs avoided) |

Why cva-14 was replaced: cva-08 and cva-14 shared one Thrombosis Canada category citation. The current Thrombosis Canada warfarin guide ("Management of Out-of-Range INRs", 15 June 2025) does not cover PCC reversal of a major bleed, so it does not support q2. The NAC recommendation does. The 10 mg vitamin K dose is also in the AHA/ASA 2022 ICH guideline already cited in this SAMP. cva-14 now cites source id `nac-pcc`.

Existing years were spot-checked against PubMed or the publisher (AHA/ASA 2026 AIS via Crossref DOI 10.1161/STR.0000000000000513, CSBPR secondary prevention 7th edition 2020 update and acute management 7th edition 2022 update on strokebestpractices.ca, and PubMed for ABCD2 2007, Canadian TIA Score 2021, AHA ICH 2022, ACC/AHA aorta 2022, brain metastases 2022, ESC PE 2019 in Eur Heart J 2020, PERC 2008, BTS 2023, cocaine statement 2008, WSES 2019). No change was needed.

## Needs physician decision

1. SpO2 without oxygen status in 14 stems (cva-02 to cva-15). They now read "on arrival". If these were room air readings, the physician can change them to "on room air". cva-04 (GCS 10) and cva-09 are the ones where supplemental oxygen is plausible.
2. cva-08 q2. The key says thrombolysis is "contraindicated". The explanation, after the earlier review, follows the 2022 CSBPR wording that thrombolytics "should not routinely be administered" to patients on a DOAC. Please confirm that "contraindicated" is still the wording you want in the key.
3. chest-pain-02 q3. The key "every 12 hours" became "twice daily" to fit the 10 word limit. Please confirm this is acceptable.
4. chest-pain-09 q4. The rewording drops the phrase "further cardiac evaluation". The key now lists the three routes (observation, admission or expedited cardiology testing). Please confirm the meaning is unchanged.
5. chest-pain-15 q2. "of arrival" was dropped from "within 30 minutes of arrival" for length. The explanation still says "within 30 minutes of arrival".

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s05`: no errors.
- `CONFORM=s05 SAMP_BATCH=s05 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 469 passed, 15 failed. All 15 are the expected "keeps its keys" failures for the 15 SAMPs with a keyed rewording listed above (cva-02, cva-04, cva-05, cva-08, cva-09, cva-10, cva-15, chest-pain-02, chest-pain-05, chest-pain-08, chest-pain-09, chest-pain-10, chest-pain-13, chest-pain-14, chest-pain-15).
