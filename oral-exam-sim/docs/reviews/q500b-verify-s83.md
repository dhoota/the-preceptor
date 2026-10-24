# Q500B verification review: s83 revised, Toxicology (tox-48 to tox-52)

Reviewer: Preceptor independent QA, fresh reviewer. I did not write, edit or first-review this batch, and I changed nothing in it (REVIEW-RULES rule 1). All items stay `reviewed: false`.

Read first: Q500B_BRIEF.md (Independent QA), REVIEW-RULES.md, SCORING-RULINGS.md, SAMP_REVIEW_BRIEF.md, the first review (q500b-qa-s83.md) and the writer's report with its "Revision 1" section (q500b-writer-s83.md). I reviewed the whole final batch, not only the changes.

## Tests

`SAMP_BATCH=s83 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 132 of 132 pass (bank-wide near duplicate stem test 4.7 s).

House style: no em or en dashes and no semicolons in content strings. No US spellings found ("labour", "counsellor", "centred"). No mnemonics. No personal names outside citations.

Counts recomputed: 21 questions, 20 single and 1 menu. Key features kf1 3, kf2 1, kf3 2, kf4 3, kf5 1, kf6 1, kf7 2, kf8 8, all covered. Single key positions 0 to 4: 5, 3, 5, 5, 2, none above 25 percent of 20. These match the writer's Revision 1 figures.

## First-review fails: resolution

| Item | First-review fail | Status |
|---|---|---|
| tox-48 q2 | Four hour untreated gap, "Systolic BP of 150 mmHg" not in the case, unclear "repeated with each dose" sentence | Resolved. Update now opens "Thirty minutes later, while his IV is being placed". Option is "BP of 158/94 mmHg", the stem value. Sentence now "On their own, pulse and blood pressure do not mark severe withdrawal." |
| tox-49 q2 | Update revealed the q1 glucose key. Finnegan "is being replaced" wording | Resolved. Update deleted. Finnegan sentence is the exact wording asked for. |
| tox-50 q5 | Update revealed the q4 key | Resolved. q5 deleted, teaching moved to the end of the q4 explanation with correct numbers. |
| tox-51 q3 | Gliclazide update revealed q1 and q2 keys. Octreotide key decision repeated | Resolved. Octreotide question removed. No update names the sulfonylurea or the home search result. New q4 is judged below. |

Optional first-review points also applied (tox-48 q1 thyroid reason, tox-51 q1 insulin wording, tox-52 q4 "now" removed). The physician note on tox-49 discharge age was acted on (unrequested stem change, judged below).

## Verdicts by question

| SAMP | Q | Verdict | Finding and exact fix | Confidence |
|---|---|---|---|---|
| tox-48 | q1 | PASS | GBL to GHB, half-life 20 to 30 minutes and onset 1 to 6 hours verified in Weaver. Optional: the last two sentences both end "his symptoms began when his supply ran out". Shorten the last to "Nothing in his history suggests thyroid disease." | |
| tox-48 | q2 | PASS | Timeline now coherent. Pulse 118 to 112 checks. Delirium with hallucinations is the only sign of severity among the options. | |
| tox-48 | q3 | PASS | Benzodiazepine first line, diazepam up to 300 mg a day (Weaver, verified). Single key. | |
| tox-48 | q4 | PASS | Phenobarbital and a high-acuity unit after escalating benzodiazepines (Weaver, verified). "First-line drug class" in the update remains an accepted mock-mode compromise. | |
| tox-48 | q5 | PASS | Rhabdomyolysis 7% (Wojtowicz). GHB not on standard screens (Weaver, verified). | |
| tox-49 | stem | PASS | Unrequested change (REVIEW-RULES rule 4): discharge "at 96 hours of age after a period of observation". Judged on merits: fits the CPS 72 to 120 hour observation advice for a longer-acting opioid, and symptoms from day 4 to 5 remain plausible for methadone. Day 5 with 1 day of symptoms agrees with discharge at day 4. | |
| tox-49 | q1 | PASS | Capillary glucose first. Weight 3.4 to 3.1 kg checks. Optional: "his fontanelle is flat with no focal signs" asserts a finding the stem never gives. Either add "There are no focal neurological signs" to the stem or end the clause at "his fontanelle is flat". | low |
| tox-49 | q2 | PASS | Key correct (CPS recommends ESC). Revised Finnegan sentence accurate. | |
| tox-49 | q3 | FAIL | Mock-mode cue (ruling B6) not raised by the first review. The q3 update, "He takes 5 to 10 mL per feed, sleeps less than 30 minutes at a time and cannot be settled within 10 minutes when held", is the Eat, Sleep, Console triplet with its own thresholds (feeding amount, sleep duration, consoling within 10 minutes). Shown at once in mock mode, it points straight to the q2 key "Eat, Sleep, Console assessment". Fix: reword the update as a plain clinical description without the ESC structure and thresholds, for example "Over the next 2 hours he feeds poorly and cries most of the time, even when his mother holds him." Keep the explanation's weight loss reasoning, and change "He cannot feed, sleep or be consoled" to "He is feeding poorly and cannot be settled". The key (ward admission with rooming in) is unaffected. | medium |
| tox-49 | q4 | PASS | Breastfeeding conditions (HIV negative, on OAT, no unregulated substances) all met in the stem and update. | |
| tox-50 | q1 | PASS | Anticholinergic toxidrome correctly described, each distractor reason true. | |
| tox-50 | q2 | PASS | | |
| tox-50 | q3 | PASS | 1 g/kg at 52 kg is 52 g, 50 g fine. Dart 2023 full text now reached: single dose charcoal "should be considered" in an acute liver-toxic ingestion unless the airway is at risk, and the text treats 4 hours as the usual limit ("may be warranted longer than 4 hours" only for high-risk or extended-release products). The explanation's 4 hour window is supported. | |
| tox-50 | q4 | PASS | Dart 2023 full text verified: with an anticholinergic or opioid co-ingestant, a first level above 10 mcg/mL but below the treatment line needs a repeat "4 to 6 hours after the first measurement". Treatment line 150 mcg/mL at 4 hours. Numbers recomputed at 6.62 umol/L per mg/L: 480 is 72.5 mg/L, 1000 is 151, 66 is 10, 690 is 104, 8 hour line 75 mg/L is 497 umol/L. The added closing sentence is correct. | |
| tox-51 | q1 | PASS | Key defensible. Revised insulin wording is pharmacologically sound and matches the batch07 CCB case teaching. Note: the cited source (Glatstein) supports refractory sulfonylurea hypoglycemia but not the calcium channel blocker sentence, and St-Onge 2017 does not discuss it either. Acceptable as standard teaching. | low |
| tox-51 | q2 | PASS | Low-confidence note only: the update "She says she took only her own tablets" plus a prompt asking what will "identify the cause" leans toward a second drug, but it names none, so it does not give the q1 key away. | low |
| tox-51 | q3 | PASS | St-Onge 2017 verified: norepinephrine or epinephrine in shock, norepinephrine preferred in vasodilatory shock (1D), dopamine suggested against (inconsistent effect), vasopressin not supported as a single agent and no add-on recommendation, glucagon and methylene blue not recommended or suggested. Calcium gluconate 3 g within dosing. Overlap noted below. | |
| tox-51 | q4 | FAIL | Mock-mode cue (ruling B6). The q4 update, "She is moved to the intensive care unit on a norepinephrine infusion", names the q3 key, and all questions show at once in mock mode. Fix: change the update to "She is moved to the intensive care unit on a vasopressor infusion." The explanation may keep "which norepinephrine treats", because explanations are not shown before answering. On merits (new question, rule 4): the key is correct. St-Onge 2017 makes high dose insulin first line with other first-line treatments "if evidence of myocardial dysfunction is present" (1D), and suggests it without dysfunction only in refractory shock or periarrest (2D). Each distractor's reason is true. | high |
| tox-52 | q1 | PASS | PAWSS recomputed: threshold met, intoxicated in the last 30 days 1, past withdrawal 1, autonomic signs 1, total 3. | |
| tox-52 | q2 | PASS | CRISM 2023 recommendation 6 verified: consider gabapentin, carbamazepine or clonidine as an outpatient when PAWSS is under 4, inpatient if there are barriers or a history of complicated withdrawal (he has neither). | |
| tox-52 | q3 | PASS | Blackouts, withdrawal seizures and alcohol with a benzodiazepine in the last 90 days are each PAWSS items. The other four are not. "Any two lift 3 to at least 5" checks. | |
| tox-52 | q4 | PASS | CRISM recommendation 7 and its outpatient exception verified and stated correctly. | |

## SAMP verdicts

| SAMP | Verdict |
|---|---|
| tox-48 | PASS |
| tox-49 | FAIL (q3) |
| tox-50 | PASS |
| tox-51 | FAIL (q4) |
| tox-52 | PASS |

## Overlap (whole bank, keyword search)

Searched src/samps and src/cases for butyrolactone and GHB withdrawal, Eat Sleep Console and neonatal abstinence, PAWSS, high dose insulin, amlodipine, repeat or second acetaminophen level, anticholinergic with acetaminophen, hidden sulfonylurea and gabapentin, including the other new Q500B batches (s84 to s88).

- GHB withdrawal, neonatal opioid withdrawal, PAWSS triage: no other hits. New.
- Repeat acetaminophen level for an anticholinergic co-ingestant: tox-01 (s18) and s53 hits are about standard nomogram use and stopping criteria. New.
- Hidden sulfonylurea: only a distractor in s49 seizures (propranolol infant) and a toddler collateral point in s07 loc. No conflict.
- tox-51 q3 and q4 (vasopressor choice by echo, high dose insulin for poor contraction): echoes tox-04 q3 (s18, verapamil, calcium, high dose insulin and vasopressors first line, write-in) and the batch07 oral case "calcium-channel-blocker-overdose.ts", whose rubric teaches "Echo separates vasodilation from pump failure" and "Starts norepinephrine for vasodilatory shock and adds epinephrine for poor contractility". The SAMP's decisions are narrower (pure dihydropyridine vasodilation, indication for insulin), so I pass them, but the pair together retells the oral case's echo-guided shock teaching. Flagged for the physician.
- No contradiction of a signed-off item or a SCORING-RULINGS entry found. The batch has no write-in match phrases, so rulings 1 to 4 and section A do not apply.

## Sources

Verified by me with WebFetch:
- Weaver CMAJ 2023, https://pmc.ncbi.nlm.nih.gov/articles/PMC10241545/ : half-life, onset, benzodiazepines first line, diazepam 300 mg a day, phenobarbital with high-acuity monitoring, not on standard screens. Does not mention antipsychotics (that point rests on Tay, listed).
- St-Onge Crit Care Med 2017, https://pmc.ncbi.nlm.nih.gov/articles/PMC5312725/ : as at tox-51 q3 and q4.
- Dart JAMA Netw Open 2023, full text at https://jamanetwork.com/journals/jamanetworkopen/fullarticle/10.1001/jamanetworkopen.2023.27739 : co-ingestant repeat level rule and charcoal statements as at tox-50 q3 and q4. This closes the first review's open physician item. The SAMP URL (PubMed record 37552484) is real and points to this article.
- Wood CMAJ 2023 (CRISM), https://pmc.ncbi.nlm.nih.gov/articles/PMC10581718/ : recommendations 6 and 7.

Could not open this round (not guessed, relying on the first review's verification):
- CPS 2025, https://cps.ca/en/documents/position/nas-nows : the site returned a bot-verification page, and Europe PMC search returned 503. The 72 to 120 hour observation window, ESC thresholds, morphine dose and breastfeeding conditions were not re-checked by me.
- Tay 2022 (dovepress), Wojtowicz CJEM 2008 (Cambridge), Glatstein Clin Toxicol 2012 (PubMed 23046209) and Maldonado Alcohol 2014 (no URL): not reopened. PAWSS items checked against my knowledge of the published scale.

## Needs physician decision

- tox-51 q3 and q4: overlap with the batch07 CCB oral case and tox-04 (see Overlap).
- tox-49: CPS page could not be reopened this round. Confirm the 96 hour discharge wording against the CPS statement.

## Summary

21 questions reviewed: 19 pass and 2 fail. All four first-review fails are resolved. Both new fails are mock-mode cues (ruling B6): tox-49 q3's update restates the ESC criteria that are the q2 key, and tox-51 q4's update names norepinephrine, the q3 key. Each needs a one-line rewording. No key is clinically wrong, and every number and score recomputed correctly. Dart 2023 is now verified in full text for tox-50.

Overall: FAIL (2 items)
