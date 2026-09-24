# Batch c01 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c01/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 10
- Left empty: 20
- `BATCH=c01 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c01-1-2 | SI units only for the heart failure labs |
| rn-c01-1-6 | Potassium in mmol/L, same lower limit |
| rn-c01-2-3 | SOGC Guideline No. 431 staging of postpartum hemorrhage |
| rn-c01-2-4 | Methylergonovine not sold in Canada, ergonovine used instead, carboprost available |
| rn-c01-2-5 | Assistive personnel are unregulated care providers, assignment and delegation rules vary by province |
| rn-c01-3-4 | PHAC lists contact precautions for rotavirus for the duration of symptoms, "routine practices" term |
| rn-c01-4-3 | Magnesium in mmol/L, Canadian lower limit about 0.70 to 0.74 mmol/L |
| rn-c01-4-5 | Canadian lorazepam injection is 4 mg/mL, targeted substance under CDSA Schedule IV |
| rn-c01-5-4 | Personal support workers and health care aides in LTC, rules vary by province |
| rn-c01-5-6 | LTC regulated provincially, not by CMS. Ontario Fixing Long-Term Care Act, 2021 on restraint and abuse reporting |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (added to 1-2, 1-6, 4-3)
- Robinson D, Basso M, Chan C, Duckitt K, Lett R. SOGC, Guideline No. 431: Postpartum Hemorrhage and Hemorrhagic Shock, JOGC 44(12):1293, 2022. https://www.jogc.com/article/S1701-2163(22)00668-5/abstract (2-3)
- Association of Ontario Midwives, Clinical Practice Guideline No. 17: Prevention and Management of Postpartum Hemorrhage, 2024. https://www.ontariomidwives.ca/sites/default/files/2024-06/CPG-Postpartum%20Hemorrhage-2024-PUB.pdf (2-4)
- Canadian Nurses Protective Society, InfoLAW: Delegation to Unregulated Care Providers, 2024. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/ (2-5, 5-4)
- Public Health Agency of Canada, Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings, Part C, 2017. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/part-c.html (3-4)
- Health Canada, Drug Product Database, Lorazepam Injection USP, DIN 02243278, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=67176 (4-5)
- Legislative Assembly of Ontario, Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1, sections 28 and 35, 2021. https://www.ontario.ca/laws/statute/21f39 (5-6)

## How the claims were checked

- Methylergonovine: the AOM guideline says it "has not been commercially available in Canada since 1998". The Health Canada Drug Product Database (DPD) has no methylergonovine product. Ergonovine maleate 0.25 mg/mL (Hikma, DIN 02441241) is marketed. The Hikma prescribing information lists hypertension as a contraindication. Carboprost (Hemabate, DIN 02230417) and generic versions are marketed. The AOM guideline lists asthma as a contraindication.
- SOGC staging: taken from the SOGC 2022 table as reproduced in AOM CPG No. 17, Table 1. Stage 1 is 500 to 1000 mL after a vaginal birth. Stage 2 is 1000 to 1500 mL, postural hypotension, or a heart rate above 110/minute.
- Lorazepam: in the DPD, the only lorazepam injections marketed now are 4 mg/mL (Sandoz DIN 02243278, Fresenius Kabi DIN 02550962). The one 2 mg/mL product was cancelled. The DPD lists lorazepam under "Targeted Substances (CDSA IV)".
- Lab units and limits: the MCC list uses SI units. It gives potassium as 3.5 to 5.1 mmol/L and magnesium as 0.74 to 1.03 mmol/L.
- Rotavirus: PHAC Part C, Table 5 lists contact precautions for the duration of symptoms.
- Fixing Long-Term Care Act, 2021: section 28(1) requires an immediate report to the Director. Section 35 allows restraint by a physical device only when it is in the plan of care.

## Left empty, with the reason

These 20 items have no material Canadian difference: 1-1, 1-3, 1-4, 1-5, 2-1, 2-2, 2-6, 3-1, 3-2, 3-3, 3-5, 3-6, 4-1, 4-2, 4-4, 4-6, 5-1, 5-2, 5-3 and 5-5. Furosemide 10 mg/mL injection is marketed in Canada, so 1-5 has no note. The lab values in 3-2 and 3-3 are already shown in SI units, and neither key depends on a lab value.
