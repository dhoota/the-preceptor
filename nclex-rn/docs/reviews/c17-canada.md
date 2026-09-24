# Batch c17 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c17/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 6
- Left empty: 24
- `BATCH=c17 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c17-1-3 | Albuterol is salbutamol (Ventolin HFA) in Canada. Epinephrine and diphenhydramine keep their names |
| rn-c17-2-5 | HIV is reportable in every province and territory. Public health partner notification with consent, details vary by province |
| rn-c17-2-6 | 2018 federal directive: no prosecution for HIV non-disclosure below 200 copies/mL. Provincial policy varies |
| rn-c17-3-2 | Urine protein to creatinine ratio in mg/mmol. 2400 mg/g is about 270 mg/mmol against a 15 mg/mmol limit |
| rn-c17-4-4 | NACI measles cutoff is 1970, routine pneumococcal from 65, FluMist to 59, enhanced influenza vaccine at 65 and older. Key stands |
| rn-c17-5-5 | Outpatient drugs fall outside the Canada Health Act. Tacrolimus coverage comes from provincial or private plans and varies by province |

## Sources added

- Health Canada, Drug Product Database: Ventolin HFA (salbutamol), DIN 02241497, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137 (1-3)
- Public Health Agency of Canada, HIV Screening and Testing Guide, 2012. https://www.canada.ca/en/public-health/services/hiv-aids/hiv-screening-testing-guide.html (2-5)
- Attorney General of Canada, Public Prosecution Service of Canada, Directive: HIV Non-Disclosure, Deskbook Chapter 5.12, 2018. https://www.ppsc-sppc.gc.ca/eng/pub/fpsd-sfpg/fps-sfp/tpd/p5/ch12.html (2-6)
- British Columbia Ministry of Health, GPAC, Chronic Kidney Disease: Identification, Evaluation and Management of Adult Patients, 2026. https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/bc-guidelines/chronic-kidney-disease (3-2)
- Public Health Agency of Canada, NACI, Canadian Immunization Guide: Measles Vaccines, 2025. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html (4-4)
- Public Health Agency of Canada, NACI, Canadian Immunization Guide: Pneumococcal Vaccines, 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-16-pneumococcal-vaccine.html (4-4)
- Public Health Agency of Canada, NACI, Canadian Immunization Guide: Influenza Vaccines, 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-10-influenza-vaccine.html (4-4)
- Government of Canada, Canada Health Act, R.S.C. 1985, c. C-6, 2017 (last amended). https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html (5-5)

## How the claims were checked

- Salbutamol: the DPD lists Ventolin HFA, salbutamol 100 mcg per actuation, DIN 02241497, as marketed.
- HIV reporting: the PHAC guide says all provinces and territories have reporting requirements for HIV results. It says public health can notify partners at the request of the testing provider, with the client's consent.
- HIV non-disclosure: the PPSC directive of December 8, 2018 says prosecutors "shall not prosecute" when the viral load stayed under 200 copies/mL. It binds federal prosecutors only, so the note says provincial policy varies.
- Urine protein: the BC Guidelines (last updated May 7, 2026) report PCR and ACR in mg/mmol, with a normal PCR below 15 mg/mmol. The conversion uses 1 g of creatinine as 8.84 mmol, so 2400 mg/g is about 271 mg/mmol.
- Vaccines: the Canadian Immunization Guide measles chapter (December 22, 2025) presumes immunity in adults born before 1970. The pneumococcal chapter (July 2026) offers Pneu-C-20 or Pneu-C-21 to all adults at 65. The influenza chapter (June 2026) prefers IIV-HD, IIV-Adj or RIV at 65 and older and gives FluMist for ages 2 to 59. The zoster chapter recommends RZV from age 50, the same as the item. The client is 72 and born in 1954, so each option keeps its key.
- Drug coverage: Canada Health Act section 2 covers drugs only "when administered in the hospital".

## Left empty, with the reason

These 24 items have no verified material Canadian difference: 1-1, 1-2, 1-4, 1-5, 1-6, 2-1, 2-2, 2-3, 2-4, 3-1, 3-3, 3-4, 3-5, 3-6, 4-1, 4-2, 4-3, 4-5, 4-6, 5-1, 5-2, 5-3, 5-4 and 5-6. The 911 number in 1-6 is the same across Canada. The CD4 unit in 2-1 equals cells/microlitre, which the MCC list uses. Creatinine and potassium already appear in SI units in 3-3, 5-2 and 5-3. A Canadian unit for tacrolimus troughs could not be verified with the tools left, so 5-2 has no note.
