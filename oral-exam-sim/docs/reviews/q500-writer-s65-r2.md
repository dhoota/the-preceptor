# Q500 writer report, round 2: s65, First trimester bleeding

Author: Preceptor. File `src/samps/s65/first-trimester-bleeding.ts`, export `FIRST_TRIMESTER_BLEEDING_S65`. Ids unchanged (first-trimester-bleeding-39 to 43). All items stay `reviewed: false`, `version: 1`. This revision answers every required fix in `docs/reviews/q500-qa-s65.md` and needs a fresh independent review.

## Required fixes and how each was done

| SAMP | Question | Fix asked | What was done |
|---|---|---|---|
| 39 | q2 | Replace the shock index statement with a key feature 1 decision the bank lacks | New q2: which CTAS level fits her at triage. Key "CTAS level 2": a pulse of 104/minute that mild cramps do not explain is unexplained tachycardia, listed under hemodynamic compromise (borderline perfusion), and CTAS takes the highest level reached by any modifier. The stem now gives her pain score (3 out of 10) so the tachycardia is clearly unexplained. Birkhahn 2003 is no longer used, so the misattributed "15 times" figure is gone. Key position 2 of 5. |
| 39 | q4 | Re-source to SOGC 414 | Source changed to Po L and colleagues, Guideline No. 414 (2021). Key and text unchanged. MSF stays only for q3 (examination finding). |
| 40 | q2 | Replace "Soft uterus larger than dates" | New update: smooth, mobile, nontender masses about 7 cm in both adnexa, no pain or fever. Key "Theca lutein cysts" (Braga 2025: 25 to 50% of molar patients, rupture about 1 to 2%). ftb-11 q3 lists torsion of theca lutein cysts as a complication to anticipate. Recognizing them as the cause of a bimanual finding is not keyed anywhere. |
| 40 | q4 | Replace the contraception key with a new key feature 6 decision | New q4: counselling on her risk of persistent disease. Key "Higher than usual given her features": age over 40, hCG over 100 000 IU/L (hers is 310 000) and theca lutein cysts each mark a high-risk mole, with postmolar neoplasia rates up to 40 to 50% (Braga 2025). No contraception or hCG schedule claim is keyed, so SOGC 408 is not needed as a source. msf-mole was dropped from this SAMP's sources because no question in 40 cites it now. |
| 41 | whole SAMP | Rebuild the stem in a different setting or gestation, replace q1, q2 and q4 | New scenario: tertiary ED (not community), 13 weeks 4 days, a missed miscarriage found 4 days earlier at an ultrasound clinic, expectant care chosen, pregnancy passed at home overnight, now light bleeding and stable. No incomplete miscarriage, no tissue at the os, no shock, no lifting worry. The husband is now documented Rh D negative by the prenatal clinic, not a donor card. |
| 41 | q1 | Replace "Incomplete miscarriage" | New q1 (menu, select one or None, key "None"): which treatment for her blood loss she needs now. Hemoglobin fell from 128 to 94 g/L (34 g/L), standing pulse 84 to 90/minute without dizziness, normal BP. She is stable and well above the restrictive threshold of 70 g/L (AABB 2023), so no red cells, crystalloid, albumin, IV iron or tranexamic acid. Key feature 1 (judging shock from vital signs and orthostatic change). This is also the batch's menu question. |
| 41 | q2 | Replace "Early hemorrhagic shock" | Removed. Former q3 (paternity) becomes q2. |
| 41 | q3 (now q2) | Hedged-key cue | A second distractor now uses the same modal: "It may be given only after 20 weeks". Options "It may be omitted after a discussion", "It may be given only after 20 weeks" and "It must be given within 24 hours" are parallel. Explanation unchanged in substance (SOGC 448: may be omitted when paternity is certain and the father is documented Rh D negative, misattributed paternity about 4%). |
| 41 | new q3 | (needed to keep 4 questions) | Timing of Rh immune globulin when a repeat antibody screen is pending. Key "Now, before the screen result". SOGC 448 suggests a pretreatment antibody screen but says Rh immune globulin "should not be deferred pending the antibody screening result". The update says it "is ordered" and does not say she chose it, so it does not cue the q2 key in mock mode. |
| 41 | q4 | Replace with a new key feature 6 decision, cite the guideline not a news release | New q4: when they can try to conceive again. Key "Once she feels ready": in the EAGeR secondary analysis (Schliep 2016) couples who tried within 3 months had more live births (53.2% against 36.1%) and a shorter time to pregnancy, with no physiologic reason to wait. The news release citation is removed from the file. |
| 42 | whole SAMP | Rebuild the stem in a new setting | New stem: community hospital with weekday-only formal ultrasound, Saturday visit, not a planned recheck, family physician ordered the first hCG, no prior ectopic, right-sided cramps, one vaginal birth, plus a serum progesterone. q1 and q3 (former q4) interpretations kept as the reviewer allowed. |
| 42 | q1 | Source attribution | Now cites Morse 2012 only, with only Morse figures: 35% minimal 2-day rise and 16.8% of ectopic pregnancies misclassified by serial hCG alone. The Silva 20.8% figure is removed from this question. |
| 42 | q2 | Replace the normal vital signs key | New q2: interpretation of a serum progesterone of 8 nmol/L (2.5 ng/mL). Key "Makes a viable pregnancy unlikely". Verhaegen 2012 meta-analysis: in symptomatic women with an inconclusive scan, progesterone below 3.2 to 6 ng/mL raised the probability of a nonviable pregnancy from 73.2% to 99.2% (specificity 98.4%), and nonviable includes ectopic, so it does not locate the pregnancy. Distractors share the hedged form ("Makes a tubal pregnancy unlikely", "Makes a uterine site likely") to avoid ruling B5. Key feature 4. |
| 42 | q3 | Replace "Early pregnancy clinic, hCG in 48 hours" | That decision is gone. The former q4 (falling hCG still fits ectopic) is now q3, re-sourced to Silva 2006 with only Silva figures: 40% of ectopics had an initial fall, median 27% decline in 2 days, slower than after a completed miscarriage, and 8% fell as fast as a completed miscarriage. The Morse 36 to 47% figure was removed. Key reworded "An ectopic is still possible" (first position), with a hedged distractor "Rise was probably a lab error". |
| 42 | new q4 | (needed to keep 4 questions, and key feature 6) | hCG falls to undetectable and nothing is ever seen. She asks where the pregnancy was. Key "Its site cannot be known": a spontaneously resolved pregnancy of unknown location (Barnhart 2011 consensus on nomenclature and outcomes). Counselling for a failed pregnancy, key feature 6. |
| 42 | q4 (old) | Source attribution | See q3 above. |
| 43 | q2 | Key feature tag | Retagged to key feature 5, and the prompt now says the dating is for planning her Rh prophylaxis. The explanation adds one sentence that her Rh plan depends on whether she is before or after 12 weeks. Key and source (SOGC 388) unchanged. |
| 43 | q3 | Two defensible keys and a repeated decision | Replaced. New q3: she asks whether a blood test can show the fetal Rh D type. Key "It is not routine in Canada". SOGC 448: fetal RHD genotyping on cell-free DNA is accurate (false negative up to 0.2%) but in Canada is sent to international reference labs at added cost, and "universal noninvasive fetal genotyping ... is currently not the standard of care". Amniocentesis is itself a sensitizing event under recommendation 12. No Rh immune globulin give-or-withhold decision is keyed in 43 now. |

## Passing items kept as they were

39 q1 and q3, 40 q1 and q3, 43 q1 and q4. The only change to 39 outside q2 and q4 is the pain score sentence added to its stem. 43 q4's update ("She chooses to have the injection") now follows a question about fetal testing, not a decision question, so it cues nothing.

## Uniqueness check

I read the whole catalogue for first-trimester-bleeding (every SAMP, s10 and s38, and both oral cases, ruptured-ectopic-pregnancy and first-trimester-loss-mechanical-valve). I read the pregnancy-related entries in abdominal-pain, shock and pre-eclampsia (abdominal-pain-03, 06, 08, 11, 22, 31, 47, 48, analgesia-sedation-40, return-visit-belly-pain-girl, shock-16, shock-17, pre-eclampsia-15, 20, 28, 35, and the shock and trauma items on vital signs in pregnancy, beta blockers and pulse pressure). I then searched all four catalogues for each new key and teaching point: CTAS, theca lutein, persistent trophoblastic risk, transfusion threshold, a pending antibody screen, conception timing, progesterone, a resolved pregnancy of unknown location and fetal RHD genotyping. None is keyed in those catalogues. The nearest neighbours:

- Theca lutein cysts appear only as "Ovarian torsion of theca lutein cysts" in the ftb-11 q3 write-in list of complications. 40 q2 keys them as the cause of a bimanual finding.
- "Persistent gestational trophoblastic neoplasia" is in the same ftb-11 q3 list as a complication to anticipate. 40 q4 keys counselling on her individual high risk.
- Transfusion appears in the bank only as a decision to transfuse a bleeding patient (ftb-29, abdominal-pain-08, the oral cases). 41 q1 keys not transfusing a stable patient. A restrictive threshold may be keyed in gi-bleed, which I did not search exhaustively. That is a different topic and patient.
- Progesterone appears only as supplementation after corpus luteum surgery (ftb-35).
- I first considered orthostatic technique, pulse pressure, beta blockers, a professional interpreter and the "ultrasound IUP excludes ectopic" point. I rejected each because the catalogue already keys it (ftb-02, ftb-29, shock catalogue, abuse-domestic, ftb-05 explanation).

Patient numbers are new: no hCG pair, hemoglobin, pulse or BP repeats another item. 42 keeps the 820 and 1 480 IU/L values from the failed draft only, not from any bank item. The bank-wide near duplicate stem test passes.

## Batch checks

- 20 questions: 19 single and 1 menu (41 q1, select one or None).
- Key features: 1 (3), 2 (1), 3 (4), 4 (3), 5 (6), 6 (3). Key features 4 and 6 are restored: key feature 4 by 42 q1 to q3, key feature 6 by 40 q4, 41 q4 and 42 q4.
- Single key positions, first to fifth: 3, 4, 4, 4, 4 (no position above 21%).
- The key is the longest option (ties included) in 5 of 19 single questions (26%). Two of those are ties of equal-length options (39 q1 numbers, 39 q2 CTAS levels).
- No em or en dashes, semicolons, smart quotes or micro signs anywhere in the file (checked by script).
- Arithmetic: 41 hemoglobin 128 to 94 is a fall of 34 g/L. Standing pulse rise 84 to 90 is 6/minute. 42 progesterone 2.5 ng/mL x 3.18 = 7.95, so 8 nmol/L. hCG 820 to 1 480 is +660 IU/L (80.5%). 1 480 to 1 030 is -450 IU/L (30.4%).
- `npx tsc --noEmit -p . | grep samps/s65`: no output. `SAMP_BATCH=s65 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 128 passed.

## Sources

| Id | Source | Verified | Used by |
|---|---|---|---|
| birkhahn-si-2002 | Birkhahn RH, Gaeta TJ, Bei R, Bove JJ. Acad Emerg Med. 2002. https://doi.org/10.1111/j.1553-2712.2002.tb00226.x | Round 1 and QA (abstract) | 39 q1 |
| ctas-2004 | Murray M, Bullard M, Grafstein E, for the CTAS and CEDIS National Working Groups. Revisions to the CTAS implementation guidelines. CJEM. 2004, volume 6, pages 421 to 427. https://doi.org/10.1017/S1481803500009428 | Full PDF downloaded from Cambridge and read: Table 1 (level I shock, level II hemodynamic compromise including "unexplained tachycardia", level III upper or lower end of normal, level IV normal) and "The CTAS level assigned is based upon the highest level identified by any of the modifiers". The 2016 revision (Bullard MJ et al., CJEM 2017, https://doi.org/10.1017/cem.2017.365) was also read. It keeps the first order modifiers and puts spotting before 20 weeks at level 4 and cramping at level 3. Already cited in the bank (s44). | 39 q2 |
| msf-ectopic | MSF Essential obstetric and newborn care, section 2.2. https://medicalguidelines.msf.org/en/viewport/ONC/english/2-2-ectopic-pregnancy-51416089.html | Round 1 | 39 q3 |
| sogc-ectopic | Po L, Thomas J, Mills K, et al. Guideline No. 414. J Obstet Gynaecol Can. 2021. https://pubmed.ncbi.nlm.nih.gov/33453378/ (doi 10.1016/j.jogc.2021.01.002) | Title, authors and scope confirmed in Europe PMC. The full text is paywalled (JOGC and ScienceDirect return 403). The id and URL match the existing bank entry. | 39 q4 |
| braga-mole-2025 | Braga A, et al. Diagnosis and surgical treatment of hydatidiform mole. Diagnostics (Basel). 2025. https://pmc.ncbi.nlm.nih.gov/articles/PMC12386084/ | Full text read through Europe PMC: theca lutein cysts in 25 to 50% from hCG overstimulation, rupture about 1 to 2%, and postmolar GTN as high as 40 to 50% with hCG over 100 000 IU/L, a theca lutein cyst or maternal age over 40 | 40 q1, q2, q4 |
| sogc-448 | SOGC Guideline No. 448. 2024. https://delphi.sogc.org/wp-content/uploads/2025/02/gui448CPG2404E.pdf | Reviewer's downloaded text read: recommendations 1 to 13, paternity (4% misattributed), "should not be deferred pending the antibody screening result", fetal genotyping "currently not the standard of care", amniocentesis in recommendation 12 | 40 q3, 41 q2, 41 q3, 43 q3, 43 q4 |
| aabb-transfusion-2023 | Carson JL, et al. Red blood cell transfusion: 2023 AABB international guidelines. JAMA. 2023. https://doi.org/10.1001/jama.2023.12914 | Abstract read in Europe PMC (PMID 37824153): restrictive threshold of 7 g/dL for hemodynamically stable hospitalized adults | 41 q1 |
| schliep-conceive-2016 | Schliep KC, et al. Obstet Gynecol. 2016. https://doi.org/10.1097/AOG.0000000000001159 | Abstract read in Europe PMC (PMID 26942344): 53.2% against 36.1% live birth, "no physiologic evidence for delaying pregnancy attempt after an early loss" | 41 q4 |
| morse-hcg-2012 | Morse CB, et al. Fertil Steril. 2012. https://pmc.ncbi.nlm.nih.gov/articles/PMC3246395/ | Abstract read in Europe PMC (PMID 22192138): 35% minimal rise, 16.8% of ectopics misclassified | 42 q1 |
| verhaegen-progesterone-2012 | Verhaegen J, et al. BMJ. 2012. https://doi.org/10.1136/bmj.e6077 | Abstract read in Europe PMC (PMID 23045257) | 42 q2 |
| silva-hcg-2006 | Silva C, et al. Obstet Gynecol. 2006. https://doi.org/10.1097/01.AOG.0000198635.25135.e7 | Abstract read in Europe PMC (PMID 16507931) | 42 q3 |
| barnhart-pul-2011 | Barnhart K, et al. Fertil Steril. 2011. https://doi.org/10.1016/j.fertnstert.2010.09.006 | Abstract read in Europe PMC (PMID 20947073): final outcomes include "spontaneously resolved PUL" | 42 q4 |
| msf-mole | MSF section 2.3. https://medicalguidelines.msf.org/en/viewport/ONC/english/2-3-molar-pregnancy-hydatidiform-mole-51416099.html | Reopened: "Uterus larger and softer than expected for gestational age" | 43 q1 |
| sogc-388 | Butt K, Lim KI. Guideline No. 388. 2019. https://doi.org/10.1016/j.jogc.2019.04.010 | Round 1 (abstract) | 43 q2 |

Removed from the file: birkhahn-vitals-2003, msf-eonc-2019 and the SOGC news release on Guideline No. 460.

## Uncertain, for the reviewer

- SOGC 414 (39 q4) could not be opened. The key, gynecology now for surgery in a leaking ectopic, is standard and the reviewer asked for this source. The exact wording is unverified.
- SOGC 460 is not cited. The new key feature 6 items needed claims I could check, and the 460 full text is paywalled. Its abstract and the news release do not cover conception timing or a resolved pregnancy of unknown location. If the next reviewer can open 460 and it addresses trying again after a loss, it could replace or join Schliep 2016 for 41 q4.
- 39 q2: "unexplained tachycardia" is a judgement. The stem gives a pain score of 3 out of 10 so that mild cramps cannot explain a pulse of 104/minute. The CTAS source is the 2004 implementation paper, which holds the hemodynamic table. The 2016 revision keeps the modifiers but does not reprint that table.
- 41 q3: SOGC 448 makes the "do not defer pending the antibody screen" statement in its section on prophylaxis. It is applied here to a dose after a pregnancy loss.
- 41 q1: the AABB threshold is written for hospitalized adults. She is an ED patient going home. The explanation states the threshold for stable adults.
- Key feature 5 now carries 6 questions. That is because 43 is built on dating and Rh questions and 41 keeps the reviewer-approved paternity item. Key feature 2 has 1 question (39 q4), as in round 1.
- 40 q4 explanation: "Her risk is far from that of a usual miscarriage" is a general contrast. Braga does not give a miscarriage comparison.
