# Q500 verify report, round 3: s60, Pulmonary edema

A fresh independent review by Preceptor of `src/samps/s60/pulmonary-edema.ts` (pulmonary-edema-39 to pulmonary-edema-43) after the writer's round 3. The reviewer did not write, edit or review this batch before. Nothing was edited except this file (REVIEW-RULES rule 1). Inputs: the previous verdict `docs/reviews/q500-verify2-s60.md`, "Round 3" in `docs/reviews/q500-writer-s60-r2.md`, and `git diff 7f637f7` on the file (commit 1d4835f). New keys were checked against the q500 catalogues (pulmonary-edema, sob, headache, asthma-copd, ischemic-heart-disease, loc, pre-eclampsia, environmental) and the bank by grep over `src/samps/` and `src/cases/`. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| pulmonary-edema-39 | PASS (unchanged) | PASS | PASS | PASS | PASS | |
| pulmonary-edema-40 | FAIL | PASS | PASS | PASS | FAIL | PASS |
| pulmonary-edema-41 | FAIL | PASS | FAIL | PASS | PASS | |
| pulmonary-edema-42 | PASS | PASS | PASS | PASS | PASS | |
| pulmonary-edema-43 | PASS | PASS | PASS | PASS | PASS | |

Three SAMPs pass and two fail, with 2 required fixes. Both are small wording changes. No keyed answer is clinically wrong, and every new key is single-defensible.

Batch tests run by the reviewer: `SAMP_BATCH=s60 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 132 of 132. No semicolons, em dashes, en dashes or smart quotes. Stems are 109 to 141 words, updates 11 to 40 words, prompts 12 to 19 words.

## Previous required fixes

| Previous fix | Applied | Comment |
|---|---|---|
| 40 q4 repeated signed decisions (failing ventilation shown by PCO2) | Yes | Now an antihypertensive choice in nephritic pulmonary edema, key "nifedipine PO". Judged in full below. One new defect (the BP value). |
| 40 q5 update "his PCO2 falls" | Yes | Now "his breathing settles". Names no q4 drug or finding. |
| 41 had 3 questions | Yes | New q2 menu (bone scintigraphy and serum free light chain assay). Now 4 questions. One new defect (mock-mode cue). |
| 41 explanation "he feels better" | Yes | Deleted. The q4 explanation now traces to the case. |
| 42 q4 key verb-led and longest | Yes | "Own pace on usual oxygen" (24 characters) is parallel to the distractors and not the longest (31). Position 3. |
| 43 q3 and q4 cited BTS 2010 | Yes | Both cite Beaudoin and Gonzalez, CMAJ 2018. BTS 2010 removed. The q3 explanation quotes CMAJ correctly. "Fever with pleuritic chest pain" is gone. |
| 43 q4 lead-in "later" with findings she already had | Yes | Prompt now "over the next 3 days", and all 7 options are plausible future findings. Only the keys justify a tap. |
| 43 q4 "No shrinkage after diuresis" | Yes | Replaced by "Effusions unchanged on repeat imaging". |

## Required fixes

### pulmonary-edema-40

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q4 | update and explanation | "His BP has risen to 162/108 mmHg" (update), "his blood pressure has risen to 162/108 mmHg" (explanation) | headache-43 (s40) is a boy with post-streptococcal glomerulonephritis whose q3 update reads "BP is 162/108 mmHg". The decision differs (BP goal there, agent choice here), so this is not a repeat of a key decision. But the same disease, a boy of similar age and the identical BP value echo the SAMP whose retelling failed this item in round 1, and the writer report states that "the BP numbers are new", which is not true. Invent a different severe value in both places (for example 158/112 mmHg), keep it well above the q1 value of 146/96 mmHg, and check it against headache-43 and the catalogues. No other change to q4. | Q500_BRIEF rule 3 and rule 5 (invent every patient detail). `src/samps/s40/headache.ts` headache-43 q3 | Low |

### pulmonary-edema-41

| Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|
| q2 | option and explanation | Option "Transthyretin gene testing". Explanation "Transthyretin gene testing follows a confirmed transthyretin diagnosis ..." | Mock-mode cue (B6). In mock mode q1 and q2 show together, and this option names the q1 key "Transthyretin amyloidosis" outright among q1's five causes. The question works without it. Replace it with a plausible distractor that names no q1 option and that does not confirm amyloidosis, for example "Serum ACE level" (another infiltrative cause his findings do not suggest), and give it a true reason in the explanation. The sentence on gene testing may stay in the explanation as teaching (explanations show only after marking), or be cut. Do not add cardiac MRI or endomyocardial biopsy, which would be defensible. Keep keys at bone scintigraphy and serum free light chain assay, options in alphabetical order, and the longest option at most 2.6 times the shortest. Bone scintigraphy and the free light chain assay also point toward amyloidosis, but the question cannot test confirmation without them, so they stay (B6 retained cue). | SCORING-RULINGS B6 | Medium |

## Review of the changed questions in full

### 40 q4 (new)

- **Accuracy and single key.** Ong 2022 (full text on wjgnet.com read this round): "Several studies showed that short-acting nifedipine is safe in children with severe hypertension or hypertensive emergencies". Hypertension may be treated with a diuretic alone or with a vasodilator such as a calcium channel blocker. "ACE inhibitors or angiotensin receptor blockers are usually avoided in the acute phase because they may exacerbate any reduction in glomerular ultrafiltration and hyperkalemia". That rejects captopril, enalaprilat and losartan for the stated reason, and K 5.4 mmol/L is in the case. Eplerenone raises potassium and acts slowly (general pharmacology, true, and the writer says so). Beta blockers, labetalol, hydralazine and nicardipine are not offered, so no option competes. One defensible key.
- **No doses.** All five options give drug and route only, so specificity matches (B10). Lengths 11 to 14 characters, key not longest. With no dose shown, no option is wrong for its dose, and the decision is the class choice, which Ong supports. The key stays single-defensible.
- **KF4 honesty.** KF4 reads "recognize impending respiratory failure and provide appropriate interventions (e.g., respiratory support, vasoactive agents)". The update shows edema not settling (38/minute on a mask, crackles now to mid zones) with rising BP, and the explanation frames nifedipine as escalation with a vasodilator, followed by bilevel ventilation in q5. This is an honest KF4 item, though it sits close to KF3 (treating volume-driven hypertension). Accepted, medium confidence, listed for the physician.
- **Mock-mode cues.** The q4 update names nothing that an earlier key depends on. The q5 update names no q4 drug.
- **Uniqueness.** Nifedipine is keyed elsewhere only for adults (pre-eclampsia, HAPE in pulmonary-edema-27, adult hypertensive lists). pulmonary-edema-21 q3 (s48) asks "the most appropriate medication to control his blood pressure now" with key nitroglycerin infusion for cocaine pulmonary edema. Same question type, different patient, agent and teaching point (avoid ACE inhibitors and ARBs in acute nephritis). Not a repeat. No other bank item keys an antihypertensive in pediatric nephritis.

### 41 q2 (new)

- ESC 2021 position statement (PMC8060056, opened this round): "initial use of 99mTc-PYP, DPD or HMDP scintigraphy coupled to assessment for monoclonal proteins", "clonal dyscrasia is excluded by all the following tests: serum free light chain (FLC) assay, serum and urine immunofixation", Grade 2 or 3 uptake allows a non-invasive ATTR diagnosis, and "genetic counselling and testing should be performed" after ATTR is confirmed. The keys and the explanation match. Immunofixation is not an option, so the two keys are the only defensible pair. Coronary angiography, Holter, ferritin and thyroid tests are not confirmatory for this picture.
- Uniqueness: no bank item mentions free light chains. Scintigraphy appears only as bone or HIDA or renal scintigraphy distractors elsewhere and in environmental (frostbite). Immunofixation appears only in loc (s32) unrelated. New.
- Defect: the "Transthyretin gene testing" option (required fix above).

### 41 q3 Ottawa score (recomputed)

Items from the OHFRS: stroke or TIA 1 (TIA 4 years ago), prior intubation 0 (never), arrival HR 110 or more 2 (118), arrival SaO2 under 90% 1 (87%), walk test HR 110 or more 0 (104), new ischemic ECG changes 0, urea 12 mmol/L or more 1 (13.6), serum CO2 35 mmol/L or more 0 (29), troponin at MI level 0, NT-proBNP 5 000 pg/mL or more 0 (4 300). Total **5**, matching the key (position 3 of 5 numeric options, in order). "4 misses the TIA" and "6 counts the NT-proBNP" are true. The q4 disposition explanation (admission threshold of more than 1, 91.8%) is unchanged and correct.

### 42 q4

The new key "Own pace on usual oxygen" is parallel to "Own pace on room air" and differs only in the oxygen, which is the decision. Explanation unchanged and true (CAEP 2025 walk test). PASS.

### 43 q3 and q4

- CMAJ 2018 (PMC5849448, opened this round): in heart failure, "thoracentesis may be deferred until the outcome of a trial of diuretic therapy is known", "determine whether more investigations are required if the effusion fails to improve", and fever and purulent sputum are among features that "should prompt an urgent evaluation". Citation details correct (CMAJ 2018;190(10):E291 to E295). The q3 explanation quotes it accurately. The q4 explanation says more investigation "is needed" where CMAJ says to "determine whether more investigations are required". A slight firming, but standard practice is to sample a presumed transudate that fails to respond to treatment, so it is accepted.
- q4 keys "Effusions unchanged on repeat imaging" and "Fever with purulent sputum" are the only options that justify a tap. The creatinine option traces to the new stem value (74 umol/L). A rise to 92 umol/L is 18 umol/L, below the AKI threshold, so "small rise" is true.
- Retained mock-mode cue (accepted, B6): the q4 prompt "over the next 3 days" and the options on weight and creatinine imply she was treated rather than tapped today, which points to the q3 key. A question about when to sample later cannot work without that, so it stays.
- Unrequested change judged (rule 4): "creatinine 74 umol/L" added to the 43 stem. Needed so the q4 option traces to the case. Acceptable.

## Checks with no change needed

- 39: unchanged in the diff. Passed last round.
- 40 q1 to q3 and q5: unchanged except the q5 update wording. Timeline consistent (K 5.2, then 5.4, then 6.6 mmol/L, with BP rising before bilevel ventilation).
- Key features: KF1 3, KF2 6, KF3 4, KF4 1, KF5 4, KF6 3. Every key feature is covered.
- Key positions (19 single keys): 4, 4, 4, 4, 3 from first to fifth. No position above 25%. Every position used. Menus are 41 q2 and 43 q4.
- Question counts: 4, 5, 4, 4, 4. Every SAMP has 4 or 5.
- Sources: every listed source is cited, Panetti and BTS 2010 removed cleanly. No personal names. Canadian spelling (colour, favour, titre).

## Sources verified this round

- Ong LT. Management and outcomes of acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022;11(5):139-145. https://www.wjgnet.com/2220-6124/full/v11/i5/139.htm (full text read, anti-hypertensive section).
- Garcia-Pavia P et al. ESC position statement on cardiac amyloidosis. Eur Heart J. 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8060056/ (opened).
- Beaudoin S, Gonzalez AV. Evaluation of the patient with pleural effusion. CMAJ. 2018. https://pmc.ncbi.nlm.nih.gov/articles/PMC5849448/ (opened).
- OHFRS items as listed in the previous verdict (MDCalc and the 2017 validation abstract).

## Physician-level items (not grounds for failure)

1. 40 q4 keys short-acting nifedipine in a child, citing Ong 2022. Signed headache-22 (s40, adult hypertensive encephalopathy) rejects immediate-release oral nifedipine because it "causes abrupt and unpredictable falls in BP". The populations and settings differ and Ong supports the pediatric use, but the two items teach in opposite directions on the same drug. The AAP 2017 guideline prefers IV agents for severe hypertension with life-threatening features. No IV competitor is offered here, so the key holds within the options.
2. 40 q4 as KF4: honest but near KF3 (see above). The batch's only KF4 item.
3. Items 1 to 4 from the previous verdict still stand (OHFRS against HEARTRISK6, the beta blocker in signed asthma-copd s04, the cardioselectivity rationale shared with asthma-copd-24, the oncologist's request for a tap in 43).

## Summary

pulmonary-edema-39, -42 and -43 pass. pulmonary-edema-40 and -41 fail with 2 required fixes:

- 1 repeated number from a related SAMP (40 q4 BP 162/108 mmHg, as in headache-43), low confidence
- 1 mock-mode cue that can be reworded (41 q2 "Transthyretin gene testing" names the q1 key), medium confidence

Every fix from round 2 was applied correctly. The new 40 q4 and 41 q2 keys are accurate, single-defensible, supported by the cited sources and new in the bank. The batch has not yet passed in full. The two fixes go back to a writer, and the revision needs a fresh independent review.
