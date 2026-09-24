# s53 toxicology, second Lens B review

Lens: B, internal consistency and numbers.

Scope: tox-16, tox-21, tox-28 and tox-39 in src/samps/s53/tox.ts, and every SAMP in src/samps/s53/review-extra.ts (tox-48, tox-49). Every SAMP stays reviewed: false. Edits were made only in src/samps/s53/. I did not rely on the second Lens A review. I read it only after my own pass, to compare.

Gates after the edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s53` prints nothing. `SAMP_BATCH=s53 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 743 passed. The tests do not load review-extra.ts, so I ran the same format checks on tox-48 and tox-49 with a script (stem words, prompt words, option order, option length ratio, key parity, explanation length, update length).

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| tox-48 | q1 | correct | Keyed index 0, magnesium sulfate soaks, while the explanation teaches topical calcium gluconate gel. Key set to 3. tox-48 is otherwise a copy of tox-26, which keys 3. The second Lens A review recorded this fix, but the file still had the defect. | high |
| tox-49 | q2 | explanation | Ended with "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." The case gives no blood gas or lactate, and a lactate does not confirm muscarinic blockade. Sentence removed. The second Lens A review also recorded this fix, but the file still had it. | high |
| tox-28 | q3 | explanation | Called 40 tablets "a deliberate overdose" sent "as after any intentional ingestion". The stem never says the ingestion was intentional. Reworded to say that 40 tablets from another person's supply may be an intentional overdose. | medium |
| tox-28 | q2 | options, correct, explanation | The key "cautious potassium replacement IV" had no drug, dose or rate while three distractors gave drug, dose and route. The word "cautious" also cued the key. Changed to "potassium chloride 10 mmol/hour IV". Options re-sorted, key moves from index 0 to index 2. The explanation now says that 10 mmol/hour is the cautious rate. | medium |
| tox-49 | q3 | explanation | Said absorption "continues well beyond 3 hours". The stem gives 3 hours since his sister found him, not since he swallowed the tablets. Reworded to say the ingestion time is unknown. | medium |
| tox-49 | q2 | explanation | Listed "urinary retention" as a finding. The stem says only that he has not passed urine since arrival. Now quotes that finding. | low |
| tox-48 | q2 | explanation | Rejected the blood gas and chest film because "his breathing is unlaboured". The stem does not describe his work of breathing. Now cites his respiratory rate of 18/minute, which is in the vitals. | low |
| tox-16 | q4 | explanation | Rejected head CT and chest film for "focal findings or hypoxia she does not have". The stem gives no neurological examination. Now says the case describes no focal deficit or head injury, and gives her saturation of 97%. | low |
| tox-21 | stem | stem | The opening "You are working in a rural hospital 300 km ..." did not say emergency department. Now "a rural hospital emergency department 300 km from the nearest dialysis unit" (SAMP_SPEC section 3). | low |
| tox-21 | q3 | explanation | Restated the citation ("the situation the whole bowel irrigation position paper describes"). Reworded to state the indication. | low |

## Recomputed numbers

I recomputed these with a script. All of them match the stems and explanations.

- tox-16: 100 tablets of 200 mg is at most 20 000 mg, or 312 mg/kg at 64 kg. The explanations call the count an upper limit, which fits a bottle dispensed last week. QRS 126 ms, QTc 520 ms, K 2.4 mmol/L, glucose 6.0 mmol/L and BP 84/48 mmHg are quoted the same way throughout.
- tox-21: 60 tablets of 20 mmol is 1200 mmol, as stated twice. K 7.6 mmol/L, then 7.9 mmol/L 1 hour later in the q4 update. PR 240 ms, QRS 118 ms, pH 7.38 and creatinine 92 umol/L are quoted correctly. The 2 hour timing agrees in q1, q2 and q3.
- tox-28: 40 tablets of 300 mg is 12 000 mg, or 207 mg/kg at 58 kg. 210 umol/L is 37.8 mg/L (molar mass 180.16 g/mol). That is below the EXTRIP acute threshold of 100 mg/L, and no question keys extracorporeal removal. K 2.8 mmol/L, pH 7.46, pulse 136/minute and saturation 98% are quoted correctly. The 3 hour timing agrees with q1 and q3.
- tox-39: 3 weeks of symptoms and 4 months of use agree across q1 and q4. MCV 104 fL and Hb 118 g/L are quoted correctly.
- tox-48: 2 hours after the splash and a further 2 hours of gel agree with the update. A calcium of 2.02 mmol/L is below the reference range, as the explanation says.
- tox-49: 60 tablets of 300 mg is at most 18 000 mg, or 205 mg/kg at 88 kg. QRS 96 ms, QTc 480 ms, pulse 134/minute and BP 96/54 mmHg are quoted correctly.

## Format

- Stems run 83 to 100 words. Every prompt starts with "Which of the following", ends with "?" and runs 12 to 16 words. Options are in alphabetical order.
- Option length ratios are within 2.1 for single questions and 2.6 for menus. Key parity is at most 1.5 by the test's mean against mean rule. Explanations run 456 to 783 characters. The one update is 26 to 28 words.
- No dashes or semicolons in any string. No patient names, no absolute words and no option cross references.
- Batch position balance for tox.ts after the tox-28 q2 change: 21, 28, 29, 24 and 15 of 117 single keys (maximum 24.8 percent). The key is the longest option in 30.8 percent.

## Key changes

- tox-48 q1: index 0 (magnesium sulfate soaks) to index 3 (topical calcium gluconate gel). The explanation and the source both support calcium gluconate gel. This matches the answer in tox-26.
- tox-28 q2: index 0 to index 2. The answer is still potassium replacement, now written as "potassium chloride 10 mmol/hour IV". The move comes from re-sorting the options, not from a change of answer.

## Sources verified

I did not check any source against the web in this lens. The citations for these SAMPs were checked in the second Lens A review. I made no citation changes.

## Needs physician decision

1. tox-48 and tox-49 copy tox-26 and tox-37 word for word, apart from the two planted defects fixed above. The duplicate stem test would reject them if they were added to SAMPS_S53. They should not be added. If they were, the batch position balance would go over 25 percent at position 2 (31 of 123).
2. The same unstated wording exists in the originals, which were outside my scope. In tox-26 q2 the explanation says "his breathing is unlaboured". In tox-37 the explanations say "urinary retention" and "continues well beyond 3 hours". A later pass should fix them the same way.
3. Key feature mapping, not changed:
   - tox-21 q1 is tagged key feature 3 (co-ingestion, unexpected labs), but it asks for the source of a potassium that the stem already explains. Medium confidence.
   - tox-39 q1 is tagged key feature 1 (collateral), but the history comes from the patient. Low confidence.
   - tox-49 q2 is tagged key feature 3 but explains the anticholinergic signs of one known drug. Low confidence.

## Summary

- 10 fixes across 6 SAMPs:
  - 1 wrong key, planted (tox-48 q1).
  - 4 explanation claims that rest on facts the case does not state (tox-49 q2 lactate, tox-28 q3 intent, tox-49 q3 timing, tox-48 q2 work of breathing).
  - 2 other unsupported wording fixes (tox-49 q2, tox-16 q4).
  - 1 cueing and specificity fix (tox-28 q2).
  - 2 format fixes (tox-21 stem, tox-21 q3).
- 2 key changes. Only one of them changes the answer.
- The most serious errors are the tox-48 q1 wrong key and the invented tox-49 q2 lactate. Both came back after the second Lens A review recorded them as fixed.
- No arithmetic, unit conversion, ECG interval or timeline error was found in the four rebuilt SAMPs.
- SAMP ids with a defect: tox-16, tox-21, tox-28, tox-48, tox-49. Key feature questions only: tox-39.
