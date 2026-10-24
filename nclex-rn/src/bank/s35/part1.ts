import type { Item } from "@/engine/types";
import { FARXIGA, HUMIRA, HYPERGLYCEMIC_2024, LTBI_2020, MOUNJARO, OZEMPIC, REMICADE, VICTOZA, XELJANZ, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s35-01", {
      topic: "Positive TB blood test before a TNF blocker",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 34-year-old client with Crohn disease is scheduled to start adalimumab. The screening interferon gamma release assay is positive. The chest x-ray shows no active disease. The client has no cough, fever or weight loss. What should the nurse expect the plan to include?",
      rationale:
        "A positive interferon gamma release assay with a clear chest x-ray and no symptoms fits latent tuberculosis infection. TNF blockers such as adalimumab can let latent infection reactivate. The label calls for latent infection treatment to begin before the first adalimumab dose. A positive test does not rule out the drug for good. Latent infection is not contagious, so airborne isolation is not needed.",
      sources: [HUMIRA, LTBI_2020],
    }),
    kind: "mc",
    options: [
      { text: "Cancel adalimumab and choose a different class of drug", why: "A positive screen does not rule out adalimumab. The drug can start once latent infection treatment is under way." },
      { text: "Start adalimumab today and repeat the blood test in a year", why: "Starting before latent infection treatment exposes the client to reactivation of tuberculosis." },
      { text: "Start latent tuberculosis treatment before the first dose", why: "Treating latent infection first lowers the risk that the TNF blocker reactivates it." },
      { text: "Place the client in an airborne isolation room for the visit", why: "Latent infection with a clear chest x-ray and no cough is not contagious." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s35-02", {
      topic: "Checks before an infliximab infusion",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 27-year-old client with ulcerative colitis arrives at the infusion center for a scheduled maintenance dose of infliximab. The nurse reviews the intake note. Click to highlight the findings the nurse should report to the primary health care provider before starting the infusion.",
      rationale:
        "Infliximab raises the risk of serious infection and is not given during an active infection. A temperature of 38.4°C with 3 days of cough and yellow sputum suggests one. Live vaccines are not given with infliximab, and yellow fever vaccine is a live vaccine. Fewer stools, a normal BP, a past uneventful infusion and a negative hepatitis B screen do not delay the dose.",
      sources: [REMICADE],
    }),
    kind: "highlight",
    passage:
      "[[Last infusion 8 weeks ago with no reaction]]. [[Two soft stools a day, down from six]]. [[Temperature 38.4°C (101.1°F)]]. [[BP 116/72 mmHg]]. [[Cough with yellow sputum for 3 days]]. [[Hepatitis B surface antigen negative at baseline]]. [[Booked for a yellow fever vaccine next week before travel]].",
    spans: [
      { text: "Last infusion 8 weeks ago with no reaction", why: "An 8-week interval is a usual maintenance schedule, and the last dose went smoothly." },
      { text: "Two soft stools a day, down from six", why: "Fewer stools show the colitis is responding to treatment." },
      { text: "Temperature 38.4°C (101.1°F)", why: "A fever suggests active infection, and infliximab is not given during one." },
      { text: "BP 116/72 mmHg", why: "This BP is within normal limits and does not delay the dose." },
      { text: "Cough with yellow sputum for 3 days", why: "A productive cough with fever points to a respiratory infection that the drug could worsen." },
      { text: "Hepatitis B surface antigen negative at baseline", why: "A negative screen means no hepatitis B carrier state is known." },
      { text: "Booked for a yellow fever vaccine next week before travel", why: "Yellow fever vaccine is live and is not given with infliximab." },
    ],
    correct: [2, 4, 6],
  },
  {
    ...meta("rn-s35-03", {
      topic: "Teaching for an oral JAK inhibitor",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 59-year-old client with rheumatoid arthritis starts tofacitinib 5 mg by mouth twice daily. The client smokes and has hypertension. Which instructions should the nurse include in the teaching? Select all that apply.",
      rationale:
        "Tofacitinib is a JAK inhibitor with boxed warnings for serious infection, blood clots and major cardiac events. Sudden breathlessness, chest pain or a swollen leg can mean a clot, so the client stops the drug and calls right away. Herpes zoster risk is raised. Live vaccines are avoided. Blood counts, liver tests and lipids are checked before and during treatment. A fever with chills is reported, not treated through.",
      sources: [XELJANZ],
    }),
    kind: "sata",
    options: [
      { text: "Take an extra tablet on days with more joint pain", why: "Doses are fixed. Extra tablets raise exposure and the risk of serious adverse effects." },
      { text: "Stop the drug and call for sudden shortness of breath", why: "Sudden breathlessness can signal a pulmonary embolism, a boxed warning of this drug." },
      { text: "Report a painful blistering rash on one side of the body", why: "This describes herpes zoster, which occurs more often with tofacitinib." },
      { text: "Keep taking the drug through a fever with chills", why: "Fever and chills can mean a serious infection. The client calls the provider for prompt review." },
      { text: "Avoid live vaccines while taking this drug", why: "The label advises against live vaccines with tofacitinib." },
      { text: "Expect blood tests before and during treatment", why: "Blood counts, liver enzymes and lipids are monitored on this drug." },
      { text: "Expect some leg swelling as the drug starts working", why: "New leg swelling can mean a deep vein clot and is reported right away." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s35-04", {
      topic: "Blood counts before starting tofacitinib",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 48-year-old client with psoriatic arthritis has a first prescription for tofacitinib 5 mg by mouth twice daily. Baseline results: hemoglobin 9.6 g/dL (96 g/L), absolute neutrophil count 1400 cells/mm3, absolute lymphocyte count 450 cells/mm3, platelets 210 000/mm3. Which result should the nurse report before the client takes the first dose?",
      rationale:
        "The label advises against starting tofacitinib when the lymphocyte count is below 500 cells/mm3. This client's count is 450 cells/mm3. Low lymphocytes raise the risk of serious infection on a JAK inhibitor. The neutrophil count of 1400 cells/mm3 is above the 1000 cells/mm3 limit. The hemoglobin of 9.6 g/dL is above the 9 g/dL limit. The label sets no platelet limit for starting.",
      refs: ["Tofacitinib is not started with a lymphocyte count below 500 cells/mm3, a neutrophil count below 1000 cells/mm3 or a hemoglobin below 9 g/dL (90 g/L)."],
      sources: [XELJANZ],
    }),
    kind: "mc",
    options: [
      { text: "Hemoglobin 9.6 g/dL", why: "The hemoglobin is low but above the 9 g/dL limit for starting the drug." },
      { text: "Neutrophil count 1400 cells/mm3", why: "The count is low but above the 1000 cells/mm3 limit for starting." },
      { text: "Platelets 210 000/mm3", why: "This platelet count is normal and the label sets no platelet limit for starting." },
      { text: "Lymphocyte count 450 cells/mm3", why: "A count below 500 cells/mm3 is below the limit for starting tofacitinib." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-05", {
      topic: "Tirzepatide and oral contraceptive pills",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A 31-year-old client with type 2 diabetes starts tirzepatide 2.5 mg subcutaneously once weekly. The dose is planned to rise after 4 weeks. The client takes a combined oral contraceptive pill and does not want to become pregnant. Which instruction should the nurse give?",
      rationale:
        "Tirzepatide slows gastric emptying, which can lower absorption of oral contraceptives. The effect is largest after the first dose. The label advises a barrier method or a switch to a non-oral method for 4 weeks after starting and for 4 weeks after each dose increase. Contraceptives that are not taken by mouth are not affected. Changing the pill time does not avoid the interaction.",
      sources: [MOUNJARO],
    }),
    kind: "mc",
    options: [
      { text: "Add condoms for 4 weeks after starting and after each dose rise", why: "Slowed gastric emptying can reduce pill absorption, worst after the start and after each increase." },
      { text: "Make no change to the pill, because the new drug is given by injection", why: "The route of tirzepatide does not matter. Its effect on the gut lowers pill absorption." },
      { text: "Use a backup method during the first week only", why: "The label advises 4 weeks of backup after starting and after each dose increase." },
      { text: "Take the pill at bedtime instead of in the morning", why: "A change in pill time does not overcome slowed gastric emptying." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s35-06", {
      topic: "History review before starting liraglutide",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 50-year-old client with type 2 diabetes is about to start liraglutide by daily injection. The nurse completes the intake interview. Which findings should the nurse report to the primary health care provider before the first dose? Select all that apply.",
      rationale:
        "Liraglutide is contraindicated with a personal or family history of medullary thyroid carcinoma. It is also contraindicated after a serious hypersensitivity reaction to liraglutide, such as throat swelling. Pens are never shared between people, even with a new needle, because blood can enter the cartridge. Treated hypothyroidism, metformin use, a past gestational diabetes diagnosis and hay fever are not contraindications.",
      sources: [VICTOZA],
    }),
    kind: "sata",
    options: [
      { text: "Takes levothyroxine daily for hypothyroidism", why: "Treated hypothyroidism is not a contraindication. The thyroid warning concerns medullary carcinoma." },
      { text: "Sister had medullary thyroid cancer", why: "A family history of medullary thyroid carcinoma is a contraindication." },
      { text: "Takes metformin 1000 mg twice daily", why: "Metformin is commonly combined with liraglutide." },
      { text: "Throat swelled on liraglutide in the past", why: "A prior serious hypersensitivity reaction to liraglutide is a contraindication." },
      { text: "Had gestational diabetes in a past pregnancy", why: "Past gestational diabetes is a risk factor for type 2 diabetes, not a contraindication." },
      { text: "Plans to share a spouse's pen", why: "Sharing a pen can spread bloodborne infection, even with a new needle." },
      { text: "Has seasonal hay fever each spring", why: "Seasonal allergy is not a hypersensitivity to liraglutide." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s35-07", {
      topic: "Kidney injury after semaglutide dose increase",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 61-year-old client's semaglutide dose rose from 0.5 mg to 1 mg weekly 9 days ago. The client has had vomiting and diarrhea for 4 days and feels dizzy on standing. The abdomen is soft and nontender, and the neck has no mass. Glucose is 132 mg/dL (7.3 mmol/L). Creatinine is 2.3 mg/dL (203 micromol/L), up from 1.0 mg/dL (88 micromol/L) 3 months ago. Which complication is most likely?",
      rationale:
        "Creatinine has more than doubled from 1.0 to 2.3 mg/dL. Vomiting and diarrhea for 4 days with dizziness on standing point to volume loss. Semaglutide carries a warning for kidney injury from volume depletion, mostly during dose increases. A soft, nontender abdomen argues against pancreatitis. A glucose of 132 mg/dL is not hypoglycemia. No neck mass is found.",
      sources: [OZEMPIC],
    }),
    kind: "mc",
    options: [
      { text: "Acute hemorrhagic pancreatitis", why: "Pancreatitis causes severe abdominal pain that may spread to the back. The abdomen here is soft and nontender." },
      { text: "Drug-induced hypoglycemia", why: "A glucose of 132 mg/dL is not low." },
      { text: "Thyroid C-cell tumor", why: "No neck mass is found, and a tumor would not explain the rise in creatinine." },
      { text: "Kidney injury from volume loss", why: "Fluid loss from vomiting and diarrhea after a dose increase fits the creatinine rise." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s35-08", {
      topic: "Holding an SGLT2 inhibitor before surgery",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 64-year-old client with type 2 diabetes takes dapagliflozin 10 mg by mouth daily. The client is in the preoperative clinic 6 days before an elective knee replacement. Which instruction about dapagliflozin should the nurse give?",
      rationale:
        "SGLT2 inhibitors can cause ketoacidosis with near normal glucose, and surgery with fasting raises the risk. The label advises withholding dapagliflozin for at least 3 days before surgery when possible. The drug restarts when the client is stable and eating again. Stopping on the morning of surgery leaves the drug active. A 2-week hold is longer than needed and leaves glucose uncontrolled.",
      sources: [FARXIGA],
    }),
    kind: "mc",
    options: [
      { text: "Stop it on the morning of surgery", why: "The drug still acts for days, so a same-day stop leaves the ketoacidosis risk in place." },
      { text: "Stop it at least 3 days before surgery", why: "A hold of at least 3 days lowers the risk of ketoacidosis around surgery and fasting." },
      { text: "Keep taking it through the day of surgery", why: "Continuing the drug through fasting and surgery raises the risk of ketoacidosis." },
      { text: "Stop it 2 weeks before surgery", why: "A 2-week hold is longer than the label advises and leaves glucose poorly controlled." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s35-09", {
      topic: "Treating ketoacidosis with near normal glucose",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 55-year-old client with type 2 diabetes who takes empagliflozin is on day 2 after a bowel resection and has had nothing by mouth. The client is nauseated and breathing deeply at 28/minute. Glucose is 186 mg/dL (10.3 mmol/L), pH 7.18, bicarbonate 11 mEq/L (11 mmol/L), beta-hydroxybutyrate 5.8 mmol/L and potassium 4.6 mEq/L (4.6 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A low pH and bicarbonate with high beta-hydroxybutyrate mean ketoacidosis, even with a glucose of 186 mg/dL. An SGLT2 inhibitor and fasting after surgery set it off. The SGLT2 inhibitor is stopped. Insulin is needed to clear the ketones, and dextrose is given with it so glucose does not fall too low. The potassium of 4.6 mEq/L is above 3.5 mEq/L, so insulin can start. Potassium and ketones guide the treatment.",
      refs: ["Insulin is delayed when serum potassium is below 3.5 mEq/L (3.5 mmol/L).", "In ketoacidosis with near normal glucose, 5% to 10% dextrose is added to IV fluids with the insulin."],
      sources: [HYPERGLYCEMIC_2024, FARXIGA],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Hyperosmolar hyperglycemic state", why: "This state has a markedly high glucose with little ketosis. Here glucose is 186 mg/dL and ketones are high." },
      { text: "Euglycemic diabetic ketoacidosis", why: "Acidosis with high ketones and a glucose of 186 mg/dL on an SGLT2 inhibitor fits this." },
      { text: "Starvation ketosis", why: "Fasting ketosis is mild and does not drop the pH to 7.18 or bicarbonate to 11 mEq/L." },
      { text: "Postoperative lactic acidosis", why: "The high beta-hydroxybutyrate points to ketoacidosis, not a lactate cause." },
    ],
    actions: [
      { text: "Hold insulin until glucose rises", why: "Insulin is needed to stop ketone production at any glucose level." },
      { text: "Stop the empagliflozin", why: "The SGLT2 inhibitor drives the ketoacidosis and is stopped on admission." },
      { text: "Give IV sodium bicarbonate now", why: "Bicarbonate is kept for far more severe acidosis than a pH of 7.18." },
      { text: "Run dextrose with the insulin infusion", why: "Dextrose lets insulin clear ketones without driving the glucose too low." },
      { text: "Restrict IV fluids to 50 mL/hour", why: "Ketoacidosis causes volume loss, so fluids are given, not restricted." },
    ],
    parameters: [
      { text: "Hemoglobin A1C level", why: "A1C reflects long-term control and does not guide acute treatment." },
      { text: "Serum potassium", why: "Insulin moves potassium into cells, so the level can fall during treatment." },
      { text: "Serum albumin level", why: "Albumin does not guide ketoacidosis treatment." },
      { text: "Blood ketones", why: "Falling beta-hydroxybutyrate shows the ketoacidosis is resolving." },
      { text: "Prothrombin time", why: "Clotting tests do not guide ketoacidosis treatment." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s35-10", {
      topic: "Evaluating dapagliflozin safety teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a 57-year-old client with type 2 diabetes who starts dapagliflozin 10 mg by mouth daily. Which two statements by the client show understanding of the teaching? Select two.",
      rationale:
        "Dapagliflozin can cause ketoacidosis during illness or poor intake, sometimes with a normal glucose. The drug is held on days the client cannot eat or drink, and the clinic is called. Pain, swelling or redness in the genital or anal area with fever can be Fournier gangrene, which needs urgent care. Cutting fluids worsens volume loss. Ketones can be high at any glucose. Missed doses are not doubled.",
      sources: [FARXIGA],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will drink less water each day so I urinate less often.\"", why: "The drug already causes fluid loss. Drinking less raises the risk of dehydration." },
      { text: "\"I will hold it on sick days when I cannot eat or drink.\"", why: "Poor intake raises the risk of ketoacidosis, so the drug is held and the clinic called." },
      { text: "\"I will check ketones only on days my sugar is high.\"", why: "Ketoacidosis on this drug can occur with a near normal glucose." },
      { text: "\"I will take two tablets the next day if I forget one.\"", why: "A missed dose is taken when remembered, and the next dose is not doubled." },
      { text: "\"I will report pain and swelling near my groin with fever.\"", why: "These signs can mean Fournier gangrene, a rare infection that needs urgent care." },
    ],
    correct: [1, 4],
  },
];
