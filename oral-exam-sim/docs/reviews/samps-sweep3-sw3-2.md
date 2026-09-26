# Sweep 3 rebuilds, batch s25 (label sw3-2)

Batch file: `src/samps/s25/asthma-copd.ts`. Four SAMPs rebuilt in place. No other SAMP in the file was touched, including asthma-copd-42. Nothing was committed.

Each rebuild keeps its id, its topic, its question count and each question's key feature. Titles are new and neutral, `reviewed` stays false, and the version is bumped by 1.

## Rebuilt SAMPs

### asthma-copd-31 (version 1 to 2, 4 questions, key features 4, 4, 7, 4)

- Old scenario: a 76-year-old man with COPD and ischemic cardiomyopathy, orthopnea, edema and wheeze with crackles, keyed to acute heart failure, NT-proBNP, bilevel ventilation and IV furosemide. It copied asthma-copd-04 and pulmonary-edema-03.
- New scenario: a 34-year-old lifelong asthmatic with five days of wheeze, brown mucus plugs, three prednisone treated flares in a year and a blood eosinophil count of 1.6 x 10^9/L. The coexisting problem is allergic bronchopulmonary aspergillosis.
- Keyed decisions: name the coexisting problem, choose Aspergillus fumigatus specific IgE as the confirming test, choose high-flow nasal oxygen for hypoxemic failure with a normal PaCO2, and start prednisone 0.5 mg/kg PO daily.
- Sources: Agarwal R, Sehgal IS, Muthu V, et al. Revised ISHAM-ABPA working group clinical practice guidelines. Eur Respir J. 2024 (PMC10991853). Oczkowski S, Ergan B, Bos L, et al. ERS clinical practice guidelines. High-flow nasal cannula in acute respiratory failure. Eur Respir J. 2022 (doi 10.1183/13993003.01574-2021).
- Similarity check, top 5 of the final run: asthma-copd-45 0.16, sob-21 0.14, asthma-copd-33 0.14, airway-27 0.14, asthma-copd-46 0.13. No printed card tells this story. Allergic bronchopulmonary aspergillosis, total IgE and mucoid impaction appear nowhere else in the bank.
- Note for the reviewers: the high-flow key phrase also appears in asthma-copd-45, but that SAMP is an older COPD patient whose keyed teaching is pulse oximetry bias, and the rationale here is hypoxemic failure without hypercapnia.

### asthma-copd-35 (version 3 to 4, 3 questions, key features 5, 6, 8)

- Old scenario: an 84-year-old man with COPD, two prednisone treated flares and a dry powder inhaler he could not use, keyed to triple therapy and a device change. It copied asthma-copd-14.
- New scenario: a 27-year-old woman three weeks after giving birth, breastfeeding every three hours, with a severe asthma flare after a head cold. Peak flow 210 L/minute against a personal best of 430 L/minute.
- Keyed decisions: treat with inhaled salbutamol and ipratropium before imaging or a D-dimer, give prednisone 50 mg PO daily for 5 days, and advise her to breastfeed as usual during the course.
- Sources: Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update. National Institute of Child Health and Human Development. Drugs and Lactation Database (LactMed). Prednisone. Revised 2024.
- Similarity check, top 5 of the final run: asthma-copd-28 0.38, asthma-copd-21 0.33, asthma-copd-01 0.29 (signed off), asthma-copd-38 0.29, asthma-copd-10 0.29 (signed off). Each card was read. asthma-copd-28 is an older woman who lives alone and is admitted, asthma-copd-10 is a woman at 31 weeks who stopped her inhaler, asthma-copd-01 is risk assessment in a young asthmatic. None is postpartum or keys lactation.
- Note for the reviewers: the prednisone course key phrase also appears in asthma-copd-21 and asthma-copd-46. The stories differ (salbutamol toxicity, and a woman already on daily prednisone), and the decision here is whether being three weeks postpartum and breastfeeding changes the course. The wording overlap is flagged in case a physician wants the dose question reworked.

### asthma-copd-37 (version 1 to 2, 3 questions, key features 1, 7, 7)

- Old scenario: a 74-year-old woman with COPD, hard to rouse with small pupils after a hydromorphone increase, keyed to titrated naloxone and monitoring for resedation. It copied analgesia-sedation-12.
- New scenario: a 46-year-old orchard worker who sprayed an organophosphate insecticide from a leaking backpack sprayer. He has never wheezed before, salbutamol did nothing, and he has miosis, drooling, sweating, vomiting and a pulse of 52/minute.
- Keyed decisions: recognise cholinergic toxicity as the mimic behind a first wheezing episode, use a clear chest as the endpoint of atropine dosing, and keep him in a monitored bed with repeated strength checks for the intermediate syndrome.
- Source: Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008 (PMC2493390).
- Similarity check, top 5 of the final run: multiple-patients-06 0.25 (signed off), ems-13 0.14 (signed off), asthma-copd-29 0.11, asthma-copd-43 0.10, asthma-copd-34 0.10. Both signed off cards are multi-casualty prehospital hazmat cases keyed to decontamination, triage and the atropine and pralidoxime doses. This is a single patient who walked in with a wheeze label. The draft first keyed the doubling atropine dose, which those two SAMPs already key, so the question was changed to the endpoint of atropinisation, which nothing in the bank keys.

### asthma-copd-41 (version 3 to 4, 3 questions, key features 3, 7, 7)

- Old scenario: a 69-year-old woman with COPD, drowsy with pH 7.26 and PaCO2 78 mmHg, started on bilevel ventilation, keyed to early response, a monitored bed and weaning. It copied asthma-copd-02.
- New scenario: a rural hospital with no intensive care unit and a two-hour drive to the nearest one. A 58-year-old woman with COPD is exhausted after an hour of full medical treatment.
- Keyed decisions: choose an arterial blood gas as the measure that grades her failure, start bilevel ventilation before the transfer rather than on arrival, and give her bronchodilator through a nebulizer placed in the ventilator circuit because she cannot come off the mask.
- Source: Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016 (PMC4800170).
- Similarity check, top 5 of the final run: asthma-copd-33 0.30, asthma-copd-22 0.25, asthma-copd-26 0.24, asthma-copd-45 0.23, sob-05 0.21 (signed off). Each card was read. asthma-copd-33 grades a community hospital flare and keys antibiotics and oxygen targets, asthma-copd-22 turns on an advance directive, asthma-copd-26 keys pressure settings in obesity, sob-05 keys deterioration on bilevel ventilation and intubation. None keys transfer timing or drug delivery through the circuit.

## Fixes

None. Sweep 3 replaces Task 2, and scratchpad/sweep3-rebuild.json lists no fixes for s25.

## Checks

- `SAMP_BATCH=s25 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 675 passed.
- `npx tsc --noEmit -p .`: clean.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4503 passed.

The first run of the batch quality test failed on key position balance, with 26 of 102 single keys in the first position. One option in asthma-copd-41 q1 was reworded so the key falls in the second position, and the batch now sits at 25 of 102.

## For the physician

- asthma-copd-31 takes the bank outside the three coexisting problems named in key feature 4. Heart failure, pneumonia and pneumothorax are all keyed by signed off SAMPs, so this rebuild uses allergic bronchopulmonary aspergillosis, which the 2024 ISHAM guideline covers in detail. Please confirm you want this in an emergency medicine bank. The treatment question keys oral prednisone and deliberately leaves itraconazole out of the options, because the guideline accepts either as monotherapy for an acute episode and both could be defended.
- asthma-copd-35 q3 sits under key feature 8, which is about confirming recovery and reviewing technique and follow-up before discharge. The keyed decision is discharge advice about breastfeeding on prednisone. If you read key feature 8 more narrowly, this question would need to change to an objective recovery measure, and most of those are already keyed elsewhere in the batch.
- asthma-copd-37 treats a poisoning inside the asthma and COPD topic. It fits key feature 1, which asks for mimics of a first wheezing episode, and key feature 7 through the airway and respiratory muscle failure that follow. The atropine dose is given in the update rather than keyed, to avoid repeating the keys in ems-13 and multiple-patients-06.
- asthma-copd-41 q3 relies on a BTS and ICS good practice point, not a graded recommendation. The guideline prefers nebulizers during breaks from ventilation and allows the circuit route when a patient depends on the machine, which is why the stem states she desaturates within a minute off the mask.
