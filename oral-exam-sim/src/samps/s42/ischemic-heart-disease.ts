// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  ccs2019: { id: "ccs-stemi-2019", citation: "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction: focused update on regionalization and reperfusion. Can J Cardiol. 2019.", url: "https://doi.org/10.1016/j.cjca.2018.11.031" },
  esc: { id: "esc-acs-2023", citation: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.", url: "https://doi.org/10.1093/eurheartj/ehad191" },
  gulati: { id: "aha-chest-pain-2021", citation: "Gulati M, Levy PD, Mukherjee D, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR guideline for the evaluation and diagnosis of chest pain. J Am Coll Cardiol. 2021.", url: "https://doi.org/10.1016/j.jacc.2021.07.053" },
  udmi: { id: "udmi-2018", citation: "Thygesen K, Alpert JS, Jaffe AS, et al. Fourth universal definition of myocardial infarction (2018). J Am Coll Cardiol. 2018.", url: "https://doi.org/10.1016/j.jacc.2018.08.1038" },
  killip: { id: "killip-1967", citation: "Killip T, Kimball JT. Treatment of myocardial infarction in a coronary care unit: a two year experience with 250 patients. Am J Cardiol. 1967.", url: "https://doi.org/10.1016/0002-9149(67)90023-9" },
  dodd: { id: "dodd-paced-2021", citation: "Dodd KW, Zvosec DL, Hart MA, et al. Electrocardiographic diagnosis of acute coronary occlusion myocardial infarction in ventricular paced rhythm using the modified Sgarbossa criteria. Ann Emerg Med. 2021.", url: "https://doi.org/10.1016/j.annemergmed.2021.03.036" },
  hayes: { id: "aha-scad-2018", citation: "Hayes SN, Kim ESH, Saw J, et al. Spontaneous coronary artery dissection: current state of the science. A scientific statement from the American Heart Association. Circulation. 2018.", url: "https://doi.org/10.1161/CIR.0000000000000564" },
  antman: { id: "timi-2000", citation: "Antman EM, Cohen M, Bernink PJ, et al. The TIMI risk score for unstable angina/non-ST elevation MI: a method for prognostication and therapeutic decision making. JAMA. 2000.", url: "https://doi.org/10.1001/jama.284.7.835" },
  lemkes: { id: "coact-2019", citation: "Lemkes JS, Janssens GN, van der Hoeven NW, et al. Coronary angiography after cardiac arrest without ST-segment elevation. N Engl J Med. 2019.", url: "https://doi.org/10.1056/NEJMoa1816897" },
  vrints: { id: "esc-ccs-2024", citation: "Vrints C, Andreotti F, Koskinas KC, et al. 2024 ESC Guidelines for the management of chronic coronary syndromes. Eur Heart J. 2024.", url: "https://doi.org/10.1093/eurheartj/ehae177" },
  littmann: { id: "littmann-2018", citation: "Littmann L, Gibbs MA. Electrocardiographic manifestations of severe hyperkalemia. J Electrocardiol. 2018.", url: "https://doi.org/10.1016/j.jelectrocard.2018.06.018" },
  lindner: { id: "kdigo-hyperkalemia-2020", citation: "Lindner G, Burdmann EA, Clase CM, et al. Acute hyperkalemia in the emergency department: a summary from a Kidney Disease: Improving Global Outcomes conference. Eur J Emerg Med. 2020.", url: "https://doi.org/10.1097/MEJ.0000000000000691" },
  klein: { id: "klein-aneurysm-2015", citation: "Klein LR, Shroff GR, Beeman W, Smith SW. Electrocardiographic criteria to differentiate acute anterior ST-elevation myocardial infarction from left ventricular aneurysm. Am J Emerg Med. 2015.", url: "https://doi.org/10.1016/j.ajem.2015.03.044" },
  regitz: { id: "esc-pregnancy-2025", citation: "De Backer J, Haugaa KH, Hasselberg NE, et al. 2025 ESC Guidelines for the management of cardiovascular disease and pregnancy. Eur Heart J. 2025.", url: "https://doi.org/10.1093/eurheartj/ehaf193" },
  andrade: { id: "ccs-af-2020", citation: "Andrade JG, Aguilar M, Atzema C, et al. The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society comprehensive guidelines for the management of atrial fibrillation. Can J Cardiol. 2020.", url: "https://doi.org/10.1016/j.cjca.2020.09.001" },
  commit: { id: "commit-2005", citation: "Chen ZM, Pan HC, Chen YP, et al. (COMMIT collaborative group). Early intravenous then oral metoprolol in 45,852 patients with acute myocardial infarction: randomised placebo-controlled trial. Lancet. 2005." },
  damluji: { id: "aha-mechanical-2021", citation: "Damluji AA, van Diepen S, Katz JN, et al. Mechanical complications of acute myocardial infarction: a scientific statement from the American Heart Association. Circulation. 2021.", url: "https://doi.org/10.1161/CIR.0000000000000985" },
  meyers: { id: "meyers-omi-2021", citation: "Meyers HP, Bracey A, Lee D, et al. Accuracy of OMI ECG findings versus STEMI criteria for diagnosis of acute coronary occlusion myocardial infarction. Int J Cardiol Heart Vasc. 2021.", url: "https://doi.org/10.1016/j.ijcha.2021.100767" },
  mancini: { id: "ccs-sihd-2014", citation: "Mancini GBJ, Gosselin G, Chow B, et al. Canadian Cardiovascular Society guidelines for the diagnosis and management of stable ischemic heart disease. Can J Cardiol. 2014.", url: "https://doi.org/10.1016/j.cjca.2014.05.013" },
  baggish: { id: "aas-2017", citation: "Baggish AL, Weiner RB, Kanayama G, et al. Cardiovascular toxicity of illicit anabolic-androgenic steroid use. Circulation. 2017.", url: "https://doi.org/10.1161/CIRCULATIONAHA.116.026945" },
  adler: { id: "esc-pericardial-2025", citation: "Schulz-Menger J, Collini V, Gröschel J, et al. 2025 ESC Guidelines for the management of myocarditis and pericarditis. Eur Heart J. 2025.", url: "https://doi.org/10.1093/eurheartj/ehaf192" },
  brunham: { id: "ccs-fh-2018", citation: "Brunham LR, Ruel I, Aljenedil S, et al. Canadian Cardiovascular Society position statement on familial hypercholesterolemia: update 2018. Can J Cardiol. 2018.", url: "https://doi.org/10.1016/j.cjca.2018.09.005" },
  hofmann: { id: "detox-ami-2017", citation: "Hofmann R, James SK, Jernberg T, et al. Oxygen therapy in suspected acute myocardial infarction. N Engl J Med. 2017.", url: "https://doi.org/10.1056/NEJMoa1706222" },
  assent4: { id: "assent-4-pci-2006", citation: "ASSENT-4 PCI investigators. Primary versus tenecteplase-facilitated percutaneous coronary intervention in patients with ST-segment elevation acute myocardial infarction (ASSENT-4 PCI): randomised trial. Lancet. 2006.", url: "https://doi.org/10.1016/S0140-6736(06)68147-6" },
  armstrong: { id: "armstrong-lvh-2012", citation: "Armstrong EJ, Kulkarni AR, Bhave PD, et al. Electrocardiographic criteria for ST-elevation myocardial infarction in patients with left ventricular hypertrophy. Am J Cardiol. 2012.", url: "https://doi.org/10.1016/j.amjcard.2012.05.032" },
  esc2017: { id: "esc-stemi-2017", citation: "Ibanez B, James S, Agewall S, et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. Eur Heart J. 2018.", url: "https://doi.org/10.1093/eurheartj/ehx393" },
  urban: { id: "arc-hbr-2019", citation: "Urban P, Mehran R, Colleran R, et al. Defining high bleeding risk in patients undergoing percutaneous coronary intervention: a consensus document from the Academic Research Consortium for High Bleeding Risk. Circulation. 2019.", url: "https://doi.org/10.1161/CIRCULATIONAHA.119.040167" },
  kosuge: { id: "kosuge-2007", citation: "Kosuge M, Kimura K, Ishikawa T, et al. Electrocardiographic differentiation between acute pulmonary embolism and acute coronary syndromes on the basis of negative T waves. Am J Cardiol. 2007.", url: "https://doi.org/10.1016/j.amjcard.2006.10.043" },
  escPe: { id: "esc-pe-2019", citation: "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society. Eur Heart J. 2020.", url: "https://doi.org/10.1093/eurheartj/ehz405" },
  bradyGl: { id: "acc-brady-2018", citation: "Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS guideline on the evaluation and management of patients with bradycardia and cardiac conduction delay. Circulation. 2019.", url: "https://doi.org/10.1161/CIR.0000000000000628" },
  htx: { id: "htx-pcp-2025", citation: "Wu Y, Gao L, Lazo J, et al. Care of adult heart transplant recipients by the primary care provider: a practical roadmap. J Clin Med. 2025.", url: "https://doi.org/10.3390/jcm14041346" },
  timi3b: { id: "timi-iiib-1994", citation: "TIMI IIIB Investigators. Effects of tissue plasminogen activator and a comparison of early invasive and conservative strategies in unstable angina and non-Q-wave myocardial infarction: results of the TIMI IIIB trial. Circulation. 1994.", url: "https://doi.org/10.1161/01.cir.89.4.1545" },
} satisfies Record<string, Source>;

const TOPIC = "ischemic-heart-disease";

export const ISCHEMIC_HEART_DISEASE_S42_SAMPS: Samp[] = [
  {
    id: "ischemic-heart-disease-16",
    topic: TOPIC,
    title: "Chest pain brought in from home",
    stem:
      "A 59-year-old man is brought to the emergency department by ambulance with 50 minutes of heavy central chest pain and sweating. Paramedics recorded a 12-lead ECG at his home 30 minutes ago but did not transmit it, and brought him to your emergency department as usual. That ECG shows 3 mm ST elevation in V2 to V5 with ST depression in III and aVF. He chewed ASA 160 mg on scene. He has hypertension and type 2 diabetes. Two years ago he was admitted with a bleeding duodenal ulcer. He is pale and diaphoretic. Fine crackles are heard at both lung bases. There is no murmur and no peripheral edema.",
    vitals: { pulse: "104/minute", resp: "22/minute", bp: "132/80 mmHg", o2sat: "95% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following system changes would most shorten the time to reperfusion for future patients like him?",
        options: [
          "Cardiology consultation on ED arrival",
          "Faster triage to a resuscitation bed",
          "Point-of-care troponin in the ambulance",
          "Prehospital catheterization lab activation",
          "Repeat ECG on emergency department arrival",
        ],
        correct: 3,
        explanation:
          "Transmitting a prehospital ECG and activating the catheterization laboratory from the field lets paramedics take a patient with STEMI straight to the laboratory, bypassing the emergency department. The CCS recommends this for regional STEMI systems because it shortens first medical contact to device time. Here a diagnostic ECG was recorded at his home 30 minutes ago and was not used. A cardiology consult, faster triage or a repeat ECG on arrival still leaves that delay in place. Troponin has no role in deciding reperfusion for STEMI.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "ccs-stemi-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "The catheterization laboratory is activated. He is given ticagrelor 180 mg and a heparin bolus before he leaves the department.",
        prompt: "Which of the following is the most appropriate addition to his dual antiplatelet therapy?",
        options: [
          "famotidine 20 mg PO twice daily",
          "misoprostol 200 mcg PO four times daily",
          "pantoprazole 40 mg PO daily",
          "sucralfate 1 g PO four times daily",
          "No gastric protection",
        ],
        correct: 2,
        explanation:
          "His bleeding duodenal ulcer 2 years ago places him at high risk of gastrointestinal bleeding on ASA with ticagrelor. The ESC recommends a proton pump inhibitor with dual antiplatelet therapy in patients at high risk of gastrointestinal bleeding, so pantoprazole is added. Famotidine, an H2 blocker, suppresses acid less completely than a proton pump inhibitor and is not the class the guideline names. Misoprostol mainly protects against NSAID injury and needs four daily doses that often cause diarrhea. Sucralfate coats an existing ulcer and has no proven role in preventing bleeding on antiplatelet drugs. Leaving him without gastric protection ignores a known ulcer bleed while he takes two antiplatelet drugs.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate oxygen therapy for him at his current oxygen saturation?",
        options: [
          "Oxygen 6 L/minute by face mask",
          "Oxygen 2 L/minute by nasal prongs",
          "Oxygen 15 L/minute by nonrebreather",
          "Oxygen titrated to 100% saturation",
          "No supplemental oxygen",
        ],
        correct: 4,
        explanation:
          "His oxygen saturation is 95% on room air. DETO2X-AMI enrolled patients with suspected MI and a saturation of 90% or more, and routine oxygen did not reduce death at 1 year. Current guidelines therefore give oxygen only when saturation falls below 90%. Titrating oxygen to 100% saturation adds no benefit.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "detox-ami-2017",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best describes his class based on the heart failure findings on examination?",
        options: [
          "CCS angina class II",
          "Killip class I",
          "Killip class II",
          "Killip class III",
          "Killip class IV",
        ],
        correct: 2,
        explanation:
          "Killip class II means rales in the lower lung fields, an S3 or raised venous pressure, without frank pulmonary edema. He has fine crackles at both bases with a BP of 132/80 mmHg, so he is class II. Class III is frank pulmonary edema and class IV is cardiogenic shock, and he has neither. Class I has no signs of heart failure. The CCS angina class grades exertional angina in stable disease and does not stage acute MI.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "killip-1967",
      },
    ],
    sources: [S.ccs2019, S.esc, S.hofmann, S.killip],
    ...META,
  },
  {
    id: "ischemic-heart-disease-17",
    topic: TOPIC,
    title: "Jaw pressure far from a PCI centre",
    stem:
      "You are working in a community hospital emergency department without a catheterization laboratory. A 58-year-old woman is brought to the emergency department by ambulance with 50 minutes of central chest pressure radiating to her jaw. Paramedics reached her at 1310, and she arrived at 1330. Her ECG at 1334 shows 3 mm ST elevation in II, III and aVF with ST depression in I and aVL. The nearest PCI centre is 110 minutes away by land ambulance, and air transport is unavailable. Your team needs 30 minutes to get a patient out the door, and the receiving laboratory needs 20 minutes from arrival to device. She stopped her antihypertensive medications 2 weeks ago and takes no other medications. A CT coronary angiogram 4 years ago showed no coronary plaque. She has no history of bleeding, stroke or recent surgery. Her lungs are clear.",
    vitals: { pulse: "84/minute", resp: "18/minute", bp: "188/114 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her expected first medical contact to device time if she is transferred for PCI?",
        options: [
          "140 minutes",
          "160 minutes",
          "180 minutes",
          "200 minutes",
          "210 minutes",
        ],
        correct: 2,
        explanation:
          "First medical contact was at 1310. Reaching your department took 20 minutes, getting her out the door takes 30, the drive takes 110 and the laboratory needs 20 more, so 20 + 30 + 110 + 20 = 180 minutes. The CCS guideline chooses primary PCI only when first medical contact to device can be kept within 120 minutes, so fibrinolysis is her reperfusion strategy. Leaving out either the arrival interval or the laboratory interval gives 160 minutes, which still exceeds 120 minutes.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "ccs-stemi-2019",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate step before she receives tenecteplase?",
        options: [
          "Give half dose tenecteplase",
          "Give tenecteplase at once",
          "Lower BP below 180/110 mmHg",
          "Transfer for PCI instead",
          "No fibrinolysis for 24 hours",
        ],
        correct: 2,
        explanation:
          "Her BP of 188/114 mmHg is above the 180/110 mmHg threshold that the ESC lists as a relative contraindication to fibrinolysis, because severe hypertension raises the risk of intracranial hemorrhage. The pressure should be brought down promptly with an IV agent, then tenecteplase given without further delay. Half dose is for patients 75 or older, and at 58 she gets the full weight based dose. Transfer for PCI would take 180 minutes, and withholding fibrinolysis for a day forfeits its benefit.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about her CT coronary angiogram 4 years ago is most accurate?",
        options: [
          "It does not exclude a new occlusion",
          "It favours a false positive ECG",
          "It makes pericarditis more likely",
          "It makes vasospasm the likely cause",
          "It rules out coronary thrombosis",
        ],
        correct: 0,
        explanation:
          "Her current ECG shows territorial ST elevation with reciprocal depression and ongoing pressure, which is an acute occlusion until proven otherwise. A CT coronary angiogram describes the arteries only at the time it was done, and plaque can develop over 4 years, particularly with hypertension. The old scan does not make the ECG a false positive or point to pericarditis, which causes diffuse rather than inferior ST elevation. It does not make vasospasm the likely cause or rule out thrombosis.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains the ST depression in leads I and aVL on her ECG?",
        options: [
          "Digoxin effect on repolarization",
          "Lateral subendocardial ischemia",
          "Left ventricular hypertrophy strain",
          "Rate-related repolarization change",
          "Reciprocal change of inferior injury",
        ],
        correct: 4,
        explanation:
          "Leads I and aVL face the opposite side of the heart from III and aVF, so ST depression there mirrors the inferior ST elevation. Reciprocal depression makes an acute inferior occlusion far more likely than a mimic. She takes no digoxin, her pulse is 84/minute so the change is not rate related, and hypertrophy strain affects the lateral leads with tall voltages rather than mirroring inferior elevation. Primary lateral subendocardial ischemia does not explain the inferior ST elevation.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.ccs2019, S.esc, S.gulati],
    ...META,
  },
  {
    id: "ischemic-heart-disease-18",
    topic: TOPIC,
    title: "Breathless with a pacemaker",
    stem:
      "An 81-year-old man is brought to the emergency department by ambulance with 90 minutes of shortness of breath, nausea and sweating. He denies chest pain, cough or fever. A dual chamber pacemaker was placed 4 years ago for complete heart block. He has type 2 diabetes and hypertension, and takes metformin and amlodipine. He is pale and clammy. There are crackles at both lung bases and no peripheral edema. His ECG shows a ventricular paced rhythm at 80/minute. In V2 there is 5 mm of ST elevation after an S wave that is 16 mm deep. No lead shows concordant ST elevation or concordant ST depression.",
    vitals: { temperature: "36.9°C oral", pulse: "80/minute", resp: "26/minute", bp: "108/66 mmHg", o2sat: "91% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his breathlessness at this point?",
        options: [
          "Acute coronary syndrome",
          "Community-acquired pneumonia",
          "COPD exacerbation",
          "Hypertensive pulmonary edema",
          "Pacemaker lead failure",
        ],
        correct: 0,
        explanation:
          "Breathlessness of 90 minutes with nausea, sweating, pallor and basal crackles in an 81-year-old with diabetes is an acute coronary syndrome until proven otherwise. Older adults and people with diabetes often present with dyspnea rather than chest pain, and his denial of pain does not lower the likelihood. He has no cough or fever, which argues against pneumonia. COPD is not among his conditions. His BP of 108/66 mmHg does not fit hypertensive pulmonary edema. The ECG shows a paced rhythm at 80/minute, so the pacemaker is capturing and lead failure does not explain his symptoms.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes the ST segment finding in lead V2 of his paced ECG?",
        options: [
          "Concordant ST elevation",
          "Excessively discordant ST elevation",
          "Expected paced repolarization change",
          "Left ventricular aneurysm pattern",
          "Loss of ventricular capture",
        ],
        correct: 1,
        explanation:
          "In a paced rhythm the ST segment normally moves opposite to the main QRS deflection. The modified Sgarbossa criteria call discordant ST elevation abnormal when it is 25% or more of the depth of the preceding S wave. Here 5 mm divided by 16 mm is about 0.31, which meets the criterion and suggests acute coronary occlusion. The elevation is not concordant, because it follows a negative S wave. A paced rhythm at 80/minute shows that capture is intact. A ratio below 0.25 without other criteria would not be diagnostic, so serial ECGs and troponins would continue.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "dodd-paced-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management at this tertiary centre?",
        options: [
          "CT pulmonary angiography",
          "Pacemaker interrogation first",
          "Repeat troponin in 2 hours",
          "Tenecteplase in the department",
          "Urgent coronary angiography",
        ],
        correct: 4,
        explanation:
          "A positive modified Sgarbossa criterion in a paced rhythm, with ongoing ischemic symptoms, is managed as a STEMI equivalent. At a PCI centre he needs emergency angiography rather than fibrinolysis. Interrogating the pacemaker or waiting 2 hours for a troponin delays reperfusion without changing the decision. His diaphoresis, nausea and crackles fit ischemia with heart failure better than pulmonary embolism.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.gulati, S.dodd, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-19",
    topic: TOPIC,
    title: "Tired and breathless after a bad evening",
    stem:
      "You are working in a rural hospital 3 hours by road from the nearest PCI centre. A 71-year-old woman presents to the emergency department with fatigue and breathlessness on exertion. About 30 hours ago she had a heavy ache in her upper back and jaw with nausea that lasted most of the evening, then settled. She has had no pain since. She has type 2 diabetes and hypertension. Her lungs are clear and there is no murmur. Her ECG shows Q waves in V1 to V4 with 2 mm ST elevation and T wave inversion in the same leads.",
    vitals: { pulse: "88/minute", resp: "18/minute", bp: "134/78 mmHg", o2sat: "96% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of a symptom episode most increases the likelihood that it was ACS?",
        options: [
          "Jaw ache with nausea",
          "Pain lasting under a minute",
          "Pain reproduced by palpation",
          "Pain with shoulder movement",
          "Sharp pain on inspiration",
        ],
        correct: 0,
        explanation:
          "Discomfort spreading to the jaw, neck or arms, and associated nausea, raise the probability of ACS, and women often describe such symptoms without central chest pain. Her episode 30 hours ago was an upper back and jaw ache with nausea. Fleeting pain lasting seconds, pain reproduced by palpation, pain with movement and sharp pleuritic pain each lower the likelihood of ACS. They lower it without excluding it.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following ECG findings indicates that her anterior infarct is already established?",
        options: [
          "Hyperacute T waves",
          "Q waves in V1 to V4",
          "Reciprocal ST depression",
          "ST elevation of 2 mm",
          "Upsloping J point depression",
        ],
        correct: 1,
        explanation:
          "Pathological Q waves in V1 to V4 mean the anterior infarct is completed, which fits symptoms that began 30 hours ago. T wave inversion with residual ST elevation is part of the same evolution. Hyperacute T waves are the earliest sign of occlusion, and ST elevation with reciprocal depression is seen from the first hours. Upsloping J point depression with tall T waves is the de Winter pattern of acute LAD occlusion.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "udmi-2018",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate reperfusion approach for her now?",
        options: [
          "Full dose tenecteplase, then transfer",
          "Half dose tenecteplase, then transfer",
          "Repeat ECG in 12 hours, then decide",
          "Tenecteplase only if troponin is high",
          "Transfer for angiography without fibrinolysis",
        ],
        correct: 4,
        explanation:
          "Fibrinolysis helps only when given within 12 hours of symptom onset. At 30 hours, pain free, with Q waves, she would bear its bleeding risk without benefit, whatever the dose or the troponin level. The 2023 ESC guideline supports a routine invasive strategy for STEMI patients presenting 12 to 48 hours after onset, so she should be transferred for angiography. Waiting 12 hours for another ECG adds nothing to that plan.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings would make her transfer for primary PCI an emergency?",
        options: [
          "Blood glucose of 15 mmol/L",
          "Deeper T wave inversion in V1 to V4",
          "Hemoglobin A1c of 9%",
          "New ischemic chest pain at rest",
          "Persistent Q waves in V1 to V4",
        ],
        correct: 3,
        explanation:
          "Late presenters who develop ongoing or recurrent ischemia, hemodynamic instability or life threatening arrhythmias need emergency primary PCI whatever the time since onset. New ischemic pain would mean myocardium is still threatened, so transfer becomes an emergency. Persistent Q waves and deepening T wave inversion are the expected evolution of a completed infarct. Hyperglycemia and a high A1c raise long term risk but do not call for emergency PCI.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.gulati, S.udmi, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-20",
    topic: TOPIC,
    title: "Chest pressure after an argument",
    stem:
      "A 47-year-old woman presents to the emergency department with 2 hours of central chest pressure radiating to her back that began during a heated argument at work. The pain has eased but not resolved. She has fibromuscular dysplasia of the renal arteries, found during a workup for hypertension. She does not smoke and has normal lipids. She takes amlodipine. Her examination is normal. Her ECG shows 1 mm ST depression and T wave inversion in V3 to V6. The first high sensitivity troponin I is 310 ng/L (female 99th percentile 16 ng/L).",
    vitals: { pulse: "90/minute", resp: "16/minute", bp: "146/88 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her myocardial infarction?",
        options: [
          "Atherosclerotic plaque rupture",
          "Coronary artery dissection",
          "Coronary artery embolism",
          "Coronary artery vasospasm",
          "Takotsubo cardiomyopathy",
        ],
        correct: 1,
        explanation:
          "Spontaneous coronary artery dissection causes MI mainly in women under 60 with few traditional risk factors. Fibromuscular dysplasia is found in many patients with SCAD, and intense emotional stress is a common trigger, both present here. She does not smoke and has normal lipids, which makes plaque rupture less likely. Nothing suggests an embolic source such as atrial fibrillation. Vasospasm typically causes brief episodes at rest, often at night, and takotsubo is seen mostly in older postmenopausal women.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aha-scad-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management plan for her at this point?",
        options: [
          "CT coronary angiography as an outpatient",
          "Discharge on ASA with follow-up",
          "Exercise stress test in the morning",
          "Invasive angiography within 24 hours",
          "Tenecteplase in the department",
        ],
        correct: 3,
        explanation:
          "Her troponin of 310 ng/L with ischemic ST depression confirms an NSTEMI, which places her in the high risk group. The ESC advises an early invasive strategy within 24 hours for high risk NSTE-ACS, and angiography is also how SCAD is diagnosed. Discharge and outpatient testing are unsafe after a confirmed MI. Exercise testing is contraindicated in active ACS, and fibrinolysis is not indicated without ST elevation.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "Angiography shows a long, smooth narrowing of the mid LAD typical of dissection, with normal flow beyond it. She is pain free.",
        prompt: "Which of the following is the most appropriate treatment strategy for her coronary lesion?",
        options: [
          "Conservative medical management",
          "Coronary artery bypass grafting",
          "Heparin infusion for 7 days",
          "Immediate stenting of the lesion",
          "Long-term warfarin therapy",
        ],
        correct: 0,
        explanation:
          "Most SCAD lesions heal on their own over weeks. In a stable patient with preserved flow, conservative management is preferred because PCI of a dissected artery has higher rates of technical failure and complications. Bypass grafting is reserved for left main or extensive dissection with ongoing ischemia when PCI is not feasible. Continuing heparin or starting warfarin may extend the intramural hematoma, so anticoagulation is usually stopped once SCAD is confirmed.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "aha-scad-2018",
      },
      {
        id: "q4",
        kind: "single",
        update: "She is managed conservatively and is ready for discharge 4 days later. Her BP is 138/84 mmHg.",
        prompt: "Which of the following medications is most appropriate to start for her long-term care after SCAD?",
        options: [
          "bisoprolol 2.5 mg PO daily",
          "estradiol 1 mg PO daily",
          "prednisone 40 mg PO daily",
          "rivaroxaban 20 mg PO daily",
          "warfarin 5 mg PO daily",
        ],
        correct: 0,
        explanation:
          "Beta blockers are reasonable after SCAD, and in observational data they were linked to fewer recurrent dissections, which suits her hypertension as well. Bisoprolol 2.5 mg daily is a suitable start. Anticoagulants such as warfarin or rivaroxaban have no proven role and may extend an intramural hematoma. Estrogen therapy is avoided because hormonal factors are linked to SCAD, and corticosteroids have no role in its treatment.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "aha-scad-2018",
      },
    ],
    sources: [S.hayes, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-21",
    topic: TOPIC,
    title: "Fever, cough and a raised troponin",
    stem:
      "An 81-year-old woman is brought to the emergency department by ambulance with 2 days of cough, fever and confusion. She has hypertension and osteoarthritis. She denies chest pain. Bronchial breath sounds and crackles are heard at the right base, and a chest X-ray shows right lower lobe consolidation. Lactate is 3.4 mmol/L. Her ECG shows sinus tachycardia with nonspecific T wave flattening and no ST deviation, unchanged apart from the rate from an ECG last year. High sensitivity troponin I is 64 ng/L at arrival and 118 ng/L at 2 hours (female 99th percentile 16 ng/L). A bedside echo shows normal LV function with no regional wall motion abnormality.",
    vitals: { temperature: "38.9°C oral", pulse: "118/minute", resp: "28/minute", bp: "96/58 mmHg", o2sat: "89% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best classifies her troponin elevation using the universal definition of MI?",
        options: [
          "Acute nonischemic myocardial injury",
          "Chronic myocardial injury",
          "Type 1 myocardial infarction",
          "Type 2 myocardial infarction",
          "Unstable angina pectoris",
        ],
        correct: 0,
        explanation:
          "Her troponin rose from 64 to 118 ng/L, above the 99th percentile with a rise of about 84%, so the injury is acute. MI also needs evidence of ischemia, such as ischemic symptoms, new ischemic ECG changes or a new regional wall motion abnormality, and she has none of these. Sepsis with hypoxemia and hypotension is a recognized cause of acute myocardial injury without infarction. A type 2 MI would still need evidence of ischemia, chronic injury would show stable values, and unstable angina has no troponin rise.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "udmi-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following cardiac treatments is most appropriate for her troponin rise?",
        options: [
          "ASA and ticagrelor loading doses",
          "enoxaparin 60 mg SC every 12 hours",
          "metoprolol 5 mg IV for the tachycardia",
          "Urgent coronary angiography",
          "No ACS antithrombotic therapy",
        ],
        correct: 4,
        explanation:
          "Her troponin rise reflects myocardial injury from pneumonia with sepsis, so treatment is directed at the infection, oxygenation and perfusion rather than at a coronary thrombus. Antiplatelet loading and therapeutic enoxaparin add bleeding risk without benefit when there is no ACS. Her tachycardia is a response to fever and a BP of 96/58 mmHg, and IV metoprolol could precipitate shock. Urgent angiography is not indicated without evidence of ischemia.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following ECG findings, if it developed, would most favour a type 1 MI in her?",
        options: [
          "Diffuse T wave flattening",
          "Low limb lead voltage",
          "New territorial ST elevation",
          "Rate-related sinus tachycardia",
          "Stable right axis deviation",
        ],
        correct: 2,
        explanation:
          "New ST elevation in a coronary territory, especially with reciprocal depression, is ischemic ECG evidence that would change her diagnosis toward an acute coronary occlusion. Diffuse T wave flattening is nonspecific and already present on her old tracing. Sinus tachycardia fits fever and sepsis. Low voltage and a stable axis do not indicate acute ischemia.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "udmi-2018",
      },
    ],
    sources: [S.udmi, S.esc],
    ...META,
  },
  {
    "id": "ischemic-heart-disease-22",
    "topic": "ischemic-heart-disease",
    "title": "Palpitations and chest tightness",
    "stem": "A 74-year-old woman presents to the emergency department with 2 days of palpitations and 3 hours of chest tightness and breathlessness. She has hypertension treated with amlodipine and no known coronary disease. She takes no anticoagulant. She has had no recent viral illness or emotional stress. She is alert. Her lungs are clear, her jugular veins are not raised and there is no leg swelling. Her ECG shows atrial fibrillation at 164/minute with 1.5 mm horizontal ST depression in V4 to V6 and no ST elevation. High sensitivity troponin I is 64 ng/L (female 99th percentile 16 ng/L). Hemoglobin is 132 g/L and potassium 4.1 mmol/L.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "164/minute irregular",
      "resp": "22/minute",
      "bp": "134/82 mmHg",
      "o2sat": "96% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following best explains her troponin elevation and ST depression?",
        "options": [
          "Acute coronary plaque rupture",
          "Acute pulmonary embolism",
          "Demand ischemia from rapid AF",
          "Stress cardiomyopathy",
          "Viral myocarditis"
        ],
        "correct": 2,
        "explanation": "A ventricular rate of 164/minute raises myocardial oxygen demand and shortens filling time, so supply cannot meet demand. The AHA statement lists tachyarrhythmia as a classic trigger of type 2 MI when troponin rises with signs of ischemia. Her ST depression is in the lateral leads that often show rate-related change. Plaque rupture is possible but less likely with a clear trigger and no prior coronary disease. Her clear lungs, lack of leg swelling and normal oxygenation do not suggest embolism. She has no emotional trigger or viral illness to suggest the other causes.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 3
        },
        "source": "aha-type2-2019"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate initial treatment for her?",
        "options": [
          "ASA and ticagrelor loading doses",
          "Enoxaparin with urgent angiography",
          "Nitroglycerin IV infusion",
          "Rate control with IV metoprolol",
          "Synchronized cardioversion now"
        ],
        "correct": 3,
        "explanation": "For type 2 MI the statement makes treatment of the underlying cause paramount and advises early judicious use of a beta blocker to lower demand when there is no bradycardia, hypotension or acute heart failure, as here. With a low likelihood of type 1 MI, it advises caution with antithrombotic therapy and invasive angiography, so loading antiplatelets or enoxaparin with urgent angiography is premature. Nitroglycerin does not slow the rate. She is stable, and after 2 days of AF without anticoagulation, cardioversion now carries a risk of stroke.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 7
        },
        "source": "aha-type2-2019"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Two hours later the tightness has settled. A second high sensitivity troponin I is 131 ng/L.",
        "prompt": "Which of the following is the most appropriate next step in her cardiac assessment?",
        "options": [
          "Continue serial ECGs and troponins",
          "CT pulmonary angiogram",
          "Discharge once the rate is controlled",
          "Immediate coronary angiography",
          "Tenecteplase by weight"
        ],
        "correct": 0,
        "explanation": "The rise from 64 to 131 ng/L shows acute myocardial injury, and serial testing is needed to show the peak and fall and to watch for new ischemia while the trigger is treated. The statement stresses that decisions should be re-evaluated as new data arrive. Discharge is premature while troponin is rising. She has no ST elevation, so fibrinolysis has no role. With a clear demand trigger and settled symptoms, immediate angiography is not required. Nothing suggests embolism.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 1
        },
        "source": "aha-type2-2019"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate cardiac plan once her rhythm problem is controlled?",
        "options": [
          "Elective testing for coronary disease",
          "Lifelong dual antiplatelet therapy",
          "Repeat troponin in 3 months",
          "Urgent angiography before discharge",
          "No further cardiac evaluation"
        ],
        "correct": 0,
        "explanation": "The statement recommends considering functional or anatomic testing for coronary disease after type 2 MI, because a high demand state may unmask flow-limiting coronary disease. This can be done electively once the trigger is controlled. Dual antiplatelet therapy carries bleeding risk and has no proven benefit in type 2 MI without coronary disease. Urgent angiography is not needed once she is stable. A repeat troponin does not assess her coronary anatomy.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 8
        },
        "source": "aha-type2-2019"
      }
    ],
    "sources": [
    {
      "id": "aha-type2-2019",
      "citation": "DeFilippis AP, Chapman AR, Mills NL, et al. Assessment and treatment of patients with type 2 myocardial infarction and acute nonischemic myocardial injury. A scientific statement from the American Heart Association. Circulation. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6855329/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "ischemic-heart-disease-23",
    "topic": "ischemic-heart-disease",
    "title": "An abnormal ECG from a walk-in clinic",
    "stem": "A 48-year-old man is sent to the emergency department by a walk-in clinic because of an abnormal ECG. For 2 months he has had occasional aching left chest discomfort on exertion that lasts up to 10 minutes and eases with rest. His last episode was yesterday, and he is pain free now. He has hypertension treated with amlodipine and does not smoke. His examination is normal, with no murmur. His ECG shows sinus rhythm with high QRS voltage and symmetric T wave inversion of 12 to 14 mm in V3 to V6, deepest in V4 and V5, with no Q waves or ST elevation. An ECG taken before minor surgery 3 years ago shows the same pattern. High sensitivity troponin I is 6 ng/L (male 99th percentile 26 ng/L).",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "72/minute",
      "resp": "16/minute",
      "bp": "146/88 mmHg",
      "o2sat": "98% on room air",
      "weight": "86 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following ECG features most suggests a cause other than an acute coronary syndrome?",
        "options": [
          "Absence of Q waves",
          "No ST elevation in any lead",
          "Same pattern on an ECG 3 years ago",
          "Symmetric shape of the T waves",
          "T inversion in the lateral leads"
        ],
        "correct": 2,
        "explanation": "Ischemic T wave inversion changes over hours to days, so a pattern unchanged from an ECG 3 years ago points to a chronic cause. Giant negative T waves of 10 mm or more in the precordial leads, often with voltage criteria for left ventricular hypertrophy, are typical of apical hypertrophic cardiomyopathy, which commonly presents with chest pain and T wave inversion that mimic ACS. The absence of Q waves or ST elevation does not exclude an occlusion. Symmetric T wave inversion and inversion in the lateral leads occur with ischemia as well.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 2
        },
        "source": "hughes-aphcm-2020"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "A repeat high sensitivity troponin I at 3 hours is 6 ng/L. He remains pain free and his repeat ECG is unchanged.",
        "prompt": "Which of the following is the most appropriate next step for him?",
        "options": [
          "Admit for coronary angiography",
          "Discharge, return if pain recurs",
          "Echocardiogram and cardiology referral",
          "Exercise stress ECG today",
          "Start heparin and admit"
        ],
        "correct": 2,
        "explanation": "Two troponins well below the 99th percentile with no change, and an ECG unchanged over 3 years, make an acute coronary syndrome unlikely, so heparin and inpatient angiography are not needed. His deep T wave inversion and exertional symptoms still need an explanation, and imaging of the left ventricle, starting with echocardiography, is the next step. Hughes and colleagues note that echocardiography missed apical hypertrophy in 40% of cases later found on cardiac MRI, so a cardiologist should review the result and arrange further imaging if it is normal. An exercise ECG cannot be read with marked baseline T wave inversion. Discharge without follow-up leaves his symptoms and abnormal ECG unexplained.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 8
        },
        "source": "hughes-aphcm-2020"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of his ECG pattern?",
        "options": [
          "Acute myopericarditis",
          "Apical hypertrophic cardiomyopathy",
          "Old anterior myocardial infarction",
          "Takotsubo stress cardiomyopathy",
          "Wellens pattern from LAD stenosis"
        ],
        "correct": 1,
        "explanation": "Giant negative T waves of 10 mm or more in the precordial leads, with voltage criteria for left ventricular hypertrophy, are the ECG hallmark of apical hypertrophic cardiomyopathy, and his pattern has been fixed for 3 years. Hughes and colleagues note that it often presents with chest pain and T wave inversion that mimic ACS. The Wellens pattern is deep T inversion in V2 and V3 after recent angina, a sign of critical LAD stenosis, and it would not be present on an ECG from 3 years ago. An old anterior infarction leaves Q waves, which he does not have. Myopericarditis and takotsubo cardiomyopathy are acute illnesses with evolving ECGs and usually a raised troponin, and his troponins are normal.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 2
        },
        "source": "hughes-aphcm-2020"
      }
    ],
    "sources": [
    {
      "id": "hughes-aphcm-2020",
      "citation": "Hughes RK, Knott KD, Malcolmson J, et al. Apical hypertrophic cardiomyopathy: the variant less known. J Am Heart Assoc. 2020.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7335568/"
    }
  ],
    ...META,
    "version": 3
  },
  {
    "id": "ischemic-heart-disease-24",
    "topic": "ischemic-heart-disease",
    "title": "Sweating and vomiting far from a PCI centre",
    "stem": "You are working in a rural hospital emergency department. The nearest PCI centre is 3 hours away by road, and air transport is not available tonight. A 78-year-old man presents with 2 hours of sweating, nausea and vomiting that began while he was splitting firewood. He has had no chest pain. He has COPD and hypertension. He has no history of stroke, bleeding or recent surgery and takes no anticoagulant. He is thin and pale. His lungs are clear. His ECG shows 3 mm ST elevation in V1 to V4 with ST depression in III and aVF.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "96/minute",
      "resp": "20/minute",
      "bp": "138/82 mmHg",
      "o2sat": "95% on room air",
      "weight": "58 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following tenecteplase doses is most appropriate for him?",
        "options": [
          "7.5 mg IV",
          "15 mg IV",
          "30 mg IV",
          "40 mg IV",
          "50 mg IV"
        ],
        "correct": 1,
        "explanation": "Primary PCI cannot be reached in time, so fibrinolysis is indicated. Full-dose tenecteplase raises the risk of intracranial hemorrhage in older patients. In STREAM-2, patients aged 60 or more given half-dose tenecteplase followed by angiography had outcomes comparable to primary PCI. His full weight-band dose under 60 kg is 30 mg, so half is 15 mg. A dose of 30 mg is the full dose, 40 and 50 mg are for heavier patients, and 7.5 mg is a quarter dose without supporting evidence.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 7
        },
        "source": "stream-2-2023"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate plan after he receives tenecteplase?",
        "options": [
          "Admit locally and review in 2 weeks",
          "Angiography only if pain returns",
          "Outpatient stress test in 6 weeks",
          "Planned angiography within 6 to 24 hours",
          "Repeat tenecteplase at 30 minutes"
        ],
        "correct": 3,
        "explanation": "A pharmaco-invasive strategy pairs fibrinolysis with coronary angiography and PCI if indicated 6 to 24 hours later, as in STREAM-2, so he should be transferred for planned angiography. Waiting for recurrent pain, keeping him locally for 2 weeks or relying on an outpatient stress test leaves a residual stenosis untreated. A second dose of tenecteplase adds bleeding risk and is not part of this strategy.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 7
        },
        "source": "stream-2-2023"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following statements about his presentation without chest pain is most accurate?",
        "options": [
          "It carries higher hospital mortality",
          "It is rare, under 1% of cases",
          "It is usually recognized at triage",
          "It lowers his risk of dying",
          "It makes an acute MI unlikely"
        ],
        "correct": 0,
        "explanation": "In the GRACE registry, 8.4% of patients with ACS presented without chest pain, and almost a quarter of them were not initially recognized as having ACS. Their hospital mortality was 13% compared with 4.3% for patients with typical pain. Dominant nausea or vomiting and dyspnea each marked higher risk. It is therefore neither rare nor reassuring, and it does not make MI unlikely.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 5
        },
        "source": "brieger-2004"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following best describes his risk with tenecteplase compared with patients under 65 years?",
        "options": [
          "Higher bleeding, similar mortality",
          "Higher mortality and bleeding",
          "Lower bleeding, higher mortality",
          "Lower mortality and bleeding",
          "Similar mortality and bleeding"
        ],
        "correct": 1,
        "explanation": "In the ASSENT-2 data in the Canadian product monograph, patients aged 75 or more had a 30-day mortality of 16.2% against 2.5% under 65, intracranial hemorrhage of 1.7% against 0.4%, and major bleeding of 7.7% against 3.1%. Both his mortality and his bleeding risk are therefore higher. This is why the benefit must be weighed carefully and why lower dosing strategies are used in older patients.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 3
        },
        "source": "tnkase-pm"
      }
    ],
    "sources": [
    {
      "id": "stream-2-2023",
      "citation": "Van de Werf F, Ristić AD, Averkov OV, et al. STREAM-2: half-dose tenecteplase or primary percutaneous coronary intervention in older patients with ST-segment elevation myocardial infarction. Circulation. 2023.",
      "url": "https://doi.org/10.1161/CIRCULATIONAHA.123.064521"
    },
    {
      "id": "brieger-2004",
      "citation": "Brieger D, Eagle KA, Goodman SG, et al. Acute coronary syndromes without chest pain, an underdiagnosed and undertreated high-risk group: insights from the Global Registry of Acute Coronary Events. Chest. 2004.",
      "url": "https://doi.org/10.1378/chest.126.2.461"
    },
    {
      "id": "tnkase-pm",
      "citation": "Hoffmann-La Roche Limited. TNKase (tenecteplase for injection) product monograph. Health Canada. 2025.",
      "url": "https://pdf.hres.ca/dpd_pm/00082394.PDF"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "ischemic-heart-disease-25",
    topic: TOPIC,
    title: "Dropped beats during an inferior MI",
    stem:
      "A 66-year-old man presents to the emergency department with 70 minutes of heavy chest pain and nausea. He has hypertension and takes amlodipine. His ECG shows 2 mm ST elevation in II, III and aVF with ST depression in aVL. The catheterization laboratory team has been called and will be ready in 20 minutes. On the monitor the PR interval lengthens with each beat until a P wave is not conducted, and the cycle repeats, giving a ventricular rate of 54/minute. He is alert, warm and well perfused. His lungs are clear.",
    vitals: { pulse: "54/minute irregular", resp: "18/minute", bp: "128/76 mmHg", o2sat: "97% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of his heart block while he awaits the laboratory?",
        options: [
          "atropine 1 mg IV now",
          "isoproterenol infusion",
          "Monitoring without pacing",
          "Transcutaneous pacing now",
          "Transvenous pacing wire first",
        ],
        correct: 2,
        explanation:
          "Progressive PR lengthening before a dropped beat is second degree AV block type I. In inferior MI this block is usually in the AV node, is often vagally mediated and rarely causes hemodynamic compromise. He is alert and perfused with a BP of 128/76 mmHg, so he needs monitoring and prompt reperfusion rather than treatment of the rhythm. Atropine and pacing are for symptomatic or unstable bradycardia, a transvenous wire would delay primary PCI, and isoproterenol raises myocardial oxygen demand.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "single",
        update: "His BP rises to 154/92 mmHg with ongoing pain. The resident suggests IV metoprolol before PCI.",
        prompt: "Which of the following best describes the role of IV metoprolol for him at this time?",
        options: [
          "Avoid it with this AV block",
          "Give it at half the usual dose",
          "Give it once in the laboratory",
          "Give it to limit infarct size",
          "Give it when BP exceeds 160 mmHg",
        ],
        correct: 0,
        explanation:
          "Second or third degree AV block is a contraindication to beta blockers, because slowing AV conduction further can turn type I block into complete heart block. His BP rise does not change this. A smaller dose or a later time in the laboratory does not remove the risk while the block persists. The infarct size benefit of early IV beta blockade applies only to patients without contraindications.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "After PCI of an occluded right coronary artery, he has intermittent complete heart block on day 2 with a stable narrow complex escape. His BP is 122/74 mmHg.",
        prompt: "Which of the following is the minimum wait after his MI before a permanent pacemaker is recommended if the block persists?",
        options: [
          "1 day",
          "2 days",
          "5 days",
          "14 days",
          "40 days",
        ],
        correct: 2,
        explanation:
          "High degree AV block after inferior MI usually comes from ischemia of the AV node and often recovers after reperfusion. The ESC therefore recommends a permanent pacemaker only when high degree block has not resolved within a waiting period of at least 5 days after MI, and advises against pacing once it resolves. With a stable escape and a normal BP he needs monitoring in the meantime. A decision at 1 or 2 days comes before the block has had time to recover. Waiting 14 days goes beyond the minimum, and 40 days is the waiting period for an ICD after MI, not for pacing.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-26",
    topic: TOPIC,
    title: "One episode on the mall stairs",
    stem:
      "A 66-year-old woman presents to the emergency department with a single 15-minute episode of central chest pressure yesterday afternoon while she climbed stairs at a shopping mall. It eased with rest and has not recurred. She has type 2 diabetes and hypertension, and she smokes. Severe knee osteoarthritis limits her walking to one block. She had anaphylaxis to iodinated contrast during a CT scan 5 years ago. Her examination is normal. Her ECG is normal. High sensitivity troponin T is below 5 ng/L at arrival and at 1 hour (99th percentile 14 ng/L).",
    vitals: { pulse: "76/minute", resp: "16/minute", bp: "148/82 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "You judge her history as moderately suspicious for an acute coronary syndrome.",
        prompt: "Which of the following is her HEART score based on these findings?",
        options: [
          "3",
          "4",
          "5",
          "6",
          "7",
        ],
        correct: 2,
        explanation:
          "History moderately suspicious scores 1. A normal ECG scores 0. Age 65 or older scores 2. She has three risk factors, diabetes, hypertension and current smoking, and three or more score 2. A troponin at or below the normal limit scores 0. The total is 1 + 0 + 2 + 2 + 0 = 5, which is moderate risk, so MI has been ruled out but further testing for coronary disease is warranted.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following further tests is most appropriate for her coronary assessment?",
        options: [
          "CT coronary angiography",
          "Exercise treadmill ECG test",
          "Holter monitor for 48 hours",
          "Invasive coronary angiography",
          "Pharmacologic stress imaging",
        ],
        correct: 4,
        explanation:
          "She is at moderate risk after MI has been ruled out, so testing for coronary disease is advised. Her knee arthritis prevents an adequate exercise test, and pharmacologic stress imaging with echo or nuclear perfusion works without exercise. CT coronary angiography needs iodinated contrast, which gave her anaphylaxis. Invasive angiography is not a first test for a stable moderate risk patient and also uses contrast. A Holter monitor looks for arrhythmia, not ischemia.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q3",
        kind: "single",
        update: "While waiting for her discharge papers, she has 10 minutes of chest pressure at rest, which has now resolved.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "CT coronary angiography now",
          "Discharge with testing as planned",
          "Exercise stress test today",
          "Oral antacid, then discharge",
          "Repeat ECG and troponin now",
        ],
        correct: 4,
        explanation:
          "A new episode of pressure at rest changes her from a stable exertional pattern to possible unstable angina, so her evaluation must restart. A repeat ECG looks for dynamic changes, and repeat troponins are needed because the earlier samples predate this episode. Discharge on the old plan ignores the new rest pain, and an antacid response would not exclude ischemia. Exercise testing is unsafe with rest pain and not possible for her, and CT coronary angiography needs contrast she reacted to.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "aha-chest-pain-2021",
      },
    ],
    sources: [S.gulati],
    ...META,
  },
  {
    id: "ischemic-heart-disease-27",
    topic: TOPIC,
    title: "Three episodes in a day",
    stem:
      "A 67-year-old woman presents to the emergency department with three episodes of chest pressure in the past 24 hours, the longest lasting 15 minutes. One occurred at rest while she was watching television. She is now pain free. Ten months ago an exercise stress test done for exertional fatigue was reported as normal. She has hypertension, dyslipidemia and type 2 diabetes. She takes ASA 81 mg daily, metformin, ramipril and atorvastatin. She has never had coronary angiography. Her examination is normal. Her ECG shows 0.5 mm ST depression in V4 to V6 that was not present on a tracing from last year. The first high sensitivity troponin I is 12 ng/L (female 99th percentile 16 ng/L).",
    vitals: { pulse: "76/minute", resp: "16/minute", bp: "146/80 mmHg", o2sat: "98% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the value of her normal stress test 10 months ago?",
        options: [
          "It is not reassuring after new rest pain",
          "It lowers her risk enough for discharge",
          "It makes CT coronary angiography unnecessary",
          "It means her new symptoms are not cardiac",
          "It rules out coronary disease for 2 years",
        ],
        correct: 0,
        explanation:
          "A normal exercise test shows that there was no flow limiting stenosis at that time. ACS usually arises from rupture of a plaque that was not flow limiting, so a prior negative test does not protect against a new unstable lesion. Her symptoms have changed to three episodes in 24 hours, one at rest, which is a crescendo pattern of unstable angina. Her new ST depression adds to the concern. The earlier result neither lowers her current risk nor explains her symptoms.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is her TIMI risk score for unstable angina and NSTEMI at this point?",
        options: [
          "2",
          "3",
          "4",
          "5",
          "6",
        ],
        correct: 3,
        explanation:
          "She scores 1 point each for age 65 or older, three or more coronary risk factors (hypertension, dyslipidemia and diabetes), ASA use in the past 7 days, two or more anginal episodes in 24 hours, and ST deviation of 0.5 mm or more. She has no known coronary stenosis of 50% or more and no raised cardiac marker, so those items score 0. Her total is 5 of a possible 7, which is in the high risk range.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "timi-2000",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her repeat troponin at 2 hours is 14 ng/L. She remains pain free and the ECG is unchanged. She is admitted for angiography, and a colleague asks whether her new ST depression calls for tenecteplase while she waits.",
        prompt: "Which of the following best describes the role of fibrinolysis for her?",
        options: [
          "Indicated for new ST depression",
          "Indicated if angiography is delayed",
          "Not indicated without ST elevation",
          "Reasonable at half the usual dose",
          "Reasonable within 12 hours of pain",
        ],
        correct: 2,
        explanation:
          "She has unstable angina with ST depression and no ST elevation, and fibrinolysis does not help this group. In the TIMI IIIB trial of unstable angina and non-Q-wave MI, the primary outcome occurred in 54.2% with alteplase and 55.5% with placebo, a nonsignificant difference. MI after randomization was more common with alteplase, 7.4% against 4.9%, and there were 4 intracranial hemorrhages with alteplase and none with placebo. ST depression in V4 to V6 is not a STEMI equivalent. The 12 hour window and half dose regimens apply to STEMI, and a wait for angiography does not create an indication.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "timi-iiib-1994",
      },
    ],
    sources: [S.gulati, S.antman, S.timi3b],
    ...META,
  },
  {
    id: "ischemic-heart-disease-28",
    topic: TOPIC,
    title: "New confusion in a care home resident",
    stem:
      "An 88-year-old man is brought to the emergency department by ambulance from his long-term care home with 1 day of new confusion and two falls. Staff report that he ate little and seemed short of breath yesterday. He has moderate dementia, atrial fibrillation treated with apixaban, and heart failure with reduced ejection fraction. At baseline he walks with a walker and needs help with dressing. His advance directive declines CPR and intensive care but accepts hospital treatment. He is drowsy but rousable. There are crackles at both lung bases. His ECG shows atrial fibrillation with new 2 mm ST depression in V3 to V6.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute irregular", resp: "24/minute", bp: "118/70 mmHg", o2sat: "92% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of his presentation are recognized ways that ACS presents in older adults?",
        options: [
          "Acute confusion",
          "Diffuse skin rash",
          "Fever and rigors",
          "Recurrent falls",
          "Shortness of breath",
          "Urinary retention",
          "Watery diarrhea",
        ],
        select: 3,
        correct: [0,3,4],
        explanation:
          "Older adults, especially those with dementia, often present with ACS as new confusion, falls, weakness, poor intake or breathlessness rather than chest pain. He has confusion, falls and breathlessness along with new ST depression. Fever with rigors, urinary retention, diarrhea and rash point to infection, drug effects or other illnesses and are not recognized presentations of ischemia. They should still be sought as other causes of delirium.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests should be added to his delirium workup given his ECG findings?",
        options: [
          "Electroencephalogram",
          "Lumbar puncture for cell count",
          "Serial troponin measurement",
          "Serum ammonia level",
          "Urine culture and urinalysis",
        ],
        correct: 2,
        explanation:
          "New ST depression in V3 to V6 in a delirious older man who was short of breath means ACS must be sought as a cause. Serial troponins show whether there is an acute MI. A lumbar puncture, EEG or ammonia level is not a first line test without fever, seizures or liver disease. Urine testing in older adults often finds asymptomatic bacteriuria, which does not explain delirium on its own and can anchor the team on the wrong cause.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "High sensitivity troponin I rises from 180 to 460 ng/L over 2 hours (99th percentile 34 ng/L). His daughter, his substitute decision maker, asks about treatment options.",
        prompt: "Which of the following should most guide the choice between invasive and conservative care for him?",
        options: [
          "Age over 85 years alone",
          "Degree of ST depression",
          "Frailty and goals of care",
          "Height of the troponin peak",
          "Time since symptom onset",
        ],
        correct: 2,
        explanation:
          "He has an NSTEMI, which would usually lead to early angiography. The ESC advises that in older adults the decision should rest on frailty, comorbidity, cognition and the patient's values, not on age alone. He has moderate dementia, needs help with dressing and has a directive declining intensive care, so a conservative strategy may best match his goals. The degree of ST depression, the troponin level and the timing inform risk but do not settle this trade-off.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.gulati, S.esc],
    ...META,
  },
  {
    "id": "ischemic-heart-disease-29",
    "topic": "ischemic-heart-disease",
    "title": "Pressure in front of the television",
    "stem": "A 69-year-old man presents to the emergency department of a hospital with a catheterization laboratory, 1 hour after crushing central chest pressure began while he was watching television. The pain is ongoing, and he is pale, sweaty and nauseated. He has hypertension and type 2 diabetes. There are fine crackles at both lung bases. His ECG shows sinus tachycardia with a right bundle branch block and left axis deviation from left anterior fascicular block. There is no ST elevation. An ECG from his family physician 8 months ago showed normal conduction. His potassium is 4.3 mmol/L, and his first high sensitivity troponin is pending.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "104/minute",
      "resp": "22/minute",
      "bp": "102/64 mmHg",
      "o2sat": "94% on room air",
      "weight": "88 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate management for him now?",
        "options": [
          "Activate the cath lab for primary PCI",
          "Admit and repeat troponin at 3 hours",
          "CT pulmonary angiography now",
          "Tenecteplase by weight now",
          "Transvenous pacing, then observe"
        ],
        "correct": 0,
        "explanation": "Ongoing ischemic pain with a new right bundle branch block should be treated like a STEMI. In this registry, new or presumably new RBBB was often caused by complete occlusion of the infarct artery and carried the highest in-hospital mortality of any ECG pattern. The authors report missed occlusions when ST elevation was required before referral. This hospital can do primary PCI, so fibrinolysis is not the best option. Waiting for troponins or imaging for embolism delays reperfusion, and pacing alone does not treat the cause.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 6
        },
        "source": "widimsky-rbbb-2012"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate ECG plan while he remains in the department?",
        "options": [
          "Holter monitor application",
          "Posterior leads V7 to V9 only",
          "Right-sided leads only",
          "Serial 12-lead ECGs on a monitor",
          "No further ECGs for now"
        ],
        "correct": 3,
        "explanation": "Unlike left bundle branch block, a right bundle branch block is thought not to mask ST changes or Q waves, and the registry authors note that minor ST elevation can be missed. Repeat 12-lead ECGs with continuous monitoring can show evolving ST elevation, a higher degree of block or an arrhythmia. A Holter recording is read too late. Posterior or right-sided leads alone give a narrow view, and stopping ECGs misses change.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 1
        },
        "source": "widimsky-rbbb-2012"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following best explains his new ECG pattern?",
        "options": [
          "Acute pulmonary embolism",
          "Brugada type 1 pattern",
          "Degenerative conduction disease",
          "Occlusion of a coronary artery",
          "Tricyclic drug toxicity"
        ],
        "correct": 3,
        "explanation": "A block that is new since 8 months ago, with ongoing ischemic pain, points to acute coronary occlusion. In the registry, bifascicular block with RBBB and left anterior hemiblock was common in left main and proximal LAD occlusion. Embolism can cause right bundle branch block, but his pain and left axis deviation fit an anterior infarct. Degenerative disease develops slowly without acute pain. He has no coved ST elevation of Brugada pattern and has taken no tricyclic drug.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 2
        },
        "source": "widimsky-rbbb-2012"
      }
    ],
    "sources": [
    {
      "id": "widimsky-rbbb-2012",
      "citation": "Widimsky P, Rohác F, Stásek J, et al. Primary angioplasty in acute myocardial infarction with right bundle branch block: should new onset right bundle branch block be added to future guidelines as an indication for reperfusion therapy? Eur Heart J. 2012.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3249219/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "ischemic-heart-disease-30",
    topic: TOPIC,
    title: "Crushing pain years after bypass",
    stem:
      "A 71-year-old man presents to the emergency department with 2 hours of crushing chest pain and sweating. He had coronary bypass surgery 9 years ago, with a left internal mammary artery graft to the LAD and saphenous vein grafts to the right coronary and circumflex arteries. He has type 2 diabetes and hypertension and takes ASA, metformin, ramipril and rosuvastatin. His lungs are clear. His ECG shows 3 mm ST elevation in II, III and aVF with ST depression in I and aVL. Your hospital has a catheterization laboratory on site.",
    vitals: { pulse: "78/minute", resp: "20/minute", bp: "142/84 mmHg", o2sat: "96% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "His daughter says the bypass surgery fixed his arteries, so this must be something else.",
        prompt: "Which of the following statements about his prior bypass surgery is most accurate?",
        options: [
          "Bypass grafts prevent any future MI",
          "Grafts and native vessels can still occlude",
          "Only native arteries can occlude",
          "Prior bypass makes STEMI unlikely",
          "The mammary graft protects all territories",
        ],
        correct: 1,
        explanation:
          "Inferior ST elevation with reciprocal change in I and aVL and ongoing crushing pain is a STEMI whatever his surgical history. After bypass surgery, MI can come from occlusion of a graft, particularly an older saphenous vein graft such as those to his right coronary and circumflex arteries, or from progression in the native arteries. The mammary graft supplies only the LAD territory. A history of bypass surgery therefore does not lower the likelihood of ACS or change the need for urgent reperfusion.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate reperfusion strategy for him?",
        options: [
          "Admit for angiography within 24 hours",
          "Emergency angiography and PCI",
          "Emergency redo bypass surgery",
          "Serial troponins before deciding",
          "Tenecteplase in the department",
        ],
        correct: 1,
        explanation:
          "He has an inferior STEMI at a PCI capable hospital, so emergency angiography with primary PCI of the culprit graft or native artery is the strategy of choice. Prior bypass surgery is not a reason to delay or to prefer fibrinolysis, which works less well in occluded vein grafts. Redo surgery is not an emergency reperfusion option. Waiting for troponins or planning angiography within 24 hours delays reperfusion of an occluded vessel.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "He still has severe pain. He has chewed ASA and received ticagrelor 180 mg PO. A nurse asks whether to give IV morphine.",
        prompt: "Which of the following is a recognized drawback of IV morphine for him before PCI?",
        options: [
          "Coronary vasoconstriction",
          "Delayed ticagrelor absorption",
          "Raised blood pressure",
          "Reflex tachycardia",
          "Serotonin syndrome",
        ],
        correct: 1,
        explanation:
          "Opioids slow gastric emptying and delay the absorption of oral P2Y12 inhibitors such as ticagrelor, so platelet inhibition may be weaker when he reaches the laboratory. The ESC therefore allows IV opioids only as a consideration for severe pain. Morphine does not constrict the coronary arteries and tends to lower blood pressure and heart rate rather than raise them. Morphine has little serotonergic activity, unlike tramadol, meperidine or methadone, which can contribute to serotonin syndrome when combined with other serotonergic drugs.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-31",
    topic: TOPIC,
    title: "Early morning chest tightness",
    stem:
      "A 42-year-old woman is brought to the emergency department by ambulance at 0510 after waking at 0430 with 15 minutes of severe chest tightness and sweating. She has had four similar early morning episodes in 3 weeks, none with exertion. She smokes a pack a day and has migraines treated with sumatriptan, and took a dose last night. Paramedics recorded an ECG during the pain showing 3 mm ST elevation in II, III and aVF. She is now pain free and her examination is normal. Her ECG in the department is normal. High sensitivity troponin I is 6 ng/L (female 99th percentile 16 ng/L).",
    vitals: { pulse: "78/minute", resp: "14/minute", bp: "128/76 mmHg", o2sat: "99% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate interpretation of her normal ECG in the department?",
        options: [
          "It confirms a noncardiac cause",
          "It excludes ischemia as the cause",
          "It is consistent with transient ischemia",
          "It makes migraine the likely cause",
          "It suggests the paramedic ECG was artifact",
        ],
        correct: 2,
        explanation:
          "The paramedic ECG showed 3 mm ST elevation in II, III and aVF during pain, and it resolved when the pain stopped. A normal ECG between episodes is expected with transient ischemia and does not exclude it. Artifact does not produce territorial ST elevation that matches symptoms. Migraine itself does not explain these episodes, although her triptan use is relevant.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "esc-ccs-2024",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains her transient inferior ST elevation during the episode?",
        options: [
          "Acute pericarditis",
          "Benign early repolarization",
          "Coronary artery vasospasm",
          "Esophageal spasm",
          "Stable exertional angina",
        ],
        correct: 2,
        explanation:
          "Recurrent episodes of chest pain at rest in the early morning, with transient ST elevation that resolves with the pain, are typical of vasospastic angina. Smoking and triptans are recognized triggers. Stable angina is exertional and usually causes ST depression. Pericarditis gives persistent diffuse changes, early repolarization does not come and go with pain, and esophageal spasm does not cause ST elevation.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "esc-ccs-2024",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following medication plans is most appropriate for her suspected diagnosis?",
        options: [
          "amlodipine and stop sumatriptan",
          "Continue sumatriptan, add nitrates",
          "metoprolol 25 mg PO twice daily",
          "propranolol for migraine prevention",
          "ticagrelor with ASA",
        ],
        correct: 0,
        explanation:
          "Calcium channel blockers such as amlodipine are first line for vasospastic angina, with nitrates for episodes. Sumatriptan is a serotonin agonist that constricts coronary arteries and should be stopped. Beta blockers, particularly nonselective ones such as propranolol, can leave alpha mediated constriction unopposed and worsen spasm. Dual antiplatelet therapy treats atherothrombosis, not spasm.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-ccs-2024",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her troponin at 2 hours is 7 ng/L. She remains pain free with a normal ECG.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: [
          "Discharge with family physician follow-up",
          "Exercise stress test in 6 weeks",
          "Holter monitor as an outpatient",
          "Inpatient coronary angiography",
          "Outpatient echocardiogram only",
        ],
        correct: 3,
        explanation:
          "She has had documented transient ST elevation with recurrent rest pain, which is high risk even with normal troponins. The ESC recommends early invasive angiography for transient ST elevation, both to exclude a fixed lesion or thrombus and to allow provocation testing for spasm. Discharge, an echo or a Holter monitor does not answer that question. Exercise testing rarely provokes vasospasm and is not the right test.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.vrints, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-32",
    topic: TOPIC,
    title: "Weakness after a new medication",
    stem:
      "A 70-year-old man presents to the emergency department with 1 day of generalized weakness and mild chest discomfort. He has type 2 diabetes with chronic kidney disease, and heart failure. Ten days ago spironolactone was added to his ramipril. He has had no vomiting or diarrhea. He is alert. His lungs are clear. His ECG shows sinus bradycardia, tall narrow peaked T waves in V2 to V5, a QRS duration of 148 ms and 2 mm coved ST elevation in V1 and V2. There is no reciprocal ST depression. A venous blood gas shows potassium 8.1 mmol/L.",
    vitals: { pulse: "48/minute", resp: "18/minute", bp: "124/70 mmHg", o2sat: "97% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains the ST elevation in V1 and V2 on his ECG?",
        options: [
          "Acute anterior STEMI",
          "Acute pericarditis",
          "Hyperkalemic pseudoinfarction",
          "Left ventricular aneurysm",
          "Takotsubo syndrome",
        ],
        correct: 2,
        explanation:
          "A potassium of 8.1 mmol/L with peaked T waves, a QRS of 148 ms and bradycardia fits severe hyperkalemia. Severe hyperkalemia can produce coved ST elevation in V1 and V2 that mimics STEMI, a pseudoinfarction pattern that resolves as potassium falls. The absence of reciprocal depression and the recent addition of spironolactone to ramipril support this. Treating it as STEMI before correcting potassium risks needless fibrinolysis or catheterization. Pericarditis and takotsubo do not widen the QRS, and an LV aneurysm needs a prior infarct with Q waves.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "littmann-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for this patient?",
        options: [
          "calcium gluconate 3 g IV",
          "salbutamol 10 mg nebulized",
          "sodium bicarbonate 50 mmol IV",
          "sodium polystyrene 30 g PO",
          "tenecteplase 45 mg IV",
        ],
        correct: 0,
        explanation:
          "With ECG changes of hyperkalemia, IV calcium comes first because it stabilizes the cardiac membrane within minutes. Calcium gluconate 10%, 30 mL, contains 3 g. Salbutamol and insulin with glucose then shift potassium into cells, but they do not protect the heart as quickly. Bicarbonate has little effect without acidosis, and sodium polystyrene works over hours. Tenecteplase for a pseudoinfarction pattern would add bleeding risk with no benefit.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "kdigo-hyperkalemia-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "After treatment, potassium is 5.9 mmol/L. The ST elevation and peaked T waves have resolved, and the QRS has narrowed.",
        prompt: "Which of the following is the most appropriate next step for his chest discomfort?",
        options: [
          "Catheterization laboratory activation",
          "Discharge once potassium is normal",
          "Exercise stress test today",
          "Serial troponins and repeat ECGs",
          "Tenecteplase in the department",
        ],
        correct: 3,
        explanation:
          "Resolution of the ST elevation as potassium falls confirms a hyperkalemic mimic, so emergency reperfusion is not indicated. He still reported chest discomfort and has diabetes and kidney disease, so ACS is not excluded until serial troponins and ECGs are done. Discharge before that ignores his risk, and exercise testing is not appropriate while ACS is still being assessed.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.littmann, S.lindner, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-33",
    topic: TOPIC,
    title: "Epigastric discomfort after meals",
    stem:
      "A 64-year-old man presents to the emergency department with 2 days of intermittent epigastric discomfort after meals. He had an anterior MI treated with late angioplasty 2 years ago. He has dyslipidemia and takes ASA, atorvastatin, bisoprolol and ramipril. He is comfortable and pain free. His examination is normal. His ECG shows QS waves in V1 to V4 with 1.5 mm ST elevation and small T waves in the same leads. An ECG from 6 months ago in the chart shows the same findings. High sensitivity troponin T is 11 ng/L, 5 hours after his last episode (99th percentile 14 ng/L).",
    vitals: { pulse: "62/minute", resp: "14/minute", bp: "124/76 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains the ST elevation in V1 to V4 on his ECG?",
        options: [
          "Acute anterior STEMI",
          "Acute pericarditis",
          "Benign early repolarization",
          "Brugada pattern",
          "Old infarct with LV aneurysm",
        ],
        correct: 4,
        explanation:
          "Persistent ST elevation with QS waves in the territory of an old anterior MI, unchanged from an ECG 6 months ago, is typical of a left ventricular aneurysm. Comparison with a prior tracing is the key step. In acute anterior STEMI the T waves are usually large relative to the QRS, whereas an aneurysm shows small T waves. Pericarditis and early repolarization do not produce QS waves, and the Brugada pattern is limited to V1 and V2.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "klein-aneurysm-2015",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his evaluation?",
        options: [
          "Catheterization laboratory activation",
          "CT coronary angiography now",
          "Discharge, MI is ruled out",
          "Exercise stress test now",
          "Repeat troponin at 1 hour",
        ],
        correct: 4,
        explanation:
          "His troponin T of 11 ng/L, 5 hours after his last episode, is above the 5 ng/L single sample rule-out threshold of the ESC 0 hour and 1 hour algorithm but below the 99th percentile. That places him in the group that needs a second sample at 1 hour to measure the change. Discharge would be premature. His ST elevation is old, so catheterization laboratory activation is not indicated, and exercise testing or CT should wait until MI is ruled out.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "The 1-hour troponin is 12 ng/L. He now mentions that the epigastric discomfort also comes on when he walks uphill and eases with rest.",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: [
          "Discharge on a proton pump inhibitor alone",
          "Discharge with urgent cardiology follow-up",
          "Emergency coronary angiography",
          "Repeat troponin in 6 hours",
          "No further cardiac testing",
        ],
        correct: 1,
        explanation:
          "A baseline below 12 ng/L with a change of only 1 ng/L at 1 hour rules out MI by the ESC algorithm. His exertional epigastric discomfort that eases with rest is an anginal equivalent in a man with known coronary disease, so it cannot be put down to reflux. He needs prompt cardiology follow-up for possible progressive disease, with review of his antianginal therapy and clear return advice. Emergency angiography is not needed without rest pain or a rising troponin, and a further troponin adds nothing.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.klein, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-34",
    topic: TOPIC,
    title: "Chest pain in the third trimester",
    stem:
      "A 39-year-old woman who is 30 weeks pregnant presents to the emergency department with 1 hour of crushing central chest pain radiating to her left arm, with nausea. This is her third pregnancy. She has gestational diabetes and smokes. She had chronic hypertension before pregnancy. She is diaphoretic. The fetal heart rate by Doppler is 150/minute. Her lungs are clear and there is no murmur. Her ECG shows 3 mm ST elevation in V1 to V4. Your hospital has a catheterization laboratory and an obstetric unit on site.",
    vitals: { pulse: "104/minute", resp: "20/minute", bp: "138/86 mmHg", o2sat: "98% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate reperfusion strategy for her?",
        options: [
          "CT pulmonary angiography first",
          "Emergency cesarean delivery first",
          "Medical therapy until delivery",
          "Primary PCI via radial access",
          "Tenecteplase in the department",
        ],
        correct: 3,
        explanation:
          "She has an anterior STEMI, and primary PCI is the preferred reperfusion strategy in pregnancy. The radiation dose to the fetus from coronary angiography is low, and radial access is preferred. Fibrinolysis carries a risk of maternal and placental bleeding. Delivery does not treat the occlusion, medical therapy alone leaves the artery occluded, and imaging for pulmonary embolism is not justified by a diagnostic STEMI ECG.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-pregnancy-2025",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following antiplatelet combinations is preferred for her around coronary stenting?",
        options: [
          "ASA with clopidogrel",
          "ASA with prasugrel",
          "ASA with ticagrelor",
          "prasugrel with warfarin",
          "ticagrelor with enoxaparin",
        ],
        correct: 0,
        explanation:
          "The 2025 ESC pregnancy guideline recommends ASA with clopidogrel when a pregnant woman needs a coronary stent. It lists ticagrelor as contraindicated in pregnancy because of embryotoxicity. Prasugrel is reserved for special cases, such as poor metabolizers of clopidogrel, and is not the default choice. Warfarin crosses the placenta and can harm the fetus, and it has no role in coronary stenting.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-pregnancy-2025",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about fibrinolysis in her situation is most accurate?",
        options: [
          "It is preferred over PCI in pregnancy",
          "It is safe after 28 weeks",
          "It is safe at half dose",
          "Pregnancy is a relative contraindication",
          "Pregnancy is an absolute contraindication",
        ],
        correct: 3,
        explanation:
          "The ESC lists pregnancy as a relative contraindication to fibrinolysis because of the risk of maternal and placental bleeding. It is not absolute, so fibrinolysis remains an option for STEMI in pregnancy when primary PCI cannot be delivered in time. Here PCI is available on site, so it is preferred. Neither gestational age nor a reduced dose removes the bleeding risk.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        update: "She has primary PCI with a stent to the proximal LAD and is recovering on the cardiac ward. Her pregnancy continues.",
        prompt: "Which of the following usual post-MI medications should be avoided until after she delivers?",
        options: [
          "ASA 81 mg PO daily",
          "clopidogrel 75 mg PO daily",
          "metoprolol 25 mg PO twice daily",
          "nitroglycerin 0.4 mg SL as needed",
          "ramipril 2.5 mg PO daily",
        ],
        correct: 4,
        explanation:
          "ACE inhibitors such as ramipril are contraindicated in pregnancy because they harm fetal kidney development and can cause oligohydramnios and fetal death, so the ESC advises they are avoided until after delivery. Low dose ASA is continued in pregnancy. Clopidogrel is the P2Y12 inhibitor the ESC prefers after stenting in pregnancy. A beta blocker such as metoprolol is used in pregnancy, with fetal growth monitoring. Sublingual nitroglycerin for angina can be used when needed.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-pregnancy-2025",
      },
    ],
    sources: [S.regitz, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-35",
    topic: TOPIC,
    title: "A flight to the laboratory",
    stem:
      "You are working in a rural hospital emergency department. A 62-year-old woman presents to the emergency department with 1 hour of central chest pressure and nausea. Her first medical contact was her arrival at 0950. Her ECG at 0955 shows 3 mm ST elevation in V1 to V4 with Q waves in V1 and V2. The regional PCI centre accepts her and, with air transport, expects a device in her culprit artery by 1135. She has hypertension, no known heart disease and no history of bleeding, stroke or recent surgery. Her lungs are clear and there is no murmur.",
    vitals: { pulse: "92/minute", resp: "18/minute", bp: "146/86 mmHg", o2sat: "97% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following reperfusion strategies is most appropriate for her?",
        options: [
          "Air transfer for primary PCI",
          "Medical therapy, transfer tomorrow",
          "Repeat ECG, then decide",
          "Tenecteplase and admit locally",
          "Tenecteplase, then air transfer",
        ],
        correct: 0,
        explanation:
          "From first medical contact at 0950 to the expected device time of 1135 is 105 minutes, within the 120 minute limit the CCS uses to choose primary PCI. Primary PCI is therefore preferred over fibrinolysis, even in a rural patient. A pharmacoinvasive strategy with tenecteplase is for patients who cannot reach PCI within 120 minutes. Medical therapy or waiting for another ECG leaves an anterior occlusion untreated.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "ccs-stemi-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "The flight nurse asks whether to give tenecteplase before departure in case the flight is delayed.",
        prompt: "Which of the following best describes giving tenecteplase before her planned primary PCI?",
        options: [
          "It improves myocardial salvage",
          "It is required for long flights",
          "It is safe at half dose",
          "It prevents in-flight arrhythmias",
          "It worsened outcomes in trials",
        ],
        correct: 4,
        explanation:
          "In ASSENT-4 PCI, full dose tenecteplase given before planned primary PCI led to more deaths, heart failure and shock at 90 days and more strokes than primary PCI alone. Fibrinolysis is therefore not combined with timely primary PCI, and no dose or flight length changes this. It does not prevent arrhythmias, and although more arteries were open at the first angiogram, clinical outcomes were worse, not better. Fibrinolysis is used only when primary PCI cannot be delivered within 120 minutes.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "assent-4-pci-2006",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the significance of the early Q waves in V1 and V2?",
        options: [
          "They confirm the infarct is complete",
          "They do not preclude benefit from reperfusion",
          "They make fibrinolysis the better option",
          "They mean reperfusion is too late",
          "They show an old infarct",
        ],
        correct: 1,
        explanation:
          "Q waves can appear within the first hours of an anterior STEMI and do not mean the infarct is complete. With 1 hour of symptoms and ongoing ST elevation, there is still myocardium to salvage, and the ESC advises that Q waves should not by themselves change the reperfusion strategy. She has no known heart disease, so nothing suggests a previous infarct. Q waves do not make fibrinolysis preferable, because the choice between PCI and fibrinolysis rests on the expected time to PCI.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-stemi-2017",
      },
    ],
    sources: [S.ccs2019, S.assent4, S.esc2017],
    ...META,
  },
  {
    id: "ischemic-heart-disease-36",
    topic: TOPIC,
    title: "Chest pressure on an anticoagulant",
    stem:
      "A 73-year-old man presents to the emergency department with 3 hours of intermittent chest pressure at rest. He has atrial fibrillation and takes apixaban 5 mg twice daily, last taken this morning at 0800. He also has hypertension and takes diltiazem. He has no history of bleeding. He is now pain free. His examination is normal apart from an irregular pulse. His ECG shows atrial fibrillation with 1 mm ST depression in V4 to V6. High sensitivity troponin I is 95 ng/L at arrival and 210 ng/L at 1 hour (99th percentile 34 ng/L).",
    vitals: { pulse: "82/minute irregular", resp: "16/minute", bp: "142/84 mmHg", o2sat: "97% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features places him in the high risk NSTE-ACS group?",
        options: [
          "Age over 70 years alone",
          "Confirmed NSTEMI by troponin",
          "Known atrial fibrillation",
          "Ongoing apixaban therapy",
          "Pain that has now resolved",
        ],
        correct: 1,
        explanation:
          "His troponin rose from 95 to 210 ng/L, above the 99th percentile, with ischemic pain and ST depression, which establishes NSTEMI. The ESC classes a confirmed NSTEMI as high risk, which supports invasive angiography within 24 hours. Age, atrial fibrillation and anticoagulation affect bleeding risk and drug choices but do not define high risk. Resolution of pain removes a very high risk feature but does not move him below high risk.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following P2Y12 inhibitors is preferred alongside apixaban after his PCI?",
        options: [
          "cangrelor",
          "clopidogrel",
          "prasugrel",
          "ticagrelor",
          "No P2Y12 inhibitor",
        ],
        correct: 1,
        explanation:
          "When a patient who needs an oral anticoagulant receives a stent, clopidogrel is the P2Y12 inhibitor of choice. Prasugrel and ticagrelor cause more bleeding when combined with an anticoagulant and are not recommended in this setting. Cangrelor is an IV agent used only during PCI. Omitting a P2Y12 inhibitor after stenting leaves the stent unprotected, because apixaban alone does not prevent stent thrombosis.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "ccs-af-2020",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following antithrombotic regimens is recommended after his PCI for most patients like him?",
        options: [
          "apixaban alone, no antiplatelet therapy",
          "apixaban with ASA and ticagrelor for 1 year",
          "apixaban with clopidogrel, ASA up to 30 days",
          "ASA with ticagrelor, stop apixaban",
          "warfarin with ASA and clopidogrel for 1 year",
        ],
        correct: 2,
        explanation:
          "The CCS atrial fibrillation guideline recommends an oral anticoagulant, preferably a DOAC, with clopidogrel after PCI, and limits ASA to the peri-PCI period of up to 30 days in most patients. This dual pathway approach reduces bleeding compared with a year of triple therapy. Apixaban alone does not protect a new stent, and stopping apixaban leaves his stroke risk untreated. Ticagrelor with an anticoagulant raises bleeding, and warfarin carries a higher risk of intracranial bleeding than a DOAC.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "ccs-af-2020",
      },
    ],
    sources: [S.esc, S.andrade],
    ...META,
  },
  {
    id: "ischemic-heart-disease-37",
    topic: TOPIC,
    title: "Large voltages and ST elevation",
    stem:
      "A 68-year-old man presents to the emergency department with 3 hours of intermittent sharp left chest discomfort that is worse when he twists. He has long-standing, poorly controlled hypertension. He is comfortable and pain free now. His examination is normal. His ECG shows sinus rhythm with very large QRS voltages. V1 to V3 show S waves 35 to 40 mm deep with 3 mm upsloping ST elevation. V5 and V6 show tall R waves with ST depression and asymmetric T wave inversion. An ECG from 1 year ago shows the same pattern.",
    vitals: { pulse: "72/minute", resp: "16/minute", bp: "168/96 mmHg", o2sat: "98% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains the ST elevation in V1 to V3 on his ECG?",
        options: [
          "Acute anterior wall STEMI",
          "Acute viral pericarditis",
          "Brugada type 1 pattern",
          "LV aneurysm after an old MI",
          "LVH with discordant repolarization",
        ],
        correct: 4,
        explanation:
          "Left ventricular hypertrophy produces deep S waves in V1 to V3 with ST elevation in the opposite direction to the QRS, and lateral ST depression with asymmetric T wave inversion. Here the ST elevation is only 3 mm after S waves of 35 to 40 mm, a proportion under 10%, and the pattern is unchanged from a year ago. Acute anterior STEMI would show new or proportionally larger elevation. Pericarditis is diffuse, a Brugada pattern shows coved elevation mainly in V1 and V2, and an LV aneurysm needs a prior MI with Q waves.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "armstrong-lvh-2012",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate decision about the catheterization laboratory for him?",
        options: [
          "Activate after a bedside echo",
          "Activate the laboratory now",
          "CT coronary angiography now",
          "Serial ECGs and troponins, no activation",
          "Tenecteplase if the laboratory is busy",
        ],
        correct: 3,
        explanation:
          "His ST elevation is explained by hypertrophy and is unchanged from a year ago, so he does not meet criteria for emergency reperfusion. Activating the laboratory or giving tenecteplase for a mimic exposes him to procedural and bleeding risk without benefit. His chest discomfort still needs the usual evaluation with serial ECGs and troponins, which would show any new change. An echo does not create an indication, and CT coronary angiography is not an emergency test here.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following measurements best separates anterior STEMI from hypertrophy in leads V1 to V3?",
        options: [
          "Absolute ST elevation in millimetres",
          "Presence of left axis deviation",
          "QRS duration in V1",
          "ST elevation to QRS amplitude ratio",
          "T wave height in V5 and V6",
        ],
        correct: 3,
        explanation:
          "Because hypertrophy raises both the S wave and the discordant ST segment, absolute millimetres of ST elevation are misleading. In the Armstrong study, ST elevation of 25% or more of the preceding QRS amplitude in V1 to V3 separated STEMI from hypertrophy better than standard criteria. His ratio of about 3 mm to 35 mm is under 10%. Left axis deviation, QRS duration and lateral T wave height describe the hypertrophy but do not identify acute occlusion.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "armstrong-lvh-2012",
      },
    ],
    sources: [S.armstrong, S.esc],
    ...META,
  },
  {
    "id": "ischemic-heart-disease-38",
    "topic": "ischemic-heart-disease",
    "title": "Chest pain and a very slow pulse",
    "stem": "A 66-year-old man presents to the emergency department of a PCI-capable hospital with 90 minutes of crushing central chest pain. He is pale and sweaty. He has hypertension and takes ramipril. His ECG shows 3 mm ST elevation in V1 to V5 with complete heart block and a wide complex ventricular escape rhythm at 34/minute. He is drowsy but responds to voice. His lungs are clear. The catheterization laboratory team is on the way.",
    "vitals": {
      "temperature": "36.5°C oral",
      "pulse": "34/minute",
      "resp": "22/minute",
      "bp": "84/50 mmHg",
      "o2sat": "94% on room air",
      "weight": "82 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate immediate treatment for his rhythm?",
        "options": [
          "amiodarone 150 mg IV",
          "atropine 1 mg IV and observe",
          "metoprolol 5 mg IV",
          "Observe on the monitor",
          "Temporary pacing now"
        ],
        "correct": 4,
        "explanation": "In anterior STEMI, complete heart block reflects septal necrosis involving the His bundle and bundle branches, so the escape rhythm is wide, slow and unstable, and asystole may occur suddenly. He is hypotensive and drowsy, so temporary pacing is needed now. Atropine acts on the AV node and is unlikely to help a block below it. Observation suits the narrow junctional escape of inferior STEMI, which is often transient. Amiodarone and metoprolol would slow the escape rhythm further.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 7
        },
        "source": "kawamura-cavb-2021"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following best describes his prognosis from this complication?",
        "options": [
          "Better than inferior MI with block",
          "Higher mortality than without block",
          "Lower risk once the rate is corrected",
          "Same as anterior MI without block",
          "Unaffected by the level of block"
        ],
        "correct": 1,
        "explanation": "In a series treated with primary PCI, in-hospital mortality in anterior STEMI with complete heart block was 55%, against 7% without it, with more cardiogenic shock and heart failure. The block marks extensive septal necrosis, so pacing corrects the rate but not the size of the infarct. Its outcome is worse than inferior STEMI with block, where the AV nodal block is usually transient.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 3
        },
        "source": "kawamura-cavb-2021"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "After PCI of the proximal LAD, complete heart block persists on day 6.",
        "prompt": "Which of the following is the most appropriate next step for his conduction disease?",
        "options": [
          "Isoproterenol infusion",
          "Observe for 2 more weeks",
          "Oral theophylline three times daily",
          "Permanent pacemaker implantation",
          "Repeat coronary angiography"
        ],
        "correct": 3,
        "explanation": "The 2021 ESC pacing guideline recommends a permanent pacemaker when AV block does not resolve within 5 days after acute MI. His block has lasted 6 days, so waiting another 2 weeks prolongs his dependence on temporary pacing, with its risks of infection and lead displacement. Isoproterenol and theophylline are not treatments for persistent infranodal block. Repeat angiography is not indicated without new ischemia.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 7
        },
        "source": "esc-pacing-2021-summary"
      }
    ],
    "sources": [
    {
      "id": "kawamura-cavb-2021",
      "citation": "Kawamura Y, Yokoyama H, Kitayama K, et al. Clinical impact of complete atrioventricular block in patients with ST-segment elevation myocardial infarction. Clin Cardiol. 2021.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7803372/"
    },
    {
      "id": "esc-pacing-2021-summary",
      "citation": "Dan GA. 2021 ESC guidelines on cardiac pacing and cardiac resynchronisation therapy. Eur Cardiol. 2021.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8785099/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "ischemic-heart-disease-39",
    "topic": "ischemic-heart-disease",
    "title": "Chest pressure after a recent bleed",
    "stem": "A 77-year-old man presents to the emergency department with 1 hour of central chest pressure at rest, which has now eased. He has chronic kidney disease with an eGFR of 26 mL/minute/1.73 m2. Four months ago he was admitted with a bleeding duodenal ulcer that needed 3 units of red cells. He takes pantoprazole and takes no antiplatelet or anticoagulant drug. His hemoglobin is 121 g/L and platelets 214 x 10^9/L. His ECG shows 1 mm horizontal ST depression in V4 to V6. The first high sensitivity troponin I is 48 ng/L (male 99th percentile 26 ng/L).",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "88/minute",
      "resp": "18/minute",
      "bp": "142/84 mmHg",
      "o2sat": "96% on room air",
      "weight": "76 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the number of major ARC-HBR bleeding risk criteria that he meets?",
        "options": [
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 1,
        "explanation": "Two major criteria apply. An eGFR below 30 mL/minute is a major criterion, and spontaneous bleeding that needed hospital admission or transfusion in the past 6 months is another. Age 75 or more is only a minor criterion. A hemoglobin of 110 to 129 g/L in a man is minor, and only a value below 110 g/L is major. His platelets are normal. One major or two minor criteria are enough to define high bleeding risk, so he clearly meets it.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 3
        },
        "source": "arc-hbr-2019"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step to confirm or exclude acute MI?",
        "options": [
          "CT coronary angiography now",
          "Diagnose NSTEMI from this value",
          "Discharge if the pain stays settled",
          "Exercise stress test today",
          "Repeat troponin to show a change"
        ],
        "correct": 4,
        "explanation": "Troponin can be chronically raised in kidney disease, so a single value above the 99th percentile does not separate acute from chronic injury. The AHA statement explains that serial testing showing a rise or fall is needed to diagnose acute injury, while a stable pattern with a nonischemic ECG suggests chronic injury. Discharge ignores his ischemic ECG. Stress testing and CT angiography are not for a patient with possible ongoing MI.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 1
        },
        "source": "aha-type2-2019"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Acute NSTEMI is confirmed and coronary angiography with PCI is planned.",
        "prompt": "Which of the following antiplatelet strategies after PCI best balances his bleeding and ischemic risks?",
        "options": [
          "Abbreviated DAPT, then one agent",
          "Aspirin alone, no P2Y12 inhibitor",
          "Prasugrel and ASA for 12 months",
          "Ticagrelor and ASA for 24 months",
          "Triple therapy with an anticoagulant"
        ],
        "correct": 0,
        "explanation": "He is at high bleeding risk. The ARC-HBR document notes that short dual antiplatelet therapy halved major bleeding in older patients compared with 12 months, and trials of patients at high bleeding risk used 1 month of dual therapy after stenting. Twelve or more months of potent dual therapy with prasugrel or ticagrelor raises his bleeding risk. Aspirin alone early after a stent leaves him exposed to stent thrombosis. He has no indication for an anticoagulant, so triple therapy adds bleeding without benefit.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 7
        },
        "source": "arc-hbr-2019"
      }
    ],
    "sources": [
    {
      "id": "arc-hbr-2019",
      "citation": "Urban P, Mehran R, Colleran R, et al. Defining high bleeding risk in patients undergoing percutaneous coronary intervention: a consensus document from the Academic Research Consortium for High Bleeding Risk. Circulation. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6636810/"
    },
    {
      "id": "aha-type2-2019",
      "citation": "DeFilippis AP, Chapman AR, Mills NL, et al. Assessment and treatment of patients with type 2 myocardial infarction and acute nonischemic myocardial injury. A scientific statement from the American Heart Association. Circulation. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6855329/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "ischemic-heart-disease-40",
    topic: TOPIC,
    title: "Shoulder pressure and nausea",
    stem:
      "A 53-year-old woman presents to the emergency department with 50 minutes of pressure in her left shoulder and upper chest with nausea. The pain is constant and she rates it 7 out of 10. She has hypertension and a 30 pack-year smoking history. She is diaphoretic. Her lungs are clear. Her ECG shows 0.5 mm ST elevation in I and aVL with a hyperacute T wave in aVL, and 1.5 mm ST depression in III and aVF. The ST depression in III and aVF is new compared with an ECG from last year.",
    vitals: { pulse: "86/minute", resp: "18/minute", bp: "150/92 mmHg", o2sat: "98% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for this ECG in her clinical setting?",
        options: [
          "Acute pericarditis",
          "Inferior subendocardial ischemia",
          "LVH with strain pattern",
          "Normal variant repolarization",
          "Occlusion of a high lateral branch",
        ],
        correct: 4,
        explanation:
          "New ST depression in III and aVF is often the reciprocal image of injury in the high lateral wall. With subtle ST elevation and a hyperacute T wave in aVL, and constant ischemic pain, this points to occlusion of a diagonal or circumflex branch even though STEMI millimetre criteria are not yet met. Primary inferior subendocardial ischemia is less likely when aVL shows elevation. Pericarditis causes diffuse elevation without reciprocal inferior depression, and LVH strain and normal variants do not produce changes that are new since last year.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "meyers-omi-2021",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following steps are most appropriate while you discuss her ECG with cardiology?",
        options: [
          "Bedside echo for wall motion",
          "CT coronary angiography",
          "Discharge if troponin is normal",
          "Exercise stress test",
          "Oral antacid trial",
          "Repeat ECG in 15 minutes",
          "tenecteplase 35 mg IV",
        ],
        select: 2,
        correct: [0,5],
        explanation:
          "When the ECG is suspicious but not diagnostic and pain continues, repeat ECGs every 15 to 30 minutes can capture evolving ST elevation. A bedside echo showing a new regional wall motion abnormality supports acute occlusion. An antacid trial, a normal first troponin or a stress test cannot exclude an ongoing occlusion, and exercise testing is unsafe with ongoing pain. CT coronary angiography is not used for active ischemia. Fibrinolysis is not given before STEMI criteria are met, and at this centre primary PCI would be preferred.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "A repeat ECG at 15 minutes shows 1 mm ST elevation in I and aVL and 2 mm ST depression in III. The pain continues.",
        prompt: "Which of the following is the most appropriate management for her now?",
        options: [
          "Activate the catheterization laboratory",
          "Admit for angiography within 24 hours",
          "Repeat troponin before deciding",
          "Tenecteplase in the department",
          "Treat as NSTEMI with heparin",
        ],
        correct: 0,
        explanation:
          "ST elevation of 1 mm in two contiguous leads, I and aVL, with reciprocal inferior depression and ongoing pain now meets STEMI criteria. She needs emergency reperfusion, and primary PCI is available at this tertiary centre. Treating her as NSTEMI or waiting for a troponin delays reperfusion. Fibrinolysis is not preferred when primary PCI can be done promptly.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        update: "Before the repeat ECG, a colleague suggested that pain felt mainly in the shoulder was likely musculoskeletal.",
        prompt: "Which of the following statements best addresses the colleague's view of her shoulder pain?",
        options: [
          "A normal shoulder exam would exclude ACS",
          "Only central chest pain suggests ACS",
          "Pain location has no diagnostic value",
          "Shoulder or arm pain raises ACS likelihood",
          "Shoulder pain in women is mostly benign",
        ],
        correct: 3,
        explanation:
          "Pain felt in or spreading to the shoulder or arm increases the probability of ACS, and women more often describe ischemia away from the central chest. Her constant pressure with nausea and diaphoresis adds to that. A normal shoulder examination cannot exclude ischemia, and ACS is not limited to central chest pain. Location does carry diagnostic weight, and attributing shoulder pain in women to benign causes is a recognized source of missed MI.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "esc-acs-2023",
      },
    ],
    sources: [S.meyers, S.esc],
    ...META,
  },
  {
    "id": "ischemic-heart-disease-41",
    "topic": "ischemic-heart-disease",
    "title": "Two morning episodes of tightness",
    "stem": "A 58-year-old man presents to the emergency department at 1400 with central chest tightness at rest, once last evening while reading and once at noon, each lasting about 10 minutes. He says the pain was partly sharp. He is now pain free. He has peripheral arterial disease with an iliac artery stent placed 2 years ago and takes ASA and atorvastatin. He does not smoke and has no other risk factors. He had a normal exercise stress test 4 years ago. His examination is normal. His ECG is normal. A high sensitivity troponin at 1430 is below the 99th percentile.",
    "vitals": {
      "temperature": "36.6°C oral",
      "pulse": "72/minute",
      "resp": "16/minute",
      "bp": "136/80 mmHg",
      "o2sat": "98% on room air",
      "weight": "84 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is his HEART score based on these findings?",
        "options": [
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "correct": 2,
        "explanation": "His history mixes typical and non-typical features, which scores 1. The normal ECG scores 0. Age 58 scores 1. Known peripheral arterial disease scores 2 for risk factors automatically. A troponin below the discriminating level scores 0. The total is 1 + 0 + 1 + 2 + 0 = 4, which is moderate risk. A total of 3 misses the automatic 2 points for vascular disease.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 8
        },
        "source": "heart-score-2018"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "A repeat troponin at 3 hours is also below the 99th percentile.",
        "prompt": "Which of the following is the most appropriate disposition for him?",
        "options": [
          "Admit for observation and further testing",
          "Cardiology clinic in 6 months",
          "Discharge with family physician review",
          "Emergency coronary angiography",
          "No further cardiac evaluation"
        ],
        "correct": 0,
        "explanation": "In the HEART Pathway, a patient with a score above 3 and a negative repeat troponin at 3 hours should go to an observation or inpatient unit for further evaluation, while only those with a score of 3 or less are candidates for early discharge. Discharge with routine review or a clinic visit in 6 months misses this step. With two normal troponins and a normal ECG, emergency angiography is not indicated.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 8
        },
        "source": "heart-score-2018"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following statements about the sharp quality of some of his pain is most accurate?",
        "options": [
          "It confirms a musculoskeletal cause",
          "It does not exclude ACS",
          "It lowers his HEART history score to 0",
          "It may allow discharge after one troponin",
          "It points to pericarditis"
        ],
        "correct": 1,
        "explanation": "The HEART score gives 1 point to a history with mixed typical and non-typical features, so a partly sharp pain still counts toward risk and does not exclude ACS. A score of 0 is kept for a history not consistent with ACS. The review notes that women and older patients often present atypically. Sharp pain does not confirm a musculoskeletal cause or pericarditis. Its quality also cannot justify discharge after a single troponin, because the HEART pathway uses a repeat troponin before any early discharge decision.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 4
        },
        "source": "heart-score-2018"
      }
    ],
    "sources": [
    {
      "id": "heart-score-2018",
      "citation": "Brady W, de Souza K. The HEART score: a guide to its application in the emergency department. Turk J Emerg Med. 2018.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6005932/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "ischemic-heart-disease-42",
    "topic": "ischemic-heart-disease",
    "title": "Breathless pushing a wheelchair",
    "stem": "A 63-year-old man presents to the emergency department with three episodes in the past week of breathlessness, sweating and light-headedness while pushing his manual wheelchair up the ramp to his building. Each settled within 5 minutes of rest, and the last ended 8 hours ago. He has had no chest, arm or jaw pain. He lost his right leg below the knee in a work accident 20 years ago and does not use a prosthesis. He has had type 2 diabetes for 18 years, with neuropathy in his feet, and hypertension. He takes metformin, empagliflozin and ramipril. He does not smoke. His heart and lung examination is normal. His ECG shows sinus rhythm with no ischemic changes.",
    "vitals": {
      "temperature": "36.7°C oral",
      "pulse": "78/minute",
      "resp": "16/minute",
      "bp": "138/80 mmHg",
      "o2sat": "98% on room air",
      "weight": "88 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following features of his episodes most suggests myocardial ischemia?",
        "options": [
          "Absence of chest pain",
          "Light-headedness with the episodes",
          "Normal ECG between episodes",
          "Onset with exertion, relief with rest",
          "Three episodes in one week"
        ],
        "correct": 3,
        "explanation": "Breathlessness that comes on with exertion and settles within minutes of rest follows the pattern of angina even without pain. Diabetes Canada notes that dyspnea on exertion may indicate coronary disease in people with diabetes and that almost one third of MIs occur without recognized or typical symptoms. The absence of chest pain does not lower concern in a man with long-standing diabetes. A normal resting ECG between episodes is common with coronary disease. Light-headedness is nonspecific, and the number of episodes says nothing about their cause.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 5
        },
        "source": "dc-cvd-screening-2018"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "High sensitivity troponin I on arrival and 3 hours later is below the 99th percentile, and his repeat ECG is unchanged. He has no symptoms.",
        "prompt": "Which of the following is the most appropriate disposition for him?",
        "options": [
          "Admit for stress testing tomorrow",
          "Coronary angiography before discharge",
          "CT coronary angiography in the ED now",
          "Discharge with outpatient ischemia testing",
          "Observation for 24 hours of telemetry"
        ],
        "correct": 3,
        "explanation": "Two normal troponins, an unchanged ECG and no symptoms make an acute MI unlikely, so he does not need admission, observation or emergency coronary imaging. His unexplained exertional breathlessness still needs an answer, and Diabetes Canada advises investigation for coronary disease in people with diabetes who have typical or atypical cardiac symptoms such as unexplained dyspnea. This can be arranged promptly as an outpatient. Invasive angiography before discharge is not justified without evidence of an acute coronary syndrome or a positive noninvasive test.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 8
        },
        "source": "dc-cvd-screening-2018"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following medications is most appropriate to add for his episodes?",
        "options": [
          "clopidogrel 75 mg PO daily",
          "isosorbide mononitrate 30 mg daily",
          "nitroglycerin 0.4 mg SL as needed",
          "rivaroxaban 2.5 mg PO twice daily",
          "ticagrelor 90 mg PO twice daily"
        ],
        "correct": 2,
        "explanation": "The CCS guideline supports sublingual nitroglycerin for exertional angina, taken when an episode starts or beforehand for an activity known to bring it on, such as pushing his chair up the ramp. It suggests a long-acting nitrate such as isosorbide mononitrate only when a beta blocker or a long-acting calcium channel blocker is not tolerated, not enough or contraindicated. Ticagrelor is given with ASA for an acute coronary syndrome, which his normal troponins argue against. Rivaroxaban at this dose is added to ASA for proven coronary or peripheral artery disease, which has not been shown in him. Clopidogrel replaces ASA only when ASA cannot be taken.",
        "keyFeature": {
          "topic": "ischemic-heart-disease",
          "n": 8
        },
        "source": "ccs-sihd-2014"
      }
    ],
    "sources": [
    {
      "id": "dc-cvd-screening-2018",
      "citation": "Diabetes Canada Clinical Practice Guidelines Expert Committee, Poirier P, Bertrand OF, Leipsic J, Mancini GBJ, Raggi P, Roussin A. Screening for the presence of cardiovascular disease. Can J Diabetes. 2018.",
      "url": "https://guidelines.diabetes.ca/cpg/chapter24"
    },
    {
      "id": "ccs-sihd-2014",
      "citation": "Mancini GBJ, Gosselin G, Chow B, et al. Canadian Cardiovascular Society guidelines for the diagnosis and management of stable ischemic heart disease. Can J Cardiol. 2014.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/25064578/"
    }
  ],
    ...META,
    "version": 3
  },
  {
    id: "ischemic-heart-disease-43",
    topic: TOPIC,
    title: "Heavy pain after moving furniture",
    stem:
      "A 38-year-old man presents to the emergency department with 40 minutes of heavy central chest pain that began while he was moving furniture. He has no past history and takes no medications. He vapes nicotine daily. His brother had a coronary stent at age 41. He is sweaty and uncomfortable, and the pain continues. His lungs are clear and there is no murmur. His first ECG, done 5 minutes after arrival, is read by the machine as normal. It shows sinus rhythm with no ST elevation or depression.",
    vitals: { pulse: "94/minute", resp: "18/minute", bp: "138/88 mmHg", o2sat: "99% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following actions are most appropriate for him in the next 15 minutes?",
        options: [
          "ASA 160 mg chewed",
          "CT coronary angiography",
          "Discharge if troponin normal",
          "Exercise stress test",
          "Oral antacid trial",
          "Repeat ECG within 15 minutes",
          "tenecteplase 50 mg IV",
        ],
        select: 2,
        correct: [0,5],
        explanation:
          "He has ongoing heavy chest pain with sweating, and one normal ECG does not exclude an evolving occlusion. Repeating the ECG every 15 to 30 minutes while pain continues can show changes the first tracing missed. ASA 160 to 325 mg chewed should be given for possible ACS unless contraindicated. Discharge on one normal troponin, an antacid trial or a stress test is unsafe with ongoing pain. Fibrinolysis requires diagnostic ECG changes, and CT coronary angiography is not the next step during active pain.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ECG at 15 minutes shows broad, tall, symmetric T waves in V2 to V4 that are larger than the QRS complexes, with 0.5 mm ST elevation.",
        prompt: "Which of the following best describes these new ECG changes?",
        options: [
          "Benign early repolarization",
          "Hyperacute T waves of occlusion",
          "Hyperkalemic peaked T waves",
          "Normal variant in young men",
          "Wellens pattern of reperfusion",
        ],
        correct: 1,
        explanation:
          "Broad based, tall, symmetric T waves that are new and large relative to the QRS are hyperacute T waves, one of the earliest signs of coronary occlusion, often before ST elevation. They appeared within 15 minutes during ongoing pain, which argues against a fixed normal variant or early repolarization. Hyperkalemic T waves are narrow and peaked, and he has no reason for hyperkalemia. The Wellens pattern is deep or biphasic T wave inversion after pain has resolved.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "meyers-omi-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Admit for angiography within 24 hours",
          "Emergency catheterization lab activation",
          "Exercise stress test after pain settles",
          "Repeat troponin before deciding",
          "Tenecteplase in the department",
        ],
        correct: 1,
        explanation:
          "New hyperacute T waves with ongoing ischemic pain indicate acute coronary occlusion. Ongoing pain despite treatment is itself a very high risk feature that calls for immediate angiography, and this tertiary centre can provide it. Waiting for a troponin or planning angiography within 24 hours risks losing myocardium. Fibrinolysis is not given without STEMI criteria, and stress testing is unsafe during active ischemia.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q4",
        kind: "single",
        update: "After PCI, his brother asks why he was not sent home after the first normal ECG, since he is only 38.",
        prompt: "Which of the following statements about his age and his first normal ECG is most accurate?",
        options: [
          "A normal first ECG excludes STEMI",
          "His age alone makes ACS unlikely",
          "Neither excludes ACS with ongoing pain",
          "Troponin alone would have been enough",
          "Young men rarely need serial ECGs",
        ],
        correct: 2,
        explanation:
          "A first ECG can be normal in the early minutes of a coronary occlusion, and his became diagnostic within 15 minutes. At 38 with a brother who had a stent at 41, daily nicotine use and ongoing typical pain, his age did not make ACS unlikely. Young patients with ongoing pain need serial ECGs like anyone else. A single troponin early after onset may still be normal and would not have excluded an occlusion.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "aha-chest-pain-2021",
      },
    ],
    sources: [S.gulati, S.meyers, S.esc],
    ...META,
  },
  {
    id: "ischemic-heart-disease-44",
    topic: TOPIC,
    title: "Chest pressure during a deadlift",
    stem:
      "A 31-year-old man presents to the emergency department with 1 hour of central chest pressure radiating to both arms that began during a heavy deadlift session. For 2 years he has injected testosterone and nandrolone obtained from a gym contact. He has no other history and does not smoke. He is muscular and diaphoretic, and the pressure continues. Heart sounds are normal and his lungs are clear. His ECG shows 2.5 mm ST elevation in II, III and aVF with 1.5 mm ST depression in I and aVL.",
    vitals: { pulse: "88/minute", resp: "18/minute", bp: "152/94 mmHg", o2sat: "98% on room air", weight: "104 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes this ECG in a patient with ongoing chest pressure?",
        options: [
          "Acute pericarditis",
          "Athlete's heart repolarization",
          "Benign early repolarization",
          "Inferior wall STEMI",
          "LVH with strain pattern",
        ],
        correct: 3,
        explanation:
          "ST elevation of 2.5 mm in II, III and aVF with reciprocal ST depression in I and aVL is an inferior STEMI. The reciprocal depression is the key feature that separates it from benign patterns. Early repolarization and training related changes cause elevation without reciprocal depression, and pericarditis causes diffuse elevation, often with PR depression. LVH strain causes ST depression with T wave inversion in the lateral leads, not inferior elevation.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "esc-acs-2023",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "CT coronary angiography",
          "Observation for muscle strain",
          "Primary PCI pathway activation",
          "Serial troponins before deciding",
          "Tenecteplase in the department",
        ],
        correct: 2,
        explanation:
          "He has an inferior STEMI at a tertiary centre, so primary PCI is the reperfusion strategy of choice, and his age and fitness do not change this. Serial troponins or observation for a presumed muscle strain delay reperfusion. CT coronary angiography is not used for STEMI. Fibrinolysis is inferior to primary PCI when PCI is promptly available.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "menu",
        update: "His partner says he is too young and fit for a heart attack. He confirms 2 years of steroid injections.",
        prompt: "Which of the following effects of anabolic steroid use raise his risk of myocardial infarction?",
        options: [
          "Accelerated atherosclerosis",
          "Higher HDL cholesterol",
          "Lower blood pressure",
          "Lower HDL cholesterol",
          "Lower hematocrit",
          "Raised hematocrit",
          "Reduced left ventricular mass",
        ],
        select: 3,
        correct: [0,3,5],
        explanation:
          "Illicit anabolic steroid use lowers HDL cholesterol, raises LDL cholesterol and is linked to accelerated coronary atherosclerosis even in young users. It also raises hematocrit, which favours thrombosis, and tends to raise blood pressure. Users develop more left ventricular mass, not less. Young age and fitness therefore do not exclude MI in a steroid user with ischemic symptoms.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aas-2017",
      },
    ],
    sources: [S.esc, S.baggish],
    ...META,
  },
  {
    id: "ischemic-heart-disease-45",
    topic: TOPIC,
    title: "Sharp pain days after discharge",
    stem:
      "A 60-year-old man presents to the emergency department with 6 hours of sharp left chest pain that is worse lying flat and with deep breaths. Three days ago he had a large anterior STEMI treated with PCI 9 hours after the pain began, and he went home yesterday. He takes ASA, ticagrelor, metoprolol, ramipril and atorvastatin. A scratchy sound is heard at the left sternal border in systole and diastole. His lungs are clear. His ECG shows Q waves in V1 to V4 with 2 mm ST elevation, unchanged from discharge, and new 1 mm ST elevation in II and aVF with PR depression. Bedside echo shows a small pericardial effusion.",
    vitals: { temperature: "37.6°C oral", pulse: "84/minute", resp: "18/minute", bp: "118/72 mmHg", o2sat: "97% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for his new chest pain?",
        options: [
          "Dressler syndrome",
          "Early post-infarction pericarditis",
          "Pulmonary embolism",
          "Reinfarction from stent thrombosis",
          "Ventricular free wall rupture",
        ],
        correct: 1,
        explanation:
          "Pleuritic, positional pain with a rub, PR depression, new ST elevation outside the infarct territory and a small effusion 3 days after a large anterior MI fit early post-infarction pericarditis. It occurs in the first days after a large transmural infarct, especially with late reperfusion. Dressler syndrome appears weeks later. Stent thrombosis causes pressure-like ischemic pain with new ST elevation in the stented territory, which is unchanged here. Free wall rupture presents with sudden tamponade and shock, and pulmonary embolism does not explain a rub with PR depression.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "esc-pericardial-2025",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings favour pericarditis over reinfarction in his case?",
        options: [
          "Diaphoresis and vomiting",
          "New Q waves",
          "Pain radiating to the jaw",
          "Pain worse lying flat",
          "Pericardial friction rub",
          "PR depression",
          "Reciprocal ST depression",
        ],
        select: 3,
        correct: [3,4,5],
        explanation:
          "Pain that worsens lying flat, a pericardial friction rub and PR depression are features of pericarditis. Pain radiating to the jaw, diaphoresis with vomiting, reciprocal ST depression and new Q waves point toward new ischemia. He has the three pericarditis features and none of the others. Serial ECGs and troponins are still needed, because pericarditis and reinfarction can coexist.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "esc-pericardial-2025",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings on repeat testing would best indicate reinfarction rather than pericarditis?",
        options: [
          "C-reactive protein above 10 mg/L",
          "Larger pericardial effusion",
          "Pain relief with high dose ASA",
          "PR depression in more leads",
          "Troponin rise of more than 20%",
        ],
        correct: 4,
        explanation:
          "After a recent MI troponin is already raised, so reinfarction is defined by a further rise of more than 20% after values had been stable or falling, with symptoms or new ECG changes. A higher CRP, a larger effusion and more widespread PR depression fit pericardial inflammation. Pain relief with anti-inflammatory treatment does not exclude ischemia, because ischemic pain can also fluctuate. Serial troponin and ECG testing continues until reinfarction is excluded.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "udmi-2018",
      },
    ],
    sources: [S.adler, S.udmi],
    ...META,
  },
  {
    id: "ischemic-heart-disease-46",
    topic: TOPIC,
    title: "Breathless years after a transplant",
    stem:
      "A 61-year-old man presents to the emergency department with 4 days of fatigue and breathlessness on exertion. For 2 nights he has needed three pillows to sleep. He denies chest pain. He received a heart transplant 11 years ago for dilated cardiomyopathy. He takes tacrolimus, mycophenolate, atorvastatin and ASA. He does not have diabetes. His annual transplant clinic review was due 5 months ago but was postponed. There are crackles at both lung bases and mild ankle edema. His ECG shows sinus rhythm with new 1 mm ST depression in V4 to V6 compared with a tracing from 1 year ago. High sensitivity troponin I is 96 ng/L (male 99th percentile 34 ng/L).",
    vitals: { temperature: "36.8°C oral", pulse: "102/minute", resp: "22/minute", bp: "118/76 mmHg", o2sat: "93% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why he has no chest pain with this presentation?",
        options: [
          "Age-related silent ischemia",
          "Denervation of the donor heart",
          "Diabetic autonomic neuropathy",
          "Effect of tacrolimus therapy",
          "Scarring from his sternotomy",
        ],
        correct: 1,
        explanation:
          "The transplanted heart is denervated at surgery, so ischemia from allograft vasculopathy usually causes no angina. It tends to present instead with heart failure or arrhythmia, and he has heart failure with new ST depression and a raised troponin. He is 61, so painless ischemia cannot be put down to advanced age. He does not have diabetes, so autonomic neuropathy does not apply. Tacrolimus prevents rejection and does not block cardiac pain. A healed sternotomy involves the chest wall, not the nerves that carry pain from the heart.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "htx-pcp-2025",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "CT coronary angiography",
          "Discharge with furosemide",
          "Double his tacrolimus dose",
          "Exercise treadmill test",
          "Urgent call to his transplant centre",
        ],
        correct: 4,
        explanation:
          "New heart failure with a troponin of 96 ng/L and new ST depression in a heart transplant recipient may come from allograft vasculopathy or from rejection, and the two need different treatment. Transplant care guidance advises prompt referral to the transplant centre when ischemia or rejection is suspected, with further cardiac testing planned together. Immunosuppression is changed only by the transplant team, and doubling tacrolimus risks toxicity. Discharge ignores a raised troponin with heart failure. Exercise testing is unsafe in active heart failure, and CT coronary angiography does not address possible rejection.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "htx-pcp-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "While transfer is arranged, his rhythm slows to sinus bradycardia at 42/minute and his BP falls to 84/50 mmHg. His potassium is 4.4 mmol/L.",
        prompt: "Which of the following drugs is most appropriate to raise his heart rate?",
        options: [
          "atropine 1 mg IV every 3 minutes",
          "calcium chloride 1 g IV over 10 minutes",
          "epinephrine infusion 2 mcg/minute IV",
          "glucagon 5 mg IV over 2 minutes",
          "magnesium sulfate 2 g IV over 15 minutes",
        ],
        correct: 2,
        explanation:
          "His transplanted heart has no vagal innervation, so atropine, which works only by blocking vagal tone, does not raise its rate. Beta-adrenergic drugs act directly on receptors in the heart and still work, so an epinephrine infusion, started low and titrated to his heart rate and BP, is the drug to use. It raises myocardial oxygen demand in a heart that may be ischemic, so pacing is prepared as well. Calcium chloride treats bradycardia from hyperkalemia or calcium channel blocker toxicity, and his potassium is 4.4 mmol/L and he takes no calcium channel blocker. Glucagon is for beta blocker toxicity, and he takes no beta blocker. Magnesium treats torsades de pointes, not sinus bradycardia.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "acc-brady-2018",
      },
    ],
    sources: [S.htx, S.bradyGl],
    ...META,
  },
  {
    id: "ischemic-heart-disease-47",
    topic: TOPIC,
    title: "Chest pressure after a past brain bleed",
    stem:
      "A 72-year-old woman presents to the emergency department with 4 hours of intermittent chest pressure at rest, the last episode 1 hour ago. Three years ago she had a spontaneous intracerebral hemorrhage from uncontrolled hypertension and recovered fully. She now takes amlodipine and perindopril. She is pain free. Her examination is normal. Her ECG shows 1 mm ST depression in V4 to V6. High sensitivity troponin I is 96 ng/L at arrival and 188 ng/L at 3 hours (female 99th percentile 16 ng/L). Her creatinine is normal.",
    vitals: { pulse: "80/minute", resp: "16/minute", bp: "138/80 mmHg", o2sat: "97% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes her two troponin results?",
        options: [
          "A rise that confirms acute NSTEMI",
          "Chronic injury from hypertension",
          "Expected variation, not significant",
          "Laboratory error needing a repeat",
          "Too early to interpret",
        ],
        correct: 0,
        explanation:
          "Her troponin rose from 96 to 188 ng/L over 3 hours, an increase of 92 ng/L or about 96%, with both values above the 99th percentile. A rise of this size with ischemic symptoms and ST depression meets the universal definition of acute MI, and without ST elevation it is an NSTEMI. Chronic injury would show stable values, and a change this large is far beyond analytic variation. Two samples 3 hours apart are enough to interpret.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "udmi-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following P2Y12 inhibitor loading doses is most appropriate for her when one is indicated?",
        options: [
          "clopidogrel 75 mg PO",
          "clopidogrel 300 mg PO",
          "prasugrel 60 mg PO",
          "ticagrelor 90 mg PO",
          "ticagrelor 180 mg PO",
        ],
        correct: 1,
        explanation:
          "A previous intracranial hemorrhage is a contraindication to ticagrelor, and any previous stroke is a contraindication to prasugrel, so clopidogrel is the P2Y12 inhibitor for her. A loading dose of 300 to 600 mg is used in NSTE-ACS, so 300 mg is appropriate. Clopidogrel 75 mg is a maintenance dose that takes days to reach full effect. Ticagrelor 90 mg is its maintenance dose and is still contraindicated.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "esc-acs-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following in her history most raises her bleeding risk with antithrombotic therapy?",
        options: [
          "Current amlodipine use",
          "Female sex at 72 years",
          "Prior intracranial hemorrhage",
          "Treated hypertension",
          "Troponin rise to 188 ng/L",
        ],
        correct: 2,
        explanation:
          "The Academic Research Consortium lists a previous spontaneous intracranial hemorrhage as a major criterion for high bleeding risk. That places her in the high bleeding risk group and shapes the choice and duration of antiplatelet therapy after angiography. Age 75 or older is a minor criterion, and she is 72. Female sex, amlodipine, treated hypertension and the size of the troponin rise are not ARC-HBR criteria.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "arc-hbr-2019",
      },
    ],
    sources: [S.udmi, S.esc, S.urban],
    ...META,
  },
];
