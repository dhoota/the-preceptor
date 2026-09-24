# Batch c09 adversarial review

Scope: all 30 case items in `case1.ts` to `case5.ts`, the shared sources in `helpers.ts`, and the two items in `extra.ts` that `index.ts` does not import (rn-c09-8 and rn-c09-9). Both lenses were applied to every item, every why and every rationale sentence.

Checks after fixing: `npx tsc --noEmit -p .` prints nothing for `bank/c09`. `BATCH=c09 npx vitest run tests/bank.test.ts` passes 44 of 44. On the first run before any edit, one whole bank test failed on a near duplicate between rn-s20-26 and rn-s24-32. That pair is outside this batch and it passed on later runs.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c09-1-2 | row why, rationale, H&P tab | Hemoglobin 7.2 g/dL was put down to 600 mL of surgical blood loss. No level before surgery was given, and 600 mL alone in an 88 kg man cannot drop a normal hemoglobin to 7.2. Added a level before surgery of 10.4 g/dL (104 g/L) and tied the why to the fall from it | A and B | high |
| rn-c09-1-2 | rationale | Said the dark red urine "began after" the transfusion. No urine finding was charted before 1312. Reworded to what the urine shows | B | medium |
| rn-c09-1-5 | source (SRC.tjc) | Cited the 2025 National Patient Safety Goals. The Joint Commission replaced them for hospitals with the National Performance Goals from January 2026. NPG.01.01.01 keeps two identifiers. Updated the citation | A | high |
| rn-c09-2-2 | rationale, blank 1 why | Said the fall "began 5 to 10 days after heparin started". The count was normal on day 3 and low on day 6, so the onset day is not shown. Now says the fall was found on day 6, inside the usual window | B | high |
| rn-c09-2-5 | stem | "The provider prescribes" changed to "The primary health care provider prescribes" | B | high |
| rn-c09-2-5 | rationale | Called the liver tests "normal" but the chart gives no ALT reference range. Now says no liver disease is recorded and the ALT of 26 units/L is close to the 24 units/L before surgery | B | medium |
| rn-c09-3-6 | stem | "The provider prescribes" changed to "The primary health care provider prescribes" | B | high |
| rn-c09-3-6 | rationale | Said shaking "damages the suspension". The supported point is that shaking makes bubbles and gives an inaccurate dose. Reworded | A | medium |
| rn-c09-3-1, rn-c09-3-2, rn-c09-3-4, rn-c09-3-6 | source (SRC.ada) | Cited the 2025 ADA Standards. The 2026 section 15 is current. The targets (fasting under 95, 1 hour under 140, 2 hour under 120 mg/dL) and the insulin preference are unchanged. Updated the citation | A | high |
| rn-c09-4-1 | option 7 why | Called the maternal heart rate "rising". Only one reading was charted. Now says maternal tachycardia can be an early sign of blood loss | B | high |
| rn-c09-4-3 | H&P tab | The uterine rupture why says she has had no uterine surgery. The chart never said so. Added "No previous uterine surgery." to the history | B | high |
| rn-c09-4-4 | option 7 why, rationale, sources | Taught that jewelry is removed to prevent electrosurgical burns. The AORN 2026 update found no definitive evidence of alternate site burns from jewelry with modern units. Jewelry still comes off for swelling, loss and entanglement. Reworded and added the AORN source. The key is unchanged | A | high |
| rn-c09-4-4 | source (SRC.tjc) | Same superseded 2025 NPSG citation as rn-c09-1-5. Updated with the shared source | A | high |
| rn-c09-5-6 | row text | "Urine output 20 mL/hour for 4 hours" at 1600 reaches back to 1200. The client arrived at 1215 and magnesium started after 1230. Changed to 2 hours | B | high |
| rn-c09-9 (extra) | rationale | Said "this client has asthma". The stem gives only hypertension. Removed the invented history and added the reason the key needs teaching | B | high |
| rn-c09-8 (extra) | option 3 | "Elevate the bed head 30 degrees" was the same action as the key, so two choices were defensible. Replaced with "Slow the feeding rate by half" and gave the rationale a sentence on the distractors | A | high |

## Key changes

None.

## Numbers recomputed

A script checked every value in the batch.

- Argatroban: 2 x 76 = 152 mcg/minute, x 60 = 9120 mcg/hour = 9.12 mL/hour at 1 mg/mL. Distractors: 152 / 60 = 2.53 (2.5), 2 x (76 x 2.2) x 60 / 1000 = 20.06 (20.1), 152. All correct.
- Platelets: 88 000 / 230 000 = 38 percent, 88 000 / 196 000 = 45 percent. Both falls exceed half.
- Glucose pairs: all 18 mg/dL values convert to the mmol/L shown within rounding (for example 157 is 8.71, 95 is 5.27, 140 is 7.77).
- Temperatures: 36.9 is 98.4, 38.4 is 101.1, 38.9 is 102.0, 37.2 is 99.0, 36.8 is 98.2, 37.0 is 98.6. All correct.
- Creatinine: 0.9 is 80, 1.0 is 88, 1.1 is 97, 0.6 is 53, 1.2 is 106 micromol/L. All correct.
- Magnesium: 9 mg/dL is 3.70 mmol/L. PB 222 Table 2 gives above 3.5 mmol/L, above 7 mEq/L and above 9 mg/dL for loss of patellar reflexes. The ref value is the correct conversion of 9 mg/dL.
- Fundal height 35 cm at 32 weeks is 3 cm above, more than the 2 cm allowance.

## Sources verified

- CDC NHSN Hemovigilance Module Protocol v3.0, January 2026, Table 4. AHTR signs include back or flank pain, chills, fever, hematuria, hypotension, oliguria, DIC and oozing at the IV site. https://www.cdc.gov/nhsn/pdfs/biovigilance/bv-hv-protocol-current.pdf
- The Joint Commission. National Performance Goals Effective January 2026 for the Hospital Program. NPG.01.01.01 EP 1 requires at least two patient identifiers. https://digitalassets.jointcommission.org/api/public/content/9ca80055182b4274842a5780a94f2c82 (replacement of NPSGs confirmed at https://www.jointcommission.org/en-us/standards/national-performance-goals)
- Cuker A et al. ASH 2018 HIT guideline. Blood Advances 2(22):3360. Recommendation against a VKA before platelet recovery, usually 150 x 10^9/L or more. Suggests against routine platelet transfusion at average bleeding risk. https://pmc.ncbi.nlm.nih.gov/articles/PMC6258919/
- Argatroban Injection prescribing information. 2 mcg/kg/minute without hepatic impairment, aPTT 1.5 to 3 times baseline, not above 100 seconds, checked 2 hours after the start. https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/203049s007lbl.pdf and https://www.pfizermedical.com/argatroban/dosage-admin
- ADA. 15. Management of Diabetes in Pregnancy: Standards of Care in Diabetes 2026. Diabetes Care 49(Suppl 1):S321. Recommendation 15.8 targets and 15.17 insulin preference. https://diabetesjournals.org/care/article/49/Supplement_1/S321/163918/15-Management-of-Diabetes-in-Pregnancy-Standards and https://pmc.ncbi.nlm.nih.gov/articles/PMC12690181
- ACOG PB 222 Gestational Hypertension and Preeclampsia, 2020. Reflexes lost at 9 mg/dL (7 mEq/L), respiratory depression at 12 mg/dL, oliguria under 30 mL/hour, calcium gluconate 10% 10 mL IV. https://www.preeclampsia.org/frontend/assets/img/advocacy_resource/Gestational_Hypertension_and_Preeclampsia_ACOG_Practice_Bulletin,_Number_222_1605448006.pdf
- ACOG PB 171 Management of Preterm Labor, Obstet Gynecol 128(4):e155, 2016. Citation confirmed in PubMed 27661654. No replacement found.
- ACOG and SMFM Committee Opinion 455, Obstet Gynecol 115(3):669, 2010. PubMed 20177305.
- Oyelese Y, Ananth CV. Placental abruption. Obstet Gynecol 108(4):1005, 2006. Abstract lists smoking and hypertension as risk factors. PubMed 17012465.
- AORN. Guideline for the Safe Use of Surgical Energy Devices, 2026 update. No definitive evidence of alternate site burns from jewelry with modern units. https://www.aorn.org/article/whats-new-in-aorns-guideline-for-the-safe-use-of-surgical-energy-devices-2026-update and https://www.aorn.org/article/electrosurgery-without-the-smoke-and-mirrors
- NICHD. Symptoms of preterm labor, including contractions every 10 minutes or more often. Supports the rn-c09-5-1 ref. https://www.nichd.nih.gov/health/topics/preterm/conditioninfo/symptoms
- Textbooks (Brunner and Suddarth 15th edition, Lowdermilk 13th edition, Davis's Drug Guide 18th edition) and the WHO SSI 2016, NCSBN and ANA 2019, ISMP 2024 and ASPEN 2017 citations are real works with correct years. Textbook page content was not open to check.

## Needs Arjan's decision

- rn-c09-5-4 Orders tab gives nifedipine and magnesium sulfate together. Combined use carries a reported risk of hypotension and neuromuscular blockade. It is common practice and the item does not test it, so it was left. Consider a monitoring note or a different tocolytic.
- rn-c09-1-5 keys calling the blood bank and the other client's nurse as the next action. The client is hypotensive at 96/58 mmHg. No option names the primary health care provider, so the key holds, but a reader may argue for the provider first.
- rn-c09-2-4 keys recording heparin in the allergy record. This is standard nursing practice. ASH does not state it directly.
- rn-c09-1-2 now relies on the added hemoglobin before surgery of 10.4 g/dL (104 g/L). Confirm the value suits the scenario.
- rn-c09-8 and rn-c09-9 in `extra.ts` use ids in the case id pattern (`rn-c09-K`) but are stand-alone items. Decide whether they join the bank and under which ids.

## Summary

32 items reviewed (30 case items and 2 unimported extra items). 16 fixes across 14 items, 0 key changes. By lens: 9 fixes are internal consistency (Lens B), 6 are content or source (Lens A) and 1 is both. The most serious were a duplicate key in rn-c09-8, a false mechanism for the low hemoglobin in rn-c09-1-2, and a stale electrosurgical burn rationale in rn-c09-4-4. All batch tests pass.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
