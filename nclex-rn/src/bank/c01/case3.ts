import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c01-3";

/** Case 3. Pediatric emergency department and unit. Toddler with vomiting and diarrhea. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "A Toddler Who Will Not Keep Fluids Down",
  intro:
    "A 3-year-old boy is brought to the pediatric emergency department by his mother at 1400. He has had vomiting and watery diarrhea for 2 days. Two children at his child care center had the same illness last week. He has urinated once in the past 12 hours.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight today 14 kg. Weight at a clinic visit 3 weeks ago 15.2 kg.",
        "No chronic illness. Did not receive rotavirus vaccine as an infant.",
        "Toilet trained during the day. Speaks in short sentences.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "38.2°C (100.8°F)"],
          ["Heart rate", "158/minute"],
          ["Respiratory rate", "26/minute"],
          ["BP", "88/54 mmHg"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Sodium", "138 mEq/L (138 mmol/L)", "135 to 145 mEq/L"],
          ["Potassium", "3.4 mEq/L (3.4 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Bicarbonate", "16 mEq/L (16 mmol/L)", "20 to 28 mEq/L"],
          ["Glucose", "82 mg/dL (4.6 mmol/L)", "60 to 100 mg/dL"],
          ["Stool rotavirus antigen", "Positive", "Negative"],
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
        topic: "Signs of dehydration in a toddler",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The triage nurse writes the note below after assessing the child. Click to highlight the findings that require follow-up.",
        rationale:
          "Sleepiness, dry sticky mucous membranes, crying without tears, sunken eyes and a capillary refill of 3 seconds are signs of significant fluid loss. Reduced alertness also suggests poor brain perfusion. Clinging to his mother and saying no to every question are expected behaviors at 3 years. A soft abdomen with active bowel sounds fits viral gastroenteritis.",
        sources: [SRC.age, SRC.wong],
      }),
      kind: "highlight",
      passage:
        "[[Sleepy but wakes to his mother's voice]]. [[Clings to his mother and cries when approached]]. [[Mucous membranes dry and sticky]]. [[Cries without tears]]. [[Eyes appear sunken]]. [[Abdomen soft with active bowel sounds]]. [[Capillary refill 3 seconds]]. [[Says \"no\" to most questions]].",
      spans: [
        { text: "Sleepy but wakes to his mother's voice", why: "Reduced alertness in a sick toddler can signal poor perfusion." },
        { text: "Clings to his mother and cries when approached", why: "Fear of strangers and clinging are expected at this age." },
        { text: "Mucous membranes dry and sticky", why: "Dry membranes reflect low body water." },
        { text: "Cries without tears", why: "Absent tears are a sign of significant dehydration." },
        { text: "Eyes appear sunken", why: "Sunken eyes reflect loss of tissue fluid." },
        { text: "Abdomen soft with active bowel sounds", why: "Active bowel sounds are expected with gastroenteritis." },
        { text: "Capillary refill 3 seconds", why: "A capillary refill over 2 seconds shows reduced perfusion." },
        { text: "Says \"no\" to most questions", why: "Saying no is expected toddler behavior." },
      ],
      correct: [0, 2, 3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Expected findings for a toddler",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse compares the child's findings with what is expected for a 3-year-old. For each finding, specify whether it is expected for age or a sign of dehydration.",
        rationale:
          "A heart rate of 158/minute is above the awake range for a child of 3 years. The weight fell from 15.2 kg to 14 kg in 3 weeks. One void in 12 hours shows low urine output. A bicarbonate of 16 mEq/L reflects bicarbonate lost in stool and poor perfusion. A respiratory rate of 26/minute is within the range for age. Clinging, crying at strangers and short sentences are expected at 3 years.",
        refs: ["Awake heart rate for a child aged 3 to 5 years is 80 to 120/minute.", "Respiratory rate for a child aged 3 to 5 years is 20 to 28/minute."],
        sources: [SRC.pals, SRC.wong, SRC.age],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected for age", "Sign of dehydration"],
      rows: [
        { text: "Heart rate 158/minute", correct: [1], why: "This is above the awake range of 80 to 120/minute at 3 years." },
        { text: "Respiratory rate 26/minute", correct: [0], why: "This is within the range of 20 to 28/minute at 3 years." },
        { text: "Weight 14 kg, down from 15.2 kg", correct: [1], why: "Rapid weight loss in a sick child reflects fluid loss." },
        { text: "One void in the past 12 hours", correct: [1], why: "Low urine output shows the kidneys conserving water." },
        { text: "Cries and clings to his mother when approached", correct: [0], why: "Fear of strangers and clinging are normal at 3 years." },
        { text: "Speaks in short sentences", correct: [0], why: "Short sentences are expected speech at 3 years." },
        { text: "Bicarbonate 16 mEq/L (16 mmol/L)", correct: [1], why: "Diarrhea loses bicarbonate and poor perfusion adds acid." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Recognizing early shock in a child",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The child vomits again after 10 mL of oral rehydration solution. He is now harder to wake. Capillary refill is 4 seconds. Which condition is the nurse's priority concern?",
        rationale:
          "A capillary refill of 4 seconds, harder waking and a heart rate of 158/minute show falling perfusion from fluid loss. The BP of 88/54 mmHg is still held up by compensation, and a drop is a late sign in children. The sodium of 138 mEq/L is normal. The potassium of 3.4 mEq/L is low, not high. There is no seizure activity.",
        refs: ["Capillary refill longer than 2 seconds is a sign of poor perfusion."],
        sources: [SRC.age, SRC.pals],
      }),
      kind: "mc",
      options: [
        { text: "Hypovolemic shock", why: "Slow capillary refill, lethargy and tachycardia show failing perfusion." },
        { text: "Hypernatremic dehydration", why: "The sodium is 138 mEq/L, which is within the reference range." },
        { text: "Hyperkalemia", why: "The potassium is 3.4 mEq/L, which is low rather than high." },
        { text: "A febrile seizure", why: "The chart describes no seizure activity." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Precautions for rotavirus",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 2,
        stem: "The child is admitted to the pediatric unit with rotavirus gastroenteritis. Which infection control measures should the nurse plan? Select all that apply.",
        rationale:
          "Rotavirus spreads by the fecal oral route and on surfaces. Contact precautions add a gown and gloves for room entry and dedicated equipment. Soiled clothing and linens are removed promptly. Precautions last for the duration of illness because shedding continues after the fever settles. A negative pressure room and an N95 respirator are for airborne spread.",
        sources: [SRC.isolation, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings, Part C", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/part-c.html" }],
        canada: "The Public Health Agency of Canada guideline on routine practices and additional precautions also lists contact precautions for rotavirus for the duration of symptoms. Canadian settings say routine practices where US sources say standard precautions.",
      }),
      kind: "sata",
      options: [
        { text: "Wear a gown and gloves to enter the room", why: "Contact precautions block spread from stool on skin and surfaces." },
        { text: "Place the child in a negative pressure room", why: "Negative pressure is for airborne infections, not rotavirus." },
        { text: "Keep a dedicated stethoscope in the room", why: "Dedicated equipment stops spread on shared surfaces." },
        { text: "Wear a fit-tested N95 respirator", why: "An N95 respirator is for airborne spread, not rotavirus." },
        { text: "Change soiled clothing and linens promptly", why: "Prompt removal of soiled items limits environmental spread." },
        { text: "Remove precautions once the fever resolves", why: "Shedding continues after fever ends. Precautions last for the illness." },
        { text: "Continue precautions for the duration of illness", why: "Rotavirus needs contact precautions until the illness ends." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based fluid bolus",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The primary health care provider prescribes a 0.9% sodium chloride bolus of 20 mL/kg IV over 20 minutes. The child weighs 14 kg. How many mL should the nurse infuse?",
        rationale:
          "The prescription is 20 mL/kg and the child weighs 14 kg. Multiplying 20 mL/kg by 14 kg gives 280 mL. The nurse gives the bolus over 20 minutes. Heart rate, capillary refill and alertness are checked after the bolus to decide whether another is needed.",
        calc: { expr: "20 * 14", answer: 280, unit: "mL", round: 0, steps: ["20 * 14 = 280"] },
        sources: [SRC.age, SRC.pals],
      }),
      kind: "mc",
      options: [
        { text: "28 mL", why: "This is one tenth of the correct volume. It comes from a misplaced decimal." },
        { text: "70 mL", why: "This is one quarter of the correct volume." },
        { text: "140 mL", why: "This is half the correct volume. It uses 10 mL/kg." },
        { text: "280 mL", why: "20 mL/kg multiplied by 14 kg gives 280 mL." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Oral rehydration teaching at discharge",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "The next day the child drinks well and is ready for discharge. The nurse teaches the mother about fluids and food at home. For each statement by the mother, specify whether it shows understanding or needs further teaching.",
        rationale:
          "Small, frequent sips of oral rehydration solution are tolerated best. The child returns to his usual foods as soon as he wants them. Hand hygiene after toileting limits spread. Harder waking is a warning sign that needs prompt care. Apple juice is high in sugar and can worsen diarrhea. Clear liquids alone for 2 days give poor nutrition and delay recovery.",
        sources: [SRC.age],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I will give small sips of the rehydration solution often.\"", correct: [0], why: "Small, frequent amounts are best tolerated after vomiting." },
        { text: "\"I will give apple juice to replace his fluids.\"", correct: [1], why: "Sugary juice draws water into the bowel and can worsen diarrhea." },
        { text: "\"He can eat his usual foods when he wants them.\"", correct: [0], why: "Early return to a usual diet shortens the illness." },
        { text: "\"I will keep him on clear liquids for 2 days.\"", correct: [1], why: "Restricting food this long gives poor nutrition." },
        { text: "\"I will wash my hands after helping him in the bathroom.\"", correct: [0], why: "Hand hygiene limits fecal oral spread to the family." },
        { text: "\"I will call if he becomes hard to wake.\"", correct: [0], why: "Reduced alertness is a warning sign of dehydration." },
      ],
    },
  ],
};
