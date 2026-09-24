// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const obstructiveShockPeLysis: OralCase = {
  id: "obstructive-shock-pe-lysis",
  title: "Grey and breathless after fainting",
  blueprint: "resus",
  alsoCovers: ["resp", "cardio"],
  priorityTopic: "shock",
  keyFeatures: [
    { topic: "shock", n: 5 },
    { topic: "shock", n: 6 },
    { topic: "shock", n: 7 },
    { topic: "dvt-pe", n: 6 },
    { topic: "airway", n: 4 },
  ],
  summary: "A 58 year old man arrives in shock after a faint at home. The cause is not obvious.",
  durationMinutes: 15,
  stem:
    "You work in an urban community emergency department in Ontario. You have CT, a 12 bed ICU and point of care ultrasound. " +
    "There is no interventional radiology after 17:00. The nearest cardiac surgery centre is 45 minutes away by land. It is 21:15. " +
    "Luis Moreno is 58 years old and weighs about 95 kg. His wife found him on the bathroom floor after he fainted. He has been short of breath for three days. " +
    "Paramedics gave 500 mL of normal saline on the way in. " +
    "Triage vitals: heart rate 128, blood pressure 78/52, respiratory rate 30, SpO2 86 percent on room air and 91 percent on a non rebreather, temperature 37.3, glucose 7.4 mmol/L. CTAS 1. " +
    "The nurse says: 'He looks grey and he is getting more anxious. I don't know what is going on with him.'",
  findings: [
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Alert but anxious. Cool, mottled knees. JVP visible at the angle of the jaw while sitting at 45 degrees. Chest clear with equal air entry. " +
        "Heart sounds normal with a loud P2. Abdomen soft. His right leg is in a walking boot and the calf is 3 cm larger than the left.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result: "Sinus tachycardia at 128. New right bundle branch block. S wave in lead I, Q wave and inverted T in lead III. T wave inversion V1 to V4.",
    },
    {
      id: "pocus-heart",
      label: "Cardiac POCUS",
      result:
        "Right ventricle larger than the left in the apical four chamber view. Septal flattening giving a D shaped left ventricle in the short axis. " +
        "Hypokinetic right ventricular free wall with a moving apex. TAPSE 11 mm. Hyperdynamic small left ventricle. No pericardial effusion.",
    },
    {
      id: "pocus-other",
      label: "Lung, IVC and aorta POCUS",
      result: "Lung sliding present on both sides with A lines. IVC 2.4 cm with no respiratory variation. Abdominal aorta 2.0 cm. No free fluid in the abdomen.",
    },
    {
      id: "pocus-leg",
      label: "Leg compression ultrasound",
      result: "Right common femoral and popliteal veins do not compress. Echogenic material in the lumen. Left leg compresses normally.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.29, pCO2 31 mmHg, bicarbonate 15 mmol/L, lactate 5.4 mmol/L. Potassium 4.3 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "High sensitivity troponin T 184 ng/L. Hemoglobin 146 g/L. Platelets 208 x 10^9/L. INR 1.1. aPTT 29 seconds. Fibrinogen 3.4 g/L. Creatinine 121 µmol/L. Group and screen sent.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Clear lung fields. No pneumothorax. No effusion. Normal mediastinum.",
    },
    {
      id: "bleeding-screen",
      label: "Contraindication screen",
      result:
        "No prior stroke or intracranial disease. No surgery in the last three weeks. No recent bleeding. No anticoagulants or antiplatelets. " +
        "No head strike when he fainted according to his wife. No uncontrolled hypertension. Not on any blood thinners.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "He broke his right ankle playing soccer three weeks ago. It was treated in a boot without surgery. He has been mostly on the couch since. No prior clots. He has no advance directive and would want full treatment.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "He is on the stretcher with a non rebreather. Pressure 76/50, heart rate 130. He has one 18 gauge IV. The nurse asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Undifferentiated shock",
      prompt: "He is in shock and you do not yet know why. What do you do in the first five minutes?",
      seconds: 90,
      modelAnswer: [
        "Monitor, pads, second large bore IV, bloods and a gas.",
        "Oxygen titrated to SpO2 over 90 percent. High flow nasal oxygen if needed.",
        "Rapid bedside ultrasound of heart, lungs, IVC, aorta and legs.",
        "Hold large fluid boluses until the cause is clearer.",
        "Examine for signs of an obstructive cause. JVP, leg swelling, air entry.",
        "Norepinephrine ready.",
      ],
      rubric: ["pe-r1", "pe-a1"],
      choices: [
        {
          id: "c-pocus",
          label: "I placed a second line, titrated oxygen, held further fluid, and did a rapid shock ultrasound of heart, lungs, IVC, aorta and legs.",
          next: "s-pocus",
          quality: "strong",
          feedback:
            "Good. A structured shock ultrasound sorts obstructive, cardiogenic, hypovolemic and distributive causes in minutes. A distended neck vein is a clue to hold fluid until you know more.",
        },
        {
          id: "c-fluid",
          label: "I gave 2 L of saline wide open because he is hypotensive.",
          next: "s-fluid",
          quality: "partial",
          feedback:
            "Fluid is not always safe in shock. His JVP is at the jaw. In right ventricular failure a large bolus distends the right ventricle, pushes the septum left and lowers cardiac output. A small bolus of 250 to 500 mL is the limit until the cause is known.",
        },
        {
          id: "c-intubate",
          label: "I intubated him straight away for the hypoxia and agitation.",
          next: "s-intubate",
          quality: "unsafe",
          feedback:
            "Induction and positive pressure in a failing right ventricle often cause arrest. Sedatives drop preload and vascular tone, and positive pressure raises pulmonary resistance. Avoid intubation if at all possible. Use high flow oxygen first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fluid",
      phase: "Ten minutes later",
      text: "After 1.5 L his pressure is 70/46 and his heart rate is 138. He is more short of breath. The respiratory therapist asks if you want an ultrasound machine. You stop the fluid and scan.",
      next: "s-pocus",
    },
    {
      kind: "say",
      id: "s-intubate",
      phase: "Three minutes later",
      text:
        "After ketamine and rocuronium his pressure falls to 50 systolic and he loses his pulse. Two minutes of CPR and 1 mg of epinephrine bring back a pulse at 72/40. He is now ventilated on high pressures. You start norepinephrine and scan his heart.",
      next: "s-pocus",
    },
    {
      kind: "say",
      id: "s-pocus",
      phase: "Bedside ultrasound",
      text:
        "The right ventricle is larger than the left with a D shaped septum and TAPSE of 11 mm. No pericardial effusion. Lung sliding on both sides. " +
        "The IVC is 2.4 cm and does not collapse. The right femoral vein does not compress.",
      next: "q-interpret",
    },
    {
      kind: "question",
      id: "q-interpret",
      phase: "Putting it together",
      prompt: "What is your diagnosis? Do you need a CT pulmonary angiogram before you treat?",
      seconds: 75,
      modelAnswer: [
        "Obstructive shock from high risk, or massive, pulmonary embolism.",
        "Acute right ventricular failure and a proximal DVT with a clear risk factor.",
        "Tamponade, tension pneumothorax and aortic dissection are excluded at the bedside.",
        "He is too unstable for CT. Right ventricular dysfunction on echo is enough to treat in shock.",
        "Start unfractionated heparin 80 units/kg IV bolus, about 7600 units, unless lysis is imminent.",
      ],
      rubric: ["pe-a2", "pe-a3", "pe-m1"],
      choices: [
        {
          id: "c-no-ct",
          label: "I diagnosed high risk PE from the echo and the DVT, kept him in resus and gave a heparin bolus.",
          next: "q-support",
          quality: "strong",
          feedback:
            "Correct. Guidelines accept echo evidence of right ventricular dysfunction as enough to treat when a patient in shock cannot safely go to CT. The DVT adds certainty. Heparin should start without delay.",
        },
        {
          id: "c-ct",
          label: "I took him to CT with a nurse to confirm the diagnosis before anything else.",
          next: "s-ct",
          quality: "unsafe",
          feedback:
            "A patient in obstructive shock should not leave resus for confirmation. The bedside findings are diagnostic enough to act on. CT delays treatment and puts him in the worst place to arrest.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In the CT scanner",
      text:
        "On the scanner table his pressure falls to 62/40 and he becomes confused. The scan shows a saddle embolus. You bring him back to resus and start heparin. Twenty minutes have passed.",
      next: "q-support",
    },
    {
      kind: "question",
      id: "q-support",
      phase: "Supporting the right ventricle",
      prompt: "How do you support his blood pressure and oxygenation while you decide on reperfusion?",
      seconds: 75,
      modelAnswer: [
        "Norepinephrine first line, starting at 0.05 to 0.1 mcg/kg/min.",
        "No more fluid. His IVC is full.",
        "Oxygen by high flow nasal cannula. Accept SpO2 over 90 percent.",
        "Avoid intubation. If unavoidable, resuscitate first, use low dose ketamine and keep tidal volumes and PEEP low.",
        "Arterial line. Pads on.",
      ],
      rubric: ["pe-r2", "pe-r3"],
      next: "q-lysis",
    },
    {
      kind: "question",
      id: "q-lysis",
      phase: "Reperfusion",
      prompt: "On norepinephrine at 0.15 mcg/kg/min his pressure is 84/56. What is your reperfusion plan? Give me the drug and dose.",
      seconds: 90,
      modelAnswer: [
        "Systemic thrombolysis is indicated for high risk PE.",
        "Screen contraindications. None are present.",
        "Alteplase 100 mg IV over 2 hours.",
        "Accelerated option of 0.6 mg/kg over 15 minutes, maximum 50 mg, if he is peri arrest.",
        "Manage heparin per local protocol around the infusion. Recheck aPTT after.",
        "Explain the bleeding risk, including about 2 percent risk of brain bleeding, and document consent.",
      ],
      rubric: ["pe-m2", "pe-c1"],
      choices: [
        {
          id: "c-lyse",
          label: "I screened contraindications, explained the risks to him and his wife, and gave alteplase 100 mg over 2 hours.",
          next: "s-arrest",
          quality: "strong",
          feedback:
            "Correct. High risk PE with no contraindications should receive systemic thrombolysis. It lowers death and hemodynamic collapse. Brief informed consent with the risk of intracranial bleeding is ideal when time allows.",
        },
        {
          id: "c-wait-ir",
          label: "I called for catheter directed therapy and held lysis until interventional radiology was available.",
          next: "s-wait-ir",
          quality: "partial",
          feedback:
            "Catheter directed therapy is an option when lysis is contraindicated or fails. It is not available tonight. Waiting for a service that does not exist leaves him in shock. Systemic lysis is first line here.",
        },
        {
          id: "c-heparin-only",
          label: "I continued heparin alone because his troponin is only modestly raised.",
          next: "s-wait-ir",
          quality: "unsafe",
          feedback:
            "Hypotension on a vasopressor defines high risk PE regardless of the troponin. Heparin alone does not relieve the obstruction quickly enough. Mortality without reperfusion in this group is high.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-ir",
      phase: "Twenty minutes later",
      text:
        "His norepinephrine is at 0.3 mcg/kg/min and his pressure is 72/44. His lactate is 6.8 mmol/L. The ICU physician says: 'There is no IR tonight. He needs lysis now.' You start alteplase 100 mg over 2 hours.",
      next: "s-arrest",
    },
    {
      kind: "say",
      id: "s-arrest",
      phase: "22:05",
      text:
        "Twenty five minutes into the alteplase infusion he becomes unresponsive. The monitor shows sinus tachycardia at 120 but there is no pulse. About 30 mg of alteplase has been given.",
      next: "q-arrest",
    },
    {
      kind: "question",
      id: "q-arrest",
      phase: "Cardiac arrest",
      prompt: "He is in PEA with the alteplase running. What do you do, and how long will you continue?",
      seconds: 90,
      modelAnswer: [
        "Start CPR. Epinephrine 1 mg every 3 to 5 minutes.",
        "Give the remaining alteplase as a bolus, or a 50 mg bolus, per local arrest protocol.",
        "Continue CPR for 60 to 90 minutes after lysis before stopping.",
        "Consider mechanical CPR.",
        "Contact the cardiac surgery centre about ECMO or surgical embolectomy if available.",
      ],
      rubric: ["pe-r4", "pe-p1"],
      choices: [
        {
          id: "c-bolus",
          label: "I started CPR, gave the rest of the alteplase as a bolus, and planned to continue for at least 60 to 90 minutes.",
          next: "s-rosc",
          quality: "strong",
          feedback:
            "Correct. Arrest from PE is a clear indication for bolus lysis. The drug needs time to work. Many survivors in reports had prolonged CPR after lysis.",
        },
        {
          id: "c-stop-lysis",
          label: "I stopped the alteplase because CPR raises the bleeding risk, and ran standard ACLS.",
          next: "s-stop-lysis",
          quality: "unsafe",
          feedback:
            "CPR is not a contraindication to lysis. Stopping the drug removes the only treatment for the cause of the arrest. The examiner wanted a bolus of the remaining dose and prolonged CPR.",
        },
        {
          id: "c-call-early",
          label: "I continued the infusion as it was and stopped CPR after 20 minutes without ROSC.",
          next: "s-stop-lysis",
          quality: "partial",
          feedback:
            "Keeping the drug running is reasonable but a bolus acts faster. Twenty minutes is too short after lysis. European guidance advises considering 60 to 90 minutes of CPR after thrombolysis for PE.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-stop-lysis",
      phase: "In the room",
      text:
        "The ICU physician asks you to reconsider. 'This is a PE arrest and the lytic is our only chance. Let's bolus the rest and keep going.' You agree.",
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-rosc",
      phase: "22:19",
      text:
        "After 14 minutes of CPR he regains a pulse. Pressure 96/60 on norepinephrine 0.2 mcg/kg/min. Heart rate 112. He is breathing and moving all limbs. " +
        "Repeat echo shows a smaller right ventricle and better function. He is oozing from his IO site and his wife has arrived.",
      next: "q-after",
    },
    {
      kind: "question",
      id: "q-after",
      phase: "After lysis",
      prompt: "What are your next steps for his care and where does he go?",
      seconds: 75,
      modelAnswer: [
        "Pressure on oozing sites. Avoid new punctures. Check fibrinogen, hemoglobin and aPTT.",
        "Restart unfractionated heparin without a bolus when aPTT is below twice normal.",
        "Unfractionated heparin is preferred over LMWH in the first 24 hours after lysis.",
        "Neuro checks for intracranial bleeding. CT head if any change.",
        "ICU admission. Call the cardiac surgery centre through CritiCall now in case of re collapse.",
      ],
      rubric: ["pe-m3", "pe-d1"],
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "Family",
      prompt: "His wife asks: 'Why did this happen? Was it the broken ankle? Should they have given him a blood thinner?' How do you answer?",
      seconds: 60,
      modelAnswer: [
        "Explain in plain words that a clot from his leg went to his lungs.",
        "Immobility after the ankle injury is a likely factor.",
        "Answer honestly. Clot prevention after a lower leg injury in a boot is decided case by case.",
        "Do not speculate about other clinicians' decisions.",
        "Describe the next 24 hours and the bleeding risk from the clot busting drug.",
      ],
      rubric: ["pe-c2", "pe-p2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He goes to the ICU on a low dose of norepinephrine. He is weaned off by morning. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pe-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Places a second large bore IV, titrates oxygen and holds large fluid boluses in undifferentiated shock with a raised JVP.",
      points: 2,
      teaching: "A full neck vein in shock points to an obstructive or cardiogenic cause. Fluid can make right ventricular failure worse.",
      source: "esc-pe",
    },
    {
      id: "pe-a1",
      competency: "assessment",
      criterion: "data",
      text: "Performs a structured shock ultrasound of heart, lungs, IVC, aorta and leg veins.",
      points: 2,
      teaching: "A protocol such as RUSH looks at the pump, the tank and the pipes. It sorts the type of shock at the bedside in minutes.",
      source: "rush",
    },
    {
      id: "pe-a2",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Identifies right ventricular dilation, septal flattening and low TAPSE with a proximal DVT as high risk PE.",
      points: 2,
      teaching: "RV to LV ratio above 1, a D shaped septum and TAPSE under 16 mm support acute RV strain. A DVT on the same scan greatly raises the likelihood of PE.",
      source: "esc-pe",
    },
    {
      id: "pe-a3",
      competency: "assessment",
      criterion: "data",
      text: "Treats on bedside findings and does not send an unstable patient to CT.",
      points: 3,
      critical: true,
      teaching: "In suspected high risk PE with shock, echo evidence of RV dysfunction is enough to justify reperfusion when CT is not immediately safe.",
      source: "esc-pe",
    },
    {
      id: "pe-m1",
      competency: "management",
      criterion: "plan",
      text: "Starts unfractionated heparin 80 units/kg IV bolus without waiting for confirmation.",
      points: 1,
      teaching: "Unfractionated heparin is preferred in high risk PE because it can be stopped quickly and is used with lysis.",
      source: "esc-pe",
    },
    {
      id: "pe-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Uses norepinephrine as first vasopressor and avoids further fluid when the IVC is full.",
      points: 2,
      teaching: "Norepinephrine raises systemic pressure and right coronary perfusion. More volume stretches an already failing RV.",
      source: "esc-pe",
    },
    {
      id: "pe-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Avoids intubation if possible and knows the risks of induction and positive pressure in RV failure.",
      points: 2,
      teaching: "Induction drops preload and tone, and positive pressure raises pulmonary vascular resistance. Peri intubation arrest is common in massive PE.",
      source: "esc-pe",
    },
    {
      id: "pe-m2",
      competency: "management",
      criterion: "plan",
      text: "Gives systemic thrombolysis with alteplase 100 mg IV over 2 hours after screening contraindications.",
      points: 3,
      critical: true,
      teaching: "Systemic lysis is recommended for high risk PE without contraindications. It reduces death and hemodynamic collapse.",
      source: "esc-pe",
    },
    {
      id: "pe-c1",
      competency: "communication",
      criterion: "plan",
      text: "Explains the benefit and bleeding risk of lysis to the patient and family and documents consent.",
      points: 1,
      teaching: "Major bleeding occurs in about 1 in 10 and intracranial bleeding in about 2 in 100. A short, honest explanation is enough in an emergency.",
      source: "esc-pe",
    },
    {
      id: "pe-r4",
      competency: "resuscitation",
      criterion: "plan",
      text: "In PE arrest gives the remaining alteplase or a 50 mg bolus and continues CPR for 60 to 90 minutes.",
      points: 3,
      critical: true,
      teaching: "Give lysis when PE is the suspected cause of arrest. The drug needs time, so ERC advises considering 60 to 90 minutes of CPR after it is given.",
      source: "erc-sc",
    },
    {
      id: "pe-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Does not stop lysis or resuscitation early because of bleeding worries during CPR.",
      points: 1,
      teaching: "The risk of bleeding from CPR is small compared with the certainty of death from untreated PE arrest.",
      source: "aha-2025",
    },
    {
      id: "pe-m3",
      competency: "management",
      criterion: "plan",
      text: "After lysis controls oozing with pressure, checks fibrinogen and aPTT, and restarts unfractionated heparin without a bolus.",
      points: 2,
      teaching: "Restart heparin when the aPTT is under twice normal. Avoid new punctures and watch for neurologic change.",
      source: "esc-pe",
    },
    {
      id: "pe-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to ICU and contacts a centre with cardiac surgery or ECMO through CritiCall in case of failed lysis.",
      points: 2,
      teaching: "Surgical embolectomy, catheter therapy or ECMO are rescue options when lysis fails or is contraindicated. Arrange the backup early.",
      source: "esc-pe",
    },
    {
      id: "pe-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains the diagnosis to his wife in plain language and outlines the next 24 hours.",
      points: 1,
      teaching: "Say clot, leg and lungs. Families remember simple words and a clear plan.",
      source: "esc-pe",
    },
    {
      id: "pe-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Answers questions about prior care honestly without speculating about or blaming other clinicians.",
      points: 1,
      teaching: "Clot prevention after lower leg immobilization is individualized by risk. Stick to facts you know and offer a follow up conversation.",
      source: "nice-vte",
    },
  ],
  sources: [
    {
      id: "esc-pe",
      citation: "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
    },
    {
      id: "erc-sc",
      citation: "Lott C, Truhlář A, Alfonzo A, et al. European Resuscitation Council Guidelines 2021. Cardiac arrest in special circumstances. Resuscitation. 2021.",
    },
    {
      id: "nice-vte",
      citation: "National Institute for Health and Care Excellence. Venous thromboembolism in over 16s. Reducing the risk of hospital acquired deep vein thrombosis or pulmonary embolism. NG89. 2018.",
      url: "https://www.nice.org.uk/guidance/ng89",
    },
    {
      id: "aha-2025",
      citation: "American Heart Association. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
      url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
    },
    {
      id: "rush",
      citation: "Perera P, Mailhot T, Riley D, Mandavia D. The RUSH exam. Rapid ultrasound in shock in the evaluation of the critically ill. Emerg Med Clin North Am. 2010.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
