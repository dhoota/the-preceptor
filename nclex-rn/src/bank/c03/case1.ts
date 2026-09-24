import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c03-1";

/** Case 1. Emergency department. Older adult with a urinary source of sepsis. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "An Older Woman Who Is Not Herself",
  intro:
    "An 81-year-old woman is brought to the emergency department at 1400 by her daughter. The daughter says her mother has been confused and sleepy since this morning. Yesterday she lived on her own, cooked and managed her own medications.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Type 2 diabetes. Hypertension.",
        "Creatinine 1.0 mg/dL (88 micromol/L) at a clinic visit 3 months ago.",
        "Home medications: metformin 500 mg by mouth twice daily, lisinopril 20 mg by mouth daily.",
        "Daughter reports her mother mentioned burning on urination for 3 days.",
        "Weight 62 kg. No known drug allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "38.7°C (101.7°F)"],
          ["Heart rate", "116/minute"],
          ["Respiratory rate", "24/minute"],
          ["BP", "86/48 mmHg"],
          ["SpO2", "93% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["White blood cells", "17 800/mm3", "4500 to 11 000/mm3"],
          ["Lactate", "4.4 mmol/L", "0.5 to 2.2 mmol/L"],
          ["Creatinine", "1.9 mg/dL (168 micromol/L)", "0.6 to 1.1 mg/dL"],
          ["Glucose", "238 mg/dL (13.2 mmol/L)", "70 to 99 mg/dL"],
          ["Sodium", "138 mEq/L (138 mmol/L)", "135 to 145 mEq/L"],
          ["Urinalysis", "Cloudy. Nitrite positive. Leukocyte esterase large.", "Clear. Nitrite and leukocyte esterase negative."],
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
        topic: "Early cues of sepsis in an older adult",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1415 the nurse completes a focused assessment and writes the note below. Click to highlight the findings that require follow-up.",
        rationale:
          "Orientation to person only is an acute change from yesterday. A capillary refill of 4 seconds and dry mucous membranes point to poor perfusion and low volume. Suprapubic tenderness and cloudy, foul-smelling urine point to a urinary source of infection. With a temperature of 38.7°C and a BP of 86/48 mmHg, these cues need prompt follow-up. Clear lungs, intact skin, equal pupils and equal limb movement are expected.",
        sources: [SRC.sepsis2021, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Oriented to person only]]. [[Lungs clear in all fields]]. [[Capillary refill 4 seconds]]. [[Skin intact over sacrum and heels]]. [[Mucous membranes dry]]. [[Pupils equal and reactive to light]]. [[Suprapubic tenderness on palpation]]. [[Moves all limbs equally]]. [[Voided a small amount of cloudy, foul-smelling urine]].",
      spans: [
        { text: "Oriented to person only", why: "She was oriented yesterday. New confusion in an older adult can be the first sign of sepsis." },
        { text: "Lungs clear in all fields", why: "Clear lungs are expected and point away from a chest source of infection." },
        { text: "Capillary refill 4 seconds", why: "A slow refill shows poor peripheral perfusion." },
        { text: "Skin intact over sacrum and heels", why: "Intact skin over pressure points needs no follow-up." },
        { text: "Mucous membranes dry", why: "Dry membranes point to a fluid deficit that worsens low BP." },
        { text: "Pupils equal and reactive to light", why: "Equal, reactive pupils are expected." },
        { text: "Suprapubic tenderness on palpation", why: "Bladder tenderness points to a urinary source of infection." },
        { text: "Moves all limbs equally", why: "Equal limb movement is expected and points away from a stroke." },
        { text: "Voided a small amount of cloudy, foul-smelling urine", why: "Cloudy, foul-smelling urine suggests infection. A small void can reflect low kidney perfusion." },
      ],
      correct: [0, 2, 4, 6, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Linking laboratory results to sepsis",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the history, the assessment and the laboratory results. For each finding, specify whether it suggests a urinary source of infection or poor organ perfusion.",
        rationale:
          "A positive nitrite, large leukocyte esterase and burning on urination point to the urinary tract as the source. A lactate of 4.4 mmol/L shows tissue that is short of oxygen. A creatinine that rose from 1.0 to 1.9 mg/dL (168 micromol/L) shows acute kidney injury from low perfusion. New confusion and a capillary refill of 4 seconds show poor brain and skin perfusion.",
        sources: [SRC.sepsis2021, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Urinary source of infection", "Poor organ perfusion"],
      rows: [
        { text: "Nitrite positive on urinalysis", correct: [0], why: "Many urinary bacteria convert nitrate to nitrite, so a positive test points to the urinary tract." },
        { text: "Lactate 4.4 mmol/L", correct: [1], why: "Lactate rises when tissues switch to anaerobic metabolism from poor perfusion." },
        { text: "Burning on urination for 3 days", correct: [0], why: "Dysuria is a local symptom of urinary tract infection." },
        { text: "Creatinine 1.9 mg/dL (168 micromol/L), up from 1.0 mg/dL (88 micromol/L)", correct: [1], why: "A rapid creatinine rise shows kidneys injured by low blood flow." },
        { text: "Leukocyte esterase large on urinalysis", correct: [0], why: "Leukocyte esterase shows white cells in the urine from infection." },
        { text: "New confusion since this morning", correct: [1], why: "Acute confusion in sepsis reflects poor brain perfusion and inflammation." },
        { text: "Capillary refill 4 seconds", correct: [1], why: "Slow refill shows poor perfusion of the skin." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Recognizing risk of septic shock",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1430 the client's BP is 84/46 mmHg and her heart rate is 120/minute. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "The client has a likely urinary infection with a BP that fell to 84/46 mmHg and a heart rate that rose to 120/minute. A lactate of 4.4 mmol/L shows tissue hypoperfusion. Low BP with a high lactate puts her at highest risk of septic shock. Her glucose is high, not low. Clear lungs argue against fluid overload. Equal limb movement makes a stroke less likely.",
        refs: ["Septic shock is sepsis that needs a vasopressor to keep the mean arterial pressure at 65 mmHg or more, with a lactate above 2 mmol/L, despite adequate fluids."],
        sources: [SRC.sepsis2021, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "septic shock", why: "Infection with hypotension and a high lactate is the path to septic shock." },
            { text: "hypoglycemia", why: "Her glucose is 238 mg/dL (13.2 mmol/L), which is above the reference range." },
            { text: "fluid overload", why: "Clear lungs and dry mucous membranes point to a deficit, not an excess." },
            { text: "ischemic stroke", why: "She moves all limbs equally, and the confusion came with signs of infection." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "an SpO2 of 93%", why: "An SpO2 of 93% on room air is only mildly low and is not a sign of shock." },
            { text: "a BP of 84/46 mmHg", why: "A falling BP despite a rising heart rate shows failing circulation." },
            { text: "a glucose of 238 mg/dL", why: "Stress raises glucose in sepsis, but it does not measure perfusion." },
            { text: "clear lung sounds", why: "Clear lungs are expected and do not point to shock." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "burning on urination", why: "Dysuria points to the source of infection but not to shock." },
            { text: "a sodium of 138 mEq/L", why: "A sodium of 138 mEq/L (138 mmol/L) is within the reference range." },
            { text: "equal limb movement", why: "Equal movement is a normal finding." },
            { text: "a lactate of 4.4 mmol/L", why: "A high lactate shows tissue hypoperfusion." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety for a confused older adult",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client remains confused. She tries to climb over the stretcher rails and pulls at her IV tubing. Which actions should the nurse include in the plan of care? Select all that apply.",
        rationale:
          "Acute confusion with attempts to climb out of the stretcher puts the client at high risk of a fall. A low stretcher lowers the height of any fall. A familiar family member calms and reorients her. A sleeve keeps the IV line out of sight and reach. Short, calm explanations help reorient her. Restraints and sedatives can worsen delirium and cause injury. A distant room delays help.",
        sources: [SRC.falls, SRC.delirium],
      }),
      kind: "sata",
      options: [
        { text: "Apply wrist restraints to both arms", why: "Restraints raise agitation, injury and delirium. They are a last resort after other measures fail." },
        { text: "Keep the stretcher at its lowest height", why: "A low surface reduces injury if she climbs out." },
        { text: "Request a sedative to keep her calm", why: "Sedatives, and benzodiazepines in particular, can worsen delirium in older adults." },
        { text: "Ask the daughter to stay at the bedside", why: "A familiar person reorients and calms a confused client." },
        { text: "Cover the IV site with a sleeve", why: "Hiding the IV site makes it less likely she will pull the line out." },
        { text: "Move her to a room far from the station", why: "A distant room makes it harder for staff to see her and respond." },
        { text: "Reorient her with brief, calm words", why: "Short, simple explanations lower fear and support orientation." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based fluid bolus in sepsis",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The primary health care provider prescribes lactated Ringer's 30 mL/kg IV over 3 hours for hypotension and a high lactate. The client weighs 62 kg. How many mL should the nurse infuse in total?",
        rationale:
          "The prescription is 30 mL/kg and the client weighs 62 kg, so the total volume is 1860 mL. The volume runs over 3 hours. Early crystalloid restores circulating volume in sepsis with hypotension and a lactate of 4.4 mmol/L. Blood cultures are drawn before the first antibiotic dose, and the antibiotic starts within 1 hour.",
        calc: { expr: "30 * 62", answer: 1860, unit: "mL", round: 0, steps: ["30 * 62 = 1860"] },
        refs: [
          "Adults with sepsis-induced hypoperfusion or septic shock receive at least 30 mL/kg of IV crystalloid within the first 3 hours.",
          "For probable septic shock, antimicrobials start within 1 hour of recognition, after blood cultures if this causes no delay.",
        ],
        sources: [SRC.sepsis2021, SRC.sepsis2026],
      }),
      kind: "mc",
      options: [
        { text: "186 mL", why: "This misplaces the decimal and gives one tenth of the prescribed volume." },
        { text: "930 mL", why: "This is half the prescribed volume and would leave her underresuscitated." },
        { text: "1860 mL", why: "30 mL/kg for a client of 62 kg is 1860 mL." },
        { text: "3720 mL", why: "This is double the prescribed volume and risks fluid overload." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Escalating care after a fluid bolus",
        cjmm: "evaluate",
        process: "communication",
        difficulty: 4,
        stem: "By 1730 the client has received the full fluid bolus and her first IV antibiotic dose. The nurse reassesses her. For each finding, specify whether it shows improvement or needs to be reported to the primary health care provider now.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "1400", "1730"],
              rows: [
                ["Temperature", "38.7°C (101.7°F)", "37.9°C (100.2°F)"],
                ["Heart rate", "116/minute", "104/minute"],
                ["Respiratory rate", "24/minute", "20/minute"],
                ["BP", "86/48 mmHg", "82/44 mmHg"],
                ["SpO2", "93% on room air", "95% on room air"],
                ["Urine output", "Not measured", "10 mL/hour for 2 hours"],
                ["Lactate", "4.4 mmol/L", "4.8 mmol/L"],
              ],
            },
          },
        ],
        rationale:
          "The BP of 82/44 mmHg after the full bolus keeps the mean arterial pressure below 65 mmHg. A lactate that rose to 4.8 mmol/L and a urine output of 10 mL/hour show ongoing hypoperfusion. These findings point to septic shock and need a prompt report so a vasopressor can be considered. The lower temperature, heart rate and respiratory rate and the better SpO2 show some response.",
        refs: ["A vasopressor, with norepinephrine first, is started when the mean arterial pressure stays below 65 mmHg after fluids."],
        sources: [SRC.sepsis2021, SRC.sepsis2026, SRC.sbar],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows improvement", "Report now"],
      rows: [
        { text: "BP 82/44 mmHg", correct: [1], why: "Hypotension that persists after the full bolus signals septic shock and a possible need for a vasopressor." },
        { text: "Heart rate 104/minute", correct: [0], why: "The heart rate fell from 116/minute, a sign of better volume status." },
        { text: "Temperature 37.9°C (100.2°F)", correct: [0], why: "The fever is lower than the 38.7°C recorded at 1400." },
        { text: "Urine output 10 mL/hour for 2 hours", correct: [1], why: "Low urine output shows the kidneys are still poorly perfused." },
        { text: "Lactate 4.8 mmol/L", correct: [1], why: "A rising lactate shows hypoperfusion is getting worse, not better." },
        { text: "SpO2 95% on room air", correct: [0], why: "Oxygen saturation rose from 93% and shows no new lung compromise." },
      ],
    },
  ],
};
