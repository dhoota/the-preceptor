import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c06-4";

/** Case 4. Neurosurgical unit. Woman on day 6 after pituitary surgery with a new headache and a falling sodium. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Headache on the Morning of Discharge",
  intro:
    "A 46-year-old woman is on the neurosurgical unit on day 6 after transsphenoidal removal of a pituitary adenoma. She was expected to go home today. At 0700 she reports a headache and nausea. She vomited once at 0630.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Nonfunctioning pituitary adenoma removed through the nose on day 0.",
        "No history of seizures.",
        "Weight before surgery 64.0 kg.",
        "No known drug allergies.",
      ].join("\n"),
    },
    {
      title: "Intake and Output",
      table: {
        head: ["Measure", "Day 4", "Day 5", "Day 6 at 0600"],
        rows: [
          ["Oral intake in 24 hours", "2400 mL", "2600 mL", "2300 mL"],
          ["Urine output in 24 hours", "2100 mL", "1200 mL", "650 mL"],
          ["Morning weight", "64.2 kg", "64.9 kg", "65.6 kg"],
        ],
      },
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0700"],
        rows: [
          ["BP", "124/78 mmHg"],
          ["Heart rate", "72/minute"],
          ["Respiratory rate", "16/minute"],
          ["Temperature", "36.9°C (98.4°F)"],
          ["SpO2", "98% on room air"],
        ],
      },
    },
    { title: "Laboratory Results", text: "Day 4: sodium 138 mEq/L (138 mmol/L)." },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Cues of a falling sodium after surgery",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 0715 the nurse assesses her and records the note below. Click to highlight the findings that need follow-up.",
        rationale:
          "A new headache, nausea, vomiting and slowed thinking on day 6 suggest brain swelling. A small void of dark urine with a rising weight shows she is retaining water. The dry pad and absent drip make a spinal fluid leak unlikely. Pupils and visual fields are normal.",
        sources: [SRC.hypona, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Headache 6 of 10 all over her head]]. [[Answers slowly and repeats herself]]. [[Nasal drip pad dry since 0200]]. [[No clear fluid drips when she leans forward]]. [[Pupils equal, round and reactive to light]]. [[Voided 150 mL of dark yellow urine]] at 0600. [[Visual fields full to confrontation]]. [[Nausea and 1 episode of vomiting]].",
      spans: [
        { text: "Headache 6 of 10 all over her head", why: "A new generalized headache on day 6 can signal brain swelling." },
        { text: "Answers slowly and repeats herself", why: "Slowed thinking is a change in mental status that needs follow-up." },
        { text: "Nasal drip pad dry since 0200", why: "A dry pad argues against a spinal fluid leak." },
        { text: "No clear fluid drips when she leans forward", why: "No drip on leaning forward argues against a spinal fluid leak." },
        { text: "Pupils equal, round and reactive to light", why: "Normal pupils need no follow-up." },
        { text: "Voided 150 mL of dark yellow urine", why: "A small void of concentrated urine fits water retention." },
        { text: "Visual fields full to confrontation", why: "Full visual fields show no new pressure on the optic pathway." },
        { text: "Nausea and 1 episode of vomiting", why: "Nausea and vomiting with headache can signal brain swelling." },
      ],
      correct: [0, 1, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Serum and urine tests in hyponatremia",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The results of blood and urine tests drawn at 0730 are in the Laboratory Results tab. For each result, specify what it shows.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Day 4", "Day 6 at 0730", "Reference range"],
              rows: [
                ["Sodium", "138 mEq/L (138 mmol/L)", "122 mEq/L (122 mmol/L)", "135 to 145 mEq/L"],
                ["Serum osmolality", "286 mOsm/kg", "254 mOsm/kg", "275 to 295 mOsm/kg"],
                ["Urine osmolality", "Not done", "540 mOsm/kg", "No fixed range. Judged against serum osmolality."],
                ["Potassium", "4.0 mEq/L (4.0 mmol/L)", "3.9 mEq/L (3.9 mmol/L)", "3.5 to 5.0 mEq/L"],
                ["Glucose", "104 mg/dL (5.8 mmol/L)", "96 mg/dL (5.3 mmol/L)", "70 mg/dL (3.9 mmol/L) to 99 mg/dL (5.5 mmol/L)"],
              ],
            },
          },
        ],
        rationale:
          "Sodium fell from 138 to 122 mEq/L since day 4. A serum osmolality of 254 mOsm/kg confirms the blood is hypotonic. The kidneys should then make dilute urine. A urine osmolality of 540 mOsm/kg shows they are holding water under antidiuretic hormone. Potassium and glucose are within range.",
        refs: ["In hypotonic hyponatremia, a urine osmolality above 100 mOsm/kg shows antidiuretic hormone activity."],
        sources: [SRC.hypona, SRC.verbalis, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report glucose only in mmol/L, so these results read 5.8 and 5.3 mmol/L. Sodium and potassium keep the same numbers in mmol/L. The Medical Council of Canada lists osmolality in mmol/kg with the same numbers.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Dilute blood", "Kidneys holding water", "Within reference range"],
      rows: [
        { text: "Sodium 122 mEq/L (122 mmol/L)", correct: [0], why: "122 mEq/L is below 135 mEq/L. Retained water dilutes the sodium." },
        { text: "Serum osmolality 254 mOsm/kg", correct: [0], why: "254 mOsm/kg is below 275 mOsm/kg. The blood is hypotonic." },
        { text: "Urine osmolality 540 mOsm/kg", correct: [1], why: "With hypotonic blood, urine above 100 mOsm/kg shows antidiuretic hormone is still acting." },
        { text: "Potassium 3.9 mEq/L (3.9 mmol/L)", correct: [2], why: "3.9 mEq/L lies between 3.5 and 5.0 mEq/L." },
        { text: "Glucose 96 mg/dL (5.3 mmol/L)", correct: [2], why: "96 mg/dL lies in the reference range, so glucose is not lowering the sodium." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Ranking problems after pituitary surgery",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0745 the nurse reviews the findings before calling the neurosurgery team. Which problem should the nurse address first?",
        rationale:
          "Her sodium fell from 138 to 122 mEq/L since day 4. A fast fall lets water move into brain cells. Headache, vomiting and slowed thinking are early signs of brain swelling. Seizures can follow. Low urine output and a rising weight argue against diabetes insipidus and dehydration.",
        sources: [SRC.hypona, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Diabetes insipidus after pituitary surgery", why: "Diabetes insipidus causes large volumes of dilute urine. Her urine output has fallen." },
        { text: "Brain swelling from a falling sodium", why: "Headache, vomiting and slowed thinking with a sodium of 122 mEq/L suggest brain swelling." },
        { text: "A spinal fluid leak from the surgical site", why: "The drip pad is dry and no fluid drips when she leans forward." },
        { text: "Dehydration from vomiting", why: "One episode of vomiting does not explain a weight gain and a low urine output." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Managing a fluid restriction",
        cjmm: "generate",
        difficulty: 2,
        stem: "The provider diagnoses the syndrome of inappropriate antidiuretic hormone. Prescriptions include a fluid restriction of 800 mL in 24 hours and sodium checks every 4 hours. Which actions should the nurse plan? Select all that apply.",
        rationale:
          "Fluid restriction limits the free water that dilutes her sodium. Ice chips and soup count as fluid. Sugar-free candy and a planned spread of fluids ease thirst. Daily weights on one scale track retained water. She needs the reason for the plan explained. Extra water would lower the sodium further.",
        sources: [SRC.verbalis, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Encourage 2 L of water a day to replace losses", why: "Extra water worsens the low sodium. Intake is limited to 800 mL." },
        { text: "Count ice chips as part of her fluid intake", why: "Ice chips melt to water and count toward the 800 mL limit." },
        { text: "Remove the water jug without telling her why", why: "She needs to know the reason to take part in the plan." },
        { text: "Offer sugar-free hard candy when she feels thirsty", why: "Sugar-free candy eases a dry mouth without adding fluid." },
        { text: "Weigh her each morning before breakfast on the same scale", why: "Daily weights on one scale track water gain or loss." },
        { text: "Serve her meals with large bowls of soup", why: "Soup is fluid and would use up much of the limit." },
        { text: "Spread the fluid allowance over the day", why: "Planned amounts across the day prevent long periods of thirst." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Hypertonic saline bolus rate",
        cjmm: "action",
        difficulty: 3,
        stem: "At 1015 she becomes drowsy and has a generalized seizure lasting 40 seconds. Sodium is now 119 mEq/L (119 mmol/L). The provider prescribes 3% sodium chloride 150 mL IV over 20 minutes. At what rate in mL/hour should the nurse set the infusion pump?",
        rationale:
          "A seizure is a severe symptom of hyponatremia and calls for a hypertonic saline bolus. 150 mL over 20 minutes is 7.5 mL/minute. That is 450 mL/hour. Hypertonic saline is a high-alert drug. A second nurse checks the pump setting.",
        refs: ["Severe symptomatic hyponatremia is treated with 150 mL of 3% saline IV over 20 minutes."],
        calc: { expr: "150 / 20 * 60", answer: 450, unit: "mL/hour", round: 0, steps: ["150 / 20 = 7.5", "7.5 * 60 = 450"] },
        sources: [SRC.hypona, SRC.ismp],
      }),
      kind: "mc",
      options: [
        { text: "150 mL/hour", why: "This runs the bolus over 60 minutes, three times longer than prescribed." },
        { text: "225 mL/hour", why: "This runs the bolus over 40 minutes, twice as long as prescribed." },
        { text: "450 mL/hour", why: "150 mL over 20 minutes is 7.5 mL/minute, or 450 mL/hour." },
        { text: "900 mL/hour", why: "This gives the bolus in half the prescribed time." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "RRP",
        topic: "Safe pace of sodium correction",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "Her sodium was 119 mEq/L at 1015. At 1045 she is awake with no further seizure and her headache is easing. The repeat sodium is 124 mEq/L (124 mmol/L). Complete the sentence below by choosing from the lists of options.",
        rationale:
          "Sodium rose from 119 to 124 mEq/L, a rise of 5 mEq/L. Her seizure has not returned and her headache is easing. That meets the first-hour goal. Further hypertonic saline is stopped. The rise is kept within 10 mEq/L in the first 24 hours to prevent osmotic demyelination. Fluid restriction continues.",
        refs: ["In severe symptomatic hyponatremia, the first-hour goal is a sodium rise of 5 mmol/L.", "The sodium rise is limited to 10 mmol/L in the first 24 hours."],
        calc: { expr: "124 - 119", answer: 5, unit: "mEq/L", round: 0, steps: ["124 - 119 = 5"] },
        sources: [SRC.hypona, SRC.verbalis],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The sodium has risen by {0}, which meets the first-hour goal. The nurse expects the provider to {1}.",
      blanks: [
        {
          options: [
            { text: "3 mEq/L", why: "The values show a rise from 119 to 124 mEq/L, which is more than 3." },
            { text: "5 mEq/L", why: "124 minus 119 is 5 mEq/L, the goal for the first hour." },
            { text: "8 mEq/L", why: "The values show a smaller rise than 8 mEq/L." },
            { text: "12 mEq/L", why: "12 mEq/L would exceed the 24-hour limit. The values show a smaller rise." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "give two more 3% saline boluses in the next hour", why: "More boluses are for ongoing severe symptoms. Hers are easing." },
            { text: "stop the 3% saline and cap the 24-hour rise at 10 mEq/L", why: "Symptoms eased after a 5 mEq/L rise. More hypertonic saline risks overcorrection." },
            { text: "lift the fluid restriction to 2 L a day", why: "More water would lower the sodium again. The restriction continues." },
            { text: "start 0.9% saline at 125 mL/hour", why: "With concentrated urine, the kidneys keep the water and excrete the salt. Sodium can fall further." },
          ],
          correct: 1,
        },
      ],
    },
  ],
};
