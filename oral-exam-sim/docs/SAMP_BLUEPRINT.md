# SAMP bank blueprint

1,500 original SAMPs. The first 525 (s01 to s18) have 15 per CFPC EM priority topic and were signed off on 24 September 2026. The expansion (s19 to s53) adds 975, one batch per topic, weighted toward high yield topics. Every key feature of every topic is tested by at least 3 questions across the bank.

## First 525

| Batch | Topics (id) | Key features | SAMPs |
|---|---|---|---|
| s01 | Abdominal Pain (`abdominal-pain`), Abuse (Domestic) (`abuse-domestic`) | 8 + 6 | 30 |
| s02 | Airway Management (`airway`), Analgesia/Sedation (`analgesia-sedation`) | 6 + 6 | 30 |
| s03 | Anaphylaxis (`anaphylaxis`), Arrhythmia (`arrhythmia`) | 4 + 8 | 30 |
| s04 | Asthma/COPD (`asthma-copd`), Burns (`burns`) | 8 + 6 | 30 |
| s05 | Cerebrovascular Accident (CVA) (`cva`), Chest Pain (`chest-pain`) | 4 + 5 | 30 |
| s06 | Common Fractures/MSK (`msk`), Continuous Quality Improvement (CQI) (`cqi`) | 8 + 6 | 30 |
| s07 | Critical Appraisal (`critical-appraisal`), Decreased Level of Consciousness (`loc`) | 5 + 5 | 30 |
| s08 | Deep Venous Thrombosis (DVT)/Pulmonary Embolus (PE) (`dvt-pe`), Delirium/Agitation (`delirium-agitation`) | 7 + 5 | 30 |
| s09 | Emergency Medical Services (EMS) (`ems`), Environmental (`environmental`) | 4 + 5 | 30 |
| s10 | Eye: Red Eye/Loss of Vision (`eye`), First-Trimester Bleeding (`first-trimester-bleeding`) | 5 + 6 | 30 |
| s11 | Gastrointestinal (GI) Bleed (`gi-bleed`), Headache (`headache`) | 6 + 6 | 30 |
| s12 | Infectious Diseases (`infectious-diseases`), Ischemic Heart Disease (`ischemic-heart-disease`) | 10 + 8 | 30 |
| s13 | Lacerations (`lacerations`), Multiple Patients (`multiple-patients`) | 4 + 4 | 30 |
| s14 | Multiple Trauma (`multiple-trauma`), Pediatric Fever (`pediatric-fever`) | 8 + 8 | 30 |
| s15 | Pre-Eclampsia (`pre-eclampsia`), Pulmonary Edema (`pulmonary-edema`) | 4 + 6 | 30 |
| s16 | Seizures (`seizures`), Shock/Dehydration (`shock`) | 8 + 8 | 30 |
| s17 | Shortness of Breath (`sob`), Suicide Risk (`suicide-risk`) | 5 + 5 | 30 |
| s18 | Toxicology (`tox`) | 8 | 15 |

## Expansion to 1,500

Tiers set how many SAMPs a topic gets. The CFPC does not publish topic weights. Tier A holds the core resuscitation, cardiac, respiratory, neuro, toxicology, trauma and pediatric topics that recur across the key features. Tier B holds the other clinical topics. Tier C holds the systems and appraisal topics.

- Tier A: 32 new, 47 in total per topic.
- Tier B: 23 new, 38 in total per topic.
- Tier C: 20 or 21 new, 35 or 36 in total per topic.

The plan lives in `docs/samp-expansion.json`. `tests/samps.test.ts` checks each batch against it.

| Batch | Topic | Tier | New SAMPs | Ids |
|---|---|---|---|---|
| s19 | Abdominal pain (`abdominal-pain`) | A | 32 | abdominal-pain-16 to abdominal-pain-47 |
| s20 | Abuse (domestic) (`abuse-domestic`) | B | 23 | abuse-domestic-16 to abuse-domestic-38 |
| s21 | Airway management (`airway`) | A | 32 | airway-16 to airway-47 |
| s22 | Analgesia/sedation (`analgesia-sedation`) | A | 32 | analgesia-sedation-16 to analgesia-sedation-47 |
| s23 | Anaphylaxis (`anaphylaxis`) | A | 32 | anaphylaxis-16 to anaphylaxis-47 |
| s24 | Arrhythmia (`arrhythmia`) | A | 32 | arrhythmia-16 to arrhythmia-47 |
| s25 | Asthma/COPD (`asthma-copd`) | A | 32 | asthma-copd-16 to asthma-copd-47 |
| s26 | Burns (`burns`) | B | 23 | burns-16 to burns-38 |
| s27 | Cerebrovascular accident (CVA) (`cva`) | A | 32 | cva-16 to cva-47 |
| s28 | Chest pain (`chest-pain`) | A | 32 | chest-pain-16 to chest-pain-47 |
| s29 | Common fractures/MSK (`msk`) | B | 23 | msk-16 to msk-38 |
| s30 | Continuous quality improvement (CQI) (`cqi`) | C | 20 | cqi-16 to cqi-35 |
| s31 | Critical appraisal (`critical-appraisal`) | C | 21 | critical-appraisal-16 to critical-appraisal-36 |
| s32 | Decreased level of consciousness (`loc`) | A | 32 | loc-16 to loc-47 |
| s33 | Deep venous thrombosis (DVT) and pulmonary embolus (PE) (`dvt-pe`) | A | 32 | dvt-pe-16 to dvt-pe-47 |
| s34 | Delirium/agitation (`delirium-agitation`) | B | 23 | delirium-agitation-16 to delirium-agitation-38 |
| s35 | Emergency medical services (EMS) (`ems`) | C | 21 | ems-16 to ems-36 |
| s36 | Environmental (`environmental`) | B | 23 | environmental-16 to environmental-38 |
| s37 | Eye: red eye and loss of vision (`eye`) | B | 23 | eye-16 to eye-38 |
| s38 | First trimester bleeding (`first-trimester-bleeding`) | B | 23 | first-trimester-bleeding-16 to first-trimester-bleeding-38 |
| s39 | Gastrointestinal (GI) bleed (`gi-bleed`) | A | 32 | gi-bleed-16 to gi-bleed-47 |
| s40 | Headache (`headache`) | A | 32 | headache-16 to headache-47 |
| s41 | Infectious diseases (`infectious-diseases`) | A | 32 | infectious-diseases-16 to infectious-diseases-47 |
| s42 | Ischemic heart disease (`ischemic-heart-disease`) | A | 32 | ischemic-heart-disease-16 to ischemic-heart-disease-47 |
| s43 | Lacerations (`lacerations`) | B | 23 | lacerations-16 to lacerations-38 |
| s44 | Multiple patients (`multiple-patients`) | C | 20 | multiple-patients-16 to multiple-patients-35 |
| s45 | Multiple trauma (`multiple-trauma`) | A | 32 | multiple-trauma-16 to multiple-trauma-47 |
| s46 | Pediatric fever (`pediatric-fever`) | A | 32 | pediatric-fever-16 to pediatric-fever-47 |
| s47 | Pre-eclampsia (`pre-eclampsia`) | B | 23 | pre-eclampsia-16 to pre-eclampsia-38 |
| s48 | Pulmonary edema (`pulmonary-edema`) | B | 23 | pulmonary-edema-16 to pulmonary-edema-38 |
| s49 | Seizures (`seizures`) | A | 32 | seizures-16 to seizures-47 |
| s50 | Shock/dehydration (`shock`) | A | 32 | shock-16 to shock-47 |
| s51 | Shortness of breath (`sob`) | A | 32 | sob-16 to sob-47 |
| s52 | Suicide risk (`suicide-risk`) | B | 23 | suicide-risk-16 to suicide-risk-38 |
| s53 | Toxicology (`tox`) | A | 32 | tox-16 to tox-47 |
