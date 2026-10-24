# Q500B verify review 3: oral cases batch16 (revision 4)

This is a fresh independent review of the whole final batch in `src/cases/batch16/`. I did not write, edit or review this batch before. I checked it against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I checked every earlier fail (q500b-qa-batch16.md, q500b-verify-batch16.md and q500b-verify2-batch16.md) against the writer's Revision 2 to 4 sections and the current files. I edited no case file.

The candidate can open any finding from any path, so I checked each time and value in every finding label and result, and in every say node, on every path of all four cases.

## Test runs

- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 of 41 passed.
- `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 of 39 passed.

## Checks recomputed by hand

- House style: a script found no em dash, en dash or semicolon in any string in the four files. No personal names. `author: "Preceptor"`, `reviewed: false` and `version: 1` on all four.
- Points per row (history, physical, management, process): EMS 8/5/11/10 (34), hemophilia 6/5/11/6 (28), stroke 7/6/10/8 (31), wildfire 5/4/7/9 (25). History 20 to 24%. Management 28 to 39%. Each row has at least 2 items. 3 or 4 critical items per case.
- Longest paths: EMS 110+90+90+110+100+100+80 = 680 s (7 questions). Hemophilia 90+90+100+100+100+80 = 560 s (6). Stroke 90+90+80+100+90+90+80 = 620 s (7). Wildfire 110+90+100+90+80+70 = 540 s (6). Every path has the same question count, so all are 6 to 10.
- Emicizumab 1.5 mg/kg x 58 kg = 87 mg. Tdap at 14, 1 year ago, is under the 5 year CIG threshold.
- Tenecteplase 0.25 mg/kg x 74 kg = 18.5 mg, under 25 mg. AF onset 21:30 to shock 09:41 is 12 hours 11 minutes. CHADS-65 is 3. NIHSS 12 recomputes. 176/94 is below 185/110.
- EMS: ETCO2 46 mmHg with venous pCO2 51 mmHg is consistent. The 12 minute drive matches 18:20 to 18:32.

## Sources opened in this review

- CSBPR acute ischemic stroke treatment page: tenecteplase 0.25 mg/kg up to 25 mg as a single bolus over 5 seconds. Start thrombolysis while preparing the angiography suite, and do not delay either treatment. Supports cv-m2.
- CSBPR ED evaluation and management page, section 4.3: BP lowered and kept below 185/110 while starting and during thrombolysis and for the next 24 hours. Supports cv-m4 and the q-post model answer.

## Sources not opened

To save WebFetch quota I did not reopen the WFH 3rd edition PDF, the Ontario ALS PCS v5.4 PDF, the CAEP 2021 AF checklist, the CMPA disclosure handbook, the CIG tetanus chapter, the Forsch AFP page, the RCOG GTG 50 PDF, the Ontario IMS page, the WHO patient identification PDF or the CSBPR section 6 antithrombotic page. Earlier reviews extracted and quoted them, and revision 4 changed no claim that depends on them. Doherty 2018, Iedema 2012, Warren 2004, Bullard 2017 and Kollek 2020 have no url and are listed as text (brief rule 4).

## Earlier fails: all 17 resolved

First review (9): the EMS card carries the patch values and `exam-arrival` the 18:32 values. c-send-now says "less than half an hour ago". tr-pr5 cites doherty and tr-pr6 cites cmpa. tr-h2 gives the directive's indications. The hf-h3 tetanus sentence is gone. cv-m3 and c-heparin use the CSBPR section 6 wording. The wildfire index patient is a cord prolapse. wf-m2 cites rcog-cord only. wf-p1 has the reworded CTAS teaching. All confirmed in the current files.

Verify review (3): the q-others prompt, the q-cord prompt ("slow and does not recover") and the s-delivered birth sentence are as asked.

Verify review 2 (5), checked in the current files:
1. s-bag-mouth now says 71%, matching `crew-handover`. Resolved.
2. `ct` is "Non contrast CT head", `cta` is "CT angiography", s-imaging is "After the scan", and s-evt-only and s-heparin are "Moments later". Resolved.
3. `ob-exam` is "The pregnant woman: examination" and s-in-order gives 80/minute. Resolved.
4. `ob-after` says "about 15 minutes after the call", s-delivered is at 20:50 with no birth time. Resolved.
5. s-release says "15 minutes later" (about 23:55, before the midnight q-close). Resolved.

Unrequested changes in revision 4, judged on their merits (REVIEW-RULES rule 4): the time-free `labs` and `post-evt` labels, "handover" as a noun in the stroke q-safety and wildfire q-elder model answers, and "Your colleague on call, called in by the charge nurse, has arrived" in s-delivered. All pass. See note 4 on the last one.

## 1. ems-patch-blocked-tracheostomy-child: PASS

- I traced all three q-patch paths, both q-handover paths and all three q-displace paths. 18:06 crew arrival, 18:10 patch, 18:14 tube out, 18:15 lowest 71% (both s-load-go and s-bag-mouth now agree), 18:16 4.0 in, 18:20 94%, 18:32 arrival, 18:55 results, 19:05 displacement, 19:15 recovery. Every finding holds on every path. On each q-displace path a new 4.0 goes in, which matches `repeat-cxr`.
- All seven questions, the rubric (17 items) and the sources: PASS.
- Uniqueness: PASS. Bank-wide "tracheostomy" hits (s02, s17, s21, s50, s51, s80, batch01, batch03, batch06) have no pediatric tracheostomy, caregiver tube change or tracheostomy patch. batch17 to batch20 have nothing similar.

## 2. forearm-laceration-hemophilia-emicizumab: PASS

- I traced every path (q-exam 2, q-hemostasis 3, q-repair 2, q-compartment 2). 16:50 injury, 18:00 arrival (70 minutes), 18:40 s-apcc, 19:30 s-close-now, 20:30 reassessment, 21:30 s-elevate-wait. `reassess` ("Forearm at 20:30") holds on every path. The baseline `neurovascular` finding has no time and reads as the first examination.
- All six questions, the rubric (17 items) and the sources: PASS.
- Uniqueness: PASS. "emicizumab" appears elsewhere only in s14 multiple-trauma (a 17 year old with a different injury). No new-round SAMP or case has hemophilia.

## 3. aphasia-after-ed-cardioversion: PASS

- I traced every path (q-first 3, q-reperfusion 3, q-disclose 3). On c-sedation the code stroke is at 11:35, the scan and tenecteplase about 11:40 to 11:50, and s-evt at 12:55 still holds after a one pass thrombectomy. The time-free `ct`, `cta`, `labs` and `post-evt` labels hold on all paths. `neuro` at 11:14 holds, since every path has the physician at the bedside from 11:12.
- All seven questions, the rubric (15 items) and the sources: PASS.
- Uniqueness: PASS. s86 cva (new round) has tenecteplase and EVT items but no stroke after cardioversion, no in-hospital code stroke and no disclosure.

## 4. wildfire-evacuees-host-hospital: FAIL (1 item)

- **W1. s-send-back against s-elder and q-elder: FAIL (the elder's location on the c-send-back path).** On c-send-back the candidate sends "everyone who was not acutely ill back to the arena". The 84 year old woman is medically well (`elder`), so on that path she goes back to the arena. s-send-back brings back only the boy and the 2 month old. Then at 22:15 s-elder has a man at the desk asking to take her "back to the arena", and q-elder keys keeping her safe "in the department". On that path the case never says she is still there. **Fix:** in s-send-back, change "Your colleague brings them back, and the pharmacist opens a refill station." to "Your colleague brings them back, and the pharmacist opens a refill station. The 84 year old woman is still in the waiting room, because the nurses would not send her back without family."
- Everything else holds on every path. I traced q-first (3) to q-cord, s-delivered, q-others (2), s-second-plane, q-capacity (2), s-elder, q-elder (2), q-close and end. Cord seen at about 20:05, 20:12 or 20:20. The operating room is ready about 15 minutes after the call, so birth comes before s-delivered at 20:50 on every path. The colleague (about 25 minutes after a call) has arrived by 20:50 on every path. The second plane at 21:30 and 23:00, s-accept-all at 22:00, s-elder at 22:15, s-release at 23:40 plus 15 minutes, and q-close at midnight are all in order. The fetal heart is 80/minute in `ob-exam` and s-in-order, and 130/minute in `ob-after` and s-delivered.
- All six questions apart from W1, the rubric (12 items) and the sources: PASS.
- Uniqueness: PASS. "cord prolapse" appears elsewhere only as a passing word in s09 ems. "wildfire" and "evacuee" appear only in s25 asthma-copd and s36 environmental. Nothing in s72 to s88 or batch17 to batch20 overlaps.

## Notes for the physician (not fails)

1. Wildfire: `department` says 11 evacuees are in the waiting room at 20:00, and `waiting` lists 11 (A to E) at 20:05. s-open puts the pregnant woman in the waiting room at 20:00 as well, so the 20:00 count is 12 if she is included. Optional: "12 evacuees, including the pregnant woman, are in the waiting room".
2. Hemophilia: the hf-pr2 teaching says "A plan made at 19:00 can be wrong by 20:30." On c-close-now the wound is closed and factor given about 19:30, so the discharge plan comes after 19:00. This is a rubric teaching sentence, not a finding or a say node. Optional: "A discharge plan made earlier in the evening can be wrong by 20:30."
3. Wildfire: s-delivered has the emergency physician holding the presenting part up into the operating room while still the only emergency physician until the colleague arrives. The physician may prefer a nurse to take over the elevation. This carries over.
4. Wildfire: on the strong path the candidate "called in my colleague", and s-delivered says the colleague was "called in by the charge nurse". This reads as the charge nurse making the call the physician asked for, which is usual practice. Optional: "Your colleague on call has arrived."
5. Wildfire: the q-cord model answer says "consider terbutaline", but the fetal heart recovers to 130/minute. RCOG ties tocolysis to a heart rate that stays abnormal. wf-m2 says "if there is a delay". This carries over.
6. Hemophilia: on c-close-now, q-repair asks how to manage a wound that is already closed, which implies reopening it. "Close the fascia loosely if needed" in a forearm that later needs a fasciotomy, and local orthopaedics against transfer to the children's hospital, are not keyed. These carry over.
7. Stroke: s-evt returns her to the emergency resuscitation bay after thrombectomy to wait for a stroke unit bed. That is plausible when beds are short. Some centres send patients after EVT straight to the stroke unit or ICU.
8. EMS: a community hospital in northern Ontario stocks pediatric tracheostomy tubes in 4.5, 4.0 and 3.5 in `q-prepare`, `q-displace` and `q-transfer`. That is plausible only if the hospital keeps a pediatric airway kit. The physician may want s-results or `resources` to say where the tubes come from. PCP scope for the caregiver tube change was confirmed by the first review.
9. EMS: the false passage twist is shared in principle with s21 (adult). Watch it in the TF-IDF pass.
10. Wildfire: RCOG GTG 50 is not Canadian. No open SOGC cord prolapse guideline is known, so it is acceptable under brief rule 4.

## Fails and exact fixes

1. wildfire-evacuees-host-hospital, s-send-back: change "Your colleague brings them back, and the pharmacist opens a refill station." to "Your colleague brings them back, and the pharmacist opens a refill station. The 84 year old woman is still in the waiting room, because the nurses would not send her back without family."

Overall: FAIL (1 item)
