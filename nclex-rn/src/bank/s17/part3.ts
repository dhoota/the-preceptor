import type { Item } from "@/engine/types";
import { ADA_HOSPITAL, ADRENAL, HF_2022, HINKLE, HYPOTHYROID, ISMP_HIGH, LEHNE, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s17-21", {
      topic: "Correction insulin dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with type 2 diabetes on a medical unit has a before-lunch glucose of 270 mg/dL (15.0 mmol/L). The correction prescription is insulin lispro 1 unit for every 30 mg/dL (1.7 mmol/L) above a target of 150 mg/dL (8.3 mmol/L). How many units of correction insulin should the nurse give?",
      rationale:
        "The correction dose covers only the glucose above target. Subtracting the target of 150 from 270 gives an excess of 120. Each 30 of excess needs 1 unit, so 120 divided by 30 is 4 units. Insulin is a high-alert medication, so the glucose value and the dose are checked before giving it.",
      calc: { expr: "(270 - 150) / 30", answer: 4, unit: "units", round: 0, steps: ["270 - 150 = 120", "120 / 30 = 4"] },
      sources: [ADA_HOSPITAL, ISMP_HIGH, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs and meters report glucose in mmol/L only. With the SI values here, 15.0 minus 8.3 is 6.7 mmol/L, and 6.7 divided by 1.7 rounds to the same 4 units.",
    }),
    kind: "mc",
    options: [
      { text: "4 units", why: "The excess of 120 above target divided by 30 gives 4 units." },
      { text: "5 units", why: "This divides the target by 30 instead of the excess above it." },
      { text: "9 units", why: "This divides the whole glucose value by 30 and ignores the target." },
      { text: "12 units", why: "This divides the excess by 10 instead of 30 and overdoses the insulin." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-22", {
      topic: "Thiazolidinedione in heart failure",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 69-year-old client with type 2 diabetes and heart failure started pioglitazone 30 mg by mouth daily 6 weeks ago. The client also takes metformin and furosemide. Which finding should the nurse recognize as the most likely adverse effect of pioglitazone?",
      rationale:
        "Pioglitazone causes the kidneys to retain sodium and water. Fluid retention shows as weight gain and edema and can worsen heart failure. Heart failure guidance advises against this drug class in clients with heart failure. A dry cough points to an ACE inhibitor. Muscle aches with dark urine point to a statin. Pioglitazone alone rarely causes low glucose.",
      sources: [HF_2022, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "A dry cough at night", why: "A dry cough is typical of an ACE inhibitor, not pioglitazone." },
      { text: "Weight gain of 3 kg with ankle edema", why: "Pioglitazone causes fluid retention, which can worsen heart failure." },
      { text: "Glucose of 64 mg/dL (3.6 mmol/L)", why: "Pioglitazone alone rarely causes hypoglycemia." },
      { text: "Muscle aches with dark urine", why: "This pattern points to statin muscle injury, not pioglitazone." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s17-23", {
      topic: "Excess desmopressin effect",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 34-year-old client developed central diabetes insipidus after pituitary surgery. Before treatment, urine output was 7 L/day with a specific gravity of 1.002. The client started desmopressin 3 days ago. Which finding shows an excess effect of desmopressin?",
      rationale:
        "Desmopressin replaces antidiuretic hormone, so the kidneys retain water. Less urine, a higher specific gravity and less thirst show the drug is working. Too much effect retains excess water and dilutes the blood sodium. A sodium of 126 mEq/L is below 135 and can cause headache, confusion and seizures. The dose is held and the provider is told.",
      refs: ["Serum sodium reference range is 135 to 145 mEq/L (135 to 145 mmol/L)."],
      sources: [LEHNE, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report sodium in mmol/L only, so this result reads 126 mmol/L. The Medical Council of Canada adult range is 136 to 146 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Urine specific gravity 1.018", why: "More concentrated urine shows the drug is working as intended." },
      { text: "Thirst has lessened", why: "Less thirst shows water is being retained as intended." },
      { text: "Urine output 1800 mL in 24 hours", why: "This output is a desired fall from 7 L/day." },
      { text: "Serum sodium 126 mEq/L", why: "A low sodium shows water retention beyond the goal of therapy." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s17-24", {
      topic: "Timing of NPH insulin peak",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receives NPH insulin 24 units and regular insulin 6 units subcutaneously at 0730 before breakfast. During which period is the client at greatest risk of hypoglycemia from the NPH insulin?",
      rationale:
        "NPH is an intermediate-acting insulin. After a morning dose its peak falls in the afternoon, so 1400 to 1800 is the time of greatest risk. An afternoon snack and a glucose check help prevent a low. The late morning risk comes from the regular insulin. NPH given in the morning has little effect left overnight.",
      refs: ["NPH insulin peaks several hours after injection, in the afternoon after a morning dose."],
      sources: [LEHNE, ADA_HOSPITAL],
    }),
    kind: "mc",
    options: [
      { text: "0800 to 0900", why: "NPH has barely started to act this soon after the dose." },
      { text: "1000 to 1100", why: "The late morning peak belongs to the regular insulin, not the NPH." },
      { text: "1400 to 1800", why: "A morning NPH dose peaks in the afternoon." },
      { text: "0200 to 0400", why: "A morning NPH dose has largely worn off by the early morning hours." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s17-25", {
      topic: "Glucocorticoid dose during illness",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 45-year-old client with primary adrenal insufficiency takes hydrocortisone 15 mg each morning and 5 mg each afternoon. The client calls the clinic with influenza. Temperature is 38.6°C (101.5°F). The client is drinking fluids and has not vomited. Which instruction should the nurse give?",
      rationale:
        "The adrenal glands cannot raise cortisol during illness. A fever above 38°C calls for doubling or tripling the daily glucocorticoid dose until recovery. Skipping or keeping the usual dose risks adrenal crisis. If vomiting starts, the client uses the emergency hydrocortisone injection and seeks care. Moving the whole dose to bedtime does not add any cortisol.",
      refs: ["With a fever above 38°C the daily glucocorticoid dose is doubled or tripled until recovery."],
      sources: [ADRENAL, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Skip hydrocortisone until the fever settles", why: "Stopping hydrocortisone during illness can cause adrenal crisis." },
      { text: "Keep the usual dose and rest in bed", why: "The usual dose does not meet the higher need for cortisol during a fever." },
      { text: "Take the whole day's dose at bedtime", why: "Moving the dose does not raise the total cortisol the body needs." },
      { text: "Double the hydrocortisone doses while febrile", why: "Stress dosing covers the higher cortisol need during a fever." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s17-26", {
      topic: "Steroid-induced hyperglycemia",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 61-year-old client with type 2 diabetes controlled by metformin is admitted with a COPD exacerbation. The client receives prednisone 40 mg by mouth each morning. On day 2, glucose is 118 mg/dL (6.5 mmol/L) before breakfast and 286 mg/dL (15.9 mmol/L) before supper. Which two actions should the nurse anticipate? Select two.",
      rationale:
        "A morning prednisone dose raises glucose most in the afternoon and evening. That fits an in-target fasting value of 118 and a supper value of 286. Glucose is checked before meals and at bedtime to catch the pattern. NPH insulin given with the morning prednisone matches the steroid's effect. The prednisone treats the COPD, so it is not stopped to lower glucose.",
      sources: [ADA_HOSPITAL, LEHNE, { body: "Malcolm J, Halperin I, Miller DB, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "In-Hospital Management of Diabetes. Canadian Journal of Diabetes 42(Suppl 1):S115", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-16" }],
      canada: "Diabetes Canada sets in-hospital targets of 5.0 to 8.0 mmol/L before meals for most noncritically ill clients. The supper value of 15.9 mmol/L is well above that target.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Check glucose before meals and bedtime", why: "Frequent checks show the afternoon rise that prednisone causes." },
      { text: "Stop the prednisone to lower glucose", why: "Prednisone treats the COPD exacerbation. Glucose is managed with insulin instead." },
      { text: "Add morning NPH insulin", why: "NPH given with the morning prednisone matches the timing of its effect." },
      { text: "Give correction insulin only at bedtime", why: "Bedtime correction alone misses the rise before supper." },
      { text: "Hold all insulin while the client eats", why: "Holding insulin leaves the steroid-driven rise untreated." },
      { text: "Recheck glucose only if symptoms appear", why: "High glucose can occur without symptoms, so routine checks are needed." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s17-27", {
      topic: "Levothyroxine tablet count",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The primary health care provider prescribes levothyroxine 150 mcg by mouth daily. The pharmacy supplies tablets labeled 0.075 mg. How many tablets should the nurse give?",
      rationale:
        "The tablet strength is in mg and the dose is in mcg, so the units are matched first. 0.075 mg is 75 mcg. Dividing 150 mcg by 75 mcg per tablet gives 2 tablets. Levothyroxine is taken on an empty stomach with water, apart from calcium and iron.",
      calc: { expr: "150 / (0.075 * 1000)", answer: 2, unit: "tablets", round: 0, steps: ["0.075 * 1000 = 75", "150 / 75 = 2"] },
      sources: [LEHNE, HYPOTHYROID],
    }),
    kind: "mc",
    options: [
      { text: "0.5 tablet", why: "This divides the tablet strength by the dose and gives too little." },
      { text: "1 tablet", why: "One tablet gives half the prescribed dose." },
      { text: "1.5 tablets", why: "One and a half tablets gives less than the prescribed dose." },
      { text: "2 tablets", why: "150 mcg divided by 75 mcg per tablet is 2 tablets." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s17-28", {
      topic: "Signs of excess thyroid replacement",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 70-year-old client with hypothyroidism had the levothyroxine dose raised 6 weeks ago. Which findings suggest the dose is now too high? Select all that apply.",
      rationale:
        "Too much levothyroxine produces signs of hyperthyroidism. A resting pulse of 112/minute, heat intolerance and a fine tremor all fit. Older adults are at higher risk of atrial fibrillation and bone loss from excess dosing. Weight gain, constipation, cold intolerance and slow reflexes are signs of too little thyroid hormone.",
      sources: [HYPOTHYROID, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Weight gain and constipation", why: "These are signs of too little thyroid hormone." },
      { text: "Cold intolerance", why: "Feeling cold points to an underdosed client." },
      { text: "Resting pulse 112/minute", why: "Excess thyroid hormone speeds the heart rate." },
      { text: "Heat intolerance", why: "Excess thyroid hormone raises heat production." },
      { text: "Slow, delayed reflexes", why: "Slow reflex relaxation points to too little thyroid hormone." },
      { text: "Fine hand tremor", why: "Excess thyroid hormone causes a fine tremor." },
    ],
    correct: [2, 3, 5],
  },
  {
    ...meta("rn-s17-29", {
      topic: "Loop diuretic with an aminoglycoside",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 70-year-old client receives gentamicin IV every 24 hours and furosemide 80 mg IV twice daily. On day 4 the client reports ringing in both ears and feels unsteady when walking. Serum creatinine is 0.9 mg/dL (80 micromol/L), unchanged from admission. Urine output is 1.6 L/day. Complete the sentence by dragging a word or phrase into each blank.",
      rationale:
        "Gentamicin and loop diuretics can each damage the inner ear. Given together their effects add up. Ringing in both ears is an early sign of ototoxicity, and unsteadiness suggests the balance organ is affected too. The creatinine is unchanged and urine output is adequate, so kidney injury is not evident now. The provider is told before the next dose.",
      sources: [LEHNE],
    }),
    kind: "dnd",
    template: "The client is at highest risk for {0} as evidenced by {1}.",
    scoring: "dyad",
    targets: ["Condition", "Evidence"],
    tokens: [
      { text: "nephrotoxicity", why: "The creatinine is unchanged, so kidney injury is not evident now." },
      { text: "ringing in both ears", why: "Tinnitus is an early sign of damage to the inner ear." },
      { text: "ototoxicity", why: "Both drugs can harm the inner ear, and the client has ear symptoms." },
      { text: "a stable creatinine", why: "A stable creatinine argues against kidney injury." },
      { text: "hypokalemia", why: "No potassium value is given, and the symptoms point to the ear." },
      { text: "urine output of 1.6 L/day", why: "This output is adequate and does not point to a complication." },
    ],
    correct: [2, 1],
  },
  {
    ...meta("rn-s17-30", {
      topic: "Pediatric digoxin volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A child who weighs 14 kg has heart failure. The prescription is digoxin 5 mcg/kg by mouth every 12 hours. The oral solution contains digoxin 50 mcg/mL. How many mL should the nurse give for each dose?",
      rationale:
        "The dose is 5 mcg/kg for 14 kg, which is 70 mcg. Dividing 70 mcg by 50 mcg/mL gives 1.4 mL. The apical pulse is counted for a full minute before each dose. Digoxin has a narrow margin between a helpful and a toxic dose, so the volume is checked against the prescription before it is given.",
      calc: { expr: "14 * 5 / 50", answer: 1.4, unit: "mL", round: 1, steps: ["14 * 5 = 70", "70 / 50 = 1.4"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.14 mL", why: "This misplaces the decimal and gives one tenth of the dose." },
      { text: "0.7 mL", why: "This volume gives half the prescribed dose." },
      { text: "1.4 mL", why: "70 mcg divided by 50 mcg/mL is 1.4 mL." },
      { text: "2.8 mL", why: "This is the total for two doses given at once." },
    ],
    correct: 2,
  },
];
