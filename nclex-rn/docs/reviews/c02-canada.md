# Batch c02 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c02/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 12
- Left empty: 18
- `BATCH=c02 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c02-1-2 | Calcium and magnesium in mmol/L, PTH in pmol/L. 9 pg/mL is about 1.0 pmol/L, below the MCC lower limit of 1.6 |
| rn-c02-2-1 | SI units: platelets 188 x 10^9/L, creatinine 71 micromol/L. MCC platelet range 130 to 380 x 10^9/L |
| rn-c02-2-2 | SOGC calls headache, visual symptoms and a raised AST "adverse conditions". "Severe preeclampsia" is kept for severe complications that call for delivery |
| rn-c02-3-2 | SI units for sodium and creatinine. Canadian labs report urea in mmol/L, not BUN |
| rn-c02-3-3 | Lithium in mmol/L (2.1 mmol/L). MCC adult range 0.6 to 1.2 mmol/L |
| rn-c02-4-1 | Albuterol is salbutamol in Canada (Ventolin HFA, generic salbutamol HFA) |
| rn-c02-4-3 | Salbutamol is the Canadian name |
| rn-c02-4-4 | Report the reliever as salbutamol in a Canadian handoff |
| rn-c02-4-5 | Canadian prednisolone oral solution is 5 mg/5 mL, so 27 mg would be 27 mL. Calculate from the bottle in hand |
| rn-c02-4-6 | Teach the family the Canadian name on the inhaler, salbutamol |
| rn-c02-5-4 | Each province and territory organizes and delivers home care. Some services are not covered by provincial plans |
| rn-c02-5-6 | Home health aides are unregulated care providers. Assignment and delegation rules vary by province |

## Sources added

- Medical Council of Canada, Normal lab values reference list, 2020. https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/ (1-2, 2-1, 3-2, 3-3)
- Magee LA, Smith GN, Bloch C, et al. SOGC, Guideline No. 426: Hypertensive Disorders of Pregnancy, J Obstet Gynaecol Can 44(5):547, 2022. https://pubmed.ncbi.nlm.nih.gov/35577426/ (2-2)
- von Dadelszen P, Magee LA, Preventing deaths due to the hypertensive disorders of pregnancy, Best Pract Res Clin Obstet Gynaecol 36:83, 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC5096310/ (2-2)
- Health Canada, Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137 (4-1, 4-3, 4-4, 4-6)
- Health Canada, Drug Product Database, PMS-Prednisolone oral solution 5 mg/5 mL, DIN 02245532, 2026. https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=69619 (4-5)
- Health Canada, Home and community care, 2026. https://www.canada.ca/en/health-canada/services/home-continuing-care/home-community-care.html (5-4)
- Canadian Nurses Protective Society, InfoLAW: Delegation to Unregulated Care Providers, 2024. https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/ (5-6)

## How the claims were checked

- MCC list, fetched: calcium 2.12 to 2.52 mmol/L, magnesium 0.74 to 1.03 mmol/L, PTH 1.6 to 9.3 pmol/L, lithium 0.6 to 1.2 mmol/L (ages 18 to 65), urea 2.1 to 8.0 mmol/L, platelets 130 to 380 x 10^9/L. The list has urea and no BUN. PTH conversion: 1 pmol/L = 9.43 pg/mL, so 9 pg/mL = 0.95 pmol/L.
- SOGC terms: the full text of Guideline 426 was blocked (HTTP 403 at jogc.com and ScienceDirect). The PubMed record confirms the citation. Table 1 of von Dadelszen and Magee 2016, from the SOGC authors, lists headache or visual symptoms and raised AST, ALT, LDH or bilirubin as adverse conditions. It lists eclampsia, PRES and hepatic rupture among the severe complications that warrant delivery. It says the Canadian definition of severe preeclampsia rests on severe complications. A 2023 CMAJ case report (PMC10662496) cites Guideline No. 426 for the same adverse conditions and severe complications rubric. The note does not change or soften the key, which uses the ACOG term.
- Health Canada DPD API: no product is named albuterol. Ventolin HFA (DIN 02241497), APO-Salbutamol HFA (02245669) and Teva-Salbutamol HFA (02326450) are marketed. The only marketed prednisolone oral solution is PMS-Prednisolone, 5 mg per 5 mL (DIN 02245532). Pediapred 5 mg/5 mL was cancelled after marketing, and no 15 mg/5 mL product is listed.
- Health Canada home and community care page (modified 2026-04-07): provinces and territories organize, manage and deliver health services. Some services may not be paid for by provincial and territorial plans, so clients may pay through private insurance or out of pocket.
- CNPS InfoLAW (revised February 2024): unregulated care providers include health care aides and home support workers. It points nurses to their provincial or territorial regulator and cites guidance from several provincial colleges.

## Left empty, with the reason

These 18 items have no material Canadian difference: 1-1, 1-3, 1-4, 1-5, 1-6, 2-3, 2-4, 2-5, 2-6, 3-1, 3-4, 3-5, 3-6, 4-2, 5-1, 5-2, 5-3 and 5-5.

- 1-5: calcium gluconate 10% (100 mg/mL) is marketed in Canada (Fresenius Kabi DIN 02141019, Baxter DIN 02523140), so the calculation is unchanged.
- 1-3 and 1-6 already show calcium in mmol/L. 1-6's 2.17 mmol/L is inside the MCC range, so the key reads the same.
- 5-3 already shows glucose as 7.9 mmol/L, and the key does not turn on it.
- 2-5: I did not write a note on the SOGC magnesium sulfate maintenance rate. I could not reach the guideline full text to confirm the Canadian dose.
- 4-2: Canadian pediatric emergency departments may grade asthma severity with PRAM. I left this out because web search quota ran out before I could verify it.

## Notes on the process

The session's WebSearch quota ran out on the first call. All claims were checked with WebFetch, the Health Canada DPD API and Europe PMC full text instead.
