# Q500B verify review: s85, chest pain (Revision 1)

File reviewed: `src/samps/s85/chest-pain.ts` (chest-pain-48 to chest-pain-52), whole batch. Context read: `docs/reviews/q500b-qa-s85.md` (first review) and `docs/reviews/q500b-writer-s85.md` including "Revision 1". Fresh reviewer, did not write or review this batch before. Reviewer did not edit the batch (REVIEW-RULES rule 1).

Tests: `SAMP_BATCH=s85 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000` passed, 128 of 128.

## First-review fails: status

| First-review fail | Status |
|---|---|
| chest-pain-48 whole SAMP (aortic overlap), typo ",." | Resolved. Replaced with sternoclavicular septic arthritis. Only other sternoclavicular item in the bank is the s29 msk posterior dislocation, unrelated. New faults below (q3). |
| chest-pain-50 q3 key names the mediastinum | Resolved. Key is now "It may be normal early in this illness". |
| chest-pain-50 q4 update "thoracic surgery" | Resolved. Now "on-call surgical services". |
| chest-pain-52 q1 claim not supported by Cheng | Resolved. Now "a common cause", cited to BTS 2023. |
| chest-pain-52 q2 repeat of batch03 history teaching | Resolved. Replaced with BTS 2023 high-risk characteristics menu, which no other item keys. |
| chest-pain-52 q4 repeat of batch03 "drain and admission" | NOT resolved. The replacement keys a 12 Fr small-bore drain, which the same signed batch03 case already keys and teaches. See chest-pain-52. |

## chest-pain-48: FAIL (q3)

Sternoclavicular septic arthritis, 61-year-old man with an infected diabetic foot ulcer. Ross 2004 abstract read in full through the Europe PMC REST API (PMID 15118542). Every figure in the SAMP matches: chest pain 78%, shoulder pain 24%, median 14 days, 65% febrile, bacteremia 62%, IV drug use 21%, distant infection 15%, diabetes 13%, trauma 12%, central line 9%, chest wall abscess or phlegmon 25%, mediastinitis 13%, S. aureus 49%, routine CT or MRI, en bloc resection if phlegmon, abscess or mediastinitis, empiric cover may need MRSA.

- q1 PASS. Key defensible. Distractor reasons true.
- q2 PASS. Infected diabetic foot ulcer is both a distant infection and diabetes. "Two of the commonest" is accurate (IV drug use is first).
- q3 FAIL, two fixes.
  1. Cross-question cue (ruling B7, and B6 in mock mode). The distractor "It makes blood cultures unneeded" is false, so it tells the candidate that blood cultures are needed, which is half of the q4 key "Blood cultures and CT of the chest wall". **Fix:** replace that option with "It suggests gout in the joint" (options then read: "It does not exclude a septic joint", "It excludes a deep chest wall abscess", "It favours a viral illness", "It points to a muscle strain", "It suggests gout in the joint", key stays index 0). In the explanation replace "Bacteremia was present in 62%, so blood cultures are needed whatever the temperature." with "Gout of the sternoclavicular joint is rare, and a temperature below 38°C does not separate a crystal arthritis from a septic one."
  2. The explanation calls 37.6°C "a normal temperature" in one sentence and "a low-grade temperature" in another. **Fix:** change "A normal temperature also says nothing about a chest wall abscess" to "A temperature below 38°C also says nothing about a chest wall abscess", and change "A low-grade temperature does not point to" to "This temperature does not point to".
- q4 PASS. Blood cultures with CT is defensible as the single best next step, no IV antibiotic option competes. Joint aspiration is not offered, so no distractor is also correct. Key is the longest option (1.46 times the mean distractor, under 1.5).
- Source note (advisory, not a fail): Ross 2004 is old but its content is not contradicted by later work and it is the largest series. No URL is set. The Europe PMC and PubMed pages return 403 or 429 to this environment too, so leaving it without a URL is correct.

## chest-pain-49: PASS

Re-checked independently. ESC 2015 major predictors (fever over 38°C, subacute course, effusion over 20 mm, tamponade, no NSAID response in 7 days) match the q2 key [2, 4, 7]. Any one predictor calls for admission. q3 NSAID plus colchicine is the ESC 2025 first line, steroid reasoning correct. q4 pulsus paradoxus over 10 mmHg is correct, and the crackles reason is true. No pericarditis predictor or TB-pericarditis item elsewhere in the bank (grep of "poor prognosis", "predictor", "tuberculo" with pericard). Pulsus paradoxus also appears in batch02 malignant tamponade and s14/s16, but as a sign of tamponade in a new context it is not a repeated key decision. Option order and parity correct.

## chest-pain-50: PASS

Both first-review fixes applied correctly. Clinical content and EACTS 2017 and Chaulk 2025 support re-checked against the first review's verified text. Bank grep for "mediastinitis": s28 chest-pain post-sternotomy mediastinitis (different cause and decision), s05 esophageal perforation, s53 caustic ingestion, batch13 leak case. No descending necrotizing mediastinitis elsewhere.

Advisory, not a fail: the q3 key is the only option with "may". "It points to" and "It supports" are also soft claims, so ruling B5 is met, just. If the writer touches q3 again, "It is often normal early in this illness" or hedging one distractor ("It suggests an esophageal pill injury") would remove the doubt. The q4 update (CT hospital accepts her) rules out one q3 distractor ("transfer for CT unnecessary") but does not name the key. Acceptable.

## chest-pain-51: FAIL (q2 explanation, q3 prompt)

Kofman 2024 re-fetched: usually goes away with age, testing rarely needed once diagnosed, red flags are exercise-related pain, persistent or worsening pain, recent cough or fever, syncope and palpitations, family history of cardiovascular disease is a concern, upright posture, roll the shoulders back, deeper breaths.

- q1 PASS. The optional wording change was applied ("It is a clinical diagnosis made from the history and examination").
- q2 FAIL (Lens B 1, claim not in the stem). The explanation says "she has had no palpitations". The stem never states this. **Fix:** add "She has had no palpitations." to the stem after "...all at rest, and feels well between them." Alternatively delete ", and she has had no palpitations" from the explanation.
- q3 FAIL (mock-mode cue, ruling B6). The prompt "Which of the following features, if they were present in her history, would call for further cardiac testing such as echocardiography?" tells the candidate that she has none of these features and so needs no further testing, which is the q2 key ("Reassurance and posture advice"). **Fix:** reword the prompt to "Which of the following features in a child with chest pain are red flags that call for echocardiography?" (18 words). Options, key [1, 2, 3] and explanation stay.
- q4 PASS. Sudden death of a first-degree relative is a SCAMP pertinent positive and a Kofman concern.
- No overlap: "precordial catch" has no other hit in the bank.

## chest-pain-52: FAIL (whole SAMP, replace)

Secondary spontaneous pneumothorax in severe COPD, rural ED.

After Revision 1, two of the four questions still repeat signed content, and a third sits on a signed case's scored item:

| Question | Teaching point or key decision | Already in the bank |
|---|---|---|
| q4 (new) | 12 Fr small-bore drain for a symptomatic SSP, small bore as effective as large bore and less painful | `src/cases/batch03/secondary-pneumothorax-copd.ts` (reviewed: true): correct branch "I placed a 12 Fr Seldinger chest drain", rubric "Small bore chest drain, 12 to 14 Fr by Seldinger technique", teaching "Small bore drains are as effective as large ones and less painful", item "Places a small bore chest drain for a symptomatic secondary pneumothorax". This is the same case the first review cited, so the q4 fail is not resolved. |
| q3 | Under BTS 2023 the decision rests on symptoms, not the size of the rim | chest-pain-19 q3 (s28, reviewed: true): "The 2023 BTS guideline bases treatment on symptoms rather than size." The first review called this angle new. It is not. |
| q1 | Severe emphysema raises the probability of pneumothorax in a breathless COPD patient with sudden pain | batch03 case item "Considers pneumothorax early in a COPD patient with sudden pleuritic pain and unilateral findings". Close, though the first review let it stand. |

Only q2 (BTS high-risk characteristics) is new. batch03 already scores almost every ED decision for SSP in COPD (oxygen 88 to 92%, lung point, bulla versus pneumothorax, small-bore drain, admission, safe triangle and lidocaine dose, no clamping, tension, thoracic surgery referral, smoking and flying advice), so there is no unused KF2 decision left to put in q4. Rewriting q4 again would end in another repeat.

**Fix.** Replace chest-pain-52 with a SAMP on a different diagnosis, as was done for 48. Keep the slot's key feature map (q1 KF4, q2 KF4, q3 KF5, q4 KF2) so batch coverage stays as reported (KF1 2, KF2 4, KF3 6, KF4 5, KF5 3). Bank grep at review time found no hits in `src/samps` or `src/cases` for Pancoast tumour, slipping rib syndrome, Mondor disease or xiphodynia. Re-grep before writing, including the other Q500B batches. Use a current source with a verified URL. Do not write another pneumothorax SAMP.

House style, for any text reused: the q2 explanation uses UK spelling ("haemodynamic" twice, "haemopneumothorax"). Canadian spelling is "hemodynamic" and "hemopneumothorax".

## Writer's "still uncertain" items

1. Ross 2004 age: acceptable, see 48.
2. 52 q4 shows she will be drained (mock mode, q3): moot, 52 is replaced.
3. "Significant hypoxia" with no number: moot, 52 is replaced.

## Other checks

- House style: no em or en dashes, no semicolons in content, no mnemonics, no personal names, `author: "Preceptor"`, `reviewed: false`, `version: 1`. "Paediatr" and "paediatricians" are in a journal title and are correct. UK spelling only in 52 q2.
- Scoring rulings: no write-in keys in this batch. No reversal of a prior ruling found.
- Key positions, option order and parity: passed the tests. These must be re-checked after 52 is replaced and the 48 q3 option is changed.

## Sources verified in this review

- Ross 2004 abstract: https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:15118542%20AND%20SRC:MED&resultType=core&format=json (full abstract read, all figures match)
- Kofman 2024: https://pmc.ncbi.nlm.nih.gov/articles/PMC11261817/ (re-fetched)
- ESC 2015, ESC 2025, EACTS 2017, Chaulk 2025, SCAMP 2012, Cheng 2024: as verified in the first review. The SAMP claims checked against those quotes.

## Summary

| Id | Verdict | Fix |
|---|---|---|
| chest-pain-48 | FAIL | q3: replace the distractor "It makes blood cultures unneeded" (it cues the q4 key) with "It suggests gout in the joint", and change the explanation sentences as given. Make the temperature wording consistent ("below 38°C"). |
| chest-pain-49 | PASS | None |
| chest-pain-50 | PASS | None (optional q3 hedge note) |
| chest-pain-51 | FAIL | q2: add "She has had no palpitations." to the stem or drop the claim. q3: reword the prompt to "Which of the following features in a child with chest pain are red flags that call for echocardiography?" |
| chest-pain-52 | FAIL | q4 repeats the signed batch03 case (12 Fr small-bore drain). q3 repeats signed chest-pain-19 (symptoms not size). Replace the whole SAMP with a non-pneumothorax diagnosis, same KF map. |

Overall: FAIL (3 items)
