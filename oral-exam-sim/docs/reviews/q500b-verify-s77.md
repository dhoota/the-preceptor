# Q500B independent verification: s77, Delirium/agitation (Revision 1)

Reviewer: Preceptor QA (fresh reviewer, did not write, edit or first-review this batch). File reviewed: `src/samps/s77/delirium-agitation.ts`, ids delirium-agitation-39 to delirium-agitation-43, read in full as it now stands. No edits were made to the batch (REVIEW-RULES rule 1).

Inputs read: docs/Q500B_BRIEF.md (Independent QA), docs/reviews/REVIEW-RULES.md, docs/reviews/SCORING-RULINGS.md, the first review docs/reviews/q500b-qa-s77.md and the writer's report with "Revision 1" docs/reviews/q500b-writer-s77.md.

## Tests

`SAMP_BATCH=s77 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests passed, the bank-wide near-duplicate stem test included.

House style (scripted check of every string): no semicolons, en or em dashes. No mnemonics or personal names. Canadian spelling (behaviour, favours, odour, pyjamas). Options alphabetical. Single key positions recounted: first 4, second 4, third 4, fourth 4, fifth 3. The key is the longest option in 40 q3 ("Thanks for sitting, but kicking is not okay", 43 characters against 41 and 40). This was the first reviewer's own wording, the batch rate stays well under 35%, and the cue is now weak because the key is one sentence like the others. Accepted.

## Sources re-verified in this round

| Id | Result |
|---|---|
| gower-ed-delirium | Opened (westjem.com). Confirms the APA definition ("a disturbance of consciousness and a change in cognition that develops over a short period of time"), "Delirious patients are usually oriented to person, but not to time and/or place", skin among the common infection sites, classic meningeal findings often absent with LP worth considering, and hearing impairment as a predisposing factor. It has no statement about orientation in primary psychosis, and its comparison table covers delirium and dementia only. See 43 q1. |
| arts-korsakoff | Opened (PMC5708199). Confirms "the memory disorder should be irreversible" for KS and that "quickly resolving memory disorders would probably be interpreted as part of the recovery phase of WE". The 39 q4 added sentence is supported. |
| beta-peds-2019 | Opened (PMC6404720). Confirms "PO/IM: 0.5 mg-5 mg (IM should be half a dose of PO)", haloperidol daily maximum 6 mg for 15 to 40 kg, lorazepam child daily maximum 4 mg, lorazepam with haloperidol or chlorpromazine for severe agitation, "ketamine and barbiturates are not recommended for treatment of agitation", diphenhydramine for moderate agitation, separation from or reunification with family, firm limits with specific praise. The 40 q4 rewrite matches. |
| aasheim-bariatric-we | New DOI https://doi.org/10.1097/SLA.0b013e3181884308. Not reopened this round to save WebFetch quota. The first reviewer verified this DOI and the writer reports it resolves to Annals of Surgery, November 2008. Accepted. |
| oregan-attention, beta-deescalation-2012, beta-psychopharm-2012, beta-restraint-2012 | Not reopened this round (WebFetch quota). Their supported text is unchanged from the first review except 41 q3 and 42 q2, whose new wording only removes claims. |
| hcca | Not opened (the e-Laws page did not render for the first reviewer either). HCCA content is unchanged from the first review, which checked s. 4(2), 20(1), (2), (5), (11) and 25(2), (3). |

Sources I could not open or did not reopen: hcca (e-Laws), and the four BETA 2012 papers and O'Regan (not reopened, text unchanged).

## First-review fails: resolution

| Item | First-review fail | Status |
|---|---|---|
| 39 q4 | Update named thiamine. Korsakoff stated as settled at day 5. | Resolved. Update reads "Five days later her nystagmus has gone." The persistence sentence is added and matches Arts. |
| 40 q3 | Update named the father outside. Key was the longest two-sentence option. | Resolved. Update opens "A few minutes later". Key is one sentence. Distractor change ("Why did you break the wall tonight?") was not requested, judged on merits: still wrong for the same reason, explanation matches. Accepted (rule 4). |
| 40 q4 | IM range misread. Ketamine wording. | Resolved. Matches the BETA table and text verbatim. |
| 41 q3 | Unsourced "weak calming agent". | Resolved with the reviewer's wording. |
| 42 q1 | "gestures with purpose" and hearing loss as a mimic. | Resolved. Now follows the stem and Gower. |
| 42 q2 | Interpreter claims unsourced. | Resolved with the reviewer's fallback wording. |
| 42 q4 | "While you wait" cued the q3 key. | Resolved. "Before the interpreter connects" is acceptable because q2 already names the interpreter (recorded B6 cue) and the 40-minute wait is in the q3 update, not its key. |
| 43 q1 | Repeat of signed delirium-agitation-16 q1. | NOT resolved. The rewrite moved to a decision that is also already keyed in signed content. See below. |
| 43 q2 | Baseline cue, LP reason, feet reason. | Resolved. LP and skin reasons now match Gower. |
| 43 q3 | Update gave away the q2 key. | Resolved. "A soft tissue infection is found" does not name the feet or the exam. |
| Aasheim URL | Recommended. | Done. |

## Bank-wide overlap search (this round)

Keywords searched across `src/samps` and `src/cases` (generated files excluded): Wernicke, Korsakoff, sleeve gastrectomy, Deaf, late-onset and primary psychosis, orientation and disorientation, 4AT, bCAM, hypoactive, Lewy, fluctuat, sundown, carphologia and picking at, MoCA, MMSE and deferral of dementia testing. Other new Q500B batches (s78 to s88) mention Wernicke only as a distractor (s84 environmental, s87 loc). s19 abdominal-pain has a sleeve gastrectomy leak, a different decision. No other repeats found for 39, 40, 41 or 42.

Delirium against primary psychosis is already keyed many times:
- delirium-agitation-19 q1 (s34, signed): "Which of the following features most strongly favours delirium over a primary psychotic illness?", key is a cognitive finding (inattention on days backward), with "first episode with no psychiatric history" in the explanation.
- delirium-agitation-17 q1 (s34, signed): delirium rather than relapse of schizophrenia, key drowsiness with impaired attention.
- delirium-agitation-06 q1 (s08, signed, write-in): "What features favour delirium over a primary psychotic disorder?", with DISORIENT ("Disorientation to time or place") as an accepted key item.
- s08 line 276 write-in: primary psychosis has "intact orientation and attention".
- delirium-agitation-20 q1 and 27 q1 (s34), and the s08 write-in at line 1332: medical cause against primary or postpartum psychosis.
- Oral case batch08 psychosis-medical-cause: rubric "Recognizes delirium rather than primary psychosis from inattention, disorientation, fever and fluctuation."

The writer's report says "No question separates delirium from a late-onset psychosis". That is true only of the age label. The decision (which bedside finding separates delirium from a primary psychosis) and now the key itself (disorientation) are already taught in signed content.

## Verdicts

### delirium-agitation-39 Restless weeks after her operation

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | PASS | Key defensible, matches O'Regan. |
| q2 | PASS | Figures match Aasheim. Distractor reasons correct. |
| q3 | PASS | Recorded B6 cue (thiamine named). Acceptable. |
| q4 | PASS | Revision verified against Arts. |

### delirium-agitation-40 A boy who would not settle at home

Recomputed: 2.5 mg is half the 5 mg oral maximum and under 6 mg a day for 15 to 40 kg. Lorazepam 1 + 4 = 5 mg, above 4 mg. Ketamine 150/38 = 3.9 mg/kg.

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | PASS | Matches BETA. |
| q2 | PASS | Matches BETA and Richmond. |
| q3 | PASS | Revision verified. Unrequested distractor change accepted. |
| q4 | PASS | Revision verified against the BETA table. "Should not be given within 1 hour of a benzodiazepine" is the table's wording (the text says parenterally). Acceptable. |

### delirium-agitation-41 Shouting at the walls of his apartment

Recomputed: ketamine 300/74 = 4.05 mg/kg.

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | PASS | Unchanged, verified in round 1. |
| q2 | PASS | Unchanged. |
| q3 | PASS | Revision removes the unsourced claim. |
| q4 | PASS | Menu key 0, 2, 4 matches the Richmond debrief elements. |

### delirium-agitation-42 A fall on the ice at a bus shelter

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | PASS | Revision follows the stem and Gower. |
| q2 | PASS | Recorded B6 cue (Deaf card). Unsourced sentences removed. |
| q3 | PASS | HCCA s. 4(2) and 25(3) applied correctly. Recorded B6 cue. |
| q4 | PASS | Cue removed. Matches Knox. |

### delirium-agitation-43 Found in the barn at dawn

Recomputed: temperature 38.1, glucose 13.8, 4 days from baseline. In-world year 2026, so "2016" fits cows sold 10 years ago. HCCA ranking for a widower with no attorney and one nephew is correct.

| Q | Verdict | Finding and exact fix |
|---|---|---|
| q1 | FAIL (medium) | (a) Repeat of signed content. The rewrite keys the same decision as delirium-agitation-19 q1 (near-verbatim lead-in, cognitive finding as key) and delirium-agitation-17 q1, and its key (disorientation) is already an accepted item for the same question in signed delirium-agitation-06 q1 and the batch08 psychosis-medical-cause rubric. Changing inattention to disorientation, or "primary" to "late-onset", is the same decision in new words. D1 stands at 19 of 20 and this is not named as a D1 repeat. (b) Unsourced claim: Gower says delirious patients are usually disoriented to time or place, but it says nothing about orientation in primary psychosis, so "A primary psychotic disorder usually leaves orientation intact" is not supported by the cited source. Fix: replace q1 with a KF1 decision not keyed anywhere in the bank. My keyword search found none on deferring a dementia diagnosis. A suggested frame: update "His neighbour asks whether this means he has dementia." Prompt "Which of the following is the most appropriate response about his memory?" Key along the lines of "Retest his cognition once the delirium clears", with distractors such as diagnosing dementia now from the confusion, a MoCA today, starting donepezil, or reassuring that it is only the fever. This needs a source the writer opens and quotes (Gower does not cover it, so use for example the CCSMH delirium guideline already cited in s08, or another verified source). Keep the stem time course and "He gives the year as 2016", which still support q2 and q3. If no source can be opened, the other route is a KF1 point the writer can show by search is unkeyed and source-backed. Claiming D1 slot 20 is not recommended. |
| q2 | PASS | Revision matches Gower (skin as infection site, meningeal signs often absent). "Thick wool socks" in the stem is a fair stem clue, not a mock cue. |
| q3 | PASS | Cue removed. HCCA s. 20(1) paragraph 8 and s. 20(11) applied correctly. |
| q4 | PASS | HCCA s. 20(2) and (5). Recorded B6 cue (nephew reached). |

## Unavoidable mock-mode cues to record (B6, leave and flag)

39 q3 (thiamine), 42 q2 (Deaf card), 42 q3 (interpreter), 43 q4 (nephew reached). 42 q4 "Before the interpreter connects" also depends on the q2 key but adds nothing beyond 42 q3's update. Accepted.

## Summary

5 SAMPs, 20 questions. 19 pass, 1 fails. Nine of the ten first-review fails are resolved and the Aasheim DOI is added. 43 q1 is still a repeat: the rewrite left delirium-agitation-16 q1 but landed on the decision of signed delirium-agitation-19 q1 and 17 q1, with a key already accepted in delirium-agitation-06 q1. Its psychosis-orientation sentence is also not supported by Gower. Every dose, weight calculation and HCCA point recomputes. No prior ruling is reversed.

Overall: FAIL (1 item)
