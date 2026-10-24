// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const cyberattackDowntimeCodeStroke: OralCase = {
  id: "cyberattack-downtime-code-stroke",
  title: "The evening the screens went dark",
  blueprint: "systems",
  alsoCovers: ["neuro", "cardio"],
  priorityTopic: "multiple-patients",
  keyFeatures: [
    { topic: "multiple-patients", n: 1 },
    { topic: "multiple-patients", n: 2 },
    { topic: "multiple-patients", n: 3 },
    { topic: "multiple-patients", n: 4 },
    { topic: "cva", n: 3 },
    { topic: "cqi", n: 5 },
  ],
  summary: "Several time critical patients need you at once on an evening when the hospital has lost its computer systems.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A cyberattack took every hospital computer system offline 20 minutes ago. Paramedics bring in a 71 year old woman with sudden right sided weakness and trouble speaking.",
  card: {
    vitals: {
      temperature: "36.6°C oral",
      pulse: "88/minute, irregular",
      resp: "18/minute",
      bp: "182/98 mmHg",
      o2sat: "95% on room air",
      weight: "68 kg (150 lb)",
    },
    medications: "Not recorded. The electronic record is unavailable.",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "downtime",
      label: "What is down and what works",
      result:
        "Down: the electronic record, order entry, the laboratory and imaging result systems, the image viewer and the pharmacy medication profiles. IT expects 24 to 72 hours. " +
        "Working: phones and paging, monitors, ECG machines that print, the CT scanner with images viewable only on its console, the laboratory analyzers with results by phone, the blood gas analyzer in the department, and the medication cabinets in override mode. Paper downtime packs are in every bay.",
    },
    {
      id: "department",
      label: "The department at 20:10",
      result:
        "16 of 18 stretchers full. One of two resuscitation bays is free. 23 people in the waiting room with one triage nurse. Two more ambulances are 15 minutes out with a hip fracture and a COPD exacerbation.",
    },
    {
      id: "staff",
      label: "Staffing",
      result:
        "You and a second emergency physician, who is in the fast track area until 23:00. A charge nurse, 7 nurses and one respiratory therapist. Two laboratory technologists. A CT technologist in house. The radiologist is on call from home, 25 minutes away. The administrator on call answers by phone.",
    },
    {
      id: "hospital",
      label: "Hospital and region",
      result:
        "A community hospital in Ontario and a designated stroke centre with CT angiography and tenecteplase. Telestroke neurology is available by phone. The endovascular centre is 50 minutes away by land. The PCI centre is 35 minutes away by land. Two other community hospitals lie 30 and 45 minutes away.",
    },
    {
      id: "stroke-hpi",
      label: "Stroke patient: history from paramedics and her daughter",
      result:
        "She was well at dinner with her daughter at 19:35. At 19:40 her words came out wrong and she dropped her fork from her right hand. The paramedic form says 'no known anticoagulants', written after asking the patient, who cannot speak clearly. Her daughter is driving in and will arrive at about 20:25.",
    },
    {
      id: "stroke-meds",
      label: "Stroke patient: medications and allergies (from the daughter's pill bag)",
      result:
        "Apixaban 5 mg twice daily for atrial fibrillation, last dose at 08:00 today. She skipped the evening dose because dinner was late. Metoprolol 50 mg twice daily. Ramipril 5 mg daily. Allergy to sulfa drugs, which caused a rash. Her community pharmacy confirms the list by phone.",
    },
    {
      id: "stroke-pmh",
      label: "Stroke patient: past history and baseline",
      result: "Atrial fibrillation for 3 years, hypertension, osteoarthritis. No previous stroke or bleeding. Lives alone, drives and plays bridge twice a week.",
    },
    {
      id: "stroke-exam",
      label: "Stroke patient: examination",
      result:
        "Capillary glucose 6.4 mmol/L. Eyes deviated to the left. Severe expressive aphasia. Right facial weakness. Right arm falls without effort against gravity. Right leg drifts to the bed. NIHSS 14.",
    },
    {
      id: "stroke-imaging",
      label: "Stroke patient: CT and CT angiography (read on the scanner console at 20:34)",
      result: "No hemorrhage. ASPECTS 8. Occlusion of the left M1 segment of the middle cerebral artery.",
    },
    {
      id: "chest-pain",
      label: "Walk-in patient at triage at 20:12",
      result:
        "A 54 year old man with 50 minutes of heavy central chest pressure and sweating. Pulse 96/minute, BP 148/90 mmHg, saturation 97%. The printed ECG shows 3 mm ST elevation in V1 to V4.",
    },
    {
      id: "bed6",
      label: "Bed 6",
      result:
        "A 79 year old man with 2 days of weakness. He takes ramipril and spironolactone and has chronic kidney disease. His printed ECG at 20:00 shows sinus rhythm with normal T waves and a QRS of 92 ms.",
    },
    {
      id: "bed9",
      label: "Bed 9",
      result:
        "A 74 year old woman on hemodialysis who missed yesterday's session because of a snowstorm. She has nausea and leg weakness. She has the same uncommon surname as the man in bed 6. Both had blood drawn at 20:05 into tubes labelled by hand.",
    },
    {
      id: "bed9-ecg",
      label: "Repeat ECGs at 21:02",
      result: "Bed 6: unchanged, normal T waves, QRS 92 ms. Bed 9: tall peaked T waves, flattened P waves and a QRS of 128 ms.",
    },
    {
      id: "gas",
      label: "Blood gas potassium at 21:05, labelled at the bedside",
      result: "Bed 6: potassium 4.6 mmol/L. Bed 9: potassium 7.3 mmol/L, glucose 6.8 mmol/L.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "20:10",
      text: "The charge nurse meets you at the ambulance doors. 'Every screen just went to a ransom message. The stroke is here now, and triage says the man at the desk has ST elevation on his ECG.'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first five minutes",
      prompt: "What do you do in the next five minutes?",
      seconds: 110,
      modelAnswer: [
        "Triage by complaint, vital signs and airway, breathing and circulation. The stroke and the STEMI are both time critical and come first.",
        "Take the lead. Assign the second physician to the STEMI. ASA, a paper ECG sent by phone or fax to the PCI centre, and the first available ambulance for transfer.",
        "Take the stroke patient yourself, straight to CT.",
        "Ask the charge nurse to start downtime procedures. Paper packs, two identifiers on every form and tube, written orders with read-back, runners to the laboratory and CT.",
        "Call the administrator on call to activate the hospital emergency response and incident management, call in extra staff, and talk to EMS about the incoming ambulances.",
        "Have someone reassess the waiting room and the boarded patients.",
      ],
      rubric: ["mp-p1", "mp-pr1", "mp-pr2", "mp-m3"],
      choices: [
        {
          id: "c-lead",
          label: "I sent the second physician to the STEMI for ASA and direct transfer to the PCI centre, took the stroke to CT myself, asked the charge nurse to start downtime procedures with runners and two identifiers on every tube, and called the administrator to activate the emergency plan and talk to EMS.",
          next: "q-stroke-history",
          quality: "strong",
          feedback:
            "Good. Two time critical patients need two physicians, so you stabilize both in parallel. Losing every computer system is an internal disaster. It needs an emergency response, extra staff and a talk with EMS, not only harder work from the people on shift.",
        },
        {
          id: "c-serial",
          label: "I saw the stroke patient first, planned to see the chest pain patient after CT, and asked the nurses to cope until IT fixed the system.",
          next: "s-serial",
          quality: "partial",
          feedback:
            "The stroke needed you, but so did the STEMI, and a second physician was in the building. Serial care delays one time critical patient. Hoping the system returns is not a plan. Activate downtime procedures and the hospital response early.",
        },
        {
          id: "c-hold-stemi",
          label: "I asked triage to keep the chest pain patient in the waiting room until the ECG system was back so cardiology could read it.",
          next: "s-hold-stemi",
          quality: "unsafe",
          feedback:
            "He has 3 mm of ST elevation in V1 to V4 on a printed ECG. That is a STEMI now, and every minute of delay loses heart muscle. A paper ECG can be read by you and sent by phone or fax. He needs ASA, a monitored bed and immediate transfer for PCI.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-serial",
      phase: "20:28",
      text: "The triage nurse brings the chest pain patient into the hallway. He is grey and sweating. The second physician hears and takes over his care, and the charge nurse asks you to call the administrator.",
      next: "q-stroke-history",
    },
    {
      kind: "say",
      id: "s-hold-stemi",
      phase: "20:24",
      text: "The chest pain patient collapses in the waiting room with ventricular fibrillation. He is shocked once and regains a pulse. The second physician takes over his care and arranges transfer for PCI.",
      next: "q-stroke-history",
    },
    {
      kind: "question",
      id: "q-stroke-history",
      phase: "The stroke patient",
      prompt: "The record is down and she cannot speak clearly. What history do you need, and where will you get it?",
      seconds: 90,
      modelAnswer: [
        "Last known well. 19:35 at dinner, from her daughter by phone and the paramedics.",
        "Anticoagulant use and the time of the last dose. Do not trust 'no known anticoagulants' from a patient with aphasia.",
        "Sources without the record. Her daughter and the pill bag, the community pharmacy by phone, the pill bottles at home and her family physician's office.",
        "Allergies, previous stroke or bleeding, recent surgery and baseline function.",
        "Glucose and a focused NIHSS. Do not delay CT while you gather it.",
      ],
      rubric: ["mp-h1", "mp-h2", "mp-p2"],
      next: "s-imaging",
    },
    {
      kind: "say",
      id: "s-imaging",
      phase: "20:34",
      text: "The radiologist reads the images on the CT console with you over the phone. There is no hemorrhage, the ASPECTS is 8 and the left M1 is occluded. Her pressure is 182/98 mmHg. The nurse has tenecteplase ready. Her daughter has just arrived with a bag of pill bottles.",
      next: "q-stroke-treat",
    },
    {
      kind: "question",
      id: "q-stroke-treat",
      phase: "Reperfusion",
      prompt: "What treatment does she get, and how do you get her there with no electronic images?",
      seconds: 100,
      modelAnswer: [
        "Check the pill bag before any thrombolytic. She takes apixaban, last dose at 08:00 today.",
        "No tenecteplase. Thrombolysis should not routinely be given to patients on a DOAC.",
        "She needs endovascular thrombectomy for the M1 occlusion. Anticoagulation is not a contraindication to thrombectomy.",
        "Call the endovascular centre and give a phone report with the radiologist's read. Send the images on a disc and copies of the paper record.",
        "Ask EMS for the first available ambulance as a time critical transfer.",
        "Record the apixaban dose and time on the transfer papers so the receiving team can plan.",
      ],
      rubric: ["mp-h2", "mp-m1"],
      choices: [
        {
          id: "c-check-bag",
          label: "I checked the pill bag with her daughter, found apixaban taken at 08:00, held the tenecteplase and arranged thrombectomy at the endovascular centre by phone, with images on a disc and an urgent ambulance.",
          next: "s-transfer",
          quality: "strong",
          feedback:
            "This is the key decision. Without the record, the medication history must come from the family, the bottles and the pharmacy. Canadian guidance says IV thrombolysis should not routinely be given to patients on a DOAC, but anticoagulation does not rule out thrombectomy.",
        },
        {
          id: "c-tnk-form",
          label: "I gave tenecteplase because the paramedic form said she takes no anticoagulants, then arranged thrombectomy.",
          next: "s-tnk-form",
          quality: "unsafe",
          feedback:
            "The form recorded what a patient with severe aphasia seemed to say. She takes apixaban, and thrombolysis on a DOAC raises the risk of brain hemorrhage. When the record is down, confirm medications from another source before a thrombolytic.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tnk-form",
      phase: "20:37",
      text: "As the nurse uncaps the syringe, the daughter holds up a bottle of apixaban and says her mother took it this morning. The nurse stops before giving it. You arrange thrombectomy instead.",
      next: "s-transfer",
    },
    {
      kind: "say",
      id: "s-transfer",
      phase: "20:45",
      text: "The endovascular centre accepts her. The STEMI patient has left for the PCI centre. The administrator on call phones you: 'Should we close the department to ambulances until IT is back?'",
      next: "q-ems",
    },
    {
      kind: "question",
      id: "q-ems",
      phase: "The hospital response",
      prompt: "What do you advise the administrator, and how do you coordinate with EMS?",
      seconds: 90,
      modelAnswer: [
        "This is an internal disaster. Activate the hospital emergency plan and incident management, with one person in command.",
        "Ask EMS to redirect non-critical ambulances to the nearby hospitals for now, while still taking patients who cannot safely travel farther.",
        "Tell EMS dispatch and the nearby emergency departments directly. Ransomware attacks send a surge of patients and stroke codes to neighbouring hospitals.",
        "Make sure stroke and STEMI patients in the field go straight to the endovascular and PCI centres.",
        "Call in extra nurses, a second technologist and clerks to run paper processes.",
        "Review the redirect at set times and end it when systems are safe again.",
      ],
      rubric: ["mp-pr2"],
      choices: [
        {
          id: "c-targeted",
          label: "I advised activating the emergency plan with incident command, asked EMS to redirect non-critical ambulances while still bringing patients too unstable to travel farther, called the nearby emergency departments, and asked for extra staff, with a review every few hours.",
          next: "s-lab",
          quality: "strong",
          feedback:
            "Good. A targeted redirect protects the department without leaving critical patients on longer drives. Ransomware attacks have raised ambulance volumes, stroke codes and waits at neighbouring departments, so they must be warned and the response coordinated regionally.",
        },
        {
          id: "c-close",
          label: "I agreed to close the department to all ambulances until IT restored the systems.",
          next: "s-close",
          quality: "partial",
          feedback:
            "A full closure sends patients in cardiac arrest or with airway problems on longer trips, and it can last days. The nearby departments will be flooded without warning. Redirect only non-critical patients, warn the region and review often.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-close",
      phase: "21:00",
      text: "The EMS superintendent calls. A crew has a patient in respiratory arrest 6 minutes from you and 30 minutes from the next hospital. You agree to a targeted redirect instead and call the nearby departments.",
      next: "s-lab",
    },
    {
      kind: "say",
      id: "s-lab",
      phase: "21:00",
      text: "The laboratory phones: 'Critical potassium, 7.4, on the tube labelled with the surname for bed 6.' A nurse has drawn up calcium and is mixing insulin and dextrose for the man in bed 6. Bed 9 has the same surname.",
      next: "q-lab",
    },
    {
      kind: "question",
      id: "q-lab",
      phase: "A phoned result",
      prompt: "What do you do?",
      seconds: 90,
      modelAnswer: [
        "Stop the treatment until you know which patient the result belongs to. The tubes were labelled by hand and two patients share a surname.",
        "Check two identifiers against the requisition and the wristbands. Repeat ECGs on both patients now.",
        "Get a blood gas potassium on both, labelled at the bedside.",
        "Treat the patient with the high potassium and ECG changes. In bed 9 that means IV calcium, insulin with dextrose, salbutamol and urgent dialysis.",
        "Do not give insulin and dextrose to the man in bed 6 with a normal ECG.",
        "Report the near miss and tell the team to label every tube at the bedside with two identifiers.",
      ],
      rubric: ["mp-h3", "mp-p3", "mp-m2", "mp-m3", "mp-pr3"],
      choices: [
        {
          id: "c-verify",
          label: "I stopped the treatment, checked two identifiers against the requisition, repeated ECGs and blood gas potassium on both patients, found the peaked T waves and a potassium of 7.3 in bed 9, treated her with calcium, insulin with dextrose and salbutamol, called for dialysis, and reported the near miss.",
          next: "q-handover",
          quality: "strong",
          feedback:
            "Correct. Paper processes raise the risk of identification errors, and a shared surname makes it worse. The ECGs and a bedside potassium sort it out in minutes. Bed 9 has a QRS of 128 ms and needs calcium now.",
        },
        {
          id: "c-treat-bed6",
          label: "I let the nurse give calcium, insulin and dextrose to the man in bed 6 as the result was phoned.",
          next: "s-treat-bed6",
          quality: "unsafe",
          feedback:
            "The man in bed 6 has a normal ECG and may not have hyperkalemia at all. Insulin in the wrong patient risks hypoglycemia, and the woman who needs treatment gets none. Verify two identifiers before acting on a result in a downtime.",
        },
        {
          id: "c-rerun",
          label: "I asked the laboratory to rerun the same tube to confirm the result before treating anyone.",
          next: "s-rerun",
          quality: "partial",
          feedback:
            "A rerun of the same tube confirms the number, not the patient. The question is whose blood is in it. Check identifiers, repeat ECGs and do a bedside blood gas on both patients.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-treat-bed6",
      phase: "21:20",
      text: "The man in bed 6 is sweaty with a glucose of 3.1 mmol/L. The nurse in bed 9 calls you because her monitor now shows a wide QRS. You treat bed 9 for hyperkalemia, give the man in bed 6 dextrose and report the event.",
      next: "q-handover",
    },
    {
      kind: "say",
      id: "s-rerun",
      phase: "21:15",
      text: "The laboratory confirms 7.4 on the same tube. The nurse in bed 9 calls you because her monitor shows a wider QRS. You check identifiers, repeat the ECGs and gases and treat bed 9.",
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "23:00",
      prompt: "IT says the systems will be down until at least tomorrow. Your colleague arrives for the night. What do you hand over, and what else do you set up before you leave?",
      seconds: 80,
      modelAnswer: [
        "A paper list of every patient with diagnosis, plan, pending tests and who is responsible.",
        "A log of phoned results, with who received each one and when. A callback list for results that come back after patients leave.",
        "Keep every paper record for scanning and reconciliation when the systems return.",
        "Report the current redirect status, the transfers and the near miss.",
        "Give a short debrief to the team, check on staff, and pass staffing needs to the incident command.",
      ],
      rubric: ["mp-pr4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The stroke patient has a thrombectomy with near complete reperfusion. The STEMI patient has his artery opened 70 minutes after he walked in. The woman in bed 9 is dialyzed overnight. Systems return 40 hours later. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "mp-h1",
      competency: "assessment",
      criterion: "history",
      text: "Gets the stroke patient's last known well time, 19:35, from her daughter and the paramedics.",
      points: 2,
      teaching: "Last known well sets the treatment window. A witness is more reliable than a patient with aphasia.",
      source: "csbpr-acute",
    },
    {
      id: "mp-h2",
      competency: "assessment",
      criterion: "history",
      text: "Gets a medication history from another source when the record is down. The daughter, the pill bag and the community pharmacy, with the anticoagulant and the time of the last dose.",
      points: 3,
      critical: true,
      teaching:
        "Anticoagulant use and the time of the last dose should be sought and recorded for every stroke patient. A downtime removes the usual sources, so it must come from family, bottles or the pharmacy.",
      source: "csbpr-acute",
    },
    {
      id: "mp-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks the woman in bed 9 about her dialysis schedule, the missed session and her symptoms.",
      points: 1,
      teaching: "A missed dialysis session is a common cause of dangerous hyperkalemia and makes her the likely owner of the result.",
      source: "ukka-k",
    },
    {
      id: "mp-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Triages by complaint, vital signs and ABC, ranks the STEMI and the stroke as the highest acuity, and has the waiting room reassessed.",
      points: 2,
      teaching:
        "CTAS assigns acuity by complaint and modifiers such as vital signs. Acute stroke and ongoing cardiac ischemia are resuscitation or emergent levels.",
      source: "ctas",
    },
    {
      id: "mp-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Does a focused NIHSS, localizes a left MCA syndrome and reads the CT and CT angiography with the radiologist on the scanner console.",
      points: 1,
      teaching: "Gaze deviation, aphasia and dense right weakness suggest a large vessel occlusion. CT angiography confirms it.",
      source: "csbpr-acute",
    },
    {
      id: "mp-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Uses repeat ECGs and a bedside blood gas potassium to find which patient has hyperkalemia.",
      points: 2,
      teaching: "Peaked T waves, flattened P waves and a wide QRS confirm the danger. The ECG and a bedside potassium find the right patient faster than the laboratory.",
      source: "ukka-k",
    },
    {
      id: "mp-m1",
      competency: "management",
      criterion: "management",
      text: "Withholds tenecteplase because she took apixaban today, and sends her for thrombectomy with a phone report, images on a disc and an urgent ambulance.",
      points: 3,
      critical: true,
      teaching:
        "IV thrombolytics should not routinely be given to patients on DOACs. Anticoagulation is not a contraindication to thrombectomy.",
      source: "csbpr-acute",
    },
    {
      id: "mp-m2",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats the woman in bed 9 with IV calcium, insulin with dextrose and salbutamol and arranges dialysis, and stops the treatment intended for bed 6.",
      points: 2,
      critical: true,
      teaching:
        "Hyperkalemia with ECG changes needs IV calcium to protect the heart, then insulin with glucose and salbutamol to shift potassium. Dialysis removes it.",
      source: "ukka-k",
    },
    {
      id: "mp-m3",
      competency: "management",
      criterion: "management",
      text: "Runs safe paper processes. Written orders with read-back, two identifiers on every wristband, form, tube and drug, and a second check on override medications.",
      points: 2,
      teaching:
        "Use at least two identifiers before any care, and label specimens in the presence of the patient. Downtimes and shared surnames raise the risk of misidentification.",
      source: "who-id",
    },
    {
      id: "mp-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Takes the lead and delegates. The second physician takes the STEMI for immediate transfer, the charge nurse runs downtime procedures, runners go to the laboratory and CT, and extra staff are called in.",
      points: 3,
      critical: true,
      teaching:
        "Clear command and assigned functions keep a complex response coordinated. Two time critical patients need two physicians working in parallel.",
      source: "ims",
    },
    {
      id: "mp-pr2",
      competency: "leadership",
      criterion: "process",
      text: "Advises activating the hospital emergency plan, asks EMS for a targeted redirect of non-critical patients, and warns the nearby emergency departments.",
      points: 3,
      teaching:
        "During a month-long ransomware attack, a nearby department saw more ambulance arrivals, more stroke codes, more ambulance diversion and longer waits. Cyberattacks should be planned for as regional disasters.",
      source: "dameff",
    },
    {
      id: "mp-pr3",
      competency: "professionalism",
      criterion: "process",
      text: "Reports the near miss and reminds the team to label every specimen at the bedside with two identifiers.",
      points: 1,
      teaching: "Labelling tubes away from the patient is a known cause of wrong-patient results. Reporting near misses helps prevent the next one.",
      source: "who-id",
    },
    {
      id: "mp-pr4",
      competency: "disposition",
      criterion: "process",
      text: "Hands over with a paper list of every patient and pending result, a log of phoned results and callbacks, and keeps paper records for later reconciliation. Debriefs the team.",
      points: 2,
      teaching:
        "In a long incident, planning and documentation are core functions of the response. Pending results are easily lost when the systems that track them are down.",
      source: "ims",
    },
  ],
  sources: [
    {
      id: "ctas",
      citation:
        "Bullard MJ, Musgrave E, Warren D, Unger B, and colleagues. Revisions to the Canadian Emergency Department Triage and Acuity Scale (CTAS) guidelines 2016. CJEM. 2017.",
    },
    {
      id: "dameff",
      citation:
        "Dameff C, Tully J, Chan TC, Castillo EM, and colleagues. Ransomware attack associated with disruptions at adjacent emergency departments in the US. JAMA Netw Open. 2023.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10167570/",
    },
    {
      id: "ims",
      citation: "Government of Ontario, Emergency Management Ontario. Incident Management System (IMS) guidance, version 2.0. 2021.",
      url: "https://www.ontario.ca/document/incident-management-system-ims-guidance-version-2",
    },
    {
      id: "who-id",
      citation: "WHO Collaborating Centre for Patient Safety Solutions. Patient identification. Patient Safety Solutions, volume 1, solution 2. 2007.",
      url: "https://cdn.who.int/media/docs/default-source/patient-safety/patient-safety-solutions/ps-solution2-patient-identification.pdf",
    },
    {
      id: "csbpr-acute",
      citation:
        "Heran M, Lindsay P, Gubitz G, Yu A, and colleagues. Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024.",
      url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment",
    },
    {
      id: "ukka-k",
      citation: "UK Kidney Association. Clinical practice guideline: treatment of acute hyperkalaemia in adults. 2026.",
      url: "https://guidelines.ukkidney.org/hyperkalaemia/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
