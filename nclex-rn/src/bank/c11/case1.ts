import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c11-1";

/** Case 1. Pediatric emergency department. Toddler with fever and a first seizure. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Toddler Carried In by Her Father",
  intro:
    "A 20-month-old girl is carried into the pediatric emergency department at 1410 by her father. She has had a fever since last night. At 1350 at home, her arms and legs jerked for about 2 minutes. She has never had an event like this before.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Born at 39 weeks. No known medical conditions.",
        "Immunizations up to date for age, including Haemophilus influenzae type b and pneumococcal vaccines.",
        "Runny nose and pulling at the right ear for 2 days.",
        "Weight 11 kg.",
        "Father reports the jerking involved both arms and both legs at once.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1415"],
        rows: [
          ["Temperature", "39.6°C (103.3°F)"],
          ["Heart rate", "158/minute"],
          ["Respiratory rate", "34/minute"],
          ["BP", "94/58 mmHg"],
          ["SpO2", "97% on room air"],
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
        topic: "Cues after a first seizure with fever",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1420, about 30 minutes after the jerking stopped, the nurse examines the toddler on her father's lap and records the findings below. Click to highlight the findings that need follow-up.",
        rationale:
          "A red, bulging right eardrum points to the source of the fever and needs treatment. Vomiting while drowsy and flat on her back puts the airway at risk. Dry, cracked lips and no wet diaper for 10 hours suggest poor fluid intake during the illness. Reaching for her father, equal limb movement, a neck that bends without pain and reactive pupils are reassuring after the event.",
        sources: [SRC.wong, SRC.fsEval],
      }),
      kind: "highlight",
      passage:
        "[[Opens eyes and reaches for her father when he speaks]]. [[Right eardrum red and bulging]]. [[Moves all four limbs equally]]. [[Vomited once at 1418 while lying flat on her back]]. [[Neck bends forward without pain]]. [[Lips dry and cracked]]. [[Pupils equal and reactive to light]]. [[Last wet diaper about 10 hours ago]].",
      spans: [
        { text: "Opens eyes and reaches for her father when he speaks", why: "Purposeful response to a parent shows her level of consciousness is returning." },
        { text: "Right eardrum red and bulging", why: "A red, bulging eardrum suggests acute otitis media as the source of fever." },
        { text: "Moves all four limbs equally", why: "Equal movement shows no focal weakness after the event." },
        { text: "Vomited once at 1418 while lying flat on her back", why: "Vomiting while drowsy and supine raises the risk of aspiration." },
        { text: "Neck bends forward without pain", why: "A supple neck lowers concern for meningeal irritation." },
        { text: "Lips dry and cracked", why: "Dry lips suggest fluid loss from fever and poor intake." },
        { text: "Pupils equal and reactive to light", why: "Equal, reactive pupils are an expected neurologic finding." },
        { text: "Last wet diaper about 10 hours ago", why: "No urine for 10 hours in a febrile toddler suggests low fluid volume." },
      ],
      correct: [1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Simple and complex seizure features with fever",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The primary health care provider asks the nurse to compare the father's account with the features that decide whether more testing is needed. For each feature, specify whether it defines a simple or a complex febrile seizure.",
        rationale:
          "A simple febrile seizure is generalized, lasts less than 15 minutes and does not recur within 24 hours. This toddler had jerking of all limbs for about 2 minutes with no second event. Her event fits the simple pattern. Focal jerking, a seizure of 20 minutes or a second seizure within 24 hours make a seizure complex. A simple febrile seizure in a well-immunized child does not need routine blood tests, EEG or imaging.",
        refs: [
          "A simple febrile seizure is generalized, lasts less than 15 minutes and does not recur within 24 hours in a child 6 to 60 months old.",
        ],
        sources: [SRC.fsEval],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Simple febrile seizure", "Complex febrile seizure"],
      rows: [
        { text: "Jerking of all four limbs at once", correct: [0], why: "Generalized movement fits the simple pattern." },
        { text: "Jerking of one arm only", correct: [1], why: "A focal seizure is one of the features of a complex seizure." },
        { text: "Seizure lasting about 2 minutes", correct: [0], why: "A seizure under 15 minutes fits the simple pattern." },
        { text: "Seizure lasting 20 minutes", correct: [1], why: "A seizure of 15 minutes or longer is complex." },
        { text: "A second seizure 6 hours later", correct: [1], why: "Recurrence within 24 hours makes a seizure complex." },
        { text: "One seizure during the illness", correct: [0], why: "A single seizure in 24 hours fits the simple pattern." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Airway risk while drowsy after a seizure",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1425 the toddler is sleepy and lies flat on her back on the stretcher. Her father has wiped vomit from her chin. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "The toddler vomited while drowsy and lying flat. A lowered level of consciousness weakens airway protection, so aspiration is the most immediate threat. Dry lips and no wet diaper for 10 hours point to a fluid deficit, which matters but is not the first threat. A temperature of 39.6°C causes discomfort but does not injure the brain. The bulging eardrum explains the fever and is treated after the airway is safe.",
        sources: [SRC.wong, SRC.fever],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The priority concern for the toddler now is {0} because she {1}.",
      blanks: [
        {
          options: [
            { text: "fluid volume deficit", why: "A deficit is suggested by dry lips, but it is not the most immediate threat." },
            { text: "aspiration of vomit", why: "Vomiting while drowsy and supine threatens the airway first." },
            { text: "fever-related brain injury", why: "Fever at 39.6°C does not injure the brain. It is a response to infection." },
            { text: "spread of ear infection", why: "The ear infection needs treatment, but it is not an immediate threat." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "has not wet a diaper in 10 hours", why: "Low urine output supports a fluid deficit, not an airway threat." },
            { text: "has a temperature of 39.6°C", why: "The fever explains discomfort but not an immediate airway threat." },
            { text: "vomited while drowsy and lying flat", why: "Vomiting with reduced alertness in a supine position risks aspiration." },
            { text: "has a red, bulging right eardrum", why: "The eardrum finding explains the fever source only." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Preparing for a repeat seizure in a toddler",
        cjmm: "generate",
        difficulty: 2,
        stem: "The primary health care provider plans to observe the toddler in the department for several hours. Which measures should the nurse include in the plan of care in case another seizure occurs? Select all that apply.",
        rationale:
          "Suction and oxygen at the bedside let the nurse clear the airway and support breathing. Timing from onset shows whether a seizure passes 5 minutes, when emergency treatment is needed. Padded side rails protect her from striking the crib. Turning her onto her side lets secretions drain. Nothing is placed in the mouth, and limbs are not held down. A cool bath is not used to treat fever.",
        refs: ["Emergency help is needed when a seizure lasts longer than 5 minutes."],
        sources: [SRC.cdcSeizure, SRC.wong, SRC.fever],
      }),
      kind: "sata",
      options: [
        { text: "Hold her limbs still during jerking", why: "Restraining the limbs can cause injury and does not stop the seizure." },
        { text: "Keep suction and oxygen at the bedside", why: "Suction clears secretions and oxygen supports breathing during a seizure." },
        { text: "Tape a tongue blade to the crib", why: "Nothing goes into the mouth during a seizure. It can break teeth or block the airway." },
        { text: "Time any seizure from its onset", why: "Timing shows when a seizure passes 5 minutes and needs emergency treatment." },
        { text: "Pad the side rails of the crib", why: "Padding protects her from striking the rails during jerking." },
        { text: "Place her in a cool bath for fever", why: "Cool baths cause shivering and discomfort and are not advised for fever." },
        { text: "Turn her onto her side if jerking starts", why: "A side-lying position lets saliva and vomit drain from the mouth." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Oral ibuprofen dose for a toddler",
        cjmm: "action",
        difficulty: 3,
        stem: "At 1500 the toddler is awake, alert and drinking from a cup. She weighs 11 kg. The primary health care provider prescribes ibuprofen 10 mg/kg by mouth every 6 hours as needed for fever. The pharmacy supplies ibuprofen oral suspension 100 mg/5 mL. How many mL should the nurse give?",
        rationale:
          "The dose is 10 mg/kg for a child of 11 kg, which is 110 mg. The suspension holds 100 mg in 5 mL, so each mL holds 20 mg. Dividing 110 mg by 20 mg/mL gives 5.5 mL. She is now alert and drinking, so an oral dose is safe to give. The dose treats discomfort. It does not prevent another seizure.",
        calc: { expr: "10 * 11 / (100 / 5)", answer: 5.5, unit: "mL", round: 1, steps: ["10 * 11 = 110", "100 / 5 = 20", "110 / 20 = 5.5"] },
        sources: [SRC.fever, SRC.fsLong],
      }),
      kind: "mc",
      options: [
        { text: "1.1 mL", why: "This divides 110 mg by 100 and ignores the 5 mL volume." },
        { text: "2.75 mL", why: "This gives half the prescribed dose, as if the dose were 5 mg/kg." },
        { text: "5.5 mL", why: "110 mg divided by 20 mg/mL is 5.5 mL." },
        { text: "11 mL", why: "This doubles the dose by using the 11 kg weight as the volume." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Parent teaching after a seizure with fever",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Before discharge at 1830, the nurse teaches the father about fever and seizures in young children. Which two statements by the father show understanding? Select two.",
        rationale:
          "The father should turn her onto her side and call 911 if a seizure lasts longer than 5 minutes. Fever medicine keeps her comfortable but does not prevent another seizure. Daily seizure medicine is not advised after a simple febrile seizure because its risks outweigh the benefit. Nothing goes in the mouth. One seizure with fever does not mean epilepsy.",
        sources: [SRC.fsLong, SRC.cdcSeizure],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"Giving ibuprofen on a schedule will stop more seizures.\"", why: "Fever medicine improves comfort but does not prevent recurrence." },
        { text: "\"I will lay her on her side if she jerks again.\"", why: "A side-lying position keeps the airway clear during a seizure." },
        { text: "\"She will need seizure medicine every day now.\"", why: "Daily medicine is not advised after a simple febrile seizure." },
        { text: "\"I will put a spoon in her mouth to guard her tongue.\"", why: "Objects in the mouth can break teeth or block the airway." },
        { text: "\"I will call 911 if a seizure lasts over 5 minutes.\"", why: "A seizure longer than 5 minutes needs emergency treatment." },
        { text: "\"This seizure means she has epilepsy for life.\"", why: "A single seizure with fever does not mean epilepsy." },
      ],
      correct: [1, 4],
    },
  ],
};
