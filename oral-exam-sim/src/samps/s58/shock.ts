// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const TOPIC = "shock";

const S = {
  mcgee: { id: "mcgee-1999", citation: "McGee S, Abernethy WB, Simel DL. The rational clinical examination. Is this patient hypovolemic? JAMA. 1999.", url: "https://doi.org/10.1001/jama.281.11.1022" },
  dcHyper: { id: "dc-hyperglycemic-2018", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018.", url: "https://doi.org/10.1016/j.jcjd.2017.10.013" },
  jbds: { id: "jbds-hhs-2023", citation: "Mustafa OG, Haq M, Dashora U, Castro E, Dhatariya KK, Joint British Diabetes Societies for Inpatient Care Group. Management of hyperosmolar hyperglycaemic state (HHS) in adults: an updated guideline from the Joint British Diabetes Societies for Inpatient Care Group. Diabet Med. 2023.", url: "https://doi.org/10.1111/dme.15005" },
  steiner: { id: "steiner-2004", citation: "Steiner MJ, DeWalt DA, Byerley JS. Is this child dehydrated? JAMA. 2004.", url: "https://doi.org/10.1001/jama.291.22.2746" },
  cpsBronch: { id: "cps-bronchiolitis", citation: "Friedman JN, Rieder MJ, Walton JM, Canadian Paediatric Society Acute Care Committee. Bronchiolitis: recommendations for diagnosis, monitoring and management of children one to 24 months of age. Canadian Paediatric Society position statement. 2014, updated 2021.", url: "https://cps.ca/en/documents/position/bronchiolitis" },
  gorelick: { id: "gorelick-1993", citation: "Gorelick MH, Shaw KN, Baker MD. Effect of ambient temperature on capillary refill in healthy children. Pediatrics. 1993.", url: "https://doi.org/10.1542/peds.92.5.699" },
  lichtenstein: { id: "lichtenstein-2009", citation: "Lichtenstein D, Mezière G, Seitz J. The dynamic air bronchogram. A lung ultrasound sign of alveolar consolidation ruling out atelectasis. Chest. 2009.", url: "https://doi.org/10.1378/chest.08-2281" },
  metlay: { id: "ats-idsa-cap-2019", citation: "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019.", url: "https://doi.org/10.1164/rccm.201908-1581ST" },
  ssc: { id: "ssc-2026", citation: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.", url: "https://doi.org/10.1097/CCM.0000000000007075" },
  andromeda: { id: "andromeda-shock-2019", citation: "Hernández G, Ospina-Tascón GA, Damiani LP, et al. Effect of a resuscitation strategy targeting peripheral perfusion status vs serum lactate levels on 28-day mortality among patients with septic shock: the ANDROMEDA-SHOCK randomized clinical trial. JAMA. 2019.", url: "https://doi.org/10.1001/jama.2019.0071" },
  enets: { id: "enets-cs-2022", citation: "Grozinsky-Glasberg S, Davar J, Hofland J, et al. European Neuroendocrine Tumor Society (ENETS) 2022 guidance paper for carcinoid syndrome and carcinoid heart disease. J Neuroendocrinol. 2022.", url: "https://doi.org/10.1111/jne.13146" },
  marwah: { id: "marwah-korbet-1996", citation: "Marwah DS, Korbet SM. Timing of complications in percutaneous renal biopsy: what is the optimal period of observation? Am J Kidney Dis. 1996.", url: "https://doi.org/10.1016/s0272-6386(96)90129-8" },
  kdigo: { id: "kdigo-anemia-2026", citation: "Kidney Disease: Improving Global Outcomes (KDIGO) Anemia Work Group. KDIGO 2026 clinical practice guideline for the management of anemia in chronic kidney disease (CKD). Kidney Int. 2026.", url: "https://doi.org/10.1016/j.kint.2025.06.006" },
  hedges: { id: "hedges-2007", citation: "Hedges SJ, Dehoney SB, Hooper JS, Amanzadeh J, Busti AJ. Evidence-based treatment recommendations for uremic bleeding. Nat Clin Pract Nephrol. 2007.", url: "https://doi.org/10.1038/ncpneph0421" },
  euroTrauma: { id: "euro-trauma-2023", citation: "Rossaint R, Afshari A, Bouillon B, et al. The European guideline on management of major bleeding and coagulopathy following trauma: sixth edition. Crit Care. 2023.", url: "https://doi.org/10.1186/s13054-023-04327-7" },
} satisfies Record<string, Source>;

export const SHOCK_S58: Samp[] = [
  /* 48 ------------------------------------------------------------------ */
  {
    id: "shock-48",
    topic: TOPIC,
    title: "Thirsty and confused after a cold",
    stem:
      "You are working in a community hospital emergency department. An 84-year-old woman is brought to the emergency department by her son with 4 days of increasing thirst, frequent urination and confusion. She lives alone and has eaten and drunk little since a cold last week. She has type 2 diabetes, hypertension and heart failure with preserved ejection fraction, and takes metformin, metoprolol and ramipril. Her family physician's notes record a usual systolic pressure of about 160 mmHg. She is drowsy but rousable. Her axillae are dry, skin turgor over the forearm is poor and capillary refill is 3 seconds. Her lungs are clear. Glucose is 46 mmol/L, sodium 146 mmol/L, potassium 4.6 mmol/L, urea 24 mmol/L, creatinine 168 umol/L, pH 7.34, bicarbonate 22 mmol/L and beta-hydroxybutyrate 0.6 mmol/L. Her weight is taken from a clinic visit last month.",
    vitals: { temperature: "37.2°C oral", pulse: "82/minute", resp: "22/minute", bp: "108/60 mmHg", o2sat: "95% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following examination findings most supports volume depletion in an older adult like her?",
        options: [
          "Dry skin in the axillae",
          "Lungs clear on auscultation",
          "Mild confusion on questioning",
          "Poor skin turgor on the forearm",
          "Slow capillary refill of 3 seconds",
        ],
        correct: 0,
        explanation:
          "In adults with vomiting, diarrhea or poor intake, a dry axilla supports hypovolemia with a positive likelihood ratio of 2.8. Skin turgor and capillary refill time have no proven value for hypovolemia in adults, and turgor is especially unreliable in older skin. Clear lungs tell you that fluid is not yet causing edema but say nothing about the size of her deficit. Her confusion reflects hyperosmolality as much as volume loss.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "mcgee-1999",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the best estimate of her total water deficit in this hyperglycemic state?",
        options: ["0.5 to 1 L", "1 to 2 L", "2 to 4 L", "5.5 to 11 L", "15 to 20 L"],
        correct: 3,
        explanation:
          "Her calculated osmolality is 2 x 146 + 46 + 24 = 362 mmol/kg, and her effective osmolality without urea is 2 x 146 + 46 = 338 mmol/kg, with little ketosis, which is the hyperosmolar hyperglycemic state. Diabetes Canada estimates water losses in HHS at 100 to 200 mL/kg, compared with about 100 mL/kg in DKA. At 55 kg that is 5.5 to 11 L. Estimates of 4 L or less badly understate the loss, and 15 to 20 L would mean more than 270 mL/kg. Her age and heart failure mean the deficit is replaced in measured steps with frequent reassessment, not that it is smaller.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "dc-hyperglycemic-2018",
      },
      {
        id: "q3",
        kind: "single",
        update: "She has received 1 L of 0.9% sodium chloride over the first hour, and her blood pressure is now 118/66 mmHg.",
        prompt: "Which of the following is the most appropriate timeline for replacing the rest of her estimated fluid deficit?",
        options: [
          "All of it within the next 2 hours",
          "All of it within the next 6 hours",
          "Evenly over the next 72 hours",
          "Half over 12 hours, the rest over 12 hours",
          "Only maintenance fluid from now on",
        ],
        correct: 3,
        explanation:
          "The Joint British Diabetes Societies guideline advises replacing about half of the estimated fluid loss in the first 12 hours and the rest over the following 12 hours, with caution in older adults and in heart failure. With a deficit of 5.5 to 11 L, that pace restores her circulation while letting osmolality fall gradually. Giving the whole deficit within 2 or 6 hours risks pulmonary edema with her heart failure and too fast a fall in osmolality. Spreading it over 72 hours leaves her dry and hyperosmolar for days. Maintenance fluid alone would never replace a deficit this large.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "jbds-hhs-2023",
      },
      {
        id: "q4",
        kind: "single",
        update: "Three hours after arrival she has received 2 L of 0.9% sodium chloride and passed 650 mL of urine. Her glucose is 34 mmol/L, pulse 84/minute and BP 112/62 mmHg. Her nurse suggests she is no longer dry.",
        prompt: "Which of the following best explains why her urine output does not show that her deficit is corrected?",
        options: [
          "Beta-blockade slowing her heart rate",
          "Glucose in the urine pulling water with it",
          "Ramipril lowering her kidney blood flow",
          "Recovery of her acute kidney injury",
          "Stiff ventricle from heart failure",
        ],
        correct: 1,
        explanation:
          "Her glucose of 34 mmol/L is still far above the level the kidney can reabsorb, so glucose spilling into the urine carries water and sodium with it. This osmotic diuresis keeps urine flowing in an older adult who is still several litres short, since she has had 2 L against a deficit of 5.5 to 11 L. A brisk output in marked hyperglycemia therefore does not prove that her circulating volume is restored. Beta-blockade and a stiff ventricle affect heart rate and filling, not urine flow. Ramipril would lower rather than raise her output, and kidney recovery does not explain a large output while she is still depleted.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "dc-hyperglycemic-2018",
      },
    ],
    sources: [S.mcgee, S.dcHyper, S.jbds],
    ...META,
  },

  /* 49 ------------------------------------------------------------------ */
  {
    id: "shock-49",
    topic: TOPIC,
    title: "Wheezy infant who is feeding less",
    stem:
      "A 5-month-old girl is brought to the emergency department by her father with 4 days of cough, runny nose and noisy breathing. For 2 days she has taken less than half of her usual breastfeeds, and she has had 2 wet diapers in the last 24 hours. She was born at term and has been well. She is tired but alert. Her anterior fontanelle is slightly sunken and her lips are dry. Her capillary refill is 3 seconds and her skin turgor is normal. She has subcostal retractions, with fine crackles and wheeze in both lungs. You estimate that she is about 6% dehydrated.",
    vitals: { temperature: "37.8°C rectal", pulse: "168/minute", resp: "58/minute", o2sat: "94% on room air", weight: "6.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings in her is the most useful single sign of at least 5% dehydration?",
        options: [
          "Capillary refill of 3 seconds",
          "Fewer wet diapers than usual",
          "Fine crackles in both lungs",
          "Slightly sunken fontanelle",
          "Subcostal retractions",
        ],
        correct: 0,
        explanation:
          "A prolonged capillary refill is the most useful single sign of 5% dehydration in young children, with a likelihood ratio of about 4.1. Abnormal skin turgor and an abnormal breathing pattern come next, but her retractions and crackles come from bronchiolitis rather than from acidosis. Historical points such as fewer wet diapers, and a sunken fontanelle, are less reliable on their own. Combinations of signs predict dehydration better than any single finding.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "steiner-2004",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the best estimate of her fluid deficit at about 6% dehydration?",
        options: ["40 mL", "400 mL", "600 mL", "800 mL", "1 000 mL"],
        correct: 1,
        explanation:
          "A deficit of 6% of body weight is 60 mL/kg, and 60 x 6.6 kg is about 400 mL. A deficit of 40 mL misplaces the decimal point. Deficits of 600, 800 and 1 000 mL would be about 9%, 12% and 15% of her weight, levels that go with severe dehydration and shock rather than the signs she has now. Her weight should be measured on arrival because the deficit, the maintenance rate and later reassessment all depend on it.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "steiner-2004",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is now too breathless to feed safely and did not tolerate a nasogastric tube. The team decides on IV fluids.",
        prompt: "Which of the following IV fluids is most appropriate for her ongoing hydration?",
        options: [
          "albumin 5% solution",
          "dextrose 10% in water",
          "dextrose 5% with 0.2% sodium chloride",
          "dextrose 5% with 0.45% sodium chloride",
          "dextrose 5% with 0.9% sodium chloride",
        ],
        correct: 4,
        explanation:
          "When an infant with bronchiolitis needs IV hydration, the Canadian Paediatric Society prefers isotonic fluid, 0.9% sodium chloride with 5% dextrose, with regular checks of serum sodium because hyponatremia is a risk. Solutions with 0.2% or 0.45% sodium chloride are hypotonic and raise that risk. Dextrose 10% in water contains no sodium at all. Albumin is a colloid for specific indications and is not a hydration fluid.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "cps-bronchiolitis",
      },
      {
        id: "q4",
        kind: "single",
        update: "While she waits for IV access she lies undressed for 30 minutes in a cool examination room. Her hands and feet are now cold and her fingertip refill is 5 seconds. She is alert and her pulse is 166/minute.",
        prompt: "Which of the following is the most appropriate response to her new refill time?",
        options: [
          "Give a 20 mL/kg bolus now",
          "Insert an intraosseous needle",
          "Recheck refill on her toes",
          "Rewarm her and repeat the test",
          "Send a blood gas for lactate",
        ],
        correct: 3,
        explanation:
          "Her refill time lengthened while she lay undressed in a cool room, but she is still alert and her pulse of 166/minute is no faster than on arrival. In healthy, well-hydrated children, a room only about 6°C cooler prolonged fingertip refill to an average of 2.4 seconds, compared with 0.9 seconds in a warm room, and only 31% had a normal refill when cool. Rewarming her and repeating the test shows whether her perfusion has really changed. Her toes are just as cold and give the same false result. A bolus or an intraosseous needle would treat a measurement error, and a lactate does not settle the question. She still needs her planned IV fluids.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "gorelick-1993",
      },
    ],
    sources: [S.steiner, S.cpsBronch, S.gorelick],
    ...META,
  },

  /* 50 ------------------------------------------------------------------ */
  {
    id: "shock-50",
    topic: TOPIC,
    title: "Cough, fever and new confusion",
    stem:
      "A 78-year-old man is brought to the emergency department by ambulance with 2 days of cough, fever and shortness of breath, and new confusion today. He has hypertension and bronchiectasis and takes amlodipine. A sputum culture 4 months ago grew Pseudomonas aeruginosa. He has not been in hospital or had IV antibiotics in the past year, and MRSA has never been found. He is drowsy but rousable. His knees are mottled and his capillary refill is 5 seconds. Bronchial breath sounds are heard at the right base. Lactate is 5.2 mmol/L. Blood cultures have been drawn and a balanced crystalloid bolus is running.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "30/minute", bp: "84/46 mmHg", o2sat: "90% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following lung ultrasound findings at the right base most supports pneumonia as his source?",
        options: [
          "A lines with lung sliding",
          "Diffuse bilateral B lines",
          "Dynamic air bronchograms",
          "Lung point at the right apex",
          "Small simple pleural effusion",
        ],
        correct: 2,
        explanation:
          "Consolidation containing air bronchograms that move with breathing is a lung ultrasound sign of pneumonia. In the original study it had a specificity of 94% for pneumonia over resorptive atelectasis. A lines with lung sliding are seen over normal aerated lung. Diffuse bilateral B lines point to pulmonary edema or diffuse interstitial disease. A lung point means pneumothorax. A small simple effusion is nonspecific and does not show where the infection is.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "lichtenstein-2009",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following antibiotics is most appropriate to cover his likely pathogens, alongside azithromycin?",
        options: [
          "amoxicillin-clavulanate PO",
          "ampicillin-sulbactam IV",
          "ceftriaxone IV",
          "moxifloxacin IV",
          "piperacillin-tazobactam IV",
        ],
        correct: 4,
        explanation:
          "A sputum culture that grew Pseudomonas aeruginosa places him in the group for whom the ATS/IDSA guideline advises adding antipseudomonal cover in severe pneumonia, with cultures sent so treatment can later be narrowed. Piperacillin-tazobactam covers Pseudomonas as well as the usual typical organisms, and azithromycin covers the atypical ones. Ceftriaxone and ampicillin-sulbactam are standard partners for azithromycin but do not treat Pseudomonas. Moxifloxacin has no reliable antipseudomonal activity. An oral agent is not appropriate for a man in septic shock.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "ats-idsa-cap-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "His first beta-lactam dose ran IV over 30 minutes within the first hour.",
        prompt: "Which of the following is the most appropriate way to give his next beta-lactam doses?",
        options: [
          "Each dose as an IV push",
          "Each dose IV over 4 hours",
          "Each dose IV over 30 minutes",
          "Half doses IV over 30 minutes",
          "One daily dose IV over 30 minutes",
        ],
        correct: 1,
        explanation:
          "After a loading dose, the 2026 Surviving Sepsis guideline strongly recommends giving beta-lactams by prolonged infusion rather than as short bolus doses. Beta-lactams kill bacteria best when the drug level stays above the minimum inhibitory concentration for most of the dosing interval, which an infusion over about 4 hours achieves. A 30 minute infusion or an IV push gives a high peak followed by long periods below that level. Halving each dose or giving one dose a day lowers drug exposure in a man with septic shock.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "ssc-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "After 30 mL/kg, about 2.2 L, of crystalloid his MAP was 58 mmHg. Norepinephrine was started through a large peripheral IV. His MAP is now 64 mmHg, his sinus rate is 126/minute and bedside echo shows a vigorous left ventricle.",
        prompt: "Which of the following is the most appropriate change to his vasoactive treatment now?",
        options: [
          "Add an esmolol infusion",
          "Continue norepinephrine alone",
          "Switch to a dopamine infusion",
          "Switch to a phenylephrine infusion",
          "Switch to an epinephrine infusion",
        ],
        correct: 1,
        explanation:
          "His MAP of 64 mmHg is within the initial range of 60 to 65 mmHg that the 2026 Surviving Sepsis guideline suggests for adults aged 65 or older, so norepinephrine, the recommended first-line agent, is doing its job. His sinus tachycardia is a response to sepsis and fever, and the guideline suggests against beta-blockers such as esmolol in septic shock. Epinephrine would drive his heart rate higher, and with a vigorous left ventricle he needs no inotrope. Dopamine is recommended against because it causes more arrhythmias. Phenylephrine is not among the recommended agents.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "ssc-2026",
      },
      {
        id: "q5",
        kind: "single",
        update: "Three hours later his MAP is 67 mmHg. His capillary refill is 2 seconds and the mottling has gone, but his lactate is 3.9 mmol/L.",
        prompt: "Which of the following is the most appropriate next step in his resuscitation at this point?",
        options: [
          "Add dobutamine to raise cardiac output",
          "Continue boluses until lactate is normal",
          "Give albumin to clear the lactate",
          "Start bicarbonate to lower lactate",
          "Stop further boluses and reassess",
        ],
        correct: 4,
        explanation:
          "His capillary refill has returned to normal and the mottling has cleared, so peripheral perfusion is restored. In ANDROMEDA-SHOCK, targeting a normal capillary refill time did not raise mortality compared with targeting lactate and was linked to less organ dysfunction at 72 hours. Lactate falls more slowly than perfusion recovers, and chasing it with more boluses risks fluid overload. The 2026 Surviving Sepsis guideline also advises individualizing fluid rather than continuing it until lactate is normal. Dobutamine is for low cardiac output with ongoing hypoperfusion, which he no longer has. Albumin and bicarbonate do not treat a slowly falling lactate.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "andromeda-shock-2019",
      },
    ],
    sources: [S.lichtenstein, S.metlay, S.ssc, S.andromeda],
    ...META,
  },

  /* 51 ------------------------------------------------------------------ */
  {
    id: "shock-51",
    topic: TOPIC,
    title: "Flushed and faint after a liver procedure",
    stem:
      "A 61-year-old woman is brought to the emergency department by ambulance with 90 minutes of flushing, watery diarrhea, wheeze and light-headedness. She has a small bowel neuroendocrine tumour with liver metastases and carcinoid syndrome, treated with lanreotide injections every 4 weeks. Yesterday she had embolization of her liver metastases through the hepatic artery and went home this morning. Paramedics gave epinephrine 0.5 mg IM for suspected anaphylaxis, and her flushing and dizziness became worse. She has no known allergies. She is anxious, with deep red flushing of her face and upper chest. There are no hives and no swelling of her lips or tongue. She has diffuse expiratory wheeze. Her hands are warm. The abdomen is soft with mild right upper quadrant tenderness. Hemoglobin is 126 g/L, the same as yesterday.",
    vitals: { temperature: "37.4°C oral", pulse: "128/minute", resp: "26/minute", bp: "76/40 mmHg", o2sat: "93% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her shock?",
        options: [
          "Anaphylaxis to the contrast dye",
          "Bleeding from a liver metastasis",
          "Carcinoid crisis",
          "Septic shock from a liver abscess",
          "Vasovagal reaction to pain",
        ],
        correct: 2,
        explanation:
          "Flushing, diarrhea, wheeze and hypotension the day after hepatic embolization in a woman with carcinoid syndrome point to carcinoid crisis, a distributive shock from a sudden release of vasoactive hormones by the tumour. Embolization and sympathomimetic drugs are recognized triggers, and her worsening after epinephrine fits. Anaphylaxis to contrast begins within minutes of exposure, not a day later, and she has no hives or swelling. Her warm hands and unchanged hemoglobin argue against bleeding. An abscess this soon after the procedure, without fever, is unlikely. A vasovagal faint does not cause wheeze and ongoing flushing.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "enets-cs-2022",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following treatments are most appropriate for her now?",
        options: [
          "crystalloid IV bolus",
          "epinephrine IM",
          "furosemide IV",
          "hydrocortisone IV",
          "octreotide IV",
          "piperacillin-tazobactam IV",
        ],
        select: 3,
        correct: [0, 3, 4],
        explanation:
          "The ENETS guidance treats carcinoid crisis with IV octreotide, given as a bolus and then a continuous infusion, together with IV fluids, corticosteroids and vasopressors. Octreotide suppresses further hormone release from the tumour, crystalloid replaces the volume lost to vasodilation and diarrhea, and a corticosteroid such as hydrocortisone is part of the recommended treatment. A further dose of epinephrine is a sympathomimetic that can provoke more hormone release. Furosemide would deepen her hypotension. Antibiotics are not needed for a crisis with no signs of infection.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "enets-cs-2022",
      },
      {
        id: "q3",
        kind: "single",
        update: "An hour after arrival her JVP is at the angle of the jaw. Bedside echocardiography shows a dilated right ventricle, thickened tricuspid leaflets that do not close fully and severe tricuspid regurgitation. The left ventricle contracts well.",
        prompt: "Which of the following best explains the findings on her bedside echocardiogram?",
        options: [
          "Acute pulmonary embolism",
          "Carcinoid heart disease",
          "Infective endocarditis",
          "Rheumatic valve disease",
          "Right ventricular infarction",
        ],
        correct: 1,
        explanation:
          "Thickened tricuspid leaflets that fail to close, with severe regurgitation and a dilated right ventricle, are the typical picture of carcinoid heart disease. Fibrous plaques form on the right-sided valves, tricuspid regurgitation is usually the main lesion, and the right ventricle becomes volume overloaded. It is found in about 20 to 50% of patients with carcinoid syndrome, and her raised JVP warns that further fluid must be given carefully. Pulmonary embolism dilates the right ventricle but does not thicken the valve. Endocarditis causes vegetations, and she has no fever. Rheumatic disease mainly affects the mitral valve, and right ventricular infarction leaves the leaflets normal.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "enets-cs-2022",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her initial treatment is running. Her systolic pressure is still 74 mmHg and the flushing persists.",
        prompt: "Which of the following vasoactive agents is most appropriate for her now?",
        options: [
          "dobutamine infusion",
          "dopamine infusion",
          "epinephrine infusion",
          "isoproterenol infusion",
          "vasopressin infusion",
        ],
        correct: 4,
        explanation:
          "Sympathomimetic drugs can make a carcinoid tumour release more hormones and worsen the very shock they are meant to treat, so the ENETS guidance names vasopressin and the selective alpha-1 agonist phenylephrine as the preferred vasopressors in this setting. Vasopressin raises vascular tone through its own receptors rather than adrenergic ones. Epinephrine, dopamine, dobutamine and isoproterenol are all catecholamines, and dobutamine and isoproterenol also dilate blood vessels. The octreotide infusion continues alongside it.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "enets-cs-2022",
      },
    ],
    sources: [S.enets],
    ...META,
  },

  /* 52 ------------------------------------------------------------------ */
  {
    id: "shock-52",
    topic: TOPIC,
    title: "Flank pain on the evening of a test",
    stem:
      "A 52-year-old man presents to the emergency department at 21:00 with 3 hours of left flank pain and light-headedness. At 09:00 today he had an ultrasound-guided needle biopsy of his left kidney to find the cause of his kidney disease, and he went home after 6 hours of observation. He has stage 4 chronic kidney disease and is being assessed for a kidney transplant from a living donor. He takes amlodipine and no anticoagulant, and he stopped ASA 7 days before the biopsy. He is pale and sweaty. His left flank is tender and full. His urine is pink. Hemoglobin is 84 g/L, down from 116 g/L before the biopsy. Urea is 34 mmol/L and creatinine 356 umol/L.",
    vitals: { temperature: "36.7°C oral", pulse: "124/minute", resp: "24/minute", bp: "84/50 mmHg", o2sat: "97% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside ultrasound findings would best explain his shock?",
        options: [
          "Collection around the left kidney",
          "Dilated left renal collecting system",
          "Free fluid in the hepatorenal space",
          "Large clot within the bladder",
          "Small effusion around the heart",
        ],
        correct: 0,
        explanation:
          "A collection around the kidney that was just biopsied is most likely a perinephric hematoma, the bleeding complication that fits his tender, full flank, his fall in hemoglobin from 116 to 84 g/L and his shock. In one biopsy series, 77% of complications had appeared by 8 hours and 95% by 12 hours, so bleeding that declares itself after a 6 hour observation period is expected in some patients. A dilated collecting system or a bladder clot can follow bleeding into the urine, but his urine is only pink, so they do not explain this blood loss. Free fluid in the hepatorenal space points to an intraperitoneal source, and a small pericardial effusion does not cause hemorrhagic shock.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "marwah-korbet-1996",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate resuscitation fluid for him now?",
        options: [
          "Crystalloid until transplant advice",
          "darbepoetin IV and recheck hemoglobin",
          "iron sucrose 200 mg IV",
          "red cells 2 units IV now",
          "Wait for HLA antibody screen",
        ],
        correct: 3,
        explanation:
          "He is in hemorrhagic shock with a hemoglobin that has fallen from 116 to 84 g/L and is still bleeding, so he needs red cells now. KDIGO advises avoiding red cell transfusion when possible in people eligible for a transplant, because it can create antibodies against future donor tissue. The same guideline advises considering transfusion when rapid correction of anemia is needed to stabilize the patient, as in acute hemorrhage. Darbepoetin and IV iron cannot correct anemia immediately. Waiting for an antibody screen or for transplant advice delays blood he needs to survive, and crystalloid carries no oxygen and dilutes his clotting factors.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "kdigo-anemia-2026",
      },
      {
        id: "q3",
        kind: "single",
        update: "His platelet count is 236 x 10^9/L, INR 1.0 and aPTT normal. His urine is now red and the flank swelling is growing.",
        prompt: "Which of the following treatments would best improve his clotting now?",
        options: [
          "desmopressin IV",
          "frozen plasma IV",
          "platelets IV",
          "protamine IV",
          "vitamin K IV",
        ],
        correct: 0,
        explanation:
          "His platelet count, INR and aPTT are normal, but a urea of 34 mmol/L points to uremic bleeding, in which platelets are present but do not work well. Desmopressin is one of the recognized treatments for uremic bleeding and can be given at once, alongside blood and plans to stop the bleeding vessel. Platelet transfusion does not fix a defect in the function of platelets he already has in normal numbers. Plasma and vitamin K replace clotting factors, and his normal INR shows he is not short of them. Protamine reverses heparin, which he has not received.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "hedges-2007",
      },
      {
        id: "q4",
        kind: "single",
        update: "Interventional radiology will be ready in 25 minutes. Despite the resuscitation given so far, his systolic pressure is 66 mmHg and he is drowsy.",
        prompt: "Which of the following vasoactive agents is most appropriate to add while he waits for interventional radiology?",
        options: [
          "dobutamine infusion",
          "dopamine infusion",
          "epinephrine infusion",
          "norepinephrine infusion",
          "phenylephrine infusion",
        ],
        correct: 3,
        explanation:
          "His systolic pressure of 66 mmHg with new drowsiness shows critical hypoperfusion despite blood, and it is below even the 80 to 90 mmHg target that the European trauma bleeding guideline accepts until bleeding is controlled. That guideline, applied here to bleeding after a procedure, recommends noradrenaline, which is norepinephrine, in addition to fluids when restricted volume replacement does not reach the target pressure, while blood and definitive control of the bleeding continue. The same guideline cautions that permissive hypotension may not suit patients with chronic hypertension, and he takes amlodipine, which is one more reason not to accept this pressure. Dobutamine is for myocardial dysfunction and can lower blood pressure. Epinephrine use was linked to higher mortality in retrospective trauma data. Dopamine and phenylephrine are not the agents the guideline recommends.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "euro-trauma-2023",
      },
    ],
    sources: [S.marwah, S.kdigo, S.hedges, S.euroTrauma],
    ...META,
  },
];
