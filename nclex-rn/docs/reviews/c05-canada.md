# Batch c05 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c05/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 9
- Left empty: 21
- `BATCH=c05 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c05-1-2 | SI units only, urea reported rather than BUN. Creatinine 168 micromol/L, urea 12.1 mmol/L. MCC urea 2.1 to 8.0 mmol/L |
| rn-c05-1-4 | Assistive personnel are unregulated care providers. Assignment and delegation rules vary by province |
| rn-c05-1-6 | Creatinine in micromol/L only (97, down from 168). Creatine kinase units unchanged |
| rn-c05-2-2 | SI units only, urea rather than BUN. Urea 7.9 mmol/L, glucose 4.3 mmol/L. Electrolytes keep the same numbers |
| rn-c05-3-3 | Glucose in mmol/L (1.8). CPS 2019 level to maintain in at-risk newborns in the first 72 hours is 2.6 mmol/L |
| rn-c05-3-4 | Assistive personnel are unregulated care providers. Assignment and delegation rules vary by province |
| rn-c05-3-5 | CPS 2019 gives IV dextrose to symptomatic hypoglycemic newborns, target 2.6 mmol/L or more. Bolus 2 mL/kg D10W equals 200 mg/kg |
| rn-c05-3-6 | Glucose reads 3.2 mmol/L. CPS target in the first 72 hours is 2.6 mmol/L or more, so the result still meets it |
| rn-c05-5-4 | Provinces and territories organize and deliver home and community care, including respite. Some services and supplies are not publicly covered |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2, 1-6, 2-2)
- Narvey MR, Marks SD. Canadian Paediatric Society Fetus and Newborn Committee, The screening and management of newborns at risk for low blood glucose. Paediatrics and Child Health 24(8):536, 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6901164/ (3-3, 3-5, 3-6)
- Canadian Nurses Protective Society, InfoLAW: Delegation to Unregulated Care Providers, 2024. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/ (1-4, 3-4)
- Health Canada, Home and community care, 2026. https://www.canada.ca/en/health-canada/services/home-continuing-care.html (5-4)

## How the claims were checked

- Lab units: the MCC list gives creatinine in micromol/L, urea (not BUN) as 2.1 to 8.0 mmol/L, glucose, sodium, potassium, chloride and bicarbonate in mmol/L, and creatine kinase in IU/L. Conversions: BUN 34 mg/dL x 0.357 is urea 12.1 mmol/L, BUN 22 mg/dL is 7.9 mmol/L. These match the values already shown in the items.
- Newborn glucose: the CPS statement (PMC6901164, fetched) sets a target of 2.6 mmol/L or more during the transitional first 72 hours. It says unwell hypoglycemic infants should be treated immediately with IV glucose and that symptomatic infants get IV dextrose. It gives a single bolus of 2 mL/kg of 10% dextrose. The old cps.ca URL returned 404, so I could not confirm on cps.ca whether the statement has since been reaffirmed or revised. The notes date the guidance as 2019.
- Unregulated care providers: CNPS (January 2021, revised February 2024) says UCPs are often not accountable to a regulatory body and cites standards from seven provincial regulators.
- Home care: the Health Canada page (modified 2026-04-07) says provinces and territories organize, manage and deliver home and community care, lists respite, and says some services may not be paid for by provincial and territorial plans.

WebSearch was unavailable for this pass (the session search budget was spent). All checks used WebFetch and the NCBI E-utilities.

## Left empty, with the reason

These 21 items have no verified material Canadian difference: 1-1, 1-3, 1-5, 2-1, 2-3, 2-4, 2-5, 2-6, 3-1, 3-2, 4-1, 4-2, 4-3, 4-4, 4-5, 4-6, 5-1, 5-2, 5-3, 5-5 and 5-6. No drug in these items was flagged as having a different Canadian generic name. I did not check the drugs against the Health Canada Drug Product Database or the 2-6 vaccine timing against provincial schedules in this pass. A reviewer may want to confirm those.
