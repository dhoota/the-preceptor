# Q500B verification review 3: s76, Eye (eye-39 to eye-43), revision 3

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before, and I made no edits to it (REVIEW-RULES rule 1). File reviewed in full: `src/samps/s76/eye.ts`. Context read: `docs/reviews/q500b-qa-s76.md`, `docs/reviews/q500b-verify-s76.md`, `docs/reviews/q500b-verify2-s76.md` and `docs/reviews/q500b-writer-s76.md` (Revisions 1 to 3).

## Tests

`SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass. House style checked by script: no em or en dashes, no semicolons in prose. Canadian spelling (centre, litre, neighbours, immunization), no mnemonics, no personal names.

## Status of earlier fails

- First review: 15 of 15 remain resolved.
- Verification review 1: 5 of 5 remain resolved.
- Verification review 2: eye-43 q1 resolved. The sentence now reads "Ultraviolet keratitis starts 6 to 12 hours after sun or welding exposure, and she has had neither." That is true and fits a patient seen 30 minutes after the crash.
- Verification review 2 physician note 1 (eye-43 q3 distractors already in the stem): acted on. "Seasonal allergies on cetirizine" and "Up to date tetanus immunization" are new facts that do not support admission. The explanation matches. The key stays first and is not the longest option. No other item in src/samps keys von Willebrand disease as an admission criterion for hyphema.
- Verification review 2 physician note 2 (eye-43 q4 surface findings): acted on, but the wording brings back a mock-mode cue (see eye-43 q4).

## eye-39 Wrestler with a watery eye

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Note only: the distractor "Daily fluticasone nasal spray" says "daily", which the stem does not ("uses a fluticasone nasal spray"). It is a wrong option and the detail changes nothing. A physician may align the wording. |
| q2 | PASS | |
| q3 | PASS | Valacyclovir 500 mg PO three times daily matches Azari Table 2. |
| q4 | PASS | Flag only (inherent): the lead-in says a steroid is right only in a later finding. |

## eye-40 Red eyes after a trip abroad

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | Note only: "She takes ASA 81 mg daily since a transient ischemic attack" reads better as "has taken". Not a defect. |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | |
| q4 | PASS | Physician note kept: enterovirus PCR is an outbreak-linkage test rarely sent from a Canadian ED. |

## eye-41 Blurred vision after a faded rash

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | Serology confirming q1 is inherent (flag only). |
| q4 | PASS | Aqueous penicillin G 3 to 4 million units IV every 4 hours for 10 to 14 days, HIV test, prompt ophthalmology, no CSF needed first with isolated eye findings and a normal neurologic examination: all as CDC 2021. Physician note kept: no Canadian ocular syphilis regimen exists. |

## eye-42 Older woman who fell in the night

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | |
| q4 | PASS | Physician note kept: KF3 tag is loose for a prognosis question. |

## eye-43 Burning eyes after a collision

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Ultraviolet sentence fixed. |
| q2 | PASS | |
| q3 | PASS | New distractors are sound and the explanation matches. |
| q4 | FAIL (low, B6 mock-mode cue) | The new update "After irrigation the corneas show only punctate staining." tells the candidate, in mock mode, that the eyes were irrigated, which implies the q1 key (a chemical exposure, sodium hydroxide from the airbag) and removes the abrasion, glass, thermal and ultraviolet distractors. Verification review 1 failed the same cue in the old q2 update ("Both eyes are irrigated until the pH is 7.4"). The fact the disposition needs is the surface finding, not the irrigation. Fix: change the update to "She understands the plan. The corneas show only punctate staining. The intraocular pressure is 16 mmHg in the right eye." Leave the options and explanation as they are. |

## Physician-judgement notes (not fails)

1. eye-40 q4: enterovirus PCR is a public health test, not routine ED practice. Sourced (Lay 2026).
2. eye-41 q4: keys rest on CDC 2021 because PHAC refers neurosyphilis treatment to a specialist.
3. eye-42 q4: KF3 tag is loose for a prognosis question.
4. Key feature 4 has only 2 questions (eye-39 q3, q4), accepted in verification review 1 because every unkeyed steroid angle is already in the bank.
5. eye-39 q1 "Daily" and eye-40 stem "takes ... since" wording, as noted above.

## Sources

No source text changed in revision 3 except the ultraviolet sentence (standard teaching, matching signed s37 eye content) and the q3 distractors (no source claim). I did not re-open any URL this round, to save the WebFetch quota. Not opened by me: belongia-gladiatorum, rveeh-hsv, azari-conjunctivitis, lay-ahc, phac-syphilis-clinical, cdc-sti-2021, open-globe (Zhou 2022), barnes-airbag-alkali, eyewiki-hyphema. Each was opened by an earlier review (eyewiki-hyphema in verification review 2, the others in the first review or verification review 1), and the text citing them is unchanged since.

## Summary

Earlier fails: 15 of 15, 5 of 5 and 1 of 1 resolved. New fails: 1, a mock-mode cue introduced by revision 3 (eye-43 q4 "After irrigation"). No wrong keys, doses or numbers. No near-duplicates found for the revised items. No reviewer edits made.

Failed items: eye-43 q4.

Overall: FAIL (1 item)
