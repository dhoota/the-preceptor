# Q500B verify review 2: s78, Multiple patients (Revision 2)

Batch: `src/samps/s78/multiple-patients.ts` (multiple-patients-36 to multiple-patients-40). Earlier verdicts: `docs/reviews/q500b-qa-s78.md` and `docs/reviews/q500b-verify-s78.md`. Writer's report with "Revision 1" and "Revision 2": `docs/reviews/q500b-writer-s78.md`. This reviewer did not write, edit or review this batch before and edited nothing in it (REVIEW-RULES rule 1).

The whole final batch was reviewed, not only the changed items. Bank-wide keyword search over `src/samps` and `src/cases` (generated files excluded), Q500 and Q500B batches included.

## Tests

`SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 132 tests, all pass (12.7 s).

House style: no em or en dashes, no semicolons in content, no personal names, no mnemonics. 40 now uses "pediatric" throughout. The PaedCTAS citation keeps its published title, which is correct. Single keys: no key stands out by length. 38 q3 key is now 37 characters against distractors of 37 to 40.

## Earlier fails: resolution

| Earlier fail (verify 1) | Status |
|---|---|
| 37 q3 prompt cue, and the arrhythmia claim credited to CCS | Resolved. Prompt reads "before her angiography". Explanation says "Early STEMI carries a risk of ventricular fibrillation and high grade block" and keeps CCS for the short delay to PCI. |
| 37 q4 update cue ("Both teams") | Resolved. Update reads "Your catheterization laboratory will be busy for at least 90 minutes." |
| 38 q3 key length (B1) | Resolved as asked. A new repeat problem is found below. |
| 39 q3 repeat of s25 and s04 COPD targets, and update cue | Resolved. The COPD target question is gone. New cylinder duration question, update names a new patient and shows no titration. |
| 40 q2 "pediatric emergency physician" wording | Resolved. Now "a physician on that pathway", and q2 is now a menu question. |
| 40 q3 repeat of shock-02 (fluid and D10W) | Resolved. Replaced with a disposition question. No fluid or dextrose dosing left. |
| 40 q4 repeat of mp-16 CTAS respiratory modifier | Resolved. Replaced with an oral rehydration rate question. |
| First QA fails (36 cyberattack case, 37 chlorine, 38 6 hour point, 39 ectopic, 40 CO) | Still resolved. No chlorine, CO, ectopic or anti-D content left. batch16 no longer holds the cyberattack case. |

## Recomputed numbers

- 39 q3: 680 L divided by 15 L/minute is 45.3 minutes, so "About 45 minutes" is correct. 90 minutes fits 680 / 90 = 7.6 L/minute, 75 minutes fits 9.1 L/minute, 60 minutes fits 11.3 L/minute, as the explanation says. A change at 30 minutes leaves 680 minus 450 = 230 L, which is 34%, so "still a third full" is correct. 680 L is the usual capacity of a full E cylinder.
- 40 q4: TREKK v5.0 (PDF opened, see sources) gives "6 months - <5 years: 30 mL per 10 minutes", "5-10 years: 60 mL per 10 minutes", ">10 years: 90 mL per 10 minutes". Key and explanation match. At 30 mL every 10 minutes a 3-year-old of about 14 kg gets 180 mL an hour, about 50 mL/kg over 4 hours, the low end of the TREKK 50 to 100 mL/kg deficit. 15 mL every 10 minutes gives about 26 mL/kg in 4 hours, so "too slow" holds.
- 40 q3: TREKK "Criteria for Hospital Admission" lists "Severe dehydration or significant electrolyte abnormalities" and "Young infant". Supported.
- 37: first medical contact 22:45, second team ready about 23:45, device well inside 120 minutes. Correct.
- 38 q2: 1 600 mL immediate drainage is over the ATLS 1 500 mL threshold. Correct.
- 36 q3: MAP of 86/48 mmHg is about 61 mmHg. Correct.

## Verdicts by SAMP and question

### multiple-patients-36 Screens go dark at shift change: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Unchanged. Declaring downtime first. Distractor reasons true. |
| q2 | PASS | Unchanged. Double check of high alert drugs, judicious tests, paper forms matching the current layout. |
| q3 | PASS | Unchanged. Handwritten antibiotic order now. SSC 2026 supports immediate antimicrobials. |
| q4 | PASS | Unchanged. Scheduled huddles. |
| q5 | PASS | Unchanged. Assigned staff transcribe the paper record. |

### multiple-patients-37 Two activations eight minutes apart: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Man in cardiogenic shock goes first. |
| q2 | PASS | Second team now. Times recomputed. Note only: q4 shows the city's other PCI centre has a free team 20 minutes away, so transfer of the woman is not absurd. Calling the home team (ready in 30 minutes, no transport) is still the best answer, and the explanation's reason ("Transfer adds travel time when a team can be here in 30 minutes") holds. |
| q3 | PASS | Prompt and explanation fixed. Note only: signed multiple-patients s13 (STEMI in bed 3 while you are at a delivery) has "Monitor with defibrillator pads on" as one accept item among five. 37 q3 tests where the stable STEMI patient waits, a different decision. Not a repeat. |
| q4 | PASS | Update fixed. Redirection to the free PCI centre is correct. |

### multiple-patients-38 Propofol drawn up in bay two: FAIL (q3)

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Postpone sedation, keep analgesia. Low-confidence note under B6: q3 ("until the hip is reduced") and q4 ("staffing plans ... for her sedation") together show that she is still unreduced and will be sedated here later, which rules out "Reduce the hip now without sedation" and "Transfer her by road" for a candidate who reads ahead. q4 cannot work without that fact, so under B6 it stays and is flagged, not failed. |
| q2 | PASS | Massive transfusion, surgeon in now, trauma centre for air transfer. |
| q3 | FAIL | Repeat of a signed key decision on the same topic (Q500B rule 3: no reused key decision or teaching point). Signed multiple-patients-30 q3 (s44, "Three children at once", META reviewed true) asks "Which of the following is the most appropriate monitoring plan for the post-ictal boy?" while the only physician stays with another patient, keys "Named nurse with oximetry and call triggers" and rejects "Physician check after the asthma settles". 38 q3 asks for a plan for repeat checks while the only physician is busy, keys "Timed nurse checks with call triggers" and rejects "Checks by you only after the reduction" and "Hourly checks by you between patients". Same prompt shape, same key, same teaching point (delegate interval monitoring to a named nurse with triggers to call you). The point is also keyed twice in signed s13: multiple-patients q4 "The respiratory therapist, with clear triggers to call you" (ventilated patient while you run a trauma) and the naloxone item ("Assign a nurse to monitor her and set clear triggers to call you"). The Revision 2 key shortening, asked for by verify 1, made the wording closer still. The clinical content (sciatic injury in about 10%, peroneal division) is correct. Exact fix: replace q3 with a question whose key decision is not delegated monitoring with call triggers, and not the 6 hour reduction point or the sciatic examination (batch12 hip case), not tourniquet tasks (s45), and not role assignment before arrival (s13 accept item). It must not reveal the q1 key. Grep `src/samps` and `src/cases` for the new key decision before writing. 38 must keep 4 questions. |
| q4 | PASS | Nurse monitors while you sedate and reduce. ACEP 2014 two-person standard. Provincial scope wording is fair. |

### multiple-patients-39 Alarms on every wall outlet: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Ventilated man and hypoxemic pneumonia patient first. BTS targets correct. |
| q2 | PASS | Titrate to target saturation. |
| q3 | PASS | New. 45 minutes recomputed. The update names a new patient and reveals neither q1 nor q2. No cylinder duration item anywhere else in the bank ("cylinder" hits only a cast in s54 msk, "680" hits are unrelated). Note only: Stoller supports cylinders as the only supply when the pipe fails, and the arithmetic needs no source. In practice a cylinder is changed before it is empty (residual pressure), and the explanation's "well before then" covers that. |
| q4 | PASS | Bulk cylinder resupply. Stoller abstract supports the single pipe point (verified in verify 1). |

### multiple-patients-40 Two arrivals at 02:00 in the north: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Infant in shock first. Shock is PaedCTAS level 1. |
| q2 | PASS | RCCbc RTVS page opened (curl): "RUDi, MaBAL and CHARLiE are available 24/7, with ROCCi available from 8 a.m. to 9 p.m.", "10 RTVS Quick Reply peer pathways that are available weekdays during business hours", "over Zoom or over the phone", and the list "coordinating patient transport; point-of-care ultrasound". All three keys and all three distractor reasons are supported. The stem sets British Columbia (ruling A17). Note for the physician: this question tests the hours of one provincial service. That is a judgement on exam relevance for a national candidate, not a defect. The page also lists VERRa "overnight hospital support" at select sites. It is a virtual ER, so it does not make "A physician sent to work on site tonight" correct. |
| q3 | PASS | New. Admission keyed. TREKK criteria support it. No disposition after severe dehydration elsewhere in the bank (shock-02 in s16 has no disposition question). Note for the physician: TREKK does not define "young infant". At 8 months she may not qualify, but severe dehydration alone meets the criteria, so the key holds. |
| q4 | PASS | New. 30 mL every 10 minutes for 6 months to under 5 years, checked against the TREKK PDF. No per 10 minute oral rate item elsewhere in the bank (s16 shock tests the 50 to 100 mL/kg deficit over 4 hours, a different decision). Note only: TREKK also recommends ondansetron 2 mg PO at 8 to 15 kg for a vomiting child with some dehydration. The question asks only the rate, so leaving it out is not an error. |

Note for the physician on 40 overall: by the q3 update (3 hours later) the man's tourniquet has been on for about 3 hours 40 minutes, and no question returns to him. Nothing keyed is wrong, but the physician may want the stem or an update to say his transfer was arranged.

## Writer uncertainties (Revision 2)

1. 40 q2 tests one provincial service, and the stem sets BC: accepted (A17). Exam relevance left to the physician.
2. 40 q3 admission "here or at the referral centre" keyed together, all distractors discharge: accepted. No distractor is also correct.
3. 39 q3 cylinder volume given in the update: accepted. 680 L is a standard E cylinder capacity and the question works on the stated volume.

## Bank-wide searches run

"every 10 minutes", "oral rehydration", "severe dehydration", "young infant", "trekk", "680", "cylinder", "oxygen supply", "oxygen tank", "wall oxygen", "piped", "Real-Time", "RTVS", "monitored bay", "pads on", "neurovascular check", "call triggers", "triggers to call", "triggers for calling", "two STEMI", "catheterization team", "second team", "admit for ongoing", "disposition for the infant". The only repeat found is 38 q3 (above).

## Sources verified

| Source | Result |
|---|---|
| RCCbc RTVS page, https://rccbc.ca/initiatives/rtvs/ | Opened with curl. Supports 40 q2 in full. |
| TREKK gastroenteritis BLR v5.0, October 2025 | Resource page opened with curl, and its linked PDF (https://cms.trekk.ca/wp-content/uploads/2023/11/2025_10_14-TREKK-Gastroenteritis-BLR-v5.0_FinalDraft.pdf) downloaded and text extracted. Supports 40 q3 (admission criteria) and 40 q4 (rates by age band, oral rather than IV for mild to moderate). The cited URL is the resource page, which is correct. |
| TJC SEA 67, Dawson-Amoah 2018, Stoller 2000 | Not re-opened. Verified by verify 1, and the text they support is unchanged. |

Could not open or not re-fetched (WebFetch not used, near its weekly limit): CCS/CAIC 2019 full text, BTS 2017 full text, ACEP 2014 policy, ATLS 11th edition, PaedCTAS 2008, SSC 2026. All are existing bank sources or were checked in earlier reviews.

No invented citations found.

## Summary

- multiple-patients-36: PASS.
- multiple-patients-37: PASS. Both cues fixed.
- multiple-patients-38: FAIL. q3 repeats the delegated monitoring with call triggers decision keyed in signed multiple-patients-30 q3 (s44) and twice in signed s13. Replace q3.
- multiple-patients-39: PASS. Cylinder arithmetic correct.
- multiple-patients-40: PASS. TREKK rates and admission criteria checked against the PDF, and the RTVS hours against the page.

Every earlier fail is resolved. No keyed answer is clinically wrong, and every number recomputed is correct.

Overall: FAIL (1 item)
