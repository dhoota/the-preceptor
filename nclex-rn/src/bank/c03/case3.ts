import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c03-3";

/** Case 3. Medical unit. Adult with acute pancreatitis and heavy alcohol use. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Pain That Spreads to the Back",
  intro:
    "A 46-year-old man is admitted to the medical unit at 2200 with severe upper abdominal pain that began 18 hours ago. He says he drinks about 8 beers a day. His last drink was at 0200 today, 20 hours before admission.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Daily alcohol use for 20 years.",
        "Had shaking and sweating when he stopped drinking 2 years ago. No seizures reported.",
        "No known gallstones. No earlier episodes of pancreatitis.",
        "Weight 84 kg. Lives alone. Works as a roofer.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2200"],
        rows: [
          ["Temperature", "38.1°C (100.6°F)"],
          ["Heart rate", "112/minute"],
          ["Respiratory rate", "22/minute"],
          ["BP", "128/80 mmHg"],
          ["SpO2", "95% on room air"],
          ["Pain", "9 of 10"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Lipase", "1840 units/L", "0 to 160 units/L"],
          ["White blood cells", "14 200/mm3", "4500 to 11 000/mm3"],
          ["Calcium", "7.8 mg/dL (1.95 mmol/L)", "8.5 to 10.5 mg/dL"],
          ["Glucose", "172 mg/dL (9.5 mmol/L)", "70 to 99 mg/dL"],
          ["Triglycerides", "180 mg/dL (2.0 mmol/L)", "less than 150 mg/dL"],
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
        topic: "Abdominal assessment in pancreatitis",
        cjmm: "recognize",
        difficulty: 3,
        stem: "Thirty minutes after he reaches the unit, the nurse examines the client's abdomen and general state. Which findings in this note need follow-up? Click to highlight them.",
        rationale:
          "Epigastric pain of 9 of 10 that spreads to the back needs prompt relief and reassessment. A distended, guarded abdomen and hypoactive bowel sounds point to inflammation and a slowed gut. Bluish discoloration around the umbilicus can signal bleeding into the tissues from severe pancreatitis. A hand tremor 20 hours after the last drink can be early alcohol withdrawal. A curled position eases pancreatic pain. Orientation and equal pupils are expected.",
        sources: [SRC.acg, SRC.brunner, SRC.asam],
      }),
      kind: "highlight",
      passage:
        "[[Lying on his side with knees drawn up]]. [[Epigastric pain spreading to the back, 9 of 10]]. [[Oriented to person, place and time]]. [[Abdomen distended and guarded]]. [[Pupils equal and reactive to light]]. [[Bowel sounds hypoactive]]. [[Bluish discoloration around the umbilicus]]. [[Hands tremble when he lifts a cup]].",
      spans: [
        { text: "Lying on his side with knees drawn up", why: "Flexing the trunk eases pancreatic pain. The position itself needs no follow-up." },
        { text: "Epigastric pain spreading to the back, 9 of 10", why: "Severe pain that bores into the back is typical of pancreatitis and needs relief." },
        { text: "Oriented to person, place and time", why: "Full orientation is expected." },
        { text: "Abdomen distended and guarded", why: "Distention and guarding show peritoneal irritation and possible ileus." },
        { text: "Pupils equal and reactive to light", why: "Equal, reactive pupils are expected." },
        { text: "Bowel sounds hypoactive", why: "Slowed bowel sounds can mean ileus from inflammation near the gut." },
        { text: "Bluish discoloration around the umbilicus", why: "Periumbilical bruising can reflect retroperitoneal bleeding in severe disease." },
        { text: "Hands tremble when he lifts a cup", why: "A tremor after stopping alcohol can be an early withdrawal sign." },
      ],
      correct: [1, 3, 5, 6, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Separating pancreatitis from alcohol withdrawal",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the chart and the admission assessment. For each finding, specify whether it is consistent with acute pancreatitis, alcohol withdrawal or both. Each finding may fit more than one.",
        rationale:
          "A lipase of 1840 units/L is more than 3 times the upper reference limit and fits pancreatitis. Epigastric pain spreading to the back fits pancreatitis. A tremor, shaking with past cessation and a last drink 20 hours ago fit withdrawal, which often starts 6 to 24 hours after the last drink. A heart rate of 112/minute and a temperature of 38.1°C can come from either inflammation or withdrawal.",
        refs: ["Acute pancreatitis is supported by a lipase more than 3 times the upper reference limit.", "Alcohol withdrawal signs often begin 6 to 24 hours after the last drink."],
        sources: [SRC.acg, SRC.asam],
      }),
      kind: "matrix",
      mode: "multi",
      columns: ["Acute pancreatitis", "Alcohol withdrawal"],
      rows: [
        { text: "Lipase 1840 units/L", correct: [0], why: "A lipase this high comes from pancreatic injury. Withdrawal does not raise it." },
        { text: "Hands tremble when he lifts a cup", correct: [1], why: "Tremor is a sign of autonomic overactivity in withdrawal." },
        { text: "Heart rate 112/minute", correct: [0, 1], why: "Inflammation and pain raise the heart rate. So does withdrawal." },
        { text: "Epigastric pain spreading to the back", correct: [0], why: "This pain pattern comes from the inflamed pancreas." },
        { text: "Shaking and sweating when he stopped drinking 2 years ago", correct: [1], why: "Past withdrawal predicts withdrawal again when he stops." },
        { text: "Temperature 38.1°C (100.6°F)", correct: [0, 1], why: "Pancreatic inflammation and withdrawal can each cause a low-grade fever." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "BCC",
        topic: "Priority comfort problem in pancreatitis",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "At 2300 the client's BP is 126/78 mmHg. He rates his pain 9 of 10, moans and cannot find a comfortable position. He has not slept. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "His BP is stable at 126/78 mmHg, and pain of 9 of 10 is now the most pressing problem. Severe pain raises the heart rate and oxygen demand and blocks rest. The inflamed pancreas causes the pain. Poor sleep matters but follows from the pain. Nutrition is a concern over days, not tonight. Nothing in the stem suggests gallbladder disease.",
        sources: [SRC.acg, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address {0} related to {1}.",
      blanks: [
        {
          options: [
            { text: "disturbed sleep", why: "He has not slept, but the pain is what keeps him awake." },
            { text: "acute pain", why: "Pain of 9 of 10 with moaning and restlessness needs relief first." },
            { text: "imbalanced nutrition", why: "Nutrition matters over days. It is not the problem to address first tonight." },
            { text: "activity intolerance", why: "Nothing in the stem shows he cannot tolerate activity." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "pancreatic inflammation", why: "Enzyme injury and inflammation of the pancreas cause the pain." },
            { text: "gallbladder spasm", why: "He has no known gallstones, and the lipase points to the pancreas." },
            { text: "a new environment", why: "A new room can disturb rest but does not explain pain of 9 of 10." },
            { text: "muscle strain at work", why: "Strain does not explain the high lipase or the pain pattern." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort measures in pancreatitis",
        cjmm: "generate",
        process: "caring",
        difficulty: 3,
        stem: "The client receives IV hydromorphone as prescribed. He is to take nothing by mouth overnight. Which additional measures should the nurse plan to promote comfort? Select all that apply.",
        rationale:
          "Sitting up and leaning forward takes pressure off the inflamed pancreas. Mouth care relieves the dry mouth that comes with nothing by mouth. A quiet, dim room supports rest. Slow breathing and relaxation help the analgesic work. Lying flat with the legs straight stretches the abdomen and adds pain. Rubbing a guarded abdomen adds pain.",
        sources: [SRC.brunner, SRC.acg],
      }),
      kind: "sata",
      options: [
        { text: "Help him sit up and lean forward", why: "Leaning forward relieves pressure on the pancreas." },
        { text: "Lay him flat with his legs straight", why: "A flat, extended position stretches the abdomen and worsens pain." },
        { text: "Provide mouth care every 2 hours", why: "Mouth care eases dryness while he takes nothing by mouth." },
        { text: "Rub the abdomen firmly to ease cramps", why: "Pressure on a guarded, inflamed abdomen increases pain." },
        { text: "Keep the room quiet with dim lighting", why: "A calm setting supports rest and lowers pain perception." },
        { text: "Coach slow breathing and relaxation", why: "Relaxation adds to the effect of the analgesic." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Symptom-triggered withdrawal treatment",
        cjmm: "action",
        difficulty: 3,
        stem: "At 0600 the client is restless and sweating. His hands shake and he says he sees bugs on the wall. His CIWA-Ar score is 18. The unit protocol calls for lorazepam IV when the score is 10 or more. Which action should the nurse take first?",
        rationale:
          "A CIWA-Ar score of 18 shows moderate withdrawal, which calls for medication. The protocol threshold of 10 is met, so a benzodiazepine is given now. Waiting 4 hours lets withdrawal progress toward seizures or delirium. Restraints raise agitation and injury. A mental health consult may help later but does not treat withdrawal now.",
        refs: ["A CIWA-Ar score of 10 to 18 indicates moderate alcohol withdrawal, which calls for pharmacotherapy, with benzodiazepines first-line."],
        sources: [SRC.asam],
      }),
      kind: "mc",
      options: [
        { text: "Give lorazepam per the protocol", why: "A score of 18 meets the protocol threshold, and a benzodiazepine treats moderate withdrawal." },
        { text: "Recheck the score in 4 hours", why: "Delay lets withdrawal progress. The score already calls for treatment." },
        { text: "Apply soft wrist restraints", why: "Restraints raise agitation and injury risk and do not treat withdrawal." },
        { text: "Request a mental health consult", why: "A consult does not treat withdrawal that is happening now." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Change talk about drinking",
        cjmm: "evaluate",
        process: "communication",
        difficulty: 3,
        stem: "On day 3 the client's pain is 2 of 10 and his withdrawal signs have eased. The nurse uses motivational interviewing to talk about his drinking. Which two statements by the client suggest readiness to change? Select two.",
        rationale:
          "Change talk expresses a desire, reason, need or plan to change. Wanting to cut down before another episode shows desire and reason. Asking about programs shows a step toward a plan. Comparing himself with coworkers, calling beer harmless and shifting the concern to his brother are sustain talk. They defend the current habit.",
        sources: [SRC.mi, SRC.acg],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"My drinking is no worse than the rest of my crew.\"", why: "Comparing himself with others defends the habit. This is sustain talk." },
        { text: "\"I want to cut down before this happens again.\"", why: "This states a desire and a reason to change." },
        { text: "\"I only drink beer, so it is not a real problem.\"", why: "This minimizes the risk and is sustain talk." },
        { text: "\"Where can I find a program to help me quit?\"", why: "Asking for resources is a step toward a change plan." },
        { text: "\"My brother is the one who thinks I drink too much.\"", why: "This places the concern on someone else and shows no personal reason to change." },
      ],
      correct: [1, 3],
    },
  ],
};
