import type { Item } from "@/engine/types";
import { ADA, ASH_HIT, BEERS, CHEST_VKA, HF, LEHNE, TB, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s15-31", {
      topic: "Intermittent infusion pump rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client has a prescription for cefazolin 1 g in 100 mL of 0.9% sodium chloride IV over 30 minutes. The nurse uses an infusion pump. At what rate in mL/hour should the nurse set the pump?",
      rationale:
        "A pump rate is set in mL per hour. The bag holds 100 mL to run over 30 minutes. Multiplying 100 mL by 60 minutes and dividing by 30 minutes gives 200 mL/hour. At that rate the bag finishes in 30 minutes as prescribed.",
      calc: { expr: "100 * 60 / 30", answer: 200, unit: "mL/hour", round: 0, steps: ["100 * 60 = 6000", "6000 / 30 = 200"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "3.3 mL/hour", why: "This is the volume per minute. The pump is set per hour." },
      { text: "100 mL/hour", why: "This runs the bag over 60 minutes, twice as long as prescribed." },
      { text: "200 mL/hour", why: "100 mL over 30 minutes is 200 mL/hour." },
      { text: "300 mL/hour", why: "This rate is too fast and empties the bag before 30 minutes pass." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-32", {
      topic: "Tuberculosis drug teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 29-year-old client with active pulmonary tuberculosis starts isoniazid, rifampin, pyrazinamide and ethambutol. The client uses a combined oral contraceptive. After teaching, which statements by the client show understanding? Select all that apply.",
      rationale:
        "Rifampin turns urine, sweat and tears orange-red. It also speeds breakdown of oral contraceptives, so a barrier method is added. Isoniazid, rifampin and pyrazinamide can injure the liver, which shows as yellow skin or dark urine. Ethambutol can affect the optic nerve and color vision. Stopping early when the cough settles risks relapse and resistance. Alcohol adds liver injury.",
      sources: [TB, LEHNE, { body: "Johnston JC, Cooper R, Menzies D. Canadian Thoracic Society", work: "Treatment of Tuberculosis Disease. Chapter 5 of the Canadian Tuberculosis Standards, 8th edition", year: 2022 }],
      canada: "Active TB is legally reportable to public health in every province and territory. The Canadian Tuberculosis Standards say TB drugs and treatment support are provided free of charge, whatever the client's insurance coverage.",
    }),
    kind: "sata",
    options: [
      { text: "\"I can stop the pills when my cough is gone.\"", why: "Stopping early risks relapse and drug resistance." },
      { text: "\"My tears may turn orange-red.\"", why: "Rifampin colors body fluids orange-red. This is harmless." },
      { text: "\"I can still drink wine on weekends.\"", why: "Alcohol adds to the liver injury risk of these drugs." },
      { text: "\"I will add a condom for birth control.\"", why: "Rifampin lowers the effect of oral contraceptives." },
      { text: "\"I will report yellow skin.\"", why: "Jaundice can signal drug-induced liver injury." },
      { text: "\"I will report a change in color vision.\"", why: "Ethambutol can cause optic neuritis with loss of red-green vision." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s15-33", {
      topic: "High INR without bleeding",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with atrial fibrillation takes warfarin 5 mg by mouth daily at 1700. At 1500 the INR result is 6.2. The client has no bleeding, bruising or blood in the urine or stool. What should the nurse do first?",
      rationale:
        "An INR of 6.2 is well above the usual target of 2 to 3. It raises bleeding risk even without signs of bleeding. The nurse holds the 1700 dose and notifies the primary health care provider. For an INR between 4.5 and 10 without bleeding, routine vitamin K is not advised. IV vitamin K is kept for serious bleeding.",
      refs: ["The usual INR target for atrial fibrillation is 2 to 3.", "For an INR between 4.5 and 10 without bleeding, the vitamin K antagonist is held and routine vitamin K is not advised."],
      sources: [CHEST_VKA],
    }),
    kind: "mc",
    options: [
      { text: "Hold the dose and notify the provider", why: "Holding the dose lets the INR fall while the provider sets the plan." },
      { text: "Give the dose and recheck the INR", why: "Another dose raises an INR that is already 6.2." },
      { text: "Give vitamin K 10 mg IV now", why: "IV vitamin K is kept for serious bleeding. It also needs a prescription." },
      { text: "Give half the usual dose tonight", why: "Any dose adds to the anticoagulant effect at an INR of 6.2." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-34", {
      topic: "Drug causes of hyperkalemia",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with heart failure takes furosemide 40 mg, lisinopril 20 mg, spironolactone 25 mg and metoprolol succinate 50 mg daily. Serum potassium is 5.9 mEq/L (5.9 mmol/L) and the ECG shows peaked T waves. Which medication pair most likely explains the potassium level?",
      rationale:
        "Lisinopril lowers aldosterone. Spironolactone blocks aldosterone at the kidney. Together they cut potassium loss and can cause hyperkalemia, as seen with a level of 5.9 mEq/L and peaked T waves. Furosemide lowers potassium. Metoprolol has a small effect on potassium compared with this pair.",
      sources: [HF, LEHNE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
      canada: "Canadian labs report serum potassium in mmol/L only. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the reference range.",
    }),
    kind: "mc",
    options: [
      { text: "Furosemide and lisinopril", why: "Furosemide causes potassium loss, which offsets lisinopril." },
      { text: "Metoprolol and furosemide", why: "Furosemide lowers potassium. Metoprolol has only a small effect." },
      { text: "Furosemide and spironolactone", why: "Furosemide wastes potassium and partly offsets spironolactone." },
      { text: "Lisinopril and spironolactone", why: "Both reduce aldosterone effect and cut potassium excretion." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s15-35", {
      topic: "Long-term corticosteroid teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with rheumatoid arthritis has taken prednisone 20 mg by mouth daily for 3 months. The primary health care provider plans a slow taper. Which two statements by the client show understanding? Select two.",
      rationale:
        "Taking prednisone with breakfast lowers stomach upset and matches the body's morning cortisol peak. After 3 months the adrenal glands are suppressed, so the dose is lowered only as prescribed. Stopping suddenly can cause adrenal crisis. Prednisone raises blood glucose. Live vaccines are avoided at 20 mg daily because of immune suppression.",
      sources: [LEHNE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will stop it once my joints feel better.\"", why: "Stopping suddenly after months of use can cause adrenal crisis." },
      { text: "\"I will take it with breakfast.\"", why: "Morning dosing with food lowers stomach upset and fits the cortisol rhythm." },
      { text: "\"I expect my blood sugar to run lower.\"", why: "Prednisone raises blood glucose." },
      { text: "\"I will lower the dose only as prescribed.\"", why: "A slow taper lets the suppressed adrenal glands recover." },
      { text: "\"I will get a live vaccine this month.\"", why: "Live vaccines can cause infection in a client on 20 mg of prednisone daily." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s15-36", {
      topic: "Nitrate and phosphodiesterase inhibitor interaction",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client in the emergency department reports chest pressure of 7 on a 0 to 10 scale. BP is 128/78 mmHg. There is a prescription for nitroglycerin 0.4 mg sublingual. While the nurse prepares it, the client says he took sildenafil 10 hours ago. What should the nurse do first?",
      rationale:
        "Sildenafil and nitrates both dilate blood vessels. Taken within 24 hours of each other they can cause severe hypotension. The client took sildenafil 10 hours ago, so the nurse withholds nitroglycerin and tells the primary health care provider. A normal BP now does not prevent the drop. A half dose still carries the risk.",
      refs: ["Nitrates are avoided within 24 hours of sildenafil."],
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Give the nitroglycerin as prescribed", why: "Nitroglycerin 10 hours after sildenafil can cause severe hypotension." },
      { text: "Give half the nitroglycerin dose", why: "A smaller nitrate dose can still cause a dangerous BP drop." },
      { text: "Withhold it and notify the provider", why: "The provider needs to know so another treatment can be chosen." },
      { text: "Give it and recheck the BP in 5 minutes", why: "A recheck after the dose is too late to prevent severe hypotension." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-37", {
      topic: "Hypoglycemia after rapid-acting insulin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with type 1 diabetes received insulin lispro 8 units at 1200. The lunch tray is delayed. At 1230 the client is shaky and sweaty. Blood glucose is 58 mg/dL (3.2 mmol/L). The client is alert and can swallow. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A glucose of 58 mg/dL with shaking and sweating is hypoglycemia. The client is alert and can swallow, so oral glucose is the fastest safe treatment. Glucose is rechecked 15 minutes later and treatment is repeated if it stays low. Glucagon and IV dextrose are for a client who cannot swallow. Protein acts too slowly.",
      refs: ["An alert client with glucose below 70 mg/dL (3.9 mmol/L) takes 15 to 20 g of glucose and rechecks in 15 minutes."],
      sources: [ADA, { body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104", year: 2018 }],
      canada: "Diabetes Canada defines hypoglycemia as glucose below 4.0 mmol/L in clients on insulin. It advises 15 g of glucose and a retest in 15 minutes, and Canadian meters report glucose in mmol/L only.",
    }),
    template: "The nurse should first give {0}, then recheck the blood glucose in {1}.",
    kind: "cloze",
    scoring: "zero-one",
    blanks: [
      {
        options: [
          { text: "glucagon 1 mg IM", why: "Glucagon is for a client who cannot swallow safely." },
          { text: "dextrose 50% IV push", why: "IV dextrose is for a client who cannot take oral glucose." },
          { text: "15 g of oral glucose", why: "Oral glucose raises blood glucose quickly in an alert client." },
          { text: "a protein snack with cheese", why: "Protein and fat slow absorption and delay recovery." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "5 minutes", why: "Oral glucose has not had time to act after 5 minutes." },
          { text: "15 minutes", why: "A recheck at 15 minutes shows whether more glucose is needed." },
          { text: "1 hour", why: "Waiting an hour leaves ongoing hypoglycemia untreated." },
          { text: "4 hours", why: "Lispro is still active and glucose can fall again in this time." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s15-38", {
      topic: "Falling platelets on heparin",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A client started a continuous IV heparin infusion on day 1 for a femoral vein thrombosis. The nurse reviews the laboratory results. Based on the trend, which condition is most likely developing?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Measure", "Day 1", "Day 3", "Day 5", "Day 7", "Day 8"],
            rows: [
              ["Platelets, per mm3", "248 000", "240 000", "210 000", "112 000", "96 000"],
              ["Hemoglobin, g/dL (g/L)", "12.8 (128)", "12.6 (126)", "12.7 (127)", "12.6 (126)", "12.5 (125)"],
              ["aPTT, seconds", "31", "68", "72", "70", "74"],
            ],
          },
        },
      ],
      rationale:
        "Platelets fall from 248 000 to 96 000 per mm3, a drop of more than half. The fall begins after day 5 of heparin. That timing and size fit heparin-induced thrombocytopenia. Hemoglobin stays steady, so bleeding is unlikely. The aPTT stays between 68 and 74 seconds, so the heparin effect has not risen. Heparin is stopped and a non-heparin anticoagulant is started.",
      refs: ["Heparin-induced thrombocytopenia usually shows as a platelet fall of more than 50% that starts 5 to 10 days after heparin begins."],
      sources: [ASH_HIT, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
      canada: "Canadian labs report platelets as x 10^9/L and hemoglobin in g/L. A count of 248 000 per mm3 reads as 248 x 10^9/L.",
    }),
    kind: "mc",
    options: [
      { text: "Acute gastrointestinal bleeding", why: "Hemoglobin stays steady from day 1 to day 8, so bleeding is unlikely." },
      { text: "Heparin-induced thrombocytopenia", why: "A fall of more than half starting after day 5 of heparin fits this condition." },
      { text: "Dilutional thrombocytopenia", why: "Dilution needs large fluid or blood volumes, and hemoglobin would fall too." },
      { text: "Excess heparin effect", why: "The aPTT stays between 68 and 74 seconds and does not show rising effect." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s15-39", {
      topic: "Potentially inappropriate drugs in older adults",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse reviews admission prescriptions for an 82-year-old client with type 2 diabetes and two falls in the past year. Which prescriptions should the nurse question? Select all that apply.",
      rationale:
        "Diphenhydramine is strongly anticholinergic and causes confusion and falls in older adults. Diazepam is a long-acting benzodiazepine that raises fall and fracture risk. Glyburide causes long-lasting hypoglycemia in older adults. These are on the Beers list of drugs to avoid. Acetaminophen, docusate and atorvastatin at these doses are appropriate.",
      sources: [BEERS],
    }),
    kind: "sata",
    options: [
      { text: "Acetaminophen 650 mg every 6 hours for pain", why: "Acetaminophen within the daily limit is a preferred analgesic in older adults." },
      { text: "Diphenhydramine 25 mg at bedtime for sleep", why: "Its anticholinergic effect causes confusion and falls in older adults." },
      { text: "Docusate 100 mg twice daily for stools", why: "Docusate carries no fall or cognitive risk." },
      { text: "Diazepam 5 mg at bedtime for anxiety", why: "A long-acting benzodiazepine raises the risk of falls in a client who already falls." },
      { text: "Glyburide 5 mg daily for diabetes", why: "Glyburide can cause prolonged hypoglycemia in older adults." },
      { text: "Atorvastatin 20 mg daily for cholesterol", why: "A moderate statin dose is appropriate and does not raise fall risk." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s15-40", {
      topic: "Timing of rapid-acting insulin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with type 2 diabetes has a prescription for insulin lispro 6 units subcutaneously before each meal. At 0745 blood glucose is 164 mg/dL (9.1 mmol/L). Breakfast trays usually arrive at 0800. When should the nurse give the insulin?",
      rationale:
        "Insulin lispro starts to act within about 15 minutes. It is given when the meal is on hand and the client is ready to eat. Giving it 2 hours early risks hypoglycemia before food arrives. Giving it 2 hours late misses the meal rise. It is not a basal insulin.",
      refs: ["Insulin lispro is given within 15 minutes before a meal."],
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "At 0600, 2 hours before breakfast", why: "Lispro given 2 hours early can cause hypoglycemia before the meal." },
      { text: "At 1000, 2 hours after breakfast", why: "Lispro given late misses the glucose rise from the meal." },
      { text: "At bedtime with the basal insulin", why: "Lispro is a mealtime insulin, not a basal insulin." },
      { text: "When the tray arrives, before eating", why: "Lispro acts fast, so it is timed to the meal in front of the client." },
    ],
    correct: 3,
  },
];
