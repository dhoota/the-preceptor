// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const wildfireEvacueesHostHospital: OralCase = {
  id: "wildfire-evacuees-host-hospital",
  title: "The first plane from the north",
  blueprint: "systems",
  alsoCovers: ["comm", "resus"],
  priorityTopic: "multiple-patients",
  keyFeatures: [
    { topic: "multiple-patients", n: 1 },
    { topic: "multiple-patients", n: 2 },
    { topic: "multiple-patients", n: 3 },
    { topic: "multiple-patients", n: 4 },
    { topic: "cqi", n: 5 },
  ],
  summary: "Evacuees from a northern community arrive at your hospital in the evening, and several need care at once.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A wildfire has forced a fly-in First Nation to evacuate, and the first plane of evacuees landed an hour ago. A 63 year old man who has missed two dialysis sessions says his legs feel weak.",
  card: {
    vitals: {
      temperature: "36.4°C oral",
      pulse: "48/minute",
      resp: "22/minute",
      bp: "172/96 mmHg",
      o2sat: "93% on room air",
      weight: "91 kg (201 lb)",
    },
    medications: "Not recorded. His medication list was left behind.",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "evacuation",
      label: "The evacuation",
      result:
        "Your town is a host community. The first plane brought 58 people at 19:00 to a reception centre at the arena. A second plane with about 70 people lands at 23:00. The community's nursing station closed this morning, and most paper records stayed behind. " +
        "The community health representative travelled with the group and speaks Oji-Cree and English. Provincial emergency management runs the evacuation and has a liaison at the reception centre.",
    },
    {
      id: "department",
      label: "The department at 20:00",
      result:
        "14 of 16 stretchers are full. One resuscitation bay is free. 11 evacuees are in the waiting room with family members, and more are walking over from the arena. One triage nurse. Two ambulances are on the road with other patients.",
    },
    {
      id: "staff",
      label: "Staff and hospital resources",
      result:
        "You are the only emergency physician until a colleague on call from home can arrive, about 25 minutes after a call. A charge nurse and 6 nurses. A pharmacist until 22:00. " +
        "The hospital has a 6 station dialysis unit that is closed overnight and fully booked tomorrow. Nephrology is at the regional centre 2 hours away by road and answers by phone. Transfers go through CritiCall Ontario.",
    },
    {
      id: "dialysis-hpi",
      label: "The man on dialysis: history (through the community health representative)",
      result:
        "He dialyzes three times a week at a unit in a city 300 km from home and flies out for it. His last session was 4 days ago. Smoke closed the airstrip, so he missed two. For a day his legs have felt heavy and weak, and he has been short of breath lying flat. " +
        "He makes little urine. He has type 2 diabetes and hypertension. His daughter is with him and has a photo of his pill bottles on her phone.",
    },
    {
      id: "dialysis-meds",
      label: "The man on dialysis: medications (from the photo)",
      result: "Insulin glargine, amlodipine, metoprolol, sevelamer and calcitriol. No potassium binder. His daughter says he has no allergies.",
    },
    {
      id: "dialysis-exam",
      label: "The man on dialysis: examination",
      result:
        "Alert. Speaks in full sentences. Crackles at both bases. Jugular venous pressure raised. Pitting edema to the knees. A left arm fistula with a good thrill. Leg strength 4 out of 5 symmetrically.",
    },
    {
      id: "dialysis-ecg",
      label: "The man on dialysis: ECG and gas",
      result:
        "ECG: sinus bradycardia at 48/minute, PR 240 ms, tall peaked T waves and a QRS of 136 ms. Venous gas: pH 7.26, potassium 7.6 mmol/L, bicarbonate 15 mmol/L, glucose 9.4 mmol/L.",
    },
    {
      id: "waiting",
      label: "Evacuees in the waiting room at 20:05",
      result:
        "A. A 29 year old woman, 34 weeks pregnant, with irregular tightening every 15 minutes. B. A 7 year old boy with type 1 diabetes whose insulin pens were left behind. Glucose 19.2 mmol/L, blood ketones 0.4 mmol/L, alert and well. " +
        "C. A 41 year old man on buprenorphine-naloxone who has missed 2 days of doses. He is sweating, yawning and has stomach cramps. D. An 84 year old woman with dementia who came on the plane without family. E. Seven adults asking for refills of regular medications.",
    },
    {
      id: "elder",
      label: "The 84 year old woman",
      result:
        "She speaks only Oji-Cree. The community health representative says she is a respected elder who lives with her granddaughter, who is on the second plane. She has no wristband and her name was spelled two ways on the flight list. " +
        "She is calm, oriented to person only, with normal vital signs and no injury. Her granddaughter, reached by phone at the airstrip, says this is her usual memory.",
    },
    {
      id: "second-plane",
      label: "Message from the reception centre at 21:30",
      result:
        "The second plane carries 3 more people on hemodialysis, a man on home oxygen and two infants under 3 months. The liaison asks whether your hospital can take all of them tonight.",
    },
    {
      id: "nephro",
      label: "Nephrology advice by phone",
      result:
        "The nephrologist agrees he needs dialysis tonight. She can call in your dialysis nurse and run him locally with phone support, or accept him in transfer. The regional renal program can open extra shifts tomorrow if the province routes dialysis patients to them.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "20:00",
      text: "The triage nurse brings him in a wheelchair with his daughter and the community health representative. Behind them the waiting room is filling with families carrying bags and blankets. The charge nurse says, 'More are coming from the arena.'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first minutes",
      prompt: "What do you do first, and how do you organize the department?",
      seconds: 110,
      modelAnswer: [
        "Triage by complaint, vital signs and airway, breathing and circulation. A man who missed dialysis with a pulse of 48 and weak legs goes to resuscitation first.",
        "Monitor, IV access and an ECG now. A venous gas gives a potassium in minutes.",
        "Call in the colleague on call. Ask the charge nurse to triage every evacuee with the CTAS tool and to bring the sickest forward.",
        "Use the community health representative to interpret, not a child.",
        "Tell the administrator on call that the hospital needs its surge plan and incident management, with a link to the provincial liaison.",
        "Have someone reassess the waiting room as more people arrive.",
      ],
      rubric: ["wf-h1", "wf-p1", "wf-p2", "wf-pr1"],
      choices: [
        {
          id: "c-resus-first",
          label: "I took him straight to resuscitation for a monitor, IV and ECG, called in my colleague, asked the charge nurse to triage every evacuee with CTAS, and asked the administrator to activate the surge plan and incident management.",
          next: "q-hyperk",
          quality: "strong",
          feedback:
            "Good. Missed dialysis, a slow pulse and weak legs mean hyperkalemia until the ECG says otherwise. Sorting a crowd by acuity, not arrival order, finds the patient who can die first. A planned evacuation is a surge that needs the hospital's emergency structure.",
        },
        {
          id: "c-in-order",
          label: "I asked the nurses to keep seeing evacuees in the order they arrived, and planned to see him after the pregnant woman, who came in first.",
          next: "s-in-order",
          quality: "unsafe",
          feedback:
            "Arrival order is not triage. He has a pulse of 48 after missing two sessions and may be close to a hyperkalemic arrest. CTAS sorts by complaint and vital signs so the sickest are seen first.",
        },
        {
          id: "c-dialysis-am",
          label: "I booked him into the dialysis unit for the first slot tomorrow and sent him back to the arena to rest.",
          next: "s-dialysis-am",
          quality: "unsafe",
          feedback:
            "He needs an ECG and a potassium before anyone decides he can wait. Weakness and bradycardia after missed dialysis are warning signs of life threatening hyperkalemia. Never send this patient away untested.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-in-order",
      phase: "20:20",
      text: "His daughter runs to the desk. He is grey and his pulse is 38. The nurse moves him to resuscitation and attaches the monitor. The ECG shows very wide complexes. You go straight to him.",
      next: "q-hyperk",
    },
    {
      kind: "say",
      id: "s-dialysis-am",
      phase: "20:10",
      text: "The triage nurse refuses to send him away without an ECG. She runs one at the desk and brings it to you. It shows peaked T waves and a wide QRS. You take him to resuscitation.",
      next: "q-hyperk",
    },
    {
      kind: "question",
      id: "q-hyperk",
      phase: "The man on dialysis",
      prompt: "His potassium is 7.6 mmol/L and the QRS is 136 ms. What do you do now?",
      seconds: 90,
      modelAnswer: [
        "IV calcium now to protect the heart, repeated if the ECG does not improve.",
        "Insulin with glucose to shift potassium into cells, with glucose checks for hours afterward.",
        "Nebulized salbutamol as an added shift.",
        "Dialysis is the only definitive treatment for him. Call nephrology now.",
        "Treat the fluid overload with oxygen and sitting upright. He makes little urine, so diuretics will not help much.",
        "Continuous cardiac monitoring with pads on until he is dialyzed.",
      ],
      rubric: ["wf-m1", "wf-m2"],
      next: "s-nephro",
    },
    {
      kind: "say",
      id: "s-nephro",
      phase: "20:40",
      text: "After calcium his QRS narrows to 104 ms. The nephrologist offers to call in your dialysis nurse and support a local run, or to accept him at the regional centre. Your colleague has arrived. The waiting room now holds 19 evacuees.",
      next: "q-others",
    },
    {
      kind: "question",
      id: "q-others",
      phase: "The waiting room",
      prompt: "Your colleague has arrived. How do you manage the other evacuees while he is treated?",
      seconds: 100,
      modelAnswer: [
        "Divide the work. Your colleague takes the waiting room and you stay with the man in resuscitation.",
        "The pregnant woman needs fetal monitoring and assessment in the birthing unit now.",
        "The boy needs insulin from the pharmacy at his usual dose, with ketone checks and a plan for supplies.",
        "Continue the man's buprenorphine after confirming his dose with his dispensing pharmacy or the community's nurse in charge.",
        "Get medication histories from patients, families, photos, pharmacies and the nurse in charge, since records were left behind.",
        "Set up a refill clinic with the pharmacist so people who only need medications are not waiting in the department.",
      ],
      rubric: ["wf-h2", "wf-m3", "wf-pr4"],
      choices: [
        {
          id: "c-parallel",
          label: "My colleague took the waiting room. The pregnant woman went to the birthing unit for monitoring, the boy got insulin and a supply plan, the man's buprenorphine was confirmed with his pharmacy and continued, and the pharmacist set up a refill station for the others.",
          next: "s-second-plane",
          quality: "strong",
          feedback:
            "Good. Once the sickest patient is stable, the others are managed in parallel with clear roles. Most evacuees need continuity of their usual care, not emergency care, and a refill station keeps them safe without crowding the department.",
        },
        {
          id: "c-send-back",
          label: "I asked the nurses to send everyone who was not acutely ill back to the arena to see a doctor in the morning.",
          next: "s-send-back",
          quality: "partial",
          feedback:
            "Freeing the department is reasonable, but not without assessment. The pregnant woman has contractions, the boy has no insulin and the man is in withdrawal. Each needs a plan tonight. Stream them, do not send them away.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-send-back",
      phase: "21:15",
      text: "The community health representative comes back from the arena. The boy's glucose is now 24 mmol/L, and the pregnant woman's tightening is every 7 minutes. Your colleague brings them back, and the pharmacist opens a refill station.",
      next: "s-second-plane",
    },
    {
      kind: "say",
      id: "s-second-plane",
      phase: "21:30",
      text: "The reception centre liaison calls. The second plane carries three more people on hemodialysis, a man on home oxygen and two infants under 3 months. She asks whether your hospital can take all of them tonight.",
      next: "q-capacity",
    },
    {
      kind: "question",
      id: "q-capacity",
      phase: "The second plane",
      prompt: "What do you tell her, and who else do you involve?",
      seconds: 90,
      modelAnswer: [
        "Be honest about capacity. Your dialysis unit cannot safely take three more people tonight and tomorrow is full.",
        "Through the hospital incident command, ask the province to route the dialysis patients to a host centre with dialysis capacity, with the regional renal program.",
        "Ask for the man on oxygen to bring or be met with oxygen at the airport, and for the infants to be checked at the reception centre or here.",
        "Ask EMS to meet the plane for anyone who is unwell, and to tell you who is coming.",
        "Arrange dialysis for your patient tonight, locally with phone support or by transfer with a monitored escort.",
        "Agree on a time for the next update with the liaison and the community's leadership.",
      ],
      rubric: ["wf-m2", "wf-pr2"],
      choices: [
        {
          id: "c-coordinate",
          label: "I told her we could not dialyze three more people safely, asked incident command to have the province route them to a centre with dialysis capacity through the renal program, asked EMS to meet the plane, and arranged local dialysis tonight for our patient with nephrology on the phone.",
          next: "s-elder",
          quality: "strong",
          feedback:
            "Good. When demand exceeds what you can safely provide, the answer is to use the regional system early, not to stretch past safe limits. Evacuations are planned events, so the province can route people to where services exist.",
        },
        {
          id: "c-accept-all",
          label: "I said yes to all of them, since they have nowhere else to go, and planned to fit the dialysis patients in somehow tomorrow.",
          next: "s-accept-all",
          quality: "partial",
          feedback:
            "The wish to help is right, but a full dialysis unit cannot add three patients safely, and missed dialysis can kill. Telling the province early lets them route patients to centres with capacity. Escalate through incident command.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept-all",
      phase: "22:00",
      text: "The dialysis charge nurse calls. She has no staff or stations for three extra runs. The administrator on call contacts the provincial operations centre, which routes the dialysis patients to the regional centre.",
      next: "s-elder",
    },
    {
      kind: "say",
      id: "s-elder",
      phase: "22:15",
      text: "A man at the desk says he is the 84 year old woman's nephew and wants to take her back to the arena. She does not seem to know him. Her name is spelled two ways on the flight list, and she has no wristband.",
      next: "q-elder",
    },
    {
      kind: "question",
      id: "q-elder",
      phase: "The elder",
      prompt: "What do you do?",
      seconds: 80,
      modelAnswer: [
        "Keep her safe in the department until her identity and her caregiver are confirmed.",
        "Give her a temporary identity band with two identifiers and record both spellings.",
        "Confirm who she is and who cares for her with the community health representative, the evacuation registry and her granddaughter on the second plane.",
        "Speak with her in her language through the community health representative.",
        "Do not release a confused elder to someone she does not recognize until he is verified.",
        "Plan a safe hand over to her granddaughter when she arrives.",
      ],
      rubric: ["wf-h3", "wf-pr3"],
      choices: [
        {
          id: "c-verify",
          label: "I kept her with us, gave her a temporary band with two identifiers and both spellings, asked the community health representative and the evacuation registry to confirm her family, and waited for her granddaughter.",
          next: "q-close",
          quality: "strong",
          feedback:
            "Correct. Use at least two identifiers for every patient. An elder with dementia, far from home, with a name spelled two ways, is at high risk of being lost or misidentified. Her granddaughter is the person to receive her.",
        },
        {
          id: "c-release",
          label: "I let him take her back to the arena, since he knew her name and she was medically well.",
          next: "s-release",
          quality: "unsafe",
          feedback:
            "She cannot tell you whether he is family, and he is not on her flight record as her caregiver. Releasing a confused elder to an unverified adult puts her at risk. Verify identity and the caregiver first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-release",
      phase: "23:40",
      text: "Her granddaughter arrives on the second plane and cannot find her. The liaison learns the man is not related and left the arena. Police find her an hour later walking near the highway, cold but unhurt. You report the event.",
      next: "q-close",
    },
    {
      kind: "question",
      id: "q-close",
      phase: "Midnight",
      prompt: "The second plane is in. Before you hand over at midnight, what do you set up for the night and the days ahead?",
      seconds: 70,
      modelAnswer: [
        "A list of every evacuee seen, with plans, pending results and where each person is now.",
        "A handover of the man on dialysis, his potassium, the dialysis plan and the monitoring.",
        "A daily clinic at the reception centre with a physician, nurse and pharmacist, linked to the community's own nurses.",
        "Interpretation through the community health representative and other trained interpreters, and respect for the community's own leaders.",
        "A short debrief for the team, and feedback to incident command on what to change for the next evacuation.",
      ],
      rubric: ["wf-pr4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is dialyzed in your unit at 23:30 with nephrology on the phone, and his potassium falls to 4.8 mmol/L. The three dialysis patients on the second plane go to the regional centre. The elder stays with her granddaughter at the arena. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "wf-h1",
      competency: "assessment",
      criterion: "history",
      text: "Takes a history from the man on dialysis through a trained interpreter. Last session, missed sessions, weakness, breathlessness lying flat, urine output and medications.",
      points: 2,
      teaching: "Missed dialysis is a common cause of severe hyperkalemia. Weakness and bradycardia are warning signs that need an ECG and a potassium at once.",
      source: "ukka-k",
    },
    {
      id: "wf-h2",
      competency: "assessment",
      criterion: "history",
      text: "Gets medication histories for evacuees without records, from patients, families, photos of bottles, dispensing pharmacies and the community's nurse in charge.",
      points: 2,
      teaching: "Disaster plans must account for vulnerable people and those with special needs. People evacuated without records still need safe continuity of their usual medications.",
      source: "caep-disaster",
    },
    {
      id: "wf-h3",
      competency: "assessment",
      criterion: "history",
      text: "Gets collateral about the elder's identity, usual memory and caregiver from the community health representative, the registry and her granddaughter.",
      points: 1,
      teaching: "Collateral confirms both who the patient is and what is normal for her. Her granddaughter says her memory is at baseline.",
      source: "who-id",
    },
    {
      id: "wf-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Triages the arriving evacuees by complaint and vital signs with CTAS, not by arrival order, and puts the man on dialysis first.",
      points: 2,
      teaching: "CTAS assigns acuity by presenting complaint and modifiers such as vital signs. A pulse of 48 with weakness after missed dialysis is a resuscitation level problem.",
      source: "ctas",
    },
    {
      id: "wf-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Gets an ECG and venous potassium at once, and recognizes peaked T waves, a long PR, a wide QRS and bradycardia as hyperkalemia.",
      points: 2,
      teaching: "Peaked T waves, flattened P waves and a widening QRS show the heart is at risk. A blood gas potassium gives the number in minutes.",
      source: "ukka-k",
    },
    {
      id: "wf-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives IV calcium at once for the ECG changes, then insulin with glucose and salbutamol, with glucose checks and continuous monitoring.",
      points: 3,
      critical: true,
      teaching: "IV calcium protects the heart within minutes but does not lower potassium. Insulin with glucose and salbutamol shift potassium into cells while dialysis is arranged.",
      source: "ukka-k",
    },
    {
      id: "wf-m2",
      competency: "disposition",
      criterion: "management",
      text: "Arranges dialysis tonight, locally with nephrology support or by transfer with a monitored escort.",
      points: 2,
      teaching: "Dialysis is the definitive treatment in a patient with little urine. If he must travel, the escort and monitoring must match his risk of arrhythmia.",
      source: "warren",
    },
    {
      id: "wf-m3",
      competency: "management",
      criterion: "management",
      text: "Manages the other evacuees in parallel. Obstetric assessment for the pregnant woman, insulin for the boy, buprenorphine continued after confirming the dose, and a refill station for the rest.",
      points: 2,
      teaching: "Planning must include children, older adults and people with special needs. Most evacuees need continuity of usual care, which can be streamed away from emergency beds.",
      source: "caep-disaster",
    },
    {
      id: "wf-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Takes the lead, calls in the colleague on call, assigns triage of every evacuee to the charge nurse, and asks for the hospital surge plan and incident management.",
      points: 3,
      critical: true,
      teaching: "Incident management gives one command structure with defined functions such as operations, planning and logistics. Call extra help early, before the department is overwhelmed.",
      source: "ims",
    },
    {
      id: "wf-pr2",
      competency: "leadership",
      criterion: "process",
      text: "Is honest about capacity and, through incident command, asks the province and the regional renal program to route dialysis patients to a centre with capacity, with EMS meeting the plane.",
      points: 3,
      teaching: "Plans should identify regional resources in advance and allow mutual aid across facilities and regions. Routing patients early is safer than stretching a full unit.",
      source: "caep-disaster",
    },
    {
      id: "wf-pr3",
      competency: "professionalism",
      criterion: "process",
      text: "Keeps the elder safe, gives her a temporary band with two identifiers, and releases her only to a verified caregiver.",
      points: 2,
      critical: true,
      teaching: "Use at least two identifiers for every patient. Hospitals should have a standard way to identify patients who are confused or cannot speak for themselves.",
      source: "who-id",
    },
    {
      id: "wf-pr4",
      competency: "communication",
      criterion: "process",
      text: "Works through the community health representative and trained interpreters, includes the community's leaders, keeps a list of every evacuee seen, and debriefs the team.",
      points: 1,
      teaching: "Disaster plans should account for vulnerable populations. Language support and a working list of every person seen prevent people from being lost in a surge.",
      source: "caep-disaster",
    },
  ],
  sources: [
    {
      id: "ctas",
      citation:
        "Bullard MJ, Musgrave E, Warren D, Unger B, and colleagues. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) guidelines 2016. CJEM. 2017.",
    },
    {
      id: "ukka-k",
      citation: "UK Kidney Association. Clinical practice guideline: treatment of acute hyperkalaemia in adults. 2026.",
      url: "https://guidelines.ukkidney.org/hyperkalaemia/",
    },
    {
      id: "ims",
      citation: "Government of Ontario, Emergency Management Ontario. Incident Management System (IMS) guidance, version 2.0. 2021.",
      url: "https://www.ontario.ca/document/incident-management-system-ims-guidance-version-2",
    },
    {
      id: "caep-disaster",
      citation:
        "Kollek D, Bezanson J, Carby S, Chowdhury S, and colleagues. CAEP position statement: hospital disaster preparedness. CJEM. 2020.",
    },
    {
      id: "who-id",
      citation: "WHO Collaborating Centre for Patient Safety Solutions. Patient identification. Patient Safety Solutions, volume 1, solution 2. 2007.",
      url: "https://cdn.who.int/media/docs/default-source/patient-safety/patient-safety-solutions/ps-solution2-patient-identification.pdf",
    },
    {
      id: "warren",
      citation:
        "Warren J, Fromm RE Jr, Orr RA, Rotello LC, Horst HM. Guidelines for the inter- and intrahospital transport of critically ill patients. American College of Critical Care Medicine. Crit Care Med. 2004.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
