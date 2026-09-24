# Batch c09 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c09/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 8
- Left empty: 22
- `BATCH=c09 npx vitest run tests/bank.test.ts`: 43 of 44 pass. Every c09 test passes. The one failure is the whole bank near duplicate stem check, which flags rn-s25-47 against rn-s26-07 (Jaccard 0.54). Neither item is in c09, and this pass changed no stems.

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c09-1-4 | The US NHSN protocol does not apply. Hospitals report reactions to Canadian Blood Services (Héma-Québec in Quebec) and to provincial programs that feed the PHAC TTISS |
| rn-c09-1-5 | The Joint Commission goals do not apply. The Accreditation Canada Client Identification practice needs at least two person-specific identifiers, and a room or bed number never counts as one |
| rn-c09-2-1 | Platelets in SI units, 88 x 10^9/L down from 230 x 10^9/L. MCC range 130 to 380 x 10^9/L |
| rn-c09-2-2 | Platelet series in SI units, 230, 142, 196 and 88 x 10^9/L |
| rn-c09-2-4 | Warfarin threshold reads 150 x 10^9/L, current count 88 x 10^9/L |
| rn-c09-3-1 | Diabetes Canada uses the same pregnancy targets in mmol/L (fasting below 5.3, 1 hour below 7.8). It prefers a 50 g challenge then a 75 g test, not a 3-hour test |
| rn-c09-3-2 | Glucose in mmol/L only. Fasting 5.5 to 5.8 mmol/L is above the 5.3 mmol/L goal |
| rn-c09-4-5 | Assistive personnel are unregulated care providers. Delegation rules come from each provincial regulator and vary by province |

## Sources added

- National Advisory Committee on Blood and Blood Products, Overview of Adverse Transfusion Reaction Reporting for Hospitals in Canada, 2024. https://nacblood.ca/en/resource/overview-adverse-transfusion-reaction-reporting-hospitals-canada-nac-and-quebec (1-4)
- Accreditation Canada, Required Organizational Practices 2021 Handbook, Client Identification, 2021. https://vitalitenb.ca/images/files/documents/medecins/2021_rop_handbook.pdf (1-5)
- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (2-1, 2-2, 2-4)
- Feig DS, Berger H, Donovan L, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee, Diabetes and Pregnancy. Canadian Journal of Diabetes 42(Suppl 1):S255, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-36 (3-1, 3-2)
- Canadian Nurses Protective Society, InfoLAW: Delegation to Unregulated Care Providers, 2024. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/ (4-5)

## How the claims were checked

- Transfusion reporting: the NAC overview (April 5, 2024, fetched) says hospitals report blood component reactions to Canadian Blood Services or Héma-Québec. It says they report to provincial TTISS designates, and that TTISS reporting is voluntary. The Canadian Blood Services Clinical Guide chapter on transfusion reactions (Laureano, Khandelwal, Yan, 2022, fetched) says to stop the transfusion and notify the blood bank. It points to the Canadian Blood Services reporting guide for Canada outside Quebec.
- Client identification: the 2021 ROP Handbook (text extracted from the PDF) requires at least two person-specific identifiers. It states that a room or bed number is not person-specific. Accreditation Canada has moved to Qmentum Global. A 2025 Qmentum Global report for Michael Garron Hospital (text extracted) still lists Client Identification as a practice with tests for compliance, so the requirement is current.
- Platelets: the MCC list (fetched) gives 130 to 380 x 10^9/L. 1 per mm3 is 10^6 per litre, so 88 000/mm3 is 88 x 10^9/L.
- Pregnancy glucose: Diabetes Canada chapter 36 (fetched) gives fasting and preprandial below 5.3 mmol/L, 1 hour below 7.8 mmol/L and 2 hours below 6.7 mmol/L. Its preferred diagnosis is a 50 g challenge then a 75 g OGTT, and it does not use the 100 g 3-hour test. The citation was confirmed on PubMed (29650105).
- Delegation: the CNPS InfoLAW (January 2021, revised February 2024, fetched) says unregulated care providers are not accountable to a regulatory body. It cites guidance from several provincial regulators, so the rules vary by province.

## Left empty, with the reason

These 22 items have no verified material Canadian difference: 1-1, 1-2, 1-3, 1-6, 2-3, 2-5, 2-6, 3-3, 3-4, 3-5, 3-6, 4-1, 4-2, 4-3, 4-4, 4-6, 5-1, 5-2, 5-3, 5-4, 5-5 and 5-6.

- Case 1 labs already show hemoglobin in g/L, creatinine in micromol/L and potassium in mmol/L.
- 2-5: argatroban is marketed in Canada (Juno Pharma Canada, DIN 02561557, per the Health Canada Drug and Health Products Portal). The Canadian product is a 250 mg/2.5 mL concentrate that pharmacy dilutes, so the 1 mg/mL bag in the item still holds. No note.
- 4-4: a Canadian note would name Accreditation Canada for two identifiers, but the item already cites 4 sources, the maximum. The note was left empty rather than drop a cited source. A reviewer may want to swap one source.
- 5-6: the magnesium ref already gives 3.7 mmol/L, and no finding turns on a lab value. No note. I did not check the SOGC magnesium guideline against 5-4 and 5-6, so a reviewer may want to.
- 3-6: Diabetes Canada allows insulin or metformin when targets are not met. The item gives a prescribed insulin plan, so no note.
