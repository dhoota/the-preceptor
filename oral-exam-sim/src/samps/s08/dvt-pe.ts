// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { KeyItem, Samp, UnacceptableItem } from "@/engine/samp";
import type { Source } from "@/engine/types";

const k = (id: string, text: string, ...match: string[]): KeyItem => ({ id, text, match });
const bad = (text: string, match: string[], dangerous = false): UnacceptableItem =>
  dangerous ? { text, match, dangerous: true } : { text, match };
const kf = (n: number) => ({ topic: "dvt-pe", n });
const META = { reviewed: true, author: "Draft for review by Arjan Dhoot, MD", version: 1 };

/* Sources ---------------------------------------------------------------- */

const TC_DVT_DX: Source = { id: "tc-dvt-dx", citation: "Thrombosis Canada. Clinical guide: deep vein thrombosis diagnosis. 2025." };
const TC_DVT_TX: Source = { id: "tc-dvt-tx", citation: "Thrombosis Canada. Clinical guide: deep vein thrombosis treatment. 2025." };
const TC_PE: Source = { id: "tc-pe", citation: "Thrombosis Canada. Clinical guides: pulmonary embolism diagnosis (2026) and pulmonary embolism treatment (2025)." };
const TC_PREG: Source = { id: "tc-preg", citation: "Thrombosis Canada. Clinical guide: pregnancy, diagnosis of DVT and PE. 2026." };
const TC_CANCER: Source = { id: "tc-cancer", citation: "Thrombosis Canada. Clinical guide: cancer and thrombosis. 2024." };
const TC_SVT: Source = { id: "tc-svt", citation: "Thrombosis Canada. Clinical guide: superficial thrombophlebitis, superficial vein thrombosis. 2026." };
const TC_APS: Source = { id: "tc-aps", citation: "Thrombosis Canada. Clinical guide: thrombophilia, antiphospholipid syndrome. 2025." };
const TC_DOAC: Source = { id: "tc-doac", citation: "Thrombosis Canada. Clinical guides: apixaban and rivaroxaban. 2025." };
const TC_UFH: Source = { id: "tc-ufh", citation: "Thrombosis Canada. Clinical guide: unfractionated heparin, low molecular weight heparin and fondaparinux. 2025." };
const ESC: Source = {
  id: "esc-pe",
  citation: "Konstantinides SV, et al. 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
};
const PERC: Source = {
  id: "perc",
  citation: "Kline JA, et al. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost. 2008.",
};
const YEARS: Source = {
  id: "years",
  citation: "van der Hulle T, et al. Simplified diagnostic management of suspected pulmonary embolism (the YEARS study). Lancet. 2017.",
};
const ADJUST: Source = {
  id: "adjust-pe",
  citation: "Righini M, et al. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism: the ADJUST-PE study. JAMA. 2014.",
};
const PREG_YEARS: Source = {
  id: "preg-years",
  citation: "van der Pol LM, et al. Pregnancy-adapted YEARS algorithm for diagnosis of suspected pulmonary embolism. N Engl J Med. 2019.",
};
const WELLS_DVT: Source = {
  id: "wells-dvt",
  citation: "Wells PS, et al. Evaluation of D-dimer in the diagnosis of suspected deep-vein thrombosis. N Engl J Med. 2003.",
};
const SPESI: Source = {
  id: "spesi",
  citation:
    "Jiménez D, et al. Simplification of the pulmonary embolism severity index for prognostication in patients with acute symptomatic pulmonary embolism. Arch Intern Med. 2010.",
};
const HESTIA: Source = {
  id: "hestia",
  citation: "Zondag W, et al. Outpatient treatment in patients with acute pulmonary embolism: the Hestia Study. J Thromb Haemost. 2011.",
};
const SOGC: Source = {
  id: "sogc-vte",
  citation: "Chan WS, et al. Venous thromboembolism and antithrombotic therapy in pregnancy. SOGC clinical practice guideline. J Obstet Gynaecol Can. 2014.",
};
const SURPRISE: Source = {
  id: "surprise",
  citation:
    "Beyer-Westendorf J, et al. Prevention of thromboembolic complications in patients with superficial-vein thrombosis given rivaroxaban or fondaparinux: the open-label, randomised, non-inferiority SURPRISE phase 3b trial. Lancet Haematol. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/28219692/",
};
const TRAPS: Source = {
  id: "traps",
  citation: "Pengo V, et al. Rivaroxaban vs warfarin in high-risk patients with antiphospholipid syndrome. Blood. 2018.",
};

/* Shared key items -------------------------------------------------------- */

const PRIOR_VTE = k(
  "prior",
  "Previous DVT or PE",
  "previous dvt", "prior dvt", "previous pe", "prior pe", "previous vte", "prior vte",
  "history of dvt", "history of pe", "history of vte", "previous clot", "prior clot", "previous blood clot",
);
const CANCER = k("cancer", "Active cancer or recent cancer treatment", "cancer", "malignancy", "chemotherapy", "tumour", "tumor");
const SURGERY = k(
  "surgery",
  "Recent surgery or hospitalization",
  "surgery", "operation", "hospitalization", "hospitalisation", "admission", "admitted to hospital",
);
const IMMOB = k(
  "immob",
  "Recent immobilization, plaster cast or paralysis",
  "immobilization", "immobilisation", "immobile", "immobility", "bedridden", "bed rest", "cast", "paralysis", "paresis",
);
const FAMILY = k(
  "family",
  "Family history of VTE or a known thrombophilia",
  "family history", "thrombophilia", "factor v leiden", "antiphospholipid", "protein c", "protein s", "antithrombin", "prothrombin",
);
const ESTROGEN = k(
  "estrogen",
  "Estrogen containing contraception or hormone therapy",
  "estrogen", "oral contraceptive", "contraceptive", "ocp", "birth control", "hormone",
);
const PREGNANCY = k("pregnancy", "Current pregnancy or recent postpartum state", "pregnancy", "pregnant", "postpartum", "last menstrual", "lmp");
const TRAVEL = k("travel", "Prolonged travel of more than 4 hours", "travel", "flight", "long haul");

const APIXABAN_START = k("apixaban", "Apixaban 10 mg PO twice daily for 7 days, then 5 mg PO twice daily", "apixaban 10", "apixaban 10mg", "eliquis 10", "eliquis 10mg");
const RIVAROXABAN_START = k(
  "rivaroxaban",
  "Rivaroxaban 15 mg PO twice daily with food for 21 days, then 20 mg PO daily",
  "rivaroxaban 15", "rivaroxaban 15mg", "xarelto 15", "xarelto 15mg",
);

const CTPA_MATCH = ["ct pulmonary angiogram", "ctpa", "ct angiogram", "ct angiography", "cta", "ct pe", "ct chest"];

export const DVT_PE_SAMPS: Samp[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-01",
    topic: "dvt-pe",
    title: "Calf pain after a trip",
    stem:
      "A 46-year-old man presents to the emergency department with three days of right calf pain and swelling. He flew from Vancouver to Halifax five days ago. He has no chest pain or shortness of breath.",
    vitals: { temperature: "36.9°C", pulse: "84/minute", resp: "16/minute", bp: "134/82 mmHg", o2sat: "98% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What elements of the history would you ask about to establish his baseline risk of venous thromboembolism?",
        required: 4,
        accept: [
          PRIOR_VTE,
          CANCER,
          SURGERY,
          IMMOB,
          k("trauma", "Recent leg trauma or fracture", "trauma", "fracture", "injury"),
          FAMILY,
          k("hormone", "Hormone therapy such as testosterone or estrogen", "hormone", "testosterone", "estrogen"),
          k("ibd", "Inflammatory disease such as inflammatory bowel disease", "inflammatory bowel", "crohn", "colitis", "ibd", "lupus", "nephrotic"),
          k("obesity", "Obesity", "obesity", "obese", "bmi"),
          TRAVEL,
        ],
        explanation:
          "Baseline risk comes from prior VTE, cancer, recent surgery or immobilization, trauma, thrombophilia and hormones. Travel longer than about 4 hours adds modest risk. These answers shape both pretest probability and later decisions about treatment length.",
        keyFeature: kf(1),
        source: "tc-dvt-dx",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What examination findings would you look for that support a DVT in the right leg?",
        required: 3,
        accept: [
          k(
            "calf",
            "Calf circumference more than 3 cm larger than the other side, measured 10 cm below the tibial tuberosity",
            "calf circumference", "circumference", "calf swelling", "calf diameter", "measure calf", "measure the calf", "3 cm",
          ),
          k("pitting", "Pitting edema confined to the symptomatic leg", "pitting", "edema", "oedema"),
          k("tender", "Localized tenderness along the distribution of the deep veins", "tenderness", "tender"),
          k("whole", "Swelling of the entire leg", "entire leg", "whole leg", "full leg"),
          k("collateral", "Collateral superficial veins that are not varicose", "collateral", "superficial vein", "dilated vein", "distended vein"),
        ],
        unacceptable: [bad("Homans sign", ["homan"])],
        explanation:
          "The useful signs are the Wells items: calf asymmetry over 3 cm, pitting edema, deep vein tenderness, whole leg swelling and collateral veins. Measure the calf at a fixed point below the tibial tuberosity. Homans sign has poor sensitivity and specificity and earns no credit.",
        keyFeature: kf(2),
        source: "wells-dvt",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His right calf is 2 cm larger than the left. There is tenderness over the popliteal fossa and along the posterior calf. There is no pitting edema and no dilated superficial veins. He has had no surgery, cast, bed rest, cancer or previous VTE. You think DVT is more likely than any other diagnosis.",
        prompt: "Which of the following is his two level Wells DVT score and category?",
        options: ["0, DVT unlikely", "1, DVT likely", "1, DVT unlikely", "2, DVT likely", "3, DVT likely"],
        correct: 2,
        explanation:
          "Only deep vein tenderness scores one point. Calf asymmetry below 3 cm does not score. Air travel is a genuine risk factor but is not a Wells item. A score of 1 or less is DVT unlikely.",
        keyFeature: kf(3),
        source: "wells-dvt",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What is the most appropriate next investigation?",
        required: 1,
        accept: [k("ddimer", "High sensitivity D-dimer", "d dimer", "ddimer", "dimer")],
        unacceptable: [bad("Venography", ["venogram", "venography"]), bad("CT pulmonary angiogram", ["ctpa", "ct pulmonary"])],
        explanation:
          "In a DVT unlikely patient a negative high sensitivity D-dimer excludes DVT without imaging. A positive D-dimer leads to compression ultrasound. Venography is no longer a first line test.",
        keyFeature: kf(4),
        source: "tc-dvt-dx",
      },
      {
        id: "q5",
        kind: "short",
        update:
          "D-dimer is 2 400 mcg/L FEU. Compression ultrasound shows a noncompressible right popliteal vein. Creatinine 78 micromol/L. CBC normal. No bleeding history. He wants to avoid injections.",
        prompt: "What oral anticoagulant regimen that needs no injections would you start, with the drug, dose and frequency at the start of treatment?",
        required: 1,
        accept: [APIXABAN_START, RIVAROXABAN_START],
        unacceptable: [
          bad("Dabigatran or edoxaban started without parenteral lead in", ["dabigatran 150", "edoxaban 60", "start dabigatran", "start edoxaban"]),
          bad("Warfarin without parenteral overlap", ["start warfarin", "warfarin alone", "warfarin monotherapy", "warfarin inr"]),
          bad("ASA", ["asa 81", "asa 325", "aspirin 81", "aspirin 325"]),
        ],
        explanation:
          "Apixaban and rivaroxaban are the only DOACs licensed as single drug therapy from day one. Each has a higher intensity loading phase. Dabigatran and edoxaban need at least 5 days of parenteral anticoagulation first. ASA is not treatment for proximal DVT.",
        keyFeature: kf(6),
        source: "tc-doac",
      },
    ],
    sources: [TC_DVT_DX, WELLS_DVT, TC_DOAC],
    ...META,
  },

  /* 02 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-02",
    topic: "dvt-pe",
    alsoTopics: ["chest-pain"],
    title: "Sharp chest pain in a young woman",
    stem:
      "A 27-year-old woman presents to the emergency department with two days of left sided chest pain that is worse with deep breaths. She is mildly short of breath on stairs. She takes a combined oral contraceptive. She does not smoke. She has no leg symptoms and no hemoptysis.\n\nYour overall clinical gestalt is that PE is unlikely.",
    vitals: { temperature: "37.1°C", pulse: "104/minute", resp: "18/minute", bp: "118/74 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What further elements of the history would change your estimate of her risk of PE?",
        required: 3,
        accept: [PRIOR_VTE, SURGERY, IMMOB, FAMILY, PREGNANCY, CANCER, TRAVEL],
        explanation:
          "Prior VTE, recent surgery or immobilization, thrombophilia, pregnancy or the postpartum period, cancer and long travel all raise baseline risk. Several are PERC or Wells items. Always ask about pregnancy before choosing imaging.",
        keyFeature: kf(1),
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following pulmonary embolism rule out criteria (PERC) does she fail?",
        options: [
          "Age 50 years or older",
          "Exogenous estrogen use",
          "Heart rate 100/min or higher",
          "History of DVT or PE",
          "Presence of hemoptysis",
          "SpO2 below 95% on room air",
          "Surgery or trauma with admission in past 4 weeks",
          "Unilateral leg swelling",
        ],
        select: 2,
        correct: [1, 2],
        explanation:
          "She fails on heart rate of 104/minute and on estrogen use. PERC can only exclude PE without testing when all eight criteria are met in a patient with low gestalt probability. She now needs a D-dimer.",
        keyFeature: kf(3),
        source: "perc",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her Wells score is 1.5, so PE is unlikely. A high sensitivity D-dimer is 310 mcg/L FEU. The laboratory cutoff is 500.",
        prompt: "Which of the following is the most appropriate next step for her?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "Start apixaban and book an outpatient CT",
          "Ventilation perfusion scan",
          "No PE imaging, seek other cause, return advice at discharge",
        ],
        correct: 4,
        explanation:
          "A negative high sensitivity D-dimer in a PE unlikely patient safely excludes PE. Imaging adds radiation and false positives without benefit. Look for an alternative diagnosis and give clear return advice.",
        keyFeature: kf(4),
        source: "tc-pe",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What examination findings would point to a competing diagnosis?",
        required: 2,
        accept: [
          k(
            "ptx",
            "Unilateral reduced breath sounds or hyperresonance, suggesting pneumothorax",
            "absent breath", "decreased breath", "reduced breath", "hyperresonance", "hyperresonant", "pneumothorax",
          ),
          k("rub", "Pericardial friction rub, suggesting pericarditis", "friction rub", "pericardial rub", "rub", "pericarditis"),
          k("pneumonia", "Focal crackles or bronchial breathing with fever, suggesting pneumonia", "crackle", "bronchial", "consolidation", "pneumonia", "fever"),
          k("zoster", "Dermatomal vesicular rash, suggesting zoster", "vesicle", "vesicular", "zoster", "shingles", "rash"),
          k("effusion", "Dullness to percussion, suggesting pleural effusion", "dullness", "dull", "effusion"),
        ],
        unacceptable: [
          bad("Chest wall tenderness", ["chest wall tenderness", "chest wall tender", "reproducible", "tender to palpation", "tenderness on palpation"]),
        ],
        explanation:
          "Pneumothorax, pericarditis, pneumonia, zoster and effusion each have findings that can redirect the workup. Chest wall tenderness is common in proven PE and does not exclude it. Do not stop the PE workup because pain is reproducible.",
        keyFeature: kf(2),
        source: "esc-pe",
      },
    ],
    sources: [TC_PE, PERC, ESC],
    ...META,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-03",
    topic: "dvt-pe",
    alsoTopics: ["sob"],
    title: "Exertional breathlessness in an older man",
    stem:
      "A 74-year-old man presents to the emergency department with three days of shortness of breath on exertion. He has hypertension and knee osteoarthritis. He has no chest pain, hemoptysis or leg symptoms. His lungs are clear and he has no peripheral edema. ECG shows sinus rhythm without acute change. Chest X-ray is normal.\n\nPE is on your differential but is not your leading diagnosis.",
    vitals: { temperature: "36.8°C", pulse: "96/minute", resp: "20/minute", bp: "148/86 mmHg", o2sat: "95% on room air", weight: "81 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "Your department uses the YEARS algorithm.",
        prompt: "What are the YEARS items?",
        required: 3,
        accept: [
          k("dvt", "Clinical signs of DVT", "sign of dvt", "dvt sign", "clinical sign", "leg swelling", "dvt"),
          k("hemoptysis", "Hemoptysis", "hemoptysis", "haemoptysis", "coughing blood"),
          k("likely", "PE is the most likely diagnosis", "most likely", "likely diagnosis"),
        ],
        explanation:
          "YEARS uses three items: clinical signs of DVT, hemoptysis and PE as the most likely diagnosis. The count sets the D-dimer threshold. It reduced CT use in validation without raising missed PE.",
        keyFeature: kf(3),
        source: "years",
      },
      {
        id: "q2",
        kind: "short",
        update: "He has no YEARS items.",
        prompt: "What D-dimer threshold excludes PE for him under YEARS, including units?",
        required: 1,
        accept: [k("1000", "Below 1000 µg/L FEU (1.0 mg/L FEU)", "1000", "1 000", "1.0 mg/l", "1 mg/l")],
        explanation:
          "With zero YEARS items PE is excluded if the D-dimer is below 1 000 mcg/L FEU. With one or more items the threshold is 500. Using 500 here is safe but sends patients to CT who do not need it.",
        keyFeature: kf(4),
        source: "years",
      },
      {
        id: "q3",
        kind: "single",
        update: "His D-dimer is 690 mcg/L FEU.",
        prompt: "Which of the following statements about his D-dimer result is correct?",
        options: [
          "CT pulmonary angiogram needed, D-dimer above 500",
          "Leg ultrasound needed before PE can be excluded",
          "PE excluded by YEARS and age adjusted 740 mcg/L cutoff",
          "PE excluded by YEARS only, age adjusted cutoff 500 mcg/L",
          "Ventilation perfusion scan needed before discharge",
        ],
        correct: 2,
        explanation:
          "His age adjusted cutoff is age times 10, so 740 mcg/L FEU for patients over 50. The YEARS cutoff with no items is 1 000. Either strategy excludes PE here and he needs no imaging for PE.",
        keyFeature: kf(4),
        source: "adjust-pe",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What alternative diagnoses would you now pursue for his breathlessness?",
        required: 2,
        accept: [
          k("hf", "Heart failure", "heart failure", "chf", "cardiomyopathy", "lv dysfunction"),
          k("acs", "Myocardial ischemia or anginal equivalent", "ischemia", "ischaemia", "acs", "acute coronary", "angina", "coronary"),
          k("anemia", "Anemia", "anemia", "anaemia"),
          k("arrhythmia", "Arrhythmia such as atrial fibrillation", "arrhythmia", "atrial fibrillation", "af"),
          k("valve", "Valvular disease such as aortic stenosis", "aortic stenosis", "valvular", "valve"),
          k("lung", "Chronic lung disease such as COPD or interstitial lung disease", "copd", "interstitial", "lung disease", "fibrosis"),
          k("effusion", "Pleural or pericardial effusion", "effusion"),
        ],
        explanation:
          "Once PE is excluded, look for common causes of exertional dyspnea in older adults. Heart failure, ischemia, anemia, arrhythmia and aortic stenosis are frequent and treatable. Chronic lung disease is also common.",
        keyFeature: { topic: "sob", n: 2 },
        source: "esc-pe",
      },
    ],
    sources: [YEARS, ADJUST, ESC],
    ...META,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-04",
    topic: "dvt-pe",
    alsoTopics: ["sob"],
    title: "Breathlessness during chemotherapy",
    stem:
      "A 58-year-old man with metastatic lung adenocarcinoma presents to the emergency department with two days of shortness of breath, left leg swelling and blood streaked sputum. He had his last chemotherapy 10 days ago.\n\nHis left calf is 4 cm larger than the right with pitting edema. You think PE is the most likely diagnosis.",
    vitals: { temperature: "37.4°C", pulse: "112/minute", resp: "22/minute", bp: "128/78 mmHg", o2sat: "93% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Wells score for pulmonary embolism?",
        options: ["4.5", "6.0", "7.5", "8.0", "9.5"],
        correct: 4,
        explanation:
          "Clinical signs of DVT score 3. PE most likely scores 3. Heart rate over 100 scores 1.5. Hemoptysis and active cancer score 1 each. The total of 9.5 places him in the high probability group.",
        keyFeature: kf(3),
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the most appropriate first diagnostic test for venous thromboembolism in this patient?",
        required: 1,
        accept: [
          k("ctpa", "CT pulmonary angiogram", ...CTPA_MATCH),
          k("cus", "Compression ultrasound of the left leg", "ultrasound", "doppler", "compression", "cus"),
        ],
        unacceptable: [bad("D-dimer", ["d dimer", "ddimer", "dimer"])],
        explanation:
          "With high pretest probability go straight to imaging. A negative D-dimer cannot exclude PE here and D-dimer is often raised in cancer. A positive leg ultrasound in a patient with PE symptoms is enough to start treatment, though CT also shows clot burden and RV size.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "CT shows bilateral segmental PE with a normal RV. Troponin is normal. Hb 118 g/L, platelets 180 x 10^9/L, creatinine 88 micromol/L. He has no GI or GU tumour, no bleeding and no interacting drugs.",
        prompt: "What are appropriate anticoagulant options for this patient?",
        required: 2,
        accept: [
          k("apixaban", "Apixaban", "apixaban", "eliquis"),
          k("rivaroxaban", "Rivaroxaban", "rivaroxaban", "xarelto"),
          k("edoxaban", "Edoxaban after at least 5 days of LMWH", "edoxaban"),
          k("lmwh", "LMWH such as dalteparin 200 units/kg daily for one month, then 150 units/kg daily", "dalteparin", "lmwh", "low molecular weight", "enoxaparin", "tinzaparin"),
        ],
        unacceptable: [bad("Warfarin", ["start warfarin", "warfarin inr", "bridge to warfarin", "warfarin alone"])],
        explanation:
          "For cancer associated VTE, DOACs and LMWH are both first line. In the Caravaggio trial apixaban did not raise major bleeding compared with dalteparin. Edoxaban and rivaroxaban carry more GI bleeding in luminal GI cancers. Warfarin is inferior in cancer and hard to manage with chemotherapy.",
        keyFeature: kf(6),
        source: "tc-cancer",
      },
      {
        id: "q4",
        kind: "short",
        update: "The resident suggests discharge.",
        prompt: "Which simplified PESI (sPESI) criteria does he meet?",
        required: 2,
        accept: [
          k("cancer", "Cancer", "cancer", "malignancy"),
          k("hr", "Heart rate 110/min or more", "heart rate", "hr", "tachycardia", "pulse"),
        ],
        unacceptable: [bad("SpO2 below 90%", ["spo2", "saturation", "hypoxia", "hypoxemia"])],
        explanation:
          "sPESI scores one point each for age over 80, cancer, chronic cardiopulmonary disease, HR 110 or more, SBP below 100 and SpO2 below 90%. He scores 2 for cancer and HR. His SpO2 of 93% does not meet the criterion. He is not low risk and should be admitted.",
        keyFeature: kf(7),
        source: "spesi",
      },
    ],
    sources: [TC_PE, ESC, TC_CANCER, SPESI],
    ...META,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-05",
    topic: "dvt-pe",
    title: "Breathless at 29 weeks",
    stem:
      "A 31-year-old woman, G2P1 at 29 weeks gestation, presents to the emergency department with two days of shortness of breath and left calf pain and swelling. She has no history of VTE.\n\nHer left calf is 3 cm larger than the right with pitting edema.",
    vitals: { temperature: "37.0°C", pulse: "104/minute", resp: "20/minute", bp: "112/68 mmHg", o2sat: "96% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most appropriate first imaging test?",
        required: 1,
        accept: [k("cus", "Compression ultrasound of the legs", "ultrasound", "doppler", "compression", "cus")],
        unacceptable: [
          bad("CT pulmonary angiogram first", ["ctpa", "ct pulmonary", "ct angiogram"]),
          bad("Ventilation perfusion scan first", ["v/q", "vq", "ventilation perfusion"]),
        ],
        explanation:
          "In pregnancy with leg symptoms, start with compression ultrasound. A proximal DVT confirms VTE and allows treatment with no radiation to mother or fetus. The pregnancy adapted YEARS approach uses this step first.",
        keyFeature: kf(5),
        source: "preg-years",
      },
      {
        id: "q2",
        kind: "short",
        update: "Ultrasound shows a left common femoral DVT. Creatinine 52 micromol/L, platelets 210 x 10^9/L.",
        prompt: "What initial anticoagulant would you give, with the drug, dose, route and frequency?",
        required: 1,
        accept: [
          k(
            "enox",
            "Enoxaparin 1 mg/kg SC every 12 hours (about 80 mg), or 1.5 mg/kg SC daily",
            "enoxaparin 1 mg/kg", "enoxaparin 1mg/kg", "enoxaparin 80", "enoxaparin 78", "lovenox 80", "lovenox 1 mg/kg",
            "enoxaparin 1.5 mg/kg", "enoxaparin 1.5mg/kg", "enoxaparin 120", "enoxaparin 117",
          ),
          k(
            "dalt",
            "Dalteparin 200 units/kg SC daily or 100 units/kg SC every 12 hours",
            "dalteparin 200", "dalteparin 100", "dalteparin 15600", "dalteparin 15 600", "dalteparin 7800", "fragmin 200", "fragmin 100",
          ),
          k("tinz", "Tinzaparin 175 units/kg SC daily", "tinzaparin 175", "tinzaparin 13650", "tinzaparin 13 650", "innohep 175"),
          k(
            "ufh",
            "Unfractionated heparin 80 units/kg IV bolus then 18 units/kg/h, if LMWH is unsuitable",
            "unfractionated heparin", "ufh", "heparin 80", "heparin infusion", "iv heparin",
          ),
        ],
        unacceptable: [
          bad("Warfarin", ["start warfarin", "warfarin 5", "warfarin 10", "coumadin 5", "warfarin inr", "bridge to warfarin", "warfarin overlap"], true),
          bad("A DOAC", ["start doac", "start apixaban", "start rivaroxaban", "apixaban 10", "rivaroxaban 15", "rivaroxaban 20"]),
        ],
        explanation:
          "Weight based LMWH is the treatment of choice in pregnancy because it does not cross the placenta. Once or twice daily dosing at the product treatment dose is acceptable, and some experts prefer twice daily in pregnancy. IV UFH is an alternative when delivery or a procedure is close. Warfarin crosses the placenta and causes embryopathy and fetal bleeding. DOACs cross the placenta and are contraindicated. Continue for the rest of pregnancy and at least 6 weeks postpartum.",
        keyFeature: kf(6),
        source: "sogc-vte",
      },
      {
        id: "q3",
        kind: "short",
        update: "Suppose instead she had no leg symptoms, a normal leg ultrasound and a normal chest X-ray, and PE was still suspected.",
        prompt: "Which imaging test is generally preferred next?",
        required: 1,
        accept: [
          k(
            "vq",
            "Ventilation perfusion or perfusion only scan",
            "v/q", "vq", "ventilation perfusion", "perfusion scan", "perfusion scintigraphy", "perfusion only", "q scan",
          ),
        ],
        explanation:
          "With a normal chest X-ray a V/Q or perfusion only scan is usually diagnostic and gives less breast radiation than CT. CT is preferred when the chest X-ray is abnormal. Both expose the fetus to very low doses, so either is better than not testing.",
        keyFeature: kf(5),
        source: "tc-preg",
      },
    ],
    sources: [PREG_YEARS, SOGC, TC_PREG],
    ...META,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-06",
    topic: "dvt-pe",
    alsoTopics: ["sob", "asthma-copd"],
    title: "Worse breathing in a man with lung disease",
    stem:
      "A 68-year-old man with severe COPD (FEV1 38% predicted) and known bullous emphysema presents to the emergency department with two days of worse shortness of breath. This morning he had sudden right sided pleuritic pain. His sputum has not changed and he has no fever.\n\nHe has scattered wheeze.",
    vitals: { temperature: "37.0°C", pulse: "108/minute", resp: "26/minute", bp: "142/86 mmHg", o2sat: "86% on room air (baseline 91%)", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What competing diagnoses would you look for on examination and with bedside tests?",
        required: 3,
        accept: [
          k("ptx", "Pneumothorax", "pneumothorax", "ptx"),
          k("pneumonia", "Pneumonia", "pneumonia", "consolidation"),
          k("aecopd", "COPD exacerbation", "copd exacerbation", "aecopd", "exacerbation", "bronchospasm"),
          k("acs", "Acute coronary syndrome", "acs", "acute coronary", "myocardial infarction", "ischemia", "ischaemia", "nstemi", "stemi"),
          k("hf", "Heart failure", "heart failure", "chf", "pulmonary edema"),
          k("af", "Arrhythmia such as atrial fibrillation", "atrial fibrillation", "arrhythmia", "af"),
          k("rib", "Rib fracture", "rib fracture"),
          k("effusion", "Pleural effusion", "effusion"),
        ],
        explanation:
          "Sudden pleuritic pain in bullous emphysema must raise pneumothorax first. Pneumonia, COPD exacerbation, ACS and heart failure are common mimics. PE often hides behind a presumed COPD flare with no change in sputum.",
        keyFeature: kf(2),
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Portable chest X-ray shows hyperinflation and apical bullae. There is no pneumothorax and no consolidation. Creatinine 84 micromol/L. No contrast allergy. You still suspect PE.",
        prompt: "Which of the following is the most appropriate next test to investigate PE?",
        options: [
          "Bedside echocardiogram alone",
          "CT pulmonary angiogram",
          "D-dimer before any imaging",
          "Repeat chest X-ray in 6 hours",
          "Ventilation perfusion scan",
        ],
        correct: 1,
        explanation:
          "Structural lung disease makes V/Q results nondiagnostic in many patients. CT pulmonary angiography gives a definite answer and can show other causes. Echo alone cannot exclude PE in a stable patient.",
        keyFeature: kf(5),
        source: "tc-pe",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "CT shows a right lower lobe segmental PE. RV to LV ratio 0.8. Troponin normal. On 2 L/minute nasal prongs his SpO2 is 90%. A colleague suggests discharge on apixaban.",
        prompt: "What objective findings argue against outpatient treatment?",
        required: 2,
        accept: [
          k(
            "o2",
            "SpO2 below 90% on room air or a new oxygen requirement",
            "oxygen", "o2", "spo2", "saturation", "hypoxia", "hypoxemia", "hypoxaemia",
          ),
          k("copd", "Chronic cardiopulmonary disease with severe COPD", "copd", "chronic lung", "cardiopulmonary", "lung disease", "emphysema"),
          k("rr", "Tachypnea of 26/min", "tachypnea", "tachypnoea", "respiratory rate", "rr"),
          k("hr", "Tachycardia", "tachycardia", "heart rate", "hr"),
        ],
        explanation:
          "He scores 2 on sPESI for chronic cardiopulmonary disease and SpO2 below 90%. A new oxygen need is also a Hestia exclusion. Small clot does not make outpatient care safe when reserve is poor.",
        keyFeature: kf(7),
        source: "spesi",
      },
    ],
    sources: [ESC, TC_PE, SPESI],
    ...META,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-07",
    topic: "dvt-pe",
    title: "Leg swelling with poor kidney function",
    stem:
      "A 79-year-old woman presents to the emergency department with two days of right leg swelling and mild shortness of breath. She has diabetes and stage 4 chronic kidney disease. Creatinine is 210 micromol/L and her estimated creatinine clearance is 18 mL/minute. She had anaphylaxis to iodinated contrast two years ago.\n\nHer right calf is 4 cm larger than the left. Chest X-ray is normal.",
    vitals: { temperature: "36.9°C", pulse: "102/minute", resp: "20/minute", bp: "136/70 mmHg", o2sat: "94% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most appropriate first imaging test?",
        required: 1,
        accept: [k("cus", "Compression ultrasound of the right leg", "ultrasound", "doppler", "compression", "cus")],
        explanation:
          "She has leg signs, so ultrasound first can confirm VTE with no contrast. A positive result is enough to treat. CT pulmonary angiography is a poor first choice because iodinated contrast is dangerous after prior anaphylaxis and adds renal risk.",
        keyFeature: kf(5),
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "If her leg ultrasound were normal, which test would you use to look for PE?",
        required: 1,
        accept: [k("vq", "Ventilation perfusion scan", "v/q", "vq", "ventilation perfusion", "perfusion scan", "perfusion scintigraphy")],
        explanation:
          "With a normal chest X-ray and a contraindication to contrast, V/Q scanning is the test of choice. CT pulmonary angiography would need contrast she reacted to with anaphylaxis. A normal or high probability scan is diagnostic. A nondiagnostic scan needs serial leg ultrasound or further discussion.",
        keyFeature: kf(5),
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "short",
        update: "Ultrasound shows thrombus in the right femoral and popliteal veins.",
        prompt: "What is the most appropriate initial anticoagulant for her?",
        required: 1,
        accept: [
          k(
            "ufh",
            "Unfractionated heparin IV infusion, weight based",
            "unfractionated heparin", "ufh", "heparin infusion", "iv heparin", "heparin drip", "intravenous heparin", "heparin 80", "heparin bolu", "heparin nomogram",
          ),
        ],
        unacceptable: [
          bad("Full dose LMWH without renal adjustment", ["enoxaparin 1 mg/kg bid", "enoxaparin 1 mg/kg twice", "enoxaparin 1 mg/kg q12h", "enoxaparin 1.5", "dalteparin 200"]),
          bad("A DOAC at standard treatment doses", ["rivaroxaban 15", "rivaroxaban 20", "apixaban 10", "dabigatran 150", "edoxaban 60", "start doac"]),
        ],
        explanation:
          "IV UFH is cleared largely independent of the kidney, is short acting and is fully reversible, so it is the safest start at a creatinine clearance of 18 mL/minute. Give 80 units/kg IV bolus then 18 units/kg/h, adjusted to aPTT or anti-Xa, then overlap with warfarin. Renally adjusted enoxaparin (1 mg/kg daily) is labelled below 30 mL/minute and tinzaparin has data down to about 20 mL/minute, but both need anti-Xa monitoring and are second choices here. Rivaroxaban, edoxaban and dabigatran are not recommended below 30 mL/minute and apixaban is not recommended below 25 mL/minute in Canadian labelling, although some US guidance uses apixaban in dialysis.",
        keyFeature: kf(6),
        source: "tc-ufh",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit for IV unfractionated heparin, then warfarin",
          "Admit for IVC filter insertion",
          "Discharge on apixaban 5 mg twice daily",
          "Discharge on full dose tinzaparin",
          "Discharge untreated with thrombosis clinic referral",
        ],
        correct: 0,
        explanation:
          "Creatinine clearance below 30 mL/minute is a Hestia exclusion to outpatient care. She needs an infusion with monitoring and a supervised warfarin start. An IVC filter is only for a contraindication to anticoagulation.",
        keyFeature: kf(7),
        source: "hestia",
      },
    ],
    sources: [TC_PE, ESC, TC_UFH, HESTIA],
    ...META,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-08",
    topic: "dvt-pe",
    alsoTopics: ["shock"],
    title: "Collapse at a truck stop",
    stem:
      "A 52-year-old long haul truck driver presents to the emergency department after he collapsed at a rest stop. He now reports severe shortness of breath. He has no known medical history, no recent surgery and no bleeding history.\n\nGlucose 7.4 mmol/L. ECG shows sinus tachycardia, right bundle branch block and T wave inversion in V1 to V4.",
    vitals: { temperature: "36.8°C", pulse: "128/minute", resp: "30/minute", bp: "78/50 mmHg", o2sat: "88% on a non-rebreather mask", weight: "110 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What physical findings would support PE as the cause of his shock?",
        required: 3,
        accept: [
          k("jvp", "Raised jugular venous pressure", "jvp", "jugular", "neck vein", "jvd"),
          k("heave", "Right ventricular heave", "heave", "parasternal lift"),
          k("p2", "Loud P2", "p2", "loud pulmonic"),
          k("leg", "Unilateral leg swelling or other signs of DVT", "leg swelling", "calf swelling", "unilateral", "dvt"),
          k("clear", "Clear lungs despite severe hypoxia", "clear lung", "clear chest", "lungs clear", "clear air entry"),
          k("cyanosis", "Central cyanosis", "cyanosis", "cyanotic"),
        ],
        explanation:
          "Obstructive shock from PE shows right heart strain with a raised JVP, RV heave and loud P2. Clear lungs with profound hypoxia point away from pulmonary edema and pneumonia. Look for a swollen leg.",
        keyFeature: kf(2),
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What point of care ultrasound findings would support PE as the cause of shock?",
        required: 2,
        accept: [
          k(
            "rvdil",
            "Dilated right ventricle, larger than the left",
            "dilated right ventricle", "right ventricular dilation", "right ventricular dilatation", "rv dilation", "rv dilatation",
            "dilated rv", "rv enlargement", "enlarged rv", "rv larger", "large rv", "rv dilated",
          ),
          k(
            "septum",
            "Septal flattening with a D shaped left ventricle",
            "septal flattening", "d sign", "d shaped", "flattened septum", "septal bowing", "paradoxical septal", "septal shift",
          ),
          k("mcconnell", "McConnell sign", "mcconnell"),
          k("tapse", "Reduced TAPSE", "tapse"),
          k("ivc", "Plethoric IVC", "ivc", "inferior vena cava"),
          k("dvt", "Noncompressible proximal leg vein", "noncompressible", "non compressible", "dvt", "femoral vein thrombus", "thrombus in the leg"),
          k("transit", "Clot in transit in the right heart", "clot in transit", "thrombus in transit", "right heart thrombus"),
        ],
        explanation:
          "RV dilation, septal flattening and McConnell sign show acute RV pressure overload. A noncompressible femoral or popliteal vein adds strong support. In a patient too unstable for CT these findings justify treatment for PE.",
        keyFeature: { topic: "shock", n: 6 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Norepinephrine is running and his MAP is 60 mmHg. POCUS shows an RV larger than the LV, septal flattening and a noncompressible left femoral vein. He is too unstable to go to CT.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Give systemic thrombolysis now",
          "Obtain a ventilation perfusion scan",
          "Send a D-dimer and await the result",
          "Start apixaban 10 mg PO twice daily",
          "Transfer to CT for pulmonary angiography first",
        ],
        correct: 0,
        explanation:
          "In high risk PE, bedside evidence of RV dysfunction is enough to treat when CT is not safe. Systemic thrombolysis is the first line reperfusion therapy. D-dimer has no role at this pretest probability.",
        keyFeature: kf(4),
        source: "esc-pe",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What thrombolytic regimen would you give, with the drug, dose, route and duration?",
        required: 1,
        accept: [
          k("alteplase", "Alteplase 100 mg IV over 2 hours", "alteplase 100", "alteplase 90", "tpa 100", "rtpa 100", "rt pa 100", "activase 100"),
          k("accel", "Alteplase 0.6 mg/kg IV over 15 minutes, maximum 50 mg", "alteplase 0.6"),
          k("tnk", "Weight based tenecteplase single bolus (off label)", "tenecteplase", "tnk"),
        ],
        unacceptable: [bad("Stroke dosing of alteplase 0.9 mg/kg", ["0.9 mg/kg", "0.9mg/kg"])],
        explanation:
          "The licensed PE regimen is alteplase 100 mg over 2 hours, often as a 10 mg bolus then 90 mg. An accelerated 0.6 mg/kg regimen over 15 minutes, maximum 50 mg, is an accepted alternative. Weight based tenecteplase is used off label. Practice varies on whether UFH runs during the alteplase infusion, so follow local protocol. In cardiac arrest from PE a 50 mg alteplase bolus is commonly used.",
        keyFeature: { topic: "shock", n: 8 },
        source: "esc-pe",
      },
      {
        id: "q5",
        kind: "menu",
        prompt: "Which of the following supportive measures are most appropriate while reperfusion is arranged?",
        options: [
          "Cautious crystalloid bolus of no more than 500 mL",
          "Crystalloid 30 mL/kg IV as a rapid bolus",
          "Early rapid sequence intubation and ventilation",
          "Furosemide 40 mg IV as a single bolus",
          "Nitroglycerin IV infusion at 10 mcg/minute",
          "Norepinephrine infusion titrated to MAP of at least 65 mmHg",
          "Phenylephrine as the first line vasopressor",
        ],
        select: 2,
        correct: [0, 5],
        explanation:
          "Norepinephrine restores systemic pressure and RV perfusion. Small fluid volumes may help but large volumes dilate the failing RV and worsen shock. Intubation to reduce work of breathing is tempting, but induction and positive pressure ventilation can precipitate arrest, so avoid it if possible.",
        keyFeature: { topic: "shock", n: 7 },
        source: "esc-pe",
      },
    ],
    sources: [ESC],
    ...META,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-09",
    topic: "dvt-pe",
    title: "Pleuritic pain with a positive scan",
    stem:
      "A 39-year-old woman presents to the emergency department with three days of right pleuritic chest pain. CT pulmonary angiogram shows a right lower lobe segmental PE with a normal RV to LV ratio. Her pain is controlled with oral acetaminophen. She lives with her partner 10 minutes from the hospital.\n\nHb 132 g/L, platelets 250 x 10^9/L, creatinine 64 micromol/L, troponin normal.",
    vitals: { temperature: "36.9°C", pulse: "88/minute", resp: "16/minute", bp: "124/78 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What objective findings in this case support outpatient treatment?",
        required: 3,
        accept: [
          k("hr", "Heart rate below 110/min", "heart rate", "hr", "pulse"),
          k("bp", "Systolic BP of 100 mmHg or more", "blood pressure", "systolic", "sbp", "bp"),
          k("o2", "SpO2 of 90% or more on room air with no oxygen need", "spo2", "saturation", "room air", "no oxygen", "no o2", "oxygen", "o2"),
          k("trop", "Normal troponin", "troponin"),
          k("rv", "Normal RV size on CT", "rv", "rv/lv", "right ventricle", "right ventricular"),
          k("renal", "Normal renal function", "creatinine", "renal", "kidney", "crcl", "egfr"),
          k("heme", "Normal hemoglobin and platelets", "platelet", "hemoglobin", "haemoglobin", "hb"),
          k("rr", "Normal respiratory rate", "respiratory rate", "rr"),
          k("score", "sPESI of 0 or no Hestia criteria", "spesi", "pesi", "hestia"),
        ],
        explanation:
          "She has an sPESI of 0 with normal vitals, oxygen saturation, RV size and troponin. Normal renal function and platelets allow a DOAC and lower bleeding risk. These objective data, plus good social support, make outpatient care safe.",
        keyFeature: kf(7),
        source: "spesi",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What history features would you review to decide whether this PE was provoked?",
        required: 3,
        accept: [ESTROGEN, PREGNANCY, SURGERY, IMMOB, TRAVEL, k("cancer", "Symptoms of occult cancer such as weight loss", "weight loss", "cancer", "malignancy", "night sweat"), PRIOR_VTE, FAMILY],
        explanation:
          "Estrogen, pregnancy, recent surgery, immobilization and travel are transient provoking factors. Cancer is a persistent one. Whether the event was provoked drives the length of anticoagulation, which the thrombosis clinic will decide.",
        keyFeature: kf(1),
        source: "tc-pe",
      },
      {
        id: "q3",
        kind: "short",
        update: "Her medication list shows carbamazepine 400 mg PO twice daily for epilepsy.",
        prompt: "What is an appropriate anticoagulant for her?",
        required: 1,
        accept: [
          k("lmwh", "LMWH such as dalteparin or enoxaparin at treatment dose", "dalteparin", "enoxaparin", "tinzaparin", "lmwh", "low molecular weight"),
          k("warfarin", "Warfarin with LMWH overlap and close INR monitoring", "warfarin"),
        ],
        unacceptable: [bad("A DOAC", ["start doac", "start apixaban", "start rivaroxaban", "apixaban 10", "rivaroxaban 15", "rivaroxaban 20", "edoxaban 60", "dabigatran 150"])],
        explanation:
          "Carbamazepine strongly induces CYP3A4 and P-glycoprotein and lowers DOAC levels. DOACs should be avoided with strong inducers. LMWH is unaffected. Warfarin can be used but needs more frequent INR checks because carbamazepine increases its metabolism.",
        keyFeature: kf(6),
        source: "tc-doac",
      },
    ],
    sources: [SPESI, TC_PE, TC_DOAC],
    ...META,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-10",
    topic: "dvt-pe",
    alsoTopics: ["shock"],
    title: "Near faint on the stairs",
    stem:
      "A 66-year-old woman presents to the emergency department with two days of shortness of breath. She nearly fainted climbing stairs today. CT pulmonary angiogram shows bilateral lobar PE with an RV to LV ratio of 1.3.\n\nHigh sensitivity troponin T is 64 ng/L (normal below 14). Creatinine 80 micromol/L. She has no bleeding history.",
    vitals: { temperature: "37.0°C", pulse: "116/minute", resp: "24/minute", bp: "112/70 mmHg", o2sat: "92% on 2 L/minute by nasal prongs", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What objective findings place her at higher risk of early death or deterioration?",
        required: 3,
        accept: [
          k("rv", "RV dilation with RV to LV ratio above 1.0", "rv", "rv/lv", "right ventricle", "right ventricular"),
          k("trop", "Elevated troponin", "troponin"),
          k("hr", "Heart rate 110/min or more", "tachycardia", "heart rate", "hr"),
          k("o2", "Oxygen requirement", "oxygen", "o2", "hypoxia", "hypoxemia", "spo2", "saturation"),
          k("syncope", "Near syncope", "syncope", "presyncope", "faint"),
          k("rr", "Tachypnea", "respiratory rate", "tachypnea", "tachypnoea", "rr"),
        ],
        explanation:
          "RV dysfunction on imaging and a raised troponin together mark intermediate high risk. Tachycardia, oxygen need and syncope add to the picture. Clot location on CT does not predict outcome as well as RV function does.",
        keyFeature: kf(7),
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is her risk category under the ESC guideline?",
        options: [
          "High risk pulmonary embolism",
          "Intermediate high risk pulmonary embolism",
          "Intermediate low risk pulmonary embolism",
          "Low risk pulmonary embolism",
          "Massive pulmonary embolism",
        ],
        correct: 1,
        explanation:
          "She is not hypotensive, so not high risk. She has both RV dysfunction on CT and a raised troponin, which defines intermediate high risk. This group needs monitored admission with a plan for rescue reperfusion. Massive is an older term that the ESC replaced with high risk, and she is not hemodynamically unstable.",
        keyFeature: kf(7),
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following actions are most appropriate for her now?",
        options: [
          "Admit to a monitored bed or ICU",
          "Discharge on apixaban with thrombosis clinic follow-up",
          "Early intubation and ventilation",
          "Give a 2 L crystalloid bolus",
          "Give full dose alteplase now",
          "Insert an inferior vena cava filter",
          "Start parenteral anticoagulation with LMWH or UFH",
        ],
        select: 2,
        correct: [0, 6],
        explanation:
          "Routine thrombolysis in intermediate high risk PE prevents decompensation but causes more major and intracranial bleeding. Anticoagulate and monitor closely. UFH is a sensible choice if rescue thrombolysis looks likely.",
        keyFeature: kf(7),
        source: "esc-pe",
      },
      {
        id: "q4",
        kind: "short",
        update: "Six hours later her BP is 84/50 mmHg, HR 130/minute and her skin is cool and mottled.",
        prompt: "What is the most appropriate treatment now?",
        required: 1,
        accept: [
          k("lysis", "Rescue systemic thrombolysis", "alteplase", "thrombolysis", "thrombolytic", "tpa", "tenecteplase", "lytic"),
          k("mech", "Catheter directed therapy or surgical embolectomy if thrombolysis is contraindicated", "embolectomy", "catheter directed", "thrombectomy"),
        ],
        explanation:
          "She now has high risk PE with obstructive shock. Rescue systemic thrombolysis is indicated. If lysis is contraindicated or fails, catheter directed therapy or surgical embolectomy are the alternatives.",
        keyFeature: { topic: "shock", n: 5 },
        source: "esc-pe",
      },
    ],
    sources: [ESC],
    ...META,
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-11",
    topic: "dvt-pe",
    title: "Painful cord in the thigh",
    stem:
      "A 57-year-old woman presents to the emergency department with four days of a painful, red, firm cord on the inner thigh. She has varicose veins. She has no trauma and does not inject drugs.",
    vitals: { temperature: "36.9°C", pulse: "78/minute", bp: "132/80 mmHg", o2sat: "99% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What history features would raise her risk of progression to deep vein thrombosis?",
        required: 2,
        accept: [PRIOR_VTE, CANCER, SURGERY, IMMOB, ESTROGEN, PREGNANCY, FAMILY],
        explanation:
          "Prior VTE, cancer, recent surgery or immobility, hormones and thrombophilia raise the risk of extension into the deep system. These factors lower the threshold to treat. Varicose veins alone are a weaker risk factor.",
        keyFeature: kf(1),
        source: "tc-svt",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What examination findings would change your management?",
        required: 2,
        accept: [
          k("junction", "Cord extending to the groin near the saphenofemoral junction", "groin", "junction", "saphenofemoral", "sfj", "proximal extension"),
          k("dvt", "Signs of DVT such as leg swelling or pitting edema", "leg swelling", "pitting", "edema", "dvt"),
          k("septic", "Fever, fluctuance or pus suggesting septic thrombophlebitis or cellulitis", "fever", "pus", "purulent", "fluctuance", "abscess", "cellulitis", "septic"),
          k("length", "Involvement of 5 cm or more of vein", "length", "5 cm", "long segment"),
        ],
        explanation:
          "Proximity to the saphenofemoral junction, a long segment, or signs of DVT all push toward anticoagulation. Fever or pus suggests septic thrombophlebitis, which needs antibiotics and source control.",
        keyFeature: kf(2),
        source: "tc-svt",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What investigation is indicated?",
        required: 1,
        accept: [k("us", "Duplex ultrasound of the leg", "ultrasound", "doppler", "duplex")],
        unacceptable: [bad("D-dimer", ["d dimer", "ddimer", "dimer"])],
        explanation:
          "Concurrent DVT is common in superficial vein thrombosis of the leg. Ultrasound shows the length of thrombus, its distance from the junction and any deep extension. D-dimer is expected to be positive and does not help.",
        keyFeature: kf(4),
        source: "tc-svt",
      },
      {
        id: "q4",
        kind: "short",
        update: "Ultrasound shows 12 cm of thrombus in the great saphenous vein ending 8 cm from the saphenofemoral junction. There is no DVT.",
        prompt: "What is the recommended treatment, with the drug, dose, route and duration?",
        required: 1,
        accept: [
          k("fonda", "Fondaparinux 2.5 mg SC daily for 45 days", "fondaparinux 2.5", "fondaparinux 2.5mg", "arixtra 2.5"),
          k("riva", "Rivaroxaban 10 mg PO daily for 45 days", "rivaroxaban 10", "rivaroxaban 10mg", "xarelto 10"),
          k(
            "lmwh",
            "Prophylactic or intermediate dose LMWH for 45 days",
            "prophylactic lmwh", "prophylactic dose", "intermediate dose", "enoxaparin 40", "dalteparin 5000", "dalteparin 5 000", "tinzaparin 4500", "tinzaparin 4 500",
          ),
        ],
        unacceptable: [bad("Anti-inflammatory or warm compresses alone", ["nsaid alone", "ibuprofen alone", "compress alone", "no treatment", "no anticoagulation"])],
        explanation:
          "Thrombus of 5 cm or more, more than 3 cm from the junction, is treated for 45 days with fondaparinux 2.5 mg SC daily. Thrombosis Canada also lists rivaroxaban 10 mg PO daily, based on the SURPRISE trial, and prophylactic or intermediate dose LMWH. Thrombus within 3 cm of the junction is treated as a DVT with full dose anticoagulation.",
        keyFeature: kf(6),
        source: "surprise",
      },
    ],
    sources: [TC_SVT, SURPRISE],
    ...META,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-12",
    topic: "dvt-pe",
    title: "Calf pain after ankle surgery",
    stem:
      "A 49-year-old man presents to the emergency department with three days of right calf pain. He had open reduction and internal fixation of a right ankle fracture two weeks ago. He was in a below knee plaster cast until yesterday and is now in a walking boot. He was not given thromboprophylaxis.",
    vitals: { temperature: "36.8°C", pulse: "80/minute", bp: "128/78 mmHg", o2sat: "98% on room air", weight: "95 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What other history elements affect his baseline risk of venous thromboembolism?",
        required: 3,
        accept: [PRIOR_VTE, CANCER, FAMILY, k("hormone", "Testosterone or other hormone use", "testosterone", "hormone", "anabolic steroid"), k("obesity", "Obesity", "obesity", "obese", "bmi"), k("ibd", "Inflammatory disease such as inflammatory bowel disease", "inflammatory bowel", "crohn", "colitis", "ibd"), TRAVEL],
        explanation:
          "His surgery and cast are strong transient risks. Prior VTE, cancer, thrombophilia, obesity and hormone use add to baseline risk. These also guide treatment length after a provoked event.",
        keyFeature: kf(1),
        source: "tc-dvt-dx",
      },
      {
        id: "q2",
        kind: "single",
        update: "His right calf is 3.5 cm larger than the left, with tenderness along the deep calf veins. There is no pitting edema. There is no better alternative diagnosis.",
        prompt: "Which of the following is his two level Wells DVT score and category?",
        options: ["1, DVT unlikely", "2, DVT likely", "3, DVT likely", "4, DVT likely", "5, DVT likely"],
        correct: 3,
        explanation:
          "He scores for recent plaster immobilization, major surgery within 12 weeks, calf swelling over 3 cm and deep vein tenderness. The total of 4 is DVT likely.",
        keyFeature: kf(3),
        source: "wells-dvt",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What is the most appropriate next investigation?",
        required: 1,
        accept: [k("us", "Compression ultrasound of the leg", "ultrasound", "doppler", "duplex", "compression")],
        unacceptable: [bad("D-dimer alone", ["d dimer alone", "dimer alone", "dimer only"])],
        explanation:
          "When DVT is likely, image first. A D-dimer alone cannot exclude DVT in this group. D-dimer may still help decide on repeat ultrasound if the first scan is negative.",
        keyFeature: kf(4),
        source: "tc-dvt-dx",
      },
      {
        id: "q4",
        kind: "short",
        update: "Ultrasound shows isolated thrombus in one peroneal vein. The popliteal and more proximal veins are clear.",
        prompt: "What is an appropriate management strategy for this finding?",
        required: 1,
        accept: [
          k(
            "ac",
            "Anticoagulation for 3 months, for example with a DOAC",
            "anticoagulation", "anticoagulate", "anticoagulant", "apixaban", "rivaroxaban", "lmwh", "dabigatran", "edoxaban", "dalteparin", "enoxaparin", "doac",
          ),
          k("serial", "Serial ultrasound at 1 and 2 weeks, treating if the clot extends", "serial", "repeat ultrasound", "repeat us", "surveillance"),
        ],
        unacceptable: [bad("IVC filter", ["filter"]), bad("ASA", ["asa", "aspirin"])],
        explanation:
          "Isolated distal DVT can be treated for 3 months or followed with serial ultrasound. Anticoagulation is favoured with marked symptoms or ongoing risk, such as his reduced mobility. There is no role for a filter or ASA.",
        keyFeature: kf(6),
        source: "tc-dvt-tx",
      },
    ],
    sources: [TC_DVT_DX, WELLS_DVT, TC_DVT_TX],
    ...META,
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-13",
    topic: "dvt-pe",
    title: "Pleuritic pain in a woman with lupus",
    stem:
      "A 34-year-old woman with systemic lupus erythematosus presents to the emergency department with one day of left pleuritic chest pain and mild shortness of breath.",
    vitals: { temperature: "37.2°C", pulse: "98/minute", resp: "18/minute", bp: "118/72 mmHg", o2sat: "96% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What elements of her history would you ask about to assess her baseline risk of VTE?",
        required: 3,
        accept: [
          PRIOR_VTE,
          k("aps", "Antiphospholipid antibodies or antiphospholipid syndrome", "antiphospholipid", "aps", "lupus anticoagulant", "anticardiolipin", "beta 2 glycoprotein"),
          k("loss", "Previous pregnancy loss", "miscarriage", "pregnancy loss", "fetal loss", "stillbirth"),
          ESTROGEN,
          PREGNANCY,
          k("nephrotic", "Nephrotic range proteinuria from lupus nephritis", "nephrotic", "proteinuria", "nephritis"),
          SURGERY,
          IMMOB,
          FAMILY,
        ],
        explanation:
          "In lupus, antiphospholipid antibodies are the key thrombotic risk. Ask about prior clots, pregnancy loss, estrogen use, pregnancy and nephrotic syndrome. Each raises baseline risk and some change treatment.",
        keyFeature: kf(1),
        source: "tc-aps",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "She had an unprovoked left leg DVT at age 28. She is known to be triple positive for antiphospholipid antibodies. CT shows a segmental PE with a normal RV. Troponin normal. Creatinine 70 micromol/L, platelets 142 x 10^9/L.",
        prompt: "What is the most appropriate long term anticoagulant?",
        required: 1,
        accept: [k("warfarin", "Warfarin with a target INR of 2 to 3, overlapped with LMWH", "warfarin", "vitamin k antagonist", "vka", "coumadin")],
        unacceptable: [bad("A DOAC", ["start doac", "start apixaban", "start rivaroxaban", "apixaban 10", "rivaroxaban 15", "rivaroxaban 20"])],
        explanation:
          "In triple positive antiphospholipid syndrome, rivaroxaban led to more arterial events than warfarin. DOACs are avoided in high risk APS. Warfarin with a target INR of 2 to 3 is standard, overlapped with LMWH for at least 5 days until the INR is therapeutic.",
        keyFeature: kf(6),
        source: "traps",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is well with an sPESI of 0.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Admit for systemic thrombolysis with alteplase",
          "Admit on LMWH until the INR is therapeutic",
          "Discharge on apixaban with clinic follow-up",
          "Discharge on LMWH and warfarin, INR checks, clinic follow-up",
          "Discharge on warfarin alone with INR checks",
        ],
        correct: 3,
        explanation:
          "Normal vitals, oxygen saturation, RV and troponin support outpatient care. Warfarin must start with LMWH overlap because it is prothrombotic early. Arrange early thrombosis clinic follow-up. Counsel her that warfarin is teratogenic and she needs reliable nonestrogen contraception.",
        keyFeature: kf(7),
        source: "tc-pe",
      },
    ],
    sources: [TC_APS, TRAPS, TC_PE],
    ...META,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-14",
    topic: "dvt-pe",
    alsoTopics: ["sob"],
    title: "Breathless after knee surgery",
    stem:
      "A 71-year-old woman presents to the emergency department 9 days after a right total knee replacement. She was discharged on ASA 81 mg daily for thromboprophylaxis. This morning she became suddenly short of breath.\n\nThe right knee is swollen and bruised as expected after surgery. The calves are soft and symmetric. Creatinine 95 micromol/L. You think PE is the most likely diagnosis.",
    vitals: { temperature: "37.6°C", pulse: "118/minute", resp: "24/minute", bp: "132/76 mmHg", o2sat: "90% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her Wells PE score and two level category?",
        options: ["3, PE unlikely", "4.5, PE unlikely", "4.5, PE likely", "6, PE likely", "7.5, PE likely"],
        correct: 3,
        explanation:
          "She scores 3 for PE most likely, 1.5 for HR over 100 and 1.5 for surgery within 4 weeks. The total of 6 is above 4, so PE is likely. Expected post operative knee swelling is not a clinical sign of DVT.",
        keyFeature: kf(3),
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the most appropriate diagnostic test?",
        required: 1,
        accept: [k("ctpa", "CT pulmonary angiogram", ...CTPA_MATCH)],
        unacceptable: [bad("D-dimer", ["d dimer", "ddimer", "dimer"])],
        explanation:
          "With PE likely, go straight to imaging. D-dimer is almost always raised after recent surgery and a negative result would not exclude PE at this pretest probability. Her creatinine allows contrast.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What competing post operative diagnoses would you examine for?",
        required: 2,
        accept: [
          k("pneumonia", "Pneumonia or aspiration", "pneumonia", "aspiration"),
          k("atelectasis", "Atelectasis", "atelectasis"),
          k("hf", "Fluid overload or heart failure", "fluid overload", "heart failure", "chf", "pulmonary edema"),
          k("acs", "Myocardial infarction", "myocardial infarction", "mi", "acs", "acute coronary", "ischemia", "ischaemia"),
          k("af", "New atrial fibrillation", "atrial fibrillation", "arrhythmia", "af"),
          k("bleed", "Anemia from bleeding into the joint or wound", "anemia", "anaemia", "bleeding", "hemarthrosis", "hemorrhage"),
          k("opioid", "Opioid related hypoventilation", "opioid", "hypoventilation", "narcotic"),
          k("sepsis", "Sepsis from wound or joint infection", "sepsis", "wound infection", "septic joint", "joint infection"),
        ],
        explanation:
          "After joint replacement, pneumonia, atelectasis, fluid overload, perioperative MI, atrial fibrillation and anemia can all cause dyspnea and tachycardia. Examine the chest, heart, wound and joint. None of these makes PE less likely in her case, so imaging proceeds.",
        keyFeature: kf(2),
        source: "esc-pe",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT shows bilateral segmental PE. RV to LV ratio 0.9.",
        prompt: "What objective findings show she needs admission rather than outpatient treatment?",
        required: 2,
        accept: [
          k("o2", "SpO2 90% on room air or an oxygen requirement", "spo2", "saturation", "oxygen", "o2", "hypoxia", "hypoxemia"),
          k("hr", "Heart rate 110/min or more", "heart rate", "hr", "tachycardia"),
          k("rr", "Respiratory rate of 24/min", "respiratory rate", "tachypnea", "tachypnoea", "rr"),
          k("bleed", "Recent major surgery with raised bleeding risk", "bleeding risk", "recent surgery", "surgery", "post operative"),
        ],
        explanation:
          "HR of 118 scores on sPESI, and her borderline saturation with tachypnea signals limited reserve. Recent major surgery raises bleeding risk, a Hestia exclusion. Admit and choose an anticoagulant with the surgical team, often LMWH or UFH at first.",
        keyFeature: kf(7),
        source: "hestia",
      },
    ],
    sources: [TC_PE, ESC, HESTIA],
    ...META,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "dvt-pe-15",
    topic: "dvt-pe",
    title: "A pop behind the knee",
    stem:
      "A 63-year-old man with left knee osteoarthritis presents to the emergency department with left calf pain and swelling. He felt a sudden pop behind his left knee while gardening yesterday. He has no previous VTE, no cancer and no recent surgery.",
    vitals: { temperature: "36.8°C", pulse: "76/minute", bp: "138/84 mmHg", o2sat: "98% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What examination findings would favour an alternative diagnosis to DVT?",
        required: 3,
        accept: [
          k("crescent", "Crescent shaped bruising below the malleolus", "crescent", "bruising", "ecchymosis", "bruise"),
          k("popliteal", "Popliteal mass or fullness", "popliteal mass", "popliteal fullness", "popliteal swelling", "baker"),
          k("cellulitis", "Fever with well demarcated warm erythema", "fever", "cellulitis", "demarcated"),
          k("muscle", "Palpable defect in the medial gastrocnemius", "defect", "gastrocnemius", "muscle tear", "plantaris"),
          k("cord", "Tender superficial venous cord", "cord", "superficial thrombophlebitis", "superficial vein"),
          k("bilateral", "Bilateral edema suggesting a systemic cause", "bilateral"),
          k("effusion", "Knee effusion", "effusion"),
        ],
        explanation:
          "A ruptured popliteal cyst causes calf pain with popliteal fullness and bruising tracking to the ankle. Cellulitis, gastrocnemius tear and superficial thrombophlebitis are other mimics. Bilateral edema suggests heart, liver or kidney disease.",
        keyFeature: kf(2),
        source: "tc-dvt-dx",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "His left calf is 3.5 cm larger than the right. There is pitting edema to mid shin and a crescent shaped bruise below the medial malleolus. There is fullness in the popliteal fossa and no deep vein tenderness. A ruptured popliteal cyst seems at least as likely as DVT.",
        prompt: "Which of the following is his two level Wells DVT score and category?",
        options: ["0, DVT unlikely", "1, DVT unlikely", "2, DVT likely", "3, DVT likely", "4, DVT likely"],
        correct: 0,
        explanation:
          "Calf swelling over 3 cm and pitting edema score 1 each. An alternative diagnosis at least as likely subtracts 2. The total of 0 is DVT unlikely.",
        keyFeature: kf(3),
        source: "wells-dvt",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What is the most appropriate next investigation?",
        required: 1,
        accept: [k("ddimer", "High sensitivity D-dimer", "d dimer", "ddimer", "dimer")],
        unacceptable: [bad("Venography", ["venogram", "venography"])],
        explanation:
          "In a DVT unlikely patient, a negative D-dimer excludes DVT. A ruptured cyst can itself raise the D-dimer, and DVT can coexist with a cyst. A positive result therefore still needs ultrasound.",
        keyFeature: kf(4),
        source: "tc-dvt-dx",
      },
      {
        id: "q4",
        kind: "short",
        update: "D-dimer is 1 400 mcg/L FEU (cutoff 500). You perform a bedside two point compression ultrasound.",
        prompt: "Which sites are examined in a two point compression study?",
        required: 2,
        accept: [
          k("femoral", "Common femoral vein at the groin", "common femoral", "femoral", "saphenofemoral", "groin", "cfv"),
          k("popliteal", "Popliteal vein", "popliteal"),
        ],
        explanation:
          "Two point compression tests the common femoral and popliteal veins, where most clinically important proximal DVT is found. Full compression with no intraluminal clot is negative. If the study is uncertain, arrange formal imaging.",
        keyFeature: kf(4),
        source: "tc-dvt-dx",
      },
    ],
    sources: [TC_DVT_DX, WELLS_DVT],
    ...META,
  },
];
