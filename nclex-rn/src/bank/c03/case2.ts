import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c03-2";

/** Case 2. Pediatric emergency department. Adolescent with type 1 diabetes and ketoacidosis. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A Teenager Who Cannot Keep Anything Down",
  intro:
    "A 15-year-old boy with type 1 diabetes is brought to the pediatric emergency department at 0600 by his mother. He has vomited 6 times since midnight and has cramping abdominal pain. He uses an insulin pump and says the infusion site came loose at a friend's party last night.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Type 1 diabetes for 4 years. Uses an insulin pump filled with rapid-acting insulin. Takes no long-acting insulin.",
        "No earlier episodes of ketoacidosis.",
        "Weight 52 kg.",
        "Lives with his mother and a younger sister. In grade 10.",
        "His mother says he has handled his own diabetes care since last year and she rarely checks his readings.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0600"],
        rows: [
          ["Temperature", "37.4°C (99.3°F)"],
          ["Heart rate", "128/minute"],
          ["Respiratory rate", "32/minute, deep"],
          ["BP", "118/72 mmHg"],
          ["SpO2", "99% on room air"],
          ["Capillary refill", "3 seconds"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Glucose", "486 mg/dL (27.0 mmol/L)", "70 to 140 mg/dL"],
          ["Venous pH", "7.08", "7.32 to 7.42"],
          ["Bicarbonate", "7 mEq/L (7 mmol/L)", "22 to 26 mEq/L"],
          ["Potassium", "5.4 mEq/L (5.4 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Sodium", "132 mEq/L (132 mmol/L)", "135 to 145 mEq/L"],
          ["Beta-hydroxybutyrate", "6.1 mmol/L", "less than 0.6 mmol/L"],
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
        topic: "Laboratory and vital sign cues in ketoacidosis",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the vital signs and the laboratory results. Which findings require follow-up? Select all that apply.",
        rationale:
          "A heart rate of 128/minute reflects volume loss from vomiting and osmotic diuresis. Deep respirations of 32/minute are the lungs blowing off carbon dioxide to offset acidosis. A venous pH of 7.08 and a bicarbonate of 7 mEq/L show severe metabolic acidosis. A potassium of 5.4 mEq/L is above the reference range. Insulin will drive potassium into cells, so it needs close follow-up. The temperature, SpO2 and BP are within expected limits.",
        refs: ["Severe ketoacidosis in children is a venous pH below 7.1 or a bicarbonate below 5 mmol/L."],
        sources: [SRC.ispadDka],
      }),
      kind: "sata",
      options: [
        { text: "Heart rate 128/minute", why: "Tachycardia reflects dehydration from vomiting and glucose-driven urine loss." },
        { text: "SpO2 99% on room air", why: "Oxygenation is normal. The lungs are not the problem." },
        { text: "Venous pH 7.08", why: "A pH this low shows severe acidosis from ketones." },
        { text: "Temperature 37.4°C (99.3°F)", why: "This temperature is within the normal range and gives no sign of infection." },
        { text: "Bicarbonate 7 mEq/L (7 mmol/L)", why: "Bicarbonate is used up buffering ketoacids." },
        { text: "BP 118/72 mmHg", why: "The BP is normal for his age. Children often keep a normal BP until late in volume loss." },
        { text: "Potassium 5.4 mEq/L (5.4 mmol/L)", why: "Acidosis shifts potassium out of cells. Body stores are low and the level will fall with insulin." },
        { text: "Respirations 32/minute and deep", why: "Deep, rapid breathing is respiratory compensation for metabolic acidosis." },
      ],
      correct: [0, 2, 4, 6, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Insulin pump interruption",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The mother asks how he became this sick so fast when he felt well yesterday afternoon. The nurse reviews the history. Complete the following sentence by dragging a choice into each blank.",
        rationale:
          "An insulin pump delivers only rapid-acting insulin. When the site comes loose, no depot of long-acting insulin is left. Ketones can build within hours, which fits the loose infusion site at the party. Vomiting and abdominal pain are effects of ketoacidosis, not its cause. There is no report of a stomach infection in the family or of a large carbohydrate load.",
        sources: [SRC.ispadSick, SRC.ispadDka],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The most likely cause of this episode is {0}, and the finding that best supports it is {1}.",
      targets: ["cause", "supporting finding"],
      tokens: [
        { text: "interrupted insulin delivery", why: "Without basal insulin from the pump, fat breakdown and ketone production start quickly." },
        { text: "a viral gastroenteritis", why: "Nothing in the history points to a stomach infection. Vomiting here follows ketosis." },
        { text: "the loose pump infusion site", why: "A loose site means insulin went into the air or skin surface, not under the skin." },
        { text: "vomiting since midnight", why: "Vomiting is a result of ketoacidosis rather than evidence of its cause." },
        { text: "excess carbohydrate intake", why: "Extra carbohydrate raises glucose but does not cause ketoacidosis when insulin is delivered." },
        { text: "abdominal pain on arrival", why: "Abdominal pain is a common symptom of ketoacidosis, not a clue to its cause." },
      ],
      correct: [0, 2],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Cerebral edema risk in pediatric ketoacidosis",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0700 the client has received a fluid bolus of 0.9% sodium chloride and the insulin infusion is planned. His mother asks what the team is watching for most closely. Which complication poses the greatest threat to his life during treatment?",
        rationale:
          "Cerebral edema is the leading cause of death from ketoacidosis in children. A venous pH of 7.08 marks severe ketoacidosis, which raises the risk. Hourly neurologic checks look for headache, a slowing heart rate, rising BP or a change in alertness. Hypoglycemia is prevented by adding dextrose as glucose falls. Kidney injury is common but usually improves with fluids. Pulmonary edema is rare.",
        sources: [SRC.ispadDka],
      }),
      kind: "mc",
      options: [
        { text: "Acute kidney injury", why: "Kidney injury often occurs but usually resolves as fluids restore perfusion." },
        { text: "Hypoglycemia", why: "Adding dextrose to the fluids as glucose falls prevents hypoglycemia." },
        { text: "Pulmonary edema", why: "Pulmonary edema is an uncommon complication of treatment in children." },
        { text: "Cerebral edema", why: "Cerebral injury causes most deaths from ketoacidosis in children." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Verifying prescriptions in pediatric ketoacidosis",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 4,
        stem: "The nurse reviews the prescriptions before treatment continues. For each prescription, specify whether the nurse should implement it or clarify it with the primary health care provider.",
        tabs: [
          {
            title: "Orders",
            text: [
              "Regular insulin 5 units IV bolus, then start the infusion.",
              "Regular insulin infusion 0.1 units/kg/hour IV, starting 1 hour after IV fluids begin.",
              "Neurologic checks every hour.",
              "Sodium bicarbonate 50 mEq IV now.",
              "Add potassium to IV fluids once urine output is confirmed.",
              "Bedside blood glucose every hour.",
            ].join("\n"),
          },
        ],
        rationale:
          "An IV insulin bolus is not used at the start of pediatric treatment. It may raise the risk of cerebral edema. Bicarbonate is kept for severe acidemia with poor cardiac function or life-threatening hyperkalemia, which the stem does not describe. A pH of 7.08 does not meet that bar. The infusion rate and timing, hourly neurologic and glucose checks, and potassium after urine output are standard care.",
        refs: [
          "An IV insulin bolus is not used at the start of therapy in children.",
          "Bicarbonate is reserved for severe acidemia with a pH below 6.9 and poor cardiac contractility, or life-threatening hyperkalemia.",
          "When the serum potassium is high, potassium replacement waits for documented urine output.",
        ],
        sources: [SRC.ispadDka],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Implement", "Clarify"],
      rows: [
        { text: "Regular insulin 5 units IV bolus", correct: [1], why: "Pediatric guidance advises against an insulin bolus at the start of therapy." },
        { text: "Insulin infusion 0.1 units/kg/hour, 1 hour after fluids start", correct: [0], why: "This dose and timing match pediatric guidance." },
        { text: "Neurologic checks every hour", correct: [0], why: "Hourly checks detect early cerebral edema." },
        { text: "Sodium bicarbonate 50 mEq IV now", correct: [1], why: "Bicarbonate is not routine and may add to cerebral edema risk. His pH of 7.08 is above the threshold for its use." },
        { text: "Potassium in IV fluids once urine output is confirmed", correct: [0], why: "His potassium is 5.4 mEq/L (5.4 mmol/L), so replacement waits until he voids." },
        { text: "Bedside blood glucose every hour", correct: [0], why: "Hourly glucose guides the insulin rate and when to add dextrose." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Insulin infusion rate",
        cjmm: "action",
        difficulty: 3,
        stem: "The insulin bolus is removed from the prescriptions. The nurse prepares regular insulin 0.1 units/kg/hour IV for the client, who weighs 52 kg. The pharmacy supplies regular insulin 100 units in 100 mL of 0.9% sodium chloride. At what rate should the nurse set the infusion pump?",
        rationale:
          "The dose is 0.1 units/kg/hour for a client of 52 kg, which is 5.2 units/hour. The bag holds 100 units in 100 mL, so each mL holds 1 unit. The pump rate is 5.2 mL/hour. IV insulin is a high-alert medication, so a second nurse checks the pump setting before it starts.",
        calc: { expr: "0.1 * 52 / (100 / 100)", answer: 5.2, unit: "mL/hour", round: 1, steps: ["0.1 * 52 = 5.2", "100 / 100 = 1", "5.2 / 1 = 5.2"] },
        sources: [SRC.ispadDka, SRC.ismp],
      }),
      kind: "mc",
      options: [
        { text: "0.52 mL/hour", why: "This is one tenth of the correct rate and would not stop ketone production." },
        { text: "5.2 mL/hour", why: "5.2 units/hour of a 1 unit/mL solution runs at 5.2 mL/hour." },
        { text: "10.4 mL/hour", why: "This is double the correct rate and risks a rapid fall in glucose and potassium." },
        { text: "52 mL/hour", why: "This is 10 times the correct rate. It uses the weight as the rate." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Adolescent self-management after ketoacidosis",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Two days later the client is ready for discharge. The nurse reviews sick day and pump care with him and his mother. Which two statements by the client show understanding? Select two.",
        rationale:
          "A pump user has no long-acting insulin, so a failed site needs ketone checks and insulin by pen or syringe right away. Adolescents do better when a parent stays involved, so shared review of readings is a sound plan. Insulin is still needed on days he cannot eat. Vomiting overnight needs same-night action. Telling a trusted friend adds safety at social events.",
        sources: [SRC.ispadSick, SRC.ispadAdol],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will stop my insulin on days I cannot eat.\"", why: "Insulin is still needed when he is ill. Stopping it leads to ketoacidosis." },
        { text: "\"A loose site means a ketone check and a pen dose.\"", why: "A failed pump site needs a ketone check and backup insulin by injection." },
        { text: "\"If I vomit at night, I will wait until morning to check.\"", why: "Vomiting in a pump user needs glucose and ketone checks right away." },
        { text: "\"I will keep my diabetes a secret from my friends.\"", why: "A trusted friend who knows the warning signs can get help at a party." },
        { text: "\"Mom and I will go over my readings each week.\"", why: "Ongoing parent involvement is linked with better outcomes in adolescence." },
        { text: "\"Mom does not need to know my numbers anymore.\"", why: "Stepping parents out fully at 15 is linked with worse glycemic control." },
      ],
      correct: [1, 4],
    },
  ],
};
