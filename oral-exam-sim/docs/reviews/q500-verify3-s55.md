# Q500 fresh verification, round 3: s55, Infectious diseases

Reviewer: Preceptor (fresh independent AI audit, both lenses: clinical truth, and internal consistency and numbers). This reviewer did not write, edit or review s55 before. No SAMP, source or shared file was edited (REVIEW-RULES rule 1). This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: the two questions that failed in `docs/reviews/q500-verify2-s55.md` (49 q3, 50 q4). Writer report: "Round 3" in `docs/reviews/q500-writer-s55-r2.md`. Diff read: `git diff 74c3fbe -- oral-exam-sim/src/samps/s55/infectious-diseases.ts`. The diff touches only 49 q3 and the 50 q4 explanation. Nothing else in the batch changed.

Tests: `SAMP_BATCH=s55 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 132 tests passed.

## Verdicts

| SAMP | Verdict | Questions |
|---|---|---|
| infectious-diseases-49 | PASS | q3 PASS (flag), q1, q2, q4 passed in round 2 |
| infectious-diseases-50 | PASS | q4 PASS, q1 to q3 passed in round 2 |

Both questions pass. With 48, 51 and 52 passed in `q500-verify2-s55.md`, the whole s55 batch (5 SAMPs, 21 questions) has now passed fresh review.

## infectious-diseases-49 q3: PASS (with a mock-mode flag)

New question: which condition, if present, would most justify empiric antibiotics for watery diarrhea like hers. Key "Kidney transplant on tacrolimus" (position four).

- Accuracy. IDSA 2017 recommendation 36 read on the full text (PMC5850553): "In most people with acute watery diarrhea and without recent international travel, empiric antimicrobial therapy is not recommended (strong, low). An exception may be made in people who are immunocompromised or young infants who are ill-appearing." The key is the only option that is immune suppression. Every sentence of the explanation is true. "While stool tests are pending" is consistent with IDSA's advice to test immunocompromised people.
- Single defensible key. Age over 70, chronic kidney disease, hypothyroidism and type 2 diabetes are not the exception the recommendation names. Diabetes and advanced kidney disease carry some immune dysfunction, but "most justify" leaves the transplant recipient on a calcineurin inhibitor as the single best answer. The distractors come from her own history, which makes them plausible.
- KF3 tag honest. KF3 is identifying host factors such as immunosuppression that raise the risk of severe infection. The question asks the candidate to pick the host factor that changes management. It does test KF3. The old dishonest KF9 tag and the false codeine sentence are gone.
- Uniqueness. The catalogue `infectious-diseases.md` has host factor keys for bites, wounds, rabies, PID admission, influenza antivirals and otitis media, but none for diarrhea. A bank grep finds no other key or option "Kidney transplant on tacrolimus". The only tacrolimus key (headache-45) is the cause of a seizure, a different decision. It is not the same decision as 49 q2 (no antibiotic for her) or 49 q4 (dysentery findings).
- Mock-mode cue (SCORING-RULINGS B6), flag only. "If present, would most justify empiric antibiotics" implies she does not currently justify them, which is the q2 key. The same key is already implied by q4's prompt, which round 2 accepted as a flag. Rewording q3 alone would not remove the giveaway, so this adds no new leak. Optional, not required: a generic wording such as "Which of the following conditions would most support empiric antibiotics for acute watery diarrhea without travel?" would drop q3's share of the cue.
- House style. No semicolons, dashes, smart quotes or absolute words in the added text. Options alphabetical. No update line, which is allowed.

## infectious-diseases-50 q4: PASS

Key, options, prompt and stem unchanged (diff confirms only the explanation changed). Each reason checked against Burkey 2008 full text (PMC2581476):
- "a CD4 count of 51 to 200 x 10^6/L carried about six times the odds ... of a count above 500": Table 2 adjusted OR 6.43 (95% CI 2.04 to 20.23), reference over 500. True.
- "The cohort did not study hepatitis C, tobacco or methamphetamine smoking, or dental health": the variables were age, sex, race, HIV risk group, CD4, viral load, HAART, PCP and MAC prophylaxis, diabetes and ESRD. None of the four appears in the paper. True.
- "Her hepatitis C has been cured, so she no longer has that infection": follows from the stem. True.
- "Smoking and poor dental health are not forms of immune suppression, unlike a low CD4 count": true, and it covers both smoking options. It makes no unsourced comparative risk claim.

The false implication that these factors were tested and rejected is gone. The round 2 fix is applied as asked.

## Key positions and key features

Single keys by position, first to fifth: 4, 3, 5, 4, 4 (20 singles). Unchanged. Position three holds 25 percent, within SAMP_SPEC section 7. Every position used. Test agrees.

KF coverage: KF1 48 q2. KF2 48 q3, q4. KF3 49 q3, 50 q4. KF4 50 q2. KF5 51 q2. KF6 48 q1, 50 q1, 51 q1. KF7 49 q1, 51 q3. KF8 50 q3, 51 q4. KF9 49 q2, q4, 52 q1, q2. KF10 51 q5, 52 q3, q4. Every key feature is covered.

## Sources verified

- Shane AL et al. IDSA infectious diarrhea 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5850553/ (same document as the file's url). Recommendation 36 quoted above.
- Burkey MD et al. HIV Med 2008. https://pmc.ncbi.nlm.nih.gov/articles/PMC2581476/. Methods variables and Table 2.

## Summary

49 q3 and 50 q4 both pass. 49 q3 carries a B6 flag that duplicates the accepted q4 cue. No other text in s55 changed. With `q500-verify2-s55.md` for 48, 51, 52 and the other questions in 49 and 50, the whole s55 batch has passed fresh review.
