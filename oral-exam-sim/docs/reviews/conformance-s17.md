# Format conformance: batch s17

Batch s17 holds 30 signed-off SAMPs: sob-01 to sob-15 in `src/samps/s17/sob.ts` and suicide-risk-01 to suicide-risk-15 in `src/samps/s17/suicide-risk.ts`. This pass changed format only. No `correct`, `select`, `required`, `accept`, `unacceptable`, key feature or clinical fact was changed, except the index remapping that reordering needs. Every remap was checked by script against the original text of the keyed option.

## Checks

- `npx tsc --noEmit -p . 2>&1 | grep samps/s17` prints nothing.
- `CONFORM=s17 SAMP_BATCH=s17 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts` gives 460 passed and 17 failed. All 17 failures are the expected "keeps its keys" test for the 17 SAMPs with a reworded keyed option, listed below. They pass once the edits are logged in `docs/conformance-key-edits.json`.
- A script compared the old and new files question by question. Every write-in `required`, `accept` and `unacceptable` is identical. Every menu `select` and every key feature is identical.

## Counts

| Item | Count |
|---|---|
| Questions in the batch | 121 (26 single, 4 menu, 91 write-in) |
| Prompts reworded | 121 |
| Context sentences moved from the prompt into `update` | 19 (18 new updates, 1 appended to an existing update) |
| Options removed | 2 (sob-05 q3 "Non rebreather mask at 15 L/min", sob-15 q2 "Epinephrine 0.05 mg IM") |
| Options added | 0 |
| Distractors replaced | 1 (suicide-risk-12 q3 "The Public Guardian and Trustee" became "Her family physician", for the length spread rule) |
| Distractors reworded | 67 |
| Keyed options reworded | 19 options in 18 questions (17 SAMPs) |
| Explanations edited | 16 (units, spacing, or text moved from a trimmed keyed option) |
| Updates edited for units | 8 |
| Stems changed | 30 (ages hyphenated in all 30) |
| Vitals moved to the `vitals` field | 18 SAMPs |
| Names removed | 0 (no patient was named) |
| Citations completed (year or edition verified and added) | 20 |
| Citations replaced | 3 (cts-asthma, cts-copd, cpsi) |
| Citations added | 2 (canmat-3, canmat-bd, splitting one CANMAT citation by content) |

Stem work: ages hyphenated ("64-year-old", "20-month-old"). Temperatures, pulse, respiratory rate, BP, O2 saturation and weight moved into `vitals` in CFPC format with every value kept. "mm Hg" became "mmHg". "L/min" became "L/minute". Thousands take a space ("2 400 U/L", "1 240 ng/mL", "1 450 ng/mL", "1 000 ng/mL"). "SpO2" and "HR" in updates became "O2 sat" and "Pulse". The fetal heart rate in sob-12 now reads "145/minute". The prehospital respiratory rate in suicide-risk-10 stays in the stem as history ("a respiratory rate of 6/minute"). "Vital signs are normal" stems keep that sentence and have no `vitals` field. No explanation quoted a moved vital, so none needed a change for that reason.

## Key position across the 26 single questions

| Position | 1st | 2nd | 3rd | 4th | 5th |
|---|---|---|---|---|---|
| Before | 15 | 9 | 2 | 0 | 0 |
| After | 6 | 5 | 5 | 5 | 5 |

The largest share is now 6 of 26 (23 percent). The key is the single longest option in 0 of 26 single questions, down from 16 of 26. Positions moved only through distractor wording and the alphabetical or numeric sort. No answer changed.

| Question | Key position before | After |
|---|---|---|
| sob-01 q2 | 2 | 1 |
| sob-03 q1 | 3 | 4 |
| sob-05 q1 | 2 | 3 |
| sob-05 q3 | 1 | 1 |
| sob-06 q3 | 2 | 1 |
| sob-09 q4 | 2 | 2 |
| sob-10 q2 | 2 | 2 |
| sob-12 q1 | 1 | 3 |
| sob-12 q4 | 1 | 3 |
| sob-13 q3 | 1 | 4 |
| sob-13 q4 | 3 | 1 |
| sob-14 q1 | 2 | 2 |
| sob-15 q2 | 1 | 2 |
| suicide-risk-02 q2 | 1 | 4 |
| suicide-risk-03 q4 | 1 | 5 |
| suicide-risk-05 q2 | 2 | 1 |
| suicide-risk-06 q2 | 1 | 5 |
| suicide-risk-07 q2 | 1 | 5 |
| suicide-risk-08 q2 | 2 | 5 |
| suicide-risk-11 q1 | 1 | 4 |
| suicide-risk-11 q4 | 2 | 2 |
| suicide-risk-12 q3 | 1 | 3 |
| suicide-risk-12 q4 | 1 | 3 |
| suicide-risk-13 q4 | 1 | 5 |
| suicide-risk-14 q2 | 1 | 1 |
| suicide-risk-15 q4 | 1 | 4 |

## Keyed option rewordings (for physician review)

Each was trimmed to meet the 60 character and 10 word limit or the length parity rule. Any detail removed from the option was moved into the explanation, so the teaching is unchanged.

| SAMP | Question | Before | After |
|---|---|---|---|
| sob-01 | q2 | Awake flexible bronchoscopic intubation with topical anesthesia, with a surgical airway set up and the neck marked | Awake flexible bronchoscopic intubation with double setup |
| sob-02 | q2 (menu) | Nebulized epinephrine 1 mg/mL, 0.5 mL/kg to a maximum of 5 mL | Nebulized epinephrine 1 mg/mL, 0.5 mL/kg, maximum 5 mL |
| sob-04 | q4 (menu) | Respiratory rate 10 per minute, tidal volume 6 to 8 mL/kg ideal body weight, long expiratory time, accepting hypercapnia | Rate 10/minute, tidal volume 6 to 8 mL/kg, long expiration |
| sob-05 | q3 | BiPAP starting near IPAP 10 cm H2O and EPAP 5 cm H2O, titrated to comfort and PaCO2 | BiPAP starting near IPAP 10 and EPAP 5 cm H2O |
| sob-09 | q4 | Match or exceed her pre intubation minute ventilation, continue bicarbonate and check a gas within minutes | Match or exceed her pre intubation minute ventilation |
| sob-10 | q2 | D-dimer | D-dimer level |
| sob-15 | q2 | Epinephrine 0.5 mg IM in the anterolateral thigh | Epinephrine 0.5 mg IM |
| suicide-risk-01 | q4 (menu) | Form 1 permits detention in a psychiatric facility for up to 72 hours for psychiatric assessment | Form 1 permits detention for assessment, up to 72 hours |
| suicide-risk-01 | q4 (menu) | Form 42 must be given promptly to the patient and tells him the reasons for detention and his right to a lawyer | Form 42 tells him the reasons and right to counsel |
| suicide-risk-02 | q2 | Asking directly about suicidal thoughts does not increase risk and is recommended | Asking directly about suicidal thoughts does not raise risk |
| suicide-risk-05 | q2 | Obtain consent from his substitute decision maker, or treat under the emergency provision if one cannot be reached promptly | Substitute decision maker consent or emergency provision |
| suicide-risk-06 | q2 | Develop a safety plan with her and her sister and discharge home with arranged follow up | Discharge home with a safety plan and arranged follow up |
| suicide-risk-08 | q2 | Prevent him leaving using the least restrictive means, and complete a Form 1 if he meets its criteria | Prevent him leaving by the least restrictive means |
| suicide-risk-11 | q1 | Police may bring him for examination by a physician without a Form 1, and must stay until the facility takes custody | Police need no Form 1 but must remain for handover |
| suicide-risk-11 | q4 | Medication may be given as a chemical restraint to prevent serious bodily harm, with monitoring and documentation | Chemical restraint is allowed to prevent serious bodily harm |
| suicide-risk-12 | q4 | The Form 1 still authorizes bringing her in, and the 72 hour period starts when she arrives at the psychiatric facility | The Form 1 is valid, with 72 hours from arrival |
| suicide-risk-13 | q4 | Exposure to a peer's suicide increases risk in other youth and warrants active outreach | Peer suicide exposure raises risk and warrants outreach |
| suicide-risk-14 | q2 | Brief validating intervention, review her crisis plan, contact her therapist and discharge with follow up | Brief validating intervention and discharge with follow up |
| suicide-risk-15 | q4 | Risk scales have poor predictive value and should not be used alone to decide disposition | Risk scales should not be used alone to decide disposition |

For the two menus with two reworded or kept keys, the keyed list in index order is:
- sob-02 q2: ["Dexamethasone 0.6 mg/kg PO", "Nebulized epinephrine 1 mg/mL, 0.5 mL/kg, maximum 5 mL"]
- sob-04 q4: ["Ketamine 1.5 mg/kg IV for induction", "Rate 10/minute, tidal volume 6 to 8 mL/kg, long expiration"]
- suicide-risk-01 q4: ["Form 1 permits detention for assessment, up to 72 hours", "Form 42 tells him the reasons and right to counsel"]

## Citation changes

All years below were checked against the publisher, the journal record in Europe PMC or PubMed, or the document itself.

| Source id | Change | New citation (short) | Verified at |
|---|---|---|---|
| cps-croup | Year, author added | Ortiz-Alvarez O, CPS Acute Care Committee. Paediatr Child Health. 2017 | https://cps.ca/en/documents/position/acute-management-of-croup |
| trekk-croup | Version and year added | TREKK. Bottom line recommendations. Croup. Version 4.0. 2023 | https://cms.trekk.ca/wp-content/uploads/2023/11/2023-08-21_BLR_Croup_v4.0_FINAL.pdf |
| gina | Year added | GINA. Global Strategy for Asthma Management and Prevention. 2024 update | https://ginasthma.org/wp-content/uploads/2024/05/GINA-2024-Strategy-Report-24_05_22_WMS.pdf |
| cts-asthma | Replaced by gina (sob-04 q2, q3) | See below | |
| gold | Made specific | Agusti A, et al. GOLD 2023 Report. Executive summary. Am J Respir Crit Care Med. 2023 | PMID 36856433, full text PMC10066569 |
| cts-copd | Replaced by gold (sob-05 q1, q4) | See below | |
| ccs-hf | Made specific | Ezekowitz JA, et al. 2017 Comprehensive update of the CCS heart failure guidelines. Can J Cardiol. 2017 | PMID 29111106 |
| dc-dka | Year, authors added | Goguen J, Gilbert J. Diabetes Canada 2018. Hyperglycemic emergencies in adults. Can J Diabetes. 2018 | PMID 29650082 |
| tintinalli (both files) | Edition and year added | 9th ed. McGraw Hill. 2020 | Cited as "9e. McGraw Hill, 2020" in PMC11537725 and PMC12321001 |
| thromb-can | Title and year added | Thrombosis Canada. Pulmonary embolism (PE): diagnosis. 2025 | https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf (date of version 30 April 2025) |
| sogc-vte | Authors, year added | Chan WS, Rey E, Kent NE, et al. J Obstet Gynaecol Can. 2014 | PMID 24927193 |
| bts | Year, authors added | Roberts ME, et al. BTS guideline for pleural disease. Thorax. 2023 | PMID 37433578 |
| atls | Edition, year added | ATLS Student Course Manual. 10th ed. 2018 | Open Library, ISBN 9780996826235 |
| cps-youth | Author, year added | Korczak DJ, CPS. Paediatr Child Health. 2015. Updated 2019, reaffirmed 2024 | PMID 26175563 and https://cps.ca/en/documents/position/suicidal-ideation-and-behaviour |
| canmat | Made specific | MacQueen GM, et al. CANMAT 2016. Section 6. Special populations. Can J Psychiatry. 2016 | PMID 27486149, https://pmc.ncbi.nlm.nih.gov/articles/PMC4994788/ |
| canmat-3 | Added for suicide-risk-07 | Kennedy SH, et al. CANMAT 2016. Section 3. Pharmacological treatments. Can J Psychiatry. 2016 | PMID 27486148, https://pmc.ncbi.nlm.nih.gov/articles/PMC4994790/ |
| canmat-bd | Added for suicide-risk-12 q1 | Yatham LN, et al. CANMAT and ISBD 2018 bipolar guidelines. Bipolar Disord. 2018 | PMID 29536616 |
| ccsmh | Year added | CCSMH. National guidelines. Assessment of suicide risk and prevention of suicide. 2006 | https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf (dated May 2006) |
| nice | Year added | NICE NG225. 2022 | https://www.nice.org.uk/guidance/ng225 (published 7 September 2022) |
| rosen | Edition, year added | Rosen's Emergency Medicine. 10th ed. Elsevier. 2022 | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 (copyright year 2022, published 27 June 2022) |
| 988 | Body, year added | Centre for Addiction and Mental Health, funded by the Government of Canada. 9-8-8 Suicide Crisis Helpline. 2026 | https://988.ca (page copyright 2026, "led and coordinated by CAMH") |
| hope | Year added, URL changed | Indigenous Services Canada. Hope for Wellness Help Line. 2025 | https://www.sac-isc.gc.ca/eng/1576089519527/1576089566478 (date modified 2025-08-05) |
| fnmwc | Year added | Health Canada and Assembly of First Nations. FNMWC Framework. Summary report. 2014 | https://www.sac-isc.gc.ca/eng/1576093687903 (report dated December 2014) |
| cpsi | Replaced by bolton | Bolton JM, Gunnell D, Turecki G. Suicide risk assessment and intervention in people with mental illness. BMJ. 2015 | PMID 26552947 |

Source swaps and why:
- cts-asthma to gina. The CTS paper this pointed to (FitzGerald 2017) covers chronic severe asthma, not acute ED treatment or impending respiratory failure. GINA 2024 covers both. sob-04 now cites gina and tintinalli.
- cts-copd to gold. No year could be matched to a Canadian Thoracic Society guideline on acute exacerbations. The GOLD 2023 executive summary states the 88 to 92% oxygen target, prednisone 40 mg for 5 days, antibiotics for purulent sputum and that methylxanthines are not recommended (checked in the full text). sob-05 now cites gold and ers-niv.
- cpsi to bolton. The CPSI and OHA Suicide Risk Assessment Guide could not be found or dated from any reachable source, so it was replaced. The Bolton BMJ review covers risk and protective factors, collateral, disposition, safety planning and means restriction.
- canmat split by content. Section 6 supports the breastfeeding and postpartum points (suicide-risk-03). Section 3 supports SSRI dosing, discontinuation and emergent suicidality (suicide-risk-07). The CANMAT and ISBD bipolar guideline supports suicide-risk-12 q1 on bipolar depression and lithium.
- Already complete and unchanged: cafg, ers-niv, idsa-cap, extrip-sal, perc, adjust, esc-pe, artemis, wao-ana, mha, hcca, phipa, stanley.

## Needs physician decision

Nothing below was changed.

1. sob-02 q2 and its explanation (croup). The CPS statement was updated in January 2026. It now gives nebulized epinephrine as a standard dose (5 mL of 1:1000 L-epinephrine, or 0.5 mL racemic) for all ages and weights, where the key gives 0.5 mL/kg to a maximum of 5 mL (the TREKK style). For this 12 kg child both give 5 mL, so the answer holds. The explanation also says doses of dexamethasone "as low as 0.15 mg/kg are also accepted". The updated CPS text says lower doses (0.15 to 0.3 mg/kg) lack clear evidence of equal effect. Consider revising that sentence.
2. suicide-risk-03 q4. CANMAT 2016 Section 6 lists sertraline with citalopram and escitalopram as second-line treatment for postpartum depression in breastfeeding women (psychotherapy is first-line for mild to moderate illness). The key "a reasonable first choice while breastfeeding" is defensible as a first antidepressant choice, but the wording may merit a check.
3. Rosen year. Elsevier lists the 10th edition as copyright 2022, published 27 June 2022. This batch uses 2022. The brief's example and other batches use 2023. The bank should use one year.
4. Canadian source preference. SAMP_SPEC section 9 prefers Canadian guidelines. Two swaps (cts-asthma to GINA, cts-copd to GOLD) move to international sources because no Canadian acute guideline could be verified. A physician may prefer a specific CTS document if one is known.
5. suicide-risk-12 q3. "The Public Guardian and Trustee" was dropped as a distractor because its length broke the spread rule next to "Her husband". The explanation still teaches that the Public Guardian and Trustee is the decision maker of last resort. Confirm the replacement distractor "Her family physician" is acceptable.
6. sob-05 q1. The distractor ranges were rewritten to not overlap ("80 to 84%", "85 to 87%", "93 to 96%", "97 to 100%"). The old "85 to 88%" shared its upper bound with the key. The key "88 to 92%" is unchanged.
