# Format conformance brief (s01 to s18)

For the agent bringing one signed-off batch into CFPC format. A physician (Arjan Dhoot, MD) signed off these SAMPs on 24 September 2026. Your job is format only. Every answer stays the same. Only edit files in `src/samps/sNN/`. Write your report to `docs/reviews/conformance-sNN.md`. Do not run git.

Read first: `docs/SAMP_SPEC.md` sections 3 to 7, 10 and 11, and `docs/FORMAT_AUDIT.md` section 2.

## The one rule

Never change what is correct. Do not change `correct`, `select`, `required`, `accept`, `unacceptable` or any clinical fact, except for the index remapping that reordering needs. If you find a clinical error, leave it and report it under "Needs physician decision".

## Single and menu questions

The existing questions show a strong bias. The key sits in the first or second position most of the time and never in the fifth. The key is the longest option 62 percent of the time. Fix this without changing any answer.

1. Prompt: one "Which of the following ...?" sentence of 10 to 30 words. Remove any instruction ("Select one.", "Select TWO."). The app adds it. Keep the clinical meaning.
2. A `single` question has exactly 5 options. If it has 4, add one plausible distractor that is clearly wrong under the cited source. If it has 6, remove the weakest distractor. A `menu` has 6 to 12 options.
3. Options are short parallel phrases, at most 60 characters, no final period, no absolute words (always, never, completely, entirely, absolutely, invariably, guaranteed).
4. Similar length for all options. The longest is at most 2.1 times the shortest in a single question and 2.6 times in a menu. The key is at most 1.5 times the mean distractor length. Prefer to lengthen or reword distractors to match the key. Trim the key only if you must, and then keep its meaning exactly. Any reason text in an option moves to the explanation.
5. Order options alphabetically, with "None" or "No ..." options last. Order all-number options from low to high. Then remap `correct` so it points at the same text. Check every remap.
6. Position balance across the batch's single questions: no position holds more than 30 percent of keys, and every position from first to fifth holds at least one. Get there by choosing distractor wording that sorts before or after the key. Never by changing the answer.
7. Update the explanation where it quoted an option you reworded, or referred to an option by position.

## Write-in questions

- The prompt becomes a question ending in "?". "List THREE causes of ..." becomes "What are the causes of ...?". Remove the instruction text. The app adds "List THREE." from `required`.
- Do not touch `required`, `accept` or `unacceptable`.

## Stems

- Hyphenate ages ("62-year-old"). Use °C for temperatures, a space between number and unit, and a space as the thousands separator.
- Remove patient names. Use "the patient", "he" or "she".
- Move vitals out of the stem into the `vitals` field in CFPC formats (SAMP_SPEC section 4). Keep every value exactly. Check any explanation that quotes a vital still matches.
- Do not change any clinical fact, value or timeline.

## Sources

Every citation needs an author or body, a work and a year or edition. For example: "Thrombosis Canada. Clinical guide: deep vein thrombosis treatment. 2024." Many current citations lack a year. Verify each year with WebSearch or WebFetch. Never invent one. If you cannot verify a source, replace it with a verifiable, specific source that supports the same point, and report the swap. Textbooks need an edition and year ("Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine. 10th ed. 2023.").

## Checks

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
CONFORM=sNN SAMP_BATCH=sNN npx vitest run tests/samp-quality.test.ts tests/samps.test.ts
```

Everything must pass except one expected failure: "keeps its keys" for a SAMP where you reworded the text of a keyed option. List every such rewording in your report, with the before and after text. The orchestrator logs them for the physician, and then that test passes.

## Report

In house style (no em or en dashes, no semicolons). Include:
- Counts: prompts reworded, options added or removed, options reworded, keyed options reworded, stems changed, vitals moved, names removed, citations completed or replaced.
- Key position counts across the batch's single questions, before and after.
- A table of keyed option rewordings: SAMP id, question, before, after.
- Citation changes, with verification URLs.
- Needs physician decision: any clinical concern you found, left unchanged.
