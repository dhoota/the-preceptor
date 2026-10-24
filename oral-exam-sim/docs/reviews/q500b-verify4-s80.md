# Q500B verify review 4: s80, airway (revision 4)

This is a fresh independent review of `src/samps/s80/airway.ts` (airway-48 to airway-52) after revision 4. I did not write or review this batch before. I read the whole final batch against docs/Q500B_BRIEF.md, docs/SAMP_REVIEW_BRIEF.md, docs/SAMP_SPEC.md (option order), docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I also read the first review, verify 1 to verify 3 and the writer's report with its Revision 1 to 4 sections. I did not edit the batch.

## Test runs

- `SAMP_BATCH=s80 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 passed. The bank-wide near duplicate stem test took 5.0 s.
- House style, checked by script: no em or en dashes, and semicolons appear only in code. No personal names, no mnemonics. Canadian spellings (colour, tumour, calibre, centre, paediatric). Options are alphabetical, with "No sedative" last as SAMP_SPEC requires. Author "Preceptor", `reviewed: false`, `version: 1`.

## Sources

- CAFG 2021 Part 1, PMC8212585: reopened this session (Europe PMC full text XML by curl), because revision 4 changed 49 q2, which cites it. Confirmed: a stylet for HA-VL "should generally be shaped to match the angulation or curvature of the blade ... typically at angles between 60 and 90°". Also confirmed "Partially withdraw the HA-VL blade" (so "Insert the blade further" is the opposite of guidance and stays wrong) and "Withdraw the stylet by 4 cm once the tip of the tracheal tube has been passed through the glottis" (stylet withdrawal is for after the tip is through, so "Remove the stylet from the tube" is not a correct answer to a tube passing behind the glottis).
- Not reopened this session: CAFG 2021 Part 2, DAS 2015, Root 2020 SALAD, DAS ATI 2020, Bair 2005. Their text is unchanged since verify 3, which opened every one of them and confirmed each point. This was a choice to save WebFetch quota, not a failure to open. WebFetch was not used.

## Earlier fails: resolution

| Earlier fail | Resolved? |
|---|---|
| First review, 15 fails | Yes. Hyperkalemia item gone, 49 q1 is the SGA predictor menu, 50 q1 occiput wording fixed, 51 keys short, 52 rebuilt, updates use the given wording. |
| Verify 1, 48 q4 update cue and 52 q3 options and explanation | Yes. |
| Verify 2, 51 q3 update naming nasendoscopy and CT | Yes. |
| Verify 3, 49 q2 tube direction reversed | Yes. The update now says the tube "keeps passing below the glottis toward the arytenoids". The explanation's first sentence says a gently bent tube travels "below and behind the glottis, toward the arytenoids, instead of curving up through the cords". This is the correct orientation for an undercurved tube with a hyperangulated blade. External laryngeal pressure, which became defensible once the direction was corrected, is removed. The new distractor "Change to a smaller tube" is clearly wrong, and the explanation says why. `correct: 3` is unchanged, so key position balance holds. The optional CAFG sentence was not added, which is acceptable. |

## airway-48: PASS

- q1: PASS. q2: PASS. q3: PASS. q4: PASS. No update reveals an earlier key.

## airway-49: PASS

- q1: PASS.
- q2: PASS. Mechanism now correct and supported by CAFG Part 1. No distractor is also correct. The key is the longest option, but "to match the blade" is essential, so no removable length cue.
- q3: PASS. The q3 update ("The tube still cannot be passed") does not reveal the q2 key.
- q4: PASS.

## airway-50: PASS

- q1 to q4: PASS.

## airway-51: PASS

- q1 to q4: PASS.

## airway-52: PASS

- q1 to q4: PASS. Numbers recheck: BMI 44 at 118 kg is a height of about 1.64 m, over the BMI 35 threshold.

## Numbers recomputed

49: levetiracetam 60 mg/kg x 128 kg = 7680 mg, capped at 4500 mg. Lorazepam 4 mg IV and midazolam 10 mg IM correct. Neck 49 cm is over 44 cm. 50: 40 mL/kg x 14 kg = 560 mL. BPs 72, 62 and 64 systolic are below 76 mmHg (70 + 2 x age). End-tidal 14 against PaCO2 48 is a 34 mmHg gap.

## Bank-wide repeat search

Grepped `src/samps` (all batches, including other Q500B batches s75 to s88) and `src/cases` for stylet, hyperangulated, esophageal detector, colorimetric, SALAD, suction assisted, counterclockwise, anticlockwise. Stylet hits elsewhere (s02, s21 croup tube size, batch06 croup prep) test different decisions. The SALAD hits in batch01 cases are preparation lines already judged by earlier reviews. No new repeat.

## Notes for the physician (not fails)

- 49 q2: CAFG also offers partly withdrawing the HA-VL blade for tube delivery trouble. It is not an option, so the key stands.
- 50 q1: the head position wording for a 3-year-old (neutral or slightly extended, ear canal level with the front of the shoulder) is reasonable.
- 50 q2: paediatric videolaryngoscope availability at a rural site is assumed.
- 51: the airway being secured is implied by the q2 update, q3 prompt and q4 update. Unavoidable.
- 51 q3: some anesthesiologists still use inhalational induction for obstruction. With a 4 mm bleeding glottic slit and a normal trachea, awake tracheostomy is the single best answer.
- 51 q4: DAS ATI says "avoid or minimise", so a very small dose is arguable. All sedating options are full doses.
- 48 q4 against airway-46 q2: suction down the tube in two settings, judged a different key decision.
- Key feature balance: KF2 and KF5 have one question each in this batch.

## Summary

Five SAMPs, 20 questions, all pass. Every fail from the first review and verify 1 to verify 3 is resolved, including the 49 q2 tube direction. The batch tests pass.

Overall: PASS
