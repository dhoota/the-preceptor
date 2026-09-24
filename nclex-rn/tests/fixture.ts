import type { CaseStudy, Item, ItemMeta } from "@/engine/types";

/**
 * One clean item of each type. They pass every quality gate and are the
 * worked examples docs/ITEM_SPEC.md points writers to. They never ship.
 * tests/tripwires.test.ts plants known defects in copies of them.
 */

const meta = (id: string, over: Partial<ItemMeta>): ItemMeta => ({
  id,
  need: "PPT",
  topic: "Example",
  cjmm: "action",
  process: "nursing-process",
  difficulty: 3,
  stem: "",
  rationale: "",
  sources: [],
  canada: "",
  reviewed: false,
  version: 1,
  ...over,
});

export const MC_CALC: Item = {
  ...meta("fx-mc", {
    need: "PPT",
    topic: "Heparin infusion rate",
    cjmm: "action",
    difficulty: 3,
    stem: "The primary health care provider prescribes heparin 18 units/kg/hour IV for a client who weighs 80 kg. The pharmacy supplies heparin 25 000 units in 250 mL of dextrose 5% in water. At what rate should the nurse set the infusion pump?",
    rationale:
      "The dose is 18 units/kg/hour for a client of 80 kg, which is 1440 units/hour. The bag holds 25 000 units in 250 mL, so each mL holds 100 units. Dividing 1440 units/hour by 100 units/mL gives 14.4 mL/hour. Heparin is a high-alert medication, so the rate is checked independently before the infusion starts.",
    calc: { expr: "18 * 80 / (25000 / 250)", answer: 14.4, unit: "mL/hour", round: 1, steps: ["18 * 80 = 1440", "25000 / 250 = 100", "1440 / 100 = 14.4"] },
    sources: [
      { body: "Institute for Safe Medication Practices", work: "ISMP List of High-Alert Medications in Acute Care Settings", year: 2024 },
    ],
  }),
  kind: "mc",
  options: [
    { text: "7.2 mL/hour", why: "This is half the correct rate. It underdoses the heparin." },
    { text: "14.4 mL/hour", why: "1440 units/hour divided by 100 units/mL is 14.4 mL/hour." },
    { text: "18 mL/hour", why: "This treats the units/kg dose as a volume and ignores both weight and concentration." },
    { text: "144 mL/hour", why: "This is 10 times the correct rate. It comes from misplacing the decimal." },
  ],
  correct: 1,
};

export const SATA: Item = {
  ...meta("fx-sata", {
    need: "SIPC",
    topic: "Airborne precautions",
    cjmm: "action",
    difficulty: 2,
    stem: "A client with a productive cough, night sweats and weight loss is admitted with suspected pulmonary tuberculosis. Which actions should the nurse take? Select all that apply.",
    rationale:
      "Suspected pulmonary tuberculosis needs airborne precautions from admission. The client goes into a negative pressure airborne infection isolation room with the door kept closed. Staff wear a fit-tested N95 respirator. The client wears a surgical mask whenever they leave the room. A surgical mask does not protect staff from airborne droplet nuclei.",
    sources: [
      { body: "Public Health Agency of Canada", work: "Canadian Tuberculosis Standards, 8th edition", year: 2022 },
      { body: "Siegel JD, Rhinehart E, Jackson M, Chiarello L. Healthcare Infection Control Practices Advisory Committee", work: "2007 Guideline for Isolation Precautions", year: 2007 },
    ],
    canada: "Canadian standards use the same airborne measures. Provincial policy may name the room an airborne infection isolation room.",
  }),
  kind: "sata",
  options: [
    { text: "Assign a negative pressure room", why: "Negative pressure keeps airborne droplet nuclei inside the room." },
    { text: "Wear a surgical mask to enter", why: "A surgical mask does not filter droplet nuclei. Staff need a fit-tested N95 respirator." },
    { text: "Keep the room door closed", why: "A closed door keeps the negative pressure working." },
    { text: "Wear a fit-tested N95 respirator", why: "An N95 respirator filters the small particles that carry tuberculosis." },
    { text: "Remove the respirator in the room", why: "The respirator comes off after leaving the room, so the wearer is not exposed at the door." },
    { text: "Mask the client during transport", why: "A surgical mask on the client limits spread outside the isolation room." },
  ],
  correct: [0, 2, 3, 5],
};

export const MSN: Item = {
  ...meta("fx-msn", {
    need: "PPT",
    topic: "Warfarin teaching",
    cjmm: "evaluate",
    process: "teaching",
    difficulty: 2,
    stem: "The nurse teaches a client who has a new prescription for warfarin. Which two statements by the client show understanding? Select two.",
    rationale:
      "Warfarin needs steady vitamin K intake and regular INR checks. A steady weekly intake of leafy greens keeps the INR stable. Scheduled INR tests guide dose changes. Aspirin raises bleeding risk. A missed dose is not doubled. Cutting out greens is not needed and can raise the INR.",
    sources: [{ body: "Thrombosis Canada", work: "Clinical Guide: Warfarin", year: 2024 }],
  }),
  kind: "msn",
  select: 2,
  options: [
    { text: "\"I will keep my leafy greens steady.\"", why: "Steady vitamin K intake keeps the warfarin effect stable." },
    { text: "\"I will take aspirin for headaches.\"", why: "Aspirin adds antiplatelet effect and raises bleeding risk." },
    { text: "\"I will double up after a missed dose.\"", why: "Doubling a dose can push the INR too high and cause bleeding." },
    { text: "\"I will go for my INR tests as booked.\"", why: "Regular INR tests guide safe dose changes." },
    { text: "\"I will stop eating green vegetables.\"", why: "Cutting vitamin K suddenly raises the INR. Intake should stay steady." },
    { text: "\"I will switch to a firm toothbrush.\"", why: "A soft toothbrush lowers gum bleeding. A firm one raises it." },
  ],
  correct: [0, 3],
};

export const DND_ORDER: Item = {
  ...meta("fx-dnd", {
    need: "SIPC",
    topic: "Donning personal protective equipment",
    cjmm: "action",
    difficulty: 2,
    stem: "The nurse prepares to enter the room of a client on contact and droplet precautions. Place the steps for putting on protective equipment in order.",
    rationale:
      "Hand hygiene comes first so clean hands handle the equipment. The gown goes on next. The mask follows, then eye protection over the mask. Gloves go on last so they cover the gown cuffs. Shoe covers are not part of this sequence.",
    sources: [
      { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2016 },
    ],
  }),
  kind: "dnd",
  scoring: "zero-one",
  targets: ["First", "Second", "Third", "Fourth", "Fifth"],
  tokens: [
    { text: "Put on the gown", why: "The gown goes on after hand hygiene and before the mask." },
    { text: "Perform hand hygiene", why: "Clean hands come first so the equipment stays clean." },
    { text: "Put on gloves", why: "Gloves go on last so they cover the gown cuffs." },
    { text: "Put on the mask", why: "The mask goes on after the gown and before eye protection." },
    { text: "Put on shoe covers", why: "Shoe covers are not part of the donning sequence for these precautions." },
    { text: "Put on eye protection", why: "Eye protection goes over the mask and before gloves." },
  ],
  correct: [1, 0, 3, 5, 2],
};

export const CLOZE_TRIAD: Item = {
  ...meta("fx-cloze", {
    need: "RRP",
    topic: "Venous thromboembolism after surgery",
    cjmm: "prioritize",
    difficulty: 3,
    stem: "A client is on day 2 after a right total hip arthroplasty. The right calf is warm and tender and measures 4 cm larger than the left. Incision pain is 3 on a 0 to 10 scale. Temperature is 37.2°C (99.0°F). Complete the following sentence by choosing from the lists of options.",
    rationale:
      "A warm, tender calf that is 4 cm larger than the other leg after hip arthroplasty points to deep vein thrombosis. Hip surgery carries a high risk of venous thromboembolism. Incision pain of 3 is expected on day 2. A temperature of 37.2°C does not suggest infection. Nothing in the stem suggests dislocation.",
    sources: [
      {
        body: "Falck-Ytter Y, Francis CW, Johanson NA, et al. American College of Chest Physicians",
        work: "Prevention of VTE in Orthopedic Surgery Patients. Chest 141(2 Suppl):e278S",
        year: 2012,
      },
    ],
  }),
  kind: "cloze",
  scoring: "triad",
  template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
  blanks: [
    {
      options: [
        { text: "deep vein thrombosis", why: "Unilateral calf swelling, warmth and tenderness after hip surgery fit a clot." },
        { text: "hip dislocation", why: "Dislocation shows as a shortened, rotated leg and hip pain. The stem gives neither." },
        { text: "wound infection", why: "The stem gives no wound redness or drainage and the temperature is 37.2°C." },
        { text: "fat embolism", why: "Fat embolism shows with confusion, hypoxia and a rash. The stem gives none of these." },
      ],
      correct: 0,
    },
    {
      options: [
        { text: "a larger right calf", why: "A calf 4 cm larger than the other is a sign of venous obstruction." },
        { text: "incision pain", why: "Pain of 3 on day 2 is expected after hip arthroplasty." },
        { text: "a temperature of 37.2°C", why: "37.2°C is within the normal range and points to no condition here." },
        { text: "clear lung sounds", why: "Clear lung sounds are not given in the stem and would not point to a clot." },
      ],
      correct: 0,
    },
    {
      options: [
        { text: "calf warmth and tenderness", why: "Local warmth and tenderness go with inflammation around a clot." },
        { text: "pain rated 3 of 10", why: "Mild incision pain is expected on day 2 and is not a sign of a clot." },
        { text: "a normal temperature", why: "A normal temperature does not support any of the listed conditions." },
        { text: "a dry dressing", why: "The stem does not describe the dressing. A dry dressing is not a warning sign." },
      ],
      correct: 0,
    },
  ],
};

export const HIGHLIGHT: Item = {
  ...meta("fx-hl", {
    need: "RRP",
    topic: "Care after cardiac catheterization",
    cjmm: "recognize",
    difficulty: 3,
    stem: "The nurse reviews a note on a client 2 hours after cardiac catheterization through the right femoral artery. Click to highlight the findings that need follow-up.",
    rationale:
      "A cool, pale foot with a faint pedal pulse on the side of the puncture points to reduced blood flow to the limb. New back pain with a fall in BP from 132/80 to 98/60 mmHg can mean retroperitoneal bleeding, which a dry groin dressing does not rule out. Alert orientation and a normal void are expected.",
    sources: [
      {
        body: "Hinkle JL, Cheever KH, Overbaugh KJ",
        work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition",
        year: 2022,
      },
    ],
  }),
  kind: "highlight",
  passage:
    "[[Alert and oriented.]] [[Right groin dressing dry and intact.]] [[Right foot cool and pale.]] [[Right pedal pulse faint.]] [[Reports new back pain, 6 of 10.]] [[BP 98/60 mmHg]], down from 132/80 mmHg at 1 hour. [[Voided 300 mL of clear urine.]]",
  spans: [
    { text: "Alert and oriented.", why: "Normal orientation needs no follow-up." },
    { text: "Right groin dressing dry and intact.", why: "A dry dressing is expected. It does not rule out hidden bleeding." },
    { text: "Right foot cool and pale.", why: "A cool, pale foot on the puncture side suggests reduced arterial flow." },
    { text: "Right pedal pulse faint.", why: "A faint distal pulse on the puncture side needs prompt follow-up." },
    { text: "Reports new back pain, 6 of 10.", why: "New back pain after femoral access can signal retroperitoneal bleeding." },
    { text: "BP 98/60 mmHg", why: "A fall from 132/80 mmHg in 1 hour can signal bleeding." },
    { text: "Voided 300 mL of clear urine.", why: "A normal void is expected after contrast and fluids." },
  ],
  correct: [2, 3, 4, 5],
};

export const MATRIX_SINGLE: Item = {
  ...meta("fx-mx1", {
    need: "PA",
    topic: "Fluid volume assessment",
    cjmm: "analyze",
    difficulty: 2,
    stem: "The nurse assesses several clients. For each finding, specify whether it is consistent with fluid volume deficit or fluid volume excess.",
    rationale:
      "Crackles, distended neck veins, a rapid weight gain and a bounding pulse show too much fluid in the vascular space. Dry mucous membranes and a high urine specific gravity show the body conserving water in a deficit.",
    sources: [
      { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 },
    ],
  }),
  kind: "matrix",
  mode: "single",
  columns: ["Fluid volume deficit", "Fluid volume excess"],
  rows: [
    { text: "Crackles in both lung bases", correct: [1], why: "Fluid in the alveoli causes crackles in fluid excess." },
    { text: "Dry mucous membranes", correct: [0], why: "Dry membranes reflect low body water." },
    { text: "Distended neck veins", correct: [1], why: "Raised venous volume distends the neck veins." },
    { text: "Urine specific gravity 1.032", correct: [0], why: "Concentrated urine shows the kidneys conserving water." },
    { text: "Weight gain of 2 kg in 2 days", correct: [1], why: "Rapid weight gain reflects retained fluid." },
    { text: "Bounding pulse", correct: [1], why: "A bounding pulse reflects a high circulating volume." },
  ],
};

export const MATRIX_MULTI: Item = {
  ...meta("fx-mx2", {
    need: "SIPC",
    topic: "Transmission-based precautions",
    cjmm: "generate",
    difficulty: 3,
    stem: "The nurse plans care for clients on different precautions. For each measure, specify the precautions it belongs to. Each measure may belong to more than one.",
    rationale:
      "Hand hygiene is part of every level of precaution. Airborne precautions add a negative pressure room and an N95 respirator. Droplet precautions add a surgical mask for close contact. Contact precautions add a gown and gloves and dedicated equipment.",
    sources: [
      { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2016 },
    ],
  }),
  kind: "matrix",
  mode: "multi",
  columns: ["Airborne", "Droplet", "Contact"],
  rows: [
    { text: "Negative pressure room", correct: [0], why: "Only airborne spread needs negative pressure." },
    { text: "Gown and gloves on entry", correct: [2], why: "Gown and gloves block spread by touch." },
    { text: "Hand hygiene before and after care", correct: [0, 1, 2], why: "Hand hygiene is part of every precaution level." },
    { text: "Dedicated stethoscope", correct: [2], why: "Dedicated equipment stops spread on shared surfaces." },
    { text: "Fit-tested N95 respirator", correct: [0], why: "An N95 filters droplet nuclei in airborne spread." },
    { text: "Surgical mask for close care", correct: [1], why: "A surgical mask blocks large droplets at close range." },
  ],
};

export const BOWTIE: Item = {
  ...meta("fx-bow", {
    need: "PA",
    topic: "Hyperglycemic emergency",
    cjmm: "generate",
    process: "clinical-judgment",
    difficulty: 4,
    stem: "A 19-year-old client with type 1 diabetes has vomited for 2 days. Respirations are deep at 28/minute and the breath smells fruity. Blood glucose is 520 mg/dL (28.9 mmol/L). Serum potassium is 4.8 mEq/L (4.8 mmol/L). Urine ketones are large. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
    rationale:
      "Type 1 diabetes, vomiting, deep rapid breathing, fruity breath, a glucose of 520 mg/dL and large ketones fit diabetic ketoacidosis. Treatment starts with IV 0.9% sodium chloride and an IV insulin infusion. The potassium of 4.8 mEq/L is above the 3.3 mEq/L floor for starting insulin. Insulin drives potassium into cells, so potassium is monitored. Glucose is checked hourly so the fluids can change before glucose falls too far.",
    refs: ["Insulin starts only when serum potassium is at least 3.3 mEq/L (3.3 mmol/L)."],
    sources: [
      { body: "Goguen J, Gilbert J. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hyperglycemic Emergencies in Adults. Canadian Journal of Diabetes 42:S109", year: 2018 },
    ],
    canada: "Canadian guidelines and labs report glucose and potassium in mmol/L only.",
  }),
  kind: "bowtie",
  conditions: [
    { text: "Diabetic ketoacidosis", why: "Ketones, deep breathing and high glucose in type 1 diabetes fit this condition." },
    { text: "Hyperosmolar hyperglycemic state", why: "This state has little or no ketosis and usually occurs in type 2 diabetes." },
    { text: "Hypoglycemia", why: "The glucose is 520 mg/dL, far above the normal range." },
    { text: "Lactic acidosis", why: "Large urine ketones point to ketoacidosis, not lactic acidosis." },
  ],
  actions: [
    { text: "Infuse IV 0.9% sodium chloride", why: "Fluid replacement comes first to correct the deficit from vomiting and diuresis." },
    { text: "Give 15 g of oral glucose", why: "Oral glucose treats hypoglycemia. This client is hyperglycemic." },
    { text: "Start the IV insulin infusion", why: "IV insulin stops ketone production. Potassium is high enough to start." },
    { text: "Give IV sodium bicarbonate", why: "Bicarbonate is kept for severe acidosis and is not a first action here." },
    { text: "Hold all IV fluids for now", why: "Holding fluids would worsen the volume deficit." },
  ],
  parameters: [
    { text: "Serum albumin level", why: "Albumin does not guide acute ketoacidosis treatment." },
    { text: "Serum potassium level", why: "Insulin moves potassium into cells, so the level can fall fast." },
    { text: "Hemoglobin A1C level", why: "A1C reflects long-term control and does not guide acute care." },
    { text: "Hourly blood glucose", why: "Hourly glucose guides the insulin rate and when to add dextrose." },
    { text: "Platelet count level", why: "Platelets do not guide ketoacidosis treatment." },
  ],
  correct: { condition: 0, actions: [0, 2], parameters: [1, 3] },
};

export const TREND: Item = {
  ...meta("fx-trend", {
    need: "PA",
    topic: "Postoperative hemorrhage",
    cjmm: "analyze",
    difficulty: 3,
    trend: true,
    stem: "The nurse reviews the flow sheet of a client who had abdominal surgery this morning. Based on the trend, which condition is most likely developing?",
    tabs: [
      {
        title: "Vital Signs",
        table: {
          head: ["Time", "0800", "1000", "1200", "1400"],
          rows: [
            ["Heart rate (/minute)", "84", "96", "108", "122"],
            ["BP (mmHg)", "128/76", "118/70", "104/62", "92/54"],
            ["Urine output (mL/hour)", "60", "45", "30", "18"],
          ],
        },
      },
    ],
    rationale:
      "From 0800 to 1400 the heart rate rises from 84 to 122/minute while the BP falls from 128/76 to 92/54 mmHg. Urine output drops from 60 to 18 mL/hour. A rising pulse with falling pressure and urine output after surgery is the pattern of volume loss from bleeding. Fluid excess would raise the BP. Pain raises the pulse but does not cut urine output this far.",
    sources: [
      { body: "Hinkle JL, Cheever KH, Overbaugh KJ", work: "Brunner and Suddarth's Textbook of Medical-Surgical Nursing, 15th edition", year: 2022 },
    ],
  }),
  kind: "mc",
  options: [
    { text: "Fluid volume excess", why: "Fluid excess raises the BP and does not cut urine output." },
    { text: "Uncontrolled incision pain", why: "Pain raises the pulse but does not explain the falling urine output." },
    { text: "Expected recovery", why: "A steady rise in pulse with falling BP is not expected after surgery." },
    { text: "Hypovolemia from bleeding", why: "Rising pulse, falling BP and falling urine output fit volume loss." },
  ],
  correct: 3,
};

export const ALL_FIXTURES: Item[] = [MC_CALC, SATA, MSN, DND_ORDER, CLOZE_TRIAD, HIGHLIGHT, MATRIX_SINGLE, MATRIX_MULTI, BOWTIE, TREND];

/** A fixture case: six fixture items, restamped to walk the CJMM steps in order. */
export function fixtureCase(id = "fx-case"): CaseStudy {
  const pick = [HIGHLIGHT, MATRIX_SINGLE, CLOZE_TRIAD, MATRIX_MULTI, SATA, MSN];
  const steps = ["recognize", "analyze", "prioritize", "generate", "action", "evaluate"] as const;
  return {
    id,
    title: "Example case",
    intro: "This example strings six fixture items together so the case tests have a valid case to change. It is not a real clinical case.",
    tabs: [{ title: "Nurses' Notes", text: "Example note only." }],
    items: pick.map((it, k) => ({ ...it, id: `${id}-${k + 1}`, cjmm: steps[k] }) as Item),
    reviewed: false,
    version: 1,
  };
}
