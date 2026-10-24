# Q500B verify review: oral cases batch16 (revision 2)

Fresh independent review of the whole final batch in `src/cases/batch16/`. I did not write, edit or review this batch before. I checked it against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I also checked every fail in the first review (docs/reviews/q500b-qa-batch16.md) against the writer's Revision 2 section (docs/reviews/q500b-writer-batch16.md). I edited no case file.

## Test runs

- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 of 41 passed.
- `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 of 39 passed.
- `npx tsc --noEmit -p . | grep cases/batch16`: printed nothing.

## Checks recomputed by hand

- Points per row (history, physical, management, process): EMS 8/5/11/10 (34), hemophilia 6/5/11/6 (28), stroke 7/6/10/8 (31), wildfire 5/4/7/9 (25). History is 20 to 24%. Management is 28 to 39%. Each row has at least 2 items. 2 to 4 critical items per case. At least four competencies per case.
- Wildfire longest path: 110 + 90 + 100 + 90 + 80 + 70 = 540 s, 6 questions on every path, 4 branching questions. Every one of its 5 sources is cited by a rubric item. ukka-k, warren and the nephrology finding are gone.
- EMS process row after the tr-pr5 split: 2 + 2 + 3 + 1 + 1 + 1 = 10. The new cmpa source is cited by tr-pr6.
- Emicizumab 1.5 mg/kg weekly x 58 kg = 87 mg. Tdap at 14 is 1 year ago, under the 5 year CIG threshold.
- Tenecteplase 0.25 mg/kg x 74 kg = 18.5 mg. AF onset 21:30 to shock 09:41 is 12 hours 11 minutes. CHADS-65: age 68, hypertension, diabetes = 3.
- House style: no em dashes, en dashes or semicolons in any string. No personal names. `author: "Preceptor"`, `reviewed: false`, `version: 1` on all four.

## Sources opened in this review

- RCOG Green-top Guideline No. 50 PDF (text extracted with pdftotext). It confirms: suspect prolapse with an abnormal fetal heart rate, especially soon after rupture. Elevate the presenting part manually or by filling the bladder with 500 to 750 mL, and empty the bladder before birth. Handle loops outside the vagina as little as possible. Manual replacement is not recommended. Knee-chest, or left lateral with head down and a pillow under the left hip. Tocolysis can be considered if the fetal heart stays abnormal, with terbutaline 0.25 mg SC. Category 1 caesarean within 30 minutes with a suspicious or pathological trace. Multiparity and transverse, oblique or unstable lie are risk factors. Ruptured membranes with an abnormal lie may be an indication to expedite birth. The RCOG guideline page says "reviewed 2024, no update required", so the citation "2014, reviewed 2024" is accurate.
- WFH 3rd edition PDF (text extracted). Fasciotomy within 12 hours of onset of compartment syndrome. Monitoring for compartment syndrome. The aPTT is considerably shortened by emicizumab. aPCC with emicizumab causes thrombotic microangiopathy or thrombosis. Hemostatic cover for suture removal. These support hf-p3, hf-m2, hf-m3, hf-m6 and hf-pr1.
- CAEP 2021 AF checklist (PMC8423652). Onset under 12 hours, or 12 to 48 hours with fewer than 2 CHADS-65 criteria, or negative TEE. OAC before discharge if CHADS-65 positive, DOAC preferred. This supports cv-h2, cv-p3 and cv-pr4.
- CMPA disclosure handbook, the url used in both the EMS and stroke cases. Version 3, March 2017. Disclose as soon as reasonably possible with the known facts, do not speculate or blame, and an expression of sorrow is not an admission of liability. This supports tr-pr6 and cv-pr2.

## Sources I did not reopen

I did not reopen the CSBPR treatment, ED evaluation and section 6 antithrombotic pages, the Ontario ALS PCS v5.4 PDF, the Forsch AFP page, the CIG tetanus chapter, the Ontario IMS page or the WHO patient identification PDF. The first reviewer opened them and quoted the relevant text, and revision 2 changed no claim that depends on them except cv-m3. The new cv-m3 wording follows the first reviewer's option (b) word for word. Doherty, Iedema, Warren, Bullard and Kollek have no url and were not reopened. They are listed as text, which brief rule 4 allows.

## First review fails: all 9 resolved

1. EMS card. Resolved. The card now carries the patch values (38.5°C measured at home, 152, 48, 108/68, 84% on 10 L/minute by tracheostomy mask). The BP is also in `patch-report`, and the 18:32 values are in `exam-arrival`. Card and stem now agree.
2. EMS c-send-now feedback. Resolved. It now reads "less than half an hour ago". The displacement is at 19:05 and the question follows 19:15.
3. EMS tr-pr5. Resolved by a split. tr-pr5 keeps doherty for the thanks, the narrowed stoma and the go-bag. New tr-pr6 cites CMPA 2017 for disclosure and reporting, and its teaching matches the handbook.
4. EMS tr-h2. Resolved. The first sentence now gives the directive's indications.
5. Hemophilia hf-h3. Resolved. The tetanus sentence is deleted, and the remaining teaching (no NSAIDs other than COX-2 inhibitors) is in WFH.
6. Stroke cv-m3. Resolved by option (b). The teaching and the c-heparin feedback now say what CSBPR section 6 says. c-heparin stays unsafe under C1 because it would rule out thrombolysis and delay thrombectomy.
7. Wildfire uniqueness. Resolved. A cord prolapse replaces the dialysis hyperkalemia patient. A whole bank search for "cord prolapse", "prolapsed cord", "umbilical cord" and "knee-chest" found only a passing mention in an s09 EMS breech SAMP. The bank has no other cord prolapse item, case or SAMP.
8. Wildfire wf-m2. Resolved. It is now the caesarean and delay measures item and cites only rcog-cord, which supports it.
9. Wildfire wf-p1. Resolved. The CTAS teaching is reworded as asked and now matches the new patient.

The advisories applied in revision 2 were not requested as fixes, so I judged them on their merits (REVIEW-RULES rule 4). All pass: the q-patch reinsertion wording, the age change to 15 with the 87 mg dose and the Tdap at 14 a year ago, the WFH chapter 10.4 teaching in hf-p3 and hf-m6 (confirmed above), and the q-disclose model answer line. Waiting room stream A, now a 2 month old with a cough, is consistent in the finding, the model answer, wf-m3, the c-send-back feedback and s-send-back.

## 1. ems-patch-blocked-tracheostomy-child: PASS

- Card, stem, findings and say nodes agree on the timeline (18:00 onset, 18:10 patch, lowest 71% at 18:15, 4.0 tube at 18:16, 94% at 18:20, arrival 18:32, displacement 19:05, recovered 19:15).
- q-patch, q-prepare, q-handover, q-assess, q-displace, q-transfer and q-mother: PASS.
- Rubric and sources: PASS.
- Uniqueness: PASS. The bank-wide "tracheostomy" search hits s02, s17, s21, s50, s51 and s80 (an awake tracheostomy option for an adult glottic obstruction), and batch01, batch03 and batch06 (cricothyrotomy, Ludwig angina, croup). None is a pediatric tracheostomy, a caregiver tube change or a tracheostomy patch. The false passage twist echoes s21 (adult, immature tract). The first review passed this, and I agree.

## 2. forearm-laceration-hemophilia-emicizumab: PASS

- History, exam, hemostasis, repair, compartment and disposition nodes: PASS. The numbers recompute.
- Rubric and sources: PASS.
- Uniqueness: PASS. "emicizumab" appears elsewhere only in s14 multiple-trauma ("Teen off a dirt bike"), as a history item. That patient is now 17 against 15 here, with a different injury and different decisions (falsely normal aPTT, aPCC, a nerve deficit, delayed compartment syndrome). The other hemophilia items (s39 GI bleed, s67 abuse workup, s37 eye) do not overlap.

## 3. aphasia-after-ed-cardioversion: PASS

- q-first, q-history, q-ddx, q-reperfusion, q-post, q-disclose and q-safety: PASS.
- Rubric and sources: PASS.
- Uniqueness: PASS. The "cardiover" search hits 4 cases and 12 SAMP files. They teach when cardioversion is safe (for example the s03 CAEP rule and the s24 durations), but none has a stroke after an ED cardioversion, a code stroke in hospital or the disclosure that follows.

## 4. wildfire-evacuees-host-hospital: FAIL (3 items)

The new index patient is clinically sound and well sourced. The history, exam, management and delay measures all match RCOG GTG 50. The rest of the case is unchanged from the version the first review passed. Three revision leftovers break internal consistency.

- **q-others prompt: FAIL (leftover from the removed patient).** "How do you manage the other evacuees while he is treated?" No "he" is being treated: the index patient is now a woman, and her baby is born and well. **Fix:** "Your colleague has arrived. How do you manage the other evacuees now?"
- **q-cord prompt against s-in-order: FAIL (contradiction on one path).** On the c-in-order path, s-in-order says the Doppler finds a fetal heart of 70/minute. The next node, q-cord, then states "the fetal heart is 80/minute". **Fix:** in the q-cord prompt, replace "and the fetal heart is 80/minute" with "and the fetal heart is slow and does not recover".
- **s-delivered: FAIL (timing wrong on two paths).** "born by caesarean section at 20:32, 24 minutes after the cord was seen" is true only on the strong path (cord seen at 20:08). On c-in-order the cord is seen at 20:20 (12 minutes before birth), and on c-wheelchair at 20:12 (20 minutes). **Fix:** "A baby boy was born by caesarean section at 20:32 and is pink and crying."
- q-first, q-cord (apart from the prompt), q-capacity, q-elder and q-close: PASS.
- Rubric (12 items) and sources: PASS. wf-h1, wf-p2, wf-m1 and wf-m2 match the RCOG text quoted above.
- Uniqueness: PASS. The only other wildfire evacuation items are s25 "Evacuated ahead of the fire" (asthma) and s36 (a wildfire firefighter). No cord prolapse exists elsewhere in the bank.

## Notes for the physician (not fails)

1. Wildfire: the cord prolapse management cites RCOG GTG 50 (2014, reviewed 2024), not a Canadian source. I know of no standalone SOGC cord prolapse guideline. SOGC teaches it through the ALARM course, which has no open url. RCOG is acceptable under brief rule 4.
2. Wildfire: s-open has the triage nurse report that "she feels something between her legs" and that "her baby was lying sideways". That gives away part of wf-h1 (2 history points) before the candidate asks. It is realistic for a triage report in a multiple patient station, so I list it as a judgement point. Option: the nurse says only that her waters broke on the walk over.
3. Wildfire: someone has to keep a hand on the presenting part until the baby is born, which may mean the emergency physician goes into the operating room while still the only physician in the department (the colleague arrives about 20:25). The q-others model answer has the physician "finish the handover from the operating room". The physician may want q-cord to say who holds the presenting part, for example a nurse, so the physician can return.
4. Wildfire: the q-cord model answer says to "consider" terbutaline. RCOG ties tocolysis to a fetal heart that stays abnormal after mechanical elevation. In this case the heart recovers to 130, so terbutaline would not be needed. wf-m2 says "if there is a delay", which is close enough.
5. Hemophilia: "Close the fascia loosely if needed" in q-repair, in a forearm that later develops a compartment syndrome. It is not keyed. This carries over from the first review.
6. Hemophilia: a 15 year old needing fasciotomy under factor cover at a community hospital. Transfer to the children's hospital with its treatment centre may be preferred over local orthopaedics. The model answer allows either.
7. EMS: the false passage twist is shared with s21 in principle. Watch it in the TF-IDF pass.
8. The writer's uncertainty list skips number 8. This is a numbering slip in the report, not in the content.

## Fails and exact fixes

1. wildfire-evacuees-host-hospital, q-others prompt: change it to "Your colleague has arrived. How do you manage the other evacuees now?"
2. wildfire-evacuees-host-hospital, q-cord prompt: replace "and the fetal heart is 80/minute" with "and the fetal heart is slow and does not recover".
3. wildfire-evacuees-host-hospital, s-delivered: replace "A baby boy was born by caesarean section at 20:32, 24 minutes after the cord was seen, and is pink and crying." with "A baby boy was born by caesarean section at 20:32 and is pink and crying."

Overall: FAIL (3 items)
