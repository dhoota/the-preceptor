# Batch c02 writer report

Five case studies, 30 items. Every item and case has `reviewed: false` and `canada: ""`. `npx tsc --noEmit -p .` prints no errors for `bank/c02`.

`BATCH=c02 npx vitest run tests/bank.test.ts` passes 44 of 44. An early c02 stem (rn-c02-3-1) matched rn-c01-4-1 at trigram Jaccard 0.5 and was rewritten. During writing, the whole bank near duplicate test also flagged pairs from other batches (rn-s02-50 with rn-s28-18, rn-s22-01 with rn-s25-16). Those have since cleared.

## Cases

| Case | Setting | Client | Acuity |
|---|---|---|---|
| rn-c02-1 | Surgical unit | Woman, 44, low calcium on the morning after total thyroidectomy | Moderate to high |
| rn-c02-2 | Labor and birth unit | Woman, 29, first pregnancy at 34 weeks, preeclampsia with severe features | High |
| rn-c02-3 | Inpatient mental health unit | Man, 38, bipolar I disorder, lithium toxicity after vomiting, diarrhea and ibuprofen | Moderate to high |
| rn-c02-4 | Pediatric emergency department | Girl, 8, severe asthma attack that nears respiratory failure | High |
| rn-c02-5 | Home health (community) | Man, 77, dysphagia and weight loss 6 days after a stroke, tired caregiver wife | Moderate |

## Counts

Client Needs: MOC 6, SIPC 4, HPM 3, PSY 2, BCC 2, PPT 5, RRP 4, PA 4. This matches the plan.

| Item | Need | Type |
|---|---|---|
| 1-1 to 1-6 | RRP, PA, RRP, SIPC, PPT, MOC | highlight, matrix, cloze triad, sata, mc calc, matrix |
| 2-1 to 2-6 | HPM, HPM, RRP, SIPC, PPT, MOC | msn, cloze dyad, mc, dnd, mc calc, matrix |
| 3-1 to 3-6 | PPT, RRP, PA, MOC, PSY, PSY | highlight, matrix, mc, sata, mc, matrix |
| 4-1 to 4-6 | HPM, PA, PA, MOC, PPT, PPT | highlight, matrix, cloze dyad, sata, mc calc, matrix |
| 5-1 to 5-6 | BCC, BCC, SIPC, MOC, SIPC, MOC | highlight, matrix, mc, dnd, sata, matrix |

Item types: matrix 9 (all single mode), mc 7, highlight 4, sata 4, cloze 3, dnd 2, msn 1. Each case uses 4 or 5 types.

Rationale scoring: two dyads (rn-c02-2-2 and rn-c02-4-3, cloze). One triad (rn-c02-1-3, cloze). Both dnd items use zero-one scoring.

CJMM steps: each case walks the six steps in order. That gives 5 items per step.

Difficulty: level 2 has 7 items, level 3 has 19 and level 4 has 4.

Calculations: rn-c02-1-5 (calcium gluconate 20 mL), rn-c02-2-5 (magnesium sulfate 50 mL/hour), rn-c02-4-5 (prednisolone 9 mL).

## MC key positions

Position 1: 2 (rn-c02-2-3, rn-c02-5-3). Position 2: 1 (rn-c02-3-3). Position 3: 2 (rn-c02-1-5, rn-c02-2-5). Position 4: 2 (rn-c02-3-5, rn-c02-4-5). The calculation items list their options from low to high. The batch has 7 MC items, so the batch position gate (8 or more) does not run.

## Sources and verification

- Hinkle JL, Cheever KH, Overbaugh KJ. Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition, 2022. The fixture already uses this source. It supports the thyroidectomy safety measures and the dysphagia teaching.
- Orloff LA et al. ATA Statement on Postoperative Hypoparathyroidism. Thyroid 28(7):830, 2018. The abstract confirms that a PTH below 15 pg/mL after surgery signals a raised risk. https://pubmed.ncbi.nlm.nih.gov/29848235/ and https://scholarworks.utrgv.edu/som_pub/865/
- Fresenius Kabi. Calcium Gluconate Injection label, revised 6/2017. It gives 100 mg/mL, an adult initial dose of 1000 to 2000 mg, dilution before a bolus, a limit of 200 mg/minute in adults, and ECG monitoring. https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208418s000lbl.pdf
- ACOG Practice Bulletin No. 222, 2020. Severe range BP of 160/110 mmHg. Transaminases twice normal. Magnesium 4 to 6 g load then 1 to 2 g/hour. Reflexes lost above 7 mEq/L. Calcium gluconate 10% 10 mL IV over 3 minutes for toxicity. Urine output is monitored. https://www.preeclampsia.org/frontend/assets/img/advocacy_resource/Gestational_Hypertension_and_Preeclampsia_ACOG_Practice_Bulletin,_Number_222_1605448006.pdf and https://pubmed.ncbi.nlm.nih.gov/32443079/
- Lowdermilk DL et al. Maternity and Women's Health Care, 13th edition, 2023. The c01 review already verified it. It supports fundal height, fetal baseline and seizure precautions.
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. The fixture already uses it. Magnesium sulfate injection is on the list.
- Lithium Carbonate Tablets label (Sun Pharmaceutical), DailyMed, revised 10/2023. Toxic at 1.5 mEq/L or more. Maintenance range 0.8 to 1 mEq/L. Coarse tremor, ataxia, slurred speech, drowsiness and GI signs. NSAIDs, dehydration and sodium loss raise levels. Draw the level 12 hours after the last dose. Keep normal salt and fluid intake. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d3284649-ed4c-4096-987b-4ac16b8278f2&type=display
- Halter MJ. Varcarolis' Foundations of Psychiatric-Mental Health Nursing, 9th edition. Open Library lists ISBN 9780323697071 with the year 2021. https://openlibrary.org/search.json?q=Varcarolis+Foundations+of+Psychiatric-Mental+Health+Nursing
- IHI SBAR Tool, 2023. The c01 review already verified it. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation
- GINA Summary Guide for Asthma Management and Prevention, 2024. For ages 6 to 11, a severe attack means talking in words, RR over 30/minute, pulse over 120 bpm, SpO2 below 90% or PEF of 50% or less. Mild to moderate means a pulse of 100 to 120 and SpO2 of 90 to 95%. Prednisolone 1 to 2 mg/kg up to 40 mg. SpO2 target in children is 94 to 98%. Drowsiness means intensive care. Follow up children in 1 to 2 days. Risk factors for attacks. Rinse the mouth after an inhaled steroid. https://ginasthma.org/wp-content/uploads/2024/12/GINA-Summary-Guide-2024-WEB-WMS.pdf
- Hockenberry MJ, Duffy EA, Gibbs KD. Wong's Nursing Care of Infants and Children, 12th edition, 2023. The c01 review already verified it.
- Winstein CJ et al. Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke 47(6):e98, 2016. It covers dysphagia screening, treatment and oral care. https://www.ahajournals.org/doi/10.1161/str.0000000000000098
- NCSBN and ANA National Guidelines for Nursing Delegation, 2019. The c01 review already verified it. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf

## For the reviewer

- Halter year: Open Library gives 2021. The book's copyright page may say 2022. Please confirm.
- I checked the lithium label and the GINA guide through fetched text, not a printed copy. The GINA severity bands come from its primary care figure for adults, adolescents and children 6 to 11 years.
- The calcium, magnesium, PTH and creatinine reference ranges in the case tabs are common lab ranges. They are not from one named source. The PTH floor of 15 pg/mL comes from the ATA statement.
- rn-c02-1-4 keys "Check behind the neck for pooled drainage" and "Raise the head of the bed 30 to 45 degrees" from Brunner teaching as I recall it. Please check the exact angle in the text.
- rn-c02-1-6 keys "No blood test booked after discharge" as needing follow-up. The ATA statement supports watching for rebound high calcium. Local practice may book the test at the first clinic visit.
- rn-c02-2-1 is tagged HPM (antepartum care). Some reviewers may prefer PA or RRP. rn-c02-2-6 is tagged MOC because it tests supervision of a new nurse. The content is magnesium toxicity, so PPT is also arguable.
- rn-c02-2-6 has the new nurse prepare calcium gluconate before the provider calls back. ACOG gives the dose. The nurse gives it only on a prescription or protocol.
- rn-c02-2-4 keys "padded side rails and a dim, quiet room" for seizure precautions. That comes from maternity nursing texts, not ACOG.
- rn-c02-3-3 is tagged PA. The content is lithium toxicity with volume loss, so PPT is also arguable. I used PA to keep the PPT count at 5.
- rn-c02-3 has ibuprofen given 3 times to a client on lithium, from an as-needed prescription. This is on purpose. rn-c02-3-4 asks the nurse to question it.
- rn-c02-4-1 keys outdoor smoking as a risk. GINA lists smoke exposure as a risk factor and tells parents not to smoke in rooms or cars children use. It does not say outdoor smoking on its own is a risk. The why relies on smoke on clothing and near the home.
- rn-c02-4-6 keys breathing in slowly through the spacer as effective. Wong's teaches a slow, deep breath. GINA does not give a step-by-step spacer technique.
- rn-c02-5-5 keys the chin tuck as general dysphagia teaching. In practice the speech-language pathologist sets which maneuver to use.
- The drug doses and the calcium, magnesium and prednisolone prescriptions are written for these cases. They are not copied from a protocol.
- To check the gates across all c02 items at once, I placed a scratch test file in `tests/` for a few seconds, ran it and deleted it. No other file outside `src/bank/c02/` and this report was changed.
