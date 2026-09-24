import type { Item } from "@/engine/types";
import { BEERS, DKA, GINA, HINKLE, ISMP_HIGH, LEHNE, MONTELUKAST, SEVERE_HTN, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s16-41", {
      topic: "Weight-based insulin infusion rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with diabetic ketoacidosis weighs 72 kg. Serum potassium is 4.2 mEq/L (4.2 mmol/L). The provider prescribes regular insulin IV at 0.1 units/kg/hour. The pharmacy supplies regular insulin 100 units in 100 mL of 0.9% sodium chloride. At what rate should the nurse set the infusion pump?",
      rationale:
        "The dose is 0.1 units/kg/hour for a client of 72 kg, which is 7.2 units each hour. The bag holds 100 units in 100 mL, so each mL holds 1 unit. The rate is 7.2 mL/hour. The potassium of 4.2 mEq/L is not low, so insulin can start. IV insulin is a high-alert drug and the rate is double-checked.",
      calc: { expr: "0.1 * 72 / (100 / 100)", answer: 7.2, unit: "mL/hour", round: 1, steps: ["0.1 * 72 = 7.2", "100 / 100 = 1", "7.2 / 1 = 7.2"] },
      sources: [DKA, ISMP_HIGH],
    }),
    kind: "mc",
    options: [
      { text: "0.1 mL/hour", why: "This uses the per-kilogram dose without multiplying by the weight." },
      { text: "0.72 mL/hour", why: "This is one tenth of the correct rate. It comes from a misplaced decimal." },
      { text: "3.6 mL/hour", why: "This is half the correct rate and would slow ketone clearance." },
      { text: "7.2 mL/hour", why: "7.2 units/hour at 1 unit/mL is 7.2 mL/hour." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s16-42", {
      topic: "Oral iron for a toddler",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 2-year-old child with iron deficiency anemia is prescribed oral ferrous sulfate liquid once daily. Which instructions should the nurse give the parent? Select all that apply.",
      rationale:
        "Vitamin C in orange juice helps iron absorption. Milk and formula bind iron and reduce absorption. Liquid iron can stain teeth, so the teeth are brushed after each dose. Dark green or black stools are expected. Iron overdose is dangerous in young children, so the bottle is locked away. Treatment continues after the color improves to refill iron stores.",
      sources: [LEHNE, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Give it with milk to ease stomach upset", why: "Milk binds iron and lowers absorption." },
      { text: "Give it with a little orange juice", why: "Vitamin C improves iron absorption." },
      { text: "Expect dark green or black stools", why: "Unabsorbed iron darkens the stool. This is expected." },
      { text: "Brush the teeth after each dose", why: "Liquid iron can stain the teeth." },
      { text: "Stop it once the child's color improves", why: "Iron continues for months after the hemoglobin rises to refill body stores." },
      { text: "Mix it into a full bottle of formula", why: "Formula lowers absorption, and a partly finished bottle gives an unknown dose." },
      { text: "Store it locked, out of the child's reach", why: "Iron overdose can cause serious poisoning in young children." },
    ],
    correct: [1, 2, 3, 6],
  },
  {
    ...meta("rn-s16-43", {
      canada: "Canadian labels use a Serious Warnings and Precautions Box, not a boxed warning. Health Canada placed serious neuropsychiatric events in that box of the Singulair monograph in 2020. Canadians know albuterol as salbutamol.",
      topic: "Leukotriene modifier adverse effects",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 12-year-old child with asthma has taken montelukast 5 mg by mouth each evening for 6 weeks. At a clinic visit the parent describes several changes. Which report should the nurse share with the prescriber?",
      rationale:
        "Montelukast carries a boxed warning for neuropsychiatric effects such as nightmares, agitation, aggression and suicidal thoughts. New nightmares and angry outbursts after starting the drug need prompt review. Reliever use once a week fits well-controlled asthma. A headache that resolved and taking the tablet with or without food need no action.",
      sources: [MONTELUKAST, GINA, { body: "Health Canada", work: "Health Product InfoWatch, August 2020", year: 2020 }],
    }),
    kind: "mc",
    options: [
      { text: "New nightmares and angry outbursts", why: "Behavior and mood changes are a boxed warning effect of montelukast." },
      { text: "Uses albuterol once a week before soccer", why: "Reliever use this rarely fits well-controlled asthma." },
      { text: "Had a mild headache that went away", why: "A brief headache that resolved needs no change in therapy." },
      { text: "Takes the tablet with or without food", why: "Montelukast can be taken with or without food." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-44", {
      topic: "Anticholinergic burden in an older adult",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 82-year-old client in long-term care has taken oxybutynin 5 mg by mouth three times daily for 2 years. Diphenhydramine 50 mg at bedtime was added 4 days ago for sleep. The client is now newly confused. Heart rate is 106/minute and BP is 132/78 mmHg. The skin is warm and dry. A bladder scan shows 700 mL. Complete the sentence by dragging the options into the blanks.",
      rationale:
        "Oxybutynin and diphenhydramine are both strongly anticholinergic. The new confusion began after diphenhydramine was added. A fast pulse, dry warm skin and urinary retention of 700 mL fit anticholinergic toxicity. The Beers Criteria list both as strong anticholinergics to avoid in delirium. No antipsychotic or opioid is listed. The BP does not point to the cause.",
      sources: [BEERS, LEHNE],
    }),
    kind: "dnd",
    scoring: "triad",
    template: "The client is most likely experiencing {0} caused by {1}, as shown by {2}.",
    targets: ["Condition", "Cause", "Finding"],
    tokens: [
      { text: "anticholinergic toxicity", why: "Confusion, a fast pulse, dry skin and urinary retention fit this condition." },
      { text: "opioid-induced delirium", why: "No opioid is listed for this client." },
      { text: "neuroleptic malignant syndrome", why: "No antipsychotic is listed, and no rigidity or fever is given." },
      { text: "the added diphenhydramine", why: "The confusion began after this anticholinergic was added to the oxybutynin." },
      { text: "the oxybutynin taken for years", why: "Oxybutynin was taken for 2 years without confusion. The change followed the new drug." },
      { text: "a BP of 132/78 mmHg", why: "This BP does not point to an anticholinergic reaction." },
      { text: "urinary retention of 700 mL", why: "Anticholinergic drugs relax the bladder muscle and cause retention." },
    ],
    correct: [0, 3, 6],
  },
  {
    ...meta("rn-s16-45", {
      topic: "Isotretinoin teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 19-year-old female client with severe nodular acne starts isotretinoin. A pregnancy test today is negative. Which statement by the client needs further teaching?",
      rationale:
        "Isotretinoin causes severe birth defects. A client who can become pregnant uses two forms of contraception together, before, during and after treatment. Condoms alone are not enough. Avoiding blood donation, reporting low mood and avoiding waxing are all correct.",
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will not donate blood while I take it.\"", why: "Donated blood could reach a pregnant person, so donation is avoided." },
      { text: "\"Condoms alone are enough birth control for me.\"", why: "Two forms of contraception are needed. This statement needs correction." },
      { text: "\"I will report feeling sad or hopeless.\"", why: "Depression and suicidal thoughts have been reported with isotretinoin." },
      { text: "\"I will avoid waxing while I take this drug.\"", why: "Isotretinoin makes skin fragile, so waxing can tear it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-46", {
      canada: "Health Canada's Drug Product Database lists Nitrostat sublingual tablets as 0.3 mg and 0.6 mg only. The 0.4 mg dose is marketed in Canada as a pump spray, such as Nitrolingual Pumpspray.",
      topic: "Sublingual nitroglycerin teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 62-year-old client with stable angina has a new prescription for sublingual nitroglycerin 0.4 mg tablets. Which statements by the client show understanding of the teaching? Select two.",
      rationale:
        "Nitroglycerin can drop BP quickly, so the client sits first. If pain is not better 5 minutes after the first tablet, the client calls emergency services. The tablet dissolves under the tongue, not in the stomach. Heat and light weaken it. Erectile dysfunction drugs can cause severe hypotension with nitrates.",
      sources: [LEHNE, HINKLE, { body: "Health Canada", work: "Drug Product Database", year: 2026 }],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will swallow the tablet with water.\"", why: "Swallowed nitroglycerin is largely broken down by the liver. It dissolves under the tongue." },
      { text: "\"I will sit down before I take a tablet.\"", why: "Sitting prevents a fall if the BP drops." },
      { text: "\"I will call 911 if pain lasts 5 minutes after one tablet.\"", why: "Pain that persists after the first tablet may be a heart attack." },
      { text: "\"I will keep the tablets in a pill box in my car.\"", why: "Heat, light and air weaken the tablets. They stay in the original dark glass bottle." },
      { text: "\"I can take it with my erectile dysfunction pill.\"", why: "The combination can cause severe, lasting hypotension." },
      { text: "\"I will take up to 6 tablets in 15 minutes.\"", why: "No more than 3 tablets are taken, 5 minutes apart." },
    ],
    correct: [1, 2],
  },
  {
    ...meta("rn-s16-47", {
      topic: "Postpartum severe hypertension with asthma",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 29-year-old client is 3 days postpartum. BP is 164/112 mmHg, then 166/110 mmHg 15 minutes later. The client has moderate persistent asthma and is vomiting. The protocol lists IV labetalol, IV hydralazine and oral immediate-release nifedipine. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Two readings of 160/110 mmHg or higher 15 minutes apart need urgent treatment to prevent stroke. Labetalol is a nonselective beta blocker and is avoided in asthma because it can cause bronchospasm. Vomiting rules out an oral drug. IV hydralazine is the safe choice from the protocol.",
      refs: ["Severe hypertension in pregnancy and postpartum is a BP of 160/110 mmHg or higher, confirmed within 15 minutes."],
      sources: [SEVERE_HTN],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The nurse should question {0} because of the client's {1} and prepare to give {2}.",
    blanks: [
      {
        options: [
          { text: "IV labetalol", why: "Labetalol blocks beta-2 receptors and can trigger bronchospasm in asthma." },
          { text: "IV hydralazine", why: "Hydralazine is a direct vasodilator and is safe in asthma." },
          { text: "oral nifedipine", why: "Nifedipine is safe in asthma. Vomiting, not safety, limits its use here." },
          { text: "IV magnesium sulfate", why: "Magnesium prevents seizures and is not questioned for this client." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "asthma history", why: "Asthma is the reason to avoid a nonselective beta blocker." },
          { text: "postpartum day", why: "Day 3 postpartum does not limit any of the listed drugs." },
          { text: "BP readings", why: "The BP calls for treatment but does not rule out one drug." },
          { text: "age of 29", why: "Age does not limit any of the listed drugs." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "IV hydralazine", why: "IV hydralazine avoids both the beta blocker and the oral route." },
          { text: "oral nifedipine", why: "The client is vomiting, so an oral drug may not be absorbed." },
          { text: "IV labetalol at a lower dose", why: "A lower dose still carries the risk of bronchospasm." },
          { text: "oral metoprolol", why: "Metoprolol is oral, not on the protocol and a beta blocker." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s16-48", {
      topic: "Combined oral contraceptive warning signs",
      cjmm: "recognize",
      process: "teaching",
      difficulty: 2,
      stem: "A 34-year-old client starts a combined estrogen-progestin oral contraceptive. Which symptoms should the nurse teach the client to report at once? Select all that apply.",
      rationale:
        "Estrogen raises the risk of blood clots. Sudden chest pain or breathlessness can mean a pulmonary embolism. Pain and swelling in one calf can mean a deep vein thrombosis. Severe headache with vision changes or sudden one-sided weakness can mean a stroke. Spotting, mild nausea and breast tenderness are common early and often settle.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Spotting between periods in the first months", why: "Breakthrough spotting is common early and usually settles." },
      { text: "Sudden chest pain or shortness of breath", why: "These can signal a pulmonary embolism." },
      { text: "Mild breast tenderness in the first cycle", why: "Breast tenderness is a common early hormone effect." },
      { text: "Pain and swelling in one calf", why: "These can signal a deep vein thrombosis." },
      { text: "Severe headache with vision changes", why: "These can signal a stroke or severe hypertension." },
      { text: "Mild nausea in the first weeks", why: "Mild nausea is common early and often eases with food." },
      { text: "Sudden weakness on one side", why: "One-sided weakness can signal a stroke." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s16-49", {
      canada: "Canadian orders and labels give potassium in mmol, as ISMP Canada does. For potassium, 1 mEq equals 1 mmol, so the dose reads 40 mmol and the volume is still 30 mL.",
      topic: "Oral potassium liquid volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "The primary health care provider prescribes potassium chloride 40 mEq by mouth once for a client with a serum potassium of 3.2 mEq/L (3.2 mmol/L). The pharmacy supplies potassium chloride oral solution 20 mEq/15 mL. How many mL should the nurse give?",
      rationale:
        "The dose is 40 mEq and the solution holds 20 mEq in each 15 mL. 40 mEq is 2 times 20 mEq, so the volume is 2 times 15 mL, which is 30 mL. The liquid is diluted in water or juice to limit stomach irritation.",
      calc: { expr: "40 / 20 * 15", answer: 30, unit: "mL", round: 0, steps: ["40 / 20 = 2", "2 * 15 = 30"] },
      sources: [LEHNE, { body: "Institute for Safe Medication Practices Canada", work: "Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. ISMP Canada Safety Bulletin 19(1)", year: 2019 }],
    }),
    kind: "mc",
    options: [
      { text: "30 mL", why: "40 mEq is 2 times 20 mEq, and 2 times 15 mL is 30 mL." },
      { text: "40 mL", why: "This treats the dose in mEq as a volume in mL." },
      { text: "53.3 mL", why: "This multiplies 40 by 20 and divides by 15, which inverts the ratio." },
      { text: "60 mL", why: "This is twice the prescribed dose." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-50", {
      canada: "Phenazopyridine is prescription only in Canada. Health Canada's Drug Product Database lists Pyridium 100 mg tablets as the only marketed product, so a 200 mg dose is two tablets.",
      topic: "Urinary analgesic urine color",
      cjmm: "analyze",
      process: "communication",
      difficulty: 1,
      stem: "A 26-year-old client takes phenazopyridine 200 mg by mouth three times daily for painful urination, along with nitrofurantoin for a bladder infection. On day 2 the client calls, worried that the urine is bright orange. Which explanation should the nurse give?",
      rationale:
        "Phenazopyridine is an azo dye that turns urine orange or red-orange. This is an expected, harmless effect. It can also stain contact lenses and clothing. The stem gives no fever, flank pain or clots, so spread of infection or bleeding is not suggested.",
      sources: [LEHNE, { body: "Health Canada", work: "Drug Product Database", year: 2026 }],
    }),
    kind: "mc",
    options: [
      { text: "The color points to bleeding in the bladder", why: "Bleeding makes urine pink, red or brown. Orange is the expected dye effect." },
      { text: "The infection has spread to the kidneys", why: "Kidney infection shows as fever and flank pain, not a color change alone." },
      { text: "The color is an expected drug effect", why: "Phenazopyridine is a dye that turns urine orange." },
      { text: "The urine is too concentrated from low intake", why: "Concentrated urine is dark yellow, not bright orange." },
    ],
    correct: 2,
  },
];
