# Adversarial SAMP review brief

For the reviewers of one SAMP batch in Preceptor: CCFP-EM. You did not write the batch. Assume there are errors and find them. Only edit files in your batch folder `src/samps/sNN/`. Write your report to the review file named in your task. Do not run git.

Each expansion batch gets two independent reviews, run one after the other. Your task says which lens is yours. Each lens has its own checklist below. Every file in the batch folder is in scope, including any extra file of SAMPs under consideration.

In the other Preceptor banks, about 2,400 reviewed questions needed 84 fixes. Almost all were in the explanation, not the key. Expect the same. Read every explanation sentence against the stem.

## Read first

- `docs/SAMP_SPEC.md`. Every rule there applies. The [QA] rules record real defects.
- `docs/FORMAT_AUDIT.md` sections 2 and 7, for the CFPC format.
- `src/blueprint/priorityTopics.ts` for key feature numbers. The official wording is in `/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/em_kf.json`, for reference only.

## Lens A: clinical truth

1. The keyed answer is the single best answer under current Canadian guidance. Check the guideline year. Replace a US or UK standard where a current Canadian one exists.
2. For every distractor, the explanation's stated reason for rejecting it is true. This is the defect that automated checks never see.
3. No distractor is also defensible. If one is, rewrite it and say so.
4. Recompute every dose, weight-based calculation and threshold. Check that the drug and formulation are sold in Canada.
5. Mechanisms, landmarks, manoeuvres and eponymous signs are named and oriented correctly.
6. Where practice varies by province, the stem names the province or the key holds everywhere.
7. Sources. Verify each citation with WebSearch or WebFetch. Each must name an author or body, a work and a year. Replace a category ("standard references") with a real, specific source. Never invent one. If no real source supports the question, rework the question.
8. Originality. Nothing may resemble the CFPC sample SAMPs (`/tmp/claude-0/-home-user-the-preceptor/2b2ab036-b60f-5dbe-9566-53f9f56eb384/scratchpad/samp.txt`) or a known question bank.

## Lens B: internal consistency and numbers

1. Every claim in each explanation traces to the stem, an update or the cited source. Flag any finding, lab value or history detail the case never gave. Fix it by adding the fact to the stem or removing the claim.
2. Recompute every number from the stem, independently: scores, gaps, percentages, 2 by 2 statistics (sensitivity, specificity, predictive values, likelihood ratios, NNT, NNH, ARR, RRR), weight-based doses and unit conversions. Use a script for anything non-trivial.
3. Counts and thresholds match exactly. "Four of five criteria" means four are shown. "Six or more" is not "more than six".
4. Timelines agree: age, day of life, gestational age, clock times and durations.
5. Format against SAMP_SPEC sections 3 to 7 and 10: stem opening and order, vitals field, no patient name, prompt wording, option order, parity, no absolute words, no justification inside an option.
6. Cueing. The lead-in does not give away the answer. The key does not stand out by length, detail or grammar.
7. The keyed answer is never described as wrong anywhere in the explanation.
8. Key feature mapping. Each question tests the key feature it names.

## Answer key changes

- For an expansion batch in draft, you may change a key when the evidence requires it. Record the before and after, with the reason, under a heading "Key changes".
- Never change the key of a SAMP with `reviewed: true`. Record the problem under "Needs physician decision" instead.

## Write the review

In house style (no em or en dashes, no semicolons). Include:

- Your lens.
- A table of every fix: SAMP id, question, field, the flaw in one line, and your confidence (high, medium or low).
- Key changes, if any.
- Sources verified, with URLs where found.
- Needs physician decision.
- A short summary with counts.

## Checks before you report

```
cd /home/user/the-preceptor/oral-exam-sim
npx tsc --noEmit -p . 2>&1 | grep samps/sNN
SAMP_BATCH=sNN npx vitest run tests/samps.test.ts
```

Report briefly: fixes by category, the most serious errors, and anything for the physician. List every SAMP id where you found a defect.
