import type { Item } from "@/engine/types";
import { ADRENAL, HE, HINKLE, NEUTROPENIA, PREECLAMPSIA, SEIZURE, THYROID, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s25-21", {
      topic: "Missed steroid doses with vomiting",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with Addison disease takes hydrocortisone by mouth each day. The client has vomited for 2 days and could not keep the tablets down. BP is 78/44 mmHg. Temperature is 37.1°C (98.8°F). Serum sodium is 126 mEq/L (126 mmol/L), potassium 5.9 mEq/L (5.9 mmol/L) and blood glucose 58 mg/dL (3.2 mmol/L). The client is oriented to person, place and time. Which findings are consistent with acute adrenal crisis? Select all that apply.",
      rationale:
        "Without cortisol and aldosterone the body cannot hold sodium or water or keep glucose up. The BP of 78/44 mmHg shows shock from volume loss and lost vascular tone. Sodium of 126 mEq/L and potassium of 5.9 mEq/L reflect missing aldosterone. Glucose of 58 mg/dL reflects missing cortisol. A normal temperature and intact orientation do not point to crisis. The client needs IV hydrocortisone and fluids.",
      sources: [ADRENAL, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Temperature 37.1°C (98.8°F)", why: "A normal temperature is not a feature of adrenal crisis." },
      { text: "BP 78/44 mmHg", why: "Loss of cortisol and aldosterone causes volume loss and shock." },
      { text: "Oriented to person, place and time", why: "Intact orientation is not a sign of crisis. Confusion can occur as crisis worsens." },
      { text: "Serum sodium 126 mEq/L", why: "Without aldosterone the kidneys lose sodium." },
      { text: "Serum potassium 5.9 mEq/L", why: "Without aldosterone the kidneys retain potassium." },
      { text: "Blood glucose 58 mg/dL", why: "Without cortisol the liver cannot keep glucose up." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s25-22", {
      topic: "Fever control in thyroid storm",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with Graves disease develops thyroid storm after a chest infection. Temperature is 40.1°C (104.2°F) and heart rate is 156/minute. The client is agitated and sweating. The prescriptions include propylthiouracil, propranolol and an antipyretic as needed. Which action should the nurse take for the fever?",
      rationale:
        "A temperature of 40.1°C in thyroid storm raises metabolic demand and strains the heart. Acetaminophen with a cooling blanket lowers it safely. Aspirin is avoided because salicylates free thyroid hormone from its binding proteins, which worsens the storm. Warm blankets would trap heat. Waiting for cultures delays treatment of a fever that is itself dangerous.",
      sources: [THYROID],
    }),
    kind: "mc",
    options: [
      { text: "Give aspirin and use a cooling blanket", why: "Salicylates free thyroid hormone from binding proteins and can worsen the storm." },
      { text: "Hold antipyretics until cultures are drawn", why: "Delaying treatment lets a dangerous fever keep driving the heart rate up." },
      { text: "Give acetaminophen and use a cooling blanket", why: "Acetaminophen and external cooling lower the fever without raising free thyroid hormone." },
      { text: "Add warm blankets until the chills stop", why: "Warm blankets trap heat and push the temperature higher." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s25-23", {
      topic: "Continuous bubbling in a chest drain",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has a left chest tube connected to a drainage system on suction for a pneumothorax. Yesterday the water seal chamber bubbled only when the client coughed. Now it bubbles continuously and vigorously. Respirations are 18/minute and SpO2 is 95%. What should the nurse do first?",
      rationale:
        "Intermittent bubbling with coughing is expected while a pneumothorax heals. New continuous bubbling in the water seal chamber means air is entering the system. The first step is to check the tubing and connections from the chest to the drain for a leak. More suction does not fix a leak. Clamping a tube while air still leaks from the lung can cause a tension pneumothorax.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Document this as an expected finding", why: "Continuous bubbling is a change from yesterday and signals an air leak." },
      { text: "Increase the suction to the chamber", why: "More suction does not seal a leak and can pull more air through it." },
      { text: "Clamp the tube until the provider arrives", why: "Clamping can trap air leaking from the lung and cause a tension pneumothorax." },
      { text: "Check the tubing connections for a leak", why: "A loose connection is a common, fixable cause of a new air leak." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s25-24", {
      topic: "First hemodialysis complications",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with kidney failure is in the third hour of a first hemodialysis session. The predialysis BUN was 142 mg/dL (50.7 mmol/L). Weight is down 1.5 kg since the start. BP is 128/76 mmHg, down from 146/84 mmHg. The catheter dressing is dry and intact. The client now reports a new headache with nausea and is restless and newly confused. Which two findings suggest dialysis disequilibrium syndrome? Select two.",
      rationale:
        "Dialysis removes urea from the blood faster than from the brain. Water then moves into brain cells and causes swelling. The risk is highest in a first session with a BUN as high as 142 mg/dL. Headache, nausea, restlessness and confusion are the early signs. A 1.5 kg weight loss and a modest BP fall are expected with fluid removal. A dry dressing is expected.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report urea in mmol/L rather than BUN in mg/dL, so this result reads as a urea of 50.7 mmol/L. The Medical Council of Canada lists 2.1 to 8.0 mmol/L as the adult range.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Weight down 1.5 kg since the start", why: "Fluid removal is the aim of dialysis, so this loss is expected." },
      { text: "New headache with nausea", why: "Brain swelling from the fast fall in urea causes headache and nausea." },
      { text: "Catheter dressing dry and intact", why: "A dry dressing is expected and does not suggest a complication." },
      { text: "Restlessness and new confusion", why: "Brain swelling from the osmotic shift changes the level of consciousness." },
      { text: "BP 128/76 mmHg, down from 146/84 mmHg", why: "A modest BP fall is expected as fluid is removed." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s25-25", {
      topic: "Sudden dyspnea after hip surgery",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client is 3 days after a hip arthroplasty. The client suddenly reports shortness of breath and sharp chest pain when breathing in. Respirations are 30/minute, heart rate 118/minute and SpO2 86% on room air. The client is anxious. What should the nurse do first?",
      rationale:
        "Sudden dyspnea and pleuritic chest pain after hip surgery suggest a pulmonary embolism. An SpO2 of 86% shows the client is not getting enough oxygen, so oxygen comes first. The nurse then calls for help and stays with the client. An ECG is useful after oxygen is on. Moving the client to a chair adds oxygen demand. An analgesic does not treat the hypoxemia.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Apply oxygen by face mask", why: "Oxygen treats the hypoxemia shown by an SpO2 of 86%." },
      { text: "Obtain a 12-lead ECG", why: "An ECG helps later, but it does not correct the low oxygen level." },
      { text: "Assist the client to the chair", why: "Moving the client raises oxygen demand when oxygen is already low." },
      { text: "Give the prescribed oral analgesic", why: "Pain relief does not treat the hypoxemia, which is the threat to life." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s25-26", {
      topic: "Severe features in preeclampsia",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client at 34 weeks of gestation is admitted with preeclampsia. The nurse reviews the admission note. Click to highlight the findings that are severe features of preeclampsia.",
      rationale:
        "A BP of 166/112 mmHg on two checks is in the severe range. A headache that does not respond to acetaminophen and spots before the eyes point to brain involvement. Pain under the right ribs points to liver involvement. A platelet count of 88 000 per microliter is below 100 000 per microliter. A fetal heart rate of 140/minute with moderate variability is reassuring. Trace ankle edema and 2+ reflexes are common in pregnancy.",
      refs: [
        "A systolic BP of 160 mmHg or more or a diastolic BP of 110 mmHg or more is a severe feature of preeclampsia.",
        "A platelet count below 100 000 per microliter is a severe feature of preeclampsia.",
      ],
      sources: [PREECLAMPSIA, { body: "Magee LA, Smith GN, Bloch C, et al. Society of Obstetricians and Gynaecologists of Canada", work: "Guideline No. 426: Hypertensive Disorders of Pregnancy: Diagnosis, Prediction, Prevention, and Management. Journal of Obstetrics and Gynaecology Canada 44(5):547", year: 2022, url: "https://pubmed.ncbi.nlm.nih.gov/35577426/" }],
      canada: "SOGC Guideline No. 426 (2022) uses adverse conditions rather than severe features. Headache, visual symptoms, right upper quadrant pain and a low platelet count are adverse conditions, and platelets below 50 x 10^9/L are a severe complication. Canadian labs report this count as 88 x 10^9/L.",
    }),
    kind: "highlight",
    passage:
      "[[BP 166/112 mmHg on two checks 15 minutes apart]]. [[Fetal heart rate 140/minute with moderate variability]]. [[Headache not relieved by acetaminophen]]. [[Trace ankle edema]]. [[Reports spots before the eyes]]. [[Deep tendon reflexes 2+]]. [[Pain under the right ribs]]. [[Platelet count 88 000 per microliter]].",
    spans: [
      { text: "BP 166/112 mmHg on two checks 15 minutes apart", why: "Both values are in the severe range and were confirmed on a second check." },
      { text: "Fetal heart rate 140/minute with moderate variability", why: "This is a reassuring fetal heart rate pattern." },
      { text: "Headache not relieved by acetaminophen", why: "A persistent headache is a sign of cerebral involvement." },
      { text: "Trace ankle edema", why: "Mild ankle edema is common in pregnancy and is not a severe feature." },
      { text: "Reports spots before the eyes", why: "Visual changes show cerebral or retinal involvement." },
      { text: "Deep tendon reflexes 2+", why: "2+ reflexes are normal and do not show hyperreflexia." },
      { text: "Pain under the right ribs", why: "Right upper quadrant pain suggests liver swelling or injury." },
      { text: "Platelet count 88 000 per microliter", why: "A count below 100 000 per microliter is a severe feature." },
    ],
    correct: [0, 2, 4, 6, 7],
  },
  {
    ...meta("rn-s25-27", {
      topic: "Pain out of proportion after a fracture",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had a closed tibia fracture placed in a long leg cast 12 hours ago. The client rates leg pain 9 of 10, unchanged 30 minutes after IV morphine. Pain increases when the nurse gently moves the toes. The toes are pink and the pedal pulse is palpable. What should the nurse do?",
      rationale:
        "Severe pain that opioids do not relieve and pain on passive toe movement are early signs of compartment syndrome. Pink toes and a palpable pulse do not rule it out, since pulses often stay until late. The nurse reports at once so the cast can be split and pressures checked. Raising the leg well above the heart lowers arterial inflow. More morphine masks the problem. Waiting an hour risks muscle death.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Raise the leg well above heart level", why: "High elevation lowers arterial inflow to a compartment already under pressure." },
      { text: "Report the findings to the provider", why: "Early signs of compartment syndrome need urgent release of pressure to save the limb." },
      { text: "Give another dose of IV morphine", why: "More opioid masks the pain that signals rising compartment pressure." },
      { text: "Recheck the leg in 1 hour", why: "Muscle and nerve damage can become permanent within hours, so waiting is unsafe." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s25-28", {
      topic: "Care during a generalized seizure",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client in bed on a medical unit begins a generalized tonic-clonic seizure. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The nurse turns the client to the side so saliva drains and the airway stays open. Noting the start time shows whether the seizure becomes status epilepticus. Loosening clothing at the neck helps breathing. An IV benzodiazepine is kept ready in case the seizure lasts 5 minutes. Objects in the mouth can break teeth. Restraint can cause injury. Nothing is given by mouth until the client is awake.",
      refs: ["A seizure lasting 5 minutes or longer is treated as status epilepticus."],
      sources: [SEIZURE, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Place a bite block between the teeth", why: "Objects in the mouth can break teeth or block the airway." },
      { text: "Turn the client onto the side", why: "Side lying lets saliva drain and keeps the tongue from blocking the airway." },
      { text: "Hold the arms and legs still", why: "Restraining the limbs can cause fractures and soft tissue injury." },
      { text: "Note the time the seizure began", why: "Timing shows whether the seizure reaches 5 minutes and needs emergency drugs." },
      { text: "Offer sips of water as jerking stops", why: "Swallowing is not safe until the client is fully awake." },
      { text: "Loosen clothing around the neck", why: "Loose clothing helps the client breathe during and after the seizure." },
      { text: "Have an IV benzodiazepine ready", why: "A seizure that lasts 5 minutes is treated first with a benzodiazepine." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s25-29", {
      topic: "Response to therapy for hepatic encephalopathy",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with cirrhosis was admitted confused, with asterixis and an ammonia level of 118 mcg/dL (69 micromol/L). The client receives lactulose by mouth. On day 3, which finding best shows that the treatment is effective?",
      rationale:
        "Lactulose draws ammonia into the colon and speeds its removal in stool. The dose is adjusted to give 2 to 3 soft stools a day. Clear thinking shows the encephalopathy is resolving. No stool for 2 days means ammonia is not being cleared. Ongoing asterixis shows the encephalopathy persists. Eight watery stools in 12 hours is too much and risks dehydration and low potassium.",
      sources: [HE],
    }),
    kind: "mc",
    options: [
      { text: "No bowel movement for 2 days", why: "Without stool, ammonia is not being cleared from the gut." },
      { text: "Hands flap when the arms are held out", why: "Asterixis shows the encephalopathy has not resolved." },
      { text: "Eight watery stools in 12 hours", why: "Excess stool risks dehydration and low potassium, which can worsen encephalopathy." },
      { text: "Oriented, 2 to 3 soft stools daily", why: "Lactulose is aimed at 2 to 3 soft stools a day, and orientation shows recovery." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s25-30", {
      need: "SIPC",
      topic: "Protecting a client with neutropenia",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client receiving chemotherapy for leukemia has an absolute neutrophil count of 400/mm3. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "A neutrophil count of 400/mm3 leaves the client at high risk of infection. Hand hygiene before entering is the most effective protection. Fresh flowers and standing water can carry bacteria and fungi. A temperature of 38.3°C is treated as fever in neutropenia and needs urgent reporting. Rectal temperatures and enemas can injure the mucosa and let bacteria in. Visitors with colds stay away.",
      refs: ["In neutropenia, a single oral temperature of 38.3°C or higher is treated as fever."],
      sources: [NEUTROPENIA, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report neutrophil counts as x 10^9/L, so 400/mm3 reads as 0.4 x 10^9/L. The Medical Council of Canada lists 2.0 to 7.5 x 10^9/L as the adult absolute neutrophil range.",
    }),
    kind: "sata",
    options: [
      { text: "Check temperatures by the rectal route", why: "Rectal devices can injure the mucosa and let gut bacteria into the blood." },
      { text: "Perform hand hygiene before entering", why: "Clean hands are the most effective way to prevent infection." },
      { text: "Admit visitors who have mild colds", why: "Even mild viral illness can cause serious infection in neutropenia." },
      { text: "Remove fresh flowers from the room", why: "Flowers and their water can harbor bacteria and fungi." },
      { text: "Report a temperature of 38.3°C (100.9°F)", why: "This is a fever in neutropenia and needs prompt cultures and antibiotics." },
      { text: "Give an enema for constipation", why: "Enemas can injure the rectal mucosa and let bacteria in." },
    ],
    correct: [1, 3, 4],
  },
];
