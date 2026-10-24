# Q500B verification review 3: s83 revision 3, Toxicology (tox-48 to tox-52)

Reviewer: Preceptor independent QA, fresh reviewer. I did not write, edit or review this batch before, and I changed nothing in it (REVIEW-RULES rule 1). All items stay `reviewed: false`.

Read first: Q500B_BRIEF.md (Independent QA), REVIEW-RULES.md, SCORING-RULINGS.md, SAMP_REVIEW_BRIEF.md, the three earlier verdicts (q500b-qa-s83.md, q500b-verify-s83.md, q500b-verify2-s83.md) and the writer's report with its Revision 1 to 3 sections (q500b-writer-s83.md). I reviewed the whole final batch, not only the changes.

## Tests

`SAMP_BATCH=s83 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 132 of 132 pass (bank-wide near duplicate stem test 4.6 s). `npx tsc --noEmit -p . | grep samps/s83` prints nothing.

House style, checked by script: no em or en dashes and no semicolons in content strings. Canadian spelling ("labour", "counsellor", "centred", "Paediatric"). No mnemonics. No personal names outside citations.

Counts recomputed: 21 questions, 20 single and 1 menu. Key features kf1 3, kf2 1, kf3 2, kf4 3, kf5 1, kf6 1, kf7 2, kf8 8, all covered. Single key positions 0 to 4: 5, 3, 5, 5, 2, none above 25 percent of 20.

## Earlier fails: resolution

| Item | Earlier fail | Status |
|---|---|---|
| tox-48 q2 (qa) | 4 hour untreated gap, BP option not in the case, unclear sentence | Resolved. "Thirty minutes later, while his IV is being placed", option "BP of 158/94 mmHg", sentence reworded. |
| tox-49 q2 (qa) | Update revealed the q1 glucose key, Finnegan wording | Resolved. Update gone, Finnegan sentence as asked. |
| tox-50 q5 (qa) | Update revealed the q4 key | Resolved. q5 deleted, teaching at the end of q4 with correct numbers. |
| tox-51 q3 (qa) | Gliclazide update revealed q1 and q2 keys, octreotide repeat | Resolved. No update names the sulfonylurea or the home search result. Octreotide question gone. |
| tox-49 q3 (verify) | Update restated the ESC criteria | Resolved. Plain description, no ESC thresholds. |
| tox-51 q4 (verify) | Update named norepinephrine | Resolved. "on a vasopressor infusion". |
| tox-48 q1 (verify2) | Later prompts said "his withdrawal" | Resolved. q2 "his condition has become severe", q3 "initial treatment for him", q5 "a complication of his condition". No other later update or prompt names withdrawal or GHB. q4's "first-line drug class" names no drug and stays an accepted compromise. |
| tox-51 q1 (verify2) | No reason given for rejecting "Amlodipine toxicity" | Resolved. "Amlodipine toxicity explains her low blood pressure, but it would not explain a glucose that keeps falling on a dextrose infusion, so this unexpected result points to a second drug." True and in house style. The earlier duplicate sentence is gone. |

Revision 3 changed nothing else (checked against the text quoted in the earlier verdicts).

## Verdicts by question

| SAMP | Q | Verdict | Finding | Confidence |
|---|---|---|---|---|
| tox-48 | q1 | PASS | GBL converted to GHB, half-life 20 to 30 minutes, onset within hours. Each distractor reason true (no alcohol, no clonus, timing, no thyroid history). | |
| tox-48 | q2 | PASS | Delirium with hallucinations marks severity (Tay 2022). Pulse 118 to 112 checks. | |
| tox-48 | q3 | PASS | Benzodiazepine first line (Weaver 2023). Single key, diazepam not offered. | |
| tox-48 | q4 | PASS | Phenobarbital after benzodiazepine failure, high-acuity monitoring (Weaver, Tay). Moist skin against physostigmine is correct. | |
| tox-48 | q5 | PASS | Rhabdomyolysis 7% (Wojtowicz 2008). GHB not on standard screens. | |
| tox-49 | stem | PASS | Discharge at 96 hours fits the CPS 72 to 120 hour window for a longer-acting opioid (verified this round). Weight 3.4 to 3.1 kg is 8.8%. | |
| tox-49 | q1 | PASS | CPS differential includes hypoglycemia, hypocalcemia and CNS injury (verified). Explanation traces to the stem. | |
| tox-49 | q2 | PASS | CPS: ESC may replace Finnegan, Finnegan "widely used" (verified). Note only: the prompt "assessing his withdrawal" assumes withdrawal, but it does not point to q1's glucose key. | low |
| tox-49 | q3 | PASS | Supportive, non-drug care with rooming-in first (verified). Morphine 0.03 to 0.05 mg/kg PO (verified), second line here. Phenobarbital an adjunct only (verified). | |
| tox-49 | q4 | PASS | Breastfeeding when HIV negative, on established OAT and not using unregulated substances (verified). The stem and update meet each condition. | |
| tox-50 | q1 | PASS | Anticholinergic toxidrome. Each distractor reason true. | |
| tox-50 | q2 | PASS | Over-the-counter product, so the package photo is the best source. | |
| tox-50 | q3 | PASS | 1 g/kg at 52 kg is 52 g, 50 g fine. 4 hour window per Dart 2023 (full text verified in verify round 1). | |
| tox-50 | q4 | PASS | Recomputed at 6.62 umol/L per mg/L: 480 is 72.5 mg/L, 1000 is 151, 66 is 10, 690 is 104, 75 mg/L is 497 umol/L. 24 x 500 mg is 12 g, 231 mg/kg. Repeat 4 to 6 hours after the first level with an anticholinergic co-ingestant (Dart 2023). Key "in 4 hours" sits in that range. | |
| tox-51 | q1 | PASS | Refractory hypoglycemia on dextrose 10% points to a sulfonylurea (Glatstein 2012). Fail from verify2 fixed. | |
| tox-51 | q2 | PASS | Carried low-confidence note: "identify the cause" with "Check all medicines in the home" leans toward a second drug but names none. | low |
| tox-51 | q3 | PASS | St-Onge 2017: norepinephrine preferred in vasodilatory shock, dopamine suggested against, glucagon and methylene blue not recommended, no add-on recommendation for vasopressin. Calcium gluconate 3 g within 3 to 6 g. | |
| tox-51 | q4 | PASS | High dose insulin first line when myocardial dysfunction is present (St-Onge 2017). Distractor reasons true. Update no longer names the q3 key. | |
| tox-52 | q1 | PASS | PAWSS recomputed: threshold met (drank in 30 days), intoxicated in 30 days 1, past withdrawal 1, autonomic signs 1, total 3. BAL item correctly stated as 200 mg/dL or more. | |
| tox-52 | q2 | PASS | CRISM 2023 recommendation 6 (verified this round): PAWSS under 4, consider gabapentin, carbamazepine or clonidine as an outpatient. | |
| tox-52 | q3 | PASS | Blackouts, withdrawal seizures and alcohol with a benzodiazepine in 90 days are PAWSS items. The other four are not. Any two lift 3 to at least 5. | |
| tox-52 | q4 | PASS | CRISM recommendation 7 (verified): short-term benzodiazepine, ideally inpatient, outpatient only with close monitoring. Note only: the update "raises his score to 5" tells a mock-mode candidate that the q1 score was under 5, which leaves four options open. Not a give-away. | low |

## SAMP verdicts

| SAMP | Verdict |
|---|---|
| tox-48 | PASS |
| tox-49 | PASS |
| tox-50 | PASS |
| tox-51 | PASS |
| tox-52 | PASS |

## Overlap (whole bank, keyword search)

Searched src/samps and src/cases, including s72 to s88 and batch16 to batch20, for butyrolactone, GHB withdrawal, Eat, Sleep, Console, PAWSS, Prediction of Alcohol Withdrawal, neonatal opioid withdrawal, methadone with breastfeeding, amlodipine with norepinephrine, insulin, gliclazide or glucose, acetaminophen with an anticholinergic or diphenhydramine, and withdrawal, calcium channel, sulfonylurea, gliclazide, activated charcoal and acetylcysteine in the new batches. Nothing new since verify2. The hits in the new batches (s72 withdrawal centre referral, s81 naloxone-precipitated withdrawal, s82 alcohol withdrawal as a distractor, s87 multiple dose charcoal for phenobarbital, batch16 evacuee in withdrawal) do not repeat an s83 scenario or key decision. No contradiction of a signed-off item or a SCORING-RULINGS entry. The batch has no write-in match phrases.

## Sources

Verified by me this round:
- CPS 2025 (Narvey, Hamilton, Paquette). The cps.ca page again returned a bot-verification screen, but the same statement is in PMC (PMC12663786, French version, Paediatr Child Health 2025;30(7):632 to 640; the English version is PMC12814880). Confirmed: assessment for at least 72 hours and up to 120 hours after a longer-acting opioid, ESC may replace Finnegan, Finnegan widely used, morphine 0.03 to 0.05 mg/kg/dose PO every 3 to 4 hours, phenobarbital as an adjunct, breastfeeding conditions, differential including hypoglycemia, supportive non-drug care and rooming-in first. This closes the CPS item that verify and verify2 left open. Optional: the source could also carry the PMC URL, since the cps.ca page blocks automated checks.
- Wood CMAJ 2023 (CRISM), https://pmc.ncbi.nlm.nih.gov/articles/PMC10581718/ : recommendations 6 and 7 as above.

Could not open or not reopened this round (relying on earlier reviewers' verification):
- cps.ca/en/documents/position/nas-nows itself (bot verification page). Europe PMC search returned 503.
- Not reopened: Weaver CMAJ 2023 (PMC10241545), Tay 2022 (dovepress), Wojtowicz CJEM 2008 (Cambridge), Dart JAMA Netw Open 2023 (PubMed 37552484, full text verified in verify round 1), St-Onge Crit Care Med 2017 (PMC5312725), Glatstein Clin Toxicol 2012 (PubMed 23046209). Maldonado Alcohol 2014 has no URL. I checked the PAWSS items against the published scale.

## Notes for the physician (judgement, not fails)

- Carried over: tox-51 q3 and q4 echo tox-04 and the batch07 calcium channel blocker oral case (echo-guided vasopressor and insulin choice).
- tox-50 q3: the 4 hour charcoal window follows Dart 2023. Some Canadian poison centres use a shorter window for acetaminophen alone. The co-ingestant here makes 2.5 hours defensible.
- tox-52 q2: "Phenobarbital load, then discharge" is rejected. Some EDs use a single phenobarbital load for low-risk outpatients. CRISM does not mention phenobarbital, so the distractor stays wrong under the cited guideline.

## Summary

21 questions reviewed: 21 pass. All eight earlier fails (four from qa, two from verify, two from verify2) are resolved. No key is clinically wrong, and every number and score recomputed correctly. The CPS 2025 statement is now verified through PMC.

Overall: PASS
