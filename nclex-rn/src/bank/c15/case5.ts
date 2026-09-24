import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c15-5";

/** Case 5. Emergency department. Middle-aged man whose convulsions do not stop. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Convulsions That Do Not Stop",
  intro:
    "A 47-year-old man with epilepsy arrives at the emergency department by ambulance at 0831. His partner saw a generalized tonic-clonic seizure begin at home at 0812. He has not woken between bouts of jerking. He ran out of levetiracetam 3 days ago.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Epilepsy since age 20. Levetiracetam 1000 mg by mouth twice daily.",
        "Ran out of levetiracetam 3 days ago.",
        "Worked night shifts all week and slept little.",
        "Drank 6 beers last night.",
        "Weight 70 kg. No known drug allergies.",
      ].join("\n"),
    },
    {
      title: "Prehospital Report",
      text: [
        "0812: Seizure onset witnessed by partner.",
        "0819: Midazolam 10 mg IM given by paramedics.",
        "0822: Glucose 104 mg/dL (5.8 mmol/L).",
        "0826: Brief pause, then jerking of all limbs resumed. Did not wake.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0833"],
        rows: [
          ["Temperature", "38.1°C (100.6°F)"],
          ["Heart rate", "132/minute"],
          ["Respiratory rate", "Irregular, about 10/minute"],
          ["BP", "172/98 mmHg"],
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
        topic: "First look at a seizure that will not stop",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The emergency nurse receives the client at 0831 and records the first assessment. Click to highlight the findings that need immediate action.",
        rationale:
          "Jerking has gone on from 0812 without recovery, which is far past 5 minutes. He does not respond, so he cannot protect his airway. Gurgling breaths mean secretions are blocking it. An SpO2 of 86% shows poor oxygenation. The glucose of 104 mg/dL is normal. A small tongue bite, equal pupils, incontinence and a working IV need no urgent action.",
        refs: ["A convulsive seizure lasting 5 minutes or more is treated as status epilepticus."],
        sources: [SRC.glauser, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report glucose in mmol/L only. The value of 5.8 mmol/L is inside the Medical Council of Canada random glucose range of 4.0 to 11.0 mmol/L.",
      }),
      kind: "highlight",
      passage:
        "[[Glucose 104 mg/dL (5.8 mmol/L) at 0822]]. [[Rhythmic jerking of all four limbs]]. [[Pupils equal and reactive]]. [[Gurgling with each breath]]. [[Incontinent of urine]]. [[SpO2 86% on room air]]. [[Bitten tongue with a small amount of blood]]. [[Does not open his eyes to pain]]. [[IV cannula in the right forearm, patent]].",
      spans: [
        { text: "Glucose 104 mg/dL (5.8 mmol/L) at 0822", why: "A normal glucose rules out low glucose as the cause and needs no action." },
        { text: "Rhythmic jerking of all four limbs", why: "Ongoing convulsions since 0812 need urgent treatment to stop them." },
        { text: "Pupils equal and reactive", why: "Equal, reactive pupils need no immediate action." },
        { text: "Gurgling with each breath", why: "Gurgling means secretions are blocking the airway." },
        { text: "Incontinent of urine", why: "Incontinence is common during a convulsion and needs routine care only." },
        { text: "SpO2 86% on room air", why: "Low oxygen saturation needs oxygen and airway support now." },
        { text: "Bitten tongue with a small amount of blood", why: "A small tongue bite is common and not an immediate threat." },
        { text: "Does not open his eyes to pain", why: "He cannot protect his airway and has not recovered between seizures." },
        { text: "IV cannula in the right forearm, patent", why: "A working IV is ready for drugs and needs no action." },
      ],
      correct: [1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Triggers and harms of a long seizure",
        cjmm: "analyze",
        difficulty: 3,
        stem: "Laboratory results return at 0840. For each finding, specify whether it is more likely a trigger of the seizure or a complication of the prolonged seizure.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "0840", "Reference range"],
              rows: [
                ["Lactate", "6.8 mmol/L", "0.5 to 2.2 mmol/L"],
                ["Creatine kinase", "185 units/L", "30 to 200 units/L"],
                ["Sodium", "138 mEq/L (138 mmol/L)", "135 to 145 mEq/L (135 to 145 mmol/L)"],
              ],
            },
          },
        ],
        rationale:
          "Missed doses, alcohol and lost sleep all lower the seizure threshold, so they are triggers. Sustained muscle activity with poor oxygen raises lactate to 6.8 mmol/L. A catecholamine surge drives the heart rate to 132/minute and the BP to 172/98 mmHg. An SpO2 of 86% reflects poor breathing during the seizure. These complications need treatment of their own.",
        sources: [SRC.brunner, SRC.glauser],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Likely trigger of the seizure", "Complication of the prolonged seizure"],
      rows: [
        { text: "Ran out of levetiracetam 3 days ago", correct: [0], why: "Stopping an antiseizure drug suddenly is a common trigger." },
        { text: "Lactate 6.8 mmol/L", correct: [1], why: "Muscle work without enough oxygen produces lactate." },
        { text: "Drank 6 beers last night", correct: [0], why: "Alcohol and its withdrawal lower the seizure threshold." },
        { text: "SpO2 86% on room air", correct: [1], why: "Poor breathing during the convulsion lowers oxygen saturation." },
        { text: "Heart rate 132/minute and BP 172/98 mmHg", correct: [1], why: "A prolonged convulsion triggers a catecholamine surge that raises heart rate and BP." },
        { text: "Little sleep after a week of night shifts", correct: [0], why: "Sleep loss lowers the seizure threshold." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Ranking problems during a long seizure",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0835 the client is still seizing. Place the client's problems in order of priority, from first to third.",
        rationale:
          "Airway and oxygen come first. Gurgling breaths and an SpO2 of 86% threaten life within minutes. Stopping the seizure comes next, because each minute of convulsion adds brain and body harm. Muscle breakdown can injure the kidneys over hours. Teaching about refills and support for his partner matter later, once he is stable.",
        sources: [SRC.brunner, SRC.glauser],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["First", "Second", "Third"],
      tokens: [
        { text: "Risk for kidney injury from muscle breakdown", why: "Kidney injury develops over hours, so it follows airway and seizure control." },
        { text: "Blocked airway with low SpO2", why: "An airway threat with an SpO2 of 86% can cause harm within minutes." },
        { text: "Ongoing seizure activity", why: "Stopping the seizure follows securing the airway." },
        { text: "Knowledge gap about refilling his medication", why: "Teaching matters but waits until he is awake and stable." },
        { text: "Anxiety of his partner in the waiting room", why: "Family support matters but does not outrank physical threats." },
      ],
      correct: [1, 2, 0],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Protecting a client during a convulsion",
        cjmm: "generate",
        difficulty: 2,
        stem: "The nurse plans care to protect the client while the seizure continues. Which actions should the nurse include? Select all that apply.",
        rationale:
          "Side lying lets secretions drain and keeps the tongue from blocking the airway. Suction clears the gurgling secretions. A low bed with padded rails limits injury. Timing and describing each seizure guides treatment. Objects in the mouth can break teeth or block the airway. Holding the limbs can cause fractures. Fluids by mouth before he wakes can be aspirated.",
        sources: [SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Place a padded tongue blade between his teeth", why: "Objects in the mouth can break teeth or block the airway." },
        { text: "Turn him onto his side", why: "Side lying helps secretions drain and keeps the airway open." },
        { text: "Hold his limbs still to stop the jerking", why: "Holding the limbs does not stop a seizure and can cause injury." },
        { text: "Keep suction ready at the bedside", why: "Suction clears the secretions that cause the gurgling." },
        { text: "Lower the bed and pad the side rails", why: "A low, padded bed limits injury from the jerking." },
        { text: "Give sips of water once the jerking pauses", why: "He has not woken, so fluids by mouth can be aspirated." },
        { text: "Record the time and features of each seizure", why: "Timing and features guide drug choices and the diagnosis." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Second-line drug dose for a long seizure",
        cjmm: "action",
        difficulty: 3,
        stem: "At 0836 the jerking continues 24 minutes after onset and 17 minutes after the midazolam. The primary health care provider prescribes levetiracetam 60 mg/kg IV. The client weighs 70 kg. How many milligrams should the nurse prepare?",
        rationale:
          "The seizure has not stopped after one benzodiazepine dose, so a second-line drug is given. The dose is 60 mg/kg for a client of 70 kg, which is 4200 mg. This is below the 4500 mg single-dose maximum, so the full weight-based dose is given.",
        refs: ["Levetiracetam for benzodiazepine-resistant status epilepticus is 60 mg/kg IV, up to 4500 mg, as a single dose."],
        calc: { expr: "60 * 70", answer: 4200, unit: "mg", round: 0, steps: ["60 * 70 = 4200"] },
        sources: [SRC.glauser, SRC.kapur],
      }),
      kind: "mc",
      options: [
        { text: "420 mg", why: "This misplaces the decimal point and gives a tenth of the dose." },
        { text: "1400 mg", why: "This uses a lower dose per kilogram than the one prescribed." },
        { text: "4200 mg", why: "60 mg/kg for 70 kg is 4200 mg, below the single-dose maximum." },
        { text: "4500 mg", why: "4500 mg is the maximum single dose and exceeds 60 mg/kg for 70 kg." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Lowering the risk of more seizures",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The seizures stop and the client wakes the next day. Before discharge the nurse teaches him how to lower his risk of more seizures. Which two statements show he understands? Select two.",
        rationale:
          "Running out of levetiracetam and losing sleep helped trigger this event. Refilling before the supply ends and keeping a regular sleep schedule address both. Stopping the drug after a seizure-free month invites another seizure. Alcohol lowers the seizure threshold. Driving is restricted after a seizure. A missed dose is not doubled.",
        sources: [SRC.brunner, { body: "Canadian Medical Protective Association", work: "Hit the brakes: Do you need to report your patient's fitness to drive?", year: 2026, url: "https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2019/hit-the-brakes-do-you-need-to-report-your-patients-fitness-to-drive" }],
        canada: "In Canada each provincial licensing body sets driving limits after a seizure, based on CCMTA medical standards. Whether the provider must report the client to that body varies by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will refill my levetiracetam before it runs out.\"", why: "A steady supply prevents the gap that triggered this event." },
        { text: "\"I can stop my medicine after a month with no seizures.\"", why: "Stopping the drug raises the risk of another seizure." },
        { text: "\"I will keep a regular sleep schedule.\"", why: "Sleep loss lowers the seizure threshold." },
        { text: "\"A few beers each night will help me relax.\"", why: "Alcohol lowers the seizure threshold." },
        { text: "\"I can drive home tomorrow if I feel fine.\"", why: "Driving is restricted for a period after a seizure." },
        { text: "\"I will double my dose if I miss one.\"", why: "Doubling a dose raises side effects and is not advised." },
      ],
      correct: [0, 2],
    },
  ],
};
