import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c02-1";

/** Case 1. Surgical unit. Adult woman on the first morning after total thyroidectomy. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Numb Lips on the Morning After Neck Surgery",
  intro:
    "A 44-year-old woman had a total thyroidectomy for Graves disease at 1400 yesterday. She is on the surgical unit. At 0600 she calls the nurse. She says her lips and fingertips feel numb and tingly and her hands feel stiff. She says she feels anxious.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Graves disease diagnosed 2 years ago. Methimazole stopped on the day of surgery.",
        "Total thyroidectomy completed yesterday at 1400. Estimated blood loss 50 mL.",
        "No other chronic illness. No known allergies.",
        "Levothyroxine 100 mcg by mouth daily to start this morning.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2200", "0600"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)", "37.3°C (99.1°F)"],
          ["Heart rate", "88/minute", "104/minute"],
          ["Respiratory rate", "16/minute", "20/minute"],
          ["BP", "124/78 mmHg", "132/84 mmHg"],
          ["SpO2 on room air", "97%", "96%"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "2000", "0500", "Reference range"],
        rows: [
          ["Total calcium", "8.6 mg/dL (2.15 mmol/L)", "7.1 mg/dL (1.77 mmol/L)", "8.6 to 10.2 mg/dL"],
          ["Magnesium", "1.9 mg/dL (0.78 mmol/L)", "1.9 mg/dL (0.78 mmol/L)", "1.8 to 2.4 mg/dL"],
          ["Intact parathyroid hormone", "Not drawn", "9 pg/mL (9 ng/L)", "15 to 65 pg/mL"],
          ["Hemoglobin", "12.9 g/dL (129 g/L)", "12.8 g/dL (128 g/L)", "12 to 16 g/dL"],
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
        topic: "Neuromuscular signs after thyroid surgery",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse assesses the client at 0610 and writes the note below. Click to highlight the findings that require follow-up.",
        rationale:
          "Numbness around the mouth and in the fingertips shows nerve irritability. Facial twitching when the cheek in front of the ear is tapped is a Chvostek sign. Hand spasm while a BP cuff is inflated is a Trousseau sign. Both signs point to a low calcium level. The parathyroid glands can be bruised or lose blood supply during a total thyroidectomy. A small amount of drainage, safe swallowing, a clear voice and mild pain are expected on the first morning.",
        sources: [SRC.brunner, SRC.ata],
      }),
      kind: "highlight",
      passage:
        "[[Numbness and tingling around the mouth and in the fingertips]]. [[Neck dressing with a small spot of pink drainage]]. [[Face twitches when the cheek in front of the ear is tapped]]. [[Swallows sips of water without coughing]]. [[Voice clear and at her usual strength]]. [[Hand and wrist spasm while the BP cuff is inflated]]. [[Rates incision pain 3 on a 0 to 10 scale]].",
      spans: [
        { text: "Numbness and tingling around the mouth and in the fingertips", why: "Perioral and fingertip tingling is an early sign of low calcium." },
        { text: "Neck dressing with a small spot of pink drainage", why: "A small amount of serosanguineous drainage is expected on the first day." },
        { text: "Face twitches when the cheek in front of the ear is tapped", why: "This is a positive Chvostek sign, a sign of neuromuscular irritability." },
        { text: "Swallows sips of water without coughing", why: "Safe swallowing shows no sign of airway or nerve problems." },
        { text: "Voice clear and at her usual strength", why: "A normal voice makes laryngeal nerve injury unlikely." },
        { text: "Hand and wrist spasm while the BP cuff is inflated", why: "This is a positive Trousseau sign, a sign of low calcium." },
        { text: "Rates incision pain 3 on a 0 to 10 scale", why: "Mild incision pain is expected on the first morning after surgery." },
      ],
      correct: [0, 2, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Parathyroid function after thyroidectomy",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the chart and the 0500 laboratory results. For each finding, specify whether it is consistent with low parathyroid function or not a sign of low parathyroid function.",
        rationale:
          "The total calcium fell from 8.6 mg/dL (2.15 mmol/L) to 7.1 mg/dL (1.77 mmol/L) overnight. The intact parathyroid hormone is 9 pg/mL. A level this low after a thyroidectomy means the glands are not making enough hormone. The Trousseau sign reflects the low calcium. A normal magnesium rules out low magnesium as a cause of the low calcium. The hemoglobin and temperature do not reflect parathyroid function.",
        refs: [
          "Total serum calcium below 8.6 mg/dL (2.15 mmol/L) is low.",
          "An intact parathyroid hormone below 15 pg/mL after thyroidectomy signals a raised risk of low parathyroid function.",
          "Serum magnesium of 1.8 mg/dL (0.74 mmol/L) or more is not low.",
        ],
        sources: [SRC.ata, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report calcium and magnesium only in mmol/L and parathyroid hormone in pmol/L. The level of 9 pg/mL reads about 1.0 pmol/L, below the Medical Council of Canada lower limit of 1.6 pmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Consistent with low parathyroid function", "Not a sign of low parathyroid function"],
      rows: [
        { text: "Total calcium 7.1 mg/dL (1.77 mmol/L)", correct: [0], why: "The calcium is below 8.6 mg/dL (2.15 mmol/L) and fell overnight." },
        { text: "Intact parathyroid hormone 9 pg/mL", correct: [0], why: "A level below 15 pg/mL after surgery shows too little hormone." },
        { text: "Magnesium 1.9 mg/dL (0.78 mmol/L)", correct: [1], why: "Magnesium is within range, so it is not adding to the low calcium." },
        { text: "Hand spasm with BP cuff inflation", correct: [0], why: "A Trousseau sign reflects the low calcium that follows gland injury." },
        { text: "Hemoglobin 12.8 g/dL (128 g/L)", correct: [1], why: "The hemoglobin is stable and within range. It reflects blood loss, not gland function." },
        { text: "Temperature 37.3°C (99.1°F)", correct: [1], why: "A temperature of 37.3°C is normal and unrelated to the parathyroid glands." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Airway risk with postoperative hypocalcemia",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 0620 the client says the cramps in her hands are getting worse. Her voice is clear and the neck looks the same size as last evening. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A calcium of 7.1 mg/dL (1.77 mmol/L) with worsening hand cramps shows rising neuromuscular irritability. The same irritability can close the vocal cords in laryngospasm, which blocks the airway. A neck of unchanged size and a clear voice make a hematoma or nerve injury less likely. The heart rate of 104/minute and temperature of 37.3°C (99.1°F) do not fit thyroid storm.",
        sources: [SRC.brunner, SRC.ata],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "thyroid storm", why: "Thyroid storm brings a high fever and marked tachycardia. The temperature is 37.3°C." },
            { text: "laryngospasm", why: "Low calcium makes muscles irritable, and spasm of the vocal cords can block the airway." },
            { text: "neck hematoma", why: "A hematoma swells the neck. The neck is the same size as last evening." },
            { text: "vocal cord nerve injury", why: "Nerve injury causes hoarseness or a weak voice. Her voice is clear." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a temperature of 37.3°C (99.1°F)", why: "This temperature is normal and does not point to any of the listed problems." },
            { text: "a magnesium of 1.9 mg/dL (0.78 mmol/L)", why: "Magnesium is within range and does not raise the airway risk." },
            { text: "a calcium of 7.1 mg/dL (1.77 mmol/L)", why: "The calcium is low and falling, which drives the muscle irritability." },
            { text: "a hemoglobin of 12.8 g/dL (128 g/L)", why: "The hemoglobin is stable and does not suggest bleeding." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "an unchanged neck size", why: "An unchanged neck makes a hematoma less likely. It is not a warning sign." },
            { text: "incision pain of 3 of 10", why: "Mild incision pain is expected and does not raise the airway risk." },
            { text: "a pink spot of drainage", why: "A small spot of drainage is expected on the first day." },
            { text: "worsening hand cramps", why: "Worsening cramps show the irritability is increasing." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety measures after thyroidectomy",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans care while waiting for the primary health care provider to call back. Which safety measures should the nurse plan? Select all that apply.",
        rationale:
          "A tracheostomy tray at the bedside allows a fast response if laryngospasm or swelling blocks the airway. Seizure precautions protect the client because low calcium can cause seizures. Blood from the incision can pool behind the neck, so the nurse checks under the dressing at the back. A raised head of bed lowers neck swelling and eases breathing. A flat bed, a fully extended neck and holding all fluids do not add safety.",
        sources: [SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Keep the head of the bed flat", why: "A flat position raises swelling in the neck. The head is kept raised." },
        { text: "Keep a tracheostomy tray at the bedside", why: "The tray allows a fast response if the airway closes." },
        { text: "Extend the neck fully during dressing checks", why: "Full extension strains the incision. The head and neck are supported instead." },
        { text: "Start seizure precautions", why: "Low calcium can cause seizures, so the room is made safe in advance." },
        { text: "Check behind the neck for pooled drainage", why: "Blood can run behind the neck and be missed on the front of the dressing." },
        { text: "Hold all oral fluids until tomorrow", why: "She swallows safely, so holding fluids adds no safety and risks dehydration." },
        { text: "Raise the head of the bed 30 to 45 degrees", why: "A raised head lowers neck swelling and eases breathing." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Calcium gluconate volume",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes calcium gluconate 2 g IV, diluted and given over 10 minutes with cardiac monitoring. The vial contains calcium gluconate 100 mg/mL. How many mL of calcium gluconate should the nurse draw up before dilution?",
        rationale:
          "The prescribed dose of 2 g equals 2000 mg. The vial holds 100 mg/mL. Dividing 2000 mg by 100 mg/mL gives 20 mL. Given over 10 minutes, the dose runs at 200 mg/minute, which is the adult limit. The dose is diluted first, and the heart rhythm is watched because fast calcium can cause arrhythmias.",
        refs: ["In adults, a calcium gluconate bolus should not run faster than 200 mg/minute."],
        calc: { expr: "2 * 1000 / 100", answer: 20, unit: "mL", round: 0, steps: ["2 * 1000 = 2000", "2000 / 100 = 20"] },
        sources: [SRC.calcium],
      }),
      kind: "mc",
      options: [
        { text: "2 mL", why: "This gives 200 mg, one tenth of the prescribed dose." },
        { text: "10 mL", why: "This gives 1000 mg, half of the prescribed 2 g." },
        { text: "20 mL", why: "2000 mg divided by 100 mg/mL gives 20 mL." },
        { text: "200 mL", why: "This is 10 times the correct volume. It comes from a misplaced decimal." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Discharge readiness after thyroidectomy",
        cjmm: "evaluate",
        process: "nursing-process",
        difficulty: 3,
        stem: "On day 2 the client takes oral calcium carbonate and calcitriol. The surgeon plans discharge today if she is ready. For each finding, specify whether it supports discharge today or needs follow-up before discharge.",
        rationale:
          "A calcium of 8.7 mg/dL (2.17 mmol/L) on two checks and no symptoms for 18 hours show the replacement is working. Knowing when to call supports a safe discharge. Stopping calcium early can bring the low calcium back. No follow-up blood test means a return of low calcium or a rebound high calcium could be missed. A new facial twitch shows ongoing irritability, which needs review before she leaves.",
        sources: [SRC.ata, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports discharge today", "Needs follow-up before discharge"],
      rows: [
        { text: "Total calcium 8.7 mg/dL (2.17 mmol/L) on two checks", correct: [0], why: "A stable calcium in the reference range shows the replacement is working." },
        { text: "No numbness or cramps for 18 hours", correct: [0], why: "The absence of symptoms shows the calcium is controlled." },
        { text: "\"I will stop the calcium once I feel well.\"", correct: [1], why: "Stopping early can bring back low calcium. She needs further teaching." },
        { text: "\"I will call if my lips or fingers tingle.\"", correct: [0], why: "She knows the early warning sign of low calcium." },
        { text: "No blood test booked after discharge", correct: [1], why: "Calcium is checked after discharge to catch low or rebound high levels." },
        { text: "Face twitches when the cheek is tapped this morning", correct: [1], why: "A positive Chvostek sign shows ongoing irritability that needs review." },
      ],
    },
  ],
};
