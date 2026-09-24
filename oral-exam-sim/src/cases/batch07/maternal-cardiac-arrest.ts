// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const maternalCardiacArrest: OralCase = {
  id: "maternal-cardiac-arrest",
  title: "Short of breath at thirty three weeks",
  blueprint: "obgyn",
  alsoCovers: ["resus", "cardio"],
  priorityTopic: "dvt-pe",
  keyFeatures: [
    { topic: "dvt-pe", n: 1 },
    { topic: "dvt-pe", n: 2 },
    { topic: "dvt-pe", n: 6 },
    { topic: "shock", n: 6 },
    { topic: "airway", n: 4 },
    { topic: "arrhythmia", n: 8 },
  ],
  summary: "A woman in her third trimester arrives short of breath and faints at triage.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 38 year old woman who is 33 weeks pregnant with her second baby arrives short of breath and faints in the triage line. " +
    "There is an in house obstetrician and anesthetist. There is no cardiac surgery or ECMO.",
  card: {
    vitals: {
      temperature: "37.2°C",
      pulse: "138/minute",
      resp: "32/minute",
      bp: "84/56 mmHg",
      o2sat: "86% on room air",
      weight: "96 kg (212 lb)",
    },
    medications: "No anticoagulants. Other medications not recorded.",
    allergies: "No allergies",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "She has had 3 days of shortness of breath and right calf pain after a 14 hour car trip. She fainted in the triage line. CTAS 1. " +
        "The triage nurse says: 'She was grey and sweaty when she went down. She is awake now but says she feels like she is dying.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A 300 bed urban community hospital in Ontario. It has a labour and delivery unit, an in house obstetrician and anesthetist, and a level 2 nursery. There is no cardiac surgery or ECMO.",
    },
    {
      id: "exam",
      label: "Initial exam",
      result:
        "Anxious, diaphoretic and cool to touch. JVP visible at the angle of the jaw sitting up. Chest clear. Right calf swollen and tender, 4 cm larger than the left. Fundus 3 finger breadths above the umbilicus.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 136. Right bundle branch block. T wave inversion in V1 to V4 and III. S wave in I.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result:
        "Right ventricle larger than the left with a flattened septum. Right ventricular free wall hypokinesis with apical sparing. IVC 2.6 cm with no collapse. No pericardial effusion.",
    },
    {
      id: "gas",
      label: "Arterial blood gas on 15 L non rebreather",
      result: "pH 7.31. pCO2 28 mmHg. PaO2 58 mmHg. Bicarbonate 14 mmol/L. Lactate 5.8 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 112 g/L. Platelets 186 x 10^9/L. INR 1.0. Fibrinogen 4.6 g/L. Creatinine 68 µmol/L. Potassium 4.0 mmol/L. High sensitivity troponin T 142 ng/L. Glucose 6.8 mmol/L.",
    },
    {
      id: "fetal",
      label: "Fetal heart",
      result: "Doppler before collapse: 170 beats per minute.",
    },
    {
      id: "history",
      label: "Past history",
      result: "No prior VTE. No anticoagulants. Uncomplicated first pregnancy. Mother had a PE after a hip replacement. No allergies.",
    },
    {
      id: "post-rosc",
      label: "Post ROSC echo",
      result: "Severely dilated right ventricle with septal bowing into the left ventricle. Small underfilled left ventricle. Mobile serpiginous echo in the right atrium consistent with a clot in transit.",
    },
    {
      id: "partner",
      label: "Partner",
      result: "Her husband arrives 30 minutes after the arrest with their 4 year old daughter. He has not been told anything yet.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text: "She is on the stretcher lying flat. The nurse is putting on the monitor. Her SpO2 is 86 percent.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Before the arrest",
      prompt: "What do you do in the first five minutes?",
      seconds: 90,
      modelAnswer: [
        "Left lateral tilt or manual left uterine displacement. Never flat supine after 20 weeks.",
        "High flow oxygen. IV access above the diaphragm.",
        "Bedside echo. Right ventricular strain with a swollen calf points to massive PE.",
        "Call obstetrics, anesthesia and the neonatal team now. Get the hysterotomy kit and neonatal warmer to the room.",
        "Start unfractionated heparin 80 units/kg IV bolus, about 7700 units for 96 kg, if no contraindication. It keeps thrombolysis and surgery options open.",
        "Anticipate arrest. Plan thrombolysis if she deteriorates.",
        "Brief history while the teams gather: onset of dyspnea, calf pain, the long car trip, the faint, past VTE and family history.",
      ],
      rubric: ["mca-h1", "mca-h2", "mca-a1", "mca-r1", "mca-l1"],
      choices: [
        {
          id: "c-prepare",
          label: "I displaced the uterus left, gave oxygen, got access above the diaphragm, did a bedside echo and called obstetrics, anesthesia and the neonatal team to the room.",
          next: "s-arrest",
          quality: "strong",
          feedback:
            "Strong. The gravid uterus compresses the vena cava when she lies flat and can halve cardiac output. " +
            "Echo showing a strained right ventricle with a swollen leg is enough to treat as massive PE. Bringing every team in before an arrest saves minutes.",
        },
        {
          id: "c-ct",
          label: "I sent her for a CT pulmonary angiogram with a nurse to confirm the diagnosis.",
          next: "s-ct",
          quality: "unsafe",
          feedback:
            "She is hypotensive and hypoxic. The CT scanner is not a place to arrest. " +
            "Bedside echo is enough to act in a peri arrest patient. The examiner wanted uterine displacement, oxygen and early team activation.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In the CT corridor",
      text: "She becomes unresponsive on the transfer to the CT table. She is rushed back to the resuscitation room with CPR in progress.",
      next: "s-arrest",
    },
    {
      kind: "say",
      id: "s-arrest",
      phase: "Arrest",
      text: "She gasps and becomes unresponsive. There is no pulse. The monitor shows a narrow complex rhythm at 40.",
      next: "q-arrest",
    },
    {
      kind: "question",
      id: "q-arrest",
      phase: "Cardiac arrest",
      prompt: "Run the arrest. What is different because she is pregnant?",
      seconds: 90,
      modelAnswer: [
        "PEA arrest. High quality CPR with standard hand position on a firm surface.",
        "Continuous manual left uterine displacement by a dedicated person.",
        "Epinephrine 1 mg IV every 3 to 5 minutes. Standard ACLS doses and defibrillation energies.",
        "Airway by the most experienced person. Expect a difficult airway. Use a smaller tube. Oxygenate well.",
        "Start the clock. Call for resuscitative hysterotomy now and plan to begin at 4 minutes if no ROSC.",
        "Think of causes. Massive PE is most likely here.",
      ],
      rubric: ["mca-r2", "mca-r3"],
      choices: [
        {
          id: "c-acls",
          label: "I ran standard ACLS with manual left uterine displacement, gave epinephrine 1 mg, assigned the airway to anesthesia and told the team we would begin a hysterotomy at 4 minutes.",
          next: "s-four",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Drug doses and defibrillation do not change in pregnancy. " +
            "Manual displacement keeps compressions effective. Announcing the hysterotomy plan at the start keeps the team on time.",
        },
        {
          id: "c-wedge",
          label: "I tilted her 30 degrees on a wedge and did CPR in that position.",
          next: "s-wedge",
          quality: "partial",
          feedback:
            "A tilt relieves compression, but CPR on a tilted patient is less effective. " +
            "Current guidance prefers the patient supine with manual left uterine displacement. You also needed a plan for hysterotomy.",
        },
        {
          id: "c-wait-ob",
          label: "I ran standard ACLS and planned to let the obstetrician decide about delivery when she arrives.",
          next: "s-wait-ob",
          quality: "unsafe",
          feedback:
            "The emergency physician leading the code owns the hysterotomy decision. Waiting risks passing the 5 minute target. " +
            "Also, compressions without uterine displacement are much less effective after 20 weeks.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wedge",
      phase: "Two minutes later",
      text: "The compressor struggles on the wedge and end tidal CO2 is 8 mmHg. You lay her flat and a nurse pushes the uterus to the left. End tidal CO2 rises to 14.",
      next: "s-four",
    },
    {
      kind: "say",
      id: "s-wait-ob",
      phase: "Three minutes later",
      text: "The obstetrician is delayed at a delivery upstairs. The charge nurse asks if you want the hysterotomy tray opened. A nurse starts manual uterine displacement.",
      next: "s-four",
    },
    {
      kind: "say",
      id: "s-four",
      phase: "Four minutes into the arrest",
      text: "Two doses of epinephrine are in. There is still no pulse. The obstetrician has just arrived. The hysterotomy tray is open.",
      next: "q-hysterotomy",
    },
    {
      kind: "question",
      id: "q-hysterotomy",
      phase: "Resuscitative hysterotomy",
      prompt: "What do you do now?",
      seconds: 60,
      modelAnswer: [
        "Perform resuscitative hysterotomy now, in the resuscitation room. Do not move her.",
        "Indication: uterus at or above the umbilicus and no ROSC after 4 minutes. Aim to deliver by 5 minutes.",
        "The primary goal is maternal resuscitation by relieving aortocaval compression.",
        "Do not stop to check fetal heart or viability. Continue CPR throughout.",
        "Quick antiseptic pour. Scalpel. Vertical incision.",
        "Neonatal team ready to receive the baby.",
      ],
      rubric: ["mca-m1"],
      choices: [
        {
          id: "c-now",
          label: "I told the obstetrician to perform the hysterotomy immediately in the resuscitation room while CPR continued.",
          next: "s-delivered",
          quality: "strong",
          feedback:
            "Correct. Resuscitative hysterotomy is done where the patient is. Delivery relieves aortocaval compression and improves the chance of maternal ROSC. " +
            "Waiting for fetal assessment or moving to the OR loses critical time.",
        },
        {
          id: "c-or",
          label: "I moved her to the operating room so the obstetrician could do the section there.",
          next: "s-moving",
          quality: "unsafe",
          feedback:
            "Moving a patient in arrest interrupts compressions and delays delivery well past 5 minutes. " +
            "The procedure is done at the site of the arrest with a scalpel and minimal preparation.",
        },
        {
          id: "c-fetal",
          label: "I asked for a quick ultrasound to confirm a fetal heartbeat before deciding.",
          next: "s-fetal",
          quality: "partial",
          feedback:
            "The procedure is done for the mother. It helps her circulation whether or not the fetus is alive. " +
            "Checking the fetus wastes time. Proceed at 4 minutes without fetal assessment.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-moving",
      phase: "Two minutes later",
      text: "Compressions stop for the move through the doorway. End tidal CO2 falls. The obstetrician insists on doing it in the resuscitation room. You stop the move and she starts.",
      next: "s-delivered",
    },
    {
      kind: "say",
      id: "s-fetal",
      phase: "Ninety seconds later",
      text: "The ultrasound shows fetal cardiac activity at 60. The obstetrician says it does not change the decision and starts the incision.",
      next: "s-delivered",
    },
    {
      kind: "say",
      id: "s-delivered",
      phase: "Six minutes into the arrest",
      text:
        "The baby is delivered and handed to the neonatal team. Two minutes later, after a third dose of epinephrine, there is a pulse. " +
        "Blood pressure 72/40, heart rate 128. She is intubated. The obstetrician is packing the uterus. Your repeat echo shows a severely dilated right ventricle and a clot in the right atrium.",
      next: "q-lysis",
    },
    {
      kind: "question",
      id: "q-lysis",
      phase: "After ROSC",
      prompt: "She has ROSC but is in obstructive shock from massive PE. She has an open hysterotomy. Will you give thrombolysis?",
      seconds: 90,
      modelAnswer: [
        "Massive PE causing arrest is immediately life threatening. The benefit of thrombolysis outweighs bleeding risk.",
        "Discuss quickly with obstetrics and anesthesia, who will control the uterus and prepare for bleeding.",
        "Alteplase 100 mg IV over 2 hours. If she is peri arrest, an accelerated 0.6 mg/kg over 15 minutes is an option. For 96 kg that is capped at 50 mg.",
        "If she arrests again, give alteplase 50 mg IV as a bolus and continue CPR for at least 60 to 90 minutes.",
        "Activate the massive hemorrhage protocol in advance. Uterotonics for tone.",
        "Catheter directed therapy, surgical embolectomy and ECMO are not available here. Call CritiCall in parallel.",
        "Uses the bleeding history already gathered: no anticoagulants, an uncomplicated first pregnancy and no allergies.",
      ],
      rubric: ["mca-h3", "mca-a2", "mca-m2", "mca-c1"],
      choices: [
        {
          id: "c-lyse",
          label: "After a brief discussion with obstetrics and anesthesia I gave alteplase, activated the massive hemorrhage protocol in advance and called CritiCall.",
          next: "s-escalate",
          quality: "strong",
          feedback:
            "Good. Recent surgery is a relative contraindication, but she will die of the PE without reperfusion. " +
            "Preparing blood and surgical control ahead of time is the key safety step. Parallel calls for advanced options are appropriate.",
        },
        {
          id: "c-heparin",
          label: "I gave heparin only and planned a CT pulmonary angiogram once she was more stable.",
          next: "s-heparin",
          quality: "partial",
          feedback:
            "Heparin prevents clot growth but does not dissolve the clot that is obstructing her right ventricle. " +
            "She is too unstable for CT. The examiner wanted reperfusion now with a bleeding plan.",
        },
        {
          id: "c-fluid",
          label: "I gave 3 L of saline to support the right ventricle.",
          next: "s-fluid",
          quality: "unsafe",
          feedback:
            "A failing, dilated right ventricle does not respond to large fluid boluses. It dilates further and compresses the left ventricle. " +
            "Use a vasopressor such as norepinephrine and treat the clot.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-heparin",
      phase: "Ten minutes later",
      text: "She loses her pulse again. After 2 minutes of CPR you give alteplase 50 mg IV. She regains a pulse 8 minutes later.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-fluid",
      phase: "Ten minutes later",
      text: "Her pressure falls to 60/30. The right ventricle is larger on echo. You start norepinephrine and give alteplase after a quick discussion with the obstetrician.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "Thirty minutes after ROSC",
      text:
        "Her pressure is now 104/66 on norepinephrine 0.1 mcg/kg/min. The right ventricle looks smaller. " +
        "Blood is soaking through the abdominal packing. Hemoglobin is 84 g/L and fibrinogen is 1.5 g/L.",
      next: "q-post-rosc",
    },
    {
      kind: "question",
      id: "q-post-rosc",
      phase: "Post ROSC care",
      prompt: "What are your priorities now?",
      seconds: 90,
      modelAnswer: [
        "Surgical control. Obstetrics takes her to the OR to close the uterus and control bleeding.",
        "Massive hemorrhage protocol. Fibrinogen to above 2 g/L. Calcium.",
        "Oxytocin infusion for uterine tone.",
        "Stop the alteplase infusion if still running. Hold heparin until bleeding is controlled.",
        "Ventilation: SpO2 92 to 98 percent, normal PaCO2. Avoid high pressures that strain the right ventricle.",
        "MAP at least 65 with norepinephrine. Avoid fever. Temperature control.",
      ],
      rubric: ["mca-m3", "mca-r4"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family",
      prompt: "Her husband arrives with their 4 year old daughter. What do you do and say?",
      seconds: 75,
      modelAnswer: [
        "Arrange for a nurse or social worker to look after the child in a safe space.",
        "Meet him in a private room with a nurse. Sit down.",
        "Warning shot, then clear facts. Her heart stopped because of a large blood clot in the lungs.",
        "Their baby was delivered by emergency surgery and is with the neonatal team.",
        "She is alive but critically ill. The next hours are uncertain.",
        "Offer to take him to see the baby and to see her when possible. Offer spiritual care.",
      ],
      rubric: ["mca-c2", "mca-p1"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "She is in the OR. Where should she go after, and what if she deteriorates again?",
      seconds: 60,
      modelAnswer: [
        "ICU after the OR, with obstetrics and ICU sharing care.",
        "Discuss with a tertiary centre through CritiCall about ECMO, catheter directed therapy or surgical embolectomy if she worsens.",
        "Do not transfer while she is bleeding and unstable.",
        "Restart anticoagulation once bleeding is controlled, in discussion with obstetrics.",
        "The baby goes to the nursery or is transferred to a level 3 NICU if needed.",
      ],
      rubric: ["mca-d1"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "After the case",
      prompt: "How do you lead the team after this event?",
      seconds: 60,
      modelAnswer: [
        "Hot debrief with ED, obstetrics, anesthesia and the neonatal team.",
        "Review times: arrest, hysterotomy start, delivery and ROSC.",
        "Acknowledge the emotional toll. Offer peer support resources.",
        "Complete documentation, including the hysterotomy decision and thrombolysis discussion.",
        "File a safety report and plan maternal arrest simulation with a ready hysterotomy kit.",
      ],
      rubric: ["mca-l2", "mca-c3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She leaves the OR after a hysterectomy for bleeding and goes to the ICU on low dose norepinephrine. Her son is stabilized in the nursery while the neonatal transport team comes to move him to a level 3 NICU. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "mca-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the onset and course: 3 days of shortness of breath, right calf pain after a 14 hour car trip, and the faint at triage.",
      points: 2,
      teaching: "Syncope with dyspnea and a painful swollen leg after prolonged travel is massive PE until proven otherwise. Pregnancy raises the risk further.",
      source: "esc-pe",
    },
    {
      id: "mca-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about previous VTE and family history of clots. Her mother had a PE after a hip replacement.",
      points: 2,
      teaching: "A family history of VTE raises the pretest probability and may point to an inherited thrombophilia.",
      source: "esc-pe",
    },
    {
      id: "mca-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about anticoagulant use, bleeding risks, the course of this and her last pregnancy, and allergies before heparin and thrombolysis.",
      points: 2,
      teaching: "A short targeted history of bleeding risk before an arrest makes the later thrombolysis decision faster and safer.",
      source: "esc-pe",
    },
    {
      id: "mca-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies massive PE from the history, calf swelling, ECG and right ventricular strain on bedside echo.",
      points: 2,
      teaching: "Pregnancy increases VTE risk several fold. Bedside echo showing RV dilation in a hypotensive patient supports treating as massive PE.",
      source: "esc-pe",
    },
    {
      id: "mca-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes the post ROSC echo findings of RV failure and clot in transit as an indication for reperfusion.",
      points: 1,
      teaching: "A clot in the right heart with shock carries very high mortality. Reperfusion should not wait for CT.",
      source: "esc-pe",
    },
    {
      id: "mca-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Uses left uterine displacement and places IV access above the diaphragm.",
      points: 2,
      teaching: "Aortocaval compression can reduce cardiac output sharply after 20 weeks. Drugs given below the diaphragm may not reach the heart.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Performs standard ACLS with unchanged drug doses and continuous manual left uterine displacement.",
      points: 2,
      teaching: "Epinephrine 1 mg every 3 to 5 minutes and standard defibrillation energies apply in pregnancy. Manual displacement beats a tilt.",
      source: "aha-2025",
    },
    {
      id: "mca-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Assigns the airway to the most experienced operator and anticipates a difficult airway.",
      points: 1,
      teaching: "Pregnancy causes airway edema, faster desaturation and aspiration risk. Use a smaller tube and have a supraglottic backup.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-r4",
      competency: "resuscitation",
      criterion: "management",
      text: "Sets post ROSC targets for oxygenation, ventilation and blood pressure, and avoids fever.",
      points: 1,
      teaching: "Target SpO2 92 to 98 percent, normal PaCO2 and MAP at least 65. Avoid hyperthermia after arrest.",
      source: "aha-2025",
    },
    {
      id: "mca-m1",
      competency: "management",
      criterion: "management",
      text: "Performs resuscitative hysterotomy at the arrest site when there is no ROSC by 4 minutes, aiming for delivery by 5 minutes.",
      points: 3,
      critical: true,
      teaching: "Hysterotomy is done for the mother. Do it where she lies without waiting for fetal assessment or the OR.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-m2",
      competency: "management",
      criterion: "management",
      text: "Gives systemic thrombolysis for massive PE with arrest despite recent hysterotomy, with a bleeding plan in place.",
      points: 3,
      critical: true,
      teaching: "In PE with arrest or shock, the mortality benefit of thrombolysis outweighs the bleeding risk from recent surgery. Prepare blood and surgical control first.",
      source: "esc-pe",
    },
    {
      id: "mca-m3",
      competency: "management",
      criterion: "management",
      text: "Manages post lysis bleeding with surgical control, massive hemorrhage protocol, fibrinogen replacement and uterotonics.",
      points: 2,
      teaching: "Fibrinogen falls after alteplase. Replace to above 2 g/L and let obstetrics control the uterus.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-c1",
      competency: "communication",
      criterion: "process",
      text: "Makes a rapid shared decision with obstetrics and anesthesia about thrombolysis.",
      points: 1,
      teaching: "A 60 second huddle aligns the team on risk and prepares everyone for bleeding.",
      source: "esc-pe",
    },
    {
      id: "mca-c2",
      competency: "communication",
      criterion: "process",
      text: "Informs the husband compassionately and clearly, and arranges care for the child.",
      points: 2,
      teaching: "Use a private room, a warning shot and plain facts. Make sure a child is not left alone or in the resuscitation room.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-c3",
      competency: "communication",
      criterion: "process",
      text: "Documents key times and the reasoning for hysterotomy and thrombolysis.",
      points: 1,
      teaching: "Accurate times support the care team and quality review. Record who was present and the decisions made.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Keeps the family updated about both mother and newborn and offers spiritual and social support.",
      points: 1,
      teaching: "The family now has two critically ill patients to worry about. Coordinate updates from both teams.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-l1",
      competency: "leadership",
      criterion: "process",
      text: "Activates the obstetric, anesthesia and neonatal teams before the arrest and prepares the hysterotomy kit.",
      points: 3,
      critical: true,
      teaching: "A maternal arrest response needs four teams. Calling them early makes a 5 minute delivery possible.",
      source: "aha-pregnancy",
    },
    {
      id: "mca-l2",
      competency: "leadership",
      criterion: "process",
      text: "Leads a team debrief, supports staff and plans simulation.",
      points: 1,
      teaching: "Maternal arrest is rare and stressful. Debriefs and simulation improve readiness and team wellbeing.",
      source: "aha-2025",
    },
    {
      id: "mca-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges ICU care and early discussion with a tertiary centre about ECMO or embolectomy, without transferring an unstable bleeding patient.",
      points: 2,
      teaching: "Advanced PE therapies are regional resources. Call early, but stabilize bleeding before transport.",
      source: "esc-pe",
    },
  ],
  sources: [
    {
      id: "aha-pregnancy",
      citation: "Jeejeebhoy FM, et al. Cardiac Arrest in Pregnancy: A Scientific Statement From the American Heart Association. Circulation. 2015.",
      url: "https://doi.org/10.1161/CIR.0000000000000300",
    },
    {
      id: "aha-2025",
      citation:
        "American Heart Association. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Part 9: Adult Advanced Life Support and Part 10: Adult and Pediatric Special Circumstances of Resuscitation. Circulation. 2025.",
      url: "https://doi.org/10.1161/CIR.0000000000001380",
    },
    {
      id: "esc-pe",
      citation: "Konstantinides SV, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society. European Heart Journal. 2020.",
      url: "https://doi.org/10.1093/eurheartj/ehz405",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
