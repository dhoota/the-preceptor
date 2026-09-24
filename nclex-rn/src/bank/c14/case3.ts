import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c14-3";

/** Case 3. Emergency department, then home. Breastfeeding woman 11 days after a cesarean birth. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Calf Pain in the Weeks After Birth",
  intro:
    "A 31-year-old woman comes to the emergency department 11 days after a cesarean birth. Her left calf has been painful and swollen for 2 days. She is breastfeeding her son, who is at home with her partner.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 2, para 2. Cesarean birth at 39 weeks after labor stopped progressing.",
        "BMI 34. Weight 80 kg.",
        "No previous blood clots. No known bleeding disorder.",
        "Takes a prenatal vitamin, and ibuprofen 400 mg as needed for incision pain.",
        "Used a combined estrogen and progestin pill before this pregnancy.",
        "Breastfeeds every 2 to 3 hours.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1330"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)"],
          ["Heart rate", "94/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "118/74 mmHg"],
          ["SpO2", "98% on room air"],
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
        topic: "Cues of a venous clot after birth",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1340 the nurse examines both legs and completes a postpartum check. Click to highlight the findings in the note below that need follow-up for a possible problem in the leg veins.",
        rationale:
          "A left calf 3 cm larger than the right, with warmth, tenderness and ankle edema, points to a deep vein thrombosis. Swelling on one side is the key cue. Clear lungs with no shortness of breath are reassuring. The incision, lochia, breasts and voiding are expected on day 11 after a cesarean birth.",
        sources: [SRC.acogVte, SRC.lowdermilk],
      }),
      kind: "highlight",
      passage:
        "[[Lungs clear with no shortness of breath]]. [[Left calf 3 cm larger around than the right]]. [[Incision dry with edges closed]]. [[Left calf warm to the touch]]. [[Voiding without pain or burning]]. [[Tender along the back of the left calf]]. [[Scant yellowish-white lochia]]. [[Breasts soft with no redness]]. [[Pitting edema 1+ at the left ankle]].",
      spans: [
        { text: "Lungs clear with no shortness of breath", why: "Clear lungs and easy breathing give no sign of a clot in the lungs." },
        { text: "Left calf 3 cm larger around than the right", why: "Swelling of one calf is a key sign of a blocked deep vein." },
        { text: "Incision dry with edges closed", why: "A dry, closed incision is expected on day 11." },
        { text: "Left calf warm to the touch", why: "Warmth over one calf fits inflammation around a venous clot." },
        { text: "Voiding without pain or burning", why: "Normal voiding needs no follow-up." },
        { text: "Tender along the back of the left calf", why: "Tenderness along the deep veins fits a clot in those veins." },
        { text: "Scant yellowish-white lochia", why: "Scant, pale lochia is expected in the second week after birth." },
        { text: "Breasts soft with no redness", why: "Soft breasts without redness show no engorgement or mastitis." },
        { text: "Pitting edema 1+ at the left ankle", why: "Edema on one side reflects blocked venous return from that leg." },
      ],
      correct: [1, 3, 5, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Linking clot findings to birth-related risk",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The skin over the left calf is its usual color. The nurse reviews the history and the assessment while a venous ultrasound is arranged. Complete the following sentence by dragging a choice to each blank.",
        rationale:
          "Swelling of one calf with warmth, tenderness and ankle edema fits a deep vein thrombosis. Pregnancy and the weeks after birth are a time of raised clotting. A cesarean birth adds surgery and reduced mobility to that risk. The skin is not red and the temperature is 37.1°C, so cellulitis is unlikely. The history gives no injury to suggest a strain.",
        sources: [SRC.acogVte, SRC.lowdermilk],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The findings are most consistent with {0}, and the client's strongest risk factor is {1}.",
      targets: ["Condition", "Risk factor"],
      tokens: [
        { text: "cellulitis of the calf", why: "Cellulitis causes spreading redness, often with fever. The skin is not red and the temperature is 37.1°C." },
        { text: "the recent cesarean birth", why: "Surgery on top of the clotting changes after birth raises the risk of a venous clot." },
        { text: "a calf muscle strain", why: "A strain follows an injury. The history gives no injury." },
        { text: "breastfeeding every 2 to 3 hours", why: "Breastfeeding does not raise the risk of a venous clot." },
        { text: "deep vein thrombosis", why: "One swollen, warm, tender calf after birth fits a clot in a deep vein." },
        { text: "her age of 31 years", why: "An age of 31 adds little clot risk on its own." },
      ],
      correct: [4, 1],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Most dangerous complication of a leg clot",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The ultrasound shows a clot in the left popliteal vein. The client says, \"I need to get home soon so my son can eat.\" Which complication should the nurse monitor for most closely?",
        rationale:
          "A clot in the popliteal vein is a proximal clot. Part of it can break off and lodge in the lungs. A pulmonary embolism can kill quickly, so the nurse watches for sudden shortness of breath, chest pain, a rising heart rate and a falling SpO2. The other problems are less likely from the findings or less dangerous right now.",
        sources: [SRC.acogVte, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Postpartum hemorrhage", why: "Lochia is scant 11 days after birth. Heavy bleeding is not the leading threat." },
        { text: "Mastitis from missed feeds", why: "Mastitis develops over days and is not the immediate threat. The breasts are soft." },
        { text: "Separation of the incision", why: "The incision is dry with closed edges." },
        { text: "Pulmonary embolism", why: "A clot in the popliteal vein can break off and lodge in the lungs." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Home safety during anticoagulation",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "The primary health care provider prescribes enoxaparin injections at home for 3 months. The client will inject herself. Which safety measures should the nurse include in the teaching plan? Select all that apply.",
        rationale:
          "Enoxaparin raises the risk of bleeding. A soft toothbrush and an electric razor limit gum and skin bleeding. A fall or a blow to the head can cause hidden bleeding and needs prompt review. Used syringes go straight into a sharps container. Recapping risks a needlestick. Ibuprofen adds to bleeding risk. Rubbing the site causes bruising.",
        sources: [SRC.lovenox, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Recap the needle before disposal", why: "Recapping is a common cause of needlestick injury." },
        { text: "Use a soft-bristled toothbrush", why: "A soft brush limits gum bleeding during anticoagulation." },
        { text: "Take ibuprofen for calf pain", why: "Ibuprofen affects platelets and adds to the bleeding risk." },
        { text: "Place used syringes in a sharps container", why: "A puncture-proof container prevents needlesticks at home." },
        { text: "Rub the site after each injection", why: "Rubbing the site raises bruising after enoxaparin." },
        { text: "Shave with an electric razor", why: "An electric razor limits skin cuts and bleeding." },
        { text: "Report any fall or blow to the head", why: "A fall or head injury can cause hidden bleeding that needs assessment." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based enoxaparin treatment volume",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 1,
        stem: "The prescription is enoxaparin 1 mg/kg subcutaneously every 12 hours. The client weighs 80 kg. The pharmacy supplies a graduated prefilled syringe of 100 mg/mL. How many mL should the nurse give for each dose?",
        rationale:
          "The dose is 1 mg/kg for 80 kg, which is 80 mg. The syringe holds 100 mg/mL. Dividing 80 mg by 100 mg/mL gives 0.8 mL. The nurse checks the dose against the recorded weight before giving it. The injection goes into the abdominal wall without rubbing the site.",
        calc: { expr: "1 * 80 / 100", answer: 0.8, unit: "mL", round: 1, steps: ["1 * 80 = 80", "80 / 100 = 0.8"] },
        sources: [SRC.lovenox],
      }),
      kind: "mc",
      options: [
        { text: "0.4 mL", why: "0.4 mL gives half of the prescribed 80 mg dose." },
        { text: "0.8 mL", why: "80 mg divided by 100 mg/mL is 0.8 mL." },
        { text: "1.2 mL", why: "1.2 mL gives more than the 80 mg dose and raises bleeding risk." },
        { text: "1.6 mL", why: "1.6 mL gives twice the prescribed dose." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Health choices after a clot in the weeks after birth",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Before discharge the nurse evaluates what the client understands about her health over the coming months. For each statement, specify whether it shows understanding or needs further teaching.",
        rationale:
          "Enoxaparin does not pass into breast milk in amounts that affect the infant, so breastfeeding continues. Combined estrogen contraception is unsafe with an acute venous clot. A method without estrogen is needed. The full course of anticoagulation continues after the leg feels better. Walking breaks on long trips reduce venous stasis. Follow-up decides how long treatment lasts.",
        sources: [SRC.acogVte, SRC.mec],
        canada: "",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I can keep breastfeeding while I use these injections.\"", correct: [0], why: "Enoxaparin is compatible with breastfeeding." },
        { text: "\"I will restart the estrogen pill I used before.\"", correct: [1], why: "Estrogen raises clot risk and is unsafe with an acute venous clot." },
        { text: "\"I will ask about birth control with no estrogen.\"", correct: [0], why: "Progestin-only and nonhormonal methods are options after a clot." },
        { text: "\"I will stop the shots once my leg feels normal.\"", correct: [1], why: "Treatment continues for the full prescribed course after symptoms settle." },
        { text: "\"I will stop and walk around on long car trips.\"", correct: [0], why: "Moving the legs on long trips lowers venous stasis." },
        { text: "\"I will keep my visit to review how long to treat.\"", correct: [0], why: "Follow-up guides the length of anticoagulation." },
      ],
    },
  ],
};
