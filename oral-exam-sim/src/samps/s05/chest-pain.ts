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
const ASA_HYPER: Source = {
  id: "aspirin-hypersensitivity",
  citation: "Grimaldi S, Migliorini P, Puxeddu I, Rossini R, De Caterina R. Aspirin hypersensitivity: a practical guide for cardiologists. Eur Heart J. 2024.",
  url: "https://doi.org/10.1093/eurheartj/ehae128",
};
const KHAN_OCC: Source = {
  id: "occluded-culprit",
  citation: "Khan AR and colleagues. Impact of total occlusion of culprit artery in acute non-ST elevation myocardial infarction: a systematic review and meta-analysis. Eur Heart J. 2017.",
  url: "https://academic.oup.com/eurheartj/article/38/41/3082/4075374",
};
const ESC_PERI15: Source = {
  id: "esc-pericardial-2015",
  citation: "Adler Y and colleagues. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.",
  url: "https://doi.org/10.1093/eurheartj/ehv318",
};
const CANO_LEAD: Source = {
  id: "lead-perforation",
  citation: "Cano O and colleagues. Incidence and predictors of clinically relevant cardiac perforation associated with systematic implantation of active-fixation pacing and defibrillation leads. Europace. 2017.",
  url: "https://academic.oup.com/europace/article/19/1/96/2952239",
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
    title: "Chest pressure and an allergy band",
    stem:
      "A 63-year-old man walks into the emergency department at 06:50 with 35 minutes of heavy central chest pressure spreading to his left arm, with sweating. The hospital has a cardiac catheterization laboratory on site. He has hypertension and dyslipidemia and takes ramipril and rosuvastatin. His wristband lists an ASA allergy. In 2019 he took ASA for a headache and within an hour developed hives with swelling of his lips and eyelids, treated in an emergency department. He had no wheeze and no low blood pressure at that time. The triage nurse is starting the chest pain order set, which includes chewed ASA.",
    vitals: { temperature: "36.8°C", pulse: "96/minute", resp: "20/minute", bp: "158/94 mmHg", o2sat: "96% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What instructions would you give the triage nurse for the next 10 minutes?",
        required: 2,
        accept: [
          { id: "noasa", text: "Do not give ASA, and flag the allergy on the order set", match: ["no asa", "hold asa", "withhold asa", "avoid asa", "not give asa", "cancel asa", "remove asa", "no aspirin", "hold aspirin", "withhold aspirin", "avoid aspirin", "not give aspirin"] },
          { id: "ecg", text: "12-lead ECG read within 10 minutes", match: ["ecg", "ekg", "electrocardiogram"] },
          { id: "monitor", text: "Cardiac monitor with defibrillator pads", match: ["monitor", "defibrillator", "pads", "telemetry"] },
          { id: "iv", text: "IV access with troponin and bloodwork", match: ["iv access", "intravenous access", "iv line", "troponin", "bloodwork", "blood work"] },
        ],
        unacceptable: [
          { text: "Chewed ASA by the order set", match: ["chew asa", "chewed asa", "give asa", "asa 81", "asa 160", "asa 162", "asa 325", "chewed aspirin", "give aspirin", "aspirin 81", "aspirin 160", "aspirin 325", "rectal asa"], dangerous: true },
        ],
        explanation:
          "Hives with lip and eyelid swelling within an hour of ASA is an immediate hypersensitivity reaction, so the order set dose must be stopped before it is given. The rest of the early bundle still applies. The ESC advises an ECG acquired and read within 10 minutes of first medical contact, and it decides his pathway. A monitor with pads and IV access with a troponin go on at the same time.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "short",
        update: "The ECG at 06:56 shows 3 mm ST elevation in V1 to V5, I and aVL, with ST depression in III and aVF.",
        prompt: "What is your interpretation of this ECG, including the likely culprit artery?",
        required: 2,
        accept: [
          { id: "stemi", text: "Anterior or anterolateral STEMI", match: ["stemi", "anterior st elevation", "anterior mi", "anterolateral mi", "anterior myocardial infarction", "anterior infarct", "st elevation mi", "st elevation myocardial infarction"] },
          { id: "lad", text: "Occlusion of the proximal left anterior descending artery", match: ["lad", "left anterior descending", "proximal lad"] },
          { id: "recip", text: "Reciprocal inferior ST depression", match: ["reciprocal", "reciprocity"] },
        ],
        explanation:
          "ST elevation of 3 mm across V1 to V5 with I and aVL meets STEMI criteria in contiguous anterior and lateral leads. The inferior ST depression is reciprocal and supports a true infarct rather than a mimic. Elevation from V1 through the high lateral leads points to an occlusion of the proximal left anterior descending artery, which supplies a large territory. He needs reperfusion without delay.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "menu",
        update: "The catheterization laboratory team will be ready in 30 minutes. He has received no antiplatelet drug.",
        prompt: "Which of the following should he receive before he leaves for the catheterization laboratory?",
        select: 2,
        options: [
          "ASA 81 mg chewed",
          "Clopidogrel 300 mg PO",
          "Enoxaparin 1 mg/kg SC",
          "Prasugrel 10 mg PO",
          "Tenecteplase 45 mg IV",
          "Ticagrelor 180 mg PO",
          "Unfractionated heparin 70 units/kg IV",
        ],
        correct: [5, 6],
        explanation:
          "Without ASA he still needs a potent P2Y12 inhibitor, and the ESC recommends ticagrelor 180 mg as the loading dose. Unfractionated heparin 70 to 100 units/kg IV is the standard anticoagulant for primary PCI, which is 6160 units at 70 units/kg for his 88 kg. A lower ASA dose can still trigger his reaction. Clopidogrel is for when prasugrel or ticagrelor cannot be used, and 300 mg is a low load for primary PCI. Prasugrel 10 mg is the maintenance dose, not the 60 mg load. Subcutaneous enoxaparin 1 mg/kg is a regimen for non-ST elevation ACS. Tenecteplase is not needed when PCI is this close.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "short",
        update: "The interventional cardiologist asks whether the procedure should wait until an allergist can give him ASA by a desensitization protocol.",
        prompt: "What is your plan for his reperfusion and for his ASA allergy?",
        required: 2,
        accept: [
          { id: "pcinow", text: "Primary PCI now, without waiting for desensitization", match: ["pci now", "primary pci", "immediate pci", "proceed pci", "cath lab now", "no delay", "not delay", "without delay", "dont delay"] },
          { id: "after", text: "ASA desensitization started after the PCI, with allergy input", match: ["desensitization after", "desensitisation after", "desensitize after", "desensitization post", "desensitization following", "allergy consult", "allergist", "immunology"] },
          { id: "bridge", text: "Glycoprotein IIb/IIIa inhibitor or cangrelor during PCI if needed", match: ["cangrelor", "glycoprotein", "iib iiia", "eptifibatide", "tirofiban", "abciximab"] },
          { id: "tica", text: "Continue ticagrelor", match: ["continue ticagrelor", "ticagrelor 90", "ticagrelor maintenance"] },
        ],
        unacceptable: [
          { text: "Delay PCI until desensitization is complete", match: ["delay pci", "wait for desensitization", "desensitization first", "desensitize first", "desensitization before"], dangerous: true },
          { text: "Fibrinolysis instead of PCI", match: ["tenecteplase", "alteplase", "fibrinolysis", "thrombolysis", "tnk"] },
        ],
        explanation:
          "Reperfusion should not wait. For emergency PCI in a patient with aspirin hypersensitivity, a practical guide from cardiologists and allergists advises proceeding with a P2Y12 inhibitor, a glycoprotein IIb/IIIa inhibitor if needed, and starting ASA desensitization right after the procedure. His reaction was hives with angioedema, a type in which desensitization is possible. Desensitization is not advised after severe anaphylaxis. A successful desensitization with allergy input then allows dual antiplatelet therapy for his stent.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "aspirin-hypersensitivity",
      },
    ],
    sources: [ESC_ACS23, ASA_HYPER],
    ...meta,
    version: 2,
    reviewed: false,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "chest-pain-03",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure that will not settle",
    stem:
      "A 57-year-old man presents at 15:05 with 2 hours of constant central chest pressure and nausea that began while he was mowing the lawn. Paramedics gave ASA 160 mg chewed and two doses of nitroglycerin spray, which did not change the pain. He has type 2 diabetes and hypertension and smokes. He is pale and sweaty. His lungs are clear, his heart sounds are normal and his radial pulses are equal. The ECG shows sinus rhythm with 0.5 mm ST depression in V5 and V6 and no ST elevation. Posterior leads V7 to V9 show no ST elevation.",
    vitals: { temperature: "36.7°C", pulse: "88/minute", resp: "18/minute", bp: "146/86 mmHg", o2sat: "97% on room air", weight: "94 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What bedside test would you do now to look for a life-threatening cause of his pain?",
        required: 1,
        accept: [
          { id: "pocus", text: "Point-of-care ultrasound of the heart", match: ["pocus", "ultrasound", "echo", "echocardiogram", "echocardiography"] },
          { id: "serial", text: "Repeat ECG every 15 to 30 minutes while pain continues", match: ["repeat ecg", "serial ecg", "ecg every", "repeat ekg", "serial ekg"] },
        ],
        explanation:
          "Ongoing pain with a nondiagnostic ECG needs a quick look for a regional wall motion abnormality, a pericardial effusion, a strained right ventricle or a dilated aortic root. Point-of-care ultrasound answers these at the bedside in minutes. Repeating the ECG while the pain continues is also right, because the ESC advises repeating it when the first tracing is not diagnostic.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "short",
        update: "POCUS shows new hypokinesis of the inferolateral wall. There is no pericardial effusion, the right ventricle is normal in size and the aortic root measures 3.3 cm. His pain is 8 out of 10.",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [
          { id: "omi", text: "Acute MI from an occluded coronary artery, likely circumflex or right coronary", match: ["occlusion", "occluded", "omi", "nstemi", "myocardial infarction", "acute mi", "acs", "acute coronary syndrome", "circumflex", "lcx", "ischemia"] },
        ],
        explanation:
          "Ongoing ischemic pain with a new regional wall motion abnormality means active myocardial ischemia, most likely from an occluded artery. In a meta-analysis of 40 777 patients with NSTEMI, 25.5% had a totally occluded culprit artery, most often the right coronary or circumflex. The normal right ventricle, absent effusion and normal aortic root make pulmonary embolism, tamponade and a proximal dissection less likely.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "occluded-culprit",
      },
      {
        id: "q3",
        kind: "single",
        update: "His pain continues on a nitroglycerin infusion. The first high-sensitivity troponin I is 41 ng/L. The male 99th percentile is 34 ng/L. The catheterization laboratory is on site.",
        prompt: "Which of the following is the most appropriate timing of coronary angiography for this patient?",
        options: [
          "Angiography within 24 hours of admission",
          "Angiography within 72 hours of admission",
          "Immediate angiography, within 2 hours",
          "Noninvasive stress testing before discharge",
          "Repeat troponin at 1 hour, then decide",
        ],
        correct: 2,
        explanation:
          "Chest pain that persists despite medical treatment is a very high risk feature of NSTE-ACS, and the ESC recommends an immediate invasive strategy, within 2 hours, for any very high risk feature. The new wall motion abnormality supports ongoing ischemia. Angiography within 24 hours suits high risk patients whose pain has settled, and a later window suits lower risk. Stress testing is unsafe while ischemia is ongoing. Waiting for a second troponin delays treatment when his pain has already made the decision.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What treatments would you give while the catheterization laboratory team assembles?",
        required: 2,
        accept: [
          { id: "ufh", text: "Unfractionated heparin 70 to 100 units/kg IV bolus", match: ["heparin", "ufh", "anticoagulant", "anticoagulation", "enoxaparin"] },
          { id: "opioid", text: "IV opioid such as fentanyl for pain", match: ["fentanyl", "morphine", "hydromorphone", "opioid"] },
          { id: "ntg", text: "Titrate the nitroglycerin infusion to pain and BP", match: ["nitroglycerin", "nitro", "ntg", "nitrate"] },
        ],
        unacceptable: [
          { text: "Fibrinolysis", match: ["tenecteplase", "alteplase", "thrombolysis", "fibrinolysis", "tnk"], dangerous: true },
        ],
        explanation:
          "He has had ASA 160 mg, so parenteral anticoagulation is next. Unfractionated heparin 70 to 100 units/kg IV suits a patient going straight to the laboratory, which is 6580 to 9400 units at 94 kg. An IV opioid treats pain that nitrates have not relieved, and the infusion can be titrated while BP allows. Fibrinolysis has no role without ST elevation. The ESC advises against routine P2Y12 pretreatment when an early invasive strategy is planned and the anatomy is not yet known.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-acs-2023",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "A colleague says this cannot be an occluded artery because there is no ST elevation. Why is this reasoning flawed?",
        required: 1,
        accept: [
          { id: "ecgmiss", text: "The standard ECG misses many acute occlusions, especially of the inferolateral wall", match: ["ecg miss", "ecg insensitive", "ecg can miss", "ecg not sensitive", "no st elevation", "without st elevation", "silent", "circumflex", "lateral wall", "inferolateral", "posterior wall"] },
          { id: "quarter", text: "About a quarter of NSTEMIs have a totally occluded culprit artery", match: ["quarter", "25%", "one in four", "occluded culprit", "total occlusion", "totally occluded"] },
          { id: "clinical", text: "Refractory pain with a new wall motion abnormality shows ongoing infarction whatever the ECG", match: ["wall motion", "refractory pain", "ongoing pain", "persistent pain", "ongoing ischemia"] },
        ],
        explanation:
          "STEMI criteria detect only some acute coronary occlusions. In the meta-analysis of 40 777 patients with NSTEMI, one in four had a totally occluded culprit, mostly supplying the inferior or lateral wall, and these patients had higher short-term mortality. Refractory pain with a new regional wall motion abnormality is the stronger signal in this case. Treatment should follow the whole picture, not the ST segments alone.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "occluded-culprit",
      },
    ],
    sources: [ESC_ACS23, KHAN_OCC],
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
    title: "Short of breath the day after a procedure",
    stem:
      "An 83-year-old woman is brought in by ambulance at 11:30 with 3 hours of central chest pain that is worse when she breathes in, with shortness of breath and lightheadedness. Yesterday a dual-chamber pacemaker was implanted for complete heart block, and she went home this morning. She has hypertension and osteoarthritis and takes amlodipine. She is anxious and cool to the touch. Her jugular venous pressure is raised to the angle of the jaw and her heart sounds are quiet. Breath sounds are equal on both sides and her lungs are clear. The pacemaker pocket is not swollen. Her systolic BP falls by 18 mmHg on inspiration.",
    vitals: { temperature: "36.9°C", pulse: "118/minute", resp: "26/minute", bp: "84/62 mmHg", o2sat: "93% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [
          { id: "tamp", text: "Cardiac tamponade from perforation by a pacing lead", match: ["tamponade", "hemopericardium", "haemopericardium", "pericardial effusion", "lead perforation", "perforation"] },
        ],
        unacceptable: [
          { text: "Tension pneumothorax", match: ["pneumothorax"] },
        ],
        explanation:
          "Hypotension, a raised JVP, quiet heart sounds and an inspiratory fall in systolic pressure of 18 mmHg describe cardiac tamponade. The day after a pacemaker implant, the likely cause is perforation of the heart wall by a lead, with bleeding into the pericardium. In a series of 2200 patients with active-fixation leads, age over 80 and female sex were independent predictors of perforation. Pneumothorax is the other early complication, but her breath sounds are equal and her lungs are clear.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "lead-perforation",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step for this patient?",
        options: [
          "Chest X-ray to check the lead position",
          "CT chest with IV contrast",
          "Device interrogation by the pacing clinic",
          "Formal echocardiogram tomorrow morning",
          "Point-of-care cardiac ultrasound now",
        ],
        correct: 4,
        explanation:
          "Echocardiography is the single most useful test to show a pericardial effusion and judge its effect on filling, and at the bedside it takes minutes. She is hypotensive, so the answer is needed before she leaves the resuscitation room. A chest X-ray may show a lead tip beyond the cardiac border but cannot show tamponade physiology. CT means leaving the department while unstable. Device interrogation can support perforation but does not change the immediate plan, and waiting until morning risks arrest.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pericardial-2015",
      },
      {
        id: "q3",
        kind: "short",
        update: "POCUS shows a 1.8 cm circumferential pericardial effusion with right atrial systolic collapse and right ventricular diastolic collapse. The inferior vena cava is dilated and does not collapse. BP is now 76/54 mmHg.",
        prompt: "What are your immediate management steps?",
        required: 2,
        accept: [
          { id: "tap", text: "Emergency pericardiocentesis under ultrasound guidance", match: ["pericardiocentesis", "pericardial drain", "drain effusion", "drain pericardium", "needle drainage", "pericardial tap", "subxiphoid needle"] },
          { id: "consult", text: "Call cardiology or cardiac surgery now", match: ["cardiology", "cardiologist", "cardiac surgery", "cardiac surgeon", "cardiothoracic", "electrophysiology"] },
          { id: "fluid", text: "Small IV fluid bolus while the drain is set up", match: ["fluid bolus", "iv fluid", "crystalloid", "normal saline", "saline bolus", "ringer", "fluid challenge"] },
          { id: "blood", text: "Crossmatch blood", match: ["crossmatch", "cross match", "type and screen", "blood product"] },
        ],
        unacceptable: [
          { text: "Diuretic such as furosemide", match: ["furosemide", "lasix", "diuretic"], dangerous: true },
          { text: "Nitroglycerin or another vasodilator", match: ["nitroglycerin", "nitro", "vasodilator"], dangerous: true },
        ],
        explanation:
          "Right atrial and right ventricular collapse with a plethoric IVC confirm tamponade, and she is getting worse. The ESC advises drainage without delay in an unstable patient, preferably by needle pericardiocentesis under echocardiographic guidance. A small fluid bolus is a common bridge while the drain is set up. Cardiology or cardiac surgery should be called now, because a perforating lead can bleed again. Vasodilators and diuretics are not recommended in tamponade.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-pericardial-2015",
      },
      {
        id: "q4",
        kind: "short",
        update: "Pericardiocentesis drains 220 mL of blood and a pigtail catheter is left in place. BP rises to 118/70 mmHg.",
        prompt: "What are the next steps in her care?",
        required: 2,
        accept: [
          { id: "drain", text: "Keep the pericardial drain in place and record its output", match: ["leave drain", "keep drain", "pigtail", "drain output", "leave catheter", "keep catheter", "indwelling drain"] },
          { id: "repeat", text: "Repeat POCUS for reaccumulation", match: ["repeat pocus", "repeat ultrasound", "repeat echo", "serial echo", "serial ultrasound", "reaccumulation", "re accumulation"] },
          { id: "device", text: "Device interrogation and imaging of the lead position", match: ["interrogation", "interrogate", "device check", "pacemaker check", "lead position", "threshold", "chest x ray", "cxr"] },
          { id: "revise", text: "Electrophysiology review for lead revision", match: ["lead revision", "revise lead", "reposition", "electrophysiology", "cardiology", "cardiac surgery"] },
          { id: "admit", text: "Admit to a monitored bed such as the CCU", match: ["ccu", "icu", "coronary care", "monitored bed", "admit", "step down"] },
        ],
        explanation:
          "Bleeding from a perforating lead can recur, so the pigtail stays in with its output recorded and the effusion is rechecked by ultrasound. Device interrogation and imaging show whether the lead still captures and where its tip lies. In the published series every tamponade was treated by pericardiocentesis and none needed surgery, but some perforating leads were repositioned. She needs admission to a monitored bed with electrophysiology deciding on revision.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "lead-perforation",
      },
    ],
    sources: [CANO_LEAD, ESC_PERI15],
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
    title: "Winded on the stairs to work",
    stem:
      "A 44-year-old woman presents at 17:20 with 3 weeks of central chest pressure when she climbs the two flights of stairs to her office. It settles within 5 minutes of rest. Today it came on while she carried groceries and lasted 20 minutes. She has been more breathless and tired for 2 months and craves ice. Over the past year her periods have become heavy, with clots, and on the heaviest days she soaks a pad every hour. She has hypertension and smokes. She is pale, including her conjunctivae. Her heart sounds are normal and her lungs are clear.",
    vitals: { temperature: "36.8°C", pulse: "112/minute", resp: "18/minute", bp: "132/70 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What further history would you take to find the cause and severity of her chest pressure?",
        required: 3,
        accept: [
          { id: "gi", text: "Other blood loss such as melena or rectal bleeding", match: ["melena", "black stool", "rectal bleeding", "hematochezia", "blood in stool", "gi bleed", "hematemesis", "vomiting blood"] },
          { id: "syncope", text: "Syncope or presyncope", match: ["syncope", "presyncope", "faint", "lightheaded", "dizzy", "dizziness"] },
          { id: "rest", text: "Pain at rest or a worsening pattern", match: ["at rest", "rest pain", "crescendo", "worsening", "frequency", "unstable", "longer episode"] },
          { id: "hf", text: "Orthopnea or leg swelling", match: ["orthopnea", "pnd", "paroxysmal nocturnal", "leg swelling", "edema"] },
          { id: "assoc", text: "Radiation, sweating or nausea with the pain", match: ["radiation", "radiate", "sweating", "diaphoresis", "nausea"] },
          { id: "preg", text: "Pregnancy possibility", match: ["pregnancy", "pregnant", "last menstrual period", "lmp"] },
          { id: "meds", text: "NSAID, anticoagulant or antiplatelet use", match: ["nsaid", "ibuprofen", "naproxen", "anticoagulant", "blood thinner", "antiplatelet"] },
          { id: "fh", text: "Family history of premature coronary disease", match: ["family history"] },
        ],
        explanation:
          "Exertional pressure that settles with rest is anginal, and today's 20-minute episode on less effort is a change in pattern. Heavy periods, fatigue and craving ice point to iron deficiency anemia as a driver. Ask about other blood loss, presyncope and heart failure symptoms to gauge how severe the anemia is. The features of the pain and her other risk factors set the chance of coronary disease underneath, and pregnancy and drugs that promote bleeding change the plan.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "short",
        update: "Her ECG shows sinus tachycardia at 110/minute with no ST changes. High-sensitivity troponin I at 0 hours is 11 ng/L. The female 99th percentile is 16 ng/L. Hemoglobin is 62 g/L with an MCV of 64 fL.",
        prompt: "A resident suggests discharge with oral iron because the ECG and troponin are normal. Why is this unsafe?",
        required: 1,
        accept: [
          { id: "serial", text: "One early troponin cannot exclude MI. It must be repeated", match: ["repeat troponin", "serial troponin", "single troponin", "one troponin", "second troponin", "troponin too early", "delta troponin"] },
          { id: "anemia", text: "Symptomatic severe anemia with exertional ischemia needs treatment and a source", match: ["transfusion", "transfuse", "red cell", "prbc", "severe anemia", "symptomatic anemia", "hemoglobin 62"] },
          { id: "pattern", text: "Her pain today was longer and on less effort, a change in pattern", match: ["change in pattern", "new pattern", "20 minute", "crescendo", "unstable", "accelerating"] },
          { id: "ecg", text: "A normal ECG does not exclude ischemia", match: ["normal ecg", "ecg cannot exclude", "ecg does not exclude"] },
        ],
        explanation:
          "A single troponin drawn early does not exclude MI, and the ESC algorithms call for a repeat at a set interval. Her pain today lasted longer and came on with less effort, which is a change in pattern. A hemoglobin of 62 g/L with exertional chest pressure is symptomatic anemia that already limits oxygen delivery to her heart. She needs treatment and a source for her bleeding, not discharge.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "short",
        update: "The 2-hour troponin is 58 ng/L. After 2 units of red cells her hemoglobin is 81 g/L, her pulse is 88/minute and she is pain free.",
        prompt: "Why does her relief after transfusion not exclude coronary artery disease?",
        required: 2,
        accept: [
          { id: "relief", text: "Relief with treatment is a weak clue that cannot exclude coronary disease", match: ["relief", "resolution", "pain free", "weak clue"] },
          { id: "unmask", text: "Anemia may have unmasked fixed coronary stenosis", match: ["unmask", "underlying coronary", "fixed stenosis", "stenosis", "atherosclerosis", "coronary disease", "underlying cad"] },
          { id: "risk", text: "She has risk factors: smoking and hypertension", match: ["smoking", "smoker", "hypertension", "risk factor"] },
          { id: "mi", text: "Her troponin rose, so she has had an MI that needs cardiac evaluation", match: ["troponin rose", "rising troponin", "troponin rise", "type 2", "myocardial infarction"] },
        ],
        explanation:
          "A type 2 MI can occur on top of coronary atherosclerosis when anemia lowers oxygen supply. Her exertional angina, smoking and hypertension make fixed coronary disease plausible, and the anemia may have unmasked it. Relief after transfusion shows the supply problem improved, not that her arteries are normal. The ESC advises echocardiography or coronary imaging once the precipitating illness is treated, to find contributing heart disease.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her troponin rise?",
        options: [
          "Admit, treat the anemia, then cardiac imaging",
          "ASA, heparin and angiography within 24 hours",
          "Discharge on oral iron with gynecology referral",
          "Exercise stress test before discharge tonight",
          "Immediate angiography within 2 hours",
        ],
        correct: 0,
        explanation:
          "A rise from 11 to 58 ng/L with a clear supply problem fits a type 2 MI. The ESC advises treating the precipitating condition, here bleeding and iron deficiency anemia, then echocardiography or coronary imaging once she is stable. ASA, full anticoagulation and angiography within 24 hours suit a type 1 NSTEMI and add bleeding risk while she is still bleeding. Discharge ignores a confirmed MI with a hemoglobin of 81 g/L. A stress test tonight and immediate angiography both come before the anemia has been treated.",
        keyFeature: { topic: "ischemic-heart-disease", n: 3 },
        source: "esc-acs-2023",
      },
    ],
    sources: [AHA_CP21, ESC_ACS23],
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
          "Pericarditis in a patient whose dialysis has lapsed calls for dialysis, and the ESC advises intensified dialysis when pericarditis develops. Uremic effusions are often bloody, so anticoagulation should be avoided and the run should use no systemic heparin. He needs admission with repeat echocardiography to watch the effusion. Colchicine is contraindicated with severe renal impairment. NSAIDs and corticosteroids are reserved for when intensive dialysis fails. Drainage is for tamponade or failure of dialysis. Discharge leaves an effusion unmonitored 8 days after his last dialysis, and a saline bolus would worsen his overload.",
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
    title: "Pain at the gym",
    stem:
      "A 38-year-old man presents at 19:25 with chest pain that began suddenly 70 minutes ago during a heavy bench press at the gym. It was severe from the start and now spreads between his shoulder blades. He was told as a child that he has a bicuspid aortic valve but stopped attending checkups at 18. He takes no medications. He is pale and sweating. BP is the same in both arms and his pulses are equal. There is a soft systolic ejection murmur at the right upper sternal border and no diastolic murmur. His neurologic examination is normal. The ECG is normal and a portable chest X-ray shows a normal mediastinum.",
    vitals: { temperature: "36.8°C", pulse: "102/minute", resp: "20/minute", bp: "164/92 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Which life-threatening diagnoses linked to his valve disease must you consider first?",
        required: 2,
        accept: [
          { id: "aad", text: "Acute aortic dissection", match: ["dissection", "acute aortic syndrome", "intramural hematoma"] },
          { id: "aneurysm", text: "Expansion or rupture of an ascending aortic aneurysm", match: ["aneurysm", "rupture", "aortopathy", "aortic root dilation"] },
          { id: "ie", text: "Infective endocarditis with a root abscess or embolic MI", match: ["endocarditis", "abscess", "septic embolus"] },
          { id: "as", text: "Severe aortic stenosis with exertional ischemia", match: ["aortic stenosis", "valve stenosis"] },
        ],
        explanation:
          "A bicuspid aortic valve comes with disease of the ascending aorta, and the ACC and AHA name it as a risk factor for aortic dissection. Sudden severe pain spreading to the back during heavy lifting makes acute dissection the first concern. A dilated root or ascending aorta can also expand or rupture. A diseased valve can become stenotic, causing exertional ischemia, or infected, although he has no fever.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-aorta-2022",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for this patient?",
        options: [
          "CT angiography of the aorta",
          "CT pulmonary angiography",
          "D-dimer, with CT only if elevated",
          "Serial high-sensitivity troponins",
          "Transthoracic echocardiography tomorrow",
        ],
        correct: 0,
        explanation:
          "His aortic dissection detection risk score is 2. Known aortic valve disease is a high risk condition, and abrupt severe pain is a high risk pain feature. A score of 2 or 3 is high risk, so he needs CT angiography of the aorta now. A normal ECG and a normal mediastinum do not lower that risk enough. A low D-dimer helps exclude dissection only when the clinical probability is low. Troponins and echocardiography tomorrow delay the diagnosis, and a pulmonary angiogram times the contrast for the pulmonary arteries rather than the aorta.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-aorta-2022",
      },
      {
        id: "q3",
        kind: "short",
        update: "While CT is arranged, POCUS shows an aortic root of 4.6 cm with no visible intimal flap and no pericardial effusion. A colleague says the scan makes dissection unlikely.",
        prompt: "Why should this ultrasound not reassure you?",
        required: 2,
        accept: [
          { id: "tte", text: "Transthoracic views miss much of the aorta, and TEE or CT is more sensitive", match: ["transthoracic", "tte", "sensitivity", "insensitive", "miss", "arch", "descending", "limited view"] },
          { id: "flap", text: "Not seeing a flap does not exclude dissection", match: ["no flap", "flap", "cannot exclude", "doesnt exclude", "does not exclude", "not rule out"] },
          { id: "root", text: "The dilated root raises the probability", match: ["dilated", "4.6", "enlarged root", "root dilation", "aneurysm", "aortopathy"] },
        ],
        explanation:
          "Bedside transthoracic ultrasound can show complications of dissection such as aortic regurgitation or tamponade, but it misses much of the aorta, and the ACC and AHA prefer TEE or CT for their higher sensitivity. Not seeing a flap is weak evidence. His root of 4.6 cm is dilated, which raises rather than lowers the probability of an aortic syndrome. In patients with a bicuspid valve followed after valve surgery, ascending diameters of 4.5 to 4.9 cm carried a higher risk of dissection or sudden death.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-aorta-2022",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What other risk factors for aortic dissection would you ask him about?",
        required: 3,
        accept: [
          { id: "fh", text: "Family history of aortic disease or sudden death", match: ["family history", "sudden death", "relative"] },
          { id: "ctd", text: "Marfan syndrome or another connective tissue disease", match: ["marfan", "loeys", "ehlers", "connective tissue"] },
          { id: "coarct", text: "Coarctation or a known aortic aneurysm", match: ["coarctation", "known aneurysm", "aortic aneurysm", "aortic repair"] },
          { id: "htn", text: "Hypertension", match: ["hypertension", "high blood pressure"] },
          { id: "stim", text: "Cocaine, amphetamine or anabolic steroid use", match: ["cocaine", "amphetamine", "methamphetamine", "stimulant", "anabolic", "steroid"] },
          { id: "proc", text: "Recent cardiac or aortic procedure", match: ["cardiac surgery", "catheterization", "aortic manipulation", "valve surgery", "recent procedure"] },
        ],
        explanation:
          "The high risk conditions in the aortic dissection detection risk score are Marfan syndrome or another connective tissue disease, a family history of aortic disease, known aortic valve disease, recent aortic manipulation and a known thoracic aneurysm. Coarctation and hypertension are further risk factors that travel with a bicuspid valve. Ask about stimulant use as well. The ACC and AHA advise patients with aortic disease to avoid heavy isometric lifting, which can push systolic pressure above 300 mmHg.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-aorta-2022",
      },
    ],
    sources: [AORTA22],
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
