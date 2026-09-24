# Review of s24 (arrhythmia), Lens B: internal consistency and numbers

Reviewer: AI audit, Lens B. This is not clinician verification. Every SAMP stays `reviewed: false`.

Scope: all 32 SAMPs in `src/samps/s24/arrhythmia.ts` (arrhythmia-16 to arrhythmia-47) and the 2 SAMPs in `src/samps/s24/review-extra.ts` (arrhythmia-48, arrhythmia-49). I read every stem, update, option and explanation sentence against its own case. I did not rely on the Lens A report. Its two fixes to review-extra.ts were not present in the file when I started, so I made them again.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| arrhythmia-46 | q1 | options, correct | Options were in the order 0, 1, minus 3, minus 2, minus 1 and failed the option order gate. Reordered low to high (minus 3, minus 2, minus 1, 0, 1). Key moved from index 2 to index 0, still the text "-3". | High |
| arrhythmia-46 | q1 | explanation | Gave no reason for the distractor minus 1, and described minus 2 loosely. Now states that minus 2 omits the predisposition point and minus 1 omits the 2 points for the vasovagal diagnosis. | Medium |
| arrhythmia-48 (review-extra) | q1 | correct | Key pointed to "Wandering atrial pacemaker" (index 4). The stem gives a rate of 128 and the explanation argues for multifocal atrial tachycardia and says wandering atrial pacemaker is below 100/minute. Key set to index 2. | High |
| arrhythmia-49 (review-extra) | q2 | explanation | Final sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas", which the case never gives. Sentence removed. | High |
| arrhythmia-29 | q1 | options, explanation | The key "Deliberate temperature control for at least 36 hours" gave away the answer to q2 (minimum duration, keyed 36 hours) and was the longest option. Key shortened to "Deliberate temperature control now" and the duration removed from the q1 explanation. q2 still teaches it. | High |
| arrhythmia-17 | q4 | update | Pulse "34/minute with 2:1 block" did not match the atrial rate of 76 given in the q3 update. With 2:1 block the ventricular rate is 76 / 2 = 38. Changed to 38/minute. | Low |
| arrhythmia-18 | q4 | explanation | "0.5 to 1 J/kg, which for 4.5 kg is about 2 to 4.5 J". The range is 2.25 to 4.5 J. Stated exactly. | Low |
| arrhythmia-38 | q3 | options, explanation | Threshold mismatch. PALS gives infant SVT as usually 220/minute or more, and the options and explanation said "Above 220/minute". Options now read "140/minute or more" to "220/minute or more" and the explanation matches. | Medium |
| arrhythmia-38 | q1 | explanation | Same threshold wording ("above 220/minute"). Changed to "220/minute or more". | Low |
| arrhythmia-18 | q1 | explanation | Same threshold wording ("usually runs above 220/minute"). Changed to "220/minute or more". | Low |
| arrhythmia-42 | stem | stem | q1 explanation rests on "sudden syncope while seated", but the stem said only "while watching television". Added "seated" to the stem. | Medium |
| arrhythmia-45 | q2 | explanation | Rejected pulmonary embolism because of absent "pleuritic pain or leg swelling", neither of which the case states. Replaced with a reason from the case: embolism would not explain ST depression that clears as soon as sinus rhythm returns. | Medium |

## Recomputed numbers (script)

All computed in a Python script in the scratchpad. Every value below matches the stem and explanation unless listed under Fixes.

- Canadian Syncope Risk Score. arrhythmia-17 q1: heart disease 1, systolic 188 mmHg (above 180) 2, QRS axis minus 60 degrees 1. QRS 118 ms (not above 130), QTc 450 ms (not above 480) and a normal troponin add nothing. Total 4, high risk. Keyed 4. arrhythmia-46 q1: vasovagal predisposition minus 1, ED diagnosis of vasovagal syncope minus 2. Total minus 3, very low risk. Keyed minus 3.
- CHADS-65, arrhythmia-43: age 74 (65 or older), hypertension and diabetes give 3 criteria. No heart failure or stroke. The CAEP 2021 rule for onset 12 to 48 hours needs fewer than 2 criteria, so onset time alone does not permit cardioversion. Apixaban dose reduction criteria: age 74 (under 80), weight 84 kg (over 60), creatinine 88 umol/L (under 133). None met, 5 mg twice daily correct.
- QTc, arrhythmia-32 q2: 420 / sqrt(0.64) = 420 / 0.8 = 525 ms. The distractor 656 ms is 420 / 0.64. Heart rate from RR: 60 / 0.64 = 93.75, which matches the stated rate of 94.
- Heart rates from intervals and ratios: arrhythmia-19 q3 flutter at 300 with 4:1 gives 75, 2:1 gives 150, 3:1 gives 100, 6:1 gives 50. arrhythmia-17 q4 atrial 76 with 2:1 gives 38 (fixed). arrhythmia-28 q4 Wenckebach at an atrial rate of 70 is internally consistent.
- Cardioversion energy by weight: arrhythmia-18 q4 (4.5 kg): 0.5 to 1 J/kg is 2.25 to 4.5 J, 4 J lies inside, 18 J is 4 J/kg, 9 J is 2 J/kg. arrhythmia-39 q3 (45 kg): 45 J is 1 J/kg, 90 J is 2 J/kg. arrhythmia-38 q2 (8.5 kg): 4 J is 0.47 J/kg.
- Adenosine: arrhythmia-18 q3 (4.5 kg) 0.1 mg/kg is 0.45 mg, 0.2 mg/kg is 0.9 mg, 0.2 mg is 0.044 mg/kg. arrhythmia-38 q2 (8.5 kg) 0.85 mg is 0.1 mg/kg. arrhythmia-39 q2 (45 kg) 4.5 mg is 0.1 mg/kg (under the 6 mg maximum), and 9 mg in q3 is 0.2 mg/kg.
- Amiodarone: arrhythmia-18 q4, 22 mg is 5 mg/kg for 4.5 kg (22.5). arrhythmia-39, 225 mg is 5 mg/kg for 45 kg.
- Procainamide: arrhythmia-18 q4 67 mg (67.5), arrhythmia-38 q2 128 mg (127.5), arrhythmia-39 675 mg, arrhythmia-33 q2 1080 mg for 72 kg, all 15 mg/kg.
- Atropine: arrhythmia-31 q3, 0.02 mg/kg for 17 kg is 0.34 mg. arrhythmia-17 q4, two 1 mg doses give the 2 mg stated.
- Epinephrine: arrhythmia-31 q3, 0.01 mg/kg for 17 kg is 0.17 mg, and 1.7 mg is ten times that.
- Magnesium: every magnesium option is the fixed adult dose of 2 g IV (arrhythmia-17, arrhythmia-24, arrhythmia-26, arrhythmia-27, arrhythmia-33, arrhythmia-34, arrhythmia-48). None is weight based.
- Other: diltiazem 0.25 mg/kg for 88 kg is 22 mg (arrhythmia-19 q2). Normal saline 20 mL/kg for 8.5 kg is 170 mL (arrhythmia-38 q2). Verapamil 4.5 mg is 0.1 mg/kg for 45 kg (arrhythmia-39). Dexamethasone 0.1 mg/kg for 3.6 kg is a plausible distractor (arrhythmia-41).

## Format and cueing checks

- Key positions across 104 `single` questions after the reorder: 22.1, 18.3, 18.3, 20.2 and 21.2 percent for positions 1 to 5. All at or under 25 percent and all used.
- The key is the longest option in 33.7 percent of `single` questions (34.6 percent before the arrhythmia-29 q1 fix). This is close to the 35 percent limit. Further key lengthening in this batch would breach it.
- Stems 50 to 150 words, updates 10 to 45 words, explanations at least 200 characters, no semicolons or dashes. Checked by script.
- review-extra.ts: arrhythmia-48 is identical to arrhythmia-26 and arrhythmia-49 identical to arrhythmia-37, apart from the planted defects fixed above. Confirmed by a field by field diff.

## Key changes

- arrhythmia-48 q1 (review-extra): before index 4 (Wandering atrial pacemaker), after index 2 (Multifocal atrial tachycardia). Rate of 128 is above 100/minute and the explanation already argued for multifocal atrial tachycardia.
- arrhythmia-46 q1: index changed from 2 to 0 only because the options were reordered. The keyed text ("-3") is unchanged.

## Sources verified

- Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM 2021. https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/ Read for the 12 to 48 hour rule (fewer than 2 CHADS-65 criteria), the 150 to 200 J starting energy, digoxin first line in acute heart failure and diltiazem 0.25 mg/kg.
- CSRS points used as published in Thiruganasambandamoorthy V, et al. CMAJ 2016 (https://www.cmaj.ca/content/188/12/e289). Not re-read in full by this lens.
- Other citations were not re-verified by this lens. That is Lens A work.

## Needs physician decision

- arrhythmia-48 and arrhythmia-49 (review-extra.ts) duplicate arrhythmia-26 and arrhythmia-37. They should not be added to the bank.
- arrhythmia-41 q3. The explanation relies on PACES 2021 setting the asymptomatic infant pacing threshold at 50/minute or less, with the rate of 55 just above it. A physician should confirm the threshold, since older guidance used 55.
- Key feature mapping is loose in two places, left unchanged: arrhythmia-16 q3 (murmur manoeuvre for HCM, mapped to key feature 1) and arrhythmia-43 q3 (long-term apixaban dose, mapped to key feature 4).

## Summary

- Fixes: 12 in total across 9 SAMPs.
  - Gate and option order: 1 (arrhythmia-46 q1).
  - Wrong key: 1 (arrhythmia-48 q1).
  - Invented fact in an explanation: 1 (arrhythmia-49 q2).
  - Claim not supported by the stem: 2 (arrhythmia-42, arrhythmia-45 q2).
  - Cueing across questions: 1 (arrhythmia-29 q1).
  - Numbers and thresholds: 5 (arrhythmia-17 q4, arrhythmia-18 q4, arrhythmia-38 q3, arrhythmia-38 q1, arrhythmia-18 q1).
  - Missing distractor reason: 1 (arrhythmia-46 q1).
- Every Canadian Syncope Risk Score, CHADS-65 count, QTc, heart rate and weight-based dose was recomputed. Apart from the two small fixes above, all were correct.
- SAMPs with a defect: arrhythmia-17, arrhythmia-18, arrhythmia-29, arrhythmia-38, arrhythmia-42, arrhythmia-45, arrhythmia-46, arrhythmia-48, arrhythmia-49.
- Checks after the edits: tsc shows no s24 errors. `SAMP_BATCH=s24 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 683 of 683.
