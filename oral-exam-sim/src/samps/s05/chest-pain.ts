// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const meta = { reviewed: true, author: "Preceptor", version: 1 };

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
const BTS: Source = {
  id: "bts-pleural",
  citation: "Roberts ME and colleagues. British Thoracic Society guideline for pleural disease. Thorax. 2023.",
};
const COCAINE: Source = {
  id: "aha-cocaine",
  citation: "McCord J and colleagues. Management of cocaine-associated chest pain and myocardial infarction. AHA scientific statement. Circulation. 2008.",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support. 10th edition. 2018.",
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
    title: "Pressure and nausea at dawn",
    stem:
      "A 58-year-old man walks into triage at 05:40 with 40 minutes of heavy central chest pressure spreading to his jaw, with nausea and sweating. He smokes and has type 2 diabetes. He arrives at a community hospital without a cardiac catheterization lab. The triage nurse begins a full history.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What actions should happen within 10 minutes, before the history is complete?",
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
          "ECG shows 2 mm ST elevation in II, III and aVF with ST depression in I and aVL. Pulse 54/minute, BP 88/56 mmHg. Lungs are clear. The JVP is elevated.",
        prompt: "What are the next steps in assessment or management?",
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
          "V4R shows 1.5 mm ST elevation. After 1 L of normal saline, the pulse is 68/minute and BP is 112/70 mmHg. The nearest PCI centre is 150 minutes away by road. There are no contraindications to fibrinolysis. Weight 82 kg. He received ASA at triage.",
        prompt: "Which of the following medications should he receive now in this emergency department?",
        options: [
          "Clopidogrel 300 mg PO",
          "Clopidogrel 75 mg PO",
          "Enoxaparin 30 mg IV, then 1 mg/kg SC twice daily",
          "Enoxaparin 0.75 mg/kg SC every 12 hours, no IV bolus",
          "Metoprolol 5 mg IV bolus",
          "Prasugrel 60 mg PO loading dose",
          "Tenecteplase 40 mg IV bolus",
          "Tenecteplase 45 mg IV bolus",
          "Tenecteplase 50 mg IV bolus",
          "Ticagrelor 180 mg PO",
        ],
        select: 3,
        correct: [0, 2, 7],
        explanation:
          "When PCI cannot happen within 120 minutes of first medical contact, give fibrinolysis within 30 minutes. Tenecteplase for 80 to 89 kg is 45 mg. Clopidogrel 300 mg is the P2Y12 inhibitor studied with fibrinolysis in patients 75 or younger. Enoxaparin with an IV bolus is used under 75. Had he stayed in shock, transfer for primary PCI would be preferred whatever the delay.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What findings at 60 to 90 minutes after tenecteplase indicate failed reperfusion and a need for rescue PCI?",
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
      "A 66-year-old woman presents at 14:20 with 90 minutes of chest discomfort and shortness of breath. She describes a pressure she cannot localize, with nausea. She has hypertension and dyslipidemia and is a former smoker. ECG: sinus rhythm, 2 mm horizontal ST depression in V1 to V3 with tall R waves and upright T waves in V2 and V3. There is no ST elevation in the standard 12 leads.",
    vitals: { temperature: "36.6°C", pulse: "92/minute", resp: "20/minute", bp: "142/84 mmHg", o2sat: "95% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most concerning ECG diagnosis?",
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
        prompt: "What additional ECG step, naming the leads, would you take to confirm it?",
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
        prompt: "Which of the following is the most appropriate management now?",
        options: [
          "Activate the cath lab for primary PCI",
          "CT pulmonary angiogram",
          "Exercise stress test before discharge",
          "Heparin and angiography within 72 hours",
          "Serial troponins and NSTEMI admission",
        ],
        correct: 0,
        explanation:
          "Posterior STEMI is managed as STEMI with emergency reperfusion. Treating it as NSTEMI delays opening an occluded circumflex or right coronary artery.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What medications, with doses, would you give before she goes to the cath lab?",
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
        update: "Her first high-sensitivity troponin is below the 99th percentile.",
        prompt: "Why does this not change your plan?",
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
    title: "Sudden breathlessness while coughing",
    stem:
      "A 46-year-old man with severe COPD arrives by ambulance with sudden right-sided chest pain and severe shortness of breath that began 30 minutes ago during a coughing fit. He is agitated. His trachea is deviated to the left. Breath sounds are absent on the right, the right chest is hyperresonant and his neck veins are distended.",
    vitals: { temperature: "36.9°C", pulse: "132/minute", resp: "36/minute", bp: "78/44 mmHg", o2sat: "82% on a non-rebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
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
        prompt: "Which of the following is the most appropriate immediate action for this patient?",
        options: [
          "Nebulized salbutamol and ipratropium",
          "Needle decompression of the left chest",
          "Needle or finger decompression of the right chest",
          "Portable chest X-ray before any procedure",
          "Rapid sequence intubation",
        ],
        correct: 2,
        explanation:
          "Decompress without waiting for imaging. Intubating first and ventilating with positive pressure can precipitate arrest.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "bts-pleural",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the acceptable sites for needle decompression in an adult?",
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
        update: "After decompression, the pulse is 108/minute, BP is 112/70 mmHg and O2 sat is 91%.",
        prompt: "What are the next steps?",
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
    title: "Ache while clearing the driveway",
    stem:
      "A 52-year-old man presents at 16:00 with left chest pain that started at 13:30 while shovelling snow. It is a dull ache that eased when he rested but came back twice in the next hour. He has hypertension and dyslipidemia and smokes. His father had an MI at 50. Pressing on the left parasternal chest wall reproduces some of his pain. ECG shows sinus rhythm with no ischemic changes.",
    vitals: { temperature: "36.6°C", pulse: "78/minute", resp: "16/minute", bp: "146/88 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features of his history are concerning for ACS?",
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
        update: "A colleague suggests costochondritis because the pain is reproducible.",
        prompt: "Why is this reasoning flawed?",
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
        update: "His 0 hour high-sensitivity troponin is below the 99th percentile.",
        prompt: "What further steps are needed before any disposition decision?",
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
        prompt: "Which of the following dispositions is most appropriate for him?",
        options: [
          "Activate the cath lab for primary PCI",
          "Discharge with a proton pump inhibitor",
          "Discharge with family physician follow-up in 6 weeks",
          "Discharge with no follow-up arranged",
          "Observation, admission or expedited cardiology testing",
        ],
        correct: 4,
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
    title: "Chest pressure after a party",
    stem:
      "A 29-year-old man presents at 03:15 with central chest pressure and palpitations. They began 1 hour after he snorted cocaine at a party. He is agitated and diaphoretic. His pupils are 6 mm. ECG shows sinus tachycardia without ST elevation.",
    vitals: { temperature: "37.9°C", pulse: "128/minute", resp: "22/minute", bp: "178/104 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What serious causes of chest pain are linked to cocaine use?",
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
        prompt: "What is the first-line drug, with dose and route, for his agitation, tachycardia and hypertension?",
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
        update: "He is calmer after two doses. Pulse 104/minute, BP 164/96 mmHg. He still has chest pressure.",
        prompt: "What other treatments would you give for suspected cocaine-associated chest pain?",
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
        prompt: "What are the elements of his discharge plan?",
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
    title: "Pain-free after two episodes",
    stem:
      "A 57-year-old woman presents at 09:00 after two episodes of central chest pressure in the last 24 hours. Each lasted about 15 minutes. The last was at 06:30 while she walked her dog. She is pain free now. She has hypertension and smokes. ECG: biphasic T waves in V2 and V3, first positive then negative, with preserved R wave progression, no Q waves and isoelectric ST segments. High-sensitivity troponin I at 0 hours is 9 ng/L. The female 99th percentile is 16 ng/L.",
    vitals: { temperature: "36.5°C", pulse: "70/minute", resp: "14/minute", bp: "138/82 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the ECG pattern, and which coronary lesion does it predict?",
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
        prompt: "Which of the following is the most appropriate next step for her?",
        options: [
          "Activate the cath lab for primary PCI",
          "Admit, ASA, anticoagulation and early angiography",
          "CT pulmonary angiogram before discharge",
          "Discharge with outpatient cardiology clinic referral",
          "Exercise stress test before discharge",
        ],
        correct: 1,
        explanation:
          "Wellens pattern with recent angina is high-risk unstable angina whatever the troponin. Stress testing can provoke infarction. She needs admission, antithrombotic therapy and early angiography. Primary PCI is for ongoing occlusion.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "esc-acs",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What findings in this case should NOT reassure you?",
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
        prompt: "What other risk factors for coronary disease would you ask her about?",
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
