# Q500B verify review: oral cases batch17 (revision 1)

Fresh independent review of the whole final batch in `src/cases/batch17/`, against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. The first review is docs/reviews/q500b-qa-batch17.md and the writer's report with "Revision 1" is docs/reviews/q500b-writer-batch17.md. The reviewer did not write or edit this batch.

## Test runs

- `CASE_BATCH=batch17 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 passed.
- `REALIGN=batch17 CASE_BATCH=batch17 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 passed.
- `npx tsc --noEmit -p . | grep cases/batch17`: no output.

## Batch level checks

- Four cases registered in `BATCH_17`. All `reviewed: false`, `version: 1`, `author: "Preceptor"`. No personal names.
- House style: no em dashes, en dashes or semicolons in any string. Canadian spelling. "aspirin" no longer appears. "multicenter" sits only inside the ADvISED paper title.
- Stems open with the CFPC sentence and stay under 60 words. Cards carry the required vitals and weights in kg with lb.
- Point totals and critical flags are unchanged from the first review (30, 33, 29, 29).

## Coordinator ruling: hoist-transfer-thigh-fracture keeps its scenario

Confirmed. `src/samps/s81/analgesia-sedation.ts` no longer holds the cerebral palsy femur SAMP. `analgesia-sedation-50` is now "Tripped on the rug at home": a 72 year old woman with expressive aphasia after a stroke, a proximal humerus fracture, apixaban, and a 02:00 request for a sleeping medicine. It shares neither the patient group nor the injury. A bank-wide grep for "cerebral palsy", "hoist", "nonverbal", "cannot speak" and "clobazam" found no other item with this scenario. The other cerebral palsy items (s46 pediatric sepsis, s49 status epilepticus, s87 loc) are different presentations.

Note for the coordinator, not a fail: the new analgesia-sedation-50 q4 also teaches "a nurse asks for a sedative, the answer is more analgesia". The case's q-first makes a similar teaching point in a different patient (cannot self-report, lorazepam to hold still for X ray). The patient, the setting and the reasoning differ, so I pass it, but watch the pair in the TF-IDF pass.

## First review fails: resolution

| # | Item | Status |
|---|---|---|
| 1 | hoist, uniqueness | Resolved by the coordinator ruling (confirmed above). |
| 2 | hoist, q-event and s-event | Resolved. Hydromorphone 0.2 mg IV at 21:00 is in s-event, in the `event` finding and in the model answer. That makes a 21:30 event with a rate of 6 and an ETCO2 of 68 plausible on top of clobazam and baclofen. c-sleeping now says "strongly linked with deaths". Flumazenil is gone from at-m5. The at-p4 teaching now gives Boyer's respiratory rate point. |
| 3 | hoist, q-reassess and at-pr2 | Partly resolved. The q-reassess line is fixed. The pain-drives-breathing teaching is gone. But see the new fail on at-pr2 below. |
| 4 | hoist, at-h3 | Resolved. Jungquist 2020 is real and correctly cited (Pain Manag Nurs 2020;21(1):7-25, doi 10.1016/j.pmn.2019.06.007, checked on PubMed by eutils). The abstract states that all patients given opioids must be assessed for level of risk, that monitoring follows risk, and that some patients are high risk and need extra vigilance. |
| 5 | hoist, at-m4 | Resolved. Narrowed to the splint and limiting opioid once the block works, which the ACEP block policy supports. |
| 6 | noodle, return-history | Resolved. Burn at 17:30 day 1, discharge about 20:30 to 21:00, video review at 48 hours falls on the evening of day 3. "This evening" at 06:10 on day 3 is right. c-ceftriaxone matches. |
| 7 | noodle, bn-p4 | Resolved. The Gutzler abstract (folia.unifr.ch, opened) states a TBSA range "from <1% to 41%". |
| 8 | noodle, bn-pr4, c-fp, c-dressing | Resolved. No remaining claim that a clean wound excludes or often accompanies TSS. The `return-exam` finding still describes the wound as clean, which is a finding, not a teaching claim. |
| 9 | noodle, bn-pr2 | Resolved. "Treated as outpatients" is gone. |
| 10 | bench, q-treat and c-impulse | Resolved. Heart rate 60 to 80 and systolic under 120 mmHg or the lowest that keeps organs perfused, as in the 2022 ACC/AHA guideline. The double "first" is fixed. The regurgitation caution is a sound addition. |
| 11 | bench, cp-m2 | Resolved. |
| 12 | bench, q-call | Resolved. "Tell the surgeon about the ibuprofen at 16:00 and any ASA or anticoagulant given." |

Unrequested changes: the q-history cofactor line in sleepover-smoothie-vomiting ("Exercise around the meal, NSAIDs, illness") and the c-hydromorphone wording follow the first review's advisories. Both are fine.

## 1. hoist-transfer-thigh-fracture: FAIL (2 items)

Numbers rechecked: fentanyl 0.5 mcg/kg x 36 kg = 18 mcg. Bupivacaine 0.25% 20 mL = 50 mg = 1.4 mg/kg. Bupivacaine 0.5% 40 mL = 200 mg = 5.6 mg/kg. Lipid 1.5 mL/kg x 36 = 54 mL. Acetaminophen 15 mg/kg = 540 mg. Hydromorphone 0.2 mg is about 5.5 mcg/kg, a reasonable small breakthrough dose. Naloxone 0.04 mg titrated. Timeline holds: 07:30 injury, 19:00 now, fentanyl about 19:15 to 20:00, home doses 20:00, block then sleep, hydromorphone 21:00, event 21:30.

- s-open, q-first, q-history, q-exam, q-analgesia, q-mother, q-dispo: PASS.
- **q-event, c-titrate feedback: FAIL.** "Capnography found this event before her heart rate changed." Her pulse fell from 118 on arrival to 74 at the event, so her heart rate did change, and her SpO2 was already 86%. The sentence is also the capnography claim the first review found unsupported and the writer removed from at-p4. **Fix:** replace that sentence with "Keep capnography running. An end tidal CO2 of 68 mmHg shows how far she is hypoventilating."
- q-reassess: PASS.
- **Rubric at-pr2: FAIL (C2).** The teaching now cites `jungquist` for both sentences. The Jungquist abstract supports the first ("High risk patients on opioids need extra vigilance, with electronic monitoring and repeated reassessment"). It does not support the second ("Reversal with naloxone is often brief, so keep monitoring after she responds"). The writer only read the abstract, and that point is Boyer's. **Fix:** delete the second sentence from the at-pr2 teaching. The naloxone duration point stays in the q-reassess model answer. Alternatively, split at-pr2 into two items with the naloxone point on `boyer`, keeping the case total at 30 points.
- Rubric at-h3, at-p4, at-m4, at-m5 and all others: PASS.
- Advisory, not a fail: at-p4 text still names "the loss of pain stimulus after the block" as part of the recognition, cited to Boyer, which does not discuss it. It is standard pharmacology and the first review passed the text. The physician may want it sourced.
- Advisory: at-h3 teaching ends "Her past opioid related hypoxia puts her at high risk." This applies Jungquist's risk assessment to the patient. It reads as a named risk factor, which the writer could not confirm in the full text. Acceptable as a case application.

## 2. sleepover-smoothie-vomiting: PASS

Numbers rechecked: 0.01 mg/kg x 42 kg = 0.42 mg IM (maximum 0.5 mg). Normal saline 20 mL/kg = 840 mL. 0.4 mL of 1 mg/mL IV = 0.4 mg, a gross IV overdose. Amiodarone 5 mg/kg is the standard pediatric dose. 0.3 mg autoinjector for 42 kg fits the CSACI 25 to under 45 kg band. Tryptase 18.2 µg/L at 70 minutes is raised. Troponin 96 against a URL of 15 ng/L.

- Every question, choice, say node and rubric item: PASS. The q-surge reasoning and the metoprolol unsafe label stand as in the first review (ruling C1, not ruling A6). Golden 2023 supports a severe reaction or more than one dose as the main risk for a biphasic reaction.
- Uniqueness: PASS. Bank grep for kiwi, iatrogenic epinephrine and IM to IV confusion found no repeat. s70 titles are different scenarios.

## 3. noodle-soup-scald-return: PASS

Numbers rechecked: intranasal fentanyl 1.5 mcg/kg x 15 kg = 22.5 mcg. 5% + 2% = 7%. Boluses 150 to 300 mL, 40 mL/kg = 600 mL. Return labs meet staphylococcal TSS criteria (fever 39.8°C, rash, hypotension, GI, mucosal hyperemia, platelets 98, CK 640, creatinine about twice normal for age 3, ALT 88, CNS change). Gutzler abstract: diagnosis 1 to 7 days after injury in the literature review, burns from under 1% TBSA, "awareness among treating clinicians is crucial", which supports bn-h4, bn-p3, bn-p4, bn-pr2 and bn-pr4.

- Every question, choice, say node and rubric item: PASS.
- Uniqueness: PASS. Bank grep for "toxic shock" and "scald": TSS items are varicella, tampon or soft tissue sources. No burn TSS item. s26 shares only the cooling and intranasal fentanyl opening.

## 4. bench-press-chest-pain: PASS

Numbers rechecked: arm difference 34 mmHg. ADD-RS 3. Esmolol 500 mcg/kg x 84 kg = 42 mg. IRAD figures (ECG normal 31.3%, CXR normal 12.4%, mortality 26% against 58%). Onset 15:10, ibuprofen 16:00 ("2 hours ago"), now about 18:10 ("3 hours ago"). The flap to the left subclavian origin and left common iliac fits the left arm deficit and the transient left leg symptoms. Targets now match the 2022 ACC/AHA guideline.

- Every question, choice, say node and rubric item: PASS.
- Uniqueness: PASS. The s85 chest-pain file no longer holds the water heater dissection SAMP the first review flagged. Its dissection mention is incidental. Bank grep for Marfan, ectopia lentis, ADD-RS and heavy lifting found only s05 and s28 dissection items in older patients and the s37 eye lens item. No young Marfan dissection with an anchored resident, informed refusal and family screening.

## Fails and exact fixes

1. hoist-transfer-thigh-fracture, q-event c-titrate feedback: replace "Capnography found this event before her heart rate changed." with "Keep capnography running. An end tidal CO2 of 68 mmHg shows how far she is hypoventilating."
2. hoist-transfer-thigh-fracture, rubric at-pr2 teaching: delete "Reversal with naloxone is often brief, so keep monitoring after she responds." (not in the Jungquist abstract), or move that point to an item that cites `boyer` with the case total unchanged.

Overall: FAIL (2 items)
