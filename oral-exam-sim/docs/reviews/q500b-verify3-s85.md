# Q500B verify review 3: s85, chest pain (Revision 3)

File reviewed: `src/samps/s85/chest-pain.ts` (chest-pain-48 to chest-pain-52), whole batch. Context read: `docs/reviews/q500b-qa-s85.md`, `q500b-verify-s85.md`, `q500b-verify2-s85.md` and `q500b-writer-s85.md` (Revisions 1 to 3), plus the Q500B brief, REVIEW-RULES, SCORING-RULINGS and SAMP_REVIEW_BRIEF. Fresh reviewer, did not write or review this batch before. Reviewer did not edit the batch (REVIEW-RULES rule 1).

Tests: `SAMP_BATCH=s85 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed, 128 of 128 (bank-wide near duplicate stem test 4.6 s). `tsc` reports no errors for samps/s85.

## Earlier fails: status

| Earlier fail | Status |
|---|---|
| QA: 48 whole SAMP (aortic overlap), ",." typo | Resolved (Revision 1, sternoclavicular septic arthritis) |
| QA: 50 q3 key named the mediastinum | Resolved ("It may be normal early in this illness") |
| QA: 50 q4 update "thoracic surgery" | Resolved ("on-call surgical services") |
| QA: 52 q1, q2, q4 (pneumothorax overlap, citation) | Superseded, 52 replaced in Revision 2 |
| Verify 1: 48 q3 distractor cued q4 blood cultures | Resolved ("It suggests gout in the joint", explanation sentence replaced) |
| Verify 1: 48 q3 temperature wording inconsistent | Resolved ("below 38°C", "This temperature") |
| Verify 1: 51 q2 claimed no palpitations | Resolved (stem now says "She has had no palpitations.") |
| Verify 1: 51 q3 prompt cued q2 | Resolved (generic red-flag prompt) |
| Verify 1: 52 whole SAMP (pneumothorax repeats), UK spelling | Resolved (superior sulcus tumour, no UK spelling) |
| Verify 2: 52 q1 rule stated as any one of three | Resolved. Now "when shoulder pain comes with Horner syndrome and a smoking history or weight loss", which matches the review's sentence, re-read this session |
| Verify 2: 52 q2 matching sentence | Resolved ("with shoulder pain and his smoking history it should prompt apical imaging") |

## chest-pain-48: PASS

Ross 2004 abstract re-read in full (Europe PMC REST, PMID 15118542). All figures match: chest pain 78%, shoulder pain 24%, median 14 days, 65% febrile, bacteremia 62%, IV drug use 21%, distant infection 15%, diabetes 13%, trauma 12%, central line 9%, chest wall abscess or phlegmon 25%, mediastinitis 13%, S. aureus 49%, routine CT or MRI for chest wall phlegmon, retrosternal abscess or mediastinitis, en bloc resection if present, empiric MRSA cover.

- q1 to q4 PASS. Keys defensible, distractor reasons true, options alphabetical, no cross-question or mock cue.
- Note (not a fail): the Revision 3 wording in q4, "a retrosternal abscess or mediastinitis (13%)", ties 13% to both. Ross gives 13% for mediastinitis alone and no separate figure for retrosternal abscess. If touched again, "mediastinitis (13%)" with "a retrosternal abscess" named without a figure would map exactly. The teaching point is unaffected.

## chest-pain-49: PASS

Unchanged since three earlier passes. Re-read against the stem: ESC major predictors (fever over 38°C, subacute course, effusion over 20 mm) give key [2, 4, 7]. q3 NSAID plus colchicine first line, steroid reasoning true. q4 pulsus paradoxus over 10 mmHg, crackles reason true. q3 update ("She is admitted") follows q2 but names no predictor, so no mock cue on the menu key. No repeat in the bank (pulsus paradoxus hits in s14, s16, batch02 and batch03 are different decisions).

## chest-pain-50: PASS

Unchanged since the first verify. Chaulk 2025 re-fetched: "The most commonly accepted origin of infection is from odontogenic sources", cephalosporins with metronidazole or clindamycin, or piperacillin-tazobactam, chest pain among classic symptoms. Matches q1 and q4. No descending necrotizing mediastinitis elsewhere in the bank (batch03 Ludwig angina case has no mediastinitis content).

## chest-pain-51: PASS

Unchanged since verify 2. Kofman 2024 re-fetched: exercise-related pain, persistent or worsening pain, recent cough or fever, syncope and palpitations call for ECG and echocardiography. Matches q3 key [1, 2, 3] and the q2 explanation. "Precordial catch" has no other hit in the bank.

## chest-pain-52: PASS

Wilkinson 2026 (PMC12972777) re-fetched this session. Confirmed: "In the patient with shoulder pain that has Horner's syndrome, and a history of smoking and/or weight loss, apical lung imaging should be included", "SSTs do not present with mechanical shoulder pain associated with movement", 166 radiographs from 50 patients, T1 neuropathy the commonest (9.5%), shoulder pain 60%, CT preferred over X-ray and for staging, MRI the modality of choice with sensitivity 90%.

- q1 PASS. Revised sentence matches the source. "He has all three" is true (Horner syndrome, 45 pack-years, 5 kg loss).
- q2 PASS. Revised sentence matches. Horner keyed over weak finger abduction is defensible (C8 or T1 radiculopathy also weakens the intrinsics).
- q3 PASS. q4 PASS. No MRI option, so no distractor is also correct.
- Overlap: no Pancoast or superior sulcus hit in `src/samps` or `src/cases` (s86 to s88 and all case batches included). s33 dvt-pe names Horner from an apical tumour only as a distractor reason in an effort thrombosis item, not a keyed decision.

## House style

No em or en dashes. Semicolons only in TypeScript code lines, none in content. Canadian spelling ("tumour", "favours", "esophagus", "hemodynamic" not used). "Paediatr" and "paediatricians" are in a journal title. No mnemonics, no personal names (Horner, Spurling are eponyms). `reviewed: false`, `author: "Preceptor"`, `version: 1`. No write-in keys, so no scoring ruling applies, and none is reversed.

## Notes for the physician (not fails)

1. 52 q4 keys CT in the ED. Some EDs would arrange urgent outpatient CT for a stable subacute presentation. The options do not set these against each other.
2. 52 rests on one 2026 scoping review, not a guideline. 48 rests on Ross 2004, the largest series, with no URL (paywall).
3. 52 q1 and q2 lead-ins name "lung cancer" and "the lung apex", so the diagnosis is never asked and q3 (key "It is unreliable at the lung apex") is easier once those words are seen. Earlier-into-later flow under B6, as with 48 q1 "an infected joint".
4. 51 q2 maps a disposition question to KF3. Loose fit.
5. 49 q3 "a poor choice before tuberculosis has been excluded" is standard teaching, not quoted from ESC 2025.
6. 48 q4 13% mapping, see above.

## Sources verified in this review

- Ross 2004: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:15118542%20AND%20SRC:MED&resultType=core&format=json (abstract, full)
- Wilkinson 2026: https://pmc.ncbi.nlm.nih.gov/articles/PMC12972777/ (read)
- Chaulk 2025: https://pmc.ncbi.nlm.nih.gov/articles/PMC11982982/ (read)
- Kofman 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11261817/ (read)
- SCAMP 2012: https://pmc.ncbi.nlm.nih.gov/articles/PMC3487367/ (opened, 200)

Could not open (403 to this environment): ESC 2015 (academic.oup.com/eurheartj/article/36/42/2921/2293375), ESC 2025 (academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf192/8234510), EACTS 2017 (academic.oup.com/ejcts/article/51/1/10/2736969). The SAMP claims were checked against the quotes recorded by the QA and verify 2 reviews, and those SAMPs are unchanged since.

## Summary

| Id | Verdict | Fix |
|---|---|---|
| chest-pain-48 | PASS | None (optional 13% mapping note) |
| chest-pain-49 | PASS | None |
| chest-pain-50 | PASS | None |
| chest-pain-51 | PASS | None |
| chest-pain-52 | PASS | None |

Overall: PASS
