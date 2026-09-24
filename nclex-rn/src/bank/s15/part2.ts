import type { Item } from "@/engine/types";
import { AABB, HINKLE, INS, ISMP_HIGH, LEHNE, SEROTONIN, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s15-11", {
      topic: "Air embolism from a central line",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "While the nurse changes the tubing on a client's internal jugular central venous catheter, the cap comes off the open hub. The client suddenly reports chest pain and gasps for air. Heart rate is 128/minute and SpO2 is 85%. The nurse clamps the catheter. What should the nurse do next?",
      rationale:
        "An open central line hub lets air enter the vein, and sudden chest pain, air hunger, a heart rate of 128/minute and SpO2 of 85% fit air embolism. After clamping, the client lies on the left side with the head down. This traps air in the right atrium away from the pulmonary outflow. Oxygen is given. Sitting up and flushing can move air into the lungs.",
      sources: [INS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Place client on left side, head down", why: "This keeps air in the right atrium and away from the pulmonary artery." },
      { text: "Sit the client upright in high Fowler", why: "Upright positioning lets air move toward the pulmonary circulation." },
      { text: "Flush the catheter with 10 mL of saline", why: "Flushing can push more air from the line into the vein." },
      { text: "Remove the catheter and apply pressure", why: "Removal is not the first step. It can let more air enter through the tract." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-12", {
      topic: "Heparin infusion pump rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with a pulmonary embolism has a prescription for heparin at 1200 units/hour by continuous IV infusion. The bag contains heparin 25 000 units in 500 mL of dextrose 5% in water. At what rate in mL/hour should the nurse program the pump?",
      rationale:
        "The bag holds 25 000 units in 500 mL, which is 50 units in each mL. The prescription is 1200 units each hour. Dividing 1200 by 50 gives 24 mL/hour. Heparin is a high-alert medication, so a second nurse checks the pump setting.",
      calc: { expr: "1200 / (25000 / 500)", answer: 24, unit: "mL/hour", round: 0, steps: ["25000 / 500 = 50", "1200 / 50 = 24"] },
      sources: [ISMP_HIGH],
    }),
    kind: "mc",
    options: [
      { text: "2.4 mL/hour", why: "This misplaces the decimal and gives one tenth of the dose." },
      { text: "24 mL/hour", why: "1200 units/hour divided by 50 units/mL is 24 mL/hour." },
      { text: "50 mL/hour", why: "50 is the concentration in units/mL. It is not the rate." },
      { text: "240 mL/hour", why: "This misplaces the decimal and gives 10 times the dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s15-13", {
      topic: "Acute transfusion reaction response",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "Fifteen minutes into a unit of packed red blood cells, a client reports chills and low back pain. Temperature is 38.9°C (102.0°F), up from 37.0°C (98.6°F) before the transfusion. BP is 88/50 mmHg. Place the nurse's actions in order.",
      rationale:
        "Fever, chills, back pain and a falling BP early in a transfusion suggest an acute hemolytic reaction. Stopping the transfusion limits the dose of incompatible blood. New tubing with sodium chloride keeps the vein open without flushing more blood in. The primary health care provider and blood bank are told next. The bag and tubing go to the blood bank for testing.",
      sources: [AABB, HINKLE, { body: "Laureano M, Khandelwal A, Yan M. Canadian Blood Services", work: "Transfusion Reactions. In: Clinical Guide to Transfusion", year: 2022 }],
      canada: "Outside Quebec, blood components come from Canadian Blood Services. Its Circular of Information and Clinical Guide to Transfusion guide Canadian nurses, and hospitals report serious reactions under its reporting guide.",
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Notify provider and blood bank", why: "The provider and blood bank are told once the client is safe from more blood." },
      { text: "Flush the blood tubing with saline", why: "Flushing the old tubing pushes more incompatible blood into the client." },
      { text: "Stop the transfusion", why: "Stopping first limits the amount of incompatible blood received." },
      { text: "Send the bag to the blood bank", why: "The bag and tubing are tested to confirm the reaction after care is under way." },
      { text: "Restart the unit at a slower rate", why: "A suspected hemolytic reaction is not restarted at any rate." },
      { text: "Run saline through new tubing", why: "New tubing keeps IV access open without giving more blood." },
    ],
    correct: [2, 5, 0, 3],
  },
  {
    ...meta("rn-s15-14", {
      topic: "Mixing two insulins in one syringe",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares regular insulin 6 units and NPH insulin 14 units in one syringe. The nurse has rolled the NPH vial gently and cleaned both rubber stoppers. Which step should the nurse perform next?",
      rationale:
        "Air goes into the NPH vial first while the needle stays out of the insulin, so no NPH enters the syringe. Air then goes into the regular vial and regular insulin is drawn up first. NPH is drawn last. This order keeps the cloudy NPH out of the clear regular vial.",
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Inject 14 units of air into the NPH vial", why: "Air into the NPH vial comes first so the regular insulin can be drawn next." },
      { text: "Inject 6 units of air into the regular vial", why: "This comes second. The NPH vial gets its air first." },
      { text: "Withdraw 6 units of regular insulin", why: "Regular insulin is withdrawn after air goes into both vials." },
      { text: "Withdraw 14 units of NPH insulin", why: "NPH is drawn last so it cannot contaminate the regular vial." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-15", {
      topic: "Lithium toxicity",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with bipolar disorder takes lithium 300 mg by mouth three times daily. Two weeks ago the client started hydrochlorothiazide. Today the serum lithium level is 2.2 mEq/L (2.2 mmol/L). Which findings should the nurse expect? Select all that apply.",
      rationale:
        "Thiazide diuretics cut lithium clearance and raise the level. A level of 2.2 mEq/L is in the toxic range. Toxicity shows as a coarse tremor, persistent diarrhea and vomiting, an unsteady gait and slurred speech. Pinpoint pupils suggest opioids. Excess salivation suggests cholinergic excess.",
      refs: ["Serum lithium above 1.5 mEq/L (1.5 mmol/L) carries a risk of toxicity."],
      sources: [LEHNE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
      canada: "Canadian labs report serum lithium in mmol/L only. The Medical Council of Canada lists 0.6 to 1.2 mmol/L as the adult reference range.",
    }),
    kind: "sata",
    options: [
      { text: "Pinpoint pupils", why: "Pinpoint pupils point to opioid effect, not lithium toxicity." },
      { text: "Coarse hand tremor", why: "A coarse tremor replaces the fine tremor of therapeutic levels." },
      { text: "Excess salivation", why: "Salivation fits cholinergic excess. Lithium toxicity does not cause it." },
      { text: "Unsteady gait", why: "Ataxia reflects the effect of a toxic level on the nervous system." },
      { text: "Persistent diarrhea", why: "Gastrointestinal upset is an early sign of toxicity." },
      { text: "Slurred speech", why: "Slurred speech reflects neurotoxicity at levels above 1.5 mEq/L." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s15-16", {
      topic: "Intravenous potassium safety",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews potassium chloride prescriptions for four adult clients on a medical unit. Each client has a peripheral IV line and normal urine output. Which prescription should the nurse clarify before giving it?",
      rationale:
        "Concentrated potassium chloride given by IV push can cause cardiac arrest. IV potassium is always diluted and given by infusion. A peripheral rate of 10 mEq/hour or less is within usual limits. The two diluted prescriptions both run at 10 mEq/hour. The oral dose with food is a safe route.",
      refs: ["IV potassium chloride is diluted and infused, never given by IV push.", "Peripheral IV potassium usually runs at 10 mEq/hour or less."],
      sources: [ISMP_HIGH, LEHNE, { body: "Institute for Safe Medication Practices Canada", work: "Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. ISMP Canada Safety Bulletin 19(1)", year: 2019 }],
      canada: "Canadian potassium chloride products and prescriptions use mmol, and 1 mEq equals 1 mmol of potassium. Accreditation Canada requires that concentrated potassium solutions are not stocked in client care areas.",
    }),
    kind: "mc",
    options: [
      { text: "20 mEq IV push over 2 minutes", why: "IV push potassium can cause fatal dysrhythmias. This needs clarification." },
      { text: "20 mEq in 100 mL IV over 2 hours", why: "This runs at 10 mEq/hour through a peripheral line, which is safe." },
      { text: "40 mEq by mouth with food", why: "The oral route with food is safe and lowers stomach upset." },
      { text: "10 mEq in 100 mL IV over 1 hour", why: "This runs at 10 mEq/hour, within usual peripheral limits." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-17", {
      topic: "Angiotensin converting enzyme inhibitor reaction",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 61-year-old client started lisinopril 10 mg daily 3 days ago. The client now has swollen lips and tongue and a hoarse voice. There is no rash or itching. Respirations are 24/minute and SpO2 is 94%. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Swelling of the lips and tongue without rash or itching after starting lisinopril fits angioedema. It is caused by bradykinin buildup rather than histamine. A hoarse voice suggests the swelling reaches the larynx. Airway obstruction is the priority. The drug is stopped and not restarted.",
      sources: [LEHNE, HINKLE],
    }),
    template: "The client is most likely experiencing {0}, and the priority concern is {1}.",
    kind: "cloze",
    scoring: "dyad",
    blanks: [
      {
        options: [
          { text: "urticaria", why: "Urticaria causes itchy wheals. The client has no rash or itching." },
          { text: "angioedema", why: "Lip and tongue swelling without itching after lisinopril fits angioedema." },
          { text: "contact dermatitis", why: "Dermatitis affects the skin surface and does not swell the tongue." },
          { text: "allergic rhinitis", why: "Rhinitis causes nasal symptoms, not tongue swelling." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "high serum potassium", why: "Lisinopril can raise potassium, but the stem gives no potassium value." },
          { text: "a persistent dry cough", why: "Cough is a common adverse effect but does not threaten life." },
          { text: "airway obstruction", why: "Hoarseness shows swelling near the larynx that can close the airway." },
          { text: "low blood pressure", why: "The stem gives no BP change. The airway threat comes first." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s15-18", {
      topic: "Intravenous phenytoin administration",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with a seizure disorder has a prescription for phenytoin 100 mg IV every 8 hours. The only IV line is a peripheral catheter with dextrose 5% in water running. Which action should the nurse take when giving the dose?",
      rationale:
        "Phenytoin precipitates in dextrose solutions. The line is flushed with sodium chloride before and after the dose. Giving it too fast can cause hypotension and dysrhythmias, so adults receive no more than 50 mg/minute. It is not mixed into dextrose for a piggyback.",
      refs: ["Adult IV phenytoin runs no faster than 50 mg/minute."],
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Give it into the running dextrose line", why: "Phenytoin forms crystals in dextrose and can block the catheter." },
      { text: "Flush with saline before and after", why: "Saline flushes keep phenytoin away from dextrose in the line." },
      { text: "Push the dose over 30 seconds", why: "100 mg over 30 seconds far exceeds the 50 mg/minute limit." },
      { text: "Mix it in dextrose as a piggyback", why: "Phenytoin precipitates when mixed in dextrose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s15-19", {
      topic: "Aminoglycoside kidney effects",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 74-year-old client receives IV gentamicin for a gram-negative infection. The nurse reviews the flow sheet. Based on the trend, which complication is most likely developing?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Measure", "Day 1", "Day 3", "Day 5", "Day 7"],
            rows: [
              ["Serum creatinine, mg/dL (micromol/L)", "0.8 (71)", "1.1 (97)", "1.6 (141)", "2.1 (186)"],
              ["Gentamicin trough, mcg/mL", "0.9", "1.4", "2.3", "3.1"],
              ["Urine output, mL/24 hours", "1600", "1350", "900", "600"],
              ["Weight, kg", "70.0", "70.4", "71.1", "71.8"],
            ],
          },
        },
      ],
      rationale:
        "From day 1 to day 7 creatinine rises from 0.8 mg/dL (71 micromol/L) to 2.1 mg/dL (186 micromol/L). Urine output falls from 1600 to 600 mL. The gentamicin trough climbs from 0.9 to 3.1 mcg/mL as the kidneys clear less drug. Weight rises from 70.0 to 71.8 kg, so the client is not dry. This pattern is aminoglycoside nephrotoxicity.",
      refs: ["A gentamicin trough above 2 mcg/mL raises the risk of kidney and ear toxicity."],
      sources: [LEHNE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
      canada: "Canadian labs report creatinine in micromol/L only. Canadian hospital guides usually report gentamicin levels in mg/L, which equals mcg/mL.",
    }),
    kind: "mc",
    options: [
      { text: "Nephrotoxicity", why: "Rising creatinine and trough with falling urine output show drug injury to the kidneys." },
      { text: "Fluid volume deficit", why: "Weight rises from 70.0 to 71.8 kg. A deficit would lower weight." },
      { text: "Ototoxicity", why: "Ototoxicity is a risk, but the table shows kidney data and no hearing change." },
      { text: "Neuromuscular blockade", why: "Blockade shows as weak breathing. The table shows no such finding." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-20", {
      topic: "Serotonin syndrome",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client who takes sertraline daily started tramadol for back pain 2 days ago. The client is now restless and anxious with a temperature of 38.6°C (101.5°F) and a heart rate of 118/minute. Which three additional findings would support serotonin syndrome? Select three.",
      rationale:
        "Sertraline and tramadol both raise serotonin. Agitation, fever and a heart rate of 118/minute fit serotonin syndrome. Clonus, brisk reflexes and heavy sweating are its typical neuromuscular and autonomic signs. Lead-pipe rigidity fits neuroleptic malignant syndrome. Pinpoint pupils fit opioid excess. Dry, flushed skin fits anticholinergic toxicity.",
      sources: [SEROTONIN],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Lead-pipe muscle rigidity", why: "Lead-pipe rigidity is typical of neuroleptic malignant syndrome." },
      { text: "Inducible ankle clonus", why: "Clonus is a key sign of serotonin excess." },
      { text: "Pinpoint pupils", why: "Serotonin excess dilates the pupils. Pinpoint pupils suggest opioid excess." },
      { text: "Brisk reflexes", why: "Hyperreflexia reflects serotonin excess in the spinal cord." },
      { text: "Dry, flushed skin", why: "Dry skin points to anticholinergic toxicity. Serotonin excess causes sweating." },
      { text: "Heavy sweating", why: "Diaphoresis reflects autonomic overactivity in serotonin syndrome." },
    ],
    correct: [1, 3, 5],
  },
];
