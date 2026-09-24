import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c03-5";

/** Case 5. Orthopedic surgical unit. Sudden breathlessness after hip arthroplasty. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Sudden Breathlessness on the Orthopedic Unit",
  intro:
    "A 68-year-old woman is on day 3 after a left total hip arthroplasty through a posterior approach. At 1030 she calls for help and says she suddenly cannot catch her breath. She had just walked in the hallway with a walker and a physical therapist.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Obesity. Hypertension.",
        "Takes oral estrogen for menopause symptoms.",
        "Enoxaparin 40 mg subcutaneously daily since day 1 after surgery.",
        "Hip precautions for a posterior approach are in place.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0800", "1030"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)", "37.4°C (99.3°F)"],
          ["Heart rate", "88/minute", "124/minute"],
          ["Respiratory rate", "18/minute", "30/minute"],
          ["BP", "132/78 mmHg", "108/70 mmHg"],
          ["SpO2", "96% on room air", "87% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Cues of a clot after hip surgery",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reaches the bedside at 1035, raises the head of the bed and examines the client. Which findings from this examination need follow-up? Click to highlight them.",
        rationale:
          "Sharp chest pain that worsens on breathing in, a sense of doom, and restlessness with sweating fit a sudden drop in oxygen delivery. A swollen, tender left calf on day 3 after hip surgery points to a deep vein clot as the source. A dry dressing, clear lungs, strong pedal pulses and correct leg alignment are expected.",
        sources: [SRC.escPe, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Sharp right-sided chest pain that worsens on inspiration]]. [[Left hip dressing dry and intact]]. [[States 'Something is wrong, I feel like I am going to die']]. [[Lungs clear with equal air entry]]. [[Restless and sweating]]. [[Pedal pulses 2+ in both feet]]. [[Left calf swollen and tender]]. [[Left leg in neutral alignment on an abduction pillow]].",
      spans: [
        { text: "Sharp right-sided chest pain that worsens on inspiration", why: "Pleuritic chest pain can come from a clot that blocks lung blood flow." },
        { text: "Left hip dressing dry and intact", why: "A dry, intact dressing is expected on day 3." },
        { text: "States 'Something is wrong, I feel like I am going to die'", why: "A sudden sense of doom often goes with hypoxemia and shock." },
        { text: "Lungs clear with equal air entry", why: "Clear lungs are expected and do not rule out a clot." },
        { text: "Restless and sweating", why: "Restlessness and sweating reflect hypoxemia and a stress response." },
        { text: "Pedal pulses 2+ in both feet", why: "Normal pedal pulses show intact arterial flow." },
        { text: "Left calf swollen and tender", why: "A swollen, tender calf suggests a deep vein clot that can travel to the lungs." },
        { text: "Left leg in neutral alignment on an abduction pillow", why: "Neutral alignment with an abduction pillow follows hip precautions." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Linking cues to pulmonary embolism",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse compares the 0800 and 1030 vital signs with the history and the bedside examination. For each finding, specify whether it supports pulmonary embolism or does not support pulmonary embolism.",
        rationale:
          "Sudden breathlessness on walking, an SpO2 that fell to 87%, a heart rate of 124/minute and a swollen left calf fit a clot that has moved to the lungs. Recent hip surgery and oral estrogen raise the risk of clotting. A temperature of 37.4°C, strong pedal pulses and a dry dressing do not point toward a clot.",
        sources: [SRC.escPe, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports pulmonary embolism", "Does not support pulmonary embolism"],
      rows: [
        { text: "Sudden breathlessness after walking", correct: [0], why: "Movement can dislodge a leg clot, and sudden dyspnea is the most common symptom." },
        { text: "SpO2 87% on room air, down from 96%", correct: [0], why: "A clot in the pulmonary arteries mismatches ventilation and perfusion and lowers oxygenation." },
        { text: "Temperature 37.4°C (99.3°F)", correct: [1], why: "This temperature is near normal and does not point to a clot." },
        { text: "Heart rate 124/minute", correct: [0], why: "Tachycardia is a common sign as the heart tries to keep output up." },
        { text: "Takes oral estrogen", correct: [0], why: "Oral estrogen raises the risk of venous clots." },
        { text: "Pedal pulses 2+ in both feet", correct: [1], why: "Normal pulses reflect arterial flow, not venous clotting." },
        { text: "Left calf swollen and tender", correct: [0], why: "A deep vein clot in the calf is the usual source of an embolus." },
        { text: "Left hip dressing dry and intact", correct: [1], why: "A dry dressing is expected and says nothing about a clot." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority problem in sudden hypoxemia",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "The nurse suspects pulmonary embolism and weighs the client's problems. Which problem should the nurse address first?",
        rationale:
          "An SpO2 of 87% with a respiratory rate of 30/minute shows poor oxygen exchange. Breathing comes before other needs. Chest pain and fear need attention but ease as oxygenation improves. Hip dislocation is a risk to prevent, not the present threat.",
        sources: [SRC.escPe, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Anxiety about the new symptoms", why: "Her fear is real, but it follows the hypoxemia and is not the first threat." },
        { text: "Impaired gas exchange", why: "An SpO2 of 87% is a threat to breathing and comes first." },
        { text: "Acute pleuritic chest pain", why: "Chest pain needs treatment, but the SpO2 of 87% is the greater threat." },
        { text: "Risk of hip dislocation", why: "Dislocation is a risk to prevent. It is not the present emergency." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Structured report to the rapid response team",
        cjmm: "generate",
        process: "communication",
        difficulty: 3,
        stem: "At 1040 the nurse applies oxygen and plans a call to the rapid response team using SBAR. Place one statement into each part of the report.",
        rationale:
          "The situation is the new problem and when it began. The background is the recent surgery that raises clot risk. The assessment gives the key findings, including the SpO2, heart rate and calf swelling. The recommendation is a clear request for bedside review. Earlier pain scores and dressing care are less relevant to this emergency.",
        sources: [SRC.sbar],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Situation", "Background", "Assessment", "Recommendation"],
      tokens: [
        { text: "Pain was 3 of 10 before her walk this morning", why: "An earlier pain score does not describe the emergency or its cause." },
        { text: "Sudden breathlessness and chest pain at 1030", why: "This states the new problem and its onset, which is the situation." },
        { text: "Please come now and evaluate her for a clot", why: "A clear request for urgent review is the recommendation." },
        { text: "Day 3 after left hip arthroplasty", why: "Recent hip surgery is the background that raises clot risk." },
        { text: "Hip dressing was changed at 0800 and is dry", why: "Dressing care is routine and does not help the team act now." },
        { text: "SpO2 87%, heart rate 124/minute, swollen calf", why: "These objective findings form the assessment." },
      ],
      correct: [1, 3, 5, 2],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Injury prevention during anticoagulation after hip surgery",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "A CT pulmonary angiogram confirms pulmonary embolism. The client starts a continuous IV heparin infusion and is stable on nasal oxygen. Which actions should the nurse take to keep her safe? Select all that apply.",
        rationale:
          "Heparin raises bleeding risk, so an electric razor and a soft toothbrush prevent cuts and gum bleeding. Walking to the bathroom with help and the walker prevents falls. A raised toilet seat keeps hip flexion within posterior precautions. Flexing the hip past 90 degrees risks dislocation. Rubbing the calf can loosen more clot. Intramuscular injections cause hematomas during anticoagulation.",
        sources: [SRC.brunner, SRC.falls],
      }),
      kind: "sata",
      options: [
        { text: "Use an electric razor for shaving", why: "An electric razor avoids cuts that bleed during anticoagulation." },
        { text: "Give intramuscular injections in the thigh", why: "Intramuscular injections can cause large hematomas on heparin." },
        { text: "Let her sit with the hip flexed past 90 degrees", why: "Flexion past 90 degrees risks dislocation after a posterior approach." },
        { text: "Walk her to the bathroom with the walker", why: "Assisted walking with her walker prevents falls." },
        { text: "Use a raised toilet seat", why: "A raised seat limits hip flexion and eases standing." },
        { text: "Massage the left calf to ease the pain", why: "Massage can dislodge more of the clot." },
        { text: "Use a soft-bristled toothbrush", why: "A soft brush lowers gum bleeding on heparin." },
      ],
      correct: [0, 3, 4, 6],
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Safe mobility with a walker after hip arthroplasty",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Two days later the client walks again with physical therapy. The nurse watches her move from the chair to the hallway. Which two actions show that she moves safely? Select two.",
        rationale:
          "Pushing up from the chair arms avoids bending forward past the hip precaution limit. Moving the walker first and then stepping with the operated leg keeps support under the weaker side. Crossing the legs, bending forward for socks, pivoting on the operated leg and sitting on a low stool all stress a posterior hip repair.",
        sources: [SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Crosses her legs at the knees when seated", why: "Crossing the legs moves the hip past midline and risks dislocation." },
        { text: "Pushes up from the chair arms to stand", why: "Using the chair arms avoids deep hip flexion when rising." },
        { text: "Bends forward to pull on her socks", why: "Bending forward flexes the hip past the safe limit." },
        { text: "Steps with the left leg after the walker", why: "The walker goes first, then the operated leg, so support is under the weaker side." },
        { text: "Pivots on the left leg to turn toward the bed", why: "Pivoting on the operated leg twists the hip and risks dislocation." },
        { text: "Sits on a low footstool to rest", why: "A low seat forces deep hip flexion." },
      ],
      correct: [1, 3],
    },
  ],
};
