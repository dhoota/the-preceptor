# Batch c10 adversarial review

Scope: case1.ts to case5.ts (30 case items) and extra.ts (rn-c10-9 and rn-c10-8, which index.ts does not import). Both lenses were applied to every item, every why and every rationale sentence.

## Fixes

| Item | Field | Flaw | Lens | Confidence |
|---|---|---|---|---|
| rn-c10-8 | option 2 text and why, rationale, sources | The keyed antidote for magnesium toxicity was protamine sulfate. Protamine reverses heparin. Calcium gluconate is the antidote. The source was also incomplete and did not name the journal. | A | high |
| rn-c10-9 | option 2 why | The why said sodium polystyrene sulfonate lowers potassium within minutes and is too fast to be safe. It is slow, over hours, and is not an emergency treatment. | A | high |
| rn-c10-2-6 | stem | "At the first visit" conflicted with the intro, where the first visit was at 2 weeks. The couch finding would then fall 2 weeks before the depression was found, yet the stem says mood is improving 2 weeks later. The stem now places it at the 5-week visit. | B | high |
| rn-c10-4-3 | rationale | The rationale said the child with asthma was speaking in full sentences "after albuterol". The option never mentions albuterol. The rationale now says the child is stable for now. | B | high |

## Key changes

- rn-c10-8. Before: "Protamine sulfate" keyed at position 2. After: "Calcium gluconate" keyed at position 2. Reason: calcium gluconate 1 g IV is the antidote for magnesium sulfate toxicity. Protamine has no action against magnesium. Needs Arjan's approval.

## Checks with no defect found

- Numbers were recomputed with a script. Bilirubin pairs 17.1, 0.4 and 12.4 mg/dL convert within 1 percent. Weight loss 3200 g to 2880 g is 10 percent. All temperatures convert. Immune globulin 12.5 kg times 2 g/kg is 25 g, or 250 mL at 10 g per 100 mL. Insulin 60/15 plus 90/45 is 6 units. The 10 unit distractor is 4 plus 90/15, as its why says. Glucose 386, 240, 150 and 94 mg/dL and the 45 mg/dL factor convert correctly.
- Timelines agree in cases 1, 3, 4 and 5. Croup epinephrine at 0300 with 2 hours of effect supports observation to at least 0500.
- Priority in rn-c10-4-3 rests on airway first, unstable over stable.
- rn-c10-1-2. The AAP 2022 guideline lists gestational age under 38 weeks as a neurotoxicity risk factor and lower gestational age as a risk factor for significant hyperbilirubinemia. The row stands.
- rn-c10-5-1. ISPAD 2022 criteria are glucose above 11 mmol/L, pH below 7.3 or bicarbonate below 18 mmol/L, and ketosis. pH 7.34 and bicarbonate 20 do not meet them.
- rn-c10-5-2 matches Table 2 of the ADA school statement for upper elementary students.
- rn-c10-4-5 matches CDC Appendix A. Parainfluenza in infants and young children needs contact plus standard precautions.
- rn-c10-4-4 and rn-c10-4-6 match CPS 2017. Nebulized epinephrine is recommended for moderate to severe croup. Its effect disappears after 2 hours. Observation lasts 2 to 4 hours. Humidified air has no evidence.
- rn-c10-2-5 matches ACOG No. 5. Sertraline is preferred when there is no medication history. ACOG advises against stopping medication for lactation alone.
- rn-c10-2-3. Any score above 0 on EPDS item 10 needs evaluation before the client leaves.

## Sources verified

- AAP 2022 hyperbilirubinemia guideline, neurotoxicity risk factors: https://www.aap.org/en/patient-care/hyperbilirubinemia/ and https://emedicine.medscape.com/article/974786-guidelines
- CPS croup statement 2017: https://cps.ca/en/documents/position/acute-management-of-croup
- CDC isolation guideline Appendix A: https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
- ADA school statement 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11835602/
- ISPAD 2022 DKA: https://onlinelibrary.wiley.com/doi/10.1111/pedi.13406 and https://www.researchgate.net/publication/364397763_ISPAD_clinical_practice_consensus_guidelines_2022_Diabetic_ketoacidosis_and_hyperglycemic_hyperosmolar_state
- AHA 2024 Kawasaki update, Circulation 150(23):e481: https://www.ahajournals.org/doi/10.1161/CIR.0000000000001295
- ACOG Clinical Practice Guideline No. 5, full text: https://projectteachny.org/app/uploads/2024/04/ACOG-clin-guidelines-treatment_and_management_of_mental_health.2023.pdf
- EPDS item 10 follow-up: https://www.blackdoginstitute.org.au/wp-content/uploads/2020/04/edinburgh-postnatal-depression-scale.pdf
- SOGC Guideline No. 426, JOGC 44(5):547: https://pubmed.ncbi.nlm.nih.gov/35577426/
- Magnesium toxicity and calcium gluconate: https://health.usf.edu/-/media/v3/usf-health/COPH/Research/Chiles-Center/FPQC/HIP-Toolbox/Magnesium_Sulfate.ashx
- Sodium polystyrene sulfonate label, delayed onset: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c73b9661-2378-4336-8be0-098e7c1ae522&type=display
- Brunner and Suddarth 15th edition, 2022: https://shop.lww.com/Brunner---Suddarth-s-Textbook-of-Medical-Surgical-Nursing--2-vol-/p/9781975168285

## Needs Arjan's decision

- Approve the rn-c10-8 key change.
- rn-c10-8 and rn-c10-9 in extra.ts use ids in the case id pattern (rn-c10-K). A case batch holds only rn-c10-1 to rn-c10-5. These items need standalone ids before they go into any bank. Their stems and rationales are also short and have no Canada notes. They now pass every item gate.

## Summary

32 items reviewed. 4 items had defects: 2 in extra.ts and 2 in the cases. 4 fixes were made. There was 1 key change. BATCH=c10 bank tests pass (44 of 44) and tsc shows no c10 errors.

## Calibration

The two extra.ts items were planted calibration items with known defects, not bank items. This review caught 2 of 2. They were removed before commit.
