import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c20-3";

/** Case 3. Pediatric emergency department and pediatric unit. Adolescent after an intentional ingestion. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "An Adolescent After an Ingestion",
  intro:
    "A 16-year-old girl is brought to the pediatric emergency department by her mother at 2200. She says she swallowed a bottle of pain tablets about 18 hours ago after a breakup. She has vomited 3 times today.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "No past medical history. No regular medications. No known allergies.",
        "Her mother found an empty bottle that had held 50 acetaminophen 500 mg tablets.",
        "Weight 52 kg.",
        "Lives with her mother and 12-year-old brother. Her grades have dropped this term.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2200"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)"],
          ["Heart rate", "104/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "108/68 mmHg"],
          ["SpO2", "99% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 2230", "Reference range"],
        rows: [
          ["Acetaminophen", "64 mcg/mL", "10 to 30 mcg/mL at therapeutic doses"],
          ["AST", "1840 units/L", "10 to 40 units/L"],
          ["ALT", "2260 units/L", "7 to 35 units/L"],
          ["INR", "2.1", "0.8 to 1.1"],
          ["Total bilirubin", "2.4 mg/dL (41 micromol/L)", "0.3 to 1.2 mg/dL"],
          ["Glucose", "68 mg/dL (3.8 mmol/L)", "70 to 99 mg/dL"],
          ["Creatinine", "1.0 mg/dL (88 micromol/L)", "0.5 to 1.0 mg/dL"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Warning signs of ongoing suicide risk",
        cjmm: "recognize",
        process: "communication",
        difficulty: 2,
        stem: "The nurse interviews the adolescent alone while her mother waits outside. Click to highlight the statements and findings that raise concern for ongoing suicide risk.",
        rationale:
          "Her wish to sleep and not wake up states a wish to die. Giving away her phone and jewelry suggests planning. A breakup 2 days ago is a recent loss. Weeks of poor sleep add risk. Sport and family living are protective or neutral. Asking about confidentiality is a normal adolescent concern.",
        sources: [SRC.teenSuicide, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Balancing Privacy and Confidentiality in Youth Mental Health Care", year: 2026, url: "https://cnps.ca/article/infolaw-balancing-privacy-and-confidentiality-in-youth-mental-health-care/" }],
        canada: "In Canada a capable 16-year-old usually controls who sees her health information, and consent laws vary by province. CNPS notes that confidentiality may be limited when there is a risk of serious harm, such as suicide.",
      }),
      kind: "highlight",
      passage:
        "[[Says she wanted to sleep and not wake up]]. [[Broke up with her partner 2 days ago]]. [[Plays soccer twice a week]]. [[Gave her phone and jewelry to a friend yesterday]]. [[Lives with her mother and brother]]. [[Has slept about 4 hours a night for 3 weeks]]. [[Asks whether the nurse will tell her mother everything]]. [[Makes eye contact while talking]].",
      spans: [
        { text: "Says she wanted to sleep and not wake up", why: "Wishing to sleep and not wake up expresses a wish to die." },
        { text: "Broke up with her partner 2 days ago", why: "A recent relationship loss is a common trigger for suicidal acts in adolescents." },
        { text: "Plays soccer twice a week", why: "Regular sport is a protective activity, not a warning sign." },
        { text: "Gave her phone and jewelry to a friend yesterday", why: "Giving away valued possessions is a warning sign of planning." },
        { text: "Lives with her mother and brother", why: "Living with family is not itself a risk factor." },
        { text: "Has slept about 4 hours a night for 3 weeks", why: "Ongoing poor sleep is linked to suicide risk in adolescents." },
        { text: "Asks whether the nurse will tell her mother everything", why: "Concern about confidentiality is common in adolescents and is not a warning sign." },
        { text: "Makes eye contact while talking", why: "Eye contact during the interview is not a risk cue." },
      ],
      correct: [0, 1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Liver results after acetaminophen overdose",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the 2230 laboratory results. For each result, specify whether it reflects liver cell damage, reduced liver function, or is within the expected range.",
        rationale:
          "Acetaminophen injures liver cells, which release AST and ALT. Levels of 1840 and 2260 units/L show severe injury. An INR of 2.1 shows the liver is failing to make clotting factors. A bilirubin of 2.4 mg/dL (41 micromol/L) shows poor clearance. A glucose of 68 mg/dL (3.8 mmol/L) shows poor glucose release. The creatinine and SpO2 are normal.",
        sources: [SRC.apap, SRC.brunner],
        canada: "Canadian labs report SI units only, so the acetaminophen level reads about 423 micromol/L and the glucose 3.8 mmol/L. The US and Canada consensus converts mcg/mL to micromol/L by multiplying by 6.614.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Liver cell damage", "Reduced liver function", "Within the expected range"],
      rows: [
        { text: "AST 1840 units/L", correct: [0], why: "AST leaks from injured liver cells into the blood." },
        { text: "INR 2.1", correct: [1], why: "The liver makes clotting factors, so a high INR shows failing synthesis." },
        { text: "Creatinine 1.0 mg/dL (88 micromol/L)", correct: [2], why: "This creatinine is within the reference range." },
        { text: "ALT 2260 units/L", correct: [0], why: "ALT is released mainly from injured liver cells." },
        { text: "Glucose 68 mg/dL (3.8 mmol/L)", correct: [1], why: "A failing liver cannot release enough glucose, so the level falls." },
        { text: "Total bilirubin 2.4 mg/dL (41 micromol/L)", correct: [1], why: "A damaged liver clears less bilirubin, so the level rises." },
        { text: "SpO2 99% on room air", correct: [2], why: "This SpO2 is within the normal range." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Which findings to report first in liver failure",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "The client is now on the pediatric unit. At 0200 the nurse notes several new findings. Which two findings should the nurse report to the primary health care provider first? Select two.",
        rationale:
          "A glucose of 52 mg/dL (2.9 mmol/L) is below the reference range and can cause seizures. New confusion may be the start of hepatic encephalopathy. Both show the liver is failing and need prompt action. Nausea and right upper tenderness are expected. The urine output is adequate for 52 kg. The mother's request can wait.",
        sources: [SRC.apap, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Nausea rated 4 of 10", why: "Nausea is expected with liver injury and can be treated with a prescribed antiemetic." },
        { text: "Glucose 52 mg/dL (2.9 mmol/L)", why: "A falling glucose in liver failure can cause seizures and needs prompt treatment." },
        { text: "Tenderness in the right upper abdomen", why: "Tenderness over the injured liver is expected and already known." },
        { text: "New confusion about the date and place", why: "New confusion may be early hepatic encephalopathy, a sign of worsening liver failure." },
        { text: "Mother asks for an update on the plan", why: "The mother's request matters but is not a physical threat." },
        { text: "Urine output 40 mL in the last hour", why: "This output is adequate for her weight of 52 kg." },
      ],
      correct: [1, 3],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safe environment for an adolescent at risk of suicide",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 2,
        stem: "The client stays on the pediatric unit for the acetylcysteine infusion. She has said she still wishes she had not been found. Which measures should the nurse include in her plan of care? Select all that apply.",
        rationale:
          "She still voices regret at surviving, so her risk of self-harm is high. Continuous one-to-one observation by trained staff keeps her safe. Searching her belongings and removing cords, belts and bags limit the means of self-harm. A closed bathroom door, a distant room and family observation all weaken safe monitoring.",
        sources: [SRC.jcSuicide, SRC.teenSuicide],
      }),
      kind: "sata",
      options: [
        { text: "Let her close the bathroom door for privacy", why: "A closed door prevents observation and gives a chance for self-harm." },
        { text: "Assign staff to continuous one-to-one observation", why: "Continuous observation is needed while she voices a wish to die." },
        { text: "Place her in a room far from the nurses' station", why: "Distance from the station delays help. A room near the station is safer." },
        { text: "Search her belongings with her present", why: "A search removes items that could be used for self-harm." },
        { text: "Ask her mother to watch her overnight instead of staff", why: "Family members are not trained observers and cannot replace staff." },
        { text: "Remove cords, belts and plastic bags from the room", why: "These items can be used for strangulation or suffocation." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Acetylcysteine loading dose volume",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The primary health care provider prescribes IV acetylcysteine 150 mg/kg over 1 hour as the loading dose. The client weighs 52 kg. The vial contains acetylcysteine 200 mg/mL. How many mL of acetylcysteine should the nurse draw up for the loading dose?",
        rationale:
          "The loading dose is 150 mg/kg for 52 kg, which is 7800 mg. The vial holds 200 mg in each mL. 7800 mg divided by 200 mg/mL is 39 mL. The drug is then diluted and infused over 1 hour. The nurse watches for flushing, rash and wheeze during the infusion.",
        calc: { expr: "150 * 52 / 200", answer: 39, unit: "mL", round: 0, steps: ["150 * 52 = 7800", "7800 / 200 = 39"] },
        sources: [SRC.acetadote, SRC.apap],
      }),
      kind: "mc",
      options: [
        { text: "3.9 mL", why: "This is one tenth of the correct volume and would underdose the antidote." },
        { text: "26 mL", why: "This volume holds two thirds of the loading dose." },
        { text: "39 mL", why: "150 mg/kg for 52 kg is 7800 mg. At 200 mg/mL the volume is 39 mL." },
        { text: "78 mL", why: "This volume holds twice the loading dose." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Evaluating recovery and ongoing care needs",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "On day 3 the nurse reviews the trend in the client's results. She is alert and oriented. She tells the nurse she still thinks about ending her life. Complete the following sentence by choosing from the lists of options.",
        tabs: [
          {
            title: "Laboratory Trend",
            table: {
              head: ["Test", "Day 1", "Day 2", "Day 3"],
              rows: [
                ["INR", "2.1", "1.7", "1.3"],
                ["ALT (units/L)", "2260", "1510", "840"],
                ["Glucose (mg/dL)", "68", "84", "96"],
              ],
            },
          },
        ],
        rationale:
          "From day 1 to day 3 the INR fell from 2.1 to 1.3. The ALT fell from 2260 to 840 units/L and the glucose rose from 68 to 96. The liver is recovering. She still thinks about ending her life, so continuous observation continues. She needs adolescent mental health care before any discharge.",
        sources: [SRC.apap, SRC.teenSuicide],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The liver injury is {0}. The client {1}, and she needs a referral to {2}.",
      blanks: [
        {
          options: [
            { text: "worsening", why: "A worsening injury would raise the INR and lower the glucose. Both moved the other way." },
            { text: "improving", why: "The INR, ALT and glucose have all moved toward normal over 3 days." },
            { text: "unchanged", why: "The INR fell from 2.1 to 1.3, so the results have changed." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "can stay alone in an open room", why: "Ongoing suicidal thoughts make an unobserved room unsafe." },
            { text: "is ready for discharge home today", why: "Ongoing suicidal thoughts need mental health assessment before any discharge." },
            { text: "still needs continuous observation", why: "She still voices thoughts of ending her life, so close observation continues." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "adolescent mental health services", why: "Her suicidal thoughts need specialist mental health assessment and treatment." },
            { text: "outpatient physical therapy", why: "Nothing in the chart shows a mobility problem." },
            { text: "a registered dietitian", why: "Her liver is recovering and nothing shows a nutrition problem that outranks her safety." },
          ],
          correct: 0,
        },
      ],
    },
  ],
};
