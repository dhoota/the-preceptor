# SAMP review. Batch s28, chest pain. Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Scope: all 32 SAMPs in `src/samps/s28/chest-pain.ts` (chest-pain-16 to chest-pain-47) and the 2 SAMPs in `src/samps/s28/review-extra.ts` (chest-pain-48 and chest-pain-49). Each SAMP was read on its own, every explanation sentence against its stem and updates. The Lens A report was not relied on. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| chest-pain-48 (extra) | q1 | correct | Keyed index 4 "It should be adjusted for his creatinine", which the explanation itself rejects. The Lens A report says this was fixed, but the file on disk still held the wrong key. Key set to index 2 "It needs a repeat value to assess for a rise" | high |
| chest-pain-49 (extra) | q2 | explanation | Invented fact. "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" is in no stem or update and supports nothing. The Lens A report says this was removed, but it was still on disk. Sentence removed | high |
| chest-pain-36 | q2 | explanation | Timeline error. Said the occlusion came "weeks after stopping ticagrelor". The stem says he stopped it 5 days ago (the stent was 6 weeks ago). Now "5 days after stopping ticagrelor" | high |
| chest-pain-46 | q2 | options, explanation | Distractor "It meets the PERC criterion for no testing" is literally half true. A saturation of 95% does meet the PERC saturation item. Replaced with "It lets PERC rule out PE". The explanation now says 95% meets the PERC threshold and lists every PERC item he fails, adding the unilateral leg swelling the stem gives | medium |
| chest-pain-34 | q1 | explanation | Said "relief with rest describe his angina". The stem never says rest relieved his pain, and the q3 update says the tightness continues. Reworded as a general feature of stable angina | medium |
| chest-pain-45 | q2 | explanation | Said chest-only CT "misses the iliac involvement that explains his leg". Iliac extension is first revealed in the q3 update. Reworded to what the stem supports (his cold leg suggests abdominal and iliac extension) | medium |
| chest-pain-19 | q1 | stem | Explanation rejects pneumonia on "no fever or crackles". The stem never said there were no crackles. Added "with no crackles" to the chest examination | medium |
| chest-pain-33 | q1 | stem | Wells explanation says she has no "recent surgery to add". The stem did not say so. Added "recent surgery" to the stem's list of negatives. Wells stays 8.5 | medium |
| chest-pain-28 | q1 | stem | Explanation and a menu option rely on "premenopausal" status, which the stem never gave. Added "has regular menstrual periods" | low |
| chest-pain-26 | q1 | options | Two distractors carried a justification inside the option ("because it exceeds the 99th percentile", "because it matches his baseline"). Shortened to "It confirms NSTEMI above the 99th percentile" and "It excludes MI given his baseline". Same change mirrored in chest-pain-48 q1 | low |
| chest-pain-16 | q1 | options, correct | Key "Onset during exertion with arm radiation" was the longest option and compound. Shortened to "Exertional onset with arm radiation". Alphabetical order moves the key from index 4 to index 2 | low |
| chest-pain-24 | q2 | options | Key "Recent admission for a pain crisis" was the longest option at 1.48 times the mean distractor, just under the 1.5 limit. Shortened to "Recent pain crisis admission" (1.22). Position unchanged | low |
| chest-pain-39 | q1 | options | Key "Oxygen saturation of 94% on room air" was the longest option (1.41). "On room air" is already in the vitals. Shortened to "Oxygen saturation of 94%". Position unchanged | low |
| chest-pain-40 | q4 | explanation | Enoxaparin 1 mg/kg for 88 kg given as "about 90 mg". Now stated exactly as 88 mg | low |

## Key changes

- chest-pain-48 q1 (review-extra): index 4 ("It should be adjusted for his creatinine") to index 2 ("It needs a repeat value to assess for a rise"). The explanation already argued for index 2 and against index 4.
- chest-pain-16 q1: index 4 to index 2. This is a position change only. The keyed answer is the same (exertional onset with arm radiation), reworded shorter and re-sorted.

## Numbers recomputed by script

All correct as written:

- HEART 27 q4: history 1, ECG 0, age 49 gives 1, hypertension alone gives 1, troponin below 5 ng/L gives 0. Total 3.
- HEART risk factor item 26 q2 and 40 q3: prior stent scores 2. LVH is an ECG item.
- Wells 33 q1: 3 + 3 + 1.5 + 1 = 8.5. Wells 39 q3: 3 + 1.5 = 4.5. Wells 46 q1: 3 + 3 + 1.5 + 1.5 + 1 = 10. Wells 32: 0.
- Age-adjusted D-dimer 32 q3: 78 x 10 = 780 ng/mL, and 690 is below it.
- Pregnancy-adapted YEARS 31: 780 is below 1000 with no items, and above 500 with hemoptysis.
- PERC 32 (fails on age 78 only, saturation 96% passes), 39 (fails on pulse 118, saturation 94%, estrogen), 46 (fails on pulse, hemoptysis, surgery, unilateral leg swelling, saturation 95% passes).
- ADD-RS 17: Marfan 1 plus high-risk pain 1 = 2.
- Dalteparin 33: 200 units/kg x 61 kg = 12 200 units, 12 500 unit syringe.
- Heparin bolus 36: 7000 / 90 = 77.8 units/kg. 47: 7000 / 92 = 76.1 units/kg. Both within 70 to 100 units/kg.
- Enoxaparin 40: 88 mg. Enoxaparin distractors 20 (70 mg for 70 kg), 21 (90 mg for 92 kg), 36 (90 mg for 90 kg) are 1 mg/kg.
- Tenecteplase weight bands: 25 (60 kg, 35 mg), 29 (82 kg, 45 mg), 36 (90 kg, 50 mg), 40 (88 kg, 45 mg), 47 (92 kg, 50 mg). All distractor doses match the band.
- Arm pressure difference 18 q2: 174 minus 136 = 38 mmHg. Hemoglobin drop 24 q3: 85 minus 68 = 17 g/L. Troponin delta 26 q4: 118 minus 62 = 56 ng/L. Modified Sgarbossa 29 q4: 6 / 20 = 0.30 and 3 / 20 = 0.15 against 0.25.
- Timelines: 27 onset 22:00 to arrival 08:00 is 10 hours, draw at 08:15. 21 surgery 42 days ago, 35-day prophylaxis ended 7 days ago. 16 troponin at 45 minutes after a 40-minute history at arrival. 30 rash within 72 hours. 37 tadalafil 30 hours, under 48.

Format script (stem 50 to 150 words, updates 10 to 45 words, prompts 10 to 30 words, 3 to 6 explanation sentences, no semicolons or dashes) found no breach. After the fixes, single key positions are 21, 26, 23, 18, 19 of 107 (highest 24.3%), and the key is the longest option in 21 of 107 (19.6%).

## Sources verified

No citation was added or changed under this lens. Numbers were checked against the stems and the standard definitions of HEART, Wells, PERC, ADD-RS, YEARS, ADJUST-PE, modified Sgarbossa and the tenecteplase weight table.

## Needs physician decision

1. review-extra.ts. chest-pain-48 duplicates chest-pain-26 and chest-pain-49 duplicates chest-pain-37. Both extras are now internally correct, but neither should enter the bank. Recommend dropping both. Note that the Lens A fixes to these two SAMPs were not on disk when this review started.
2. chest-pain-27 q2 is tagged key feature 3 (pain history). It tests when a single very low troponin can rule out MI, which fits key feature 5 better. Left as is because q1 already covers timing of onset. Low confidence.
3. chest-pain-18 q4 calls a 4.1 cm aortic root "dilated". Upper limits vary by body size and reference. The key does not depend on it.
4. chest-pain-24 q4 key "Oxygen saturation under 90% on oxygen" is still the longest option (1.47 times the mean distractor). The qualifier is essential, so it was left.

## Summary

- 34 SAMPs reviewed (32 in the batch, 2 extra). 14 fixes in 14 SAMPs.
- By category: 1 wrong key (48), 1 invented fact in an explanation (49), 1 timeline error (36), 1 half-true distractor (46), 4 explanation claims not supported by the stem (19, 28, 33, 34) plus 1 claim that used later information (45), 1 option with a justification inside it (26 and 48), 3 key length cues (16, 24, 39), 1 imprecise dose (40).
- Most serious: the wrong key in chest-pain-48 q1 and the invented lactate in chest-pain-49 q2, both still on disk although the Lens A report says they were fixed. Next, the "weeks after stopping ticagrelor" timeline error in chest-pain-36 q2 and the half-true PERC distractor in chest-pain-46 q2.
- SAMPs with a defect: chest-pain-16, 19, 24, 26, 28, 33, 34, 36, 39, 40, 45, 46, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s28` prints nothing. `SAMP_BATCH=s28 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 699 passed, 0 failed.
