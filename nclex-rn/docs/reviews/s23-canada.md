# Batch s23 Canada pass

Scope: the 50 items in part1.ts to part5.ts imported by `src/bank/s23/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 5
- Left empty: 45
- `BATCH=s23 npx vitest run tests/bank.test.ts`: 61 of 61 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-s23-01 | Magnesium in mmol/L, MCC range 0.74 to 1.03 mmol/L |
| rn-s23-04 | Potassium in mmol/L, same number as mEq/L, MCC range 3.5 to 5.1 mmol/L |
| rn-s23-16 | Glucose in mmol/L, Diabetes Canada describes HHS glucose as typically 34.0 mmol/L or higher with osmolality above 320 |
| rn-s23-26 | Potassium in mmol/L, MCC range 3.5 to 5.1 mmol/L |
| rn-s23-41 | Sodium and potassium in mmol/L, MCC sodium range 136 to 146 mmol/L |

## Sources added

- Medical Council of Canada, List of normal lab values, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (added to 01, 04, 16, 26, 41)
- Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee, Hyperglycemic Emergencies in Adults, Canadian Journal of Diabetes 42(Suppl 1):S109, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15 (16)

## How the claims were checked

- Lab units and ranges: the MCC list uses SI units only. It gives magnesium as 0.74 to 1.03 mmol/L, potassium as 3.5 to 5.1 mmol/L, sodium as 136 to 146 mmol/L and blood osmolality as 275 to 295 mmol/kg.
- HHS: the current Diabetes Canada chapter 15 says plasma glucose in HHS is "typically" 34.0 mmol/L or higher, with plasma osmolality above 320. The item key does not change, since 52.2 mmol/L and 356 meet both the Canadian and the ADA criteria.

## Left empty, with the reason

These 45 items have no material Canadian difference: 02, 03, 05 to 15, 17 to 25, 27 to 40 and 42 to 50. The blood gas items (03, 06, 14, 45) already show HCO3 in mmol/L, and PaCO2 stays in mmHg. Items 11, 27 and 29 already show SI values, and none of these keys turns on the exact number. No drug in the batch needed a Canadian name or formulation note, and the aspirin 324 mg option in 32 is a distractor.
