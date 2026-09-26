// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const dialysisHyperkalemiaArrest: OralCase = {
  id: "dialysis-hyperkalemia-arrest",
  title: "Weakness after the storm",
  blueprint: "resus",
  alsoCovers: ["cardio"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 2 },
    { topic: "arrhythmia", n: 5 },
    { topic: "airway", n: 5 },
    { topic: "ems", n: 3 },
  ],
  summary: "A 67 year old woman on hemodialysis arrives weak and short of breath after a winter storm closed the roads.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in northwestern Ontario when the following patient arrives. " +
    "At 19:30 on a Wednesday, a 67 year old woman on hemodialysis is brought in by her daughter because she is too weak to stand. " +
    "Your dialysis unit runs 07:00 to 17:00. Nephrology is by phone, 4 hours away by road.",
  card: {
    vitals: {
      temperature: "36.2°C",
      pulse: "42/minute",
      resp: "24/minute",
      bp: "94/56 mmHg",
      o2sat: "90% on room air",
      weight: "72 kg (159 lb)",
    },
    medications: "Insulin glargine, insulin lispro, metoprolol, sevelamer, calcitriol, darbepoetin",
    allergies: "Unknown",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "A storm closed the highway and she missed yesterday's dialysis run. She became weaker through the day and could not stand this evening, so her daughter drove her in. " +
        "At triage she was CTAS 1 with a capillary glucose of 5.6 mmol/L. The nurse says her rhythm looks wide and slow, and has done an ECG and put her on the monitor.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Diabetes. End stage kidney disease on hemodialysis Tuesday, Thursday and Saturday through a left arm fistula. " +
        "Your hospital has a 6 bed ICU and an in centre hemodialysis unit.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result:
        "Rate 40. No visible P waves. QRS 186 ms. Tall peaked T waves across the precordium. The QRS and T waves are starting to merge into a sine wave pattern in V2 to V4.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result:
        "pH 7.19, pCO2 38 mmHg, bicarbonate 14 mmol/L. Potassium 8.3 mmol/L. Sodium 133 mmol/L. Ionized calcium 1.01 mmol/L. Glucose 5.4 mmol/L. Lactate 2.2 mmol/L. Hemoglobin 94 g/L.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Drowsy but answers questions. JVP 8 cm above the sternal angle. Bibasal crackles to the mid lung fields. Pitting edema to the knees. " +
        "Left arm fistula with a good thrill. No asterixis. No rub.",
    },
    {
      id: "meds",
      label: "Medications",
      result:
        "Insulin glargine 18 units nightly and lispro with meals. Metoprolol 25 mg twice daily. Sevelamer with meals. Calcitriol. Darbepoetin weekly. No potassium binder at home.",
    },
    {
      id: "daughter",
      label: "Collateral from her daughter",
      result:
        "Her last dialysis was Saturday. The unit called to cancel Tuesday because of the road closure. She has been eating soup made from a potato and tomato base and using a salt substitute. " +
        "She has never missed a run before. She wants full treatment.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Mildly reduced left ventricular function. No pericardial effusion. Diffuse B lines in both lungs. IVC 2.3 cm with no respiratory variation.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Cardiomegaly. Bilateral perihilar haziness and small pleural effusions consistent with pulmonary edema.",
    },
    {
      id: "labs",
      label: "Formal blood work",
      result:
        "Potassium 8.4 mmol/L (not hemolyzed). Creatinine 814 µmol/L. Urea 39 mmol/L. Magnesium 1.1 mmol/L. Phosphate 2.6 mmol/L. " +
        "High sensitivity troponin T 88 ng/L (her baseline is about 70 ng/L). CK 140 U/L.",
    },
    {
      id: "post-rosc-gas",
      label: "Repeat gas 60 minutes after ROSC",
      result: "pH 7.28, potassium 6.4 mmol/L, glucose 2.1 mmol/L, ionized calcium 1.24 mmol/L.",
    },
    {
      id: "post-rosc-ecg",
      label: "ECG after ROSC",
      result: "Junctional rhythm at 64. QRS 138 ms. Peaked T waves persist.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "She is on the stretcher in resus. She is drowsy and says her legs feel like rubber. The monitor shows a wide complex rhythm at 40. The nurse has one IV in her right hand.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Immediate management",
      prompt: "How do you interpret this ECG and what do you do right now?",
      seconds: 90,
      modelAnswer: [
        "Severe hyperkalemia with a preterminal sine wave pattern. Treat before the lab result.",
        "Pads on. Second IV, not in the fistula arm.",
        "Calcium now: calcium chloride 10 percent 10 mL (1 g) over 5 minutes or calcium gluconate 10 percent 30 mL (3 g) over 10 minutes. Give it faster if she is peri arrest.",
        "Repeat calcium if the QRS does not narrow within 5 to 10 minutes.",
        "Regular insulin 10 units IV with 25 g dextrose (50 mL of D50W). Her glucose is under 7 mmol/L, so follow with D10W at 50 mL/h for 5 hours.",
        "Salbutamol 10 to 20 mg nebulized. Call nephrology early for dialysis.",
        "Ask when she last dialyzed and why she missed a run, her diet and salt substitute use, her medications and her insulin and intake today.",
      ],
      rubric: ["hk-a1", "hk-r1", "hk-m1", "hk-h1", "hk-h2", "hk-h3", "hk-h4"],
      choices: [
        {
          id: "c-calcium",
          label: "I treated it as hyperkalemia from the ECG, gave calcium chloride 1 g IV, then insulin 10 units with 25 g dextrose, put pads on and called nephrology.",
          next: "s-arrest",
          quality: "strong",
          feedback:
            "Correct. A sine wave pattern means arrest is imminent. Calcium stabilizes the membrane within minutes but does not lower potassium. Insulin with dextrose shifts potassium in over 15 to 30 minutes.",
        },
        {
          id: "c-wait",
          label: "I sent a stat potassium and waited for the result before treating.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "The ECG is diagnostic in this setting. Waiting 30 to 60 minutes for a lab value risks arrest. A gas analyzer gives potassium in two minutes, but treatment should start on the ECG alone.",
        },
        {
          id: "c-atropine",
          label: "I gave atropine 1 mg IV for the bradycardia and started transcutaneous pacing.",
          next: "s-atropine",
          quality: "partial",
          feedback:
            "Bradycardia here is from hyperkalemia. Atropine rarely helps and pacing often fails to capture at this potassium level. The treatment is calcium first. Atropine and pacing are distractions until the potassium effect is reversed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Eight minutes later",
      text: "The lab calls to say the sample is being processed. Her QRS widens further on the monitor. She stops answering questions.",
      next: "s-arrest",
    },
    {
      kind: "say",
      id: "s-atropine",
      phase: "Five minutes later",
      text: "Her rate does not change after atropine. The pacer does not capture at 120 mA. The nurse asks if she should give the calcium that is drawn up.",
      next: "s-arrest",
    },
    {
      kind: "say",
      id: "s-arrest",
      phase: "19:44",
      text:
        "Her eyes roll back. The monitor shows a slow wide sine wave at 30. There is no carotid pulse.",
      next: "q-arrest",
    },
    {
      kind: "question",
      id: "q-arrest",
      phase: "Cardiac arrest",
      prompt: "She is pulseless. Tell me exactly what you give and in what order.",
      seconds: 90,
      modelAnswer: [
        "Start CPR. This is PEA from hyperkalemia.",
        "Calcium chloride 1 g IV push. Repeat every 5 minutes if needed.",
        "Epinephrine 1 mg every 3 to 5 minutes per ACLS.",
        "Regular insulin 10 units IV with 25 g dextrose.",
        "Sodium bicarbonate 50 mEq IV given the arrest and acidosis. Flush between calcium and bicarbonate.",
        "Call nephrology and arrange dialysis now.",
      ],
      rubric: ["hk-r2", "hk-m2", "hk-l1"],
      choices: [
        {
          id: "c-hk-arrest",
          label: "I started CPR, gave calcium chloride 1 g and repeated it, gave insulin with dextrose, sodium bicarbonate 50 mEq through a flushed line and epinephrine per ACLS.",
          next: "s-rosc",
          quality: "strong",
          feedback:
            "Good. Repeated calcium is the key drug in hyperkalemic arrest. Bicarbonate has a role in arrest with acidosis. Flush between calcium and bicarbonate so calcium carbonate does not precipitate in the line.",
        },
        {
          id: "c-acls-only",
          label: "I ran standard ACLS with epinephrine and planned to give calcium after the first few cycles.",
          next: "s-acls-only",
          quality: "unsafe",
          feedback:
            "Standard ACLS will not reverse hyperkalemic arrest. Calcium must be given at once and repeated. The examiner wanted the cause treated in the first cycle.",
        },
        {
          id: "c-same-line",
          label: "I gave calcium chloride and sodium bicarbonate together through the same IV without flushing.",
          next: "s-same-line",
          quality: "partial",
          feedback:
            "Right drugs, wrong technique. Calcium and bicarbonate form calcium carbonate and can block the line. Use separate lines or flush well between them.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-acls-only",
      phase: "Six minutes later",
      text: "Two doses of epinephrine have no effect. The rhythm is unchanged. The pharmacist hands you calcium chloride and asks if you want it now. You give it.",
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-same-line",
      phase: "Two minutes later",
      text: "The IV will not flush. White sediment is visible in the tubing. The nurse places a humeral IO and you repeat the calcium through it.",
      next: "s-rosc",
    },
    {
      kind: "say",
      id: "s-rosc",
      phase: "19:52",
      text:
        "After a second gram of calcium chloride the QRS narrows and she regains a pulse. Junctional rhythm at 64. QRS 138 ms. Blood pressure 88/50. " +
        "SpO2 86 percent on a non rebreather. GCS 8. There are coarse crackles and pink froth in her mouth.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Airway after ROSC",
      prompt: "She needs airway control. How will you intubate her safely?",
      seconds: 75,
      modelAnswer: [
        "Avoid succinylcholine. It raises potassium by about 0.5 mmol/L.",
        "Rocuronium 1.2 mg/kg, about 85 mg.",
        "Reduced dose ketamine 0.5 to 1 mg/kg for induction.",
        "Preoxygenate with BVM and PEEP. Push dose epinephrine or norepinephrine ready.",
        "Have calcium drawn up during induction.",
      ],
      rubric: ["hk-r3"],
      choices: [
        {
          id: "c-roc",
          label: "I used ketamine 50 mg and rocuronium 90 mg, preoxygenated with PEEP and had pressor and calcium ready.",
          next: "q-lower",
          quality: "strong",
          feedback:
            "Correct. Rocuronium avoids the potassium rise from succinylcholine. A reduced ketamine dose limits hypotension after arrest. PEEP helps the pulmonary edema.",
        },
        {
          id: "c-sux",
          label: "I used etomidate and succinylcholine 1.5 mg/kg for the fastest onset.",
          next: "s-sux",
          quality: "unsafe",
          feedback:
            "Succinylcholine is contraindicated at this potassium level. It can raise potassium further and trigger another arrest. Rocuronium at 1.2 mg/kg gives intubating conditions within about 60 seconds.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-sux",
      phase: "One minute later",
      text: "The tube is in but the QRS widens to 190 ms and the rate falls to 34. You give another gram of calcium chloride. The QRS narrows again.",
      next: "q-lower",
    },
    {
      kind: "question",
      id: "q-lower",
      phase: "Lowering potassium",
      prompt: "She is intubated. What else do you do to lower her potassium and keep her safe until dialysis?",
      seconds: 90,
      modelAnswer: [
        "Salbutamol 10 to 20 mg nebulized in line.",
        "Repeat ECG and gas within 30 to 60 minutes. Expect rebound after 2 to 4 hours.",
        "Check glucose at 15 and 30 minutes, then at least hourly for 6 hours. Run D10W at 50 mL/h for 5 hours because her pre treatment glucose was under 7 mmol/L.",
        "No fluid boluses. She is overloaded.",
        "Sodium zirconium cyclosilicate 10 g is an adjunct. It is not a rescue drug.",
        "Only dialysis removes potassium in an anuric patient.",
      ],
      rubric: ["hk-m3", "hk-m4", "hk-a2"],
      choices: [
        {
          id: "c-shift",
          label: "I added nebulized salbutamol 20 mg, ran D10W at 50 mL/h with frequent glucose checks, avoided fluids and repeated the gas in 30 minutes.",
          next: "s-hypo",
          quality: "strong",
          feedback:
            "Good. Salbutamol adds to insulin and lowers potassium by about 0.5 to 1 mmol/L. Hypoglycemia is common after insulin in kidney failure because insulin clearance is slow. Frequent checks catch it early.",
        },
        {
          id: "c-kayex",
          label: "I gave sodium polystyrene sulfonate 30 g by NG and a 1 L saline bolus for her pressure.",
          next: "s-kayex",
          quality: "partial",
          feedback:
            "Sodium polystyrene acts over hours and has little role in the emergency. A litre of saline will worsen her pulmonary edema. Use a vasopressor for pressure and dialysis to remove potassium.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-kayex",
      phase: "Twenty minutes later",
      text: "Her SpO2 falls to 84 percent on FiO2 0.8. There are more crackles. You stop the saline, raise the PEEP to 10 and start norepinephrine.",
      next: "s-hypo",
    },
    {
      kind: "say",
      id: "s-hypo",
      phase: "20:50",
      text:
        "The nurse calls you back. Her heart rate is 104 and she is sweaty. The repeat gas shows potassium 6.4 mmol/L and glucose 2.1 mmol/L. The QRS is 138 ms.",
      next: "q-hypo",
    },
    {
      kind: "question",
      id: "q-hypo",
      phase: "New problem",
      prompt: "What is happening and what do you do?",
      seconds: 60,
      modelAnswer: [
        "Hypoglycemia from insulin with slow clearance in kidney failure.",
        "Dextrose 25 g IV now, then D10W infusion.",
        "Glucose every 15 to 30 minutes until stable.",
        "Potassium is rebounding. A further insulin dose may be needed with a dextrose infusion running.",
        "Dialysis remains the definitive treatment.",
      ],
      rubric: ["hk-a2", "hk-m4"],
      next: "q-dialysis",
    },
    {
      kind: "question",
      id: "q-dialysis",
      phase: "Getting dialysis",
      prompt:
        "The nephrologist on the phone says: 'Our unit is full tonight. Keep shifting her and run her in your unit when it opens at 07:00.' What do you do?",
      seconds: 90,
      modelAnswer: [
        "State that she had a hyperkalemic arrest and needs dialysis tonight.",
        "Temporizing only lasts 2 to 4 hours. Rebound is already happening.",
        "Ask about calling in the local dialysis nurse on call, or CRRT in the ICU.",
        "If not possible locally, arrange transfer through CritiCall Ontario to a centre that can dialyze now.",
        "Escalate to the nephrology attending or your chief if needed.",
      ],
      rubric: ["hk-c1", "hk-d1"],
      choices: [
        {
          id: "c-push",
          label: "I explained she had arrested and was rebounding, asked for the local on call dialysis team or CRRT, and started a CritiCall transfer in parallel.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Right. A patient who has arrested from hyperkalemia needs potassium removed within hours. Working two options in parallel prevents a dead end. Clear, factual escalation is professional.",
        },
        {
          id: "c-accept",
          label: "I accepted the plan and admitted her to the ICU with shifting therapy until morning.",
          next: "s-accept",
          quality: "unsafe",
          feedback:
            "Shifting agents wear off in 2 to 4 hours. She is anuric and potassium will keep rising overnight. This plan risks a second arrest. You need to push for dialysis tonight.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-accept",
      phase: "23:30",
      text:
        "The ICU nurse calls. Her potassium is 7.2 mmol/L and the QRS is 170 ms. She needs another gram of calcium. The ICU physician calls CritiCall and nephrology agrees to accept her for urgent dialysis.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "She is accepted at the regional centre. The flight will take 90 minutes door to door. What must go with her and what do you hand over?",
      seconds: 75,
      modelAnswer: [
        "Critical care transport crew able to manage a ventilated patient on pressors.",
        "Calcium chloride doses, insulin, dextrose and salbutamol for the flight.",
        "D10W infusion running with glucose checks every 30 minutes.",
        "Pads on. Continuous ECG.",
        "Structured handover: times, doses, arrest duration, last potassium and glucose, airway details.",
      ],
      rubric: ["hk-d2", "hk-c2"],
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "Family",
      prompt: "Her daughter asks: 'Did we do this to her with the soup? Will this happen again?' What do you say and what follow up do you arrange?",
      seconds: 60,
      modelAnswer: [
        "Acknowledge her fear. Do not blame.",
        "Explain that the missed dialysis was the main cause and the potassium in food and salt substitute added to it.",
        "Salt substitutes are mostly potassium chloride and should be avoided.",
        "Ask the dialysis team for a dietitian review and a storm plan for missed runs.",
        "Social work for travel and weather barriers.",
      ],
      rubric: ["hk-c3", "hk-p1", "hk-h2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She is dialyzed at the regional centre at 01:40. She is extubated the next day. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "hk-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes severe hyperkalemia from the ECG and treats before the lab result.",
      points: 2,
      teaching: "A missed dialysis run with a wide slow rhythm and peaked T waves is hyperkalemia until proven otherwise. The ECG, not the number, drives urgency.",
      source: "ukka",
    },
    {
      id: "hk-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives IV calcium immediately, calcium chloride 10 percent 10 mL or calcium gluconate 10 percent 30 mL (both 6.8 mmol), and repeats if the ECG does not improve.",
      points: 3,
      critical: true,
      teaching: "Calcium stabilizes the myocardium within minutes and lasts about 30 to 60 minutes. It does not lower potassium.",
      source: "ukka",
    },
    {
      id: "hk-m1",
      competency: "management",
      criterion: "management",
      text: "Gives regular insulin 10 units IV with 25 g dextrose, and adds D10W at 50 mL/h for 5 hours when pre treatment glucose is under 7 mmol/L.",
      points: 2,
      teaching: "Insulin shifts potassium into cells within 15 to 30 minutes. Some centres use 5 units in dialysis patients to lower hypoglycemia risk. UKKA keeps 10 units and adds a glucose infusion when glucose starts under 7 mmol/L.",
      source: "ukka",
    },
    {
      id: "hk-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "In hyperkalemic arrest gives repeated calcium early alongside ACLS, and sodium bicarbonate 50 mEq for arrest with acidosis.",
      points: 3,
      critical: true,
      teaching: "Hyperkalemic arrest rarely responds to standard ACLS alone. Human evidence for calcium and bicarbonate in arrest is limited, but calcium is standard care and is repeated until the QRS narrows.",
      source: "aha-2025",
    },
    {
      id: "hk-m2",
      competency: "management",
      criterion: "management",
      text: "Flushes the line or uses separate access between calcium and bicarbonate.",
      points: 1,
      teaching: "Calcium and bicarbonate precipitate as calcium carbonate. A blocked line during an arrest costs time.",
      source: "aha-2025",
    },
    {
      id: "hk-l1",
      competency: "leadership",
      criterion: "process",
      text: "Directs the team to prepare calcium, insulin, dextrose and bicarbonate at once and calls nephrology during the arrest.",
      points: 1,
      teaching: "Parallel tasks save minutes. Ask pharmacy to draw up the full hyperkalemia kit while CPR continues.",
      source: "aha-2025",
    },
    {
      id: "hk-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Avoids succinylcholine and uses rocuronium 1.2 mg/kg with a reduced induction dose and pressor ready.",
      points: 2,
      critical: true,
      teaching: "Succinylcholine raises potassium by about 0.5 mmol/L and can precipitate arrest in hyperkalemia. Rocuronium is the safe choice.",
      source: "sux-pm",
    },
    {
      id: "hk-m3",
      competency: "management",
      criterion: "management",
      text: "Adds nebulized salbutamol 10 to 20 mg and avoids fluid boluses in an overloaded dialysis patient.",
      points: 2,
      teaching: "Salbutamol adds about 0.5 to 1 mmol/L of lowering to insulin. Dialysis patients with pulmonary edema need pressors, not saline.",
      source: "ukka",
    },
    {
      id: "hk-m4",
      competency: "management",
      criterion: "management",
      text: "Monitors glucose at 15 and 30 minutes and then at least hourly for 6 hours, and treats hypoglycemia with dextrose 25 g then D10W.",
      points: 2,
      teaching: "Insulin clearance is slow in kidney failure. Hypoglycemia after insulin is common and often occurs 1 to 3 hours later.",
      source: "ukka",
    },
    {
      id: "hk-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Anticipates rebound hyperkalemia and repeats the ECG and potassium within about an hour, then again at 2 to 4 hours.",
      points: 2,
      teaching: "Shifting agents last 2 to 4 hours. In an anuric patient the potassium will come back.",
      source: "kdigo",
    },
    {
      id: "hk-c1",
      competency: "communication",
      criterion: "process",
      text: "Escalates clearly to nephrology, stating the arrest and the rebound, and asks for dialysis tonight.",
      points: 2,
      teaching: "Lead with the facts that change risk. A patient who arrested from potassium does not wait until morning.",
      source: "kdigo",
    },
    {
      id: "hk-d1",
      competency: "disposition",
      criterion: "process",
      text: "Secures definitive potassium removal by dialysis or CRRT, locally or by transfer through CritiCall Ontario.",
      points: 3,
      critical: true,
      teaching: "Dialysis is the only definitive treatment in an anuric patient. Work local and transfer options in parallel.",
      source: "kdigo",
    },
    {
      id: "hk-d2",
      competency: "disposition",
      criterion: "process",
      text: "Arranges a critical care transport with calcium, insulin, dextrose, pads and glucose monitoring.",
      points: 1,
      teaching: "Rebound and hypoglycemia can both happen in the air. The crew needs drugs and a plan for each.",
      source: "ukka",
    },
    {
      id: "hk-c2",
      competency: "communication",
      criterion: "process",
      text: "Gives a structured handover with times, doses, arrest duration, airway details and the latest potassium and glucose.",
      points: 1,
      teaching: "A clear handover prevents repeated or missed doses. Include what worked, not only what was given.",
      source: "aha-2025",
    },
    {
      id: "hk-c3",
      competency: "communication",
      criterion: "process",
      text: "Explains the cause to the daughter without blame and names salt substitutes as a potassium source.",
      points: 1,
      teaching: "Most salt substitutes are potassium chloride. Families need simple, specific advice, not guilt.",
      source: "kdigo",
    },
    {
      id: "hk-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Identifies the system barrier of weather and distance and arranges dialysis team and social work follow up.",
      points: 1,
      teaching: "Rural dialysis patients need a plan for missed runs. Naming the barrier helps the unit fix it.",
      source: "kdigo",
    },
    {
      id: "hk-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks when she last dialyzed and why she missed a run, and learns that her last run was Saturday and Tuesday was cancelled.",
      points: 2,
      teaching: "A missed run is the most common cause of severe hyperkalemia in dialysis patients. Four days since the last run is enough for a dangerous potassium.",
      source: "kdigo",
    },
    {
      id: "hk-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about potassium intake, including salt substitutes, soups and fruit.",
      points: 2,
      teaching: "Salt substitutes are mostly potassium chloride. Tomato and potato bases are also rich in potassium.",
      source: "kdigo",
    },
    {
      id: "hk-h3",
      competency: "assessment",
      criterion: "history",
      text: "Reviews her medications for drugs that raise potassium or slow the heart, and notes metoprolol and no home potassium binder.",
      points: 1,
      teaching: "Beta blockers blunt the shift of potassium into cells and add to bradycardia. ACE inhibitors, ARBs, spironolactone and NSAIDs also raise potassium.",
      source: "kdigo",
    },
    {
      id: "hk-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about her diabetes, insulin doses and intake today before giving insulin.",
      points: 1,
      teaching: "Insulin clears slowly in kidney failure and intake is often poor when unwell. A low pre treatment glucose predicts hypoglycemia after insulin.",
      source: "ukka",
    },
  ],
  sources: [
    {
      id: "ukka",
      citation: "UK Kidney Association. Clinical practice guideline. Treatment of acute hyperkalaemia in adults. 2023.",
      url: "https://guidelines.ukkidney.org/hyperkalaemia/",
    },
    {
      id: "kdigo",
      citation: "Clase CM, Carrero JJ, Ellison DH, et al. Potassium homeostasis and management of dyskalemia in kidney diseases. Conclusions from a KDIGO Controversies Conference. Kidney Int. 2020.",
    },
    {
      id: "aha-2025",
      citation: "American Heart Association. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
      url: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
    },
    {
      id: "sux-pm",
      citation: "Pfizer Canada ULC. Quelicin (succinylcholine chloride injection USP) prescribing information. Warnings on hyperkalemia. Date of revision February 26, 2024.",
      url: "https://pdf.hres.ca/dpd_pm/00074795.PDF",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
