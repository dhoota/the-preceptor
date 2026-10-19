# Q500 writer report, round 2: s66, Multiple trauma

Writer: Preceptor. File: `src/samps/s66/multiple-trauma.ts`, ids multiple-trauma-48 to multiple-trauma-52 (unchanged). All SAMPs stay `reviewed: false`, `version: 1`, author "Preceptor". This revision needs a fresh independent review.

## Required fixes and how each was done

| Item | Required fix | Change made |
|---|---|---|
| 48 q3 | Replace the defensible distractor "Cervical collar alone on the stretcher" and rewrite the key's reason from the statement's own words | Distractor replaced by "Side lying with a cervical collar". The key reason now quotes the statement: a long spine board, scoop stretcher or vacuum mattress "is recommended to assist with patient transfers", and time on backboards is minimized "with consideration for use of a vacuum mattress or padding" if prolonged. It adds that she moves between stretcher, aircraft and trauma centre over about 90 minutes. Side lying is rejected because the statement requires head, neck and torso alignment. Key moved from position 3 to position 2 (index 1). |
| 48 q4 | Remove "pediatric style schedule" | Sentence now reads exactly as the reviewer gave it: "A single dose of 10 mg/kg, 600 mg at 60 kg, is not the tested regimen and gives less drug than the 8 hour infusion." (10 x 60 = 600 mg.) |
| 49 q3 | Attribute only the briefing content to the CAFG | First sentence replaced with the reviewer's wording (brief the team on the plan, the response to failure and the triggers, empower everyone to call a trigger), then "A challenge-response checklist read aloud is a structured way to deliver that briefing." The briefing and empowerment wording was rechecked in the full text (Europe PMC, PMC8186352). |
| 50 q2 | Remove "his CT" from the bladder and renal sentence | Now "and his examination gives no sign of either." |
| 50 q3 | Key depended on the reference, plus "rising creatinine" | Option (a): the update now names the reference: "The department's rhabdomyolysis protocol follows the 2016 Critical Care systematic review." This follows the bank's precedent in multiple-trauma-28 ("The department follows the European guideline ..."). Under that named source the target is 300 mL/hour, so 30, 50, 100 and 150 mL/hour are all below it and only one key holds. The explanation now says "a raised creatinine", and adds the review's point that mannitol is reserved for output that stays below 300 mL/hour on fluids. Option (b) was rejected because distractors below 1 mL/kg/hour would still leave the s09 target (75 to 100 mL/hour) closest to a distractor, not the key. |
| 51 q1 | Repeat of multiple-trauma-33 q2 (intubate before transfer) | Removed as a decision. The intubation is now a fact in the q1 update ("His GCS falls to 8 (E2 V2 M4) and he is intubated"). The former q2 (screening CT angiography of the neck, which passed) is now q1. A new transport decision was written as q4: add invasive arterial pressure monitoring before the flight (key feature 8). Source: WSES 2023 consensus on severe TBI in a hospital without neurosurgery, recommendation 7 (invasive arterial pressure in addition to ECG, SpO2 and ETCO2, weak recommendation), with the text that the line "should not excessively delay the patient transfer". Distractors: central venous pressure line, cuff readings spaced to 15 minutes, automated pupillometry and optic nerve sheath ultrasound (the consensus could not recommend the last two as screening tools, recommendations 16 and 17). |
| 51 q3 | Repeat of airway-34 q2 teaching (nasal route through a skull base fracture) | Removed. The basal skull fracture stays as a stem detail in a new q2 with a different decision: no prophylactic antibiotics for a basal skull fracture with a CSF leak (Cochrane 2015, Ratilal et al., five RCTs, 208 participants, no reduction in meningitis or mortality, with or without leak, and one trial showing a shift to resistant nasopharyngeal flora). Mapped to key feature 3 (easily missed injuries and iatrogenic problems). The update no longer says "CT angiography is normal", which avoids a mock-mode cue to the q1 key. |
| 51 q4 (advisory) | Thin reason against 3% saline | Taken: "Hypertonic 3% saline is reserved for signs of herniation or raised intracranial pressure, and it is not the first fluid for hypotension after sedation." The fluid question is now q3. |

multiple-trauma-51 now has 4 questions: q1 CT angiography (KF3), q2 no prophylactic antibiotics (KF3), q3 0.9% saline (KF6), q4 arterial line before transfer (KF8). The ATLS source was dropped from this SAMP because no question in it cites ATLS any more. Cochrane and WSES were added (4 sources).

multiple-trauma-52 (passed) was not changed.

## Uniqueness check

Read the full catalogues `catalog/multiple-trauma.md`, `catalog/airway.md` and `catalog/environmental.md`. There is no head-injury catalogue (`headache.md` is a different topic). Also grepped every catalogue for the new angles:

- Arterial line before transfer: the only arterial line items in the bank are peri-intubation hemodynamic preparation (airway, shock), vasopressor support (infectious diseases, tox, IHD, arrhythmia, anaphylaxis oral cases) and the diving oral case. None tests monitoring for a transfer. The transfer items in the bank (ems-08, ems-09, burns-07, burns-11, multiple-patients-08, airway-11, the snowmobile oral case) cover tube securing, capnography, cuff pressure at altitude, gastric and urinary tubes, ventilator gas check, oxygen supply and documents. None keys an arterial line.
- Antibiotic prophylaxis for a basal skull fracture: absent from every catalogue. The only skull base items are airway-34 q2 (nasal route danger) and an eye stem detail.
- Rhabdomyolysis urine target: the decision stays, now under a named protocol. The bank holds two other targets (environmental s09, 1 to 1.5 mL/kg/hour, and the trench collapse oral case, 200 to 300 mL/hour), listed below for the physician.
- New patient numbers in 51 q4 (BP 128/76 mmHg, 45 minutes) were checked against the catalogues. No reuse found.

No new D1 repeat was created.

## Key positions and coverage after the revision

21 single questions, 1 menu. Single key positions (first to fifth): 5, 4, 2, 5, 5. No position is above 25 percent and every position is used.

| Key feature | Questions |
|---|---|
| 1 | 52 q1 |
| 2 | 48 q1, 49 q2, 49 q5, 52 q3 |
| 3 | 50 q4, 51 q1, 51 q2 |
| 4 | 50 q1 |
| 5 | 50 q2 |
| 6 | 48 q4, 50 q3, 51 q3 |
| 7 | 48 q2, 49 q1, 49 q3, 49 q4, 52 q2 |
| 8 | 48 q3, 51 q4, 52 q4, 52 q5 |

## Checks

`npx tsc --noEmit -p . | grep samps/s66`: no output. `SAMP_BATCH=s66 npx vitest run tests/samps.test.ts tests/samp-quality.test.ts tests/citations.test.ts`: 3 files, 136 tests passed. Strings scanned for dashes and semicolons: none. All updates are 45 words or fewer.

## Sources verified this round

- Fischer PE et al. Spinal motion restriction in the trauma patient: a joint position statement. Prehosp Emerg Care. 2018. Full text read: https://www.ena.org/sites/default/files/2025-08/Spinal%20Motion%20Restriction%20in%20the%20Trauma%20Patient.pdf (cited URL unchanged: https://pubmed.ncbi.nlm.nih.gov/30091939/).
- Law JA et al. CAFG part 2. Can J Anaesth. 2021. Full text via Europe PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC8186352/
- Chavez LO et al. Crit Care. 2016. https://pmc.ncbi.nlm.nih.gov/articles/PMC4908773/ ("targeting a urine output of 300 mL/h", mannitol only if fluids alone do not give output above 300 mL/h).
- Ratilal BO, Costa J, Pappamikail L, Sampaio C. Antibiotic prophylaxis for preventing meningitis in patients with basilar skull fractures. Cochrane Database Syst Rev. 2015. https://pubmed.ncbi.nlm.nih.gov/25918919/ (abstract read through Europe PMC, PMC10554555).
- Picetti E, Catena F, Abu-Zidan F, et al. Early management of isolated severe traumatic brain injury patients in a hospital without neurosurgical capabilities: WSES consensus. World J Emerg Surg. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9830860/ (full text read: recommendations 7, 16, 17 and the text on not delaying transfer).
- Checked but not used: Sever MS, Vanholder R, et al. Recommendations for the management of crush victims in mass disasters. Nephrol Dial Transplant. 2012 (field version read). It gives fluid rates (1000 mL/hour, then 500 mL/hour) but no 300 mL/hour urine target, so it could not support the key. Association of Anaesthetists 2019 brain-injured transfer guideline: full text was not reachable, so not cited.

## Uncertain, for the reviewer and physician

- Bank conflict to settle: three myoglobinuria urine targets now coexist (environmental s09 about 75 to 100 mL/hour, trench collapse oral case 200 to 300 mL/hour, multiple-trauma-50 q3 300 mL/hour under a named protocol). The naming makes 50 q3 single-keyed, but the bank should settle one position.
- 51 q4 rests on a weak WSES recommendation (82.9% agreement). The stem gives 45 minutes before the aircraft lands so that the line does not delay transfer, which the consensus requires.
- 51 q2 maps antibiotic prophylaxis to key feature 3 (iatrogenic problems: resistant flora, no benefit). A reviewer may prefer another key feature. Coverage does not depend on it.
- 48 q3: the statement does not mention side lying. It is rejected on the statement's requirement to keep head, neck and torso aligned on a device. She is conscious with a clear airway, so the lateral trauma position used for airway protection does not apply.
- Mock-mode cues already flagged by QA (48 q1 by the flight in q3 and q4, 49 q2 by the q3 update) are unchanged.

## Round 3

Fixes for `docs/reviews/q500-verify2-s66.md`. Only multiple-trauma-48 and multiple-trauma-50 changed. 49, 51 and 52 (passed) were not touched.

### Required fixes and how each was done

| Item | Required fix | Change made |
|---|---|---|
| 48 q1 | Repeated abdominal-pain-39 q2 (transfer now for a bleeding spleen). Replace it, and make the transfer a fact in a later update | Replaced by a menu question (KF6): which of her findings count toward the Assessment of Blood Consumption score for massive transfusion (key: pulse 124/minute, systolic BP 88 mmHg, free fluid on eFAST, so 3 of 4 points). Source: Nunez et al. J Trauma 2009 (penetrating mechanism, positive FAST, arrival SBP 90 mmHg or less, arrival pulse 120/minute or more, and a score of 2 or more 75% sensitive and 86% specific). The transfer is now a fact in the q3 update ("The trauma centre accepts her"). This also removes the mock-mode cue the first QA flagged for 48 q1. |
| 48 q3 (old) | Backboard-time sentence came from the statement's section on children | That question is now q4. The sentence now reads as the reviewer suggested. It cites item 8 (remove patients from a long backboard as soon as possible after arrival), then says that the section on children advises a vacuum mattress or padding when board time will be prolonged, to lower the risk of pain and pressure ulcers, and that the same risks apply to her for about 90 more minutes. |
| 48 q4 (old) | Repeated ems-35 q3 (tranexamic acid 1 g over 8 hours). Replace with a non-TXA decision | Replaced by a new q3 (KF4, modifying factor): her mother brings a blood bank card showing an anti-Kell antibody, and antigen-negative units are 3 hours away. Key: keep giving uncrossmatched group O red cells. Source: Ringel et al. Transfus Med Hemother 2022 (6 109 emergency transfusions, 19 against clinically significant alloantibodies, none with significant hemolysis, "highly safe"). The CRASH-2 source was removed from the file. The ATLS source was dropped from 48 because no 48 question cites it any more. |
| 50 q2 | Repeated burns-18 q2 (myoglobinuria) with reused labs. Needs a new KF5 decision and new labs | Replaced by KF5: after 4 L of 0.9% saline his bicarbonate falls. Is this hidden bleeding or an iatrogenic hyperchloremic acidosis? New labs: Na 142, Cl 119, HCO3 16, lactate 1.1, beta-hydroxybutyrate 0.2 mmol/L, creatinine 81 umol/L, venous pH 7.28. Anion gap 142 minus (119 plus 16) = 7. Key: hyperchloremic acidosis from saline. Source: European trauma bleeding guideline, sixth edition, 2023 (text under recommendation 10: base deficit reflects hypoperfusion "provided there is no other cause of metabolic acidosis such as renal failure or hyperchloremia", and lactate reflects it more specifically). The text under recommendation 15 also notes the concern that saline causes hyperchloremic acidosis. No CK, creatinine or potassium value from burns-18 or the trench case is reused. |
| 50 q3 | Repeated environmental-13 q3 and burns-06 q3 (urine target), and overstated mannitol. Needs a KF6 decision outside rhabdomyolysis fluids | Replaced by KF6: before fixation of an undisplaced tibial plateau fracture he is not bleeding and takes no anticoagulant, and his INR is 1.5 after 5 L of crystalloid. Key: no correction of the INR. Source: Canadian Society for Transfusion Medicine, Choosing Wisely Canada list (last updated June 2018), item 3: "Don't transfuse plasma to correct a mildly elevated (<1.8) INR ... before a procedure." The Chavez source and every rhabdomyolysis fluid, mannitol and urine target claim are gone from the file. |
| 50 stem | Follows from the above | Legs changed from "swollen and bruised" to "Both shins are bruised, the calves are soft and the foot pulses are palpable", so the case no longer points to crush syndrome. q1 and q4 (passed) still read correctly. The glucose result is no longer restated in the q2 update, which removes a mock-mode cue to the q1 key. |

### Uniqueness check, round 3

Grepped all catalogues (multiple-trauma, abdominal-pain, ems, burns, environmental, airway and the rest), plus `src/samps` and `src/cases`:

- ABC score or massive transfusion prediction: absent everywhere.
- Uncrossmatched blood despite an alloantibody: absent. The bank's blood bank items are about group O RhD negative in women (multiple-trauma-42) and Rh immune globulin, which are different decisions.
- Hyperchloremic acidosis: no question keys it. It appears only as a harm in a gi-bleed and shock list, and in explanations that prefer Ringer's lactate for burns (burns s26) and sepsis (shock s16). Those teach fluid choice. 50 q2 tests reading a falling bicarbonate as iatrogenic rather than as hidden bleeding.
- I also considered and rejected these, because each was already in the bank: transient responder classification (taught in multiple-trauma-21's explanation), recurrent hypoglycemia (cva, loc), compartment syndrome (burns, environmental, analgesia-sedation), central cord syndrome (msk s54), Hb not yet fallen (gi-bleed, shock, s45, s50), euglycemic DKA (abdominal-pain), ITP with platelets and IVIG (loc), LMWH reversal (no verifiable Canadian source found).

### For the reviewer

- 50 q3 and gi-bleed-33 q1 (s39) both key a choice not to correct an INR. gi-bleed-33 is an active variceal bleed in cirrhosis with an INR of 2.0 (rebalanced hemostasis). 50 q3 is a non-bleeding, noncirrhotic trauma patient before a procedure, with an INR under the CSTM 1.8 threshold. The population, phase of care and evidence differ, but the reviewer should decide whether this counts as the same decision.
- 50 q2 is mapped to KF5. A worsening base deficit is the subtle change, and the complication it signals is iatrogenic, not hemorrhage. A reviewer may see it as KF6 (fluid targets). Coverage holds either way only if 50 q2 stays KF5, because it is the batch's only KF5 item.
- 48 q3: the case does not say how common Kell-negative donor units are, so the explanation rests only on the Ringel data.

### Coverage and key positions after round 3

20 single questions and 2 menus (48 q1, 49 q1). Single key positions, first to fifth: 5, 4, 2, 4, 5. No position is above 25 percent and every position is used.

| Key feature | Questions |
|---|---|
| 1 | 52 q1 |
| 2 | 49 q2, 49 q5, 52 q3 |
| 3 | 50 q4, 51 q1, 51 q2 |
| 4 | 48 q3, 50 q1 |
| 5 | 50 q2 |
| 6 | 48 q1, 50 q3, 51 q3 |
| 7 | 48 q2, 49 q1, 49 q3, 49 q4, 52 q2 |
| 8 | 48 q4, 51 q4, 52 q4, 52 q5 |

Checks: the s66 tsc grep prints nothing. `SAMP_BATCH=s66` vitest: 3 files, 136 tests passed. No dashes or semicolons in strings.

### Sources verified in round 3

- Nunez TC et al. Early prediction of massive transfusion in trauma: simple as ABC (assessment of blood consumption)? J Trauma. 2009. https://pubmed.ncbi.nlm.nih.gov/19204506/ (abstract read through PubMed E-utilities).
- Ringel F et al. Safety of uncrossmatched ABO-compatible RBCs in alloimmunized patients with bleeding. Transfus Med Hemother. 2022. https://pmc.ncbi.nlm.nih.gov/articles/PMC9421688/ (abstract read through Europe PMC).
- Rossaint R et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/ (full text read through Europe PMC: recommendations 10 and 15 and their text).
- Canadian Society for Transfusion Medicine. Transfusion medicine: ten things physicians and patients should question. Choosing Wisely Canada. Last updated June 2018. https://choosingwiselycanada.org/wp-content/uploads/2017/02/Transfusion-medicine.pdf (PDF text read, item 3). The same wording is on https://www.transfusion.ca/Education/Choosing-Wisely/CSTM-Choosing-Wisely-List
- Fischer PE et al. 2018 (ENA full text), items 6, 8 and 10.v. Reread for the 48 q4 wording.

## Round 4

Fixes for `docs/reviews/q500-verify3-s66.md`. Only multiple-trauma-48 q1 and multiple-trauma-50 changed. 49, 51 and 52 were not touched.

| Item | Required fix | Change made |
|---|---|---|
| 48 q1 | Only the keyed vitals were labelled "Arrival", and "validation cohort" misdescribed the study | All four vital-sign options now start with "Arrival" (pulse, respiratory rate, systolic BP, temperature). The options were re-sorted and `correct` changed from [0, 1, 3] to [0, 2, 5], which is the same three keyed findings. "In the validation cohort" now reads "In the original study of the score". |
| 50 q2 (now q3), acid-base | Arrival chloride and bicarbonate, and the saline volume, were missing from the case | The update now reads: "He is alert after 4 L more of 0.9% saline through peripheral lines over 4 hours. ... chloride 119 (106 on arrival), bicarbonate 16 (24 on arrival) ...". That is 45 words. The explanation now traces the rise in chloride (106 to 119) and the fall in bicarbonate (24 to 16) to the case. Anion gap now 142 minus (119 plus 16) = 7. Arrival gap with a sodium in the 140s is normal (about 12). Still key feature 5. |
| 50 acid-base, advisory | Saline limit | Added: "It favours a balanced solution and limits 0.9% saline to a maximum of 1 to 1.5 L when it is used." Verified in the full text of the sixth edition (PMC9977110): that 0.9% sodium chloride, if used, "should be limited to a maximum of" 1 to 1.5 L. |
| 50 q3 (INR) | Repeated signed gi-bleed-33 q1. Replace with a decision not in the bank, key not in first position | Replaced by a new q4 (KF4, modifying factor): insulin orders for his first ward day, when he will eat little after a hypoglycemic crash. Home doses: glargine 40 units and aspart 10 units with meals. Key: "Reduced glargine and correction" (fifth position). Source: Diabetes Canada 2018 chapter 16, In-hospital management of diabetes. It says basal insulin "should not be withheld", bolus "can be withheld or reduced in people who are not eating regularly", a proactive basal, bolus and correction plan is recommended "instead of only correcting high BG", therapy should be modified after BG of 3.9 mmol/L or less, and the preprandial target is 5.0 to 8.0 mmol/L. The tibial plateau fracture, the 5 L total and the CSTM source are gone, so no later text depends on a 5 L figure. |
| 50 q4, advisory | Timeline of the humeral needle | Taken. The arm-swelling question (IO extravasation) moved from q4 to q2, straight after the glucose question, and the acid-base update says the saline ran through peripheral lines. The key positions of the moved questions did not change (IO stays fifth, acid-base stays third). |

New order of multiple-trauma-50: q1 capillary glucose (KF4), q2 IO extravasation (KF3), q3 hyperchloremic acidosis (KF5), q4 insulin plan (KF4). Sources: Diabetes Canada chapter 21, European guideline sixth edition, Diabetes Canada chapter 16 and Petitpas 2016.

### Uniqueness, round 4

- Inpatient insulin plan (keep basal, reduce dose, add correction, avoid correction-only): grepped every catalogue and `src/samps` and `src/cases` for sliding scale, basal-bolus, correction insulin, basal insulin, and holding or continuing glargine. The only hit is the DKA insulin question in abdominal-pain s19, which is a different decision.
- Driving advice after hypoglycemia was considered and rejected, because seizures s16 already keys it as a write-in.

### Coverage and positions after round 4

20 single questions and 2 menus. Single key positions, first to fifth: 5, 4, 2, 4, 5. KF4 is now 48 q3, 50 q1 and 50 q4. KF5 is 50 q3. The other key features are as in round 3, except that KF3 now lists 50 q2 (moved from q4) and KF6 is 48 q1 and 51 q3.

Checks: the s66 tsc grep prints nothing. `SAMP_BATCH=s66` vitest: 3 files, 136 tests passed. No dashes or semicolons in strings.

### Sources verified in round 4

- Diabetes Canada Clinical Practice Guidelines Expert Committee, Malcolm J, Halperin I, et al. In-hospital management of diabetes. Can J Diabetes. 2018. https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16 (page read: recommendations 4, 5 and 9, and the text on basal insulin when not eating).
- Rossaint R et al. European guideline, sixth edition. Crit Care. 2023. https://pmc.ncbi.nlm.nih.gov/articles/PMC9977110/ (saline limit sentence read in the full text).

### For the reviewer

- The year for chapter 16 is the 2018 guideline edition, the same as the chapter 21 citation already in this SAMP. The chapter web page itself does not print a year.
- 50 q4 says the IV insulin infusion is unnecessary because he is not critically ill. That is general practice. The chapter text I read does not state it in those words.

## Round 5

50 q4 explanation only (per `docs/reviews/q500-verify4-s66.md`): the text from "and it suggests changing therapy" to "risk another low." is replaced with the reviewer's wording. The reason now rests on the case facts (he will eat little, which Diabetes Canada chapter 16 lists as a hypoglycemia risk factor, "sudden reduction in oral intake", and a low glucose may have caused his crash) and ends "risk hypoglycemia." No glucose value was added anywhere. Key, options and update unchanged. The s66 tsc grep prints nothing and the s66 tests pass (3 files, 136 tests).
