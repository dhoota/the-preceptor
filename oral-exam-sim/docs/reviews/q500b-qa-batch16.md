# Q500B QA review: oral cases batch16

Independent first review of `src/cases/batch16/` against docs/Q500B_BRIEF.md, docs/CASE_SPEC.md, docs/ORAL_REALIGN_BRIEF.md, docs/reviews/REVIEW-RULES.md and docs/reviews/SCORING-RULINGS.md. The reviewer did not write or edit the batch.

## Test runs

- `CASE_BATCH=batch16 npx vitest run tests/cases.test.ts tests/citations.test.ts --testTimeout=120000`: 41 passed.
- `REALIGN=batch16 CASE_BATCH=batch16 npx vitest run tests/cases.test.ts --testTimeout=120000`: 39 passed. Card, score sheet rows and timing checks pass.

## Checks recomputed by hand

- Longest path seconds: 680, 560, 620 and 540. All are 720 or less. Every question is 70 to 110 seconds.
- Points per row (history, physical, management, process): 8/5/11/10 (34), 6/5/11/6 (28), 7/6/10/8 (31), 5/4/7/9 (25). History is 20 to 24%. Management is 28 to 39%. These match the writer's report.
- House style: no em dashes, en dashes or semicolons. No personal names. Author is "Preceptor", `reviewed: false`, `version: 1`. IMIST-AMBO and CHADS-65 are named published tools, as elsewhere in the bank (ems-patch-ruptured-aaa, s35, s88), not mnemonics.
- The cva stem opens "when a nurse calls you to a patient". Signed cases already use other openers after "You are working in the emergency department of", and the test allows it.
- Oral mock mode runs each station node by node, so the SAMP mock-mode rule (B6) does not apply to the say nodes. The one cue problem found is on a card (case 1).

## Sources opened by the reviewer

- Ontario ALS PCS v5.4 PDF (text extracted). The Advanced Airway and Tracheostomy Suctioning and Reinsertion Medical Directive is a PCP core directive "if authorized". Reinsertion applies when the cannula has been removed from the airway, with respiratory distress, inability to ventilate and a cannula presented for that patient. Maximum 2 attempts. "Utilize a family member or caregiver who is available and knowledgeable to replace the tracheostomy cannula." The patching section says a paramedic must tell the BHP when a direction exceeds scope.
- WFH 3rd edition PDF (text extracted). 7.10: deep laceration, raise the factor level, then suture, with cover for suture removal if risk is high. Emicizumab: breakthrough bleeds treated with CFC, VTE or TMA with aPCC, aPTT considerably shortened. COX-2 exception for NSAIDs, IM route not advised, vaccines preferably subcutaneous. Chapter 10.4: monitor continuously for compartment syndrome (increasing pain, loss of sensation, loss of function, poor distal blood supply), pain as an indirect measure of compartment pressure, measure pressure if in doubt, fasciotomy within 12 hours of onset (Recommendation 10.4.3), factor for 5 to 7 days or longer.
- CAEP 2021 AF checklist (PMC8423652). 12 to 48 hours is safe only with fewer than 2 CHADS-65 criteria (age 65 or more, diabetes, hypertension, heart failure). Negative TEE is an alternative. OAC before discharge if CHADS-65 positive, DOAC preferred.
- CSBPR treatment page. Tenecteplase 0.25 mg/kg up to 25 mg as a single bolus over 5 seconds. No delay to EVT to judge the effect of thrombolysis. The 2025 EVT update supersedes the 2022 EVT section, and the page reports that EVT alone was not non inferior to thrombolysis plus EVT and that BRIDGE-TNK favoured tenecteplase before EVT. Bridging stands (writer's uncertainty 7 resolved).
- CSBPR ED evaluation page. BP below 185/110 while starting and during thrombolysis and for the next 24 hours. Record anticoagulant use and the time of the last dose.
- CSBPR acute antithrombotic therapy page (section 6). Antiplatelets avoided for 24 hours after thrombolysis until imaging excludes hemorrhage. Anticoagulation timing by stroke size (minor stroke about day 3). No statement that urgent heparin is not recommended (writer's uncertainty 5 confirmed).

## 1. ems-patch-blocked-tracheostomy-child: FAIL

Numbers checked: 21 kg at 6 years is plausible. Timeline holds: noisy breathing at 18:00, crew on scene 18:06, patch 18:10, lowest saturation 71% at 18:15, 4.0 tube at 18:16, call back 18:20, arrival 18:32 (12 minutes), results 18:55, displacement 19:05, recovered 19:15. ETCO2 46 mmHg with venous pCO2 51 mmHg is consistent. A blocked uncuffed pediatric tube with no inner cannula goes straight to a tube change (same size, then smaller, then over a suction catheter), as the NTSP paediatric algorithm in Doherty 2018 sets out.

- Writer's uncertainty 1 (PCP scope): acceptable. The directive tells the crew to use a knowledgeable caregiver to replace the cannula, and reinsertion by the crew applies once the cannula is out. The mother removes and replaces the tube, which is her own trained care, and the crew supports her. Advisory: in the q-patch model answer, change "Within their directive the crew can reinsert a tube themselves." to "Once the tube is out, the crew can reinsert one themselves under their directive, up to 2 attempts."
- **Card: FAIL (internal contradiction and cue).** The stem says his saturation "is falling" during the patch, but the card shows 93% on 6 L/minute, pulse 138 and resp 36. Those are the post change values on arrival (no other finding gives them). A candidate reading the card before q-patch sees a child who is already stable on less oxygen. **Fix:** make the card carry the patch values: pulse "152/minute", resp "48/minute", o2sat "84% on 10 L/minute by tracheostomy mask", and either a crew BP added to the `patch-report` finding (for example "BP 108/68 mmHg") or bp "Not recorded". Temperature "38.5°C (measured at home by his mother)" or "Not recorded". Move the arrival values (38.4°C axillary, 138, 36, 102/64 mmHg, 93% on 6 L/minute) into the `exam-arrival` finding.
- q-patch: PASS.
- q-prepare: PASS.
- q-handover: PASS.
- q-assess: PASS.
- q-displace: PASS. Advisory for the orchestrator: a false passage with flat capnography and surgical emphysema while bagging is also the twist of s21 "Noisy breathing through a new tracheostomy" (adult). Here it is a pediatric tie change with a narrowed stoma, and the earlier decisions are new, so it passes, but watch it in the TF-IDF pass.
- **q-transfer, c-send-now feedback: FAIL (timeline).** "He displaced his tube an hour ago" is wrong. The displacement was at 19:05 and the question follows 19:15. **Fix:** "He displaced his tube less than half an hour ago and has air in his neck."
- q-mother: PASS for the node. See tr-pr5.
- **Rubric tr-pr5: FAIL (C2).** "Honest disclosure of an event in hospital supports trust and learning" cites `doherty`, a tracheostomy emergency guideline that does not cover disclosure. **Fix:** add a fifth source, Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. Version 3. 2017 (the same citation and url the cva case uses), and cite it for tr-pr5. Or split tr-pr5 so the disclosure and reporting part cites CMPA and the thanks and go-bag part keeps `doherty`.
- **Rubric tr-h2: FAIL (C2, minor).** The first teaching sentence ("A suction catheter that will not pass means a blocked or displaced tube.") cites `als-pcs`, which lists only "airway obstruction or increased secretions" as indications. **Fix:** change the source to `doherty`, or reword the first sentence to what the directive says: "Paramedics may suction a tracheostomy for obstruction or increased secretions, and may reinsert a tube once it is out."
- Writer's uncertainty 2 (tr-m6): acceptable. Doherty supports humidification and suction to prevent blockage, which is what the teaching says. No antibiotic dose is keyed.
- All other rubric items and sources: PASS. Doherty (Anaesthesia 2018, PMID 30062783), Iedema (BMJ Qual Saf 2012) and Warren (Crit Care Med 2004) are real and correctly cited as text. The ALS PCS url opens the right document.
- Uniqueness: PASS. The bank has no pediatric tracheostomy, no caregiver tube change and no tracheostomy patch.

## 2. forearm-laceration-hemophilia-emicizumab: FAIL

Numbers checked: emicizumab 1.5 mg/kg weekly x 64 kg = 96 mg. That is the labelled weekly maintenance dose (writer's uncertainty 3 confirmed). Hemoglobin 131 then 118 g/L. Timeline: cut at 16:50, seen at 18:00 (70 minutes), ibuprofen about 17:00, reassessment 20:30. Tdap at 14, 3 years ago: CIG gives no vaccine for any wound when the last dose was under 5 years ago. Irrigation 50 to 100 mL/cm and the one third missed foreign body figure match Forsch 2017. A dorsal radial mid forearm wound with sensory loss over the first web space fits the superficial radial nerve, and normal extension against resistance excludes the posterior interosseous nerve and the extensor tendons.

- s-open, q-history: PASS.
- q-exam: PASS.
- q-hemostasis: PASS. Factor VIII for a breakthrough bleed without an inhibitor, aPCC keyed unsafe (WFH: VTE and TMA with aPCC on emicizumab), aPTT falsely normal. All confirmed in the WFH text.
- q-repair: PASS. Advisory for the physician: "Close the fascia loosely if needed" in a forearm that later develops a compartment syndrome may be questioned. Leaving the fascial split open is a defensible alternative. Neither is keyed in the rubric.
- q-compartment: PASS. Writer's uncertainty 4 resolved: WFH chapter 10.4 supports continuous monitoring, pain as an indirect measure of compartment pressure, measuring the pressure, factor replacement and fasciotomy within 12 hours. Advisory: hf-p3 and hf-m6 can say they draw on WFH chapter 10.4 in the teaching ("If confirmed, fasciotomy within 12 hours of onset, under factor cover").
- q-dispo: PASS.
- **Rubric hf-h3: FAIL (C2).** The second teaching sentence, "His Tdap at age 14 means no vaccine is needed now.", cites `wfh`, which does not cover tetanus timing. **Fix:** delete that sentence. hf-m7 already teaches it with `cig-tetanus`.
- All other rubric items and sources: PASS.
- Uniqueness: PASS with a note. s14 multiple-trauma "Teen off a dirt bike" is also a 17 year old boy with severe hemophilia A and asks about emicizumab and the treatment centre. The injury, decisions and teaching here are new (laceration, falsely normal aPTT, aPCC, nerve deficit, delayed compartment syndrome). Advisory: change the age (for example to 15, or to an adult apprentice of 22) so the TF-IDF pass does not pair them.

## 3. aphasia-after-ed-cardioversion: FAIL

Numbers checked: AF onset 21:30, shock at 09:41, so 12 hours 11 minutes, "just over 12 hours" is right. CHADS-65: age 68, hypertension, diabetes = 3, so the 12 to 48 hour pathway was closed (CAEP needs fewer than 2). The stem's "90 minutes ago" matches 09:41 to 11:10. NIHSS 12 recomputed: LOC questions 2, commands 0, gaze 0, fields 0, face 2, right arm 3, right leg 1, ataxia 0, sensory 1, language 2, dysarthria 1, extinction 0. Tenecteplase 0.25 mg/kg x 74 kg = 18.5 mg, under the 25 mg cap. BP 176/94 is under 185/110. Apixaban on day 3 after a small infarct fits CSBPR section 6 (minor stroke, about day 3).

- q-first: PASS.
- q-history: PASS.
- q-ddx: PASS.
- q-reperfusion: PASS for the key. Writer's uncertainty 7 resolved: the CSBPR page, with the 2025 EVT update, still supports thrombolysis before EVT. See cv-m3 for the heparin teaching.
- q-post: PASS. Writer's uncertainty 6: labetalol 10 mg IV is the standard dose in the AHA/ASA 2019 BP table. It is in the model answer only and not keyed. Acceptable. If the writer adds the AHA/ASA source below, it supports the dose too.
- q-disclose: PASS. Advisory: in the model answer, "With her risk factors, a cardioversion that late usually needs blood thinners first." comes close to a conclusion about the standard of care before the review. CMPA advises giving the facts and not speculating. Consider "The timing of the rhythm and whether blood thinners were needed first will be part of the review."
- q-safety: PASS.
- **Rubric cv-m3 (and the c-heparin feedback): FAIL (C2, writer's uncertainty 5).** "Early full anticoagulation does not treat acute stroke and adds bleeding risk" cites `csbpr-acute`. CSBPR section 6 does not say this. It only says antithrombotics are avoided for 24 hours after thrombolysis and times anticoagulation by stroke size. **Fix, either:**
  (a) add a fourth source, Powers WJ, Rabinstein AA, Ackerson T, and colleagues. Guidelines for the early management of patients with acute ischemic stroke: 2019 update to the 2018 guidelines. A guideline for healthcare professionals from the American Heart Association/American Stroke Association. Stroke. 2019. The writer must open it and confirm the urgent anticoagulation recommendation (no benefit for urgent anticoagulation to prevent early recurrence or improve outcome), then cite it for cv-m3. Or
  (b) reword the cv-m3 teaching to CSBPR section 6: "Antithrombotics are avoided for 24 hours after thrombolysis until the 24 hour scan excludes hemorrhage. With atrial fibrillation, the stroke team starts the anticoagulant according to infarct size, about day 3 after a minor stroke." The unsafe label on c-heparin stays under C1, because it delays thrombolysis and thrombectomy.
- All other rubric items and sources: PASS. cv-h2 (fewer than 2 criteria, TEE alternative), cv-pr4 (OAC before discharge, DOAC preferred) and cv-m4 (below 185/110 for 24 hours) were confirmed in the opened pages.
- Uniqueness: PASS. No stroke after cardioversion exists in the bank. s03 and s24 arrhythmia SAMPs teach the CHADS-65 rule but not the stroke after it.

## 4. wildfire-evacuees-host-hospital: FAIL

Numbers checked: potassium 7.6 mmol/L with PR 240 ms, QRS 136 ms, peaked T waves and a rate of 48 is consistent. QRS narrowing to 104 ms after calcium is plausible. Boy's glucose 19.2 mmol/L with ketones 0.4 mmol/L is not DKA. Timeline: first plane 19:00, the department at 20:00, second plane message 21:30, landing 23:00, dialysis 23:30, handover at midnight.

- **Case level, uniqueness: FAIL (writer's uncertainty 10).** The index patient repeats batch01 dialysis-hyperkalemia-arrest ("Weakness after the storm"). Both are a community hospital in Ontario in the evening, a patient on hemodialysis who missed sessions because travel was cut off (storm and road against smoke and airstrip), weakness with bradycardia (42 and 48), severe hyperkalemia, a dialysis unit closed for the night, nephrology by phone, and the same decision between a local run with phone support and transfer (batch01 q-dialysis against wf-m2). This is the same diagnosis plus setting and the same key decision (Q500B brief rule 3). The evacuation layer is new, but q-first, q-hyperk and wf-m2 retell the batch01 case. **Fix:** replace the index patient with a time critical evacuee whose problem the bank does not have (the writer checks the bank first). Keep the parts that are new: triage by acuity over arrival order, parallel streams, the second plane's three dialysis patients routed through the province and the renal program, and the unverified man and the elder. Replace q-hyperk with a question about the new patient so there are still 6 questions on every path, and replace wf-m1, wf-m2 and wf-p2 to match. If the orchestrator rules that the overlap is acceptable, the remaining fixes below still apply.
- q-first: PASS apart from the uniqueness point.
- q-hyperk: PASS apart from the uniqueness point. Writer's uncertainty 8 (no doses): acceptable, because no rubric item asks for a dose.
- q-others: PASS. Writer's uncertainty 9: acceptable. The teaching sentences say only what the CAEP statement supports (vulnerable populations, continuity of care). The model answer confirms the buprenorphine dose before continuing it, which is safe.
- q-capacity: PASS.
- q-elder: PASS (WHO 2007, two identifiers and a standard approach for confused patients).
- q-close: PASS.
- **Rubric wf-m2: FAIL (C2).** "Dialysis is the definitive treatment in a patient with little urine" cites `warren`, a transport guideline. **Fix:** split the teaching. Cite `ukka-k` for "Dialysis is the definitive treatment for hyperkalemia in a patient on dialysis", and keep `warren` only for "If he must travel, the escort and monitoring must match his risk of arrhythmia". Or keep `warren` and drop the dialysis sentence.
- **Rubric wf-p1: FAIL (C2).** "A pulse of 48 with weakness after missed dialysis is a resuscitation level problem" is not what CTAS says. CTAS gives level 1 for shock, and an alert man with a BP of 172/96 and a rate of 48 does not reach it on vital signs alone. **Fix:** "CTAS assigns acuity by presenting complaint and modifiers such as vital signs. Bradycardia and weakness after missed dialysis need a monitor and an ECG at once, ahead of earlier arrivals."
- All other rubric items and sources: PASS. Writer's uncertainty 11 (five sources without a url): acceptable under brief rule 4.
- Uniqueness apart from the index patient: PASS. The only wildfire evacuation item is s25 asthma-copd "Evacuated ahead of the fire". s78 has no evacuation of a community. Its "arena evacuation" option is a downtime distractor.

## Writer's uncertainties, summary

1. PCP scope: acceptable (directive text quoted above). Advisory wording only.
2. tr-m6: acceptable.
3. Emicizumab 96 mg: confirmed.
4. Compartment syndrome source: WFH chapter 10.4 supports it. Advisory to point the teaching there.
5. Heparin: FAIL, see cv-m3.
6. Labetalol 10 mg: acceptable as the standard dose, model answer only.
7. Bridging thrombolysis: confirmed on the current CSBPR page with the 2025 update.
8. Hyperkalemia doses: acceptable.
9. Evacuee care sources: acceptable.
10. Overlap with batch01: FAIL, see case 4.
11. Sources without url: acceptable.

## Fails and exact fixes

1. ems-patch-blocked-tracheostomy-child, card: use the patch report values (pulse 152, resp 48, 84% on 10 L/minute by tracheostomy mask, BP added to the patch report or "Not recorded", temperature as measured at home or "Not recorded"). Move the 18:32 values into `exam-arrival`.
2. ems-patch-blocked-tracheostomy-child, c-send-now feedback: "an hour ago" becomes "less than half an hour ago".
3. ems-patch-blocked-tracheostomy-child, tr-pr5: add CMPA disclosure 2017 as a fifth source and cite it, or split the item.
4. ems-patch-blocked-tracheostomy-child, tr-h2: cite `doherty` for the suction catheter sentence, or reword it to the directive's indications.
5. forearm-laceration-hemophilia-emicizumab, hf-h3: delete "His Tdap at age 14 means no vaccine is needed now." from the teaching.
6. aphasia-after-ed-cardioversion, cv-m3: add the verified AHA/ASA 2019 early management guideline and cite it, or reword the teaching to CSBPR section 6 as given.
7. wildfire-evacuees-host-hospital, uniqueness: replace the index hyperkalemia patient, keeping 6 questions per path, or get an orchestrator ruling that the batch01 overlap is acceptable.
8. wildfire-evacuees-host-hospital, wf-m2: split the teaching between `ukka-k` and `warren`, or drop the dialysis sentence.
9. wildfire-evacuees-host-hospital, wf-p1: reword the CTAS teaching as given.

Advisories (not fails): the q-patch reinsertion wording, the s21 false passage echo, the age shared with s14 "Teen off a dirt bike", fascial closure, citing WFH chapter 10.4 for the compartment teaching, and the disclosure line in the q-disclose model answer.

Overall: FAIL (9 items)
