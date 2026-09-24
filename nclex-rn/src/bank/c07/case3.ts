import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c07-3";

/** Case 3. Rural emergency department. Older woman rescued from a house fire. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Rescue From a House Fire",
  intro:
    "A 62-year-old woman is brought to a rural emergency department at 0230. Firefighters carried her out of a smoke-filled bedroom in her house. The fire started at about 0200. The hospital has no burn unit.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Chronic obstructive pulmonary disease. Uses a tiotropium inhaler daily.",
        "Weight 70 kg.",
        "Last tetanus booster 12 years ago.",
      ].join("\n"),
    },
    {
      title: "Nurses' Notes",
      text: [
        "0240. Red, moist, blistered burns on the front of the chest and abdomen and the front of both arms.",
        "0240. Dry, white, leathery burn on the back of the right hand. No pain when touched there.",
        "0240. Burned area estimated at 27% of total body surface area using the rule of nines.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0240"],
        rows: [
          ["Temperature", "36.4°C (97.5°F)"],
          ["Heart rate", "118/minute"],
          ["Respiratory rate", "28/minute"],
          ["BP", "132/84 mmHg"],
          ["SpO2", "97% on 100% oxygen by nonrebreather mask"],
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
        topic: "Cues of smoke inhalation injury",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse completes the primary survey at 0245. Click to highlight the findings that suggest an injury beyond the skin burns.",
        rationale:
          "A hoarse voice, soot around the nose and mouth, singed nasal hairs and black-flecked sputum point to heat and smoke injury of the airway. Headache and nausea after time in a smoke-filled bedroom suggest carbon monoxide exposure. A pulse oximeter cannot tell carboxyhemoglobin from oxyhemoglobin, so an SpO2 of 97% does not rule it out. Orientation, strong pulses and a soft abdomen are reassuring.",
        sources: [SRC.brunner, SRC.isbi],
      }),
      kind: "highlight",
      passage:
        "[[Alert and oriented]]. [[Hoarse voice]]. [[Soot around the nose and mouth]]. [[Radial pulses strong and equal]]. [[Singed nasal hairs]]. [[Coughing up black-flecked sputum]]. [[Abdomen soft]]. [[Reports a headache and nausea]].",
      spans: [
        { text: "Alert and oriented", why: "Normal orientation is reassuring at this time." },
        { text: "Hoarse voice", why: "Hoarseness suggests swelling of the larynx from heat or smoke." },
        { text: "Soot around the nose and mouth", why: "Soot on the face shows she breathed in smoke." },
        { text: "Radial pulses strong and equal", why: "Strong pulses show adequate circulation at this time." },
        { text: "Singed nasal hairs", why: "Singed hairs show hot gas reached the airway." },
        { text: "Coughing up black-flecked sputum", why: "Carbon in the sputum shows smoke reached the lower airways." },
        { text: "Abdomen soft", why: "A soft abdomen needs no follow-up now." },
        { text: "Reports a headache and nausea", why: "These are early signs of carbon monoxide poisoning after smoke exposure." },
      ],
      correct: [1, 2, 4, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "MOC",
        topic: "Burn center referral criteria",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the findings against the burn center referral guidelines. For each finding, specify whether it meets a criterion for burn center referral.",
        rationale:
          "Partial-thickness burns of 10% or more of body surface meet a criterion, and hers cover 27%. A full-thickness burn meets a criterion, and deep burns of the hand also do. Suspected inhalation injury meets a criterion. A burn in a person with another medical condition, such as COPD, meets a criterion. Age of 62 years, a fast heart rate and tetanus status are not referral criteria.",
        refs: ["Partial-thickness burns of 10% or more of total body surface area warrant burn center consultation and possible transfer."],
        sources: [SRC.abaReferral],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Meets a referral criterion", "Does not meet a referral criterion"],
      rows: [
        { text: "Burns over 27% of body surface", correct: [0], why: "Partial-thickness burns of 10% or more of body surface meet a criterion." },
        { text: "Full-thickness burn of the right hand", correct: [0], why: "Full-thickness burns and deep burns of the hand meet criteria." },
        { text: "Signs of smoke inhalation", correct: [0], why: "All suspected inhalation injuries meet a referral criterion." },
        { text: "Age of 62 years", correct: [1], why: "An adult age of 62 years is not itself a referral criterion." },
        { text: "Heart rate of 118/minute", correct: [1], why: "A fast heart rate is expected after a burn and is not a criterion." },
        { text: "Tetanus booster 12 years ago", correct: [1], why: "Tetanus status guides prophylaxis, not referral." },
        { text: "Chronic obstructive pulmonary disease", correct: [0], why: "Burns in a client with another medical condition meet a criterion." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Airway risk after smoke inhalation",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 0310 the client's voice is more hoarse and the nurse hears faint inspiratory stridor. SpO2 is 96% on the nonrebreather mask. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Heat and smoke cause swelling of the upper airway that can close it within hours. New stridor and worsening hoarseness show the swelling is progressing. Early intubation is needed before the airway closes. An SpO2 of 96% does not show the airway is safe. A heart rate of 118/minute and pain in the burned chest are expected after a burn.",
        sources: [SRC.brunner, SRC.isbi],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "hypovolemic shock", why: "Fluid shifts start early, but the BP of 132/84 mmHg at 0240 was stable." },
            { text: "airway obstruction", why: "Progressive swelling of the upper airway can block it completely." },
            { text: "wound infection", why: "Infection develops over days and is not the immediate threat." },
            { text: "hypothermia", why: "Her temperature is 36.4°C, and hypothermia is not the most urgent risk." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a heart rate of 118/minute", why: "A fast heart rate is expected from pain and fluid shifts." },
            { text: "an SpO2 of 96%", why: "Saturation can stay normal until the airway is nearly closed." },
            { text: "new inspiratory stridor", why: "Stridor means air is moving through a narrowed upper airway." },
            { text: "a temperature of 36.4°C", why: "This temperature does not relate to the airway." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "pain in the burned chest", why: "Pain is expected with partial-thickness burns." },
            { text: "worsening hoarseness", why: "Increasing hoarseness shows the swelling around the vocal cords is growing." },
            { text: "a full-thickness hand burn", why: "A hand burn does not affect the airway." },
            { text: "a history of COPD", why: "COPD adds risk but is not a sign of new airway swelling." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Wound protection and safety before burn transfer",
        cjmm: "generate",
        difficulty: 3,
        stem: "The client is intubated at 0330. The nurse plans care until the transport team arrives. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Clean, dry dressings protect the wounds and limit heat loss during transfer. Rings come off before swelling traps them and cuts off blood flow. A warm room prevents hypothermia from the open burns. Her last tetanus booster was 12 years ago, so a booster is due for a burn wound. Ice deepens tissue injury and cools the body. Blisters are left for the burn team. Topical agents wait for the burn team.",
        refs: ["A tetanus toxoid booster is given for a burn wound when more than 5 years have passed since the last dose."],
        sources: [SRC.isbi, SRC.tetanus, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Apply ice packs to the chest burns", why: "Ice deepens tissue injury and adds to heat loss." },
        { text: "Cover burns with clean dry dressings", why: "Dry dressings protect the wounds and reduce heat loss for transfer." },
        { text: "Break the blisters to clean the wounds", why: "Blister care is left to the burn team and opening them adds infection risk." },
        { text: "Remove rings from both hands", why: "Swelling can trap rings and cut off blood flow to the fingers." },
        { text: "Apply a thick ointment before transfer", why: "Topical agents are held until the burn team assesses the wound depth." },
        { text: "Keep the room warm", why: "Burned skin loses heat, so a warm room prevents hypothermia." },
        { text: "Give a tetanus booster as prescribed", why: "More than 5 years have passed since her last dose, and burns are tetanus prone." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Burn fluid resuscitation rate",
        cjmm: "action",
        difficulty: 4,
        stem: "The burn center prescribes lactated Ringer's at 2 mL/kg for each percent of body surface burned for the first 24 hours. Half is due in the first 8 hours after the burn. She weighs 70 kg with 27% burned. No IV fluid was given before 0400, 2 hours after the burn. At what rate should the nurse set the pump for the rest of the first 8 hours?",
        rationale:
          "The 24-hour total is 2 mL times 70 kg times 27%, which is 3780 mL. Half of that, 1890 mL, is due by 8 hours after the burn. The burn happened at 0200 and fluid starts at 0400, so 6 hours remain. The rate is 1890 mL over 6 hours, or 315 mL/hour. The rate is then adjusted to urine output.",
        calc: {
          expr: "2 * 70 * 27 / 2 / (8 - 2)",
          answer: 315,
          unit: "mL/hour",
          round: 0,
          steps: ["2 * 70 * 27 = 3780", "3780 / 2 = 1890", "8 - 2 = 6", "1890 / 6 = 315"],
        },
        sources: [SRC.abaFluid, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "236 mL/hour", why: "This spreads 1890 mL over 8 hours and ignores the 2 hours already lost." },
        { text: "315 mL/hour", why: "1890 mL over the 6 remaining hours is 315 mL/hour." },
        { text: "473 mL/hour", why: "This gives the full 3780 mL over 8 hours, doubling the first-half volume." },
        { text: "630 mL/hour", why: "This gives the full 3780 mL over 6 hours, which is twice the correct rate." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Supporting a family member during burn transfer",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "The client's son arrives at 0430 and is tearful. The nurse explains the breathing tube and the transfer and stays with him for several minutes. Which two statements by the son show the support has helped? Select two.",
        rationale:
          "Bringing her medication list to the burn center shows he understands the plan and has a useful role. Knowing the tube protects her breathing shows he understands a frightening sight. Waiting at the rural hospital shows he missed the transfer plan. Expecting her home in a day or two is not realistic for burns of this size. Self-blame and helplessness show continued distress.",
        sources: [SRC.family, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"This is my fault for not checking her smoke alarm.\"", why: "Self-blame shows he is still in distress and needs more support." },
        { text: "\"I will bring her medicine list to the burn unit.\"", why: "A concrete task shows he understands the plan and can help." },
        { text: "\"I will wait here in the lobby until she wakes up.\"", why: "She is being transferred, so he has not understood the plan." },
        { text: "\"She should be back home with me in a day or two.\"", why: "This expectation is not realistic for burns over 27% of her body." },
        { text: "\"The tube protects her breathing on the trip.\"", why: "He understands why the tube is needed, which lowers his fear." },
        { text: "\"There is nothing I can do for her now.\"", why: "Helplessness shows the support has not yet helped him cope." },
      ],
      correct: [1, 4],
    },
  ],
};
