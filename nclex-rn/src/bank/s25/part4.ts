import type { Item } from "@/engine/types";
import { AF, AKI, DELEGATION, DKA, GCS, HF, HINKLE, STROKE, WONG, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s25-31", {
      topic: "Irregular narrow complex rhythm",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client reports palpitations. The apical pulse is 138/minute and irregular. The monitor shows no distinct P waves, a wavy baseline and irregular R to R intervals. The QRS complex is narrow at 0.08 seconds. Which rhythm should the nurse identify?",
      rationale:
        "Chaotic atrial activity replaces organized P waves and leaves a wavy baseline. The ventricles respond at irregular intervals, so the R to R spacing varies. A narrow QRS of 0.08 seconds shows the impulse still travels the normal ventricular path. This is atrial fibrillation. Flutter shows sawtooth waves. Sinus tachycardia has a P wave before each QRS. Ventricular tachycardia has a wide QRS.",
      sources: [AF, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Atrial fibrillation", why: "No distinct P waves, a wavy baseline and irregular R to R intervals fit this rhythm." },
      { text: "Atrial flutter", why: "Flutter shows regular sawtooth waves and is often regular." },
      { text: "Sinus tachycardia", why: "Sinus tachycardia is regular and has a P wave before each QRS." },
      { text: "Ventricular tachycardia", why: "Ventricular tachycardia has a wide QRS. This QRS is 0.08 seconds." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-32", {
      topic: "Response to diuresis in heart failure",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client was admitted 2 days ago with acute decompensated heart failure. On admission the client had crackles to the mid lungs, 2+ ankle edema and SpO2 of 89% on room air, and slept upright on 3 pillows. Weight was 88.4 kg. The client receives IV furosemide. Which findings today show that the treatment is working? Select all that apply.",
      rationale:
        "Diuresis removes excess fluid. A weight drop from 88.4 to 86.1 kg reflects fluid loss. Crackles that have receded to the bases, the ability to lie flat and an SpO2 of 95% on room air show less fluid in the lungs. A potassium of 3.1 mEq/L is an adverse effect of furosemide that needs replacement. Worse ankle edema and a new irregular pulse are not signs of improvement.",
      sources: [HF],
    }),
    kind: "sata",
    options: [
      { text: "New irregular pulse of 112/minute", why: "A new irregular rhythm is a change to report, not a sign of improvement." },
      { text: "Weight down from 88.4 kg to 86.1 kg", why: "Weight loss over 2 days reflects fluid removed by diuresis." },
      { text: "Serum potassium 3.1 mEq/L (3.1 mmol/L)", why: "Low potassium is an adverse effect of furosemide and needs replacement." },
      { text: "Crackles only at the lung bases", why: "Crackles that have receded show less fluid in the lungs." },
      { text: "Ankle edema now 3+", why: "Edema that has increased from 2+ shows fluid is still building up." },
      { text: "Sleeps flat on one pillow", why: "Less orthopnea shows the lungs are less congested." },
      { text: "SpO2 95% on room air", why: "Better oxygenation shows less fluid in the alveoli." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s25-33", {
      topic: "Priority risk in kidney injury after contrast",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 2 days after a CT scan with IV contrast. Urine output has been about 15 mL per hour for 8 hours. Creatinine is 2.4 mg/dL (212 micromol/L), up from 0.9 mg/dL (80 micromol/L). Potassium is 6.2 mEq/L (6.2 mmol/L). The monitor shows new peaked T waves. Weight is up 2 kg and crackles are heard at the bases. Temperature is 37.0°C (98.6°F). SpO2 is 95%. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Low urine output and a rising creatinine show acute kidney injury. The kidneys cannot excrete potassium, so it has risen to 6.2 mEq/L. New peaked T waves show the high potassium is already affecting the heart. The immediate danger is a lethal dysrhythmia. The weight gain and crackles show fluid overload, but an SpO2 of 95% shows it is not yet the most urgent threat.",
      sources: [AKI, HINKLE],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "a cardiac dysrhythmia", why: "High potassium with peaked T waves can lead to ventricular dysrhythmias." },
          { text: "hypovolemic shock", why: "The client is gaining fluid, not losing it." },
          { text: "hepatic encephalopathy", why: "Nothing in the stem points to liver failure." },
          { text: "a hypoglycemic reaction", why: "The stem gives no glucose value or signs of low glucose." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "a creatinine of 2.4 mg/dL", why: "The creatinine shows kidney injury but does not itself cause dysrhythmias." },
          { text: "a potassium of 6.2 mEq/L", why: "This high potassium makes the heart muscle unstable." },
          { text: "crackles at the lung bases", why: "Crackles show fluid overload, not a rhythm risk." },
          { text: "a weight gain of 2 kg", why: "The gain shows fluid retention, not a rhythm risk." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "an SpO2 of 95%", why: "An SpO2 of 95% is adequate and does not show a rhythm risk." },
          { text: "a temperature of 37.0°C (98.6°F)", why: "A normal temperature does not relate to the rhythm risk." },
          { text: "new peaked T waves", why: "Peaked T waves show high potassium is already affecting the heart." },
          { text: "urine output of 15 mL per hour", why: "Low output explains the kidney injury but is not a direct sign of rhythm risk." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s25-34", {
      topic: "High pressure ventilator alarm",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client receives mechanical ventilation through an oral endotracheal tube. The high peak pressure alarm sounds. The client is coughing and coarse rhonchi are heard over the trachea. SpO2 has fallen from 96% to 90%. The tube marking is unchanged at 22 cm at the lip. What should the nurse do first?",
      rationale:
        "A high pressure alarm means the ventilator meets resistance. Coughing and coarse rhonchi over the trachea point to secretions in the tube. Suctioning clears them and lowers the pressure. The tube has not moved, since the mark is still 22 cm. A cuff leak causes a low pressure alarm. Silencing the alarm ignores a falling SpO2. Ventilator settings are changed by prescription, and a larger volume would raise pressure further.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Check the cuff for an air leak", why: "A cuff leak lowers pressure and sets off a low pressure alarm, not a high one." },
      { text: "Suction the endotracheal tube", why: "Secretions in the tube raise airway pressure. Suctioning clears them." },
      { text: "Silence the alarm for 2 minutes", why: "Silencing the alarm leaves the cause untreated while SpO2 falls." },
      { text: "Raise the set tidal volume", why: "Settings change by prescription, and more volume would raise pressure further." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s25-35", {
      topic: "Trend during treatment of ketoacidosis",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      trend: true,
      stem: "A client with diabetic ketoacidosis receives an IV insulin infusion and 0.9% sodium chloride. The nurse reviews the flow sheet at 1400. Which findings at 1400 need follow-up with the primary health care provider? Select all that apply.",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Time", "0800", "1000", "1200", "1400"],
            rows: [
              ["Blood glucose, mg/dL (mmol/L)", "486 (27.0)", "392 (21.8)", "298 (16.5)", "238 (13.2)"],
              ["Potassium, mEq/L (mmol/L)", "5.4 (5.4)", "4.6 (4.6)", "3.8 (3.8)", "3.1 (3.1)"],
              ["Arterial pH", "7.14", "7.20", "7.26", "7.31"],
              ["Anion gap, mEq/L", "26", "22", "18", "15"],
              ["Urine output (mL/hour)", "180", "150", "110", "80"],
            ],
          },
        },
      ],
      rationale:
        "Insulin moves potassium into cells. The potassium has fallen from 5.4 to 3.1 mEq/L and is now below the 3.5 mEq/L floor. It needs replacement before a dysrhythmia develops. The glucose has fallen to 238 mg/dL, below 250 mg/dL. Dextrose is added to the fluid so insulin can continue to clear ketones. The rising pH, the falling anion gap and the urine output show expected progress.",
      refs: [
        "During DKA treatment, dextrose is added to the IV fluid when glucose falls below 250 mg/dL (13.9 mmol/L).",
        "During DKA treatment, potassium below 3.5 mEq/L (3.5 mmol/L) is replaced and insulin is adjusted.",
      ],
      sources: [DKA, { body: "Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15" }],
      canada: "Diabetes Canada starts IV dextrose when glucose falls to 14.0 mmol/L, so 13.2 mmol/L still calls for it. It withholds insulin while potassium is below 3.3 mmol/L until replacement brings it up.",
    }),
    kind: "sata",
    options: [
      { text: "Arterial pH of 7.31", why: "The pH has risen steadily from 7.14, which shows the acidosis is resolving." },
      { text: "Anion gap of 15 mEq/L", why: "The gap has fallen steadily from 26 mEq/L, which shows ketones are clearing." },
      { text: "Potassium of 3.1 mEq/L", why: "Potassium has fallen below 3.5 mEq/L as insulin drives it into cells." },
      { text: "Urine output of 80 mL/hour", why: "Output is still adequate and falling as the osmotic diuresis eases." },
      { text: "Glucose 238 mg/dL (13.2 mmol/L)", why: "Glucose below 250 mg/dL means dextrose is added so insulin can continue." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s25-36", {
      topic: "Low BP and slow pulse after cervical injury",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client sustained a C5 spinal cord injury in a diving accident 3 hours ago. BP is 82/46 mmHg and heart rate is 48/minute. The skin below the injury is warm and dry. There is no external bleeding and the abdomen is soft. Which condition is the most likely cause of the low BP?",
      rationale:
        "An injury at C5 cuts sympathetic outflow. Vessels dilate and the heart slows, so the BP falls with a heart rate of 48/minute. Warm, dry skin below the injury reflects the loss of vasoconstriction. This is neurogenic shock. Hypovolemic shock causes a fast pulse and cool skin. Spinal shock is a loss of reflexes below the injury, not a cause of low BP. Autonomic dysreflexia raises BP.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Hypovolemic shock", why: "Blood loss causes a fast pulse and cool, pale skin, not bradycardia with warm skin." },
      { text: "Spinal shock", why: "Spinal shock is a temporary loss of reflexes below the injury. It does not explain the hemodynamics." },
      { text: "Neurogenic shock", why: "Lost sympathetic tone causes low BP, a slow pulse and warm, dry skin." },
      { text: "Autonomic dysreflexia", why: "Autonomic dysreflexia causes a sharp rise in BP, not a fall." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s25-37", {
      topic: "Drooling child with stridor",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 4-year-old child is brought in with a fever of 39.4°C (102.9°F) that began a few hours ago. The child is drooling, has a muffled voice and sits leaning forward with the chin thrust out. Inspiratory stridor is heard. What should the nurse do?",
      rationale:
        "Sudden high fever, drooling, a muffled voice, a tripod posture and stridor suggest epiglottitis. The airway can close suddenly. The child stays upright with the parent to keep calm and keep the airway open. Nothing goes into the mouth, since a tongue blade or swab can trigger complete obstruction. Lying flat can let the swollen epiglottis block the airway.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "Keep the child upright with the parent", why: "An upright, calm child keeps the airway as open as possible." },
      { text: "Inspect the throat with a tongue blade", why: "Touching the throat can cause laryngospasm and complete obstruction." },
      { text: "Lay the child flat to assess breathing", why: "Lying flat can let the swollen epiglottis fall back and block the airway." },
      { text: "Collect a throat swab for culture", why: "A throat swab can trigger complete airway obstruction." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-38", {
      topic: "Weight loss in an infant with diarrhea",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 9-month-old infant has had diarrhea for 2 days. At a clinic visit last week the infant weighed 9 kg. Today the infant weighs 8.1 kg. The fontanel is sunken and there has been 1 wet diaper in 8 hours. What percentage of body weight has the infant lost?",
      rationale:
        "The infant has lost 0.9 kg from a baseline of 9 kg. Dividing the loss by the baseline weight and multiplying by 100 gives 10%. In an infant, acute weight loss mostly reflects fluid loss. A loss this large with a sunken fontanel and only 1 wet diaper in 8 hours shows significant dehydration. The infant needs prompt fluid replacement.",
      calc: { expr: "(9 - 8.1) / 9 * 100", answer: 10, unit: "%", round: 0, steps: ["9 - 8.1 = 0.9", "0.9 / 9 = 0.1", "0.1 * 100 = 10"] },
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "0.9%", why: "0.9 is the weight lost in kg. It is not a percentage of body weight." },
      { text: "10%", why: "0.9 kg lost from a baseline of 9 kg is 10% of body weight." },
      { text: "11%", why: "This divides the loss by today's weight of 8.1 kg instead of the baseline." },
      { text: "90%", why: "This is today's weight as a share of the baseline, not the amount lost." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s25-39", {
      topic: "Scoring a head injury assessment",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse assesses a client with a head injury. The eyes open only when the nurse presses on a fingernail bed. The client answers in full sentences but is wrong about the place and the year. When the nurse presses above one eye, the client raises a hand to push the nurse's hand away. Drag the score that matches each part of the Glasgow Coma Scale.",
      rationale:
        "Eyes that open only to a pressure stimulus score 2. Speech in full sentences with wrong answers about place and time is confused and scores 4. Reaching up to the site of pressure above the eye is localizing and scores 5. Opening to voice would score 3. Oriented speech would score 5. Obeying commands would score 6.",
      sources: [GCS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Eye opening", "Verbal response", "Motor response"],
    tokens: [
      { text: "Score 1", why: "A score of 1 means no response. The client responds in all three parts." },
      { text: "Score 2", why: "Eyes that open only to pressure score 2." },
      { text: "Score 3", why: "Eyes opening to voice would score 3. These open only to pressure." },
      { text: "Score 4", why: "Confused speech in full sentences scores 4 for verbal response." },
      { text: "Score 5", why: "Moving a hand to the site of pressure is localizing and scores 5 for motor response." },
      { text: "Score 6", why: "A motor score of 6 needs the client to obey commands, which is not described." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s25-40", {
      need: "MOC",
      topic: "Delegation after a stroke",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse cares for a client 2 days after an ischemic stroke with left-sided weakness. The client has had no oral intake since admission. Which task can the nurse delegate to assistive personnel?",
      rationale:
        "Measuring and recording intake and output is a routine task with a predictable result, so it can be delegated. Screening the swallow before a first meal needs nursing assessment, because aspiration after stroke is common. Teaching and assessing the response to a new drug also need the judgment of a licensed nurse. The nurse keeps accountability for the delegated task.",
      sources: [DELEGATION, STROKE, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada: "In Canada, assistive personnel are called unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
    }),
    kind: "mc",
    options: [
      { text: "Screen the swallow before a first meal", why: "Swallow screening is an assessment that stays with the licensed nurse." },
      { text: "Teach the client to use a quad cane", why: "Teaching needs a licensed nurse or therapist and is not delegated." },
      { text: "Measure and record intake and output", why: "This is a routine task with a predictable outcome that assistive personnel can do." },
      { text: "Assess the response to a new BP drug", why: "Evaluating a drug response needs nursing judgment." },
    ],
    correct: 2,
  },
];
