# s22 writer report

Batch s22. Stand-alone. 50 items, ids rn-s22-01 to rn-s22-50, in `src/bank/s22/part1.ts` to `part5.ts`. All items have `reviewed: false` and an empty `canada` field.

Checks run:

- `BATCH=s22 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s22`: prints nothing.

## Counts

Client Needs: PA 50.

Item type:

| Type | Count |
| --- | --- |
| mc | 26 |
| sata | 10 |
| msn | 3 |
| dnd | 3 |
| cloze | 2 |
| highlight | 2 |
| bowtie | 2 |
| trend | 2 (rn-s22-19 mc, rn-s22-38 matrix) |

CJMM step:

| Step | Count |
| --- | --- |
| recognize | 9 |
| analyze | 10 |
| prioritize | 5 |
| generate | 7 |
| action | 12 |
| evaluate | 7 |

Difficulty:

| Level | Count |
| --- | --- |
| 1 | 3 |
| 2 | 12 |
| 3 | 19 |
| 4 | 12 |
| 5 | 4 |

Process: clinical judgment 23, nursing process 24, teaching 3.

Calculations: rn-s22-15 (maintenance fluid rate by weight) and rn-s22-34 (25% MAP reduction). Both have a `calc` block. The batch has no PPT items, so the 12 percent rule does not apply.

## MC key positions

27 single-answer MC items, including the trend MC. A 7, B 7, C 7, D 6.

01 C, 03 A, 04 D, 06 B, 08 B, 09 C, 11 B, 13 A, 15 C, 17 D, 19 A, 20 D, 21 C, 23 B, 25 A, 27 D, 29 C, 30 C, 32 D, 34 B, 36 A, 39 D, 41 B, 43 A, 45 B, 47 A, 49 C.

## Coverage

Topics span Physiological Adaptation across settings and ages. They cover fluid and electrolyte imbalance (hyponatremia, SIADH, hypercalcemia, hypokalemia, refeeding, tumor lysis), acid-base (panic hyperventilation, vomiting, asthma trend), hemodynamics and shock (sepsis, GI bleed, pulmonary edema, hypertensive emergency), dysrhythmia responses, and neurologic change (head injury, raised ICP, stroke, meningitis, spinal injury, myasthenic crisis). Also covered: medical emergencies (heat illness, hypothermia, burns with airway injury, nosebleed, hypoglycemia), pathophysiology (Cushing, Graves, pheochromocytoma, SVC syndrome, fat embolism, appendicitis, bowel obstruction, AKI recovery, ESKD), pediatrics (VP shunt, tetralogy spell, bronchiolitis, Kawasaki, maintenance fluids), and devices (chest tube, pacemaker).

## Sources

Each source was verified by web search in this session.

| Constant | Citation | Verification |
| --- | --- | --- |
| HINKLE | Hinkle, Cheever, Overbaugh. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th ed. 2022 | https://www.barnesandnoble.com/w/brunner-suddarths-textbook-of-medical-surgical-nursing-janice-l-hinkle/1115205001 |
| WONG | Hockenberry, Duffy, Gibbs. Wong's Nursing Care of Infants and Children, 12th ed. 2023 | https://www.us.elsevierhealth.com/wongs-nursing-care-of-infants-and-children-9780323776707.html |
| SEPSIS | Evans et al. Surviving Sepsis Campaign 2021. Crit Care Med 49(11):e1063 | https://pubmed.ncbi.nlm.nih.gov/34599691/ |
| STROKE | Prabhakaran et al. AHA/ASA 2026 Guideline for Early Management of Acute Ischemic Stroke. Stroke | https://www.ahajournals.org/doi/10.1161/STR.0000000000000513 |
| HYPONA | Spasovski et al. Hyponatraemia guideline. Eur J Endocrinol 170(3):G1. 2014 | https://pubmed.ncbi.nlm.nih.gov/24562549 |
| BTF | Carney et al. Severe TBI Guidelines, 4th ed. Neurosurgery 80(1):6. 2017 | https://pubmed.ncbi.nlm.nih.gov/27654000/ |
| THYROID | Ross et al. 2016 ATA Hyperthyroidism Guidelines. Thyroid 26(10):1343 | https://journals.sagepub.com/doi/10.1089/thy.2016.0229 |
| SICKLE | NHLBI. Evidence-Based Management of Sickle Cell Disease. 2014 | https://www.nhlbi.nih.gov/resources/evidence-based-management-sickle-cell-disease-expert-panel-report-2014 |
| BRONCH | Ralston et al. AAP Bronchiolitis Guideline. Pediatrics 134(5):e1474. 2014 | https://publications.aap.org/pediatrics/article/134/5/e1474/75848/Clinical-Practice-Guideline-The-Diagnosis |
| KAWASAKI | Jone et al. AHA Kawasaki Disease Scientific Statement. Circulation 150(23). 2024 | https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2024/11/15/18/52/update-on-diagnosis |
| HTN | Jones et al. 2025 AHA/ACC High Blood Pressure Guideline | https://www.ahajournals.org/doi/10.1161/HYP.0000000000000249 |
| TLS | Howard, Jones, Pui. The Tumor Lysis Syndrome. NEJM 364(19):1844. 2011 | https://www.nejm.org/doi/full/10.1056/NEJMra0904569 |
| REFEED | da Silva et al. ASPEN Refeeding Consensus. Nutr Clin Pract 35(2):178. 2020 | https://pubmed.ncbi.nlm.nih.gov/32115791/ |
| ALS | AHA. Part 9: Adult Advanced Life Support. Circulation 152. 2025 | https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376 |
| GIBLEED | Laine et al. ACG Upper GI and Ulcer Bleeding. Am J Gastroenterol 116(5):899. 2021 | https://journals.lww.com/ajg/fulltext/2021/05000/acg_clinical_guideline__upper_gastrointestinal_and.14.aspx |
| HEAT | Eifling et al. WMS Heat Illness Guidelines 2024 Update. Wilderness Environ Med 35(1 Suppl):112S | https://pubmed.ncbi.nlm.nih.gov/38425235/ |
| ADA | ADA. Section 6, Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S132 | https://pubmed.ncbi.nlm.nih.gov/41358894 |

Six unused source constants from an earlier draft (AD, ISPD, GBS, SE, PANC, ADRENAL) were removed from `common.ts`.

## For the reviewer

- rn-s22-34 frames the 25% first-hour limit as a MAP reduction set by the prescription. Some texts state the limit for systolic BP. The stem makes the prescription explicit, so the math is unambiguous.
- rn-s22-38 keeps weight at 78 kg through a diuresis of 2900 mL per day. This assumes intake is matched to output. A reviewer may prefer a small weight fall.
- rn-s22-31 converts a glucose of 118 mg/dL to 6.5 mmol/L. The exact value is 6.55, so 6.6 would also be defensible.
- rn-s22-10 cites the NHLBI advice to withhold oxygen when SpO2 is 95% or more on room air.
- rn-s22-01 treats a closed posterior fontanel at 7 months as expected. It usually closes by about 2 months.
- The two bowtie items (12 and 31) and the stroke prioritization item (23) share the sepsis and stroke themes. The near-duplicate gate passed, but a reviewer may want to check overlap with s23 to s25 once those batches land.
