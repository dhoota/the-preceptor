import type { Item } from "@/engine/types";
import { ASHP_HD, HEPB, HINKLE, HYPERGLYCEMIC_CRISES, LEHNE, OSHA_BBP, POTTER, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s26-41", {
      need: "SIPC",
      topic: "First flap of a sterile wrapped kit",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse places a sterile wrapped kit on a clean, dry over-bed table to insert a urinary catheter. Which flap of the outer wrapper should the nurse open first?",
      rationale:
        "The flap farthest from the nurse is opened first. The nurse then opens the side flaps and the near flap last. This order means the nurse never reaches across the exposed sterile contents. Opening the near flap first leaves the far flap to be opened by reaching over the field. Starting with a side flap has the same problem.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "The flap closest to the nurse", why: "Opening the near flap first means reaching over the field to open the far one." },
      { text: "The flap on the nurse's right side", why: "Opening a side flap first leaves the far flap to be opened across the field." },
      { text: "The flap on the nurse's left side", why: "Opening a side flap first leaves the far flap to be opened across the field." },
      { text: "The flap farthest from the nurse", why: "Opening the far flap first avoids reaching over the sterile contents." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s26-42", {
      need: "RRP",
      topic: "Laboratory trend during ketoacidosis treatment",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 23-year-old client with type 1 diabetes is treated for diabetic ketoacidosis with IV 0.9% sodium chloride, an IV insulin infusion and potassium in the IV fluid. The nurse reviews the flow sheet at 1400. Which findings need to be reported to the primary health care provider now? Select all that apply.",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "0800", "1000", "1200", "1400"],
            rows: [
              ["Glucose, mg/dL (mmol/L)", "486 (27.0)", "390 (21.6)", "305 (16.9)", "238 (13.2)"],
              ["Potassium (mEq/L)", "5.4", "4.6", "3.9", "3.4"],
              ["Bicarbonate (mEq/L)", "9", "12", "15", "18"],
              ["Venous pH", "7.12", "7.19", "7.25", "7.29"],
              ["Heart rate (/minute)", "124", "112", "102", "94"],
            ],
          },
        },
      ],
      rationale:
        "Glucose fell from 486 to 238 mg/dL (13.2 mmol/L), below 250 mg/dL. Insulin still has to clear the ketones, so dextrose is added to the fluid to prevent hypoglycemia. Potassium fell from 5.4 to 3.4 mEq/L as insulin moved it into cells. It is now below the goal of 4 to 5 mEq/L, so replacement needs to change. Rising bicarbonate and pH and a falling heart rate show the treatment is working.",
      refs: [
        "In ketoacidosis, dextrose is added to the IV fluid when glucose falls below 250 mg/dL (13.9 mmol/L).",
        "During ketoacidosis treatment, the potassium goal is 4 to 5 mEq/L (4 to 5 mmol/L).",
      ],
      sources: [HYPERGLYCEMIC_CRISES, { body: "Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15" }],
      canada: "Diabetes Canada adds dextrose when plasma glucose reaches 14.0 mmol/L and holds insulin if potassium falls below 3.3 mmol/L. The glucose of 13.2 mmol/L and potassium of 3.4 mmol/L still need a report now.",
    }),
    kind: "sata",
    options: [
      { text: "Glucose now below 250 mg/dL (13.9 mmol/L)", why: "Dextrose is added at this point so insulin can continue without causing hypoglycemia." },
      { text: "Bicarbonate rising toward normal", why: "A rise from 9 to 18 mEq/L shows the acidosis is clearing as expected." },
      { text: "Potassium now 3.4 mEq/L", why: "Potassium is below the goal of 4 to 5 mEq/L and still falling with insulin." },
      { text: "Venous pH rising since 0800", why: "A rise from 7.12 to 7.29 shows the expected response to insulin." },
      { text: "Heart rate falling to 94/minute", why: "A slower heart rate shows the fluid deficit is being corrected." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s26-43", {
      need: "SIPC",
      topic: "Sending blood and urine specimens safely",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse collects a blood culture and a urine sample at the bedside. The outside of the blood culture bottle has a smear of blood on it. Which actions follow the bloodborne pathogens standard for sending the specimens? Select all that apply.",
      rationale:
        "Specimens travel in closed containers that prevent leaks. The transport bags carry a biohazard label or color code. A container with blood on its outside goes inside a second leak-proof container. A uniform pocket carries contamination out of the care area. A syringe sent with its needle attached exposes every handler to a sharps injury. A paper towel does not stop leaks.",
      sources: [OSHA_BBP, { body: "Canadian Centre for Occupational Health and Safety", work: "Health and Safety Legislation in Canada: Introduction", year: 2022, url: "https://www.ccohs.ca/oshanswers/legisl/intro.html" }],
      canada: "In Canada, specimen handling duties for hospital staff come from provincial or territorial occupational health and safety acts, not a federal standard. The details vary by province.",
    }),
    kind: "sata",
    options: [
      { text: "Close the containers before transport", why: "Closed containers prevent leaks during handling and transport." },
      { text: "Carry the bottle in a uniform pocket", why: "A pocket spreads contamination to clothing and is not a leak-proof container." },
      { text: "Put the smeared bottle in a second bag", why: "A container soiled on the outside goes inside a second leak-proof container." },
      { text: "Send the syringe with the needle attached", why: "An attached needle exposes every handler to a sharps injury." },
      { text: "Wrap the urine cup in a paper towel", why: "Paper towels absorb fluid but do not contain a leak." },
      { text: "Use bags with a biohazard label", why: "Labeling or color coding warns handlers of the contents." },
    ],
    correct: [0, 2, 5],
  },
  {
    ...meta("rn-s26-44", {
      need: "PPT",
      topic: "Time left on a pump infusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A bag of 1 000 mL of 0.9% sodium chloride runs by infusion pump at 125 mL/hour. At 1100 the pump shows that 400 mL have infused. How many hours remain until the bag is empty?",
      rationale:
        "The volume left is 1000 minus 400, which is 600 mL. At 125 mL/hour, 600 mL takes 4.8 hours. Knowing the time left lets the nurse have the next bag ready before the line runs dry. Dividing the infused volume or the whole bag by the rate answers a different question.",
      calc: { expr: "(1000 - 400) / 125", answer: 4.8, unit: "hours", round: 1, steps: ["1000 - 400 = 600", "600 / 125 = 4.8"] },
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "0.2 hours", why: "This divides the rate by the remaining volume instead of the reverse." },
      { text: "3.2 hours", why: "This divides the 400 mL already infused by the rate. It is the time already run." },
      { text: "4.8 hours", why: "The 600 mL left divided by 125 mL/hour is 4.8 hours." },
      { text: "8.0 hours", why: "This divides the whole 1 000 mL bag by the rate and ignores what has infused." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s26-45", {
      need: "RRP",
      topic: "Findings that separate HHS from ketoacidosis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 78-year-old client with type 2 diabetes has had 5 days of poor intake and increasing confusion. Blood glucose is 842 mg/dL (46.7 mmol/L). Which two additional findings support hyperosmolar hyperglycemic state rather than diabetic ketoacidosis? Select two.",
      rationale:
        "Hyperosmolar hyperglycemic state has extreme glucose and high osmolality without much ketosis or acidosis. An effective osmolality of 338 mOsm/kg is above 300 mOsm/kg. A pH of 7.36 is above 7.3, so there is no acidosis. A bicarbonate of 12 mEq/L, a beta-hydroxybutyrate of 4.2 mmol/L, large urine ketones and deep rapid breathing all point to ketoacidosis.",
      refs: [
        "Hyperosmolar hyperglycemic state: glucose 600 mg/dL (33.3 mmol/L) or more, effective osmolality above 300 mOsm/kg, beta-hydroxybutyrate below 3.0 mmol/L, pH 7.3 or more and bicarbonate 15 mmol/L or more.",
      ],
      sources: [HYPERGLYCEMIC_CRISES, { body: "Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42(Suppl 1):S109", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-15" }],
      canada: "Diabetes Canada describes HHS with plasma glucose typically 34.0 mmol/L or more and osmolality above 320 mOsm/kg. This client's glucose of 46.7 mmol/L and osmolality of 338 mOsm/kg meet both.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Serum bicarbonate 12 mEq/L", why: "A bicarbonate below 15 mEq/L shows metabolic acidosis, which fits ketoacidosis." },
      { text: "Effective osmolality 338 mOsm/kg", why: "An osmolality above 300 mOsm/kg is a defining feature of this state." },
      { text: "Beta-hydroxybutyrate 4.2 mmol/L", why: "A level of 3.0 mmol/L or more shows significant ketosis." },
      { text: "Blood pH 7.36", why: "A pH of 7.3 or more shows the absence of acidosis." },
      { text: "Urine ketones 3+", why: "Large urine ketones point to ketoacidosis." },
      { text: "Deep, rapid respirations", why: "Deep rapid breathing is a response to acidosis, which fits ketoacidosis." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s26-46", {
      need: "SIPC",
      topic: "Low antibody level after hepatitis B vaccine",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A newly hired nurse has completed a 3-dose hepatitis B vaccine series. An anti-HBs test 6 weeks after the last dose shows 4 mIU/mL. The nurse has had no exposure to blood. What is the next step for this nurse?",
      rationale:
        "The anti-HBs level of 4 mIU/mL is below 10 mIU/mL. The first series did not produce a protective response. The nurse receives a second complete series and is tested again afterward. Immune globulin is given only after an exposure. Stopping here would leave the nurse unprotected. Waiting years to retest delays protection.",
      refs: ["A health care worker with anti-HBs below 10 mIU/mL after a primary series receives a second complete series and is retested."],
      sources: [HEPB],
    }),
    kind: "mc",
    options: [
      { text: "No further hepatitis B vaccine doses", why: "A level below 10 mIU/mL is not protective, so more doses are needed." },
      { text: "A second complete hepatitis B vaccine series", why: "Revaccination with a full series is the step after a level below 10 mIU/mL." },
      { text: "Hepatitis B immune globulin right away", why: "Immune globulin is for exposures. This nurse has had none." },
      { text: "A repeat antibody test in 5 years", why: "Waiting leaves the nurse unprotected for years." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s26-47", {
      need: "RRP",
      topic: "Which called result to report first",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse receives four laboratory results by phone at the same time. Which result should the nurse report to the primary health care provider first?",
      rationale:
        "A sodium of 119 mEq/L with new confusion shows brain swelling from low sodium. It can progress to seizures and coma, so it is reported first. A potassium of 5.3 mEq/L is a mild rise that is common in chronic kidney disease. An INR of 2.7 is within the warfarin target of 2.0 to 3.0. A mild rise in white cells is common on the first day after surgery.",
      refs: ["The INR target for warfarin in atrial fibrillation is 2.0 to 3.0."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report sodium and potassium in mmol/L with the same numbers, and white cells as 11.8 × 10^9/L. The sodium of 119 mmol/L is still the result to report first.",
    }),
    kind: "mc",
    options: [
      { text: "Potassium 5.3 mEq/L in a client with kidney disease", why: "A mild rise is common in chronic kidney disease and is less urgent." },
      { text: "INR 2.7 in a client taking warfarin for atrial fibrillation", why: "An INR of 2.7 is within the target range of 2.0 to 3.0." },
      { text: "Sodium 119 mEq/L in a client with new confusion", why: "Severe low sodium with confusion can lead to seizures and needs quick treatment." },
      { text: "WBC 11 800/mm3 in a client on day 1 after surgery", why: "A mild rise in white cells is a common stress response after surgery." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s26-48", {
      need: "SIPC",
      topic: "Removing protection after a hazardous infusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse has finished giving an IV antineoplastic drug while wearing two pairs of chemotherapy gloves and a coated gown. Place the steps for removing the equipment in order.",
      rationale:
        "The outer gloves carry the most drug residue, so they come off first. The inner gloves stay on to protect the hands while the gown comes off. The inner gloves come off last. Hands are then washed with soap and water. Alcohol rub does not remove drug residue and may help it pass into the skin.",
      sources: [ASHP_HD],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Remove the gown", why: "The gown comes off while the inner gloves still cover the hands." },
      { text: "Clean hands with alcohol rub", why: "Alcohol rub does not remove hazardous drug residue and may increase skin absorption." },
      { text: "Remove the outer gloves", why: "The outer gloves are the most contaminated, so they come off first." },
      { text: "Wash hands with soap and water", why: "Soap and water remove any residue after all equipment is off." },
      { text: "Remove the inner gloves", why: "The inner gloves come off last to protect the hands during gown removal." },
    ],
    correct: [2, 0, 4, 3],
  },
  {
    ...meta("rn-s26-49", {
      need: "SIPC",
      topic: "Food stored with client specimens",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse sees a coworker put a lunch bag in the unit refrigerator that holds client blood and urine specimens waiting for pickup. What should the nurse tell the coworker?",
      rationale:
        "Food and drink may not be kept where blood or other body fluids are stored. A refrigerator used for specimens is a contaminated space. The lunch goes in a refrigerator that holds no specimens. A plastic bag, a shelf choice or a label does not change where the food is stored.",
      sources: [OSHA_BBP],
    }),
    kind: "mc",
    options: [
      { text: "Store the lunch in a refrigerator with no specimens", why: "Food is kept apart from any place where blood or body fluids are stored." },
      { text: "Seal the lunch in a plastic bag first", why: "A bag does not make it acceptable to store food with specimens." },
      { text: "Keep the lunch on the top shelf only", why: "Shelf position does not change the rule against storing food with specimens." },
      { text: "Label the lunch bag with a name and date", why: "A label identifies the owner but does not remove the contamination risk." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s26-50", {
      need: "RRP",
      topic: "Causes of a low INR on warfarin",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client takes warfarin for atrial fibrillation. The INR target is 2.0 to 3.0. For 6 months the INR has stayed in range. Today it is 1.4. Which factors could explain the lower INR? Select all that apply.",
      rationale:
        "An INR of 1.4 is below the target of 2.0 to 3.0. Anything that adds vitamin K, lowers the dose taken or speeds warfarin breakdown lowers the INR. A daily kale smoothie adds vitamin K. Missed doses lower the drug level. Rifampin induces liver enzymes that break down warfarin. Trimethoprim-sulfamethoxazole, amiodarone and regular acetaminophen raise the INR instead.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Drinks a kale smoothie daily since last month", why: "Kale is rich in vitamin K, which opposes warfarin." },
      { text: "Takes trimethoprim-sulfamethoxazole for a bladder infection", why: "This antibiotic slows warfarin breakdown and raises the INR." },
      { text: "Missed several doses while traveling", why: "Missed doses lower the warfarin effect and the INR." },
      { text: "Started amiodarone for rhythm control", why: "Amiodarone slows warfarin breakdown and raises the INR." },
      { text: "Started rifampin for latent tuberculosis", why: "Rifampin speeds warfarin breakdown in the liver and lowers the INR." },
      { text: "Takes acetaminophen 1 g four times daily", why: "Regular acetaminophen use can raise the INR." },
    ],
    correct: [0, 2, 4],
  },
];
