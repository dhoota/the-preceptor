// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const stoppedAntiplateletsDentalStemi: OralCase = {
  id: "stopped-antiplatelets-dental-stemi",
  title: "Heartburn before dawn",
  blueprint: "cardio",
  alsoCovers: ["systems"],
  priorityTopic: "ischemic-heart-disease",
  keyFeatures: [
    { topic: "ischemic-heart-disease", n: 1 },
    { topic: "ischemic-heart-disease", n: 2 },
    { topic: "ischemic-heart-disease", n: 4 },
    { topic: "ischemic-heart-disease", n: 6 },
    { topic: "ischemic-heart-disease", n: 7 },
    { topic: "chest-pain", n: 5 },
  ],
  summary: "A woman with burning upper abdominal pain walks into a community hospital early in the morning, and the first ECG is hard to call.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 57 year old woman walks in at 06:40 with an hour of burning upper abdominal discomfort and sweating. " +
    "The regional PCI centre is 40 minutes away by land ambulance.",
  card: {
    vitals: {
      temperature: "36.6°C oral",
      pulse: "98/minute",
      resp: "20/minute",
      bp: "146/88 mmHg",
      o2sat: "96% on room air",
      weight: "74 kg (163 lb)",
    },
    medications:
      "ASA 81 mg daily, ticagrelor 90 mg twice daily, rosuvastatin 40 mg daily, metoprolol 25 mg twice daily, ramipril 5 mg daily, metformin 1 000 mg twice daily",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Woke at 05:40 with burning in the upper abdomen spreading to the left arm and jaw. Sweaty and nauseated. " +
        "She chewed two calcium carbonate tablets and the burning eased a little, then came back. Now 6 out of 10. No vomiting. No back pain. Not pleuritic.",
    },
    {
      id: "prodrome",
      label: "Symptoms in the last few days",
      result: "Yesterday she had two short episodes of the same burning while climbing the stairs at work. Each settled after a few minutes of rest. She thought it was indigestion.",
    },
    {
      id: "cardiac",
      label: "Cardiac history",
      result:
        "NSTEMI 4 months ago. A drug eluting stent was placed in the proximal left anterior descending artery. " +
        "She was told to take ticagrelor for 12 months and ASA for life, and not to stop either without talking to her cardiologist.",
    },
    {
      id: "med-detail",
      label: "Medication details",
      result:
        "Six days ago the dental office called and told her to stop her 'blood thinners' 4 days before having two teeth pulled. She stopped both ASA and ticagrelor. " +
        "She has not restarted either. Her cardiologist was not asked. Other medications taken as prescribed.",
    },
    {
      id: "dental",
      label: "Dental procedure",
      result: "Two lower molars extracted 2 days ago. The sockets oozed the first evening and stopped with gauze pressure. No bleeding since.",
    },
    {
      id: "bleed-screen",
      label: "Bleeding and stroke history",
      result:
        "No previous stroke, TIA or brain bleed. No GI bleeding. No major surgery or head injury in the past month. No known bleeding disorder. Postmenopausal. Not on an anticoagulant.",
    },
    {
      id: "pmh",
      label: "Other history",
      result: "Type 2 diabetes. Hypertension. Dyslipidemia. Quit smoking after her heart attack. Her mother had a heart attack at 60.",
    },
    {
      id: "social",
      label: "Social history",
      result: "School bus driver. Lives with her husband, who drove her in and is parking the car. No alcohol or drug use.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Pale, sweaty and uncomfortable. Pulse 98 and regular. BP 146/88 right arm and 142/86 left arm. Radial and femoral pulses equal. JVP not raised. " +
        "Heart sounds normal with no murmur or rub. Chest clear. Mild epigastric tenderness to deep palpation. Extraction sockets have firm clot with no oozing. No focal neurological signs.",
    },
    {
      id: "ecg1",
      label: "ECG at 06:44",
      result:
        "Sinus rhythm at 96. Broad, tall, symmetric T waves in V2 to V4 that look large for the QRS. 1 mm ST elevation in V2 and V3. " +
        "Subtle 0.5 mm ST depression in III and aVF. Does not meet STEMI millimetre criteria.",
    },
    {
      id: "ecg2",
      label: "ECG at 06:58",
      result: "Sinus rhythm at 102. ST elevation of 3 mm in V1 to V4 and 1.5 mm in I and aVL. Reciprocal 1 mm ST depression in III and aVF.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result: "Anterior and apical walls move poorly. Ejection fraction looks moderately reduced. No pericardial effusion. No B lines. Aortic root 3.2 cm with no flap seen.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Normal mediastinum. Clear lungs. Normal heart size.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "hs troponin I 46 ng/L (sex specific 99th percentile 16 ng/L). Hemoglobin 128 g/L. Platelets 244 x 10^9/L. INR 1.0. Creatinine 82 µmol/L. Potassium 4.1 mmol/L. Glucose 11.4 mmol/L.",
    },
    {
      id: "transport",
      label: "Transport status",
      result:
        "The PCI centre accepts her. Both local ambulance crews are out on calls and the next available crew is 70 minutes away. Fog has grounded the air ambulance. " +
        "The PCI centre estimates she would reach the lab at about 09:15 at the earliest.",
    },
    {
      id: "husband",
      label: "Collateral from her husband",
      result:
        "He confirms the dental office call and that she stopped both pills. She looked grey on the stairs yesterday and would not let him call anyone. He asks whether the dentist did something wrong.",
    },
    {
      id: "reassess",
      label: "Reassessment 75 minutes after tenecteplase",
      result: "Pain free. ST elevation in V1 to V4 has fallen by about 70 percent. Sinus rhythm at 78. BP 128/76. No further bleeding from the sockets.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "06:44",
      text:
        "Triage has labelled her 'epigastric burning, better with antacids, query reflux' and put her in a chair in the waiting area. The triage nurse brings you her first ECG.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first ECG",
      prompt: "Look at this ECG and tell me what you do.",
      seconds: 75,
      modelAnswer: [
        "Hyperacute T waves in V2 to V4 with subtle inferior reciprocal change. This may be early coronary occlusion.",
        "Move her to a monitored bed. Repeat the ECG within 10 to 15 minutes, and at once if symptoms change.",
        "ASA 160 mg chewed now.",
        "IV access, troponin, CBC, electrolytes, creatinine, glucose.",
        "Ask about her heart history, her stent and her antiplatelet drugs.",
        "Antacid relief and epigastric tenderness do not exclude ACS.",
      ],
      rubric: ["ih-p1", "ih-h4"],
      choices: [
        {
          id: "c-hyperacute",
          label:
            "I read the T waves in V2 to V4 as hyperacute, moved her to a monitored bed, gave ASA 160 mg chewed, asked about her heart history and repeated the ECG within 15 minutes.",
          next: "s-stemi",
          quality: "strong",
          feedback:
            "Good. The ESC notes that hyperacute T waves may precede ST elevation. Serial ECGs catch the evolution. " +
            "Relief with antacids is not reassuring in a patient with a stent and risk factors.",
        },
        {
          id: "c-troponin",
          label: "It does not meet STEMI criteria, so I sent a troponin, gave a GI cocktail and planned a repeat ECG in an hour.",
          next: "s-troponin",
          quality: "partial",
          feedback:
            "A troponin is right, but an hour is too long with these T waves and ongoing pain. A GI cocktail tells you nothing. " +
            "The examiner wanted a monitored bed, ASA and a repeat ECG within 10 to 15 minutes.",
        },
        {
          id: "c-reflux",
          label: "Her pain is epigastric, better with antacids and tender on palpation, so I left her in fast track with an antacid.",
          next: "s-reflux",
          quality: "unsafe",
          feedback:
            "Antacid relief, epigastric tenderness and a non diagnostic first ECG are exactly the weak clues that should not exclude ACS. " +
            "She has a stent and ongoing pain. She needs monitoring and serial ECGs.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-troponin",
      phase: "07:05",
      text: "The nurse calls you. The patient is grey and the pain is 9 out of 10. You repeat the ECG, give ASA, and move her to a monitored bed.",
      next: "s-stemi",
    },
    {
      kind: "say",
      id: "s-reflux",
      phase: "07:15",
      text:
        "Her husband finds the triage nurse because she has vomited and looks grey. A repeat ECG is done in the hallway. You move her to resus and give ASA 160 mg.",
      next: "s-stemi",
    },
    {
      kind: "say",
      id: "s-stemi",
      phase: "The repeat ECG",
      text:
        "The repeat ECG shows 3 mm of ST elevation in V1 to V4 and 1.5 mm in I and aVL, with reciprocal ST depression inferiorly. Her pain is 8 out of 10.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History that changes the plan",
      prompt: "What history do you need now, before you choose how to open her artery?",
      seconds: 60,
      modelAnswer: [
        "Time the pain began. 05:40.",
        "The stent. Type, date, vessel and her antiplatelet plan.",
        "Whether she has stopped any medicine. She stopped ASA and ticagrelor 6 days ago for dental work.",
        "The dental procedure and any bleeding since.",
        "Contraindications to fibrinolysis. Stroke, brain bleed, GI bleed, surgery or head injury, bleeding disorder, anticoagulant.",
        "Allergies. Collateral from her husband.",
      ],
      rubric: ["ih-h1", "ih-h2", "ih-h3", "ih-h5"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Exam and differential",
      prompt: "What do you examine and what else must you exclude before you give a fibrinolytic?",
      seconds: 60,
      modelAnswer: [
        "Interpret the ECG. Anterior STEMI with reciprocal change, above the 1.5 mm threshold for women in V2 and V3.",
        "Pressure in both arms and pulses. Murmur of aortic regurgitation. Neurological deficit.",
        "Signs of heart failure or shock.",
        "Look at the extraction sockets.",
        "Bedside echo for wall motion, effusion and aortic root. Chest X ray for the mediastinum.",
        "Differential. Aortic dissection, pericarditis, peptic or biliary disease. Likely mechanism is stent thrombosis.",
      ],
      rubric: ["ih-p2", "ih-p3", "ih-p4"],
      next: "s-transport",
    },
    {
      kind: "say",
      id: "s-transport",
      phase: "Minutes later",
      text:
        "The PCI centre accepts her for primary PCI. Then dispatch calls back. Both local ambulances are out and the next crew is 70 minutes away. Fog has grounded the air ambulance. " +
        "The PCI centre estimates she would reach the lab at about 09:15 at the earliest.",
      next: "q-reperfusion",
    },
    {
      kind: "question",
      id: "q-reperfusion",
      phase: "Reperfusion",
      prompt: "What is your reperfusion plan now? Give me your drugs and doses.",
      seconds: 90,
      modelAnswer: [
        "First medical contact was 06:40 and the STEMI diagnosis 06:58. A lab time of 09:15 is well over 120 minutes from either.",
        "Switch to fibrinolysis now. Aim for the bolus within 10 minutes of the decision and 30 minutes of arrival.",
        "Tenecteplase weight based. 40 mg for 70 to under 80 kg, so 40 mg for her 74 kg. She is under 75, so full dose.",
        "ASA already given. Clopidogrel 300 mg load.",
        "Enoxaparin 30 mg IV, then 1 mg/kg SC every 12 hours. 74 mg for her.",
        "The dental extraction 2 days ago is minor and compressible. It is not a listed contraindication. Weigh it as a relative risk and explain it to her.",
        "Transfer to the PCI centre afterwards for a pharmacoinvasive strategy.",
      ],
      rubric: ["ih-m1", "ih-m2", "ih-m3", "ih-pr2"],
      choices: [
        {
          id: "c-lyse",
          label:
            "I gave tenecteplase 40 mg, clopidogrel 300 mg and enoxaparin 30 mg IV then 74 mg SC, after telling her about the bleeding risk. I judged the dental extraction a minor, compressible risk and arranged transfer for angiography afterwards.",
          next: "s-after",
          quality: "strong",
          feedback:
            "Correct. When first contact to device will exceed 120 minutes, Canadian and ESC guidelines favour fibrinolysis without delay, then transfer. " +
            "A dental extraction is not major surgery and the sockets can be compressed. Clopidogrel is the P2Y12 inhibitor studied with fibrinolysis.",
        },
        {
          id: "c-wait",
          label: "I gave heparin and ticagrelor 180 mg and waited for the ambulance so she could have primary PCI.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "Primary PCI is preferred only when it can happen within 120 minutes of first contact. Here it cannot. " +
            "Every extra minute of occlusion loses myocardium. The examiner wanted fibrinolysis now and transfer after.",
        },
        {
          id: "c-no-lysis",
          label: "Because of the recent dental surgery, I withheld the fibrinolytic and all anticoagulation, gave morphine and waited for the ambulance.",
          next: "s-no-lysis",
          quality: "unsafe",
          feedback:
            "Withholding reperfusion and all antithrombotic therapy from an anterior STEMI is the greater risk. Recent major surgery weighs against lysis, but a dental extraction with clotted sockets is minor and compressible. " +
            "Weigh the bleeding risk against a large anterior infarct, and tell her about it.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "07:45",
      text:
        "At 07:45 she is still in pain and has runs of ventricular ectopy. The cardiologist calls back and asks why she has not been lysed, given the delay. You give tenecteplase 40 mg, clopidogrel and enoxaparin.",
      next: "s-after",
    },
    {
      kind: "say",
      id: "s-no-lysis",
      phase: "07:40",
      text:
        "Her BP falls to 94/60 and she develops crackles at both bases. The interventional cardiologist on the phone asks you to give tenecteplase now. You do, with clopidogrel and enoxaparin.",
      next: "s-after",
    },
    {
      kind: "say",
      id: "s-after",
      phase: "Forty minutes after tenecteplase",
      text:
        "Her pain is easing. The monitor alarms. It shows a regular wide complex rhythm at 72 with no P waves, which comes and goes. She feels fine. BP 132/78. " +
        "At the same time she spits blood into a basin. One extraction socket is oozing. The nurse is worried.",
      next: "q-complications",
    },
    {
      kind: "question",
      id: "q-complications",
      phase: "Two problems",
      prompt: "What is the rhythm, and what do you do about it and about the bleeding?",
      seconds: 75,
      modelAnswer: [
        "Accelerated idioventricular rhythm. A typical reperfusion arrhythmia and a good sign. Rate under 120 and she is stable.",
        "No antiarrhythmic and no cardioversion. Keep monitoring with pads on.",
        "The socket ooze is minor and compressible. Firm gauze pressure, have her bite down. Local measures with dental advice.",
        "Do not stop antiplatelets or anticoagulant for minor compressible bleeding. Do not give reversal.",
        "Check hemoglobin. Watch for signs of major bleeding, including neurological change.",
      ],
      rubric: ["ih-m4", "ih-m5"],
      choices: [
        {
          id: "c-aivr",
          label:
            "I recognized accelerated idioventricular rhythm as a reperfusion rhythm and did not treat it. I had her bite on firm gauze pressure, kept her antithrombotics going and checked her hemoglobin.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Right. A typical reperfusion arrhythmia is one of the signs that lysis has worked. " +
            "Minor bleeding from a compressible site is managed locally. Stopping antithrombotic therapy now would risk reocclusion of a fresh stent thrombosis.",
        },
        {
          id: "c-amio",
          label: "I treated it as slow VT with amiodarone 150 mg IV and held the enoxaparin because of the bleeding.",
          next: "s-amio",
          quality: "partial",
          feedback:
            "This rhythm is not VT. It is slow, benign and a marker of reperfusion. Suppressing it can remove the escape rhythm. " +
            "Holding anticoagulation for a minor socket ooze trades a small bleed for a risk of reocclusion.",
        },
        {
          id: "c-reverse",
          label: "I cardioverted the wide complex rhythm and asked for protamine and cryoprecipitate to stop the bleeding.",
          next: "s-reverse",
          quality: "unsafe",
          feedback:
            "Shocking a stable reperfusion rhythm is harmful and unnecessary. Reversal agents are for major or life threatening bleeding, such as a brain bleed. " +
            "A socket ooze needs pressure, not reversal of the drugs that are opening her artery.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-amio",
      phase: "08:00",
      text: "The rhythm settles to sinus at 76. The pharmacist reminds you that accelerated idioventricular rhythm does not need treatment. You restart the enoxaparin and apply gauze pressure. The ooze stops.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-reverse",
      phase: "08:00",
      text:
        "After the shock she has 4 seconds of asystole before sinus rhythm returns. The cardiologist on the phone cancels the protamine and cryoprecipitate before they are given. Gauze pressure stops the ooze.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Reassessment and transfer",
      prompt: "At 75 minutes she is pain free and the ST elevation has fallen by about 70 percent. What do you check, and where does she go?",
      seconds: 60,
      modelAnswer: [
        "Signs of success. More than 50 percent ST resolution at 60 to 90 minutes, pain gone, reperfusion rhythm.",
        "If ST resolution were under 50 percent, or pain or instability returned, she would need rescue PCI at once.",
        "Even after success, transfer for angiography within 2 to 24 hours.",
        "Escort able to defibrillate and treat arrhythmia. Pads on.",
        "Structured handover. Times of onset, first contact, ECGs and lysis, drugs and doses, bleeding.",
      ],
      rubric: ["ih-pr1", "ih-pr6"],
      next: "q-talk",
    },
    {
      kind: "question",
      id: "q-talk",
      phase: "Her questions",
      prompt: "Before she leaves, she and her husband ask whether stopping the pills caused this, and whether the dentist made a mistake. What do you say?",
      seconds: 75,
      modelAnswer: [
        "Be honest. Stopping both antiplatelets soon after a drug eluting stent greatly raises the risk of the stent clotting. This is the likely cause.",
        "Do not blame the dentist or her. Many people get this advice. The cardiologist will confirm the cause at angiography.",
        "From now on, never stop ASA or ticagrelor without the cardiologist.",
        "Dental work can usually be done on antiplatelets with local measures. Elective procedures can wait until the course is done.",
        "With her permission, let the dental office and her cardiologist know.",
        "She cannot drive the school bus until she is assessed and cleared.",
      ],
      rubric: ["ih-pr3", "ih-pr4"],
      next: "q-system",
    },
    {
      kind: "question",
      id: "q-system",
      phase: "Looking back",
      prompt: "She left triage labelled as reflux. What do you look at in your department afterwards?",
      seconds: 60,
      modelAnswer: [
        "ECG within 10 minutes of arrival for chest, arm, jaw or epigastric symptoms in an adult with risk factors.",
        "The ECG read by a physician at once, with a repeat plan for non diagnostic tracings.",
        "Door to needle time against the 30 minute target. Record each interval.",
        "A transport plan for when local crews are out and air is grounded.",
        "Feedback to the triage nurse without blame. Share the case at rounds.",
      ],
      rubric: ["ih-pr5"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "Angiography the same afternoon shows thrombus in the stent, now open. A second stent is not needed. She goes home on ASA and ticagrelor 3 days later, and her cardiologist writes to the dental office. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ih-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the stent. Type, vessel, date and the planned length of dual antiplatelet therapy.",
      points: 2,
      teaching: "A drug eluting stent in the first year is at high risk of thrombosis if dual antiplatelet therapy stops.",
      source: "grines",
    },
    {
      id: "ih-h2",
      competency: "assessment",
      criterion: "history",
      text: "Finds out that she stopped both ASA and ticagrelor 6 days ago on dental advice.",
      points: 2,
      teaching: "Premature stopping of dual antiplatelet therapy greatly increases stent thrombosis, MI and death. Ask directly about recent changes.",
      source: "grines",
    },
    {
      id: "ih-h3",
      competency: "assessment",
      criterion: "history",
      text: "Screens for contraindications to fibrinolysis. Stroke or brain bleed, GI bleeding, major surgery or head injury in the last month, bleeding disorder, anticoagulant, and details of the dental procedure.",
      points: 2,
      teaching: "The ESC list of absolute contraindications includes major trauma, surgery or head injury in the preceding month and GI bleeding within a month.",
      source: "esc23",
    },
    {
      id: "ih-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about onset time and the prodrome of exertional symptoms, and does not accept antacid relief as reassurance.",
      points: 1,
      teaching: "Onset time drives the reperfusion decision. Response to antacids does not separate cardiac from GI pain.",
      source: "esc23",
    },
    {
      id: "ih-h5",
      competency: "communication",
      criterion: "history",
      text: "Gets collateral from her husband about the dental advice and yesterday's symptoms.",
      points: 1,
      teaching: "Family often saw the warning signs that the patient dismissed.",
      source: "esc23",
    },
    {
      id: "ih-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes hyperacute T waves as possible early coronary occlusion and repeats the ECG within 10 to 15 minutes while she is monitored.",
      points: 3,
      critical: true,
      teaching: "Hyperacute T waves may precede ST elevation. A first ECG that misses STEMI criteria does not exclude an occluded artery.",
      source: "esc17",
    },
    {
      id: "ih-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Reads the repeat ECG as an anterior STEMI with reciprocal change, using the 1.5 mm threshold for women in V2 and V3.",
      points: 2,
      teaching: "ST elevation thresholds in V2 and V3 depend on sex and age. Reciprocal depression supports a true STEMI.",
      source: "esc17",
    },
    {
      id: "ih-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Before fibrinolysis, compares arm pressures and pulses, listens for a murmur, checks for a neurological deficit and heart failure, and inspects the sockets.",
      points: 2,
      teaching: "Aortic dissection is an absolute contraindication to fibrinolysis. A brief targeted exam and a chest film lower the risk of missing it.",
      source: "esc23",
    },
    {
      id: "ih-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential including dissection, pericarditis and peptic or biliary disease, and names stent thrombosis as the likely mechanism.",
      points: 1,
      teaching: "Epigastric pain is a common presentation of inferior and anterior MI. Name the mechanism because it shapes the antiplatelet plan.",
      source: "esc23",
    },
    {
      id: "ih-m1",
      competency: "management",
      criterion: "management",
      text: "Chooses fibrinolysis when expected first contact to device time exceeds 120 minutes, and gives it within 30 minutes of arrival.",
      points: 3,
      critical: true,
      teaching: "Canadian guidance favours fibrinolysis when primary PCI cannot happen within 120 minutes of first medical contact, with a door to needle goal of 30 minutes or less.",
      source: "ccs",
    },
    {
      id: "ih-m2",
      competency: "management",
      criterion: "management",
      text: "Gives correct doses. Tenecteplase 40 mg for 70 to under 80 kg, ASA 160 mg chewed, clopidogrel 300 mg, enoxaparin 30 mg IV then 1 mg/kg SC every 12 hours.",
      points: 2,
      teaching: "Under age 75, give full weight based tenecteplase, a 300 mg clopidogrel load and an enoxaparin IV bolus. At 75 or older, give clopidogrel 75 mg and omit the enoxaparin bolus.",
      source: "esc17",
    },
    {
      id: "ih-m3",
      competency: "management",
      criterion: "management",
      text: "Weighs the recent dental extraction as a minor, compressible bleeding risk that does not justify withholding reperfusion, and explains the risk to her.",
      points: 2,
      critical: true,
      teaching: "The Canadian monograph lists recent major surgery and recent trauma as risks to weigh against benefit. A dental extraction with compressible sockets is a minor risk next to a large anterior infarct.",
      source: "tnk",
    },
    {
      id: "ih-m4",
      competency: "management",
      criterion: "management",
      text: "Recognizes accelerated idioventricular rhythm as a reperfusion arrhythmia and does not treat it.",
      points: 1,
      teaching: "A typical reperfusion arrhythmia is one of the signs that fibrinolysis has worked, along with ST resolution and relief of pain.",
      source: "esc17",
    },
    {
      id: "ih-m5",
      competency: "management",
      criterion: "management",
      text: "Manages socket oozing with local pressure and does not stop antithrombotic therapy or give reversal for minor compressible bleeding.",
      points: 1,
      teaching: "Dental bleeding on antiplatelets is usually controlled locally. Stopping therapy after stent thrombosis risks reocclusion.",
      source: "grines",
    },
    {
      id: "ih-pr1",
      competency: "disposition",
      criterion: "process",
      text: "Transfers for angiography within 2 to 24 hours after successful lysis, and knows that under 50 percent ST resolution at 60 to 90 minutes needs rescue PCI.",
      points: 2,
      teaching: "Fibrinolysis is the first step of a pharmacoinvasive strategy, not the end of care.",
      source: "ccs",
    },
    {
      id: "ih-pr2",
      competency: "leadership",
      criterion: "process",
      text: "Recalculates the reperfusion plan as soon as transport is delayed, using the time of first medical contact.",
      points: 2,
      teaching: "The decision between PCI and lysis rests on realistic times, not on the plan made before the ambulance problem.",
      source: "ccs",
    },
    {
      id: "ih-pr3",
      competency: "communication",
      criterion: "process",
      text: "Explains honestly that stopping antiplatelets likely caused the stent to clot, without blaming the dentist or the patient, and tells her never to stop them without her cardiologist.",
      points: 2,
      teaching: "Patients and other providers often do not know the risk. Education of both is the main prevention.",
      source: "grines",
    },
    {
      id: "ih-pr4",
      competency: "communication",
      criterion: "process",
      text: "With her consent, informs the dental office and her cardiologist, and advises that she not drive the school bus until cleared.",
      points: 1,
      teaching: "The advisory urges postponing elective procedures during dual antiplatelet therapy, or continuing ASA, after discussion with the cardiologist.",
      source: "grines",
    },
    {
      id: "ih-pr5",
      competency: "leadership",
      criterion: "process",
      text: "Reviews triage. ECG within 10 minutes for possible ACS, including epigastric presentations, and audits door to needle time.",
      points: 1,
      teaching: "An ECG within 10 minutes of first contact is the standard. Atypical triage labels delay it.",
      source: "esc23",
    },
    {
      id: "ih-pr6",
      competency: "disposition",
      criterion: "process",
      text: "Sends her with an escort who can defibrillate, and gives a structured handover with times, drugs and bleeding.",
      points: 1,
      teaching: "Reperfusion arrhythmias and reocclusion can happen in transit. The crew must be able to treat them.",
      source: "ccs",
    },
  ],
  sources: [
    {
      id: "ccs",
      citation:
        "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
      url: "https://pubmed.ncbi.nlm.nih.gov/30760415/",
    },
    {
      id: "esc23",
      citation: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.",
      url: "https://doi.org/10.1093/eurheartj/ehad191",
    },
    {
      id: "esc17",
      citation:
        "Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST segment elevation. Eur Heart J. 2018.",
      url: "https://doi.org/10.1093/eurheartj/ehx393",
    },
    {
      id: "grines",
      citation:
        "Grines CL, Bonow RO, Casey DE Jr, et al. Prevention of premature discontinuation of dual antiplatelet therapy in patients with coronary artery stents. A science advisory from the AHA, ACC, SCAI, ACS and ADA. Circulation. 2007.",
      url: "https://pubmed.ncbi.nlm.nih.gov/17224480/",
    },
    {
      id: "tnk",
      citation: "Hoffmann-La Roche Limited. TNKase (tenecteplase for injection) product monograph. Revised 2023.",
      url: "https://pdf.hres.ca/dpd_pm/00069984.PDF",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
