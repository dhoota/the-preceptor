import type { Item } from "@/engine/types";
import { ADA, BTF, HINKLE, KAWASAKI, TLS, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s22-41", {
      topic: "Prolonged fever in a preschooler",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 3-year-old has had a fever of 39.5°C (103.1°F) for 6 days that does not respond to antipyretics. The child is irritable. Which pair of findings would most support Kawasaki disease?",
      rationale:
        "Kawasaki disease is a vasculitis of young children. Fever for 5 days or more with red, cracked lips and swollen hands or feet are part of its main criteria. Treatment with IV immune globulin lowers the risk of coronary artery aneurysm. A barking cough fits croup. Drooling with a tripod position fits epiglottitis. Honey-colored crusts fit impetigo.",
      refs: ["Classic Kawasaki disease is fever for at least 5 days with at least 4 of 5 main clinical features."],
      sources: [KAWASAKI],
    }),
    kind: "mc",
    options: [
      { text: "Barking cough and hoarse voice", why: "A barking cough and hoarseness fit croup, not a vasculitis." },
      { text: "Red, cracked lips and swollen hands", why: "Lip changes and hand swelling with a long fever are main criteria for Kawasaki disease." },
      { text: "Drooling and sitting in a tripod position", why: "Drooling with a tripod position fits epiglottitis, an airway emergency." },
      { text: "Honey-colored crusts on the face", why: "Honey-colored crusts fit impetigo, a skin infection." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-42", {
      topic: "Laboratory signs after starting leukemia treatment",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with acute lymphoblastic leukemia and a high white cell count started induction chemotherapy 36 hours ago. Urine output has dropped. Which laboratory findings would suggest tumor lysis syndrome? Select all that apply.",
      rationale:
        "Chemotherapy breaks down large numbers of cancer cells at once. The cells release potassium, phosphate and nucleic acids into the blood. Nucleic acids become uric acid, which can crystallize in the kidneys. Phosphate binds calcium, so calcium falls. Low sodium and low glucose are not features of the syndrome.",
      sources: [TLS],
    }),
    kind: "sata",
    options: [
      { text: "Sodium 128 mEq/L (128 mmol/L)", why: "Low sodium is not a feature of tumor lysis syndrome." },
      { text: "Potassium 6.2 mEq/L (6.2 mmol/L)", why: "Dying cells release potassium into the blood." },
      { text: "Glucose 42 mg/dL (2.3 mmol/L)", why: "Low glucose is not a feature of tumor lysis syndrome." },
      { text: "Uric acid 12.4 mg/dL (738 micromol/L)", why: "Nucleic acids from dying cells are broken down to uric acid." },
      { text: "Phosphorus 7.8 mg/dL (2.52 mmol/L)", why: "Cancer cells hold large stores of phosphate that spill into the blood." },
      { text: "Calcium 6.9 mg/dL (1.72 mmol/L)", why: "High phosphate binds calcium and lowers the blood level." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s22-43", {
      topic: "Unresponsive client with low glucose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with type 1 diabetes is found unresponsive in a bathroom at an outpatient clinic. Capillary glucose is 38 mg/dL (2.1 mmol/L). The client has no IV access. What should the nurse do first?",
      rationale:
        "A glucose of 38 mg/dL with unresponsiveness is severe hypoglycemia. The client cannot swallow safely, so nothing is placed in the mouth. Glucagon given into a muscle raises glucose without IV access. Waiting to recheck delays treatment of a brain short of glucose.",
      sources: [ADA],
    }),
    kind: "mc",
    options: [
      { text: "Give glucagon 1 mg IM", why: "IM glucagon raises glucose in a client who cannot swallow and has no IV line." },
      { text: "Place glucose gel inside the cheek", why: "An unresponsive client can aspirate gel placed in the mouth." },
      { text: "Give orange juice by mouth", why: "An unresponsive client cannot swallow juice safely." },
      { text: "Recheck the glucose in 15 minutes", why: "Waiting delays treatment of a glucose of 38 mg/dL." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-44", {
      topic: "Weakening breathing in myasthenia gravis",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with myasthenia gravis has a chest infection. Over 6 hours the client develops a weak cough, trouble swallowing saliva and shallow breathing at 28/minute. The voice is soft and nasal. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Infection can trigger a myasthenic crisis. Weakness of the breathing and swallowing muscles leads to respiratory failure. Vital capacity shows how strong the breathing muscles are and falls before blood gases change. A falling value signals the need for intubation and ventilation. Extra pyridostigmine can cause a cholinergic crisis and more secretions.",
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse should monitor the client's {0} closely and prepare for {1}.",
    blanks: [
      {
        options: [
          { text: "deep tendon reflexes", why: "Reflexes do not measure breathing muscle strength." },
          { text: "urine output", why: "Urine output does not show the breathing muscle weakness that threatens this client." },
          { text: "vital capacity", why: "Vital capacity tracks breathing muscle strength and falls before gases change." },
          { text: "blood glucose", why: "Glucose does not reflect the neuromuscular weakness of a crisis." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "a lumbar puncture", why: "A lumbar puncture does not support failing breathing muscles." },
          { text: "an extra pyridostigmine dose", why: "More pyridostigmine can cause a cholinergic crisis with more secretions." },
          { text: "a thymectomy today", why: "Thymectomy is planned surgery, not treatment for acute respiratory failure." },
          { text: "intubation and ventilation", why: "Failing breathing and swallowing muscles need airway protection and ventilation." },
        ],
        correct: 3,
      },
    ],
  },
  {
    ...meta("rn-s22-45", {
      topic: "Response to treatment for raised brain pressure",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client with a severe traumatic brain injury has an intracranial pressure monitor. The intracranial pressure (ICP) was 28 mmHg with a mean arterial pressure of 86 mmHg. Mannitol was given and the head of the bed was raised to 30 degrees. Which finding 30 minutes later best shows the treatment worked?",
      rationale:
        "An ICP above 22 mmHg needs treatment. Cerebral perfusion pressure (CPP) is the mean arterial pressure minus the ICP. An ICP of 18 mmHg with a CPP of 68 mmHg shows lower pressure and good blood flow to the brain. An ICP of 26 mmHg is still too high. A CPP of 45 mmHg risks brain ischemia. Diuresis shows the drug acted but not that ICP fell.",
      refs: ["An ICP above 22 mmHg is treated. The target cerebral perfusion pressure is 60 to 70 mmHg."],
      sources: [BTF],
    }),
    kind: "mc",
    options: [
      { text: "ICP 26 mmHg and CPP 60 mmHg", why: "An ICP of 26 mmHg is still above the treatment threshold of 22 mmHg." },
      { text: "ICP 18 mmHg and CPP 68 mmHg", why: "ICP is below 22 mmHg and CPP is within the 60 to 70 mmHg target." },
      { text: "ICP 20 mmHg and CPP 45 mmHg", why: "A CPP of 45 mmHg is below target and risks brain ischemia." },
      { text: "Urine output of 450 mL since the dose", why: "Diuresis shows the mannitol acted but not that the ICP fell." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-46", {
      topic: "Expected findings with low potassium",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with heart failure takes furosemide 40 mg twice a day. Serum potassium is 2.8 mEq/L (2.8 mmol/L). Which two findings should the nurse expect? Select two.",
      rationale:
        "Furosemide causes potassium loss in the urine. A potassium of 2.8 mEq/L weakens muscle contraction, which causes cramps and weakness. On the monitor it flattens T waves and brings out U waves. Peaked T waves go with high potassium. Tingling around the mouth goes with low calcium. Diarrhea and active bowel sounds go with high potassium.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Tall peaked T waves on the monitor", why: "Peaked T waves go with a high potassium, not a low one." },
      { text: "Tingling around the mouth", why: "Tingling around the mouth is a sign of low calcium." },
      { text: "Leg cramps and muscle weakness", why: "Low potassium impairs muscle contraction, causing cramps and weakness." },
      { text: "Diarrhea and hyperactive bowel sounds", why: "Increased bowel activity goes with high potassium. Low potassium slows the bowel." },
      { text: "Flat T waves with U waves", why: "Low potassium flattens T waves and brings out U waves." },
      { text: "Hot, flushed skin", why: "Flushed skin is not a feature of low potassium." },
    ],
    correct: [2, 4],
  },
  {
    ...meta("rn-s22-47", {
      topic: "Breathing technique for COPD at home",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A client with chronic obstructive pulmonary disease reports getting short of breath while climbing the stairs at home. Which breathing technique should the nurse plan to teach?",
      rationale:
        "Pursed-lip breathing slows exhalation and keeps small airways open longer. More trapped air leaves the lungs, so the next breath is easier. Rapid shallow breathing traps more air. Holding the breath during effort raises chest pressure and worsens breathlessness. Panting moves little air.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Pursed-lip breathing", why: "Slow exhalation through pursed lips keeps airways open and empties trapped air." },
      { text: "Rapid shallow breathing", why: "Fast shallow breaths shorten exhalation and trap more air." },
      { text: "Holding the breath on each step", why: "Breath holding raises chest pressure and worsens breathlessness." },
      { text: "Panting through an open mouth", why: "Panting moves little air and does not slow exhalation." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-48", {
      topic: "Treating a shaky client before lunch",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with type 2 diabetes who uses insulin reports feeling shaky and sweaty before lunch. The client is alert and can swallow. Place the nurse's actions in order.",
      rationale:
        "The nurse confirms low glucose with a capillary check. An alert client gets 15 g of fast-acting carbohydrate by mouth. Glucose is rechecked after 15 minutes and treatment repeats if it is still low. Once glucose recovers, a snack or the meal prevents a repeat drop. Glucagon is for a client who cannot swallow. Fat slows sugar absorption, so cheese is not the first step.",
      refs: ["An alert client with hypoglycemia receives 15 g of fast-acting carbohydrate and is rechecked after 15 minutes."],
      sources: [ADA],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Recheck glucose in 15 minutes", why: "The recheck shows whether a second dose of carbohydrate is needed." },
      { text: "Give glucagon 1 mg IM into the thigh", why: "Glucagon is kept for a client who cannot swallow. This client is alert." },
      { text: "Check capillary blood glucose", why: "A capillary check confirms low glucose before treatment." },
      { text: "Give a snack once glucose recovers", why: "A snack or meal after recovery prevents glucose from falling again." },
      { text: "Give 15 g of fast-acting carbohydrate", why: "Fast-acting sugar by mouth treats hypoglycemia in an alert client." },
      { text: "Give cheese and crackers as the first step", why: "Fat slows absorption, so cheese does not raise glucose quickly." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s22-49", {
      topic: "Blood gas after days of vomiting",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client has vomited for 3 days. Arterial blood gases show pH 7.51, PaCO2 48 mmHg and HCO3 36 mEq/L. How should the nurse interpret these results?",
      rationale:
        "A pH of 7.51 is alkalotic. The HCO3 of 36 mEq/L is high and moves in the same direction as the pH, so the primary problem is metabolic. Vomiting removes stomach acid, which raises bicarbonate. The PaCO2 of 48 mmHg is above normal because breathing slows to hold CO2. The pH is still abnormal, so compensation is only partial.",
      refs: ["Normal arterial values: pH 7.35 to 7.45, PaCO2 35 to 45 mmHg, HCO3 22 to 26 mEq/L."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report bicarbonate in mmol/L, so the result reads HCO3 36 mmol/L. PaCO2 is still reported in mmHg. The Medical Council of Canada lists bicarbonate as 21 to 32 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Respiratory alkalosis, uncompensated", why: "In respiratory alkalosis the PaCO2 is low. Here it is 48 mmHg." },
      { text: "Respiratory acidosis, fully compensated", why: "A pH of 7.51 is alkalotic, and full compensation would bring pH into the normal range." },
      { text: "Metabolic alkalosis, partly compensated", why: "High pH and HCO3 with a raised PaCO2 and an abnormal pH fit partial compensation." },
      { text: "Metabolic acidosis, partly compensated", why: "Metabolic acidosis has a low pH and a low HCO3. Both are high here." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s22-50", {
      topic: "Home care after pacemaker insertion",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client had a permanent pacemaker placed in the left upper chest yesterday. The nurse evaluates the client's understanding of discharge teaching. Which statements show understanding? Select all that apply.",
      rationale:
        "Limiting movement of the arm on the device side lets the leads settle into the heart wall. The ID card tells staff about the device during screening and emergencies. Hiccups that do not stop can mean the lead is pacing the diaphragm. The incision is checked for infection. Home microwave ovens do not affect modern pacemakers. A cell phone is held on the side away from the device. Heavy lifting waits for provider clearance.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "\"I will stop using the microwave oven at home.\"", why: "Modern pacemakers are shielded from household microwave ovens." },
      { text: "\"I will keep my left arm below shoulder level for now.\"", why: "Limiting arm movement helps prevent the new leads from moving." },
      { text: "\"I will carry my pacemaker ID card.\"", why: "The card informs staff about the device in screening and emergencies." },
      { text: "\"I will hold my cell phone to my left ear.\"", why: "A phone is held on the side away from the device to limit interference." },
      { text: "\"I will report hiccups that do not stop.\"", why: "Persistent hiccups can mean the lead is stimulating the diaphragm." },
      { text: "\"I can lift heavy boxes with my left arm next week.\"", why: "Heavy lifting on the device side waits until the provider clears it." },
      { text: "\"I will check the incision for redness or drainage.\"", why: "Redness or drainage can signal a pocket infection." },
    ],
    correct: [1, 2, 4, 6],
  },
];
