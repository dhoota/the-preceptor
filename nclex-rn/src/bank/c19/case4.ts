import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c19-4";

/** Case 4. Surgical unit. Young adult with a chest tube after a collapsed lung at rest. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Sudden Chest Pain at Rest",
  intro:
    "A 22-year-old man comes to the emergency department at 0930 with sudden right chest pain and shortness of breath that began at rest. A chest x-ray shows a large right pneumothorax. At 1100 a right chest tube is placed and connected to a wet suction drainage unit. He is admitted to the surgical unit.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Height 188 cm. Weight 64 kg.",
        "Smokes 20 cigarettes a day for 6 years.",
        "No known lung disease. No daily medications.",
        "Works as a warehouse clerk. Plans a scuba diving trip next year.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Checking a chest drainage system",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse assesses the client and the drainage system at 1400. For each finding, specify whether it is expected or needs follow-up.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "1400. Suction control chamber filled to 20 cmH2O. Suction on.",
              "Water level in the water seal chamber rises and falls with breathing.",
              "Bubbling in the water seal chamber when he coughs.",
              "Gentle, steady bubbling in the suction control chamber.",
              "Crackling under the skin spreading from the insertion site toward the neck.",
              "A loop of tubing hangs below the bed and is filled with fluid.",
              "SpO2 89% on room air, down from 97% at 1100.",
              "Pain 6 of 10 at the tube site. States he feels nervous.",
            ].join("\n"),
          },
        ],
        rationale:
          "A rise and fall in the water seal chamber shows the tube connects to the pleural space. Air leaving a collapsed lung bubbles through the water seal when he coughs. Gentle bubbling in a wet suction chamber shows suction is working. Crackling that spreads toward the neck shows air escaping into the tissues. A fluid-filled dependent loop slows drainage. A fall in SpO2 from 97% to 89% shows worsening gas exchange.",
        sources: [SRC.hinkle, SRC.harding],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected", "Needs follow-up"],
      rows: [
        { text: "Water level in the water seal chamber rises and falls with breathing", correct: [0], why: "Tidaling shows the tube is open to the pleural space." },
        { text: "Bubbling in the water seal chamber when he coughs", correct: [0], why: "Air from the pleural space escapes on coughing while the lung re-expands." },
        { text: "Gentle, steady bubbling in the suction control chamber", correct: [0], why: "Gentle bubbling shows the wet suction is working as set." },
        { text: "Crackling under the skin spreading toward the neck", correct: [1], why: "Spreading crackling shows air leaking into the tissues." },
        { text: "Fluid-filled loop of tubing below the bed", correct: [1], why: "A dependent loop full of fluid blocks drainage from the chest." },
        { text: "SpO2 89%, down from 97% at 1100", correct: [1], why: "A falling SpO2 shows gas exchange is getting worse." },
      ],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Meaning of chest tube complications",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse considers what the abnormal 1400 findings mean for the client. Complete the following sentences by choosing from the lists of options.",
        rationale:
          "Crackling under the skin that spreads from the insertion site toward the neck is subcutaneous emphysema. It means air is leaking into the tissues. A dependent loop filled with fluid adds back pressure in the tubing. Air and fluid then cannot leave the chest freely. Trapped air can let the lung collapse again. The fall in SpO2 fits that risk.",
        sources: [SRC.hinkle, SRC.harding],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The spreading crackling under the skin points to {0}. The fluid-filled loop of tubing {1}.",
      blanks: [
        {
          options: [
            { text: "infection at the insertion site", why: "Infection causes redness and drainage, not crackling under the skin." },
            { text: "bleeding under the skin", why: "Bleeding under the skin causes bruising and swelling, not crackling." },
            { text: "air leaking into the tissues", why: "Crackling under the skin is air that has escaped into the tissues." },
            { text: "an allergy to the dressing", why: "An allergy causes a rash under the dressing, not spreading crackling." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "protects the water seal from air entry", why: "The water seal works without a loop. A full loop adds back pressure." },
            { text: "blocks air and fluid from leaving the chest", why: "Fluid in a dependent loop creates back pressure that slows drainage." },
            { text: "is expected when suction is running", why: "Tubing should run straight without dependent loops, with or without suction." },
            { text: "prevents fluid from flowing backward", why: "The water seal prevents backflow. A loop does not add protection." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Choosing the first problem to address",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "The nurse reviews all of the 1400 findings for the client. Which problem should the nurse address first?",
        rationale:
          "The SpO2 fell from 97% to 89%. Air is leaking into the tissues and a fluid-filled loop blocks drainage. These findings threaten oxygenation, so gas exchange comes first. Pain of 6 of 10 and his nervous feelings need care after the airway and breathing problem. Withdrawal from 20 cigarettes a day may come later, but it is not an immediate threat.",
        sources: [SRC.hinkle],
      }),
      kind: "mc",
      options: [
        { text: "Acute pain at the tube site", why: "Pain of 6 of 10 needs care, but breathing comes first." },
        { text: "Anxiety about the hospital stay", why: "His nervous feelings matter, but they do not threaten oxygenation." },
        { text: "Risk for nicotine withdrawal", why: "Withdrawal is a later risk and not an immediate threat to life." },
        { text: "Impaired gas exchange", why: "An SpO2 of 89% with a drainage problem threatens oxygenation." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort and mobility with a chest drain",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The tubing is straightened and the primary health care provider is notified. By 1500 the SpO2 is 95%. The nurse plans comfort and mobility care for the next day. Which actions should the nurse include? Select all that apply.",
        rationale:
          "The unit stays below chest level so fluid cannot flow back into the chest. A pillow held to the chest splints the site during coughing. Analgesia before deep breathing lets him expand the lung fully. Walking helps the lung re-expand and lowers clot risk. Clamping the tube can trap air and cause a tension pneumothorax. Lifting the unit above the chest risks backflow. Routine stripping creates high negative pressure and can harm tissue.",
        sources: [SRC.hinkle, SRC.harding],
      }),
      kind: "sata",
      options: [
        { text: "Clamp the chest tube while he walks", why: "Clamping can trap air in the chest and cause a tension pneumothorax." },
        { text: "Keep the unit below chest level", why: "A low unit stops drainage from flowing back into the chest." },
        { text: "Hold a pillow to the chest when he coughs", why: "Splinting the site lowers pain during coughing." },
        { text: "Hold the drainage unit at shoulder height for transfers", why: "Raising the unit above the chest lets fluid flow back into the chest." },
        { text: "Give analgesia before deep breathing exercises", why: "Pain control lets him take full breaths that re-expand the lung." },
        { text: "Strip the tubing every hour to clear clots", why: "Routine stripping creates high negative pressure and can damage tissue." },
        { text: "Walk with him in the hallway", why: "Walking helps the lung re-expand and lowers the risk of clots." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Applying a nicotine patch",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "On day 2 the client is irritable and craves a cigarette. He has a prescription for a nicotine patch 21 mg every 24 hours. The first patch went on yesterday at 0900. At 0900 today the nurse applies the second patch. Which action should the nurse take?",
        rationale:
          "The patch goes on dry, clean, hairless skin, and the site changes each day. The old patch comes off after 24 hours because it irritates the skin and loses strength. Cutting a patch is not allowed by the label. Reusing yesterday's site raises skin irritation.",
        sources: [SRC.nicotine, SRC.smoking],
      }),
      kind: "mc",
      options: [
        { text: "Cut the patch in half to lower the dose", why: "The label says not to cut the patch." },
        { text: "Place it on the site used yesterday", why: "Using the same site each day irritates the skin." },
        { text: "Apply it to hairless skin at a new site", why: "Clean, hairless skin at a new site gives steady absorption and less irritation." },
        { text: "Leave yesterday's patch on until evening", why: "A patch comes off after 24 hours. Keeping it on adds nicotine and irritation." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Preventing another lung collapse",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "The chest tube is removed on day 4. A chest x-ray shows the lung fully expanded. The nurse evaluates discharge teaching. Which three statements by the client show understanding? Select three.",
        rationale:
          "Smoking raises the risk that a pneumothorax returns. Setting a quit date is a first step in quitting. Diving is avoided after a pneumothorax unless he has surgery to prevent recurrence. Sudden chest pain or breathlessness can mean the lung has collapsed again. Flying waits until at least a week after an x-ray confirms the lung has healed. Shallow breathing does not protect the lung. A pneumothorax can come back after healing.",
        sources: [SRC.macduff, SRC.coker, SRC.smoking],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I will cancel my scuba diving trip.\"", why: "Diving is avoided after a pneumothorax unless surgery prevents recurrence." },
        { text: "\"I can take a flight the day after discharge.\"", why: "Flying waits at least a week after an x-ray confirms the lung has healed." },
        { text: "\"I will set a quit date for smoking.\"", why: "Quitting lowers the risk that the pneumothorax comes back." },
        { text: "\"Another collapse cannot happen once I heal.\"", why: "A pneumothorax can recur after the lung heals." },
        { text: "\"I will get help for sudden chest pain.\"", why: "Sudden chest pain can mean the lung has collapsed again." },
        { text: "\"I will keep my breathing shallow for a month.\"", why: "Shallow breathing does not protect the lung and can cause atelectasis." },
      ],
      correct: [0, 2, 4],
    },
  ],
};
