import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c04-2";

const URINE_REF = "KDIGO urine output criterion for acute kidney injury: less than 0.5 mL/kg/hour for 6 hours.";
const CREAT_REF = "KDIGO creatinine criterion for acute kidney injury: a rise to 1.5 times baseline or more within 7 days.";
const SEVERE_K_REF = "Severe hyperkalemia: potassium 6.5 mEq/L (6.5 mmol/L) or higher.";

/** Case 2. Medical unit. Older adult with a sudden fall in kidney function. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Heavy Legs on the Medical Unit",
  intro:
    "A 76-year-old man arrives on the medical unit at 1400. He came to the emergency department at 0800 after 3 days of vomiting and diarrhea. He has eaten and drunk little. His daughter says he kept taking all his usual medications.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Heart failure with reduced ejection fraction. Hypertension.",
        "Lisinopril 20 mg by mouth daily.",
        "Spironolactone 25 mg by mouth daily.",
        "Furosemide 40 mg by mouth daily.",
        "Potassium chloride 20 mEq by mouth daily.",
        "Ibuprofen 400 mg by mouth 3 times daily for knee pain, bought over the counter 1 week ago.",
        "Creatinine 2 months ago: 1.0 mg/dL (88 micromol/L).",
        "Weight 78 kg. No allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "37.2°C (99.0°F)"],
          ["Heart rate", "56/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "98/58 mmHg"],
          ["SpO2", "96% on room air"],
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
        topic: "Admission findings after days of fluid loss",
        cjmm: "recognize",
        difficulty: 2,
        stem: "Soon after he reaches his room, the nurse examines him and enters a 1415 nursing note. Click to highlight each finding in this note needing follow-up.",
        refs: [URINE_REF],
        rationale:
          "New leg weakness, a pulse of 56/minute and tall, peaked T waves can all come from a high potassium. Dry, sticky mucous membranes fit fluid loss from 3 days of vomiting and diarrhea. Urine of 60 mL in 6 hours is far below 0.5 mL/kg/hour for a 78 kg adult. That points to acute kidney injury. Orientation, clear lungs, no edema and mild knee pain need no urgent follow-up.",
        sources: [SRC.kdigo, SRC.ukka],
      }),
      kind: "highlight",
      passage:
        "[[Reports that both legs feel heavy and weak]]. [[Oriented to person, place and time]]. [[Mucous membranes dry and sticky]]. [[Lungs clear in all fields]]. [[No swelling of the feet or ankles]]. [[Passed 60 mL of dark urine in the 6 hours since 0800]]. [[Cardiac monitor shows tall, peaked T waves]]. [[Right knee pain 2 on a 0 to 10 scale]]. [[Apical pulse 56/minute and regular]].",
      spans: [
        { text: "Reports that both legs feel heavy and weak", why: "New leg weakness can signal an electrolyte problem such as a high potassium." },
        { text: "Oriented to person, place and time", why: "Full orientation is expected and needs no follow-up." },
        { text: "Mucous membranes dry and sticky", why: "Dry, sticky membranes show fluid loss from vomiting and diarrhea." },
        { text: "Lungs clear in all fields", why: "Clear lungs show no fluid overload at present." },
        { text: "No swelling of the feet or ankles", why: "The absence of edema shows no fluid overload at present." },
        { text: "Passed 60 mL of dark urine in the 6 hours since 0800", why: "This output is below 0.5 mL/kg/hour and suggests acute kidney injury." },
        { text: "Cardiac monitor shows tall, peaked T waves", why: "Peaked T waves are an early ECG sign of a high potassium." },
        { text: "Right knee pain 2 on a 0 to 10 scale", why: "Mild pain from a known knee problem needs no urgent action." },
        { text: "Apical pulse 56/minute and regular", why: "A slow pulse can reflect the effect of a high potassium on conduction." },
      ],
      correct: [0, 2, 5, 6, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Causes of a rising serum potassium",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The 1500 laboratory results are posted. The nurse compares them with the medication history. For each factor, specify whether it contributes to the client's potassium level or does not contribute.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "2 months ago", "1500", "Reference range"],
              rows: [
                ["Potassium", "4.6 mEq/L (4.6 mmol/L)", "6.8 mEq/L (6.8 mmol/L)", "3.5 to 5.0"],
                ["Sodium", "138 mEq/L (138 mmol/L)", "136 mEq/L (136 mmol/L)", "135 to 145"],
                ["Bicarbonate", "24 mEq/L (24 mmol/L)", "18 mEq/L (18 mmol/L)", "22 to 29"],
                ["BUN", "18 mg/dL (6.4 mmol/L)", "58 mg/dL (20.7 mmol/L)", "7 to 20"],
                ["Creatinine", "1.0 mg/dL (88 micromol/L)", "2.9 mg/dL (256 micromol/L)", "0.7 to 1.3"],
                ["Glucose", "92 mg/dL (5.1 mmol/L)", "96 mg/dL (5.3 mmol/L)", "70 to 99"],
              ],
            },
          },
        ],
        refs: [CREAT_REF],
        rationale:
          "The potassium rose from 4.6 mEq/L to 6.8 mEq/L. The creatinine rose from 1.0 mg/dL to 2.9 mg/dL, more than 1.5 times baseline, which meets the criteria for acute kidney injury. Injured kidneys excrete less potassium. Lisinopril, spironolactone, the supplement and ibuprofen each add to the rise. A bicarbonate of 18 mEq/L also moves potassium out of cells. A slow heart rate is an effect of the high potassium, not a cause.",
        sources: [SRC.ukka, SRC.kdigo, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results in SI units only, and urea replaces BUN. The Medical Council of Canada lists potassium in mmol/L and creatinine in micromol/L, so creatinine rose from 88 to 256 micromol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Contributes", "Does not contribute"],
      rows: [
        { text: "Lisinopril 20 mg daily", correct: [0], why: "An ACE inhibitor lowers aldosterone, so the kidneys excrete less potassium." },
        { text: "Heart rate 56/minute", correct: [1], why: "A slow heart rate is an effect of the high potassium, not a cause." },
        { text: "Spironolactone 25 mg daily", correct: [0], why: "This potassium-sparing diuretic blocks aldosterone and holds potassium in the body." },
        { text: "Potassium chloride 20 mEq daily", correct: [0], why: "A daily supplement adds potassium that the injured kidneys cannot clear." },
        { text: "Ibuprofen 400 mg 3 times daily", correct: [0], why: "NSAIDs lower kidney blood flow and aldosterone, which raises potassium." },
        { text: "Urine output of 60 mL in 6 hours", correct: [0], why: "Low urine flow means less potassium leaves the body." },
        { text: "Sodium 136 mEq/L (136 mmol/L)", correct: [1], why: "This sodium is within range and does not raise potassium." },
        { text: "Glucose 96 mg/dL (5.3 mmol/L)", correct: [1], why: "A normal glucose does not shift potassium out of the cells." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority risk with a severe electrolyte imbalance",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 1530 the monitor shows a heart rate of 50/minute. The T waves remain tall and peaked, and the QRS complexes have widened. The client says his legs feel weaker. Complete the following sentence by choosing from the lists of options.",
        refs: [SEVERE_K_REF],
        rationale:
          "A potassium of 6.8 mEq/L is above the 6.5 mEq/L threshold for severe hyperkalemia. Peaked T waves, a slowing rate and widening QRS complexes show the heart is affected. This pattern can progress to ventricular fibrillation or asystole. Clear lungs make pulmonary edema unlikely. A glucose of 96 mg/dL (5.3 mmol/L) is normal. A bicarbonate of 18 mEq/L shows acidosis.",
        sources: [SRC.ukka, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report potassium in mmol/L only. The number is the same as in mEq/L, so 6.8 mmol/L is still above the 6.5 mmol/L threshold for severe hyperkalemia.",
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "pulmonary edema", why: "His lungs are clear and he has no edema." },
            { text: "a lethal dysrhythmia", why: "Severe hyperkalemia with ECG changes can progress to ventricular fibrillation or asystole." },
            { text: "severe hypoglycemia", why: "His glucose of 96 mg/dL (5.3 mmol/L) is within range." },
            { text: "metabolic alkalosis", why: "A bicarbonate of 18 mEq/L shows acidosis, not alkalosis." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a sodium of 136 mEq/L", why: "This sodium is within range." },
            { text: "a glucose of 96 mg/dL", why: "A glucose of 96 mg/dL (5.3 mmol/L) is within range." },
            { text: "a potassium of 6.8 mEq/L", why: "This level is above the 6.5 mEq/L threshold for severe hyperkalemia." },
            { text: "a temperature of 37.2°C", why: "This temperature is close to normal." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "widening QRS complexes", why: "A widening QRS shows worsening cardiac toxicity from potassium." },
            { text: "clear breath sounds", why: "Clear lungs do not point to a cardiac rhythm risk." },
            { text: "full orientation", why: "Intact orientation does not point to this risk." },
            { text: "mild knee pain", why: "Knee pain is a known complaint unrelated to this risk." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Purpose of each emergency potassium treatment",
        cjmm: "generate",
        difficulty: 3,
        stem: "The primary health care provider holds lisinopril, spironolactone, potassium chloride and ibuprofen and writes new prescriptions. Drag each medication to the purpose it serves. Each purpose takes one medication.",
        rationale:
          "Treatment follows the order of threat. IV calcium protects the heart muscle within minutes but does not lower potassium. Insulin moves potassium into the cells, and dextrose prevents hypoglycemia. Sodium zirconium cyclosilicate binds potassium in the gut so it leaves in the stool. Ondansetron treats nausea. Acetaminophen replaces ibuprofen for knee pain. Neither changes potassium.",
        sources: [SRC.ukka],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Protect the heart from the effects of potassium", "Shift potassium from the blood into the cells", "Remove potassium from the body through the gut"],
      tokens: [
        { text: "Calcium gluconate 3 g IV over 15 minutes", why: "IV calcium stabilizes the heart muscle membrane but does not lower potassium." },
        { text: "Ondansetron 4 mg IV every 8 hours as needed", why: "Ondansetron treats nausea and has no effect on potassium." },
        { text: "Regular insulin 10 units IV with dextrose 25 g", why: "Insulin drives potassium into the cells, and dextrose prevents hypoglycemia." },
        { text: "Acetaminophen 650 mg by mouth every 6 hours as needed", why: "Acetaminophen treats knee pain and has no effect on potassium." },
        { text: "Sodium zirconium cyclosilicate 10 g by mouth", why: "This binder traps potassium in the gut so it leaves in the stool." },
      ],
      correct: [0, 2, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to fear of dialysis",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "At 1700 the potassium is 5.9 mEq/L (5.9 mmol/L). A nephrologist tells the client that hemodialysis may be needed if his kidneys do not recover. After she leaves, he says, \"My brother was on dialysis for a year before he died. I would rather not go through that.\" Which response by the nurse is most therapeutic?",
        rationale:
          "The client links dialysis to his brother's death. Reflecting the feeling behind his words shows empathy and invites him to say more. Once his fear is explored, the team can share facts about his own outlook and his choices. False reassurance, changing the subject and a why question each close off the talk.",
        sources: [SRC.varcarolis],
      }),
      kind: "mc",
      options: [
        { text: "\"Dialysis is much safer now than when your brother had it.\"", why: "This offers false reassurance and brushes past his fear." },
        { text: "\"Let's focus on getting your potassium down for today.\"", why: "Changing the subject tells him his concern is not welcome." },
        { text: "\"Why would you turn down a treatment that could help you?\"", why: "A why question puts him on the defensive and blocks talk." },
        { text: "\"Seeing your brother go through dialysis sounds hard.\"", why: "Reflecting his feeling shows empathy and invites him to go on." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Response to emergency potassium treatment",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "Calcium gluconate, insulin with dextrose and sodium zirconium cyclosilicate were given between 1540 and 1600. At 1800 the nurse evaluates the client's response. For each finding, specify whether it shows improvement or shows no improvement or a new problem.",
        refs: [URINE_REF],
        rationale:
          "The potassium fell from 6.8 mEq/L to 5.4 mEq/L. The ECG and heart rate have improved, and his legs are stronger. A glucose of 58 mg/dL (3.2 mmol/L) is hypoglycemia, a known risk of insulin given for potassium. Urine of 16 mL in 2 hours is still below 0.5 mL/kg/hour and no better than before, so the kidney injury persists. Insulin only shifts potassium, so levels are rechecked.",
        sources: [SRC.ukka, SRC.kdigo, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report glucose and potassium in mmol/L only. The glucose reads 3.2 mmol/L, below the Medical Council of Canada random glucose lower limit of 4.0 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows improvement", "No improvement or a new problem"],
      rows: [
        { text: "Potassium 5.4 mEq/L (5.4 mmol/L)", correct: [0], why: "The potassium has fallen from 6.8 mEq/L toward the reference range." },
        { text: "Capillary glucose 58 mg/dL (3.2 mmol/L)", correct: [1], why: "This is a new problem, hypoglycemia from the insulin, and needs treatment now." },
        { text: "T waves of normal height and narrow QRS complexes", correct: [0], why: "Resolved ECG changes show less cardiac effect of potassium." },
        { text: "Heart rate 74/minute", correct: [0], why: "The rate has risen from 50/minute into the normal range." },
        { text: "Urine output 16 mL in the past 2 hours", correct: [1], why: "This is still below 0.5 mL/kg/hour for a 78 kg adult and no better than before." },
        { text: "Lifts both legs off the bed against gravity", correct: [0], why: "Better strength shows the muscle effect of potassium is easing." },
      ],
    },
  ],
};
