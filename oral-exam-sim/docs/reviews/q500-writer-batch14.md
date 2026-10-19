# Q500 writer report: batch14

Four new oral cases in `src/cases/batch14/`, registered in `BATCH_14` in blueprint order. All are `reviewed: false`, `version: 1`, `author: "Preceptor"`, `durationMinutes: 12`, with the DRAFT line first.

## Cases

| id | title | topic | blueprint | questions per path | longest path | findings | rubric items |
| --- | --- | --- | --- | --- | --- | --- | --- |
| postpartum-pleuritic-chest-pain | Chest pain with a newborn in the car seat | dvt-pe | cardio | 8 | 615 s | 15 | 17 |
| rural-child-wheeze-tiring | A boy who cannot finish a sentence | asthma-copd | resp | 8 | 600 s | 14 | 17 |
| return-visit-belly-pain-girl | Back the next day with a sore belly | abdominal-pain | peds | 8 | 585 s | 14 | 18 |
| preschooler-six-day-fever | Third visit this week for a fever | pediatric-fever | peds | 8 | 600 s | 16 | 19 |

Each case has 3 or 4 branching questions with strong, partial and unsafe choices, consequence nodes that rejoin the main line, an escalation on every path and 3 critical items.

Rubric points by row (history, physical, management, process):

- postpartum-pleuritic-chest-pain: 7, 9, 11, 7 of 34. History 21 percent, management 32 percent.
- rural-child-wheeze-tiring: 6, 9, 11, 6 of 32. History 19 percent, management 34 percent.
- return-visit-belly-pain-girl: 7, 8, 8, 9 of 32. History 22 percent, management 25 percent.
- preschooler-six-day-fever: 8, 9, 11, 8 of 36. History 22 percent, management 31 percent.

## Scenarios and how they differ from the bank

- postpartum-pleuritic-chest-pain. A woman 3 weeks after an emergency caesarean, breastfeeding, with a left leg DVT and pleuritic pain on a Saturday. The case tests Wells 9 with no D-dimer, empiric LMWH, leg ultrasound before CT, Hestia and sPESI for home treatment, and anticoagulant choice in breastfeeding. Escalation: her drug plan will not cover LMWH and she asks for rivaroxaban, her mother's drug. Existing PE cases are syncope with intermediate risk PE at a tertiary centre and cardiac arrest at 33 weeks. The SAMPs on PE in pregnancy are antepartum.
- rural-child-wheeze-tiring. A 9 year old boy with high risk asthma in a rural hospital 75 minutes by air from a PICU. PRAM, TREKK doses, magnesium, early referral, tiring with a rising pCO2 and stepwise noninvasive support, then a tension pneumothorax on BiPAP. The bank has adult near fatal asthma and hypercapnic COPD cases but no pediatric asthma oral case.
- return-visit-belly-pain-girl. An 11 year old girl sent home from urgent care with gastroenteritis and a possible urinary infection. Complicated appendicitis with septic shock, ultrasound first against a parent asking for CT, analgesia against a surgeon's request to withhold it, and a busy surgeon at night. The bank's appendicitis content is SAMP only (adult, pregnant and a child with pneumonia).
- preschooler-six-day-fever. A 3 year old boy on his third visit with 6 days of fever and an amoxicillin rash label. Complete Kawasaki disease, weight based antipyretic dosing, IVIG and ASA, then Kawasaki disease shock syndrome with sepsis and toxic shock cover and PICU transfer. The bank has Kawasaki only as SAMPs (an infant with incomplete disease and MIS-C in a school age boy).

## Key features covered

- dvt-pe 1, 2, 3, 4, 5, 6, 7
- asthma-copd 2, 3, 4, 5, 6, 7
- abdominal-pain 1, 4, 5, 6, 7, 8
- pediatric-fever 2, 4, 5, 8, plus shock 4

## Sources and verification

- Chen A, Rozenblyum E, Dahdah N, et al. CPS. Kawasaki disease: Practical guidance on diagnosis and management. 2026. Opened https://cps.ca/en/documents/position/kawasaki-disease (criteria, IVIG 2 g/kg within 10 days, ASA 30 to 50 mg/kg/day or low dose, platelets over 80, NSAID interaction, shock syndrome definition, live vaccines deferred 11 months).
- McCrindle BW, et al. AHA scientific statement on Kawasaki disease. Circulation. 2017. Confirmed by search (acc.org summary). No URL given.
- Weiss SL, et al. Surviving Sepsis Campaign pediatric guidelines. Pediatric Critical Care Medicine. 2020. Confirmed by search (sccm.org listing). No URL given.
- CPS Caring for Kids. Fever and temperature taking. Updated 2022. Opened https://caringforkids.cps.ca/handouts/health-conditions-and-treatments/fever_and_temperature_taking (dose by body weight).
- Di Saverio S, et al. WSES Jerusalem guidelines 2020 update. Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC7386163/ (ultrasound first in children, MRI over CT as second line, scores not used alone).
- Koberlein GC, et al. ACR Appropriateness Criteria, suspected appendicitis, child. JACR. 2019. Opened https://scholarlyexchange.childrensmercy.org/papers/2645.
- Bundy DG, et al. Does this child have appendicitis? JAMA. 2007. Confirmed by search. No URL.
- Poonai N, et al. Opioid analgesia for acute abdominal pain in children. Academic Emergency Medicine. 2014. Confirmed by search. No URL.
- Solomkin JS, et al. SIS and IDSA complicated intra abdominal infection guidelines. Clinical Infectious Diseases. 2010. Confirmed by search. No URL.
- TREKK. Pediatric severe asthma exacerbation algorithm v2.0. 2024. Opened and read the PDF at https://cms.trekk.ca/wp-content/uploads/2024/02/2024-02-19_Asthma-Algorithm_v2.0-FINAL.pdf (salbutamol 10 puffs or 5 mg at 20 kg or more, ipratropium 4 puffs or 250 mcg, dexamethasone 0.6 mg/kg max 12 mg, magnesium 50 mg/kg max 2 g, stepwise high flow, CPAP, BiPAP, PRAM table).
- Trottier ED, Chan K, Allain D, Chauvin-Kimoff L. CPS. Managing an acute asthma exacerbation in children. 2021. Confirmed by search. The CPS page would not load past a verification screen, so no URL.
- Ducharme FM, et al. PRAM validation. Journal of Pediatrics. 2008. Confirmed by search. No URL.
- Global Initiative for Asthma. 2024 report. Confirmed by search of GINA based material. No URL.
- BC Guidelines and Protocols Advisory Committee. Venous thromboembolism. Diagnosis and management. 2024. Opened and read the PDF at https://www2.gov.bc.ca/assets/gov/health/practitioner-pro/bc-guidelines/vte-guideline.pdf (Wells 4.5 threshold, no D-dimer when likely, hospitalization criteria, DOACs contraindicated in breastfeeding, LMWH and warfarin safe, dalteparin 200 units/kg rounded up to the syringe, overlap at least 5 days and 2 therapeutic INRs, at least 3 months).
- Bates SM, et al. ASH 2018 VTE in pregnancy. Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC6258928/ (recommendations 12 and 13 on breastfeeding).
- Zondag W, et al. The Hestia Study. JTH. 2011. Confirmed by search. No URL.
- Nguyen AT, et al. U.S. MEC 2024. Opened https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm and the appendix (combined hormonal contraception category 4 under 21 days postpartum and 3 on anticoagulation for DVT or PE).
- Singh N, McLean K. Intravascular contrast media in breastfeeding women. CMAJ. 2012. Opened https://pmc.ncbi.nlm.nih.gov/articles/PMC3470645/.

## Test results

`npx tsc --noEmit -p . | grep cases/batch14` gives no output. `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts` passes 45 of 45.

## Needs physician decision

- Kawasaki case. The CPS 2026 practice point allows moderate dose or low dose ASA from the start. The case uses moderate dose (160 mg every 6 hours, about 43 mg/kg/day). Ceftriaxone 50 mg/kg and clindamycin 13 mg/kg for possible toxic shock are standard doses but are not taken from a cited dosing table.
- Appendicitis case. Pyuria as a pitfall is taught only in feedback and model answers, because no source stating its frequency in appendicitis could be verified. Antibiotic doses (ceftriaxone 50 mg/kg, metronidazole 30 mg/kg/day) follow the Solomkin pediatric table from memory. The table itself was not opened.
- Asthma case. A tension pneumothorax on BiPAP in a child is uncommon. It was chosen to test asthma key feature 4. Intubation drugs appear only in model answers.
- PE case. The 2024 U.S. MEC lists combined hormonal contraception as category 3, not 4, for DVT or PE on therapeutic anticoagulation. The case says only that it is not advised and offers progestin only or IUD options. Hestia and sPESI were applied with a heart rate of 108 so that sPESI is 0. A reviewer may want to confirm the Hestia author list.
