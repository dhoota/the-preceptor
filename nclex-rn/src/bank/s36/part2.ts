import type { Item } from "@/engine/types";
import { ACID_BASE, BC_RENAL_VEIN, CACL, FUROSEMIDE, INS, INTRALIPID, LANOXIN, MAGIC, NATRIURETIC, ONDANSETRON, PHENYTOIN, SSC_2026, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s36-11", {
      need: "PPT",
      topic: "Running a separate lipid emulsion bag",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a central venous catheter receives parenteral nutrition as a dextrose and amino acid solution. A separate bag of 20% lipid injectable emulsion, 250 mL, is prescribed to run by its own pump through a Y-connector near the catheter. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Lipid droplets are too large to pass a 0.2 micron filter, so the lipid line uses a 1.2 micron filter. A lipid bag run through a Y-connector is finished within 12 hours of starting. The emulsion contains egg phospholipid and soybean oil, and the label lists egg, soybean and peanut allergy as contraindications. A baseline triglyceride level guides the dose. The bag is never pressurized, and other drugs are not piggybacked into the lipid line.",
      sources: [INTRALIPID, INS],
    }),
    kind: "sata",
    options: [
      { text: "Use a 0.2 micron filter on the lipid line", why: "A 0.2 micron filter traps lipid droplets and blocks the flow." },
      { text: "Use a 1.2 micron filter on the lipid line", why: "A 1.2 micron filter passes lipid droplets and removes larger particles." },
      { text: "Ask about egg, soybean or peanut allergy", why: "The emulsion is made with egg phospholipid and soybean oil, and these allergies are contraindications." },
      { text: "Pressurize the bag if the flow slows", why: "The label warns against pressurizing the bag to raise the flow rate." },
      { text: "Finish the lipid within 12 hours of starting", why: "A lipid bag given through a Y-connector is completed within 12 hours." },
      { text: "Piggyback the IV antibiotic into the lipid line", why: "The lipid line is not shared with other drugs because of instability and contamination risk." },
      { text: "Check a baseline serum triglyceride level", why: "The label calls for a baseline triglyceride level before lipid starts." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s36-12", {
      need: "RRP",
      topic: "Natriuretic peptide in severe obesity",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 52-year-old client with a body mass index of 46 has had 3 weeks of breathlessness on exertion, orthopnea and ankle swelling. Crackles are heard at both lung bases. The BNP is 82 pg/mL. The laboratory report states that a BNP below 100 pg/mL makes heart failure less likely. Which interpretation should guide the nurse's next step?",
      rationale:
        "Natriuretic peptide levels run lower in people with obesity, by about half. A BNP of 82 pg/mL therefore does not rule out heart failure in a client with a body mass index of 46. Orthopnea, ankle swelling and crackles at both bases point toward heart failure. The nurse reports the findings so the team can pursue imaging of the heart. The result needs to be read with the clinical picture, not alone.",
      sources: [NATRIURETIC],
    }),
    kind: "mc",
    options: [
      { text: "Obesity lowers BNP, so heart failure is still possible", why: "Natriuretic peptides run lower in obesity, and the findings point toward heart failure." },
      { text: "The result rules out heart failure as the cause", why: "A value below the usual cutoff does not exclude heart failure in severe obesity." },
      { text: "The BNP shows that the symptoms come from a lung problem", why: "BNP does not identify a lung cause. Orthopnea and edema point to the heart." },
      { text: "The BNP should be repeated after a diuretic dose", why: "A diuretic would lower the BNP further and does not clarify the diagnosis." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s36-13", {
      need: "PPT",
      topic: "Saving arm veins when choosing an IV device",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      version: 2,
      stem: "A 71-year-old client with chronic kidney disease has an eGFR of 22 mL/minute/1.73 m2 and is expected to start hemodialysis within the year. The client needs 6 weeks of IV cefazolin at home for osteomyelitis. The team asks the nurse which venous access device to request. Which device should the nurse recommend?",
      rationale:
        "An eGFR of 22 places the client in stage 4 kidney disease with dialysis expected. The arm veins must be saved for a future fistula. Peripherally inserted central catheters and midlines can cause thrombosis and narrowing of the arm veins. For 6 weeks of therapy in advanced kidney disease, guidance favors a small-bore tunneled central catheter placed through the jugular vein. Repeated short peripheral catheters also damage arm veins.",
      sources: [BC_RENAL_VEIN, MAGIC],
    }),
    kind: "mc",
    options: [
      { text: "A peripherally inserted central catheter", why: "A PICC can scar and narrow the arm veins needed for a future fistula." },
      { text: "A midline catheter in the upper arm", why: "A midline also uses the arm veins that must be saved for dialysis access." },
      { text: "Short peripheral catheters replaced every few days", why: "Repeated peripheral catheters over 6 weeks damage the veins needed for a fistula." },
      { text: "A tunneled central catheter in the jugular vein", why: "A small-bore tunneled jugular catheter avoids the arm veins and suits weeks of therapy." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s36-14", {
      need: "RRP",
      topic: "Expected PaCO2 in ketoacidosis with pneumonia",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 34-year-old client with type 1 diabetes and pneumonia is in diabetic ketoacidosis. Arterial blood gas results are pH 7.08, PaCO2 38 mmHg and HCO3 11 mEq/L (11 mmol/L). The expected PaCO2 in a metabolic acidosis is 1.5 times the HCO3 plus 8, plus or minus 2. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "For an HCO3 of 11 mEq/L, the expected PaCO2 is 24.5 mmHg, with a range of 22.5 to 26.5 mmHg. The measured PaCO2 of 38 mmHg is above that range. The lungs are not removing enough carbon dioxide, so a respiratory acidosis is added to the metabolic acidosis. A PaCO2 that looks normal can hide tiring breathing in pneumonia. The nurse reports it at once because ventilatory failure may follow.",
      calc: { expr: "1.5 * 11 + 8", answer: 24.5, unit: "mmHg", round: 1, steps: ["1.5 * 11 = 16.5", "16.5 + 8 = 24.5", "24.5 - 2 = 22.5", "24.5 + 2 = 26.5"] },
      sources: [ACID_BASE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The measured PaCO2 is {0} the expected range, which shows {1}.",
    blanks: [
      {
        options: [
          { text: "above", why: "38 mmHg is higher than the expected 22.5 to 26.5 mmHg." },
          { text: "within", why: "The expected range is 22.5 to 26.5 mmHg, and 38 mmHg lies outside it." },
          { text: "below", why: "38 mmHg is higher than the expected range, not lower." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "an added respiratory acidosis", why: "A PaCO2 higher than expected means the lungs are retaining carbon dioxide." },
          { text: "appropriate respiratory compensation", why: "Appropriate compensation would bring the PaCO2 into the 22.5 to 26.5 mmHg range." },
          { text: "an added respiratory alkalosis", why: "An added alkalosis would push the PaCO2 below the expected range." },
          { text: "a primary metabolic alkalosis", why: "The HCO3 of 11 mEq/L and pH of 7.08 show acidosis, not alkalosis." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s36-15", {
      need: "PPT",
      topic: "Infusions suited to a midline catheter",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has a 20 cm midline catheter in the right upper arm, placed yesterday. Several new prescriptions arrive. Which infusions can the nurse give through this catheter? Select all that apply.",
      rationale:
        "A midline tip sits in a peripheral vein of the upper arm, not in a central vein. It suits peripherally compatible infusions such as cefazolin, ceftriaxone and isotonic fluids. Infusion standards advise against continuous vesicant infusions and parenteral nutrition through a midline. Solutions above 900 mOsm/L need a central venous access device.",
      refs: ["Infusates with an osmolarity above 900 mOsm/L need a central venous access device."],
      sources: [INS, MAGIC],
    }),
    kind: "sata",
    options: [
      { text: "Cefazolin 2 g every 8 hours", why: "Cefazolin is peripherally compatible and suits a midline." },
      { text: "Parenteral nutrition at 1400 mOsm/L", why: "An osmolarity of 1400 mOsm/L is above 900 mOsm/L and needs a central vein." },
      { text: "Ceftriaxone 1 g every 24 hours", why: "Ceftriaxone is peripherally compatible and suits a midline." },
      { text: "Continuous norepinephrine infusion", why: "A continuous vesicant infusion is not given through a midline." },
      { text: "0.9% sodium chloride at 75 mL/hour", why: "An isotonic fluid is suitable for a peripheral vein." },
      { text: "Doxorubicin infusion over 96 hours", why: "A continuous vesicant chemotherapy infusion needs a central venous access device." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s36-16", {
      need: "RRP",
      topic: "Procalcitonin fall during pneumonia treatment",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      version: 2,
      stem: "A 66-year-old client with community-acquired pneumonia and sepsis is on day 5 of IV ceftriaxone and azithromycin. The client has had no fever for 48 hours, eats well and is on room air. Procalcitonin was 6.2 ng/mL on admission and is 0.4 ng/mL today. The unit uses procalcitonin with clinical assessment to guide antibiotic length. Which conclusion is supported?",
      rationale:
        "Procalcitonin rises in bacterial infection and falls as the infection is controlled. A drop from 6.2 to 0.4 ng/mL, together with no fever for 48 hours, normal eating and room air, shows the infection is responding. Sepsis guidance supports using procalcitonin with clinical assessment to decide when to stop antibiotics. Stopping is a provider decision that the nurse can prompt with these data.",
      sources: [SSC_2026],
    }),
    kind: "mc",
    options: [
      { text: "The low level shows the pneumonia was viral", why: "The admission level of 6.2 ng/mL points to a bacterial infection. The fall shows response to treatment." },
      { text: "Treatment is working, and a shorter course is supported", why: "A steep fall in procalcitonin with clinical recovery supports a shorter course." },
      { text: "The antibiotics should be broadened to cover resistant bacteria", why: "The client is improving, so there is no sign of resistant infection." },
      { text: "Blood cultures should be repeated before any change", why: "Repeat cultures are not needed in a client who is recovering without fever." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s36-17", {
      need: "PPT",
      topic: "Pacing an IV push of furosemide",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The prescription is furosemide 40 mg IV push for a client with heart failure. The vial contains furosemide 10 mg/mL. The nurse plans to push the dose evenly over 2 minutes, giving a portion every 15 seconds. How many mL should the nurse give in each portion?",
      rationale:
        "The dose of 40 mg at 10 mg/mL is 4 mL. Two minutes hold eight portions of 15 seconds. 4 mL divided by 8 portions is 0.5 mL each. The label advises giving IV furosemide slowly over 1 to 2 minutes. Ototoxicity has been linked to rapid injection.",
      calc: { expr: "40 / 10 / (2 * 60 / 15)", answer: 0.5, unit: "mL", round: 1, steps: ["40 / 10 = 4", "2 * 60 / 15 = 8", "4 / 8 = 0.5"] },
      sources: [FUROSEMIDE],
    }),
    kind: "mc",
    options: [
      { text: "0.25 mL", why: "At this pace the 4 mL dose would take 4 minutes, twice the planned time." },
      { text: "0.5 mL", why: "4 mL spread over 8 portions is 0.5 mL each." },
      { text: "1 mL", why: "At this pace the dose would be pushed in half the planned time." },
      { text: "2 mL", why: "This pushes the dose four times faster than planned." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s36-18", {
      need: "RRP",
      topic: "Phenytoin level with low albumin",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 78-year-old client with a seizure disorder takes phenytoin by mouth. The client is malnourished, with a serum albumin of 2.1 g/dL (21 g/L). Creatinine is normal. The client has new nystagmus and an unsteady gait. The total phenytoin level is 9 mcg/mL (36 micromol/L), and the laboratory therapeutic range is 10 to 20 mcg/mL (40 to 79 micromol/L). Which action should the nurse take?",
      rationale:
        "Phenytoin is highly bound to albumin. With an albumin of 2.1 g/dL, more of the drug circulates unbound and active, even when the total level of 9 mcg/mL looks low. New nystagmus and an unsteady gait are signs of toxicity. The label advises measuring unbound phenytoin in hypoalbuminemia. The nurse reports the signs and requests an unbound level before any dose increase.",
      sources: [PHENYTOIN],
    }),
    kind: "mc",
    options: [
      { text: "Request a dose increase for the low level", why: "Raising the dose could worsen toxicity that the low total level hides." },
      { text: "Reassure the client that toxicity is ruled out", why: "A total level does not rule out toxicity when albumin is low." },
      { text: "Request an unbound phenytoin level", why: "The unbound level shows the active drug when albumin is low." },
      { text: "Give the next dose and recheck in 1 week", why: "Nystagmus and ataxia need prompt follow-up, not a week of further doses." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s36-19", {
      need: "PPT",
      topic: "Label push rates for three IV drugs",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews IV push medications due on a medical unit for clients who are not in cardiac arrest. Which three administration rates are consistent with the product labels? Select three.",
      rationale:
        "Digoxin IV is given over 5 minutes or longer to prevent systemic and coronary vasoconstriction. Ondansetron IV is given over at least 30 seconds, so 2 minutes is within label. Calcium chloride 10% runs no faster than 1 mL/minute, so 5 mL over 5 minutes meets that limit. A 30-second digoxin push, a 10-second ondansetron push and 10 mL of calcium chloride in 2 minutes are all too fast.",
      refs: [
        "Digoxin IV is given over 5 minutes or longer.",
        "Ondansetron IV is given over at least 30 seconds.",
        "Calcium chloride 10% is given no faster than 1 mL/minute outside cardiac arrest.",
      ],
      sources: [LANOXIN, ONDANSETRON, CACL],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Digoxin 0.25 mg pushed over 30 seconds", why: "Digoxin is given over 5 minutes or longer. A fast push can cause vasoconstriction." },
      { text: "Ondansetron 4 mg pushed over 2 minutes", why: "This is longer than the 30 seconds the label sets as a minimum." },
      { text: "Calcium chloride 10%, 10 mL over 2 minutes", why: "This runs at 5 mL/minute, five times the 1 mL/minute limit." },
      { text: "Digoxin 0.25 mg pushed over 5 minutes", why: "A 5-minute push meets the label rate for IV digoxin." },
      { text: "Ondansetron 4 mg pushed over 10 seconds", why: "This is faster than the 30-second minimum in the label." },
      { text: "Calcium chloride 10%, 5 mL over 5 minutes", why: "This runs at 1 mL/minute, the label maximum." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s36-20", {
      need: "RRP",
      topic: "Earliest valid time for a digoxin level",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with atrial fibrillation received digoxin 0.125 mg by mouth at 0900. At 1000 the client reports nausea, and the primary health care provider prescribes a serum digoxin level today. At what time is the earliest valid sample drawn?",
      rationale:
        "Digoxin moves slowly from the blood into the tissues after each dose. A sample drawn too soon after a dose reads falsely high. The label advises drawing the level at least 6 hours after the last dose or just before the next dose. The dose was given at 0900, so 1500 is the earliest valid time. Earlier samples would overstate the level.",
      refs: ["Digoxin levels are drawn at least 6 hours after the last dose or just before the next dose."],
      sources: [LANOXIN],
    }),
    kind: "mc",
    options: [
      { text: "0930", why: "Half an hour after the dose the drug is still distributing, so the level reads falsely high." },
      { text: "1100", why: "Two hours after the dose is still within the distribution phase." },
      { text: "1300", why: "Four hours after the dose is still too early for a valid level." },
      { text: "1500", why: "This is 6 hours after the 0900 dose, the earliest valid sampling time." },
    ],
    correct: 3,
  },
];
