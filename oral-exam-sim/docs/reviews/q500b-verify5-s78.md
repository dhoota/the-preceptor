# Q500B verify review 5: s78, Multiple patients (Revision 5)

Batch: `src/samps/s78/multiple-patients.ts` (multiple-patients-36 to multiple-patients-40). Earlier verdicts: `docs/reviews/q500b-qa-s78.md` and `docs/reviews/q500b-verify-s78.md` to `docs/reviews/q500b-verify4-s78.md`. Writer's report with Revision 1 to 5: `docs/reviews/q500b-writer-s78.md`. This reviewer did not write, edit or review this batch before and edited nothing in it (REVIEW-RULES rule 1). This is a full fresh review of all 20 questions, not only the Revision 5 deletion.

## Tests

`SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests, all pass (12.0 s, bank-wide near duplicate stem test 4.2 s).

House style: no em or en dashes in the file, no semicolons outside code, no personal names, no mnemonics, no absolute words from the SAMP_SPEC list in any option. Canadian spelling ("centre", "neighbouring", "catheterization", "hemothorax", "pediatric", "manoeuvre" not used). SI units, spaced thousands ("1 600 mL").

## Earlier fails: resolution

| Earlier fail | Status |
|---|---|
| verify 4: 38 q4 repeated s81 analgesia-sedation-49 q3 (only physician, nurse dedicated to monitoring while you sedate and reduce) | Resolved. q4 is deleted. 38 now has q1 (postpone sedation, KF2), q2 (calls for massive hemothorax, KF3) and q3 (interruptions, KF3). No remaining 38 question keys sedation staffing. 38 q1 keys a priority decision (postpone and keep analgesia), not the team size, and its explanation mentions the two-person rule only as the reason. The s81 QA review already judged 38 q1 distinct. `S.godwin` is still cited by q1, so keeping it is correct. Deleting q4 also removes the verify 4 mock-mode note (q4 revealed that her sedation happened later). No new problem found. |
| verify 3: 37 q2 and 38 q3 grammar cues (B4) | Still resolved. All options in both are imperative verb phrases. |
| verify 2: 38 q3 repeat of delegated monitoring | Still resolved. Bank grep for "interrupt", "task list", "screen calls" (src/samps and src/cases, including all Q500B batches) finds only handover and incident-factor items (s13, s06), an insulin pump interruption (s88) and a breastfeeding interruption (s73). None keys this decision. |
| verify 1: 37 q3 and q4 mock cues, 38 q3 length, 39 q3 COPD target repeat, 40 q2 wording, 40 q3 and q4 repeats | Still resolved. Text unchanged. |
| first QA: 36 overlap with the batch16 cyberattack case, 37 chlorine, 38 6 hour point, 39 ectopic, 40 CO | Still resolved. "ransom" and "cyberattack" have no hit outside s78. No chlorine, CO, ectopic, anti-D or 6 hour reduction content remains. |

## Batch counts (recomputed by script)

- 20 questions: 16 single, 4 menu (36 q2, 38 q2, 39 q1, 40 q2).
- Single key positions, first to fifth: 3, 4, 4, 3, 2 of 16. Highest 25%, at the limit and not over it. Every position used.
- Key is the single longest option in 4 of 16 single questions (36 q1, 38 q1, 39 q4, 40 q1), 25%, under 35%. Key to mean distractor length at most 1.28 (36 q2 menu). Longest to shortest option ratio at most 1.72 (single) and 1.50 (menu).
- Lead-ins 12 to 19 words. Explanations 447 to 683 characters.
- Key features: KF1 3 (37 q1, 39 q1, 40 q1), KF2 6, KF3 5, KF4 6. All four covered. Each question tests the key feature it names.
- Question count per SAMP: 36 has 5, 37, 39 and 40 have 4, 38 has 3. See note 1.

## Recomputed numbers

- 36 q3: MAP of 86/48 mmHg is about 61 mmHg, lactate 4.6 mmol/L. Possible septic shock, so immediate antimicrobials hold. 32 + 11 = 43 patients, as the q1 explanation says.
- 37: woman's first medical contact 22:45. Second team called about 23:10 to 23:15, ready about 23:40 to 23:45, device about 00:00, about 75 minutes, inside the CCS 120 minute threshold for choosing primary PCI.
- 38 q2: 1 600 mL immediate drainage is over the ATLS 1 500 mL massive hemothorax threshold, the same threshold signed s45 multiple-trauma q3 and the seed trauma case use.
- 38 q3: Westbrook 2010 abstract re-read this session: "Doctors were interrupted 6.6 times/h", "Doctors failed to return to 18.5% ... of interrupted tasks", ED of a 400-bed teaching hospital. Matches.
- 39 q3: 680 / 15 = 45.3 minutes. 90, 75 and 60 minutes correspond to 7.6, 9.1 and 11.3 L/minute. At 30 minutes 230 L (34%) remains, so "a third full" is right.
- 40 q1: pulse 188/minute, capillary refill 5 seconds, limp and mottled at 8 kg: shock, PaedCTAS level 1.
- 40 q4: TREKK v5.0 PDF re-read this session: "6 months - <5 years: 30 mL per 10 minutes, 5-10 years: 60 mL per 10 minutes, >10 years: 90 mL per 10 minutes". Sunken eyes and dry oral mucosa are listed under mild to moderate in Table 1. For a 3-year-old of about 14 kg, 50 to 100 mL/kg over 2 to 4 hours is about 700 to 1 400 mL, so 15 mL every 10 minutes (360 mL in 4 hours) is too slow, as the explanation says.

## Verdicts by SAMP and question

### multiple-patients-36 Screens go dark at shift change: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Activate downtime procedures. TJC SEA 67 advises against delaying decisive action. Diversion is treated as a hospital level decision after a risk review, which matches the TJC case. No distractor equally correct. |
| q2 | PASS | Double check of high alert drugs, judicious testing, paper forms matching the current electronic layout (TJC). Options alphabetical ("Paper" before "Pre-electronic"). Distractor reasons true. |
| q3 | PASS | Paper order for IV antibiotics now. SSC 2026 confirmed to exist (Crossref: Prescott, Antonelli, Alhazzani, Moller, 2026, DOI 10.1097/CCM.0000000000007075). |
| q4 | PASS | Scheduled huddles. Email and the tracking board are computer systems that failed. |
| q5 | PASS | Transcribe records with assigned staff and authenticate orders (TJC). |

### multiple-patients-37 Two activations eight minutes apart: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Man in cardiogenic shock goes first. Fibrinolysis rejected correctly while PCI is available in time. |
| q2 | PASS | Call the second team in now. Times recomputed above. See note 2 on mock mode. |
| q3 | PASS | Monitored bay, pads on, nurse present. Arrhythmia sentence is stated as general teaching, not credited to CCS. |
| q4 | PASS | Redirect the third patient to the other PCI centre. Update does not reveal q2. Consistent with batch10 (diversion of all EMS rejected). |

### multiple-patients-38 Propofol drawn up in bay two: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Postpone sedation and keep analgesia. The two-person rule and the sentence "emergency physicians should coordinate procedures with the department staff" both match the ACEP 2014 policy as quoted on ACEP's clinical policy page and ACEP Now (Level C: a nurse or other qualified individual for continuous monitoring in addition to the proceduralist, and coordinating PSA with ED staff). Neurovascularly intact limb, so a short delay is safe. Distractor reasons true. |
| q2 | PASS | Massive transfusion, general surgeon in now, air transfer to the trauma centre. Not a repeat of s45 q3 (which keys thoracotomy indications, not the calls). Echo, CT, bronchoscopy and embolization rightly rejected in an unstable bleeding chest. |
| q3 | PASS | Have a nurse screen calls and list tasks. Not elsewhere in the bank. Update and prompt do not mention the woman, so q1's key is not revealed. |

### multiple-patients-39 Alarms on every wall outlet: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Ventilated man and the woman with pneumonia at 89% on 15 L. BTS targets (94% to 98%, 88% to 92% if at risk of hypercapnia) correct. "Migraine" is the writer's example of a non-hypoxemic patient, not a BTS list item, and the general point holds. |
| q2 | PASS | Titrate each patient to a target saturation. No update, nothing earlier reveals it. |
| q3 | PASS | About 45 minutes. Update names a new patient and does not show titration. |
| q4 | PASS | Bulk cylinder resupply through hospital command. Stoller 2000 abstract re-read: in 26 of 32 hospitals "the primary and reserve systems depend on a single length of pipe", and backup manifolded cylinders are recommended. Supports the explanation exactly. |

### multiple-patients-40 Two arrivals at 02:00 in the north: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | Infant resuscitation with vascular access first. Shock is PaedCTAS level 1. Tourniquet patient is stable and controlled. |
| q2 | PASS | RCCbc RTVS page re-read this session: "RUDi, MaBAL and CHARLiE are available 24/7, with ROCCi available from 8 a.m. to 9 p.m.", "Quick Reply peer pathways that are available weekdays during business hours", "over Zoom or over the phone", "coordinating patient transport; point-of-care ultrasound". All three keys and all three rejections hold. The page also lists VERRa (overnight virtual ER) at select sites only, which no option claims, so no distractor becomes correct. See note 3. |
| q3 | PASS | Admit. TREKK v5.0 admission criteria re-read: "Severe dehydration or significant electrolyte abnormalities" and "Young infant ...". The explanation does not claim more than the source. |
| q4 | PASS | 30 mL every 10 minutes. Numbers checked above. Options ordered low to high. |

## Notes for the coordinator and physician (not fails)

1. Question count. 38 now has 3 questions. SAMP_SPEC section 2 ("3 to 5 questions per SAMP. Aim for 4 or 5"), SAMP_WRITER_BRIEF and the test (`samp-quality.test.ts`, 3 to 5) allow it, and the coordinator's task states it is acceptable. The Q500B brief's SAMP section says "4 or 5 per SAMP", and verify 2 had asked that 38 keep 4. This review accepts 3 on the spec, but the coordinator should record that the Q500B brief's "4 or 5" was waived for 38. If the waiver is not accepted, the fix is to add one 38 question on a decision not in the bank (not sedation staffing, the 6 hour reduction point, sciatic or neurovascular checks, delegated monitoring with call triggers, tourniquet tasks or role assignment), for example handover of the man's care to the flight crew.
2. Inherent mock-mode dependencies (ruling B6, leave and flag). 37 q2 and q3 ask about the woman's reperfusion plan and her place before angiography, which implies that the man takes the in-house team (q1's key). 36 q2 ("downtime practices") and the 36 q5 update ("paper orders ... created during the outage") imply that downtime processes and paper ordering were used (36 q1 and q3 keys). 38 q2 and q3 updates show you leading the man's care (consistent with q1's key). Each later question cannot work without the fact, so each stays under B6.
3. 40 q2 option "Guidance on the infant's resuscitation" shows the infant is being resuscitated, which is also q1's key. Low confidence that this cues anything, because the stem alone makes her resuscitation need plain and the q1 decision is whose care comes first. If the writer touches 40 again, "Pediatric advice for the infant now" would remove even this hint.
4. 40: the man's tourniquet is about 3 hours 40 minutes old by the q3 update and no question returns to him (carried from verify 2 to 4).
5. 38 q3: the screening nurse and task list are a practical response, not a tested intervention. With three nurses busy, a unit clerk could be the screener in practice. The key is still defensible (carried).
6. 37 q2 uses the CCS 120 minute threshold for choosing primary PCI. The direct-presentation target of 90 minutes is also met here (carried).

## Writer uncertainty (Revision 5)

The writer's only new uncertainty is the 3 question count in 38. Addressed in note 1.

## Sources

| Source | Result this session |
|---|---|
| Wong GC et al. CCS/CAIC STEMI focused update 2019, https://pubmed.ncbi.nlm.nih.gov/30760415/ | PubMed record re-read. Citation details correct. |
| O'Driscoll BR et al. BTS oxygen guideline 2017, https://pubmed.ncbi.nlm.nih.gov/28507176/ | PubMed record re-read. Citation correct. |
| Stoller JK et al. Respir Care 2000, https://pubmed.ncbi.nlm.nih.gov/10771798/ | Abstract re-read. Supports 39 q4. |
| Westbrook JI et al. Qual Saf Health Care 2010, https://pubmed.ncbi.nlm.nih.gov/20463369/ | Abstract re-read. Supports 38 q3. |
| Prescott HC et al. SSC 2026, https://doi.org/10.1097/CCM.0000000000007075 | Publisher page blocked (403). Crossref metadata confirms title, authors and 2026. |
| Godwin SA et al. ACEP PSA clinical policy 2014 (no URL) | PubMed record PMID 24438649 re-read (critical question 3 is minimum personnel). ACEP clinical policy page and ACEP Now, via search: https://acep.org/patient-care/clinical-policies/procedural-sedation-and-analgesia and https://www.acepnow.com/acep-revises-clinical-policy-procedural-sedation-analgesia-emergency-department/2/ . Supports 38 q1. |
| Warren DW et al. PaedCTAS 2008, https://doi.org/10.1017/S1481803500010149 | DOI resolves to the CJEM article. |
| RCCbc RTVS, https://rccbc.ca/initiatives/rtvs/ | Page re-read. Supports 40 q2. |
| TREKK gastroenteritis v5.0 2025, https://trekk.ca/resources/bottom-line-recommendations-gastroenteritis/ | Page and linked PDF re-read. Supports 40 q3 and q4. |
| ATLS 11th edition 2025, https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/ | Page resolves. Manual text not open. The 1 500 mL threshold matches the signed bank items that cite ATLS. |
| TJC Sentinel Event Alert 67, 2023 | Not reopened. Verified by verify 4 (PDF opened), text unchanged. |

No invented citation found.

## Summary

- multiple-patients-36: PASS.
- multiple-patients-37: PASS.
- multiple-patients-38: PASS. The Revision 5 deletion fixes the verify 4 repeat and creates no new problem. 3 questions, see note 1.
- multiple-patients-39: PASS.
- multiple-patients-40: PASS.

Every earlier fail is resolved. No keyed answer is clinically wrong, every number recomputed is correct, and no new near-duplicate was found across the bank, the other Q500B batches included.

Overall: PASS
