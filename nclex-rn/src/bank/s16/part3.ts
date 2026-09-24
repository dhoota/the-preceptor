import type { Item } from "@/engine/types";
import { AUD, ENTERAL, GOLD, GOUT, HINKLE, INS, ISMP_HIGH, LEHNE, ONS, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s16-21", {
      topic: "Weight-based enoxaparin volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The primary health care provider prescribes enoxaparin 1 mg/kg subcutaneously every 12 hours for a client with deep vein thrombosis. The client weighs 84 kg. The pharmacy supplies prefilled syringes that hold 100 mg/mL. How many mL should the nurse give?",
      rationale:
        "The dose is 1 mg/kg for a client of 84 kg, which is 84 mg. Each mL holds 100 mg. Dividing 84 mg by 100 mg/mL gives 0.84 mL. The nurse expels the excess drug before injecting. Enoxaparin is a high-alert anticoagulant, so the dose is double-checked.",
      calc: { expr: "1 * 84 / 100", answer: 0.84, unit: "mL", round: 2, steps: ["1 * 84 = 84", "84 / 100 = 0.84"] },
      sources: [LEHNE, ISMP_HIGH],
    }),
    kind: "mc",
    options: [
      { text: "0.084 mL", why: "This is one tenth of the correct volume. It comes from a misplaced decimal." },
      { text: "0.84 mL", why: "84 mg divided by 100 mg/mL is 0.84 mL." },
      { text: "1 mL", why: "The full syringe holds 100 mg, which is more than the 84 mg dose." },
      { text: "8.4 mL", why: "This is 10 times the correct volume and far more than a syringe holds." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-22", {
      topic: "Oral bisphosphonate teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 68-year-old client with osteoporosis starts alendronate 70 mg by mouth once weekly. Which statements by the client show understanding of the teaching? Select all that apply.",
      rationale:
        "Alendronate is absorbed poorly and can injure the esophagus. It is taken on waking with a full glass of plain water. The client stays upright and waits 30 minutes before food, drink or other drugs. Pain on swallowing can signal esophagitis. Coffee, food and calcium block absorption. Lying down lets the tablet irritate the esophagus.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "\"I will take it with my morning coffee.\"", why: "Coffee blocks absorption. Only plain water is used." },
      { text: "\"I will take it with a full glass of plain water.\"", why: "A full glass of water helps the tablet reach the stomach and be absorbed." },
      { text: "\"I will lie down for a while after I take it.\"", why: "Lying down lets the drug reflux and injure the esophagus." },
      { text: "\"I will wait 30 minutes before I eat.\"", why: "Food blocks absorption, so the client waits at least 30 minutes." },
      { text: "\"I will take it right after my breakfast.\"", why: "Food sharply reduces absorption. It is taken on an empty stomach." },
      { text: "\"I will report pain when I swallow.\"", why: "Painful swallowing can signal esophagitis from the drug." },
      { text: "\"I will take my calcium with the same dose.\"", why: "Calcium binds the drug and blocks absorption. It is taken later in the day." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s16-23", {
      canada: "Canadian labs report phenytoin in micromol/L. The University Health Network lab in Toronto lists a therapeutic range of 40 to 80 micromol/L, so 28 mcg/mL reads as about 111 micromol/L.",
      topic: "Anticonvulsant drug interaction",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 45-year-old client takes phenytoin 100 mg by mouth three times daily for a seizure disorder. Fluconazole was started 5 days ago for a fungal infection. The client now has nystagmus, an unsteady gait and slurred speech. The phenytoin level is 28 mcg/mL. Which explanation is most likely?",
      refs: ["The usual therapeutic range for total phenytoin is 10 to 20 mcg/mL."],
      rationale:
        "Fluconazole slows the liver breakdown of phenytoin, so the phenytoin level rises. A level of 28 mcg/mL is above the range of 10 to 20 mcg/mL. Nystagmus, ataxia and slurred speech are classic signs of phenytoin toxicity. The high level argues against a missed dose or a new stroke as the cause.",
      sources: [LEHNE, { body: "University Health Network Laboratory Medicine Program", work: "Lab Dictionary: Phenytoin (Dilantin)", year: 2026 }],
    }),
    kind: "mc",
    options: [
      { text: "Phenytoin toxicity from a drug interaction", why: "Fluconazole raises phenytoin levels, and the signs fit toxicity at 28 mcg/mL." },
      { text: "Low phenytoin level from missed doses", why: "The level is 28 mcg/mL, which is above the therapeutic range." },
      { text: "Allergic reaction to the fluconazole", why: "An allergy causes rash or swelling, not nystagmus and ataxia." },
      { text: "New stroke in the back of the brain", why: "A stroke is possible, but the high level and the new interacting drug explain these signs." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-24", {
      topic: "Inhaled anticholinergic precautions",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 70-year-old client with COPD has a new prescription for inhaled tiotropium once daily. The nurse reviews the client's history before the first dose. Which condition should the nurse report to the prescriber?",
      rationale:
        "Tiotropium is a long-acting muscarinic antagonist. Anticholinergic effects can raise eye pressure in narrow-angle glaucoma and can worsen urinary retention. The prescriber weighs this risk before the drug starts. Diabetes, allergic rhinitis and knee arthritis do not limit its use.",
      sources: [GOLD, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Type 2 diabetes treated with metformin", why: "Tiotropium does not affect glucose control or interact with metformin." },
      { text: "Seasonal allergic rhinitis", why: "Allergic rhinitis does not limit use of an inhaled anticholinergic." },
      { text: "Narrow-angle glaucoma", why: "Anticholinergic drugs can raise eye pressure and trigger acute glaucoma." },
      { text: "Osteoarthritis of both knees", why: "Joint disease does not affect the safety of tiotropium." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s16-25", {
      topic: "Medications through a gastrostomy tube",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receives continuous feeding through a gastrostomy tube. The nurse will give two crushed immediate-release tablets through the tube. Tube placement was confirmed at the start of the shift. Place the steps in order.",
      rationale:
        "The feeding is paused so formula does not mix with the drugs. A water flush clears formula from the tube. Each drug is diluted and given on its own, with a flush between them to prevent clumping and interaction. A final flush clears the tube before the feeding restarts. Drugs are not added to the formula bag.",
      sources: [ENTERAL, HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"],
    tokens: [
      { text: "Flush the tube with water", why: "The first flush clears formula from the tube before any drug goes in." },
      { text: "Give the second diluted drug", why: "The second drug goes in only after a flush clears the first." },
      { text: "Check placement with an air bolus", why: "Listening to an air bolus is not a reliable placement check. Placement was already confirmed." },
      { text: "Pause the feeding pump", why: "Pausing the feeding keeps formula from mixing with the drugs." },
      { text: "Flush with water between the drugs", why: "A flush between drugs prevents clumping and interaction in the tube." },
      { text: "Mix both drugs into the formula bag", why: "Drugs in formula can clog the tube, interact with nutrients and give an uncertain dose." },
      { text: "Give the first diluted drug", why: "Each drug is given on its own after the tube is cleared." },
      { text: "Flush with water, then restart feeding", why: "A final flush clears the tube before the feeding resumes." },
    ],
    correct: [3, 0, 6, 4, 1, 7],
  },
  {
    ...meta("rn-s16-26", {
      topic: "Acute drug-induced dystonia",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "Four adults on a medical unit each started a new drug today. The nurse reviews the latest update on each one. Which client needs the nurse's assessment first?",
      rationale:
        "A neck twisted to one side after metoclopramide is an acute dystonic reaction. Dystonia can spread to the throat and threaten the airway, so this client is seen first. A potassium of 3.6 mEq/L is within the normal range. Mild headache is a common ondansetron effect. The morphine client is awake with normal breathing.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [LEHNE, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A client on furosemide with a potassium of 3.6 mEq/L (3.6 mmol/L)", why: "This potassium is low normal. It needs monitoring, not the first visit." },
      { text: "A client on metoclopramide whose neck is twisted to one side", why: "Acute dystonia near the throat can threaten the airway." },
      { text: "A client on ondansetron who reports a mild headache", why: "Headache is a common, mild effect of ondansetron." },
      { text: "A client on morphine who is awake with respirations of 16/minute", why: "An awake client with normal breathing is stable." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-27", {
      canada: "Health Canada has not authorized sertraline for anyone under 18, so this use is off label. Canadian monographs carry a Serious Warnings box on self-harm and advise close monitoring at all ages.",
      topic: "Antidepressant teaching for a teenager",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 17-year-old client with major depression starts sertraline 50 mg by mouth daily. Which statements by the client's parent show understanding of the teaching? Select two.",
      rationale:
        "Antidepressants carry a warning about new suicidal thinking in people under 25, most often early in treatment. The family watches for new talk of suicide. The mood effect builds over several weeks. Stopping suddenly can cause discontinuation symptoms. St. John's wort adds serotonin effects. Missed doses are not doubled.",
      refs: ["Antidepressants carry a boxed warning for suicidal thinking in people under 25 years."],
      sources: [LEHNE, { body: "Altamed Pharma", work: "Sertraline Hydrochloride Capsules Product Monograph", year: 2024 }],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"We should see the full benefit within 3 days.\"", why: "The full mood effect takes several weeks, not days." },
      { text: "\"We will watch for any new talk of suicide.\"", why: "Suicidal thinking can rise early in treatment in young people." },
      { text: "\"It may take a few weeks to start working.\"", why: "The antidepressant effect builds over several weeks." },
      { text: "\"We can stop it once the mood lifts.\"", why: "Stopping early risks relapse and discontinuation symptoms." },
      { text: "\"St. John's wort will boost its effect.\"", why: "Adding St. John's wort raises the risk of serotonin syndrome." },
      { text: "\"It is safe to double a missed dose.\"", why: "Doubling raises side effects. The next dose is taken as scheduled." },
    ],
    correct: [1, 2],
  },
  {
    ...meta("rn-s16-28", {
      canada: "Health Canada's Drug Product Database lists every disulfiram product as cancelled, so it is not marketed in Canada. The 2023 Canadian guideline for alcohol use disorder names naltrexone and acamprosate as first-line drugs.",
      topic: "Disulfiram teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 48-year-old client with alcohol use disorder starts disulfiram 250 mg by mouth daily. Which statement by the client needs further teaching?",
      rationale:
        "Disulfiram blocks the breakdown of acetaldehyde. Any alcohol, even in mouthwash, can cause flushing, vomiting, a fast pulse and low BP. Mouthwash with alcohol must be avoided. Reading labels, carrying a medical card and knowing that a reaction can occur for up to 2 weeks after the last dose are correct.",
      sources: [AUD, LEHNE, { body: "Health Canada", work: "Drug Product Database", year: 2026 }, { body: "Wood E, Bright J, Hsu K, et al.", work: "Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder. CMAJ 195(40):E1364", year: 2023 }],
    }),
    kind: "mc",
    options: [
      { text: "\"I can keep using my mouthwash with alcohol.\"", why: "Alcohol in mouthwash can trigger a disulfiram reaction. This statement needs correction." },
      { text: "\"I will check cough syrup labels for alcohol.\"", why: "Many liquid drugs contain alcohol, so label checks prevent a reaction." },
      { text: "\"I will carry a card that says I take this drug.\"", why: "A card alerts responders if a reaction occurs." },
      { text: "\"A reaction can happen up to 2 weeks after my last dose.\"", why: "The enzyme block lasts up to 2 weeks after stopping." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-29", {
      topic: "Vesicant extravasation",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client receives doxorubicin IV through a peripheral catheter in the left forearm. The client reports burning at the site. The nurse sees swelling around the catheter and gets no blood return. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Burning, swelling and no blood return during a vesicant infusion point to extravasation. The infusion stops at once. The catheter stays in place so residual drug can be drawn back. Cold compresses limit the spread of doxorubicin. The provider is told so an antidote can be considered. Flushing pushes more drug into the tissue.",
      sources: [ONS, INS],
    }),
    kind: "sata",
    options: [
      { text: "Stop the infusion", why: "Stopping at once limits the amount of vesicant in the tissue." },
      { text: "Remove the catheter at once", why: "The catheter stays in place so residual drug can be aspirated first." },
      { text: "Aspirate residual drug from the catheter", why: "Drawing back removes some of the drug before it spreads." },
      { text: "Flush the line with saline", why: "Flushing pushes more vesicant into the tissue." },
      { text: "Apply a warm compress", why: "Heat spreads an anthracycline and worsens the injury." },
      { text: "Apply a cold compress", why: "Cold narrows vessels and limits the spread of doxorubicin." },
      { text: "Notify the provider", why: "The provider decides on an antidote and follow-up." },
    ],
    correct: [0, 2, 5, 6],
  },
  {
    ...meta("rn-s16-30", {
      topic: "Rash after starting allopurinol",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 55-year-old client started allopurinol 100 mg by mouth daily for gout 3 weeks ago. The client calls to report a new itchy red rash on the trunk and a temperature of 38.0°C (100.4°F). What should the nurse tell the client?",
      rationale:
        "A rash with fever in the first weeks of allopurinol can be the start of a severe hypersensitivity reaction. The drug is stopped and the client is seen the same day. Treating the itch while continuing the drug lets the reaction progress. Waiting a week delays care.",
      sources: [GOUT, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Take an antihistamine and keep taking the drug", why: "Continuing the drug lets a hypersensitivity reaction progress." },
      { text: "Drink more fluids and continue the dose", why: "Fluids help prevent kidney stones but do not treat a drug reaction." },
      { text: "Stop the allopurinol and be seen today", why: "Rash with fever can signal a severe reaction, so the drug stops at once." },
      { text: "Apply hydrocortisone cream and call in a week", why: "A week's delay can let a severe reaction worsen." },
    ],
    correct: 2,
  },
];
