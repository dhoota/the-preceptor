import type { Item } from "@/engine/types";
import { ATLS, BLS, BTF, BURN, CDIFF, DYSREFLEXIA, HINKLE, HYPONATREMIA, SEPSIS, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s25-01", {
      topic: "Chest trauma with tracheal shift",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 34-year-old client arrives after a motorcycle crash. Heart rate is 132/minute, BP 84/50 mmHg and respirations 36/minute. SpO2 is 84% on a nonrebreather mask. Breath sounds are absent on the left. The trachea is shifted to the right and the neck veins are distended. Which condition is the most likely cause of these findings?",
      rationale:
        "Absent breath sounds on the left with the trachea pushed to the right show air under pressure in the left chest. Distended neck veins and a BP of 84/50 mmHg show that the pressure is blocking venous return to the heart. This pattern fits a left tension pneumothorax, which needs immediate decompression. Tamponade does not silence one lung. Massive hemothorax usually flattens the neck veins. A flail segment moves paradoxically.",
      sources: [ATLS],
    }),
    kind: "mc",
    options: [
      { text: "Cardiac tamponade", why: "Tamponade distends the neck veins but does not remove breath sounds on one side or shift the trachea." },
      { text: "Massive left hemothorax", why: "Blood loss into the chest usually leaves the neck veins flat, not distended." },
      { text: "Left tension pneumothorax", why: "Absent left breath sounds, a right tracheal shift, distended neck veins and shock fit trapped air under pressure." },
      { text: "Left flail chest segment", why: "A flail segment shows paradoxical chest wall movement. It does not shift the trachea or distend the neck veins." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s25-02", {
      topic: "Measures to lower intracranial pressure",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a severe traumatic brain injury has an intracranial pressure monitor. The pressure now reads 24 mmHg. The client is intubated and sedated. Which actions should the nurse take? Select all that apply.",
      rationale:
        "An intracranial pressure of 24 mmHg is above the 22 mmHg level at which treatment starts. Raising the head of the bed to 30 degrees and keeping the head and neck in midline help venous blood drain from the brain. A quiet, dim room limits stimulation. Hip flexion raises abdominal and chest pressure. Clustered care and routine hourly suctioning both raise intracranial pressure.",
      refs: ["Treatment is recommended when intracranial pressure is above 22 mmHg in severe traumatic brain injury."],
      sources: [BTF, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Flex the hips to 90 degrees", why: "Sharp hip flexion raises abdominal pressure and slows venous drainage from the head." },
      { text: "Keep the head of the bed at 30 degrees", why: "Head elevation helps venous blood drain from the brain and lowers pressure." },
      { text: "Cluster suctioning with turning and bathing", why: "Grouping stimulating care raises intracranial pressure. Activities are spaced out with rest between them." },
      { text: "Keep the head and neck in midline", why: "A neutral neck keeps the jugular veins open so blood drains from the brain." },
      { text: "Suction the airway every hour", why: "Suctioning raises intracranial pressure. It is done only when needed and kept brief." },
      { text: "Keep the room quiet and dimly lit", why: "Less noise and light lowers stimulation, which helps keep intracranial pressure down." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s25-03", {
      topic: "Rapid sodium correction",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 70-year-old client with the syndrome of inappropriate antidiuretic hormone has a serum sodium of 116 mEq/L (116 mmol/L). The client receives 3% sodium chloride IV. 12 hours later the sodium is 129 mEq/L (129 mmol/L). The client is alert with no seizures. What should the nurse do?",
      rationale:
        "The sodium rose from 116 to 129 mEq/L in 12 hours. That is already more than the limit for a full 24 hours. Correction this fast can cause osmotic demyelination, which appears days later with trouble speaking and swallowing and weakness. The nurse holds the hypertonic saline and calls the primary health care provider now. The provider may give free water or desmopressin to slow the rise.",
      refs: ["In average-risk clients, serum sodium should rise by no more than 12 mEq/L in 24 hours."],
      sources: [HYPONATREMIA],
    }),
    kind: "mc",
    options: [
      { text: "Continue the infusion at the prescribed rate", why: "The rise over 12 hours already exceeds the 24-hour limit. Continuing raises the risk of osmotic demyelination." },
      { text: "Hold the infusion and call the provider", why: "The sodium has risen too fast. Stopping the source and reporting now allows the provider to slow the correction." },
      { text: "Raise the rate to reach 135 mEq/L", why: "The goal is a slow, limited rise, not a normal sodium in one day." },
      { text: "Recheck the sodium level in 24 hours", why: "Waiting 24 hours allows the sodium to keep rising. Levels are checked often during hypertonic saline." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s25-04", {
      topic: "Autonomic dysreflexia first action",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with a complete T4 spinal cord injury reports a sudden pounding headache. BP is 196/108 mmHg and heart rate is 52/minute. The face is flushed and sweaty above the level of injury. The client is lying flat in bed. What should the nurse do first?",
      rationale:
        "A pounding headache, a BP of 196/108 mmHg, a slow pulse and flushing above a T4 injury fit autonomic dysreflexia. Sitting the client up with the legs down pools blood in the legs and lowers BP at once. The nurse then loosens tight clothing and looks for the trigger, most often a full bladder. An analgesic does not treat the cause. Lying flat with legs raised would raise BP further.",
      sources: [DYSREFLEXIA],
    }),
    kind: "mc",
    options: [
      { text: "Check the bladder for distension", why: "A full bladder is the most common trigger. It is checked right after the client is sat up." },
      { text: "Lay the client flat with legs raised", why: "Raising the legs returns more blood to the core and raises BP further." },
      { text: "Give the prescribed oral analgesic", why: "An analgesic does not remove the trigger or lower the dangerous BP." },
      { text: "Sit the client up with legs lowered", why: "Sitting up with the legs down pools blood and lowers BP right away." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s25-05", {
      topic: "Sepsis in an older adult",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An 81-year-old client was admitted this morning with a urinary tract infection. The nurse reviews the afternoon note. Click to highlight the findings that suggest the infection is progressing to sepsis.",
      rationale:
        "Fever with a heart rate of 118/minute and respirations of 26/minute show a body wide response to infection. A BP of 86/48 mmHg shows poor perfusion. New confusion and only 60 mL of urine in 4 hours show organ dysfunction in the brain and kidneys. Together these point to sepsis. Clear lungs, intact skin and eating half a meal do not signal sepsis.",
      sources: [SEPSIS, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Temperature 38.6°C (101.5°F).]] [[Heart rate 118/minute.]] [[Respirations 26/minute.]] [[BP 86/48 mmHg.]] [[Lungs clear to auscultation.]] [[New confusion since noon.]] [[Skin intact over the sacrum.]] [[Urine output 60 mL over 4 hours.]] [[Ate half of lunch.]]",
    spans: [
      { text: "Temperature 38.6°C (101.5°F).", why: "Fever is part of the systemic response to infection." },
      { text: "Heart rate 118/minute.", why: "A fast heart rate reflects the systemic response and low effective volume." },
      { text: "Respirations 26/minute.", why: "A fast breathing rate is an early sign of sepsis." },
      { text: "BP 86/48 mmHg.", why: "Low BP shows poor perfusion and possible septic shock." },
      { text: "Lungs clear to auscultation.", why: "Clear lungs suggest no pneumonia. They do not point to sepsis." },
      { text: "New confusion since noon.", why: "New confusion shows the brain is not well perfused." },
      { text: "Skin intact over the sacrum.", why: "Intact skin is an expected finding and needs no follow-up." },
      { text: "Urine output 60 mL over 4 hours.", why: "Low urine output shows the kidneys are not well perfused." },
      { text: "Ate half of lunch.", why: "Eating part of a meal is common in illness and does not signal sepsis." },
    ],
    correct: [0, 1, 2, 3, 5, 7],
  },
  {
    ...meta("rn-s25-06", {
      topic: "Low calcium after thyroid surgery",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client is 1 day after a total thyroidectomy. The client reports tingling around the mouth and in the fingertips. Temperature is 37.4°C (99.3°F). Which additional finding best supports the nurse's concern about this tingling?",
      rationale:
        "Tingling around the mouth and fingers after total thyroidectomy suggests low calcium from injury to the parathyroid glands. A carpal spasm when a BP cuff is inflated is Trousseau's sign, a sign of neuromuscular irritability from low calcium. Hoarseness points to laryngeal nerve injury. Swelling under the dressing points to bleeding. A temperature of 37.4°C is not linked to low calcium.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Hoarse and weak voice when speaking", why: "Hoarseness suggests laryngeal nerve injury. It does not explain the tingling." },
      { text: "Hand spasm as the BP cuff inflates", why: "Carpal spasm with cuff inflation is Trousseau's sign of low calcium." },
      { text: "Swelling under the neck dressing", why: "Swelling suggests bleeding or a hematoma. It does not cause tingling." },
      { text: "Temperature of 37.4°C (99.3°F)", why: "This mild value is common after surgery and is not a sign of low calcium." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s25-07", {
      topic: "In-hospital cardiac arrest sequence",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse finds an adult client unresponsive in bed on a medical unit. No one else is in the room. Place the nurse's first four actions in order.",
      rationale:
        "The nurse first shouts for help and activates the code team so equipment and staff come. Breathing and the carotid pulse are checked together for no more than 10 seconds. With no pulse, compressions start at 100 to 120/minute. Defibrillator pads go on as soon as the device arrives. Rescue breaths are not given before the pulse check. A glucose check would delay compressions.",
      refs: ["Breathing and pulse are checked together for at least 5 and no more than 10 seconds.", "Compressions are given at a rate of 100 to 120/minute."],
      sources: [BLS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Check breathing and carotid pulse", why: "Breathing and pulse are checked together, for no more than 10 seconds, after help is called." },
      { text: "Give 2 rescue breaths first", why: "Breaths do not come before the pulse check. Compressions start first when there is no pulse." },
      { text: "Shout for help and call a code", why: "Calling for help first brings staff and the defibrillator as fast as possible." },
      { text: "Apply defibrillator pads when available", why: "Pads go on as soon as the defibrillator arrives so a shockable rhythm is treated quickly." },
      { text: "Check a fingerstick glucose", why: "A glucose check delays compressions and does not belong in the first actions." },
      { text: "Start chest compressions", why: "With no pulse, compressions start at 100 to 120/minute right after the check." },
    ],
    correct: [2, 0, 5, 3],
  },
  {
    ...meta("rn-s25-08", {
      topic: "Burn fluid resuscitation rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client who weighs 80 kg has deep burns over 40% of the body surface. The burn happened 2 hours ago. The client got 400 mL of lactated Ringer's solution before arrival. The prescription is lactated Ringer's 2 mL/kg for each percent burned over 24 hours, with half in the first 8 hours after the burn. What rate should the nurse set for the next 6 hours?",
      rationale:
        "The 24-hour total is 2 mL times 80 kg times 40 percent, which is 6400 mL. Half, 3200 mL, is due in the first 8 hours from the time of the burn. The client already got 400 mL, so 2800 mL remains. 2 of those 8 hours have passed, which leaves 6 hours. 2800 mL over 6 hours is about 467 mL/hour. Urine output then guides changes.",
      calc: {
        expr: "(2 * 80 * 40 / 2 - 400) / 6",
        answer: 466.6666666666667,
        unit: "mL/hour",
        round: 0,
        steps: ["2 * 80 * 40 = 6400", "6400 / 2 = 3200", "3200 - 400 = 2800", "2800 / 6 = 466.67"],
      },
      sources: [BURN],
    }),
    kind: "mc",
    options: [
      { text: "350 mL/hour", why: "This spreads the 2800 mL still due over 8 hours. 2 of those 8 hours have already passed." },
      { text: "400 mL/hour", why: "This spreads 3200 mL over 8 hours. It ignores the fluid already given and the time already passed." },
      { text: "467 mL/hour", why: "2800 mL still due in the first 8 hours, over the 6 hours left, is about 467 mL/hour." },
      { text: "533 mL/hour", why: "This spreads 3200 mL over 6 hours. It ignores the 400 mL already given." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s25-09", {
      topic: "Tamponade after cardiac surgery",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 6 hours after coronary artery bypass surgery. Mediastinal chest tube drainage was 150 mL per hour for 2 hours and fell to 10 mL in the last hour. BP is 84/66 mmHg, down from 118/72 mmHg. Neck veins are distended and heart sounds are muffled. Incision pain is 4 of 10. Temperature is 37.6°C (99.7°F). Urine output is 50 mL per hour. Which three findings most support cardiac tamponade? Select three.",
      rationale:
        "After heart surgery, drainage that stops suddenly after running high can mean a clot is blocking the tube. Blood then collects around the heart. Distended neck veins and muffled heart sounds with the falling BP show the heart cannot fill. Incision pain of 4 is expected. A temperature of 37.6°C is common after bypass. Urine output of 50 mL/hour is adequate for now.",
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Incision pain rated 4 of 10", why: "Moderate incision pain is expected 6 hours after sternotomy." },
      { text: "Distended neck veins", why: "Pressure around the heart blocks venous return, so the neck veins fill." },
      { text: "Temperature 37.6°C (99.7°F)", why: "A mild temperature rise is common early after bypass surgery." },
      { text: "Muffled heart sounds", why: "Fluid around the heart dampens the heart sounds." },
      { text: "Urine output 50 mL/hour", why: "This output shows the kidneys are still perfused for now." },
      { text: "Drainage fell to 10 mL/hour", why: "A sudden fall after heavy drainage suggests a clotted tube with blood trapped around the heart." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s25-10", {
      need: "SIPC",
      topic: "Cleaning after Clostridioides difficile",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client on contact precautions has a Clostridioides difficile infection confirmed by stool testing. The nurse prepares to clean the bedside commode after the client uses it. Which product should the nurse use?",
      rationale:
        "Clostridioides difficile forms spores that survive on surfaces for months. Alcohol and quaternary ammonium products do not kill the spores. A sporicidal chlorine-based product does, so it is used on equipment and surfaces in the room. Soap and water helps remove spores from hands, but a cloth with soap does not disinfect a commode.",
      sources: [CDIFF],
    }),
    kind: "mc",
    options: [
      { text: "Plain soap and water cloth", why: "Soap and water can wash spores off hands but does not disinfect a commode surface." },
      { text: "Alcohol-based disinfectant wipe", why: "Alcohol does not kill Clostridioides difficile spores." },
      { text: "Quaternary ammonium disinfectant wipe", why: "Quaternary ammonium products do not kill the spores." },
      { text: "Sporicidal chlorine-based wipe", why: "A sporicidal chlorine product kills the spores left on equipment." },
    ],
    correct: 3,
  },
];
