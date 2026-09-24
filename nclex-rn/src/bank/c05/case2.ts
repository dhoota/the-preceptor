import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c05-2";

/** Case 2. Pediatric unit. Young infant with forceful vomiting before surgery. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A Hungry Infant Who Keeps Vomiting",
  intro:
    "A 5-week-old boy is admitted to the pediatric unit from the emergency department at 1100. For 4 days he has vomited forcefully after most feedings. He takes formula eagerly again right after he vomits. An ultrasound shows a thickened pylorus. Surgery is planned once his fluids and electrolytes are corrected.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Born at 39 weeks. Birth weight 3.6 kg.",
        "Formula fed, 90 mL every 3 hours.",
        "Vomit is milky with no green color.",
        "Weight today 3.8 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1100"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "164/minute"],
          ["Respiratory rate", "40/minute"],
          ["BP", "78/46 mmHg"],
          ["Capillary refill", "3 seconds"],
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
        topic: "Dehydration signs in a young infant",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1115 the anterior fontanelle is sunken. The mucous membranes are dry and sticky. He has had 2 wet diapers in the past 24 hours. He is sleepy but roots eagerly when roused. Waves of movement cross the upper abdomen after a feeding. Which findings show a fluid volume deficit? Select four.",
        refs: ["A capillary refill of 2 seconds or less is normal."],
        rationale:
          "Repeated vomiting has drained his fluid. A sunken fontanelle, dry and sticky mucous membranes, only 2 wet diapers in 24 hours and a capillary refill of 3 seconds show a fluid volume deficit. Eager rooting and visible waves across the abdomen fit the blocked stomach outlet. The temperature is normal.",
        sources: [SRC.wong],
      }),
      kind: "msn",
      select: 4,
      options: [
        { text: "Sunken anterior fontanelle", why: "A sunken fontanelle reflects low fluid volume in an infant." },
        { text: "Rooting eagerly when roused", why: "Eager rooting reflects hunger because food cannot pass the pylorus." },
        { text: "2 wet diapers in 24 hours", why: "Few wet diapers show the kidneys conserving water." },
        { text: "Capillary refill of 3 seconds", why: "A refill longer than 2 seconds suggests reduced perfusion." },
        { text: "Dry, sticky mucous membranes", why: "Dry membranes reflect low body water." },
        { text: "Waves across the upper abdomen after feeds", why: "Visible peristalsis shows the stomach pushing against the narrow pylorus, not fluid status." },
        { text: "Temperature of 36.9°C", why: "The temperature is within the normal range." },
      ],
      correct: [0, 2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Acid-base change from repeated vomiting",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The admission laboratory results return at 1130. The nurse interprets them. Drag one choice into each blank.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Result", "Reference range"],
              rows: [
                ["Sodium", "132 mEq/L (132 mmol/L)", "135 to 145 mEq/L"],
                ["Potassium", "3.1 mEq/L (3.1 mmol/L)", "3.5 to 5.5 mEq/L"],
                ["Chloride", "86 mEq/L (86 mmol/L)", "98 to 106 mEq/L"],
                ["Bicarbonate", "34 mEq/L (34 mmol/L)", "20 to 28 mEq/L"],
                ["BUN", "22 mg/dL (7.9 mmol/L)", "Up to 18 mg/dL (6.4 mmol/L)"],
                ["Glucose", "78 mg/dL (4.3 mmol/L)", "Above 60 mg/dL (3.3 mmol/L)"],
              ],
            },
          },
        ],
        rationale:
          "Forceful vomiting removes stomach acid, which carries hydrogen and chloride ions. The kidneys hold on to bicarbonate. A bicarbonate of 34 mEq/L with a chloride of 86 mEq/L shows metabolic alkalosis with low chloride. A potassium of 3.1 mEq/L falls as the kidneys trade potassium to save hydrogen ions. A raised BUN reflects dehydration.",
        sources: [SRC.wong, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results only in SI units and report urea rather than BUN, so urea reads 7.9 mmol/L and glucose 4.3 mmol/L. Sodium, potassium, chloride and bicarbonate keep the same numbers in mmol/L.",
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "These results most likely reflect {0}, as shown by {1}.",
      targets: ["Acid-base state", "Supporting result"],
      tokens: [
        { text: "alkalosis from lost stomach acid", why: "Vomiting stomach contents removes acid and chloride and leaves excess bicarbonate." },
        { text: "metabolic acidosis from dehydration", why: "Acidosis would lower the bicarbonate. His is 34 mEq/L." },
        { text: "high bicarbonate with low chloride", why: "A high bicarbonate with a low chloride is the pattern of lost gastric acid." },
        { text: "a sodium of 132 mEq/L", why: "A low sodium reflects losses but does not show the acid-base change." },
        { text: "alkalosis from fast breathing", why: "His respiratory rate of 40/minute gives no sign of breathing off CO2." },
        { text: "a raised BUN level", why: "A raised BUN reflects dehydration, not the acid-base change." },
      ],
      correct: [0, 2],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Most urgent risk before pyloric surgery",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The infant is now to have nothing by mouth. No potassium has been given yet. The nurse reviews all the data so far. Which risk is the most urgent for the nurse to address?",
        rationale:
          "He has vomited for 4 days. A capillary refill of 3 seconds and only 2 wet diapers in 24 hours show a deficit that can progress to shock. Restoring volume comes first. He takes nothing by mouth now, so feeding aspiration is not the urgent risk. His potassium is low, not high, and his glucose is normal.",
        sources: [SRC.wong],
      }),
      kind: "mc",
      options: [
        { text: "Hypovolemic shock from ongoing fluid loss", why: "Slow capillary refill and few wet diapers show a volume deficit that can progress to shock." },
        { text: "Aspiration during the next formula feed", why: "He takes nothing by mouth before surgery, so feeding aspiration is not the urgent risk." },
        { text: "Hyperkalemia from potassium in the IV", why: "His potassium is 3.1 mEq/L, which is low, and none has been given." },
        { text: "Hypoglycemia from the missed feedings", why: "His glucose is within the reference range." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "IV fluid choices for an infant before surgery",
        cjmm: "generate",
        difficulty: 3,
        stem: "The primary health care provider prescribes nothing by mouth and IV fluids until surgery. For each prescription or plan, specify whether it is appropriate for this infant now.",
        rationale:
          "The infant needs isotonic IV fluid with dextrose to correct the deficit and the low chloride. Potassium is added once he voids. Diaper weights track output. Dextrose in water is hypotonic. Potassium given by IV push can stop the heart. Nothing goes by mouth before surgery. A drug cannot open a thickened pylorus.",
        sources: [SRC.ivf, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Appropriate", "Not appropriate"],
      rows: [
        { text: "Dextrose 5% in 0.9% sodium chloride IV", correct: [0], why: "An isotonic fluid with dextrose replaces losses without raising the risk of hyponatremia." },
        { text: "Dextrose 5% in water alone IV", correct: [1], why: "Dextrose in water is hypotonic and adds no sodium or chloride to correct the losses." },
        { text: "Potassium chloride added once he voids", correct: [0], why: "Potassium replaces losses. It is added after urine output confirms kidney function." },
        { text: "Potassium chloride by IV push", correct: [1], why: "IV push potassium can cause fatal dysrhythmias." },
        { text: "Oral electrolyte solution every hour", correct: [1], why: "He is to take nothing by mouth, and fluid by mouth would be vomited." },
        { text: "Weigh each diaper to measure output", correct: [0], why: "Diaper weights give an accurate output in an infant." },
        { text: "Metoclopramide to reduce vomiting", correct: [1], why: "The vomiting comes from a mechanical block that a drug cannot relieve." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Infant maintenance IV rate",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes the IV fluid at a maintenance rate of 100 mL/kg/day. The infant weighs 3.8 kg. At what rate should the nurse set the infusion pump?",
        rationale:
          "The daily volume is 100 mL/kg for 3.8 kg, which is 380 mL. Spread over 24 hours, that is 15.8 mL/hour. Infant IV fluids run on an infusion pump so the small hourly volume is delivered precisely.",
        calc: { expr: "100 * 3.8 / 24", answer: 15.833333333333334, unit: "mL/hour", round: 1, steps: ["100 * 3.8 = 380", "380 / 24 = 15.8"] },
        sources: [SRC.wong, SRC.ivf],
      }),
      kind: "mc",
      options: [
        { text: "15.8 mL/hour", why: "380 mL divided over 24 hours is 15.8 mL/hour." },
        { text: "31.7 mL/hour", why: "This spreads the daily volume over half a day and doubles the rate." },
        { text: "34.8 mL/hour", why: "This converts the weight to pounds before using a per kg dose." },
        { text: "380 mL/hour", why: "380 mL is the full daily volume. Given each hour it would be 24 times the dose." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Home care after infant pyloric surgery",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The infant has a pyloromyotomy and begins feeding a few hours later. Before discharge on day 2, the nurse evaluates the parents' understanding of care at home. Which statements show understanding? Select all that apply.",
        rationale:
          "Growth checks confirm weight gain once the outlet is open. Some vomiting can continue for a day or two after surgery. A clean incision, a watch for redness and burping during feeds are sound care. Infants sleep on their backs. Cereal in a bottle is not advised. His 2-month vaccines stay on schedule.",
        sources: [SRC.wong],
      }),
      kind: "sata",
      options: [
        { text: "\"We will lay him on his tummy to sleep so he does not choke.\"", why: "Infants sleep on their backs to lower the risk of sudden infant death." },
        { text: "\"We will have him weighed at his clinic visit to check growth.\"", why: "Weight checks confirm he is gaining now that feeds can pass." },
        { text: "\"We will add cereal to his bottle to help him gain weight.\"", why: "Cereal in a bottle is not advised for a young infant and adds a choking risk." },
        { text: "\"A small spit-up in the next day or two can still happen.\"", why: "Some vomiting is common in the first days after surgery." },
        { text: "\"We will wait until his 6-month visit for his next vaccines.\"", why: "His 2-month vaccines are due on time. Surgery does not delay them." },
        { text: "\"We will keep the incision clean and dry and watch for redness.\"", why: "A clean, dry incision and a watch for redness help catch infection early." },
        { text: "\"We will burp him during and after each feeding.\"", why: "Burping releases swallowed air and lowers vomiting." },
      ],
      correct: [1, 3, 5, 6],
    },
  ],
};
