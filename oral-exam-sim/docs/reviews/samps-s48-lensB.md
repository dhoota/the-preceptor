# Batch s48 review, Lens B (internal consistency and numbers)

Batch: pulmonary edema, `src/samps/s48/pulmonary-edema.ts` (pulmonary-edema-16 to pulmonary-edema-38) and `src/samps/s48/review-extra.ts` (pulmonary-edema-39 and pulmonary-edema-40).

Lens: B, internal consistency and numbers. The writer's post Lens A rework (pulmonary-edema-26 rebuilt, pulmonary-edema-16 q3, pulmonary-edema-29 q1, pulmonary-edema-32 q1, pulmonary-edema-35 q2 and q3 replaced) had no clinical review, so those items also had a full Lens A check. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after all edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s48` prints nothing. `SAMP_BATCH=s48 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 464 of 464 (4 fewer tests than before because one question was removed). There are 68 single and 6 menu questions. Single key positions are 14, 12, 13, 15 and 14 (highest 22.1 percent). The key is the only longest option in 17 of 68 singles (25 percent).

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| pulmonary-edema-16 | old q1 | whole question | Repeated chest-pain (s28) q1 almost exactly ("which history before nitroglycerin", key recent erectile dysfunction drug). Removed. Tadalafil and its timing moved into the stem. The SAMP now has 3 questions | medium |
| pulmonary-edema-16 | new q1 (old q2) | update, explanation, source | The update was 4 words once tadalafil moved to the stem. Now gives BP and saturation after 10 minutes of NIV. Explanation now states the Kloner result (still present at 24 hours, gone by 48) and cites Kloner, which is otherwise uncited | medium |
| pulmonary-edema-16 | new q2 (old q3) | stem, update, explanation | Cueing. The update named pioglitazone and said it was added 2 months ago, which gave the answer away. The stem now lists an unnamed second diabetes tablet, and the update says that tablet was started 2 months ago. The candidate must identify it as pioglitazone | high |
| pulmonary-edema-16 | new q3 (old q4) | update | Explanation said "he is in sinus rhythm" but the case never gave the rhythm. Added sinus rhythm to the ECG update | medium |
| pulmonary-edema-17 | q1 | stem | Explanation said the echo showed no septal hypertrophy or outflow obstruction. The stem gave only EF and valves. Added "normal wall thickness" to the stem and matched the explanation | high |
| pulmonary-edema-18 | stem | stem | q1 explanation, the q2 prompt ("slow her ventricular rate") and the q4 update ("remains in atrial fibrillation") assume atrial fibrillation, but no ECG was ever given. Added "The ECG shows atrial fibrillation at 148/minute" to the stem | high |
| pulmonary-edema-21 | q2 | explanation | "A rising PCO2" when only one PCO2 is given. Now "a PCO2 of 58 mmHg" | medium |
| pulmonary-edema-22 | q1 | explanation | "Within minutes of opioid reversal". The stem gives no timing. Now "soon after" | low |
| pulmonary-edema-23 | q3 | explanation | Said Bhattacharya warns diuretics cause hypovolemia. The abstract recommends diuresis as part of supportive care unless the patient is in shock. Reworded. Key unchanged | medium |
| pulmonary-edema-26 | stem | stem | Second nivolumab with ipilimumab dose 18 days after the first. The combination is given every 3 weeks. Now 7 days ago (21 days after the first dose 4 weeks ago) | medium |
| pulmonary-edema-26 | q1 | update | Troponin T can rise from skeletal myositis alone, and he has a CK of 4200 U/L, which weakens the cardiac inference. Changed to high-sensitivity troponin I 1850 ng/L (reference below 26 ng/L) | low |
| pulmonary-edema-26 | q1 | explanation | Omitted the IC-OS rule of troponin plus two minor criteria after excluding ACS, and left out two criteria he meets (clinical syndrome, fall in systolic function). "Thigh weakness" became "hip flexor weakness", matching the stem | medium |
| pulmonary-edema-26 | q2 | explanation | False attribution. The quoted "methylprednisolone 1 to 2 mg/kg or higher-dose bolus" and "permanently discontinue if any myocardial involvement" come from the SITC myositis section. SITC for myocarditis says methylprednisolone 1000 mg IV daily for 3 to 5 days, more immunosuppression if no response in 24 hours, and permanent discontinuation "should be seriously considered". Rewritten. Key unchanged | high |
| pulmonary-edema-28 | title | title | "Three weeks" did not match the stem (clozapine started 18 days ago). Now "Flu symptoms 18 days after a new medication" | low |
| pulmonary-edema-29 | stem, q2 | stem, option, explanation | Threshold arithmetic did not hold. At age 52 the ESC 2021 acute rule-in is 450 pg/mL (under 55) and the HFA one is 900 (50 to 75). Halving for obesity as HFA advises gives 225 under ESC, so 410 pg/mL would be rule-in and "Diagnostic of heart failure" becomes defensible. The explanation claimed 410 stays below 450, which is true only under HFA. Age changed to 58. Both bodies then use 900, halved to 450, rule-out halved to 150, and 410 is indeterminate under every combination | high |
| pulmonary-edema-29 | q1 | explanation | Said ESC lists bendopnea "among the symptoms of heart failure". ESC Table 6 lists it as a less typical symptom, a feature of advanced heart failure. Wording corrected | medium |
| pulmonary-edema-30 | q3 | explanation | "Her memory problem". The stem gives no cognitive impairment, only that she cannot name her medications. Now "her difficulty managing her pills" | low |
| pulmonary-edema-32 | q1 | explanation | "Major predictor of death and readmission" overstated ESC 2021, which says persistent congestion before discharge "is associated with a higher risk of readmission and mortality". Now matches the text | low |
| pulmonary-edema-34 | q3 | explanation | "A rising PCO2" when only one gas is given. Now "a PCO2 of 58 mmHg" | medium |
| pulmonary-edema-35 | stem | stem | Explanation says "he has taken no phosphodiesterase inhibitor". The stem said only "no erectile dysfunction drugs", but tadalafil is also taken for BPH and pulmonary hypertension. Now "no phosphodiesterase 5 inhibitor" | low |
| pulmonary-edema-35 | q3 | options | Justification inside options: the key "Refit the mask to stop the leak" carried its own reason, and "Intubate before he tires" and "morphine 4 mg IV for comfort" did too. Now "Refit or change the CPAP mask", "Rapid sequence intubation" and "morphine 4 mg IV". The key stays at index 3 | medium |
| pulmonary-edema-36 | q3 | options | Justification inside a distractor: "Zero PEEP to protect her ICP". Now "Zero PEEP with normocapnia", which parallels the key | low |
| pulmonary-edema-39 (review-extra) | q1 | key | Planted wrong key is back. Keyed index 3 "Pulmonary embolism" against a negative pressure edema explanation. Lens A reported fixing this, but the file on disk still had it. Corrected to index 1 | high |
| pulmonary-edema-39 (review-extra) | q3 | explanation | Same false diuretic claim as pulmonary-edema-23 q3. Reworded | medium |
| pulmonary-edema-40 (review-extra) | q2 | explanation | Planted invented fact is back: "serum lactate of 7.8 mmol/L seen on the first blood gas". No lactate appears in the case. Removed again | high |

## Key changes

- pulmonary-edema-39 q1 (review-extra): before, index 3 "Pulmonary embolism". After, index 1 "Negative pressure pulmonary edema". Reason: the explanation and case support negative pressure edema.
- pulmonary-edema-16: old q1 (key "Recent phosphodiesterase 5 inhibitor use") was removed as a duplicate of the s28 chest-pain item. The remaining questions keep their keys: furosemide 40 mg IV, pioglitazone, and intensifying antihypertensive therapy. They are renumbered q1 to q3.
- No other key changed.

## Numbers recomputed (script in scratchpad)

All of these hold unless listed under Fixes.

- Furosemide. pulmonary-edema-16: diuretic naive, 40 mg IV is within 20 to 40 mg. pulmonary-edema-30: 40 mg daily, so 40 mg IV fits both ESC rules, and 160 mg is 4 times the daily dose. pulmonary-edema-31: 80 mg twice daily is 160 mg, IV 160 mg is 1 times, 110 mL over 2 hours is 55 mL/hour, urine sodium 38 is below 50 to 70 mmol/L, doubled to 320 mg, and 80 mL/hour is still below 100. pulmonary-edema-34: 40 mg daily, so 40 to 80 mg IV. pulmonary-edema-25: 1 mg/kg at 26 kg is 26 mg, and the distractors are 20 mL/kg saline (520 mL), 50 mg/kg ceftriaxone (1.3 g) and 1 mg/kg methylprednisolone (26 mg). pulmonary-edema-37: 17 kg gives 850 mg ceftriaxone, 17 mg furosemide and 34 mg methylprednisolone. All checked against the ESC 2021 text and Figure 13.
- Nitroglycerin. pulmonary-edema-35 q2: a 1 mg IV bolus is inside the ESC 2021 wording "1 to 2 mg boluses in severely hypertensive patients with acute pulmonary oedema" (verified in the full text). Infusion at 50 mcg/minute is below the usual ceiling. pulmonary-edema-16: tadalafil 9 hours ago is inside the interaction window (Kloner: present at 4, 8 and 24 hours, absent from 48 hours).
- NT-proBNP. See the pulmonary-edema-29 row. ESC 2021 rule-in values are over 450 pg/mL under 55, over 900 from 55 to 75 and over 1800 over 75. HFA 2019 uses under 50, 50 to 75 and over 75. The acute rule-out is 300 and the non-acute one 125. BMI 43 at 138 kg gives a height of 1.79 m, which is plausible.
- OHFRS (pulmonary-edema-32): prior intubation 2, arrival saturation 88% 1, walk pulse 116 1, urea 14.6 1, for a total of 5. Arrival pulse 104 is below 110, bicarbonate 27 is below 35 and NT-proBNP 3800 is below 5000, so they score nothing. The distractors 2, 3, 4 and 6 are all wrong.
- Other values. Creatinine 98 to 162 is a 65.3 percent rise. 88 to 214 is 2.43 times ("more than doubled" holds). Troponin 310 against a limit of 14 is 22.1 times ("more than 20 times" holds). CRP 142 is over 100. MAP at 84/50 is 61.3 ("about 61" holds). 3 L at 70 kg is 43 mL/kg. Enoxaparin 1 mg/kg at 70 kg is 70 mg. Pulse pressure at 168/62 is 106 ("wide" holds). GCS in pulmonary-edema-36 is E3 V4 M5, 12. Kidney lengths 9.8 and 9.4 cm are over 8 cm. Ronaldson: 83 percent of onsets fall on days 14 to 21, and day 18 fits.
- JVP, BP, SpO2 and timelines were checked against every update. The only mismatches found are listed under Fixes.

## Lens A check of the reworked items

- pulmonary-edema-26 (checkpoint inhibitor myocarditis). The IC-OS 2022 definition was verified on the publisher page. The key holds. SITC 2021 was verified in full text (Europe PMC). The steroid claim was wrong and is now fixed. q3 (intubation plus norepinephrine) is consistent with ESC 2021 on norepinephrine in cardiogenic shock. The ESC 2022 cardio-oncology guideline was not fetched, but it is not cited. No other SAMP in `src/samps/` covers checkpoint inhibitors.
- pulmonary-edema-16 q3 (now q2, pioglitazone). ESC 2021 text verified: "Thiazolidinediones (glitazones) are not recommended in patients with HF". The key holds.
- pulmonary-edema-29 q1 (bendopnea). ESC 2021 Table 6 lists it as a less typical symptom, and its footnote calls it a symptom of advanced HF. Against five classic asthma triggers it is the best discriminator, so the key holds. See the physician note on obesity.
- pulmonary-edema-32 q1 (residual congestion). ESC 2021 section 11.3.11 verified. The key holds.
- pulmonary-edema-35 q2 (nitroglycerin bolus). ESC 2021 text verified. The key holds. Nitroglycerin injection is sold in Canada.
- pulmonary-edema-35 q3 (mask leak). The Masip 2018 abstract supports "the correct selection of ... interfaces ... avoiding excessive leakage". The full text was blocked. The key holds.

## Sources verified

- McDonagh 2021 ESC HF guideline. The full text was downloaded and searched (Table 6, Figure 6 footnote, Figure 13, sections 11.3.3 and 11.3.11, and the glitazone recommendation): https://www.pascar.org/uploads/files/2021_ESC_Guidelines_for_HF.pdf
- Brahmer 2021 SITC irAE guideline, full text through the Europe PMC REST API (PMC8237720): https://pmc.ncbi.nlm.nih.gov/articles/PMC8237720/
- Herrmann 2022 IC-OS consensus, definition read on the publisher page: https://academic.oup.com/eurheartj/article/43/4/280/6468700 (Europe PMC record PMID 34904661)
- Masip 2018 NIV in AHF, Europe PMC abstract (PMID 29186485): https://doi.org/10.1093/eurheartj/ehx580
- Kloner 2003 tadalafil and nitrates, Europe PMC abstract (PMID 14642699)
- Ronaldson 2011 clozapine myocarditis, Europe PMC abstract (PMID 21524186)
- Bhattacharya 2016 negative pressure pulmonary edema, Europe PMC abstract (PMID 27063348)
- The troponin T specificity concern in myositis comes from the search result summary of JACC CardioOncology 2024 (https://www.jacc.org/doi/10.1016/j.jaccao.2024.07.001). It is used only to motivate the switch to troponin I, and no claim cites it.
- Other citations were taken from the Lens A verification and not re-fetched.

## Needs physician decision

- pulmonary-edema-39 and pulmonary-edema-40 (review-extra) copy pulmonary-edema-23 and pulmonary-edema-31 word for word apart from the planted defects. Reject both from the batch. Note that the Lens A fixes to this file were not on disk when this review started.
- pulmonary-edema-16 q1 (furosemide when tadalafil rules out nitrates) still shares the teaching "no nitrate within 48 hours of tadalafil" with chest-pain s28 q2 and s42 ischemic heart disease q2, though the key differs (a diuretic in pulmonary edema). Accept or rework.
- pulmonary-edema-21 q1 (benzodiazepine and nitroglycerin first in cocaine toxicity, no beta-blocker) repeats the teaching in s12 ischemic heart disease and s05 chest-pain (write-in). The pulmonary edema context and menu format are new.
- pulmonary-edema-35 q2 (escalate nitrate, not beta-blocker, in hypertensive edema) overlaps sob-17 q2 (s51), which keys a nitroglycerin infusion at 100 mcg/minute with the same beta-blocker distractors. The bolus angle is new.
- pulmonary-edema-38 q1 (orthopnea and JVP point to cardiac wheeze) repeats pulmonary-edema-03 q1 (s15, "wheezy older woman labelled with COPD"). pulmonary-edema-29 q1 teaches a similar point with bendopnea.
- Within the batch, "NIV failing, so intubate" is keyed four times: pulmonary-edema-21 q2, pulmonary-edema-23 q3, pulmonary-edema-26 q3 and pulmonary-edema-34 q3. It is also in pulmonary-edema-08 (s15) and sob-17 q3 (s51). Consider varying one or two.
- pulmonary-edema-29 q1: at a BMI of 43, bendopnea can come from abdominal girth alone, which lowers its specificity. It is still the best of the five options, but a physician may prefer another discriminator such as paroxysmal nocturnal dyspnea.
- pulmonary-edema-26 q2: the source is SITC (US-based, with an international panel). The ESC 2022 cardio-oncology guideline (methylprednisolone 500 to 1000 mg daily) agrees but was not fetched.
- The Lens A open items remain: pulmonary-edema-24 against environmental-31, pulmonary-edema-29 against pulmonary-edema-09, pulmonary-edema-32 against pulmonary-edema-07, morphine against hydromorphone in pulmonary-edema-33, and the unverified CCS 2017 claim in pulmonary-edema-30 q3.

## Summary

- 23 SAMPs in the main file and 2 in review-extra were checked question by question. Every number was recomputed by script.
- 25 fix rows:
  - 7 invented or missing stem facts (17 echo, 18 AF, 16 rhythm, 21 and 34 "rising" PCO2, 22 timing, 30 memory)
  - 3 threshold or timeline errors (29 age band arithmetic, 26 dosing interval, 28 title)
  - 4 false source attributions (26 q2 SITC, 23 q3 and 39 q3 diuretics, 29 q1 bendopnea wording). One wording overstatement (32 q1).
  - 1 cue (16 pioglitazone update)
  - 3 justification-in-option fixes (35 q3, 36 q3)
  - 1 duplicate question removed (16 old q1)
  - 2 re-planted defects fixed (39 key, 40 lactate)
  - Minor wording fixes in 16, 26 and 35
- 1 key change (pulmonary-edema-39 q1) and 1 question removed (pulmonary-edema-16 old q1).
- Most serious errors: the pulmonary-edema-26 q2 steroid regimen was taken from the SITC myositis section, not the myocarditis section. The pulmonary-edema-29 NT-proBNP arithmetic failed under ESC age bands with the obesity adjustment, which made a distractor defensible. The pulmonary-edema-16 update gave away its answer. pulmonary-edema-18 assumed atrial fibrillation that was never shown. The planted defects in pulmonary-edema-39 and pulmonary-edema-40 were back on disk.
- SAMP ids with a defect: pulmonary-edema-16, pulmonary-edema-17, pulmonary-edema-18, pulmonary-edema-21, pulmonary-edema-22, pulmonary-edema-23, pulmonary-edema-26, pulmonary-edema-28, pulmonary-edema-29, pulmonary-edema-30, pulmonary-edema-32, pulmonary-edema-34, pulmonary-edema-35, pulmonary-edema-36, pulmonary-edema-39, pulmonary-edema-40.
