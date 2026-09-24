import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c05-4";

/** Case 4. Surgical unit. Older adult on day 2 after a below-knee amputation. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Day 2 After Leg Surgery",
  intro:
    "A 64-year-old man is on the surgical unit on day 2 after a left below-knee amputation. The amputation followed a foot ulcer that did not heal. He has type 2 diabetes and peripheral artery disease. He lives with his wife in a two-storey house.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Type 2 diabetes for 18 years. Peripheral artery disease.",
        "Smoked 1 pack a day for 40 years. Quit 1 year ago.",
        "Right foot: reduced sensation to monofilament testing.",
        "Worked as a carpenter until the surgery.",
      ].join("\n"),
    },
    {
      title: "Medications",
      text: [
        "Oxycodone 5 mg by mouth every 4 hours as needed for pain.",
        "Gabapentin 300 mg by mouth at bedtime.",
        "Insulin glargine 20 units subcutaneously at bedtime.",
        "Enoxaparin 40 mg subcutaneously daily.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 2 at 0800"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "134/78 mmHg"],
          ["SpO2", "96% on room air"],
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
        topic: "Care needs after a leg amputation",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1000 the nurse reads the night notes and a morning note written by a nursing student. Click to highlight the findings the nurse should address in the plan of care.",
        rationale:
          "Pillows under the residual limb and 4 hours in a chair keep the hip flexed and lead to contracture. Burning pain in the missing foot is phantom limb pain and needs treatment. Trying to stand on both legs at 0300 shows a high fall risk. Turning away from the limb can reflect a body image problem. A dry dressing, a warm right foot and good intake are expected.",
        sources: [SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Slept with two pillows under the left residual limb]]. [[Reports burning pain in the missing left foot, 6 of 10]]. [[Dressing dry with no drainage]]. [[Sat in the bedside chair for 4 hours after breakfast]]. [[Tried to stand on both legs when he woke at 0300]]. [[Right foot warm with intact skin]]. [[Ate all of his breakfast]]. [[Turned away when the dressing was changed]].",
      spans: [
        { text: "Slept with two pillows under the left residual limb", why: "A pillow under the limb holds the hip and knee flexed and promotes contracture." },
        { text: "Reports burning pain in the missing left foot, 6 of 10", why: "Phantom limb pain is real pain and needs treatment." },
        { text: "Dressing dry with no drainage", why: "A dry dressing with no drainage is expected on day 2." },
        { text: "Sat in the bedside chair for 4 hours after breakfast", why: "Long periods of sitting keep the hip flexed and promote contracture." },
        { text: "Tried to stand on both legs when he woke at 0300", why: "Forgetting the amputation on waking puts him at high risk for a fall." },
        { text: "Right foot warm with intact skin", why: "A warm foot with intact skin is a good finding." },
        { text: "Ate all of his breakfast", why: "Good intake supports wound healing." },
        { text: "Turned away when the dressing was changed", why: "Avoiding the sight of the limb can signal a problem with body image." },
      ],
      correct: [0, 1, 3, 4, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Sorting problems after an amputation",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse groups the findings into nursing problems. The client had taken oxycodone at 0200. He also says, \"My wife will not want to look at me now.\" For each finding, specify the problem it best supports.",
        rationale:
          "Hip and knee flexion on pillows or in a chair for 4 hours sets up contracture. Standing on the missing limb at 0300, an hour after oxycodone, sets up a fall. Turning away from the limb and fearing his wife's reaction reflect a disturbed body image. Naming each problem guides targeted care.",
        sources: [SRC.brunner, SRC.halter],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Risk for contracture", "Risk for falls", "Disturbed body image"],
      rows: [
        { text: "Pillows under the residual limb overnight", correct: [0], why: "Flexion of the hip and knee on pillows leads to contracture." },
        { text: "Tried to stand on both legs at 0300", correct: [1], why: "Standing on a missing limb on waking leads to falls." },
        { text: "Turned away during the dressing change", correct: [2], why: "Avoiding the limb shows difficulty accepting the change in his body." },
        { text: "Sat in the bedside chair for 4 hours", correct: [0], why: "Prolonged sitting keeps the hip flexed." },
        { text: "Says his wife will not want to look at him", correct: [2], why: "Fear of rejection by his partner reflects a disturbed body image." },
        { text: "Oxycodone taken 1 hour before he got up", correct: [1], why: "An opioid can cause drowsiness and unsteadiness, which raises fall risk." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "First problem to address after an amputation",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse has identified four problems for this client, who receives daily enoxaparin. Which problem should the nurse address first?",
        rationale:
          "Safety comes first. He tried to stand on the missing limb overnight after oxycodone. A fall could split the incision, and enoxaparin raises the risk of bleeding. Phantom pain needs prompt treatment. Contracture and body image need care but pose no immediate threat.",
        sources: [SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Disturbed body image", why: "Body image needs care, but it poses no immediate physical threat." },
        { text: "Phantom limb pain", why: "Pain of 6 of 10 needs treatment soon, but a fall is the greater immediate danger." },
        { text: "Risk for hip flexion contracture", why: "Contracture develops over days and can be prevented with positioning." },
        { text: "Risk for injury from a fall", why: "He already tried to stand on the missing limb. A fall on enoxaparin could open the incision and bleed." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Positioning and phantom pain after amputation",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse plans care to prevent contracture and to manage the burning pain in the missing foot. Which actions should the nurse include in the plan? Select all that apply.",
        rationale:
          "Lying prone, a straight knee and short sitting periods keep the hip and knee from tightening in flexion. Pillows under the residual limb do the opposite. Phantom limb pain is real and is treated with analgesia as part of a wider plan. Telling him it is not real dismisses his pain.",
        sources: [SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Rest the residual limb on a pillow during sleep", why: "Pillow support under the limb promotes hip and knee flexion contracture." },
        { text: "Place him prone for 30 minutes 3 times a day", why: "Lying prone stretches the hip flexors." },
        { text: "Tell him the pain is not real because the foot is gone", why: "Phantom pain is real. Dismissing it harms trust and delays treatment." },
        { text: "Keep the left knee straight when he lies or sits", why: "An extended knee prevents knee flexion contracture after a below-knee amputation." },
        { text: "Limit sitting in the chair to 1 hour at a time", why: "Shorter sitting periods reduce time in hip flexion." },
        { text: "Give the as-needed oxycodone for the burning pain", why: "Phantom pain responds to analgesia as part of a pain plan." },
      ],
      correct: [1, 3, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Supervising a new nurse after an amputation",
        cjmm: "action",
        difficulty: 2,
        stem: "On day 3 a newly hired nurse cares for the client under the supervision of the charge nurse. Which action by the new nurse requires the charge nurse to intervene?",
        rationale:
          "Pillow support under the residual limb after the first day promotes hip and knee flexion contracture. The charge nurse corrects it and reviews positioning with the new nurse. A figure-eight wrap, items within reach and checks of the right foot are sound care.",
        sources: [SRC.brunner, SRC.delegation],
      }),
      kind: "mc",
      options: [
        { text: "Wraps the residual limb in a figure-eight pattern", why: "A figure-eight wrap shapes the limb and controls swelling." },
        { text: "Props the residual limb on a pillow while he rests", why: "A pillow under the limb promotes flexion contracture, so the charge nurse steps in." },
        { text: "Places the call light and urinal on his right side", why: "Keeping items within reach lowers the urge to get up alone." },
        { text: "Checks the right foot for new sores or redness", why: "Daily foot checks protect the remaining foot." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Protecting the remaining foot",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Before transfer to an inpatient rehabilitation facility, the nurse reviews care of the right foot. Which statements by the client show understanding? Select two.",
        rationale:
          "His right foot has reduced sensation on monofilament testing, and he has peripheral artery disease. Daily inspection with a mirror and wearing shoes indoors protect it. Hot soaks and heating pads can burn skin he cannot feel. Corns need a podiatrist. Lotion goes on the tops and soles, not between the toes.",
        sources: [SRC.adaFoot, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will look at my right foot every day, using a mirror.\"", why: "Daily inspection finds sores early when sensation is reduced." },
        { text: "\"I will soak my foot in hot water each night.\"", why: "Soaking softens skin, and reduced sensation raises the risk of a burn." },
        { text: "\"I will wear shoes and socks, even inside the house.\"", why: "Footwear protects a foot that cannot feel injuries." },
        { text: "\"I will trim my own corns with a razor blade.\"", why: "Cutting corns at home can cause wounds. A podiatrist should treat them." },
        { text: "\"I will warm my cold foot with a heating pad.\"", why: "Reduced sensation means he may not feel a burn." },
        { text: "\"I will rub lotion between my toes each day.\"", why: "Moisture between the toes can cause skin breakdown and infection." },
      ],
      correct: [0, 2],
    },
  ],
};
