import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c16-5";

/** Case 5. Emergency department. Older woman on warfarin who struck her head in a fall. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Slip on the Ice Before Breakfast",
  intro:
    "A 72-year-old woman slipped on ice outside her home at 0730 and struck the back of her head. Her son drove her to the emergency department, where she arrived at 0840. She takes warfarin for atrial fibrillation. She weighs 84 kg.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Atrial fibrillation. Warfarin 5 mg by mouth daily, last dose at 1800 yesterday.",
        "Hypertension. Lives with her adult son. Walked without an aid before the fall.",
      ].join("\n"),
    },
    {
      title: "Nurses' Notes",
      text: [
        "0845: Alert. Glasgow Coma Scale score of 15. Pupils 3 mm, equal and briskly reactive.",
        "0845: Moves all four limbs with equal strength. Headache 4 of 10. Swelling over the back of the scalp, 3 cm.",
        "0845: Vomited once on the way in. Cannot remember slipping or falling. Son says she hit her head on the step.",
      ].join("\n"),
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["INR", "3.4", "0.8 to 1.1 without warfarin"],
          ["Hemoglobin", "12.8 g/dL (128 g/L)", "12.0 to 15.5 g/dL"],
          ["Platelets", "210 000/mm3", "150 000 to 400 000/mm3"],
          ["Glucose", "104 mg/dL (5.8 mmol/L)", "70 to 140 mg/dL, random"],
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
        topic: "Head injury cues in an anticoagulated client",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the 0845 assessment and her history. Which findings require follow-up? Select all that apply.",
        rationale:
          "Vomiting and loss of memory for the fall are signs of brain injury after a blow to the head. Warfarin raises the risk of bleeding inside the skull, even with a normal first exam. NICE advises CT imaging for these clients. A score of 15, equal reactive pupils and equal strength are normal findings.",
        sources: [SRC.nice, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Glasgow Coma Scale score of 15", why: "A score of 15 is the highest score and is normal." },
        { text: "Vomited once on the way in", why: "Vomiting after a head injury can signal brain injury." },
        { text: "Pupils equal and briskly reactive", why: "Equal, brisk pupils are a normal finding." },
        { text: "No memory of the fall", why: "Amnesia for the event is a sign of brain injury." },
        { text: "Equal strength in all four limbs", why: "Equal strength shows no focal motor deficit." },
        { text: "Takes warfarin each day", why: "Anticoagulation raises the risk of bleeding inside the skull." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Bleeding risk from laboratory data",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the laboratory results and history. For each finding, specify whether it raises concern for bleeding inside the skull or does not raise concern.",
        rationale:
          "An INR of 3.4 is above the usual range for atrial fibrillation, so clotting is slower than intended. Age over 65 raises the risk of bleeding inside the skull after a head injury. The platelet count and hemoglobin are within range. A glucose of 104 mg/dL (5.8 mmol/L) is normal.",
        refs: ["The usual INR target on warfarin for atrial fibrillation is 2.0 to 3.0.", "Age 65 or older is a risk factor for intracranial injury after a head injury."],
        sources: [SRC.nice, SRC.tomaselli, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report SI units only, so hemoglobin reads 128 g/L, platelets 210 x 10^9/L and glucose 5.8 mmol/L. All three fall inside the Medical Council of Canada ranges.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises concern", "Does not raise concern"],
      rows: [
        { text: "INR 3.4", correct: [0], why: "An INR above 3.0 means clotting is slower than the target range." },
        { text: "Platelets 210 000/mm3", correct: [1], why: "This count is within the reference range." },
        { text: "Age 72", correct: [0], why: "Older adults bleed inside the skull more readily after a head injury." },
        { text: "Hemoglobin 12.8 g/dL (128 g/L)", correct: [1], why: "This hemoglobin is within the reference range." },
        { text: "Glucose 104 mg/dL (5.8 mmol/L)", correct: [1], why: "A normal glucose does not affect bleeding risk." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Neurologic decline after a head injury",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "A CT scan at 0915 shows a small acute right subdural hematoma. The nurse reviews the neurologic checks at 1030. Complete the following sentence by choosing from the lists of options.",
        tabs: [
          {
            title: "Neurologic Checks",
            table: {
              head: ["Measure", "0845", "0930", "1030"],
              rows: [
                ["Glasgow Coma Scale", "15", "14", "12"],
                ["Right pupil", "3 mm, brisk", "3 mm, brisk", "5 mm, sluggish"],
                ["Left pupil", "3 mm, brisk", "3 mm, brisk", "3 mm, brisk"],
                ["BP (mmHg)", "152/88", "160/84", "184/82"],
                ["Heart rate (/minute)", "78", "70", "54"],
                ["Headache (0 to 10)", "4", "6", "8"],
              ],
            },
          },
        ],
        rationale:
          "The GCS falls from 15 to 12 over less than 2 hours. The right pupil is now 5 mm and sluggish on the side of the bleed. A widening pulse pressure with a heart rate that falls to 54/minute adds to the picture. These point to a growing hematoma raising intracranial pressure. Shock would lower the BP. A glucose of 104 mg/dL (5.8 mmol/L) is normal.",
        sources: [SRC.brunner],
      }),
      kind: "cloze",
      template: "The client is most likely developing {0} as evidenced by {1} and {2}.",
      scoring: "triad",
      blanks: [
        {
          options: [
            { text: "hypovolemic shock from bleeding", why: "Shock lowers the BP. Her BP is rising." },
            { text: "a low blood glucose level", why: "Her glucose of 104 mg/dL (5.8 mmol/L) is normal." },
            { text: "rising intracranial pressure", why: "Falling consciousness, a dilating pupil and a slowing pulse fit rising pressure." },
            { text: "a severe migraine headache", why: "Migraine does not lower the GCS or dilate one pupil." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a larger, sluggish right pupil", why: "Pressure on the third cranial nerve dilates the pupil on the side of the bleed." },
            { text: "a normal hemoglobin", why: "A normal hemoglobin does not point to raised pressure." },
            { text: "her history of hypertension", why: "Past hypertension does not explain the change since 0845." },
            { text: "the scalp swelling", why: "Scalp swelling lies outside the skull and does not explain the neurologic decline." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "a platelet count in range", why: "A normal platelet count does not point to raised pressure." },
            { text: "equal limb strength at 0845", why: "An earlier normal finding does not show decline." },
            { text: "a GCS fall from 15 to 12", why: "A drop in the GCS is an early sign of rising pressure." },
            { text: "her warfarin dose at 1800", why: "Warfarin explains the bleed risk but is not a sign of rising pressure." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Warfarin reversal agents",
        cjmm: "generate",
        difficulty: 3,
        stem: "The primary health care provider plans urgent reversal of warfarin. For each medication, specify whether the nurse should anticipate it or not anticipate it.",
        rationale:
          "Bleeding inside the skull on warfarin is a major bleed. The plan is a four-factor prothrombin complex concentrate with IV vitamin K. The concentrate replaces clotting factors within minutes. Vitamin K keeps the effect going after the concentrate wears off. Protamine reverses heparin. Idarucizumab reverses dabigatran. Andexanet alfa reverses factor Xa inhibitors. Warfarin is held.",
        sources: [SRC.tomaselli, SRC.kcentra, { body: "National Advisory Committee on Blood and Blood Products", work: "Recommendations for Use of Prothrombin Complex Concentrates in Canada", year: 2022, url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" }],
        canada: "The National Advisory Committee on Blood and Blood Products lists Octaplex and Beriplex P/N as the prothrombin complex concentrates available in Canada. It advises giving IV vitamin K at the same time.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Anticipate", "Do not anticipate"],
      rows: [
        { text: "Vitamin K IV by slow infusion", correct: [0], why: "IV vitamin K lets the liver make new clotting factors." },
        { text: "Protamine sulfate IV", correct: [1], why: "Protamine reverses heparin, not warfarin." },
        { text: "Four-factor prothrombin complex concentrate IV", correct: [0], why: "The concentrate replaces the factors warfarin depletes and acts quickly." },
        { text: "Idarucizumab IV", correct: [1], why: "Idarucizumab reverses dabigatran only." },
        { text: "Andexanet alfa IV", correct: [1], why: "Andexanet alfa reverses factor Xa inhibitors such as apixaban." },
        { text: "Warfarin 5 mg by mouth at 1800", correct: [1], why: "Warfarin is held during a major bleed." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based prothrombin complex dose",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 4,
        stem: "The prescription reads four-factor prothrombin complex concentrate 25 units/kg IV once, with vitamin K 10 mg IV. Her INR is 3.4 and she weighs 84 kg. What dose of the concentrate should the nurse prepare?",
        rationale:
          "The prescribed dose is 25 units/kg and she weighs 84 kg. Multiplying 25 units/kg by 84 kg gives 2100 units. This is below the 2500 unit maximum for an INR of 2 to less than 4.",
        refs: ["Dosing by INR: 2 to less than 4, 25 units/kg, maximum 2500 units. 4 to 6, 35 units/kg, maximum 3500 units. Above 6, 50 units/kg, maximum 5000 units."],
        calc: { expr: "25 * 84", answer: 2100, unit: "units", round: 0, steps: ["25 * 84 = 2100"] },
        sources: [SRC.kcentra, SRC.tomaselli, { body: "National Advisory Committee on Blood and Blood Products", work: "Recommendations for Use of Prothrombin Complex Concentrates in Canada", year: 2022, url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" }],
        canada: "Canada uses Octaplex or Beriplex P/N, not Kcentra. National Advisory Committee sample protocols dose by weight, by INR or as a standard dose, so dosing follows the hospital protocol and the prescription.",
      }),
      kind: "mc",
      options: [
        { text: "2100 units", why: "25 units/kg for 84 kg gives 2100 units." },
        { text: "2500 units", why: "This is the maximum for her INR range. Her weight-based dose is lower." },
        { text: "2940 units", why: "This uses 35 units/kg, the dose for an INR of 4 to 6." },
        { text: "4200 units", why: "This uses 50 units/kg, the dose for an INR above 6." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Fall prevention teaching after a head injury",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Six days later the client is ready to go home with her son. The nurse reviews fall prevention and warning signs. Which three statements by the client show understanding? Select three.",
        rationale:
          "Shoes with good grip and salt or sand on the steps lower the risk of slipping on ice. A medicine review looks for drugs that raise fall risk. A throw rug at the door is a trip hazard. A worse headache needs urgent review, not a nap. Avoiding walking outside leads to weakness and more falls.",
        sources: [SRC.falls, SRC.nice],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I will lie down for a nap if my headache gets worse.\"", why: "A worsening headache after a head injury needs urgent review." },
        { text: "\"I will wear shoes with good grip on icy days.\"", why: "Grip on the soles lowers the risk of slipping on ice." },
        { text: "\"I will put a throw rug at the door to catch the snow.\"", why: "A loose rug is a trip hazard at the entry." },
        { text: "\"I will spread salt or sand on the steps.\"", why: "Salt or sand lowers the risk of slipping on icy steps." },
        { text: "\"I will stop walking outside so that I cannot fall.\"", why: "Avoiding activity leads to weakness and raises fall risk." },
        { text: "\"I will ask for a review of my medicines.\"", why: "A medicine review looks for drugs that raise fall risk." },
      ],
      correct: [1, 3, 5],
    },
  ],
};
