# Batch c07 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c07/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 5
- Left empty: 25
- `BATCH=c07 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c07-1-2 | Free T4 in pmol/L and hemoglobin in g/L only, reads 75 pmol/L and 121 g/L. TSH and potassium keep the same numbers |
| rn-c07-2-2 | Hemoglobin in g/L only, reads 94 g/L. Potassium keeps the same number. BUN is reported as urea, 42.1 mmol/L |
| rn-c07-2-3 | SI units only. Hemoglobin 94 g/L, glucose 10.4 mmol/L. Potassium and sodium keep the same numbers |
| rn-c07-2-4 | Assistive personnel are unregulated care providers. Assignment and delegation rules vary by province |
| rn-c07-5-5 | Nitroglycerin 2% ointment is no longer marketed in Canada. A Canadian prescription names another fast-acting antihypertensive at the same step |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2, 2-2, 2-3)
- Canadian Nurses Protective Society, InfoLAW: Delegation to Unregulated Care Providers, 2024. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/ (2-4)
- Health Canada, Drug Product Database: NITROL nitroglycerin 2% ointment, DIN 01926454, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=12220 (5-5)

No item has more than 4 sources.

## How the claims were checked

- Lab units: the MCC list (last updated December 2020, fetched) gives free T4 in pmol/L (7.0 to 17.0), TSH in mIU/L, hemoglobin in g/L, potassium, sodium, glucose, bicarbonate and urea in mmol/L. The converted values match the SI values already shown in the items. BUN 118 mg/dL equals urea 42.1 mmol/L, as the case tab shows.
- Unregulated care providers: CNPS (revised February 2024, fetched) says UCPs include health care aides, are often not accountable to a regulatory body, and cites delegation standards from several provincial regulators.
- Nitroglycerin ointment: the Health Canada Drug Product Database API (queried September 2026) lists NITROL 2% ointment (Paladin) as cancelled post market on 2018-04-19. Of the 63 nitroglycerin products listed, the marketed ones are sublingual tablets, sprays, patches and IV solutions. None is an ointment. Sushko K, et al., CMAJ Open 2021 (fetched) confirms the sole Canadian maker stopped making the ointment in July 2018. The note keeps the key: a fast-acting drug still comes before the rectal check.

## Left empty, with the reason

These 25 items have no verified material Canadian difference: 1-1, 1-3, 1-4, 1-5, 1-6, 2-1, 2-5, 2-6, 3-1, 3-2, 3-3, 3-4, 3-5, 3-6, 4-1, 4-2, 4-3, 4-4, 4-5, 4-6, 5-1, 5-2, 5-3, 5-4 and 5-6.

- 2-1 (suicide cues): the Accreditation Canada suicide prevention ROP applies to inpatient mental health settings, not a medical telemetry unit, so no note was added. The nursing action is the same.
- 3-4 (tetanus): the Canadian Immunization Guide also gives a booster for a tetanus prone wound after more than 5 years, so the key holds with no difference.
- 1-5 (potassium iodide solution): I did not confirm whether a saturated potassium iodide oral solution is marketed in Canada. A reviewer may want to check this in the Drug Product Database.
- 5-3 and 5-4 mention the ointment only in distractors or the rationale, so the note sits on 5-5, where the key names it.
