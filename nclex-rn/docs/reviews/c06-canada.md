# Batch c06 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c06/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 7
- Left empty: 23
- `BATCH=c06 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c06-1-2 | Glucose in mmol/L only, reads 7.9 mmol/L and is not low |
| rn-c06-2-2 | SI units only. Potassium 4.2 mmol/L, magnesium 0.82 mmol/L, creatinine 88 micromol/L. Troponin stays in ng/L |
| rn-c06-3-3 | Platelets 78 x 10^9/L and albumin 26 g/L. INR has no units |
| rn-c06-3-5 | Substitute decision maker law is provincial. Ontario names an attorney for personal care. The order of decision makers varies by province |
| rn-c06-4-2 | Glucose reads 5.8 and 5.3 mmol/L. Sodium and potassium keep the same numbers. MCC lists osmolality in mmol/kg |
| rn-c06-5-1 | Assistive personnel are unregulated care providers. Assignment and delegation rules vary by province |
| rn-c06-5-2 | Glucose in mmol/L only, reads 3.8 mmol/L |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2, 2-2, 3-3, 4-2, 5-2)
- Canadian Nurses Protective Society, Consent for the Incapable Adult, 2025. https://cnps.ca/article/consent-for-the-incapable-adult/ (3-5)
- Government of Ontario, Make a power of attorney, 2026. https://www.ontario.ca/page/make-power-attorney (3-5)
- Canadian Nurses Protective Society, InfoLAW: Delegation to Unregulated Care Providers, 2024. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/ (5-1)

No item has more than 4 sources.

## How the claims were checked

- Lab units: the MCC list (last updated December 2020, fetched) gives glucose, potassium, sodium and magnesium in mmol/L, creatinine in micromol/L, albumin in g/L, platelets in x 10^9/L, blood osmolality in mmol/kg and troponin I in ng/L. The converted values match the SI values already shown in the items. 78 000/mm3 equals 78 x 10^9/L.
- Consent: the CNPS article (reviewed September 2025, fetched) says provincial and territorial statutes differ, that they set a hierarchy of substitute decision makers, and uses the term attorney for personal care. The Ontario page (fetched) says an attorney for personal care can make health care decisions for the person.
- Unregulated care providers: CNPS (revised February 2024, fetched) names health care aides as UCPs, says UCPs are often not accountable to a regulatory body, and cites standards from several provincial regulators.

WebSearch was unavailable for this pass (the session search budget was spent). All checks used WebFetch.

## Left empty, with the reason

These 23 items have no verified material Canadian difference: 1-1, 1-3, 1-4, 1-5, 1-6, 2-1, 2-3, 2-4, 2-5, 2-6, 3-1, 3-2, 3-4, 3-6, 4-1, 4-3, 4-4, 4-5, 4-6, 5-3, 5-4, 5-5 and 5-6.

- Sodium and potassium items (3-4, 3-6, 4-5, 4-6) keep the same numbers in mmol/L, and the items already show mmol/L.
- 5-4 (norovirus control): I tried to confirm PHAC and Ontario outbreak guidance on reporting and hand hygiene, but the pages returned 404, 403 or no text. A reviewer may want to add a note on provincial outbreak reporting once a source can be fetched.
- I did not check the drugs (tenecteplase, ticagrelor, rifaximin, hydrocortisone sodium succinate) against the Health Canada Drug Product Database. None has a different Canadian generic name.
