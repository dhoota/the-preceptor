# Q500 verify report: s61, Seizures

Fresh independent review by Preceptor of the whole final text of `src/samps/s61/seizures.ts` (seizures-48 to seizures-52). The reviewer did not write or edit this batch. The first QA round edited the file in place and rebuilt seizures-52, which breaks REVIEW-RULES rule 1, so the current file is treated as a writer revision. Nothing was edited in this round. Both lenses were applied, and every key decision was checked against the bank catalogue (`scratchpad/q500/catalog/seizures.md`, `loc.md`) and the oral cases. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| seizures-48 | FAIL | PASS | PASS | PASS | FAIL |
| seizures-49 | FAIL | PASS | FAIL | FAIL | PASS |
| seizures-50 | FAIL | PASS | FAIL | PASS | |
| seizures-51 | FAIL | PASS | FAIL | PASS | |
| seizures-52 | FAIL | FAIL | FAIL | FAIL | PASS |

No SAMP passes as a whole. No keyed answer is clinically wrong and every dose recomputes. The failures are repetition of signed SAMPs and oral cases, the D1 claim in seizures-52, one cue and one key feature mapping.

Batch tests run by the reviewer: `SAMP_BATCH=s61 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (120 of 120). No em or en dashes or semicolons were found in content strings.

## seizures-52 and D1

The first QA rebuilt seizures-52 because it duplicated loc-05 (signed), and it named q3 as a D1 repeat ("escalate anticonvulsants stepwise", levetiracetam 60 mg/kg after benzodiazepines). That claim is not permitted:

1. REVIEW-RULES rule 3 (keeper rule): "A D1 repeat that echoes the keeper of the SAMP's own duplicate cluster fails. A rebuild must not retell its keeper." loc-05 is the keeper of this SAMP's cluster, and loc-05 q3 keys lorazepam 4 mg IV and levetiracetam 60 mg/kg (maximum 4 500 mg) against an underdosed "fosphenytoin 10 mg PE/kg". seizures-52 q2 and q3 key lorazepam 4 mg IV, then levetiracetam 60 mg/kg against an underdosed "fosphenytoin 580 mg PE IV" (10 mg PE/kg). That is the keeper's decision and its menu design.
2. REVIEW-RULES rule 5 and docs/DECISIONS.md: the D1 table holds 19 rows and is frozen at 20. A row is added by the product owner when a rebuild group lands, not by a reviewer, and s70 (anaphylaxis-49 q3) already competes for the last slot. A reviewer cannot grant it.
3. The decision is not rare. Levetiracetam 60 mg/kg or fosphenytoin 20 mg PE/kg after two benzodiazepines is keyed in seizures-01, seizures-02 and seizures-14 (s16), seizures-16, -17 and others (s49), loc-05, the s32 loc menu and the oral case "A baby who will not stop shaking".

Is the rewrite genuinely distinct from loc-05? No. It is still a woman with known epilepsy on levetiracetam with repeated generalized convulsions without recovery, a lorazepam 4 mg dose and a levetiracetam 60 mg/kg load against underdosed second-line distractors. Its q3 update ("The convulsion stops 2 minutes after the lorazepam. Fifteen minutes later, before she has woken, another convulsion begins") is also a near copy of signed seizures-16 q4 ("The seizure stops 2 minutes after treatment. Fifteen minutes later, before he has regained awareness, another generalized seizure begins"). Only the vomiting cause and q4 (IV levetiracetam maintenance) are new.

## Required fixes

### seizures-48

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | whole question | "Which of the following is the most appropriate plan to prevent or treat future febrile seizures at home?" Key "No antiseizure medication", distractors daily phenobarbital, intermittent diazepam, scheduled ibuprofen | Signed seizures-11 (s16) already teaches this: q4 marks "Start daily anticonvulsant prophylaxis" unacceptable with "Daily or intermittent anticonvulsants are not recommended", and q3 states "Antipyretics improve comfort but do not prevent febrile seizures". Replace with a decision not in the bank that fits the vaccine angle, for example a KF8 or KF5 item on what the AEFI report or the next vaccine visit involves, sourced to the Canadian Immunization Guide. | `src/samps/s16/seizures.ts` seizures-11 q3 and q4 | Medium |

Not required but noted: q2 (continue vaccines) is tagged KF8, whose wording is diagnosis by history and examination without over-investigation. The vaccine decision does not test that. It is new to the bank and is kept, but the physician should know the tag is loose.

### seizures-49

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | whole question | Update "a second generalized convulsion. He had not woken fully between the two seizures." Prompt "Which of the following terms best describes his condition after the second convulsion?" Key "Convulsive status epilepticus", explanation "whatever the length of each seizure" | Same lead-in, key and explanation as signed seizures-16 q4 (s49): "Which of the following terms best describes his condition at this point?", key "Convulsive status epilepticus", "Two seizures without a return of awareness between them is convulsive status epilepticus, whatever the length of each seizure". Replace with a KF3 decision not in the bank (for example a treatment step specific to a 4-month-old that the bank does not key). | `src/samps/s49/seizures.ts` seizures-16 q4 | High |
| q3 | whole question | Hypoventilation after two midazolam doses, key "Bag-valve-mask ventilation", intubation if breathing does not return | The oral case pediatric-status-epilepticus (batch06, "A baby who will not stop shaking", q-airway) teaches the same step in an infant after benzodiazepines: assisted bag mask ventilation, most post-ictal hypoventilation resolves in minutes, intubate if it persists. seizures-01 q1 (s16) also accepts bag-valve-mask ventilation. Replace with a KF4 decision not in the bank, for example a condition that needs treatment other than standard anticonvulsants in a febrile infant, sourced to CPS 2021. | `src/cases/batch06` pediatric-status-epilepticus, q-airway | Medium |

### seizures-50

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | prompt and whole question | "Which of the following features of his events most strongly suggests seizures rather than a sleep disorder?" | In mock mode this lead-in tells the candidate that q1's answer is a seizure, and "Self-limited focal epilepsy" is the only seizure option in q1 (SCORING-RULINGS B6). If q2 is moved first, it gives q1 away in normal order (B7). Both questions also test the same recognition. Replace q2 with a different decision, for example a KF5 counselling item (no driving rule applies at 8 years, so a school or sleep safety point, or which families need treatment), or a KF1 item that does not presuppose a seizure. The first QA's residual item is upheld. | SCORING-RULINGS B6 and B7. ILAE SeLECTS criteria page | Medium |

### seizures-51

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | keyFeature | Key "Hemoglobin and ferritin", tagged seizures KF2 | KF2 is "investigate for rapidly reversible causes (e.g., hypoglycemia, toxicology, arrhythmias) and treat promptly". Iron deficiency in a breath-holding spell is not a rapidly reversible cause of a seizure, and q3 carries the same tag. With these two removed, KF2 has no honest item in the batch. Either add or reframe one question so that it tests a rapidly reversible cause or a dangerous mimic of seizure (for example an ECG to look for a long QT interval when a spell is atypical, if the cited review supports it), or have the physician accept iron as KF2. The clinical content of q2 and q3 is correct. | SAMP_REVIEW_BRIEF Lens B 9. em_kf.json seizures KF2 | Low |

### seizures-52

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q1 | whole question | "Which of the following best describes her seizure state at this point?" Key "Recurrent seizures without status" | Tests the same definition as 49 q2 in its mirror form (a repeated angle within the batch), and signed seizures-16 q4 already states "Clustered seizures with recovery between them would not meet the definition". Replace with a decision not in the bank. | seizures-16 q4 (s49). Q500_BRIEF rule 3 | Medium |
| q2 | whole question | "A convulsion that has lasted 6 minutes ... lorazepam 4 mg IV", "0.1 mg/kg is 5.8 mg ... the 4 mg maximum applies" | Same decision as signed seizures-16 q3 ("lorazepam 0.1 mg/kg is capped at 4 mg for his 84 kg" at 5 minutes) and loc-05 q3 (lorazepam 4 mg key, the keeper). Replace. | seizures-16 (s49), loc-05 (s07) | High |
| q3 | whole question and D1 claim | Menu key "fosphenytoin 1 160 mg PE IV" and "levetiracetam 3 480 mg IV". Update "The convulsion stops 2 minutes after the lorazepam. Fifteen minutes later, before she has woken ..." | Fails the keeper rule and D1 (see the section above). The update is a near copy of seizures-16 q4 and also names q2's key "lorazepam 4 mg IV" (B6). Replace with a KF4 decision not keyed in the bank. Do not claim D1. The arithmetic is correct (58 x 60 = 3 480 mg, 58 x 20 = 1 160 mg PE, 58 x 10 = 580). | REVIEW-RULES rules 3 and 5. docs/DECISIONS.md D1. loc-05 q3 | High |

The rebuild should keep the vomiting illness and q4, and move the scenario away from the convulsive status sequence. KF3 needs at least one honest item after 49 q2, 52 q1 and 52 q2 change.

## First QA changes and residual items judged

| Item | Verdict |
|---|---|
| 48 q3 lumbar puncture in place of urine culture | Acceptable. Key indexes 5 and 6 match "Report the event to public health" and "Teach seizure first aid". |
| 49 q4 update (soft fontanelle, no focal signs) | Acceptable. Supports the explanation. |
| seizures-52 rebuild | Fails, see above. |
| Residual: lorazepam 0.1 mg/kg maximum 4 mg | Correct (AES 2016, also used in signed seizures-16). Moot for 52 q2, which fails on repetition. |
| Residual: "Recurrent seizures without status" wording | Moot. 52 q1 fails. |
| Residual: 50 q1 and q2 test the same recognition | Upheld as a defect. See 50 q2. |

## Checks with no change needed

- 48 q1 to q3: diagnosis, vaccine continuation and AEFI reporting are correct. The vaccine angle is new to the bank (s70 anaphylaxis-49 has an MMR question, but for egg allergy). Fever 6 to 23 days after a measles-containing vaccine is in the CIG.
- 49 q1: the 6-month lower age limit for simple febrile seizures is not keyed elsewhere. 49 q4: lumbar puncture in a febrile 4-month-old after status, with antibiotics first, is correct (CPS 2021).
- 50 q1 and q3: SeLECTS is new to the bank. The ILAE page confirms seizures within 1 hour of falling asleep or 1 to 2 hours before waking, and "An MRI is not required".
- 51: breath-holding spells are new to the bank. Iron 3 mg/kg/day x 11 kg = 33 mg. 11 mg = 1 mg/kg and 165 mg = 15 mg/kg are correct.
- 52 q4: IV levetiracetam at the same total daily dose while vomiting is new and correct (Sandoz monograph).
- Fosphenytoin is marketed in Canada (Cerebyx, DIN 02230988, past shortages resolved), so the option is a Canadian product.
- Midazolam 0.7 mg for 6.8 kg = 0.1 mg/kg. Naloxone 0.07 mg = 0.01 mg/kg.

## Sources verified

- ILAE EpilepsyDiagnosis.org SeLECTS diagnostic criteria. https://epilepsydiagnosis.org/syndrome/ects-diagcriteria.html opened. Supports 50 q1 and q3.
- Fosphenytoin in Canada: Drug Shortages Canada, Cerebyx report. https://healthproductshortages.ca/shortage/189469
- AAP 2011, Cochrane 2021, CIG measles, PHAC AEFI guide, CPS 2021, AES 2016, ESETT 2019, Leung 2019 and the Sandoz monograph were opened by the writer or first QA. Their URLs resolve to the named documents. The `aapLong` and `specchio` entries in the source table are not cited by any question and are not shown, which is harmless.

## Key feature coverage after fixes

Current tags: KF1 3, KF2 2, KF3 3, KF4 2, KF5 1, KF6 2, KF7 1, KF8 4. After the fixes KF3 (49 q2, 52 q1, 52 q2) and KF4 (49 q3, 52 q3) lose every current item, and KF2 has no honest item. The replacements must restore all three.

## Summary

Five SAMPs, all fail, with 9 required fixes. Seven are repetition: 48 q4 (seizures-11), 49 q2 (seizures-16 q4), 49 q3 (oral case pediatric-status-epilepticus), and 52 q1 to q3, which still retell the keeper loc-05 and the signed seizures-16 sequence. The D1 claim on 52 q3 is not permitted under REVIEW-RULES rules 3 and 5. One is a mock-mode cue (50 q2) and one a key feature mapping (51 q2 and q3, KF2). No keyed answer is clinically wrong. The fixes go back to a writer, and the revision needs a fresh independent review.
