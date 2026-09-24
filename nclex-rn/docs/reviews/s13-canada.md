# Batch s13 Canada notes

Batch s13 holds 50 stand-alone items in Basic Care and Comfort. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. The new source is written inline in each item.

## Counts

- Notes written: 2
- Left empty: 48

## Notes written

- rn-s13-27 (AP catheter care): assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them, and how it is supervised, varies by province.
- rn-s13-36 (teaching an AP denture care): unregulated care providers. Rules for delegating care and supervising it come from each provincial nursing regulator and vary by province.

## Sources added

- Canadian Nurses Protective Society. InfoLAW: Delegation to Unregulated Care Providers. 2024. Added to rn-s13-27 and 36. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/

No item has more than 4 sources.

## How the claims were checked

- CNPS InfoLAW (published January 2021, revised February 2024), read with WebFetch: unregulated care providers "include, but are not limited to, health-care aides, home support workers, and resident aides". It cites separate delegation standards from the BC, Manitoba, Ontario, Alberta and other regulators, and says the delegating nurse sets supervision and monitors outcomes.
- BMI (rn-s13-25): Health Canada's Canadian Guidelines for Body Weight Classification in Adults use the same cutoffs (under 18.5, 18.5 to 24.9, 25 to 29.9, 30 and over). The only difference is the label "normal weight", so no note. https://www.canada.ca/en/health-canada/services/food-nutrition/healthy-eating/healthy-weights/canadian-guidelines-body-weight-classification-adults/questions-answers-public.html

## Left empty on purpose

- The batch uses metric and SI units throughout (mL, kg, degrees Celsius, cm). BP in mmHg and SpO2 are reported the same way in Canada. No item turns on a lab value.
- The drugs named (oxycodone, loperamide, heparin) are sold in Canada under the same names.
- Mobility aids, positioning, hygiene, sleep, elimination, ostomy, enteral feeding, heat and cold, pressure injury staging (NPIAP, used by Wounds Canada) and dementia comfort care are practised the same way in Canada.
- rn-s13-16 (ACP low back pain): the Alberta Toward Optimized Practice low back pain guideline summary (minor revision 2017), read from https://www.albertadoctors.org/media/nvadda0b/low-back-pain-summary.pdf, advises staying active, heat and massage as an adjunct. This matches the key, so no note.
- rn-s13-14 (ADA foot care): the Diabetes Canada patient foot care handout (https://guidelines.diabetes.ca/GuideLines/media/Docs/Patient%20Resources/foot-care.pdf, seen through a search on diabetes.ca) says to have corns and calluses treated by a foot care specialist and not to treat them yourself. It also advises daily checks and no lotion between the toes. This matches the key, so no note. Diabetes Canada suggests testing bath water with the hand rather than the elbow, which does not change the answer.

## Tests

`BATCH=s13 npx vitest run tests/bank.test.ts` passes, 61 of 61.
