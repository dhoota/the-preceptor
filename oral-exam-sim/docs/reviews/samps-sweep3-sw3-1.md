# Sweep 3 rebuilds, batches s20 and s23 (label sw3-1)

Batch files: `src/samps/s20/abuse-domestic.ts` and `src/samps/s23/anaphylaxis.ts`. Five SAMPs rebuilt in place. No other SAMP in either file was touched. Nothing was committed.

Each rebuild keeps its id, its topic, its question count and each question's key feature. All questions are single best answer. Titles are new and neutral. `reviewed` stays false and the version is bumped by 1.

Every source below was opened and read for the claims it supports. Scratch files are in `scratchpad/sw3-1`.

## Rebuilt SAMPs

### abuse-domestic-30 (version 1 to 2, 3 questions, key features 4, 2, 5)

- Old scenario: a Deaf woman with a wrist fracture whose husband offered to interpret, keyed to a hospital ASL interpreter. It copied abuse-domestic-09.
- New scenario: a 38-year-old nurse who works on a ward of the same Ontario hospital presents at night with rib fractures after she says she tripped over her dog. She asks who can read her chart. Seen alone, she discloses kicking and shoving, and says her husband has threatened to harm the dog if she leaves.
- Keyed decisions: offer a PHIPA lock-box on her record so coworkers cannot read it (KF 4). Pick the healing cheekbone bruise as the injury pattern most suggesting partner violence (KF 2). Arrange a pet-friendly shelter through social work, since the dog is her barrier to leaving (KF 5).
- Sources: Information and Privacy Commissioner of Ontario. Lock-box fact sheet, number 8. 2005 (ipc.on.ca, fact-08-e.pdf). Wu V, Huff H, Bhandari M. Trauma Violence Abuse. 2010 (doi 10.1177/1524838010367503). Barrett BJ, Fitzgerald A, Stevenson R, Cheung CH. J Interpers Violence. 2020 (doi 10.1177/0886260517719542).
- Similarity check, top 5 (full/keys): abuse-domestic-24 0.20/0.10, abuse-domestic-06 0.14/0.11 (signed off), abuse-domestic-01 0.13/0.04 (signed off), chest-pain-29 0.10/0.13, infectious-diseases-38 0.13/0.01. I read every card. None is a health worker patient, and none keys record privacy or pets. No lock-box, pet or colleague-patient story exists elsewhere in the bank.

### anaphylaxis-25 (version 2 to 3, 4 questions, key features 3, 3, 3, 3)

- Old scenario: a woman with kiwi anaphylaxis still hypotensive after her own autoinjector, keyed to 0.5 mg IM from an ampoule, 5 minute repeats, Ringer's lactate and high-flow oxygen. It copied asthma-copd-13.
- New scenario: a 47-year-old man intubated in the ED for status epilepticus. Four minutes after ketamine and rocuronium he develops flushing, diffuse wheeze, peak airway pressure of 42 cmH2O and a BP of 62/34 mmHg. This is perioperative style rocuronium anaphylaxis in a paralysed, ventilated patient.
- Keyed decisions: titrated IV epinephrine 100 mcg as the first drug. Chest compressions when the systolic pressure falls below 50 mmHg with a pulse still present. An epinephrine infusion after three boluses. Inhaled salbutamol through the ventilator circuit for resistant bronchospasm. Sugammadex, antihistamines and steroids are distractors.
- Source: ANZAAG and ANZCA. Perioperative anaphylaxis management guideline. Background paper. 2022 (media.anzaag.com PDF). Cross-checked against the ISPAR table in Pouessel 2024 (PMC11439156). No Canadian perioperative anaphylaxis guideline exists.
- Similarity check, top 5: airway-36 0.27/0.14, airway-47 0.18/0.08, seizures-17 0.17/0.07, airway-11 0.13/0.16 (signed off), airway-46 0.15/0.05. I read every card. The matches share only the words intubation and compressions. No SAMP in the bank has anaphylaxis to an RSI drug or keys the below 50 mmHg compression threshold.

### anaphylaxis-36 (version 1 to 2, 4 questions, key features 2, 3, 4, 4)

- Old scenario: a teenager with a biphasic reaction after cashew, keyed to biphasic anaphylaxis and epinephrine 0.5 mg IM. It copied anaphylaxis-08.
- New scenario: a 27-year-old man with past mild shrimp reactions eats a cricket flour protein bar. He has a hoarse voice, vomiting and a BP of 86/54 mmHg, with no hives or flushing.
- Keyed decisions: diagnose anaphylaxis from laryngeal involvement and hypotension after a probable allergen without skin signs, using the WAO criteria (KF 2). Give epinephrine 0.5 mg IM (KF 3). Mealworm is the food that shares the arthropod cross-reactivity (KF 4). Iodine is not his allergen, so he does not need to avoid salt, povidone-iodine or contrast (KF 4).
- Sources: Cardona V, et al. WAO anaphylaxis guidance 2020 (PMC7607509). Ribeiro JC, et al. Mol Nutr Food Res. 2018 (doi 10.1002/mnfr.201700030). Schabelman E, Witting M. J Emerg Med. 2010 (doi 10.1016/j.jemermed.2009.10.014).
- Similarity check, top 5: anaphylaxis-39 0.30/0.15, sob-15 0.26/0.19 (signed off), anaphylaxis-40 0.22/0.05, anaphylaxis-32 0.19/0.04, asthma-copd-13 0.18/0.16 (signed off). I read every card. anaphylaxis-39 and sob-15 are shrimp reactions with hives. Neither involves insects or iodine.
- Note for reviewers: anaphylaxis-35 (unsigned, rank 7) also keys anaphylaxis without skin signs. Its story is peanut curry with isolated hypotension, and its later keys differ. The overlap is limited to the diagnostic teaching point of q1.

### anaphylaxis-42 (version 3 to 4, 3 questions, key features 3, 4, 4)

- Old scenario: a 7-month-old with eczema who vomited and went pale after a first taste of egg, keyed to weight-based IM epinephrine and a 0.15 mg autoinjector. It copied anaphylaxis-03 for the second time.
- New scenario: a 23-year-old woman with known cashew allergy eats a cashew basil sauce. She holds her autoinjector upside down and fires it into her own thumb. She then worsens, with hives, a hoarse voice, wheeze and a BP of 86/52 mmHg, and has a pale, cool thumb.
- Keyed decisions: epinephrine 0.5 mg IM into the thigh now, because the thumb dose did not treat her (KF 3). Hold the device in a fist with the orange tip down (KF 4). Pistachio is the nut most likely to be a co-allergy with cashew (KF 4).
- Sources: WAO 2020 (PMC7607509). Mylan Specialty LP. EpiPen and EpiPen Jr Canadian prescribing information. Revised 2017 (pdf.hres.ca/dpd_pm/00039519.PDF). Elizur A, et al. NUT CRACKER study. Allergy. 2018 (doi 10.1111/all.13353).
- Similarity check, top 5: anaphylaxis-36 0.23/0.06 (old version in the digest), anaphylaxis-23 0.20/0.08, sob-15 0.17/0.12 (signed off), anaphylaxis-32 0.16/0.05, lacerations-19 0.15/0.07. I read every card. None is an adult with a misfired autoinjector or keys device grip or nut co-allergy. The story is now clear of the infant and first food cluster.

### anaphylaxis-44 (version 1 to 2, 3 questions, key features 4, 4, 4)

- Old scenario: a man with peanut oil anaphylaxis who resolved after one autoinjector dose and wanted to leave, keyed to biphasic return, replacing the device and medical ID. It copied anaphylaxis-08.
- New scenario: a 20-year-old woman with peanut allergy reacts within 5 minutes of kissing her boyfriend, who had eaten a peanut butter sandwich 20 minutes earlier. She has recovered after treatment, and the couple ask about prevention.
- Keyed decisions: a peanut-free meal and a wait of a few hours before kissing, rather than brushing, gum or rinsing (KF 4). Casual skin contact or smell causes at most local hives (KF 4). Her boyfriend should learn to give her autoinjector (KF 4). Observation time and the biphasic risk are not tested.
- Sources: Maloney JM, Chapman MD, Sicherer SH. J Allergy Clin Immunol. 2006 (doi 10.1016/j.jaci.2006.05.017). Simonte SJ, et al. J Allergy Clin Immunol. 2003 (doi 10.1067/mai.2003.1486). Golden DBK, et al. Anaphylaxis 2023 practice parameter update. Ann Allergy Asthma Immunol. 2024.
- Similarity check, top 5: anaphylaxis-42 0.24/0.16 (old version in the digest), anaphylaxis-35 0.21/0.21, airway-31 0.21/0.01, anaphylaxis-32 0.21/0.03, anaphylaxis-03 0.20/0.15 (signed off). I read every card. None involves exposure through saliva or casual contact.

## Fixes

None. Sweep 3 excludes Task 2.

## Checks

- `SAMP_BATCH=s20` samps and samp-quality tests: 488 passed.
- `SAMP_BATCH=s23` samps and samp-quality tests: 679 passed.
- `npx tsc --noEmit -p .`: no errors. An earlier run showed errors in s34 and s53 from other agents' work in progress. Those errors were gone when I reran it.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4503 passed.

## For the physician

- anaphylaxis-25 applies anaesthetic guidance (ANZAAG 2022, endorsed by ISPAR and NAP6) to a paralysed patient in the ED. Please confirm that you accept the rule to start compressions below a systolic pressure of 50 mmHg, and IV boluses of 50 to 100 mcg, in an ED intubation. No Canadian perioperative guideline exists.
- anaphylaxis-42 cites the 2017 Canadian EpiPen prescribing information, which is the version on the Health Canada site. The technique wording has not changed in the current device instructions, but please confirm.
- anaphylaxis-36 q4 teaches that shellfish allergy is not an iodine allergy. Its source is a 2010 emergency medicine review. A current contrast media reference could be added after you check it.
- anaphylaxis-44 q2 rests on a challenge study in children (Simonte 2003) that is applied here to an adult. The explanation says so.
- abuse-domestic-30 applies Ontario law (PHIPA lock-box), and the stem names Ontario.
