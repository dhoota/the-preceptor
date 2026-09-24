import type { Item } from "@/engine/types";
import { ACR_CONTRAST, ADA_PHARM, AF, DKA, GINA, HINKLE, LEHNE, SVT, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s16-01", {
      topic: "Oral tablet dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The primary health care provider prescribes levetiracetam 750 mg by mouth twice daily for a client with a seizure disorder. The pharmacy supplies scored tablets of 500 mg each. How many tablets should the nurse give for each dose?",
      rationale:
        "The dose is 750 mg and each tablet holds 500 mg. Dividing 750 mg by 500 mg gives 1.5 tablets. The tablets are scored, so one tablet can be split along the score. The other choices give too little or too much drug.",
      calc: { expr: "750 / 500", answer: 1.5, unit: "tablets", round: 1, steps: ["750 / 500 = 1.5"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "1 tablet", why: "One tablet gives 500 mg. That is less than the prescribed dose." },
      { text: "1.5 tablets", why: "750 mg divided by 500 mg per tablet is 1.5 tablets." },
      { text: "2 tablets", why: "Two tablets give more than the prescribed dose." },
      { text: "3 tablets", why: "Three tablets give twice the prescribed dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-02", {
      canada: "Canadian labs report creatinine in micromol/L only. The Medical Council of Canada lists adult ranges of 22 to 75 micromol/L for females and 49 to 93 micromol/L for males, so 212 micromol/L is clearly high.",
      topic: "Metformin and IV contrast",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 64-year-old client with type 2 diabetes takes metformin 1000 mg by mouth twice daily. A CT scan with IV contrast is booked for today. Serum creatinine is 2.4 mg/dL (212 micromol/L), up from 1.0 mg/dL (88 micromol/L) 2 days ago. Urine output was 240 mL over 12 hours. Which action should the nurse take?",
      rationale:
        "Creatinine rose from 1.0 to 2.4 mg/dL in 2 days and urine output is 240 mL in 12 hours. This points to acute kidney injury. The kidneys clear metformin. With acute kidney injury and planned IV contrast, metformin is held and the provider is told. Retained metformin can cause lactic acidosis.",
      sources: [ACR_CONTRAST, LEHNE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
    }),
    kind: "mc",
    options: [
      { text: "Give the metformin with breakfast", why: "With acute kidney injury, metformin can build up and cause lactic acidosis." },
      { text: "Give half the usual metformin dose", why: "A smaller dose still builds up when kidney function is falling. The nurse does not change a dose without a prescription." },
      { text: "Hold the metformin and notify the provider", why: "Rising creatinine and low urine output point to acute kidney injury, so metformin is held." },
      { text: "Give the metformin after the scan", why: "Contrast can worsen the kidney injury. Metformin given after the scan could then build up." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s16-03", {
      topic: "Weekly incretin injection teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 52-year-old client with type 2 diabetes starts semaglutide 0.25 mg subcutaneously once weekly. Which instructions should the nurse include in the teaching? Select all that apply.",
      rationale:
        "Semaglutide is a weekly injection, so a fixed day helps adherence. Nausea is common as the drug starts and often eases. Smaller meals help. Severe abdominal pain that spreads to the back can signal pancreatitis. The drug carries a warning about thyroid C-cell tumors, so a neck lump is reported. It is not timed to meals. A missed dose is not doubled.",
      sources: [ADA_PHARM, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Take it with the first bite of a meal", why: "Semaglutide is a weekly injection. It is not timed to meals like rapid-acting insulin." },
      { text: "Inject it on the same day each week", why: "A fixed day each week helps the client remember a weekly dose." },
      { text: "Stop it if nausea starts in the first week", why: "Nausea is common early and often eases. The client reports it rather than stopping the drug." },
      { text: "Report severe belly pain that spreads to the back", why: "This pain can signal acute pancreatitis, a known risk of the drug." },
      { text: "Double the next dose after a missed week", why: "Doubling raises the risk of vomiting and dehydration. A missed dose is not doubled." },
      { text: "Eat smaller meals if nausea occurs", why: "Slowed stomach emptying causes fullness and nausea. Smaller meals ease it." },
      { text: "Report a new lump or swelling in the neck", why: "The drug carries a warning about thyroid C-cell tumors." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s16-04", {
      canada: "Canadian labs report glucose and bicarbonate in mmol/L only. The Medical Council of Canada lists bicarbonate at 21 to 32 mmol/L, so 12 mmol/L shows a marked acidosis.",
      topic: "Ketoacidosis with an SGLT2 inhibitor",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 58-year-old client with type 2 diabetes takes empagliflozin 25 mg by mouth daily. The client has vomited for 2 days and eaten little. Respirations are deep at 26/minute. Blood glucose is 198 mg/dL (11.0 mmol/L). Serum bicarbonate is 12 mEq/L (12 mmol/L). Serum beta-hydroxybutyrate is high. Which condition should the nurse suspect?",
      rationale:
        "Empagliflozin can cause ketoacidosis with only a mildly raised glucose, most often during illness and poor intake. Deep breathing at 26/minute, a bicarbonate of 12 mEq/L and high ketones show ketoacidosis even though glucose is 198 mg/dL. Vomiting alone would raise bicarbonate. The glucose rules out hypoglycemia.",
      sources: [DKA, ADA_PHARM, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
    }),
    kind: "mc",
    options: [
      { text: "Hyperosmolar hyperglycemic state", why: "This state has a far higher glucose and little or no ketosis." },
      { text: "Metabolic alkalosis from vomiting", why: "Vomiting alone tends to raise bicarbonate. It does not explain a bicarbonate of 12 mEq/L with high ketones." },
      { text: "Hypoglycemia from poor intake", why: "The glucose is 198 mg/dL, which is above normal." },
      { text: "Euglycemic diabetic ketoacidosis", why: "High ketones and low bicarbonate with a glucose of 198 mg/dL fit this condition." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s16-05", {
      canada: "Canada uses the name salbutamol for albuterol. Health Canada has authorized it as Ventolin HFA, 100 mcg of salbutamol per metered dose.",
      topic: "Inhaler with a spacer",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a 34-year-old client with asthma to use an albuterol metered-dose inhaler with a spacer. Place the steps in the order the client should perform them.",
      rationale:
        "The cap comes off and the inhaler is shaken to mix the drug. The inhaler then fits into the spacer. The client breathes out away from the spacer, seals the lips and presses the canister once. A slow, deep breath carries the drug into the lungs. A breath hold lets it settle. One puff goes in at a time.",
      sources: [GINA, LEHNE, { body: "GlaxoSmithKline Inc.", work: "Ventolin HFA (salbutamol) Product Monograph", year: 2025 }],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"],
    tokens: [
      { text: "Breathe in slowly and deeply", why: "A slow, deep breath carries the drug past the throat into the lungs." },
      { text: "Press the canister twice at once", why: "Two puffs at once lower the dose each breath delivers. One puff goes in at a time." },
      { text: "Remove the cap and shake the inhaler", why: "Shaking mixes the drug before the dose is released." },
      { text: "Hold the breath for up to 10 seconds", why: "A breath hold lets the drug settle in the airways." },
      { text: "Breathe out fully, away from the spacer", why: "Breathing out first makes room for a full breath of the drug." },
      { text: "Take a fast, forceful breath in", why: "A fast breath drives the drug into the throat instead of the lungs." },
      { text: "Attach the inhaler to the spacer", why: "The spacer holds the puff so the client can inhale it slowly." },
      { text: "Seal the lips and press the canister", why: "A tight seal keeps the puff inside the spacer for the next breath." },
    ],
    correct: [2, 6, 4, 7, 0, 3],
  },
  {
    ...meta("rn-s16-06", {
      topic: "Nitroglycerin infusion rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The primary health care provider prescribes a nitroglycerin infusion at 10 mcg/minute for a client with unstable chest pain. The bag holds nitroglycerin 50 mg in 250 mL of dextrose 5% in water. At what rate should the nurse set the infusion pump?",
      rationale:
        "The bag holds 50 mg, which is 50000 mcg, in 250 mL. That is 200 mcg in each mL. The dose of 10 mcg/minute is 600 mcg each hour. Dividing 600 mcg by 200 mcg/mL gives 3 mL/hour.",
      calc: { expr: "10 * 60 / (50 * 1000 / 250)", answer: 3, unit: "mL/hour", round: 0, steps: ["50 * 1000 = 50000", "50000 / 250 = 200", "10 * 60 = 600", "600 / 200 = 3"] },
      sources: [LEHNE, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "0.05 mL/hour", why: "This leaves out the 60 minutes in each hour and gives a volume per minute." },
      { text: "3 mL/hour", why: "600 mcg each hour divided by 200 mcg/mL is 3 mL/hour." },
      { text: "20 mL/hour", why: "This divides the concentration by the dose, which inverts the ratio." },
      { text: "30 mL/hour", why: "This is 10 times the correct rate. It comes from a misplaced decimal." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-07", {
      topic: "Amiodarone teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 71-year-old client with atrial fibrillation starts oral amiodarone for rhythm control. Which instructions should the nurse include in the discharge teaching? Select all that apply.",
      rationale:
        "Amiodarone can injure the lungs, thyroid, liver, skin and eyes. A new cough or breathlessness can mean lung toxicity. Sunscreen limits photosensitivity. Thyroid and liver tests are checked on a schedule. Vision changes can mean optic nerve injury. Grapefruit raises the drug level. The client does not stop or add doses without the prescriber.",
      sources: [LEHNE, AF],
    }),
    kind: "sata",
    options: [
      { text: "Report a new dry cough or shortness of breath", why: "These can be early signs of amiodarone lung toxicity." },
      { text: "Drink grapefruit juice to help absorption", why: "Grapefruit raises amiodarone levels and adds toxicity risk. It is avoided." },
      { text: "Wear sunscreen and cover up outdoors", why: "Amiodarone causes photosensitivity and can discolor the skin." },
      { text: "Stop the drug if the pulse feels slow", why: "A slow pulse is reported. Stopping on one's own can let the dysrhythmia return." },
      { text: "Keep appointments for thyroid and liver tests", why: "Amiodarone can cause thyroid disease and liver injury, so levels are checked on a schedule." },
      { text: "Take an extra dose if palpitations return", why: "Extra doses raise toxicity risk. Palpitations are reported instead." },
      { text: "Report blurred vision or halos around lights", why: "Vision changes can signal optic nerve injury or corneal deposits." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s16-08", {
      topic: "Adenosine administration",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 45-year-old client has a regular narrow-complex tachycardia at 188/minute. BP is 118/74 mmHg. Vagal maneuvers did not convert the rhythm. The provider prescribes adenosine 6 mg IV. The client has a saline lock in the right antecubital vein. How should the nurse give the drug?",
      rationale:
        "Adenosine is cleared from the blood within seconds. It must be pushed fast through a proximal vein, such as the antecubital site, and chased at once with a rapid saline flush. This carries the drug to the heart before it breaks down. A brief pause in the rhythm is expected.",
      sources: [SVT, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Push it rapidly, then flush 20 mL rapidly", why: "A rapid push and flush gets the drug to the heart before it breaks down." },
      { text: "Push it over 2 minutes, then flush slowly", why: "A slow push lets the drug break down before it reaches the heart." },
      { text: "Dilute it in 50 mL and infuse over 15 minutes", why: "An infusion is far too slow for a drug that lasts only seconds." },
      { text: "Push it rapidly with no saline flush after", why: "Without a flush, much of the dose stays in the tubing and vein." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-09", {
      topic: "Direct oral anticoagulant teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 69-year-old client with atrial fibrillation starts apixaban 5 mg by mouth twice daily. Which statements by the client show understanding of the teaching? Select two.",
      rationale:
        "Apixaban raises bleeding risk, so the dentist needs to know before any procedure. Twice daily dosing about 12 hours apart keeps the level steady. Apixaban needs no INR checks. Vitamin K foods do not change its effect. Ibuprofen adds bleeding risk. Stopping for minor gum bleeding raises stroke risk, so it is reported instead.",
      sources: [AF, LEHNE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will have my INR checked every week.\"", why: "Apixaban does not need INR monitoring. The INR does not reflect its effect." },
      { text: "\"I will tell my dentist I take a blood thinner.\"", why: "The dentist needs to know about the bleeding risk before any procedure." },
      { text: "\"I will stop it if my gums bleed a little.\"", why: "Stopping raises stroke risk. Minor bleeding is reported to the provider." },
      { text: "\"I will take it about 12 hours apart each day.\"", why: "Even spacing of twice daily doses keeps the drug level steady." },
      { text: "\"I will take ibuprofen for my knee pain.\"", why: "Ibuprofen adds antiplatelet and stomach effects that raise bleeding risk." },
      { text: "\"I will cut back on leafy green vegetables.\"", why: "Vitamin K intake does not change the effect of apixaban." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s16-10", {
      topic: "Severe reaction to an antipsychotic",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 28-year-old client with schizophrenia received haloperidol 5 mg IM three times in 36 hours for agitation. The client is now confused with rigid muscles in all limbs. Temperature is 40.1°C (104.2°F). Heart rate is 124/minute. BP is 168/102 mmHg, then 104/60 mmHg 30 minutes later. Creatine kinase is 8600 units/L. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Repeated haloperidol followed by rigidity, confusion, a temperature of 40.1°C, a swinging BP and a creatine kinase of 8600 units/L fit neuroleptic malignant syndrome. The haloperidol is held and active cooling starts. Core temperature shows whether cooling works. Muscle breakdown can injure the kidneys, so urine output is tracked each hour.",
      sources: [LEHNE, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Malignant hyperthermia", why: "This follows volatile anesthetics or succinylcholine. The stem gives no anesthesia." },
      { text: "Neuroleptic malignant syndrome", why: "Rigidity, high fever, unstable BP and a high creatine kinase after haloperidol fit this condition." },
      { text: "Acute dystonic reaction", why: "Dystonia causes local muscle spasms without fever or a swinging BP." },
      { text: "Tardive dyskinesia", why: "This is a late movement disorder of long-term use. It causes no fever or rigidity." },
    ],
    actions: [
      { text: "Give another IM haloperidol dose", why: "More antipsychotic would worsen the reaction." },
      { text: "Hold the haloperidol", why: "The causative drug is stopped at once." },
      { text: "Apply restraints to all four limbs", why: "Struggling against restraints adds heat and muscle breakdown." },
      { text: "Start active cooling measures", why: "Cooling lowers the dangerous temperature of 40.1°C." },
      { text: "Give IM diphenhydramine now", why: "Diphenhydramine treats acute dystonia. It does not treat this syndrome." },
    ],
    parameters: [
      { text: "Serum lithium level", why: "The stem gives no lithium use. The crisis follows haloperidol." },
      { text: "Core body temperature", why: "Temperature shows whether cooling and drug withdrawal are working." },
      { text: "Involuntary movement scale score", why: "This scale tracks tardive dyskinesia, not an acute crisis." },
      { text: "Hourly urine output", why: "Muscle breakdown can cause acute kidney injury, which shows as falling urine output." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide this crisis." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
];
