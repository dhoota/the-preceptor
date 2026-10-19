# Q500 round 3 verify: s65, First trimester bleeding

Fresh independent review by Preceptor of the revised batch `src/samps/s65/first-trimester-bleeding.ts` (first-trimester-bleeding-39 to 43). The reviewer did not write, edit or review this batch before and changed no SAMP, source or shared file (REVIEW-RULES rule 1). Only this verdict file was written. Inputs: the round 2 verdict `docs/reviews/q500-verify2-s65.md`, the "Round 3" section of `docs/reviews/q500-writer-s65-r2.md`, and `git diff 05e199a` of the batch file. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Checks run: `SAMP_BATCH=s65 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests, including the bank-wide near duplicate stem test). `npx tsc --noEmit -p . | grep samps/s65` printed nothing. A script found no semicolons, em or en dashes, smart quotes or micro signs in any string, and recomputed stem lengths, prompt lengths, key positions and length parity (below). No personal names. Spelling is Canadian ("Gynaecologists" appears only inside the SOGC body name).

## Verdicts

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| first-trimester-bleeding-39 | PASS | PASS | PASS | PASS | PASS |
| first-trimester-bleeding-40 | PASS | PASS | PASS | PASS | PASS |
| first-trimester-bleeding-41 | PASS | PASS | PASS | PASS | PASS |
| first-trimester-bleeding-42 | PASS | PASS | PASS | PASS | PASS |
| first-trimester-bleeding-43 | PASS | PASS | PASS | PASS | PASS |

Questions: 20 pass, 0 fail. SAMPs: 5 pass, 0 fail.

## Required fixes

None.

## Round 2 required fixes: applied?

| Round 2 fix | Applied | Check |
|---|---|---|
| 1. 39 q4 cite an opened source for surgery in a patient who is not hypotensive | Yes | SOGC 414 is removed from the file. q4 now cites the MSF ectopic page, which this review opened. Section 2.2.3: "When the diagnosis of ectopic pregnancy is highly likely: Prepare for laparotomy or refer urgently to a CEmONC facility. Insert an IV line ... and administer Ringer lactate. Closely monitor: heart rate, blood pressure and bleeding. Prepare for a possible transfusion, determine the patient's blood type". Section 2.2.1: "Bleeding may gradually seep into the abdominal cavity over several days or weeks". The ultrasound sentence (empty uterus, fluid or blood in the abdominal cavity) is also there. MSF ties surgery to a highly likely diagnosis, not to hypotension, so it covers this normotensive patient. The explanation says no more than MSF, and the unsourced methotrexate sentence is gone. Key "Gynecology now for surgery" holds. |
| 2. 40 q4 replace the unsupported miscarriage comparison | Yes | Braga 2025 (full text opened): "Despite complete molar uterine evacuation, 20% of patients may progress to post-molar GTN" and "as high as 40 to 50% in women with high-risk HMs, such as those with hCG over 100,000 IU/L, the presence of a theca lutein cyst, or a maternal age over 40 years". The new sentence matches. Note only: the Braga abstract restricts the 20% to complete moles (1 to 4% after partial moles), so "about 20% of molar pregnancies" rounds in the direction of the body text. The key does not rest on it. |
| 3. 41 q1 replace the no-transfusion decision, keep a menu | Yes | New menu (select two) on caring for the fetal remains. AABB 2023 and the oral iron sentence are gone. Reviewed in full below. |
| 4. 41 q4 grammar cue | Yes | All five options now start "After". The test's sort key ignores digits, so the order (any, months, normal, parental, year) is the bank's alphabetical rule. The key is not the longest option. |
| 5. 42 q4 replace the resolved PUL nomenclature item | Yes | New telephone advice item cited to NICE NG126 1.8.3. Reviewed in full below. Barnhart 2011 is removed and no question cited it. |

## New questions reviewed in full

### first-trimester-bleeding-41 q1 (menu, select 2): PASS

- Keys "Ask if she wants to see or hold the baby" and "Offer her a choice of arrangements". PAIL provider checklist (March 2026, downloaded and read): "Ask the patient if they would like to see, hold, and/or take photos of the baby", and the script "Every family has the right to choose how their baby's remains are cared for", with three options (hospital arrangements with pathology and cremation, private arrangements after pathology, private arrangements the same day without pathology). The handout (downloaded and read) lists the same three options.
- Every distractor is wrong under the source, and the explanation gives a true reason for each: "Mirror the patient's language ... Avoid medical jargon such as 'products of conception'", "Use a soft item to wrap remains" and "Avoid medical containers (emesis basins, buckets, bedpans, etc.)", "Miscarriage (POC) = < 20 weeks gestation AND < 500g (no death certificate, remains may be managed through hospital, funeral home, or privately)", and in the handout "A burial permit is not required for fetal remains of a miscarriage (< 20 weeks gestation and < 500 grams)" citing O. Reg. 30/11. Clinical waste is not among the options the family is offered. No distractor is defensible.
- The stem now names Ontario, which spec section 9 requires because the burial permit and death certificate points are provincial law. The fetus stopped growing at about 10 weeks, so it is well under 500 g. The explanation states the 500 g limit as the rule, which is fair.
- KF6 (counselling and emotional support before discharge after a failed pregnancy) is an honest tag.
- Format: 7 options, alphabetical, all imperative verb phrases (no grammar cue), longest to shortest 47/34 = 1.38, key mean 37 characters against distractor mean 41.8. Prompt 17 words.
- Uniqueness: no item in the first-trimester-bleeding, abuse-domestic, pre-eclampsia, gi-bleed, shock or abdominal-pain catalogues, nor anywhere in `src/samps` or `src/cases` by grep (remains, see or hold, burial, cremation, keepsake, funeral, clinical waste, fetal remains), keys the handling of remains. The bereavement keys elsewhere (ftb-10 q4, ftb-28 q3 and the s10 counselling lists) are about grief support and information, not remains. New to the bank.

### first-trimester-bleeding-42 q4: PASS

- Key "Come to the department now" for new right pelvic pain in a pregnancy of unknown location with a falling hCG. NICE NG126 (PDF downloaded, last updated 17 June 2026) 1.8.3: "In a woman with a pregnancy of unknown location, place more importance on clinical symptoms than on serum hCG results, and review the woman's condition if any of her symptoms change, regardless of previous results and assessments." 1.8.1: "could have an ectopic pregnancy until the location is determined." 1.8.6 also advises return for new or worsening symptoms. The explanation matches these and adds nothing beyond them.
- Distractors (repeat hCG in 2 days, ibuprofen and rest, urine test in 2 weeks, wait for the clinic visit) all let a falling value override a new symptom, as the explanation says. None is defensible.
- KF4 (limits of hCG and ultrasound in excluding ectopic) is an honest tag.
- Uniqueness: bank grep for symptoms change, new symptoms, more importance on, telephone and phones in pregnancy items found nothing. Return precautions appear as one line inside several write-in key lists (ftb catalogue lines 27, 57, 78), but no item keys acting on a new symptom against a falling hCG. ftb-34 is a nurse's telephone call about an undiagnosed patient with a different decision (air transfer). New to the bank.
- International source judged (task instruction): SOGC 414 is the Canadian guideline on pregnancy of unknown location, but neither the writer nor this review could open it (JOGC returns 403 and the abstract stops before the recommendations, checked again this round). Citing a guideline nobody opened would break Q500 brief rule 4. The key is not one where Canadian and UK practice differ: no guidance lets a falling hCG override new pain in an unlocated pregnancy. NICE NG126 is current (June 2026) and is already cited in s10 and s38. Accepted. The same reasoning applies to MSF in 39 q4. Physician item below.

## Unrequested changes judged on their merits (REVIEW-RULES rule 4)

- 40 q3 option "No Rh immune globulin for a mole" became "No Rh immune globulin needed". This removes the mock-mode cue the round 2 review flagged (ruling B6). It is still a "No [action]" option and sits last (ruling B9). The explanation's reason ("omitted only when a complete mole is certain") still answers it. Accepted.
- 41 stem: fetal size now reads "found no heartbeat and a fetus that had stopped growing at about 10 weeks". This agrees with a 13 weeks 4 days gestation and a missed miscarriage. The opening "You are working in a tertiary care emergency department in Ontario" follows spec section 3 (the "You are working in" form when the setting needs stating) and section 9. Stem 146 words, within 150. Accepted.
- 41 q2 explanation: the added sentence "The 300 mcg threshold follows her gestational age of 13 weeks and 4 days at the loss, not the fetal size of about 10 weeks" is supported. SOGC 448 states the thresholds as "after 12 weeks gestation" and defines gestational age from the last menstrual period (WHO notation). It answers the round 2 physician note. Accepted.
- 41 q3 update "She would like to receive Rh immune globulin" replaces "Rh immune globulin 300 mcg is ordered". This removes the apparent contradiction with the q2 key. In mock mode "would like" hints faintly that the injection is a choice, which leans toward the q2 key. q3 cannot work without saying she will receive it, so under B6 this is a flag, not a fail (see notes). Accepted.
- 41 q3 distractor reason trimmed to "Fetal Rh D typing plays no part in this timing". This is true and no longer repeats the 43 q3 key. Accepted.

## Other questions reviewed in full

- 39 q1 to q3: unchanged since round 2. Rechecked 104/112 = 0.93, the diastolic error 104/70 = 1.49, and the CTAS level 2 reasoning. Pass.
- 39 q4: see fix 1. Option order alphabetical, key 26 characters against the longest distractor 34. Pass.
- 40 q1, q2: unchanged. Braga quotations rechecked ("rare, but pathognomonic", "25 to 50% ... theca-lutein ovarian cysts", rupture "approximately 1 to 2%"). Pass.
- 40 q3: SOGC 448 lines 234 to 246 of the downloaded text (molar pregnancy after 12 weeks, 300 mcg, 120 mcg minimum in the first 12 weeks). Pass.
- 40 q4: see fix 2. Pass.
- 41 q2, q3: SOGC 448 paternity and "should not be deferred pending the antibody screening result" (line 498 of the downloaded text). Pass.
- 41 q4: Schliep 2016 (53.2% against 36.1%, no physiologic reason to delay). The key is the only permissive option, but that is the content, not a wording cue, and all five share one form. Pass.
- 42 q1 to q3: unchanged. 820 to 1 480 IU/L is +80.5%. 2.5 ng/mL x 3.18 = 7.95 nmol/L. 1 480 to 1 030 IU/L is a 30.4% fall. Pass.

## first-trimester-bleeding-43

Unchanged. Every diff hunk ends at line 267, before 43 starts at line 271. Passed in round 2 and still passes.

## Batch checks

- Stems (words, vitals excluded): 39 has 80, 40 has 80, 41 has 146, 42 has 114, 43 has 81. All within 50 to 150.
- Prompts 13 to 19 words. Updates 8 to 32 words. Explanations 425 to 759 characters.
- Single key positions, first to fifth: 3, 4, 4, 4, 4 (highest 21%, every position used).
- Key is the longest option (ties included) in 5 of 19 single questions (26%, under 35%). Highest key to mean distractor ratio 1.49 (39 q3, unchanged).
- Format: 19 single and 1 menu.
- Key features: KF1 2, KF2 1, KF3 4, KF4 4, KF5 6, KF6 3. Every key feature is tested.
- Sources: every listed source is cited and every cited source is listed. sogc414, barnhart and carson are gone from the file.
- No new D1 repeat. No prior ruling reversed (A18 Rh immune globulin rules unchanged).

## Physician-level items (not grounds for failure)

- 39 q4 and 42 q4 rest on MSF and NICE because SOGC 414 could not be opened. MSF writes for settings without methotrexate, and its "prepare for laparotomy" covers any highly likely ectopic. The item's patient has pelvic free fluid and a pulse of 108/minute, so surgery is right under any guidance, but a physician may prefer SOGC 414 once someone can open it.
- 41 q1: the key "Ask if she wants to see or hold the baby" is the only option that uses her word "baby" from the update. Mirroring her language is the teaching point, and the "products of conception" distractor tests it directly, so this is noted, not failed.
- 41 q1 explanation: the first sentence is long (about 60 words). Plain style prefers shorter sentences. Not a defect in content.
- 41 q3 and 42 q4 (ruling B6, flag only): in mock mode, "She would like to receive Rh immune globulin" hints that q2's answer is a choice, and 42 q4's "Her hCG yesterday had fallen again" with a clinic visit shows that follow-up continued without methotrexate, which rules out two q3 distractors. Neither names a key, and each later question needs its fact.

## Sources verified in this review

- MSF Essential obstetric and newborn care, section 2.2 Ectopic pregnancy, opened and read: https://medicalguidelines.msf.org/en/viewport/ONC/english/2-2-ectopic-pregnancy-51416089.html
- Braga A and colleagues, Diagnostics 2025, full text opened: https://pmc.ncbi.nlm.nih.gov/articles/PMC12386084/
- PAIL Network, Sunnybrook. Managing products of conception under 20 weeks: provider checklist, March 2026, downloaded and read: https://pailnetwork.sunnybrook.ca/wp-content/uploads/2026/05/Managing-Products-of-Conception-Provider-Checklist-March-2026.docx
- PAIL Network, Sunnybrook. Caring for your miscarriage or baby's remains in hospital: patient handout, March 2026, downloaded and read: https://pailnetwork.sunnybrook.ca/wp-content/uploads/2026/05/Caring-for-your-MiscarriageBabys-Remains-in-Hospital-Patient-Handout-March-2026.docx
- NICE NG126, PDF downloaded (published 17 April 2019, last updated 17 June 2026), recommendations 1.8.1 to 1.8.10 read: https://www.nice.org.uk/guidance/ng126
- SOGC Guideline No. 448, 2024, downloaded text from the round 2 review rechecked for gestational age wording and antibody screen timing.
- SOGC Guideline No. 414, 2021: full text attempted again (JOGC 403, delphi.sogc.org 404). Not cited in the batch.

## Summary

Five SAMPs, 20 questions. All five round 2 fixes are applied and verified against sources opened in this review. The new 41 q1 (handling fetal remains, Ontario PAIL Network) and 42 q4 (new pain overrides a falling hCG, NICE NG126 1.8.3) are accurate, have one defensible key and are new to the bank. Every unrequested change was judged and accepted. 43 is unchanged. 20 of 20 questions pass and 5 of 5 SAMPs pass. The whole s65 batch has passed fresh review.
