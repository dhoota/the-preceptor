# Q500B verification review 2: s72, Suicide risk (revision 2)

Batch: `src/samps/s72/suicide-risk.ts`, suicide-risk-39 to suicide-risk-43 (5 SAMPs, 20 questions, 17 single and 3 menu). Earlier reviews: `docs/reviews/q500b-qa-s72.md` (13 fails) and `docs/reviews/q500b-verify-s72.md` (6 fails). Writer report with "Revision 1" and "Revision 2": `docs/reviews/q500b-writer-s72.md`.

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before. Under REVIEW-RULES rule 1 I changed no file except this one. I reviewed the whole final batch under Lenses A and B of `docs/SAMP_REVIEW_BRIEF.md`, not only the changed items. Every SAMP stays `reviewed: false`.

## Tests

`SAMP_BATCH=s72 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests, all passed. The bank-wide near duplicate stem test took about 5 seconds. House style was checked by script: no em or en dashes, and the only semicolons are in TypeScript code, not content.

## Sources verified in this pass

WebFetch worked for three pages. The rest I read with curl and text extraction. I opened every source cited in the batch.

| Source id | Checked at | Result |
|---|---|---|
| ccsmh-suicide | https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf (curl, pdftotext) | Verified for the new 43 q2 and q4. Waern and colleagues: "three quarters of older adults studied who had died by suicide had told relatives or friends of their wish to die or their thoughts regarding suicide in the year preceding", "only 38% had discussed these thoughts with a healthcare professional". Older adults "may avoid volunteering depressive and suicidal symptoms". They present less often with dysphoria and more often with somatic symptoms. "perhaps over 10% of older adults who die by suicide do not have a diagnosable mental illness". "The majority ... do not have severe or terminal physical illness". "repeatedly assess for suicidal thoughts among depressed older adults as suicidal thoughts might wax and wane over the course of a depressive episode". Table 2.1: "equivocal behaviour such as accidental medication overdose and self-neglect". Recommendation 2.3: "Facilitate strategies for/with clients to enhance social support and interpersonal activities [D]". |
| kouyoumdjian-custody | https://pmc.ncbi.nlm.nih.gov/articles/PMC4933645/ (curl) | Verified: "2.3 (95% CI 1.0-4.6) deaths per 1000 person-years due to suicide in the first 4 weeks postrelease compared with 0.4 ... after 52 weeks", suicide SMR 14.0 in the first 2 weeks (24.2 in weeks 2 to 4, still within the first month), overdose SMR 56.0 in the first 2 weeks. |
| cps-youth-2015 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4472054/ (curl) | Verified: ask whether self-harm is "made with intent to cope with emotional pain or with suicidal intent", access to means "(eg, firearms, medications)", trusted adults, "mental health follow-up care". |
| dc-t1d-peds | https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34 (curl) | Verified: "DKA results from failing to take insulin or poor sick-day management", eating disorders suspected in adolescent and young adult females "especially when insulin omission is suspected". |
| mb-mha | https://web2.gov.mb.ca/laws/statutes/ccsm/m110.php (curl) | Verified: s. 8(1.1) remote examination "if an in-person examination is not reasonably practicable", s. 8(3) "within two days", s. 9(b) "not more than 72 hours", s. 13 examination within 24 hours, s. 19 21 days. Legislative history: "SM 2026, c. 13 • s. 2(2) and 18(2) – to come into force: 1 Nov. 2026 (proclamation published: 9 Oct. 2026)". |
| nice-ng225 | https://www.nice.org.uk/guidance/ng225/chapter/Recommendations (curl) | Verified: 1.7.8 (GP regular appointments and review), 1.10.2, 1.11.7 (contact details for the aftercare team), 1.13.2 (limit quantity of medicines). |
| sullivan-idd | https://pmc.ncbi.nlm.nih.gov/articles/PMC5897068/ (WebFetch, curl got a captcha) | Verified: 2.1, 2.3, 2.6, 3.3, 27.3, 29.5, 29.8, 30.2 ("Debrief with the patient and caregivers as soon as possible (eg, within 72 h) after an ED visit"). |
| oliva-opioid-stop | https://pmc.ncbi.nlm.nih.gov/articles/PMC7249243/ (WebFetch) | Verified: HR 1.67 (30 days or less) to 6.77 (over 400 days), "cannot be assumed to be causal". |
| phac-988 | https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html (WebFetch, curl failed) | Verified: "call or text 9-8-8. Support is available 24 hours a day, 7 days a week", "available to anyone in Canada". |
| beck-hopelessness | PubMed 3985195 via NCBI E-utilities | Verified: 207 patients, 5 to 10 years, 14 suicides, only the Hopelessness Scale and the BDI pessimism item predicted suicide. |

Every source opened. None was unreachable.

## Earlier fails: resolution

| Item | Earlier fail | Resolved? |
|---|---|---|
| 39 stem, 39 q2 (first review) | Near duplicate of abuse-domestic-41, unsourced claim | Yes (confirmed in verify 1, rechecked). |
| 40 q2, q3, q4 (first review) | Grammar cue, out-of-date legal line, mock cue | Yes. The November 1, 2026 nurse practitioner date is still in the future today and is worded so it stays true afterwards. |
| 41 q3 (first review) | Cue to q4, wrong source | Yes. |
| 42 q3, q4, 43 q1 (first review) | Claims not in the stem, inconsistency | Yes. |
| 39 q1 (verify 1) | Weight-loss half of a distractor reason untrue | Yes. The sentence is now word for word as asked. |
| 39 q4 (verify 1) | Discharge after an attempt with no mental health assessment | Yes. The update is now word for word as asked. |
| 42 q1 (verify 1) | Opposite-pair cue | Yes. "Rises steadily over the first year" replaces "Lowest in the first month out", in the order asked, `correct: 0`. The explanation sentence is as asked and is supported by the 2.3 against 0.4 per 1000 figures. |
| 42 q2 (verify 1) | Probation officer not in the stem | Yes. "A probation officer, if he has one, has no role in his medical discharge." See the writer's note below. |
| 43 q2 (verify 1) | Retold s17-02 q4 collateral, update cued the son | Yes. Rebuilt as the disclosure-pattern question the verifier suggested. The son sentence moved to the q3 update. Every option is supported or refuted by CCSMH text I opened. |
| 43 q4 (verify 1) | 9-8-8 repeated within the batch and bank, asking myths | The 9-8-8 and myth repeat is gone. The replacement repeats a signed s17 teaching point (see 43 q4 below). |

## Writer's note on the probation distractors

Accepted. The stem gives an 8-month provincial sentence and is silent on probation, which commonly follows such a sentence, so neither distractor contradicts the case. "Highest once probation ends" (42 q1) is a claim about a population, refuted by the Ontario data showing the highest rate early. "Hold until his probation officer is reached" (42 q2) is a plausible wrong action, and the explanation now hedges with "if he has one", so no explanation claim rests on a fact the case never gave. Adding "He is on probation." to the stem would be tidier but is not required.

## Verdicts by SAMP and question

### suicide-risk-39, "A meter used on three days": PASS

- Stem: PASS. Glucose 24, pH 7.28, bicarbonate 15, beta-hydroxybutyrate 3.4 is mild DKA. Weight 51 kg after a 6 kg loss. Father throughout.
- q1: PASS. Every distractor reason is now true and traces to the stem.
- q2: PASS. CPS intent text verified.
- q3: PASS. CPS means text verified.
- q4: PASS. Assessment by the adolescent mental health team now precedes discharge, with mental health follow-up in 3 days, which matches CPS. The father working from home supports the key, but it is clinical information needed to make the key feasible, not a cue.

### suicide-risk-40, "A video call from the nursing station": PASS

- q1 to q4: PASS. Unchanged since verify 1. Statutory text rechecked today (see table). The q4 hint that an application exists is inherent (B6, flag only).

### suicide-risk-41, "He wants to go to heaven": PASS

- q1 to q4: PASS. Unchanged since verify 1. Sullivan 2.1, 2.3, 2.6, 3.3, 27.3, 29.5, 29.8 and 30.2 rechecked. q4 note carried forward: the quetiapine sleep aid line is true but has no cited source. No fix required.

### suicide-risk-42, "Six days out": PASS

- q1: PASS. No opposite pair remains. Two options start "Highest", so the key does not stand out by form.
- q2: PASS. Probation hedge accepted (above).
- q3: PASS. Shelter phone in the stem. Overdose SMR 56.0 verified.
- q4: PASS.

### suicide-risk-43, "Checking a fence at night": FAIL (1 item)

- Stem: PASS.
- q1: PASS. Oliva and CCSMH Table 2.1 verified.
- q2: PASS. The key ("Confided the wish to family or friends", three quarters) and each distractor ("Told a health professional", 38%, "severe or terminal physical illness", majority do not, "no diagnosable mental illness", perhaps over 10%, "obvious sadness more than physical complaints", somatic presentation) match CCSMH text. The key is not the plain negation of a distractor. It agrees with s17-02 q2. Overlap note, no fix: the closing sentences (his denial does not end the assessment, people close to him are likely to know) echo s52 "Certain they are bankrupt" q2 ("Wife's report outweighs his denial", CCSMH). The decision tested here, the disclosure epidemiology, is not keyed elsewhere, so this is accepted.
- q3: PASS. NICE 1.7.8 verified. The son's arrival in the update does not cue q2 in mock mode, because it says nothing about what he has heard. Minor, no fix: "Bone density testing does not apply to a high-energy collision" is true as a reason (the fracture is not a fragility fracture), though a 71-year-old man may still merit osteoporosis screening on age alone.
- q4: FAIL (medium, repeat of a signed teaching point, Q500B brief rule 3 and Lens A10).
  1. The key lesson is that an older man who refuses food and his medications may be showing self-neglect as hidden suicidality, so he must be asked about intent (CCSMH, self-neglect as equivocal behaviour). That is the lesson of signed suicide-risk-02 q1 (`src/samps/s17/suicide-risk.ts`, "Found on the kitchen floor", CCSMH source), which keys "stopped taking his medications", "poor food intake" and "self-neglect" in an older man and explains "Older adults often present with self-neglect, stopping medications or refusing food rather than an overt attempt". s17-09 q2 also keys "Self-neglect or stopping essential treatment ... refusing food", and s17-12 q1 keys self-neglect with poor intake as suicidality despite denial.
  2. The decision frame (what must happen before an attempt survivor leaves the orthopaedic ward) is also the frame of s52 "Hanging laundry on the third floor" q3 ("Which of the following must happen before she is discharged from hospital?", key "Psychiatric assessment on the ward").
  The inpatient setting and the "wax and wane" point are new, but they are a small addition to a repeated lesson in a repeated frame. D1 is frozen and cannot cover it.
  Fix: replace q4 with a question whose key decision is not self-neglect or treatment refusal as a suicide clue, not a reassessment or psychiatric assessment before ward discharge, not 9-8-8 or any crisis line, not opioid quantity, naloxone, family-held medicines, firearms, a safety contract, collateral sources or the asking-about-suicide myths (s17-02, s17-09, s17-10, s17-12, s17 "Going home to the farm", s52 "Hanging laundry" and "Certain they are bankrupt", and 42 in this batch). One angle not in the bank: a KF4 question on his plan once his son goes back to the city and he is alone on the farm with his wife in long-term care. CCSMH recommendation 2.3 ("Facilitate strategies for/with clients to enhance social support and interpersonal activities [D]", page 16 of the PDF, verified) supports a key such as arranged regular contact or activities with people around him, agreed with him, against specific wrong options (for example a move into long-term care he does not want, contact only if he calls, a medical alert device alone, a stay with his son that he declined). Remove the q4 sentence "His denial of intent days ago" if any of its wording is kept. Grep s17, s52 and s72 for the new decision before writing, keep KF coverage (KF2 would fall to 4 and KF4 rise to 5, both fine), and cite text you have opened.

## Ruling and signed-item checks

- No SCORING-RULINGS row is reversed. The batch has no write-in keys, so A1 to A20 do not apply. B1 met (key longest in 2 of 17 singles). B4, B5 met. B9 met (41 q4 "No new sedative at this time" sits last). B6: the inherent flags from verify 1 (39 q1 to q2, 40 q4, 41 q2 to q3, 42 q2 to q3) stand, flag only.
- No signed item is contradicted. Benzodiazepines and Z-drugs stay distractors, as in s17 and s52.
- House style: no em or en dashes or semicolons in content, no patient names, no mnemonics. Canadian spelling accepted.
- Whole-bank keyword search (all of `src/samps` and `src/cases`, including Q500B batches s73 to s88 and batch16 to batch20): three quarters, relatives or friends, 38%, confided, wax and wane, self-neglect, refused meals, stopped eating, not eating, enoxaparin, social support, living alone, home care, plus the verify 1 list. Repeats found only at 43 q4 (s17-02 q1, s17-09 q2, s17-12 q1, s52 "Hanging laundry" q3). s83 tox is cross-tagged suicide-risk but has a different scenario. batch19 lists suicide risk in its header but holds no suicide case file yet.

## Summary

5 SAMPs, 20 questions plus stems. SAMPs passing: 4 of 5 (39, 40, 41, 42). Every earlier fail is resolved, including the rebuilt 43 q2. The rebuilt 43 q4 drops the 9-8-8 repeat but repeats the signed s17 self-neglect lesson inside the s52 pre-discharge frame. No keyed answer is clinically or legally wrong. Every cited source was opened and supports its point. The writer's probation note is accepted.

Fails by id:
- suicide-risk-43 q4 (medium): repeats s17-02 q1 (self-neglect, refusing food and medications in an older man as hidden suicidality, CCSMH), s17-09 q2 and s17-12 q1, in the frame of s52 "Hanging laundry" q3. Replace as described above.

Overall: FAIL (1 item)
