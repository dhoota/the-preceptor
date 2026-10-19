// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;
const TOPIC = "ischemic-heart-disease";

const S = {
  gulati: { id: "aha-chest-pain-2021", citation: "Gulati M, Levy PD, Mukherjee D, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR guideline for the evaluation and diagnosis of chest pain: executive summary. J Am Coll Cardiol. 2021.", url: "https://doi.org/10.1016/j.jacc.2021.07.052" },
  granger: { id: "grace-2003", citation: "Granger CB, Goldberg RJ, Dabbous O, et al. Predictors of hospital mortality in the Global Registry of Acute Coronary Events. Arch Intern Med. 2003.", url: "https://doi.org/10.1001/archinte.163.19.2345" },
  amsterdam: { id: "aha-nste-acs-2014", citation: "Amsterdam EA, Wenger NK, Brindis RG, et al. 2014 AHA/ACC guideline for the management of patients with non-ST-elevation acute coronary syndromes. Circulation. 2014.", url: "https://doi.org/10.1161/CIR.0000000000000134" },
  tnk: { id: "tnkase-pm-2023", citation: "Hoffmann-La Roche Limited. Product monograph. TNKase (tenecteplase for injection). Date of revision 21 March 2023.", url: "https://pdf.hres.ca/dpd_pm/00069984.PDF" },
  stream: { id: "stream-2013", citation: "Armstrong PW, Gershlick AH, Goldstein P, et al. Fibrinolysis or primary PCI in ST-segment elevation myocardial infarction. N Engl J Med. 2013.", url: "https://doi.org/10.1056/NEJMoa1301092" },
  stream2: { id: "stream-2-2023", citation: "Van de Werf F, Ristic AD, Averkov OV, et al. STREAM-2: half-dose tenecteplase or primary percutaneous coronary intervention in older patients with ST-segment-elevation myocardial infarction. Circulation. 2023.", url: "https://doi.org/10.1161/CIRCULATIONAHA.123.064521" },
  react: { id: "react-2005", citation: "Gershlick AH, Stephens-Lloyd A, Hughes S, et al. Rescue angioplasty after failed thrombolytic therapy for acute myocardial infarction. N Engl J Med. 2005.", url: "https://doi.org/10.1056/NEJMoa050849" },
  dcHyper: { id: "dc-hyperglycemic-2018", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018.", url: "https://doi.org/10.1016/j.jcjd.2017.10.013" },
  dcCvd: { id: "dc-cvd-screening-2018", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Poirier P, Bertrand OF, Leipsic J, et al. Screening for the presence of cardiovascular disease. Can J Diabetes. 2018.", url: "https://doi.org/10.1016/j.jcjd.2017.10.025" },
  canto: { id: "canto-2000", citation: "Canto JG, Shlipak MG, Rogers WJ, et al. Prevalence, clinical characteristics, and mortality among patients with myocardial infarction presenting without chest pain. JAMA. 2000.", url: "https://doi.org/10.1001/jama.283.24.3223" },
} satisfies Record<string, Source>;

export const ISCHEMIC_HEART_DISEASE_S57: Samp[] = [
  /* 48 ------------------------------------------------------------------ */
  {
    id: "ischemic-heart-disease-48",
    topic: TOPIC,
    title: "Burning after a canoe carry",
    stem:
      "You are working in a rural hospital emergency department. Troponin is measured with a point-of-care assay that is not high sensitivity, and the regional centre is 2 hours away by road. A 61-year-old man presents to the emergency department after one episode of central chest burning that began 6 hours ago while he carried a canoe up from the lake. It lasted 15 minutes and eased with rest. He has had no pain since. He has long-standing hypertension and type 2 diabetes and takes ramipril and metformin. He walks 5 km daily. His examination is normal. His ECG shows sinus rhythm with high QRS voltage and 1 mm ST depression with T wave inversion in V5 and V6, unchanged from an ECG 2 years ago. The point-of-care troponin I drawn on arrival is below the reference limit.",
    vitals: { temperature: "36.6°C oral", pulse: "72/minute", resp: "16/minute", bp: "152/88 mmHg", o2sat: "98% on room air", weight: "96 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his point-of-care troponin result is most accurate?",
        options: [
          "It does not exclude MI on its own",
          "It excludes MI after 6 hours of symptoms",
          "It is as sensitive as a high sensitivity assay",
          "It permits discharge if the ECG is unchanged",
          "It rules out unstable angina as well",
        ],
        correct: 0,
        explanation:
          "A single troponin can exclude MI only when a high sensitivity assay is below its limit of detection and the symptoms began at least 3 hours earlier. His assay is not high sensitivity, so one result below its reference limit does not exclude MI, even 6 hours after the pain, and a repeat sample is needed. A conventional assay is not equivalent to a high sensitivity one at low concentrations. Unstable angina does not raise troponin at all, so no troponin result rules it out. His unchanged ECG with LVH changes does not make discharge safe before the troponin testing is complete.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate timing for his next troponin sample?",
        options: [
          "1 hour after the first",
          "2 hours after the first",
          "3 to 6 hours after the first",
          "12 hours after the first",
          "24 hours after the first",
        ],
        correct: 2,
        explanation:
          "With a conventional troponin assay the repeat sample is drawn 3 to 6 hours after the first. The 1 to 3 hour interval applies to high sensitivity assays, and his point-of-care assay is not one, so a sample at 1 or 2 hours may miss a rise that a later sample would show. Waiting 12 or 24 hours adds nothing to the diagnosis and keeps a patient with possible ACS in the department far longer than his assessment needs.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q3",
        kind: "single",
        update: "His repeat point-of-care troponin 4 hours after the first is again below the reference limit. He has had no further pain. You judge him to be at intermediate risk.",
        prompt: "Which of the following tests is most appropriate to look for inducible myocardial ischemia in him?",
        options: [
          "Coronary artery calcium score",
          "Exercise treadmill ECG",
          "Invasive coronary angiography",
          "Stress echocardiography with exercise",
          "No further cardiac testing",
        ],
        correct: 3,
        explanation:
          "His resting ECG already shows 1 mm ST depression and T wave inversion in V5 and V6 from LVH, so ST changes during exercise cannot be read as ischemia. Exercise ECG alone suits patients with an interpretable resting ECG. He walks 5 km daily, so exercise with echocardiographic imaging tests for ischemia and also measures his capacity. A calcium score shows calcified plaque but not ischemia. Invasive angiography is for high risk features, which he does not have. At intermediate risk, further testing is advised rather than none.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "Stress echocardiography at the regional centre is booked for next week. He is discharged with return instructions.",
        prompt: "Which of the following stress echocardiography findings would most clearly call for invasive coronary angiography?",
        options: [
          "Exercise capacity of 10 METs",
          "Hypertensive response to exercise",
          "Isolated atrial premature beats",
          "Left ventricular hypertrophy at rest",
          "Wall motion loss in two territories",
        ],
        correct: 4,
        explanation:
          "New wall motion loss in two coronary territories during stress is moderate to severe inducible ischemia. That makes him high risk, and invasive angiography is then recommended. Reaching 10 METs is a favourable prognostic finding. A marked blood pressure rise with exercise is common in hypertension and does not show ischemia. Isolated atrial premature beats are benign. LVH at rest is already known from his ECG and calls for better blood pressure control rather than angiography.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "aha-chest-pain-2021",
      },
    ],
    sources: [S.gulati],
    ...META,
  },

  /* 49 ------------------------------------------------------------------ */
  {
    id: "ischemic-heart-disease-49",
    topic: TOPIC,
    title: "Another attack after supper",
    stem:
      "A 74-year-old woman presents to the emergency department with 2 hours of aching in her upper abdomen and lower chest that began after supper. She says it feels like the gallstone attacks she had last year, which settled without surgery. She also became short of breath and sweaty while walking in from the car. She has type 2 diabetes and hypertension and takes metformin and ramipril. Triage placed her in the waiting room with a note of biliary colic, and her ECG was recorded 50 minutes after arrival. She is diaphoretic. Her abdomen is soft, with mild epigastric tenderness and no Murphy sign. Bedside ultrasound shows several gallstones with a normal gallbladder wall and no pericholecystic fluid. Her ECG shows sinus rhythm with new 1 mm horizontal ST depression in V4 to V6.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "20/minute", bp: "148/84 mmHg", o2sat: "95% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the target time from arrival to the first ECG for a presentation like hers?",
        options: ["10 minutes", "20 minutes", "30 minutes", "45 minutes", "60 minutes"],
        correct: 0,
        explanation:
          "Acute chest discomfort, including lower chest and upper abdominal aching with breathlessness and sweating, calls for an ECG that is recorded and reviewed for STEMI within 10 minutes of arrival in any setting. Her ECG at 50 minutes was late because the triage label of biliary colic took her off the chest pain pathway. Targets of 20 to 60 minutes would let an occlusion MI go unrecognized while myocardium is lost. Troponin is also drawn as soon as possible after arrival.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following features of her presentation most raise the likelihood of a cardiac cause?",
        options: [
          "Ache after a large supper",
          "Breathless walking in from the car",
          "Epigastric tenderness on palpation",
          "Gallstones on bedside ultrasound",
          "Pain like her attacks last year",
          "Sweating during the episode",
        ],
        select: 2,
        correct: [1, 5],
        explanation:
          "Breathlessness and sweating are accompanying symptoms that the chest pain guideline asks clinicians to seek in women, and breathlessness brought on by walking points toward myocardial ischemia rather than biliary pain. Onset after a meal and likeness to earlier attacks fit biliary colic, but a meal can also bring on angina, so neither separates the two. Mild epigastric tenderness is nonspecific. Gallstones are common at 74 and are often incidental.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about the gallstones on her ultrasound is most accurate?",
        options: [
          "They confirm biliary colic as the cause",
          "They explain the ST changes on her ECG",
          "They make troponin testing unnecessary",
          "They need surgical review before other tests",
          "They still leave myocardial ischemia possible",
        ],
        correct: 4,
        explanation:
          "Gallstones are common in older adults and are often found by chance, and her scan shows no wall thickening, pericholecystic fluid or Murphy sign. Finding them does not prove they caused this episode, and a woman with diabetes, exertional breathlessness, sweating and new ST depression has ACS until serial troponins and ECGs show otherwise. Gallstones do not account for new ST depression in V4 to V6. Troponin testing stays essential, and surgical review can follow once ischemia has been addressed.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "High sensitivity troponin I is 46 ng/L at arrival and 138 ng/L at 1 hour (female 99th percentile 16 ng/L). Creatinine is 132 umol/L.",
        prompt: "Which of the following findings in her case is a variable in the GRACE risk score?",
        options: [
          "Bedside finding of gallstones",
          "Creatinine of 132 umol/L",
          "Current metformin therapy",
          "Long-standing type 2 diabetes",
          "Treated hypertension",
        ],
        correct: 1,
        explanation:
          "The GRACE score estimates in-hospital mortality in ACS from age, heart rate, systolic BP, serum creatinine, Killip class, cardiac arrest at presentation, ST deviation and raised cardiac markers. Her creatinine of 132 umol/L adds to her risk, along with her age, her ST depression and her rising troponin. Diabetes, hypertension and metformin matter for her care but are not GRACE variables. Gallstones carry no weight in the score.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "grace-2003",
      },
    ],
    sources: [S.gulati, S.granger],
    ...META,
  },

  /* 50 ------------------------------------------------------------------ */
  {
    id: "ischemic-heart-disease-50",
    topic: TOPIC,
    title: "Tightness on the hill to his house",
    stem:
      "A 58-year-old man presents to the emergency department with 3 weeks of central chest tightness that comes on when he walks up the hill to his house and eases within 3 minutes of rest. He has not had these symptoms before. The last episode was 5 hours ago, and he is pain free. A CT coronary angiogram 3 years ago, done to investigate chest discomfort, showed 30% plaque in the proximal LAD and no other stenosis. He was prescribed atorvastatin 40 mg daily but stopped it a year ago because he felt well. He has hypertension and takes ASA 81 mg daily, bisoprolol 5 mg daily and sildenafil 50 mg as needed. His examination and ECG are normal. High sensitivity troponin T is below 5 ng/L at arrival and 6 ng/L at 1 hour (99th percentile 14 ng/L).",
    vitals: { temperature: "36.7°C oral", pulse: "64/minute", resp: "14/minute", bp: "138/82 mmHg", o2sat: "98% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following statements about his two troponin results is most accurate?",
        options: [
          "They confirm his symptoms are not cardiac",
          "They do not exclude coronary disease",
          "They make further testing unnecessary",
          "They rule out unstable angina",
          "They show his old plaque is stable",
        ],
        correct: 1,
        explanation:
          "Troponin measures myocardial injury, and two low results 1 hour apart exclude acute MI. They do not show whether a stenosis limits blood flow on exertion, so new tightness that comes with climbing and eases with rest can still be angina from a progressing LAD plaque. Unstable angina also occurs with normal troponin. Whether his plaque has progressed, and whether he needs testing, is judged from his symptoms, his risk and imaging, not from a normal troponin.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q2",
        kind: "single",
        update: "You judge him to be at intermediate risk. His LDL cholesterol today is 3.4 mmol/L.",
        prompt: "Which of the following is most appropriate to start before further cardiac testing is arranged?",
        options: [
          "Add clopidogrel 75 mg PO daily",
          "Add isosorbide mononitrate 30 mg PO daily",
          "Restart atorvastatin 40 mg PO daily",
          "Start apixaban 2.5 mg PO twice daily",
          "Stop bisoprolol 5 mg PO daily",
        ],
        correct: 2,
        explanation:
          "For an intermediate risk patient with known coronary disease and new symptoms, guideline-directed medical therapy is optimized before more testing. He has documented LAD plaque and an LDL of 3.4 mmol/L off treatment, so restarting his statin is the clear first step. A long-acting nitrate is unsafe because he uses sildenafil. Clopidogrel added to ASA is for ACS or after a stent, not for stable plaque. Apixaban has no role without AF or venous thrombosis, and stopping bisoprolol would remove an anti-anginal drug.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next cardiac test for him as an outpatient?",
        options: [
          "CT coronary angiography",
          "Holter monitoring for 48 hours",
          "Invasive coronary angiography",
          "Stand-alone calcium score CT",
          "No further cardiac testing",
        ],
        correct: 0,
        explanation:
          "For intermediate risk chest pain with known nonobstructive coronary disease, CT coronary angiography can show whether his 30% LAD plaque has progressed to an obstructive stenosis. Stress imaging is a reasonable alternative. A Holter monitor looks for arrhythmia, not ischemia. A calcium score adds little once plaque is already known and cannot grade a stenosis. Invasive angiography is kept for high risk findings or known high risk anatomy. Some testing is needed because his exertional symptoms are new.",
        keyFeature: { topic: TOPIC, n: 8 },
        source: "aha-chest-pain-2021",
      },
      {
        id: "q4",
        kind: "single",
        update: "He asks whether he can use a sublingual nitroglycerin spray for future episodes.",
        prompt: "Which of the following is the minimum interval after a dose of sildenafil before nitroglycerin may be used?",
        options: ["2 hours", "6 hours", "12 hours", "24 hours", "48 hours"],
        correct: 3,
        explanation:
          "Sildenafil and nitrates both raise cyclic GMP in vascular smooth muscle, and together they can cause profound hypotension. Nitrates should not be given within 24 hours of sildenafil or vardenafil, or within 48 hours of tadalafil. Intervals of 2 to 12 hours are too short because the effect of sildenafil persists. The 48 hour interval applies to the longer acting tadalafil. If pain starts within 24 hours of a sildenafil dose, he should call 911 rather than use the spray.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "aha-nste-acs-2014",
      },
    ],
    sources: [S.gulati, S.amsterdam],
    ...META,
  },

  /* 51 ------------------------------------------------------------------ */
  {
    id: "ischemic-heart-disease-51",
    topic: TOPIC,
    title: "Chest pressure on the island",
    stem:
      "You are working in a hospital on an island. Transfer to the nearest PCI centre takes at least 3 hours by ferry and road, and no aircraft can fly tonight. A 78-year-old woman presents to the emergency department with 90 minutes of central chest pressure and nausea. She has hypertension treated with amlodipine. She has no history of bleeding, stroke, recent surgery or trauma, and she takes no anticoagulant. She is pale and her lungs are clear. Her ECG shows 6 mm ST elevation in V2, 3 to 5 mm ST elevation in V1, V3 and V4, and no Q waves. Creatinine is 84 umol/L. The team decides on fibrinolysis, and she chews ASA 160 mg.",
    vitals: { temperature: "36.5°C oral", pulse: "92/minute", resp: "18/minute", bp: "146/84 mmHg", o2sat: "96% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following tenecteplase doses is most appropriate for her?",
        options: ["tenecteplase 15 mg IV", "tenecteplase 17.5 mg IV", "tenecteplase 30 mg IV", "tenecteplase 35 mg IV", "tenecteplase 50 mg IV"],
        correct: 1,
        explanation:
          "At 62 kg she falls in the band of 60 to under 70 kg, where the full tenecteplase dose is 35 mg. Because she is 78, the dose is halved to 17.5 mg. Full doses in patients aged 75 or older were linked with excess intracranial hemorrhage in the STREAM trial, and halving the dose removed that excess. A full 35 mg ignores her age. The 30 mg dose is the full dose for under 60 kg, and 15 mg halves the wrong band. The 50 mg maximum is for 90 kg or more.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "tnkase-pm-2023",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following anticoagulant regimens should accompany her tenecteplase?",
        options: [
          "enoxaparin 30 mg IV, then 0.75 mg/kg SC",
          "enoxaparin 30 mg IV, then 1 mg/kg SC",
          "enoxaparin 0.75 mg/kg SC, no IV bolus",
          "enoxaparin 1 mg/kg SC, no IV bolus",
          "heparin 60 units/kg IV bolus only",
        ],
        correct: 2,
        explanation:
          "In older patients given tenecteplase, enoxaparin is given as 0.75 mg/kg SC without an IV bolus, and the 30 mg IV bolus is kept for those aged 75 or younger. For her 62 kg that is about 46 mg SC. Adding the IV bolus or using 1 mg/kg at age 78 raises her bleeding risk, including intracranial hemorrhage. A heparin bolus without an infusion leaves her without anticoagulation after the first hours, while the artery is at risk of reocclusion.",
        keyFeature: { topic: TOPIC, n: 7 },
        source: "stream-2-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "Seventy-five minutes after tenecteplase she still has pressure rated 6 out of 10. The ST elevation in V2 now measures 4 mm.",
        prompt: "Which of the following is the ST-segment resolution in lead V2 at this point?",
        options: ["17%", "25%", "33%", "50%", "67%"],
        correct: 2,
        explanation:
          "ST resolution is measured in the lead with the most elevation. In V2 it fell from 6 mm to 4 mm, a drop of 2 mm, and 2 divided by 6 is 33%. Resolution of less than 50% by 90 minutes after fibrinolysis, with ongoing pain, marks failed reperfusion. The figure of 67% is the share of elevation that remains, not the share that resolved. The figure of 50% divides the drop by the current 4 mm. The figures of 17% and 25% do not follow from her measurements.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "react-2005",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Angiography at the PCI centre in 6 to 24 hours",
          "Nitroglycerin infusion with monitoring",
          "Observation and repeat ECG in 1 hour",
          "Repeat tenecteplase at the same dose",
          "Urgent transfer for rescue PCI",
        ],
        correct: 4,
        explanation:
          "Failed fibrinolysis calls for emergency angiography, so she needs urgent transfer for rescue PCI even though the trip takes 3 hours. Rescue PCI gave better event-free survival than repeated fibrinolysis or conservative care. Repeating tenecteplase adds bleeding risk without that benefit. Angiography at 6 to 24 hours is the plan after successful fibrinolysis, which she has not had. A nitroglycerin infusion may ease pain but does not open the artery, and an hour of observation only delays reperfusion.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "stream-2013",
      },
    ],
    sources: [S.tnk, S.stream2, S.react, S.stream],
    ...META,
  },

  /* 52 ------------------------------------------------------------------ */
  {
    id: "ischemic-heart-disease-52",
    topic: TOPIC,
    title: "Vomiting and deep breathing in a man with diabetes",
    stem:
      "A 66-year-old man is brought to the emergency department by his wife with 1 day of vomiting, malaise and vague upper abdominal discomfort. He has had no chest pain, diarrhea, fever or urinary symptoms. He has had type 2 diabetes for 20 years, with peripheral neuropathy and gastroparesis, and he becomes light-headed when he stands. He takes metformin, empagliflozin and insulin glargine and has not missed a dose. He looks dry and is breathing deeply. His abdomen is soft and not tender. Glucose is 13.8 mmol/L, pH 7.14, bicarbonate 8 mmol/L, anion gap 25 mmol/L and beta-hydroxybutyrate 6.2 mmol/L. Lipase and urinalysis are normal. His ECG shows sinus tachycardia with new 2 mm horizontal ST depression in V3 to V6. High sensitivity troponin I is 640 ng/L (male 99th percentile 34 ng/L).",
    vitals: { temperature: "36.9°C oral", pulse: "118/minute", resp: "28/minute", bp: "104/66 mmHg", o2sat: "97% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely precipitant of his ketoacidosis?",
        options: ["Acute pancreatitis", "Gastroparesis flare", "Missed insulin doses", "Myocardial infarction", "Urinary tract infection"],
        correct: 3,
        explanation:
          "MI is a recognized precipitant of DKA, and new 2 mm ST depression in V3 to V6 with a troponin of 640 ng/L, about 19 times the 99th percentile, points to it. Empagliflozin lowered his threshold for ketoacidosis and kept his glucose at 13.8 mmol/L, but an acute stress still tipped him over. A normal lipase argues against pancreatitis, and a normal urinalysis without fever argues against urinary infection. He has not missed insulin. Gastroparesis explains vomiting but not ST depression with troponin release.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "dc-hyperglycemic-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains why he had no chest pain with this event?",
        options: [
          "Acidosis blunting pain perception",
          "Autonomic neuropathy from diabetes",
          "Demand ischemia without infarction",
          "Pain masked by his gastroparesis",
          "Small territory of myocardium at risk",
        ],
        correct: 1,
        explanation:
          "Twenty years of diabetes with peripheral neuropathy, gastroparesis and light-headedness on standing point to autonomic neuropathy, which is linked to silent coronary disease. People with diabetes have a high rate of silent ischemia, and almost one third of their MIs occur without recognized or typical symptoms. Acidosis does not abolish ischemic pain. ST depression across V3 to V6 does not suggest a small territory. Gastroparesis causes vomiting but does not hide chest pain, and a troponin of 640 ng/L shows that infarction has occurred.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "dc-cvd-screening-2018",
      },
      {
        id: "q3",
        kind: "single",
        update: "A colleague suggests that the troponin reflects the ketoacidosis and plans to recheck it after the acidosis resolves.",
        prompt: "Which of the following best describes his troponin result in this setting?",
        options: [
          "Acute MI given new ST depression",
          "Expected finding in severe ketoacidosis",
          "Needs no action until acidosis clears",
          "Reflects reduced renal clearance only",
          "Unreliable while the pH is below 7.2",
        ],
        correct: 0,
        explanation:
          "A small troponin rise can occur in DKA without overt ischemia, but his level of 640 ng/L is about 19 times the 99th percentile and comes with new ST depression in V3 to V6. That is most likely an acute MI, so serial troponins and ECGs, cardiology input and ACS treatment run alongside the DKA protocol now. Waiting for the acidosis to clear delays that care. Acidosis does not make the assay unreliable. Reduced renal clearance causes modest elevations, not a level this high with new ischemic changes.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "dc-hyperglycemic-2018",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of his presentation is linked to higher in-hospital mortality from MI?",
        options: [
          "Glucose below 14 mmol/L",
          "Male sex at age 66",
          "Metformin therapy",
          "Painless presentation",
          "Vomiting before arrival",
        ],
        correct: 3,
        explanation:
          "In a registry of more than 430 000 patients, MI without chest pain carried an in-hospital mortality of 23.3% compared with 9.3% for MI with chest pain, with an adjusted odds ratio of 2.21. Patients without pain arrived later and less often received reperfusion, ASA, beta blockers or heparin. A painless presentation like his is therefore a marker of higher risk and a reason to start ACS care without delay. The other features listed do not carry this documented excess risk.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "canto-2000",
      },
    ],
    sources: [S.dcHyper, S.dcCvd, S.canto],
    ...META,
  },
];
