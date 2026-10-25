# Batch s35 Canada pass

Canada pass on batch s35 after the review. Only the `canada` field and `sources` were changed in this pass.

## Counts

- Notes written: 9 (rn-s35-04, 07, 09, 14, 25, 36, 40, 44, 49)
- Left empty: 41. That includes the two items marked for pull (35 and 50).

Six notes give the SI reading of the lab value the item turns on, with the Medical Council of Canada range where it helps. Two notes give the Diabetes Canada potassium threshold of 3.3 mmol/L for holding insulin, against the 3.5 mmol/L of the 2024 US consensus. One note gives the longer Canadian Yescarta periods.

## Notes worth a second look

- rn-s35-44. The Health Canada product monograph for Yescarta (revised January 9, 2024) still says to stay near a specialized facility for 4 weeks and not drive for 8 weeks. The US label now says 2 weeks for both. A newer Canadian revision could not be checked because the Drug Product Database was offline.

## Left empty on purpose

- rn-s35-23. Extended-release injectable naltrexone appears not to be approved in Canada. The only sources found were a 2017 CADTH bulletin and summaries of the 2018 and 2024 CRISM guidelines. The current status could not be verified, so no note was written.
- rn-s35-20. Canadian marketing of olanzapine pamoate could not be confirmed either way.
- The other drugs in the batch use the same generic names in Canada, so no name note was needed.

## Sources added

- MCC_LABS. Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (items 04, 07, 14, 25, 36, 40)
- DC_HYPER_2018. Goguen J, Gilbert J, Diabetes Canada, Hyperglycemic Emergencies in Adults, Can J Diabetes 42(Suppl 1):S109, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15 (items 09, 49)
- YESCARTA_CA. Gilead Sciences Canada, YESCARTA Product Monograph, 2024. https://pdf.hres.ca/dpd_pm/00074215.PDF (item 44)

## Checks

`BATCH=s35 npx vitest run tests/bank.test.ts` passes all 62 tests.
