# Q500B verify review 4: oral cases batch16 (revision 5)

This is a fresh independent review of the whole final batch in `src/cases/batch16/`. I did not write, edit or review this batch before. I checked it against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I checked every earlier fail (q500b-qa-batch16.md, q500b-verify-batch16.md, q500b-verify2-batch16.md and q500b-verify3-batch16.md) against the writer's Revision 2 to 5 sections and the current files. I edited no case file.

The candidate can open any finding from any path. So I checked each time, value and person in every finding label and result, and in every say node, on every path of all four cases.

## Test runs

- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 of 41 passed.
- `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 of 39 passed.

## Checks recomputed by hand and by script

- Points per row (history, physical, management, process): EMS 8/5/11/10 (34, 18 items, 4 critical). Hemophilia 6/5/11/6 (28, 17 items, 3 critical). Stroke 7/6/10/8 (31, 15 items, 3 critical). Wildfire 5/4/7/9 (25, 12 items, 3 critical). History is 20 to 24%. Management is 28 to 39%, so no case is over half.
- Longest paths: EMS 680 s (7 questions), hemophilia 560 s (6), stroke 620 s (7), wildfire 540 s (6). Every path in a case has the same number of questions.
- Emicizumab 1.5 mg/kg x 58 kg = 87 mg weekly. Tdap at 14, 1 year ago, is under the 5 year CIG threshold.
- Tenecteplase 0.25 mg/kg x 74 kg = 18.5 mg, under 25 mg. AF onset 21:30 to the shock at 09:41 is 12 hours 11 minutes. CHADS-65 is 3 (age, hypertension, diabetes). NIHSS 12 recomputes. 176/94 is below 185/110. The stem's "90 minutes ago" fits 09:41 to 11:10.
- EMS: ETCO2 46 mmHg with venous pCO2 51 mmHg is consistent. 18:20 to 18:32 matches the 12 minute drive.
- Wildfire: bladder filling 500 to 750 mL and terbutaline 0.25 mg SC match RCOG.
- House style: a script found no em dash, en dash or semicolon in any string in the four files. No personal names. `author: "Preceptor"`, `reviewed: false` and `version: 1` on all four, as the Q500B brief requires.

## Sources opened in this review

- CSBPR acute ischemic stroke treatment page. Tenecteplase 0.25 mg/kg up to 25 mg as a single bolus over 5 seconds. Start thrombolysis while preparing the angiography suite, and do not delay either treatment. This supports cv-m2 and the q-reperfusion key.
- CIG tetanus chapter. Last complete update June 2026. With 3 or more doses and the last under 5 years ago, no vaccine and no TIg for any wound. This supports hf-m7.
- CMPA disclosure handbook, version 3, March 2017. Disclose as soon as reasonably possible, do not speculate or blame, and an expression of sorrow is not an admission of liability. This supports tr-pr6, cv-pr2 and cv-pr3.
- RCOG Green-top Guideline No. 50 PDF (text extracted with pdftotext). Suspect cord prolapse with an abnormal fetal heart rate, especially soon after rupture. Elevate the presenting part manually or by bladder filling of 500 to 750 mL, and empty the bladder before birth. Minimal handling of loops outside the vagina. No evidence for replacing the cord. Knee-chest or left lateral. Tocolysis can be considered with persistent fetal heart rate abnormalities, terbutaline 0.25 mg SC. Category 1 caesarean within 30 minutes. Multiparity and transverse, oblique or unstable lie are risk factors. Ruptured membranes with an abnormal lie may be a reason to expedite birth. This supports wf-h1, wf-p2, wf-m1 and wf-m2.

## Sources not opened

To save WebFetch quota I did not reopen the WFH 3rd edition PDF, the Ontario ALS PCS v5.4 PDF, the CAEP 2021 AF checklist, the Forsch AFP page, the Ontario IMS page, the WHO patient identification PDF, the CSBPR ED evaluation page (185/110 for 24 hours) or the CSBPR section 6 antithrombotic page. Earlier reviews opened and quoted them, and revision 5 changed no claim that depends on them. Doherty 2018, Iedema 2012, Warren 2004, Bullard 2017 and Kollek 2020 have no url and are listed as text, which brief rule 4 allows. No fetch failed.

## Earlier fails: all 18 resolved

First review (9), checked in the current files: the EMS card has the patch values and `exam-arrival` the 18:32 values. c-send-now says "less than half an hour ago". tr-pr5 cites doherty and tr-pr6 cites cmpa. tr-h2 gives the directive's indications. The hf-h3 tetanus sentence is gone. cv-m3 and c-heparin use the CSBPR section 6 wording. The wildfire index patient is a cord prolapse. wf-m2 cites rcog-cord only. wf-p1 has the reworded CTAS teaching.

Verify review (3): the q-others prompt, the q-cord prompt ("slow and does not recover") and the s-delivered birth sentence are as asked.

Verify review 2 (5): s-bag-mouth says 71%. The `ct` and `cta` labels have no times, s-imaging is "After the scan", and s-evt-only and s-heparin are "Moments later". `ob-exam` is "The pregnant woman: examination" and s-in-order gives 80/minute. `ob-after` says "about 15 minutes after the call", and s-delivered is at 20:50 with no birth time. s-release says "15 minutes later".

Verify review 3 (1): s-send-back now ends "The 84 year old woman is still in the waiting room, because the nurses would not send her back without family." s-elder and q-elder now hold on the c-send-back path. Resolved.

Changes in revision 5 made from physician notes, judged on their merits (REVIEW-RULES rule 4): the `department` count ("The pregnant woman and 11 other evacuees") and the hf-pr2 teaching ("A plan made earlier in the visit can be wrong by the time of discharge"). Both pass and hold on every path.

## 1. ems-patch-blocked-tracheostomy-child: PASS

- I traced all three q-patch paths, both q-handover paths and all three q-displace paths. Crew on scene at 18:06, patch at 18:10, tube out at 18:14, lowest 71% at 18:15 (s-load-go, s-bag-mouth and `crew-handover` agree), 4.0 in at 18:16, 94% at 18:20, arrival at 18:32, results at 18:55, displacement at 19:05 and recovery at 19:15. The card, `patch-report`, `exam-arrival`, `displacement` and `repeat-cxr` hold on every path. A new 4.0 goes in on each q-displace path.
- All seven questions, the rubric (18 items) and the sources: PASS.
- Uniqueness: PASS. The bank-wide hits for "tracheostomy" (s02, s17, s21, s50, s51, s80, batch01, batch03, batch06) have no pediatric tracheostomy, no caregiver tube change and no tracheostomy patch. batch17 to batch20 have nothing similar.

## 2. forearm-laceration-hemophilia-emicizumab: PASS

- I traced every path (q-exam 2, q-hemostasis 3, q-repair 2, q-compartment 2). Injury at 16:50, arrival at 18:00, s-apcc at 18:40, s-close-now at 19:30, reassessment at 20:30 and s-elevate-wait at 21:30. `reassess` ("Forearm at 20:30") holds on every path. The baseline exam has no time.
- All six questions, the rubric (17 items) and the sources: PASS.
- Uniqueness: PASS. "emicizumab" appears elsewhere only in s14 multiple-trauma, a 17 year old with a different injury. The other hemophilia hits (s33, s37, s39, s67) do not overlap.

## 3. aphasia-after-ed-cardioversion: PASS

- I traced every path (q-first 3, q-reperfusion 3, q-disclose 3). `neuro` at 11:14 holds, because every path has the physician at the bedside from 11:12. On c-sedation the code stroke is at 11:35, and s-evt at 12:55 still holds. The `ct`, `cta`, `labs` and `post-evt` labels have no times. `post-evt` and s-evt agree on NIHSS 4 and 192/100.
- All seven questions, the rubric (15 items) and the sources: PASS.
- Uniqueness: PASS. batch04 acute-ischemic-stroke-evt is also a woman with aphasia and right arm weakness given tenecteplase and EVT. Its decisions are different: pre-hospital code stroke, BP lowering before lysis, transfer for EVT and angioedema. Here the decisions are an in-hospital stroke after a late cardioversion, retaking the AF onset, refusing heparin, disclosure and a CQI fix. s05 and s86 have no stroke after cardioversion.

## 4. wildfire-evacuees-host-hospital: PASS

- I traced q-first (3) to q-cord, s-delivered, q-others (2), s-second-plane, q-capacity (2), s-elder, q-elder (2), q-close and end. The cord is seen at about 20:05, 20:12 or 20:20. The theatre is ready about 15 minutes after the call, so the birth comes before s-delivered at 20:50 on every path. The colleague arrives about 25 minutes after a call, so is in by 20:50. The pharmacist (until 22:00) opens the refill station at 21:15. The second plane message is at 21:30 and the landing at 23:00. Then s-accept-all at 22:00, s-elder at 22:15, s-release at 23:40 plus 15 minutes, and q-close at midnight. The fetal heart is 80/minute in `ob-exam` and s-in-order and 130/minute in `ob-after` and s-delivered. The elder is in the department at 22:15 on both q-others paths.
- All six questions, the rubric (12 items) and the sources: PASS.
- Uniqueness: PASS. "cord prolapse" and "knee-chest" appear nowhere else in the bank, apart from a passing word in s09 ems. "wildfire" and "evacuee" appear only in s25 asthma-copd and s36 environmental.

## Notes for the physician (not fails)

1. Wildfire: `waiting` ("Evacuees in the waiting room at 20:05") lists only the 11 other evacuees. On c-in-order the pregnant woman is also still there at 20:05. Optional: "Other evacuees in the waiting room at 20:05".
2. Wildfire: s-delivered has the emergency physician holding the presenting part up into the operating room. On the strong path the colleague has not yet arrived. The physician may prefer a nurse to take over the elevation. This carries over.
3. Wildfire: the q-cord model answer says "consider terbutaline" if there is a delay. RCOG ties tocolysis to a persistent fetal heart rate abnormality, and here the heart rate recovers to 130. This carries over.
4. Wildfire: RCOG GTG 50 is not Canadian. No open SOGC cord prolapse guideline is known, so it is acceptable under brief rule 4.
5. Stroke: the husband says "I told the nurse it was last night", but the q-history model answer says "the triage history came from her alone", and `husband` has him first answering by phone now. It is plausible that he told a nurse by phone earlier, but the case does not say so. Also, he is "on his way in" at about 11:20 and arrives at 13:20.
6. Stroke: s-evt returns her to the emergency resuscitation bay after thrombectomy to wait for a bed. This is plausible when beds are short. This carries over.
7. Stroke: labetalol 10 mg IV is in the model answer only. It is not keyed or sourced in the case. batch04 keys the same dose.
8. Hemophilia: on c-close-now, q-repair asks how to manage a wound that is already closed, which implies reopening it. "Close the fascia loosely if needed" in a forearm that later needs a fasciotomy, and local orthopaedics instead of transfer to the children's hospital, are not keyed. These carry over.
9. Hemophilia: on c-elevate-wait, s-elevate-wait has the surgeon taking him to the operating room, and q-dispo then says the surgeon "will decompress the forearm tonight". This is close enough.
10. EMS: a community hospital in northern Ontario has pediatric tracheostomy tubes in 4.5, 4.0 and 3.5. That needs a pediatric airway kit. This carries over.
11. EMS: q-assess tests tr-m6 (humidification, suction, antipyretic, aspirate before antibiotics), but its prompt asks only about history, exam and tests. Its model answer has the aspirate but not humidification.
12. EMS: the false passage twist is shared in principle with s21 (adult). The stroke presentation overlaps batch04 (see above). Watch both in the TF-IDF pass.

## Fails and exact fixes

None.

Overall: PASS
