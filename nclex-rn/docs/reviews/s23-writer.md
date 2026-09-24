# Batch s23 writer report

Stand-alone batch. 50 items, rn-s23-01 to rn-s23-50. All items are Physiological Adaptation. Every item is `reviewed: false`, `version: 1`, with an empty `canada` note.

Focus list covered: fluid and electrolyte imbalances, acid-base interpretation, hemodynamics, medical emergencies, and the pathophysiology of cardiac and respiratory illness. Topics already used in s22, s25 and the PA case items were avoided where possible.

## Checks

- `BATCH=s23 npx vitest run tests/bank.test.ts`: 61 of 61 pass.
- `npx tsc --noEmit -p . 2>&1 | grep bank/s23`: prints nothing.

## Counts

### Client Needs

| Area | Items |
|---|---|
| PA | 50 |

### Item type

| Type | Items |
|---|---|
| mc | 26 |
| sata | 10 |
| msn | 3 |
| dnd | 3 (2 zero-one, 1 triad) |
| cloze | 2 (1 dyad, 1 zero-one) |
| highlight | 2 |
| bowtie | 2 |
| trend | 2 (1 mc, 1 matrix single) |

### CJMM step

| Step | Items |
|---|---|
| Recognize cues | 11 |
| Analyze cues | 14 |
| Prioritize hypotheses | 3 |
| Generate solutions | 6 |
| Take action | 10 |
| Evaluate outcomes | 6 |

### Difficulty

| Level | Items |
|---|---|
| 1 | 1 |
| 2 | 16 |
| 3 | 19 |
| 4 | 13 |
| 5 | 1 |

## MC key positions

27 mc items, counting the trend mc item 21.

| Position | Items |
|---|---|
| 1 | 6 |
| 2 | 7 |
| 3 | 7 |
| 4 | 7 |

Item 05 orders its options low to high by value.

## Calculations

Item 05 computes mean arterial pressure from BP 86/50 mmHg. It carries a `calc` block. The stem gives 3 L of crystalloid, which also supplies the divisor 3 the gate needs. The reviewer may want to check that this reads naturally.

## Sources used

| Key | Source | Verification URL |
|---|---|---|
| HINKLE | Hinkle, Cheever, Overbaugh. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition. 2022 | https://www.barnesandnoble.com/w/brunner-suddarths-textbook-of-medical-surgical-nursing-janice-l-hinkle/1115205001 |
| ALS | Wigginton et al. AHA 2025 Part 9, Adult Advanced Life Support. Circulation 152 | https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376 |
| BLS | AHA 2025 Part 7, Adult Basic Life Support. Circulation 152. It gives 5 back blows alternating with 5 abdominal thrusts, starting with back blows | https://www.ahajournals.org/doi/10.1161/CIR.0000000000001369 |
| HF | Heidenreich et al. 2022 AHA/ACC/HFSA Heart Failure Guideline. Circulation 145(18):e895 | https://pubmed.ncbi.nlm.nih.gov/35363499/ |
| ACS | Rao et al. 2025 ACC/AHA Acute Coronary Syndromes Guideline. Circulation 151(13):e771 | https://pubmed.ncbi.nlm.nih.gov/40014670/ |
| OXYGEN | O'Driscoll et al. BTS Oxygen Guideline. Thorax 72(Suppl 1):ii1. 2017. It gives targets of 94% to 98% and 88% to 92% | https://www.brit-thoracic.org.uk/clinical-resources/guidelines/emergency-oxygen/ |
| ARDS | Qadir et al. ATS ARDS Guideline Update. AJRCCM 209(1):24. 2024. It gives prone positioning for more than 12 hours a day | https://pubmed.ncbi.nlm.nih.gov/38032683/ |
| PERI | Adler et al. 2015 ESC Pericardial Diseases Guidelines. Eur Heart J 36(42):2921 | https://academic.oup.com/eurheartj/article/36/42/2921/2293375 |
| ENDO | Baddour et al. AHA Infective Endocarditis in Adults. Circulation 132(15):1435. 2015 | https://pubmed.ncbi.nlm.nih.gov/26373316/ |
| AORTA | Isselbacher et al. 2022 ACC/AHA Aortic Disease Guideline. Circulation 146(24):e334. It gives systolic BP below 120 mmHg and heart rate 60 to 80/minute | https://pubmed.ncbi.nlm.nih.gov/36322642/ |
| PLEURA | Roberts et al. BTS Guideline for Pleural Disease. Thorax 78(Suppl 3). 2023 | https://pubmed.ncbi.nlm.nih.gov/37553157/ |
| VALVE | Otto et al. 2020 ACC/AHA Valvular Heart Disease Guideline. Circulation 143(5):e72. 2021 | https://www.ahajournals.org/doi/10.1161/CIR.0000000000000923 |
| BRADY | Kusumoto et al. 2018 ACC/AHA/HRS Bradycardia Guideline. Circulation 140(8):e382. 2019 | https://www.ahajournals.org/doi/10.1161/CIR.0000000000000628 |
| HHS | Umpierrez et al. Hyperglycemic Crises in Adults With Diabetes. Diabetes Care 47(8):1257. 2024. It gives glucose of 600 mg/dL or more and effective osmolality above 300 mOsm/kg for HHS | https://diabetesjournals.org/care/article/47/8/1257/156808/Hyperglycemic-Crises-in-Adults-With-Diabetes-A |
| HYPERNA | Adrogue and Madias. Hypernatremia. NEJM 342(20):1493. 2000 | https://pubmed.ncbi.nlm.nih.gov/10991714/ |
| THYROID | Jonklaas et al. ATA Guidelines for the Treatment of Hypothyroidism. Thyroid 24(12):1670. 2014 | https://journals.sagepub.com/doi/10.1089/thy.2014.0028 |
| SEPSIS | Evans et al. Surviving Sepsis Campaign 2021. Crit Care Med 49(11):e1063 | https://pubmed.ncbi.nlm.nih.gov/34599691/ |
| AFIB | Joglar et al. 2023 ACC/AHA/ACCP/HRS Atrial Fibrillation Guideline. Circulation 149(1):e1. 2024 | https://www.ahajournals.org/doi/10.1161/CIR.0000000000001193 |

## For the reviewer

- Item 16. Timing of insulin in HHS varies between guidelines. Some start insulin only once glucose stops falling with fluids alone. The keyed action reads "Start the prescribed IV insulin" and the why says it follows fluid replacement. Check this against the 2024 consensus.
- Item 41. Adrogue and Madias suggest lowering sodium by about 10 mmol/L a day in chronic hypernatremia. The ref says no more than 10 mEq/L in 24 hours. The trend falls exactly 10 mEq/L. Some sources allow 10 to 12.
- Item 47. Left side, head down positioning for air embolism is standard nursing teaching. The evidence for it is weak. The item keys it as the next step after clamping.
- Item 04. Hinkle is the only source for the order of calcium before insulin in hyperkalemia. A dedicated hyperkalemia guideline could be added.
- Item 09. The 2025 AHA change to start with back blows is new. Older texts teach abdominal thrusts first. The distractors avoid abdominal thrusts, so the key does not depend on this change.
- Item 49 leans toward pharmacology. It is tagged PA because it tests the disease course. The reviewer may prefer PPT.
- Item 05 includes 3 L of crystalloid in the stem. It is true clinical context and also lets the calc gate trace the divisor 3.
- Item 50. The femoral pulse check for mechanical capture comes from ACLS teaching. The 2025 ALS text may not state it directly.
