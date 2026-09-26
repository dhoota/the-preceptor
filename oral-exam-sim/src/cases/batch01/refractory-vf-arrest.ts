// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const refractoryVfArrest: OralCase = {
  id: "refractory-vf-arrest",
  title: "Collapse in the ambulance bay",
  blueprint: "resus",
  alsoCovers: ["cardio"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 4 },
    { topic: "arrhythmia", n: 5 },
    { topic: "ischemic-heart-disease", n: 6 },
    { topic: "shock", n: 7 },
  ],
  summary: "A 51 year old man collapses outside the emergency department and arrives in resus with CPR in progress.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre when the following patient arrives. " +
    "A 51 year old man collapsed in your ambulance bay and reaches resus with CPR in progress after two AED shocks. " +
    "Your centre has a 24 hour cath lab and cardiac surgery but no ECPR program.",
  card: {
    vitals: {
      temperature: "Not yet measured",
      pulse: "No pulse. Monitor shows ventricular fibrillation",
      resp: "Apneic. Bag valve mask ventilation",
      bp: "Not obtainable. CPR in progress",
      o2sat: "No reliable reading during CPR",
      weight: "About 90 kg (198 lb)",
    },
    medications: "Blood pressure and cholesterol pills, stopped last year",
    allergies: "Unknown",
  },
  findings: [
    {
      id: "prehospital",
      label: "Collapse and care before resus",
      result:
        "He collapsed at 14:05 in the ambulance bay after driving his father to the department. The collapse was witnessed. " +
        "A security guard started CPR within a minute. The triage nurse applied an AED, which delivered two shocks. " +
        "He reached resus at 14:09 with compressions ongoing and no pulse. The charge nurse says the pads are on from the AED, and respiratory therapy and pharmacy are on the way.",
    },
    {
      id: "rhythm",
      label: "Monitor rhythm",
      result: "Coarse ventricular fibrillation. No organized complexes. Amplitude about 4 mm.",
    },
    {
      id: "pads",
      label: "Pad position and defibrillator",
      result:
        "AED pads in the anterolateral position. The apical pad sits high over the left pectoral muscle, not in the mid axillary line. " +
        "Your defibrillator is a biphasic unit with a maximum of 200 J. A second defibrillator is available from the adjacent bay.",
    },
    {
      id: "etco2",
      label: "End tidal CO2",
      result: "Waveform capnography on the bag valve mask reads 22 to 26 mmHg during compressions.",
    },
    {
      id: "cpr-quality",
      label: "CPR quality",
      result: "Feedback device shows rate 108 per minute and depth 5 to 6 cm. Full recoil. Compressors are rotating every 2 minutes.",
    },
    {
      id: "airway",
      label: "Airway and access",
      result:
        "Oropharyngeal airway with two person bag valve mask. Good chest rise at 10 breaths per minute. " +
        "A proximal humeral IO is in place. An 18 gauge IV is placed in the left antecubital fossa.",
    },
    {
      id: "vbg",
      label: "Venous blood gas during CPR",
      result:
        "pH 7.11, pCO2 58 mmHg, bicarbonate 17 mmol/L, lactate 7.9 mmol/L. " +
        "Potassium 4.1 mmol/L. Ionized calcium 1.16 mmol/L. Glucose 11.4 mmol/L. Hemoglobin 146 g/L.",
    },
    {
      id: "pocus",
      label: "Bedside echo during a pulse check",
      result:
        "Subxiphoid view in under 10 seconds. Fibrillating ventricle. No pericardial effusion. Right ventricle not dilated.",
    },
    {
      id: "father",
      label: "Collateral from his father",
      result:
        "He had chest heaviness walking up stairs for two days and said it was indigestion. He smokes a pack a day. " +
        "He has high blood pressure and high cholesterol but stopped his pills last year. No known heart disease. No drugs or alcohol today. No family history of sudden death.",
    },
    {
      id: "post-rosc-ecg",
      label: "12 lead ECG after ROSC",
      result:
        "Sinus tachycardia at 118. ST elevation of 3 to 4 mm in V1 to V5, I and aVL. Reciprocal ST depression in III and aVF. QRS 104 ms.",
    },
    {
      id: "post-rosc-vitals",
      label: "Vitals after ROSC",
      result: "Heart rate 118, blood pressure 84/52, SpO2 93 percent on FiO2 1.0 by bag, end tidal CO2 38 mmHg. GCS 3. Pupils 4 mm and reactive.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "The security guard is still doing compressions. The monitor shows coarse VF. Four nurses, a respiratory therapist and a junior resident are in the room waiting for direction.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First two minutes",
      prompt: "Walk me through what you do in the first two minutes.",
      seconds: 90,
      modelAnswer: [
        "State that you are leading. Assign compressors, airway, defibrillator, drugs and a recorder.",
        "Swap in a fresh compressor with a feedback device. Pauses under 10 seconds.",
        "Charge during compressions and shock immediately at 200 J or the device maximum.",
        "Resume compressions right after the shock without a pulse check.",
        "Bag valve mask with an airway adjunct at 10 breaths per minute. Do not stop CPR to intubate.",
        "Waveform capnography to track CPR quality.",
        "Ask the triage nurse for the collapse time, bystander CPR and the AED shocks so far.",
      ],
      rubric: ["vf-l1", "vf-r1", "vf-r2", "vf-r3", "vf-a3", "vf-h1"],
      choices: [
        {
          id: "c-lead",
          label: "I named myself team leader, assigned roles, swapped compressors, charged during compressions and shocked at 200 J straight away.",
          next: "q-drugs",
          quality: "strong",
          feedback:
            "Good. Early defibrillation is the single intervention that matters most in VF. Charging during compressions keeps the pre shock pause under 10 seconds. Clear role allocation lets you stay hands off and think.",
        },
        {
          id: "c-intubate",
          label: "I paused compressions so the resident could intubate before the next shock.",
          next: "s-intubate-pause",
          quality: "partial",
          feedback:
            "Intubation is not a priority in VF when bag mask ventilation works. Every pause in compressions lowers coronary perfusion pressure and the chance of a successful shock. The examiner wanted a shock first and an advanced airway placed without stopping CPR, or deferred.",
        },
        {
          id: "c-delay",
          label: "I held the shock until IV access was confirmed and the first epinephrine was in.",
          next: "s-delay",
          quality: "unsafe",
          feedback:
            "Defibrillation must never wait for drugs or access in VF. Each minute without a shock lowers survival. The shock comes first. Epinephrine is given after the second shock.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-intubate-pause",
      phase: "Forty seconds later",
      text:
        "The resident has a grade 3 view and needs a second attempt. Compressions have been off for 40 seconds. End tidal CO2 drops to 12 mmHg. The nurse at the defibrillator asks if she can shock now. You tell her yes and restart CPR.",
      next: "q-drugs",
    },
    {
      kind: "say",
      id: "s-delay",
      phase: "Ninety seconds later",
      text:
        "The IO flush was slow. The first shock is delivered at 14:11 instead of 14:09. The VF looks finer on the monitor. The respiratory therapist quietly asks whether you want to shock with every cycle from now on.",
      next: "q-drugs",
    },
    {
      kind: "question",
      id: "q-drugs",
      phase: "Medications",
      prompt: "He has now had five shocks in total, two from the AED and three from you. He remains in VF. Which drugs have you given, at what doses and when?",
      seconds: 75,
      modelAnswer: [
        "Epinephrine 1 mg IV or IO after the second shock, then every 3 to 5 minutes.",
        "Amiodarone 300 mg IV or IO after the third shock.",
        "Second dose of amiodarone 150 mg if VF persists.",
        "Lidocaine 1 to 1.5 mg/kg, about 100 mg, is an acceptable alternative.",
        "Flush each drug and raise the limb. Continue CPR throughout.",
      ],
      rubric: ["vf-m1", "vf-m2"],
      choices: [
        {
          id: "c-std",
          label: "I gave epinephrine 1 mg every 3 to 5 minutes and amiodarone 300 mg IO after the third shock, with 150 mg drawn up.",
          next: "s-refractory",
          quality: "strong",
          feedback:
            "Correct doses and timing. Amiodarone 300 mg then 150 mg, or lidocaine 1 to 1.5 mg/kg, improves survival to admission in shock refractory VF. Neither has clearly improved neurologic survival, so they should not distract from shocks and compressions.",
        },
        {
          id: "c-epi-stack",
          label: "I gave epinephrine 1 mg every 2 minutes at each rhythm check to get him back faster.",
          next: "s-epi-stack",
          quality: "partial",
          feedback:
            "The interval is 3 to 5 minutes. Stacked epinephrine raises myocardial oxygen demand and may make VF harder to terminate. It has not been shown to improve outcomes. The examiner wanted a disciplined dosing schedule and an antiarrhythmic after the third shock.",
        },
        {
          id: "c-amio-slow",
          label: "I ran amiodarone 150 mg over 10 minutes as I would for stable VT.",
          next: "s-amio-slow",
          quality: "partial",
          feedback:
            "That is the dose for a perfusing tachycardia. In pulseless VF the dose is 300 mg as a rapid push, then 150 mg. A slow infusion delivers too little drug during the arrest.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-epi-stack",
      phase: "Next cycle",
      text:
        "He has had four doses of epinephrine in eight minutes. The VF is coarse and fast. The pharmacist asks if you want amiodarone now and points out the timing of the epinephrine. You give amiodarone 300 mg and space the epinephrine to every 4 minutes.",
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-amio-slow",
      phase: "Next cycle",
      text:
        "The pharmacist checks the order and asks whether you meant the arrest dose. You change it to 300 mg IO push. Two minutes have passed with little drug delivered.",
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-refractory",
      phase: "Fourteen minutes into the arrest",
      text:
        "It is 14:19. He has had five shocks, two doses of epinephrine and amiodarone 300 mg. End tidal CO2 is 24 mmHg. He remains in coarse VF. You notice the apical pad sits high on the chest.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Refractory VF",
      prompt: "He is still in VF after five shocks. What do you change?",
      seconds: 90,
      modelAnswer: [
        "Call this refractory VF.",
        "Check pad contact and position. Replace pads if needed.",
        "Change vector to anterior posterior pads.",
        "If VF persists, double sequential external defibrillation with a second defibrillator.",
        "One operator fires both units in rapid sequence.",
        "Keep CPR quality high and continue to look for reversible causes.",
      ],
      rubric: ["vf-r4", "vf-a1", "vf-p1"],
      choices: [
        {
          id: "c-vector",
          label: "I moved to new anterior posterior pads for a vector change, and set up a second defibrillator for double sequential shocks if VF persisted.",
          next: "q-causes",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. In the Canadian DOSE VF trial both vector change and double sequential defibrillation improved survival to discharge over standard shocks after three failed attempts. ILCOR 2023 and AHA 2025 say either may be considered after three failed shocks. It is a weak recommendation, but the pads need fixing now anyway.",
        },
        {
          id: "c-same",
          label: "I kept shocking through the same pads at maximum energy.",
          next: "s-same-pads",
          quality: "partial",
          feedback:
            "Repeating the same vector through poorly placed pads is unlikely to work. Refractory VF after three shocks should trigger a change in strategy. Fix the pads first. Vector change or double sequential defibrillation may then be considered, based on DOSE VF.",
        },
        {
          id: "c-stop",
          label: "I called the arrest after five shocks because the chance of survival is now very low.",
          next: "s-early-stop",
          quality: "unsafe",
          feedback:
            "This is premature. He had a witnessed arrest, immediate bystander CPR, a shockable rhythm and an end tidal CO2 above 20 mmHg. These are strong reasons to continue. Refractory VF alone is not a reason to stop.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-same-pads",
      phase: "Four minutes later",
      text:
        "Two more shocks through the same pads fail. The respiratory therapist mentions the high apical pad and asks if you want new pads in the anterior posterior position. You agree.",
      next: "q-causes",
    },
    {
      kind: "say",
      id: "s-early-stop",
      phase: "In the room",
      text:
        "The charge nurse says: 'He is 51, witnessed, and his end tidal is 24. Can we try new pads first?' The team keeps compressing. You agree to continue and ask for a vector change.",
      next: "q-causes",
    },
    {
      kind: "question",
      id: "q-causes",
      phase: "Thinking about the cause",
      prompt: "While the team changes pads, tell me what is likely driving this arrest and what else you would consider.",
      seconds: 75,
      modelAnswer: [
        "Two days of exertional chest heaviness makes acute coronary occlusion the leading cause.",
        "Screen the Hs and Ts. The gas shows normal potassium and no severe hypoxia.",
        "Use POCUS only within a 10 second pulse check.",
        "Beta blockers such as esmolol are of uncertain benefit in refractory VF. They must never delay shocks.",
        "Magnesium 2 g IV only for torsades or known low magnesium.",
        "ECPR to the cath lab if a program exists. It does not exist here.",
        "Ask his father about chest pain before the collapse, risk factors, medications, drug use and family history.",
      ],
      rubric: ["vf-a2", "vf-a4", "vf-m3", "vf-d2", "vf-h2", "vf-h3", "vf-h4"],
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-rosc",
      phase: "14:27",
      text:
        "After the first anterior posterior shock he converts to a narrow complex rhythm. There is a carotid pulse. End tidal CO2 jumps from 24 to 41 mmHg. " +
        "Heart rate 118, blood pressure 84/52, SpO2 93 percent on FiO2 1.0. The ECG shows 3 to 4 mm ST elevation from V1 to V5, I and aVL.",
      next: "q-postrosc",
    },
    {
      kind: "question",
      id: "q-postrosc",
      phase: "After ROSC",
      prompt: "He has a pulse. What are your priorities in the next ten minutes?",
      seconds: 90,
      modelAnswer: [
        "Secure the airway with a reduced dose induction agent and a vasopressor ready.",
        "Titrate oxygen to SpO2 94 to 98 percent. Avoid hyperoxia.",
        "Ventilate to normocapnia, PaCO2 35 to 45 mmHg.",
        "Norepinephrine to a MAP of at least 65 mmHg.",
        "Activate the cath lab now for anterior STEMI.",
        "Keep pads on and an antiarrhythmic ready.",
      ],
      rubric: ["vf-r5", "vf-r6", "vf-d1"],
      choices: [
        {
          id: "c-bundle",
          label: "I activated the cath lab, started norepinephrine for a MAP over 65, targeted SpO2 94 to 98 and normocapnia, and intubated with reduced dose ketamine.",
          next: "s-rearrest",
          quality: "strong",
          feedback:
            "Strong answer. Anterior STEMI after ROSC needs emergent reperfusion. Hypotension, hypoxia and hyperoxia all worsen brain injury after arrest. A reduced dose induction agent with pressor ready avoids a peri intubation arrest.",
        },
        {
          id: "c-hypervent",
          label: "I kept him on FiO2 1.0 and bagged him fast to blow off CO2 and fix the acidosis before calling cardiology.",
          next: "s-hypervent",
          quality: "partial",
          feedback:
            "Hyperventilation lowers cerebral blood flow and raises intrathoracic pressure, which drops venous return. Sustained hyperoxia may also harm the brain. Aim for normocapnia and SpO2 94 to 98 percent. Call the cath lab from the ECG, not after the gas corrects.",
        },
        {
          id: "c-epi-push",
          label: "I gave epinephrine 1 mg IV push for the pressure of 84/52.",
          next: "s-epi-push",
          quality: "unsafe",
          feedback:
            "The arrest dose of epinephrine in a patient with a pulse causes severe hypertension, tachycardia and recurrent VF. Use a norepinephrine infusion, or push dose epinephrine of 10 to 20 mcg if you need a bridge.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-hypervent",
      phase: "Five minutes later",
      text:
        "End tidal CO2 falls to 24 mmHg. His pressure drops to 76/44. The respiratory therapist asks to slow the rate and wean the oxygen. The resident asks if she should call the cath lab now. You say yes.",
      next: "s-rearrest",
    },
    {
      kind: "say",
      id: "s-epi-push",
      phase: "One minute later",
      text:
        "His pressure rises to 212/120 and his heart rate to 160. Then the monitor shows polymorphic VT. The team restarts compressions and shocks once. He regains a pulse with a pressure of 90/56. You start norepinephrine and ask the clerk to activate the cath lab.",
      next: "s-rearrest",
    },
    {
      kind: "say",
      id: "s-rearrest",
      phase: "14:40, waiting for the cath lab team",
      text:
        "The monitor shows VF again. There is no pulse. The cath lab team will be ready in 15 minutes.",
      next: "q-rearrest",
    },
    {
      kind: "question",
      id: "q-rearrest",
      phase: "Recurrent VF",
      prompt: "He re arrests in VF. What do you do now, and does this change your plan for the cath lab?",
      seconds: 60,
      modelAnswer: [
        "Shock immediately through the anterior posterior pads. Resume CPR.",
        "If VF recurs, give amiodarone 150 mg or add lidocaine 1 to 1.5 mg/kg, about 100 mg.",
        "Correct potassium and magnesium to high normal.",
        "Recurrent VF from an occluded artery is a reason to reperfuse faster, not to stop.",
        "Keep the cath lab activated.",
      ],
      rubric: ["vf-m4", "vf-d1"],
      next: "q-cardio",
    },
    {
      kind: "question",
      id: "q-cardio",
      phase: "Consultant discussion",
      prompt:
        "He regains a pulse after one shock. The interventional cardiologist calls and says: 'He has had over twenty minutes of CPR and arrested twice. I am not sure the lab is the right place for him.' What do you say?",
      seconds: 75,
      modelAnswer: [
        "Present the favourable features: witnessed, bystander CPR within a minute, shockable rhythm, end tidal CO2 above 20 mmHg, reactive pupils.",
        "Anterior STEMI is the likely cause of the arrests.",
        "Neurologic outcome cannot be predicted in the emergency department.",
        "Ask directly for emergent angiography and agree on who escorts him.",
        "Stay respectful. Share the data and the shared goal.",
      ],
      rubric: ["vf-c1", "vf-p1"],
      choices: [
        {
          id: "c-advocate",
          label: "I laid out the witnessed arrest, early CPR, shockable rhythm, good end tidal CO2 and reactive pupils, and asked him to take the patient now.",
          next: "q-family",
          quality: "strong",
          feedback:
            "Well done. These are the features that predict a good outcome. It is too early to prognosticate in the department. The examiner wanted a clear, respectful request backed by data.",
        },
        {
          id: "c-defer",
          label: "I accepted his view and planned to admit to the ICU and reassess in the morning.",
          next: "s-defer",
          quality: "unsafe",
          feedback:
            "Delaying reperfusion in an anterior STEMI with recurrent VF risks further arrest and a larger infarct. The favourable arrest features make him a good candidate. You should advocate for your patient.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-defer",
      phase: "Ten minutes later",
      text:
        "He has a run of VT that needs another shock. The ICU fellow reviews the ECG and calls the cardiologist back with you on speaker. After hearing the arrest details he agrees to take him to the lab.",
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family and team",
      prompt: "His wife arrives as he leaves for the cath lab. What do you tell her? What do you do with your team afterwards?",
      seconds: 75,
      modelAnswer: [
        "Find a quiet room. Sit down. Introduce yourself.",
        "Tell her plainly that his heart stopped, he was revived and he is having a heart attack.",
        "Explain that he is going for an urgent procedure to open the artery.",
        "Say honestly that it is too early to know about brain recovery.",
        "Arrange a nurse or social worker to stay with her.",
        "Run a short hot debrief with the team and check on the security guard.",
      ],
      rubric: ["vf-c2", "vf-l2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He reaches the cath lab at 14:58. A proximal LAD occlusion is stented. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "vf-l1",
      competency: "leadership",
      criterion: "process",
      text: "Takes the leader role, assigns compressors, airway, defibrillator, drugs and a recorder, and uses closed loop communication.",
      points: 2,
      teaching: "A hands off leader keeps track of shocks, drug timing and causes. Named roles prevent gaps and duplicated tasks.",
      source: "aha-2025",
    },
    {
      id: "vf-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Defibrillates immediately at 200 J or the device maximum without waiting for access, drugs or an airway.",
      points: 3,
      critical: true,
      teaching: "Time to shock is the main driver of survival in VF. Drugs and airways come after the shock.",
      source: "aha-2025",
    },
    {
      id: "vf-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Maintains high quality CPR at 100 to 120 per minute and 5 to 6 cm depth, charges during compressions and keeps pauses under 10 seconds.",
      points: 2,
      teaching: "Coronary perfusion falls within seconds of stopping compressions. Short pre shock pauses raise the chance of a successful shock.",
      source: "aha-2025",
    },
    {
      id: "vf-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Uses bag valve mask or supraglottic ventilation at 10 breaths per minute and does not interrupt CPR to intubate.",
      points: 1,
      teaching: "An advanced airway has not been shown to improve survival in early VF. It should never cost compression time.",
      source: "aha-2025",
    },
    {
      id: "vf-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Uses waveform capnography to judge CPR quality and detect ROSC.",
      points: 1,
      teaching: "An end tidal CO2 below 10 mmHg suggests poor CPR. A sudden rise, often above 35 to 40 mmHg, suggests ROSC.",
      source: "aha-2025",
    },
    {
      id: "vf-m1",
      competency: "management",
      criterion: "management",
      text: "Gives epinephrine 1 mg IV or IO after the second shock and then every 3 to 5 minutes.",
      points: 2,
      teaching: "Epinephrine improves ROSC in shockable arrest. More frequent dosing adds myocardial oxygen demand without proven benefit.",
      source: "aha-2025",
    },
    {
      id: "vf-m2",
      competency: "management",
      criterion: "management",
      text: "Gives amiodarone 300 mg IV or IO after the third shock then 150 mg, or lidocaine 1 to 1.5 mg/kg then 0.5 to 0.75 mg/kg.",
      points: 2,
      teaching: "In the ALPS trial both drugs improved survival to admission in shock refractory VF. Neither clearly improved neurologic survival.",
      source: "alps",
    },
    {
      id: "vf-r4",
      competency: "resuscitation",
      criterion: "management",
      text: "Changes defibrillation strategy after three failed shocks with a vector change to anterior posterior pads, then double sequential defibrillation.",
      points: 3,
      critical: true,
      teaching: "DOSE VF showed higher survival to discharge with vector change and with double sequential defibrillation than with standard shocks. ILCOR and AHA give a weak recommendation to consider either after three failed shocks.",
      source: "ilcor-2023",
    },
    {
      id: "vf-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Checks pad position, skin contact and defibrillator function when shocks fail.",
      points: 1,
      teaching: "A high apical pad sends current away from the ventricle. Correct placement is a cheap fix before any drug.",
      source: "dose-vf",
    },
    {
      id: "vf-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies acute coronary occlusion as the likely cause and screens the Hs and Ts with the gas and history.",
      points: 2,
      teaching: "Coronary disease is found in most adults with refractory VF, and many have an acute occlusion. Reversible metabolic causes are ruled out quickly with a blood gas.",
      source: "aha-2025",
    },
    {
      id: "vf-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Limits POCUS to the 10 second pulse check window.",
      points: 1,
      teaching: "Ultrasound during arrest often lengthens pauses. Record a clip and review it while compressions continue.",
      source: "aha-2025",
    },
    {
      id: "vf-m3",
      competency: "management",
      criterion: "management",
      text: "Knows that beta blockers such as esmolol are of uncertain benefit in refractory VF, that magnesium is only for torsades or low magnesium, and does not let either delay shocks.",
      points: 1,
      teaching: "AHA 2025 calls beta blockers of uncertain benefit in refractory VF. The data are small observational studies. Magnesium helps only in torsades or low magnesium.",
      source: "aha-2025",
    },
    {
      id: "vf-d2",
      competency: "disposition",
      criterion: "process",
      text: "Considers ECPR candidacy and knows it needs an established program with early activation.",
      points: 1,
      teaching: "ECPR for refractory VF improved survival in the ARREST trial. It only works when the team is activated early, often by 10 to 20 minutes of arrest.",
      source: "arrest",
    },
    {
      id: "vf-r5",
      competency: "resuscitation",
      criterion: "management",
      text: "After ROSC titrates oxygen to SpO2 of about 94 to 98 percent and ventilates to PaCO2 35 to 45 mmHg.",
      points: 2,
      teaching: "Hypoxia, hyperoxia and hypocapnia can all worsen brain injury after arrest. AHA 2025 accepts SpO2 90 to 98 percent and ERC uses 94 to 98 percent. Titrate down from FiO2 1.0 once saturation is reliable.",
      source: "aha-2025",
    },
    {
      id: "vf-r6",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats post ROSC hypotension with norepinephrine to a MAP of at least 65 mmHg and avoids 1 mg epinephrine boluses.",
      points: 2,
      teaching: "The arrest dose of epinephrine in a patient with a pulse can trigger VF. Use an infusion, or push dose epinephrine of 10 to 20 mcg as a bridge.",
      source: "aha-2025",
    },
    {
      id: "vf-d1",
      competency: "disposition",
      criterion: "process",
      text: "Activates the cath lab emergently for STEMI after ROSC and keeps the plan despite recurrent VF.",
      points: 3,
      critical: true,
      teaching: "ST elevation after ROSC needs emergent angiography. Recurrent VF from ongoing ischemia is a reason to reperfuse faster.",
      source: "aha-2025",
    },
    {
      id: "vf-m4",
      competency: "management",
      criterion: "management",
      text: "Shocks recurrent VF immediately and adds a further antiarrhythmic dose, such as amiodarone 150 mg or lidocaine about 100 mg.",
      points: 1,
      teaching: "Recurrent VF after ROSC is common in ischemia. Keep pads on and drugs drawn up for transport.",
      source: "alps",
    },
    {
      id: "vf-c1",
      competency: "communication",
      criterion: "process",
      text: "Advocates for emergent angiography using favourable arrest features and stays respectful with the consultant.",
      points: 2,
      teaching: "Witnessed arrest, early CPR, a shockable rhythm and good end tidal CO2 predict a good outcome. Disagree with data, not with the person.",
      source: "aha-2025",
    },
    {
      id: "vf-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Does not stop resuscitation or withhold treatment on the basis of shock count or early prognostic guesses.",
      points: 2,
      critical: true,
      teaching: "Neurologic prognosis cannot be judged in the emergency department. Termination decisions should rest on validated features, not on duration alone in refractory VF.",
      source: "aha-2025",
    },
    {
      id: "vf-c2",
      competency: "communication",
      criterion: "process",
      text: "Speaks with his wife in a private space in plain words and is honest about uncertain brain recovery.",
      points: 1,
      teaching: "Say the words heart stopped and heart attack. Avoid false hope and avoid early bad news that is not yet known.",
      source: "aha-2025",
    },
    {
      id: "vf-l2",
      competency: "leadership",
      criterion: "process",
      text: "Runs a short team debrief and checks on the bystander and staff.",
      points: 1,
      teaching: "A brief hot debrief captures lessons and supports the team. Bystanders who did CPR may need follow up too.",
      source: "aha-2025",
    },
    {
      id: "vf-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the triage nurse or security guard for the collapse time, whether it was witnessed, when bystander CPR started and how many AED shocks were given.",
      points: 2,
      teaching: "A witnessed collapse, bystander CPR within a minute and an initial shockable rhythm are the strongest predictors of survival. The timeline also tells you when epinephrine and the antiarrhythmic are due.",
      source: "aha-2025",
    },
    {
      id: "vf-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks his father about symptoms before the collapse, such as exertional chest pain, and hears two days of chest heaviness on the stairs.",
      points: 2,
      teaching: "Prodromal exertional chest pain points to acute coronary occlusion as the cause of VF. It moves angiography up the list of priorities.",
      source: "aha-2025",
    },
    {
      id: "vf-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about past heart disease, risk factors, medications and adherence, allergies and family history of sudden death.",
      points: 2,
      teaching: "Untreated hypertension, high cholesterol and smoking make coronary disease likely. A family history of sudden death would raise inherited arrhythmia instead.",
      source: "aha-2025",
    },
    {
      id: "vf-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about drug and alcohol use today, including stimulants.",
      points: 1,
      teaching: "Stimulants such as cocaine can cause coronary spasm and VF. A negative answer keeps the focus on atherosclerotic occlusion.",
      source: "aha-2025",
    },
  ],
  sources: [
    {
      id: "aha-2025",
      citation: "American Heart Association. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
      url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
    },
    {
      id: "ilcor-2023",
      citation: "Berg KM, Bray JE, Ng KC, et al. 2023 International Consensus on Cardiopulmonary Resuscitation and Emergency Cardiovascular Care Science With Treatment Recommendations. Circulation. 2023.",
    },
    {
      id: "dose-vf",
      citation: "Cheskes S, Verbeek PR, Drennan IR, et al. Defibrillation strategies for refractory ventricular fibrillation. N Engl J Med. 2022.",
    },
    {
      id: "alps",
      citation: "Kudenchuk PJ, Brown SP, Daya M, et al. Amiodarone, lidocaine, or placebo in out of hospital cardiac arrest. N Engl J Med. 2016.",
    },
    {
      id: "arrest",
      citation: "Yannopoulos D, Bartos J, Raveendran G, et al. Advanced reperfusion strategies for patients with out of hospital cardiac arrest and refractory ventricular fibrillation (ARREST). Lancet. 2020.",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
