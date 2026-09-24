// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

const ESCHF: Source = {
  id: "eschf",
  citation: "McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021.",
  url: "https://doi.org/10.1093/eurheartj/ehab368",
};
const CCSHF: Source = {
  id: "ccshf",
  citation: "Ezekowitz JA, O'Meara E, McDonald MA, et al. 2017 Comprehensive update of the Canadian Cardiovascular Society guidelines for the management of heart failure. Can J Cardiol. 2017.",
};
const NIV: Source = {
  id: "niv",
  citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.",
};
const MASIP: Source = {
  id: "masip",
  citation: "Masip J, Peacock WF, Price S, et al. Indications and practical approach to non-invasive ventilation in acute heart failure. Eur Heart J. 2018.",
  url: "https://doi.org/10.1093/eurheartj/ehx580",
};
const KLONER: Source = {
  id: "kloner",
  citation: "Kloner RA, Hutter AM, Emmick JT, et al. Time course of the interaction between tadalafil and nitrates. J Am Coll Cardiol. 2003.",
};
const PAD: Source = {
  id: "pad",
  citation: "Mazzolai L, Teixido-Tura G, Lanzi S, et al. 2024 ESC Guidelines for the management of peripheral arterial and aortic diseases. Eur Heart J. 2024.",
  url: "https://doi.org/10.1093/eurheartj/ehae179",
};
const PREG: Source = {
  id: "preg",
  citation: "De Backer J, Haugaa KH, Hasselberg NE, et al. 2025 ESC Guidelines for the management of cardiovascular disease and pregnancy. Eur Heart J. 2025.",
  url: "https://doi.org/10.1093/eurheartj/ehaf193",
};
const VHD: Source = {
  id: "vhd",
  citation: "Praz F, Borger MA, Lanz J, et al. 2025 ESC/EACTS Guidelines for the management of valvular heart disease. Eur Heart J. 2025.",
};
const BTSPROC: Source = {
  id: "btsproc",
  citation: "Asciak R, Bedawi EO, Bhatnagar R, et al. British Thoracic Society clinical statement on pleural procedures. Thorax. 2023.",
  url: "https://doi.org/10.1136/thorax-2022-219371",
};

const MCCORD: Source = {
  id: "mccord",
  citation: "McCord J, Jneid H, Hollander JE, et al. Management of cocaine-associated chest pain and myocardial infarction. A scientific statement from the American Heart Association Acute Cardiac Care Committee of the Council on Clinical Cardiology. Circulation. 2008.",
  url: "https://doi.org/10.1161/CIRCULATIONAHA.107.188950",
};
const RADKE: Source = {
  id: "radke",
  citation: "Radke JB, Owen KP, Sutter ME, Ford JB, Albertson TE. The effects of opioids on the lung. Clin Rev Allergy Immunol. 2014.",
};
const BOYER: Source = {
  id: "boyer",
  citation: "Boyer EW. Management of opioid analgesic overdose. N Engl J Med. 2012.",
};
const CRISM: Source = {
  id: "crism",
  citation: "Yakovenko I, Mukaneza Y, Germe K, et al. Management of opioid use disorder. 2024 update to the national clinical practice guideline. CMAJ. 2024.",
  url: "https://doi.org/10.1503/cmaj.241173",
};
const NPPE: Source = {
  id: "nppe",
  citation: "Bhattacharya M, Kallet RH, Ware LB, Matthay MA. Negative-pressure pulmonary edema. Chest. 2016.",
};
const SIPE: Source = {
  id: "sipe",
  citation: "Moon RE, Martina SD, Peacher DF, et al. Swimming-induced pulmonary edema. Pathophysiology and risk reduction with sildenafil. Circulation. 2016.",
};
const PSGN: Source = {
  id: "psgn",
  citation: "Rodriguez-Iturbe B, Musser JM. The current state of poststreptococcal glomerulonephritis. J Am Soc Nephrol. 2008.",
};

const ICOS: Source = {
  id: "icos",
  citation: "Herrmann J, Lenihan D, Armenian S, et al. Defining cardiovascular toxicities of cancer therapies. An International Cardio-Oncology Society (IC-OS) consensus statement. Eur Heart J. 2022.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8803367/",
};
const SITC: Source = {
  id: "sitc",
  citation: "Brahmer JR, Abu-Sbeih H, Ascierto PA, et al. Society for Immunotherapy of Cancer (SITC) clinical practice guideline on immune checkpoint inhibitor-related adverse events. J Immunother Cancer. 2021.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8237720/",
};
const PACING: Source = {
  id: "pacing",
  citation: "Glikson M, Nielsen JC, Kronborg MB, et al. 2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. Eur Heart J. 2021.",
};
const ACLS: Source = {
  id: "acls",
  citation: "Wigginton JG, Agarwal S, Bartos JA, et al. Part 9. Adult advanced life support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
  url: "https://doi.org/10.1161/CIR.0000000000001376",
};
const CLOZ: Source = {
  id: "cloz",
  citation: "Ronaldson KJ, Fitzgerald PB, Taylor AJ, Topliss DJ, McNeil JJ. A new monitoring protocol for clozapine-induced myocarditis based on an analysis of 75 cases and 94 controls. Aust N Z J Psychiatry. 2011.",
};
const HFANP: Source = {
  id: "hfanp",
  citation: "Mueller C, McDonald K, de Boer RA, et al. Heart Failure Association of the European Society of Cardiology practical guidance on the use of natriuretic peptide concentrations. Eur J Heart Fail. 2019.",
};

const DIUR: Source = {
  id: "diur",
  citation: "Mullens W, Damman K, Harjola VP, et al. The use of diuretics in heart failure with congestion. A position statement from the Heart Failure Association of the European Society of Cardiology. Eur J Heart Fail. 2019.",
  url: "https://doi.org/10.1002/ejhf.1369",
};
const OHFRS: Source = {
  id: "ohfrs",
  citation: "Stiell IG, Perry JJ, Clement CM, et al. Prospective and explicit clinical validation of the Ottawa Heart Failure Risk Scale, with and without use of quantitative NT-proBNP. Acad Emerg Med. 2017.",
  url: "https://doi.org/10.1111/acem.13141",
};
const BCPAL: Source = {
  id: "bcpal",
  citation: "BC Centre for Palliative Care. B.C. inter-professional palliative symptom management guidelines. Dyspnea. 2017.",
};
const SSC: Source = {
  id: "ssc",
  citation: "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.",
};

const NPE: Source = {
  id: "npe",
  citation: "Busl KM, Bleck TP. Neurogenic pulmonary edema. Crit Care Med. 2015.",
};
const DROWN: Source = {
  id: "drown",
  citation: "Szpilman D, Bierens JJ, Handley AJ, Orlowski JP. Drowning. N Engl J Med. 2012.",
};
const STEMI: Source = {
  id: "stemi",
  citation: "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
  url: "https://doi.org/10.1016/j.cjca.2018.11.031",
};

export const PULMONARY_EDEMA_S48_SAMPS: Samp[] = [
  {
    id: "pulmonary-edema-16",
    topic: "pulmonary-edema",
    title: "Breathless in front of the television",
    stem:
      "A 71-year-old man presents to the emergency department with 90 minutes of worsening shortness of breath that began while he was watching television. He has hypertension, type 2 diabetes and benign prostatic hyperplasia. He takes amlodipine, ramipril, metformin, a second diabetes tablet he cannot name, and tadalafil 5 mg daily for his prostate, last taken 9 hours ago. He takes no diuretic. He is sweaty, sitting upright and cannot finish a sentence, but he is alert and follows commands. The JVP is 5 cm above the sternal angle. There are crackles to the mid zones of both lungs and trace ankle edema.",
    vitals: { temperature: "36.9°C oral", pulse: "118/minute", resp: "34/minute", bp: "194/108 mmHg", o2sat: "85% on 10 L/minute by face mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Noninvasive ventilation is started. After 10 minutes his BP is 188/104 mmHg and his saturation is 89%.",
        prompt: "Which of the following is the most appropriate medication to give him next?",
        options: [
          "furosemide 40 mg IV",
          "labetalol 20 mg IV",
          "morphine 2 mg IV",
          "nitroglycerin 20 mcg/minute IV",
          "nitroglycerin 0.4 mg sublingual",
        ],
        correct: 0,
        explanation:
          "Tadalafil taken 9 hours ago rules out any nitrate, whether sublingual or a low dose infusion. Kloner found the fall in BP with nitroglycerin was still greater at 24 hours after tadalafil and had gone by 48 hours. Noninvasive ventilation already lowers his preload and afterload. He is congested and takes no diuretic, and the ESC guideline suggests furosemide 20 to 40 mg IV as the starting dose for a diuretic naive patient. Labetalol lowers contractility during acute pulmonary edema and can precipitate shock. Morphine is not recommended routinely and is linked to more intubation.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "kloner",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "After 40 minutes on noninvasive ventilation his BP is 158/92 mmHg, his pulse is 98/minute and his saturation is 94%. His daughter says the second diabetes tablet was started 2 months ago, and his ankles have swollen since.",
        prompt: "Which of the following of his regular medications most likely contributed to this episode?",
        options: [
          "amlodipine",
          "metformin",
          "pioglitazone",
          "ramipril",
          "tadalafil",
        ],
        correct: 2,
        explanation:
          "Of the options, the only diabetes drug besides metformin is pioglitazone, so it is the tablet started 2 months ago, after which his ankles swelled. The ESC guideline notes that thiazolidinediones cause sodium and water retention and does not recommend them in heart failure, because they increase the risk of worsening and admission. Amlodipine causes ankle swelling by dilating arterioles, not by retaining fluid, and it does not cause pulmonary edema. Ramipril lowers afterload and is protective. Metformin does not retain fluid. Tadalafil matters for nitrate safety but does not cause fluid retention.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "eschf",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "The ECG shows sinus rhythm with left ventricular hypertrophy and no acute ischemic change. Troponin is below the 99th percentile twice. Echo shows an ejection fraction of 55% with concentric hypertrophy and no valve disease. Pioglitazone has been stopped.",
        prompt: "Which of the following changes to his long-term care best reduces the chance of another episode?",
        options: [
          "Add a long-acting oral nitrate",
          "Arrange coronary angiography",
          "Intensify antihypertensive therapy",
          "Start digoxin 0.125 mg PO daily",
          "Start ivabradine 5 mg PO twice daily",
        ],
        correct: 2,
        explanation:
          "A preserved ejection fraction with concentric hypertrophy and an onset at a BP of 194/108 mmHg point to uncontrolled hypertension as the remaining driver now that pioglitazone has stopped. The ESC guideline advises treating hypertension and other causes in heart failure with preserved ejection fraction. A long-acting nitrate cannot be combined with his daily tadalafil. Two normal troponins and no ischemic change do not call for angiography. Digoxin and ivabradine slow the rate but do not treat the cause, and he is in sinus rhythm.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "eschf",
      },
    ],
    sources: [KLONER, ESCHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-17",
    topic: "pulmonary-edema",
    title: "Third night-time admission this year",
    stem:
      "A 77-year-old woman is brought to the emergency department by ambulance with sudden shortness of breath that woke her at 0300. This is her third such episode in 5 months. Each time she recovered within a day on nitroglycerin and a diuretic. An echocardiogram 4 months ago showed an ejection fraction of 60%, normal wall thickness and no valve disease. She has hypertension on amlodipine, hydrochlorothiazide and doxazosin, claudication and a 50 pack-year smoking history. Last month ramipril was started, and her creatinine rose from 98 to 162 umol/L within 2 weeks, so it was stopped. She has crackles at both bases, an epigastric bruit and no leg edema.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "30/minute", bp: "204/96 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "She settles over 6 hours with noninvasive ventilation, nitroglycerin and furosemide. Her creatinine today is 141 umol/L.",
        prompt: "Which of the following underlying causes best explains her recurrent episodes?",
        options: [
          "Bilateral renal artery stenosis",
          "Hypertrophic cardiomyopathy",
          "Intermittent complete heart block",
          "Pheochromocytoma",
          "Primary hyperaldosteronism",
        ],
        correct: 0,
        explanation:
          "Recurrent flash pulmonary edema with a normal ejection fraction, resistant hypertension on three drugs, a 65% rise in creatinine within 2 weeks of ramipril, an abdominal bruit and diffuse atherosclerosis together point to bilateral renal artery stenosis. The ESC guideline lists hypertensive pulmonary edema among the high-risk features of this condition. Her echo showed normal wall thickness, which argues against hypertrophic cardiomyopathy. Heart block would give a slow pulse, not 96/minute. Pheochromocytoma and primary aldosteronism do not explain the creatinine rise with an ACE inhibitor.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "pad",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is the most appropriate first test to confirm the cause?",
        options: [
          "Captopril renal scintigraphy",
          "Plasma aldosterone to renin ratio",
          "Renal artery duplex ultrasound",
          "Selective renal angiography",
          "Urine metanephrines",
        ],
        correct: 2,
        explanation:
          "The 2024 ESC peripheral arterial and aortic disease guideline recommends duplex ultrasound as the first imaging test for renal artery stenosis, with CT or MR angiography when duplex is inconclusive. Captopril scintigraphy is a functional test, not the first-line imaging the guideline names. Selective angiography is invasive and is kept for when revascularization is planned. An aldosterone to renin ratio and urine metanephrines look for other causes of secondary hypertension that fit her history less well.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "pad",
      },
      {
        id: "q3",
        kind: "single",
        update: "Duplex ultrasound shows severe stenosis at the origin of both renal arteries. The kidneys measure 9.8 cm and 9.4 cm.",
        prompt: "Which of the following is the most appropriate plan to prevent further episodes of pulmonary edema?",
        options: [
          "Home CPAP for suspected sleep apnea",
          "Referral for renal artery stenting",
          "Restart ramipril at a lower dose",
          "Start a daily loop diuretic",
          "Start spironolactone",
        ],
        correct: 1,
        explanation:
          "The ESC guideline advises against routine revascularization of renal artery stenosis but says it should be considered after optimal medical therapy when there are high-risk features such as hypertensive pulmonary edema, which she has had three times, and the kidney is still viable. Kidneys longer than 8 cm are one sign of viability, and hers measure over 9 cm. Restarting an ACE inhibitor with bilateral stenosis risks another rise in creatinine. A loop diuretic or spironolactone treats volume but not the cause of these episodes. Home CPAP treats sleep apnea, which she has not been shown to have.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "pad",
      },
    ],
    sources: [PAD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-18",
    topic: "pulmonary-edema",
    alsoTopics: ["arrhythmia"],
    title: "Pink sputum at 29 weeks",
    stem:
      "A 27-year-old woman who is 29 weeks pregnant presents to the emergency department with 2 days of worsening shortness of breath, orthopnea and cough with pink frothy sputum. She moved to Canada from Eritrea 1 year ago. As a child she had monthly penicillin injections for a heart problem. She has had one prenatal visit and takes a prenatal vitamin. She is anxious and speaking in short phrases. The first heart sound is loud and there is a low-pitched diastolic rumble at the apex. There are crackles to the mid zones of both lungs. There is no leg edema and the fundal height is 29 cm. The ECG shows atrial fibrillation at 148/minute.",
    vitals: { temperature: "37.1°C oral", pulse: "148/minute irregular", resp: "32/minute", bp: "112/68 mmHg", o2sat: "89% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely underlying cause of her pulmonary edema?",
        options: [
          "Hypertrophic cardiomyopathy",
          "Peripartum cardiomyopathy",
          "Pre-eclampsia with lung edema",
          "Pulmonary embolism",
          "Rheumatic mitral stenosis",
        ],
        correct: 4,
        explanation:
          "A loud first heart sound, an apical diastolic rumble and childhood monthly penicillin, which is secondary prophylaxis after rheumatic fever, point to rheumatic mitral stenosis. The rise in blood volume and heart rate in pregnancy, and now atrial fibrillation, shorten diastolic filling and raise left atrial pressure. Peripartum cardiomyopathy appears late in pregnancy or after delivery and does not cause a diastolic rumble. Her BP of 112/68 mmHg argues against pre-eclampsia. Pulmonary embolism does not produce pink frothy sputum with a diastolic murmur.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "preg",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following drugs is most appropriate to slow her ventricular rate?",
        options: [
          "adenosine 6 mg IV",
          "amiodarone 150 mg IV",
          "atenolol 50 mg PO",
          "digoxin 0.25 mg IV",
          "metoprolol 5 mg IV",
        ],
        correct: 4,
        explanation:
          "In mitral stenosis a fast rate shortens diastole and raises left atrial pressure, so slowing the rate is the main treatment. The ESC pregnancy guideline recommends beta-blockers in symptomatic mitral stenosis, and IV metoprolol is the preferred beta-1 selective agent. Digoxin is an alternative when beta-blockers are not enough and works poorly against high sympathetic drive. Atenolol is linked to fetal growth restriction and acts slowly by mouth. Amiodarone can cause fetal thyroid dysfunction and bradycardia, and its routine use in pregnancy is contraindicated. Adenosine only transiently slows atrial fibrillation.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "preg",
      },
      {
        id: "q3",
        kind: "single",
        update: "After metoprolol her pulse is 104/minute. Her saturation is 91% on 6 L/minute by nasal prongs and crackles persist.",
        prompt: "Which of the following is the most appropriate additional medication for her pulmonary congestion?",
        options: [
          "dobutamine 5 mcg/kg/minute IV",
          "enalapril 5 mg PO",
          "furosemide 40 mg IV",
          "nitroprusside 0.3 mcg/kg/minute IV",
          "spironolactone 25 mg PO",
        ],
        correct: 2,
        explanation:
          "Crackles and hypoxemia persist after rate control, and the ESC pregnancy guideline recommends a diuretic when congestion persists despite a beta-blocker in mitral stenosis, used with care for placental flow. Enalapril is contraindicated in pregnancy because of fetal kidney toxicity. Nitroprusside risks fetal cyanide toxicity. Spironolactone has antiandrogen effects on a male fetus and is avoided. Dobutamine speeds the heart and shortens diastolic filling, which worsens a fixed mitral obstruction.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "preg",
      },
      {
        id: "q4",
        kind: "single",
        update: "Echocardiography shows a mitral valve area of 0.9 cm2 and a dilated left atrium. She remains in atrial fibrillation.",
        prompt: "Which of the following antithrombotic plans is most appropriate for her now?",
        options: [
          "apixaban 5 mg PO twice daily",
          "ASA 81 mg PO daily",
          "dabigatran 150 mg PO twice daily",
          "enoxaparin 70 mg SC twice daily",
          "No anticoagulation",
        ],
        correct: 3,
        explanation:
          "Atrial fibrillation with mitral stenosis and a dilated left atrium carries a high risk of left atrial thrombus, and the ESC pregnancy guideline recommends full therapeutic-dose anticoagulation, with low molecular weight heparin or a vitamin K antagonist. Enoxaparin 1 mg/kg twice daily at 70 kg is 70 mg. DOACs are contraindicated in pregnancy and are not indicated for atrial fibrillation with moderate or severe mitral stenosis. ASA does not prevent cardioembolic stroke adequately. Leaving her without anticoagulation ignores a very high stroke risk.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "preg",
      },
    ],
    sources: [PREG],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-19",
    topic: "pulmonary-edema",
    title: "Warfarin held for a dental extraction",
    stem:
      "A 58-year-old man presents to the emergency department with 3 days of worsening shortness of breath, now at rest, and 2 nights of sleeping in a chair. He had a mechanical mitral valve replacement 6 years ago and takes warfarin. He stopped warfarin 10 days ago for a dental extraction and has not restarted it. He has no fever or chest pain. He is pale and speaking in short sentences. The crisp mechanical closing click heard at his last clinic visit is now muffled. There are crackles to the mid zones of both lungs.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "30/minute", bp: "102/64 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "His INR is 1.3. Hemoglobin is 138 g/L and white cell count 8.4 x 10^9/L. The ECG shows sinus tachycardia.",
        prompt: "Which of the following is the most likely cause of his pulmonary edema?",
        options: [
          "Acute coronary syndrome",
          "Paravalvular leak",
          "Prosthetic valve endocarditis",
          "Prosthetic valve thrombosis",
          "Pulmonary embolism",
        ],
        correct: 3,
        explanation:
          "A mechanical mitral valve, 10 days without warfarin, an INR of 1.3 and a muffled closing click point to obstructive valve thrombosis. Loss of the normal click means a leaflet is no longer moving freely. He has no fever and a normal white cell count, which makes endocarditis less likely. A paravalvular leak adds a regurgitant murmur but leaves the click crisp. He has no chest pain or ischemic ECG change. Pulmonary embolism does not cause bilateral crackles and orthopnea.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "vhd",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations will best confirm the cause of his decompensation?",
        options: [
          "Cardiac magnetic resonance imaging",
          "Coronary angiography",
          "CT pulmonary angiography",
          "Radionuclide ventriculography",
          "Transesophageal echocardiography",
        ],
        correct: 4,
        explanation:
          "The ESC and EACTS valve guideline recommends transthoracic and transesophageal echocardiography, with fluoroscopy or CT where needed, when valve thrombosis is suspected. The transesophageal view shows the mitral prosthesis clearly, measures the gradient and separates thrombus from pannus. Magnetic resonance is degraded by the metal valve and is too slow for an unstable patient. Coronary and pulmonary angiography look for causes his findings do not support. Radionuclide imaging measures ejection fraction but not leaflet motion.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "vhd",
      },
      {
        id: "q3",
        kind: "single",
        update: "Transesophageal echo shows a large thrombus on the mitral prosthesis with one leaflet fixed and a mean gradient of 18 mmHg. Cardiac surgery is available on site.",
        prompt: "Which of the following is the most appropriate definitive treatment for this complication?",
        options: [
          "Alteplase systemic infusion",
          "Catheter thrombectomy",
          "Emergency valve surgery",
          "Heparin infusion alone",
          "Warfarin with a higher INR target",
        ],
        correct: 2,
        explanation:
          "The ESC and EACTS guideline recommends urgent or emergency valve replacement for obstructive mechanical valve thrombosis in a critically ill patient without serious comorbidity. Surgery is on site. Systemic fibrinolysis is reserved for when surgery is not available or carries very high risk, because it brings embolic stroke and bleeding. Heparin alone suits a small nonobstructive thrombus, not a fixed leaflet. A higher INR target will not clear an obstruction that is causing pulmonary edema now. Catheter thrombectomy is not an established treatment for this problem.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "vhd",
      },
      {
        id: "q4",
        kind: "single",
        update: "While he waits for the operating room, his BP falls to 78/50 mmHg and his skin is cool and mottled. Lactate is 5.1 mmol/L.",
        prompt: "Which of the following vasoactive infusions is the most appropriate first agent for him?",
        options: [
          "dobutamine infusion",
          "dopamine infusion",
          "milrinone infusion",
          "norepinephrine infusion",
          "phenylephrine infusion",
        ],
        correct: 3,
        explanation:
          "He has cardiogenic shock with a BP of 78/50 mmHg and a lactate of 5.1 mmol/L. The ESC guideline suggests norepinephrine as the vasopressor of choice when perfusion pressure must be restored. Dobutamine and milrinone lower systemic resistance and can drop his pressure further across a fixed obstruction. Dopamine causes more arrhythmias than norepinephrine, and a faster rate shortens diastolic filling across the blocked valve. Phenylephrine raises afterload with no inotropic support and can lower cardiac output.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "eschf",
      },
    ],
    sources: [VHD, ESCHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-20",
    topic: "pulmonary-edema",
    title: "Chest ache after moving furniture",
    stem:
      "A 31-year-old man presents to the emergency department with 4 days of left-sided chest ache and shortness of breath that began while he was moving furniture. He waited because he thought he had strained a muscle. He smokes tobacco and has no medical history. He is speaking in full sentences. Breath sounds are absent over the left chest and the trachea is midline. A chest X-ray shows a complete left pneumothorax with the lung collapsed toward the hilum and no mediastinal shift. A 12F chest drain is inserted and connected to an underwater seal without suction.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "24/minute", bp: "128/78 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "Forty minutes later he has repeated coughing and pink frothy sputum. He has not vomited. His saturation is 85% on 6 L/minute. The drain is bubbling and swinging. A repeat X-ray shows the left lung expanded, with new airspace opacity throughout it.",
        prompt: "Which of the following is the most likely cause of his new hypoxemia?",
        options: [
          "Aspiration pneumonitis",
          "Hemothorax from the drain",
          "Pulmonary embolism",
          "Re-expansion pulmonary edema",
          "Tension pneumothorax",
        ],
        correct: 3,
        explanation:
          "Cough, pink frothy sputum and hypoxemia within an hour of draining a lung that had been collapsed for 4 days, with new opacity confined to the re-expanded lung, fit re-expansion pulmonary edema. The BTS statement describes hypoxemia and new alveolar infiltrates after rapid re-expansion, usually within the first hour, and notes the risk when a large pneumothorax is drained. A bubbling, swinging drain and an expanded lung argue against tension pneumothorax. A hemothorax shows pleural fluid, not airspace opacity with frothy sputum. Embolism would not confine new opacity to the drained lung, and he has not vomited to aspirate.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "btsproc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate step in his management?",
        options: [
          "Apply suction to the drain",
          "Clamp the chest drain",
          "furosemide 40 mg IV",
          "Oxygen with the drain unclamped",
          "Remove the chest drain",
        ],
        correct: 3,
        explanation:
          "The BTS statement manages re-expansion pulmonary edema with oxygen to target saturations and advises against clamping a bubbling drain, because a continuing air leak can build into a tension pneumothorax. Clamping is the step for a drain placed for an effusion, not for this bubbling pneumothorax drain. Suction speeds re-expansion, and the statement advises against routine suction at the first drainage of a pneumothorax. Removing the drain lets the pneumothorax recur. Diuretics are used by some clinicians but are not evidence based.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "btsproc",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Thirty minutes later he is on a nonrebreather mask at 15 L/minute. His saturation is 84% and his respiratory rate is 34/minute. He is alert and follows commands. The drain is still bubbling.",
        prompt: "Which of the following is the most appropriate next step in his respiratory support?",
        options: [
          "Clamp the drain, then start CPAP",
          "Continue nonrebreather for 1 hour",
          "CPAP with the drain left open",
          "Rapid sequence intubation",
          "Venturi mask at 40%",
        ],
        correct: 2,
        explanation:
          "Worsening hypoxemia on a nonrebreather in an alert patient calls for positive pressure. The BTS statement lists CPAP or high flow oxygen for re-expansion pulmonary edema, and with a pneumothorax it requires a functioning open drain, because positive pressure can otherwise cause tension. Clamping before CPAP removes that protection. Another hour on the nonrebreather lets him tire. A Venturi mask gives less oxygen than the mask he is failing on. He is alert and protecting his airway, so intubation is kept for failure of positive pressure support.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "btsproc",
      },
    ],
    sources: [BTSPROC],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-21",
    topic: "pulmonary-edema",
    alsoTopics: ["tox"],
    title: "Breathless and agitated after a party",
    stem:
      "A 34-year-old man is brought to the emergency department by ambulance with 1 hour of severe shortness of breath and chest tightness. He snorted cocaine repeatedly over the previous 3 hours. He has no medical history and takes no medications. He is restless, sweaty and speaking in short phrases. His pupils are 6 mm. There are crackles to the mid zones of both lungs. The ECG shows sinus tachycardia without ST elevation.",
    vitals: { temperature: "37.8°C oral", pulse: "132/minute", resp: "34/minute", bp: "212/124 mmHg", o2sat: "86% on 15 L/minute by nonrebreather mask", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        prompt: "Which of the following medications are most appropriate to give him first while noninvasive ventilation is set up?",
        options: [
          "esmolol 50 mcg/kg/minute IV",
          "haloperidol 5 mg IM",
          "ketamine 1 mg/kg IV",
          "labetalol 20 mg IV",
          "lorazepam 2 mg IV",
          "metoprolol 5 mg IV",
          "morphine 4 mg IV",
          "nitroglycerin 0.4 mg sublingual",
        ],
        correct: [4, 7],
        explanation:
          "Cocaine drives his hypertension, tachycardia and agitation through sympathetic excess, and the AHA statement advises a benzodiazepine and nitroglycerin as the first drugs. Lorazepam lowers central sympathetic outflow, and nitroglycerin lowers preload and afterload at a BP of 212/124 mmHg. The statement advises against beta-blockers in acute cocaine toxicity, because unopposed alpha stimulation can raise pressure and worsen coronary spasm, which rules out esmolol and metoprolol. Labetalol is at most a later option once a vasodilator has been given, because its beta effect predominates. Haloperidol can lower the seizure threshold and impair heat loss. Ketamine adds sympathetic stimulation. Morphine is not recommended routinely in pulmonary edema.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "mccord",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "After 30 minutes on noninvasive ventilation and two doses of lorazepam, he is combative and keeps pulling off the mask. His saturation is 81%. Venous gas: pH 7.21, PCO2 58 mmHg.",
        prompt: "Which of the following is the most appropriate next step in his respiratory management?",
        options: [
          "Endotracheal intubation",
          "High flow nasal oxygen",
          "Nonrebreather mask at 15 L/minute",
          "Reapply NIV after haloperidol",
          "Restrain and continue NIV",
        ],
        correct: 0,
        explanation:
          "Noninvasive ventilation needs a cooperative patient, and he cannot keep the mask on. A saturation of 81% with a pH of 7.21 and a PCO2 of 58 mmHg after 30 minutes means NIV has failed, and the ERS/ATS guideline warns that delayed intubation in NIV failure worsens outcomes. High flow oxygen and a nonrebreather give less support than the NIV he is already failing. Haloperidol carries risk in cocaine toxicity and will not fix respiratory failure. Physical restraint of an agitated patient with stimulant toxicity worsens heat production and acidosis and does not treat respiratory failure.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "niv",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After intubation and a propofol infusion his BP is 184/106 mmHg. The ECG now shows 1 mm ST depression in V4 to V6. Troponin is mildly raised.",
        prompt: "Which of the following is the most appropriate medication to control his blood pressure now?",
        options: [
          "clonidine 0.1 mg PO",
          "esmolol infusion",
          "labetalol infusion",
          "metoprolol 5 mg IV",
          "nitroglycerin infusion",
        ],
        correct: 4,
        explanation:
          "He remains hypertensive with ischemic ST depression and pulmonary edema after cocaine. The AHA statement recommends nitroglycerin, which relieves coronary vasoconstriction and lowers preload and afterload, and it can be titrated quickly by infusion. Esmolol and metoprolol are beta-blockers, which the statement advises against in the acute phase of cocaine toxicity. Labetalol is only a conditional option after a vasodilator, and its beta effect predominates and does not reverse coronary vasoconstriction. Oral clonidine cannot be titrated and acts slowly in an intubated patient.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "mccord",
      },
    ],
    sources: [MCCORD, NIV],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-22",
    topic: "pulmonary-edema",
    alsoTopics: ["tox"],
    title: "Pink froth after naloxone",
    stem:
      "A 27-year-old man is brought to the emergency department by ambulance after a friend found him unresponsive with a used fentanyl pipe. Paramedics gave naloxone 4 mg intranasally and then 0.4 mg IV, and he woke up. On arrival he is coughing pink frothy sputum. He has no medical history. No vomiting was seen. He is alert and oriented. There are crackles throughout both lungs. Bedside ultrasound shows diffuse B-lines in both lungs, a normal left ventricular size and function and no pericardial effusion. The JVP is not raised.",
    vitals: { temperature: "37.2°C oral", pulse: "108/minute", resp: "28/minute", bp: "138/84 mmHg", o2sat: "84% on 15 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his hypoxemia?",
        options: [
          "Aspiration pneumonitis",
          "Cardiogenic pulmonary edema",
          "Diffuse alveolar hemorrhage",
          "Noncardiogenic pulmonary edema",
          "Septic pulmonary emboli",
        ],
        correct: 3,
        explanation:
          "Pink frothy sputum and diffuse B-lines soon after opioid reversal, with normal left ventricular function and no raised JVP, fit opioid-associated noncardiogenic pulmonary edema. Radke and colleagues describe this with many opioids, often around the time of naloxone reversal. A normal ventricle argues against a cardiogenic cause. No vomiting was seen, and aspiration usually gives patchy dependent change rather than diffuse B-lines. He did not inject, so septic emboli are unlikely. Alveolar hemorrhage is rare and is not linked to naloxone reversal.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "radke",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his hypoxemia now?",
        options: [
          "CPAP by face mask",
          "furosemide 40 mg IV",
          "methylprednisolone 125 mg IV",
          "naloxone 2 mg IV",
          "nitroglycerin 0.4 mg sublingual",
        ],
        correct: 0,
        explanation:
          "Opioid-associated pulmonary edema comes from leaky capillaries rather than high filling pressure, and the review by Radke and colleagues describes supportive care with oxygen and positive pressure. CPAP recruits flooded alveoli in an alert patient who can protect his airway. He is not volume overloaded and has a normal ventricle, so furosemide and nitroglycerin have little to act on and can drop his pressure. Corticosteroids have no proven role. He is already awake, and another 2 mg of naloxone would bring on severe withdrawal.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "radke",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Ninety minutes after the last naloxone dose he becomes drowsy on CPAP. His respiratory rate is 8/minute, his pupils are pinpoint and a venous gas shows PCO2 64 mmHg.",
        prompt: "Which of the following is the most appropriate next step?",
        options: [
          "Bilevel NIV with backup rate",
          "flumazenil 0.2 mg IV",
          "Increase the CPAP to 12 cm H2O",
          "naloxone 0.4 mg IV",
          "Rapid sequence intubation",
        ],
        correct: 3,
        explanation:
          "Recurrent sedation with pinpoint pupils and hypoventilation 90 minutes after naloxone means the fentanyl has outlasted the antidote. Boyer advises a titrated repeat dose of naloxone to restore breathing, followed by an infusion if sedation recurs again. A mask with a backup rate in a drowsy patient risks aspiration and does not treat the cause. More CPAP does not raise his respiratory rate. Flumazenil reverses benzodiazepines and can provoke seizures. Intubation may still be needed, but the reversible cause should be treated first.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "boyer",
      },
      {
        id: "q4",
        kind: "menu",
        select: 3,
        update: "The next morning he is alert and his chest has cleared. His saturation is 96% on room air. He wants to go home.",
        prompt: "Which of the following are the most appropriate steps before he leaves the emergency department?",
        options: [
          "Ambulatory oxygen saturation check",
          "Chest X-ray repeat in 6 weeks",
          "Echocardiogram before discharge",
          "Home oxygen prescription",
          "Offer buprenorphine-naloxone",
          "Outpatient chest CT",
          "Serial troponin testing",
          "Take-home naloxone kit",
        ],
        correct: [0, 4, 7],
        explanation:
          "Checking his saturation while he walks shows he can manage exertion before he leaves. The 2024 Canadian national guideline names buprenorphine and methadone as first-line opioid agonist treatments and supports access to take-home naloxone kits. Offering buprenorphine-naloxone now starts one of those first-line options, and a kit lets others reverse the next overdose. His edema was noncardiogenic, and bedside ultrasound showed a normal ventricle, so a formal echo and serial troponins add little. This edema clears within a day or two, so repeat imaging is not needed. He is on room air, so home oxygen has no role.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "crism",
      },
    ],
    sources: [RADKE, BOYER, CRISM],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-23",
    topic: "pulmonary-edema",
    alsoTopics: ["analgesia-sedation"],
    title: "Coughing after a shoulder reduction",
    stem:
      "A 22-year-old man presents to the emergency department with an anterior shoulder dislocation from a hockey game. He is healthy and takes no medications. Ketamine 1 mg/kg IV is given for reduction. During the reduction he develops stridor, then silent chest movements, and his saturation falls to 70%. Jaw thrust and bag-mask ventilation with PEEP relieve the spasm within 2 minutes. He did not vomit. Twenty minutes later he coughs pink frothy sputum. He is alert. Breath sounds are equal, with crackles in both lungs. There is no rash or wheeze.",
    vitals: { temperature: "36.9°C oral", pulse: "112/minute", resp: "30/minute", bp: "134/78 mmHg", o2sat: "88% on 6 L/minute by nasal prongs", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his new hypoxemia after the reduction?",
        options: [
          "Aspiration of gastric contents",
          "Negative pressure pulmonary edema",
          "Pneumothorax from bag ventilation",
          "Pulmonary embolism",
          "Ventricular dysfunction from ketamine",
        ],
        correct: 1,
        explanation:
          "Strong inspiratory effort against a closed glottis during laryngospasm creates very negative intrathoracic pressure, which pulls fluid into the alveoli. Bhattacharya and colleagues describe onset within minutes to hours, with pink frothy sputum, often in young muscular men. He did not vomit, which makes aspiration less likely. Equal breath sounds argue against a pneumothorax. A healthy young man is unlikely to have a pulmonary embolism with this timing. Ketamine usually raises heart rate and BP rather than causing ventricular failure.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "nppe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for his hypoxemia?",
        options: [
          "ceftriaxone 1 g IV",
          "CPAP by face mask",
          "epinephrine 0.5 mg IM",
          "methylprednisolone 125 mg IV",
          "salbutamol 5 mg nebulized",
        ],
        correct: 1,
        explanation:
          "Negative pressure pulmonary edema is treated with supportive care, and Bhattacharya and colleagues describe oxygen and positive pressure as the mainstays while the edema clears, often within 24 to 48 hours. CPAP recruits flooded alveoli in an alert patient who protects his airway. He did not aspirate, so antibiotics are not indicated. He has no rash, wheeze or hypotension to suggest anaphylaxis, so epinephrine is not needed. Corticosteroids and salbutamol do not treat edema caused by pressure.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "nppe",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After 30 minutes of CPAP at 10 cm H2O with an FiO2 of 0.8, his saturation is 85%. His respiratory rate is 40/minute, he is using his neck muscles and he says he is tiring.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Add furosemide 80 mg IV",
          "Intubate and ventilate with PEEP",
          "Nebulized racemic epinephrine",
          "Switch to high flow nasal oxygen",
          "Watch for 1 hour on CPAP",
        ],
        correct: 1,
        explanation:
          "A saturation of 85% on an FiO2 of 0.8, a respiratory rate of 40/minute, accessory muscle use and fatigue after 30 minutes mean CPAP is failing. He needs intubation and ventilation with PEEP before he tires into arrest. Watching longer wastes the time left to intubate safely. High flow oxygen gives less positive pressure than the CPAP he is failing. Racemic epinephrine treats upper airway swelling, and his laryngospasm has resolved. Bhattacharya and colleagues include diuresis in supportive care unless the patient is in shock, but furosemide acts too slowly to rescue failing CPAP and does not replace ventilatory support.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "nppe",
      },
    ],
    sources: [NPPE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-24",
    topic: "pulmonary-edema",
    alsoTopics: ["environmental"],
    title: "Cough and blood-tinged sputum after the swim leg",
    stem:
      "You are working in a community hospital emergency department near a lake that is hosting a triathlon. A 46-year-old woman is brought in by ambulance after she stopped during the open-water swim with shortness of breath and cough. Race staff pulled her into a kayak. She did not go under the water or lose consciousness. The water was 16°C and she wore a tight wetsuit. She now coughs blood-tinged sputum. She has hypertension treated with amlodipine. Crackles are heard at both bases. Heart sounds are normal and there is no wheeze.",
    vitals: { temperature: "36.2°C tympanic", pulse: "104/minute", resp: "26/minute", bp: "152/94 mmHg", o2sat: "90% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for her symptoms?",
        options: [
          "Community-acquired pneumonia",
          "Immersion pulmonary edema",
          "Pulmonary embolism",
          "Spontaneous pneumothorax",
          "Submersion injury with aspiration",
        ],
        correct: 1,
        explanation:
          "Dyspnea, cough and blood-tinged sputum starting during a cold open-water swim, with bilateral crackles, fit immersion pulmonary edema. Moon and colleagues showed that people prone to it have higher pulmonary artery and wedge pressures during immersed exercise, and cold water, a tight wetsuit and hypertension add risk. She never went under the water, so aspiration is unlikely. Bilateral crackles argue against a pneumothorax and against embolism. She has no fever, and a sudden onset during exertion does not fit pneumonia.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "sipe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important to look for a predisposing condition?",
        options: [
          "Echocardiography",
          "Holter monitoring",
          "Methacholine challenge",
          "Pulmonary function tests",
          "Ventilation perfusion scan",
        ],
        correct: 0,
        explanation:
          "Immersion pulmonary edema is a hemodynamic edema caused by high pulmonary capillary pressure, and Moon and colleagues link it to hypertension and to left heart problems such as hypertrophy or valve disease. Echocardiography looks for these, and her treated hypertension makes it more relevant. Holter monitoring looks for arrhythmia, which her history does not suggest. Methacholine challenge and pulmonary function tests look for asthma, but she has no wheeze. A ventilation perfusion scan tests for embolism, which the picture does not suggest.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "sipe",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update:
          "Six hours later her chest is clear. Her saturation is 97% on room air and stays above 95% during a brisk walk along the corridor. She plans to race again next month.",
        prompt: "Which of the following are the most appropriate pieces of advice before she is discharged?",
        options: [
          "Arrange early cardiology follow-up",
          "Avoid open-water swimming alone",
          "Daily inhaled corticosteroid",
          "Daily sildenafil 50 mg PO",
          "Furosemide before each race",
          "Salbutamol inhaler before each swim",
          "Stop amlodipine",
        ],
        correct: [0, 1],
        explanation:
          "Her edema has cleared and she passed an exertion test, but immersion pulmonary edema often recurs. Moon and colleagues showed higher pulmonary vascular pressures in susceptible swimmers, so a cardiology review for hypertension or heart disease should come before more racing. If she does swim, she should not swim alone. Their study tested a single dose of sildenafil before a swim, not daily treatment. A diuretic before exercise risks dehydration and cramps. Inhaled corticosteroids and salbutamol treat asthma, which she does not have. Stopping amlodipine would raise her BP and add risk.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "sipe",
      },
    ],
    sources: [SIPE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-25",
    topic: "pulmonary-edema",
    title: "A puffy face and a cough at 8",
    stem:
      "An 8-year-old boy presents to the emergency department with his mother because of 3 days of cough and puffy eyelids. Since last night he cannot lie flat. A walk-in clinic diagnosed bronchitis yesterday. He had a sore throat 2 weeks ago that was not treated. His urine has looked dark brown and he has passed less of it. He has no medical history. There is periorbital and pretibial edema. There are crackles at both bases and the liver edge is 3 cm below the costal margin.",
    vitals: { temperature: "37.0°C oral", pulse: "112/minute", resp: "32/minute", bp: "148/98 mmHg", o2sat: "92% on room air", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly suggests his cough is not from a respiratory infection?",
        options: [
          "Blood pressure of 148/98 mmHg",
          "Cough for 3 days",
          "Crackles at both bases",
          "Oxygen saturation of 92%",
          "Respiratory rate of 32/minute",
        ],
        correct: 0,
        explanation:
          "A BP of 148/98 mmHg is well above the 95th percentile for any 8-year-old and points to fluid retention or kidney disease rather than bronchitis. With orthopnea, edema, dark urine and a recent sore throat, it suggests volume overload from acute glomerulonephritis. Cough, basal crackles, a saturation of 92% and a respiratory rate of 32/minute are all found in lower respiratory infections as well as in pulmonary edema, so none of them separates the two.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "psgn",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most useful first test to confirm the cause of his fluid overload?",
        options: [
          "Antinuclear antibody",
          "Echocardiography",
          "Throat swab culture",
          "Two-view chest X-ray",
          "Urinalysis with microscopy",
        ],
        correct: 4,
        explanation:
          "Dark urine, oliguria, edema and hypertension 2 weeks after a sore throat point to poststreptococcal glomerulonephritis. Urinalysis with microscopy showing blood, red cell casts and protein confirms a nephritic cause at the bedside. Rodriguez-Iturbe and Musser note that throat cultures are often negative by the time nephritis appears, so serology and a low C3 are used instead. A chest X-ray shows the edema but not its cause. Echocardiography looks for a cardiac cause his history does not suggest. Antinuclear antibody testing is for lupus nephritis, which is less likely here.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "psgn",
      },
      {
        id: "q3",
        kind: "single",
        update: "Urinalysis shows 3+ blood, red cell casts and 1+ protein. Creatinine is 88 umol/L and potassium is 5.1 mmol/L.",
        prompt: "Which of the following is the most appropriate treatment for his pulmonary edema?",
        options: [
          "ceftriaxone 1.3 g IV",
          "furosemide 26 mg IV",
          "methylprednisolone 26 mg IV",
          "normal saline 520 mL IV",
          "salbutamol 5 mg nebulized",
        ],
        correct: 1,
        explanation:
          "Pulmonary edema and hypertension in poststreptococcal glomerulonephritis come from salt and water retention, and Rodriguez-Iturbe and Musser describe loop diuretics as the main treatment. Furosemide 1 mg/kg IV at 26 kg is 26 mg. A 20 mL/kg saline bolus of 520 mL would worsen the overload. Antibiotics clear the streptococcus but do not change the course of the nephritis. Corticosteroids have no role in typical poststreptococcal disease. Salbutamol does not treat edema.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "psgn",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Over 4 hours after furosemide his urine output is 0.3 mL/kg/hour. His saturation is 88% on 4 L/minute and his work of breathing is rising. Potassium is now 6.6 mmol/L and creatinine 214 umol/L.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Arrange urgent dialysis",
          "Give normal saline 20 mL/kg",
          "Start enalapril 0.1 mg/kg PO",
          "Start IV methylprednisolone",
          "Start oral sodium polystyrene",
        ],
        correct: 0,
        explanation:
          "He has oliguria despite furosemide, worsening pulmonary edema, a potassium of 6.6 mmol/L and a creatinine that has more than doubled from 88 to 214 umol/L. Rodriguez-Iturbe and Musser note that dialysis may be needed for severe fluid overload or hyperkalemia, and he needs a pediatric nephrology team for it now. A saline bolus adds to the overload. Enalapril can raise potassium further in acute kidney injury. Sodium polystyrene is too slow for a potassium of 6.6 mmol/L. Corticosteroids do not treat typical poststreptococcal nephritis.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "psgn",
      },
    ],
    sources: [PSGN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-26",
    topic: "pulmonary-edema",
    title: "Double vision during cancer treatment",
    stem:
      "A 67-year-old man presents to the emergency department with 3 days of shortness of breath, fatigue and aching thighs. For 2 days he has had double vision and droopy eyelids. He has metastatic melanoma. He received his first dose of nivolumab with ipilimumab 4 weeks ago and his second dose 7 days ago. He has hypertension treated with ramipril. He is tired but alert. There is bilateral ptosis and weakness of hip flexion. The JVP is 5 cm above the sternal angle. There are crackles at both lung bases. There is no leg edema.",
    vitals: { temperature: "37.1°C oral", pulse: "112/minute", resp: "26/minute", bp: "108/68 mmHg", o2sat: "90% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "High-sensitivity troponin I is 1850 ng/L (reference below 26 ng/L) and CK is 4200 U/L. The ECG shows sinus tachycardia with a new right bundle branch block and a PR interval of 240 ms. Bedside echo shows an ejection fraction of 40% and no pericardial effusion.",
        prompt: "Which of the following is the most likely cause of his pulmonary edema?",
        options: [
          "Acute coronary syndrome",
          "Checkpoint inhibitor myocarditis",
          "Immunotherapy pneumonitis",
          "Malignant pericardial effusion",
          "Pulmonary tumour embolism",
        ],
        correct: 1,
        explanation:
          "A very high troponin with new conduction disease and a reduced ejection fraction, weeks after starting nivolumab with ipilimumab, point to immune checkpoint inhibitor myocarditis. The International Cardio-Oncology Society definition accepts a troponin elevation with two minor criteria once acute coronary syndrome is excluded. He has several: the clinical syndrome, new conduction system disease, a fall in systolic function, and other immune-related adverse events, particularly myositis and myasthenia gravis, which fit his CK of 4200 U/L, hip flexor weakness and ptosis. Acute coronary syndrome does not explain the muscle and eyelid findings. Pneumonitis does not raise troponin or cause conduction block. Echo shows no effusion. Tumour emboli strain the right ventricle rather than cause left-sided failure.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "icos",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment directed at the cause of his heart failure?",
        options: [
          "Dual antiplatelet therapy",
          "Full-dose heparin infusion",
          "High-dose IV corticosteroids",
          "Pyridostigmine by mouth alone",
          "Resume immunotherapy after diuresis",
        ],
        correct: 2,
        explanation:
          "Myocarditis from a checkpoint inhibitor is an immune injury, and the SITC guideline advises high-dose corticosteroids as soon as the diagnosis is likely, methylprednisolone 1000 mg IV daily for 3 to 5 days, with further immunosuppression if there is no response within 24 hours. The same guideline advises that permanent discontinuation of the checkpoint inhibitor be seriously considered, so resuming it after diuresis would risk restarting the injury. Dual antiplatelet therapy and heparin treat a coronary occlusion he does not have. Pyridostigmine may ease the eyelid weakness but does nothing for the inflammation in his heart.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "sitc",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        update:
          "Four hours later he is drowsy, his voice is weak and he struggles to clear secretions. His saturation is 85% on a nonrebreather mask. His BP is 82/54 mmHg, his hands are cool and lactate is 4.3 mmol/L.",
        prompt: "Which of the following are the most appropriate next steps in his management?",
        options: [
          "Bilevel noninvasive ventilation",
          "Endotracheal intubation",
          "furosemide 80 mg IV",
          "High flow nasal oxygen",
          "milrinone infusion",
          "norepinephrine infusion",
          "normal saline 2 L IV",
        ],
        correct: [1, 5],
        explanation:
          "Drowsiness, bulbar weakness and poor secretion clearance mean he cannot protect his airway, which makes noninvasive ventilation unsafe, so he needs intubation. A BP of 82/54 mmHg with cool hands and a lactate of 4.3 mmol/L is cardiogenic shock, and the ESC heart failure guideline suggests norepinephrine to restore perfusion pressure. Bilevel ventilation and high flow oxygen do not protect his airway. Milrinone and furosemide lower his pressure further. A 2 L saline bolus will worsen his pulmonary edema.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "eschf",
      },
    ],
    sources: [ICOS, SITC, ESCHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-27",
    topic: "pulmonary-edema",
    alsoTopics: ["arrhythmia"],
    title: "Tired, dizzy and short of breath at 83",
    stem:
      "An 83-year-old man is brought to the emergency department by ambulance with 2 days of fatigue, shortness of breath and two near-fainting spells. Last night he slept sitting up. He has hypertension treated with ramipril and amlodipine. He takes no rate-slowing drugs. He is pale and speaking in full sentences. The pulse is slow and regular. There are cannon a waves in the neck. There are crackles at both lung bases and mild ankle edema.",
    vitals: { temperature: "36.5°C oral", pulse: "34/minute regular", resp: "26/minute", bp: "168/62 mmHg", o2sat: "90% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations will most quickly identify the cause of his decompensation?",
        options: [
          "Arterial blood gas",
          "Bedside echocardiography",
          "Electrocardiogram",
          "Portable chest X-ray",
          "Serum troponin level",
        ],
        correct: 2,
        explanation:
          "A regular pulse of 34/minute with cannon a waves means the atria and ventricles are beating independently, which suggests complete heart block. An ECG confirms this in minutes and shows the level of the block. The wide pulse pressure fits the large stroke volume of a slow heart. A chest X-ray and blood gas show the edema and its effect on gas exchange but not its cause. Echocardiography shows function but not the rhythm. Troponin looks for infarction, which can cause block, but the ECG comes first and is faster.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "pacing",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The ECG shows complete heart block with a wide complex escape rhythm at 34/minute. Two doses of atropine 1 mg IV had no effect. Transcutaneous pacing does not capture at maximum output. His BP is now 84/40 mmHg.",
        prompt: "Which of the following infusions is most appropriate while transvenous pacing is arranged?",
        options: [
          "dobutamine 5 mcg/kg/minute IV",
          "epinephrine 2 mcg/minute IV",
          "furosemide 10 mg/hour IV",
          "milrinone 0.25 mcg/kg/minute IV",
          "nitroglycerin 20 mcg/minute IV",
        ],
        correct: 1,
        explanation:
          "He has symptomatic bradycardia with hypotension after atropine has failed and pacing will not capture. The AHA guideline, used in Canada through Heart and Stroke, advises an epinephrine infusion at 2 to 10 mcg/minute or dopamine as a bridge to transvenous pacing. Epinephrine raises both rate and contractility. Dobutamine and milrinone lower systemic resistance and can drop his BP further. Nitroglycerin and furosemide treat congestion but would worsen hypotension when the cause is a rate of 34/minute.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "acls",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "A transvenous pacing wire is placed and his edema clears over 24 hours. Troponin is normal. Echo shows an ejection fraction of 55%. The block persists.",
        prompt: "Which of the following is the definitive treatment for the cause of his pulmonary edema?",
        options: [
          "Coronary angiography",
          "Diuretic uptitration",
          "Dual-chamber pacemaker",
          "Implantable defibrillator",
          "Sacubitril-valsartan",
        ],
        correct: 2,
        explanation:
          "Persistent complete heart block without a reversible cause is an indication for a permanent pacemaker in the ESC pacing guideline, and a dual-chamber device restores atrioventricular timing. His edema came from a very slow rate, so restoring the rate treats the cause. A normal troponin does not point to ischemia, so angiography is not needed to explain the block. An implantable defibrillator treats ventricular arrhythmias and is not indicated with an ejection fraction of 55%. Diuretics and sacubitril-valsartan do not correct heart block.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "pacing",
      },
    ],
    sources: [PACING, ACLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-28",
    topic: "pulmonary-edema",
    title: "Flu symptoms 18 days after a new medication",
    stem:
      "You are working in a community hospital emergency department. A 24-year-old man presents with 3 days of fever, muscle aches, cough and shortness of breath. He was started on clozapine 18 days ago for treatment-resistant schizophrenia, and the dose was increased to 250 mg daily last week. He takes no other medications. A walk-in clinic told him he had influenza 2 days ago. He is tired but alert. The JVP is 5 cm above the sternal angle and there are crackles at both lung bases. There is no rigidity.",
    vitals: { temperature: "38.4°C oral", pulse: "128/minute", resp: "28/minute", bp: "102/64 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "Troponin T is 310 ng/L (reference below 14 ng/L). CRP is 142 mg/L. CK is 180 U/L. The ECG shows sinus tachycardia with diffuse T wave inversion. The chest X-ray shows interstitial edema and small effusions.",
        prompt: "Which of the following is the most likely diagnosis for his illness?",
        options: [
          "Aspiration pneumonia",
          "Bacterial pneumonia",
          "Drug-induced myocarditis",
          "Neuroleptic malignant syndrome",
          "Pulmonary embolism",
        ],
        correct: 2,
        explanation:
          "Fever, tachycardia, a troponin more than 20 times the upper limit, a CRP of 142 mg/L and pulmonary edema 18 days after starting clozapine fit clozapine myocarditis. Ronaldson and colleagues found most cases start between days 14 and 21, often with flu-like symptoms that are easily dismissed. Pneumonia does not explain this degree of troponin rise with diffuse T wave inversion and a raised JVP. He has no rigidity and a CK of 180 U/L, which argues against neuroleptic malignant syndrome. Bilateral edema does not fit pulmonary embolism.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "cloz",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate change to his medications?",
        options: [
          "Add oral prednisone",
          "Continue clozapine with monitoring",
          "Halve the clozapine dose",
          "Stop clozapine today",
          "Switch to depot haloperidol",
        ],
        correct: 3,
        explanation:
          "Ronaldson and colleagues advise stopping clozapine when troponin is more than twice the upper limit or CRP is above 100 mg/L, and he exceeds both. Continuing or halving the dose leaves the cause in place while the heart is failing. Corticosteroids have no proven role in this drug-induced myocarditis. Choosing a new antipsychotic, such as a depot injection, is a decision for psychiatry after he recovers and does not treat the myocarditis today.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "cloz",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Six hours later his BP is 82/50 mmHg, his hands are cool and lactate is 4.8 mmol/L. Bedside echo shows an ejection fraction of about 20%. A norepinephrine infusion is started.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Community hospital ICU",
          "Internal medicine ward with telemetry",
          "Psychiatric unit with cardiology consult",
          "Step-down unit at this hospital",
          "Transfer to a tertiary cardiac ICU",
        ],
        correct: 4,
        explanation:
          "He is in cardiogenic shock with an ejection fraction of about 20% and a lactate of 4.8 mmol/L, despite starting a vasopressor. The ESC guideline advises that short-term mechanical circulatory support should be considered in cardiogenic shock as a bridge to recovery or decision, and that venoarterial ECMO may be considered in fulminant myocarditis, so he needs a centre that can provide it. Fulminant myocarditis in a young patient can recover fully if he is bridged through the acute phase. A community ICU, step-down unit or ward cannot offer mechanical support if he worsens. A psychiatric unit cannot manage shock.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "eschf",
      },
    ],
    sources: [CLOZ, ESCHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-29",
    topic: "pulmonary-edema",
    alsoTopics: ["asthma-copd"],
    title: "Adult-onset asthma that inhalers do not help",
    stem:
      "A 58-year-old man presents to the emergency department with 4 months of shortness of breath on exertion and a night-time cough with wheeze. His family physician diagnosed adult-onset asthma. Salbutamol and a budesonide-formoterol inhaler have not helped. He now has to rest halfway up the stairs at home. He has hypertension, obstructive sleep apnea and a BMI of 43 kg/m2. He is comfortable at rest. The JVP cannot be seen. There are faint crackles at both bases and 1+ ankle edema. There is scattered expiratory wheeze.",
    vitals: { temperature: "36.7°C oral", pulse: "94/minute", resp: "20/minute", bp: "156/96 mmHg", o2sat: "95% on room air", weight: "138 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional symptoms would most suggest heart failure rather than asthma in this man?",
        options: [
          "Breathless when bending to tie shoes",
          "Chest tightness after hard exercise",
          "Cough on exposure to cold air",
          "Symptoms worse in pollen season",
          "Wheeze after contact with cats",
        ],
        correct: 0,
        explanation:
          "Breathlessness on bending forward, called bendopnea, comes from a rise in filling pressure when the abdomen is compressed, and the ESC guideline lists it among the less typical symptoms of heart failure, a feature of advanced disease. With his night cough, basal crackles, ankle edema and failed inhalers, it points to cardiac wheeze. Chest tightness after hard exercise, cough in cold air, pollen season symptoms and wheeze after contact with cats are typical asthma triggers and point toward airway disease, not the heart.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "eschf",
      },
      {
        id: "q2",
        kind: "single",
        update: "His NT-proBNP is 410 pg/mL. Creatinine is 84 umol/L. The ECG shows sinus rhythm with left ventricular hypertrophy.",
        prompt: "Which of the following best describes this NT-proBNP result in his case?",
        options: [
          "Diagnostic of heart failure at age 58",
          "Excludes heart failure at any age",
          "Falsely raised by his obesity",
          "Indeterminate and lowered by obesity",
          "Raised because of his sleep apnea",
        ],
        correct: 3,
        explanation:
          "His NT-proBNP of 410 pg/mL is above the acute rule-out threshold of 300 pg/mL, and above the 125 pg/mL used for gradual symptoms, but below the acute rule-in threshold of 900 pg/mL that both the HFA guidance and the ESC guideline set at age 58, so it is indeterminate. The Heart Failure Association guidance notes that obesity lowers natriuretic peptide levels and suggests cut-offs about half as high. That gives 150 pg/mL to rule out and 450 pg/mL to rule in, and 410 pg/mL still falls between them, so at a BMI of 43 kg/m2 it should raise concern rather than reassure. It does not exclude heart failure, and obesity does not raise the level. Sleep apnea is not a main cause of a raised value, and his normal creatinine removes kidney disease as a reason.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "hfanp",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation to confirm or exclude heart failure?",
        options: [
          "Cardiac magnetic resonance",
          "Echocardiography",
          "Exercise treadmill test",
          "Holter monitoring",
          "Repeat NT-proBNP in 6 hours",
        ],
        correct: 1,
        explanation:
          "When the natriuretic peptide does not rule heart failure out, the ESC guideline recommends echocardiography to assess structure and function and to separate reduced from preserved ejection fraction. Repeating the NT-proBNP will not settle an indeterminate value in an obese patient. Cardiac magnetic resonance is used when echo images are poor or a specific cause is suspected, not as the first test. A treadmill test looks for ischemia and Holter monitoring for arrhythmia, neither of which confirms heart failure.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "eschf",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Echo shows an ejection fraction of 30%. He walks for 3 minutes without desaturation and his pulse stays below 100/minute. He lives with his wife and has a family physician. The team plans to discharge him on new heart failure medications.",
        prompt: "Which of the following follow-up plans is most appropriate for him?",
        options: [
          "Family physician review in 3 months",
          "Heart failure clinic review within 2 weeks",
          "Repeat NT-proBNP in 6 months",
          "Sleep clinic referral only",
          "No follow-up unless symptoms worsen",
        ],
        correct: 1,
        explanation:
          "He has a new diagnosis of heart failure with reduced ejection fraction and is starting new drugs. The ESC guideline recommends an early visit 1 to 2 weeks after discharge to check congestion, tolerance and kidney function and to titrate therapy. A review in 3 months leaves him on untitrated doses for too long. A repeat NT-proBNP in 6 months does not assess him soon enough. His sleep apnea needs attention, but it does not replace heart failure follow-up. Waiting for symptoms misses the chance to prevent readmission.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "eschf",
      },
    ],
    sources: [ESCHF, HFANP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-30",
    topic: "pulmonary-edema",
    title: "Untouched pill packs",
    stem:
      "An 84-year-old woman is brought to the emergency department by her daughter with 3 weeks of worsening shortness of breath. She now stops to rest walking to her mailbox and sleeps on three pillows. She has heart failure with preserved ejection fraction and takes furosemide 40 mg daily and ramipril 5 mg daily. She lives alone and uses a walker. Her daughter found 2 weeks of pills untouched in the blister packs. She says the water pill made her rush to the toilet and she fell once. She cannot name her medications. The JVP is 7 cm above the sternal angle. There are crackles at both bases and pitting edema to the knees.",
    vitals: { temperature: "36.5°C oral", pulse: "92/minute regular", resp: "24/minute", bp: "158/84 mmHg", o2sat: "91% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The ECG shows sinus rhythm without acute change. Troponin is below the 99th percentile. Hemoglobin is 124 g/L. Urinalysis is normal.",
        prompt: "Which of the following is the most likely precipitant of her decompensation?",
        options: [
          "Acute coronary syndrome",
          "Dietary sodium excess",
          "Medication nonadherence",
          "Pulmonary embolism",
          "Urinary tract infection",
        ],
        correct: 2,
        explanation:
          "Two weeks of untouched blister packs and a clear reason for stopping her diuretic identify nonadherence as the trigger. The ESC guideline lists nonadherence to drugs or to salt and fluid advice among the common precipitants to seek. A normal ECG and troponin make acute coronary syndrome unlikely. A normal urinalysis argues against infection. Nothing in her history points to a salt load. Gradual onset over 3 weeks with bilateral crackles and edema does not suggest embolism.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "eschf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial dose of diuretic for her?",
        options: [
          "furosemide 10 mg IV",
          "furosemide 40 mg IV",
          "furosemide 160 mg IV",
          "furosemide 250 mg IV",
          "furosemide 500 mg IV",
        ],
        correct: 1,
        explanation:
          "The ESC guideline suggests 20 to 40 mg IV of furosemide for a patient not taking a diuretic and 1 to 2 times the daily oral dose for one who is. She was prescribed 40 mg daily but has taken none for 2 weeks, so 40 mg IV fits both rules. Ten milligrams is below an effective dose. A dose of 160 mg is 4 times her usual daily dose. Doses of 250 or 500 mg risk hypotension, kidney injury and hearing damage in a 64 kg woman of 84.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "eschf",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After 36 hours in the observation unit she has lost 2.1 kg. Her saturation is 95% on room air. She walks for 3 minutes with her walker without desaturation and her pulse stays below 100/minute.",
        prompt: "Which of the following is the most important issue to address before she goes home?",
        options: [
          "Daily weights in hospital for 1 week",
          "Fluid restriction of 1 L/day",
          "Home care support for her medications",
          "Repeat NT-proBNP before discharge",
          "Switch furosemide to torsemide",
        ],
        correct: 2,
        explanation:
          "She passed a walk test, so the barrier to a safe discharge is at home. She lives alone, cannot name her medications and stopped her diuretic because of urgency and a fall. The CCS guideline supports a multidisciplinary plan with home care and help with medications for patients at high risk of readmission. A week of weights in hospital delays discharge without fixing adherence. Strict fluid restriction has little evidence. A repeat NT-proBNP does not change her plan. Changing to torsemide does not solve her urgency or her difficulty managing her pills.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ccshf",
      },
    ],
    sources: [ESCHF, CCSHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-31",
    topic: "pulmonary-edema",
    title: "Six kilograms in ten days",
    stem:
      "A 68-year-old man presents to the emergency department with 10 days of increasing leg swelling and shortness of breath, and 3 nights of sleeping in a recliner. His weight at home has risen by 6 kg. He has heart failure with an ejection fraction of 25% and chronic kidney disease. He takes furosemide 80 mg PO twice daily, sacubitril-valsartan, bisoprolol, spironolactone and dapagliflozin, and he says he has taken them all. The JVP is 10 cm above the sternal angle. There are crackles at both bases and pitting edema to the mid thighs.",
    vitals: { temperature: "36.6°C oral", pulse: "88/minute", resp: "24/minute", bp: "124/76 mmHg", o2sat: "92% on room air", weight: "98 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Creatinine is 164 umol/L, which matches his baseline. Potassium is 4.6 mmol/L. He is given furosemide 160 mg IV, equal to his total daily oral dose.",
        prompt: "Which of the following is the most useful early measure of his response to this dose?",
        options: [
          "Chest X-ray at 6 hours",
          "Daily weight tomorrow morning",
          "NT-proBNP at 6 hours",
          "Serum creatinine at 6 hours",
          "Spot urine sodium at 2 hours",
        ],
        correct: 4,
        explanation:
          "The ESC guideline advises checking the diuretic response soon after the first dose, with a spot urine sodium at 2 hours or the hourly urine output over 6 hours, so a poor response can be met by doubling the dose the same day. A urine sodium above 50 to 70 mmol/L at 2 hours marks a good response. A weight tomorrow comes too late to adjust today's dosing. Serum creatinine can rise during effective decongestion and does not measure natriuresis. A chest X-ray and NT-proBNP change too slowly to guide the next dose.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "eschf",
      },
      {
        id: "q2",
        kind: "single",
        update: "Two hours after the dose, a spot urine sodium is 38 mmol/L. His urine output over those 2 hours is 110 mL.",
        prompt: "Which of the following is the most appropriate next step in his diuretic therapy?",
        options: [
          "Add IV albumin 25 g",
          "Continue 160 mg every 12 hours",
          "Low dose dopamine infusion",
          "Repeat furosemide at 320 mg IV",
          "Wait for 24-hour urine output",
        ],
        correct: 3,
        explanation:
          "The ESC guideline defines an inadequate response as a spot urine sodium below 50 to 70 mmol/L at 2 hours or a urine output below 100 to 150 mL/hour in the first 6 hours. His sodium is 38 mmol/L and his output is 55 mL/hour, so the loop dose should be doubled to 320 mg. Continuing the same dose repeats a dose that has already failed. Waiting 24 hours loses a day of decongestion. Albumin and low dose dopamine have not been shown to improve diuresis.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "eschf",
      },
      {
        id: "q3",
        kind: "single",
        update: "Six hours after furosemide 320 mg IV, his urine output is 80 mL/hour and his weight has not changed. His BP is 118/72 mmHg and potassium is 4.3 mmol/L.",
        prompt: "Which of the following is the most appropriate change to his diuretic therapy now?",
        options: [
          "Add metolazone 5 mg PO",
          "Add tolvaptan 15 mg PO",
          "Low dose dopamine infusion",
          "Switch to equivalent bumetanide",
          "Ultrafiltration now",
        ],
        correct: 0,
        explanation:
          "His output is still below 100 mL/hour after a doubled loop dose, so he has diuretic resistance. The ESC guideline suggests adding a diuretic that acts elsewhere in the nephron, such as a thiazide-type drug like metolazone, which blocks the distal sodium reabsorption that blunts the loop diuretic. Switching to an equivalent dose of bumetanide gives the same loop effect. Tolvaptan removes free water and is used for hyponatremia rather than resistance. Ultrafiltration is kept for when combination diuretics fail. Dopamine has no proven benefit.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "diur",
      },
    ],
    sources: [ESCHF, DIUR],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-32",
    topic: "pulmonary-edema",
    title: "Better after eight hours",
    stem:
      "A 76-year-old man presented to the emergency department 8 hours ago with shortness of breath and was treated for pulmonary edema with nitroglycerin, furosemide and 2 hours of noninvasive ventilation. On arrival his pulse was 104/minute and his saturation was 88% on room air. He has heart failure with an ejection fraction of 35%. Two years ago he was intubated for pulmonary edema. He has never had a stroke. He now feels well and wants to go home. He lives with his wife. His chest has a few basal crackles.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "18/minute", bp: "132/78 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "He has lost 0.4 kg since arrival. His JVP is 7 cm above the sternal angle and he has 2+ pitting edema to the mid shins.",
        prompt: "Which of the following findings most strongly argues against discharging him now?",
        options: [
          "Age of 76 years",
          "Ejection fraction of 35%",
          "Heart rate of 84/minute",
          "Need for NIV on arrival",
          "Persistent signs of congestion",
        ],
        correct: 4,
        explanation:
          "A JVP of 7 cm, 2+ edema and a weight loss of only 0.4 kg show he is still congested, however well he feels. The ESC guideline notes that persistent congestion before discharge is associated with a higher risk of readmission and death, and asks that treatment keep the patient free of congestion. His age and ejection fraction are fixed risks that do not change today. A heart rate of 84/minute at rest is reassuring. Noninvasive ventilation on arrival showed how sick he was but has already been weaned.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "eschf",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "During a 3-minute walk his pulse rises to 116/minute and his saturation stays at 93%. The ECG shows no acute ischemic change. Urea is 14.6 mmol/L, bicarbonate 27 mmol/L, troponin is not elevated and NT-proBNP is 3800 pg/mL.",
        prompt: "Which of the following is his total score on the Ottawa Heart Failure Risk Scale?",
        options: ["2", "3", "4", "5", "6"],
        correct: 3,
        explanation:
          "He scores 2 for prior intubation for respiratory distress, 1 for a saturation below 90% on arrival, 1 for a urea of 12 mmol/L or more and 1 for a pulse of 110/minute or more during the walk test, for a total of 5. He gets nothing for stroke, for an arrival pulse of 104/minute, for the ECG or troponin, for a bicarbonate of 27 mmol/L or for an NT-proBNP below 5000 pg/mL. A score of 3 or 4 would miss one of his points, and 6 would count an item he does not have.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Admit to a medicine or cardiology bed",
          "Discharge with clinic review next day",
          "Discharge with home care nursing",
          "Discharge with review in 1 week",
          "Observe 4 more hours then discharge",
        ],
        correct: 0,
        explanation:
          "A score of 5 places him in the very high risk group of the Ottawa Heart Failure Risk Scale, with a much higher rate of serious adverse events, which include death within 30 days and relapse needing admission within 14 days. His pulse of 116/minute on a short walk shows he is not ready for home, however well he feels at rest. Early clinic review and home nursing suit patients at low risk, not this score. Four more hours of observation will not change his history, urea or walk test result.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs",
      },
    ],
    sources: [OHFRS, ESCHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-33",
    topic: "pulmonary-edema",
    title: "A directive in the transfer envelope",
    stem:
      "An 89-year-old woman is brought to the emergency department by ambulance from her long-term care home with 2 hours of severe shortness of breath. She has moderate dementia, heart failure with an ejection fraction of 30% and stage 4 chronic kidney disease. Her advance directive, confirmed by phone with her son, declines CPR and intubation but accepts other medical treatment. She is anxious and gasping but follows simple commands. She is sitting upright. There are crackles to the mid zones of both lungs.",
    vitals: { temperature: "36.9°C oral", pulse: "116/minute", resp: "34/minute", bp: "176/98 mmHg", o2sat: "84% on 6 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support to offer her now?",
        options: [
          "High flow nasal oxygen",
          "Nasal prongs at 6 L/minute",
          "Noninvasive ventilation",
          "Simple face mask at 10 L/minute",
          "Venturi mask at 50%",
        ],
        correct: 2,
        explanation:
          "She has hypertensive pulmonary edema and can follow commands, and her directive declines intubation but not other treatment. The ERS/ATS guideline recommends noninvasive ventilation for cardiogenic pulmonary edema. Her directive allows it, so it is the right ceiling of support, and it can reverse the edema quickly and ease her breathing. High flow oxygen gives much less positive pressure. Nasal prongs have already failed. A simple face mask or Venturi mask gives oxygen without the positive pressure that recruits flooded alveoli.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "niv",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "After 1 hour of noninvasive ventilation, nitroglycerin and furosemide, she opens her eyes only to pain. Her saturation is 82%. Venous gas: pH 7.16, PCO2 74 mmHg. Her son arrives.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "Add dobutamine infusion",
          "Continue NIV and recheck gas in 2 hours",
          "Intubate despite her directive",
          "Shift to comfort-focused care",
          "Transfer to ICU for NIV",
        ],
        correct: 3,
        explanation:
          "She has failed noninvasive ventilation, with falling consciousness, a pH of 7.16 and a PCO2 of 74 mmHg, and she has declined intubation. The next step is a conversation with her son to shift to comfort-focused care within her stated wishes. Intubating her would override a valid directive. Waiting 2 hours for another gas prolongs distress without a realistic chance of recovery. Dobutamine and an ICU transfer for NIV continue a treatment that has already failed at the limit she chose.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "niv",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her son agrees with comfort-focused care. The mask is removed. She is gasping and restless. She has not taken opioids before.",
        prompt: "Which of the following is the most appropriate medication to relieve her breathlessness?",
        options: [
          "fentanyl 100 mcg IV",
          "lorazepam 2 mg IV",
          "midazolam 5 mg IV",
          "morphine 2.5 mg SC",
          "salbutamol 5 mg nebulized",
        ],
        correct: 3,
        explanation:
          "Her breathlessness is now a crisis at the end of life, and the B.C. palliative symptom guideline uses an opioid as the first drug, with morphine given SC or IV and repeated every 5 to 10 minutes until she is comfortable. A reduced starting dose such as 2.5 mg SC suits an opioid naive 89-year-old with stage 4 kidney disease, in whom morphine metabolites can accumulate, so repeat doses should be watched. Fentanyl 100 mcg IV is a large first dose for someone who has never had opioids. The guideline keeps benzodiazepines as an addition for anxiety or a second-line agent, not the sole drug for breathlessness. Salbutamol treats bronchospasm, not edema.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "bcpal",
      },
    ],
    sources: [NIV, BCPAL],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-34",
    topic: "pulmonary-edema",
    alsoTopics: ["shock"],
    title: "Three litres for a urinary source",
    stem:
      "A 74-year-old woman presents to the emergency department with 2 days of fever, flank pain and confusion. She has heart failure with an ejection fraction of 25% and takes furosemide 40 mg daily. Her initial systolic pressure was 78 mmHg and her lactate was 4.1 mmol/L. She received ceftriaxone and 3 L of Ringer's lactate over 3 hours. She is now more breathless and has crackles to the mid zones of both lungs. Bedside ultrasound shows diffuse B-lines in both lungs and an inferior vena cava of 2.4 cm that does not collapse. Repeat lactate is 2.9 mmol/L.",
    vitals: { temperature: "38.6°C oral", pulse: "108/minute", resp: "30/minute", bp: "84/50 mmHg", o2sat: "87% on 6 L/minute by nasal prongs", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her low blood pressure now?",
        options: [
          "albumin 5% 500 mL IV",
          "norepinephrine infusion",
          "Ringer's lactate 500 mL IV",
          "sodium chloride 0.9% 1 L IV",
          "vasopressin 0.04 units/minute IV",
        ],
        correct: 1,
        explanation:
          "Her mean arterial pressure is about 61 mmHg, but new crackles, diffuse B-lines and a full, noncollapsing vena cava show she is no longer fluid responsive and is now overloaded. The Surviving Sepsis Campaign recommends norepinephrine as the first vasopressor to reach a mean pressure of 65 mmHg. Any further crystalloid or albumin will worsen her pulmonary edema with a weak ventricle. Vasopressin is suggested as an addition when norepinephrine needs rise, not as the first agent.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "ssc",
      },
      {
        id: "q2",
        kind: "single",
        update: "On norepinephrine her BP is 102/58 mmHg. Her saturation is 88% and she remains congested.",
        prompt: "Which of the following medications is most appropriate to treat her pulmonary congestion now?",
        options: [
          "furosemide 40 mg IV",
          "hydrochlorothiazide 25 mg PO",
          "metoprolol 5 mg IV",
          "morphine 2 mg IV",
          "nitroglycerin 20 mcg/minute IV",
        ],
        correct: 0,
        explanation:
          "Her pressure is supported and she is overloaded with a weak ventricle, so a loop diuretic is the most useful drug. The ESC guideline suggests an IV dose of 1 to 2 times the usual daily oral dose, so 40 to 80 mg for her 40 mg daily. A vasodilator such as nitroglycerin is not advised with a systolic pressure below 110 mmHg, and she needs a vasopressor. Hydrochlorothiazide by mouth is slow and weak on its own. Metoprolol can worsen low output in shock. Morphine is not recommended routinely.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "eschf",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "One hour later she opens her eyes only to voice and is breathing shallowly. Her saturation is 84% on a nonrebreather mask. Venous gas: pH 7.22, PCO2 58 mmHg. Norepinephrine is at 0.15 mcg/kg/minute.",
        prompt: "Which of the following is the most appropriate respiratory support for her now?",
        options: [
          "Bilevel NIV with backup rate",
          "CPAP at 10 cm H2O",
          "High flow nasal oxygen",
          "Nonrebreather and recheck in 1 hour",
          "Rapid sequence intubation",
        ],
        correct: 4,
        explanation:
          "A falling level of consciousness, a pH of 7.22 with a PCO2 of 58 mmHg and shock needing norepinephrine all argue against noninvasive ventilation. The ERS/ATS guideline supports NIV in alert patients with cardiogenic edema, but reduced consciousness and hemodynamic instability make NIV unsafe here, so she needs intubation. Bilevel NIV and CPAP risk aspiration in a drowsy patient. High flow oxygen does not correct hypercapnia. Waiting an hour risks arrest. Induction should be planned for her low pressure.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "niv",
      },
    ],
    sources: [SSC, ESCHF, NIV],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-35",
    topic: "pulmonary-edema",
    alsoTopics: ["ems"],
    title: "Two hours from the nearest ICU",
    stem:
      "You are working in a rural hospital emergency department. There is no bilevel ventilator, but you have a CPAP mask set. The nearest ICU is 2 hours away by air. A 73-year-old man is brought in by ambulance with 1 hour of severe shortness of breath that woke him from sleep. He has hypertension and type 2 diabetes. He takes no diuretic and no phosphodiesterase 5 inhibitor. He is sweaty, sitting upright and speaking 2 or 3 words at a time. He is alert. There are crackles to the mid zones of both lungs and mild ankle edema.",
    vitals: { temperature: "36.8°C oral", pulse: "122/minute", resp: "36/minute", bp: "196/110 mmHg", o2sat: "84% on 15 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following treatments should be started now, before the ECG and blood results are available?",
        options: [
          "CPAP by face mask",
          "furosemide 40 mg IV",
          "labetalol 20 mg IV",
          "metoprolol 5 mg IV",
          "morphine 4 mg IV",
          "nitroglycerin 0.4 mg sublingual",
          "normal saline 250 mL IV",
          "Wait for the chest X-ray",
        ],
        correct: [0, 1, 5],
        explanation:
          "Pulmonary edema with a saturation of 84% on a nonrebreather and a BP of 196/110 mmHg needs treatment before the cause is known. CPAP, which the ERS/ATS guideline recommends for cardiogenic edema, recruits alveoli and lowers preload and afterload. Sublingual nitroglycerin can be given every few minutes while an infusion is prepared, and he has taken no phosphodiesterase inhibitor. The ESC guideline supports furosemide for congestion, and he has ankle edema. Beta-blockers lower contractility in acute edema. Morphine is not recommended routinely. A saline bolus adds volume. Waiting for imaging delays treatment he clearly needs.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "eschf",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CPAP at 10 cm H2O, three sublingual nitroglycerin doses and furosemide are given. A nitroglycerin infusion runs at 50 mcg/minute. Twenty minutes later his BP is 204/116 mmHg, his respiratory rate is 38/minute and his saturation 86%. He is alert.",
        prompt: "Which of the following is the most appropriate medication to give him next?",
        options: [
          "diltiazem 10 mg IV",
          "labetalol 20 mg IV",
          "metoprolol 5 mg IV",
          "morphine 4 mg IV",
          "nitroglycerin 1 mg IV",
        ],
        correct: 4,
        explanation:
          "His BP has risen to 204/116 mmHg despite CPAP and a low dose infusion, so vasodilation needs to escalate quickly with an IV bolus. The ESC guideline notes that nitroglycerin can be given as 1 to 2 mg boluses in severely hypertensive acute pulmonary edema, while watching for hypotension. Diltiazem, metoprolol and labetalol all reduce contractility in a failing ventricle and can tip him into shock. Morphine is not recommended routinely in acute heart failure.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "eschf",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His BP falls to 162/94 mmHg. His saturation is still 87%. He has a full beard, air hisses from around the mask and the CPAP pressure gauge will not hold 10 cm H2O. He is alert and calm.",
        prompt: "Which of the following is the most appropriate next step in his respiratory support?",
        options: [
          "Increase CPAP to 15 cm H2O",
          "morphine 4 mg IV",
          "Rapid sequence intubation",
          "Refit or change the CPAP mask",
          "Switch to a nonrebreather mask",
        ],
        correct: 3,
        explanation:
          "The pressure gauge cannot hold 10 cm H2O because of a large leak around his beard, so he is not receiving the CPAP that was set. Masip and colleagues stress choosing the right interface and avoiding excessive leak for NIV to work. Refitting the mask or changing it to one that seals should come before any escalation in an alert, calm patient. A higher pressure only increases the leak. Intubation is not needed while he is alert and the fault is correctable. A nonrebreather removes positive pressure. Morphine is not recommended routinely.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "masip",
      },
    ],
    sources: [ESCHF, MASIP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-36",
    topic: "pulmonary-edema",
    alsoTopics: ["headache"],
    title: "Collapsed at the gym",
    stem:
      "A 49-year-old woman is brought to the emergency department by ambulance after she collapsed at a gym. Staff say she held her head and said it was the worst headache of her life before she fell. She did not vomit. She has smoked for 25 years and has no other history. She opens her eyes to voice, is confused and localizes pain. She is coughing pink frothy sputum. There are crackles in both lungs. Bedside ultrasound shows diffuse B-lines and a mildly reduced left ventricular function. The ECG shows sinus tachycardia with deep T wave inversion in V2 to V6.",
    vitals: { temperature: "37.2°C oral", pulse: "118/minute", resp: "30/minute", bp: "186/102 mmHg", o2sat: "86% on 15 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most important to find the cause of her pulmonary edema?",
        options: [
          "Coronary angiography",
          "CT pulmonary angiography",
          "Echocardiography",
          "Repeat troponin in 3 hours",
          "Unenhanced CT of the head",
        ],
        correct: 4,
        explanation:
          "A sudden worst headache before collapse, with confusion, points to subarachnoid hemorrhage. Busl and Bleck describe neurogenic pulmonary edema from the catecholamine surge that follows, often with T wave changes, troponin rise and myocardial stunning. An unenhanced head CT is the test that finds the cause. Coronary angiography would expose her to anticoagulation before bleeding is excluded. A repeat troponin and an echo describe the heart injury but not its cause. CT pulmonary angiography does not fit a thunderclap onset.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "npe",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT shows diffuse subarachnoid hemorrhage in the basal cisterns. Troponin T is 480 ng/L.",
        prompt: "Which of the following is most appropriate for her raised troponin and T wave changes?",
        options: [
          "ASA 160 mg chewed",
          "clopidogrel 300 mg PO",
          "Emergency coronary angiography",
          "Heparin bolus and infusion",
          "No antithrombotic therapy",
        ],
        correct: 4,
        explanation:
          "Troponin rise and deep T wave inversion after subarachnoid hemorrhage usually reflect neurogenic myocardial stunning from the catecholamine surge, as Busl and Bleck describe, rather than a coronary occlusion. Antiplatelet drugs and heparin could enlarge the bleed or cause the aneurysm to rebleed. Coronary angiography needs anticoagulation and is not indicated without evidence of an acute occlusion. The heart usually recovers as the neurological injury is treated.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "npe",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her level of consciousness falls and she is intubated. Her saturation is 88% on an FiO2 of 1.0.",
        prompt: "Which of the following ventilation strategies is most appropriate for her lungs and brain?",
        options: [
          "Hyperventilate to PCO2 25 mmHg",
          "Large tidal volumes of 10 mL/kg",
          "Permissive hypercapnia",
          "Titrated PEEP with normocapnia",
          "Zero PEEP with normocapnia",
        ],
        correct: 3,
        explanation:
          "Neurogenic pulmonary edema needs PEEP to recruit flooded alveoli, and Busl and Bleck describe supportive, lung protective ventilation. Keeping the PCO2 near normal avoids both cerebral vasodilation and ischemia. PEEP can be titrated with attention to BP and ICP. Permissive hypercapnia raises intracranial pressure. Deliberate hyperventilation to 25 mmHg risks cerebral ischemia. Zero PEEP leaves her hypoxemic, and hypoxemia also harms the brain. Large tidal volumes injure the lungs.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "npe",
      },
    ],
    sources: [NPE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-37",
    topic: "pulmonary-edema",
    alsoTopics: ["environmental"],
    title: "Pulled from the backyard pool",
    stem:
      "A 4-year-old girl is brought to the emergency department by her parents 30 minutes after she was pulled from their backyard pool. She was under water for about 1 minute while her father was on the phone. She coughed and vomited water at the poolside and did not need CPR. She is now alert and crying. She has no medical history. There are crackles at the right base. The pool has a fence on three sides, and the fourth side is the back door of the house.",
    vitals: { temperature: "36.4°C tympanic", pulse: "132/minute", resp: "36/minute", o2sat: "92% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial management of her breathing?",
        options: [
          "ceftriaxone 850 mg IV",
          "furosemide 17 mg IV",
          "methylprednisolone 34 mg IV",
          "Rapid sequence intubation",
          "Supplemental oxygen and monitoring",
        ],
        correct: 4,
        explanation:
          "She is alert with a saturation of 92% and crackles in one area, which fits grade 2 in the classification of Szpilman and colleagues, treated with low-flow oxygen and observation. Drowning injures surfactant and causes noncardiogenic edema, so oxygen with close monitoring treats it while watching for delayed worsening. Intubation is for falling consciousness or failing oxygenation. Furosemide at 1 mg/kg does not help drowning edema, which is not a volume problem. Corticosteroids have no proven role. Prophylactic antibiotics are not advised after a pool submersion.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "drown",
      },
      {
        id: "q2",
        kind: "single",
        update: "Six hours later her saturation is 98% on room air, her respiratory rate is 24/minute and her chest is clear. She is eating and playing.",
        prompt: "Which of the following is the most appropriate disposition for her now?",
        options: [
          "Discharge home with return advice",
          "Keep overnight for observation",
          "Observe for another 12 hours",
          "Repeat chest X-ray then decide",
          "Transfer to a pediatric ICU",
        ],
        correct: 0,
        explanation:
          "Szpilman and colleagues note that most grade 2 patients return to normal within 6 to 8 hours on oxygen and can then be sent home. She has a saturation of 98% on room air, a respiratory rate of 24/minute and a clear chest after 6 hours. Her parents need clear advice to return for cough, fast breathing or fever. An overnight stay or 12 more hours adds little to a normal 6 hour period. A chest X-ray will not change the decision when her examination and saturation are normal.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "drown",
      },
      {
        id: "q3",
        kind: "menu",
        select: 2,
        prompt: "Which of the following home safety measures are most effective at preventing another event?",
        options: [
          "Close supervision within arm's reach",
          "Four-sided isolation fencing",
          "Inflatable arm floats in the pool",
          "Pool cover when the pool is not in use",
          "Supervision by an older sibling",
          "Swimming only in the shallow end",
        ],
        correct: [0, 1],
        explanation:
          "Her fence has only three sides, with the house door opening straight onto the pool. Szpilman and colleagues identify four-sided fencing that separates the pool from the house and constant, close adult supervision as key prevention measures. Arm floats can slip off or deflate and give false reassurance. A cover may not be replaced every time and a child can be trapped under it. An older sibling is not a reliable supervisor. Young children can drown in the shallow end.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "drown",
      },
    ],
    sources: [DROWN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "pulmonary-edema-38",
    topic: "pulmonary-edema",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Wheezy since yesterday",
    stem:
      "A 78-year-old woman presents to the emergency department with 1 day of shortness of breath, wheeze and nausea. A walk-in clinic gave her salbutamol this morning without relief. She has type 2 diabetes treated with insulin, hypertension and chronic kidney disease. She has never smoked and has no history of asthma or COPD. She denies chest pain. Last night she slept sitting up. She is pale and speaking in short sentences. The JVP is 6 cm above the sternal angle. There is diffuse expiratory wheeze with crackles at both bases. There is no fever or sputum.",
    vitals: { temperature: "36.7°C oral", pulse: "116/minute", resp: "30/minute", bp: "164/92 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most strongly suggests her wheeze has a cardiac cause?",
        options: [
          "Absence of fever",
          "Diffuse expiratory wheeze",
          "Lack of sputum",
          "Nausea with dyspnea",
          "Orthopnea and a raised JVP",
        ],
        correct: 4,
        explanation:
          "Orthopnea and a JVP of 6 cm above the sternal angle point to raised filling pressures, and in a never smoker with no airway disease they make cardiac wheeze from pulmonary edema likely. The ESC guideline lists orthopnea among the typical symptoms of heart failure and a raised jugular venous pressure among its more specific signs, while wheezing is a less typical symptom. Diffuse wheeze occurs with both asthma and pulmonary edema. Absence of fever and sputum narrows the list but does not point to the heart. Nausea is common to many acute illnesses.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "eschf",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The ECG shows 3 mm ST elevation in V1 to V4 with reciprocal ST depression in II, III and aVF. Your hospital has a catheterization laboratory available now.",
        prompt: "Which of the following is the most appropriate reperfusion strategy for her?",
        options: [
          "Primary percutaneous intervention",
          "Serial troponin over 6 hours",
          "Tenecteplase by weight IV",
          "Urgent CT coronary angiography",
          "Wait for an echocardiogram first",
        ],
        correct: 0,
        explanation:
          "Anterior ST elevation with reciprocal change is a STEMI, even without chest pain, which is common in older women with diabetes. The CCS and CAIC guideline recommends primary PCI when it can be delivered within 120 minutes of first medical contact, and her laboratory is available now. Fibrinolysis is for patients who cannot reach PCI within that time. Serial troponin, CT angiography and waiting for an echo all delay reperfusion of an occluded artery.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "stemi",
      },
      {
        id: "q3",
        kind: "single",
        update: "While the laboratory team is called in, her saturation is 86% on 15 L/minute by nonrebreather. She is alert and follows commands. BP is 152/88 mmHg.",
        prompt: "Which of the following is the most appropriate respiratory support while she waits for the laboratory?",
        options: [
          "Bilevel noninvasive ventilation",
          "High flow nasal oxygen",
          "Rapid sequence intubation",
          "Simple face mask at 10 L/minute",
          "Venturi mask at 60%",
        ],
        correct: 0,
        explanation:
          "She is hypoxemic despite a nonrebreather, and she is alert and can protect her airway. The ERS/ATS guideline recommends noninvasive ventilation for cardiogenic pulmonary edema, including in acute myocardial infarction, and it can continue during transfer to the catheterization laboratory. Intubation before PCI adds the risk of hypotension and arrest during induction and is kept for NIV failure. High flow oxygen gives less positive pressure. A simple mask or Venturi mask gives less oxygen than she is already failing on.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "niv",
      },
    ],
    sources: [ESCHF, STEMI, NIV],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
