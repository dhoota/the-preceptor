import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c07-1";

/** Case 1. Surgical unit. Woman with untreated Graves disease on the day after abdominal surgery. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Racing Heart After Abdominal Surgery",
  intro:
    "A 36-year-old woman is on the surgical unit on postoperative day 1 after a laparoscopic appendectomy for a perforated appendix. At 0600 she tells the nurse that her heart is racing and she feels hot and restless.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Graves disease diagnosed 2 years ago. Prescribed methimazole 10 mg by mouth daily.",
        "Stopped taking methimazole about 6 weeks ago because she felt well. She did not report this before surgery.",
        "No other medical history. No known drug allergies.",
        "Weight 62 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 0 at 2000", "Day 1 at 0600"],
        rows: [
          ["Temperature", "37.6°C (99.7°F)", "39.8°C (103.6°F)"],
          ["Heart rate", "104/minute, regular", "148/minute, irregular"],
          ["Respiratory rate", "18/minute", "26/minute"],
          ["BP", "128/74 mmHg", "146/62 mmHg"],
          ["SpO2", "98% on room air", "94% on room air"],
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
        topic: "Cues of severe thyrotoxicosis after surgery",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 0610 the nurse examines the client and records the findings below. Click to highlight the findings that require follow-up.",
        rationale:
          "Restlessness, hot moist skin and a hand tremor reflect a high metabolic rate. An irregular apical pulse fits the new irregular heart rate of 148/minute. Loose stools reflect fast gut motility. With a temperature of 39.8°C and methimazole stopped 6 weeks ago, these cues point to severe thyrotoxicosis. Orientation, clean port sites, mild incision pain and a normal void are expected.",
        sources: [SRC.ata, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Oriented to person, place and time]]. [[Restless and unable to stay in bed]]. [[Skin hot and moist]]. [[Fine tremor of both hands]]. [[Apical pulse irregular]]. [[Reports 4 loose stools since midnight]]. [[Port sites dry with no redness]]. [[Incision pain 3 on a 0 to 10 scale]]. [[Voided 350 mL of clear yellow urine]].",
      spans: [
        { text: "Oriented to person, place and time", why: "Full orientation is expected and needs no follow-up now." },
        { text: "Restless and unable to stay in bed", why: "Agitation is a central nervous system sign of excess thyroid hormone." },
        { text: "Skin hot and moist", why: "Hot, moist skin reflects heat production from a high metabolic rate." },
        { text: "Fine tremor of both hands", why: "A fine tremor reflects increased sympathetic activity from thyroid hormone excess." },
        { text: "Apical pulse irregular", why: "An irregular pulse suggests atrial fibrillation, a known complication of thyrotoxicosis." },
        { text: "Reports 4 loose stools since midnight", why: "Diarrhea reflects increased gut motility and adds to fluid loss." },
        { text: "Port sites dry with no redness", why: "Clean, dry port sites are expected on day 1 after surgery." },
        { text: "Incision pain 3 on a 0 to 10 scale", why: "Mild incision pain is expected on the first day after surgery." },
        { text: "Voided 350 mL of clear yellow urine", why: "A normal void shows adequate kidney perfusion at this time." },
      ],
      correct: [1, 2, 3, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Laboratory and ECG findings in thyroid storm",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the history, the laboratory results drawn at 0630 and a 12-lead ECG. For each finding, specify whether it supports thyroid storm or does not support thyroid storm.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Result", "Reference range"],
              rows: [
                ["Free T4", "5.8 ng/dL (75 pmol/L)", "0.8 to 1.8 ng/dL"],
                ["TSH", "less than 0.01 mIU/L", "0.4 to 4.0 mIU/L"],
                ["Potassium", "3.6 mEq/L (3.6 mmol/L)", "3.5 to 5.0 mEq/L"],
                ["Hemoglobin", "12.1 g/dL (121 g/L)", "120 to 155 g/L"],
              ],
            },
          },
          { title: "ECG", text: "Atrial fibrillation with a ventricular rate of 148/minute." },
        ],
        rationale:
          "A free T4 of 5.8 ng/dL is more than 3 times the upper limit. A TSH below 0.01 mIU/L shows the pituitary is suppressed by excess hormone. Atrial fibrillation and a temperature of 39.8°C are features of thyroid storm. Stopping methimazole abruptly is a known trigger, and surgery added stress. The potassium and hemoglobin are within their reference ranges.",
        sources: [SRC.ata, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report free T4 only in pmol/L and hemoglobin only in g/L, so these results read 75 pmol/L and 121 g/L. TSH in mIU/L and potassium in mmol/L keep the same numbers.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports thyroid storm", "Does not support thyroid storm"],
      rows: [
        { text: "Free T4 5.8 ng/dL (75 pmol/L)", correct: [0], why: "Free T4 far above the reference range shows marked hormone excess." },
        { text: "TSH less than 0.01 mIU/L", correct: [0], why: "High thyroid hormone levels suppress TSH release from the pituitary." },
        { text: "Atrial fibrillation at 148/minute", correct: [0], why: "Thyroid hormone excess raises heart rate and triggers atrial fibrillation." },
        { text: "Potassium 3.6 mEq/L (3.6 mmol/L)", correct: [1], why: "This potassium is within the reference range." },
        { text: "Hemoglobin 12.1 g/dL (121 g/L)", correct: [1], why: "This hemoglobin is within the reference range for an adult woman." },
        { text: "Temperature 39.8°C (103.6°F)", correct: [0], why: "Marked fever reflects failed heat regulation in thyroid storm." },
        { text: "Methimazole stopped 6 weeks ago", correct: [0], why: "Abrupt stopping of an antithyroid drug is a recognized trigger." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Reporting the most urgent change in thyroid storm",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0700 the client's heart rate is 152/minute and irregular. BP is 98/58 mmHg. She reports new shortness of breath, and the nurse hears crackles in both lung bases. Which finding should the nurse report to the primary health care provider first?",
        rationale:
          "BP has fallen from 146/62 to 98/58 mmHg while the rate rose to 152/minute. New crackles and dyspnea mean the heart is failing to keep up. Falling cardiac output threatens life first. Fever, tremor and diarrhea are part of the same storm. They need treatment but do not signal circulatory collapse.",
        sources: [SRC.ata, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Temperature of 39.8°C", why: "The fever needs cooling, but it does not show failing circulation." },
        { text: "Restlessness and hand tremor", why: "These signs reflect excess hormone and are not the most urgent change." },
        { text: "BP 98/58 mmHg with new crackles", why: "Low BP with new crackles signals heart failure from the rapid rhythm." },
        { text: "Four loose stools since midnight", why: "Diarrhea adds to fluid loss but is less urgent than falling cardiac output." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort and cooling measures in thyroid storm",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 2,
        stem: "The client is transferred to the intensive care unit. The nurse plans nonpharmacologic care for the first shift. Which measures should the nurse include? Select all that apply.",
        rationale:
          "A cooling blanket lowers the temperature of 39.8°C. A quiet, dim room and clustered care lower stimulation and oxygen demand. Hourly intake and output guide fluid replacement after fever and diarrhea. Warm blankets trap heat. Walks raise metabolic demand while the rhythm is irregular. Television adds stimulation for an agitated client.",
        sources: [SRC.ata, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Offer warm blankets for chills", why: "Extra covers trap heat when the temperature is already 39.8°C." },
        { text: "Apply a cooling blanket", why: "External cooling is part of the recommended treatment for thyroid storm." },
        { text: "Walk in the hall every 2 hours", why: "Walking raises oxygen demand and fall risk while the rhythm is unstable." },
        { text: "Keep the room quiet and dim", why: "A calm setting lowers stimulation in a client who is agitated." },
        { text: "Cluster care to allow rest", why: "Grouped care gives rest periods and lowers oxygen demand." },
        { text: "Leave the television on for distraction", why: "Noise and light add stimulation and can worsen agitation." },
        { text: "Record intake and output hourly", why: "Fever and diarrhea cause fluid loss, so output guides fluid replacement." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Timing of iodine after an antithyroid drug",
        cjmm: "action",
        difficulty: 4,
        stem: "The primary health care provider prescribes four medications. They are propranolol 60 mg by mouth every 4 hours, propylthiouracil 500 mg by mouth now, potassium iodide solution 5 drops by mouth every 6 hours and hydrocortisone 300 mg IV now. Complete the sentence by dragging a medication to each blank.",
        rationale:
          "Propylthiouracil blocks the making of new thyroid hormone. Iodide given first would supply the gland with material for more hormone. So the iodide starts at least 1 hour after the antithyroid drug. Once synthesis is blocked, iodide stops the release of stored hormone. Propranolol and hydrocortisone have no required timing relative to the iodide. Methimazole is not prescribed.",
        refs: ["Inorganic iodide is not started until at least 1 hour after the antithyroid drug."],
        sources: [SRC.ata],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The nurse gives {0} at least 1 hour before the first dose of {1}.",
      targets: ["First medication", "Second medication"],
      tokens: [
        { text: "propranolol tablets", why: "Propranolol controls heart rate and has no required timing relative to iodide." },
        { text: "propylthiouracil tablets", why: "This antithyroid drug blocks new hormone synthesis before iodide is given." },
        { text: "hydrocortisone IV dose", why: "Hydrocortisone can be given now and has no required timing relative to iodide." },
        { text: "potassium iodide drops", why: "Iodide waits until synthesis is blocked so it does not fuel new hormone." },
        { text: "methimazole tablets", why: "Methimazole is her home drug but it is not part of these prescriptions." },
      ],
      correct: [1, 3],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Self-care after thyroid storm",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Five days later the client is stable and will go home on methimazole. The nurse evaluates her understanding of self-care. Which two statements show understanding? Select two.",
        rationale:
          "Stopping methimazole abruptly triggered this episode, so it continues even when she feels well. Fever or a sore throat can signal agranulocytosis, a rare but serious drug effect, and needs prompt reporting. Stopping the drug when the pulse settles repeats the trigger. Lab visits track thyroid levels even without symptoms. Future surgeons need to know her history so she is treated to normal levels first.",
        sources: [SRC.ata],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I can stop the pills once my pulse is normal.\"", why: "Stopping the drug abruptly is what triggered this episode." },
        { text: "\"I will take methimazole even when I feel well.\"", why: "Continuous therapy prevents a return of severe thyrotoxicosis." },
        { text: "\"I will skip lab visits if I have no symptoms.\"", why: "Scheduled labs guide dosing and catch problems before symptoms appear." },
        { text: "\"My thyroid history will not matter for surgery.\"", why: "Surgery while hyperthyroid is a known trigger, so surgeons need this history." },
        { text: "\"I will report a sore throat or fever.\"", why: "Fever with a sore throat can signal a low white cell count from the drug." },
        { text: "\"I will double my dose if my heart starts racing.\"", why: "Dose changes need the provider and lab results, not self-adjustment." },
      ],
      correct: [1, 4],
    },
  ],
};
