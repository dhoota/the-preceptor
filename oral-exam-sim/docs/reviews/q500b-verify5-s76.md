# Q500B verification review 5: s76, Eye (eye-39 to eye-43), revision 5

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before, and I made no edits to it (REVIEW-RULES rule 1). File reviewed in full: `src/samps/s76/eye.ts`, all 5 SAMPs and all 20 questions, not only the revision 5 changes. Context read: `docs/reviews/q500b-qa-s76.md`, `q500b-verify-s76.md`, `q500b-verify2-s76.md`, `q500b-verify3-s76.md`, `q500b-verify4-s76.md` and `q500b-writer-s76.md` (Revisions 1 to 5), plus REVIEW-RULES, SCORING-RULINGS, SAMP_REVIEW_BRIEF and the Q500B brief.

## Tests

`SAMP_BATCH=s76 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 128 of 128 pass, including the bank-wide near-duplicate stem test (4.5 s). House style checked by script and by reading: no em or en dashes, no semicolons in prose, Canadian spelling (centre, litre, neighbours, immunization), no mnemonics, no personal names. Single-answer options are in alphabetical order. The key is the single longest option in 2 of the 16 single questions checked by script (eye-39 q2, eye-43 q4), well under the limit.

## Status of earlier fails

- First review (15 items): all resolved. Checked against the current file: eye-39 q2 (no floaters claim gone), q3 (update "The cornea is clear."), q5 removed. eye-40 q1 (watery discharge), q3 and q4 replaced. eye-41 q1, q3 and q4 wording as asked (doxycycline 28 days for late latent). eye-42 stem (bedside table at night), q4 replaced with prognosis. eye-43 q1 recognition, q2 grade, IOP 16 mmHg, "drainage angle" gone.
- Verification review 1 (5 items): all resolved. eye-40 stem has "no nosebleeds, bleeding gums or easy bruising". eye-40 q4 lead-in is neutral. eye-42 q4 blood pressure distractor. eye-43 q2 grade 1 layered hyphema with no irrigation sentence. eye-43 q4 has no "no bleeding disorder" update.
- Verification review 2 (1 item): eye-43 q1 ultraviolet sentence correct.
- Verification review 3 (1 item): eye-43 q4 update no longer says "After irrigation".
- Verification review 4 (1 item): eye-39 q4 prompt is now "Which of the following later findings would make a topical corticosteroid appropriate under ophthalmology care?" "With antiviral cover" is gone. Resolved.

## Revision 5 unrequested and consequential changes (REVIEW-RULES rule 4)

- eye-43 stem: "and has no other conditions" removed, now "She has hypothyroidism treated with levothyroxine." This acts on verification review 4 note 5. Sound. The q3 "additional findings" now read cleanly, and no explanation still relies on the removed phrase.
- eye-43 q4 explanation: "and no bleeding disorder" removed, "She meets none of the criteria" now "Nothing in her history meets the criteria for admission", and "The next day review also rechecks both corneas after the alkali exposure." added (verification review 4 note 6). All three are true, trace to the stem and updates, and keep the explanation consistent with the stem change. Accepted.

## eye-39 Wrestler with a watery eye

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Belongia figures (a third infected, mostly head lesions, some conjunctivitis or blepharitis) as verified in the first review. |
| q2 | PASS | RVEEH re-opened this round: corneal sensation before local anaesthetic, dendrites with terminal bulbs. |
| q3 | PASS | Valacyclovir 500 mg PO three times daily (Azari Table 2). No distractor defensible. |
| q4 | PASS | RVEEH re-opened: epithelial disease (live virus) antiviral without steroid, stromal disease without an epithelial defect (little if any live virus) steroid with antiviral prophylaxis. Revised lead-in carries no antiviral cue. Flag only (inherent): the steroid premise, and the dendritic and geographic options point to herpes and to corneal staining. The question cannot work without them. |

## eye-40 Red eyes after a trip abroad

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | See physician note 1 on timing. |
| q2 | PASS | |
| q3 | PASS | "None" key defensible. Every claim in the explanation traces to the stem. |
| q4 | PASS | Flag only (inherent): the enterovirus and coxsackievirus options point to the q2 key for a candidate who knows the agent. |

## eye-41 Blurred vision after a faded rash

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | |
| q2 | PASS | |
| q3 | PASS | Flag only (inherent): serology in the update confirms q1, and "Further examination shows" a fundus finding implies q2. Both are needed. |
| q4 | PASS | Aqueous penicillin G 3 to 4 million units IV every 4 hours for 10 to 14 days, HIV testing, prompt ophthalmology, no CSF needed before treatment with isolated eye findings and a normal neurologic examination (CDC 2021). Benzathine and doxycycline reasons correct. |

## eye-42 Older woman who fell in the night

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | |
| q1 | PASS | Flag only (inherent): the q2 update reports acuity. |
| q2 | PASS | |
| q3 | PASS | CT sensitivity 50 to 80% (Zhou). See physician note 2 on "to confirm the rupture". |
| q4 | PASS | Flag only (inherent): "Rupture close to the limbus" presumes the q2 key. |

## eye-43 Burning eyes after a collision

| Q | Verdict | Finding |
|---|---|---|
| stem | PASS | Revision 5 change accepted. |
| q1 | PASS | Sodium hydroxide in airbag powder, irrigation at least 15 minutes and 1 litre until pH normal (Barnes). |
| q2 | PASS | EyeWiki re-opened: grade I under one third, II one third to one half, III over half, IV total, grade 0 microhyphema. Coles IOP rise 13.5%, 27%, 52%. |
| q3 | PASS | EyeWiki admission list (noncompliance, bleeding diathesis, severe ocular or orbital injury, sickle cell with raised IOP) and rebleed within 5 days confirmed. |
| q4 | PASS | Outpatient care with close follow-up confirmed in EyeWiki. Revised explanation accurate. |

## Physician-judgement notes (not fails)

1. eye-40 q1: the stem says she "returned 2 days ago" and the explanation says "a village she left 2 days ago". With a long flight home from rural Cambodia she probably left the village more than 2 days ago, so onset yesterday morning sits at or just past the 12 to 48 hour incubation ("Her onset fits that timing"). The key is unaffected (contact with fellow travellers also fits). A physician may prefer "She arrived home 2 days ago, after 4 weeks in a village in Cambodia" and "a village she left only days ago" in the explanation.
2. eye-42 q3: the distractor "Ocular ultrasound to confirm the rupture" names the q2 key in mock mode. I do not fail it, because the q3 key (surgical exploration) and q4 option "Rupture close to the limbus" reveal the same diagnosis and cannot be removed. A writer may still neutralise it to "Ocular ultrasound of the left eye" at no cost.
3. eye-40 q4: enterovirus PCR is a public health linkage test, rarely sent from a Canadian ED (Lay 2026).
4. eye-41 q4: the regimen rests on CDC 2021 because PHAC refers neurosyphilis treatment to a specialist.
5. eye-42 q4: the KF3 tag (full examination) is loose for a prognosis question.
6. Key feature 4 has only 2 questions (eye-39 q3 and q4).

## Overlap

Grepped src/samps and src/cases, all Q500B batches s72 to s88 included, for gladiatorum, hemorrhagic or haemorrhagic conjunctivitis, coxsackie, ocular or syphilitic uveitis, scleral or occult rupture, airbag, hyphema grade, stromal, afferent pupillary defect and von Willebrand. No new overlap. The coxsackie hit is pediatric fever (s46). Airbag and von Willebrand hits are trauma and bleeding items outside the eye. Stromal and afferent hits in s10 and s37 key different decisions, as earlier reviews found.

## Sources

Opened this round: eyewiki-hyphema (WebFetch, all eye-43 q2 to q4 claims confirmed) and rveeh-hsv (PDF via WebFetch, read with pdftotext, CPG18.0 v4.0 approved 20/08/2020, eye-39 q2 and q4 claims confirmed). Not opened by me this round, to save the WebFetch quota: belongia-gladiatorum (no URL), azari-conjunctivitis, lay-ahc, phac-syphilis-clinical, cdc-sti-2021, open-globe (Zhou 2022), barnes-airbag-alkali. Each was opened and verified by an earlier review, and the text that cites them is unchanged since.

## Summary

Earlier fails: 15 of 15, 5 of 5, 1 of 1, 1 of 1 and 1 of 1 resolved. New fails: none. Revision 5 unrequested changes judged sound. No wrong keys, doses or numbers. No near-duplicates. No removable mock-mode cue that changes what a candidate can infer. No reviewer edits made.

Overall: PASS
