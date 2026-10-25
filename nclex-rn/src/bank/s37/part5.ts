import type { Item } from "@/engine/types";
import { AAP_IVF, ACCP_VTE, AHA_ECG, HINKLE, ISBI, NICE_VTE, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s37-41", {
      need: "RRP",
      topic: "Compression stockings with arterial disease",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 77-year-old client admitted with pneumonia has prescriptions for enoxaparin 40 mg subcutaneously daily and knee-high graduated compression stockings. The client has peripheral arterial disease with calf pain on walking. Both feet are cool with faint dorsalis pedis pulses. The ankle-brachial index last month was 0.6. What should the nurse do?",
      rationale:
        "Graduated compression stockings can reduce blood flow to limbs that already have poor arterial supply. Suspected or proven peripheral arterial disease is a reason not to use them. Cool feet, faint pulses, claudication and an ankle-brachial index of 0.6 confirm the disease. The nurse holds the stockings and clarifies the prescription. The enoxaparin still lowers clot risk. Thigh-high or night-only stockings still compress the arteries.",
      sources: [NICE_VTE],
    }),
    kind: "mc",
    options: [
      { text: "Apply the stockings and check the feet each shift", why: "Stockings compress limbs with poor arterial supply and can cause skin injury." },
      { text: "Apply thigh-high stockings instead of knee-high", why: "A longer stocking still compresses the arteries of a limb with poor flow." },
      { text: "Hold the stockings and clarify the prescription", why: "Peripheral arterial disease is a reason not to use graduated stockings." },
      { text: "Apply the stockings only while the client sleeps", why: "Night use still compresses limbs that have poor arterial flow." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s37-42", {
      need: "RRP",
      topic: "Clot prevention when bleeding risk is high",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 45-year-old client is on day 1 after an emergency laparotomy and splenectomy after a car crash. The surgeon documents a high risk of bleeding. The client is also at high risk for venous thromboembolism and cannot walk yet. Which prophylaxis should the nurse anticipate for today?",
      rationale:
        "When the risk of clotting is high and the risk of bleeding is also high, mechanical prophylaxis is used until the bleeding risk falls. Intermittent pneumatic compression moves blood out of the leg veins without raising bleeding risk. A drug is added once the surgeon judges bleeding risk acceptable. Low molecular weight heparin and aspirin both raise bleeding risk now. Waiting until the client walks leaves a high-risk client unprotected.",
      sources: [ACCP_VTE],
    }),
    kind: "mc",
    options: [
      { text: "Intermittent pneumatic compression to both legs", why: "Mechanical compression lowers clot risk without adding bleeding risk." },
      { text: "Enoxaparin 40 mg subcutaneously daily", why: "An anticoagulant now raises bleeding risk the surgeon has judged high." },
      { text: "No prophylaxis until the client can walk", why: "A high-risk client left unprotected may develop a clot." },
      { text: "Aspirin 81 mg by mouth daily", why: "Aspirin adds antiplatelet effect and raises the risk of bleeding." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s37-43", {
      need: "RRP",
      topic: "Missed void during a timed collection",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client started a 24-hour urine collection for protein at 0800 by discarding the first void. At 1400 the client tells the nurse that a void went into the toilet and was flushed by mistake. What should the nurse do?",
      rationale:
        "A 24-hour test measures everything excreted over a set period. A lost void makes the total falsely low, so the result would be wrong. The collection is discarded and restarted with a new start time, beginning with an empty bladder. Noting the miss does not restore the missing urine. Extra water changes volume but not the amount of protein lost. Ending early gives a period shorter than 24 hours.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Note the missed void on the label and continue", why: "The lost void makes the total falsely low, so the result would be invalid." },
      { text: "Ask the client to drink extra water to make up volume", why: "Extra water changes volume but does not replace the protein lost in the void." },
      { text: "Discard the urine collected and restart the test", why: "An incomplete collection is invalid, so a new 24-hour period starts." },
      { text: "End the test now and send the urine collected so far", why: "A short collection does not cover the full 24 hours." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s37-44", {
      need: "RRP",
      topic: "Errors in a home timed urine log",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A client collected a 24-hour urine specimen at home for creatinine clearance. The nurse taught the client to start at 0700 Monday with an empty bladder, keep the container cold and finish with a void at 0700 Tuesday. The nurse reviews the client's log at the clinic. Click to highlight the entries that show the specimen is compromised.",
      rationale:
        "The client began correctly by discarding the 0700 Monday void. Leaving the container in the sun from 1300 to 1700 breaks the rule to keep it cold. Toilet paper in the hat contaminates the urine. The void during the shower was lost, so the total is incomplete. Skipping the final void at 0700 Tuesday leaves out urine made during the collection. The 1015 and 2300 voids were handled correctly.",
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Monday 0700, emptied bladder into the toilet and wrote down the time]]. [[Monday 1015, voided into the hat and poured it into the container]]. [[Monday 1300, left the container on the patio table in the sun until 1700]]. [[Monday 1830, voided and some toilet paper fell into the hat]]. [[Monday 2300, voided into the hat and poured it into the container]]. [[Tuesday 0300, voided while in the shower]]. [[Tuesday 0700, skipped the last void to get to the clinic]].",
    spans: [
      { text: "Monday 0700, emptied bladder into the toilet and wrote down the time", why: "Discarding the first void starts the test with an empty bladder, as taught." },
      { text: "Monday 1015, voided into the hat and poured it into the container", why: "This void was collected correctly." },
      { text: "Monday 1300, left the container on the patio table in the sun until 1700", why: "The specimen must stay cold. Four hours in the sun breaks that rule." },
      { text: "Monday 1830, voided and some toilet paper fell into the hat", why: "Paper in the urine contaminates the specimen." },
      { text: "Monday 2300, voided into the hat and poured it into the container", why: "This void was collected correctly." },
      { text: "Tuesday 0300, voided while in the shower", why: "A lost void makes the collection incomplete." },
      { text: "Tuesday 0700, skipped the last void to get to the clinic", why: "The final void at the end time completes the 24 hours." },
    ],
    correct: [2, 3, 5, 6],
  },
  {
    ...meta("rn-s37-45", {
      need: "PA",
      topic: "Rising sodium on tube feeding",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 84-year-old client with dysphagia after a stroke receives a high-protein formula at 60 mL each hour through a gastrostomy tube. Water flushes are 30 mL every 4 hours. Over 5 days the client has become drowsy and more confused. Mucous membranes are dry and urine is scant and dark. Sodium is 156 mEq/L (156 mmol/L), BUN 48 mg/dL (17.1 mmol/L) and creatinine 1.1 mg/dL (97 micromol/L). Which cause is most likely?",
      rationale:
        "A high-protein formula gives a large solute load that needs water for excretion. The flushes supply little free water, and the client cannot drink in response to thirst. Water is lost faster than sodium, so sodium rises to 156 mEq/L. A high BUN of 48 mg/dL with a normal creatinine fits dehydration and a high protein intake. Diabetes insipidus gives large volumes of dilute urine. Excess antidiuretic hormone lowers sodium.",
      canada: "Canadian laboratories report urea in mmol/L rather than BUN in mg/dL, and creatinine in micromol/L. The urea here would read about 17.1 mmol/L.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Too little free water for the formula load", why: "Small flushes with a high-protein formula lead to water loss and a high sodium." },
      { text: "Excess antidiuretic hormone after the stroke", why: "Excess antidiuretic hormone retains water and lowers sodium." },
      { text: "Sodium carried in the water flushes", why: "Plain water flushes contain no sodium." },
      { text: "Diabetes insipidus from pituitary injury", why: "Diabetes insipidus causes large volumes of dilute urine. This urine is scant and dark." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s37-46", {
      need: "PA",
      topic: "Maintenance fluid choice for a child after surgery",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 7-year-old who weighs 24 kg has nothing by mouth on day 1 after an appendectomy and needs maintenance IV fluid. Serum sodium is 136 mEq/L (136 mmol/L). The prescription reads dextrose 5% in 0.2% sodium chloride with 20 mEq/L of potassium chloride at the maintenance rate. What should the nurse do?",
      rationale:
        "Pain, nausea, opioids and surgery raise antidiuretic hormone in children, so free water is held back. Hypotonic fluid such as 0.2% sodium chloride can then cause hospital-acquired hyponatremia. Guidelines recommend isotonic maintenance fluid with suitable potassium chloride and dextrose for children from 28 days to 18 years. The nurse clarifies the prescription. Potassium is appropriate. Dextrose 5% in water would be even more hypotonic.",
      refs: ["Children from 28 days to 18 years who need maintenance IV fluid should receive isotonic solutions with appropriate potassium chloride and dextrose."],
      sources: [AAP_IVF],
    }),
    kind: "mc",
    options: [
      { text: "Start the infusion as prescribed", why: "Hypotonic maintenance fluid after surgery risks hospital-acquired hyponatremia." },
      { text: "Clarify the prescription for an isotonic fluid", why: "Isotonic maintenance fluid lowers the risk of hyponatremia in children." },
      { text: "Ask for the potassium chloride to be removed", why: "Potassium chloride at this level is appropriate in maintenance fluid." },
      { text: "Ask to change to dextrose 5% in water", why: "Dextrose 5% in water has no sodium and raises the hyponatremia risk further." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s37-47", {
      need: "PA",
      topic: "Eliciting carpal spasm with a BP cuff",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 49-year-old client with acute pancreatitis has a serum calcium of 7.2 mg/dL (1.8 mmol/L) and a serum albumin of 4.0 g/dL (40 g/L). The nurse plans to check for Trousseau sign. Which technique should the nurse use?",
      rationale:
        "With a normal albumin of 4.0 g/dL, a calcium of 7.2 mg/dL is a true low. Trousseau sign is tested by inflating a BP cuff above the systolic pressure for up to 3 minutes. Spasm of the hand and wrist is a positive sign of neuromuscular irritability. Tapping the facial nerve tests Chvostek sign. Forcing the foot upward is an old test for calf pain. A patellar tap tests a deep tendon reflex.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Tap the facial nerve in front of the ear", why: "Tapping the facial nerve tests Chvostek sign, not Trousseau sign." },
      { text: "Flex the foot sharply upward at the ankle", why: "Forced dorsiflexion is a calf pain test and does not test calcium." },
      { text: "Strike the patellar tendon with a hammer", why: "A patellar tap tests a deep tendon reflex, not carpal spasm." },
      { text: "Inflate a BP cuff above systolic for 3 minutes", why: "Cuff pressure above systolic for up to 3 minutes provokes carpal spasm when calcium is low." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s37-48", {
      version: 2,
      need: "PA",
      topic: "Keeping a large burn client warm",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 30-year-old client with deep burns over 50% of the body surface arrives in the emergency department 40 minutes after injury. The burns were cooled with water at the scene. Core temperature is 36.0°C (96.8°F). Which measures should the nurse take to prevent hypothermia? Select all that apply.",
      rationale:
        "Burned skin cannot hold heat, and a large burn loses heat fast. The burns have already been cooled, and the core temperature is 36.0°C. Active warming, warmed IV fluids and a warm room limit heat loss. Exposing only one area at a time during assessment helps. Leaving burns uncovered, wet dressings over large areas and more cooling would drive the temperature down further.",
      sources: [ISBI, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Leave the burns uncovered to air-dry", why: "Uncovered burns lose heat by evaporation and radiation." },
      { text: "Use a forced-air warming blanket", why: "Active warming replaces heat lost through the burned skin." },
      { text: "Keep wet dressings on all burned areas", why: "Wet dressings over a large area pull heat from the body." },
      { text: "Warm the IV fluids", why: "Cold fluids at resuscitation volumes lower the core temperature." },
      { text: "Continue cooling the burns with water", why: "The burns were already cooled, and more cooling risks hypothermia." },
      { text: "Raise the room temperature", why: "A warm room lowers heat loss from exposed skin." },
      { text: "Expose one body area at a time", why: "Limiting exposure during assessment saves body heat." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s37-49", {
      version: 2,
      need: "PA",
      topic: "Matching burn depth to wound appearance",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse assesses four burn areas on a client injured in a house fire. Drag the burn depth that matches each wound description.",
      rationale:
        "A superficial burn involves only the epidermis and is red, dry and painful without blisters. A superficial partial-thickness burn forms moist, pink blisters that blanch and hurt. A deep partial-thickness burn looks pale and mottled, blanches slowly and hurts less. A full-thickness burn is leathery, white or charred, does not blanch and is painless because nerve endings are destroyed. Fourth-degree burns reach muscle or bone, which none of the areas shows.",
      sources: [HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "Red and dry with no blisters, painful to touch",
      "Moist, pink blisters that blanch and hurt",
      "Pale and mottled, slow to blanch, less painful",
      "Leathery and white, no blanching, painless",
    ],
    tokens: [
      { text: "Full-thickness", why: "Leathery, white, painless skin that does not blanch is full thickness." },
      { text: "Superficial", why: "Red, dry, painful skin without blisters is a superficial burn." },
      { text: "Fourth-degree, into muscle or bone", why: "None of the areas shows muscle or bone involvement." },
      { text: "Deep partial-thickness", why: "Pale, mottled skin that blanches slowly is a deep partial burn." },
      { text: "Superficial partial-thickness", why: "Moist, pink, painful blisters that blanch are a superficial partial burn." },
    ],
    correct: [1, 4, 3, 0],
  },
  {
    ...meta("rn-s37-50", {
      need: "RRP",
      topic: "Skin preparation for monitor electrodes",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The telemetry monitor for a 66-year-old client with heart failure has alarmed many times for artifact and lead-off. The chest is hairy and the skin is oily from body lotion. Which actions should the nurse take to improve the signal? Select all that apply.",
      rationale:
        "Good skin preparation lowers skin impedance and cuts false alarms. Hair is clipped at the sites. Soap and water remove the lotion, and the skin is dried. Light abrasion removes dead surface cells. Electrodes are changed daily so the gel stays moist. Lotion makes contact worse. Sites over large muscles pick up muscle artifact. Silencing the lead-off alarm hides real problems.",
      sources: [AHA_ECG],
    }),
    kind: "sata",
    options: [
      { text: "Apply lotion so the electrodes stick", why: "Lotion leaves an oily film that weakens electrode contact." },
      { text: "Clip hair at the electrode sites", why: "Hair keeps the gel from contacting the skin." },
      { text: "Place electrodes over large chest muscles", why: "Muscle movement under an electrode adds artifact." },
      { text: "Wash the sites with soap and water and dry them", why: "Removing oil and drying the skin improves contact." },
      { text: "Lightly abrade the skin at each site", why: "Gentle abrasion removes dead cells and lowers impedance." },
      { text: "Turn off the lead-off alarm", why: "Silencing the alarm hides real lead and rhythm problems." },
      { text: "Replace the electrodes every day", why: "Daily changes keep the gel moist and contact strong." },
    ],
    correct: [1, 3, 4, 6],
  },
];
