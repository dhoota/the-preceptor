import type { Item } from "@/engine/types";
import { ALS, BRADY, HINKLE, HYPERNA, OXYGEN, PERI, PLEURA, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s23-41", {
      topic: "Trend during correction of high sodium",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "An 88-year-old client from a long-term care facility was admitted with high sodium and confusion. Hypotonic IV fluid was started at 0800 on day 1. The nurse reviews the flow sheet. For each finding, specify whether it has improved, worsened or not changed since admission.",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Finding", "Day 1 0800", "Day 1 2000", "Day 2 0800"],
            rows: [
              ["Serum sodium (mEq/L)", "162", "157", "152"],
              ["Orientation", "Self only", "Self and place", "Person, place and time"],
              ["Heart rate (/minute)", "112", "98", "86"],
              ["Lung sounds", "Clear", "Clear", "Fine crackles at both bases"],
              ["Mucous membranes", "Dry and sticky", "Dry", "Moist"],
              ["Serum potassium (mEq/L)", "4.1", "4.0", "4.1"],
            ],
          },
        },
      ],
      rationale:
        "Sodium falls from 162 to 152 mEq/L over 24 hours, which is improvement at a safe pace. Orientation returns and the heart rate falls from 112 to 86/minute as volume is restored. Moist membranes show better hydration. New fine crackles at both bases show the lungs are receiving more fluid than the client can handle. The nurse reports this. Potassium stays steady at 4.0 to 4.1 mEq/L.",
      refs: ["In chronic hypernatremia, serum sodium is lowered by no more than 10 mEq/L (10 mmol/L) in 24 hours to avoid brain swelling."],
      sources: [HYPERNA, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report sodium and potassium in mmol/L only, with the same numbers as in mEq/L. The Medical Council of Canada lists sodium as 136 to 146 mmol/L, so 152 mmol/L is still high."
    }),
    kind: "matrix",
    mode: "single",
    columns: ["Improved", "Worsened", "No change"],
    rows: [
      { text: "Serum sodium", correct: [0], why: "Sodium has fallen from 162 to 152 mEq/L within the safe daily limit." },
      { text: "Orientation", correct: [0], why: "The client is now oriented to person, place and time." },
      { text: "Heart rate", correct: [0], why: "The heart rate has fallen from 112 to 86/minute as volume returns." },
      { text: "Lung sounds", correct: [1], why: "New crackles at both bases suggest fluid is building up in the lungs." },
      { text: "Mucous membranes", correct: [0], why: "Moist membranes show the water deficit is being corrected." },
      { text: "Serum potassium", correct: [2], why: "Potassium has stayed between 4.0 and 4.1 mEq/L." },
    ],
  },
  {
    ...meta("rn-s23-42", {
      topic: "Electrolyte changes on the ECG",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews rhythm strips for three clients with electrolyte imbalances. Match each imbalance to the ECG change it most often causes.",
      rationale:
        "Low potassium slows ventricular repolarization and produces prominent U waves. High potassium speeds repolarization and makes T waves tall and peaked. Low calcium lengthens the plateau phase of the action potential, which prolongs the QT interval. A delta wave marks an accessory conduction pathway. Sawtooth waves mark atrial flutter.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Low potassium", "High potassium", "Low calcium"],
    tokens: [
      { text: "Tall, peaked T waves", why: "High potassium speeds repolarization and peaks the T waves." },
      { text: "Prolonged QT interval", why: "Low calcium lengthens the plateau phase and prolongs the QT interval." },
      { text: "Prominent U waves", why: "Low potassium delays repolarization and makes U waves prominent." },
      { text: "Delta wave before the QRS", why: "A delta wave shows an accessory pathway, not an electrolyte problem." },
      { text: "Sawtooth flutter waves", why: "Sawtooth waves show atrial flutter, not an electrolyte problem." },
    ],
    correct: [2, 0, 1],
  },
  {
    ...meta("rn-s23-43", {
      topic: "New restlessness after surgery",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 45-year-old client is 6 hours out from abdominal surgery. The client has become restless and keeps trying to climb out of bed. The client was calm an hour ago. SpO2 is 87%. Which cause should the nurse consider first?",
      rationale:
        "New restlessness is an early sign of hypoxia because the brain is sensitive to low oxygen. An SpO2 of 87% confirms it. Anxiety, a full bladder or a strange setting can also cause agitation. They are considered after hypoxia is ruled out, because missed hypoxia can be fatal.",
      refs: ["The SpO2 target for most acutely ill adults is 94% to 98%."],
      sources: [OXYGEN, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Anxiety about the surgery", why: "Anxiety is considered only after low oxygen is ruled out." },
      { text: "Need to use the toilet", why: "A full bladder can cause restlessness, but the SpO2 of 87% points to hypoxia." },
      { text: "Reaction to the hospital setting", why: "A strange setting can cause agitation, but hypoxia is more dangerous and is present." },
      { text: "Low blood oxygen", why: "Restlessness with an SpO2 of 87% is an early sign of hypoxia." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-44", {
      topic: "Signs a chest tube is working",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client had a chest tube placed 12 hours ago for a right pneumothorax. The drainage system is on water seal. Which findings show that the lung is re-expanding? Select all that apply.",
      rationale:
        "As air leaves the pleural space, the lung re-expands against the chest wall. Breath sounds return, both sides move equally and oxygenation improves. SpO2 rising from 90% to 97% and a rate falling from 28 to 18/minute show easier breathing. Continuous bubbling in water seal signals an air leak. Spreading crackling under the skin and a tracheal shift are warning signs.",
      sources: [PLEURA, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Breath sounds heard at the right apex", why: "Returning breath sounds show the lung is filling with air again." },
      { text: "Continuous bubbling in the water seal chamber", why: "Continuous bubbling signals an air leak in the client or the system." },
      { text: "SpO2 up from 90% to 97%", why: "Better oxygenation follows re-expansion of the lung." },
      { text: "Crackling under the skin spreading up the neck", why: "Spreading subcutaneous air is a warning sign of a leak." },
      { text: "Respiratory rate down from 28 to 18/minute", why: "A slower rate shows the work of breathing has eased." },
      { text: "Trachea shifting to the left", why: "A tracheal shift away from the tube side suggests tension, not recovery." },
      { text: "Symmetric chest expansion", why: "Equal movement shows the right lung is expanding again." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s23-45", {
      topic: "Baseline blood gas in stable COPD",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 70-year-old client with severe COPD is seen in clinic for a routine visit and feels at baseline. Arterial blood gas results are pH 7.36, PaCO2 58 mmHg and HCO3 32 mEq/L (32 mmol/L). How should the nurse interpret these results?",
      rationale:
        "The PaCO2 of 58 mmHg is high from chronic carbon dioxide retention. Over time the kidneys hold bicarbonate, so HCO3 rises to 32 mEq/L. The pH of 7.36 is within the normal range, so compensation is full. It sits on the acid side of 7.40, which points to acidosis as the primary process. This fits stable COPD.",
      refs: ["Normal arterial values are pH 7.35 to 7.45 with a midpoint of 7.40, PaCO2 35 to 45 mmHg and HCO3 22 to 26 mEq/L (22 to 26 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Fully compensated respiratory acidosis", why: "High PaCO2, high HCO3 and a normal pH on the acid side show full compensation." },
      { text: "Partially compensated respiratory acidosis", why: "Partial compensation leaves the pH below 7.35. Here it is 7.36." },
      { text: "Fully compensated metabolic alkalosis", why: "The pH is on the acid side of 7.40, and COPD points to a respiratory cause." },
      { text: "Uncompensated respiratory acidosis", why: "The HCO3 of 32 mEq/L shows the kidneys have compensated." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s23-46", {
      topic: "Fluid deficit after days of diarrhea",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 79-year-old client has had diarrhea for 4 days. Which findings would indicate fluid volume deficit? Select all that apply.",
      rationale:
        "Four days of diarrhea remove water and electrolytes. Low volume makes the pulse rise on standing as the heart compensates. Mucous membranes dry out. Rapid weight loss reflects fluid loss. Older adults often become confused when perfusion falls. Distended neck veins, bounding pulses and crackles are signs of fluid excess.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Pulse rises on standing", why: "The heart speeds up to maintain output when volume is low." },
      { text: "Distended neck veins", why: "Distended neck veins show high venous volume, a sign of excess." },
      { text: "Dry, sticky mucous membranes", why: "Low body water dries the mucous membranes." },
      { text: "Bounding peripheral pulses", why: "Bounding pulses reflect a high circulating volume." },
      { text: "Weight loss of 2 kg in 4 days", why: "Rapid weight loss reflects fluid loss." },
      { text: "New confusion", why: "Low volume reduces brain perfusion, and older adults often become confused." },
      { text: "Crackles in the lung bases", why: "Crackles reflect fluid in the alveoli, a sign of excess." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s23-47", {
      topic: "Air entering an open central line",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse finds the cap off a client's internal jugular central line with the lumen open to air. The client suddenly reports chest pain and breathlessness. SpO2 falls to 84% and BP is 82/50 mmHg. After clamping the catheter, what should the nurse do next?",
      rationale:
        "Sudden chest pain, breathlessness, SpO2 of 84% and BP of 82/50 mmHg after a line was open to air suggest air embolism. Clamping stops more air from entering. Turning onto the left side with the head down helps trap air in the right atrium, away from the pulmonary outflow. The nurse then gives oxygen and calls for help. Flushing can push in more air. Pulling the line opens another path for air.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Sit the client upright in high Fowler position", why: "Sitting upright lets air travel toward the brain and pulmonary outflow." },
      { text: "Turn onto the left side with the head down", why: "This position helps trap air in the right atrium away from the pulmonary artery." },
      { text: "Flush the line with 10 mL of saline", why: "Flushing can push more air into the circulation." },
      { text: "Remove the central line at once", why: "Pulling the line opens another path for air to enter." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s23-48", {
      topic: "Fast wide rhythm with low BP",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client's monitor shows a regular wide-complex tachycardia at 180/minute. The client has a pulse but is confused and pale. BP is 72/40 mmHg. Which intervention should the nurse prepare for?",
      rationale:
        "A wide-complex tachycardia at 180/minute with a pulse, confusion and BP of 72/40 mmHg is unstable ventricular tachycardia. Unstable tachycardia with a pulse is treated with synchronized cardioversion. Synchronizing times the shock away from the T wave, which lowers the risk of causing ventricular fibrillation. Unsynchronized shocks are for pulseless rhythms. Pacing treats slow rhythms.",
      sources: [ALS],
    }),
    kind: "mc",
    options: [
      { text: "Unsynchronized defibrillation", why: "Unsynchronized shocks are for pulseless rhythms. This client has a pulse." },
      { text: "Carotid sinus massage", why: "Vagal maneuvers do not treat unstable ventricular tachycardia." },
      { text: "Transcutaneous pacing", why: "Pacing treats slow rhythms, not a rate of 180/minute." },
      { text: "Synchronized cardioversion", why: "An unstable tachycardia with a pulse needs a shock timed to the QRS." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-49", {
      topic: "First-line treatment of pericarditis",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 41-year-old client is diagnosed with acute idiopathic pericarditis. There is no pericardial effusion and vital signs are stable. Which two prescriptions should the nurse expect as first-line treatment? Select two.",
      rationale:
        "First-line therapy for acute pericarditis is aspirin or an NSAID plus colchicine. Colchicine speeds recovery and lowers the chance of recurrence. Anticoagulants raise the risk of bleeding into the pericardium. Pericardiocentesis is for tamponade or a large effusion, and this client has none. Antibiotics are for bacterial pericarditis. Strenuous exercise is limited, but strict bed rest is not required.",
      sources: [PERI],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "An NSAID such as ibuprofen", why: "An NSAID or aspirin treats the inflammation and pain." },
      { text: "A heparin infusion", why: "Anticoagulation raises the risk of bleeding into the pericardium." },
      { text: "Colchicine by mouth", why: "Colchicine with an NSAID speeds recovery and lowers recurrence." },
      { text: "Warfarin by mouth", why: "Anticoagulation is not a treatment for pericarditis and adds bleeding risk." },
      { text: "Emergency pericardiocentesis", why: "Drainage is for tamponade or a large effusion. There is no effusion." },
      { text: "IV antibiotics", why: "Antibiotics treat bacterial pericarditis, not idiopathic disease." },
      { text: "Strict bed rest for 6 weeks", why: "Strenuous exercise is limited, but strict bed rest is not needed." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s23-50", {
      topic: "Confirming capture during external pacing",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with symptomatic bradycardia at 38/minute is started on transcutaneous pacing at a rate of 70/minute. The monitor shows a pacing spike before each wide QRS complex. Which finding best confirms mechanical capture?",
      rationale:
        "A spike followed by a wide QRS shows electrical capture. Mechanical capture means the heart contracts with each paced beat. A palpable pulse at the paced rate of 70/minute confirms it. The femoral pulse is used because pacing makes chest and neck muscles jerk, which can be mistaken for a carotid pulse. Discomfort is expected with pacing.",
      sources: [ALS, BRADY],
    }),
    kind: "mc",
    options: [
      { text: "Pacing spikes appear on the monitor", why: "Spikes show the pacer is firing, not that the heart is contracting." },
      { text: "The client's arm muscles twitch", why: "Muscle twitching comes from skeletal stimulation, not cardiac contraction." },
      { text: "A femoral pulse at 70/minute", why: "A pulse matching the paced rate shows the heart is pumping with each beat." },
      { text: "The client reports chest discomfort", why: "Discomfort is an expected effect of pacing current, not a sign of capture." },
    ],
    correct: 2,
  },
];
