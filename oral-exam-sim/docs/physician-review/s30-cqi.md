# s30: Continuous quality improvement (CQI)

20 SAMPs. All are reviewed: false until signed off. The key is marked on each question.

## Reviewer flags for this batch

Quoted from the pipeline notes and the review reports, each with its report name. A later review may have fixed an earlier flag. The SAMP text below is always the current version.

- s30 cqi-28 stem depends on province (shared dispensing records). cqi-28 q1 med history requirement applies to admitted patients.
- s44 CTAS 2025 revision unchecked (16 q1, 29 q1 q3, 34 q1 q2). 24 q2 SOFA 3 not reachable. 20 q4 SALT rescue breaths. s30 cqi-18 q2 apixaban 'daily' distractor.
- cqi-36 and cqi-37 duplicate cqi-22 and cqi-29. Confirm that both are rejected. *(samps-s30-lensA.md)*
- cqi-23 q3 overlaps multiple-patients (s13) q2 on access block and overcapacity protocols. Decide whether a different output intervention should be keyed (for example, inpatient discharge before 11:00 or weekend discharge) or whether the overlap is acceptable across topics. *(samps-s30-lensA.md)*
- cqi-18 q3 overlaps multiple-patients (s13) q4 on critical result read-back. Decide whether to keep it or rewrite it around another SBAR or communication point. *(samps-s30-lensA.md)*
- cqi-21 q3 repeats the pause lesson in cqi-10. It is a minor overlap. *(samps-s30-lensA.md)*
- cqi-28 stem: the interaction was missed because the prescription was filled at another pharmacy. In provinces with a shared dispensing record (BC PharmaNet, Alberta Netcare, Saskatchewan PIP, Manitoba DPIN), the dispensing pharmacist would likely have seen the warfarin. The q2 key (check against provincial drug data) assumes such data exist but were not used at the ED. Consider naming a province or adding that the ED had no access to the provincial record. *(samps-s30-lensA.md)*
- cqi-28 q1 cites the ROP medication reconciliation practice, which in the ED applies to patients with a decision to admit. This patient was discharged. The BPMH definition is correct, but the practice is not an accreditation requirement for this visit. *(samps-s30-lensA.md)*
- cqi-36 and cqi-37 repeat cqi-22 and cqi-29 word for word, apart from the planted faults. They would fail the near-duplicate stem rule. Recommend rejecting both even after the fixes. *(samps-s30-lensB.md)*
- Several CQI stems do not use the standard "presents to the emergency department" opening: cqi-17, cqi-19, cqi-23, cqi-31, cqi-32 and cqi-35. cqi-19 and cqi-25 have an empty vitals field. This suits audit-style cases and the tests pass. Low confidence, left unchanged. *(samps-s30-lensB.md)*
- cqi-32 q3 cites Perla 2011 (run charts) for the tampering point. Lens A found the tampering sentence in Perla. Benneyan 2003 would be a closer fit, but Perla would then be uncited in that SAMP. Left as is. *(samps-s30-lensB.md)*
- cqi-18 q2 distractor "He takes apixaban and naproxen daily": apixaban is taken twice daily. It is a distractor, and "daily" reads as "every day". Low, left unchanged. *(samps-s30-lensB.md)*

Review reports: docs/reviews/writer-s30.md, samps-s30-lensA.md, samps-s30-lensB.md

## SAMPs

### cqi-16: A teenager on an antidote infusion

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 15-year-old girl is brought to the emergency department by her mother 5 hours after taking about 40 tablets of acetaminophen 500 mg. At triage she stood on a scale that reads in pounds. The nurse typed 110 into the weight field of the electronic record, which stores weight in kilograms by default. The acetylcysteine order set calculated the first bag from 110 kg. Twenty minutes into the first bag she develops flushing, hives and wheeze. The pharmacist then notices the weight error. On a metric scale she weighs 50 kg.

- Temperature: 36.9°C oral
- Pulse: 118/minute
- Resp.: 24/minute
- BP: 104/62 mmHg
- O2 sat: 95% on room air
- Weight: 50 kg

#### Q1
*Update:* The infusion is stopped. She receives diphenhydramine and salbutamol and her symptoms settle. Acetylcysteine restarts at the dose for 50 kg.

**Which of the following terms best classifies this event when the incident is reported?**

- A. Adverse drug reaction
- B. Harmful incident  **(key)**
- C. Near miss incident
- D. No harm incident
- E. Recognized complication

*Explanation:* The weight error reached her and she had flushing, hives and wheeze that needed treatment while the dose ran at about twice the intended amount, so this is a harmful incident, the term that replaces adverse event. A no harm incident reaches the patient without discernible harm, and a near miss does not reach the patient at all. Filing it as an adverse drug reaction or a recognized complication hides the dosing error. The disclosure guidelines warn against labelling harm as a complication before the incident has been examined.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines: being open with patients and families. 2011. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/

#### Q2
*Update:* The charge nurse asks what to do with the first infusion bag and the pump that delivered it.

**Which of the following is the most appropriate action for the bag and the pump now?**

- A. Discard the bag as biohazard waste
- B. Keep the pump running on her infusion
- C. Label and secure both for review  **(key)**
- D. Return the bag to pharmacy
- E. Send the pump for biomedical repair

*Explanation:* Securing items is part of the immediate response after an incident. The bag, its label and the pump hold the evidence of what was prepared and what was delivered, so both are labelled with lot and serial numbers and kept in a restricted place for the review team. Discarding the bag or returning it to pharmacy destroys that evidence. Keeping the pump in use overwrites its history. Nothing suggests the pump failed, so sending it for repair misses the point and may erase its log.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q3
*Update:* The incident review confirms that the triage scale can display pounds or kilograms and that weight is typed into the record by hand.

**Which of the following corrective actions rank highest on the hierarchy of effectiveness for preventing this error?**

Select 2.

- A. Education session on unit conversion
- B. Independent double check of weight
- C. Memo about recording weight units
- D. Policy to record weight in kilograms
- E. Poster with a pound to kilogram table
- F. Scale that transmits weight to the chart  **(key)**
- G. Triage scales locked to kilograms  **(key)**

*Explanation:* Locking the scales to kilograms is a forcing function: a weight in pounds can no longer be produced. A scale that sends its reading straight to the record is automation that removes hand typing, the step where 110 pounds became 110 kg. ISMP Canada recommends kilogram-only scales for this reason. A double check sits lower, with reminders and checklists, because it relies on vigilance. Policies, memos, posters and education are the weakest tier. They are needed, but alone they do not change the conditions that allowed the error.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* ISMP Canada. Weight-based medication dose errors. ISMP Canada Safety Bulletin. Volume 16, issue 9. 2016. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2016-09-WeightBasedDoseErrors.pdf

#### Q4
*Update:* She is alert, understands her care and wants her mother to stay with her.

**Which of the following is the most appropriate approach to disclosing this incident?**

- A. Disclose after the incident review ends
- B. Disclose now to her and her mother  **(key)**
- C. Disclose only to her mother as guardian
- D. Let the pharmacist lead the disclosure
- E. Mention it only if she asks about it

*Explanation:* She was harmed, so disclosure is required, and it should happen as soon as reasonably possible, focused on the facts known now. She is capable of understanding her care, so the conversation is with her, and her mother can join because she asked for that. Waiting for the review delays information she is owed, and the review findings come later in a post-analysis disclosure. Speaking only to her mother bypasses a capable patient. The most responsible physician usually leads, not the pharmacist who found the error. Disclosure never depends on the patient asking.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines: being open with patients and families. 2011. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/

### cqi-17: A dose stopped at the stretcher

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 79-year-old woman with a urinary tract infection is on a hallway stretcher in the emergency department. The hallway spaces have no numbers. A nurse arrives with IV metoprolol 5 mg that was ordered for a 76-year-old woman with the same first name on the next stretcher. The nurse reads out the first name on the order and asks if it is hers. She nods. Before the dose is given, her daughter says her mother is hard of hearing and takes no heart medication. The nurse checks the wristband and stops. The dose is not given.

- Temperature: 37.9°C oral
- Pulse: 62/minute
- Resp.: 18/minute
- BP: 106/60 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following pairs is most appropriate to confirm her identity before a medication is given?**

- A. Date of birth and hallway location
- B. First name and a nod of agreement
- C. Full name and attending physician
- D. Full name and date of birth  **(key)**
- E. Stretcher location and diagnosis

*Explanation:* Two person-specific identifiers, such as full name and date of birth, are confirmed with the patient by asking open questions like What is your name, not by reading a name for a yes or no reply. A nod from a woman who is hard of hearing confirmed nothing here. A hallway space or stretcher location is not person-specific and should not be used. The attending physician and the diagnosis are shared by many patients, and two women on this hallway could share both.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q2
*Update:* Her daughter asks what the nurse was about to give. The patient is anxious and asks whether she was given the wrong medicine.

**Which of the following is the most appropriate way to handle disclosure with her and her daughter?**

- A. Ask the charge nurse to discuss it later
- B. Defer discussion until the review ends
- C. Explain the near miss and apologize  **(key)**
- D. Refer the daughter to patient relations
- E. No discussion because no harm occurred

*Explanation:* The dose never reached her, so this is a near miss, and disclosure of a near miss is discretionary. The guidelines advise telling the patient when she is already aware of the event or when a safety risk continues. Both apply: her daughter saw it, and a patient with the same first name is still on the next stretcher. A prompt explanation and apology relieves her worry and keeps trust. Deferring the talk, handing it to patient relations or to a colleague later, or saying nothing leaves an anxious patient without an answer.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines: being open with patients and families. 2011. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/

#### Q3
*Update:* The quality lead finds 11 other wrong-patient near misses reported from hallway spaces in the last 6 months.

**Which of the following is the most appropriate method to analyze these events?**

- A. Comprehensive analysis of this event
- B. Concise analysis of this event
- C. Failure mode and effects analysis
- D. Morbidity and mortality rounds
- E. Multi-incident analysis of the group  **(key)**

*Explanation:* Multi-incident analysis reviews several low harm incidents and near misses together, grouped by theme, and can show system patterns that one case cannot. Twelve wrong-patient near misses from hallway spaces are such a theme. A concise or comprehensive analysis of this single event would miss what the other 11 share. Failure mode and effects analysis is a prospective method, used to test a new or changed process before it goes live. Morbidity and mortality rounds are for teaching and discussion and are not a structured incident analysis.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q4
**Which of the following system changes is most likely to prevent a wrong-patient medication error in hallway spaces?**

- A. Bedside barcode scanning of wristbands  **(key)**
- B. Education on two person identifiers
- C. Name alert stickers on both charts
- D. Policy to confirm identity twice
- E. Second nurse check of each identity

*Explanation:* Scanning the wristband and the medication at the bedside is automation. It matches the dose to the patient without depending on hearing, memory or a leading question, which were the weak points here. On the hierarchy of effectiveness, name alert stickers and a second nurse check are reminders and double checks. They help, but they still rely on attention in a crowded hallway. A policy and education are the lowest tiers and do not change the conditions that allowed the near miss.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

### cqi-18: A night phone call to a consultant

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a community hospital emergency department at night. A 74-year-old man presents with two episodes of melena and one of coffee-ground emesis over 6 hours. He takes apixaban for atrial fibrillation and naproxen for arthritis. He had a hip replacement 4 years ago. He is pale and diaphoretic. Hemoglobin is 71 g/L, down from 128 g/L 3 months ago. A junior resident phones the on-call gastroenterologist at home. The resident opens with the arthritis history and the hip replacement. After 3 minutes the consultant asks what the resident needs.

- Temperature: 36.6°C oral
- Pulse: 112/minute
- Resp.: 20/minute
- BP: 96/58 mmHg
- O2 sat: 97% on room air
- Weight: 78 kg

#### Q1
**Which of the following should the resident have stated first on this call, using the SBAR structure?**

- A. Anticoagulant and timing of last dose
- B. Hemoglobin trend over 3 months
- C. Past medical and surgical history
- D. Request for urgent endoscopy
- E. Situation and main concern  **(key)**

*Explanation:* SBAR opens with the situation: who is calling, about which patient, and the main concern, here an older man with an upper GI bleed who is hypotensive and tachycardic. That frames everything that follows for a consultant woken at home. The anticoagulant, the hemoglobin trend and the past history belong to the background. The request for endoscopy is the recommendation and comes last. Opening with the hip replacement, as this resident did, buries the urgent problem.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Haig KM, Sutton S, Whittington J. SBAR: a shared mental model for improving communication between clinicians. Jt Comm J Qual Patient Saf. 2006. https://pubmed.ncbi.nlm.nih.gov/16617948/

#### Q2
**Which of the following statements best fits the assessment element of SBAR for this patient?**

- A. He had a hip replacement 4 years ago
- B. He takes apixaban and naproxen daily
- C. I am calling about a man with melena
- D. I think he has an unstable upper GI bleed  **(key)**
- E. I would like you to see him for endoscopy

*Explanation:* The assessment is the caller's interpretation of the problem. An unstable upper GI bleed sums up the melena, the coffee-ground emesis, the fall in hemoglobin to 71 g/L, the tachycardia and the soft BP. The statement about melena is the situation. The medications and the hip replacement are background, and the hip replacement adds nothing to this call. The request to see him for endoscopy is the recommendation.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Haig KM, Sutton S, Whittington J. SBAR: a shared mental model for improving communication between clinicians. Jt Comm J Qual Patient Saf. 2006. https://pubmed.ncbi.nlm.nih.gov/16617948/

#### Q3
*Update:* An hour later the repeat hemoglobin is 58 g/L. The resident calls the gastroenterologist back and plans to end the call with a clear recommendation.

**Which of the following statements best fits the recommendation element of SBAR for this second call?**

- A. He takes apixaban and naproxen
- B. His hemoglobin has fallen to 58 g/L
- C. I think he is still bleeding
- D. Please come in now for urgent endoscopy  **(key)**
- E. What do you think we should do

*Explanation:* The recommendation states what the caller needs and how soon. Asking the consultant to come in now for urgent endoscopy is specific and time bound, and a hemoglobin of 58 g/L in a man who is tachycardic with a soft BP justifies it. The new hemoglobin updates the situation. Apixaban and naproxen are background. Saying he is still bleeding is an assessment. Asking what the consultant thinks leaves the decision open and invites delay, which is the gap the recommendation step of SBAR is meant to close.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Haig KM, Sutton S, Whittington J. SBAR: a shared mental model for improving communication between clinicians. Jt Comm J Qual Patient Saf. 2006. https://pubmed.ncbi.nlm.nih.gov/16617948/

#### Q4
*Update:* The department decides that all consultant calls should use SBAR.

**Which of the following would best keep structured communication reliable in the department over time?**

- A. Annual lecture on phone etiquette
- B. One-time SBAR teaching at orientation
- C. Periodic audit of calls with feedback  **(key)**
- D. Poster describing SBAR beside phones
- E. Written SBAR policy in the manual

*Explanation:* A standard only holds if someone checks it. Accreditation Canada expects the effectiveness of information transfer to be evaluated, for example by direct observation or record audit, with improvements made from the feedback. Periodic audit of real calls with feedback to residents and staff does this and makes SBAR part of routine work. A one-time session or an annual lecture fades. A poster and a written policy describe the standard but do not show whether anyone uses it.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

### cqi-19: A long wait with a deformed forearm

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 7-year-old boy with an obviously deformed forearm waited 110 minutes in the emergency department waiting room before his first dose of ibuprofen. He cried throughout the wait. You chair the department's quality committee. An audit of 60 children aged 3 to 17 years with suspected long-bone fractures finds a median time from triage to first analgesic of 94 minutes. Only 22% received an analgesic within 30 minutes of triage. Triage nurses cannot give analgesics without a physician order. The team proposes a nurse-initiated analgesia protocol at triage.


#### Q1
**Which of the following is the best aim statement for this improvement project?**

- A. 80% given analgesia within 30 minutes by June 30  **(key)**
- B. Improve fracture pain care across the department
- C. Median time to analgesia below 90 minutes
- D. Nurse-initiated ibuprofen at triage by June 30
- E. Reduce pain scores in the waiting room

*Explanation:* A good aim statement is specific, measurable and time bound. Raising the share of these children given an analgesic within 30 minutes from 22% to 80% by a set date meets all three and ties directly to the gap the audit found. Improving pain care across the department is too vague to measure. A median below 90 minutes barely moves from the baseline of 94 minutes and has no date. Nurse-initiated ibuprofen is a change idea, not an aim. Reducing pain scores has no target or deadline.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28934995/

#### Q2
**Which of the following is the most appropriate first test of the triage analgesia protocol?**

- A. All triage nurses on all shifts at once
- B. One triage nurse on two day shifts  **(key)**
- C. Pilot at a partner hospital first
- D. Randomized trial across two sites
- E. Wait for a full year of baseline data

*Explanation:* A Plan-Do-Study-Act cycle starts small. One nurse on two shifts can test the protocol quickly, find problems such as missing weights or unclear exclusions, and adapt before it spreads. Launching it to all nurses on all shifts at once risks confusion and makes failures costly. A pilot at another hospital does not test the local process. A randomized trial is research, not rapid-cycle improvement. The audit of 60 children already gives a baseline, so a further year of data only delays the work.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28934995/

#### Q3
*Update:* Weekly median time to analgesia is plotted on a run chart with the baseline median of 94 minutes frozen as the centre line. The first 5 weeks after the protocol read 90, 84, 79, 71 and 62 minutes.

**Which of the following best describes these 5 weeks on the run chart?**

- A. Astronomical data point
- B. Common cause variation only
- C. Shift below the median
- D. Too few runs across median
- E. Trend toward improvement  **(key)**

*Explanation:* Five consecutive points all going down meet the run chart rule for a trend, a non-random signal that suggests the change is working. A shift needs six or more consecutive points on one side of the median. These are only five, so a shift has not yet been shown. No single week is blatantly different from the rest, so there is no astronomical point. Too few runs cannot be judged from five points. Common cause is a control chart term that the run chart authors advise against using on a run chart, and a trend is a non-random signal in any case.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Perla RJ, Provost LP, Murray SK. The run chart: a simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.

#### Q4
*Update:* Twelve weeks later, 84% of children with suspected long-bone fractures receive an analgesic within 30 minutes of triage.

**Which of the following is the best way to sustain this gain after the aim is met?**

- A. Build the protocol into triage standard work  **(key)**
- B. End data collection once the aim is met
- C. Hold a celebration and close the project
- D. Remind nurses by email every quarter
- E. Repeat the full baseline audit yearly

*Explanation:* Gains last when the change becomes the normal way of working. Building the protocol into triage standard work, orientation and the triage record, with ongoing measurement, keeps it from depending on the enthusiasm of the project team. Ending data collection or closing the project hides any slide back toward 94 minutes. Quarterly email reminders are weak and fade. A yearly audit detects a slide too late for the children who wait in the meantime.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Chartier LB, Vaillancourt S, Cheng AHY, Stang AS. Quality improvement primer part 3: evaluating and sustaining a quality improvement project in the emergency department. CJEM. 2019. https://pubmed.ncbi.nlm.nih.gov/29925452/

### cqi-20: Collapse in the waiting room

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 71-year-old man presents to the emergency department with 2 hours of left flank pain. He has hypertension and smokes. He is triaged as CTAS 3 with presumed renal colic and returns to the waiting room. Department policy requires reassessment of CTAS 3 patients in the waiting room every 30 minutes. The department is at 160% occupancy with 22 admitted patients boarding, and the waiting room nurse has been moved to the hallway. No reassessment is documented. Two hours and 40 minutes after triage he collapses. POCUS shows a large abdominal aortic aneurysm. He dies in the operating room.

- Temperature: 36.7°C oral
- Pulse: 98/minute
- Resp.: 18/minute
- BP: 104/66 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following contributing factors to the delayed recognition should the incident analysis explore?**

Select 3.

- A. Anchoring on renal colic at triage  **(key)**
- B. Blood bank response in the operating room
- C. Boarded admissions limiting nurse staffing  **(key)**
- D. Carelessness of the triage nurse
- E. Operative approach chosen by surgery
- F. Smoking history of the patient
- G. Unassigned waiting room reassessment role  **(key)**

*Explanation:* The delay came from system conditions. Twenty-two boarded patients pulled the waiting room nurse to the hallway, so no one held the reassessment role, and the triage label of renal colic in an older hypertensive smoker framed every later look. Calling the nurse careless is a judgment, not a factor, and it stops the search for causes. The blood bank and the operative approach came after the collapse and did not delay recognition. His smoking raised his risk of an aneurysm but did not delay its diagnosis.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q2
*Update:* His wife arrives. The review has not started.

**Which of the following is most appropriate at the initial disclosure meeting with his wife?**

- A. Explain that the rupture was unpreventable
- B. Explain the known facts and apologize  **(key)**
- C. Offer compensation on behalf of the hospital
- D. State that the triage nurse made an error
- E. Wait until the analysis is complete

*Explanation:* At the first meeting the physician shares the facts known now, including that he waited without reassessment, expresses sympathy and regret, explains that a review will follow and names a contact person. Saying the rupture was unpreventable is speculation before any analysis. Naming the triage nurse's error is blame, which the CMPA calls unfair and unprofessional. Compensation goes beyond the known facts and is a decision for hospital leadership, not part of initial disclosure. Waiting for the analysis leaves a grieving family without answers when disclosure should begin as soon as reasonably possible.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q3
**Which of the following best describes the incident review this event requires?**

- A. Accountability review of the triage nurse
- B. Comprehensive system incident analysis  **(key)**
- C. Concise analysis by the unit manager
- D. Coroner inquest in place of a review
- E. Review at next monthly M&M rounds

*Explanation:* A death with several interacting factors, including boarding, staffing and triage, calls for a comprehensive analysis with interviews, a detailed chronology and senior leadership involvement. An accountability review applies when there is a deliberate violation, a concern about the provider's health or a clear lack of knowledge or skill. None is described here. A concise analysis suits incidents with no, low or moderate harm. A coroner's investigation may run in parallel but does not replace the hospital's own learning review. Rounds are for discussion, not structured analysis.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q4
**Which of the following indicators would best monitor the risk exposed by this event?**

- A. Annual count of aortic aneurysm deaths
- B. Left without being seen rate
- C. Median time to physician assessment
- D. Patient satisfaction survey scores
- E. Percent of CTAS 3 patients reassessed on time  **(key)**

*Explanation:* The gap was missed reassessment of waiting patients, so the most useful indicator is the share of CTAS 3 patients reassessed within the 30 minutes the policy requires. It is a process measure that changes week to week and can be acted on before the next patient deteriorates. Aneurysm deaths are too rare to show a trend. The rate of leaving without being seen and time to physician assessment track crowding but not whether waiting patients are rechecked. Satisfaction scores do not measure this risk.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28934995/

### cqi-21: A nerve block on a hip fracture

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 88-year-old woman is brought to the emergency department by ambulance after a fall at her retirement home. Her right leg is shortened and externally rotated, and X-ray shows a right femoral neck fracture. She has mild dementia. The physician sets up an ultrasound-guided fascia iliaca block and is called to the resuscitation room twice during setup. On returning, the physician places the block on the left side. The nurse notices after the injection. The department has no pre-procedure pause for bedside blocks and the site was not marked. A right-sided block is then placed, with the total local anesthetic dose kept within safe limits. She shows no signs of toxicity.

- Temperature: 36.4°C oral
- Pulse: 88/minute
- Resp.: 16/minute
- BP: 148/82 mmHg
- O2 sat: 95% on room air
- Weight: 52 kg

#### Q1
*Update:* The unit manager uses the incident decision tree to decide how to respond to the physician.

**Which of the following questions does the substitution test in the incident decision tree ask?**

- A. Did the physician intend to cause harm
- B. Does the physician have a health problem
- C. Were safe procedures available and in use
- D. Would a peer act the same in this setting  **(key)**
- E. Would the patient have been harmed anyway

*Explanation:* The substitution test asks whether another provider from the same professional group, with comparable training and experience, would likely have acted the same way in the same circumstances. With repeated interruptions, no site marking and no pause process, many peers would have made the same slip, which points to a system failure. Intent to harm is the deliberate harm test. A health problem is the health test. Availability of safe procedures is the foresight test. Whether harm would have happened anyway judges the outcome, not the behaviour.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q2
**Which of the following is the most appropriate type of review for this incident?**

- A. Accountability review of the physician
- B. College complaint by the department
- C. Remedial training for the physician
- D. Review of the system by the quality team  **(key)**
- E. Suspension of block privileges

*Explanation:* A quality improvement review of the system is preferred unless there is an alleged deliberate violation of sound policy, a concern about the provider's health, or a dominant concern about a clear lack of knowledge, skill or professionalism. None applies here. The slip happened in a department with no pause process and repeated interruptions. An accountability review, a college complaint, suspension or remedial training all treat this as an individual failing and would discourage the reporting the department needs.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Medical Protective Association. Learning from adverse events: fostering a just culture of safety in Canadian hospitals and health care institutions. 2009. https://www.cmpa-acpm.ca/static-assets/pdf/advice-and-publications/handbooks/com_learning_from_adverse_events-e.pdf

#### Q3
**Which of the following practices would most directly have prevented this wrong-side block?**

- A. Checking allergies before the block
- B. Marking the site and pausing to confirm  **(key)**
- C. Performing blocks only by anesthesia
- D. Saving the ultrasound image to the chart
- E. Second physician present for each block

*Explanation:* A pre-block pause with the side marked makes the operator confirm the side against the marking and the consent just before the needle goes in. The Canadian Anesthesiologists' Society strongly recommends such a pause wherever peripheral blocks are done. Here the side was lost during two calls to the resuscitation room between setup and injection. Checking allergies is good practice but does not confirm the side. Limiting blocks to anesthesia moves the task without adding a check. A saved image documents the error afterward. A second physician adds staff but not a defined verification step.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Canadian Anesthesiologists' Society. Guidelines to the Practice of Anesthesia: revised edition 2026. Can J Anesth. 2026. https://www.cas.ca/CASAssets/Documents/Practice-Resources/Guidelines/CAS_Guidelines_Anesthesia_2026.pdf

#### Q4
*Update:* The review finds no pause process for bedside blocks and frequent interruptions. A pause with site marking is now required. You meet her and her son to share the findings.

**Which of the following is most appropriate to include at this post-analysis disclosure meeting?**

- A. Apology acknowledging responsibility for harm  **(key)**
- B. Detailed opinions voiced during the review
- C. Names of staff who were interviewed
- D. Reassurance that nothing could be changed
- E. Statement that the physician was negligent

*Explanation:* When analysis shows that harm came from a system failure or provider performance, an apology that acknowledges responsibility is appropriate, along with the changes made, here the new pause and site marking. Opinions and speculation voiced inside a quality review, and the names of those interviewed, are generally protected and are not shared. Saying nothing could change is untrue, since the process has changed. Words such as negligent imply legal liability, which the CMPA advises physicians to avoid because courts and colleges make those findings.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

### cqi-22: A patient reports a shared pen

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 58-year-old man with type 2 diabetes is admitted through the emergency department with cellulitis of the leg. His orders include insulin lispro, cefazolin, enoxaparin, acetaminophen, metformin and ondansetron. On his second night boarding in the emergency department, he watches a nurse give him insulin with a pen and then carry the same pen to the next stretcher. He tells the charge nurse. The nurse says she changed the needle each time. A review finds that ward-stock insulin pens have been shared among boarding patients for 5 weeks. Pharmacy records identify 37 patients who received insulin from a shared pen.

- Temperature: 37.6°C oral
- Pulse: 90/minute
- Resp.: 16/minute
- BP: 138/84 mmHg
- O2 sat: 98% on room air

#### Q1
**Which of the following is the most appropriate approach to disclosure for the exposed patients?**

- A. Contact and offer testing to all 37  **(key)**
- B. Disclose only if a patient seroconverts
- C. Disclose only to the man who saw it
- D. Post a notice on the hospital website
- E. No disclosure since no harm is known

*Explanation:* Sharing a pen between patients can transmit HIV, hepatitis B and hepatitis C even when the needle is changed, because blood can enter the cartridge. That makes this a no harm incident with potential for future harm, which requires disclosure, and testing lets infections be found and treated early. All 37 patients carry the same risk, so disclosing only to the man who saw it is unfair. Waiting for seroconversion delays care. A website notice does not reliably reach the people exposed.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q2
**Which of the following best describes how this large-scale disclosure should be organized?**

- A. Coordinated plan by a multidisciplinary team  **(key)**
- B. Each nurse calls the patients she treated
- C. Family physicians told to inform patients
- D. Letter sent after testing the source pens
- E. Media release before contacting patients

*Explanation:* Large-scale disclosure needs a coordinated plan built by clinical, epidemiology, ethics, administrative, communications, legal and patient experience experts, who decide who is at risk, what to say, how to reach people and how testing and follow-up will work. Individual nurses calling their own patients gives inconsistent messages and loses patients no one remembers. Family physicians need to know, but disclosure is the hospital's duty. Testing the pens does not change who was exposed. Patients should hear before the media does.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines: being open with patients and families. 2011. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/

#### Q3
**Which of the following corrective actions is most likely to prevent pens being shared again?**

- A. Audit of insulin administration monthly
- B. Education on single-patient pen use
- C. Monthly reminder at safety huddles
- D. Patient-labelled pens from pharmacy  **(key)**
- E. Sticker on each pen for one patient

*Explanation:* Pens dispensed by pharmacy with a patient-specific label, checked against the wristband before each dose, remove the shared ward-stock pen that made this practice possible. ISMP Canada recommends exactly this. Education, huddle reminders and warning stickers rely on memory and are weaker on the hierarchy of effectiveness, especially when the unsafe habit had become normal for 5 weeks. A monthly audit detects sharing after it happens rather than preventing it.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* ISMP Canada. ALERT: use of one insulin pen for multiple patients is a high-risk practice. ISMP Canada Safety Bulletin. Volume 13, issue 4. 2013. https://ismpcanada.ca/wp-content/uploads/ISMPCSB2013-04_ALERT_InsulinPenHighRiskPractice.pdf

#### Q4
**Which of the following medications in his orders are on the Canadian High-Alert Medication List?**

Select 2.

- A. acetaminophen 1 g PO
- B. cefazolin 2 g IV
- C. enoxaparin 40 mg SC  **(key)**
- D. insulin lispro 6 units SC  **(key)**
- E. metformin 500 mg PO
- F. ondansetron 4 mg IV

*Explanation:* The Canadian High-Alert Medication List includes insulins and injectable anticoagulants such as low molecular weight heparin, so insulin lispro and enoxaparin need added safeguards. These drugs are not more likely to be involved in an error, but the harm is often severe when one happens. Oral acetaminophen, cefazolin, metformin and ondansetron are not on the list. IV acetylcysteine used as an antidote is on it, which is easy to confuse with acetaminophen.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* ISMP Canada. Canadian High-Alert Medication List. 2024. https://ismpcanada.ca/resource/highalertlist/

### cqi-23: Two days on a hallway stretcher

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 86-year-old woman with mild cognitive impairment is admitted to medicine from the emergency department with pneumonia. She waits 41 hours on a hallway stretcher for an inpatient bed. On the second night she becomes delirious and pulls out her IV. Her son asks why she was in a hallway for two days. You are the department's quality lead. Last quarter, time from decision to admit to departure to an inpatient bed had a median of 14 hours and a 90th percentile of 39 hours. Median time to physician initial assessment was 1.4 hours. Most arrivals are CTAS 3.

- Temperature: 37.8°C oral
- Pulse: 96/minute
- Resp.: 22/minute
- BP: 128/70 mmHg
- O2 sat: 92% on room air

#### Q1
**Which of the following measures most directly reflects access block in this department?**

- A. Ambulance arrivals per day
- B. Boarding time of admitted patients  **(key)**
- C. Left without being seen rate
- D. Median time to physician assessment
- E. Visits by CTAS 4 and 5 patients

*Explanation:* Access block is the inability of admitted patients to reach an inpatient bed, so the time admitted patients spend boarding in the emergency department measures it directly. CAEP identifies it as the main cause of crowding in Canadian hospitals. Ambulance arrivals and visits by CTAS 4 and 5 patients describe input, and low acuity patients are not what crowds Canadian departments. Time to physician assessment and the rate of leaving without being seen reflect crowding but are downstream effects rather than a measure of access block.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Affleck A, Parks P, Drummond A, Rowe BH, Ovens HJ. Emergency department overcrowding and access block. CAEP position statement. CJEM. 2013. https://pubmed.ncbi.nlm.nih.gov/24176460/

#### Q2
**Which of the following best describes this department's time to inpatient bed against the CAEP targets?**

- A. Both median and 90th percentile exceed target  **(key)**
- B. Both median and 90th percentile meet target
- C. Median exceeds target, 90th percentile meets it
- D. Median meets target, 90th percentile exceeds it
- E. No CAEP target exists for this interval

*Explanation:* CAEP recommends a time from admission decision to inpatient bed of 2 hours at the median and 8 hours at the 90th percentile. This department reports 14 hours at the median, 7 times the target, and 39 hours at the 90th percentile, nearly 5 times the target. Both exceed it. CAEP set this target because admitted patients waiting in the department is the key driver of crowding, so a target does exist.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Li MK, McLeod SL, Affleck A, and colleagues. Emergency department overcrowding: a CAEP position statement. CJEM. 2026. https://www.caep.ca/position-statements/emergency-department-overcrowding

#### Q3
**Which of the following interventions best targets the main cause of crowding in this department?**

- A. Adding more hallway stretchers in the ED
- B. Diverting low acuity patients to clinics
- C. Fast track for CTAS 4 and 5 patients
- D. Inpatient overcapacity protocol  **(key)**
- E. Physician assessment at triage

*Explanation:* The problem is output. Admitted patients wait a median of 14 hours for a bed while time to physician assessment is 1.4 hours. An inpatient overcapacity protocol moves stable admitted patients to the wards at times of peak pressure, sharing the load across the hospital, and CAEP recommends it as an output solution. More hallway stretchers make boarding easier rather than shorter. Diverting low acuity patients and a fast track address input and throughput, and most arrivals here are CTAS 3. Physician assessment at triage works on the front end. Time to assessment is 1.4 hours against a CAEP median target of 1 hour, a small gap beside a 14-hour boarding median, and it does nothing for access block.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Affleck A, Parks P, Drummond A, Rowe BH, Ovens HJ. Emergency department overcrowding and access block. CAEP position statement. CJEM. 2013. https://pubmed.ncbi.nlm.nih.gov/24176460/

#### Q4
**Which of the following statistics best describes the experience of the admitted patients who wait longest for a bed?**

- A. Mean time to inpatient bed
- B. Median time to inpatient bed
- C. Minimum time to inpatient bed
- D. 90th percentile time to inpatient bed  **(key)**
- E. Total boarding hours per month

*Explanation:* The 90th percentile shows the wait that 1 in 10 admitted patients reaches or exceeds, here 39 hours, and this patient's 41 hours sits in that tail. That is why CAEP sets targets at both the median and the 90th percentile. The median of 14 hours describes the typical patient and hides the long tail. A mean blends the tail into one average. The minimum describes the luckiest patient. Total boarding hours measure the department's overall burden, not how long the worst-affected patients wait.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Affleck A, Parks P, Drummond A, Rowe BH, Ovens HJ. Emergency department overcrowding and access block. CAEP position statement. CJEM. 2013. https://pubmed.ncbi.nlm.nih.gov/24176460/

### cqi-24: A headache that came back

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 44-year-old woman is brought to the emergency department by ambulance with severe headache, vomiting and neck stiffness. CT shows subarachnoid hemorrhage, and she is admitted. Four days earlier she was seen in the same department for a headache that peaked within 1 minute while she was lifting weights. That chart records a normal neurologic examination and a diagnosis of migraine. She had no history of migraine. No CT was done and no decision rule was documented. She was discharged. Your Ontario hospital takes part in the provincial Emergency Department Return Visit Quality Program.

- Temperature: 37.2°C oral
- Pulse: 64/minute
- Resp.: 18/minute
- BP: 172/94 mmHg
- O2 sat: 98% on room air

#### Q1
**Which of the following criteria flags this return visit for mandatory audit under the provincial program?**

- A. Any return visit within 30 days
- B. Complaint about the first visit
- C. Discharge again within 72 hours
- D. Sentinel diagnosis admitted in 7 days  **(key)**
- E. Transfer to another hospital for surgery

*Explanation:* The program requires audit of all 7-day return visits admitted with a sentinel diagnosis: acute myocardial infarction, subarachnoid hemorrhage or pediatric sepsis. She returned on day 4 with subarachnoid hemorrhage. The program also samples 72-hour returns, but only those admitted, and her return came after 72 hours. A 30-day window, a complaint or a transfer for surgery are not program criteria, although a department may review such cases on its own.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Chartier LB, Ovens H, Hayes E, and colleagues. Improving quality of care through a mandatory provincial audit program: Ontario's Emergency Department Return Visit Quality Program. Ann Emerg Med. 2021. https://pubmed.ncbi.nlm.nih.gov/33199045/

#### Q2
**Which of the following best classifies the main quality issue at her first visit?**

- A. Diagnostic issue  **(key)**
- B. Discharge follow-up issue
- C. Documentation issue only
- D. Medication issue
- E. Procedural complication

*Explanation:* A headache that peaked within 1 minute during exertion, in a woman with no migraine history, was labelled migraine without CT, so the main issue is diagnostic. Physician cognitive lapses are one of the recurrent themes found in audits under the Ontario program. Missing documentation of a decision rule contributed, but calling it documentation only misses the diagnostic gap. No medication or procedure caused harm. Better follow-up would not have replaced imaging at the first visit.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Chartier LB, Ovens H, Hayes E, and colleagues. Improving quality of care through a mandatory provincial audit program: Ontario's Emergency Department Return Visit Quality Program. Ann Emerg Med. 2021. https://pubmed.ncbi.nlm.nih.gov/33199045/

#### Q3
*Update:* She asks you whether the first doctor should have caught this. A colleague saw her at the first visit and is not on shift.

**Which of the following is the most appropriate response to her question?**

- A. Advise her to contact a lawyer
- B. Refuse to discuss the earlier visit
- C. Say the first physician made a clear error
- D. Say the headache was a typical migraine
- E. Share known facts without speculating  **(key)**

*Explanation:* She deserves an honest answer. Share what is known, that she was seen 4 days ago and discharged with a diagnosis of migraine, say that the visit will be reviewed, and commit to follow up. The CMPA advises against speculating or blaming another provider without the full facts, and encourages talking with the colleague, who may be best placed to discuss the care. Declaring a clear error is premature blame. Calling it a typical migraine is false. Refusing to talk or pointing her to a lawyer abandons her.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q4
**Which of the following best uses the return visit audits to improve care in the department over time?**

- A. Discuss this case once at M&M rounds
- B. Send the first physician a warning letter
- C. Submit the audit and file the result
- D. Track audit themes and act each quarter  **(key)**
- E. Wait for the province's annual report

*Explanation:* The program is designed to find recurring local themes, such as cognitive lapses, documentation and handover, and turn them into improvement projects. Reviewing audit themes regularly and acting on them builds that learning into routine work. Submitting the audit and filing it meets the requirement but changes nothing. A single discussion at rounds is not a system. A warning letter treats a system theme as individual blame. Waiting for the provincial report delays local action.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Chartier LB, Ovens H, Hayes E, and colleagues. Improving quality of care through a mandatory provincial audit program: Ontario's Emergency Department Return Visit Quality Program. Ann Emerg Med. 2021. https://pubmed.ncbi.nlm.nih.gov/33199045/

### cqi-25: A bump on a cupboard door

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 34-year-old man presents to the emergency department after striking his head on a cupboard door. He had no loss of consciousness, amnesia, disorientation or vomiting. GCS is 15 and the examination is normal. He waits 3 hours for a head CT, which is normal. An audit of 200 adults seen last quarter with a minor head injury finds that 116 had CT. Only 36 of those scanned met a high-risk or medium-risk criterion of the Canadian CT Head Rule. The department agrees to reduce unneeded head CT.


#### Q1
**Which of the following change ideas is most likely to reduce head CT ordered outside the rule?**

- A. CT order that requires rule criteria  **(key)**
- B. Email reminder about the rule
- C. Grand rounds on radiation risk
- D. Poster of the rule in each area
- E. Radiologist vetting of every scan

*Explanation:* A CT order that asks for the rule's criteria builds the decision into the ordering step, which is automation and sits high on the hierarchy of effectiveness. It prompts the physician at the moment of decision rather than relying on memory. Email reminders, posters and grand rounds are information and education, the weakest tier. Radiologist vetting of every scan adds a slow second check after the decision has been made and shifts the work without changing how physicians decide.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q2
*Update:* For the 80 scans outside the rule, physicians give reasons: patient or family request 38, worry about a missed injury 26, unclear history 10 and other 6.

**Which of the following tools best shows which few reasons account for most of these scans?**

- A. Control chart
- B. Fishbone diagram
- C. Pareto chart  **(key)**
- D. Process map
- E. Run chart

*Explanation:* A Pareto chart ranks causes from most to least frequent with a cumulative line. Here it would show that patient request and worry about a missed injury account for 64 of 80 scans, or 80%, so change ideas should target those two. A fishbone diagram brainstorms possible causes but does not count them. A process map shows the steps of the process. Run and control charts track a measure over time rather than comparing causes.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Chartier LB, Cheng AHY, Stang AS, Vaillancourt S. Quality improvement primer part 1: preparing for a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28756779/

#### Q3
*Update:* After the order change, the weekly CT rate is plotted against the baseline median. Of the first 8 weeks, 5 fall below the median and 3 above, with no steady direction.

**Which of the following is the most appropriate conclusion from this run chart so far?**

- A. Astronomical point after the change
- B. Clear shift below the median
- C. Improvement shown by the majority
- D. Trend toward fewer scans
- E. No non-random signal yet  **(key)**

*Explanation:* No run chart rule is met yet. A shift needs 6 or more consecutive points on one side of the median, and these 8 weeks split 5 below and 3 above. A trend needs 5 or more consecutive points moving in one direction, and there is no steady direction. Having most points below the median is not itself a signal, because chance alone often produces that. No point is described as blatantly different from the rest. The team should keep plotting before judging the change.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Perla RJ, Provost LP, Murray SK. The run chart: a simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.

#### Q4
**Which of the following measures best shows whether head CT ordering now follows the rule?**

- A. Number of positive scans per month
- B. Patient satisfaction with head injury care
- C. Percent of head CTs meeting the rule  **(key)**
- D. Radiologist report turnaround time
- E. Total CT scans done in the hospital

*Explanation:* The gap was scans ordered outside the rule, so the direct measure is the share of head CTs for minor head injury that meet a rule criterion, 36 of 116, or 31%, at baseline. It is a process measure tied to the change and it adjusts for changes in volume. A monthly count of positive scans rises and falls with the number of patients seen. Total hospital CT volume mixes in every other indication. Report turnaround and satisfaction do not show whether ordering follows the rule.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Chartier LB, Cheng AHY, Stang AS, Vaillancourt S. Quality improvement primer part 1: preparing for a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28756779/

### cqi-26: A runny nose and a prescription

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 4-year-old girl is brought to the emergency department by her father with 3 days of runny nose, cough and fever. She is playful and well hydrated. Her ears, throat and chest are normal. She is discharged with a diagnosis of viral upper respiratory tract infection and a prescription for amoxicillin. You lead the department's antimicrobial stewardship work. An audit of 400 children discharged last year with a viral upper respiratory tract infection finds that 38% received an antibiotic. Rates among its 40 physicians range from 9% to 61%. The group plans to give physicians feedback on their prescribing.

- Temperature: 38.1°C tympanic
- Pulse: 118/minute
- Resp.: 24/minute
- O2 sat: 98% on room air
- Weight: 17 kg

#### Q1
**Which of the following features are most likely to make audit and feedback on prescribing effective?**

Select 3.

- A. Action plan with specific advice  **(key)**
- B. Comparison with average of all peers
- C. Comparison with top-performing peers  **(key)**
- D. Data on the physician's own patients  **(key)**
- E. Department-level results only
- F. Many indicators in one report
- G. Single written report each year

*Explanation:* The 2025 Cochrane review found larger effects when feedback used each recipient's own data rather than team data, compared performance with top peers or a benchmark, and came with an action plan and specific advice. The wide range from 9% to 61% shows why individual data matter. Department-level results let each physician assume the problem lies with others. Comparison with the average of all peers and the number of indicators showed no clear effect. A single written report lacks the interactive, verbal and written formats linked with larger effects.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Ivers N, Yogasingam S, Lacroix M, and colleagues. Audit and feedback: effects on professional practice. Cochrane Database Syst Rev. 2025. https://pubmed.ncbi.nlm.nih.gov/40130784/

#### Q2
*Update:* Several physicians doubt the audit data and say the feedback feels like an administrative exercise.

**Which of the following is most likely to increase physicians' engagement with the feedback?**

- A. Anonymous report from the pharmacy
- B. Email from hospital administration
- C. Feedback from a respected colleague  **(key)**
- D. Mandatory online stewardship module
- E. Warning letter from the chief of staff

*Explanation:* Feedback delivered by a local champion, a respected colleague with an existing relationship with the recipient, was associated with larger effects in the Cochrane review, and a peer can answer doubts about the data in conversation. An anonymous pharmacy report and an email from administration reinforce the sense of an outside exercise. An online module is education without feedback on the physician's own practice. A warning letter turns a learning tool into a disciplinary one and invites defensiveness.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Ivers N, Yogasingam S, Lacroix M, and colleagues. Audit and feedback: effects on professional practice. Cochrane Database Syst Rev. 2025. https://pubmed.ncbi.nlm.nih.gov/40130784/

#### Q3
*Update:* In a first test, 3 volunteer physicians receive a report of their own rates. Two say the report is hard to read and does not show which diagnoses drove their prescribing.

**Which of the following is the most appropriate next step in the improvement cycle?**

- A. Abandon the feedback reports
- B. Adapt the report and test again  **(key)**
- C. Publish the results in a journal
- D. Roll out to all 40 physicians now
- E. Wait a year to judge the effect

*Explanation:* The study step of a Plan-Do-Study-Act cycle showed a fixable problem, so the next cycle adapts the report, adding a clearer layout and the diagnoses behind each prescription, and tests it again on a small scale. Abandoning the reports throws away a promising change on the basis of design feedback. Rolling out a flawed report to all 40 physicians spreads the problem. Publishing is not part of the cycle. Waiting a year loses the value of rapid small tests.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28934995/

### cqi-27: A resident after a return in shock

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 30-year-old woman presents to the emergency department with lower abdominal pain and light vaginal bleeding. A second-year resident sees her. A urine pregnancy test is positive and the resident books a formal ultrasound for the next morning. The attending physician approves discharge. Six hours later she returns by ambulance in hemorrhagic shock from a ruptured ectopic pregnancy. She goes to the operating room and survives. At the start of the next shift the resident learns what happened and is tearful at the nursing station.

- Temperature: 36.2°C oral
- Pulse: 134/minute
- Resp.: 26/minute
- BP: 76/44 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following is the most appropriate first response to the resident's distress?**

- A. Ask the resident to write a statement now
- B. Check on the resident and offer support  **(key)**
- C. Report the resident to the program director
- D. Tell the resident to keep working as usual
- E. Wait until the review before discussing it

*Explanation:* Clinicians involved in a harmful event often become second victims, with distress, self-doubt and intrusive reflection in the first hours. A prompt private check-in and an offer of support is emotional first aid at the stage when it helps most. Demanding a written statement now adds to the sense of inquisition. Reporting the resident to the program director treats a system and supervision event as individual failure. Telling a tearful resident to carry on risks the next patient. Waiting for the review leaves the resident alone during the worst period.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Scott SD, Hirschinger LE, Cox KR, and colleagues. The natural history of recovery for the healthcare provider second victim after adverse patient events. Qual Saf Health Care. 2009. https://pubmed.ncbi.nlm.nih.gov/19812092/

#### Q2
*Update:* She is recovering on the gynecology ward and asks to meet about what happened. The resident is anxious about attending.

**Which of the following is the most appropriate plan for who leads the disclosure meeting?**

- A. Chief of staff leads the meeting alone
- B. Emergency nurse who triaged her leads
- C. Patient relations officer leads it
- D. Resident leads it without the attending
- E. The attending leads, resident may join  **(key)**

*Explanation:* The most responsible physician for the care in question, here the emergency attending who approved the discharge, generally leads the disclosure. The resident should be encouraged to take part when appropriate, which supports learning and recovery, but should not carry it alone. Leaders such as the chief of staff often take a larger role later, at the post-analysis stage, rather than replacing the physician at the first meeting. Patient relations can support but cannot explain the clinical care. The triage nurse did not make the discharge decision.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q3
**Which of the following would best support staff after future incidents as part of routine department practice?**

- A. Annual wellness lecture
- B. Employee assistance phone number
- C. Peer support program triggered after events  **(key)**
- D. Time off for all involved staff
- E. Written guide in the policy manual

*Explanation:* Support works best when it is built in and starts automatically. A peer support program that is activated after an event reaches staff early, when distress is highest, and trained peers understand the clinical context. The recovery pattern of second victims is predictable enough that programs can screen staff right after an event and deploy support. An annual lecture and a written guide are not timed to the event. An assistance phone number waits for the person to call. Blanket time off does not fit everyone and can isolate staff.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Scott SD, Hirschinger LE, Cox KR, and colleagues. The natural history of recovery for the healthcare provider second victim after adverse patient events. Qual Saf Health Care. 2009. https://pubmed.ncbi.nlm.nih.gov/19812092/

### cqi-28: Black stools after a urinary infection

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 79-year-old man returns to the emergency department with melena and dizziness. Six days earlier he was discharged from the same department with a urinary tract infection and a prescription for trimethoprim-sulfamethoxazole. He takes warfarin for a mechanical aortic valve. The note from that visit lists his medications as none known. His daughter says no one asked about his pill organizer. The prescription was filled at a pharmacy that does not dispense his warfarin, so no interaction was flagged. Today his INR is 8.9 and hemoglobin is 82 g/L.

- Temperature: 36.8°C oral
- Pulse: 108/minute
- Resp.: 18/minute
- BP: 102/60 mmHg
- O2 sat: 97% on room air
- Weight: 70 kg

#### Q1
**Which of the following steps at the first visit would most likely have prevented this event?**

- A. Culture-directed antibiotic choice
- B. Follow-up phone call in 48 hours
- C. INR check before discharge
- D. Printed discharge instructions
- E. Taking a best possible medication history  **(key)**

*Explanation:* A best possible medication history, from an interview with the patient or family and at least one other source such as the pharmacy or the pill organizer, would have shown warfarin before trimethoprim-sulfamethoxazole was prescribed. The interaction raises the INR. No one knew he was on warfarin, so no one would have thought to check his INR. A follow-up call or printed instructions come after the prescribing error. A culture result would not have changed an antibiotic chosen without knowing about warfarin.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q2
**Which of the following corrective actions ranks highest on the hierarchy of effectiveness for this event?**

- A. Checklist item on the discharge form
- B. Education on warfarin interactions
- C. Interaction check against provincial drug data  **(key)**
- D. Policy requiring a medication list
- E. Poster of common warfarin interactions

*Explanation:* An automatic interaction check against the provincial record of dispensed drugs would flag warfarin whatever pharmacy he uses and whether or not anyone asked. That is automation, second only to forcing functions on the hierarchy. A checklist item is a reminder and still depends on the history being taken well. A policy, a poster and education sit in the lowest tiers. They are useful supports, but on their own they do not change the conditions that produced a medication list of none known.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q3
*Update:* After disclosure, a colleague suggests changing the note from the first visit so it states that he denied taking any medications.

**Which of the following is the most appropriate way to handle the record of the first visit?**

- A. Add the medication to the original note
- B. Correct the record with a dated addendum  **(key)**
- C. Delete the first note and rewrite it
- D. Note the facts only in the incident report
- E. Record that the patient denied medications

*Explanation:* Missing or wrong information is corrected with an additional entry, clearly marked as an addendum, dated and signed, and physicians amend only their own entries. The disclosure meeting itself also belongs in the chart. Editing or deleting the original note hides what was known at the time and can look like tampering. Recording a denial that did not happen is false. The incident report supports the safety review, but it does not replace documentation in the medical record.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q4
*Update:* The quality lead wants to know how often similar harm has gone unreported in the department.

**Which of the following chart findings would best help a trigger tool review find similar anticoagulant harm?**

- A. Antibiotic prescribed at discharge
- B. Culture sent before antibiotics
- C. Discharge diagnosis of infection
- D. INR above 6 or vitamin K given  **(key)**
- E. Warfarin listed on medication record

*Explanation:* An INR above 6 and vitamin K administration are both medication triggers in the IHI Global Trigger Tool. Either one prompts a closer look for anticoagulant harm, as in this man with an INR of 8.9. Warfarin on the medication record shows exposure, not harm, and applies to every patient taking it safely. An antibiotic prescription, a culture and a diagnosis of infection are routine care and would flag thousands of charts without pointing to harm.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Griffin FA, Resar RK. IHI Global Trigger Tool for Measuring Adverse Events. 2nd ed. IHI Innovation Series white paper. Institute for Healthcare Improvement. 2009. https://www.ihi.org/library/white-papers/ihi-global-trigger-tool-measuring-adverse-events

### cqi-29: A transfer for thrombolysis

- [ ] Approved  - [ ] Needs change  - [ ] Reject

You are working in a rural hospital emergency department with no CT scanner. A 67-year-old man presents with left arm and leg weakness that began 90 minutes ago. He takes apixaban for atrial fibrillation, last dose this morning, and is allergic to penicillin. He is sent by ambulance to a stroke centre 140 km away. The paramedics arrive while you are resuscitating another patient, and a nurse hands over verbally in the hallway. The transfer package has no medication list. At the stroke centre, thrombolysis is started and stopped 20 minutes later when his daughter mentions apixaban. He does not bleed.

- Temperature: 36.9°C oral
- Pulse: 84/minute irregular
- Resp.: 18/minute
- BP: 176/92 mmHg
- O2 sat: 96% on room air

#### Q1
**Which of the following belongs in the minimum information shared at every care transition?**

- A. Admission history of prior visits
- B. Insurance and billing details
- C. Social history and occupation
- D. Transfer reason and safety concerns  **(key)**
- E. Vaccination history

*Explanation:* Accreditation Canada expects information shared at a care transition to include, at a minimum, full name and identifiers, contact information for the responsible providers, the reason for transition, safety concerns and the patient's goals. Anticoagulant use before possible thrombolysis was the safety concern that did not travel with him. Prior admissions, social history and vaccination history may matter in some transfers but are not part of the minimum set. Insurance and billing details have no bearing on safe care.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q2
**Which of the following handover practices is most appropriate for this transfer?**

- A. Faxed note sent after departure
- B. Handover tool with a written summary  **(key)**
- C. Photo of the chart sent to the crew
- D. Verbal hallway handover only
- E. Verbal report during a resuscitation

*Explanation:* A standard handover tool with a written summary that travels with the patient, including medications and allergies, makes the key facts hard to omit and available to every team downstream. Tools such as SBAR, checklists and read-back are the strategies Accreditation Canada lists for this purpose. A verbal hallway handover, as happened here, depends on memory and was given while attention was elsewhere. A fax sent after departure may not be read before the treatment decision. A photo of the chart is unstructured and may omit the key facts.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q3
**Which of the following best describes the disclosure obligation for this event?**

- A. Disclosure only if bleeding develops
- B. Disclosure optional as a near miss
- C. Disclosure required as a no harm incident  **(key)**
- D. Disclosure to his daughter only
- E. No disclosure because thrombolysis stopped

*Explanation:* The thrombolytic reached him, so this is not a near miss. No harm is evident yet, which makes it a no harm incident, and harm could still appear over the next hours. The CMPA states that no harm incidents require disclosure, and the risk of delayed bleeding is exactly why he needs to know. Waiting for a bleed delays information he needs to report symptoms. His daughter can be present, but he is the patient and is owed the disclosure. Stopping the infusion does not undo the dose already given.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q4
**Which of the following best builds safe transfer handover into routine practice at the rural hospital?**

- A. Annual review of the transfer policy
- B. Audit of transfer packages with feedback  **(key)**
- C. Remind nurses at each staff meeting
- D. Transfer only during daytime hours
- E. Written policy on transfer handover

*Explanation:* Accreditation Canada expects the effectiveness of information transfer to be evaluated and improved, for example by auditing records, asking receiving providers whether they got what they needed, and reviewing related incidents. Regular audit of transfer packages with feedback, including feedback from the stroke centre, does this. An annual policy review and a written policy describe the standard without checking it. Reminders at meetings fade. Limiting transfers to daytime hours is not possible for time-sensitive conditions such as stroke.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

### cqi-30: A night-time climb over the rails

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 87-year-old man with dementia is admitted to medicine through the emergency department with urinary sepsis and confusion. His daughter is his substitute decision-maker. She tells the triage nurse that he gets up at night to use the toilet. He boards on a hallway stretcher with the side rails up and the stretcher at its highest setting. At 03:00 he climbs over the rail and falls, striking his head. CT head shows a small subdural hematoma, and neurosurgery recommends observation. No falls precautions were documented.

- Temperature: 38.2°C oral
- Pulse: 102/minute
- Resp.: 20/minute
- BP: 142/78 mmHg
- O2 sat: 95% on room air

#### Q1
**Which of the following universal falls precautions should apply to him and every other boarded patient?**

- A. Bed rails raised on all sides at night
- B. Hourly checks by the security guard
- C. Physical restraints overnight
- D. Sedation with haloperidol at bedtime
- E. Stretcher in lowest position, brakes locked  **(key)**

*Explanation:* Universal falls precautions apply to all patients regardless of assessed risk. They include keeping the bed or stretcher in its low position with the brakes locked, keeping the call bell and belongings within reach, and engaging the family. His stretcher was at its highest setting, which made the fall worse. Raised rails give a confused patient something to climb over, as happened here. Restraints and sedation are not universal precautions and carry their own risks, including worse delirium. Security checks are not a falls prevention strategy.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q2
*Update:* He remains confused and cannot understand what happened. His daughter arrives in the morning.

**Which of the following is the most appropriate approach to disclosure of the fall?**

- A. Defer disclosure until he recovers
- B. Disclose only if the hematoma grows
- C. Disclose to his daughter as decision-maker  **(key)**
- D. Let the neurosurgeon disclose it
- E. Tell her the fall was due to confusion

*Explanation:* He was harmed, so disclosure is required, and because he cannot understand it now, it goes to his daughter as substitute decision-maker, with a further conversation with him if his confusion clears. Waiting for him to recover or for the hematoma to grow delays information she needs to make decisions. The team caring for him when he fell leads, and the neurosurgeon can explain the injury. Blaming his confusion is speculation that ignores what the review will look at, including her warning at triage and the high stretcher.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Patient Safety Institute (now Healthcare Excellence Canada). Canadian Disclosure Guidelines: being open with patients and families. 2011. https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/

#### Q3
**Which of the following is the most appropriate team response in the hours after the fall?**

- A. After-fall huddle to find safety gaps  **(key)**
- B. Apply restraints for the rest of the stay
- C. Increase sedation for the rest of the stay
- D. Wait for the monthly falls committee
- E. Written warning to the assigned nurse

*Explanation:* A short post-fall debriefing with the staff on shift captures details while they are fresh, such as the high stretcher, the raised rails and the daughter's warning that was not acted on, and can fix hazards for other boarded patients that night. Accreditation Canada notes that post-fall debriefings help find safety gaps. Waiting a month loses those details. Restraints and more sedation raise the risk of delirium and further injury. A written warning blames one nurse for gaps that are systemic.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

### cqi-31: Drowsy after a second dose

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 68-year-old woman with renal colic receives morphine 5 mg IV in the emergency department and a second 5 mg dose 20 minutes later. Thirty minutes after the second dose she is found drowsy and breathing slowly, and she needs naloxone. She recovers. No incident report is filed because staff view it as a known side effect. You are reviewing opioid safety for the department. Last year staff filed 3 incident reports about opioids. Pharmacy data show that naloxone was given 61 times in the department that year, 44 of them to patients who arrived after an overdose.

- Temperature: 36.7°C oral
- Pulse: 58/minute
- Resp.: 6/minute
- BP: 96/58 mmHg
- O2 sat: 82% on room air

#### Q1
**Which of the following best explains the gap between opioid incident reports and naloxone use?**

- A. Few opioid events reach patients
- B. Naloxone is often given without need
- C. Pharmacy records double count doses
- D. Reporting misses most harmful events  **(key)**
- E. Staff reported every event as required

*Explanation:* Naloxone was given 17 times to patients who had not arrived after an overdose, yet only 3 opioid incidents were reported. Voluntary reporting captures only a small share of events, estimated at 10 to 20% of errors, and staff often do not report harm they see as an expected side effect, as happened here. Opioid events clearly reached patients. Nothing suggests naloxone was given without need or that pharmacy data are wrong. Staff did not report every event, since this one went unreported.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Griffin FA, Resar RK. IHI Global Trigger Tool for Measuring Adverse Events. 2nd ed. IHI Innovation Series white paper. Institute for Healthcare Improvement. 2009. https://www.ihi.org/library/white-papers/ihi-global-trigger-tool-measuring-adverse-events

#### Q2
**Which of the following is the most appropriate method to measure opioid-related harm in the department over time?**

- A. Count of incident reports each month
- B. Patient satisfaction with pain control
- C. Review of every chart for the year
- D. Staff survey on opioid safety
- E. Trigger tool review of random charts  **(key)**

*Explanation:* A trigger tool review screens a random sample of charts for clues such as naloxone use, then confirms whether harm occurred. The fixed sample size and time limit make it feasible and allow the harm rate to be tracked over time. Incident report counts reflect reporting behaviour more than harm, as the 3 reports show. Reviewing every chart is not sustainable. Satisfaction with pain control and staff opinion surveys do not measure harm.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Griffin FA, Resar RK. IHI Global Trigger Tool for Measuring Adverse Events. 2nd ed. IHI Innovation Series white paper. Institute for Healthcare Improvement. 2009. https://www.ihi.org/library/white-papers/ihi-global-trigger-tool-measuring-adverse-events

#### Q3
**Which of the following chart findings would act as triggers for closer review of a possible opioid adverse event?**

Select 2.

- A. Acetaminophen given for fever
- B. Discharge on the same day
- C. Hourly pain score recorded
- D. Ibuprofen prescribed at discharge
- E. Kidney ultrasound ordered
- F. Naloxone administration  **(key)**
- G. Over-sedation or hypotension  **(key)**
- H. Urinalysis sent to the laboratory

*Explanation:* Naloxone administration and over-sedation or hypotension are medication triggers in the IHI Global Trigger Tool. Naloxone use likely signals an adverse event unless it was given for a drug overdose or self-harm. A trigger is a clue that prompts a closer look, not proof of harm. Acetaminophen for fever, hourly pain scores, same-day discharge, an ibuprofen prescription, a kidney ultrasound and a urinalysis are routine parts of care for renal colic and do not point to opioid harm.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Griffin FA, Resar RK. IHI Global Trigger Tool for Measuring Adverse Events. 2nd ed. IHI Innovation Series white paper. Institute for Healthcare Improvement. 2009. https://www.ihi.org/library/white-papers/ihi-global-trigger-tool-measuring-adverse-events

#### Q4
**Which of the following is most likely to encourage staff to keep reporting events like this one?**

- A. Annual reminder of the reporting policy
- B. Disciplining staff who fail to report
- C. Feedback to staff on changes made  **(key)**
- D. Reporting only events with serious harm
- E. Reports reviewed privately by risk managers

*Explanation:* Staff keep reporting when they see that reports lead to change. Closing the loop means telling those in the area where incidents happen what was changed and with what result. Disciplining staff who fail to report is the kind of departure from a system focus that drives reporting underground. Limiting reports to serious harm loses the lessons in near misses and lesser harm, such as this event. Reports reviewed privately with no feedback and a yearly reminder give staff no reason to believe reporting is worth the time.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

### cqi-32: A contaminated blood culture

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 52-year-old man with cellulitis of the arm has 2 sets of blood cultures drawn in the emergency department. One bottle grows coagulase-negative staphylococci. He is admitted and receives IV vancomycin for 3 days before the result is judged a contaminant. The department tracks its monthly blood culture contamination rate on a control chart. Over 24 months the mean is 2.6%, with an upper control limit of 4.4% and a lower control limit of 0.8%. Last month the rate was 6.1%. That month most cultures were drawn through newly placed IV catheters by staff new to the department.

- Temperature: 38.3°C oral
- Pulse: 96/minute
- Resp.: 18/minute
- BP: 134/80 mmHg
- O2 sat: 97% on room air

#### Q1
**Which of the following best describes last month's contamination rate on the control chart?**

- A. Common cause variation
- B. Shift above the mean
- C. Special cause variation  **(key)**
- D. Stable process in control
- E. Trend toward worsening

*Explanation:* A single point outside the control limits, here 6.1% against an upper limit of 4.4%, signals special cause variation, meaning something unusual acted on the process that month. Common cause variation is the expected month-to-month scatter within the limits, and a point beyond the limits is not part of it. The process is therefore not stable or in control that month. A shift or a trend needs a sequence of points, not one month.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Benneyan JC, Lloyd RC, Plsek PE. Statistical process control as a tool for research and healthcare improvement. Qual Saf Health Care. 2003. https://pubmed.ncbi.nlm.nih.gov/14645763/

#### Q2
**Which of the following is the most appropriate response to this signal?**

- A. Discipline the staff who drew cultures
- B. Ignore it as random monthly noise
- C. Recalculate limits including this month
- D. Redesign the entire collection process
- E. Search for the specific cause that month  **(key)**

*Explanation:* Special cause variation calls for finding and addressing the specific cause. Here the stem already points to cultures drawn through new IV catheters by staff new to the department, which the team can confirm and correct. Redesigning the whole process is the response to a stable process whose average is too high, and it is not needed for a one-month signal. Ignoring the point wastes the signal. Adding it to the baseline limits widens them and hides future signals. Disciplining new staff blames individuals for an orientation gap.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Benneyan JC, Lloyd RC, Plsek PE. Statistical process control as a tool for research and healthcare improvement. Qual Saf Health Care. 2003. https://pubmed.ncbi.nlm.nih.gov/14645763/

#### Q3
*Update:* Six months later every monthly rate falls within the control limits, but the department wants a lower average contamination rate.

**Which of the following is the most appropriate approach to lowering the average rate?**

- A. Investigate each month above the mean
- B. Remove the highest month from the data
- C. Set a lower target and remind staff
- D. Test a change to the whole process  **(key)**
- E. Wait for special cause signals

*Explanation:* When all points fall within the limits the process is stable, and its average reflects the system itself. Lowering the average needs a change to the process for every draw, tested with Plan-Do-Study-Act cycles and tracked on the chart. Investigating each month that happens to sit above the mean treats common cause variation as special cause. This is tampering and can make performance worse. Removing data distorts the picture. Setting a target without changing the process changes nothing. Waiting for a signal will not lower a stable average.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Perla RJ, Provost LP, Murray SK. The run chart: a simple analytical tool for learning from variation in healthcare processes. BMJ Qual Saf. 2011.

### cqi-33: Bleeding gums after a clot diagnosis

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 63-year-old man who speaks Punjabi and limited English presents to the emergency department with gum bleeding. Five days ago he was diagnosed in this department with a proximal deep vein thrombosis and discharged on rivaroxaban 15 mg twice daily for 21 days, then 20 mg once daily. His 14-year-old grandson interpreted at discharge, and the printed instructions were in English. Since then he has been taking 20 mg twice daily. He has no other bleeding. Hemoglobin is 138 g/L.

- Temperature: 36.8°C oral
- Pulse: 88/minute
- Resp.: 16/minute
- BP: 136/82 mmHg
- O2 sat: 98% on room air
- Weight: 84 kg

#### Q1
**Which of the following discharge practices would most likely have prevented this dosing error?**

- A. Extra printed instructions in English
- B. Grandson signing the discharge form
- C. Pharmacy phone number on the sheet
- D. Repeating verbal instructions twice
- E. Using an interpreter with teach-back  **(key)**

*Explanation:* Teach-back, in which the patient explains the plan in his own words, shows whether the two-step dosing was understood. A professional interpreter makes the explanation accurate in Punjabi. Accreditation Canada lists teach-back among the strategies for safe information transfer at discharge. More English instructions do not help a man with limited English. A child interpreting may not convey dose changes accurately, and his signature confirms nothing. Repeating the instructions without checking understanding does not find the error. A phone number helps only if he knows he is confused.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q2
*Update:* His hemoglobin is stable and the dose is corrected. You plan to disclose the error to him.

**Which of the following is the most appropriate way to communicate during the disclosure conversation?**

- A. Certified medical interpreter by phone  **(key)**
- B. Daughter-in-law interprets instead
- C. Grandson interprets as before
- D. Speak slowly in English without help
- E. Written apology in English

*Explanation:* For disclosure, the CMPA advises a healthcare interpreter rather than a family member so the facts, the apology and his questions pass accurately in both directions. A phone or video interpreter is available at any hour. Family members, including his grandson who interpreted the original instructions, may filter or soften what is said and are placed in a difficult role. Slow English does not overcome a language barrier. A written apology in English cannot replace a conversation he can understand.

*Key feature:* Continuous quality improvement (CQI) 2. Disclose any adverse event and its effects to the patient or family, whatever the outcome.

*Source:* Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. 3rd ed. 2017. https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients

#### Q3
*Update:* The department starts a project to improve discharge teaching for patients with limited English.

**Which of the following is the most useful process measure for this project?**

- A. Annual count of DOAC bleeding returns
- B. Interpreter-supported teach-back rate  **(key)**
- C. Number of languages spoken by staff
- D. Patient satisfaction with discharge
- E. Total interpreter budget spent

*Explanation:* A process measure tracks whether the change is actually happening. The share of discharges of patients with limited English that include interpreter-supported teach-back shows directly whether the new practice is being used, and it can be tracked weekly. Returns for bleeding on a DOAC are an outcome measure and too rare to guide weekly tests. Staff languages and interpreter spending are structure and cost figures. Satisfaction is a patient experience measure that does not show whether teach-back occurred.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Chartier LB, Stang AS, Vaillancourt S, Cheng AHY. Quality improvement primer part 2: executing a quality improvement project in the emergency department. CJEM. 2018. https://pubmed.ncbi.nlm.nih.gov/28934995/

### cqi-34: Rounds after an infant's return

- [ ] Approved  - [ ] Needs change  - [ ] Reject

An 11-month-old boy is brought to the emergency department with vomiting and episodes of inconsolable crying. He is diagnosed with gastroenteritis and discharged. He returns 18 hours later, lethargic with bloody stool, and ultrasound shows intussusception. He needs surgery with a bowel resection. The department's triage tool has no prompt for episodic crying in infants. The case is chosen for monthly morbidity and mortality rounds. Past rounds have focused on the presenting physician's errors, attendance has fallen, and no changes have followed from any case.

- Temperature: 37.9°C rectal
- Pulse: 168/minute
- Resp.: 36/minute
- BP: 84/50 mmHg
- O2 sat: 98% on room air
- Weight: 9.6 kg

#### Q1
**Which of the following elements would most improve these rounds, based on a structured Canadian model?**

Select 3.

- A. Cases limited to deaths
- B. Disseminating lessons learned  **(key)**
- C. Focus on individual error
- D. Grading of presenters
- E. Interprofessional participation  **(key)**
- F. Pathway to act on identified issues  **(key)**
- G. Physician-only attendance

*Explanation:* The Ottawa M&M model added four elements: training presenters in case selection and system-focused analysis, engaging interprofessional members, disseminating lessons learned, and an administrative pathway to act on the issues found. A pathway to action answers the problem that no changes have followed. Interprofessional attendance brings in triage nurses, who own part of this story. Focusing on individual error is what emptied these rounds. Limiting cases to deaths would drop this case and most learning events, grading presenters adds judgment rather than learning, and physician-only attendance shuts out the triage nurses. None is part of the model.

*Key feature:* Continuous quality improvement (CQI) 6. Build ongoing quality improvement work into everyday emergency practice.

*Source:* Calder LA, Kwok ESH, Cwinn AA, and colleagues. Enhancing the quality of morbidity and mortality rounds: the Ottawa M&M model. Acad Emerg Med. 2014. https://onlinelibrary.wiley.com/doi/10.1111/acem.12330

#### Q2
**Which of the following questions best frames the analysis of this case at rounds?**

- A. How and why did the defences fail  **(key)**
- B. Was the outcome a known complication
- C. What should the physician have done
- D. Who was responsible for the miss
- E. Would a specialist have diagnosed it

*Explanation:* Incident analysis asks how and why the defences in the system failed, looking at the whole system rather than one person's actions. That question leads to the triage tool, which had no prompt for episodic crying in infants. Asking who was responsible or what the physician should have done repeats the blame that emptied past rounds. Calling the outcome a known complication ends the inquiry early. Whether a specialist would have made the diagnosis says nothing about the defences that failed.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q3
**Which of the following best expresses a statement of findings for the rounds summary?**

- A. Better training is needed for all staff
- B. Parents gave an unclear history of crying
- C. The physician missed the intussusception
- D. Triage tool gap made a miss more likely  **(key)**
- E. Vomiting made gastroenteritis seem likely

*Explanation:* A statement of findings links a contributing factor to the outcome: the factor, within the context of the incident, increased the likelihood of the outcome. A triage tool with no prompt for episodic crying in an infant made a missed intussusception more likely, and it points to a fix. The need for training is a recommendation, not a finding. Saying the physician missed it describes the outcome and assigns blame. Blaming the parents' history and restating why gastroenteritis seemed likely do not identify a system factor that can be changed.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

### cqi-35: A potassium push

- [ ] Approved  - [ ] Needs change  - [ ] Reject

A 55-year-old man with 3 days of vomiting has a potassium of 2.6 mmol/L in the emergency department. The order reads potassium chloride 20 mmol IV over 2 hours. A nurse draws up 20 mmol from a concentrated potassium chloride vial kept in the department's medication room and gives it as an IV push. He develops ventricular fibrillation, is defibrillated, and has return of circulation within 2 minutes. He recovers fully. The department stocks concentrated vials for urgent use because premixed bags from pharmacy take an hour to arrive.

- Temperature: 36.9°C oral
- Pulse: 88/minute
- Resp.: 18/minute
- BP: 118/70 mmHg
- O2 sat: 98% on room air

#### Q1
**Which of the following corrective actions is most likely to prevent this event from happening again?**

- A. Double check before any potassium dose
- B. Education on potassium infusion rates
- C. Policy on potassium administration
- D. Stickers warning to dilute before use
- E. Vials removed, premixed bags stocked  **(key)**

*Explanation:* Removing concentrated potassium vials from the department and stocking premixed bags is a forcing function: an undiluted push can no longer be prepared. Accreditation Canada requires that concentrated potassium not be stocked in care areas. Stocking premixed bags also removes the hour-long wait that justified keeping the vials. A double check and warning stickers are reminders and depend on vigilance. A policy and education are the weakest tier of the hierarchy of effectiveness.

*Key feature:* Continuous quality improvement (CQI) 1. After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q2
**Which of the following products are concentrated electrolytes that Accreditation Canada advises keeping out of emergency department care areas?**

Select 2.

- A. dextrose 5% in water 1 L bag
- B. lactated Ringer's 1 L bag
- C. magnesium sulfate 2 g in 50 mL bag
- D. magnesium sulfate 50% vial  **(key)**
- E. potassium chloride 20 mmol in 100 mL bag
- F. potassium chloride 2 mmol/mL vial  **(key)**
- G. sodium chloride 0.9% 1 L bag

*Explanation:* Accreditation Canada lists potassium at 2 mmol/mL or more and magnesium sulfate above 20% among the concentrated electrolytes that should not be stocked in care areas. A 50% magnesium vial and a 2 mmol/mL potassium vial both qualify. Premixed potassium 20 mmol in 100 mL is 0.2 mmol/mL, and magnesium 2 g in 50 mL is 4%, so both are diluted products meant for infusion. Dextrose 5%, lactated Ringer's and sodium chloride 0.9% are not concentrated electrolytes.

*Key feature:* Continuous quality improvement (CQI) 5. Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.

#### Q3
*Update:* Pharmacy will now deliver premixed potassium bags to an automated cabinet in the department. The team wants to find weak points before it starts.

**Which of the following methods best anticipates new failure points before the process begins?**

- A. Comprehensive incident analysis
- B. Failure mode and effects analysis  **(key)**
- C. Global trigger tool review
- D. Multi-incident analysis
- E. Run chart of potassium orders

*Explanation:* Failure mode and effects analysis is a prospective method. The team maps each step of the new process, asks how each could fail and what the effect would be, and adds safeguards before patients are exposed. Incident analysis, whether comprehensive or multi-incident, looks back at events that have already happened. A trigger tool review measures harm after the fact. A run chart tracks a measure over time once the process is running.

*Key feature:* Continuous quality improvement (CQI) 4. When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect.

*Source:* Canadian Patient Safety Institute. Canadian Incident Analysis Framework. Edmonton, AB. 2012. https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/

#### Q4
**Which of the following best confirms over time that concentrated potassium stays out of care areas?**

- A. Annual audit of stock in care areas  **(key)**
- B. Count of potassium incident reports
- C. Pharmacy purchase records
- D. Staff quiz on potassium safety
- E. Survey of nurse managers

*Explanation:* Accreditation Canada expects an audit of concentrated electrolytes in care areas at least once a year. Physically checking the stock in each area confirms whether vials have crept back in. Incident reports detect a problem only after a patient is exposed, and reporting is incomplete. Purchase records show what pharmacy bought, not where it ended up. A staff quiz tests knowledge, and a manager survey records belief, but neither shows what is on the shelves.

*Key feature:* Continuous quality improvement (CQI) 3. Proactively plan and carry out reviews of care quality using outcome based quality indicators.

*Source:* Accreditation Canada. Required Organizational Practices: 2021 handbook. 2021.
