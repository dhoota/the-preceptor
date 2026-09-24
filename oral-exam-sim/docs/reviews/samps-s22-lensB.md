# SAMP review. Batch s22, analgesia and sedation. Lens B (internal consistency and numbers)

Reviewer lens: B, internal consistency and numbers. Scope: all 32 SAMPs in `src/samps/s22/analgesia-sedation.ts` (analgesia-sedation-16 to 47) and the 2 SAMPs in `src/samps/s22/review-extra.ts` (analgesia-sedation-48 and 49). I read each SAMP on its own and checked every explanation sentence against its stem and updates. I did not rely on the Lens A report. Every SAMP stays `reviewed: false`. This is an AI audit, not clinician verification.

## Fixes

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| analgesia-sedation-48 (extra) | q1 | correct | Keyed index 3 "ASA IV", but its own explanation says ASA II. The Lens A report says this was fixed, but the file on disk still had the wrong key. Key set to index 1 "ASA II" | high |
| analgesia-sedation-49 (extra) | q2 | explanation | Invented finding. "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" appears in no stem or update and supports nothing. The Lens A report says it was removed, but it was still on disk. Sentence removed | high |
| analgesia-sedation-19 | q3 | update | The q3 and q4 explanations rely on fentanyl having been given ("after propofol and fentanyl") and on no benzodiazepine having been given. The case never said which drugs he received. Update now opens "He receives fentanyl 80 mcg IV, then propofol." (32 words) | medium |
| analgesia-sedation-32 | q4 | update | The explanation says flumazenil and naloxone "reverse drugs he did not receive", but the case never named the sedative. Update now reads "After ketamine-propofol sedation starts ..." | medium |
| analgesia-sedation-39 | stem | stem | The q1 explanation rejects anxiety and opioid withdrawal as "not supported by his history", but the stem gave no history at all. Added "He is healthy, takes no medications and uses no drugs." | medium |
| analgesia-sedation-41 | q3 | explanation | "He received no opioid" does not trace to the case. The case lists only intra-articular lidocaine and propofol but never rules out an opioid. Clause removed. The naloxone rejection now rests on "Naloxone does not reverse propofol" | low |
| analgesia-sedation-27 | q3 | update | "His O2 sat stays at 96%" conflicts with the stem saturation of 95% on room air. Now "His O2 sat is 96%" | low |
| analgesia-sedation-19 | q1 | prompt | The prompt asked for "features of his history", but three options are examination or vital sign findings (Mallampati view, abscess size, temperature). Now "features of his presentation" | low |
| analgesia-sedation-43 | q2 | explanation | Midazolam 0.03 mg/kg for 60 kg was given as "about 2 mg". It is 1.8 mg. Stated exactly | low |
| analgesia-sedation-31 | q1 | update | The update had 8 words, under the 10 to 45 word range. Now "The resident plans to give intranasal midazolam and then suture the palm wound." (13 words) This adds no cue | low |

## Key changes

- analgesia-sedation-48 q1 (review-extra): index 3 ("ASA IV") changed to index 1 ("ASA II"). The explanation already argued for ASA II. No key changed in the main file.

## Numbers recomputed by script

All of these are correct as written.

- 16: long-acting 12 mg x 2 plus breakthrough 2 mg x 3 is 30 mg of oral hydromorphone a day. Ketamine 0.3 mg/kg x 70 kg is 21 mg.
- 17: acetaminophen 15 mg/kg x 15 kg is 225 mg. Ibuprofen 10 mg/kg is 150 mg. Morphine 0.1 mg/kg is 1.5 mg, and 4.5 mg is 0.3 mg/kg. Ketamine 22 mg is 1.47 mg/kg.
- 19: fentanyl 1 mcg/kg x 82 kg is 82 mcg. "About 80 mcg" is acceptable.
- 22: hydromorphone 2 mg is 4 times 0.5 mg.
- 24: acetaminophen 650 mg every 6 hours is 2.6 g a day. Morphine 5 mg is 0.10 mg/kg at 48 kg. Two doses of 0.5 mg make the 1 mg total.
- 26 and 48: ketamine 21, 42, 63, 105 and 168 mg at 42 kg are 0.5, 1, 1.5, 2.5 and 4 mg/kg.
- 28: ketamine 24 mg is 0.3 mg/kg at 80 kg. Fentanyl 50 mcg is 0.63 mcg/kg and 250 mcg is 3.1 mcg/kg.
- 29: fentanyl 50 mcg/hour is 0.71 mcg/kg/hour at 70 kg. Intubating doses: ketamine 2.1 mg/kg and rocuronium 1.4 mg/kg, which fits paralysis persisting 35 minutes later.
- 30: ketamine 5 mg/kg x 80 kg is 400 mg.
- 31: midazolam 0.4 mg/kg x 24 kg is 9.6 mg.
- 32: a BMI of 42 at 136 kg implies a height of 1.80 m, which is plausible.
- 33: two naloxone doses of 0.04 mg make the 0.08 mg total.
- 38: three 1 mg hydromorphone doses make the 3 mg total. Lipase of 2 400 U/L is more than 3 times any usual upper limit.
- 39: fentanyl 300 mcg is 4 mcg/kg at 75 kg, and 50 mcg is 0.67 mcg/kg, within 0.5 to 1 mcg/kg.
- 41: propofol 0.5 mg/kg x 70 kg is 35 mg.
- 43: midazolam 0.03 mg/kg x 60 kg is 1.8 mg (fixed). Recovery agitation from 25% to 8% gives an ARR of 17% and an NNT of 5.9, which rounds to 6. Ketamine 60, 150, 240 and 18 mg are 1, 2.5, 4 and 0.3 mg/kg.
- 44: intranasal ketamine 1.5 mg/kg x 30 kg is 45 mg. Acetaminophen 450 mg is 15 mg/kg. Midazolam 9 mg is 0.3 mg/kg and IM morphine 3 mg is 0.1 mg/kg.
- 45: acetaminophen 2.6 g a day.
- Local anesthetic maximums: none of these SAMPs states a mg/kg maximum for lidocaine or bupivacaine, so there was nothing to recompute.
- Pain scores: every score in an update or explanation matches the stem or the preceding update (16, 17 FLACC 9 then 6, 18, 20, 22, 24, 28, 34, 38, 40, 45).
- ASA classes: 26 and 48 (mild asthma without exacerbation) are class II. 32 (BMI 42 with OSA) is class III.
- Timelines: 26 snack 3 hours before, recovery 40 minutes later. 29 rocuronium 15 minutes before plus 20 minutes. 30 sedation at 5 minutes, matching the cited median. 46 discharge 10 days ago and an X-ray 3 days ago. 25 is a 7-week-old born at 39 weeks, within the 0 to 3 month window for a 60-minute EMLA application. 16 q4 total of 7 mg IV hydromorphone follows 4 mg from q1 to q3 plus further titration, as q3's explanation describes.

The format script checked stem length (50 to 150 words), update length, prompt length, 3 to 6 explanation sentences, and the absence of semicolons and dashes. The only breach was the 31 q1 update, now fixed. Across both files after the fixes, `single` keys sit in positions 24, 21, 24, 21 and 18 of 108, the highest being 22.2%. The key is the longest option in 13 of 108 (12.0%). The highest key-to-distractor length ratios are 1.36 (38 q3) and 1.35 (43 q4), both under 1.5.

## Key feature mapping

Every question tests the key feature it names, with one weak fit. 26 q3 (initial ketamine dose) is tagged key feature 6 (monitoring and adverse events). It is closer to preparation for sedation. I left it as is, because feature 6 is well covered and no other tag fits better. Low confidence.

## Sources verified

I added and changed no citations. I checked numbers against the stems and against the doses the explanations attribute to their sources (Green 2011, Motov 2015, Cole 2016, Sener 2011, Frey 2019, Chang 2013 and 2016, the PENTHROX monograph). An attempt to reopen the Cole 2016 abstract (https://pubmed.ncbi.nlm.nih.gov/27102743/) returned no content. So 30 q2's percentages (hypersalivation 38%, laryngospasm 5%, intubation 39%) rest on the Lens A verification.

## Needs physician decision

1. review-extra.ts. analgesia-sedation-48 duplicates 26, and 49 duplicates 37, in stem, options and explanations. Both are now internally correct, but neither should enter the bank. Recommend dropping both. The Lens A fixes to these two SAMPs were not on disk when this review started.
2. 16 q3 explanation calls two 1 mg IV hydromorphone doses "close to an opioid-naive regimen" for a patient taking about 30 mg of oral hydromorphone a day. The key holds, but the right size of the first dose in opioid tolerance is a clinical judgment.
3. 26 q3 says 1 mg/kg "may not produce dissociation in a child". For a 12-year-old at 42 kg, the adult figure of 1 mg/kg in Green 2011 is close. The key of 1.5 mg/kg still holds.

## Summary

- Fixes: 10. Wrong key 1 (extra). Invented or untraced claims 5 (49 q2 lactate, 19 q3 drugs given, 32 q4 agent, 39 history, 41 opioid). Timeline or number mismatches 2 (27 saturation, 43 dose). Format 2 (19 prompt, 31 update length).
- Key changes: 1, in review-extra (48 q1).
- Most serious: the wrong key in 48 q1 and the invented lactate in 49 q2, both still on disk despite the Lens A report saying they were fixed. Then the explanations in 19, 32 and 39 that relied on facts the case never gave.
- SAMP ids with defects: analgesia-sedation-19, 27, 31, 32, 39, 41, 43, 48, 49.
- Checks: `npx tsc --noEmit -p . | grep samps/s22` is clean. `SAMP_BATCH=s22 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes (679 tests).
