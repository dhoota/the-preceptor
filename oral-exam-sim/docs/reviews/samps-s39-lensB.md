# Review of batch s39 (GI bleed), Lens B: internal consistency and numbers

Reviewer lens: B (internal consistency and numbers). Scope: every file in `src/samps/s39/`, which is `gi-bleed.ts` (gi-bleed-16 to gi-bleed-47, 110 questions) and `review-extra.ts` (gi-bleed-48 and gi-bleed-49). Each SAMP was read on its own, and every explanation sentence was checked against its stem and updates. I did not rely on the Lens A review. Every SAMP stays `reviewed: false`.

This is an AI audit, not clinician verification.

## Method

The SAMPs were loaded with vite-node and dumped to JSON, then checked with a Python script (kept in the session scratchpad, outside the repo). The script:

- Recomputed every Glasgow Blatchford score from the stem and update values: gi-bleed-16 is 13, 27 is 12 and 46 is 1. All three keys are correct. For context, the unasked scores are 36 (8), 37 (10) and 41 (13), and none conflicts with the disposition keyed in those SAMPs.
- Recomputed the Oakland score for gi-bleed-35. It is 8 (age 0, sex 0, admission 0, rectal blood 1, pulse 1, BP 2, hemoglobin 4). The key is correct, and 10 and 14 are reachable by misbanding BP or hemoglobin, as the explanation says.
- Recomputed every weight based volume. 17: plasma 15 mL/kg x 4.6 kg is 69 mL. 20: O negative 20 mL/kg x 12 kg is 240 mL. 22: 20 mL/kg x 9 kg is 180 mL, and the distractors are 5, 10 and 60 mL/kg as stated. 32: 10 mL/kg x 20 kg is 200 mL, and the distractors are 2.5, 5, 30 and 50 mL/kg as stated. All correct.
- Checked other numbers: hemoglobin falls (30: 35 g/L as stated), shock index in 38 (116/92 is 1.26, above 1 as stated), rivaroxaban 15 mg in 41 (Cockcroft-Gault about 33 mL/minute, consistent with the reduced dose), weight gain in 42 (24 g/day, thriving), Truelove and Witts in 39 (8 to 10 stools plus pulse, fever, hemoglobin and CRP criteria all met), INR 2.9 within the mechanical mitral range in 47.
- Checked format: stem and prompt word counts, update lengths, key to mean distractor length ratio, key position and longest key share, and dashes and semicolons in every string.
- Compared both review-extra SAMPs field by field against the SAMPs they copy.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| gi-bleed-48 (extra) | q1 | correct | Key was index 4, "Ventilation perfusion scan", while the explanation, the stem and the next update all support the rectal examination. Key restored to index 2, "Digital rectal examination". Lens A reported fixing this, but the file still carried the defect when I read it. | high |
| gi-bleed-49 (extra) | q2 | explanation | Last sentence cited "the serum lactate of 7.8 mmol/L seen on the first blood gas". No blood gas or lactate is in the case, and that value would mean shock, which contradicts the stable patient and the one unit plan. Sentence removed. Lens A also reported this fix, but it was not in the file. | high |
| gi-bleed-16 | q1 | stem | The explanation rejects Mallory Weiss because of retching or vomiting "which he did not have", but the stem never said so. Added "He has not vomited" to the stem. | high |
| gi-bleed-16 | q3 | stem, explanation | The explanation said he has "no cardiovascular disease", but the stem only excluded heart failure and he takes ramipril for hypertension. Added "coronary disease" to the stem's list of negatives and reworded the explanation to "no coronary disease or heart failure". | medium |
| gi-bleed-16 | q2 | explanation | "Totals of 11 or less come from ... scoring urea in a lower band" is numerically false. Urea one band lower gives 12, not 11 or less. Rewritten: 11 misses the pulse and melena points, and 15 places urea in the band above 25 mmol/L. | medium |
| gi-bleed-20 | q1 | stem | The explanation says "the nose and pharynx show no bleeding", but the stem examined only the oropharynx. The stem now says "The nose and oropharynx show no bleeding". | high |
| gi-bleed-20 | q1 | stem, explanation | The explanation says "He had no retching before the blood", which the stem never gave. Added "with no retching beforehand" to the stem. The explanation also called the drooling of "sudden onset", but the stem describes 6 days of drooling. Now reads "the new drooling". | medium |
| gi-bleed-17 | q1, q4 | stem | The explanation says he "did not receive vitamin K at birth", but the stem said only that his parents declined all newborn injections. That leaves oral prophylaxis open, and q4 turns on the oral versus IM difference. Added "He received no vitamin K by any route". | medium |
| gi-bleed-23 | q3 | option | "Prothrombin complex concentrate 2000 units" broke the thousands separator rule (SAMP_SPEC section 10). Now "2 000 units". The order and the key are unchanged. | high |
| gi-bleed-24 | q1 | explanation | "No ... signs of liver disease" was not in the stem, which gives no stigmata. Now reads "He does not drink alcohol, which makes varices less likely". | low |
| gi-bleed-25 | q1 | explanation | "She has no signs of ... liver disease" was not in the stem. Now reads that she is hypotensive without headache, so nothing suggests eclampsia, and nothing in her history suggests varices. | low |
| gi-bleed-27 | q2 | stem | The explanation rests on prednisone "after long use", but the stem gave no duration. Added "for 8 months" to the stem. | medium |
| gi-bleed-27 | q1 | explanation | "Urea in the lowest band (2 points)" was ambiguous, because the lowest band scores 0. Now names the 6.5 to 8 mmol/L band. | low |
| gi-bleed-32 | q3 | explanation | "He has normal liver function" was not in the case, which gives no liver tests. Now reads "he has no jaundice, ascites or enlarged liver to suggest it", which is what the stem shows. | medium |
| gi-bleed-34 | q3 | stem | The explanation cites the absence of organ failure, but the stem gave no renal function. Added creatinine 84 umol/L to the stem labs. | low |
| gi-bleed-36 | q1 | explanation | "A higher threshold than 80 g/L is used, but his hemoglobin of 102 g/L is above it" named no number, so the reader could not check the key. Now says "usually up to 100 g/L", which 102 g/L exceeds. | medium |
| gi-bleed-40 | q2, q3 | stem | The explanations say she "has iron deficiency from heavy periods", but the stem said only that iron was started for heavy periods. The stem now says the iron was started "for iron deficiency anemia from heavy menstrual periods". | medium |
| gi-bleed-40 | q1 | explanation | "Her hemoglobin and urea are stable". Only one urea value is given, so stability cannot be shown. Now reads "her hemoglobin is stable with a normal urea". | low |
| gi-bleed-22 | q2 | update | The update was 8 words, below the 10 to 45 word range. Added "on the glove". | low |
| gi-bleed-47 | q3 | update | The update was 9 words, below the range. Added "and asks to go home". | low |

## Key changes

- gi-bleed-48 q1 (review-extra): correct 4 ("Ventilation perfusion scan") changed to 2 ("Digital rectal examination"). The explanation already supports the rectal examination, and the question is identical to gi-bleed-26 q1, which keys index 2.

No key was changed in `gi-bleed.ts`.

## Review-extra: recommend rejecting both SAMPs

A field by field comparison confirms that gi-bleed-48 is a word for word copy of gi-bleed-26, and gi-bleed-49 is a copy of gi-bleed-37. The only differences were the two planted defects above. The tests do not load `review-extra.ts`, so the near duplicate stem check never ran on them. They would fail that check and take the topic past its planned 32 SAMPs. I fixed them so the file is not left wrong, but neither should be merged.

## Checked and found consistent

- Every key index points to the option its explanation defends (all 110 main questions and 7 extra questions).
- Menu `correct` indexes match the explanation in every menu (17, 24, 25, 28, 29, 31, 33, 37, 38, 41, 44).
- Timelines: tonsillectomy day 6 (19), battery missing "last week" with 6 days of symptoms (20), farm exposure 5 days before and 3 days of diarrhea (21), polypectomy 8 days before with clopidogrel restarted on day 3 (28), liver biopsy 5 days before (30), stent 4 months before (36), extraction the previous afternoon with presentation at 0300 (47).
- Thresholds: keyed transfusion hemoglobins of 61, 64, 66, 68, 71, 72, 96 and 102 g/L each sit on the side of the threshold the explanation claims. 29 and 45 name their threshold (70 and 80 g/L, and 70 g/L), and 36 now does too.
- Format: stems 50 to 150 words, prompts 10 to 30 words, updates now all 10 to 45 words, and no dashes or semicolons. The key is at most 1.5 times the mean distractor length in every single question. The key is the longest option in 34 of 99 single questions (34.3 percent). No option text that holds a key was changed, so position balance and parity are as the writer left them.

## Sources verified

Lens B checks internal consistency, not the sources. Every source in the batch is a real, dated citation, and every listed source is cited by at least one question (the test enforces this). I did not fetch any source in this review. The score arithmetic was checked against the published score bands of Blatchford 2000 and Oakland 2017, which are the sources the questions cite. The Oakland table URL the writer gave is https://pmc.ncbi.nlm.nih.gov/articles/PMC7341175/.

## Needs physician decision

- Key feature mapping (brief item 9). Several questions test something outside the key feature they name, and no GI bleed key feature fits them better. I left them unchanged: gi-bleed-17 q2 (CT head for intracranial bleeding, labelled KF1), 21 q3 (HUS monitoring, KF1), 39 q2 (VTE prophylaxis, KF6), 39 q4 (radiograph for toxic megacolon, KF1) and 42 q3 (bilious vomiting as a red flag, KF1). Decide whether to keep them or reframe them.
- gi-bleed-36 q1: the key (no transfusion at 102 g/L with coronary disease) depends on the higher threshold being no more than 100 g/L. The margin is 2 g/L. Confirm this is safe as a single best answer, or lower the hemoglobin in the update.
- gi-bleed-48 and 49: reject as duplicates.

## Summary

- 20 fixes in 15 SAMPs, plus 1 key change (gi-bleed-48 q1).
- By category: 1 wrong key (48, planted). 1 fabricated lab value (49, planted). 11 explanation claims not supported by the stem, fixed by adding the fact to the stem or rewording the claim (16 q1, 16 q3, 17, 20 nose, 20 retching and drooling, 24, 25, 27 q2, 32, 34, 40 q2 and q3). 2 score arithmetic statements that were false or ambiguous (16 q2, 27 q1). 1 unstated threshold (36 q1). 1 thousands separator format error (23 q3). 2 short updates (22 q2, 47 q3). 1 unsupported stability claim (40 q1).
- Most serious: the wrong key in gi-bleed-48 q1 and the invented lactate of 7.8 mmol/L in gi-bleed-49 q2. Lens A reported fixing both, but neither fix was in the file. Next come the explanations in gi-bleed-16 q1 and gi-bleed-20 q1, which each reject a distractor using a stem fact the case never gave.
- SAMPs with a defect: gi-bleed-16, 17, 20, 22, 23, 24, 25, 27, 32, 34, 36, 40, 47, 48, 49.
- Checks: `tsc` is clean for s39. `SAMP_BATCH=s39 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 671 of 671.
