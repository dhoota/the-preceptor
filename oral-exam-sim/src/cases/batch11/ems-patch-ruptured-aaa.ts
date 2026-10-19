// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const emsPatchRupturedAaa: OralCase = {
  id: "ems-patch-ruptured-aaa",
  title: "A patch from a hardware store",
  blueprint: "systems",
  alsoCovers: ["resus", "geri"],
  priorityTopic: "ems",
  keyFeatures: [
    { topic: "ems", n: 1 },
    { topic: "ems", n: 2 },
    { topic: "ems", n: 3 },
    { topic: "abdominal-pain", n: 1 },
    { topic: "abdominal-pain", n: 4 },
    { topic: "shock", n: 3 },
  ],
  summary: "A paramedic crew patches about an older man who collapsed in a store, and he will need care your hospital cannot give.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A primary care paramedic crew patches to you from a hardware store 12 minutes away about a 71 year old man who collapsed at the checkout with sudden back pain. " +
    "Your hospital has no vascular surgeon.",
  card: {
    vitals: {
      temperature: "36.4°C tympanic",
      pulse: "118/minute",
      resp: "22/minute",
      bp: "84/52 mmHg",
      o2sat: "95% on room air",
      weight: "About 92 kg (203 lb)",
    },
    medications: "Amlodipine, rosuvastatin, ASA 81 mg daily and a tiotropium inhaler, per the crew",
    allergies: "None known",
  },
  findings: [
    {
      id: "patch",
      label: "Paramedic patch at 14:24",
      result:
        "Primary care paramedics, authorized for IV starts. A 71 year old man collapsed at 14:10 at a store checkout with sudden severe low back and left flank pain. " +
        "Now pale, sweaty and alert. Pulse 118. BP 84/52. SpO2 95 percent. Glucose 7.1 mmol/L. One 18 gauge IV in the left forearm. 12 lead shows sinus tachycardia without ST elevation. " +
        "They are about to start their fluid bolus directive and ask whether to come to you, 12 minutes away, or drive 55 minutes to the regional vascular centre.",
    },
    {
      id: "scene",
      label: "Scene details from the crew",
      result:
        "A cashier saw him grab his back, go grey and slump to the floor. He was unresponsive for about 30 seconds and did not hit his head. " +
        "First BP on scene at 14:18 was 76/40. He told the crew a doctor once mentioned 'a bulge in the main artery'. His wife's phone number is on the call report.",
    },
    {
      id: "enroute",
      label: "Care and changes en route",
      result:
        "250 mL of 0.9 percent saline given on scene. BP rose to 88/54. When the crew sat him up to move him, his BP fell to 70 systolic and he felt faint, so they laid him flat. " +
        "He vomited once in the ambulance. Pain is now 9 out of 10 in the back and left groin. No analgesia given.",
    },
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "He lifted a box of tiles at about 14:05 and felt a sudden tearing pain low in his back that went to his left groin. He felt faint and woke on the floor. " +
        "He has had a dull low back ache for 2 days that he blamed on yard work. No urinary symptoms. No black stools. No chest pain. He has never had a kidney stone.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Hypertension. Mild COPD. An ultrasound 2 years ago showed a 4.8 cm abdominal aortic aneurysm. He was booked for a repeat scan in 6 months and did not go because he felt well. " +
        "No previous surgery. No kidney disease known.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Amlodipine 10 mg daily. Rosuvastatin 20 mg daily. ASA 81 mg daily. Tiotropium inhaler daily. No anticoagulant. No known drug allergies.",
    },
    {
      id: "social",
      label: "Social history and wishes",
      result:
        "Retired electrician. Lives with his wife. Smokes 20 cigarettes a day, about 55 pack years. Two beers a week. " +
        "He says he wants 'whatever it takes' and would accept surgery.",
    },
    {
      id: "exam",
      label: "Examination on arrival at 14:38",
      result:
        "Pale, clammy and anxious. GCS 15. Speaks in full sentences. Chest clear. Heart sounds normal. Abdomen mildly distended with a tender, pulsatile mass above the umbilicus. " +
        "No peritonism. No flank bruising. Femoral pulses present, weaker on the left. Feet cool with capillary refill 4 seconds. No focal neurological deficit.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Infrarenal aorta 7.2 cm in diameter with mural thrombus. Hypoechoic tissue beside the left side of the aneurysm. No free fluid in Morison's pouch or the pelvis. " +
        "IVC small and collapsing. Heart hyperdynamic with no pericardial effusion.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result: "Sinus tachycardia at 116. Normal axis. No ST elevation or new ST depression.",
    },
    {
      id: "labs",
      label: "Blood work at 14:50",
      result:
        "Hemoglobin 104 g/L. Platelets 210 x 10^9/L. INR 1.1. Fibrinogen 2.4 g/L. Creatinine 118 µmol/L. Potassium 4.3 mmol/L. " +
        "Venous pH 7.29. Lactate 4.1 mmol/L. hs troponin I 14 ng/L. Group and screen sent.",
    },
    {
      id: "resources",
      label: "Hospital and transport resources",
      result:
        "A 90 bed community hospital in Ontario. General surgeon in house, no vascular surgery. CT scanner on site. Blood bank holds 6 units of O negative and 4 units of O positive red cells. " +
        "Plasma takes 30 minutes to thaw. The regional vascular centre is 80 km away, 55 minutes by land. The air ambulance helicopter base is 30 minutes' flight away. CritiCall Ontario is available.",
    },
    {
      id: "vitals-1505",
      label: "Vital signs after the call to CritiCall",
      result: "Pulse 132. BP 68/40. Resp 26. SpO2 94 percent on 2 L/minute. He is drowsy but answers questions. Hemoglobin on a repeat gas 88 g/L.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "Arrives at 15:40. She confirms the aneurysm and the missed scan. He has always said he would want an operation if it came to that. " +
        "She does not drive on the highway and asks how she will get to the vascular centre.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "14:24",
      text:
        "The base hospital phone rings in your department. A primary care paramedic is on the line from a hardware store. The examiner will answer the questions you ask the crew.",
      next: "q-patch",
    },
    {
      kind: "question",
      id: "q-patch",
      phase: "The patch",
      prompt: "What do you want to know from the crew, and what direction do you give them?",
      seconds: 75,
      modelAnswer: [
        "Get a focused report. Onset, syncope, pain site, vitals and their trend, IV access, fluid given and ETA.",
        "Ask about a known aneurysm, anticoagulants and major history.",
        "Name the likely problem. Ruptured abdominal aortic aneurysm until proven otherwise.",
        "Come to the closest emergency department now. He is unstable and the crew cannot give blood.",
        "Do not delay on scene. Limit fluid. Small boluses only if he becomes confused or systolic falls well below 80.",
        "Keep him flat. Monitor. Call back if he deteriorates.",
      ],
      rubric: ["ap-h1", "ap-pr1", "ap-m1"],
      choices: [
        {
          id: "c-come-limit",
          label:
            "I took a focused report, told them I suspected a ruptured aneurysm, and directed them to come straight to us. I asked them to hold the full bolus and give 250 mL only if he became confused or his systolic fell below 70.",
          next: "s-enroute",
          quality: "strong",
          feedback:
            "Good. The ESVS recommends permissive hypotension for a ruptured aneurysm, accepting a systolic of 70 to 90 while he stays conscious. " +
            "A crew that cannot give blood should not drive an unstable patient 55 minutes. The nearest emergency department can start blood and arrange the transfer.",
        },
        {
          id: "c-bypass",
          label: "I told the crew to bypass us and drive the 55 minutes to the vascular centre, since that is where he needs to end up.",
          next: "s-bypass",
          quality: "partial",
          feedback:
            "The destination is right in the end, but he is hypotensive and has already lost consciousness. A primary care crew has no blood, and an arrest on the highway would be unrecoverable. " +
            "The examiner wanted the closest emergency department first, with a fast transfer to vascular surgery.",
        },
        {
          id: "c-fluids",
          label: "I told them to stay on scene, start a second IV and give fluid until his systolic was over 100 before moving him.",
          next: "s-scene",
          quality: "unsafe",
          feedback:
            "This delays definitive care and pushes the pressure up, which can break up the clot that is holding the rupture. " +
            "The PCP directive allows 10 mL/kg to a maximum of 1 000 mL, reassessed every 250 mL. It does not ask for a normal pressure. Load and go, and accept a low systolic while he is awake.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bypass",
      phase: "14:32",
      text:
        "Eight minutes later the crew patches again from the highway. His systolic is 66 and he is hard to rouse. The paramedic says they are turning around to come to you. They arrive at 14:46.",
      next: "s-enroute",
    },
    {
      kind: "say",
      id: "s-scene",
      phase: "14:40",
      text:
        "Scene time reaches 25 minutes. After 1 000 mL of saline his systolic briefly reaches 98, then falls to 64 and he becomes confused. The crew patches again and you tell them to leave now.",
      next: "s-enroute",
    },
    {
      kind: "say",
      id: "s-enroute",
      phase: "Before arrival",
      text: "The crew is on the road. Your charge nurse asks what you need ready.",
      next: "q-prepare",
    },
    {
      kind: "question",
      id: "q-prepare",
      phase: "Getting ready",
      prompt: "How do you prepare your department and your hospital before he arrives?",
      seconds: 60,
      modelAnswer: [
        "Resus bay. Assign a team leader and roles. Brief the team on the likely diagnosis.",
        "O negative blood to the bedside. Activate the massive hemorrhage protocol. Warmer and rapid infuser ready.",
        "Ultrasound machine in the room.",
        "General surgeon to the bedside to help, knowing he will not repair it here.",
        "Call CritiCall early to start the vascular surgery and transport conversation.",
        "Lab ready for crossmatch, coagulation and fibrinogen.",
      ],
      rubric: ["ap-pr2", "ap-m2"],
      next: "s-arrive",
    },
    {
      kind: "say",
      id: "s-arrive",
      phase: "Arrival",
      text: "The crew wheels him into your resus bay. The lead paramedic starts her report. Her partner says they have another call waiting.",
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "How do you run the handover, and what do you ask the paramedics?",
      seconds: 60,
      modelAnswer: [
        "Hands off for a short structured report while the monitor goes on. Team listens together.",
        "Ask what only they know. What the cashier saw, how long he was out, the first BP on scene.",
        "Fluid given and the response. What happened when he sat up. Vomiting. Any analgesia.",
        "What he told them about his history. The 'bulge in the artery'.",
        "Wife's contact details from the call report.",
        "Release the crew once care is transferred and the call report is complete.",
      ],
      rubric: ["ap-h2", "ap-pr5"],
      choices: [
        {
          id: "c-structured",
          label:
            "I asked for 30 seconds of hands off, took a structured report, and asked about the syncope, the first BP, the fluid given, the drop when he sat up, and what he had told them about his history.",
          next: "q-assess",
          quality: "strong",
          feedback:
            "Good. Structured handover tools such as IMIST AMBO improve what is passed on and reduce repeated questions. " +
            "Only the crew knows the scene, the first pressure and what changed on the road. His comment about a bulge in the artery is the key fact.",
        },
        {
          id: "c-paper",
          label: "I asked them to move him across and leave the call report, then started my own assessment.",
          next: "s-handover-miss",
          quality: "partial",
          feedback:
            "The paper report arrives later and often is not read in a resuscitation. Details about the syncope, the first pressure and the known aneurysm can be lost. " +
            "The examiner wanted a brief structured verbal handover before the crew left.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-handover-miss",
      phase: "Later",
      text:
        "The crew has left for their next call. A few minutes later the clerk hands you the call report. It notes the 30 seconds of unresponsiveness, the first BP of 76/40 and his comment about 'a bulge in the main artery'.",
      next: "q-assess",
    },
    {
      kind: "question",
      id: "q-assess",
      phase: "Assessment",
      prompt: "What do you ask him, what do you examine, and what is your differential diagnosis?",
      seconds: 75,
      modelAnswer: [
        "Onset and character of the pain. Radiation to groin or flank. The syncope.",
        "Known aneurysm, last scan size, missed surveillance. Smoking and other risk factors.",
        "Anticoagulants and antiplatelets. Kidney disease. Allergies. His wishes about surgery.",
        "Mental status as a perfusion marker. Pulsatile mass. Femoral and distal pulses. Flank bruising.",
        "Bedside ultrasound of the aorta now. Over 3 cm is an aneurysm. Look at the heart and for free fluid.",
        "Differential. Ruptured aneurysm, renal colic, MI, aortic dissection, mesenteric ischemia, GI bleed, perforated viscus.",
      ],
      rubric: ["ap-h3", "ap-h4", "ap-p1", "ap-p2", "ap-p3", "ap-p4"],
      next: "s-pocus",
    },
    {
      kind: "say",
      id: "s-pocus",
      phase: "Ten minutes after arrival",
      text:
        "Your ultrasound shows a 7.2 cm infrarenal aorta with tissue alongside it on the left. There is no free intraperitoneal fluid. His BP is 82/50 and he is talking. " +
        "The general surgeon arrives and says, 'Let's get a CT angiogram first so we know it has actually ruptured before we call anyone.'",
      next: "q-ct",
    },
    {
      kind: "question",
      id: "q-ct",
      phase: "Imaging and the call",
      prompt: "How do you respond to the surgeon, and who do you call?",
      seconds: 60,
      modelAnswer: [
        "Known aneurysm, back pain, syncope and hypotension is a ruptured aneurysm until proven otherwise.",
        "Call CritiCall now as a life or limb request. Do not wait for CT to make the call.",
        "The vascular surgeon decides about imaging. A CT angiogram helps plan endovascular repair if he is stable enough.",
        "Do a CT here only if it is quick, the surgeon wants it, and it does not delay the helicopter. Send images electronically.",
        "Aim for a door to intervention time under 90 minutes.",
      ],
      rubric: ["ap-pr3", "ap-m4"],
      choices: [
        {
          id: "c-call-now",
          label:
            "I called CritiCall right away as a life or limb case. I told the vascular surgeon a CT could be done in 10 minutes if she wanted it for planning, as long as it did not hold up the helicopter.",
          next: "s-crash",
          quality: "strong",
          feedback:
            "Right. Transfer and imaging decisions run in parallel. The SVS suggests a door to intervention time under 90 minutes for ruptured aneurysms. " +
            "The ESVS says most patients who reach hospital alive can have a CT angiogram, which helps decide on endovascular repair. The accepting surgeon should make that call.",
        },
        {
          id: "c-ct-first",
          label: "I agreed with the surgeon, sent him to CT, and planned to call vascular surgery with the report.",
          next: "s-ct-delay",
          quality: "partial",
          feedback:
            "CT is useful, but the call should not wait for it. Every step done in series adds to the time to repair. " +
            "The examiner wanted CritiCall called at once, with imaging decided with the vascular surgeon.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct-delay",
      phase: "15:20",
      text:
        "The CT confirms a contained left retroperitoneal rupture. The radiology report takes 15 minutes. You call CritiCall at 15:20. The vascular surgeon accepts and asks why the call came so late.",
      next: "s-crash",
    },
    {
      kind: "say",
      id: "s-crash",
      phase: "A few minutes later",
      text:
        "The vascular surgeon has accepted him, and the helicopter is 30 minutes out. Now his pulse is 132 and his BP 68/40. He is drowsy but answers questions. " +
        "A repeat hemoglobin is 88 g/L. The respiratory therapist asks if you want to intubate him before the flight.",
      next: "q-resus",
    },
    {
      kind: "question",
      id: "q-resus",
      phase: "Deterioration",
      prompt: "What do you do now?",
      seconds: 75,
      modelAnswer: [
        "Massive hemorrhage protocol. Warmed red cells now, then plasma as it thaws. Aim for plasma to red cells near 1:1.",
        "Target a systolic of 70 to 90 while he stays awake. Use his level of consciousness as the guide.",
        "No more crystalloid. Give calcium with ongoing transfusion. Keep him warm.",
        "Do not induce or intubate here. Induction can cause sudden collapse by removing sympathetic tone and abdominal tamponade.",
        "If he needs an airway, it should happen with the surgeon ready to clamp. Small doses of opioid for pain.",
        "Tell CritiCall and the vascular surgeon about the change.",
      ],
      rubric: ["ap-m1", "ap-m2", "ap-m3", "ap-m5"],
      choices: [
        {
          id: "c-blood-awake",
          label:
            "I started warmed O negative blood through the rapid infuser, asked for plasma, and aimed for a systolic of 70 to 90 while he stayed awake. I told the RT we would not intubate him here.",
          next: "q-package",
          quality: "strong",
          feedback:
            "Good. Blood and plasma near 1:1, not crystalloid, is the ESVS approach. " +
            "Keeping him awake protects his pressure. Induction in a ruptured aneurysm can cause cardiovascular collapse, so the guideline wants the surgical team ready before anesthesia.",
        },
        {
          id: "c-crystalloid",
          label: "I gave 2 L of warmed saline wide open to bring his systolic over 100 for the flight.",
          next: "s-dilute",
          quality: "partial",
          feedback:
            "Large volumes of crystalloid dilute clotting factors and raise the pressure against a fragile clot. " +
            "The goal is consciousness and a systolic of 70 to 90, using blood products.",
        },
        {
          id: "c-rsi",
          label: "I did a rapid sequence intubation with propofol and rocuronium so his airway was secure for the flight.",
          next: "s-collapse",
          quality: "unsafe",
          feedback:
            "Induction removes sympathetic drive and relaxes the abdominal wall that is helping tamponade the bleed. He is talking, so his airway is not the problem. " +
            "Propofol in a patient in hemorrhagic shock is especially dangerous. He should be anesthetized only when the vascular team is ready to control the aorta.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-dilute",
      phase: "Ten minutes later",
      text: "His systolic reaches 104, then falls to 60. A repeat INR is 1.6 and fibrinogen 1.3 g/L. You start the O negative blood and ask for plasma.",
      next: "q-package",
    },
    {
      kind: "say",
      id: "s-collapse",
      phase: "Two minutes later",
      text:
        "Two minutes after induction he has no palpable pulse. You start CPR and squeeze in 3 units of O negative blood and give epinephrine. A pulse returns after 4 minutes, with a BP of 72/40 on a norepinephrine infusion.",
      next: "q-package",
    },
    {
      kind: "question",
      id: "q-package",
      phase: "The helicopter lands",
      prompt: "The flight crew is here. What must be in place before he leaves, and what goes with him?",
      seconds: 75,
      modelAnswer: [
        "Two large bore IVs that work. Blood running through a warmer. Remaining O negative units in a validated cooler.",
        "Clear targets for the crew. Systolic 70 to 90 while conscious. No crystalloid boluses.",
        "Structured handover to the flight crew. Timeline, products given, last vitals and labs.",
        "Ultrasound and any CT images pushed electronically. Copies of notes, blood product records and the call report.",
        "Confirm the vascular surgeon will meet him and that the team is ready on arrival.",
        "Do not delay departure for more tests.",
      ],
      rubric: ["ap-pr4", "ap-pr5"],
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "His wife",
      prompt: "As the helicopter leaves, his wife arrives. She asks if he will survive and whether this happened because he missed his scan. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Quiet room. Introduce yourself. Ask what she knows.",
        "His aneurysm has burst and is bleeding inside. He needs an urgent operation. He is very sick and may not survive.",
        "Avoid blame. Many people miss surveillance scans. What matters now is the surgery.",
        "Confirm his wishes. Get her contact number for the vascular team.",
        "Help her get there. Social work, family or a ride. She cannot fly with him.",
      ],
      rubric: ["ap-h5", "ap-pr6"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "After he leaves",
      prompt: "The paramedic crew calls back to ask how he did. What else do you do before your shift moves on?",
      seconds: 60,
      modelAnswer: [
        "Give the crew feedback on the diagnosis and on what helped.",
        "Document the patch. Time, information received and the orders given.",
        "Record the door in and door out times and the transfusion record.",
        "Restock O negative blood and the massive hemorrhage cooler.",
        "Short team debrief. Note any delays for review.",
      ],
      rubric: ["ap-pr7"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He has an endovascular repair 70 minutes after leaving your department. He spends 4 days in the ICU and goes home 2 weeks later. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ap-h1",
      competency: "assessment",
      criterion: "history",
      text: "Takes a focused patch report. Onset, syncope, vital sign trend, IV access, fluid given, scope of the crew and ETA.",
      points: 2,
      teaching: "A patch gives a few seconds to decide destination and field care. Ask what changes the plan, then give clear orders.",
      source: "als",
    },
    {
      id: "ap-h2",
      competency: "communication",
      criterion: "history",
      text: "At handover asks what only the crew knows. Bystander account of the collapse, first scene BP, fluid volume, changes en route and what the patient said.",
      points: 2,
      teaching: "The crew saw the scene and the first vital signs. Once they leave, that history is gone.",
      source: "imist",
    },
    {
      id: "ap-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about a known aneurysm and its last size, missed surveillance, smoking and the onset of back or flank pain.",
      points: 2,
      teaching: "A known aneurysm with sudden back pain and syncope settles the diagnosis before any test.",
      source: "esvs",
    },
    {
      id: "ap-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about antiplatelets or anticoagulants, kidney disease, allergies and his wishes about surgery.",
      points: 1,
      teaching: "These change transfusion needs, contrast decisions and whether repair is wanted at all.",
      source: "esvs",
    },
    {
      id: "ap-h5",
      competency: "communication",
      criterion: "history",
      text: "Gets collateral from his wife, including his stated wishes and contact details for the receiving team.",
      points: 1,
      teaching: "Family can confirm wishes and history that matter to the surgeon before an emergency repair.",
      source: "esvs",
    },
    {
      id: "ap-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Names a ruptured abdominal aortic aneurysm as the leading diagnosis in an older smoker with back pain, syncope and hypotension, and does not label it renal colic.",
      points: 3,
      critical: true,
      teaching: "Renal colic is the classic mislabel. A first episode of flank pain in an older man with shock is an aneurysm until proven otherwise.",
      source: "svs",
    },
    {
      id: "ap-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for a pulsatile mass, femoral and distal pulses, flank bruising and level of consciousness as a perfusion marker.",
      points: 2,
      teaching: "Consciousness and the ability to speak are the ESVS markers of adequate perfusion during permissive hypotension.",
      source: "esvs",
    },
    {
      id: "ap-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Uses bedside ultrasound to measure the aorta, and checks the heart and for free fluid.",
      points: 2,
      teaching: "An aorta of 3 cm or more is aneurysmal. Ultrasound cannot exclude rupture, since most bleeding is retroperitoneal.",
      source: "esvs",
    },
    {
      id: "ap-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential that includes renal colic, MI, aortic dissection, mesenteric ischemia, GI bleed and perforated viscus.",
      points: 1,
      teaching: "Keep the mimics in mind, but do not let them delay the call to vascular surgery.",
      source: "svs",
    },
    {
      id: "ap-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Uses permissive hypotension in the field and the department. Limits crystalloid and accepts a systolic of 70 to 90 while the patient is conscious.",
      points: 3,
      critical: true,
      teaching: "The ESVS recommends permissive hypotension for a ruptured aneurysm. Raising the pressure with fluid can worsen bleeding and dilute clotting factors.",
      source: "esvs",
    },
    {
      id: "ap-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Transfuses early through a massive hemorrhage protocol, warmed, with plasma to red cells near 1:1.",
      points: 2,
      teaching: "Blood products, not saline, are the resuscitation fluid for a ruptured aneurysm.",
      source: "esvs",
    },
    {
      id: "ap-m3",
      competency: "management",
      criterion: "management",
      text: "Does not induce or intubate in the department while the patient is talking. Plans anesthesia only once the vascular team can control the aorta.",
      points: 2,
      critical: true,
      teaching: "Induction causes vasodilation and loss of abdominal tamponade. The ESVS wants the surgical field ready before induction.",
      source: "esvs",
    },
    {
      id: "ap-m4",
      competency: "management",
      criterion: "management",
      text: "Does not delay the referral for CT. Agrees on imaging with the accepting vascular surgeon if it does not delay transport.",
      points: 2,
      teaching: "CT angiography helps plan endovascular repair in a patient stable enough to have it, but the call to the surgeon comes first.",
      source: "esvs",
    },
    {
      id: "ap-m5",
      competency: "resuscitation",
      criterion: "management",
      text: "Places two large bore IVs and sends crossmatch, CBC, INR, fibrinogen, creatinine, lactate and a gas.",
      points: 1,
      teaching: "Fibrinogen and INR guide plasma and cryoprecipitate once the first units are in.",
      source: "esvs",
    },
    {
      id: "ap-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Directs an unstable patient with a primary care crew to the closest emergency department, without scene delay, and within the crew's scope.",
      points: 2,
      teaching: "Ontario standards limit a PCP fluid bolus to 10 mL/kg, at most 1 000 mL, and require paramedics to say when an order exceeds their scope.",
      source: "als",
    },
    {
      id: "ap-pr2",
      competency: "leadership",
      criterion: "process",
      text: "Prepares before arrival. Resus bay, roles, O negative blood, rapid infuser, ultrasound, surgeon and lab alerted.",
      points: 2,
      teaching: "The SVS frames the 90 minute door to intervention goal as time slices. Preparation before arrival saves the first slice.",
      source: "svs",
    },
    {
      id: "ap-pr3",
      competency: "disposition",
      criterion: "process",
      text: "Calls CritiCall early as a life or limb request so vascular acceptance and air transport run in parallel.",
      points: 3,
      critical: true,
      teaching: "A ruptured aneurysm is a time sensitive threat to life. Once confirmed as life or limb, the receiving hospital accepts on a no refusal basis.",
      source: "lol",
    },
    {
      id: "ap-pr4",
      competency: "disposition",
      criterion: "process",
      text: "Packages for transfer. Working lines, blood running, extra units in a cooler, explicit targets, records and images sent.",
      points: 2,
      teaching: "Send what the crew will need for the worst event in the air. Blood is the main one.",
      source: "warren",
    },
    {
      id: "ap-pr5",
      competency: "communication",
      criterion: "process",
      text: "Gives a structured handover to the flight crew and the vascular surgeon with timeline, products given and targets.",
      points: 1,
      teaching: "A structured handover passes on the same key facts every time, even under pressure.",
      source: "imist",
    },
    {
      id: "ap-pr6",
      competency: "communication",
      criterion: "process",
      text: "Tells his wife honestly how serious this is, avoids blame about the missed scan and helps her get to the vascular centre.",
      points: 1,
      teaching: "Families are often separated from patients in air transfers. Practical help matters as much as the diagnosis.",
      source: "esvs",
    },
    {
      id: "ap-pr7",
      competency: "professionalism",
      criterion: "process",
      text: "Documents the patch and the orders given, gives the crew feedback and debriefs the team.",
      points: 1,
      teaching: "Base hospital orders are part of the medical record. Feedback to paramedics closes the loop and supports learning.",
      source: "als",
    },
  ],
  sources: [
    {
      id: "esvs",
      citation:
        "Wanhainen A, Van Herzeele I, Bastos Goncalves F, et al. European Society for Vascular Surgery (ESVS) 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms. Eur J Vasc Endovasc Surg. 2024.",
      url: "https://pubmed.ncbi.nlm.nih.gov/38307694/",
    },
    {
      id: "svs",
      citation: "Chaikof EL, Dalman RL, Eskandari MK, et al. The Society for Vascular Surgery practice guidelines on the care of patients with an abdominal aortic aneurysm. J Vasc Surg. 2018.",
      url: "https://pubmed.ncbi.nlm.nih.gov/29268916/",
    },
    {
      id: "als",
      citation:
        "Ontario Ministry of Health, Emergency Health Regulatory and Accountability Branch. Advanced Life Support Patient Care Standards, version 5.4, including the PCP auxiliary medical directives. 2025.",
      url: "https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf",
    },
    {
      id: "imist",
      citation: "Iedema R, Ball C, Daly B, et al. Design and trial of a new ambulance to emergency department handover protocol: IMIST AMBO. BMJ Qual Saf. 2012.",
      url: "https://pubmed.ncbi.nlm.nih.gov/22626739/",
    },
    {
      id: "lol",
      citation: "Ontario Ministry of Health. Ontario Life or Limb Policy. 2024. Updated 2025.",
      url: "https://www.ontario.ca/page/ontario-life-or-limb-policy",
    },
    {
      id: "warren",
      citation: "Warren J, Fromm RE Jr, Orr RA, et al. Guidelines for the inter and intrahospital transport of critically ill patients. Crit Care Med. 2004.",
      url: "https://pubmed.ncbi.nlm.nih.gov/14707589/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
