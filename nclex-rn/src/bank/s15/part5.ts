import type { Item } from "@/engine/types";
import { CDC_CLABSI, HE, HF, HINKLE, INS, ISMP_PUSH, LEHNE, OXYTOCIN, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s15-41", {
      topic: "Opioid IV push volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client after abdominal surgery has a prescription for morphine 3 mg IV every 3 hours as needed for pain. The vial contains morphine 4 mg/mL. How many mL should the nurse draw up?",
      rationale:
        "The dose is 3 mg and each mL holds 4 mg. Dividing 3 mg by 4 mg/mL gives 0.75 mL. Morphine is a high-alert drug. The dose is diluted and pushed slowly as policy directs, and sedation and breathing are checked afterward.",
      calc: { expr: "3 / 4", answer: 0.75, unit: "mL", round: 2, steps: ["3 / 4 = 0.75"] },
      sources: [ISMP_PUSH, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.75 mL", why: "3 mg divided by 4 mg/mL is 0.75 mL." },
      { text: "1.33 mL", why: "This divides 4 by 3, which inverts the formula." },
      { text: "3 mL", why: "This treats the dose in mg as a volume in mL." },
      { text: "12 mL", why: "This multiplies the dose by the concentration instead of dividing." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-42", {
      topic: "Central line infection prevention",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse cares for a client with a triple-lumen subclavian central venous catheter placed 3 days ago. Which actions reduce the risk of a catheter-related bloodstream infection? Select all that apply.",
      rationale:
        "Hand hygiene and scrubbing the hub before each access block the two main routes of entry. Chlorhexidine with alcohol is the preferred skin antiseptic. A daily review of need removes lines that no longer serve a purpose. Gauze dressings are changed every 2 days, not every 7. Routine catheter replacement does not lower infection. Antibiotic ointment promotes resistance and fungal growth.",
      refs: ["Gauze dressings on central venous catheters are changed every 2 days."],
      sources: [CDC_CLABSI],
    }),
    kind: "sata",
    options: [
      { text: "Scrub the hub before each access", why: "Scrubbing removes organisms that enter through the hub." },
      { text: "Change the gauze dressing every 7 days", why: "Gauze dressings are changed every 2 days. The 7 day interval is for transparent dressings." },
      { text: "Clean the site with chlorhexidine", why: "Chlorhexidine with alcohol is the preferred antiseptic for site care." },
      { text: "Replace the catheter every 72 hours", why: "Routine replacement does not lower infection and adds insertion risk." },
      { text: "Assess daily whether the line is needed", why: "Prompt removal of an unneeded line lowers infection risk." },
      { text: "Apply antibiotic ointment to the site", why: "Ointment promotes resistance and fungal growth at the site." },
      { text: "Perform hand hygiene before touching it", why: "Hand hygiene prevents transfer of organisms to the catheter." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s15-43", {
      topic: "Monoamine oxidase inhibitor diet",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with depression starts phenelzine. The nurse teaches about food and drug interactions. Which statement by the client needs further teaching?",
      rationale:
        "Phenelzine blocks the breakdown of tyramine. A high tyramine intake can cause a hypertensive crisis. Tap beer is high in tyramine and is avoided. Aged cheese and cured meats are avoided. Decongestants raise BP with this drug. A sudden severe headache can signal a hypertensive crisis.",
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will avoid aged cheese and salami.\"", why: "The client understands this point. Aged cheese and cured meats are high in tyramine." },
      { text: "\"I will check cold remedies for decongestants.\"", why: "The client understands this point. Decongestants can trigger a hypertensive crisis." },
      { text: "\"I will report a sudden severe headache.\"", why: "The client understands this point. A severe headache can signal a hypertensive crisis." },
      { text: "\"I can have tap beer with dinner.\"", why: "Tap beer is high in tyramine, so this statement needs further teaching." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s15-44", {
      topic: "Cardiac glycoside toxicity",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 80-year-old client takes digoxin 0.25 mg and furosemide 40 mg by mouth daily. The client reports nausea, poor appetite and yellow halos around lights. The apical pulse is 48/minute and irregular. Serum potassium is 3.0 mEq/L (3.0 mmol/L). The digoxin level is 2.8 ng/mL (3.6 nmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Nausea, poor appetite, yellow halos, a pulse of 48/minute and a level of 2.8 ng/mL fit digoxin toxicity. A potassium of 3.0 mEq/L from furosemide makes toxicity more likely. The dose is held and the heart is monitored for dysrhythmias. The pulse and rhythm and the potassium level guide treatment.",
      refs: ["A serum digoxin level above 2 ng/mL (2.6 nmol/L) is associated with toxicity.", "Serum potassium below 3.5 mEq/L (3.5 mmol/L) raises the risk of digoxin toxicity."],
      sources: [LEHNE, HF, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
      canada: "Canadian labs report digoxin in nmol/L and potassium in mmol/L only. The 3.6 nmol/L and 3.0 mmol/L values are the ones a Canadian nurse would read.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Viral gastroenteritis", why: "Gastroenteritis does not cause yellow halos or a slow irregular pulse." },
      { text: "Heart failure flare", why: "The stem gives no edema, crackles or weight gain." },
      { text: "Digoxin toxicity", why: "Visual halos, nausea, bradycardia and a level of 2.8 ng/mL fit toxicity." },
      { text: "Macular degeneration", why: "Macular disease causes central vision loss, not nausea or bradycardia." },
    ],
    actions: [
      { text: "Give the scheduled furosemide", why: "Furosemide lowers potassium further and worsens toxicity." },
      { text: "Hold the next digoxin dose", why: "Holding the dose stops more drug from building up." },
      { text: "Restrict dietary potassium", why: "Potassium is already low at 3.0 mEq/L. Restriction lowers it further." },
      { text: "Start continuous ECG monitoring", why: "Toxicity can cause heart block and ventricular dysrhythmias." },
      { text: "Give the digoxin with food", why: "Food does not lower a toxic level. The dose is held." },
    ],
    parameters: [
      { text: "Liver enzyme levels", why: "Digoxin is mainly cleared by the kidneys. Liver enzymes do not guide care." },
      { text: "Apical pulse and rhythm", why: "Rate and rhythm show whether toxicity is affecting conduction." },
      { text: "Hemoglobin level", why: "Hemoglobin does not reflect digoxin toxicity." },
      { text: "Serum potassium level", why: "Low potassium raises digoxin binding and toxicity." },
      { text: "Blood glucose level", why: "Glucose does not change digoxin effect." },
    ],
    correct: { condition: 2, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s15-45", {
      topic: "Pediatric antipyretic dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A child who weighs 12 kg has a temperature of 39.2°C (102.6°F). The prescription is acetaminophen 15 mg/kg by mouth every 6 hours as needed. The oral suspension contains 160 mg per 5 mL. How many mL should the nurse give?",
      rationale:
        "The dose is 15 mg/kg for a child of 12 kg, which is 180 mg. The suspension holds 160 mg in 5 mL, which is 32 mg in each mL. Dividing 180 mg by 32 mg/mL gives 5.625 mL, which rounds to 5.6 mL.",
      calc: { expr: "15 * 12 / (160 / 5)", answer: 5.625, unit: "mL", round: 1, steps: ["15 * 12 = 180", "160 / 5 = 32", "180 / 32 = 5.625"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.6 mL", why: "This misplaces the decimal and gives one tenth of the dose." },
      { text: "1.1 mL", why: "This treats 160 mg as held in each mL. The suspension holds 160 mg in 5 mL." },
      { text: "5.6 mL", why: "180 mg divided by 32 mg/mL rounds to 5.6 mL." },
      { text: "56.3 mL", why: "This misplaces the decimal and gives 10 times the dose." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s15-46", {
      topic: "Response to IV loop diuretic",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client with a heart failure exacerbation received furosemide 40 mg IV at 0800. Before the dose, crackles were heard halfway up both lungs and weight was 84.6 kg. The nurse reassesses at 1200. Which findings show a therapeutic response? Select all that apply.",
      rationale:
        "Furosemide removes excess fluid. Urine output of 1400 mL since 0800 shows diuresis. Crackles that have receded to the bases show less lung fluid. A weight of 83.4 kg is down from 84.6 kg. A potassium of 3.1 mEq/L, a BP of 84/50 mmHg and new cramps are adverse effects, not goals.",
      sources: [HF, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Serum potassium 3.1 mEq/L (3.1 mmol/L)", why: "Low potassium is an adverse effect of furosemide, not a goal." },
      { text: "Urine output of 1400 mL since 0800", why: "A large urine output shows the diuretic is working." },
      { text: "BP 84/50 mmHg lying down", why: "Hypotension signals too much fluid loss." },
      { text: "Crackles only at the lung bases", why: "Receding crackles show less fluid in the lungs." },
      { text: "New calf muscle cramps", why: "Cramps can signal electrolyte loss from diuresis." },
      { text: "Weight of 83.4 kg", why: "Weight fell from 84.6 kg, which reflects fluid loss." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s15-47", {
      topic: "IV push through a saline lock",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give a prescribed IV push medication through a saline lock in a client's forearm. The medication and flushes are ready at the bedside. Place the steps in order.",
      rationale:
        "Two identifiers confirm the right client first. The needleless connector is scrubbed before it is accessed. A saline flush confirms patency before the drug goes in. The drug is pushed at the prescribed rate. The final flush runs at the same rate so the drug left in the catheter is not pushed in fast. Needles are not recapped by hand.",
      sources: [ISMP_PUSH, INS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Flush with saline to check patency", why: "Checking patency before the drug avoids giving it into tissue." },
      { text: "Recap the used needle with both hands", why: "Two-handed recapping risks a needlestick and is not a step." },
      { text: "Check two client identifiers", why: "Identifying the client comes before any access." },
      { text: "Give the drug at the set rate", why: "The drug goes in after patency is confirmed." },
      { text: "Push the final saline flush rapidly", why: "A rapid flush pushes the drug left in the catheter too fast." },
      { text: "Scrub the needleless connector", why: "Scrubbing the connector comes before accessing it." },
      { text: "Flush with saline at the same rate", why: "Flushing at the drug rate clears the catheter safely." },
    ],
    correct: [2, 5, 0, 3, 6],
  },
  {
    ...meta("rn-s15-48", {
      topic: "Oxytocin and excess uterine activity",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client in labor at 40 weeks receives oxytocin at 8 milliunits/minute. Over the last 30 minutes she has had 7 contractions in each 10 minutes. The fetal heart rate baseline is 145/minute with recurrent late decelerations. Which action should the nurse take first?",
      rationale:
        "Seven contractions in 10 minutes is tachysystole. With recurrent late decelerations, oxytocin is stopped first so the uterus can relax and the placenta can refill. The client is turned to her side and fluids are given. Lowering the dose slightly does not act fast enough with late decelerations. Lying supine lowers placental flow. Terbutaline needs a prescription and follows stopping oxytocin.",
      refs: ["Tachysystole is more than 5 contractions in 10 minutes, averaged over 30 minutes."],
      sources: [OXYTOCIN],
    }),
    kind: "mc",
    options: [
      { text: "Stop the oxytocin infusion", why: "Stopping oxytocin lets the uterus relax and restores placental flow." },
      { text: "Place the client flat on her back", why: "The supine position compresses the vena cava and lowers placental flow." },
      { text: "Lower the dose by 2 milliunits/minute", why: "A small cut acts too slowly with recurrent late decelerations." },
      { text: "Prepare to give terbutaline", why: "Terbutaline is used if stopping oxytocin does not settle the uterus." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s15-49", {
      topic: "Preventing opioid-induced constipation",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client with metastatic cancer starts oxycodone extended-release 20 mg by mouth every 12 hours for bone pain. Which measures should the nurse include in the plan to prevent constipation? Select all that apply.",
      rationale:
        "Opioids slow bowel motility and tolerance to this effect does not develop. A stimulant laxative is started on a schedule with the opioid. Fluids help keep stools soft. The bowel pattern is tracked each day. Fiber alone can worsen hard stools when motility is slow. Waiting days without a stool allows impaction.",
      sources: [LEHNE, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Wait 3 days without a stool before acting", why: "Waiting lets hard stool build up and can lead to impaction." },
      { text: "Use bulk fiber alone as the main plan", why: "Fiber without a stimulant can harden stool when opioids slow the bowel." },
      { text: "Start a scheduled stimulant laxative", why: "A stimulant laxative counters slowed motility from the opioid." },
      { text: "Expect the constipation to fade in a week", why: "Tolerance does not develop to opioid constipation." },
      { text: "Track the bowel movement pattern", why: "Daily tracking catches constipation early." },
      { text: "Encourage fluids as allowed", why: "Fluids help keep stool soft." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s15-50", {
      topic: "Response to lactulose",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with cirrhosis was admitted 2 days ago confused, with asterixis and an ammonia level of 118 mcg/dL (69 micromol/L). The client receives lactulose 30 mL by mouth every 6 hours. Which finding best shows the lactulose is effective?",
      rationale:
        "Lactulose traps ammonia in the colon and speeds its removal. The goal is clearer thinking with 2 to 3 soft stools a day. Orientation to person, place and time shows the encephalopathy is improving. Eight watery stools a day risks dehydration and low potassium. No stool means the dose is not working. Better appetite does not measure brain function.",
      refs: ["Lactulose is adjusted to give 2 to 3 soft stools a day."],
      sources: [HE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
      canada: "Canadian labs report ammonia in micromol/L only. The Medical Council of Canada lists the reference value as 35 micromol/L or less.",
    }),
    kind: "mc",
    options: [
      { text: "Eight watery stools in the past day", why: "This many stools is excess and risks dehydration and hypokalemia." },
      { text: "Oriented to person, place and time", why: "Restored orientation shows less ammonia is reaching the brain." },
      { text: "Appetite improved at breakfast", why: "Appetite does not measure the encephalopathy." },
      { text: "No stool for the past 24 hours", why: "No stool shows the lactulose is not yet working." },
    ],
    correct: 1,
  },
];
