# Review of SAMP batch s52 (suicide risk), Lens B: internal consistency and numbers

Reviewer lens: B (internal consistency and numbers). Scope: every file in `src/samps/s52/`: `suicide-risk.ts` (suicide-risk-16 to suicide-risk-38) and `review-extra.ts` (suicide-risk-39 and suicide-risk-40). Each SAMP was checked on its own, file by file, without relying on the Lens A report. This is an AI audit, not clinician verification. Every SAMP stays `reviewed: false`.

Checks after edits: `npx tsc --noEmit -p . 2>&1 | grep samps/s52` gives no output. `SAMP_BATCH=s52 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts` gives 456 passed.

## What was recomputed

- Stem word counts (73 to 131 after edits), update word counts (11 to 43), prompt word counts (11 to 21) and explanation lengths (379 to 556 characters), all by script.
- Key positions across the 65 `single` questions in suicide-risk.ts: 12, 12, 15, 14 and 12 (highest 23%). The key is the longest option in 22 of 65 (34%). The key to mean distractor ratio is at most 1.35.
- suicide-risk-23: 90 tablets of amitriptyline 50 mg dispensed 3 weeks ago at 1 a night leaves 90 minus 21, which is 69, matching the q3 update. The q1 explanation said he had 90 tablets at home. Fixed.
- suicide-risk-28: 20 tablets of sertraline 50 mg is 1 000 mg, about 14 mg/kg at 70 kg. Found 1 hour before arrival and a stated ingestion 5 hours before the q3 update agree.
- suicide-risk-35: 6 kg lost to reach 68 kg is about 8% of body weight. Sodium 131 mmol/L is correctly called mildly low.
- suicide-risk-38: blood alcohol 25 mmol/L is about 115 mg/dL, a plausible distractor value.
- suicide-risk-34: Owens 2002 gives a median 16% non-fatal repetition and 0.5% to 2% fatal repetition at 1 year. Both match the explanation.
- ASQ in suicide-risk-16: the four screening items and the separate acuity item were checked against Horowitz 2012. See the fixes.
- Detention time limits. suicide-risk-19 (British Columbia): certificate 14:00, admission 16:00, a second certificate by a different physician within 48 hours of admission. Consistent. suicide-risk-20 (Alberta): examination 22:00, issue 22:30 (inside 24 hours), transport the next afternoon (inside the 72 hour conveyance limit), 24 hours of detention from arrival at the facility. Consistent. suicide-risk-21 (Quebec): preventive confinement up to 72 hours. Consistent.
- Clock times: suicide-risk-17 (03:00), suicide-risk-21 (23:00), suicide-risk-22 (22:00), suicide-risk-32 (01:00), suicide-risk-33 (20:00 plus 3 hours), suicide-risk-36 (22:00 to 03:00, sister at 07:00). All agree with the explanations.
- Province against statute: suicide-risk-17 and suicide-risk-33 are set in Ontario and test Form 1. suicide-risk-19 is set in British Columbia and tests the medical certificate. suicide-risk-20 is set in rural Alberta and tests the admission certificate. suicide-risk-21 is set in Montreal and tests Quebec preventive confinement. All match. suicide-risk-28 q2 names no province and keys capacity assessment, which holds everywhere.

## Fixes

| SAMP id | Question | Field | Flaw in one line | Confidence |
|---|---|---|---|---|
| suicide-risk-16 | q1 | stem, explanation | The explanation called this a non-acute positive because she denied thoughts in the past week. The ASQ decides acuity with its separate fifth item (thoughts of killing yourself right now), which the stem never reported. Added her "no" to the acuity item to the stem and tied the explanation to it | high |
| suicide-risk-19 | q1 | stem | Three options and the explanation treat unemployment for 2 years, weight gain on olanzapine and a family history of schizophrenia as "features of his history", but none was in the stem. Added all three to the stem | high |
| suicide-risk-20 | q1 | prompt | The key ("Timed for when she expected to be alone") and "Called her husband soon afterward" are asked as features of this attempt, but the stem gives neither. Prompt reworded to "if present" so the question no longer rests on facts the case never gave | high |
| suicide-risk-22 | q1 | update | The key "Shared plan she helped write" and the explanation ("a plan she helped build and can describe") rely on a safety plan the case never mentions. Added an update stating that a written safety plan was made with her and she can describe each step | high |
| suicide-risk-23 | q1 | explanation | Said he has "90 tablets at home". He was dispensed 90 and has taken 21 (69 left, as the q3 update states). Reworded to "most of the 90 tablets dispensed still at home" | high |
| suicide-risk-29 | q2 | options | Option "English classes 3 days a week" gave a frequency that the update never states (it says only that he takes English classes). Changed to "English language classes". Order and key unchanged | medium |
| suicide-risk-33 | q1 | options | Option "No risk as the thought was passing" carried its own justification inside the option. Changed to "No suicide risk" | medium |
| suicide-risk-34 | q2 | options | "No-suicide contract at discharge" sat last as if it were a "No [action]" option, out of alphabetical order. Renamed "Signed no-suicide contract", which is last alphabetically. Key position unchanged | low |
| suicide-risk-34 | q3 | keyFeature | Tested attendance at scheduled follow-up (key feature 5) but was mapped to key feature 4. Changed to 5. Key feature 4 stays covered by many other questions | medium |
| suicide-risk-38 | q1 | prompt | Asked for "scene findings", but two options are a fracture pattern and a blood alcohol, which are not scene findings. Prompt changed to "findings" | medium |
| suicide-risk-39 | q1 | correct | Keyed "Increase amitriptyline to 100 mg" (index 3) while its own explanation says increasing it keeps a lethal supply in his hands, so the key was described as wrong. Key reset to "Change to sertraline 50 mg daily" (index 1). The Lens A report records this fix, but it was not present in the file | high |
| suicide-risk-39 | q1 | explanation | Same "90 tablets at home" error as suicide-risk-23. Fixed the same way | high |
| suicide-risk-40 | q2 | explanation | Closing sentence cited a serum lactate of 7.8 mmol/L from a blood gas that the case never gives, and that has no bearing on the question. Removed. The Lens A report records this fix, but it was not present in the file | high |

## Key changes

- suicide-risk-39 q1: before index 3 ("Increase amitriptyline to 100 mg"), after index 1 ("Change to sertraline 50 mg daily"). Reason: the explanation argues for the switch and against any increase, so the old key was contradicted by its own explanation. No key in suicide-risk.ts changed.

## Sources verified

- Alberta Mental Health Act, section 2, read directly from the King's Printer PDF: https://kings-printer.alberta.ca/documents/Acts/M13.pdf. The criteria wording "likely to cause harm to others or to suffer negative effects" and issue "not later than 24 hours after the examination" match the suicide-risk-20 explanations.
- PubMed abstracts read against the explanations:
  - Stanley 2018 (https://pubmed.ncbi.nlm.nih.gov/29998307/): odds of suicidal behaviour about halved, odds of attending outpatient care 2.06. Matches suicide-risk-22 q3 and suicide-risk-34 q3.
  - Owens 2002 (https://pubmed.ncbi.nlm.nih.gov/12204922/): median 16% non-fatal repetition, 0.5% to 2% fatal at 1 year. Matches suicide-risk-34 q1.
  - Grigoriadis 2017 (https://pubmed.ncbi.nlm.nih.gov/28847780/): 39.2% with mental health contact in the prior 30 days, more hanging, highest rates in rural and remote regions. Matches suicide-risk-24 q2.
  - Motto 2001 (https://pubmed.ncbi.nlm.nih.gov/11376235/): letters at least four times a year for 5 years. Matches suicide-risk-34 q2.
  - Fralick 2019 (https://pubmed.ncbi.nlm.nih.gov/30419085/): relative risk 2.03, seen in studies with and without military personnel. Matches suicide-risk-37 q2.

## Needs physician decision

- suicide-risk-39 and suicide-risk-40 are word for word copies of suicide-risk-23 and suicide-risk-31 (same stems, same title for suicide-risk-39). Both must not be added to the bank. Adding them would fail the near duplicate stem test. Their planted defects are fixed so the file is clean if kept for reference.
- suicide-risk-34 opens "A 52-year-old woman is ready for discharge from the emergency department" and suicide-risk-36 opens "was brought", not the standard "presents to" or "is brought to". Both openings serve the timeline, so they were left as written. Low.
- suicide-risk-32 q3 distractor "Punish him for sending the images" assumes he sent the images, which the stem implies but does not state. Low.

## Summary

- 13 fixes across 11 SAMPs.
  - Facts missing from the case that an option, key or explanation relied on: 5 (suicide-risk-16 q1, suicide-risk-19 q1, suicide-risk-20 q1, suicide-risk-22 q1, suicide-risk-29 q2).
  - Wrong numbers: 2 (the tablet count in suicide-risk-23 q1 and suicide-risk-39 q1).
  - Invented finding: 1 (lactate in suicide-risk-40 q2).
  - Key contradicted by its own explanation: 1 (suicide-risk-39 q1, key changed).
  - Format and cueing: 3 (suicide-risk-33 q1, suicide-risk-34 q2, suicide-risk-38 q1).
  - Key feature mapping: 1 (suicide-risk-34 q3).
- Most serious errors: the suicide-risk-39 key of a tricyclic dose increase in a suicidal man, the invented lactate in suicide-risk-40, and keyed answers in suicide-risk-20 q1 and suicide-risk-22 q1 that rested on facts the case never gave.
- SAMP ids with a defect: suicide-risk-16, suicide-risk-19, suicide-risk-20, suicide-risk-22, suicide-risk-23, suicide-risk-29, suicide-risk-33, suicide-risk-34, suicide-risk-38, suicide-risk-39, suicide-risk-40.
