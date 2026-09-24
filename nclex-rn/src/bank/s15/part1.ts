import type { Item } from "@/engine/types";
import { ACOG, ATA, DYSLIPIDEMIA, HINKLE, LEHNE, PASERO, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s15-01", {
      topic: "Gravity infusion drop rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The primary health care provider prescribes 1000 mL of 0.9% sodium chloride IV over 8 hours. No infusion pump is free, so the nurse uses a gravity set with a drop factor of 15 drops/mL. How many drops per minute should the nurse count?",
      rationale:
        "The volume is 1000 mL and the set gives 15 drops per mL, so the bag holds 15000 drops. The time is 8 hours, which is 480 minutes. Dividing 15000 drops by 480 minutes gives 31.25, so the nurse counts 31 drops per minute. The other choices divide by the drop factor, skip it or ignore the 8 hours.",
      calc: { expr: "1000 * 15 / (8 * 60)", answer: 31.25, unit: "drops/minute", round: 0, steps: ["1000 * 15 = 15000", "8 * 60 = 480", "15000 / 480 = 31.25"] },
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "8 drops/minute", why: "This divides the hourly volume of 125 mL by the drop factor of 15 instead of multiplying. It also skips the 60 minutes." },
      { text: "31 drops/minute", why: "15000 drops over 480 minutes rounds to 31 drops per minute." },
      { text: "125 drops/minute", why: "125 is the hourly volume in mL. It is not a drop count." },
      { text: "250 drops/minute", why: "This runs all 1000 mL over 60 minutes. It ignores the 8 hours prescribed." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s15-02", {
      topic: "Ibuprofen teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 58-year-old client with knee osteoarthritis starts ibuprofen 400 mg by mouth every 6 hours as needed for pain. The client also takes lisinopril for hypertension. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Ibuprofen irritates the stomach lining, so each dose is taken with food. It can cause gastrointestinal bleeding, which shows as black or tarry stools. It retains sodium and water and blunts lisinopril, so blood pressure is checked at home. Adding a second NSAID raises the risk of bleeding and kidney injury. Lisinopril is not stopped. New ankle swelling is reported.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Add naproxen if the pain persists", why: "Naproxen is a second NSAID. Two together add bleeding and kidney risk without more benefit." },
      { text: "Take each dose with food", why: "Food lowers the stomach irritation that ibuprofen causes." },
      { text: "Stop lisinopril while taking it", why: "Lisinopril still treats the hypertension. It is not stopped without a prescription." },
      { text: "Report black or tarry stools", why: "Black stools can mean bleeding in the upper gastrointestinal tract." },
      { text: "Ignore mild ankle swelling", why: "NSAIDs retain sodium and water. New swelling is reported, not ignored." },
      { text: "Check blood pressure at home", why: "NSAIDs can raise blood pressure and weaken the effect of lisinopril." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s15-03", {
      topic: "Statin muscle toxicity",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 66-year-old client started atorvastatin 80 mg by mouth daily 6 weeks ago. The client now reports aching thighs, weakness when climbing stairs and urine the color of cola. Creatine kinase is 9400 units/L. Which condition should the nurse suspect?",
      rationale:
        "Muscle pain and weakness after starting a high-dose statin point to statin muscle toxicity. A creatine kinase of 9400 units/L shows major muscle breakdown. Cola-colored urine suggests myoglobin in the urine. Together these fit rhabdomyolysis, which can injure the kidneys. Liver injury does not raise creatine kinase this far. Strain and polymyalgia do not darken the urine.",
      sources: [DYSLIPIDEMIA, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Muscle strain from exertion", why: "A strain does not explain dark urine or a creatine kinase of 9400 units/L." },
      { text: "Statin-induced hepatitis", why: "Liver injury raises liver enzymes. It does not cause muscle weakness with a creatine kinase this high." },
      { text: "Rhabdomyolysis", why: "Muscle pain, weakness, dark urine and a creatine kinase of 9400 units/L fit muscle breakdown." },
      { text: "Polymyalgia rheumatica", why: "Polymyalgia causes shoulder and hip stiffness with a normal creatine kinase." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-04", {
      topic: "Parenteral nutrition interruption",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client receives parenteral nutrition containing 20% dextrose through a central venous catheter. The current bag will finish at 2100. The pharmacy reports that the next bag will not be ready for 2 hours, at 2300. What should the nurse do?",
      rationale:
        "A high dextrose infusion raises insulin output. Stopping it suddenly can cause rebound hypoglycemia. Dextrose 10% in water at the current rate keeps glucose supply steady until the new bag arrives. Sodium chloride gives no glucose. Capping or flushing the line stops glucose supply for 2 hours. Blood glucose is checked during the gap.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Stop the infusion and flush the line", why: "Stopping a 20% dextrose infusion abruptly can cause rebound hypoglycemia." },
      { text: "Hang 0.9% sodium chloride at the same rate", why: "Sodium chloride keeps the line open but gives no glucose to prevent rebound hypoglycemia." },
      { text: "Cap the line until the new bag arrives", why: "A 2 hour gap in dextrose supply can cause rebound hypoglycemia." },
      { text: "Hang dextrose 10% at the same rate", why: "Dextrose 10% keeps a steady glucose supply until the new bag is ready." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s15-05", {
      topic: "Enoxaparin injection technique",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give enoxaparin 40 mg subcutaneously from a prefilled syringe to a client on day 1 after knee arthroplasty. Which two actions are appropriate? Select two.",
      rationale:
        "The prefilled syringe carries an air bubble that stays in so the full dose is given and the drug is not left in the skin track. The injection goes into the abdomen at least 5 cm from the umbilicus. Aspirating and rubbing the site raise the risk of bruising. Enoxaparin is not given intramuscularly because of hematoma risk.",
      sources: [LEHNE, HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Expel the air bubble before injecting", why: "Expelling the bubble can waste drug and leave some in the needle track." },
      { text: "Inject into the abdomen 5 cm from the umbilicus", why: "The abdomen away from the umbilicus is the site for this injection." },
      { text: "Aspirate before injecting the drug", why: "Aspiration moves the needle in the tissue and raises bruising." },
      { text: "Leave the air bubble in the syringe", why: "The bubble pushes the full dose out of the syringe." },
      { text: "Rub the site after removing the needle", why: "Rubbing the site increases bruising after an anticoagulant injection." },
      { text: "Give it into the deltoid muscle", why: "An intramuscular injection of enoxaparin can cause a hematoma." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s15-06", {
      topic: "Vancomycin infusion reaction",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reviews a note written 20 minutes after an IV vancomycin infusion was started for a client with an infected leg wound. Click to highlight the findings that need follow-up.",
      rationale:
        "Vancomycin given too fast releases histamine. This causes flushing and itching of the face, neck and upper chest, and can lower BP. The infusion was set to run over 30 minutes, which is faster than advised. The BP fell from 124/76 to 96/58 mmHg. Clear lungs and no lip or tongue swelling argue against anaphylaxis.",
      refs: ["Vancomycin is infused over at least 60 minutes to lower the risk of an infusion reaction."],
      sources: [LEHNE],
    }),
    passage:
      "[[Infusion set to run over 30 minutes.]] [[Flushed red rash on the face, neck and upper chest.]] [[Reports itching of the neck.]] [[BP 96/58 mmHg]], down from 124/76 mmHg before the infusion. [[Lungs clear on both sides.]] [[No swelling of the lips or tongue.]] [[Wound dressing dry.]]",
    kind: "highlight",
    spans: [
      { text: "Infusion set to run over 30 minutes.", why: "A 30 minute infusion is faster than the 60 minutes advised and drives the reaction." },
      { text: "Flushed red rash on the face, neck and upper chest.", why: "Flushing of the upper body is the typical sign of a rate-related reaction." },
      { text: "Reports itching of the neck.", why: "Itching comes from the histamine release of a rapid infusion." },
      { text: "BP 96/58 mmHg", why: "A fall from 124/76 mmHg signals histamine-driven vasodilation." },
      { text: "Lungs clear on both sides.", why: "Clear lungs show no bronchospasm and need no follow-up." },
      { text: "No swelling of the lips or tongue.", why: "No angioedema is a reassuring finding." },
      { text: "Wound dressing dry.", why: "A dry dressing is expected and is unrelated to the infusion." },
    ],
    correct: [0, 1, 2, 3],
  },
  {
    ...meta("rn-s15-07", {
      topic: "Pediatric oral suspension dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A child who weighs 16 kg has a prescription for amoxicillin 45 mg/kg/day by mouth, divided every 12 hours. The suspension contains 400 mg per 5 mL. How many mL should the nurse give for each dose?",
      rationale:
        "The daily dose is 45 mg/kg for a child of 16 kg, which is 720 mg per day. Every 12 hours means 2 doses a day, so each dose is 360 mg. The suspension holds 80 mg in each mL. Dividing 360 mg by 80 mg/mL gives 4.5 mL per dose.",
      calc: { expr: "45 * 16 / (24 / 12) / (400 / 5)", answer: 4.5, unit: "mL", round: 1, steps: ["45 * 16 = 720", "24 / 12 = 2", "720 / 2 = 360", "400 / 5 = 80", "360 / 80 = 4.5"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.9 mL", why: "This treats 400 mg as held in each mL. The suspension holds 400 mg in 5 mL." },
      { text: "2.3 mL", why: "This splits the daily dose into four doses. Every 12 hours means two doses a day." },
      { text: "4.5 mL", why: "Each 360 mg dose divided by 80 mg/mL gives 4.5 mL." },
      { text: "9 mL", why: "9 mL holds the whole daily dose of 720 mg. It is not divided into two doses." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-08", {
      topic: "Magnesium sulfate toxicity",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client at 35 weeks of gestation with preeclampsia with severe features receives magnesium sulfate 2 g/hour IV. The nurse finds respirations of 10/minute, absent patellar reflexes and 20 mL of urine in the last hour. Which action should the nurse take first?",
      rationale:
        "Absent reflexes and respirations of 10/minute are signs of magnesium toxicity. The kidneys clear magnesium, and 20 mL of urine in an hour lets it build up. The first action is to stop the infusion so no more drug enters. Calcium gluconate is the antidote and follows once the infusion is stopped. A lower rate still adds magnesium. Waiting an hour delays care.",
      refs: ["Calcium gluconate 1 g IV is the antidote for magnesium toxicity."],
      sources: [ACOG],
    }),
    kind: "mc",
    options: [
      { text: "Reduce the rate to 1 g/hour", why: "A lower rate still adds magnesium to a toxic level. Toxicity calls for stopping the drug." },
      { text: "Give calcium gluconate IV", why: "Calcium gluconate reverses toxicity but comes after the infusion is stopped." },
      { text: "Recheck the reflexes in 1 hour", why: "Waiting an hour with respirations of 10/minute risks respiratory arrest." },
      { text: "Stop the magnesium infusion", why: "Stopping the infusion halts further magnesium while toxicity is treated." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s15-09", {
      topic: "Opioid toxicity with an analgesia pump",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 72-year-old client is 10 hours after an open colectomy and has hydromorphone by an analgesia pump that the client controls. The family has been pressing the dose button while the client sleeps. The client does not respond to voice. Respirations are 7/minute and shallow. SpO2 is 86% on room air. Pupils are pinpoint. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Doses given by the family, no response to voice, respirations of 7/minute, SpO2 of 86% and pinpoint pupils fit opioid toxicity. The pump is stopped so no more opioid is given. Naloxone reverses the respiratory depression. Respiratory rate and depth show whether breathing recovers. Sedation level shows response and warns of renarcotization, because naloxone can wear off before hydromorphone.",
      sources: [PASERO, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Pulmonary embolism", why: "Embolism causes rapid breathing, not slow breathing with pinpoint pupils." },
      { text: "Opioid toxicity", why: "Extra doses, slow shallow breathing, low SpO2 and pinpoint pupils fit opioid excess." },
      { text: "Hypovolemic shock", why: "Shock raises the respiratory rate. It does not cause pinpoint pupils." },
      { text: "Acute delirium", why: "Delirium alters attention but does not slow breathing to 7/minute." },
    ],
    actions: [
      { text: "Stop the analgesia pump", why: "Stopping the pump prevents more hydromorphone from being given." },
      { text: "Encourage the incentive spirometer", why: "A client who does not respond to voice cannot use a spirometer." },
      { text: "Give naloxone IV per protocol", why: "Naloxone reverses opioid respiratory depression." },
      { text: "Give a bolus dose for comfort", why: "A bolus adds more opioid and worsens the depression." },
      { text: "Hold oxygen until blood gases return", why: "An SpO2 of 86% needs oxygen now. Waiting risks hypoxic injury." },
    ],
    parameters: [
      { text: "Bowel sound activity", why: "Bowel sounds do not guide treatment of respiratory depression." },
      { text: "Serum potassium level", why: "Potassium does not reflect opioid effect." },
      { text: "Respiratory rate and depth", why: "Breathing shows whether naloxone has reversed the depression." },
      { text: "Sedation level on a scale", why: "Sedation often worsens before breathing slows, so it warns of recurrence." },
      { text: "Incision drainage amount", why: "Drainage does not reflect the opioid effect." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [2, 3] },
  },
  {
    ...meta("rn-s15-10", {
      topic: "Levothyroxine teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 45-year-old client with new hypothyroidism starts levothyroxine 50 mcg by mouth daily. The client takes calcium carbonate each morning and drinks coffee with breakfast. Which instructions should the nurse include in teaching? Select all that apply.",
      rationale:
        "Food, coffee and calcium lower levothyroxine absorption. The tablet is taken on an empty stomach an hour before breakfast. Calcium is taken 4 hours apart from it. A racing heart or tremor can mean the dose is too high. Levothyroxine is lifelong for hypothyroidism, so it is not stopped when energy returns. Full effect takes several weeks.",
      sources: [ATA, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Take the tablet with breakfast", why: "Food and coffee reduce absorption of levothyroxine." },
      { text: "Stop the tablet once energy returns", why: "Hypothyroidism needs lifelong replacement. Stopping brings symptoms back." },
      { text: "Take it 60 minutes before breakfast", why: "An empty stomach gives steady absorption of the dose." },
      { text: "Expect full effect within 2 days", why: "Levothyroxine takes several weeks to reach full effect." },
      { text: "Separate it from calcium by 4 hours", why: "Calcium binds levothyroxine in the gut and lowers absorption." },
      { text: "Report a racing heart or tremor", why: "These are signs of too much thyroid hormone." },
    ],
    correct: [2, 4, 5],
  },
];
