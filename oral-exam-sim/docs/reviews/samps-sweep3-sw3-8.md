# Sweep 3 rebuilds, batches s45, s46, s48, s49 and s52 (label sw3-8)

Six SAMPs were rebuilt in place, one per listed id in `scratchpad/sweep3-rebuild.json`. The files are `src/samps/s45/multiple-trauma.ts`, `src/samps/s46/pediatric-fever.ts`, `src/samps/s48/pulmonary-edema.ts`, `src/samps/s49/seizures.ts` and `src/samps/s52/suicide-risk.ts`. No other SAMP in these files was changed. Nothing was committed.

Each rebuild keeps its id, its topic, its question count and its set of key features. Titles are new and neutral. `reviewed` stays false and the version goes up by 1. Only single and menu questions are used.

The similarity check (`scratchpad/simcheck.py`) was run on every final draft, and every printed card was read. Drafts were changed when a card told the same story or keyed the same decision in a similar story. Those changes are listed under each SAMP.

## Rebuilt SAMPs

### multiple-trauma-18 (version 1 to 2, 5 questions, key features 1, 6, 6, 6, 7)

- Old scenario: a young man stabbed once in the groin, in hemorrhagic shock on the massive transfusion protocol. It keyed calcium chloride for a low ionized calcium and a pause to summarize the plan to a noisy team. It copied multiple-trauma-11.
- New scenario: a 47-year-old unhelmeted man flown in after an e-bike crash on a rural road. His smartwatch dates the fall to 21:05, and he was found in a ditch at 23:40. Critical care paramedics intubated him for blood in the airway. He has a mobile maxilla with brisk bleeding from both nostrils and a splinted femur fracture. His wife arrives during the resuscitation.
- Keyed decisions: anterior and posterior nasal tamponade for midface bleeding once the airway is secure. Uncrossmatched red cells now despite an early hemoglobin of 136 g/L. No tranexamic acid at 3 hours and 20 minutes after injury. Frozen plasma and platelets for a prothrombin time 1.8 times normal and platelets of 84 x 10^9/L with a brain contusion. As team leader, invite his wife in with a staff member beside her under the department's family presence policy.
- Sources: Wu FC, Hung KS, Lin YW, et al. Effectiveness of protocolized management for patients sustaining maxillofacial fracture with massive oronasal bleeding. Scand J Trauma Resusc Emerg Med. 2022 (doi 10.1186/s13049-022-01047-9). Rossaint R, Afshari A, Bouillon B, et al. European guideline on management of major bleeding and coagulopathy following trauma, sixth edition. Crit Care. 2023 (PMC9977110). CRASH-2 collaborators, Roberts I, Shakur H, et al. The importance of early treatment with tranexamic acid in bleeding trauma patients. Lancet. 2011 (doi 10.1016/S0140-6736(11)60278-X). Oczkowski SJ, Mazzetti I, Cupido C, Fox-Robichaud AE. Family presence during resuscitation: a Canadian Critical Care Society position paper. Can Respir J. 2015 (doi 10.1155/2015/532721).
- Similarity check, top 5 of the final run: ems-33 0.16, multiple-trauma-11 0.13 (signed off), multiple-trauma-17 0.13, loc-37 0.13, shock-05 0.13 (signed off). None tells this story. multiple-trauma-11 and shock-05 key the transfusion protocol, a balanced ratio and tranexamic acid inside 3 hours. This SAMP keys withholding tranexamic acid after 3 hours and a lab-guided product choice.
- Changes made after the check: a first draft keyed a double set-up for a surgical airway before intubation in a conscious man with a mobile midface. The check showed airway-34 (a bat assault with the same midface sign keyed to a double set-up) and burns-01 (signed off, keyed to a double set-up). The airway question was removed, the patient now arrives intubated, and the team-leader question moved to family presence.

### pediatric-fever-22 (version 1 to 2, 4 questions, key features 2, 2, 2, 3)

- Old scenario: a 3-year-old girl with 10 hours of fever, cold hands and a capillary refill of 4 seconds, keyed to compensated septic shock, hypotension as a late sign and ceftriaxone with a crystalloid bolus. It copied shock-12.
- New scenario: a telephone call at 03:00 from the nurse at a fly-in First Nations nursing station in northern Manitoba. A 2-year-old girl has 2 days of fever with no source. Her vital signs were taken while she slept. The nurse then reports warm pink hands, a capillary refill under 1 second and bounding pulses. Two IV attempts fail, no one can place an intraosseous needle and the medevac is 3 hours away.
- Keyed decisions: a heart rate of 134/minute is abnormal for a sleeping toddler although normal for an awake one. The hypotension threshold for a 2-year-old is 74 mmHg. Flash refill, bounding pulses and a pulse pressure of 48 mmHg are warm septic shock. Give ceftriaxone IM now rather than wait for the flight team.
- Source: Farrell CA, Canadian Paediatric Society Acute Care Committee. Diagnosis and management of sepsis in the paediatric patient. Paediatr Child Health. 2020, reaffirmed 2026 (cps.ca). Its Table 1 gives the awake and sleeping heart rates and the hypotension formula, and its Table 2 and Case 3 describe vasodilated shock.
- Similarity check, top 5 of the final run: anaphylaxis-46 0.27, first-trimester-bleeding-34 0.24, environmental-22 0.19, suicide-risk-13 0.15 (signed off), pediatric-fever-21 0.15. The top three share only the nursing station setting (peanut anaphylaxis, ectopic pregnancy, hypothermia). None is a febrile child.
- Changes made after the check: a first draft had 1 day of diarrhea, one wet diaper since noon and a lethargy question keyed to no response to a finger prick. The check showed shock-02 (signed off), an infant with diarrhea, one wet diaper and a lethargy key built on a poor response to an IV attempt. The diarrhea, the diaper count and that question were removed. The hypotension threshold question replaced it.

### pulmonary-edema-32 (version 1 to 2, 3 questions, key features 6, 6, 6)

- Old scenario: a 76-year-old man with an ejection fraction of 35% who felt better after treatment and wanted to go home, keyed to persistent congestion, an Ottawa Heart Failure Risk Scale score of 5 and admission. It copied pulmonary-edema-07.
- New scenario: a 68-year-old man with heart failure with preserved ejection fraction and a right below-knee amputation who uses a manual wheelchair. He had pulmonary edema at 02:00 after a salty wedding meal and improved with CPAP, nitroglycerin and furosemide. At 08:00 his only abnormal resting sign is a pulse of 96/minute.
- Keyed decisions: a resting heart rate of 96/minute is the one value outside the CAEP discharge limits. His exertion test is his usual transfers and wheeling with oximetry, since he does not walk. At discharge, furosemide goes from 40 mg to 80 mg daily for 5 to 10 days.
- Source: Stiell IG, Almufleh A, Archambault PM, et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025 (doi 10.1007/s43678-025-00961-y, PMC12484285).
- Similarity check, top 5 of the final run: pulmonary-edema-35 0.19, pulmonary-edema-30 0.19, pulmonary-edema-07 0.17 (signed off), pulmonary-edema-29 0.15, shock-46 0.14. pulmonary-edema-07 is the SAMP this one copied. It keys a walk test, a failed walk test, a risk scale, follow-up within 7 to 14 days, potassium and creatinine rechecks and home care. This rebuild keys none of those.
- Changes made after the check: a first draft keyed follow-up at a heart failure clinic within 7 days. That is the same decision pulmonary-edema-07 keys in a similar better-and-wants-home story, so it was replaced by the discharge diuretic plan. The question that followed the exertion question also named its answer in an update. Both updates were made neutral.

### pulmonary-edema-38 (version 1 to 2, 3 questions, key features 5, 1, 3)

- Old scenario: a 78-year-old woman with no lung disease who wheezed at night with orthopnea, crackles and a raised JVP, keyed to a cardiac cause of wheeze, primary PCI and bilevel ventilation. It copied asthma-copd-04.
- New scenario: an 82-year-old man told he had a chest cold at a walk-in clinic. He has months of daytime dribbling of urine and new bed-wetting, a bladder dull to the umbilicus and a systolic pressure of 186 mmHg. The bladder scan shows 1 350 mL, and creatinine has risen from 92 to 386 umol/L.
- Keyed decisions: an NT-proBNP of 7 800 pg/mL supports pulmonary edema over infection. Sublingual nitroglycerin is the first drug, before the cause is known. An indwelling urethral catheter treats the cause, which is chronic retention with kidney failure and fluid overload.
- Sources: Stiell IG, et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025. National Institute for Health and Care Excellence. Lower urinary tract symptoms in men: management. CG97. 2010, updated 2015 (nice.org.uk/guidance/cg97). No Canadian urology guideline text could be opened, so NICE is cited for the catheter.
- Similarity check, top 5 of the final run: delirium-agitation-35 0.18, sob-31 0.18, shock-23 0.17, abdominal-pain-22 0.14, sob-38 0.14. delirium-agitation-35 is retention from a new anticholinergic drug presenting as delirium. shock-23 is urosepsis after a prostate biopsy and keys bladder drainage within a sepsis bundle. Neither is pulmonary edema.
- Changes made after the check: a first draft used acute severe mitral regurgitation from a ruptured chord, misread as right upper lobe pneumonia and keyed to urgent mitral surgery. pulmonary-edema-11 (signed off) keys emergency mitral surgery for sudden dyspnea from acute mitral regurgitation, so that story was dropped. A second draft had retention caused by a new diphenhydramine prescription. That matched delirium-agitation-35 too closely, so the retention is now chronic and untreated.

### seizures-22 (version 2 to 3, 4 questions, key features 8, 8, 8, 8)

- Old scenario: a 13-month-old girl with fever and a rash 9 days after MMRV vaccine and a 90-second seizure, keyed to vaccine fever, continuing vaccines, a 30% recurrence risk, no daily antiseizure drug and an average epilepsy risk. It copied seizures-11.
- New scenario: a 26-month-old boy with a cold, whose sister has confirmed influenza. His father says the whole episode lasted half an hour. The father's phone video shows 4 minutes of bilateral jerking while the boy was unresponsive, then 25 minutes of sleep. The boy is now back to baseline.
- Keyed decisions: the jerking time on the video (4 minutes), not the father's estimate or the sleep that followed, is the seizure duration. No investigation is needed for the seizure (a menu question with None). Follow-up is usual care with his family doctor, with no neurology, EEG or MRI. His risk of serious bacterial infection is the same as for fever without a seizure.
- Source: Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025 (PMC12454563). It carries the Choosing Wisely Canada and CAEP recommendation.
- Similarity check, top 5 of the final run: asthma-copd-16 0.15, seizures-25 0.14, seizures-29 0.13, seizures-11 0.13 (signed off), loc-35 0.13. Key feature 8 requires a simple febrile seizure in a well toddler, so seizures-11 will always resemble this one. Every decision seizures-11 keys was avoided: the simple seizure criteria, the lumbar puncture red flags, antipyretic doses, the 1 in 3 recurrence and the epilepsy risk.
- Changes made after the check: a first draft keyed classifying the event as a simple febrile seizure, which overlaps the criteria that seizures-11 keys. It now keys which duration to use. The witness was changed from a grandmother to a father because pediatric-fever-09 (signed off) is titled for a worried grandmother.

### suicide-risk-23 (version 1 to 2, 3 questions, key features 5, 5, 5)

- Old scenario: a 58-year-old man with 2 months of depression and passive thoughts of death, going home with his wife, keyed to switching amitriptyline to sertraline 50 mg, benefit taking weeks, and returning the tricyclic tablets to the pharmacy. It copied suicide-risk-07.
- New scenario: a 36-year-old woman with bipolar I disorder, stable for 6 years on lithium. She has low mood since her father's cancer diagnosis and passive thoughts of death with no plan or intent. Psychiatry agrees with discharge to her brother's home. A walk-in clinic started naproxen 4 days ago for wrist tendinitis.
- Keyed decisions: keep taking lithium because it lowers suicide risk, and do not replace it with an antidepressant alone. Recheck the lithium level and creatinine this week, since the guideline asks for a check 5 to 7 days after an NSAID is started. Use acetaminophen instead of any NSAID for her wrist.
- Source: Yatham LN, Kennedy SH, Parikh SV, et al. CANMAT and ISBD 2018 guidelines for the management of patients with bipolar disorder. Bipolar Disord. 2018 (PMC5947163).
- Similarity check, top 5 of the final run: tox-25 0.21, delirium-agitation-09 0.19 (signed off), suicide-risk-07 0.17 (signed off), tox-07 0.17 (signed off), suicide-risk-12 0.16 (signed off). tox-25, tox-07 and delirium-agitation-09 are lithium overdose or toxicity. suicide-risk-12 lists stopping lithium as a risk factor in a self-neglecting woman who needs certification. suicide-risk-07 keys starting sertraline, limiting the supply and having his wife hold it. No antidepressant start, supply limit or means restriction is keyed here.

## Fixes

This sweep had no FIX items. The brief says to ignore Task 2 in sweep 3.

## Checks

- `SAMP_BATCH=sNN npx vitest run tests/samps.test.ts tests/samp-quality.test.ts`: s45 715 passed, s46 687 passed, s48 464 passed, s49 651 passed, s52 456 passed.
- `npx tsc --noEmit -p .`: no errors.
- `LAUNCH_GATE=1 npx vitest run tests/samps.test.ts`: 4 503 passed.
- Scratch files are in `scratchpad/sw3-8`. The final similarity output is in `scratchpad/sw3-8/simcheck-final.txt`.

## For the physician

- multiple-trauma-18: the tranexamic acid key rests on the CRASH-2 exploratory analysis, in which treatment after 3 hours raised the risk of death from bleeding (relative risk 1.44). The smartwatch time makes the injury time exact. Please confirm you are content to teach withholding it.
- multiple-trauma-18: the platelet threshold of 100 x 10^9/L with brain injury is a grade 2C suggestion in the European guideline. The keyed menu answer (plasma and platelets) depends on it.
- multiple-trauma-18: the family presence question follows a Canadian Critical Care Society position paper. The stem states that the department has a family presence policy, so the key does not depend on local custom.
- pediatric-fever-22: the key is IM ceftriaxone because no one at the station can place an intraosseous needle. No dose is keyed. pediatric-fever-04 (signed off) also mentions IM ceftriaxone when access is delayed, in a different story.
- pulmonary-edema-32: the CAEP resting limits (heart rate below 90/minute) and the 5 to 10 day doubling of furosemide are checklist items, not graded trial results.
- pulmonary-edema-38: NICE CG97 is a UK guideline used because no Canadian urology text could be opened. Please say if a Canadian Urological Association statement should replace it.
- seizures-22: all four questions test key feature 8, as the original did. The first question keys the video time over the witness estimate. That reasoning is built from the stem, since the source gives the 15-minute limit but does not discuss witness estimates.
- suicide-risk-23: acetaminophen is keyed because the guideline does not list it among the drugs that affect lithium monitoring. The guideline does not name acetaminophen as preferred.
