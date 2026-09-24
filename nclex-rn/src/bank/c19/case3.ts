import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c19-3";

/** Case 3. Medical intensive care unit. Worsening lung injury after pneumonia on mechanical ventilation. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Rising Oxygen Needs After Intubation",
  intro:
    "A 58-year-old man was admitted 2 days ago with community-acquired pneumonia. His breathing worsened overnight. At 0600 he was intubated and moved to the intensive care unit. He weighs 90 kg and is 178 cm tall.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "No history of heart failure or lung disease.",
        "Former smoker. Quit 10 years ago.",
        "Takes lisinopril for hypertension.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Cues of worsening gas exchange on a ventilator",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the 0800 note for the client. Click to highlight the findings that show worsening oxygenation or lung involvement.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: "0800. Ventilator on volume control. Portable chest x-ray and bedside echocardiogram done at 0730.",
          },
        ],
        rationale:
          "Crackles in both lungs and new infiltrates on both sides show fluid in the alveoli. An SpO2 of 86% on FiO2 80% with PEEP 10 cmH2O shows severe hypoxemia despite high support. Peak pressure rising from 28 to 38 cmH2O suggests stiffer lungs. Normal heart pumping on the echocardiogram makes heart failure an unlikely cause. A secure tube, reactive pupils and urine output of 45 mL/hour are stable findings.",
        sources: [SRC.berlin, SRC.hinkle],
      }),
      kind: "highlight",
      passage:
        "[[Crackles heard in both lungs]]. [[SpO2 86% on FiO2 80% and PEEP 10 cmH2O]]. [[Endotracheal tube secured at 23 cm at the lips]]. [[Chest x-ray shows new infiltrates in both lungs]]. [[Echocardiogram shows normal heart pumping]]. [[Peak airway pressure up from 28 to 38 cmH2O since intubation]]. [[Pupils equal and reactive]]. [[Urine output 45 mL/hour]].",
      spans: [
        { text: "Crackles heard in both lungs", why: "Crackles on both sides point to fluid filling the alveoli." },
        { text: "SpO2 86% on FiO2 80% and PEEP 10 cmH2O", why: "Low saturation on high oxygen and PEEP shows severe hypoxemia." },
        { text: "Endotracheal tube secured at 23 cm at the lips", why: "A secured tube at a recorded depth is a routine finding." },
        { text: "Chest x-ray shows new infiltrates in both lungs", why: "New infiltrates on both sides show spreading lung involvement." },
        { text: "Echocardiogram shows normal heart pumping", why: "Normal pumping helps rule out a heart cause. It does not show worsening." },
        { text: "Peak airway pressure up from 28 to 38 cmH2O since intubation", why: "A rising peak pressure since intubation suggests stiffer lungs." },
        { text: "Pupils equal and reactive", why: "Normal pupils show no neurologic change." },
        { text: "Urine output 45 mL/hour", why: "This output shows adequate kidney perfusion." },
      ],
      correct: [0, 1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Grading oxygenation with the PaO2 to FiO2 ratio",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the 0830 arterial blood gas. It was drawn on FiO2 80% with PEEP 10 cmH2O. Complete the following sentences by choosing from the lists of options.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "0830"],
              rows: [
                ["pH", "7.30"],
                ["PaCO2", "52 mmHg"],
                ["PaO2", "64 mmHg"],
                ["HCO3", "25 mEq/L (25 mmol/L)"],
              ],
            },
          },
        ],
        refs: [
          "Berlin definition with PEEP of 5 cmH2O or more: mild when PaO2/FiO2 is over 200 up to 300, moderate when over 100 up to 200, severe when 100 or less.",
        ],
        rationale:
          "An FiO2 of 80% is 0.8 as a fraction. The PaO2 of 64 mmHg divided by 0.8 gives a ratio of 80. The onset is within a week of pneumonia. Infiltrates are on both sides and heart pumping is normal. PEEP is 10 cmH2O. A ratio of 100 or less with these findings is severe acute respiratory distress syndrome.",
        calc: { expr: "64 / (80 / 100)", answer: 80, unit: "mmHg", round: 0, steps: ["80 / 100 = 0.8", "64 / 0.8 = 80"] },
        sources: [SRC.berlin],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The PaO2/FiO2 ratio is {0}. With the chest x-ray and echocardiogram findings, this fits {1} acute respiratory distress syndrome.",
      blanks: [
        {
          options: [
            { text: "51", why: "This multiplies 64 by the FiO2 fraction instead of dividing by it." },
            { text: "80", why: "64 mmHg divided by 0.8 gives 80." },
            { text: "144", why: "This adds 64 and 80 instead of dividing the PaO2 by the FiO2 fraction." },
            { text: "160", why: "This is double the ratio. It would place the client in a less severe grade." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "mild", why: "Mild needs a ratio over 200. The ratio here is 80." },
            { text: "moderate", why: "Moderate needs a ratio over 100. The ratio here is 80." },
            { text: "severe", why: "A ratio of 100 or less with PEEP of 5 cmH2O or more is severe." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Ventilator settings that injure the lungs",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 0900 the nurse checks the ventilator. The settings were entered at intubation. Drag words from the choices below to fill in each blank in the following sentence.",
        tabs: [
          {
            title: "Ventilator Settings",
            table: {
              head: ["Setting or reading", "0900"],
              rows: [
                ["Mode", "Volume control"],
                ["Tidal volume", "700 mL"],
                ["Rate", "20/minute"],
                ["PEEP", "10 cmH2O"],
                ["FiO2", "80%"],
                ["Plateau pressure", "34 cmH2O"],
              ],
            },
          },
        ],
        refs: ["Lung protective ventilation uses a tidal volume of 4 to 8 mL/kg of predicted body weight and a plateau pressure under 30 cmH2O."],
        rationale:
          "Lung protective ventilation keeps plateau pressure under 30 cmH2O. The plateau pressure is 34 cmH2O on a tidal volume of 700 mL. That pressure shows the alveoli are stretched too far. Overdistention injures the lungs further. A PEEP of 10 cmH2O helps keep alveoli open. The echocardiogram showed normal pumping, so heart failure edema is unlikely. The tube depth is a routine reading.",
        sources: [SRC.fan, SRC.ardsnet],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The client is at highest risk for {0} as evidenced by {1}.",
      targets: ["Condition", "Evidence"],
      tokens: [
        { text: "cardiogenic pulmonary edema", why: "The echocardiogram showed normal pumping, so a heart cause is unlikely." },
        { text: "a plateau pressure of 34 cmH2O", why: "A plateau pressure over 30 cmH2O shows the alveoli are overstretched." },
        { text: "a PEEP of 10 cmH2O", why: "PEEP at this level keeps alveoli open and is part of the treatment." },
        { text: "lung injury from overdistention", why: "High tidal volume and plateau pressure stretch and damage alveoli." },
        { text: "an unplanned extubation", why: "The tube is secured at a recorded depth. Nothing points to this risk." },
        { text: "a tube depth of 23 cm at the lips", why: "The depth is a routine reading and shows no hazard." },
      ],
      correct: [3, 1],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Preventing pneumonia linked to the ventilator",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The primary health care provider lowers the tidal volume. The nurse plans measures to prevent ventilator-associated pneumonia. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Raising the head of the bed to 30 to 45 degrees lowers aspiration of secretions. Daily toothbrushing lowers pneumonia rates. A daily check on lowering sedation shortens time on the ventilator. Hand hygiene before touching the airway stops spread from the hands. Chlorhexidine mouth care is no longer advised because it shows no clear benefit and may cause harm. Circuits are changed only when soiled or not working.",
        sources: [SRC.shea, SRC.siegel],
      }),
      kind: "sata",
      options: [
        { text: "Change the ventilator circuit every 24 hours", why: "Scheduled circuit changes do not lower pneumonia rates. Circuits are changed when soiled or faulty." },
        { text: "Raise the head of the bed 30 to 45 degrees", why: "An upright position lowers aspiration of secretions into the lungs." },
        { text: "Swab the mouth with chlorhexidine gluconate", why: "Chlorhexidine oral care is not advised. It shows no clear benefit and may cause harm." },
        { text: "Brush the teeth during oral care", why: "Toothbrushing removes plaque and lowers pneumonia rates." },
        { text: "Assess daily whether sedation can be lowered", why: "Less sedation shortens time on the ventilator and lowers pneumonia risk." },
        { text: "Clean hands before handling the airway", why: "Hand hygiene stops germs on the hands from reaching the airway." },
      ],
      correct: [1, 3, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Sedative infusion rate by weight",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes propofol 30 mcg/kg/minute IV for the client, who weighs 90 kg. The vial holds propofol 10 mg/mL. At what rate should the nurse set the infusion pump?",
        rationale:
          "The dose is 30 mcg/kg/minute for 90 kg, which is 2700 mcg/minute. Over 60 minutes that is 162 000 mcg/hour, or 162 mg/hour. Each mL holds 10 mg. Dividing 162 mg/hour by 10 mg/mL gives 16.2 mL/hour. Propofol is a high-alert medication, so the rate is checked before the infusion starts.",
        calc: { expr: "30 * 90 * 60 / 1000 / 10", answer: 16.2, unit: "mL/hour", round: 1, steps: ["30 * 90 = 2700", "2700 * 60 = 162000", "162000 / 1000 = 162", "162 / 10 = 16.2"] },
        sources: [SRC.propofol],
      }),
      kind: "mc",
      options: [
        { text: "1.62 mL/hour", why: "This is one tenth of the correct rate. It comes from a misplaced decimal." },
        { text: "16.2 mL/hour", why: "162 mg/hour divided by 10 mg/mL is 16.2 mL/hour." },
        { text: "32.4 mL/hour", why: "This is double the correct rate. It would oversedate and lower BP." },
        { text: "162 mL/hour", why: "This enters the 162 mg/hour dose as mL and skips the 10 mg/mL concentration." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Response to lung protection and sedation",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "On day 3 in the intensive care unit the client remains on low tidal volume ventilation and propofol. For each finding, specify whether it shows an effective or expected response or needs follow-up.",
        tabs: [
          {
            title: "Day 3 Findings",
            text: [
              "0800. PaO2/FiO2 ratio 150, up from 80 on day 1.",
              "Plateau pressure 27 cmH2O.",
              "BP 84/48 mmHg, down from 118/70 mmHg before the propofol rate was raised at 0700.",
              "Serum triglycerides 610 mg/dL (6.9 mmol/L).",
              "RASS score -1 during the daily sedation check.",
            ].join("\n"),
          },
        ],
        refs: ["Light sedation is a RASS score of -2 to +1.", "Plateau pressure is kept under 30 cmH2O."],
        rationale:
          "The ratio rose from 80 to 150, so oxygenation is improving. A plateau pressure of 27 cmH2O is under the 30 cmH2O limit. A RASS of -1 is within the light sedation range of -2 to +1. Propofol dilates vessels and lowers BP. The fall to 84/48 mmHg after a rate increase needs follow-up. Propofol is a lipid emulsion. A triglyceride level of 610 mg/dL can signal lipid overload and needs follow-up.",
        sources: [SRC.propofol, SRC.padis, SRC.fan, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report triglycerides in mmol/L only, so this result reads 6.9 mmol/L. The Medical Council of Canada lists the adult reference value as 1.7 mmol/L or less.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Effective or expected", "Needs follow-up"],
      rows: [
        { text: "PaO2/FiO2 ratio 150, up from 80", correct: [0], why: "A rising ratio shows better oxygenation on lung protective settings." },
        { text: "Plateau pressure 27 cmH2O", correct: [0], why: "A plateau pressure under 30 cmH2O meets the lung protective goal." },
        { text: "BP 84/48 mmHg after the rate increase", correct: [1], why: "Propofol dilates vessels. A fall in BP after a higher rate needs follow-up." },
        { text: "Serum triglycerides 610 mg/dL (6.9 mmol/L)", correct: [1], why: "The lipid in propofol can raise triglycerides and needs review of the infusion." },
        { text: "RASS score -1 on the daily check", correct: [0], why: "A RASS of -1 falls within the light sedation range." },
      ],
    },
  ],
};
