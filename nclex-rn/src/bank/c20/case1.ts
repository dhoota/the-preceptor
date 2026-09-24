import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c20-1";

/** Case 1. Emergency department and step-down unit. Older adult from long-term care with severe hyperglycemia. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Drowsiness in a Care Home Resident",
  intro:
    "An 83-year-old woman is brought from her long-term care home to the emergency department at 0900. Staff report 4 days of increasing drowsiness, poor intake of food and fluids, and frequent urinary incontinence. She has type 2 diabetes.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Type 2 diabetes for 15 years, treated with metformin 1000 mg by mouth twice daily.",
        "Hypertension. Mild vascular dementia. Usually oriented to person and place.",
        "Walks with a walker. Needs reminders to drink.",
        "Care home staff report a cough with yellow sputum for 5 days.",
        "Weight 58 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0900"],
        rows: [
          ["Temperature", "38.3°C (100.9°F)"],
          ["Heart rate", "118/minute"],
          ["Respiratory rate", "22/minute"],
          ["BP", "94/56 mmHg"],
          ["SpO2", "92% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 0930", "Reference range"],
        rows: [
          ["Glucose", "880 mg/dL (48.8 mmol/L)", "70 to 99 mg/dL"],
          ["Sodium", "149 mEq/L (149 mmol/L)", "135 to 145 mEq/L"],
          ["Potassium", "4.6 mEq/L (4.6 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["BUN", "52 mg/dL (18.6 mmol/L)", "7 to 20 mg/dL"],
          ["Creatinine", "1.9 mg/dL (168 micromol/L)", "0.5 to 1.1 mg/dL"],
          ["Serum osmolality", "358 mOsm/kg", "275 to 295 mOsm/kg"],
          ["Arterial pH", "7.36", "7.35 to 7.45"],
          ["Bicarbonate", "21 mEq/L (21 mmol/L)", "22 to 26 mEq/L"],
          ["Beta-hydroxybutyrate", "0.8 mmol/L", "less than 0.6 mmol/L"],
          ["WBC", "15 200/mm3", "4 500 to 11 000/mm3"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Assessment cues in severe hyperglycemia",
        cjmm: "recognize",
        difficulty: 2,
        stem: "Which parts of this 0915 bedside note, written in the emergency department for the drowsy care home resident, need follow-up by the nurse? Click to highlight them.",
        rationale:
          "Answering in single words is a change from her usual orientation to person and place. Dry mucosa, thready pulses and no urine since 0600 show a severe fluid deficit from osmotic diuresis. Crackles over the right lower lobe fit the productive cough and point to infection as the trigger. Equal pupils, full limb movement and intact skin need no follow-up now.",
        sources: [SRC.hhs, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Opens eyes to voice and answers in single words]]. [[Oral mucosa dry and sticky]]. [[Crackles over the right lower lobe]]. [[Radial pulses 1+ and thready]]. [[Moves all four limbs on request]]. [[Pupils equal and reactive to light]]. [[No urine in the brief since the 0600 change]]. [[Sacral skin intact with no redness]].",
      spans: [
        { text: "Opens eyes to voice and answers in single words", why: "She is usually oriented to person and place. This drowsiness is a change that fits rising serum osmolality." },
        { text: "Oral mucosa dry and sticky", why: "Dry, sticky mucosa reflects the water lost through osmotic diuresis." },
        { text: "Crackles over the right lower lobe", why: "Crackles over one lobe with a productive cough suggest pneumonia as the trigger." },
        { text: "Radial pulses 1+ and thready", why: "Weak, thready pulses show a low circulating volume." },
        { text: "Moves all four limbs on request", why: "Moving all limbs on request shows no new focal weakness." },
        { text: "Pupils equal and reactive to light", why: "Equal, reactive pupils need no follow-up now." },
        { text: "No urine in the brief since the 0600 change", why: "No urine output since 0600 points to reduced kidney perfusion after days of fluid loss." },
        { text: "Sacral skin intact with no redness", why: "Intact sacral skin is expected and needs routine checks only." },
      ],
      correct: [0, 1, 2, 3, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Linking findings to cause in severe hyperglycemia",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse links the admission findings to their likely cause. For each finding, specify whether it reflects fluid loss from osmotic diuresis or the likely precipitating infection.",
        rationale:
          "A glucose of 880 mg/dL (48.8 mmol/L) spills into the urine and pulls water with it. The water loss concentrates the sodium to 149 mEq/L and raises the BUN to 52 mg/dL. A fever of 38.3°C, a WBC of 15 200/mm3 and a productive cough point to infection. Infection is the most common trigger of hyperosmolar hyperglycemic state.",
        sources: [SRC.hhs, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report SI units only and report urea rather than BUN. Her glucose reads 48.8 mmol/L and her urea 18.6 mmol/L, well above the Medical Council of Canada urea range of 2.1 to 8.0 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Fluid loss from osmotic diuresis", "Precipitating infection"],
      rows: [
        { text: "Temperature 38.3°C (100.9°F)", correct: [1], why: "Fever points to infection, the most common trigger of this crisis." },
        { text: "Sodium 149 mEq/L (149 mmol/L)", correct: [0], why: "Osmotic diuresis loses more water than sodium, which concentrates the serum sodium." },
        { text: "Cough with yellow sputum for 5 days", correct: [1], why: "A productive cough suggests a chest infection as the trigger." },
        { text: "BUN 52 mg/dL (18.6 mmol/L)", correct: [0], why: "BUN rises when a low blood volume reduces kidney perfusion." },
        { text: "WBC 15 200/mm3", correct: [1], why: "A raised white cell count supports a bacterial infection." },
        { text: "Dry and sticky oral mucosa", correct: [0], why: "Dry mucosa reflects the water lost in the urine." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority risk in severe hyperglycemia",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0945 the client's BP is 88/52 mmHg and her heart rate is 124/minute. Her hands and feet are cool. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Days of osmotic diuresis have drained her circulating volume. The BP has fallen to 88/52 mmHg and the heart rate has risen to 124/minute. Cool hands and feet show blood shunted to vital organs. These are signs of hypovolemic shock. The fever and SpO2 of 92% reflect infection. The pH and potassium are within range.",
        sources: [SRC.hhs, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at greatest risk for {0} as shown by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "hypovolemic shock", why: "Falling BP, rising heart rate and cool limbs after days of osmotic diuresis show failing circulation from volume loss." },
            { text: "cerebral edema", why: "Cerebral edema is linked to lowering osmolality too fast during treatment. It does not explain the falling BP." },
            { text: "hypoglycemia", why: "Her glucose is 880 mg/dL (48.8 mmol/L), far above the normal range." },
            { text: "fluid volume excess", why: "She has lost fluid through the urine. Nothing in the chart shows retained fluid." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "an SpO2 of 92%", why: "An SpO2 of 92% reflects the chest infection, not volume loss." },
            { text: "a pH of 7.36", why: "A pH of 7.36 is within range and shows no significant acidosis." },
            { text: "a BP of 88/52 mmHg", why: "The BP has fallen from 94/56 mmHg to 88/52 mmHg as volume drops." },
            { text: "a potassium of 4.6 mEq/L", why: "A potassium of 4.6 mEq/L is within the reference range." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a temperature of 38.3°C", why: "Fever signals infection but does not by itself show circulatory failure." },
            { text: "a bicarbonate of 21 mEq/L", why: "A bicarbonate of 21 mEq/L is only slightly low and does not signal shock." },
            { text: "a glucose of 880 mg/dL", why: "The glucose drives the fluid loss but does not measure circulation." },
            { text: "a heart rate of 124/minute", why: "The heart rate has risen from 118 to 124/minute to make up for low volume." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety plan for a drowsy older adult",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client is admitted to the step-down unit at 1200. She is drowsy but rouses to voice and has a productive cough. Which measures should the nurse include in her safety plan? Select all that apply.",
        rationale:
          "Drowsiness and a productive cough raise the risk of aspiration. The head of the bed stays at 30 degrees or higher. Oral fluids wait for a passed swallow screen. A low bed with the call light in reach lowers fall injury. Restraints and four raised rails add injury risk. Thin fluids by straw raise aspiration risk.",
        sources: [SRC.falls, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Keep the head of the bed at 30 degrees or higher", why: "Raising the head of the bed lowers the risk of aspiration in a drowsy client." },
        { text: "Apply soft wrist restraints to protect the IV", why: "Restraints raise the risk of injury and delirium. Less restrictive measures come first." },
        { text: "Set the bed low with the call light in reach", why: "A low bed and a reachable call light reduce fall injury in a drowsy older adult." },
        { text: "Raise all four side rails", why: "Four raised rails act as a restraint and raise the risk of climbing falls and entrapment." },
        { text: "Hold oral fluids until a swallow screen is passed", why: "Drowsiness can impair swallowing, so a screen comes before oral intake." },
        { text: "Offer thin fluids through a straw as she wishes", why: "Thin fluids through a straw raise aspiration risk before her swallow is checked." },
      ],
      correct: [0, 2, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based insulin infusion rate",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The primary health care provider prescribes a regular insulin infusion at 0.05 units/kg/hour. The client weighs 58 kg. The pharmacy supplies regular insulin 100 units in 100 mL of 0.9% sodium chloride. At what rate should the nurse set the infusion pump?",
        rationale:
          "The dose is 0.05 units/kg/hour for 58 kg, which is 2.9 units/hour. The bag holds 100 units in 100 mL, so each mL holds 1 unit. The pump runs at 2.9 mL/hour. Her potassium of 4.6 mEq/L is above the level at which insulin is delayed. Insulin is a high-alert medication, so a second nurse checks the rate.",
        refs: ["Insulin is delayed when serum potassium is below 3.5 mEq/L (3.5 mmol/L)."],
        calc: { expr: "0.05 * 58 / (100 / 100)", answer: 2.9, unit: "mL/hour", round: 1, steps: ["0.05 * 58 = 2.9", "100 / 100 = 1", "2.9 / 1 = 2.9"] },
        sources: [SRC.hhs, SRC.ismp, { body: "Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15" }],
        canada: "Diabetes Canada withholds insulin only while potassium is below 3.3 mmol/L, a little lower than the 3.5 mmol/L used here. Her potassium of 4.6 mmol/L is above both, so the key stands.",
      }),
      kind: "mc",
      options: [
        { text: "0.3 mL/hour", why: "This is about one tenth of the correct rate. It comes from a decimal error." },
        { text: "2.9 mL/hour", why: "58 kg times 0.05 units/kg/hour is 2.9 units/hour. At 1 unit/mL the rate is 2.9 mL/hour." },
        { text: "5.8 mL/hour", why: "This rate gives double the prescribed dose of insulin." },
        { text: "29 mL/hour", why: "This is 10 times the correct rate and could cause severe hypoglycemia." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Preventing a repeat hyperglycemic crisis",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On day 4 the client is alert and oriented to person and place. Her glucose is 186 mg/dL (10.3 mmol/L). The nurse teaches her daughter before the return to the care home. For each statement by the daughter, specify whether it shows understanding or needs further teaching.",
        rationale:
          "Infection and poor fluid intake set off this crisis. Older adults sense thirst poorly, so staff offer fluids on a schedule. Glucose checks continue and increase during illness. New confusion, more urine than usual or signs of infection need same-day review. Waiting for thirst or a routine visit delays care.",
        sources: [SRC.hhs],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I will ask staff to offer her a drink at each visit to her room.\"", correct: [0], why: "Scheduled drinks make up for the weak thirst of older adults." },
        { text: "\"Her thirst will tell staff when she needs more fluid.\"", correct: [1], why: "Thirst sensing declines with age, so she may not ask for fluid." },
        { text: "\"Staff should check her glucose more often when she is ill.\"", correct: [0], why: "Illness raises glucose, so closer checks catch a rise early." },
        { text: "\"Her glucose checks can stop now that her levels are better.\"", correct: [1], why: "Ongoing checks are needed to catch a new rise before a crisis." },
        { text: "\"New confusion or passing more urine should be reported that day.\"", correct: [0], why: "Confusion and polyuria are early signs of rising glucose and osmolality." },
        { text: "\"A cough with fever can wait until her next routine visit.\"", correct: [1], why: "Infection is the most common trigger, so it needs prompt review." },
      ],
    },
  ],
};
