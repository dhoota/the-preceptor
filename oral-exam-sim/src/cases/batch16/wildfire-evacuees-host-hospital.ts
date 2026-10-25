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
    "A wildfire has forced a fly-in First Nation to evacuate, and the first plane of evacuees landed an hour ago. A 24 year old woman who is 37 weeks pregnant says her waters broke as she walked over from the arena.",
  card: {
    vitals: {
      temperature: "36.8°C oral",
      pulse: "104/minute",
      resp: "20/minute",
      bp: "118/72 mmHg",
      o2sat: "99% on room air",
      weight: "72 kg (159 lb)",
    },
    medications: "Prenatal vitamin. Her prenatal record was left behind.",
    allergies: "None known",
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
        "14 of 16 stretchers are full. One resuscitation bay is free. The pregnant woman and 11 other evacuees are in the waiting room with family members, and more are walking over from the arena. One triage nurse. Two ambulances are on the road with other patients.",
    },
    {
      id: "staff",
      label: "Staff and hospital resources",
      result:
        "You are the only emergency physician until a colleague on call from home can arrive, about 25 minutes after a call. A charge nurse and 6 nurses. A pharmacist until 22:00. " +
        "The hospital has a birthing unit and an operating room. The obstetrician and the anesthetist are on call from home, about 15 minutes away, and a pediatrician is on call. A 6 station dialysis unit is closed overnight and fully booked tomorrow. Transfers go through CritiCall Ontario.",
    },
    {
      id: "ob-hpi",
      label: "The pregnant woman: history (through the community health representative)",
      result:
        "This is her fourth pregnancy. Her three babies were born at term after labours of 2 to 4 hours. At 19:50, as she walked from the arena, a gush of clear fluid ran down her legs. Since then she has felt something between her legs and mild tightening every 6 to 8 minutes. The baby has been moving. " +
        "Her nurse in charge told her at 34 weeks that the baby was lying across her belly, and an ultrasound was booked in the city for next week. No bleeding. No problems in this pregnancy.",
    },
    {
      id: "ob-exam",
      label: "The pregnant woman: examination",
      result:
        "A loop of pulsating umbilical cord lies at the introitus. On gentle examination the cervix is 5 cm dilated, and a fetal shoulder is high in the pelvis. The fetal heart by handheld Doppler is 80/minute and does not recover between tightenings.",
    },
    {
      id: "ob-after",
      label: "The pregnant woman: after elevation",
      result: "With the presenting part held up and her in the knee-chest position, the fetal heart rises to 130/minute. The birthing unit has the operating room ready about 15 minutes after the call.",
    },
    {
      id: "waiting",
      label: "Other evacuees in the waiting room at 20:05",
      result:
        "A. A 2 month old girl with a runny nose and cough who is feeding less. B. A 7 year old boy with type 1 diabetes whose insulin pens were left behind. Glucose 19.2 mmol/L, blood ketones 0.4 mmol/L, alert and well. " +
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
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "20:00",
      text: "She sits in the waiting room with her sister and the community health representative, behind eight people who arrived before her. The triage nurse tells you she says her waters broke on the walk over. The waiting room is filling with families carrying bags and blankets.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first minutes",
      prompt: "What do you do first, and how do you organize the department?",
      seconds: 110,
      modelAnswer: [
        "Triage by complaint, vital signs and risk, not by arrival order. Ruptured membranes with a baby lying across and something felt at the vulva is a possible cord prolapse. She is seen first.",
        "Take her to a private bay now and examine her, including a look at the perineum and the fetal heart.",
        "Call in the colleague on call. Ask the charge nurse to triage every evacuee with the CTAS tool and to bring the sickest forward.",
        "Use the community health representative to interpret, not a child.",
        "Tell the administrator on call that the hospital needs its surge plan and incident management, with a link to the provincial liaison.",
        "Have someone reassess the waiting room as more people arrive.",
      ],
      rubric: ["wf-h1", "wf-p1", "wf-p2", "wf-pr1"],
      choices: [
        {
          id: "c-see-now",
          label: "I took her straight to a private bay and examined her, called in my colleague, asked the charge nurse to triage every evacuee with CTAS, and asked the administrator to activate the surge plan and incident management.",
          next: "q-cord",
          quality: "strong",
          feedback:
            "Good. A gush of fluid, a baby lying across and something felt at the vulva mean cord prolapse until you have looked. Sorting a crowd by acuity, not arrival order, finds the patient who can be harmed first. A planned evacuation is a surge that needs the hospital's emergency structure.",
        },
        {
          id: "c-in-order",
          label: "I asked the nurses to keep seeing evacuees in the order they arrived, since she was walking and had normal vital signs.",
          next: "s-in-order",
          quality: "unsafe",
          feedback:
            "Arrival order is not triage. Normal maternal vital signs say nothing about the baby. With ruptured membranes and an abnormal lie, a cord prolapse can kill the baby within minutes. She needs to be examined now.",
        },
        {
          id: "c-wheelchair",
          label: "I sent her up to the birthing unit in a wheelchair for the obstetrician to see when he arrived.",
          next: "s-wheelchair",
          quality: "unsafe",
          feedback:
            "Sending her away unexamined leaves a possible cord prolapse untreated, and sitting upright compresses the cord. Look first. If the cord is out, someone must hold the presenting part up during any move.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-in-order",
      phase: "20:20",
      text: "Her sister runs to the desk. She can see the cord. The triage nurse takes her to a bay, and the Doppler finds a fetal heart of 80/minute. You go straight to her.",
      next: "q-cord",
    },
    {
      kind: "say",
      id: "s-wheelchair",
      phase: "20:12",
      text: "The porter stops at the elevator because she is crying that something is coming out. The nurse looks and sees the cord. They bring her back to a bay, and you go straight to her.",
      next: "q-cord",
    },
    {
      kind: "question",
      id: "q-cord",
      phase: "The pregnant woman",
      prompt: "A loop of pulsating cord lies at the introitus, a shoulder is high in the pelvis and the fetal heart is slow and does not recover. What do you do now?",
      seconds: 90,
      modelAnswer: [
        "Call the obstetrician, the anesthetist, the pediatrician and the operating room team now for a category 1 caesarean section.",
        "Push the presenting part up with a gloved hand in the vagina and keep it there until the baby is born. Do not try to push the cord back.",
        "Handle the cord as little as possible to avoid spasm of its vessels.",
        "Put her in the knee-chest position, or left lateral with her head down and a pillow under her left hip.",
        "If there is a delay, fill her bladder with 500 to 750 mL of saline through a Foley catheter, and consider terbutaline 0.25 mg subcutaneously if the fetal heart stays abnormal. Empty the bladder before birth.",
        "Keep listening to the fetal heart. Prepare for neonatal resuscitation.",
      ],
      rubric: ["wf-m1", "wf-m2"],
      next: "s-delivered",
    },
    {
      kind: "say",
      id: "s-delivered",
      phase: "20:50",
      text: "You kept a gloved hand in the vagina holding the presenting part up, from the bay to the operating room, until the obstetrician delivered the baby. The fetal heart rose to 130/minute. A baby boy was born by caesarean section and is pink and crying. Your colleague on call, called in by the charge nurse, has arrived. The waiting room now holds 19 evacuees.",
      next: "q-others",
    },
    {
      kind: "question",
      id: "q-others",
      phase: "The waiting room",
      prompt: "Your colleague has arrived. How do you manage the other evacuees now?",
      seconds: 100,
      modelAnswer: [
        "Divide the work. Your colleague takes the waiting room while you finish the handover from the operating room.",
        "The 2 month old needs a full set of vital signs, a look at her work of breathing and a feeding history.",
        "The boy needs insulin from the pharmacy at his usual dose, with ketone checks and a plan for supplies.",
        "Continue the man's buprenorphine after confirming his dose with his dispensing pharmacy or the community's nurse in charge.",
        "Get medication histories from patients, families, photos, pharmacies and the nurse in charge, since records were left behind.",
        "Set up a refill clinic with the pharmacist so people who only need medications are not waiting in the department.",
      ],
      rubric: ["wf-h2", "wf-m3", "wf-pr4"],
      choices: [
        {
          id: "c-parallel",
          label: "My colleague took the waiting room. The 2 month old was assessed first, the boy got insulin and a supply plan, the man's buprenorphine was confirmed with his pharmacy and continued, and the pharmacist set up a refill station for the others.",
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
            "Freeing the department is reasonable, but not without assessment. A 2 month old feeding less needs an exam, the boy has no insulin and the man is in withdrawal. Each needs a plan tonight. Stream them, do not send them away.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-send-back",
      phase: "21:15",
      text: "The community health representative comes back from the arena. The boy's glucose is now 24 mmol/L, and the 2 month old is breathing fast. Your colleague brings them back, and the pharmacist opens a refill station. The 84 year old woman is still in the waiting room, because the nurses would not send her back without family.",
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
        "Agree on a time for the next update with the liaison and the community's leadership.",
      ],
      rubric: ["wf-pr2"],
      choices: [
        {
          id: "c-coordinate",
          label: "I told her we could not dialyze three more people safely, asked incident command to have the province route them to a centre with dialysis capacity through the renal program, and asked EMS to meet the plane.",
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
        "Plan a safe handover to her granddaughter when she arrives.",
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
      text: "Her granddaughter arrives on the second plane and cannot find her. The liaison learns the man is not related and left the arena. Police find her 15 minutes later walking near the highway, cold but unhurt. You report the event.",
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
        "A handover of the mother and baby to the birthing unit, with what happened and when.",
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
      text: "Mother and baby do well and go home to the reception centre on day 3. The three dialysis patients on the second plane go to the regional centre. The elder stays with her granddaughter at the arena. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "wf-h1",
      competency: "assessment",
      criterion: "history",
      text: "Takes a focused obstetric history through the interpreter. Gestation, parity and length of past labours, time of rupture, what she feels at the vulva, fetal movements and the baby's lie at her last check.",
      points: 2,
      teaching: "Multiparity and an abnormal lie are associated with cord prolapse. Ruptured membranes with an abnormal lie may call for urgent caesarean birth.",
      source: "rcog-cord",
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
      text: "Triages the arriving evacuees by complaint, vital signs and risk with CTAS, not by arrival order, and sees the pregnant woman first.",
      points: 2,
      teaching:
        "CTAS assigns acuity by presenting complaint and modifiers such as vital signs. Ruptured membranes with an abnormal lie and something felt at the vulva need an examination at once, ahead of earlier arrivals.",
      source: "ctas",
    },
    {
      id: "wf-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Inspects the perineum, finds the cord prolapse with a shoulder presenting, and checks the fetal heart, recognizing a persistent bradycardia.",
      points: 2,
      teaching: "Cord prolapse should be suspected when the fetal heart rate is abnormal, especially soon after membranes rupture. Look at the perineum and examine before moving her.",
      source: "rcog-cord",
    },
    {
      id: "wf-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Elevates the presenting part by hand and keeps it there, handles the cord as little as possible, does not push it back, and places her knee-chest or left lateral head down.",
      points: 3,
      critical: true,
      teaching:
        "Elevating the presenting part, manually or by filling the bladder, prevents cord compression. Minimal handling of loops outside the vagina prevents vasospasm. Manual replacement of the cord is not recommended.",
      source: "rcog-cord",
    },
    {
      id: "wf-m2",
      competency: "management",
      criterion: "management",
      text: "Calls the obstetric, anesthesia, pediatric and operating room teams for a category 1 caesarean, and uses bladder filling of 500 to 750 mL if there is a delay and terbutaline 0.25 mg subcutaneously if the fetal heart stays abnormal.",
      points: 2,
      teaching:
        "With a pathological fetal heart rate, aim for birth by category 1 caesarean within 30 minutes. Tocolysis can be considered while preparing if the heart rate stays abnormal. Empty the bladder before birth.",
      source: "rcog-cord",
    },
    {
      id: "wf-m3",
      competency: "management",
      criterion: "management",
      text: "Manages the other evacuees in parallel. Assessment of the 2 month old, insulin for the boy, buprenorphine continued after confirming the dose, and a refill station for the rest.",
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
      id: "rcog-cord",
      citation: "Royal College of Obstetricians and Gynaecologists. Umbilical cord prolapse. Green-top Guideline No. 50. 2014, reviewed 2024.",
      url: "https://www.rcog.org.uk/media/3wykswng/gtg-50-umbilicalcordprolapse-2014.pdf",
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
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
