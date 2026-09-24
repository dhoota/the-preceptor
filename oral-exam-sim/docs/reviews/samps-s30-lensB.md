# SAMP batch s30 review, Lens B (internal consistency and numbers)

Lens: B, internal consistency and numbers. Scope: `src/samps/s30/cqi.ts` (cqi-16 to cqi-35) and `src/samps/s30/review-extra.ts` (cqi-36 and cqi-37). Every stem, update, option and explanation was read against the others, SAMP by SAMP. Every number was recomputed with a script. The Lens A report was not relied on. Where Lens A said it had already fixed something, the file was checked, and two of those fixes were not present in the current file (see below). This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| cqi-36 (extra) | q1 | correct | Keyed "Disclose only to the man who saw it" (index 2), while its own explanation rejects that option and argues for contacting all 37. Key set to index 0, "Contact and offer testing to all 37". Lens A reported this fix, but the file still held index 2. | High |
| cqi-37 (extra) | q2 | explanation | Last sentence cited "a serum lactate of 7.8 mmol/L on the first blood gas". The case gives no blood gas and no lactate, and a lactate has nothing to do with handover. Sentence removed. Lens A reported this fix, but the sentence was still in the file. | High |
| cqi-24 | stem | stem | The key "Sentinel diagnosis admitted in 7 days" and the explanation rest on an admitted return, but the stem never said she was admitted. The program audits 7-day returns that are admitted with a sentinel diagnosis. Added "and she is admitted". | High |
| cqi-34 | q3 | options, correct | The keyed option "No triage prompt for episodic crying raised miss risk" was put last under the "No ..." rule, but it is a finding, not a "No [action]" option. It broke alphabetical order, and at 53 characters it was clearly the longest option (1.32 times the mean distractor). Reworded to "Triage tool gap made a miss more likely" (39 characters) and placed in alphabetical order. Key moves from index 4 to index 3. The explanation already gives the full finding. | Medium |
| cqi-16 | q1 | options | "No harm incident" sat last as if it were a "No [action]" option. It is a classification term, so it belongs in alphabetical order. Moved between "Near miss incident" and "Recognized complication". Key unchanged at index 1. | Medium |
| cqi-26 | stem | stem | q3 option and explanation refer to "all 40 physicians", a number the case never gave. The stem now reads "Rates among its 40 physicians range from 9% to 61%." | Medium |
| cqi-34 | q2 | explanation | Said the framing question "leads to ... the discharge instructions and the return precautions". The case never mentions either. Replaced with the stem fact: the triage tool had no prompt for episodic crying in infants. | Low |
| cqi-20 | stem | stem | "At 2 hours 40 minutes he collapses" came right after "2 hours of left flank pain", so the clock was unclear (from pain onset or from triage). The 30-minute reassessment policy only makes sense from triage. Now "Two hours and 40 minutes after triage he collapses." | Low |

## Key changes

- cqi-36 q1: before index 2 "Disclose only to the man who saw it", after index 0 "Contact and offer testing to all 37". The old key contradicted its own explanation.
- cqi-34 q3: the key is the same finding, reworded. Its position moves from index 4 to index 3 because the option now sits in alphabetical order. The answer itself does not change.

## Numbers recomputed (script)

All of these check out:

- cqi-16: 110 lb is 49.9 kg. The dose from 110 kg is 2.2 times the dose for 50 kg, or exactly 2 times with a 100 kg cap, so "about twice" is right. 40 x 500 mg is 20 g, or 400 mg/kg.
- cqi-17 q3: 11 other near misses plus this one gives 12.
- cqi-18: hemoglobin 128 then 71 then 58 g/L. Pulse 112 and BP 96/58 support "hypotensive and tachycardic".
- cqi-19: 22% of 60 is 13.2, so 13 of 60 (21.7%) rounds to 22%. Run chart: 90, 84, 79, 71, 62 is five falling points in a row, which is a trend (5 or more). All five are below the frozen median of 94, but a shift needs 6, so no shift. The aim of 80% by a date, and the later 84%, agree.
- cqi-23: 14 h / 2 h is 7 times. 39 h / 8 h is 4.9, "nearly 5 times". A 1.4 h time to assessment is above the 1 h median target, and the explanation now says so. 41 h is past the 39 h 90th percentile and spans a second night.
- cqi-24: day 4 is 96 hours, which is past the 72-hour window.
- cqi-25: 200 audited, 116 scanned, 36 met the rule, so 80 outside it. Reasons 38 + 26 + 10 + 6 = 80. 38 + 26 = 64, and 64/80 = 80%. 36/116 = 31%. Run chart: 5 below and 3 above out of 8 cannot make 6 in a row.
- cqi-26: 38% of 400 is 152.
- cqi-28: INR 8.9 is above the trigger of 6.
- cqi-31: 61 minus 44 is 17 naloxone doses not given for overdose, against 3 reports.
- cqi-32: 6.1% is above the UCL of 4.4%. The limits sit symmetrically at plus and minus 1.8 around 2.6%.
- cqi-33: 15 mg twice daily was ordered, 20 mg twice daily was taken (40 mg against 30 mg a day).
- cqi-35: 20 mmol over 2 hours is 10 mmol/hour. 20 mmol in 100 mL is 0.2 mmol/mL. 2 g in 50 mL is 4%. 2 mmol/mL and 50% magnesium are at or above the ROP cut-offs.

Format statistics after the fixes: 67 `single` questions. Key positions [13, 14, 13, 14, 13], none above 25%. No key is above 1.5 times its mean distractor length (highest 1.43, cqi-27 q3). No longest to shortest option ratio above 2.1 (highest 1.87). Prompts run 12 to 19 words. Updates run 8 to 38 words. No en or em dashes, and no semicolons in any string.

## Sources verified

- ISMP Canada. Canadian High-Alert Medication List. 2024. Poster text read. It lists insulins, injectable anticoagulants (including LMWH), IV acetylcysteine as an antidote for acetaminophen overdose, magnesium sulfate above 20% and potassium at 2 mmol/mL or more. cqi-22 q4 and cqi-36 q4 are supported. https://ismpcanada.ca/wp-content/uploads/ISMP-Canada-High-Alert-Med-List-2024-11x17-1.pdf
- Accreditation Canada concentrated electrolytes ROP: potassium salts at 2 mmol/mL or more and magnesium sulfate above 20% (Health PEI ROP summary). cqi-35 q2 is supported. https://src.healthpei.ca/sites/src.healthpei.ca/files/Accreditation/ROP_What_are_Concentrated_Electrolytes.pdf
- Ontario ED Return Visit Quality Program: audits some 72-hour returns and all 7-day returns admitted with a sentinel diagnosis (SAH, AMI, pediatric sepsis). This finding led to the cqi-24 stem fix. https://www.cambridge.org/core/journals/canadian-journal-of-emergency-medicine/article/p037-the-ontario-emergency-department-return-visit-quality-program-a-provincial-initiative-to-promote-continuous-quality-improvement/78543BFA2FE64ED1CCC9C0D04AE7022B
- CAEP overcrowding targets: time to inpatient bed median 2 hours and 90th percentile 8 hours, time to physician initial assessment median 1 hour. https://www.caep.ca/position-statements/emergency-department-overcrowding
- Ivers N and colleagues. Cochrane 2025 (CD000259.pub4). Abstract read. Larger effects came with individual data, comparison with top peers or a benchmark, a local champion, interactive formats and action plans. There was no effect for the number of indicators or for comparison with the average of all peers. cqi-26 q1 and q2 match. https://pubmed.ncbi.nlm.nih.gov/40130784/

## Needs physician decision

- cqi-36 and cqi-37 repeat cqi-22 and cqi-29 word for word, apart from the planted faults. They would fail the near-duplicate stem rule. Recommend rejecting both even after the fixes.
- Several CQI stems do not use the standard "presents to the emergency department" opening: cqi-17, cqi-19, cqi-23, cqi-31, cqi-32 and cqi-35. cqi-19 and cqi-25 have an empty vitals field. This suits audit-style cases and the tests pass. Low confidence, left unchanged.
- cqi-32 q3 cites Perla 2011 (run charts) for the tampering point. Lens A found the tampering sentence in Perla. Benneyan 2003 would be a closer fit, but Perla would then be uncited in that SAMP. Left as is.
- cqi-18 q2 distractor "He takes apixaban and naproxen daily": apixaban is taken twice daily. It is a distractor, and "daily" reads as "every day". Low, left unchanged.

## Summary

- 8 fixes in 7 SAMPs: 1 wrong key (cqi-36 q1), 1 invented fact in an explanation (cqi-37 q2), 3 facts that the explanation or options relied on but the stem never gave (cqi-24 stem, cqi-26 stem, cqi-34 q2), 2 option order or cueing faults (cqi-34 q3, cqi-16 q1) and 1 unclear timeline (cqi-20).
- Most serious: the wrong key in cqi-36 q1 and the invented lactate in cqi-37 q2. Both were still in the file even though Lens A reported fixing them. Next is the cqi-24 stem, which never said she was admitted, although the key depends on admission.
- Every recomputed rate, run chart rule, percentile ratio, interval and dose was correct.
- SAMP ids with a defect: cqi-16, cqi-20, cqi-24, cqi-26, cqi-34, cqi-36, cqi-37.
- Gates: `npx tsc --noEmit -p . | grep samps/s30` is clean, and `SAMP_BATCH=s30 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 443 of 443.
