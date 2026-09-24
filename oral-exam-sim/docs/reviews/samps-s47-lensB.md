# Review of SAMP batch s47 (pre-eclampsia), Lens B

Reviewer lens: B, internal consistency and numbers. By request, this review also gives a full Lens A check to the SAMPs the writer rewrote after the Lens A review. Those are pre-eclampsia-23, pre-eclampsia-34 and pre-eclampsia-37 in full, and pre-eclampsia-27 q1, pre-eclampsia-28 q3 and pre-eclampsia-38 q3.

Files in scope: `src/samps/s47/pre-eclampsia.ts` (pre-eclampsia-16 to pre-eclampsia-38), `src/samps/s47/review-extra.ts` (pre-eclampsia-39 and pre-eclampsia-40) and `src/samps/s47/index.ts`. I read each SAMP on its own, question by question. I checked every explanation sentence against its stem and updates. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Gates after the edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s47` prints nothing. `SAMP_BATCH=s47 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 476 of 476.

## Fix table

| SAMP | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| pre-eclampsia-39 (extra) | q1 | correct | The key was index 1, "Discharge with oseltamivir 75 mg PO BID". The explanation rejects that option and argues for HELLP labs. The key is now index 4, "Platelets, liver enzymes and LDH", as in its twin pre-eclampsia-23. The Lens A fix to this extra did not survive the writer's rework | high |
| pre-eclampsia-40 (extra) | q2 | explanation | The invented sentence "The serum lactate of 7.8 mmol/L seen on the first blood gas confirms this" is back, though Lens A had removed it. The case gives no blood gas, and a lactate cannot confirm pre-eclampsia. Removed | high |
| pre-eclampsia-18 | stem | stem | The fundus was "4 cm above the umbilicus", which fits about 24 weeks. The update then dates the pregnancy at about 32 weeks by ultrasound. At about 1 cm a week above the umbilicus from 20 weeks, 32 weeks is about 12 cm. Changed to "about 12 cm above the umbilicus" | medium |
| pre-eclampsia-17 | stem (q4) | stem | The q4 explanation calls the headache "severe" with "repeated visual symptoms", matching the ISSHP indication for delivery ("severe intractable headache or repeated visual scotomata"). The stem gave only "a frontal headache" and "seeing sparkles". The stem now says "a severe frontal headache" and "repeated episodes of seeing sparkles" | medium |
| pre-eclampsia-27 | q1 | explanation | The stem gives 75 mL of urine in 4 hours, which is 18.75 mL/hour. ISSHP Table 9 lists urine output below 30 mL/hour for 4 hours and decreased reflexes as toxicity warnings, and says to stop the infusion and send a serum level. The explanation said only that these "raise the risk of accumulation". It now says she already meets the warnings, so the infusion should be paused and a level sent | medium |
| pre-eclampsia-27 | stem (q3) | stem | q3 cites headache with scotomata as an ISSHP indication for delivery. ISSHP requires a severe intractable headache or repeated scotomata. The stem now says "a severe headache and repeated visual scotomata". The rising creatinine was already a valid indication, so the key did not depend on it | low |
| pre-eclampsia-37 | q2, stem | explanation | The explanation said she has no "urinary findings of pyelonephritis", but the case gives no urinalysis. "Dysuria" is now in the stem's list of negatives, and the sentence reads "no fever or dysuria to suggest pyelonephritis" | medium |
| pre-eclampsia-22 | q3 | explanation | The update gives a heart rate of 90/minute that has not recovered over 3 minutes. That is a prolonged deceleration, and by the usual definition it becomes bradycardia only after 10 minutes. The explanation called it "prolonged fetal bradycardia". It now says "a prolonged fall in the fetal heart rate to 90/minute" | low |
| pre-eclampsia-38 | q3 | options | The distractor "Caesarean because of eclampsia" put a justification inside the option. It now reads "Immediate caesarean delivery" and the options are back in alphabetical order. The key is unchanged at index 0 | low |

## Key changes

- pre-eclampsia-39 q1 (extra): index 1 ("Discharge with oseltamivir 75 mg PO BID") changed to index 4 ("Platelets, liver enzymes and LDH"). The key contradicted its own explanation and its twin, pre-eclampsia-23.

There are no other key changes.

## Numbers recomputed

A script (kept in the scratchpad) recomputed every figure below. Each matches the text unless noted.

- BP averages. 19 q2: 146/94 and 144/92 give 145/93. 23 q1: same readings, 145/93. 26 q2: 158/102 and 162/104 give 160/103, which meets the SOGC threshold of 160 or more. 28 q2: 142/92 and 144/90 give 143/91. 31 q2: 146/94 and 144/96 give 145/95. 36 q3: 142/94 and 144/96 give 143/95. 37 q2: 146/94 and 148/96 give 147/95. 32 q3: both systolic readings (166 and 164) are above 160.
- Severe BP confirmation intervals. 17: 1402 to 1412 is 10 minutes. 21: 2230 to 2240. 36: 1255 to 1310 is 15 minutes. 23: 15 minutes. All fall within 15 minutes.
- Labetalol. 33 q1: 20 + 40 + 80 + 80 + 80 = 300 mg at 30-minute intervals, which is the ISSHP and ACOG maximum per course. 21 q2: labetalol given at 2240, reassessed at 2310, which is 30 minutes. The next dose of 40 mg doubles the first dose, as ISSHP Table 8 advises.
- Nifedipine. 17 q2 and 33 q2: 10 mg, repeated at 30 minutes (1050, 1120, 1150), as in ISSHP Table 8.
- Hydralazine. 29 q3, 33 q1 and 34 q2: starts at 5 mg with a maximum of 20 mg (ISSHP Table 8, ACOG PB 222 Table 3).
- Magnesium. 4 g IV over 20 minutes, then 1 g/hour, throughout (ISSHP Table 9). 27: loading dose at 1300, reviewed at 1700, 4 hours. 75 mL / 4 hours = 18.75 mL/hour, which is below 30 mL/hour.
- Platelet falls. 23 q2: 78 x 0.6 = 46.8. 23 q3: 78 to 52 is a fall of 33%. 35 q3: 96 to 72 is a fall of 25%.
- Other. 26 q1: creatinine 132 / 68 = 1.94, "nearly doubled". 27 q3: 168 / 60 = 2.8. 29: GCS E3 V4 M6 = 13. Heights implied by BMI and weight (19, 20, 28) are 1.65 to 1.66 m, which is plausible. 34 q3: 31 weeks and 4 days is within SOGC 376's limit of 33 weeks and 6 days.
- Gestational ages and timelines agree in every SAMP apart from pre-eclampsia-18 (fixed above).
- The extras were compared field by field with their twins by script. The only differences were the two planted defects above. After the fixes, pre-eclampsia-39 equals pre-eclampsia-23 and pre-eclampsia-40 equals pre-eclampsia-31, apart from the id.

## Lens A check of the rewritten material

- pre-eclampsia-23. Every claim matches ACOG PB 222 word for word:
  - Insidious onset, with up to 15% lacking hypertension or proteinuria.
  - RUQ pain and malaise in up to 90%, and nausea and vomiting in 50%.
  - Laboratory tests at least at 12-hour intervals.
  - Platelets fall about 40% a day.
  - The platelet nadir comes at a mean of 23 hours after delivery, and the disease can peak in the first 2 days.
  - The diagnosis is reassessed if the picture still worsens after 4 days postpartum.
  - 90% have platelets above 100 x 10^9/L within 7 days.
  - Nothing in ISSHP 2021 contradicts these points. The keys hold.
- pre-eclampsia-34.
  - q1 holds.
  - q2: ACOG PB 222 Table 3 says to avoid labetalol in "heart block and bradycardia". ISSHP Table 8 cautions only about uncontrolled asthma and heart failure. I could not read SOGC 426 in full. Her pulse of 46/minute is athletic, and her ECG showed only sinus bradycardia. So labetalol is not strictly contraindicated under the Canadian and international guidance. But nifedipine is equally first-line and avoids the concern, so the key is still the single best answer. The explanation attributes the advice correctly to ACOG. The key holds, medium confidence, flagged below.
  - q3: the SOGC 376 abstract confirms the limit of 33 weeks and 6 days or earlier, with imminent or planned preterm birth, and an RR of 0.71 for any cerebral palsy.
- pre-eclampsia-37.
  - q2: the ACOG thresholds are confirmed (platelets below 100 x 10^9/L, LDH 600 IU/L or more, AST and ALT more than twice normal).
  - q3: the magnesium point is confirmed in SOGC 376. ACOG PB 222 says the evidence does not support corticosteroids to treat HELLP itself. The keys hold.
- pre-eclampsia-27 q1. ISSHP Table 9 lists slurred speech and excessive drowsiness as CNS toxicity. It lists flushing, metallic taste, nausea and vomiting, and palpitations as side effects to be told apart from toxicity. The key holds. The explanation was fixed as above.
- pre-eclampsia-28 q3. ISSHP says severe hypertension (160/110 mmHg or more) needs urgent treatment in a monitored setting. The key holds.
- pre-eclampsia-38 q3. ACOG PB 222 says "eclampsia by itself is not an indication for cesarean delivery", and "patients that adequately progress in labor could be allowed to continue labor even after an eclamptic seizure". The key holds.

## Overlap of the rewritten SAMPs with s15, s19, s40 and s49

I searched `src/samps/` for the teaching point of each rewritten question. Three rewrites repeat teaching already in s15. I have flagged them rather than rebuilt them. Each is clinically correct, and a rebuild changes the key feature mix.

- pre-eclampsia-23 q1 repeats s15 pre-eclampsia-12 q1 in scenario and teaching. Both are third-trimester malaise, nausea and epigastric discomfort with a sick family member (a sister with gastroenteritis there, a child with fever here). Both carry the temptation to discharge on a benign label, and both teach doing HELLP labs first. It also repeats pre-eclampsia-16 q1 and pre-eclampsia-31 q1 within this batch. pre-eclampsia-23 q2 and q3 are new to the bank. Medium.
- pre-eclampsia-34 q2 repeats s15 pre-eclampsia-14 q1. Both teach that when labetalol must be avoided (asthma there, bradycardia here), immediate-release nifedipine is first-line. They share almost the same distractors: enalaprilat 1.25 mg IV, metoprolol 5 mg IV, labetalol 20 mg IV and hydralazine. Medium.
- pre-eclampsia-37 q3 repeats s15 pre-eclampsia-02 q3. Both are HELLP at 29 to 33 weeks with a menu keying betamethasone 12 mg IM and magnesium sulfate 4 g IV, and both have dexamethasone and platelet transfusion as distractors. The tocolytic distractors are new. Within the batch, 37 q3 also repeats the magnesium neuroprotection point of 34 q3. 37 q1 (atypical symptoms, so check HELLP labs first) repeats 16 q1, 23 q1 and 31 q1. 37 q2 (ACOG HELLP thresholds) repeats 31 q2 and 16 q2. Medium.
- pre-eclampsia-28 q3 overlaps slightly with s15 pre-eclampsia-11 q4, whose key includes "Home BP of 160/110 or higher" among the reasons to return. Low.
- pre-eclampsia-27 q1 is next to s15 pre-eclampsia-05, which teaches the signs of magnesium toxicity. The new question asks the reader to tell toxicity from side effects, which is new. Low.
- pre-eclampsia-38 q3 (route of delivery after eclampsia) and pre-eclampsia-34 q3 (magnesium for neuroprotection) are new as keyed questions. s15 pre-eclampsia-08 mentions neuroprotection only in an explanation. Nothing in s19, s40 or s49 repeats any rewritten question.

## Sources verified

- ACOG Practice Bulletin No. 222. Obstet Gynecol. 2020. Full PDF read at https://www.preeclampsia.org/frontend/assets/img/advocacy_resource/Gestational_Hypertension_and_Preeclampsia_ACOG_Practice_Bulletin,_Number_222_1605448006.pdf (PubMed 32443079). I checked the HELLP presentation, monitoring and postpartum course, Table 3 (the labetalol caution and the hydralazine maximum), HELLP thresholds and the eclampsia route of delivery.
- Magee LA et al. ISSHP 2021. Pregnancy Hypertens. 2022, 27:148-169. Full PDF read at https://preeclampsia.org/frontend/assets/img/advocacy_resource/ISSHP2021.pdf. I checked Table 8 (doses and cautions), Table 9 (magnesium monitoring, toxicity and side effects), the indications for delivery and the 33+6 neuroprotection limit.
- Magee LA et al. SOGC No. 376. J Obstet Gynaecol Can. 2019. The Europe PMC abstract for PMID 30879485 confirms the limit of 33 weeks and 6 days or less and an RR of 0.71 (95% CI 0.55 to 0.91) for any cerebral palsy.
- Martin JN Jr et al. Obstet Gynecol. 2005. The Europe PMC abstract for PMID 15684147 confirms 28 women, a systolic of 160 mmHg or more in 23 of 24, and a diastolic of 110 mmHg or more in only 3 of 24.
- ACOG Practice Bulletin No. 207. 2019. Full PDF read at https://www.soap.org/assets/docs/Webinars/ACOG%20Thrombocytopenia%202019.pdf. It supports 25 q1 and q2.
- SOGC Guideline No. 426 (2022). The full text was not reachable, as it was for Lens A. Its claims rest on the Lens A check through the Ontario midwives' CPG.

## Needs physician decision

- Overlap rewrites: pre-eclampsia-23 q1 (s15 pre-eclampsia-12 q1), pre-eclampsia-34 q2 (s15 pre-eclampsia-14 q1) and pre-eclampsia-37 q3 (s15 pre-eclampsia-02 q3). Decide whether to rebuild them or accept each as an MCQ restatement of an s15 write-in point. The batch now has four questions that teach "atypical symptoms, so do HELLP labs" (16 q1, 23 q1, 31 q1, 37 q1). One or two of these could be retargeted.
- pre-eclampsia-34 q2 rests on ACOG's caution about labetalol in bradycardia. ISSHP does not list it, and a pulse of 46/minute from athletic training with a normal ECG is not a strict contraindication. The key holds because nifedipine is equally first-line. A physician should confirm that labetalol is not also defensible as "most appropriate".
- Both extras (pre-eclampsia-39 and pre-eclampsia-40) are still exact copies of batch SAMPs. Each carried a planted defect again after the rework. They should not be exported.

## Summary

- 25 SAMPs read: 23 in the batch and 2 extras. 9 fix rows across 8 SAMPs.
- Key changes: 1 (pre-eclampsia-39 q1, extra).
- Fixes by category:
  - Wrong key: 1 (39 q1).
  - Invented fact: 2 (40 q2 lactate, 37 q2 urinary findings).
  - Stem did not support an explanation claim: 3 (17 stem, 27 stem, 27 q1).
  - Timeline or number inconsistency: 1 (18 fundal height against 32 weeks).
  - Terminology: 1 (22 q3).
  - Format (justification inside an option): 1 (38 q3).
- Most serious errors:
  - The wrong key in pre-eclampsia-39 q1.
  - The invented lactate in pre-eclampsia-40 q2. Both are Lens A fixes that were lost in the rework.
  - The fundal height in pre-eclampsia-18 that contradicted the gestational age.
  - pre-eclampsia-27 q1 understated that her oliguria and reflexes already meet the ISSHP toxicity warnings.
- SAMP ids with a defect: pre-eclampsia-17, pre-eclampsia-18, pre-eclampsia-22, pre-eclampsia-27, pre-eclampsia-37, pre-eclampsia-38, pre-eclampsia-39, pre-eclampsia-40.
- SAMP ids flagged for overlap: pre-eclampsia-23, pre-eclampsia-28, pre-eclampsia-34, pre-eclampsia-37 (and, within the batch, pre-eclampsia-16 and pre-eclampsia-31).
