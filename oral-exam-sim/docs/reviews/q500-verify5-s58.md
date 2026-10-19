# Q500 verify round 5: s58 (shock-52 q2)

Fresh independent review of the round 5 wording fix required by `docs/reviews/q500-verify4-s58.md`.

## Verdict

**PASS.** shock-52 q2 now passes. With shock-48, 49, 50 and 51 and shock-52 q1, q3 and q4 already passing in `q500-verify4-s58.md`, the whole s58 batch has passed fresh review.

## Checks

| Check | Finding |
|---|---|
| Diff scope | `git diff ba0e221 -- oral-exam-sim/src/samps/s58/shock.ts` shows two changed lines, both in shock-52 q2. The only other file in the diff is the writer note `q500-writer-s58-r2.md`, which adds a round 5 paragraph. The working tree is clean. |
| Prompt | Now exactly "Which of the following is the most appropriate next step in his resuscitation?" as required. |
| Explanation | The fifth sentence now reads exactly "Waiting for an HLA antibody screen or for transplant advice". No other word of the explanation changed. |
| Unchanged parts | Options, `correct` 3, source `kdigo-anemia-2026` and the KF3 tag are as they were. No other SAMP or question has a hunk. |
| Lead-in cueing (B8) | Every option is an action that could be taken next while he is bleeding: give crystalloid and wait for advice, give darbepoetin, give IV iron, give red cells, or wait for a screen. None is a fluid category or a finding that the lead-in excludes, and the lead-in names none of them. No option can be dismissed from the prompt alone, so the transplant distractors now have to be judged on their merits. |
| Key against KDIGO 2026 | Practice Point 4.2 advises avoiding red cell transfusion when possible in people eligible for transplant, to limit allosensitization. Practice Point 4.5 advises considering transfusion when rapid correction of anemia is needed to stabilize the patient, naming acute hemorrhage. A man in hemorrhagic shock (BP 84/50, pulse 124, hemoglobin 116 to 84 g/L) who is still bleeding falls under 4.5, and "when possible" in 4.2 does not apply. Darbepoetin and iron cannot correct anemia in time, and waiting for a screen or for advice delays blood. Red cells now remain the single defensible answer. |
| Style | No em or en dashes and no semicolons in the changed text. Canadian spelling. |
| Tests | `SAMP_BATCH=s58 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 132 of 132 passed in 3 files, including the bank wide near duplicate stem check. |

## Summary

Both required changes were applied exactly and nothing else in `shock.ts` changed. The new lead-in covers every option without cueing any of them, and the key is still supported by KDIGO 2026 Practice Points 4.2 and 4.5. shock-52 passes, and the s58 batch has passed fresh review (see `q500-verify4-s58.md` for the other SAMPs and questions).
