# Batch s14 Canada notes

Batch s14 holds 50 stand-alone items in Basic Care and Comfort. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. The new source is written inline in each item.

## Counts

- Notes written: 2
- Left empty: 48

## Notes written

| Item | Note |
| --- | --- |
| rn-s14-05 | Potassium in mmol/L only. MCC range 3.5 to 5.1 mmol/L, so 5.9 mmol/L is high. |
| rn-s14-37 | Sodium in mmol/L only. MCC range 136 to 146 mmol/L, so 149 mmol/L is high. |

## Sources added

- Medical Council of Canada. List of normal lab values. 2020. Added to rn-s14-05 and 37. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/

No item has more than 4 sources.

## How the claims were checked

- MCC normal lab values (last updated December 2020), read with WebFetch: serum potassium 3.5 to 5.1 mmol/L and serum sodium 136 to 146 mmol/L. Both stem values sit above the Canadian upper limit, so the notes do not change or soften either key.

## Left empty on purpose

- The batch uses metric units throughout (mL, kg, cm, kcal, degrees Celsius). Only items 05 and 37 give a lab value.
- Oxycodone and the other care measures named are the same in Canada.
- Mobility, casts, traction, positioning, hygiene, sleep, elimination, ostomy care, enteral feeding, diets, comfort measures in labour and hospice comfort care are practised the same way in Canada. The keys do not depend on a US law or a US-only threshold.

## Tests

`BATCH=s14 npx vitest run tests/bank.test.ts` passes, 61 of 61.
