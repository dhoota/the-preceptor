# Physician review: Preceptor CCFP-EM

For Arjan Dhoot, MD. Prepared 24 September 2026.

This document lists what needs a physician decision before launch. Part 1 is a set of one-line decisions. Part 2 is the review of the 975 new SAMPs. Part 3 covers the oral cases.

Nothing in the app changes status until you sign it off. Every new SAMP ships `reviewed: false`.

## How to sign off

- Sign-offs are recorded in `docs/signoff-2026-09.json`. A new round gets its own file, for example `docs/signoff-2026-10.json`, with the ids you approve.
- The tests then require `reviewed: true` for exactly those ids, and they snapshot the keys.
- A signed-off key can never change silently after that. A change fails the tests until it is logged for you.
- Reply with ids and a verdict (approve, change, reject), and the change is made.

## Part 1. Decisions in one go

### 1. Signed-off SAMPs that cite Tintinalli (your ruling applied)

- 14 citation strings in s01 to s17, used by 64 signed-off SAMPs, now name the 9th edition (McGraw Hill, 2020) and exact chapter numbers and titles.
- The chapter numbers were checked against the publisher's 9th edition table of contents.
- Only the citation strings changed, in commit b6719d7. No key, stem, figure or explanation changed.
- No one could read the book itself. So no row confirms the chapter holds the claim.
- 10 claims may sit in another chapter or post-date 2020. They are listed in `docs/reviews/signed-tintinalli-citations.md`. For example: xylazine in the Canadian opioid supply (ems-06), JumpSTART (ems-12), and peripartum cardiomyopathy (pre-eclampsia-09 and 12).
- **Decision:** accept the citations as they are, or name any SAMP to reopen.

### 2. Signed-off SAMPs that cite other textbooks (untouched)

The same issue exists for other textbooks in s01 to s18. Nothing was changed.

| Textbook | Signed-off SAMPs | Questions |
|---|---|---|
| Rosen's Emergency Medicine | 100 | 176 |
| ATLS manual | 27 | 51 |
| Goldfrank's Toxicologic Emergencies | 21 | 48 |
| Users' Guides to the Medical Literature | 14 | 41 |
| Walls Manual of Emergency Airway Management | 8 | 11 |
| UHMS Hyperbaric Medicine Indications Manual | 4 | 6 |
| Nelson Textbook of Pediatrics | 1 | 2 |
| Textbook of Neonatal Resuscitation | 1 | 1 |

Many of these citations name the book without a chapter.

**Decision:** leave as is, or allow a citation-only pass like item 1. A citation-only pass would change no figure or key.

### 3. Keyed option rewordings in the signed-off 525

- The format conformance pass shortened 295 keyed options, for option length parity only. The meaning is meant to be unchanged.
- Each is logged with its before and after text in `docs/conformance-key-edits.json`, by SAMP and question.
- Per batch: s01 25, s02 17, s03 9, s04 15, s05 16, s06 23, s07 18, s08 7, s09 23, s10 17, s11 17, s12 20, s13 15, s14 23, s15 11, s16 7, s17 18, s18 14.
- Reviewers flagged the ones where detail was lost. They are at the top of `docs/physician-items.md`. For example: analgesia-sedation-04 q3 lost "over 2 to 3 minutes", and cqi-02 q3 lost the disclosure statement.
- **Decision:** approve all, or name the ones to restore.

### 4. Duplicates to reject

pulmonary-edema-39 and pulmonary-edema-40 (s48) are near copies of pulmonary-edema-23 and 31.

**Decision:** reject both, which would leave 1,498 SAMPs, or keep them. At least 1,500 SAMPs is the launch gate, so rejecting both means writing two replacements.

### 5. Items that repeat a signed-off SAMP

Each of these teaches a decision that a signed-off SAMP already keys. **Decision:** keep or change each one.
- shock-45 (s50): whole bowel irrigation for a toddler's iron ingestion, also keyed in s18.
- eye-25 (s37): the same open globe steps as eye-13 (s10).
- environmental-19 q3 and environmental-20 q2 (s36): both key repeat liver and clotting tests after heat stroke. They sit in one batch with different decisions.

## Part 2. The 975 new SAMPs (s19 to s53)

### What was done

- **Writing and review:**
  - Every batch was written, then reviewed under Lens A (keys and numbers) and Lens B (sources, consistency, format), with planted defects to check each reviewer.
  - A bank-wide overlap pass followed. Every rewrite from that pass had an independent review, and every rebuild had a second check.
  - Across the overlap rounds, reviewers found real defects in about half of the rewrites. Three rebuilds had copied signed-off SAMPs. All were caught and rebuilt.
- **Sources:**
  - Tintinalli is no longer cited anywhere in s19 to s53.
  - The other textbooks were checked claim by claim. Where a guideline covers the claim, it is now cited. Where none does, the textbook stays, with edition, year and chapter.
  - ATLS and Users' Guides are kept as they are.
- **Launch gate:** at least 1,500 SAMPs, and at least 3 questions on every key feature of every priority topic. Both pass.

### How to review

Open `docs/physician-review/README.md`. It has one file per batch. Each file gives:
- the flags reviewers raised for that batch, each with the name of the report it came from
- every SAMP in full: stem, vitals, updates, options with the key marked, explanation, key feature and source
- an Approved, Needs change, Reject line to tick for each SAMP

### Priority items

These are the flags where a key rests on judgement, on a weak or non-Canadian source, or on evidence that disagrees. The batch files carry the full list.

- **Keys that rest on a judgement call:**
  - ischemic-heart-disease-23 q2: the Wells score is 7 only with 3 points for "PE most likely".
  - ischemic-heart-disease-46 q3: epinephrine against aminophylline after heart transplant.
  - multiple-trauma-44 q1: hyperkalemia as the most immediate threat after crush release.
  - asthma-copd-32 q1: an exertion test before discharge.
  - gi-bleed-29 q1: risk factors that were only trends in the meta-analysis.
  - abuse-domestic-31 q1: the key names rib injuries, which Wu 2010 found nonspecific.
- **Doses or figures with no Canadian guideline:**
  - loc-37: mannitol per ENLS.
  - loc-26: bicarbonate end points per Emergency Care BC.
  - analgesia-sedation-16: the hydromorphone oral to IV ratio has no guideline figure.
  - pre-eclampsia-23: the ergonovine dose, 0.2 mg (Canadian label and FIGO) or 0.25 mg (SOGC).
  - multiple-trauma-26 q2: the 6 hour reduction window.
- **Sources that disagree:**
  - gi-bleed-42 q2: two Italian papers on stopping dairy.
  - multiple-trauma-44 q3: ISN 2012 fluids against the 2026 pre-hospital consensus.
  - msk-37: PROFHER, with a mean age of 66, applied at age 84.
- **New or rebuilt cases that need a full read:**
  - suicide-risk-31
  - delirium-agitation-35
  - sob-26
  - ischemic-heart-disease-23 and 46
  - shock-17 and 39
  - tox-26 and 27
  - burns-20
  - msk-16 and 37
  - first-trimester-bleeding-19
  - lacerations-36
  - eye-23
  - pre-eclampsia-23
  - abuse-domestic-20
- **Loose key feature mappings:**
  - ems-16 q4 on tox KF4
  - environmental-19 q3 on KF1
  - suicide-risk-31 q3 on KF4
  - suicide-risk-28 q1 on KF3
- **Textbook-only claims:** questions whose only support is a textbook chapter no reviewer could read. Each batch file lists them.

## Part 3. Oral cases

- All 100 oral cases were realigned to the CFPC card and score sheet after the first sign-off.
- With your approval they went back to physician review. They are listed under "withdrawn" in `docs/signoff-2026-09.json`.
- The realignment reports are `docs/reviews/oral-realign-batch01.md` to `oral-realign-batch10.md`.
- **Decision:** re-sign each case, or name the ones to change.

## Files

- `docs/physician-review/`: the per-batch review pack, generated by `TOOL=1 npx vitest run tools/export-review.test.ts`.
- `docs/physician-items.md`: the running list of physician items from every pass.
- `docs/reviews/`: every writer and reviewer report.
- `docs/conformance-key-edits.json`: the keyed option rewordings in the signed-off 525.
