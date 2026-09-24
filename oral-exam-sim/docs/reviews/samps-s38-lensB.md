# Batch s38 review, Lens B (internal consistency and numbers)

Lens: B, internal consistency and numbers. Scope: every file in `src/samps/s38/`, including `review-extra.ts`. Every SAMP was checked on its own against its stem and updates. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after all edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s38` prints nothing. `SAMP_BATCH=s38 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 456 of 456.

## Important finding about the Lens A report

The Lens A report says it changed the key of first-trimester-bleeding-39 q1 to index 4 and removed the invented lactate sentence from first-trimester-bleeding-40 q2. Neither change was in `review-extra.ts` when this review began. The file still keyed "Early partial molar pregnancy" and still carried "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this." Both are fixed now. The other Lens A changes in the main file were present.

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| first-trimester-bleeding-39 | q1 | correct | Keyed "Early partial molar pregnancy" while its own explanation argues for "Suspicious but not diagnostic of failure" and says no finding suggests a mole. Key set to index 4. The Lens A fix was not in the file | high |
| first-trimester-bleeding-40 | q2 | explanation | Invented sentence citing a lactate of 7.8 mmol/L from a blood gas that the case never gives. Removed. The Lens A fix was not in the file | high |
| first-trimester-bleeding-36 | q2 | stem | Explanation says "She has no history of transfusion", and the sensitization distractors depend on her having no earlier pregnancy, but the stem gave neither. Added "This is her first pregnancy. She has never had a transfusion." | high |
| first-trimester-bleeding-18 | q3 | stem | Explanation rejects progesterone because she has "no prior loss", but the stem gave no obstetric history. Added "This is her first pregnancy." | high |
| first-trimester-bleeding-24 | stem | stem | A 5 mm crown-rump length dates to 5 weeks 6.7 days (Robinson) or 6 weeks 1.7 days (Hadlock), 6 to 8 days behind a certain LMP of 7 weeks 1 day, beyond the 5 day redating limit before 9 weeks. Changed to 10 mm (7 weeks 0 days) | medium |
| first-trimester-bleeding-29 | q2 | stem | Explanation says "Her blood group is unknown", which the stem never stated. Added "Her blood group is not known." | medium |
| first-trimester-bleeding-36 | q1 | update | Explanation says "No ectropion or polyp was seen", but the update did not say so. Update now reads "The cervix is closed, with no polyp or ectropion, and no blood comes from the os." | medium |
| first-trimester-bleeding-37 | q3 | update | Update was 6 words, below the 10 word minimum, and the 72 hour window in the explanation had no bleed time in the question. Added "Her bleeding began 2 days ago and remains light." | medium |
| first-trimester-bleeding-33 | q2 | update | Update was 5 words, below the 10 word minimum. Now names the dose and plan: misoprostol 600 mcg PO at home tonight with her partner present | low |
| first-trimester-bleeding-38 | q3 | update | Update was 6 words, below the 10 word minimum. Now "One week later, pathology confirms a complete hydatidiform mole. Her hCG has already started to fall." This matches the one week pathology time in q2 | low |
| first-trimester-bleeding-20 | q4 | keyFeature | Mapped to key feature 6 (discharge after a failed pregnancy), but no failed pregnancy is diagnosed. The question tests that testosterone does not exclude pregnancy, which is key feature 2. Remapped to 2 | medium |

## Key changes

- first-trimester-bleeding-39 (review-extra) q1: before, index 1 "Early partial molar pregnancy". After, index 4 "Suspicious but not diagnostic of failure". Mean sac diameter 18 mm with no embryo is in the Doubilet 16 to 24 mm suspicious range, and the explanation already argued for index 4.

## Numbers recomputed by script

Every value below was recomputed independently and matches the text unless listed in the fixes.

- hCG changes. 17: 1200 to 1460 IU/L is a rise of 260 IU/L, 21.7% (text "about 22%"), below the 49% minimum for a start under 1500. 21: 2100 to 2350 IU/L is 11.9% (text "about 12%"), and day 1 plus 3 days is day 4 as the text says. 28: 2400 to 1300 IU/L is a fall of 1100 IU/L, 45.8% (text "about 46%"), faster than the 21 to 35% 2 day minimum.
- Gestational age by sac size (days = MSD + 30). 23 and 39: MSD 18 mm gives 6 weeks 6 days, matching an LMP about 7 weeks ago and a 6 week size uterus. 16: MSD 14 mm gives 6 weeks 2 days against a certain LMP of 7 weeks 4 days. This is left as is, since ectopic sacs often lag, and nothing in the questions depends on it.
- Gestational age by crown-rump length. 37: 62 mm gives 12 weeks 3.1 days (Robinson) and 12 weeks 4.4 days (Hadlock), matching "12 weeks and 4 days". The pregnancy then began about 13 weeks after a birth 6 months ago, which is consistent. 24: see fixes.
- Rh immune globulin timing. 31 and 40: bleeding began 20 hours ago, inside 72 hours, at 13 weeks 1 day, so 300 mcg holds. 36: 12 weeks 5 days less 6 days puts the first dose at 11 weeks 6 days. 37: bleeding began 48 hours ago, still inside 72 hours. 38: 13 weeks 3 days, 300 mcg, pathology in a week would miss the window. 18: 13 weeks 2 days, weak D type 1, no dose. 26: 12 weeks 4 days, already sensitized.
- Methotrexate. Every mention is 50 mg/m2 IM. No SAMP gives a height, weight or body surface area or a computed dose, so there is no milligram figure to check.
- Fluids and blood loss. 22: 30 mL/kg at 60 kg is 1800 mL, matching the option. 19 q2: a pad every 15 minutes is 4 pads an hour, as stated. 35: 600 mL of hemoperitoneum is about 12% of a 4.9 L blood volume at 70 kg (no weight is given), which fits a pulse of 108/minute and a maintained BP.
- Shock index and MAP. 16 q3 1.39 (MAP 69). 19 stem 1.27, q2 1.04, q3 1.20. 22 1.44 (MAP 62). 25 0.75 on metoprolol. 29 1.65 (MAP 60, so "norepinephrine to MAP 65" is a plausible distractor). 34 q3 1.20. 35 1.00. Every explanation that calls a patient shocked or compensating agrees with these values.
- Timelines. 17 and 34: 48 hour hCG repeats agree with "two days". 25: prior right tubal ectopic plus a new left salpingectomy agrees with "two tubal pregnancies" and "her right tube remains". 27: 6 weeks plus 9 days. 32: 9 weeks with a live scan 2 weeks earlier at 7 weeks. 33: 9 weeks 2 days with a live scan at 7 weeks. 35: 7 weeks with a live scan 1 week earlier.
- SOGC 408 complete mole schedule in 38 q3 (weekly from 2 weeks after evacuation until undetectable for 3 weeks, then monthly for 6 months, and one confirming level at 1 month for a partial mole) matches the recommendation text.

## Format checks

- Stems 63 to 129 words. Prompts 11 to 20 words. All explanations over 330 characters.
- No option ratio above the limits. Highest key to mean distractor ratio is 1.42 (35 q1).
- Single question keys by position: 12, 15, 14, 14, 12 of 67 (max 22%). The key is the longest option in 20 of 67 (30%).
- No em or en dashes and no semicolons in any string.

## Sources verified

- SOGC Guideline No. 408, 2021, hCG surveillance and Rh immune globulin after molar evacuation, recommendation text: https://rmtq.ca/en/guidelines/driving-lines/recommendations/
- The Lens A source list (SOGC 448, 414, 460, Barnhart 2004 and 2016, Doubilet 2013, Tuuli 2011) was relied on only for clinical wording. The numbers above were recomputed from the stems.

## Needs physician decision

1. Key feature 6 (discharge after a failed pregnancy) is also named by questions whose pregnancy is live. These are 18 q3 (a cervical polyp with a live pregnancy), 31 q3 (subchorionic hematoma with a live pregnancy) and 35 q3 (progesterone after luteectomy with a live pregnancy). Each is about follow-up or discharge advice, but none involves a failed pregnancy. Decide whether to remap them or accept a broad reading. Low confidence.
2. first-trimester-bleeding-39 and first-trimester-bleeding-40 in review-extra.ts are verbatim copies of 23 and 31. They must not enter the batch, as Lens A also said.
3. first-trimester-bleeding-17 q2. The option "Two prior vaginal examinations" rests only on the earlier visit implied by "planned recheck". It is a weak distractor but true as rejected. Low confidence.
4. first-trimester-bleeding-19 q2. The explanation says "young patients hold their BP until late" for a 37-year-old. This is true for her age but could be worded more precisely.

## Summary

- 11 fixes across 10 SAMPs, 2 of them in review-extra.ts.
- By category: 1 wrong key (39 q1), 1 invented lab value (40 q2), 4 explanation claims with no support in the stem, fixed by adding the fact to the case (18, 29, 36 q1, 36 q2), 1 gestational age inconsistency between the crown-rump length and the dates (24), 3 updates below the 10 word minimum (33 q2, 37 q3, 38 q3, one also adding the bleed time the 72 hour reasoning needs), and 1 key feature remap (20 q4).
- 1 key change: first-trimester-bleeding-39 q1.
- Every hCG percentage, interval, dose by weight, Rh timing and shock index was recomputed by script and matched.
- SAMP ids with a defect: first-trimester-bleeding-18, first-trimester-bleeding-20, first-trimester-bleeding-24, first-trimester-bleeding-29, first-trimester-bleeding-33, first-trimester-bleeding-36, first-trimester-bleeding-37, first-trimester-bleeding-38, first-trimester-bleeding-39, first-trimester-bleeding-40.
