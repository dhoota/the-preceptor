import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c13-3";

/** Case 3. Medical unit. Older woman admitted with a chest infection and low oxygen. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Cough and New Muddled Thinking in an Older Woman",
  intro:
    "An 81-year-old woman is admitted to the medical unit from the emergency department at 1400. She has had a cough, fever and poor appetite for 3 days. Her daughter says she has been muddled since yesterday. A chest x-ray shows right lower lobe consolidation.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Lives alone and manages her own home and medications.",
        "Hypertension. Takes lisinopril 10 mg by mouth daily.",
        "Osteoarthritis of both knees. Walks with a cane.",
        "Wears hearing aids in both ears.",
        "No lung disease. Never smoked.",
        "Weight 58 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "38.4°C (101.1°F)"],
          ["Heart rate", "108/minute"],
          ["Respiratory rate", "26/minute"],
          ["BP", "132/76 mmHg"],
          ["SpO2", "86% on room air"],
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
        topic: "Urgent cues in an older adult with pneumonia",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1415 the nurse finishes a head-to-toe check of the new arrival on the medical unit. Which of her findings need action now? Select all that apply.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "1415. Oriented to person only. Daughter says she was fully oriented 2 days ago.",
              "Coughing up thick yellow sputum.",
              "Pain in the right side of the chest with deep breaths, 3 of 10.",
              "Has eaten little for 3 days.",
              "Hearing aids in place.",
            ].join("\n"),
          },
        ],
        rationale:
          "An SpO2 of 86% on room air shows hypoxemia. A respiratory rate of 26/minute shows the work of breathing is high. New disorientation in an older adult can be the first sign of hypoxemia or severe infection. These cues need action now. Yellow sputum and mild pain with deep breaths fit the known pneumonia. Poor intake needs attention but is less urgent. Hearing aids are her baseline.",
        sources: [SRC.cap, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Coughing up thick yellow sputum", why: "Purulent sputum fits the known pneumonia and does not signal a new threat." },
        { text: "SpO2 86% on room air", why: "An SpO2 of 86% shows hypoxemia that needs oxygen now." },
        { text: "Hearing aids in both ears", why: "Hearing aids are part of her baseline and need no follow-up." },
        { text: "Chest pain with deep breaths, 3 of 10", why: "Mild pleuritic pain is common in pneumonia and is not an emergency." },
        { text: "Respiratory rate 26/minute", why: "A rate of 26/minute shows increased work of breathing." },
        { text: "Little food eaten for 3 days", why: "Poor intake matters for recovery, but it is less urgent than breathing and mental status." },
        { text: "Oriented to person only", why: "New disorientation is an acute change that can reflect hypoxemia or sepsis." },
      ],
      correct: [1, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Reading the blood gas in pneumonia",
        cjmm: "analyze",
        difficulty: 3,
        stem: "An arterial blood gas and other laboratory tests were drawn on room air at 1420. Complete the following sentence by choosing from the lists of options.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "1420", "Reference range"],
              rows: [
                ["pH", "7.48", "7.35 to 7.45"],
                ["PaCO2", "31 mmHg", "35 to 45 mmHg"],
                ["Bicarbonate", "23 mEq/L (23 mmol/L)", "22 to 26 mEq/L"],
                ["PaO2", "54 mmHg", "80 to 100 mmHg"],
                ["WBC", "16 400/mm3", "4500 to 11 000/mm3"],
                ["BUN", "18 mg/dL (6.4 mmol/L)", "upper limit 20 mg/dL (7.1 mmol/L)"],
                ["Creatinine", "1.1 mg/dL (97 micromol/L)", "0.6 to 1.1 mg/dL"],
                ["Lactate", "1.4 mmol/L", "0.5 to 2.2 mmol/L"],
              ],
            },
          },
        ],
        rationale:
          "The pH of 7.48 is above 7.45, so the blood is alkalotic. The PaCO2 of 31 mmHg is low because rapid breathing blows off carbon dioxide. The bicarbonate of 23 mEq/L is normal, so the cause is respiratory. The PaO2 of 54 mmHg is well below 80 mmHg and shows hypoxemia. The raised WBC fits infection but is not part of the gas result.",
        sources: [SRC.brunner, SRC.bts, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada:
          "Canadian labs report these results in SI units only and report urea rather than BUN. Urea reads 6.4 mmol/L, creatinine 97 micromol/L and WBC 16.4 x 10^9/L. Blood gas pressures stay in mmHg.",
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The arterial blood gas shows {0}, as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "respiratory acidosis with hypoxemia", why: "Acidosis needs a pH below 7.35. Her pH is 7.48." },
            { text: "respiratory alkalosis with hypoxemia", why: "A high pH, a low PaCO2 and a low PaO2 fit this result." },
            { text: "metabolic alkalosis with hypoxemia", why: "Metabolic alkalosis raises the bicarbonate. Hers is 23 mEq/L, within range." },
            { text: "metabolic acidosis with hypoxemia", why: "Metabolic acidosis lowers the pH and bicarbonate. Neither is low here." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a bicarbonate of 23 mEq/L", why: "A bicarbonate within range shows no metabolic cause." },
            { text: "a lactate of 1.4 mmol/L", why: "A lactate within range does not describe the acid-base state." },
            { text: "a pH of 7.48", why: "A pH above 7.45 shows alkalosis." },
            { text: "a BUN of 18 mg/dL", why: "The BUN is within range and is not part of the gas result." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a WBC of 16 400/mm3", why: "The WBC fits infection but does not show low oxygen." },
            { text: "a PaO2 of 54 mmHg", why: "A PaO2 below 80 mmHg shows hypoxemia." },
            { text: "a temperature of 38.4°C", why: "Fever fits infection but does not measure oxygen." },
            { text: "a creatinine of 1.1 mg/dL", why: "The creatinine is within range and does not show hypoxemia." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First problem to address in pneumonia with confusion",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1500 the nurse sets priorities for the client's care. The client tries to climb out of bed and pulls at her gown. Which client problem should the nurse address first?",
        rationale:
          "Hypoxemia is the most immediate threat to life. An SpO2 of 86% and a PaO2 of 54 mmHg show her tissues are short of oxygen. Low oxygen can itself cause the new confusion and restlessness. Correcting it may reduce the fall risk and the confusion together. Her BUN and creatinine are within range, so fluid volume is less urgent.",
        sources: [SRC.brunner, SRC.bts],
      }),
      kind: "mc",
      options: [
        { text: "Risk for falls", why: "Fall risk is real, but low oxygen threatens life sooner and may be driving the restlessness." },
        { text: "Acute confusion", why: "The confusion may improve once the hypoxemia that drives it is corrected." },
        { text: "Impaired gas exchange", why: "An SpO2 of 86% and a PaO2 of 54 mmHg show a direct threat to oxygen delivery." },
        { text: "Deficient fluid volume", why: "Intake has been poor, but her BUN and creatinine are within range." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Expected treatment for pneumonia on the ward",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 4,
        stem: "The nurse reviews the admission plan with the primary health care provider. For each intervention, specify whether it is anticipated or not anticipated for this client at this time.",
        rationale:
          "Oxygen corrects hypoxemia. A target of 94% to 98% suits a client with no risk of carbon dioxide retention. A beta-lactam such as ceftriaxone with a macrolide such as azithromycin is a standard regimen for pneumonia on a general ward. Deep breathing with an incentive spirometer helps open the airways. Routine corticosteroids are not advised in pneumonia that is not severe. Early mobility and restraint alternatives support recovery.",
        refs: ["For adults with no risk of hypercapnic respiratory failure, the target SpO2 is 94% to 98%."],
        sources: [SRC.cap, SRC.bts],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Anticipated", "Not anticipated"],
      rows: [
        { text: "Oxygen by nasal cannula titrated to SpO2 94% to 98%", correct: [0], why: "She has no lung disease, so this target corrects hypoxemia safely." },
        { text: "Strict bed rest until the fever resolves", correct: [1], why: "Early mobility helps clear secretions and prevents the harms of bed rest." },
        { text: "IV ceftriaxone with azithromycin", correct: [0], why: "A beta-lactam with a macrolide is a standard ward regimen for pneumonia." },
        { text: "Routine IV methylprednisolone", correct: [1], why: "Corticosteroids are not advised for pneumonia that is not severe." },
        { text: "Incentive spirometer use each hour while awake", correct: [0], why: "Deep breaths expand the lungs and help move secretions." },
        { text: "Wrist restraints to keep the oxygen in place", correct: [1], why: "Restraints can worsen agitation and injury. Alternatives are tried first." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Rate for an IV antibiotic piggyback",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The pharmacy sends ceftriaxone 1 g in 50 mL of 0.9% sodium chloride. It is to infuse over 30 minutes by pump. At what rate should the nurse set the pump in mL/hour?",
        rationale:
          "The bag holds 50 mL and must run over 30 minutes. That is 50 mL in half an hour. Over a full 60 minutes the pump would move twice that volume, so the rate is 100 mL/hour.",
        calc: { expr: "50 / 30 * 60", answer: 100, unit: "mL/hour", round: 0, steps: ["50 / 30 * 60 = 100"] },
        sources: [SRC.potter],
      }),
      kind: "mc",
      options: [
        { text: "50 mL/hour", why: "50 mL/hour would take 60 minutes to deliver the bag." },
        { text: "100 mL/hour", why: "50 mL over 30 minutes is 100 mL over 60 minutes." },
        { text: "150 mL/hour", why: "150 mL/hour runs faster than prescribed and finishes the dose early." },
        { text: "200 mL/hour", why: "200 mL/hour is double the correct rate and gives the dose too fast." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Signs that acute confusion is clearing",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "On day 3 the nurse reviews the client's progress. Which two findings best show that her acute confusion is resolving? Select two.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "Day 3, 1000. Names the day, the month and the hospital correctly.",
              "Follows a 10-minute conversation without drifting off topic.",
              "Temperature 37.2°C (99.0°F).",
              "SpO2 95% on 1 L/minute by nasal cannula.",
              "Ate half of her breakfast.",
              "Slept from 2300 to 0600.",
            ].join("\n"),
          },
        ],
        rationale:
          "Acute confusion is a disturbance of attention and awareness. Correct orientation shows her awareness has returned. Following a conversation without drifting shows her attention has recovered. Inattention is the core feature of delirium. A lower temperature and better oxygen show the pneumonia is improving. Food intake and sleep are good signs but do not measure thinking.",
        sources: [SRC.cam, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Temperature 37.2°C (99.0°F)", why: "A falling temperature shows the infection is improving, not how she thinks." },
        { text: "Names the day and hospital", why: "Correct orientation shows awareness has returned." },
        { text: "SpO2 95% on 1 L/minute", why: "Better oxygen removes a cause of confusion but does not measure thinking." },
        { text: "Ate half of her breakfast", why: "Better intake is welcome but does not measure attention or awareness." },
        { text: "Follows a conversation", why: "Sustained attention shows the core feature of delirium has cleared." },
        { text: "Slept from 2300 to 0600", why: "Good sleep supports recovery but does not measure thinking." },
      ],
      correct: [1, 4],
    },
  ],
};
