import type { Item } from "@/engine/types";
import { AKI, ANAPHYLAXIS, GOLD, HINKLE, PANCREATITIS, SICKLE, STROKE, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s25-11", {
      topic: "Blood pressure before stroke thrombolysis",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 68-year-old client has right-sided weakness and trouble speaking that began 70 minutes ago. A CT scan shows no bleeding. The primary health care provider plans IV thrombolysis. BP is 196/104 mmHg. Blood glucose is 132 mg/dL (7.3 mmol/L). Which action should the nurse anticipate before the thrombolytic is started?",
      rationale:
        "The client is within 4.5 hours of onset and has no bleeding on CT, so thrombolysis is planned. A BP of 196/104 mmHg is above the 185/110 mmHg ceiling for starting it. High BP raises the risk of bleeding into the brain. The BP is lowered first with an IV agent. Dropping it to 120/80 mmHg could reduce flow to the injured brain. A high BP alone does not cancel the treatment.",
      refs: ["BP should be below 185/110 mmHg before IV thrombolysis starts.", "IV thrombolysis for ischemic stroke is given within 4.5 hours of symptom onset."],
      sources: [STROKE],
    }),
    kind: "mc",
    options: [
      { text: "Lower the BP below 185/110 mmHg first", why: "BP must be under 185/110 mmHg before thrombolysis to limit the risk of brain bleeding." },
      { text: "Start the thrombolytic at the current BP", why: "Starting at 196/104 mmHg raises the risk of bleeding into the brain." },
      { text: "Cancel thrombolysis because of the BP", why: "A high BP that can be lowered does not rule out treatment within the time window." },
      { text: "Lower the BP below 120/80 mmHg first", why: "A drop this large can reduce blood flow to brain tissue that is still salvageable." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-12", {
      topic: "Water loss after pituitary surgery",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client is 1 day after transsphenoidal pituitary surgery. Urine output has been about 420 mL per hour for 3 hours. Urine specific gravity is 1.002. Serum sodium is 149 mEq/L (149 mmol/L). Blood glucose is 104 mg/dL (5.8 mmol/L). The client reports intense thirst. Clear fluid drips from the nose when the client leans forward. Which findings are consistent with diabetes insipidus? Select all that apply.",
      rationale:
        "Pituitary surgery can cut off antidiuretic hormone. The kidneys then lose large volumes of dilute urine. An output of about 420 mL per hour with a specific gravity of 1.002 shows this. Water loss concentrates the blood, so the sodium rises to 149 mEq/L and the client is thirsty. A glucose of 104 mg/dL rules out a sugar diuresis. Clear nasal drip suggests a cerebrospinal fluid leak, a separate complication.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Clear fluid dripping from the nose", why: "Clear nasal drainage after this surgery suggests a cerebrospinal fluid leak, not diabetes insipidus." },
      { text: "Urine output about 420 mL per hour", why: "Without antidiuretic hormone, the kidneys pass large volumes of urine." },
      { text: "Blood glucose 104 mg/dL (5.8 mmol/L)", why: "A normal glucose rules out a glucose-driven diuresis. It is not a sign of diabetes insipidus." },
      { text: "Urine specific gravity 1.002", why: "Dilute urine shows the kidneys cannot concentrate it." },
      { text: "Intense thirst", why: "Water loss raises serum osmolality, which triggers thirst." },
      { text: "Serum sodium 149 mEq/L", why: "Losing free water concentrates the sodium in the blood." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s25-13", {
      topic: "Blood gas in a COPD exacerbation",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with COPD is admitted with an exacerbation. Arterial blood gas results are pH 7.28, PaCO2 62 mmHg, HCO3 28 mEq/L (28 mmol/L) and PaO2 56 mmHg. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A pH of 7.28 is below 7.35, so the client is acidotic. The PaCO2 of 62 mmHg is above 45 mmHg and matches the acid side, so the cause is respiratory. The bicarbonate of 28 mEq/L is above 26 mEq/L, which shows the kidneys are retaining base. The pH is still abnormal, so compensation is partial.",
      refs: ["Normal arterial pH is 7.35 to 7.45.", "Normal PaCO2 is 35 to 45 mmHg.", "Normal bicarbonate is 22 to 26 mEq/L."],
      sources: [HINKLE, GOLD],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The blood gas shows {0} that is {1}.",
    blanks: [
      {
        options: [
          { text: "metabolic acidosis", why: "Metabolic acidosis has a low bicarbonate. Here the bicarbonate is 28 mEq/L." },
          { text: "respiratory acidosis", why: "A pH of 7.28 with a PaCO2 of 62 mmHg shows acid from retained carbon dioxide." },
          { text: "respiratory alkalosis", why: "Alkalosis needs a pH above 7.45. The pH is 7.28." },
          { text: "metabolic alkalosis", why: "The pH of 7.28 is acidotic, so this is not an alkalosis." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "fully compensated", why: "Full compensation would bring the pH back to 7.35 or higher. It is 7.28." },
          { text: "partially compensated", why: "The bicarbonate is raised but the pH is still below 7.35." },
          { text: "uncompensated", why: "A bicarbonate of 28 mEq/L shows the kidneys have started to compensate." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s25-14", {
      topic: "Fluid response in acute pancreatitis",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client who weighs 80 kg is admitted with acute pancreatitis and receives IV lactated Ringer's solution. Four hours later the nurse reviews the findings. Which finding best shows that the fluid therapy is working?",
      rationale:
        "Fluid therapy in pancreatitis aims to restore perfusion. Urine output tracks kidney perfusion at the bedside. 45 mL/hour is above 0.5 mL/kg/hour for an 80 kg client, so the kidneys are perfused. A heart rate of 118/minute and a rising hematocrit both point to a volume deficit that persists. Lipase confirms the diagnosis but does not track severity or fluid status.",
      refs: ["A urine output below 0.5 mL/kg/hour for 6 hours is a criterion for acute kidney injury."],
      sources: [PANCREATITIS, AKI, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs usually report hematocrit as a fraction in L/L, so the rise reads 0.44 to 0.49 L/L. The Medical Council of Canada lists 0.38 to 0.50 L/L as the adult range.",
    }),
    kind: "mc",
    options: [
      { text: "Urine output of 45 mL/hour", why: "This output is above 0.5 mL/kg/hour for an 80 kg client and shows kidney perfusion." },
      { text: "Heart rate of 118/minute", why: "A fast heart rate suggests the volume deficit has not been corrected." },
      { text: "Hematocrit up from 44% to 49%", why: "A rising hematocrit shows the blood is more concentrated, which means too little fluid." },
      { text: "Lipase down from 2400 to 1900 units/L", why: "Lipase supports the diagnosis but does not track fluid status or severity." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-15", {
      topic: "Neurologic trend after head injury",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 72-year-old client was admitted with a subdural hematoma after a fall. The nurse reviews the neurologic flow sheet. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Neurologic Flow Sheet",
          table: {
            head: ["Time", "1600", "1800", "2000", "2200"],
            rows: [
              ["BP (mmHg)", "138/78", "150/76", "168/70", "184/64"],
              ["Heart rate (/minute)", "88", "76", "64", "54"],
              ["Respirations", "16, regular", "14, regular", "12, irregular", "10, irregular"],
              ["Glasgow Coma Scale", "14", "13", "11", "9"],
              ["Right pupil", "3 mm, brisk", "3 mm, brisk", "4 mm, sluggish", "5 mm, sluggish"],
            ],
          },
        },
      ],
      rationale:
        "From 1600 to 2200 the systolic BP rises from 138 to 184 mmHg while the diastolic falls, so the pulse pressure widens. The heart rate falls from 88 to 54/minute and breathing becomes slow and irregular. The Glasgow Coma Scale drops from 14 to 9 and the right pupil enlarges. This is the pattern of rising intracranial pressure from an expanding bleed. It needs urgent reporting.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Hypovolemic shock", why: "Shock lowers the BP and raises the heart rate. Here the BP rises and the heart rate falls." },
      { text: "Rising intracranial pressure", why: "Widening pulse pressure, slowing pulse, irregular breathing and a falling score fit brain compression." },
      { text: "Opioid oversedation", why: "Opioids lower the BP and constrict both pupils. They do not enlarge one pupil." },
      { text: "Postictal recovery", why: "After a seizure the level of consciousness improves over time. Here it keeps falling." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s25-16", {
      topic: "ECG change in high potassium",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with chronic kidney disease has missed two hemodialysis sessions. Serum potassium is 7.1 mEq/L (7.1 mmol/L). The nurse attaches a cardiac monitor. Which ECG change should the nurse expect to see?",
      rationale:
        "A potassium of 7.1 mEq/L is well above the normal range of 3.5 to 5.0 mEq/L. High potassium speeds repolarization, which shows first as tall, peaked T waves. Higher levels widen the QRS and can lead to ventricular fibrillation. Prominent U waves and ST depression go with low potassium. A long QT interval goes with low calcium or low magnesium.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Prominent U waves", why: "U waves are a sign of low potassium, not high potassium." },
      { text: "ST segment depression", why: "ST depression is linked to low potassium or ischemia." },
      { text: "Prolonged QT interval", why: "A long QT interval is linked to low calcium or low magnesium." },
      { text: "Tall, peaked T waves", why: "Peaked T waves are the earliest ECG sign of high potassium." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s25-17", {
      topic: "Reaction to a first antibiotic dose",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client receives a first dose of IV ceftriaxone. 10 minutes after it starts, the client has hives on the chest and reports throat tightness. Wheezes are heard in both lungs. BP is 82/48 mmHg, down from 128/76 mmHg. Heart rate is 128/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Hives, throat tightness, wheezing and a BP fall to 82/48 mmHg within 10 minutes of a new drug fit anaphylaxis. The infusion is stopped to remove the trigger. Intramuscular epinephrine is the first drug because it reverses airway swelling and vasodilation. BP shows whether circulation is recovering. Airway and breath sounds show whether swelling and bronchospasm are easing. Oral antihistamines act too slowly and do not treat shock.",
      sources: [ANAPHYLAXIS],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Anaphylaxis", why: "Skin, airway and circulation signs right after a new drug fit anaphylaxis." },
      { text: "Infusion flushing reaction", why: "A rate-related flushing reaction does not cause wheezing, throat tightness and shock." },
      { text: "Acute asthma attack", why: "Asthma does not cause hives or a sharp fall in BP." },
      { text: "Vasovagal reaction", why: "A vasovagal reaction slows the heart. Here the heart rate is 128/minute." },
    ],
    actions: [
      { text: "Stop the ceftriaxone infusion", why: "Stopping the infusion prevents more of the trigger from entering." },
      { text: "Give oral diphenhydramine first", why: "Antihistamines relieve hives but act slowly and do not treat airway swelling or shock." },
      { text: "Give IM epinephrine as prescribed", why: "Epinephrine is the first-line drug for anaphylaxis." },
      { text: "Slow the infusion rate by half", why: "Any further drug worsens the reaction. The infusion is stopped." },
      { text: "Offer oral fluids to drink", why: "Throat swelling makes swallowing unsafe, and oral fluid is too slow for shock." },
    ],
    parameters: [
      { text: "Serum creatinine level", why: "Creatinine does not guide treatment in the first minutes of anaphylaxis." },
      { text: "Blood pressure trend", why: "BP shows whether epinephrine and fluids are restoring circulation." },
      { text: "Blood glucose level", why: "Glucose does not guide anaphylaxis treatment." },
      { text: "Airway and breath sounds", why: "Stridor or worsening wheeze shows airway swelling that needs more treatment." },
      { text: "Oral temperature", why: "Temperature does not guide acute anaphylaxis care." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s25-18", {
      need: "MOC",
      topic: "Choosing the first client to assess",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse receives a change of shift report on four clients. Which client should the nurse assess first?",
      rationale:
        "New stridor after thyroidectomy can mean airway swelling or a neck hematoma pressing on the trachea. Airway comes first, so this client is seen first. An SpO2 of 89% is within the 88% to 92% target for many clients with COPD. A 1 kg gain needs follow-up today but is not an emergency. Pain of 7 in sickle cell crisis needs prompt treatment after the airway threat.",
      refs: ["The target SpO2 for many clients with COPD is 88% to 92%."],
      sources: [HINKLE, GOLD],
    }),
    kind: "mc",
    options: [
      { text: "A client 8 hours after thyroidectomy with new stridor", why: "Stridor signals a narrowing airway, which is the most urgent threat." },
      { text: "A client with COPD whose SpO2 is 89% on 2 L/minute of oxygen", why: "89% is within the usual 88% to 92% target in COPD." },
      { text: "A client with heart failure who gained 1 kg since yesterday", why: "The gain needs follow-up, but it is not an immediate airway threat." },
      { text: "A client in sickle cell crisis who rates pain 7 of 10", why: "Pain needs prompt treatment, but it comes after an airway threat." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-19", {
      topic: "Matching shock profiles",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse assesses three clients who each have a BP near 80/50 mmHg. Drag the most likely type of shock to each client.",
      rationale:
        "Flat neck veins and cool skin after days of vomiting show too little circulating volume, which is hypovolemic shock. Crackles and distended neck veins after a large myocardial infarction show a failing pump, which is cardiogenic shock. Warm, flushed skin and fever with a known infection show vasodilation from sepsis. Neurogenic shock follows a spinal cord injury. Obstructive shock follows a blocked outflow such as a large pulmonary embolism.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "Flat neck veins and cool skin after 3 days of vomiting",
      "Crackles, distended neck veins and cool skin after a large myocardial infarction",
      "Warm, flushed skin and fever with a kidney infection",
    ],
    tokens: [
      { text: "Septic shock", why: "Infection with warm, flushed skin and fever fits the vasodilation of sepsis." },
      { text: "Neurogenic shock", why: "Neurogenic shock follows spinal cord injury. None of the clients has one." },
      { text: "Hypovolemic shock", why: "Vomiting for days drains volume, so the neck veins are flat and the skin is cool." },
      { text: "Obstructive shock", why: "Obstructive shock comes from a blocked outflow, such as a large pulmonary embolism. None is described." },
      { text: "Cardiogenic shock", why: "A failing pump after infarction backs fluid into the lungs and neck veins." },
    ],
    correct: [2, 4, 0],
  },
  {
    ...meta("rn-s25-20", {
      topic: "New chest symptoms in sickle cell disease",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 19-year-old client with sickle cell disease is on day 2 of admission for leg pain. The client now has new chest pain and a cough. Temperature is 38.7°C (101.7°F). SpO2 is 89% on room air, down from 97%. Crackles are heard at the right base. Which complication should the nurse suspect?",
      rationale:
        "New chest pain, cough, fever, crackles and a fall in SpO2 from 97% to 89% during a pain crisis fit acute chest syndrome. It is a leading cause of death in sickle cell disease and needs prompt treatment. Splenic sequestration causes a large spleen and a sudden fall in hemoglobin. Aplastic crisis causes fatigue and pallor. Oversedation slows breathing but does not cause fever or crackles.",
      sources: [SICKLE],
    }),
    kind: "mc",
    options: [
      { text: "Splenic sequestration crisis", why: "Sequestration causes an enlarged spleen and sudden anemia, not fever and crackles." },
      { text: "Aplastic crisis", why: "Aplastic crisis causes pallor and fatigue from low red cell production. It does not cause chest findings." },
      { text: "Acute chest syndrome", why: "Chest pain, cough, fever, crackles and falling SpO2 in sickle cell disease fit this syndrome." },
      { text: "Opioid-induced oversedation", why: "Oversedation slows breathing but does not cause fever, cough or crackles." },
    ],
    correct: 2,
  },
];
