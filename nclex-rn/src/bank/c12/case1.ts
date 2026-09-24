import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c12-1";

/** Case 1. Adolescent medical unit. Restrictive eating disorder with risk on refeeding. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Admission to the Adolescent Medical Unit",
  intro:
    "A 16-year-old girl is admitted to the adolescent medical unit at 1400 from her primary health care provider's office. She was diagnosed with anorexia nervosa 3 months ago. Her mother says she has eaten almost nothing for the past 8 days.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Height 165 cm. Weight 41 kg. Body mass index 15.1.",
        "Weight 4 months ago was 52 kg.",
        "Runs 10 km each morning. No menstrual period for 5 months.",
        "No prescribed medications. No known allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Lying at 1430", "Standing at 1432"],
        rows: [
          ["Temperature", "35.4°C (95.7°F)", "Not measured"],
          ["Heart rate", "46/minute", "90/minute"],
          ["BP", "94/58 mmHg", "72/48 mmHg"],
          ["Respiratory rate", "14/minute", "16/minute"],
          ["SpO2", "98% on room air", "98% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 1500", "Reference range"],
        rows: [
          ["Sodium", "138 mEq/L (138 mmol/L)", "135 to 145 mEq/L"],
          ["Potassium", "3.2 mEq/L (3.2 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Phosphorus", "2.6 mg/dL (0.84 mmol/L)", "3.0 mg/dL (0.97 mmol/L) to 4.5 mg/dL (1.45 mmol/L)"],
          ["Magnesium", "1.6 mg/dL (0.66 mmol/L)", "1.7 mg/dL (0.70 mmol/L) to 2.2 mg/dL (0.91 mmol/L)"],
          ["Hemoglobin", "12.8 g/dL (128 g/L)", "12.0 to 16.0 g/dL"],
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
        topic: "Vital sign instability in restrictive eating",
        cjmm: "recognize",
        difficulty: 2,
        stem: "After measuring lying and standing vital signs at 1432, the nurse documents this admission note for the adolescent. Click to highlight each finding that calls for further action by the nurse.",
        refs: [
          "Signs of medical instability in a restrictive eating disorder include a daytime heart rate under 50/minute and a temperature under 35.6°C (96.1°F).",
          "In an adolescent, a sustained orthostatic rise in pulse over 40/minute or a fall in systolic BP over 20 mmHg is also a sign of instability.",
        ],
        rationale:
          "A lying heart rate of 46/minute is below the daytime limit of 50/minute. A temperature of 35.4°C is below 35.6°C. On standing the pulse rises from 46 to 90/minute, which is more than 40/minute. The systolic BP falls from 94 to 72 mmHg, which is more than 20 mmHg. These findings show medical instability. Alertness, capillary refill, clear lungs and bowel sounds are expected.",
        sources: [SRC.aapEd, SRC.sahm, { body: "Coret M, Vyver E, Harrison M, et al. Canadian Paediatric Society, Adolescent Health Committee", work: "A guide to the community management of paediatric eating disorders. Paediatrics and Child Health 29(7):446", year: 2024, url: "https://cps.ca/en/documents/position/eating-disorders" }],
        canada:
          "The Canadian Paediatric Society 2024 guide uses the same heart rate, temperature and standing BP limits but flags a standing pulse rise of 30/minute or more. The rise of 44/minute here meets both limits.",
      }),
      kind: "highlight",
      passage:
        "[[Alert and answers questions clearly.]] [[Temperature 35.4°C (95.7°F).]] [[Heart rate 46/minute lying.]] [[Heart rate 90/minute after standing.]] [[BP 72/48 mmHg standing]], down from 94/58 mmHg lying. [[Capillary refill 2 seconds.]] [[Lungs clear in all fields.]] [[Bowel sounds present in all quadrants.]]",
      spans: [
        { text: "Alert and answers questions clearly.", why: "Normal alertness needs no follow-up." },
        { text: "Temperature 35.4°C (95.7°F).", why: "A temperature under 35.6°C is a sign of medical instability." },
        { text: "Heart rate 46/minute lying.", why: "A daytime heart rate under 50/minute is a sign of medical instability." },
        { text: "Heart rate 90/minute after standing.", why: "A rise from 46 to 90/minute on standing exceeds the orthostatic limit." },
        { text: "BP 72/48 mmHg standing", why: "A systolic fall from 94 to 72 mmHg on standing exceeds the orthostatic limit." },
        { text: "Capillary refill 2 seconds.", why: "A refill time of 2 seconds is within normal limits." },
        { text: "Lungs clear in all fields.", why: "Clear lungs are expected and need no follow-up." },
        { text: "Bowel sounds present in all quadrants.", why: "Bowel sounds in all quadrants are expected." },
      ],
      correct: [1, 2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Risk factors before nutrition starts",
        cjmm: "analyze",
        difficulty: 3,
        refs: ["More than 7 days of little or no intake is a risk criterion for refeeding syndrome."],
        stem: "The nurse reviews the history and the admission laboratory results before nutrition starts. For each finding, specify whether it raises the client's risk for complications when feeding begins.",
        rationale:
          "Eight days of almost no intake and low prefeeding potassium, phosphorus and magnesium are recognized risk criteria for refeeding syndrome. Feeding drives these electrolytes into cells, so low starting levels can fall to dangerous levels. The sodium, hemoglobin and SpO2 are within normal limits and do not add to this risk.",
        sources: [SRC.refeeding, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada:
          "Canadian labs report these results only in SI units. Potassium reads 3.2 mmol/L, phosphate 0.84 mmol/L and magnesium 0.66 mmol/L. Sodium keeps the same number in mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises risk when feeding begins", "Does not raise risk when feeding begins"],
      rows: [
        { text: "Almost no food for 8 days", correct: [0], why: "More than 7 days of low intake is a risk criterion for refeeding syndrome." },
        { text: "Sodium 138 mEq/L (138 mmol/L)", correct: [1], why: "This sodium is within the reference range and is not a refeeding criterion." },
        { text: "Potassium 3.2 mEq/L (3.2 mmol/L)", correct: [0], why: "A low prefeeding potassium can fall further as insulin moves it into cells." },
        { text: "Hemoglobin 12.8 g/dL (128 g/L)", correct: [1], why: "This hemoglobin is within the reference range and is not a refeeding criterion." },
        { text: "Phosphorus 2.6 mg/dL (0.84 mmol/L)", correct: [0], why: "Phosphorus is used to make energy compounds once feeding starts, so a low level drops further." },
        { text: "SpO2 98% on room air", correct: [1], why: "Normal oxygen saturation does not change the risk of refeeding syndrome." },
        { text: "Magnesium 1.6 mg/dL (0.66 mmol/L)", correct: [0], why: "A low prefeeding magnesium is a risk criterion for refeeding syndrome." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority risk before refeeding",
        cjmm: "prioritize",
        difficulty: 3,
        refs: ["More than 7 days of little or no intake is a risk criterion for refeeding syndrome."],
        stem: "The primary health care provider prescribes an oral meal plan to start at 1800. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Starting food after 8 days of almost no intake shifts phosphorus, potassium and magnesium into cells. The low starting phosphorus leaves little reserve, so the client is at highest risk for refeeding syndrome. The potassium is low, not high. The client can swallow and eats by mouth, and the sodium is normal. Daily running and amenorrhea reflect the illness but are not refeeding criteria.",
        sources: [SRC.refeeding, SRC.sahm],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "hyperkalemia", why: "The potassium is 3.2 mEq/L, which is below the reference range." },
            { text: "aspiration pneumonia", why: "Nothing in the chart suggests a swallowing problem or a feeding tube." },
            { text: "refeeding syndrome", why: "Low electrolytes after 8 days of almost no food put her at risk when feeding starts." },
            { text: "hypernatremia", why: "The sodium is 138 mEq/L, which is within the reference range." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a normal serum sodium", why: "A normal sodium does not point to any of the listed problems." },
            { text: "a low serum phosphorus", why: "A low phosphorus before feeding is a refeeding risk criterion." },
            { text: "clear lung sounds", why: "Clear lungs argue against aspiration and do not point to refeeding risk." },
            { text: "a normal hemoglobin", why: "A normal hemoglobin does not point to any of the listed problems." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a daily 10 km run", why: "Exercise adds to energy loss but is not a refeeding risk criterion." },
            { text: "no period for 5 months", why: "Amenorrhea reflects malnutrition but is not a refeeding risk criterion." },
            { text: "almost no food for 8 days", why: "More than 7 days of low intake is a refeeding risk criterion." },
            { text: "a normal SpO2", why: "A normal SpO2 does not point to any of the listed problems." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Planning the first days of refeeding",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse plans care for the first 3 days of the meal plan. Which actions should the nurse include? Select all that apply.",
        refs: ["In clients at risk, thiamine is given before feeding starts and electrolytes are checked every 12 hours for the first 3 days.", "Vital signs are measured every 4 hours for the first 24 hours after feeding starts."],
        rationale:
          "Thiamine goes in before the first meal because feeding uses up thiamine stores. Potassium, magnesium and phosphorus are checked every 12 hours for the first 3 days. Vital signs are measured every 4 hours for the first 24 hours. Intake and output are recorded. Calories are advanced in steps over several days, not to full intake by day 2. Exercise is restricted while the heart rate and BP are unstable.",
        sources: [SRC.refeeding, SRC.sahm],
      }),
      kind: "sata",
      options: [
        { text: "Advance to full calories on day 2", why: "Calories are advanced in steps over several days to limit electrolyte shifts." },
        { text: "Give thiamine before the first meal", why: "Feeding uses thiamine, so a dose before the first meal protects against deficiency." },
        { text: "Allow a morning run to keep her routine", why: "Exercise adds cardiac strain while the heart rate is 46/minute lying." },
        { text: "Check electrolytes every 12 hours", why: "Potassium, magnesium and phosphorus can fall fast in the first 3 days." },
        { text: "Record all intake and output", why: "Intake and output show fluid shifts and how much of the meal plan is eaten." },
        { text: "Take vital signs every 4 hours on day 1", why: "Frequent vital signs detect heart rate and BP changes early in refeeding." },
        { text: "Delay laboratory tests until day 3", why: "Electrolytes can fall within hours, so waiting misses early changes." },
      ],
      correct: [1, 3, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to food hiding and exercise",
        cjmm: "action",
        process: "caring",
        difficulty: 3,
        stem: "On day 2 the assistive personnel reports that the client wrapped half her sandwich in a napkin at lunch. The client then asked to use the bathroom. Later the nurse finds her doing sit-ups in her room. Which two actions should the nurse take? Select two.",
        rationale:
          "Hiding food, purging and secret exercise are common in anorexia nervosa. Observing the client for a set time after meals limits purging and exercise. Naming the hidden food calmly and in private sets a limit without shame. Threats of punishment set up a power struggle. Letting her skip snacks gives control of intake back to the illness. Frequent weighing and comments on her body feed the preoccupation with shape and weight.",
        sources: [SRC.halter, SRC.sahm],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Warn her she will lose her visitors", why: "Threats of punishment set up a power struggle and damage trust." },
        { text: "Observe her for 1 hour after each meal", why: "Supervision after meals limits purging and hidden exercise." },
        { text: "Let her choose which snacks to skip", why: "Skipping snacks lets the illness control intake and slows recovery." },
        { text: "Name the hidden food calmly in private", why: "A calm, private approach sets a limit without shaming her." },
        { text: "Weigh her after every meal and snack", why: "Frequent weighing feeds her focus on weight. Weights are done on a set schedule." },
        { text: "Tell her that her body looks healthier", why: "Comments on her body feed her focus on shape and can raise anxiety." },
      ],
      correct: [1, 3],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Response to electrolyte replacement",
        cjmm: "evaluate",
        difficulty: 4,
        refs: ["A daytime heart rate under 50/minute is a sign of medical instability in a restrictive eating disorder."],
        stem: "Since admission the client has received thiamine, oral potassium phosphate and oral magnesium as prescribed. The nurse reviews the findings on day 3. For each finding, specify whether it shows expected progress or needs follow-up.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Day 1 at 1500", "Day 3 at 0600", "Reference range"],
              rows: [
                ["Potassium", "3.2 mEq/L (3.2 mmol/L)", "3.9 mEq/L (3.9 mmol/L)", "3.5 to 5.0 mEq/L"],
                ["Phosphorus", "2.6 mg/dL (0.84 mmol/L)", "3.4 mg/dL (1.10 mmol/L)", "3.0 mg/dL (0.97 mmol/L) to 4.5 mg/dL (1.45 mmol/L)"],
                ["Magnesium", "1.6 mg/dL (0.66 mmol/L)", "1.3 mg/dL (0.53 mmol/L)", "1.7 mg/dL (0.70 mmol/L) to 2.2 mg/dL (0.91 mmol/L)"],
              ],
            },
          },
          {
            title: "Nurses' Notes",
            text: "Day 3 at 0800. Heart rate 58/minute lying. Temperature 36.4°C (97.5°F). Weight 43.4 kg. Pitting edema 2+ in both ankles, new today.",
          },
        ],
        rationale:
          "The potassium rose from 3.2 to 3.9 mEq/L and the phosphorus from 2.6 to 3.4 mg/dL. The heart rate rose from 46 to 58/minute and the temperature rose to 36.4°C. These show progress. The magnesium fell from 1.6 to 1.3 mg/dL despite replacement. A weight gain from 41 kg to 43.4 kg in 3 days with new ankle edema points to fluid retention, which can occur in refeeding.",
        sources: [SRC.refeeding, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected progress", "Needs follow-up"],
      rows: [
        { text: "Potassium 3.9 mEq/L (3.9 mmol/L)", correct: [0], why: "The potassium has risen into the reference range with replacement." },
        { text: "Magnesium 1.3 mg/dL (0.53 mmol/L)", correct: [1], why: "The magnesium has fallen from 1.6 mg/dL despite replacement." },
        { text: "Phosphorus 3.4 mg/dL (1.10 mmol/L)", correct: [0], why: "The phosphorus has risen into the reference range with replacement." },
        { text: "Heart rate 58/minute lying", correct: [0], why: "The heart rate has risen from 46/minute to above the limit of 50/minute." },
        { text: "Weight 43.4 kg, up from 41 kg", correct: [1], why: "A gain of this size in 3 days is fluid, not tissue." },
        { text: "Pitting edema 2+ in both ankles", correct: [1], why: "New edema in refeeding reflects sodium and water retention." },
        { text: "Temperature 36.4°C (97.5°F)", correct: [0], why: "The temperature has risen from 35.4°C into the normal range." },
      ],
    },
  ],
};
