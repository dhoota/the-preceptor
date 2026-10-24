# Q500B verify review 2: oral cases batch16 (revision 3)

This is a fresh independent review of the whole final batch in `src/cases/batch16/`. I did not write, edit or review this batch before. I checked it against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. I also checked every earlier fail (docs/reviews/q500b-qa-batch16.md and docs/reviews/q500b-verify-batch16.md) against the writer's Revision 2 and Revision 3 sections. I edited no case file.

The engine lets the candidate open any finding at any point on any path (`src/screens/Runner.tsx` lists every `c.findings` entry as an "Ask for" button). So a time or value in a finding label has to hold on every path, as well as the say nodes.

## Test runs

- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 of 41 passed.
- `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 of 39 passed.
- `npx tsc --noEmit -p . | grep cases/batch16`: printed nothing.

## Checks recomputed by hand

- House style: a script found no em dash, en dash or semicolon in any string in the four files. No personal names. `author: "Preceptor"`, `reviewed: false` and `version: 1` are set on all four cases.
- EMS: the timeline runs 18:00, 18:06, 18:10, 18:14, 18:15, 18:16, 18:20, 18:32, 18:55, 19:05 and 19:15. The process row is 10 points.
- Hemophilia: emicizumab 1.5 mg/kg x 58 kg = 87 mg. 16:50 to 18:00 is 70 minutes. Tdap at 14, 1 year ago, is under the 5 year CIG threshold.
- Stroke: 21:30 to 09:41 is 12 hours 11 minutes. CHADS-65 is 3 (age, hypertension, diabetes). The NIHSS adds up to 12 (2+0+0+0+2+3+1+0+1+2+1+0). Tenecteplase 0.25 mg/kg x 74 kg = 18.5 mg. 176/94 is below 185/110.
- Wildfire: the longest path is 110 + 90 + 100 + 90 + 80 + 70 = 540 s, with 6 questions on every path. The 11 waiting room evacuees in `department` match A to E in `waiting` (4 plus 7 adults).

## Sources opened in this review

- RCOG Green-top Guideline No. 50 PDF (text extracted). It says: suspect cord prolapse with an abnormal fetal heart rate soon after membranes rupture. Handle loops outside the vagina as little as possible. Manual replacement is not supported. Fill the bladder with 500 to 750 mL and empty it again before birth. Use knee-chest or left lateral. Tocolysis can be considered if the fetal heart rate stays abnormal after mechanical measures, with terbutaline 0.25 mg SC. Aim for a category 1 caesarean within 30 minutes. Multiparity and a transverse, oblique or unstable lie are risk factors. Ruptured membranes with an abnormal lie may be a reason to expedite caesarean birth. This supports wf-h1, wf-p2, wf-m1 and wf-m2.
- Ontario IMS guidance page. It is version 2.0, revised 2021-03-31. It gives a single incident commander and the operations, planning, logistics and finance functions. This supports wf-pr1.
- WHO patient identification PDF (text extracted, May 2007). It says to use at least two identifiers and to have standard approaches for comatose or confused patients. This supports wf-h3 and wf-pr3.
- CSBPR acute ischemic stroke treatment page. Tenecteplase is 0.25 mg/kg up to 25 mg as a single bolus over 5 seconds. Start thrombolysis while preparing the angiography suite for EVT, and do not delay either treatment. This supports cv-m2.
- CAEP 2021 AF checklist (PMC8423652). Cardioversion is safe with onset under 12 hours, or 12 to 48 hours with fewer than 2 CHADS-65 criteria. Start OAC before discharge, and prefer a DOAC. This supports cv-h2, cv-p3 and cv-pr4.
- CMPA disclosure handbook, version 3, March 2017. Disclose as soon as reasonably possible, do not speculate or blame, and an expression of sorrow is not an admission of liability. This supports tr-pr6, cv-pr2 and cv-pr3.
- CIG tetanus chapter (updated June 2026). With 3 or more doses and the last under 5 years ago, no vaccine and no TIg are needed for any wound. This supports hf-m7.
- Forsch AFP 2017. Irrigate with 50 to 100 mL/cm. Tap water is as good as saline. About a third of foreign bodies are missed. Antibiotics give no benefit in simple nonbite wounds. Examine structure by structure. This supports hf-h1, hf-p1, hf-m1, hf-m4 and hf-m5.

## Sources I did not open

- WFH 3rd edition PDF, Ontario ALS PCS v5.4 PDF, and the CSBPR ED evaluation (185/110) and section 6 antithrombotic pages. The first review and the first verify review extracted and quoted their text, and no claim that depends on them changed in revision 3. I did not reopen them so as to save WebFetch quota.
- Doherty 2018, Iedema 2012, Warren 2004, Bullard 2017 and Kollek 2020 have no url and are listed as text, which brief rule 4 allows.

## Earlier fails: all resolved

First review (9 items), checked again in the current files:
1. EMS card: resolved. It shows the patch values, and the 18:32 values are in `exam-arrival`.
2. EMS c-send-now: resolved ("less than half an hour ago").
3. EMS tr-pr5: resolved. tr-pr5 cites doherty, and the new tr-pr6 cites cmpa.
4. EMS tr-h2: resolved. It now gives the directive's indications.
5. Hemophilia hf-h3: resolved. The tetanus sentence is gone.
6. Stroke cv-m3 and c-heparin: resolved. Both now use the CSBPR section 6 wording.
7. Wildfire uniqueness: resolved. The index patient is now a cord prolapse.
8. Wildfire wf-m2: resolved. It cites rcog-cord only.
9. Wildfire wf-p1: resolved. The CTAS teaching is reworded.

First verify review (3 items):
1. q-others prompt: resolved. It now reads "Your colleague has arrived. How do you manage the other evacuees now?"
2. q-cord prompt: resolved. It now says "the fetal heart is slow and does not recover". It no longer conflicts with the 70/minute in s-in-order. The `ob-exam` finding still conflicts with it (see W1).
3. s-delivered interval: resolved. The "24 minutes after the cord was seen" clause is gone.

The physician notes applied in revision 3 were not requested as fixes, so I judged them on their merits (REVIEW-RULES rule 4):
- s-open now says only that her waters broke. This passes. The cord prolapse cue is gone, and wf-h1 now has to be earned.
- s-delivered now says who held the presenting part up. This passes clinically and matches RCOG ("until birth"). It does fix the delivery story to one action on every path. See physician note 1.

## 1. ems-patch-blocked-tracheostomy-child: FAIL (1 item)

- **E1. s-bag-mouth against the `crew-handover` finding: FAIL (value contradiction on one path).** On the c-bag-mouth path, s-bag-mouth (18:15) says "his saturation is 70%". The `crew-handover` finding, open on every path, says "Lowest saturation was 71% at 18:15". The c-load-go path uses 71% and agrees. **Fix:** in s-bag-mouth, change "his saturation is 70%" to "his saturation is 71%".
- q-patch, q-prepare, q-handover, q-assess, q-displace, q-transfer and q-mother: PASS. Every other time and value agrees on all three q-patch paths, both q-handover paths and all three q-displace paths.
- Rubric (17 items, 34 points) and sources: PASS.
- Uniqueness: PASS. The only new-round tracheostomy hit is s80 airway (an awake tracheostomy option for an adult glottic tumour). It does not overlap.

## 2. forearm-laceration-hemophilia-emicizumab: PASS

- q-history, q-exam, q-hemostasis, q-repair, q-compartment and q-dispo: PASS. The times agree on every path (18:00, 18:40, 19:30, 20:30, 21:30).
- Rubric (17 items, 28 points) and sources: PASS.
- Uniqueness: PASS. The other hemophilia hits (s14, s33, s37, s39, s67) do not overlap.

## 3. aphasia-after-ed-cardioversion: FAIL (1 item)

- **S1. Imaging times against the c-sedation path: FAIL (timing contradiction on one path).** On c-sedation, s-sedation (11:35) is the first time the code stroke is called and she goes to CT. The path then runs to s-imaging, whose phase is "11:30" and which reports the CT result. The `ct` finding is labelled "(11:24)" and `cta` "(11:27)", and both are open on every path. If she then goes on to c-evt-only or c-heparin, s-evt-only ("11:33") and s-heparin ("11:34") also come before the scan. **Fix:** change the `ct` label to "Non contrast CT head" and the `cta` label to "CT angiography". Change the s-imaging phase from "11:30" to "After the scan". Change the s-evt-only and s-heparin phases from "11:33" and "11:34" to "Moments later".
- q-first, q-history, q-ddx, q-reperfusion, q-post, q-disclose and q-safety: PASS apart from S1.
- Rubric (15 items, 31 points) and sources: PASS.
- Uniqueness: PASS. No new-round SAMP or case has a stroke after cardioversion or an in-hospital code stroke.

## 4. wildfire-evacuees-host-hospital: FAIL (3 items)

I traced every path: q-first (3 choices) to q-cord, s-delivered, q-others (2), s-second-plane, q-capacity (2), s-elder, q-elder (2), q-close and end.

- **W1. `ob-exam` finding against s-in-order: FAIL (time and value contradiction on the c-in-order path).** The finding is labelled "examination at 20:08" and gives "fetal heart by handheld Doppler is 80/minute". On c-in-order, the woman is not examined until s-in-order at 20:20, which gives 70/minute. On c-wheelchair she is first examined at 20:12. **Fix:** change the `ob-exam` label to "The pregnant woman: examination". In s-in-order, change "a fetal heart of 70/minute" to "a fetal heart of 80/minute".
- **W2. Theatre and birth times against the c-in-order path: FAIL (timing impossible on one path).** On c-in-order, no one calls the obstetric team before the cord is seen at 20:20. The `staff` finding puts the obstetrician and anesthetist about 15 minutes away from home. Yet the `ob-after` finding says the operating room is ready "by 20:24", and s-delivered says the baby was born "at 20:32" (12 minutes after the cord was seen) with the colleague already in. On the strong path (cord seen 20:08) and the c-wheelchair path (obstetrician already asked for) the times work. **Fix:** in `ob-after`, change "The birthing unit has the operating room ready by 20:24." to "The birthing unit has the operating room ready about 15 minutes after the call." In s-delivered, change the phase from "20:40" to "20:50", and change "A baby boy was born by caesarean section at 20:32 and is pink and crying." to "A baby boy was born by caesarean section and is pink and crying." The later nodes (s-send-back 21:15, s-second-plane 21:30) still follow in order.
- **W3. s-release against q-close: FAIL (timing contradiction on the c-release path).** s-release (23:40) says "Police find her an hour later", which is about 00:40. The next node, q-close, is "Midnight" and asks what you set up "before you hand over at midnight", so the narrated event comes after the question that follows it. **Fix:** in s-release, change "Police find her an hour later walking near the highway" to "Police find her 15 minutes later walking near the highway".
- Everything else on every path agrees. The stem says the first plane "landed an hour ago" and `evacuation` says 19:00, with s-open at 20:00. Rupture was at 19:50. The second plane message at 21:30 and landing at 23:00 match `second-plane` and the s-release arrival. The dialysis routing appears the same in both q-capacity branches and the end node. The 2 month old, the boy and the man match across `waiting`, q-others, wf-m3, c-send-back and s-send-back.
- q-first, q-cord, q-others, q-capacity, q-elder and q-close: PASS apart from W1 to W3.
- Rubric (12 items, 25 points) and sources: PASS. They are confirmed against RCOG, IMS and WHO above.
- Uniqueness: PASS. A bank-wide search for "cord prolapse", "prolapsed cord", "umbilical cord" and "knee-chest" finds only this case and a passing mention in s09 ems. "wildfire" or "evacuee" appears only in s25 asthma-copd and s36 environmental. batch17 to batch20 have nothing similar.

## Notes for the physician (not fails)

1. Wildfire: s-delivered has the emergency physician holding the presenting part up from the bay into the operating room. On the strong path the colleague arrives about 20:26, so the department has no physician for a few minutes. The physician may prefer a nurse to take over the elevation, so the emergency physician can return.
2. Wildfire: the q-cord model answer says "consider terbutaline". RCOG ties tocolysis to a fetal heart rate that stays abnormal after mechanical elevation. Here the heart rate recovers to 130. This carries over from the last review.
3. Hemophilia: on the c-close-now path the wound has already been closed when q-repair asks how to manage the wound. This implies reopening it, but the case never says so. The physician may want the q-repair prompt or s-close-now to say the wound will be reopened.
4. Hemophilia: "Close the fascia loosely if needed" in a forearm that later needs a fasciotomy, and local orthopaedics against transfer to the children's hospital. Neither is keyed. This carries over.
5. Stroke: in s-husband, the husband says "I told the nurse it was last night", but no finding shows him speaking to staff that morning (the `husband` finding has him answer by phone now). It is minor and plausible.
6. Wildfire q-elder and stroke q-safety use "hand over" as a noun, where the rest of the bank writes "handover". This is not a house style rule.
7. Wildfire: RCOG GTG 50 is not Canadian. No open SOGC cord prolapse guideline is known, so it is acceptable under brief rule 4.
8. EMS: the false passage twist is shared in principle with s21 (adult). Watch it in the TF-IDF pass.

## Fails and exact fixes

1. ems-patch-blocked-tracheostomy-child, s-bag-mouth: change "his saturation is 70%" to "his saturation is 71%".
2. aphasia-after-ed-cardioversion, imaging times: change the `ct` label to "Non contrast CT head" and the `cta` label to "CT angiography". Change the s-imaging phase "11:30" to "After the scan". Change the s-evt-only phase "11:33" and the s-heparin phase "11:34" to "Moments later".
3. wildfire-evacuees-host-hospital, `ob-exam` and s-in-order: change the label to "The pregnant woman: examination". In s-in-order, change "a fetal heart of 70/minute" to "a fetal heart of 80/minute".
4. wildfire-evacuees-host-hospital, `ob-after` and s-delivered: change "The birthing unit has the operating room ready by 20:24." to "The birthing unit has the operating room ready about 15 minutes after the call." Change the s-delivered phase "20:40" to "20:50". Change "A baby boy was born by caesarean section at 20:32 and is pink and crying." to "A baby boy was born by caesarean section and is pink and crying."
5. wildfire-evacuees-host-hospital, s-release: change "Police find her an hour later" to "Police find her 15 minutes later".

Overall: FAIL (5 items)
