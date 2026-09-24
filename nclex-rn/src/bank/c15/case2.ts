import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c15-2";

/** Case 2. Emergency department, then intensive care. Older woman with a known neuromuscular disease who is losing strength fast. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Drooping Eyelids and a Weak Voice",
  intro:
    "A 63-year-old woman with myasthenia gravis for 6 years comes to the emergency department. Over 2 days her eyelids have drooped further, her speech has slurred and she chokes on her own saliva. Three days ago she started ciprofloxacin for a bladder infection.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Myasthenia gravis for 6 years. Pyridostigmine 60 mg by mouth 4 times daily.",
        "Took 2 extra pyridostigmine doses yesterday because her weakness was worse.",
        "Ciprofloxacin 500 mg by mouth every 12 hours, started 3 days ago for cystitis.",
        "Hypothyroidism. Levothyroxine 75 mcg by mouth daily.",
        "Depression. Sertraline 50 mg by mouth daily.",
        "Acetaminophen 650 mg by mouth every 6 hours as needed for pain.",
        "Weight 62 kg. Lives alone.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1100"],
        rows: [
          ["Temperature", "37.4°C (99.3°F)"],
          ["Heart rate", "108/minute"],
          ["Respiratory rate", "28/minute, shallow"],
          ["BP", "146/88 mmHg"],
          ["SpO2", "93% on room air"],
          ["Forced vital capacity (FVC)", "1100 mL"],
          ["Negative inspiratory force (NIF)", "-18 cmH2O"],
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
        topic: "Airway threats in a weak client",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1115 the emergency department nurse writes the note below. Click to highlight the findings that point to a threat to the client's airway or breathing.",
        rationale:
          "Speaking only 3 or 4 words per breath and using neck muscles to breathe show weak respiratory muscles. Saliva pooling in the mouth means she cannot swallow her secretions, which threatens the airway. Neck flexor weakness tracks closely with diaphragm weakness. Drooping eyelids, normal pupils, dry skin, orientation and mild dysuria do not threaten breathing.",
        sources: [SRC.wendell, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Both eyelids droop over half of each pupil]]. [[Speaks 3 or 4 words per breath]]. [[Pupils 3 mm and reactive]]. [[Saliva pooling in her mouth]]. [[Skin warm and dry]]. [[Uses neck muscles to breathe]]. [[Oriented to person, place and time]]. [[Cannot lift her head]]. [[Mild burning when she voids]].",
      spans: [
        { text: "Both eyelids droop over half of each pupil", why: "Ptosis shows eye muscle weakness but does not threaten the airway." },
        { text: "Speaks 3 or 4 words per breath", why: "Short phrases show she lacks the breath to speak, a sign of weak respiratory muscles." },
        { text: "Pupils 3 mm and reactive", why: "Normal pupils do not signal an airway or breathing problem." },
        { text: "Saliva pooling in her mouth", why: "She cannot swallow her own secretions, so they can enter her airway." },
        { text: "Skin warm and dry", why: "Warm, dry skin does not point to a breathing threat." },
        { text: "Uses neck muscles to breathe", why: "Accessory muscle use shows the diaphragm is tiring." },
        { text: "Oriented to person, place and time", why: "Normal orientation shows no carbon dioxide narcosis yet." },
        { text: "Cannot lift her head", why: "Neck flexor weakness tends to parallel diaphragm weakness in this disease." },
        { text: "Mild burning when she voids", why: "Dysuria reflects the bladder infection, not a breathing threat." },
      ],
      correct: [1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Too little or too much cholinesterase drug",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse notes that the client took 2 extra pyridostigmine doses yesterday. For each possible finding, specify whether it would point to myasthenic crisis or to cholinergic crisis.",
        rationale:
          "Both crises cause weakness and breathing failure, so other signs separate them. Excess cholinesterase inhibitor causes muscarinic effects such as small pupils, sweating, cramps, diarrhea and a slow pulse, plus muscle twitching. This client has a heart rate of 108/minute, 3 mm pupils and warm, dry skin. Her weakness began before the extra doses. These point to myasthenic crisis.",
        sources: [SRC.wendell, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Points to myasthenic crisis", "Points to cholinergic crisis"],
      rows: [
        { text: "Heart rate 108/minute", correct: [0], why: "Excess cholinergic drug slows the heart. A fast rate fits myasthenic crisis." },
        { text: "Pinpoint pupils", correct: [1], why: "Excess acetylcholine constricts the pupils." },
        { text: "Skin warm and dry", correct: [0], why: "Cholinergic excess causes sweating. Dry skin fits myasthenic crisis." },
        { text: "Abdominal cramps and diarrhea", correct: [1], why: "Excess acetylcholine speeds the gut and causes cramping." },
        { text: "Fine twitching of small muscles", correct: [1], why: "Fasciculations come from excess acetylcholine at the muscle." },
        { text: "Weakness that began before the extra doses", correct: [0], why: "Weakness that came first reflects the disease itself, not drug excess." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Bedside breathing tests in a weak client",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews the client's 1100 bedside breathing tests and her weight of 62 kg. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "An FVC of 1100 mL in a client who weighs 62 kg is 17.7 mL/kg. That is below 20 mL/kg. An NIF of -18 cmH2O is weaker than -30 cmH2O. Both signal failing respiratory muscles, so respiratory failure is the highest risk. Her fast pulse and breathing fit failing breathing muscles, and a temperature of 37.4°C makes urosepsis less likely. Her normal pupils and dry skin argue against cholinergic crisis.",
        refs: ["A vital capacity below 20 mL/kg or a negative inspiratory force weaker than -30 cmH2O signals impending respiratory failure in myasthenic crisis."],
        calc: { expr: "1100 / 62", answer: 17.741935483870968, unit: "mL/kg", round: 1, steps: ["1100 / 62 = 17.7"] },
        sources: [SRC.wendell, SRC.narayanaswami],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "urosepsis", why: "A temperature of 37.4°C with mild dysuria makes sepsis less likely than muscle failure." },
            { text: "cholinergic crisis", why: "Her fast pulse, 3 mm pupils and dry skin argue against drug excess." },
            { text: "respiratory failure", why: "A low FVC and weak NIF show her breathing muscles are failing." },
            { text: "myxedema coma", why: "She is alert with a heart rate of 108/minute, which does not fit this condition." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a BP of 146/88 mmHg", why: "The BP does not measure breathing muscle strength." },
            { text: "an FVC of 17.7 mL/kg", why: "An FVC below 20 mL/kg signals impending respiratory failure." },
            { text: "pupils of 3 mm", why: "Normal pupils help rule out cholinergic crisis but do not measure breathing." },
            { text: "a temperature of 37.4°C (99.3°F)", why: "A near normal temperature does not point to respiratory failure." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "mild burning on voiding", why: "Dysuria reflects the bladder infection, not breathing strength." },
            { text: "warm, dry skin", why: "Dry skin helps separate the crises but does not measure breathing." },
            { text: "2 extra pyridostigmine doses", why: "Extra doses raise the question of drug excess but do not measure breathing." },
            { text: "an NIF of -18 cmH2O", why: "An NIF weaker than -30 cmH2O shows the inspiratory muscles are failing." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "A home drug that worsens neuromuscular weakness",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse plans the client's medication review before the admission prescriptions are written. Which home medication should the nurse plan to discuss with the primary health care provider first?",
        rationale:
          "Fluoroquinolones such as ciprofloxacin block neuromuscular transmission. They carry a boxed warning for worsening myasthenia gravis, and use in known disease should be avoided. Her weakness worsened after she started it 3 days ago. Another antibiotic can treat the cystitis. Levothyroxine, sertraline and acetaminophen do not worsen this disease at the listed doses.",
        sources: [SRC.cipro, SRC.wendell],
      }),
      kind: "mc",
      options: [
        { text: "Sertraline 50 mg daily", why: "Sertraline does not block neuromuscular transmission and treats her depression." },
        { text: "Levothyroxine 75 mcg daily", why: "Thyroid replacement does not worsen this disease and should continue." },
        { text: "Ciprofloxacin 500 mg every 12 hours", why: "Ciprofloxacin can worsen myasthenic weakness and should be avoided in this disease." },
        { text: "Acetaminophen 650 mg as needed", why: "Acetaminophen does not affect the neuromuscular junction." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Structured report of a failing airway",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "At 1300 the client's FVC is 900 mL and she speaks 2 words per breath. The nurse calls the primary health care provider. Place one statement in each part of the SBAR report.",
        rationale:
          "The situation is the new change, an FVC that fell from 1100 mL to 900 mL. The background gives the disease and the recent ciprofloxacin. The assessment states the nurse's concern of respiratory failure. The recommendation asks for bedside assessment for intubation now. Waiting for the next routine check delays care. Blaming anxiety ignores the objective fall in FVC.",
        sources: [SRC.sbar, SRC.wendell],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Situation", "Background", "Assessment", "Recommendation"],
      tokens: [
        { text: "I think her weakness is from anxiety", why: "The FVC fall is objective. Blaming anxiety could delay airway care." },
        { text: "She has myasthenia gravis and began ciprofloxacin 3 days ago", why: "The disease and the new drug give the background." },
        { text: "Please recheck her FVC at the next routine check", why: "A routine recheck delays care for a client whose airway is failing." },
        { text: "Her FVC fell from 1100 mL to 900 mL in 2 hours", why: "The current change is the situation that prompts the call." },
        { text: "Please come now to assess her for intubation", why: "A clear request for urgent action is the recommendation." },
        { text: "I think she is heading into respiratory failure", why: "The nurse's judgment of the problem is the assessment." },
      ],
      correct: [3, 1, 5, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Safe eating after extubation",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "On day 6 the client is extubated. The speech-language pathologist prescribes thickened liquids and supervised meals. Her pyridostigmine dose was given at 1200. At 1230 the nurse observes an assistive personnel helping her eat lunch. Which observations require the nurse to intervene? Select all that apply.",
        rationale:
          "Thin water breaks the thickened liquid prescription and raises aspiration risk. Offering a spoonful before she swallows overloads weak throat muscles. Leaving her alone breaks the supervised meal prescription. Upright sitting, small bites with rests and suction at the bedside are safe. Lunch 30 minutes after pyridostigmine matches the drug's onset, so her chewing and swallowing are near their best.",
        refs: ["Pyridostigmine is given 30 to 60 minutes before meals so its effect peaks during chewing and swallowing."],
        sources: [SRC.brunner, SRC.wendell],
      }),
      kind: "sata",
      options: [
        { text: "She sits upright in a chair", why: "Upright sitting lowers aspiration risk and needs no change." },
        { text: "Spoonfuls come before she swallows", why: "Food arriving before the swallow is done can enter the airway." },
        { text: "Suction is set up at the bedside", why: "Ready suction is a safe measure after extubation." },
        { text: "She is given thin water", why: "Thin liquid breaks the prescription and raises aspiration risk." },
        { text: "She takes small bites and rests between them", why: "Small bites with rests suit fatigable muscles and are safe." },
        { text: "Lunch began 30 minutes after her dose", why: "Eating near the drug's peak effect supports safe swallowing." },
        { text: "She is left alone to finish", why: "The prescription calls for supervised meals because of aspiration risk." },
      ],
      correct: [1, 3, 6],
    },
  ],
};
