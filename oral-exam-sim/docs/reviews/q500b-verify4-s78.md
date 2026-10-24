# Q500B verify review 4: s78, Multiple patients (Revision 4)

Batch: `src/samps/s78/multiple-patients.ts` (multiple-patients-36 to multiple-patients-40). Earlier verdicts: `docs/reviews/q500b-qa-s78.md` and `docs/reviews/q500b-verify-s78.md` to `docs/reviews/q500b-verify3-s78.md`. Writer's report with Revision 1 to 4: `docs/reviews/q500b-writer-s78.md`. This reviewer did not write, edit or review this batch before and edited nothing in it (REVIEW-RULES rule 1). The whole final batch was reviewed, not only the two changed options.

## Tests

`SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 132 tests, all pass (13.0 s).

House style: no em or en dashes, no semicolons outside code, no personal names, no mnemonics, no absolute words in options ("entirely" appears once, in the 39 q1 explanation, which the rule does not cover). Canadian spelling throughout.

## Earlier fails: resolution

| Earlier fail | Status |
|---|---|
| verify 3: 37 q2 key the only passive noun phrase (B4) | Resolved. Key now "Call the second team in from home now", `correct: 1`, all five options imperative. Key 37 characters against 30 to 41. |
| verify 3: 38 q3 key the only noun phrase (B4) | Resolved. Key now "Have a nurse screen calls and list tasks", `correct: 2`, all five options imperative. Key 40 characters against 37 to 41. |
| verify 3 note: unused `S.ctas2016` | Removed. Every entry in the source object is cited. |
| verify 2: 38 q3 repeat of delegated monitoring | Still resolved (interruption handling, not repeated elsewhere in the bank). |
| verify 1: 37 q3 and q4 mock cues, 38 q3 length, 39 q3 COPD target repeat, 40 q2 wording, 40 q3 and q4 repeats | Still resolved. Text unchanged. |
| first QA: 36 cyberattack case overlap, 37 chlorine, 38 6 hour point, 39 ectopic, 40 CO | Still resolved. Bank grep for "ransom" and "cyberattack" outside s78 finds nothing, so the batch16 case is gone. No chlorine, CO, ectopic or anti-D content remains. |

Single key positions, first to fifth: 4, 4, 4, 3, 2 of 17 (no position above 25 percent). Key features: KF1 3, KF2 6, KF3 6, KF4 6.

## Recomputed numbers

- 36 q3: MAP of 86/48 is about 61 mmHg. Septic shock reading holds.
- 37: first contact 22:45, second team ready about 23:40 to 23:45, so device time near 00:00, about 75 minutes, inside 120.
- 38 q2: 1 600 mL immediate drainage is over the 1 500 mL threshold.
- 39 q3: 680 / 15 = 45.3 minutes. 90, 75 and 60 minutes fit 7.6, 9.1 and 11.3 L/minute. At 30 minutes 230 L (34%) remains, so "a third full" is right.
- 40 q4: TREKK v5.0 gives 30 mL per 10 minutes for 6 months to under 5 years, 60 mL for 5 to 10 years, 90 mL over 10 years (PDF opened this session).
- Option length ratios: all within 2.1 (single) and 2.6 (menu). The key is the single longest option in 4 of 17 single questions (36 q1, 38 q1, 39 q4, 40 q1), each by one character. Not a cue at that margin, and the rate (24%) is under the B1 limit.

## Verdicts by SAMP and question

### multiple-patients-36 Screens go dark at shift change: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Activate downtime procedures. TJC: "Avoid delaying decisive action", "offline for four weeks or longer", and the case hospital that "diverted" emergency cases after a risk review. All verb phrases. |
| q2 | PASS | Double check (TJC "manual or doublecheck processes ... absence of barcode verification"), judicious tests ("ordering tests judiciously during downtimes"), forms matching the current layout ("rather than using older forms that were discontinued"). "Insulin and heparin" are examples, not quoted, and are standard high alert drugs. |
| q3 | PASS | Paper order for IV antibiotics now (SSC 2026 immediate antimicrobials). |
| q4 | PASS | Scheduled huddles (TJC "frequent huddles among unit staff", "frequent leadership rounding"). Email is not listed in the stem as failed, but "every hospital computer displays a ransom demand" covers it. |
| q5 | PASS | TJC "Restore electronic systems deliberately", "assign staff for transferring data ... scanning or manual entry", "Authenticate all transcribed orders". |

### multiple-patients-37 Two activations eight minutes apart: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Man in cardiogenic shock first. |
| q2 | PASS | Revision 4 wording fixed. Clinical content correct. |
| q3 | PASS | Monitored bay, pads on, nurse present. |
| q4 | PASS | Redirect the third patient. No conflict with batch10 saturday-night-no-beds (there the laboratory was free and diversion of all EMS was rejected, which this item also rejects). |

### multiple-patients-38 Propofol drawn up in bay two: FAIL (q4)

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Postpone sedation, keep analgesia. |
| q2 | PASS | Massive transfusion, surgeon in, trauma centre air transfer. |
| q3 | PASS | Revision 4 wording fixed. Westbrook figures match the abstract (checked by verify 3). |
| q4 | FAIL | Repeat of a key decision in another Q500B batch (Q500B rule 3, reviewer check "including other new Q500B batches"). s81 analgesia-sedation-49 q3: "It is 03:00 and you are the only physician in the hospital ... Which of the following is the minimum team needed for his sedation and fracture reduction?", keyed "You and a nurse dedicated to monitoring", rejecting "You alone with continuous monitoring" and a nurse who also holds traction. 38 q4 asks the same thing of the same setting (only physician, sedation plus reduction), keys "A nurse monitors her while you sedate and reduce" and rejects "You sedate, reduce and monitor her yourself". Only the age and the source (CPS 2021 against ACEP 2014) differ. The s81 QA review saw the overlap but judged it against 38 q1, which keys a different decision. It did not consider 38 q4, which keys the same one. 38 q1's own explanation already teaches the two-person rule, so q4 also repeats a point inside its own SAMP. The signed s02 analgesia-sedation short item (monitoring elements, "A dedicated person who is not doing the procedure must watch the patient") carries the same teaching point. Exact fix (preferred, simplest): delete 38 q4 and remove `S.godwin` only if q1 no longer cites it (it does, so keep it). 38 then has 3 questions, which SAMP_SPEC allows, and KF3 falls from 6 to 5 with every key feature still covered. Recheck single key positions after deletion (the q4 key is in position 1, so the count becomes 3, 4, 4, 3, 2 of 16, top 25%). Alternative fix: replace q4 with a question on a decision not in the bank, for example who leads the man's care at handover to the flight crew or surgeon, and do not test sedation staffing, the 6 hour reduction point, sciatic or neurovascular checks or the reassessment of a waiting patient. |

### multiple-patients-39 Alarms on every wall outlet: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Ventilated man and hypoxemic pneumonia patient. Options sort correctly by descriptor once ages are ignored (the test's sort key strips digits). |
| q2 | PASS | Titrate to target saturation. |
| q3 | PASS | About 45 minutes. |
| q4 | PASS | Bulk cylinder resupply (Stoller 2000, checked by verify 1). |

### multiple-patients-40 Two arrivals at 02:00 in the north: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Infant first. Options mix three verb phrases and two noun phrases, so the key is not the lone form. |
| q2 | PASS | RCCbc page opened this session: "RUDi, MaBAL and CHARLiE are available 24/7, with ROCCi available from 8 a.m. to 9 p.m.", "Quick Reply peer pathways ... available weekdays during business hours", Zoom or phone, "coordinating patient transport; point-of-care ultrasound". All keys and rejections hold. |
| q3 | PASS | Admit. TREKK v5.0 admission criteria opened this session: "Severe dehydration or significant electrolyte abnormalities", "Young infant ...". |
| q4 | PASS | 30 mL every 10 minutes, mild to moderate signs as TREKK Table 1 lists them (sunken eyes, dry oral mucosa). |

## Notes for the physician (not fails)

1. 38 q1 and q4 (if q4 stays in any form): q4's premise that her sedation happens later in the department narrows q1 in mock mode (it rules out transfer and reduction without sedation). Ruling B6 lets a question that cannot work without the fact stay, flagged. Deleting q4 removes this too.
2. 40 q3: TREKK lists "Young infant" without an age. The explanation does not claim she meets it, and severe dehydration alone qualifies. TREKK also says IV fluids stop once the child is stable and oral rehydration works, so admission rests on the severe dehydration criterion and the rural setting.
3. 40: the man's tourniquet is about 3 hours 40 minutes old by the q3 update and no question returns to him (carried from verify 2 and 3).
4. 38 q3: "one nurse should screen calls" is a practical response, not a tested intervention (carried from verify 3).
5. 37 q2 uses 120 minutes, the CCS threshold for choosing primary PCI. The CCS direct-presentation target is 90 minutes, which batch10 uses. Both are met here.
6. 39 q1: "migraine" is the writer's example of a non-hypoxemic patient, not a BTS list item. The general BTS point holds.

## Sources

| Source | Result |
|---|---|
| TJC Sentinel Event Alert 67, https://digitalassets.jointcommission.org/api/public/content/8bd6addf4df943f383a074f2d9d4af64 | PDF opened with curl. Supports 36 q1, q2, q4, q5 as quoted above. |
| TREKK gastroenteritis v5.0, https://trekk.ca/resources/bottom-line-recommendations-gastroenteritis/ | Page and linked PDF opened. Supports 40 q3 and q4. |
| RCCbc RTVS, https://rccbc.ca/initiatives/rtvs/ | Page opened. Supports 40 q2. |

Not reopened (WebFetch not used, near its weekly limit): SSC 2026, CCS/CAIC 2019, ACEP 2014 (no URL, text citation), ATLS 11th edition, BTS 2017, Stoller 2000, PaedCTAS 2008, Westbrook 2010. All were checked in earlier reviews or are existing bank sources, and the text they support is unchanged. No invented citation found.

## Summary

- multiple-patients-36: PASS.
- multiple-patients-37: PASS.
- multiple-patients-38: FAIL. q4 repeats the key decision of s81 analgesia-sedation-49 q3 (only physician: a nurse dedicated to monitoring while you sedate and reduce). Delete q4, or replace it with a decision not in the bank.
- multiple-patients-39: PASS.
- multiple-patients-40: PASS.

Both verify 3 fails are resolved. No keyed answer is clinically wrong, and every number recomputed is correct.

Overall: FAIL (1 item)
