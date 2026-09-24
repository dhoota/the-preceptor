import type { Item } from "@/engine/types";
import { ACS, AORTA, HF, HINKLE, OXYGEN, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s23-31", {
      topic: "Chest wall movement after rib fractures",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 52-year-old driver struck the steering wheel in a car crash. Several adjacent ribs on the right are broken in two places each. The nurse watches the chest during breathing. Which finding is most consistent with a flail chest?",
      rationale:
        "When adjacent ribs break in two or more places, a segment of chest wall floats free. It moves in on inspiration and out on expiration, opposite to the rest of the chest. This paradoxical movement defines flail chest and reduces ventilation. Hyperresonance and a shifted trachea point to pneumothorax. Crackling under the skin shows air leaking into the tissue.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Hyperresonance over the right chest", why: "Hyperresonance suggests air in the pleural space, not a free rib segment." },
      { text: "Trachea shifted to the left", why: "A tracheal shift suggests tension pneumothorax, not flail chest." },
      { text: "Crackling under the skin on palpation", why: "Crackling under the skin shows subcutaneous air, not a flail segment." },
      { text: "Chest wall moves in on inhaling", why: "A free segment sinks in on inspiration as pressure in the chest falls." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s23-32", {
      topic: "Tearing back pain with unequal arm pressures",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 61-year-old client with long-standing hypertension has sudden severe tearing pain between the shoulder blades. BP is 188/104 mmHg in the right arm and 150/86 mmHg in the left arm. Heart rate is 112/minute. The ECG shows sinus tachycardia without ST elevation. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Sudden tearing pain between the shoulder blades in a client with hypertension suggests aortic dissection. A large BP gap between the arms shows the tear is limiting flow to one arm. An IV beta blocker lowers heart rate and pressure to reduce stress on the aortic wall. CT angiography confirms the diagnosis. Aspirin and heparin raise bleeding risk if the aorta ruptures. BP in both arms and heart rate guide therapy.",
      refs: ["In acute aortic dissection, IV beta blockers lower heart rate to 60 to 80/minute and systolic BP to below 120 mmHg."],
      sources: [AORTA],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Acute pericarditis", why: "Pericarditis pain is sharp and positional, and it does not cause unequal arm pressures." },
      { text: "ST elevation myocardial infarction", why: "The ECG shows no ST elevation." },
      { text: "Acute aortic dissection", why: "Tearing back pain with unequal arm pressures in hypertension fits a tear in the aorta." },
      { text: "Pulmonary embolism", why: "Embolism causes sudden breathlessness and does not cause unequal arm pressures." },
    ],
    actions: [
      { text: "Give the prescribed IV beta blocker", why: "Lowering heart rate and BP reduces stress on the torn aortic wall." },
      { text: "Give aspirin 324 mg to chew", why: "Aspirin raises bleeding risk if the aorta ruptures." },
      { text: "Start a heparin infusion", why: "Anticoagulation can worsen bleeding from a dissection." },
      { text: "Prepare for CT angiography", why: "CT angiography confirms the dissection and its extent." },
      { text: "Give a 1 L IV fluid bolus", why: "Extra volume raises BP and stress on the aortic wall in a hypertensive client." },
    ],
    parameters: [
      { text: "Blood pressure in both arms", why: "BP is lowered to a set target, and a changing gap between arms can show the tear spreading." },
      { text: "Peak expiratory flow", why: "Peak flow tracks airway narrowing and does not guide this treatment." },
      { text: "Heart rate and rhythm", why: "Heart rate is lowered to reduce the force on the aortic wall." },
      { text: "Serum lipase level", why: "Lipase tracks pancreatitis and does not guide this treatment." },
      { text: "Capillary glucose level", why: "Glucose does not guide treatment of a dissection." },
    ],
    correct: { condition: 2, actions: [0, 3], parameters: [0, 2] },
  },
  {
    ...meta("rn-s23-33", {
      topic: "Causes of metabolic acidosis",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse reviews new admissions on a medical unit. Which clients are at risk for metabolic acidosis? Select all that apply.",
      rationale:
        "Metabolic acidosis follows a loss of bicarbonate or a gain of acid. Diarrhea drains bicarbonate from the bowel. Failing kidneys cannot excrete acid or make new bicarbonate. Shock causes anaerobic metabolism and lactic acid. Vomiting removes gastric acid and causes metabolic alkalosis. Thiazides cause alkalosis through chloride and potassium loss. Hyperventilation causes respiratory alkalosis.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "A client with profuse diarrhea", why: "Diarrhea removes bicarbonate from the lower bowel." },
      { text: "A client with repeated vomiting", why: "Vomiting removes gastric acid and causes metabolic alkalosis." },
      { text: "A client hyperventilating from panic", why: "Hyperventilation blows off carbon dioxide and causes respiratory alkalosis." },
      { text: "A client with oliguric kidney injury", why: "Failing kidneys retain acid and cannot make new bicarbonate." },
      { text: "A client taking a thiazide diuretic", why: "Thiazides cause chloride and potassium loss, which leads to alkalosis." },
      { text: "A client in septic shock", why: "Poor perfusion causes anaerobic metabolism and lactic acid buildup." },
    ],
    correct: [0, 3, 5],
  },
  {
    ...meta("rn-s23-34", {
      topic: "Signs that dehydration has resolved",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "An 84-year-old client was admitted with dehydration. On admission the heart rate was 108/minute, urine was dark amber and the client became dizzy on standing. After 24 hours of IV fluids, which finding best shows that fluid volume has been restored?",
      rationale:
        "Kidneys conserve water when volume is low. A steady output of 50 mL each hour shows the kidneys are perfused again. A specific gravity of 1.034 is still concentrated. A heart rate of 106/minute is little changed from 108/minute. A dry, furrowed tongue still points to a deficit.",
      refs: ["Normal urine specific gravity is 1.005 to 1.030.", "Urine output of 30 mL an hour or more shows adequate kidney perfusion in an adult."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Urine output of 50 mL each hour", why: "Steady output above 30 mL an hour shows restored kidney perfusion." },
      { text: "Urine specific gravity of 1.034", why: "A value above 1.030 shows the kidneys are still conserving water." },
      { text: "Heart rate of 106/minute", why: "The heart rate is almost unchanged from 108/minute, so the deficit persists." },
      { text: "Dry, furrowed tongue", why: "A dry, furrowed tongue is a sign of ongoing fluid deficit." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s23-35", {
      topic: "Atypical cardiac symptoms in an older woman",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 64-year-old woman with diabetes reports 2 days of unusual fatigue, nausea, an aching jaw and breathlessness when carrying laundry. She has no chest pain. BP is 138/84 mmHg and heart rate is 96/minute. Which condition is most urgent to rule out?",
      rationale:
        "Women, older adults and people with diabetes often have acute coronary syndrome without classic chest pain. Fatigue, nausea, jaw ache and breathlessness on exertion can all be anginal equivalents. Missing an infarction carries the greatest harm, so it is ruled out first with an ECG and troponin. Reflux, dental disease and anxiety are considered after a cardiac cause is excluded.",
      sources: [ACS],
    }),
    kind: "mc",
    options: [
      { text: "Gastroesophageal reflux", why: "Reflux can cause nausea but does not explain breathlessness with exertion. It is less dangerous to miss." },
      { text: "Dental abscess", why: "A jaw ache with exertional breathlessness points to the heart, not the teeth." },
      { text: "Acute coronary syndrome", why: "Fatigue, nausea, jaw ache and exertional breathlessness in a woman with diabetes can signal ischemia." },
      { text: "Anxiety disorder", why: "Anxiety is a diagnosis made after a cardiac cause is excluded." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s23-36", {
      topic: "Breathing risk with IV opioids after surgery",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 70-year-old client is on day 1 after a bowel resection and receives IV hydromorphone through a demand-dose pump. The nurse reviews the latest note. Click to highlight the findings that suggest opioid-induced respiratory depression.",
      rationale:
        "Sedation comes before respiratory depression with opioids. A client who falls asleep mid-sentence, breathes at 8/minute and snores is at high risk. Snoring shows the upper airway is partly blocked. SpO2 of 88% on oxygen confirms poor ventilation. Small pupils fit opioid effect. The wound, the abdomen, a heart rate of 64/minute and a normal temperature are expected.",
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Difficult to rouse, falls asleep mid-sentence.]] [[Respiratory rate 8/minute.]] [[Snoring respirations.]] [[SpO2 88% on 2 L/minute oxygen.]] [[Pupils small and equal.]] [[Incision edges well approximated.]] [[Abdomen soft.]] [[Heart rate 64/minute.]] [[Temperature 37.0°C (98.6°F).]]",
    spans: [
      { text: "Difficult to rouse, falls asleep mid-sentence.", why: "Increasing sedation is the warning sign that comes before respiratory depression." },
      { text: "Respiratory rate 8/minute.", why: "A rate of 8/minute is slow and shows depressed breathing." },
      { text: "Snoring respirations.", why: "Snoring shows a partly blocked upper airway from sedation." },
      { text: "SpO2 88% on 2 L/minute oxygen.", why: "Low saturation on oxygen confirms poor ventilation." },
      { text: "Pupils small and equal.", why: "Small pupils fit an opioid effect." },
      { text: "Incision edges well approximated.", why: "A closed incision is expected on day 1." },
      { text: "Abdomen soft.", why: "A soft abdomen is expected and needs no follow-up." },
      { text: "Heart rate 64/minute.", why: "A heart rate of 64/minute is within the normal range." },
      { text: "Temperature 37.0°C (98.6°F).", why: "The temperature is normal." },
    ],
    correct: [0, 1, 2, 3, 4],
  },
  {
    ...meta("rn-s23-37", {
      topic: "New edema in severe COPD",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 72-year-old client with severe COPD has new swelling of both ankles and a firm, enlarged liver. Jugular veins are distended with the head of the bed at 45 degrees. Lung sounds are diminished with no crackles. Which process best explains these new findings?",
      rationale:
        "Chronic hypoxemia in COPD constricts the pulmonary arteries. Pulmonary pressure rises and the right ventricle fails over time. This is cor pulmonale. Blood backs up into the systemic veins, causing jugular distension, an enlarged liver and ankle edema. The absence of crackles argues against left ventricular failure. Low albumin and cirrhosis cause edema without distended neck veins.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Left ventricular failure from coronary disease", why: "Left ventricular failure causes crackles, and the lungs have none." },
      { text: "Right ventricular failure from lung disease", why: "Chronic hypoxemia raises pulmonary pressure until the right ventricle fails." },
      { text: "Low albumin from poor nutrition", why: "Low albumin causes edema but not distended neck veins." },
      { text: "Cirrhosis from alcohol use", why: "Cirrhosis causes edema and ascites but does not distend the neck veins." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s23-38", {
      topic: "Why a failing left ventricle causes crackles",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse explains heart failure to a nursing student. A client has a weak left ventricle after a myocardial infarction. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The left ventricle receives blood from the lungs through the pulmonary veins. When it cannot empty, pressure backs up into the left atrium and pulmonary veins. Fluid leaks into the alveoli, causing crackles and breathlessness. Systemic vein congestion, ankle edema, jugular distension and liver enlargement follow right ventricular failure.",
      sources: [HF, HINKLE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "When the left ventricle fails, pressure rises in the {0}, which causes {1}.",
    blanks: [
      {
        options: [
          { text: "systemic veins", why: "Systemic venous pressure rises when the right ventricle fails." },
          { text: "pulmonary veins", why: "Blood backs up from the left heart into the pulmonary veins." },
          { text: "portal vein", why: "Portal pressure rises with liver disease or right-sided failure." },
          { text: "coronary arteries", why: "Coronary arteries carry blood out of the aorta. They do not fill from the left atrium." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "ankle edema", why: "Ankle edema follows systemic venous congestion from right ventricular failure." },
          { text: "jugular distension", why: "Jugular distension reflects high right-sided pressure." },
          { text: "crackles and dyspnea", why: "Fluid pushed into the alveoli causes crackles and breathlessness." },
          { text: "an enlarged liver", why: "Liver congestion follows right ventricular failure." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s23-39", {
      topic: "Low BP after nitroglycerin in right ventricular infarction",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with an inferior myocardial infarction has ST elevation in the right-sided chest leads. After one sublingual nitroglycerin tablet, BP falls from 112/70 to 78/46 mmHg. Lungs are clear. What should the nurse do first?",
      rationale:
        "ST elevation in right-sided leads with an inferior infarction points to right ventricular involvement. The weak right ventricle depends on preload to fill the left heart. Nitroglycerin lowers preload, so BP fell to 78/46 mmHg. Clear lungs show no fluid overload. An IV saline bolus restores preload. More nitroglycerin, diuretics and morphine lower preload further.",
      sources: [ACS],
    }),
    kind: "mc",
    options: [
      { text: "Give an IV saline bolus as prescribed", why: "Fluid restores the preload that a failing right ventricle depends on." },
      { text: "Give a second sublingual nitroglycerin", why: "Another dose lowers preload further and deepens the hypotension." },
      { text: "Give IV furosemide as prescribed", why: "A diuretic removes volume the right ventricle needs. The lungs are clear." },
      { text: "Give IV morphine for chest pain", why: "Morphine dilates veins and can lower BP further." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s23-40", {
      topic: "Care during a COPD flare",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 69-year-old client with COPD is admitted with an exacerbation. Respiratory rate is 28/minute, SpO2 is 85% on room air and the client is using accessory muscles. PaCO2 is 54 mmHg. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A PaCO2 of 54 mmHg shows the client retains carbon dioxide. Oxygen is titrated to 88% to 92% to treat hypoxemia without worsening hypercapnia. Sitting forward helps the diaphragm work. Pursed-lip breathing slows breathing and reduces air trapping. Bronchodilators open the airways. A nonrebreather gives too much oxygen. Sedatives depress breathing. Lying flat makes breathing harder.",
      refs: ["Target SpO2 for adults at risk of hypercapnic respiratory failure is 88% to 92%."],
      sources: [OXYGEN],
    }),
    kind: "sata",
    options: [
      { text: "Give a sedative for anxiety", why: "Sedatives depress the drive to breathe in a client who already retains carbon dioxide." },
      { text: "Titrate oxygen to SpO2 88% to 92%", why: "This range treats hypoxemia while limiting carbon dioxide retention." },
      { text: "Apply a nonrebreather at 15 L/minute", why: "High-concentration oxygen can worsen hypercapnia in this client." },
      { text: "Sit upright and lean forward", why: "Leaning forward lets the diaphragm and accessory muscles work better." },
      { text: "Lie flat to rest the lungs", why: "Lying flat pushes the abdomen against the diaphragm and makes breathing harder." },
      { text: "Coach pursed-lip breathing", why: "Pursed-lip breathing slows expiration and reduces air trapping." },
      { text: "Give the inhaled bronchodilator", why: "Bronchodilators open narrowed airways." },
    ],
    correct: [1, 3, 5, 6],
  },
];
