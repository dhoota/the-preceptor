# Q500B verify review: oral cases batch17 (revision 3)

This is a fresh, independent review of the whole final batch in `src/cases/batch17/`. It checks the batch against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. The earlier verdicts are docs/reviews/q500b-qa-batch17.md (12 fails), docs/reviews/q500b-verify-batch17.md (2 fails) and docs/reviews/q500b-verify2-batch17.md (2 fails). The writer's report, with Revisions 1 to 3, is docs/reviews/q500b-writer-batch17.md. The reviewer did not write or edit this batch.

## Test runs

- `CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 passed.
- `REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 passed.
- `npx tsc --noEmit -p . | grep cases/batch17`: no output.

## Batch level checks (recomputed by script and by hand)

- There are four cases in `BATCH_17`. All are `reviewed: false`, `version: 1` and `author: "Preceptor"`. No personal names appear.
- Points per row (history, physical, management, process):
  - hoist: 8/6/8/8 (30)
  - sleepover: 7/6/11/9 (33)
  - noodle: 6/7/8/8 (29)
  - bench: 7/6/7/9 (29)
- History is 21 to 27% of the points and management is 24 to 33%. Each case has 3 critical items. Item counts are 19, 18, 17 and 18.
- Longest path seconds are 640, 580, 630 and 680. Every question is 60 to 90 seconds.
- Stems are 44 to 56 words, and every stem opens with the CFPC sentence.
- House style: no string contains an em dash, an en dash or a semicolon. Spelling is Canadian, and no mnemonics are used.
- Uniqueness: I grepped the whole bank, including batch16, batch18 to batch20 and s72 to s88, for these terms: hoist, cerebral palsy, clobazam, kiwi, IV epinephrine overdose, toxic shock, scald, Marfan, ectopia lentis and bench press.
  - None of them matches a near duplicate.
  - The cerebral palsy hits (s46, s49, s87) are different presentations.
  - The toxic shock hits come from varicella, soft tissue or tampon sources. The s46 scald hit is staphylococcal scalded skin syndrome. `sirajeeTss` in s16 is defined but no SAMP uses it.
  - The Marfan hits are a distractor in an s28 SCAD item and the s37 eye item.
  - The batch16 and batch18 to batch20 case titles are all different scenarios.

## Earlier fails: resolution

| Review | # | Item | Status in the current files |
|---|---|---|---|
| QA | 1 | hoist uniqueness against s81 | Resolved. The coordinator ruled and the s81 SAMP was replaced. No cerebral palsy hoist item exists elsewhere. |
| QA | 2 | hoist q-event, s-event, c-sleeping, at-m5, at-p4 | Resolved. s-event and the `event` finding both state hydromorphone 0.2 mg IV at 21:00. c-sleeping says "strongly linked with deaths". Flumazenil appears only in the model answer. The at-p4 teaching gives Boyer's point on a respiratory rate of 12 or less. |
| QA | 3 | hoist q-reassess, at-pr2 | Resolved. The q-reassess line gives naloxone as lasting 20 to 90 minutes. The pain-drives-breathing claim is gone. |
| QA | 4 | hoist at-h3 | Resolved. It now cites `jungquist` (Pain Manag Nurs 2020). |
| QA | 5 | hoist at-m4 | Resolved. The item is narrowed to the splint and to limiting opioid. |
| QA | 6 | noodle return-history | Resolved. The review is booked "this evening", which matches c-ceftriaxone and the 48 hour review after a 17:30 burn on day 1. |
| QA | 7, 8 | noodle bn-p4, bn-pr4, c-fp, c-dressing | Resolved. No teaching claim about a clean wound remains. |
| QA | 9 | noodle bn-pr2 | Resolved. "Treated as outpatients" is gone. |
| QA | 10, 11 | bench q-treat, c-impulse, cp-m2 | Resolved. The targets are a heart rate of 60 to 80 and a systolic under 120 mmHg, or the lowest that keeps organs perfused. "Then an IV beta blocker before any vasodilator" now reads correctly. |
| QA | 12 | bench q-call | Resolved. It reads "ibuprofen at 16:00 and any ASA or anticoagulant given". |
| Verify 1 | 1 | hoist c-titrate feedback | Resolved. It reads "Keep capnography running. An end tidal CO2 of 68 mmHg shows how far she is hypoventilating." |
| Verify 1 | 2 | hoist at-pr2 teaching | Resolved. Only the sentence Jungquist supports remains. |
| Verify 2 | 1 | bench cp-p1 teaching | Resolved. It reads "They are part of the aortic dissection detection risk score, so look for them on purpose." and cites `advised`. ADD-RS lists pulse deficit, BP differential and a new AR murmur as high risk exam features. |
| Verify 2 | 2 | bench cp-pr1 teaching | Resolved. It reads "The presentation is diverse, so a benign working label must be checked at the bedside." and cites `irad`, which supports it. |

Revision 3 changed nothing else. The other text matches what verify 2 passed.

## Sources

- Opened in this review:
  - The CPS 2011 anaphylaxis statement (PMC3043023, Paediatr Child Health 2011;16(1):35-40). It confirms 0.01 mg/kg IM of 1:1000, maximum 0.5 mg, into the anterolateral thigh, repeated every 5 to 15 minutes. It also confirms normal saline 20 mL/kg, supine positioning, and antihistamines and steroids as adjuncts only.
  - PubMed abstracts, read through eutils, for Isselbacher 2022, Boodhwani 2014, Loeys 2010, Neal 2021, Weiss 2020, Stevens 2014 and Lotan 2009. All citations match (authors, title, journal and year).
    - Loeys: ectopia lentis with an aortic root aneurysm is sufficient for the diagnosis. That supports cp-p2, given a 5.1 cm root.
    - Lotan: "large sensitivity to pain at all levels of IDD". That supports at-p1.
- Could not open in this review:
  - The 2022 ACC/AHA aortic guideline full text (ahajournals returned 403, and the ACC Ten Points page returned 404). The heart rate 60 to 80 target rests on the first QA review, which checked the ACC summary.
  - The CPS website, where the page stalled on a verification screen. Because of that, the "Reaffirmed 2018" part of the citation is not confirmed here, and the PMC copy carries no reaffirmation note.
  - The CCS 2014, Weiss 2020 and IDSA 2014 full texts. Their abstracts do not state the specific points (relative screening, bolus volumes and peripheral vasoactives, clindamycin for toxin suppression). These points are standard and earlier reviews passed them.
  - The ASRA checklist text (lipid 1.5 mL/kg under 70 kg). This value is standard.
  - Sources I relied on earlier reviews for: Sullivan 2018, Boyer 2012, CSACI 2021, Gutzler 2018, Kanwar 2010, Golden 2024, CPSI 2011, the ACEP 2021 policy, the ABA referral page, the RCH pages, ADvISED, IRAD and CMPA 2024.

## 1. hoist-transfer-thigh-fracture: PASS

I rechecked these numbers:
- Fentanyl 0.5 mcg/kg x 36 kg = 18 mcg.
- Bupivacaine 0.25% 20 mL = 50 mg (1.4 mg/kg). Bupivacaine 0.5% 40 mL = 200 mg (5.6 mg/kg).
- Lipid 1.5 mL/kg = 54 mL.
- Acetaminophen 15 mg/kg = 540 mg.
- Naloxone 0.04 mg, titrated.
- The timeline from 07:30 to 21:30 is consistent.

Every question, choice, say node and rubric item: PASS.

Advisory only, not a fail: s-event is fixed text on every path, so on the c-hydromorphone path (1 mg hourly ordered), the 21:00 breakthrough dose of 0.2 mg does not match that order. The case still works as written.

## 2. sleepover-smoothie-vomiting: PASS

I rechecked these numbers:
- 0.01 mg/kg x 42 kg = 0.42 mg IM, under the 0.5 mg maximum (CPS confirmed).
- Saline 20 mL/kg = 840 mL.
- 0.4 mL of 1 mg/mL IV = 0.4 mg.
- The 0.3 mg autoinjector fits 42 kg.
- Tryptase 18.2 µg/L is raised.

Every question, choice, say node and rubric item: PASS. The metoprolol unsafe label stands under ruling C1, not A6.

Advisory only: s-amio says "stop the amiodarone infusion", but the c-amio label describes 5 mg/kg IV with no infusion. Optional wording: "You stop the amiodarone."

## 3. noodle-soup-scald-return: PASS

I rechecked these numbers:
- Intranasal fentanyl 1.5 mcg/kg x 15 kg = 22.5 mcg.
- Burn size 5% + 2% = 7%.
- Boluses of 150 to 300 mL, and 40 mL/kg = 600 mL.
- The return findings meet the staphylococcal TSS criteria: fever, erythroderma, hypotension, and 3 or more organ systems (GI, mucosal, platelets 98, creatinine about twice normal for age, ALT 88, CK 640, CNS).

Every question, choice, say node and rubric item: PASS.

## 4. bench-press-chest-pain: PASS

I rechecked these numbers:
- Arm difference 158 minus 124 = 34 mmHg.
- ADD-RS = 3 (Marfan features and family history, abrupt ripping pain, pulse deficit).
- Esmolol 500 mcg/kg x 84 kg = 42 mg.
- IRAD: normal ECG 31.3%, normal CXR 12.4%, mortality 26% against 58%.
- ADvISED: 0.3% failure rate.

Every question, choice, say node and rubric item: PASS.

## Fails and exact fixes

None.

Overall: PASS
