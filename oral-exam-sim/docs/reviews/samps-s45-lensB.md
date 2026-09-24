# Review of SAMP batch s45 (multiple trauma), Lens B: internal consistency and numbers

Lens: B, internal consistency and numbers. Scope: `src/samps/s45/multiple-trauma.ts` (multiple-trauma-16 to 47) and `src/samps/s45/review-extra.ts` (multiple-trauma-48 and 49). Every SAMP was read on its own, question by question, with each explanation sentence checked against the stem, the updates and the vitals. A script listed every number in each explanation that does not appear in the case or options, and each hit was traced by hand. A second script recomputed every score, dose and difference. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

The Lens A report was not relied on. One finding matters for the record: Lens A reports two fixes in `review-extra.ts` (48 q1 key, 49 q2 lactate sentence), but neither was present in the file when this review started. Both are applied now.

## Fixes

| SAMP id | Question | Field | Flaw | Confidence |
|---|---|---|---|---|
| multiple-trauma-48 (extra) | q1 | correct | Key was index 0 (femoral nerve) while the explanation teaches sciatic nerve function. Key set to index 3. Lens A reported this fix, but it was not in the file. | high |
| multiple-trauma-49 (extra) | q2 | explanation | Invented fact: "serum lactate of 7.8 mmol/L seen on the first blood gas". No blood gas or lactate is in the case, and a lactate says nothing about dabigatran. Sentence removed. Lens A reported this fix, but it was not in the file. | high |
| multiple-trauma-28 | stem | stem | Burn area arithmetic was wrong. Both whole arms (9% each) plus the front of the chest (9%) is 27% by the rule of nines, not the stated 18%. Stem now reads "the front of both arms and the front of the chest" (4.5 + 4.5 + 9 = 18%), which keeps every later "18%" true. | high |
| multiple-trauma-28 | stem, q1 | stem, explanation | The q1 explanation relied on three facts the case never gave: "within the first hour", "no neurological deficit" and "No opioid has been given". Stem now gives arrival 30 minutes after the fall, no analgesia received, and all four limbs moving normally. The explanation cites these facts and his tachycardia. | high |
| multiple-trauma-19 | q2 | explanation | "the underlying pulmonary contusion" is not in the case. The chest X-ray shows only rib fractures. Changed to hypoxemia from the flail segment and injured chest wall. | medium |
| multiple-trauma-24 | q1 | explanation | Rejected aortic and sternal injury as coming from "the steering wheel" in a rear seat passenger, and called her tenderness "central", which the stem never says. Rewritten to rest on stem facts only. | medium |
| multiple-trauma-44 | stem, q1 | stem, explanation | Rejected fat embolism because of "long bone fractures, which he does not have", but no leg imaging was given. Stem now states that X-rays of both legs show no fracture, and the explanation cites it. | medium |
| multiple-trauma-16 | q2 | explanation | "is still in shock" 55 minutes after injury was not supported. The update gives no vitals after the tourniquet. The explanation now cites his arrival pulse of 128/minute and BP of 92/58 mmHg. | low |
| multiple-trauma-19 | q4 | option | Distractor "Wait for his son to arrive and decide" introduced a son the case never mentions. Changed to "Wait for other relatives to arrive and decide", which matches the explanation's "another relative". | low |
| multiple-trauma-21 | q1 | explanation | "falling saturation" when the case gives a single SpO2 of 84%. Changed to "hypoxemia". | low |
| multiple-trauma-22 | q3 | explanation | Timeline. The fall was 14 hours before arrival, so at q3 the injury is more than 14 hours old. Changed "14 hours ago" to "more than 14 hours ago". | low |
| multiple-trauma-23 | q1 | explanation | Count mismatch. It listed four reversible causes and then said "all three are likely here". Now names the three (hypovolemia, hypoxia, tension pneumothorax) and ties hypoxia to his SpO2 of 82%. | low |
| multiple-trauma-41 | q1 | option | "Platelets to a count above 150" had no unit. Now "above 150 x 10^9/L". | low |
| multiple-trauma-29, 30, 32 | stem | stem | Stems opened with the injury ("A 49-year-old man fell 8 m ..."), not with arrival as SAMP_SPEC section 3 requires. Reworded to "was brought to the emergency department by ambulance N hours ago after ...". Timing unchanged. | low |
| multiple-trauma-46 | stem | stem | The opening was not in the spec form, and the timing was loose ("at triage 1 hour ago"). Now "was brought to the emergency department by ambulance 1 hour ago after ...", which agrees with the lucid interval and the later decline. | low |

## Key changes

- multiple-trauma-48 q1: before index 0 ("Femoral nerve sensation on the thigh"), after index 3 ("Sciatic nerve function below the knee"). The explanation, the matching question 26 q1 and the anatomy all support the sciatic nerve.

## Numbers recomputed (script, all correct unless listed above)

- ABC score (18 q2): penetrating 1, SBP 84 at or below 90 gives 1, pulse 134 at or above 120 gives 1, negative eFAST gives 0. Total 3, keyed "3".
- Shock index (22 q2): 124 / 98 = 1.27, above the SIPA cutoff of 1.0 for ages 7 to 12. Distractors: 98 / 124 = 0.79. MAP (98 + 2 x 60) / 3 = 72.7, and 124 / 72.7 = 1.71. Age 9 hypotension floor 70 + 2 x 9 = 88, so an SBP of 98 is normal for age.
- Pediatric volumes (22 q3, 30 kg): 10 mL/kg = 300 mL, 20 mL/kg = 600 mL, 40 mL/kg = 1200 mL, TXA 15 mg/kg = 450 mg.
- Pediatric TXA (33 q3, 15 kg): 15 x 15 = 225 mg, 10 mg/kg = 150 mg, 30 mg/kg = 450 mg, 1000 / 15 = 66.7 mg/kg.
- GCS: 33 E2 V2 M4 = 8, 36 E1 V2 M4 = 7, 41 E3 V4 M5 = 12 (from 14, confused), 46 E3 V3 M5 = 11.
- PCC (17 q2): 25 IU/kg x 80 kg = 2000 IU, and the INR 3 to 5 schedule also gives 2000 IU. Both PCC options (1000 and 2000 IU) sit below the 3 000 unit Canadian single dose cap. There is no other PCC dose in the batch.
- Calcium (18 q4): calcium chloride 1 g = 6.8 mmol, calcium gluconate 1 g = 2.2 mmol, ratio 3.1.
- Pulse pressures: 31 q3 128/74 (54) to 92/78 (14). 37 q3 and 49 q3 96/62 (34) to 108/90 (18), pulse 104 to 118.
- 17 q4: pulse 72 to 84 and SBP 118 to 104, matching the q3 update.
- Burns (28): 18% is now consistent with the stem. For reference, Parkland at 82 kg is 4 x 82 x 18 = 5904 mL over 24 hours. No question tests it.
- BTF systolic floors: 100 mmHg at age 64 (36 q4), 110 mmHg at age 24 (46 q3).
- Other checks: fundus 6 cm above the umbilicus at 26 weeks (20). Abdominal compartment syndrome with IAP 28 mmHg above 20 plus organ dysfunction (29). FVC 11 mL/kg (40). Rocuronium 1.2 mg/kg (36). TXA timing, 55 minutes, inside 3 hours (16).
- Format: every stem is 65 to 123 words. Every update is 11 to 41 words. Single key positions across the 32 batch SAMPs are within the gate. No semicolons or dashes in any string.

## Sources verified

Lens B checked citations for form (author or body, work, year) and for use: every listed source is cited, and every cited id exists. No citation was added or changed, so no new web verification was needed. For URL verification, see the Lens A report.

## Needs physician decision

- multiple-trauma-48 and 49 (review-extra.ts) are verbatim copies of 26 and 37. Apart from the id, the only differences were the planted defects, now fixed. They would fail the near duplicate stem test if loaded. Recommend not adding them.
- multiple-trauma-47 q4 (esmolol for aortic impulse control) is mapped to key feature 6, which covers fluid and blood replacement to defined end points. Impulse control is a hemodynamic target, but not volume replacement. Consider remapping. Low confidence.
- multiple-trauma-42 q3 (counselling on red cell alloimmunization after transfusion) is mapped to key feature 4, which covers modifying factors. The fit is loose. Low confidence.
- multiple-trauma-42 q1 says O negative units "in Canada are also Kell negative for women of child-bearing age". Neither the case nor the cited sources show this. Please confirm it, or remove it.
- multiple-trauma-29 q4 distractors name PEEP 5 and a tranexamic acid infusion, which the case never says he received. The explanation does not claim he received them, so they were left. Consider adding them to the stem if they should read as part of his care.

## Summary

- SAMPs with a defect: 15 (multiple-trauma-16, 19, 21, 22, 23, 24, 28, 29, 30, 32, 41, 44, 46, 48, 49). Fixes: 15 rows, with 29, 30 and 32 sharing one row.
- By category: key change 1 (48 q1). Wrong arithmetic 1 (28 burn area). Invented or untraced facts 7 (49 q2, 28 q1, 19 q2, 24 q1, 44 q1, 16 q2, 19 q4 son). Timeline and count 3 (22 q3, 23 q1, 46 stem). Precision 1 (21 q1). Units 1 (41 q1). Stem opening format 4 (29, 30, 32, 46).
- Most serious: the wrong key in 48 q1 and the invented lactate in 49 q2. Lens A reported both as fixed, but the fixes were missing from the file. Next are the 28 burn area, which is 27% by the rule of nines with the original wording, and the three facts in 28 q1 that the case never gave.
- Gates: `npx tsc --noEmit -p . | grep samps/s45` prints nothing. `SAMP_BATCH=s45 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` passes 715 of 715.
