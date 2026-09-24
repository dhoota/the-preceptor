# Oral realignment: batch06

Batch `batch06`, 9 cases, realigned to the CFPC structured oral format as set out in `docs/ORAL_REALIGN_BRIEF.md`. Every case now has `durationMinutes: 12`, `reviewed: false` and `version: 2`. No patient or parent names remain anywhere in the batch. Only files in `src/cases/batch06/` were edited. `index.ts` is unchanged.

Checks run:

- `npx tsc --noEmit -p . 2>&1 | grep cases/batch06` gives no output.
- `REALIGN=batch06 CASE_BATCH=batch06 npx vitest run tests/cases.test.ts` gives 75 passed and 9 failed. The 9 failures are the expected ones, one per case: "is marked reviewed only if a physician signed it off".

"Before" row points use the legacy mapping from `LEGACY_CRITERION`: approach counts as history, data and diagnosis count as physical, and plan counts as management. No case had a process row before.

The same changes were made in all nine cases:

- The opening `say` node (`s-open`) now carries the scene facts from the old stem that are not history: the CTAS level, the staff and resources on call, and what the triage nurse or paramedic saw. Later nodes refer to these facts, so they could not be dropped.
- History from the old stem (the story, past history, medications, social history and collateral) now sits in findings. The candidate has to ask for it.
- The first relevant question in each case has one added model answer line that covers the new history items, so each new rubric item is tested by a question. No model answer went over 7 lines. No choice, branch, quality rating or scripted feedback changed, except to remove names.
- Existing items were moved to rows as follows. Recognition and interpretation items went to physical. Drugs, procedures, reporting and transfer decisions went to management. Communication with family, handover, team leadership, debriefing and reassessment went to process. Every critical flag is unchanged.
- The longest path in every case was already under 720 seconds, so no question `seconds` changed.
- Card fields the old case never gave are written "Not recorded". Nothing was invented. See the physician section of each case.

## 1. bronchiolitis-apnea

**Stem.** Went from 139 words to 60.

> You are working in the emergency department of a community hospital in eastern Ontario in January when the following patient arrives. The nearest pediatric ICU is 90 minutes away by road. A 6 week old girl is carried in by her parents with a runny nose and cough. Her mother says she went blue in the car on the way.

**Card.** Temperature 37.9°C rectal. Pulse 184/minute. Resp. 68/minute. BP Not recorded. O2 sat 86% on room air. Weight 3.9 kg (8.6 lb). Medications: None. Allergies: Not recorded.

**History moved to findings** (14 findings):

- `hpi` (new): 3 days of runny nose and cough, the 20 second blue spell in the car seat, pinking up when her mother rubbed her chest, and the nurse's "working hard".
- `birth` now holds only the birth history (34 weeks and 5 days, NICU stay, never ventilated).
- `meds` (new): no medications, no RSV monoclonal antibody, immunizations not yet due. Moved out of `birth`.
- `social` gained the brother at daycare with a cold.
- `s-open` gained CTAS 1, capillary refill 2 seconds, high flow in the department and the anesthetist on call from home.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 2 (1 item) | 7 (4 items), 20.0% |
| Physical and differential | 3 (2 items) | 3 (2 items) |
| Management | 24 (13 items) | 15 (9 items), 42.9% |
| Process of care | 0 | 10 (5 items) |
| Total | 29 | 35 |

- Added history items: br-h1, details of the spell (2 points). br-h2, birth history, NICU, RSV antibody and immunizations (2). br-h3, feeding, wet diapers and pertussis features (1).
- Added process item br-p1: reassessment after each step of support with a set trigger to escalate (1).
- Moved to process: br-l1, br-c1, br-c2, br-d1.

**Longest path seconds.** 585 before and 585 after.

**Citations:**

- `phac-pertussis` replaced by `cdc-pertussis`. The PHAC page (date modified 2026-05-13) does not give azithromycin dosing or the pyloric stenosis caution that br-m4 teaches. Replaced with Tiwari T, Murphy TV, Moran J. Recommended antimicrobial agents for the treatment and postexposure prophylaxis of pertussis. 2005 CDC guidelines. MMWR Recomm Rep. 2005. Verified at https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5414a1.htm
- `trekk-bronch` had no year. Now "Updated July 2023" with https://trekk.ca/resources/bottom-line-recommendations-bronchiolitis
- `paris`: added authors and https://www.nejm.org/doi/full/10.1056/NEJMoa1714855
- `aha-pals`: now names AHA and AAP, Circulation 2025. Verified at https://www.ahajournals.org/doi/10.1161/CIR.0000000000001368
- `cps-bronch`: added the principal authors. Verified 2014, updated November 2021, at https://cps.ca/en/documents/position/bronchiolitis

**Needs physician decision:**

- BP and allergies were never given. They show as "Not recorded".
- The CDC source is American. A Canadian source for infant azithromycin dosing would be better if you know one you trust.
- I did not open the TREKK bronchiolitis PDF, so I have not confirmed that it supports br-a2, br-a3, br-l1, br-c1 and br-c2.

## 2. severe-croup

**Stem.** Went from 134 words to 50.

> You are working in the emergency department of a community hospital in southern Ontario overnight when the following patient arrives. There is no pediatric ICU. The nearest one is 2 hours away. A 2 year old girl is carried in by her father with a harsh cough and noisy breathing.

**Card.** Temperature 38.1°C. Pulse 168/minute. Resp. 44/minute. BP Not recorded. O2 sat 93% on room air. Weight 13 kg (28.7 lb). Medications: Not recorded. Allergies: None.

**History moved to findings** (10 findings):

- `history`, now "History of presenting illness": gained her exact age (2 years and 4 months), waking at 02:00 with a barky cough, and her father trying the steamy bathroom.
- `immunizations` (new): immunizations including Hib, and no allergies. Moved out of `pmh`.
- `s-open` gained CTAS 2, alert, the nurse's report of stridor at rest and neck and rib retractions, and anesthesia and ENT on call within 30 minutes.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 2 (1 item) | 6 (4 items), 17.6% |
| Physical and differential | 6 (3 items) | 8 (4 items) |
| Management | 19 (11 items) | 11 (6 items), 32.4% |
| Process of care | 0 | 9 (6 items) |
| Total | 27 | 34 |

- Added history items: cr-h1, onset, prodrome and choking (2). cr-h2, fever, intake, rash and exposures (1). cr-h3, past croup, airway history and Hib (2). cr-h4, what was tried at home and how fast they could return (1).
- Added process item cr-p1: reassessment every 15 to 30 minutes (1).
- cr-a2 (the differential) moved from history to physical. Moved to process: cr-d1, cr-l1, cr-c1, cr-d2, cr-c2.

**Longest path seconds.** 540 before and 540 after.

**Citations:**

- `trekk-croup` had no year. Now "Version 5.0. 2026". Verified (last updated March 2026) at https://trekk.ca/resources/bottom-line-recommendations-croup
- `cps-croup`: added the author, Ortiz-Alvarez O. Verified 2017, updated March 2026, at https://cps.ca/en/documents/position/acute-management-of-croup
- `cmaj-croup`: added https://pubmed.ncbi.nlm.nih.gov/23939212/
- `aha-pals`: as in case 1.

**Needs physician decision:**

- The old stem said "regional emergency department". The stem now says community hospital. Change it to tertiary care centre if you meant a larger site.
- BP and medications were never given.

## 3. pediatric-dka

**Stem.** Went from 118 words to 46.

> You are working in the emergency department of a community hospital in Ontario when the following patient arrives. There is no pediatric ICU. The nearest PICU is 75 minutes away. A 9 year old girl is brought in by her mother with vomiting and belly pain.

**Card.** Temperature 37.2°C. Pulse 132/minute. Resp. 32/minute and deep. BP 104/68 mmHg. O2 sat 99% on room air. Weight 27 kg (59.5 lb). Medications: None. Allergies: Not recorded.

**History moved to findings** (12 findings):

- `hpi` (new): six vomits since yesterday, belly pain, three weeks of thirst and urination, loose clothes, and "head is fine but very tired".
- `meds` (new): no medications. Moved out of `history`.
- `history` (past and family history) is otherwise unchanged.
- `s-open` gained CTAS 2, GCS 15, the nurse's "meter reads HI" and fruity breath, and the pediatrician on call.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 2 (1 item) | 6 (4 items), 16.7% |
| Physical and differential | 5 (3 items) | 7 (4 items) |
| Management | 22 (11 items) | 16 (7 items), 44.4% |
| Process of care | 0 | 7 (5 items) |
| Total | 29 | 36 |

- Added history items: dk-h1, thirst, urination, weight loss and vomiting (2). dk-h2, headache and behaviour as a cerebral edema baseline (2). dk-h3, past history, medications, family history and infection (1). dk-h4, last void before potassium (1).
- Added process item dk-p1: a bedside flow sheet reviewed at set times (1).
- dk-a2 (cerebral edema risk factors) moved from history to physical. Moved to process: dk-l1, dk-c1, dk-d1, dk-c2.

**Longest path seconds.** 540 before and 540 after.

**Citations:**

- `trekk-dka` had no year. Now "Version 4.0. 2023". Verified (January 2023) at https://trekk.ca/resources/bottom-line-recommendations-diabetic-ketoacidosis
- `ispad-dka`: added authors and https://onlinelibrary.wiley.com/doi/10.1111/pedi.13406
- `pecarn-fluid`: added authors and https://www.nejm.org/doi/full/10.1056/NEJMoa1716816
- `dc-t1d`: added two authors. Chapter checked at https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34

**Needs physician decision:**

- The nurse's "meter reads HI" and fruity breath now sit in `s-open`, as in the seed batch. They give the diagnosis away early. You could move them to the `hpi` finding instead.
- Allergies were never given.

## 4. pediatric-status-epilepticus

**Stem.** Went from 129 words to 56.

> You are working in the emergency department of a community hospital in Ontario in July when the following patient arrives. There is a pediatrician in house. The nearest PICU is 60 minutes away. A 9 month old boy arrives by ambulance at 10:00. He is still seizing after a dose of intranasal midazolam from the paramedics.

**Card.** Temperature 37.3°C. Pulse 172/minute. Resp. 40/minute and shallow. BP 98/60 mmHg. O2 sat 90% on a non rebreather mask. Weight 8.5 kg (18.7 lb). Medications: None. Allergies: Not recorded.

**History moved to findings** (12 findings):

- `hpi` (new): found stiff and jerking at 09:40, midazolam 1.7 mg at 09:52, the paramedic's description, no fever, fussy for two days.
- `meds` (new): no regular medications, and the prehospital midazolam dose and time. "No medications" moved out of `pmh`.
- `s-open` gained CTAS 1 and the CT scanner on site.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 2 (1 item) | 6 (3 items), 17.1% |
| Physical and differential | 3 (2 items) | 5 (3 items) |
| Management | 23 (11 items) | 16 (7 items), 45.7% |
| Process of care | 0 | 8 (5 items) |
| Total | 28 | 35 |

- Added history items: se-h1, seizure onset and prehospital drugs with times (2). se-h2, formula mixing and extra water (2). se-h3, fever, illness, trauma, ingestion, development and seizure history (2).
- Added process item se-p2: keeping time from onset and moving on at set intervals (1).
- se-a1 (the differential) moved from history to physical. Moved to process: se-c1, se-p1, se-d1, se-c2.

**Longest path seconds.** 555 before and 555 after.

**Citations:**

- `trekk-se` had no year. Now "Version 1.2. 2025". Verified (May 2025) at https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus
- `eu-hypona`: added authors and https://pubmed.ncbi.nlm.nih.gov/24569125/
- `second-line-trials`: added https://pubmed.ncbi.nlm.nih.gov/31005386/. EcLiPSE (https://pubmed.ncbi.nlm.nih.gov/31005385/) and ESETT (https://pubmed.ncbi.nlm.nih.gov/31774955/) were also checked.
- `cps-se` (2021, https://cps.ca/en/documents/position/emergency-management-of-the-paediatric-patient-with-convulsive-status-epilepticus) and `cyfsa` were checked and are unchanged.

**Needs physician decision:**

- The card lists medications as "None" because he takes nothing regularly. The prehospital midazolam is in the stem and in the `meds` finding.
- se-h2 (feeding history) cites the CPS statement. I did not confirm that the statement discusses diluted formula.

## 5. pediatric-septic-shock

**Stem.** Went from 135 words to 57.

> You are working in the emergency department of a 40 bed community hospital in northern Ontario when the following patient arrives. There is no pediatrician on site. The nearest PICU is a 70 minute flight away. A 3 year old girl is brought in with a fever that started this morning. She is now hard to wake.

**Card.** Temperature 39.8°C. Pulse 176/minute. Resp. 38/minute. BP 78/40 mmHg. O2 sat 95% on room air. Weight 14 kg (30.9 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved to findings** (13 findings):

- `hpi` (new): fever at breakfast, leg pain, hard to wake by mid afternoon.
- `immunization` split in two. `immunization` keeps the vaccines. The new `social` finding has the home daycare and the household.
- `s-open` gained CTAS 1, GCS 13, the nurse's report of cold hands and feet, capillary refill 5 seconds and spreading non blanching spots, and the internist and anesthetist on call.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 2 (1 item) | 6 (4 items), 17.1% |
| Physical and differential | 6 (3 items) | 6 (3 items) |
| Management | 21 (10 items) | 15 (7 items), 42.9% |
| Process of care | 0 | 8 (4 items) |
| Total | 29 | 35 |

- Added history items: ss-h1, the timeline of fever, leg pain and drowsiness (2). ss-h2, meningococcal immunizations (1). ss-h3, close contacts for prophylaxis (2). ss-h4, medications, drug allergies and chronic illness (1).
- ss-a1 moved from history to physical. ss-m2 (deferring the LP) moved from physical to management. Moved to process: ss-l1, ss-p1, ss-c1, ss-d1.

**Longest path seconds.** 570 before and 570 after.

**Citations:**

- `ssc-peds`: added authors and https://pubmed.ncbi.nlm.nih.gov/41869844/ (Pediatr Crit Care Med 2026).
- `cps-mening` (2020, reaffirmed January 2026, https://cps.ca/en/documents/position/management-of-bacterial-meningitis) and `ont-idp` were checked and are unchanged.

**Needs physician decision:**

- Medications and allergies were never given. ss-h4 asks for them, but no finding answers. You may want to add a finding.

## 6. infant-nonaccidental-injury

**Stem.** Went from 133 words to 59.

> You are working in the emergency department of a community hospital in Ontario when the following patient arrives. The children's hospital with a child protection team is 45 minutes away. A 4 month old girl is brought in at 23:10 by her mother and her mother's partner because she has been fussy and screams when her diaper is changed.

**Card.** Temperature 36.9°C. Pulse 158/minute. Resp. 36/minute. BP Not recorded. O2 sat 99% on room air. Weight 6.1 kg (13.4 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved to findings** (11 findings):

- `hpi` (new): fussy for two days, screams at diaper changes, and the partner's account that she rolled off the change table two days ago.
- `labs` gained the triage capillary glucose of 5.4 mmol/L. The value is unchanged.
- `social` no longer names the patient.
- `s-open` gained that it is evening, CTAS 3, the pediatrician on call, CT and X ray on site, and the nurse's report of a swollen thigh, an ear bruise and adults in a hurry.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 3 (1 item) | 6 (3 items), 19.4% |
| Physical and differential | 6 (3 items) | 9 (4 items) |
| Management | 16 (8 items) | 6 (3 items), 19.4% |
| Process of care | 0 | 10 (5 items) |
| Total | 25 | 31 |

- Added history items: na-h1, mechanism, time, witnesses and delay, from each caregiver (2). na-h2, milestones including rolling (2). na-h3, past injuries, medical and family history, and the household (2).
- na-a1 (red flags) moved from history to physical. Management now holds na-m1, na-p2 (report to CAS) and na-d1. Moved to process: na-p3, na-c1, na-l1, na-d2, na-p1.

**Longest path seconds.** 555 before and 555 after.

**Citations:**

- `acr-abuse` had no year or authors. Now the current version: Expert Panel on Pediatric Imaging, Mirsky DM, Bardo DME, et al. ACR Appropriateness Criteria. Suspected physical abuse, child. Update 2025. J Am Coll Radiol. 2026. Verified at https://pubmed.ncbi.nlm.nih.gov/41860516/
- `ten4`: added authors and https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2778559
- `aap-abuse`: added https://publications.aap.org/pediatrics/article/135/5/e20150356/33747/The-Evaluation-of-Suspected-Child-Physical-Abuse
- `cyfsa`: checked. Section 81 covers bringing a child to a place of safety, with and without a warrant (https://www.canlii.org/en/on/laws/stat/so-2017-c-14-sch-1/latest/so-2017-c-14-sch-1.html). Unchanged.

**Needs physician decision:**

- Management now holds only 19% of the points, because reporting, family communication and removal of the child sit in process. Move na-l1 to management if you see it as treatment.
- BP, medications and allergies were never given.

## 7. toddler-airway-foreign-body

**Stem.** Went from 134 words to 54.

> You are working in the emergency department of a suburban community hospital in Ontario on a Saturday afternoon when the following patient arrives. There is no pediatric ENT surgeon on site. A 22 month old girl is carried in by her mother because she started coughing hard at a birthday party and cannot settle.

**Card.** Temperature 36.8°C. Pulse 172/minute. Resp. 40/minute. BP Not recorded. O2 sat 92% on room air. Weight 11.5 kg (25.4 lb). Medications: Not recorded. Allergies: None.

**History moved to findings** (10 findings):

- `hpi` (new): the witnessed choking on grapes and cheese at 14:20, the fruit tray, not settling, her mother's back slaps in the car, and no fever or cold before. Moved in part out of `history`.
- `history`, now "Past history": no allergies, healthy, immunized.
- `s-open` gained CTAS 1, the nurse's report of inspiratory noise and whole grapes on the tray, the anesthetist in the hospital, ENT on call and the children's hospital 40 minutes away.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 4 (2 items) | 5 (3 items), 16.1% |
| Physical and differential | 3 (1 item) | 5 (2 items) |
| Management | 19 (10 items) | 14 (6 items), 45.2% |
| Process of care | 0 | 7 (5 items) |
| Total | 26 | 31 |

- Added history items: fb-h1, witnessed event, timing and all foods within reach (2). fb-h2, prehospital back blows and any preceding fever or cold (2). fb-h3, allergies, past airway problems and immunizations (1).
- fb-a1 moved from history to physical. fb-a2 (reassessment after removal) moved to process. Moved to process: fb-l1, fb-d1, fb-c1, fb-l2.

**Longest path seconds.** 495 before and 495 after.

**Citations:**

- `apls` had no edition or year. Now the 7th edition, Wiley Blackwell, 2023. Verified at https://www.wiley.com/en-us/advanced-paediatric-life-support-a-practical-approach-to-emergencies-7th-edition-p-9781119716136
- `ilcor-fb`: now names AHA and AAP, Part 6, Circulation 2025. Verified at https://www.ahajournals.org/doi/10.1161/CIR.0000000000001370
- `cps-choking`: added the author (Cyr C) and journal. Verified at https://pmc.ncbi.nlm.nih.gov/articles/PMC3299355/
- `aha-pals`: as in case 1.

**Needs physician decision:**

- The CPS choking statement no longer appears on cps.ca. The old URL gives 404. It may be archived.
- fb-c2 teaches "quarter grapes lengthwise". CPS parent advice says to cut grapes in half lengthwise. I did not change the item.
- BP and medications were never given.

## 8. neonate-bilious-vomiting

**Stem.** Went from 139 words to 57.

> You are working in the emergency department of a community hospital in central Ontario overnight when the following patient arrives. There is no pediatric surgeon. The regional children's hospital is 2 hours away by road. A 6 day old girl is brought in by her parents because she has vomited several times tonight and is feeding poorly.

**Card.** Temperature 36.9°C. Pulse 176/minute. Resp. 48/minute. BP 68/40 mmHg. O2 sat 98% on room air. Weight 3.3 kg (7.3 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved to findings** (11 findings):

- `vomit`, now "History of presenting illness and vomit description": gained poor feeding, the phone photo of bright green vomit, and "sleepy but wakes when handled".
- `birth`, now "Birth history": gained birth weight 3.4 kg and discharge on day 2.
- `feeding` (new): meconium, breastfeeding and stools. Moved out of `birth`.
- `s-open` gained triage at 01:15, CTAS 2, capillary refill 3 seconds, the general surgeon on call and ultrasound by call back only.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 1 (1 item) | 6 (3 items), 18.2% |
| Physical and differential | 7 (3 items) | 8 (4 items) |
| Management | 19 (10 items) | 9 (5 items), 27.3% |
| Process of care | 0 | 10 (5 items) |
| Total | 27 | 33 |

- Added history items: bv-h1, colour, onset, force and blood in the vomit (2). bv-h2, meconium, stools, feeding and wet diapers (2). bv-h3, birth history and maternal GBS (2).
- bv-a2 (the differential) moved from history to physical. bv-d1 went to management. Moved to process: bv-l1, bv-c1, bv-l2, bv-c2, bv-c3.

**Longest path seconds.** 525 before and 525 after.

**Citations:**

- `acr-vomit` had no year or authors. Now Expert Panel on Pediatric Imaging, Alazraki AL, Rigsby CK, et al. J Am Coll Radiol. 2020. Verified at https://pubmed.ncbi.nlm.nih.gov/33153561/. PubMed shows no newer version.
- `langer`: added https://pubmed.ncbi.nlm.nih.gov/27894424/
- `ssc-peds`: as in case 5.

**Needs physician decision:**

- The bright green vomit is now only in a finding, not in `s-open`. The candidate has to ask about the colour. q-first ("How worried are you") assumes they did. Keep it this way, or put the nurse's remark back in `s-open`.
- Medications and allergies were never given.

## 9. sudden-unexpected-infant-death

**Stem.** Went from 157 words to 50.

> You are working in the emergency department of a community hospital in Ontario on a weekday morning when the following patient arrives. There is no pediatrician in house. Paramedics bring in a 3 month old girl at 06:48 with CPR in progress. She was found unresponsive in her parents' bed.

**Card.** Temperature 35.0°C rectal. Pulse: No pulse. Asystole on the monitor. Resp.: Apneic. i-gel airway in place. BP Not recorded. O2 sat Not recorded. Weight About 5.8 kg (12.8 lb). Medications: Not recorded. Allergies: Not recorded.

**History moved to findings** (10 findings):

- `hpi` (new), "Paramedic handover": found at 06:10 after a 03:00 feed, paramedics at 06:19, cool with no rigor or lividity, 29 minutes of CPR with i-gel and tibial IO, three doses of epinephrine, asystole throughout, fixed dilated pupils.
- `history` split in two. `history` keeps past health, vaccines and the runny nose. The new `sleep` finding has the bed sharing, mattress, duvet, substances and smoking.
- `family` and `breastfeeding` no longer name the parents.
- `s-open` gained CTAS 1, the social worker and spiritual care on call, and the parents arriving with the grandmother in a police car.

**Names removed.** The patient's name came out of 12 places, and the parents' first names came out of 2 findings. The model answer line "'Aria died...'" is now "Use the words dead or died, and use her name. 'Your daughter died. We were not able to restart her heart.'" The strong choice now reads "used her name". sd-c1 still rewards using the baby's name.

**Rubric points per row:**

| Row | Before | After |
|---|---|---|
| History | 2 (1 item) | 5 (3 items), 16.7% |
| Physical and differential | 2 (1 item) | 4 (2 items) |
| Management | 21 (10 items) | 9 (4 items), 30.0% |
| Process of care | 0 | 12 (6 items) |
| Total | 25 | 30 |

- Added history items: sd-h1, the paramedic timeline (2). sd-h2, birth, past health, vaccines and earlier events (1).
- Added physical item sd-x1: a full documented external exam (2). It was needed because the physical row had only one item.
- Management now holds sd-r1, sd-p1, sd-p2 and sd-d1. All six communication and debrief items went to process.

**Longest path seconds.** 525 before and 525 after.

**Citations:**

- `phac-sleep` had no year. Now "Updated 2021". Verified at https://www.canada.ca/en/public-health/services/health-promotion/childhood-adolescence/stages-childhood/infancy-birth-two-years/safe-sleep/joint-statement-on-safe-sleep-preventing-sudden-infant-deaths-canada.html
- `aap-death`: added the authors (O'Malley PJ, Barata IA, Snow SK) and https://publications.aap.org/pediatrics/article/134/1/e313/62357/Death-of-a-Child-in-the-Emergency-Department
- `spikes`: added authors, the full title and https://pubmed.ncbi.nlm.nih.gov/10964998/
- `aha-pals`: as in case 1. `coroners-act` was checked and is unchanged.

**Needs physician decision:**

- The card is for a child in arrest. BP and O2 sat were never given and show as "Not recorded". Pulse and Resp. describe the arrest.
- The whole paramedic handover is now a finding. Make sure you are happy that the candidate must ask for it before q-resus.
- Critical items stay at 2 (sd-c1 and sd-p1), the minimum.

## Across the batch

- New items cite sources the case already had. I picked the closest fit. I did not check each new teaching line against the full text of its source. Please look over the new `-h`, `-p` and `sd-x1` items.
- Medications and allergies were never given in most of these cases. The card says "Not recorded" rather than invent a value.
