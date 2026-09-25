# Final check 1: SAMPs rebuilt or rekeyed during review

Reviewer: independent AI audit, Lens A and Lens B together, plus the overlap, hedged-key and mock-mode checks from the rebuild brief. This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: abdominal-pain-27 and -36 (s19), airway-25 and -28 (s21), arrhythmia-28 and -32 (s24), dvt-pe-38 (s33), gi-bleed-41 (s39), headache-25 (s40), ischemic-heart-disease-23 and -42 (s42). Only these SAMPs were edited.

## Verdicts

| SAMP | Verdict | What changed |
|---|---|---|
| abdominal-pain-27 | fixed | Citation author corrected to Della Santa V. q3 (capsaicin for pain) remapped from shock KF8 to analgesia-sedation KF2, the key feature it tests. analgesia-sedation added to alsoTopics. No overlap found: this is the only cannabinoid hyperemesis SAMP in the bank. Razban 2022 checked for haloperidol dose and trial results, capsaicin, opioids, the 92.3% hot shower figure and the timing of cannabis withdrawal. |
| abdominal-pain-36 | fixed | q2 option "No drug, since she has given birth" held its reason inside the option. Now "No anticonvulsant". q1 Tennessee thresholds now match Haram 2009 exactly (platelets below 100, LDH above 600). Checked against s47 pre-eclampsia-16, -23 and -36 and s15 pre-eclampsia-02, -03 and -07. The lab panel is close to pre-eclampsia-23, but the story (postpartum day 1.5 HELLP mistaken for ibuprofen gastritis) and the keyed decisions (diagnosis, magnesium after the birth, obstetric admission) are not repeated elsewhere. pre-eclampsia-03 gives postpartum magnesium among several write-in answers, for a headache at day 7. Different story and a different keyed decision. |
| airway-25 | re-rebuilt | Copied sob-25 (s51). The same febrile, toxic child sat up with stridor, suprasternal retractions, thick yellow sputum, no drooling and full immunization. The same keyed decision (intubate, over heliox and nebulized epinephrine) was in both. Its old q4 (capnography gives the earliest warning, over oximetry and chest X-ray) repeated airway-30 q4. New version: a 12-year-old transferred with the diagnosis already made. It has 3 questions: ENT surgeon ready before induction (CAFG 2021 part 2), what sugammadex can and cannot do with obstructing pathology (CAFG 2021 part 2), and the likely organism, Staphylococcus aureus (Tebruegge 2009, 55.8%). A draft tube-size question was dropped because airway-39 already keys downsizing a tube that will not pass the subglottis. Needs a second check. |
| airway-28 | re-rebuilt | Its story copied airway-45: pneumonia, 2.5 cm mouth opening, a neck that will not extend, right lower lobe consolidation and FiO2 1.0. Its q2 (maximum topical lidocaine, 9 mg/kg lean body weight) repeated airway-19 q4, and its answer used total weight as lean weight. Its q3 said an esophageal tube would stop phonation, which is false. New version: aspiration after choking in a man with post-radiation dysphagia and trismus. q1 is a new menu question on predictors of a difficult front of neck airway (CAFG 2021 part 2, Table 6). q2 keeps awake tracheal intubation, now justified by three predicted-difficult modes. q3 keeps the shallow tube with the cuff at the cords, with the esophageal reason corrected. The flexible scope was removed from the q3 update because it cued the q2 key. Needs a second check. |
| arrhythmia-28 | re-rebuilt | Copied arrhythmia-27. Both had a slow wide reperfusion rhythm after ST elevation resolved, keyed "monitor only" over lidocaine and amiodarone, with the same sentence on antiarrhythmics. The cocaine story repeated chest-pain-11 (a party, around 03:00, 1 hour after snorting). The spasm question repeated ischemic-heart-disease-06. AIVR is already covered by arrhythmia-11 and -27. New version: a 7-month-old with hypoxic bradycardia after apnea during a respiratory illness. q1 is the cause (hypoxia), q2 is the next step (start compressions, because bradycardia with poor perfusion persists after effective ventilation), and q3 is the IO epinephrine dose (0.01 mg/kg x 8 kg = 0.08 mg). Source: AHA and AAP 2025 PALS (Lasa and colleagues). No pediatric bradycardia algorithm SAMP exists in the bank. The neonatal SAMPs use NRP and key other decisions. Needs a second check. |
| arrhythmia-32 | fixed | Its story overlapped signed-off arrhythmia-05 (s03): a QT drug, diarrhea, low potassium and magnesium, and spells. Its q4 keyed the same teaching as arrhythmia-05 q2 and q3: magnesium, pacing or isoproterenol, and procainamide as harmful. The GI illness and electrolyte losses were removed (K 4.1, Mg 0.86), so domperidone at 80 mg a day is the single cause. q4 was deleted. q3 distractor "Continue once potassium is normal" became "Taper off over 2 weeks". q2 gained "Admit to a general ward bed", which fixes the batch key-position balance and gives an honest near-miss. Health Canada 2015 checked for the 30 mg daily maximum and the contraindications. |
| dvt-pe-38 | fixed | q2 asked for an imaging test but offered "High sensitivity D-dimer first". Its stated reason (a D-dimer cannot exclude PE when probability is likely) is false under Canadian PEGeD, where a Wells score of 6.0 is moderate probability and a D-dimer below 500 excludes PE. It was replaced with "MR pulmonary angiogram" (ESC 2019: often technically inadequate, not a first test). Wells 6.0, sPESI 0 and the ISTH 2021 obesity advice were rechecked. No other obese-patient DOAC SAMP. |
| gi-bleed-41 | re-rebuilt in part (q2 new) | It was built on the gi-bleed-22 template. The phrase "no change in his stools that he has noticed", the q2 update ("INR 1.1, platelets 240") and the q3 update ("after 500 mL of Ringer's lactate") all matched. The urea to creatinine ratio for an upper source is also taught in gi-bleed-22 and gi-bleed-26 and in s11. The q2 update gave the hemoglobin, which named the q1 key (CBC) in mock mode. q2 is now an anticoagulation decision: none, because he is actively bleeding, has a CHADS-65 of 0 and AF onset under 12 hours (CAEP 2021). The stem wording and the q3 update were rewritten, and q3 no longer states the hemoglobin. The unused Srygley source was removed. Needs a second check for q2. |
| headache-25 | fixed | ICHD-3 criterion misquoted: the duration is 1 second to 2 hours, not "a second to a few minutes". Corrected. ICHD-3 4.1 checked for the 40% symptomatic figure, Chiari I, age over 40, neuroimaging and indomethacin response. No other cough headache SAMP. |
| ischemic-heart-disease-23 | re-rebuilt in part (q2 and q3 new) | Old q2 keyed "No antithrombotic treatment" for a man with 2 months of chest discomfort that came on at rest as well as on exertion. That defended ASA and contradicted the key feature "do not exclude ACS on one negative test". The stem now gives a stable exertional pattern and no Q waves. q2 is now the next step (echocardiogram and cardiology referral, KF8). q3 is the cause of the ECG pattern (apical HCM over Wellens, old infarct, takotsubo and myopericarditis, KF2). The unused ESC source was removed. Needs a second check. |
| ischemic-heart-disease-42 | re-rebuilt in part (q3 new) | Old q3 (pharmacologic stress imaging because he cannot exercise, over treadmill, Holter and resting tests) copied ischemic-heart-disease-26 q2. A replacement on silent ischemia was rejected because it would copy ischemic-heart-disease-46 q1. q3 is now sublingual nitroglycerin as needed, including before the ramp, over a long-acting nitrate and three antithrombotics. Source: CCS 2014 stable ischemic heart disease guideline, checked for the nitroglycerin and long-acting nitrate wording. q1 and q2 pass. Needs a second check for q3. |

## Defects found

- Copies of other SAMPs: airway-25 (sob-25 and airway-30), airway-28 (airway-45 and airway-19), arrhythmia-28 (arrhythmia-27, chest-pain-11 and ischemic-heart-disease-06), arrhythmia-32 q4 (arrhythmia-05), gi-bleed-41 (gi-bleed-22 template, plus urea ratio teaching), ischemic-heart-disease-42 q3 (ischemic-heart-disease-26).
- False distractor reasons: airway-28 q3 (esophageal tube and phonation), dvt-pe-38 q2 (D-dimer under PEGeD).
- Wrong calculation premise: airway-28 old q2 used total body weight as lean body weight.
- Defensible distractor: ischemic-heart-disease-23 old q2 (ASA).
- Misquoted source: headache-25 (ICHD-3 duration). abdominal-pain-36 (Tennessee thresholds, minor). abdominal-pain-27 (author name).
- Format: abdominal-pain-36 q2 option held its own reason.
- Mock-mode cues: gi-bleed-41 (hemoglobin in the q2 update named the q1 key). airway-28 (a flexible scope in the q3 update implied the awake technique keyed in q2).
- Key feature mapping: abdominal-pain-27 q3.
- No hedged-key cue was found in any of the 11.

## Key changes

- arrhythmia-32 q2: the key is unchanged in content ("Admit with cardiac monitoring"). It moved from index 0 to 1 because a distractor was added.
- arrhythmia-32 q3: the key is unchanged ("Stop domperidone now"). It moved from index 3 to 2.
- All other key changes are in re-rebuilt questions, listed above.

## Sources verified

- Razban 2022, Int J Emerg Med: https://pmc.ncbi.nlm.nih.gov/articles/PMC9454163/
- Haram 2009, BMC Pregnancy Childbirth: https://pmc.ncbi.nlm.nih.gov/articles/PMC2654858/
- Law 2021, CAFG part 2: https://pubmed.ncbi.nlm.nih.gov/34105065/ (full text PMC8186352)
- Law 2021, CAFG part 1: full text PMC8212585
- Tebruegge 2009, Scand J Infect Dis: https://pubmed.ncbi.nlm.nih.gov/19401934/ (31 of 34 intubated, S. aureus 55.8%)
- Al-Mutairi 2004, Paediatr Child Health: https://pmc.ncbi.nlm.nih.gov/articles/PMC2719512/ (read, no longer cited after the tube-size question was dropped)
- Lasa 2025, AHA and AAP PALS Part 8: https://doi.org/10.1161/CIR.0000000000001368 (checked through a published summary. The journal full text was blocked.)
- Health Canada 2015 domperidone update: https://recalls-rappels.canada.ca/en/alert-recall/domperidone-maleate-association-serious-abnormal-heart-rhythms-and-sudden-death-1
- Stiell 2021 CAEP AF checklist: https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/
- ICHD-3 4.1: https://ichd-3.org/other-primary-headache-disorders/4-1-primary-cough-headache/
- Hughes 2020, J Am Heart Assoc: https://pmc.ncbi.nlm.nih.gov/articles/PMC7335568/
- Mancini 2014, CCS stable ischemic heart disease: https://pubmed.ncbi.nlm.nih.gov/25064578/
- Pop-Busui 2010, Diabetes Care (PMC2809298). Read to test a silent-ischemia question, which was not used because of the overlap with ischemic-heart-disease-46.

## For the physician

- arrhythmia-28 now depends on the 2025 PALS guideline. I could not open the full text, only a summary that quotes it. Please confirm the dose (0.01 mg/kg IV or IO, maximum 1 mg) and the rule to start CPR at a heart rate below 60/minute with poor perfusion despite effective ventilation.
- ischemic-heart-disease-42 q3 keys sublingual nitroglycerin with ASA and a beta blocker left out of the options on purpose, because both are defensible first steps. Please confirm this reads as a fair single best answer.
- gi-bleed-41 q3 keys red cell transfusion without stating a hemoglobin value. The value was removed so it would not reveal the q1 key. The case gives melena, pallor and a BP that stays low after crystalloid. Please confirm this is enough to justify transfusion.
- airway-25 now has 3 questions and airway-28 has 3. Both are allowed by the spec.

## Checks

- SAMP_BATCH=s19, s21, s24, s33, s39, s40 and s42: samps.test.ts and samp-quality.test.ts pass.
- npx tsc --noEmit -p . passes.
