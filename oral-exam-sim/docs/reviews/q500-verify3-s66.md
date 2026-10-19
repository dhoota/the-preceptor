# Q500 verify, round 3: s66, Multiple trauma

Fresh independent review by Preceptor of the revised batch `src/samps/s66/multiple-trauma.ts`, ids multiple-trauma-48 to multiple-trauma-52. This reviewer did not write, edit or earlier review this batch and edited no file except this verdict (REVIEW-RULES rule 1). Every fix below goes back to a writer, and the revision needs another fresh review. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: the round 2 verdict (`docs/reviews/q500-verify2-s66.md`), "Round 3" in `docs/reviews/q500-writer-s66-r2.md`, the diff from dc6fe70, the Q500 brief, the SAMP review brief, SAMP_SPEC, REVIEW-RULES, DECISIONS and SCORING-RULINGS. Uniqueness was checked against the catalogues for multiple-trauma, shock, gi-bleed and abdominal-pain, plus grep over every other catalogue and over `src/samps` and `src/cases` (all Q500 batches included).

Checks run: `SAMP_BATCH=s66 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (3 files, 136 tests). The s66 type check prints nothing. House style scan: no em or en dashes, no semicolons, no characters outside ASCII except the degree sign, no mnemonics. `author: "Preceptor"`, `reviewed: false`, `version: 1`.

## Verdicts

| Id | Verdict | Questions that fail |
|---|---|---|
| multiple-trauma-48 | FAIL | q1 |
| multiple-trauma-49 | PASS | none (unchanged) |
| multiple-trauma-50 | FAIL | q2, q3 |
| multiple-trauma-51 | PASS | none (unchanged) |
| multiple-trauma-52 | PASS | none (unchanged) |

## Required fixes from round 2: were they applied?

| Item | Applied | Comment |
|---|---|---|
| 48 q1 repeat of abdominal-pain-39 q2 | Yes | Replaced by an ABC score menu. The transfer is now a fact in the q3 update. The new item is judged below and fails on two small wording points. |
| 48 q3 (now q4) children's section sentence | Yes, verbatim | The wording round 2 asked for is in place. PASS. |
| 48 q4 repeat of ems-35 q3 (tranexamic acid) | Yes | Replaced by an alloantibody question (now q3). CRASH-2 is gone from the file. ATLS is dropped from 48 only, and 49, 51 and 52 still cite it. PASS. |
| 50 q2 repeat of burns-18 q2, reused labs | Yes | Replaced by a key feature 5 acid-base item. No CK, creatinine or potassium value from burns-18 or the trench case is reused. The new item fails on a missing arrival value (below). |
| 50 q3 repeat of the urine target items, mannitol overstatement | Yes | Chavez and every rhabdomyolysis claim are gone. The replacement fails as a repeat of gi-bleed-33 q1 (below). |
| 50 stem | Yes | The legs no longer point to crush. q1 and q4 still read correctly. |

## Per question

### multiple-trauma-48

- q1 FAIL (low to medium, option cue and one source misstatement).
  - Recomputed: the ABC score (Nunez 2009) gives one point each for a penetrating mechanism, a positive FAST, arrival systolic BP 90 mmHg or less and arrival heart rate 120/minute or more. Her arrival vitals are pulse 124/minute and BP 88/54 mmHg, and eFAST shows free fluid, so 3 points. Key [0, 1, 3] is correct and single-defensible. 75% sensitive and 86% specific at a score of 2 or more is verbatim from the abstract. Key feature 6 (massive transfusion) is an honest tag. No ABC score or massive transfusion prediction item is anywhere else in the bank (shock index items in s58, s65, s68 and first-trimester-bleeding are a different tool).
  - Problem 1 (cue): the two keyed vital signs are the only vitals labelled "Arrival" ("Arrival pulse of 124/minute", "Arrival systolic BP of 88 mmHg"), while the distractor vitals are not ("Respiratory rate of 24/minute", "Temperature of 35.8°C"). A candidate who half remembers that the score uses arrival vitals can pick the two "Arrival" options on wording alone.
  - Problem 2 (source): "In the validation cohort a score of 2 or more ..." The Nunez study set out to validate the older TASH and McLaughlin scores and proposed ABC in that same retrospective cohort (596 patients, one level I centre). It is the original study of ABC, not a validation cohort for it.
  - Required change: label the vitals in parallel. Either drop "Arrival" from both keys or add it to both vital distractors ("Arrival respiratory rate of 24/minute", "Arrival temperature of 35.8°C"). With the second choice the alphabetical order becomes Arrival pulse, Arrival respiratory rate, Arrival systolic BP, Arrival temperature, Blunt mechanism, Free fluid, Midline tenderness, Prehospital Ringer's lactate, and `correct` becomes [0, 2, 5]. Replace "In the validation cohort" with "In the original study of the score".
  - Source: Nunez TC et al. J Trauma. 2009 (PubMed 19204506, abstract read through Europe PMC).
- q2 PASS. Unchanged.
- q3 PASS. Anti-Kell, antigen-negative units 3 hours away, key "Group O red cells, uncrossmatched". Ringel 2022 verified in the abstract (Europe PMC, PMC9421688): 6,109 patients needing emergency transfusion received primary uncrossmatched group O units, antibody screening was positive in 413, 19 received units against clinically significant alloantibodies, none appeared to develop significant hemolysis, and the conclusion calls the practice "highly safe". The paper's table includes a patient with anti-K who had no reaction. Every distractor reason is true (albumin, crystalloid and plasma carry no oxygen). Key feature 4 (modifying factor, a known antibody) is an honest tag. No alloantibody or antigen-negative item is elsewhere in the bank. The key option echoes the update's "uncrossmatched group O red cells", but every option names a product and the echo describes what she has already had, so it is not judged a cue. Advisory only: the writer's own flag is fair. One sentence that most donor units are Kell negative would add teaching, but only with a verified source.
- q4 PASS. The round 2 wording is in place and true to Fischer 2018 items 6, 8 and 10.v.

### multiple-trauma-49

PASS. Unchanged since dc6fe70 (no diff hunk touches lines 123 to 230 of the old file).

### multiple-trauma-50

- q1 PASS. Unchanged except for the stem legs. Removing the glucose from the q2 update removes the mock-mode cue.
- q2 FAIL (medium, lead-in and explanation rely on values the case never gives).
  - Recomputed: anion gap 142 minus (119 plus 16) = 7, a normal gap. Venous pH 7.28 with bicarbonate 16 fits a venous pCO2 of about 35 mmHg. The key (hyperchloremic acidosis from saline) is single-defensible: lactate 1.1, beta-hydroxybutyrate 0.2 and creatinine 81 dispose of the other four. The European guideline text is verified (full text, PMC9977110): base deficit estimates hypoperfusion "provided there is no other cause of metabolic acidosis such as renal failure or hyperchloremia", "lactate levels more specifically reflect the degree of tissue hypoperfusion", and saline raises concern for "hyperchloraemic acidosis". No question in the bank keys this decision. s11 gi-bleed lists hyperchloremic acidosis as a harm of crystalloid and s16 and s26 prefer Ringer's lactate, which are different decisions.
  - Writer's flag, KF5 or KF6: KF5 is accepted. A falling bicarbonate after resuscitation is the subtle change, and the task is to read it correctly before acting on a false signal of bleeding. It is not a fluid target question.
  - Problem: the prompt asks for "the fall in his bicarbonate since arrival", and the explanation says "his chloride has risen", but no arrival bicarbonate or chloride is given anywhere in the case (SAMP_SPEC section 3, Lens B 1). Second, "4 L of 0.9% saline over 4 hours" does not say whether it includes the paramedics' 1 L, and q3 relies on a total of 5 L.
  - Required change: give the arrival values and the volume plainly in the q2 update, for example: "He is alert after 4 L more of 0.9% saline in the department over 4 hours. Pulse 84/minute, BP 146/86 mmHg. Venous pH 7.28. Sodium 142, chloride 119 (104 on arrival), bicarbonate 16 (23 on arrival), lactate 1.1 and beta-hydroxybutyrate 0.2 mmol/L. Creatinine 81 umol/L." Keep the update within about 45 words. Then the "rise" and "fall" in the explanation trace to the case. Recheck the arrival gap if other values are chosen (with these, 140s sodium gives a normal arrival gap).
  - Advisory: the same guideline limits 0.9% saline to 1 to 1.5 L in trauma. One clause saying so would teach why 4 L of saline was itself the error.
- q3 FAIL (medium, repeat of a signed key decision with a near-identical option set).
  - Recomputed and verified: INR 1.5 is under 1.8, and 15 mL/kg at 92 kg is 1 380 mL, about 1.4 L. The CSTM Choosing Wisely list (PDF opened, last updated June 2018), item 3: "Don't transfuse plasma to correct a mildly elevated (<1.8) international normalized ratio (INR) or activated partial thromboplastin time (aPTT) before a procedure. A mildly elevated INR is not predictive of an increased risk of bleeding. Furthermore, transfusion of plasma has not been demonstrated to significantly change the INR value". The explanation is true to it, and item 5 supports the PCC and vitamin K reasons.
  - Writer's flag, against gi-bleed-33 q1: judged the same decision. gi-bleed-33 (s39, `reviewed: true`) asks how to manage an INR of 2.0 and keys "No product to correct the INR" against "Cryoprecipitate 10 units IV", "Frozen plasma 15 mL/kg IV" and "Prothrombin complex 25 units/kg IV". Here the key is "No correction of the INR" against "cryoprecipitate 10 units IV", "frozen plasma 15 mL/kg IV" and "prothrombin complex 1000 units IV". The decision (withhold products aimed at an abnormal INR) and the core teaching (the INR does not predict bleeding and plasma does not fix it) are the same. s11 gi-bleed (the resident's plasma plan) teaches the same point again. The cirrhosis and pre-procedure settings are a twist on one decision, which is the standard round 2 applied to 48 q1. A candidate who has done gi-bleed-33 answers this one from the option list. It is not literal key feature wording, so D1 cannot cover it, and D1 stands at 19 of 20.
  - Also: key feature 6 is a loose fit. KF6 is fluid and blood targets in major trauma resuscitation, and this is a stable, non-bleeding patient the day before elective fixation.
  - Required change: replace q3 with a decision not keyed in the bank, checked against the catalogues and `src/samps` before writing. Drop `cstm-cw` if nothing cites it. Key feature 6 stays covered by 48 q1 and 51 q3, so the replacement may test any key feature. Key position: first and fifth each hold 5 of 20 single keys today. Once this item (fifth) is removed, fifth holds 4, so the new key may sit second, third, fourth or fifth, but not first.
- q4 PASS. Unchanged. Advisory (low): with the new q2 and q3, the q4 update ("Fluids now run through two new peripheral lines", the needle "still in place") reads as if the humeral needle stayed in for 4 or more hours of resuscitation before anyone saw the arm. Consider moving this question to q2, which leaves key positions unchanged, and saying in the acid-base update that the saline ran through peripheral lines.

### multiple-trauma-51

PASS. Unchanged since dc6fe70.

### multiple-trauma-52

PASS. Unchanged since dc6fe70.

## Key positions, format and coverage

Single key positions, first to fifth: 5, 4, 2, 4, 5 of 20 (25% at most, every position used). Menus: 48 q1 and 49 q1. Option order, lengths and prompts pass the tests.

Key feature coverage, by tag: KF1 52 q1. KF2 49 q2, 49 q5, 52 q3. KF3 50 q4, 51 q1, 51 q2. KF4 48 q3, 50 q1. KF5 50 q2 (only item, so its fix must keep KF5). KF6 48 q1, 51 q3 (50 q3 to be replaced). KF7 48 q2, 49 q1, 49 q3, 49 q4, 52 q2. KF8 48 q4, 51 q4, 52 q4, 52 q5. Every key feature is covered once the required fixes keep their tags.

## Sources verified this round

- Nunez TC et al. J Trauma. 2009. PubMed 19204506, abstract read through Europe PMC.
- Ringel F et al. Transfus Med Hemother. 2022. PMC9421688, abstract and results read.
- Rossaint R et al. The European guideline on management of major bleeding and coagulopathy following trauma, sixth edition. Crit Care. 2023. PMC9977110, full text read (recommendations 10 and 15 and their rationale).
- Canadian Society for Transfusion Medicine. Transfusion medicine: ten things physicians and patients should question. Choosing Wisely Canada. Last updated June 2018. https://choosingwiselycanada.org/wp-content/uploads/2017/02/Transfusion-medicine.pdf, PDF read (items 3, 5 and 9).

## Physician-level items (not grounds for failure)

- 48 q3: a lab needing 3 hours for Kell-negative units is plausible at a small hospital that must call its supplier, though most donor units are Kell negative.
- 48 q3: CSTM item 9 reserves O negative units for women of child-bearing potential of unknown group. The key does not name the RhD type, which keeps it true either way.
- 50 q2: the case has a normotensive man receive 4 L of saline. The item teaches the consequence and does not endorse it.

## Summary

5 SAMPs, 22 questions (20 single, 2 menu). 19 pass and 3 fail. Every round 2 fix was applied as asked, 49, 51 and 52 are unchanged, and the tests pass. Failures:

- 48 q1: the two keyed vitals alone carry the word "Arrival", and the explanation calls the Nunez cohort a validation cohort.
- 50 q2: the lead-in and explanation rely on an arrival bicarbonate and chloride the case never gives, and the volume of saline is unclear.
- 50 q3: repeats signed gi-bleed-33 q1 (no product to correct the INR) with a near-identical option set.

No keyed answer is clinically wrong. SAMPs that fail: multiple-trauma-48 and multiple-trauma-50.
