# Q500 verify report, round 2: s60, Pulmonary edema

A fresh independent review by Preceptor of the revised `src/samps/s60/pulmonary-edema.ts` (pulmonary-edema-39 to pulmonary-edema-43). The reviewer did not write, edit or review this batch before. Nothing was edited (REVIEW-RULES rule 1). Inputs: the previous verdict `docs/reviews/q500-verify-s60.md`, the writer report `docs/reviews/q500-writer-s60-r2.md`, and the diff of commit 43724f2 against ab593c6 on the file. Every key decision was checked against the catalogues for pulmonary-edema, sob, headache, asthma-copd, ischemic-heart-disease and loc, and against the current text in `src/samps/` and `src/cases/` (grep). All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| pulmonary-edema-39 | PASS | PASS | PASS | PASS | PASS | |
| pulmonary-edema-40 | FAIL | PASS | PASS | PASS | FAIL | FAIL |
| pulmonary-edema-41 | FAIL (only 3 questions) | PASS | PASS | FAIL | | |
| pulmonary-edema-42 | FAIL | PASS | PASS | PASS | FAIL | |
| pulmonary-edema-43 | FAIL | PASS | PASS | FAIL | FAIL | |

One SAMP passes and four fail, with 8 required fixes. No keyed answer is clinically wrong. The Ottawa score recomputes to 5.

Batch tests run by the reviewer: `SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128. No semicolons, em dashes or en dashes in content strings. Stems are 109 to 141 words.

## Previous required fixes

| Previous fix | Applied | Comment |
|---|---|---|
| 40 stem retold headache-43 | Yes | Now a 6-year-old boy whose first complaint is cough, fast breathing and orthopnea, after impetigo treated with fusidic acid. No longer retells headache-43. |
| 40 q2 repeated headache-43 q2 | Yes | Anti-DNase B after a skin source is new in the bank (grep found no other anti-DNase item). The "low C3, about 90%" sentence is gone. |
| 40 q4 near copy of pulmonary-edema-25 q4 | Applied, but the replacement repeats other signed decisions | See 40 q4 below. |
| 41 stem and q1 retold pulmonary-edema-13 and -05 | Yes | Transthyretin amyloidosis is new in the bank (no amyloid item in any pulmonary edema, sob or cardiac SAMP). |
| 41 q2 threshold wording | Yes | Reads "110/minute or more". |
| 42 stem mirrored sob-05, q3 oxygen target repeated, B11 | Yes | Oxygen now 1 L/minute on exertion only, gas pH 7.30 and PCO2 64, heart failure central. The oxygen target item is gone, so B11 is moot. |
| 43 stem retold pulmonary-edema-09, -25, -29 | Yes | New presentation (bilateral effusions, oncologist referral for drainage). |
| 43 q1 NT-proBNP as next test | Yes | Replaced by a cause decision (heart failure, not recurrence). |
| 43 q2 NT-proBNP by age | Yes | Removed. |
| 43 q4 discharge menu and compound distractor | Yes | Replaced by two pleural decisions with single-action options. New defects in q3 and q4 below. |

## Required fixes

### pulmonary-edema-40

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | whole question | "Which of the following findings best shows that his breathing is now failing?" Key "PCO2 of 59 mmHg on capillary gas", with the 95% saturation on the mask as the reassuring distractor | The decision (a rising PCO2 with acidosis, not the oxygen saturation, shows ventilation is failing) is already keyed in signed items: asthma-copd-15 q1 (s04, "What findings show he is tiring rather than improving?", key "pCO2 rising ... respiratory acidosis with pH 7.29", with a falsely reassuring calmer patient), pulmonary-edema-08 q1 (s15, NIV failing: "Worsening respiratory acidosis and hypercapnia"), sob and asthma-copd "heading into respiratory failure" lists ("Rising PCO2 with respiratory acidosis"), and tox-17 q3 (s53, "Venous blood gas for PCO2" over oximetry). A pediatric setting does not change the decision. It is not a recorded D1 entry. Replace with a KF4 decision not keyed in the bank, keep the KF4 tag (this is the batch's only KF4 item), and check the new key against the catalogues before writing. Open angles the reviewer found unkeyed: the starting bilevel pressures or interface for a 21 kg child, or a vasoactive decision for a child with nephritic pulmonary edema and severe hypertension, if a pediatric source supports it. If the product owner prefers to keep this item, it would need D1 row 20 (KF4 is "recognize impending respiratory failure"), which neither writer nor reviewer can add. The previous verdict pointed the writer to this angle, so this is not a writer error. | Q500_BRIEF rule 3. `src/samps/s04/asthma-copd.ts` asthma-copd-15, `src/samps/s15/pulmonary-edema.ts` pulmonary-edema-08, `src/samps/s53` tox-17 | Medium |
| q5 | update | "He is started on bilevel ventilation and his PCO2 falls, but ..." | Mock-mode cue (B6): "his PCO2 falls" tells the candidate that PCO2 was the failing measure, which is the current q4 key, and the question does not need it. Reword so the update names no finding or action that the new q4 keys (for example "He is started on bilevel ventilation and his breathing settles, but ..."). "A second diuretic dose" may stay (see retained cues). | SCORING-RULINGS B6 | Low |

### pulmonary-edema-41

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| SAMP | question count | 3 questions | The Q500 brief requires 4 or 5 questions per SAMP ("Only single and menu questions, 4 or 5 per SAMP"). SAMP_SPEC's 3 to 5 range is the general rule, and the Q500 brief is the stricter binding brief for this batch, so 3 fails. Add a fourth question with a decision not in the bank. An open KF2 option that fits this case: the test needed to exclude light-chain amyloidosis before a transthyretin diagnosis (serum free light chain assay with serum and urine immunofixation, ESC 2021, Figure and text "clonal dyscrasia is excluded by all the following tests"). Grep found no light chain or immunofixation item in the bank. If that is used, place it after q1 and keep the q1 explanation from stating the answer in a way that a mock-mode reader sees before the new question (the explanation is shown only after answering, so it may stay, but do not put it in an update). Keep key positions at 4 or fewer per position. | Q500_BRIEF "SAMP batches". Garcia-Pavia 2021 (already cited), https://pmc.ncbi.nlm.nih.gov/articles/PMC8060056/ | High |
| q3 | explanation | "... all add risk, even though he feels better and walked without tachycardia." | The revised case never says he feels better (the old update said "feels better", the new q2 update gives only 1.4 L of urine and the walk pulse). Add "He feels better" to the q2 update or delete "he feels better and" from the explanation. | SAMP_SPEC section 8 (every claim traces to the case), Lens B1 | High |

### pulmonary-edema-42

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | options | "At a brisk pace on room air", "Own pace on room air", "Seated arm exercise on room air", "Treadmill test on 4 L/minute", key "Walk at own pace on usual oxygen" | Unrequested change judged on its merits (rule 4). The new key is the only option that starts with a verb (B4) and is now the longest option (32 characters against 31). The previous verdict suggested "Own pace on her home oxygen". Make the key parallel to the distractors (for example "Own pace on usual oxygen"). That moves it to position 2, which would put 5 of 19 single keys in position 2 (over 25%), so rebalance positions at the same time, for example by rewording one distractor or another question's options. | SCORING-RULINGS B4 and B1. SAMP_SPEC section 7 (position balance) | Low |

### pulmonary-edema-43

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q3, q4 | source | `bts-pleural-2010`: Hooper C, Lee YCG, Maskell N. BTS pleural disease guideline 2010 | Writer flag 2 judged. The reviewer read the 2023 BTS guideline (Roberts ME et al. Thorax 2023;78:1143-1156, summary and the June 2022 consultation draft). It replaces the 2010 suite, covers only undiagnosed unilateral effusions, pneumothorax, infection and malignancy, and excludes benign non-infectious effusion. It does not restate the bilateral transudate advice, and it does not contradict it. So no current BTS edition carries the point. A current Canadian source does, and SAMP_SPEC section 9 puts Canadian guidance first: Beaudoin S, Gonzalez AV. Evaluation of the patient with pleural effusion. CMAJ. 2018. It says that in heart failure "thoracentesis may be deferred until the outcome of a trial of diuretic therapy is known", lists fever among features that need urgent evaluation, and advises to "determine whether more investigations are required if the effusion fails to improve". Cite it for q3 and q4 (the 2010 BTS source may stay as a second source). Reword the q3 and q4 explanations to match what the CMAJ review says (defer the tap for a diuretic trial, investigate if the effusion fails to improve or fever or other signs of infection appear). Do not present "fever with pleuritic chest pain" as quoted guideline wording. | https://pmc.ncbi.nlm.nih.gov/articles/PMC5849448/ (DOI 10.1503/cmaj.170420), opened. SAMP_SPEC section 9 | Medium |
| q4 | prompt | "Which of the following later findings would most justify sampling her pleural fluid?" | The word "later" fits only the two keys. Five of the seven options (bilateral effusions, orthopnea, EF 35%, JVP, right side slightly larger) are findings she already has, so a candidate can drop them because they are not "later". This is a lead-in qualifier only the keys satisfy (B8). Either remove "later" and keep the options, or keep "later" and make every distractor a plausible future finding that does not justify sampling (for example effusions smaller but still present after 3 days, a small rise in creatinine with diuresis, persistent mild orthopnea). Keep each option a single finding. | SCORING-RULINGS B8 | Medium |
| q4 | option | "No shrinkage after diuresis" | Writer flag 6 judged. In mock mode this option tells the candidate that diuresis is the plan, which is the q3 key "IV diuretic, then reassess". The question works without the word, so B6 requires a rewording (for example "No shrinkage on repeat imaging" or "No shrinkage after 3 days of treatment"). | SCORING-RULINGS B6 | Low |

## Writer flags judged

| Flag | Verdict |
|---|---|
| 1. 41 has 3 questions | Fails the Q500 brief (4 or 5). Required fix above. The previous verdict missed this. |
| 2. 43 q3 and q4 cite BTS 2010 | The 2023 BTS guideline does not keep or restate the advice, so it cannot replace the citation. A current Canadian source (CMAJ 2018) supports the point and is required. See above. |
| 3. 40 q4 shares reasoning with loc and tox venous gas items | The overlap is wider than the writer found: asthma-copd-15 q1 and pulmonary-edema-08 q1 key the same decision. Fails. See above. |
| 4. Antistreptolysin O as the closest distractor in 40 q2 | Acceptable. Abugrain 2024 (full text read): anti-DNase B raised in 94 of 94 tested, ASOT in 80 of 94 (85%), 55 of 100 skin only and 10 both, and the review states the two antibodies are most often raised after upper respiratory and skin infection respectively. One best key after a skin source. |
| 5. 42 q3 bisoprolol against asthma-copd-24 q3 | PASS, low confidence. asthma-copd-24 q3 keys which beta blocker to start after an NSTEMI in asthma (agent choice, "bisoprolol started at a low dose"). 42 q3 keys whether to keep a chronic beta blocker through decompensated HFrEF in COPD (continuation, CAEP 2025: "GDMT medications should be continued", "continuation of therapy is safe"). The cardioselectivity rationale is shared, the decision is not. Listed for the physician below. |
| 6. Retained mock-mode cues | 43 q2 update (heart failure on ultrasound supports the q1 key): acceptable under B6, q2 cannot ask about the cause of a low ejection fraction without showing it. 40 q5 "a second diuretic dose": acceptable, q5 tests diuretic failure and cannot work without it. 43 q4 "after diuresis": not acceptable, it can be reworded (required fix above). 39 q3 update giving the radiograph: accepted in the previous round, still acceptable. New: 40 q5 "his PCO2 falls" (required fix above). |

## Checks with no change needed

- 39 (unchanged): one defensible key per question, ALCAPA logic and Price 2019 support sound. No similar infant item in the bank.
- 40 q1, q3: furosemide for overload and sodium and fluid restriction are correct (Ong 2022). Impetigo 3 weeks before nephritis fits the skin latency. BP 146/96 mmHg is hypertensive at 6 years. Urine 280 mL in 2 hours at 21 kg is about 6.7 mL/kg/hour. q5 output 5 mL/hour is about 0.24 mL/kg/hour, oliguric. Creatinine 236 umol/L and K 6.6 mmol/L support dialysis (Ong 2022).
- 41 q1: ESC 2021 position statement (opened) lists bilateral carpal tunnel syndrome, lumbar spinal stenosis (mostly wild-type ATTR) and low QRS voltage for the degree of LV thickness as red flags, with LV thickness 12 mm or more. The stem gives 17 mm, low limb-lead voltage, no hypertension and a normal aortic valve. Every distractor has a true reason.
- 41 q2: Ottawa Heart Failure Risk Scale recomputed from the new values (items checked on MDCalc): stroke or TIA 1 (TIA 4 years ago), intubation for respiratory distress 0 (never), arrival HR 110 or more 2 (118), arrival SaO2 under 90% 1 (87%), walk test HR 110 or more 0 (104), new ischemic ECG changes 0, urea 12 mmol/L or more 1 (13.6), serum CO2 35 mmol/L or more 0 (29), troponin at MI level 0, NT-proBNP 5 000 pg/mL or more 0 (4 300). Total 5, the same with or without the NT-proBNP item. Options 3 to 7 are in order. "4 misses the TIA" and "6 counts the NT-proBNP" are true.
- 41 q3: admission is right. The 2017 abstract (Europe PMC, read) says "an admission threshold of OHFRS score > 1 would have increased sensitivity (71.8% vs. 91.8%)", which matches the explanation.
- 42 q1, q2: B-lines and bilevel ventilation are correct. ERS/ATS 2017 recommends bilevel at pH 7.35 or less with hypercapnia, and bilevel or CPAP for cardiogenic edema. The stem no longer mirrors sob-05.
- 42 q3: continuing bisoprolol after stabilization (pH 7.36, pulse 92, BP 136/80) matches CAEP 2025 (opened) and the Cochrane 2005 review. Carvedilol blocks beta-2 receptors, and CAEP advises avoiding calcium channel blockers when LVEF is low.
- 42 q4: walk test thresholds match CAEP 2025 (SpO2 under 90%, HR over 110, RR over 28, or unable to finish).
- 43 q1, q2: heart failure as the cause of bilateral effusions and late cardiotoxicity are sound and new in the bank (sob-35 and sob-36 are malignant and hepatic effusions, different decisions). Albumin 39 g/L is normal.
- Key features: KF1 3, KF2 5, KF3 4, KF4 1, KF5 4, KF6 3. Every key feature is covered. The 40 q4 replacement must stay KF4.
- Key positions (19 single keys): 4, 4, 4, 4, 3 from first to fifth. Any change must keep every position at 4 or fewer of 19 (25%) once 41 gains a question (then 5 of 20).
- Canadian spelling, units and option order are correct. No personal names.

## Sources verified this round

- Stiell IG et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12484285/ opened (HEARTRISK6, walk test thresholds, GDMT and beta blocker continuation, calcium channel blockers avoided with low LVEF). The DOI in the file resolves to Springer.
- Stiell IG et al. OHFRS validation. Acad Emerg Med. 2017. Abstract read through Europe PMC. Items from https://www.mdcalc.com/calc/3994/ottawa-heart-failure-risk-scale-ohfrs.
- Garcia-Pavia P et al. ESC position statement on cardiac amyloidosis. Eur Heart J. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8060056/ opened.
- Abugrain K et al. Pediatr Nephrol. 2024. https://pmc.ncbi.nlm.nih.gov/articles/PMC11026274/ opened.
- Panetti B et al. Children (Basel). 2024. PMC11506303 record matches the citation (not reread, q4 fails on uniqueness).
- Herrmann J et al. IC-OS 2022 (PMC8803367), Armenian SH et al. ASCO 2017 (Crossref record matches), Hooper C et al. BTS 2010 (Crossref record matches, authors Hooper, Lee, Maskell), HEARTRISK6 2024 (Crossref record matches). The DOIs for Price 2019, Ong 2022, Rochwerg 2017 and Salpeter 2005 resolve to the publishers.
- Roberts ME et al. British Thoracic Society Guideline for pleural disease. Thorax. 2023 (summary PDF and June 2022 consultation draft read, scope section 1.3 and 1.4). No bilateral transudate recommendation.
- Beaudoin S, Gonzalez AV. Evaluation of the patient with pleural effusion. CMAJ. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC5849448/ opened.

## Physician-level items (not grounds for failure)

1. CAEP 2025 recommends HEARTRISK6 for disposition and does not mention the Ottawa Heart Failure Risk Scale, which HEARTRISK6 refines. 41 q2 and q3 teach the OHFRS while 42 q4 uses HEARTRISK6 walk criteria. Both are Canadian and validated. The physician may prefer the batch to teach the current tool.
2. Signed asthma-copd s04 (hypertensive pulmonary edema, write-in) flags "Beta blocker in acute decompensated heart failure" as dangerous. That item is about giving a beta blocker acutely in flash pulmonary edema. 42 q3 keys continuing a chronic dose after stabilization, as CAEP 2025 advises. Not a ruling in SCORING-RULINGS, so not a silent reversal, but the physician may want the two read together.
3. 42 q3 and asthma-copd-24 q3 share the cardioselectivity rationale (flag 5 above).
4. 43 q3: in a patient with a past cancer the oncologist's request for a diagnostic tap is a reasonable alternative view. The key holds because heart failure is clinically clear and current guidance supports deferring the tap for a diuretic trial.

## Summary

Five SAMPs: pulmonary-edema-39 passes. pulmonary-edema-40, -41, -42 and -43 fail with 8 required fixes:

- 1 repeat of signed decisions (40 q4)
- 1 question count under the Q500 brief (41)
- 1 explanation claim not in the case (41 q3)
- 1 citation to replace with current Canadian guidance (43 q3 and q4)
- 1 lead-in cue (43 q4)
- 2 mock-mode cues that can be reworded (40 q5, 43 q4)
- 1 low-confidence grammar and length cue on an unrequested change (42 q4)

All 11 fixes from the previous verdict were applied, but the 40 q4 replacement repeats signed items. The fixes go back to a writer, and the revision needs a fresh independent review.
