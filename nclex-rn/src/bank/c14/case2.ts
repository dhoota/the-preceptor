import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c14-2";

/** Case 2. Surgical unit. Older woman on day 1 after a leg artery bypass. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Recovery on the Vascular Surgery Unit",
  intro:
    "A 71-year-old woman is on the surgical unit after a right femoral to popliteal artery bypass with a synthetic graft yesterday afternoon. She had rest pain in the right foot and a toe ulcer that would not heal. She has type 2 diabetes and smokes.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Peripheral artery disease with rest pain in the right foot for 2 months.",
        "Ulcer on the right great toe for 6 weeks.",
        "Type 2 diabetes for 15 years. Last A1C 8.9%.",
        "Smokes 1 pack a day for 50 years.",
        "BMI 33.",
        "Before surgery the right pedal pulses were absent by palpation and faint by Doppler.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Aspirin 81 mg by mouth daily.",
        "Atorvastatin 80 mg by mouth daily.",
        "Insulin lispro correction scale before meals.",
        "Oxycodone 5 mg by mouth every 4 hours as needed for pain.",
        "Right pedal pulse check by Doppler every 2 hours.",
        "Up to chair with assistance on day 1.",
        "Smoking cessation consult.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 1, 0800"],
        rows: [
          ["Temperature", "37.3°C (99.1°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "142/78 mmHg"],
          ["SpO2", "95% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "BCC",
        topic: "Basic care findings on day 1 after leg bypass",
        cjmm: "recognize",
        process: "nursing-process",
        difficulty: 2,
        stem: "The nurse reviews the client's findings at 1000 on day 1. For each finding, specify whether it is expected or requires follow-up.",
        rationale:
          "Sitting for 2 hours with the knees bent can compress the new graft and slow flow. A bladder volume of 650 mL with no void for 7 hours shows urinary retention. A glucose of 262 mg/dL (14.5 mmol/L) raises infection risk and needs the correction scale. Mild pain after oxycodone, a partial appetite and no bowel movement for 2 days are common on day 1. A warm foot with a Doppler pulse shows the graft is open.",
        sources: [SRC.brunner, SRC.pad, { body: "Malcolm J, Halperin I, Miller DB, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "In-Hospital Management of Diabetes. Canadian Journal of Diabetes 42(Suppl 1):S115", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16" }],
        canada: "Canadian labs report glucose in mmol/L only, so this result reads 14.5 mmol/L. Diabetes Canada sets a random glucose target under 10.0 mmol/L for most noncritically ill inpatients.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected", "Requires follow-up"],
      rows: [
        { text: "Groin incision pain 3 of 10 after oxycodone", correct: [0], why: "Mild pain that responds to the prescribed analgesic is expected on day 1." },
        { text: "Sitting in the chair with knees bent for 2 hours", correct: [1], why: "Long periods with the knees bent can compress the graft and slow flow." },
        { text: "Ate half of her breakfast", correct: [0], why: "A reduced appetite is common on the first day after surgery." },
        { text: "Bladder scan 650 mL, no void for 7 hours", correct: [1], why: "A full bladder with no void for 7 hours shows urinary retention." },
        { text: "Right foot warm with a Doppler pedal pulse", correct: [0], why: "A warm foot with a pulse signal shows blood is flowing through the graft." },
        { text: "Blood glucose 262 mg/dL (14.5 mmol/L)", correct: [1], why: "High glucose impairs healing and raises infection risk. It needs correction." },
        { text: "Last bowel movement 2 days ago", correct: [0], why: "Surgery, opioids and less activity slow the bowel for a few days." },
      ],
    },
    {
      ...meta(`${ID}-2`, {
        need: "SIPC",
        topic: "Infection risk at a groin incision",
        cjmm: "analyze",
        difficulty: 3,
        stem: "At 1100 the nurse inspects the right groin incision. The skin fold over it is moist. The incision edges are closed with no drainage. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A groin incision under a moist skin fold lies in a warm, damp area with many skin bacteria. A glucose of 262 mg/dL (14.5 mmol/L) impairs white cell function and healing. Together they raise the risk of surgical site infection. The perioperative glucose goal is below 200 mg/dL (11.1 mmol/L). The foot is warm with a Doppler pulse, so the graft is open. Nothing suggests bleeding or low glucose.",
        refs: ["The perioperative blood glucose goal is less than 200 mg/dL (11.1 mmol/L)."],
        sources: [SRC.ssi, SRC.brunner, { body: "Malcolm J, Halperin I, Miller DB, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "In-Hospital Management of Diabetes. Canadian Journal of Diabetes 42(Suppl 1):S115", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16" }],
        canada: "Diabetes Canada targets a glucose of 5.0 to 10.0 mmol/L around minor and moderate surgery. The glucose of 14.5 mmol/L is above the Canadian and US targets, so the key stands.",
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "graft occlusion", why: "The foot is warm with a Doppler pulse. The incision findings point to infection, not to loss of graft flow." },
            { text: "hypoglycemia", why: "The glucose is 262 mg/dL, well above the normal range." },
            { text: "surgical site infection", why: "High glucose and a moist skin fold over the incision both favor infection." },
            { text: "incision hemorrhage", why: "The incision is closed with no drainage, so there is no sign of bleeding." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a temperature of 37.3°C (99.1°F)", why: "A mild rise on day 1 is common and does not point to infection yet." },
            { text: "a glucose of 262 mg/dL (14.5 mmol/L)", why: "High glucose impairs white cell function and wound healing." },
            { text: "closed incision edges", why: "Closed edges are expected and lower the infection risk." },
            { text: "a pedal pulse by Doppler", why: "A pulse signal shows graft flow. It is not an infection risk." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "incision pain of 3 of 10", why: "Mild pain is expected on day 1 and does not raise infection risk." },
            { text: "a BP of 142/78 mmHg", why: "This BP does not change the infection risk at the incision." },
            { text: "a warm right foot", why: "A warm foot shows good flow and does not raise infection risk." },
            { text: "a moist skin fold over the groin", why: "Moisture in a skin fold lets bacteria grow near the incision." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Sudden change in the leg after bypass",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1600 the client reports sudden severe pain and numbness in the right foot. The foot is pale and cool. The nurse cannot hear the right pedal pulse with the Doppler. It was heard at 1400. Which problem should the nurse address first?",
        rationale:
          "A graft that was open at 1400 has lost its Doppler signal. Sudden pain, numbness, pallor and coolness show the limb has lost arterial flow. Muscle and nerve begin to die within hours without flow, so this problem comes first. Infection and venous clots do not remove an arterial pulse. Incision pain does not make the foot pale.",
        sources: [SRC.pad, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Acute occlusion of the graft", why: "Sudden pain, pallor, coolness and a lost Doppler signal point to a blocked graft." },
        { text: "Surgical site infection", why: "Infection develops over days with redness and drainage. It does not stop a pulse." },
        { text: "Uncontrolled incision pain", why: "Incision pain does not make the foot pale or remove the pulse." },
        { text: "A clot in a calf vein", why: "A venous clot causes swelling and warmth. It does not cause a pale, pulseless foot." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Positioning an ischemic leg",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The surgeon plans to take the client back to the operating room. Complete the following sentence by dragging a choice to each blank.",
        rationale:
          "An ischemic limb depends on every bit of arterial flow. Keeping it level or slightly lowered uses gravity to help that flow. A light blanket conserves warmth. Heat and cold both harm ischemic tissue. Heat can burn skin that has lost sensation, and cold narrows vessels. Raising the leg or bending the knee reduces flow further.",
        sources: [SRC.brunner, SRC.pad],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "While surgery is arranged, the nurse keeps the right leg {0} and {1}.",
      targets: ["Position", "Comfort measure"],
      tokens: [
        { text: "raised on two pillows", why: "Raising the leg works against arterial flow and worsens ischemia." },
        { text: "level or slightly lowered", why: "A level or slightly lowered leg lets gravity help arterial flow to the foot." },
        { text: "on a heating pad", why: "Ischemic skin senses heat poorly, so a heating pad can burn it." },
        { text: "bent at the knee over a pillow", why: "A bent knee can compress the graft and further slow flow." },
        { text: "under a light blanket", why: "A light blanket keeps the foot warm without a direct heat source." },
        { text: "on an ice pack", why: "Cold narrows vessels and further cuts flow to the foot." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to fear of limb loss",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "While she waits for transfer to the operating room, the client grips the nurse's hand. She says, \"My sister lost her leg this way. I know I'm going to lose mine.\" Which response by the nurse is most therapeutic?",
        rationale:
          "Reflecting the client's fear shows the nurse heard her and invites her to say more. It does not promise an outcome the nurse cannot know. Reassurance about the surgeon dismisses the fear. Saying her case is different makes a claim the nurse cannot support. Changing the subject closes the conversation.",
        sources: [SRC.varcarolis],
      }),
      kind: "mc",
      options: [
        { text: "\"Your surgeon has done many of these, so try not to worry.\"", why: "This is false reassurance. It dismisses the fear instead of exploring it." },
        { text: "\"Your situation is not the same as your sister's.\"", why: "The nurse cannot know this, and it discounts what the client feels." },
        { text: "\"Let's focus on getting you ready for surgery now.\"", why: "Changing the subject closes the conversation about her fear." },
        { text: "\"You're afraid this will end the way it did for her.\"", why: "Reflecting her feeling shows she was heard and invites her to say more." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Evaluating teaching after leg bypass",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "The graft is reopened and the client recovers. On day 5 the nurse evaluates her discharge teaching. Which statements show understanding? Select all that apply.",
        rationale:
          "Daily foot checks catch injuries early in a foot with poor sensation and flow. Quitting smoking with support protects the graft and the other leg. A walking program improves walking distance. Shoes that fit prevent pressure wounds. Crossing the legs compresses vessels. Hot soaks can burn skin with poor sensation. Cutting down is not the same as quitting.",
        sources: [SRC.pad, SRC.tobacco],
      }),
      kind: "sata",
      options: [
        { text: "\"I will cross my legs only for short periods.\"", why: "Crossing the legs compresses vessels and the graft. It should be avoided." },
        { text: "\"I will look at both feet every day with a mirror.\"", why: "Daily checks find injuries early in feet with poor sensation." },
        { text: "\"I will soak my feet in hot water each night.\"", why: "Hot water can burn skin that senses heat poorly." },
        { text: "\"I will use nicotine patches and quit smoking.\"", why: "Quitting with support protects the graft and slows disease in the other leg." },
        { text: "\"I will cut back to five cigarettes a day.\"", why: "Any smoking keeps harming the vessels. The goal is to quit." },
        { text: "\"I will walk a little farther each day as told.\"", why: "A structured walking program improves walking distance in artery disease." },
        { text: "\"I will wear shoes that fit well, even indoors.\"", why: "Well-fitting shoes prevent pressure wounds and injuries to the feet." },
      ],
      correct: [1, 3, 5, 6],
    },
  ],
};
