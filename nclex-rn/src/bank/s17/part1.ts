import type { Item } from "@/engine/types";
import { AABB, ADA_GOALS, HF_2022, HINKLE, ISMP_HIGH, LEHNE, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s17-01", {
      topic: "Subcutaneous heparin volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The primary health care provider prescribes heparin 7500 units subcutaneously every 12 hours for a client after abdominal surgery. The vial contains heparin 10 000 units/mL. How many mL should the nurse draw up for each dose?",
      rationale:
        "The dose is 7500 units and each mL holds 10 000 units. Dividing 7500 units by 10 000 units/mL gives 0.75 mL. A syringe marked in hundredths of a mL measures this volume accurately. Heparin is a high-alert medication, so the dose and the vial strength are checked before injection.",
      calc: { expr: "7500 / 10000", answer: 0.75, unit: "mL", round: 2, steps: ["7500 / 10000 = 0.75"] },
      sources: [ISMP_HIGH, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.075 mL", why: "This misplaces the decimal and gives one tenth of the prescribed dose." },
      { text: "0.5 mL", why: "Half a mL of this vial gives less heparin than the prescribed dose." },
      { text: "0.75 mL", why: "7500 units divided by 10 000 units/mL is 0.75 mL." },
      { text: "1.33 mL", why: "This divides 10 000 by 7500 instead of the dose by the strength. It overdoses the heparin." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s17-02", {
      topic: "Thiazide diuretic laboratory effects",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 67-year-old client has taken hydrochlorothiazide 25 mg by mouth daily for 6 months for hypertension. The nurse reviews the latest laboratory report. Which laboratory changes should the nurse recognize as adverse effects of this drug? Select all that apply.",
      rationale:
        "Thiazides block sodium reabsorption in the distal tubule. More sodium reaches the collecting duct, so more potassium is lost in the urine. They reduce uric acid excretion, which raises serum uric acid and can trigger gout. They can raise blood glucose. Thiazides reduce calcium excretion, so serum calcium tends to rise, not fall. They do not raise potassium or lower glucose.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "High serum potassium", why: "Thiazides cause potassium loss. A high level points to another cause." },
      { text: "Low serum calcium", why: "Thiazides reduce calcium excretion, so calcium tends to rise." },
      { text: "High blood glucose", why: "Thiazides can raise blood glucose, most of all in clients with diabetes." },
      { text: "Low serum potassium", why: "Extra sodium reaching the collecting duct drives potassium loss in the urine." },
      { text: "Low blood glucose", why: "Thiazides tend to raise glucose. They do not cause hypoglycemia." },
      { text: "High uric acid", why: "Thiazides compete with uric acid for excretion, so the level rises." },
    ],
    correct: [2, 3, 5],
  },
  {
    ...meta("rn-s17-03", {
      topic: "Beta blocker and hypoglycemia awareness",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 58-year-old client with type 1 diabetes takes propranolol 40 mg by mouth twice daily. At 1500 the blood glucose is 52 mg/dL (2.9 mmol/L). The client reports sweating but no shakiness or pounding heart. Heart rate is 64/minute. The client has had no low readings in the past year. Which explanation best accounts for the missing warning signs?",
      rationale:
        "A glucose of 52 mg/dL is below 54 mg/dL, which is level 2 hypoglycemia. Low glucose normally triggers tremor, palpitations and a fast heart rate through beta receptors. Propranolol blocks those receptors, so the heart rate stays at 64/minute. Sweating is driven by cholinergic sympathetic fibers, so it persists. The meter result fits the symptoms and needs treatment, not doubt.",
      refs: ["Level 2 hypoglycemia is a blood glucose below 54 mg/dL (3.0 mmol/L)."],
      sources: [LEHNE, ADA_GOALS, { body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" }],
      canada: "Diabetes Canada defines hypoglycemia as a glucose below 4.0 mmol/L in clients on insulin and grades severity by symptoms, not by glucose level. Canadian meters show this reading only as 2.9 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Propranolol slows the uptake of injected insulin", why: "Propranolol does not change insulin absorption. It blunts the warning signs of low glucose." },
      { text: "Propranolol masks the adrenergic signs of low glucose", why: "Beta blockade blunts tremor and tachycardia but leaves sweating intact." },
      { text: "The meter gave a falsely low glucose reading", why: "Sweating supports a true low glucose. The value is treated, not dismissed." },
      { text: "Glucose at this level does not produce symptoms", why: "A glucose of 52 mg/dL is level 2 hypoglycemia, which usually causes clear symptoms." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s17-04", {
      topic: "Switching to sacubitril-valsartan",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 66-year-old client with heart failure with reduced ejection fraction takes lisinopril 20 mg by mouth daily. The client took today's lisinopril at 0800. The primary health care provider prescribes sacubitril-valsartan to replace lisinopril, with the first dose due at 1400 today. Which action should the nurse take?",
      rationale:
        "Sacubitril blocks neprilysin, and lisinopril blocks ACE. Both actions raise bradykinin. Taken together they sharply raise the risk of angioedema. The first sacubitril-valsartan dose must wait at least 36 hours after the last ACE inhibitor dose. The last lisinopril dose was this morning, so the nurse holds the new drug and contacts the provider about the start time.",
      refs: ["Sacubitril-valsartan is started at least 36 hours after the last dose of an ACE inhibitor."],
      sources: [HF_2022, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Give the first dose at 1400 as prescribed", why: "A dose within 36 hours of lisinopril raises the risk of angioedema." },
      { text: "Give the dose and check BP in 1 hour", why: "Checking BP does not remove the angioedema risk of giving it too soon." },
      { text: "Give the dose with the next lisinopril", why: "Taking both drugs together is contraindicated because of angioedema risk." },
      { text: "Hold the dose and contact the provider", why: "The first dose must wait 36 hours after the last lisinopril, so the start time needs clarifying." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s17-05", {
      topic: "Amiodarone maintenance infusion rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client converted from ventricular tachycardia after an IV amiodarone loading dose. The prescription is amiodarone 1 mg/minute IV for the next 6 hours. The bag contains amiodarone 450 mg in 250 mL of dextrose 5% in water. At what rate should the nurse set the infusion pump?",
      rationale:
        "The dose is 1 mg/minute, which is 60 mg/hour. The bag holds 450 mg in 250 mL, so each mL holds 1.8 mg. Dividing 60 mg/hour by 1.8 mg/mL gives 33.3 mL/hour. IV antiarrhythmics are high-alert medications, so the pump settings are checked independently.",
      calc: { expr: "1 * 60 / (450 / 250)", answer: 33.333333333333336, unit: "mL/hour", round: 1, steps: ["1 * 60 = 60", "450 / 250 = 1.8", "60 / 1.8 = 33.3"] },
      sources: [ISMP_HIGH, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "1.8 mL/hour", why: "1.8 is the concentration in mg/mL. It is not the hourly rate." },
      { text: "16.7 mL/hour", why: "This rate delivers half the prescribed dose." },
      { text: "33.3 mL/hour", why: "60 mg/hour divided by 1.8 mg/mL is 33.3 mL/hour." },
      { text: "60 mL/hour", why: "This sets the mg/hour dose as mL/hour and gives too much drug." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s17-06", {
      topic: "Starting a red blood cell transfusion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The primary health care provider prescribes 1 unit of packed red blood cells for a client with a hemoglobin of 6.8 g/dL (68 g/L). An IV catheter is in place. Place the nurse's steps in order.",
      rationale:
        "The nurse first confirms the prescription and the signed consent. The unit is then collected from the blood bank. At the bedside two qualified people match the client, the unit and the label. The infusion starts slowly. The nurse stays with the client for the first 15 minutes, when severe reactions tend to appear. Blood tubing is primed with 0.9% sodium chloride, not dextrose.",
      refs: ["Blood components are given with 0.9% sodium chloride as the only compatible IV solution."],
      sources: [AABB, HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Collect the unit from the blood bank", why: "The unit is collected after the prescription and consent are confirmed." },
      { text: "Start the infusion at a slow rate", why: "A slow start limits the volume given if a reaction occurs." },
      { text: "Confirm the prescription and signed consent", why: "No blood is collected until the prescription and consent are in place." },
      { text: "Prime the tubing with dextrose 5% in water", why: "Dextrose can lyse red cells. Blood tubing is primed with 0.9% sodium chloride." },
      { text: "Stay with the client for the first 15 minutes", why: "Severe reactions tend to appear early, so the nurse watches closely." },
      { text: "Check the unit with a second person at the bedside", why: "A bedside check of client and unit prevents a wrong blood transfusion." },
    ],
    correct: [2, 0, 5, 1, 4],
  },
  {
    ...meta("rn-s17-07", {
      topic: "Nitroprusside infusion complication",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with a hypertensive emergency has received sodium nitroprusside IV for 52 hours at the top of the prescribed dose range. The client is newly confused. BP is 138/84 mmHg and heart rate is 84/minute. Arterial pH is 7.28, bicarbonate is 16 mEq/L (16 mmol/L) and lactate is 5.2 mmol/L. Which complication should the nurse suspect?",
      rationale:
        "Nitroprusside releases cyanide as it breaks down. High doses over many hours can overwhelm the body's ability to clear it. Cyanide blocks cell use of oxygen, so lactate rises and a metabolic acidosis follows. The pH of 7.28 and bicarbonate of 16 mEq/L fit that acidosis. New confusion is a sign of cyanide toxicity. The BP of 138/84 mmHg is controlled, not low.",
      refs: ["Normal arterial pH is 7.35 to 7.45.", "Normal serum bicarbonate is 22 to 26 mEq/L (22 to 26 mmol/L)."],
      sources: [LEHNE, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report bicarbonate and lactate in mmol/L only, so bicarbonate reads 16 mmol/L. The Medical Council of Canada lists 0.5 to 2.5 mmol/L as the adult lactate range.",
    }),
    kind: "mc",
    options: [
      { text: "Cyanide toxicity", why: "Long, high-dose nitroprusside with confusion and lactic acidosis fits cyanide toxicity." },
      { text: "Excess drop in BP", why: "The BP is 138/84 mmHg, so hypotension does not explain the findings." },
      { text: "Hypertensive encephalopathy", why: "The BP is controlled, so it does not explain new confusion with acidosis." },
      { text: "Reflex tachycardia", why: "The heart rate is 84/minute and tachycardia would not cause acidosis." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s17-08", {
      topic: "Dabigatran teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 71-year-old client with atrial fibrillation starts dabigatran 150 mg by mouth twice daily. After teaching, which two statements by the client show understanding? Select two.",
      rationale:
        "Dabigatran capsules take up moisture and lose strength, so they stay in the original bottle. Black, tarry stools can mean bleeding in the gut and are reported. Opening the capsules raises absorption and bleeding risk. Dabigatran needs no routine INR tests. A missed dose is not doubled. Aspirin adds antiplatelet effect and raises bleeding risk.",
      sources: [LEHNE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will keep the capsules in the original bottle.\"", why: "The original bottle protects the capsules from moisture." },
      { text: "\"I will open the capsules into applesauce.\"", why: "Opening the capsule raises absorption and bleeding risk." },
      { text: "\"I will need an INR check every week.\"", why: "Dabigatran does not need routine INR monitoring." },
      { text: "\"I will report black or tarry stools.\"", why: "Tarry stools can mean bleeding in the upper gut." },
      { text: "\"I will take two capsules if I miss one.\"", why: "Doubling a dose raises the risk of bleeding." },
      { text: "\"I will take aspirin for my joint pain.\"", why: "Aspirin adds antiplatelet effect and raises bleeding risk." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s17-09", {
      topic: "Clonidine withdrawal",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 54-year-old client takes clonidine 0.2 mg by mouth twice daily for hypertension. The nurse reviews the teaching. Which statement by the client needs further teaching?",
      rationale:
        "Stopping clonidine suddenly can cause rebound hypertension with nervousness, tachycardia and headache. The drug is tapered under the provider's direction. Rising slowly limits orthostatic dizziness. Sugarless gum eases dry mouth. Drowsiness is common early, so the client waits to drive until the effect is known.",
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will get up slowly from bed.\"", why: "Rising slowly limits dizziness from orthostatic hypotension." },
      { text: "\"I will chew sugarless gum for dry mouth.\"", why: "Dry mouth is a common effect, and sugarless gum eases it." },
      { text: "\"I can stop the pills once my BP is normal.\"", why: "Sudden stopping can cause rebound hypertension. This statement needs correcting." },
      { text: "\"I will not drive until I know if I feel drowsy.\"", why: "Sedation is common at the start, so waiting to drive is safe." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s17-10", {
      topic: "Falling potassium with digoxin",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 79-year-old client with heart failure receives furosemide 40 mg IV twice daily and digoxin 0.125 mg by mouth daily. The nurse reviews the laboratory results before the day 3 digoxin dose. Based on the trend, which conclusion is most accurate?",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "Day 1", "Day 2", "Day 3"],
            rows: [
              ["Potassium (mEq/L)", "4.2", "3.6", "3.0"],
              ["Sodium (mEq/L)", "139", "138", "137"],
              ["Magnesium (mEq/L)", "1.9", "1.6", "1.1"],
            ],
          },
        },
      ],
      rationale:
        "Potassium fell from 4.2 to 3.0 mEq/L over 3 days of IV furosemide. A level of 3.0 is below the 3.5 floor. Magnesium also fell to 1.1 mEq/L, below its 1.3 floor. Low potassium lets more digoxin bind to the sodium-potassium pump, and low magnesium adds to the effect. Both raise the risk of digoxin toxicity and dysrhythmias. Sodium stayed within the normal range.",
      refs: ["Serum potassium reference range is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L).", "Serum magnesium reference range is 1.3 to 2.3 mEq/L."],
      sources: [LEHNE, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report these results in mmol/L only. Potassium keeps the same numbers, but magnesium falls from 0.95 to 0.55 mmol/L, below the Medical Council of Canada range of 0.74 to 1.03 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Potassium changes are expected and need no action", why: "A level of 3.0 mEq/L is below the normal range and raises digoxin risk." },
      { text: "The sodium trend shows worsening fluid overload", why: "Sodium moved from 139 to 137 mEq/L and stayed normal." },
      { text: "Furosemide is raising the serum potassium", why: "Loop diuretics cause potassium loss. The level fell each day." },
      { text: "Digoxin toxicity risk rises as potassium falls", why: "Low potassium and magnesium increase digoxin binding and toxicity risk." },
    ],
    correct: 3,
  },
];
