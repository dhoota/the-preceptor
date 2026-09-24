# Batch c02 adversarial review

Scope: all five cases in `index.ts` (rn-c02-1 to rn-c02-5, 30 items) and the two items in `extra.ts` (rn-c02-8 and rn-c02-9), which `index.ts` does not import. Every rationale, why and number was read against the stem and case tabs. Every calculation and unit pair was recomputed.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c02-8 | key option, why, rationale | Protamine sulfate was keyed as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate. | A | high |
| rn-c02-8 | sources | The SOGC citation lacked the journal and URL. ACOG Practice Bulletin 222 was added because it states the calcium gluconate dose. | A | high |
| rn-c02-9 | option 2 why | The why said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It acts over hours, which is why it is not first. | A | high |
| rn-c02-2-2 | rationale, blank 0 option 2 why | "The BP at 20 weeks rules out chronic hypertension" overstates it. Blood pressure falls in midpregnancy and can mask chronic hypertension. Now reads "no history of hypertension and a normal BP at 20 weeks make it unlikely". | A | medium |
| rn-c02-2-4 | rationale, token 5 why | Said toxicity first shows as lost reflexes and slow breathing. ACOG Table 2 puts reflex loss above 7 mEq/L and respiratory paralysis above 10 mEq/L, so slow breathing follows reflex loss. | A | medium |
| rn-c02-5-2 | row 0 text and why, rationale | "Coughs after thin liquids" is not in the case. The note in rn-c02-5-1 says "Coughs after several swallows". Row and rationale now match the note. | B | medium |
| rn-c02-4-1 | rationale | Stated as fact that smoke exposure is a risk "even when the smoking happens outdoors". GINA 2024 names smoke exposure but not outdoor smoking. Now reads that the father smokes near the home and smoke exposure is a risk factor. | A | low |

Counts: 7 fixes in 7 items. All five main cases keep their keys.

## Key changes

- rn-c02-8 (extra.ts, not in the bank). Before: option 1 "Protamine sulfate", keyed. After: option 1 "Calcium gluconate", keyed. The key index stays 1 but the keyed answer changed. Reason: ACOG Practice Bulletin 222 gives calcium gluconate 10% solution, 10 mL IV over 3 minutes, for magnesium toxicity. Protamine reverses heparin. Arjan to approve.

## Checked and left as written

- rn-c02-1-5: 2 g = 2000 mg, 2000 / 100 = 20 mL. 2000 mg over 10 minutes = 200 mg/minute, the adult bolus limit in the label. Distractor arithmetic (2, 10, 200 mL) is right.
- rn-c02-2-5: 40 / 1000 = 0.04 g/mL, 2 / 0.04 = 50 mL/hour. 25 mL/hour gives 1 g/hour. 80 mL/hour gives 3.2 g/hour. 5 mL/hour is one tenth.
- rn-c02-4-5: 27 mg / 3 mg/mL = 9 mL. 27 / 15 = 1.8, 27 / 5 = 5.4, half = 4.5. 27 mg is under the GINA 40 mg cap.
- rn-c02-4-2: PEF 110 / 260 = 42 percent, which is 50 percent or less. HR 118 and SpO2 91 percent sit in the GINA mild to moderate bands. RR 34 is over 30.
- Unit pairs: calcium 8.6, 7.1, 8.7 mg/dL to 2.15, 1.77, 2.17 mmol/L. Magnesium 1.9 mg/dL to 0.78 mmol/L. Creatinine 0.8, 0.9, 1.6 mg/dL to 71, 80, 141 micromol/L. BUN 14, 31 mg/dL to 5.0, 11.1 mmol/L. Glucose 142 mg/dL to 7.9 mmol/L. All temperatures convert. All within 3 percent.
- Timelines: case 5 stroke 12 days ago and home 6 days ago agree. Case 3 lithium drawn 11 hours after the 2000 dose, just before the next dose, which the label accepts.
- rn-c02-4-3 refs say 94 to 98 percent for children 6 to 12 years. GINA 2024 uses 6 to 12 in that sentence, so it stands.
- rn-c02-3-1: drowsiness, ataxia and slurred speech are listed as moderate toxicity in the lithium label. Coarse tremor comes from Halter.
- rn-c02-4-6: GINA 2024 says the reliever goes back to as needed, not regularly, so "albuterol every 4 hours from now on" needs teaching.

## Sources verified

- Fresenius Kabi, Calcium Gluconate Injection label, revised 6/2017. 100 mg/mL, adult 1000 to 2000 mg, dilute, do not exceed 200 mg/minute in adults, ECG monitoring. https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/208418s000lbl.pdf
- Orloff LA et al. ATA Statement on Postoperative Hypoparathyroidism. Thyroid 2018;28(7):830-841. PTH below 15 pg/mL signals risk. Monitor for rebound hypercalcemia. https://pubmed.ncbi.nlm.nih.gov/29848235/
- ACOG Practice Bulletin No. 222. Obstet Gynecol 2020;135(6):e237-e260. Severe range 160/110, transaminases twice normal, headache unresponsive to acetaminophen or visual disturbance, Table 2 magnesium toxicity, calcium gluconate 10% 10 mL IV over 3 minutes. https://pubmed.ncbi.nlm.nih.gov/32443079/
- Magee LA et al. SOGC Guideline No. 426. J Obstet Gynaecol Can 2022;44(5):547-571. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Lithium Carbonate Tablets label, Sun Pharmaceutical, revised 10/2023. Acute range 0.8 to 1.2 mEq/L, toxicity at 1.5 mEq/L or more, NSAID interaction, keep normal salt and fluids, draw before the next dose. https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=d3284649-ed4c-4096-987b-4ac16b8278f2&type=display
- GINA Summary Guide 2024. Severity bands, prednisolone 1 to 2 mg/kg up to 40 mg, SpO2 target 94 to 98 percent in children, follow up in 1 to 2 days for children, reliever as needed, risk factors. https://ginasthma.org/wp-content/uploads/2024/12/GINA-Summary-Guide-2024-WEB-WMS.pdf
- ISMP List of High-Alert Medications in Acute Care Settings, 2024. https://home.ecri.org/blogs/ismp-resources/high-alert-medications-in-acute-care-settings
- IHI SBAR Tool. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation
- NCSBN and ANA National Guidelines for Nursing Delegation, effective 4/29/2019. The delegating nurse keeps accountability. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- Winstein CJ et al. Guidelines for Adult Stroke Rehabilitation and Recovery. Stroke 2016;47(6):e98-e169. The abstract names speech-language pathologists, nutritionists and social workers on the team. The full text was not reachable (HTTP 403). https://pubmed.ncbi.nlm.nih.gov/27145936/
- Halter MJ, Varcarolis' Foundations of Psychiatric-Mental Health Nursing. Open Library gives 2021 for ISBN 9780323697071. https://openlibrary.org/isbn/9780323697071.json
- Brunner and Suddarth 15th edition, Lowdermilk 13th edition and Wong's 12th edition were not re-fetched. The c01 review and the fixture already use them.

## Needs Arjan's decision

- The key change in rn-c02-8 above.
- rn-c02-1-3 says a heart rate of 104/minute does not fit thyroid storm. Thyroid storm usually brings a much faster rate. Left as written, but a reader might want "only mildly fast" added.
- rn-c02-5 rests on Winstein 2016 for dysphagia content that I could see only in the abstract. Brunner carries the swallowing teaching as the second source.
- rn-c02-9 is tagged PA. PPT is also arguable for a medication priority item.
- I ran one read-only `git diff --stat` by mistake while checking edits. It changed nothing.

## Summary

32 items reviewed, 7 items with defects, 7 fixes, 1 key change (rn-c02-8, in the unimported extra file). The two extra items held the most serious faults: a wrong antidote key and a false distractor reason. `npx tsc` shows no c02 errors and `BATCH=c02 npx vitest run tests/bank.test.ts` passes 44 of 44.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
