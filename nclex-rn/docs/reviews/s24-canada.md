# Batch s24 Canada notes

Batch s24 holds 50 stand-alone items in Physiological Adaptation. Only the files that index.ts imports (part1.ts to part5.ts) were edited. extra.ts and common.ts were left alone. Only the `canada` field and the `sources` list were changed. No stem, choice, key or rationale was changed.

## Counts

- Notes written: 6
- Left empty: 44

## Notes written

- rn-s24-04: Platelets as x 10^9/L (8 x 10^9/L), with the Medical Council of Canada range of 130 to 380 x 10^9/L.
- rn-s24-21: Urea in mmol/L rather than BUN (about 6.4 to 15.7 mmol/L), creatinine in micromol/L (about 80 to 88) and hemoglobin in g/L (126 to 94).
- rn-s24-22: Creatinine in micromol/L (about 115 to 230). Potassium and sodium keep the same numbers in mmol/L. Glucose reads about 5.8 to 6.2 mmol/L.
- rn-s24-32: Platelets as x 10^9/L (16 x 10^9/L), with the MCC range.
- rn-s24-34: Hematocrit as a fraction in L/L (0.58 L/L), with the MCC adult range of 0.38 to 0.50 L/L.
- rn-s24-36: Platelets as x 10^9/L (248 to 96 x 10^9/L), with the MCC range.

## Sources added

- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s24-04, 21, 22, 32, 34 and 36. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/

## Other checks

- The MCC page (updated December 2020) was read with curl. It lists platelets 130 to 380 x 10^9/L, hematocrit 0.38 to 0.50 L/L, hemoglobin in g/L, creatinine in micromol/L, urea 2.1 to 8.0 mmol/L, potassium 3.5 to 5.1 mmol/L, glucose in mmol/L and creatine kinase in IU/L.
- Conversions used: urea mmol/L equals BUN mg/dL times 0.357, creatinine micromol/L equals mg/dL times 88.4, glucose mmol/L equals mg/dL divided by 18.
- Health Canada Drug Product Database (API, https://health-products.canada.ca/dpd-bdpp/): nimodipine (Nimotop), argatroban and IV dantrolene (Dantrium Intravenous and a generic) are all marketed. So rn-s24-05, 06 and 36 need no drug note. Pancrelipase also has entries.
- Canadian Blood Services supplies factor concentrates outside Quebec, and Héma-Québec supplies them in Quebec (CBS Clinical Guide to Transfusion, chapter on concentrates, 2022). rn-s24-13 turns on home teaching that is the same in Canada, so no note was written.

## Left empty on purpose

- Items that already pair every lab value with its SI unit got no units note: 01, 02, 10, 11, 19, 20, 31, 42, 43, 45, 47, 48 and 50.
- rn-s24-26 reports an ascitic fluid neutrophil count in /mm3. The Canadian unit for body fluid counts could not be confirmed against a Canadian source, so no note was written.
- Acetaminophen, lisinopril, levothyroxine, thiamine, heparin, ferrous sulfate and sulfamethoxazole-trimethoprim carry the same names in Canada.
- The rest cover assessment, priority and teaching content that is the same in Canada.

## Tests

BATCH=s24 npx vitest run tests/bank.test.ts: 60 of 61 pass. All 58 batch s24 tests pass. The one failure is the whole-bank near duplicate stem check on rn-s25-47 and rn-s26-07 (Jaccard 0.54), outside s24. Stems were not touched in this pass, so the pair needs attention in the s25 or s26 batch.
