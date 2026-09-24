import type { Item } from "@/engine/types";
import { HF, HINKLE, OXYGEN, BLS, SEPSIS, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s23-01", {
      topic: "Magnesium excess in kidney disease",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 68-year-old client with chronic kidney disease has taken a magnesium-based antacid several times a day for 2 weeks. Serum magnesium is 4.6 mEq/L (2.3 mmol/L). Which finding should the nurse expect?",
      rationale:
        "The kidneys excrete magnesium. With chronic kidney disease, a magnesium antacid lets it build up. A level of 4.6 mEq/L is above the normal range. Excess magnesium blocks impulses at the neuromuscular junction, so reflexes weaken. Hyperactive reflexes and a positive Trousseau sign go with low magnesium. High magnesium slows cardiac conduction rather than speeding the heart.",
      refs: ["Normal serum magnesium is 1.3 to 2.3 mEq/L (0.65 to 1.15 mmol/L)."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report magnesium in mmol/L only. The Medical Council of Canada lists 0.74 to 1.03 mmol/L, so 2.3 mmol/L is clearly high."
    }),
    kind: "mc",
    options: [
      { text: "Hyperactive deep tendon reflexes", why: "Hyperactive reflexes go with low magnesium. High magnesium depresses nerve and muscle activity." },
      { text: "Diminished patellar reflexes", why: "Excess magnesium blocks neuromuscular transmission, so deep tendon reflexes weaken." },
      { text: "Positive Trousseau sign", why: "Carpal spasm with a BP cuff points to low calcium or low magnesium." },
      { text: "Heart rate of 118/minute", why: "High magnesium slows conduction and tends to lower the heart rate." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s23-02", {
      topic: "Findings of right ventricular failure",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 71-year-old client has heart failure caused by long-standing pulmonary hypertension. The right ventricle is failing and the left ventricle is working normally. Which findings are consistent with this type of failure? Select all that apply.",
      rationale:
        "A failing right ventricle cannot move blood forward into the lungs. Blood backs up into the systemic veins and raises jugular venous pressure. Congestion enlarges the liver and makes it tender. Fluid leaks into dependent tissue and the peritoneal space, causing ankle edema and ascites. Crackles, orthopnea and frothy sputum come from pulmonary congestion, which follows left ventricular failure.",
      sources: [HINKLE, HF],
    }),
    kind: "sata",
    options: [
      { text: "Crackles in both lung bases", why: "Crackles reflect fluid in the alveoli from left ventricular failure." },
      { text: "Distended jugular veins", why: "Blood backing up behind the right ventricle raises jugular venous pressure." },
      { text: "Pitting edema of both ankles", why: "Systemic venous congestion pushes fluid into dependent tissue." },
      { text: "Orthopnea when lying flat", why: "Orthopnea comes from pulmonary congestion, a sign of left ventricular failure." },
      { text: "Enlarged, tender liver", why: "Venous congestion swells the liver and stretches its capsule." },
      { text: "Pink frothy sputum", why: "Frothy sputum signals pulmonary edema from left ventricular failure." },
      { text: "Abdominal distension from ascites", why: "High portal and systemic venous pressure pushes fluid into the peritoneal space." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s23-03", {
      topic: "Blood gas after days of diarrhea",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 45-year-old client has had profuse watery diarrhea for 3 days. Arterial blood gas results are pH 7.29, PaCO2 30 mmHg and HCO3 15 mEq/L (15 mmol/L). How should the nurse interpret these results?",
      rationale:
        "A pH of 7.29 is acidic. The HCO3 of 15 mEq/L is low and matches the acidosis, so the cause is metabolic. Diarrhea drains bicarbonate from the lower bowel. The PaCO2 of 30 mmHg is low because the lungs blow off carbon dioxide to compensate. The pH is still below 7.35, so compensation is partial.",
      refs: ["Normal arterial values are pH 7.35 to 7.45, PaCO2 35 to 45 mmHg and HCO3 22 to 26 mEq/L (22 to 26 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Uncompensated respiratory acidosis", why: "A PaCO2 of 30 mmHg is low, so the lungs are not causing the acidosis." },
      { text: "Partially compensated metabolic alkalosis", why: "A pH of 7.29 is acidic and the HCO3 is low, so this is not alkalosis." },
      { text: "Partially compensated metabolic acidosis", why: "Low pH and low HCO3 show metabolic acidosis. The low PaCO2 shows partial compensation." },
      { text: "Fully compensated metabolic acidosis", why: "Full compensation would bring the pH back to 7.35 to 7.45. It is still 7.29." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s23-04", {
      topic: "First treatment for severe high potassium",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with acute kidney injury has a serum potassium of 7.1 mEq/L (7.1 mmol/L). The cardiac monitor shows tall peaked T waves and a widening QRS complex. The primary health care provider writes several prescriptions. Which should the nurse carry out first?",
      rationale:
        "A potassium of 7.1 mEq/L with peaked T waves and a widening QRS threatens a lethal dysrhythmia. IV calcium stabilizes the cardiac cell membrane within minutes. It does not lower the potassium. Insulin with dextrose then shifts potassium into cells. A binder removes potassium over hours. Repeating the level delays treatment when the ECG already shows cardiac toxicity.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report potassium in mmol/L only, and the number is the same as in mEq/L. The Medical Council of Canada lists 3.5 to 5.1 mmol/L."
    }),
    kind: "mc",
    options: [
      { text: "Give an oral potassium binder", why: "A binder removes potassium from the body over hours. It does not protect the heart now." },
      { text: "Draw a repeat potassium level", why: "The ECG changes confirm danger. Waiting for a repeat level delays treatment." },
      { text: "Give insulin with dextrose IV", why: "Insulin shifts potassium into cells but does not stabilize the cardiac membrane." },
      { text: "Give calcium gluconate IV", why: "IV calcium stabilizes the cardiac membrane within minutes and protects against a lethal rhythm." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-05", {
      topic: "Mean arterial pressure in septic shock",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with septic shock has received 3 L of IV crystalloid and now has a norepinephrine infusion. The prescription is to titrate the infusion to keep the mean arterial pressure at 65 mmHg or higher. BP is 86/50 mmHg. What is the client's mean arterial pressure?",
      rationale:
        "Mean arterial pressure counts the diastolic value twice because the heart spends about two thirds of each cycle in diastole. Adding 86 + 50 + 50 gives 186. Dividing by 3 gives 62 mmHg. This is below the target of 65 mmHg, so the nurse titrates the norepinephrine up as prescribed.",
      calc: { expr: "(86 + 50 + 50) / 3", answer: 62, unit: "mmHg", round: 0, steps: ["86 + 50 + 50 = 186", "186 / 3 = 62"] },
      sources: [SEPSIS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "36 mmHg", why: "36 mmHg is the pulse pressure, the systolic value minus the diastolic value." },
      { text: "62 mmHg", why: "Counting the diastolic value twice gives 186, and 186 divided by 3 is 62 mmHg." },
      { text: "68 mmHg", why: "68 mmHg is the simple average of 86 and 50. It overweights systole." },
      { text: "74 mmHg", why: "74 mmHg counts the systolic value twice instead of the diastolic value." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s23-06", {
      topic: "Matching blood gases to their meaning",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse reviews arterial blood gas results for four clients on a medical unit. Match each result to its interpretation.",
      rationale:
        "Start with the pH, then find the value that matches it. A pH of 7.30 with PaCO2 58 mmHg is respiratory acidosis, and HCO3 25 mEq/L shows no compensation. A pH of 7.51 with PaCO2 29 mmHg is respiratory alkalosis with a normal HCO3. A pH of 7.27 with HCO3 16 mEq/L is metabolic acidosis with a normal PaCO2. A pH of 7.48 with HCO3 35 mEq/L is metabolic alkalosis, and PaCO2 49 mmHg shows partial compensation.",
      refs: ["Normal arterial values are pH 7.35 to 7.45, PaCO2 35 to 45 mmHg and HCO3 22 to 26 mEq/L (22 to 26 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["pH 7.30, PaCO2 58 mmHg, HCO3 25 mEq/L", "pH 7.51, PaCO2 29 mmHg, HCO3 23 mEq/L", "pH 7.27, PaCO2 39 mmHg, HCO3 16 mEq/L", "pH 7.48, PaCO2 49 mmHg, HCO3 35 mEq/L"],
    tokens: [
      { text: "Uncompensated metabolic acidosis", why: "pH 7.27 with HCO3 16 mEq/L is metabolic acidosis. A PaCO2 of 39 mmHg shows no compensation yet." },
      { text: "Partially compensated metabolic alkalosis", why: "pH 7.48 with HCO3 35 mEq/L is metabolic alkalosis. PaCO2 49 mmHg shows the lungs retaining acid." },
      { text: "Uncompensated respiratory acidosis", why: "pH 7.30 with PaCO2 58 mmHg is respiratory acidosis. HCO3 25 mEq/L is still normal." },
      { text: "Fully compensated respiratory acidosis", why: "Full compensation returns the pH to 7.35 to 7.45. None of these results has a normal pH." },
      { text: "Uncompensated respiratory alkalosis", why: "pH 7.51 with PaCO2 29 mmHg is respiratory alkalosis. HCO3 23 mEq/L is still normal." },
      { text: "Partially compensated respiratory acidosis", why: "The result with a high PaCO2 has a normal HCO3 of 25 mEq/L, so compensation has not begun." },
    ],
    correct: [2, 4, 0, 1],
  },
  {
    ...meta("rn-s23-07", {
      topic: "Drowsiness after high-flow oxygen in COPD",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 74-year-old client with COPD is admitted with an exacerbation. Oxygen was started at 6 L/minute by nasal cannula in the ambulance. SpO2 is now 99%. The client has become hard to rouse. PaCO2 has risen from 52 to 71 mmHg in 2 hours. Which problem is most likely causing the change?",
      rationale:
        "Some clients with COPD retain carbon dioxide. Oxygen that pushes SpO2 to 99% worsens ventilation and perfusion mismatch and can blunt the drive to breathe. PaCO2 rises from 52 to 71 mmHg and the client becomes drowsy. The target for clients at risk of hypercapnia is 88% to 92%. An SpO2 of 99% rules out hypoxemia as the cause.",
      refs: ["Target SpO2 for adults at risk of hypercapnic respiratory failure is 88% to 92%."],
      sources: [OXYGEN],
      canada: "",
    }),
    kind: "mc",
    options: [
      { text: "Hypercapnia worsened by excess oxygen", why: "Rising PaCO2 with SpO2 of 99% on high-flow oxygen fits oxygen-induced hypercapnia." },
      { text: "Hypoxemia from worsening airflow limitation", why: "SpO2 is 99%, so the drowsiness is not from low oxygen." },
      { text: "Hypoglycemia from poor oral intake", why: "The stem gives no low glucose, and the rising PaCO2 explains the drowsiness." },
      { text: "Sedation from an inhaled bronchodilator", why: "Inhaled bronchodilators cause tremor and a fast pulse, not sedation." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s23-08", {
      topic: "Fluid overload during IV therapy",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "An 82-year-old client with heart failure has received 2 L of IV 0.9% sodium chloride since admission for a fall. The client is now short of breath with crackles in both bases. Respiratory rate is 28/minute and SpO2 is 89%. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Crackles, a respiratory rate of 28/minute and SpO2 of 89% after 2 L of IV fluid point to fluid volume excess. Older adults with heart failure tolerate volume poorly. Slowing the infusion stops adding volume. Sitting upright eases breathing. Oxygen treats the hypoxemia. The provider needs to know so a diuretic can be considered. Lying flat with legs raised returns more blood to the heart. Extra water adds to the overload.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Raise the head of the bed", why: "Sitting upright lowers venous return and lets the lungs expand." },
      { text: "Collect a sputum specimen for culture", why: "The crackles come from fluid overload, not infection. A culture does not treat the problem." },
      { text: "Slow the infusion to a keep-open rate", why: "Slowing the infusion stops further volume from reaching the lungs." },
      { text: "Place the client flat with legs raised", why: "This position returns more blood to the heart and worsens congestion." },
      { text: "Apply oxygen as prescribed", why: "Oxygen treats the SpO2 of 89%." },
      { text: "Notify the primary health care provider", why: "The provider can review the fluid plan and consider a diuretic." },
      { text: "Encourage the client to drink more water", why: "More fluid adds to the volume excess." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s23-09", {
      topic: "Severe choking in a conscious adult",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 58-year-old client in the dining room suddenly clutches the throat while eating. The client cannot speak or cough and is becoming dusky. The client is still conscious. What should the nurse do first?",
      rationale:
        "Inability to speak or cough with a dusky color means severe airway obstruction. Current adult guidelines advise cycles of 5 back blows and 5 abdominal thrusts, starting with back blows, for a conscious adult. Coughing helps only in mild obstruction. A blind finger sweep can push the object deeper. Compressions begin if the client becomes unresponsive.",
      sources: [BLS],
    }),
    kind: "mc",
    options: [
      { text: "Urge the client to cough hard", why: "The client cannot cough, so the obstruction is severe and coughing will not clear it." },
      { text: "Sweep the mouth with a finger", why: "A blind finger sweep can push the object deeper into the airway." },
      { text: "Give 5 firm back blows", why: "Back blows start the cycle of back blows and abdominal thrusts for severe choking." },
      { text: "Begin chest compressions", why: "Compressions start only if the client becomes unresponsive." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s23-10", {
      topic: "Home fluid management in heart failure",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client with heart failure about managing fluid at home. Which two statements by the client show understanding? Select two.",
      rationale:
        "Daily weights at the same time each morning show fluid gain before edema or breathlessness appear. Sodium restriction limits fluid retention, and canned soups are high in sodium. A diuretic at bedtime causes night voiding and falls. Stopping a diuretic when symptoms ease lets fluid build up again. Sleeping flat worsens breathlessness. Weight gain and new breathlessness are reported without waiting for chest pain.",
      sources: [HF, HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will take my water pill at bedtime.\"", why: "A bedtime diuretic causes night voiding, poor sleep and falls." },
      { text: "\"I will weigh myself each morning after I urinate.\"", why: "Same-time daily weights detect fluid gain early." },
      { text: "\"I will skip my water pill if my ankles look better.\"", why: "Stopping the diuretic lets fluid build up again." },
      { text: "\"I will pick low-sodium foods over canned soups.\"", why: "Less sodium means less fluid retention." },
      { text: "\"I will sleep flat to help my heart rest.\"", why: "Lying flat increases venous return and worsens breathlessness." },
      { text: "\"I will call only when I have chest pain.\"", why: "Weight gain and new breathlessness need a call before chest pain appears." },
    ],
    correct: [1, 3],
  },
];
