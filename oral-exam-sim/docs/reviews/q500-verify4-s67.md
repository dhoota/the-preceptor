# Q500 verify round 4: s67 (abuse-domestic)

Verdict: PASS

Fresh reviewer. Scope is the two required fixes in `q500-verify3-s67.md` to `src/samps/s67/abuse-domestic.ts`.

## Checks run

- `SAMP_BATCH=s67 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 128 of 128 passed.

## Diff

The fix commit (8a81628) changes exactly two lines of the file. Nothing has changed in the file since, and the working tree matches HEAD.

| Item | Required | Applied |
|---|---|---|
| abuse-domestic-41 q3 update | Replace "She asks for help but has no phone of her own." with "She asks for help, but her partner still has her phone." | Yes, word for word. The rest of the update is unchanged. |
| abuse-domestic-43 q3 explanation | Replace "A bleeding time and a platelet function screen are not among the tests it lists." with "A bleeding time or a platelet function screen looks at platelet plug formation and does not measure factors VIII, IX or XIII, so neither can exclude hemophilia or factor XIII deficiency." | Yes, word for word. The rest of the explanation is unchanged. |

No options, keys, prompts, sources, key feature tags or other SAMPs changed.

## Agreement with the stems

- 41: the stem says her partner "holds her phone and her wallet". The q3 update now says her partner still has her phone, and the q3 explanation opens "Her partner holds her phone". All three agree. The contradiction from round 3 is gone.
- 43: the q3 update gives a normal CBC, platelet count, INR and PTT. The new sentence gives a true, specific reason against each of the two platelet distractors (they test plug formation and do not measure factors VIII, IX or XIII). It does not conflict with the stem or the key. The explanation has no semicolons or dashes.

## Batch status

abuse-domestic-39, 40 and 42 passed in `q500-verify3-s67.md` and are unchanged. abuse-domestic-41 and 43 now pass. The whole s67 batch has now passed fresh review.
