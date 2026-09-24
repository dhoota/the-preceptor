import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c10-1";

/** Case 1. Mother-baby unit. Newborn with jaundice on day 3. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Sleepy Newborn on Day 3",
  intro:
    "A female newborn is 70 hours old on the mother-baby unit. She was born vaginally at 37 weeks of gestation and is exclusively breastfed. Her parents hope to take her home today. The nurse starts the 0800 assessment.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Birth weight 3200 g. Apgar scores 8 at 1 minute and 9 at 5 minutes.",
        "Mother blood type O positive. Newborn blood type A positive. Direct antiglobulin test negative.",
        "An older sibling needed phototherapy as a newborn.",
        "No bruising or cephalohematoma noted at birth.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0800"],
        rows: [
          ["Temperature (axillary)", "36.9°C (98.4°F)"],
          ["Heart rate", "142/minute"],
          ["Respiratory rate", "44/minute"],
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
        topic: "Jaundice and feeding cues in a newborn",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse documents the 0800 assessment below. Click to highlight the findings that require follow-up.",
        rationale:
          "Yellow skin that has spread from the face to the umbilicus suggests a rising bilirubin. Visual estimates are unreliable, so the level needs measuring. A sleepy newborn who falls asleep after a short latch is taking in too little milk. Only two wet diapers in a day on day 3 confirms low intake. The weight has fallen from 3200 g to 2880 g, a loss of about one tenth of birth weight. Poor intake slows bilirubin excretion in stool. The fontanelle, reflex, cord and heart rate are normal.",
        sources: [SRC.bili, SRC.lowdermilk],
      }),
      kind: "highlight",
      passage:
        "[[Skin yellow from the face to the umbilicus]]. [[Sleepy and hard to wake for feeds]]. [[Latches for 4 minutes, then falls asleep at the breast]]. [[Anterior fontanelle soft and flat]]. [[Weight 2880 g]], down from 3200 g at birth. [[Two wet diapers in the past 24 hours]]. [[Moro reflex present and symmetric]]. [[Umbilical stump dry with no redness]]. [[Heart rate 142/minute]].",
      spans: [
        { text: "Skin yellow from the face to the umbilicus", why: "Jaundice spreading down to the umbilicus suggests a rising bilirubin that needs measuring." },
        { text: "Sleepy and hard to wake for feeds", why: "A newborn too sleepy to feed takes in too little milk and passes less bilirubin in stool." },
        { text: "Latches for 4 minutes, then falls asleep at the breast", why: "A short latch before falling asleep means an ineffective feed." },
        { text: "Anterior fontanelle soft and flat", why: "A soft, flat fontanelle is a normal finding." },
        { text: "Weight 2880 g", why: "A fall from 3200 g to 2880 g by day 3 is a large loss that points to poor intake." },
        { text: "Two wet diapers in the past 24 hours", why: "Two wet diapers on day 3 is fewer than expected and shows low intake." },
        { text: "Moro reflex present and symmetric", why: "A present, symmetric Moro reflex is a normal finding." },
        { text: "Umbilical stump dry with no redness", why: "A dry stump without redness shows normal cord healing." },
        { text: "Heart rate 142/minute", why: "A heart rate of 142/minute is in the normal newborn range." },
      ],
      correct: [0, 1, 2, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Risk factors for newborn hyperbilirubinemia",
        cjmm: "analyze",
        difficulty: 3,
        stem: "A serum bilirubin is drawn at 0830. The nurse reviews the history and the results. For each finding, specify whether it increases this newborn's risk of severe hyperbilirubinemia or does not increase the risk.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Result at 0930"],
              rows: [
                ["Total serum bilirubin", "17.1 mg/dL (292 micromol/L)"],
                ["Direct bilirubin", "0.4 mg/dL (7 micromol/L)"],
                ["Hemoglobin", "17.5 g/dL (175 g/L)"],
              ],
            },
          },
        ],
        rationale:
          "Birth before 38 weeks raises the risk of severe hyperbilirubinemia. So does exclusive breastfeeding with poor intake, because less milk means less bilirubin leaves in stool. A sibling who needed phototherapy is a family risk factor. A negative direct antiglobulin test argues against antibody hemolysis. A direct bilirubin of 0.4 mg/dL (7 micromol/L) shows the rise is not conjugated bilirubin. A normal temperature adds no risk.",
        refs: ["A gestational age under 38 weeks is a risk factor for severe hyperbilirubinemia."],
        sources: [SRC.bili, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Increases risk", "Does not increase risk"],
      rows: [
        { text: "Born at 37 weeks of gestation", correct: [0], why: "A gestational age under 38 weeks is a listed risk factor." },
        { text: "Exclusive breastfeeding with poor intake", correct: [0], why: "Low milk intake slows stooling and lets more bilirubin return to the blood." },
        { text: "Older sibling needed phototherapy", correct: [0], why: "A sibling who needed phototherapy is a listed family risk factor." },
        { text: "Direct antiglobulin test negative", correct: [1], why: "A negative test argues against antibody-mediated hemolysis." },
        { text: "Direct bilirubin 0.4 mg/dL (7 micromol/L)", correct: [1], why: "A low direct fraction shows the problem is unconjugated bilirubin, not cholestasis." },
        { text: "Temperature 36.9°C (98.4°F)", correct: [1], why: "A normal temperature does not suggest sepsis or add risk." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority problem in newborn jaundice",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The primary health care provider reviews the total serum bilirubin of 17.1 mg/dL (292 micromol/L) and states it is above the phototherapy threshold for her age in hours and her risk factors. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A bilirubin above the phototherapy threshold with poor feeding and falling weight points to worsening hyperbilirubinemia. Poor intake keeps bilirubin in the gut, where it is reabsorbed. The negative antiglobulin test and a hemoglobin of 17.5 g/dL (175 g/L) do not suggest hemolysis. The low direct bilirubin argues against cholestasis. A temperature of 36.9°C (98.4°F) does not suggest cold stress.",
        sources: [SRC.bili, SRC.wong, { body: "Ng E, Altit G, Joynt C, Radziminski N, Narvey M. Canadian Paediatric Society, Fetus and Newborn Committee", work: "Guidelines for detection and management of hyperbilirubinemia in term and late preterm newborns (35 weeks or more gestational age). Paediatrics and Child Health 31(5):496", year: 2025, url: "https://cps.ca/en/documents/position/hyperbilirubinemia-newborns" }],
        canada:
          "The Canadian Paediatric Society 2025 guideline adopts the AAP 2022 phototherapy thresholds, converted to micromol/L. Canadian labs report bilirubin only in micromol/L, so this level reads 292 micromol/L.",
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The newborn is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "hemolytic disease of the newborn", why: "The antiglobulin test is negative and the hemoglobin is 17.5 g/dL (175 g/L)." },
            { text: "worsening hyperbilirubinemia", why: "A level above threshold with poor intake predicts a further rise without treatment." },
            { text: "cholestatic liver disease", why: "The direct bilirubin is low, so the rise is not conjugated bilirubin." },
            { text: "neonatal cold stress", why: "The temperature is 36.9°C (98.4°F), which is normal." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a negative antiglobulin test", why: "A negative test lowers, not raises, the concern for hemolysis." },
            { text: "a heart rate of 142/minute", why: "This heart rate is in the normal newborn range." },
            { text: "a soft, flat fontanelle", why: "A soft, flat fontanelle is a normal finding." },
            { text: "a bilirubin above threshold", why: "A level above the treatment threshold shows the bilirubin is already high." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "a dry umbilical stump", why: "A dry stump shows normal healing and is unrelated to bilirubin." },
            { text: "poor feeding with weight loss", why: "Low intake slows bilirubin excretion and drives the level up." },
            { text: "a normal temperature", why: "A normal temperature does not support any of the listed problems." },
            { text: "a low direct bilirubin", why: "A low direct fraction rules against cholestasis and does not show a rising risk." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Feeding plan during phototherapy",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "Phototherapy is prescribed. The provider also prescribes expressed breast milk or formula as a supplement after each breastfeeding. Which measures should the nurse include in the feeding plan? Select all that apply.",
        rationale:
          "Frequent effective feeds move bilirubin out in stool. Offering the breast 8 to 12 times in 24 hours and waking her after 3 hours supports intake. The prescribed supplement adds volume while her intake is low. Counting wet diapers and stools shows whether intake is enough. Water or dextrose water does not lower bilirubin and can displace milk. Breastfeeding continues during phototherapy. Short breaks from the lights for feeds are acceptable.",
        sources: [SRC.bili, SRC.lowdermilk],
      }),
      kind: "sata",
      options: [
        { text: "Offer the breast 8 to 12 times in 24 hours", why: "Frequent feeds increase stooling and bilirubin excretion." },
        { text: "Give sterile water between the breastfeeds", why: "Water does not lower bilirubin and can reduce milk intake." },
        { text: "Wake her to feed if 3 hours have passed", why: "A sleepy jaundiced newborn may not wake on her own to feed." },
        { text: "Hold breastfeeding until the bilirubin falls", why: "Breastfeeding continues during phototherapy and supports excretion." },
        { text: "Give the prescribed supplement after feeds", why: "The supplement adds volume while breastfeeding intake is low." },
        { text: "Record each wet diaper and each stool", why: "Output counts show whether intake is adequate." },
        { text: "Keep her under the lights for every feeding", why: "Short breaks from the lights for breastfeeding are acceptable." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Safety during phototherapy",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The nurse prepares to place the newborn under the phototherapy lights. Which action should the nurse take?",
        rationale:
          "Phototherapy light can injure the retina, so opaque eye shields go on before the lights. The eyes are checked for irritation when the shields come off for feeds. Lotions and oils can cause burns under the lights. Clothing and blankets block light from the skin. The newborn wears only a diaper so the most skin is exposed.",
        sources: [SRC.wong, SRC.bili],
      }),
      kind: "mc",
      options: [
        { text: "Apply a thin layer of lotion to her skin", why: "Lotion under phototherapy lights can cause skin burns." },
        { text: "Dress her in a light shirt and a diaper", why: "A shirt blocks light from the skin and makes treatment less effective." },
        { text: "Place a light blanket over her legs", why: "A blanket blocks light from the skin it covers." },
        { text: "Cover her eyes with opaque eye shields", why: "Eye shields protect the retina from the phototherapy light." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Discharge teaching after phototherapy",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "After 18 hours of phototherapy the total serum bilirubin is 12.4 mg/dL (212 micromol/L) and phototherapy is stopped. She is feeding well. The nurse evaluates the parents' understanding of discharge teaching. Which two statements show understanding? Select two.",
        rationale:
          "Bilirubin can rise again after phototherapy stops, so a follow-up level is planned. Fewer wet diapers can mean poor intake, which lets bilirubin rise, so the parents should call. Sunlight through a window is not a safe or reliable treatment. Water between feeds does not lower bilirubin. Breastfeeding supports excretion, so switching to formula is not needed. Jaundice that spreads to the legs is a sign to call, not an expected change.",
        sources: [SRC.bili, SRC.lowdermilk],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"Placing her by a sunny window will clear the yellow.\"", why: "Window sunlight is not a safe or reliable treatment for jaundice." },
        { text: "\"We will bring her in for the bilirubin check tomorrow.\"", why: "A follow-up level detects a rebound rise after phototherapy." },
        { text: "\"Giving her water between feeds will flush it out.\"", why: "Water does not lower bilirubin and can replace needed milk." },
        { text: "\"Yellow skin that spreads to her legs is expected.\"", why: "Spreading jaundice suggests a rising level and needs a call." },
        { text: "\"We will call if she has fewer wet diapers.\"", why: "Fewer wet diapers can signal poor intake and a rising bilirubin." },
        { text: "\"We will switch to formula so it does not come back.\"", why: "Breastfeeding continues and supports bilirubin excretion." },
      ],
      correct: [1, 4],
    },
  ],
};
