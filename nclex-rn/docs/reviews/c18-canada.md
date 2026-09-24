# Batch c18 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c18/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 5
- Left empty: 25
- `BATCH=c18 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c18-1-2 | Urine ACR in mg/mmol. Diabetes Canada cutoff is 2.0 mg/mmol on 2 of 3 samples over 3 months. 86 mg/g is about 9.7 mg/mmol |
| rn-c18-3-4 | Minor consent rests on capacity in most provinces, Quebec sets 14. PHAC recommends a gonorrhea test of cure at every positive site and rescreening at 6 months. Key stands |
| rn-c18-4-3 | Priorix and Varilrix are gelatin free in Canada. M-M-R II and Varivax III contain gelatin |
| rn-c18-4-4 | Interim Federal Health Program covers refugees until provincial coverage, with urgent dental care and mental health counselling |
| rn-c18-5-5 | Diabetes Canada treats glucose below 4.0 mmol/L with 15 g of carbohydrate, retests in 15 minutes and retreats below 4.0 mmol/L |

## Sources added

- McFarlane P, Cherney D, Gilbert RE, Senior P. Diabetes Canada Clinical Practice Guidelines Expert Committee, Chapter 29: Chronic Kidney Disease in Diabetes, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-29 (1-2)
- Canadian Medical Protective Association, Can a child provide consent?, 2025. https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2014/can-a-child-provide-consent (3-4)
- Public Health Agency of Canada, Gonorrhea guide: Treatment and follow-up, 2026. https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea/treatment-follow-up.html (3-4)
- Public Health Agency of Canada, NACI, Canadian Immunization Guide, Part 1: Contents of immunizing agents available for use in Canada, 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-1-key-immunization-information/page-15-contents-immunizing-agents-available-use-canada.html (4-3)
- Immigration, Refugees and Citizenship Canada, Interim Federal Health Program: Summary of coverage, 2026. https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html (4-4)
- Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee, Chapter 14: Hypoglycemia, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14 (5-5)

## How the claims were checked

- Albuminuria: Diabetes Canada chapter 29, recommendation 3, defines abnormal albuminuria as a random urine ACR of 2.0 mg/mmol or more on at least 2 of 3 samples over 3 months. The conversion divides mg/g by 8.84, so 86 mg/g is about 9.7 mg/mmol.
- Minor consent: the CMPA article (revised November 2025) says most provinces and territories outside Quebec use a capacity based approach, and the age of consent in Quebec is generally 14.
- Gonorrhea: the PHAC guide (modified June 4, 2026) says a test of cure "is recommended for all positive sites in all cases" and repeat screening is advised 6 months after treatment. It also gives ceftriaxone 500 mg IM as monotherapy and co-treats chlamydia when not excluded, so 3-5 needs no note. The key for 3-4 follows CDC and stands.
- Gelatin: the Canadian Immunization Guide contents table (August 2026) lists gelatin for M-M-R II and porcine gelatin for Varivax III. No gelatin is listed for Priorix or Varilrix.
- Refugee coverage: the IRCC summary (May 1, 2026) says the IFHP gives temporary coverage until the person is eligible for provincial or territorial insurance. Supplemental benefits include urgent dental care and mental health counselling.
- Hypoglycemia: Diabetes Canada chapter 14 defines hypoglycemia in people on insulin or a secretagogue as below 4.0 mmol/L. It treats with 15 g of carbohydrate, preferably glucose, retests in 15 minutes and retreats if still below 4.0 mmol/L.

## Left empty, with the reason

These 25 items have no verified material Canadian difference: 1-1, 1-3, 1-4, 1-5, 1-6, 2-1, 2-2, 2-3, 2-4, 2-5, 2-6, 3-1, 3-2, 3-3, 3-5, 3-6, 4-1, 4-2, 4-5, 4-6, 5-1, 5-2, 5-3, 5-4 and 5-6. Glucose, creatinine, potassium and hemoglobin already appear in SI units in 1-3, 2-1, 2-2, 5-1 and 5-6. The SOGC aspirin dose for preeclampsia prevention (Guideline No. 426, 2022) could not be read with the tools left, so 2-4 has no note. Item 4-2 is framed on the US catch-up schedule, and no Canadian difference for this child could be verified.
