# Q500 verify, round 2: s66, Multiple trauma

Fresh independent review by Preceptor of the revised batch `src/samps/s66/multiple-trauma.ts`, ids multiple-trauma-48 to multiple-trauma-52. This reviewer did not write, edit or earlier review this batch and edited no file (REVIEW-RULES rule 1). Every fix below goes back to a writer, and the revision needs another fresh review. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Inputs read: the first QA verdict (`docs/reviews/q500-qa-s66.md`), the writer report (`docs/reviews/q500-writer-s66-r2.md`), the revision diffs (commits be0c4e9 and 28453db on the file), the Q500 brief, the SAMP review brief, SAMP_SPEC, REVIEW-RULES, DECISIONS and SCORING-RULINGS. Uniqueness was checked against the catalogues for multiple-trauma, airway and environmental, plus grep over every other catalogue and over `src/samps` and `src/cases` for each key decision.

Checks run: `SAMP_BATCH=s66 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (3 files, 136 tests). House style scan: no em or en dashes, no semicolons, no characters outside ASCII except the degree sign, no mnemonics, Canadian spelling. `author: "Preceptor"`, `reviewed: false`, `version: 1`.

## Verdicts

| Id | Verdict | Questions that fail |
|---|---|---|
| multiple-trauma-48 | FAIL | q1, q3, q4 |
| multiple-trauma-49 | PASS | none |
| multiple-trauma-50 | FAIL | q2, q3 |
| multiple-trauma-51 | PASS | none |
| multiple-trauma-52 | PASS | none |

## Required fixes from the first QA: were they applied?

| Item | Applied | Comment |
|---|---|---|
| 48 q3 distractor and key reason | Yes | "Side lying with a cervical collar" replaces the defensible collar option. The quoted wording is accurate, but one quote comes from the statement's section on children (see 48 q3 below). |
| 48 q4 "pediatric style" sentence | Yes, verbatim | 10 x 60 = 600 mg is right. The question still fails on a repeat the first QA missed (see 48 q4). |
| 49 q3 CAFG attribution | Yes | Reread in the full text (PMC8186352): "brief the team on your chosen strategy, including your alternate plans ... together with triggers" and "specifically empower team members to speak up". PASS. |
| 50 q2 "his CT" | Yes | The question still fails on a repeat (see 50 q2). |
| 50 q3 named reference and "raised creatinine" | Yes, option (a) | The question still fails on a repeat and a source overstatement (see 50 q3). |
| 51 q1 repeat of multiple-trauma-33 q2 | Yes | Intubation is now a fact in the update. The new decisions are judged below on their merits (rule 4). |
| 51 q3 repeat of airway-34 q2 | Yes | The nasal route item is gone. The new antibiotic question is judged below. |
| 51 q4 advisory | Taken | Now 51 q3. The new sentence is accurate. |

## Per question

### multiple-trauma-48

- q1 FAIL (high, repeat of a signed key decision).
  - Problem: abdominal-pain-39 q2 (s19, `reviewed: true`, alsoTopics multiple-trauma) keys the same decision. A hypotensive patient with free fluid at the spleen, at a hospital with no surgeon, goes to the trauma centre now ("Transfer to trauma centre now"). Its distractors are "Admit for serial examinations", "Arrange CT at the nearest hospital" and "Repeat FAST in 30 minutes". Here the key is "Immediate transfer to the trauma centre" against "Admit to the ICU for serial examinations", "CT of the chest, abdomen and pelvis first" and "Repeat eFAST in 30 minutes, then decide". The transient responder and the local CT scanner are twists on the same decision and teaching point. It is not a D1 entry, and D1 stands at 19 of 20.
  - Required change: replace q1 with a decision not in the bank for this topic or for abdominal-pain, shock and ems, and check it against the catalogues before writing. Make the transfer a fact in the q2 or q3 update. That also removes the mock-mode cue the first QA flagged (the flight in the q3 and q4 updates implying the q1 key). If the replacement leaves key feature 2, coverage holds (49 q2, 49 q5, 52 q3).
  - Source: src/samps/s19/abdominal-pain.ts, abdominal-pain-39 q2.
- q2 PASS. Ford 2016 (PMC5017838) supports directive leadership with high injury severity or inexperienced teams. No other leadership-style item is in the bank.
- q3 FAIL (low to medium, the source does not support the point as written).
  - Current text: "It also advises minimizing time on backboards, with consideration of a vacuum mattress or padding if that time is to be prolonged."
  - Problem: in the full text of Fischer 2018 (ENA copy, read this round), that sentence is item 10.v, which sits under "SMR in Children". The explanation applies it to a 22-year-old woman as if it were a general recommendation. Item 6, which applies to all ages, recommends a long spine board, a scoop stretcher or a vacuum mattress alike for transfers. So in the adult part of the statement the only support for preferring the vacuum mattress to the board is item 8: hospitals should remove patients from a long backboard "as soon as possible after arrival".
  - Required change: replace that sentence with wording true to the statement, for example: "It advises removing patients from a long backboard as soon as possible after arrival at hospital, and in its section on children it advises a vacuum mattress or padding when time on a board will be prolonged, to lower the risk of pain and pressure ulcers. The same risks apply to her on a rigid board for about 90 minutes." Alternatively, cite an adult source that prefers a vacuum mattress for prolonged transport, after verifying it. The key, the other distractors and the sitting and alignment sentences are correct (items 5 and 6 verified).
  - Source: Fischer PE et al. Prehosp Emerg Care. 2018, items 5 to 8 and 10.v. https://www.ena.org/sites/default/files/2025-08/Spinal%20Motion%20Restriction%20in%20the%20Trauma%20Patient.pdf
- q4 FAIL (high, repeat of a signed key decision).
  - Problem: ems-35 q3 (s35, `reviewed: true`) asks "Which of the following is the most appropriate tranexamic acid plan now that he is in your department?" after a first 1 g dose. It keys "tranexamic acid 1 g IV over 8 hours" against "1 g IV over 10 minutes", "2 g IV over 10 minutes" and "No further tranexamic acid". Here the key is the same, "tranexamic acid 1 g IV over 8 hours", after the same loading dose, against a 1 g bolus, a 2 g bolus and "No further tranexamic acid". The catalogue lists ems-35 under multiple-trauma. The first QA missed it. The rest of the tranexamic acid angles are also taken: the adult loading dose (multiple-trauma-16 q2), the child dose (multiple-trauma-33 q3), no dose after 3 hours (multiple-trauma-18 q3) and the paramedic exclusion (ems-35 q2).
  - Required change: replace q4 with a decision that is not about tranexamic acid, checked against the catalogues. Drop the CRASH-2 source if no question cites it any more. If the replacement leaves key feature 6, coverage holds (51 q3).
  - Source: src/samps/s35/ems.ts, ems-35 q3.

### multiple-trauma-49

- q1 PASS. The ACS 2022 Standards, revised 2025, Standard 5.3, include confirmed BP below 90 mmHg in adults and a GCS below 9 with a mechanism attributed to trauma. Key [2, 5] is correct. No activation-criteria question is elsewhere in the bank.
- q2 PASS. Under ATLS 11, xABCDE puts exsanguinating external hemorrhage first. multiple-trauma-16 q1 keys the tourniquet as a method after failed pressure. This question tests the order, which is a different decision. Mock-mode cue (q3 update) remains, flagged only.
- q3 PASS. The fix is applied and the wording is now true to CAFG 2021 part 2.
- q4 PASS. Ford 2016 supports the lower performance of leaders who do procedures. Note: 48 q2 uses the same finding to reject two distractors. The key decisions differ, so this is not a repeat.
- q5 PASS. 4 + 4 = 8 units. multiple-trauma-01 q2 (s14) keys angioembolization or preperitoneal packing for pelvic bleeding, and multiple-trauma-12 q2 keys laparotomy for an unstable positive FAST. The combination here (positive FAST and an open book pelvis, so laparotomy with preperitoneal packing) is a distinct decision.

### multiple-trauma-50

- q1 PASS. Diabetes Canada chapter 21 (URL opens to "Diabetes and Driving") supports the key. No hypoglycemia-before-a-crash item is in the bank.
- q2 FAIL (high, repeat of a signed key decision with reused numbers).
  - Problem: burns-18 q2 (s26, `reviewed: true`) keys "Myoglobinuria from muscle injury" as the cause of dark urine after a long lie, with "Urinary tract infection" among its distractors. This question keys the same option text for the same decision. Its update and the next update reuse burns-18's numbers almost exactly: burns-18 gives "Creatine kinase is 38 000 U/L, creatinine 168 umol/L and potassium 5.6 mmol/L. The urine dipstick is strongly positive for blood. Microscopy shows 2 red cells per high power field." The q3 update here gives "Creatine kinase is 38 000 U/L, potassium 5.4 mmol/L and creatinine 168 umol/L. The dipstick is strongly positive for blood, with 0 to 2 red cells per high power field." The trench collapse oral case (src/cases/batch05/trench-collapse-crush.ts) also uses "His CK is 38,000 and his urine is brown".
  - Required change: replace q2 with a new key feature 5 decision, an evolving complication of this crush or this patient that is not in the catalogues. This is the batch's only key feature 5 question, so the replacement must keep key feature 5. Invent new laboratory values for every later update.
  - Source: src/samps/s26/burns.ts, burns-18 q2.
- q3 FAIL (medium, repeat of a signed key decision that keys the opposite answer, and a source overstatement).
  - Problem 1: environmental-13 q3 (s09) and burns-06 q3 (s04), both signed, ask the same thing: the urine output target that guides fluids for myoglobinuria. They key 75 to 100 mL/hour. Here the key is 300 mL/hour, and 100 mL/hour is a distractor. Naming the protocol in the update makes the item single-keyed, but the decision is still repeated, and the bank would mark a candidate wrong for the answer its signed items teach. The question now tests recall of one paper's number.
  - Problem 2: the explanation says the review "reserves mannitol for patients whose output stays below 300 mL/hour on fluids alone". The full text (PMC4908773, read through the Europe PMC API) says "There is no consensus regarding the use of mannitol" and "Authors that recommend using mannitol suggest it should only be administered if fluid therapy alone does not lead to urine output exceeding 300 mL/h". The 300 mL/hour target is also reported as the conclusion of the authors it cites, not as the review's own recommendation.
  - Required change: replace q3 with a key feature 6 decision not in the bank. A rhabdomyolysis urine target, mannitol or bicarbonate question would still collide with the signed s04 and s09 items or with the trench collapse case, so leave this decision out. Use new laboratory values (see q2). If any later explanation cites Chavez on mannitol, write "the review found no consensus on mannitol".
  - Sources: src/samps/s09/environmental.ts environmental-13 q3, src/samps/s04/burns.ts burns-06 q3, Chavez LO et al. Crit Care. 2016.
- q4 PASS. Petitpas 2016 (PMC4831096) names compartment syndrome from extravasation as the most common complication. No other intraosseous extravasation item is in the bank. The update traces to the stem (1 L through the humeral needle, arms free).

### multiple-trauma-51

Unrequested and new content, judged on its merits (rule 4): the merged q1 update, the new q2 and q4, and the source changes. All are sound.

- q1 PASS. EAST 2020 (PubMed 32176167, abstract read) recommends screening CT angiography for high-risk cervical spine injuries. A fracture into the transverse foramen is high risk. GCS 8 = E2 + V2 + M4. No BCVI decision is elsewhere in the bank.
- q2 PASS. Cochrane 2015 (Ratilal, abstract read in Europe PMC): five RCTs, 208 participants, no difference in meningitis, all-cause mortality or meningitis-related mortality, with or without a CSF leak, and one trial showed a shift of nasopharyngeal flora toward resistant organisms. Every claim matches. No prophylactic-antibiotic skull base item is in any catalogue. The four drug distractors are plausible and correctly dosed. Low-confidence note: key feature 3 is a loose fit (see physician items).
- q3 PASS. SAFE-TBI verified: at 24 months, albumin 33.2% against saline 20.4% mortality, and in GCS 3 to 8, 41.8% against 22.2%. "Most clearly in severe injury such as his GCS of 8" is correct. No albumin in TBI item is elsewhere in the bank.
- q4 PASS. WSES 2023 (PMC9830860, full text read): recommendation 7 recommends invasive arterial pressure monitoring "in addition to the standard cardiorespiratory monitoring (ECG, HR, SpO2 and ETCO2)" for severe TBI transfers, and the text says "placement of an arterial line should not excessively delay the patient transfer". Recommendations 16 and 17 say the panel is "unable to recommend" optic nerve sheath ultrasound or automated pupillometry as reliable screening tools. The transport preparation items in the bank (ems-08 q2 and q4, multiple-trauma-33 q4 and others) do not key an arterial line. The writer's new numbers (128/76 mmHg, 45 minutes) were not found elsewhere.

### multiple-trauma-52

- q1 PASS. ATLS and Fischer item 10.vi support padding under the shoulders for a large occiput. Overlap note in the physician items.
- q2 PASS. Kaufmann 2012 (PMC3471264) verified. No length-based tape item is elsewhere in the catalogues.
- q3 PASS. This is the mirror of multiple-trauma-12 q2 (unstable abdomen first). Here the abdomen responds and has no blush, so the epidural sets the pace. The decision is different.
- q4 PASS. Orr 2009 verified: 1085 children, unplanned events 61% against 1.5%, death 23% against 9%.
- q5 PASS. Orr lists loss of crucial intravenous access among the unplanned events.

## Key positions, format and coverage

Single key positions, first to fifth: 5, 4, 2, 5, 5 of 21 (highest 23.8%, every position used). One menu question (49 q1). Prompts, option order and lengths pass the tests.

Key feature coverage from passing questions only: KF1 52 q1. KF2 49 q2, 49 q5, 52 q3. KF3 50 q4, 51 q1, 51 q2. KF4 50 q1. KF5 none (50 q2 fails, so its replacement must test KF5). KF6 51 q3. KF7 48 q2, 49 q1, 49 q3, 49 q4, 52 q2. KF8 51 q4, 52 q4, 52 q5 (48 q3 also once fixed).

## Sources verified this round

- Fischer PE et al. Prehosp Emerg Care. 2018. Full text read from the ENA PDF (items 3 to 10). PubMed 30091939 confirmed in Europe PMC.
- Law JA et al. CAFG part 2. Can J Anaesth. 2021. Full text through the Europe PMC API (PMC8186352).
- Chavez LO et al. Crit Care. 2016. Full text through the Europe PMC API (PMC4908773).
- Ratilal BO et al. Cochrane Database Syst Rev. 2015. Abstract through Europe PMC (PMID 25918919).
- Picetti E et al. WSES consensus. World J Emerg Surg. 2023. Full text (PMC9830860).
- SAFE Study Investigators. N Engl J Med. 2007 (PMID 17761591). Orr RA et al. Pediatrics. 2009 (PMID 19564281). Kim DY et al. EAST BCVI. 2020 (PMID 32176167). CRASH-2. Lancet. 2010 (PMID 20554319). Abstracts read through Europe PMC.
- Ford 2016, Petitpas 2016 and Kaufmann 2012: PMC ids resolve to the cited titles, years and authors.
- ATLS 11 URL opens to "ATLS 11 | ACS". The Diabetes Canada chapter 21 URL opens to "Diabetes and Driving".

## Physician-level items (not grounds for failure)

- The bank holds three myoglobinuria urine targets: 75 to 100 mL/hour (burns-06 q3 and environmental-13 q3, signed), 200 to 300 mL/hour (trench collapse oral case) and, until replaced, 300 mL/hour here. One bank position is needed.
- 51 q2 maps antibiotic prophylaxis to key feature 3 (iatrogenic problems). The fit is loose, because the question tests withholding a harmful intervention rather than searching for a missed injury or complication. Coverage does not depend on it.
- 51 q4 rests on a WSES recommendation with 82.9% agreement. WSES also accepts noninvasive pressure monitoring when arterial access is difficult. The stem gives no difficulty, so the key holds.
- 52 q1 teaches the same anatomy (large occiput, pad under the shoulders) as one accept item in the airway s02 write-in about intubation positioning. The decision here is spinal alignment on a board, so it is not failed.
- 49 q2: the q3 update ("The tourniquet stops the bleeding") implies the q2 key in mock mode. This is inherent to the flow.
- Explanations name study authors ("Ford and colleagues", "Kaufmann and colleagues"). This matches bank practice (41 files) and is not taken as a personal-name breach. The physician may prefer "a review" wording.

## Summary

5 SAMPs, 22 questions (21 single, 1 menu). 17 pass and 5 fail. Every fix the first QA required was applied as asked. The new failures are mainly repeats the first QA did not catch:

- Three repeat signed key decisions: 48 q1 (abdominal-pain-39 q2), 48 q4 (ems-35 q3) and 50 q2 (burns-18 q2, with reused CK and creatinine values).
- 50 q3 repeats a signed decision and keys the opposite answer, and it overstates its source on mannitol.
- 48 q3 applies a recommendation from the statement's section on children to an adult.

No keyed answer is clinically wrong. The new 51 q2 and q4 pass. SAMPs that fail: multiple-trauma-48 and multiple-trauma-50. The replacement for 50 q2 must keep key feature 5, the batch's only key feature 5 item.
