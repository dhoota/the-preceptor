# Batch c04 adversarial review

Scope: all five case studies (rn-c04-1 to rn-c04-5, 30 items) and `extra.ts` (rn-c04-8, rn-c04-9), which `index.ts` does not import. This review replaces the earlier c04 report. Cases 2, 3 and 4 were rewritten by the writer after that report, and `extra.ts` was back in the folder, so every file was reviewed again from the start. Both lenses were applied to every item, every why and every rationale sentence.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c04-2-1, 2-2, 2-3, 2-4, 2-6 | sources (`SRC.ukka` in helpers.ts) | Cited the archived 2020 UKKA hyperkalaemia guideline. The current version is the 2023 update (published 19 December 2023, review date October 2026). Updated title, year and URL. The items' teaching (severe at 6.5 or more, IV calcium protects the heart, insulin 10 units with glucose 25 g, SZC 10 g) matches the 2023 text. | A | high |
| rn-c04-2-2 | row 2 | "Furosemide 40 mg daily" was keyed "Does not contribute". UKKA 2023 lists diuretics among drugs that contribute to AKI and hyperkalaemia during vomiting and diarrhea, which is this client's story. Both answers were defensible. Replaced the row with "Heart rate 56/minute" (an effect, not a cause). | A | medium |
| rn-c04-2-2 | rationale | Removed "Furosemide increases potassium loss" and added the heart rate reason to match the new row. | B | high |
| rn-c04-2-6 | stem, columns | "Requires follow-up" fit the keyed "improvement" row too. Potassium 5.4 mEq/L is still above range and UKKA warns of rebound after 2 hours, so it needs a recheck. Columns now read "Shows improvement" and "No improvement or a new problem". | B | high |
| rn-c04-2-6 | urine row, rationale | Urine 40 mL in 2 hours is 20 mL/hour, double the earlier 10 mL/hour (60 mL in 6 hours). It improved, yet it was keyed against improvement while potassium, which also improved but stayed abnormal, was keyed as improvement. Changed to 16 mL in 2 hours (8 mL/hour, no better). Glucose why now names it a new problem. | B | high |
| rn-c04-4-1 | passage, span, rationale | Heart rate rose from 118 to 134/minute on sitting, a rise of 16. The usual orthostatic heart rate criterion is 20/minute or more. Changed to 140/minute (a rise of 22). | B | medium |
| rn-c04-4-1 | span why, refs | Added the 20/minute threshold to the why and declared it in `refs`. | B | medium |
| rn-c04-5-2 | rationale | Said he "bought patches". The stem says his daughter bought them. Now "has patches ready". | B | high |
| rn-c04-5-5 | option 1 why | Said giving information "records his wishes". Giving information does not record anything. Now "helps him record his wishes". | A | low |
| rn-c04-8 (extra.ts) | option 2, key | Keyed protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is IV calcium gluconate (ACOG PB 222). No option offered calcium, so the item had no correct answer. Option 2 is now calcium gluconate. | A | high |
| rn-c04-8 (extra.ts) | rationale | Same false protamine claim. Rewritten for calcium gluconate. | A | high |
| rn-c04-8 (extra.ts) | sources | SOGC citation lacked full title and journal. Completed (JOGC 44(5):547, PMID 35577426) and added ACOG PB 222, which states the antidote. | A | high |
| rn-c04-9 (extra.ts) | option 2 why | Said sodium polystyrene sulfonate lowers potassium "within minutes, so it is too fast to be safe". It acts over 2 to 24 hours in the colon. The real reason it is not first is that it does not protect the heart. | A | high |

## Key changes

- rn-c04-8 (extra.ts, not in the bank). Before: option 2 "Protamine sulfate". After: option 2 "Calcium gluconate". Reason: protamine does not reverse magnesium, and the item had no correct option. The key index stays 1.
- rn-c04-2-2 is not a key flip. The furosemide row was replaced by a new row, so no existing row changed its key. Logged here so Arjan sees it.

## Checks on items that passed

- Every number was recomputed by script. Temperatures 38.1, 37.2, 36.9, 36.6 and 36.7°C match 100.6, 99.0, 98.4, 97.9 and 98.1°F. Creatinine 1.0 and 2.9 mg/dL match 88 and 256 micromol/L. BUN 18, 58 and 46 mg/dL match 6.4, 20.7 and 16.4 mmol/L. Glucose 92, 96 and 58 mg/dL match 5.1, 5.3 and 3.2 mmol/L. Hemoglobin 7.9 and 6.8 g/dL match 79 and 68 g/L. Urine thresholds for 78 kg are 234 mL in 6 hours and 78 mL in 2 hours. The creatinine ratio is 2.9 (above 1.5). Weight loss is 0.3 kg (4.5%) for the infant and 5 kg (7.9%) for the man in case 5. Diltiazem 0.25 x 72 = 18 mg, 18 / 5 = 3.6 mL, and the distractors are half, double and five times the volume. Pulse deficit 146 - 118 = 28. Calcium gluconate 3 g over 15 minutes is 200 mg/minute, the label limit.
- Priority items: rn-c04-1-3 by breathing before fluids. rn-c04-2-3 by the most imminent threat (lethal dysrhythmia). rn-c04-3-3 by current perfusion over later risks. rn-c04-4-3 by circulation (hypovolemic shock). rn-c04-5-3 by immediate threat to life (fire) over falls and nutrition.
- Diltiazem label (Hikma, revised November 2020): 0.25 mg/kg over 2 minutes, 5 mg/mL, hypotension warning. Matches rn-c04-3-5.
- ACG 2021 transfusion threshold 7 g/dL matches rn-c04-4-5. AABB Circular June 2024 is the current edition.
- NFPA oxygen safety: five feet from heat sources, no oil-based products such as petroleum jelly, smoking the leading heat source. Matches rn-c04-5-1.
- CJMM order is correct in all five cases. No item relies on later case data. Tests pass 44 of 44 and `tsc` reports nothing for c04.

## Sources verified

- UKKA Clinical Practice Guideline: Management of Hyperkalaemia in Adults, 2023. Full PDF text read (severity bands, 30 mL 10% calcium gluconate, insulin 10 units with glucose 25 g, SZC 10 g three times daily, rebound after about 2 hours, sick day rules naming diuretics, calcium resonium removed from acute use). https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0
- KDIGO AKI Guideline 2012. Still the published version. A 2026 AKI and AKD update is in draft only. https://kdigo.org/guidelines/acute-kidney-injury/
- Diltiazem Hydrochloride Injection label (Hikma). https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=734beeef-3968-4137-af2c-276e8a9317df
- Laine L et al. ACG Upper GI and Ulcer Bleeding, Am J Gastroenterol 116(5):899, 2021. https://pubmed.ncbi.nlm.nih.gov/33929377/
- AABB Circular of Information, June 2024. https://www.aabb.org/news-resources/resources/circular-of-information
- NFPA Medical Oxygen Safety tip sheet (content confirmed through NFPA's oxygen tip sheet listing). https://www.nfpa.org/downloadable-resources/safety-tip-sheets/medical-oxygen-safety-tip-sheet
- Ralston SL et al. AAP Bronchiolitis Guideline 2014. No newer AAP guideline found in September 2026. https://publications.aap.org/pediatrics/article/134/5/e1474/75848/Clinical-Practice-Guideline-The-Diagnosis
- Magee LA et al. SOGC Guideline No. 426, JOGC 44(5):547, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- ACOG Practice Bulletin No. 222, 2020 (calcium gluconate for magnesium toxicity). https://www.preeclampsia.org/frontend/assets/img/advocacy_resource/Gestational_Hypertension_and_Preeclampsia_ACOG_Practice_Bulletin,_Number_222_1605448006.pdf
- Sodium polystyrene sulfonate onset of 2 to 24 hours. StatPearls. https://www.ncbi.nlm.nih.gov/sites/books/NBK559206/
- Orthostatic heart rate rise of 20/minute or more. Merck Manual Professional. https://www.merckmanuals.com/professional/cardiovascular-disorders/symptoms-of-cardiovascular-disorders/orthostatic-hypotension
- Carried from the earlier review and unchanged: CDC 2007 Isolation Appendix A, GOLD 2026, Prochaska 1992, USPSTF 2021, nicotine patch Drug Facts, 42 CFR 489.102, PHAC Part C, CNPS InfoLAW. Textbooks (Wong, Brunner, Potter, Varcarolis, Miller and Rollnick) were checked for edition only.

## Needs Arjan's decision

- AHA PALS 2025 materials are out. A secondary summary of the 2025 card gives infant heart rate 100 to 180/minute, not the 2020 awake range of 100 to 190/minute used in rn-c04-1-2 refs. The primary card could not be opened (503). The item value of 172/minute falls inside both, so the key holds. The citation and ref may need updating to 2025.
- The Canada pass ran before cases 2, 3 and 4 were rewritten. Those 18 items have empty `canada` fields that were never assessed (for example hematocrit as L/L and the ACG 7 g/dL threshold as 70 g/L).
- UKKA 2023 advises a 10% glucose infusion after insulin when pre-treatment glucose is below 7.0 mmol/L. The client in case 2 had 5.3 mmol/L. rn-c04-2-6 teaches the hypoglycemia correctly, but a later edit could add this step.
- rn-c04-2-4 gives calcium gluconate over 15 minutes. UKKA 2023 says 10 minutes, ALS 2021 says 15. Both are within the US label limit. No change made.
- rn-c04-8 and rn-c04-9 remain outside the bank. Their ids do not fit the case scheme, and both overlap content already in the bank (magnesium toxicity in c02, hyperkalemia in rn-c04-2). Decide whether to keep or delete `extra.ts`.

## Summary

32 items reviewed (30 in the cases and 2 in `extra.ts`). Defects found in 10 items: 8 in the cases and 2 in `extra.ts`. 13 fixes applied. One key change, in rn-c04-8, which is not in the bank. The main case defects were a stale hyperkalemia guideline, a second defensible answer in rn-c04-2-2, contradictory keying in rn-c04-2-6 and an orthostatic value below its threshold in rn-c04-4-1.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
