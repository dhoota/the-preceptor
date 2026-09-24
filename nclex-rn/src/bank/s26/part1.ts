import type { Item } from "@/engine/types";
import { ASHP_HD, AORN, HAND_HYGIENE, HINKLE, ISOLATION, NFPA99, PANCREATITIS, POTTER, WHO_HH, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s26-01", {
      need: "SIPC",
      topic: "Hand hygiene for visibly soiled hands",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse empties a closed wound drain and removes the gloves. The nurse then sees a smear of blood on the back of one hand. Which action should the nurse take next?",
      rationale:
        "Hands that are visibly soiled with blood need washing with soap and running water. Friction and rinsing remove the organic material. An alcohol hand rub does not clean off visible blood. A surface wipe is made for equipment, not skin. New gloves over soiled hands trap the blood against the skin and spread it to the next task.",
      sources: [HAND_HYGIENE, WHO_HH],
    }),
    kind: "mc",
    options: [
      { text: "Rub the hands with alcohol hand rub", why: "Alcohol rub works on hands that look clean. It does not remove visible blood or other organic material." },
      { text: "Wash the hands with soap and water", why: "Soap, friction and running water remove visible blood from the skin." },
      { text: "Wipe the hands with a surface wipe", why: "Surface disinfectant wipes are made for equipment. They are not a hand hygiene product." },
      { text: "Put on clean gloves over the hands", why: "Gloves do not replace hand hygiene. Blood left under the gloves stays on the skin." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s26-02", {
      need: "SIPC",
      topic: "Protection during wound irrigation",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to irrigate a large open abdominal wound with a syringe. The wound drains heavily and the client needs only standard precautions. Which protective equipment should the nurse wear? Select all that apply.",
      rationale:
        "Standard precautions match the equipment to the expected exposure. Irrigation under pressure can spray wound fluid, so the nurse protects the hands, the clothing and the face. Clean gloves, a fluid-resistant gown and a face shield do this. An N95 respirator is for airborne spread. Chemotherapy gloves are for hazardous drugs. A gown does not need to be sterile to protect the wearer.",
      sources: [ISOLATION],
    }),
    kind: "sata",
    options: [
      { text: "Fit-tested N95 respirator", why: "An N95 filters airborne particles. Wound fluid spray is a splash risk, not an airborne one." },
      { text: "Clean exam gloves", why: "Gloves protect the hands from contact with wound drainage." },
      { text: "Sterile surgical gown", why: "Sterility adds nothing to the nurse's protection here. A clean fluid-resistant gown is enough." },
      { text: "Full face shield", why: "Irrigation can spray fluid, so the eyes, nose and mouth need a barrier." },
      { text: "Two pairs of chemo gloves", why: "Double chemotherapy-tested gloves are for handling hazardous drugs, not wound fluid." },
      { text: "Fluid-resistant gown", why: "A fluid-resistant gown keeps sprayed drainage off the nurse's clothing and skin." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s26-03", {
      need: "SIPC",
      topic: "Mask for a lumbar puncture",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse sets up for a primary health care provider who will perform a lumbar puncture at the bedside. The provider has performed hand hygiene and will wear sterile gloves. Which additional item should the nurse have ready for the provider to wear?",
      rationale:
        "Standard precautions call for a surgical mask on the person who inserts a needle or catheter into the spinal or epidural space. Cases of bacterial meningitis after spinal procedures have been linked to mouth flora from the operator. The mask blocks these droplets from the sterile site. An N95 is for airborne pathogens. Shoe covers and a second glove type do not protect the puncture site.",
      sources: [ISOLATION],
    }),
    kind: "mc",
    options: [
      { text: "A fit-tested N95 respirator", why: "An N95 protects the wearer from airborne particles. It is not what protects the spinal puncture site." },
      { text: "A pair of shoe covers", why: "Shoe covers do not stop droplets from the operator's mouth reaching the puncture site." },
      { text: "A pair of exam gloves", why: "The provider already wears sterile gloves. Exam gloves add nothing to the sterile field." },
      { text: "A surgical face mask", why: "A mask stops oral droplets from reaching the puncture site and lowers the risk of meningitis." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s26-04", {
      need: "SIPC",
      topic: "Sequence for a sterile wound packing change",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse changes the gauze packing of a surgical wound that is healing by secondary intention. The nurse has explained the procedure, positioned the client and performed hand hygiene. Place the next steps in order.",
      rationale:
        "The soiled packing comes out first with clean gloves, because it is already contaminated. The nurse then removes those gloves and performs hand hygiene. The sterile kit is opened on a clean, dry surface before sterile gloves go on. Sterile gloves come last so they touch only sterile items. The wound is then packed with moistened sterile gauze. Leftover gauze from an earlier kit is not sterile.",
      sources: [POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Put on sterile gloves", why: "Sterile gloves go on after the kit is open, so they touch only sterile items." },
      { text: "Remove the old packing with clean gloves", why: "The old packing is contaminated, so clean gloves are enough to remove it." },
      { text: "Pack the wound with moist sterile gauze", why: "Packing is the last step, done with sterile gloves and sterile gauze." },
      { text: "Reuse gauze left from the last kit", why: "Gauze from an opened kit is no longer sterile and is not used in the wound." },
      { text: "Remove gloves and perform hand hygiene", why: "Soiled gloves come off and hands are cleaned before sterile supplies are handled." },
      { text: "Open the sterile kit on a dry surface", why: "The kit is opened on a clean, dry surface before sterile gloves go on." },
    ],
    correct: [1, 4, 5, 0, 2],
  },
  {
    ...meta("rn-s26-05", {
      need: "RRP",
      topic: "Calcium corrected for low albumin",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 72-year-old client with poor oral intake has a total serum calcium of 7.6 mg/dL (1.9 mmol/L) and a serum albumin of 2.4 g/dL (24 g/L). The laboratory reference range for calcium is 8.5 mg/dL (2.12 mmol/L) to 10.5 mg/dL (2.62 mmol/L). The unit formula is: corrected calcium equals measured calcium plus 0.8 times (4 minus albumin). Calculate the corrected calcium.",
      rationale:
        "The albumin shortfall is 4 minus 2.4, which is 1.6. Multiplying 1.6 by 0.8 gives 1.28. Adding 1.28 to 7.6 gives 8.88, which rounds to 8.9 mg/dL. That value lies inside the reference range of 8.5 to 10.5 mg/dL. Much of the calcium in blood rides on albumin. The low total calcium mainly reflects the low albumin.",
      calc: { expr: "7.6 + 0.8 * (4 - 2.4)", answer: 8.88, unit: "mg/dL", round: 1, steps: ["4 - 2.4 = 1.6", "0.8 * 1.6 = 1.28", "7.6 + 1.28 = 8.88"] },
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report calcium in mmol/L and albumin in g/L. The same correction in SI units adds 0.02 mmol/L for each g/L of albumin below 40 g/L, which gives 2.22 mmol/L here.",
    }),
    kind: "mc",
    options: [
      { text: "6.3 mg/dL (1.57 mmol/L)", why: "This subtracts the correction from the measured calcium instead of adding it." },
      { text: "8.4 mg/dL (2.10 mmol/L)", why: "This adds 0.8 without multiplying it by the albumin shortfall of 1.6." },
      { text: "8.9 mg/dL (2.22 mmol/L)", why: "The shortfall of 1.6 times 0.8 is 1.28. Adding it to 7.6 gives 8.9 mg/dL." },
      { text: "9.5 mg/dL (2.37 mmol/L)", why: "This multiplies 0.8 by the albumin value itself instead of by the shortfall." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s26-06", {
      need: "SIPC",
      topic: "Checking a sterile package before use",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse gathers supplies from the clean supply room for a sterile dressing change. Which sterile package is safe to use?",
      rationale:
        "A sterile package is usable when the wrapper is dry and intact and the sterilization indicator has changed. Moisture wicks microbes through the wrapper, so a water stain means contamination even after it dries. A tear opens a path for microbes. A package that was opened and taped shut is no longer sterile.",
      sources: [POTTER, AORN],
    }),
    kind: "mc",
    options: [
      { text: "Dry, intact wrapper with the indicator changed", why: "An intact, dry wrapper and a changed indicator show the contents are still sterile." },
      { text: "Intact wrapper with a dried water stain", why: "Moisture carries microbes through the wrapper. A stain shows the package got wet." },
      { text: "Dry wrapper with a small tear at one corner", why: "Any break in the wrapper lets microbes reach the contents." },
      { text: "Package that was opened and taped shut", why: "Once a sterile package is opened, its contents are no longer sterile." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s26-07", {
      need: "RRP",
      topic: "Laboratory pattern in acute pancreatitis",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has sudden, severe epigastric pain that radiates to the back. The laboratory upper limit of normal for serum lipase is 60 units/L. Which laboratory findings are consistent with acute pancreatitis? Select all that apply.",
      rationale:
        "A lipase of 540 units/L is 9 times the upper limit of 60 units/L. That level supports acute pancreatitis. Injured islet cells release less insulin, so glucose rises. Calcium binds to areas of fat necrosis, so serum calcium falls. Inflammation raises the white cell count. A lipase of 70 units/L is below the diagnostic level. Amylase rises in pancreatitis rather than falls.",
      refs: ["A serum lipase more than 3 times the upper limit of normal supports acute pancreatitis."],
      sources: [PANCREATITIS, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Serum lipase of 540 units/L", why: "This is 9 times the upper limit of normal, which supports acute pancreatitis." },
      { text: "Low white blood cell count", why: "Pancreatic inflammation usually raises the white cell count." },
      { text: "Serum lipase of 70 units/L", why: "This is less than 3 times the upper limit, so it does not support the diagnosis." },
      { text: "Elevated blood glucose", why: "Damage to the islet cells lowers insulin release, so glucose rises." },
      { text: "Low serum amylase", why: "Amylase leaks from the injured pancreas and rises early in the illness." },
      { text: "Low serum calcium", why: "Calcium is bound in areas of fat necrosis, so the serum level falls." },
    ],
    correct: [0, 3, 5],
  },
  {
    ...meta("rn-s26-08", {
      need: "SIPC",
      topic: "Oral hazardous drug through a feeding tube",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client who takes nothing by mouth receives all medications through a gastrostomy tube. A new prescription is for an oral antineoplastic drug supplied as tablets. The drug is on the facility's hazardous drug list. What should the nurse do?",
      rationale:
        "Crushing or dissolving a hazardous tablet creates dust and residue that can reach the nurse's skin and lungs. Staff should avoid handling hazardous drugs this way when possible. A liquid form prepared by the pharmacy is preferred for a client who cannot swallow tablets. The client takes nothing by mouth, so whole tablets by mouth are not an option.",
      sources: [ASHP_HD],
    }),
    kind: "mc",
    options: [
      { text: "Crush the tablets in a pill crusher", why: "Crushing a hazardous tablet makes fine dust that contaminates the nurse and the room." },
      { text: "Dissolve the tablets in a medicine cup", why: "Dissolving at the bedside still exposes the nurse to the drug outside any containment." },
      { text: "Ask the pharmacy for a liquid form", why: "A liquid formulation avoids manipulating the tablets and is the preferred option." },
      { text: "Give the tablets whole with sips of water", why: "The client takes nothing by mouth, so oral tablets do not match the plan of care." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s26-09", {
      need: "RRP",
      topic: "Laboratory cause of new confusion in cirrhosis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client with cirrhosis is newly confused and has a flapping tremor of both hands. Laboratory results show sodium 137 mEq/L (137 mmol/L), potassium 4.1 mEq/L (4.1 mmol/L), glucose 104 mg/dL (5.8 mmol/L) and ammonia 118 mcg/dL (69 micromol/L). The ammonia upper limit is 45 mcg/dL (26 micromol/L). Which result best explains the new findings?",
      rationale:
        "The ammonia of 118 mcg/dL is well above the upper limit of 45 mcg/dL. A damaged liver cannot convert ammonia to urea, so it builds up and affects the brain. Confusion and a flapping tremor are signs of hepatic encephalopathy. The sodium of 137 mEq/L, potassium of 4.1 mEq/L and glucose of 104 mg/dL do not explain the change.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Sodium 137 mEq/L", why: "A sodium of 137 mEq/L is in the usual range and does not explain confusion." },
      { text: "Potassium 4.1 mEq/L", why: "A potassium of 4.1 mEq/L is in the usual range and does not cause a flapping tremor." },
      { text: "Glucose 104 mg/dL", why: "A glucose of 104 mg/dL is not low enough to cause confusion." },
      { text: "Ammonia 118 mcg/dL", why: "Ammonia well above the upper limit fits hepatic encephalopathy with confusion and tremor." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s26-10", {
      need: "SIPC",
      topic: "Storing a portable oxygen cylinder",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A family member brings a client's portable oxygen cylinder into the hospital room and lays it flat on the floor beside the bed. What should the nurse do?",
      rationale:
        "Compressed gas cylinders are kept upright and secured in a stand, rack or cart. A cylinder that falls can break its valve and release gas under high pressure. A cylinder propped against the wall can still tip over. A cylinder in the bed can roll onto the client. A cylinder on the floor under the bed can roll and is out of view.",
      sources: [NFPA99, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Secure it upright in a stand or cart", why: "A stand or cart holds the cylinder upright so it cannot fall and damage the valve." },
      { text: "Stand it upright against the wall", why: "An unsecured cylinder can tip over even when it stands against a wall." },
      { text: "Lay it on the bed beside the client", why: "A loose cylinder in the bed can roll against the client and is not secured." },
      { text: "Slide it under the bed out of the way", why: "A cylinder lying on the floor can still roll and strike the valve." },
    ],
    correct: 0,
  },
];
