import type { Item } from "@/engine/types";
import { ANAPHYLAXIS, CDC_CLABSI, HINKLE, INS, ISMP_HIGH, LEHNE, PASERO, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s15-21", {
      topic: "Weight-based vasoactive infusion rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 5,
      stem: "The primary health care provider prescribes dopamine 5 mcg/kg/minute IV for a client who weighs 70 kg. The premixed bag contains dopamine 400 mg in 250 mL. At what rate in mL/hour should the nurse set the pump?",
      rationale:
        "The dose is 5 mcg/kg/minute for 70 kg, which is 350 mcg each minute. Over 60 minutes that is 21000 mcg each hour. The bag holds 400 mg, which is 400000 mcg, in 250 mL. That gives 1600 mcg in each mL. Dividing 21000 by 1600 gives 13.1 mL/hour.",
      calc: { expr: "5 * 70 * 60 / (400 * 1000 / 250)", answer: 13.125, unit: "mL/hour", round: 1, steps: ["5 * 70 = 350", "350 * 60 = 21000", "400 * 1000 = 400000", "400000 / 250 = 1600", "21000 / 1600 = 13.125"] },
      sources: [ISMP_HIGH, INS],
    }),
    kind: "mc",
    options: [
      { text: "0.2 mL/hour", why: "This gives the volume per minute, not per hour." },
      { text: "1.3 mL/hour", why: "This misplaces the decimal and gives one tenth of the dose." },
      { text: "13.1 mL/hour", why: "21000 mcg/hour divided by 1600 mcg/mL is 13.1 mL/hour." },
      { text: "131.3 mL/hour", why: "This misplaces the decimal and gives 10 times the dose." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-22", {
      topic: "Parenteral nutrition monitoring",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A malnourished adult client starts parenteral nutrition through a peripherally inserted central catheter today. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "Parenteral nutrition carries a high dextrose load, so blood glucose is checked on a schedule. Daily weight tracks fluid balance and nutrition. A dedicated lumen avoids incompatible drugs and contamination. Phosphate can fall fast when feeding starts in a malnourished client. The rate is not raised to catch up. Additives are mixed in pharmacy. The PN lumen is not used for blood draws.",
      sources: [HINKLE, INS],
    }),
    kind: "sata",
    options: [
      { text: "Speed up the rate if the bag runs behind", why: "Catching up can cause hyperglycemia and fluid overload." },
      { text: "Weigh the client daily", why: "Daily weight tracks fluid balance and response to nutrition." },
      { text: "Add potassium to the bag on the unit", why: "Additives are mixed in the pharmacy under sterile conditions." },
      { text: "Use a dedicated catheter lumen", why: "A dedicated lumen avoids incompatibility and contamination." },
      { text: "Draw blood from the PN lumen", why: "Opening the PN lumen for samples raises the risk of infection." },
      { text: "Check blood glucose on schedule", why: "The dextrose load can raise blood glucose." },
      { text: "Track serum phosphate levels", why: "Refeeding a malnourished client can drop phosphate quickly." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s15-23", {
      topic: "Hidden acetaminophen in combination products",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a back injury takes hydrocodone and acetaminophen 5 mg/325 mg, 2 tablets every 6 hours. For headaches the client also takes over-the-counter acetaminophen 500 mg, 2 tablets 3 times a day. How many mg of acetaminophen does the client take in 24 hours?",
      rationale:
        "Every 6 hours means 4 doses a day. Two tablets of 325 mg at 4 doses is 2600 mg. Two tablets of 500 mg three times a day is 3000 mg. The total is 5600 mg, which is above the 4000 mg adult daily limit. The nurse reports this because it risks liver injury.",
      calc: { expr: "2 * 325 * (24 / 6) + 2 * 500 * 3", answer: 5600, unit: "mg", round: 0, steps: ["24 / 6 = 4", "2 * 325 * 4 = 2600", "2 * 500 * 3 = 3000", "2600 + 3000 = 5600"] },
      refs: ["Adults take no more than 4000 mg of acetaminophen in 24 hours."],
      sources: [LEHNE, { body: "Health Canada", work: "Notice: Limiting the Strength of Acetaminophen to 325 mg per Dosage Unit in Prescription Combination Products", year: 2016 }],
      canada: "No hydrocodone and acetaminophen product is marketed in Canada. Health Canada caps prescription combination products, such as acetaminophen with codeine or oxycodone, at 325 mg of acetaminophen per unit, with an adult maximum of 4000 mg a day.",
    }),
    kind: "mc",
    options: [
      { text: "2600 mg", why: "This counts only the combination tablets and misses the over-the-counter product." },
      { text: "3000 mg", why: "This counts only the over-the-counter tablets and misses the combination product." },
      { text: "4000 mg", why: "4000 mg is the adult daily limit, not the amount the client takes." },
      { text: "5600 mg", why: "2600 mg plus 3000 mg gives 5600 mg a day." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s15-24", {
      topic: "Clozapine and infection signs",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with schizophrenia has taken clozapine for 10 weeks. Today the client reports a sore throat and feeling unwell. Temperature is 38.4°C (101.1°F). Heart rate is 92/minute. Muscle tone is normal and there is no chest pain. Which condition should the nurse consider first?",
      rationale:
        "Clozapine can cause severe neutropenia, most often in the first months. Fever and sore throat are early signs of infection when neutrophils are low. The nurse holds the dose and reports so an absolute neutrophil count is checked. Normal muscle tone argues against neuroleptic malignant syndrome. No chest pain and a heart rate of 92/minute make myocarditis less likely.",
      sources: [LEHNE, { body: "Alberta College of Pharmacy", work: "Reminders: Clozapine therapy requirements", year: 2026 }],
      canada: "In Canada, each client on clozapine, with the prescriber and dispensing pharmacist, must be enrolled in a clozapine registry. A current blood count with differential is required before each supply is dispensed.",
    }),
    kind: "mc",
    options: [
      { text: "Viral upper respiratory infection", why: "A viral illness is possible, but missing neutropenia can be fatal." },
      { text: "Neuroleptic malignant syndrome", why: "This syndrome causes rigidity. Muscle tone is normal." },
      { text: "Severe neutropenia", why: "Fever and sore throat on clozapine suggest infection from low neutrophils." },
      { text: "Clozapine myocarditis", why: "Myocarditis brings chest pain and tachycardia. Neither is present." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-25", {
      topic: "Peripherally inserted central catheter assessment",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reviews a note on a client who has a peripherally inserted central catheter for 6 weeks of IV antibiotics. Click to highlight the findings that need follow-up.",
      rationale:
        "Redness around the site, yellow drainage and a temperature of 38.2°C suggest a catheter infection. An arm 3 cm larger than on insertion day can mean an upper extremity venous thrombosis. A 4 day old intact transparent dressing is within the change interval. Easy flushing and blood return show the catheter is patent.",
      refs: ["Transparent dressings on central venous catheters are changed at least every 7 days."],
      sources: [CDC_CLABSI, INS],
    }),
    passage:
      "[[Catheter in right upper arm]]. [[Transparent dressing dated 4 days ago, edges intact]]. [[Redness 2 cm around the insertion site]]. [[Yellow drainage under the dressing]]. [[Right upper arm 3 cm larger than on insertion day]]. [[Line flushes without resistance]]. [[Temperature 38.2°C (100.8°F)]]. [[Blood return present]].",
    kind: "highlight",
    spans: [
      { text: "Catheter in right upper arm", why: "The upper arm is the usual site for this catheter." },
      { text: "Transparent dressing dated 4 days ago, edges intact", why: "An intact dressing is changed at least every 7 days. At 4 days it is not due." },
      { text: "Redness 2 cm around the insertion site", why: "Redness at the site can signal local infection." },
      { text: "Yellow drainage under the dressing", why: "Purulent drainage suggests an exit site infection." },
      { text: "Right upper arm 3 cm larger than on insertion day", why: "Arm swelling can signal a catheter-related venous thrombosis." },
      { text: "Line flushes without resistance", why: "Easy flushing shows the catheter is patent." },
      { text: "Temperature 38.2°C (100.8°F)", why: "Fever with site changes raises concern for bloodstream infection." },
      { text: "Blood return present", why: "Blood return confirms the catheter is patent and placed in a vein." },
    ],
    correct: [2, 3, 4, 6],
  },
  {
    ...meta("rn-s15-26", {
      topic: "Monitoring after naloxone",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client received morphine 8 mg IV and 30 minutes later had respirations of 6/minute. The nurse gave naloxone 0.4 mg IV. Ten minutes later the client is awake with respirations of 14/minute and pain of 5 on a 0 to 10 scale. Which plan is appropriate now?",
      rationale:
        "Respirations rose from 6 to 14/minute, so naloxone worked. Naloxone wears off sooner than morphine, so respiratory depression can return. Breathing and sedation are watched closely for the next hours. A second dose is not needed while breathing is adequate. The full morphine dose is not restarted, and pain is reassessed with the provider.",
      sources: [PASERO, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Resume the morphine 8 mg IV dose", why: "The same dose caused respirations of 6/minute and can do so again." },
      { text: "Stop checking respirations now", why: "Naloxone can wear off before morphine, so depression may return." },
      { text: "Give a second naloxone dose now", why: "Respirations of 14/minute show an adequate response. More naloxone can worsen pain." },
      { text: "Monitor breathing and sedation", why: "Close monitoring catches renarcotization as naloxone wears off." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s15-27", {
      topic: "Anaphylaxis during an antibiotic infusion",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "Five minutes into an IV infusion of cefazolin, a client develops hives, wheezing and throat tightness. BP is 78/42 mmHg and heart rate is 126/minute. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Hives, wheezing, throat tightness and a BP of 78/42 mmHg after cefazolin fit anaphylaxis. The drug is stopped to end exposure. IM epinephrine in the thigh is the first-line drug. High-flow oxygen supports the airway. Diphenhydramine does not treat airway swelling or shock and is not given first. Slowing the drug still gives more antigen. Waiting 15 minutes delays treatment.",
      sources: [ANAPHYLAXIS],
    }),
    kind: "sata",
    options: [
      { text: "Slow the cefazolin infusion", why: "A slower rate still delivers the drug causing the reaction." },
      { text: "Give diphenhydramine as the first drug", why: "Antihistamines do not reverse shock or airway swelling. Epinephrine comes first." },
      { text: "Stop the cefazolin infusion", why: "Stopping the drug ends exposure to the trigger." },
      { text: "Give IM epinephrine in the thigh", why: "Epinephrine reverses bronchospasm and hypotension in anaphylaxis." },
      { text: "Apply high-flow oxygen", why: "Oxygen supports the client with wheezing and throat tightness." },
      { text: "Recheck the BP in 15 minutes", why: "A BP of 78/42 mmHg needs treatment now, not a delayed recheck." },
    ],
    correct: [2, 3, 4],
  },
  {
    ...meta("rn-s15-28", {
      topic: "Beta blocker hold parameters",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with hypertension has metoprolol tartrate 25 mg by mouth due at 0900. Before giving it, the nurse finds an apical pulse of 52/minute, BP 118/72 mmHg, respirations 16/minute and potassium 4.2 mEq/L (4.2 mmol/L). The client reports dizziness on standing. Which finding is most important to act on before giving the drug?",
      rationale:
        "Metoprolol slows the heart rate. An apical pulse of 52/minute with dizziness suggests the heart rate is already too slow. The nurse holds the dose and reports it. BP 118/72 mmHg, respirations 16/minute and potassium 4.2 mEq/L are within normal limits.",
      refs: ["Beta blockers are usually held for an apical pulse below 60/minute or as the prescription directs."],
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Potassium of 4.2 mEq/L", why: "4.2 mEq/L is within the normal range." },
      { text: "Apical pulse of 52/minute", why: "A slow pulse with dizziness means metoprolol can slow the heart further." },
      { text: "BP of 118/72 mmHg", why: "This BP is normal and does not stop the dose." },
      { text: "Respirations of 16/minute", why: "This rate is normal. Metoprolol does not depress breathing." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s15-29", {
      topic: "Reversal agents",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse checks that reversal agents are available on a surgical unit. Match each medication with the agent used to reverse its effect. Each agent may be used once or not at all.",
      rationale:
        "Protamine sulfate binds heparin and neutralizes it. Phytonadione is vitamin K and restores clotting factors that warfarin blocks. Naloxone blocks opioid receptors and reverses morphine. Flumazenil blocks benzodiazepine receptors and reverses lorazepam. Calcium gluconate reverses magnesium toxicity. Acetylcysteine treats acetaminophen overdose.",
      sources: [LEHNE],
    }),
    targets: ["Heparin", "Warfarin", "Morphine", "Lorazepam"],
    kind: "dnd",
    scoring: "zero-one",
    tokens: [
      { text: "Calcium gluconate", why: "Calcium gluconate reverses magnesium toxicity, not any of these drugs." },
      { text: "Naloxone", why: "Naloxone blocks opioid receptors and reverses morphine." },
      { text: "Protamine sulfate", why: "Protamine binds heparin and neutralizes it." },
      { text: "Flumazenil", why: "Flumazenil blocks benzodiazepine receptors and reverses lorazepam." },
      { text: "Acetylcysteine", why: "Acetylcysteine treats acetaminophen overdose." },
      { text: "Phytonadione", why: "Vitamin K restores the clotting factors that warfarin blocks." },
    ],
    correct: [2, 5, 1, 3],
  },
  {
    ...meta("rn-s15-30", {
      topic: "Peripheral IV infiltration",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has 0.9% sodium chloride infusing through a peripheral IV catheter in the left forearm. The site is swollen, cool, pale and taut. The client reports tightness in the arm. There is no redness. Which action should the nurse take?",
      rationale:
        "A swollen, cool, pale and taut site with no redness fits infiltration of fluid into the tissue. The nurse stops the infusion and removes the catheter. The arm is elevated and the site is measured and recorded. Flushing or continuing the infusion pushes more fluid into the tissue.",
      sources: [INS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Flush the catheter to test patency", why: "Flushing pushes more fluid into the infiltrated tissue." },
      { text: "Stop the infusion and remove it", why: "Removal stops more fluid from leaking into the tissue." },
      { text: "Slow the rate and recheck in 1 hour", why: "A slower rate still delivers fluid into the tissue." },
      { text: "Keep the line and apply a warm pack", why: "The catheter is out of the vein and cannot stay in use." },
    ],
    correct: 1,
  },
];
