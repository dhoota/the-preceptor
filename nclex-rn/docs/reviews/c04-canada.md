# Batch c04 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c04/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

This pass replaces the earlier c04 report. The batch now covers bronchiolitis, acute kidney injury with hyperkalemia, atrial fibrillation, upper gastrointestinal bleeding and COPD home care. Only two notes from the earlier pass were still in the files (1-5 and 5-5). Both were checked again and kept.

- Notes written: 7
- Left empty: 23
- `BATCH=c04 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c04-1-5 | PHAC lists droplet and contact precautions for RSV and bronchiolitis. The item asks for CDC guidance, so the key stays contact (kept, rechecked) |
| rn-c04-2-2 | SI units only, urea replaces BUN. Creatinine rose from 88 to 256 micromol/L |
| rn-c04-2-3 | Potassium in mmol/L, numerically equal to mEq/L, so 6.8 is still above the 6.5 threshold |
| rn-c04-2-6 | Glucose reads 3.2 mmol/L, below the MCC random glucose lower limit of 4.0 mmol/L |
| rn-c04-4-3 | Hemoglobin 79 g/L, hematocrit 0.24 L/L, urea 16.4 mmol/L in place of BUN. MCC urea range 2.1 to 8.0 mmol/L |
| rn-c04-4-5 | Hemoglobin reads 68 g/L, below the 70 g/L threshold in the item |
| rn-c04-5-5 | US federal advance directive law does not apply. Directive laws and names vary by province (kept, rechecked) |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (2-2, 2-3, 2-6, 4-3, 4-5)

Sources already in place and rechecked:

- Public Health Agency of Canada, Routine Practices and Additional Precautions, Part C, 2017. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/part-c.html (1-5)
- Canadian Nurses Protective Society, InfoLAW: Consent for the Incapable Adult, 2025. https://cnps.ca/article/consent-for-the-incapable-adult/ (5-5)

## How the claims were checked

- MCC list (fetched): potassium 3.5 to 5.1 mmol/L, sodium and bicarbonate in mmol/L, urea 2.1 to 8.0 mmol/L with no BUN listed, creatinine in micromol/L, random glucose 4.0 to 11.0 mmol/L, male hemoglobin 125 to 170 g/L, hematocrit 0.38 to 0.50 L/L.
- Conversions: BUN 46 mg/dL x 0.357 is urea 16.4 mmol/L. Hemoglobin 7.9 g/dL is 79 g/L and 6.8 g/dL is 68 g/L. These match the values already shown in the items.
- PHAC Part C table (fetched): RSV and bronchiolitis both list droplet and contact precautions for the duration of symptoms.
- CNPS consent InfoLAW (fetched, reviewed September 2025): statutes may set how an advance directive is made, and the footnotes list differently named acts by province.

## Checked and left empty

- 2-4: sodium zirconium cyclosilicate (Lokelma) is authorized by Health Canada, per the Summary Basis of Decision and the CADTH review. Acetaminophen is already the Canadian name.
- 3-5: diltiazem hydrochloride injection is in the Health Canada Drug Product Database (Sandoz Canada, DIN 02244728), so IV diltiazem is available.
- 2-6: the Diabetes Canada threshold of below 4.0 mmol/L applies to people with diabetes on insulin or secretagogues. This client has no diabetes, so the note uses the MCC lower limit instead.
- 5-6: CAMH guidance for Canadian clinicians describes a reduce to quit approach and clinician-directed use of more than one patch. A note risked softening the key on self-directed extra patches and smoking near oxygen, so none was written. A reviewer may want to weigh this.

## Left empty, with the reason

These 23 items have no verified material Canadian difference: 1-1, 1-2, 1-3, 1-4, 1-6, 2-1, 2-4, 2-5, 3-1, 3-2, 3-3, 3-4, 3-5, 3-6, 4-1, 4-2, 4-4, 4-6, 5-1, 5-2, 5-3, 5-4 and 5-6. Albuterol (salbutamol in Canada) appears only in the case 5 history, and no item turns on it.
