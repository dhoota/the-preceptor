# Adversarial review brief

For the reviewer of one batch in Preceptor: NCLEX-RN Prep. You did not write the batch. Assume there are errors and find them. Be a genuine skeptic, but do not invent problems or nitpick style. Missing a real fault is worse than flagging a borderline one.

Only edit files in the batch folder `src/bank/<batch>/`. Write your report to `docs/reviews/<batch>-review.md`. Do not run git.

## Scope

Every file in the batch folder is in scope, including any extra file of items under consideration that `index.ts` does not import. Review those too, and list every defect you find in them.

In the other Preceptor banks about 2,400 reviewed questions needed 84 fixes, and 90 more were found later in NDEB. Almost all were in the explanation, not the key. Read every why and every rationale sentence against the stem.

## Read first

- `docs/ITEM_SPEC.md`. Every rule applies. The [MC] rules record real defects.
- `tests/fixture.ts` for what a clean item looks like.

## Lens A: nursing content, with sources

1. The key is the single best answer for an entry-level RN under current guidance. Check the guideline year. Stale guidance is a known defect class.
2. For every choice, the stated why is true. Check each distractor's reason on its own. A right key with a false reason for rejecting a distractor is the most common defect no gate can see.
3. No distractor is also defensible. If one is, rewrite it and say so.
4. Priority and delegation items follow accepted frameworks (airway, breathing, circulation, acute over chronic, unstable over stable, scope of practice for LPN or RPN and assistive personnel). Say which framework decides the key.
5. Drugs, doses, routes, antidotes and monitoring are correct. Check each against a current drug reference.
6. Signs, scales and tests are named correctly. Mechanisms point the right way.
7. Sources. Verify each citation with WebSearch or WebFetch. Each names an author or body, a work and a year. Replace a vague or wrong citation with a real, specific one. Never invent one. If no real source supports the item, rework the item.
8. Originality. Nothing may resemble an NCSBN item, the sample pack, the exam preview, the tutorial or a known question bank.

## Lens B: internal consistency and numbers

1. Every claim in every rationale and why traces to the stem, the exhibit, an earlier part of the case, a declared `refs` value or the cited source. Flag any finding, history detail or value the item never gave. Fix it by adding the fact to the stem or removing the claim.
2. Recompute every number independently: doses, rates, drip rates, intake and output, BMI, unit conversions, scores. Use a script for anything non-trivial.
3. Counts and thresholds match exactly.
4. Timelines agree: ages, post-operative day, gestational weeks, clock times.
5. Cueing. The lead-in does not give away the key. No choice stands out by length, detail or grammar.
6. Case studies: each item may rely only on what the case has shown so far. The six items walk the CJMM steps in order and each item tests its step.
7. Metadata: the Client Needs area, CJMM step and difficulty are honest.

## Fixing

- Fix defects with the smallest edit that preserves the key. Keep every automated gate passing. If you lengthen a key, level the distractors too.
- You may change a key only when the evidence requires it. Record the before, the after and the reason under "Key changes". Arjan approves every key change.
- Never set `reviewed: true`.

## Checks before you report

```
cd /home/user/the-preceptor/nclex-rn
npx tsc --noEmit -p . 2>&1 | grep bank/<batch>
BATCH=<batch> npx vitest run tests/bank.test.ts
```

## Report

`docs/reviews/<batch>-review.md` in house style (no em or en dashes, no semicolons):

- A table of every fix: item id, field, the flaw in one line, the lens, and your confidence (high, medium or low).
- Key changes, if any.
- Sources verified, with URLs.
- Needs Arjan's decision.
- A short summary with counts.

Your structured result lists every item id where you found a defect, including items in files `index.ts` does not import.
