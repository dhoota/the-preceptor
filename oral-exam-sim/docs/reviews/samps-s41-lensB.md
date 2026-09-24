# Review: batch s41, infectious diseases, Lens B (internal consistency and numbers)

Files reviewed: `src/samps/s41/infectious-diseases.ts` (infectious-diseases-16 to infectious-diseases-47) and `src/samps/s41/review-extra.ts` (infectious-diseases-48 and infectious-diseases-49). I checked every SAMP one by one against its stem, vitals and updates, and did not rely on Lens A. Every SAMP stays `reviewed: false`.

## The main findings

1. The two Lens A fixes in review-extra.ts were not in the file. `review-extra.ts` was last written after the Lens A report, and infectious-diseases-48 q1 was again keyed to Streptococcus pneumoniae (index 4), with a Pneumocystis explanation. infectious-diseases-49 q2 again ended with the invented "serum lactate of 7.8 mmol/L seen on the first blood gas". Both are fixed. A script diff now shows 48 and 49 identical to 26 and 37 apart from their ids.
2. infectious-diseases-31 q2 and infectious-diseases-35 q4 repeated the teaching of committed batch s19. abdominal-pain-26 q2 already teaches SGLT2 inhibitor plus poor intake as the cause of euglycemic DKA, with the same Na 136 and chloride 100, the same alcohol, starvation and metformin distractors and a patient who "does not drink alcohol". abdominal-pain-43 q3 already teaches fulminant C. difficile with a transverse colon of 8 cm in an older woman after clindamycin, treated with high dose oral vancomycin, IV metronidazole and surgery, with IV vancomycin and loperamide as distractors. The old 35 q4 update even used the same 8 cm transverse colon. Both questions are rewritten to new teaching points.

## Fixes

| SAMP | Q | Field | Flaw | Confidence |
|---|---|---|---|---|
| infectious-diseases-48 | q1 | correct | Keyed to Streptococcus pneumoniae (4) while the explanation teaches Pneumocystis. The Lens A fix was missing from the file. Restored to 2 | high |
| infectious-diseases-49 | q2 | explanation | Invented "serum lactate of 7.8 mmol/L seen on the first blood gas". No gas is given and lactate cannot confirm tenosynovitis. The Lens A removal was missing from the file. Removed | high |
| infectious-diseases-31 | q2 | prompt, options, key, explanation, source | Repeated the euglycemic DKA teaching of abdominal-pain-26 q2. Now asks which diabetes drug class is most strongly linked to Fournier gangrene (key SGLT2 inhibitor). The explanation uses the Bersoff-Matcha 2019 counts (55 SGLT2 cases from 2013 to 2019, 19 with all other agents since 1984, checked in the PubMed abstract) and keeps the gap arithmetic. The Diabetes Canada source is no longer cited, so it was removed | high |
| infectious-diseases-35 | q4 | update, prompt, options, key, explanation, keyFeature, source | Repeated the fulminant C. difficile teaching of abdominal-pain-43 q3, down to the 8 cm transverse colon. Now a first recurrence 3 weeks after oral vancomycin, keyed to fidaxomicin (IDSA/SHEA 2021). A repeat standard vancomycin course is deliberately not offered because the 2021 update lists it as an acceptable alternative. Key feature changed from 2 to 8. Key feature 2 is still tested by 27, 28 and 29 | high |
| infectious-diseases-20 | q2 | explanation | "Clear lung fields" contradicts the stem, which gives scattered wheeze. Now says no crackles, bronchial breath sounds or dullness | medium |
| infectious-diseases-18 | q1 | explanation | "Multiple cavitating lung nodules" overstates the X-ray, which shows several nodules with two cavitating. Reworded twice to match | low |
| infectious-diseases-33 | stem | stem | The q4 explanation rejects spine MRI because she has "no chest, back or abdominal symptoms", but the stem never mentioned back pain. Added "back pain" to the negatives | low |
| infectious-diseases-41 | q3 | explanation | "Her dose, 60 hours after her last contact" assumed a dose time the case never gives. Now says a dose given when her result returns, at 60 hours, falls within the window | low |
| infectious-diseases-30 | q2 | explanation | Called her state "septic shock" before any fluid or vasopressor. Septic shock needs a vasopressor after adequate fluid, which is first given in the q3 update. Now says hypotension and a lactate of 4.4 mmol/L | low |
| infectious-diseases-17 | q1 | explanation | "Poor dental health" was never given. Now names diabetes as the risk factor and the lower molar as the dental source | low |
| infectious-diseases-28 | q3 | explanation | "A stone in the common bile duct" was never shown. No imaging is given. Now says cholecystectomy does not drain an obstructed common bile duct | low |

## Key changes

- infectious-diseases-48 q1 (review-extra.ts): correct changed from 4 (Streptococcus pneumoniae) to 2 (Pneumocystis jirovecii). This restores the Lens A key change, which was not in the file.
- infectious-diseases-31 q2: new question, key "SGLT2 inhibitor" (index 2). The old key was "Euglycemic diabetic ketoacidosis" (index 1). Reason: overlap with abdominal-pain-26.
- infectious-diseases-35 q4: new question, key "fidaxomicin 200 mg PO twice daily" (index 1). The old key was "Add IV metronidazole and consult surgery" (index 0). Reason: overlap with abdominal-pain-43.

After these changes the single key positions are 18, 25, 22, 22 and 20 of 107 (largest 23.4 percent), and the key is the longest option in 29.0 percent.

## Updates added by Lens A, checked one by one

Each was checked against its question and explanation for timeline, values and whether it gives the answer away.

- infectious-diseases-17 q4: CT after awake fibreoptic intubation, gas and collections in both submandibular and sublingual spaces. Matches the explanation and the q2 airway first sequence. It supplies the finding, not the action. Holds.
- infectious-diseases-18 q3: gram negative bacilli in the anaerobic bottles only at 30 hours. Matches "growth only in the anaerobic bottles" and the Haemophilus reason. Holds.
- infectious-diseases-21 q4: return 6 days later, so day 10, with worsening after improvement. Matches "beyond 7 days". Holds.
- infectious-diseases-22 q4: 14 mm medial subperiosteal abscess, acuity unchanged. Fits limited abduction. The explanation names no size threshold. Holds.
- infectious-diseases-23 q3: negative smears and RDT, positive NS1. Comes after q1 and q2, so it does not cue them. Platelets 92 match the stem. Holds.
- infectious-diseases-24 q3: creatinine 68 umol/L. Cockcroft-Gault gives about 70 mL/minute for a 66-year-old woman of 62 kg, so no renal adjustment. Holds.
- infectious-diseases-24 q4: normal CT, CSF WBC 86 with 90% lymphocytes, red cells 420, protein 0.9 g/L, glucose 3.6 mmol/L. The CSF to capillary glucose ratio is 3.6 / 6.1 = 0.59, which is normal as the explanation says. Holds.
- infectious-diseases-25 q3: 1030, 3.5 hours after the 0700 onset, so the lytic question is live. CTA negative matches the thrombectomy reason. Holds.
- infectious-diseases-27 q2: 2 L of Ringer's lactate over 1 hour is 28.6 mL/kg for 70 kg (Lens A wrote "about 30 mL/kg", which the file does not claim). The MAP of (82 + 2 x 44) / 3 = 56.7, quoted as 57, is right. Holds.
- infectious-diseases-27 q4: MAP 66 on norepinephrine, lactate 5.4 at 2 hours (down 11.5 percent from 6.1), capillary refill 4 seconds. Matches the explanation. Holds.
- infectious-diseases-29 q1: IO in the proximal tibia, culture and glucose 4.8 mmol/L. Matches "through the IO line". Holds.
- infectious-diseases-29 q3: three boluses of 20 mL/kg is 60 mL/kg, hepatomegaly and crackles. Matches. Holds.
- infectious-diseases-30 q2 and q3: purulent lochia with gram positive cocci in chains, then norepinephrine after 3 L (41.7 mL/kg) and gas in the uterine wall. Match the explanations. Holds (with the q2 shock wording fix above).
- infectious-diseases-32 q3: 6 cm sacral injury, eschar, pus, bone visible. Matches "exposed bone". Holds.
- infectious-diseases-33 q3: S. aureus in both sets, catheter positive 3 hours earlier (2 hour threshold). Matches. Holds.
- infectious-diseases-35 q4: replaced (see above).
- infectious-diseases-40 q3: 4-month-old cousin of 6 kg, 0.5 mL/kg = 3 mL, 50 hours, within 6 days. Holds.
- infectious-diseases-41 q2: negative IgG 24 hours later, 36 + 24 = 60 hours. VarIg 6.8 x 125 = 850 IU, capped at 625 IU. Holds.
- infectious-diseases-44 stem: oral and anal exposure now supports pharyngeal and rectal NAAT. Holds.
- infectious-diseases-46 q2: 80.5% and 73.6% match Talan 2016. Holds.

## Numbers recomputed by script

- CURB-65, infectious-diseases-36: confusion 1, urea 9.8 above 7 mmol/L 1, RR 26 below 30 0, diastolic 58 at or below 60 1, age 86 1. Total 4, as keyed. Lim 2003 mortality at 4 is about 41 percent.
- qSOFA (not quoted in any explanation): 27 is 3, 28 is 3, 31 is 2.
- MAP: 27 stem 52.7, update 56.7. 28 is 60.0. 30 is 62.0. 35 old update 61.3. None contradicts an explanation.
- Doses by weight: 16 ceftriaxone 50 x 16 = 800 mg (distractors are 45, 10, 25 and 15 mg/kg, all plausible). 24 acyclovir 10 x 62 = 620 mg every 8 hours. 29 bolus 20 x 12 = 240 mL, 720 mL = 60 mL/kg, 60 mL = 5 mL/kg. 38 RabIg 20 x 80 = 1 600 IU. 40 IMIg 0.5 x 6 = 3 mL. 41 VarIg 850 IU capped at 625 IU. 25 option doses give no mg (alteplase would be 72 mg, tenecteplase 20 mg).
- Renal: 24 creatinine clearance about 70 mL/minute. 28 creatinine 168 umol/L is 1.9 mg/dL, below the TG18 renal criterion of 2.0 mg/dL (176.8 umol/L), so the explanation rightly leaves renal dysfunction out of grade III. 35 creatinine 142 is above 133 umol/L (1.5 mg/dL) and 1.77 times baseline.
- Gaps and statistics: 31 anion gap 136 - (100 + 12) = 24. 46 NNT 1 / 0.069 = 14.5, NNT 10 needs 10 percent and NNT 70 needs 1.43 percent.
- Timelines: 19 game on day 6 + 5 = 11. 21 return on day 10. 23 fever 2 days after return. 32 temperature rise 1.3°C over 36.6°C. 38 bite 9 days ago, 5 days before return. 39 30 hours after assault. 41 nephew timeline is consistent with a rash yesterday morning and last contact 36 hours ago. 24 GCS 3 + 4 + 6 = 13.

## Checked with no defect found

infectious-diseases-16, 19, 22, 23, 24, 25, 26, 27, 29, 32, 34, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46 and 47 have no Lens B defect beyond the updates checked above. Counts hold: 37 shows all four Kanavel signs, 28 names three grade III criteria that the stem shows, 20 names the four Harris criteria and the stem meets none, 34 has redness beyond 2 cm and only one SIRS criterion (moderate), 32 meets both the single reading and the rise from baseline.

## Sources verified

- Bersoff-Matcha 2019, Ann Intern Med, PMID 31060053. Abstract read through NCBI E-utilities: 55 SGLT2 cases (March 2013 to January 2019), 19 with other agents (1984 to January 2019: metformin 8, insulin glargine 6, short acting insulin 2, sitagliptin plus metformin 2, dulaglutide 1). https://pubmed.ncbi.nlm.nih.gov/31060053/
- Johnson 2021 IDSA/SHEA focused update, PMID 34164674 (E-utilities for the record). The first recurrence advice (fidaxomicin suggested over a standard vancomycin course, with a vancomycin taper and pulse or a standard course as acceptable alternatives) was confirmed through the AAFP summary. https://www.aafp.org/afp/2022/0600/p678 and https://pubmed.ncbi.nlm.nih.gov/34164674/ The PMC full text was blocked by a captcha, so the FMT and rifaximin statements rest on the guideline recommendation table as generally reported. See below.

## Needs physician decision

1. infectious-diseases-48 and infectious-diseases-49 in review-extra.ts are exact copies of 26 and 37 once fixed. They should not join the bank. Their key and explanation had also reverted after the Lens A review, so the file should be watched.
2. infectious-diseases-35 new q4: please confirm that fidaxomicin is the preferred answer for Canadian practice and that the rifaximin and FMT reasons match the current AMMI Canada or IDSA tables. Fidaxomicin (Dificid) is sold in Canada, but coverage varies by province.
3. infectious-diseases-35 stem: the scenario (older woman, watery diarrhea after clindamycin, WBC and creatinine rise) still resembles abdominal-pain-43. The teaching now differs, but consider a different antibiotic or setting.
4. infectious-diseases-31 stem: the scenario still carries euglycemic DKA labs similar to abdominal-pain-26 (Na 136, chloride 100, empagliflozin with poor intake). They now serve the Fournier and SGLT2 teaching only.
5. Parity is within the rules but close to the 1.5 limit in infectious-diseases-37 q1 (1.49, key "Pyogenic flexor tenosynovitis" is the longest option), 30 q2 (1.42) and 28 q2 (1.40).

## Summary

- 34 SAMPs checked (32 in the main file and 2 in review-extra.ts), about 125 questions, plus all 20 Lens A updates.
- 11 fixes: 2 Lens A fixes that were missing from the file restored (1 wrong key, 1 invented lab value), 2 questions rewritten for overlap with batch s19, 5 explanation claims not supported by the case or contradicting it, 1 stem fact added, 1 wording fix on a shock definition.
- Key changes: 3 (48 q1 restored, 31 q2 and 35 q4 new questions).
- SAMP ids with a defect: infectious-diseases-17, infectious-diseases-18, infectious-diseases-20, infectious-diseases-28, infectious-diseases-30, infectious-diseases-31, infectious-diseases-33, infectious-diseases-35, infectious-diseases-41, infectious-diseases-48, infectious-diseases-49.
- Gates: `npx tsc --noEmit -p . | grep samps/s41` shows no errors. `SAMP_BATCH=s41 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 699 passed.
