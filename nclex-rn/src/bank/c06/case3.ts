import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c06-3";

/** Case 3. Medical unit. Middle-aged man with liver disease and new confusion after stopping a home medication. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Sleepy and Muddled After Stopping a Home Laxative",
  intro:
    "A 54-year-old man with alcohol-associated cirrhosis is admitted to the medical unit at 1400. His sister brought him in after 2 days of confusion and heavy sleepiness. She says he stopped his lactulose 5 days ago because of loose stools. This week he has taken diphenhydramine at night for sleep.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Cirrhosis diagnosed 2 years ago, with ascites.",
        "One episode of confusion from liver disease 8 months ago.",
        "Last alcohol use 6 weeks ago, confirmed by his sister.",
        "His sister holds his durable power of attorney for health care.",
        "Weight 81 kg.",
      ].join("\n"),
    },
    {
      title: "Medications",
      text: [
        "Lactulose 30 mL by mouth twice daily. Stopped by the client 5 days ago.",
        "Rifaximin 550 mg by mouth twice daily.",
        "Furosemide 40 mg by mouth daily.",
        "Spironolactone 100 mg by mouth daily.",
        "Diphenhydramine 50 mg by mouth at bedtime, bought over the counter.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1405"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)"],
          ["Heart rate", "92/minute"],
          ["BP", "104/62 mmHg"],
          ["Respiratory rate", "16/minute"],
          ["SpO2", "96% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Ammonia", "118 mcg/dL (69 micromol/L)", "15 mcg/dL (9 micromol/L) to 45 mcg/dL (26 micromol/L)"],
          ["Sodium", "131 mEq/L (131 mmol/L)", "135 to 145 mEq/L"],
          ["Potassium", "3.1 mEq/L (3.1 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Albumin", "2.6 g/dL (26 g/L)", "3.5 g/dL (35 g/L) to 5.0 g/dL (50 g/L)"],
          ["Total bilirubin", "3.4 mg/dL (58 micromol/L)", "Up to 1.2 mg/dL (21 micromol/L)"],
          ["INR", "1.8", "0.9 to 1.1"],
          ["Platelets", "78 000/mm3", "150 000 to 400 000/mm3"],
          ["Glucose", "98 mg/dL (5.4 mmol/L)", "70 mg/dL (3.9 mmol/L) to 99 mg/dL (5.5 mmol/L)"],
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
        topic: "Signs of hepatic encephalopathy",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 1415 the nurse completes an admission assessment and records the note below. Click to highlight the findings that suggest worsening brain function from liver failure.",
        rationale:
          "Disorientation, a flapping tremor, a reversed sleep pattern and slow, slurred speech are signs of hepatic encephalopathy. Yellow sclerae and skin and the ascites reflect the cirrhosis itself. Four days without a bowel movement is a likely trigger. It is not a sign of brain function. Warm, dry skin is normal.",
        sources: [SRC.he, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Oriented to his name only]]. [[Sclerae and skin of the chest yellow]]. [[Hands flap with wrists held extended]]. [[Abdomen distended with a fluid wave]]. [[Sleeps all day and is awake all night]]. [[Speech slow and slurred]]. [[Last bowel movement 4 days ago]]. [[Skin warm and dry over the arms]].",
      spans: [
        { text: "Oriented to his name only", why: "Disorientation to place and time is a sign of encephalopathy." },
        { text: "Sclerae and skin of the chest yellow", why: "Jaundice reflects the liver disease. It is not a sign of brain function." },
        { text: "Hands flap with wrists held extended", why: "This flapping tremor, asterixis, is a sign of hepatic encephalopathy." },
        { text: "Abdomen distended with a fluid wave", why: "Ascites reflects portal hypertension, not brain function." },
        { text: "Sleeps all day and is awake all night", why: "A reversed sleep and wake cycle is an early sign of encephalopathy." },
        { text: "Speech slow and slurred", why: "Slow, slurred speech reflects slowed brain function in encephalopathy." },
        { text: "Last bowel movement 4 days ago", why: "Constipation is a trigger for encephalopathy, not a sign of it." },
        { text: "Skin warm and dry over the arms", why: "Warm, dry skin is a normal finding." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Encephalopathy versus alcohol withdrawal",
        cjmm: "analyze",
        difficulty: 4,
        stem: "His sister asks whether this could be alcohol withdrawal. She says that 2 days after his last drink he had shaking hands and saw bugs on the wall. Both settled within a few days. For each finding, specify the condition it fits better.",
        rationale:
          "Hallucinations and shaking hands 2 days after stopping alcohol fit withdrawal at that time. Those episodes ended weeks ago. Today's confusion began 6 weeks after his last drink, which is too late for withdrawal. It followed 5 days off lactulose. Asterixis and daytime sleepiness fit hepatic encephalopathy.",
        sources: [SRC.halter, SRC.he],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Hepatic encephalopathy", "Alcohol withdrawal"],
      rows: [
        { text: "Saw bugs on the wall 2 days after his last drink", correct: [1], why: "Visual hallucinations in the days after stopping alcohol fit withdrawal." },
        { text: "Shaking hands in the days after his last drink", correct: [1], why: "A tremor that starts soon after stopping alcohol is typical of withdrawal." },
        { text: "Flapping hands with wrists extended today", correct: [0], why: "Asterixis is a sign of hepatic encephalopathy." },
        { text: "Sleeps by day and is awake at night", correct: [0], why: "Daytime sleepiness with a reversed sleep cycle fits encephalopathy. Withdrawal causes agitation." },
        { text: "Confusion starting 6 weeks after his last drink", correct: [0], why: "Withdrawal begins within days of stopping alcohol. Confusion at 6 weeks points to another cause." },
        { text: "Confusion after 5 days off lactulose", correct: [0], why: "Stopping lactulose lets ammonia build up and triggers encephalopathy." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Injury risk in a confused client",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1445 the nurse finds him sitting on the edge of the bed, pulling at his IV and trying to stand to look for his car keys. Complete the sentence below by choosing from the lists of options.",
        rationale:
          "He is confused and oriented to his name only. He is trying to stand alone and pulling at his IV. These make a fall likely. An INR of 1.8 and platelets of 78 000/mm3 raise the risk of bleeding if he falls. He is not vomiting, his last drink was 6 weeks ago, and he moves on his own.",
        sources: [SRC.potter, SRC.he, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report platelets as 78 x 10^9/L and albumin as 26 g/L. The INR has no units, so it reads 1.8 in Canada as well.",
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "aspiration of vomit", why: "He is not vomiting and is awake. Aspiration is not the leading risk now." },
            { text: "alcohol withdrawal", why: "His last drink was 6 weeks ago. Withdrawal would have passed." },
            { text: "a pressure injury", why: "He is moving on his own. Pressure injury is not the leading risk." },
            { text: "a fall with injury", why: "Confusion with attempts to stand alone makes a fall likely. His clotting results make injury worse." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "yellow sclerae", why: "Jaundice reflects liver disease. It does not show a fall risk." },
            { text: "trying to stand alone", why: "Getting up alone while confused is a direct sign of fall risk." },
            { text: "a fluid wave", why: "Ascites does not by itself show the risk named here." },
            { text: "a temperature of 37.1°C", why: "37.1°C is a normal temperature and supports no risk here." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "an albumin of 2.6 g/dL (26 g/L)", why: "Low albumin reflects liver disease. It does not show a fall risk now." },
            { text: "a sodium of 131 mEq/L", why: "131 mEq/L is mildly low. It is not the main evidence for a fall risk." },
            { text: "orientation to his name only", why: "Confusion impairs his judgment about safety and raises fall risk." },
            { text: "rifaximin twice daily", why: "Rifaximin treats encephalopathy. It does not signal a fall risk." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Protein and meal timing in cirrhosis",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "At 1530 his sister asks whether he should stop eating meat to bring his ammonia down. The nurse and dietitian plan his diet. Drag one option into each blank. Not all options are used.",
        rationale:
          "Protein restriction is not advised in hepatic encephalopathy. It speeds muscle loss, and muscle helps clear ammonia. He needs 1.2 to 1.5 g/kg of protein a day. A late evening snack limits the overnight fast. His sodium of 131 mEq/L does not call for a fluid limit.",
        refs: [
          "Daily protein intake of 1.2 to 1.5 g/kg is advised in hepatic encephalopathy.",
          "A late evening snack shortens the overnight fast in cirrhosis.",
          "Fluid restriction in cirrhosis is kept for a serum sodium below 125 mEq/L.",
        ],
        sources: [SRC.he, SRC.ascites],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The diet plan includes {0} and {1}.",
      targets: ["Protein intake", "Meal timing"],
      tokens: [
        { text: "protein 1.2 to 1.5 g/kg a day", why: "Normal to high protein prevents muscle loss. Restriction does not help encephalopathy." },
        { text: "protein below 0.5 g/kg a day", why: "Protein restriction worsens muscle wasting and is not advised." },
        { text: "a bedtime snack", why: "A bedtime snack shortens the overnight fast and limits muscle breakdown." },
        { text: "a 12 hour overnight fast", why: "A long fast drives muscle breakdown in cirrhosis." },
        { text: "a fluid limit of 1000 mL a day", why: "His sodium is 131 mEq/L. Fluid limits are kept for a sodium below 125 mEq/L." },
      ],
      correct: [0, 2],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Consent through a health care agent",
        cjmm: "action",
        difficulty: 3,
        stem: "At 1600 the provider plans a diagnostic paracentesis to check the ascitic fluid for infection. He is still oriented to his name only. His sister holds his durable power of attorney for health care. Which action should the nurse take?",
        rationale:
          "Confusion limits his capacity to weigh risks. His sister holds his durable power of attorney for health care, so she decides for him now. The provider explains the procedure, its risks and options. The nurse confirms she was informed before she signs. His own signature would not be valid.",
        sources: [SRC.potter, SRC.ascites, { body: "Canadian Nurses Protective Society", work: "Consent for the Incapable Adult", year: 2025, url: "https://cnps.ca/article/consent-for-the-incapable-adult/" }, { body: "Government of Ontario", work: "Make a power of attorney", year: 2026, url: "https://www.ontario.ca/page/make-power-attorney" }],
        canada: "In Canada, substitute decision maker law is provincial and the titles differ. Ontario, for example, calls a person named for health decisions an attorney for personal care. The order of decision makers varies by province.",
      }),
      kind: "mc",
      options: [
        { text: "Confirm the provider informed his sister before she signs", why: "His sister is his legal agent while he lacks capacity. The provider informs her first." },
        { text: "Have him sign the consent since he can write his name", why: "Being able to sign does not show capacity. He is oriented to his name only." },
        { text: "Explain the risks to his sister and get her signature", why: "Explaining the procedure and its risks is the provider's role." },
        { text: "Ask his sister to sign as a witness to his signature", why: "He lacks capacity, so his signature is not valid consent." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Response to lactulose",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "Lactulose was restarted on admission. On day 3 the nurse reviews the note below. Which findings show that the treatment for encephalopathy is working? Select all that apply.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "Day 3 at 0900.",
              "Three soft stools in the past 24 hours.",
              "Oriented to person, place and time.",
              "No flapping tremor with wrists extended.",
              "Ascites unchanged in size.",
              "Potassium 3.0 mEq/L (3.0 mmol/L). Sodium 129 mEq/L (129 mmol/L).",
            ].join("\n"),
          },
        ],
        rationale:
          "Lactulose is adjusted to 2 to 3 soft stools a day, and he has three. Full orientation and loss of the flapping tremor show the encephalopathy is clearing. A potassium of 3.0 mEq/L and a sodium of 129 mEq/L have fallen further and need reporting. Ascites is not a target of this treatment.",
        refs: ["Lactulose is adjusted to produce 2 to 3 soft stools a day."],
        sources: [SRC.he],
      }),
      kind: "sata",
      options: [
        { text: "Three soft stools in 24 hours", why: "This meets the lactulose goal of 2 to 3 soft stools a day." },
        { text: "Potassium 3.0 mEq/L (3.0 mmol/L)", why: "Potassium has fallen from 3.1 mEq/L. Low potassium raises ammonia production." },
        { text: "Oriented to person, place and time", why: "Full orientation shows brain function is recovering." },
        { text: "Ascites unchanged in size", why: "Lactulose and rifaximin do not target ascites. This does not measure their effect." },
        { text: "Sodium 129 mEq/L (129 mmol/L)", why: "Sodium has fallen from 131 mEq/L. This is a new problem, not a sign of benefit." },
        { text: "No flapping tremor with wrists extended", why: "Loss of asterixis shows the encephalopathy is clearing." },
      ],
      correct: [0, 2, 5],
    },
  ],
};
