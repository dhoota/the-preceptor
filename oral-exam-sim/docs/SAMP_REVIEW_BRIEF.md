# Adversarial SAMP review brief

For the reviewer of one SAMP batch in Preceptor: CCFP-EM. You did not write the batch. Assume there are errors and find them. Only edit files in your batch folder `src/samps/sNN/` and create `docs/reviews/samps-sNN.md`. Do not run git.

## Read first

- `docs/SAMP_SPEC.md` for the rules.
- `src/engine/samp.ts` for scoring. Short answer matching is word based and negation aware. A phrase does not match when "no", "not", "avoid", "withhold", "hold", "never", "don't", "stop", "discontinue", "contraindicated" or "without" appears within 3 words before it, unless the phrase itself contains the negation. So a key item whose correct answer is a negative ("Avoid nitrates") needs the negation inside its match phrase (`match: ["avoid nitrate", "no nitrate"]`, one flat list of strings).
- `src/blueprint/priorityTopics.ts` for the key feature numbers. The official key feature wording is in `/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/em_kf.json` for reference only.

## Check every SAMP and question

1. Clinical accuracy against current Canadian guidance first, then major international guidance. Recompute every dose, weight based calculation, score and number. Check thresholds, time windows and legal statements.
2. Answer keys, as an examiner would:
   - Every reasonable correct answer is accepted.
   - Match phrases are specific enough to reject wrong answers and broad enough to catch common correct wordings, abbreviations, brand and generic names.
   - Unacceptable answers cover the common errors. Dangerous flags are reserved for answers that would harm the patient.
   - `required` is fair for the question.
   - Single and menu: the keyed option is truly best and every distractor is truly wrong. Doses in distractors are plausibly wrong, not absurd.
3. Key feature mapping: each question genuinely tests the key feature it names. Fix mislabels. Every key feature of each topic must stay covered.
4. Sources: every citation is real. Use WebSearch and WebFetch to verify titles, organisations and years where you can. Replace anything you cannot verify with an honest plainer citation (organisation and topic, no year) or a verified one. Remove URLs you cannot confirm. Remove sources that are never cited. Never invent.
5. Originality: nothing may resemble the CFPC sample SAMPs (`/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/samp.txt`) or known question banks. Rewrite anything that does.
6. House style in every string: no em or en dashes, no semicolons, short sentences, Canadian spelling. Keep `reviewed: false`. Keep ids stable.

## Write the review

`docs/reviews/samps-sNN.md`, in house style (no em or en dashes, no semicolons):

- Per topic, each SAMP with a verdict: Accurate, Corrected or Needs physician attention.
- Each change, before and after in plain words.
- Sources verified, with URLs where found.
- Open questions for the physician.
- A short summary.

## Checks before you report

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
SAMP_BATCH=sNN npx vitest run tests/samps.test.ts
```

Report briefly: corrections per topic, the most serious errors and what still needs a physician.
