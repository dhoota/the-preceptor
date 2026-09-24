import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c16-4";

/** Case 4. Long-term care. Resident after a stroke with a deep sacral wound and weight loss. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Weekly Wound Round in Long-Term Care",
  intro:
    "A 78-year-old man has lived in a long-term care facility since a stroke 1 year ago left him with left-sided weakness. Two weeks ago staff found a stage 3 pressure injury over his sacrum. The nurse reviews his care at the weekly wound round.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Right hemisphere stroke with left hemiparesis. Sits in a wheelchair for most of the day. Needs one person to help with transfers.",
        "Type 2 diabetes, treated with insulin glargine 14 units subcutaneously at bedtime.",
        "Passed a swallow screen after the stroke. Eats a regular texture diet.",
        "Feeds himself with his right hand. Staff report he tires and stops before finishing most meals.",
      ].join("\n"),
    },
    {
      title: "Weights",
      table: {
        head: ["Date", "3 months ago", "Today"],
        rows: [["Weight", "71 kg", "64 kg"]],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Glucose, fasting", "186 mg/dL (10.3 mmol/L)", "70 to 99 mg/dL"],
          ["White blood cells", "12 400/mm3", "5000 to 10 000/mm3"],
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
        topic: "Signs of a worsening deep pressure wound",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At the wound round the nurse takes down the old sacral dressing and charts the findings. Click to highlight the findings that require follow-up.",
        rationale:
          "A wound that has grown since last week is not healing. Thick yellow-green drainage, a foul odor and spreading warm redness point to infection. A temperature of 37.9°C in an older adult, with a white cell count of 12 400/mm3, supports that. Visible fat with no bone or tendon matches stage 3. Mild pain during the change is expected.",
        sources: [SRC.edsberg, SRC.epuap, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report the white cell count in SI units only, so it reads 12.4 x 10^9/L. The Medical Council of Canada range is 3.5 to 10.5 x 10^9/L.",
      }),
      kind: "highlight",
      passage:
        "Sacral wound: [[4.5 cm by 3.5 cm, up from 4 cm by 3 cm last week]]. [[Subcutaneous fat visible in the wound bed]]. [[No bone, tendon or muscle visible]]. [[Thick yellow-green drainage, moderate amount]]. [[Foul odor after cleansing]]. [[Skin red and warm 2 cm beyond the wound edge]]. [[Pain 2 of 10 during the dressing change]]. [[Temperature 37.9°C (100.2°F)]]. [[Heels intact and off-loaded on pillows]].",
      spans: [
        { text: "4.5 cm by 3.5 cm, up from 4 cm by 3 cm last week", why: "A wound that grows in a week is getting worse." },
        { text: "Subcutaneous fat visible in the wound bed", why: "Visible fat defines a stage 3 injury and is not a new change." },
        { text: "No bone, tendon or muscle visible", why: "The absence of deeper structures confirms the injury is still stage 3." },
        { text: "Thick yellow-green drainage, moderate amount", why: "Purulent drainage suggests wound infection." },
        { text: "Foul odor after cleansing", why: "Odor that remains after cleansing suggests infection." },
        { text: "Skin red and warm 2 cm beyond the wound edge", why: "Spreading warmth and redness suggest cellulitis around the wound." },
        { text: "Pain 2 of 10 during the dressing change", why: "Mild pain during a dressing change is expected." },
        { text: "Temperature 37.9°C (100.2°F)", why: "A raised temperature in an older adult can signal infection." },
        { text: "Heels intact and off-loaded on pillows", why: "Intact, off-loaded heels show that prevention is working." },
      ],
      correct: [0, 3, 4, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Percent weight loss in a resident",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The client weighed 71 kg 3 months ago and weighs 64 kg today. What percentage of his body weight has he lost over the last 3 months?",
        rationale:
          "He weighed 71 kg 3 months ago and weighs 64 kg today. The loss is 7 kg. Dividing 7 kg by the starting weight of 71 kg and multiplying by 100 gives 9.9%. A loss above 7.5% in 3 months is severe. Severe weight loss slows wound healing.",
        refs: ["In chronic illness, weight loss of more than 7.5% in 3 months is severe."],
        calc: { expr: "(71 - 64) / 71 * 100", answer: 9.859154929577465, unit: "%", round: 1, steps: ["71 - 64 = 7", "7 / 71 * 100 = 9.9"] },
        sources: [SRC.white, SRC.epuap],
      }),
      kind: "mc",
      options: [
        { text: "7.0%", why: "This is the loss in kg, not a share of body weight." },
        { text: "9.9%", why: "7 kg lost from a starting weight of 71 kg is 9.9%." },
        { text: "10.9%", why: "This divides the loss by the current weight of 64 kg, not the starting weight." },
        { text: "90.1%", why: "This is the share of the starting weight that remains." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "What to report first from a wound round",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "The nurse prepares to call the primary health care provider about the wound round findings. Complete the sentence by dragging the best choice into each blank.",
        rationale:
          "Weight loss, a high glucose and weakness all slow healing. A spreading infection is the most urgent threat because it can reach bone or the bloodstream. Foul, yellow-green drainage with spreading redness and a raised temperature is the clearest sign. The weight loss needs a plan but is a slower threat.",
        sources: [SRC.epuap],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The nurse should report {0} first, as shown by {1}.",
      targets: ["Problem", "Evidence"],
      tokens: [
        { text: "a possible wound infection", why: "Infection can spread to bone or blood and needs prompt treatment." },
        { text: "a severe loss of body weight", why: "Weight loss needs a plan but is a slower threat than infection." },
        { text: "a raised fasting blood glucose", why: "A raised glucose slows healing but is not the most urgent problem." },
        { text: "a 7 kg drop in body weight", why: "This supports malnutrition, not the urgent problem." },
        { text: "foul, yellow-green drainage", why: "Purulent, foul drainage is a direct sign of wound infection." },
        { text: "his long-standing left-sided weakness", why: "His weakness is long-standing and unchanged." },
      ],
      correct: [0, 4],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Team referrals for wound healing",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The primary health care provider starts treatment for the infection. The nurse plans referrals to support healing. Which referrals should the nurse request? Select all that apply.",
        rationale:
          "A dietitian can set protein and energy goals for a client with severe weight loss and a wound. An occupational therapist can supply adapted utensils because he tires while eating with one hand. A wound care nurse guides care of a deep wound that is getting worse. He passed a swallow screen, has no breathing problem and has no terminal illness.",
        refs: ["Adults with a pressure injury and malnutrition need 30 to 35 kcal/kg and 1.25 to 1.5 g/kg of protein each day."],
        sources: [SRC.epuap, SRC.white],
      }),
      kind: "sata",
      options: [
        { text: "Speech-language pathologist", why: "He passed a swallow screen and eats a regular diet." },
        { text: "Registered dietitian", why: "A dietitian sets protein and energy goals to support healing." },
        { text: "Respiratory therapist", why: "No breathing problem is described." },
        { text: "Occupational therapist", why: "Adapted utensils can help him finish meals with one hand." },
        { text: "Hospice care team", why: "He has no terminal illness. His care aims at healing the wound." },
        { text: "Wound care nurse", why: "A deep wound that is getting worse needs specialist guidance." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Assigning wound and nutrition tasks",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse assigns care for the evening shift. Drag the team member who should carry out each task.",
        rationale:
          "Assessing a wound and judging change needs the registered nurse. A licensed practical nurse can give a scheduled insulin dose to a stable resident. Assistive personnel can turn him and record how much he eats. The unit secretary and housekeeping staff do not provide direct care.",
        sources: [SRC.delegation, { body: "Canadian Council for Practical Nurse Regulators", work: "Become a LPN/RPN", year: 2026, url: "https://ccpnr.ca/become-a-lpn-rpn/" }],
        canada: "In Canada the practical nurse is an RPN in Ontario and an LPN elsewhere. Assignment rules come from each provincial nursing regulator and vary by province.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Assess the wound and judge whether it has changed", "Give the bedtime insulin glargine", "Turn him every 2 hours and record meal intake"],
      tokens: [
        { text: "Unit secretary", why: "A unit secretary does not provide direct client care." },
        { text: "Registered nurse", why: "Assessment and clinical judgment stay with the registered nurse." },
        { text: "Housekeeping staff", why: "Housekeeping staff do not provide direct client care." },
        { text: "Licensed practical nurse", why: "Giving a scheduled medication to a stable resident is within practical nurse scope." },
        { text: "Assistive personnel", why: "Turning and recording intake are routine tasks with a set method." },
      ],
      correct: [1, 3, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "RRP",
        topic: "Judging healing of a deep pressure wound",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "Four weeks later the nurse compares the wound record with the first round. For each finding, specify whether it shows progress or does not show progress.",
        tabs: [
          {
            title: "Wound Record",
            table: {
              head: ["Measure", "Week 0", "Week 4"],
              rows: [
                ["Size", "4.5 cm by 3.5 cm", "3.0 cm by 2.2 cm"],
                ["Depth", "1.5 cm", "0.8 cm"],
                ["Drainage", "Thick yellow-green, moderate", "Scant, clear yellow"],
                ["Wound bed", "Subcutaneous fat visible", "Beefy red granulation tissue"],
                ["Wound edge", "Flat", "Rolled, dark edge along the upper margin"],
                ["Weight", "64 kg", "65.5 kg"],
                ["Left heel", "Intact", "Purple area, 2 cm, intact skin"],
              ],
            },
          },
        ],
        rationale:
          "Smaller size and depth, scant clear drainage and red granulation tissue show healing. A weight gain from 64 kg to 65.5 kg shows better nutrition. A rolled edge stops new skin from crossing the wound and needs treatment. A purple area on intact skin of the heel is a new deep tissue injury.",
        sources: [SRC.edsberg, SRC.epuap],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows progress", "Does not show progress"],
      rows: [
        { text: "Size 3.0 cm by 2.2 cm", correct: [0], why: "The wound is smaller than the 4.5 cm by 3.5 cm first measured." },
        { text: "Depth 0.8 cm", correct: [0], why: "The wound is shallower than the first depth of 1.5 cm." },
        { text: "Scant, clear yellow drainage", correct: [0], why: "Scant serous drainage replaces the purulent drainage of week 0." },
        { text: "Beefy red granulation tissue", correct: [0], why: "Red granulation tissue shows the wound is filling in." },
        { text: "Rolled, dark edge along the upper margin", correct: [1], why: "A rolled edge blocks new skin from moving across the wound." },
        { text: "Weight 65.5 kg", correct: [0], why: "A gain from 64 kg shows his intake has improved." },
        { text: "Purple area on the left heel", correct: [1], why: "Purple discoloration over intact skin is a new deep tissue injury." },
      ],
    },
  ],
};
