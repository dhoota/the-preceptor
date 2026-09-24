# Batch s10 Canada notes

Batch s10 holds 50 items in Health Promotion and Maintenance. Only the files that index.ts imports (part1.ts to part5.ts) were edited, and only the `canada` and `sources` fields. extra.ts and common.ts were left alone. New sources were written inline in each item. No stem, choice, key or rationale was changed.

## Counts

- Notes written: 9
- Left empty: 41

## Notes written

- rn-s10-04: Health Canada and the CPS advise homogenized (3.25%) cow's milk from 9 to 12 months, not after 12 months. It is still not a main drink at 6 months.
- rn-s10-21: Health Canada sets the caffeine limit at 300 mg a day in pregnancy and breastfeeding. At 400 mg a day the client should still cut back.
- rn-s10-22: Health Canada limits fresh or frozen tuna, shark, swordfish, marlin, orange roughy and escolar to 150 g a month combined in pregnancy rather than banning them.
- rn-s10-25: SI units. Hemoglobin reads 96 g/L against the third trimester cutoff of 110 g/L.
- rn-s10-31: Newborn screening is run by each province or territory. Newborn Screening Ontario requires a repeat sample after 24 hours when the first is taken earlier.
- rn-s10-40: NACI starts routine pneumococcal conjugate vaccine at 65, not 50. RSV vaccine is for adults 75 and older or 65 to 74 at increased risk. The key does not change.
- rn-s10-41: CTFPHC (2017) advises one-time AAA screening for men 65 to 80 with no smoking criterion, so the 79-year-old would also qualify in Canada. The key follows US criteria.
- rn-s10-42: CTFPHC (2017) recommends against hepatitis C screening in adults not at elevated risk. This client would not be screened for hepatitis C under that guidance.
- rn-s10-47: Diabetes Canada uses mmol/L with the same random cutoff of 11.1 mmol/L plus symptoms. Hypertension Canada (2025) defines hypertension as 130/80 mmHg or higher, so 128/78 mmHg is below it.

## Sources added

- Health Canada, Canadian Paediatric Society, Dietitians of Canada, Breastfeeding Committee for Canada. Nutrition for Healthy Term Infants: Recommendations from Six to 24 Months. 2014. Added to rn-s10-04. https://www.canada.ca/en/health-canada/services/canada-food-guide/resources/infant-feeding/nutrition-healthy-term-infants-recommendations-birth-six-months/6-24-months.html
- Health Canada. Caffeine in Food. 2025 (page modified April 2, 2025). Added to rn-s10-21. https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods/foods.html
- Health Canada. Mercury in Fish: Questions and Answers. 2019. Added to rn-s10-22. https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/chemical-contaminants/environmental-contaminants/mercury/mercury-fish-questions-answers.html
- Newborn Screening Ontario. Submitter Hub: Time of Collection. 2026 (page has no date, year given as the year it was checked). Added to rn-s10-31. https://submitterhub.newbornscreening.on.ca/dried-blood-spot/time-of-collection/
- Public Health Agency of Canada, NACI. Canadian Immunization Guide: Pneumococcal Vaccines. 2026 (updated July 2, 2026). Added to rn-s10-40. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-16-pneumococcal-vaccine.html
- Public Health Agency of Canada, NACI. Canadian Immunization Guide: Respiratory Syncytial Virus (RSV) Vaccines. 2026 (updated May 2026). Added to rn-s10-40. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/respiratory-syncytial-virus.html
- Canadian Task Force on Preventive Health Care. Recommendations on Screening for Abdominal Aortic Aneurysm in Primary Care. CMAJ 189(36):E1137. 2017. Added to rn-s10-41. https://canadiantaskforce.ca/guidelines/published-guidelines/abdominal-aortic-aneurysm/
- Grad R, Thombs BD, Tonelli M, et al. Canadian Task Force on Preventive Health Care. Recommendations on Hepatitis C Screening for Adults. CMAJ 189(16):E594. 2017. Added to rn-s10-42. https://canadiantaskforce.ca/guidelines/published-guidelines/hepatitis-c/
- Punthakee Z, Goldenberg R, Katz P. Diabetes Canada Clinical Practice Guidelines Expert Committee. Definition, Classification and Diagnosis of Diabetes, Prediabetes and Metabolic Syndrome. Canadian Journal of Diabetes 42(Suppl 1):S10. 2018. Added to rn-s10-47. https://doi.org/10.1016/j.jcjd.2017.10.003
- Goupil R, Tsuyuki RT, Santesso N, et al. Hypertension Canada. Hypertension Canada Guideline for the Diagnosis and Treatment of Hypertension in Adults in Primary Care. CMAJ 197:E549. 2025. Added to rn-s10-47. https://doi.org/10.1503/cmaj.241770

## Left empty on purpose

- rn-s10-45 (lifestyle risks) has a real Canadian difference. Canada's Guidance on Alcohol and Health (2023) has no sex-specific binge cutoff and links more than 2 drinks per occasion to rising harm. The item already cites 4 sources, so the note was left empty rather than break the source limit.
- rn-s10-37 (rotavirus): the Canadian Immunization Guide (updated August 2025) also starts the series before 15 weeks, so the key holds in Canada.
- rn-s10-23 (GBS timing): SOGC Guideline No. 298 is the Canadian guidance, but its screening window could not be confirmed from an open source. The key answer fits either way, so no note was written.
- rn-s10-05 (teething): Health Canada warnings on benzocaine and teething necklaces could not be reached online, and the key is the same in Canada.
- rn-s10-25 rests on the brief's rule that Canadian labs report SI units. No source was added for it.
- All other items: no material Canadian difference in the tested content.

## Tests

BATCH=s10 npx vitest run tests/bank.test.ts: 61 of 61 pass.
