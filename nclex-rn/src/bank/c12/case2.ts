import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c12-2";

/** Case 2. Emergency department. Unresponsive young adult after taking another person's methadone. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Unresponsive Man at the Emergency Entrance",
  intro:
    "A 34-year-old man is carried into the emergency department at 2140 by a friend. The friend says he found him slumped in a parked car. The friend says the man took four 10 mg methadone tablets from a relative at about 1930. He had not used opioids for 6 months.",
  tabs: [
    {
      title: "Nurses' Notes",
      text: [
        "2142. Responds only to a firm sternal rub. Snoring respirations. Pupils 2 mm and equal. Skin cool and dry.",
        "No bruising or swelling of the head or face. No odor of alcohol.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2142"],
        rows: [
          ["Temperature", "36.6°C (97.9°F)"],
          ["Heart rate", "64/minute"],
          ["Respiratory rate", "6/minute, shallow"],
          ["BP", "104/66 mmHg"],
          ["SpO2", "84% on room air"],
          ["Capillary blood glucose", "96 mg/dL (5.3 mmol/L)"],
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
        topic: "Cues needing immediate action in sedation",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the triage note and vital signs recorded at 2142. Which findings require immediate action? Select all that apply.",
        rationale:
          "A respiratory rate of 6/minute that is shallow means the client is not moving enough air. An SpO2 of 84% on room air confirms low oxygen. Snoring respirations mean the relaxed tongue is partly blocking the airway. Responding only to a sternal rub shows deep sedation and a threat to airway protection. The glucose, temperature and BP are within safe limits.",
        sources: [SRC.boyer, SRC.ahaTox],
      }),
      kind: "sata",
      options: [
        { text: "Capillary glucose 96 mg/dL (5.3 mmol/L)", why: "This glucose is within normal limits and needs no immediate action." },
        { text: "Respiratory rate 6/minute, shallow", why: "Slow, shallow breathing does not move enough air and leads to hypoxia." },
        { text: "Temperature 36.6°C (97.9°F)", why: "This temperature is within normal limits." },
        { text: "Snoring respirations", why: "Snoring shows partial airway blockage by the relaxed tongue." },
        { text: "SpO2 84% on room air", why: "An SpO2 of 84% shows low blood oxygen that needs immediate support." },
        { text: "BP 104/66 mmHg", why: "This BP gives adequate perfusion and needs no immediate action." },
        { text: "Responds only to a sternal rub", why: "Response only to pain shows deep sedation and poor airway protection." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Recognizing opioid toxicity",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse considers possible causes of the client's reduced responsiveness. For each finding, specify whether it supports or does not support opioid toxicity.",
        rationale:
          "Methadone taken about 2 hours before, pupils of 2 mm, a respiratory rate of 6/minute and response only to pain form the pattern of opioid toxicity. A glucose of 96 mg/dL (5.3 mmol/L) rules out low blood glucose as the cause. The normal temperature and the lack of an alcohol odor do not point to opioids. No head bruising or swelling makes injury less likely.",
        sources: [SRC.boyer, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports opioid toxicity", "Does not support opioid toxicity"],
      rows: [
        { text: "Pupils 2 mm and equal", correct: [0], why: "Opioids constrict the pupils through their effect on the brain stem." },
        { text: "Capillary glucose 96 mg/dL (5.3 mmol/L)", correct: [1], why: "A normal glucose rules out hypoglycemia but does not point to opioids." },
        { text: "Respiratory rate 6/minute", correct: [0], why: "Opioids depress the brain stem response to carbon dioxide and slow breathing." },
        { text: "Temperature 36.6°C (97.9°F)", correct: [1], why: "A normal temperature does not point to any toxic cause." },
        { text: "Methadone taken at about 1930", correct: [0], why: "Methadone is a long-acting opioid taken about 2 hours before arrival." },
        { text: "No odor of alcohol", correct: [1], why: "The absence of an alcohol odor does not point to opioids." },
        { text: "Responds only to a sternal rub", correct: [0], why: "Deep sedation is a central effect of opioid toxicity." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "First priority in opioid toxicity",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "The nurse determines what to address first for this client. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Restoring ventilation and oxygenation comes before any other care. A respiratory rate of 6/minute and an SpO2 of 84% show that the client is not breathing enough. Methadone depresses the brain stem drive to breathe. Withdrawal is a later risk after reversal. The glucose is normal and the head shows no signs of injury. There is no odor of alcohol.",
        sources: [SRC.boyer, SRC.ahaTox],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address {0} related to {1}.",
      blanks: [
        {
          options: [
            { text: "risk for opioid withdrawal", why: "Withdrawal can follow reversal but does not threaten life now." },
            { text: "inadequate ventilation", why: "A rate of 6/minute and an SpO2 of 84% show breathing failure." },
            { text: "acute confusion", why: "Reduced responsiveness matters, but failed breathing is the threat to life." },
            { text: "risk for hypothermia", why: "The temperature is 36.6°C, which is within normal limits." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "low blood glucose", why: "The glucose is 96 mg/dL (5.3 mmol/L), which is within normal limits." },
            { text: "alcohol intoxication", why: "There is no odor of alcohol and no report of drinking." },
            { text: "methadone toxicity", why: "Methadone depresses the brain stem drive to breathe." },
            { text: "a closed head injury", why: "The head and face show no bruising or swelling." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety while sedated after reversal",
        cjmm: "generate",
        difficulty: 3,
        stem: "After IV naloxone at 2146 the client breathes 14/minute and opens his eyes to his name. He vomits once and falls asleep again. Which three safety measures should the nurse include in the plan? Select three.",
        rationale:
          "The client is drowsy and has vomited, so suction at the bedside protects the airway. A low bed limits injury if he tries to get up while sedated. Securing his belongings keeps any further tablets out of reach. Restraints are not indicated for a calm, drowsy client. Walking alone and drinking while drowsy raise the risk of falls and aspiration.",
        sources: [SRC.boyer, SRC.falls],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Keep suction set up at the bedside", why: "Suction clears vomit from the airway of a drowsy client." },
        { text: "Apply soft wrist restraints", why: "Restraints are not indicated for a calm, drowsy client and carry their own risk of harm." },
        { text: "Let him walk to the bathroom alone", why: "Sedation raises his fall risk. He needs help to walk." },
        { text: "Keep the bed in its lowest position", why: "A low bed lessens injury if the drowsy client gets up or falls." },
        { text: "Offer sips of water to keep him awake", why: "Drinking while drowsy after vomiting raises the risk of aspiration." },
        { text: "Secure his belongings and any tablets", why: "Securing belongings keeps any more tablets out of his reach." },
      ],
      correct: [0, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Naloxone infusion rate",
        cjmm: "action",
        difficulty: 2,
        stem: "At 2250 the client's respiratory rate falls to 8/minute and he is hard to rouse again. After a repeat dose, the primary health care provider prescribes a naloxone infusion at 0.4 mg/hour. The pharmacy supplies naloxone 2 mg in 500 mL of 0.9% sodium chloride. At what rate should the nurse set the infusion pump?",
        rationale:
          "Methadone acts longer than naloxone, so sedation returned after the first dose. The bag holds 2 mg in 500 mL, which is 0.004 mg/mL. Dividing 0.4 mg/hour by 0.004 mg/mL gives 100 mL/hour. Recurrent respiratory depression after a single dose is an indication for a continuous infusion.",
        calc: { expr: "0.4 / (2 / 500)", answer: 100, unit: "mL/hour", round: 0, steps: ["2 / 500 = 0.004", "0.4 / 0.004 = 100"] },
        sources: [SRC.boyer, SRC.naloxone],
      }),
      kind: "mc",
      options: [
        { text: "20 mL/hour", why: "This rate delivers one fifth of the prescribed hourly dose." },
        { text: "50 mL/hour", why: "This rate delivers half of the prescribed hourly dose." },
        { text: "100 mL/hour", why: "0.4 mg/hour divided by 0.004 mg/mL gives 100 mL/hour." },
        { text: "250 mL/hour", why: "This rate delivers more than double the prescribed hourly dose." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Overdose response teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "The next afternoon the client is alert and is ready to leave. The nurse teaches the client and his friend about overdose risk and how to use a naloxone nasal spray. For each statement, specify whether it shows understanding or needs further teaching.",
        refs: ["Naloxone wears off after 30 to 90 minutes, and overdose signs can return.", "Tolerance falls after a period without opioids, which raises the risk of overdose."],
        rationale:
          "Tolerance falls after 6 months without opioids, so a usual amount can now cause an overdose. The spray must be where others can reach it. The responder gives naloxone, calls 911 and gives a second dose after 2 to 3 minutes if there is no response. Naloxone wears off after 30 to 90 minutes, so the person is not left alone. Using alone removes the chance of rescue.",
        sources: [SRC.samhsa, { body: "Health Canada", work: "About the Good Samaritan Drug Overdose Act", year: 2017, url: "https://www.canada.ca/en/health-canada/services/opioids/about-good-samaritan-drug-overdose-act.html" }],
        canada:
          "Canada's Good Samaritan Drug Overdose Act, in force since 2017, protects people who call 911 at an overdose from simple drug possession charges. Free take-home naloxone kits vary by province.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "Client: \"My tolerance is lower after 6 months off opioids.\"", correct: [0], why: "Tolerance falls after time without opioids, so a usual amount can cause overdose." },
        { text: "Friend: \"If he wakes after the spray, I can let him sleep it off alone.\"", correct: [1], why: "Naloxone can wear off before the opioid does, so someone stays with him." },
        { text: "Client: \"I will keep the spray where my friend can find it.\"", correct: [0], why: "The spray is only useful if a responder can reach it fast." },
        { text: "Friend: \"I will call 911 after I give the spray.\"", correct: [0], why: "Emergency care is still needed because signs of overdose can return." },
        { text: "Client: \"Using alone is safer because no one will call the police.\"", correct: [1], why: "Using alone removes the chance that someone gives naloxone." },
        { text: "Friend: \"I can give a second dose if he does not respond in 2 to 3 minutes.\"", correct: [0], why: "A second dose is given after 2 to 3 minutes if there is no response." },
      ],
    },
  ],
};
