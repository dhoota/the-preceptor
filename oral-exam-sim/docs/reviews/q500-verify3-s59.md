# Q500 verify round 3: s59, Continuous quality improvement

Fresh independent review by Preceptor of the round 3 revision, both lenses (clinical truth, and internal consistency and numbers). File reviewed: `src/samps/s59/cqi.ts` as committed in 0f19475. Diff checked against 44c996f (round 2 verdict). Previous verdict: `docs/reviews/q500-verify2-s59.md`. Writer report: "Round 3" in `docs/reviews/q500-writer-s59-r2.md`. This reviewer did not write, edit or review this batch before and edited no SAMP, source or shared file (REVIEW-RULES rule 1). Every fix below goes back to a writer, and the revision needs another fresh review. All items stay `reviewed: false`. This is an AI audit, not clinician verification.

Batch tests run by the reviewer: `SAMP_BATCH=s59 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts` passed (132 tests). The type check shows no s59 errors.

## Verdicts

| SAMP | Verdict | q1 | q2 | q3 | q4 | q5 |
|---|---|---|---|---|---|---|
| cqi-36 | PASS (unchanged) | PASS | PASS | PASS | PASS | |
| cqi-37 | FAIL | FAIL | PASS | FAIL (order only) | PASS | |
| cqi-38 | PASS (unchanged) | PASS | PASS | PASS | PASS | PASS |
| cqi-39 | PASS | PASS | PASS | PASS | PASS | |
| cqi-40 | PASS (unchanged) | PASS | PASS | PASS | PASS | |

Totals: 4 of 5 SAMPs pass. 19 of 21 questions pass. cqi-37 fails on two questions. q3's content is sound and only its place in the sequence must change.

## 1. Scope of the round 3 diff

`git diff 44c996f` touches only cqi-37 (title, stem, vitals, q1, q3, the q4 update spelling, sources), cqi-39 q4 (last explanation sentence) and the source list (`ahs-critical-results-2014` and `cdg-2011` removed, `sproul-smart-pumps-2023` added). cqi-36, cqi-38 and cqi-40 are byte for byte unchanged. No key-position renames were needed: the two new cqi-37 keys sit in position 5, where the replaced keys sat. No removed source is still cited, and every listed source is cited.

## 2. Required fixes from round 2

| Item | Required fix | Applied | Verdict |
|---|---|---|---|
| cqi-37 q1 | New KF 5 decision not in the catalogue, stem no longer retells multiple-patients-12 | Smart pump with a drug library. The stem is now a phoned positive blood culture lost at the desk, with a septic shock return. No hyperkalemia and no wide QRS. | Decision is new, but new defects (section 3) |
| cqi-37 q3 | Replace the repeated prompt-disclosure decision | Immediate action to protect other patients: review other recent phoned results (KF 1, CIAF 3.4) | Decision is new and supported, but out of sequence (section 3) |
| cqi-39 q4 | Replace the untrue last sentence | Replaced with the verdict's wording | Correct and complete. PASS |

Unrequested change (REVIEW-RULES rule 4): the cqi-37 q4 update now reads "analyze". Acceptable on its merits.

## 3. Required fixes (new findings)

### cqi-37 q1 (FAIL, medium confidence). Update cues the key, the prompt does not fit the key, and the explanation overstates what smart pumps catch

- **Cue.** The update says "The department's infusion pumps have no drug library". Only one option, "Smart pump with a drug library", supplies the missing item named in the update. A candidate can match the words without knowing the safety principle (Lens B 6).
- **Prompt and key do not fit.** The prompt asks which "pump practice" best reduces the risk of an error "in programming her infusion". The key is equipment the department does not have, so it cannot be used for her infusion tonight. The four distractors are bedside practices. The lead-in describes the distractors but not the key (ruling B8).
- **Overstated mechanism.** "so a mistyped rate is caught before the infusion runs" is true only for a rate outside the library's set limits. A mistyped rate inside the soft or hard limits is not caught. Sproul and Newman 2023 discuss hard and soft limits and say dose error reduction systems prevent infusion errors. They do not say that every programming error is caught. The sentence "A printed table, a rate written on the bag and a manual calculation all still rely on a person entering the right number by hand" also implies that a smart pump does not, but the nurse still enters the dose by hand. The pump checks it against limits.
- **Required changes:**
  1. Update: remove the phrase about the drug library. For example: "She needs a norepinephrine infusion. Nurses in the department calculate and enter each infusion rate by hand."
  2. Prompt: make it a department-level change, for example: "Which of the following changes would best reduce infusion programming errors in this department?" (10 to 30 words, and not "pump practices").
  3. Explanation, first sentence: "... check each programmed dose and rate against a drug library with set limits, so a rate outside those limits is flagged or blocked before the infusion runs." Then add one short sentence: "An error that falls within the limits can still get through." Then change the distractor sentence to "... all depend on a person calculating or entering the number correctly with no automated check."
  4. Keep the options and key. Position 5 is unchanged.
- Source: verified (section 5). It supports "standard of practice", "89% of Canadian hospitals" and "prevent medication infusion errors".

### cqi-37 q3 (FAIL on order only, medium confidence). Timeline runs backward

- q2's update says "The hospital starts an incident analysis." q3, which comes after it, says "The incident is reported the same day" and asks for the "immediate" action, with the distractor "Await the analysis before changing". The analysis has already started at q2, so the sequence runs backward (Lens B 4). CIAF also orders these steps the other way: Immediate response (3.4), then Prepare for analysis (3.5), then the Analysis process.
- The question itself is correct. The key is the single best answer. CIAF 3.4 reads "ensuring the safety of other patients who may be at risk" and "Local actions to reduce the risk of imminent recurrence may need to be taken immediately". The distractor reasons are true. The KF 1 tag (corrective action to prevent recurrence) is honest. The writer is right that CIAF does not name this exact action. Applying CIAF's general instruction to this stem is reasonable, and the explanation presents the action as an application.
- **Required change:** swap q2 and q3, so the order is q1 smart pump, q2 immediate action (update "The incident is reported the same day."), q3 initial information gathering (update "The hospital starts an incident analysis."), q4 team makeup. Renumber the ids to match. Options and keys do not change, so position balance is unaffected. No wording change is needed.

## 4. Questions that pass, with notes

- **cqi-37 q2 and q4:** these still read correctly against the new stem. The q2 explanation ("how the system really worked that night") fits the 23:05 call. The q4 explanation ("passed from the laboratory to the department desk and stopped there") fits the new stem.
- **cqi-37 stem:** clinically coherent. Blood cultures turned positive with Gram-negative bacilli about a day after they were drawn. Septic shock vitals (BP 78/40 mmHg, pulse 118/minute) and lactate 5.1 mmol/L are consistent. Advisory: the stem says she "recovers" in the ICU before q1 sends her back to needing norepinephrine. The writer may end the stem at "She is treated for septic shock" and move the ICU outcome to a later update. This is not a ground for failure.
- **cqi-39 q4:** the new last sentence is true. CIAF glossary: "Hindsight bias - the tendency to oversimplify and assign simple (human error) causes to events during post-event investigations (e.g. knowing the outcome of an event skews our perception of contributing factors)." The update ("should have been obvious, since it was found 10 days later and caused an infection") rests on knowing the outcome. One defensible key. PASS.
- **cqi-39 q1 to q3, cqi-36, cqi-38, cqi-40:** unchanged since the round 2 passes. Not re-adjudicated beyond confirming that the text is identical.

## 5. Uniqueness

I searched the cqi and multiple-patients catalogues (`scratchpad/q500/catalog/`), the other catalogues and `src/samps` and `src/cases` (all batches, including s54 to s70 and batch11 to batch15) for smart pump, drug library, dose error reduction, infusion pump, phoned or called results, look-back, "other patients at risk" and positive blood culture callbacks.

- **Smart pump key:** new. cqi-09 (s06) has a stem with pumps "often [with] no drug library loaded" and a q3 update about bypassing the library. It keys just culture responses (human error, at-risk behaviour), not a pump change. cqi-16 q3 hierarchy-of-effectiveness keys (scale that transmits weight, scales locked to kilograms) teach a related principle in a different decision. Advisory only.
- **Review other recent phoned results:** new as a key. The nearest teaching points are the impaired colleague oral case ("Review his discharges since his shift began and call back anyone with a gap") and cqi-07 q1 (features of a results follow-up system, including "Regular audit of the system itself"). Both are different decisions.
- **Stem:** a phoned result after discharge that is lost at the desk is still close in setting to multiple-patients-12 (a lost potassium) and cqi-07 (a discrepancy binder). The round 2 verdict allowed "keep the result after discharge but not a lost hyperkalemia result". The writer met that, and no remaining question keys a decision from either SAMP. Acceptable. The near-duplicate stem test passes.
- s55 infectious-diseases has a "look-back period" for partner notification. That is unrelated.

## 6. Coverage, positions and format

- **Key features (after the required swap, unchanged):** KF1 5 (37 q2, q3, q4, 39 q3, q4). KF2 2 (39 q1, q2). KF3 4 (36 q1, q2, 38 q1, 40 q4). KF4 3 (38 q2 to q4). KF5 1 (37 q1). KF6 6. Every cqi key feature is covered. KF5 rests on one question, so the q1 fix must keep KF5 (smart pumps fall under "safe medication practices" in the official KF 5 wording).
- **Single keys by position, first to fifth:** 4, 4, 4, 4, 4 (20 singles). Recounted by the reviewer.
- **Format:** no em or en dashes and no semicolons in strings, no personal names outside citations, vitals in the field. Option lengths for the new questions are within parity: 37 q3 key 34 characters against distractors of 30 to 34, and 37 q1 key 30 against 26 to 36.

## 7. Sources verified this round

- **Sproul A, Newman H. Get smart, Canada.** Can J Hosp Pharm 2023, 76(3). https://doi.org/10.4212/cjhp.3286 resolves to https://www.cjhp-online.ca/index.php/cjhp/article/view/3286, the right article. Full PDF read. Introduction: smart pumps "prevent medication infusion errors. As a result, smart pump technology has become a standard of practice, with 89% of Canadian hospitals using this technology." It also discusses hard and soft limits. The citation is accurate. The source supports the key, but not the overstated "a mistyped rate is caught".
- **Canadian Incident Analysis Framework, 2012.** Full text from https://ualberta.scholaris.ca/server/api/core/bitstreams/bd7a09f1-aab5-4e21-8116-fe4c6ac0f0ad/content. Section 3.4 (safety of other patients, imminent recurrence) supports 37 q3. Section 3.5 and the process figure give the step order used in section 3 above. The glossary entry on hindsight bias supports 39 q4.
- Other sources are unchanged and were verified in earlier rounds.

## Needs physician decision

None new. The round 2 physician-level items still stand.

## Summary

5 SAMPs, 21 questions. 4 SAMPs pass: cqi-36, cqi-38 and cqi-40 are unchanged, and cqi-39 passes now that the q4 sentence is fixed. cqi-37 fails on two counts:
- q1 (medium): the update names the missing drug library, which cues the key. The "pump practices ... her infusion" lead-in does not fit an equipment key. The explanation says smart pumps catch any mistyped rate, when they catch only rates outside the set limits. Rewording is needed, and the options and key stay.
- q3 (medium): its timeline runs backward after q2's "analysis starts". Swapping q2 and q3 fixes it, with no wording change.

Both new decisions are unique in the bank and supported by their sources. Key feature coverage is complete. Key positions are 4, 4, 4, 4, 4.
