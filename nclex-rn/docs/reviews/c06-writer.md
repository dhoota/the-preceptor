# Batch c06 writer report

Five case studies, 30 items. Every item has `reviewed: false` and `canada: ""`. `BATCH=c06 npx vitest run tests/bank.test.ts` passes 44 of 44. `npx tsc --noEmit -p .` prints nothing for `bank/c06`.

Files: `src/bank/c06/helpers.ts` (meta and sources), `case1.ts` to `case5.ts`, `index.ts`.

House style: no em or en dashes, no semicolons, short single-idea sentences, no filler.

## Cases

The five scenarios follow `docs/topic-plan.json` in order.

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c06-1 | Emergency department, then stroke unit | Woman, 67, right-sided weakness and aphasia inside the thrombolysis window | High |
| rn-c06-2 | Cardiac step-down unit | Man, 58, recurrent chest pressure before catheterization, took sildenafil | High |
| rn-c06-3 | Medical unit | Man, 54, alcohol-associated cirrhosis with confusion after stopping lactulose | Moderate to high |
| rn-c06-4 | Neurosurgical unit | Woman, 46, day 6 after transsphenoidal pituitary surgery, sodium falling | High |
| rn-c06-5 | Long-term care home, awaiting transfer | Woman, 78, prednisone for 4 years, vomiting during a norovirus outbreak | High |

## Counts

Client Needs: MOC 6, SIPC 3, HPM 2, PSY 3, BCC 3, PPT 5, RRP 4, PA 4. This matches the plan.

Item types: mc 7, matrix 6 (all single mode), highlight 4, sata 4, cloze 4, msn 3, dnd 2. Each case uses 4 to 6 types.

Rationale scoring: dyads are rn-c06-1-3 (cloze), rn-c06-3-4 (dnd) and rn-c06-5-3 (cloze). The triad is rn-c06-3-3 (cloze). rn-c06-4-6 (cloze) and rn-c06-5-4 (dnd) are zero-one.

CJMM steps: each case walks the six steps in order, so each step has 5 items.

Difficulty: level 2 has 9 items, level 3 has 16 and level 4 has 5.

Calculations: rn-c06-1-5 (tenecteplase 0.25 mg/kg for 72 kg at 5 mg/mL, 3.6 mL), rn-c06-4-5 (3% saline 150 mL over 20 minutes, 450 mL/hour) and rn-c06-4-6 (sodium rise 119 to 124 mEq/L, 5 mEq/L). The mc options run low to high.

Multi-key pools: the keyed mean is longer than the distractor mean in 6 of 14 pools.

## MC key positions

Position 1: 1 (rn-c06-3-5). Position 2: 2 (rn-c06-1-5, rn-c06-4-3). Position 3: 2 (rn-c06-2-5, rn-c06-4-5). Position 4: 2 (rn-c06-2-3, rn-c06-5-5). The key is the strict longest option in 1 of 7 mc items (rn-c06-2-5).

## Sources and verification

Journal citations were confirmed with PubMed E-utilities (esearch and esummary), since the PubMed web page needs cookies.

- Prabhakaran S, Gonzalez NR, Zachrison KS, et al. AHA/ASA. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke. Stroke 57(8):e316, 2026. https://pubmed.ncbi.nlm.nih.gov/41582814/ and https://www.ahajournals.org/doi/10.1161/STR.0000000000000513. WebSearch confirmed tenecteplase 0.25 mg/kg (maximum 25 mg) or alteplase within 4.5 hours, BP below 185/110 mmHg before and at or below 180/105 mmHg for 24 hours after.
- Rao SV, O'Donoghue ML, Ruel M, et al. 2025 ACC/AHA/ACEP/NAEMSP/SCAI Guideline for the Management of Patients With Acute Coronary Syndromes. Circulation 151(13):e771, 2025. https://pubmed.ncbi.nlm.nih.gov/40014670/
- Vilstrup H, Amodio P, Bajaj J, et al. Hepatic Encephalopathy in Chronic Liver Disease: 2014 Practice Guideline by AASLD and EASL. Hepatology 60(2):715, 2014. https://pubmed.ncbi.nlm.nih.gov/25042402/
- Biggins SW, Angeli P, Garcia-Tsao G, et al. AASLD 2021 Practice Guidance on ascites, SBP and hepatorenal syndrome. Hepatology 74(2):1014, 2021. https://pubmed.ncbi.nlm.nih.gov/33942342/
- Spasovski G, Vanholder R, Allolio B, et al. Clinical Practice Guideline on Diagnosis and Treatment of Hyponatraemia. European Journal of Endocrinology 170(3):G1, 2014. https://pubmed.ncbi.nlm.nih.gov/24569125/
- Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations. American Journal of Medicine 126(10 Suppl 1):S1, 2013. https://pubmed.ncbi.nlm.nih.gov/24074529/
- Beuschlein F, Else T, Bancos I, et al. ESE and Endocrine Society Joint Clinical Guideline: Glucocorticoid-Induced Adrenal Insufficiency. European Journal of Endocrinology 190(5):G25, 2024. https://pubmed.ncbi.nlm.nih.gov/38714321/
- Rushworth RL, Torpy DJ, Falhammar H. Adrenal Crisis. New England Journal of Medicine 381(9):852, 2019. https://pubmed.ncbi.nlm.nih.gov/31461595/
- Bornstein SR, Allolio B, Arlt W, et al. Primary Adrenal Insufficiency guideline. JCEM 101(2):364, 2016. https://pubmed.ncbi.nlm.nih.gov/26760044/ (defined in helpers, not cited by any item)
- MacCannell T, Umscheid CA, Agarwal RK, et al. HICPAC. Guideline for the Prevention and Control of Norovirus Gastroenteritis Outbreaks in Healthcare Settings. Infection Control and Hospital Epidemiology 32(10):939, 2011. https://pubmed.ncbi.nlm.nih.gov/21931246/
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. The fixture already uses it.
- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. The fixture already uses it.
- Potter PA, Perry AG, Stockert PA, Hall AM. Fundamentals of Nursing, 11th edition, 2023. Other batches already use it.
- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition, 2022. Verified by c05.

## For the reviewer

- rn-c06-1-4 keys neurological checks every 15 minutes at first and no aspirin or heparin for 24 hours after thrombolysis. The 15 minute interval for 2 hours is from the guideline's post-thrombolysis care table as I recall it. I did not read the full text.
- rn-c06-1-5 assumes the reconstituted tenecteplase is 5 mg/mL. That matches the 50 mg in 10 mL and 25 mg in 5 mL kits.
- rn-c06-2-1 and rn-c06-2-4 use SpO2 below 90% as the oxygen threshold and NSAIDs other than aspirin as avoided during acute coronary syndrome. I recall both from Rao 2025 but did not read the full text.
- rn-c06-2-4 says nitrates are avoided within 24 hours of sildenafil. Several stand-alone items in other batches teach the same point in a different format.
- rn-c06-3-4 uses protein 1.2 to 1.5 g/kg a day and a late evening snack from Vilstrup 2014. The sodium below 125 mEq/L threshold for fluid restriction is from Biggins 2021 as I recall it.
- rn-c06-3-5 treats the sister as the decision maker because she holds a durable power of attorney for health care and he lacks capacity. State law on when an agent's authority starts varies.
- rn-c06-4-4 uses a fluid restriction of 800 mL a day. Verbalis 2013 advises below 800 mL a day as I recall it.
- rn-c06-4-5 and rn-c06-4-6 use the Spasovski 2014 regimen of 150 mL of 3% saline over 20 minutes, a first-hour goal of a 5 mmol/L rise and a limit of 10 mmol/L in the first 24 hours. US practice often uses 100 mL boluses. The Canada note pass may want to flag this.
- rn-c06-4-2 gives urine osmolality "no fixed range" so that 540 mOsm/kg is not also defensible as within range. I dropped urine specific gravity for the same reason.
- rn-c06-5-3 keys IM hydrocortisone over the other actions. The glucose is 68 mg/dL, set on purpose so hypoglycemia treatment does not compete as a second key.
- rn-c06-5-5 keys the ventrogluteal site for 2 mL and rejects the thin deltoid. The deltoid volume limit of about 1 mL is from Potter as I recall it.
- rn-c06-5-2 is tagged SIPC because half the rows teach outbreak recognition. A reviewer could argue for PA.
- Several prioritize items are tagged MOC (rn-c06-1-3, rn-c06-2-3, rn-c06-4-3, rn-c06-5-3) to meet the plan. Each asks the nurse to set a priority.
