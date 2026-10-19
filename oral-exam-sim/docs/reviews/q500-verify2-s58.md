# Q500 verify, round 2: s58, Shock/dehydration

Fresh independent review by Preceptor of the revised batch `src/samps/s58/shock.ts` (both lenses). The reviewer has not written, edited or reviewed this batch before and edited no SAMP, source or shared file (REVIEW-RULES rule 1). Inputs: the round 1 verdict `docs/reviews/q500-qa-s58.md`, the writer report `docs/reviews/q500-writer-s58-r2.md` and the diff of the file between commits 0fb8f3c and 5d1f124. All SAMPs stay `reviewed: false`. This is an AI audit, not clinician verification.

Batch tests (`SAMP_BATCH=s58 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`): 132 passed. Type check not rerun. House style: no dashes, no semicolons in strings, no mnemonics, no personal names, Canadian spelling ("Tumor" appears only inside the ENETS title). Stems are 103 to 138 words and updates 14 to 40 words. Single keys by position, first to fifth: 4, 5, 3, 4, 4 of 20 (25% maximum). Every number recomputes: osmolality 362 and 338 mmol/kg, corrected sodium 158 mmol/L, 5.5 to 11 L at 55 kg, 6% of 6.6 kg is 396 mL, 30 mL/kg x 74 kg is 2 220 mL, CKD-EPI 2021 eGFR for an 81-year-old woman at 132 umol/L is 35.

## Verdicts

| SAMP | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| shock-48 | PASS | PASS | PASS | PASS | PASS | |
| shock-49 | PASS | PASS | PASS | PASS | PASS | |
| shock-50 | FAIL (two small fixes) | PASS | PASS | FAIL | PASS | FAIL |
| shock-51 | FAIL (two small fixes) | PASS | PASS | FAIL | FAIL | |
| shock-52 | FAIL (rebuild) | FAIL | FAIL | FAIL | PASS | |

Totals: 2 of 5 SAMPs pass. 14 of 21 questions pass. 7 fail: 4 for mock-mode cueing (ruling B6) with one-line fixes, and 3 in shock-52 for repeated decisions.

## Round 1 required fixes

| Fix | Applied | Comment |
|---|---|---|
| 48 q3 replace HHS isotonic fluid choice | Yes | New decision (half the deficit over 12 hours, the rest over 12 hours) is not keyed elsewhere. loc-12 q3 and shock-14 q3 teach the risk and rate of osmolality or sodium fall, not the replacement timeline. |
| 48 q4 replace beta-blocker vitals item, fix McGee wording | Yes | Osmotic diuresis hiding an ongoing deficit is new. McGee is no longer quoted on losses. |
| 48 q2 advisory, effective osmolality | Yes | 2 x 146 + 46 = 338 mmol/kg added. |
| 49 q4 replace compensated shock item | Yes | Cold-room capillary refill is new. TREKK removed. |
| 50 SSC 2021 to SSC 2026 | Yes | Confirmed below. |
| 50 q2 replace CAP regimen | Yes | Antipseudomonal cover for prior respiratory Pseudomonas is new (s12 keys antipseudomonal cover only in febrile neutropenia). |
| 50 q3 replace passive leg raise | Yes, but see B6 fail below | Prolonged beta-lactam infusion is new. |
| 50 q4 replace MAP target with agent choice | Yes | Continue norepinephrine, no beta-blocker, in septic tachycardia. See note on infectious-diseases-28 q3 below. |
| 50 q5 add SSC 2026 fluid remark | Yes | Matches the SCCM text. But see B6 fail below. |
| 51 rebuild, remove balloon pump claim | Yes | Carcinoid crisis appears nowhere else in `src/samps` or `src/cases`. Dissection, tamponade and the balloon pump are gone. |
| 52 q1 replace shock index item | Applied, but the replacement repeats another item | See shock-52. |
| 52 q3 and q4 new key feature 8 decisions | Not as asked (writer departure) | Judged below. q3 repeats an existing decision. q4 passes. |

## Writer's departure and flags, adjudicated

**Departure (52 q3 and q4 tagged key features 6 and 7, not 8).** Accepted on its merits. The round 1 verdict wanted key feature 8 restored, and the batch test needs only one question per key feature. shock-51 q2 (IV octreotide, IV fluid and a corticosteroid for carcinoid crisis, from ENETS 2022 Table 3) is a genuine key feature 8 item: a non-fluid therapy chosen for the cause of shock. The writer's search table is accurate as far as I checked. The 52 q1 key feature 8 tag is not honest, though. Measuring an anti-Xa level is an ancillary test (key feature 6 territory), not a non-fluid therapy, and q1 fails anyway (below). So key feature 8 now rests on 51 q2 alone. That meets the test. The rebuilt shock-52 should carry a second key feature 8 item if a unique one can be found, but this is not required.

**48 q4 tag (key feature 1).** Accepted, borderline. She is an older adult whose BP of 112/62 mmHg sits about 50 mmHg below her usual 160, and the question is about not being reassured by a misleading sign. A physician may prefer key feature 2.

**48 q3, UK JBDS timeline.** Accepted. Diabetes Canada 2018 chapter 15 says only that HHS fluids "should be individualized" (Grade D, verified). JBDS 2023 (PMC10107355, verified) says "replace approximately 50% of estimated fluid loss within the first 12 h and the remainder in the following 12 h". The 2024 international consensus (ADA, EASD, JBDS, AACE and DTS, read through the Cleveland Clinic Journal of Medicine 2025 summary) gives no total timeline, uses 500 to 1 000 mL/hour for the first 2 to 4 hours and advises smaller boluses of about 250 mL in older adults and heart failure. Nothing current contradicts the key, and every distractor stays wrong under all three. Physician item below.

**51, carcinoid crisis evidence.** Accepted. ENETS 2022 (PMC9539661, read) grades the sympathomimetic and preferred vasopressor statement 4A, which is expert-level evidence. It is the most current guidance and every keyed claim matches its wording: triggers include "use of sympathomimetic drugs, anaesthesia or different cytolytic therapies (hepatic embolisation)", Table 3 lists "Octreotide i.v. (bolus and continuous infusion), i.v. fluids, corticosteroids, vasopressors", "the selective alpha1-agonist phenylephrine and vasopressin are the preferred vasopressors in this context", and carcinoid heart disease "is present in approximately 20%-50% of CS patients". Physician item below.

**52 q3, Canadian Association of Radiologists 2022 wording.** Verified by me in the full text (the simultaneous Canadian Journal of Kidney Health and Disease publication, doi 10.1177/20543581221097455, 15 pages). Recommendation 2a: "an indicated contrast-enhanced imaging study should proceed without delay. Do not delay for eGFR and do not withhold contrast that is necessary for an accurate diagnosis of the emergent pathology." On prophylaxis: "eGFR >30 mL/min/1.73 m2: no need for hydration", and at eGFR 30 or less for IV contrast "there is a lack of evidence on benefit of volume expansion". So the explanation is accurate (the source uses "30 or less", not "below 30"). The question still fails for duplication (below).

**49 q4, Gorelick 1993 in a dehydrated infant.** Accepted. Abstract verified: 32 well-hydrated children, cool room mean 19.4°C against warm room 25.7°C (about 6°C), fingertip refill 2.39 against 0.85 seconds, 31% normal when cool. The explanation states plainly that the data come from healthy children, and the update gives her unchanged pulse and alertness, so the key is defensible. Physician item below.

**SSC citation.** Confirmed as the 2026 edition: Crossref returns "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2026", Critical Care Medicine, first authors Prescott, Antonelli, Alhazzani, dated 23 March 2026, doi 10.1097/CCM.0000000000007075. The SCCM recommendation page reads: "For adults with septic shock 65 years old or older, we 'suggest' an initial MAP range of 60-65 mm Hg over higher ranges" (conditional, low certainty). 50 q4 says "suggests" for a 78-year-old, which matches. The same page confirms prolonged beta-lactam infusion as a strong recommendation of moderate certainty (50 q3 says "strongly recommends", correct), "suggest against" beta-blockers (very low certainty), norepinephrine first line over dopamine, and the remark that fluid "should be individualized" rather than continued until lactate normalizes (50 q5). The page does not mention phenylephrine, so "not among the recommended agents" is true.

## Required fixes

### shock-50

**q3 (FAIL, high confidence). Mock-mode cue, SCORING-RULINGS B6.**
- Current update: "His first dose of piperacillin-tazobactam 4.5 g IV ran over 30 minutes within the first hour." Current prompt: "Which of the following is the most appropriate way to give his next piperacillin-tazobactam doses?"
- Problem: q2's key is piperacillin-tazobactam IV. In mock mode q3 is shown at the same time and names it twice.
- Required change: remove the drug name from the update and prompt, for example update "His first beta-lactam dose ran IV over 30 minutes within the first hour." and prompt "Which of the following is the most appropriate way to give his next beta-lactam doses?" Keep the explanation's drug name only if the explanation is not shown before q2 is answered, otherwise say "the beta-lactam". Source: SCORING-RULINGS B6.

**q5 (FAIL, high confidence). Mock-mode cue, B6.**
- Current update: "Three hours later his MAP is 67 mmHg on norepinephrine."
- Problem: q4's new key is "Continue norepinephrine alone". The q5 update tells the candidate he is still on norepinephrine three hours later, which rules out every "switch" option.
- Required change: "Three hours later his MAP is 67 mmHg." Nothing else in q5 needs the drug name. Source: B6.

**q4 note (PASS).** The key decision (keep norepinephrine, no esmolol, no switch) is new. Part of the reasoning, the 60 to 65 mmHg range at age 65 or older, is already keyed in infectious-diseases-28 q3 (s41). That is acceptable because the question asks for the agent, not the target.

### shock-51

**q3 (FAIL, medium confidence). Mock-mode cue, B6.**
- Current update: "After 2 L of crystalloid her JVP is at the angle of the jaw."
- Problem: crystalloid IV bolus is one of the three q2 keys, and the update says it was given.
- Required change: for example "An hour after arrival her JVP is at the angle of the jaw." The explanation's warning about further fluid still reads correctly. Source: B6.

**q4 (FAIL, high confidence). Mock-mode cue, B6.**
- Current update: "Octreotide, hydrocortisone and further fluid are running."
- Problem: names all three q2 keys.
- Required change: for example "Her initial treatment for the crisis is running. Her systolic pressure is still 74 mmHg and the flushing persists." Source: B6.

q1 and q2 pass. Carcinoid crisis is unique in the bank, the distractor reasons are true, and the menu (select 3 of 6) has one defensible set.

### shock-52 (FAIL, rebuild)

**SAMP level (high confidence). Scenario repeats an existing SAMP.** multiple-trauma-37 (s45, "Older pedestrian on an anticoagulant") is an older adult on a DOAC with fractures of the sacrum and both pubic rami, a negative eFAST, and questions on DOAC reversal and on the best test of residual DOAC effect. shock-32 (s50) is also an 81-year-old woman on an anticoagulant and a beta-blocker who fell, with right groin pain and pelvic retroperitoneal bleeding. multiple-trauma-45 (s45) is an older woman with pubic rami fractures after a fall. shock-52 now combines these. Required change: rebuild shock-52 on a new scenario, not an older adult with a bleeding pelvic fracture on an anticoagulant. The q4 decision may move into the rebuild if the new patient has hemorrhagic shock.

**q1 (FAIL, high confidence). Repeat, a false distractor reason and a mistag.**
- Current: "Which of the following tests best shows how much apixaban effect she has now?", key "Apixaban-calibrated anti-Xa level".
- Problems: (1) multiple-trauma-37 q2 asks "Which of the following tests best shows residual dabigatran effect ...?" in the same scenario, with a heparin-calibrated anti-Xa level among the distractors. This is the mirror question for the other DOAC class. (2) The explanation says a heparin-calibrated anti-Xa assay "does not measure how much". The cited European guideline rationale for Recommendation 34 says the opposite: when a drug-specific calibrated assay is unavailable, "a universal, LMWH-calibrated, anti-Xa assay is a reliable alternative". (3) "Treatment of life-threatening bleeding should not wait for the result" is not in the cited source. (4) Key feature 8 does not fit a laboratory test.
- Required change: replace in the rebuild with a decision not in the bank.

**q2 (FAIL, medium confidence). Repeat of an existing teaching point.**
- Current: key "It misses retroperitoneal pelvic bleeding" after a negative FAST.
- Problem: multiple-trauma-21 q4 (s45) keys that eFAST cannot detect retroperitoneal injury, and abdominal-pain-33 q1 (s19) asks "Which of the following statements about a FAST examination for her is most accurate?" with key "A negative FAST does not exclude injury". multiple-trauma-37 also sets a negative eFAST in a pelvic fracture. Round 1 passed this question without these matches.
- Required change: replace in the rebuild.

**q3 (FAIL, high confidence). Repeat of an existing decision, and its key is revealed by q4.**
- Current: key "Contrast CT now, no prophylactic fluid" at an eGFR of 35, citing CAR 2022.
- Problems: (1) the oral case `src/cases/batch05/older-man-severe-abdominal-pain.ts` keys the same decision, citing the same CAR 2022 guidance: "Do not delay contrast imaging for his kidney function", with the rubric item "Orders CT angiography promptly and does not withhold contrast because of moderate kidney impairment" and "I ordered a CT without contrast to protect his kidneys" as the weak choice. abdominal-pain (s19) also keys CT angiography on dialysis despite fear of contrast nephropathy. (2) The q4 update opens "CT shows active contrast extravasation", which gives away the q3 key in mock mode (B6).
- Required change: replace in the rebuild.

**q4 (PASS).** Adding norepinephrine when restricted volume replacement fails to reach a systolic target of 80 to 90 mmHg matches European Recommendations 13 (Grade 1B) and 14 (Grade 1C), verified in PMC9977110. Dobutamine "in the presence of myocardial dysfunction" and the epinephrine mortality association are both in the rationale. No other item keys this. It can be kept in the rebuild.

**Coverage after the rebuild.** Without shock-52 the batch still covers key feature 6 (50 q1, 51 q3) and key feature 7 (50 q4, 51 q4). The rebuild must keep 4 or 5 questions and the single-key position spread (no position above 25%, every position used). Grep `src/samps` and `src/cases` for each new decision, including the s45 multiple-trauma file, which the round 2 search missed.

## Questions that pass, with notes

- 48 q1: McGee 1999, dry axilla positive likelihood ratio 2.8. Not keyed elsewhere.
- 48 q2: Diabetes Canada 2018 gives water losses of "100 mL/kg and 100 to 200 mL/kg" for DKA and HHS (verified). JBDS gives 100 to 220 mL/kg, so the key holds under both.
- 48 q3: see the JBDS adjudication. The q4 update (2 L by 3 hours) is consistent with the keyed pace.
- 48 q4: Diabetes Canada: "hyperglycemia causes urinary losses of water and electrolytes". Distractor reasons are true.
- 49 q1 to q3: unchanged from round 1 and still correct. CPS bronchiolitis recommends isotonic dextrose saline with sodium monitoring.
- 49 q4: see the Gorelick adjudication.
- 50 q1: Lichtenstein 2009, specificity 94%.
- 50 q2: ATS/IDSA 2019 Table 4 (PMC6812437, read): for severe CAP with prior respiratory isolation of P. aeruginosa, "Add coverage for P. aeruginosa and obtain cultures". Piperacillin-tazobactam is on its antipseudomonal list. Ceftriaxone and ampicillin-sulbactam are its standard non-antipseudomonal beta-lactams. No current Canadian adult CAP guideline exists.
- 50 q4 and q5: see above. q5 needs only the B6 fix.
- 52 q4: see above.

## Needs physician decision (not grounds for failure)

1. 48 q3: the HHS replacement timeline rests on the UK JBDS 2023 guideline. Diabetes Canada 2018 is silent and the 2024 international consensus gives no total timeline.
2. 48 q4: JBDS lists a urine output of 0.5 mL/kg/hour or more as one marker that hypovolemia is corrected. The item teaches that output is unreliable while glucose is still 34 mmol/L. Both can be true, but a physician should confirm the framing.
3. 49 q4: the evidence is from healthy children. Rewarming and retesting a dehydrated infant before acting is a judgement.
4. 51: carcinoid crisis treatment rests on ENETS grade 4 evidence.
5. 52 q4 (or its rebuild): the oral case `src/cases/batch07/ruptured-ectopic-pregnancy.ts` labels "I started norepinephrine to bring her systolic above 100 while I waited for more blood" as unsafe. That is a different context (before blood, a higher target), so it is not a reversal, but the bank should state one position on vasopressors in hemorrhagic shock. The European guideline also says permissive hypotension "should be carefully considered in elderly patient".
6. 50 q4: SSC 2026 does not mention phenylephrine. The distractor rests on its absence from the recommended agents.

## Sources verified this round

- Prescott 2026 SSC: Crossref (doi 10.1097/CCM.0000000000007075, 23 March 2026) and https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
- Macdonald 2022 CAR: Crossref (doi 10.1177/08465371221083970) and full text of the co-publication, doi 10.1177/20543581221097455
- Grozinsky-Glasberg 2022 ENETS: Crossref and https://pmc.ncbi.nlm.nih.gov/articles/PMC9539661/
- Gorelick 1993: Crossref and the Europe PMC abstract
- Mustafa JBDS: Crossref (online December 2022, issue 2023) and https://pmc.ncbi.nlm.nih.gov/articles/PMC10107355/
- Rossaint 2023 European trauma guideline: Crossref and https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/ (Recommendations 13, 14 and 34)
- Metlay 2019 ATS/IDSA: https://pmc.ncbi.nlm.nih.gov/articles/PMC6812437/ (Table 4)
- Diabetes Canada 2018 chapter 15: https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15
- 2024 hyperglycaemic crises consensus, through https://www.ccjm.org/content/92/3/152
- Unchanged and verified in round 1: McGee 1999, Steiner 2004, CPS bronchiolitis, Lichtenstein 2009, ANDROMEDA-SHOCK 2019, Friese 2007.

## Summary

2 of 5 SAMPs pass (shock-48, shock-49). 14 of 21 questions pass. shock-50 and shock-51 each need two one-line update or prompt edits for mock-mode cueing (ruling B6). shock-52 needs a rebuild: its scenario repeats multiple-trauma-37 and shock-32, q1 mirrors multiple-trauma-37 q2 and misstates its source on heparin-calibrated anti-Xa assays, q2 repeats multiple-trauma-21 q4 and abdominal-pain-33 q1, and q3 repeats the batch05 oral case on not delaying contrast for kidney function. Its q4 passes and may be kept. The writer's departure on key feature 8 is accepted because shock-51 q2 covers it. Every other writer flag is accepted, with six physician items.
