# Writer report: batch s59, revision round 2 (Continuous quality improvement)

File: `src/samps/s59/cqi.ts`. Ids unchanged (cqi-36 to cqi-40, q1 to q5). All items stay `reviewed: false`, `version: 1`, `author: "Preceptor"`. Passing questions were not changed, except where a required fix needed it (the cqi-39 stem lost its last sentence, see below).

## Required fixes and how each was done

### cqi-37 q4 (duplicate disclosure statement)
Replaced. New decision (key feature 1): who should be on the incident analysis team. Key "Laboratory and ED staff with a facilitator". Distractors: the clerk's manager alone, emergency physicians and nurses only, hospital legal counsel and senior executives, senior laboratory managers only. Update added: "The quality office now forms the team that will analyse the incident." Disclosure in this SAMP is now tested only by q3 (timing). Source: CIAF 2012 (Appendix C on team membership lists clinical and non-clinical staff, "including those involved in the incident and several who were not", with unit clerks named for medication events, and a facilitator with expertise in analytical methods. Section 2.4 advises including people not aware of the details of the incident to reduce bias).

### cqi-38 q5 (duplicate sustain decision)
Replaced. New decision (key feature 6): what must be in place before the change is spread to the region's other emergency departments. Key "Executive sponsor and a day-to-day lead". Distractors: consensus of every regional physician, identical pharmacy hours at each site, a published randomized trial, a separate project team at every site. Source: IHI, A framework for spread, 2006 (preconditions: leadership treats it as a strategic initiative, executive sponsorship and day-to-day leadership, successful sites with evidence. Responsibility moves to line managers. The organization's structure and how it makes adoption decisions shape the plan). `chartier-qi-primer-3` was then uncited and has been removed from `sources`.

### cqi-39 q1 (duplicate of cqi-24 q3)
Rewritten to test the CPSO subsequent physician duty itself. The patient's question was removed from the stem and replaced with "Nothing in the record or in his account suggests that anyone has told him about the glass", which sets up the policy's trigger (reason to believe an incident has not been disclosed). Prompt: "Which of the following is the most appropriate first step about the possible miss at the first visit?" Key "Speak with the first physician" (policy 16.1: "discuss the matter with the previous physician, where it is possible to do so"). The explanation then gives 16.2 (ensure disclosure at the first reasonable opportunity, disclosing to the extent of the subsequent physician's knowledge). Distractors (await his own questions, file a report with the College, leave disclosure to that hospital, record the concern in his chart only) differ from cqi-24's (lawyer, refuse to discuss, clear error, typical migraine).

### cqi-39 q4 (duplicate Donabedian classification)
Replaced. New decision (key feature 1): the bias that most threatens the analysis team's judgment of the first visit. Key "Hindsight bias". Distractors are bedside diagnostic biases (anchoring, availability, premature closure, search satisficing), which may have affected the first physician but not the analysts. Update: "Some team members say the glass should have been obvious, since it was found 10 days later and caused an infection." Source: CIAF 2012 glossary ("Hindsight bias: the tendency to oversimplify and assign simple (human error) causes to events during post-event investigations") and section 2.4 (bias leads to overestimating the likelihood of the outcome). `donabedian-1988` was then uncited and has been removed.

### cqi-40 title and stem (reused new chief framing)
The title is now "After a safety culture survey". The stem now opens with the department receiving its staff patient safety culture survey results, and ends with a staff physician and the nurse manager asked to co-lead the response. There is no new chief. The four decisions are unchanged.

### cqi-40 q4 (reused indicator, unsupported distractor reason)
The indicator is now the median time from triage to assessment by the crisis team for adults in a mental health crisis. That indicator is not in the cqi catalogue. The stem now states a target ("a median of 60 minutes or less"). The numbers were recomputed: overall median 52 minutes meets the target. Lowest income fifth 74 minutes, highest 41 minutes. 74 / 41 = 1.80, so the explanation says "1.8 times", and 74 minus 41 = 33 minutes. The distractor "Wait times meet the target for all groups" is now rejected because 74 is above 60. The speculation distractor is now "Low-income patients have milder crises".

### QCIPA URL (advisory)
I opened https://www.ontario.ca/laws/statute/16q06. Its HTML title reads "Quality of Care Information Protection Act, 2016, S.O. 2016, c. 6, Sched. 2". I also downloaded https://www.ontario.ca/laws/docs/16q06_e.doc, which carries the same title. The URL has been added to `qcipa-2016`.

## Key feature coverage after revision

| KF | Questions |
|---|---|
| 1 | 37 q2, 37 q4, 39 q3, 39 q4 |
| 2 | 37 q3, 39 q1, 39 q2 |
| 3 | 36 q1, 36 q2, 38 q1, 40 q4 |
| 4 | 38 q2, 38 q3, 38 q4 |
| 5 | 37 q1 |
| 6 | 36 q3, 36 q4, 38 q5, 40 q1, 40 q2, 40 q3 |

Key positions across the 20 single questions, first to fifth: 4, 4, 4, 4, 4. The key is the single longest option in 5 of 20 (25 percent). Type check and the three batch test files pass (132 tests).

## Uniqueness check

I read the full catalogue at `scratchpad/q500/catalog/cqi.md`: cqi-01 to cqi-35, the cqi-related SAMPs from other topics (anaphylaxis-04 and 11, multiple-patients-04 and 12), the oral cases (ethics-goals-of-care, colleague-at-handover, discrepancy-callback, waiting-room-slump) and this batch's drafts. I grepped every catalogue for "analysis team", "hindsight", "spread", "sponsor", "stratif", "equity", "crisis team" and "mental health assessment".
- No item keys the makeup of an analysis team. cqi-22 q2 (multidisciplinary team to organize a large-scale disclosure) and cqi-34 q1 (interprofessional M&M rounds) are different decisions.
- No item tests hindsight bias. cqi-20 q1 keys anchoring as a contributing factor at triage, which is a clinician bias in a contributing factor list, not the analysts' bias.
- Spread appears only as one accept line ("Plan to sustain and spread") in the write-in cqi-03 q3. No item keys preconditions for spread or executive sponsorship.
- The subsequent physician's first step (speak with the previous physician) is not keyed anywhere. cqi-24 q3 keys what to say to the patient.
- The crisis team indicator appears nowhere as a quality indicator. suicide-risk keys crisis team follow-up and a crisis assessment of a son, which are clinical dispositions.
- Patient numbers are new. No other item uses the 52, 60, 74 or 41 minute figures with this indicator.

## Sources (verified this round)

- Canadian Incident Analysis Framework, CPSI, 2012. I read the full PDF from the University of Alberta repository (https://ualberta.scholaris.ca/server/api/core/bitstreams/bd7a09f1-aab5-4e21-8116-fe4c6ac0f0ad/content): section 2.4 "Avoiding cognitive traps", the analysis team membership section, Appendix C and the glossary. No URL was added to the citation because the link is a repository download handle.
- IHI. A framework for spread: from local improvements to system-wide change. 2006. I confirmed the landing page https://www.ihi.org/library/white-papers/framework-spread-local-improvements-system-wide-change (title, year and authors) and added it as the URL. I read the text from a full copy at https://qi.elft.nhs.uk/wp-content/uploads/2026/02/a-framework-for-spread.pdf. The paper gives its own citation as "Massoud MR, Nielsen GA, Nolan K, Nolan T, Schall MW, Sevin C", and that author list is used.
- CPSO. Disclosure of harm. https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Disclosure-of-Harm. Provisions 16.1 and 16.2 were reread.
- Ontario. Quality of Care Information Protection Act, 2016. https://www.ontario.ca/laws/statute/16q06 (see above).
- I also read the Chartier part 3 page (https://doi.org/10.1017/cem.2018.380) and considered it for 38 q5. It supports local context and dissemination but not the preconditions. It is no longer cited.

## Uncertain

- 38 q5: the preconditions come from a 2006 IHI white paper, not from a Canadian source. No Canadian guidance on spread was found.
- 39 q1 asks for the "first step". The CPSO policy lists discussing with the previous physician (16.1) before ensuring disclosure (16.2), and that order is what the key relies on. A reviewer may want to check that disclosing to him straight away is not equally defensible. The explanation presents it as the next duty, not as an alternative.
- 37 q4: CIAF says team composition varies, so the key is worded as the most appropriate makeup, not the only one. Executives may support the analysis at arm's length, so the distractor is "legal counsel and senior executives" as the whole team.

## Round 3

Verdict applied: `docs/reviews/q500-verify2-s59.md`. Only `src/samps/s59/cqi.ts` and this report were edited. Ids unchanged.

### cqi-37 q3 (repeat of prompt disclosure, cqi-06 q3, cqi-16 q4, cqi-02 q3)
Replaced with a key feature 1 decision: the immediate action that best protects other patients who may already be at risk. Key "Review other recent phoned results". Distractors: wait for the analysis, email a reminder to clerks, move the clerk to other duties, post the critical result policy. Update: "The incident is reported the same day." Source: CIAF 2012 section 3.4 (Immediate response), read in full this round. It places "ensuring the safety of other patients who may be at risk" with the first actions, and says "local actions to reduce the risk of imminent recurrence may need to be taken immediately". Catalogue check: no item keys this action. cqi-22 q1 (contact the 37 known exposed patients) is the nearest. That is a disclosure decision for a known exposed group, not a search for results that have not been acted on. cqi-16 q2 (secure items) and cqi-10 q3 (report the incident) are other immediate-response steps, and neither is reused. The disclosure source `cdg-2011` is now uncited and has been removed. Key feature 2 stays covered by cqi-39 q1 and q2.

### cqi-37 q1 and stem (repeat of multiple-patients-12 and cqi-02 q1)
- **Stem.** The stem no longer tells a lost hyperkalemia result with a wide QRS return. The new case: blood cultures were drawn at a discharge 2 days ago. Gram-negative bacilli were phoned to the desk at 23:05, and the clerk's note never reached a physician. She now returns in septic shock (lactate 5.1 mmol/L, BP 78/40 mmHg) and recovers in the ICU. The Alberta setting was dropped because the Alberta bulletin is no longer cited. The title is now "A call to the desk at night", because "A result that arrived after discharge" echoed "A result that fell through the cracks". q2 and q4 still read correctly against the new stem. Neither relied on the potassium.
- **New q1 (key feature 5, safe medication use).** Update: she needs a norepinephrine infusion, and the pumps have no drug library, so rates are entered by hand. Key "Smart pump with a drug library". Distractors: hourly volume check, manual rate calculation, a rate set from a printed table, a rate written on the bag label.
- **Source.** Sproul A, Newman H. Get smart, Canada. Can J Hosp Pharm. 2023. https://doi.org/10.4212/cjhp.3286. I read the full PDF. It states that smart pumps with a dose error reduction system "prevent medication infusion errors", that they are a standard of practice, and that 89% of Canadian hospitals use them. The DOI resolves to the CJHP article page.
- **Catalogue check.** The list of key feature 5 decisions already taken (identifiers, hand hygiene, do-not-use abbreviations, BPMH and reconciliation, high-alert lists, SBAR, graded assertion) was avoided. I grepped every catalogue and `src/samps/s54` to `s70` for "pump", "drug library" and "dose error". The only hit is the cqi-09 stem ("pumps often have no drug library loaded"). That SAMP keys just culture and safety culture, not a pump practice, so this key is new.
- **Sources.** `ahs-critical-results-2014` is now uncited and has been removed.

### cqi-39 q4
The last explanation sentence was replaced with the verdict's wording: "Anchoring, availability, premature closure and search satisficing can affect any reasoning, including the team's, but the comment here rests on knowing the outcome, which is what defines hindsight bias."

### Spelling
SAMP_SPEC sets Canadian spelling but does not choose between "analyse" and "analyze". The bank uses "analyze" or "analyzed" 7 times and "analyse" once (this file). The verdict notes that Canadian usage prefers "analyze", so the cqi-37 q4 update now reads "analyze".

### Checks
- The type check shows no s59 errors. `SAMP_BATCH=s59` samps, samp-quality and citations tests pass (132).
- Single-question key positions, first to fifth: 4, 4, 4, 4, 4. Both replaced keys sit in the fifth position, filling the two fifth-position slots that cqi-37 q1 and q3 vacated.
- The key is the single longest option in 4 of 20 single questions.
- Key features: KF1 5, KF2 2, KF3 4, KF4 3, KF5 1, KF6 6.
- No semicolons or dashes.

### Uncertain
- cqi-37 q1 rests on a Canadian survey paper that describes smart pumps as preventing infusion errors and as standard practice. It is not a guideline. Accreditation Canada's infusion pump standard was not available to open.
- cqi-37 q3: the "check other recent phoned results" action is my application of CIAF's general instruction to protect other patients at risk. CIAF does not name this specific action.

## Round 4

Verdict applied: `docs/reviews/q500-verify3-s59.md`. Only cqi-37 in `src/samps/s59/cqi.ts` changed, plus this report.

### cqi-37 q1
- **Update.** Now reads "She needs a norepinephrine infusion. Nurses in the department calculate and enter each infusion rate by hand." The drug library cue is removed.
- **Prompt.** Now reads "Which of the following changes would best reduce infusion programming errors in this department?" It is a department-level change, so it fits the equipment key.
- **Explanation, first sentence.** Smart pumps now flag or block "a rate outside those limits". A new sentence follows: "An error that falls within the limits can still get through."
- **Explanation, distractor sentence.** Now reads "all depend on a person calculating or entering the number correctly with no automated check."
- **Unchanged.** Options, key (fifth position), key feature 5 and source.

### cqi-37 order
Old q3 (immediate protective action) is now q2. Old q2 (initial information gathering, update "The hospital starts an incident analysis.") is now q3. Ids were renumbered to match. Options, keys and explanations are unchanged. Both keys were already at their positions, so the position balance stays at 4, 4, 4, 4, 4.

### Advisory applied
The stem now ends "She is treated for septic shock." The ICU outcome moved to the start of the new q2 update: "She is admitted to the ICU, where she recovers. The incident is reported the same day." This one added sentence is the only wording change outside q1, and it comes from the advisory.

### Checks
The type check shows no s59 errors. `SAMP_BATCH=s59` samps, samp-quality and citations tests pass (132).

## Round 5

Per `docs/reviews/q500-verify4-s59.md`, cqi-37 q2 update set to "She is admitted to the ICU. The incident is reported the same day." and q3 update set to "She recovers in the ICU. The hospital starts an incident analysis." Nothing else changed. s59 type check clean and tests pass (132).
