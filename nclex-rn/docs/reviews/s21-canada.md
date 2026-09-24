# Batch s21 Canada notes

Batch s21 holds 50 stand-alone items in Reduction of Risk Potential. Only the files that index.ts imports (part1.ts to part5.ts) were edited. extra.ts and common.ts were left alone. Only `canada` and `sources` were changed. New sources are written inline in each item.

## Counts

- Notes written: 2
- Left empty: 48

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-s21-19 | Potassium in mmol/L only (4.2 mmol/L). The 2020 CCS/CHRS AF guideline calls for at least 3 weeks of therapeutic anticoagulation or a TEE before elective cardioversion. |
| rn-s21-33 | Potassium and creatinine in SI units only (5.9 mmol/L, 168 micromol/L). MCC range for potassium 3.5 to 5.1 mmol/L. |

## Sources added

- Andrade JG, Aguilar M, Atzema C, et al. Canadian Cardiovascular Society and Canadian Heart Rhythm Society. The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society Comprehensive Guidelines for the Management of Atrial Fibrillation. Canadian Journal of Cardiology 36(12):1847. 2020. Added to rn-s21-19. https://pubmed.ncbi.nlm.nih.gov/33191198/
- Medical Council of Canada. Normal lab values reference list. 2020. Added to rn-s21-19 and rn-s21-33. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/

No item has more than 4 sources. rn-s21-19 has 3 and rn-s21-33 has 2.

## How the claims were checked

- Lab units: the MCC page (updated December 2020) gives potassium 3.5 to 5.1 mmol/L and creatinine in micromol/L. For potassium, 1 mEq equals 1 mmol. Creatinine 1.9 mg/dL times 88.4 gives 168 micromol/L.
- Cardioversion: search results for the 2020 CCS/CHRS guideline and the 2022 CPJ pharmacist summary state that every client planned for elective cardioversion should receive therapeutic anticoagulation for at least 3 weeks, with a TEE as the alternative. No newer CCS AF guideline was found. The CCS is stricter than the US 48 hour framing for unplanned cardioversion (12 hours for higher risk clients), so the draft wording "when AF lasts over 48 hours" was changed to "before elective cardioversion". The key (missed apixaban doses) holds. The CJC full text and the CCS pocket guide could not be opened (HTTP 403 and a TLS chain error), so the wording was confirmed through search result extracts.

## Left empty, with the reason

- rn-s21-01 to 06 and 09 (moderate sedation, naloxone, flumazenil): same drug names and practice in Canada.
- rn-s21-07 (cuff size), 08 (pulse deficit), 10 (Cushing triad), 43 (infant vital signs), 44 (blunted fever), 45 (fluid overload trend), 48 (early warning signs): no labs in non-SI units and no Canadian threshold that changes the item.
- rn-s21-40 (phototherapy): the item turns on nursing care under the lights, not on a bilirubin threshold.
- rn-s21-25 (enoxaparin and epidural removal), 26 and 27 (opioid sedation), 34 (acetaminophen named in a distractor, the same name in Canada): same names and practice.
- The other empty items (11 to 18, 20 to 24, 28 to 32, 35 to 39, 41, 42, 46, 47, 49, 50) have no material Canadian difference.

## Tests

`BATCH=s21 npx vitest run tests/bank.test.ts` passes, 61 of 61.
