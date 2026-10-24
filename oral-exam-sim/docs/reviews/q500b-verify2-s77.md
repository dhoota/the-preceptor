# Q500B independent verification: s77, Delirium/agitation (Revision 2)

Reviewer: Preceptor QA (fresh reviewer, did not write, edit or review this batch before). File reviewed: `src/samps/s77/delirium-agitation.ts`, ids delirium-agitation-39 to delirium-agitation-43, read in full as it now stands. No edits were made to the batch (REVIEW-RULES rule 1).

Inputs read: docs/Q500B_BRIEF.md (Independent QA), docs/reviews/REVIEW-RULES.md, docs/SAMP_REVIEW_BRIEF.md, docs/DECISIONS.md (D1), the first review docs/reviews/q500b-qa-s77.md, the first verification docs/reviews/q500b-verify-s77.md and the writer's report with "Revision 1" and "Revision 2" docs/reviews/q500b-writer-s77.md.

## Tests

`SAMP_BATCH=s77 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed. The bank-wide near-duplicate stem test passed in 7.6 seconds.

House style (scripted scan of the file): no en or em dashes. Semicolons appear only in TypeScript code lines, never in a string. No mnemonics or personal names. Canadian spelling (behaviour, odour, pyjamas, favours). Options alphabetical in every question, the new 43 q1 included.

New 43 q1 option lengths: 40, 35, 37, 30 and 39 characters. The key (39) is not the longest option. The writer's report says it "ties the longest distractor at 39". It is one character shorter. That is a report slip only and does not affect the item. Single key positions recounted: 4, 4, 4, 4 and 3.

## Sources

| Id | Result |
|---|---|
| nice-delirium (new) | Opened by direct curl request (HTTP 200) at https://www.nice.org.uk/guidance/cg103/chapter/Recommendations. Page header: "Published: 28 July 2010 Last updated: 18 January 2023", so the citation "2010, updated 2023" is right. Quotes confirmed verbatim: 1.6.3 "If there is difficulty distinguishing between the diagnoses of delirium, dementia or delirium superimposed on dementia, manage the delirium first." 1.7.5 "For people in whom delirium does not resolve: re-evaluate for underlying causes, follow up and assess for possible dementia." 1.1.1 "serious consequences (such as increased risk of dementia and/or death)". 1.8.1 also says delirium is "common and usually temporary", which fits the explanation's handling of the "promise full recovery" distractor (usually temporary, but not a promise). Every NICE statement in the 43 q1 explanation matches the page. |
| hcca | Not opened. The e-Laws page returns 200 but its text is rendered by script, so no section text could be read (same as both earlier reviewers). HCCA content is unchanged since the first review, which checked s. 4(2), 20(1), (2), (5), (11) and 25(2), (3). |
| oregan-attention, aasheim-bariatric-we, arts-korsakoff, beta-peds-2019, beta-deescalation-2012, beta-psychopharm-2012, beta-restraint-2012, gower-ed-delirium | Not reopened this round, to save WebFetch quota. Text citing them is unchanged since the first verification, which opened Gower, Arts and BETA pediatric directly and accepted the rest. |

Sources I could not open or did not reopen: hcca (script-rendered page), and the eight unchanged sources above (not reopened).

Canadian first: NICE is a UK guideline. The writer reports that the CCSMH 2014 update covers only drug prevention and treatment. I know of no current Canadian guideline that states this point more directly. Accepted.

## Earlier fails: resolution

| Item | Earlier fail | Status |
|---|---|---|
| 39 q4, 40 q3, 40 q4, 41 q3, 42 q1, 42 q2, 42 q4, 43 q2, 43 q3 | First review (q500b-qa-s77.md) | Resolved, as the first verification found. Re-read in the current file: every fix is in place as written and nothing has drifted since. |
| 43 q1 | First review: repeat of signed delirium-agitation-16 q1. First verification: the rewrite repeated delirium-agitation-19 q1, 17 q1 and 06 q1, and an orientation claim was unsourced. | Resolved. See below. |

## New 43 q1: overlap search

I searched all of `src/samps` and `src/cases` (generated files left out, other Q500B batches included) for: delirium clears, resolves, has cleared, once the delirium, has dementia, dementia diagnosis, diagnose dementia, MoCA, MMSE, donepezil, assess for possible dementia, manage the delirium first, and dementia or cognition near follow up, later, recover, reassess or baseline. Findings:
- No SAMP keys deferring a dementia diagnosis, or retesting cognition, until delirium clears.
- delirium-agitation (s34) uses "Progression of an undiagnosed dementia" as a cause distractor and "Start donepezil 5 mg PO daily" as a treatment distractor, keyed on pregabalin. Different decisions.
- Donepezil appears elsewhere only as a home medication (s24, s45, s67, s34, batch05) or as a cause of bradycardia (s24). MoCA appears only as baseline history (s08, batch04, batch05) or as a capacity point (batch05).
- s08 write-in "Reassess capacity as the delirium clears" is about capacity, not dementia diagnosis.
- Closest match: oral case batch04 delirium-older-adult, disposition model answer bullet "Cognitive follow up after recovery. Delirium can unmask a dementia." This is one bullet in an oral case's model answer, and the scored rubric items there (del-d1 admit with geriatric follow up, del-c2 communication) do not key it. It is a different format and not a keyed SAMP decision. Not a D1 repeat. Acceptable, noted for the record.

D1 stays at 19 of 20. The writer did not claim slot 20.

## Verdicts

### delirium-agitation-39 Restless weeks after her operation

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Unchanged. Key matches O'Regan. |
| q2 | PASS | Unchanged. Aasheim figures and distractor reasons correct. |
| q3 | PASS | Recorded B6 cue (thiamine named). Acceptable. |
| q4 | PASS | Update "Five days later her nystagmus has gone" and the Arts persistence sentence are in place. |

### delirium-agitation-40 A boy who would not settle at home

Recomputed: haloperidol 2.5 mg IM is half the 5 mg oral maximum and under 6 mg a day for 15 to 40 kg. Lorazepam 1 + 4 = 5 mg, above the 4 mg child daily maximum. Ketamine 150/38 = 3.9 mg/kg ("about 4 mg/kg").

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Unchanged. |
| q2 | PASS | Unchanged. |
| q3 | PASS | Update and one-sentence key in place. Explanation matches the options. |
| q4 | PASS | BETA IM wording and ketamine wording in place. |

### delirium-agitation-41 Shouting at the walls of his apartment

Recomputed: ketamine 300/74 = 4.05 mg/kg.

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Unchanged. |
| q2 | PASS | Unchanged. |
| q3 | PASS | Diphenhydramine sentence now from Wilson. |
| q4 | PASS | Menu key 0, 2, 4 matches the Richmond debrief elements. |

### delirium-agitation-42 A fall on the ice at a bus shelter

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | Explanation follows the stem and Gower. |
| q2 | PASS | Recorded B6 cue (Deaf card). Unsourced interpreter claims removed. |
| q3 | PASS | HCCA s. 4(2) and 25(3) applied correctly. Recorded B6 cue. |
| q4 | PASS | "Before the interpreter connects" accepted, as in the first verification. |

### delirium-agitation-43 Found in the barn at dawn

Recomputed: temperature 38.1, glucose 13.8, 4 days from a baseline of doing his own accounts. In-world year 2026, so "2016" fits cows sold 10 years ago. HCCA ranking for a widower with no attorney and one nephew is correct.

| Q | Verdict | Finding |
|---|---|---|
| q1 | PASS | New decision (defer a dementia diagnosis and retest cognition once delirium clears), not keyed anywhere in the bank. Key is the single best answer: an acute 4-day change with fever is delirium, and cognitive testing during it would measure the delirium. Distractors are each wrong for the stated reason: diagnosing or "staging" dementia with a MoCA now mislabels an acute illness, donepezil treats an unmade diagnosis (and CCSMH does not support cholinesterase inhibitors for delirium), and a promise of full recovery is dishonest given NICE 1.1.1. Every NICE statement is verified verbatim. The explanation does not overstate 1.7.5: it says follow up and dementia assessment apply when delirium does not resolve, which is what the guideline says, and the key follows from 1.6.3 (manage the delirium first). Update and options give away no later key. The unsourced psychosis orientation sentence is gone. Stem time course and "He gives the year as 2016" still support q2 and q3. Tests KF1 (delirium against dementia). |
| q2 | PASS | Unchanged since the first verification. Matches Gower. |
| q3 | PASS | Unchanged. HCCA s. 20(1) paragraph 8 and s. 20(11). |
| q4 | PASS | Unchanged. HCCA s. 20(2) and (5). Recorded B6 cue (nephew reached). |

## Unavoidable mock-mode cues to record (B6, leave and flag)

39 q3 (thiamine), 42 q2 (Deaf card), 42 q3 (interpreter), 43 q4 (nephew reached). No new cue introduced by Revision 2.

## Unrequested writer changes (rule 4)

None in Revision 2 beyond the requested 43 q1 rebuild and the new NICE source it needed. Both are judged above and accepted.

## Summary

5 SAMPs, 20 questions (19 single, 1 menu). All 20 pass. Every earlier fail is resolved, including the rebuilt 43 q1, which now keys a decision not taught elsewhere in the bank and rests on a verified NICE CG103 source. No prior ruling is reversed. D1 stays at 19. One report slip noted (key length is 39 against a longest distractor of 40, not a tie). It needs no change.

Overall: PASS
