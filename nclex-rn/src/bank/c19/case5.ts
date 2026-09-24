import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c19-5";

/** Case 5. Home health. Older adult with kidney failure in the first week of home peritoneal dialysis. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "First Home Visit After Dialysis Training",
  intro:
    "A 67-year-old woman with type 2 diabetes has chronic kidney disease with an eGFR of 9 mL/min/1.73 m2. A peritoneal dialysis catheter was placed 3 weeks ago. She finished home training 4 days ago. She does 4 exchanges a day of 2 L each. A home health nurse makes the first visit at 1000.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Lives with her husband in a single-story house.",
        "Still passes about 900 mL of urine a day.",
        "Osteoarthritis of both knees.",
        "Clinic weight 3 days ago: 72 kg.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Cues of fluid retention on home dialysis",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse records the findings from the 1000 home visit. Click to highlight the findings that need follow-up.",
        rationale:
          "Her weight rose from 72 kg to 74 kg in 3 days. She has pitting edema at both ankles and a BP of 164/92 mmHg. Less fluid drained than the 2 L instilled on 3 of 4 exchanges. Together these show fluid building up. A dry exit site, clear effluent, a normal temperature and clear lungs show no infection or lung fluid at this time.",
        sources: [SRC.harding, SRC.kdigo],
      }),
      kind: "highlight",
      passage:
        "[[Weight 74 kg]]. [[Exit site dry with no redness]]. [[2+ pitting edema at both ankles]]. [[Effluent clear and pale yellow]]. [[BP 164/92 mmHg]]. [[Temperature 36.7°C (98.1°F)]]. [[Drained less than the 2 L instilled on 3 of 4 exchanges yesterday]]. [[Lung sounds clear in all fields]].",
      spans: [
        { text: "Weight 74 kg", why: "A gain of 2 kg since the clinic weight of 72 kg 3 days ago shows fluid retention." },
        { text: "Exit site dry with no redness", why: "A dry exit site without redness shows no infection." },
        { text: "2+ pitting edema at both ankles", why: "Pitting edema shows excess fluid in the tissues." },
        { text: "Effluent clear and pale yellow", why: "Clear effluent is expected and shows no sign of peritonitis." },
        { text: "BP 164/92 mmHg", why: "A high BP can reflect retained fluid and needs follow-up." },
        { text: "Temperature 36.7°C (98.1°F)", why: "A normal temperature shows no fever." },
        { text: "Drained less than the 2 L instilled on 3 of 4 exchanges yesterday", why: "Poor drainage means fluid stays in the body and needs follow-up." },
        { text: "Lung sounds clear in all fields", why: "Clear lungs show fluid has not reached the lungs yet." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Reviewing medications in kidney failure",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the client's medication list and recent laboratory results. For each prescription, specify whether it is appropriate to continue or needs clarification with the primary health care provider.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Result"],
              rows: [
                ["eGFR", "9 mL/min/1.73 m2"],
                ["Creatinine", "5.6 mg/dL (495 micromol/L)"],
                ["Potassium", "4.2 mEq/L (4.2 mmol/L)"],
                ["Hemoglobin", "9.4 g/dL (94 g/L)"],
                ["Phosphorus", "6.2 mg/dL (2.0 mmol/L)"],
              ],
            },
          },
          {
            title: "Medication List",
            text: [
              "Metformin 500 mg by mouth twice daily.",
              "Ibuprofen 400 mg by mouth every 6 hours as needed for knee pain.",
              "Sevelamer 800 mg by mouth three times daily with meals.",
              "Furosemide 40 mg by mouth daily.",
              "Epoetin alfa subcutaneously on a set schedule.",
            ].join("\n"),
          },
        ],
        refs: ["Metformin is contraindicated when eGFR is below 30 mL/min/1.73 m2.", "Adult serum phosphorus is normally 2.5 mg/dL (0.81 mmol/L) to 4.5 mg/dL (1.45 mmol/L).", "In dialysis, epoetin starts when hemoglobin is below 10 g/dL (100 g/L) and is reduced or held as it nears or passes 11 g/dL (110 g/L)."],
        rationale:
          "Metformin is contraindicated with an eGFR under 30 mL/min/1.73 m2 and hers is 9. Ibuprofen can harm the kidney function she still has, which matters because she still passes urine. Her phosphorus is high at 6.2 mg/dL. Sevelamer binds phosphate from food, so it belongs with meals. Furosemide helps her remaining kidney function remove fluid. A hemoglobin of 9.4 g/dL is under 10 g/dL, so epoetin fits.",
        sources: [SRC.metformin, SRC.kdigo, SRC.epogen, SRC.harding],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Appropriate to continue", "Needs clarification"],
      rows: [
        { text: "Metformin 500 mg twice daily", correct: [1], why: "Metformin is contraindicated with an eGFR under 30. Hers is 9." },
        { text: "Ibuprofen 400 mg as needed", correct: [1], why: "NSAIDs can reduce the kidney function she still has." },
        { text: "Sevelamer 800 mg with meals", correct: [0], why: "Her phosphorus is 6.2 mg/dL. Sevelamer binds food phosphate at meals." },
        { text: "Furosemide 40 mg daily", correct: [0], why: "She still passes urine, so a loop diuretic can help remove fluid." },
        { text: "Epoetin alfa by injection", correct: [0], why: "A hemoglobin of 9.4 g/dL is under 10 g/dL, so treatment fits." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority problem early in home dialysis",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse considers all of the findings from the home visit and the medication review. Which problem should the nurse address first?",
        tabs: [
          {
            title: "Nurses' Notes",
            text: "1000. Weight 74 kg. 2+ pitting edema at both ankles. BP 164/92 mmHg. Drained less than the 2 L instilled on 3 of 4 exchanges yesterday. Exit site dry with no redness. Lung sounds clear.",
          },
        ],
        rationale:
          "A gain of 2 kg in 3 days, ankle edema, a BP of 164/92 mmHg and poor drainage show fluid is building up. Unchecked, it can reach the lungs. That makes fluid volume excess the priority. The exit site is dry with no redness, so infection risk is present but not active. The metformin and ibuprofen issues need clarification, but they are less urgent than the fluid gain.",
        sources: [SRC.harding, SRC.kdigo],
      }),
      kind: "mc",
      options: [
        { text: "Risk for infection at the exit site", why: "The exit site is dry with no redness, so there is no active infection." },
        { text: "Fluid volume excess", why: "Weight gain, edema, high BP and poor drainage show fluid is building up." },
        { text: "Knee pain from osteoarthritis", why: "Knee pain matters, but it does not threaten her breathing or circulation." },
        { text: "Unsafe medication prescriptions", why: "The prescriptions need clarification, but fluid excess poses the nearer threat." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "HPM",
        topic: "Diet and fluid teaching on peritoneal dialysis",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "The nurse plans teaching to help the client manage fluid and nutrition on peritoneal dialysis. Which topics should the nurse include? Select all that apply.",
        rationale:
          "Salt drives thirst and fluid retention, so salty and processed foods are limited. Fluid stays within the daily limit prescribed. A weight each morning after the drain shows fluid gain early. Peritoneal dialysis removes protein with each exchange, so protein is eaten at each meal. Extra water adds to fluid excess. A weekly weight misses fast gains. Cutting protein raises the risk of malnutrition on this therapy.",
        sources: [SRC.kdoqi, SRC.harding],
      }),
      kind: "sata",
      options: [
        { text: "Drink extra water to flush the kidneys", why: "Extra water adds to the fluid excess she already has." },
        { text: "Weigh once a week on the same day", why: "A weekly weight misses a fast gain like the 2 kg in 3 days." },
        { text: "Limit salty and processed foods", why: "Salt causes thirst and fluid retention." },
        { text: "Weigh each morning after draining", why: "A daily weight at the same point shows fluid gain early." },
        { text: "Cut protein to one small serving a day", why: "Dialysis removes protein, so a low protein intake risks malnutrition." },
        { text: "Keep fluids to the daily limit", why: "A set fluid limit helps match intake to what she can remove." },
        { text: "Eat a protein food at each meal", why: "Protein lost in the dialysate needs replacing through the diet." },
      ],
      correct: [2, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Aseptic sequence for a bag exchange",
        cjmm: "action",
        process: "teaching",
        difficulty: 3,
        stem: "The nurse watches the client do a bag exchange with a twin-bag system to check her technique. Place the steps of the exchange in order.",
        rationale:
          "Hand hygiene comes first so clean hands handle the connections. The new twin-bag set is then connected to her transfer set. The used fluid drains out first. A small amount of fresh solution is flushed into the drain bag to wash any bacteria out of the line. The abdomen is filled last. A microwave heats the bag unevenly. An open line lets bacteria in.",
        sources: [SRC.daly, SRC.ispd, SRC.harding],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["First", "Second", "Third", "Fourth", "Fifth"],
      tokens: [
        { text: "Drain the used fluid", why: "Draining follows the connection and comes before the flush." },
        { text: "Warm the bag in a microwave", why: "A microwave heats unevenly and can burn the peritoneum." },
        { text: "Fill the abdomen", why: "Filling comes last, after the line is flushed." },
        { text: "Perform hand hygiene", why: "Clean hands come first so the connections stay clean." },
        { text: "Flush fresh fluid to the drain bag", why: "The flush washes bacteria from the line into the used fluid before the fill." },
        { text: "Leave the line open between steps", why: "An open line lets bacteria reach the catheter." },
        { text: "Connect the new set", why: "The set is connected after hand hygiene and before draining." },
      ],
      correct: [3, 6, 0, 4, 2],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Monitoring the response to an anemia drug",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "Eight weeks later the client returns to the dialysis clinic. The nurse reviews her results before the next epoetin alfa dose. Which two findings should the nurse report to the primary health care provider before giving the dose? Select two.",
        tabs: [
          {
            title: "Clinic Visit, Week 8",
            text: [
              "Hemoglobin 11.6 g/dL (116 g/L), up from 9.4 g/dL (94 g/L).",
              "BP 166/98 mmHg.",
              "Weight 72 kg. No ankle edema.",
              "Reports less tiredness when climbing stairs.",
              "Injection sites clear.",
              "Drained volumes exceed the volumes instilled.",
            ].join("\n"),
          },
        ],
        refs: ["In dialysis, epoetin is reduced or held as hemoglobin nears or passes 11 g/dL (110 g/L)."],
        rationale:
          "A hemoglobin of 11.6 g/dL is above 11 g/dL. Higher levels on epoetin raise the risk of stroke and clots, so the dose is reduced or held. Epoetin can raise BP. A BP of 166/98 mmHg with her weight back to 72 kg and no edema needs review. Less tiredness shows the anemia is improving. Clear sites and drain volumes above the fill volumes are expected.",
        sources: [SRC.epogen, { body: "Health Canada", work: "Drug Product Database, EPREX (epoetin alfa) Sterile Solution, DIN 02231584", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=50950" }, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report hemoglobin in g/L only, so this result reads 116 g/L against the 110 g/L limit. Epoetin alfa is sold in Canada as Eprex, not Epogen.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Less tiredness on stairs", why: "Less fatigue shows the anemia is improving." },
        { text: "Hemoglobin 11.6 g/dL", why: "A level above 11 g/dL calls for a lower dose or a held dose." },
        { text: "Weight back to 72 kg", why: "Her weight matches the clinic baseline and shows fluid control." },
        { text: "Injection sites clear", why: "Clear sites show no local reaction to the injections." },
        { text: "BP 166/98 mmHg", why: "Epoetin can raise BP. High BP needs control during treatment." },
        { text: "Drain volumes exceed fills", why: "Drainage above the fill volume shows fluid is being removed." },
      ],
      correct: [1, 4],
    },
  ],
};
