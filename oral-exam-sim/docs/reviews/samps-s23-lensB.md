# Review of batch s23 (anaphylaxis), Lens B: internal consistency and numbers

Reviewer lens: B (internal consistency and numbers). Scope: `src/samps/s23/anaphylaxis.ts` (anaphylaxis-16 to anaphylaxis-47) and `src/samps/s23/review-extra.ts` (anaphylaxis-48 and anaphylaxis-49). I read every stem, update, option and explanation myself, SAMP by SAMP, and did not rely on the Lens A report. Every SAMP stays `reviewed: false`.

Checks after the edits: `npx tsc --noEmit -p . | grep samps/s23` shows no errors. `SAMP_BATCH=s23 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 679 of 679. The tests do not load `review-extra.ts`, so I checked those two SAMPs by hand and by script.

## Method

- A script dumped every SAMP to plain text so each stem, update, option and explanation could be read against each other.
- A second script recomputed every number independently (listed below). No arithmetic mismatch was found.
- A third script checked stem length (50 to 150 words), stem opening, second person, update length (10 to 45 words), explanation length, justification words inside options, key position balance and key feature counts.

## Numbers recomputed by script

All match the keyed answers and the explanations.

- IM epinephrine at 0.01 mg/kg, maximum 0.5 mg: 16 (82 kg, 0.82 capped to 0.5), 17 (72 kg), 18 (9 kg, 0.09 mg = 0.09 mL of 1 mg/mL), 21, 23 (24 kg, 0.24 mg), 24 (28 kg, 0.28 mg), 30 (0.76 capped), 31 (0.58 capped), 32 (152 kg, 1.52 capped), 34, 35 (0.62 capped), 36 (50 kg, 0.5 mg), 39, 42 (44 kg, 0.44 mg), 43, 45 (0.64 capped), 46 (19 kg, 0.19 mg = 0.19 mL).
- Error multiples: 18 (0.9 mg is tenfold, 0.01 mg is ninefold under, 0.3 mg device is 3.3 times 0.09 mg), 23, 24 and 42 (tenfold), 46 (0.019 mL and 1.9 mL tenfold), 40 (0.5 mg is 2.4 times 0.21 mg).
- Fluid boluses at 20 mL/kg: 18 (180 mL, with 18, 45, 450 and 900 mL equal to 2, 5, 50 and 100 mL/kg), 23 (480 mL), 24 (560 mL, with 56, 140, 1 400 and 2 800 mL equal to 2, 5, 50 and 100 mL/kg), 46 (380 mL in the q3 update).
- Pediatric hypotension, 70 + (2 x age): 23 (84, BP 78), 24 (88, BP 76), 46 (80, BP 76). 18 infant limit 70 mmHg, BP 62.
- 25 infusion: 1 mg in 100 mL = 10 mcg/mL. 1 mL/kg/hour x 60 kg = 60 mL/hour = 600 mcg/hour = 10 mcg/minute = 0.17 mcg/kg/minute. 50, 100 and 500 mcg/minute are 5, 10 and 50 times higher.
- 28 vancomycin: 1.5 g over 30 minutes = 50 mg/minute. At 10 mg/minute or less, 1.5 g takes at least 150 minutes.
- Autoinjector weight bands (0.15 mg under 25 kg, 0.3 mg from 25 kg): 18, 21, 22, 23, 27, 33, 40, 42.
- 40 salbutamol 10 puffs for 20 kg or more: 21 kg.
- Timelines: 20 (dinner 1930, onset about 0150, about 6 hours), 36 (resolution 1600, recurrence about 0120, about 9 hours), 27, 43 and 44 consistent. 38 was not consistent (below).

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| anaphylaxis-48 (extra) | q1 | correct | Key pointed to "Hypertrophic cardiomyopathy" (index 2) while the explanation argues for food anaphylaxis. The Lens A report records this fix but the file still held index 2. Key set to index 0 | high |
| anaphylaxis-49 (extra) | q2 | explanation | "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." The case gives no blood gas or lactate. The Lens A report records this fix but the sentence was still in the file. Removed | high |
| anaphylaxis-38 | stem, q2 update | stem | Timeline contradiction. Injection 20 minutes before arrival, symptoms at 10 minutes, yet the update puts arrival 15 minutes after the clinic dose, which would place the dose before symptoms began. Injection now 30 minutes before arrival, so dose at about 15 minutes and arrival 15 minutes later | high |
| anaphylaxis-33 | q2 update | update | q2 and q3 rely on cetirizine having been given (options "Antihistamine side effect", "Repeat cetirizine", explanation "a second antihistamine dose"), but no update said it was given. Added "She is given cetirizine." | medium |
| anaphylaxis-44 | stem | stem | q2 explanation says "His only autoinjector has been used". The stem never said it was his only one. Stem now says he injected his only autoinjector, a 0.3 mg device | medium |
| anaphylaxis-23 | stem | stem | q3 explanation rejects salbutamol because of "wheeze, which he does not have". The stem gave no chest finding. Added "There is no wheeze." | medium |
| anaphylaxis-23 | q1 | explanation | "Two organ systems beyond the skin are involved" implies skin involvement in a boy with no rash. Now names the airway and the gut | medium |
| anaphylaxis-46 | q1 | explanation | "1 mL is the cardiac arrest dose of 1 mg" is false for a 19 kg child, whose arrest dose is 0.01 mg/kg. Now says 1 mg is the adult cardiac arrest dose and more than five times her dose | medium |
| anaphylaxis-46 | q3 | keyFeature | Disposition by air transfer because of biphasic risk was mapped to key feature 3 (acute treatment). It tests rebound risk and disposition, key feature 4, as do the other disposition questions in the batch (19 q3, 27 q1, 38 q3, 47 q2). Remapped to 4. Key feature 3 still has 36 questions | medium |
| anaphylaxis-27 | q1 | options, explanation | Threshold mismatch. The key read "Extended observation of 6 hours or more" while the explanation and JTF 2020 say "up to 6 hours or longer". Key reworded to "Extended observation after resolution" (same content, same position) and the explanation aligned | medium |
| anaphylaxis-45 | q3 | options, explanation | Distractor "Avoid it because of her age" carried its own justification inside the option. Replaced with the peer action "Avoid it while taking apixaban", which the explanation now rejects directly | medium |
| anaphylaxis-19 | stem | stem | q1 explanation says "She has no history of asthma". The stem listed only hypothyroidism. Added "no history of asthma" to the stem | low |
| anaphylaxis-28 | stem | stem | q1 explanation says she has "no respiratory or gut symptoms". The stem gave a clear chest but no gut history. Added "She has no nausea or abdominal pain." | low |
| anaphylaxis-16 | q4 | explanation | "Generalized hives" overstates the stem, which gives confluent hives on his back. Wording now matches the stem | low |
| anaphylaxis-45 | q2 update | update | "Her lungs remain free of crackles" implied an earlier finding the stem never gave. Now "Her lungs are free of crackles." | low |
| anaphylaxis-47 | stem | stem | "Presents 30 minutes after eating" followed by "resolved 2 hours ago" reads as a contradiction. Now says symptoms resolved soon after arrival and she has been symptom free for 2 hours, which q2 relies on | low |

## Key changes

- anaphylaxis-48 q1 (review-extra): before index 2 "Hypertrophic cardiomyopathy", after index 0 "Food anaphylaxis". The stem and the explanation support only food anaphylaxis.
- anaphylaxis-27 q1: the key stays at index 4 with the same meaning. Its wording changed from "Extended observation of 6 hours or more" to "Extended observation after resolution" so it matches the explanation and the cited JTF 2020 wording.
- anaphylaxis-45 q3: key unchanged. Only a distractor was replaced.

## Checked and found consistent

- Key position balance across the 103 single questions: 22, 21, 23, 20 and 17 keys in positions 1 to 5, largest 22 percent. The key is the single longest option in 29 percent. Both unchanged by my edits.
- Key feature counts after the 46 q3 remap: KF1 8, KF2 25, KF3 36, KF4 43. Every key feature is tested.
- Every stem runs 71 to 114 words, opens in CFPC form, names no patient and keeps vitals in the `vitals` field. Every update is 10 to 45 words. Every explanation is over 200 characters and none calls its key wrong.
- Options with doses of one drug out of numeric order (18 q2, 21 q1, 23 q2, 42 q1, 45 q2) are allowed by the spec and the gate, which let doses of one drug sit in any order.

## Note on review-extra.ts

anaphylaxis-48 is a word-for-word copy of anaphylaxis-26, and anaphylaxis-49 of anaphylaxis-37, each with one planted defect. The Lens A report says both defects were fixed, but when I opened the file both were still present. I fixed them. I agree with Lens A that neither SAMP should be added to the batch: each would fail the near-duplicate stem gate against its twin. The file is not exported from `index.ts`.

## Sources verified

My lens checks consistency against the stem and the cited source, not source existence. I did not re-fetch sources. The thresholds I checked numbers against are the ones stated in the batch and confirmed in the Lens A source list: CPS 2011 (reaffirmed 2018) for 0.01 mg/kg to 0.5 mg and 20 mL/kg boluses, CSACI 2021 (https://pmc.ncbi.nlm.nih.gov/articles/PMC8670273/) for the 25 kg autoinjector band, RCUK 2021 for the 1 mL/kg/hour infusion start, the Fresenius Kabi Canada vancomycin monograph for 10 mg/minute, and CPS 2021 acute asthma for 10 puffs at 20 kg or more.

## Needs physician decision

1. anaphylaxis-22 q3 (clonal mast cell disorder features) and anaphylaxis-21 q2 (repeat ECG and troponin) are mapped to key features 2 and 3. Both fit loosely. I left them unchanged.
2. anaphylaxis-27 q1 and anaphylaxis-38 q3 rely on JTF 2020 "up to 6 hours or longer". RCUK 2021 sets at least 6 hours after two doses. The keys hold under both, but a physician may prefer one cited threshold.
3. anaphylaxis-48 and anaphylaxis-49: decide whether to discard them. They duplicate 26 and 37.

## Summary

- SAMPs reviewed: 34 (32 in the batch and 2 extra).
- SAMPs with a defect found: 13 (16, 19, 23, 27, 28, 33, 38, 44, 45, 46 and 47 in the batch, and 48 and 49 in the extra file).
- Fixes: 16 in total. 1 wrong key (48). 1 invented lab value (49). 1 timeline contradiction (38) and 1 ambiguous timeline (47). 5 explanation claims not supported by the case, fixed by adding the fact to the case (19, 23, 28, 33, 44). 3 explanation statements that were inaccurate or overstated (16, 23, 46 q1). 1 threshold mismatch between key and explanation (27). 1 justification inside an option (45 q3). 1 update implying an unstated finding (45 q2). 1 key feature remap (46 q3).
- Arithmetic: every weight-based dose, bolus, infusion rate, unit conversion and age threshold recomputed by script. No arithmetic error found.
- Most serious: the 48 q1 key pointed to hypertrophic cardiomyopathy, the 49 q2 explanation relied on an invented lactate, and the 38 timeline put the rescue dose before the reaction began.
