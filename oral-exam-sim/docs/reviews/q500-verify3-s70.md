# Q500 verify report, round 3: s70, Anaphylaxis

A fresh independent reviewer, who had not written, edited or reviewed this batch before, reviewed the round 3 revision of `src/samps/s70/anaphylaxis.ts`. The inputs were the previous verdict `docs/reviews/q500-verify2-s70.md` and the "Round 3" section of `docs/reviews/q500-writer-s70-r2.md`. The changes were read with `git diff f8246d0 -- oral-exam-sim/src/samps/s70`. anaphylaxis-49 and anaphylaxis-51 were reviewed in full. Nothing was edited in this round (REVIEW-RULES rule 1). All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Tests: `SAMP_BATCH=s70 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed 128 of 128. The type check shows no s70 errors.

## Result

| Id | Verdict | q1 | q2 | q3 | q4 |
|---|---|---|---|---|---|
| anaphylaxis-48 | PASS (unchanged) | PASS | PASS | PASS | PASS |
| anaphylaxis-49 | PASS | PASS | PASS | PASS | PASS |
| anaphylaxis-50 | PASS (unchanged) | PASS | PASS | PASS (menu) | PASS |
| anaphylaxis-51 | PASS | PASS | PASS | PASS (menu) | PASS |
| anaphylaxis-52 | PASS (unchanged) | PASS | PASS | PASS | PASS |

All five SAMPs pass. No required fixes.

## Previous required fixes: were they applied?

| Previous fix | Applied | Verdict |
|---|---|---|
| anaphylaxis-49 q3: cite TREKK, not Carlisle, and rebuild the sentence on its text | Yes. Source `trekk-anaphylaxis` added ("TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations: anaphylaxis. Version 2.2. 2025.", resource page URL). q3 cites it. The SAMP lists 4 sources, all cited (Carlisle stays on q2). The explanation now says "Canadian pediatric emergency guidance calls for oxygen at 10 to 15 L/minute by mask in any child with signs of shock or respiratory distress, whatever the saturation". Key, options and position unchanged. | PASS |
| anaphylaxis-51 q4: delete "The infusion now runs well through a new IV." | Yes. The update now begins "Twenty minutes later". | PASS |

## Sources opened this round

- TREKK resource page https://trekk.ca/resources/bottom-line-recommendations-anaphylaxis/ returns 200 and shows "Last Updated Jul 2025". The linked English PDF (https://cms.trekk.ca/wp-content/uploads/2025/07/2026_09_03-Anaphylaxis-BLR-v2.3.pdf) was downloaded and read. Footer: "© JULY 2025, TREKK; FOR REVISION 2027. VERSION 2.2". Under Immediate interventions: "Provide O2 (10-15 L) by non-rebreather mask if signs of shock or respiratory distress." The indication carries no saturation condition, so "whatever the saturation" is a fair reading. The citation (body, work, version, year) is accurate.

## Full review of anaphylaxis-49

- **q1.** Unchanged. Hives within 10 minutes separate IgE anaphylaxis from FPIES. PASS.
- **q2.** Unchanged. Pulse 184, BP 64/38 mmHg, refill 4 seconds, mottled skin. Carlisle supports early tachycardia and late hypotension. PASS.
- **q3.** The 9 kg infant is in shock (mottled, refill 4 seconds, BP 64/38 mmHg in the stem), which is TREKK's indication for 10 to 15 L of oxygen. The key "Face mask oxygen at 10 L/minute" is the only option that gives high-flow oxygen by mask. Blow-by and nasal prongs at 1 L give low and variable oxygen, bag-valve-mask ventilation is not needed at 40 breaths a minute with a clear chest, and "No oxygen while saturation is normal" is what TREKK's indication rules out. One defensible key, with a current Canadian pediatric source. Each distractor reason is true. KF3 (treat fast with epinephrine, airway, IV access and fluids) is a fair tag for first oxygen in anaphylactic shock.
- **q4.** Unchanged. Canadian Immunization Guide MMR and egg allergy advice correct. PASS.

## Full review of anaphylaxis-51

- **q1.** "Using the Resuscitation Council UK 2021 refractory anaphylaxis algorithm" opens the update. IM epinephrine every 5 minutes until the infusion starts, last dose 10 minutes ago (second dose 5 minutes after arrival, assessed 10 minutes later). 0.5 mg IM correct for 64 kg. PASS.
- **q2.** Dedicated line, pump, arm without the BP cuff, matching RCUK. PASS.
- **q3 (menu).** Restart in another vein and infiltrate phentolamine, matching the LHSC protocol. Passed last round and unchanged. PASS.
- **q4.** The update now reads "Twenty minutes later, after two increases in the rate, her BP is 186/104 mmHg ...". It no longer states the q3 key. "After two increases in the rate" still shows the infusion kept running, which hints that epinephrine was not held. q4 cannot work without the infusion running, so under SCORING-RULINGS B6 it stays and is flagged, as the round 2 reviewer accepted. Reducing the rate is the one defensible key (RCUK: high BP likely means adrenaline overdose). PASS.
- **Sources.** `rcuk-refractory` (q1, q2, q4) and `lhsc-extravasation` (q3). Both listed and cited. Unchanged from round 2, where both PDFs were read.

## Judgement on the writer's flag

**anaphylaxis-49 q3 key wording, "Face mask" against TREKK's "non-rebreather". Acceptable, no change required.** TREKK names a non-rebreather mask at 10 to 15 L. The key's flow (10 L/minute) is inside that range, and no option names a non-rebreather, so no distractor sits closer to TREKK than the key. The key is still the single best answer, and a candidate who knows TREKK picks it. The explanation says "by mask", a fair shortening that adds no false claim. Renaming the option "Non-rebreather mask at 10 L/minute" would match TREKK word for word. It is optional. If the writer does it in a later pass, alphabetical order puts the key fourth and the batch spread stays within 25 percent, but that would need a fresh review of the question.

## Unrequested writer changes (REVIEW-RULES rule 4)

- **anaphylaxis-49 q3 update:** added "His skin is still mottled with a capillary refill of 4 seconds". Judged on its merits: acceptable. It shows that signs of shock persist after the IM dose, which is exactly TREKK's indication, so the key rests on a stated fact and not on an assumption. It repeats stem findings already named in the q2 prompt and does not name the q2 key ("Hypoperfusion from anaphylaxis"), so it adds no mock-mode cue.
- **anaphylaxis-49 q3 explanation:** the opening sentence cites "a pressure of 64/38 mmHg", which is the arrival BP. No BP after the IM dose is given. The claim traces to the stem and is not false, so it is not a failure. A later pass could write "on arrival" after the pressure.
- No other s70 text changed. anaphylaxis-48, -50 and -52 are byte for byte the text that passed in round 2, and anaphylaxis-51 differs only in the deleted sentence.

## Uniqueness

No new keys this round. The 49 q3 key and options are unchanged. Rechecked the anaphylaxis catalogue: high-flow or supplemental oxygen appears only as one item in write-in lists (anaphylaxis-01 q2, anaphylaxis-08 q3, the piperacillin-tazobactam SAMP q2), and anaphylaxis-10 q2 (s03) has "Oxygen to keep SpO2 at or above 92%" for a wheezing child, which is a different situation (bronchospasm, not shock). No item keys oxygen for a shocked infant with a normal saturation or the choice of infant device.

## Whole batch checks

- Single key positions across 18 singles (first to fifth): 4, 4, 3, 3, 4. Highest 22%. Every position used. Two menu questions (50 q3, 51 q3).
- Key feature coverage unchanged: KF1 6, KF2 4, KF3 6, KF4 4. Every key feature covered and the tags are honest.
- House style in all changed strings: no semicolons, no em or en dashes, no absolute words. Canadian spelling.

## Physician-level items (not grounds for failure)

1. anaphylaxis-49 q3: the key says "Face mask", TREKK says non-rebreather mask. The physician may prefer the option to match TREKK.
2. anaphylaxis-49 q3: RCUK 2021 titrates oxygen to SpO2 94 to 98% after a high-flow start, and anaphylaxis-10 q2 accepts "Oxygen to keep SpO2 at or above 92%" for a wheezing child. Under TREKK the key holds as the first step in shock. Confirm a 97% reading in a shocked infant does not make "No oxygen" defensible.
3. anaphylaxis-51 q4: "after two increases in the rate" implies the infusion was not held, a residual mock-mode hint toward the q3 key that q4 needs (B6).
4. Carried over from round 2: anaphylaxis-51 q3 rests on one Canadian hospital protocol (LHSC 2019), anaphylaxis-48 q4 shares the "5 hours later, no new exposure" frame with signed anaphylaxis-08 q2, and anaphylaxis-48 q1 shares the "uncover the skin in unexplained shock" teaching with the ladder-fall-ankle-sedation oral case.

## Summary

Five SAMPs, 20 questions. All five pass. Both round 2 fixes were applied: anaphylaxis-49 q3 now cites TREKK v2.2 (2025), whose text supports oxygen at 10 to 15 L in any child with signs of shock, and the 51 q4 update no longer states the q3 key. The writer's unrequested addition to the 49 q3 update is judged acceptable because it states TREKK's indication without cueing q2. The "face mask" against "non-rebreather" flag is acceptable, since the key is still the one best answer and its flow sits inside TREKK's range. The batch can go forward for landing checks.
