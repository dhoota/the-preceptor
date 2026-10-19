# Q500 verify round 2: s59, Continuous quality improvement

Fresh independent review by Preceptor of the whole revised batch, both lenses (clinical truth, and internal consistency and numbers). File reviewed: `src/samps/s59/cqi.ts` as committed in 6ced412 (round 2 writer fixes). Previous verdict: `docs/reviews/q500-qa-s59.md`. Writer report: `docs/reviews/q500-writer-s59-r2.md`. This reviewer did not write, edit or review this batch before and did not edit any SAMP, source or shared file (REVIEW-RULES rule 1). Every fix below goes back to a writer, and the revision needs another fresh review. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Batch tests run by the reviewer: `SAMP_BATCH=s59 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (132 tests). The type check shows no s59 errors.

## Verdicts

| SAMP | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| cqi-36 | PASS | PASS | PASS | PASS | PASS | |
| cqi-37 | FAIL | FAIL | PASS | FAIL | PASS | |
| cqi-38 | PASS | PASS | PASS | PASS | PASS | PASS |
| cqi-39 | FAIL | PASS | PASS | PASS | FAIL | |
| cqi-40 | PASS | PASS | PASS | PASS | PASS | |

Totals: 3 of 5 SAMPs pass. 18 of 21 questions pass. 3 questions fail: two for repeated key decisions that the first review missed, one for an untrue distractor reason. Every required fix from the previous review was applied correctly and completely.

## 1. Required fixes from the previous review

| Item | Required fix | Applied | Verdict |
|---|---|---|---|
| cqi-37 q4 | Replace the duplicate disclosure statement | Replaced with analysis team makeup (KF 1). Not keyed anywhere in the catalogue or in Q500 batches. Supported by CIAF 2012 (see below). | Correct and complete |
| cqi-38 q5 | Replace the duplicate sustain decision, remove `chartier-qi-primer-3` if uncited | Replaced with preconditions for spread (KF 6). Source removed. No "spread" or "executive sponsor" key exists in the bank. | Correct and complete |
| cqi-39 q1 | Replace the cqi-24 q3 repeat, test the CPSO subsequent physician duty itself | Stem question removed. New stem sentence sets the policy trigger. Key "Speak with the first physician". Distractors differ from cqi-24 q3. | Correct and complete |
| cqi-39 q4 | Replace the Donabedian repeat, remove `donabedian-1988` if uncited | Replaced with hindsight bias (KF 1). Source removed. No hindsight item in the bank. But see the new defect in its explanation below. | Fix applied, new defect |
| cqi-40 title and stem | New title and framing without the new chief | Title "After a safety culture survey". No chief framing. Decisions unchanged. | Correct and complete |
| cqi-40 q4 | New indicator, state a target, recompute | Crisis team assessment time, target 60 minutes. 74 / 41 = 1.80, 74 minus 41 = 33, 52 is at or under 60, 74 is above 60. All correct. Not used as an indicator anywhere in the bank. | Correct and complete |
| qcipa-2016 URL (advisory) | Add e-Laws URL | Added `https://www.ontario.ca/laws/statute/16q06` | Correct |

Unrequested changes (REVIEW-RULES rule 4): the cqi-39 stem lost "He asks you whether something was missed at the first visit" and gained "Nothing in the record or in his account suggests that anyone has told him about the glass." This was needed for the q1 rewrite and is acceptable on its merits. q2 to q4 still read correctly against the new stem. No other unrequested change was found in the diff.

## 2. Required fixes (new findings)

### cqi-37 q1 (FAIL, medium confidence). Repeated key decision and scenario

- Current: prompt "Which of the following practices for critical laboratory results would most likely have prevented this delay?", key "Verbal call to a clinician with read-back", distractors email, fax, electronic flag only, next-day review.
- Problem: multiple-patients-12 ("A result that fell through the cracks", s13) is the same scenario: a critical potassium result is lost in transit, and the patient presents later with hyperkalemia and wide QRS complexes. Its q4 key includes "A critical result policy with read back to the responsible physician". cqi-02 q1 also keys "No critical value notification to a responsible physician". The decision here (critical results go verbally to a responsible clinician with read-back) is the same teaching point. It is not a D1 entry and is not the literal wording of a key feature. The first review checked this question against the AHS bulletin but not against multiple-patients-12, which is in the cqi catalogue.
- Required change: q1 is the only key feature 5 question in the batch, so the replacement must test key feature 5 with a decision not keyed in the catalogue (s06, s30, s13 multiple-patients, anaphylaxis-04 and 11) or in the other Q500 batches. Note that identifiers (cqi-01, cqi-17), C. difficile hand hygiene (cqi-08), do-not-use abbreviations (cqi-06), medication history and reconciliation (cqi-11, cqi-28), high-alert lists (cqi-22, cqi-35), SBAR (cqi-18) and graded assertion (cqi-10) are all taken. The writer should also change the stem so that the scenario no longer retells multiple-patients-12 (for example, keep the result after discharge but not a lost hyperkalemia result with a wide QRS return), or move key feature 5 to another SAMP in the batch. If `ahs-critical-results-2014` is then uncited, remove it.

### cqi-37 q3 (FAIL, high confidence). Repeated key decision

- Current: prompt "Which of the following is the most appropriate timing for the initial disclosure conversation with her?", key "Within 1 to 2 days of finding it", distractors "After the incident analysis is complete", "At her next family physician visit", "Once she asks what happened", "When legal advice has been received".
- Problem: the decision (disclose promptly rather than wait for the review, legal advice or the patient's question) is already keyed three times, with the same distractor types:
  - cqi-06 q3: key "Disclose the event, effects, plan and apology promptly", distractors "Wait for the incident review to be complete", "Wait until the patient asks about the dextrose".
  - cqi-16 q4: key "Disclose now to her and her mother", distractors "Disclose after the incident review ends", "Mention it only if she asks about it".
  - cqi-02 q3: key "Disclose the delay, apologize and explain next steps", distractor "Defer discussion until the review and legal advice".
  The first review checked only cqi-20 q2. The "1 to 2 days" wording is new, but the decision a candidate makes is the same. Timing is not the literal wording of key feature 2, so D1 does not cover it.
- Required change: replace q3 with a decision not keyed in the catalogue. Key feature 2 stays covered by cqi-39 q1 and q2, so the replacement may test any key feature. Rebalance key positions after the change (currently 4 of 20 single keys in each position).

### cqi-39 q4 (FAIL, medium confidence). Untrue distractor reason

- Current explanation, last sentence: "Anchoring, availability, premature closure and search satisficing are biases that may have affected the first physician at the bedside, not the analysts reviewing the case."
- Problem: the source contradicts this. CIAF 2012 section 2.4 lists, among the ways bias affects an analysis team, "Premature completion of the analysis process" and warns that "initial perceptions are found to be incorrect" (anchoring on early conclusions). Analysts can anchor and close prematurely. The key is right, because the team members' comment rests on knowing the outcome, which is the CIAF definition of hindsight bias. The reason for rejecting the distractors is the part that is false.
- Required change: replace the last sentence with a true reason tied to the update, for example: "Anchoring, availability, premature closure and search satisficing can affect any reasoning, including the team's, but the comment here rests on knowing the outcome, which is what defines hindsight bias." Source: CIAF 2012, section 2.4 and glossary.

## 3. Questions that pass, with notes

- cqi-36 q1 to q4: unchanged and correct (Lilford 2004, Spiegelhalter 2005, Baxter 2016). Low note: cqi-07 q3 has "Confidential individual feedback to the treating physician" as one write-in accept item, in a radiology discrepancy context. 36 q3 tests feedback against league tables, bonuses and remedial review after a funnel plot with no outliers, so it is a different decision.
- cqi-37 q2: CIAF places the patient and the involved staff in initial information gathering. Passes.
- cqi-37 q4 (writer flag): passes. Verified in the full CIAF 2012 text. Appendix C: "Facilitator: quality specialist or risk manager", with "Expertise in analytical methods". "Clinical and non-clinical staff (including those involved in the incident and several who were not) provide valuable insight", and teams for medication events "may include ... unit clerks". Section 2.4: "include people on the analysis team who are not aware of the details of the incident". Section 3: "Senior leadership representatives may actively participate in the analysis or support the process at arm's length", which supports the explanation's line on executives. "Team composition will vary", so "most appropriate" is the right lead-in. The key is the only option that spans both sides of the handoff with analytic expertise. No distractor is defensible as the whole team. Advisory: CIAF notes that a concise analysis is "typically done by one person (facilitator)". The "Clerk's manager working alone" distractor stays wrong (not a trained facilitator, the involved worker's own manager, and a harmful ICU event), but the explanation could say so rather than only "narrows the review to one person".
- cqi-38 q1 to q4: unchanged. 30 / 120 = 25%. Shift six or more points, trend five or more (Perla 2011). Astronomical point is not keyed elsewhere (it is only a distractor in cqi-04, cqi-19 and cqi-25). Passes.
- cqi-38 q5 (writer flag, 2006 IHI paper): passes. The full white paper ("Preparing for Spread", page 5) says certain things "should be in place before actually carrying out the plan": "widespread acknowledgement by leadership that the improvement project is a key strategic initiative", "the designation of both executive sponsorship and day-to-day leadership" and "successful sites ... as well as evidence that the ideas result in the desired outcomes". Page 6 to 7: decisions may be "centralized" or rely on "a consensus-building process", and "Transferring the responsibility ... from a project leader to a line manager can help". Each distractor reason is true. The paper's own suggested citation lists six authors (Massoud, Nielsen, Nolan K, Nolan T, Schall, Sevin), as the file has. The IHI landing page lists five, but the file follows the paper. No Canadian guidance on spread was found, so a non-Canadian source is acceptable. The prompt "should be in place before" matches the paper's wording.
- cqi-39 q1 (writer flag, "first step"): passes. Verified on the CPSO page. Provision 16 has two numbered items (not 16.1 and 16.2 as the writer report calls them): "discuss the matter with the previous physician, where it is possible to do so" and then, "where appropriate, ensure that disclosure takes place at the first reasonable opportunity", which "may require" the subsequent physician to disclose "to the extent that they have the appropriate knowledge". The policy gives them in that order, so "first step" holds. Immediate disclosure to the patient is not among the options, so no option competes with the key. The College claim is true: the policy has no provision on reporting to the College. Policy approved February 2003, updated May 2010 and December 2019, so "Updated 2019" is right. Physician-level item below.
- cqi-39 q2 and q3: unchanged and correct (QCIPA 2016 sections 2(3) and 4(1)(c) as verified in round 1, CIAF constellation diagram).
- cqi-40 q1 to q4: unchanged decisions with the new framing. The q4 numbers recompute (see section 1). The CIHI 2018 stratifier report exists and supports stratifying indicators by income. No crisis-team indicator, equity stratification, learning from excellence, patient partner or huddle-content key exists elsewhere in the bank (huddles appear only as accept items in cqi-13 q3 and cqi-15 q1, not as a content question).

## 4. Uniqueness check

I read the whole cqi catalogue (cqi-01 to cqi-35, anaphylaxis-04 and 11, multiple-patients-04 and 12, four oral cases) and grepped `src/samps/` and `src/cases/` (including s54 to s70 and batch11 to batch15) for hindsight, spread, executive sponsor, analysis team, facilitator, previous or first physician, stratification, equity, crisis team, funnel plot, positive deviance, excellent care, patient partner, huddle, astronomical, driver diagram, constellation, read-back and critical result. The only repeats found are cqi-37 q1 and q3 (section 2). No Q500 batch keys any decision in s59. No item rides on D1, which stays at 19.

## 5. Key position and format

Single keys by position, first to fifth: 4, 4, 4, 4, 4 (20 singles). Option order, parity, prompt length and vitals format pass the tests. No em or en dashes, no semicolons in strings, no mnemonics, no personal names outside citations.

## 6. Physician-level items (not grounds for failure)

1. cqi-39 q1: in practice the subsequent physician will tell the patient today that glass was found and needs exploration. The key concerns disclosure of the possible miss, which the CPSO policy sequences after discussion with the previous physician. A physician may judge whether telling him at once is equally reasonable in a busy ED. The options do not offer it, so the key stands.
2. cqi-38 q5: the preconditions come from a 2006 US white paper. No Canadian guidance on spread was found.
3. cqi-37 q4: CIAF lists a patient or family representative as a possible team member. No option includes one, so the key is the most appropriate offered, not a full team.
4. House style: cqi-37 q4 update spells "analyse". Canadian usage prefers "analyze", and the bank mixes both. Advisory only.
5. "ED" appears in the cqi-37 q4 key. It is not on the SAMP_SPEC list of abbreviations allowed without expansion, but it is used across s30 and the Q500 batches. Advisory only.

## Sources verified this round

- CPSO. Disclosure of harm, https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Disclosure-of-Harm (provision 16, dates).
- Massoud MR and others. A framework for spread. IHI 2006. Landing page https://www.ihi.org/library/white-papers/framework-spread-local-improvements-system-wide-change opens to the right document (title, year). Full text read from https://qi.elft.nhs.uk/wp-content/uploads/2026/02/a-framework-for-spread.pdf.
- Canadian Incident Analysis Framework 2012, full text from https://ualberta.scholaris.ca/server/api/core/bitstreams/bd7a09f1-aab5-4e21-8116-fe4c6ac0f0ad/content (section 2.4, section 3 team, Appendix C, glossary).
- AHS Laboratory bulletin 2014, https://www.albertahealthservices.ca/assets/wf/lab/wf-lab-bulletin-std-critical-notifiable-result-lab-processes.pdf (supports every claim in 37 q1, which fails for duplication, not for its source).
- Other sources unchanged since round 1 and verified there.

## Summary

5 SAMPs, 21 questions. 3 SAMPs pass (cqi-36, cqi-38, cqi-40). 18 questions pass, 3 fail: cqi-37 q1 (repeat of multiple-patients-12, medium), cqi-37 q3 (repeat of cqi-06 q3, cqi-16 q4 and cqi-02 q3, high), cqi-39 q4 (untrue distractor reason, medium, one-sentence fix). All 7 required fixes from round 1 were applied correctly. The writer's three flags are resolved in favour of the writer: the IHI 2006 paper supports 38 q5, the CPSO order supports the 39 q1 "first step" key, and CIAF supports the 37 q4 team makeup.
