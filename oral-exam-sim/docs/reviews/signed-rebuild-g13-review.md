# Review of signed-duplicate rebuild g13

Reviewer brief: scratchpad/signed-rebuild-review-brief.md. Writer report: docs/reviews/signed-rebuild-g13.md. Files: `src/samps/s06/msk.ts`, `src/samps/s12/ischemic-heart-disease.ts`, `src/samps/s12/infectious-diseases.ts`, `src/samps/s18/tox.ts`.

## Structure

All five SAMPs keep their id, topic, question count, and each question's kind and keyFeature. Each is version 2 with `reviewed: false` after the META spread (msk.ts uses `...base` first, so the flags already follow it). All five ids are in `src/samps/held-back/g13.json`. The diff touches only these five SAMPs plus their source constants. In msk.ts, AAP_ABUSE and CYFSA were used only by old msk-13, and AAP_FX is used only by msk-13.

## D1 checks

D1 (docs/DECISIONS.md) allows one repeat per SAMP of a signed-off decision, and only when that decision is the literal wording of a key feature. Each claim was checked against `src/blueprint/priorityTopics.ts`.

| Question | Repeated decision | Key feature wording | Verdict |
|---|---|---|---|
| ischemic-heart-disease-13 q1 | Repeat ECG and serial hs troponin while pain continues (ischemic-heart-disease-40 q2, signed) | IHD 1: "start testing immediately and continue serial ECGs and biomarkers until the question is resolved" | Meets D1. It is the only repeat in the SAMP. q2 keys primary PCI for a new reason (cancer with expected survival of 6 months or more), and q3 is new. |
| infectious-diseases-02 q2 | Antibiotics within 1 hour, after blood cultures, before imaging or other results (shock-03 q2, loc-11 q2, loc-23 q4, signed) | ID 1: "Start empiric antibiotics early in suspected severe infection, before investigations are finished" | Meets D1. But q1 is a second repeat that D1 cannot cover (see below). |
| msk-13 q3 | Report to child protection directly on reasonable grounds (abuse-domestic-06 q3, the cluster keeper, and burns-05 q4, both signed) | Abuse 6: "report to authorities when required" | Meets D1. It is the only repeat. The added angle is new: osteogenesis imperfecta does not rule out abuse, and the report does not wait for genetic results. |
| tox-09 q4 | Lethal causes of chest pain (a common signed chest-pain key feature 1 list) | Chest pain 1: "first consider and quickly recognize lethal causes like ACS, PE, pneumothorax, and aortic dissection" | Meets D1. But q2 is a second repeat that D1 cannot cover (see below). |

## Rows

| SAMP | Q | Result | Notes |
|---|---|---|---|
| ischemic-heart-disease-13 | q1 | PASS | D1 repeat, valid. ESC 2023 supports repeat ECG, V3R, V4R and V7 to V9, monitoring and a 0 h and 1 or 2 h hs troponin. The rule that a single sample is valid only more than 3 hours after onset is correct. |
| ischemic-heart-disease-13 | q2 | PASS | ESC 2023 Table 15: invasive strategy with expected survival of 6 months or more (I B). Conservative strategy with survival under 6 months (IIa C). Distractors are fair. |
| ischemic-heart-disease-13 | q3 | PASS | Platelets of 42 x 10^9/L equal 42 000/µL. That is below 50 000 (no prasugrel or ticagrelor) and above 30 000 (clopidogrel) and 10 000 (ASA). Clopidogrel is preferred in active cancer. Temporary interruption is recommended, and bevacizumab and paclitaxel are both on the high-risk list. The interaction check is in the text. All confirmed in the ESC 2023 text. |
| infectious-diseases-02 | q1 | FAIL | Keys vancomycin plus piperacillin-tazobactam for a septic, spreading thigh soft tissue infection with MRSA risk. That is the same decision for a similar reason as signed infectious-diseases-04 q3 (thigh necrotizing infection: piperacillin-tazobactam or a carbapenem plus vancomycin). It also matches infectious-diseases-31 q4, shock-25 q4 and lacerations-07 q4. Choosing agents is not the literal wording of ID key feature 1, and q2 already uses this SAMP's one D1 repeat. I found no new ID 1 decision in this story: intraosseous access for antibiotics (infectious-diseases-27 q1), blood cultures first (shock-03, loc-11) and "antibiotics despite a viral rash" (pediatric-fever-15 q1) are all keyed. Not patched. |
| infectious-diseases-02 | q2 | PASS | D1 repeat, valid. The SSC 2026 timing wording and the parallel-care explanation are sound. |
| infectious-diseases-02 | q3 | PASS | Host factors are specific to the patient. HIV and injection drug use appear in other keys but for other infections (eye-15, chest-pain-46). I do not count this as a repeated decision. |
| infectious-diseases-02 | q4 | PASS | Mpox post-exposure vaccine is new to the bank. The 4-day and 14-day windows and the contact categories match the writer's CIG and PHAC reading. The 2-dose partner is flagged for the physician. |
| msk-04 | q1 | PASS | Crush or stamp mechanism is new. |
| msk-04 | q2 | FIXED | Before: a private interview, a professional interpreter, a trauma-informed approach, direct questions and the hotline. These repeat abuse-domestic-13 q2, and also abuse-domestic-01 q2 and multiple-trauma-15 q3 (all signed). That goes beyond D1. Also, the cited Emergency Care BC page did not say several of the things claimed. Now: the update puts the private setting and a phone interpreter in place, and q2 keys only the trafficking screening questions (living situation and freedom to come and go, threats to her or loved ones, being hurt for working slowly or trying to leave, sex in exchange), required 2. Source: Emergency Care BC, "Identifying human trafficking in the emergency department" (opened, reviewed 2019), which lists these questions verbatim. The "Caring for" page is no longer cited, so its constant was removed. The police and hotline sentences went with it, and so did the unacceptable police answer, because the new source does not cover them. The q3 update was shortened to match. Simcheck after the fix: top abuse-domestic-22 0.16/0.03, lacerations-32 0.15/0.14, msk-35 0.14/0.01, burns-19 0.14/0.07, lacerations-03 0.13/0.13. |
| msk-04 | q3 | PASS | Hand compartment syndrome and its companions are not keyed elsewhere. |
| msk-04 | q4 | PASS | The admission key rests on one review (Kastanis 2024). Flagged for the physician. |
| msk-13 | q1 | PASS | Features of osteogenesis imperfecta are new to the bank. |
| msk-13 | q2 | PASS | Classic metaphyseal lesions and posteromedial rib fractures are not keyed elsewhere. |
| msk-13 | q3 | PASS | D1 repeat, valid (see above). Negation handling in the scorer keeps "don't wait for results" from triggering the "wait for results" unacceptable answer. |
| tox-09 | q1 | PASS | Contrasting thyroid hormone excess with a sympathomimetic is new. Features match the Synthroid monograph, section 5. |
| tox-09 | q2 | FAIL | Keys propranolol or another beta blocker for the adrenergic effects of thyroid hormone excess. The same decision for the same reason is keyed in signed environmental-04 q3 (propranolol in thyroid storm), arrhythmia-22 q2 (metoprolol for thyrotoxic AF) and pre-eclampsia-15 q3 (a beta blocker for thyrotoxic symptoms). It is not the literal wording of tox key feature 4, and q4 already uses this SAMP's one D1 repeat. The cluster 17 direction asked for this key, but the bank already has it. A replacement key feature 4 decision in this story would contradict the monograph (thionamides, which it lists as an option) or overlap environmental-04 q1 (acetaminophen). Not patched. |
| tox-09 | q3 | PASS | Delayed onset (monograph), cholestyramine and poor dialysis removal are sound. "About four times" recomputes: 86 / 22 = 3.9. |
| tox-09 | q4 | PASS | D1 repeat, valid (see above). |

## Other checks

- Stories converging: no other file in src/samps uses mpox, levothyroxine overdose, trafficking, osteogenesis imperfecta or cancer therapy with STEMI. infectious-diseases-02 does resemble signed pediatric-fever-15 (a viral rash, a superinfected thigh lesion and shock), although simcheck did not rank it in the top 5.
- House style in the new text: no em or en dashes and no semicolons.
- Tests: `SAMP_BATCH=s06`: 425 passed. `SAMP_BATCH=s12`: 474 passed. `SAMP_BATCH=s18`: 270 passed (tests/samps.test.ts and tests/samp-quality.test.ts). `npx tsc --noEmit -p .`: clean.

## D1 repeats

Questions in this group that rely on D1. All four meet its wording test:

- ischemic-heart-disease-13 q1 (IHD 1, serial ECG and biomarkers)
- infectious-diseases-02 q2 (ID 1, antibiotics before investigations are finished)
- msk-13 q3 (abuse 6, report to authorities)
- tox-09 q4 (chest pain 1, lethal causes)

msk-04 no longer relies on D1 after the q2 fix. The Covered SAMPs table under D1 in docs/DECISIONS.md lists only chest-pain-41, environmental-17 and chest-pain-47. These four questions are not in it, so "reverse D1" would not reach them until the product owner adds them.

## For the physician

- ischemic-heart-disease-13: please confirm primary PCI at a platelet count of 42 x 10^9/L. ESC 2023 gives platelet thresholds only for the antiplatelet drugs.
- infectious-diseases-02: q1 fails review and needs a new key feature 1 decision. Tecovirimat is not keyed. The 2-dose partner in q4 is treated as needing no post-exposure vaccine.
- msk-04 q2 now keys the Emergency Care BC trafficking screening questions. q4 keys admission after three displaced metacarpal fractures on the strength of one review.
- msk-13 q3 keys a report after a clean survey with wormian bones. The grounds are the changed history and a femur fracture in an infant who is not yet mobile. Please confirm that this still meets "reasonable grounds".
- tox-09 q2 (propranolol) fails review as a repeat, although your cluster 17 direction asked for it. Either it is rebuilt, or the product owner accepts a second repeat outside D1.
