# Q500 verify report, round 2: s69, Burns

A fresh independent reviewer, who had not written, edited or reviewed this batch before, reviewed the whole final text of `src/samps/s69/burns.ts` (burns-39 to burns-43). The inputs were the previous verdict `docs/reviews/q500-verify-s69.md` and the writer report `docs/reviews/q500-writer-s69-r2.md`. The changes were read with `git diff 09445ba HEAD` on the file. Nothing was edited in this round (REVIEW-RULES rule 1). All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Tests: `SAMP_BATCH=s69 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128. The type check shows no s69 errors. burns-39 and burns-43 are byte for byte the text that passed last round.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| burns-39 | PASS | PASS | PASS | PASS | PASS |
| burns-40 | PASS | PASS | PASS | PASS | PASS |
| burns-41 | PASS | PASS | PASS | PASS | PASS |
| burns-42 | FAIL | FAIL | PASS | FAIL | FAIL |
| burns-43 | PASS | PASS (unchanged) | PASS | PASS | PASS (menu) |

Four SAMPs pass. One fails, with three required fixes.

## Previous required fixes: were they applied?

| Previous fix | Applied | Verdict |
|---|---|---|
| burns-40 stem, puddle exposure | Yes. She splashes both arms to the elbows. Her clothes and other skin stay dry. Hands 2.5% x 2 plus forearms 3% x 2 is 11%, so "about 10%" holds. Washed at 10:00 and seen at 16:00 is 6 hours, which agrees with q2. | PASS |
| burns-40 q1, repeat of burns-39 q1 and burns-03 q1 | Yes. Replaced with "additional route of exposure", keyed on ingestion from finger sucking. No bank item keys this. The unsupported "settled after a brief wash" phrase is gone. | PASS |
| burns-40 q4, repeat of burns-12 q3 | Yes. Now a paediatric burn centre transfer from a community hospital whose ward has no cardiac monitoring. The 4 hour observation distractor is gone. ABA 2025 reread: "All chemical injuries" and "All pediatric burns may benefit from burn center referral" are present. | PASS |
| burns-41 stem and title, retelling burns-02 | Yes. The setting is now a generator in a closed boathouse. The writer was right not to use the ice fishing shack (burns-11). | PASS |
| burns-41 q3, repeat of analgesia-sedation-10 q2 | Yes. Removed. The new q4 keys a bolus-only hydromorphone PCA. PCA is keyed nowhere else in the bank (only as one accept item in the s02 sickle cell write-in). | PASS |
| burns-42 stem, retelling house-fire-burns | Yes. Rebuilt with a new setting (a nursing station medevac), a new patient and a new mechanism (a grease fire). No bank item has a cooking oil fireball. | PASS |
| burns-42 q1 (hedged key), q2 (rising airway pressure), q4 (transfer sedation) | Yes. The questions are gone. | PASS |
| burns-42 q3, the mock-mode cue and the KF4 timing | KF4 is now aimed at the time of injury. That creates a new repeat, see below. | See burns-42 |

## Required fixes

### burns-42

| Question | Field | Current text | Required change | Source |
|---|---|---|---|---|
| q1 | whole question | "Which of the following times should her burn fluid resuscitation timeline be counted from?" Key "12:50". The distractors are the call, the nurse's assessment, the IV start and arrival. | This is the same key decision as signed burns-16 q1 (`src/samps/s26/burns.ts`, `reviewed: true`): "at which of the following times does the first 8-hour period ... end?" There, the key is timed from the injury and the distractors are timed from the paramedics, arrival and the start of fluid. burns-02 q2 and the house-fire-burns oral case also key fluids from the time of injury. Inferring 12:50 from "about 15 minutes" before the call is a thin twist on the same decision. It is literal KF4 wording, so it could only stand as a D1 row. The D1 table is at 19 of 20, and only the product owner can add a row. No row is recorded, so it fails. Replace q1 with a decision that is not keyed in the bank, for any burns key feature. KF4 stays covered by q2 and q4. Check the burns catalogue, `src/samps/s04/burns.ts` and `src/samps/s26/burns.ts` before choosing. Keep the stem time facts so that the q2 explanation ("the next 16 hours, which start at 20:50") still holds. | burns-16 q1. docs/DECISIONS.md D1. Q500_BRIEF rule 3 |
| q3 | whole question | Update "She arrived wrapped in towels soaked in cool water, which the nursing station applied to ease her pain." Key "Dry covers, forced-air warming". Distractors "Cool water soaks for pain" and others. | This repeats signed burns-24 q2 (`src/samps/s26/burns.ts`, "A tent fire at the campground"): wet towels applied before hospital, a low temperature, and the key "Remove wet towels, cover and warm him" against the distractor "Continue wet towels to cool the burns". The decision and the twist are the same. Replace it. One route that keeps the new teaching: drop the wet towels, so that she arrives under dry blankets at 36.0°C, and test whether 36.0°C counts as hypothermia that needs active warming in a burn patient. Because the 36.5°C threshold comes from one provincial statement, name it in the update ("Using the Trauma New Brunswick 2025 consensus statement") as SAMP_SPEC section 9 requires. Distractors must not include continuing wet or cool coverings. Check the bank again before writing. | burns-24 q2. NB 2025 point 9 ("present in a burn patient when the internal temperature is less than 36.5ºC") |
| q4 | update | "Her towels are replaced with dry sheets and a warming blanket. A urinary catheter is placed at 19:30 and at once drains 520 mL of clear yellow urine." | In mock mode the first sentence names the q3 key ("Dry covers, forced-air warming"). Delete that sentence. The second sentence can stand alone. If q3 is rebuilt, make sure no q4 text names its new key. | SCORING-RULINGS B6 |

## Judgement on the writer's flags

1. **burns-42 q2 and the open standard (SCORING-RULINGS section D, burn fluid catch-up). Acceptable. No redesign is required.** Reasons:
   - SAMP_SPEC section 9 says that where references differ, the stem names the one that applies. The q2 update does this ("the Alaska 2021 burn resuscitation guideline").
   - The guideline says so verbatim. Alaska 2021 (PDF read): "Begin administration at the calculated hourly rate, regardless of previous fluid administration. Previous fluid administration should be documented, but should not trigger 'catch up' fluid administration or subtraction from the current consensus formula rate."
   - The current Canadian source agrees. Trauma New Brunswick 2025, critical point 3 (PDF read), quotes the ABA: "If initial fluid resuscitation is delayed there is no 'catching up'. The hourly rate should be started and adjusted regardless of time since the injury." Its starting rate is the 24 hour total divided by 16, which here is 3360 / 16 = 210 mL/hour, the same key.
   - The bank already holds this side in a signed item. burns-16 is `reviewed: true` and its q1 explanation teaches no catch-up from Alaska. So q2 adds no new side to the split and reverses no ruling (section D has none).
   - The explanation ties its wording to the guideline ("the subtraction the guideline advises against") and does not call subtraction wrong in general.
   - The split itself stays open for the physician: signed burns-02 q2 still subtracts the prehospital litre. See the physician list.
   - Arithmetic recomputed: 2 x 70 x 24 = 3360 mL. 1680 / 8 = 210. 1680 / 16 = 105. 4 x 70 x 24 = 6720, and 6720 / 24 = 280. 3360 / 8 = 420. 14:10 to 19:10 is 5 hours x 500 = 2500 mL. One defensible key under the named guideline.
2. **burns-42 q1 against burns-16 q1. It is a repeat.** See the required fix.
3. **The 36.5°C threshold from a provincial statement.** As the current q3 is written, the key does not depend on the threshold. Any reference would remove wet cool towels from a 24% burn at 36.0°C and warm her. Its own failure is the repeat of burns-24. If the rebuild makes the threshold the decision, it must name NB 2025 in the update. A Canadian provincial consensus is an acceptable source of record under the Canadian-first rule. It goes on the physician list.
4. **burns-40 q1, the ingestion route resting on McKee. Acceptable.** McKee 2014 (opened through WebFetch) lists "exposure of >5% total body surface area (TBSA) with any HF concentration, and inhalation or ingestion of HF" as risks for systemic toxicity, and says "systemic toxicity occurs commonly with inhalation or ingestion of HF". The stem rules out every distractor with a stated fact: finger sucking, dry clothes and other skin, normal face and eyes, and no cough. The explanation keeps the eyes in the examination. This is one defensible key. No source gives a paediatric hand-to-mouth figure, so it goes on the physician list.

## Unrequested writer changes (REVIEW-RULES rule 4)

- burns-40 stem: "You are working in a community hospital", a ward without monitoring, and a burn centre 2 hours away. These are needed for the new q4. Acceptable.
- burns-41: the disposition moved to q3, the update now carries the hydromorphone response, and the unsupported "need formal fluid resuscitation" was dropped. Acceptable. An 18% adult burn falls under NB's 20% trigger for formal resuscitation, so dropping the phrase is correct.
- Last commit (a0d0362): burns-40 q4 key shortened to "Paediatric burn centre transfer" and "Your" changed to "The hospital's". burns-42 q2 distractor 140 became 280 with a corrected explanation. burns-42 q3 key reworded. All checked and acceptable.
- Kohan 2021 and PADIS 2018 were removed and Alaska 2021 and NB 2025 were added. Every listed source is cited.

## Whole batch checks

- burns-39: unchanged and still correct. The gel arithmetic is 1000 mg in 40 mL, which is 2.5%.
- burns-40: 12 kg. A QTc of 470 ms and an ionized calcium of 1.02 mmol/L are abnormal. KF tags are honest (q1 KF1 as a linked exposure, q2 KF1, q3 KF6, q4 KF5).
- burns-41: fentanyl 100 mcg / 82 kg is 1.22 mcg/kg. COHb 9% with no neurologic signs does not meet Hampson's hyperbaric criteria. Partial thickness burns of 10% TBSA or more fall in the ABA immediate column. Anderson 2017 (page read) quotes the APS, ASRA and ASA consensus "should be considered for all patients taking buprenorphine": "patient-controlled analgesia when systemic analgesics are necessary, avoidance of basal opioid infusions". It supports the q4 key.
- burns-42 q4: from about 12:50 to 19:30 is 6 hours 40 minutes, so "at least 6.5 hours" holds, and 520 / 6.67 is about 78 mL/hour, matching "no more than about 80". NB gives the adult target as 30 to 50 mL/hour. One defensible key.
- burns-43: unchanged and passed last round.
- Key positions across 19 singles: position 1 has 3, positions 2 to 5 have 4 each, so the highest is 21%. There is one menu question (43 q4). Every key feature is covered, and after the burns-42 fixes KF1 keeps 40 q1, 40 q2, 41 q1 and 43 q2, and KF4 keeps 42 q2 and 42 q4.
- House style: no semicolons, no em or en dashes, no mnemonics, no personal names. "Paediatric" and "pediatric" both appear in the bank. Not a failure.
- URLs: Alaska PDF (200, PDF), NB PDF (200, PDF), ABA referral page (200, table cells read), Anderson PMC (page read), McKee PMC (read through WebFetch). The CAG, Walker and Berry citations are unchanged from last round.

## Physician-level items (not grounds for failure)

1. The burn fluid catch-up standard is still split. burns-42 q2 and signed burns-16 follow Alaska 2021 and NB 2025 (no catch-up, no subtraction). Signed burns-02 q2 subtracts the prehospital litre and keys catch-up. A bank position is needed (SCORING-RULINGS section D, PHYSICIAN_REVIEW Part 1 section 6). NB 2025 is a current Canadian source on the no catch-up side.
2. The burn-specific hypothermia threshold (below 36.5°C) comes from Trauma New Brunswick 2025, a provincial consensus.
3. burns-40 q1 keys ingestion as the most important extra route because of the stem facts. McKee supports ingestion as a route to systemic toxicity. No source quantifies hand-to-mouth exposure in toddlers.
4. burns-41 q4: the explanation's claim that IM opioid is avoided in burns over 10% because absorption is unpredictable is standard burn teaching, but it is not in Anderson. The same Anderson list also prefers "oral over intravenous opioids". The explanation rejects oral oxycodone as too slow and too weak for severe burn pain, which fits KF3. PCA in the emergency department during a wait of 6 hours or more is less common than on a ward.
5. burns-41 q1: "A urine drug screen would show the buprenorphine and fentanyl already known" is not true of every immunoassay panel, because many do not detect either drug. The distractor stays wrong for the stated reason (it would not change care). Consider "would not change care whatever it showed".
6. burns-42 q4: the averaged 78 mL/hour is above the 30 to 50 mL/hour target, so some excess fluid is real after 2500 mL at 2.5 times the formula rate. The key ("stored over several hours") is still the best description, and the explanation rejects only "heavy" over-resuscitation. The explanation could say so outright.
7. Three keys in the batch are burn centre transfer or consultation (40 q4 chemical injury in a child, 41 q3 size, 43 q4 inhalation), each on a different ABA criterion. burns-40 q4's key wording matches burns-17 q5 ("Transfer to a paediatric burn centre"), but the criterion and the reasoning differ. burns-42 q4 and burns-16 q2 both teach that a high urine volume need not mean over-resuscitation, from different causes (stored urine against lithium diabetes insipidus).

## Summary

Five SAMPs: burns-39, burns-40, burns-41 and burns-43 pass. burns-42 fails, with 3 required fixes: q1 repeats burns-16 q1 (fluid timing from injury) with no D1 row, q3 repeats burns-24 q2 (wet towels removed and the patient warmed), and the q4 update names the q3 key in mock mode. All 10 fixes from the previous round were applied correctly. The writer's open-standard flag on burns-42 q2 is judged acceptable: the guideline is named in the stem, Alaska 2021 and NB 2025 support it verbatim, and signed burns-16 already holds that side. The catch-up split stays on the physician list.
