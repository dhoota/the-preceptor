# Q500B verification review 4: s76, Eye (eye-39 to eye-43), revision 4

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before, and I made no edits to it (REVIEW-RULES rule 1). File reviewed in full: `src/samps/s76/eye.ts`, all 5 SAMPs and all 20 questions. Context read: `docs/reviews/q500b-qa-s76.md`, `q500b-verify-s76.md`, `q500b-verify2-s76.md`, `q500b-verify3-s76.md` and `q500b-writer-s76.md` (Revisions 1 to 4), plus REVIEW-RULES, SCORING-RULINGS, SAMP_REVIEW_BRIEF and the Q500B brief.

## Tests

`SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass, including the bank-wide near-duplicate stem test. House style checked by script and by reading: no em or en dashes, no semicolons in prose, Canadian spelling (centre, litre, neighbours, immunization), no mnemonics, no personal names.

## Status of earlier fails

- First review (15 items): all 15 remain resolved. Checked line by line against the current file (eye-39 q2, q3, q5 replaced, eye-40 q1, q3, q4 replaced, eye-41 q1, q3, q4, eye-42 stem and q4, eye-43 q1 to q4).
- Verification review 1 (5 items): all 5 remain resolved (eye-40 "no other bleeding" now in the stem, eye-40 q4 neutral lead-in, eye-42 q4 blood pressure distractor, eye-43 q2 grade 1 layered hyphema without irrigation, eye-43 q4 bleeding disorder sentence removed).
- Verification review 2 (1 item): eye-43 q1 ultraviolet sentence remains correct.
- Verification review 3 (1 item): eye-43 q4 resolved. The update is now exactly "She understands the plan. The corneas show only punctate staining. The intraocular pressure is 16 mmHg in the right eye." It no longer mentions irrigation.
- Verification review 3 notes acted on: eye-39 q1 distractor is now "Use of a fluticasone nasal spray", which matches the stem. The key is not the single longest (it ties). eye-40 stem now reads "She has taken ASA 81 mg daily". Both changes are sound.

## eye-39 Wrestler with a watery eye

| Q | Verdict | Finding and exact fix |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Revised distractor is sound and alphabetical order holds. |
| q2 | PASS | |
| q3 | PASS | Valacyclovir 500 mg PO three times daily (Azari Table 2). No distractor defensible. |
| q4 | FAIL (low, B6 mock-mode cue) | The lead-in "would make a topical corticosteroid appropriate, with antiviral cover, under ophthalmology care" tells a mock-mode candidate that the eye disease is viral and that an antiviral is part of its care. In q3 only one option is an antiviral (valacyclovir), so the phrase gives away the q3 key. Earlier reviews flagged only the steroid premise as inherent. The antiviral phrase is not needed for the question to work. Fix: change the q4 prompt to "Which of the following later findings would make a topical corticosteroid appropriate under ophthalmology care?" Leave the options, key and explanation as they are (the explanation already teaches steroid plus antiviral prophylaxis). The remaining steroid premise stays a flag only (inherent). |

## eye-40 Red eyes after a trip abroad

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | Tense fix accepted. |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | "None" key defensible. Every claim in the explanation traces to the stem. |
| q4 | PASS | Flag only (inherent): the enterovirus and coxsackievirus options point to the q2 key for a candidate who knows the agent. |

## eye-41 Blurred vision after a faded rash

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | Flag only (inherent): the serology confirms the q1 key. |
| q4 | PASS | Aqueous penicillin G 3 to 4 million units IV every 4 hours for 10 to 14 days, HIV testing, prompt ophthalmology, and no CSF needed before treatment with isolated eye findings and a normal neurologic examination all match CDC 2021. The doxycycline and benzathine reasons are correct. |

## eye-42 Older woman who fell in the night

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Flag only (inherent): the q2 update reports the acuity, which shows that acuity was the q1 step. q2 needs the hand motion vision to separate occult rupture from an isolated hyphema, so per B6 it stays and is flagged. |
| q2 | PASS | A deeper anterior chamber, hyphema, 360 degree bullous hemorrhage and hand motion vision fit a posterior occult rupture. |
| q3 | PASS | CT sensitivity of about 50 to 80% is consistent with Zhou. |
| q4 | PASS | Zone I (limbal) wounds predict a better result, and an afferent defect a poor one. Flag only (inherent): "Rupture close to the limbus" presumes the q2 key. |

## eye-43 Burning eyes after a collision

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Sodium hydroxide in airbag powder (Barnes). |
| q2 | PASS | Grade 1 is less than one third. IOP rise figures of 13.5%, 27% and 52% match EyeWiki. |
| q3 | PASS | |
| q4 | PASS | Revised update carries no cue. "Punctate staining" does not imply the q1 key. Next day ophthalmology review fits EyeWiki outpatient criteria. |

## Physician-judgement notes (not fails)

1. eye-40 q4: enterovirus PCR is a public health linkage test, rarely sent from a Canadian ED (Lay 2026).
2. eye-41 q4: the regimen rests on CDC 2021 because PHAC refers neurosyphilis treatment to a specialist.
3. eye-42 q4: the KF3 tag (full examination) is loose for a prognosis question.
4. Key feature 4 has only 2 questions (eye-39 q3 and q4).
5. eye-43 q3: the stem says she "has no other conditions", and the options "Known von Willebrand disease" and "Seasonal allergies on cetirizine" are framed as hypothetical "additional findings". A physician may prefer the stem to drop "and has no other conditions" so the hypothetical reads cleanly. Not a defect, because the lead-in states the findings are additional.
6. eye-43 q4: the chemical injury is mild (punctate staining only), so next day review covers both the hyphema and the alkali exposure. A physician may want the explanation to say the same review checks the corneas.

## Overlap

Grepped src/samps and src/cases (all Q500B batches included) for herpes gladiatorum, acute hemorrhagic conjunctivitis, ocular syphilis, airbag, scleral rupture, hyphema grading and stromal keratitis. No new overlap. The only "stromal keratitis" elsewhere is signed eye-03 q3 (steroid complications), a different decision. The airbag hits in other files are not eye injuries.

## Sources

No source-dependent text changed in revision 4. I did not open any URL this round, to save the WebFetch quota. Not opened by me: belongia-gladiatorum (no URL), rveeh-hsv, azari-conjunctivitis, lay-ahc, phac-syphilis-clinical, cdc-sti-2021, open-globe (Zhou 2022), barnes-airbag-alkali, eyewiki-hyphema. Each was opened and verified by an earlier review, and the text that cites them is unchanged since.

## Summary

Earlier fails: 15 of 15, 5 of 5, 1 of 1 and 1 of 1 resolved. New fails: 1, a mock-mode cue that earlier reviews missed (eye-39 q4 "with antiviral cover" gives away the q3 key). No wrong keys, doses or numbers. No near-duplicates. No reviewer edits made.

Failed items: eye-39 q4.

Overall: FAIL (1 item)
