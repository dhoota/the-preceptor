# Q500B verification review 2: s74, Lacerations (revision 2)

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before. Lenses A and B. I read the whole final batch, not only the changes. File: `src/samps/s74/lacerations.ts` (lacerations-39 to lacerations-43). Inputs: `docs/reviews/q500b-qa-s74.md`, `docs/reviews/q500b-verify-s74.md` and the writer report `docs/reviews/q500b-writer-s74.md` (Revision 1 and Revision 2 sections). I made no edits to the batch.

Tests: `SAMP_BATCH=s74 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed, 128 of 128, with no near duplicate stems. `npx tsc --noEmit -p .` shows no s74 errors.

Mechanical checks: 20 questions, 18 single and 2 menu (40 q2, 41 q2). Single key positions 0 to 4 are 3, 4, 4, 4, 3. Options are in alphabetical order, with "None" last in 41 q2. No em dashes, en dashes or semicolons in content. Canadian spelling (anaesthetic, orthopaedic, harbour). "Pediatric" matches bank usage. No personal names. `reviewed: false`, author "Preceptor", version 1.

## Earlier fails: resolution

| Source | Fail | Status |
|---|---|---|
| QA 1 | 39 duplicates the batch16 oral lip case, plus mock cues and typo | Resolved. The coordinator ruled that 39 keeps its scenario. The q2 and q3 updates are neutral now, and the "shows. Placing" typo is fixed. |
| QA 2 | 40 q3 update named q2 keys | Resolved |
| QA 3 | 40 q4 prompt implied discharge | Resolved |
| QA 4 | 41 q2 single with a "none" key | Resolved. It is now a menu, select 1, with "None" as the only key. |
| QA 5 | 41 q4 "CT shows" | Resolved ("Imaging shows") |
| QA 6 | 42 q1 dorsalis pedis nerve | Resolved ("anterior tibial vessels and the deep peroneal nerve") |
| QA 7 | 42 q4 update stated q2 key | Resolved |
| QA 8 | 43 q3 cefazolin claim, TMP-SMX order, duration, update cue | Resolved. The text now gives 160/800 mg, says "one deep wound needed 10 weeks", has a neutral update and attributes the reported failures to White and Jewer. |
| Verify 1 | 39 q1 key "Location of the missing tooth" | Resolved. It now reads "Location of the tooth fragment" and is still at index 0. It is not the longest option. |
| Verify 2 | 42 q4 cast distractor reason | Resolved. The text now matches the requested sentence exactly. |

## Batch16 check (coordinator ruling)

`src/cases/batch16` no longer has a lip laceration case. It now holds `aphasia-after-ed-cardioversion`, `ems-patch-blocked-tracheostomy-child`, `forearm-laceration-hemophilia-emicizumab` and `wildfire-evacuees-host-hospital`. A grep for "vermilion" and "lip lacer" across `src/cases` finds nothing. The forearm case ("A cut at the hardware store") does not overlap any s74 scenario. The overlap with lacerations-39 is gone.

## Verdict by SAMP and question

### lacerations-39 (Skateboard fall onto the mouth): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS, flagged | The key matches the stem. The B6 note from verify 1 stands: q2 needs the no-choking fact. |
| q2 | PASS | IADT 2020: radiographs of the lip to search for fragments. The distractor reasons are true. |
| q3 | PASS | I rechecked the CIG table by WebFetch (updated June 2026). With at least 3 doses, a last booster less than 5 years ago and a wound that is not clean and minor, he needs no vaccine and no TIg. The explanation's 5 year booster threshold for other wounds is correct. |
| q4 | PASS | Forsch 2017: the first skin suture goes at the vermilion border. |

### lacerations-40 (Toddler who fell in the hallway): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS, flagged | The B6 note stands (the q2 update implies an intraoral object). |
| q2 | PASS | The keys match the SGEM 429 indications. |
| q3 | PASS | I rechecked Hennelly 2010 by WebFetch: 0 strokes, infection in 1 of 116 (0.9%), CTA positive in 9 of 90 (10%), and no operative care or anticoagulation. |
| q4 | PASS | "About 1%" matches. The prompt is neutral. |

### lacerations-41 (Toddler and a large farm dog): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Supported by Steen 2015. |
| q2 | PASS, flagged | The format is correct. The B6 note on q4 stands. An open anterior fontanelle at 14 months is plausible. |
| q3 | PASS | Steen 2015: head CT for every child bitten on the head. |
| q4 | PASS | The key is supported by Steen and Tahir. |

### lacerations-42 (Cut during a hockey game): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | The anatomy is correct. |
| q2 | PASS | EHL and EDL compensation (Christman 2015). The distractor anatomy is correct. |
| q3 | PASS | Deep peroneal nerve to the first web space, tibial branches to the plantar surfaces, sural nerve to the lateral foot. |
| q4 | PASS | The revised sentence now matches the delayed repair option. |

### lacerations-43 (Painful finger in a coastal community): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Supported by White and Jewer 2009. |
| q2 | PASS, with note | I rechecked Clark 2003 by WebFetch: pain on passive extension is "the most clinically reproducible" Kanavel sign. The first-review note stands (Kanavel signs are also taught in s13). |
| q3 | PASS | Doxycycline 100 mg PO twice daily equals Sips' 200 mg daily. The beta-lactam distractors are correct. |
| q4 | PASS | A 2 day recheck in a fly-out community is defensible. |

## Other checks

- Sources: this round I rechecked the CIG tetanus page, Clark 2003 and Hennelly 2010 by WebFetch. The earlier rounds verified the rest, and the text citing them is unchanged.
- Near duplicates: seal finger, palate impalement, cranial dog bite and boot-top cut have no match elsewhere in `src/samps` or `src/cases`. Tibialis anterior appears in s43 only as a distractor.
- No prior ruling in SCORING-RULINGS.md is reversed. I found no unrequested writer changes in revision 2.

Overall: PASS
