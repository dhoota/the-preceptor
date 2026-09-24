# Batch s05 Canada notes

Batch s05 holds 50 stand-alone items in Management of Care. Only the files that index.ts imports (part1.ts to part5.ts) were edited. extra.ts and common.ts were left alone. Only `canada` and `sources` were changed. New sources are written inline in each item.

## Counts

- Notes written: 11
- Left empty: 39

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-s05-01 | Platelets in x 10^9/L. MCC adult range 130 to 380 x 10^9/L. |
| rn-s05-05 | Glucose in mmol/L only. Diabetes Canada hypoglycemia threshold below 4.0 mmol/L. |
| rn-s05-07 | Potassium in mmol/L only. MCC range 3.5 to 5.1 mmol/L. |
| rn-s05-10 | HIPAA does not apply. PHIPA s. 26 lets a spouse consent for an incapable client, after a guardian, attorney or Board representative. |
| rn-s05-14 | No Safe Harbor list. PHIPA defines de-identifying by what could reasonably identify the client. |
| rn-s05-18 | PHIPA s. 38(3) lets a facility confirm presence, location and general status only if the client did not object. |
| rn-s05-30 | Ontario privacy commissioner (2016) expects a policy, notice and consent before unencrypted email. |
| rn-s05-34 | Potassium in mmol/L only. MCC still lists A1C as a percentage. |
| rn-s05-35 | Drug coverage varies by province. Ontario Drug Benefit from 65, with a $100 deductible and up to $6.11 per prescription. |
| rn-s05-41 | Glucose in mmol/L only. MCC random glucose range 4.0 to 11.0 mmol/L. |
| rn-s05-42 | PHIPA s. 38(1)(b) covers payment by the Minister or another custodian, not a private insurer. Active TB is reported to provincial or territorial TB programs. |

## Sources added

- Medical Council of Canada. List of normal lab values. 2020 (last updated December 2020). Added to rn-s05-01, 07, 34 and 41. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1). 2018. Added to rn-s05-05. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14
- Government of Ontario. Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A. 2004. Added to rn-s05-10 (section 26), 14 (section 2), 18 (section 38(3)) and 42 (section 38(1)(b)). https://www.ontario.ca/laws/statute/04p03
- Information and Privacy Commissioner of Ontario. Fact Sheet: Communicating Personal Health Information by Email. 2016. Added to rn-s05-30. https://www.ipc.on.ca/en/resources-and-decisions/fact-sheet-communicating-personal-health-information-email
- Government of Ontario. Get coverage for prescription drugs: Ontario Drug Benefit program. 2026 (year of access). Added to rn-s05-35. https://www.ontario.ca/page/get-coverage-prescription-drugs
- Public Health Agency of Canada, Canadian Thoracic Society. Canadian Tuberculosis Standards, 8th edition, Chapter 1: Epidemiology of Tuberculosis in Canada. 2022. Added to rn-s05-42. https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/epidemiology.html

No item has more than 4 sources. rn-s05-42 has 3.

## How the claims were checked

- MCC page (last updated December 2020): platelets 130 to 380 x 10^9/L, potassium 3.5 to 5.1 mmol/L, random glucose 4.0 to 11.0 mmol/L, A1C 4.8% to 6.0%.
- Diabetes Canada chapter 14 defines hypoglycemia with a glucose below 4.0 mmol/L for people treated with insulin or an insulin secretagogue.
- PHIPA text on e-Laws. Section 2 defines de-identify as removing any information that identifies the individual or could reasonably foreseeably be used to identify them. A proclaimed-later amendment would add prescribed requirements, not yet in force. Section 26(1) lists the spouse or partner fourth, after a guardian, an attorney and a Board representative. Section 38(3) permits a facility to disclose presence, general health status and location if the individual was offered the option to object and did not. Section 38(1)(b) permits disclosure so the Minister, another custodian or the Agency can fund or pay the custodian.
- IPC fact sheet (September 15, 2016): a written email policy, notice and consent before unencrypted email, and consent alone is not enough. The IPC page returned 403 to the fetch tool, so the content was checked through the BLG summary of the same fact sheet (https://www.blg.com/en/insights/2016/09/ipc-releases-guidance-on-communicating-phi-by-email).
- Ontario.ca: ODB enrolment is automatic from the month after the 65th birthday. Seniors pay the first $100 each program year and up to $6.11 per prescription, less under the Seniors Co-Payment Program.
- Canadian TB Standards chapter 1: local public health authorities must report every person diagnosed with active TB to the provincial or territorial TB program.

## Left empty on purpose

- rn-s05-12: a note on the Accreditation Canada heparin safety practice was drafted but dropped. The 2021 ROP handbook had a separate heparin ROP. The 2024 ROP list folds it into Managing High Alert Medications, and the current wording could not be confirmed.
- rn-s05-02, 06, 21, 25, 37, 43, 45, 49: confidentiality basics such as locked shredding, callback voicemails, record snooping and logging off work the same way under Canadian privacy law and regulator standards.
- rn-s05-33: 911 is the emergency number across Canada as well.
- rn-s05-36: the enoxaparin kidney dosing question does not change. The item only asks the nurse to hold and clarify.
- rn-s05-50: lactate is already given in mmol/L.
- rn-s05-03, 08, 11, 17, 20, 24, 27, 28, 40, 48: quality improvement tools and measures are the same.
- rn-s05-13, 22: TeamSTEPPS language and closed-loop reply are used the same way.
- The other empty items (04, 09, 15, 16, 19, 23, 26, 29, 31, 32, 38, 39, 44, 46, 47) have no material Canadian difference.

## Tests

`BATCH=s05 npx vitest run tests/bank.test.ts` passes, 61 of 61.
