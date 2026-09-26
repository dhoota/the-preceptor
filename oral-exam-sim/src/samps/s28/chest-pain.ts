// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: true, author: "Preceptor", version: 1 };

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
  url: "https://doi.org/10.1001/jama.283.7.897",
};
const FH_CANADA: Source = {
  id: "fh-canada",
  citation: "Kramer AI, Christian S, Bartels K and colleagues. Genetic testing for familial hypercholesterolemia: the current state of its implementation in Canada. CJC Open. 2024.",
  url: "https://doi.org/10.1016/j.cjco.2024.08.005",
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
const TC_PREG_DX: Source = {
  id: "tc-preg-dx",
  citation: "Thrombosis Canada. Clinical guide: pregnancy, diagnosis of DVT and PE. 2026.",
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
const PAIN_SEVERITY: Source = {
  id: "pain-severity",
  citation: "Edwards M, Chang AM, Matsuura AC and colleagues. Relationship between pain severity and outcomes in patients presenting with potential acute coronary syndromes. Ann Emerg Med. 2011.",
  url: "https://doi.org/10.1016/j.annemergmed.2011.05.036",
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

const ESC_CARDIOONC: Source = {
  id: "esc-cardioonc",
  citation: "Lyon AR, Lopez-Fernandez T, Couch LS and colleagues. 2022 ESC guidelines on cardio-oncology. Eur Heart J. 2022.",
  url: "https://doi.org/10.1093/eurheartj/ehac244",
};
const AHA_ENDOCARDITIS: Source = {
  id: "aha-endocarditis",
  citation: "Baddour LM, Wilson WR, Bayer AS and colleagues. Infective endocarditis in adults: diagnosis, antimicrobial therapy, and management of complications. A scientific statement from the American Heart Association. Circulation. 2015.",
  url: "https://doi.org/10.1161/CIR.0000000000000296",
};
const RADIATION_HEART: Source = {
  id: "radiation-heart",
  citation: "Desai MY, Windecker S, Lancellotti P and colleagues. Prevention, diagnosis, and management of radiation-associated cardiac disease: JACC scientific expert panel. J Am Coll Cardiol. 2019.",
  url: "https://www.jacc.org/doi/10.1016/j.jacc.2019.07.006",
};
const ACUPUNCTURE_PTX: Source = {
  id: "acupuncture-ptx",
  citation: "Th'ng F, Rao KA, Huang PY. Case series: acupuncture-related pneumothorax. Int J Emerg Med. 2022.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9465868/",
};
const STERNAL_INFECTION: Source = {
  id: "sternal-infection",
  citation: "Lazar HL, Vander Salm T, Engelman R and colleagues. Prevention and management of sternal wound infections. J Thorac Cardiovasc Surg. 2016.",
  url: "https://www.jtcvs.org/article/S0022-5223(16)30872-8/fulltext",
};
const EACTS_MEDIASTINITIS: Source = {
  id: "eacts-mediastinitis",
  citation: "Abu-Omar Y, Kocher GJ, Bosco P and colleagues. European Association for Cardio-Thoracic Surgery expert consensus statement on the prevention and management of mediastinitis. Eur J Cardiothorac Surg. 2017.",
  url: "https://doi.org/10.1093/ejcts/ezw326",
};
const SHARE_ETHNICITY: Source = {
  id: "share-ethnicity",
  citation: "Anand SS, Yusuf S, Vuksan V and colleagues. Differences in risk factors, atherosclerosis, and cardiovascular disease between ethnic groups in Canada: the Study of Health Assessment and Risk in Ethnic groups (SHARE). Lancet. 2000.",
  url: "https://www.thelancet.com/journals/lancet/article/PIIS0140673600025022/abstract",
};
const HEMOPNEUMOTHORAX: Source = {
  id: "hemopneumothorax",
  citation: "Hsu NY, Shih CS, Hsu CP, Chen PR. Spontaneous hemopneumothorax revisited: clinical approach and systemic review of the literature. Ann Thorac Surg. 2005.",
  url: "https://pubmed.ncbi.nlm.nih.gov/16242469/",
};
const INFLUENZA_MI: Source = {
  id: "influenza-mi",
  citation: "Kwong JC, Schwartz KL, Campitelli MA and colleagues. Acute myocardial infarction after laboratory-confirmed influenza infection. N Engl J Med. 2018.",
  url: "https://www.nejm.org/doi/full/10.1056/NEJMoa1702090",
};
const HIV_MI: Source = {
  id: "hiv-mi",
  citation: "Freiberg MS, Chang CC, Kuller LH and colleagues. HIV infection and the risk of acute myocardial infarction. JAMA Intern Med. 2013.",
  url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/1659742",
};
const ATHLETE_CAC: Source = {
  id: "athlete-cac",
  citation: "Aengevaeren VL, Mosterd A, Braber TL and colleagues. Relationship between lifelong exercise volume and coronary atherosclerosis in athletes. Circulation. 2017.",
  url: "https://www.ahajournals.org/doi/10.1161/circulationaha.117.027834",
};
const AEF_REVIEW: Source = {
  id: "aef-review",
  citation: "Han HC, Ha FJ, Sanders P and colleagues. Atrioesophageal fistula: clinical presentation, procedural characteristics, diagnostic investigations, and treatment outcomes. Circ Arrhythm Electrophysiol. 2017.",
  url: "https://www.ahajournals.org/doi/10.1161/circep.117.005579",
};

const WJES_BCI: Source = {
  id: "wjes-bci",
  citation: "Kyriazidis IP, Jakob DA, Vargas JAH and colleagues. Accuracy of diagnostic tests in cardiac injury after blunt chest trauma: a systematic review and meta-analysis. World J Emerg Surg. 2023.",
  url: "https://doi.org/10.1186/s13017-023-00504-9",
};
const CFP_STERNAL: Source = {
  id: "cfp-sternal",
  citation: "Audette JS, Emond M, Scott H, Lortie G. Investigation of myocardial contusion with sternal fracture in the emergency department: multicentre review. Can Fam Physician. 2014.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3922581/",
};
const EAST_BCI: Source = {
  id: "east-bci",
  citation: "Clancy K, Velopulos C, Bilaniuk JW and colleagues. Screening for blunt cardiac injury: an Eastern Association for the Surgery of Trauma practice management guideline. J Trauma Acute Care Surg. 2012.",
  url: "https://doi.org/10.1097/TA.0b013e318270193a",
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
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure years after lymphoma treatment",
    stem: "A 44-year-old woman presents to the emergency department with 90 minutes of central chest pressure that began while she carried groceries up two flights of stairs. It has continued at rest and spreads to her left shoulder. She is not short of breath. At age 19 she was treated for Hodgkin lymphoma with chemotherapy and radiation to the mediastinum, and she has had no relapse. She smokes 10 cigarettes a day and takes no medications. Her menstrual periods are regular. Her mother had breast cancer at 60. She is diaphoretic. The JVP is not raised, the heart sounds are normal and the lungs are clear. There is no leg swelling. Her ECG shows 1 mm horizontal ST depression in V4 to V6.",
    vitals: { temperature: "36.8°C oral", pulse: "94/minute", resp: "18/minute", bp: "146/88 mmHg", o2sat: "98% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following raise her pretest probability of coronary artery disease?",
        options: ["Age of 44 years", "Current cigarette smoking", "Mediastinal radiation at 19", "Mother with breast cancer", "Premenopausal status", "Weight of 68 kg"],
        select: 2,
        correct: [1, 2],
        explanation: "Radiation to the mediastinum accelerates coronary atherosclerosis, often in the proximal and ostial vessels, and the risk appears years to decades after treatment. Current smoking is an established coronary risk factor. Her age of 44 and her premenopausal status, shown by regular periods, place her in a lower baseline risk group rather than raising it. Her mother's breast cancer is not a coronary risk factor, and a weight of 68 kg does not raise her risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "radiation-heart",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her chest pressure?",
        options: ["Acute pericarditis", "Constrictive pericarditis", "Pulmonary embolism", "Radiation pneumonitis", "Unstable angina or NSTEMI"],
        correct: 4,
        explanation: "Exertional pressure that continues at rest, spreads to the shoulder and comes with sweating and new ST depression in V4 to V6 is an acute coronary syndrome until proven otherwise. Radiation 25 years ago explains coronary disease at her age. Acute pericarditis gives sharp positional pain with diffuse ST elevation. Constrictive pericarditis is a late radiation effect but causes gradual edema and a raised JVP, not sudden pressure. Radiation pneumonitis occurs within months of treatment, and she has no breathlessness or leg swelling to suggest pulmonary embolism.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "radiation-heart",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her chart shows a normal survivorship echocardiogram 8 months ago, with normal ventricular function and valves.",
        prompt: "Which of the following statements about her normal echocardiogram 8 months ago is most accurate?",
        options: ["It argues against an unstable plaque", "It assessed function, not coronary lumens", "It makes an ACS less likely today", "It rules out a critical stenosis", "It supports early discharge home"],
        correct: 1,
        explanation: "A resting echocardiogram shows ventricular function, valves and the pericardium. It does not image the coronary lumens, so a normal study 8 months ago says nothing about an unstable plaque or a critical stenosis today. Radiation coronary disease progresses over years, and a plaque can rupture without any prior change in wall motion. Her ongoing pain and new ST depression keep ACS likely today, so the old echo gives no support for discharge.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q4",
        kind: "single",
        update: "Paramedics gave ASA 160 mg chewed and two nitroglycerin sprays. Her pain has eased to 2 out of 10.",
        prompt: "Which of the following is the most appropriate additional treatment now?",
        options: ["Enoxaparin 1 mg/kg SC", "Metoprolol 5 mg IV", "Morphine 10 mg IV", "Oxygen 10 L/minute by mask", "Tenecteplase 35 mg IV"],
        correct: 0,
        explanation: "With a working diagnosis of non-ST elevation ACS, parenteral anticoagulation is started at diagnosis alongside ASA, and enoxaparin 1 mg/kg SC is 68 mg for her. Tenecteplase is for ST elevation infarction and gives no benefit with ST depression. Routine early IV metoprolol is not recommended because it can precipitate shock. Oxygen is not indicated with a saturation of 98%. Her pain has eased, and morphine can delay the absorption of oral P2Y12 inhibitors.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
    ],
    sources: [RADIATION_HEART, AHA_CP, ESC_ACS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
  },

  /* 18 ------------------------------------------------------------------ */
  {
    id: "chest-pain-18",
    topic: "chest-pain",
    title: "Breathless after a morning treatment",
    stem: "A 52-year-old woman presents to the emergency department with 6 hours of sharp left upper chest pain that is worse with deep breaths, and breathlessness on stairs. The pain began in the early afternoon. She has chronic neck and shoulder pain and had acupuncture this morning, with needles placed over both trapezius muscles and the upper back. She has no lung disease and has never smoked. She has had no leg swelling, recent travel or surgery. She takes naproxen as needed. She is speaking in full sentences. The trachea is midline. Breath sounds are reduced at the left apex. An upright chest X-ray taken at triage was reported as normal.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "20/minute", bp: "132/80 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history most helps explain her symptoms?",
        options: ["Chronic neck and shoulder pain", "Lifelong non-smoker", "Needles placed over the upper back", "Onset in the early afternoon", "Taking naproxen as needed"],
        correct: 2,
        explanation: "Needles over the trapezius and upper back can pass through the thin chest wall into the pleura, and pneumothorax is the most often reported serious complication of acupuncture. Pleuritic pain and breathlessness starting hours after the session fit this. Her chronic neck pain was the reason for treatment, not a cause of new pleuritic pain. Being a lifelong non-smoker lowers her risk of a primary spontaneous pneumothorax. The time of onset and naproxen use do not explain one-sided reduced breath sounds.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "acupuncture-ptx",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this woman?",
        options: ["Acute pericarditis", "Muscle strain from needling", "Pulmonary embolism", "Traumatic left pneumothorax", "Viral pleurisy"],
        correct: 3,
        explanation: "One-sided pleuritic pain, breathlessness and reduced breath sounds at the left apex hours after needling near the chest wall point to a traumatic pneumothorax. A muscle strain does not reduce breath sounds. Viral pleurisy does not cause a focal loss of breath sounds. Pericarditis gives central positional pain. Pulmonary embolism is less likely with no leg swelling, travel or surgery, and it does not explain the apical findings.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "acupuncture-ptx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation?",
        options: ["Bedside lung ultrasound", "CT pulmonary angiography", "D-dimer blood test", "High-sensitivity troponin", "Ventilation perfusion scan"],
        correct: 0,
        explanation: "Bedside ultrasound can show absent lung sliding and a lung point within minutes, and it is more sensitive than a chest X-ray for a small pneumothorax. A D-dimer and CT pulmonary angiography pursue pulmonary embolism, which the history does not support. A ventilation perfusion scan is slower and asks the same question. A troponin does not assess the pleura and would not change her immediate care.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "bts-pleural",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements about her normal triage chest X-ray is most accurate?",
        options: ["It excludes a clinically important leak", "It lowers her risk of later enlargement", "It makes pulmonary embolism more likely", "It misses some small air leaks", "It shows the pain is from muscle strain"],
        correct: 3,
        explanation: "A small pneumothorax is easily missed on a single chest X-ray, so a normal film does not exclude one when her history and reduced apical breath sounds suggest it. The film result does not change how a leak behaves, and a small pneumothorax can still enlarge, so she needs reassessment before any discharge. A normal film does not make pulmonary embolism more likely, and it cannot show that the pain is muscular.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "bts-pleural",
      },
    ],
    sources: [ACUPUNCTURE_PTX, BTS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
    alsoTopics: ["infectious-diseases"],
    title: "Fever and chest pain after heart surgery",
    stem: "A 67-year-old man presents to the emergency department with 2 days of worsening central chest pain, fever and chills. He had coronary artery bypass grafting through a median sternotomy 12 days ago and went home on day 6. He has type 2 diabetes treated with insulin and a body mass index of 38 kg/m2. He takes ASA, metoprolol, atorvastatin and insulin. The lower third of the sternal wound is red, with cloudy drainage. The sternum clicks when he coughs. Breath sounds are equal. His ECG shows sinus tachycardia with no new ST changes.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "22/minute", bp: "104/62 mmHg", o2sat: "95% on room air", weight: "118 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his chest pain?",
        options: ["Acute graft occlusion", "Deep sternal wound infection", "Postpericardiotomy syndrome", "Pulmonary embolism", "Superficial wound cellulitis"],
        correct: 1,
        explanation: "Fever, purulent drainage and a clicking, unstable sternum 12 days after sternotomy point to a deep sternal wound infection with mediastinitis, which is lethal without early surgery. Diabetes and obesity are major risk factors. Superficial cellulitis does not make the sternum unstable. Postpericardiotomy syndrome causes pleuritic pain and a rub, not purulent drainage. Graft occlusion would usually give ischemic ECG changes, and pulmonary embolism does not explain an infected, unstable wound.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "sternal-infection",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment once blood cultures are drawn?",
        options: ["Bedside opening of the wound", "IV cefazolin 2 g alone", "Oral cephalexin and wound review", "Vancomycin with gram-negative cover", "Wound swab and await results"],
        correct: 3,
        explanation: "Mediastinitis with fever, tachycardia and a soft blood pressure needs prompt empiric IV therapy. Vancomycin is the usual first-line drug because coagulase-negative staphylococci are often multiresistant and MRSA is common, and gram-negative bacilli are added to the cover in a septic patient. Cefazolin alone does not cover MRSA or many gram-negative organisms. Oral cephalexin, or a swab with treatment deferred until results return, is inadequate for a deep infection with sepsis. Opening the wound at the bedside is not a substitute for operative debridement.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "eacts-mediastinitis",
      },
      {
        id: "q3",
        kind: "single",
        update: "Antibiotics are running. His blood pressure has improved after 2 L of Ringer's lactate.",
        prompt: "Which of the following is the most appropriate next step to define the infection and plan care?",
        options: ["Admit to medicine for IV therapy", "Bedside wound probing only", "CT chest and cardiac surgery call", "Nuclear medicine bone scan", "Transthoracic echo only"],
        correct: 2,
        explanation: "Contrast CT of the chest is the imaging test of choice and can show sternal separation, gas beneath the sternum and mediastinal collections, and deep sternal wound infection is treated with operative debridement by the cardiac surgery team. Admission to medicine for antibiotics alone delays source control. Probing the wound at the bedside cannot show the mediastinal extent. A bone scan is slow and nonspecific after recent surgery. A transthoracic echo may show an effusion but does not assess the sternum or mediastinum.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "eacts-mediastinitis",
      },
    ],
    sources: [STERNAL_INFECTION, EACTS_MEDIASTINITIS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
  },

  /* 22 ------------------------------------------------------------------ */
  {
    id: "chest-pain-22",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Chest discomfort described through her son",
    stem: "A 66-year-old woman presents to the emergency department with her adult son. She speaks Tamil and little English. Her son says she has had gas in her chest on and off for 3 days and asks for something for indigestion. She has type 2 diabetes and hypertension and takes metformin and amlodipine. She moved to Canada from Sri Lanka 10 years ago. She has never smoked. She is rubbing her sternum and looks uncomfortable. The lungs are clear and there is no chest wall tenderness.",
    vitals: { temperature: "36.7°C oral", pulse: "92/minute", resp: "18/minute", bp: "158/90 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following diagnoses should be considered first in this woman?",
        options: ["Biliary colic from gallstones", "Gastroesophageal reflux", "Peptic ulcer disease", "Somatic symptom disorder", "Unstable angina or infarction"],
        correct: 4,
        explanation: "A woman with diabetes and recurrent chest discomfort that her family calls gas has an acute coronary syndrome until an ECG and troponins show otherwise, because it is the lethal cause that needs action within minutes. Reflux, peptic ulcer disease and biliary colic are common, but they are diagnoses to reach after ischemia has been addressed. A somatic symptom label has no place as a first consideration in a new presentation.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following most raises her pretest probability of coronary disease?",
        options: ["Diabetes with South Asian ancestry", "Female sex and her age", "Her lifelong non-smoking", "Her move to Canada 10 years ago", "Her use of amlodipine"],
        correct: 0,
        explanation: "Diabetes is a major coronary risk factor, and Canadians of South Asian ancestry have more cardiovascular disease and more glucose intolerance and dyslipidemia than Canadians of European ancestry, so together they sharply raise her pretest probability. Her age of 66 adds some risk and female sex offsets part of it, so together they add less than diabetes with South Asian ancestry. Never smoking removes one risk factor but does not offset diabetes. The timing of her migration and her amlodipine use do not change her coronary risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "share-ethnicity",
      },
      {
        id: "q3",
        kind: "menu",
        update: "A professional telephone interpreter is connected. She describes a heavy pressure behind the sternum.",
        prompt: "Which of the following features of her pain, if present, would favour myocardial ischemia?",
        options: ["Brought on by walking uphill", "Eased within minutes by rest", "Pain lasting a few seconds", "Pain reproduced by pressing", "Sharp and worse with breathing", "Sour taste after large meals", "Spreading to the jaw or arm"],
        select: 3,
        correct: [0, 1, 6],
        explanation: "Pain brought on by exertion, eased by rest within minutes and spreading to the jaw or arm favours ischemia. Fleeting pain lasting seconds, pain reproduced by pressing, sharp pleuritic pain and a sour taste after meals point toward musculoskeletal, pleural or esophageal causes, though none excludes ACS on its own. A professional interpreter rather than a relative should take this history, because relatives can filter or reinterpret symptoms, as her son did by calling this gas.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her ECG, recorded 8 minutes after arrival, shows 1 mm horizontal ST depression in V4 to V6. She has taken no medication today.",
        prompt: "Which of the following medications should she receive first at this point?",
        options: ["ASA 160 mg PO chewed", "Metoprolol 5 mg IV", "Morphine 5 mg IV", "Pantoprazole 40 mg IV", "Viscous lidocaine 10 mL PO"],
        correct: 0,
        explanation: "New ST depression with ongoing symptoms supports non-ST elevation ACS, and chewed ASA 160 mg is the first drug to give. Pantoprazole and viscous lidocaine treat a presumed gastric cause and would delay antiplatelet therapy. Routine early IV metoprolol is not recommended and can precipitate shock. Morphine is not first-line and can slow the absorption of oral P2Y12 inhibitors.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
    ],
    sources: [AHA_CP, SHARE_ETHNICITY, ESC_ACS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
          "The expert panel recommends an IV cephalosporin with an oral macrolide, incentive spirometry and oxygen for saturation below 95%. Her hemoglobin has fallen 17 g/L below baseline, which exceeds the 10 g/L drop at which simple transfusion is recommended. Large fluid boluses can cause pulmonary edema and worsen the syndrome. The panel judges the role of corticosteroids uncertain, and a large study linked them to longer hospital stays. She has no indication for anticoagulation or diuresis.",
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
    version: 2,
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
          "Age of 55 years rather than 49",
          "Hypertension on ramipril",
          "New ST depression on the ECG",
          "Pain onset 1 hour before the draw",
          "Prior normal stress test",
          "Treated dyslipidemia on a statin",
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
    reviewed: false,
    version: 2,
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
    title: "A fall on the stairs at a party",
    stem: "A 57-year-old man is brought to the emergency department at 01:00 by friends from a party. They say he suddenly went pale, clutched his chest and sat down on the stairs, then slid down three steps and struck his left chest on the railing. He has had four beers and smells of alcohol. He smokes and has hypertension. He now has central pressure-like chest pain and nausea. He is sweaty. There is a small bruise over the left upper chest that is tender to touch. Breath sounds are equal. His first ECG shows sinus rhythm with no ST elevation or depression.",
    vitals: { temperature: "36.6°C oral", pulse: "98/minute", resp: "20/minute", bp: "148/92 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important diagnosis to consider first?",
        options: ["Acute coronary syndrome", "Alcohol-related gastritis", "Chest wall contusion", "Isolated rib fracture", "Traumatic pneumothorax"],
        correct: 0,
        explanation: "His friends saw him go pale and clutch his chest before he fell, and he now has pressure, nausea and sweating, so an acute coronary syndrome is the lethal cause to consider first. A contusion or rib fracture explains local tenderness but not pressure with sweating. A pneumothorax is unlikely after a short slide with equal breath sounds and a normal saturation. Gastritis does not explain the collapse before the fall.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about the tender bruise on his chest is most accurate?",
        options: ["It confirms a musculoskeletal cause", "It explains his sweating and nausea", "It explains only the local soreness", "It makes troponin testing unnecessary", "It proves the pain began with the fall"],
        correct: 2,
        explanation: "The symptoms began before the fall, so tenderness over a fresh bruise explains the local soreness but cannot account for pressure, sweating and nausea, and it does not exclude a serious cause. Chest wall tenderness is also found in some patients with acute coronary syndromes. It does not remove the need for troponin testing, and the witnessed history shows the pain did not begin with the fall.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: ["Chest X-ray then discharge if clear", "Observe until he is sober", "Oral NSAID and ice for the bruise", "Repeat ECG, troponin and ASA", "Rib series X-rays and analgesia"],
        correct: 3,
        explanation: "Ongoing pressure with sweating in a smoker with hypertension needs chewed ASA, repeat ECGs every 15 to 30 minutes and a high-sensitivity troponin, because the first ECG can be normal early in ACS. Rib films and an NSAID treat the bruise, and NSAIDs add cardiac risk in ACS. Waiting until he is sober delays the diagnosis, and four beers do not explain his symptoms. Discharge after a clear chest X-ray would miss an infarction.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following features of this presentation point to a medical cause rather than an injury from the fall?",
        options: ["Bruise over the upper chest", "Chest pressure with nausea", "Equal breath sounds", "Four beers at the party", "Pain beginning before the fall", "Pallor and sweating at onset", "Tenderness at the bruise"],
        select: 3,
        correct: [1, 4, 5],
        explanation: "Pressure with nausea, pallor and sweating at onset and pain that began before the fall all point to a medical cause, most importantly an acute coronary syndrome. The bruise and its tenderness reflect the minor injury and do not argue against ischemia. Equal breath sounds help exclude a pneumothorax but do not point to a medical cause. Four beers do not cause sudden pallor, chest clutching and pressure with sweating.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-chest-pain",
      },
    ],
    sources: [AHA_CP, ESC_ACS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
  },

  /* 30 ------------------------------------------------------------------ */
  {
    id: "chest-pain-30",
    topic: "chest-pain",
    title: "Light-headed after sudden chest pain",
    stem: "A 24-year-old man presents to the emergency department with sudden sharp right chest pain and breathlessness that began 3 hours ago while he was sitting at his desk. Over the last hour he has felt light-headed when he stands. He has had no injury. He is a software developer who sits at a desk all day. He smokes cannabis daily and takes no medications. He is tall and thin. He is pale. Breath sounds are absent over the right chest, and the lower right chest is dull to percussion. The trachea is midline. Hemoglobin is 138 g/L.",
    vitals: { temperature: "36.8°C oral", pulse: "124/minute", resp: "24/minute", bp: "98/60 mmHg", o2sat: "93% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history is most concerning?",
        options: ["Onset while sitting at rest", "Postural light-headedness", "Sharp one-sided pain", "Sudden onset of breathlessness", "Three hours of symptoms"],
        correct: 1,
        explanation: "Light-headedness on standing, with pallor and tachycardia, signals blood loss, which turns a spontaneous pneumothorax into a hemopneumothorax that can bleed briskly from a torn pleural adhesion. Sudden sharp one-sided pain and breathlessness at rest are typical of a spontaneous pneumothorax but do not by themselves signal instability. A 3-hour history does not mark danger, because bleeding can start at any time.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "hemopneumothorax",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his hemoglobin of 138 g/L is most accurate?",
        options: ["It excludes a significant hemothorax", "It lags behind acute blood loss", "It permits discharge after drainage", "It rules out a need for transfusion", "It suggests the bleeding has stopped"],
        correct: 1,
        explanation: "Hemoglobin falls only after fluid shifts or resuscitation dilute the blood, so an early normal value does not exclude major acute bleeding. His postural symptoms, tachycardia and dullness matter more. A single value says nothing about whether bleeding continues, which is judged from vital signs and chest tube output. It cannot exclude a significant hemothorax or a later need for transfusion, and it gives no basis for discharge.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "hemopneumothorax",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following in his history raises his risk of a spontaneous pneumothorax?",
        options: ["Daily cannabis smoking", "Onset while seated at rest", "Sitting at a desk all day", "Taking no medications", "No history of chest injury"],
        correct: 0,
        explanation: "Smoking raises the risk of spontaneous pneumothorax, and smoked cannabis is linked to bullous lung disease, so his daily use is the relevant risk factor, alongside his tall, thin build. Onset at rest is typical of spontaneous pneumothorax and does not change risk. Long hours of sitting raise the risk of venous thromboembolism, not pneumothorax. Having no chest injury marks the event as spontaneous rather than raising its risk, and taking no medications does not raise it either.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "bts-pleural",
      },
      {
        id: "q4",
        kind: "single",
        update: "Chest X-ray shows a large right pneumothorax with an air-fluid level at the base.",
        prompt: "Which of the following is the most appropriate immediate management?",
        options: ["Conservative care and repeat X-ray", "Needle aspiration only", "Needle decompression at 2nd space", "Oxygen and admission to observe", "Tube thoracostomy and crossmatch"],
        correct: 4,
        explanation: "A hemopneumothorax with signs of hypovolemia needs a chest tube to drain air and blood and measure ongoing loss, with blood crossmatched and thoracic surgery involved, because continued bleeding often needs surgery. Conservative care, oxygen alone and needle aspiration leave blood in the chest and do not measure bleeding. Needle decompression is for tension physiology, and his trachea is midline.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "hemopneumothorax",
      },
    ],
    sources: [HEMOPNEUMOTHORAX, BTS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
        prompt: "Which of the following features of her presentation most increases her pretest probability of PE?",
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
        prompt: "Which of the following is the most appropriate approach to D-dimer testing in this patient?",
        options: [
          "Apply the age-adjusted cutoff",
          "Apply the PEGeD pretest thresholds",
          "Skip it and go straight to chest imaging",
          "Use it only in the third trimester",
          "Use the pregnancy-adapted YEARS rule",
        ],
        correct: 4,
        explanation:
          "Thrombosis Canada calls the pregnancy-adapted YEARS protocol the best validated method for excluding PE in pregnancy. It pairs D-dimer with the three YEARS items, and in its validation study it avoided chest imaging in 39% of women. Going straight to imaging gives up that chance to spare her and the fetus radiation. D-dimer rises through pregnancy and is highest in the third trimester, so it is least useful late in gestation. PEGeD excluded pregnant women, and the age-adjusted cutoff applies only to patients over 50.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "tc-preg-dx",
      },
      {
        id: "q3",
        kind: "single",
        update: "She has no signs of DVT and no hemoptysis, and PE is not the most likely diagnosis. Her D-dimer is 780 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step in her assessment for PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Perfusion lung scan",
          "Therapeutic LMWH until imaging",
          "No imaging, PE considered excluded",
        ],
        correct: 4,
        explanation:
          "She has none of the three YEARS items, so PE is excluded when the D-dimer is below 1000 mcg/L FEU, and hers is 780 mcg/L. No imaging or anticoagulation is needed. Compression ultrasound is used only for women with signs of DVT. CT or perfusion scanning would expose her and the fetus to radiation without benefit.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "years-pregnancy",
      },
      {
        id: "q4",
        kind: "single",
        update: "Later, a woman at 30 weeks of pregnancy has the same symptoms plus hemoptysis. She has no leg symptoms. Her D-dimer is also 780 mcg/L FEU.",
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
          "Hemoptysis is a YEARS item, so her D-dimer threshold falls to 500 mcg/L, and 780 mcg/L is above it. PE is not excluded, and CT pulmonary angiography was the imaging test in the validation study. Thrombosis Canada also accepts a V/Q scan, and some physicians prefer it when the chest X-ray is normal. Compression ultrasound comes first only when there are signs of DVT. Repeating the D-dimer or discharging her leaves PE unexcluded, and an echo cannot rule it out in a stable patient.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "years-pregnancy",
      },
    ],
    sources: [ESC_PE, YEARS_PREG, TC_PREG_DX],
    ...meta,
    version: 2,
  },

  /* 32 ------------------------------------------------------------------ */
  {
    id: "chest-pain-32",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure during a bad flu",
    stem: "A 71-year-old man presents to the emergency department with 2 hours of central chest pressure and breathlessness. Four days ago he developed fever, cough and muscle aches, and a nasal swab at a walk-in clinic was positive for influenza A. He thought the chest pain came from coughing. He has hypertension and dyslipidemia and takes ramipril and rosuvastatin. He is diaphoretic. There are a few crackles at the right base. Coughing and pressing on the chest do not change the pressure.",
    vitals: { temperature: "37.9°C oral", pulse: "102/minute", resp: "22/minute", bp: "152/88 mmHg", o2sat: "94% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following most raises his risk of acute myocardial infarction this week?",
        options: ["Confirmed influenza 4 days ago", "Frequent coughing fits", "Muscle aches with the fever", "Rosuvastatin therapy", "Temperature of 37.9°C"],
        correct: 0,
        explanation: "Hospital admission for acute myocardial infarction is about six times more likely in the 7 days after laboratory-confirmed influenza, so his infection sharply raises his short-term risk on top of hypertension and dyslipidemia. Coughing fits and muscle aches are symptoms of the infection, not separate coronary risk factors. A low-grade fever is part of the same illness. Rosuvastatin lowers his coronary risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "influenza-mi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about his belief that the pain comes from coughing is most accurate?",
        options: ["It explains the sweating", "It is confirmed by the crackles", "It makes an ECG unnecessary", "It still leaves ischemia possible", "It still leaves reflux most likely"],
        correct: 3,
        explanation: "Pressure that coughing and palpation do not change, with sweating and breathlessness, is not explained by strained muscles, and blaming the cough is an unreliable reason to stop looking for ischemia. Muscle strain does not cause sweating. The crackles fit his infection or early heart failure and do not confirm a muscular cause. Reflux does not explain central pressure with sweating and breathlessness, so it is not the leading alternative. An ECG is still needed within minutes.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following family history findings would most raise his pretest probability of coronary disease?",
        options: ["Father with MI at age 79", "Mother with a stroke at 85", "Sister with atrial fibrillation", "Uncle with MI at age 50", "Younger brother with MI at 48"],
        correct: 4,
        explanation: "Premature coronary disease in a first-degree relative, before 55 in a man or before 65 in a woman, is a recognized risk factor, so a brother with an MI at 48 counts. A father's MI at 79 and a mother's stroke at 85 are not premature. An uncle is a second-degree relative. Atrial fibrillation in a sister is not a coronary risk factor.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-lipids",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings most favours myocardial ischemia over a musculoskeletal cause of his pain?",
        options: ["Crackles at the right base", "Diaphoresis with the pressure", "Fever of 37.9°C", "Muscle aches for 4 days", "Onset during a flu illness"],
        correct: 1,
        explanation: "Pressure with sweating is an ischemic pattern, and muscular pain from coughing does not cause diaphoresis. Crackles at the base and a low-grade fever fit influenza or a secondary pneumonia. Myalgia is part of influenza. Onset during the illness does not separate the two causes, because influenza can strain the chest wall and also trigger infarction.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
    ],
    sources: [INFLUENZA_MI, AHA_CP, LIPIDS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
  },

  /* 33 ------------------------------------------------------------------ */
  {
    id: "chest-pain-33",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Tightness on the ride to work",
    stem: "A 38-year-old man presents to the emergency department with 1 hour of central chest tightness and shortness of breath that began while he was cycling to work. He has had type 1 diabetes since age 9 and uses an insulin pump. He has diabetic retinopathy and microalbuminuria. His last hemoglobin A1c was 9.2%. He does not smoke and takes no other medications. He is diaphoretic and anxious. The lungs are clear and there is no murmur. Capillary glucose is 11.4 mmol/L. His ECG shows 1 mm horizontal ST depression in V4 to V6.",
    vitals: { temperature: "36.7°C oral", pulse: "104/minute", resp: "20/minute", bp: "142/86 mmHg", o2sat: "97% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following most raises his pretest probability of coronary disease?",
        options: ["His age of 38 years", "His anxiety at triage", "Insulin pump therapy", "Lifelong non-smoking", "Long-standing type 1 diabetes"],
        correct: 4,
        explanation: "Type 1 diabetes for 29 years, with retinopathy and microalbuminuria, confers coronary risk far above that expected at 38, and Canadian lipid guidance treats diabetes of this duration as a statin-indicated condition. Young age lowers the baseline probability but does not outweigh this. Anxiety is not a risk factor, and never smoking removes only one factor. The pump is a way of giving insulin and does not itself change his risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-lipids",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this man?",
        options: ["Acute pericarditis", "Diabetic ketoacidosis", "Non-ST elevation ACS", "Panic attack", "Pulmonary embolism"],
        correct: 2,
        explanation: "Exertional chest tightness with sweating and new horizontal ST depression in V4 to V6 is a non-ST elevation ACS in a man whose long-standing diabetes has aged his coronary arteries. Ketoacidosis would need blood ketones and an acidosis, and it does not explain exertional tightness with regional ST depression. Pericarditis gives positional pain with diffuse ST elevation. A panic label is unsafe with ischemic ECG changes, and nothing in the history points to pulmonary embolism.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "He chewed ASA 160 mg in the ambulance. The tightness continues at 6 out of 10.",
        prompt: "Which of the following is the most appropriate treatment for his ongoing pain now?",
        options: ["Hydromorphone 1 mg IV", "Ketorolac 15 mg IV", "Lorazepam 1 mg SL", "Metoprolol 5 mg IV", "Nitroglycerin 0.4 mg SL"],
        correct: 4,
        explanation: "Sublingual nitroglycerin 0.4 mg is the first treatment for ongoing ischemic pain when the systolic pressure is well above 90 mmHg and no phosphodiesterase inhibitor has been taken, and he takes no other medications. Ketorolac and other NSAIDs raise the risk of adverse cardiac events in ACS. Lorazepam treats anxiety, not ischemia. Opioids are kept for pain that persists despite nitrates, and routine early IV metoprolol can precipitate shock.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        update: "He tells you he thought this was a low blood sugar. He stopped cycling and drank juice, and he felt a little better for a few minutes before the tightness returned.",
        prompt: "Which of the following is the most appropriate response to his belief that this was a low blood sugar?",
        options: ["Accept hypoglycemia as the cause", "Continue the ACS pathway", "Dextrose 25 g IV", "Recheck glucose, then reassess", "Suspend the insulin pump"],
        correct: 1,
        explanation: "Ischemic pain waxes and wanes, so brief improvement after juice does not show that hypoglycemia caused it, and exertional tightness with sweating and new ST depression keeps ACS the working diagnosis. His capillary glucose of 11.4 mmol/L gives no support to hypoglycemia, and dextrose would only raise it further. Waiting for a repeat glucose delays ACS care. Suspending the pump in type 1 diabetes risks ketoacidosis within hours.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
    ],
    sources: [LIPIDS, ESC_ACS, AHA_CP],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
    alsoTopics: ["ischemic-heart-disease"],
    title: "Chest pressure in a man on long-term therapy",
    stem: "A 49-year-old man presents to the emergency department with 70 minutes of central chest pressure that spreads to his left arm, with nausea. It began at rest while he was reading. He has had HIV infection for 20 years, and his viral load has been undetectable for 12 years on bictegravir, emtricitabine and tenofovir alafenamide in one daily tablet. He has never smoked and takes no other medications. He is diaphoretic. The lungs are clear and there is no murmur.",
    vitals: { temperature: "36.8°C oral", pulse: "90/minute", resp: "18/minute", bp: "144/86 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following diagnoses should be considered first in this man?",
        options: ["Acute coronary syndrome", "Esophageal candidiasis", "Gastroesophageal reflux", "Pneumocystis pneumonia", "Viral pericarditis"],
        correct: 0,
        explanation: "Central pressure spreading to the left arm with nausea and sweating is an acute coronary syndrome until proven otherwise, and it is the lethal cause to address first. Pneumocystis pneumonia and esophageal candidiasis are opportunistic infections that are unlikely after 12 years of viral suppression, and neither causes pressure spreading to the arm. Reflux is considered only after ischemia is addressed, and pericarditis gives sharp positional pain.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following should be completed within 10 minutes of his arrival?",
        options: ["Chest X-ray in the department", "Full HIV history and CD4 count", "High-sensitivity troponin result", "Pulmonary CT angiography", "Twelve-lead ECG interpreted"],
        correct: 4,
        explanation: "A 12-lead ECG should be recorded and read within 10 minutes of arrival in anyone with possible ACS, before the history is complete, because ST elevation changes management at once. A troponin is drawn early, but its result takes longer. A chest X-ray and CT angiography can follow if the ECG and history point elsewhere. His HIV history matters for risk but should not delay the ECG.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows 1 mm horizontal ST depression in V4 to V6. He has been given ASA 160 mg chewed.",
        prompt: "Which of the following is the most appropriate next investigation?",
        options: ["Coronary CT angiography", "D-dimer to exclude PE", "Exercise stress test today", "Serial high-sensitivity troponin", "Single troponin at 6 hours"],
        correct: 3,
        explanation: "With new ST depression, high-sensitivity troponin at presentation and again at 1 to 2 hours shows whether this is a non-ST elevation infarction and guides the timing of angiography. A single troponin at 6 hours delays the answer. Exercise testing is unsafe with ongoing symptoms and ischemic ECG changes. Coronary CT angiography is for patients at low to intermediate risk with a normal ECG and troponin. A D-dimer does not address his most likely diagnosis.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following most raises his pretest probability of coronary disease?",
        options: ["Bictegravir-based regimen", "Chronic HIV infection", "Lifelong non-smoking", "Rest onset of the pain", "Undetectable viral load"],
        correct: 1,
        explanation: "People living with HIV have higher rates of myocardial infarction than people without HIV, and the excess remains in those with a suppressed viral load, so his 20 years of infection raise his pretest probability. An undetectable viral load does not return his risk to baseline. His bictegravir-based regimen is not an established coronary risk factor. Never smoking removes a major risk factor, and onset at rest describes the pain rather than his background risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "hiv-mi",
      },
    ],
    sources: [AHA_CP, ESC_ACS, HIV_MI],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
    alsoTopics: ["ischemic-heart-disease"],
    title: "Tightness near the end of a long ride",
    stem: "A 56-year-old man presents to the emergency department with chest tightness that came on during the last climb of a 90 km bicycle ride this morning and eased 10 minutes after he stopped. He had two shorter episodes on hill climbs last week, the first he has ever had. He has raced bicycles for 30 years. He smoked for 15 years before quitting at 30. A private screening CT last year gave a coronary artery calcium score of 410, and he was told his fitness would protect him. He takes no medications. He feels well now. His examination is normal. His ECG shows sinus bradycardia and is otherwise normal.",
    vitals: { temperature: "36.6°C oral", pulse: "50/minute", resp: "14/minute", bp: "128/76 mmHg", o2sat: "99% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his high level of fitness is most accurate?",
        options: ["Angina is physiologically unlikely in him", "Athletes still develop coronary plaque", "Endurance training prevents plaque rupture", "His tightness is best explained by overuse", "Troponin testing is unnecessary for him"],
        correct: 1,
        explanation: "Lifelong endurance athletes still develop coronary atherosclerosis, and the highest training volumes are associated with more coronary calcification, so his fitness does not exclude coronary disease. Tightness that comes with climbing and stops with rest is typical angina, not overuse. Fitness does not make angina unlikely, protect against plaque rupture or remove the need for troponin testing.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "athlete-cac",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of his history places him at higher short-term risk?",
        options: ["Heart rate of 50 at rest", "New angina within the past week", "Smoking that stopped at 30", "Symptoms only on exertion", "Well between episodes"],
        correct: 1,
        explanation: "Angina that is new within recent weeks is a form of unstable angina and carries a higher short-term risk of infarction than long-standing stable symptoms. A resting heart rate of 50 is expected in a trained cyclist. He stopped smoking 26 years ago, which has lowered that risk. Symptoms confined to exertion and feeling well between episodes do not lower his risk when the angina is new.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "His high-sensitivity troponin T is below 5 ng/L at arrival and at 1 hour (99th percentile 14 ng/L).",
        prompt: "Which of the following statements about his normal troponins and ECG is most accurate?",
        options: ["They confirm a noncardiac cause", "They exclude infarction, not stenosis", "They permit a return to racing", "They rule out coronary disease", "They show the pain was muscular"],
        correct: 1,
        explanation: "Normal troponins and a normal resting ECG exclude myocardial infarction, not the stenosis that causes his angina, so he needs prompt functional or anatomical coronary testing and should not race until it is done. They do not confirm a noncardiac or muscular cause, and they do not rule out coronary disease.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following in his history most raises his pretest probability of coronary disease?",
        options: ["Calcium score of 410 last year", "Resting heart rate of 50", "Smoking that ended at 30", "Thirty years of racing", "Weight of 70 kg"],
        correct: 0,
        explanation: "A coronary artery calcium score above 400 means extensive coronary atherosclerosis and a high risk of coronary events, whatever his fitness. Thirty years of racing does not lower this, and high training volumes are linked to more calcification. His smoking ended 26 years ago. A resting rate of 50 and a weight of 70 kg reflect his training.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-lipids",
      },
    ],
    sources: [ATHLETE_CAC, ESC_ACS, AHA_CP, LIPIDS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
          "Ketorolac 30 mg IV every 6 hours",
          "Pantoprazole 40 mg IV daily",
          "Tenecteplase 45 mg IV bolus",
          "Warfarin 5 mg PO once daily",
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
    reviewed: false,
    version: 2,
  },

  /* 41 ------------------------------------------------------------------ */
  {
    id: "chest-pain-41",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure during a movie",
    stem:
      "A 34-year-old woman presents to the emergency department at 22:30 with 50 minutes of central chest pressure and nausea that began while she sat watching a movie. She has had two shorter episodes at rest this week. She does not smoke, has no diabetes and takes no medications. Her mother had coronary bypass surgery at age 46, and her brother started a cholesterol medication at age 19. There are yellow plaques on both upper eyelids and firm nodules over both Achilles tendons. The heart and lungs are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "18/minute", bp: "128/78 mmHg", o2sat: "98% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following underlying conditions most likely explains her risk of early coronary disease?",
        options: [
          "Anomalous coronary artery origin",
          "Familial hypercholesterolemia",
          "Hypertrophic cardiomyopathy",
          "Nephrotic syndrome",
          "Systemic lupus erythematosus",
        ],
        correct: 1,
        explanation:
          "Achilles tendon xanthomas, a mother who needed bypass surgery at 46 and a brother on lipid treatment at 19 point to familial hypercholesterolemia. It is an autosomal dominant cause of premature coronary disease, and it raises her pretest probability of ACS well above what her age, sex and nonsmoking status suggest. An anomalous coronary origin and hypertrophic cardiomyopathy do not cause xanthomas or explain a sibling on lipid treatment. Nephrotic syndrome and lupus raise coronary risk, but she has no features of either and neither explains this family pattern.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "fh-canada",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate action within 10 minutes of her arrival?",
        options: [
          "Chest radiograph and troponin",
          "ECG and chewed ASA",
          "Lipid profile and troponin",
          "Nitroglycerin and CT angiogram",
          "Troponin, then decide on ECG",
        ],
        correct: 1,
        explanation:
          "Ongoing chest pressure with nausea after two rest episodes this week is possible ACS. She needs an ECG recorded and read within 10 minutes of arrival, and ASA is given early unless there is a contraindication. Troponin and a chest radiograph are useful but do not replace the ECG. A lipid profile does not guide acute care. CT angiography does not come before the ECG in suspected ACS.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "At triage she rated the pressure 3 out of 10, and she lies still and looks comfortable. The resident suggests a noncardiac cause.",
        prompt: "Which of the following statements about her low pain score is most accurate?",
        options: [
          "It does not change her ACS probability",
          "It lowers her probability of ACS",
          "It makes troponin testing unnecessary",
          "It points to a noncardiac cause",
          "It raises her probability of ACS",
        ],
        correct: 0,
        explanation:
          "In an emergency department cohort of 3 306 patients with possible ACS, severe pain of 9 or 10 out of 10 was not associated with acute MI or with death, MI or revascularization at 30 days. Pain severity therefore should not move her probability of ACS in either direction. Her probability rests on ongoing pain after two rest episodes this week, nausea and her likely familial hypercholesterolemia. A low score does not point to a noncardiac cause, and it cannot replace the ECG and troponin testing that possible ACS requires.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "pain-severity",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate recommendation for her family?",
        options: [
          "Cascade screening of first-degree relatives",
          "Genetic testing only after an MI",
          "Screening her children at age 18",
          "Stress testing of her brother",
          "No testing until symptoms appear",
        ],
        correct: 0,
        explanation:
          "Familial hypercholesterolemia is autosomal dominant, so each first-degree relative has a one in two chance of carrying it. The Canadian Cardiovascular Society endorses cascade screening, in which first-degree relatives are tested and testing extends to further relatives as new cases are found, and cascade programs include children. Waiting for symptoms, an MI or adulthood delays treatment that prevents early coronary disease. Stress testing does not detect the lipid disorder.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "fh-canada",
      },
    ],
    sources: [FH_CANADA, ESC_ACS, PAIN_SEVERITY],
    ...meta,
    version: 2,
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
    title: "Fever and painful swallowing weeks after a procedure",
    stem: "A 64-year-old woman presents to the emergency department with 2 days of fever, chest pain and retrosternal pain on swallowing. Three weeks ago she had catheter ablation for paroxysmal atrial fibrillation. She takes apixaban and metoprolol. This morning her husband noticed 10 minutes of right arm weakness that has fully resolved. She looks unwell. The heart sounds are normal and the lungs are clear. The neurological examination is now normal. Her ECG shows sinus tachycardia.",
    vitals: { temperature: "38.8°C oral", pulse: "116/minute", resp: "22/minute", bp: "108/64 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history is most important for the diagnosis?",
        options: ["Apixaban anticoagulation", "Brief right arm weakness", "Metoprolol therapy", "Pain on swallowing", "Recent catheter ablation"],
        correct: 4,
        explanation: "Fever, painful swallowing and a transient neurological deficit 3 weeks after catheter ablation for atrial fibrillation fit an atrioesophageal fistula, which usually appears within weeks of the procedure. Without the ablation history, painful swallowing and fever suggest esophagitis and the arm weakness a simple embolic event from atrial fibrillation. Apixaban and metoprolol do not cause this syndrome.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aef-review",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this woman?",
        options: ["Atrioesophageal fistula", "Candida esophagitis", "Infective endocarditis", "Post-ablation pericarditis", "Pulmonary vein stenosis"],
        correct: 0,
        explanation: "Fever, a neurological event from air or septic emboli and chest pain or painful swallowing weeks after ablation are the usual features of an atrioesophageal fistula, which is lethal without urgent surgery. Endocarditis can cause fever and emboli but not painful swallowing. Candida esophagitis causes painful swallowing without emboli. Pericarditis after ablation usually occurs within days and gives positional pain. Pulmonary vein stenosis causes breathlessness and hemoptysis rather than fever.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aef-review",
      },
      {
        id: "q3",
        kind: "single",
        update: "A chest X-ray and a first CT of the chest with IV contrast are reported as normal, with no mediastinal air.",
        prompt: "Which of the following is the most accurate interpretation of the normal CT?",
        options: ["It favours a transient ischemic attack", "It may need to be repeated", "It permits upper endoscopy next", "It rules out an esophageal injury", "It supports outpatient antibiotics"],
        correct: 1,
        explanation: "CT of the chest is the usual first test, but a fistula can be missed on the first scan and several reported cases needed repeat imaging, so one normal CT does not exclude it or an esophageal injury when the picture fits. Upper endoscopy is avoided because insufflated air can enter the left atrium and cause massive air embolism. A transient ischemic attack does not explain her fever and painful swallowing. She needs admission and cardiac surgery input, not outpatient antibiotics.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aef-review",
      },
    ],
    sources: [AEF_REVIEW],
    reviewed: true,
    author: "Preceptor",
    version: 3,
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
    title: "Tightness during cancer treatment",
    stem: "A 58-year-old woman presents to the emergency department with 30 minutes of central chest tightness and sweating. She started a 46-hour intravenous fluorouracil infusion for colon cancer 2 days ago and had a similar shorter episode yesterday during the infusion. The pump is still running. She has hypertension. She is not short of breath. She looks uncomfortable and diaphoretic. There is no chest wall tenderness and the lungs are clear. There is no leg swelling.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "18/minute", bp: "150/88 mmHg", o2sat: "98% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her presentation most points to a cardiac cause?",
        options: ["Active colon cancer", "Age of 58 years", "History of hypertension", "Pain during the infusion", "No leg swelling"],
        correct: 3,
        explanation: "Tightness with sweating during and shortly after a fluorouracil infusion, recurring on consecutive days, ties the pain to the drug and points to coronary vasospasm. Active cancer raises her risk of pulmonary embolism rather than pointing to a cardiac cause. Her age and hypertension are background coronary risk factors that do not explain the timing. The absence of leg swelling does not localize the cause.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-cardioonc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her chest pain?",
        options: ["A panic attack", "Chest wall pain", "Coronary vasospasm", "Pulmonary embolism", "Reflux esophagitis"],
        correct: 2,
        explanation: "Fluorouracil can cause coronary vasospasm and ischemia during or within days of an infusion, so recurrent tightness with sweating tied to each infusion is most likely vasospasm. Reflux and chest wall pain do not explain recurrent tightness with sweating that tracks the infusion. A panic attack is a diagnosis of exclusion. Active cancer keeps pulmonary embolism in mind, but she is not short of breath or hypoxic and the timing fits the drug.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-cardioonc",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her ECG shows transient ST elevation that resolves as the pain eases with nitroglycerin.",
        prompt: "Which of the following is the most appropriate management for her now?",
        options: ["Continue the infusion unchanged", "Start IV metoprolol", "Stop the drug and give nitrates", "Switch to capecitabine tablets", "Thrombolysis for the ST elevation"],
        correct: 2,
        explanation: "Fluoropyrimidine vasospasm is managed by stopping the infusion and giving nitrates, with a calcium channel blocker if needed, and cardiology review with coronary assessment before any rechallenge. Continuing the infusion, or switching to oral capecitabine, which is also a fluoropyrimidine, risks recurrent spasm and infarction. Beta blockers can worsen coronary vasospasm. Thrombolysis is not indicated for ST elevation that resolves with nitroglycerin.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-cardioonc",
      },
    ],
    sources: [ESC_CARDIOONC],
    reviewed: true,
    author: "Preceptor",
    version: 2,
  },

  /* 46 ------------------------------------------------------------------ */
  {
    id: "chest-pain-46",
    topic: "chest-pain",
    alsoTopics: ["infectious-diseases"],
    title: "Fever and pleuritic pain with a new murmur",
    stem: "A 34-year-old man presents to the emergency department with 4 days of fever, cough and right-sided pleuritic chest pain. He injects fentanyl and crystal methamphetamine several times a day and sometimes reuses needles. He has track marks on both forearms. He is flushed and unwell. A soft holosystolic murmur is heard at the left lower sternal border and becomes louder with inspiration. There are scattered crackles in both lungs. There is no leg swelling. A chest X-ray shows multiple small nodules in both lower zones, some with central lucency.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "24/minute", bp: "104/64 mmHg", o2sat: "92% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most raises his pretest probability of infective endocarditis?",
        options: ["Age of 34 years", "Cough for 4 days", "Injection drug use", "Pleuritic chest pain", "Scattered lung crackles"],
        correct: 2,
        explanation: "Injection drug use is the major risk factor for right-sided endocarditis, because skin organisms and contaminants are injected into venous blood that reaches the tricuspid valve first, and reusing needles adds to this. Cough, crackles and pleuritic pain are effects of septic emboli to the lungs rather than background risk factors. His age alone does not raise the probability.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-endocarditis",
      },
      {
        id: "q2",
        kind: "single",
        update: "He was seen at another emergency department 2 days ago and sent home on amoxicillin. One set of blood cultures drawn there has no growth at 48 hours.",
        prompt: "Which of the following statements about the negative blood culture is most accurate?",
        options: ["It confirms a community pneumonia", "It does not exclude endocarditis", "It makes an echocardiogram unneeded", "It still favours a simple pneumonia", "It supports discharge on amoxicillin"],
        correct: 1,
        explanation: "A single set of cultures can miss the bacteremia of endocarditis, so three sets from separate sites are needed before antibiotics are changed. The negative set does not confirm pneumonia, and a simple pneumonia does not explain a murmur louder with inspiration or multiple cavitating nodules. A murmur that increases with inspiration and nodules suggesting septic emboli still call for echocardiography, and he is too unwell for discharge.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-endocarditis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: ["Blood cultures, then IV vancomycin", "CT pulmonary angiography first", "Heparin for presumed embolism", "IV ceftriaxone for pneumonia", "Transesophageal echo before antibiotics"],
        correct: 0,
        explanation: "Three sets of blood cultures from separate sites, then prompt empiric IV vancomycin to cover Staphylococcus aureus including MRSA, come first in a septic patient with suspected endocarditis, followed by echocardiography. Echocardiography should not delay antibiotics when he is this unwell. Ceftriaxone for pneumonia misses MRSA. The nodules are septic emboli, so heparin and CT pulmonary angiography for thromboembolism are not indicated.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-endocarditis",
      },
    ],
    sources: [AHA_ENDOCARDITIS],
    reviewed: true,
    author: "Preceptor",
    version: 3,
  },

  /* 47 ------------------------------------------------------------------ */
  {
    id: "chest-pain-47",
    topic: "chest-pain",
    alsoTopics: ["multiple-trauma"],
    title: "Kicked while trimming hooves",
    stem:
      "You are working in a rural hospital emergency department. A 52-year-old woman presents to the emergency department 90 minutes after a horse kicked her in the front of the chest while she was trimming its hooves. She felt faint for a few seconds but did not fall. She now has sharp central chest pain that is worse with deep breaths. She has no medical history, takes no medications and does not smoke. There is a curved bruise over the lower sternum, which is tender. Air entry is equal and heart sounds are normal. Bedside ultrasound shows no pericardial fluid and lung sliding on both sides. Her ECG shows sinus rhythm with frequent premature ventricular complexes and a right bundle branch block that was not present on an ECG 1 year ago.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "20/minute", bp: "128/80 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her ECG changes?",
        options: [
          "Acute coronary plaque rupture",
          "Blunt cardiac injury",
          "Commotio cordis",
          "Pulmonary embolism",
          "Stress cardiomyopathy",
        ],
        correct: 1,
        explanation:
          "A direct blow over the sternum followed by new ventricular ectopy and a new right bundle branch block points to blunt cardiac injury. Conduction abnormalities are common in cardiac contusion, and a right bundle branch block suggests injury to the right ventricle, which lies behind the sternum. Commotio cordis is ventricular fibrillation at the moment of impact, and she did not arrest. Plaque rupture is unlikely in a nonsmoker with no risk factors whose pain began with the blow. Nothing points to pulmonary embolism, and stress cardiomyopathy usually shows ST and T wave changes that mimic infarction.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "wjes-bci",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests should be added now for this patient?",
        options: [
          "Cardiac magnetic resonance",
          "Coronary CT angiography",
          "Creatine kinase-MB",
          "High-sensitivity troponin",
          "Serum D-dimer",
        ],
        correct: 3,
        explanation:
          "Troponin with the ECG is the recommended screen for cardiac contusion after a chest blow. A Quebec review of sternal fractures advised troponin with the ECG to find patients at risk of arrhythmia, repeated 4 to 8 hours after injury. Creatine kinase-MB also comes from injured chest wall muscle and has the weakest accuracy for cardiac contusion. Coronary CT angiography and cardiac MRI are not screening tests in the emergency department. A D-dimer is expected to rise after trauma and does not address her heart.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "cfp-sternal",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her pain eases with analgesia. A lateral chest radiograph shows a nondisplaced fracture of the sternal body. She feels well and asks to go home.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Discharge after 6 hours of observation",
          "Discharge with analgesia and follow-up",
          "Monitored bed with continuous ECG",
          "Outpatient echocardiogram, then discharge",
          "Transfer for coronary angiography",
        ],
        correct: 2,
        explanation:
          "Her premature ventricular complexes and right bundle branch block are new ECG changes after a chest blow, and guidance advises admission for monitoring when the ECG shows new changes or troponin is raised. Feeling well and pain relief do not show that her heart is uninjured. A sternal fracture alone does not predict cardiac injury, so it neither explains nor excludes her ECG findings. A short observation or an outpatient echocardiogram leaves arrhythmia risk unmonitored. Nothing suggests a coronary occlusion that needs angiography.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "east-bci",
      },
      {
        id: "q4",
        kind: "single",
        update: "Before any disposition is made, she becomes light-headed. BP is 84/52 mmHg and pulse 122/minute in sinus rhythm. Her neck veins are distended, air entry remains equal and the lungs are clear.",
        prompt: "Which of the following is the most appropriate next step for her?",
        options: [
          "Bedside echocardiography",
          "Coronary CT angiography",
          "furosemide 40 mg IV",
          "Left needle decompression",
          "metoprolol 5 mg IV",
        ],
        correct: 0,
        explanation:
          "New hypotension with distended neck veins and clear lungs after a chest blow raises tamponade or right ventricular failure. Guidance reserves echocardiography in cardiac contusion for patients who become hypotensive or develop arrhythmias, and at the bedside it shows pericardial blood and ventricular function within minutes. The earlier normal ultrasound does not exclude fluid that has gathered since. Furosemide would worsen her hypotension, and metoprolol would remove the tachycardia that supports her output. Equal air entry argues against tension pneumothorax, and a CT scan would move an unstable patient away from resuscitation.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "east-bci",
      },
    ],
    sources: [WJES_BCI, CFP_STERNAL, EAST_BCI],
    ...meta,
    version: 2,
  },
];
