import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c07-4";

/** Case 4. Pediatric intensive care unit. Adolescent after a head injury with a ventricular drain. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Teenager After a Bicycle Crash",
  intro:
    "A 15-year-old boy is in the pediatric intensive care unit. He was struck by a car while riding a bicycle 14 hours ago. A right-sided subdural hematoma was too small for surgery. An external ventricular drain (EVD) measures intracranial pressure (ICP) and drains cerebrospinal fluid.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 58 kg. No past medical history.",
        "At 0200 he opened his eyes to voice, spoke in confused sentences and localized pain. Glasgow Coma Scale score 12.",
        "His parents are at the bedside.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Head of bed at 30 degrees with the head midline.",
        "EVD open to drainage with the drip chamber 10 cm above the tragus.",
        "Notify the primary health care provider for ICP of 20 mmHg or higher lasting more than 5 minutes.",
        "Seizure precautions.",
      ].join("\n"),
    },
    {
      title: "Neurologic Checks",
      table: {
        head: ["Measure", "0200", "0400"],
        rows: [
          ["Pupils", "3 mm, equal, brisk", "3 mm, equal, brisk"],
          ["ICP", "14 mmHg", "16 mmHg"],
          ["Heart rate", "88/minute", "84/minute"],
          ["BP", "118/70 mmHg", "124/72 mmHg"],
          ["Respiratory rate", "18/minute", "16/minute"],
          ["Temperature", "37.4°C (99.3°F)", "37.5°C (99.5°F)"],
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
        topic: "Neurologic signs of rising intracranial pressure",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 0600 the nurse performs a neurologic check and records the findings below. Click to highlight the findings that require follow-up.",
        rationale:
          "At 0200 he opened his eyes to voice, and now he opens them only to a firm squeeze. The right pupil is larger and sluggish on the side of the hematoma. The ICP of 24 mmHg has lasted more than 5 minutes. BP has risen from 124/72 to 148/62 mmHg with a wider pulse pressure. Heart rate has fallen from 84 to 58/minute. These are signs of rising ICP. Confused speech was present at 0200.",
        sources: [SRC.brunner, SRC.pedsTbi],
      }),
      kind: "highlight",
      passage:
        "[[Opens eyes only to a firm shoulder squeeze]]. [[Speech confused]]. [[Right pupil 5 mm and sluggish]]. [[Left pupil 3 mm and brisk]]. [[ICP 24 mmHg for the past 6 minutes]]. [[BP 148/62 mmHg]]. [[Heart rate 58/minute]]. [[EVD dressing dry and intact]]. [[Skin warm and dry]].",
      spans: [
        { text: "Opens eyes only to a firm shoulder squeeze", why: "Eye opening has declined from voice to pain, a drop in consciousness." },
        { text: "Speech confused", why: "Confused speech was already present at 0200 and is not a new change." },
        { text: "Right pupil 5 mm and sluggish", why: "A dilated, sluggish pupil on the side of the hematoma suggests nerve compression." },
        { text: "Left pupil 3 mm and brisk", why: "This pupil is unchanged from the earlier checks." },
        { text: "ICP 24 mmHg for the past 6 minutes", why: "The ICP is above the reporting threshold for longer than 5 minutes." },
        { text: "BP 148/62 mmHg", why: "A rising systolic BP with a wider pulse pressure is a late sign of rising ICP." },
        { text: "Heart rate 58/minute", why: "A falling heart rate with rising BP suggests brainstem compression." },
        { text: "EVD dressing dry and intact", why: "A dry, intact dressing needs no follow-up." },
        { text: "Skin warm and dry", why: "Warm, dry skin needs no follow-up." },
      ],
      correct: [0, 2, 4, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Care activities that affect intracranial pressure",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the care given overnight. For each activity, specify whether it is likely to raise ICP or unlikely to raise ICP.",
        rationale:
          "Sharp hip flexion and straining raise pressure in the abdomen and chest. That slows venous drainage from the head. Turning the head to the side compresses the jugular veins. Back-to-back care gives no time for ICP to settle. A head of bed at 30 degrees helps venous drainage. A quiet room lowers stimulation. A stool softener prevents straining.",
        sources: [SRC.brunner, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Likely to raise ICP", "Unlikely to raise ICP"],
      rows: [
        { text: "Hips flexed sharply during a linen change", correct: [0], why: "Sharp hip flexion raises abdominal pressure and slows venous return from the head." },
        { text: "Head turned to the side for a pillow change", correct: [0], why: "Turning the head can compress the jugular veins and raise ICP." },
        { text: "Head of bed kept at 30 degrees", correct: [1], why: "Raising the head of the bed helps venous drainage from the brain." },
        { text: "Bath, linen change and turning done back to back", correct: [0], why: "Care without rest periods lets ICP stay raised." },
        { text: "Lights dimmed and noise kept low", correct: [1], why: "A calm setting lowers stimulation and helps keep ICP down." },
        { text: "Straining during a bowel movement", correct: [0], why: "Straining raises chest and abdominal pressure and slows venous return." },
        { text: "Stool softener given at 2100", correct: [1], why: "A stool softener prevents straining and so helps prevent ICP spikes." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Ventricular drain safety check",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 0610 the ICP is still 24 mmHg. The nurse checks the room and finds four problems. Which problem should the nurse correct first?",
        rationale:
          "The orders call for the EVD to stay open to drainage. A stopcock turned off stops cerebrospinal fluid from draining while the ICP is 24 mmHg. Reopening it at the ordered level restores the main way to relieve the pressure. Missing seizure pads, the bed alarm and the music need attention next. None is as urgent as a blocked drain during rising ICP.",
        sources: [SRC.brunner, SRC.pedsTbi],
      }),
      kind: "mc",
      options: [
        { text: "Seizure pads missing from the side rails", why: "Pads are part of seizure precautions, but no seizure is occurring now." },
        { text: "Bed exit alarm switched off", why: "A fall risk needs attention, but it is less urgent than a blocked drain." },
        { text: "Music playing from a phone", why: "Noise adds stimulation, but it is less urgent than a blocked drain." },
        { text: "EVD stopcock turned off to drainage", why: "A closed stopcock stops drainage and lets ICP keep rising." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safe care of a client with a ventricular drain",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse opens the drain at the ordered level and notifies the primary health care provider. The nurse updates the plan of care. Which measures should the nurse include? Select all that apply.",
        rationale:
          "A midline head keeps the jugular veins open. Padded rails reduce injury if a seizure occurs after a head injury. The drain must be leveled again after each position change so it drains at the ordered pressure. Sterile technique at the drain site lowers the risk of ventricular infection. A flat bed and hourly coughing raise ICP. Long care sessions keep ICP raised.",
        sources: [SRC.brunner, SRC.wong],
      }),
      kind: "sata",
      options: [
        { text: "Lower the head of the bed flat", why: "A flat position slows venous drainage and can raise ICP." },
        { text: "Keep the head in midline", why: "A midline head keeps the jugular veins open for venous drainage." },
        { text: "Encourage coughing every hour", why: "Coughing raises chest pressure and can raise ICP." },
        { text: "Pad the side rails", why: "Padding lowers injury risk if a post-traumatic seizure occurs." },
        { text: "Re-level the drain after each position change", why: "A drain at the wrong height drains too much or too little fluid." },
        { text: "Cluster all care into one long session", why: "Long sessions without rest keep ICP raised." },
        { text: "Use sterile technique for drain site care", why: "The drain is a direct path for bacteria into the ventricles." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Hypertonic saline bolus rate",
        cjmm: "action",
        difficulty: 4,
        stem: "At 0630 the ICP is 26 mmHg. The primary health care provider prescribes 3% sodium chloride 4 mL/kg IV over 15 minutes. The client weighs 58 kg. At what rate should the nurse set the infusion pump?",
        rationale:
          "The dose is 4 mL/kg for a client of 58 kg, which is 232 mL. The dose runs over 15 minutes. Multiplying 232 mL by 60 and dividing by 15 gives 928 mL/hour. Hypertonic saline draws water from brain tissue into the blood vessels. Serum sodium is checked during treatment.",
        refs: ["Bolus 3% saline of 2 to 5 mL/kg over 10 to 20 minutes is recommended for raised ICP in children."],
        calc: { expr: "4 * 58 * 60 / 15", answer: 928, unit: "mL/hour", round: 0, steps: ["4 * 58 = 232", "232 * 60 / 15 = 928"] },
        sources: [SRC.pedsTbi],
      }),
      kind: "mc",
      options: [
        { text: "232 mL/hour", why: "This is the total dose volume. At this rate the bolus runs four times too long." },
        { text: "464 mL/hour", why: "This rate delivers the dose in twice the prescribed time." },
        { text: "928 mL/hour", why: "232 mL over 15 minutes is 928 mL/hour." },
        { text: "1160 mL/hour", why: "This uses 5 mL/kg instead of the prescribed 4 mL/kg." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Parental coping in pediatric intensive care",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "At 1000 the ICP is 15 mmHg. At 0700 his mother said she should have driven him to practice. The nurse listened, answered questions and invited the parents to morning rounds. Which two statements by the parents show the support has helped? Select two.",
        rationale:
          "Taking turns to rest shows the parents can pace themselves for a long stay. Writing questions for rounds shows they are taking part in his care. Refusing to leave for any reason, refusing to eat and ongoing self-blame show distress that still needs support. Asking staff to stop giving updates suggests avoidance.",
        sources: [SRC.family],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"We take turns sleeping so we stay rested.\"", why: "Pacing themselves shows healthy coping for a long stay." },
        { text: "\"I cannot leave his side for even a minute.\"", why: "Refusing any break shows ongoing distress and risks exhaustion." },
        { text: "\"I wrote questions for the team at rounds.\"", why: "Preparing questions shows they are engaged in his care." },
        { text: "\"It is all my fault, so I have to fix this myself.\"", why: "Continued self-blame shows the guilt has not eased." },
        { text: "\"Please stop telling us how he is doing.\"", why: "Avoiding updates suggests the parents are overwhelmed." },
        { text: "\"I will not eat anything until he wakes up.\"", why: "Neglecting their own needs shows ineffective coping." },
      ],
      correct: [0, 2],
    },
  ],
};
