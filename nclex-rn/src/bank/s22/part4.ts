import type { Item } from "@/engine/types";
import { BRONCH, GIBLEED, HINKLE, HTN, REFEED, STROKE, WONG, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s22-31", {
      topic: "Sudden one-sided weakness in the emergency department",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 71-year-old client with atrial fibrillation arrives at the emergency department 35 minutes after sudden right-sided weakness and slurred speech began. BP is 204/112 mmHg. Blood glucose is 118 mg/dL (6.5 mmol/L). The client coughs when sipping water. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Sudden one-sided weakness and slurred speech in a client with atrial fibrillation point to an acute stroke. A glucose of 118 mg/dL rules out low glucose as a mimic. An urgent head CT separates clot from bleed before any clot-dissolving drug. Coughing on water shows unsafe swallowing, so the client stays NPO until a formal screen is passed. BP must be below 185/110 mmHg before thrombolysis. Serial stroke scale checks show improvement or decline.",
      refs: ["Before IV thrombolysis BP is lowered below 185/110 mmHg."],
      sources: [STROKE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Hypoglycemia", why: "A glucose of 118 mg/dL rules out low glucose as the cause." },
      { text: "Acute stroke", why: "Sudden one-sided weakness and speech loss in atrial fibrillation fit a stroke." },
      { text: "Bell palsy", why: "Bell palsy weakens one side of the face only. It does not cause arm weakness." },
      { text: "Hyperosmolar state", why: "A glucose of 118 mg/dL is far too low for a hyperosmolar state." },
    ],
    actions: [
      { text: "Give oral aspirin right away", why: "Aspirin waits until bleeding is excluded, and the client cannot swallow safely." },
      { text: "Keep NPO until a swallow screen is passed", why: "Coughing on water shows aspiration risk, so nothing is given by mouth." },
      { text: "Lower BP to 120/80 mmHg within the hour", why: "A fast drop to 120/80 mmHg can reduce blood flow to the threatened brain." },
      { text: "Prepare for an urgent head CT scan", why: "Imaging separates clot from bleed and decides whether thrombolysis is safe." },
      { text: "Give the clot-dissolving drug before imaging", why: "Thrombolysis before imaging could worsen a brain bleed." },
    ],
    parameters: [
      { text: "Serum lipase level", why: "Lipase tracks pancreatic injury and does not guide stroke care." },
      { text: "Blood pressure", why: "BP must be below 185/110 mmHg before thrombolysis and is watched closely after." },
      { text: "Urine specific gravity", why: "Specific gravity does not guide early stroke treatment." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide acute care." },
      { text: "Serial stroke scale scores", why: "Repeated stroke scale scores show whether deficits improve or worsen." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 4] },
  },
  {
    ...meta("rn-s22-32", {
      topic: "Signs that ulcer bleeding has stopped",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with a bleeding duodenal ulcer had endoscopic treatment and received 2 units of packed red blood cells. On admission the heart rate was 124/minute and BP was 86/50 mmHg. Which finding 6 hours later best shows that bleeding has stopped?",
      rationale:
        "A heart rate that falls from 124 to 88/minute with a BP that rises from 86/50 to 118/72 mmHg shows the circulating volume is holding after treatment. A falling hemoglobin after a transfusion, fresh red vomit and low urine output all point to ongoing bleeding.",
      sources: [GIBLEED, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Hemoglobin 7.2 g/dL (72 g/L), down from 8.1 g/dL (81 g/L)", why: "A falling hemoglobin after a transfusion suggests ongoing blood loss." },
      { text: "New vomiting of bright red blood", why: "Fresh red vomit shows active bleeding in the upper tract." },
      { text: "Urine output of 15 mL in the last hour", why: "Low urine output suggests the kidneys are still poorly perfused." },
      { text: "Heart rate 88/minute and BP 118/72 mmHg", why: "A slower pulse and higher BP show the volume is holding." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s22-33", {
      topic: "Findings with excess antidiuretic hormone",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with small cell lung cancer has a new headache and confusion. Which findings would be consistent with the syndrome of inappropriate antidiuretic hormone? Select all that apply.",
      rationale:
        "Small cell lung cancer can make antidiuretic hormone. The kidneys hold water, so the blood is diluted. Sodium and serum osmolality fall. The urine is concentrated with a high specific gravity. Weight rises without edema because the extra water spreads through all body compartments. Large urine volumes and dry membranes fit water loss, not water retention.",
      refs: ["Normal serum sodium is 135 to 145 mEq/L (135 to 145 mmol/L).", "Normal serum osmolality is 275 to 295 mOsm/kg."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report serum osmolality in mmol/kg, so the result reads 262 mmol/kg. The Medical Council of Canada lists the range as 275 to 295 mmol/kg.",
    }),
    kind: "sata",
    options: [
      { text: "Serum sodium 124 mEq/L (124 mmol/L)", why: "Retained water dilutes the sodium below 135 mEq/L." },
      { text: "Urine output of 2400 mL in 8 hours", why: "Large urine volumes fit diabetes insipidus, not retained water." },
      { text: "Serum osmolality 262 mOsm/kg", why: "Diluted blood lowers osmolality below 275 mOsm/kg." },
      { text: "Weight up 2 kg without edema", why: "Retained water raises weight but spreads evenly, so edema is absent." },
      { text: "Urine specific gravity 1.028", why: "The kidneys keep making concentrated urine despite low blood osmolality." },
      { text: "Dry mucous membranes and thirst", why: "Dry membranes and thirst fit water loss, not water excess." },
    ],
    correct: [0, 2, 3, 4],
  },
  {
    ...meta("rn-s22-34", {
      topic: "Safe first-hour target in hypertensive emergency",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 5,
      stem: "A client has a hypertensive emergency with headache, blurred vision and new kidney injury. There is no aortic dissection, stroke or pregnancy. The mean arterial pressure is 160 mmHg. The prescription is to lower the pressure by no more than 25% in the first hour. What is the lowest mean arterial pressure the nurse should allow at the end of the first hour?",
      rationale:
        "The brain and kidneys have adapted to high pressure. A fall that is too fast can cause ischemia. A 25% fall from 160 mmHg is 40 mmHg. The lowest safe mean arterial pressure at the end of the first hour is therefore 120 mmHg. Further lowering happens over the next hours if the client is stable.",
      calc: { expr: "160 - 160 * 25 / 100", answer: 120, unit: "mmHg", round: 0, steps: ["160 * 25 / 100 = 40", "160 - 40 = 120"] },
      sources: [HTN],
    }),
    kind: "mc",
    options: [
      { text: "100 mmHg", why: "A drop to 100 mmHg is far more than 25% and risks brain and kidney ischemia." },
      { text: "120 mmHg", why: "A 25% fall from 160 mmHg is 40 mmHg, which gives 120 mmHg." },
      { text: "135 mmHg", why: "This subtracts 25 mmHg instead of 25%. It stops short of the allowed floor." },
      { text: "150 mmHg", why: "150 mmHg is within the limit, but it is not the lowest pressure allowed." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s22-35", {
      topic: "New bleeding during sepsis",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse reviews the note on a client being treated for sepsis from pneumonia. Click to highlight the findings that suggest a new bleeding disorder.",
      rationale:
        "Sepsis can trigger disseminated intravascular coagulation. Widespread clotting uses up platelets and clotting factors, so bleeding follows. Oozing from an IV site, petechiae, pink urine and a platelet count of 42 000/mm3 fit this process. An alert client, warm skin and active bowel sounds are not signs of a bleeding disorder.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report platelets as x 10^9/L, so this count reads 42 x 10^9/L. The Medical Council of Canada lists the range as 130 to 380 x 10^9/L.",
    }),
    kind: "highlight",
    passage:
      "[[Blood oozing from the IV site]]. [[Petechiae on both forearms]]. [[Pink-tinged urine in the catheter bag]]. [[Platelets 42 000/mm3]]. [[Alert and answering questions]]. [[Skin warm and dry]]. [[Bowel sounds present in all quadrants]].",
    spans: [
      { text: "Blood oozing from the IV site", why: "Oozing from puncture sites shows clotting factors are being used up." },
      { text: "Petechiae on both forearms", why: "Petechiae reflect a low platelet count and bleeding into the skin." },
      { text: "Pink-tinged urine in the catheter bag", why: "Blood in the urine is another sign of widespread bleeding." },
      { text: "Platelets 42 000/mm3", why: "A platelet count this low shows platelets are being consumed." },
      { text: "Alert and answering questions", why: "A clear mind does not suggest a bleeding disorder." },
      { text: "Skin warm and dry", why: "Warm, dry skin is not a sign of bleeding." },
      { text: "Bowel sounds present in all quadrants", why: "Active bowel sounds are expected and unrelated to bleeding." },
    ],
    correct: [0, 1, 2, 3],
  },
  {
    ...meta("rn-s22-36", {
      topic: "Cyanotic spell in a toddler with a heart defect",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 14-month-old with unrepaired tetralogy of Fallot cries hard during a blood draw. The child becomes deeply cyanotic and breathes fast. SpO2 falls from 82% to 64%. What should the nurse do first?",
      rationale:
        "Crying lowers pulmonary blood flow in tetralogy of Fallot and shunts more unoxygenated blood to the body. This is a hypercyanotic spell. The knee-chest position raises systemic resistance, which pushes more blood through the lungs. Lying flat does not help. Continuing the draw keeps the child crying. Oral fluids are unsafe in a child breathing fast.",
      sources: [WONG],
    }),
    kind: "mc",
    options: [
      { text: "Place the child in a knee-chest position", why: "Knee-chest raises systemic resistance and sends more blood to the lungs." },
      { text: "Lay the child supine and flat", why: "Lying flat does not change the shunt and does not calm the child." },
      { text: "Finish the blood draw quickly", why: "Continuing the draw keeps the child crying and prolongs the spell." },
      { text: "Give oral fluids to calm the child", why: "A child breathing fast and cyanotic can aspirate oral fluids." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s22-37", {
      topic: "Care of an infant with bronchiolitis",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 5-month-old is admitted with respiratory syncytial virus bronchiolitis. The infant has thick nasal secretions, respirations of 58/minute with mild retractions and poor feeding. SpO2 is 93% on room air. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Infants breathe mainly through the nose, so clearing secretions before feeds helps them breathe and eat. Poor feeding puts the infant at risk of dehydration, so intake and wet diapers are tracked. The virus spreads by contact, so contact precautions are used. Work of breathing is watched for signs of fatigue. Albuterol and chest physiotherapy are not advised in bronchiolitis. Cough syrups are not given to infants.",
      sources: [BRONCH, WONG, { body: "Friedman JN, Rieder MJ, Walton JM. Canadian Paediatric Society Acute Care Committee and Drug Therapy and Hazardous Substances Committee", work: "Bronchiolitis: Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Updated 2021", year: 2014, url: "https://cps.ca/en/documents/position/bronchiolitis" }],
      canada: "Albuterol is called salbutamol in Canada. The Canadian Paediatric Society also advises against salbutamol in clear bronchiolitis and gives oxygen when SpO2 falls below 90%.",
    }),
    kind: "sata",
    options: [
      { text: "Suction the nose before feedings", why: "Clearing the nose helps an infant breathe while feeding." },
      { text: "Give nebulized albuterol every 4 hours", why: "Albuterol is not advised in bronchiolitis because it does not improve outcomes." },
      { text: "Perform chest physiotherapy", why: "Chest physiotherapy is not advised in bronchiolitis." },
      { text: "Track intake and wet diapers", why: "Poor feeding can lead to dehydration, so intake and output are tracked." },
      { text: "Use contact precautions", why: "The virus spreads by hands and surfaces, so contact precautions apply." },
      { text: "Give an over-the-counter cough syrup", why: "Cough and cold products are unsafe for infants." },
      { text: "Assess work of breathing often", why: "Frequent checks catch rising effort or fatigue early." },
    ],
    correct: [0, 3, 4, 6],
  },
  {
    ...meta("rn-s22-38", {
      topic: "Laboratory trend in recovering kidney injury",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A client with acute kidney injury after contrast dye is recovering. The nurse reviews the laboratory results from day 1 to day 5. For each finding, specify whether it has improved, worsened or not changed.",
      tabs: [
        {
          title: "Laboratory Results",
          table: {
            head: ["Test", "Day 1", "Day 3", "Day 5"],
            rows: [
              ["Creatinine", "3.8 mg/dL (336 micromol/L)", "2.9 mg/dL (256 micromol/L)", "1.9 mg/dL (168 micromol/L)"],
              ["Potassium (mEq/L)", "5.9", "5.1", "4.4"],
              ["Urine output (mL per 24 hours)", "380", "1600", "2900"],
              ["Sodium (mEq/L)", "138", "136", "131"],
              ["Weight (kg)", "78", "78", "78"],
            ],
          },
        },
      ],
      rationale:
        "Creatinine falls from 3.8 to 1.9 mg/dL, which shows filtration is returning. Potassium falls from 5.9 to 4.4 mEq/L as the kidneys excrete it again. Urine output rises from 380 to 2900 mL per day as the client enters the diuretic phase. That large output washes out sodium, which drops from 138 to 131 mEq/L. Weight stays at 78 kg.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report potassium and sodium in mmol/L, with the same numbers as mEq/L. Creatinine is reported in micromol/L only, so it falls from 336 to 168 micromol/L.",
    }),
    kind: "matrix",
    mode: "single",
    columns: ["Improved", "Worsened", "No change"],
    rows: [
      { text: "Serum creatinine", correct: [0], why: "Creatinine fell from 3.8 to 1.9 mg/dL, so filtration is improving." },
      { text: "Serum potassium", correct: [0], why: "Potassium fell from 5.9 to 4.4 mEq/L, back into the normal range." },
      { text: "Urine output", correct: [0], why: "Output rose from 380 to 2900 mL per day as the kidneys recover." },
      { text: "Serum sodium", correct: [1], why: "Sodium fell from 138 to 131 mEq/L with the large diuresis." },
      { text: "Body weight", correct: [2], why: "Weight stayed at 78 kg on all three days." },
    ],
  },
  {
    ...meta("rn-s22-39", {
      topic: "Laboratory value to report before dialysis",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client with end-stage kidney disease on hemodialysis three times a week arrives for a session after a long weekend. Which laboratory result should the nurse report first?",
      rationale:
        "A potassium of 6.8 mEq/L can cause fatal dysrhythmias and needs urgent action. A high creatinine is expected in end-stage kidney disease. A hemoglobin of 10.2 g/dL is common with kidney-related anemia. A phosphorus of 5.9 mg/dL is a chronic problem managed with binders and diet.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Creatinine 8.2 mg/dL (725 micromol/L)", why: "A high creatinine is expected in end-stage kidney disease between sessions." },
      { text: "Hemoglobin 10.2 g/dL (102 g/L)", why: "Mild anemia is common in kidney disease and is not an emergency." },
      { text: "Phosphorus 5.9 mg/dL (1.91 mmol/L)", why: "High phosphorus is a chronic problem managed with binders and diet." },
      { text: "Potassium 6.8 mEq/L (6.8 mmol/L)", why: "A potassium of 6.8 mEq/L can trigger fatal dysrhythmias." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s22-40", {
      topic: "Laboratory signs after restarting nutrition",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client with severe malnutrition from alcohol use disorder started tube feeding 2 days ago. The client now has muscle weakness and new ankle edema. Which laboratory findings are consistent with refeeding syndrome? Select all that apply.",
      rationale:
        "Feeding after starvation raises insulin. Insulin drives phosphorus, potassium and magnesium into cells, so their blood levels fall. Low phosphorus limits energy for muscles, which explains the weakness. Sodium and water retention cause edema. Refeeding tends to raise glucose, not lower it. High sodium and high calcium are not features of refeeding.",
      sources: [REFEED],
    }),
    kind: "sata",
    options: [
      { text: "Sodium 152 mEq/L (152 mmol/L)", why: "Refeeding causes sodium and water retention, not a high sodium level." },
      { text: "Calcium 11.8 mg/dL (2.94 mmol/L)", why: "High calcium is not a feature of refeeding syndrome." },
      { text: "Phosphorus 1.4 mg/dL (0.45 mmol/L)", why: "Low phosphorus is the hallmark of refeeding syndrome." },
      { text: "Glucose 48 mg/dL (2.7 mmol/L)", why: "Carbohydrate feeding tends to raise glucose, not lower it." },
      { text: "Potassium 2.9 mEq/L (2.9 mmol/L)", why: "Insulin moves potassium into cells and lowers the blood level." },
      { text: "Magnesium 1.1 mg/dL (0.45 mmol/L)", why: "Magnesium shifts into cells with refeeding and the level falls." },
    ],
    correct: [2, 4, 5],
  },
];
