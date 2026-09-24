import type { Item } from "@/engine/types";
import { ASHP_HD, CAUTI, DISINFECTION, HINKLE, HIV_PEP, KDIGO, NIOSH_2016, OSHA_BBP, REFEEDING, SEPSIS, CDC_EXPOSURE, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s26-31", {
      need: "RRP",
      topic: "Meaning of a high lactate in sepsis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 71-year-old client with pneumonia has a temperature of 38.9°C (102.0°F), heart rate 118/minute, BP 88/50 mmHg and new confusion. Serum lactate is 4.6 mmol/L. The laboratory upper limit for lactate is 2.0 mmol/L. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Low BP and new confusion show poor tissue perfusion. Cells short of oxygen switch to anaerobic metabolism and make lactate. A lactate of 4.6 mmol/L is more than twice the upper limit of 2.0 mmol/L. Fluid resuscitation starts, and lactate is measured again to judge the response. Fluids are not withheld. Bicarbonate does not treat the cause. Antibiotics are not delayed for culture results.",
      sources: [SEPSIS],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The lactate level shows that tissues are {0}, and the nurse should expect {1}.",
    blanks: [
      {
        options: [
          { text: "retaining carbon dioxide", why: "Carbon dioxide retention is a respiratory problem. It does not raise lactate." },
          { text: "using anaerobic metabolism", why: "Poorly perfused tissues make energy without oxygen and produce lactate." },
          { text: "losing bicarbonate in stool", why: "Bicarbonate loss in diarrhea causes acidosis without a lactate rise." },
          { text: "breaking down muscle fibers", why: "Muscle breakdown raises creatine kinase and myoglobin, not lactate as its main marker." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "all IV fluids to be withheld", why: "Hypotension with a high lactate calls for fluid, not fluid restriction." },
          { text: "IV sodium bicarbonate first", why: "Bicarbonate does not restore perfusion and is not a first step in sepsis." },
          { text: "a repeat lactate after fluids", why: "A repeat lactate shows whether perfusion improves with resuscitation." },
          { text: "antibiotics held for cultures", why: "Cultures are drawn quickly, but antibiotics are not delayed to wait for results." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s26-32", {
      need: "SIPC",
      topic: "Broken glass contaminated with blood",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A glass blood collection tube falls from the nurse's tray and shatters on the floor. Blood is spread among the broken pieces. How should the nurse pick up the glass?",
      rationale:
        "Broken glass that may hold blood is a sharps hazard. It is never picked up directly by hand, even with gloves. A brush and dustpan, tongs or forceps keep the hands away from the edges. The pieces go into a sharps container. The floor is then cleaned and disinfected. Blotting first or wrapping in a towel puts the hands close to the edges.",
      sources: [OSHA_BBP],
    }),
    kind: "mc",
    options: [
      { text: "Pick up the large pieces with gloved hands", why: "Gloves do not stop cuts from glass. Contaminated glass is not handled directly." },
      { text: "Blot the blood with gauze, then gather the glass", why: "Blotting over broken glass puts the hands against sharp edges." },
      { text: "Wrap the pieces in a towel for the trash", why: "Wrapping by hand risks cuts, and regular trash is not a sharps container." },
      { text: "Use a brush and dustpan or tongs", why: "Mechanical tools keep the hands away from sharp, contaminated edges." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s26-33", {
      need: "SIPC",
      topic: "Observing catheter care by assistive personnel",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse observes assistive personnel caring for a client with an indwelling urinary catheter. Which actions need correction? Select all that apply.",
      rationale:
        "A closed, downhill drainage system limits bacteria entering the bladder. A bag raised above the bladder lets urine flow back. A drain spout that touches the container picks up bacteria. Opening the closed system for a sample lets bacteria in. A sample comes from the sampling port with aseptic technique. Hanging the bag below the bladder, using a separate container for each client and keeping tubing free of kinks are correct.",
      sources: [CAUTI],
    }),
    kind: "sata",
    options: [
      { text: "Hangs the bag on the bed frame below the bladder", why: "The bag below the bladder keeps urine flowing away from the bladder." },
      { text: "Lays the bag on the client's abdomen during a turn", why: "A bag above the bladder lets urine flow back toward it." },
      { text: "Empties the bag into a container used for this client only", why: "A separate clean container for each client is correct." },
      { text: "Lets the drain spout touch the measuring container", why: "Contact contaminates the spout and gives bacteria a path into the bag." },
      { text: "Disconnects the tubing to collect a urine sample", why: "Breaking the closed system lets bacteria in. Samples come from the port." },
      { text: "Keeps the tubing free of kinks", why: "Unobstructed flow is correct and lowers infection risk." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s26-34", {
      need: "RRP",
      topic: "Low potassium that resists replacement",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with chronic diarrhea from Crohn disease has received potassium chloride replacement for 3 days. Serum potassium remains 3.0 mEq/L (3.0 mmol/L). Other results: sodium 138 mEq/L (138 mmol/L), magnesium 1.1 mg/dL (0.45 mmol/L), calcium 9.0 mg/dL (2.25 mmol/L) and phosphorus 3.5 mg/dL (1.13 mmol/L). The magnesium reference range is 1.7 mg/dL (0.70 mmol/L) to 2.2 mg/dL (0.91 mmol/L). Which result best explains why potassium stays low?",
      rationale:
        "The magnesium of 1.1 mg/dL is below the lower limit of 1.7 mg/dL. Chronic diarrhea loses both magnesium and potassium. Low magnesium makes the kidneys waste potassium. Potassium will not stay up until magnesium is replaced. The sodium, calcium and phosphorus results are within usual limits and do not cause potassium loss.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Magnesium 1.1 mg/dL", why: "Low magnesium causes the kidneys to keep losing potassium despite replacement." },
      { text: "Sodium 138 mEq/L", why: "A sodium of 138 mEq/L is in the usual range and does not drive potassium loss." },
      { text: "Calcium 9.0 mg/dL", why: "A calcium of 9.0 mg/dL is in the usual range and does not affect potassium." },
      { text: "Phosphorus 3.5 mg/dL", why: "A phosphorus of 3.5 mg/dL is in the usual range and does not explain the low potassium." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s26-35", {
      need: "SIPC",
      topic: "Gloves for an intact oral hazardous drug",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse will give a client an intact capsule of an oral antineoplastic drug from a unit-dose package. The capsule will not be opened or crushed. Which protection does the nurse need?",
      rationale:
        "Drug residue can sit on the outside of packages and capsules. A single pair of chemotherapy gloves protects the hands when the dose stays intact. Double gloves and a gown are for cutting, crushing or opening doses and for injectable antineoplastic drugs. A respirator is for spills or aerosols. Going without gloves exposes the skin to residue.",
      sources: [NIOSH_2016, ASHP_HD],
    }),
    kind: "mc",
    options: [
      { text: "No gloves because the capsule is sealed", why: "Residue on the capsule and package can reach bare skin." },
      { text: "Two pairs of gloves and a coated gown", why: "Double gloves and a gown are for manipulating doses or giving injectable antineoplastic drugs." },
      { text: "One pair of chemotherapy gloves", why: "Single gloves are enough for an intact unit-dose oral hazardous drug." },
      { text: "Gloves and a fit-tested N95 respirator", why: "A respirator is for spills and aerosols, not an intact capsule." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s26-36", {
      need: "RRP",
      topic: "Laboratory findings in fluid volume deficit",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "An 84-year-old client has had vomiting and poor oral intake for 3 days. Which laboratory findings would the nurse expect if the client has a fluid volume deficit? Select all that apply.",
      rationale:
        "Losing water concentrates the blood and the urine. Hematocrit rises because the same red cells sit in less plasma. The kidneys save water, so urine specific gravity rises. Less blood flow to the kidneys raises BUN. A low hematocrit, dilute urine and a low BUN point away from a deficit.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report urea in mmol/L rather than BUN in mg/dL. The Medical Council of Canada range is 2.1 to 8.0 mmol/L, so 13.6 mmol/L is high and 2.9 mmol/L is normal.",
    }),
    kind: "sata",
    options: [
      { text: "Urine specific gravity 1.003", why: "Dilute urine shows the kidneys are not conserving water." },
      { text: "Hematocrit 52%", why: "Less plasma makes the red cells a larger share of the blood." },
      { text: "BUN 8 mg/dL (2.9 mmol/L)", why: "A low BUN does not fit reduced kidney blood flow from volume loss." },
      { text: "Urine specific gravity 1.034", why: "Concentrated urine shows the kidneys holding on to water." },
      { text: "Hematocrit 31%", why: "A low hematocrit suggests anemia or dilution, not a deficit." },
      { text: "BUN 38 mg/dL (13.6 mmol/L)", why: "Low kidney perfusion and concentration raise BUN in a deficit." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s26-37", {
      need: "SIPC",
      topic: "Disinfecting a shared blood pressure cuff",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse finishes taking vital signs for a client on a medical unit. The same blood pressure cuff will be used for the next client. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A cuff touches only intact skin, so it needs low-level disinfection between clients. A registered hospital disinfectant does this. The product works only when the surface stays wet for the contact time on its label. Hand rub is made for skin. Water and paper towels clean but do not disinfect. Drying or rinsing early stops the product before it works.",
      sources: [DISINFECTION],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "Before the next use, the nurse wipes the cuff with {0} and keeps the surface {1}.",
    blanks: [
      {
        options: [
          { text: "a hand rub product", why: "Hand rub is formulated for skin, not for disinfecting equipment." },
          { text: "sterile water on gauze", why: "Water removes some soil but does not disinfect." },
          { text: "a hospital disinfectant", why: "A registered hospital disinfectant gives the low-level disinfection a cuff needs." },
          { text: "dry paper towels", why: "Dry towels do not kill microbes on the cuff." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "wet for the label contact time", why: "The disinfectant needs its full contact time to kill microbes." },
          { text: "dry within a few seconds", why: "Drying at once cuts the contact time short." },
          { text: "covered with a clean towel", why: "A towel soaks up the product before it has worked." },
          { text: "rinsed right away with water", why: "Rinsing removes the disinfectant before the contact time ends." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s26-38", {
      need: "RRP",
      topic: "Falling electrolytes after tube feeding starts",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 58-year-old client with alcohol use disorder weighed 44 kg on admission after eating little for 3 weeks. Tube feeding and thiamine started 2 days ago. Today the client is alert, has no tremor, reports weakness and has an irregular heart rate of 112/minute. Phosphorus is 1.6 mg/dL (0.52 mmol/L), down from 3.4 mg/dL (1.10 mmol/L) on admission. Potassium is 3.0 mEq/L (3.0 mmol/L), down from 4.1 mEq/L (4.1 mmol/L). Magnesium is 1.3 mg/dL (0.53 mmol/L). Glucose is 148 mg/dL (8.2 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Feeding after starvation drives insulin release. Insulin moves phosphorus, potassium and magnesium into cells, so blood levels fall. Phosphorus fell from 3.4 to 1.6 mg/dL, more than 30 percent within 5 days of feeding. That marks severe refeeding syndrome. Weakness and an irregular pulse show its effects on muscle and heart. Phosphate is replaced and the feeding is slowed as prescribed. Electrolytes and heart rhythm are watched closely.",
      refs: [
        "A fall in phosphorus, potassium or magnesium of more than 30 percent within 5 days of refeeding marks severe refeeding syndrome.",
        "When electrolytes drop quickly during refeeding, calories are reduced and electrolytes are replaced.",
      ],
      sources: [REFEEDING],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Refeeding syndrome", why: "Falling phosphorus and potassium and a magnesium of 1.3 mg/dL after feeding a starved client fit this syndrome." },
      { text: "Alcohol withdrawal delirium", why: "The client is alert with no tremor. The lab pattern points to refeeding." },
      { text: "Diabetic ketoacidosis", why: "Nothing shows ketones or acidosis, and ketoacidosis does not explain falling phosphorus after feeding." },
      { text: "Tumor lysis syndrome", why: "Tumor lysis raises phosphorus. Here phosphorus is falling." },
    ],
    actions: [
      { text: "Advance feeding to the goal rate", why: "More calories push more electrolytes into cells and worsen the drop." },
      { text: "Replace phosphate as prescribed", why: "Replacing phosphate corrects the severe fall that threatens muscle and heart." },
      { text: "Hold the prescribed thiamine", why: "Thiamine is needed during refeeding. Holding it raises the risk of deficiency." },
      { text: "Slow the feeding rate as prescribed", why: "Fewer calories slow the shift of electrolytes into cells." },
      { text: "Give a 1 L saline bolus", why: "Nothing shows a fluid deficit, and fast fluid can overload a weak heart." },
    ],
    parameters: [
      { text: "Serum amylase level", why: "Amylase reflects pancreatic injury and does not track refeeding." },
      { text: "Phosphorus every 12 hours", why: "Close checks of phosphorus guide replacement while feeding resumes." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide this problem." },
      { text: "Serum albumin level", why: "Albumin changes slowly and does not track electrolyte shifts." },
      { text: "Continuous heart rhythm", why: "Low phosphorus, potassium and magnesium can cause dysrhythmias." },
    ],
    correct: { condition: 0, actions: [1, 3], parameters: [1, 4] },
  },
  {
    ...meta("rn-s26-39", {
      need: "SIPC",
      topic: "Ranking reports of possible blood exposure",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "Four nurses report possible exposures to the charge nurse at the same time. Each has finished first aid. Which nurse should the charge nurse send for exposure evaluation first?",
      rationale:
        "A deep injury from a hollow-bore needle carries the most blood. A source with HIV makes it a high-risk exposure. HIV prophylaxis works best when it starts as soon as possible, so this nurse goes first. Blood on intact skin is not an exposure. Urine without visible blood does not carry bloodborne risk. A torn glove with unbroken skin gives no entry point.",
      sources: [HIV_PEP, CDC_EXPOSURE],
    }),
    kind: "mc",
    options: [
      { text: "Blood on intact forearm skin, source has hepatitis C", why: "Intact skin is a barrier. This contact is not an exposure." },
      { text: "Deep hollow-bore needlestick, source has HIV", why: "This is a high-risk injury, and prophylaxis is time-sensitive." },
      { text: "Clear urine splashed onto intact cheek skin", why: "Urine without visible blood on intact skin carries no bloodborne risk." },
      { text: "Glove torn by a suture needle, skin not broken", why: "With no break in the skin, there is no route for infection." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s26-40", {
      need: "RRP",
      topic: "Creatinine rise within the reference range",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 36 hours after a hip fracture repair. Serum creatinine was 0.9 mg/dL (80 micromol/L) before surgery and is 1.3 mg/dL (115 micromol/L) now. The laboratory reference range is 0.6 mg/dL (53 micromol/L) to 1.3 mg/dL (115 micromol/L). How should the nurse interpret the change?",
      rationale:
        "Creatinine rose from 0.9 to 1.3 mg/dL within 36 hours. That rise is more than 0.3 mg/dL within 48 hours. It meets the definition of acute kidney injury even though 1.3 mg/dL sits inside the reference range. The trend matters more than a single value. Chronic disease needs months of data. Nothing suggests a hemolyzed sample.",
      refs: ["A rise in serum creatinine of 0.3 mg/dL (27 micromol/L) or more within 48 hours defines acute kidney injury."],
      sources: [KDIGO],
    }),
    kind: "mc",
    options: [
      { text: "Acute kidney injury has developed", why: "A rise of more than 0.3 mg/dL within 48 hours meets the definition." },
      { text: "Kidney function remains normal", why: "A value inside the range can still be a large rise from baseline." },
      { text: "Chronic kidney disease is present", why: "Chronic disease needs abnormal kidney markers over months, not hours." },
      { text: "The sample is likely hemolyzed", why: "Hemolysis mainly falsely raises potassium. Nothing here suggests it." },
    ],
    correct: 0,
  },
];
