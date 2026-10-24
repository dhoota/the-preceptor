# Q500B verify review: s78, Multiple patients (Revision 1)

Batch: `src/samps/s78/multiple-patients.ts` (multiple-patients-36 to multiple-patients-40). First review: `docs/reviews/q500b-qa-s78.md`. Writer's report with "Revision 1": `docs/reviews/q500b-writer-s78.md`. This reviewer did not write, edit or review this batch before and edited nothing in it (REVIEW-RULES rule 1).

Both lenses applied to the whole final batch: clinical truth, and internal consistency, numbers and cueing. Bank-wide keyword search over `src/samps` and `src/cases`, the Q500 and Q500B batches included.

## Tests

`SAMP_BATCH=s78 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 132 tests, all pass (14.8 s).

House style: no em or en dashes, no semicolons in content, no personal names, no mnemonics. Spelling is Canadian. Minor: 40 mixes "paediatric" (q1 explanation) and "pediatric" (q2). Both are accepted in Canada. Pick one within the SAMP.

Key is the single longest option in 5 of 17 singles (29%), under the 35% limit.

## First-review fails: resolution

| First-review fail | Status |
|---|---|
| 36 scenario repeats batch16 cyberattack-downtime-code-stroke | Resolved by coordinator ruling. `src/cases/batch16` now holds only aphasia-after-ed-cardioversion, ems-patch-blocked-tracheostomy-child, forearm-laceration-hemophilia-emicizumab and wildfire-evacuees-host-hospital, and `index.ts` registers only those four. A grep for "ransom", "cyber" and "downtime" over `src/samps` and `src/cases` finds no other IT downtime item (hits are cyberbullying in suicide-risk and "downtime" as time down in loc, ems and a burns case). |
| 37 chlorine SAMP repeats ems-24, mp-19, s25 and s88 | Resolved. Whole SAMP replaced (two STEMI patients, one catheterization team). No chlorine left. New problems below. |
| 38 q3 repeats the batch12 hip case and carries a mock-mode cue | Resolved. New q3 (delegated neurovascular checks) has no update and does not reveal q1. q4 explanation now carries the first reviewer's wording. A new B1 issue below. |
| 39 ectopic SAMP repeats batch07 and s10, A18 anti-D wording | Resolved. Whole SAMP replaced (loss of piped oxygen). No ectopic or anti-D left. A new repeat in q3 below. |
| 40 CO cluster repeats ems-15 and s18 tox | Resolved. Whole SAMP replaced (rural night, infant in shock and a tourniquet). No CO left. New repeats in q3 and q4 below. |
| Removed sources (Auf der Heide, ATSDR, Moore, ACOG 193, Rose, MMWR) | Confirmed gone from the source object. |

## Verdicts by SAMP and question

### multiple-patients-36 Screens go dark at shift change: PASS

| Q | Verdict | Notes |
|---|---|---|
| q1 | PASS | TJC SEA 67 PDF re-opened: "Avoid delaying decisive" action, services "offline for four weeks or longer", and the example hospital diverted cases. Distractor reasons true. |
| q2 | PASS | TJC: paper "resources that match the format of your electronic" systems, "manual or doublecheck processes", "ordering tests judiciously during downtimes". |
| q3 | PASS | MAP about 61, lactate 4.6, SSC 2026 immediate antimicrobials. Note only: the septic numbers (BP 86/48 against 84/48, pulse 118, lactate 4.6) echo the hallway patient in batch10 saturday-night-no-beds, but the decision (handwritten antibiotic order in a downtime) differs. No fix needed. |
| q4 | PASS | TJC: "frequent huddles among unit staff". |
| q5 | PASS | TJC: scanning or manual entry after recovery, "Authenticate all" transcribed orders. |

### multiple-patients-37 Two activations eight minutes apart: FAIL (q3, q4 mock-mode cues)

Uniqueness: no SAMP or case has two STEMI patients competing for one team or EMS redirection of a third. Named overlaps that do not fail: signed s15 pulmonary-edema (STEMI with cardiogenic shock goes to PCI, fibrinolysis less effective in shock) supports the q1 reasoning but tests transfer, not ordering. batch10 saturday-night-no-beds has a STEMI patch but tests board management. s35 ems-22 tests bypass exclusions.

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Anterior STEMI with cardiogenic shock goes first. Distractor reasons true. |
| q2 | PASS | First contact 22:45, team ready about 23:45, device well inside 120 minutes (CCS 2019). Times recomputed. |
| q3 | FAIL | Mock-mode cue (ruling B6). The prompt "place for the woman to wait for the second team" gives away q2's key (call the second team in now) and q1's key (she waits, so he goes first). Exact fix: change the prompt to "Which of the following is the most appropriate place for the woman before her angiography?" Also, the explanation's claim that ventricular fibrillation and high grade block are most likely in the first hours is cited to the CCS regionalization update, which does not make it (writer uncertainty 1). Either cite a source that does (for example the 2025 ACC/AHA ACS guideline or ESC 2023 ACS guideline on monitoring after STEMI, opened and checked) or reword it as "Early STEMI carries a risk of ventricular fibrillation and high grade block" and keep the CCS point on minimizing delay to PCI. |
| q4 | FAIL | Mock-mode cue (B6). The update "Both teams will be busy for at least 90 minutes" gives away q2's key. Exact fix: change it to "Your catheterization laboratory will be busy for at least 90 minutes." Key and reasoning are otherwise correct. |

### multiple-patients-38 Propofol drawn up in bay two: FAIL (q3, B1 only)

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Unchanged from the first review. Named repeat of the "pause a lower acuity procedure" frame in signed multiple-patients-27 stands as recorded. |
| q2 | PASS | 1 600 mL immediate drainage over the ATLS 1 500 mL threshold, persistent hypotension, three parallel calls. |
| q3 | FAIL | Content correct and new: Dawson-Amoah full text opened, "sciatic nerve injury (10% of cases)" and "Sciatic nerve palsy (peroneal component) is the most common". The delegation decision is not in s45 multiple-trauma (sciatic exam and post-reduction deficit) or the batch12 hip case. Fail is cueing (ruling B1): the key "Timed nurse checks with triggers to call you" is 44 characters against distractors of 30 to 33, the only key in the batch that stands out by that margin. Exact fix: shorten the key to "Timed nurse checks with call triggers" and give the distractors real, wrong detail of the same kind, for example "Checks by you only after the reduction", "Nurse checks only when she reports pain", "One check by you before CT of the pelvis", "Hourly checks by you between patients". Keep the key in position 5 or rebalance. |
| q4 | PASS | Explanation now reads as the first review asked. Key correct under ACEP 2014. |

### multiple-patients-39 Alarms on every wall outlet: FAIL (q3)

Uniqueness: no SAMP or case on loss of piped oxygen ("piped oxygen", "oxygen line", "wall oxygen", "cylinders", "bulk cylinder" hits are only ventilator troubleshooting and transport supply items).

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Ventilated man and the hypoxemic pneumonia patient first. BTS 2017 targets and advice against oxygen for non-hypoxemic patients are correct. |
| q2 | PASS | Titrate to target to conserve supply. Distractor reasons true. |
| q3 | FAIL | Two problems. (1) Repeat of signed items: s25 asthma-copd q2 "Which of the following oxygen saturation targets is most appropriate for him until a blood gas is available?" with options 84 to 88%, 88 to 92%, 93 to 95%, 96 to 98%, 98 to 100% keyed 88 to 92%, and s04 asthma-copd q2 (same prompt, 88 to 92% keyed). 39 q3 has the same prompt shape, near-identical options and the same key. The multi-patient frame does not change the decision. (2) Mock-mode cue (B6): the update "Thirty minutes after her flow is turned down ... 90% on 1 L/minute" shows q2's key (titration, not a fixed 2 L/minute or stopping). Exact fix: replace q3 with a KF2 question that is not the COPD target, with no update that reveals q2. Suggested angle, not found in the bank: parallel reassessment of the ventilated man on a cylinder, for example who tracks cylinder pressure and the time left, and when the next cylinder is changed, with the time computed from the cylinder size and flow (state the cylinder volume in the stem and recompute). Grep the bank before writing. |
| q4 | PASS | Stoller 2000 abstract read via PubMed E-utilities: in 26 of 32 hospitals "the primary and reserve systems depend on a single length of pipe", and contingency planning should involve "tanks of manifolded cylinders along the course of the main hospital oxygen circuit line". Supports the key and explanation. Writer uncertainty 2 (no Canadian standard) accepted: CSA Z7396.1 not opened by this reviewer either. |

### multiple-patients-40 Two arrivals at 02:00 in the north: FAIL (q3, q4)

| Q | Verdict | Notes and exact fix |
|---|---|---|
| q1 | PASS | Infant in shock first. Shock is PaedCTAS level 1. Distractor reasons true. Low-confidence note: the q2 prompt ("the infant's resuscitation") and q3 update (bolus given by IO) imply the infant was resuscitated, but not that she was seen first, so this is normal flow under B6. |
| q2 | PASS with wording fix | RCCbc RTVS page opened (curl): CHARLiE (Pediatrics) is an Instant Access pathway, "available 24/7", reached "over Zoom or over the phone", staffed by physicians. Exact wording fix: the page does not say the pathway is staffed by pediatric emergency physicians, so change "a pediatric emergency physician can guide her resuscitation now" to "a physician on the pediatric pathway can guide her resuscitation now". |
| q3 | FAIL | Repeats signed shock-02 "Sleepy baby with diarrhea" (s16): an infant with gastroenteritis in hypovolemic shock, IO access, repeat 20 mL/kg boluses with reassessment (q3), then glucose 2.4 mmol/L treated with D10W 5 mL/kg with D50W flagged (q4). 40 q3 has glucose 2.3 mmol/L, D10W 5 mL/kg and D50W "too concentrated", plus the repeat 20 mL/kg bolus. Same key decision and teaching point. The doses are correct (160 mL, 40 mL at 8 kg) but cannot stay. Exact fix: replace q3 with a KF2 question on running both patients in parallel that is not infant fluid or dextrose dosing (shock-02, s49 seizures, s53 tox, batch06 pediatric-septic-shock) and not tourniquet tasks (s45 multiple-trauma, which the writer already avoided). Keep at least one menu in the batch (36 q2, 38 q2 and 39 q1 remain, so a single is fine). |
| q4 | FAIL | Repeats signed multiple-patients-16 q3 (s44, same topic): the option "O2 sat 91% with increased work of breathing" is keyed as CTAS level 2, and the explanation says "Moderate respiratory distress with O2 sat below 92% is level 2. An O2 sat of 92 to 94% is level 3." 40 q4 keys the same rule with the same numbers. CTAS content itself is correct. Exact fix: replace q4 with a different decision. KF1 stays covered without it (37 q1, 39 q1, 40 q1), so the replacement may go to any key feature, but should not be another CTAS respiratory, frailty, hypertension, glucose or GCS modifier already keyed in mp-16. |

## Writer uncertainties (Revision 1)

1. 37 q3 monitoring reason not in CCS: see the 37 q3 fix.
2. 39 q4 resupply without a Canadian standard: accepted, Stoller supports it.
3. 40 q3 D10W elsewhere in the bank: confirmed as a repeat, and a closer one than the writer found (shock-02 is the same scenario). Fail.
4. 40 q2 names a BC service and the stem sets the province: correct, ruling A17 satisfied.

## Sources verified

| Source | Result |
|---|---|
| TJC Sentinel Event Alert 67, 2023 | PDF downloaded and text searched. Supports 36 q1, q2, q4, q5. |
| Dawson-Amoah 2018, PMC6162140 | Full text via WebFetch. Supports 38 q3 (10%, peroneal component). |
| Stoller 2000, PMID 10771798 | Abstract via PubMed E-utilities. Supports 39 q4. |
| Wong 2019 CCS/CAIC STEMI focused update, PMID 30760415 | Record and abstract via E-utilities: real, correct authors, Can J Cardiol 2019;35:107-132. The abstract does not quote the 120 minute target or cardiogenic shock. These are standard content of the guideline body and match existing bank items, but I could not open the full text. |
| O'Driscoll 2017 BTS, PMID 28507176 | Record confirmed via E-utilities (no abstract). Targets match the bank. |
| RCCbc RTVS page | Opened with curl. Supports 40 q2 apart from the wording fix. |
| TREKK gastroenteritis BLR v5.0 | Resource page opened. It links the v5.0 PDF (October 2025) but has no dosing text. PDF not opened. Moot, because 40 q3 fails. |

Could not open: the PubMed web pages (cookie wall), Europe PMC REST (503), the CCS full text, the TREKK PDF, the ACEP 2014 policy, ATLS 11th edition, PaedCTAS 2008 and CTAS 2016 full texts, and SSC 2026. The last five are existing bank sources and were not re-fetched.

No invented citations found.

## Summary

- multiple-patients-36: PASS.
- multiple-patients-37: FAIL. q3 and q4 give away q2's key in mock mode, and q3's monitoring claim is not in its cited source.
- multiple-patients-38: FAIL. q3 key stands out by length (B1). Content passes.
- multiple-patients-39: FAIL. q3 repeats signed s25 and s04 COPD target questions, and its update reveals q2.
- multiple-patients-40: FAIL. q3 repeats signed shock-02, and q4 repeats signed multiple-patients-16 q3. q2 needs a one-line wording fix.

Every first-review fail is resolved. The new fails come from the replacement items. No keyed answer is clinically wrong, and every number recomputed is correct.

Overall: FAIL (4 items)
