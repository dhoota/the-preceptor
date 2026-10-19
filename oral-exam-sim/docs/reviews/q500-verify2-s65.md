# Q500 round 2 verify: s65, First trimester bleeding

Fresh independent review by Preceptor of the revised batch `src/samps/s65/first-trimester-bleeding.ts` (first-trimester-bleeding-39 to 43). The reviewer did not write, edit or review this batch before and changed no SAMP, source or shared file (REVIEW-RULES rule 1). Inputs: the round 1 verdict `docs/reviews/q500-qa-s65.md`, the writer report `docs/reviews/q500-writer-s65-r2.md`, git history of the file, and the catalogues for first-trimester-bleeding, abdominal-pain, shock, pre-eclampsia and gi-bleed. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Checks run: `SAMP_BATCH=s65 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (128 tests, including the bank-wide near duplicate stem test). A script found no em or en dashes, smart quotes, micro signs or semicolons in any string. Spelling is Canadian. No personal names.

## Verdicts

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| first-trimester-bleeding-39 | FAIL | PASS | PASS | PASS | FAIL |
| first-trimester-bleeding-40 | FAIL | PASS | PASS | PASS | FAIL |
| first-trimester-bleeding-41 | FAIL | FAIL | PASS | PASS | FAIL |
| first-trimester-bleeding-42 | FAIL | PASS | PASS | PASS | FAIL |
| first-trimester-bleeding-43 | PASS | PASS | PASS | PASS | PASS |

Questions: 15 pass, 5 fail. SAMPs: 1 pass, 4 fail.

## Round 1 required fixes: applied?

| Round 1 fix | Applied | Note |
|---|---|---|
| 39 q2 replace shock index statement | Yes | New CTAS item. Birkhahn 2003 and its "15 times" figure are gone from the file. |
| 39 q4 re-source to SOGC 414 | Yes, but unverified | See required fix 1. |
| 40 q2 replace "Soft uterus larger than dates" | Yes | Theca lutein cysts. Only a complication list entry in ftb-11 q3 before. |
| 40 q4 replace contraception key | Yes | New key on high-risk mole counselling. One unsupported sentence, required fix 2. |
| 41 rebuild stem, replace q1, q2, q4 | Yes | New stem (missed miscarriage passed at home, stable). The new q1 repeats a gi-bleed decision, required fix 3. The new q4 has a grammar cue, required fix 4. |
| 41 paternity item hedged-key cue | Yes | "It may be given only after 20 weeks" now parallels the key. |
| 41 q4 cite the guideline, not the news release | Yes | News release removed. Schliep 2016 cited instead (verified). |
| 42 rebuild stem | Yes | Weekend, community hospital, no prior ectopic, right-sided pain, progesterone added. |
| 42 q1 attribution | Yes | Morse 2012 figures only (35%, 16.8%), verified. |
| 42 q2 replace normal vital signs key | Yes | Progesterone item, verified against Verhaegen 2012. |
| 42 q3 replace early pregnancy clinic key, and old q4 attribution | Yes | Old q3 gone. Old q4 is now q3, cited to Silva 2006 with Silva figures only (verified). |
| 43 q2 key feature tag | Yes | Retagged KF5 and the prompt now frames dating for Rh planning. Accepted (see notes). |
| 43 q3 two defensible keys and repeated decision | Yes | New fetal RHD genotyping item, new to the bank. |

## Required fixes

| # | SAMP | Question | Field | Current text | Required change | Source | Confidence |
|---|---|---|---|---|---|---|---|
| 1 | first-trimester-bleeding-39 | q4 | source | `sogc-ectopic` (Po L, SOGC Guideline No. 414, 2021) for "She needs gynecology now for surgery" in a stable patient with pelvic free fluid | Q500 brief rule 4: the writer did not read 414 (report, "Uncertain" item 1), and this review could not verify it either. PubMed and Europe PMC hold only the abstract, which is cut off before the recommendations and confirms only that the guideline covers "expectant, medical, and surgical treatment". JOGC and ScienceDirect return 403. The key itself holds. Do one of these: (a) open the full text of Guideline No. 414 and record in the writer report the recommendation or text that supports urgent surgery for a suspected leaking or ruptured tubal pregnancy with hemoperitoneum, and adjust the explanation to say no more than it does, or (b) if 414 cannot be opened, cite a source the writer has opened that states the point for a patient who is not hypotensive (signs of intraperitoneal bleeding, not only instability). The ACOG Practice Bulletin No. 193 abstract (PMID 29470343, read in this review) says only that an unstable patient "requires prompt surgical intervention", which does not cover a normal BP, so the abstract alone is not enough. Spec section 9 prefers the Canadian source, so (a) is first choice. | SOGC 414 abstract (PubMed efetch, read), ACOG PB 193 abstract (read) | Medium |
| 2 | first-trimester-bleeding-40 | q4 | explanation | "Her risk is far from that of a usual miscarriage." | Lens B rule 1: every claim must trace to the cited source. Braga 2025 gives no miscarriage comparison (writer flag confirmed). Replace with a claim Braga supports, for example "Even an average mole carries about a 20% risk of postmolar neoplasia, so her risk is not that of an ordinary pregnancy loss." Braga: "20% of patients may progress to post-molar GTN" and "as high as 40 to 50% in women with high-risk HMs, such as those with hCG over 100,000 IU/L, the presence of a theca lutein cyst, or a maternal age over 40 years". Or cite SOGC 408 for the comparison if the writer can open it. | Braga 2025 full text (Europe PMC, read) | Low |
| 3 | first-trimester-bleeding-41 | q1 | key decision | Menu key "None": no red cells, crystalloid, albumin, IV iron or tranexamic acid for a stable patient whose hemoglobin fell from 128 to 94 g/L, cited to AABB 2023 | The decision (no transfusion for a stable adult above the restrictive threshold) is already keyed three times in gi-bleed: gi-bleed-02 q2 "No transfusion now, recheck, transfuse below 70 to 80 g/L" with the same numbers (hemoglobin 94 g/L, 128 g/L one year ago), gi-bleed-36 q1 "No red cell transfusion now", and gi-bleed-45 q2 "Iron replacement, no transfusion" (oral iron over IV iron is also that item's point). The writer's report says no hemoglobin repeats another item and that gi-bleed was not searched. Both are wrong. Replace q1 with a decision the bank lacks. It is the batch's only menu question, so the replacement (or another question in the batch) must be a menu. Keep key feature 1 coverage, which 39 q1 and q2 already give. Also, the current sentence "Her anemia can be treated with oral iron ... rather than an IV iron infusion today" is not in AABB 2023, so do not carry it over without a source. | gi-bleed catalogue, AABB 2023 abstract (read) | High |
| 4 | first-trimester-bleeding-41 | q4 | options (grammar cue) | "Once she feels ready", "Only after a year of contraception", "Only after karyotypes of both partners", "Only after 6 months of waiting", "Only after 3 normal periods" | SCORING-RULINGS B4: the key is the only option that does not start "Only after", and the four restrictive "Only" options mark themselves as the wrong set. Make all five the same form, for example "After 1 year of contraception", "After 3 normal periods", "After 6 months of waiting", "After parental karyotypes", "When she feels ready" (alphabetical, key fifth, which also keeps position balance since the fifth position then holds 5 of 19 keys, 26%, so move another key or choose wording that keeps every position at or under 25%). Recheck position balance and the longest-key rate after the change. Content and source (Schliep 2016) are correct. | SCORING-RULINGS B4, SAMP_SPEC section 7 | Medium |
| 5 | first-trimester-bleeding-42 | q4 | key decision and key feature tag | Key "Its site cannot be known" for a pregnancy of unknown location that resolved without ever being seen, tagged KF6 | The teaching point repeats first-trimester-bleeding-28 q1 (s38): its distractor "Confirms a complete intrauterine miscarriage" is rejected because "no intrauterine pregnancy was ever seen", and it teaches that a falling hCG does not exclude an ectopic. 42 q4 rejects "Proven to be a miscarriage" for the same reason, and its explanation repeats "The falling hCG shows that the pregnancy failed, not where it was". 42 q3 already carries the falling hCG point, and ftb-28 q2 keys follow-up until undetectable, which 42 q3 repeats in its explanation. So 42 now leans on ftb-28 twice. The KF6 tag is also weak: KF6 is arranging counselling, support and follow-up before discharge, and this item tests a nomenclature fact. Replace q4 with a new decision. KF6 stays covered by 40 q4 and 41 q4. | Q500 brief rule 3, ftb-28 (src/samps/s38) | Medium |

## Unrequested and new items judged on their merits (REVIEW-RULES rule 4)

- 39 stem: the added pain score sentence is needed for "unexplained" tachycardia. Accepted.
- 40 sources: msf-mole dropped from 40 because no question there cites it. Correct.
- 41 q3 (new, timing of Rh immune globulin with a pending antibody screen): SOGC 448 (downloaded text, "Prior to Administration of Prophylaxis") says "RhIG administration should not be deferred pending the antibody screening result". The statement sits in the general prophylaxis section and is not limited to the 28 week dose, so applying it to a post-loss dose is fair (writer flag judged: holds). Waiting 4 hours would still be inside 72 hours, but the guideline's wording makes "Now" the single best key. Pass. Its distractor reason "Fetal Rh D typing on maternal blood is not standard care in Canada" repeats the 43 q3 key inside the batch. Not grounds for failure, but the writer may trim it when revising 41.
- 42 stem: same gestation (5 weeks and 6 days) as ftb-28. Low overlap, the setting and arc differ. Note only.
- 42 q3 (former q4, kept on the round 1 reviewer's allowance): a 30.4% fall is below the Morse 2012 minimal miscarriage decline of 36 to 47% and fits Silva 2006 (median ectopic decline 27%). Key holds. The overlap with ftb-28 q1 and q2 is noted under fix 5.

## Writer flags adjudicated

- 39 q4, SOGC 414 unread: fails rule 4 (fix 1). The bank has precedent for citing 414 for general statements from the abstract only (s38 lens A, batch12 QA), but this item rests a specific management step on it.
- 41 q3, SOGC 448 antibody screen statement applied after a loss: holds (above).
- 41 q1, AABB threshold applied to an ED patient going home: the clinical answer holds (no guideline transfuses a stable adult at 94 g/L). The item fails on overlap instead (fix 3).
- 39 q2, CTAS level 2 for unexplained tachycardia: holds. Murray 2004 Table 1 wording confirmed through the CTAS field reference excerpt hosted by LHSC (level 2 hemodynamic compromise, "Evidence of borderline perfusion: pale, history of diaphoresis, unexplained tachycardia, postural hypotension"). A pulse of 104/minute with pain of 3 out of 10, no fever and no stated anxiety is unexplained. CTAS takes the highest level from any modifier. Level 3 is the common under-triage and the explanation answers it. Physician item below. Not a repeat: the s44 multiple-patients CTAS items key frailty, hypertension, pediatric distress, pain, heat, mechanism and infant fever, never unexplained tachycardia.
- Key feature balance (KF5 6, KF2 1): accepted. Every key feature is tested. Before s65 the bank held KF1 15, KF2 25, KF3 17, KF4 28, KF5 18, KF6 25, so extra KF5 items fill a weaker feature and KF2 is not short bank-wide. The 43 q2 retag to KF5 is acceptable because the prompt now ties dating to the Rh plan and the dating truly moves her from 300 mcg to the 8 to 12 week optional range.
- 40 q4, sentence beyond Braga: fails (fix 2).

## Passes with notes

- 39 q1: 104/112 = 0.929, so 0.93. Diastolic 104/70 = 1.49. Birkhahn 2002 means 0.67 and 0.84 as stated.
- 39 q3: unchanged from round 1. Pass.
- 40 q1: Braga 2025 (read): grape-like vesicle passage "rare, but pathognomonic". Pass.
- 40 q2: Braga 2025 (read): "25 to 50% of patients develop theca-lutein ovarian cysts", "rupture is rare, occurring in approximately 1 to 2%", "tend to regress spontaneously". Distractor reasons true. Pass.
- 40 q3: SOGC 448 recommendations 10, 11 and 6 (read). Pass. Mock-mode note under physician items.
- 41 q2: SOGC 448 (read): "where paternity is certain and this individual is documented to be also Rh D-negative ... RhIG may be omitted", misattributed paternity 4%. The hedged distractor fix is in. Pass.
- 42 q1: 820 to 1 480 is +660 IU/L, 80.5%. Morse 2012 abstract: 35% minimal rise, 16.8% of ectopics misclassified, "Clinical judgment should trump prediction rules". Pass.
- 42 q2: 2.5 ng/mL x 3.18 = 7.95 nmol/L. Verhaegen 2012 abstract: cut-offs 3.2 to 6 ng/mL, specificity 98.4%, probability of a nonviable pregnancy raised from 73.2% to 99.2%, in symptomatic women with an inconclusive scan. Pass.
- 43 q1: unchanged. Pass.
- 43 q2: Robinson, 8.052 x square root of 38 + 23.73 = 73.4 days, 10 weeks and 3 days. Pass.
- 43 q3: SOGC 448 (read): fetal RHD genotyping false-negative rate up to 0.2%, "outsourced to international reference labs with added costs", "universal noninvasive fetal genotyping ... is currently not the standard of care". Amniocentesis falls under recommendation 12. New to the bank (no cell-free or fetal RHD item elsewhere). Pass.
- 43 q4: unchanged. Pass.
- Key positions (19 single questions), first to fifth: 3, 4, 4, 4, 4. Highest 21%. The 41 q4 fix must keep this at or under 25%.

## Physician-level items (not grounds for failure)

- 39 q2: some triage nurses would place a pulse of 104/minute at level 3 as "upper end of normal". The key rests on CTAS calling it unexplained tachycardia.
- 40 q3: in mock mode the option "No Rh immune globulin for a mole" and the ultrasound update in q3 name the q1 diagnosis (ruling B6). q3 cannot work without the diagnosis, so B6 says flag, not fail. The option could read "No Rh immune globulin needed" if the writer touches 40.
- 41 q2: the fetus measured 10 weeks at diagnosis, while her gestational age at the loss is 13 weeks and 4 days. The "after 12 weeks" dose follows gestational age, as the explanation says. A physician may want this stated.
- 41 q3: the update "Rh immune globulin 300 mcg is ordered" follows q2, whose key is that it may be omitted. It does not give the key away, but it may read as a contradiction to a candidate.

## Sources verified in this review

- SOGC Guideline No. 448, 2024. Downloaded text read (`scratchpad/q500/qa-s63-65/dl/sogc448.txt`), recommendations 1 to 13, paternity, antibody screening and fetal genotyping sections: https://delphi.sogc.org/wp-content/uploads/2025/02/gui448CPG2404E.pdf
- Po L and colleagues, SOGC Guideline No. 414, 2021. Abstract only (PubMed efetch, PMID 33453378). Full text blocked (403). Recommendations not visible.
- ACOG Practice Bulletin No. 193, 2018. Abstract read (PMID 29470343).
- Braga A and colleagues, Diagnostics 2025. Full text read through Europe PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC12386084/
- Verhaegen J and colleagues, BMJ 2012. Abstract read (PMID 23045257).
- Silva C and colleagues, Obstet Gynecol 2006. Abstract read (PMID 16507931).
- Morse CB and colleagues, Fertil Steril 2012. Abstract read (PMID 22192138).
- Barnhart K and colleagues, Fertil Steril 2011. Abstract read (PMID 20947073): final outcomes include "spontaneously resolved PUL".
- Schliep KC and colleagues, Obstet Gynecol 2016. Abstract read (PMID 26942344): nonectopic, nonmolar losses, 53.2% against 36.1%, "no physiologic evidence for delaying pregnancy attempt after an early loss".
- Carson JL and colleagues, AABB 2023. Abstract read (PMID 37824153): restrictive threshold of 7 g/dL for hospitalized, hemodynamically stable adults.
- CTAS level 2 wording: CTAS field reference excerpt hosted by LHSC (https://lhsc.on.ca/media/2905/download), consistent with Murray 2004 as the writer reports.

## Summary

Five SAMPs, 20 questions. Every round 1 fix was applied. 15 questions pass and 5 fail. Only first-trimester-bleeding-43 passes as a whole. Fails: 39 q4 cites SOGC 414 for a management step nobody has been able to read in it. 40 q4 has one explanation sentence its source does not support. 41 q1 repeats the gi-bleed "no transfusion for a stable patient" decision, with the same hemoglobin values as gi-bleed-02. 41 q4 has a grammar cue (the key is the only option not starting "Only after"). 42 q4 repeats the ftb-28 teaching that an unseen pregnancy cannot be called a miscarriage, under a weak KF6 tag. Writer flags on 41 q3, 39 q2 and key feature balance hold.
