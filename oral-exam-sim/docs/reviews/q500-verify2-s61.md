# Q500 verify report, round 2: s61, Seizures

This is a fresh independent review of the whole final text of `src/samps/s61/seizures.ts` (seizures-48 to seizures-52) after the writer's round 2 revision (`docs/reviews/q500-writer-s61-r2.md`). It was checked against the round 1 verdict `docs/reviews/q500-verify-s61.md`. The reviewer did not write or edit this batch and edited no file other than this one (REVIEW-RULES rule 1). It is an AI audit, not clinician verification. All items stay `reviewed: false`.

Both lenses were applied. Every key decision was checked against the catalogues `seizures.md`, `loc.md`, `pediatric-fever.md`, `first-trimester-bleeding.md`, `arrhythmia.md` and `tox.md`.

Batch tests: `SAMP_BATCH=s61 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128, including the near-duplicate stem check. Content strings have no em or en dashes and no semicolons. Spelling is Canadian. Stems run 93 to 144 words.

Single-question keys sit at positions 0 to 4 in the counts 3, 4, 4, 4, 4 (19 singles). No position holds more than 21%.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| seizures-48 | FAIL | PASS | PASS | PASS | FAIL |
| seizures-49 | FAIL | PASS | PASS | FAIL | PASS |
| seizures-50 | FAIL | PASS | PASS | PASS | FAIL |
| seizures-51 | FAIL | PASS | PASS | PASS | FAIL |
| seizures-52 | PASS | PASS | PASS | PASS | PASS |

Key feature coverage also fails. KF4 has no honest item (49 q3), and KF2's only item (51 q4) fails on repetition.

## Round 1 required fixes: were they applied?

| Round 1 fix | Applied? | Comment |
|---|---|---|
| 48 q4, replace the prophylaxis repeat | Yes, but the new question has a stem gap | See the 48 q4 fix below |
| 49 q2, replace the status definition repeat | Yes | Passes. A new timing decision, verified against CPS 2021 |
| 49 q3, replace bag-valve-mask with a new KF4 decision | Replaced, but not acceptable | See the 49 q3 fix below |
| 50 q2, remove the mock-mode cue and the repeated recognition angle | Yes | Passes. The new q4 brings in a fresh cue, see below |
| 51 q2 and q3, honest KF2 | Retagged honestly (q2 to KF6). The added KF2 item fails | See the 51 q4 fix below |
| 52 q1, q2, q3, replace the keeper retell, no D1 claim | Yes | The status sequence is gone and no D1 is claimed. All three pass |

## Required fixes

### seizures-48

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | stem (explanation relies on facts not given) | Explanation: "At 13 months with a temperature of 39.3°C she has two of the four, which carries a recurrence risk of about 32%". The stem never states a family history of febrile seizures. It says only "Since this morning she has had a fever ... One hour ago she became unresponsive", so the time from fever onset to seizure is not fixed. | Add both facts to the stem, for example "There is no family history of febrile seizures or epilepsy" and "Her fever began about 6 hours before the seizure". Otherwise the count of two of four points and the 32% cannot be derived (SAMP_SPEC section 3: everything an explanation relies on must be in the stem). The key and options can stay. | Saguil and Servey, Am Fam Physician 2020 (opened). Factors are age under 18 months, temperature under 40°C, fever under 1 hour and family history. Recurrence is 13%, 23%, 32%, 62% and 76% for 0 to 4 points. | High |

### seizures-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3 | whole question and KF4 tag | Update: "The convulsion stops after the second dose of midazolam. Ten minutes later he is crying ...". Prompt: "Which of the following is the most appropriate next step in his anticonvulsant treatment?" Key "No further anticonvulsant now", tagged KF4. | Two problems. (1) Not one defensible key. This is a 4-month-old in febrile convulsive status with possible CNS infection. The Neurocritical Care Society guideline states: "Urgent control AED treatment following administration of short acting benzodiazepines is required in all patients who present with SE, unless the immediate cause of SE is known and definitively corrected." It adds that for patients who respond to initial therapy, the goal is "rapid attainment of therapeutic levels of an AED". CPS 2021 is silent on loading after cessation. It does not support "no further anticonvulsant". It also says phenobarbital "may be the second-line agent of choice" under 6 months. So "levetiracetam 408 mg IV" and arguably "phenobarbital 136 mg IV" are defensible, and many emergency physicians would load. The explanation's line "treats a seizure that is no longer present" is not true under that guideline. (2) Not KF4. KF4 is "In a patient who continues to seize actively". At the decision point he has stopped. Required: replace q3 with a decision whose key every current reference supports, and that honestly tests KF4 in an actively seizing patient (airway or ventilation support, a condition needing non-standard treatment, or a stepwise anticonvulsant step). It must not be keyed elsewhere, so check the writer's own list of rejected KF4 ideas. A workable route: retag q2 as KF4, since he is still convulsing and the decision is the timing of the next benzodiazepine dose, a stepwise escalation step. Then replace q3 with a KF3 decision not in the bank. If no new honest KF4 or KF3 decision exists, the writer reports the shortfall rather than tagging a non-matching item. | Brophy GM et al., Neurocritical Care Society. Guidelines for the evaluation and management of status epilepticus. Neurocrit Care. 2012 (PDF opened; quote on p. 10 of the article). McKenzie et al., CPS 2021 (opened at academic.oup.com/pch/article/26/1/50/6125966). em_kf.json seizures KF4 | High (key), High (tag) |

### seizures-50

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | prompt and options (unrequested addition, judged under REVIEW-RULES rule 4) | "Which of the following new features at a follow-up visit would most warrant prompt reassessment by his neurologist?" Options "Brief events only from sleep", "Drooling during the events", "Tingling of one cheek first", "One event every few months", key "Declining language and school work" | The decision is new to the bank (DEE-SWAS after SeLECTS, ILAE overview supports it), but the question gives away q1 in mock mode (SCORING-RULINGS B6). "His neurologist" tells the candidate he has epilepsy. The distractors list the defining features of SeLECTS (events from sleep, drooling, one-sided facial sensory onset). That separates q1's "Self-limited focal epilepsy" from the new "Childhood absence epilepsy" distractor. Reword so no prompt word or option names or describes the syndrome. For example, use "at a follow-up visit" with no neurologist, and use distractors that are expected but not syndrome-defining (a further event after a late night, mild tiredness the morning after an event, an event during a febrile illness). Also check that each still has a true reason. | SCORING-RULINGS B6. ILAE EpilepsyDiagnosis.org SeLECTS overview (opened, last updated 30 June 2024) | Medium |

### seizures-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | whole question (KF2) | Update: unprovoked pallid limp spell while watching television. Prompt: "Which of the following investigations is most important for him now?" Key "Twelve-lead ECG" | The lead-in is word for word the same as signed seizures-31 q2 ("Which of the following investigations is most important for him now?", key "ECG with rhythm strip"). The key decision, an ECG for a pallid seizure mimic to exclude long QT, is the teaching point of signed seizures-07 q2 and q3 (pallid collapse in a teen, 12-lead ECG, congenital long QT). It is also keyed in seizures-35 q1 and pediatric-fever-48 q2. A new population does not make the decision new (Q500_BRIEF rule 3). It is not a recorded D1 entry, and D1 is frozen. The round 1 verdict offered this only as an example "if the cited review supports it". It did not check the bank, so this is not a prior ruling. Required: give KF2 an item not keyed in the bank. One acceptable reframe keeps this update but changes the decision from picking the test to recognising the red flag. For example: "Which of the following features of a spell would most warrant further cardiac assessment?", with the key being onset at rest without a trigger and the other options typical spell features. Keep that only if it does not cue q1. A different rapidly reversible cause elsewhere in the batch would also do. Leung 2019 says only that an ECG "may be considered", so the explanation should not imply that every pallid spell needs one. | seizures-31 q2 and seizures-07 q2 (s16 and s49, signed). seizures-35 q1. Leung 2019 (PMC6696822, opened) | Medium |

## Writer's flagged points, judged

| # | Writer flag | Verdict |
|---|---|---|
| 1 | 49 q3 as the batch's KF4 item | Not acceptable. See the 49 q3 fix. It fails on the key and on the tag, so KF4 is uncovered and the batch fails coverage. |
| 1 | 52 q3 tagged KF5, not KF4 | Accepted. The parenting safety decision is new (no catalogue keys bathing an infant or a parent with epilepsy). KF5 (counsel on high-risk activities) fits. The KF4 deviation was moved to 49, where it fails. |
| 2 | 49 q3 key needs a physician | Resolved as a failure, not a physician question. The NCS 2012 text is explicit. |
| 3 | 49 q2 as recall of the CPS interval | Passes. CPS 2021: "If the seizure has not stopped within 5 minutes after a single dose of benzodiazepine, a second dose should be administered". Midazolam IV 0.1 mg/kg, maximum 5 mg. 0.1 x 6.8 = 0.68 mg. Naming the CPS algorithm in the update settles the APLS difference (SAMP_SPEC section 9). The catalogue keys the 5-minute start of treatment (seizures-23 q1) and the 5-minute home rescue (seizures-29 q3), but not the repeat interval. |
| 4 | 51 q4 ECG against seizures-07, -31 and -35 | Fails. See the 51 q4 fix. |
| 5 | 51 q3 iron tagged KF1, 48 q4 tagged KF5 | Loose. No seizures key feature covers iron treatment, and KF1 is still covered by 50 q1 and 51 q1. Recurrence counselling is advice after a first seizure, close enough to KF5. Neither breaks coverage. Listed for the physician, not a failure. |
| 6 | Urine pregnancy test (52 q1) against first-trimester-bleeding | Passes. The FTB keys (first-trimester-bleeding catalogue lines 112, 155 and 259) test pregnancy in pelvic pain or bleeding. The tox and delirium menus test it in overdose. Here it is a contributing-cause check in a woman with known epilepsy, with over-investigation distractors (CT, EEG, LP, cultures). That is honest KF7 and is not keyed in seizures. The related teaching point that pregnancy lowers antiseizure drug levels appears in seizures-27 q1 (lamotrigine), but there the pregnancy is known and the key is the level drop, not the test. The Sandoz monograph supports a fall in levetiracetam levels in pregnancy, up to 60% of baseline in the third trimester. |
| 7 | Three KF7 items in seizures-52 (q1, q2, q4) | Acceptable. Each tests a different part of KF7: a contributing cause, avoiding a seizure-provoking drug, and keeping up adherence. q2 is the loosest. |
| 8 | Non-Canadian sources | Acceptable where no Canadian source exists. None of the three replaces a Canadian guideline. Am Fam Physician 2020 is a point-of-care summary of the Berg rule, and no CPS statement gives recurrence predictors. MedlinePlus (reviewed 19 August 2024) contains "Avoid letting a child with epilepsy sleep on the top bunk". Epilepsy Action (published April 2026) contains each parenting point used. A Canadian patient source (CPS Caring for Kids, Epilepsy Ontario) would be preferable if the writer finds one. Listed for the physician. |
| 9 | Unrequested 50 q1 change (REVIEW-RULES rule 4) | Accepted on its merits. "Childhood absence epilepsy" replaces "Obstructive sleep apnea". It is a plausible distractor and gives q1 a second seizure option, which removes the cue from the new q2. The explanation's reason ("brief staring spells while awake, without drooling or one-sided twitching") is true. The new q4 reopens the cue (see above). |

## Other unrequested changes judged (rule 4)

| Change | Verdict |
|---|---|
| 48 stem and q3 unchanged apart from the new q4 | No issue |
| 49 q4 update, bag-mask sentence removed | Acceptable |
| 50 q4 added (not required) | Fails on mock-mode cueing (see fixes). The decision itself is new and correct |
| 51 q2 retagged KF6, q3 retagged KF1 | KF6 for targeted testing of a paroxysmal event is honest. KF1 for iron is loose (physician list) |
| 52 stem additions (last menstrual period, no head injury, 9-month-old son) | Acceptable. Each supports a later explanation |
| 52 q4 update reworded | Acceptable. The key and options are unchanged |
| Sources removed (AAP 2008, Cochrane, Specchio, AES 2016, ESETT) | Acceptable. Every listed source is cited |

## Per-question notes (passes)

- 48 q1 to q3: passed in round 1 and are unchanged. Rechecked: menu indexes 5 and 6 are still "Report the event to public health" and "Teach seizure first aid".
- 48 q4: the decision is new and the arithmetic matches the AFP table. It fails only on the stem gap.
- 49 q1 and q4: unchanged, correct.
- 50 q1 to q3: q2's top-bunk key is new. seizures-21 q3 (supervised swimming) and seizures-25 q3 (showers) key other safety points. The options are parallel and "No swimming even with supervision" sits last as a "No [action]" option.
- 51 q1 to q3: correct. Leung supports "A complete blood count and serum ferritin should be performed if anemia is suspected" and the study dose of 3 mg/kg/day for 12 weeks. 3 x 11 = 33 mg, 11 mg = 1 mg/kg and 165 mg = 15 mg/kg.
- 52 q1: one defensible key. Each distractor is rejected with a stem fact.
- 52 q2: the JAMP monograph (downloaded and searched) says "Metoclopramide should not be used in epileptics". Ondansetron 4 mg IV is the single best choice among the options. Domperidone is oral only in Canada, so the reason given is true.
- 52 q3: one defensible key. Every distractor contradicts Epilepsy Action's advice (padded mats on the floor, no feeding while standing, a pram for longer distances).
- 52 q4: unchanged key, correct (Sandoz: an alternative "when oral administration is temporarily not feasible").

## Physician-level items (not grounds for failure)

1. 51 q3 (iron, KF1), 48 q4 (recurrence counselling, KF5) and 48 q2 (vaccines, KF8) carry loose key feature tags. No seizures key feature fits them exactly.
2. Non-Canadian sources: Am Fam Physician 2020, MedlinePlus 2024 and Epilepsy Action 2026. No Canadian guidance on these points was found by the writer or this reviewer.
3. 50 q2 and 52 q3 both ask for "the most appropriate safety advice". The populations and keys differ (a child's sleep, a parent bathing an infant), so this is breadth across KF5, but it is the same angle twice in one batch.
4. 52 q3: the key "Bathe him only with another adult present" sits next to its near opposite "Bathe him alone in shallow water", a mild pair cue (SCORING-RULINGS B5 spirit). Low concern.
5. 51 q1: the lead-in says "features of his history", but the option "Pallor on examination" is an examination finding. The explanation's "pallor can be seen with either" refers to pallor during a spell, not the anemic pallor in the stem. Minor wording. A writer may tidy it while fixing q4.
6. 49 q2 is a recall item (a 5-minute interval). It is acceptable under KF3 or KF4, but its value is modest.
7. Writer flags 2 and 4 to 9 are resolved in the table above.

## Key feature coverage

| KF | Items now | After this review |
|---|---|---|
| 1 | 50 q1, 51 q1, 51 q3 | Covered |
| 2 | 51 q4 | Uncovered (51 q4 fails) |
| 3 | 49 q2 | Covered (move to KF4 if the suggested route is taken, then KF3 needs a new item) |
| 4 | 49 q3 | Uncovered (49 q3 fails) |
| 5 | 48 q3, 48 q4, 50 q2, 52 q3 | Covered |
| 6 | 49 q4, 50 q3, 51 q2 | Covered |
| 7 | 50 q4, 52 q1, 52 q2, 52 q4 | Covered |
| 8 | 48 q1, 48 q2, 49 q1 | Covered |

## Sources verified this round

- McKenzie KC et al., CPS. Emergency management of the paediatric patient with convulsive status epilepticus. 2021. https://academic.oup.com/pch/article/26/1/50/6125966 (DOI in file resolves). Confirms the midazolam dose and maximum, the 5-minute repeat, second-line drugs after two doses, phenobarbital possibly preferred under 6 months, and more respiratory depression beyond two doses. Silent on loading after cessation.
- Brophy GM et al. Guidelines for the evaluation and management of status epilepticus. Neurocrit Care. 2012. Text read from https://ceribell.com/wp-content/uploads/2023/10/Brophy-171-p3-23-Neurocrit-Care-2012-2.pdf. Urgent control therapy is required in all SE patients unless the cause is corrected.
- Saguil A, Servey J. Am Fam Physician. 2020. https://www.aafp.org/pubs/afp/issues/2020/0415/p497.html. Opened. The factors and percentages match.
- MedlinePlus. Epilepsy in children, discharge. https://medlineplus.gov/ency/patientinstructions/000127.htm. Opened, review date 19 August 2024. The top bunk, supervised swimming and sleep points match.
- ILAE EpilepsyDiagnosis.org SeLECTS overview. https://epilepsydiagnosis.org/syndrome/ects-overview.html. Opened, last updated 30 June 2024. The DEE-SWAS and sleep EEG points and "Seizures cease by puberty" match.
- Leung AKC et al. Curr Pediatr Rev. 2019. https://pmc.ncbi.nlm.nih.gov/articles/PMC6696822/. Opened. Triggers, ECG "may be considered", iron 3 mg/kg/day for 12 weeks, and CBC and ferritin.
- Epilepsy Action. Looking after a baby or young child when you have epilepsy. https://www.epilepsy.org.uk/info/caring-children. Opened, published April 2026. Every point used matches.
- JAMP metoclopramide injection monograph. https://pdf.hres.ca/dpd_pm/00070463.PDF. Downloaded. The epilepsy contraindication is confirmed.
- Sandoz levetiracetam injection monograph. https://pdf.hres.ca/dpd_pm/00083259.PDF. Downloaded. The pregnancy level fall (up to 60%) and IV use when oral dosing is not feasible are confirmed.
- Unchanged and verified in round 1: AAP 2011, CIG measles chapter, PHAC AEFI guide and ILAE SeLECTS criteria page.

## Summary

Five SAMPs and 20 questions. 1 SAMP passes (seizures-52) and 4 fail. 16 questions pass and 4 fail.

The four required fixes:
- 48 q4: the stem lacks the family history and fever duration that the explanation's recurrence count needs.
- 49 q3: "no further anticonvulsant" is not the single defensible answer in febrile infant status under the NCS 2012 guideline, and it is not KF4 because the seizure has stopped.
- 50 q4: an unrequested addition that cues q1 in mock mode.
- 51 q4: repeats the signed ECG decision of seizures-07 and seizures-31, with the same lead-in as seizures-31 q2.

The batch also fails key feature coverage, with KF2 and KF4 uncovered. All round 1 repetition fixes in seizures-52 were applied well, and no D1 repeat is claimed. The fixes go back to a writer, and the revision needs a fresh independent review.
