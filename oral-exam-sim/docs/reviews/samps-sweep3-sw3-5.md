# Sweep 3 rebuilds, batches s24, s27 and s28 (label sw3-5)

Batch files: `src/samps/s24/arrhythmia.ts`, `src/samps/s27/cva.ts` and `src/samps/s28/chest-pain.ts`. Five SAMPs rebuilt in place. No other SAMP in these files was changed. Nothing was committed.

Each rebuild keeps its id, its topic, its question count and each question's key feature. All questions are single or menu. Titles are new and neutral. `reviewed` stays false and the version is bumped by 1.

Every source below was opened and read for the claims it supports. Scratch files are in `scratchpad/sw3-5`.

## Rebuilt SAMPs

### arrhythmia-29 (version 1 to 2, 4 questions, key features 5, 8, 8, 8)

- Old scenario: a 47-year-old woman comatose after a hypoxic arrest from asthma, keyed to temperature control now, 36 hours and fever prevention. It copied arrhythmia-12.
- New scenario: a 12-year-old boy who was inhaling butane from a lighter refill canister behind an arena. He ran when police arrived and collapsed in VF. He had ROSC after two AED shocks and is comatose and intubated. His ECG shows a normal PR, no delta wave and a QTc of 430 ms.
- Keyed decisions: myocardial sensitization by butane as the cause (KF 5). A continuous esophageal probe for core temperature (KF 8). Target 36 to 37.5°C for up to 5 days under pediatric guidance (KF 8). Neurologic prognosis no earlier than 72 hours after the arrest (KF 8). None of these keys is the adult 36-hour key from arrhythmia-12.
- Sources: Berling I, Isbister GK. Addiction. 2025 (doi 10.1111/add.70082, PMC12319642). Lee JE and colleagues. Anesth Pain Med (Seoul). 2026, a review of the 2025 AHA pediatric guideline and its post-arrest checklist (doi 10.17085/apm.26581, PMC13175904). The AHA full text was blocked (403), so the review was the document I read.
- Similarity check, top 5 (full/keys): arrhythmia-47 0.22/0.07, arrhythmia-12 0.21/0.06 (signed off), arrhythmia-30 0.18/0.00, arrhythmia-31 0.15/0.09, ems-04 0.15/0.15 (signed off). I read every card. None is an inhalant arrest or a pediatric post-arrest case. arrhythmia-47 is a 13-year-old with commotio cordis who is awake. arrhythmia-12 is an adult keyed to 36 hours. Its menu list includes "continuous core temperature monitoring", but the story is different.

### cva-27 (version 1 to 2, 4 questions, key features 2, 3, 3, 3)

- Old scenario: an 84-year-old man found on the floor with a right M1 syndrome, keyed to tenecteplase with thrombectomy. It copied cva-06.
- New scenario: a 46-year-old court transcriptionist who suddenly cannot read her screen. She can still type and write to dictation. She has a right homonymous hemianopia, and her speech, naming and strength are normal. This is alexia without agraphia. Her NIHSS is 3, and CT angiography shows a medium vessel occlusion.
- Keyed decisions: left posterior cerebral artery stroke (KF 2). Capillary glucose as the only result needed before reperfusion (KF 3). The stroke is disabling despite NIHSS 3 because she cannot work (KF 3). Tenecteplase now, with no routine thrombectomy for a medium vessel occlusion under the 2025 Canadian EVT update (KF 3).
- Sources: Cereda C, Carrera E. Front Neurol Neurosci. 2012 (PubMed 22377879). Heart and Stroke Foundation. CSBPR Acute Stroke Management, 7th edition 2022 with EVT interim update 2025, sections 4.2 and 5.2, Box 5B and section 5.4 on MeVO (local copy of the December 2025 PDF).
- Similarity check, top 5: cva-05 0.19/0.10 (signed off), cva-32 0.18/0.05, headache-33 0.17/0.12, cva-24 0.17/0.07, cva-29 0.14/0.01. I read every card. cva-05 is a Wernicke aphasia labelled delirium, keyed left MCA, and left MCA is a distractor here. cva-24 is a right PCA stroke after a wake-up onset, keyed to no reperfusion. cva-32 is a sensory minor stroke keyed non-disabling. It has the opposite decision, and I changed the demographics so it does not mirror that case. No SAMP keys alexia, glucose-only testing before lysis, or MeVO without routine EVT.

### cva-42 (version 1 to 2, 3 questions, key features 4, 4, 4)

- Old scenario: a 71-year-old woman with a resolved word-finding TIA and atrial fibrillation, keyed to ABCD2 5 and apixaban now. It copied cva-11.
- New scenario: a 44-year-old man with 15 minutes of word-finding trouble that began as he strained to push his stalled car out of a snowbank. The day before, he finished a 14-hour drive from Thunder Bay. His right calf is swollen and tender. His ECG shows sinus rhythm, and CT and CT angiography are normal. This is a suspected paradoxical embolism.
- Keyed decisions: ABCD2 of 2 (KF 4). Menu of clues to a PFO-related event: the Valsalva-type strain, the swollen calf and the long drive (KF 4). Echocardiography with a saline bubble study as the cardiac workup (KF 4).
- Sources: Johnston SC and colleagues. Lancet. 2007 (ABCD2). Heart and Stroke Foundation. CSBPR Secondary Prevention of Stroke, 7th edition update 2020, PFO section with its list of clinical clues. CSBPR Acute Stroke Management 2022, section 2.4B on bubble echocardiography for patients 60 or younger.
- Similarity check, top 5: cva-43 0.13/0.01, cva-10 0.13/0.02 (signed off), cva-41 0.12/0.05, dvt-pe-28 0.12/0.01, cva-47 0.12/0.05. I read every card. No SAMP has a TIA with a DVT or keys PFO clues or a bubble study for stroke. cva-41 keys a plain TTE for LV thrombus after an old MI. An earlier draft echoed cva-47 (a 52-year-old woman on levothyroxine), so I changed the patient.

### chest-pain-41 (version 1 to 2, 4 questions, key features 4, 2, 5, 4)

- Old scenario: a 36-year-old man with exertional pressure while carrying his son uphill, with normal serial troponins, keyed that a normal troponin does not exclude unstable angina. It copied ischemic-heart-disease-15.
- New scenario: a 34-year-old nonsmoking woman with ongoing chest pressure and nausea that began at rest during a movie, after two rest episodes this week. She has xanthelasma and Achilles tendon nodules. Her mother had bypass surgery at 46, and her brother started lipid therapy at 19. Two doses of nitroglycerin at triage did not change her pain.
- Keyed decisions: familial hypercholesterolemia as the risk factor (KF 4). ECG within 10 minutes and chewed ASA (KF 2). Lack of response to nitroglycerin does not separate cardiac from noncardiac pain (KF 5). Cascade screening of first-degree relatives (KF 4). The copied troponin decision is gone. The FH and ECG-ASA questions were not flagged, so I kept them and adapted them to the new story.
- Sources: Kramer AI and colleagues. CJC Open. 2024 (doi 10.1016/j.cjco.2024.08.005, PMC11583881), a new source constant. Byrne RA and colleagues. 2023 ESC ACS guideline (local copy, section 3.2 and Recommendation Table 5). Henrikson CA and colleagues. Ann Intern Med. 2003 (abstract, 35% vs 41% relief).
- Similarity check, top 5: pulmonary-edema-21 0.07/0.12, chest-pain-33 0.11/0.08, ischemic-heart-disease-44 0.11/0.07, pulmonary-edema-35 0.07/0.11, chest-pain-20 0.11/0.11. I read every card. All scores are low. No other SAMP keys the response to nitroglycerin as an unreliable clue for ACS. ischemic-heart-disease-14 (signed off) keys that relief does not exclude ACS, which is a different decision in a different story.

### chest-pain-47 (version 1 to 2, 4 questions, key features 2, 5, 2, 1)

- Old scenario: a diabetic smoker with heartburn not settled by antacids, which turned out to be a lateral STEMI, keyed to an ECG in 10 minutes, the GI label not excluding ACS, and ASA with heparin. It copied chest-pain-07 and abdominal-pain-05.
- New scenario: a 63-year-old woman with a known 49 mm ascending aortic aneurysm. She has sudden severe pain at dinner, inferior ST elevation on the paramedic ECG and a cath lab activation. She also has a new early diastolic murmur, a BP of 96/60 mmHg and equal radial pulses. This is a type A dissection presenting as an inferior STEMI.
- Keyed decisions: bedside echocardiography while the team assembles (KF 2). Inferior ST elevation does not prove a primary coronary cause (KF 5). Hold the requested heparin and ticagrelor for now (KF 2). Stanford type A dissection as the diagnosis that explains all her findings (KF 1).
- Sources: Byrne RA and colleagues. 2023 ESC ACS guideline, sections 3.4.1 and 3.4.2 (echo and CT for aortic disease). Schönbeck H and colleagues. BMC Emerg Med. 2025 (doi 10.1186/s12873-025-01404-8, PMC12661737), a new source constant (ST changes in 43% vs 15%, and harm from antithrombotics). Hagan PG and colleagues. IRAD. JAMA. 2000 (doi 10.1001/jama.283.7.897, pulse deficit in 15.1%). I added the DOI to the existing IRAD constant.
- Similarity check, top 5: ischemic-heart-disease-16 0.37/0.06, cva-09 0.20/0.12 (signed off), chest-pain-36 0.20/0.10, chest-pain-25 0.19/0.09, chest-pain-42 0.19/0.02. I read every card. ischemic-heart-disease-16 shares only the wording of a paramedic ECG and ASA 160 mg in an anterior STEMI. cva-09 is a dissection presenting as a stroke with tenecteplase being prepared. It shares the dissection diagnosis and the withholding of antithrombotics, but its presentation is neurologic. chest-pain-01 (signed off) is a classic dissection keyed to arm BP difference, CTA and beta blockade. None of my keys repeat it.

## Fixes

None. Task 2 does not apply in sweep 3.

## Checks

- `SAMP_BATCH=s24`, `s27` and `s28` with `tests/samps.test.ts tests/samp-quality.test.ts`: all pass (675, 715 and 699 tests).
- s27 first failed key position balance, with position 3 at 25.2%. I moved the ABCD2 options to 1 to 5 points, which puts the key in position 2.
- `npx tsc --noEmit -p .`: clean.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4503 passed.

## For the physician

- arrhythmia-29: the pediatric temperature and prognosis keys come from a 2026 review of the 2025 AHA pediatric guideline, because the AHA site blocked access. Please confirm the "up to 5 days" and "at least 72 hours" wording against the AHA text.
- cva-27 q3 keys a disabling stroke at NIHSS 3. The Canadian Box 5B wording is "usually NIHSS above 4", with non-disabling defined by the effect on daily activities, work or walking. Please confirm you accept alexia that stops her working as disabling.
- cva-27 q4 relies on the 2025 CSBPR EVT interim update: MeVO (M2, A2, P2) is not for routine EVT, and a case-by-case discussion is allowed.
- chest-pain-47 q1 keys bedside echo before the lab. The ESC text says echo must not cause relevant delay. The stem states the team needs 20 minutes to assemble.
- chest-pain-41 q4 still keys cascade screening, as before. The option no longer names lipids, so it does not give away q1 on the mock exam screen.
