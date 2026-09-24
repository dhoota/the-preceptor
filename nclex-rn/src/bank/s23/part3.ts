import type { Item } from "@/engine/types";
import { ACS, ALS, BRADY, ENDO, HF, HHS, HINKLE, VALVE, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s23-21", {
      topic: "Breathing trend in pneumonia",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 67-year-old client is admitted with pneumonia and receives oxygen by nasal cannula. The nurse reviews the flow sheet. Based on the trend, which conclusion is most accurate?",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Time", "0800", "1100", "1400", "1700"],
            rows: [
              ["Respiratory rate (/minute)", "24", "30", "34", "14"],
              ["SpO2 (%)", "93", "91", "89", "86"],
              ["PaCO2 (mmHg)", "36", "38", "46", "62"],
              ["Accessory muscle use", "None", "Mild", "Marked", "Marked"],
              ["Level of consciousness", "Alert", "Alert", "Anxious", "Drowsy"],
            ],
          },
        },
      ],
      rationale:
        "From 0800 to 1400 the rate rises from 24 to 34/minute as the client works harder to breathe. By 1700 the rate falls to 14/minute while PaCO2 climbs to 62 mmHg and SpO2 drops to 86%. The client becomes drowsy. A slowing rate with rising carbon dioxide and falling alertness signals respiratory muscle fatigue. This client needs urgent help with ventilation.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "The rate has slowed, so breathing is improving", why: "A slower rate with rising PaCO2 and drowsiness means tiring, not recovery." },
      { text: "Anxiety is driving the change in breathing", why: "Anxiety speeds breathing and lowers PaCO2. Here the PaCO2 is rising." },
      { text: "Respiratory muscles are tiring toward failure", why: "A falling rate with rising PaCO2, falling SpO2 and drowsiness shows exhaustion." },
      { text: "Oxygen therapy is raising the carbon dioxide", why: "Oxygen-induced hypercapnia occurs with a high SpO2. Here SpO2 falls to 86%." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s23-22", {
      topic: "Findings of a heart valve infection",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 31-year-old client who injects drugs has had fever and fatigue for 2 weeks. Temperature is 38.6°C (101.5°F). Infective endocarditis is suspected. Which findings would support this diagnosis? Select all that apply.",
      rationale:
        "Injection drug use lets skin bacteria reach the heart valves. Vegetations on a valve disturb blood flow and cause a new murmur. Small emboli and immune reactions cause painless red spots on the palms, tender nodules on the finger pads and splinter hemorrhages under the nails. A friction rub points to pericarditis. Calf swelling on one side points to venous thrombosis. A barrel chest reflects chronic lung disease.",
      sources: [ENDO],
    }),
    kind: "sata",
    options: [
      { text: "Pericardial friction rub", why: "A friction rub points to inflamed pericardium, not a valve infection." },
      { text: "Painless red spots on the palms", why: "Painless palm lesions come from small septic emboli in endocarditis." },
      { text: "Unilateral calf swelling", why: "One swollen calf points to deep vein thrombosis." },
      { text: "New heart murmur", why: "Vegetations damage the valve and disturb blood flow, causing a murmur." },
      { text: "Barrel-shaped chest", why: "A barrel chest reflects air trapping in chronic lung disease." },
      { text: "Thin dark lines under the nails", why: "Splinter hemorrhages come from tiny emboli in the nail beds." },
      { text: "Tender nodules on the finger pads", why: "Painful finger pad nodules are an immune sign of endocarditis." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s23-23", {
      topic: "Reading a slow rhythm with dizziness",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 77-year-old client reports dizziness. The rhythm strip shows P waves at a regular rate of 80/minute and QRS complexes at a regular rate of 36/minute. The PR interval varies, and the P waves have no fixed link to the QRS complexes. BP is 84/50 mmHg. How should the nurse interpret the rhythm?",
      rationale:
        "The atria and ventricles beat on their own. P waves march at 80/minute and QRS complexes at 36/minute with no fixed PR interval. That is complete heart block. The slow ventricular escape rate explains the dizziness and the BP of 84/50 mmHg. The nurse prepares for transcutaneous pacing as prescribed. In type I block the PR lengthens until a beat drops. Sinus bradycardia keeps a P wave before every QRS.",
      sources: [BRADY, ALS],
    }),
    kind: "mc",
    options: [
      { text: "Third-degree AV block", why: "Regular P waves and regular QRS complexes with no link between them define complete heart block." },
      { text: "Second-degree AV block type I", why: "In type I block the PR lengthens until a QRS drops. Here the P waves have no link to the QRS." },
      { text: "Sinus bradycardia", why: "Sinus bradycardia keeps one P wave before each QRS with a fixed PR interval." },
      { text: "Atrial fibrillation with slow response", why: "Atrial fibrillation has no distinct P waves and an irregular QRS rhythm." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s23-24", {
      topic: "Pump failure after anterior infarction",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 66-year-old client is on day 1 after a large anterior myocardial infarction. The nurse reviews the latest note. Click to highlight the findings that suggest cardiogenic shock is developing.",
      rationale:
        "A large anterior infarction can leave too little working muscle to pump. Cardiac output falls, so BP drops from 118/72 to 84/56 mmHg and the heart rate rises to 118/minute. Poor perfusion causes restlessness, cool clammy skin and a urine output of 15 mL in an hour. Crackles to the mid lung fields show blood backing up into the lungs. Mild chest pain, bowel sounds and a clean IV site are reassuring.",
      sources: [ACS, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Alert but newly restless.]] [[Skin cool and clammy.]] [[BP 84/56 mmHg]], down from 118/72 mmHg at 0800. [[Heart rate 118/minute.]] [[Crackles to the mid lung fields.]] [[Urine output 15 mL in the last hour.]] [[Chest pain 1 of 10.]] [[Bowel sounds present.]] [[Right hand IV site clean.]]",
    spans: [
      { text: "Alert but newly restless.", why: "New restlessness can be the first sign of poor brain perfusion." },
      { text: "Skin cool and clammy.", why: "Cool, clammy skin shows vasoconstriction as output falls." },
      { text: "BP 84/56 mmHg", why: "A fall from 118/72 mmHg shows the pump is failing." },
      { text: "Heart rate 118/minute.", why: "The heart speeds up to make up for a low stroke volume." },
      { text: "Crackles to the mid lung fields.", why: "Crackles show blood backing up behind a failing left ventricle." },
      { text: "Urine output 15 mL in the last hour.", why: "Low urine output shows poor kidney perfusion." },
      { text: "Chest pain 1 of 10.", why: "Mild pain is reassuring and does not point to shock." },
      { text: "Bowel sounds present.", why: "Present bowel sounds are expected and need no follow-up." },
      { text: "Right hand IV site clean.", why: "A clean IV site is an expected finding." },
    ],
    correct: [0, 1, 2, 3, 4, 5],
  },
  {
    ...meta("rn-s23-25", {
      topic: "First step for crushing chest pain",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 58-year-old client walks into the emergency department with crushing substernal chest pain that started 30 minutes ago. The client is sweating heavily. BP is 146/88 mmHg and heart rate is 98/minute. What should the nurse do first?",
      rationale:
        "Crushing chest pain with heavy sweating suggests acute coronary syndrome. A 12-lead ECG within 10 minutes of arrival shows whether there is ST elevation, which needs urgent reperfusion. A full history can follow the ECG. A lipid panel does not guide emergency care. Stress testing is unsafe during active chest pain.",
      refs: ["A 12-lead ECG is obtained within 10 minutes of arrival for suspected acute coronary syndrome."],
      sources: [ACS],
    }),
    kind: "mc",
    options: [
      { text: "Complete a full health history", why: "A full history delays the ECG that decides on reperfusion." },
      { text: "Obtain a 12-lead ECG", why: "An early ECG identifies ST elevation that needs urgent reperfusion." },
      { text: "Draw blood for a lipid panel", why: "Lipids guide long-term risk, not emergency care." },
      { text: "Arrange a treadmill stress test", why: "Stress testing is unsafe during ongoing chest pain." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s23-26", {
      topic: "Risk from low potassium on a diuretic",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 64-year-old client takes furosemide for heart failure and has eaten poorly for a week. Serum potassium is 2.8 mEq/L (2.8 mmol/L). The monitor shows U waves and frequent premature ventricular contractions. BP is 124/76 mmHg. Urine output is 60 mL in the last hour. Complete the sentence by placing an option in each blank.",
      rationale:
        "Low potassium makes heart muscle electrically unstable. A level of 2.8 mEq/L with U waves and frequent premature ventricular contractions points to a risk of dangerous dysrhythmias. Furosemide and poor intake explain the loss. Replacing potassium as prescribed treats the cause. BP of 124/76 mmHg and urine output of 60 mL in an hour are acceptable. Nothing in the stem shows fluid excess.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report potassium in mmol/L only. The Medical Council of Canada lists 3.5 to 5.1 mmol/L, so 2.8 mmol/L is low."
    }),
    kind: "dnd",
    scoring: "triad",
    template: "With a potassium of 2.8 mEq/L, the client is at highest risk for {0} as evidenced by {1}, so the nurse should {2}.",
    targets: ["Condition", "Evidence", "Action"],
    tokens: [
      { text: "fluid volume excess", why: "The stem gives no crackles, edema or weight gain." },
      { text: "cardiac dysrhythmia", why: "Low potassium destabilizes the cardiac cell membrane." },
      { text: "a BP of 124/76 mmHg", why: "This BP is acceptable and shows no instability." },
      { text: "frequent ventricular ectopy", why: "Frequent premature ventricular contractions show electrical instability." },
      { text: "restrict oral fluid intake", why: "Fluid restriction does not address low potassium." },
      { text: "replace potassium as prescribed", why: "Replacing potassium corrects the cause of the instability." },
      { text: "urine output of 60 mL in an hour", why: "This output is adequate and does not show risk." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s23-27", {
      topic: "Fluid choice for loss from vomiting",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 40-year-old client has vomited for 2 days and cannot keep fluids down. Heart rate is 112/minute, BP is 98/62 mmHg and serum sodium is 138 mEq/L (138 mmol/L). The primary health care provider prescribes IV fluid replacement. Which solution should the nurse expect to give?",
      rationale:
        "Two days of vomiting with a heart rate of 112/minute and BP of 98/62 mmHg show loss of extracellular volume. A sodium of 138 mEq/L is normal, so the loss is isotonic. Isotonic 0.9% sodium chloride stays in the extracellular space and restores circulating volume. It also replaces chloride lost in gastric fluid. Hypotonic fluids shift into cells. Hypertonic saline treats severe low sodium.",
      refs: ["Normal serum sodium is 135 to 145 mEq/L (135 to 145 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Dextrose 5% in water", why: "Once the dextrose is used, free water moves into cells and does little for circulating volume." },
      { text: "0.45% sodium chloride", why: "Half-strength saline is hypotonic and suits free water loss, not isotonic loss." },
      { text: "3% sodium chloride", why: "Hypertonic saline treats severe low sodium. This sodium is normal." },
      { text: "0.9% sodium chloride", why: "Isotonic saline restores extracellular volume and replaces chloride lost in vomit." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-28", {
      topic: "Symptoms of a narrowed aortic valve",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 78-year-old client has a harsh systolic murmur heard best at the right upper sternal border. Severe aortic stenosis is suspected. Which symptoms reported by the client are consistent with this condition? Select three.",
      rationale:
        "A narrowed aortic valve limits how much blood the left ventricle can eject. During exertion, output cannot rise to meet demand. Poor brain flow causes fainting. Poor coronary flow causes angina. Rising pressure behind the valve causes breathlessness. Pain eased by leaning forward suggests pericarditis. Leg cramps that stop with rest suggest peripheral artery disease. Night sweats with weight loss suggest infection or cancer.",
      sources: [VALVE],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Fainting while climbing stairs", why: "Fixed output across the valve cannot rise with exertion, so brain flow drops." },
      { text: "Pain eased by leaning forward", why: "Positional pain eased by leaning forward points to pericarditis." },
      { text: "Chest tightness during exertion", why: "The thick ventricle needs more oxygen than narrowed outflow lets the coronaries deliver." },
      { text: "Leg cramps that stop with rest", why: "Cramping that eases with rest points to peripheral artery disease." },
      { text: "Breathlessness when walking", why: "Pressure backs up into the lungs when the ventricle cannot empty." },
      { text: "Night sweats and weight loss", why: "These point to infection or cancer, not a narrowed valve." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s23-29", {
      topic: "Potassium shift during ketoacidosis treatment",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 23-year-old client with diabetic ketoacidosis has an arterial pH of 7.12 and a serum potassium of 5.9 mEq/L (5.9 mmol/L). An IV insulin infusion and IV fluids have been started. Which change in serum potassium should the nurse anticipate as treatment continues?",
      rationale:
        "Acidosis and lack of insulin shift potassium out of cells, so the serum level of 5.9 mEq/L looks high. Total body potassium is usually low from osmotic diuresis. Insulin drives potassium back into cells. As the pH of 7.12 corrects, hydrogen ions leave cells and potassium moves in. The serum level can fall fast, so it is checked often and replaced as prescribed.",
      sources: [HHS],
    }),
    kind: "mc",
    options: [
      { text: "It will rise as the glucose falls", why: "Falling glucose does not raise potassium. Insulin moves potassium into cells." },
      { text: "It will stay near 5.9 mEq/L", why: "Total body potassium is low, and treatment shifts potassium into cells." },
      { text: "It will fall as potassium enters cells", why: "Insulin and correction of acidosis both move potassium into cells." },
      { text: "It will rise as ketones are cleared", why: "Clearing ketones corrects acidosis, which lowers serum potassium." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s23-30", {
      topic: "Care in sudden pulmonary edema",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 69-year-old client with heart failure wakes acutely breathless. Crackles are heard throughout both lungs. SpO2 is 86% on room air, respiratory rate is 34/minute and BP is 172/98 mmHg. Which interventions should the nurse anticipate? Select all that apply.",
      rationale:
        "Sudden breathlessness, crackles in both lungs, SpO2 of 86% and BP of 172/98 mmHg fit acute pulmonary edema. Sitting upright with the legs down reduces venous return. Oxygen treats the hypoxemia. IV furosemide removes excess fluid. Urine output shows the diuretic response. A fluid bolus, raising the legs and extra oral fluid all add volume to congested lungs.",
      sources: [HF, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Sit upright with legs dangling", why: "Upright posture with legs down pools blood in the legs and eases breathing." },
      { text: "Give a 500 mL IV fluid bolus", why: "A bolus adds volume to lungs that are already congested." },
      { text: "Start oxygen as prescribed", why: "Oxygen treats the SpO2 of 86%." },
      { text: "Lie supine with legs raised", why: "This position returns more blood to the heart and worsens congestion." },
      { text: "Give IV furosemide as prescribed", why: "A loop diuretic removes fluid and lowers preload." },
      { text: "Push oral fluids to thin secretions", why: "Extra fluid adds to the overload." },
      { text: "Measure urine output closely", why: "Urine output shows how well the diuretic is working." },
    ],
    correct: [0, 2, 4, 6],
  },
];
