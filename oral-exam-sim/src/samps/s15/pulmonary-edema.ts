// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  ccs2017: {
    id: "ccs-hf-2017",
    citation:
      "Ezekowitz JA, O'Meara E, McDonald MA, et al. 2017 Comprehensive update of the Canadian Cardiovascular Society guidelines for the management of heart failure. Can J Cardiol. 2017.",
  },
  ccs2021: {
    id: "ccs-hf-2021",
    citation:
      "McDonald M, Virani S, Chan M, et al. CCS/CHFS heart failure guidelines update. Defining a new pharmacologic standard of care for heart failure with reduced ejection fraction. Can J Cardiol. 2021.",
  },
  ersAts: {
    id: "ers-ats-niv",
    citation:
      "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.",
  },
  esc: {
    id: "esc-hf-2021",
    citation: "McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021.",
  },
  dose: {
    id: "dose-trial",
    citation: "Felker GM, Lee KL, Bull DA, et al. Diuretic strategies in patients with acute decompensated heart failure. N Engl J Med. 2011.",
  },
  ccsStemi: {
    id: "ccs-stemi",
    citation:
      "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society and Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
  },
  ccsAf: {
    id: "ccs-af",
    citation:
      "Andrade JG, Aguilar M, Atzema C, et al. The 2020 Canadian Cardiovascular Society and Canadian Heart Rhythm Society comprehensive guidelines for the management of atrial fibrillation. Can J Cardiol. 2020.",
  },
  ohfrs: {
    id: "ohfrs",
    citation:
      "Stiell IG, Clement CM, Brison RJ, et al. A risk scoring system to identify emergency department patients with heart failure at high risk for serious adverse events. Acad Emerg Med. 2013. With the prospective validation, Stiell IG, et al. Acad Emerg Med. 2017.",
  },
  cbs: {
    id: "cbs-guide",
    citation: "Canadian Blood Services. Clinical Guide to Transfusion. Chapter on adverse transfusion reactions.",
  },
  escValve: {
    id: "esc-valve",
    citation: "Vahanian A, Beyersdorf F, Praz F, et al. 2021 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J. 2022.",
  },
  ahaIe: {
    id: "aha-ie",
    citation:
      "Baddour LM, Wilson WR, Bayer AS, et al. Infective endocarditis in adults. Diagnosis, antimicrobial therapy, and management of complications. A scientific statement from the American Heart Association. Circulation. 2015.",
  },
  ppcm: {
    id: "esc-ppcm",
    citation:
      "Bauersachs J, König T, van der Meer P, et al. Pathophysiology, diagnosis and management of peripartum cardiomyopathy. A position statement from the Heart Failure Association of the European Society of Cardiology Study Group on peripartum cardiomyopathy. Eur J Heart Fail. 2019.",
  },
  tintinalli: {
    id: "tintinalli",
    citation:
      "Tintinalli JE, et al, editors. Tintinalli's Emergency Medicine: A Comprehensive Study Guide. McGraw Hill. Chapters on acute heart failure, valvular emergencies and airway management.",
  },
  rosen: {
    id: "rosen",
    citation:
      "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. Elsevier. Chapters on heart failure, renal failure and hyperkalemia.",
  },
} satisfies Record<string, Source>;

const NIV = ["cpap", "bipap", "bilevel", "noninvasive", "niv", "positive pressure"];
const NTG = ["nitroglycerin", "nitro", "ntg", "glyceryl trinitrate", "nitrate"];

export const PULMONARY_EDEMA_SAMPS: Samp[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-01",
    topic: "pulmonary-edema",
    title: "Woken at night unable to breathe",
    stem:
      "A 72 year old woman woke at 0300 acutely short of breath. She has hypertension and type 2 diabetes. On arrival by ambulance she is sitting bolt upright, diaphoretic and speaking in 2 word phrases. BP 214/118, HR 124 sinus, RR 36, T 36.6 C, SpO2 81% on room air and 88% on a non-rebreather mask. She is alert. Crackles extend to the mid lung fields. Weight 84 kg. The ECG shows sinus tachycardia with left ventricular hypertrophy and no ST elevation.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE immediate treatments.",
        accept: [
          { id: "niv", text: "Noninvasive ventilation with CPAP or BiPAP", match: NIV },
          { id: "ntg", text: "High dose nitroglycerin, sublingual then IV infusion", match: NTG },
          { id: "upright", text: "Sit upright", match: ["upright", "sit up"] },
          { id: "o2", text: "Supplemental oxygen", match: ["oxygen"] },
          { id: "furo", text: "IV furosemide", match: ["furosemide", "lasix", "loop diuretic"] },
          { id: "mon", text: "Cardiac monitoring and IV access", match: ["monitoring", "iv access"] },
        ],
        unacceptable: [
          { text: "Morphine", match: ["morphine"] },
          { text: "IV fluid bolus", match: ["fluid bolus", "saline bolus"], dangerous: true },
        ],
        explanation:
          "This is sympathetic crashing acute pulmonary edema. Noninvasive ventilation reduces intubation and relieves dyspnea, and high dose nitrates rapidly lower preload and afterload. Diuretics help but act more slowly and many of these patients are not volume overloaded. Morphine is associated with harm and is not recommended routinely.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ers-ats-niv",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which nitroglycerin regimen is most appropriate? Select one.",
        options: [
          "Nitroglycerin patch 0.4 mg/h",
          "Nitroglycerin 0.4 mg sublingual every 5 minutes while an IV infusion is started at about 50 to 100 mcg/min and titrated up rapidly",
          "Nitroglycerin IV at 5 mcg/min, increased by 5 mcg/min every 10 minutes",
          "Nitroglycerin 0.4 mg sublingual once, then reassess in 1 hour",
          "Hold nitroglycerin until the chest X-ray confirms pulmonary edema",
        ],
        correct: 1,
        explanation:
          "In hypertensive pulmonary edema the benefit of nitrates depends on getting an adequate dose in quickly. Repeated sublingual doses bridge to an infusion that is titrated up to effect while watching the BP. A patch or a slow chest pain style titration is too little, too late.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "short",
        required: 4,
        update: "Thirty minutes later on BiPAP and a nitroglycerin infusion, she is calmer. BP 156/88, HR 102, RR 24, SpO2 95%.",
        prompt: "List FOUR investigations to identify the cause of her pulmonary edema.",
        accept: [
          { id: "ecg", text: "Serial ECGs for ischemia or arrhythmia", match: ["ecg", "electrocardiogram"] },
          { id: "trop", text: "Troponin, repeated", match: ["troponin"] },
          { id: "cxr", text: "Chest X-ray", match: ["x ray", "cxr"] },
          { id: "bnp", text: "BNP or NT-proBNP", match: ["bnp"] },
          { id: "echo", text: "Bedside ultrasound or echocardiogram for LV function and valves", match: ["echo", "ultrasound", "pocus", "echocardiogram"] },
          { id: "cbc", text: "CBC for anemia", match: ["cbc", "hemoglobin", "anemia"] },
          { id: "lytes", text: "Electrolytes and creatinine", match: ["electrolyte", "creatinine", "renal function"] },
          { id: "tsh", text: "TSH", match: ["tsh", "thyroid"] },
          { id: "gas", text: "Blood gas", match: ["gas", "abg", "vbg"] },
          { id: "glucose", text: "Glucose", match: ["glucose"] },
          { id: "meds", text: "Medication and adherence history", match: ["adherence", "medication"] },
        ],
        explanation:
          "Once she is stabilizing, look for the trigger. Ischemia, arrhythmia, valve disease, renal failure, anemia, thyroid disease and nonadherence all change management. A bedside echo quickly shows LV function and severe valve lesions.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "ccs-hf-2017",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "Before starting BiPAP, list TWO contraindications you would check for.",
        accept: [
          { id: "loc", text: "Decreased level of consciousness or inability to protect the airway", match: ["consciousness", "gcs", "airway", "obtunded", "unresponsive"] },
          { id: "vomit", text: "Active vomiting or high aspiration risk", match: ["vomiting", "aspiration"] },
          { id: "shock", text: "Hemodynamic instability or shock", match: ["shock", "hypotension", "unstable", "instability"] },
          { id: "arrest", text: "Cardiac or respiratory arrest", match: ["arrest", "apnea"] },
          { id: "face", text: "Facial trauma, burns or deformity preventing a seal", match: ["facial", "face", "seal"] },
          { id: "secretions", text: "Copious secretions", match: ["secretion"] },
          { id: "coop", text: "Unable to cooperate or agitated", match: ["cooperate", "agitat", "agitated", "agitation"] },
          { id: "ptx", text: "Untreated pneumothorax", match: ["pneumothorax"] },
          { id: "gi", text: "Upper GI bleeding or recent upper airway or upper GI surgery", match: ["gi bleed", "surgery", "gi bleeding"] },
        ],
        explanation:
          "NIV needs a patient who can protect the airway, cooperate and keep a mask seal. Vomiting, reduced consciousness, arrest and shock favour intubation instead. She is alert and hypertensive, so she is an ideal NIV candidate.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ers-ats-niv",
      },
    ],
    sources: [S.ersAts, S.tintinalli, S.ccs2017],
    ...META,
  },

  /* 02 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-02",
    topic: "pulmonary-edema",
    alsoTopics: ["ischemic-heart-disease", "shock"],
    title: "Rural department, chest pressure and dyspnea",
    stem:
      "You work in a rural emergency department. The nearest PCI centre is 110 km away, about 80 minutes by land. A 64 year old man has 3 hours of chest pressure and is now very short of breath. BP 84/56, HR 116 sinus, RR 32, SpO2 86% on a non-rebreather mask. His skin is cool and mottled and he has crackles to the apices. Lactate 5.1 mmol/L. Weight 90 kg. The ECG shows ST elevation in V1 to V5. Paramedics gave ASA 160 mg chewed.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which reperfusion strategy is most appropriate? Select one.",
        options: [
          "Tenecteplase now and admit to your hospital",
          "Immediate transfer for primary PCI, activating the PCI centre now",
          "Admit and stabilize for 24 hours before transfer",
          "No reperfusion because cardiogenic shock is a contraindication",
          "CT pulmonary angiogram before deciding",
        ],
        correct: 1,
        explanation:
          "Patients with STEMI and cardiogenic shock benefit most from early mechanical revascularization, and fibrinolysis is less effective in shock. With about 80 minutes of transport, emergent transfer for primary PCI is preferred. CCS suggests considering fibrinolysis before transfer only when excessive delays to catheterization are expected. Keeping him in a non-PCI hospital is never appropriate.",
        keyFeature: { topic: "ischemic-heart-disease", n: 6 },
        source: "ccs-stemi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which vasoactive agent should be started first? Select one.",
        options: [
          "Norepinephrine infusion",
          "Dopamine infusion",
          "Phenylephrine infusion",
          "Nitroglycerin infusion",
          "Milrinone infusion",
          "Vasopressin infusion alone",
        ],
        correct: 0,
        explanation:
          "Norepinephrine is the preferred first vasopressor in cardiogenic shock. It restores perfusion pressure with fewer arrhythmias than dopamine. An inotrope such as dobutamine can be added once pressure is supported. Milrinone and nitrates worsen hypotension.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "esc-hf-2021",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "List TWO medications commonly given in STEMI or pulmonary edema that you would withhold in this patient.",
        accept: [
          { id: "ntg", text: "Nitroglycerin", match: [...NTG, "no nitro", "avoid nitro", "hold nitro", "withhold nitro", "no nitroglycerin", "avoid nitroglycerin", "hold nitroglycerin", "withhold nitroglycerin", "no nitrate", "avoid nitrate", "nitrate contraindicated", "nitroglycerin contraindicated", "nitro contraindicated", "nitrate avoided", "nitroglycerin withheld"] },
          { id: "bb", text: "Beta blocker such as metoprolol", match: ["beta blocker", "metoprolol", "bisoprolol", "atenolol", "blocker", "avoid beta blocker", "no beta blocker", "hold beta blocker", "withhold beta blocker", "no metoprolol", "avoid metoprolol", "hold metoprolol", "beta blocker contraindicated", "metoprolol contraindicated", "beta blocker withheld"] },
          { id: "morph", text: "Morphine", match: ["morphine", "opioid", "avoid morphine", "no morphine", "withhold morphine", "hold morphine", "avoid opioid", "morphine contraindicated", "morphine avoided"] },
          { id: "acei", text: "ACE inhibitor", match: ["ace inhibitor", "ramipril", "acei", "avoid ace inhibitor", "no ace inhibitor", "hold ace inhibitor", "ace inhibitor contraindicated"] },
          { id: "furo", text: "Large dose diuretic before perfusion is restored", match: ["furosemide", "diuretic", "avoid furosemide", "hold furosemide", "no furosemide", "avoid diuretic", "hold diuretic"] },
        ],
        unacceptable: [
          { text: "ASA", match: ["asa", "aspirin", "hold asa", "withhold asa", "avoid asa", "no asa", "hold aspirin", "withhold aspirin", "avoid aspirin"] },
          { text: "Heparin", match: ["heparin", "hold heparin", "withhold heparin", "avoid heparin", "no heparin"] },
        ],
        explanation:
          "Nitrates, beta blockers, ACE inhibitors and morphine all lower BP or contractility and can precipitate collapse in cardiogenic shock. Diuretics are given cautiously once perfusion improves. Antiplatelet and anticoagulant therapy for PCI should continue.",
        keyFeature: { topic: "ischemic-heart-disease", n: 7 },
        source: "ccs-stemi",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        update: "While awaiting the transport team his SpO2 falls to 80% and he is tiring. You decide to intubate.",
        prompt: "List THREE steps to reduce the risk of peri-intubation arrest.",
        accept: [
          { id: "preox", text: "Preoxygenate with NIV or BVM with PEEP", match: ["preoxygenat", "preoxygenate", "preoxygenation", "peep", "bvm"] },
          { id: "press", text: "Have norepinephrine running or push dose vasopressor ready", match: ["norepinephrine", "push dose", "vasopressor", "pressor", "phenylephrine", "epinephrine"] },
          { id: "induct", text: "Reduced dose of a hemodynamically stable induction agent such as ketamine or etomidate", match: ["ketamine", "etomidate", "reduced dose", "lower dose"] },
          { id: "avoidprop", text: "Avoid propofol or full dose midazolam", match: ["avoid propofol"] },
          { id: "operator", text: "Most experienced operator with video laryngoscopy", match: ["experienced", "video"] },
          { id: "position", text: "Head up positioning", match: ["head up", "upright", "ramp"] },
          { id: "arrest", text: "Pads on and resuscitation drugs ready", match: ["pad", "defibrillator"] },
          { id: "fast", text: "First pass success with a paralytic such as rocuronium", match: ["rocuronium", "paralytic", "succinylcholine"] },
        ],
        unacceptable: [{ text: "Propofol 2 mg/kg for induction", match: ["propofol 2 mg/kg"] }],
        explanation:
          "Intubating a patient in cardiogenic shock with pulmonary edema carries a high risk of arrest. Optimize oxygenation with PEEP, support pressure before induction, use a reduced dose of a hemodynamically neutral agent and aim for first pass success. Positive pressure also lowers preload, so be ready for hypotension.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "tintinalli",
      },
    ],
    sources: [S.ccsStemi, S.esc, S.tintinalli],
    ...META,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-03",
    topic: "pulmonary-edema",
    alsoTopics: ["asthma-copd", "sob"],
    title: "Wheezy older woman labelled with COPD",
    stem:
      "An 81 year old woman has a label of COPD but has never had spirometry. She quit smoking 30 years ago after 20 pack years. For 2 weeks she has had worsening exertional dyspnea and now wheezes at night. She has been sleeping in her recliner. Paramedics gave salbutamol with little effect. BP 168/94, HR 104 irregular, RR 26, T 36.8 C, SpO2 89% on room air. Weight 71 kg (66 kg at a clinic visit 1 month ago). She has expiratory wheeze, fine crackles at both bases and pitting edema to mid shin.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE features that suggest heart failure rather than a COPD exacerbation.",
        accept: [
          { id: "orth", text: "Orthopnea, sleeping in a recliner", match: ["orthopnea", "recliner", "sleeping upright", "pnd", "paroxysmal"] },
          { id: "wt", text: "Weight gain of 5 kg", match: ["weight"] },
          { id: "edema", text: "Peripheral pitting edema", match: ["edema", "pitting"] },
          { id: "crackles", text: "Bibasilar crackles", match: ["crackle", "rale"] },
          { id: "af", text: "Irregular rhythm suggesting atrial fibrillation", match: ["irregular", "atrial fibrillation", "af"] },
          { id: "salb", text: "Poor response to salbutamol", match: ["salbutamol", "bronchodilator"] },
          { id: "spiro", text: "No spirometry confirming COPD", match: ["spirometry", "pft", "no spirometry", "without spirometry", "no pft"] },
          { id: "htn", text: "Hypertension", match: ["hypertension", "hypertensive"] },
          { id: "nocturnal", text: "Nocturnal wheeze", match: ["nocturnal", "night"] },
        ],
        explanation:
          "Cardiac asthma is a common trap in older patients. Orthopnea, weight gain, edema, crackles and a new irregular rhythm point to heart failure. A COPD label without spirometry and a poor response to bronchodilators should make you question the diagnosis.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "ccs-hf-2017",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "List THREE tests that would help confirm heart failure in the emergency department.",
        accept: [
          { id: "bnp", text: "NT-proBNP or BNP", match: ["bnp"] },
          { id: "us", text: "Lung ultrasound for B lines", match: ["ultrasound", "b line", "pocus"] },
          { id: "echo", text: "Echocardiogram for LV function", match: ["echo", "echocardiogram"] },
          { id: "cxr", text: "Chest X-ray", match: ["x ray", "cxr"] },
          { id: "ecg", text: "ECG", match: ["ecg", "electrocardiogram"] },
        ],
        unacceptable: [{ text: "D-dimer to confirm heart failure", match: ["dimer"] }],
        explanation:
          "A normal NT-proBNP below 300 pg/mL makes acute heart failure unlikely, and age adjusted cut points help rule it in. Lung ultrasound B lines outperform the chest X-ray for interstitial edema. The ECG will clarify her irregular rhythm.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "ccs-hf-2017",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "NT-proBNP is 6400 pg/mL and the ECG shows atrial fibrillation at 104. List THREE initial treatments.",
        accept: [
          { id: "furo", text: "Furosemide 40 mg IV", match: ["furosemide", "lasix", "loop diuretic"] },
          { id: "ntg", text: "Nitroglycerin sublingual, topical or IV", match: NTG },
          { id: "niv", text: "CPAP or BiPAP if work of breathing increases", match: NIV },
          { id: "o2", text: "Oxygen titrated to SpO2 of about 92 to 96%", match: ["oxygen"] },
          { id: "upright", text: "Sit upright", match: ["upright"] },
          { id: "anticoag", text: "Anticoagulation for atrial fibrillation once stable", match: ["anticoagula", "anticoagulation", "apixaban", "heparin", "doac"] },
        ],
        unacceptable: [{ text: "Morphine", match: ["morphine"] }],
        explanation:
          "She is warm and wet with high BP, so a loop diuretic plus a nitrate is appropriate. NIV is added for increased work of breathing or hypoxemia despite oxygen. Her AF rate is modest and likely to settle as the edema improves.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ccs-hf-2017",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "List TWO other conditions besides heart failure that can present with new wheeze in an older adult.",
        accept: [
          { id: "pe", text: "Pulmonary embolism", match: ["embolism", "pe"] },
          { id: "pna", text: "Pneumonia", match: ["pneumonia"] },
          { id: "ana", text: "Anaphylaxis", match: ["anaphylaxis"] },
          { id: "fb", text: "Aspirated foreign body", match: ["foreign body"] },
          { id: "mass", text: "Endobronchial tumour or airway mass", match: ["tumour", "tumor", "mass", "cancer"] },
          { id: "copd", text: "COPD or late onset asthma", match: ["copd", "asthma"] },
          { id: "aspiration", text: "Aspiration", match: ["aspiration"] },
          { id: "upper", text: "Upper airway obstruction such as tracheal stenosis", match: ["upper airway", "stenosis", "stridor"] },
          { id: "ace", text: "Drug induced bronchospasm such as a beta blocker", match: ["beta blocker", "drug"] },
        ],
        explanation:
          "All that wheezes is not asthma. In older adults consider heart failure, pulmonary embolism, pneumonia, anaphylaxis, an obstructing tumour or aspirated foreign body. Fixed or monophonic wheeze or stridor suggests a central airway problem.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "rosen",
      },
    ],
    sources: [S.ccs2017, S.rosen],
    ...META,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-04",
    topic: "pulmonary-edema",
    alsoTopics: ["arrhythmia"],
    title: "Dialysis patient on a Sunday",
    stem:
      "A 58 year old man on hemodialysis Monday, Wednesday and Friday missed his Friday session. It is now Sunday. He is anuric. He has 12 hours of dyspnea and orthopnea. BP 192/104, HR 58, RR 30, T 36.5 C, SpO2 84% on room air. Weight is 4.5 kg above his dry weight. He has crackles to the mid lung fields and a functioning left forearm fistula.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE treatments to start while dialysis is being arranged.",
        accept: [
          { id: "niv", text: "Noninvasive ventilation with CPAP or BiPAP", match: NIV },
          { id: "ntg", text: "High dose nitroglycerin", match: NTG },
          { id: "o2", text: "Oxygen", match: ["oxygen"] },
          { id: "upright", text: "Sit upright", match: ["upright"] },
          { id: "k", text: "Check potassium and treat hyperkalemia urgently", match: ["potassium", "hyperkalemia", "calcium"] },
          { id: "fistula", text: "Protect the fistula arm, with no BP cuff or IV on that side", match: ["fistula", "avoid fistula", "no fistula", "not fistula"] },
        ],
        unacceptable: [{ text: "Furosemide as the main treatment in an anuric patient", match: ["furosemide", "lasix"] }],
        explanation:
          "In an anuric dialysis patient, diuretics do little. NIV and high dose nitrates buy time until urgent dialysis removes fluid. Hyperkalemia is common after a missed session and must be looked for at once.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "Besides volume overload, list THREE other causes of his decompensation or life threatening complications to look for.",
        accept: [
          { id: "k", text: "Hyperkalemia", match: ["hyperkalemia", "potassium"] },
          { id: "acs", text: "Myocardial ischemia or infarction", match: ["ischemia", "infarction", "acs", "mi", "troponin"] },
          { id: "arr", text: "Arrhythmia", match: ["arrhythmia", "dysrhythmia", "atrial fibrillation"] },
          { id: "acid", text: "Metabolic acidosis", match: ["acidosis"] },
          { id: "anemia", text: "Anemia", match: ["anemia", "hemoglobin"] },
          { id: "htn", text: "Hypertensive emergency", match: ["hypertensive"] },
          { id: "infect", text: "Infection or sepsis, including access infection", match: ["infection", "sepsis", "pneumonia"] },
          { id: "tamp", text: "Uremic pericardial effusion or tamponade", match: ["pericardial", "tamponade", "pericarditis"] },
          { id: "valve", text: "Valve disease", match: ["valve", "valvular"] },
        ],
        explanation:
          "Missed dialysis causes both fluid overload and hyperkalemia. Ischemia, arrhythmia, uremic pericardial effusion, anemia and infection are common in dialysis patients and change management. Check an ECG and potassium early.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        update: "The monitor shows a wide complex rhythm at 52 bpm. Potassium is 7.4 mmol/L.",
        prompt: "List TWO ECG findings that would point to hyperkalemia as the cause of this rhythm.",
        accept: [
          { id: "peaked", text: "Peaked T waves", match: ["peaked", "tall t", "tented"] },
          { id: "p", text: "Flattened or absent P waves", match: ["p wave", "absent p", "flat p"] },
          { id: "qrs", text: "QRS widening", match: ["qrs", "wide"] },
          { id: "sine", text: "Sine wave pattern", match: ["sine"] },
          { id: "pr", text: "PR prolongation", match: ["pr prolongation", "prolonged pr", "pr interval", "long pr"] },
          { id: "brady", text: "Bradycardia or junctional escape", match: ["brady", "bradycardia", "junctional"] },
          { id: "block", text: "Heart block", match: ["block"] },
        ],
        explanation:
          "Hyperkalemia progresses from peaked T waves to PR prolongation, loss of P waves, QRS widening and a sine wave. A slow wide rhythm in a dialysis patient is hyperkalemia until proven otherwise. Treat it before it degenerates.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        prompt: "List THREE treatments now. Include the dose of any drug.",
        accept: [
          {
            id: "ca",
            text: "Calcium gluconate 3 g IV (30 mL of 10%) or calcium chloride 1 g IV",
            match: ["calcium gluconate 3 g", "calcium gluconate 3g", "calcium gluconate 30 ml", "calcium chloride 1 g", "calcium chloride 1g", "calcium chloride 10 ml", "calcium gluconate 2 g", "calcium gluconate 20 ml"],
          },
          {
            id: "ins",
            text: "Regular insulin 10 units IV with dextrose 25 g IV",
            match: ["insulin 10 unit", "insulin 5 unit", "insulin 10u", "insulin 5u"],
          },
          { id: "salb", text: "Salbutamol 10 to 20 mg nebulized", match: ["salbutamol 10 mg", "salbutamol 20 mg", "salbutamol 10mg", "salbutamol 20mg"] },
          { id: "hd", text: "Urgent hemodialysis", match: ["dialysis", "hemodialysis", "crrt"] },
          { id: "bicarb", text: "Sodium bicarbonate if severely acidotic", match: ["bicarbonate", "bicarb"] },
        ],
        unacceptable: [
          { text: "Sodium polystyrene sulfonate as the acute treatment", match: ["kayexalate", "polystyrene"] },
          { text: "Furosemide to remove potassium in anuria", match: ["furosemide"] },
        ],
        explanation:
          "Calcium stabilizes the myocardium within minutes. With a wide complex rhythm, 1 g of calcium gluconate is too little, so give 3 g and repeat if the ECG does not improve. Insulin with dextrose and high dose salbutamol shift potassium into cells. Dialysis is the definitive treatment for both the hyperkalemia and the fluid overload and must be arranged now. Binders act too slowly.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "rosen",
      },
    ],
    sources: [S.rosen],
    ...META,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-05",
    topic: "pulmonary-edema",
    alsoTopics: ["arrhythmia"],
    title: "Palpitations in a patient with a weak heart",
    stem:
      "A 76 year old man with heart failure with reduced ejection fraction (LVEF 30%) takes sacubitril and valsartan, bisoprolol, spironolactone, dapagliflozin and furosemide 40 mg daily. He has 6 hours of palpitations and increasing dyspnea. He is drowsy but answers questions. Rhythm is irregular at 168 bpm. BP 86/58, RR 30, SpO2 88% on 6 L nasal prongs. Crackles to the mid lung fields. Weight 78 kg.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "The ECG confirms atrial fibrillation with rapid ventricular response. What is the most appropriate immediate treatment? Select one.",
        options: [
          "Diltiazem 0.25 mg/kg IV",
          "Synchronized electrical cardioversion with procedural sedation",
          "Metoprolol 5 mg IV",
          "Digoxin 0.25 mg IV and reassess in 2 hours",
          "Adenosine 6 mg IV",
          "Start heparin and cardiovert only after a transesophageal echo",
        ],
        correct: 1,
        explanation:
          "He is unstable with hypotension, pulmonary edema and altered mentation. Urgent synchronized cardioversion is indicated regardless of AF duration. Diltiazem and IV beta blockers can cause collapse in decompensated HFrEF.",
        keyFeature: { topic: "arrhythmia", n: 4 },
        source: "ccs-af",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "List THREE possible triggers of his atrial fibrillation that you would look for.",
        accept: [
          { id: "isch", text: "Myocardial ischemia", match: ["ischemia", "acs", "infarction", "mi", "troponin"] },
          { id: "thyroid", text: "Thyrotoxicosis", match: ["thyroid", "thyrotoxicosis", "tsh", "hyperthyroid"] },
          { id: "infect", text: "Infection or sepsis", match: ["infection", "sepsis", "pneumonia"] },
          { id: "etoh", text: "Alcohol", match: ["alcohol", "etoh"] },
          { id: "lytes", text: "Electrolyte disturbance such as low potassium or magnesium", match: ["electrolyte", "potassium", "magnesium", "hypokalemia"] },
          { id: "pe", text: "Pulmonary embolism", match: ["embolism", "pe"] },
          { id: "adh", text: "Missed beta blocker or other medication nonadherence", match: ["adherence", "nonadherence", "missed", "compliance"] },
          { id: "stim", text: "Stimulants or decongestants", match: ["stimulant", "decongestant", "cocaine", "caffeine"] },
          { id: "hf", text: "Worsening heart failure itself", match: ["heart failure", "volume overload"] },
          { id: "valve", text: "Valve disease", match: ["valve", "valvular"] },
          { id: "hypoxia", text: "Hypoxia", match: ["hypoxia", "hypoxemia"] },
          { id: "osa", text: "Sleep apnea", match: ["sleep apnea", "osa"] },
        ],
        explanation:
          "AF is often a marker of another illness. Ischemia, infection, thyrotoxicosis, electrolyte disturbance, alcohol, pulmonary embolism and nonadherence are common triggers. Treating the trigger improves rate control and reduces recurrence.",
        keyFeature: { topic: "arrhythmia", n: 5 },
        source: "ccs-af",
      },
      {
        id: "q3",
        kind: "menu",
        update: "After cardioversion he is in sinus rhythm for 20 minutes, then reverts to atrial fibrillation at 140 bpm. BP 102/66. He is more alert.",
        prompt: "Select TWO appropriate agents for rate or rhythm control.",
        options: [
          "Diltiazem 0.25 mg/kg IV",
          "Verapamil 5 mg IV",
          "Amiodarone 150 mg IV over 10 minutes then infusion",
          "Digoxin 0.25 mg IV, repeated to a loading dose",
          "Metoprolol 5 mg IV every 5 minutes for 3 doses",
          "Flecainide 300 mg PO",
          "Procainamide 17 mg/kg IV",
          "Adenosine 12 mg IV",
          "Ibutilide 1 mg IV",
        ],
        select: 2,
        correct: [2, 3],
        explanation:
          "In acute decompensated HFrEF, CCS/CHRS guidance suggests IV digoxin or amiodarone may be considered for acute rate control. Nondihydropyridine calcium channel blockers are contraindicated in HFrEF and IV beta blockers are risky while he is hypotensive and congested. Class IC drugs are contraindicated with structural heart disease.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "ccs-af",
      },
    ],
    sources: [S.ccsAf],
    ...META,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-06",
    topic: "pulmonary-edema",
    alsoTopics: ["gi-bleed"],
    title: "Tired and breathless for three weeks",
    stem:
      "An 84 year old woman has 3 weeks of fatigue and exertional dyspnea. Her family physician attributed this to deconditioning. Today she could not walk to the bathroom. She has coronary artery disease and osteoarthritis. Medications include ASA 81 mg daily and naproxen 500 mg twice daily. BP 138/64, HR 108, RR 24, T 36.6 C, SpO2 91% on room air. Weight 52 kg. She is pale. There are crackles at both bases, the JVP is 5 cm above the sternal angle and she has mild ankle edema.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE findings in this presentation that suggest heart failure is contributing to her dyspnea.",
        accept: [
          { id: "crackles", text: "Bibasilar crackles", match: ["crackle", "rale"] },
          { id: "jvp", text: "Elevated JVP", match: ["jvp", "jugular"] },
          { id: "edema", text: "Ankle edema", match: ["edema"] },
          { id: "hypox", text: "Hypoxemia", match: ["hypoxemia", "hypoxia", "spo2", "saturation"] },
          { id: "tachy", text: "Tachycardia", match: ["tachycardia", "heart rate"] },
          { id: "tachyp", text: "Tachypnea", match: ["tachypnea", "respiratory rate"] },
          { id: "cad", text: "Known coronary artery disease", match: ["coronary", "cad"] },
          { id: "nsaid", text: "NSAID use causing fluid retention", match: ["nsaid", "naproxen"] },
          { id: "exert", text: "Progressive exertional dyspnea", match: ["exertional"] },
        ],
        explanation:
          "Exertional dyspnea in an older adult should not be called deconditioning until heart failure, anemia and ischemia are excluded. Crackles, a raised JVP, edema and hypoxemia all point to pulmonary congestion. NSAIDs promote sodium retention.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "ccs-hf-2017",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        update: "Hb 58 g/L (118 g/L six months ago), MCV 71 fL, urea 17 mmol/L, creatinine 88 µmol/L. Rectal exam shows black stool.",
        prompt: "List TWO clues to the source of her blood loss.",
        accept: [
          { id: "nsaid", text: "NSAID use", match: ["nsaid", "naproxen"] },
          { id: "asa", text: "ASA use", match: ["asa", "aspirin", "antiplatelet"] },
          { id: "melena", text: "Melena", match: ["melena", "black stool"] },
          { id: "urea", text: "High urea to creatinine ratio suggesting upper GI bleeding", match: ["urea", "bun"] },
          { id: "mcv", text: "Microcytosis suggesting chronic iron deficiency from slow bleeding", match: ["mcv", "microcytic", "microcytosis", "iron"] },
        ],
        explanation:
          "NSAIDs and ASA together greatly increase upper GI bleeding risk. Melena and a urea rising out of proportion to creatinine suggest an upper source. Microcytosis indicates chronic blood loss.",
        keyFeature: { topic: "gi-bleed", n: 1 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "List THREE elements of your transfusion plan that reduce the risk of worsening her pulmonary edema.",
        accept: [
          { id: "one", text: "Transfuse one unit at a time and reassess", match: ["one unit", "1 unit", "single unit"] },
          { id: "slow", text: "Slow infusion rate, about 1 mL/kg/h or over 3 to 4 hours", match: ["slow", "ml/kg", "over 3", "over 4", "infusion rate", "slower rate"] },
          { id: "furo", text: "IV furosemide with or between units", match: ["furosemide", "diuretic", "lasix"] },
          { id: "reassess", text: "Reassess volume status, oxygen and lung exam after each unit", match: ["reassess", "monitor"] },
          { id: "target", text: "Target Hb of about 80 g/L given her coronary disease", match: ["target", "hb 80", "hemoglobin 80", "80 g/l", "restrictive"] },
          { id: "niv", text: "Have NIV ready if she worsens", match: ["niv", "cpap", "bipap"] },
        ],
        unacceptable: [
          { text: "Transfuse 2 units rapidly", match: ["2 unit rapid", "two unit rapid"] },
          { text: "IV crystalloid bolus first", match: ["fluid bolus", "saline bolus"] },
        ],
        explanation:
          "She needs red cells for symptomatic anemia with coronary disease, but she is already congested. Canadian Blood Services advises one unit at a time, a slower rate and a diuretic in patients at risk. Many protocols use about 1 mL/kg/h. Transfusion associated circulatory overload is common in small, older patients with heart failure.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "cbs-guide",
      },
    ],
    sources: [S.ccs2017, S.rosen, S.cbs],
    ...META,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-07",
    topic: "pulmonary-edema",
    title: "Feels better and wants to go home",
    stem:
      "A 69 year old man with heart failure with reduced ejection fraction (LVEF 35%) ran out of furosemide 5 days ago and has had 3 days of increasing dyspnea. He received furosemide 80 mg IV and has diuresed 1.8 L. He now feels well at rest. BP 132/78, HR 84 sinus, RR 18, SpO2 95% on room air. His troponin is low positive and unchanged on repeat. ECG is unchanged from prior. Potassium 4.1 mmol/L, creatinine 118 µmol/L (baseline 110), NT-proBNP 3800 pg/mL. He lives alone in a third floor walk-up apartment and wants to go home.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE things you would assess before deciding he can go home.",
        accept: [
          { id: "walk", text: "Ambulation or walk test with SpO2 and heart rate", match: ["walk", "ambulat", "ambulation", "ambulate", "exertion", "stairs"] },
          { id: "home", text: "Home situation, supports and ability to manage stairs", match: ["home", "support", "living", "alone"] },
          { id: "meds", text: "Access to and understanding of his medications", match: ["medication", "prescription", "pharmacy", "afford"] },
          { id: "fu", text: "Timely follow-up with family physician or heart function clinic", match: ["follow up", "followup", "clinic"] },
          { id: "cog", text: "Cognition and ability to self monitor", match: ["cognition", "cognitive", "understand"] },
          { id: "risk", text: "Formal risk score such as the Ottawa Heart Failure Risk Scale", match: ["ottawa", "risk scale", "risk score"] },
          { id: "labs", text: "Stable renal function and electrolytes", match: ["renal", "creatinine", "electrolyte", "potassium"] },
          { id: "baseline", text: "Return to baseline symptoms and function", match: ["baseline"] },
          { id: "orth", text: "Able to lie flat without dyspnea", match: ["lie flat", "orthopnea"] },
        ],
        explanation:
          "Feeling well at rest is not enough. Check how he does on exertion, whether he can cope at home and whether he has medications and early follow-up. The Ottawa Heart Failure Risk Scale includes a walk test and helps identify patients at high risk of serious outcomes.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "You do a 3 minute walk test in the department. Which finding most suggests he is not safe for discharge? Select one.",
        options: [
          "Heart rate rises from 84 to 96 bpm",
          "SpO2 falls to 87% and heart rate rises to 118 bpm",
          "He reports mild tiredness but completes the walk",
          "SpO2 stays at 94%",
          "BP rises to 150/82",
        ],
        correct: 1,
        explanation:
          "Desaturation below 90% or a heart rate of 110 or more during a 3 minute walk test predicts serious adverse events after ED discharge. Mild fatigue with stable vitals is expected. This objective test is part of the Ottawa Heart Failure Risk Scale.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        update: "He completes the walk test with SpO2 93% and HR 96. His daughter will stay with him for a week.",
        prompt: "List THREE elements of his discharge plan.",
        accept: [
          { id: "fu", text: "Follow-up with his physician or heart function clinic within 7 to 14 days", match: ["follow up", "followup", "clinic", "within 1 week", "within 2 week", "7 day", "14 day"] },
          { id: "rx", text: "Refill furosemide and review his full heart failure regimen", match: ["furosemide", "refill", "prescription"] },
          { id: "wt", text: "Daily weights with a plan to call if weight rises by about 2 kg", match: ["weight", "weigh"] },
          { id: "labs", text: "Repeat potassium and creatinine within 1 to 2 weeks", match: ["potassium", "creatinine", "bloodwork", "blood test", "lab"] },
          { id: "salt", text: "Sodium and fluid guidance", match: ["sodium", "salt", "fluid"] },
          { id: "return", text: "Clear return instructions for worsening dyspnea, orthopnea or chest pain", match: ["return"] },
          { id: "gdmt", text: "Continue guideline directed therapy", match: ["gdmt", "guideline", "continue", "not stop"] },
          { id: "home", text: "Home care or community heart failure program referral", match: ["home care", "community", "nurse", "program"] },
        ],
        explanation:
          "Early follow-up after an ED visit for heart failure reduces return visits and death. He needs his diuretic refilled, lab monitoring after diuresis, daily weights and a plan for when to seek help. Guideline directed medications should continue.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ccs-hf-2017",
      },
    ],
    sources: [S.ohfrs, S.ccs2017],
    ...META,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-08",
    topic: "pulmonary-edema",
    alsoTopics: ["airway"],
    title: "An hour on the mask",
    stem:
      "A 77 year old man with ischemic cardiomyopathy has been on BiPAP (IPAP 12, EPAP 6 cm H2O, FiO2 0.8) for 60 minutes for pulmonary edema. He has received a nitroglycerin infusion at 100 mcg/min and furosemide 80 mg IV. He is now drowsy with GCS 11. RR 34, SpO2 86%, BP 104/62 (it was 170/96 on arrival), HR 118. Venous gas pH 7.18, pCO2 68 mmHg. He has vomited once into the mask. Weight 95 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE findings that indicate NIV is failing.",
        accept: [
          { id: "gcs", text: "Falling level of consciousness", match: ["gcs", "consciousness", "drowsy", "mental status"] },
          { id: "acid", text: "Worsening respiratory acidosis and hypercapnia", match: ["acidosis", "ph", "pco2", "hypercapnia", "co2"] },
          { id: "hypox", text: "Persistent hypoxemia despite high FiO2", match: ["hypoxemia", "spo2", "saturation", "hypoxia"] },
          { id: "vomit", text: "Vomiting with aspiration risk", match: ["vomit", "vomited", "vomiting", "aspiration"] },
          { id: "rr", text: "Persistent tachypnea", match: ["tachypnea", "respiratory rate", "rr"] },
          { id: "bp", text: "Falling BP", match: ["bp", "blood pressure", "hypotension"] },
          { id: "hr", text: "Persistent tachycardia", match: ["tachycardia", "heart rate"] },
        ],
        explanation:
          "NIV should improve work of breathing and gas exchange within 1 to 2 hours. Reduced consciousness, worsening acidosis, persistent hypoxemia and vomiting mean it has failed and it is now unsafe. Delaying intubation in NIV failure increases mortality.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "ers-ats-niv",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "What is the most appropriate next step? Select one.",
        options: [
          "Increase IPAP to 20 cm H2O and reassess in 1 hour",
          "Rapid sequence intubation",
          "Switch to high flow nasal cannula",
          "Naloxone 0.4 mg IV",
          "Morphine 2 mg IV for air hunger",
        ],
        correct: 1,
        explanation:
          "He meets several criteria for NIV failure and cannot protect his airway. Intubation should not be delayed. Higher pressures with a depressed level of consciousness and vomiting increase aspiration risk.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "ers-ats-niv",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "His BP is 104/62 and falling. Which induction regimen is most appropriate? Select one.",
        options: [
          "Propofol 2 mg/kg and rocuronium 1.2 mg/kg",
          "Ketamine 1 mg/kg and rocuronium 1.2 mg/kg, with norepinephrine ready",
          "Midazolam 10 mg IV and no paralytic",
          "Fentanyl 5 mcg/kg and succinylcholine 1.5 mg/kg",
          "Awake intubation with topical anesthesia only",
        ],
        correct: 1,
        explanation:
          "He is at high risk of post-intubation hypotension from sedation and from positive pressure lowering preload. Ketamine at a modest dose, or reduced dose etomidate, is more hemodynamically stable than propofol or large doses of midazolam or fentanyl. Have a vasopressor ready before induction.",
        keyFeature: { topic: "airway", n: 5 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "List TWO initial ventilator settings or strategies after intubation.",
        accept: [
          { id: "peep", text: "Moderate to high PEEP, about 8 to 10 cm H2O", match: ["peep"] },
          { id: "vt", text: "Tidal volume 6 to 8 mL/kg ideal body weight", match: ["tidal volume", "ml/kg", "vt"] },
          { id: "rr", text: "Higher respiratory rate to match his minute ventilation and correct acidosis", match: ["respiratory rate", "rate", "minute ventilation"] },
          { id: "fio2", text: "FiO2 1.0 then titrate down to SpO2 92 to 96%", match: ["fio2"] },
          { id: "og", text: "Orogastric tube to decompress the stomach", match: ["orogastric", "og tube", "ng tube", "nasogastric"] },
          { id: "hob", text: "Head of bed elevated", match: ["head of bed", "elevate"] },
          { id: "gas", text: "Repeat blood gas in 30 minutes", match: ["gas", "abg", "vbg"] },
        ],
        explanation:
          "PEEP recruits flooded alveoli and reduces preload and afterload. Use lung protective tidal volumes and set a high enough rate to avoid worsening his respiratory acidosis. Decompress the stomach after vomiting.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "tintinalli",
      },
    ],
    sources: [S.ersAts, S.tintinalli],
    ...META,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-09",
    topic: "pulmonary-edema",
    alsoTopics: ["sob"],
    title: "Six weeks of shortness of breath on stairs",
    stem:
      "A 55 year old man has 6 weeks of progressive dyspnea on exertion. He now stops after 1 flight of stairs. He has a dry cough at night. A walk-in clinic gave him azithromycin and then a salbutamol inhaler without improvement. He drinks about 8 beers a day and has untreated hypertension. BP 154/96, HR 102 regular, RR 20, T 36.7 C, SpO2 94% on room air. Weight 98 kg. He has an S3, a JVP 4 cm above the sternal angle, fine crackles at both bases and trace ankle edema.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE features that suggest heart failure rather than a respiratory infection or asthma.",
        accept: [
          { id: "s3", text: "S3 gallop", match: ["s3", "gallop"] },
          { id: "jvp", text: "Elevated JVP", match: ["jvp", "jugular"] },
          { id: "crackles", text: "Bibasilar crackles", match: ["crackle", "rale"] },
          { id: "edema", text: "Ankle edema", match: ["edema"] },
          { id: "noct", text: "Nocturnal cough suggesting orthopnea or PND", match: ["nocturnal", "night", "pnd", "orthopnea"] },
          { id: "noresp", text: "No response to antibiotics or bronchodilator", match: ["antibiotic", "azithromycin", "salbutamol", "bronchodilator", "inhaler"] },
          { id: "etoh", text: "Heavy alcohol use", match: ["alcohol", "etoh", "beer"] },
          { id: "htn", text: "Untreated hypertension", match: ["hypertension"] },
          { id: "tachy", text: "Resting tachycardia", match: ["tachycardia", "heart rate"] },
          { id: "afeb", text: "No fever", match: ["afebrile", "no fever", "without fever", "absence of fever"] },
          { id: "prog", text: "Progressive exertional dyspnea over weeks", match: ["progressive", "exertional"] },
        ],
        explanation:
          "Subacute heart failure is often misdiagnosed as bronchitis or asthma. An S3, raised JVP, crackles and edema are specific. Failure of antibiotics and inhalers, heavy alcohol use and untreated hypertension add to the picture.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "ccs-hf-2017",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "List THREE tests you would order in the emergency department to confirm the diagnosis.",
        accept: [
          { id: "bnp", text: "NT-proBNP or BNP", match: ["bnp"] },
          { id: "cxr", text: "Chest X-ray", match: ["x ray", "cxr"] },
          { id: "ecg", text: "ECG", match: ["ecg", "electrocardiogram"] },
          { id: "pocus", text: "Point of care ultrasound for B lines and LV function", match: ["ultrasound", "pocus", "b line"] },
          { id: "echo", text: "Echocardiogram", match: ["echo", "echocardiogram"] },
          { id: "trop", text: "Troponin", match: ["troponin"] },
        ],
        unacceptable: [{ text: "Spirometry in the emergency department", match: ["spirometry"] }],
        explanation:
          "NT-proBNP, ECG and chest imaging are the core ED tests. An NT-proBNP below 300 pg/mL makes heart failure unlikely. Bedside ultrasound can show B lines and a dilated poorly contracting ventricle within minutes.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "ccs-hf-2017",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        update: "NT-proBNP 2900 pg/mL. Bedside ultrasound shows a dilated left ventricle with severely reduced function and bilateral B lines. The ECG shows sinus tachycardia with left bundle branch block, old compared with a tracing from 2 years ago.",
        prompt: "List THREE causes of a new dilated cardiomyopathy that you would consider in this patient.",
        accept: [
          { id: "etoh", text: "Alcohol related cardiomyopathy", match: ["alcohol", "etoh"] },
          { id: "isch", text: "Ischemic heart disease", match: ["ischemic", "ischemia", "coronary", "cad", "infarction"] },
          { id: "htn", text: "Hypertensive heart disease", match: ["hypertensive", "hypertension"] },
          { id: "tachy", text: "Tachycardia mediated cardiomyopathy", match: ["tachycardia mediated", "tachycardia induced"] },
          { id: "valve", text: "Valvular heart disease", match: ["valve", "valvular"] },
          { id: "myo", text: "Viral myocarditis", match: ["myocarditis", "viral"] },
          { id: "thyroid", text: "Thyroid disease", match: ["thyroid"] },
          { id: "stim", text: "Cocaine or stimulant use", match: ["cocaine", "stimulant", "methamphetamine"] },
          { id: "fam", text: "Familial or genetic cardiomyopathy", match: ["familial", "genetic"] },
          { id: "chemo", text: "Chemotherapy", match: ["chemotherapy", "anthracycline"] },
          { id: "thiamine", text: "Thiamine deficiency", match: ["thiamine", "beriberi"] },
          { id: "osa", text: "Sleep apnea", match: ["sleep apnea", "osa"] },
        ],
        explanation:
          "Alcohol is a reversible cause and abstinence can restore function. Ischemia must be excluded in every new cardiomyopathy. Hypertension, myocarditis, thyroid disease, stimulants and thiamine deficiency are other treatable causes.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "ccs-hf-2017",
      },
      {
        id: "q4",
        kind: "single",
        update: "After furosemide 40 mg IV he diureses 1.2 L. He walks the hallway for 3 minutes with SpO2 94% and HR 104. His partner will drive him home and stays with him. Troponin is normal twice.",
        prompt: "Which disposition is most appropriate? Select one.",
        options: [
          "Discharge with oral furosemide, a formal echocardiogram and heart function clinic review within 2 weeks, plus alcohol cessation support",
          "Discharge with a salbutamol inhaler and family physician review as needed",
          "Admit to the ICU for invasive monitoring",
          "Discharge with a second course of antibiotics",
          "Discharge with no medications until the echocardiogram is done",
        ],
        correct: 0,
        explanation:
          "He is stable after diuresis, passes a walk test and has support at home. New heart failure can be managed as an outpatient when rapid follow-up for echocardiography and guideline directed therapy is arranged. Addressing alcohol use is part of treating the cause.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ccs-hf-2021",
      },
    ],
    sources: [S.ccs2017, S.ccs2021],
    ...META,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-10",
    topic: "pulmonary-edema",
    alsoTopics: ["sob", "pre-eclampsia"],
    title: "Cough five weeks after delivery",
    stem:
      "A 31 year old woman delivered twins vaginally 5 weeks ago. Her pregnancy was complicated by gestational hypertension. She has 2 weeks of cough and dyspnea and now cannot lie flat. A walk-in clinic diagnosed bronchitis. She is breastfeeding. BP 112/74, HR 118, RR 26, T 37.0 C, SpO2 91% on room air. Weight 74 kg. Her JVP is raised and she has crackles to the mid lung fields. Bedside ultrasound shows a dilated left ventricle with severely reduced function, bilateral B lines and no pericardial effusion.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE diagnoses you would consider for her dyspnea.",
        accept: [
          { id: "ppcm", text: "Peripartum cardiomyopathy", match: ["peripartum", "cardiomyopathy", "ppcm"] },
          { id: "pe", text: "Pulmonary embolism", match: ["embolism", "pe"] },
          { id: "pet", text: "Postpartum pre-eclampsia with pulmonary edema", match: ["pre eclampsia", "preeclampsia"] },
          { id: "myo", text: "Myocarditis", match: ["myocarditis"] },
          { id: "acs", text: "Myocardial infarction or spontaneous coronary artery dissection", match: ["infarction", "scad", "dissection", "acs"] },
          { id: "pna", text: "Pneumonia", match: ["pneumonia"] },
          { id: "thyroid", text: "Postpartum thyroiditis with thyrotoxicosis", match: ["thyroid", "thyrotoxicosis"] },
          { id: "anemia", text: "Anemia", match: ["anemia"] },
          { id: "tako", text: "Stress cardiomyopathy", match: ["takotsubo", "stress cardiomyopathy"] },
        ],
        explanation:
          "Peripartum cardiomyopathy presents from late pregnancy to months after delivery with heart failure and LV dysfunction. Twin pregnancy and hypertensive disorders are risk factors. Pulmonary embolism, postpartum pre-eclampsia, SCAD and myocarditis are key alternatives.",
        keyFeature: { topic: "sob", n: 2 },
        source: "esc-ppcm",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "Her symptoms were attributed to bronchitis. List THREE features that should have raised concern for heart failure.",
        accept: [
          { id: "orth", text: "Orthopnea", match: ["orthopnea", "lie flat", "pnd"] },
          { id: "tachy", text: "Persistent tachycardia", match: ["tachycardia", "heart rate"] },
          { id: "pp", text: "Recent pregnancy, in the peripartum window", match: ["postpartum", "peripartum", "pregnancy", "delivery"] },
          { id: "twins", text: "Twin pregnancy", match: ["twin"] },
          { id: "htn", text: "Gestational hypertension", match: ["hypertension"] },
          { id: "hypox", text: "Hypoxemia", match: ["hypoxemia", "spo2", "hypoxia"] },
          { id: "afeb", text: "No fever", match: ["afebrile", "no fever", "without fever", "absence of fever"] },
          { id: "jvp", text: "Raised JVP", match: ["jvp"] },
          { id: "crackles", text: "Crackles", match: ["crackle"] },
          { id: "dur", text: "Symptoms progressing over 2 weeks", match: ["progressive", "worsening", "2 week"] },
        ],
        explanation:
          "Dyspnea, orthopnea and tachycardia are easily blamed on normal postpartum changes or a cough illness. Any postpartum patient with orthopnea, resting tachycardia or hypoxemia needs a cardiac assessment. BNP and an echocardiogram are the key tests.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "esc-ppcm",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "List TWO immediate treatments. Include doses where relevant.",
        accept: [
          { id: "furo", text: "Furosemide 20 to 40 mg IV", match: ["furosemide", "lasix", "loop diuretic"] },
          { id: "o2", text: "Supplemental oxygen", match: ["oxygen"] },
          { id: "niv", text: "CPAP or BiPAP if she worsens", match: NIV },
          { id: "ntg", text: "Nitroglycerin while BP allows", match: NTG },
          { id: "upright", text: "Sit upright", match: ["upright"] },
        ],
        unacceptable: [{ text: "IV fluid bolus for tachycardia", match: ["fluid bolus", "saline bolus"], dangerous: true }],
        explanation:
          "Initial treatment is the same as for any acute heart failure: oxygen, a loop diuretic, vasodilators if BP allows and NIV for respiratory distress. Specific therapies and anticoagulation for a very low ejection fraction are decided with cardiology. Breastfeeding is compatible with the usual acute drugs.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "esc-ppcm",
      },
    ],
    sources: [S.ppcm],
    ...META,
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-11",
    topic: "pulmonary-edema",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Sudden breathlessness after a week of indigestion",
    stem:
      "A 70 year old woman had 2 days of indigestion 6 days ago and did not seek care. Tonight she developed sudden severe dyspnea. BP 96/60, HR 118, RR 36, SpO2 84% on a non-rebreather mask. She has crackles throughout both lungs and a soft holosystolic murmur at the apex. The ECG shows inferior Q waves with 1 mm persistent ST elevation in II, III and aVF. Weight 64 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE mechanical complications of myocardial infarction that could explain this presentation.",
        accept: [
          { id: "pmr", text: "Papillary muscle rupture with acute mitral regurgitation", match: ["papillary", "mitral"] },
          { id: "vsr", text: "Ventricular septal rupture", match: ["septal", "vsd", "vsr"] },
          { id: "fwr", text: "Free wall rupture with tamponade", match: ["free wall", "tamponade"] },
          { id: "pump", text: "Pump failure from extensive infarction", match: ["pump failure", "cardiogenic shock", "lv failure"] },
          { id: "aneur", text: "LV aneurysm or pseudoaneurysm", match: ["aneurysm"] },
        ],
        unacceptable: [{ text: "Right ventricular infarction, which does not cause pulmonary edema", match: ["right ventricular", "rv infarct", "rv infarction"] }],
        explanation:
          "Late presenting inferior infarction with sudden pulmonary edema and a new apical murmur suggests papillary muscle rupture. Ventricular septal rupture and free wall rupture also occur 3 to 7 days after infarction. The murmur of acute MR may be soft because pressures equalize quickly.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        update: "Bedside echo shows a flail posterior mitral leaflet with severe regurgitation and a hyperdynamic left ventricle. BP falls to 86/54.",
        prompt: "List THREE temporizing measures while you arrange definitive care.",
        accept: [
          { id: "ventil", text: "Positive pressure ventilation with NIV or intubation", match: ["niv", "bipap", "cpap", "intubat", "intubation", "intubate", "ventilation"] },
          { id: "iabp", text: "Intra-aortic balloon pump or other mechanical support", match: ["balloon", "iabp", "impella", "mechanical support", "ecmo"] },
          { id: "dobut", text: "Dobutamine", match: ["dobutamine", "inotrope", "milrinone"] },
          { id: "norepi", text: "Norepinephrine to support BP", match: ["norepinephrine", "vasopressor", "pressor"] },
          { id: "afterload", text: "Afterload reduction with nitroprusside once BP is supported", match: ["nitroprusside", "afterload"] },
          { id: "diuretic", text: "Cautious IV diuretic", match: ["furosemide", "diuretic"] },
          { id: "cath", text: "Urgent cardiology and cardiac surgery consultation", match: ["cardiac surgery", "cardiology", "surgeon"] },
        ],
        unacceptable: [
          { text: "Beta blocker", match: ["beta blocker", "metoprolol"], dangerous: true },
          { text: "Large IV fluid bolus", match: ["fluid bolus", "saline bolus"] },
        ],
        explanation:
          "Acute severe MR needs forward flow. Positive pressure ventilation treats edema, an intra-aortic balloon pump lowers afterload and augments coronary flow, and inotropes and vasopressors maintain perfusion. Afterload reduction helps only once BP is supported. A beta blocker would remove the compensatory tachycardia.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "esc-valve",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What is the definitive treatment?",
        accept: [
          { id: "surg", text: "Emergency cardiac surgery for mitral valve repair or replacement", match: ["surgery", "mitral valve replacement", "mitral valve repair", "mvr", "surgical"] },
        ],
        unacceptable: [{ text: "Medical therapy alone", match: ["medical therapy alone", "medical management"] }],
        explanation:
          "Papillary muscle rupture has a very high mortality with medical treatment alone. Emergency surgical repair or replacement, often with coronary revascularization, is required. Transfer to a cardiac surgical centre should not wait for stabilization that will not come.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "esc-valve",
      },
    ],
    sources: [S.tintinalli, S.escValve],
    ...META,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-12",
    topic: "pulmonary-edema",
    title: "Breathless during the second unit",
    stem:
      "An 82 year old woman weighing 60 kg is receiving red cells in your department for Hb 62 g/L from chronic GI blood loss. She has heart failure with preserved ejection fraction. The first unit ran over 1 hour. The second unit was started at 250 mL/h. Forty minutes into it she becomes acutely short of breath. BP 188/96 (142/70 before transfusion), HR 108, RR 30, T 37.1 C (36.9 C before), SpO2 86% on room air. She has new bibasilar crackles and a raised JVP.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "What is the most likely diagnosis? Select one.",
        options: [
          "Transfusion related acute lung injury",
          "Transfusion associated circulatory overload",
          "Acute hemolytic transfusion reaction",
          "Anaphylactic transfusion reaction",
          "Febrile nonhemolytic transfusion reaction",
        ],
        correct: 1,
        explanation:
          "Hypertension, a raised JVP and crackles during a rapid transfusion in an older patient with heart failure fit transfusion associated circulatory overload. TRALI typically causes hypotension and fever with a normal JVP. Anaphylaxis causes hypotension, wheeze and urticaria.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "cbs-guide",
      },
      {
        id: "q2",
        kind: "short",
        required: 3,
        prompt: "List THREE immediate management steps.",
        accept: [
          { id: "stop", text: "Stop the transfusion", match: ["stop", "discontinue", "hold"] },
          { id: "upright", text: "Sit upright", match: ["upright", "sit up"] },
          { id: "o2", text: "Oxygen and NIV if needed", match: ["oxygen", "niv", "cpap", "bipap"] },
          { id: "furo", text: "IV furosemide", match: ["furosemide", "diuretic", "lasix"] },
          { id: "ntg", text: "Nitroglycerin", match: NTG },
          { id: "report", text: "Notify the blood bank and report the reaction", match: ["blood bank", "report", "transfusion medicine", "transfusion service"] },
          { id: "check", text: "Clerical check of patient and unit identity", match: ["clerical", "identity", "check the unit", "label"] },
        ],
        unacceptable: [{ text: "Continue the transfusion at the same rate", match: ["continue transfusion", "continue the transfusion"], dangerous: true }],
        explanation:
          "Stop the transfusion, support oxygenation and give a diuretic. Positive pressure and nitrates help as in any cardiogenic pulmonary edema. All suspected reactions are reported to the hospital transfusion service.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "cbs-guide",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        update: "She improves within an hour. Her Hb is now 71 g/L and she remains symptomatic from anemia.",
        prompt: "List TWO strategies to reduce the risk of this happening again.",
        accept: [
          { id: "slow", text: "Slower infusion rate, about 1 mL/kg/h", match: ["slow", "ml/kg", "infusion rate", "over 3", "over 4"] },
          { id: "diur", text: "Diuretic before or between units", match: ["furosemide", "diuretic", "lasix"] },
          { id: "one", text: "One unit at a time with reassessment before the next", match: ["one unit", "single unit", "1 unit", "reassess"] },
          { id: "split", text: "Split the unit into smaller aliquots", match: ["split", "aliquot"] },
          { id: "iron", text: "IV iron to limit further red cell transfusion", match: ["iron"] },
          { id: "threshold", text: "Use a restrictive transfusion threshold", match: ["restrictive", "threshold"] },
        ],
        explanation:
          "Risk factors for circulatory overload are age, heart failure, renal impairment, positive fluid balance and fast infusion. Transfuse slowly, one unit at a time, with a diuretic if needed. Iron replacement treats the underlying deficiency.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "cbs-guide",
      },
    ],
    sources: [S.cbs],
    ...META,
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-13",
    topic: "pulmonary-edema",
    title: "Weight gain after a new prescription",
    stem:
      "A 74 year old man with heart failure with reduced ejection fraction (LVEF 30%) takes furosemide 80 mg PO twice daily, bisoprolol, sacubitril and valsartan, spironolactone and empagliflozin. He has 1 week of worsening dyspnea and a 4 kg weight gain. A walk-in clinic started naproxen 10 days ago for knee pain, and he ate several salty holiday meals. BP 146/82, HR 88 sinus, RR 22, T 36.8 C, SpO2 93% on room air. He has crackles at the bases and edema to the knees. Potassium 5.3 mmol/L, creatinine 142 µmol/L (baseline 115), sodium 133 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 4,
        prompt: "List FOUR precipitants of heart failure decompensation you would look for in this patient.",
        accept: [
          { id: "nsaid", text: "NSAID use", match: ["nsaid", "naproxen", "anti inflammatory"] },
          { id: "salt", text: "Dietary sodium or fluid excess", match: ["sodium", "salt", "dietary", "diet"] },
          { id: "adh", text: "Medication nonadherence", match: ["adherence", "nonadherence", "compliance"] },
          { id: "isch", text: "Myocardial ischemia", match: ["ischemia", "acs", "infarction", "mi"] },
          { id: "arr", text: "Arrhythmia such as atrial fibrillation", match: ["arrhythmia", "atrial fibrillation", "af"] },
          { id: "infect", text: "Infection", match: ["infection", "pneumonia", "sepsis"] },
          { id: "htn", text: "Uncontrolled hypertension", match: ["hypertension"] },
          { id: "renal", text: "Worsening renal function", match: ["renal", "kidney"] },
          { id: "thyroid", text: "Thyroid disease", match: ["thyroid"] },
          { id: "anemia", text: "Anemia", match: ["anemia"] },
          { id: "etoh", text: "Alcohol", match: ["alcohol"] },
          { id: "pe", text: "Pulmonary embolism", match: ["embolism"] },
          { id: "drugs", text: "Other harmful drugs such as nondihydropyridine calcium channel blockers or thiazolidinediones", match: ["calcium channel", "diltiazem", "verapamil", "pioglitazone", "thiazolidinedione"] },
        ],
        explanation:
          "Most decompensations have an identifiable trigger. NSAIDs cause sodium retention and reduce renal perfusion and diuretic response. Dietary indiscretion, nonadherence, ischemia, arrhythmia and infection are the other common causes.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "ccs-hf-2017",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which initial diuretic strategy is most appropriate? Select one.",
        options: [
          "Furosemide 20 mg IV once",
          "Furosemide 160 mg IV, then reassess urine output and weight",
          "Increase his oral furosemide to 120 mg twice daily and discharge",
          "Add hydrochlorothiazide 25 mg PO alone",
          "Hold all diuretics because his creatinine has risen",
        ],
        correct: 1,
        explanation:
          "Patients on chronic loop diuretics need an IV dose at least equal to, and up to 2.5 times, their total daily oral dose. His daily oral dose is 160 mg, so 20 mg IV is inadequate. A modest creatinine rise with congestion is not a reason to withhold diuretics.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "dose-trial",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        update: "After 2 doses of IV furosemide in the observation unit he has lost 3.5 kg and is back near his dry weight. Creatinine is 128 µmol/L, potassium 4.8 mmol/L. His walk test is normal.",
        prompt: "List THREE discharge instructions or changes to his management.",
        accept: [
          { id: "nsaid", text: "Stop naproxen and avoid all NSAIDs", match: ["stop naproxen", "stop nsaid", "avoid nsaid", "no nsaid", "discontinue naproxen", "discontinue nsaid", "hold naproxen", "avoid naproxen", "no naproxen", "naproxen contraindicated", "nsaid contraindicated", "nsaid avoided"] },
          { id: "salt", text: "Sodium restriction advice", match: ["sodium", "salt"] },
          { id: "wt", text: "Daily weights with a plan to call if weight rises", match: ["weight", "weigh"] },
          { id: "gdmt", text: "Continue his guideline directed therapy", match: ["continue", "gdmt", "guideline", "not stop"] },
          { id: "labs", text: "Recheck potassium and creatinine within 1 week", match: ["potassium", "creatinine", "bloodwork", "lab"] },
          { id: "fu", text: "Follow-up with his heart function clinic or family physician within 1 to 2 weeks", match: ["follow up", "followup", "clinic"] },
          { id: "pain", text: "Alternative knee analgesia such as acetaminophen or topical diclofenac", match: ["acetaminophen", "topical", "analgesi", "analgesia"] },
          { id: "flex", text: "Flexible diuretic plan for weight gain", match: ["flexible", "sliding", "diuretic plan"] },
          { id: "return", text: "Return instructions", match: ["return"] },
        ],
        unacceptable: [
          { text: "Stop all heart failure medications", match: ["stop all heart failure", "stop all medication"] },
          { text: "Continue naproxen", match: ["continue naproxen", "continue nsaid"] },
        ],
        explanation:
          "Remove the trigger and give him the tools to catch the next decompensation early. Stop NSAIDs, reinforce sodium advice and daily weights, and arrange early follow-up with labs. His guideline directed medications should continue, since they reduce mortality and readmission.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ccs-hf-2021",
      },
    ],
    sources: [S.ccs2017, S.ccs2021, S.dose],
    ...META,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-14",
    topic: "pulmonary-edema",
    alsoTopics: ["shock"],
    title: "Breathless man with a loud murmur",
    stem:
      "An 86 year old man has known severe aortic stenosis (valve area 0.7 cm2) and is awaiting assessment for transcatheter valve replacement. He has 2 days of increasing dyspnea and fainted while walking yesterday. BP 92/64, HR 104 sinus, RR 30, T 36.6 C, SpO2 88% on 4 L nasal prongs. He has a harsh late peaking systolic murmur radiating to the carotids, a soft S2 and crackles to the mid lung fields. Weight 70 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE causes of his acute decompensation that you would look for.",
        accept: [
          { id: "af", text: "New atrial fibrillation with loss of atrial kick", match: ["atrial fibrillation", "af", "arrhythmia"] },
          { id: "isch", text: "Myocardial ischemia", match: ["ischemia", "acs", "infarction", "mi", "troponin"] },
          { id: "infect", text: "Infection", match: ["infection", "pneumonia", "sepsis"] },
          { id: "ie", text: "Endocarditis", match: ["endocarditis"] },
          { id: "anemia", text: "Anemia or GI bleeding", match: ["anemia", "bleed"] },
          { id: "prog", text: "Progression of the aortic stenosis", match: ["progression", "worsening stenosis"] },
          { id: "meds", text: "New vasodilator or medication change", match: ["vasodilator", "medication"] },
          { id: "adh", text: "Nonadherence to diuretics or excess sodium", match: ["adherence", "sodium", "salt"] },
          { id: "renal", text: "Renal failure", match: ["renal", "kidney"] },
          { id: "thyroid", text: "Thyroid disease", match: ["thyroid"] },
        ],
        explanation:
          "Patients with severe aortic stenosis depend on atrial contraction and adequate preload. New AF, ischemia, infection and anemia commonly tip them into failure. Exertional syncope indicates critical stenosis.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "esc-valve",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Select TWO appropriate initial treatments.",
        options: [
          "Nitroglycerin 0.4 mg sublingual every 5 minutes",
          "Nitroglycerin infusion at 100 mcg/min",
          "Norepinephrine or phenylephrine infusion to maintain perfusion pressure",
          "Furosemide 20 mg IV with close BP monitoring",
          "Normal saline 1 L bolus",
          "Metoprolol 5 mg IV",
          "Hydralazine 10 mg IV",
          "Enalaprilat 1.25 mg IV",
        ],
        select: 2,
        correct: [2, 3],
        explanation:
          "Severe aortic stenosis with pulmonary edema and hypotension needs coronary perfusion pressure maintained with a vasopressor. Gentle diuresis relieves congestion. Nitrates and other vasodilators drop BP without increasing flow across a fixed valve. A fluid bolus worsens the edema.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "esc-valve",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What intervention definitively treats the cause of his pulmonary edema?",
        accept: [
          {
            id: "valve",
            text: "Urgent aortic valve intervention such as TAVI, balloon valvuloplasty or surgical valve replacement",
            match: ["tavi", "tavr", "valvuloplasty", "valve replacement", "avr", "transcatheter"],
          },
        ],
        explanation:
          "Symptomatic severe aortic stenosis with heart failure has a poor prognosis without valve intervention. Urgent transcatheter replacement or balloon valvuloplasty as a bridge can be lifesaving. Involve cardiology early.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "esc-valve",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "His work of breathing worsens. List TWO precautions if you start NIV or intubate him.",
        accept: [
          { id: "lowp", text: "Use lower initial pressures and titrate slowly, since positive pressure reduces preload", match: ["lower pressure", "low pressure", "titrate", "low peep", "preload"] },
          { id: "press", text: "Vasopressor running before induction or NIV", match: ["vasopressor", "pressor", "norepinephrine", "phenylephrine", "push dose"] },
          { id: "induct", text: "Reduced dose hemodynamically stable induction agent", match: ["ketamine", "etomidate", "reduced dose", "lower dose"] },
          { id: "hr", text: "Avoid tachycardia and bradycardia", match: ["tachycardia", "bradycardia", "heart rate", "avoid tachycardia", "avoid bradycardia"] },
          { id: "arrest", text: "Pads on and arrest drugs ready", match: ["pad", "defibrillator", "arrest"] },
          { id: "operator", text: "Most experienced operator", match: ["experienced"] },
          { id: "sinus", text: "Maintain sinus rhythm, cardioverting new AF if unstable", match: ["sinus", "cardioversion", "cardiovert"] },
        ],
        unacceptable: [{ text: "Propofol full dose induction", match: ["propofol"] }],
        explanation:
          "Fixed outflow obstruction leaves no reserve for sudden falls in preload or afterload. Positive pressure and induction agents can cause cardiovascular collapse. Start a vasopressor first, use low initial pressures and a reduced dose of a stable agent, and be ready for arrest.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "tintinalli",
      },
    ],
    sources: [S.escValve, S.tintinalli],
    ...META,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "pulmonary-edema-15",
    topic: "pulmonary-edema",
    alsoTopics: ["infectious-diseases"],
    title: "Fever and sudden dyspnea in a young man",
    stem:
      "A 38 year old man who injects hydromorphone has 5 days of fever and rigors and developed severe dyspnea over the last 3 hours. T 39.2 C, BP 108/38, HR 128, RR 34, SpO2 86% on a non-rebreather mask. Weight 68 kg. He has bounding pulses, an early diastolic murmur at the left sternal border and crackles to the mid lung fields. Bedside echo shows a hyperdynamic left ventricle, a mobile echodensity on the aortic valve and a wide regurgitant jet.",
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "List THREE investigations to confirm the cause and its complications.",
        accept: [
          { id: "bc", text: "Three sets of blood cultures before antibiotics", match: ["blood culture", "culture"] },
          { id: "echo", text: "Formal transthoracic then transesophageal echocardiogram", match: ["echo", "tte", "tee", "echocardiogram", "transesophageal"] },
          { id: "ecg", text: "ECG for new conduction block suggesting root abscess", match: ["ecg", "electrocardiogram"] },
          { id: "cbc", text: "CBC", match: ["cbc", "white count"] },
          { id: "cxr", text: "Chest X-ray", match: ["x ray", "cxr"] },
          { id: "lact", text: "Lactate", match: ["lactate"] },
          { id: "cr", text: "Creatinine and electrolytes", match: ["creatinine", "electrolyte"] },
          { id: "ua", text: "Urinalysis for hematuria", match: ["urinalysis", "urine"] },
          { id: "bbv", text: "HIV, hepatitis B and C serology", match: ["hiv", "hepatitis"] },
          { id: "ct", text: "CT head if neurological signs suggest emboli", match: ["ct head"] },
        ],
        explanation:
          "Blood cultures before antibiotics and echocardiography are the pillars of diagnosing endocarditis. A new AV block suggests an aortic root abscess. Screening for bloodborne infections is part of care for people who inject drugs.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "aha-ie",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What empiric antibiotic regimen would you start after cultures are drawn?",
        accept: [
          { id: "vanc", text: "Vancomycin, commonly combined with ceftriaxone or gentamicin", match: ["vancomycin", "vanco"] },
          { id: "dapto", text: "Daptomycin based regimen", match: ["daptomycin"] },
        ],
        unacceptable: [
          { text: "Ceftriaxone alone", match: ["ceftriaxone alone"] },
          { text: "Cefazolin alone before cultures return", match: ["cefazolin alone"] },
          { text: "Oral antibiotics", match: ["oral"] },
        ],
        explanation:
          "Injection drug use endocarditis is most often caused by Staphylococcus aureus, including MRSA. Empiric therapy must cover MRSA, so vancomycin is the usual backbone. Therapy is narrowed once cultures return.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "aha-ie",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "What is the definitive treatment for his pulmonary edema?",
        accept: [
          { id: "surg", text: "Emergency aortic valve surgery", match: ["surgery", "valve replacement", "avr", "surgical"] },
        ],
        unacceptable: [{ text: "Antibiotics alone", match: ["antibiotics alone", "antibiotic alone"] }],
        explanation:
          "Acute severe aortic regurgitation with pulmonary edema is a surgical emergency. Antibiotics alone will not restore valve competence. Contact cardiac surgery early and transfer.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "esc-valve",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "While awaiting transfer his BP falls to 84/30 and he is tiring.",
        prompt: "List TWO appropriate supportive measures.",
        accept: [
          { id: "intub", text: "Intubation with positive pressure ventilation", match: ["intubat", "intubation", "intubate", "ventilation", "niv", "bipap", "cpap"] },
          { id: "norepi", text: "Norepinephrine", match: ["norepinephrine", "vasopressor", "pressor"] },
          { id: "dobut", text: "Dobutamine", match: ["dobutamine", "inotrope", "milrinone"] },
          { id: "hr", text: "Maintain a relatively fast heart rate and avoid beta blockers", match: ["heart rate", "tachycardia", "avoid bradycardia", "avoid slowing", "avoid beta blocker", "no beta blocker"] },
          { id: "diur", text: "Cautious diuresis", match: ["furosemide", "diuretic", "diuresis"] },
          { id: "or", text: "Expedite emergency surgery", match: ["surgery", "operating room"] },
        ],
        unacceptable: [
          { text: "Intra-aortic balloon pump", match: ["balloon", "iabp"], dangerous: true },
          { text: "Beta blocker to slow the heart", match: ["beta blocker", "metoprolol", "esmolol"], dangerous: true },
        ],
        explanation:
          "In acute aortic regurgitation a faster heart rate shortens diastole and limits regurgitant volume. Support with ventilation, inotropes and vasopressors while surgery is arranged. An intra-aortic balloon pump is contraindicated because it worsens regurgitation, and beta blockers remove compensatory tachycardia.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "esc-valve",
      },
    ],
    sources: [S.ahaIe, S.escValve],
    ...META,
  },
];
