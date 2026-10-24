# Q500B verification review 3: s82, Pre-eclampsia (Revision 3)

Reviewer: Preceptor QA. I am a fresh reviewer. I did not write, edit or review this batch before. I read all of `src/samps/s82/pre-eclampsia.ts` (pre-eclampsia-39 to pre-eclampsia-43), the writer's report with Revisions 1 to 3, and the three earlier verdicts (`q500b-qa-s82.md`, `q500b-verify-s82.md`, `q500b-verify2-s82.md`). I made no edits to the batch (REVIEW-RULES rule 1).

## Checks run

- `SAMP_BATCH=s82 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files and 128 tests, all passed. This includes the bank-wide near duplicate stem test.
- House style: no em or en dashes, no semicolons in content, no mnemonics, no personal names. Author "Preceptor", `reviewed: false`, `version: 1`. Spelling follows the bank ("centre", "favours", "caesarean", "hemorrhage", "anesthesia", "sulfate").
- Key positions for the 19 single-answer questions, recounted from the file, first to fifth: 4, 4, 4, 3, 4. None is above 25 percent.
- Every number recomputed: BP rises (104/66 to 158/104, 112/70 to 150/98, 110/70 to 156/102, 118/76 to 152/100), HELLP thresholds (40: platelets 92, AST 186, LDH 690 meet ACOG. 42 q4: platelets 131 and LDH 390 do not. 43: platelets 84, AST 264, LDH 780 meet ACOG), Pritchard regimen (4 g IV plus 5 g IM into each buttock, then 5 g IM every 4 hours), 10 g IV is 2.5 times a 4 g load, PCR 18 below 30 mg/mmol, enoxaparin 1 mg/kg at 98 kg is 98 mg, rounded to 100 mg, NICE moderate risk factors (age 43, interval 12 years, BMI 37).
- Overlap: grep over `src/samps` and `src/cases` for pre-eclampsia, preeclampsia, HELLP, hydralazine with fluid, crystalloid, preload, peroxidase, hydronephrosis, Pritchard, enoxaparin with neuraxial, nifedipine and methyldopa with breastfeeding, epinephrine in pregnancy. I also checked the Q500B batches written since the last review (s72 to s88, case batches 16 to 19). The only new pre-eclampsia content outside s15, s47 and s82 is case batch19 right-rib-pain-through-an-interpreter (HELLP first, betamethasone), already weighed by the earlier reviews. s73 dvt-pe covers postpartum VTE and LMWH monitoring, not neuraxial timing. No new repeats.

## Sources

| Source | Result |
|---|---|
| NICE NG133 | **Could not open.** nice.org.uk returned 403 this session, as in verify2. I rely on the first review's verbatim check and the writer's Revision 2 reading of 1.8.8, 1.8.11 and 1.8.12. The wording used (1.8.8 "consider up to 500 ml crystalloid ... first dose of intravenous hydralazine in the antenatal period", 1.8.11 no volume expansion unless hydralazine is the antenatal antihypertensive, 1.8.12 maintenance 80 mL/hour) matches my knowledge of NG133. |
| Simerville 2005 (AAFP) | Opened. "The dipstick test for blood detects the peroxidase activity of erythrocytes", and "myoglobin and hemoglobin also will catalyze this reaction", and intact red cells on microscopy separate hematuria from these. Supports 40 q2. |
| WAO 2020 (PMC7607509) | Opened. Criterion 1 (skin or mucosal involvement with respiratory compromise, reduced BP or end-organ dysfunction, or severe gastrointestinal symptoms) and criterion 2 (hypotension, bronchospasm or laryngeal involvement after a known or highly probable allergen). The 42 q3 paraphrase is correct. |
| Conde-Agudelo 1999 (PMID 10521771) | Abstract opened (Europe PMC API). 35 studies, 833 714 women, typical RR 0.68 (0.67 to 0.69). Supports 43 q2. |
| Tamir 2025 (PMID 40727356) | Abstract opened. MRI study, right hydronephrosis 43.8% and 45.1% in asymptomatic women, no significant difference in women with unexplained right pain. Supports 40 q3. |
| Brookfield 2021 (PMID 36277458) | Abstract opened. Pritchard regimen in severe pre-eclampsia, therapeutic levels reached. Supports 39 q4. |
| Leffert 2018 SOAP (PMID 29099429) | Abstract opened. The 24 hour interval after a therapeutic LMWH dose is in the body, not the abstract. It matches signed s33 dvt-pe and my knowledge of the statement. |
| ACOG PB 222 | **Could not open** (no free full text, and a web search gave only secondary sources). See note 2 on the 41 q3 wording. |
| WHO 2011, SOGC No. 426, ISSHP 2021 | **Not opened** this session (blocked in earlier sessions). Nothing in Revision 3 changes how WHO 2011 is used. SOGC 426 and ISSHP remain the physician points below. |

## Earlier fails: status

| Item | Raised in | Status |
|---|---|---|
| 39 q4 medevac cue | qa | Resolved |
| 41 q2 key scored twice | qa | Resolved (findings question, key "Ankle clonus with confusion") |
| 41 q3 explanation on magnesium below 160/110 | qa | Resolved |
| 41 q4 psychiatry cue | qa | Resolved |
| 42 q3 PCR cue | qa | Resolved |
| 42 q4 "Progressive pre-eclampsia" | qa | Resolved ("Evolving organ involvement") |
| 39 q2 urinary symptoms not in stem | verify | Resolved ("She has no dysuria or urinary frequency.") |
| 39 q3 platelet cue | verify | Resolved |
| 40 q4 repeat of signed pe-02 q3 | verify | Resolved (rebuilt on the hydralazine preload) |
| 42 q1 normal edema reason | verify | Resolved |
| 42 q2 thyroid reason | verify | Resolved |
| 43 q3 "falling platelet count" | verify | Resolved ("low platelet count") |
| 40 q4 labetalol 80 mg step | verify2 | Resolved, text exact |
| 40 q4 "maintenance already capped" not in stem | verify2 | Resolved, text exact |
| 40 q4 reconciling sentence with signed s47 | verify2 | Resolved, text exact |

Revision 3 made no unrequested changes. Options, key, key position, keyFeature and source of 40 q4 are unchanged, as the writer reports.

## Verdicts

### pre-eclampsia-39 (Aches during a household flu outbreak)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | New hypertension after 20 weeks with 2+ dipstick meets NICE. Distractor reasons true. She is afebrile, so febrile proteinuria does not compete. |
| q2 | PASS | Every claim in the explanation traces to the stem (37.1, no guarding, no urinary symptoms). |
| q3 | PASS | Medevac now is correct. RUQ pain is a severe feature, so the WHO "loading dose then transfer" point applies. |
| q4 | PASS | Pritchard completion correct. Distractor reasons true. Note 1 on option order. |

### pre-eclampsia-40 (Flank pain with a history of stones)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Correct. Distractor reasons trace to the stem. |
| q2 | PASS | Peroxidase point confirmed in Simerville. Hemolysis labs consistent. |
| q3 | PASS | Tamir 2025 confirmed. |
| q4 | PASS | Update now shows a full labetalol 20, 40, 80 mg course before hydralazine, as ACOG and the signed bank teach. The added sentence reconciles the key with signed s47 q2. The last sentence now rests on NICE, not on a stem fact. Hydralazine 5 mg IV first dose is within the usual 5 to 10 mg. Every distractor reason is true. Physician point 1 stands. |

### pre-eclampsia-41 (Restless and not sleeping after the birth)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Correct key. Distractor reasons trace to the stem. |
| q2 | PASS | NICE neurological complications (altered mental status, clonus) qualify without proteinuria. The ACOG 6 week postpartum window is correct. Mock-mode cue stays flagged (cannot be removed). |
| q3 | PASS | Magnesium 4 g IV is the right first drug with confusion, clonus and headache. Note 2 on the ACOG attribution. |
| q4 | PASS | Nifedipine XL once daily, NICE avoidance of diuretics and ARBs while breastfeeding, methyldopa stopped within 2 days. |

### pre-eclampsia-42 (Swollen face after a seafood dinner)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Timeline holds (swelling over 2 days, shrimp last night). Distractor reasons true. |
| q2 | PASS | PCR threshold 30 mg/mmol correct. Thyroid and C4 reasons true. |
| q3 | PASS | WAO criteria confirmed this session. Epinephrine 0.5 mg IM is the standard adult dose, and its alpha effect is basic pharmacology. Oral labetalol is appropriate at 158/104. |
| q4 | PASS | NICE organ involvement thresholds and HELLP thresholds correct. |

### pre-eclampsia-43 (Chest pain pathway at three in the morning)

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Correct. |
| q2 | PASS | NICE moderate risk factors correct. Smoking RR 0.68 in 833 714 women confirmed this session. Mock-mode cue stays flagged. |
| q3 | PASS | ACOG thresholds correct. AFLP sentence true. |
| q4 | PASS | Dose arithmetic and SOAP 24 hour interval correct. Platelets of 84 do not by themselves bar neuraxial anesthesia, so the enoxaparin is the blocker. |

## Notes (not fails)

1. **39 q4 option order.** The five magnesium sulfate options run 5 g IM every 12 hours, 5 g IM into each buttock, 10 g IV, 2 g IV push, 1 g/hour. That is neither alphabetical nor low to high. SCORING-RULINGS B12 says doses of one drug sit low to high, but B12 records an open conflict, and `optionsOrdered` in `tests/samp-quality.test.ts` lets doses of one drug sit in any order. Three earlier reviews passed it. Not a fail. If the physician or a later format pass wants B12 applied, the low to high order is 1 g/hour by gravity drip, 2 g IV push every hour, 5 g IM every 12 hours, 5 g IM into each buttock, 10 g IV over 20 minutes, correct: 3. That keeps the key positions at 4, 3, 4, 4, 4.
2. **41 q3 ACOG wording.** The explanation says ACOG counts confusion, "a new cerebral disturbance", as a severe feature. That phrase is from the 2013 ACOG task force. My recollection is that PB 222 lists "new-onset headache unresponsive to medication" and "visual disturbances" instead, and I could not open PB 222 to check. The key is right either way (NICE and ISSHP count altered mental status and clonus as neurological complications, and she also has a headache). If a later check shows PB 222 does not use that wording, change the source to nice-ng133 and the first sentence to "Her confusion and clonus are neurological complications of pre-eclampsia, so she needs magnesium sulfate to prevent eclampsia although her BP is below 160/110 mmHg." Not a fail, because it is unconfirmed.
3. 40 q4: the explanation says the same thing twice in a row ("while otherwise avoiding volume expansion" and then "This small preload is the only exception NICE makes"). It is redundant, not wrong. The second sentence was a reviewer-requested fix, so leave it.

## Needs physician decision

1. **40 q4.** The key rests on NICE NG133 1.8.8, which only says "consider". No SOGC 426 or ISSHP statement on a crystalloid preload with IV hydralazine could be found, and SOGC-authored material advises against plasma volume expansion in general. Please confirm that a preload of up to 500 mL is acceptable Canadian practice.
2. 39 q4: SOGC 426 support for the IM Pritchard regimen at a nursing station with no pump, and IM injections before the platelet count is known in suspected HELLP.
3. 41 q3: SOGC 426 support for magnesium for postpartum pre-eclampsia with neurological features below the severe BP range (see note 2).
4. 41 q4: SOGC lists methyldopa as compatible with breastfeeding. The key (nifedipine XL) is still the best answer.
5. Mock-mode cues left in place because the questions cannot work without them: 41 q2 (update and prompt imply the q1 key) and 43 q2 (prompt names pre-eclampsia).

## Summary

The batch has 20 questions in 5 SAMPs. All 15 earlier fails are resolved: 6 from the first review, 6 from verify and 3 from verify2. Revision 3 made exactly the three requested changes to 40 q4 and nothing else. All 20 questions pass. No keyed answer is clinically wrong, every number checks, and tests pass. I could not open NICE NG133, ACOG PB 222, WHO 2011, SOGC 426 or ISSHP 2021 this session. Simerville, WAO 2020, Conde-Agudelo, Tamir, Brookfield and Leffert were opened and support their points.

Overall: PASS
