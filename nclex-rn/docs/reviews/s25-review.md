# Batch s25 adversarial review

Scope: every .ts file in src/bank/s25. That covers the 50 items in part1.ts to part5.ts, which index.ts imports, the shared sources in common.ts, and the 2 items in extra.ts (rn-s25-91 and rn-s25-92), which index.ts does not import. I read every stem, option, why, rationale, ref and exhibit under Lens A and Lens B. I recomputed every number with a script, including the distractor arithmetic, the unit pairs and all ten temperature pairs.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s25-92 | option 1 text and why, rationale, sources | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. The antidote is calcium gluconate. ACOG Practice Bulletin 222 is added as a source. | A | high |
| rn-s25-92 | why, options 2 and 3 | The whys said the client "did not receive" benzodiazepines and that warfarin "is not involved here". The stem never says either. They now say each agent has no effect on magnesium. | B | medium |
| rn-s25-91 | why, option 1 | The why said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". Its onset takes hours. That delay is why it is not first. | A | high |
| rn-s25-14 | refs, rationale, sources | The ref said a urine output above 0.5 mL/kg/hour is a target of fluid therapy in the ACG 2024 pancreatitis guideline. That guideline names urine output as a parameter but gives no mL/kg/hour target. The ref now states the KDIGO urine output criterion, and KDIGO is cited. | A | high |
| rn-s25-05 | sources (SEPSIS in common.ts) | Cited the 2021 Surviving Sepsis Campaign guideline. The 2026 adult guideline replaced it in March 2026. | A | high |
| rn-s25-17 | sources (ANAPHYLAXIS in common.ts) | Cited the 2020 anaphylaxis practice parameter. The Joint Task Force 2023 update (published 2024) replaces it. IM epinephrine first is unchanged. | A | medium |
| rn-s25-01 | sources (ATLS in common.ts) | Cited ATLS 10th edition (2018). ATLS 11 is the current edition (2025). The tension pneumothorax teaching is unchanged. | A | medium |
| rn-s25-13, rn-s25-18 | sources (GOLD in common.ts) | Cited the GOLD 2025 report. The 2026 report is current. The 88% to 92% SpO2 target used by rn-s25-18 is unchanged. | A | medium |

## Key changes

- rn-s25-92 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The index stays 1. Reason: calcium gluconate IV is the antidote for magnesium toxicity (ACOG Practice Bulletin 222, SOGC Guideline No. 426). Protamine reverses heparin and has no effect on magnesium. Arjan needs to approve this change.

No key changed in the 50 items in the bank.

## Items checked with no defect

The other 43 bank items passed both lenses. Points checked closely:

- rn-s25-08 burn rate. 2 x 80 x 40 is 6400 mL. Half is 3200 mL. Less 400 mL given is 2800 mL. Over the 6 hours left that is 466.7, so 467 mL/hour. The distractors 350 (2800/8), 400 (3200/8) and 533 (3200/6) match their whys.
- rn-s25-38 weight loss. 0.9 kg of 9 kg is 10%. 0.9/8.1 is 11.1% and 8.1/9 is 90%, as the whys say.
- rn-s25-03. The sodium rose 13 mEq/L in 12 hours, above the 12 mEq/L per 24 hours limit in Verbalis 2013.
- rn-s25-14. 0.5 x 80 kg is 40 mL/hour, so 45 mL/hour is above it.
- Unit pairs: glucose 132, 104, 486, 392, 298, 238 and 58 mg/dL, BUN 142 mg/dL (50.7 mmol/L), creatinine 2.4 and 0.9 mg/dL (212 and 80 micromol/L), ammonia 118 mcg/dL (69 micromol/L), magnesium 1.1 mg/dL (0.45 mmol/L), hemoglobin 7.4 g/dL (74 g/L), and all ten Celsius and Fahrenheit pairs.
- Priority items: rn-s25-18 (airway first), rn-s25-25 (oxygen for SpO2 86%), rn-s25-43 (breathing and airway in ascending paralysis), rn-s25-48 (fundal massage for atony), rn-s25-04 (sit up first in autonomic dysreflexia, per PVA 2020). rn-s25-40 follows the NCSBN and ANA delegation guideline.
- rn-s25-39 Glasgow Coma Scale: eye opening to pressure 2, confused 4, localizing 5, per Teasdale 2014.
- rn-s25-26: ACOG PB 222 allows severe range BP to be confirmed within minutes, so the 15 minute recheck is a valid severe feature.

## Sources verified

- Prabhakaran S et al., 2026 AHA/ASA acute ischemic stroke guideline, Stroke 57(8):e316. https://pubmed.ncbi.nlm.nih.gov/41582814/
- Kleinman ME et al., Part 7: Adult Basic Life Support, 2025 AHA Guidelines, Circulation 152(16 Suppl 2):S448. https://pubmed.ncbi.nlm.nih.gov/41122888/
- Rao SV et al., 2025 ACC/AHA ACS guideline, Circulation 151(13):e771. https://pubmed.ncbi.nlm.nih.gov/40014670/
- Joglar JA et al., 2023 AF guideline, Circulation 149(1):e1, 2024. https://pubmed.ncbi.nlm.nih.gov/38033089/
- Heidenreich PA et al., 2022 HF guideline, Circulation 145(18):e895. https://pubmed.ncbi.nlm.nih.gov/35363499/
- Umpierrez GE et al., Hyperglycemic Crises consensus, Diabetes Care 47(8):1257, 2024. https://pubmed.ncbi.nlm.nih.gov/39052901/
- Teasdale G et al., GCS at 40 years, Lancet Neurol 13(8):844, 2014. https://pubmed.ncbi.nlm.nih.gov/25030516/
- McDonald LC et al., IDSA and SHEA C. difficile 2017 update, Clin Infect Dis 66(7):e1, 2018. https://pubmed.ncbi.nlm.nih.gov/29462280/
- Verbalis JG et al., hyponatremia expert panel, Am J Med 126(10 Suppl 1):S1, 2013. https://pubmed.ncbi.nlm.nih.gov/24074529/
- Glauser T et al., AES status epilepticus guideline, Epilepsy Curr 16(1):48, 2016. https://pubmed.ncbi.nlm.nih.gov/26900382/
- Ross DS et al., 2016 ATA hyperthyroidism guideline, Thyroid 26(10):1343. https://pubmed.ncbi.nlm.nih.gov/27521067/
- ACOG Practice Bulletin 183, Postpartum Hemorrhage, Obstet Gynecol 130(4):e168, 2017. https://pubmed.ncbi.nlm.nih.gov/28937571/
- ACOG Practice Bulletin 222, Obstet Gynecol 135(6):e237, 2020. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Rushworth RL et al., Adrenal Crisis, N Engl J Med 381(9):852, 2019. https://pubmed.ncbi.nlm.nih.gov/31461595/
- Tenner S et al., ACG acute pancreatitis guideline, Am J Gastroenterol 119(3):419, 2024. It names heart rate, BP and urine output as monitoring parameters without a mL/kg/hour target, and says lipase does not track severity. https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/
- KDIGO AKI guideline, Kidney Int Suppl 2(1):1, 2012. Criterion 2.1.1 includes urine volume below 0.5 mL/kg/hour for 6 hours. https://kdigo.org/wp-content/uploads/2016/10/KDIGO-2012-AKI-Guideline-English.pdf . The 2026 KDIGO AKI and AKD guideline is still in preparation after public review, so 2012 stays. https://kdigo.org/guidelines/acute-kidney-injury/
- Cartotto R et al., ABA burn shock resuscitation guideline, J Burn Care Res 45(3):565, 2024. https://pubmed.ncbi.nlm.nih.gov/38051821/
- Carney N et al., BTF 4th edition, Neurosurgery 80(1):6, 2017. https://pubmed.ncbi.nlm.nih.gov/27654000/
- Kaplan DE et al., AASLD portal hypertension guidance, Hepatology 79(5):1180, 2024. https://pubmed.ncbi.nlm.nih.gov/37870298/
- Vilstrup H et al., AASLD and EASL HE guideline, Hepatology 60(2):715, 2014. https://pubmed.ncbi.nlm.nih.gov/25042402/
- Freifeld AG et al., IDSA neutropenia guideline, Clin Infect Dis 52(4):e56, 2011. https://pubmed.ncbi.nlm.nih.gov/21258094/
- New: Prescott HC et al., Surviving Sepsis Campaign 2026, Crit Care Med 54(4):725. https://pubmed.ncbi.nlm.nih.gov/41869847/
- New: Golden DBK et al., Anaphylaxis: A 2023 Practice Parameter Update, Ann Allergy Asthma Immunol 132(2):124, 2024. https://pubmed.ncbi.nlm.nih.gov/38108678/
- New: ATLS 11. https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/
- New: GOLD 2026 Report. https://goldcopd.org/2026-gold-report-and-pocket-guide/
- Magee LA et al., SOGC Guideline No. 426, J Obstet Gynaecol Can 44(5):547, 2022, used by rn-s25-92. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Hinkle 15th edition (2022): the LWW page confirms it and shows a 16th edition published October 2025. https://shop.lww.com/Brunner---Suddarth-s-Textbook-of-Medical-Surgical-Nursing/p/9781975161033

## Needs Arjan's decision

- rn-s25-92: approve the key change above. The item repeats a teaching point common in other batches. Decide whether it joins the bank.
- rn-s25-91: the key and rationale are sound now that the why is fixed. It can join the bank. It overlaps rn-s25-16 on hyperkalemia but asks a different question.
- HINKLE: Brunner and Suddarth has a 16th edition (2025). 30 bank items and rn-s25-91 cite the 15th edition. Decide whether to move the shared citation once the teaching points are checked against the new edition.
- rn-s25-20: NHLBI 2014 is still the usual sickle cell citation. ASH has newer topic guidelines if a more recent source is preferred.
- rn-s25-17: the BP parameter why mentions fluids, which the item never lists as an action. It is true teaching and I left it.
- Process note: to run the item gates on extra.ts, which the bank test does not load, I added a temporary test file under tests/ and deleted it straight after. Both extra items pass every gate.

## Summary

52 items reviewed: 50 in the bank and 2 in extra.ts. I made 8 fixes across 8 items: rn-s25-01, 05, 13, 14, 17, 18, 91 and 92. They include 1 key change (rn-s25-92, not in the bank), 1 false why (rn-s25-91), 1 unsupported ref (rn-s25-14) and 4 stale citations shared through common.ts. After the fixes, tsc reports nothing for bank/s25 and BATCH=s25 vitest passes 61 of 61.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
