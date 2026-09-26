// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const discrepancyCallback: OralCase = {
  id: "discrepancy-callback",
  title: "A name on the discrepancy list",
  blueprint: "comm",
  alsoCovers: ["ethics", "geri"],
  priorityTopic: "cqi",
  keyFeatures: [{ topic: "cqi", n: 1 }, { topic: "cqi", n: 2 }, { topic: "msk", n: 4 }, { topic: "analgesia-sedation", n: 2 }],
  summary: "A radiology report flags a patient you discharged two nights ago. You must call her back and talk with her and her daughter.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. A 78 year old woman you discharged two nights ago after a fall is on this morning's radiology discrepancy list for her hip X rays. Nobody has called her yet.",
  card: {
    vitals: {
      temperature: "Not recorded",
      pulse: "88/minute, irregular, at the first visit",
      resp: "Not recorded",
      bp: "146/82 mmHg at the first visit",
      o2sat: "Not recorded",
      weight: "Not recorded",
    },
    medications: "Apixaban 5 mg twice daily, amlodipine 5 mg daily. Acetaminophen 1 g four times daily since discharge.",
    allergies: "None known",
  },
  findings: [
    {
      id: "first-visit",
      label: "Your note from the first visit",
      result:
        "Tripped on a rug at 22:30. Left groin pain 6 out of 10. No head strike. No syncope. Takes apixaban. " +
        "Exam: mild pain on log roll, no shortening or rotation, able to take 4 steps with a walker. " +
        "Heart rate 88 irregular, blood pressure 146/82. Discharged with acetaminophen 1 g four times daily and a walker. Family doctor follow up in 1 week.",
    },
    {
      id: "first-xray",
      label: "Original X rays on review",
      result:
        "AP pelvis and lateral left hip. Looking again, there is a faint sclerotic line across the subcapital femoral neck with slight buckling of the superior cortex. " +
        "Shenton's line is intact. No displacement.",
    },
    {
      id: "phone-contact",
      label: "Phone contact on the chart",
      result:
        "Home number and her daughter's mobile number are listed. The chart notes the patient gave verbal permission two nights ago to share information with her daughter.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Atrial fibrillation. Hypertension. Osteoporosis on no treatment. No cognitive concerns.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Apixaban 5 mg twice daily. Amlodipine 5 mg daily. No allergies.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Lives alone in a bungalow. Independent before the fall.",
    },
    {
      id: "return-status",
      label: "Status on return",
      result:
        "Arrives at 10:05. Pain 9 out of 10. The left leg is shortened and externally rotated. She says she could walk to the bathroom yesterday but not this morning. " +
        "Heart rate 96 irregular, blood pressure 158/88, SpO2 96 percent, temperature 36.8. Distal pulses and sensation normal.",
    },
    {
      id: "repeat-xray",
      label: "Repeat hip X ray",
      result: "Displaced subcapital fracture of the left femoral neck. Garden grade III. No new injury elsewhere.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 118 g/L. Platelets 204 x 10^9/L. Creatinine 96 µmol/L. eGFR 50 mL/min/1.73 m2. Sodium 136 mmol/L. INR 1.2. " +
        "Last apixaban dose at 08:00 today. Type and screen sent.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Atrial fibrillation at 92. Normal axis. No acute ischemic change. QTc 440 ms.",
    },
    {
      id: "ortho",
      label: "Orthopedic surgeon on the phone",
      result:
        "Dr. Okafor will see her today. He says a nondisplaced fracture in a fit 78 year old is often fixed with screws. " +
        "A displaced fracture at her age usually needs a hemiarthroplasty. He plans surgery tomorrow once apixaban has cleared.",
    },
    {
      id: "daughter",
      label: "Her daughter",
      result:
        "Her daughter is 51. She drove her mother home two nights ago. She has read the radiology report on the hospital patient portal this morning. " +
        "She is upset and wants to know why nobody called.",
    },
    {
      id: "policy",
      label: "Department setting and discrepancy policy",
      result:
        "A 220 bed community hospital in southwestern Ontario. The department has 28 stretchers. A radiologist is on site until 17:00. Orthopedic surgery is on call from home. " +
        "Each morning the charge nurse hands the day physician the radiology discrepancy list. " +
        "Discrepancies are to be reviewed by the on duty emergency physician on the day they are reported. Significant findings require same day patient contact and a documented plan. " +
        "The list is printed and left in a tray at the charge desk.",
    },
    {
      id: "discrepancy",
      label: "The discrepancy and the final report",
      result: "You are starting a day shift. You saw her yourself two nights ago at 23:40 after a fall at home. You read her pelvis and left hip X rays as normal and sent her home with acetaminophen and a walker. The final radiology report, signed yesterday at 16:10, reads: 'Subtle nondisplaced subcapital fracture of the left femoral neck. Suggest clinical correlation.' The charge nurse says: 'The list got missed yesterday afternoon. Nobody has called her yet.'",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Start of shift",
      text:
        "It is 08:15. You pull up the original images and the report. The department is quiet. The charge nurse is waiting to hear what you want to do.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The discrepancy",
      prompt: "What do you do now, and how will you reach her?",
      seconds: 90,
      modelAnswer: [
        "Review the images myself and accept the finding. This is a significant missed injury.",
        "Contact her myself now. Do not delegate it or wait for the end of shift.",
        "Tell her to stop weight bearing and not to walk to the car.",
        "Arrange return by ambulance, nothing to eat, and bring her medication list.",
        "Ask when she last took apixaban.",
        "Prepare to meet her and her daughter in person when she arrives.",
        "Ask who is with her at home and how she will get to the ambulance.",
      ],
      rubric: ["dc-a1", "dc-m1", "dc-d1", "dc-h3"],
      choices: [
        {
          id: "c-call-now",
          label: "I reviewed the films, then phoned her myself right away. I told her to stop walking on the leg, to come in by ambulance and not to eat.",
          next: "q-phone",
          quality: "strong",
          feedback:
            "This is what the examiner wants. The physician who knows the case makes the call, promptly. Safety instructions come first because every step on a femoral neck fracture risks displacement. Ambulance transport and fasting prepare her for surgery.",
        },
        {
          id: "c-clerk",
          label: "I asked the unit clerk to call her and tell her to come back for a recheck.",
          next: "s-clerk",
          quality: "partial",
          feedback:
            "She will return, but with no safety instructions and no explanation. A clerk cannot answer questions about the finding. The physician should make this call, tell her to stop weight bearing and arrange ambulance transport.",
        },
        {
          id: "c-fax",
          label: "I faxed the report to her family doctor and asked for follow up in the next week.",
          next: "s-fax",
          quality: "unsafe",
          feedback:
            "A femoral neck fracture needs urgent orthopedic care, not office follow up. The finding was yours to act on. Passing it to the family doctor delays treatment and leaves her walking on an unstable fracture.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-clerk",
      phase: "Forty minutes later",
      text:
        "The clerk reports that her daughter is driving her in. The patient walked to the car with her walker and cried out getting in. Her daughter wants to speak to a doctor now. You call her back.",
      next: "q-phone",
    },
    {
      kind: "say",
      id: "s-fax",
      phase: "An hour later",
      text:
        "Her daughter phones the department. Her mother could not get up from the toilet this morning and needed help back to bed. She has read the report on the portal. The charge nurse puts her through to you.",
      next: "q-phone",
    },
    {
      kind: "question",
      id: "q-phone",
      phase: "On the phone",
      prompt: "The patient and her daughter are on speaker phone. What do you say?",
      seconds: 75,
      modelAnswer: [
        "Introduce myself and confirm I am speaking with the patient. Confirm she is happy for her daughter to hear.",
        "Say plainly that the final X ray report shows a break in the top of the thigh bone.",
        "Say that I did not see it when I looked at the X ray two nights ago, and that I am sorry.",
        "Ask how she has been. Pain, walking and any new fall.",
        "Give clear instructions: do not walk on it, ambulance is coming, nothing to eat.",
        "Say I will meet them when they arrive and explain everything in person.",
      ],
      rubric: ["dc-c1", "dc-c2", "dc-h1"],
      next: "s-arrive",
    },
    {
      kind: "say",
      id: "s-arrive",
      phase: "Back in the department",
      text:
        "The patient arrives at 10:05. Her left leg is now shortened and externally rotated. She rates her pain 9 out of 10. " +
        "The repeat X ray shows the fracture is now displaced. Her daughter is at the bedside with her arms crossed.",
      next: "q-clinical",
    },
    {
      kind: "question",
      id: "q-clinical",
      phase: "Clinical care",
      prompt: "Before any conversation, what clinical care does she need now?",
      seconds: 75,
      modelAnswer: [
        "Analgesia now. Fascia iliaca block with ultrasound plus small doses of IV opioid.",
        "Urgent orthopedic consult. The Ontario standard is surgery within 48 hours of first arrival at hospital. Her first visit was two nights ago, so she is already close to that limit.",
        "Hold apixaban. Note the last dose time and her creatinine clearance for the surgical team.",
        "Blood work, type and screen, ECG. Keep her fasting until the surgical plan is set.",
        "Delirium prevention. Glasses, hearing aids, family present, avoid sedating drugs.",
        "Screen the cause of the fall. It was a mechanical trip with no syncope.",
      ],
      rubric: ["dc-m2", "dc-m3", "dc-h2", "dc-h4"],
      next: "q-disclose",
    },
    {
      kind: "question",
      id: "q-disclose",
      phase: "The disclosure meeting",
      prompt:
        "Her pain is controlled after a fascia iliaca block. Dr. Okafor has seen her and plans a hemiarthroplasty tomorrow. You sit down with the patient and her daughter. Take me through the conversation.",
      seconds: 120,
      modelAnswer: [
        "Quiet private space. Sit down. Ask who she wants present. Turn off the pager if possible.",
        "Ask what they understand so far.",
        "State the facts. The fracture was on the first X ray. I did not recognize it. She went home walking on it.",
        "Apologize clearly. I am sorry that I missed the break.",
        "Explain the consequence honestly. The fracture has moved. The operation is now a partial hip replacement rather than screws.",
        "Explain the plan and what happens next. Offer a named contact and a follow up meeting.",
        "Stop and invite questions. Allow silence.",
      ],
      rubric: ["dc-c3", "dc-c4", "dc-p1"],
      choices: [
        {
          id: "c-full",
          label: "I sat down with both of them, said the break was on the first X ray and that I did not see it, apologized, explained the change in surgery and the plan, and asked what questions they had.",
          next: "s-anger",
          quality: "strong",
          feedback:
            "This covers the core of disclosure. Facts of what happened, a clear apology, the consequence for her, and the plan. Naming your own role is honest and builds trust. The examiner also wants you to offer ongoing contact and a follow up meeting.",
        },
        {
          id: "c-minimize",
          label: "I explained that subtle hip fractures are often missed on first X rays and that the radiology check caught it, so the system worked as it should.",
          next: "s-minimize",
          quality: "partial",
          feedback:
            "It is true that subtle fractures are missed, but leading with that sounds defensive. There is no apology and no clear statement of what happened to her. The system did not work well here, because the result sat for a day. Say what happened, say sorry, then explain.",
        },
        {
          id: "c-new-fall",
          label: "I told them the displacement was probably from a new fall this morning and that the first X ray looked fine at the time.",
          next: "s-new-fall",
          quality: "unsafe",
          feedback:
            "This is not honest. There is no history of a second fall and the fracture was visible on the first film. Misleading a patient breaches the duty to disclose and destroys trust. It also turns a clinical error into a professional conduct problem.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-minimize",
      phase: "At the bedside",
      text:
        "Her daughter says: 'So nobody is responsible? It sat on a list for a day while she walked around on a broken hip.' The patient looks at you and waits.",
      next: "s-anger",
    },
    {
      kind: "say",
      id: "s-new-fall",
      phase: "At the bedside",
      text:
        "Her daughter holds up her phone. 'The report says the break was on the X ray from Tuesday. She has not fallen again. Why are you telling us something different?' " +
        "You correct yourself and explain what actually happened. The room is now much colder.",
      next: "s-anger",
    },
    {
      kind: "say",
      id: "s-anger",
      phase: "Hard questions",
      text:
        "Her daughter leans forward. 'Are you saying this is your fault? Would she have needed surgery anyway? Should we be talking to a lawyer?'",
      next: "q-anger",
    },
    {
      kind: "question",
      id: "q-anger",
      phase: "Hard questions",
      prompt: "How do you answer her daughter?",
      seconds: 90,
      modelAnswer: [
        "Acknowledge her anger. It is reasonable.",
        "Repeat the apology. In Ontario an apology is not an admission of legal liability.",
        "Answer honestly. She would still have needed surgery. The surgeon has said a nondisplaced fracture is often fixed with screws, so the operation may well have been smaller.",
        "Do not speculate beyond the facts. Do not blame colleagues or the radiologist.",
        "Say they are free to seek advice, and give them the patient relations contact.",
        "Promise to share the results of any review and to stay in touch.",
      ],
      rubric: ["dc-c5", "dc-p2"],
      choices: [
        {
          id: "c-honest",
          label: "I said her anger made sense, apologized again, explained she would have needed surgery anyway but possibly a smaller operation, and gave them the patient relations contact.",
          next: "q-chart",
          quality: "strong",
          feedback:
            "Honest, calm and within the facts. The Apology Act, 2009 means an apology is not an admission of liability in Ontario civil proceedings. Answering the surgery question truthfully matters more than protecting yourself. Pointing them to patient relations respects their right to seek advice.",
        },
        {
          id: "c-shutdown",
          label: "I told her I could not discuss fault and that she would need to speak with risk management.",
          next: "s-shutdown",
          quality: "partial",
          feedback:
            "You do not need to comment on legal fault. But shutting down the conversation feels like a cover up. The family deserves an answer to the clinical question and your continued presence. Refer to patient relations as an addition, not a replacement.",
        },
        {
          id: "c-blame",
          label: "I said the radiologist should have called me that night and that it was really a system failure, not mine.",
          next: "s-blame",
          quality: "unsafe",
          feedback:
            "Blaming a colleague in front of the family is unprofessional and speculative. You read the films and made the decision. System factors belong in the incident review, not in a deflection at the bedside.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-shutdown",
      phase: "At the bedside",
      text:
        "Her daughter says: 'That is exactly what I expected.' The patient quietly asks you whether she will walk again. You sit back down and answer her.",
      next: "q-chart",
    },
    {
      kind: "say",
      id: "s-blame",
      phase: "Later that day",
      text:
        "Her daughter repeats your comment to the patient relations office and to the radiologist, who comes to find you. The disclosure has now become a dispute between colleagues. You return to the bedside and correct the record.",
      next: "q-chart",
    },
    {
      kind: "question",
      id: "q-chart",
      phase: "The record",
      prompt: "How do you document the missed fracture and the conversation?",
      seconds: 60,
      modelAnswer: [
        "Do not change the original note.",
        "Write a new dated and timed entry.",
        "Record the discrepancy, the callback, the clinical findings and the plan.",
        "Record the disclosure: who was present, what facts were shared, the apology, questions asked and follow up offered.",
        "Stick to facts. No speculation and no blame.",
      ],
      rubric: ["dc-p3"],
      choices: [
        {
          id: "c-new-entry",
          label: "I wrote a new timed entry with the discrepancy, callback, findings, plan and a factual summary of the disclosure. I did not touch the original note.",
          next: "q-report",
          quality: "strong",
          feedback:
            "Correct. The original record must stand as written. A contemporaneous factual entry protects the patient and you. Include who was present and what was said.",
        },
        {
          id: "c-amend",
          label: "I added a line to my original note saying there was a subtle cortical irregularity and that I had advised follow up.",
          next: "s-amend",
          quality: "unsafe",
          feedback:
            "Altering a record after the fact to change its meaning is a serious professional breach. Electronic records keep an audit trail and the change will be found. Any addition must be a new dated entry that states when it was written.",
        },
        {
          id: "c-brief",
          label: "I wrote 'discussed with family' in the chart and left it there.",
          next: "s-brief",
          quality: "partial",
          feedback:
            "Too thin. A disclosure note should say who was there, what facts were shared, that an apology was made and what follow up was offered. A vague note helps no one if the details are questioned later.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-amend",
      phase: "The next morning",
      text:
        "The health records office flags a late edit to a note linked to a patient relations file. Your chief asks to meet with you. You write a new entry that explains the addition and when it was made.",
      next: "q-report",
    },
    {
      kind: "say",
      id: "s-brief",
      phase: "The next week",
      text:
        "The quality lead reviewing the case cannot tell from the chart what the family was told. She asks you to add a full dated note while you still remember.",
      next: "q-report",
    },
    {
      kind: "question",
      id: "q-report",
      phase: "After the conversation",
      prompt: "What else do you do today, for the system and for yourself?",
      seconds: 75,
      modelAnswer: [
        "File a patient safety incident report today.",
        "Tell the department chief or quality lead.",
        "Flag the process gap. A paper list in a tray was missed for a day.",
        "Call the CMPA for advice. That is appropriate and does not replace disclosure.",
        "Look after yourself. Talk to a trusted colleague. Use physician wellness supports if needed.",
      ],
      rubric: ["dc-l1", "dc-l2", "dc-p4"],
      next: "q-system",
    },
    {
      kind: "question",
      id: "q-system",
      phase: "Fixing the process",
      prompt:
        "The quality lead asks you to join a review. Two failures happened: the fracture was missed on the first read, and the report sat unactioned for a day. What changes would you suggest?",
      seconds: 75,
      modelAnswer: [
        "Treat the first read miss as expected human error. Some subtle fractures will be missed.",
        "The fix is a reliable safety net, not blame.",
        "Replace the paper list with an electronic worklist that stays open until a physician signs it off.",
        "Assign clear ownership each shift, with escalation if not closed by a set time.",
        "Radiologist direct call to the ED physician for significant discrepancies.",
        "Teach about occult hip fracture. Consider CT or MRI when pain persists and films look normal.",
      ],
      rubric: ["dc-l3", "dc-a2"],
      next: "q-followup",
    },
    {
      kind: "question",
      id: "q-followup",
      phase: "Before you go home",
      prompt: "Her daughter asks if she will hear from anyone again, and whether this could happen to someone else. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Disclosure is a process, not one conversation.",
        "Give a named contact and tell them when you will next check in.",
        "Tell them the event is being reviewed to prevent it happening again.",
        "Commit to sharing what was learned and what changes were made.",
        "Confirm her mother is admitted under orthopedics and who is looking after her.",
      ],
      rubric: ["dc-d2", "dc-c6"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The patient has her hemiarthroplasty the next afternoon. Her daughter thanks you for being straight with them and asks to hear about the review. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "dc-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Reviews the original images personally and accepts the discrepancy as a significant missed injury.",
      points: 1,
      teaching: "Look at the films yourself before calling. You need to understand the finding to explain it honestly.",
      source: "cmpa",
    },
    {
      id: "dc-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Knows that subtle femoral neck fractures can be occult and that CT or MRI is used when pain persists with normal films.",
      points: 1,
      teaching: "Plain films miss a small share of hip fractures. Inability to bear weight or persistent groin pain with normal films calls for further imaging.",
      source: "hqo-hip",
    },
    {
      id: "dc-m1",
      competency: "management",
      criterion: "management",
      text: "Tells the patient to stop weight bearing and arranges ambulance return.",
      points: 3,
      critical: true,
      teaching: "Every step on a nondisplaced femoral neck fracture risks displacement. Safety instructions come before any explanation.",
      source: "hqo-hip",
    },
    {
      id: "dc-m2",
      competency: "management",
      criterion: "management",
      text: "Gives prompt analgesia, preferably a fascia iliaca or femoral nerve block plus titrated opioid.",
      points: 2,
      teaching: "Regional blocks reduce opioid needs and delirium in older adults with hip fracture. Do them in the ED.",
      source: "hqo-hip",
    },
    {
      id: "dc-m3",
      competency: "management",
      criterion: "management",
      text: "Arranges urgent orthopedic care with surgery as soon as possible and manages the apixaban.",
      points: 2,
      teaching: "The Ontario quality standard asks for surgery within 48 hours of first arrival at hospital, and a missed first visit counts against that clock. Hold the DOAC and give the surgical team the last dose time and renal function.",
      source: "hqo-hip",
    },
    {
      id: "dc-c1",
      competency: "communication",
      criterion: "process",
      text: "Makes the callback personally and promptly rather than delegating it.",
      points: 2,
      teaching: "The physician involved is usually best placed to make first contact. Delay adds harm and erodes trust.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-c2",
      competency: "communication",
      criterion: "process",
      text: "Confirms identity and consent to speak in front of the daughter before sharing results.",
      points: 1,
      teaching: "Speaker phone calls need a privacy check. Ask the patient who can hear and whether that is all right.",
      source: "cmpa",
    },
    {
      id: "dc-c3",
      competency: "communication",
      criterion: "management",
      text: "Discloses the facts of what happened in plain language, including that the fracture was on the first X ray.",
      points: 3,
      critical: true,
      teaching: "Disclosure means telling the patient what happened, the consequences and what is being done. Leaving out your own role is not full disclosure.",
      source: "cpso-disclosure",
    },
    {
      id: "dc-c4",
      competency: "communication",
      criterion: "process",
      text: "Sets up the meeting well. Private space, seated, patient chooses who attends, checks their understanding first.",
      points: 1,
      teaching: "The setting shapes how the message lands. Sitting down and asking what they know first lowers the temperature.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-c5",
      competency: "communication",
      criterion: "process",
      text: "Answers the question about fault and outcome honestly without speculating or blaming others.",
      points: 2,
      teaching: "Say what is known. She would still have needed surgery, possibly a smaller one. Avoid firm predictions the surgeon has not made and guesses about causes still under review.",
      source: "cmpa",
    },
    {
      id: "dc-c6",
      competency: "communication",
      criterion: "process",
      text: "Offers a named contact and a follow up conversation to share the results of the review.",
      points: 1,
      teaching: "Disclosure continues over time. Families want to know what was learned and what changed.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-p1",
      competency: "professionalism",
      criterion: "management",
      text: "Makes a clear apology that expresses regret for the harm.",
      points: 2,
      teaching: "An apology such as 'I am sorry I missed the break' is expected. In Ontario it cannot be used as an admission of liability.",
      source: "apology-act",
    },
    {
      id: "dc-p2",
      competency: "professionalism",
      criterion: "process",
      text: "Does not mislead the family, minimize the event or blame colleagues.",
      points: 3,
      critical: true,
      teaching: "Misleading a patient about a harmful incident is a professional breach. Blame deflection belongs nowhere in disclosure.",
      source: "cpso-disclosure",
    },
    {
      id: "dc-p3",
      competency: "professionalism",
      criterion: "process",
      text: "Documents in a new timed entry and never alters the original record.",
      points: 2,
      teaching: "Records must not be changed after the fact to alter meaning. Additions are made as new dated entries.",
      source: "cpso-records",
    },
    {
      id: "dc-p4",
      competency: "professionalism",
      criterion: "process",
      text: "Seeks advice from the CMPA and support for their own wellbeing.",
      points: 1,
      teaching: "Calling the CMPA is prudent and does not delay disclosure. Physicians involved in harm often need support themselves.",
      source: "cmpa",
    },
    {
      id: "dc-l1",
      competency: "leadership",
      criterion: "process",
      text: "Files a patient safety incident report and informs the department chief or quality lead.",
      points: 2,
      teaching: "Reporting starts the learning process. It is separate from disclosure and does not assign blame.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-l2",
      competency: "leadership",
      criterion: "process",
      text: "Identifies the unactioned discrepancy list as a system failure in its own right.",
      points: 1,
      teaching: "A result that sits for a day is a second, separate failure. It is often the easier one to fix.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-l3",
      competency: "leadership",
      criterion: "process",
      text: "Proposes reliable fixes such as an electronic discrepancy worklist with clear ownership and escalation.",
      points: 2,
      teaching: "Design out reliance on memory. Forcing functions and clear owners beat reminders and education alone.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-d1",
      competency: "disposition",
      criterion: "history",
      text: "Asks about the last anticoagulant dose and tells her to fast before she comes in.",
      points: 1,
      teaching: "Small practical steps on the phone save hours before surgery.",
      source: "hqo-hip",
    },
    {
      id: "dc-d2",
      competency: "disposition",
      criterion: "process",
      text: "Confirms admission under orthopedics with a clear handover of the disclosure to the inpatient team.",
      points: 1,
      teaching: "The inpatient team needs to know what the family has been told so the message stays consistent.",
      source: "cpsi-disclosure",
    },
    {
      id: "dc-h1",
      competency: "assessment",
      criterion: "history",
      text: "On the phone, asks how she has been since discharge. Pain, whether she can bear weight, and any new fall.",
      points: 2,
      teaching: "New pain or loss of weight bearing suggests the fracture has displaced. The answer sets how fast she must come back.",
      source: "hqo-hip",
    },
    {
      id: "dc-h2",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the first visit history. Mechanism, head strike, syncope and anticoagulant use.",
      points: 2,
      teaching: "A mechanical trip with no syncope needs no cardiac workup. Apixaban use shapes the timing of surgery.",
      source: "hqo-hip",
    },
    {
      id: "dc-h3",
      competency: "disposition",
      criterion: "history",
      text: "Asks about her home situation and who can help her. She lives alone.",
      points: 1,
      teaching: "Living alone affects how she gets back safely today and what rehabilitation she will need.",
      source: "hqo-hip",
    },
    {
      id: "dc-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about baseline function and memory before the fall.",
      points: 1,
      teaching: "Baseline function and cognition guide the choice of operation and the risk of delirium.",
      source: "hqo-hip",
    },
  ],
  sources: [
    {
      id: "cpsi-disclosure",
      citation: "Canadian Patient Safety Institute, now Healthcare Excellence Canada. Canadian Disclosure Guidelines. Being open and honest with patients and families. 2011.",
      url: "https://www.healthcareexcellence.ca/resources/canadian-disclosure-guidelines/",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery. Open and honest communication with patients. 2017.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2015/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients",
    },
    {
      id: "cpso-disclosure",
      citation: "College of Physicians and Surgeons of Ontario. Policy. Disclosure of Harm. Updated 2019.",
      url: "https://www.cpso.on.ca/physicians/policies-guidance/policies/disclosure-of-harm",
    },
    {
      id: "cpso-records",
      citation: "College of Physicians and Surgeons of Ontario. Policy. Medical Records Documentation. Updated 2020.",
      url: "https://www.cpso.on.ca/Physicians/Policies-Guidance/Policies/Medical-Records-Documentation",
    },
    {
      id: "apology-act",
      citation: "Government of Ontario. Apology Act, 2009. S.O. 2009, c. 3.",
      url: "https://www.ontario.ca/laws/statute/09a03",
    },
    {
      id: "hqo-hip",
      citation: "Health Quality Ontario, now Ontario Health. Quality standard. Hip fracture. Care for people with fragility fractures. Updated 2024.",
      url: "https://www.hqontario.ca/Evidence-to-Improve-Care/Quality-Standards/View-All-Quality-Standards/Hip-Fracture",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
