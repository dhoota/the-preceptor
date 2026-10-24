# Q500B verification review 3: s72, Suicide risk (revision 3)

Batch: `src/samps/s72/suicide-risk.ts`, suicide-risk-39 to suicide-risk-43 (5 SAMPs, 20 questions, 17 single and 3 menu). Earlier verdicts: `docs/reviews/q500b-qa-s72.md` (13 fails), `docs/reviews/q500b-verify-s72.md` (6 fails), `docs/reviews/q500b-verify2-s72.md` (1 fail, 43 q4). Writer report with Revision 1 to 3: `docs/reviews/q500b-writer-s72.md`.

Reviewer: fresh independent QA agent. I did not write, edit or review this batch before. Under REVIEW-RULES rule 1 I changed no file except this one. I reviewed the whole final batch under Lenses A and B of `docs/SAMP_REVIEW_BRIEF.md`, not only 43 q4. Every SAMP stays `reviewed: false`.

## Tests

`SAMP_BATCH=s72 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts --testTimeout=120000`: 3 files, 128 tests, all passed. The bank-wide near duplicate stem test took about 4 seconds.

House style by script: no em or en dashes in the file, and the only semicolon is in TypeScript code. No patient names, no mnemonics. Canadian spelling accepted ("behaviour", "orthopaedic", "paediatric", "program" in Canadian usage).

## Sources verified in this pass

Every cited source was opened today. WebFetch was used once (PHAC, where curl failed). The rest I read with curl and text extraction.

| Source id | Checked at | Result |
|---|---|---|
| dc-t1d-peds | https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34 | Verified: "In children with established diabetes, DKA results from failing to take insulin or poor sick-day management", eating disorders suspected "especially when insulin omission is suspected", "The frequency of DKA in established diabetes can be decreased with education, behavioural intervention and family support" (39 q4). |
| cps-youth-2015 | https://pmc.ncbi.nlm.nih.gov/articles/PMC4472054/ | Verified: ask whether self-harm is made "with suicidal intent", access to means "(eg, firearms, medications)", trusted adults and "mental health follow-up care". |
| mb-mha | https://web2.gov.mb.ca/laws/statutes/ccsm/m110.php ("current as of October 22, 2026", "in effect since October 1, 2026") and the enacting chapter https://web2.gov.mb.ca/laws/statutes/2026/c01326.php?lang=en | Verified: s. 1 "qualified health professional" is a physician, or a physician assistant or clinical assistant authorized by CPSM. s. 8(1) criteria (a) to (c), with (c) "unwilling to undergo or is not mentally competent to consent to a voluntary psychiatric assessment". s. 8(1.1) remote examination "if an in-person examination is not reasonably practicable". s. 8(3) "within two days". s. 8(4) personal examination, date, observed facts kept apart from facts reported by others. s. 9(1) peace officer custody, "detained, restrained and observed in a facility for not more than 72 hours", psychiatrist assessment "under section 17". s. 13(1) 24 hours for a person taken under s. 11 or 12. s. 19, 21 days. s. 20 release. Amending act s. 2(2) adds (c) nurse practitioners and (d) "a prescribed health professional who meets the prescribed qualifications", in force November 1, 2026 by proclamation. |
| beck-hopelessness | PubMed 3985195 (NCBI E-utilities) | Verified: 207 patients admitted with suicidal ideation, 5 to 10 years, only the Hopelessness Scale and the BDI pessimism item predicted suicide. |
| sullivan-idd | https://pmc.ncbi.nlm.nih.gov/articles/PMC5897068/ | Verified: 2.3 preferred communication method and tools, 29.5 "Start low and go slow", 30.2 "Debrief with the patient and caregivers as soon as possible (eg, within 72 h) after an ED visit". |
| nice-ng225 | https://www.nice.org.uk/guidance/ng225/chapter/Recommendations | Verified: 1.6.2 and 1.6.4 (no risk tools or low, medium, high stratification to decide discharge), 1.7.8 (GP regular review of self-harm and a medicines review), contact details for the aftercare team. |
| kouyoumdjian-custody | https://pmc.ncbi.nlm.nih.gov/articles/PMC4933645/ | Verified: suicide 2.3 per 1000 person-years in the first 4 weeks against 0.4 after 52 weeks, suicide SMR 14.0 in the first 2 weeks (24.2 in weeks 2 to 4), overdose SMR 56.0 in the first 2 weeks, SMR 4.3 for suicide and self-inflicted injury overall. |
| phac-988 | https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html (WebFetch) | Verified: "call or text 9-8-8", "24 hours a day, 7 days a week", "available to anyone in Canada". |
| ccsmh-suicide | https://ccsmh.ca/wp-content/uploads/2016/03/NatlGuideline_Suicide.pdf (pdftotext) | Verified: three quarters told relatives or friends, only 38% told a health professional, may avoid volunteering symptoms, somatic presentation, "perhaps over 10%" without a diagnosable mental illness, majority without severe or terminal physical illness, Table 2.1 equivocal behaviour. For the new 43 q4: higher risk in "those living far from friends or relatives; those who see friends or relatives infrequently; and those who are lonely", and the recommendation "Facilitate strategies for/with clients to enhance social support and interpersonal activities. [D]". |
| oliva-opioid-stop | https://pmc.ncbi.nlm.nih.gov/articles/PMC7249243/ | Opened (page retrieved). Content verified in verify 2 (HR 1.67 to 6.77 by treatment length). The 43 q1 claim is general and consistent with it. |

No source was unreachable. WebFetch was not needed beyond the one call.

## Earlier fails: resolution

| Item | Earlier fail | Resolved? |
|---|---|---|
| 39 stem, 39 q2 (first review) | Near duplicate of abuse-domestic-41, unsourced insulin claim | Yes. |
| 39 q1, 39 q4 (verify 1) | Untrue distractor reason, discharge with no mental health assessment | Yes. Wording is as asked. |
| 40 q2, q3, q4 (first review) | Grammar cue, out-of-date legal line, mock cue | Yes. Statute rechecked today. |
| 41 q3 (first review) | Cue to q4, wrong source | Yes. |
| 42 q1, q2, q3, q4 (first review and verify 1) | Opposite-pair cue, probation not in stem, shelter phone, service names | Yes. |
| 43 q1, q2, q3 (first review and verify 1) | "Abrupt" not in stem, collateral repeat, B6 cue, discharge letter overlap | Yes. |
| 43 q4 (verify 1 and verify 2) | 9-8-8 and asking-myth repeat, then the s17 self-neglect repeat in the s52 pre-discharge frame | Yes. See below. |

## Verdicts by SAMP and question

### suicide-risk-39, "A meter used on three days": PASS

- Stem: PASS. Glucose 24, pH 7.28, bicarbonate 15, beta-hydroxybutyrate 3.4 is mild DKA. Every q1 clue is in the stem.
- q1: PASS. Options alphabetical. Every distractor reason true.
- q2: PASS. CPS intent text verified. B6 flag only: the q2 update states the insulin omission keyed in q1. The question cannot work without it (inherent, as earlier reviews ruled).
- q3: PASS. CPS means text verified.
- q4: PASS. DC family support line verified. Note below on who holds the pens.

### suicide-risk-40, "A video call from the nursing station": PASS

- q1: PASS. Beck verified.
- q2: PASS. s. 8(1)(c) verified. "Inability to consent to treatment" is distinct from competence to consent to a voluntary assessment, and the explanation says so.
- q3: PASS. s. 1, 8(1.1), 8(3), 8(4) and the November 1, 2026 date verified. Note below on clause (d).
- q4: PASS. s. 9(1), 13(1), 17, 19, 20 verified. B6 flag only: the prompt implies an application exists (inherent).

### suicide-risk-41, "He wants to go to heaven": PASS

- q1 to q4: PASS. Sullivan 2.3, 29.5 and 30.2 verified. B9 met (41 q4 "No new sedative at this time" sits last). Carried note: the quetiapine sleep aid line has no cited source but is true.

### suicide-risk-42, "Six days out": PASS

- q1: PASS. Kouyoumdjian figures verified, no opposite pair.
- q2: PASS. NICE 1.6.2 and 1.6.4 verified. Probation hedge accepted, as in verify 2.
- q3: PASS. Key [0, 3, 4]. 9-8-8 and overdose SMR 56.0 verified.
- q4: PASS. NICE contact-details line verified.

### suicide-risk-43, "Checking a fence at night": PASS

- Stem: PASS.
- q1: PASS. Key [0, 3, 6]. CCSMH Table 2.1 and Oliva support it.
- q2: PASS. Every option traces to CCSMH text opened today.
- q3: PASS. NICE 1.7.8 verified. The update reveals intent but names no q1 feature (B6 met).
- q4 (new): PASS.
  - Key "Planned regular visits with friends" (index 3) is the single best answer. CCSMH links living far from relatives, seeing friends infrequently and loneliness to higher risk, and recommends enhancing social support and interpersonal activities. Both lines verified.
  - Each distractor reason is true and traces to the update. He declined the move to his son's. A move into long-term care is unwanted and not indicated. Contact only on request relies on him asking, which older adults often do not do (CCSMH). A pendant addresses falls, not isolation.
  - Options alphabetical. The key is not the longest option (34 against 41 characters). No mock cue: the update follows the q3 discharge, and nothing in it names an earlier key.
  - Repeat check: I grepped all of `src/samps` and `src/cases` for "social support", "interpersonal activit", "lonel", "regular visits", "visits with friends", "see friends", "medical alert" and "curling", and read s17 suicide-risk-15 "Going home to the farm" (firearm plan and confidentiality, a different decision) and the s52 suicide-risk titles. s17-01 and abuse-domestic list lack of supports as a risk factor to ask about. No item keys a plan to build social contact once a support person leaves. Not a repeat, and D1 is not used.
  - KF4 tag fits: an agreed outpatient plan after psychiatric care, made with him.
  - The s17 self-neglect and treatment-refusal lesson from the verify 2 fail is gone. So is the sentence "His denial of intent days ago".

## Notes for the physician (judgement points, not fails)

1. 39 q4: supervision by her father prevents omission. Overdose risk also falls only if he holds the pens between doses. The explanation implies this ("giving or watching each dose") but does not say it. Optional wording.
2. 40 q3: the line "A registered nurse who is not a nurse practitioner is not a qualified health professional under the Act" is true today. From November 1, 2026, clause (d) lets a regulation prescribe other health professionals. If a regulation ever adds registered nurses, this line and the distractor need a recheck. No such regulation was found.
3. 42 q2: discharge the same evening for a man 6 days out of custody, with a past hanging attempt, is defensible on the stated assessment (passive thoughts only, a plan he helped make, a clinic visit in 2 days). Some physicians would want psychiatry to see him first.
4. 43: the case never asks about firearms on the farm. That is a deliberate choice to avoid repeating s17-15 and s52, but a real plan for an older farmer after an attempt would include it.
5. 43 q4: two distractors contain "only" ("Contact only if he calls for help", "Medical alert pendant as the only support"). "Only" is not on the SAMP_SPEC absolute-word list, and the word is needed to make each option wrong. A minor cue at most.
6. 43 q3 (carried from verify 2): a 71-year-old man may still merit bone density screening on age alone, though not because of this high-energy injury.
7. 39 against s52 suicide-risk-18 ("Missed sessions at the dialysis unit"): both treat stopping a life-sustaining treatment as possible suicidality. The scenario, age, open refusal against hidden omission, and the decisions tested (capacity in s52, the cause of DKA and the intent behind the omission in 39) all differ. Accepted as no repeat.

## Ruling and signed-item checks

- No SCORING-RULINGS row is reversed. The batch has no write-in keys, so A1 to A20 do not apply. B1 met (key longest in 2 of 17 singles). B4, B5 and B9 met. B6: only the inherent flags noted earlier remain (39 q1 to q2, 40 q4, 41 q2 to q3, 42 q2 to q3).
- No signed item is contradicted. Benzodiazepines and Z-drugs stay distractors, as in s17 and s52.

## Summary

5 SAMPs, 20 questions plus stems. All 5 SAMPs pass. Every earlier fail is resolved, including the new 43 q4, which tests a decision not in the bank and is supported by CCSMH text opened today. No keyed answer is clinically or legally wrong. Every cited source was opened, and none was unreachable. Seven physician judgement notes are listed above. None of them is a fail.

Fails by id: none.

Overall: PASS
