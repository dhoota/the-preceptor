// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const peritonealDialysisWheezeOverload: OralCase = {
  id: "peritoneal-dialysis-wheeze-overload",
  title: "The puffers are not helping",
  blueprint: "resp",
  alsoCovers: ["cardio", "id"],
  priorityTopic: "pulmonary-edema",
  keyFeatures: [
    { topic: "pulmonary-edema", n: 1 },
    { topic: "pulmonary-edema", n: 2 },
    { topic: "pulmonary-edema", n: 3 },
    { topic: "pulmonary-edema", n: 4 },
    { topic: "pulmonary-edema", n: 5 },
    { topic: "infectious-diseases", n: 1 },
  ],
  summary: "A man who does dialysis at home arrives at a small hospital at night, wheezing and breathless despite a new inhaler.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a rural hospital when the following patient arrives. " +
    "A 64 year old man is brought in by his daughter at 23:00 with 3 days of wheeze and worsening shortness of breath. He does peritoneal dialysis at home.",
  card: {
    vitals: {
      temperature: "37.9°C oral",
      pulse: "112/minute",
      resp: "32/minute",
      bp: "192/104 mmHg",
      o2sat: "86% on room air",
      weight: "84 kg (185 lb)",
    },
    medications:
      "Overnight cycler peritoneal dialysis, furosemide 80 mg twice daily, amlodipine 10 mg daily, metoprolol 50 mg twice daily, sevelamer, calcitriol, darbepoetin every 2 weeks, insulin glargine 18 units nightly, salbutamol inhaler as needed",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Three days of cough and wheeze, worse lying flat. He has slept in a recliner for 2 nights. A walk in clinic diagnosed bronchitis yesterday and gave him a salbutamol inhaler, which has not helped. " +
        "Tonight he is breathless at rest and coughing frothy white sputum. No chest pain.",
    },
    {
      id: "pd",
      label: "Dialysis details",
      result:
        "End stage kidney disease from diabetes. On an overnight cycler for 2 years with a daytime dwell. " +
        "The cycler log shows his nightly fluid removal fell from about 900 mL to 100 mL over the last 3 nights. His weight is 4 kg above his target of 80 kg. He still passes about 400 mL of urine a day.",
    },
    {
      id: "abdo",
      label: "Abdominal symptoms and dialysis technique",
      result:
        "Two days of a mild ache across his abdomen. This evening the drained fluid looked cloudy, 'like dishwater'. He did not call the dialysis nurse because it was the weekend. " +
        "Four nights ago his cycler line came apart during the night and he reconnected it without cleaning it first.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Type 2 diabetes for 20 years. Hypertension. Coronary artery disease with a stent 3 years ago. Ejection fraction 50 percent on an echo last year. " +
        "Never diagnosed with asthma or COPD. Never smoked.",
    },
    {
      id: "meds",
      label: "Medication details",
      result:
        "Takes all his medications. No new prescriptions apart from the salbutamol. No NSAIDs. Glucose readings at home have been 14 to 18 mmol/L for 2 days. No known drug allergies.",
    },
    {
      id: "social",
      label: "Social history and wishes",
      result: "Retired farmer. Lives with his daughter. No alcohol. He has told his family he wants full treatment, including life support if needed.",
    },
    {
      id: "daughter",
      label: "Collateral from his daughter",
      result:
        "He has been more muddled this evening and could not work the cycler. She found the cloudy drain bag and brought it with her. She has the home dialysis unit's phone number.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Sitting bolt upright, sweaty, speaking 3 or 4 words at a time. JVP 7 cm above the sternal angle. Crackles to the mid zones on both sides with expiratory wheeze. " +
        "Pitting edema to both knees. Abdomen mildly distended and diffusely tender without guarding. PD catheter exit site clean, with no tenderness along the tunnel.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result: "Sinus tachycardia at 112. Left ventricular hypertrophy with strain. No new ST elevation. T waves not peaked.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Many B lines in both lungs. Small pleural effusions on both sides. Left ventricle mildly reduced. No pericardial effusion. IVC 2.4 cm and not collapsing.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Enlarged heart. Bilateral perihilar haziness with Kerley B lines and small effusions. No focal consolidation.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.29. pCO2 52 mmHg. Bicarbonate 24 mmol/L. Lactate 2.4 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 92 g/L. WBC 15.8 x 10^9/L. Sodium 132 mmol/L. Potassium 5.4 mmol/L. Glucose 16.8 mmol/L. Creatinine 820 µmol/L. " +
        "hs troponin T 68 ng/L, against 55 ng/L at a clinic visit 3 months ago. Repeat at 2 hours 71 ng/L.",
    },
    {
      id: "effluent",
      label: "Peritoneal dialysis fluid",
      result: "Cloudy. White cell count 1 400 per µL with 88 percent neutrophils. Gram stain shows gram positive cocci in clusters. Culture pending.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A small hospital in northern Ontario. Bilevel ventilation and a respiratory therapist in house. No ICU and no dialysis. The regional centre with ICU, hemodialysis and the home dialysis program is 220 km away. " +
        "CritiCall and air ambulance are available. The daughter brought his peritoneal dialysis bags.",
    },
    {
      id: "vitals-0030",
      label: "Vital signs at 00:30",
      result:
        "Temperature 38.7°C. Pulse 124. BP 86/48. Resp 26. SpO2 90 percent on bilevel with FiO2 0.6. Drowsy but rousable. Lactate 4.0 mmol/L. Repeat pCO2 64 mmHg.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "23:05",
      text:
        "He is in your resus bay, sitting forward and gripping the rails. He is wheezing loudly. The nurse has a salbutamol nebulizer in her hand and asks whether to start it.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first ten minutes",
      prompt: "What is going on, and what do you do in the first 10 minutes?",
      seconds: 75,
      modelAnswer: [
        "Wheeze with orthopnea, raised JVP, crackles and edema in a dialysis patient is pulmonary edema until proven otherwise.",
        "Sit him up. Oxygen. Monitor, IV access, ECG, gas, bedside ultrasound.",
        "Bilevel or CPAP now, without waiting for tests.",
        "Nitroglycerin 0.4 mg sublingual every 5 minutes, then an infusion titrated up quickly against his blood pressure of 192/104.",
        "Bronchodilators will not fix this. Steroids are not indicated.",
        "Start looking for the cause while you treat.",
      ],
      rubric: ["pd-p1", "pd-m1", "pd-h4"],
      choices: [
        {
          id: "c-niv-nitro",
          label:
            "I called it pulmonary edema, sat him up, started bilevel ventilation and gave sublingual nitroglycerin followed by a rapidly titrated infusion, then did a bedside ultrasound.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Correct. The ERS and ATS suggest bilevel ventilation or CPAP for respiratory failure from cardiogenic pulmonary edema. " +
            "Nitrates lower preload and afterload fast in a hypertensive patient. The wheeze is cardiac. B lines on ultrasound confirm it within minutes.",
        },
        {
          id: "c-mask-lasix",
          label: "I put him on a non rebreather mask and gave furosemide 80 mg IV, then waited for him to pass urine.",
          next: "s-mask-lasix",
          quality: "partial",
          feedback:
            "He makes only 400 mL of urine a day, so furosemide alone will act slowly at best. Oxygen by mask does not reduce the work of breathing. " +
            "The examiner wanted early noninvasive ventilation and nitrates.",
        },
        {
          id: "c-asthma",
          label: "I treated his wheeze with back to back salbutamol and ipratropium, IV methylprednisolone and magnesium.",
          next: "s-asthma",
          quality: "unsafe",
          feedback:
            "He has no history of asthma or COPD. Wheeze with orthopnea, crackles and edema is pulmonary edema. Salbutamol drives his heart rate up and delays the treatment that works. " +
            "Pulmonary edema can present as wheeze, and the walk in clinic made the same mistake.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-mask-lasix",
      phase: "23:25",
      text:
        "Twenty minutes later his SpO2 is 84 percent and his breathing is faster. He has passed no urine. The respiratory therapist asks whether she can start bilevel. You agree and start a nitroglycerin infusion.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-asthma",
      phase: "23:25",
      text:
        "His pulse rises to 138 and his SpO2 falls to 82 percent. He is coughing pink froth. The respiratory therapist puts him on bilevel and you start nitroglycerin.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "The cause",
      prompt: "He is a little better on bilevel. What history do you need to find out why this happened?",
      seconds: 60,
      modelAnswer: [
        "His dialysis prescription, the nightly fluid removal trend on the cycler and his weight against his target.",
        "How much urine he still passes. Salt and fluid intake.",
        "The look of the drained fluid. Abdominal pain. Fever. Any break in technique, such as a disconnected line.",
        "Chest pain or other ACS symptoms. New drugs, missed doses, NSAIDs. Glucose control.",
        "Past history of lung disease. There is none.",
        "Collateral from his daughter. His confusion tonight and his wishes.",
      ],
      rubric: ["pd-h1", "pd-h2", "pd-h3", "pd-h5"],
      next: "q-cause",
    },
    {
      kind: "question",
      id: "q-cause",
      phase: "Testing for the cause",
      prompt: "What could have tipped him into pulmonary edema, and what tests will sort it out?",
      seconds: 60,
      modelAnswer: [
        "Loss of fluid removal by dialysis. Peritonitis is a leading cause in a patient with cloudy fluid and a break in technique.",
        "Other precipitants. ACS, uncontrolled hypertension, arrhythmia, anemia, hyperkalemia, salt or fluid excess.",
        "Send the drained fluid for cell count, differential, Gram stain and culture. Blood cultures.",
        "ECG and serial troponin. Compare with his baseline.",
        "CBC, electrolytes, glucose, lactate, gas.",
        "Bedside ultrasound to exclude a pericardial effusion. Examine the catheter exit site and tunnel.",
      ],
      rubric: ["pd-p2", "pd-p3", "pd-p4"],
      choices: [
        {
          id: "c-effluent",
          label:
            "I linked the cloudy fluid and the broken line to his fall in fluid removal, sent the dialysis fluid for cell count, Gram stain and culture, drew blood cultures, and checked serial troponins and a CBC.",
          next: "s-results",
          quality: "strong",
          feedback:
            "Good. The ISPD diagnoses peritonitis when two of these are present. Pain or cloudy fluid, a fluid white count over 100 per µL with over 50 percent neutrophils, or a positive culture. " +
            "Peritonitis can cut fluid removal and tip a dialysis patient into overload.",
        },
        {
          id: "c-diet",
          label: "I put it down to too much salt and fluid over the weekend and sent routine blood work and a troponin.",
          next: "s-diet",
          quality: "partial",
          feedback:
            "Dietary excess is common, but it does not explain fever, abdominal pain and cloudy fluid. " +
            "The examiner wanted the dialysis fluid sent for cell count and culture, since peritonitis changes the whole plan.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-diet",
      phase: "23:50",
      text: "The nurse shows you the cloudy drain bag the daughter brought. You send the fluid for cell count, Gram stain and culture, and draw blood cultures.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "00:05",
      text:
        "The dialysis fluid has a white count of 1 400 per µL with 88 percent neutrophils. The Gram stain shows gram positive cocci in clusters. " +
        "His troponin is 68 then 71 ng/L, against a baseline of 55. Hemoglobin 92 g/L. Potassium 5.4 mmol/L.",
      next: "q-treat",
    },
    {
      kind: "question",
      id: "q-treat",
      phase: "Treating the cause",
      prompt: "What is your diagnosis now, and how will you treat the cause?",
      seconds: 75,
      modelAnswer: [
        "Peritoneal dialysis peritonitis causing loss of fluid removal and pulmonary edema.",
        "Empiric antibiotics now. Cover gram positive organisms with vancomycin or a first generation cephalosporin and gram negative organisms with a third generation cephalosporin or an aminoglycoside.",
        "Intraperitoneal dosing is preferred unless he has systemic sepsis. Do not delay therapy to set up the IP route.",
        "Call the home dialysis nephrologist now. Agree on antibiotic doses and how to remove fluid, such as adjusted exchanges or urgent hemodialysis.",
        "High dose IV furosemide for his remaining urine output. Continue nitrates and bilevel.",
        "Troponin is chronically raised with a small rise. Treat as demand for now and keep watching.",
      ],
      rubric: ["pd-m2", "pd-m3", "pd-pr3"],
      next: "s-crash",
    },
    {
      kind: "say",
      id: "s-crash",
      phase: "00:30",
      text:
        "The nurse calls you back. His temperature is 38.7°C, pulse 124 and BP 86/48. He is drowsy but rousable. SpO2 90 percent on bilevel with FiO2 0.6. " +
        "Lactate 4.0 mmol/L and pCO2 64 mmHg. The nitroglycerin infusion is still running.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "Shock",
      prompt: "What is happening and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Septic shock from peritonitis in a patient who is also fluid overloaded. Nitrate effect adds to the low pressure.",
        "Stop the nitroglycerin.",
        "Repeat bedside ultrasound. No tamponade. Lungs still wet.",
        "Systemic sepsis means IV antibiotics now, not waiting for the intraperitoneal route.",
        "Start norepinephrine, peripherally if needed, for a MAP of 65 or more. Avoid large fluid boluses.",
        "Call CritiCall for transfer to an ICU with dialysis.",
      ],
      rubric: ["pd-m4", "pd-pr2"],
      choices: [
        {
          id: "c-pressor",
          label:
            "I stopped the nitroglycerin, gave the antibiotics IV at once, started norepinephrine for a MAP over 65 instead of fluid boluses, and called CritiCall for an ICU with dialysis.",
          next: "q-airway",
          quality: "strong",
          feedback:
            "Right. The ISPD prefers intraperitoneal antibiotics unless there is systemic sepsis, which he now has. " +
            "His lungs are already full of fluid, so a vasopressor is safer than boluses. Early contact with the regional centre saves time.",
        },
        {
          id: "c-wait-ip",
          label: "I stopped the nitroglycerin and waited 30 minutes for his pressure to recover, planning intraperitoneal antibiotics when the dialysis nurse could talk us through it.",
          next: "s-wait-ip",
          quality: "partial",
          feedback:
            "Stopping the nitrate is right, but antibiotics should not wait. The ISPD says therapy should start as soon as possible, IP or IV, and systemic sepsis favours IV. " +
            "A MAP this low also needs a vasopressor now.",
        },
        {
          id: "c-bolus",
          label: "I followed our septic shock order set and gave 2.5 L of crystalloid.",
          next: "s-bolus",
          quality: "unsafe",
          feedback:
            "He is anuric in practice and already in pulmonary edema. Large boluses will flood his lungs further. " +
            "Use a vasopressor, give antibiotics at once, and remove fluid when the pressure allows.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-ip",
      phase: "01:00",
      text: "His BP is 78/42 and his lactate is 5.2 mmol/L. You give the antibiotics IV and start norepinephrine, then call CritiCall.",
      next: "q-airway",
    },
    {
      kind: "say",
      id: "s-bolus",
      phase: "01:00",
      text:
        "After 1 L his SpO2 falls to 80 percent on FiO2 1.0 and pink froth fills the mask. You stop the fluid, start norepinephrine and give the antibiotics IV. You call CritiCall.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Failing on bilevel",
      prompt: "He is on norepinephrine, more drowsy, and his pCO2 is 64 mmHg. What do you do about his breathing?",
      seconds: 60,
      modelAnswer: [
        "Bilevel is failing. Falling consciousness, rising pCO2 and high oxygen needs. Intubate now, before he arrests.",
        "Preoxygenate on bilevel with high FiO2 and PEEP.",
        "Hemodynamically stable induction at a reduced dose, such as ketamine. Norepinephrine running and a push dose vasopressor ready.",
        "Choose rocuronium rather than succinylcholine, since his potassium is 5.4 and he has kidney failure.",
        "After intubation, PEEP for the edema. Lung protective volumes.",
        "He needs intubation anyway for a safe 220 km transfer.",
      ],
      rubric: ["pd-m5", "pd-pr1"],
      choices: [
        {
          id: "c-intubate",
          label:
            "I intubated him after preoxygenating on bilevel, using reduced dose ketamine and rocuronium with norepinephrine running and a push dose pressor ready, then set PEEP for the edema.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Good. Failure of noninvasive ventilation should lead to timely intubation. Delay raises the risk of a crash intubation. " +
            "A pressor running before induction protects his pressure, and avoiding succinylcholine avoids a further rise in potassium.",
        },
        {
          id: "c-stay-niv",
          label: "I kept him on bilevel, turned the FiO2 up to 1.0 and planned to reassess in an hour.",
          next: "s-stay-niv",
          quality: "partial",
          feedback:
            "He is drowsy, hypercapnic and on a vasopressor. These are signs that noninvasive ventilation is failing. " +
            "Waiting an hour risks an arrest, and he cannot travel 220 km safely like this.",
        },
        {
          id: "c-propofol-sux",
          label: "I intubated with propofol 2 mg/kg and succinylcholine before starting the norepinephrine.",
          next: "s-propofol-sux",
          quality: "unsafe",
          feedback:
            "A full dose of propofol in septic shock without a pressor running risks collapse. " +
            "Succinylcholine raises potassium and is a poor choice in a patient with kidney failure and a potassium of 5.4.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-stay-niv",
      phase: "01:20",
      text: "Forty minutes later he is unresponsive with a pCO2 of 78 mmHg and a pulse of 48. You intubate him urgently. He recovers a pulse of 110 after a dose of push dose epinephrine.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-propofol-sux",
      phase: "01:10",
      text:
        "After induction his BP is 58/30 and the monitor shows peaked T waves. You start norepinephrine, give calcium gluconate and push dose epinephrine. His pressure recovers over 5 minutes.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "The regional ICU accepts him. What has to happen before he leaves, and what do you hand over?",
      seconds: 75,
      modelAnswer: [
        "Tube secured and confirmed. Continuous end tidal CO2. Ventilator settings checked on the transport ventilator.",
        "Norepinephrine on a pump with enough drug for the trip. Two working IV lines.",
        "Antibiotics given, with times. Blood and dialysis fluid cultures sent or sent with him.",
        "Leave the PD catheter capped and clean. Do not dwell fluid for the flight unless the nephrologist asks.",
        "Structured handover. Diagnosis, timeline, effluent results, drugs and doses, ventilation, potassium and glucose.",
        "The ICU should be ready for urgent hemodialysis or continuous renal replacement.",
      ],
      rubric: ["pd-pr4"],
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "His daughter",
      prompt: "His daughter asks what went wrong and whether he can keep doing dialysis at home. What do you tell her, and what follow up do you arrange?",
      seconds: 60,
      modelAnswer: [
        "He has an infection of the dialysis fluid in his abdomen. It stopped the dialysis removing fluid, and the fluid backed up into his lungs.",
        "He is very sick and needs intensive care. He will go by air. Explain where and how she can reach the team.",
        "Confirm his wishes for full treatment.",
        "Most people return to home dialysis after peritonitis is treated, but the team will decide.",
        "Tell the home dialysis program about the disconnection. He will need retraining in his technique.",
        "Explain that the wheeze was from fluid, not bronchitis.",
      ],
      rubric: ["pd-pr5", "pd-pr6"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "At the regional centre he has hemodialysis for 3 days while his peritonitis is treated with intraperitoneal antibiotics. The culture grows Staphylococcus aureus. He is extubated on day 2 and returns to home dialysis after retraining. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "pd-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the dialysis prescription, the nightly fluid removal trend, weight against target, urine output and salt and fluid intake.",
      points: 2,
      teaching: "Fluid balance in peritoneal dialysis depends on both peritoneal fluid removal and remaining urine output. A sudden fall in removal is a clue.",
      source: "wang",
    },
    {
      id: "pd-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about cloudy drained fluid, abdominal pain, fever and breaks in technique such as a disconnected line.",
      points: 2,
      teaching: "Abdominal pain or cloudy fluid is one of the three ISPD criteria for peritonitis. Touch contamination is a common cause.",
      source: "ispd",
    },
    {
      id: "pd-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about chest pain, new drugs including NSAIDs, missed medication and glucose control.",
      points: 1,
      teaching: "Look for each precipitant of acute heart failure, since several can coexist.",
      source: "ccs",
    },
    {
      id: "pd-h4",
      competency: "assessment",
      criterion: "history",
      text: "Establishes that he has never had asthma or COPD and that the bronchitis label does not fit.",
      points: 1,
      teaching: "Wheeze in an older patient with no lung history should raise pulmonary edema. A previous diagnosis can anchor everyone after.",
      source: "ccs",
    },
    {
      id: "pd-h5",
      competency: "communication",
      criterion: "history",
      text: "Gets collateral from his daughter about his confusion, the cloudy bag and his wishes for treatment.",
      points: 1,
      teaching: "New confusion in a dialysis patient points to sepsis, hypercapnia or both.",
      source: "ispd",
    },
    {
      id: "pd-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes wheeze with orthopnea, raised JVP, crackles, edema and B lines as pulmonary edema, not asthma or bronchitis.",
      points: 2,
      teaching: "Cardiac wheeze is common. Bedside ultrasound with diffuse B lines supports the diagnosis within minutes.",
      source: "ccs",
    },
    {
      id: "pd-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Sends the dialysis fluid for cell count, differential, Gram stain and culture, and diagnoses peritonitis.",
      points: 3,
      critical: true,
      teaching: "The ISPD threshold is a fluid white count over 100 per µL, after a dwell of at least 2 hours, with over 50 percent neutrophils.",
      source: "ispd",
    },
    {
      id: "pd-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Considers other precipitants. ACS with serial troponin against baseline, hypertension, arrhythmia, anemia, hyperkalemia, and uses ultrasound to exclude pericardial effusion.",
      points: 2,
      teaching: "Troponin is often chronically raised in kidney failure. The change over time matters more than the single value.",
      source: "ccs",
    },
    {
      id: "pd-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Examines the catheter exit site and tunnel.",
      points: 1,
      teaching: "A tunnel or exit site infection changes the antibiotic plan and may mean the catheter must come out.",
      source: "ispd",
    },
    {
      id: "pd-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Starts noninvasive ventilation and nitrates early, before the cause is known.",
      points: 3,
      critical: true,
      teaching: "The ERS and ATS suggest bilevel ventilation or CPAP for respiratory failure from cardiogenic pulmonary edema. Nitrates work quickly when the pressure is high.",
      source: "rochwerg",
    },
    {
      id: "pd-m2",
      competency: "management",
      criterion: "management",
      text: "Starts empiric peritonitis antibiotics covering gram positive and gram negative organisms without delay.",
      points: 2,
      teaching: "The ISPD recommends a first generation cephalosporin or vancomycin with a third generation cephalosporin or an aminoglycoside, started as soon as possible.",
      source: "ispd",
    },
    {
      id: "pd-m3",
      competency: "management",
      criterion: "management",
      text: "Plans fluid removal with the nephrologist, such as adjusted exchanges or urgent hemodialysis, and uses IV furosemide for his remaining urine output.",
      points: 1,
      teaching: "Diuretics only work while urine output remains. When peritoneal removal fails, the dialysis plan must change.",
      source: "wang",
    },
    {
      id: "pd-m4",
      competency: "resuscitation",
      criterion: "management",
      text: "In shock, stops the nitrate, gives antibiotics IV at once, and uses a vasopressor rather than large fluid boluses.",
      points: 2,
      critical: true,
      teaching: "Systemic sepsis is the ISPD exception to intraperitoneal dosing. In an overloaded patient, large boluses worsen the lungs.",
      source: "ispd",
    },
    {
      id: "pd-m5",
      competency: "resuscitation",
      criterion: "management",
      text: "Intubates promptly when noninvasive ventilation fails, with a vasopressor running, a reduced dose stable induction agent and rocuronium.",
      points: 2,
      teaching: "Drowsiness, a rising pCO2 and shock signal failure of noninvasive ventilation. Plan the intubation before the crash.",
      source: "rochwerg",
    },
    {
      id: "pd-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Sets clear triggers for failure of noninvasive ventilation and reassesses often with the respiratory therapist.",
      points: 2,
      teaching: "Noninvasive ventilation needs a time limited trial with named failure criteria, not open ended waiting.",
      source: "rochwerg",
    },
    {
      id: "pd-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Calls CritiCall early for transfer to an ICU that can provide dialysis.",
      points: 2,
      teaching: "A rural hospital with no ICU or dialysis should start the transfer as soon as he needs a vasopressor or fails bilevel.",
      source: "lol",
    },
    {
      id: "pd-pr3",
      competency: "communication",
      criterion: "process",
      text: "Calls the home dialysis nephrologist early to agree on antibiotics and fluid removal.",
      points: 2,
      teaching: "The ISPD advises centre specific empiric regimens. The home program knows his prescription and local organisms.",
      source: "ispd",
    },
    {
      id: "pd-pr4",
      competency: "communication",
      criterion: "process",
      text: "Gives a structured handover with effluent results, antibiotic times, ventilator settings, vasopressor dose, potassium and catheter status.",
      points: 1,
      teaching: "The receiving team plans dialysis and antibiotics from your handover. Give times, not just drugs.",
      source: "lol",
    },
    {
      id: "pd-pr5",
      competency: "communication",
      criterion: "process",
      text: "Explains the illness to his daughter, confirms his wishes and helps her reach the regional centre.",
      points: 1,
      teaching: "Confirming goals before a long transfer avoids decisions being made without the family.",
      source: "ccs",
    },
    {
      id: "pd-pr6",
      competency: "professionalism",
      criterion: "process",
      text: "Tells the home dialysis program about the disconnection so his technique can be reviewed and retrained.",
      points: 1,
      teaching: "The ISPD guideline covers prevention as well as treatment. Retraining after a contamination event helps prevent the next episode.",
      source: "ispd",
    },
  ],
  sources: [
    {
      id: "ispd",
      citation: "Li PK, Chow KM, Cho Y, et al. ISPD peritonitis guideline recommendations. 2022 update on prevention and treatment. Perit Dial Int. 2022.",
      url: "https://pubmed.ncbi.nlm.nih.gov/35264029/",
    },
    {
      id: "ccs",
      citation:
        "Ezekowitz JA, O'Meara E, McDonald MA, et al. 2017 comprehensive update of the Canadian Cardiovascular Society guidelines for the management of heart failure. Can J Cardiol. 2017.",
      url: "https://pubmed.ncbi.nlm.nih.gov/29111106/",
    },
    {
      id: "rochwerg",
      citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.",
      url: "https://pubmed.ncbi.nlm.nih.gov/28860265/",
    },
    {
      id: "wang",
      citation: "Wang AY, Dong J, Xu X, et al. Volume management as a key dimension of a high quality PD prescription. Perit Dial Int. 2020.",
      url: "https://pubmed.ncbi.nlm.nih.gov/32063208/",
    },
    {
      id: "lol",
      citation: "Ontario Ministry of Health. Ontario Life or Limb Policy. 2024. Updated 2025.",
      url: "https://www.ontario.ca/page/ontario-life-or-limb-policy",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
