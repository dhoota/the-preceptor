import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c02-3";

/** Case 3. Inpatient mental health unit. Adult man with bipolar I disorder on lithium who develops a stomach illness. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Unsteady Steps on Day 9",
  intro:
    "A 38-year-old man with bipolar I disorder is on day 9 of an inpatient mental health stay. He was admitted with a manic episode. He takes lithium carbonate by mouth twice daily. For the past 2 days he has had vomiting and diarrhea from a stomach illness that is going around the unit.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Bipolar I disorder diagnosed at age 24. No other chronic illness.",
        "Drinks alcohol rarely. Urine drug screen negative on admission.",
        "Takes no antipsychotic or antidepressant medication.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Lithium carbonate 600 mg by mouth at 0800 and 2000.",
        "Ibuprofen 400 mg by mouth every 6 hours as needed for headache. Given 3 times since yesterday morning.",
        "Serum lithium level on day 9 at 0700, before the morning dose.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 7", "Day 9 0700"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)", "37.2°C (99.0°F)"],
          ["Heart rate", "78/minute", "104/minute"],
          ["BP", "126/80 mmHg", "104/66 mmHg"],
          ["Respiratory rate", "16/minute", "18/minute"],
          ["Weight", "84 kg", "81.5 kg"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Day 5", "Day 9", "Reference range"],
        rows: [
          ["Lithium", "0.9 mEq/L (0.9 mmol/L)", "2.1 mEq/L (2.1 mmol/L)", "0.8 to 1.2 mEq/L"],
          ["Sodium", "139 mEq/L (139 mmol/L)", "131 mEq/L (131 mmol/L)", "135 to 145 mEq/L"],
          ["Creatinine", "0.9 mg/dL (80 micromol/L)", "1.6 mg/dL (141 micromol/L)", "0.7 to 1.3 mg/dL"],
          ["BUN", "14 mg/dL (5.0 mmol/L)", "31 mg/dL (11.1 mmol/L)", "7 to 20 mg/dL"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PPT",
        topic: "Neurologic signs of a high lithium level",
        cjmm: "recognize",
        difficulty: 3,
        stem: "Before the 0800 lithium dose, the nurse reviews what the night staff charted about the client. Click to highlight the findings that require follow-up.",
        rationale:
          "A coarse tremor, a wide unsteady gait, slurred speech and drowsiness are neurologic signs of lithium toxicity. Loose stools add fluid and sodium loss, which lets lithium build up further. Asking about discharge and going to group are expected on day 9. Slightly fast speech that is easy to follow fits a client whose mania is settling.",
        sources: [SRC.lithium, SRC.halter],
      }),
      kind: "highlight",
      passage:
        "[[Coarse tremor of both hands]]. [[Asked when he can go home]]. [[Walks with a wide, unsteady gait]]. [[Speech slightly fast but easy to follow]]. [[Speech slurred at times]]. [[Drowsy and slow to answer]]. [[Plans to join the morning group]]. [[Four loose stools overnight]].",
      spans: [
        { text: "Coarse tremor of both hands", why: "A coarse tremor is a sign of lithium toxicity, unlike the fine tremor of a normal level." },
        { text: "Asked when he can go home", why: "Interest in discharge is expected as mania settles." },
        { text: "Walks with a wide, unsteady gait", why: "Ataxia is a neurologic sign of a high lithium level." },
        { text: "Speech slightly fast but easy to follow", why: "Mildly fast but clear speech fits settling mania." },
        { text: "Speech slurred at times", why: "Slurred speech is a neurologic sign of lithium toxicity." },
        { text: "Drowsy and slow to answer", why: "Drowsiness is a sign of moderate lithium toxicity." },
        { text: "Plans to join the morning group", why: "Taking part in group is expected on day 9." },
        { text: "Four loose stools overnight", why: "Ongoing diarrhea loses fluid and sodium, which raises the lithium level." },
      ],
      correct: [0, 2, 4, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Factors that raise a lithium level",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the orders, vital signs and day 9 laboratory results. For each finding, specify whether it contributes to the rise in the lithium level or does not contribute.",
        rationale:
          "The lithium level rose from 0.9 to 2.1 mEq/L while the dose stayed the same. Vomiting and diarrhea caused fluid and sodium loss. Low sodium makes the kidneys hold lithium. Ibuprofen lowers kidney clearance of lithium. The creatinine rise from 0.9 mg/dL (80 micromol/L) to 1.6 mg/dL (141 micromol/L) shows slower clearance. The level was drawn before the morning dose, so it is valid.",
        sources: [SRC.lithium, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results in SI units only, such as sodium 131 mmol/L and creatinine 141 micromol/L. They report urea in mmol/L rather than BUN.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Contributes to the rise", "Does not contribute"],
      rows: [
        { text: "Vomiting and diarrhea for 2 days", correct: [0], why: "Fluid loss lowers kidney clearance of lithium." },
        { text: "Ibuprofen 400 mg given 3 times", correct: [0], why: "NSAIDs reduce kidney clearance of lithium and raise the level." },
        { text: "Sodium 131 mEq/L (131 mmol/L)", correct: [0], why: "Low sodium makes the kidneys hold on to more lithium." },
        { text: "Lithium dose unchanged at 600 mg twice daily", correct: [1], why: "The dose did not change, so it does not explain the rise." },
        { text: "Creatinine 1.6 mg/dL (141 micromol/L)", correct: [0], why: "A rise from 0.9 mg/dL (80 micromol/L) shows slower kidney clearance." },
        { text: "Level drawn before the morning dose", correct: [1], why: "A trough level is the correct timing, so the result is not falsely high." },
        { text: "Temperature 37.2°C (99.0°F)", correct: [1], why: "This temperature is not a fever, so it adds no sweating loss." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority problem with rising lithium",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0800 the client is harder to wake. His heart rate is 108/minute and his BP is 100/64 mmHg. He has not voided since 0200. Which problem is the nurse's priority concern?",
        rationale:
          "A lithium level of 2.1 mEq/L is above the toxic threshold. Vomiting, diarrhea, a weight drop from 84 kg to 81.5 kg, a falling BP and no urine since 0200 show volume depletion. Low volume and low sodium make the kidneys hold lithium, so the level can keep rising. Growing drowsiness shows the brain is affected. Seizures and coma can follow.",
        refs: ["A serum lithium of 1.5 mEq/L (1.5 mmol/L) or more is in the toxic range."],
        sources: [SRC.lithium, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report lithium only in mmol/L, so this level reads 2.1 mmol/L. The Medical Council of Canada adult range is 0.6 to 1.2 mmol/L, so the level is still far above range.",
      }),
      kind: "mc",
      options: [
        { text: "Relapse of mania", why: "Drowsiness and slow answers are the opposite of the energy of mania." },
        { text: "Lithium toxicity from fluid loss", why: "A level of 2.1 mEq/L with fluid loss and drowsiness fits this problem." },
        { text: "Neuroleptic malignant syndrome", why: "He takes no antipsychotic and his temperature is 37.2°C." },
        { text: "Alcohol withdrawal delirium", why: "He drinks rarely and has been on the unit for 9 days." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Collaborating on a medication safety problem",
        cjmm: "generate",
        process: "communication",
        difficulty: 3,
        stem: "The nurse is about to call the primary health care provider. Which actions should the nurse plan? Select all that apply.",
        rationale:
          "The 0800 lithium dose is held because the level is toxic. An SBAR report gives the provider the level, the fluid loss and the change in alertness in a clear order. The as-needed ibuprofen raises lithium levels, so the nurse asks for it to be reviewed. Ataxia and drowsiness make a fall likely. Extra water does not make a dose safe. Waiting for a routine level delays care.",
        sources: [SRC.lithium, SRC.sbar],
      }),
      kind: "sata",
      options: [
        { text: "Hold the 0800 lithium dose", why: "Giving more lithium at a toxic level would raise it further." },
        { text: "Give the 0800 dose with extra water", why: "Extra water does not make a dose safe at a toxic level." },
        { text: "Report the findings in SBAR format", why: "SBAR gives the provider the key facts in a clear order." },
        { text: "Restrict fluids to limit the diarrhea", why: "Restricting fluids worsens the volume loss and the lithium level." },
        { text: "Ask for review of the as-needed ibuprofen", why: "NSAIDs reduce lithium clearance, so the prescription needs review." },
        { text: "Wait for the next routine lithium level", why: "Waiting delays treatment of a toxic level." },
        { text: "Start fall precautions", why: "Ataxia and drowsiness raise the risk of a fall." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to anger about a transfer",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The provider prescribes IV 0.9% sodium chloride and a transfer to the medical unit. The client says, \"I'm fine. You people just want to keep me locked up longer.\" Which response by the nurse is most therapeutic?",
        rationale:
          "The best response names the feeling and gives honest, simple facts. It links the transfer to his physical safety, which helps him accept care. Saying there is no choice shuts down talk and can raise anger. A why question puts him on the defensive. Telling him not to worry dismisses his concern and gives false reassurance.",
        sources: [SRC.halter],
      }),
      kind: "mc",
      options: [
        { text: "\"The provider has decided, so there is no choice about it.\"", why: "This is authoritarian and shuts down the conversation." },
        { text: "\"Why do you think we would want to keep you here longer?\"", why: "A why question challenges him and puts him on the defensive." },
        { text: "\"Don't worry. You will be back on this unit in no time.\"", why: "This gives false reassurance and dismisses his concern." },
        { text: "\"You sound frustrated. Your lithium level is high and unsafe.\"", why: "This names his feeling and gives an honest reason for the transfer." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Relapse prevention in bipolar disorder",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The client recovers and returns to the mental health unit. His lithium level is now 0.9 mEq/L (0.9 mmol/L). Before discharge the nurse reviews his relapse prevention plan. For each statement, specify whether it shows understanding or needs further teaching.",
        rationale:
          "A regular sleep schedule protects mood, and sleep loss can trigger mania. Sleeping less while feeling full of energy is an early warning sign. Vomiting or diarrhea can raise the lithium level, so he calls his prescriber. Stopping lithium when he feels well risks relapse. Cutting salt and taking ibuprofen can both raise the lithium level.",
        sources: [SRC.lithium, SRC.halter],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I will go to bed and get up at the same times.\"", correct: [0], why: "A steady sleep routine helps keep mood stable." },
        { text: "\"If I sleep less but feel great, I will call.\"", correct: [0], why: "Less need for sleep is an early sign of a manic relapse." },
        { text: "\"I can stop the lithium once my mood is steady.\"", correct: [1], why: "Lithium is continued to prevent relapse, even when mood is steady." },
        { text: "\"I will call my prescriber if I get vomiting or diarrhea.\"", correct: [0], why: "Fluid loss can raise the lithium level to a toxic range." },
        { text: "\"I will cut all the salt out of my diet.\"", correct: [1], why: "Low sodium makes the kidneys hold lithium. A normal salt intake is kept." },
        { text: "\"Ibuprofen is fine for my headaches.\"", correct: [1], why: "NSAIDs raise lithium levels. He needs to ask before using them." },
      ],
    },
  ],
};
