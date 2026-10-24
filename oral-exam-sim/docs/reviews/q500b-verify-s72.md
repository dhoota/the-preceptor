# Q500B verification review: s72, Suicide risk (revision 1)

Batch: `src/samps/s72/suicide-risk.ts`, suicide-risk-39 to suicide-risk-43 (5 SAMPs, 20 questions, 17 single and 3 menu). First review: `docs/reviews/q500b-qa-s72.md`. Writer report with "Revision 1": `docs/reviews/q500b-writer-s72.md`.

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before. Under REVIEW-RULES rule 1 I changed no file except this one. I reviewed the whole final batch, not only the changed items, under Lenses A and B of `docs/SAMP_REVIEW_BRIEF.md`. Every SAMP stays `reviewed: false`.

## Tests

`SAMP_BATCH=s72 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests, all passed. The bank-wide near duplicate stem test took about 6 seconds. Passing tests do not cover the defects below.

## Sources re-verified in this pass

| Source id | Checked at | Result |
|---|---|---|
| mb-mha | https://web2.gov.mb.ca/laws/statutes/ccsm/m110.php (current as of October 22, 2026) and https://web2.gov.mb.ca/laws/statutes/2026/c01326.php?lang=en | Verified. S.M. 2026, c. 13 is in force from October 1, 2026, except ss. 2(2) and 18(2). The legislative history on the consolidated Act states "s. 2(2) and 18(2) to come into force: 1 Nov. 2026 (proclamation published: 9 Oct. 2026)", so the November 1, 2026 date for nurse practitioners in 40 q3 is correct. Sections 8(1), 8(1.1), 8(3) (two days), 8(4) (personally examined, date, observed facts), 9(1) (peace officer, 72 hours, psychiatrist assessment), 12(1), 13(1) (24 hours for s. 11 or 12) and 20(2) all match the explanations. |
| cps-youth-2015 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4472054/ | Verified for the revised 39 q2: "Clinicians should ask adolescents if their self-harm behaviours are made with intent to cope with emotional pain or with suicidal intent", and the intent questions include "Do you want to end your life?". Access to means "(eg, firearms, medications)" and trusted adults also verified. The statement leaves disposition to the paediatrician after evaluating the adolescent, family and resources, and says outpatients need "mental health follow-up care". |
| ccsmh-suicide | https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf (PDF text extracted) | Verified for 43 q2: Waern and colleagues found three quarters had told relatives or friends of a wish to die in the year before, and "only 38% had discussed these thoughts with a healthcare professional". Also verified: older adults "may avoid volunteering depressive and suicidal symptoms", somatic presentation, "The majority of older adults who die by suicide do not have severe or terminal physical illness", equivocal behaviour in the risk factor list, and Milton 1999 (family physicians often unaware). |
| nice-ng225 | https://www.nice.org.uk/guidance/ng225/chapter/Recommendations (read with curl) | Verified: 1.6.2 and 1.6.4 (no risk tools or low, medium and high labels to decide discharge), 1.7.8 (in primary care, regular GP review of the self-harm and a medicines review), 1.10.2, 1.11.7, 1.13.2. |
| kouyoumdjian-custody | https://pmc.ncbi.nlm.nih.gov/articles/PMC4933645/ | Verified: suicide 2.3 per 1000 person-years in the first 4 weeks against 0.4 after 52 weeks, suicide SMR 14.0 in the first 2 weeks (24.2 in weeks 2 to 4), overdose SMR 56.0 in the first 2 weeks, SMR 4.3 overall "for suicide and self-inflicted injury". The revised 42 q1 sentence is supported. |
| dc-t1d-peds, beck-hopelessness, sullivan-idd, phac-988, oliva-opioid-stop | Verified in the first review | Not changed by the revision. I rechecked the claims that rest on them against the stems and found no new problem. |

## First-review fails: resolution

| Item | First-review fail | Resolved? |
|---|---|---|
| 39 stem | Near duplicate of abuse-domestic-41 | Yes. The third-DKA, ran-out-of-insulin frame is gone. Presentation (faint at volleyball), gas (pH 7.28, bicarbonate 15), vitals and clues (HbA1c, refills, meter, weight loss) no longer match s67 abuse-domestic-41. No other insulin omission item exists in `src/samps` or `src/cases` (grep for insulin omission, skips insulin, diabulimia, glucose meter, HbA1c, refills). |
| 39 q2 | Insulin self-harm claim unsourced | Yes. The explanation now rests on the verified CPS intent text. |
| 40 q2 | Grammar cue | Yes. Noun phrase key, still last. It is now the longest option. B1 allows this here because "unwillingness ... voluntary assessment" is the statutory criterion, and the batch rate is 2 of 17. |
| 40 q3 | Out-of-date legal statement, "recent plan" | Yes. Stem and explanation now say "not a nurse practitioner" and give the correct November 1, 2026 date. The "recent plan" claim is gone. |
| 40 q4 | Mock-mode cue | Yes. "You complete the application" is removed. The remaining hint that an application exists is inherent and flagged only. |
| 41 q3 | Cue to q4, wrong source | Yes. The lorazepam distractor and sedative sentence are gone. Source is `sullivan-idd`, with guidelines 2.3 and 30.2 named. Options stay alphabetical. |
| 42 q1 | Unsupported distractor reason | Partly. The unsupported custody claim is gone and the SMR 4.3 sentence is verified. The replacement distractor creates a new cue (see 42 q1 below). |
| 42 q3 | Shelter phone not in the stem | Yes. The stem now says the shelter has a phone residents may use. |
| 42 q4 | Inconsistent services | Yes. "The community mental health clinic" is used in q2 and q4. |
| 43 q1 | "Abrupt" not in the stem | Yes. The stem says "stopped it abruptly". |
| 43 q2 | Repeat of s17-02 q3, defensible distractor | The old question is gone, but the replacement repeats another s17-02 question (see 43 q2 below). |
| 43 q3 | Overlap with s17-10, B6 cue | Yes. The new disclosure names no q1 feature. The new discharge letter decision is not keyed elsewhere (writer open point 2, see below). |
| 43 q4 | Overlap with s17-10 | The opioid overlap is gone, but the replacement repeats 9-8-8 (see 43 q4 below). |

## Writer's "still open" points

1. 43 q4 and D1. Not accepted. See 43 q4. D1 is frozen at 20 (docs/DECISIONS.md, running total 19), and in any case the repeat here is also a repeat within this batch (42 q3), which D1 does not cover.
2. 43 q3 against s17 "Going home to the farm" and s52 "Discharge summary sent to her doctor". Accepted. s17 keys "communication with his family physician" as one of nine write-in components, and s52 uses a discharge summary as a wrong option against caring letters. Neither tests what the letter must say. 43 q3 does not contradict s52, because s52 rejects the summary only as an intervention shown to lower suicide.
3. 39 q1 to q2 mock-mode flag. Accepted as inherent (B6, flag only). The same inherent B6 hint applies to 41 q2 (the q3 prompt "his discharge plan" implies discharge) and 42 q2 (the q3 prompt "his outpatient plan before he leaves"). Neither later question can work without the fact, so these are flagged only.

## Verdicts by SAMP and question

### suicide-risk-39, "A meter used on three days": FAIL (2 items)

- Stem: PASS. Numbers are internally consistent (glucose 24, pH 7.28, bicarbonate 15, beta-hydroxybutyrate 3.4 is mild DKA, which the stem calls ketosis). Father throughout.
- q1: FAIL (low, distractor reason partly untrue, Lens A2). "Heat-damaged insulin and poor needle technique give erratic glucose but would not explain an unused meter and weight loss." Any cause of months of under-insulinization, including degraded insulin, causes weight loss through glycosuria, so the weight-loss half of the reason is not true. Fix: change the sentence to "Heat-damaged insulin and poor needle technique give erratic glucose but would not explain a meter left unused on all but 3 days of the month." Keep the key.
- q2: PASS. CPS intent text verified. Key not cued by length.
- q3: PASS. CPS means text verified. "A large dose can cause fatal hypoglycemia" is a plain pharmacological fact and does not need a citation.
- q4: FAIL (low to medium, clinical accuracy of the scenario, Lens A1). The update sends a 16-year-old home the morning after she disclosed repeated nights of omitting insulin "hoping she would not wake up", with hopelessness ("things will never get better") and an active eating disorder, and no mental health assessment is mentioned. The only follow-up named is the eating disorder program. CPS 2015 asks for "mental health follow-up care" for outpatients, and Canadian paediatric emergency practice is a mental health assessment before discharge after a suicide attempt. Compare 43 q3 in this batch, which states "After fixation and psychiatric care". Fix: change the q4 update to "The next morning, after assessment by the adolescent mental health team, she has no intent, wants to go home and agrees to a plan. Her father is working from home for the next 2 weeks. The mental health team and the eating disorder program can see her in 3 days." Keep the key and the options. The explanation needs no change.

### suicide-risk-40, "A video call from the nursing station": PASS

- q1: PASS.
- q2: PASS. Key is now a noun phrase. It is the longest option, which is acceptable here (see the table above).
- q3: PASS. Section 8(1.1), 8(3), 8(4) and the November 1, 2026 nurse practitioner date verified. Every distractor reason is true. Waiting 3 days would also exceed the 24 hour limit in s. 13(1) for a person brought in under s. 12. The explanation does not need to say so.
- q4: PASS. Section 9(1)(b) 72 hours, s. 13(1) 24 hours, s. 17 certificate and 21 days, all verified. The hint that an application exists is inherent (B6, flag only).

### suicide-risk-41, "He wants to go to heaven": PASS

- q1: PASS.
- q2: PASS. B6 flag only: the q3 prompt implies discharge. This is inherent.
- q3: PASS. Fix from the first review applied correctly. Key [1, 2, 6] defensible, options alphabetical, Sullivan 2.3 and 30.2 cited correctly.
- q4: PASS. "Quetiapine ... is not recommended as a sleep aid" has no cited source but is true. Optional: add a source if one is opened. No fix required.

### suicide-risk-42, "Six days out": FAIL (2 items)

- q1: FAIL (low, cue, B5 and Lens B6). The new distractor "Lowest in the first month out" is the direct opposite of the key "Highest in the first month out". An opposite pair that contains the key points the candidate to it. Fix: replace "Lowest in the first month out" with "Rises steadily over the first year". New option order: "Highest in the first month out", "Highest once probation ends", "Peaks 1 year after release", "Rises steadily over the first year", "Same as the general population", with `correct: 0`. In the explanation, replace "The first month is the period of highest risk, not the lowest, and he is 6 days out." with "The rate falls over the first year rather than rising, and he is 6 days out." The source supports this (2.3 per 1000 in the first 4 weeks against 0.4 after 52 weeks).
- q2: FAIL (low, a claim not in the stem, Lens B1). The explanation says "His probation officer has no role in his medical discharge", but the stem never says he is on probation. It says only that he was released after 8 months in custody. Fix: change the sentence to "A probation officer, if he has one, has no role in his medical discharge." Alternatively add "He is on probation." to the stem. The key and the rest of the explanation are correct.
- q3: PASS. The shelter phone is now in the stem. Key [0, 3, 4] correct. Overdose SMR 56.0 verified.
- q4: PASS. "Dropping out of care" carries no citation but is a general statement. No fix required.

### suicide-risk-43, "Checking a fence at night": FAIL (2 items)

- Stem: PASS. "Abruptly" added. The pedestrian frame differs from s17 "A clear day on the highway" (a 46-year-old driver).
- q1: PASS. Key [0, 3, 6] defensible. The Oliva source supports the opioid point.
- q2: FAIL (medium, overlap with a signed item and a cue in its own update).
  1. s17-02 q4 (`src/samps/s17/suicide-risk.ts`, older man with hidden suicidality, CCSMH source) asks "What sources of collateral history will you seek?" and keys his children or family, his family physician, his pharmacist and the paramedic crew. 43 q2 is the same decision (collateral in an older man with hidden suicidality, CCSMH source) with four of its five options taken from that key list. The ranking question is new, but the scenario, source and option set retell s17-02 q4.
  2. The q2 update names the son ("His adult son is driving in from the city") just before asking who is most likely to know. He is the only relative offered, because his wife has dementia, so the update points to the key.
  Fix: replace q2 with a knowledge question on the disclosure pattern itself, which the bank does not hold. Suggested: remove the son sentence from the q2 update (move "His adult son is driving in from the city" to the q3 update). Prompt: "Which of the following best describes what older adults who die by suicide have usually done in the year before?" Options, each refuted or supported by CCSMH 2006 text you open: "Told a health professional of the wish", "Told relatives or friends of the wish" (key), "Shown obvious sadness more than physical complaints", "Had a severe or terminal physical illness", and a fifth wrong option that the CCSMH text clearly refutes. Explanation: three quarters told relatives or friends, only 38% told a health professional, they avoid volunteering symptoms to clinicians and present more often with somatic symptoms, and most do not have severe or terminal illness. Then say why this means his son's account is essential. Word it so it does not contradict s17-02 q2 ("Older adults rarely volunteer suicidal thoughts"): the point is that they tell family, not clinicians. Keep KF2 and `source: "ccsmh-suicide"`. Grep the bank before writing.
- q3: PASS. NICE 1.7.8 verified. The decision (the letter must name the collision as a suicide attempt) is not keyed elsewhere. Distractor reasons are true.
- q4: FAIL (medium, repeat within the batch and in the bank).
  1. Within the batch: 42 q3 already keys "Crisis line 9-8-8 by call or text", and its explanation says 9-8-8 "takes calls and texts at any hour anywhere in Canada". 43 q4 keys "Call 9-8-8 if he talks of dying", and its explanation repeats "answers calls and texts at any hour anywhere in Canada". The Q500B brief (rule 3) forbids repeating an angle within the batch.
  2. In the bank: s52 suicide-risk q3 ("Which of the following numbers should be written in his plan...", key 9-8-8) and at least six s17 write-in items key 9-8-8. The distractors "Avoid raising suicide with him" and "Wait until he raises it himself" restate the myths rejected in s17-02 q2, which is also an older man ("Asking about suicide may plant the idea in older adults", "Ask about suicide only if he raises low mood first").
  3. D1 cannot cover it. D1 is frozen at 20 with 19 used, and D1 never covers a repeat within a batch.
  Fix: replace q4 with a question whose key decision is not 9-8-8 or any crisis line, and not opioid quantity, naloxone, family holding medicines, firearms, a safety contract or the asking-about-suicide myths (s17-02 q2, s17-10 q4, s17 "Going home to the farm", s52). KF5 is already the most crowded key feature in the bank (33) and has 5 questions in this batch, so prefer KF2 or KF4, the thinnest. For example, a KF4 question on discharge timing from the orthopaedic ward: who decides he is ready and what must be in place first. Check that the batch still tests every key feature. Grep s17, s52 and this batch for the new decision, and cite a source you have opened.

## Ruling and signed-item checks

- No SCORING-RULINGS row is reversed. The batch has no write-in keys, so rows A1 to A20 do not apply. B1 met (key longest in 2 of 17 singles). B9 met (41 q4 "No new sedative at this time" sits last). B5 fails at 42 q1 (above). B6: inherent flags listed above.
- No signed item is contradicted. Benzodiazepines and Z-drugs stay distractors, as in s17 and s52. 9-8-8 is consistent with the bank.
- House style: no em dashes, en dashes or semicolons in the content (scripted check), no patient names, no mnemonics. Canadian spelling accepted ("behaviour", "orthopaedic", "paediatric", "-ize" forms).
- Whole-bank keyword search (all of `src/samps` and `src/cases`, including the other Q500B batches s73 to s88 and batch16 to batch20): insulin omission, glucose meter, HbA1c, refills, Manitoba, video or remote examination, Down syndrome, intellectual disability, group home, custody, correctional, incarceration, curfew, 9-8-8, discharge letter or summary, collateral, pedestrian, opioid stop. Repeats found only at 43 q2 (s17-02 q4) and 43 q4 (42 q3, s52, s17-02 q2). s83 tox-50 is cross-tagged suicide-risk but has a different scenario.

## Summary

5 SAMPs, 20 questions plus the 39 and 43 stems. SAMPs passing: 2 of 5 (40 and 41). Of the 13 first-review fails, 11 are fully resolved. 42 q1 was fixed but the fix creates a new cue, and the replacements for 43 q2 and 43 q4 bring new repeats. Two further items (39 q1, 39 q4) and one claim not in the stem (42 q2) were found on full re-review. No keyed answer is clinically or legally wrong.

Fails by id:
- suicide-risk-39 q1 (low): weight-loss half of a distractor reason untrue
- suicide-risk-39 q4 (low to medium): discharge after a suicide attempt with no mental health assessment named
- suicide-risk-42 q1 (low): opposite-pair cue (highest against lowest in the first month)
- suicide-risk-42 q2 (low): probation officer not in the stem
- suicide-risk-43 q2 (medium): retells s17-02 q4 collateral sources, and the update cues the son
- suicide-risk-43 q4 (medium): 9-8-8 repeated within the batch (42 q3) and the bank (s52, s17), plus the s17-02 q2 myths

Overall: FAIL (6 items)
