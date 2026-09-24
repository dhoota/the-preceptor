// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 };

const ESC_ACS: Source = {
  id: "esc-acs",
  citation: "Byrne RA and colleagues. 2023 ESC guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.",
  url: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210",
};
const DE_WINTER: Source = {
  id: "de-winter",
  citation: "de Winter RJ, Verouden NJ, Wellens HJ and colleagues. A new ECG sign of proximal LAD occlusion. N Engl J Med. 2008.",
  url: "https://www.nejm.org/doi/full/10.1056/NEJMc0804737",
};
const AORTA: Source = {
  id: "aha-aorta",
  citation: "Isselbacher EM and colleagues. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022.",
};
const ADVISED: Source = {
  id: "advised",
  citation: "Nazerian P and colleagues. Diagnostic accuracy of the aortic dissection detection risk score plus D-dimer for acute aortic syndromes (ADvISED). Circulation. 2018.",
};
const IRAD: Source = {
  id: "irad",
  citation: "Hagan PG, Nienaber CA, Isselbacher EM and colleagues. The International Registry of Acute Aortic Dissection (IRAD): new insights into an old disease. JAMA. 2000.",
};
const CCS_STEMI: Source = {
  id: "ccs-stemi",
  citation: "Wong GC and colleagues. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
  url: "https://onlinecjc.ca/article/S0828-282X(18)31321-7/fulltext",
};
const CCS_APT: Source = {
  id: "ccs-antiplatelet-2023",
  citation: "Bainey KR, Marquis-Gravel G and colleagues. Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology 2023 focused update of the guidelines for the use of antiplatelet therapy. Can J Cardiol. 2024.",
  url: "https://onlinecjc.ca/article/S0828-282X(23)01841-X/fulltext",
};
const BTS: Source = {
  id: "bts-pleural",
  citation: "Roberts ME and colleagues. British Thoracic Society guideline for pleural disease. Thorax. 2023.",
};
const SCAD: Source = {
  id: "aha-scad",
  citation: "Hayes SN, Kim ESH, Saw J and colleagues. Spontaneous coronary artery dissection: current state of the science. A scientific statement from the American Heart Association. Circulation. 2018.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000564",
};
const ESC_PE: Source = {
  id: "esc-pe",
  citation: "Konstantinides SV and colleagues. 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
};
const HCM: Source = {
  id: "aha-hcm",
  citation: "Ommen SR and colleagues. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR guideline for the management of hypertrophic cardiomyopathy. Circulation. 2024.",
  url: "https://www.ahajournals.org/doi/abs/10.1161/CIR.0000000000001250",
};
const CIG_COVID: Source = {
  id: "cig-covid",
  citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. COVID-19 vaccines. Updated 2025.",
  url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-26-covid-19-vaccine.html",
};
const CJC_MYO: Source = {
  id: "cjc-vaccine-myocarditis",
  citation: "Luk A, Clarke B, Dahdah N and colleagues. Myocarditis and pericarditis after COVID-19 mRNA vaccination: practical considerations for care providers. Can J Cardiol. 2021.",
  url: "https://onlinecjc.ca/article/S0828-282X(21)00624-3/fulltext",
};
const ESC_MYO_PERI: Source = {
  id: "esc-myo-peri-2025",
  citation: "Schulz-Menger J and colleagues. 2025 ESC guidelines for the management of myocarditis and pericarditis. Eur Heart J. 2025.",
  url: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/",
};
const SICKLE: Source = {
  id: "nhlbi-sickle",
  citation: "Yawn BP, Buchanan GR, Afenyi-Annan AN and colleagues. Management of sickle cell disease: summary of the 2014 evidence-based report by expert panel members. JAMA. 2014.",
  url: "https://jamanetwork.com/journals/jama/article-abstract/1902235",
};
const CANHAEM: Source = {
  id: "canhaem-sickle",
  citation: "Canadian Haemoglobinopathy Association. Consensus statement on the care of patients with sickle cell disease in Canada. Version 2.0. 2015.",
};
const TAKOTSUBO: Source = {
  id: "takotsubo",
  citation: "Ghadri JR, Wittstein IS, Prasad A and colleagues. International expert consensus document on takotsubo syndrome (part II): diagnostic workup, outcome, and management. Eur Heart J. 2018.",
  url: "https://academic.oup.com/eurheartj/article/39/22/2047/5025411",
};
const HEART_SCORE: Source = {
  id: "heart-score",
  citation: "Backus BE and colleagues. A prospective validation of the HEART score for chest pain patients at the emergency department. Int J Cardiol. 2013.",
};
const SGARBOSSA: Source = {
  id: "modified-sgarbossa",
  citation: "Smith SW, Dodd KW, Henry TD and colleagues. Diagnosis of ST-elevation myocardial infarction in the presence of left bundle branch block with the ST-elevation to S-wave ratio in a modified Sgarbossa rule. Ann Emerg Med. 2012.",
  url: "https://pubmed.ncbi.nlm.nih.gov/22939607/",
};
const ZOSTER: Source = {
  id: "zoster",
  citation: "Cohen JI. Clinical practice: herpes zoster. N Engl J Med. 2013.",
  url: "https://pubmed.ncbi.nlm.nih.gov/23863052/",
};
const AHA_CP: Source = {
  id: "aha-chest-pain",
  citation: "Gulati M and colleagues. 2021 AHA/ACC guideline for the evaluation and diagnosis of chest pain. Circulation. 2021.",
};
const YEARS_PREG: Source = {
  id: "years-pregnancy",
  citation: "van der Pol LM, Tromeur C, Bistervels IM and colleagues. Pregnancy-adapted YEARS algorithm for diagnosis of suspected pulmonary embolism. N Engl J Med. 2019.",
  url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1813865",
};
const ADJUST_PE: Source = {
  id: "adjust-pe",
  citation: "Righini M and colleagues. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism: the ADJUST-PE study. JAMA. 2014.",
  url: "https://pubmed.ncbi.nlm.nih.gov/24643601/",
};
const PERC: Source = {
  id: "perc",
  citation: "Kline JA and colleagues. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost. 2008.",
};
const WELLS: Source = {
  id: "wells-pe",
  citation: "Wells PS, Anderson DR, Rodger M and colleagues. Derivation of a simple clinical model to categorize patients' probability of pulmonary embolism. Thromb Haemost. 2000.",
};
const CAT_CANADA: Source = {
  id: "cat-canada",
  citation: "Carrier M and colleagues. Treatment algorithm in cancer-associated thrombosis: updated Canadian expert consensus. Curr Oncol. 2021.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8700468/",
};
const VALVE: Source = {
  id: "aha-valve",
  citation: "Otto CM, Nishimura RA, Bonow RO and colleagues. 2020 ACC/AHA guideline for the management of patients with valvular heart disease. Circulation. 2021.",
};
const ESC_PERI: Source = {
  id: "esc-pericardial",
  citation: "Adler Y and colleagues. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.",
};
const NSTE_2014: Source = {
  id: "aha-nste-2014",
  citation: "Amsterdam EA and colleagues. 2014 AHA/ACC guideline for the management of patients with non-ST-elevation acute coronary syndromes. Circulation. 2014.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000134",
};
const NITRO: Source = {
  id: "nitro-response",
  citation: "Henrikson CA and colleagues. Chest pain relief by nitroglycerin does not predict active coronary artery disease. Ann Intern Med. 2003.",
  url: "https://pubmed.ncbi.nlm.nih.gov/14678917/",
};
const LIPIDS: Source = {
  id: "ccs-lipids",
  citation: "Pearson GJ and colleagues. 2021 Canadian Cardiovascular Society guidelines for the management of dyslipidemia for the prevention of cardiovascular disease in adults. Can J Cardiol. 2021.",
  url: "https://onlinecjc.ca/article/S0828-282X(21)00165-3/fulltext",
};
const KAWASAKI: Source = {
  id: "aha-kawasaki",
  citation: "McCrindle BW and colleagues. Diagnosis, treatment, and long-term management of Kawasaki disease. A scientific statement for health professionals from the American Heart Association. Circulation. 2017.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000484",
};

export const CHEST_PAIN_S28: Samp[] = [
  /* 16 ------------------------------------------------------------------ */
  {
    id: "chest-pain-16",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure while jogging",
    stem:
      "A 47-year-old man presents to the emergency department at 07:15 with 40 minutes of central chest pressure that began while he was jogging. It spreads to his left arm and he feels nauseated. He smokes one pack a day and has untreated dyslipidemia. He takes no medications and has no known heart disease. He is pale and diaphoretic. Heart sounds are normal and the lungs are clear. The hospital has a catheterization laboratory on site.",
    vitals: { temperature: "36.8°C oral", pulse: "94/minute", resp: "20/minute", bp: "146/88 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most increases the likelihood that his pain is ischemic?",
        options: [
          "Absence of prior cardiac disease",
          "Age younger than 50 years",
          "Exertional onset with arm radiation",
          "Nausea without vomiting",
          "Normal heart and lung examination",
        ],
        correct: 2,
        explanation:
          "Pain that starts with exertion and spreads to the arm carries some of the highest likelihood ratios for ACS in the pain history. Nausea is common in ACS but is nonspecific and adds little. A normal examination and no prior heart disease do not lower the probability meaningfully. Age under 50 lowers the baseline risk a little but does not outweigh an exertional history in a smoker with dyslipidemia.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The ECG shows 2 mm upsloping ST depression at the J point in V1 to V5 running into tall, symmetrical T waves, with 1 mm ST elevation in aVR. Potassium is 4.1 mmol/L.",
        prompt: "Which of the following is the most likely explanation for these ECG findings?",
        options: [
          "Acute proximal LAD occlusion",
          "Benign early repolarization",
          "Hyperkalemia with peaked T waves",
          "Left ventricular hypertrophy with strain",
          "Posterior wall myocardial infarction",
        ],
        correct: 0,
        explanation:
          "Upsloping ST depression at the J point that runs into tall symmetrical precordial T waves is the de Winter pattern, a sign of acute proximal LAD occlusion. His potassium of 4.1 mmol/L argues against hyperkalemia. Strain from hypertrophy gives downsloping ST depression with inverted T waves in the lateral leads. Posterior infarction gives horizontal ST depression mainly in V1 to V3 with tall R waves. Early repolarization causes ST elevation, not depression.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "de-winter",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate management now?",
        options: [
          "Early angiography within 24 hours",
          "Fibrinolysis with tenecteplase",
          "Immediate primary PCI",
          "Repeat ECG and troponin in 1 hour",
          "Telemetry admission and serial troponins",
        ],
        correct: 2,
        explanation:
          "The de Winter pattern with ongoing ischemic pain is treated as a STEMI equivalent, and this hospital can do primary PCI now. Angiography within 24 hours is the plan for high-risk NSTE-ACS without ongoing ischemia, not for an occluded artery. Fibrinolysis is for STEMI when timely PCI is not available. Waiting for troponins or a repeat ECG delays reperfusion while myocardium is lost.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        update: "His first high-sensitivity troponin I, drawn 45 minutes after pain onset, is 6 ng/L. The male 99th percentile for the assay is 34 ng/L.",
        prompt: "Which of the following best describes the significance of this troponin result?",
        options: [
          "It argues against an acute coronary occlusion",
          "It does not change the need for reperfusion",
          "It suggests a demand ischemia pattern",
          "It supports discharge after a second troponin",
          "It supports switching to an NSTEMI pathway",
        ],
        correct: 1,
        explanation:
          "Troponin was drawn only 45 minutes after pain onset, before it would be expected to rise. Coronary occlusion is diagnosed from the ECG and symptoms, so a normal early value does not delay reperfusion. It does not argue against occlusion or point to demand ischemia. Moving him to an NSTEMI or discharge pathway would rest on a single early test.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
    ],
    sources: [AHA_CP, DE_WINTER, ESC_ACS],
    ...meta,
  },

  /* 17 ------------------------------------------------------------------ */
  {
    id: "chest-pain-17",
    topic: "chest-pain",
    title: "Tearing pain at the gym",
    stem:
      "A 26-year-old man is brought to the emergency department by ambulance with severe chest pain that began suddenly 50 minutes ago while he was lifting weights. He describes it as tearing and maximal at onset, and it is now felt between his shoulder blades. He has Marfan syndrome and stopped taking losartan a year ago. He denies drug use. He is anxious and diaphoretic. Radial pulses are equal and there is no murmur. The ECG shows sinus tachycardia without ST changes.",
    vitals: { temperature: "36.9°C oral", pulse: "112/minute", resp: "22/minute", bp: "158/84 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features count toward his aortic dissection detection risk score?",
        options: [
          "Abrupt tearing chest pain",
          "Age younger than 40 years",
          "Heart rate of 112/minute",
          "Marfan syndrome",
          "Normal ECG without ST changes",
          "Onset while lifting weights",
          "Stopping losartan a year ago",
        ],
        select: 2,
        correct: [0, 3],
        explanation:
          "The score has three categories: high-risk conditions such as Marfan syndrome, high-risk pain that is abrupt, severe or tearing, and high-risk examination findings. He scores 1 for Marfan syndrome and 1 for his pain, a total of 2. His equal pulses and absent murmur add nothing. Tachycardia, age, the trigger, a normal ECG and stopping losartan are not score items.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-aorta",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation?",
        options: [
          "CT angiogram of the aorta",
          "D-dimer to guide the need for imaging",
          "Repeat ECG and serial troponins",
          "Transthoracic echo before any CT",
          "Upright chest X-ray",
        ],
        correct: 0,
        explanation:
          "With a score of 2 he is high risk, so he goes straight to CT angiography. D-dimer is used only to help rule out dissection when the score is 0 or 1. A chest X-ray or transthoracic echo cannot exclude dissection and would delay the definitive test. Serial troponins pursue ACS, which his ECG and history make less likely.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "advised",
      },
      {
        id: "q3",
        kind: "single",
        update: "While he waits for CT, a portable chest X-ray is read as a normal mediastinal width.",
        prompt: "Which of the following is the most appropriate interpretation of this chest X-ray in this patient?",
        options: [
          "It excludes a type A dissection",
          "It is insufficient to exclude dissection",
          "It lowers his score so D-dimer can decide",
          "It makes pneumothorax the leading diagnosis",
          "It shifts the likely diagnosis to ACS",
        ],
        correct: 1,
        explanation:
          "A normal mediastinum is common in acute aortic dissection and does not lower a high pretest probability. The chest X-ray is not part of the risk score, so it cannot move him to a D-dimer strategy. A normal film also shows no pneumothorax. His ECG and history give no new reason to favour ACS.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-aorta",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT shows a Stanford type A dissection from the aortic root to the proximal arch.",
        prompt: "Which of the following is the most appropriate disposition for this patient?",
        options: [
          "Admission to cardiology for medical therapy",
          "Emergency cardiac surgery consultation",
          "ICU admission for blood pressure control",
          "Interventional radiology endograft",
          "Transfer to the cardiology ward",
        ],
        correct: 1,
        explanation:
          "Type A dissection involves the ascending aorta and needs emergency open surgical repair. Heart rate and blood pressure control start at once but only bridge him to the operating room. Medical therapy alone on a ward or in the ICU is the approach for uncomplicated type B dissection. Endovascular grafting is used for complicated type B disease, not the aortic root.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-aorta",
      },
    ],
    sources: [AORTA, ADVISED],
    ...meta,
  },

  /* 18 ------------------------------------------------------------------ */
  {
    id: "chest-pain-18",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Preparing to give a lytic",
    stem:
      "You are working in a rural hospital emergency department with no CT scanner and no catheterization laboratory. The nearest PCI centre is 3 hours away by road. A 68-year-old man presents with severe chest pain that began 1 hour ago. He has long-standing hypertension treated with hydrochlorothiazide. He is diaphoretic. The ECG shows 2 mm ST elevation in II, III and aVF with reciprocal ST depression in aVL. The nurse has prepared tenecteplase.",
    vitals: { temperature: "36.6°C oral", pulse: "88/minute", resp: "20/minute", bp: "172/96 mmHg", o2sat: "96% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following questions about his pain is most important to ask before fibrinolysis?",
        options: [
          "Whether antacids eased the pain",
          "Whether it is worse on deep breathing",
          "Whether it is worse with arm movement",
          "Whether it tore through to his back",
          "Whether it was preceded by exertion",
        ],
        correct: 3,
        explanation:
          "Aortic dissection can extend into the right coronary ostium and produce an inferior STEMI, and a lytic in that setting can be fatal. Tearing pain radiating to the back is the history feature that most raises that concern. Response to antacids does not separate cardiac from other causes. Pleuritic or positional pain and an exertional trigger do not change the decision to give a lytic.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-aorta",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "He says the pain was maximal at onset, felt like tearing and moved to his back. BP is 174/98 mmHg in the right arm and 136/80 mmHg in the left arm.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Inferior STEMI from plaque rupture",
          "Inferior STEMI with right ventricular infarct",
          "Pericarditis with regional ST elevation",
          "Takotsubo syndrome with ST elevation",
          "Type A dissection involving a coronary",
        ],
        correct: 4,
        explanation:
          "Abrupt tearing pain radiating to the back with a 38 mmHg difference in arm systolic pressures points to aortic dissection. Inferior ST elevation in this setting suggests the flap involves the right coronary artery. Plaque rupture or right ventricular infarction does not explain the pain quality or the pressure difference. Reciprocal depression in aVL argues against pericarditis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-aorta",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment decision now?",
        options: [
          "ASA, heparin, then transfer for PCI",
          "Full-dose tenecteplase within 30 minutes",
          "Half-dose tenecteplase and transfer",
          "Nitroglycerin infusion alone, then transfer",
          "Withhold lytics, start IV beta blocker",
        ],
        correct: 4,
        explanation:
          "Suspected dissection is a contraindication to fibrinolysis and anticoagulation. The immediate goal is to lower heart rate first with an IV beta blocker, then blood pressure, and arrange transfer for imaging and surgery. A lytic at any dose, or ASA with heparin, risks catastrophic bleeding into the aortic wall. A vasodilator alone causes reflex tachycardia and more shear on the aorta.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-aorta",
      },
      {
        id: "q4",
        kind: "single",
        update: "A bedside ultrasound shows no pericardial effusion and an aortic root of 4.1 cm. No intimal flap is seen.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Give tenecteplase since no flap is seen",
          "Repeat the ultrasound in 1 hour",
          "Start heparin and observe for 6 hours",
          "Transfer urgently for CT angiography",
          "Treat as STEMI and transfer for PCI",
        ],
        correct: 3,
        explanation:
          "Bedside ultrasound can support a diagnosis of dissection but cannot exclude it, and his root is dilated. He needs urgent transfer for CT angiography and surgical assessment. Giving a lytic or heparin because no flap was seen relies on an insensitive test. Repeating the ultrasound adds little and delays definitive imaging.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-aorta",
      },
    ],
    sources: [AORTA],
    ...meta,
  },

  /* 19 ------------------------------------------------------------------ */
  {
    id: "chest-pain-19",
    topic: "chest-pain",
    title: "Sudden pain during a lecture",
    stem:
      "A 21-year-old man presents to the emergency department with sudden left-sided chest pain and mild shortness of breath that began 6 hours ago while he was sitting in a lecture. The pain was sharp at first and is now a dull ache. He smokes tobacco daily. He has no lung disease and takes no medications. He is tall and thin. Breath sounds are slightly reduced at the left apex, with no crackles. The trachea is midline.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "18/minute", bp: "124/76 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute pericarditis",
          "Community-acquired pneumonia",
          "Musculoskeletal chest wall strain",
          "Primary spontaneous pneumothorax",
          "Pulmonary embolism",
        ],
        correct: 3,
        explanation:
          "Sudden one-sided pain and breathlessness at rest in a tall, thin young smoker with reduced apical breath sounds fits a primary spontaneous pneumothorax. He has no fever or crackles to suggest pneumonia. A chest wall strain does not reduce breath sounds. Pericarditis gives positional central pain, and PE is less likely without risk factors.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "bts-pleural",
      },
      {
        id: "q2",
        kind: "single",
        update: "His ECG is normal. His oxygen saturation stays at 97% on room air.",
        prompt: "Which of the following statements about his normal oxygen saturation is most accurate?",
        options: [
          "It allows discharge without imaging",
          "It argues against pulmonary embolism",
          "It confirms the pneumothorax is small",
          "It does not exclude a large pneumothorax",
          "It rules out tension physiology developing",
        ],
        correct: 3,
        explanation:
          "Young patients compensate well, so saturation can stay normal even with a large pneumothorax. Size and diagnosis need imaging. A normal saturation does not exclude PE, and it gives no protection against later tension physiology.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "bts-pleural",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Chest X-ray shows a left pneumothorax with a 3 cm rim at the apex and no mediastinal shift. His pain is controlled with acetaminophen and he is breathing comfortably.",
        prompt: "Which of the following is the most appropriate management for this patient?",
        options: [
          "Admission for high-flow oxygen therapy",
          "Conservative care with early clinic review",
          "Large-bore chest tube with suction",
          "Needle decompression of the left chest",
          "Surgical pleurodesis this admission",
        ],
        correct: 1,
        explanation:
          "The 2023 BTS guideline bases treatment on symptoms rather than size. A minimally symptomatic primary pneumothorax can be managed conservatively regardless of size, with early review and clear return advice. Needle decompression is for tension, which he does not have. A large-bore tube with suction and first-episode surgery are not indicated. Admission for oxygen alone is not needed when he is comfortable.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "bts-pleural",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following advice most lowers his risk of recurrence?",
        options: [
          "Avoid weightlifting for 6 months",
          "Daily inhaled bronchodilator",
          "Incentive spirometry at home",
          "Sleeping with the head raised",
          "Smoking cessation",
        ],
        correct: 4,
        explanation:
          "Smoking is the main modifiable risk factor for primary spontaneous pneumothorax and its recurrence, so cessation is the key advice. He has no airway disease, so a bronchodilator has no role. Incentive spirometry, head elevation and avoiding weightlifting do not reduce recurrence.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "bts-pleural",
      },
    ],
    sources: [BTS],
    ...meta,
  },

  /* 20 ------------------------------------------------------------------ */
  {
    id: "chest-pain-20",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure three weeks after delivery",
    stem:
      "A 36-year-old woman presents to the emergency department with 1 hour of heavy central chest pressure that began while she was breastfeeding. It spreads to her jaw. She had a vaginal delivery of her second child 3 weeks ago. She has no medical history and takes only a prenatal vitamin. She does not smoke and has no diabetes, hypertension or dyslipidemia. She is diaphoretic. The lungs are clear. An ECG is being recorded.",
    vitals: { temperature: "36.7°C oral", pulse: "98/minute", resp: "18/minute", bp: "132/80 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following medications is most appropriate to give while the ECG is being recorded?",
        options: [
          "ASA 160 mg PO chewed",
          "Clopidogrel 300 mg PO",
          "Enoxaparin 70 mg SC",
          "Ketorolac 15 mg IV",
          "Metoprolol 5 mg IV",
        ],
        correct: 0,
        explanation:
          "Her pain is suspicious for ACS, and chewed ASA should be given early without waiting for the full workup. A single dose is compatible with breastfeeding. Anticoagulant and P2Y12 choices depend on the ECG and the reperfusion plan. NSAIDs such as ketorolac are avoided in suspected ACS. An IV beta blocker is not given before the diagnosis and hemodynamic picture are clear.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ECG shows 3 mm ST elevation in V2 to V5 with reciprocal ST depression in II, III and aVF.",
        prompt: "Which of the following is the most appropriate immediate management?",
        options: [
          "Activate the cath lab for angiography",
          "CT pulmonary angiogram first",
          "Echocardiogram, then decide",
          "Tenecteplase at full dose",
          "Troponin and repeat ECG in 1 hour",
        ],
        correct: 0,
        explanation:
          "Anterior ST elevation with reciprocal change is a STEMI, whatever her age or risk factors. Emergency angiography both treats plaque rupture and identifies other causes seen after pregnancy. Fibrinolysis is not preferred when PCI is available and can extend a spontaneous coronary dissection. Echo, CT or waiting for troponin delays reperfusion.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "Angiography shows a long smooth narrowing of the mid LAD without atherosclerosis, consistent with spontaneous coronary artery dissection.",
        prompt: "Which of the following conditions is most commonly found on screening patients with this diagnosis?",
        options: [
          "Bicuspid aortic valve",
          "Familial hypercholesterolemia",
          "Fibromuscular dysplasia",
          "Marfan syndrome",
          "Systemic lupus erythematosus",
        ],
        correct: 2,
        explanation:
          "Fibromuscular dysplasia of extracoronary arteries is the arteriopathy most often found when patients with spontaneous coronary dissection are screened. Marfan syndrome and lupus are reported but much less often. Familial hypercholesterolemia causes atherosclerotic disease, which her angiogram did not show. Bicuspid valve is linked to aortic, not coronary, dissection.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-scad",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements about chest pain in young postpartum women is most accurate?",
        options: [
          "ACS is unlikely without classic risk factors",
          "Chest pressure postpartum is usually anxiety",
          "Low-risk women need no ECG before discharge",
          "Normal risk profile does not exclude ACS",
          "Only PE needs testing after childbirth",
        ],
        correct: 3,
        explanation:
          "Spontaneous coronary dissection causes ACS mainly in women with few or no traditional risk factors, and pregnancy and the postpartum period are recognized triggers. A clean risk profile therefore does not exclude ACS. Ischemic symptoms need an ECG whatever the risk profile. PE is a real postpartum risk but not the only one.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-scad",
      },
    ],
    sources: [ESC_ACS, SCAD],
    ...meta,
  },

  /* 21 ------------------------------------------------------------------ */
  {
    id: "chest-pain-21",
    topic: "chest-pain",
    alsoTopics: ["dvt-pe"],
    title: "Collapse six weeks after surgery",
    stem:
      "You are working in a rural hospital emergency department with no CT scanner. A 63-year-old man is brought to the emergency department by ambulance after collapsing at home. He had a right hip replacement 6 weeks ago. His 35-day course of enoxaparin prophylaxis ended last week. He has had pleuritic right chest pain and breathlessness since yesterday. He is pale and diaphoretic. The jugular veins are distended. Breath sounds are equal and the lungs are clear. The right calf is swollen.",
    vitals: { temperature: "36.9°C oral", pulse: "128/minute", resp: "30/minute", bp: "82/50 mmHg", o2sat: "88% on 15 L/minute by non-rebreather mask", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shock?",
        options: [
          "Hemorrhage from the surgical site",
          "Massive pulmonary embolism",
          "Pericardial tamponade",
          "Septic shock from the prosthetic joint",
          "Tension pneumothorax",
        ],
        correct: 1,
        explanation:
          "Recent hip replacement, a swollen calf, pleuritic pain, hypoxemia, distended neck veins and hypotension point to a massive PE. Equal breath sounds argue against tension pneumothorax. Hemorrhage causes flat neck veins. He has no fever to suggest joint sepsis. Tamponade also raises the neck veins but does not explain the calf or the hypoxemia.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Bedside ultrasound shows a right ventricle larger than the left with septal flattening and no pericardial effusion. The right femoral vein does not compress. He has no history of stroke, bleeding or recent head injury.",
        prompt: "Which of the following is the most appropriate treatment now?",
        options: [
          "Alteplase 100 mg IV over 2 hours",
          "Apixaban 10 mg PO twice daily",
          "Enoxaparin 90 mg SC, then transfer",
          "Heparin infusion and transfer for CT",
          "Normal saline 3 L IV rapid bolus",
        ],
        correct: 0,
        explanation:
          "He has high-risk PE with shock, and ultrasound shows right ventricular strain and a femoral DVT, so systemic thrombolysis is indicated without waiting for CT. His surgery was 6 weeks ago, outside the 3-week window that the ESC lists as a contraindication. Anticoagulation alone and transfer for imaging do not treat obstructive shock. Large fluid volumes can worsen a failing, dilated right ventricle.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following anticoagulants is preferred alongside thrombolysis in this patient?",
        options: [
          "Apixaban 10 mg PO",
          "Dalteparin 18 000 units SC",
          "Enoxaparin 90 mg SC",
          "Fondaparinux 10 mg SC",
          "Unfractionated heparin IV",
        ],
        correct: 4,
        explanation:
          "In high-risk PE the ESC recommends IV unfractionated heparin with a weight-based bolus. It can be stopped quickly and has a short half-life if bleeding occurs after the lytic. LMWH, fondaparinux and DOACs have not been adequately tested in hypotensive patients and are longer acting. Oral absorption is also unreliable in shock.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pe",
      },
    ],
    sources: [ESC_PE],
    ...meta,
  },

  /* 22 ------------------------------------------------------------------ */
  {
    id: "chest-pain-22",
    topic: "chest-pain",
    title: "Faint at basketball practice",
    stem:
      "A 15-year-old boy is brought to the emergency department by his mother after he fainted during basketball practice. He had chest tightness during sprint drills just before he fell and woke within 30 seconds. Over the past month he has had chest pain with running that settles with rest. His uncle died suddenly at age 32. He takes no medications and denies drug use. A harsh systolic murmur at the left sternal border gets louder when he stands.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "118/68 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Anomalous coronary artery origin",
          "Bicuspid aortic valve stenosis",
          "Hypertrophic cardiomyopathy",
          "Vasovagal syncope",
          "Viral myocarditis",
        ],
        correct: 2,
        explanation:
          "Exertional chest pain and syncope with a family history of sudden death and a murmur that gets louder on standing suggest hypertrophic cardiomyopathy with outflow obstruction. The murmur of aortic stenosis gets softer on standing. An anomalous coronary can cause exertional syncope but gives no murmur. Syncope during exertion is not vasovagal. He has no viral illness or fever to suggest myocarditis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-hcm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of his history most increases the likelihood of this diagnosis?",
        options: [
          "Age of 15 years",
          "Brief recovery after the faint",
          "Participation in team sport",
          "Sudden death of an uncle at 32",
          "No medication or drug use",
        ],
        correct: 3,
        explanation:
          "Hypertrophic cardiomyopathy is usually inherited, and sudden death of a young relative is a major clue and a risk marker. Quick recovery is typical of cardiac syncope too, so it does not help. Age and sport participation do not raise the probability. Having no drug exposure removes a cause but does not point toward this diagnosis.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-hcm",
      },
      {
        id: "q3",
        kind: "menu",
        update: "The ECG shows left ventricular hypertrophy with deep narrow Q waves in II, III and aVF.",
        prompt: "Which of the following bedside manoeuvres would make his murmur softer?",
        options: [
          "Amyl nitrite inhalation",
          "Isometric handgrip",
          "Nitroglycerin 0.4 mg SL",
          "Passive leg raise",
          "Squatting from standing",
          "Standing from squatting",
          "Valsalva strain phase",
        ],
        select: 3,
        correct: [1, 3, 4],
        explanation:
          "The obstructive murmur softens when the left ventricle fills more or afterload rises. Squatting and passive leg raising increase preload, and handgrip increases afterload. Standing, the Valsalva strain phase, amyl nitrite and nitroglycerin reduce preload or afterload and make the murmur louder.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-hcm",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for this patient?",
        options: [
          "Admission with monitoring and echocardiogram",
          "Discharge home with a Holter monitor",
          "Discharge with outpatient echo in 6 weeks",
          "Exercise stress test in the department",
          "Nitroglycerin SL for chest pain as needed",
        ],
        correct: 0,
        explanation:
          "Exertional syncope with suspected hypertrophic cardiomyopathy and a family history of sudden death is high risk for a fatal arrhythmia. He needs monitoring and an echocardiogram before any decision about discharge. Delaying the echo or sending him home with a Holter leaves him unprotected. Exercise testing in the emergency department could provoke syncope. Nitrates worsen outflow obstruction.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-hcm",
      },
    ],
    sources: [HCM],
    ...meta,
  },

  /* 23 ------------------------------------------------------------------ */
  {
    id: "chest-pain-23",
    topic: "chest-pain",
    title: "Pain three days after a vaccine",
    stem:
      "A 19-year-old man presents to the emergency department with 12 hours of constant central chest pain that is worse lying flat. He also feels short of breath climbing stairs. Three days ago he received his second dose of an mRNA COVID-19 vaccine. He has no medical history, takes no medications and denies drug use. There is no family history of heart disease. Heart sounds are normal with no rub. The lungs are clear.",
    vitals: { temperature: "37.6°C oral", pulse: "104/minute", resp: "18/minute", bp: "122/74 mmHg", o2sat: "98% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most raises his pretest probability of myocardial injury?",
        options: [
          "Absence of a family history",
          "Absence of a pericardial rub",
          "mRNA vaccine dose 3 days ago",
          "Normal findings on lung examination",
          "Temperature below 38°C",
        ],
        correct: 2,
        explanation:
          "Myocarditis and pericarditis after mRNA vaccines occur mostly in males aged 12 to 29, after the second dose and usually within a week. He matches every part of that pattern. A pericardial rub is often absent, so its absence does not lower the probability. A negative family history, clear lungs and a low-grade temperature do not raise it.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "cig-covid",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ECG shows sinus tachycardia with diffuse concave ST elevation and PR depression. High-sensitivity troponin I is 1850 ng/L.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute pericarditis alone",
          "Anterior STEMI from plaque rupture",
          "Benign early repolarization",
          "Myopericarditis after vaccination",
          "Pulmonary embolism with strain",
        ],
        correct: 3,
        explanation:
          "Diffuse ST elevation with PR depression and a markedly raised troponin 3 days after a second mRNA dose fits myopericarditis. Isolated pericarditis does not raise troponin this much. Early repolarization does not cause pain or troponin release. Diffuse elevation without reciprocal change argues against a single coronary territory. PE does not produce this ECG pattern.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "cjc-vaccine-myocarditis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this patient?",
        options: [
          "Admission with cardiac monitoring",
          "Discharge on ibuprofen and colchicine",
          "Discharge with cardiology in 1 week",
          "Exercise stress test before discharge",
          "Observe 6 hours, then discharge",
        ],
        correct: 0,
        explanation:
          "A raised troponin shows myocardial involvement, which carries a risk of arrhythmia and ventricular dysfunction. He should be admitted for monitoring and an echocardiogram. Outpatient care with NSAIDs and colchicine suits uncomplicated pericarditis without myocardial injury. Exercise testing is avoided in acute myocarditis.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-myo-peri-2025",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of a pain history best distinguishes pericardial pain from ischemic pain?",
        options: [
          "Associated shortness of breath",
          "Constant pain lasting hours",
          "Onset at rest without exertion",
          "Radiation to the left arm",
          "Relief when sitting forward",
        ],
        correct: 4,
        explanation:
          "Pericardial pain typically worsens lying flat, as his does, and eases sitting forward. Breathlessness occurs in both conditions. Pain at rest and pain lasting hours also occur in ACS. Radiation to the left arm favours ischemia rather than the pericardium.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-myo-peri-2025",
      },
    ],
    sources: [CIG_COVID, CJC_MYO, ESC_MYO_PERI],
    ...meta,
  },

  /* 24 ------------------------------------------------------------------ */
  {
    id: "chest-pain-24",
    topic: "chest-pain",
    title: "Chest pain after a recent admission",
    stem:
      "A 19-year-old woman with sickle cell disease (HbSS) presents to the emergency department with 1 day of left-sided chest pain and cough. She was admitted 3 days ago for a pain crisis in her legs and was discharged yesterday. She takes hydroxyurea and folic acid. Her baseline hemoglobin is 85 g/L. She is uncomfortable and breathing quickly. Crackles are heard at the left base. The examination is otherwise normal.",
    vitals: { temperature: "38.4°C oral", pulse: "118/minute", resp: "28/minute", bp: "116/68 mmHg", o2sat: "91% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Chest X-ray shows a new left lower lobe infiltrate. Hemoglobin is 68 g/L.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute chest syndrome",
          "Community-acquired pneumonia alone",
          "Pulmonary embolism",
          "Rib infarction from vaso-occlusion",
          "Splenic sequestration crisis",
        ],
        correct: 0,
        explanation:
          "A new infiltrate with fever, chest pain, cough and hypoxemia in sickle cell disease defines acute chest syndrome. Infection is a common trigger, but calling it pneumonia alone misses the need for transfusion and close monitoring. Rib infarction does not produce an infiltrate. Splenic sequestration causes a falling hemoglobin with an enlarging spleen, not lung findings. PE does not explain a new infiltrate with fever as well.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "canhaem-sickle",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of her history most increases her risk of this complication?",
        options: [
          "Baseline hemoglobin of 85 g/L",
          "Daily folic acid use",
          "Female sex and young age",
          "Hydroxyurea therapy",
          "Recent pain crisis admission",
        ],
        correct: 4,
        explanation:
          "Acute chest syndrome often develops a few days into a vaso-occlusive pain crisis, when splinting and opioids reduce ventilation. Her admission 3 days ago puts her in that window. Hydroxyurea lowers the rate of acute chest syndrome. A baseline hemoglobin of 85 g/L is typical of HbSS. Folic acid, sex and age do not raise her risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "nhlbi-sickle",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following treatments are most appropriate for her now?",
        options: [
          "Ceftriaxone plus azithromycin",
          "Dexamethasone 10 mg IV",
          "Furosemide 40 mg IV",
          "Incentive spirometry",
          "Normal saline 2 L IV bolus",
          "Simple red cell transfusion",
          "Supplemental oxygen",
          "Therapeutic enoxaparin SC",
        ],
        select: 4,
        correct: [0, 3, 5, 6],
        explanation:
          "The expert panel recommends an IV cephalosporin with an oral macrolide, incentive spirometry and oxygen for saturation below 95%. Her hemoglobin has fallen 17 g/L below baseline, which exceeds the 10 g/L drop at which simple transfusion is recommended. Large fluid boluses can cause pulmonary edema and worsen the syndrome. Steroids are linked to rebound pain crises. She has no indication for anticoagulation or diuresis.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "nhlbi-sickle",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings would most indicate the need for exchange transfusion?",
        options: [
          "Hemoglobin rising to 90 g/L",
          "Oxygen saturation under 90% on oxygen",
          "Pain score falling to 4 of 10",
          "Reticulocyte count of 8%",
          "Temperature of 38.5°C",
        ],
        correct: 1,
        explanation:
          "Urgent exchange transfusion is recommended when acute chest syndrome progresses, such as saturation below 90% despite oxygen, worsening respiratory distress or spreading infiltrates. A rising hemoglobin and falling pain score show improvement. Persistent fever and a raised reticulocyte count are common and do not on their own mark progression.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "nhlbi-sickle",
      },
    ],
    sources: [CANHAEM, SICKLE],
    ...meta,
  },

  /* 25 ------------------------------------------------------------------ */
  {
    id: "chest-pain-25",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure on the day of a funeral",
    stem:
      "A 71-year-old woman presents to the emergency department 2 hours after her husband's funeral with central chest pressure and breathlessness. The pain began while she was speaking at the service. She has hypertension and osteoporosis and takes amlodipine and alendronate. She has never smoked. She is tearful and diaphoretic. The lungs are clear. The ECG shows 2 mm ST elevation in I and V2 to V5 without reciprocal ST depression.",
    vitals: { temperature: "36.6°C oral", pulse: "102/minute", resp: "22/minute", bp: "108/70 mmHg", o2sat: "95% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "A colleague suggests stress cardiomyopathy because the pain followed intense grief.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Anxiolytic and reassess in 1 hour",
          "Beta blocker and cardiology admission",
          "Echo to confirm apical ballooning",
          "Serial troponins and repeat ECG",
          "Urgent coronary angiography",
        ],
        correct: 4,
        explanation:
          "Takotsubo syndrome cannot be separated from anterior STEMI on the history or ECG. Patients with ST elevation need urgent coronary angiography to exclude occlusion first. An emotional trigger does not make the diagnosis. An echo may show apical ballooning in both conditions. Anxiolytics, serial troponins or admission without angiography delay treatment of a possible occlusion.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "takotsubo",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following medications is most appropriate to give before she goes for angiography?",
        options: [
          "ASA 160 mg PO chewed",
          "Furosemide 40 mg IV",
          "Lorazepam 1 mg SL",
          "Metoprolol 5 mg IV",
          "Tenecteplase 35 mg IV",
        ],
        correct: 0,
        explanation:
          "ASA is given as soon as ACS is suspected, and she is going for primary PCI. The ESC suggests IV beta blockers at primary PCI only when systolic BP is above 120 mmHg without heart failure, and hers is 108 mmHg. Fibrinolysis is not used when primary PCI is available. Her lungs are clear, so furosemide is not indicated. An anxiolytic does not treat ischemia.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Angiography shows no obstructive coronary disease. Ventriculography shows apical ballooning. BP falls to 84/52 mmHg and a new harsh systolic murmur is heard at the left sternal border.",
        prompt: "Which of the following is the most likely cause of her hypotension?",
        options: [
          "Acute aortic dissection",
          "Outflow tract obstruction",
          "Pericardial tamponade",
          "Retroperitoneal bleeding",
          "Right ventricular infarction",
        ],
        correct: 1,
        explanation:
          "In takotsubo syndrome the hyperkinetic base can obstruct the left ventricular outflow tract, causing hypotension and a new systolic murmur. Tamponade and retroperitoneal bleeding cause hypotension but not a new murmur. Her coronaries are unobstructed, so right ventricular infarction is unlikely. Nothing in the history suggests dissection.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "takotsubo",
      },
    ],
    sources: [TAKOTSUBO, ESC_ACS],
    ...meta,
  },

  /* 26 ------------------------------------------------------------------ */
  {
    id: "chest-pain-26",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Discomfort between dialysis runs",
    stem:
      "A 66-year-old man on hemodialysis three times weekly presents to the emergency department with 4 hours of intermittent left chest discomfort. It began at rest this morning and has come and gone since. He has diabetes and hypertension and had a stent placed in his right coronary artery 4 years ago. His last dialysis was 2 days ago. The ECG shows left ventricular hypertrophy with repolarization changes, unchanged from an ECG 6 months ago.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "18/minute", bp: "164/90 mmHg", o2sat: "96% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "High-sensitivity troponin I is 62 ng/L. A value at a clinic visit 3 months ago was 58 ng/L. The male 99th percentile for the assay is 34 ng/L.",
        prompt: "Which of the following is the most appropriate interpretation of this troponin result?",
        options: [
          "It confirms NSTEMI above the 99th percentile",
          "It excludes MI given his baseline",
          "It needs a repeat value to assess for a rise",
          "It reflects renal clearance and needs no follow-up",
          "It should be adjusted for his creatinine",
        ],
        correct: 2,
        explanation:
          "Chronic troponin elevation is common in dialysis patients, so a single value above the 99th percentile does not diagnose MI. A single value near his baseline also does not exclude MI, because acute infarction is shown by a rise or fall. A repeat measurement is needed. Troponin is not corrected for creatinine. Calling a raised troponin renal and ignoring it misses MI in a high-risk group.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following alone gives 2 points in the risk factor item of the HEART score?",
        options: [
          "Age of 66 years",
          "Left ventricular hypertrophy",
          "Prior coronary stent",
          "Treated diabetes mellitus",
          "Treated hypertension",
        ],
        correct: 2,
        explanation:
          "Known atherosclerotic disease, such as a prior MI or coronary revascularization, scores 2 in the risk factor item regardless of other factors. A single classic risk factor such as diabetes or hypertension scores 1. Age is scored in its own item. Left ventricular hypertrophy is scored under the ECG item.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "heart-score",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of his pain history most suggests an acute coronary syndrome?",
        options: [
          "Brief pains lasting seconds",
          "Pain eased by an antacid",
          "Pain worse with inspiration",
          "Recurrent pain starting at rest",
          "Sharp pain on arm movement",
        ],
        correct: 3,
        explanation:
          "New angina that comes and goes at rest is a hallmark of unstable angina, as in his case. Pain lasting only seconds, pleuritic pain and pain on arm movement lower the likelihood of ischemia but do not exclude it. Relief with an antacid has no diagnostic value.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        update: "At 1 hour the troponin is 118 ng/L. The ECG is unchanged and he is now pain free. Potassium is 5.4 mmol/L.",
        prompt: "Which of the following is the most appropriate management now?",
        options: [
          "Activate the cath lab now",
          "Discharge with outpatient stress test",
          "Emergency dialysis, then recheck",
          "Fibrinolysis with tenecteplase",
          "NSTEMI care with cardiology admission",
        ],
        correct: 4,
        explanation:
          "A rise from 62 to 118 ng/L in 1 hour, a change of 56 ng/L, shows acute myocardial injury, and with his symptoms this is NSTEMI. He needs antithrombotic therapy dosed for dialysis and cardiology admission for angiography. He has no ST elevation and is pain free, so immediate cath lab activation and fibrinolysis are not indicated. A potassium of 5.4 mmol/L does not need emergency dialysis and does not explain the troponin rise.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
    ],
    sources: [ESC_ACS, HEART_SCORE],
    ...meta,
  },

  /* 27 ------------------------------------------------------------------ */
  {
    id: "chest-pain-27",
    topic: "chest-pain",
    title: "Pain that settled overnight",
    stem:
      "A 49-year-old woman presents to the emergency department at 08:00 with chest pain that began at 22:00 last evening while she was watching television. It was a central pressure that lasted about 2 hours and settled on its own. She has had no pain since. She has hypertension treated with ramipril. She does not smoke and has no diabetes. The examination is normal. The ECG is normal.",
    vitals: { temperature: "36.6°C oral", pulse: "76/minute", resp: "16/minute", bp: "138/84 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history is most important for interpreting a single troponin result?",
        options: [
          "Character of the pain",
          "Presence of radiation",
          "Relation to exertion",
          "Time of pain onset",
          "Treatment with ramipril",
        ],
        correct: 3,
        explanation:
          "Troponin takes time to rise after myocardial injury, so a single value can only be interpreted against the time since symptoms began. Her pain began 10 hours before arrival. Character, radiation and exertional relation shape pretest probability but do not change how a single troponin is read. Ramipril does not affect troponin.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "single",
        update: "High-sensitivity troponin T drawn at 08:15 is below 5 ng/L, the very low threshold for this assay.",
        prompt: "Which of the following is the most appropriate interpretation of this result?",
        options: [
          "Another troponin is needed in 1 hour",
          "Myocardial injury is present but mild",
          "Serial troponins over 6 hours are needed",
          "Single-sample rule-out of MI applies",
          "The result is uninterpretable without a delta",
        ],
        correct: 3,
        explanation:
          "In the ESC 0 hour and 1 hour algorithm, a very low high-sensitivity troponin at presentation rules out MI when the pain began more than 3 hours earlier. Her pain began about 10 hours before the sample. A 1-hour repeat or 6 hours of serial testing is needed for early presenters or values above the very low threshold. A value below 5 ng/L does not indicate myocardial injury.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following changes to her case would make discharge after a single troponin unsafe?",
        options: [
          "Age of 55 years",
          "Hypertension on ramipril",
          "New ST depression on the ECG",
          "Pain onset 1 hour before the draw",
          "Prior normal stress test",
          "Treated dyslipidemia",
        ],
        select: 2,
        correct: [2, 3],
        explanation:
          "A troponin drawn 1 hour after onset may not have risen yet, so single-sample rule-out does not apply. New ischemic ST depression makes unstable angina or NSTE-ACS likely even with a normal troponin. Age, treated risk factors and a past normal stress test change her pretest probability but not the validity of the single-sample rule.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        update: "After reviewing her account again, you judge her history as moderately suspicious for ACS.",
        prompt: "Which of the following is her HEART score based on the available findings?",
        options: [
          "1",
          "2",
          "3",
          "4",
          "5",
        ],
        correct: 2,
        explanation:
          "History moderately suspicious scores 1. A normal ECG scores 0. Age 45 to 64 scores 1. One or two risk factors, here hypertension alone, score 1. A troponin at or below the normal limit scores 0. The total is 1 + 0 + 1 + 1 + 0 = 3, which is low risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "heart-score",
      },
    ],
    sources: [ESC_ACS, HEART_SCORE],
    ...meta,
  },

  /* 28 ------------------------------------------------------------------ */
  {
    id: "chest-pain-28",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Tightness on the office stairs",
    stem:
      "A 42-year-old woman presents to the emergency department with 3 hours of central chest tightness that began while she was climbing stairs at work. It eased after 20 minutes of rest but returned an hour later while she was seated. She has systemic lupus erythematosus treated with hydroxychloroquine for 10 years. She had preeclampsia in her only pregnancy and has regular menstrual periods. She does not smoke and is not diabetic. The examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "18/minute", bp: "146/92 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of her history increase her risk of coronary artery disease?",
        options: [
          "Age of 42 years",
          "Female sex before menopause",
          "Hydroxychloroquine use",
          "Nonsmoking status",
          "Past preeclampsia",
          "Systemic lupus erythematosus",
        ],
        select: 2,
        correct: [4, 5],
        explanation:
          "Systemic inflammatory disease such as lupus accelerates atherosclerosis, and preeclampsia is a recognized female-specific risk enhancer. Both raise her risk well above what her age and sex suggest. Premenopausal female sex, her age and not smoking lower the baseline risk. Hydroxychloroquine is not a coronary risk factor.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "single",
        update: "The first ECG is normal. High-sensitivity troponin I at 0 hours is 12 ng/L. The female 99th percentile is 16 ng/L.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Discharge with ASA and clinic follow-up",
          "Discharge with outpatient stress test",
          "Exercise stress test in the department",
          "Repeat troponin and ECG at 1 to 2 hours",
          "Treat as lupus pericarditis with NSAID",
        ],
        correct: 3,
        explanation:
          "Her pain began 3 hours ago and her first troponin is detectable, so a single value cannot rule out MI. A protocol repeat at 1 to 2 hours with a repeat ECG is needed. Her pain returned at rest, so exercise testing now is unsafe. Discharge rests on one test. She has no pleuritic or positional features to suggest pericarditis.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "While she waits for the second troponin, the tightness returns and she is diaphoretic.",
        prompt: "Which of the following is the most appropriate first action?",
        options: [
          "Draw the 1-hour troponin early",
          "Morphine 5 mg IV and reassess",
          "Order a CT pulmonary angiogram",
          "Repeat 12-lead ECG now",
          "Wait for the scheduled troponin",
        ],
        correct: 3,
        explanation:
          "Recurrent pain should prompt an immediate repeat ECG, which can show new ST elevation or depression that changes management within minutes. An early troponin draw adds little and loses the timing of the protocol. Morphine can mask ongoing ischemia. Nothing in her presentation suggests PE.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
    ],
    sources: [AHA_CP, ESC_ACS],
    ...meta,
  },

  /* 29 ------------------------------------------------------------------ */
  {
    id: "chest-pain-29",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Crushing pain with a wide QRS",
    stem:
      "A 73-year-old man is brought to the emergency department by ambulance with 50 minutes of crushing central chest pain and sweating. He has hypertension and heart failure, and a left bundle branch block was present on an ECG 1 year ago. He takes ramipril, bisoprolol and furosemide. The paramedics gave ASA 160 mg chewed. He is pale and clammy. There are fine crackles at both lung bases. The hospital has a catheterization laboratory on site.",
    vitals: { temperature: "36.5°C oral", pulse: "96/minute", resp: "24/minute", bp: "104/66 mmHg", o2sat: "93% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The ECG shows left bundle branch block with 2 mm ST elevation in V5 and V6, in the same direction as the QRS.",
        prompt: "Which of the following is the most appropriate interpretation of this ECG?",
        options: [
          "Expected secondary change of old LBBB",
          "Hyperkalemia until proven otherwise",
          "Nondiagnostic, await serial troponins",
          "Occlusion MI by Sgarbossa criteria",
          "Rate-related repolarization change",
        ],
        correct: 3,
        explanation:
          "In LBBB the ST segment normally moves opposite to the main QRS deflection. Concordant ST elevation of 1 mm or more is a Sgarbossa criterion that is highly specific for acute coronary occlusion. Secondary change from an old LBBB is discordant, not concordant. His heart rate of 96/minute does not cause concordant elevation. Nothing in the case suggests hyperkalemia.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "modified-sgarbossa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his known old LBBB is most accurate?",
        options: [
          "It excludes new ischemia on this ECG",
          "It makes the ECG uninterpretable for MI",
          "It means STEMI criteria cannot apply",
          "It requires troponin before reperfusion",
          "It still permits an occlusion MI diagnosis",
        ],
        correct: 4,
        explanation:
          "An old LBBB does not make the ECG uninterpretable. Sgarbossa criteria and the Smith modification identify acute occlusion in LBBB. The ESC advises a primary PCI strategy for LBBB with symptoms suggesting ongoing ischemia, without waiting for troponin. A known LBBB therefore neither excludes ischemia nor delays reperfusion.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate management now?",
        options: [
          "Activate the cath lab for primary PCI",
          "CCU admission and serial troponins",
          "Furosemide 40 mg IV and reassess",
          "Nitroglycerin infusion, then angiography",
          "Tenecteplase 45 mg IV now",
        ],
        correct: 0,
        explanation:
          "He has ongoing pain with ECG criteria for acute occlusion, and the hospital can do primary PCI now. Admission for serial troponins or treating his crackles alone delays reperfusion. A lytic is inferior to timely primary PCI when a cath lab is on site. Delaying angiography for a nitroglycerin infusion is not justified, and his systolic BP of 104 mmHg leaves little room for it.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following ECG findings in a patient with LBBB meet the modified Sgarbossa criteria?",
        options: [
          "Concordant ST depression of 1 mm in V2",
          "Concordant ST elevation of 2 mm in V5",
          "Discordant STE 3 mm, S wave 20 mm in V3",
          "Discordant STE 6 mm, S wave 20 mm in V3",
          "Discordant T wave inversion in V6",
          "Left axis deviation",
          "QRS duration of 160 ms",
          "QS complexes in V1 and V2",
        ],
        select: 3,
        correct: [0, 1, 3],
        explanation:
          "The modified rule is positive with concordant ST elevation of 1 mm or more, concordant ST depression of 1 mm or more in V1 to V3, or discordant ST elevation at least 25% of the preceding S wave depth. A 6 mm elevation after a 20 mm S wave gives a ratio of 6 / 20 = 0.30, which meets the cutoff. A 3 mm elevation gives 3 / 20 = 0.15, which does not. Discordant T wave inversion, left axis deviation, a wide QRS and QS complexes in V1 and V2 are expected in LBBB.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "modified-sgarbossa",
      },
    ],
    sources: [SGARBOSSA, ESC_ACS],
    ...meta,
  },

  /* 30 ------------------------------------------------------------------ */
  {
    id: "chest-pain-30",
    topic: "chest-pain",
    title: "Burning band around the chest",
    stem:
      "A 76-year-old woman presents to the emergency department with 2 days of burning pain in a band from her left mid back around to below her left breast. The pain is constant, worse when her clothing touches the skin and not related to exertion. She has hypertension and type 2 diabetes and takes metformin and amlodipine. She lives alone and walks daily. The skin looks normal. Light touch over the band reproduces the burning.",
    vitals: { temperature: "36.9°C oral", pulse: "82/minute", resp: "16/minute", bp: "152/84 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her pain history best supports a nerve root cause?",
        options: [
          "Absence of an exertional trigger",
          "Band-like pain in one dermatome",
          "Onset while at rest",
          "Pain radiating to the left arm",
          "Pain worse with deep breathing",
        ],
        correct: 1,
        explanation:
          "Pain confined to a band from back to front on one side follows a thoracic dermatome, which is typical of a nerve root cause such as the prodrome of herpes zoster. Pain unrelated to exertion or starting at rest lowers the odds of stable angina but does not point to a nerve root. Pleuritic pain suggests the pleura or pericardium. Radiation to the arm favours ischemia.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "zoster",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Discharge with gabapentin for neuralgia",
          "ECG and troponin before any diagnosis",
          "Empiric valacyclovir and discharge",
          "Outpatient MRI of the thoracic spine",
          "Topical lidocaine and follow-up in 1 week",
        ],
        correct: 1,
        explanation:
          "Zoster pain can precede the rash by days, so a normal skin examination leaves the cause uncertain. In an older woman with diabetes and hypertension, ACS must be excluded first with an ECG and troponin. Treating as neuralgia or presumed zoster before that risks missing MI. Spine imaging is not needed without red flags.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of her history most increases her pretest probability of ACS?",
        options: [
          "Constant burning quality",
          "Daily walking routine",
          "Diabetes and older age",
          "Normal skin examination",
          "Pain reproduced by light touch",
        ],
        correct: 2,
        explanation:
          "Diabetes and age over 65 both raise the prevalence of coronary disease and the chance of an atypical presentation. A normal skin examination does not raise the probability of ACS. Burning quality and reproduction by touch lower the likelihood somewhat but do not exclude ACS. Regular walking does not raise her risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-chest-pain",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Her ECG and two high-sensitivity troponins are normal. Two days later she returns with grouped vesicles on a red base in the same band. They appeared this morning. Her creatinine is normal.",
        prompt: "Which of the following is the most appropriate treatment for this patient?",
        options: [
          "Acyclovir 400 mg PO five times daily",
          "Famciclovir 250 mg PO three times daily",
          "Prednisone 50 mg PO daily alone",
          "Valacyclovir 1 g PO three times daily",
          "Valacyclovir 500 mg PO twice daily",
        ],
        correct: 3,
        explanation:
          "Herpes zoster in an older adult should be treated with an antiviral started within 72 hours of rash onset, and valacyclovir 1 g three times daily for 7 days is a standard regimen. The acyclovir, famciclovir and lower valacyclovir doses listed are below the zoster doses of 800 mg five times daily, 500 mg three times daily and 1 g three times daily. Steroids alone are not antiviral treatment.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "zoster",
      },
    ],
    sources: [ZOSTER, AHA_CP],
    ...meta,
  },

  /* 31 ------------------------------------------------------------------ */
  {
    id: "chest-pain-31",
    topic: "chest-pain",
    alsoTopics: ["dvt-pe"],
    title: "Pleuritic pain at 24 weeks",
    stem:
      "A 31-year-old woman who is 24 weeks pregnant presents to the emergency department with 1 day of right-sided pleuritic chest pain and mild shortness of breath on exertion. She has no cough, hemoptysis or leg symptoms. This is her first pregnancy, and it has been uncomplicated. She has no personal or family history of blood clots. The lungs are clear. The legs are symmetrical and nontender.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "18/minute", bp: "112/68 mmHg", o2sat: "98% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most increases her pretest probability of PE?",
        options: [
          "Absence of leg symptoms",
          "Current pregnancy at 24 weeks",
          "Heart rate of 96/minute",
          "Mild exertional dyspnea",
          "Pleuritic quality of pain",
        ],
        correct: 1,
        explanation:
          "Pregnancy raises the risk of venous thromboembolism several fold, and it is her only clear risk factor. A pulse of 96/minute and mild exertional breathlessness are common in normal pregnancy. Pleuritic pain has many causes. Absent leg symptoms lower rather than raise the probability.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about D-dimer testing in this patient is most accurate?",
        options: [
          "It cannot be used because pregnancy raises it",
          "It is only useful after 36 weeks",
          "It may exclude PE using pregnancy-adapted YEARS",
          "It should replace compression ultrasound",
          "It uses the age-adjusted cutoff",
        ],
        correct: 2,
        explanation:
          "The pregnancy-adapted YEARS algorithm safely excluded PE with D-dimer in many pregnant women. D-dimer rises through pregnancy, so it is most useful earlier in gestation, not only after 36 weeks. Compression ultrasound is used when there are leg symptoms, not replaced by D-dimer. The age-adjusted cutoff applies to patients over 50.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "years-pregnancy",
      },
      {
        id: "q3",
        kind: "single",
        update: "She has none of the three YEARS items. D-dimer is 780 ng/mL FEU.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Perfusion lung scan",
          "Therapeutic LMWH until imaging",
          "No imaging, PE considered excluded",
        ],
        correct: 4,
        explanation:
          "With no YEARS items, PE is excluded when the D-dimer is below 1000 ng/mL, and hers is 780 ng/mL. No imaging or anticoagulation is needed. Compression ultrasound is used only for women with leg symptoms. CT or perfusion scanning would expose her and the fetus to radiation without benefit.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "years-pregnancy",
      },
      {
        id: "q4",
        kind: "single",
        update: "Later, a woman at 30 weeks of pregnancy has the same symptoms plus hemoptysis. She has no leg symptoms. Her D-dimer is also 780 ng/mL FEU.",
        prompt: "Which of the following is the most appropriate next step for this second patient?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Discharge with obstetric follow-up",
          "Echocardiogram to assess the RV",
          "Repeat D-dimer in 24 hours",
        ],
        correct: 1,
        explanation:
          "Hemoptysis is a YEARS item, so her D-dimer threshold falls to 500 ng/mL, and 780 ng/mL is above it. She needs CT pulmonary angiography. Compression ultrasound comes first only when there are leg symptoms. Repeating the D-dimer or discharging her leaves PE unexcluded. An echo cannot rule out PE in a stable patient.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "years-pregnancy",
      },
    ],
    sources: [ESC_PE, YEARS_PREG],
    ...meta,
  },

  /* 32 ------------------------------------------------------------------ */
  {
    id: "chest-pain-32",
    topic: "chest-pain",
    alsoTopics: ["dvt-pe"],
    title: "Pleuritic pain after a bus tour",
    stem:
      "A 78-year-old man presents to the emergency department with 2 days of left-sided pleuritic chest pain. He has no shortness of breath, hemoptysis or leg swelling. He took a 9-hour bus trip 1 week ago. He has hypertension and osteoarthritis and takes hydrochlorothiazide. He has no history of cancer, recent surgery or blood clots. Pressing on the left lower ribs reproduces part of the pain. The lungs are clear.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "18/minute", bp: "148/82 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following explains why the PERC rule cannot be used to exclude PE in him?",
        options: [
          "Age 50 years or older",
          "Hypertension treated with a diuretic",
          "Oxygen saturation of 96%",
          "Recent long-distance travel",
          "Reproducible chest wall pain",
        ],
        correct: 0,
        explanation:
          "PERC requires age under 50, and he is 78, so he fails the rule and needs further testing. A saturation of 96% meets the PERC threshold of 95% or more. Travel, hypertension and chest wall tenderness are not PERC items.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "perc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his chest wall tenderness is most accurate?",
        options: [
          "It confirms costochondritis",
          "It does not exclude PE",
          "It lowers his Wells score by 3",
          "It makes PERC applicable",
          "It removes the need for D-dimer",
        ],
        correct: 1,
        explanation:
          "Chest wall tenderness is found in some patients with PE, so it does not exclude the diagnosis. It does not confirm costochondritis. It is not a Wells or PERC item, so it cannot change his score or make PERC usable. It does not replace the D-dimer.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "perc",
      },
      {
        id: "q3",
        kind: "single",
        update: "His Wells score is 0. D-dimer is 690 ng/mL FEU. The laboratory cutoff is 500 ng/mL FEU.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Bilateral leg ultrasound",
          "CT pulmonary angiogram",
          "Repeat D-dimer in 24 hours",
          "Ventilation-perfusion scan",
          "No imaging, PE ruled out",
        ],
        correct: 4,
        explanation:
          "For patients over 50 with PE unlikely, the age-adjusted cutoff is age x 10 ng/mL. His cutoff is 78 x 10 = 780 ng/mL, and 690 ng/mL is below it, so PE is excluded without imaging. Using the fixed 500 ng/mL cutoff would send him for imaging he does not need. Repeating the D-dimer adds nothing.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "adjust-pe",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following new features would most increase concern for PE in this patient?",
        options: [
          "Gradual onset over days",
          "New unexplained breathlessness",
          "Pain on twisting the trunk",
          "Pain relieved by acetaminophen",
          "Recent lifting of heavy luggage",
        ],
        correct: 1,
        explanation:
          "Unexplained new dyspnea is the most common symptom of PE and would raise his pretest probability. Pain on twisting, a lifting injury and relief with acetaminophen point toward a musculoskeletal cause but do not exclude PE. Gradual onset does not favour PE.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-pe",
      },
    ],
    sources: [PERC, ADJUST_PE, ESC_PE],
    ...meta,
  },

  /* 33 ------------------------------------------------------------------ */
  {
    id: "chest-pain-33",
    topic: "chest-pain",
    alsoTopics: ["dvt-pe"],
    title: "Breathless during chemotherapy",
    stem:
      "A 58-year-old woman presents to the emergency department with 2 days of right-sided pleuritic chest pain and breathlessness on exertion. She has metastatic gastric cancer with the primary tumour still in place. She receives chemotherapy every 2 weeks through a port, most recently 5 days ago. She has no hemoptysis, recent surgery or previous clots. The right calf is 3 cm larger than the left and tender along the deep veins.",
    vitals: { temperature: "37.4°C oral", pulse: "108/minute", resp: "22/minute", bp: "118/72 mmHg", o2sat: "92% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "After reviewing the history and examination, you judge PE to be the most likely diagnosis.",
        prompt: "Which of the following is her Wells score for pulmonary embolism?",
        options: [
          "4.5 points",
          "6 points",
          "7.5 points",
          "8.5 points",
          "10 points",
        ],
        correct: 3,
        explanation:
          "Clinical signs of DVT score 3. PE as the most likely diagnosis scores 3. A heart rate over 100/minute scores 1.5. Active cancer scores 1. The total is 3 + 3 + 1.5 + 1 = 8.5, so PE is likely. She has no hemoptysis, prior clot or recent surgery to add.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "wells-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Chest X-ray, then decide on CT",
          "CT pulmonary angiogram",
          "D-dimer to guide imaging",
          "Echocardiogram before any CT",
          "Repeat Wells score in 6 hours",
        ],
        correct: 1,
        explanation:
          "With PE likely by Wells, she goes straight to CT pulmonary angiography. A D-dimer cannot exclude PE at this probability and is often raised in cancer. A chest X-ray does not decide whether CT is needed. An echo does not exclude PE in a normotensive patient. Waiting to rescore delays diagnosis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT shows bilateral segmental PE with a normal right ventricle. Creatinine is 70 umol/L and platelets are 142 x 10^9/L. She has no bleeding.",
        prompt: "Which of the following is the most appropriate anticoagulant for this patient?",
        options: [
          "Apixaban 10 mg PO twice daily",
          "Dalteparin 12 500 units SC daily",
          "Edoxaban 60 mg PO daily",
          "Rivaroxaban 15 mg PO twice daily",
          "Warfarin 5 mg PO daily",
        ],
        correct: 1,
        explanation:
          "The Canadian consensus prefers LMWH for cancer-associated thrombosis with an unresected luminal gastrointestinal tumour, because DOACs raised the rate of GI bleeding in these patients. Dalteparin 200 units/kg daily for 61 kg is 12 200 units, given as the 12 500 unit syringe. DOACs suit other cancers with low bleeding risk. Warfarin is less effective than LMWH in cancer and needs overlap with a parenteral drug.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "cat-canada",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements about a D-dimer test for her at presentation is most accurate?",
        options: [
          "It can exclude PE if negative",
          "It is needed before CT",
          "It is not useful at this probability",
          "It should use an age-adjusted cutoff",
          "It will be normal in cancer",
        ],
        correct: 2,
        explanation:
          "When PE is likely, a negative D-dimer does not lower the probability enough to skip imaging, so the ESC advises going straight to CT. D-dimer is often raised in active cancer rather than normal. The age-adjusted cutoff applies to patients over 50 with PE unlikely.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-pe",
      },
    ],
    sources: [WELLS, ESC_PE, CAT_CANADA],
    ...meta,
  },

  /* 34 ------------------------------------------------------------------ */
  {
    id: "chest-pain-34",
    topic: "chest-pain",
    title: "Tightness on the stairs",
    stem:
      "An 81-year-old man presents to the emergency department with chest tightness that began while he was climbing two flights of stairs 1 hour ago. He had to sit down and felt faint but did not lose consciousness. He has had similar tightness with exertion for 3 months, now coming on with less effort. He has hypertension and dyslipidemia. There is a harsh late-peaking systolic murmur at the right upper sternal border radiating to the carotids, and the second heart sound is soft.",
    vitals: { temperature: "36.6°C oral", pulse: "78/minute", resp: "18/minute", bp: "126/88 mmHg", o2sat: "96% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history is most concerning?",
        options: [
          "Age over 80 years",
          "Long-standing dyslipidemia",
          "Near-fainting with exertion",
          "Relief of pain with rest",
          "Symptoms for 3 months",
        ],
        correct: 2,
        explanation:
          "Presyncope on exertion with a murmur of aortic stenosis signals a fixed obstruction that cannot raise output with effort, and it predicts sudden death. A 3-month history and relief with rest are typical of stable angina and carry less immediate risk. Age and dyslipidemia raise baseline risk but are not warning symptoms.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-valve",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely underlying cause of his symptoms?",
        options: [
          "Acute aortic dissection",
          "Hypertrophic cardiomyopathy",
          "Mitral regurgitation",
          "Pulmonary embolism",
          "Severe aortic stenosis",
        ],
        correct: 4,
        explanation:
          "Exertional angina and presyncope with a harsh late-peaking murmur at the right upper sternal border radiating to the carotids and a soft second heart sound point to severe aortic stenosis. The murmur of hypertrophic cardiomyopathy is loudest at the left sternal border and does not radiate to the carotids. Mitral regurgitation gives a holosystolic murmur at the apex. His exertional pattern does not suggest dissection or PE.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-valve",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows left ventricular hypertrophy with 1 mm ST depression in V5 and V6. He still has tightness.",
        prompt: "Which of the following medications should be given with the most caution in this patient?",
        options: [
          "Acetaminophen 1 g PO",
          "ASA 160 mg PO chewed",
          "Nitroglycerin 0.4 mg SL",
          "Ondansetron 4 mg IV",
          "Pantoprazole 40 mg IV",
        ],
        correct: 2,
        explanation:
          "In severe aortic stenosis the output is fixed, and a vasodilator such as nitroglycerin can drop preload and blood pressure sharply and cause syncope. If used at all, it needs a low dose and close monitoring. ASA is appropriate for possible ischemia. Acetaminophen, ondansetron and pantoprazole have no important hemodynamic effect.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-valve",
      },
    ],
    sources: [VALVE],
    ...meta,
  },

  /* 35 ------------------------------------------------------------------ */
  {
    id: "chest-pain-35",
    topic: "chest-pain",
    title: "Unable to lie flat",
    stem:
      "A 63-year-old woman presents to the emergency department with 1 week of dull central chest pain and increasing shortness of breath. Since yesterday she cannot lie flat. She has metastatic lung adenocarcinoma diagnosed 4 months ago. She is anxious and sitting upright. The jugular veins are distended to the angle of the jaw. Heart sounds are muffled. The lungs are clear. Her systolic BP falls by 18 mmHg on inspiration.",
    vitals: { temperature: "37.1°C oral", pulse: "124/minute", resp: "26/minute", bp: "92/70 mmHg", o2sat: "94% on room air", weight: "56 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Cardiac tamponade",
          "Malignant pleural effusion",
          "Massive pulmonary embolism",
          "Superior vena cava syndrome",
          "Tension pneumothorax",
        ],
        correct: 0,
        explanation:
          "Hypotension, distended neck veins and muffled heart sounds form Beck's triad, and an inspiratory fall in systolic pressure of 18 mmHg is pulsus paradoxus. With known metastatic lung cancer, malignant pericardial effusion with tamponade is most likely. Her clear lungs argue against a large pleural effusion or pneumothorax. SVC syndrome causes facial swelling, not pulsus. Massive PE is possible in cancer but does not muffle the heart sounds.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pericardial",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate next for this patient?",
        options: [
          "Bedside echocardiography",
          "Chest X-ray, PA and lateral",
          "CT pulmonary angiogram",
          "D-dimer with age cutoff",
          "Serial troponin measurement",
        ],
        correct: 0,
        explanation:
          "Echocardiography confirms a pericardial effusion and shows signs of tamponade at the bedside within minutes. Sending a hypotensive patient to CT is unsafe before tamponade is excluded. A chest X-ray may show a large heart but cannot confirm tamponade. D-dimer and troponin do not answer the immediate question.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pericardial",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows a large circumferential pericardial effusion with right ventricular diastolic collapse and a plethoric IVC.",
        prompt: "Which of the following is the most appropriate treatment for this patient?",
        options: [
          "Furosemide 40 mg IV",
          "Intubation and positive pressure",
          "Nitroglycerin infusion for dyspnea",
          "Normal saline 500 mL bolus",
          "Pericardiocentesis under ultrasound",
        ],
        correct: 4,
        explanation:
          "Tamponade with right ventricular collapse needs urgent drainage, and ultrasound-guided pericardiocentesis is the treatment of choice. A small fluid bolus may support her briefly but does not treat the cause. Diuretics and nitrates lower preload and can cause collapse. Positive pressure ventilation reduces venous return and can precipitate arrest.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pericardial",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of her history most increases her risk of this condition?",
        options: [
          "Age older than 60 years",
          "Anxiety at presentation",
          "Chest pain for 1 week",
          "Inability to lie flat",
          "Metastatic lung adenocarcinoma",
        ],
        correct: 4,
        explanation:
          "Malignancy, especially lung and breast cancer, is one of the most common causes of a large pericardial effusion with tamponade. Chest pain and orthopnea are symptoms of the effusion rather than risk factors for it. Anxiety and age do not raise the risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-pericardial",
      },
    ],
    sources: [ESC_PERI],
    ...meta,
  },

  /* 36 ------------------------------------------------------------------ */
  {
    id: "chest-pain-36",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pain six weeks after a procedure",
    stem:
      "A 60-year-old man is brought to the emergency department by ambulance with 30 minutes of crushing chest pain. Six weeks ago he had a drug-eluting stent placed in his left anterior descending artery after an NSTEMI. He stopped ticagrelor 5 days ago because of bruising and now takes only ASA. He has diabetes and hypertension. He is diaphoretic. The paramedic ECG shows 3 mm ST elevation in V1 to V4.",
    vitals: { temperature: "36.6°C oral", pulse: "102/minute", resp: "22/minute", bp: "138/86 mmHg", o2sat: "95% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most likely explains this event?",
        options: [
          "Long-standing type 2 diabetes",
          "Male sex and age of 60",
          "NSTEMI 6 weeks ago",
          "Poorly controlled hypertension",
          "Stopping ticagrelor 5 days ago",
        ],
        correct: 4,
        explanation:
          "Stopping a P2Y12 inhibitor in the first months after a drug-eluting stent is the strongest predictor of stent thrombosis. His ST elevation lies in the LAD territory where the stent sits. Diabetes, age and sex raise baseline risk but do not explain the timing. The stem gives no evidence that his hypertension is poorly controlled.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-antiplatelet-2023",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely mechanism of his current event?",
        options: [
          "Acute stent thrombosis",
          "Coronary artery vasospasm",
          "In-stent restenosis",
          "New plaque rupture elsewhere",
          "Spontaneous coronary dissection",
        ],
        correct: 0,
        explanation:
          "Sudden occlusion in the stented LAD 5 days after stopping ticagrelor is typical of stent thrombosis. In-stent restenosis develops gradually over months and usually causes stable or unstable angina rather than STEMI. The ST elevation matches the stented artery, so a new lesion elsewhere is less likely. Nothing suggests vasospasm or dissection.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "menu",
        update: "The cath lab has been activated and the team will be ready in 15 minutes.",
        prompt: "Which of the following medications should he receive before primary PCI?",
        options: [
          "Clopidogrel 75 mg PO",
          "Enoxaparin 90 mg SC",
          "Heparin 7000 units IV bolus",
          "Prasugrel 10 mg PO",
          "Tenecteplase 50 mg IV",
          "Ticagrelor 180 mg PO",
        ],
        select: 2,
        correct: [2, 5],
        explanation:
          "The CCS suggests P2Y12 pretreatment before primary PCI, and ticagrelor 180 mg restores the potent inhibition he stopped. Unfractionated heparin 70 to 100 units/kg is the anticoagulant for primary PCI, and 7000 units is about 78 units/kg for 90 kg. Clopidogrel 75 mg and prasugrel 10 mg are maintenance doses, not loads. SC enoxaparin is not the primary PCI regimen. A lytic is not used when primary PCI is available.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ccs-antiplatelet-2023",
      },
    ],
    sources: [CCS_APT, ESC_ACS],
    ...meta,
  },

  /* 37 ------------------------------------------------------------------ */
  {
    id: "chest-pain-37",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure after midnight",
    stem:
      "A 55-year-old man presents to the emergency department at 01:30 with 45 minutes of central chest pressure radiating to his left arm. He has hypertension and dyslipidemia and smokes. He takes amlodipine and atorvastatin. He is diaphoretic. The lungs are clear. The ECG shows 1 mm horizontal ST depression in V4 to V6 without ST elevation. He has chewed ASA 160 mg at triage.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "18/minute", bp: "148/90 mmHg", o2sat: "97% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional history is most important before giving him nitroglycerin?",
        options: [
          "Allergy to sulfa medications",
          "Family history of early MI",
          "Recent erectile dysfunction drug use",
          "Time of his last amlodipine dose",
          "Timing and content of his last meal",
        ],
        correct: 2,
        explanation:
          "Nitrates combined with a phosphodiesterase 5 inhibitor can cause profound hypotension, so recent sildenafil, vardenafil or tadalafil use must be asked about first. Family history adds to his pretest probability but does not change nitrate safety. Sulfa allergy, meal timing and his usual amlodipine dose do not contraindicate nitroglycerin.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-nste-2014",
      },
      {
        id: "q2",
        kind: "single",
        update: "He took tadalafil 20 mg 30 hours ago. His pain continues.",
        prompt: "Which of the following is the most appropriate treatment for his ongoing pain?",
        options: [
          "Fentanyl 50 mcg IV",
          "Isosorbide dinitrate 5 mg SL",
          "Ketorolac 30 mg IV",
          "Nitroglycerin 0.4 mg SL",
          "Nitroglycerin patch 0.4 mg/hour",
        ],
        correct: 0,
        explanation:
          "Nitrates are avoided within 48 hours of tadalafil, and his dose was 30 hours ago, so every nitrate option is unsafe. An IV opioid such as fentanyl may be considered for ischemic pain that persists. NSAIDs such as ketorolac raise the risk of adverse cardiac events in ACS.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-nste-2014",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the minimum interval after a sildenafil dose before nitrates may be given?",
        options: [
          "6 hours",
          "12 hours",
          "24 hours",
          "48 hours",
          "72 hours",
        ],
        correct: 2,
        explanation:
          "Nitrates should not be given within 24 hours of sildenafil or vardenafil, or within 48 hours of tadalafil, which has a longer half-life. Intervals of 6 or 12 hours are too short. Waiting 48 or 72 hours after sildenafil is longer than needed and delays a useful drug.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-nste-2014",
      },
    ],
    sources: [NSTE_2014],
    ...meta,
  },

  /* 38 ------------------------------------------------------------------ */
  {
    id: "chest-pain-38",
    topic: "chest-pain",
    title: "Pain that eased with the spray",
    stem:
      "A 62-year-old woman is brought to the emergency department by ambulance with 2 hours of squeezing retrosternal pain that began while she was eating dinner. Over 6 months she has had brief similar episodes with meals, and food sometimes feels stuck. She has type 2 diabetes and hypertension and is a former smoker. Paramedics gave nitroglycerin 0.4 mg SL, and the pain settled within 5 minutes. The ECG is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "80/minute", resp: "16/minute", bp: "142/80 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about her response to nitroglycerin is most accurate?",
        options: [
          "It confirms an ischemic cause",
          "It does not identify the cause",
          "It excludes esophageal spasm",
          "It predicts a positive troponin",
          "It supports discharge after one ECG",
        ],
        correct: 1,
        explanation:
          "Relief with nitroglycerin did not predict active coronary disease in patients admitted with chest pain. Nitrates relax esophageal smooth muscle and can relieve esophageal spasm, so relief does not confirm ischemia or exclude the esophagus. It says nothing about the troponin and does not support early discharge.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "nitro-response",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of her history most favours an esophageal cause?",
        options: [
          "Diabetes and hypertension",
          "Duration of 2 hours",
          "Dysphagia during meals",
          "Relief after nitroglycerin",
          "Squeezing retrosternal quality",
        ],
        correct: 2,
        explanation:
          "Food sticking with meal-related episodes points to an esophageal motility disorder. Squeezing retrosternal pain occurs with both esophageal spasm and angina. Relief with nitroglycerin does not discriminate. Diabetes and hypertension favour coronary disease, and a 2-hour duration fits either cause.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her first high-sensitivity troponin, drawn 2 hours after pain onset, is normal.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Barium swallow before discharge",
          "Discharge on a proton pump inhibitor",
          "Outpatient esophageal manometry",
          "Repeat troponin per rapid protocol",
          "Urgent upper endoscopy today",
        ],
        correct: 3,
        explanation:
          "A single troponin drawn 2 hours after onset cannot rule out MI, so a repeat per the rapid protocol is needed before ACS is set aside. Esophageal testing can follow once ACS is excluded. Discharge on a proton pump inhibitor rests on an incomplete workup.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of her history most increases her pretest probability of ACS?",
        options: [
          "Brief episodes over 6 months",
          "Diabetes and hypertension",
          "Normal initial ECG",
          "Onset while eating",
          "Sensation of food sticking",
        ],
        correct: 1,
        explanation:
          "Diabetes and hypertension raise the prevalence of coronary disease in a 62-year-old former smoker. Meal-related onset and dysphagia point toward the esophagus. A normal first ECG lowers the probability a little but does not exclude ACS. Brief recurrent episodes fit either diagnosis.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-chest-pain",
      },
    ],
    sources: [NITRO, AHA_CP, ESC_ACS],
    ...meta,
  },

  /* 39 ------------------------------------------------------------------ */
  {
    id: "chest-pain-39",
    topic: "chest-pain",
    alsoTopics: ["dvt-pe"],
    title: "This time feels different",
    stem:
      "A 28-year-old woman presents to the emergency department with 3 hours of sharp right-sided chest pain and a racing heart. She has panic disorder and was seen twice last year for panic attacks. She says this episode feels different because she cannot catch her breath. She takes sertraline and a combined oral contraceptive. She flew from Vancouver to Halifax 4 days ago. The lungs are clear. The legs are normal.",
    vitals: { temperature: "37.2°C oral", pulse: "118/minute", resp: "24/minute", bp: "124/78 mmHg", o2sat: "94% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings argues most strongly against a panic attack as the cause?",
        options: [
          "Heart rate of 118/minute",
          "Oxygen saturation of 94%",
          "Respiratory rate of 24/minute",
          "Sharp right-sided chest pain",
          "Temperature of 37.2°C",
        ],
        correct: 1,
        explanation:
          "Panic causes hyperventilation, which keeps oxygen saturation normal or high, so a saturation of 94% on room air in a healthy 28-year-old needs another explanation. Tachycardia, a fast respiratory rate and sharp chest pain all occur in panic attacks. A temperature of 37.2°C is normal.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following features of her history increase her pretest probability of PE?",
        options: [
          "Combined oral contraceptive",
          "Female sex at age 28",
          "History of panic disorder",
          "Normal leg examination",
          "Recent long flight",
          "Sertraline therapy",
        ],
        select: 2,
        correct: [0, 4],
        explanation:
          "Estrogen-containing contraceptives and recent long-distance travel both raise the risk of venous thromboembolism. Panic disorder and sertraline do not. A normal leg examination lowers rather than raises the probability. Sex and age alone do not add risk here.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update: "After reassessing her, you judge PE to be more likely than any other diagnosis.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "CT pulmonary angiogram",
          "D-dimer before imaging",
          "Echocardiogram first",
          "Lorazepam and reassess in 1 hour",
          "PERC rule to avoid testing",
        ],
        correct: 0,
        explanation:
          "Her Wells score is 3 for PE most likely plus 1.5 for heart rate over 100/minute, a total of 4.5, so PE is likely and she goes straight to CT. D-dimer is used only when PE is unlikely. She fails PERC on heart rate, saturation and estrogen use. Treating her as a panic attack risks missing PE.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "wells-pe",
      },
    ],
    sources: [ESC_PE, WELLS],
    ...meta,
  },

  /* 40 ------------------------------------------------------------------ */
  {
    id: "chest-pain-40",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "More pain with less effort",
    stem:
      "A 64-year-old man presents to the emergency department at 11:00 with chest pressure that has come more often and with less effort over 5 days. Three times this morning it came on at rest and lasted 10 to 15 minutes. He had a stent placed in his right coronary artery 6 years ago. He has hypertension, dyslipidemia and COPD and takes ramipril, atorvastatin and tiotropium. He is pain free now. The ECG is unchanged from 1 year ago.",
    vitals: { temperature: "36.6°C oral", pulse: "72/minute", resp: "16/minute", bp: "138/82 mmHg", o2sat: "95% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his pattern of symptoms?",
        options: [
          "Chronic stable angina",
          "Crescendo unstable angina",
          "Microvascular angina",
          "Stable exertional angina",
          "Variant vasospastic angina",
        ],
        correct: 1,
        explanation:
          "Angina that is more frequent, comes with less effort and now occurs at rest is crescendo unstable angina. Stable angina has a fixed, predictable exertional threshold. Vasospastic angina causes rest pain with transient ST elevation, often at night, without a crescendo pattern. Microvascular angina is a diagnosis made after obstructive disease is excluded.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "single",
        update: "High-sensitivity troponin I is 4 ng/L at 0 hours and 5 ng/L at 1 hour. The male 99th percentile is 34 ng/L.",
        prompt: "Which of the following is the most appropriate disposition for this patient?",
        options: [
          "Admit for cardiology assessment",
          "Discharge with a proton pump inhibitor",
          "Discharge with outpatient stress test",
          "Discharge with sublingual nitroglycerin",
          "Exercise stress test in the department",
        ],
        correct: 0,
        explanation:
          "Normal troponins rule out MI but not unstable angina, which is diagnosed from the history. Crescendo pain with rest episodes in a patient with known coronary disease is high risk and needs admission for further evaluation. Exercise testing is unsafe within hours of rest angina. Discharge rests on the troponin alone.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of his history most increases his risk of an adverse cardiac event?",
        options: [
          "Age older than 60 years",
          "Chronic obstructive lung disease",
          "ECG unchanged from last year",
          "Normal troponin values",
          "Prior coronary stent",
        ],
        correct: 4,
        explanation:
          "Established coronary disease with prior revascularization marks the highest risk group and scores 2 in the HEART risk factor item on its own. Age over 60 adds less. COPD is not a coronary risk equivalent. An unchanged ECG and normal troponins lower his short-term risk of MI but do not remove it.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following medications are most appropriate to start in the emergency department?",
        options: [
          "ASA 160 mg PO chewed",
          "Enoxaparin 1 mg/kg SC every 12 hours",
          "Ketorolac 30 mg IV",
          "Pantoprazole 40 mg IV",
          "Tenecteplase 45 mg IV",
          "Warfarin 5 mg PO daily",
        ],
        select: 2,
        correct: [0, 1],
        explanation:
          "Suspected NSTE-ACS is treated with ASA and a parenteral anticoagulant such as enoxaparin 1 mg/kg every 12 hours, 88 mg for 88 kg. Fibrinolysis has no role without ST elevation. NSAIDs such as ketorolac increase cardiac risk. Warfarin is not an acute ACS treatment. Pantoprazole does not treat ischemia.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
    ],
    sources: [ESC_ACS],
    ...meta,
  },

  /* 41 ------------------------------------------------------------------ */
  {
    id: "chest-pain-41",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure carrying a child uphill",
    stem:
      "A 36-year-old man presents to the emergency department with 2 hours of central chest pressure that began while he was carrying his son up a hill. It eased with rest but returned twice at lower effort. His father had a heart attack at age 44, and his older sister takes a cholesterol medication. He does not smoke and takes no medications. There are firm nodules on both Achilles tendons. The heart and lungs are normal.",
    vitals: { temperature: "36.7°C oral", pulse: "86/minute", resp: "16/minute", bp: "132/80 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely underlying condition explaining his early coronary risk?",
        options: [
          "Anomalous coronary artery origin",
          "Familial hypercholesterolemia",
          "Hypertrophic cardiomyopathy",
          "Nephrotic syndrome",
          "Undiagnosed type 1 diabetes",
        ],
        correct: 1,
        explanation:
          "Achilles tendon xanthomas with a first-degree relative who had an MI at 44 and a sibling on lipid therapy point to familial hypercholesterolemia. An anomalous coronary does not cause xanthomas or run in families this way. Hypertrophic cardiomyopathy is inherited but does not cause tendon xanthomas or explain a relative on lipid therapy. Nephrotic syndrome and diabetes do not produce tendon xanthomas.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-lipids",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate action within 10 minutes of his arrival?",
        options: [
          "Chest X-ray and troponin",
          "ECG and chewed ASA",
          "Lipid profile and troponin",
          "Nitroglycerin and CT angiogram",
          "Troponin, then decide on ECG",
        ],
        correct: 1,
        explanation:
          "A patient with possible ACS needs an ECG read within 10 minutes, and ASA is given early without waiting for the full workup. Troponin and a chest X-ray are useful but do not replace the ECG. A lipid profile does not guide acute care. CT angiography is not an early test in suspected ACS.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "His ECG is normal. High-sensitivity troponins at 0 and 1 hours are normal with no change. His pain has not returned.",
        prompt: "Which of the following statements about his normal ECG and troponins is most accurate?",
        options: [
          "They confirm a noncardiac cause",
          "They do not exclude unstable angina",
          "They exclude coronary disease at his age",
          "They make stress testing unnecessary",
          "They support discharge without follow-up",
        ],
        correct: 1,
        explanation:
          "Normal troponins rule out MI but not unstable angina, which is a clinical diagnosis. His exertional pain that recurs at lower effort is typical angina and needs further evaluation. Normal results do not confirm a noncardiac cause, exclude coronary disease or remove the need for testing and follow-up.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate recommendation for his family?",
        options: [
          "Cascade lipid screening of relatives",
          "Genetic testing only if he has an MI",
          "Screening his children at age 18",
          "Stress testing of his sister",
          "No testing until symptoms appear",
        ],
        correct: 0,
        explanation:
          "Familial hypercholesterolemia is autosomal dominant, so the CCS recommends cascade screening of first-degree relatives, including children. Waiting for symptoms or for adulthood delays treatment that prevents early coronary disease. Stress testing is not a screening test for the condition.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-lipids",
      },
    ],
    sources: [LIPIDS, ESC_ACS],
    ...meta,
  },

  /* 42 ------------------------------------------------------------------ */
  {
    id: "chest-pain-42",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "A transmitted ECG",
    stem:
      "A 61-year-old woman is brought to the emergency department by ambulance with 35 minutes of central chest pain and vomiting. The paramedic ECG shows 3 mm ST elevation in II, III and aVF with ST depression in I and aVL. The paramedics gave ASA 160 mg chewed and transmitted the ECG, and the cath lab has been activated. The cath team is 20 minutes away. She has hypertension and type 2 diabetes.",
    vitals: { temperature: "36.5°C oral", pulse: "58/minute", resp: "20/minute", bp: "112/70 mmHg", o2sat: "96% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first action on her arrival in the emergency department?",
        options: [
          "Chest X-ray before the cath lab",
          "Full history and examination first",
          "Monitor with defibrillator pads applied",
          "Portable echocardiogram first",
          "Troponin before angiography",
        ],
        correct: 2,
        explanation:
          "Ventricular fibrillation is most common in the first hours of STEMI, so she needs continuous monitoring with pads in place for immediate defibrillation. A focused history can happen alongside. Chest X-ray, echo and troponin do not change the plan and must not delay the cath lab.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "single",
        update: "On the stretcher she becomes unresponsive and pulseless. The monitor shows ventricular fibrillation.",
        prompt: "Which of the following is the most appropriate immediate action?",
        options: [
          "Amiodarone 300 mg IV",
          "Epinephrine 1 mg IV",
          "Immediate defibrillation",
          "Intubation before shocks",
          "Synchronized cardioversion",
        ],
        correct: 2,
        explanation:
          "Witnessed ventricular fibrillation with pads already on needs an immediate unsynchronized shock, which gives the best chance of return of circulation. Epinephrine and amiodarone come after shocks if VF persists. Synchronized cardioversion cannot sense a QRS in VF. Airway management must not delay defibrillation.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "After one shock she regains a pulse and is awake and talking within a minute. Her pain continues. The repeat ECG is unchanged.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Cancel the cath lab and admit to ICU",
          "CT head before angiography",
          "Give tenecteplase in the department",
          "Primary PCI as planned",
          "Temperature control before angiography",
        ],
        correct: 3,
        explanation:
          "Primary PCI is recommended after resuscitated cardiac arrest with persistent ST elevation. She is awake after a brief witnessed arrest, so temperature control and CT head are not needed before angiography. A lytic is not indicated when the cath team is 20 minutes away. Cancelling the cath lab leaves the artery occluded.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
    ],
    sources: [ESC_ACS],
    ...meta,
  },

  /* 43 ------------------------------------------------------------------ */
  {
    id: "chest-pain-43",
    topic: "chest-pain",
    alsoTopics: ["cva"],
    title: "Weakness after a moment of pain",
    stem:
      "A 69-year-old man is brought to the emergency department by ambulance 70 minutes after sudden left arm and leg weakness. His wife says he grabbed his chest and said it felt like something ripped just before the weakness began. He now denies pain. He has hypertension and takes amlodipine. He has a left facial droop and weakness of the left arm and leg. The right radial pulse is weaker than the left.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "20/minute", bp: "168/94 mmHg", o2sat: "97% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history is most important to consider before treating his stroke?",
        options: [
          "Hypertension on amlodipine",
          "Onset 70 minutes ago",
          "Ripping chest pain before onset",
          "Sudden left-sided weakness",
          "Wife witnessed the onset",
        ],
        correct: 2,
        explanation:
          "Ripping chest pain just before a stroke suggests aortic dissection extending into the carotid circulation, which makes thrombolysis dangerous. The time of onset and a witness matter for the stroke pathway but do not signal this hazard. Hypertension is common in both conditions. Sudden unilateral weakness is the stroke itself.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-aorta",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT head shows no hemorrhage. The stroke team is preparing tenecteplase.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Give tenecteplase without further imaging",
          "MRI brain before any treatment",
          "Transthoracic echo after thrombolysis",
          "Treat BP to below 140/90 mmHg and lyse",
          "Urgent CT angiogram of the aorta",
        ],
        correct: 4,
        explanation:
          "Ripping chest pain and a weaker right radial pulse raise concern for aortic dissection, which contraindicates thrombolysis. CT angiography that includes the aorta, carried out with the stroke CT angiogram, answers the question within minutes. Lysis before that could be fatal. MRI takes too long. An echo after thrombolysis comes too late.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-aorta",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about his current lack of chest pain is most accurate?",
        options: [
          "It does not exclude aortic dissection",
          "It makes dissection very unlikely",
          "It means lysis can proceed safely",
          "It points to a cardioembolic stroke",
          "It rules out coronary involvement",
        ],
        correct: 0,
        explanation:
          "Pain from aortic dissection can ease or be masked, and patients with neurologic deficits may not report it. Painless presentations are well described in dissection with stroke or syncope. The absence of pain now does not make dissection unlikely or lysis safe. It says nothing about the cause of the stroke or coronary involvement.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-aorta",
      },
    ],
    sources: [AORTA],
    ...meta,
  },

  /* 44 ------------------------------------------------------------------ */
  {
    id: "chest-pain-44",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure during a hockey game",
    stem:
      "A 13-year-old boy is brought to the emergency department by his father with 1 hour of central chest pressure and vomiting that began during a hockey game. He was not hit in the chest. He had Kawasaki disease at age 2 and was left with a giant aneurysm of the left anterior descending artery. He was prescribed ASA and warfarin but stopped both 2 months ago. He is pale and diaphoretic.",
    vitals: { temperature: "36.8°C oral", pulse: "118/minute", resp: "24/minute", bp: "98/62 mmHg", o2sat: "96% on room air", weight: "48 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first investigation?",
        options: [
          "Chest X-ray first",
          "CT coronary angiogram",
          "ECG immediately",
          "Echocardiogram first",
          "Troponin before ECG",
        ],
        correct: 2,
        explanation:
          "A giant coronary aneurysm carries a high risk of thrombosis and MI, especially off anticoagulation. His symptoms need an ECG at once to look for ST elevation. Troponin, echo and chest X-ray are useful later but do not identify an occlusion as quickly. CT coronary angiography would delay care.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-kawasaki",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ECG shows 3 mm ST elevation in V1 to V4 with reciprocal ST depression in II, III and aVF.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute myopericarditis",
          "Commotio cordis from a puck",
          "Early repolarization",
          "Spontaneous pneumothorax",
          "Thrombosed coronary aneurysm",
        ],
        correct: 4,
        explanation:
          "Anterior ST elevation with reciprocal inferior depression in a boy with a giant LAD aneurysm who stopped his antithrombotic drugs points to thrombotic occlusion of the aneurysm. Myopericarditis gives diffuse ST elevation without reciprocal change. He was not struck in the chest, so commotio cordis does not fit. Early repolarization does not cause reciprocal depression or symptoms.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-kawasaki",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for this patient?",
        options: [
          "Admit to the ward for serial troponins",
          "Emergency coronary reperfusion",
          "Ibuprofen and colchicine for pain",
          "IV immunoglobulin 2 g/kg infusion",
          "Methylprednisolone IV pulse therapy",
        ],
        correct: 1,
        explanation:
          "Acute MI from a thrombosed Kawasaki aneurysm is treated with urgent reperfusion, planned with pediatric and adult cardiology. IV immunoglobulin and steroids treat acute Kawasaki disease, not a late thrombotic complication. NSAIDs and colchicine treat pericarditis. Admission for troponins delays reperfusion.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-kawasaki",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements about chest pain in this child is most accurate?",
        options: [
          "ACS is too rare at his age to consider",
          "Chest pain at 13 is usually benign here",
          "His history outweighs his young age",
          "Only adults need a STEMI pathway",
          "Pediatric troponin is unreliable",
        ],
        correct: 2,
        explanation:
          "Most chest pain in children is benign, but a giant coronary aneurysm after Kawasaki disease puts him at high risk of MI. His history, not his age, sets the pretest probability. Troponin remains a useful marker of myocardial injury in children. Children with a STEMI need the same urgent reperfusion planning.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-kawasaki",
      },
    ],
    sources: [KAWASAKI],
    ...meta,
  },

  /* 45 ------------------------------------------------------------------ */
  {
    id: "chest-pain-45",
    topic: "chest-pain",
    title: "Back pain and a cold leg",
    stem:
      "A 64-year-old man presents to the emergency department with severe pain that began suddenly between his shoulder blades 90 minutes ago and has moved down to his lower back. He says it feels like tearing. His left leg now feels numb and cold. He has poorly controlled hypertension and smokes. The left femoral and pedal pulses are absent. The right-sided pulses are normal. The ECG shows left ventricular hypertrophy.",
    vitals: { temperature: "36.6°C oral", pulse: "104/minute", resp: "20/minute", bp: "192/108 mmHg", o2sat: "97% on room air", weight: "94 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following pain features is reported most often in acute aortic dissection?",
        options: [
          "Abrupt onset of severe pain",
          "Migration down the back",
          "Pleuritic worsening",
          "Radiation to the jaw",
          "Tearing or ripping quality",
        ],
        correct: 0,
        explanation:
          "In the International Registry of Acute Aortic Dissection, abrupt onset was reported by about 85% of patients. A tearing or ripping quality was reported by about half, and migrating pain by a minority. The absence of tearing or migrating pain therefore does not exclude dissection. Pleuritic worsening and jaw radiation are not typical features.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "irad",
      },
      {
        id: "q2",
        kind: "single",
        update: "A portable chest X-ray, taken while the CT scanner is being cleared, shows a normal mediastinum.",
        prompt: "Which of the following is the most appropriate imaging for this patient?",
        options: [
          "Bedside ultrasound of the aorta only",
          "CT angiogram of chest, abdomen and pelvis",
          "CT angiogram of the chest only",
          "Lower limb arterial duplex",
          "MRI angiogram of the aorta",
        ],
        correct: 1,
        explanation:
          "Abrupt tearing pain, a pulse deficit and a cold leg make dissection likely despite a normal mediastinum. CT angiography from the chest to the pelvis shows the extent of the flap and which branches are malperfused. Chest-only imaging would miss abdominal and iliac extension, which his cold leg suggests. Ultrasound and duplex cannot map the whole aorta. MRI takes too long for an emergency diagnosis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-aorta",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT shows a Stanford type B dissection from beyond the left subclavian artery to the left iliac artery, with poor flow to the left leg. IV esmolol has been started.",
        prompt: "Which of the following is the most appropriate consultation for this patient?",
        options: [
          "Cardiac surgery for open arch repair",
          "Interventional cardiology for PCI",
          "Medical therapy and ward admission",
          "Outpatient vascular clinic review",
          "Vascular surgery for urgent repair",
        ],
        correct: 4,
        explanation:
          "Type B dissection with limb malperfusion is complicated and needs urgent repair, usually endovascular, by the vascular team. Medical therapy alone suits uncomplicated type B dissection. Open arch repair is for type A disease. PCI treats coronary occlusion, not an aortic flap. Outpatient review risks limb loss.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-aorta",
      },
    ],
    sources: [IRAD, AORTA],
    ...meta,
  },

  /* 46 ------------------------------------------------------------------ */
  {
    id: "chest-pain-46",
    topic: "chest-pain",
    alsoTopics: ["dvt-pe"],
    title: "Pain two weeks after ankle surgery",
    stem:
      "A 44-year-old man presents to the emergency department with 1 day of left-sided pleuritic chest pain and a cough that brought up a small amount of blood this morning. Two weeks ago he had open reduction and internal fixation of a right ankle fracture. He has no other medical history. The right thigh is swollen and tender along the deep veins above his splint. The lungs are clear.",
    vitals: { temperature: "37.8°C oral", pulse: "108/minute", resp: "22/minute", bp: "132/80 mmHg", o2sat: "95% on room air", weight: "96 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "After reviewing the history and examination, you judge PE to be the most likely diagnosis.",
        prompt: "Which of the following is his Wells score for pulmonary embolism?",
        options: [
          "6 points",
          "7.5 points",
          "8.5 points",
          "10 points",
          "11.5 points",
        ],
        correct: 3,
        explanation:
          "Clinical signs of DVT score 3. PE as the most likely diagnosis scores 3. A heart rate over 100/minute scores 1.5. Surgery within 4 weeks scores 1.5. Hemoptysis scores 1. The total is 3 + 3 + 1.5 + 1.5 + 1 = 10.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "wells-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his oxygen saturation of 95% is most accurate?",
        options: [
          "It does not lower his probability of PE",
          "It excludes a large clot burden",
          "It favours pneumonia over PE",
          "It lets PERC rule out PE",
          "It makes D-dimer the next test",
        ],
        correct: 0,
        explanation:
          "Many patients with PE have a normal oxygen saturation, so a value of 95% does not lower a high probability. It does not measure clot burden or favour pneumonia. A saturation of 95% meets the PERC threshold, but PERC applies only when pretest probability is low, and he fails it on heart rate, hemoptysis, recent surgery and unilateral leg swelling. With PE likely, D-dimer is not the next test.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT pulmonary angiography is available in 3 hours. He has no bleeding and his surgical wound is healing well.",
        prompt: "Which of the following is the most appropriate management while he waits for CT?",
        options: [
          "D-dimer to decide on anticoagulation",
          "Leg ultrasound before any treatment",
          "Start anticoagulation before the CT",
          "Thrombolysis with alteplase",
          "Withhold treatment until CT results",
        ],
        correct: 2,
        explanation:
          "With a high clinical probability of PE and a delay to imaging, the ESC recommends starting anticoagulation while diagnosis is confirmed, as his bleeding risk is acceptable. Withholding treatment for 3 hours exposes him to further embolism. D-dimer does not change management at this probability. He is stable, so thrombolysis is not indicated.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pe",
      },
    ],
    sources: [WELLS, ESC_PE],
    ...meta,
  },

  /* 47 ------------------------------------------------------------------ */
  {
    id: "chest-pain-47",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Heartburn in the waiting room",
    stem:
      "A 57-year-old man walks into the emergency department at 21:40 and tells the triage nurse he has heartburn that has not settled with antacids. It began 1 hour ago. He is sweating and rubbing his chest. He has type 2 diabetes and smokes. The waiting room is full, and the triage nurse plans to give him a low acuity score. The hospital has a catheterization laboratory on site.",
    vitals: { temperature: "36.7°C oral", pulse: "96/minute", resp: "20/minute", bp: "154/92 mmHg", o2sat: "97% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate action at triage?",
        options: [
          "Antacid and reassess in 30 minutes",
          "ECG within 10 minutes of arrival",
          "Low-acuity triage and waiting room",
          "Oral PPI and fast-track referral",
          "Troponin, then ECG if positive",
        ],
        correct: 1,
        explanation:
          "Chest discomfort with sweating in a diabetic smoker is possible ACS, however he labels it, and needs an ECG read within 10 minutes of arrival. A low acuity score and a trial of antacid or PPI risk missing a STEMI. Troponin rises late and does not replace the ECG.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ccs-stemi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his description of heartburn is most accurate?",
        options: [
          "It argues against ACS in a diabetic man",
          "It does not exclude ACS",
          "It favours a GI cause at his age",
          "It justifies a trial of pantoprazole",
          "It requires endoscopy before ACS testing",
        ],
        correct: 1,
        explanation:
          "Patients, especially those with diabetes, often describe ischemic pain as burning or indigestion. Failure of antacids and diaphoresis make ACS more concerning, not less. A GI label from the patient should not delay the ECG or lead to empiric PPI treatment.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows 2 mm ST elevation in I, aVL, V5 and V6 with ST depression in III and aVF.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute pericarditis",
          "Inferior STEMI",
          "Lateral STEMI",
          "Left ventricular aneurysm",
          "Posterior NSTEMI",
        ],
        correct: 2,
        explanation:
          "ST elevation in I, aVL, V5 and V6 is a lateral STEMI, and the reciprocal depression in III and aVF supports an acute occlusion. Pericarditis causes diffuse elevation without reciprocal change. Inferior STEMI shows elevation in II, III and aVF. A ventricular aneurysm is a late result of an old MI and does not produce new reciprocal depression with acute pain.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following should he receive now, before going to the catheterization laboratory?",
        options: [
          "ASA 160 mg PO chewed",
          "Heparin 7000 units IV bolus",
          "Ketorolac 30 mg IV",
          "Lorazepam 1 mg SL",
          "Pantoprazole 40 mg IV",
          "Tenecteplase 50 mg IV",
        ],
        select: 2,
        correct: [0, 1],
        explanation:
          "ASA and unfractionated heparin 70 to 100 units/kg are given before primary PCI, and 7000 units is about 76 units/kg for 92 kg. A lytic is not used when primary PCI is available on site. NSAIDs such as ketorolac are harmful in MI. Pantoprazole and lorazepam do not treat the occlusion.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
    ],
    sources: [CCS_STEMI, ESC_ACS, AHA_CP],
    ...meta,
  },
];
