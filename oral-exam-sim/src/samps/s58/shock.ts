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
  trekk: { id: "trekk-sepsis-2018", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Sepsis. Version 1.0. 2018.", url: "https://cms.trekk.ca/wp-content/uploads/2023/11/2018-07-23_Sepsis_BLRv1.0.pdf" },
  lichtenstein: { id: "lichtenstein-2009", citation: "Lichtenstein D, Mezière G, Seitz J. The dynamic air bronchogram. A lung ultrasound sign of alveolar consolidation ruling out atelectasis. Chest. 2009.", url: "https://doi.org/10.1378/chest.08-2281" },
  metlay: { id: "ats-idsa-cap-2019", citation: "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019.", url: "https://doi.org/10.1164/rccm.201908-1581ST" },
  ssc: { id: "ssc-2021", citation: "Evans L, Rhodes A, Alhazzani W, et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med. 2021.", url: "https://doi.org/10.1007/s00134-021-06506-y" },
  andromeda: { id: "andromeda-shock-2019", citation: "Hernández G, Ospina-Tascón GA, Damiani LP, et al. Effect of a resuscitation strategy targeting peripheral perfusion status vs serum lactate levels on 28-day mortality among patients with septic shock: the ANDROMEDA-SHOCK randomized clinical trial. JAMA. 2019.", url: "https://doi.org/10.1001/jama.2019.0071" },
  nazerian: { id: "nazerian-2014", citation: "Nazerian P, Vanni S, Castelli M, et al. Diagnostic performance of emergency transthoracic focus cardiac ultrasound in suspected acute type A aortic dissection. Intern Emerg Med. 2014.", url: "https://doi.org/10.1007/s11739-014-1080-9" },
  hansen: { id: "hansen-2007", citation: "Hansen MS, Nogareda GJ, Hutchison SJ. Frequency of and inappropriate treatment of misdiagnosis of acute aortic dissection. Am J Cardiol. 2007.", url: "https://doi.org/10.1016/j.amjcard.2006.10.055" },
  tsukube: { id: "tsukube-2017", citation: "Tsukube T, Okita Y. Cardiac tamponade due to aortic dissection: clinical picture and treatment with focus on pericardiocentesis. European Society of Cardiology. E-Journal of Cardiology Practice. 2017.", url: "https://www.escardio.org/Journals/E-Journal-of-Cardiology-Practice/Volume-15/Cardiac-tamponade-due-to-aortic-dissection-clinical-picture-and-treatment-with-focus-on-pericardiocentesis" },
  pandit: { id: "pandit-2014", citation: "Pandit V, Rhee P, Hashmi A, et al. Shock index predicts mortality in geriatric trauma patients: an analysis of the National Trauma Data Bank. J Trauma Acute Care Surg. 2014.", url: "https://doi.org/10.1097/TA.0000000000000160" },
  friese: { id: "friese-2007", citation: "Friese RS, Malekzadeh S, Shafi S, Gentilello LM, Starr A. Abdominal ultrasound is an unreliable modality for the detection of hemoperitoneum in patients with pelvic fracture. J Trauma. 2007.", url: "https://doi.org/10.1097/TA.0b013e31805f6ffb" },
  nacPcc: { id: "nac-pcc-2022", citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. Revised 2022.", url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" },
  crash2: { id: "crash-2-2013", citation: "Roberts I, Shakur H, Coats T, et al. The CRASH-2 trial: a randomised controlled trial and economic evaluation of the effects of tranexamic acid on death, vascular occlusive events and transfusion requirement in bleeding trauma patients. Health Technol Assess. 2013.", url: "https://doi.org/10.3310/hta17100" },
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
          "Her calculated osmolality is 2 x 146 + 46 + 24 = 362 mmol/kg with little ketosis, which is the hyperosmolar hyperglycemic state. Diabetes Canada estimates water losses in HHS at 100 to 200 mL/kg, compared with about 100 mL/kg in DKA. At 55 kg that is 5.5 to 11 L. Estimates of 4 L or less badly understate the loss, and 15 to 20 L would mean more than 270 mL/kg. Her age and heart failure mean the deficit is replaced in measured steps with frequent reassessment, not that it is smaller.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "dc-hyperglycemic-2018",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her corrected sodium is about 158 mmol/L.",
        prompt: "Which of the following is the most appropriate initial IV fluid for her?",
        options: [
          "albumin 5% 500 mL IV",
          "dextrose 5% 500 mL IV",
          "sodium bicarbonate 1.4% 500 mL IV",
          "sodium chloride 0.45% 500 mL IV",
          "sodium chloride 0.9% 500 mL IV",
        ],
        correct: 4,
        explanation:
          "Isotonic 0.9% sodium chloride is the principal fluid in HHS. It restores circulating volume first, and osmolality then falls gradually as glucose falls. Her corrected sodium of 158 mmol/L may rise further as glucose drops, which is expected and is not by itself a reason to switch to a hypotonic fluid. 0.45% sodium chloride is kept for when osmolality stops falling despite adequate 0.9% saline. Dextrose 5% is free water that would drop osmolality too fast. She is not acidotic, and albumin has no advantage for this deficit.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "jbds-hhs-2023",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements about her pulse and blood pressure on arrival is most accurate?",
        options: [
          "They exclude shock in an older adult",
          "They make fluid resuscitation unnecessary",
          "They may hide significant volume loss",
          "They reflect her diabetes rather than volume",
          "They show her losses are under 500 mL",
        ],
        correct: 2,
        explanation:
          "Her pulse of 82/minute is held down by metoprolol, and her systolic pressure of 108 mmHg is about 50 mmHg below her usual 160 mmHg, so both understate her volume loss. Supine tachycardia and hypotension are often absent even after losses of more than 1 L. Values that look normal therefore neither exclude shock nor make fluid unnecessary, and they cannot put a number on her losses. Diabetes does not explain them.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "mcgee-1999",
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
        update: "Before the IV is placed she becomes sleepier. Her pulse is 192/minute, her hands and feet are cool and her capillary refill is 5 seconds. Her systolic pressure is 86 mmHg.",
        prompt: "Which of the following best describes her circulatory state at this point?",
        options: [
          "Adequate perfusion for her age",
          "Compensated shock",
          "Decompensated hypotensive shock",
          "Fluid overload from bronchiolitis",
          "Stress response to a low fever",
        ],
        correct: 1,
        explanation:
          "Marked tachycardia, cool hands and feet, a capillary refill of 5 seconds and new sleepiness show poor perfusion while her systolic pressure is still normal for a young infant. That is compensated shock. Hypotension is a late finding in children and marks decompensation, so waiting for it loses time. Her temperature of 37.8°C does not explain these changes, and nothing here suggests fluid overload. She needs IV or intraosseous access and an isotonic bolus now.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "trekk-sepsis-2018",
      },
    ],
    sources: [S.steiner, S.cpsBronch, S.trekk],
    ...META,
  },

  /* 50 ------------------------------------------------------------------ */
  {
    id: "shock-50",
    topic: TOPIC,
    title: "Cough, fever and new confusion",
    stem:
      "A 78-year-old man is brought to the emergency department by ambulance with 2 days of cough, fever and shortness of breath, and new confusion today. He has hypertension and osteoarthritis and takes amlodipine. He has not been in hospital or taken antibiotics in the past year, and no resistant organism has ever been found. He is drowsy but rousable. His knees are mottled and his capillary refill is 5 seconds. Bronchial breath sounds are heard at the right base. Lactate is 5.2 mmol/L. Blood cultures have been drawn and a balanced crystalloid bolus is running.",
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
        kind: "menu",
        prompt: "Which of the following empiric antibiotics are most appropriate for his community-acquired pneumonia with septic shock?",
        options: [
          "amoxicillin PO",
          "azithromycin IV",
          "cefazolin IV",
          "ceftriaxone IV",
          "clindamycin IV",
          "gentamicin IV",
          "metronidazole IV",
          "vancomycin IV",
        ],
        select: 2,
        correct: [1, 3],
        explanation:
          "Severe community-acquired pneumonia, here with septic shock, is treated with a beta-lactam such as ceftriaxone plus a macrolide such as azithromycin, given immediately. He has no recent hospital stay or IV antibiotics and no previous MRSA or Pseudomonas, so vancomycin is not needed. Oral amoxicillin is for outpatients with mild illness. Cefazolin is weaker against Haemophilus influenzae and has no atypical cover. Clindamycin, gentamicin and metronidazole do not cover the usual mix of typical and atypical organisms.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "ats-idsa-cap-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 30 mL/kg of crystalloid his MAP is 61 mmHg. His lungs sound unchanged.",
        prompt: "Which of the following best predicts whether more fluid will increase his cardiac output?",
        options: [
          "Central venous pressure of 6 mmHg",
          "Heart rate of 118/minute",
          "Lactate of 5.2 mmol/L",
          "Passive leg raise with stroke volume",
          "Skin turgor on the forearm",
        ],
        correct: 3,
        explanation:
          "A passive leg raise shifts venous blood toward the heart, and a rise in stroke volume measured by echocardiography or a monitor shows that he is still fluid responsive. The Surviving Sepsis guideline suggests dynamic measures over physical examination or static values alone. A single central venous pressure does not predict the response to fluid. His heart rate and lactate show that he is in shock but not whether more fluid will help. Skin turgor has no role in this decision.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "ssc-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "His stroke volume does not rise with a passive leg raise. Norepinephrine is started through a large peripheral IV.",
        prompt: "Which of the following is the most appropriate initial mean arterial pressure target for his norepinephrine?",
        options: ["55 mmHg", "65 mmHg", "75 mmHg", "85 mmHg", "95 mmHg"],
        correct: 1,
        explanation:
          "The Surviving Sepsis guideline recommends an initial MAP target of 65 mmHg over higher targets for adults with septic shock on vasopressors. Targets of 75 to 95 mmHg need more vasopressor, with more risk of arrhythmia and ischemia and no proven survival benefit. A target of 55 mmHg is below the level at which organ perfusion is reliably maintained. Perfusion markers such as capillary refill, mental status and urine output guide care beyond the MAP itself.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "ssc-2021",
      },
      {
        id: "q5",
        kind: "single",
        update: "Three hours later his MAP is 67 mmHg on norepinephrine. His capillary refill is 2 seconds and the mottling has gone, but his lactate is 3.9 mmol/L.",
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
          "His capillary refill has returned to normal and the mottling has cleared, so peripheral perfusion is restored. In ANDROMEDA-SHOCK, targeting a normal capillary refill time did not raise mortality compared with targeting lactate and was linked to less organ dysfunction at 72 hours. Lactate falls more slowly than perfusion recovers, and chasing it with more boluses risks fluid overload. Dobutamine is for low cardiac output with ongoing hypoperfusion, which he no longer has. Albumin and bicarbonate do not treat a slowly falling lactate.",
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
    title: "Collapse after tearing back pain",
    stem:
      "You are working in a community hospital emergency department without cardiac surgery. A 66-year-old man is brought to the emergency department by ambulance after he collapsed at home 40 minutes ago. Just before he collapsed he had sudden severe pain in his chest and between his shoulder blades. He has long-standing, poorly controlled hypertension and takes amlodipine. He is pale, sweaty and confused, and he moves all four limbs. His neck veins are distended. His heart sounds are quiet, and a soft early diastolic murmur is heard at the left sternal border. Both femoral pulses are present. His ECG shows sinus tachycardia with 2 mm ST elevation in II, III and aVF.",
    vitals: { temperature: "36.4°C oral", pulse: "124/minute", resp: "26/minute", bp: "78/50 mmHg", o2sat: "94% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Bedside ultrasound shows a moderate pericardial effusion with right ventricular diastolic collapse.",
        prompt: "Which of the following additional bedside ultrasound findings would most clearly point to the cause of his effusion?",
        options: [
          "Dilated aortic root with a flap",
          "Hyperdynamic left ventricle",
          "Plethoric IVC without variation",
          "Right atrial systolic collapse",
          "Small right ventricular cavity",
        ],
        correct: 0,
        explanation:
          "A dilated ascending aorta with an intimal flap is a direct sign of type A dissection on focused cardiac ultrasound, and direct signs had a specificity of 94% in an emergency department study. A dissection that leaks into the pericardium explains his tamponade, and his diastolic murmur fits aortic regurgitation. A plethoric IVC and right atrial collapse confirm tamponade physiology but not its cause. A hyperdynamic left ventricle and a small right ventricle reflect poor filling. Focused ultrasound cannot exclude dissection when no flap is seen.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "nazerian-2014",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains the ST elevation in II, III and aVF on his ECG?",
        options: [
          "Acute pericarditis",
          "Dissection into the right coronary",
          "Early repolarization",
          "Plaque rupture in the right coronary",
          "Prinzmetal vasospasm",
        ],
        correct: 1,
        explanation:
          "A type A dissection can extend into a coronary ostium, most often the right, and cause inferior ST elevation that looks like a primary STEMI. With tearing back pain, tamponade and an aortic regurgitation murmur, dissection is the unifying cause rather than plaque rupture. Treating it as STEMI is dangerous. When acute aortic syndromes were mistaken for ACS, antithrombotic drugs were linked to more major bleeding, more hemorrhagic pericardial fluid and more instability. Pericarditis gives diffuse rather than territorial ST elevation, and neither early repolarization nor vasospasm explains shock with tamponade.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "hansen-2007",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the main mechanism of his shock?",
        options: [
          "Cardiogenic shock from inferior infarction",
          "Distributive shock from inflammation",
          "Hypovolemic shock from pleural bleeding",
          "Neurogenic shock from spinal ischemia",
          "Obstructive shock from tamponade",
        ],
        correct: 4,
        explanation:
          "Distended neck veins, quiet heart sounds, hypotension and right ventricular diastolic collapse show that blood in the pericardium is stopping the right heart from filling. That is obstructive shock from tamponade, a major cause of early death in type A dissection. Coronary involvement may add some ischemia, but it does not explain raised neck veins with right ventricular collapse. No pleural fluid was described. He moves all four limbs, and the warm, dilated picture of neurogenic or distributive shock is absent.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "tsukube-2017",
      },
      {
        id: "q4",
        kind: "single",
        update: "The regional cardiac surgery centre accepts him, and transport will take 90 minutes. His systolic pressure is now 64 mmHg despite 1 L of crystalloid.",
        prompt: "Which of the following is the most appropriate immediate intervention while his transfer is arranged?",
        options: [
          "Full pericardial drainage to dryness",
          "Heparin bolus for inferior STEMI",
          "Intra-aortic balloon pump insertion",
          "Small controlled pericardial aspiration",
          "Tenecteplase for inferior STEMI",
        ],
        correct: 3,
        explanation:
          "Tamponade from type A dissection needs urgent aortic repair. When the patient may not survive until surgery, controlled aspiration of small volumes of pericardial blood, enough to bring the systolic pressure to about 80 to 90 mmHg, can stabilize him, and the 2015 ESC pericardial guideline supports it as a temporizing step. Rapid drainage to dryness can restart the leak from the aorta into the pericardium. Heparin and tenecteplase add bleeding and are dangerous here. An intra-aortic balloon pump is contraindicated with aortic dissection and aortic regurgitation.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "tsukube-2017",
      },
    ],
    sources: [S.nazerian, S.hansen, S.tsukube],
    ...META,
  },

  /* 52 ------------------------------------------------------------------ */
  {
    id: "shock-52",
    topic: TOPIC,
    title: "Fall on the step at home",
    stem:
      "An 81-year-old woman is brought to the emergency department by ambulance 2 hours after she tripped on a step at home and landed on her right side. She cannot bear weight because of right groin pain. She has atrial fibrillation and takes apixaban 5 mg twice daily, last taken at breakfast 4 hours ago. She also takes bisoprolol for hypertension. She did not hit her head and has no neck pain. She is pale and anxious. Her abdomen is soft and not tender. Her pelvis is tender over the right pubic rami and sacrum. A pelvic X-ray shows fractures of the right superior and inferior pubic rami and the right sacral ala. Hemoglobin is 98 g/L and lactate is 3.8 mmol/L.",
    vitals: { temperature: "36.3°C oral", pulse: "96/minute irregular", resp: "22/minute", bp: "88/54 mmHg", o2sat: "96% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most clearly signals significant blood loss in her?",
        options: [
          "A shock index above 1",
          "Anxiety after a painful fall",
          "Hemoglobin of 98 g/L",
          "Irregular pulse from AF",
          "Tenderness over the pubic rami",
        ],
        correct: 0,
        explanation:
          "Her shock index is 96 divided by 88, about 1.1. In injured patients aged 65 or older, heart rate and systolic pressure on their own are unreliable, and a shock index of 1 or more predicted mortality in a large trauma registry. Bisoprolol blunts her heart rate, so a pulse under 100 understates her loss, and her lactate of 3.8 mmol/L supports hypoperfusion. A hemoglobin of 98 g/L can lag behind acute bleeding. Anxiety, AF and local tenderness do not measure blood loss.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "pandit-2014",
      },
      {
        id: "q2",
        kind: "single",
        update: "A FAST examination shows no free fluid in the abdomen or around the heart.",
        prompt: "Which of the following statements about her negative FAST examination is most accurate?",
        options: [
          "It excludes bleeding as the cause of shock",
          "It means CT can be safely deferred",
          "It misses retroperitoneal pelvic bleeding",
          "It rules out an intraperitoneal bleed",
          "It shows her shock is cardiogenic",
        ],
        correct: 2,
        explanation:
          "FAST looks for free fluid in the peritoneal and pericardial spaces and cannot see blood in the retroperitoneum or around a pelvic fracture, which is her likely source. In patients with pelvic fractures at risk of bleeding, FAST detected hemoperitoneum with a sensitivity of only 26%, so a negative scan does not reliably exclude intraperitoneal blood either. She still needs contrast CT or angiography to find and stop the bleeding. A negative FAST does not point to a cardiogenic cause.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "friese-2007",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is most appropriate to counter her apixaban if a specific reversal agent is unavailable?",
        options: [
          "frozen plasma 15 mL/kg IV",
          "idarucizumab 5 g IV bolus",
          "phytonadione 10 mg IV",
          "protamine sulfate 50 mg IV",
          "prothrombin complex 2000 units IV",
        ],
        correct: 4,
        explanation:
          "For life-threatening bleeding on a factor Xa inhibitor such as apixaban, the Canadian national advisory committee advises a specific reversal agent such as andexanet alfa where available, and otherwise prothrombin complex concentrate, 2000 units as a fixed dose or 25 to 50 units/kg to a maximum of 3000 units. Idarucizumab reverses dabigatran only. Protamine reverses heparin. Phytonadione and frozen plasma restore vitamin K dependent factors, which apixaban does not deplete, and plasma adds volume and delay.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "nac-pcc-2022",
      },
      {
        id: "q4",
        kind: "single",
        update: "Prothrombin complex concentrate has been given. She remains hypotensive while CT is arranged.",
        prompt: "Which of the following best describes the use of tranexamic acid for her at this point?",
        options: [
          "Avoid it because of her atrial fibrillation",
          "Avoid it because she is over 80",
          "Give 1 g IV now, then infusion over 8 hours",
          "Give it only after the CT scan is reported",
          "Give it only if bleeding continues at 6 hours",
        ],
        correct: 2,
        explanation:
          "She is bleeding after injury with a systolic pressure below 90 mmHg, 2 hours after the fall, so she fits the CRASH-2 population. Tranexamic acid 1 g IV over 10 minutes, then 1 g over 8 hours, reduced death from bleeding when started within 3 hours of injury, with the greatest benefit in the first hour. Started after 3 hours it appeared to increase deaths from bleeding, so waiting 6 hours or for a CT report risks missing the window. Her age and AF are not reasons to withhold it here.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "crash-2-2013",
      },
    ],
    sources: [S.pandit, S.friese, S.nacPcc, S.crash2],
    ...META,
  },
];
