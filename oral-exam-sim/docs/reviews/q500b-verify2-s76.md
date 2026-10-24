# Q500B verification review 2: s76, Eye (eye-39 to eye-43), revision 2

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before, and I made no edits to it (REVIEW-RULES rule 1). File reviewed in full: `src/samps/s76/eye.ts`. Context read: `docs/reviews/q500b-qa-s76.md`, `docs/reviews/q500b-verify-s76.md` and `docs/reviews/q500b-writer-s76.md` (Revision 1 and Revision 2 sections).

## Tests

`SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass (bank-wide near-duplicate stem test 6.2 s). House style: no em or en dashes, no semicolons in prose, Canadian spelling (centre, litre, neighbours), no mnemonics, no personal names.

## Sources verified (this review)

| Id | Result |
|---|---|
| eyewiki-hyphema | Opened. Grade 0 microhyphema (red cells, no layering), grade I under one third, grade II one third to one half, grade III one half to less than total, grade IV total. Coles: 13.5% of grades I to II, 27% of grade III, 52% of grade IV had an IOP rise. Admission considered for noncompliance, bleeding diathesis, severe ocular or orbital injury, sickle cell with raised IOP. Rebleed usually within the first 5 days. Supports the rebuilt eye-43 q2 (including the 27% figure not checked before), q3 and q4. |
| lay-ahc, open-globe, barnes-airbag-alkali, cdc-sti-2021, phac-syphilis-clinical, azari-conjunctivitis | Not re-opened (WebFetch near its weekly limit). The claims citing them are unchanged since verification review 1 opened and verified them, apart from the eye-42 q4 explanation sentence "A wound close to the front of the eye predicts a better result", which matches the Zhou quote recorded in verification review 1 ("anterior injury location" among predictors of good acuity). |
| rveeh-hsv, belongia-gladiatorum | Not re-opened in this review or the last one. Their claims (eye-39 q1, q2, q4) are unchanged from the text the first review verified. |

## Status of earlier fails

First review: all 15 fails remain resolved (eye-39 q5 removed, eye-40 q3 and q4 replaced, eye-42 stem changed, eye-42 q4 replaced, eye-43 rebuilt, IOP 16 mmHg, wording fixes as asked).

Verification review 1, all 5 resolved:
- eye-40 q3: stem now says "She has had no nosebleeds, bleeding gums or easy bruising.", so "no other bleeding" traces to the stem.
- eye-40 q4: prompt is now "Which of the following tests would best identify the cause of her eye findings?" No cue to q1 or q2.
- eye-42 q4: the surgical distractor is now "Systolic blood pressure of 168 mmHg", matching the vitals (168/90), with its own reason in the explanation.
- eye-43 q2: rebuilt as a layered quarter-chamber hyphema keyed Grade 1. The irrigation sentence is gone. No longer the eye-25 q1 microhyphema definition. No other item in src/samps or src/cases keys a hyphema grade.
- eye-43 q4: update is now "She understands the plan. The intraocular pressure is 16 mmHg in the right eye." The explanation's "no bleeding disorder" traces to the stem ("has no other conditions").

## eye-39 Wrestler with a watery eye

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | |
| q4 | PASS | Flag only (inherent): lead-in says a steroid is right only in a later finding. |

## eye-40 Red eyes after a trip abroad

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | |
| q4 | PASS | |

## eye-41 Blurred vision after a faded rash

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | Serology confirming q1 is inherent (flag only). |
| q4 | PASS | |

## eye-42 Older woman who fell in the night

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | Update gives the q1 key (acuity), inherent. |
| q3 | PASS | |
| q4 | PASS | No surgical cue left. |

## eye-43 Burning eyes after a collision

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | FAIL (low, inaccurate distractor reason) | Key verified (Barnes). The sentence "Ultraviolet keratitis follows hours of sun or welding exposure." is wrong for welding: a brief arc exposure is enough, and the defining feature is the 6 to 12 hour delay before symptoms (as signed s37 eye teaches). Fix: replace with "Ultraviolet keratitis starts 6 to 12 hours after sun or welding exposure, and she has had neither." |
| q2 | PASS | Grade 1 key and all grade definitions and percentages verified in EyeWiki. |
| q3 | PASS | |
| q4 | PASS | |

## Physician-judgement notes (not fails)

1. eye-43 q3: two distractors ("Treated hypothyroidism", "Myopia requiring glasses") are facts already in the stem, not "additional findings". They are clearly wrong, so the key is unaffected, but a physician may prefer new facts in their place.
2. eye-43 q4: the right eye also had an alkali exposure. The disposition rests on the hyphema alone, and the batch never states the post-irrigation surface findings in the right eye beyond q3's punctate staining distractor. A physician may want the q4 update to say the corneas show only punctate staining after irrigation, so that the chemical injury does not argue for transfer.
3. eye-40 q4: enterovirus PCR of a conjunctival swab is a public health and outbreak-linkage test rarely sent from a Canadian ED. The key is sourced (Lay 2026). Physician to confirm it is a fair KF1 decision.
4. eye-41 q4: no Canadian ocular syphilis regimen exists (PHAC refers neurosyphilis to ID), so the keys rest on CDC 2021.
5. eye-42 q4: KF3 tag is loose for a prognosis question.
6. Key feature 4 has only 2 questions (eye-39 q3, q4), as accepted in verification review 1.

## Could not verify

Not re-opened this round (WebFetch limit): lay-ahc, open-globe (Zhou 2022), barnes-airbag-alkali, cdc-sti-2021, phac-syphilis-clinical, azari-conjunctivitis, rveeh-hsv, belongia-gladiatorum. All were opened by an earlier review and the text citing them is unchanged since.

## Summary

Earlier fails: 15 of 15 (first review) and 5 of 5 (verification review 1) resolved. New fails: 1 (eye-43 q1 ultraviolet keratitis reason). No wrong keys, doses or numbers. No mock-mode cues left beyond the inherent ones flagged. No reviewer edits made.

Failed items: eye-43 q1.

Overall: FAIL (1 item)
