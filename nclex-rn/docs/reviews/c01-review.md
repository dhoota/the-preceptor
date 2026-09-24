# Batch c01 adversarial review

Scope: case1.ts to case5.ts (30 case items) and extra.ts (rn-c01-9 and rn-c01-8, which index.ts does not import). Both lenses were applied to every item. Every number was recomputed with a script: temperature pairs, creatinine, glucose and magnesium SI pairs, the three calc items (6 mL, 280 mL, 1 mL), weight change, intake and output, and percent weight loss.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c01-9 | options[1], rationale | Keyed protamine sulfate as the antidote for magnesium toxicity. Protamine reverses heparin. The antidote is calcium gluconate (SOGC 426). | A | high |
| rn-c01-8 | rationale | Stated the client has asthma. The stem never gives asthma. Rewrote without the invented history. | B | high |
| rn-c01-3-2 | refs, rows, rationale | Used PALS toddler ranges (HR 98 to 140, RR 24 to 40) for a 3-year-old. PALS puts ages 3 to 5 in the preschool band (HR 80 to 120, RR 20 to 28), and its toddler RR is 22 to 37, not 24 to 40. RR 32 was keyed expected for age but is above the preschool range. Changed the chart RR to 26/minute and the refs to the preschool band. | A, B | high |
| rn-c01-3 (case tab) | Vital Signs | RR 32/minute changed to 26/minute to support the fix above. No other item cites the RR. | B | high |
| rn-c01-3-2 | rows[4], rationale | Row "Tantrum when the IV is started" was a finding the case never gave, and no IV had been started at this point. Replaced with the charted finding "Cries and clings to his mother when approached". | B | high |
| rn-c01-4 (case tab), rn-c01-4-1, rn-c01-4-2, rn-c01-4-3 | History, rationales, refs | Timeline conflict. Last drink 36 hours before 0530 put symptom onset (after midnight) at about 30 hours, outside the 6 to 24 hour onset the item itself cites. Changed the last drink to about 24 hours ago (before the morning admission), which fits onset, hallucinations at 12 to 24 hours and the seizure peak at 24 hours. | B | medium |
| rn-c01-4-3 | refs, rationale, sources | Seizure window given as 6 to 48 hours. ASAM 2020 says 8 to 48 hours with risk peaking around 24 hours. The claim that low magnesium lowers the seizure threshold had no supporting source, so Brunner was added. | A | high |
| rn-c01-4-5 | source year | Lorazepam label year given as 2023. The linked DailyMed label is Rev. 06/21. Set to 2021. | A | high |
| rn-c01-3-2, rn-c01-3-3, rn-c01-3-5 | source url | The PALS Provider Manual citation linked an AAP Pediatric Care Online page, which is a different work. Removed the mismatched url. | A | medium |
| rn-c01-1-2 | rows[6] | Row said "Daily canned soup and deli meat". The history says "most days". | B | high |
| rn-c01-1-3 | rationale | Called anxiety "real". The chart never shows anxiety. Removed the claim. | B | medium |
| rn-c01-5-3 | rationale, options[2].why | Cited "urgency" and "urgent trips". The report gives new incontinence, not urgency. | B | medium |
| rn-c01-5-5 | tokens[1] | Situation token dated the new confusion "since 0700". The case shows the change began overnight (rn-c01-5-1, rn-c01-5-2). | B | high |
| rn-c01-5-2 | process | Tagged communication. The item is a delirium versus dementia matrix and tests clinical judgment. Reset to the default clinical-judgment. | B | medium |

## Key changes

- rn-c01-9. Before: key "Protamine sulfate". After: key "Calcium gluconate" (same position). Reason: calcium gluconate is the antidote for magnesium sulfate toxicity (SOGC Guideline No. 426, 2022). Protamine reverses heparin and has no effect on magnesium. Needs Arjan's approval.

No case item key changed.

## Sources verified

- AHA/ACC/HFSA 2022 heart failure guideline, Circulation 145(18):e895. https://www.ahajournals.org/doi/10.1161/CIR.0000000000001063 and https://pubmed.ncbi.nlm.nih.gov/35363499/
- FDA furosemide injection label, 2024 PDF confirmed as a furosemide injection label. "Given slowly (1 to 2 minutes)" and ototoxicity with rapid injection confirmed on DailyMed furosemide 10 mg/mL labels. https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018267s029lbl.pdf and https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c71371a7-75c5-45b8-b762-8d782d4c71bc
- ACOG Practice Bulletin No. 183, 2017. Still current. A 2025 Clinical Practice Update covers only nonsurgical hemorrhage control devices. Methylergonovine avoided in hypertension, carboprost avoided in asthma. https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage and https://journals.lww.com/greenjournal/abstract/2025/10000/acog_clinical_practice_update__use_of_nonsurgical.20.aspx
- NCSBN and ANA National Guidelines for Nursing Delegation, 2019. https://www.ncsbn.org/public-files/NGND-PosPaper_06.pdf
- King CK et al. CDC MMWR 52(RR-16), 2003. Confirms the 20 mL/kg bolus, 5 mL ORS aliquots, avoiding juice, and early refeeding shortening illness. It gives no capillary refill cutoff. https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5216a1.htm
- PALS 2020 ranges, preschool (3 to 5 years) HR 80 to 120 awake and RR 20 to 28. https://cpr.heart.org/-/media/cpr2-files/course-materials/2020-pals/2020-course-materials/pals_science-summary_table_ucm_506835.pdf and https://media.api.sf.gov/documents/EMSA-Protocol-14.1-Pediatric-Vital-Signs-Final-10.1.25.pdf
- CDC/HICPAC 2007 Isolation Guideline Appendix A. Rotavirus: contact plus standard precautions for the duration of illness, with prolonged shedding. https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
- ASAM Alcohol Withdrawal Management guideline, 2020. Onset 6 to 24 hours, seizures 8 to 48 hours with a peak around 24 hours, hallucinations 12 to 24 hours. Magnesium is given for hypomagnesemia or past withdrawal seizures (V.9). https://www.asam.org/docs/default-source/quality-science/the_asam_clinical_practice_guideline_on_alcohol-1.pdf
- Lorazepam Injection USP label (Akorn), Rev. 06/21. Dilute with an equal volume and inject no faster than 2 mg/minute. https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b5b17cde-a94c-4105-871c-54e7d2bd47e8
- Inouye SK et al. Delirium in elderly people. Lancet 2014 383(9920):911. https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)60688-1/abstract
- Montero-Odasso M et al. World falls guidelines. Age and Ageing 2022 51(9):afac205. https://academic.oup.com/ageing/article/51/9/afac205/6730755
- 42 CFR 483.12. Freedom from restraints imposed for discipline or convenience. https://www.law.cornell.edu/cfr/text/42/483.12
- IHI SBAR Tool. The page links a PDF dated October 2023, so the year 2023 stands. https://www.ihi.org/library/tools/sbar-tool-situation-background-assessment-recommendation
- Magee LA et al. SOGC Guideline No. 426, JOGC 2022 44(5):547. Calcium gluconate for magnesium toxicity. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Vallerand AH, Sanoski CA. Davis's Drug Guide for Nurses, 18th edition, 2023. https://www.fadavis.com/product/nursing-pharmacology-davis-drug-guide-deglin-vallerand-sanoski-18
- Brunner and Suddarth 15th edition, Lowdermilk 13th edition and Wong's 12th edition are textbook citations, and their editions and years are correct.

## Needs Arjan's decision

- rn-c01-9 key change above.
- extra.ts ids rn-c01-9 and rn-c01-8 follow the case id pattern rn-cNN-K. They would collide with future case ids 8 and 9. Rename them before they join the bank.
- rn-c01-4 timeline: the last drink moved from about 36 to about 24 hours. If you would rather keep 36 hours, the onset reference and the 4-2 rationale then need rewording for a delayed onset.
- rn-c01-5-5: the vitals (RR 22, new altered mentation, HR 104, BP down to 108/62) meet two qSOFA criteria. A recommendation of "see her today" may be less urgent than some reviewers expect. The key is still the best of the tokens.
- rn-c01-5-4: the AP measures vital signs on a resident with new fever and tachycardia. This is defensible because the nurse interprets them, but local policy may differ.
- rn-c01-2-5: weighing pads by the AP during active hemorrhage, as the writer flagged. Left as is.
- The CDC gastroenteritis MMWR is from 2003. No newer CDC guidance replaces it, so it was kept.

## Summary

32 items reviewed (30 case items and 2 unimported extras). 14 fixes across 12 items, plus the case 3 and case 4 chart tabs. There is 1 key change (rn-c01-9) and 0 case key changes. `BATCH=c01 npx vitest run tests/bank.test.ts` passes 44 of 44. tsc shows no c01 errors. Both extra items pass itemProblems.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
