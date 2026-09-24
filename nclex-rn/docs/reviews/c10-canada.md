# Batch c10 Canada pass

Scope: the 30 items in cases 1 to 5 imported by `src/bank/c10/index.ts`. `extra.ts` was ignored. Only `canada` and `sources` were edited. New sources were added inline in each item's `sources` array. `helpers.ts` was not changed.

- Notes written: 11
- Left empty: 19
- `BATCH=c10 npx vitest run tests/bank.test.ts`: 44 of 44 pass

## Notes written

| Item | Topic of note |
| --- | --- |
| rn-c10-1-3 | CPS 2025 adopts the AAP 2022 phototherapy thresholds in micromol/L. Bilirubin reads 292 micromol/L |
| rn-c10-2-4 | The Canadian crisis line is 9-8-8, the Suicide Crisis Helpline, launched November 2023, call or text, English and French |
| rn-c10-3-4 | Aspirin is called ASA. CPS accepts a moderate dose of 30 to 50 mg/kg/day or low-dose ASA of 3 to 5 mg/kg daily from the start |
| rn-c10-3-5 | Immune globulin is a blood product distributed by Canadian Blood Services (Héma-Québec in Quebec) to hospital blood banks |
| rn-c10-4-1 | PaedCTAS triage. Stridor with retractions and a protected airway is moderate distress, level II, seen within 15 minutes |
| rn-c10-4-4 | Racemic epinephrine is not readily available in Canada. L-epinephrine 1:1000, 5 mL, is equivalent. Albuterol is salbutamol |
| rn-c10-4-5 | PHAC lists parainfluenza and croup under Droplet and Contact Precautions, so facial protection is added within 2 metres |
| rn-c10-4-6 | The child would likely get L-epinephrine. The CPS 2 to 4 hour observation still applies |
| rn-c10-5-1 | Glucose in mmol/L only, 21.4 mmol/L. Diabetes Canada gives targets in mmol/L |
| rn-c10-5-5 | Correction order in mmol/L: 1 unit per 2.5 mmol/L above 8.3 mmol/L. 13.3 mmol/L still gives 2 units |
| rn-c10-5-6 | Sharps disposal varies by province. HPSA runs free take-back programs in Manitoba, Ontario, New Brunswick, Quebec and PEI |

No note changes or softens a key.

## Sources added

- Ng E, Altit G, Joynt C, Radziminski N, Narvey M. Canadian Paediatric Society, Guidelines for detection and management of hyperbilirubinemia in term and late preterm newborns. Paediatrics and Child Health 31(5):496, 2025. https://cps.ca/en/documents/position/hyperbilirubinemia-newborns (1-3)
- Public Health Agency of Canada, Government of Canada launches three-digit suicide crisis helpline, 2023. https://www.canada.ca/en/public-health/news/2023/11/government-of-canada-launches-three-digit-suicide-crisis-helpline.html (2-4)
- Chen A, et al. Canadian Paediatric Society, Kawasaki disease: Practical guidance on diagnosis and management. Paediatrics and Child Health 31(5):550, 2026. https://cps.ca/en/documents/position/kawasaki-disease (3-4)
- Betschel SD, Warrington RJ, Schellenberg R, Clinical experience with Octagam 10%: a Canadian retrospective review of utilization. Allergy, Asthma and Clinical Immunology 12:32, 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4962395/ (3-5)
- Warren DW, Jarvis A, LeBlanc L, Gravel J, CTAS National Working Group, Revisions to the Canadian Triage and Acuity Scale Paediatric Guidelines (PaedCTAS). CJEM 10(3):224, 2008. https://doi.org/10.1017/S1481803500010149 (4-1)
- Public Health Agency of Canada, Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings, 2016. https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html (4-5)
- Wherrett DK, et al. Diabetes Canada, Type 1 Diabetes in Children and Adolescents. Canadian Journal of Diabetes 42(Suppl 1):S234, 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34 (5-1, 5-5)
- Health Products Stewardship Association, Returning Medical Sharps, 2024. https://healthsteward.ca/consumers/returning-medical-sharps/ (5-6)

Items 4-4 and 4-6 rely on the CPS croup statement, which both items already cite. No item has more than 3 sources.

## How the claims were checked

- Bilirubin: the CPS 2025 guideline (fetched from Oxford Academic) replaces the 2007 statement. It says several elements of the AAP 2022 guideline were built in, including its phototherapy thresholds, and it uses micromol/L throughout.
- 9-8-8: the PHAC news release and CAMH pages (search) confirm the launch on November 30, 2023. It takes calls and texts in English and French, 24 hours a day. CAMH runs it with federal funding.
- Kawasaki: the CPS guidance (fetched, published February 2026) offers moderate ASA at 30 to 50 mg/kg/day every 6 hours, then 3 to 5 mg/kg once afebrile, or low-dose ASA from the start. It also defers live vaccines for 11 months after IVIG and advises against NSAIDs with ASA. That matches 3-6, so 3-6 has no note.
- Immune globulin: Betschel 2016 (fetched) says Canadian Blood Services distributes IVIg except in Quebec, where Héma-Québec does, to blood banks within hospitals.
- Triage: the PaedCTAS 2008 revision (PDF text extracted) rates moderate distress, including retractions, flaring and stridor with a protected airway, as level II. The 2001 PaedCTAS guideline sets the level II goal at 15 minutes. The CTAS 2016 revision keeps the respiratory distress modifier at levels 1 to 3 and leaves paediatric CTAS otherwise unchanged.
- Croup: the CPS statement (fetched, updated March 6, 2026) says racemic epinephrine is not readily available in Canada. It says 1:1000 L-epinephrine is equally effective, with 0.5 mL racemic equal to 5 mL L-epinephrine. The c10 review confirmed the 2 to 4 hour observation. Salbutamol is the Canadian generic name for albuterol.
- Precautions: the PHAC guideline (2016 revision, text checked) lists parainfluenza, croup and colds under Droplet and Contact. Facial protection (a mask with eye protection) is worn within 2 metres. This adds to the CDC contact-only key and does not change it.
- Glucose: the Diabetes Canada chapter 34 (fetched) gives glucose in mmol/L. The arithmetic (13.3 minus 8.3) divided by 2.5 is 2 units.
- Sharps: the HPSA page (fetched) names Manitoba, Ontario, New Brunswick, Quebec and Prince Edward Island and offers free containers at participating locations. Nova Scotia has its own pharmacy program, which supports "varies by province".

## Left empty, with the reason

These 19 items have no verified material Canadian difference: 1-1, 1-2, 1-4, 1-5, 1-6, 2-1, 2-2, 2-3, 2-5, 2-6, 3-1, 3-2, 3-3, 3-6, 4-2, 4-3, 5-2, 5-3 and 5-4.

- 1-2 and 1-6 already give bilirubin in micromol/L. The note on 1-3 covers the unit point for case 1.
- 2-6: the Canadian Joint Statement on Safe Sleep gives the same advice as the AAP (back to sleep, room sharing, bare crib). No note.
- 2-5: sertraline is sold in Canada under the same name.
- 3-2: the WBC is shown in /mm3, which Canadian labs would give as 21.4 x 10^9/L. The item does not turn on the number, so no note was written. A reviewer may want one.
- 5-2: school diabetes support varies by province (Ontario PPM 161, BC provincial standards), but the item tests developmental readiness, not school policy. I could not fetch a Diabetes Canada page that states the variation directly.
- 5-1: I did not add a Diabetes Canada DKA definition. The 2018 chapter does not state pH or bicarbonate cutoffs in the text I could fetch, and the CPS DKA statement page would not load.
