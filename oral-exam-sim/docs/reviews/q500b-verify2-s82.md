# Q500B verification review 2: s82, Pre-eclampsia (Revision 2)

Reviewer: Preceptor QA. I am a fresh reviewer and did not write, edit or review this batch before. I read all of `src/samps/s82/pre-eclampsia.ts` (pre-eclampsia-39 to pre-eclampsia-43). I made no edits to the batch (REVIEW-RULES rule 1).

## Checks run

- `SAMP_BATCH=s82 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files and 128 tests, all passed. This includes the bank-wide near duplicate stem test.
- House style: no em or en dashes and no semicolons in content. No mnemonics or personal names. Author is "Preceptor", with `reviewed: false` and `version: 1`. Spelling is Canadian.
- Key positions for the single-answer questions, first to fifth: 4, 4, 4, 3, 4 of 19. No position is above 25 percent.
- I searched the whole bank (`src/samps`, `src/cases`) by keyword for: hydralazine, preload, crystalloid with hydralazine, volume expansion, 80 mL/hour and fluid restriction, fetal monitoring with magnesium, peroxidase, hydronephrosis, the IM magnesium regimen (each buttock, 10 g IM), shrimp and shellfish, smoking with pre-eclampsia, enoxaparin with neuraxial anesthesia, breastfeeding with nifedipine or methyldopa, epinephrine in pregnancy, and postpartum psychosis. Results are discussed under each item.

## Sources

| Source | Result |
|---|---|
| NICE NG133 | **Could not open.** nice.org.uk returned 403 this session. A web search turned up the 1.8.8 wording ("consider using up to 500 ml crystalloid fluid before or at the same time as the first dose of intravenous hydralazine in the antenatal period"), but only in a secondary flashcard source. That wording also matches my own knowledge of NG133. The writer reports reading 1.8.8, 1.8.11 and 1.8.12 in full. The first review confirmed the other NG133 points verbatim. |
| Tamir 2025 (PMID 40727356) | Opened through the Europe PMC API. It is an MRI study. Right hydronephrosis was found in 43.8% and 45.1% of asymptomatic pregnant women (the two readers), with no significant difference in women with unexplained right-sided pain. This supports the 40 q3 explanation ("an MRI study ... about 45%"). |
| ISSHP 2021 (Magee, Pregnancy Hypertens 2022) | **Could not open** the full text (the repository link redirected). I needed it to check whether ISSHP comments on fluid given with hydralazine. |
| SOGC No. 426 (2022) | **Could not open** (it was blocked in earlier sessions, and a search found no text on this point). I could not confirm whether the Canadian guideline supports or rejects a crystalloid preload with hydralazine. A FIGO chapter by SOGC authors (Magee and colleagues) states that plasma volume expansion is not recommended in pre-eclampsia, but it does not address a hydralazine preload. |
| Other sources (WHO 2011, Brookfield 2021, ACOG 222, Simerville 2005, WAO 2020, Conde-Agudelo 1999, Leffert 2018) | Not reopened. The first review confirmed they exist and support their points. Nothing in Revision 2 changes how they are used. |

## Earlier fails: status

| Item | Raised in | Status |
|---|---|---|
| 39 q4 cue to the medevac key | qa | Resolved. The update and prompt read as the first review asked. |
| 41 q2 key scored twice | qa | Resolved. It is now a findings question with the key "Ankle clonus with confusion". |
| 41 q3 explanation | qa | Resolved. It now names cerebral disturbance as a severe feature. |
| 41 q4 psychiatry cue | qa | Resolved. |
| 42 q3 PCR cue | qa | Resolved. |
| 42 q4 "Progressive pre-eclampsia" | qa | Resolved. The key now reads "Evolving organ involvement". |
| 39 q2 urinary symptoms not in the stem | verify | Resolved. The stem now says "She has no dysuria or urinary frequency." |
| 39 q3 platelet cue | verify | Resolved. The update now reads "No blood results will be available for about 24 hours". |
| 40 q4 repeat of signed pe-02 q3 | verify | Resolved as a repeat. The betamethasone item is gone. The new item is judged below. |
| 42 q1 normal edema reason | verify | Resolved. The reviewer's text was applied. |
| 42 q2 thyroid reason | verify | Resolved. The reviewer's text was applied. |
| 43 q3 "falling platelet count" | verify | Resolved. It now reads "low platelet count". |

**The writer's departure on 40 q4 was right.** Signed pre-eclampsia-18 q4 (s47, line 356) asks "Which of the following is the most appropriate fetal monitoring while magnesium sulfate is infusing?" The fetal assessment rebuild suggested in the verify review would have repeated that decision. Choosing a different KF4 decision was the right call.

## Verdicts

### pre-eclampsia-39 (Aches during a household flu outbreak)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Her BP was 104/66 at 20 weeks and is now 158/104, with 2+ protein on dipstick. That meets the NICE definition. The distractor reasons are true. |
| q2 | PASS | The explanation's claims now all trace to the stem: temperature 37.1, no guarding, no urinary symptoms. |
| q3 | PASS | The update repeats the 24 hour delay already given in the stem and no longer points to HELLP. The key (medevac now) is correct. |
| q4 | PASS | The Pritchard completion (5 g IM into each buttock after the 4 g IV load) is correct. The stated reasons for rejecting the gravity drip, the 2 g IV pushes, the 10 g IV dose and 12-hourly dosing are true. The key is 1 character longer than the gravity-drip option. That is acceptable, and the batch passes the length gate. |

### pre-eclampsia-40 (Flank pain with a history of stones)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Correct. The distractor reasons trace to the stem. |
| q2 | PASS | Platelets 92, AST 186 and LDH 690 meet the ACOG thresholds for HELLP. The peroxidase point is correct, and no other item in the bank teaches it. |
| q3 | PASS | Tamir 2025 is confirmed as an MRI study with about 45% right hydronephrosis. No obstetric hydronephrosis item exists elsewhere in the bank (the other hits are kidney stone and sepsis items in non-pregnant patients). |
| q4 | FAIL | The rebuild is sound in concept. The decision (fluid with the first IV hydralazine dose) is new to the bank, KF4 fits, the key is the single best option, and no distractor is defensible under any guideline. It also does not contradict signed s47 q2 (oliguria, total fluids about 80 mL/hour, ISSHP against routine plasma volume expansion), because NICE makes hydralazine its one exception. Two defects need fixing, and one point goes to the physician. **(1) Labetalol escalation (medium confidence).** The update switches to hydralazine after labetalol 20 mg and 40 mg only. The bank's signed teaching is that the standard step to a second agent comes after labetalol 20, 40 and 80 mg fails (batch13 postpartum-headache-sixth-day, and s47 line 1323 on the 300 mg course). ACOG's algorithm says the same. Fix: change "After labetalol 20 mg and then 40 mg IV, her BP is 166/112 mmHg" to "After labetalol 20 mg, 40 mg and then 80 mg IV, her BP is 166/112 mmHg". **(2) Lens B1 (high confidence).** The last sentence says stopping fluids "is not needed when maintenance is already capped", but the stem never says her maintenance fluids are capped. Fix: replace the last sentence with "Stopping all fluids removes the small preload NICE suggests, and NICE limits maintenance fluids to 80 mL/hour rather than stopping them." **(3) Clarity against signed s47 (medium confidence).** As written, a candidate who learned signed s47 q2 (no boluses) will read this key as a contradiction. Fix: after the sentence that begins "NICE suggests considering up to 500 mL of crystalloid", insert "This small preload is the only exception NICE makes to its advice against volume expansion in severe pre-eclampsia." Options, key, key position, keyFeature and source are unchanged. The key "Crystalloid up to 500 mL IV with the dose" is the longest option. That is acceptable under B1, because "up to" is the guideline's own limit and the batch count of longest keys is unchanged. |

### pre-eclampsia-41 (Restless and not sleeping after the birth)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Correct key. The distractor reasons trace to the stem. |
| q2 | PASS | Accurate. The mock-mode cue (the update and the protein-creatinine ratio imply the q1 key) cannot be avoided and stays flagged. |
| q3 | PASS | The ACOG severe feature and the 4 to 6 g load then 1 to 2 g/hour are correct. A BP of 158/104 is above the postpartum treatment threshold of 150/100, so "Her BP still needs treatment" holds. |
| q4 | PASS | The cue has been removed. The nifedipine XL key is consistent with NICE and with signed s47 (methyldopa avoided after birth). The breastfeeding item in s19 tests whether she can keep feeding, not which drug to choose, so it is not a repeat. |

### pre-eclampsia-42 (Swollen face after a seafood dinner)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | The revised normal edema reason is true. The timeline holds (swelling over 2 days, shrimp last night). |
| q2 | PASS | The revised thyroid reason is true. |
| q3 | PASS | The epinephrine key is correct. The WAO criteria paraphrase is correct. |
| q4 | PASS | 131 is above 100 and LDH 390 is below 600, so she meets neither the Tennessee nor the ACOG HELLP criteria. The NICE organ involvement thresholds are correct. |

### pre-eclampsia-43 (Chest pain pathway at three in the morning)

| Q | Verdict | Notes or exact fix |
|---|---|---|
| q1 | PASS | Correct. |
| q2 | PASS | The NICE moderate risk factors are correct, and so is the smoking relative risk of 0.68. The prompt naming pre-eclampsia stays flagged as a mock-mode cue. The s47 smoking hit is in an abruption item, so this is not a repeat. |
| q3 | PASS | The revised wording is correct. |
| q4 | PASS | 98 kg at 1 mg/kg is 98 mg, which rounds to 100 mg. The SOAP 24 hour interval is correct. No other item in the bank covers enoxaparin and neuraxial anesthesia in pregnancy. |

## Needs physician decision

1. **40 q4 (new).** The key rests on NICE NG133 1.8.8, which only says "consider". I could not find a Canadian (SOGC 426) or ISSHP statement on a crystalloid preload with IV hydralazine, and SOGC-authored material advises against plasma volume expansion in general. Please confirm that a preload of up to 500 mL is acceptable Canadian practice. If SOGC 426 advises against it, the item needs a different KF4 decision.
2. Carried over: SOGC 426 support for the IM regimen at a nursing station (39 q4), IM magnesium with unknown platelets in suspected HELLP (39 q4), magnesium at non-severe BP with cerebral signs postpartum (41 q3), and methyldopa while breastfeeding (41 q4).
3. Carried over: mock-mode cues left in place because the questions cannot work without them, in 41 q2 and 43 q2.

## Summary

The batch has 20 questions in 5 SAMPs. All 12 earlier fails are resolved: 6 from the first review and 6 from the verification review. The writer was right to rebuild 40 q4 around something other than fetal monitoring, which would have repeated signed pre-eclampsia-18 q4. 19 questions pass and 1 fails. The failing item is 40 q4, which needs three small text fixes: labetalol 80 mg added to the update, one explanation claim not in the stem, and one sentence reconciling the key with signed s47. The physician also needs to confirm that a preload of up to 500 mL is acceptable Canadian practice (Needs physician decision 1). Tests pass. I could not open NICE NG133, ISSHP 2021 or SOGC 426 this session.

Overall: FAIL (1 item)
