// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 };

const CCS_STEMI: Source = {
  id: "ccs-stemi",
  citation: "Wong GC and colleagues. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
};
const CCS_APT: Source = {
  id: "ccs-antiplatelet",
  citation: "Mehta SR and colleagues. 2018 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology focused update of the guidelines for the use of antiplatelet therapy. Can J Cardiol. 2018.",
};
const ESC_ACS: Source = {
  id: "esc-acs",
  citation: "Byrne RA and colleagues. 2023 ESC guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.",
};
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
  citation: "Thrombosis Canada. Clinical guides on pulmonary embolism treatment and on venous thromboembolism in pregnancy and the postpartum period.",
  url: "https://thrombosiscanada.ca",
};
const BTS: Source = {
  id: "bts-pleural",
  citation: "Roberts ME and colleagues. British Thoracic Society guideline for pleural disease. Thorax. 2023.",
};
const COCAINE: Source = {
  id: "aha-cocaine",
  citation: "McCord J and colleagues. Management of cocaine-associated chest pain and myocardial infarction. AHA scientific statement. Circulation. 2008.",
};
const WSES: Source = {
  id: "wses-esophagus",
  citation: "Chirica M and colleagues. Esophageal emergencies. WSES guidelines. World J Emerg Surg. 2019.",
};
const ESC_PERI: Source = {
  id: "esc-pericardial",
  citation: "Adler Y and colleagues. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.",
};
const ESC_PERI_2025: Source = {
  id: "esc-myo-peri-2025",
  citation: "Schulz-Menger J and colleagues. 2025 ESC guidelines for the management of myocarditis and pericarditis. Eur Heart J. 2025.",
  url: "https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/myocarditis-and-pericarditis/",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support. 10th edition. 2018.",
};
const STREAM: Source = {
  id: "stream",
  citation: "Armstrong PW and colleagues. Fibrinolysis or primary PCI in ST-segment elevation myocardial infarction (STREAM). N Engl J Med. 2013.",
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
      "A 64-year-old man presents at 02:10 with chest pain that began suddenly at 01:30 while he was watching television. It was maximal at onset, rated 10 out of 10, and now goes through to his back between the shoulder blades. He has hypertension and was once told he has a leaky aortic valve. HR 108, BP right arm 196/104 mmHg, left arm 158/90 mmHg, RR 22, SpO2 96% on room air, temperature 36.7°C. Weight 90 kg. He is diaphoretic. There is a soft early diastolic murmur. ECG: sinus tachycardia, left ventricular hypertrophy, no ST elevation. A portable chest X-ray is read as a normal mediastinum.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that raise your concern for acute aortic syndrome.",
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
        prompt: "Which investigation is most appropriate next? Select one.",
        options: [
          "D-dimer, then CT angiogram only if positive",
          "CT angiogram of the chest, abdomen and pelvis",
          "Transesophageal echocardiogram in the morning",
          "Repeat PA and lateral chest X-ray",
          "Serial troponins over 3 hours",
        ],
        correct: 1,
        explanation:
          "With two or more high-risk categories, go straight to CT angiography. D-dimer is only used to help rule out dissection in low-risk patients. A normal chest X-ray does not lower the probability enough.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "advised",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO findings or test results that should NOT be used to rule out aortic dissection in a patient like this.",
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
        prompt: "List THREE immediate treatments or targets. Name any drug.",
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
    title: "Pressure and nausea at dawn",
    stem:
      "A 58-year-old man walks into triage at 05:40 with 40 minutes of heavy central chest pressure spreading to his jaw, with nausea and sweating. He smokes and has type 2 diabetes. He arrives at a community hospital without a cardiac catheterization lab. The triage nurse begins a full history.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List TWO actions that should happen within 10 minutes, before the history is complete.",
        required: 2,
        accept: [
          { id: "ecg", text: "12-lead ECG within 10 minutes", match: ["ecg", "ekg", "electrocardiogram"] },
          ASA_ITEM,
          { id: "monitor", text: "Cardiac monitor and defibrillator pads", match: ["monitor", "defibrillator", "pad", "telemetry"] },
          { id: "iv", text: "IV access and bloods including troponin", match: ["iv access", "intravenous access", "troponin", "bloodwork", "blood work"] },
        ],
        unacceptable: [{ text: "ASA 81 mg as the loading dose", match: ["asa 81", "aspirin 81"] }],
        explanation:
          "In possible ACS, the ECG must be done and read within 10 minutes and ASA given without waiting for the full history. ASA 81 mg is too low as a first dose. Monitoring allows immediate defibrillation.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ccs-stemi",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "ECG shows 2 mm ST elevation in II, III and aVF with ST depression in I and aVL. HR 54, BP 88/56 mmHg. Lungs are clear. The JVP is elevated.",
        prompt: "List TWO next steps in assessment or management.",
        required: 2,
        accept: [
          { id: "v4r", text: "Right-sided leads such as V4R", match: ["right sided", "v4r", "right side lead", "right precordial"] },
          { id: "fluid", text: "IV crystalloid bolus", match: ["fluid", "saline", "ringer", "crystalloid", "bolus"] },
          { id: "reperfusion", text: "Activate the regional STEMI reperfusion pathway", match: ["stemi", "cath", "pci", "reperfusion", "fibrinolysis", "tenecteplase", "thrombolysis"] },
          { id: "posterior", text: "Posterior leads V7 to V9", match: ["v7", "v8", "v9", "posterior lead"] },
          { id: "atropine", text: "Atropine if bradycardia worsens with hypoperfusion", match: ["atropine", "pacing", "pacer"] },
          { id: "nonitrate", text: "Avoid nitrates and other preload reducers", match: ["avoid nitrate", "no nitrate", "hold nitrate", "avoid nitroglycerin", "no nitroglycerin", "hold nitroglycerin", "avoid nitro", "no nitro", "avoid preload"] },
        ],
        unacceptable: [
          { text: "Nitroglycerin", match: ["nitroglycerin 0.4", "ntg 0.4", "nitro 0.4", "nitroglycerin spray", "sublingual nitroglycerin", "nitroglycerin infusion", "nitro spray", "sl nitro", "sl ntg"], dangerous: true },
        ],
        explanation:
          "Inferior STEMI with hypotension, clear lungs and a raised JVP suggests right ventricular infarction. Right-sided leads confirm it. The RV is preload dependent, so give fluid and avoid nitrates, which can cause profound hypotension.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "menu",
        update:
          "V4R shows 1.5 mm ST elevation. After 1 L of normal saline, HR is 68 and BP is 112/70 mmHg. The nearest PCI centre is 150 minutes away by road. There are no contraindications to fibrinolysis. Weight 82 kg. He received ASA at triage.",
        prompt: "Which THREE medications should he receive now? Select THREE.",
        options: [
          "Tenecteplase 40 mg IV bolus",
          "Tenecteplase 45 mg IV bolus",
          "Tenecteplase 50 mg IV bolus",
          "Clopidogrel 300 mg PO",
          "Clopidogrel 75 mg PO",
          "Ticagrelor 180 mg PO",
          "Enoxaparin 30 mg IV bolus, then 1 mg/kg SC every 12 hours",
          "Enoxaparin 0.75 mg/kg SC every 12 hours with no IV bolus",
          "Metoprolol 5 mg IV",
          "Prasugrel 60 mg PO",
        ],
        select: 3,
        correct: [1, 3, 6],
        explanation:
          "When PCI cannot happen within 120 minutes of first medical contact, give fibrinolysis within 30 minutes. Tenecteplase for 80 to 89 kg is 45 mg. Clopidogrel 300 mg is the P2Y12 inhibitor studied with fibrinolysis in patients 75 or younger. Enoxaparin with an IV bolus is used under 75. Had he stayed in shock, transfer for primary PCI would be preferred whatever the delay.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO findings at 60 to 90 minutes after tenecteplase that indicate failed reperfusion and a need for rescue PCI.",
        required: 2,
        accept: [
          { id: "st", text: "Less than 50% ST resolution in the lead with the greatest elevation", match: ["st resolution", "st segment resolution", "persistent st", "ongoing st", "50%", "st elevation persist"] },
          { id: "pain", text: "Ongoing ischemic chest pain", match: ["ongoing pain", "persistent pain", "chest pain", "ongoing chest pain", "pain persist"] },
          { id: "shock", text: "Hemodynamic instability or cardiogenic shock", match: ["shock", "hemodynamic", "hypotension", "unstable"] },
          { id: "arrhythmia", text: "Ventricular arrhythmia or electrical instability", match: ["arrhythmia", "ventricular tachycardia", "vt", "vf", "ventricular fibrillation"] },
          { id: "hf", text: "Acute heart failure", match: ["heart failure", "pulmonary edema"] },
        ],
        explanation:
          "Assess reperfusion at 60 to 90 minutes. Failure to achieve 50% ST resolution, ongoing pain or instability calls for immediate transfer for rescue PCI. All patients should go on for angiography within 24 hours even when lysis works.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
    ],
    sources: [CCS_STEMI, ESC_ACS],
    ...meta,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "chest-pain-03",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Pressure she cannot localize",
    stem:
      "A 66-year-old woman presents at 14:20 with 90 minutes of chest discomfort and shortness of breath. She describes a pressure she cannot localize, with nausea. She has hypertension and dyslipidemia and is a former smoker. HR 92, BP 142/84 mmHg, RR 20, SpO2 95% on room air, temperature 36.6°C. Weight 68 kg. ECG: sinus rhythm, 2 mm horizontal ST depression in V1 to V3 with tall R waves and upright T waves in V2 and V3. There is no ST elevation in the standard 12 leads.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most concerning ECG diagnosis? List ONE.",
        required: 1,
        accept: [
          { id: "post", text: "Posterior STEMI (posterior occlusion MI)", match: ["posterior mi", "posterior stemi", "posterior infarct", "posterior wall", "posterior myocardial", "occlusion mi", "posterior"] },
        ],
        unacceptable: [{ text: "NSTEMI or subendocardial ischemia", match: ["nstemi", "subendocardial", "non st"] }],
        explanation:
          "Horizontal ST depression in V1 to V3 with tall R waves and upright T waves is the mirror image of posterior ST elevation. It is a STEMI equivalent and is often mislabelled as NSTEMI.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What additional ECG step would you take to confirm it? Name the leads.",
        required: 1,
        accept: [
          { id: "v7", text: "Posterior leads V7 to V9", match: ["v7", "v8", "v9", "posterior lead"] },
        ],
        explanation:
          "Leads V7 to V9 on the back at the level of V6 detect posterior ST elevation. ST elevation of 0.5 mm or more in these leads is diagnostic, or 1 mm in men under 40.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "single",
        update: "Leads V7 to V9 show 1 mm ST elevation. The hospital has a cath lab on site.",
        prompt: "Which is the most appropriate management? Select one.",
        options: [
          "Serial troponins and admission to medicine as NSTEMI",
          "Activate the cath lab for primary PCI",
          "CT pulmonary angiogram",
          "Heparin and angiography within 72 hours",
          "Exercise stress test",
        ],
        correct: 1,
        explanation:
          "Posterior STEMI is managed as STEMI with emergency reperfusion. Treating it as NSTEMI delays opening an occluded circumflex or right coronary artery.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO medications to give before she goes to the cath lab. Include doses.",
        required: 2,
        accept: [
          ASA_ITEM,
          { id: "p2y12", text: "Ticagrelor 180 mg, prasugrel 60 mg or clopidogrel 600 mg PO", match: ["ticagrelor 180", "prasugrel 60", "clopidogrel 600", "ticagrelor 180mg", "prasugrel 60mg", "clopidogrel 600mg"] },
          { id: "ufh", text: "Unfractionated heparin 70 to 100 units/kg IV bolus", match: ["heparin 70", "heparin 60", "heparin 100", "heparin 5000", "heparin 4000", "ufh 70", "ufh 60", "ufh 100", "ufh 5000", "ufh 4000"] },
          { id: "ntg", text: "Nitroglycerin 0.4 mg SL for ongoing pain if BP allows", match: ["nitroglycerin 0.4", "ntg 0.4", "nitro 0.4", "nitroglycerin 0.3"] },
        ],
        unacceptable: [
          { text: "Clopidogrel 300 mg before primary PCI", match: ["clopidogrel 300"] },
          { text: "ASA 81 mg as the loading dose", match: ["asa 81", "aspirin 81"] },
        ],
        explanation:
          "Primary PCI patients get ASA, a potent P2Y12 inhibitor or clopidogrel 600 mg, and unfractionated heparin. Clopidogrel 300 mg is the fibrinolysis dose and is too low for primary PCI.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ccs-antiplatelet",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "Her first high-sensitivity troponin is below the 99th percentile. Give ONE reason this does not change your plan.",
        required: 1,
        accept: [
          { id: "early", text: "Drawn too early for troponin to have risen", match: ["too early", "early", "not had time", "not yet risen", "takes time", "time to rise", "delayed rise", "within 3 hour"] },
          { id: "ecg", text: "STEMI is an ECG diagnosis. Reperfusion does not wait for troponin", match: ["ecg diagnosis", "based on ecg", "ecg alone", "do not wait", "not wait for troponin", "clinical diagnosis"] },
        ],
        explanation:
          "Troponin may be normal early after coronary occlusion. Reperfusion decisions for STEMI and its equivalents rest on the ECG and symptoms. Waiting for a troponin rise loses myocardium.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
    ],
    sources: [ESC_ACS, CCS_STEMI, CCS_APT],
    ...meta,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "chest-pain-04",
    topic: "chest-pain",
    title: "Pleuritic pain three weeks after delivery",
    stem:
      "A 31-year-old woman presents with 2 days of right-sided chest pain that is worse with deep breaths and shortness of breath on exertion. She had a caesarean delivery 3 weeks ago and is breastfeeding. She has no leg symptoms. HR 112, BP 118/72 mmHg, RR 24, SpO2 93% on room air, temperature 37.6°C. Weight 78 kg. Her lungs are clear. ECG: sinus tachycardia with T wave inversion in V1 to V3. Chest X-ray is normal.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that increase her pretest probability of pulmonary embolism.",
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
        prompt: "Which is the most appropriate next test? Select one.",
        options: [
          "D-dimer",
          "CT pulmonary angiogram",
          "Bilateral leg compression ultrasound only",
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
        prompt: "The resident thinks pleurisy is more likely. List TWO findings in this case that should NOT be used to exclude PE.",
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
        update: "CTPA shows a right lower lobe segmental PE. RV to LV ratio is normal and troponin is normal. Creatinine is 62 µmol/L.",
        prompt: "She will be treated at home and plans to keep breastfeeding. Write her first anticoagulant prescription. Include the drug, dose and frequency.",
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
      "A 27-year-old man presents with 1 day of sharp left-sided chest pain that is worse with deep breaths. It began the morning after he helped a friend move furniture. He has no medical history and takes no medications. HR 84, BP 128/76 mmHg, RR 16, SpO2 98% on room air, temperature 36.8°C. Heart and lung examination are normal. ECG is normal.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE life-threatening causes of pleuritic chest pain that you must consider.",
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
        prompt: "Your gestalt probability of PE is low. List THREE criteria of the PERC rule he must meet.",
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
        prompt: "Which statement is most accurate? Select one.",
        options: [
          "Chest wall tenderness confirms a musculoskeletal cause and excludes PE",
          "PE is ruled out by PERC with low gestalt probability. No D-dimer is needed",
          "PERC cannot be used because the pain is pleuritic",
          "A D-dimer is still required in all patients with pleuritic pain",
          "CT pulmonary angiogram is indicated",
        ],
        correct: 1,
        explanation:
          "PERC applied to a low gestalt probability rules out PE without testing. Chest wall tenderness does not by itself exclude PE or ACS, so it is not the reason to stop here. Pleuritic pain is not an exclusion for PERC.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "perc",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Later that shift, a 44-year-old woman presents with similar pleuritic pain. She is 10 days after arthroscopic knee surgery under general anesthesia with intubation. HR 88 and SpO2 97%. She has no leg swelling. Her Wells score is 1.5.",
        prompt: "Which is the most appropriate next step? Select one.",
        options: [
          "Discharge without testing because PERC is negative",
          "D-dimer",
          "CT pulmonary angiogram without D-dimer",
          "V/Q scan",
          "Leg compression ultrasound only",
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
    title: "Sudden breathlessness while coughing",
    stem:
      "A 46-year-old man with severe COPD arrives by ambulance with sudden right-sided chest pain and severe shortness of breath that began 30 minutes ago during a coughing fit. HR 132, BP 78/44 mmHg, RR 36, SpO2 82% on a non-rebreather mask, temperature 36.9°C. He is agitated. His trachea is deviated to the left. Breath sounds are absent on the right, the right chest is hyperresonant and his neck veins are distended.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis? List ONE.",
        required: 1,
        accept: [
          { id: "tension", text: "Right tension pneumothorax", match: ["tension pneumothorax", "tension ptx", "tension"] },
        ],
        unacceptable: [{ text: "COPD exacerbation", match: ["copd exacerbation", "aecopd"] }],
        explanation:
          "Absent breath sounds, hyperresonance, tracheal deviation, distended neck veins and shock mean tension pneumothorax. It is a clinical diagnosis.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "bts-pleural",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which is the most appropriate immediate action? Select one.",
        options: [
          "Portable chest X-ray",
          "Needle or finger decompression of the right chest",
          "Needle decompression of the left chest",
          "Rapid sequence intubation",
          "CT chest",
          "Nebulized salbutamol and ipratropium",
        ],
        correct: 1,
        explanation:
          "Decompress without waiting for imaging. Intubating first and ventilating with positive pressure can precipitate arrest.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "bts-pleural",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO acceptable sites for needle decompression in an adult.",
        required: 2,
        accept: [
          { id: "lat", text: "4th or 5th intercostal space just anterior to the midaxillary line", match: ["4th intercostal", "5th intercostal", "fourth intercostal", "fifth intercostal", "anterior axillary", "midaxillary", "mid axillary", "4th ic", "5th ic", "4th ics", "5th ics"] },
          { id: "mcl", text: "2nd intercostal space in the midclavicular line", match: ["2nd intercostal", "second intercostal", "midclavicular", "mid clavicular", "2nd ic", "2nd ics"] },
        ],
        explanation:
          "The lateral site at the 4th or 5th space just anterior to the midaxillary line has a thinner chest wall and a higher success rate in adults. The 2nd space in the midclavicular line remains acceptable. Stay above the rib to avoid the neurovascular bundle.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "atls",
      },
      {
        id: "q4",
        kind: "short",
        update: "After decompression, HR 108, BP 112/70 mmHg and SpO2 91%.",
        prompt: "List TWO next steps.",
        required: 2,
        accept: [
          { id: "tube", text: "Chest tube on the right", match: ["chest tube", "tube thoracostomy", "chest drain", "intercostal drain", "pigtail", "thoracostomy"] },
          { id: "cxr", text: "Chest X-ray to confirm position and re-expansion", match: ["chest x ray", "cxr", "x ray"] },
          { id: "o2", text: "Titrate oxygen to SpO2 88 to 92%", match: ["oxygen", "88", "92"] },
          { id: "admit", text: "Admission and respirology or thoracic surgery involvement", match: ["admit", "admission", "respirology", "thoracic surgery", "respirologist"] },
          { id: "leave", text: "Leave the catheter in place until the drain is inserted", match: ["leave catheter", "leave needle", "keep catheter"] },
        ],
        explanation:
          "Needle decompression is temporary. A chest drain is needed, followed by imaging to confirm position and re-expansion. Secondary pneumothorax in COPD needs admission and specialist input. Target 88 to 92% in COPD with CO2 retention.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "bts-pleural",
      },
    ],
    sources: [BTS, ATLS],
    ...meta,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "chest-pain-07",
    topic: "chest-pain",
    title: "Burning after a large dinner",
    stem:
      "A 61-year-old man presents at 23:10 with 1 hour of burning discomfort in his epigastrium and lower chest that began after a large dinner. He has reflux disease, hypertension and a 30 pack-year smoking history. HR 88, BP 156/92 mmHg, RR 18, SpO2 97% on room air, temperature 36.7°C. Weight 84 kg. The triage ECG is normal. Under a triage standing order, he is given an antacid with viscous lidocaine and says he feels much better.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features of the history you would ask about to help distinguish ACS from a gastrointestinal cause.",
        required: 3,
        accept: [
          { id: "exertion", text: "Relation to exertion and relief with rest", match: ["exertion", "exertional", "exercise", "activity", "rest"] },
          { id: "radiation", text: "Radiation to arm, jaw or neck", match: ["radiation", "radiate", "arm", "jaw", "neck"] },
          { id: "diaph", text: "Diaphoresis", match: ["diaphoresis", "sweat", "sweating", "clammy"] },
          { id: "dyspnea", text: "Shortness of breath", match: ["dyspnea", "shortness of breath", "sob", "breathless"] },
          { id: "prior", text: "Prior similar episodes or known angina", match: ["prior", "previous", "similar episode", "angina"] },
          { id: "meal", text: "Relation to meals, lying flat or position", match: ["meal", "food", "eating", "lying", "position", "supine"] },
          { id: "quality", text: "Character and duration of the pain", match: ["character", "quality", "pressure", "duration", "constant"] },
          { id: "swallow", text: "Dysphagia or odynophagia", match: ["dysphagia", "odynophagia", "swallow"] },
          { id: "brash", text: "Acid brash or sour taste", match: ["acid", "brash", "sour", "regurgitation"] },
        ],
        explanation:
          "Exertional pain, radiation, diaphoresis and dyspnea raise the likelihood of ACS. Meal-related, positional pain with regurgitation favours reflux. No single feature is decisive, so the history shapes but does not settle the diagnosis.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the diagnostic value of his response to the antacid and viscous lidocaine? Answer in ONE line.",
        required: 1,
        accept: [
          { id: "none", text: "It does not exclude ACS and has no diagnostic value", match: ["not diagnostic", "does not exclude", "does not rule out", "unreliable", "not reliable", "no diagnostic value", "cannot exclude", "cannot rule out", "no value", "not useful", "doesn t rule out", "doesn t exclude", "not helpful", "should not be used", "not reassuring", "no role"] },
        ],
        unacceptable: [
          { text: "It suggests or confirms a GI cause", match: ["suggest gi", "suggest reflux", "confirm gi", "confirm reflux", "rule out acs", "exclude acs", "excludes acs", "likely gi", "likely reflux"] },
        ],
        explanation:
          "Response to a GI cocktail does not separate cardiac from GI pain. Ischemic pain also waxes and wanes. It must not be used to discharge a patient with possible ACS.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "Twenty minutes later his pain returns. A repeat ECG shows 2 mm ST elevation in V2 to V4 with reciprocal ST depression in III and aVF. The hospital has a cath lab on site.",
        prompt: "List THREE immediate management steps. Include doses for any drugs.",
        required: 3,
        accept: [
          ASA_ITEM,
          { id: "p2y12", text: "Ticagrelor 180 mg, prasugrel 60 mg or clopidogrel 600 mg PO", match: ["ticagrelor 180", "prasugrel 60", "clopidogrel 600", "ticagrelor 180mg", "prasugrel 60mg", "clopidogrel 600mg"] },
          { id: "ufh", text: "Unfractionated heparin 70 to 100 units/kg IV bolus", match: ["heparin 70", "heparin 60", "heparin 100", "heparin 5000", "heparin 4000", "ufh 70", "ufh 60", "ufh 100", "ufh 5000", "ufh 4000"] },
          { id: "cath", text: "Activate the cath lab for primary PCI", match: ["cath lab", "cath", "primary pci", "pci", "catheterization", "catheterisation"] },
          { id: "ntg", text: "Nitroglycerin 0.4 mg SL for pain if BP allows", match: ["nitroglycerin 0.4", "ntg 0.4", "nitro 0.4", "nitroglycerin 0.3"] },
        ],
        unacceptable: [
          { text: "ASA 81 mg as the loading dose", match: ["asa 81", "aspirin 81"] },
        ],
        explanation:
          "A normal first ECG does not exclude an evolving STEMI. Repeat the ECG with any change in symptoms. Once ST elevation appears, give ASA, a P2Y12 inhibitor and heparin and activate the cath lab.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ccs-stemi",
      },
    ],
    sources: [AHA_CP, CCS_STEMI],
    ...meta,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "chest-pain-08",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Not feeling right",
    stem:
      "A 74-year-old woman is brought in by her son with 6 hours of fatigue, nausea and not feeling right. She was short of breath climbing the stairs to her apartment. She denies chest pain. She has had type 2 diabetes for 20 years, chronic kidney disease with an eGFR of 38 mL/min/1.73 m2 and hypertension. HR 98, BP 148/78 mmHg, RR 22, SpO2 94% on room air, temperature 36.6°C, glucose 14.2 mmol/L. ECG: sinus rhythm with 1 mm horizontal ST depression in I, aVL and V4 to V6. There is no prior ECG.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that increase her pretest probability of ACS despite the absence of chest pain.",
        required: 3,
        accept: [
          { id: "dm", text: "Longstanding diabetes", match: ["diabetes", "diabetic", "dm"] },
          { id: "age", text: "Older age", match: ["age", "older", "elderly", "74"] },
          { id: "ckd", text: "Chronic kidney disease", match: ["ckd", "kidney", "renal"] },
          { id: "htn", text: "Hypertension", match: ["hypertension", "htn"] },
          { id: "ecg", text: "New ST depression on ECG", match: ["st depression", "ecg", "ischemic change"] },
          { id: "dyspnea", text: "Exertional dyspnea as an anginal equivalent", match: ["dyspnea", "short of breath", "shortness of breath", "sob", "exertional"] },
        ],
        explanation:
          "Older age, diabetes, CKD and hypertension all raise the prevalence of coronary disease. Exertional dyspnea is a common anginal equivalent. ST depression makes ischemia likely.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE symptoms that older adults, women and people with diabetes may report with ACS instead of chest pain.",
        required: 3,
        accept: [
          { id: "dyspnea", text: "Shortness of breath", match: ["dyspnea", "shortness of breath", "sob", "breathless"] },
          { id: "fatigue", text: "Fatigue or weakness", match: ["fatigue", "weakness", "tired"] },
          { id: "nausea", text: "Nausea or vomiting", match: ["nausea", "vomit", "vomiting"] },
          { id: "diaph", text: "Diaphoresis", match: ["diaphoresis", "sweat", "sweating"] },
          { id: "epigastric", text: "Epigastric pain or indigestion", match: ["epigastric", "indigestion", "heartburn", "abdominal"] },
          { id: "syncope", text: "Syncope or presyncope", match: ["syncope", "presyncope", "dizziness", "lightheaded"] },
          { id: "confusion", text: "Confusion or delirium", match: ["confusion", "delirium", "altered"] },
          { id: "referred", text: "Jaw, neck, arm or back pain", match: ["jaw", "neck", "arm", "back", "shoulder"] },
          { id: "palp", text: "Palpitations", match: ["palpitation"] },
        ],
        explanation:
          "Atypical presentations are more common in women, older adults and people with diabetes, who are more likely to be missed. Unexplained dyspnea, fatigue or nausea in these patients should prompt an ECG and troponin.",
        keyFeature: { topic: "ischemic-heart-disease", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "single",
        update: "High-sensitivity troponin I is 34 ng/L at 0 hours and 88 ng/L at 2 hours. The female 99th percentile is 16 ng/L.",
        prompt: "Which is the most appropriate management? Select one.",
        options: [
          "Discharge with an outpatient stress test",
          "Treat as NSTEMI with ASA, anticoagulation and cardiology consultation for an invasive strategy",
          "Activate the cath lab for primary PCI",
          "Fibrinolysis",
          "CT coronary angiogram before admission",
        ],
        correct: 1,
        explanation:
          "A rising troponin with ischemic ST depression is NSTEMI. She needs antiplatelet therapy, anticoagulation dosed for her renal function and early angiography. Fibrinolysis has no role without ST elevation.",
        keyFeature: { topic: "ischemic-heart-disease", n: 3 },
        source: "esc-acs",
      },
    ],
    sources: [AHA_CP, ESC_ACS],
    ...meta,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "chest-pain-09",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Ache while clearing the driveway",
    stem:
      "A 52-year-old man presents at 16:00 with left chest pain that started at 13:30 while shovelling snow. It is a dull ache that eased when he rested but came back twice in the next hour. He has hypertension and dyslipidemia and smokes. His father had an MI at 50. HR 78, BP 146/88 mmHg, RR 16, SpO2 98% on room air, temperature 36.6°C. Pressing on the left parasternal chest wall reproduces some of his pain. ECG shows sinus rhythm with no ischemic changes.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features of his history that are concerning for ACS.",
        required: 3,
        accept: [
          { id: "exertion", text: "Onset with exertion (shovelling)", match: ["exertion", "exertional", "shovelling", "shoveling", "shovel", "exercise", "activity"] },
          { id: "rest", text: "Relief with rest", match: ["rest", "relieved", "eased"] },
          { id: "recurrent", text: "Recurrent or stuttering episodes", match: ["recurrent", "recurred", "returned", "came back", "stuttering", "crescendo", "episodes", "repeated"] },
          { id: "fhx", text: "Premature family history of MI", match: ["family history", "father"] },
          { id: "smoke", text: "Smoking", match: ["smoking", "smoker", "smoke"] },
          { id: "htn", text: "Hypertension and dyslipidemia", match: ["hypertension", "dyslipidemia", "cholesterol", "lipid", "htn"] },
          { id: "dull", text: "Dull, pressure-like quality", match: ["dull", "ache", "pressure"] },
        ],
        explanation:
          "Exertional onset with relief at rest and recurrent episodes are classic for angina. A premature family history, smoking, hypertension and dyslipidemia raise the pretest probability.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "A colleague suggests costochondritis because the pain is reproducible. Give ONE reason this reasoning is flawed.",
        required: 1,
        accept: [
          { id: "unreliable", text: "Chest wall tenderness is found in some patients with ACS and does not exclude it", match: ["does not exclude", "does not rule out", "not reliable", "unreliable", "occur in acs", "occurs in acs", "can occur", "cannot exclude", "cannot rule out", "doesn t rule out", "doesn t exclude", "present in acs", "seen in acs"] },
        ],
        explanation:
          "A meaningful minority of patients with MI have reproducible chest wall tenderness. Tenderness lowers the likelihood a little but cannot override a typical exertional history and risk factors.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "aha-chest-pain",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "His 0 hour high-sensitivity troponin is below the 99th percentile. List TWO further steps before any disposition decision.",
        required: 2,
        accept: [
          { id: "repeat", text: "Repeat troponin at the interval set by the local hs troponin protocol", match: ["repeat troponin", "serial troponin", "second troponin", "delta troponin", "troponin at 1", "troponin at 2", "troponin at 3", "repeat trop", "serial trop"] },
          { id: "ecg", text: "Repeat ECG, especially with any recurrent pain", match: ["repeat ecg", "serial ecg", "repeat ekg", "serial ekg", "ecg with pain"] },
          { id: "score", text: "Calculate a risk score such as HEART", match: ["heart score", "risk score", "heart pathway", "timi", "edacs", "risk stratif"] },
          { id: "asa", text: "Give ASA while the workup continues", match: ["asa", "aspirin"] },
        ],
        explanation:
          "His pain began only 2.5 hours before the first troponin, so a single value cannot rule out MI. Use a validated serial hs troponin protocol, repeat the ECG and apply a risk score.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "single",
        update: "His 2 hour troponin is unchanged and below the 99th percentile. The repeat ECG is unchanged. His HEART score is 5.",
        prompt: "Which disposition is most appropriate? Select one.",
        options: [
          "Discharge with no follow-up",
          "Discharge with family physician follow-up in 6 weeks",
          "Further cardiac evaluation, by observation or admission or by expedited cardiology assessment with testing within days",
          "Primary PCI",
          "Discharge with a proton pump inhibitor",
        ],
        correct: 2,
        explanation:
          "A HEART score of 4 to 6 is intermediate risk even with negative troponins. These patients need further evaluation, which may be observation with testing or rapid access cardiology follow-up. A score of 3 or less with negative serial troponins supports discharge without further testing.",
        keyFeature: { topic: "ischemic-heart-disease", n: 3 },
        source: "heart-pathway",
      },
    ],
    sources: [AHA_CP, ESC_ACS, HEART_PATHWAY],
    ...meta,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "chest-pain-10",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Fleeting sharp chest pains",
    stem:
      "A 38-year-old woman presents at 10:30 with 2 days of intermittent sharp left chest pains. Each lasts a few seconds. They are not related to exertion and come on when she twists or reaches. She has no medical history, does not smoke, has no family history of heart disease and uses a copper IUD. HR 72, BP 118/74 mmHg, RR 14, SpO2 99% on room air, temperature 36.6°C. Examination is normal. ECG is normal.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features of her pain history that make ACS less likely.",
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
        prompt: "Which TWO of the following are components of the HEART score? Select TWO.",
        options: [
          "Heart rate",
          "Hemoptysis",
          "ECG findings",
          "Age",
          "Estrogen use",
          "Hemoglobin",
          "Respiratory rate",
          "D-dimer",
        ],
        select: 2,
        correct: [2, 3],
        explanation:
          "HEART stands for History, ECG, Age, Risk factors and Troponin. Each scores 0 to 2. Heart rate and estrogen are PERC and Wells items, not HEART items.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "heart-score",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her pain began 50 hours ago. A high-sensitivity troponin is below the limit of detection.",
        prompt: "What is her HEART score? Select one.",
        options: ["0", "1", "2", "3", "4"],
        correct: 0,
        explanation:
          "Slightly suspicious history scores 0. Normal ECG scores 0. Age under 45 scores 0. No risk factors scores 0. A normal troponin scores 0. Her score is 0.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "heart-score",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO elements of a safe discharge plan for her.",
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
    title: "Chest pressure after a party",
    stem:
      "A 29-year-old man presents at 03:15 with central chest pressure and palpitations. They began 1 hour after he snorted cocaine at a party. HR 128, BP 178/104 mmHg, RR 22, SpO2 98% on room air, temperature 37.9°C. Weight 80 kg. He is agitated and diaphoretic. His pupils are 6 mm. ECG shows sinus tachycardia without ST elevation.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE serious causes of chest pain linked to cocaine use.",
        required: 3,
        accept: [
          { id: "acs", text: "Coronary vasospasm, ACS or MI", match: ["acs", "acute coronary", "myocardial infarction", "mi", "vasospasm", "ischemia", "ischaemia", "stemi"] },
          { id: "ad", text: "Aortic dissection", match: ["dissection", "aortic"] },
          { id: "ptx", text: "Pneumothorax or pneumomediastinum", match: ["pneumothorax", "pneumomediastinum", "ptx"] },
          { id: "arrhythmia", text: "Tachyarrhythmia", match: ["arrhythmia", "tachyarrhythmia", "svt", "vt", "ventricular tachycardia", "atrial fibrillation"] },
          { id: "myocarditis", text: "Myocarditis or cardiomyopathy", match: ["myocarditis", "cardiomyopathy"] },
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embol", "pulmonary embolism", "pe"] },
          { id: "endo", text: "Endocarditis with injection use", match: ["endocarditis"] },
        ],
        explanation:
          "Cocaine causes vasospasm, thrombosis and increased oxygen demand, so MI can occur in young patients without risk factors. It also raises the risk of dissection and barotrauma from inhalation.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-cocaine",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Name the first-line drug for his agitation, tachycardia and hypertension. Include the dose and route.",
        required: 1,
        accept: [
          { id: "lorazepam", text: "Lorazepam 1 to 2 mg IV, repeated as needed", match: ["lorazepam 1", "lorazepam 2", "lorazepam 1mg", "lorazepam 2mg", "ativan 1", "ativan 2"] },
          { id: "diazepam", text: "Diazepam 5 to 10 mg IV, repeated as needed", match: ["diazepam 5", "diazepam 10", "diazepam 5mg", "diazepam 10mg", "valium 5", "valium 10"] },
          { id: "midazolam", text: "Midazolam 2 to 5 mg IV or IM", match: ["midazolam 2", "midazolam 5", "midazolam 2mg", "midazolam 5mg", "midazolam 2.5", "midazolam 3", "midazolam 4"] },
        ],
        unacceptable: [
          { text: "A beta blocker in acute cocaine toxicity", match: ["metoprolol", "propranolol", "esmolol", "atenolol"], dangerous: true },
          { text: "Haloperidol as first line", match: ["haloperidol", "haldol"] },
        ],
        explanation:
          "Benzodiazepines reduce central sympathetic outflow and treat agitation, tachycardia and hypertension together. Beta blockers can leave alpha stimulation unopposed and worsen coronary spasm and hypertension in the acute phase.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-cocaine",
      },
      {
        id: "q3",
        kind: "short",
        update: "He is calmer after two doses. HR 104, BP 164/96 mmHg. He still has chest pressure.",
        prompt: "List TWO other treatments for suspected cocaine-associated chest pain.",
        required: 2,
        accept: [
          ASA_ITEM,
          { id: "ntg", text: "Nitroglycerin SL or infusion", match: ["nitroglycerin", "ntg", "nitro", "nitrate"] },
          { id: "ccb", text: "Calcium channel blocker for persistent hypertension or spasm", match: ["calcium channel", "verapamil", "diltiazem", "ccb"] },
          { id: "phentolamine", text: "Phentolamine for refractory hypertension", match: ["phentolamine"] },
          { id: "cool", text: "Active cooling if hyperthermia develops", match: ["cooling", "cool"] },
          { id: "benzo", text: "Further benzodiazepine doses", match: ["benzodiazepine", "lorazepam", "diazepam", "midazolam"] },
        ],
        unacceptable: [
          { text: "Beta blocker", match: ["metoprolol", "propranolol", "esmolol", "atenolol"], dangerous: true },
        ],
        explanation:
          "ASA and nitroglycerin are appropriate as in other chest pain. Calcium channel blockers or phentolamine treat persistent hypertension and spasm. Avoid beta blockers acutely.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "aha-cocaine",
      },
      {
        id: "q4",
        kind: "short",
        update: "Two high-sensitivity troponins 3 hours apart are normal. ECGs are unchanged. His pain has resolved.",
        prompt: "List TWO elements of his discharge plan.",
        required: 2,
        accept: [
          { id: "cessation", text: "Counselling on stopping cocaine and referral to addiction services", match: ["cessation", "stop cocaine", "abstain", "abstinence", "addiction", "substance use", "harm reduction", "counsel", "counselling"] },
          { id: "return", text: "Return instructions for recurrent pain", match: ["return", "come back", "red flag", "worsen"] },
          { id: "fu", text: "Follow-up with a family physician", match: ["follow up", "family physician", "family doctor", "primary care"] },
          { id: "naloxone", text: "Naloxone kit and fentanyl contamination warning", match: ["naloxone", "fentanyl"] },
        ],
        explanation:
          "Continued cocaine use drives recurrent chest pain and MI. Brief intervention with referral and harm reduction, including a naloxone kit because of fentanyl contamination, belongs in the plan.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-cocaine",
      },
    ],
    sources: [COCAINE],
    ...meta,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "chest-pain-12",
    topic: "chest-pain",
    title: "Chest pain after vomiting",
    stem:
      "A 48-year-old man presents at 01:20 with severe retrosternal and upper abdominal pain. It began after repeated forceful vomiting following a night of heavy drinking. He is short of breath. HR 124, BP 102/64 mmHg, RR 28, SpO2 93% on room air, temperature 38.2°C. Weight 86 kg. You feel crepitus at the base of his neck. He has epigastric tenderness. ECG shows sinus tachycardia without ST changes.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis? List ONE.",
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
        prompt: "List TWO findings in the history or examination that support this diagnosis.",
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
        prompt: "Which is the most appropriate confirmatory imaging? Select one.",
        options: [
          "Upper endoscopy",
          "CT chest with oral water-soluble contrast",
          "Barium swallow",
          "Abdominal ultrasound",
          "Chest X-ray alone",
        ],
        correct: 1,
        explanation:
          "CT with oral water-soluble contrast shows the leak, mediastinal air and collections. Barium causes mediastinitis if it leaks. Chest X-ray may show pneumomediastinum or effusion but can be normal early.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "wses-esophagus",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT shows a distal esophageal leak with pneumomediastinum and a left pleural effusion.",
        prompt: "List THREE immediate management steps.",
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
    title: "Pain worse lying down",
    stem:
      "A 34-year-old man presents with 2 days of sharp central chest pain that is worse lying flat and better sitting forward. He had a cold 1 week ago. HR 102, BP 124/78 mmHg, RR 18, SpO2 98% on room air, temperature 37.9°C. Weight 82 kg. A scratchy three-component sound is heard at the left sternal border. ECG: diffuse concave ST elevation in I, II, aVL, aVF and V2 to V6 with PR depression, PR elevation in aVR and no reciprocal ST depression.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that favour acute pericarditis over STEMI.",
        required: 3,
        accept: [
          { id: "position", text: "Pain worse lying flat and better sitting forward", match: ["position", "positional", "lying", "sitting forward", "leaning forward", "sit forward"] },
          { id: "sharp", text: "Sharp or pleuritic pain", match: ["sharp", "pleuritic"] },
          { id: "rub", text: "Pericardial friction rub", match: ["rub", "friction"] },
          { id: "diffuse", text: "Diffuse ST elevation not in one coronary territory", match: ["diffuse", "widespread", "not in one territory", "multiple territories", "not territorial"] },
          { id: "pr", text: "PR depression, with PR elevation in aVR", match: ["pr depression", "pr elevation", "pr segment"] },
          { id: "norecip", text: "No reciprocal ST depression", match: ["no reciprocal", "absent reciprocal", "absence of reciprocal", "lack of reciprocal", "without reciprocal"] },
          { id: "concave", text: "Concave ST elevation", match: ["concave"] },
          { id: "viral", text: "Recent viral illness", match: ["viral", "cold", "uri", "prodrome"] },
          { id: "young", text: "Young age without risk factors", match: ["young", "younger"] },
        ],
        explanation:
          "Positional pleuritic pain, a rub and a recent viral illness point to pericarditis. On the ECG, diffuse concave ST elevation with PR depression and no reciprocal change favours pericarditis. Reciprocal depression or a single territory suggests STEMI.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-pericardial",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO investigations to look for complications of pericarditis.",
        required: 2,
        accept: [
          { id: "echo", text: "Bedside ultrasound or echocardiogram for effusion and tamponade", match: ["echo", "echocardiogram", "pocus", "ultrasound", "tte"] },
          { id: "trop", text: "Troponin for myopericarditis", match: ["troponin", "trop"] },
          { id: "crp", text: "CRP to track inflammation", match: ["crp", "c reactive", "esr"] },
          { id: "cxr", text: "Chest X-ray", match: ["chest x ray", "cxr", "x ray"] },
          { id: "cbc", text: "CBC and creatinine", match: ["cbc", "creatinine", "white count", "wbc"] },
        ],
        explanation:
          "Echo identifies an effusion and signs of tamponade. Troponin identifies myocardial involvement, which changes disposition. CRP supports the diagnosis and guides duration of treatment.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pericardial",
      },
      {
        id: "q3",
        kind: "menu",
        update: "Bedside ultrasound shows a small effusion without tamponade. Troponin is normal.",
        prompt: "Which TWO medications would you prescribe? Select TWO.",
        options: [
          "Ibuprofen 600 mg PO three times daily with gastric protection",
          "Ibuprofen 200 mg PO once daily",
          "Colchicine 0.5 mg PO twice daily for at least 3 months",
          "Colchicine 1.2 mg PO, then 0.6 mg one hour later",
          "Prednisone 50 mg PO daily as first line",
          "Warfarin",
          "Metoprolol 25 mg PO twice daily",
          "Acetaminophen alone",
        ],
        select: 2,
        correct: [0, 2],
        explanation:
          "First-line therapy is a high-dose NSAID or ASA plus colchicine. Colchicine 0.5 mg twice daily, or once daily under 70 kg, for at least 3 months roughly halves recurrence. Steroids as first line increase recurrence. The gout loading regimen is not used.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-myo-peri-2025",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List THREE features in a patient with pericarditis that would lead you to admit rather than discharge.",
        required: 3,
        accept: [
          { id: "fever", text: "Fever above 38°C", match: ["fever", "temperature", "febrile"] },
          { id: "subacute", text: "Subacute onset over days to weeks", match: ["subacute", "insidious", "over weeks", "several weeks"] },
          { id: "effusion", text: "Large effusion over 20 mm", match: ["large effusion", "large pericardial effusion", "20 mm", "effusion over 20"] },
          { id: "tamponade", text: "Tamponade", match: ["tamponade"] },
          { id: "nsaid", text: "No response to NSAID after about 1 week", match: ["no response", "not responding", "nsaid failure", "failure of nsaid", "failed nsaid", "refractory"] },
          { id: "immuno", text: "Immunosuppression", match: ["immunosuppress", "immunocompromised", "immunosuppression"] },
          { id: "anticoag", text: "Oral anticoagulant use", match: ["anticoagula", "anticoagulant", "anticoagulation", "warfarin", "doac"] },
          { id: "trauma", text: "Trauma", match: ["trauma"] },
          { id: "myo", text: "Elevated troponin suggesting myopericarditis", match: ["troponin", "myopericarditis", "myocarditis"] },
        ],
        explanation:
          "These are the high-risk features that predict a specific cause or complications. Without them, most patients with idiopathic pericarditis can be treated as outpatients with early follow-up.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-pericardial",
      },
    ],
    sources: [ESC_PERI, ESC_PERI_2025],
    ...meta,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "chest-pain-14",
    topic: "chest-pain",
    title: "Pain-free after two episodes",
    stem:
      "A 57-year-old woman presents at 09:00 after two episodes of central chest pressure in the last 24 hours. Each lasted about 15 minutes. The last was at 06:30 while she walked her dog. She is pain free now. She has hypertension and smokes. HR 70, BP 138/82 mmHg, RR 14, SpO2 98% on room air, temperature 36.5°C. ECG: biphasic T waves in V2 and V3, first positive then negative, with preserved R wave progression, no Q waves and isoelectric ST segments. High-sensitivity troponin I at 0 hours is 9 ng/L. The female 99th percentile is 16 ng/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Name the ECG pattern and the coronary lesion it predicts.",
        required: 2,
        accept: [
          { id: "wellens", text: "Wellens pattern (type A)", match: ["wellen", "wellens", "wellen s"] },
          { id: "lad", text: "Critical proximal left anterior descending stenosis", match: ["lad", "left anterior descending"] },
        ],
        explanation:
          "Biphasic or deeply inverted T waves in V2 and V3 in a pain-free patient after angina is Wellens pattern. It signals a critical proximal LAD lesion at high risk of anterior MI within days.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "aha-chest-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which is the most appropriate next step? Select one.",
        options: [
          "Exercise stress test before discharge",
          "Discharge with outpatient cardiology referral because the troponin is normal",
          "Admit, start ASA and anticoagulation, and arrange early coronary angiography",
          "Activate the cath lab for primary PCI",
          "CT pulmonary angiogram",
        ],
        correct: 2,
        explanation:
          "Wellens pattern with recent angina is high-risk unstable angina whatever the troponin. Stress testing can provoke infarction. She needs admission, antithrombotic therapy and early angiography. Primary PCI is for ongoing occlusion.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO findings in this case that should NOT reassure you.",
        required: 2,
        accept: [
          { id: "trop", text: "Normal troponin", match: ["troponin", "trop"] },
          { id: "painfree", text: "Being pain free now", match: ["pain free", "no pain", "pain resolved", "asymptomatic"] },
          { id: "st", text: "No ST elevation or depression", match: ["no st", "isoelectric", "st segment", "no st elevation"] },
          { id: "vitals", text: "Normal vital signs", match: ["vital", "normal hr", "normal bp"] },
          { id: "brief", text: "Short episodes of 15 minutes", match: ["short", "brief", "15 minute"] },
        ],
        explanation:
          "In unstable angina the troponin is often normal and the patient pain free between episodes. The ST segments are normal in Wellens pattern. None of these lowers her risk.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List THREE other risk factors for coronary disease you would ask her about.",
        required: 3,
        accept: [
          { id: "preg", text: "Preeclampsia or gestational diabetes in past pregnancies", match: ["preeclampsia", "pre eclampsia", "gestational", "pregnancy"] },
          { id: "dm", text: "Diabetes", match: ["diabetes", "diabetic", "dm", "a1c"] },
          { id: "lipids", text: "Dyslipidemia", match: ["dyslipidemia", "cholesterol", "lipid", "hyperlipidemia"] },
          { id: "fhx", text: "Premature family history", match: ["family history", "family"] },
          { id: "ckd", text: "Chronic kidney disease", match: ["ckd", "kidney", "renal"] },
          { id: "cad", text: "Known coronary or vascular disease", match: ["known cad", "prior mi", "previous mi", "vascular disease", "stroke", "peripheral arterial", "pad", "coronary disease"] },
          { id: "autoimmune", text: "Inflammatory disease such as lupus or rheumatoid arthritis", match: ["lupus", "sle", "rheumatoid", "inflammatory", "autoimmune"] },
          { id: "meno", text: "Early menopause", match: ["menopause"] },
          { id: "hiv", text: "HIV", match: ["hiv"] },
          { id: "obesity", text: "Obesity and inactivity", match: ["obesity", "obese", "bmi", "inactivity", "sedentary"] },
          { id: "cocaine", text: "Cocaine or stimulant use", match: ["cocaine", "stimulant", "amphetamine"] },
        ],
        explanation:
          "Beyond the classic factors, pregnancy complications, early menopause, inflammatory disease, HIV and CKD raise coronary risk in women and are often missed.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "aha-chest-pain",
      },
    ],
    sources: [AHA_CP, ESC_ACS],
    ...meta,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "chest-pain-15",
    topic: "chest-pain",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Crushing pain in a snowstorm",
    stem:
      "A 79-year-old man presents at 20:05 to a rural hospital with 90 minutes of crushing chest pain. The nearest PCI centre is 3 hours away by road, and air transport is grounded by a snowstorm. He has hypertension. Weight 74 kg. HR 96, BP 152/90 mmHg, RR 20, SpO2 95% on room air, temperature 36.6°C. ECG at 20:09: 3 mm ST elevation in V1 to V5 with reciprocal inferior ST depression. He has chewed ASA 160 mg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE absolute contraindications to fibrinolysis that you would ask him about.",
        required: 3,
        accept: [
          { id: "ich", text: "Any prior intracranial hemorrhage", match: ["intracranial hemorrhage", "intracranial haemorrhage", "ich", "brain bleed", "hemorrhagic stroke"] },
          { id: "stroke", text: "Ischemic stroke within 3 months", match: ["ischemic stroke", "ischaemic stroke", "stroke"] },
          { id: "lesion", text: "Known cerebral vascular lesion or intracranial tumour", match: ["avm", "aneurysm", "vascular lesion", "tumour", "tumor", "neoplasm", "malformation"] },
          { id: "ad", text: "Suspected aortic dissection", match: ["dissection"] },
          { id: "bleed", text: "Active bleeding or bleeding diathesis", match: ["active bleed", "bleeding", "bleed", "diathesis"] },
          { id: "trauma", text: "Significant head or facial trauma within 3 months", match: ["head trauma", "head injury", "facial trauma", "trauma"] },
          { id: "surgery", text: "Intracranial or spinal surgery within 2 months", match: ["intracranial surgery", "spinal surgery", "neurosurgery", "brain surgery", "surgery"] },
          { id: "htn", text: "Severe uncontrolled hypertension unresponsive to treatment", match: ["uncontrolled hypertension", "severe hypertension", "uncontrolled bp"] },
        ],
        explanation:
          "Ask these before giving a lytic. Prior hemorrhage, recent stroke or head injury, intracranial lesions, dissection and active bleeding all carry unacceptable risk of fatal bleeding. Lists differ slightly between guidelines. The ESC list also includes major surgery or trauma in the past month.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "esc-acs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which reperfusion strategy is most appropriate? Select one.",
        options: [
          "Transfer by road for primary PCI",
          "Fibrinolysis within 30 minutes of arrival, then transfer to the PCI centre",
          "Heparin now and transfer once the weather clears",
          "Fibrinolysis only if pain persists at 12 hours",
          "Medical therapy without reperfusion because of his age",
        ],
        correct: 1,
        explanation:
          "When first medical contact to device time will exceed 120 minutes, give fibrinolysis within 30 minutes of arrival. Transfer for angiography within 2 to 24 hours, or immediately for rescue PCI if lysis fails. Age alone is not a reason to withhold reperfusion.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q3",
        kind: "menu",
        update: "He has no contraindications.",
        prompt: "Which THREE medications and doses are correct for him? Select THREE.",
        options: [
          "Tenecteplase 40 mg IV bolus",
          "Tenecteplase 20 mg IV bolus",
          "Tenecteplase 50 mg IV bolus",
          "Clopidogrel 300 mg PO",
          "Clopidogrel 75 mg PO",
          "Ticagrelor 180 mg PO",
          "Enoxaparin 30 mg IV bolus, then 1 mg/kg SC every 12 hours",
          "Enoxaparin 0.75 mg/kg SC every 12 hours with no IV bolus",
          "Prasugrel 60 mg PO",
        ],
        select: 3,
        correct: [1, 4, 7],
        explanation:
          "At 75 or older, half-dose tenecteplase removed the excess intracranial hemorrhage seen in STREAM. The ESC recommends it and many Canadian protocols use it. Full dose for 74 kg would be 40 mg, so he gets 20 mg. Give clopidogrel 75 mg without a load. Give enoxaparin 0.75 mg/kg every 12 hours with no IV bolus, which is about 55 mg.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "stream",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO complications you would monitor for after fibrinolysis.",
        required: 2,
        accept: [
          { id: "ich", text: "Intracranial hemorrhage", match: ["intracranial", "ich", "brain bleed", "neuro change", "decreased loc"] },
          { id: "bleed", text: "Other bleeding such as GI or access site", match: ["bleeding", "bleed", "hemorrhage", "haemorrhage"] },
          { id: "arrhythmia", text: "Reperfusion arrhythmias such as accelerated idioventricular rhythm", match: ["arrhythmia", "idioventricular", "aivr", "vt", "ventricular tachycardia", "ventricular fibrillation", "vf"] },
          { id: "failed", text: "Failed reperfusion or reocclusion", match: ["failed reperfusion", "reocclusion", "re occlusion", "persistent st", "ongoing pain", "st resolution"] },
          { id: "hypotension", text: "Hypotension or cardiogenic shock", match: ["hypotension", "shock"] },
          { id: "allergy", text: "Allergic reaction", match: ["allergic", "anaphylaxi", "anaphylaxis"] },
          { id: "mech", text: "Mechanical complications such as free wall rupture", match: ["rupture", "tamponade", "mechanical"] },
        ],
        explanation:
          "Bleeding, especially intracranial, is the main risk. Accelerated idioventricular rhythm is common and benign. Persistent pain or ST elevation at 60 to 90 minutes means failed lysis and a need for rescue PCI.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "ccs-stemi",
      },
    ],
    sources: [CCS_STEMI, STREAM, ESC_ACS],
    ...meta,
  },
];
