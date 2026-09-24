// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const eclampsia: OralCase = {
  id: "eclampsia",
  title: "Seizure in a pharmacy line",
  blueprint: "obgyn",
  alsoCovers: ["neuro"],
  priorityTopic: "pre-eclampsia",
  keyFeatures: [
    { topic: "pre-eclampsia", n: 2 },
    { topic: "pre-eclampsia", n: 3 },
    { topic: "pre-eclampsia", n: 4 },
    { topic: "seizures", n: 4 },
  ],
  summary: "A pregnant woman is brought in after a witnessed seizure at a pharmacy.",
  durationMinutes: 15,
  stem:
    "You are working in a 90 bed community hospital in central Ontario. Family physicians provide low risk obstetrics and there is a level 1 nursery. " +
    "The nearest tertiary centre with maternal fetal medicine and a level 3 NICU is 110 km away. Ornge air transport is available. " +
    "Hailey Morin is 23 years old and 34 weeks and 3 days pregnant with her first baby. She had a 2 minute generalized seizure while waiting at a pharmacy. " +
    "Triage vitals: heart rate 108, blood pressure 178/114, respiratory rate 20, SpO2 93 percent on room air, temperature 37.0, capillary glucose 5.4 mmol/L. CTAS 1. " +
    "The paramedic says: 'She was drowsy for about 10 minutes after. She is waking up now. Her boyfriend says she has had a bad headache for two days and pain under her ribs.'",
  findings: [
    {
      id: "neuro",
      label: "Neurological exam",
      result:
        "GCS 13 (E3 V4 M6), improving. Pupils equal and reactive. Moves all limbs symmetrically. No facial droop. Reflexes 3 plus at the knees with 3 beats of ankle clonus. She reports seeing flashing lights.",
    },
    {
      id: "chest",
      label: "Chest and airway",
      result: "Bitten tongue. Scattered crackles at the right base. No stridor. SpO2 96 percent on 4 L nasal prongs.",
    },
    {
      id: "abdomen",
      label: "Abdomen and uterus",
      result: "Right upper quadrant and epigastric tenderness. Fundus consistent with dates. Uterus soft between palpations. No vaginal bleeding.",
    },
    {
      id: "fetal",
      label: "Fetal heart",
      result:
        "Doppler immediately after arrival: 95 beats per minute. On repeat 8 minutes later after maternal stabilization: 140 beats per minute.",
    },
    {
      id: "urine",
      label: "Urine dip",
      result: "Protein 3 plus. No blood. No leukocytes.",
    },
    {
      id: "cbc",
      label: "CBC",
      result: "Hemoglobin 121 g/L. Platelets 88 x 10^9/L. White cells 11.2 x 10^9/L.",
    },
    {
      id: "chem",
      label: "Liver, renal and hemolysis labs",
      result:
        "AST 312 U/L. ALT 280 U/L. LDH 780 U/L. Bilirubin 24 µmol/L. Creatinine 96 µmol/L. Uric acid 470 µmol/L. INR 1.1. Fibrinogen 3.4 g/L.",
    },
    {
      id: "history",
      label: "Prenatal history",
      result:
        "Prenatal visits to 30 weeks were normal with blood pressure 118/74. She missed her 32 week visit. No seizure history. No medications except prenatal vitamins. No drug use.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 104. Normal intervals.",
    },
    {
      id: "mg-level",
      label: "Serum magnesium",
      result: "First level, drawn after the recurrent seizure and extra bolus: 2.8 mmol/L. A repeat is ordered in 4 hours.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text: "As she is moved to the stretcher, she has another generalized tonic clonic seizure. The nurse turns to you.",
      next: "q-seizure",
    },
    {
      kind: "question",
      id: "q-seizure",
      phase: "Seizure",
      prompt: "What do you do right now?",
      seconds: 75,
      modelAnswer: [
        "Assume eclampsia. Call for help, including the obstetric team.",
        "Left lateral position. Protect the airway. Suction. Oxygen.",
        "Magnesium sulfate 4 g IV over 5 to 15 minutes, then 1 g/h infusion.",
        "IV is preferred. If IV access fails, give 10 g IM, 5 g in each buttock.",
        "Most eclamptic seizures stop on their own. A benzodiazepine is for prolonged seizures while magnesium is prepared.",
        "Stabilize the mother first. Fetal heart slows during and after a seizure and usually recovers.",
      ],
      rubric: ["ecl-r1", "ecl-m1"],
      choices: [
        {
          id: "c-mag",
          label: "I placed her on her left side, gave oxygen, and gave magnesium sulfate 4 g IV over 5 to 15 minutes followed by 1 g/h.",
          next: "q-bp",
          quality: "strong",
          feedback:
            "Correct. Magnesium sulfate is the drug of choice for eclampsia. It reduces recurrent seizures better than diazepam or phenytoin. " +
            "Left lateral positioning relieves aortocaval compression and protects the airway.",
        },
        {
          id: "c-benzo",
          label: "I gave lorazepam 4 mg IV and loaded levetiracetam as I would for status epilepticus.",
          next: "s-benzo",
          quality: "partial",
          feedback:
            "A benzodiazepine can stop a prolonged seizure, but it does not prevent eclamptic seizures. " +
            "Levetiracetam has no role here. The examiner wanted magnesium sulfate 4 g IV then 1 g/h.",
        },
        {
          id: "c-section",
          label: "I called for a crash cesarean section because the fetal heart rate is 95.",
          next: "s-section",
          quality: "unsafe",
          feedback:
            "The mother comes first. Fetal bradycardia after an eclamptic seizure usually recovers within minutes once the mother is oxygenated. " +
            "Operating on an unstable, seizing mother with platelets under 100 is dangerous. Give magnesium and stabilize.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-benzo",
      phase: "Ten minutes later",
      text:
        "She is very drowsy and her respiratory rate is 10. The family physician on call for obstetrics arrives and asks if magnesium has been started. You load magnesium sulfate 4 g IV.",
      next: "q-bp",
    },
    {
      kind: "say",
      id: "s-section",
      phase: "A few minutes later",
      text:
        "The anesthetist says he will not put her to sleep while she is seizing and unstable. The fetal heart rate is now 140. You give magnesium sulfate 4 g IV and start the infusion.",
      next: "q-bp",
    },
    {
      kind: "question",
      id: "q-bp",
      phase: "Blood pressure",
      prompt: "The seizure has stopped. Her pressure is 180/116. What is your target and how do you get there?",
      seconds: 75,
      modelAnswer: [
        "Severe hypertension is 160 systolic or 110 diastolic or higher. Treat within 30 to 60 minutes.",
        "Aim first for under 160/110. Then titrate toward a diastolic of about 85 mmHg. Avoid a precipitous drop.",
        "Labetalol 20 mg IV, then 20 to 80 mg every 30 minutes to a maximum of 300 mg.",
        "Or oral nifedipine 10 mg of an immediate or intermediate release product, repeated in 30 minutes. Never use the extended release tablet for acute control.",
        "Or hydralazine 5 mg IV, then 5 to 10 mg every 30 minutes to a maximum of 20 mg.",
        "Continuous fetal monitoring while lowering pressure.",
      ],
      rubric: ["ecl-m2", "ecl-a3"],
      choices: [
        {
          id: "c-labetalol",
          label: "I gave labetalol 20 mg IV and titrated to get her under 160/110 over the next hour while monitoring the fetus.",
          next: "q-labs",
          quality: "strong",
          feedback:
            "Good. Severe hypertension causes stroke, a leading cause of death in eclampsia. " +
            "Labetalol, oral nifedipine or IV hydralazine are all acceptable first line agents. A gradual reduction protects placental perfusion.",
        },
        {
          id: "c-fast",
          label: "I started a nitroprusside infusion to bring her down to 120/70 quickly.",
          next: "s-fast",
          quality: "unsafe",
          feedback:
            "Nitroprusside is not a first line drug in pregnancy. Dropping to 120/70 fast can compromise placental blood flow. " +
            "The examiner wanted labetalol, nifedipine or hydralazine with a target under 160/110 first.",
        },
        {
          id: "c-wait",
          label: "I held antihypertensives because magnesium will bring the pressure down.",
          next: "s-wait",
          quality: "partial",
          feedback:
            "Magnesium prevents seizures but is not an antihypertensive. " +
            "Pressures of 160/110 or more need treatment within the hour to prevent intracranial hemorrhage.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fast",
      phase: "Twenty minutes later",
      text:
        "Her pressure is 112/64. The fetal heart shows late decelerations. The obstetric physician asks you to stop the infusion. You stop it and the pressure settles at 146/94 with labetalol.",
      next: "q-labs",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Thirty minutes later",
      text: "Her pressure is 186/120. She complains of a severe headache. The nurse asks for an order. You give labetalol 20 mg IV and titrate.",
      next: "q-labs",
    },
    {
      kind: "question",
      id: "q-labs",
      phase: "Results",
      prompt: "Her labs are back. Interpret them and tell me what else you need to consider for the mother and the fetus.",
      seconds: 75,
      modelAnswer: [
        "Hemolysis, elevated liver enzymes and low platelets: HELLP syndrome with eclampsia.",
        "RUQ pain with high AST raises concern for liver hematoma or capsule stretch.",
        "Crackles and low saturation suggest aspiration or pulmonary edema. Restrict fluids to about 80 mL/h total.",
        "Betamethasone 12 mg IM, repeated in 24 hours, because she is under 35 weeks. Do not delay delivery or transfer to finish the course.",
        "Delivery is definitive treatment but only after the mother is stabilized.",
        "CT head if focal deficits, persistent decreased consciousness or atypical features.",
      ],
      rubric: ["ecl-a1", "ecl-a2", "ecl-m3"],
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "Forty minutes after the loading dose",
      text:
        "The magnesium infusion is running at 1 g/h. She has a third generalized seizure lasting 90 seconds. Afterwards her pupils are equal and she moves all limbs.",
      next: "q-recurrent",
    },
    {
      kind: "question",
      id: "q-recurrent",
      phase: "Recurrent seizure",
      prompt: "She has seized again on magnesium. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Give a further 2 g of magnesium sulfate IV over 5 minutes.",
        "Check a magnesium level and reflexes.",
        "If seizures continue despite magnesium, consider a benzodiazepine and airway control.",
        "Recurrent seizures on magnesium are an indication for CT head to exclude hemorrhage or venous thrombosis.",
        "Recheck glucose and blood pressure.",
      ],
      rubric: ["ecl-m4", "ecl-a2"],
      choices: [
        {
          id: "c-bolus",
          label: "I gave another 2 g of magnesium IV over 5 minutes, checked a level and planned a CT head once she was stable.",
          next: "s-later",
          quality: "strong",
          feedback:
            "Correct. An extra 2 g bolus is the standard response to a recurrent eclamptic seizure. " +
            "Seizures despite magnesium are atypical and warrant imaging to exclude hemorrhage or cerebral venous thrombosis.",
        },
        {
          id: "c-triple",
          label: "I increased the infusion to 3 g/h without a level.",
          next: "s-triple",
          quality: "unsafe",
          feedback:
            "A higher infusion without a level or bolus is slow to act and risks toxicity, especially with rising creatinine. " +
            "The examiner wanted a 2 g IV bolus, a level and imaging for an atypical course.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-triple",
      phase: "Fifteen minutes later",
      text: "The pharmacist calls to question the rate. You reduce it to 1 g/h and give a 2 g bolus. You order a magnesium level.",
      next: "s-later",
    },
    {
      kind: "say",
      id: "s-later",
      phase: "Four hours later",
      text:
        "The CT head shows no hemorrhage. Weather has delayed the flight. The nurse calls you urgently. She is drowsy with a respiratory rate of 10. Patellar reflexes are absent. Urine output was 40 mL over the last 2 hours. Creatinine is now 128 µmol/L. The repeat magnesium level is 5.2 mmol/L.",
      next: "q-toxicity",
    },
    {
      kind: "question",
      id: "q-toxicity",
      phase: "Deterioration",
      prompt: "What is happening and what do you do?",
      seconds: 60,
      modelAnswer: [
        "Magnesium toxicity from reduced renal clearance. Oliguria is a warning sign.",
        "Stop the magnesium infusion.",
        "Calcium gluconate 1 g IV (10 mL of 10 percent) over about 3 minutes.",
        "Support ventilation with bag mask if needed. Oxygen.",
        "Target range is about 2 to 3.5 mmol/L. Patellar reflexes are lost from about 3.5 to 5 mmol/L. Respiratory depression follows from about 5 mmol/L.",
        "Restart at a lower rate once reflexes return, with hourly checks of reflexes, breathing and urine output.",
      ],
      rubric: ["ecl-m5"],
      choices: [
        {
          id: "c-calcium",
          label: "I stopped the magnesium, gave calcium gluconate 1 g IV, supported her breathing and restarted at a lower rate once reflexes returned.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Correct. Loss of reflexes and respiratory depression are signs of toxicity. Calcium is the antidote. " +
            "Magnesium is renally cleared, so oliguria in HELLP makes accumulation likely.",
        },
        {
          id: "c-intubate",
          label: "I intubated her for airway protection and continued the magnesium.",
          next: "s-intubate",
          quality: "partial",
          feedback:
            "Supporting the airway matters, but continuing the infusion makes the toxicity worse. " +
            "Stop the infusion and give calcium gluconate 1 g IV. Most patients avoid intubation with that alone.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-intubate",
      phase: "Thirty minutes later",
      text: "She is intubated. The respiratory therapist notes very low spontaneous effort. The obstetric physician stops the magnesium and asks for calcium gluconate. You give 1 g IV.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Disposition",
      prompt: "Where should she be delivered, how do you get her there safely, and what goes with her?",
      seconds: 75,
      modelAnswer: [
        "Transfer to the tertiary centre with maternal fetal medicine, anesthesia and a level 3 NICU.",
        "Call through CritiCall Ontario to reach obstetrics and the NICU at the receiving centre.",
        "Transfer only when seizures are controlled and pressure is under 160/110.",
        "Magnesium infusion and antihypertensives running. Calcium gluconate available. Foley with hourly output.",
        "Escort able to manage seizures and the airway. Left lateral tilt.",
        "If delivery is imminent or she is too unstable to move, deliver locally with the neonatal team prepared.",
      ],
      rubric: ["ecl-d1", "ecl-c1"],
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Communication",
      prompt: "Her boyfriend asks: 'Is she having epilepsy? Will the baby be okay?' What do you tell him?",
      seconds: 60,
      modelAnswer: [
        "Check she agrees to information being shared, or act in her best interest while she is drowsy.",
        "Explain that this is a pregnancy related condition of high blood pressure that caused seizures, not epilepsy.",
        "It usually resolves after delivery.",
        "The baby's heart rate has recovered. Steroids were given to help the baby's lungs.",
        "She will be moved to a centre with a neonatal ICU in case the baby needs to be delivered early.",
      ],
      rubric: ["ecl-c2", "ecl-p1"],
      next: "q-leader",
    },
    {
      kind: "question",
      id: "q-leader",
      phase: "Team",
      prompt: "This was the first eclamptic seizure your team has seen in two years. What would you want in place for next time?",
      seconds: 60,
      modelAnswer: [
        "An eclampsia kit with magnesium, calcium gluconate and a dosing card in the ED.",
        "Preprinted order set for magnesium and severe hypertension.",
        "Regular multidisciplinary simulation with obstetrics and nursing.",
        "A clear escalation pathway to CritiCall and the tertiary centre.",
        "Team debrief after this case.",
      ],
      rubric: ["ecl-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The Ornge crew arrives. She goes to the tertiary centre with magnesium running and her pressure at 148/96. She is delivered by cesarean the next day. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ecl-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Diagnoses eclampsia with HELLP syndrome from the seizure, hypertension, proteinuria, low platelets, raised liver enzymes and LDH.",
      points: 2,
      teaching: "A seizure after 20 weeks with hypertension is eclampsia until proven otherwise. Look for HELLP in every case.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-a2",
      competency: "assessment",
      criterion: "data",
      text: "States indications for head imaging: focal deficits, prolonged decreased consciousness, atypical timing or seizures despite magnesium.",
      points: 2,
      teaching: "Imaging does not delay magnesium. Atypical features raise concern for hemorrhage, venous thrombosis or PRES.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-a3",
      competency: "assessment",
      criterion: "data",
      text: "Places the fetus on continuous monitoring and recognizes post seizure fetal bradycardia as usually transient.",
      points: 1,
      teaching: "Fetal heart rate usually recovers within minutes of the seizure. Maternal stabilization is the best fetal resuscitation.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Protects the airway in left lateral position with suction and oxygen during the seizure.",
      points: 1,
      teaching: "Lateral positioning reduces aspiration risk and aortocaval compression.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives magnesium sulfate 4 g IV over 5 to 15 minutes followed by 1 g/h infusion.",
      points: 3,
      critical: true,
      teaching: "Magnesium sulfate is first line for eclampsia. It prevents recurrent seizures better than diazepam or phenytoin.",
      source: "eclampsia-trial",
    },
    {
      id: "ecl-m2",
      competency: "management",
      criterion: "plan",
      text: "Treats severe hypertension within the hour with labetalol, oral nifedipine or hydralazine and targets under 160/110.",
      points: 3,
      critical: true,
      teaching: "Stroke is a leading cause of death in eclampsia. Treat 160/110 or more promptly but avoid a precipitous fall.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-m3",
      competency: "management",
      criterion: "plan",
      text: "Gives betamethasone 12 mg IM, repeated in 24 hours, for a pregnancy under 35 weeks with delivery likely within 7 days.",
      points: 1,
      teaching: "Antenatal corticosteroids reduce neonatal respiratory morbidity when given before 35 weeks.",
      source: "sogc-acs",
    },
    {
      id: "ecl-m4",
      competency: "management",
      criterion: "plan",
      text: "Gives a further 2 g magnesium sulfate IV over 5 minutes for a recurrent seizure.",
      points: 2,
      teaching: "A recurrent seizure on magnesium calls for an extra 2 g bolus, a level and consideration of imaging.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-m5",
      competency: "management",
      criterion: "plan",
      text: "Recognizes magnesium toxicity, stops the infusion and gives calcium gluconate 1 g IV.",
      points: 3,
      critical: true,
      teaching: "Absent reflexes, low respiratory rate and oliguria signal toxicity. Calcium gluconate reverses it within minutes.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-c1",
      competency: "communication",
      criterion: "plan",
      text: "Contacts the tertiary obstetric and NICU teams early through CritiCall Ontario.",
      points: 1,
      teaching: "Early contact lets the receiving team plan delivery and a NICU bed before the patient arrives.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains eclampsia to the partner in plain language and addresses fetal wellbeing honestly.",
      points: 1,
      teaching: "Families often fear epilepsy or death. A clear explanation that this is a pregnancy condition helps.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Considers the patient's consent and privacy before sharing information with her boyfriend.",
      points: 1,
      teaching: "When the patient cannot yet consent, share what is needed for her care and revisit consent when she is alert.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Transfers to a tertiary centre only after seizures and pressure are controlled, with magnesium running and a skilled escort.",
      points: 2,
      teaching: "Stabilize before transfer. Delivery is definitive but should happen where the mother and preterm baby can both be cared for.",
      source: "sogc-hdp",
    },
    {
      id: "ecl-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Proposes system supports such as an eclampsia kit, order set and regular simulation.",
      points: 1,
      teaching: "Rare events need prepared kits and practised teams. Simulation improves time to magnesium and antihypertensives.",
      source: "sogc-hdp",
    },
  ],
  sources: [
    {
      id: "sogc-hdp",
      citation:
        "Magee LA, et al. Society of Obstetricians and Gynaecologists of Canada. Guideline No. 426: Hypertensive Disorders of Pregnancy: Diagnosis, Prediction, Prevention, and Management. Journal of Obstetrics and Gynaecology Canada. 2022.",
      url: "https://doi.org/10.1016/j.jogc.2022.03.002",
    },
    {
      id: "eclampsia-trial",
      citation: "The Eclampsia Trial Collaborative Group. Which anticonvulsant for women with eclampsia? Evidence from the Collaborative Eclampsia Trial. Lancet. 1995.",
    },
    {
      id: "sogc-acs",
      citation: "Skoll A, et al. Society of Obstetricians and Gynaecologists of Canada. No. 364: Antenatal Corticosteroid Therapy for Improving Neonatal Outcomes. Journal of Obstetrics and Gynaecology Canada. 2018.",
      url: "https://doi.org/10.1016/j.jogc.2018.04.018",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
