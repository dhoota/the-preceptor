// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const saturdayNightNoBeds: OralCase = {
  id: "saturday-night-no-beds",
  title: "Saturday night with no beds",
  blueprint: "systems",
  alsoCovers: ["cardio", "neuro", "id"],
  priorityTopic: "multiple-patients",
  keyFeatures: [{ topic: "multiple-patients", n: 1 }, { topic: "multiple-patients", n: 2 }, { topic: "multiple-patients", n: 3 }, { topic: "multiple-patients", n: 4 }, { topic: "ischemic-heart-disease", n: 6 }, { topic: "cva", n: 3 }],
  summary: "Three time critical patients arrive at once into a department full of admitted patients.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. An 83 year old man from a long term care home with fever and confusion has waited 95 minutes on a paramedic stretcher in your full department. A STEMI and a code stroke are minutes away.",
  card: {
    vitals: {
      temperature: "38.9°C",
      pulse: "118/minute",
      resp: "26/minute",
      bp: "84/48 mmHg",
      o2sat: "91% on 2 L/minute oxygen",
      weight: "Not recorded",
    },
    medications: "Not recorded",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "board",
      label: "Department board",
      result:
        "36 of 36 stretchers occupied. 22 hold admitted patients waiting for inpatient beds, the longest for 31 hours. " +
        "Resus has 3 bays. Two hold admitted ICU patients waiting for ICU beds. One is free. 6 patients on stretchers are stable and awaiting results.",
    },
    {
      id: "staffing",
      label: "Staffing",
      result:
        "You and one other emergency physician until 01:00, then you alone until 08:00. A physician assistant until 23:00. " +
        "14 nurses scheduled, 2 called in sick and not replaced. One respiratory therapist shared with the ICU.",
    },
    {
      id: "offload",
      label: "Ambulance offload",
      result: "4 ambulance crews waiting to offload. Waits of 35, 50, 70 and 95 minutes. The regional paramedic service reports 2 ambulances free for the whole county.",
    },
    {
      id: "waiting",
      label: "Waiting room",
      result:
        "41 patients waiting. 9 are CTAS 3. The longest CTAS 3 wait is 4 hours 10 minutes. One triage nurse. No reassessment nurse tonight.",
    },
    {
      id: "hospital",
      label: "Hospital status",
      result:
        "A 450 bed community hospital in Ontario with a 24 hour cath lab (team on call from home), a designated stroke centre with CT angiography, and an ICU. The department has 36 stretchers. " +
        "Hospital occupancy 112 percent. 9 inpatients have discharge orders but have not left. The medicine ward has 3 unfunded surge beds that are closed tonight. " +
        "The overcapacity policy allows the administrator on call to move admitted patients to inpatient unit hallways.",
    },
    {
      id: "stemi",
      label: "STEMI patient",
      result:
        "61 year old man. Transmitted ECG: 3 to 4 mm ST elevation V1 to V5 with reciprocal inferior depression. Heart rate 96, blood pressure 138/84. " +
        "Paramedics gave aspirin 160 mg chewed and nitroglycerin. Symptom onset 20:10. First medical contact 20:38.",
    },
    {
      id: "stroke",
      label: "Stroke patient",
      result:
        "74 year old woman. Right arm and face weakness, expressive aphasia. Last seen well 20:25. Blood pressure 176/94. Glucose 6.8 mmol/L. " +
        "On no anticoagulant. No recent surgery or bleeding. Weight about 68 kg.",
    },
    {
      id: "hallway-4",
      label: "Patient in hallway bay 4",
      result:
        "83 year old man from a long term care home. Fever and confusion. Blood pressure 84/48, heart rate 118, respiratory rate 26, SpO2 91 percent on 2 L, temperature 38.9. " +
        "Triaged CTAS 2 on arrival. No physician assessment yet. No IV access.",
    },
    {
      id: "hallway-4-labs",
      label: "Hallway bay 4 results after assessment",
      result:
        "Lactate 4.6 mmol/L. White cell count 19.4 x 10^9/L. Creatinine 168 µmol/L. Urinalysis with large leukocytes and nitrites. Chest X ray clear.",
    },
    {
      id: "cath-ct",
      label: "Cath lab and CT",
      result:
        "Cath lab team can be in 30 minutes from activation. Interventional cardiologist on call. CT is free and a technologist is in the building.",
    },
    {
      id: "admin",
      label: "Administrator on call",
      result:
        "Reached by phone at 21:40. Says: 'The whole hospital is full. There is nothing I can do tonight. Just do your best.'",
    },
    {
      id: "patches",
      label: "The charge nurse's report at 21:00",
      result: "It is 21:00 on a Saturday. The charge nurse, Dana, says: 'Three EMS patches in five minutes. An anterior STEMI 12 minutes out. The field line to the cath lab did not connect so they are coming here. A 74 year old woman with right sided weakness and trouble speaking, last seen well at 20:25, 8 minutes out. And the medic in hallway bay 4 says his patient's pressure is dropping. He has been on their stretcher for 95 minutes. I have nowhere to put any of them.'",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "21:00",
      text: "The charge nurse, Dana, has just told you about three EMS patches in five minutes and is waiting. Your colleague is in the middle of a lumbar puncture. The physician assistant is in the minor treatment area.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first five minutes",
      prompt: "What do you do first?",
      seconds: 90,
      modelAnswer: [
        "Quick huddle with the charge nurse. Take one minute to look at the whole board.",
        "Activate the cath lab now so the STEMI can go straight there.",
        "Call a code stroke. Ask my colleague to lead it once free, and have CT take her straight off the EMS stretcher.",
        "I go to the shocked patient in hallway bay 4 myself.",
        "Create space. Move the 6 stable patients awaiting results to chairs.",
        "Call the administrator on call and trigger the overcapacity policy.",
      ],
      rubric: ["sn-l1", "sn-l2", "sn-m1"],
      choices: [
        {
          id: "c-sweep",
          label: "I huddled with Dana, activated the cath lab, called a code stroke with my colleague leading, went to hallway bay 4 myself and had stable patients moved to chairs.",
          next: "q-stemi",
          quality: "strong",
          feedback:
            "This is leadership under load. Each time critical patient gets a named owner and a pathway that bypasses the full department. The leader keeps sight of the whole board while treating the sickest patient that nobody else is covering.",
        },
        {
          id: "c-stemi-self",
          label: "I went to meet the STEMI patient myself and planned to deal with the others after he was settled.",
          next: "s-stemi-self",
          quality: "partial",
          feedback:
            "The STEMI needs a phone call and a pathway, not the leader standing at the door. Meanwhile the shocked patient in the hallway has had no physician for 95 minutes and the stroke clock is running. The examiner wanted delegation and a system view.",
        },
        {
          id: "c-divert",
          label: "I called dispatch and asked them to divert all ambulances away from our hospital.",
          next: "s-divert",
          quality: "unsafe",
          feedback:
            "Diverting a STEMI and a stroke away from the only PCI and stroke centre nearby delays both reperfusion treatments. Diversion also moves the problem to another full department. Crowding is solved by moving admitted patients out, not by closing the front door.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-stemi-self",
      phase: "21:15",
      text:
        "While you wait at the ambulance bay, Dana calls you. Hallway bay 4 now has a pressure of 76/40 and he is barely rousable. The stroke patient is on a stretcher in the hallway with no physician. You activate the cath lab by phone and go to bay 4.",
      next: "q-stemi",
    },
    {
      kind: "say",
      id: "s-divert",
      phase: "21:08",
      text:
        "Dispatch tells you both patients are already committed, and the next PCI centre is 70 minutes away. There is no regional diversion for STEMI or stroke. You cancel the request and activate the cath lab.",
      next: "q-stemi",
    },
    {
      kind: "question",
      id: "q-stemi",
      phase: "The STEMI",
      prompt: "Walk me through the STEMI. Where does he go and what does he need from you?",
      seconds: 60,
      modelAnswer: [
        "Cath lab activated by phone on the transmitted ECG.",
        "Confirm symptom onset, first medical contact time and the drugs already given.",
        "Target first medical contact to device time under 90 minutes.",
        "Use the one free resus bay only as a brief stop until the lab is open, then straight to the lab.",
        "Aspirin already given. Heparin and a P2Y12 inhibitor per the interventionalist.",
        "Defibrillator pads on. A nurse stays with him. No stretcher space is needed.",
      ],
      rubric: ["sn-m2", "sn-h2"],
      next: "q-stroke",
    },
    {
      kind: "question",
      id: "q-stroke",
      phase: "The stroke",
      prompt: "The stroke patient arrives at 21:08. There is no stretcher. What happens?",
      seconds: 75,
      modelAnswer: [
        "Code stroke. Straight to CT on the EMS stretcher. Do not wait for a department bed.",
        "Confirm last seen well, anticoagulants, recent surgery or bleeding, and weight.",
        "Non contrast CT and CT angiography together.",
        "Tenecteplase 0.25 mg/kg, maximum 25 mg, if no contraindication. For her 68 kg that is 17 mg. Blood pressure under 185/110 first.",
        "Call the endovascular centre if there is a large vessel occlusion.",
        "Assign a nurse for neuro checks after thrombolysis. ICU or stroke unit bed is needed.",
      ],
      rubric: ["sn-m3", "sn-c1", "sn-h1"],
      choices: [
        {
          id: "c-direct-ct",
          label: "She went directly to CT on the paramedic stretcher with my colleague leading, and we gave tenecteplase 0.25 mg/kg on the CT table once the bleed was ruled out.",
          next: "s-bay4",
          quality: "strong",
          feedback:
            "Correct. Direct to CT removes the department bed from the critical path. Every minute of delay costs brain. Crowding must not change the door to needle time.",
        },
        {
          id: "c-wait-bed",
          label: "I asked the paramedics to hold her on their stretcher in the hallway until a resus bay was free.",
          next: "s-wait-bed",
          quality: "partial",
          feedback:
            "The scanner is free. She does not need a bed to be imaged. Holding her in the hallway lets crowding eat into her treatment window. The examiner wanted a direct to CT pathway.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-bed",
      phase: "21:40",
      text:
        "The resus bay does not free up. The paramedic crew asks why she has not gone to CT. You send her straight to the scanner. Tenecteplase goes in at 21:58, 50 minutes after arrival.",
      next: "s-bay4",
    },
    {
      kind: "say",
      id: "s-bay4",
      phase: "Hallway bay 4",
      text:
        "The man in hallway bay 4 is on the paramedic stretcher with no IV access. The medic says, 'I have three calls holding. I cannot stay much longer.'",
      next: "q-offload",
    },
    {
      kind: "question",
      id: "q-offload",
      phase: "Hallway bay 4",
      prompt: "What do you do for this patient, and for the crew?",
      seconds: 90,
      modelAnswer: [
        "Take over his care now. He is in septic shock.",
        "Accept the handover and free the crew. Offload is a hospital responsibility.",
        "Move him to a monitored space. Make one by moving a stable patient to a chair.",
        "Two IVs, cultures, lactate, broad antibiotics within 1 hour. Urosepsis likely. A long term care resident may carry resistant organisms, so choose per the local antibiogram, such as piperacillin tazobactam.",
        "Crystalloid up to 30 mL/kg in boluses with reassessment. Norepinephrine for a mean arterial pressure under 65 after fluid. Peripheral start is acceptable.",
        "Goals of care from the long term care home file.",
        "Get the paramedic handover. Urinary or chest symptoms, medications and allergies.",
      ],
      rubric: ["sn-m4", "sn-d1", "sn-h3", "sn-x1"],
      choices: [
        {
          id: "c-take",
          label: "I accepted handover, had a stable patient moved to a chair so he could have a monitored stretcher, and started cultures, antibiotics, fluids and norepinephrine.",
          next: "s-admin",
          quality: "strong",
          feedback:
            "Right. He is the hospital's patient from the moment he arrived. Sepsis treatment cannot wait for a bed. Freeing the crew returns an ambulance to a county that has only two.",
        },
        {
          id: "c-ems-keep",
          label: "I asked the medic to keep monitoring him on their stretcher until we had a bed, and ordered antibiotics.",
          next: "s-ems-keep",
          quality: "partial",
          feedback:
            "Paramedics cannot provide ongoing hospital care and are needed in the community. Antibiotics without access and fluids do not treat shock. Create a space and take the patient.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ems-keep",
      phase: "21:35",
      text:
        "The paramedic supervisor arrives and says the county has no free ambulances and a cardiac arrest call is waiting. His pressure is now 72/40. You move a stable patient to a chair and take over his care.",
      next: "s-admin",
    },
    {
      kind: "say",
      id: "s-admin",
      phase: "21:40",
      text:
        "You reach the administrator on call. She says: 'The whole hospital is full. There is nothing I can do tonight. Just do your best.' " +
        "Dana adds that the stroke patient needs a monitored bed after tenecteplase and there are none.",
      next: "q-escalate",
    },
    {
      kind: "question",
      id: "q-escalate",
      phase: "Escalation",
      prompt: "How do you respond to the administrator?",
      seconds: 90,
      modelAnswer: [
        "Describe the risk in concrete terms. Three time critical patients, 22 boarders, 4 offload delays, 41 waiting.",
        "Make specific requests. Move admitted patients to inpatient hallways under the overcapacity policy.",
        "Open the closed surge beds. Push the 9 written discharges out tonight.",
        "Ask for replacement nursing staff and for inpatient teams to care for their own boarded patients.",
        "Ask for escalation to the senior executive on call if she cannot act.",
        "Document the conversation and the risk.",
      ],
      rubric: ["sn-l3", "sn-c2"],
      choices: [
        {
          id: "c-specific",
          label: "I described the risk in numbers, asked her to move admitted patients to inpatient hallways, open the surge beds, push out discharges and find nurses, and said I would escalate to the executive on call if needed.",
          next: "q-waiting",
          quality: "strong",
          feedback:
            "Good escalation is specific and calm. Boarding is the main driver of crowding and the fix sits in the hospital, not the department. Spreading admitted patients across inpatient units is safer than concentrating them in the emergency department.",
        },
        {
          id: "c-accept",
          label: "I accepted that nothing more could be done and told Dana we would manage.",
          next: "s-accept",
          quality: "partial",
          feedback:
            "The department cannot absorb this alone. Accepting it transfers hospital risk to the patients in the waiting room. The physician in charge must escalate with specific requests and document the risk.",
        },
        {
          id: "c-shout",
          label: "I told her this was unsafe, that she should come in and see it herself, and hung up.",
          next: "s-shout",
          quality: "partial",
          feedback:
            "The concern is valid but the delivery closes the door. Anger without a specific request gives her nothing to act on. Name the risk, the requests and the next step in the chain.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept",
      phase: "01:00",
      text:
        "Your colleague leaves. Three patients have left without being seen. A CTAS 3 patient in the waiting room has now been there 6 hours. The ICU patients are still in resus. You call the administrator back with specific requests.",
      next: "q-waiting",
    },
    {
      kind: "say",
      id: "s-shout",
      phase: "22:10",
      text:
        "Nothing changes for half an hour. Dana suggests you call back with a list. You apologize for your tone and make specific requests. The administrator agrees to open the surge beds.",
      next: "q-waiting",
    },
    {
      kind: "question",
      id: "q-waiting",
      phase: "The waiting room",
      prompt: "There are 41 people in the waiting room and one triage nurse. How do you keep them safe tonight?",
      seconds: 75,
      modelAnswer: [
        "Assign a nurse to reassess waiting patients on CTAS intervals. CTAS 3 every 30 minutes.",
        "Start investigations at triage through medical directives. ECGs, blood work, urinalysis.",
        "Physician or physician assistant rapid assessment in a chair zone for vertical patients.",
        "Re triage anyone whose vital signs change.",
        "Tell patients about delays and how to alert staff if they feel worse.",
      ],
      rubric: ["sn-a1", "sn-d2"],
      next: "q-team",
    },
    {
      kind: "question",
      id: "q-team",
      phase: "Your team",
      prompt: "At midnight Dana tells you two nurses are in tears in the break room and one says she is going to quit. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Take two minutes to check in with them. Acknowledge that the load is not their failure.",
        "Hold a short huddle. Share the plan and what has been escalated.",
        "Rebalance assignments. Ask for help from the ICU outreach team or float nurses.",
        "Call in the backup emergency physician if the call schedule allows.",
        "Plan a debrief and offer employee support.",
      ],
      rubric: ["sn-p1", "sn-l4"],
      next: "q-after",
    },
    {
      kind: "question",
      id: "q-after",
      phase: "Morning",
      prompt: "At 08:00 you hand over. What do you do beyond the handover?",
      seconds: 60,
      modelAnswer: [
        "File safety reports for the offload delay, the left without being seen patients and any harm.",
        "Record the overnight numbers. Boarders, offload times, waits.",
        "Send a written summary to the department chief and the hospital leadership.",
        "Support system advocacy through medical staff and CAEP channels.",
        "Take part in the hospital flow review.",
      ],
      rubric: ["sn-p2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The STEMI patient had a stent at 21:58. The stroke patient's speech is improving. The man from hallway bay 4 is in the ICU. Eleven admitted patients moved to inpatient hallways at 23:30. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "sn-l1",
      competency: "leadership",
      criterion: "history",
      text: "Takes a quick overview of the whole department with the charge nurse before acting.",
      points: 1,
      teaching: "One minute of situational awareness prevents the leader from fixating on the loudest problem.",
      source: "caep-crowding",
    },
    {
      id: "sn-l2",
      competency: "leadership",
      criterion: "process",
      text: "Delegates each time critical patient to a named clinician and pathway rather than doing everything personally.",
      points: 3,
      critical: true,
      teaching: "The leader's job in a surge is allocation. Name an owner for each critical patient and stay on top of the board.",
      source: "caep-crowding",
    },
    {
      id: "sn-l3",
      competency: "leadership",
      criterion: "process",
      text: "Escalates to hospital administration with specific requests including moving admitted patients to inpatient hallways.",
      points: 3,
      critical: true,
      teaching: "Access block is a hospital problem. Full capacity protocols spread admitted patients across inpatient units and are not associated with harm.",
      source: "viccellio",
    },
    {
      id: "sn-l4",
      competency: "leadership",
      criterion: "process",
      text: "Holds a team huddle and rebalances workload under pressure.",
      points: 1,
      teaching: "A brief huddle restores a shared plan and tells staff that their concerns have been heard and escalated.",
      source: "caep-crowding",
    },
    {
      id: "sn-m1",
      competency: "management",
      criterion: "management",
      text: "Personally assesses and treats the shocked patient nobody else is covering.",
      points: 2,
      teaching: "The patient in the hallway on a paramedic stretcher is the one most likely to be forgotten.",
      source: "ssc",
    },
    {
      id: "sn-m2",
      competency: "management",
      criterion: "management",
      text: "Activates the cath lab and routes the STEMI directly there, with a first medical contact to device target under 90 minutes.",
      points: 2,
      teaching: "Direct to lab pathways avoid the crowded department. Aspirin should already be in, with anticoagulation per the interventional team.",
      source: "ccs-stemi",
    },
    {
      id: "sn-m3",
      competency: "management",
      criterion: "management",
      text: "Sends the stroke patient directly to CT and gives tenecteplase 0.25 mg/kg to a maximum of 25 mg with blood pressure under 185/110.",
      points: 2,
      teaching: "Canadian targets are a median door to needle time of 30 minutes or less and 60 minutes or less in 90 percent of patients. Direct to CT pathways keep crowding off the critical path.",
      source: "csbpr",
    },
    {
      id: "sn-m4",
      competency: "management",
      criterion: "management",
      text: "Treats septic shock promptly with cultures, antibiotics within 1 hour, 30 mL/kg crystalloid and norepinephrine for a mean arterial pressure under 65.",
      points: 3,
      critical: true,
      teaching: "Delay to antibiotics in septic shock raises mortality. Peripheral norepinephrine is acceptable to start.",
      source: "ssc",
    },
    {
      id: "sn-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Arranges reassessment of waiting patients at CTAS intervals and re triages on change.",
      points: 2,
      teaching: "CTAS sets reassessment at every 15 minutes for level 2 and 30 minutes for level 3. Waiting patients deteriorate unseen.",
      source: "ctas",
    },
    {
      id: "sn-c1",
      competency: "communication",
      criterion: "process",
      text: "Uses closed loop communication with the stroke and cath lab teams and the paramedics.",
      points: 1,
      teaching: "Confirm who is doing what. Parallel pathways fail when two people each think the other made the call.",
      source: "csbpr",
    },
    {
      id: "sn-c2",
      competency: "communication",
      criterion: "process",
      text: "Frames the escalation calmly with numbers and names the next step in the chain if needed.",
      points: 2,
      teaching: "Concrete data and specific asks get action. Anger without a request does not.",
      source: "caep-crowding",
    },
    {
      id: "sn-d1",
      competency: "disposition",
      criterion: "process",
      text: "Accepts the ambulance handover and releases the crew.",
      points: 2,
      teaching: "Offload delay leaves communities without ambulances. Once at the hospital, the patient is the hospital's responsibility.",
      source: "caep-crowding",
    },
    {
      id: "sn-d2",
      competency: "disposition",
      criterion: "process",
      text: "Uses medical directives at triage and a vertical rapid assessment zone to keep patients moving.",
      points: 1,
      teaching: "Starting tests at triage and seeing stable patients in chairs shortens waits without new beds.",
      source: "ctas",
    },
    {
      id: "sn-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Checks in with distressed staff and plans a debrief.",
      points: 1,
      teaching: "Moral distress from working in unsafe conditions is common. Leaders should name it and act on it.",
      source: "caep-crowding",
    },
    {
      id: "sn-p2",
      competency: "professionalism",
      criterion: "process",
      text: "Files safety reports and a written summary of the risk to leadership.",
      points: 1,
      teaching: "Crowding harms patients. Written reports and data make that harm visible and support system change.",
      source: "caep-crowding",
    },
    {
      id: "sn-h1",
      competency: "assessment",
      criterion: "history",
      text: "Confirms the stroke patient's last seen well time, anticoagulant use, recent surgery or bleeding, glucose and weight before tenecteplase.",
      points: 2,
      teaching: "Eligibility and the dose depend on these facts. Confirm them while she is moving to CT so they do not add delay.",
      source: "csbpr",
    },
    {
      id: "sn-h2",
      competency: "assessment",
      criterion: "history",
      text: "Confirms the STEMI patient's symptom onset, first medical contact time and the drugs paramedics gave.",
      points: 1,
      teaching: "Onset and first medical contact set the reperfusion clock. Knowing what was given avoids double dosing.",
      source: "ccs-stemi",
    },
    {
      id: "sn-h3",
      competency: "assessment",
      criterion: "history",
      text: "Gets a focused history for the hallway patient from the paramedic and the long term care file. Source symptoms, time course, medications, allergies and goals of care.",
      points: 2,
      teaching: "The paramedic and the transfer file are the only history for a confused patient. Goals of care decide how far to escalate.",
      source: "ssc",
    },
    {
      id: "sn-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes septic shock with a likely urinary source in the hallway patient.",
      points: 2,
      teaching: "Fever, confusion, hypotension and tachypnea in a long term care resident are septic shock until proven otherwise. Look for a source on exam and in the urine.",
      source: "ssc",
    },
  ],
  sources: [
    {
      id: "caep-crowding",
      citation: "Affleck A, Parks P, Drummond A, Rowe BH, Ovens HJ. Emergency department overcrowding and access block. CAEP position statement. CJEM. 2013.",
      url: "https://pubmed.ncbi.nlm.nih.gov/24176460/",
    },
    {
      id: "viccellio",
      citation: "Viccellio A, et al. The association between transfer of emergency department boarders to inpatient hallways and mortality. A 4 year experience. Annals of Emergency Medicine. 2009.",
      url: "https://pubmed.ncbi.nlm.nih.gov/19345442/",
    },
    {
      id: "ctas",
      citation: "Bullard MJ, et al. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) guidelines 2016. CJEM. 2017.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28756800/",
    },
    {
      id: "ccs-stemi",
      citation: "Wong GC, et al. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST elevation myocardial infarction. Focused update on regionalization and reperfusion. Canadian Journal of Cardiology. 2019.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30760415/",
    },
    {
      id: "csbpr",
      citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022.",
      url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management",
    },
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine. 2021.",
      url: "https://pubmed.ncbi.nlm.nih.gov/34605781/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
