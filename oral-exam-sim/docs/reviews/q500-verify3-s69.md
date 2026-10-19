# Q500 verify report, round 3: s69, Burns

A fresh independent reviewer, who had not written, edited or reviewed this batch before, reviewed the round 3 revision of `src/samps/s69/burns.ts`. The inputs were the previous verdict `docs/reviews/q500-verify2-s69.md` and the "Round 3" section of `docs/reviews/q500-writer-s69-r2.md`. The changes were read with `git diff f8246d0 -- oral-exam-sim/src/samps/s69`. burns-41 (changed explanations only) and burns-42 were reviewed in full. Nothing was edited in this round (REVIEW-RULES rule 1). All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Tests: `SAMP_BATCH=s69 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128. The type check shows no s69 errors.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| burns-39 | PASS (unchanged) | PASS | PASS | PASS | PASS |
| burns-40 | PASS (unchanged) | PASS | PASS | PASS | PASS |
| burns-41 | PASS | PASS (explanation changed) | PASS | PASS | PASS (explanation changed) |
| burns-42 | PASS | PASS (new) | PASS | PASS (new) | PASS |
| burns-43 | PASS (unchanged) | PASS | PASS | PASS | PASS (menu) |

All five SAMPs pass. No required fixes.

## Previous required fixes: were they applied?

| Previous fix | Applied | Verdict |
|---|---|---|
| burns-42 q1, repeat of burns-16 q1 (fluid clock from injury) | Yes. Replaced with a new decision: how to secure a cannula placed through burned skin. Key "Sutures to the skin". The stem time facts are kept, and the q2 explanation now states "20:50, 8 hours after the fire at about 12:50", so it stands on its own. No fluid timing question remains, so there is no D1 repeat. | PASS |
| burns-42 q3, repeat of burns-24 q2 (remove wet towels and warm) | Yes. The wet towels are gone ("She arrived under dry blankets"). The update names "the Trauma New Brunswick 2025 consensus statement", as SAMP_SPEC section 9 requires. The question now tests whether 36.0°C is hypothermia in a burn patient. No distractor involves wet or cool coverings. | PASS |
| burns-42 q4 update named the q3 key in mock mode | Yes. The update now reads only "A urinary catheter is placed at 19:30 and at once drains 520 mL of clear yellow urine." No q4 text names the new q3 key. | PASS |
| burns-41 q1, physician item 5 (urine drug screen claim) | Yes, at the coordinator's request. Now "would not change his care whatever it showed, because his buprenorphine and the paramedics' fentanyl are already known". True for any panel. Key unchanged. | PASS |
| burns-41 q4, physician item 4 (IM absorption claim not in Anderson) | Yes, at the coordinator's request. Now "Scheduled IM doses every 3 hours cannot be adjusted as his pain changes, and each injection adds pain of its own." Both reasons are true of the option as written. Key unchanged. | PASS |

## Full review of burns-42

- **q1 (new).** NB 2025, Clinical management issues (PDF read): "With respect to peripheral and central lines through burned tissue (only when necessary), it is prudent to suture secure these as standard taping and adhesives are often ineffective on burned tissue, particularly if wet." The same page says securing lines "takes precedence over dressings to the surrounding skin". NB also says "peripheral access through burned skin is acceptable if needed" and IO or central access "if unable to obtain peripheral intravenous access", so the update (leaking burned-arm IV, no usable leg veins, new cannula through burned skin) is consistent with the source. The transparent dressing, tissue adhesive and tape distractors are rejected for the reason NB gives. The elastic bandage reason (a wrap tightens as the burned arm swells and can limit blood flow) is not in NB, but it is standard and true teaching about circumferential wraps on a swelling burned limb. One defensible key. Lengths 19 to 31 characters (ratio 1.63), key shorter than the mean distractor. No later update, prompt or option names sutures. Explanation 430 characters, opens with the deciding point.
- **q2.** Unchanged key and arithmetic (3360 mL, 210 mL/hour). The added clause "8 hours after the fire at about 12:50" agrees with the stem (call at 13:05, about 15 minutes after the fire). 14:10 to 19:10 at 500 mL/hour is 2500 mL. PASS.
- **q3 (new).** NB 2025 point 9 (PDF read): hypothermia "is present in a burn patient when the internal temperature is less than 36.5ºC. This differs from a healthy person in which the threshold is 35ºC. Hypothermia in the early phase of burn injury has been shown to worsen the prognosis". NB Exposure section: "Active rewarming is recommended for all moderate to severe burn injuries", "Monitor and document patients' temperature regularly", warmed Ringer's lactate, dry sheets, "Bair Hugger or warm blankets". Every claim in the explanation traces to NB. A rectal reading is an internal temperature, so "probe error" is fairly rejected. Because the update names NB, the 36.5°C threshold applies and the key is the one defensible answer (any reference would at least actively rewarm a 24% burn under NB's "all moderate to severe burn injuries" line). Options 27 to 34 characters, key 1.15 times the mean distractor. The key is the longest option here, and the batch stays within the 35 percent limit (tests pass).
- **q4.** Unchanged apart from the deleted sentence. From about 12:50 to 19:30 is 6 hours 40 minutes, 520 / 6.67 is about 78 mL/hour. PASS.
- **Sources.** `alaska-burns` (q2) and `nb-burn-care` (q1, q3, q4). Both listed, both cited. NB PDF URL returns 200, application/pdf, "August 2025 Version 2".

## Judgement on the writer's flags

1. **burns-42 q1 tagged KF4. Acceptable.** The official KF4 wording is "In patients with major burns, administer fluid replacement appropriately ... and monitor response." A secure line is the practical means of administering that fluid in a 24% burn whose only IV has failed, and NB places line securing among the management issues of a major burn. No other burns key feature fits better (it is not an associated injury, airway, analgesia, disposition or chemical exposure). The tag is honest. KF4 is also covered by q2 and q4, so coverage does not depend on it.
2. **The 36.5°C threshold from one provincial statement.** Named in the update as SAMP_SPEC section 9 requires. A current Canadian provincial consensus is an acceptable source of record. It stays on the physician list.

## Uniqueness of the new keys

- **q1, suturing a vascular line through burned skin.** Searched the burns, environmental and anaphylaxis catalogues and grepped `src/samps` and `src/cases` for suture, secure, tape and adhesive. No SAMP or oral case keys how to secure an IV or central line through burns. The nearest content is the endotracheal tube: burns-01 q3 (s04, signed, write-in accept item "Secure the tube with ties rather than tape on burned skin") and the house-fire-burns oral model answer ("Secure the tube with ties, not tape on burned skin"). The shared idea is that tape does not hold on burned skin, but the device, the decision and the answer (ties against sutures) differ. Not a repeat. Named for the physician.
- **q3, 36.0°C as hypothermia under a burn-specific threshold.** No bank item mentions 36.5°C as a threshold. burns-24 q2 (s26, signed) keys removing wet towels and warming at 34.6°C, and burns-14 q4 (s04) keys limiting cooling of large burns. Neither tests whether a temperature between 35 and 36.5°C counts as hypothermia in a burn. New decision.

## Unrequested writer changes (REVIEW-RULES rule 4)

- burns-42 q2 explanation: the added clause "8 hours after the fire at about 12:50". Needed once the old q1 left. True to the stem. Acceptable.
- burns-42 q1 source moved from `alaska-burns` to `nb-burn-care`. Correct for the new question. Acceptable.
- No other s69 text changed. burns-39, burns-40 and burns-43 are byte for byte the text that passed in round 2, and burns-41 differs only in the two requested sentences.

## Whole batch checks

- Single key positions across 19 singles (first to fifth): 3, 4, 4, 4, 4. Highest 21%. Every position used. One menu question (43 q4).
- Key feature coverage: KF1 5 (40 q1, 40 q2, 41 q1, 42 q3, 43 q2), KF2 2 (43 q1, 43 q3), KF3 2 (41 q2, 41 q4), KF4 3 (42 q1, 42 q2, 42 q4), KF5 4 (39 q4, 40 q4, 41 q3, 43 q4), KF6 4 (39 q1, 39 q2, 39 q3, 40 q3). Every key feature covered. KF1 for burns-42 q3 is fair: hypothermia is a complication the burned patient must be assessed for.
- House style in all changed strings: no semicolons, no em or en dashes, no absolute words, no mnemonics, no personal names. Canadian spelling.
- Mock mode: no update, prompt or option in burns-42 names an earlier key.

## Physician-level items (not grounds for failure)

1. The 36.5°C burn hypothermia threshold (burns-42 q3) rests on Trauma New Brunswick 2025, a provincial consensus that is named in the update.
2. burns-42 q1: the elastic bandage reason (a circumferential wrap tightens as the burned arm swells) is standard teaching but not in NB. burns-42 q1 shares the "tape fails on burned skin" idea with the endotracheal tube item in burns-01 q3 and the house-fire-burns oral case, for a different device and decision.
3. burns-42 q1 update: "Her legs have no usable veins" is a contrived but plausible fact in a healthy 38-year-old. It is there to make access through burned skin the right choice, which NB allows "if needed".
4. Carried over from round 2: the burn fluid catch-up split (SCORING-RULINGS section D) remains open. burns-42 q2 and signed burns-16 follow Alaska 2021 and NB 2025, signed burns-02 q2 does not.
5. Carried over from round 2: burns-40 q1 (ingestion route), and the three transfer or consultation keys in the batch (40 q4, 41 q3, 43 q4) on different ABA criteria.
6. For information: NB 2025 also says "Opiate IM injections should not be given in burns > 10% TBSA due to peripheral shutdown". The removed burns-41 q4 sentence was supported there, just not by the cited Anderson. The new sentence is also true, so no change is needed.

## Summary

Five SAMPs, 20 questions. All five pass. All five fixes asked for in round 2 and by the coordinator were applied correctly: burns-42 q1 now tests suturing a line through burned skin (NB 2025, verbatim support), burns-42 q3 now tests the burn-specific hypothermia threshold with NB named in the update, the q4 update no longer names the q3 key, and the two burns-41 explanation sentences are now true. Both new keys are unique in the bank. The writer's KF4 tag for q1 is judged honest. Positions and key feature coverage meet the rules. The batch can go forward for landing checks.
