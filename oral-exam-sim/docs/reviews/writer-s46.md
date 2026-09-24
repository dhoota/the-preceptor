# Writer report: batch s46, pediatric fever

File: `src/samps/s46/pediatric-fever.ts` (export `PEDIATRIC_FEVER_S46`), re-exported as `SAMPS_S46` from `src/samps/s46/index.ts`. All SAMPs are `reviewed: false`.

## Count, mix and key positions

- 32 SAMPs, ids pediatric-fever-16 to pediatric-fever-47.
- 114 questions: 103 single, 11 menu. 18 SAMPs have 4 questions and 14 have 3. No short questions.
- Menu questions sit in 11 SAMPs (21, 22, 23, 25, 32, 34, 35, 38, 40, 44, 45), about one in three.
- Single key positions, first to fifth: 19, 18, 23, 24, 19. The largest share is 23%.
- The key is the longest option in 28 of 103 singles (27%).
- `tsc` shows no errors in s46. `SAMP_BATCH=s46 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes: 687 tests.

## Key feature coverage (questions per key feature)

| Key feature | Questions |
|---|---|
| 1 Stratify sepsis risk by age and other factors | 17 |
| 2 Recognize subtle sepsis signs | 12 |
| 3 Early broad spectrum antibiotics | 16 |
| 4 Dangerous versus benign rashes | 15 |
| 5 Less common causes of persistent fever | 13 |
| 6 Noninfectious causes (poisoning, heat illness) | 6 |
| 7 No antibiotics for viral fever | 13 |
| 8 Weight based antipyretic dosing | 12 |

Ten more questions map to secondary topics in the poisoning, heat and scarlet fever SAMPs: tox 4 (3), tox 2 (1), tox 5 (1), environmental 2 (3), environmental 1 (1), infectious-diseases 8 (1).

Key feature 6 is covered by anticholinergic toxicity (31), serotonin toxicity (32), sympathomimetic toxicity (33) and classic heat stroke in a toddler left in a car (34). The s14 salicylate and exertional heat SAMPs are not repeated.

Scenarios left out because s14 already covers them: the well 12 day and 6 week olds, the hypotensive 9 month old, meningococcemia, measles, complete Kawasaki disease, falciparum malaria from Ghana, mild AOM, a cold with a request for antibiotics, salicylate poisoning, exertional heat stroke, febrile neutropenia, leukemia, a UTI at 4 months, and toxic shock after varicella.

## Sources and verification

| Id | Citation | Verified at |
|---|---|---|
| cps-infant | Burstein B, et al. CPS. Well-appearing febrile young infants aged 90 days or younger. Paediatr Child Health. 2024 | https://cps.ca/en/documents/position/management-of-well-appearing-febrile-young-infants-aged-90-days (full text read) |
| cps-meningitis | Le Saux N, CPS. Bacterial meningitis in Canadian children older than one month. Paediatr Child Health. 2014. Reaffirmed 2026 | https://cps.ca/en/documents/position/management-of-bacterial-meningitis (full text read) |
| cps-sepsis | Farrell CA, CPS. Diagnosis and management of severe sepsis in the paediatric patient. Paediatr Child Health. 2020 | https://pubmed.ncbi.nlm.nih.gov/33178370/ (abstract only) |
| phoenix | Schlapbach LJ, et al. International consensus criteria for pediatric sepsis and septic shock. JAMA. 2024 | https://pubmed.ncbi.nlm.nih.gov/38245889/ |
| thompson-mening | Thompson MJ, et al. Clinical recognition of meningococcal disease. Lancet. 2006 | https://pubmed.ncbi.nlm.nih.gov/16458763/ |
| aap-antipyretic | Sullivan JE, Farrar HC, AAP. Fever and antipyretic use in children. Pediatrics. 2011 | https://pubmed.ncbi.nlm.nih.gov/21357332/ (abstract only) |
| aap-febrile-seizure | AAP. Long-term management of simple febrile seizures. Pediatrics. 2008 | https://pubmed.ncbi.nlm.nih.gov/18519501/ |
| aap-febrile-seizure-eval | AAP. Neurodiagnostic evaluation of a simple febrile seizure. Pediatrics. 2011 | https://pubmed.ncbi.nlm.nih.gov/21285335/ |
| aha-kawasaki | McCrindle BW, et al. AHA Kawasaki disease statement. Circulation. 2017 | https://pubmed.ncbi.nlm.nih.gov/28356445/ |
| mas-criteria | Ravelli A, et al. 2016 classification criteria for macrophage activation syndrome. Ann Rheum Dis. 2016 | https://pubmed.ncbi.nlm.nih.gov/26865703/ |
| catmat-dx | CATMAT, PHAC. Malaria guidelines, chapter 6: diagnosis. Updated 2023 | https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria/chapter-6-malaria-diagnosis.html (full text read) |
| cps-aom | Le Saux N, Robinson JL, CPS. Acute otitis media. Paediatr Child Health. 2016 | https://pubmed.ncbi.nlm.nih.gov/26941560/ (full text read on PMC) |
| cps-bronchiolitis | Friedman JN, et al, CPS. Bronchiolitis. Paediatr Child Health. 2014 | https://pubmed.ncbi.nlm.nih.gov/25414585/ (full text read on PMC) |
| cps-cap | Le Saux N, Robinson JL, CPS. Uncomplicated pneumonia. Paediatr Child Health. 2015 | https://pubmed.ncbi.nlm.nih.gov/26744558/ (full text read on PMC) |
| cps-uti | Robinson JL, et al, CPS. Urinary tract infections in infants and children. Paediatr Child Health. 2014 | https://pubmed.ncbi.nlm.nih.gov/25332662/ (full text read on PMC) |
| hunter | Dunkley EJ, et al. Hunter Serotonin Toxicity Criteria. QJM. 2003 | https://pubmed.ncbi.nlm.nih.gov/12925718/ |
| boyer-serotonin | Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005 | https://pubmed.ncbi.nlm.nih.gov/15784664/ |
| dawson-anticholinergic | Dawson AH, Buckley NA. Anticholinergic delirium. Br J Clin Pharmacol. 2016 | https://pubmed.ncbi.nlm.nih.gov/26589572/ |
| goldfrank | Goldfrank's Toxicologic Emergencies. 11th ed. 2019 | Textbook, not page checked |
| epstein-heatstroke | Epstein Y, Yanovich R. Heatstroke. N Engl J Med. 2019 | https://pubmed.ncbi.nlm.nih.gov/31216400/ |
| nelson | Nelson Textbook of Pediatrics. 22nd ed. Elsevier. 2024 | Textbook, not page checked |
| idsa-line | Mermel LA, et al. IDSA catheter-related infection guideline. Clin Infect Dis. 2009 | https://pubmed.ncbi.nlm.nih.gov/19489710/ |

The session's WebSearch budget ran out early, so citations were checked through PubMed E-utilities and WebFetch.

## For the reviewers

1. Sepsis currency. The Surviving Sepsis Campaign published a new pediatric guideline in 2026 (Weiss SL, et al. Pediatr Crit Care Med and Intensive Care Med, PMID 41869844). I could not read its full text, so no question relies on it. The sepsis questions (21 to 24, 46) cite the CPS 2020 statement, and I could verify only its abstract. That abstract covers reassessment after each bolus, epinephrine or norepinephrine in place of dopamine, corticosteroids for adrenal insufficiency, and hypotension as a late sign. The 10 to 20 mL/kg bolus volume and the intraosseous step (21 q3, cited to Nelson) are standard teaching. Please check them against SSC 2026.
2. Antipyretic doses. Only the abstract of the AAP 2011 report was verified. These values come from its dosing table as I recall it: acetaminophen 10 to 15 mg/kg every 4 to 6 hours with a maximum of 75 mg/kg/day or 5 doses, ibuprofen 5 to 10 mg/kg every 6 to 8 hours with a maximum of 40 mg/kg/day, and no ibuprofen under 6 months. Please confirm them. Distractor doses stay clear of the 10 to 15 and 5 to 10 mg/kg ranges.
3. Phoenix scoring (24 q2). The abstract confirms that a lactate above 5 mmol/L scores a cardiovascular point. The coagulation point for platelets below 100 x 10^9/L is from my reading of the paper.
4. Macrophage activation syndrome (29 q3). The triglyceride cut-off of 156 mg/dL was converted to 1.76 mmol/L.
5. Post-immunization fever (18 q2). The CPS advises at least a urinalysis and urine culture for febrile infants aged 61 to 90 days in general, and urine testing after immunization only when fever lasts beyond 24 hours. The key follows the post-immunization text. No option offers urine testing now.
6. RSV-positive infant (19 q2). The key is the full 29 to 60 day workup. The CPS lets a confirmed non-rhinovirus infection guide disposition, so a reviewer may prefer a lighter approach. None of the distractors is that option.
7. Neonatal HSV (16 q4). The 21 day IV course for CNS disease and the other Nelson-cited facts were not checked page by page. This also covers SSSS, eczema herpeticum, IgA vasculitis, roseola, hand, foot and mouth disease, mononucleosis, Hodgkin lymphoma, systemic JIA, and occult bacteremia in unimmunized toddlers.
8. Toxicology doses. These are from Goldfrank and not page checked: sodium bicarbonate 1 to 2 mmol/kg for a wide QRS from diphenhydramine, physostigmine about 0.02 mg/kg, and midazolam 0.1 mg/kg. Physostigmine supply varies across Canada.
9. Non-Canadian sources. Where I found no Canadian guideline, US or international sources are used: IDSA 2009 for line infection, AHA 2017 for Kawasaki disease, and AAP for febrile seizures and antipyretics. An AHA Kawasaki update from 2024 (Jone PN, et al.) exists and was not reviewed, so ASA dosing is deliberately not tested. Scarlet fever treatment (41 q3, amoxicillin 50 mg/kg daily to 1 g for 10 days) is cited to Nelson. I found no current CPS pharyngitis statement.
10. CPS meningitis title. The CPS web page now describes children older than 2 months. The citation keeps the 2014 journal title. Both cases (6 months, 13 years) fall within either range.
11. Question count. Average 3.6 per SAMP (18 with 4, 14 with 3), below the "usually 4 or 5" aim in the brief. I did not add questions where no verified source supported them.
