// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const wideComplexTachycardia: OralCase = {
  id: "wide-complex-tachycardia",
  title: "Palpitations in a man who looks well",
  blueprint: "cardio",
  alsoCovers: ["resus"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 3 },
    { topic: "arrhythmia", n: 4 },
    { topic: "arrhythmia", n: 5 },
    { topic: "analgesia-sedation", n: 5 },
  ],
  summary: "A 66 year old man walks in with an hour of palpitations and a fast regular rhythm on the monitor.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 66 year old man presents with sudden palpitations that began an hour ago while he was shovelling his driveway. " +
    "Your hospital has a CCU and a cardiologist on call but no electrophysiology service.",
  card: {
    vitals: {
      temperature: "36.7°C",
      pulse: "178/minute, regular",
      resp: "20/minute",
      bp: "118/74 mmHg",
      o2sat: "96% on room air",
      weight: "90 kg (198 lb)",
    },
    medications: "Metoprolol 50 mg twice daily, ramipril 10 mg, atorvastatin 40 mg, ASA 81 mg, hydrochlorothiazide 25 mg",
    allergies: "None known",
  },
  findings: [
    {
      id: "triage",
      label: "Triage and nursing report",
      result:
        "CTAS 2. He is sitting up and talking. " +
        "The nurse says: 'He looks pretty good for that rate. It is wide. The resident thinks it is SVT with a bundle branch block and wants to try adenosine.'",
    },
    {
      id: "history",
      label: "History of presenting illness",
      result:
        "Sudden pounding palpitations at 09:15 while shovelling heavy snow. Mild chest pressure 3 out of 10. Mild breathlessness. No syncope. " +
        "He has never had palpitations like this before.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Anterior MI with a stent to the LAD 6 years ago. Hypertension. No allergies. Last echo 2 years ago was 'a bit weak' per his wife.",
    },
    {
      id: "meds",
      label: "Medications",
      result:
        "Metoprolol 50 mg twice daily, ramipril 10 mg, atorvastatin 40 mg, ASA 81 mg. His family doctor added hydrochlorothiazide 25 mg 3 weeks ago.",
    },
    {
      id: "social",
      label: "Social history",
      result: "He still drives a school bus part time.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Alert, mildly diaphoretic. Regular pulse at 178. Intermittent cannon a waves in the neck. Chest clear. Heart sounds with variable intensity of S1. Warm hands.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result:
        "Regular wide complex tachycardia at 178. QRS 168 ms. Extreme axis, negative in I and aVF. Concordant negative QRS complexes across V1 to V6. " +
        "Dissociated P waves visible in lead II. Two fusion beats on the rhythm strip.",
    },
    {
      id: "old-ecg",
      label: "Old ECG from the chart",
      result: "Sinus rhythm at 62. QRS 96 ms. Q waves in V1 to V4. No bundle branch block.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Potassium 3.1 mmol/L. Magnesium 0.62 mmol/L. Sodium 134 mmol/L. Creatinine 102 µmol/L. High sensitivity troponin T 28 ng/L. Hemoglobin 141 g/L. TSH normal.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result: "Moderately reduced left ventricular function with an akinetic anterior wall and apex. No pericardial effusion. IVC 1.6 cm.",
    },
    {
      id: "post-ecg",
      label: "ECG after conversion",
      result: "Sinus rhythm at 74. QRS 98 ms. Old Q waves V1 to V4. No new ST elevation. QTc 468 ms.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result: "His wife confirms he drives a school bus part time. She is worried because his father died suddenly at 60.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "He is on the monitor and chatting with the nurse. The resident thinks it is SVT with a bundle branch block and has adenosine drawn up and a stopcock on the IV. Pads are on the cart but not on the patient.",
      next: "q-ecg",
    },
    {
      kind: "question",
      id: "q-ecg",
      phase: "What is the rhythm",
      prompt: "Look at the ECG. What is your diagnosis and what features support it? What do you tell the resident?",
      seconds: 75,
      modelAnswer: [
        "Ventricular tachycardia until proven otherwise.",
        "Prior MI and reduced LV function make VT far more likely than SVT with aberrancy.",
        "AV dissociation, fusion beats, QRS over 160 ms, extreme axis and negative concordance all favour VT.",
        "Good blood pressure and a well looking patient do not rule out VT.",
        "Pads on now. Adenosine is safe only in regular monomorphic WCT and is not needed here.",
        "No calcium channel blockers.",
        "Ask about chest pain, syncope, earlier palpitations and his cardiac history.",
      ],
      rubric: ["wct-a1", "wct-a2", "wct-r1", "wct-h1", "wct-h2"],
      choices: [
        {
          id: "c-vt",
          label: "I called it VT from his prior MI, the AV dissociation, fusion beats and negative concordance. I put pads on and told the resident to hold the adenosine.",
          next: "q-plan",
          quality: "strong",
          feedback:
            "Very good. With a prior MI, over 90 percent of wide regular tachycardias are VT. Fusion beats and AV dissociation are close to diagnostic. Stability does not make it SVT.",
        },
        {
          id: "c-adenosine",
          label: "I let the resident give adenosine 6 mg to see if it was SVT, with pads on.",
          next: "s-adenosine",
          quality: "partial",
          feedback:
            "Adenosine is allowed for a regular monomorphic wide tachycardia and was done with pads on. But the ECG already tells you this is VT. The examiner wanted you to read the features and move to VT treatment.",
        },
        {
          id: "c-verapamil",
          label: "I thought it was SVT with aberrancy and gave verapamil 5 mg IV.",
          next: "s-verapamil",
          quality: "unsafe",
          feedback:
            "Calcium channel blockers given for VT cause profound hypotension and can cause arrest. Never give them for a wide complex tachycardia unless you are sure it is supraventricular. The examiner wanted VT until proven otherwise.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-adenosine",
      phase: "One minute later",
      text:
        "The adenosine causes no change in the ventricular rate. On the long rhythm strip you can see P waves marching through at their own slower rate. The resident agrees this is VT.",
      next: "q-plan",
    },
    {
      kind: "say",
      id: "s-verapamil",
      phase: "Two minutes later",
      text:
        "His pressure drops to 78/44 and he becomes grey and sweaty. The rate is unchanged at 178. You give calcium chloride 1 g IV and a 250 mL bolus. " +
        "His pressure comes back to 102/64. He is still in the same rhythm.",
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Stable VT",
      prompt: "He is perfusing. What is your plan to terminate this rhythm? Give drug and dose, or tell me your electrical plan.",
      seconds: 90,
      modelAnswer: [
        "Options are procainamide, amiodarone or elective synchronized cardioversion under sedation.",
        "Procainamide 10 mg/kg IV over 20 minutes as in PROCAMIO, or 20 to 50 mg/min to a maximum of 17 mg/kg. For 90 kg that is up to about 1500 mg.",
        "Stop procainamide for hypotension, QRS widening over 50 percent or arrhythmia termination.",
        "Procainamide terminated more tachycardias with fewer major adverse events than amiodarone in PROCAMIO, including in patients with structural heart disease. Avoid it in decompensated heart failure, severe LV dysfunction or a long QT. Watch his pressure closely given his moderate LV dysfunction.",
        "Amiodarone 150 mg IV over 10 minutes is an alternative.",
        "Replace potassium and magnesium now. Magnesium sulfate 2 g IV.",
      ],
      rubric: ["wct-m1", "wct-m2", "wct-m3"],
      choices: [
        {
          id: "c-proc",
          label: "I started procainamide 10 mg/kg, 900 mg, over 20 minutes with pressure and QRS checks and gave magnesium 2 g IV and potassium.",
          next: "s-unstable",
          quality: "strong",
          feedback:
            "Good. Procainamide is effective for stable monomorphic VT. You named stop criteria and corrected his low potassium and magnesium, which likely helped trigger this.",
        },
        {
          id: "c-dccv",
          label: "I planned elective synchronized cardioversion under procedural sedation and replaced his electrolytes.",
          next: "s-unstable",
          quality: "strong",
          feedback:
            "Good. Electricity is the most reliable way to end VT and is a first line choice even when stable. Plan hemodynamically neutral sedation.",
        },
        {
          id: "c-amio",
          label: "I gave amiodarone 150 mg IV over 10 minutes and waited.",
          next: "s-amio",
          quality: "partial",
          feedback:
            "Amiodarone is acceptable, especially with poor LV function. But it terminated fewer tachycardias within 40 minutes than procainamide in PROCAMIO. You also missed his low potassium and magnesium.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-amio",
      phase: "Fifteen minutes later",
      text: "After the amiodarone he is still in VT at 170. The nurse points out that his potassium came back at 3.1 mmol/L and magnesium at 0.62 mmol/L. You order replacement.",
      next: "s-unstable",
    },
    {
      kind: "say",
      id: "s-unstable",
      phase: "Twenty minutes in",
      text:
        "Before the rhythm breaks, he says his chest pressure is worse. His pressure is 76/42. He is pale and slow to answer. The rate is 184 and the QRS looks the same.",
      next: "q-unstable",
    },
    {
      kind: "question",
      id: "q-unstable",
      phase: "Now unstable",
      prompt: "He is now unstable. What do you do? Include energy, mode and sedation.",
      seconds: 75,
      modelAnswer: [
        "Stop any procainamide infusion.",
        "Immediate synchronized cardioversion. Start at 100 J biphasic for monomorphic VT and escalate if needed.",
        "Sedation if time allows. Ketamine 0.5 to 1 mg/kg or etomidate 0.1 to 0.15 mg/kg. Avoid full dose propofol.",
        "Confirm the sync marker is on the QRS.",
        "If he loses his pulse, defibrillate unsynchronized and start ACLS.",
      ],
      rubric: ["wct-r2", "wct-r3"],
      choices: [
        {
          id: "c-sync",
          label: "I stopped the infusion, gave etomidate 0.1 mg/kg and did a synchronized shock at 100 J with sync markers checked.",
          next: "s-sinus",
          quality: "strong",
          feedback:
            "Correct. Synchronized cardioversion at 100 J is the starting dose for monomorphic VT with a pulse. Neutral sedation protects his pressure.",
        },
        {
          id: "c-propofol",
          label: "I gave propofol 1.5 mg/kg and did a synchronized shock at 100 J.",
          next: "s-propofol",
          quality: "partial",
          feedback:
            "The shock was right. Full dose propofol in a patient at 76 systolic risks arrest. Use ketamine, etomidate or a much smaller dose of propofol.",
        },
        {
          id: "c-lido",
          label: "I gave lidocaine 1.5 mg/kg IV instead of shocking him.",
          next: "s-lido",
          quality: "unsafe",
          feedback:
            "Unstable VT with a pulse needs synchronized cardioversion now. Drugs are slower and less reliable than a shock. The examiner wanted electricity.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "One minute later",
      text:
        "The shock converts him to sinus rhythm but his pressure is 58/30. He is apneic for 90 seconds and you bag him. You give push dose epinephrine 10 mcg twice. Pressure recovers to 104/66.",
      next: "s-sinus",
    },
    {
      kind: "say",
      id: "s-lido",
      phase: "Two minutes later",
      text:
        "He becomes unresponsive and loses his pulse. The rhythm is still VT. The nurse starts compressions. You defibrillate at 200 J. He has a pulse after one shock.",
      next: "s-sinus",
    },
    {
      kind: "say",
      id: "s-sinus",
      phase: "After conversion",
      text:
        "He is in sinus rhythm at 74. Pressure 112/70. He is waking up. Chest pressure is gone. The post conversion ECG shows old anterior Q waves and no ST elevation.",
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "Preventing recurrence",
      prompt: "What caused this and how do you keep him out of VT tonight?",
      seconds: 75,
      modelAnswer: [
        "Scar from his old anterior MI is the substrate. Low potassium and magnesium from the new thiazide were likely the trigger.",
        "Stop hydrochlorothiazide.",
        "Potassium chloride IV 10 mmol/h peripherally, aiming for potassium 4.0 to 5.0 mmol/L.",
        "Magnesium sulfate 2 g IV and keep magnesium in the high normal range.",
        "Discuss amiodarone with cardiology. 150 mg over 10 minutes then 1 mg/min for 6 hours and 0.5 mg/min for 18 hours. If procainamide was given, check the QTc first.",
        "Serial troponin to look for acute ischemia. Continue beta blocker once stable.",
        "Ask what changed recently. The new thiazide is the clue.",
      ],
      rubric: ["wct-a3", "wct-m4", "wct-h3"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "The cardiologist on the phone says: 'He is back in sinus. Send him to the medicine ward and we will see him Monday.' What do you say?",
      seconds: 60,
      modelAnswer: [
        "He had sustained VT with hemodynamic compromise and structural heart disease.",
        "He needs a monitored bed. CCU with telemetry and defibrillator access.",
        "He needs echo, ischemia assessment and electrophysiology referral for ICD evaluation.",
        "State the concern clearly with the key facts. Escalate if needed.",
        "Document the conversation.",
      ],
      rubric: ["wct-d1", "wct-c1"],
      choices: [
        {
          id: "c-ccu",
          label: "I explained that he had unstable sustained VT with prior MI and needed CCU monitoring and an ICD work up. The cardiologist agreed to admit him to CCU.",
          next: "q-patient",
          quality: "strong",
          feedback:
            "Good. Sustained VT with instability and scar is a secondary prevention ICD indication pending work up. A clear, respectful case to the consultant gets the right bed.",
        },
        {
          id: "c-ward",
          label: "I accepted the ward bed with telemetry ordered.",
          next: "s-ward",
          quality: "partial",
          feedback:
            "Telemetry on a ward is better than nothing but response to recurrent VT may be slow. He needs CCU level care and an early cardiology plan. You should advocate.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ward",
      phase: "Two hours later",
      text:
        "The ward nurse calls. He had 30 seconds of VT on telemetry that stopped on its own. The cardiologist now agrees to take him to CCU.",
      next: "q-patient",
    },
    {
      kind: "question",
      id: "q-patient",
      phase: "Talking with the patient",
      prompt: "He asks when he can go back to driving his school bus. What do you tell him?",
      seconds: 60,
      modelAnswer: [
        "Be honest. He cannot drive the bus for now.",
        "Commercial driving standards after sustained VT with instability are strict. Under CCS fitness to drive guidance a secondary prevention ICD usually ends commercial driving. Private driving is also restricted for a period.",
        "In Ontario, physicians must report a condition with a moderate or high risk of sudden incapacitation, or one that caused sudden incapacitation and is likely to recur, to the Registrar of Motor Vehicles at the Ministry of Transportation.",
        "Tell him you will report and why. Offer support for work concerns.",
        "His father's sudden death at 60 is worth passing on to cardiology.",
      ],
      rubric: ["wct-d2", "wct-p1", "wct-h4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He goes to the CCU in sinus rhythm on an amiodarone infusion with electrolytes being replaced. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "wct-a1",
      competency: "assessment",
      criterion: "physical",
      text: "States that a regular wide complex tachycardia in a patient with prior MI is VT until proven otherwise.",
      points: 3,
      critical: true,
      teaching: "History of MI or structural heart disease predicts VT better than any ECG criterion. Treat it as VT.",
      source: "esc-va",
    },
    {
      id: "wct-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Names ECG features that favour VT such as AV dissociation, fusion beats, QRS over 160 ms, extreme axis and concordance.",
      points: 2,
      teaching: "Fusion and capture beats and AV dissociation are the most specific signs. Look in the long rhythm strip.",
      source: "esc-va",
    },
    {
      id: "wct-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Places pads early and avoids calcium channel blockers for a wide complex tachycardia.",
      points: 3,
      critical: true,
      teaching: "Verapamil or diltiazem given for VT can cause collapse. Pads on before any drug.",
      source: "aha-acls",
    },
    {
      id: "wct-m1",
      competency: "management",
      criterion: "management",
      text: "Chooses procainamide, amiodarone or elective synchronized cardioversion for stable VT.",
      points: 2,
      teaching: "All three are accepted. Procainamide terminated more tolerated wide complex tachycardias than amiodarone in a randomized trial.",
      source: "procamio",
    },
    {
      id: "wct-m2",
      competency: "management",
      criterion: "management",
      text: "Doses procainamide at 10 mg/kg over 20 minutes or 20 to 50 mg/min to 17 mg/kg with stop criteria.",
      points: 2,
      teaching: "Stop for hypotension, QRS widening over 50 percent or termination. Use caution with severe LV dysfunction or long QT.",
      source: "aha-acls",
    },
    {
      id: "wct-m3",
      competency: "management",
      criterion: "management",
      text: "Replaces potassium and magnesium early.",
      points: 1,
      teaching: "Low potassium and magnesium lower the threshold for VT. A new thiazide is a common culprit.",
      source: "esc-va",
    },
    {
      id: "wct-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Performs immediate synchronized cardioversion starting at 100 J biphasic when he becomes unstable.",
      points: 3,
      critical: true,
      teaching: "Unstable VT with a pulse needs synchronized cardioversion now. Unsynchronized shocks are for pulseless or polymorphic VT.",
      source: "aha-acls",
    },
    {
      id: "wct-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Uses hemodynamically neutral sedation such as etomidate 0.1 to 0.15 mg/kg or ketamine.",
      points: 1,
      teaching: "Full dose propofol can drop a borderline pressure to arrest. Choose agents that preserve tone.",
      source: "aha-acls",
    },
    {
      id: "wct-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies scar as the substrate and electrolyte loss from a new thiazide as the likely trigger.",
      points: 1,
      teaching: "Treating the trigger reduces early recurrence. The scar is why he needs electrophysiology review.",
      source: "esc-va",
    },
    {
      id: "wct-m4",
      competency: "management",
      criterion: "management",
      text: "Starts an amiodarone load and maintenance infusion with cardiology to prevent early recurrence.",
      points: 1,
      teaching: "Amiodarone 150 mg over 10 minutes, then 1 mg/min for 6 hours and 0.5 mg/min for 18 hours is a common regimen.",
      source: "aha-acls",
    },
    {
      id: "wct-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to CCU with continuous monitoring and requests echo, ischemia work up and ICD evaluation.",
      points: 2,
      teaching: "Sustained VT with instability and structural disease is a secondary prevention ICD indication once reversible causes are excluded.",
      source: "acc-va",
    },
    {
      id: "wct-c1",
      competency: "communication",
      criterion: "process",
      text: "Advocates respectfully and clearly with the consultant using the key clinical facts.",
      points: 2,
      teaching: "Lead with the risk. 'Unstable sustained VT with prior MI' gets a different answer than 'he is back in sinus'.",
      source: "acc-va",
    },
    {
      id: "wct-d2",
      competency: "disposition",
      criterion: "process",
      text: "Advises no commercial driving and explains fitness to drive restrictions after sustained VT.",
      points: 1,
      teaching: "Commercial drivers carry passengers and face stricter standards. Driving advice is part of the ED plan.",
      source: "ccs-drive",
    },
    {
      id: "wct-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Explains the duty to report to the Ontario Ministry of Transportation and tells the patient before reporting.",
      points: 1,
      teaching: "Ontario requires physicians to report a high risk condition such as a moderate or high risk of sudden incapacitation. Mandatory reports do not need consent, but tell the patient why.",
      source: "ontario-hta",
    },
    {
      id: "wct-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the onset, chest pain, breathlessness, syncope and any earlier palpitations.",
      points: 2,
      teaching: "Chest pressure and breathlessness in VT point to strain on a scarred heart. A first ever episode in a man with prior MI is VT until proven otherwise.",
      source: "esc-va",
    },
    {
      id: "wct-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about prior MI, stents, known weak heart function and other structural heart disease.",
      points: 2,
      teaching: "Prior MI or a reduced ejection fraction predicts VT in a wide complex tachycardia better than any ECG rule. Ask early.",
      source: "acc-va",
    },
    {
      id: "wct-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks for the full medication list and recent changes, and identifies the new hydrochlorothiazide.",
      points: 2,
      teaching: "A new thiazide causing low potassium and magnesium is a classic trigger for VT in a scarred heart. Stopping it is part of the treatment.",
      source: "esc-va",
    },
    {
      id: "wct-h4",
      competency: "communication",
      criterion: "history",
      text: "Asks about his work and driving, and a family history of sudden death, including from his wife.",
      points: 1,
      teaching: "Commercial driving changes the reporting and advice. A father who died suddenly at 60 is worth passing to cardiology.",
      source: "ccs-drive",
    },
  ],
  sources: [
    {
      id: "aha-acls",
      citation: "American Heart Association. Part 9. Adult Advanced Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376",
    },
    {
      id: "procamio",
      citation: "Ortiz M, et al. Randomized comparison of intravenous procainamide vs. intravenous amiodarone for the acute treatment of tolerated wide QRS tachycardia. The PROCAMIO study. European Heart Journal. 2017.",
      url: "https://pubmed.ncbi.nlm.nih.gov/27354046/",
    },
    {
      id: "esc-va",
      citation: "Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. European Heart Journal. 2022.",
      url: "https://academic.oup.com/eurheartj/article/43/40/3997/6675633",
    },
    {
      id: "acc-va",
      citation: "Al-Khatib SM, et al. 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. Circulation. 2018.",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000549",
    },
    {
      id: "ontario-hta",
      citation: "Ontario. Highway Traffic Act, R.S.O. 1990, c. H.8, section 203, and O. Reg. 340/94. Medical reporting to the Registrar of Motor Vehicles.",
      url: "https://www.ontario.ca/page/reporting-driver-medical-review",
    },
    {
      id: "ccs-drive",
      citation: "Guerra PG, et al. Canadian Cardiovascular Society 2023 Guidelines on the Fitness to Drive. Canadian Journal of Cardiology. 2024.",
      url: "https://onlinecjc.ca/article/S0828-282X(23)01755-5/fulltext",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
