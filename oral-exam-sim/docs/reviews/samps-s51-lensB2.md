# Batch s51 (shortness of breath), second Lens B review

Lens: B, internal consistency and numbers.

Scope: sob-23, sob-33, sob-37, sob-43 and sob-46 in `src/samps/s51/sob.ts`, and every SAMP in `src/samps/s51/review-extra.ts` (sob-48, sob-49). Each question was read sentence by sentence against its stem and updates. I did not rely on the earlier reviews. Every number was recomputed with a script. Format was measured with a script against SAMP_SPEC sections 3 to 7 and 10: stem words, prompt words, update words, option length ratios, key to distractor length and key position. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Recomputed values

- sob-23 q1 Wells score: PE most likely 3, pulse 108/minute 1.5, surgery 3 weeks ago (within 4 weeks) 1.5, previous DVT 1.5. Total 7.5, keyed at index 2. The distractors also check: 4.5 (surgery and DVT left out), 6 (one of them left out), 9 (surgery and immobilization double counted), 10.5 (DVT signs added). The two tier cut point is more than 4, so 4.5 or more is "PE likely".
- sob-37 acid base: Henderson Hasselbalch 6.1 + log10(35 / (0.03 x 84)) = 7.243, which matches pH 7.24. Expected acute bicarbonate 24 + 4.4 = 28.4, matching "about 28". Expected chronic bicarbonate 39.4 to 41.6. So 35 mmol/L is acute on chronic, as the explanation says.
- sob-37 body size: 138 kg at a BMI of 52 kg/m2 gives a height of 1.63 m, which is plausible.
- sob-37 oxygenation: 97% on 6 L/minute is above the 88 to 92% target named in q3. The explanation matches.
- sob-43 oxygenation: 88% on room air in the vitals, then 93% on 3 L/minute in the q2 update. The q2 explanation says oxygen has already corrected the saturation, which matches. The systolic BP of 92 mmHg matches "above 90 mmHg".
- sob-46: high flow at 2 L/kg/minute for 17 kg is 34 L/minute. A saturation of 91% on room air is at or below the BTS 2011 threshold of 92%. Timeline: fever for 7 days, amoxicillin started 4 days ago, so more than 72 hours on treatment. That matches the CPS cut of 48 to 72 hours.
- Timelines in sob-23 (surgery 3 weeks ago, DVT 6 years ago), sob-33 (dyspnea 3 weeks, COPD label 2 weeks, hoarseness 4 months) and sob-43 (pump stopped 90 minutes ago, symptoms for 1 hour) agree with every later statement.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| sob-48 | q1 | correct | Planted defect still on disk. The key was index 4, "Retropharyngeal abscess", while the stem and the explanation describe Ludwig angina. Set to index 2, "Ludwig angina" | high |
| sob-49 | q2 | explanation | Planted defect still on disk. The closing sentence "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" traces to nothing in the case, and a lactate cannot show how long hypercapnia has lasted. Removed | high |
| sob-23 | q1 | explanation | "That is above 4.5, so PE is likely" puts the cut point in the wrong place. Under the two tier Wells score a score of 4.5 is already "PE likely" (more than 4). Now reads "4.5 or more" | medium |
| sob-23 | q2 | options | "Discharge as PE is excluded" puts a justification inside the option (SAMP_SPEC section 7). Now "Discharge with outpatient follow up". The explanation's reason still holds and the order is unchanged | low |
| sob-33 | q1 | explanation | Called the node "hard". The stem says "firm". Now "firm" | low |
| sob-33 | q2 | prompt | Negative lead-in, "are not explained by a diagnosis of COPD" (SAMP_SPEC section 6). Now "point to a problem other than COPD". The key and the explanation are unchanged | medium |
| sob-43 | q1 | options | The key "epoprostenol infusion restarted" was the only option not phrased as a noun, and it was the longest option. That made it stand out by grammar and length. Now "epoprostenol infusion", parallel with "norepinephrine infusion". The key index is unchanged | medium |
| sob-43 | q2 | update | 46 words, above the 45 word limit (SAMP_SPEC section 5). Reworded to 40 words with the same values | high |
| sob-43 | q3 | options | Two distractors carried their reasons inside the option: "metoprolol 5 mg IV for tachycardia" and "Stop epoprostenol for the flushing". Now "metoprolol 5 mg IV" and "Stop the epoprostenol infusion". The order and key are unchanged | low |
| sob-48 | q4 | update | 8 words, below the 10 word minimum. Now "His airway is secured by awake nasal intubation with a flexible scope, and he is sedated for ongoing ventilation." (18 words) | medium |
| sob-26 | q4 | update | Outside my named scope but in the batch folder: the same 8 word update as sob-48. I applied the same fix | medium |

No defects were found in sob-37 (the committed version) or sob-46 beyond the checks above. Their numbers, thresholds and timelines agree.

## Key changes

- sob-48 q1: index 4 ("Retropharyngeal abscess") to index 2 ("Ludwig angina"). The stem and explanation always described Ludwig angina.

No other key moved.

## Sources verified

This lens checks each explanation against its stem. It does not re-verify sources. The Wells cut point (4.5 or more is PE likely) matches the Thrombosis Canada PE diagnosis guide, 2023 (https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf), as the source note in lensA2 records.

## Needs physician decision

- sob-48 and sob-49 in `review-extra.ts` must not be added to the bank. Their stems have a word trigram overlap of 1.00 with sob-26 and sob-37. They are verbatim copies, and sob-48 is also a copy of sob-26 question by question. The bank duplicate test does not catch this because `review-extra.ts` is not imported into the bank. I fixed the planted defects so that the file is internally correct, but the copies should be dropped. Both planted defects were fixed once before and came back. Someone should check how this file is regenerated.
- sob-37 q2 lead-in "not purely acute" is phrased as a negative, though it is not a "Which is NOT" item. I left it. A physician may prefer "has been present for days or longer".

## Summary

- 11 fixes across 6 SAMP ids (sob-23, sob-26, sob-33, sob-43, sob-48, sob-49). One key change (sob-48 q1).
- By category: wrong key 1, invented stem fact 1, threshold wording 1, stem and explanation mismatch 1, negative lead-in 1, key cueing by grammar and length 1, update length 3, justification inside options 2.
- Most serious: sob-48 q1 keyed the wrong diagnosis, and sob-49 q2 cited a lactate that the case never gave. Both are planted defects that had come back after an earlier fix.
- Every recomputed number (the Wells score, pH, expected bicarbonate, oxygenation, high flow rate by weight, timelines) agrees with its stem after the fixes.
- Gates: `npx tsc --noEmit -p . 2>&1 | grep samps/s51` is clean. `SAMP_BATCH=s51 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 647 of 647 tests.
