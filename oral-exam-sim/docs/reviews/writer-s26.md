# Writer report: batch s26, Burns

## Count, mix and key positions

- 23 SAMPs, burns-16 to burns-38, in `src/samps/s26/burns.ts`, exported as `BURNS_S26`. `src/samps/s26/index.ts` exports it as `SAMPS_S26`.
- 88 questions: 81 single and 7 menu. Menus sit in burns-19, 20, 22, 27, 28, 37 and 38.
- Questions per SAMP: 4 in 15 SAMPs, 3 in 6 SAMPs, 5 in 2 SAMPs.
- Single key positions, first to fifth: 17, 16, 17, 17, 14. The highest is 21%.
- The key is the single longest option in 23 of 81 singles (28%).
- Checks: `npx tsc --noEmit -p . 2>&1 | grep samps/s26` prints nothing. `SAMP_BATCH=s26 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 520 of 520.

## Key feature coverage

| Key feature | Questions |
|---|---|
| 1. Linked trauma, smoke, cyanide, CO, compartment syndrome, rhabdomyolysis | 24 |
| 2. Inhalation injury and early airway | 9 |
| 3. Prompt IV analgesia | 14 |
| 4. Fluids from time of injury, tracking response | 16 |
| 5. Disposition by site, size, age, comorbidity, home | 20 |
| 6. Chemical contact with unexplained hand pain | 5 |

## Scenarios

Chosen to avoid the s04 cases. Kitchen oil fire in a community hospital. Kettle pull-down in a toddler (Lund and Browder). Older woman found beside a space heater (rhabdomyolysis, head CT on apixaban). Extension cord oral commissure burn. Household rust remover hydrofluoric acid. Townhouse fire with cyanide and oximetry error. Balcony jump with hemorrhage and axial load fractures. Forearm escharotomy. Child with stridor after a house fire. Rural pre-transfer intubation and succinylcholine timing. Small scald for outpatient care. Diabetic foot immersion burn. Iron-pattern burn in a toddler. Cement alkali burn. Tar burn with ketamine adjunct. Fluid creep with abdominal and orbital compartment syndrome. Infant pull-down scald with dextrose maintenance. Older woman with heart failure (Baux score). Self-inflicted burn with Ontario Form 1. Treadmill friction hand burn. Butane extraction explosion. Outdoor flash burn with no inhalation injury. Workshop smoke with nasolaryngoscopy.

## Formula conventions stated in stems

- Adults: 2 mL/kg per %TBSA of Ringer's lactate (American Burn Association 2024, ABLS 2018). Urine output 0.5 mL/kg/hour.
- Children: the TREKK 2025 formula, stated in the stem. That is 3 mL/kg per %TBSA at age 12 and under, 2 mL/kg at 13 and over, a formula only above 15% TBSA, D5RL maintenance by the 4 2 1 rule, and urine output 1 mL/kg/hour at 30 kg or less.
- Every rate counts from the time of the burn. The arithmetic is shown in each explanation.

## Sources, with verification

All were checked on PubMed, Europe PMC or the publisher page on 2026-09-24.

- Cartotto R and colleagues. ABA clinical practice guidelines on burn shock resuscitation. J Burn Care Res. 2024. https://pubmed.ncbi.nlm.nih.gov/38051821/ (abstract read: 2 mL/kg start, albumin, intra-abdominal and intraocular pressure monitoring, no transpulmonary thermodilution, no recommendation on vitamin C).
- American Burn Association. Advanced Burn Life Support Course Provider Manual. 2018 update. This is a print manual that cannot be fetched. Existence confirmed by search results. The same citation is already in s04.
- American Burn Association. Guidelines for burn patient referral. 2025. https://ameriburn.org/resources/burnreferral/ (page read: criteria, depth descriptors, palm about 1%).
- TREKK. Bottom line recommendations: pediatric thermal burns. Version 2.0. 2025. https://trekk.ca/resources/bottom-line-recommendations-pediatric-thermal-burns/ (PDF read in full).
- TREKK. Bottom line recommendations: pain treatment. Version 4.0. 2023. https://trekk.ca/resources/bottom-line-recommendations-pain-treatment/ (PDF read: IN fentanyl 1.5 mcg/kg, max 100 mcg, repeat max 50 mcg. IV fentanyl 1 mcg/kg. Ibuprofen 10 mg/kg).
- TREKK. Bottom line recommendations: suspected physical child abuse. Version 2.0. 2023. https://trekk.ca/resources/bottom-line-recommendations-suspected-physical-child-abuse/ (PDF read: skeletal survey under 2 years, report before disposition).
- Romanowski KS and colleagues. ABA guidelines on acute pain in the adult burn patient. J Burn Care Res. 2020. https://pubmed.ncbi.nlm.nih.gov/32885244/
- McKee D and colleagues. A review of hydrofluoric acid burn management. Plast Surg (Oakv). 2014. https://pubmed.ncbi.nlm.nih.gov/25114621/
- Arnoldo B, Klein M, Gibran NS. Practice guidelines for the management of electrical injuries. J Burn Care Res. 2006. https://pubmed.ncbi.nlm.nih.gov/16819345/
- Bosch X, Poch E, Grau JM. Rhabdomyolysis and acute kidney injury. N Engl J Med. 2009. https://pubmed.ncbi.nlm.nih.gov/19571284/
- Anseeuw K and colleagues. Cyanide poisoning by fire smoke inhalation: a European expert consensus. Eur J Emerg Med. 2013. https://pubmed.ncbi.nlm.nih.gov/22828651/
- Mintegi S and colleagues. Pediatric cyanide poisoning by fire smoke inhalation: a European expert consensus. Pediatr Emerg Care. 2013. https://pubmed.ncbi.nlm.nih.gov/24196100/
- Borron SW and colleagues. Hydroxocobalamin for severe acute cyanide poisoning. Am J Emerg Med. 2007. https://pubmed.ncbi.nlm.nih.gov/17543660/ (abstract: chromaturia and pink skin).
- Hampson NB and colleagues. Practice recommendations in CO poisoning. Am J Respir Crit Care Med. 2012. https://pubmed.ncbi.nlm.nih.gov/23087025/
- Walker PF and colleagues. Diagnosis and management of inhalation injury. Crit Care. 2015. https://pubmed.ncbi.nlm.nih.gov/26507130/
- Griffin BR and colleagues. Cool running water first aid in pediatric burns. Ann Emerg Med. 2020. https://pubmed.ncbi.nlm.nih.gov/31474480/
- Palao R and colleagues. Chemical burns: pathophysiology and treatment. Burns. 2010. https://pubmed.ncbi.nlm.nih.gov/19864073/
- Public Health Agency of Canada. Canadian Immunization Guide. Tetanus toxoid. Updated 2026. https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html (table read).
- Martyn JA, Richtsfeld M. Succinylcholine-induced hyperkalemia in acquired pathologic states. Anesthesiology. 2006. https://pubmed.ncbi.nlm.nih.gov/16394702/
- Kemp AM and colleagues. Patterns of burns and scalds in children. Arch Dis Child. 2014. https://pubmed.ncbi.nlm.nih.gov/24492796/
- ISBI Practice Guidelines Committee. ISBI practice guidelines for burn care. Burns. 2016. https://pubmed.ncbi.nlm.nih.gov/27542292/
- ACS Committee on Trauma. ATLS Student Course Manual. 10th ed. 2018. This is a print manual.
- Walls RM and colleagues, editors. Rosen's Emergency Medicine. 10th ed. 2023. This is a print textbook.
- Ontario. Mental Health Act, R.S.O. 1990, c. M.7, section 15. https://www.ontario.ca/laws/statute/90m07 (statute page resolved, but the section text did not render in the fetch).

## For the reviewers

- The full text of McKee 2014 was not accessible. I could read only the abstract. These hydrofluoric acid points are standard teaching but are not confirmed line by line against that paper: 2.5% calcium gluconate gel, intravenous regional or intra-arterial calcium for persistent pain, avoiding a digital block because it hides the pain endpoint, and the systemic risk thresholds of more than 1% TBSA concentrated, more than 5% at any strength, or inhalation (burns-20 q2 to q4).
- These points rest on Rosen's (print) and were not checked against the text: the timing of labial artery bleeding at 5 to 10 days (burns-19 q2), tar removal with mineral oil (burns-30 q3), the Baux score (burns-33 q1) and corneal fluorescein after a flash burn (burns-36 q2).
- The escharotomy midaxial lines in burns-23 q2 are cited to ISBI 2016. I verified the citation, not the specific figure.
- ABLS 2018 is cited for the adult urine output target of 0.5 mL/kg/hour, the electrical target of about 100 mL/hour, a urinary catheter before transfer, and titrating the rate rather than giving boluses. The manual itself was not accessible.
- The Hampson 2012 hyperbaric criteria in burns-38 q3 are phrased as "considered for". The 25% threshold and pregnancy come from common practice lists. Please check the wording against the paper.
- Burns-27 q2 applies the Canadian Immunization Guide tetanus-prone row. Burns are not named in the guide, and I treated full thickness necrotic tissue as tetanus prone.
- Burns-34 q3 names Ontario in the update, because Form 1 is provincial.
- The ketamine dose of 0.3 mg/kg in burns-30 q2 is standard emergency practice. Romanowski 2020 supports ketamine as an adjunct but may not state that dose.
