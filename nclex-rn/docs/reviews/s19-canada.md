# Batch s19 Canada notes

Batch s19 holds 50 stand-alone items in Reduction of Risk Potential. Only the files that index.ts imports (part1.ts to part5.ts) were edited. extra.ts and common.ts were left alone. Only `canada` and `sources` were changed. New sources are written inline in each item.

## Counts

- Notes written: 8
- Left empty: 42

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-s19-02 | Canadian Anesthesiologists' Society 2026 fasting times. Black coffee is a clear fluid, coffee with milk is not. |
| rn-s19-05 | Platelets reported as x 10^9/L (42 x 10^9/L, cutoff 50 x 10^9/L). |
| rn-s19-14 | Creatinine in micromol/L and potassium in mmol/L only. |
| rn-s19-18 | HCO3 in mmol/L (same number as mEq/L). PaCO2 stays in mmHg. |
| rn-s19-31 | Canadian labs report urea in mmol/L, not BUN in mg/dL. MCC range 2.1 to 8.0 mmol/L. |
| rn-s19-38 | Potassium in mmol/L only. MCC range 3.5 to 5.1 mmol/L. |
| rn-s19-40 | Diabetes Canada A1C target of 7.0% or less for most adults. |
| rn-s19-42 | HCO3 and potassium in mmol/L only. PaCO2 stays in mmHg. |

## Sources added

- Medical Council of Canada. Normal Lab Values. 2020. Added to rn-s19-05, 14, 18, 31, 38 and 42. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Canadian Anesthesiologists' Society. Guidelines to the Practice of Anesthesia, Revised Edition 2026. Canadian Journal of Anesthesia 73(1). 2026. Added to rn-s19-02. https://www.cas.ca/CASAssets/Documents/Practice-Resources/Guidelines/CAS_Guidelines_Anesthesia_2026.pdf
- Imran SA, Agarwal G, Bajaj HS, Ross S. Diabetes Canada Clinical Practice Guidelines Expert Committee. Targets for Glycemic Control. Canadian Journal of Diabetes 42(Suppl 1):S42. 2018. Added to rn-s19-40. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-8

No item has more than 4 sources.

## How the claims were checked

- Lab units: the MCC list (updated December 2020) gives creatinine in micromol/L, urea as 2.1 to 8.0 mmol/L, potassium as 3.5 to 5.1 mmol/L, bicarbonate as 21 to 32 mmol/L, arterial PCO2 as 32 to 45 mm Hg and platelets as 130 to 380 x 10^9/L. The list names urea, not BUN. For monovalent ions, 1 mEq equals 1 mmol.
- Fasting: section 4.2 of the CAS 2026 guidelines says fasting should be "Six hours after any meal containing solids", six hours after "nonhuman milk", and "Two hours after ingestion of clear fluids for adults". It lists "black tea or coffee" among clear fluids. Neither key changes.
- A1C: Diabetes Canada chapter 8 recommends targeting an A1C of 7.0% or less for most adults, individualized by age, function, life expectancy and hypoglycemia risk. PubMed PMID 29650110 confirms the citation. The key (improved but above goal) still holds.

## Left empty, with the reason

- rn-s19-22 (nonstress test): SOGC Guideline No. 441, Antenatal Fetal Health Surveillance (Niles KM et al., JOGC 45(9):665, 2023) replaces No. 197a. SOGC may classify the NST as normal, atypical or abnormal rather than reactive. The full text was behind a paywall (HTTP 403), so the criteria could not be confirmed and no note was written. This item should get a follow-up check.
- rn-s19-43 (late decelerations on oxytocin): SOGC uses its own intrapartum tracing classification (Guideline No. 396), but the item does not name a category and the action is the same. The guideline could not be read to confirm, so it is left empty.
- rn-s19-01 and 26 (eGFR and contrast): eGFR uses the same unit in Canada, and the hold practice is the same.
- rn-s19-20: the hemoglobin value is already shown in g/L, and the key does not turn on it.
- rn-s19-44 (enoxaparin), 41 (dantrolene), 49 (piperacillin-tazobactam, acetaminophen): same names, and no Canadian difference affects the item.
- The other empty items (03, 04, 06, 07, 08, 09, 10, 11, 12, 13, 15, 16, 17, 19, 21, 23, 24, 25, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 39, 45, 46, 47, 48, 50) have no material Canadian difference.

WebSearch had hit its session limit, so every claim was checked with WebFetch, the NCBI E-utilities and a local text extraction of the CAS PDF.

## Tests

`BATCH=s19 npx vitest run tests/bank.test.ts` passes, 61 of 61.
