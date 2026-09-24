# Batch c12 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c12/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 8
- Left empty: 22
- `BATCH=c12 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c12-1-1 | CPS 2024 eating disorder guide uses the same heart rate, temperature and standing BP limits but a standing pulse rise of 30/minute or more. The rise of 44/minute meets both |
| rn-c12-1-2 | SI units only. Potassium 3.2 mmol/L, phosphate 0.84 mmol/L, magnesium 0.66 mmol/L |
| rn-c12-2-6 | Good Samaritan Drug Overdose Act (2017) protects people who call 911 at an overdose from simple possession charges. Free naloxone kits vary by province |
| rn-c12-3-2 | SI units only and urea replaces BUN. Urea 11.4 mmol/L, creatinine 115 micromol/L. MCC urea range 2.1 to 8.0 mmol/L |
| rn-c12-3-5 | The practical nurse is an RPN in Ontario and an LPN elsewhere. Each province has its own legislation and regulator, so assignment rules vary by province |
| rn-c12-4-2 | CPS: no single legal age of consent in Canada. Parents or guardians consent for young children and assent is sought. Minor consent varies by province |
| rn-c12-5-2 | ISMP Canada Do Not Use list, 2025 update, also lists U for units and trailing zeros |
| rn-c12-5-3 | Hemoglobin in g/L only, 124 to 91 g/L. MCC adult female range 115 to 155 g/L |

No note changes or softens a key.

## Sources added

- Coret M, Vyver E, Harrison M, et al. Canadian Paediatric Society, Adolescent Health Committee, A guide to the community management of paediatric eating disorders. Paediatrics and Child Health 29(7):446, 2024. https://cps.ca/en/documents/position/eating-disorders (1-1)
- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2, 3-2, 5-3)
- Health Canada, About the Good Samaritan Drug Overdose Act, 2017. https://www.canada.ca/en/health-canada/services/opioids/about-good-samaritan-drug-overdose-act.html (2-6)
- Canadian Council for Practical Nurse Regulators, Become a LPN/RPN, 2026. https://ccpnr.ca/become-a-lpn-rpn/ (3-5)
- Coughlin KW. Canadian Paediatric Society, Bioethics Committee, Medical decision-making in paediatrics: Infancy to adolescence. Paediatrics and Child Health 23(2):138, 2018. https://cps.ca/en/documents/position/medical-decision-making-in-paediatrics-infancy-to-adolescence (4-2)
- Institute for Safe Medication Practices Canada, Do Not Use: Dangerous Abbreviations, Symbols, and Dose Designations, 2025 Update. ISMP Canada Safety Bulletin 25(5), 2025. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2025-i5-Do-Not-Use.pdf (5-2)

Item 5-2 now has 4 sources, the limit. No other item has more than 3.

## How the claims were checked

- Eating disorder limits: the CPS guide (fetched, posted June 2024) lists daytime heart rate under 50/minute, temperature under 35.6°C and a standing rise in heart rate of 30/minute or more, or a systolic drop of 20 mmHg or more. The item uses a rise over 40/minute. The client's rise of 44/minute exceeds both, so the key stands.
- Lab units: the MCC normal values page (fetched) gives urea 2.1 to 8.0 mmol/L, female hemoglobin 115 to 155 g/L, and potassium, phosphate and magnesium in mmol/L. The MCC phosphate range is for adults, so the 1-2 note gives no range for the adolescent.
- Good Samaritan Act: the Health Canada page (fetched) says the Act became law on May 4, 2017. It protects people who seek emergency help at an overdose from charges of simple possession. Canada.ca and provincial pages (search) show free kits in BC, Ontario, Alberta and Manitoba, with access set by each province.
- Practical nurse title: the CCPNR page (fetched) names the RPN in Ontario and the LPN elsewhere. It says each province and territory has its own nursing legislation and regulator.
- Consent: the CPS statement (fetched, reaffirmed 2024) says Canada has no single legal age of consent. Parents and guardians are the decision makers for young children and assent should be sought. Quebec sets 14 and New Brunswick 16.
- Abbreviations: the ISMP Canada 2025 bulletin (PDF text extracted) lists U and IU, advises writing units in full, and says never to use a zero after a decimal point.

## Left empty, with the reason

These 22 items have no verified material Canadian difference: 1-3, 1-4, 1-5, 1-6, 2-1, 2-2, 2-3, 2-4, 2-5, 3-1, 3-3, 3-4, 3-6, 4-1, 4-3, 4-4, 4-5, 4-6, 5-1, 5-4, 5-5 and 5-6.

- 1-3 and 1-6 use the same case 1 labs. The note on 1-2 covers the unit point. The day 3 heart rate of 58/minute is above the CPS limit of 50/minute as well.
- 2-1 to 2-3: the glucose is normal and the items do not turn on its value. Naloxone and methadone are sold in Canada under the same names.
- 3-6 repeats the BUN and potassium units covered by the note on 3-2.
- 4-5: piperacillin-tazobactam is sold in Canada under the brand Tazocin. The item uses the generic name only, so no note was written.
- 5-5: SBAR is used in Canadian hospitals in the same form.
