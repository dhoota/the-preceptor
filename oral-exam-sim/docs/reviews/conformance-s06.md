# Format conformance: batch s06

Batch s06 has 30 SAMPs. msk-01 to msk-15 cover common fractures and MSK injury. cqi-01 to cqi-15 cover continuous quality improvement. This pass changed format only. No answer changed. `correct` indexes were remapped after reordering, and every remap was checked against the physician sign-off snapshot (`docs/signoff-keys-2026-09.json`). No `select`, `required`, `accept` or `unacceptable` value was touched. Only `src/samps/s06/` was edited.

## Checks

- `npx tsc --noEmit -p . | grep samps/s06`: no errors.
- `CONFORM=s06 SAMP_BATCH=s06 npx vitest run tests/samp-quality.test.ts tests/samps.test.ts`: 408 passed, 17 failed. All 17 failures are the expected "keeps its keys" test, one per SAMP with a reworded keyed option: msk-03, msk-04, msk-05, msk-07, msk-08, msk-09, msk-10, msk-11, msk-12, cqi-02, cqi-03, cqi-06, cqi-09, cqi-10, cqi-12, cqi-14, cqi-15. They pass once the edits below are logged in `docs/conformance-key-edits.json`.

## Counts

| Item | Count |
|---|---|
| Prompts reworded | 101 (30 single and menu, 71 write-in) |
| Options added | 0 |
| Options removed | 0 |
| Options reworded | 114 |
| Keyed options reworded | 24 option texts in 23 questions |
| Stems changed | 8 (msk-01, msk-05, msk-07, msk-08, msk-11, msk-12, cqi-03, cqi-05) |
| Vitals moved to the `vitals` field | 6 SAMPs (msk-01, msk-05, msk-07, msk-08, msk-11, msk-12) |
| Patient names removed | 0 (none found) |
| Citations completed | 6 |
| Citations replaced | 3 |

Notes on the counts:
- Every single question already had 5 options, and every menu had 6 to 8. No options were added or removed.
- Context sentences that sat in front of a question moved to that question's `update`. This applies to msk-05 q1, msk-06 q3, msk-07 q1, msk-08 q4, msk-09 q4, msk-12 q4, cqi-01 q1, cqi-06 q3, cqi-07 q2, cqi-11 q2 and cqi-15 q2. The wording is unchanged.
- In msk-10 q3, the update now reads "His BP is 124/70 mmHg."
- Other stem edits: cqi-03 now reads "55 000 visits", with a space as the thousands separator. In cqi-05, "respiratory rate was 7 and SpO2 84%" now reads "respiratory rate was 7/minute and O2 saturation 84%".

## Key positions across the 24 single questions

| Position | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Before | 1 | 12 | 11 | 0 | 0 |
| After | 5 | 5 | 5 | 4 | 5 |

- The keyed option is now the single longest option in 5 of 24 single questions (21 percent). The limit is 35 percent.
- Distractor wording decided the order, so no answer moved except through the alphabetical sort. Examples: "Nuclear bone scan in 48 hours" (msk-01), "Tibial tubercle apophysitis" (msk-05), "Arterial bypass by vascular surgery" (msk-12), "Accuse the surgeon of a serious mistake" (cqi-10).

## Keyed option rewordings

The order within "After" follows the new option order.

| SAMP | Question | Before | After |
|---|---|---|---|
| msk-03 | q2 | Electrical injury or electroconvulsive therapy without paralysis | Electrical injury or ECT without muscle paralysis |
| msk-04 | q4 | Long arm or functional forearm splint, analgesia, fracture clinic review in about one week, and a safety plan before discharge | Splint, analgesia, fracture clinic in one week, safety plan |
| msk-05 | q4 | Urgent orthopedic consultation for fixation as soon as possible, because this is an unstable slip | Urgent orthopedic consultation for fixation |
| msk-07 | q2 | MRI of the hip, or CT if MRI is not available | MRI of the hip, or CT if MRI unavailable |
| msk-08 | q1 | Immediate closed reduction with analgesia or sedation, then radiographs | Immediate reduction with analgesia or sedation, then films |
| msk-08 | q3 | An open fracture requiring antibiotics and surgical debridement | Open fracture needing antibiotics and surgical debridement |
| msk-09 | q3 | Urgent hand surgery consultation for operative irrigation and debridement with IV antibiotics | Urgent hand surgery for operative washout and IV antibiotics |
| msk-10 | q3 | The perfusion pressure (diastolic minus compartment) is 22 mmHg, which supports emergency fasciotomy | Perfusion pressure of 22 mmHg, so emergency fasciotomy |
| msk-11 | q1 | Remove the dressing and inspect the skin around the entire leg | Remove the dressing and inspect skin around the entire leg |
| msk-11 | q2 | Cefazolin 3 g IV | cefazolin 3 g IV (case only, generic name in lower case) |
| msk-12 | q3 | Urgent orthopedic consultation for closed reduction and pinning within hours | Urgent closed reduction and pinning by orthopedics |
| cqi-02 | q3 | A blood test that showed his infection was more serious came back at shift change. It was not acted on for about three hours. I am sorry. We are treating him in the ICU. The hospital will review how this happened, and I will keep you updated. | Disclose the delay, apologize and explain next steps |
| cqi-03 | q2 | Proportion of discharged patients who return within 72 hours and are admitted | Return with admission within 72 hours of discharge |
| cqi-03 | q4 | ED length of stay for older adults discharged after a fall | ED length of stay for discharged older fall patients |
| cqi-06 | q1 | A trailing zero, as in 5.0 mg | Trailing zero, as in 5.0 mg |
| cqi-06 | q3 | Disclose the event, its effects and the plan, with an apology, as soon as reasonably possible | Disclose the event, effects, plan and apology promptly |
| cqi-09 | q1 | Human error, so console the nurse and fix the system that allowed it | Human error, so console the nurse and fix the system |
| cqi-09 | q3 | Treat it as at risk behaviour, coach staff, and fix the reasons the workaround is common | At risk behaviour, so coach staff and fix the causes |
| cqi-10 | q1 | "I am concerned. The X-ray shows the pneumothorax on the left and you are prepping the right. I need us to stop and confirm the side." | State concern, cite the X-ray, ask to stop and confirm |
| cqi-10 | q3 | Report it to the hospital incident system so it can be analyzed and shared | Report it to the hospital incident system |
| cqi-12 | q4 | Plot weekly LWBS rates on a run chart with a baseline median, annotate the changes, and apply run chart rules | Weekly annotated run chart with baseline median and rules |
| cqi-14 | q3 | Triage registration timestamps from the ED information system | Triage registration timestamps in the ED information system |
| cqi-14 | q3 | Acquisition timestamps from the ECG machines or ECG management system | ECG acquisition timestamps from the ECG machine or system |
| cqi-15 | q2 | An apology does not constitute an admission of fault or liability and is generally not admissible in civil proceedings to prove liability | Not an admission of liability and generally inadmissible |

Keyed arrays as the test compares them, after the edit:
- msk-03 q2: ["Axial load on a flexed, adducted and internally rotated arm", "Electrical injury or ECT without muscle paralysis"]
- cqi-03 q2: ["Return with admission within 72 hours of discharge", "Seven day mortality after ED discharge"]
- cqi-06 q1: ["Trailing zero, as in 5.0 mg", "U for units", "µg for microgram"]
- cqi-14 q3: ["ECG acquisition timestamps from the ECG machine or system", "Triage registration timestamps in the ED information system"]

Where a keyed option lost detail, the explanation now carries it:
- msk-04: splint type and review timing.
- msk-05: urgency.
- msk-08 q1: analgesia or sedation before imaging.
- msk-09: consultation, irrigation and debridement.
- msk-10: the perfusion pressure definition.
- msk-12: consultation within hours.
- cqi-02: the facts to disclose.
- cqi-06: the full disclosure elements.
- cqi-09: fixing the reasons the workaround is common.
- cqi-10 q1: the full CUS statement, quoted.
- cqi-12: plot, annotate and apply rules.
- cqi-03 q4: the explanation now names "the proportion with a mobility assessment" to match the reworded distractor.

Four keyed rewordings were needed only for the 10 word option limit that the test enforces: msk-07 q2, cqi-03 q4, cqi-10 q1 and cqi-14 q3.

## Distractor changes worth noting

- msk-05 q2: "Osgood-Schlatter disease" is now "Tibial tubercle apophysitis", the same condition. The explanation names both and says why it does not fit.
- cqi-12 q2: "Patient reported experience" is now "Experience", to meet the length ratio against the one word options.
- cqi-02 q3 and cqi-10 q1: the quoted speech options are now action phrases, to meet the 60 character limit and parallel form.
- Reason text moved out of options into explanations. This covers "because the neurological exam is normal", "to reduce infection risk", "because the pulse is palpable" and "because this is an unstable slip". It also covers "so it can be analyzed and shared", which was reason text inside the keyed option of cqi-10 q3.

## Citation changes

| Source id | Before | After | Verification |
|---|---|---|---|
| rosen | Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. Elsevier. Orthopedic lesions chapters. | ... 10th ed. Elsevier. 2023. | https://shop.elsevier.com/books/rosens-emergency-medicine-concepts-and-clinical-practice/walls/978-0-323-75789-8 |
| aaos-supracondylar | American Academy of Orthopaedic Surgeons. Management of pediatric supracondylar humerus fractures. Clinical practice guideline. | Mulpuri K, Hosalkar H, Howard A. AAOS clinical practice guideline: the treatment of pediatric supracondylar humerus fractures. J Am Acad Orthop Surg. 2012. | https://pubmed.ncbi.nlm.nih.gov/22553105/ |
| trekk-pain | TREKK. Bottom line recommendations on pediatric pain and fractures. | Replaced: TREKK. Bottom line recommendations: pediatric fractures. Version 4.0. 2025. | https://cms.trekk.ca/wp-content/uploads/2023/11/2025_04_22-Fractures-BLR-v4.0-Final.pdf (footer reads "APRIL 2025, VERSION 4.0") |
| cmpa-disclosure | CMPA. Disclosing harm from healthcare delivery. Open and honest communication with patients. | ... Version 3. 2017. | https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2015/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients |
| cmpa-results | CMPA. Guidance on managing test results and follow up. | Replaced: CMPA. Closing the loop on effective follow-up in clinical practice. 2019. | https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2019/closing-the-loop-on-effective-follow-up-in-clinical-practice |
| ismp-hydromorphone | ISMP Canada. Safety bulletins on hydromorphone and morphine mix-ups. | Replaced: ISMP Canada. Safeguards for HYDROmorphone: results of a targeted demonstration project. ISMP Canada Safety Bulletin. Volume 13, issue 10. 2013. | https://ismpcanada.ca/wp-content/uploads/ISMPCSB2013-10_HYDROmorphone.pdf |
| accreditation-rop | Accreditation Canada. Required Organizational Practices. ... | Accreditation Canada. Required Organizational Practices: 2021 handbook. ... 2021. | https://vitalitenb.ca/images/files/documents/medecins/2021_rop_handbook.pdf |
| phac-ipc | PHAC. Routine practices and additional precautions ... | ... 2016. | https://www.canada.ca/content/dam/phac-aspc/documents/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/routine-practices-precautions-healthcare-associated-infections-2016-FINAL-eng.pdf |
| teamstepps | AHRQ. TeamSTEPPS. Team strategies and tools ... | AHRQ. TeamSTEPPS 3.0 pocket guide: team strategies and tools to enhance performance and patient safety. 2023. | https://www.ahrq.gov/teamstepps-program/resources/pocket-guide/index.html |

All other citations already had a year and were left unchanged.

## Needs physician decision

These items were left unchanged, or were changed only as the table above records.

1. Every keyed rewording in the table above needs sign-off. Three lose the most detail:
   - cqi-02 q3: the full disclosure statement is now an action phrase.
   - cqi-15 q2: "fault" and "in civil proceedings to prove liability" were dropped from the option. The explanation keeps them.
   - msk-08 q1: "closed" and "radiographs" became "reduction" and "films".
2. msk-09 q4 explanation says IV amoxicillin clavulanate "has been available" in Canada "since 2020". I could not confirm this in this pass. Please verify.
3. msk-12 q4: the TREKK fractures document supports intranasal fentanyl for fracture pain but refers to the TREKK pain treatment recommendations for dosing. The 1.5 mcg/kg dose is not stated in the cited document itself. Consider adding the TREKK pain treatment recommendations as a second source.
4. cqi-07: the replacement CMPA article supports reliable result follow up systems in general. It does not address ED discharge specifically, or learning from radiology discrepancies (q3).
5. cmpa-disclosure: the page shows "Published: March 2017, Version 3", but its URL path says 2015. 2017 was used.
6. cqi-06 q1 keeps "µg for microgram". It breaks the house symbol rule, but it is the tested content.
7. cqi-05 keeps "respiratory rate was 7/minute and O2 saturation 84%" in the stem. These values come from 30 minutes into the event, not from presentation. Moving them to the `vitals` field would misplace them in the timeline.
