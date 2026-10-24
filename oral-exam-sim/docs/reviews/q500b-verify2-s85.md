# Q500B verify review 2: s85, chest pain (Revision 2)

File reviewed: `src/samps/s85/chest-pain.ts` (chest-pain-48 to chest-pain-52), whole batch. Context read: `docs/reviews/q500b-qa-s85.md`, `docs/reviews/q500b-verify-s85.md` and `docs/reviews/q500b-writer-s85.md` (Revision 1 and Revision 2). Fresh reviewer, did not write or review this batch before. Reviewer did not edit the batch (REVIEW-RULES rule 1).

Tests: `SAMP_BATCH=s85 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed, 128 of 128 (bank-wide near duplicate stem test 4.8 s).

## Earlier fails: status

| Earlier fail | Status |
|---|---|
| QA: 48 whole SAMP (aortic overlap), ",." typo | Resolved in Revision 1 (sternoclavicular septic arthritis) |
| QA: 50 q3 key named the mediastinum | Resolved ("It may be normal early in this illness") |
| QA: 50 q4 update "thoracic surgery" | Resolved ("on-call surgical services") |
| QA: 52 q1, q2, q4 (pneumothorax overlap, citation) | Superseded. 52 replaced in Revision 2 |
| Verify: 48 q3 distractor "It makes blood cultures unneeded" cued q4 | Resolved. Now "It suggests gout in the joint", explanation sentence replaced as asked |
| Verify: 48 q3 "normal" against "low-grade" temperature | Resolved. "A temperature below 38°C" and "This temperature" |
| Verify: 51 q2 explanation claimed no palpitations | Resolved. Stem now says "She has had no palpitations." |
| Verify: 51 q3 prompt cued q2 | Resolved. Prompt is now the generic red-flag wording given |
| Verify: 52 whole SAMP (pneumothorax repeats), UK spelling | Resolved. Replaced with superior sulcus (Pancoast) tumour. No UK spelling remains. New fault below (q1) |

## chest-pain-48: PASS

Ross 2004 abstract re-read in full through the Europe PMC REST API (PMID 15118542). Every figure matches: chest pain 78%, shoulder pain 24%, median 14 days, 65% febrile, bacteremia 62%, IV drug use 21%, distant infection 15%, diabetes 13%, trauma 12%, central line 9%, chest wall abscess or phlegmon 25%, mediastinitis 13%, S. aureus 49%, CT or MRI routinely for chest wall phlegmon, retrosternal abscess or mediastinitis, en bloc resection if present, empiric MRSA cover.

- q1 PASS. Options alphabetical, key defensible, distractor reasons true.
- q2 PASS. Distant infection and diabetes are the second and third commonest risk factors.
- q3 PASS. New distractor is false and no longer cues q4. Options alphabetical, key index 0. "Gout of the sternoclavicular joint is rare" is true. Temperature wording now consistent.
- q4 PASS. No competing correct option.
- Note (wording only, not a fail): q4 explanation lists three complications ("a chest wall phlegmon, a retrosternal abscess or mediastinitis") against two figures ("25% and 13%"). Ross gives 25% for chest wall abscess or phlegmon and 13% for mediastinitis. If touched again, "a chest wall abscess or phlegmon (25%), a retrosternal abscess or mediastinitis (13%)" would map exactly.

## chest-pain-49: PASS

Unchanged since two earlier passes. Re-checked: ESC 2015 major predictors match key [2, 4, 7]. ESC 2025 full text read this time (offsets 100000 to 300000): aspirin or NSAID at full anti-inflammatory doses usually every 8 hours plus colchicine is first line, corticosteroids when aspirin and NSAIDs are contraindicated at low to moderate doses plus colchicine, high-dose corticosteroids are a risk factor for recurrence, one or more prognostic predictors means admission as high risk, pulsus paradoxus listed among tamponade signs. No pericarditis-predictor or TB-pericarditis item elsewhere in the bank (s28 myopericarditis admission is a different decision).

Note: "a poor choice before tuberculosis has been excluded" is standard teaching but was not found in the 2025 text read.

## chest-pain-50: PASS

Unchanged since the first verify pass. Option order correct, "No antibiotic change until CT" last per B9. No descending necrotizing mediastinitis elsewhere in the bank (s12 peritonsillar item and s28 post-sternotomy item are different decisions).

Note (carried from the earlier verify, not a fail): the q3 key is the only option using "may". B5 is met because "points to" and "supports" are also soft claims.

## chest-pain-51: PASS

- Stem sentence added, q2 explanation now supported.
- q3 prompt now generic, no longer implies she has no red flags. Options alphabetical, key [1, 2, 3].
- Kofman 2024 and SCAMP 2012 were verified by both earlier reviews. Not re-fetched here (WebFetch budget). "Precordial catch" has no other hit in the bank.
- Note: q2 KF3 mapping is loose for a disposition question (physician judgement).

## chest-pain-52: FAIL (q1 explanation, with a matching q2 sentence)

New SAMP: superior sulcus (Pancoast) tumour, 63-year-old smoker, Horner syndrome, weak finger abduction, chest X-ray 6 weeks ago reported normal.

Overlap: no hit for Pancoast, superior sulcus, slipping rib or Mondor in `src/samps` or `src/cases` (all batches, Q500B s86 to s88 and cases batch18 to batch20 included). Horner hits are carotid dissection and lateral medullary items, unrelated. No repeat.

Source: Wilkinson 2026 (PMC12972777) opened and read. Verified: shoulder pain 60.0%, arm pain 25.6%, weight loss 20.3%, Horner 17.5%, T1 the commonest neuropathy (9.5%), radiographic error the most frequent cause of delay, Ichinohe 2006 with 78 missed and 20 misdiagnosed across 166 radiographs from 50 patients, "SSTs do not present with mechanical shoulder pain associated with movement", MRI the modality of choice with sensitivity 90%, CT preferred over X-ray and useful for staging, Spurling and traction tests for cervical radiculopathy, crepitus and passive range for glenohumeral disease.

- q1 FAIL (claim not supported as stated). The explanation says "the scoping review advises apical lung imaging when shoulder pain comes with a smoking history, weight loss or Horner syndrome". The review's sentence is: "In the patient with shoulder pain that has Horner's syndrome, and a history of smoking and/or weight loss, ... apical lung imaging should be included". Horner syndrome is required, and smoking or weight loss is added to it. The SAMP turns this into any one of three. **Fix:** replace that sentence with "A 45 pack-year smoking history is the strongest risk factor here for a lung cancer at the apex, and the scoping review advises apical lung imaging when shoulder pain comes with Horner syndrome and a smoking history or weight loss." Keep "He has all three." and the rest. Key, options and stem unchanged.
- q2 PASS on key, with one sentence to match the q1 fix. "with shoulder pain it should prompt apical imaging" overstates the same rule. **Fix:** change "and with shoulder pain it should prompt apical imaging" to "and with shoulder pain and his smoking history it should prompt apical imaging". The sympathetic chain mechanism is standard teaching, not in the review (writer's uncertainty 3). It is true and may stay.
- q3 PASS. Figures match the review. Options alphabetical. No mock cue.
- q4 PASS. CT chest with contrast is the only apical-imaging option. MRI is not offered, so no distractor is also correct. CT preferred over X-ray and for staging matches the source.
- Option order: q1 "45 pack-years of smoking" sorts by its words (the test's sortKey strips digits). Accepted house convention.
- Style: Canadian spelling ("tumour"), no dashes, no semicolons in content. "Spurling test" and "Horner syndrome" are correctly named eponyms, not personal names.

## Notes for the physician (not fails)

1. 52 q4: the key is CT in the ED. Some EDs would arrange urgent outpatient CT for a stable subacute presentation. The options do not set these against each other, so the key holds (writer's uncertainty 1).
2. 52: the only source is a 2026 scoping review, not a guideline (writer's uncertainty 2).
3. 52 q1 and q2 lead-ins name "lung cancer" and "the lung apex", so the SAMP never asks the candidate to recognize the diagnosis, and q3 and q4 are easier once those words are seen. This is earlier-into-later flow (B6) and matches the pattern of 48 (q1 names "an infected joint"), so it is not a fail.
4. 52 q2: weak finger abduction (lower trunk, T1) is also a Pancoast sign. Horner is keyed as more specific, because C8 or T1 radiculopathy also weakens the intrinsics. Defensible.
5. 48: Ross 2004 is old and has no URL (paywall). It is still the largest series.
6. 49 q3: "before tuberculosis has been excluded" is standard but not quoted from the 2025 text read.

## Sources verified in this review

- Wilkinson 2026: https://pmc.ncbi.nlm.nih.gov/articles/PMC12972777/ (read, exact recommendation sentence quoted above)
- Ross 2004: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:15118542%20AND%20SRC:MED&resultType=core&format=json (full abstract)
- ESC 2025: https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf192/8234510 (therapy, predictors, tamponade signs. Tables 7, 10 and 13 are images and could not be read)

Not re-opened here (WebFetch budget), relied on the two earlier reviews' verified quotes: ESC 2015, EACTS 2017, Chaulk 2025, Kofman 2024, SCAMP 2012.

## Summary

| Id | Verdict | Fix |
|---|---|---|
| chest-pain-48 | PASS | None (optional percentage mapping in q4) |
| chest-pain-49 | PASS | None |
| chest-pain-50 | PASS | None |
| chest-pain-51 | PASS | None |
| chest-pain-52 | FAIL | q1 explanation: the review requires Horner syndrome plus smoking or weight loss, not any one of three. Use the sentence given above. q2: "with shoulder pain and his smoking history it should prompt apical imaging". |

Overall: FAIL (1 item)
