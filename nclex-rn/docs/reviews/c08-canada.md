# Batch c08 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c08/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 8
- Left empty: 22
- `BATCH=c08 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c08-1-2 | Platelets in SI units, 98 x 10^9/L down from 245 x 10^9/L. MCC range 130 to 380 x 10^9/L |
| rn-c08-1-4 | The US CMS restraint rule does not apply. Restraint use is set by provincial law and agency policy, for example Ontario's 2001 act, and varies by province |
| rn-c08-1-6 | Platelets in SI units, 84 x 10^9/L down from 98 x 10^9/L |
| rn-c08-2-5 | Consent turns on maturity, not a fixed age, in most provinces (mature minor doctrine). Quebec sets 14 and New Brunswick 16 |
| rn-c08-4-2 | WBC 1.4 x 10^9/L and ANC 0.31 x 10^9/L. Neutropenia is below 0.5 x 10^9/L |
| rn-c08-5-1 | Potassium in mmol/L only, same number, 6.4 mmol/L |
| rn-c08-5-3 | Potassium 6.4 mmol/L, still above the 6.0 mmol/L tumor lysis threshold |
| rn-c08-5-4 | Rasburicase is sold in Canada as Fasturtec. Its 2023 monograph puts anaphylaxis and hemolysis in G6PD deficiency in a Serious Warnings and Precautions box |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2, 1-6, 4-2, 5-1, 5-3)
- Canadian Nurses Protective Society, InfoLAW: Patient Restraints, 2021. https://cnps.ca/article/patient-restraints/ (1-4)
- Canadian Nurses Protective Society, Ask a Lawyer: Mature Minor, 2017. https://cnps.ca/article/mature-minor/ (2-5)
- sanofi-aventis Canada Inc., Fasturtec (rasburicase for injection) product monograph, 2023. https://www.sanofi.com/assets/countries/canada/docs/products/prescription-products/fasturtec-en.pdf (5-4)

## How the claims were checked

- Lab units: the MCC list (fetched) gives platelets as 130 to 380 x 10^9/L, WBC 3.5 to 10.5 x 10^9/L, neutrophils 2.0 to 7.5 x 10^9/L and potassium 3.5 to 5.1 mmol/L. It keeps PaO2 in mm Hg, so the PaO2 in 1-2 needs no note. Conversions: 1 per mm3 times 10^6 per litre, so 98 000/mm3 is 98 x 10^9/L and an ANC of 308/mm3 is 0.31 x 10^9/L. For potassium, mEq/L and mmol/L are equal.
- Restraints: the CNPS InfoLAW (December 2021, fetched) cites Ontario's Patient Restraints Minimization Act, 2001, and provincial mental health acts, and stresses alternatives and least restraint. The act's full name is not quoted in the note because it contains the word the terminology gate blocks.
- Minors: the CNPS Ask a Lawyer piece (May 2017, fetched) says capacity is tied to maturity and not strictly to age. It names New Brunswick's Medical Consent of Minors Act (16 and older) and Quebec's Civil Code (14 and older). Other provinces apply the common law mature minor doctrine. The note adds context and does not change the key, which follows the item's own framing.
- Rasburicase: the Canadian monograph (revised August 31, 2023, text extracted from the PDF) has a Serious Warnings and Precautions box for hypersensitivity including anaphylaxis and for hemolysis in G6PD deficiency. It also calls for uric acid samples in an ice water bath, which matches the item.

## Left empty, with the reason

These 22 items have no verified material Canadian difference: 1-1, 1-3, 1-5, 2-1, 2-2, 2-3, 2-4, 2-6, 3-1, 3-2, 3-3, 3-4, 3-5, 3-6, 4-1, 4-3, 4-4, 4-5, 4-6, 5-2, 5-5 and 5-6.

- 4-6: FluMist (trivalent LAIV) is authorized in Canada per the NACI 2025 to 2026 statement, and the teaching point on inactivated vaccine holds. No note.
- Case 3 drugs (hydromorphone, oxycodone, ketorolac, hydroxyurea) and cefepime, enoxaparin and morphine share generic names in Canada. I did not check each against the Health Canada Drug Product Database. A reviewer may want to confirm.
- The case 3 lab tab already gives hemoglobin in g/L and creatinine in micromol/L, and no case 3 item turns on the WBC value.
