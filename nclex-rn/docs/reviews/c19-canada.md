# Batch c19 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c19/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited.

- Notes written: 3
- Left empty: 27
- `BATCH=c19 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c19-1-4 | A child exposed to partner violence can be a child in need of protection. The duty to report varies by province |
| rn-c19-3-6 | Triglycerides in mmol/L only (6.9 mmol/L), MCC reference 1.7 mmol/L or less |
| rn-c19-5-6 | Hemoglobin in g/L only (116 g/L against 110 g/L). Epoetin alfa is sold in Canada as Eprex, not Epogen |

## Sources added

- Public Health Agency of Canada, Provincial and Territorial Child Protection Legislation and Policy 2018, 2019. https://www.canada.ca/en/public-health/services/publications/health-risks-safety/provincial-territorial-child-protection-legislation-policy-2018.html (1-4)
- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (3-6, 5-6)
- Health Canada, Drug Product Database, EPREX (epoetin alfa) Sterile Solution, DIN 02231584, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=50950 (5-6)

## How the claims were checked

- Child protection: the PHAC review lists exposure to domestic violence as a ground for protection in British Columbia, Newfoundland and Labrador, Northwest Territories, Nova Scotia, Saskatchewan, New Brunswick, Nunavut, Ontario, Prince Edward Island and Yukon. Duty to report also differs, for example Quebec limits the general duty to professionals. The note therefore says "varies by province".
- Lab units: the MCC list gives triglycerides as 1.7 mmol/L or less and hemoglobin in g/L (female 115 to 155 g/L). It gives arterial pO2 and pCO2 in mmHg, so no note was added to the blood gas in 3-2.
- Epoetin alfa: a query of the Health Canada DPD for epoetin alfa returns only Eprex (Janssen Inc) products, several of them marketed, such as DIN 02231584. A DPD search for the brand Epogen returns no product.

## Items left empty

- Case 1 (partner violence): assessment, strangulation red flags, lethality, confidentiality with the partner and documentation match Canadian practice. The child protection point is made once, on 1-4.
- Case 2 (START triage and hemorrhage control): no Canadian difference found.
- Case 3 (ARDS): Berlin criteria, lung protective settings, VAP bundle and the propofol calculation are the same in Canada. The 3-2 blood gas uses mmHg, which Canadian labs also use.
- Case 4 (pneumothorax): chest drain care, nicotine patch use and discharge teaching show no material difference.
- Case 5 (peritoneal dialysis): 5-2 already cites 4 sources, so no source could be added. Its lab table and refs already show the SI values. The other items show no material difference.
