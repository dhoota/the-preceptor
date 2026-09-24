# Batch s11 Canada notes

Batch s11 holds 50 stand-alone items in Psychosocial Integrity. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. Each new source is written inline in its item.

## Counts

- Notes written: 4
- Left empty: 46

## Notes written

- rn-s11-07 (time limits for restraint): Canada has no national rule like the US 1 hour face-to-face evaluation. Restraint rules come from provincial laws, such as mental health acts, and employer least restraint policies, so they vary by province.
- rn-s11-10 (anorexia nervosa instability): potassium is reported in mmol/L only. The Medical Council of Canada range is 3.5 to 5.1 mmol/L, so 2.8 mmol/L is still low.
- rn-s11-18 (suspected child abuse): provincial and territorial child protection laws require a report to a child protection agency or the police. Most apply the duty to every person, not only professionals.
- rn-s11-46 (name on the insurance record): in Canada the record would usually be a provincial or territorial health card. Each province and territory runs its own public health insurance plan and issues the cards.

## Sources added

- Canadian Nurses Protective Society. InfoLAW: Patient Restraints. 2021. Added to rn-s11-07. https://cnps.ca/article/patient-restraints/
- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s11-10. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/
- Public Health Agency of Canada. Provincial and territorial child protection legislation and policy. 2018. Added to rn-s11-18. https://www.canada.ca/en/public-health/services/publications/health-risks-safety/provincial-territorial-child-protection-legislation-policy-2018.html
- Health Canada. About health insurance cards. 2025. Added to rn-s11-46. https://www.canada.ca/en/health-canada/services/health-cards.html

No item has more than 3 sources.

## How the claims were checked

- CNPS InfoLAW on restraints (December 2021), read with WebFetch: provincial or territorial mental health laws may address restraint, facilities should have least restraint policies, and no fixed national time limit is given.
- MCC normal lab values (last updated December 2020), read with WebFetch: potassium 3.5 to 5.1 mmol/L.
- PHAC 2018 compilation, read with WebFetch: Alberta, Yukon and most other jurisdictions put the duty on any person. Quebec limits the general duty to professionals. Reports go to a director, a child protection agency or a peace officer.
- Health Canada health cards page (modified 2025-06-04) and the Canada's health care system page (modified 2025-06-25), read with WebFetch: each province and territory manages its own health insurance plan and issues health cards to its residents.

## Left empty on purpose

- rn-s11-09 (elder abuse signs): the key is to follow up, not to report. A web search suggests a duty to report abuse of older adults in the community exists in only a few provinces, and mostly for care facility residents. No current official source was reached to confirm it, so no note. Follow-up could use provincial adult protection laws.
- rn-s11-13 (interpreter for consent) cites the US CLAS standards. The key, a qualified interpreter, holds in Canada. No Canadian rule that changes the answer was found.
- rn-s11-17 (IPV screening) cites the USPSTF. The actions tested (private screening, direct questions, referral) are the same in Canada.
- rn-s11-31 (opioid withdrawal): COWS and buprenorphine are used the same way in Canada. No note.
- The other items test therapeutic communication, defense mechanisms, grief, anxiety, psychosis, dementia, eating disorders and trauma-informed care. Practice is the same in Canada and no item turns on another lab value, drug name or law.

## Tests

`BATCH=s11 npx vitest run tests/bank.test.ts` passes, 61 of 61.
