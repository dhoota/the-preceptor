# Q500B verification review: s74, Lacerations (revision 1)

Reviewer: fresh independent QA agent. I did not write, edit or earlier review this batch. Lenses A and B, whole batch read, not only the changes. File: `src/samps/s74/lacerations.ts` (lacerations-39 to lacerations-43). Inputs: first review `docs/reviews/q500b-qa-s74.md` and writer report `docs/reviews/q500b-writer-s74.md` with its "Revision 1" section. No edits were made to the batch.

Tests: `SAMP_BATCH=s74 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed, 128 of 128, no near duplicate stems. `npx tsc --noEmit -p .` shows no s74 errors.

Mechanical checks (script): every option list is in alphabetical order with "None" or "No ..." last. Longest to shortest option ratios are 1.06 to 1.83 (all under 2.1 single and 2.6 menu). The key is the single longest option in 3 of 18 single questions (40 q4, 42 q3, 43 q2), 17 percent. Single key positions 0 to 4 are 3, 4, 4, 4, 3. Stems are 91 to 134 words. No em or en dashes, smart quotes or semicolons in content. Canadian spelling throughout. No personal names. `reviewed: false`, author "Preceptor", version 1.

## First-review fails: resolution

| # | First-review fail | Status |
|---|---|---|
| 1 | lacerations-39 duplicate of batch16 oral case, plus mock cues and typo | Duplicate handled by coordinator ruling (39 keeps its scenario because the batch16 case is being replaced). Mock cues fixed: q2 update now "The lower lip is swollen", q3 update now neutral. Typo fixed ("shows. Placing"). Resolved. See batch16 note below. |
| 2 | 40 q3 update named q2 keys | Resolved. Update and explanation opening match the requested text. |
| 3 | 40 q4 prompt implied discharge | Resolved. Prompt matches the requested text. |
| 4 | 41 q2 single with "none" key | Resolved. Now a `menu`, `select: 1`, six options in order, "None" last and the only key. The added option "Normal pupils and eye movements" is an unrequested change. Judged on merit: it is a true distractor, the explanation now covers it, and it keeps the option count at the menu minimum of 6. Acceptable. |
| 5 | 41 q4 "CT shows" | Resolved ("Imaging shows"). |
| 6 | 42 q1 dorsalis pedis nerve | Resolved ("the anterior tibial vessels and the deep peroneal nerve"). |
| 7 | 42 q4 update stated q2 key | Resolved. Update matches the requested text. |
| 8 | 43 q3 cefazolin claim, TMP-SMX order, duration, update cue | Resolved. Cefazolin claim removed and replaced with the White and Jewer failures (penicillin, dicloxacillin, cephalexin), which White and Jewer support and which is in the SAMP sources. Strength now 160/800 mg. Duration now "one deep wound needed 10 weeks", confirmed in Sips 2021 (doxycycline 200 mg daily for 10 weeks, earlier reports 2 to 6 weeks). Update now neutral. |

## Batch16 check (coordinator ruling)

`src/cases/batch16/lip-laceration-missing-tooth-fragment.ts` still exists and is still exported from `src/cases/batch16/index.ts`. It has been changed (now "A fall on the back steps", Tdap at age 14 given 10 years ago), but it still teaches a through and through lower lip laceration crossing the vermilion border, a broken incisor with a missing fragment, a soft tissue radiograph of the lip before closure and vermilion border marking. So the overlap with lacerations-39 remains until that case is replaced. Noted for the coordinator. Per the ruling, lacerations-39 is not failed for it.

## Verdict by SAMP and question

### lacerations-39 (Skateboard fall onto the mouth): FAIL (1 item)

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | FAIL (low) | The key option "Location of the missing tooth" says a whole tooth is missing. The stem says only the incisal corner is missing, and the explanation speaks of "a piece of tooth". The key misstates the stem. Fix: change the option to "Location of the tooth fragment" (still first alphabetically, ratio stays under 2.1). Mock-mode note (B6, flag only): the q2 update ("no coughing or choking", chest clear) and q2 options (chest film, lip film) imply that the fragment's whereabouts matters. q2 needs the no-choking fact to reject the chest radiograph, so under B6 it stays and is flagged for the physician. |
| q2 | PASS | IADT 2020 advises radiographs of lip or cheek lacerations to search for tooth fragments and foreign material. Distractor reasons are true. |
| q3 | PASS | Recomputed against the CIG wound table: at least 3 doses, last booster 2 years ago, wound not clean and minor, so no Td or Tdap and no TIg. Distractor reasons true. |
| q4 | PASS | Verified in Forsch 2017: first skin suture at the vermilion border, muscle and mucosa with 3-0 or 4-0 absorbable, skin with 6-0 or 7-0 nylon. Typo fixed. |

### lacerations-40 (Toddler who fell in the hallway): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS, flagged | B6 note from the first review stands (q2 update implies an intraoral object, needed for q2). |
| q2 | PASS | Keys match SGEM 429 indications (profuse bleeding, neurological change, neck crepitus). |
| q3 | PASS | Hennelly numbers recomputed: 0 strokes in 122, infection 1 of 116 (0.9%), CTA positive 9 of 90 (10%) with no intervention. |
| q4 | PASS | "About 1%" matches 1 of 116. New prompt does not state the disposition. |

### lacerations-41 (Toddler and a large farm dog): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Steen 2015 supports infant skull vulnerability and small looking wounds. |
| q2 | PASS, flagged | Format now correct. B6 note: the q4 update (fracture found in a child with the normal findings in the stem) indirectly supports the "None" key. q4 cannot work without the imaging result, so it stays and is flagged. |
| q3 | PASS | Steen recommends head CT for every child bitten on the head. Distractor reasons true. |
| q4 | PASS | "Imaging shows" removes the CT cue. Key supported by Steen and Tahir. |

### lacerations-42 (Cut during a hockey game): FAIL (1 item)

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | PASS | Anatomy now correct. |
| q2 | PASS | EHL and EDL compensation (Christman 2015). Distractor anatomy correct. |
| q3 | PASS | Deep peroneal nerve to the first web space, tibial branches to the plantar great toe, sole and heel pad, sural to the lateral foot. |
| q4 | FAIL (low) | The explanation rejects the distractor "Repair after 6 weeks in a cast" as "a cast without repair", but the option is a delayed repair, not no repair. The stated reason does not match the option (Lens A 2, Lens B 8). Fix: replace "A brace, physiotherapy or a cast without repair accepts that loss of function." with "A brace or physiotherapy without repair accepts that loss of function. A repair delayed 6 weeks in a cast lets the tendon ends retract, so a graft may then be needed." Key and remaining explanation verified against Christman 2015. |

### lacerations-43 (Painful finger in a coastal community): PASS

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Onset on day 8 fits the 7 to 15 day incubation (White and Jewer). Beta-lactam failure fits worsening on cephalexin. |
| q2 | PASS, with note | Kanavel content also taught in s13 (first-review note stands). |
| q3 | PASS | All four first-review fixes in place. Doxycycline 100 mg twice daily equals Sips' 200 mg daily. Penicillin V 300 mg is a Canadian tablet strength. The option ratio is 1.83. |
| q4 | PASS | Recheck in 2 days after a failed antibiotic in a fly-out community is defensible. |

## Other checks

- Sources: I verified Forsch 2017 (aafp.org, vermilion border, suture sizes) and Sips 2021 (PMC8056412, 10 weeks of doxycycline 200 mg daily, earlier reports 2 to 6 weeks, beta-lactam failure) by WebFetch. The other sources were verified by the first review and the cited points are unchanged.
- Near duplicates: palate impalement, cranial dog bite, boot-top cut and seal finger have no other match in src/samps or src/cases (grep for palat, seal finger, boot top, skate blade). The only overlap is 39 with batch16, as above.
- No prior ruling in SCORING-RULINGS.md is reversed.

## Fails, with exact fixes

1. lacerations-39 q1: change the key option "Location of the missing tooth" to "Location of the tooth fragment".
2. lacerations-42 q4: replace the sentence "A brace, physiotherapy or a cast without repair accepts that loss of function." with "A brace or physiotherapy without repair accepts that loss of function. A repair delayed 6 weeks in a cast lets the tendon ends retract, so a graft may then be needed."

Overall: FAIL (2 items)
