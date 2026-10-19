# Q500 verify round 5: batch14 (rural-child-wheeze-tiring)

Verdict: PASS

Fresh reviewer. Scope is the round 5 writer change to `src/cases/batch14/rural-child-wheeze-tiring.ts`, against the required fix in `q500-verify4-batch14.md` and the coordinator's request to remove "cost" from as-c1.

## Checks run

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch14`: no output.
- `CASE_BATCH=batch14 npx vitest run tests/cases.test.ts tests/citations.test.ts`: 45 of 45 passed.

## Round 5 diff

The round 5 change (commit 7f3f932 against eb553ef) touches exactly four lines of the case file and nothing else. The working tree matches HEAD for this file.

| Line | Required | Applied |
|---|---|---|
| as-h4 text | Drop the controller clause | Yes. Now "Asks about tobacco smoke at home, who cares for him and how far he lives from follow up." |
| as-h4 teaching | Drop "and poor adherence" | Yes. Now "The CPS lists tobacco smoke as a trigger to review, and low socioeconomic status and psychosocial concerns as risk factors. Distance to care limits follow up." |
| q-history model answer, last line | Match as-h4 | Yes. Now "Tobacco smoke at home, who looks after him and how far he lives from follow up." It no longer mentions cost. |
| as-c1 text | Remove "cost" (coordinator) | Yes. Now "... addresses smoke exposure, controller adherence, spacer use, a written action plan and early follow up." |

No points, sources, ids, rubric lists or other items changed.

## Double count

as-h2 grades controller adherence, salbutamol use, spacer use and inhalers per month. as-h4 now grades tobacco smoke, who cares for him and distance to follow up. The two items share no behaviour, so a candidate who asks about the controller scores it once, at as-h2. The double count found in round 4 is gone.

## Source check

I opened the CPS 2021 position statement, "Managing an acute asthma exacerbation in children" (https://cps.ca/en/documents/position/managing-an-acute-asthma-exacerbation), this round.

- Tobacco smoke as a trigger to review: "Review environmental triggers, including tobacco smoke (passive and active in teenagers) ...". Supported.
- Risk factors: the risk factor list includes "Low socioeconomic status, psychosocial concerns". Supported.
- Distance to care: under admission criteria, "Factors affecting adherence or capacity for close follow-up (e.g., ... distance to the health facility ...)". Supported.
- The word "cost" does not appear on the page. No graded item now claims it. "Cost" remains only in the case facts (the refill was not renewed because of cost) and as ungraded context in the q-counsel model answer, which round 4 allowed.

The as-c1 teaching (daily inhaled steroid, spacer, action plan, follow up within 4 weeks of discharge) is unchanged and matches the page ("within 4 weeks of discharge").

## Batch status

rural-child-wheeze-tiring now passes. return-visit-belly-pain-girl and neck-node-fever-day-five passed in `q500-verify3-batch14.md`, and rural-breathless-after-ulcer-bleed passed in `q500-verify4-batch14.md`. None of those three files has changed since its passing verdict. All four batch14 cases have now passed fresh review.
