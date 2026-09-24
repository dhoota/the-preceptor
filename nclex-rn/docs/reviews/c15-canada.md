# Batch c15 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c15/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 4
- Left empty: 26
- `BATCH=c15 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c15-1-5 | The practical nurse is an RPN in Ontario and an LPN elsewhere. Assignment rules come from each provincial regulator and vary by province |
| rn-c15-4-1 | Glucose in mmol/L only, 5.2 to 13.7 mmol/L. MCC random glucose range 4.0 to 11.0 mmol/L |
| rn-c15-5-1 | Glucose in mmol/L only. 5.8 mmol/L is inside the MCC random range of 4.0 to 11.0 mmol/L |
| rn-c15-5-6 | Provincial licensing bodies set driving limits after a seizure using CCMTA standards. The duty to report varies by province |

No note changes or softens a key.

## Sources added

- Canadian Council for Practical Nurse Regulators, Become a LPN/RPN, 2026. https://ccpnr.ca/become-a-lpn-rpn/ (1-5)
- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (4-1, 5-1)
- Canadian Medical Protective Association, Hit the brakes: Do you need to report your patient's fitness to drive?, 2019, revised 2026. https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2019/hit-the-brakes-do-you-need-to-report-your-patients-fitness-to-drive (5-6)

No item has more than 3 sources.

## How the claims were checked

- Practical nurse title: the CCPNR page (fetched) names the RPN in Ontario and the LPN elsewhere. It says each province and territory has its own nursing legislation and regulator.
- Glucose units: the MCC normal values page (fetched) gives fasting glucose 4.0 to 6.0 mmol/L and random glucose 4.0 to 11.0 mmol/L, in SI units only.
- Driving: the CMPA article (fetched, revised January 2026) says licensing authorities decide on driving limits. Reporting is mandatory in most provinces, discretionary in Alberta, Quebec and Nova Scotia, and mandatory in BC only if the patient keeps driving after a warning. The BC page for the CCMTA seizure standard (fetched) sets a 6 month seizure free period for non-commercial drivers with epilepsy.

## Left empty, with the reason

These 26 items have no verified material Canadian difference: 1-1, 1-2, 1-3, 1-4, 1-6, 2-1 to 2-6, 3-1 to 3-6, 4-2 to 4-6, 5-2, 5-3, 5-4 and 5-5.

- 2-4: the Canadian ciprofloxacin product monographs (search, pdf.hres.ca) carry the same myasthenia gravis warning and advise avoiding the drug in known disease. No difference, so no note.
- 4-3 repeats the glucose values of case 4, and its stem already gives mmol/L. The note on 4-1 covers the unit point.
- 5-2: lactate is already in mmol/L. Sodium appears only in the lab tab and no row turns on it.
- 3-4: the lap belt option is scored as a restraint. Restraint rules in long-term care vary by province but do not change the key, so no note was written.
- Acetaminophen, carbidopa-levodopa, methylprednisolone, pyridostigmine, midazolam and levetiracetam are sold in Canada under the same generic names.
- 2-5 and 4-5: SBAR and structured handoff are used in Canadian hospitals in the same form.
