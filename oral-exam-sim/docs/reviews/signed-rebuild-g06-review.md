# Independent review, signed-duplicate rebuild group g06

Files: `src/samps/s09/ems.ts` and `src/samps/s09/environmental.ts`. Held back in `src/samps/held-back/g06.json`. Writer report: `docs/reviews/signed-rebuild-g06.md`.

## Summary

| SAMP | Verdict | Reason |
|---|---|---|
| ems-01 | FIXED | Breech birth patch. New story and decisions. The dangerous match in q2 zeroed a correct Mauriceau answer that mentions traction, so it was narrowed. |
| ems-07 | PASS | Amygdalin and apricot kernel cyanide. Not keyed anywhere else. The sources say what is claimed. |
| ems-08 | FAIL | q3 repeats cva-30 q2 (signed). Both are a rural hospital after tenecteplase, waiting for the aircraft, with a repeat CT before departure for a drop in consciousness, headache and a BP spike. |
| ems-10 | FAIL | q2 keys findings against a beta blocker in STEMI with heart failure and low BP. That is ischemic-heart-disease-12 q1 (signed, keeper of cluster 67). q1 also repeats "transfer for primary PCI". |
| ems-12 | FAIL | q1 and q4 retell cluster 19's keeper multiple-patients-03 q1 (Code Orange, clearing beds, staff recall, triage point). They also retell signed multiple-patients-15 q1 and q3. The D1 row for q4 echoes the keeper itself, so landing rule 1 applies. |
| environmental-05 | FAIL | Two repeats. q2 (forced air and warmed fluids) is a valid D1 repeat. q4 (warmed bolus for rewarming hypotension) repeats loc-15 q2 and multiple-trauma-14 q4 for the same reason. D1 allows one repeat per SAMP. |
| environmental-07 | FAIL | q3 (the most reliable core temperature probe) echoes loc-15 q5, and loc-15 is the keeper of cluster 57. Its D1 row fails under landing rule 1. q2's rewarming items also repeat loc-15 q2. |

Structure: all seven keep their id, topic, number of questions, and each question's kind and keyFeature. Each has version 2, and `reviewed: false` comes after `...META`. All seven are in g06.json. `git diff HEAD` on both files touches only these seven blocks and the new source constants they use (ranzcog, csbpr25, escAcs, hsnOrange, ahaTox, cdcRca, paal, cscm, efns, liXing).

Tests: `SAMP_BATCH=s09 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (513 tests). `npx tsc --noEmit -p .` passes with exit 0.

Simcheck, rerun on the current text (full / keys): ems-01 multiple-patients-11 0.23/0.15. ems-07 ems-06 0.17/0.15. ems-08 cva-30 0.20/0.07, ems-02 0.19/0.15. ems-10 ems-28 0.28/0.22, ischemic-heart-disease-11 0.21/0.15. ems-12 multiple-patients-15, ems-24 and multiple-patients-03 at 0.20 with keys 0.17 to 0.19. environmental-05 multiple-trauma-14 0.21/0.17. environmental-07 old environmental-05 0.21/0.22, arrhythmia-06 0.22/0.18. Scores are low everywhere, but the decision search found the repeats below that text similarity misses.

## ems-01 (cluster 2): FIXED

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Hands off until the umbilicus. This matches RANZCOG C-Obs 11 (July 2021: traction avoided, hands off) and the Ontario ALS PCP breech directive. No breech key exists anywhere in the bank. |
| q2 | FIXED | The unacceptable answer matched any line containing "pull" or "traction", and it was marked dangerous. So a correct answer like "Mauriceau manoeuvre with gentle traction on the shoulders" zeroed the question. The match was narrowed to "pull body", "pull leg", "pull trunk", "pull the baby", "pull baby out", "traction leg", "traction trunk" and "traction on the body". This was tested with markShort. Mauriceau answers that mention traction now score. "Pull on the body" and "traction to the legs" are still dangerous. "Do not pull on the body" is negated. The ALS directive (hairline visible or 3 minutes after the umbilicus, then Mauriceau-Smellie-Veit, and transport if it fails) was checked in the source text. |
| q3 | PASS | Department set-up for a limp newborn and the mother. The PPV threshold (below 100/minute), CPR (below 60/minute after 30 seconds of room air PPV), cardiac monitor and right hand oximetry were all checked in the ALS PCS. Closest neighbours are anaphylaxis-09 q2 and pre-eclampsia-04 q1, which have "alert the neonatal team" as one item. That is a different decision. |
| q4 | PASS | Handover details. The BLS neonate standard (who delivered, colour, breathing and activity, time of delivery, Apgar at 1 and 5 minutes) was checked. |

## ems-07 (cluster 7): PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Scene questions. The BLS toxicological standard (agent, quantity, time, route, and for a prescription the date filled and the remainder) was checked. "Anyone else unwell" is one item out of 9, with 3 required. It echoes keeper tox-12 q1, but it cannot carry the question on its own, and the stem rules out a gas source. |
| q2 | PASS | Transport questions. The BLS list of problems to prepare for (seizures, changing consciousness, respiratory distress, emesis, arrest) was checked. |
| q3 | PASS | Cyanide from amygdalin is the single best answer. AHA 2023 (Lavonas, section 7) says cyanide is liberated by metabolism of amygdalin, and names collapse, lactic acidosis, depressed mental status and seizures. It calls hydroxocobalamin the primary recommended treatment. The distractors are each excluded by the lab values given. Cyanide is keyed elsewhere only in smoke inhalation (airway-02 q4, burns-04 q1, burns-10 q3, multiple-patients-10 q3). No other SAMP, committed or in progress, uses amygdalin, apricot kernels or laetrile. |

## ems-08 (cluster 53): FAIL

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Intubate only for specific findings, not routinely. Other SAMPs (airway-31 q2, burns-25 q1, environmental-21 q3) key the opposite decision in other settings. |
| q2 | PASS | Angioedema and systemic bleeding as complications to recognize. cva-31 keys the treatment of angioedema, not its recognition. |
| q3 | FAIL (repeat) | "Drop in consciousness, new headache, persistent BP rise" means repeat the CT before departure. That is the same decision, for the same reason and in the same setting, as signed cva-30 q2: a rural hospital, tenecteplase given, the aircraft not yet arrived, then headache, drowsiness and a BP of 212/118 lead to an immediate CT before the flight. loc-09 q5 and cva-03 q4 also key a repeat CT after thrombolysis. The writer listed cva-30 q2 as a hit but kept the question. |
| q4 | PASS | What travels with her. The items overlap ems-02 q2 (last known well, the husband's number), but here they are a transfer package with the tenecteplase time. |

Fix needed (not written here): replace q3 with a transfer-stage decision that no other SAMP keys. The in-flight BP target after tenecteplase is one option, but check cva-30 q4 (185/110) first. The whole stem is close to cva-30 (rural site, tenecteplase, waiting for the aircraft), so the rebuild should move the setting as well.

## ems-10 (cluster 2): FAIL

| Q | Verdict | Notes |
|---|---|---|
| q1 | Repeat (would be D1) | "Transfer now for primary PCI" is keyed in ischemic-heart-disease-09 q2, 11 q1 and 35 q1, and in arrhythmia-12 q3 (angiography after arrest with coma). It is the literal wording of IHD KF 6, so it could be this SAMP's one D1 repeat. The arithmetic (30 + 40 + 30 = 100 minutes from first contact) holds. |
| q2 | FAIL (repeat of a keeper) | "Findings that argue against IV metoprolol": SBP below 120, a pressor, crackles and B lines, poor LV function, risk of cardiogenic shock. ischemic-heart-disease-12 q1 is signed and is the keeper of cluster 67 ("no beta blocker in cardiogenic shock"). It keys hypotension and shock, heart failure with pulmonary edema, and compensatory tachycardia. This is the same decision for the same reason. The g12 reviewer failed the rebuilt pulmonary-edema-02 for the same item. The writer's claim that no beta blocker contraindication in STEMI is keyed is wrong. |
| q3 | Repeat | The ventilated transfer package repeats ems-28 q1 and q2 and airway-11 q4. It was recorded as a D1 row. That would be a second repeat after q1. |
| q4 | PASS on keys | Fever prevention with core monitoring matches ESC 2023. arrhythmia-12 q2 keys temperature control after arrest, which is close but in a different phase of care. |

Fix needed (not written here): q2 needs a new IHD KF 7 decision that neither ischemic-heart-disease-12 nor pulmonary-edema-02 keys. The SAMP as a whole also converges with the rebuilt pulmonary-edema-02 (g12, failed): a community hospital, a PCI centre 40 to 45 minutes away, about 100 minutes to device, anterior STEMI, transfer for primary PCI, and no metoprolol with heart failure. Whoever rebuilds either SAMP should coordinate with the other.

## ems-12 (cluster 19): FAIL

| Q | Verdict | Notes |
|---|---|---|
| q1 | FAIL (retells the cluster key) | Asks the superintendent for numbers, triage counts, ETA and the other receiving hospitals. That is cluster 19's repeated key ("what to ask the scene"). It is signed in HEAD multiple-patients-15 q1 (number and triage categories, arrival times, contamination, other hospitals). |
| q2 | PASS on keys | Fresh air, eye rinsing and reassessment on scene. It was checked against the CDC riot control agents fact sheet. |
| q3 | PASS on keys | Remove outer clothing, then oxygen and salbutamol. It was checked against the CDC fact sheet: no antidote, supportive care to restore oxygenation. |
| q4 | FAIL (echoes the keeper) | Code Orange, clearing monitored beds, staff recall, and a triage point at the ambulance entrance. This is multiple-patients-03 q1, the keeper of cluster 19, and HEAD multiple-patients-15 q3 as well. The writer's own D1 row names multiple-patients-03 q1, so landing rule 1 makes this a FAIL. The lockdown, family centre and tracking items also match the failed multiple-patients-15 rebuild (g11 review). |
| q5 | PASS on keys | Release instructions, checked against the CDC fact sheet: double bagging, soap and water, do not reuse exposed contact lenses, 15 to 30 minutes, later breathing problems. |

Overlap with multiple-patients-15. The g11 reviewer found that the multiple-patients-15 rebuild converges with ems-12 on a high school, 60 teenagers and a reunification centre. multiple-patients-15 failed and keeps its signed text (the highway pileup in a storm). Judged against that signed text, ems-12 q1 and q4 still repeat multiple-patients-15 q1 and q3, as well as the keeper multiple-patients-03 q1. The bear spray mechanism is new (no other SAMP mentions bear spray, pepper spray or capsaicin exposure), and q2, q3 and q5 are new decisions. ems-24 q1 and q4 (ammonia, remove clothing and irrigate) are near q2 and q5 but key a different agent and different actions.

Source check. ems-12 cites the Health Sciences North Code Orange plan and the US CDC fact sheet. The CDC page is real and was opened here through a fetch tool, because direct curl was blocked. It says "Last Reviewed: June 11, 2026", and every quoted claim is on the page: fresh air is highly effective, eyes are rinsed for 10 to 15 minutes, lenses are not reused, clothing is double bagged, skin is washed with soap and water, effects last 15 to 30 minutes, there is no antidote, and asthma can follow exposure. No Canadian clinical source was found for pepper spray. A rebuild that keeps q2, q3 and q5 should look again, for example at a Canadian poison centre monograph.

Fix needed (not written here): keep the bear spray mechanism if it is wanted. Replace q1 and q4 with EMS KF 1 decisions that are not the pre-arrival list or the Code Orange and surge list.

## environmental-05 (cluster 13): FAIL

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Poikilothermia, no shivering or vasoconstriction, cannot feel the cold, the medications. The CSCM 2021 thermodysregulation section was checked. This is not keyed elsewhere. environmental-38 (tetraplegia in the heat) keys cooling and baclofen. |
| q2 | D1 qualifies | Forced air and warmed IV fluids. This is the literal wording of environmental KF 3 ("rewarm effectively"). The same decision is signed in multiple-trauma-14 q1, multiple-trauma-39 q2 and loc-15 q2. It does not echo the cluster keeper, environmental-06, which keys ECLS, the potassium cut-off and when to stop. On its own it would be a valid D1 repeat. |
| q3 | PASS | Precautions for insensate skin, his low baseline BP and the catheter. CSCM was checked. |
| q4 | FAIL (second repeat) | A warmed crystalloid bolus for hypotension during rewarming, with atropine, pacing and a pressor as distractors. loc-15 q2 (signed) keys "Careful IV crystalloid boluses for hypotension" in a hypothermic patient being rewarmed. multiple-trauma-14 q4 keys the same reasons (rewarming vasodilation, cold diuresis). That makes two repeats in one SAMP, and D1 allows one. |
| q5 | PASS | Discharge safety. CSCM was checked. |

Fix needed (not written here): re-key q4 on a decision tied to his cord injury, or drop q2 and keep q4 as the single D1 repeat. Either change is a new keyed decision, which the reviewer does not write.

## environmental-07 (cluster 57): FAIL

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Features that point away from cold exposure (a warm house, the triad, bariatric vomiting). Checked against Li and Xing 2025. |
| q2 | FAIL (repeat) | Required 3 can be met entirely with forced air, warmed IV fluids and glucose. Those are the items in loc-15 q2, the keeper of cluster 57 ("IV dextrose, active external rewarming with forced warm air and warmed IV fluids"). IV thiamine repeats loc-16 q3, as the writer flagged. EFNS (200 mg three times daily IV, before carbohydrate, parenteral after bariatric surgery) was not reopened here because PubMed only shows the abstract, but it matches the guideline as published. |
| q3 | FAIL (echoes the keeper) | "Most reliable core temperature probe" is loc-15 q5 ("Esophageal probe once her airway is secured"), a decision of the keeper of this cluster. Landing rule 1 makes the D1 row a FAIL. |
| q4 | Repeat | The monitoring list during rewarming (afterdrop, arrhythmia, hypotension, glucose, potassium) is the replaced environmental-07 q4 key almost word for word. multiple-trauma-14 q4 also keys rewarming hypotension. |

Fix needed (not written here): the Wernicke after bariatric surgery story is new and worth keeping. q2 to q4 need decisions specific to Wernicke encephalopathy or to a secondary cause of hypothermia, not generic rewarming.

## D1 rows the writer added to docs/DECISIONS.md

| Row | Ruling | Action |
|---|---|---|
| ems-10 q3 | The SAMP fails, and the row would also be a second repeat after q1 | Removed |
| ems-12 q4 | Echoes multiple-patients-03 q1, the keeper of cluster 19 (landing rule 1), and the SAMP fails | Removed |
| environmental-05 q2 | Qualifies on its own, but the SAMP fails on q4 | Removed |
| environmental-07 q3 | Echoes loc-15 q5, the keeper of cluster 57 (landing rule 1), and the SAMP fails | Removed |

No other line of DECISIONS.md was changed. The working-tree copy of the file is still behind HEAD: it lacks 10 D1 rows that are committed (delirium-agitation-14 q4, chest-pain-07 q3, chest-pain-15 q2, eye-07 q2, first-trimester-bleeding-02 q3, gi-bleed-01 q2, headache-13 q2, headache-15 q2, anaphylaxis-15 q3, tox-09 q4). Committing this working-tree file as it stands would delete them. After the four removals, the file should equal HEAD.

## Other overlaps the writer flagged

- ems-12 near ems-24 and multiple-patients-15. ems-24 differs (a different agent and different actions). multiple-patients-15 is covered above. It is part of why ems-12 fails.
- environmental-07 q2 and thiamine in loc-16. This is a repeat, and one of the reasons q2 fails.
- ems-07 and apricot kernel cyanide. Nothing else in the bank or in the in-progress files uses it. Clear.

## For the physician

- ems-01 and ems-07 are ready for a fresh sign-off. ems-01 is a precipitous breech birth patched from a farmhouse. ems-07 is a collapse with a seizure in a woman taking vitamin B17 and apricot kernels, with cyanide as the diagnosis.
- In ems-01 q2, a written answer that describes the Mauriceau-Smellie-Veit manoeuvre with gentle traction now scores. Only traction on the legs, trunk or body is marked dangerous. Please confirm that this matches your teaching.
- Five of the seven fail and need another rebuild: ems-08, ems-10, ems-12, environmental-05 and environmental-07. The reason for each is in its section above. None was re-keyed here. Until they are rebuilt, they stay held back in g06.json.
- ems-10 and the g12 rebuild of pulmonary-edema-02 have drifted into the same STEMI story. The next rebuild of either should be done with the other in view.

## Landing decision

ems-01 and ems-07 land. Neither uses a D1 repeat, so the D1 total is unchanged. The ems-01 fix narrows a dangerous-answer match inside the writer's own keyed decision, which the landing rules allow. ems-08, ems-10, ems-12, environmental-05 and environmental-07 failed, and all five keep their signed text on the branch. The writer's four D1 rows are not added.
