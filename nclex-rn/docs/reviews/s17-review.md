# Review of batch s17

Reviewer: adversarial reviewer, Lens A and Lens B. Scope: every file in `src/bank/s17/`, including `extra.ts`, which `index.ts` does not import.

Every number in the batch was recomputed with a script. That covered doses, rates, drip rates, alteplase split, correction insulin, dextrose kcal, refeeding percent falls and every unit and temperature pair. All calc blocks and all distractor arithmetic are correct.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-s17-02 | rationale, option 3 why | Said thiazides raise sodium delivery to the distal tubule. Thiazides act in the distal tubule and raise delivery to the collecting duct, where potassium is lost. | A | medium |
| rn-s17-10 | exhibit, rationale, refs | The magnesium floor of 1.5 mEq/L is not the range in the cited nursing text (1.3 to 2.3 mEq/L). The day 3 value of 1.3 sat on that floor. Day 3 is now 1.1 and the ref reads 1.3 to 2.3 mEq/L. | A, B | medium |
| rn-s17-13 | sources | Cited the 2019 AHA/ASA stroke update, which the 2026 AHA/ASA guideline replaced. Citation updated. Key and dose unchanged. | A | high |
| rn-s17-26 | rationale | Called a fasting glucose of 118 mg/dL normal. Normal fasting is below 100 mg/dL. Now reads in-target, which the hospital standard supports. | A | high |
| rn-s17-30 | sources, rationale | ISMP lists IV digoxin only. It does not support a double check for oral digoxin. ISMP removed and the last sentence reworded. | A | medium |
| rn-s17-50 | passage, span, rationale | The why called the dressing transparent, but the passage never said so. A gauze dressing dated 2 days ago would be due. The passage now names a transparent dressing. | B | high |
| rn-s17-91 (extra.ts) | option 2 why | Said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It acts over hours, which is why it is not first. | A | high |
| rn-s17-92 (extra.ts) | key option, rationale | Named protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is IV calcium gluconate. | A | high |

## Key changes

- rn-s17-92 (extra.ts, not in the bank). Before: keyed option "Protamine sulfate". After: keyed option "Calcium gluconate", same position. Reason: calcium gluconate is the accepted antidote for magnesium sulfate toxicity. Protamine has no effect on magnesium. Needs Arjan's approval.

## Sources verified

- ADA Standards of Care 2026, section 6, Diabetes Care 49(Suppl 1):S132. https://diabetesjournals.org/care/article/49/Supplement_1/S132/163927/6-Glycemic-Goals-Hypoglycemia-and-Hyperglycemic
- ADA Standards of Care 2026, section 16, Diabetes Care 49(Suppl 1):S339. https://diabetesjournals.org/care/article/49/Supplement_1/S339/163925/16-Diabetes-Care-in-the-Hospital-Standards-of-Care
- Prabhakaran S, Gonzalez NR, Zachrison KS, et al. 2026 AHA/ASA acute ischemic stroke guideline, Stroke 57:e316. It replaces the 2018 guideline and the 2019 update. https://pubmed.ncbi.nlm.nih.gov/41582814/ and https://www.emdocs.net/2026-guideline-update-early-management-of-acute-ischemic-stroke/
- ISMP List of High-Alert Medications in Acute Care Settings 2024. Lists IV antiarrhythmics, thrombolytics, anticoagulants and IV digoxin. https://www.ismp.org/system/files/resources/2024-01/ISMP_HighAlert_AcuteCare_List_010924_MS5760.pdf
- AABB Circular of Information, June 2024 edition. https://www.aabb.org/news-resources/resources/circular-of-information
- da Silva JSV, et al. ASPEN Consensus Recommendations for Refeeding Syndrome 2020. The greater than 30 percent severe threshold and the 5 day window match rn-s17-39. https://pubmed.ncbi.nlm.nih.gov/32115791/
- Magee LA, Smith GN, Bloch C, et al. SOGC Guideline No. 426, JOGC 44(5):547, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Calcium gluconate as the antidote for magnesium toxicity. https://health.usf.edu/media/zdrpe3ja/magnesium_sulfate.pdf
- The other citations (Lehne 11th edition 2022, Brunner and Suddarth 15th edition 2022, INS 2024, ASPEN PN safety 2014, CDC 2011, AHA/ACC/HFSA 2022, ASRA 2018, ACC 2020, Endocrine Society 2016, AGS Beers 2023, FDA 2010 clopidogrel notice, ATA 2014) were checked for author, work and year. None was found to be wrong.

## Needs Arjan's decision

- rn-s17-92 key change above. The item is in extra.ts and is not yet in the bank.
- rn-s17-91 and rn-s17-92 in extra.ts had defects severe enough to show the drafts were unchecked. Decide whether they join the bank after this review.
- rn-s17-13 still teaches the alteplase bolus. The 2026 guideline gives tenecteplase as an equal choice. The item stays valid, but a tenecteplase item may be worth adding.
- rn-s17-15 names the subdural hematoma in the stem, so the bow-tie condition is easy. Left as is.

## Summary

50 bank items and 2 extra items were reviewed. 8 items had defects and 8 fixes were made, with 1 key change in an extra item. No bank key changed. `BATCH=s17 npx vitest run tests/bank.test.ts` passes 61 of 61 tests, and tsc reports no errors in s17.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
