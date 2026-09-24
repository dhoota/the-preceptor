import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c10-5";

/** Case 5. Pediatric unit. School-age child with a new diagnosis of type 1 diabetes. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Thirst and Bedwetting in a Grade 4 Student",
  intro:
    "A 9-year-old boy in grade 4 is admitted to the pediatric unit. For 3 weeks he has been thirsty, has started wetting the bed again and has lost weight. His parents are worried about managing his care at home and at school.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 26 kg, down from 28 kg at a checkup 2 months ago.",
        "No past illnesses. No medications.",
        "Lives with both parents and a 6-year-old brother.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1500"],
        rows: [
          ["Temperature", "36.7°C (98.1°F)"],
          ["Heart rate", "96/minute"],
          ["Respiratory rate", "20/minute"],
          ["BP", "102/64 mmHg"],
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
        topic: "Admission results in new childhood diabetes",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse reviews the admission laboratory results and assessment. Click to highlight the findings that require follow-up.",
        refs: ["Diabetic ketoacidosis in children requires glucose above 200 mg/dL (11 mmol/L), venous pH below 7.3 or bicarbonate below 18 mmol/L, and ketonemia or ketonuria."],
        rationale:
          "A glucose of 386 mg/dL (21.4 mmol/L) with glucose in the urine confirms marked hyperglycemia. An A1C of 11.2% shows high glucose over the past months. Small urine ketones show fat breakdown from lack of insulin. Insulin should start promptly to stop ketones rising. A venous pH of 7.34 and a bicarbonate of 20 mEq/L (20 mmol/L) do not meet the criteria for ketoacidosis. The potassium and his mental status are normal.",
        sources: [SRC.ispadDka, SRC.adaKids, { body: "Wherrett DK, Ho J, Huot C, Legault L, Nakhla M, Rosolowsky E. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Type 1 Diabetes in Children and Adolescents. Canadian Journal of Diabetes 42(Suppl 1):S234", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34" }],
        canada:
          "Canadian labs and meters report glucose only in mmol/L, so this value reads 21.4 mmol/L. The Diabetes Canada guideline for children and adolescents gives all glucose targets in mmol/L.",
      }),
      kind: "highlight",
      passage:
        "[[Glucose 386 mg/dL (21.4 mmol/L)]]. [[Venous pH 7.34]]. [[Bicarbonate 20 mEq/L (20 mmol/L)]]. [[Potassium 4.4 mEq/L (4.4 mmol/L)]]. [[A1C 11.2%]]. [[Urine glucose large]]. [[Urine ketones small]]. [[Alert, oriented and chatting with his parents]]. [[Breathing even and unlabored]].",
      spans: [
        { text: "Glucose 386 mg/dL (21.4 mmol/L)", why: "This glucose is far above normal and confirms marked hyperglycemia." },
        { text: "Venous pH 7.34", why: "A pH of 7.34 is above the 7.3 cutoff for ketoacidosis." },
        { text: "Bicarbonate 20 mEq/L (20 mmol/L)", why: "A bicarbonate of 20 mEq/L is above the 18 mmol/L cutoff for ketoacidosis." },
        { text: "Potassium 4.4 mEq/L (4.4 mmol/L)", why: "This potassium is within the normal range." },
        { text: "A1C 11.2%", why: "An A1C of 11.2% reflects months of high glucose." },
        { text: "Urine glucose large", why: "Glucose spills into urine when blood glucose exceeds the kidney threshold." },
        { text: "Urine ketones small", why: "Ketones show fat breakdown from lack of insulin and can rise without treatment." },
        { text: "Alert, oriented and chatting with his parents", why: "A normal mental status needs no follow-up." },
        { text: "Breathing even and unlabored", why: "Even breathing shows no compensation for acidosis." },
      ],
      correct: [0, 4, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Developmental readiness for diabetes self-care",
        cjmm: "analyze",
        process: "teaching",
        difficulty: 4,
        stem: "The parents ask which diabetes tasks their son can take on. For each task, specify how a typical child in grade 4 can be involved.",
        rationale:
          "Self-care depends on development, not age alone. Most children in the upper elementary grades can tell an adult when they feel low and can carry their own supplies. They may begin giving their own insulin with supervision. They usually cannot yet adjust insulin doses from glucose readings or work out mealtime doses. An adult does those tasks.",
        sources: [SRC.school, SRC.adaKids],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Can do on his own", "Can do with adult supervision", "An adult should do"],
      rows: [
        { text: "Tell an adult when he feels shaky or sweaty", correct: [0], why: "Most children this age can report symptoms of low glucose." },
        { text: "Carry fast-acting glucose in his backpack", correct: [0], why: "Carrying his own supplies lets him treat a low anywhere in school." },
        { text: "Give his own insulin injection", correct: [1], why: "Children this age may begin to self-inject but need supervision." },
        { text: "Decide on a correction dose from his glucose", correct: [2], why: "Most children this age cannot yet adjust doses from glucose readings." },
        { text: "Calculate his mealtime insulin dose", correct: [2], why: "Dose calculation needs skills most children this age do not yet have." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priorities for discharge teaching",
        cjmm: "prioritize",
        process: "teaching",
        difficulty: 3,
        stem: "Insulin injections have started. The family has 2 days before discharge and feels overwhelmed. Complete the following sentences by dragging the options to the blanks.",
        rationale:
          "Early teaching covers the survival skills needed to be safe at home. Recognizing and treating low glucose is one of them. Topics that do not affect the first weeks at home can wait for follow-up visits. Alcohol and driving are years away for a 9-year-old. Insulin continues during illness. Special avoidance of sugar is not needed. Urine glucose testing does not guide daily care.",
        sources: [SRC.adaKids, SRC.wong],
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "A priority before discharge is teaching {0}. The nurse can delay teaching about {1} until follow-up visits.",
      targets: ["Teach before discharge", "Teach at follow-up"],
      tokens: [
        { text: "how to recognize and treat low glucose", why: "Low glucose can occur on the first day at home and needs quick treatment." },
        { text: "stopping insulin when he is ill", why: "Insulin continues during illness. Stopping it can cause ketoacidosis." },
        { text: "alcohol and driving as a teen", why: "These topics are years away and do not affect safety now." },
        { text: "avoiding all foods that contain sugar", why: "Carbohydrate is counted and matched with insulin, not avoided." },
        { text: "testing his urine for glucose each day", why: "Blood glucose or sensor readings guide care, not urine glucose." },
      ],
      correct: [0, 2],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Nutrition plan for a child with type 1 diabetes",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "The nurse and the dietitian plan nutrition teaching for the family. Which points should the plan include? Select all that apply.",
        rationale:
          "Carbohydrate counting lets the family match mealtime insulin to what he eats. A healthy family diet suits a child with diabetes. Extra carbohydrate may be needed before unplanned activity to prevent a low. He has lost 2 kg and is still growing, so calories are not cut. Special diabetic foods are not needed. Fruit is counted as carbohydrate, not banned.",
        sources: [SRC.adaKids, SRC.wong],
      }),
      kind: "sata",
      options: [
        { text: "Count the carbohydrate grams in each meal", why: "Carbohydrate counting guides the mealtime insulin dose." },
        { text: "Buy special diabetic foods and candy", why: "Special diabetic products are not needed." },
        { text: "Match mealtime insulin to the carbohydrate eaten", why: "Matching insulin to intake keeps glucose in range." },
        { text: "Cut calories to bring his weight down", why: "He has lost weight and needs enough energy to grow." },
        { text: "Plan a snack for extra activity when needed", why: "Extra carbohydrate before activity helps prevent low glucose." },
        { text: "Serve the same healthy meals as the family", why: "A healthy family diet suits a child with diabetes." },
        { text: "Avoid fruit because of its natural sugar", why: "Fruit is counted as carbohydrate and can be part of meals." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Mealtime and correction insulin dose",
        cjmm: "action",
        difficulty: 4,
        stem: "Before lunch his glucose is 240 mg/dL (13.3 mmol/L). His lunch has 60 g of carbohydrate. The prescription for insulin lispro is 1 unit per 15 g of carbohydrate plus 1 unit for every 45 mg/dL (2.5 mmol/L) above 150 mg/dL (8.3 mmol/L). How many units of insulin lispro should the nurse give?",
        rationale:
          "The meal dose is 60 g divided by 15 g per unit, which is 4 units. The glucose of 240 exceeds the target of 150 by 90. Dividing 90 by 45 gives a correction of 2 units. The total is 6 units. A second nurse checks the dose because insulin is a high-alert medication.",
        calc: { expr: "60 / 15 + (240 - 150) / 45", answer: 6, unit: "units", round: 0, steps: ["60 / 15 = 4", "240 - 150 = 90", "90 / 45 = 2", "4 + 2 = 6"] },
        sources: [SRC.adaKids, SRC.wong, { body: "Wherrett DK, Ho J, Huot C, Legault L, Nakhla M, Rosolowsky E. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Type 1 Diabetes in Children and Adolescents. Canadian Journal of Diabetes 42(Suppl 1):S234", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-34" }],
        canada:
          "Canadian meters and insulin orders use mmol/L only. The correction would read 1 unit per 2.5 mmol/L above 8.3 mmol/L, so a glucose of 13.3 mmol/L still gives 2 units.",
      }),
      kind: "mc",
      options: [
        { text: "2 units", why: "This is the correction dose alone and leaves out the meal dose." },
        { text: "4 units", why: "This covers the meal but leaves out the correction dose." },
        { text: "6 units", why: "4 units for the meal plus 2 units of correction is 6 units." },
        { text: "10 units", why: "This divides the 90 by 15 instead of 45 and overdoses the correction." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Safe handling of insulin pens at home",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse evaluates the parents' understanding of safe needle and pen handling before discharge. Which two statements show understanding? Select two.",
        rationale:
          "Used needles go into a puncture-resistant sharps container or a heavy-duty plastic container with a tight lid. Insulin pens are for one person only, even when the needle is changed, because blood can remain in the pen. Loose needles never go in household trash, recycling or the toilet. They can injure family members and waste workers.",
        sources: [SRC.sharps, SRC.pens, { body: "Health Products Stewardship Association", work: "Returning Medical Sharps", year: 2024, url: "https://healthsteward.ca/consumers/returning-medical-sharps/" }],
        canada:
          "In Canada sharps disposal varies by province. The Health Products Stewardship Association runs free take-back programs in Manitoba, Ontario, New Brunswick, Quebec and Prince Edward Island, with free containers at participating locations.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"We will put used needles in the kitchen trash.\"", why: "Loose needles in household trash can injure family and waste workers." },
        { text: "\"Used pen needles go in a hard plastic sharps container.\"", why: "A puncture-resistant container with a tight lid is the safe choice." },
        { text: "\"His brother can use his pen if we change the needle.\"", why: "Pens can hold traces of blood even after a needle change." },
        { text: "\"We will flush used pen needles down the toilet.\"", why: "Needles in the toilet can injure sewage workers." },
        { text: "\"He will not share his insulin pen with anyone.\"", why: "A pen is for one person only, which prevents bloodborne infection." },
        { text: "\"Loose needles can go in the recycling bin.\"", why: "Needles in recycling can injure sorting workers." },
      ],
      correct: [1, 4],
    },
  ],
};
