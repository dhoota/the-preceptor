# Signed duplicate rebuild, group g02

Files: `src/samps/s05/chest-pain.ts` and `src/samps/s05/cva.ts`. Eleven SAMPs rebuilt. Each keeps its id, topic, question count, and each question's kind and key feature. Each is now version 2 with `reviewed: false`. All eleven are held back in `src/samps/held-back/g02.json`. No other SAMP was changed. Source constants used only by the old stories were removed from `chest-pain.ts`. New constants with links were added.

Checks: `SAMP_BATCH=s05 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (474 tests). `npx tsc --noEmit -p .` is clean. Single-question key positions for s05 are now 7, 4, 6, 4 and 5 across the five positions, out of 26. The highest share is 27 percent.

Simcheck scores are given as full text / keys. The decision search covered `scratchpad/allkeys.tsv` and a live grep of `src/samps`.

## Rows

### chest-pain-02 (cluster 2)
- Old story: A diabetic smoker with an inferior STEMI and RV infarct at a hospital without PCI. Tenecteplase, then failed lysis criteria.
- New story: A 63-year-old man with an anterior STEMI at a PCI centre. His wristband shows an ASA allergy: hives and lip swelling in 2019, with no anaphylaxis.
- Keyed decisions: q1 withhold the order set ASA and still get the ECG, monitor and IV within 10 minutes. q2 anterior STEMI from a proximal LAD occlusion. q3 ticagrelor 180 mg and UFH 70 units/kg before the lab. q4 primary PCI now, then ASA desensitization after PCI with allergy input. Delaying PCI for desensitization is scored as dangerous.
- Sources: ESC ACS 2023 (doi 10.1093/eurheartj/ehad191, local full text checked for ECG timing, P2Y12 and UFH doses). Grimaldi and colleagues, Eur Heart J 2024 (doi 10.1093/eurheartj/ehae128, ACC summary opened. It advises PCI first, then desensitization, and no desensitization after severe anaphylaxis).
- Simcheck top 5: ischemic-heart-disease-11 0.22/0.25, ischemic-heart-disease-30 0.24/0.08, ischemic-heart-disease-16 0.22/0.05, chest-pain-36 0.21/0.16, chest-pain-03 (old text) 0.21/0.19.
- Decision search: "asa allerg, aspirin allerg, aspirin hypersens, desensiti, withhold asa". No keyed hits. The only src hit is anaphylaxis venom desensitization. "proximal lad" is keyed as a diagnosis in chest-pain-16 and ischemic-heart-disease-04 and 14. Ticagrelor with UFH is also keyed in ischemic-heart-disease-11 and chest-pain-36. It is the standard primary PCI load.

### chest-pain-03 (cluster 36)
- Old story: Posterior STEMI with posterior leads.
- New story: A 57-year-old diabetic man with 2 hours of pressure that nitrates do not touch. His ECG is nondiagnostic, including V7 to V9. POCUS shows new inferolateral hypokinesis and the troponin is just above the 99th percentile.
- Keyed decisions: q1 bedside POCUS or serial ECGs. q2 acute MI from an occluded artery. q3 immediate angiography within 2 hours for refractory pain. q4 UFH, IV opioid and titrated nitroglycerin, with fibrinolysis scored as dangerous. q5 a quarter of NSTEMIs have an occluded culprit, and the ECG misses the inferolateral wall.
- Sources: ESC ACS 2023 (very high risk criteria and pretreatment text checked locally). Khan and colleagues, Eur Heart J 2017 (meta-analysis abstract opened: 40 777 patients, 25.5 percent occluded, 40 percent RCA and 33 percent circumflex).
- Simcheck top 5: chest-pain-16 0.18/0.05, ischemic-heart-disease-13 0.17/0.10, ischemic-heart-disease-40 0.17/0.13, ischemic-heart-disease-06 0.17/0.08, chest-pain-37 0.17/0.07.
- Decision search: "immediate invasive, refractory pain, occluded culprit, total occlusion". The closest hit is ischemic-heart-disease-14 q3, "Immediate invasive angiography, within 2 hours", reached through an aVR and diffuse ST depression pattern. See the physician section. "wall motion" is keyed in ischemic-heart-disease-09 and 40 as a bedside echo item.

### chest-pain-06 (cluster 15)
- Old story: A man with COPD and a tension pneumothorax.
- New story: An 83-year-old woman the day after a dual-chamber pacemaker, with pleuritic pain, hypotension, a raised JVP and pulsus paradoxus. The cause is lead perforation with tamponade.
- Keyed decisions: q1 tamponade from lead perforation. q2 POCUS now over a chest film, CT or a device check. q3 ultrasound-guided pericardiocentesis and a cardiology or surgery call, with diuretics and vasodilators scored as dangerous. q4 keep the pigtail in, repeat POCUS, interrogate the device, EP review and admission.
- Sources: Cano and colleagues, Europace 2017 (opened: 2200 patients, age over 80 and female sex as predictors, all tamponades drained and none needed surgery). ESC pericardial 2015 (full PDF read: tamponade section, echo guidance, no vasodilators or diuretics, doi 10.1093/eurheartj/ehv318).
- Simcheck top 5: shock-15 0.18/0.25, arrhythmia-37 0.16/0.12, ischemic-heart-disease-18 0.14/0.03, multiple-trauma-02 0.14/0.13, pulmonary-edema-34 0.14/0.02.
- Decision search: "pacemaker, lead perforation, pacing lead". arrhythmia-37 keys lead dislodgement with failure to capture, a different problem. "pericardiocentesis" is keyed in shock-15 (malignant effusion) and the trauma tamponade SAMPs.

### chest-pain-07 (cluster 37)
- Old story: A 61-year-old man with burning pain relieved by a GI cocktail, then a STEMI.
- New story: A 45-year-old woman with diabetes who smokes. She has pain on swallowing after bedtime doxycycline taken with a sip of water.
- Keyed decisions: q1 the history that points to pill esophagitis. q2 odynophagia does not exclude ACS in a woman with risk factors. q3 ECG within 10 minutes, a troponin and a chest X-ray while the history is still being taken.
- Sources: Kim and colleagues, World J Gastroenterol 2014 (PMC4138480 opened: 78 patients, chest pain 71.8 percent, odynophagia 38.5 percent, antibiotics 35.9 percent). AHA/ACC chest pain 2021 (ACC ten points opened). ESC ACS 2023.
- Simcheck top 5: ischemic-heart-disease-05 0.14/0.14, chest-pain-09 (old) 0.14/0.13, chest-pain-08 (old) 0.06/0.13, chest-pain-27 0.13/0.11, ischemic-heart-disease-10 0.12/0.12.
- Decision search: "pill esophag, odynophag, drug-induced esophag, doxycycline". The only keyed hit was the old chest-pain-07 history list. Other doxycycline keys are antibiotic choices.

### chest-pain-08 (cluster 38)
- Old story: An older diabetic woman with an atypical NSTEMI.
- New story: A 66-year-old man with complete C6 tetraplegia. He has malaise, headache, sweating above the lesion and a BP surge that persists after the bladder and bowel were checked. He has no chest pain and has new ST depression.
- Keyed decisions: q1 spinal cord injury as an ACS risk factor with his other factors. q2 the only clues may be a dysreflexia picture, sweating, malaise, dyspnea or nausea. q3 GRACE rather than HEART, CRUSADE, CHA2DS2-VASc or sPESI to estimate death risk in a confirmed NSTEMI.
- Sources: Cragg and colleagues, Neurology 2013 (Canadian survey, adjusted OR 2.72, abstract opened). Ho and Krassioukov, Spinal Cord 2010 (abstract opened). ESC ACS 2023 (GRACE text checked).
- Simcheck top 5: ems-21 0.17/0.09, ischemic-heart-disease-02 0.16/0.09, ischemic-heart-disease-04 0.15/0.13, ischemic-heart-disease-46 0.14/0.01, ischemic-heart-disease-07 0.13/0.06.
- Decision search: "spinal cord injur, tetrapleg, dysreflex". ems-21 is dysreflexia from a blocked catheter handled by base hospital, with no ACS. "grace" has no keyed hit.

### chest-pain-09 (cluster 39)
- Old story: A man with exertional pain shovelling snow and normal serial troponins.
- New story: A 44-year-old woman with menorrhagia, pica and exertional pressure that is getting worse. Her hemoglobin is 62 g/L. The first ECG and troponin are normal, then the troponin rises to 58 ng/L.
- Keyed decisions: q1 history for blood loss, presyncope, pattern and heart failure. q2 why discharge on iron after one normal troponin is unsafe. q3 relief after transfusion does not exclude underlying coronary disease. q4 admit, treat the anemia, then cardiac imaging (type 2 MI).
- Sources: AHA/ACC chest pain 2021. ESC ACS 2023 (type 2 MI section read locally, including "echocardiography and/or coronary angiography once stabilized").
- Simcheck top 5: ischemic-heart-disease-04 0.20/0.19, chest-pain-40 0.20/0.08, chest-pain-17 0.19/0.11, chest-pain-14 (old) 0.19/0.17, ischemic-heart-disease-15 0.18/0.17.
- Decision search: "type 2 mi, menorrhag, heavy menstrual, anemia with ischemia, transfusion with MI". There are no type 2 MI keys. The nearest are demand ischemia from rapid AF (ischemic-heart-disease-22, arrhythmia-45).

### chest-pain-11 (cluster 17)
- Old story: A young man with chest pain after cocaine.
- New story: A 44-year-old woman with rheumatoid arthritis on prednisone and pre-eclampsia in two pregnancies. Triage labelled her pressure "likely anxiety".
- Keyed decisions: q1 inflammatory disease, hypertensive disorder of pregnancy and hypertension raise pretest probability. q2 ECG within 10 minutes. q3 ASA, nitroglycerin and a parenteral anticoagulant for ST depression, with fibrinolysis scored as dangerous. q4 the further risk factors to ask about.
- Sources: CCS dyslipidemia 2021 (Table 1 read in the full PDF, doi 10.1016/j.cjca.2021.03.016). ESC ACS 2023.
- Simcheck top 5: chest-pain-14 (old text, now replaced) 0.38/0.39, chest-pain-35 0.20/0.08, chest-pain-37 0.17/0.03, pre-eclampsia-20 0.15/0.16, chest-pain-02 (old) 0.16/0.09.
- Decision search: "rheumatoid, pre-eclampsia with cardiac risk, hypertensive disorder of pregnancy". The only chest pain hit was the old chest-pain-14 risk factor list, which this batch replaces. chest-pain-35 uses the same shape with HIV as the unrecognized risk factor.

### chest-pain-13 (cluster 40)
- Old story: A young man with viral pericarditis and classic diffuse ST elevation.
- New story: A 52-year-old man on hemodialysis for 4 years who missed three sessions. He has pleuritic positional pain, a rub, low QRS voltage, no ST elevation and a 1.6 cm effusion.
- Keyed decisions: q1 dialysis and symptom history. q2 tamponade, rising potassium, overload and a bloody effusion as threats. q3 hemodialysis today without systemic heparin, plus admission with repeat echo (menu). Colchicine, NSAIDs, steroids, drainage now and a saline bolus are distractors. q4 causes of hypotension during dialysis, with tamponade first.
- Sources: ESC pericardial 2015 (the renal failure recommendations and tamponade section were read in the full PDF).
- Simcheck top 5: loc-20 0.23/0.14, ischemic-heart-disease-45 0.21/0.10, pulmonary-edema-04 0.20/0.17, shock-42 0.17/0.03, suicide-risk-18 0.16/0.07.
- Decision search: "uremic pericard, heparin-free, intensified dialysis, intradialytic". loc-20 keys urgent hemodialysis and uremic pericarditis, but for encephalopathy before dialysis started. pulmonary-edema-04 lists a uremic effusion in a differential. To stay clear of cluster 12 (missed dialysis with hyperkalemia), the potassium here is 5.4 mmol/L and no hyperkalemia treatment is keyed.

### chest-pain-14 (cluster 41)
- Old story: A Wellens pattern in a pain-free smoker.
- New story: A 38-year-old man with a bicuspid valve who lost follow-up. He has sudden severe pain to the back during a heavy bench press. His ECG and chest film are normal, and POCUS shows a 4.6 cm root without a flap.
- Keyed decisions: q1 dissection and aneurysm expansion linked to his valve. q2 CT angiography of the aorta, because ADD-RS is 2. q3 why a flapless transthoracic scan with a dilated root should not reassure. q4 other dissection risk factors.
- Sources: ACC/AHA aortic disease 2022 (PMC9876736 full text read: ADD-RS table, TEE over TTE, D-dimer only at low probability, BAV diameters of 4.5 to 4.9 cm, weightlifting).
- Simcheck top 5: chest-pain-01 0.27/0.23, cva-09 0.20/0.19, pulmonary-edema-15 0.15/0.11, ischemic-heart-disease-06 0.15/0.07, ems-30 0.15/0.03.
- Decision search: "bicuspid, add-rs, intimal flap" returned no keyed hits. "ct angiography of the chest or aorta" is keyed in chest-pain-01 q2 (see the physician section).

### chest-pain-15 (cluster 2)
- Old story: An anterior STEMI in a snowstorm, 3 hours from PCI, with tenecteplase dosing for age.
- New story: A 72-year-old woman with stage 4 CKD (eGFR 19) and a new fistula, with an inferior STEMI at a PCI centre. The nephrologist asks the team to wait.
- Keyed decisions: q1 her complication risks, and the fistula arm to protect. q2 primary PCI now with limited contrast. q3 (menu) low- or iso-osmolar contrast at the lowest volume, IV isotonic saline around angiography, and UFH. Fondaparinux, SC enoxaparin, half-dose ticagrelor and delay are distractors. q4 the case for proceeding now.
- Sources: ESC ACS 2023 (the CKD section and Recommendation Table 15 were read locally, with the enoxaparin and fondaparinux renal limits in Table 6). CCS STEMI 2019 (local full text: 90 minutes at a PCI centre).
- Simcheck top 5: multiple-trauma-36 0.17/0.11, ischemic-heart-disease-11 0.14/0.16, chest-pain-08 (old) 0.16/0.10, ischemic-heart-disease-30 0.16/0.06, dvt-pe-07 0.15/0.08.
- Decision search: "iso-osmolar, contrast volume, contrast nephropathy, kidney with PCI" returned no keyed hits. The "surgery 10 days ago" direction was dropped because ischemic-heart-disease-11 already keys transfer for PCI when lysis is contraindicated. A beta blocker draft was also dropped because ischemic-heart-disease-12 already keys COMMIT harm in a 74-year-old with an anterior STEMI (simcheck 0.39).

### cva-01 (cluster 6)
- Old story: Sulfonylurea hypoglycemia presenting as a stroke, with octreotide.
- New story: A 78-year-old woman with a left hemiparesis after 5 days of polyuria on new prednisone. She has HHS with glucose 46.8 mmol/L and osmolality 348 mmol/kg. CT and CTA are clear and she was last known well 15 hours before.
- Keyed decisions: q1 correct the HHS, then reassess the deficit. q2 the findings that point to a mimic. q3 why thrombolysis was not offered: beyond 4.5 hours, and a glucose above 22.2 mmol/L as a CSBPR relative exclusion. "No LVO" is listed as unacceptable.
- Sources: Diabetes Canada 2018 chapter 15 (opened: HHS criteria, the stroke-like state, osmolality fall of no more than 3 mmol/kg/hour). CSBPR 7th edition 2022 with the 2025 EVT update (the local module text shows the relative exclusion list with 22.2 mmol/L and focal signs from severe hyperglycemia).
- Simcheck top 5: loc-12 0.18/0.09, cva-35 0.16/0.08, cva-21 0.16/0.05, cva-30 0.15/0.02, loc-36 0.15/0.04.
- Decision search: "hyperosmolar, hhs, 22.2, mimic" returned no keyed HHS mimic. loc-12 is HHS with confusion, keyed to osmolality and fluids. An earlier draft keyed 0.9% saline first and was changed so it does not repeat loc-12.

## For the physician

All eleven need a fresh sign-off. Items to look at first:

1. chest-pain-03 q3 keys immediate angiography within 2 hours. ischemic-heart-disease-14 keys the same timing for a different trigger (aVR pattern with widespread depression). The teaching here is refractory pain with a wall motion abnormality and a nondiagnostic ECG. Please decide whether the shared timing key is acceptable.
2. chest-pain-14 q2 keys CT angiography of the aorta for an ADD-RS of 2, as chest-pain-01 q2 does. Arjan's direction asked for CTA, and no other test fits the case. The rest of chest-pain-14 keys the bicuspid aortopathy, the limits of TTE and the risk factor history, not chest-pain-01's list of findings that cannot exclude dissection.
3. chest-pain-06 and chest-pain-13 cite the 2015 ESC pericardial guideline. The 2025 ESC myocarditis and pericarditis guideline exists, but I could not open its text to check the tamponade and renal failure advice. The 2015 recommendations used (echo-guided drainage, no vasodilators or diuretics, intensified dialysis, colchicine contraindicated in severe renal impairment, avoid anticoagulation because effusions are often bloody) may need checking against 2025.
4. chest-pain-02 keys desensitization after PCI from a 2024 Eur Heart J practical guide. No Canadian guideline covers this. The prior reaction was written as urticaria and angioedema, because the guide advises against desensitization after severe anaphylaxis.
5. chest-pain-15 q3 keys IV hydration around angiography. ESC gives this as class IIa ("should be considered") for eGFR below 30 mL/min/1.73 m2. The q1 key accepts female sex as a bleeding risk, which the explanation does not argue.
6. cva-01 keys a CSBPR relative exclusion. The stem sets last known well at 15 hours so that the window alone also rules out standard thrombolysis. The MRI at 6 hours shows a small infarct, so the story does not claim the deficit was purely metabolic.
7. chest-pain-08 teaching rests on a Canadian survey and a single case report for silent ischemia during dysreflexia. The stem was written to differ from that case report.
8. Directions not followed: chest-pain-15 (explained above) and the "imaging after correction" part of cva-01. CSBPR asks for immediate CT and CTA in a patient still inside the thrombectomy window, so imaging happens on arrival and correction comes before reassessment.
