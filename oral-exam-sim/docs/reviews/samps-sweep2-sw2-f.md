# Sweep 2 rebuilds, batches s21, s24, s27 and s38 (label sw2-f)

Writer SW2-F. Files: `src/samps/s21/airway.ts`, `src/samps/s24/arrhythmia.ts`, `src/samps/s27/cva.ts` and `src/samps/s38/first-trimester-bleeding.ts`. Only the five listed SAMPs were rebuilt. The only other edit is two new source entries in the s38 source table (`S.crochet`, `S.pacagnella`). No other SAMP was touched, including the ones fixed in `docs/reviews/samps-last-check.md`. Nothing was committed.

## Search before writing

I dumped the whole bank (all batches, s01 to s53) and read every SAMP for each topic and its neighbours before choosing a story. The searches were by scenario and keyed decision, not by wording:

- airway-31: every anaphylaxis SAMP (s03, s23), every SAMP with an airway key feature, and every tongue, lip or angioedema story in any topic (s02, s03, s04, s16, s17, s21, s27).
- arrhythmia-27: every arrhythmia KF7 and KF8 item, every thrombolysis, spontaneous reperfusion, AIVR and post-ROSC story, every vasospasm story, and every torsades and polymorphic VT item.
- cva-45: every TIA and every cva KF4 item, plus every endocarditis and DOAC story.
- first-trimester-bleeding-34 and 25: every first-trimester-bleeding SAMP (s10, s38) and every ectopic, miscarriage or pregnancy-of-unknown-location story in other topics.

Ideas I dropped because the bank already holds them: a coronary vasospasm story (chest-pain-45 has fluorouracil spasm and ischemic-heart-disease-31 has early-morning spasm), a TIA from endocarditis (cva-34), a hematuria mimic of first-trimester bleeding (the same "a non-uterine source does not settle the location" decision as first-trimester-bleeding-12), and a routine follow-up after misoprostol (first-trimester-bleeding-33 keys review in 1 to 2 weeks). I re-ran the searches just before finalising.

## Rebuilt SAMPs

| SAMP | Old scenario (copied) | New scenario | Keyed decisions (KF) | Sources |
|---|---|---|---|---|
| airway-31 (v3) | A wasp stung a 27-year-old on the tongue. Tongue swelling and drooling progressed to stridor despite epinephrine. Keys were IM epinephrine, intubation with a double setup, and tongue and mouth opening as predictors (copied anaphylaxis-05) | Rural hospital 90 minutes by air from a tertiary centre. A 34-year-old man with peanut allergy drank a protein shake 6 days after mandible repair, and his teeth are wired together. He is hypotensive and stridorous after one IM dose | q1 epinephrine infusion after two IM doses and 2 L fail (anaphylaxis KF3). q2 intubate here before the flight when the airway worsens while the BP recovers (airway KF2). q3 cut the fixation wires before any airway plan (airway KF3) | WAO 2020 (doi 10.1016/j.waojou.2020.100472, full text read). CAFG 2021 part 2 (doi 10.1007/s12630-021-02008-z, full text read). Kellman and Losquadro, Craniomaxillofac Trauma Reconstr 2008 (doi 10.1055/s-0028-1098962) |
| arrhythmia-27 (v3) | STEMI at a PCI centre. Pain eased with ST resolution, then a brief AIVR near 80. Keys were recognising reperfusion and observing without antiarrhythmics (copied arrhythmia-11) | A 74-year-old woman with permanent AF stopped apixaban for a colonoscopy and started clarithromycin for bronchitis. She takes furosemide. She has an inferior STEMI, then reperfusion ectopy with a potassium of 3.1, a slow ventricular rate, and later torsades | q1 potassium chloride for post-reperfusion ectopy, not an antiarrhythmic (KF7). q2 no treatment for a tolerated slow rate after inferior reperfusion (KF7). q3 magnesium sulfate for self-ending torsades in a stable patient (KF4). q4 clarithromycin as the drug that set up the torsades (KF5) | Frampton, Yale J Biol Med 2023 (PMC10052595, full text read). Drew, Circulation 2010, AHA/ACCF torsades statement (doi 10.1161/CIRCULATIONAHA.109.192704, checked on PMC3056123) |
| cva-45 (v3) | A diabetic man with resolved right hand weakness and word-finding trouble, 80% intracranial stenosis, keyed DAPT for 3 months and intensive lipid lowering (copied cva-10) | A 76-year-old man with AF has a TIA while taking apixaban 2.5 mg twice daily, a dose a walk-in clinic lowered after a nosebleed. He meets none of the dose-reduction criteria. He also started St. John's wort 2 months ago | q1 CT angiography before he leaves, because AF does not end the search for a second cause (KF4). q2 increase apixaban to 5 mg twice daily (KF4). q3 stop St. John's wort, a strong inducer (KF4). q4 add no antiplatelet drug to his anticoagulant (KF4) | CSBPR acute stroke management 2022 (TIA triage section read online). CSBPR secondary prevention 2020 (AF section read online: 7.2.6 and 7.3.4). Thrombosis Canada clinical guide, apixaban, version 2 June 2025 (PDF read) |
| first-trimester-bleeding-34 (v3) | Postcoital bleeding at 8 weeks from a friable cervical lesion with no confirmed IUP, keyed that a cervical source does not settle the location (copied first-trimester-bleeding-12) | Telephone consult from a nursing station in a fly-in community. A 24-year-old at 8 weeks has spotting, worsening left pain and cervical motion tenderness. She has had no ultrasound. hCG results would take 2 days | q1 cervical motion tenderness as the examination finding that most raises the likelihood of ectopic pregnancy (KF3). q2 transfer by air today for ultrasound, because no single hCG settles it (KF4). q3 shock index of 1.1 as the best vital-sign guide to blood loss (KF1) | Crochet, JAMA 2013 rational clinical examination (doi 10.1001/jama.2013.3914, abstract read). Pacagnella, PLoS One 2013 (doi 10.1371/journal.pone.0057594, abstract read) |
| first-trimester-bleeding-25 (v3) | An early pregnancy treated as a miscarriage although no IUP was seen, keyed that an hCG that fails to fall means possible ectopic (copied first-trimester-bleeding-10) | A 34-year-old gestational carrier with spotting 8 weeks after a single embryo transfer, not yet scanned. The scan shows an intrauterine embryo of 12 mm with no heartbeat and an hCG of 46 000. The intended parents are in the waiting room | q1 the scan is to confirm where the pregnancy is (KF2). q2 hCG cannot show whether the embryo is alive (KF4). q3 arrange her own follow-up and support, and share results only with her consent (KF6) | NICE NG126, updated June 2026 (sections 1.1, 1.2, 1.5, 1.6, 1.8 and 1.11 read online) |

Question counts and key features are unchanged: airway-31 keeps anaphylaxis 3, airway 2 and airway 3. arrhythmia-27 keeps 7, 7, 4 and 5. cva-45 keeps 4, 4, 4 and 4. first-trimester-bleeding-34 keeps 3, 4 and 1. first-trimester-bleeding-25 keeps 2, 4 and 6. All questions are single best answer except cva-45 q4, a menu keyed on None. airway-31 q3 changed from a menu to a single question. Each version went up by 1, `reviewed` stays false, and every title is neutral.

## Numbers checked

- airway-31: two IM doses of 0.5 mg at 80 kg (0.01 mg/kg capped at 0.5 mg).
- arrhythmia-27: heparin 5 000 units / 68 kg = 74 units/kg. Procainamide 15 mg/kg x 68 kg = 1 020 mg.
- cva-45: apixaban reduction needs 2 of 3 criteria (age 80 or more, weight 60 kg or less, creatinine 133 umol/L or more). He is 76, 82 kg and 104 umol/L, so he meets none.
- first-trimester-bleeding-34: shock index 116 / 104 = 1.12, written as 1.1. Likelihood ratios 4.9 (cervical motion tenderness) and 1.9 (adnexal tenderness). AUC ranges 0.77 to 0.84 (shock index), 0.56 to 0.74 (heart rate), 0.56 to 0.79 (systolic BP).

## Checks

- `SAMP_BATCH=s21`: 667 passed. `s24`: 675 passed. `s27`: 715 passed. `s38`: 456 passed. (`npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`)
- `npx tsc --noEmit -p .`: clean.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4503 passed.
- Key positions stay within the 25% gate in all four batches.

## For the physician

- airway-31 q2 keys intubation before an air transfer. CAFG part 2 allows deferral only when the patient can be temporized safely. It does not address air transport directly. Please confirm the key for a rural physician without anesthesia on site.
- airway-31 q3: the Kellman source is a 2008 review. It says to cut the wires when significant dyspnea or severe vomiting develops. The claim that the arch bars can stay rests on how the fixation is built, not on a quoted sentence.
- arrhythmia-27 still opens with reperfusion after an inferior STEMI, as KF7 requires. The keyed decisions are new: correcting potassium instead of giving an antiarrhythmic, and leaving a tolerated slow rate alone. It does not use AIVR or thrombolysis. arrhythmia-11 q4 keys atropine for a compromised slow rate after thrombolysis. q2 here keys the opposite case, a slow rate with no compromise.
- arrhythmia-27 q4: the Drew statement dates from 2010, but no newer AHA statement on torsades in hospital has replaced it. Clarithromycin is on its drug list. The claim that ASA, heparin, atorvastatin and pantoprazole do not prolong the QT is general pharmacology and is not quoted from Drew.
- cva-45 q1 keys CT angiography, which cva-43, 44 and 47 also key. The reason here is new: a TIA despite anticoagulation needs a search for a second cause. CSBPR 7.2.6 says so, but q1 cites the acute management source, so the explanation gives this as reasoning.
- cva-45: CSBPR says that after a TIA on anticoagulation, either continuing the agent or switching agents is reasonable. For that reason no "switch to another anticoagulant" option was written as a distractor.
- first-trimester-bleeding-34 q3: shock-16 (s50, postpartum hemorrhage) also keys a shock index, as a calculation under the shock topic. Here the shock index is keyed as the best vital-sign guide to blood loss, under first-trimester-bleeding KF1. The Pacagnella review draws mostly on non-obstetric studies, and the explanation does not claim a pregnancy-specific cut-off.
- first-trimester-bleeding-34 q2 is mapped to KF4 through the limits of hCG and urine testing. The keyed action is transfer for ultrasound, so it also touches KF2.
- first-trimester-bleeding-25 cites only NICE NG126, a UK guideline. SOGC Guideline No. 460 covers the same ground, but I could read only its abstract, so it is not cited. NICE 1.6.4 asks for a second opinion or a repeat scan when the CRL is 7.0 mm or more. The stem supplies the second opinion.
- first-trimester-bleeding-25 q1 ("main reason for the scan is the location") leaves viability out of the options on purpose, because NICE names both location and heartbeat as reasons for the scan.
- The rule that a later item never implies an earlier key was followed. The one soft spot: first-trimester-bleeding-25 q2 reports an intrauterine embryo, which answers where the pregnancy is, but the update does not name the purpose that q1 keys.
