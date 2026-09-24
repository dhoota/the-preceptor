import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c01-1";

/** Case 1. Medical unit. Older adult with worsening dyspnea and edema. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Breathlessness on the Medical Unit",
  intro:
    "A 74-year-old man is admitted to the medical unit from the emergency department at 1900. He reports 3 days of worsening shortness of breath and swelling in both ankles. He sleeps sitting in a recliner.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Heart failure with reduced ejection fraction. Ejection fraction 30% on an echocardiogram 6 months ago.",
        "Hypertension for 20 years. Type 2 diabetes.",
        "Home medications: furosemide 40 mg by mouth daily, carvedilol 12.5 mg by mouth twice daily, lisinopril 10 mg by mouth daily, metformin 500 mg by mouth twice daily.",
        "Has eaten canned soup and deli meat most days since family visited last week.",
        "Weight at a clinic visit 2 weeks ago was 81 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1900"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)"],
          ["Heart rate", "108/minute, regular"],
          ["Respiratory rate", "26/minute"],
          ["BP", "162/94 mmHg"],
          ["SpO2", "89% on room air"],
          ["Weight", "85.5 kg"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Sodium", "133 mEq/L (133 mmol/L)", "135 to 145 mEq/L"],
          ["Potassium", "3.9 mEq/L (3.9 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Creatinine", "1.4 mg/dL (124 micromol/L)", "0.6 to 1.2 mg/dL"],
          ["Glucose", "164 mg/dL (9.1 mmol/L)", "70 to 99 mg/dL"],
          ["Hemoglobin", "13.8 g/dL (138 g/L)", "13.5 to 17.5 g/dL"],
          ["B-type natriuretic peptide", "1260 pg/mL", "less than 100 pg/mL"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Signs of fluid overload in heart failure",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse completes the admission assessment at 1930 and writes the note below. Click to highlight the findings that require follow-up.",
        rationale:
          "Speaking in short phrases shows breathlessness at rest. Crackles to the midscapular level mean fluid has entered the alveoli. Distended neck veins with the head of the bed at 45 degrees reflect raised venous pressure. Pitting edema of 3+ reflects fluid held in the tissues. With a weight rise from 81 kg to 85.5 kg, these findings point to fluid overload. Orientation, warm dry skin, equal radial pulses and bowel sounds are expected.",
        sources: [SRC.hf, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Alert and oriented to person, place and time]]. [[Speaks in short phrases between breaths]]. [[Skin warm and dry]]. [[Crackles to the midscapular level in both lungs]]. [[Neck veins distended with the head of the bed at 45 degrees]]. [[Radial pulses 2+ and equal]]. [[Pitting edema 3+ in both ankles]]. [[Bowel sounds present in all quadrants]].",
      spans: [
        { text: "Alert and oriented to person, place and time", why: "Full orientation is expected and needs no follow-up." },
        { text: "Speaks in short phrases between breaths", why: "Needing breaths between short phrases shows dyspnea at rest." },
        { text: "Skin warm and dry", why: "Warm, dry skin shows adequate peripheral perfusion." },
        { text: "Crackles to the midscapular level in both lungs", why: "Crackles this high mean fluid in the alveoli from raised pulmonary pressure." },
        { text: "Neck veins distended with the head of the bed at 45 degrees", why: "Distended neck veins with the head raised reflect high venous volume." },
        { text: "Radial pulses 2+ and equal", why: "Normal, equal pulses need no follow-up." },
        { text: "Pitting edema 3+ in both ankles", why: "Deep pitting edema shows fluid retained in the tissues." },
        { text: "Bowel sounds present in all quadrants", why: "Bowel sounds in all quadrants are expected." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Interpreting heart failure laboratory data",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the history and the admission laboratory results. For each finding, specify whether it supports worsening heart failure or does not support worsening heart failure.",
        rationale:
          "A BNP of 1260 pg/mL is far above the reference limit and reflects stretched ventricles. A sodium of 133 mEq/L fits dilution from retained water. The weight rise to 85.5 kg reflects fluid gain. Salty canned soup and deli meat are a common trigger for fluid retention. The glucose reflects his diabetes. The hemoglobin and potassium are in range.",
        sources: [SRC.hf, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results in SI units only, such as sodium 133 mmol/L, glucose 9.1 mmol/L and hemoglobin 138 g/L. Reference intervals differ slightly between Canadian laboratories.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports worsening heart failure", "Does not support worsening heart failure"],
      rows: [
        { text: "BNP 1260 pg/mL", correct: [0], why: "BNP is released when the ventricles are stretched by volume and pressure." },
        { text: "Sodium 133 mEq/L (133 mmol/L)", correct: [0], why: "Retained water dilutes serum sodium in fluid overload." },
        { text: "Glucose 164 mg/dL (9.1 mmol/L)", correct: [1], why: "A raised glucose reflects his type 2 diabetes, not cardiac function." },
        { text: "Hemoglobin 13.8 g/dL (138 g/L)", correct: [1], why: "This hemoglobin is within the reference range and adds no cardiac strain." },
        { text: "Potassium 3.9 mEq/L (3.9 mmol/L)", correct: [1], why: "This potassium is within the reference range." },
        { text: "Weight 85.5 kg, up from 81 kg", correct: [0], why: "A rapid weight gain reflects retained fluid, not tissue gain." },
        { text: "Canned soup and deli meat most days", correct: [0], why: "A high sodium intake causes water retention and can trigger decompensation." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority problem in acute heart failure",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 2000 the client's SpO2 is 87% on room air and respirations are 28/minute. He says he cannot lie flat. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "An SpO2 of 87% with respirations of 28/minute shows poor oxygen exchange. Crackles to the midscapular level and breathlessness when flat point to fluid in the alveoli. Breathing problems come before other problems. Activity intolerance and anxiety threaten life less. The glucose of 164 mg/dL (9.1 mmol/L) does not explain the low SpO2.",
        sources: [SRC.hf, SRC.brunner],
      }),
      kind: "cloze",
      template: "The nurse should first address {0} related to {1}.",
      scoring: "dyad",
      blanks: [
        {
          options: [
            { text: "activity intolerance", why: "Activity intolerance is present but is not the most urgent threat." },
            { text: "impaired gas exchange", why: "An SpO2 of 87% at rest shows oxygen is not crossing into the blood." },
            { text: "ineffective coping", why: "Nothing in the chart shows a coping problem." },
            { text: "risk for falls", why: "Fall risk matters but does not threaten breathing now." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "anxiety about admission", why: "Anxiety can raise the respiratory rate but does not cause crackles or low SpO2." },
            { text: "a raised blood glucose", why: "A glucose of 164 mg/dL does not impair oxygen exchange." },
            { text: "fluid in the alveoli", why: "Alveolar fluid from raised pulmonary pressure blocks oxygen diffusion." },
            { text: "reduced mobility", why: "Reduced mobility does not explain the crackles or orthopnea." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Nursing measures for fluid overload",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans care for the first 24 hours after admission. Which nursing measures should the nurse include in the plan? Select all that apply.",
        rationale:
          "An upright position lowers venous return and lets the lungs expand. A daily weight before breakfast on the same scale tracks fluid loss. Intake and output records show the response to diuresis. Clustering care lets the client rest and lowers oxygen demand. Extra fluid adds to the overload. Lowering the head of the bed worsens orthopnea. Hourly walks raise oxygen demand while SpO2 is low.",
        sources: [SRC.hf, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Place the client in high Fowler position", why: "Sitting upright eases breathing and lowers venous return to the lungs." },
        { text: "Encourage 3 L of oral fluid daily", why: "Extra fluid adds to the volume overload shown by crackles and edema." },
        { text: "Weigh the client daily before breakfast", why: "A daily weight at the same time is the best measure of fluid change." },
        { text: "Lower the head of the bed at night", why: "Lying flatter raises venous return and worsens breathlessness." },
        { text: "Record intake and output each shift", why: "Intake and output show how the client responds to diuresis." },
        { text: "Encourage walking in the hall every hour", why: "Frequent walking raises oxygen demand while SpO2 is low." },
        { text: "Cluster care to allow rest periods", why: "Rest periods lower oxygen demand in a failing heart." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "IV furosemide volume",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The primary health care provider prescribes furosemide 60 mg IV now. The vial is labeled furosemide 10 mg/mL. How many mL should the nurse draw up?",
        tabs: [
          {
            title: "Orders",
            text: [
              "Furosemide 60 mg IV now.",
              "Oxygen by nasal cannula to keep SpO2 at 92% or higher.",
              "Daily weight before breakfast. Strict intake and output.",
              "Sodium restricted diet, 2 g daily. Fluid restriction, 1.5 L daily.",
              "Basic metabolic panel every morning.",
            ].join("\n"),
          },
        ],
        rationale:
          "The prescribed dose is 60 mg and each mL of the vial holds 10 mg. Dividing 60 mg by 10 mg/mL gives 6 mL. The label directs slow IV injection over 1 to 2 minutes. Rapid injection of high doses raises the risk of ototoxicity.",
        refs: ["Furosemide IV is injected slowly over 1 to 2 minutes."],
        calc: { expr: "60 / 10", answer: 6, unit: "mL", round: 0, steps: ["60 / 10 = 6"] },
        sources: [SRC.furosemide],
      }),
      kind: "mc",
      options: [
        { text: "0.6 mL", why: "This holds 6 mg, one tenth of the dose. It comes from a misplaced decimal." },
        { text: "3 mL", why: "This holds 30 mg, half the prescribed dose." },
        { text: "6 mL", why: "60 mg divided by 10 mg/mL gives 6 mL." },
        { text: "10 mL", why: "This treats the vial concentration as the volume to give." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Response to IV diuretic therapy",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "On the morning of day 2 the nurse evaluates the client's response to IV furosemide. For each finding, specify whether it shows an effective response or requires follow-up.",
        rationale:
          "The weight fell from 85.5 kg to 83.4 kg. Crackles are now only at the bases and SpO2 is 94% on 2 L/minute. Output exceeded intake overnight. These show the diuretic is working. A potassium of 3.2 mEq/L is below the 3.5 mEq/L limit. Loop diuretics waste potassium, which raises the risk of dysrhythmias. Dizziness with a standing BP of 98/58 mmHg suggests volume depletion.",
        sources: [SRC.hf, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report potassium only in mmol/L, so this result reads 3.2 mmol/L. Canadian lower limits are also about 3.5 mmol/L, so the finding still needs follow-up.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Effective response", "Requires follow-up"],
      rows: [
        { text: "Weight 83.4 kg", correct: [0], why: "The weight fell from 85.5 kg, which reflects fluid loss." },
        { text: "Crackles only in the lung bases", correct: [0], why: "Crackles have receded from the midscapular level." },
        { text: "Potassium 3.2 mEq/L (3.2 mmol/L)", correct: [1], why: "This is below the 3.5 mEq/L limit. Furosemide wastes potassium." },
        { text: "SpO2 94% on 2 L/minute by nasal cannula", correct: [0], why: "Oxygenation has risen from 87% on room air and meets the target." },
        { text: "Intake 900 mL and output 2400 mL overnight", correct: [0], why: "Output exceeding intake shows effective diuresis." },
        { text: "Dizzy on standing with BP 98/58 mmHg", correct: [1], why: "Orthostatic dizziness and a low BP suggest excess volume loss." },
      ],
    },
  ],
};
