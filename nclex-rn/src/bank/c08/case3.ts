import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c08-3";

/** Case 3. Emergency department then medical unit. Young woman with severe limb and back pain. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Back and Thigh Pain After a Cold Day",
  intro:
    "A 23-year-old woman with sickle cell anemia comes to the emergency department at 0200 with severe pain in her lower back and both thighs. The pain began last evening after a long day outdoors in cold rain. She is admitted to the medical unit at 0700 with a hydromorphone PCA.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Sickle cell anemia (hemoglobin SS). Two or three pain crises a year. Graduate student.",
        "Home medications: hydroxyurea 1000 mg by mouth daily, folic acid 1 mg by mouth daily, oxycodone 10 mg by mouth every 4 hours as needed for pain.",
        "Took oxycodone 10 mg at 2000 and at 0000 without relief.",
        "Baseline hemoglobin 8.6 g/dL (86 g/L). Weight 60 kg.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Hydromorphone PCA: demand dose 0.2 mg, lockout 10 minutes, no basal rate.",
        "Ketorolac 15 mg IV every 6 hours.",
        "Dextrose 5% in 0.45% sodium chloride IV at 100 mL/hour.",
        "Incentive spirometer 10 breaths every hour while awake.",
        "Continuous pulse oximetry. Sedation and respiratory checks every hour.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0200 (ED)", "0700"],
        rows: [
          ["Temperature", "37.3°C (99.1°F)", "37.2°C (99.0°F)"],
          ["Heart rate", "108/minute", "98/minute"],
          ["Respiratory rate", "20/minute", "18/minute"],
          ["BP", "126/78 mmHg", "122/76 mmHg"],
          ["SpO2", "97% on room air", "97% on room air"],
          ["Pain", "9 of 10", "8 of 10"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "0230 result", "Reference range"],
        rows: [
          ["Hemoglobin", "7.9 g/dL (79 g/L)", "12.0 to 16.0 g/dL"],
          ["Reticulocytes", "11%", "0.5% to 2.5%"],
          ["White blood cells", "12 400/mm3", "4500 to 11 000/mm3"],
          ["Creatinine", "0.6 mg/dL (53 micromol/L)", "0.5 to 1.1 mg/dL"],
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
        topic: "Reviewing a PCA for a pain crisis",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 1400 the nurse reviews the PCA history and assesses the client. Click to highlight the findings that require follow-up.",
        rationale:
          "Pain of 8 of 10 on the PCA since 0700 shows the current dose is not controlling the crisis. Pressing the button 46 times for 18 doses means she is asking for far more than the pump allows. An unused incentive spirometer raises the risk of acute chest syndrome. A sedation level of 1, respirations of 16/minute and an SpO2 of 97% show no oversedation. Moist mucosa and a normal void are expected.",
        sources: [SRC.nhlbi, SRC.aspmn],
      }),
      kind: "highlight",
      passage:
        "[[Pain 8 of 10 in back and thighs]]. [[46 attempts and 18 doses in 4 hours]]. [[Sedation level 1, awake and alert]]. [[Respirations 16/minute, regular and unlabored]]. [[SpO2 97% on room air at rest]]. [[Spirometer unused since admission]]. [[Oral mucosa pink and moist]]. [[Voided 400 mL of pale yellow urine at 1200]].",
      spans: [
        { text: "Pain 8 of 10 in back and thighs", why: "Severe pain on the PCA since 0700 shows the analgesia is not working." },
        { text: "46 attempts and 18 doses in 4 hours", why: "Many more attempts than doses show her need is above what the pump allows." },
        { text: "Sedation level 1, awake and alert", why: "Level 1 is the target on a sedation scale and needs no change." },
        { text: "Respirations 16/minute, regular and unlabored", why: "A regular rate of 16/minute shows no respiratory depression." },
        { text: "SpO2 97% on room air at rest", why: "An SpO2 of 97% shows adequate oxygenation." },
        { text: "Spirometer unused since admission", why: "Hourly spirometer use while awake lowers the risk of acute chest syndrome." },
        { text: "Oral mucosa pink and moist", why: "Moist mucosa shows adequate hydration." },
        { text: "Voided 400 mL of pale yellow urine at 1200", why: "A good volume of pale urine shows adequate hydration and kidney function." },
      ],
      correct: [0, 1, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Pain behaviors misread as drug seeking",
        cjmm: "analyze",
        process: "caring",
        difficulty: 4,
        stem: "At 1430 a colleague calls the client drug seeking because she watches the clock and asks for hydromorphone by name. For each behavior, specify whether it fits sickle cell pain care or suggests possible opioid misuse.",
        rationale:
          "Clients with sickle cell disease live with repeated severe pain. They learn which drug and dose work, so naming them reflects experience. Clock watching and frequent PCA use are signs of undertreated pain. People cope in different ways, so laughing with a visitor does not mean the pain is less. Altering a prescription or hiding prescriptions from several prescribers are behaviors that suggest misuse.",
        sources: [SRC.ashPain, SRC.nhlbi],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Fits sickle cell pain care", "Suggests possible opioid misuse"],
      rows: [
        { text: "Watches the clock for her next dose", correct: [0], why: "Clock watching often signals pain that returns before the next dose." },
        { text: "Asks for hydromorphone and its dose by name", correct: [0], why: "Experienced clients know which drug and dose have worked for them before." },
        { text: "Presses the PCA button often", correct: [0], why: "Frequent demands show the dose does not meet her need." },
        { text: "Laughs with a visitor while rating pain 8 of 10", correct: [0], why: "Coping behavior varies. Self-report is the basis of pain assessment." },
        { text: "Changes the date on a written opioid prescription", correct: [1], why: "Altering a prescription is an aberrant behavior that suggests misuse." },
        { text: "Hides prescriptions from several prescribers", correct: [1], why: "Concealed prescriptions from several prescribers suggest misuse." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PPT",
        topic: "Opioid tolerance and PCA dosing",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "The nurse notes that the client took oxycodone at home before she arrived. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Severe pain with far more PCA attempts than doses points to acute pain that the PCA is not meeting. She took oxycodone 10 mg twice before admission, so she needs parenteral doses that account for her home opioid use. Nothing suggests misuse of the device. Moist mucosa and a normal void argue against a fluid deficit. Unlabored respirations and an SpO2 of 97% do not suggest an airway problem.",
        sources: [SRC.nhlbi, SRC.ashPain],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address {0} related to {1}.",
      blanks: [
        {
          options: [
            { text: "risk for opioid misuse", why: "Her behavior fits undertreated pain, not misuse." },
            { text: "deficient fluid volume", why: "Moist mucosa and a normal void show adequate hydration." },
            { text: "acute pain", why: "Pain of 8 of 10 on the PCA is her most urgent problem." },
            { text: "impaired gas exchange", why: "An SpO2 of 97% on room air shows adequate gas exchange." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a dose below her opioid tolerance", why: "Home oxycodone use raises the dose she needs for relief." },
            { text: "pressing the button for euphoria", why: "Nothing in the chart suggests she is seeking euphoria." },
            { text: "chilling in the cold rain", why: "Cold may have triggered the crisis but does not explain poor relief now." },
            { text: "her daily hydroxyurea dose", why: "Hydroxyurea lowers crisis frequency and does not block opioid relief." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort and prevention measures in a pain crisis",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 2,
        stem: "The primary health care provider raises the PCA demand dose. The nurse plans care for the rest of the crisis. Which measures should the nurse include in the plan? Select all that apply.",
        rationale:
          "Local heat and distraction are useful adjuncts to analgesia. Hourly incentive spirometry while awake and early walking lower the risk of acute chest syndrome. Cold causes vasoconstriction and can worsen sickling. Restricting fluids adds to dehydration, which promotes sickling. Strict bed rest raises the risk of lung complications.",
        sources: [SRC.nhlbi, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Apply cold packs to the painful thighs", why: "Cold causes vasoconstriction and can worsen sickling." },
        { text: "Apply warm packs to the painful thighs", why: "Local heat is a recommended nondrug adjunct for crisis pain." },
        { text: "Coach spirometer use every hour while awake", why: "Hourly spirometry while awake lowers the risk of acute chest syndrome." },
        { text: "Limit oral fluids to 1 L each day", why: "Fluid restriction promotes dehydration, which raises sickling." },
        { text: "Help her walk in the hall as pain allows", why: "Early walking lowers the risk of lung complications." },
        { text: "Keep her on bed rest until the crisis ends", why: "Immobility raises the risk of acute chest syndrome and clots." },
        { text: "Offer distraction such as music or a film", why: "Distraction is a recommended nondrug adjunct for crisis pain." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "PCA by proxy",
        cjmm: "action",
        difficulty: 3,
        stem: "At 2300 the nurse finds the client asleep and her mother pressing the PCA button. The mother says she wants her daughter to wake up without pain. Which action should the nurse take first?",
        rationale:
          "PCA is safe because a sedated client stops pressing the button. When someone else presses it, that safety check is lost and oversedation can follow. The nurse first checks the client's sedation level and respirations. Teaching the mother comes next. A basal infusion adds opioid while she sleeps. Letting the mother continue repeats the unsafe practice.",
        sources: [SRC.proxy, SRC.aspmn],
      }),
      kind: "mc",
      options: [
        { text: "Explain that only the client presses the button", why: "Teaching is needed, but the client's safety is checked first." },
        { text: "Check her sedation level and respirations", why: "Doses given by proxy can oversedate a sleeping client, so she is assessed first." },
        { text: "Ask the provider to add a basal infusion", why: "A basal infusion adds opioid while she sleeps and raises the risk." },
        { text: "Let the mother continue while the client sleeps", why: "Proxy dosing removes the safety check that makes PCA safe." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Preventing future pain crises",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On day 4 the crisis has resolved and the nurse completes discharge teaching. Which three statements by the client show understanding of how to stay well? Select three.",
        rationale:
          "Steady fluid intake and staying warm help prevent sickling. A temperature of 38.5°C (101.3°F) or higher needs urgent assessment because infection risk is high. Hydroxyurea is a long-term therapy and is not stopped when she feels well. Yearly influenza vaccine is recommended. Chest pain can signal acute chest syndrome and needs care the same day.",
        refs: ["People with sickle cell disease and a temperature of 38.5°C (101.3°F) or higher need immediate evaluation."],
        sources: [SRC.nhlbi],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I will stop taking hydroxyurea when I feel well.\"", why: "Hydroxyurea is taken long term to lower crisis frequency." },
        { text: "\"I will carry water and sip through the day.\"", why: "Good hydration helps prevent sickling." },
        { text: "\"I will dress warmly and avoid getting chilled.\"", why: "Cold causes vasoconstriction and can trigger a crisis." },
        { text: "\"I can skip the flu shot because I am young.\"", why: "Yearly influenza vaccine is recommended for people with sickle cell disease." },
        { text: "\"I will get seen for a fever of 38.5°C or more.\"", why: "A fever at or above 38.5°C needs urgent evaluation for infection." },
        { text: "\"I will wait a day before calling about chest pain.\"", why: "Chest pain can signal acute chest syndrome and needs care the same day." },
      ],
      correct: [1, 2, 4],
    },
  ],
};
