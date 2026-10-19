# Q500 verify report, round 3: s61, Seizures

This is a fresh independent review of the whole final text of `src/samps/s61/seizures.ts` (seizures-48 to seizures-52) after the writer's round 3 revision ("Round 3" in `docs/reviews/q500-writer-s61-r2.md`). It was checked against the round 2 verdict `docs/reviews/q500-verify2-s61.md` and the diff from d7c63c6. The reviewer did not write or edit this batch and edited no file other than this one (REVIEW-RULES rule 1). It is an AI audit, not clinician verification. All items stay `reviewed: false`.

Both lenses were applied. New keys were checked against the catalogues `seizures.md`, `loc.md`, `pediatric-fever.md` (and `analgesia-sedation.md` and `airway.md` for monitoring keys) and by grep over `src/samps` and `src/cases`.

Batch tests: `SAMP_BATCH=s61 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 132 of 132, including the near-duplicate stem check. Content strings have no em or en dashes and no semicolons. Spelling is Canadian.

Single-question keys now sit 4, 4, 4, 4, 4 across positions 0 to 4 (20 singles, one menu). If 50 q5 is removed as required below, position 1 drops to 3 and no position exceeds 21%.

seizures-52 is byte for byte unchanged from round 2, where it passed.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| seizures-48 | PASS | PASS | PASS | PASS | PASS | |
| seizures-49 | PASS | PASS | PASS | PASS | PASS | |
| seizures-50 | FAIL | PASS | PASS | PASS | FAIL | FAIL |
| seizures-51 | PASS | PASS | PASS | PASS | PASS | |
| seizures-52 | PASS (unchanged) | PASS | PASS | PASS | PASS | |

Key feature coverage fails on KF3. Its only item, 50 q5, fails. Every other key feature is covered (table below).

## Round 2 required fixes: were they applied?

| Round 2 fix | Applied? | Comment |
|---|---|---|
| 48 q4, stem gap | Yes | The stem now gives fever onset "about 6 hours before the seizure" and "no family history of febrile seizures or epilepsy". Recount: age under 18 months (13 months) yes, temperature under 40°C (39.3°C) yes, fever under 1 hour no, family history no. Two of four, about 32% (Saguil and Servey AFP 2020 table: 0 to 4 factors give 13%, 23%, 32%, 62%, 76%). The explanation now shows the count. Key and options unchanged. Passes. |
| 49 q3, key and KF4 tag | Yes | q2 retagged KF4 and q3 replaced with a monitoring decision in an actively convulsing infant. Passes (see notes). |
| 50 q4, mock-mode cue | Yes, the cue is gone | "His neurologist" and the syndrome-defining options are gone. The rewrite brings in two new problems. See the 50 q4 fix. |
| 51 q4, ECG repeat | Yes | Reframed to recognising the red flag, as round 2 suggested. Passes (see notes). |
| KF2 and KF4 coverage | KF2 and KF4 yes. KF3 moved to a new 50 q5, which fails | See the 50 q5 fix |

## Required fixes

### seizures-50

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q5 | whole question (new, KF3) | "Which of the following durations of a seizure with impaired awareness and no convulsive movements defines status epilepticus?" Options 5, 10, 20, 30, 60 minutes, key "10 minutes", source Trinka 2015 | Two problems. (1) Repeated teaching point (Q500_BRIEF rule 3). Signed seizures-23 q1 (s49, `reviewed: true`) asks for the ILAE t1 duration, with options "1 minute", "2 minutes", "5 minutes", "10 minutes", "30 minutes", cites the same Trinka 2015 report and is also tagged KF3. Its explanation says word for word: "Ten minutes is t1 for focal status with impaired awareness, not for convulsive seizures." 50 q5 keys the other row of the same ILAE table with nearly the same option set. The writer's grep checked keys but not this explanation. It is not a recorded D1 entry, and D1 is frozen at 20. (2) It is not tied to the case. The boy's events lasted 90 seconds with preserved contact ("nodded to their questions and squeezed his mother's hand"), so a threshold for seizures with impaired awareness is not a decision about him. Required: remove q5 and the `trinka` source (from `S` and from `sources`). Cover KF3 one of two ways. (a) Preferred, and accepted in advance by this reviewer: retag 49 q2 back to KF3. It passed as KF3 in round 2, and timing the second benzodiazepine is "treat promptly" in KF3. KF4 then stays covered by 49 q3, whose honest KF4 tag (supporting breathing in an actively seizing patient) this review accepts. (b) Or write a new KF3 decision about a patient in this batch that no catalogue keys and no explanation in the bank teaches, then report it for review. | seizures-23 q1 in `src/samps/s49/seizures.ts`. Trinka 2015 values confirmed (below) | High |
| q4 | prompt and explanation | Prompt: "Which of the following findings at a follow-up visit would most warrant urgent further assessment?" Explanation: "An occasional further event, one brought on by a fever or by a short night's sleep, and tiredness the next morning are expected in his condition and do not by themselves call for new tests." | (1) "Urgent" overstates the source and weakens the single key. The ILAE overview says only that if cognitive or language deterioration occurs, a sleep EEG should be considered. A candidate who reads "urgent" in an ED frame can defend "An event during a febrile illness" (rule out CNS infection). Round 2 used "prompt". Change "urgent further assessment" to "further assessment" or "prompt further assessment". Do not name the EEG in the prompt, because q3's key is "Sleep EEG recording" (SCORING-RULINGS B6). (2) The distractor reasons do not trace to a cited source (SAMP_SPEC section 8). The ILAE overview says nothing about fever or sleep loss as triggers or about tiredness after a seizure. The cited MedlinePlus page mentions only flashing lights as triggers. Either add a real, verified source that supports fever and sleep loss as common triggers and tiredness after a seizure (and list it, keeping the SAMP at 4 sources or fewer), or reword each reason to what the cited sources support. For example, say that the ILAE overview names language or cognitive decline as the change that calls for a sleep EEG, and that a further brief seizure while the syndrome is active does not by itself point to a new process. Keep the key and options. | ILAE EpilepsyDiagnosis.org SeLECTS overview (opened this round). MedlinePlus 000127 (opened this round) | Medium |

## Writer's flagged points, judged

| # | Writer flag | Verdict |
|---|---|---|
| 1 | KF3 in 50 q5 rather than 49 q3 | Not acceptable. 50 q5 repeats the teaching point of signed seizures-23 q1 and is not about this patient. See the 50 q5 fix. Route (a) there closes KF3 without new content. |
| 2 | 49 q3 key "Pulse oximetry and respiratory rate" against seizures-01 q1 | Accepted. seizures-01 q1 is a write-in list of airway interventions, with "Continuous capnography and oximetry monitoring" as one of seven items. 49 q3 is a single best choice of monitoring in an infant still convulsing after a second benzodiazepine dose, against EEG, glucose, BP and neurological checks. The nearest other key, analgesia-sedation-31 q3 ("Pulse oximetry until back to baseline" after intranasal midazolam for a laceration repair), is a different setting and decision. Low concern, listed for the physician. |
| 3 | Trinka 2015 confirmed through a secondary source | Confirmed through a second, peer-reviewed reproduction of the ILAE table. The values in 50 q5 are accurate. The question fails on repetition, not accuracy. |

## Other changes judged (rule 4)

| Change | Verdict |
|---|---|
| 49 q4 update now opens "The convulsion stops after the second dose." | Acceptable. It does not reveal q2's time (10:07) or q3's key. |
| 49 q3 update ("He is still convulsing when the second dose of midazolam is given") | Acceptable. It restates q2's premise and gives no time, so q2 is not cued. |
| 51 q1 lead-in "features of his presentation" | Acceptable. It now fits "Pallor on examination" (SCORING-RULINGS B8). |
| 51 q4 update removed | Acceptable. q4 is now a question about a future spell and needs no new facts. |

## Per-question notes (passes)

- 48 q1 to q3: unchanged apart from the stem. "Since this morning" was replaced by fever onset 6 hours before the seizure, and q1 to q3 do not depend on the old wording. Menu indexes 5 and 6 are still "Report the event to public health" and "Teach seizure first aid".
- 48 q4: see the round 2 fix table above. The arithmetic and the factor count match the stem.
- 49 q2: unchanged text. KF4 ("escalate anticonvulsants stepwise") is honest, and so is KF3. If route (a) is taken, the KF3 retag is accepted in advance.
- 49 q3: one defensible key. CPS 2021 (opened this round): "During the administration of medications, continuous cardio-respiratory monitoring is advised" and "use cardiorespiratory and oxygen saturation monitors". It also says that more than two benzodiazepine doses raise the risk of respiratory depression, and that midazolam carries that risk. The EEG reason is true: CPS keeps EEG for a child whose consciousness "does not recover as expected" or who is paralyzed. The glucose reason traces to the stem (5.2 mmol/L). BP every 15 minutes and hourly checks are rightly too infrequent. KF4 (support breathing in an actively seizing patient) is honest. Every option is a monitoring noun phrase, and the key is not the longest.
- 49 q1 and q4: unchanged, correct.
- 50 q1 to q3: unchanged, correct. No remaining question names or describes the syndrome.
- 51 q4: one defensible key. Leung 2019: precipitating factors are almost always present, minor injury and frustration are typical triggers, and cardiac arrhythmias are a rare cause of pallid spells. Each distractor reason is a typical spell feature. The explanation no longer says every pallid spell needs an ECG. KF2 (search for an arrhythmia as a reversible cause) is honest. Uniqueness: seizures-07 q1 keys exertion or a sudden noise as cardiac-syncope features in a teen. Onset at rest with no trigger as the red flag in a breath-holding toddler is not keyed in the seizures, loc or pediatric-fever catalogues, and grep found it nowhere else in the bank.
- 51 q1 to q3: correct, as in round 2.
- 52 q1 to q4: unchanged and passed in round 2.

## Physician-level items (not grounds for failure)

1. Loose tags carried from round 2: 51 q3 (iron, KF1), 48 q4 (recurrence counselling, KF5) and 48 q2 (vaccines, KF8).
2. Non-Canadian sources: Am Fam Physician 2020, MedlinePlus 2024 and Epilepsy Action 2026, as in round 2.
3. 49 q3 and analgesia-sedation-31 q3 both teach oximetry after a benzodiazepine, in different settings with different decisions.
4. 50 q2 and 52 q3 both ask for "the most appropriate safety advice", as in round 2.

## Key feature coverage

| KF | Items now | After this review |
|---|---|---|
| 1 | 50 q1, 51 q1, 51 q3 | Covered |
| 2 | 51 q4 | Covered |
| 3 | 50 q5 | Uncovered (50 q5 fails). Route (a): 49 q2 |
| 4 | 49 q2, 49 q3 | Covered (49 q3 alone under route (a)) |
| 5 | 48 q3, 48 q4, 50 q2, 52 q3 | Covered |
| 6 | 49 q4, 50 q3, 51 q2 | Covered |
| 7 | 50 q4, 52 q1, 52 q2, 52 q4 | Covered |
| 8 | 48 q1, 48 q2, 49 q1 | Covered |

## Sources verified this round

- McKenzie KC et al., CPS. Emergency management of the paediatric patient with convulsive status epilepticus. 2021. https://academic.oup.com/pch/article/26/1/50/6125966. Opened. Confirms continuous cardiorespiratory and oxygen saturation monitoring, higher respiratory depression risk beyond two benzodiazepine doses, and EEG for failure to recover or paralysis.
- Trinka E et al. A definition and classification of status epilepticus. Epilepsia. 2015;56(10):1515 to 1523. The DOI resolves (Europe PMC record PMID 26336950). Wiley returned 403. The t1 and t2 table was read from the Europe PMC full text of PMC8292065 ("An Insight into the Current Understanding of Status Epilepticus: From Concept to Management", Table 1, attributed to the ILAE report). It gives tonic-clonic 5 and 30 minutes, focal with impaired consciousness 10 and more than 60 minutes, and absence 10 to 15 minutes and unknown. The Dutch national guideline (richtlijnendatabase.nl) confirms 5 and 30 minutes for convulsive status from Trinka.
- ILAE EpilepsyDiagnosis.org SeLECTS overview. https://epilepsydiagnosis.org/syndrome/ects-overview.html. Opened. Supports a sleep EEG for cognitive or language deterioration (DEE-SWAS). It does not mention fever or sleep loss as triggers or tiredness after seizures.
- MedlinePlus. Epilepsy in children, discharge. https://medlineplus.gov/ency/patientinstructions/000127.htm. Opened. The only trigger named is flashing lights or patterns.
- Saguil A, Servey J. Am Fam Physician. 2020. Verified in round 2. The 48 q4 count was recomputed this round against the new stem.
- Leung AKC et al. Curr Pediatr Rev. 2019. Verified in round 2. The points used in the new 51 q4 match.

## Summary

Five SAMPs and 21 questions. 4 SAMPs pass (seizures-48, 49, 51 and 52) and 1 fails (seizures-50). 19 questions pass and 2 fail.

The required fixes:
- 50 q5: repeats the ILAE t1 teaching point of signed seizures-23 q1 (same table, same source, same KF3, near-identical options) and is not about this patient. Remove it and the Trinka source, and cover KF3 by retagging 49 q2 to KF3 (accepted in advance) or with a new KF3 decision.
- 50 q4: drop "urgent" from the prompt, and give the distractor reasons (fever, sleep loss, tiredness after a seizure) a cited source or reword them to what the cited sources say.

All round 2 fixes to 48 q4, 49 q3 and 51 q4 were applied well, and 52 is unchanged. The batch does not yet pass. The fixes go back to a writer, and the revision needs a fresh independent review limited to seizures-50, the 49 q2 tag and key feature coverage.
