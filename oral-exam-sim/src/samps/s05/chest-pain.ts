// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: true, author: "Preceptor", version: 1 };

const AHA_CP: Source = {
  id: "aha-chest-pain",
  citation: "Gulati M and colleagues. 2021 AHA/ACC guideline for the evaluation and diagnosis of chest pain. Circulation. 2021.",
};
const HEART_PATHWAY: Source = {
  id: "heart-pathway",
  citation: "Mahler SA and colleagues. The HEART Pathway randomized trial. Circ Cardiovasc Qual Outcomes. 2015.",
};
const HEART_SCORE: Source = {
  id: "heart-score",
  citation: "Backus BE and colleagues. A prospective validation of the HEART score for chest pain patients at the emergency department. Int J Cardiol. 2013.",
};
const AORTA: Source = {
  id: "aha-aorta",
  citation: "Isselbacher EM and colleagues. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022.",
};
const ADVISED: Source = {
  id: "advised",
  citation: "Nazerian P and colleagues. Diagnostic accuracy of the aortic dissection detection risk score plus D-dimer for acute aortic syndromes (ADvISED). Circulation. 2018.",
};
const ESC_PE: Source = {
  id: "esc-pe",
  citation: "Konstantinides SV and colleagues. 2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
};
const PERC: Source = {
  id: "perc",
  citation: "Kline JA and colleagues. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost. 2008.",
};
const THROMBOSIS_CANADA: Source = {
  id: "thrombosis-canada",
  citation: "Thrombosis Canada. Clinical guide: pregnancy: venous thromboembolism treatment. 2025.",
  url: "https://thrombosiscanada.ca/hcp/practice/clinical_guides?language=en-ca&guideID=TREATMENTOFDEEPVEINTHROMBOSISP",
};
const WSES: Source = {
  id: "wses-esophagus",
  citation: "Chirica M and colleagues. Esophageal emergencies. WSES guidelines. World J Emerg Surg. 2019.",
};
const STREAM: Source = {
  id: "stream",
  citation: "Armstrong PW and colleagues. Fibrinolysis or primary PCI in ST-segment elevation myocardial infarction (STREAM). N Engl J Med. 2013.",
};

const ESC_ACS23: Source = {
  id: "esc-acs-2023",
  citation: "Byrne RA and colleagues. 2023 ESC guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.",
  url: "https://doi.org/10.1093/eurheartj/ehad191",
};
const CCS_STEMI19: Source = {
  id: "ccs-stemi-2019",
  citation: "Wong GC and colleagues. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
  url: "https://doi.org/10.1016/j.cjca.2018.11.031",
};
const ESC_PERI15: Source = {
  id: "esc-pericardial-2015",
  citation: "Adler Y and colleagues. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.",
  url: "https://doi.org/10.1093/eurheartj/ehv318",
};
const PILL_ESOPH: Source = {
  id: "pill-esophagitis",
  citation: "Kim SH and colleagues. Clinical and endoscopic characteristics of drug-induced esophagitis. World J Gastroenterol. 2014.",
  url: "https://doi.org/10.3748/wjg.v20.i31.10994",
};
const AHA_CP21: Source = {
  id: "aha-chest-pain-2021",
  citation: "Gulati M and colleagues. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR guideline for the evaluation and diagnosis of chest pain. Circulation. 2021.",
  url: "https://doi.org/10.1161/CIR.0000000000001029",
};
const SCI_CVD: Source = {
  id: "sci-cvd",
  citation: "Cragg JJ, Noonan VK, Krassioukov A, Borisoff J. Cardiovascular disease and spinal cord injury: results from a national population health survey. Neurology. 2013.",
  url: "https://doi.org/10.1212/WNL.0b013e3182a1aa68",
};
const AD_ISCH: Source = {
  id: "ad-ischemia",
  citation: "Ho CP, Krassioukov AV. Autonomic dysreflexia and myocardial ischemia. Spinal Cord. 2010.",
  url: "https://doi.org/10.1038/sc.2010.2",
};
const CCS_LIPID21: Source = {
  id: "ccs-dyslipidemia-2021",
  citation: "Pearson GJ and colleagues. 2021 Canadian Cardiovascular Society guidelines for the management of dyslipidemia for the prevention of cardiovascular disease in adults. Can J Cardiol. 2021.",
  url: "https://doi.org/10.1016/j.cjca.2021.03.016",
};
const AORTA22: Source = {
  id: "aha-aorta-2022",
  citation: "Isselbacher EM and colleagues. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022.",
  url: "https://doi.org/10.1161/CIR.0000000000001106",
};

const CX_REVIEW: Source = {
  id: "circumflex-review-2026",
  citation: "Elhakim A and colleagues. Navigation of the clinical implications, interventional challenges, and complexities of the circumflex coronary artery: a comprehensive review. Rev Cardiovasc Med. 2026.",
  url: "https://doi.org/10.31083/RCM47426",
};
const ASA_PCI: Source = {
  id: "asa-pci-2024",
  citation: "Lin KS, Rattan K, George J, et al. Navigating aspirin hypersensitivity in patients undergoing percutaneous coronary intervention. J Med Cases. 2024.",
  url: "https://doi.org/10.14740/jmc4239",
};
const HELP_IDD: Source = {
  id: "help-idd-2018",
  citation: "Green L, McNeil K, Korossy M, et al. HELP for behaviours that challenge in adults with intellectual and developmental disabilities. Can Fam Physician. 2018. Supplement 2.",
};
const SHIBATA_CE: Source = {
  id: "coronary-embolism-2015",
  citation: "Shibata T, Kawakami S, Noguchi T, et al. Prevalence, clinical features, and prognosis of acute myocardial infarction attributable to coronary artery embolism. Circulation. 2015.",
  url: "https://doi.org/10.1161/CIRCULATIONAHA.114.015134",
};
const CE_REVIEW: Source = {
  id: "embolism-review-2025",
  citation: "Chang S, Xu R, Dai Y, et al. Coronary embolism resulting in myocardial infarction: diagnosis and treatment. Eur J Med Res. 2025.",
  url: "https://doi.org/10.1186/s40001-025-02914-8",
};

/* Reusable key items */
const ASA_ITEM = {
  id: "asa",
  text: "ASA 160 to 325 mg chewed",
  match: ["asa 160", "asa 162", "asa 325", "aspirin 160", "aspirin 162", "aspirin 325", "asa 160mg", "asa 162mg", "asa 325mg", "aspirin 160mg", "aspirin 162mg", "aspirin 325mg", "chewed asa", "chew asa", "chewed aspirin", "chew aspirin"],
};

export const CHEST_PAIN_SAMPS: Samp[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: "chest-pain-01",
    topic: "chest-pain",
    title: "Sudden pain watching television",
    stem:
      "A 64-year-old man presents at 02:10 with chest pain that began suddenly at 01:30 while he was watching television. It was maximal at onset, rated 10 out of 10, and now goes through to his back between the shoulder blades. He has hypertension and was once told he has a leaky aortic valve. BP is 196/104 mmHg in the right arm and 158/90 mmHg in the left arm. He is diaphoretic. There is a soft early diastolic murmur. ECG: sinus tachycardia, left ventricular hypertrophy, no ST elevation. A portable chest X-ray is read as a normal mediastinum.",
    vitals: { temperature: "36.7°C", pulse: "108/minute", resp: "22/minute", o2sat: "96% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features raise your concern for acute aortic syndrome?",
        required: 3,
        accept: [
          { id: "abrupt", text: "Abrupt onset, maximal at onset", match: ["abrupt", "sudden", "maximal at onset", "maximum at onset", "instant"] },
          { id: "back", text: "Severe pain radiating to the back", match: ["back", "interscapular", "shoulder blade", "tearing", "ripping"] },
          { id: "bpdiff", text: "Arm blood pressure difference", match: ["differential", "difference", "discrepancy", "pulse deficit", "unequal"] },
          { id: "valve", text: "Known aortic valve disease or new diastolic murmur", match: ["murmur", "diastolic", "aortic regurgitation", "aortic valve", "valve disease", "leaky valve"] },
          { id: "htn", text: "Hypertension", match: ["hypertension", "htn", "high blood pressure"] },
        ],
        explanation:
          "These features map to the aortic dissection detection risk score. Known valve disease is a high-risk condition. Abrupt severe back pain is high-risk pain. Pressure difference and a new regurgitant murmur are high-risk exam findings. He scores 3.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-aorta",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate next for this patient?",
        options: [
          "CT angiogram of the chest, abdomen and pelvis",
          "D-dimer, then CT angiogram only if positive",
          "Repeat PA and lateral chest X-ray",
          "Serial troponins over 3 hours",
          "Transesophageal echocardiogram in the morning",
        ],
        correct: 0,
        explanation:
          "With two or more high-risk categories, go straight to CT angiography. D-dimer is only used to help rule out dissection in low-risk patients. A normal chest X-ray does not lower the probability enough.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "advised",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What findings or test results should NOT be used to rule out aortic dissection in a patient like this?",
        required: 2,
        accept: [
          { id: "cxr", text: "Normal chest X-ray or mediastinum", match: ["chest x ray", "cxr", "chest xray", "mediastinum", "x ray"] },
          { id: "ddimer", text: "Negative D-dimer in a high-risk patient", match: ["d dimer", "ddimer", "dimer"] },
          { id: "ecg", text: "Normal or nonspecific ECG", match: ["ecg", "ekg"] },
          { id: "pulses", text: "Equal pulses or no pulse deficit", match: ["pulse", "no pulse deficit", "equal blood pressure", "equal bp"] },
          { id: "echo", text: "Normal bedside or transthoracic echo", match: ["echo", "pocus", "ultrasound", "tte"] },
          { id: "trop", text: "Normal troponin", match: ["troponin"] },
          { id: "nopain", text: "Pain improving with analgesia or no back pain", match: ["analgesia", "no back pain", "pain improve", "pain relief"] },
        ],
        explanation:
          "Chest X-ray is normal in a meaningful proportion of dissections. Pulse deficits are absent in most cases. Transthoracic echo and troponin cannot exclude it, and D-dimer should not be used when pretest probability is high.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-aorta",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT confirms a Stanford type A dissection from the aortic root to the arch.",
        prompt: "What are the immediate treatments or targets, naming any drug used?",
        required: 3,
        accept: [
          { id: "bb", text: "IV beta blocker first, such as esmolol or labetalol", match: ["esmolol", "labetalol", "beta blocker", "beta blockade", "metoprolol"] },
          { id: "hr", text: "Heart rate target below 60", match: ["hr 60", "heart rate 60", "pulse 60", "hr below 60", "heart rate below 60", "rate 60"] },
          { id: "sbp", text: "Systolic BP target 100 to 120 mmHg", match: ["systolic 120", "sbp 120", "systolic 100", "sbp 100", "bp 120", "sbp 100 120", "systolic below 120"] },
          { id: "opioid", text: "IV opioid analgesia", match: ["opioid", "fentanyl", "morphine", "hydromorphone", "analgesia"] },
          { id: "surgery", text: "Emergency cardiac surgery consultation", match: ["cardiac surgery", "cardiac surgeon", "cardiovascular surgery", "cardiothoracic", "surgery"] },
          { id: "vaso", text: "Add a vasodilator such as nicardipine if BP stays high", match: ["nitroprusside", "nicardipine", "clevidipine", "vasodilator"] },
        ],
        unacceptable: [
          { text: "Heparin", match: ["heparin infusion", "heparin bolus", "start heparin", "enoxaparin"], dangerous: true },
          { text: "Thrombolysis", match: ["tenecteplase", "alteplase"], dangerous: true },
          { text: "Hydralazine without beta blockade", match: ["hydralazine"] },
        ],
        explanation:
          "Lower the heart rate first with an IV beta blocker, then the pressure, to reduce shear on the aortic wall. Pain control lowers sympathetic drive. A vasodilator alone causes reflex tachycardia. Type A dissection needs emergency surgery.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-aorta",
      },
    ],
    sources: [AORTA, ADVISED],
    ...meta,
  },

  /* 02 ------------------------------------------------------------------ */
  {
    id: "chest-pain-02",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Chest pressure in a man with a valve click",
    stem:
      "A 72-year-old man walks into the emergency department at 07:05 with 50 minutes of heavy central chest pressure and sweating. The hospital has a cardiac catheterization laboratory on site. In 2017 he had a mechanical aortic valve replacement, and he takes warfarin with a target INR of 2.0 to 3.0. He also has hypertension and takes ramipril. He has had no bleeding. A crisp mechanical valve click is heard. The triage nurse has started the chest pain order set, which includes chewed ASA and an unfractionated heparin bolus.",
    vitals: { temperature: "36.6°C", pulse: "92/minute", resp: "20/minute", bp: "148/86 mmHg", o2sat: "96% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What do you need to know about his anticoagulation before the heparin in the order set is given?",
        required: 2,
        accept: [
          { id: "inr", text: "His INR now, by point-of-care testing if available", match: ["inr", "point of care", "poct", "coagulation", "coags", "prothrombin time"] },
          { id: "last", text: "When he took his last warfarin dose and his recent INR values", match: ["last dose", "last warfarin", "last took", "when he took", "recent inr", "previous inr", "inr history", "missed dose", "missed doses", "adherence"] },
          { id: "valve", text: "His valve type and position and his INR target", match: ["valve type", "type of valve", "which valve", "valve position", "inr target", "target inr"] },
          { id: "other", text: "Any other anticoagulant or antiplatelet drug he has taken", match: ["other anticoagulant", "other blood thinner", "other antiplatelet", "doac", "noac", "apixaban", "rivaroxaban", "dabigatran", "clopidogrel", "ticagrelor"] },
        ],
        unacceptable: [{ text: "Give the heparin bolus without checking the INR", match: ["give heparin", "give the heparin", "heparin bolus now", "proceed with heparin"] }],
        explanation:
          "The ESC recommends a UFH bolus during PCI for a patient on a vitamin K antagonist only if the INR is below 2.5. His INR therefore decides whether the order set bolus is given at all, and it should be measured now, by point-of-care testing if that is faster. The time of his last dose and his recent values show whether the result is stable. His valve type and position set his INR target, which matters for any later change to his warfarin. Any other anticoagulant, such as a DOAC taken by mistake, changes the plan, because the ESC recommends the bolus for patients on a NOAC.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "short",
        update: "The ECG at 07:09 shows 3 mm ST elevation in V1 to V4 and 1 mm ST elevation in I and aVL, with ST depression in III and aVF.",
        prompt: "What does this ECG show, and which territory is involved?",
        required: 1,
        accept: [
          { id: "stemi", text: "Anterior STEMI from an acute coronary occlusion", match: ["anterior stemi", "anterolateral stemi", "anterior st elevation", "anterolateral st elevation", "anterior mi", "anterolateral mi", "anterior myocardial infarction", "anterolateral myocardial infarction", "anterior infarct", "anterolateral infarct", "anterior wall", "anterior occlusion", "lad occlusion", "occluded lad", "proximal lad"] },
        ],
        unacceptable: [{ text: "Pericarditis", match: ["pericarditis"] }],
        explanation:
          "The ESC defines ST elevation suggesting an acute coronary occlusion as new elevation at the J point in two or more contiguous leads. In a man aged 40 or more that means 2 mm or more in V2 and V3, or 1 mm or more in other leads. He has 3 mm in V1 to V4 and 1 mm in I and aVL, so he meets the criteria across the anterior and lateral leads. With ongoing pain, this is an anterior STEMI and he needs reperfusion as soon as possible.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "menu",
        update: "The catheterization team is called in. His point-of-care INR is 3.1. He has received ASA 160 mg chewed. His creatinine is 88 umol/L.",
        prompt: "Which of the following anticoagulant plans is most appropriate for his primary PCI?",
        select: 1,
        options: [
          "Enoxaparin 84 mg SC",
          "Fondaparinux 2.5 mg SC",
          "Prothrombin complex concentrate IV",
          "Unfractionated heparin 5880 units IV",
          "Vitamin K 10 mg IV",
          "No added anticoagulant bolus",
        ],
        correct: [5],
        explanation:
          "The ESC recommends a UFH bolus during PCI for a patient on a vitamin K antagonist only when the INR is below 2.5. His INR of 3.1 already provides anticoagulation for the procedure, so the order set bolus of 70 units/kg, 5880 units for 84 kg, is not added. Enoxaparin at 1 mg/kg would stack a second anticoagulant on a therapeutic INR. Fondaparinux is not recommended for primary PCI. Vitamin K and prothrombin complex concentrate reverse warfarin, which is for bleeding, and he is not bleeding and has a mechanical valve that needs his anticoagulation.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "short",
        update: "The interventional cardiologist asks you to record the reperfusion times for the regional STEMI registry.",
        prompt: "What is his target time from first medical contact to device activation?",
        required: 1,
        accept: [
          { id: "ninety", text: "90 minutes or less, because he presented directly to a PCI centre", match: ["90 min", "90 minutes", "90 minute", "90min", "within 90", "ninety minutes", "1.5 hours", "one and a half hours"] },
        ],
        unacceptable: [
          { text: "120 minutes, the goal for patients first seen at a non-PCI centre", match: ["120 min", "120 minutes", "2 hours", "two hours"] },
          { text: "30 minutes, the goal for fibrinolysis", match: ["30 min", "30 minutes", "half an hour"] },
          { text: "60 to 90 minutes, the time to assess ST resolution after fibrinolysis", match: ["60 to 90", "after lysis", "after fibrinolysis", "after tenecteplase", "st resolution"] },
        ],
        explanation:
          "The CCS reperfusion goals set a total time from first medical contact to first device activation of 90 minutes or less for patients presenting to a PCI centre. The 120 minute goal applies to patients first seen at a non-PCI centre or diagnosed in the field. The same table sets 10 minutes from diagnosis to catheterization laboratory activation and 30 minutes from arrival in the laboratory to the first device. Thirty minutes is also the goal from first medical contact to fibrinolysis, which is not his strategy.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi-2019",
      },
    ],
    sources: [ESC_ACS23, CCS_STEMI19],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "chest-pain-03",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Shoulder pressure and a pill he avoids",
    stem:
      "A 57-year-old man is brought to the emergency department by ambulance at 07:20 with 50 minutes of central chest pressure spreading to his left shoulder, with nausea. The hospital has a cardiac catheterization laboratory on site. He has type 2 diabetes and dyslipidemia and takes metformin and atorvastatin. He takes no erectile dysfunction drugs. His chart lists an ASA allergy. In 2021, within 40 minutes of taking ASA 325 mg for a toothache, he developed generalized hives and swelling of his lips that settled with an antihistamine at a walk-in clinic. He had no wheeze, no fainting and no skin blistering or peeling. The paramedics did not give ASA. The ECG at 07:24 shows 2 mm ST elevation in I, aVL, V5 and V6, with 1 mm ST depression in III and aVF.",
    vitals: { temperature: "36.8°C", pulse: "94/minute", resp: "18/minute", bp: "146/88 mmHg", o2sat: "97% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What does this ECG show, and which territory is involved?",
        required: 1,
        accept: [
          { id: "lat", text: "Lateral STEMI from an acute coronary occlusion", match: ["lateral stemi", "lateral st elevation", "lateral mi", "lateral myocardial infarction", "lateral infarct", "lateral wall", "lateral occlusion", "lateral territory", "high lateral"] },
        ],
        unacceptable: [{ text: "Pericarditis", match: ["pericarditis"] }],
        explanation:
          "The ESC treats new ST elevation at the J point of 1 mm or more in two or more contiguous leads, outside V2 and V3, as suggesting an acute coronary occlusion. He has 2 mm in I and aVL and in V5 and V6, two groups of contiguous lateral leads, with 50 minutes of ongoing pressure. That is a lateral STEMI, and it calls for reperfusion as soon as possible whatever his allergy.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Which coronary artery is most likely occluded?",
        required: 1,
        accept: [
          { id: "lcx", text: "The left circumflex artery or one of its obtuse marginal branches", match: ["circumflex", "lcx", "obtuse marginal", "marginal branch"] },
          { id: "diag", text: "A diagonal branch of the left anterior descending artery", match: ["diagonal"] },
        ],
        unacceptable: [{ text: "Right coronary artery", match: ["right coronary", "rca"] }],
        explanation:
          "Leads I, aVL, V5 and V6 face the lateral wall of the left ventricle. The circumflex artery runs in the left atrioventricular groove and gives off obtuse marginal branches that supply the lateral and posterolateral walls, so it is the most likely culprit. The review notes that the standard ECG shows an acute circumflex occlusion in only a third to a half of cases, so clear lateral elevation like his is a finding to act on. A diagonal branch is also accepted. In most people the right coronary artery gives off the posterior descending artery, and his inferior leads show ST depression rather than elevation.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "circumflex-review-2026",
      },
      {
        id: "q3",
        kind: "single",
        update: "The interventional cardiologist asks whether his ASA allergy should change the plan for reperfusion.",
        prompt: "Which of the following is the most appropriate plan for his reperfusion and his ASA allergy?",
        options: [
          "ASA challenge 81 mg PO, then primary PCI",
          "ASA desensitization first, then primary PCI",
          "Medical therapy until an allergy assessment",
          "Primary PCI now, ASA desensitization after",
          "Tenecteplase now, with no ASA",
        ],
        correct: 3,
        explanation:
          "His artery is occluded now, and the ESC priority in STEMI is reperfusion as soon as possible. Desensitization protocols take hours, so they cannot come before reperfusion. For urgent PCI in a patient with ASA hypersensitivity, the review lists options that include a P2Y12 inhibitor and IV glycoprotein IIb/IIIa inhibition during the procedure, with ASA desensitization afterwards, while noting that none has been formally validated. His reaction was hives with lip swelling, not a blistering skin reaction such as Stevens-Johnson syndrome or DRESS, which would rule out desensitization. A test dose of ASA risks a reaction during an infarct. Medical therapy leaves the artery occluded, and fibrinolysis is not the strategy with a laboratory on site.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "asa-pci-2024",
      },
      {
        id: "q4",
        kind: "short",
        update: "While the laboratory team is called in, the nurse asks what to change in the standard STEMI orders because of his allergy.",
        prompt: "What instructions do you give the nurse?",
        required: 2,
        accept: [
          { id: "noasa", text: "No ASA in any form, including rectal", match: ["no asa", "hold asa", "withhold asa", "avoid asa", "not give asa", "cancel asa", "remove asa", "no aspirin", "hold aspirin", "withhold aspirin", "avoid aspirin", "cancel aspirin"] },
          { id: "nsaid", text: "No other NSAIDs, such as ketorolac or ibuprofen, for pain", match: ["no nsaid", "avoid nsaid", "hold nsaid", "no ketorolac", "avoid ketorolac", "no ibuprofen", "avoid ibuprofen", "no naproxen", "avoid naproxen", "no anti inflammator", "avoid anti inflammator"] },
          { id: "flag", text: "Flag the allergy for pharmacy and the catheterization team", match: ["flag", "alert", "allergy band", "notify cath", "tell cath", "inform cath", "notify pharmacy", "inform pharmacy", "tell pharmacy", "document the allergy"] },
        ],
        unacceptable: [
          { text: "ASA by the order set", match: ["chew asa", "chewed asa", "give asa", "asa 81", "asa 160", "asa 162", "asa 325", "chewed aspirin", "give aspirin", "aspirin 160", "aspirin 325", "rectal asa"], dangerous: true },
          { text: "Ketorolac or another NSAID for pain", match: ["give ketorolac", "ketorolac 15", "ketorolac 30", "give ibuprofen", "ibuprofen 400", "ibuprofen 600"], dangerous: true },
        ],
        explanation:
          "Hives with lip swelling within an hour of ASA is an immediate hypersensitivity reaction, so the order set dose must not be given. The review of ASA hypersensitivity separates reactions driven by COX-1 inhibition, which other NSAIDs can also trigger, from true allergy, and ketorolac or ibuprofen for his pain could provoke the same reaction. Flagging the allergy lets pharmacy and the laboratory plan his antiplatelet therapy and desensitization.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "asa-pci-2024",
      },
      {
        id: "q5",
        kind: "short",
        update: "After fentanyl 50 mcg IV he is pain free. The repeat ECG still shows 2 mm ST elevation in I, aVL, V5 and V6. A colleague asks whether the procedure can now wait until morning.",
        prompt: "Why does his pain relief not change the plan?",
        required: 2,
        accept: [
          { id: "ste", text: "The ST elevation persists, so the artery is still occluded", match: ["st elevation persist", "persistent st elevation", "still st elevation", "ongoing st elevation", "st elevation remain", "st elevation still", "still has st elevation", "still occluded", "occlusion persist", "ongoing occlusion", "still blocked", "artery still"] },
          { id: "mask", text: "The opioid treats the pain but does not reopen the artery", match: ["mask", "masks", "masked", "masking", "only treats the pain", "treats the pain", "treats pain", "symptom relief", "not reperfused", "no reperfusion", "not reopen", "doesnt reopen", "does not reopen", "not open the artery"] },
          { id: "myo", text: "Waiting loses myocardium and raises the risk of death", match: ["myocardium", "heart muscle", "time is muscle", "infarct size", "larger infarct", "more necrosis"] },
        ],
        unacceptable: [{ text: "Wait until morning because he is pain free", match: ["wait until morning", "defer pci", "delay pci", "postpone"], dangerous: true }],
        explanation:
          "The ESC treats ST elevation as a sign of ongoing acute coronary occlusion, and his repeat ECG is unchanged. The ESC suggests an IV opioid for severe chest pain, and fentanyl has done that job, but it does not reopen the artery. The ESC priority is reperfusion as soon as possible, because myocardium keeps dying while the artery stays closed. Pain relief after an opioid is therefore not a reason to delay primary PCI.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs-2023",
      },
    ],
    sources: [ESC_ACS23, CX_REVIEW, ASA_PCI],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "chest-pain-04",
    topic: "chest-pain",
    title: "Pleuritic pain three weeks after delivery",
    stem:
      "A 31-year-old woman presents with 2 days of right-sided chest pain that is worse with deep breaths and shortness of breath on exertion. She had a caesarean delivery 3 weeks ago and is breastfeeding. She has no leg symptoms. Her lungs are clear. ECG: sinus tachycardia with T wave inversion in V1 to V3. Chest X-ray is normal.",
    vitals: { temperature: "37.6°C", pulse: "112/minute", resp: "24/minute", bp: "118/72 mmHg", o2sat: "93% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features increase her pretest probability of pulmonary embolism?",
        required: 3,
        accept: [
          { id: "pp", text: "Postpartum state", match: ["postpartum", "post partum", "recent delivery", "recent pregnancy", "puerperium", "pregnancy"] },
          { id: "surgery", text: "Recent caesarean section (surgery)", match: ["caesarean", "cesarean", "c section", "surgery", "operation"] },
          { id: "hr", text: "Tachycardia", match: ["tachycardia", "heart rate", "hr"] },
          { id: "hypox", text: "Hypoxemia", match: ["hypoxemia", "hypoxaemia", "hypoxia", "saturation", "spo2", "o2 sat", "desaturation"] },
          { id: "ecg", text: "T wave inversion in V1 to V3 suggesting right heart strain", match: ["t wave", "twi", "right heart strain", "rv strain", "strain"] },
          { id: "normalcxr", text: "Normal chest X-ray and clear lungs despite symptoms", match: ["normal chest x ray", "normal cxr", "clear lung"] },
        ],
        explanation:
          "The postpartum period and recent surgery are strong risk factors. Tachycardia, unexplained hypoxemia with a clear chest X-ray and right precordial T wave inversion all raise the probability further.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next test for this patient?",
        options: [
          "Bilateral leg compression ultrasound only",
          "CT pulmonary angiogram",
          "D-dimer before any imaging",
          "Transthoracic echocardiogram",
          "V/Q scan once she stops breastfeeding",
        ],
        correct: 1,
        explanation:
          "Her Wells score is 6 (heart rate over 100, surgery within 4 weeks and PE the most likely diagnosis), so PE is likely. Go straight to CTPA. A negative D-dimer cannot rule out PE at this probability. Breastfeeding is not a reason to delay imaging.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "short",
        update: "The resident thinks pleurisy is more likely.",
        prompt: "What findings in this case should NOT be used to exclude PE?",
        required: 2,
        accept: [
          { id: "cxr", text: "Normal chest X-ray", match: ["chest x ray", "cxr", "chest xray", "x ray"] },
          { id: "lungs", text: "Clear lungs on auscultation", match: ["clear lung", "lung exam", "auscultation"] },
          { id: "legs", text: "No leg swelling or leg symptoms", match: ["leg", "dvt", "calf", "no leg", "no dvt", "no calf", "normal leg"] },
          { id: "fever", text: "Low-grade temperature", match: ["fever", "temperature", "febrile"] },
          { id: "pleuritic", text: "Pleuritic quality of the pain", match: ["pleuritic", "worse with breath", "worse with deep breath"] },
          { id: "bp", text: "Normal blood pressure", match: ["blood pressure", "bp", "normotensive"] },
          { id: "age", text: "Young age and good health", match: ["young", "healthy"] },
        ],
        explanation:
          "Chest X-ray is usually normal in PE. Most patients have no leg signs. Low-grade fever and pleuritic pain are common in PE. A normal BP only means she is not in shock.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q4",
        kind: "short",
        update: "CTPA shows a right lower lobe segmental PE. RV to LV ratio is normal and troponin is normal. Creatinine is 62 umol/L. She will be treated at home and plans to keep breastfeeding.",
        prompt: "What is her first anticoagulant prescription, including the drug, dose and frequency?",
        required: 1,
        accept: [
          { id: "enox", text: "Enoxaparin 1 mg/kg SC every 12 hours or 1.5 mg/kg SC daily", match: ["enoxaparin 1 mg/kg", "enoxaparin 1mg/kg", "enoxaparin 1.5 mg/kg", "enoxaparin 1.5mg/kg", "enoxaparin 80", "enoxaparin 120", "enoxaparin 1 mg per kg", "enoxaparin 1.5 mg per kg"] },
          { id: "dalte", text: "Dalteparin 200 units/kg SC daily or 100 units/kg SC every 12 hours", match: ["dalteparin 200", "dalteparin 15000", "dalteparin 15 000", "dalteparin 100", "fragmin 200"] },
          { id: "tinza", text: "Tinzaparin 175 units/kg SC daily", match: ["tinzaparin 175", "tinzaparin 14000", "tinzaparin 14 000", "innohep 175"] },
          { id: "warf", text: "Warfarin overlapped with LMWH until INR is 2 to 3", match: ["warfarin"] },
        ],
        unacceptable: [
          { text: "A direct oral anticoagulant while breastfeeding", match: ["rivaroxaban", "apixaban", "dabigatran", "edoxaban", "doac"] },
        ],
        explanation:
          "LMWH and warfarin are compatible with breastfeeding. Thrombosis Canada advises against DOACs during lactation because safety data are lacking. For 78 kg, enoxaparin is 80 mg every 12 hours or 120 mg daily, dalteparin 15 000 units daily and tinzaparin 14 000 units daily.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "thrombosis-canada",
      },
    ],
    sources: [ESC_PE, THROMBOSIS_CANADA],
    ...meta,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "chest-pain-05",
    topic: "chest-pain",
    title: "Sharp pain after helping a friend move",
    stem:
      "A 27-year-old man presents with 1 day of sharp left-sided chest pain that is worse with deep breaths. It began the morning after he helped a friend move furniture. He has no medical history and takes no medications. Heart and lung examination are normal. ECG is normal.",
    vitals: { temperature: "36.8°C", pulse: "84/minute", resp: "16/minute", bp: "128/76 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What life-threatening causes of pleuritic chest pain must you consider?",
        required: 3,
        accept: [
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embol", "pulmonary embolism", "pe"] },
          { id: "ptx", text: "Pneumothorax", match: ["pneumothorax", "ptx"] },
          { id: "peri", text: "Pericarditis with effusion or tamponade", match: ["pericarditis", "tamponade", "pericardial"] },
          { id: "acs", text: "Acute coronary syndrome", match: ["acs", "acute coronary", "myocardial infarction", "mi", "stemi"] },
          { id: "ad", text: "Aortic dissection", match: ["dissection", "aortic"] },
          { id: "boerhaave", text: "Esophageal rupture", match: ["esophageal rupture", "oesophageal rupture", "boerhaave", "esophageal perforation"] },
          { id: "pna", text: "Pneumonia with sepsis", match: ["pneumonia", "sepsis"] },
        ],
        explanation:
          "Pleuritic pain does not exclude dangerous causes. PE, pneumothorax and pericarditis commonly present this way. ACS and dissection occasionally do.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "short",
        update: "Your gestalt probability of PE is low.",
        prompt: "Which criteria of the PERC rule must he meet?",
        required: 3,
        accept: [
          { id: "age", text: "Age under 50", match: ["age", "under 50", "younger than 50"] },
          { id: "hr", text: "Heart rate under 100", match: ["heart rate", "hr", "pulse", "tachycardia", "no tachycardia"] },
          { id: "sat", text: "SpO2 95% or higher on room air", match: ["saturation", "spo2", "o2 sat", "oxygen", "95%"] },
          { id: "hemop", text: "No hemoptysis", match: ["hemoptysis", "haemoptysis", "no hemoptysis", "no haemoptysis"] },
          { id: "estrogen", text: "No estrogen use", match: ["estrogen", "oestrogen", "hormone", "oral contraceptive", "ocp", "no estrogen", "no oestrogen", "no hormone", "no ocp", "not on estrogen"] },
          { id: "vte", text: "No prior DVT or PE", match: ["prior vte", "previous vte", "prior dvt", "previous dvt", "prior pe", "previous pe", "history of vte", "history of dvt", "history of pe", "prior clot", "no prior", "no previous", "no history of vte", "no history of dvt", "no history of pe", "no vte"] },
          { id: "leg", text: "No unilateral leg swelling", match: ["leg swelling", "unilateral leg", "leg edema", "swollen leg", "no leg swelling", "no unilateral leg"] },
          { id: "surgery", text: "No surgery or trauma needing intubation or hospitalization in the past 4 weeks", match: ["surgery", "trauma", "no surgery", "no recent surgery", "no trauma"] },
        ],
        explanation:
          "PERC has eight criteria. When pretest probability is low by gestalt and all are met, the risk of PE is low enough that no testing is needed, including D-dimer.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "perc",
      },
      {
        id: "q3",
        kind: "single",
        update: "He meets all PERC criteria. Pressing on the left fifth costochondral junction reproduces some of his pain.",
        prompt: "Which of the following statements about this patient is most accurate?",
        options: [
          "Chest wall tenderness excludes PE",
          "CT pulmonary angiogram is indicated",
          "D-dimer is still required for pleuritic pain",
          "PERC and low gestalt rule out PE, no D-dimer needed",
          "PERC is invalid when the pain is pleuritic",
        ],
        correct: 3,
        explanation:
          "PERC applied to a low gestalt probability rules out PE without testing. Chest wall tenderness does not by itself exclude PE or ACS, so it is not the reason to stop here. Pleuritic pain is not an exclusion for PERC.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "perc",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Later that shift, a 44-year-old woman presents with similar pleuritic pain. She is 10 days after arthroscopic knee surgery under general anesthesia with intubation. Pulse 88/minute and O2 sat 97%. She has no leg swelling. Her Wells score is 1.5.",
        prompt: "Which of the following is the most appropriate next step for this second patient?",
        options: [
          "CT angiogram",
          "D-dimer",
          "Discharge home",
          "Leg ultrasound",
          "V/Q scan",
        ],
        correct: 1,
        explanation:
          "Recent surgery means she fails PERC. With PE unlikely by Wells, a D-dimer is the next test. A negative result rules out PE. A positive result leads to CTPA.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-pe",
      },
    ],
    sources: [AHA_CP, PERC, ESC_PE],
    ...meta,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "chest-pain-06",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Collapse at a hockey game",
    stem:
      "A 66-year-old man is brought to the emergency department by ambulance 40 minutes after a sudden, severe pain tore through his chest to his back while he watched his grandson's hockey game. He fainted briefly in the stands. He has hypertension and takes amlodipine. Paramedics recorded 2 mm ST elevation in II, III and aVF, gave ASA 160 mg chewed and activated the STEMI pathway. The hospital has cardiac surgery on site. He is pale and sweaty. The right radial pulse is weaker than the left, and the blood pressure is lower in the right arm. The JVP is raised. A soft early diastolic murmur is heard at the left sternal border. Bedside ultrasound shows an aortic root of 52 mm with a mobile intimal flap and a moderate pericardial effusion with right ventricular diastolic collapse.",
    vitals: { temperature: "36.4°C", pulse: "118/minute", resp: "24/minute", bp: "82/50 mmHg", o2sat: "95% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Which complications of his dissection explain his shock and his ECG?",
        required: 2,
        accept: [
          { id: "peri", text: "Bleeding into the pericardium with tamponade", match: ["tamponade", "hemopericardium", "haemopericardium", "pericardial blood", "blood in the pericardium", "pericardial rupture", "rupture into the pericardium"] },
          { id: "rca", text: "Dissection involving the right coronary artery, causing the inferior ST elevation", match: ["right coronary", "rca", "coronary involvement", "coronary ostium", "coronary ostia", "coronary malperfusion", "coronary artery involvement"] },
          { id: "ar", text: "Acute aortic regurgitation", match: ["aortic regurgitation", "aortic insufficiency"] },
          { id: "branch", text: "Innominate or right subclavian involvement causing the pulse deficit", match: ["innominate", "brachiocephalic", "subclavian", "pulse deficit", "branch vessel", "malperfusion"] },
        ],
        unacceptable: [{ text: "Primary STEMI from coronary plaque rupture", match: ["plaque rupture", "atherosclerotic stemi"] }],
        explanation:
          "Tearing pain to the back, a flap in a 52 mm aortic root and a new diastolic murmur make this an acute type A aortic dissection. The ACC/AHA guideline lists its life-threatening complications as acute aortic regurgitation, myocardial ischemia from coronary involvement, cardiac tamponade and branch vessel malperfusion, and he shows all four. The inferior ST elevation comes from the flap involving the right coronary artery. The effusion with right ventricular collapse, raised JVP and shock is blood in the pericardium causing tamponade. The weaker right radial pulse points to the innominate artery.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-aorta-2022",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for him now?",
        options: [
          "Catheterization laboratory for primary PCI",
          "CT angiography of the aorta, then surgery",
          "Esmolol infusion to a heart rate below 60",
          "Operating room now for aortic repair",
          "Pericardiocentesis with complete drainage",
        ],
        correct: 3,
        explanation:
          "For suspected or confirmed acute type A dissection, the ACC/AHA guideline recommends emergency surgical evaluation and immediate surgical intervention. Central aortic repair also corrects the coronary malperfusion, the aortic regurgitation and the tamponade. The diagnosis and its complications are already seen on ultrasound, and more imaging would delay surgery in a man in shock. Primary PCI treats the ECG but not the torn aorta. Esmolol lowers blood pressure and heart rate, and he is already hypotensive. For hemopericardium from a dissection, the ESC advises at most controlled drainage of very small amounts, to hold the systolic pressure near 90 mmHg as a bridge to surgery, not complete drainage.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-aorta-2022",
      },
      {
        id: "q3",
        kind: "short",
        update: "The cardiac surgeon is on the way to the operating room. The STEMI order set on his chart still lists ticagrelor 180 mg PO and an unfractionated heparin bolus.",
        prompt: "What parts of the STEMI plan do you stop or cancel?",
        required: 2,
        accept: [
          { id: "hep", text: "Cancel the heparin bolus and any other anticoagulant", match: ["no heparin", "not give heparin", "hold heparin", "withhold heparin", "avoid heparin", "stop heparin", "cancel heparin", "cancel the heparin", "no ufh", "hold ufh", "cancel ufh", "no anticoagulant", "avoid anticoagulant", "hold anticoagulant", "stop anticoagulant", "no anticoagulation", "avoid anticoagulation", "hold anticoagulation"] },
          { id: "p2y12", text: "Cancel ticagrelor and any further antiplatelet drug", match: ["no ticagrelor", "not give ticagrelor", "hold ticagrelor", "withhold ticagrelor", "avoid ticagrelor", "cancel ticagrelor", "cancel the ticagrelor", "stop ticagrelor", "no p2y12", "hold p2y12", "avoid p2y12", "no antiplatelet", "avoid antiplatelet", "hold antiplatelet", "no further antiplatelet", "no more asa", "no further asa"] },
          { id: "lysis", text: "No fibrinolytic", match: ["no tenecteplase", "not give tenecteplase", "avoid tenecteplase", "withhold thrombolysis", "withhold fibrinolysis", "no fibrinolysis", "avoid fibrinolysis", "no thrombolysis", "avoid thrombolysis", "no fibrinolytic", "no thrombolytic", "no tnk", "fibrinolysis contraindicated", "thrombolysis contraindicated"] },
          { id: "cath", text: "Cancel the catheterization laboratory activation", match: ["cancel catheterization", "cancel the cath", "cancel cath", "stand down", "stand the cath", "no pci", "cancel pci", "no cath lab", "cancel the stemi", "stop the stemi", "cancel stemi"] },
        ],
        unacceptable: [
          { text: "Give heparin or ticagrelor as ordered", match: ["give heparin", "start heparin", "give ticagrelor", "load ticagrelor", "start ticagrelor", "give tenecteplase", "proceed to pci"], dangerous: true },
        ],
        explanation:
          "His ST elevation comes from the dissection, not from a thrombus on a plaque, so the STEMI plan no longer fits. The ACC/AHA guideline states that central aortic repair corrects coronary malperfusion, so the treatment of his infarct is the operation. Heparin, more antiplatelet drugs or fibrinolysis would add to the bleeding risk in a man with blood in his pericardium who is minutes from open heart surgery. The ASA the paramedics gave cannot be undone, and the surgeon needs to know about it. The catheterization team should be stood down.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-aorta-2022",
      },
      {
        id: "q4",
        kind: "short",
        update: "The operating room will be ready in 15 minutes. His systolic pressure falls to 72 mmHg and he remains alert.",
        prompt: "What is your approach to his blood pressure and heart rate until he reaches the operating room?",
        required: 2,
        accept: [
          { id: "nobb", text: "No beta blocker while he is hypotensive", match: ["no beta blocker", "avoid beta blocker", "hold beta blocker", "withhold beta blocker", "no esmolol", "avoid esmolol", "hold esmolol", "no labetalol", "avoid labetalol", "no metoprolol", "avoid metoprolol", "beta blocker contraindicated"] },
          { id: "novd", text: "No vasodilator such as nitroprusside or nitroglycerin", match: ["no vasodilator", "avoid vasodilator", "hold vasodilator", "no nitroprusside", "avoid nitroprusside", "no nitroglycerin", "avoid nitroglycerin", "no nitrate", "avoid nitrate", "no nitro", "avoid nitro"] },
          { id: "nodiur", text: "No diuretic", match: ["no diuretic", "avoid diuretic", "no furosemide", "avoid furosemide", "no lasix"] },
          { id: "perf", text: "Accept the lowest pressure that keeps his organs perfused, with fluid or blood if needed", match: ["perfusion", "perfuse", "perfused", "mentation", "end organ", "fluid bolus", "small bolus", "blood transfusion", "transfuse", "red cell", "crossmatch"] },
        ],
        unacceptable: [
          { text: "Esmolol or labetalol to a heart rate below 60", match: ["start esmolol", "give esmolol", "esmolol infusion", "give labetalol", "labetalol 20", "heart rate below 60", "rate below 60"], dangerous: true },
        ],
        explanation:
          "The ACC/AHA guideline aims for a systolic pressure below 120 mmHg or the lowest pressure that keeps end organs perfused, and it gives IV beta blockers only when there is no contraindication. His pressure is already 72 mmHg with tamponade, so a beta blocker would deepen the shock. The ESC advises against vasodilators and diuretics in cardiac tamponade. The goal is to keep him alert and perfused, with fluid or blood if needed, until the surgeon can relieve the tamponade and repair the aorta.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pericardial-2015",
      },
    ],
    sources: [AORTA22, ESC_PERI15],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "chest-pain-07",
    topic: "chest-pain",
    title: "Pain when swallowing at night",
    stem:
      "A 45-year-old woman presents at 07:15 with retrosternal pain that woke her at 03:00. The pain is worse each time she swallows, even water. She started doxycycline 100 mg twice daily 4 days ago for rosacea. Last night she took her dose with a sip of water just before lying down. She has type 2 diabetes treated with metformin and smokes 15 cigarettes a day. Her mother had an MI at 58. She has not vomited and has no fever. Her abdomen is soft and nontender. The triage nurse is still taking her history.",
    vitals: { temperature: "36.8°C", pulse: "92/minute", resp: "18/minute", bp: "138/84 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of her history point to pill-induced esophagitis?",
        required: 3,
        accept: [
          { id: "odyno", text: "Pain on swallowing", match: ["odynophagia", "pain on swallowing", "pain with swallowing", "painful swallowing", "swallowing pain", "worse swallowing", "hurts to swallow"] },
          { id: "drug", text: "Doxycycline, a common culprit drug", match: ["doxycycline", "tetracycline", "antibiotic", "culprit drug", "new medication", "new drug"] },
          { id: "water", text: "Pill taken with little water", match: ["little water", "sip", "without water", "no water", "small amount water"] },
          { id: "lying", text: "Pill taken just before lying down", match: ["lying down", "lie down", "recumbent", "before bed", "bedtime", "supine"] },
          { id: "timing", text: "Onset within hours of the dose", match: ["hours after", "after dose", "woke", "timing", "onset after", "within hours"] },
        ],
        explanation:
          "Pill esophagitis follows a tablet that lodges in the esophagus and injures the mucosa. In a series of 78 patients, antibiotics caused 36% of cases, and doxycycline is a classic culprit. Patients had often taken the drug lying down or just before sleep with little or no water, as she did. Chest pain was the most common symptom at 72%, and odynophagia occurred in 39%.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "pill-esophagitis",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Why does her pain on swallowing not end the workup for ACS?",
        required: 1,
        accept: [
          { id: "noexclude", text: "No single feature of the pain excludes ACS", match: ["single feature", "no single", "cannot exclude", "doesnt exclude", "does not exclude", "not exclude", "not rule out", "cannot rule out", "cant rule out"] },
          { id: "risk", text: "Her risk factors: diabetes, smoking and a premature family history", match: ["risk factor", "diabetes", "smoker", "smoking", "family history"] },
          { id: "women", text: "Women and people with diabetes often present with other symptoms", match: ["women", "atypical", "diabetic"] },
          { id: "tests", text: "Only an ECG and troponin can set ACS aside", match: ["ecg", "troponin"] },
        ],
        explanation:
          "Pain with swallowing favours an esophageal cause but does not exclude ACS. She has diabetes, smokes and has a mother with an MI at 58, so her pretest probability is not low. Women with ACS often report accompanying symptoms, and the AHA and ACC advise describing pain as cardiac, possibly cardiac or noncardiac rather than typical or atypical. An ECG and a high-sensitivity troponin are needed before ACS is set aside.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What tests would you order now, before her history is complete?",
        required: 3,
        accept: [
          { id: "ecg", text: "12-lead ECG read within 10 minutes", match: ["ecg", "ekg", "electrocardiogram"] },
          { id: "trop", text: "High-sensitivity troponin, repeated by protocol", match: ["troponin", "trop"] },
          { id: "cxr", text: "Chest X-ray", match: ["chest x ray", "cxr", "chest xray", "chest radiograph", "chest film"] },
          { id: "monitor", text: "Cardiac monitoring", match: ["monitor", "monitoring", "telemetry"] },
          { id: "labs", text: "CBC and electrolytes", match: ["cbc", "blood count", "electrolyte", "lytes", "creatinine"] },
        ],
        explanation:
          "Chest pain in a smoker with diabetes needs a 12-lead ECG acquired and read within 10 minutes, whatever the history suggests so far. A high-sensitivity troponin, repeated at the interval the local protocol sets, completes the ACS screen. A chest X-ray looks for mediastinal air or another cause, although she has not vomited and perforation is unlikely. Monitoring, a CBC and electrolytes are reasonable while results return.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs-2023",
      },
    ],
    sources: [PILL_ESOPH, AHA_CP21, ESC_ACS23],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "chest-pain-08",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Sweating above the nipple line",
    stem:
      "A 66-year-old man with a complete C6 spinal cord injury from a car crash 22 years ago is brought in by his attendant at 14:40. Since breakfast he has felt unwell and nauseated, with a headache, shortness of breath and heavy sweating above the nipple line. His usual BP is about 105/65 mmHg. His attendant has changed his indwelling catheter, which drains well, and checked for constipation and pressure injuries, but his BP has stayed high. He has type 2 diabetes and dyslipidemia and has smoked for 25 pack-years. He denies chest pain. The ECG shows sinus rhythm with new 1 mm horizontal ST depression in V4 to V6 compared with a tracing from last year.",
    vitals: { temperature: "36.6°C", pulse: "58/minute", resp: "22/minute", bp: "176/98 mmHg", o2sat: "95% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of his history raise his pretest probability of ACS?",
        required: 3,
        accept: [
          { id: "sci", text: "Chronic spinal cord injury, which raises cardiovascular risk", match: ["spinal cord injury", "spinal cord", "sci", "tetraplegia", "quadriplegia", "inactivity", "immobility", "sedentary"] },
          { id: "dm", text: "Diabetes", match: ["diabetes", "diabetic"] },
          { id: "lipids", text: "Dyslipidemia", match: ["dyslipidemia", "cholesterol", "lipid", "hyperlipidemia"] },
          { id: "smoke", text: "Smoking history", match: ["smoking", "smoker", "pack year", "tobacco", "cigarette"] },
          { id: "age", text: "Age over 60 and male sex", match: ["age", "older", "male sex"] },
          { id: "ecg", text: "New ST depression", match: ["st depression", "ecg change", "ischemic ecg"] },
        ],
        explanation:
          "Diabetes, dyslipidemia, 25 pack-years of smoking and his age are traditional risk factors. The spinal cord injury adds to them. In more than 60 000 Canadians in a national health survey, spinal cord injury carried an adjusted odds ratio of 2.72 for heart disease after accounting for age and sex. His new ST depression raises the probability further.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "sci-cvd",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What symptoms or signs may be the only clues to ACS in a man with a high cervical cord injury?",
        required: 3,
        accept: [
          { id: "ad", text: "A BP surge like autonomic dysreflexia, with headache", match: ["autonomic dysreflexia", "dysreflexia", "hypertension", "high blood pressure", "bp surge", "blood pressure rise", "headache"] },
          { id: "sweat", text: "Sweating or flushing above the level of injury", match: ["sweating", "diaphoresis", "flushing", "sweat"] },
          { id: "malaise", text: "Malaise or feeling unwell", match: ["malaise", "unwell", "fatigue", "weakness"] },
          { id: "sob", text: "Shortness of breath", match: ["shortness of breath", "dyspnea", "dyspnoea", "breathless"] },
          { id: "nausea", text: "Nausea or vomiting", match: ["nausea", "vomiting"] },
          { id: "brady", text: "Relative bradycardia", match: ["bradycardia", "slow pulse", "slow heart rate", "low heart rate"] },
        ],
        explanation:
          "Cervical cord injury cuts sensory input from the heart to the brain, which predisposes to silent myocardial ischemia. During autonomic dysreflexia, a surge of sympathetic activity can itself cause ischemia, and the only signs may be a hypertensive surge, headache and sweating above the lesion. Malaise, dyspnea and nausea may be the only other clues. When the BP stays high after the bladder, bowel and skin have been checked, look for another trigger, including ACS.",
        keyFeature: { topic: "ischemic-heart-disease", n: 5 },
        source: "ad-ischemia",
      },
      {
        id: "q3",
        kind: "single",
        update: "High-sensitivity troponin I is 64 ng/L at 0 hours and 212 ng/L at 1 hour. The male 99th percentile is 34 ng/L. His BP settles to 150/88 mmHg with nitroglycerin paste.",
        prompt: "Which of the following tools best estimates his risk of in-hospital death from this NSTEMI?",
        options: [
          "CHA2DS2-VASc score",
          "CRUSADE score",
          "GRACE score",
          "HEART score",
          "sPESI score",
        ],
        correct: 2,
        explanation:
          "A rise from 64 to 212 ng/L confirms an NSTEMI, and the ESC advises an established score such as GRACE to estimate prognosis. GRACE uses age, heart rate, systolic BP, creatinine, Killip class, cardiac arrest, ST deviation and troponin, and a score above 140 is one of the ESC high risk criteria for early angiography. HEART was built to find low risk patients with undifferentiated chest pain, not to grade a confirmed infarct. CRUSADE estimates bleeding risk, CHA2DS2-VASc estimates stroke risk in atrial fibrillation, and sPESI is for pulmonary embolism.",
        keyFeature: { topic: "ischemic-heart-disease", n: 3 },
        source: "esc-acs-2023",
      },
    ],
    sources: [SCI_CVD, AD_ISCH, ESC_ACS23],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "chest-pain-09",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "A change noticed at lunch",
    stem:
      "A 54-year-old man with a moderate intellectual disability is brought to the emergency department at 14:10 by his mother, with whom he lives. He speaks in short phrases and understands simple questions. At lunch, about 3 hours ago, he stopped eating, rubbed the front of his chest and went to lie on his bed. His mother says this is unusual for him, and she brought him in after it happened a second time. He has type 2 diabetes, hypertension and dyslipidemia. He smokes. He takes metformin, ramipril, atorvastatin and risperidone. He is now sitting quietly. The first ECG shows sinus rhythm with no ST changes. The examination is otherwise normal.",
    vitals: { temperature: "36.9°C", pulse: "92/minute", resp: "18/minute", bp: "148/86 mmHg", o2sat: "97% on room air", weight: "98 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What would you ask his mother about these episodes?",
        required: 3,
        accept: [
          { id: "usual", text: "How he usually shows pain or distress", match: ["usual pain", "usually shows", "shows pain", "show pain", "express pain", "expresses pain", "pain behaviour", "pain behavior", "sign of pain", "signs of pain", "communicate pain", "communicates pain", "when he is in pain", "when hurt"] },
          { id: "activity", text: "Changes in activity, such as stopping on walks or refusing stairs", match: ["activity", "active", "walking", "walks", "stairs", "refused to walk", "refuses to walk", "refusing to walk", "tired", "fatigue"] },
          { id: "signs", text: "Sweating, pallor, breathlessness or vomiting that she saw", match: ["sweat", "sweating", "sweaty", "diaphoresis", "diaphoretic", "pale", "pallor", "grey", "gray", "short of breath", "shortness of breath", "breathless", "breathing", "vomit", "vomiting", "nausea"] },
          { id: "timing", text: "How long each episode lasted and what he was doing when it began", match: ["each episode", "episode last", "episodes last", "episode lasted", "lasted", "doing when", "when it started", "when it began", "time of onset"] },
          { id: "intake", text: "Changes in eating, sleep or mood", match: ["eating", "appetite", "ate", "change sleep", "sleep change", "sleeping more", "sleeping less", "mood", "irritable"] },
          { id: "meds", text: "Recent medication changes or missed doses", match: ["medication change", "medication changes", "new medication", "missed dose", "missed doses", "medication review", "dose change"] },
        ],
        explanation:
          "He may not describe his pain in words, so the history comes largely from people who know him. The HELP review for adults with intellectual and developmental disabilities advises a history taken with the patient and caregiver that covers how often and how long the behaviour occurs, where it is and his usual pain behaviour. It adds a medication review and questions about changes in sleep, appetite and physical and social activity. His mother can also report what she saw, such as sweating, pallor, breathlessness or vomiting, which help separate a cardiac cause from a benign one.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "help-idd-2018",
      },
      {
        id: "q2",
        kind: "short",
        update: "When you ask him whether his chest hurts, he shakes his head and looks away. A nurse charts that he denies chest pain.",
        prompt: "Why should his answer not lower your concern for ACS?",
        required: 2,
        accept: [
          { id: "comm", text: "He may not be able to express pain in the usual verbal ways", match: ["communicate", "verbal", "verbally", "nonverbal", "understand", "understanding", "comprehension", "describe pain", "cannot describe", "express pain", "express his pain"] },
          { id: "behav", text: "His change in behaviour is a more reliable sign than his answer", match: ["behaviour", "behavior", "rubbed", "rubbing", "stopped eating", "lay down", "lying down", "went to lie", "unusual for him", "from baseline"] },
          { id: "staff", text: "His mother, who knows him well, is a better guide than one answer", match: ["mother", "people who know", "know him", "knows him"] },
        ],
        unacceptable: [{ text: "He denies pain, so ACS is unlikely", match: ["acs unlikely", "acs is unlikely", "rules out acs", "no further testing", "discharge"] }],
        explanation:
          "The HELP review notes that some adults with intellectual and developmental disabilities have no verbal or conventional nonverbal way to express distress. Caregivers are left to infer it from vocalizations, body language and unusual behaviour. A head shake to a question about chest pain may reflect his understanding of the question rather than the absence of pain. His mother describes a clear change from his usual behaviour, with chest rubbing, stopping his meal and lying down, twice in one afternoon. That observed change carries more weight than one answer.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "help-idd-2018",
      },
      {
        id: "q3",
        kind: "short",
        update: "A colleague suggests that stopping his lunch and lying down are part of his usual behaviours that challenge, and that he could go home.",
        prompt: "Why is it unsafe to attribute this episode to his disability?",
        required: 2,
        accept: [
          { id: "illness", text: "A new behaviour can be the only sign of pain or a physical illness", match: ["physical illness", "physical health", "medical cause", "medical illness", "physical cause", "sign of pain", "expression of pain", "communicate pain", "communicating pain", "only sign", "unmet need"] },
          { id: "cad", text: "Coronary artery disease is one of the health conditions that can present this way", match: ["coronary", "cardiac cause", "cardiac ischemia", "heart disease", "heart attack", "acs", "ischemia", "ischaemia", "infarction", "angina"] },
          { id: "new", text: "His mother describes it as new and unusual for him", match: ["new behaviour", "new behavior", "unusual", "not usual", "not his usual", "different from his", "change from his", "from his baseline", "change from baseline"] },
          { id: "missed", text: "Attributing symptoms to the disability leads to missed diagnoses", match: ["overshadow", "overshadowing", "missed diagnosis", "missed diagnoses", "miss the diagnosis", "anchoring", "premature closure"] },
        ],
        explanation:
          "The HELP review describes behaviours that challenge as a common way for adults with intellectual and developmental disabilities to communicate unmet needs, including pain. It directs clinicians to look first for a physical health cause and lists coronary artery disease among the conditions that can present this way. It also warns that this complexity can lead to missed diagnoses. His mother, who knows him best, says the behaviour is new, and it came with chest rubbing. With diabetes, hypertension, dyslipidemia and smoking, ACS has to be excluded before this is called behavioural.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "help-idd-2018",
      },
      {
        id: "q4",
        kind: "single",
        update: "The laboratory applies the ESC 0 h/1 h hs-cTnT algorithm. Rule-out needs 0 h below 12 ng/L and a 1 h change below 3 ng/L. Rule-in needs 0 h of 52 ng/L or more, or a 1 h change of 5 ng/L or more. His results are 21 ng/L, then 24 ng/L.",
        prompt: "Which of the following is the most appropriate next step based on these results?",
        options: [
          "Admit for angiography within 24 hours",
          "Discharge home with stress testing",
          "Immediate angiography within 2 hours",
          "Single-sample rule-out, then discharge",
          "Third hs-cTnT at 3 hours",
        ],
        correct: 4,
        explanation:
          "His 0 h value of 21 ng/L is not below 12, so he cannot be ruled out. His 1 h change is 24 minus 21, or 3 ng/L, below the rule-in change of 5, and 21 is below the rule-in level of 52. He meets neither pathway and falls in the observe zone. The ESC recommends a third troponin at 3 hours, with or without echocardiography, and notes that observe zone patients have a mortality comparable to rule-in patients, so discharge now is unsafe. Early or immediate angiography is for rule-in or very high risk patients, which he is not yet. A single-sample rule-out needs a very low first value, which his 21 ng/L is not.",
        keyFeature: { topic: "ischemic-heart-disease", n: 3 },
        source: "esc-acs-2023",
      },
    ],
    sources: [HELP_IDD, ESC_ACS23],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "chest-pain-10",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Fleeting sharp chest pains",
    stem:
      "A 38-year-old woman presents at 10:30 with 2 days of intermittent sharp left chest pains. Each lasts a few seconds. They are not related to exertion and come on when she twists or reaches. She has no medical history, does not smoke, has no family history of heart disease and uses a copper IUD. Examination is normal. ECG is normal.",
    vitals: { temperature: "36.6°C", pulse: "72/minute", resp: "14/minute", bp: "118/74 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of her pain history make ACS less likely?",
        required: 3,
        accept: [
          { id: "sharp", text: "Sharp or stabbing quality", match: ["sharp", "stabbing"] },
          { id: "brief", text: "Lasts only seconds", match: ["second", "fleeting", "brief", "short duration"] },
          { id: "position", text: "Brought on by movement or position", match: ["movement", "position", "positional", "twist", "twisting", "reach", "reaching"] },
          { id: "notexert", text: "Not related to exertion", match: ["not exertional", "no exertion", "not related to exertion", "unrelated to exertion", "non exertional", "nonexertional", "not with exertion"] },
          { id: "dur", text: "Intermittent over 2 days without progression", match: ["intermittent", "2 day", "two day"] },
        ],
        explanation:
          "Sharp, momentary pain triggered by movement and unrelated to exertion lowers the likelihood of ACS. These features reduce but never eliminate risk, so they are combined with the ECG, troponin and risk factors.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following are components of the HEART score?",
        options: [
          "D-dimer",
          "ECG findings",
          "Estrogen use",
          "Heart rate",
          "Hemoglobin",
          "Hemoptysis",
          "Patient age",
          "Respiratory rate",
        ],
        select: 2,
        correct: [1, 6],
        explanation:
          "HEART stands for History, ECG, Age, Risk factors and Troponin. Each scores 0 to 2. Heart rate and estrogen are PERC and Wells items, not HEART items.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "heart-score",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her pain began 50 hours ago. A high-sensitivity troponin is below the limit of detection.",
        prompt: "Which of the following is her HEART score based on the available findings?",
        options: [
          "0",
          "1",
          "2",
          "3",
          "4",
        ],
        correct: 0,
        explanation:
          "Slightly suspicious history scores 0. Normal ECG scores 0. Age under 45 scores 0. No risk factors scores 0. A normal troponin scores 0. Her score is 0.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "heart-score",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What are the elements of a safe discharge plan for her?",
        required: 2,
        accept: [
          { id: "return", text: "Clear return instructions for new or worsening symptoms", match: ["return", "come back", "worsen", "worsening", "red flag"] },
          { id: "fu", text: "Follow-up with her family physician", match: ["family physician", "family doctor", "follow up", "followup", "gp", "primary care"] },
          { id: "notest", text: "No routine stress testing is needed", match: ["no stress test", "no further testing", "no routine", "stress testing not"] },
          { id: "analgesia", text: "Simple analgesia such as an NSAID or acetaminophen", match: ["nsaid", "ibuprofen", "naproxen", "acetaminophen", "analgesia"] },
          { id: "explain", text: "Explain the findings and the low risk", match: ["explain", "reassur", "reassurance", "education", "low risk"] },
        ],
        explanation:
          "A HEART score of 0 to 3 with negative troponins carries a very low 30-day risk of major events. She can go home without stress testing. Good discharge includes clear return advice and follow-up.",
        keyFeature: { topic: "ischemic-heart-disease", n: 8 },
        source: "heart-pathway",
      },
    ],
    sources: [AHA_CP, HEART_SCORE, HEART_PATHWAY],
    ...meta,
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "chest-pain-11",
    topic: "chest-pain",
    title: "Called anxious at triage",
    stem:
      "A 44-year-old woman presents at 13:10 with 50 minutes of central chest pressure that spreads to her left shoulder, with nausea. It began while she was sitting at her desk. The triage note reads 'young female, likely anxiety'. She has had rheumatoid arthritis for 12 years, treated with methotrexate and prednisone 7.5 mg daily. She had pre-eclampsia in both of her pregnancies and has taken ramipril for hypertension since the second. She stopped smoking 5 years ago. She is anxious and clammy. Her heart and lung examination is normal.",
    vitals: { temperature: "36.9°C", pulse: "94/minute", resp: "18/minute", bp: "152/94 mmHg", o2sat: "98% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of her history raise her pretest probability of ACS?",
        required: 3,
        accept: [
          { id: "ra", text: "Rheumatoid arthritis, a chronic inflammatory disease", match: ["rheumatoid", "inflammatory disease", "autoimmune", "inflammatory arthritis"] },
          { id: "pet", text: "Pre-eclampsia in past pregnancies", match: ["preeclampsia", "pre eclampsia", "eclampsia", "hypertensive disorder of pregnancy", "gestational hypertension", "pregnancy hypertension"] },
          { id: "htn", text: "Hypertension", match: ["hypertension", "high blood pressure", "htn"] },
          { id: "steroid", text: "Long-term prednisone", match: ["prednisone", "steroid", "corticosteroid", "glucocorticoid"] },
          { id: "smoke", text: "Past smoking", match: ["smoking", "smoker", "ex smoker", "former smoker"] },
          { id: "story", text: "Pressure spreading to the shoulder with nausea", match: ["shoulder", "radiation", "radiating", "nausea", "pressure"] },
        ],
        explanation:
          "The CCS lists chronic inflammatory diseases such as rheumatoid arthritis and a history of hypertensive disorder of pregnancy among the conditions that raise cardiovascular risk and warrant screening, whatever the patient's age. She also has hypertension. Pressure spreading to the shoulder with nausea is a cardiac-sounding story. Her age and sex should not lower concern when these factors are present.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-dyslipidemia-2021",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What single test should be completed within 10 minutes of her arrival?",
        required: 1,
        accept: [
          { id: "ecg", text: "12-lead ECG", match: ["ecg", "ekg", "electrocardiogram"] },
        ],
        explanation:
          "The ESC advises that an ECG be acquired and read within 10 minutes of first medical contact for anyone with possible ACS. It sorts patients into ST elevation and non-ST elevation pathways and cannot wait for triage to finish or for a label of anxiety. A troponin is drawn at the same time but takes longer to result.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "short",
        update: "Her ECG shows 1 mm horizontal ST depression in V4 to V6 and no ST elevation. She still has pressure, rated 6 out of 10.",
        prompt: "What treatments, with doses, would you give now?",
        required: 2,
        accept: [
          ASA_ITEM,
          { id: "ntg", text: "Nitroglycerin 0.4 mg SL, repeated if systolic BP stays above 90 mmHg", match: ["nitroglycerin", "nitro", "ntg", "nitrate", "glyceryl trinitrate"] },
          { id: "anticoag", text: "Parenteral anticoagulant such as fondaparinux 2.5 mg SC or enoxaparin 1 mg/kg SC", match: ["fondaparinux", "enoxaparin", "heparin", "ufh", "lmwh", "anticoagulant", "anticoagulation"] },
          { id: "opioid", text: "IV opioid if pain persists", match: ["fentanyl", "morphine", "hydromorphone", "opioid"] },
        ],
        unacceptable: [
          { text: "Fibrinolysis", match: ["tenecteplase", "alteplase", "thrombolysis", "fibrinolysis", "tnk"], dangerous: true },
        ],
        explanation:
          "Ischemic ST depression with ongoing pressure is a working diagnosis of NSTE-ACS. The ESC gives the first dose of ASA as 162 to 325 mg chewed. Sublingual nitroglycerin may relieve the pressure while BP allows, but its effect is not a diagnostic test. Parenteral anticoagulation is recommended for all patients with ACS at diagnosis, and fondaparinux 2.5 mg SC or enoxaparin 1 mg/kg SC are options. Fibrinolysis has no role without ST elevation.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "While results are pending, what other cardiovascular risk factors would you ask her about?",
        required: 2,
        accept: [
          { id: "fh", text: "Family history of premature cardiovascular disease", match: ["family history", "father", "mother", "sibling", "premature"] },
          { id: "dm", text: "Diabetes, including gestational diabetes", match: ["diabetes", "gestational diabetes", "glucose", "a1c"] },
          { id: "lipids", text: "Dyslipidemia", match: ["cholesterol", "lipid", "dyslipidemia", "hyperlipidemia"] },
          { id: "ckd", text: "Chronic kidney disease", match: ["kidney", "renal", "ckd"] },
          { id: "obesity", text: "Obesity or inactivity", match: ["obesity", "weight", "bmi", "inactivity", "exercise"] },
          { id: "hiv", text: "HIV infection", match: ["hiv"] },
          { id: "meno", text: "Early menopause or preterm delivery", match: ["menopause", "preterm", "premature delivery"] },
          { id: "stim", text: "Cocaine or other stimulant use", match: ["cocaine", "stimulant", "amphetamine", "drug use"] },
        ],
        explanation:
          "Besides the inflammatory disease and pregnancy history she already has, the CCS lists a family history of premature cardiovascular disease, diabetes, chronic kidney disease, obesity and HIV among the conditions that raise risk. A premature family history means a first-degree male relative under 55 or female relative under 65. Each positive answer raises her pretest probability further and shapes prevention after this visit.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ccs-dyslipidemia-2021",
      },
    ],
    sources: [CCS_LIPID21, ESC_ACS23],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "chest-pain-12",
    topic: "chest-pain",
    title: "Chest pain after vomiting",
    stem:
      "A 48-year-old man presents at 01:20 with severe retrosternal and upper abdominal pain. It began after repeated forceful vomiting following a night of heavy drinking. He is short of breath. You feel crepitus at the base of his neck. He has epigastric tenderness. ECG shows sinus tachycardia without ST changes.",
    vitals: { temperature: "38.2°C", pulse: "124/minute", resp: "28/minute", bp: "102/64 mmHg", o2sat: "93% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [
          { id: "boerhaave", text: "Spontaneous esophageal rupture (Boerhaave syndrome)", match: ["boerhaave", "esophageal rupture", "oesophageal rupture", "esophageal perforation", "oesophageal perforation", "ruptured esophagus", "perforated esophagus"] },
        ],
        unacceptable: [{ text: "Mallory-Weiss tear", match: ["mallory", "weiss"] }],
        explanation:
          "Vomiting, chest pain and subcutaneous emphysema form the classic triad of esophageal rupture. A Mallory-Weiss tear is a mucosal tear that bleeds but does not leak air or cause sepsis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "wses-esophagus",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What findings in the history or examination support this diagnosis?",
        required: 2,
        accept: [
          { id: "vomit", text: "Pain after forceful vomiting", match: ["vomit", "vomiting", "retching", "emesis"] },
          { id: "crepitus", text: "Subcutaneous emphysema at the neck", match: ["crepitus", "subcutaneous emphysema", "surgical emphysema", "subcutaneous air"] },
          { id: "alcohol", text: "Heavy alcohol intake", match: ["alcohol", "drinking", "etoh"] },
          { id: "sepsis", text: "Fever and tachycardia suggesting mediastinitis", match: ["fever", "tachycardia", "sepsis", "hypotension", "febrile"] },
          { id: "dyspnea", text: "Shortness of breath and hypoxemia", match: ["short of breath", "shortness of breath", "dyspnea", "hypoxemia", "hypoxia"] },
        ],
        explanation:
          "The timing after vomiting and palpable air in the neck are the key clues. Early fever and tachycardia reflect mediastinal contamination. A detailed history of the pain's onset separates this from ACS or pancreatitis.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "wses-esophagus",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging to confirm the diagnosis?",
        options: [
          "Barium swallow under fluoroscopy",
          "Bedside abdominal ultrasound",
          "CT chest with oral water-soluble contrast",
          "Flexible upper endoscopy under deep sedation",
          "Upright chest X-ray alone",
        ],
        correct: 2,
        explanation:
          "CT with oral water-soluble contrast shows the leak, mediastinal air and collections. Barium causes mediastinitis if it leaks. Chest X-ray may show pneumomediastinum or effusion but can be normal early.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "wses-esophagus",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT shows a distal esophageal leak with pneumomediastinum and a left pleural effusion.",
        prompt: "What are the immediate management steps?",
        required: 3,
        accept: [
          { id: "npo", text: "NPO", match: ["npo", "nothing by mouth", "nil by mouth"] },
          { id: "abx", text: "Broad-spectrum IV antibiotics such as piperacillin-tazobactam", match: ["antibiotic", "piperacillin", "tazobactam", "pip tazo", "meropenem", "broad spectrum"] },
          { id: "fluids", text: "IV fluid resuscitation", match: ["fluid", "crystalloid", "resuscitation", "ringer", "saline"] },
          { id: "surgery", text: "Urgent thoracic or general surgery consultation", match: ["thoracic surgery", "surgery", "surgeon", "surgical"] },
          { id: "ppi", text: "IV proton pump inhibitor", match: ["ppi", "pantoprazole", "proton pump"] },
          { id: "antifungal", text: "Antifungal coverage", match: ["antifungal", "fluconazole", "caspofungin", "micafungin"] },
          { id: "drain", text: "Drain the pleural collection", match: ["chest tube", "chest drain", "tube thoracostomy", "drainage", "pleural collection", "pleural drain"] },
          { id: "analgesia", text: "IV analgesia", match: ["analgesia", "opioid", "fentanyl", "morphine", "hydromorphone"] },
        ],
        explanation:
          "Esophageal rupture is lethal without early source control. Stop oral intake, resuscitate, give broad-spectrum antibiotics and antifungal cover, and involve surgery urgently. Pleural contamination needs drainage.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "wses-esophagus",
      },
    ],
    sources: [WSES],
    ...meta,
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "chest-pain-13",
    topic: "chest-pain",
    title: "Sharp pain after missed treatments",
    stem:
      "A 52-year-old man presents at 09:40 with 3 days of sharp central chest pain that is worse when he lies flat or breathes in. He has end-stage kidney disease from diabetes and has had hemodialysis three times a week for 4 years. He missed his last three sessions because his car broke down, and his last dialysis was 8 days ago. He feels nauseated and itchy. A scratchy sound is heard at the left sternal border. His jugular venous pressure is 6 cm above the sternal angle and he has mild ankle edema. His lungs are clear.",
    vitals: { temperature: "37.6°C", pulse: "104/minute", resp: "20/minute", bp: "146/84 mmHg", o2sat: "96% on room air", weight: "81 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What further history would you take about his kidney disease and his symptoms?",
        required: 3,
        accept: [
          { id: "urine", text: "Residual urine output", match: ["urine output", "residual", "urinate", "anuric", "anuria", "still pass urine"] },
          { id: "weight", text: "Weight gain compared with his dry weight", match: ["dry weight", "weight gain", "interdialytic", "fluid gain"] },
          { id: "sob", text: "Breathlessness or orthopnea", match: ["orthopnea", "breathless", "shortness of breath", "dyspnea", "pnd"] },
          { id: "presyncope", text: "Lightheadedness, syncope or low BP on recent runs", match: ["lightheaded", "syncope", "faint", "presyncope", "low blood pressure", "intradialytic", "hypotension"] },
          { id: "uremia", text: "Uremic symptoms such as confusion, vomiting or bleeding", match: ["confusion", "drowsy", "vomiting", "bleeding", "uremic", "uraemic"] },
          { id: "prior", text: "Prior pericarditis or effusion", match: ["prior pericarditis", "previous pericarditis", "previous effusion", "prior effusion"] },
          { id: "access", text: "Problems with his dialysis access", match: ["fistula", "access", "dialysis catheter", "thrill"] },
          { id: "anticoag", text: "Anticoagulant or antiplatelet use", match: ["anticoagulant", "warfarin", "apixaban", "blood thinner", "antiplatelet"] },
          { id: "exert", text: "Exertional features that suggest ACS", match: ["exertion", "exertional", "radiation", "diaphoresis"] },
        ],
        explanation:
          "Missed sessions point to pericarditis from inadequate dialysis and to volume overload, so the dialysis history is central. Residual urine output and weight gain since his last run show how overloaded he is. Lightheadedness or low BP on recent runs can signal a significant effusion. Uremic symptoms support urgent dialysis, and bleeding risk matters because uremic effusions are often bloody. Exertional features keep ACS in the differential in a man with diabetes.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-pericardial-2015",
      },
      {
        id: "q2",
        kind: "short",
        update: "The ECG shows sinus tachycardia with low QRS voltage and no ST elevation. Potassium is 5.4 mmol/L, urea 46 mmol/L and creatinine 1240 umol/L. POCUS shows a 1.6 cm circumferential pericardial effusion without chamber collapse. The inferior vena cava is dilated.",
        prompt: "What life-threatening complications must you treat or watch for now?",
        required: 2,
        accept: [
          { id: "tamp", text: "Cardiac tamponade", match: ["tamponade"] },
          { id: "k", text: "Rising potassium with arrhythmia or arrest", match: ["hyperkalemia", "hyperkalaemia", "potassium", "arrhythmia", "cardiac arrest"] },
          { id: "overload", text: "Pulmonary edema from volume overload", match: ["pulmonary edema", "volume overload", "fluid overload", "overload"] },
          { id: "bleed", text: "Hemorrhagic effusion", match: ["hemopericardium", "hemorrhagic", "bloody effusion", "bleeding"] },
          { id: "enceph", text: "Uremic encephalopathy or seizures", match: ["encephalopathy", "seizure"] },
        ],
        explanation:
          "A 1.6 cm effusion in a tachycardic man can progress to tamponade, and the ESC notes that uremic effusions are often bloody. Eight days without dialysis also risks hyperkalemia with arrhythmia and pulmonary edema from volume overload. The absence of diffuse ST elevation fits pericarditis in renal failure, because most patients have no ECG changes, so it should not argue against the diagnosis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pericardial-2015",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are most appropriate for his pericardial disease now?",
        select: 2,
        options: [
          "Admission with repeat echocardiography",
          "Colchicine 0.5 mg PO twice daily",
          "Discharge with dialysis tomorrow",
          "Hemodialysis today without systemic heparin",
          "Ibuprofen 600 mg PO three times daily",
          "Pericardiocentesis now",
          "Prednisone 50 mg PO daily",
          "Sodium chloride 0.9% 1 L IV bolus",
        ],
        correct: [0, 3],
        explanation:
          "Pericarditis in a patient whose dialysis has lapsed calls for dialysis, and the ESC advises intensified dialysis when pericarditis develops. The ESC notes that effusions in uremic patients are often bloody and that anticoagulation should be carefully considered or avoided, so the run should use no systemic heparin. He needs admission with repeat echocardiography to watch the effusion. Colchicine is contraindicated with severe renal impairment. NSAIDs and corticosteroids are reserved for when intensive dialysis fails. Drainage is for tamponade or failure of dialysis. Discharge leaves an effusion unmonitored 8 days after his last dialysis, and a saline bolus would worsen his overload.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pericardial-2015",
      },
      {
        id: "q4",
        kind: "short",
        update: "During dialysis his BP falls to 84/60 mmHg and his pulse rises to 128/minute.",
        prompt: "What life-threatening causes of his hypotension must you consider?",
        required: 3,
        accept: [
          { id: "tamp", text: "Cardiac tamponade", match: ["tamponade"] },
          { id: "uf", text: "Hypovolemia from fluid removal", match: ["hypovolemia", "ultrafiltration", "fluid removal", "too much fluid", "volume depletion", "overdialysis", "over dialysis"] },
          { id: "arrhythmia", text: "Arrhythmia from potassium shifts", match: ["arrhythmia", "potassium", "hypokalemia", "hyperkalemia", "atrial fibrillation"] },
          { id: "bleed", text: "Bleeding, including into the pericardium", match: ["hemorrhage", "haemorrhage", "bleeding", "hemopericardium", "haemopericardium"] },
          { id: "acs", text: "ACS or myocardial dysfunction", match: ["acs", "myocardial infarction", "ischemia", "myocarditis", "cardiogenic"] },
          { id: "sepsis", text: "Sepsis, including from the dialysis access", match: ["sepsis", "septic", "infection", "bacteremia"] },
          { id: "reaction", text: "Reaction to the dialyzer", match: ["anaphylaxis", "dialyzer reaction", "allergic reaction"] },
        ],
        explanation:
          "With a known effusion, a falling BP and rising pulse during fluid removal make tamponade the first concern, because a lower filling pressure lets the effusion compress the heart. Echocardiography is the most useful test to show chamber collapse, and confirmed tamponade needs drainage. Removing fluid too fast causes hypotension on its own. Uremic effusions are often bloody, so bleeding into the pericardium can enlarge the effusion quickly. ACS, arrhythmia from potassium shifts and sepsis are the other dangerous causes.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pericardial-2015",
      },
    ],
    sources: [ESC_PERI15],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "chest-pain-14",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Sudden pain at the breakfast table",
    stem:
      "A 71-year-old woman presents to the emergency department at 09:30 with 1 hour of sudden, severe central chest pain and sweating that began while she sat at breakfast. She has atrial fibrillation and takes warfarin, but she missed several doses last week while visiting her daughter. A coronary angiogram 2 years ago, done for chest discomfort, showed normal coronary arteries. She has no other medical history and does not smoke. The ECG shows atrial fibrillation at 104/minute with 2.5 mm ST elevation in II, III and aVF and ST depression in I and aVL. The catheterization laboratory has been activated.",
    vitals: { temperature: "36.8°C", pulse: "104/minute irregular", resp: "20/minute", bp: "132/80 mmHg", o2sat: "96% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely cause of her infarct?",
        required: 1,
        accept: [
          { id: "ce", text: "Coronary artery embolism from a left atrial thrombus", match: ["embolism", "embolic", "embolus", "emboli", "cardioembolic", "cardioembolism", "thromboembolism", "thromboembolic", "atrial thrombus", "clot from the heart", "clot from her heart"] },
        ],
        unacceptable: [
          { text: "Rupture of an atherosclerotic plaque", match: ["plaque rupture", "ruptured plaque", "atherosclerotic plaque", "atherosclerosis"] },
        ],
        explanation:
          "Sudden severe pain at rest, atrial fibrillation with missed warfarin doses and a normal angiogram 2 years ago point to a thrombus carried from the left atrium into a coronary artery. In a series of 1776 consecutive patients with acute MI, coronary embolism caused 2.9%, and atrial fibrillation was the source in 73% of them. Plaque rupture needs atherosclerotic plaque, which her recent angiogram did not show.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "coronary-embolism-2015",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes the significance of her normal coronary angiogram 2 years ago?",
        options: [
          "It fits an embolus into a normal artery",
          "It makes an acute infarct unlikely",
          "It points to a noncardiac cause of pain",
          "It rules out a coronary cause of her pain",
          "It supports CT angiography before the lab",
        ],
        correct: 0,
        explanation:
          "An embolus blocks a coronary artery that may have no atherosclerosis at all. The diagnostic criteria for coronary embolism include thrombus in a coronary artery without atherosclerotic plaque and less than 25% stenosis in the other arteries, so a normal angiogram 2 years ago supports an embolic cause rather than arguing against one. It cannot rule out an infarct happening today, and her ECG shows an inferior infarct, so her pain is cardiac. The laboratory is already activated, and angiography there can both show an embolus and remove it, since thrombus aspiration was the preferred treatment in the review. CT first would only delay that.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "embolism-review-2025",
      },
      {
        id: "q3",
        kind: "short",
        update: "Her daughter says a clot is impossible because her mother takes warfarin. Her INR is 1.4.",
        prompt: "Why does her warfarin not make an embolic cause unlikely?",
        required: 1,
        accept: [
          { id: "inr", text: "Her INR of 1.4 shows inadequate anticoagulation after missed doses", match: ["subtherapeutic", "sub therapeutic", "below therapeutic", "not therapeutic", "below target", "below range", "low inr", "inr is low", "inr low", "inadequate", "missed doses", "missed dose", "too low", "inr 1.4"] },
          { id: "partial", text: "Warfarin lowers the risk of embolism but does not remove it", match: ["lowers the risk", "reduces the risk", "reduce the risk", "does not eliminate", "not eliminate", "does not remove", "not remove", "not zero", "does not prevent all", "not 100"] },
        ],
        explanation:
          "In the largest series of MI from coronary embolism, only 39% of patients were taking a vitamin K antagonist, and among them the median INR was 1.42, with none above 1.80. Emboli formed while anticoagulation was inadequate, as hers is after several missed doses. Taking warfarin in name does not protect her when her INR is 1.4.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "coronary-embolism-2015",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What other conditions would raise the likelihood of coronary embolism in a patient with chest pain?",
        required: 3,
        accept: [
          { id: "valve", text: "Prosthetic heart valve", match: ["prosthetic", "mechanical valve", "valve replacement", "artificial valve", "replaced valve"] },
          { id: "rheum", text: "Rheumatic mitral valve disease", match: ["rheumatic", "mitral stenosis", "mitral valve disease", "valvular disease", "valve disease"] },
          { id: "pfo", text: "Patent foramen ovale or other shunt with venous thrombosis", match: ["foramen", "pfo", "paradoxical", "atrial septal", "asd", "shunt"] },
          { id: "ie", text: "Infective endocarditis", match: ["endocarditis", "vegetation"] },
          { id: "cm", text: "Cardiomyopathy or left ventricular thrombus", match: ["cardiomyopathy", "lv thrombus", "ventricular thrombus", "left ventricular thrombus", "low ejection", "reduced ejection"] },
          { id: "hyper", text: "Hypercoagulable state such as antiphospholipid syndrome", match: ["hypercoagulable", "hypercoagulability", "thrombophilia", "antiphospholipid", "protein c", "protein s"] },
          { id: "tumour", text: "Cardiac tumour such as myxoma", match: ["myxoma", "tumour", "tumor"] },
        ],
        explanation:
          "A review of MI from coronary embolism groups its causes into thrombotic conditions, such as atrial fibrillation, rheumatic valve disease, patent foramen ovale and hypercoagulable states, and nonthrombotic ones such as infective endocarditis and tumours. Prosthetic valves and cardiomyopathy appeared among its patients, and the Japanese diagnostic criteria list these potential sources as a minor criterion. Asking about them in a patient with sudden chest pain and an occluded artery raises the likelihood of an embolic cause and changes the search for its source.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "embolism-review-2025",
      },
    ],
    sources: [SHIBATA_CE, CE_REVIEW],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "chest-pain-15",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Crushing pain with failing kidneys",
    stem:
      "A 72-year-old woman is brought in by ambulance at 08:10 with 60 minutes of crushing central chest pain and sweating. The hospital has an on-site catheterization laboratory. She has type 2 diabetes and stage 4 chronic kidney disease, with an eGFR of 19 mL/min/1.73 m2 last month. An arteriovenous fistula was created in her left arm 2 months ago in preparation for dialysis. She takes insulin glargine, amlodipine and furosemide. Paramedics gave ASA 160 mg chewed. Her lungs are clear and she has no leg edema. The ECG at 08:13 shows 2.5 mm ST elevation in II, III and aVF with ST depression in I and aVL. V4R shows no ST elevation.",
    vitals: { temperature: "36.6°C", pulse: "86/minute", resp: "18/minute", bp: "134/78 mmHg", o2sat: "96% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features raise her risk of complications from reperfusion treatment?",
        required: 3,
        accept: [
          { id: "ckd", text: "Stage 4 CKD, with risk of contrast kidney injury and bleeding", match: ["ckd", "kidney", "renal", "egfr", "contrast nephropathy", "contrast induced", "aki"] },
          { id: "dm", text: "Diabetes", match: ["diabetes", "diabetic"] },
          { id: "age", text: "Age over 70", match: ["age", "older", "elderly"] },
          { id: "sex", text: "Female sex", match: ["female", "woman", "sex"] },
          { id: "fistula", text: "A fistula arm that must be protected when choosing access", match: ["fistula", "access site", "radial", "vascular access"] },
        ],
        explanation:
          "Moderate to severe CKD carries a higher risk of in-hospital complications, including serious bleeding, and an eGFR of 19 mL/min/1.73 m2 also puts her at risk of contrast-induced kidney injury. Diabetes and age over 70 add to that risk. Her left arm fistula must be protected when the access site is chosen. These risks shape how reperfusion is done rather than whether it is done.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following reperfusion strategies is most appropriate for this patient?",
        options: [
          "Fibrinolysis with tenecteplase, then angiography",
          "Hydrate for 12 hours, then angiography",
          "Medical therapy, angiography after dialysis starts",
          "Primary PCI after urgent dialysis",
          "Primary PCI now, limiting contrast volume",
        ],
        correct: 4,
        explanation:
          "For a patient who presents to a PCI centre, the CCS sets a goal of 90 minutes or less from first medical contact to device, and her kidney disease does not change that goal. Primary PCI with a small contrast volume reperfuses the artery while limiting kidney harm. Fibrinolysis is the fallback only when timely PCI is not possible. Twelve hours of hydration, dialysis first or medical therapy until dialysis starts all leave the artery occluded while myocardium is lost.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi-2019",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are appropriate choices for her primary PCI?",
        select: 3,
        options: [
          "Delay PCI for 12 hours of prehydration",
          "Enoxaparin 1 mg/kg SC twice daily",
          "Fondaparinux 2.5 mg SC as sole anticoagulant",
          "Half-dose ticagrelor loading",
          "IV isotonic saline during and after angiography",
          "Low- or iso-osmolar contrast at lowest volume",
          "Unfractionated heparin 70 units/kg IV",
        ],
        correct: [4, 5, 6],
        explanation:
          "The ESC recommends low- or iso-osmolar contrast at the lowest possible volume, and advises considering hydration during and after angiography when the eGFR is below 30 mL/min/1.73 m2. Unfractionated heparin 70 to 100 units/kg IV is the standard anticoagulant for primary PCI, which is 4480 units at 70 units/kg for 64 kg. Fondaparinux is avoided when creatinine clearance is below 20 mL/min and needs a heparin bolus during PCI. Subcutaneous enoxaparin twice daily is a medical regimen that must be cut to once daily below a clearance of 30 mL/min. Ticagrelor needs no dose change in CKD. Delaying PCI for prehydration loses myocardium.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "short",
        update: "The on-call nephrologist phones and asks that angiography wait until her kidneys can be protected.",
        prompt: "What points would you make in favour of proceeding now?",
        required: 2,
        accept: [
          { id: "time", text: "Delay loses myocardium and raises the risk of death", match: ["myocardium", "mortality", "death", "time is muscle", "infarct size", "heart muscle"] },
          { id: "same", text: "Guidelines advise the same reperfusion strategy in CKD", match: ["same strategy", "same treatment", "same as normal", "guideline"] },
          { id: "outcome", text: "Early revascularization gives better outcomes in CKD", match: ["better outcome", "early revascularization", "improved survival", "benefit"] },
          { id: "reduce", text: "Kidney risk is lowered by limiting contrast and hydrating", match: ["limit contrast", "limiting contrast", "hydrating", "less contrast", "iso osmolar", "hydration", "hydrate", "contrast volume", "minimize contrast", "minimise contrast"] },
          { id: "dialysis", text: "Her fistula means dialysis can start promptly if needed", match: ["dialysis", "fistula"] },
        ],
        explanation:
          "An occluded artery loses myocardium with every minute of delay, and her kidney risk does not change the value of reperfusion. The ESC recommends the same diagnostic and therapeutic strategies in CKD as with normal kidney function, and observational data show better outcomes with early revascularization than with medical therapy alone. Limiting contrast volume and giving IV hydration lower the kidney risk. Her fistula means dialysis can start promptly if her kidney function falls.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "esc-acs-2023",
      },
    ],
    sources: [ESC_ACS23, CCS_STEMI19],
    ...meta,
    version: 2,
    reviewed: false,
  },

];
