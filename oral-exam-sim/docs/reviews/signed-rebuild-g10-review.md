# Review of signed-duplicate rebuilds, group g10

This is an independent review of docs/reviews/signed-rebuild-g10.md. It covers `src/samps/s03/anaphylaxis.ts`, `src/samps/s03/arrhythmia.ts` and `src/samps/s07/loc.ts`.

It applies Decision D1 (docs/DECISIONS.md) strictly. A SAMP may repeat ONE decision keyed in a signed-off SAMP, and only when that decision is the literal wording of a CFPC key feature. The wording was checked in the CFPC 2017 document (scratchpad/em_kf.txt) and against the paraphrase in src/blueprint/priorityTopics.ts. A SAMP with a second repeat, or with a repeat that does not meet the wording test, fails and was not patched.

A question counts as a repeat when the decision it is built to test is keyed in another signed-off SAMP for a similar reason. IM epinephrine as one line of a longer list is not counted on its own, since about 50 signed questions key it.

## Verdicts

| SAMP | Verdict | Reason |
|---|---|---|
| anaphylaxis-02 | PASS | One D1 repeat (q3). The writer's D1 label on q4 is not needed |
| anaphylaxis-06 | FIXED | q3 accepted two epinephrine items that do not answer its prompt. One D1 repeat remains (q3) |
| anaphylaxis-15 | PASS | One D1 repeat (q3, inferior STEMI). Kounis syndrome itself is not keyed elsewhere |
| arrhythmia-04 | FAIL | The D1 claim for magnesium fails the wording test. q2 also repeats two arrhythmia-05 keys |
| arrhythmia-06 | FAIL | Bicarbonate is a valid D1. q4 then repeats the hypothermic VF and ECLS keys of cluster 13 |
| arrhythmia-15 | PASS | No repeat |
| loc-05 | PASS | No repeat. q3 is flagged for the physician |
| loc-08 | FAIL | Naloxone is a valid D1. q4 then repeats tox-17 q4 |
| loc-09 | FAIL | Retells signed headache-07 and repeats three of its keys. Needs a new story |
| loc-10 | FIXED | Unsourced doses removed. One D1 repeat (q1) |

## Structure

The HEAD and working copies were compared question by question. All ten keep their id, topic, question count, kinds and key features. Each has `reviewed: false` and version 2, and each is listed in src/samps/held-back/g10.json. At the start of this review no other SAMP in the three files had changed.

**Defect from this review:** a bulk edit meant for arrhythmia-15 q3 landed on line 225 of src/samps/s03/arrhythmia.ts, which is in signed-off **arrhythmia-01**. It added `"atropine 600 mcg", "atropine 1000 mcg"` to a match list. The permission system blocked the revert. The fix is to delete `, "atropine 600 mcg", "atropine 1000 mcg"` from that line. Until then the s03 signed-key test fails on arrhythmia-01.

## Rows

| Question | Verdict | Notes |
|---|---|---|
| anaphylaxis-02 q1 | PASS | Protamine-specific shock differential. Crivellari 2024 supports the anaphylactoid and pulmonary vasoconstriction items |
| anaphylaxis-02 q2 | PASS | Key position 1 kept. Crivellari names insulin that contains protamine as a risk factor. No longest-option cue |
| anaphylaxis-02 q3 | PASS (D1) | "Epinephrine 0.5 mg IM into the anterolateral thigh" is word for word anaphylaxis-01 q1. With the infusion item, this is cluster 1's named repeated key (IM, then infusion). Anaphylaxis KF 3 literally says "giving epinephrine appropriately". This is the SAMP's one repeat. Stopping the protamine is new |
| anaphylaxis-02 q4 | PASS | The writer called this a D1 repeat. No surviving signed SAMP keys bedside tests to sort out undifferentiated shock. The near copy was old anaphylaxis-02 q4, which this rebuild replaces. asthma-copd-04 q2 and sob-07 q1 are dyspnea workups |
| anaphylaxis-06 q1 | PASS | Gly m 4 (Bet v 1 homologue) is not detected in total soy extract (Worm 2014, opened). "soy", "Gly m" and "birch" appear in no key |
| anaphylaxis-06 q2 | PASS | WAO 2020 criterion 2 (laryngeal involvement without skin signs) |
| anaphylaxis-06 q3 | FIXED (D1) | Removed the "repeat epinephrine IM" and "epinephrine infusion" accept items. The prompt asks how to prepare for intubation, and together these two items reproduced cluster 1's key. The explanation was reworded to match. The core of the answer (most experienced operator, front of neck access ready) is the double setup in anaphylaxis-05 q2 and airway-03 q4, the cluster 10 keeper. The writer's report says this was left out, but it was not. Airway KF 2 literally says "anticipate the need for pre-emptive airway control ... (edema)". This is the one D1 repeat |
| anaphylaxis-15 q1 | PASS | WAO 2020 risk factors. The focused patch report is new |
| anaphylaxis-15 q2 | PASS | The pivot is recording and transmitting a field ECG. PCI destination is one optional item. It echoes ischemic-heart-disease-44 q2 and old ems-01 q1, which g06 has rebuilt as a breech birth. Nitroglycerin at SBP 86 is correctly marked dangerous |
| anaphylaxis-15 q3 | PASS (D1) | Checked for ACS repeats. The accept list credits "STEMI", "ACS" or "MI" alone, so Kounis is not required. The ECG line is word for word ischemic-heart-disease-44, where q1 keys "Inferior wall STEMI". The scored decision therefore repeats IHD-44 q1. Shock KF 5 literally lists "cardiogenic" among diagnoses beyond hypovolemia, so this is the one D1 repeat. The Kounis claims check out against Rochel-Perez 2025 (venom is a leading trigger, ST elevation the most common ECG finding, type II means pre-existing CAD). "Kounis" appears elsewhere only in differential lists |
| arrhythmia-04 q1 | PASS | Drew 2010 harbingers. "alternans" and "short long" are not keyed elsewhere |
| arrhythmia-04 q2 | FAIL | The D1 claim does not hold. Arrhythmia KF 6 says "adjust management to the special circumstance (e.g., ... prolonged QT)". It names the context, not magnesium, and no KF names magnesium. The key is also magnesium, potassium, pacing or isoproterenol, and avoiding QT drugs. That is arrhythmia-05 q2 (magnesium 2 g) plus q3 (overdrive pacing, isoproterenol, stop QT-prolonging drugs), two signed questions. Needs a new decision. Not patched |
| arrhythmia-04 q3 | PASS | Isbister 2004 checked: citalopram QTc over 440 in 68%, serotonin syndrome 14%, seizures 1.9%, coma 2.4%. 32 x 40 mg = 1 280 mg |
| arrhythmia-04 q4 | PASS | Isbister 2007 checked: SDAC given a mean of 2.1 h (0.5 to 6.25 h), RR 0.28 |
| arrhythmia-06 q1 | PASS (valid D1) | Tox KF 4 literally says "order sodium bicarbonate in TCA toxicity with wide complex tachycardia". Echoes tox-03 q2. 2 mmol/kg x 60 kg = 120 mmol, within the AHA range of 50 to 150 mmol. Key position 4 |
| arrhythmia-06 q2 | FAIL | Early ECMO centre consultation overlaps environmental-06 q3 ("pre-notify the ECMO team"). environmental-06 is the cluster 13 keeper |
| arrhythmia-06 q3 | PASS | ERC 2025 drug handling in hypothermia is not keyed elsewhere |
| arrhythmia-06 q4 | FAIL | The VF arrest at 31.2°C re-keys hypothermic arrest care: CPR, shock and epinephrine rules, ECLS, continuing until warm. environmental-05 q4 keys "CPR, up to 3 shocks, hold epinephrine, ECLS rewarming". Keeper environmental-06 q2 and q3 key ECLS and continuous CPR. "CPR plus ECMO" passes both. Found outdoors with J waves who then goes into VF is also cluster 13's shared story. This is a second repeat on top of bicarbonate. Not patched |
| arrhythmia-15 q1 | PASS | Cholinergic and toxic bradycardia differential |
| arrhythmia-15 q2 | PASS | "honey", "grayanotoxin" and "rhododendron" are not keyed elsewhere |
| arrhythmia-15 q3 | PASS | Silici 2015 checked: atropine 0.5 mg (37.8%) or 1 mg (49.7%), saline 65%, no deaths, discharge within 24 h. The old arrhythmia-15 atropine key was replaced, so it is not a repeat. Minor: the accept list has no microgram forms other than 500 mcg. Not added, because of the arrhythmia-01 incident above |
| arrhythmia-15 q4 | PASS | Silici checked: sinus bradycardia 79.6%, complete AV block 45.8% |
| loc-05 q1 | PASS | E1 VT M2 matches the stem (no eye opening to pressure, extension at the elbow). Teasdale aid |
| loc-05 q2 | PASS | Post-anoxic myoclonus is not keyed elsewhere |
| loc-05 q3 | PASS, flagged | EEG plus a levetiracetam load is the same pair that cluster 69 keeper seizures-01 keys (q3, q4) for status. Here the reason is different: ERC-ESICM first-line ASM and EEG for post-arrest myoclonus. The distractors (paralysis, early withdrawal of care, phenytoin) test post-arrest care. The physician should confirm this is not a repeat |
| loc-05 q4 | PASS | Workup of the post-arrest coma |
| loc-05 q5 | PASS | Collateral about the arrest (no-flow and low-flow times) is not keyed elsewhere |
| loc-08 q1 | PASS | ISMP Canada: a mid-cycle blister pack change is a known cause of dispensing errors |
| loc-08 q2 | PASS | CT head at key position 0. The CCHR statements are correct (built for GCS 13 to 15, age 65 or over is high risk). GCS E2 V2 M4 = 8 matches |
| loc-08 q3 | PASS (valid D1) | LOC KF 2 literally says "treat reversible causes promptly (e.g., ... hypoxia, opioid intoxication)". It names the cause, not naloxone, so this is weaker than bicarbonate but still passes. Echoes loc-02 q1, also tox-08 q1 |
| loc-08 q4 | FAIL | A monitored admission, naloxone again or an infusion if sedation recurs, and stopping further doses is tox-17 q4 ("Hold further patches, monitored admission, naloxone infusion if sedation recurs"). It is also multiple-patients-01 q4 and suicide-risk-10 q3. This is a second repeat. The story is also close to tox-17 (an older person after an iatrogenic opioid change who cannot be woken in the morning, small-dose naloxone, recurrence) and to tox-41 (pharmacy blister pack error). Not patched |
| loc-08 q5 | PASS | Hypercapnia partly echoes tox-17 q3 (VBG for PCO2) |
| loc-09 q1 | FAIL | headache-07 (signed, not being rebuilt) is a young woman with days of worsening headache and vomiting who becomes drowsy, from CVT with hemorrhage. headache-07 q1 keys the same CVT-first differential. simcheck's top hit is headache-07 (0.22/0.20) |
| loc-09 q2 | FAIL | Contrast CT venography repeats headache-07 q3 ("CT venography or MR venography"). It also repeats pre-eclampsia-13 q2 and headache-17 q3. The CSBPR statements are correct (TOF MRV not recommended, no routine LP, CBC, INR and aPTT at baseline) |
| loc-09 q3 | PASS | Risk factors match the CSBPR figure |
| loc-09 q4 | FAIL | headache-07 q4 keys "Anticoagulate with LMWH or unfractionated heparin despite the hemorrhage". The writer's search missed this. The key is clinically right. Heart and Stroke CSBPR 7th ed CVT 2024 §2.1 iii says intracranial or subarachnoid blood is not a contraindication (strong). §2.1 i a prefers LMWH, and §2.1 ii says there is not enough evidence for DOACs without a parenteral lead-in. The Thrombosis Canada CVT guide (version 6 April 2026) says "Anticoagulation, even in the presence of intracranial blood, is the standard-of-care", and favours LMWH over UFH. Both carve out a large or expanding hemorrhage and expected emergency surgery |
| loc-09 q5 | PASS | Airway indications, with CSBPR ABC and ICP monitoring |
| loc-10 q1 | PASS (D1) | The sibling's medication list, pill count, extended-release form and other household substances are tox-14 q1 (the cluster 70 keeper) nearly item for item. LOC KF 3 literally says "actively seek collateral/pre-hospital history", and tox KF 1 names pill bottles and recent prescriptions. This is the one D1 repeat. The writer did not claim D1 here |
| loc-10 q2 | FIXED | Removed doses that neither source states: "10 to 20 mL/kg, 140 to 280 mL" and atropine "0.02 mg/kg". Also removed the sentence that computed the bolus. The series sentence now reads "5 of 32 children with lone guanfacine exposure received IV fluid", as Peters 2025 states. Naloxone did not help in the Assali case (2 doses of 0.2 mg), and the explanation says so |
| loc-10 q3 | FIXED | Dropped "prolonged" from the "delayed worsening" match list. It captured "prolonged orthostatic hypotension" first, so a candidate who then wrote "delayed worsening" lost the credit. Peters checked: orthostatic hypotension in 3 of 32, median 36 h |
| loc-10 q4 | PASS | Other causes, including abusive head trauma |

## D1 repeats

These D1 repeats survive in the passing SAMPs. Each repeated decision is literal CFPC key-feature wording, and each SAMP has only one.

| New SAMP | Repeated decision (KF wording) | Signed-off SAMP it echoes |
|---|---|---|
| anaphylaxis-02 q3 | IM epinephrine, then an epinephrine infusion, for anaphylactic shock (anaphylaxis KF 3, "giving epinephrine appropriately") | anaphylaxis-01 q1 and q3, also shock-07 q1 and q2 |
| anaphylaxis-06 q3 | Prepare early for a difficult airway as allergic airway edema progresses: most experienced operator, front of neck access ready (airway KF 2, "anticipate the need for pre-emptive airway control ... edema") | anaphylaxis-05 q2, also airway-03 q4 |
| anaphylaxis-15 q3 | Shock after anaphylaxis is cardiogenic, from an inferior STEMI (shock KF 5, "diagnoses beyond hypovolemia (e.g., cardiogenic ...)") | ischemic-heart-disease-44 q1 |
| loc-10 q1 | Collateral on the relative's medications, pill count and extended-release form after a toddler's exploratory ingestion (LOC KF 3, "actively seek collateral history", and tox KF 1) | tox-14 q1 |

The writer's three D1 claims:

- **arrhythmia-06 q1**, bicarbonate for a TCA: valid (tox KF 4 wording, echoes tox-03 q2). It does not survive, because arrhythmia-06 fails on q2 and q4.
- **arrhythmia-04 q2**, magnesium for torsades: invalid. No KF names magnesium. It also repeats arrhythmia-05 q2 and q3.
- **loc-08 q3**, naloxone: valid (LOC KF 2 names opioid intoxication). It does not survive, because loc-08 fails on q4.

The writer's fourth D1 label, anaphylaxis-02 q4 (POCUS), matches no surviving signed key. It is not needed.

None of these were added to docs/DECISIONS.md. Per D1, the table there is updated when the group lands.

## Checks

- `SAMP_BATCH=s07 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: 512 passed.
- `SAMP_BATCH=s03 ...`: 434 passed and 1 failed. The failure is "signed-off answer keys > arrhythmia-01 keeps its keys", caused by the accidental edit described under Structure. Deleting the two added phrases on line 225 should fix it.
- `npx tsc --noEmit -p .`: 0 errors.
- simcheck top hits: anaphylaxis-02 shock-37 0.20/0.17. anaphylaxis-06 sob-15 0.26/0.25 (g01 rebuilt it as a laryngectomy patient, no convergence). anaphylaxis-15 ems-22 0.23/0.20. arrhythmia-04 arrhythmia-34 0.21/0.14. arrhythmia-06 arrhythmia-04 (old) 0.21/0.20, tox-03 0.20/0.17. arrhythmia-15 IHD-07 0.20/0.09. loc-05 seizures-42 0.17/0.10. loc-08 loc-03 0.17/0.16, tox-17 0.13/0.15. loc-09 headache-07 0.22/0.20. loc-10 tox-14 0.17/0.10.
- House style: no em or en dashes and no semicolons in the ten SAMPs. No hedged-key or longest-option cues were found in the three single questions or the two menu questions.
- Other writers' in-progress stories: src/samps was grepped for protamine, soy or Gly m, Kounis, citalopram overdose, grayanotoxin or mad honey, post-anoxic, blister pack opioid errors, deep CVT and guanfacine. There is no convergence. ems-01 (g06) is now a breech birth patch. Its title, "A patch from a farmhouse before dawn", is close to anaphylaxis-15's "Patch from a farm at harvest", but the stories differ.

## For the physician

- Four SAMPs need a rebuild before they can land: arrhythmia-04 q2, arrhythmia-06 q2 and q4, loc-08 q4, and all of loc-09.
- loc-09 needs a new story, because signed headache-07 already keys CVT, venography and anticoagulation despite hemorrhage.
- Three SAMPs now carry a D1 repeat that the writer did not claim: anaphylaxis-06 q3, anaphylaxis-15 q3 and loc-10 q1. Please confirm that these are acceptable under D1, or say which to rebuild.
- anaphylaxis-02: the approved direction asked for both epinephrine and POCUS. The D1 repeat is epinephrine (q3). POCUS (q4) no longer repeats a surviving signed key.
- anaphylaxis-15 q3 accepts "STEMI" without Kounis. If you want q3 to test Kounis syndrome rather than ECG reading, change the prompt to ask for the diagnosis that links the sting and the ECG. That would also remove the IHD-44 repeat.
- loc-05 q3: please confirm that EEG plus a levetiracetam load for post-arrest myoclonus is a different decision from seizures-01's status epilepticus keys. It cites the 2021 ERC-ESICM guideline, and the 2025 update was not opened.
- loc-09 q4, for any rebuild that keeps CVT: CSBPR reserves UFH for patients who may need a procedure. This patient falls to GCS 7 in the next question.
- loc-10 now keys fluid and atropine without doses, because neither guanfacine source gives a paediatric dose. Please add a dose source if you want doses keyed.
- The arrhythmia-01 line needs the revert described under Structure before s03 goes green.

## Landing decision

Only anaphylaxis-15 lands.
- **Failed on the keeper rule:**
  - anaphylaxis-02 and anaphylaxis-06. Their D1 repeats echo anaphylaxis-01 and airway-03, the keepers of their own clusters 1 and 10.
  - loc-10. Its repeat echoes tox-14, the keeper of cluster 70.
- **Failed to be safe:** loc-05. Its q3 keys the EEG and levetiracetam pair of seizures-01, the keeper of cluster 69. The reason differs, but the keyed pair is the same.
- **Failed on review:** arrhythmia-04, arrhythmia-06, loc-08 and loc-09.
- **Waiting:** arrhythmia-15 passed. It waits because its file also holds this reviewer's stray edit to signed arrhythmia-01. That file is committed unchanged until the stray edit is removed.

All nine keep their signed text on the branch. The surviving D1 repeat is anaphylaxis-15 q3, and it is in docs/DECISIONS.md.
