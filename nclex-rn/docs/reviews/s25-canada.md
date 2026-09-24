# Batch s25 Canada notes

Batch s25 holds 50 items, mostly Physiological Adaptation. Only the part files that index.ts imports were edited. extra.ts was left alone. Only the canada field and the sources list were changed.

## Counts

- Notes written: 6
- Left empty: 44

## Notes written

- rn-s25-14: Hematocrit as a fraction in L/L, with the Medical Council of Canada adult range of 0.38 to 0.50 L/L.
- rn-s25-24: Urea in mmol/L instead of BUN in mg/dL, with the Medical Council of Canada range of 2.1 to 8.0 mmol/L.
- rn-s25-26: SOGC Guideline No. 426 uses adverse conditions and severe complications, not severe features. Platelets as x 10^9/L.
- rn-s25-30: Neutrophils as x 10^9/L, with the Medical Council of Canada absolute neutrophil range of 2.0 to 7.5 x 10^9/L.
- rn-s25-35: Diabetes Canada adds IV dextrose at 14.0 mmol/L and withholds insulin while potassium is below 3.3 mmol/L. Both support the key.
- rn-s25-40: Assistive personnel are unregulated care providers in Canada, and delegation rules vary by province.

## Sources added

- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s25-14, 24 and 30. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Magee LA, Smith GN, Bloch C, et al. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 426: Hypertensive Disorders of Pregnancy. Journal of Obstetrics and Gynaecology Canada 44(5):547. 2022. Added to rn-s25-26. https://pubmed.ncbi.nlm.nih.gov/35577426/
- Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee. Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109. 2018. Added to rn-s25-35. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15
- Canadian Nurses Protective Society. InfoLAW: Delegation to Unregulated Care Providers. 2024. Added to rn-s25-40. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/

## Other checks

- MCC values for hematocrit, urea, absolute neutrophils and platelets were read from the MCC page.
- The Diabetes Canada 14.0 mmol/L dextrose threshold and the 3.3 mmol/L potassium hold were read from chapter 15. No newer chapter was found.
- The full text of SOGC Guideline No. 426 returned 403. The adverse condition and severe complication groups (including thrombocytopenia as an adverse condition and platelets below 50 x 10^9/L as a severe complication) were checked in a 2022 review table of the SOGC criteria (PMC9225655), and a 2026 Canadian study citing No. 426 that uses the same categories (PMC12757900). A follow-up check against the guideline's own table is worth doing.
- WebSearch budget for the session was used up, so checks were done with WebFetch and the Europe PMC API.

## Left empty on purpose

- Items that already show SI units in the stem (sodium, potassium, glucose, magnesium, ammonia, hemoglobin, bicarbonate) got no units note.
- rn-s25-48: SOGC Guideline No. 431 could not be read in full to confirm its first-line atony steps, and the first action is the same in Canada.
- The other items use drugs, thresholds and steps that are the same in Canada.

## Tests

BATCH=s25 npx vitest run tests/bank.test.ts passes, 61 of 61. An earlier run briefly failed the whole-bank near duplicate stem check on rn-s02-33 and rn-s03-29, outside s25. It passed on rerun without any change from this pass.
