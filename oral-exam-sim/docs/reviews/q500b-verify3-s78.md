# Q500B verify review 3: s78, Multiple patients (Revision 3)

Batch: `src/samps/s78/multiple-patients.ts` (multiple-patients-36 to multiple-patients-40). Earlier verdicts: `docs/reviews/q500b-qa-s78.md`, `docs/reviews/q500b-verify-s78.md` and `docs/reviews/q500b-verify2-s78.md`. Writer's report with Revision 1 to 3: `docs/reviews/q500b-writer-s78.md`. This reviewer did not write, edit or review this batch before and edited nothing in it (REVIEW-RULES rule 1).

The whole final batch was reviewed, not only the changed question.

## Tests

`SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 132 tests, all pass (13.1 s).

House style: no em or en dashes in the file, semicolons only in code, no personal names, no mnemonics, Canadian spelling ("anaesthetist", "centre", "neighbouring", "behaviour" not used in a US form).

## Earlier fails: resolution

| Earlier fail | Status |
|---|---|
| verify 2: 38 q3 repeat of delegated monitoring with call triggers (signed multiple-patients-30 q3, two s13 items) | Resolved for content. New q3 tests handling interruptions during a resuscitation with a screening nurse and a written task list. Bank grep for "interruption", "task list", "screen calls", "screened calls" and "phone calls" across `src/samps` and `src/cases` finds only handover and incident-factor items (s06 cqi, s13, s30 cqi), an s52 follow-up call item and a batch09 breaking-news interruption. None keys this decision. Not delegated monitoring, not the 6 hour point, not the sciatic examination, not tourniquet tasks, not role assignment. A new grammar cue is found in the key (below). |
| verify 1: 37 q3 and q4 cues, 38 q3 key length, 39 q3 COPD repeat, 40 q2 wording, 40 q3 and q4 repeats | Still resolved. Text unchanged since verify 2. |
| first QA: 36 cyberattack case, 37 chlorine, 38 6 hour point, 39 ectopic, 40 CO | Still resolved. No chlorine, CO, ectopic or anti-D content. |

## Recomputed numbers

- 38 q3 option lengths: key 39 characters, distractors 37, 40, 41 and 41. Key is not the longest.
- 38 q3: Westbrook 2010 abstract (PubMed E-utilities, opened): "Doctors were interrupted 6.6 times/h", "Doctors failed to return to 18.5% (95% CI 15.9% to 21.1%) of interrupted tasks", emergency department of a 400-bed teaching hospital, prospective observational study. The explanation's figures and "one observation study" of emergency physicians match.
- 39 q3 (680 / 15 = 45.3 minutes, alternatives at 7.6, 9.1, 11.3 L/minute, 230 L left at 30 minutes is 34%), 40 q4 (TREKK 30 mL every 10 minutes for 6 months to under 5 years), 37 times (contact 22:45, team ready about 23:45), 38 q2 (1 600 mL over 1 500 mL), 36 q3 (MAP about 61 mmHg): rechecked, all correct.

## Verdicts by SAMP and question

### multiple-patients-36 Screens go dark at shift change: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Activate downtime procedures. All options are verb phrases. |
| q2 | PASS | Double check of high alert drugs, judicious tests, forms matching current layout. |
| q3 | PASS | Paper order for IV antibiotics now (SSC 2026). Options are mixed noun and verb phrases, so the key does not stand out. |
| q4 | PASS | Scheduled huddles. All options are noun phrases. |
| q5 | PASS | Transcribe with assigned staff. All verb phrases. |

### multiple-patients-37 Two activations eight minutes apart: FAIL (q2)

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Man in cardiogenic shock first. |
| q2 | FAIL | Grammar cue, ruling B4 (key must share the grammatical form of the distractors). The four distractors are imperative verb phrases ("Await the end of the first case", "Give tenecteplase in the department", "Transfer to another PCI centre", "Wait for the morning catheterization list"). The key "Second team called in from home now" is the only passive noun phrase. This is the B4 example pattern ("Epoprostenol infusion restarted" as the only non-noun option). Missed by earlier reviews, but B4 is a standing ruling. Clinical content is correct. Exact fix: change the key text to "Call the second team in from home now" (37 characters, distractors 30 to 41, not longest). Alphabetical order then becomes Await, Call, Give, Transfer, Wait, so the key moves to index 1 and `correct` becomes 1. No explanation change needed. Check key position balance across the batch after the move. |
| q3 | PASS | Monitored bay with pads and a nurse. Options are place noun phrases. |
| q4 | PASS | Redirect to the other PCI centre. All verb phrases. |

### multiple-patients-38 Propofol drawn up in bay two: FAIL (q3)

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Postpone sedation, keep analgesia. The verify 2 low-confidence B6 note stands (q4 shows sedation happens later). |
| q2 | PASS | Massive transfusion, surgeon in now, trauma centre air transfer. |
| q3 | FAIL | New question. Clinical point and source are sound, and it is not a repeat. Grammar cue, ruling B4: the four distractors are imperative verb phrases ("Answer each call...", "Ask every caller...", "Leave the phones...", "Pause his care..."), and the key "Screened calls with a written task list" is the only noun phrase. A candidate can pick it on form alone. Exact fix: change the key text to "Have a nurse screen calls and list tasks" (40 characters, distractors 37 to 41, not longest). Alphabetical order then becomes Answer, Ask, Have, Leave, Pause, so the key moves to index 2 and `correct` becomes 2. No explanation change needed (it already names one nurse screening and a task list). Recheck single key position balance across the batch after this and the 37 q2 change. |
| q4 | PASS | Nurse monitors while you sedate and reduce. Options mix clauses and phrases, so no lone form. |

### multiple-patients-39 Alarms on every wall outlet: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Ventilated man and hypoxemic pneumonia patient first. |
| q2 | PASS | Titrate to target saturation. All verb phrases. |
| q3 | PASS | About 45 minutes. |
| q4 | PASS | Bulk cylinder resupply. All verb phrases. |

### multiple-patients-40 Two arrivals at 02:00 in the north: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Infant resuscitation first. The key is a noun phrase, but "Wound repair for the man before the infant" is also one, so the key is not the lone form. Low-confidence note: the writer may wish to make all five the same form while fixing the others. |
| q2 | PASS | RTVS options (checked against the page by verify 2). |
| q3 | PASS | Admit. All verb phrases. |
| q4 | PASS | 30 mL every 10 minutes. |

## Notes for the physician (not fails)

1. 38 q3: Westbrook 2010 supports the harm (interrupted tasks dropped). A screening nurse and a written task list are the practical response, not a tested intervention, as the writer says. With three nurses busy with a massive transfusion, a chest tube and a hip dislocation, the physician may prefer the unit clerk or charge nurse as the screener. The key wording ("a nurse") is still defensible.
2. 40: the tourniquet has been on about 3 hours 40 minutes by the q3 update and no question returns to the man (carried from verify 2).
3. 40 q2 tests the hours of one provincial service (carried from verify 2).

## Writer uncertainty (Revision 3)

Westbrook 2010 is a single-centre observational study: accepted. The explanation calls it "one observation study" and does not overstate it.

## Sources

| Source | Result |
|---|---|
| Westbrook 2010, https://pubmed.ncbi.nlm.nih.gov/20463369/ | Abstract opened via PubMed E-utilities (curl). Supports 38 q3. |
| RCCbc RTVS, TREKK v5.0 | Not re-opened. Verified by verify 2, text unchanged. |
| TJC SEA 67, Stoller 2000 | Not re-opened. Verified by verify 1, text unchanged. |

Could not open or not re-fetched (WebFetch not used, near its weekly limit): CCS/CAIC 2019 full text, BTS 2017 full text, ACEP 2014 policy, ATLS 11th edition, PaedCTAS 2008, SSC 2026, CTAS 2016. All are existing bank sources or were checked in earlier reviews. Note: `S.ctas2016` is defined in the source object but not cited by any SAMP in the batch. Harmless, but the writer may remove it.

No invented citations found.

## Summary

- multiple-patients-36: PASS.
- multiple-patients-37: FAIL. q2 key is the only non-imperative option (B4). Reword to "Call the second team in from home now", `correct: 1`.
- multiple-patients-38: FAIL. q3 content resolves the verify 2 repeat, but the key is the only noun phrase (B4). Reword to "Have a nurse screen calls and list tasks", `correct: 2`.
- multiple-patients-39: PASS.
- multiple-patients-40: PASS.

No keyed answer is clinically wrong, and every number recomputed is correct.

Overall: FAIL (2 items)
