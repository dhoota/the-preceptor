// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  price: { id: "price-peds-hf", citation: "Price JF. Congestive heart failure in children. Pediatr Rev. 2019.", url: "https://doi.org/10.1542/pir.2016-0168" },
  ong: { id: "ong-apsgn", citation: "Ong LT. Management and outcomes of acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022.", url: "https://doi.org/10.5527/wjn.v11.i5.139" },
  caep: { id: "caep-ahf", citation: "Stiell IG, Almufleh A, Archambault PM, et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025.", url: "https://doi.org/10.1007/s43678-025-00961-y" },
  ohfrs: { id: "ohfrs-2017", citation: "Stiell IG, Perry JJ, Clement CM, et al. Prospective and explicit clinical validation of the Ottawa Heart Failure Risk Scale, with and without use of quantitative NT-proBNP. Acad Emerg Med. 2017.", url: "https://doi.org/10.1111/acem.13141" },
  ersNiv: { id: "ers-ats-niv", citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.", url: "https://doi.org/10.1183/13993003.02426-2016" },
  bts: { id: "bts-oxygen", citation: "O'Driscoll BR, Howard LS, Earis J, Mak V, British Thoracic Society Emergency Oxygen Guideline Group. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.", url: "https://doi.org/10.1136/thoraxjnl-2016-209729" },
  heartrisk6: { id: "heartrisk6", citation: "Stiell IG, Perry JJ, Eagles D, et al. The HEARTRISK6 Scale. Predicting short-term serious outcomes in emergency department acute heart failure patients. JACC Adv. 2024.", url: "https://doi.org/10.1016/j.jacadv.2024.100988" },
  icos: { id: "icos", citation: "Herrmann J, Lenihan D, Armenian S, et al. Defining cardiovascular toxicities of cancer therapies. An International Cardio-Oncology Society (IC-OS) consensus statement. Eur Heart J. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8803367/" },
} satisfies Record<string, Source>;

export const PULMONARY_EDEMA_S60: Samp[] = [
  /* 39 Infant heart failure labelled as bronchiolitis ------------------------ */
  {
    id: "pulmonary-edema-39",
    topic: "pulmonary-edema",
    title: "Infant who breathes fast during feeds",
    stem:
      "A 4-month-old boy is brought to the emergency department by his parents with 5 days of fast breathing that is worse during feeds. A walk-in clinic diagnosed bronchiolitis 3 days ago. He now takes 60 mL per feed instead of 120 mL and sweats on his forehead while feeding. He has had no fever, cough or runny nose, and no one at home is sick. He was born at term weighing 3.6 kg, and his weight has fallen from the 50th to the 10th percentile. He is pale with subcostal retractions. There are fine crackles at both lung bases and no wheeze. A gallop is heard and there is no murmur. The liver edge is 4 cm below the right costal margin. Femoral pulses are equal to the brachial pulses. His feet are cool with a capillary refill of 3 seconds.",
    vitals: { temperature: "36.9°C rectal", pulse: "176/minute", resp: "68/minute", bp: "84/52 mmHg", o2sat: "93% on room air", weight: "6.1 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly suggests heart failure rather than bronchiolitis in this infant?",
        options: ["Fine crackles at both lung bases", "Liver edge 4 cm below costal margin", "Oxygen saturation of 93%", "Respiratory rate of 68/minute at rest", "Subcostal retractions"],
        correct: 1,
        explanation:
          "Hepatomegaly is one of the commonest signs of congestion in infants with heart failure. Hyperinflated lungs in bronchiolitis can push a normal liver down, but he has no wheeze, and a liver edge 4 cm below the costal margin with a gallop is more than that. The rest of his story points the same way, with no fever or coryza, no sick contacts, sweating with feeds and weight falling across percentiles. Crackles, a fast respiratory rate, retractions and a saturation of 93% are all seen in viral lower respiratory infection as well, so none of them separates the two diagnoses.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "price-peds-hf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate next to support a diagnosis of heart failure in this infant?",
        options: ["Blood culture", "Capillary blood gas", "Chest radiograph", "Nasopharyngeal viral swab", "Urinalysis and culture"],
        correct: 2,
        explanation:
          "A chest radiograph usually shows an enlarged cardiac silhouette in a child with heart failure, which quickly moves the diagnosis away from bronchiolitis. Lung markings may look normal in pediatric heart failure, so a clear lung field does not rule it out, but cardiomegaly is the finding to look for. A viral swab would not exclude heart disease even if positive. A blood gas measures severity rather than cause. Blood and urine cultures look for sepsis, and he has had no fever.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "price-peds-hf",
      },
      {
        id: "q3",
        kind: "single",
        update: "The chest radiograph shows an enlarged cardiac silhouette with increased pulmonary vascular markings. Bedside ultrasound shows a dilated, poorly contracting left ventricle.",
        prompt: "Which of the following is the most appropriate initial treatment for his pulmonary congestion?",
        options: ["IV furosemide", "IV normal saline bolus", "Nebulized epinephrine", "Nebulized hypertonic saline", "Nebulized salbutamol"],
        correct: 0,
        explanation:
          "He has a dilated, poorly contracting ventricle with congestion on the film and in the liver, and loop diuretics such as furosemide are the preferred first-line treatment for congestion in children with heart failure. A saline bolus adds volume to a failing ventricle that is already congested and can worsen his pulmonary edema. Nebulized hypertonic saline, epinephrine and salbutamol are bronchiolitis or bronchospasm treatments that do nothing for fluid in the lungs from a weak heart.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "price-peds-hf",
      },
      {
        id: "q4",
        kind: "single",
        update: "The ECG shows sinus tachycardia with deep, wide Q waves in leads I and aVL.",
        prompt: "Which of the following investigations is most important to identify the cause of his heart failure?",
        options: ["Holter monitoring", "Respiratory viral PCR panel", "Serum troponin level", "Specialist echocardiography", "Sweat chloride test"],
        correct: 3,
        explanation:
          "In a child under 1 year with a new dilated, poorly functioning left ventricle, the origins of the coronary arteries must be shown on echocardiography to rule out an anomalous left coronary artery from the pulmonary artery. Deep Q waves in I and aVL suggest an infarct pattern from that lesion. A troponin may be raised but does not show the cause. Holter monitoring looks for tachycardia-induced cardiomyopathy, and his rhythm is sinus. A viral panel cannot exclude a coronary anomaly, and a sweat chloride test is for cystic fibrosis.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "price-peds-hf",
      },
    ],
    sources: [S.price],
    ...META,
  },

  /* 40 Post-streptococcal glomerulonephritis with pulmonary edema ------------ */
  {
    id: "pulmonary-edema-40",
    topic: "pulmonary-edema",
    title: "Girl with puffy eyes who cannot lie flat",
    stem:
      "An 8-year-old girl is brought to the emergency department by her father with 2 days of puffy eyes and 1 day of cough and breathlessness. Since last night she cannot lie flat. Her urine has looked like cola for 3 days and she has passed little today. She had a sore throat 2 weeks ago that settled without treatment. She has no medical history and takes no medications. She is alert and sitting upright. There is periorbital and pretibial edema. The JVP is raised and there are crackles at both lung bases. There is no rash and no joint swelling.",
    vitals: { temperature: "36.8°C oral", pulse: "118/minute", resp: "36/minute", bp: "148/98 mmHg", o2sat: "90% on room air", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Oxygen by face mask raises her saturation to 94%. Blood and urine tests have been sent.",
        prompt: "Which of the following is the most appropriate medication to give her now for her breathlessness?",
        options: ["IV furosemide", "IV methylprednisolone", "IV normal saline bolus", "Nebulized salbutamol", "Oral penicillin V"],
        correct: 0,
        explanation:
          "Orthopnea, a raised JVP, crackles, edema and high blood pressure point to fluid overload, and she should get a loop diuretic now rather than after the cause is proven. Pulmonary edema in post-streptococcal glomerulonephritis comes from salt and water retention, and diuretics are part of first treatment, with loop diuretics favoured when kidney function is impaired. A saline bolus adds to the overload. Salbutamol treats bronchospasm, which she does not have. Steroids and penicillin do not relieve her congestion and do not alter the course of the nephritis.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ong-apsgn",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most likely to confirm the cause of her pulmonary edema?",
        options: ["Bedside echocardiogram", "Blood cultures, two sets", "Portable chest radiograph", "Throat swab culture", "Urinalysis with microscopy"],
        correct: 4,
        explanation:
          "Cola-coloured urine, falling urine output, edema and hypertension 2 weeks after a sore throat suggest acute post-streptococcal glomerulonephritis, and urinalysis showing blood and red cell casts confirms a glomerular cause for her fluid overload. A chest radiograph would show the edema but not why it happened. An echocardiogram looks for a cardiomyopathy, which her urine findings do not fit. A throat swab taken after the infection has settled is often negative and does not prove kidney involvement. Blood cultures look for sepsis, and she is afebrile.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "ong-apsgn",
      },
      {
        id: "q3",
        kind: "single",
        update: "Urinalysis shows 3+ blood with red cell casts and 2+ protein. Creatinine is 112 umol/L, potassium 5.2 mmol/L and C3 is low. After furosemide she passes 300 mL of urine.",
        prompt: "Which of the following measures best addresses the cause of her fluid overload over the next few days?",
        options: ["Cyclophosphamide IV", "Low-sodium diet and fluid limit", "Penicillin V for 10 days", "Pulse methylprednisolone IV", "Therapeutic plasma exchange"],
        correct: 1,
        explanation:
          "Post-streptococcal glomerulonephritis is self-limiting, and its edema and hypertension come from sodium and water retention, so sodium restriction, fluid restriction and diuretics are the core of care while the kidneys recover. A low C3, found in about 90% of affected children, fits the diagnosis. Antibiotics given now do not change the course of established nephritis. Cyclophosphamide, pulse steroids and plasma exchange are for rapidly progressive or atypical disease after biopsy, not for the typical picture she shows.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "ong-apsgn",
      },
      {
        id: "q4",
        kind: "single",
        update: "Four hours later she is breathing 44/minute and using her neck muscles. Her saturation is 88% on a nonrebreather mask. She is alert, coughing well and protecting her airway.",
        prompt: "Which of the following is the most appropriate respiratory support for her now?",
        options: ["Bag-valve-mask ventilation", "Heliox by face mask", "Noninvasive positive pressure", "Prone positioning", "Rapid sequence intubation"],
        correct: 2,
        explanation:
          "She is tiring and hypoxemic despite high-flow oxygen but is alert and protecting her airway, so noninvasive positive pressure ventilation is the next step while the cause is treated. It supports oxygenation in milder cases, and conventional ventilation is reserved for more severe failure. Rapid sequence intubation is not yet needed and carries more risk. Bag-valve-mask ventilation is for a child who is not breathing adequately. Heliox helps upper airway obstruction, and prone positioning does nothing to remove the fluid in her lungs.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "ong-apsgn",
      },
      {
        id: "q5",
        kind: "single",
        update: "Her breathing improves on noninvasive ventilation, but her urine output falls to 5 mL/hour despite a second furosemide dose. Potassium is now 6.6 mmol/L and creatinine 248 umol/L.",
        prompt: "Which of the following is the most appropriate definitive management for her worsening fluid overload?",
        options: ["Albumin with furosemide", "Continuous furosemide infusion", "Metolazone added orally", "Sodium bicarbonate infusion", "Urgent renal replacement therapy"],
        correct: 4,
        explanation:
          "She is now oliguric despite repeated diuretics, with rising creatinine and hyperkalemia, and dialysis is recommended in post-streptococcal glomerulonephritis when kidney failure causes volume excess and electrolyte problems such as hyperkalemia or acidosis. Her potassium still needs temporizing treatment while dialysis is arranged. More furosemide, by infusion or with albumin, and an added thiazide all depend on kidneys that are no longer responding. Bicarbonate shifts potassium briefly but does not remove fluid.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "ong-apsgn",
      },
    ],
    sources: [S.ong],
    ...META,
  },

  /* 41 Ottawa Heart Failure Risk Scale after a new calcium channel blocker --- */
  {
    id: "pulmonary-edema-41",
    topic: "pulmonary-edema",
    title: "Breathless after a walk-in clinic visit",
    stem:
      "A 78-year-old woman presents to the emergency department with 4 days of increasing shortness of breath and 2 nights of sleeping in a chair. She has heart failure with an ejection fraction of 30% and had a transient ischemic attack 3 years ago. She has never been intubated. She takes sacubitril-valsartan, bisoprolol, spironolactone, dapagliflozin, furosemide 40 mg daily and apixaban for atrial fibrillation. Ten days ago a walk-in clinic added diltiazem 120 mg daily for palpitations. She has crackles at both bases and pitting edema to the knees. The ECG shows atrial fibrillation at 116/minute with no new ischemic changes.",
    vitals: { temperature: "36.7°C oral", pulse: "116/minute irregular", resp: "28/minute", bp: "142/84 mmHg", o2sat: "88% on room air", weight: "71 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following of her medications most likely contributed to this episode of heart failure?",
        options: ["apixaban", "bisoprolol", "dapagliflozin", "diltiazem", "spironolactone"],
        correct: 3,
        explanation:
          "Diltiazem depresses contractility, and calcium channel blockers should be avoided for rate control in atrial fibrillation when the ejection fraction is low. Her decompensation began within days of it being added to a heart with an ejection fraction of 30%, and a recent medication change is a recognized precipitant. Bisoprolol, spironolactone and dapagliflozin are guideline-directed therapy for reduced ejection fraction, which lowers rather than raises the risk of decompensation, and they should be continued. Apixaban prevents stroke in atrial fibrillation and has no effect on contractility or fluid balance.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "caep-ahf",
      },
      {
        id: "q2",
        kind: "single",
        update: "Diltiazem is stopped. After furosemide 80 mg IV and oxygen she diureses 1.6 L over 4 hours and feels better. Urea is 14.2 mmol/L, serum CO2 27 mmol/L, troponin is below the infarction level and NT-proBNP is 4 300 pg/mL. During a 3-minute walk her pulse peaks at 102/minute.",
        prompt: "Which of the following is her total score on the Ottawa Heart Failure Risk Scale?",
        options: ["3 points", "4 points", "5 points", "6 points", "7 points"],
        correct: 2,
        explanation:
          "Her score is 5. The prior transient ischemic attack scores 1, a heart rate over 110/minute on arrival scores 2 (hers was 116/minute), a saturation below 90% on arrival scores 1 (hers was 88%) and a urea of 12 mmol/L or more scores 1. She has never been intubated, her walk test pulse stayed under 110/minute, the ECG shows no new ischemia, CO2 is below 35 mmol/L, troponin is not at the infarction level and NT-proBNP is under 5 000 pg/mL, so none of these adds points. A total of 4 misses the stroke history, and 6 counts the NT-proBNP.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs-2017",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her now?",
        options: ["Discharge after a second walk test", "Discharge with clinic in 7 days", "Discharge with home care nursing", "Hospital admission under medicine", "Observation for 6 hours, then discharge"],
        correct: 3,
        explanation:
          "A score of 5 is far above the threshold of more than 1 point at which the validation study found admission would capture 91.8% of serious adverse events, so she should be admitted. Her arrival tachycardia and hypoxemia, raised urea and prior stroke all add risk, even though she feels better and walked without tachycardia. Home nursing, an early clinic or a repeated walk test do not lower that risk. A few hours of observation would not change her score either, because it is built from arrival and laboratory findings.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs-2017",
      },
    ],
    sources: [S.caep, S.ohfrs],
    ...META,
  },

  /* 42 Pulmonary edema with hypercapnic COPD on home oxygen ------------------ */
  {
    id: "pulmonary-edema-42",
    topic: "pulmonary-edema",
    alsoTopics: ["asthma-copd"],
    title: "Home oxygen user who cannot get comfortable",
    stem:
      "A 74-year-old woman is brought to the emergency department by ambulance with 2 days of worsening shortness of breath. She has severe COPD and uses home oxygen at 2 L/minute, with a usual saturation of 91 to 93%. She also has heart failure with an ejection fraction of 35%. Paramedics gave salbutamol and ipratropium with little change. For 4 nights she has slept upright, and her ankles are more swollen. Her sputum is unchanged in colour. She is drowsy but answers questions. She has scattered expiratory wheeze, crackles at both bases and pitting edema to mid shin. A venous gas shows pH 7.27 and PCO2 71 mmHg. Lung ultrasound shows multiple B-lines in both lungs.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "30/minute", bp: "164/90 mmHg", o2sat: "84% on 2 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most supports pulmonary edema as the main cause of her worsening breathlessness?",
        options: ["Little response to bronchodilators", "Multiple B-lines in both lungs", "PCO2 of 71 mmHg on venous gas", "Scattered expiratory wheeze", "Sputum unchanged in colour"],
        correct: 1,
        explanation:
          "Multiple B-lines in both lungs on point-of-care ultrasound show lung congestion, and with orthopnea and worsening edema they point to heart failure as the main driver. Wheeze occurs in acute heart failure as well as in COPD, so it does not separate them. A PCO2 of 71 mmHg shows hypercapnic failure, which either condition can produce in a patient with severe COPD. A poor response to bronchodilators and unchanged sputum argue against a simple infective exacerbation but do not by themselves show congestion.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "caep-ahf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support to start for her now?",
        options: ["CPAP by face mask", "High-flow nasal oxygen", "Noninvasive bilevel ventilation", "Nonrebreather mask at 15 L/minute", "Rapid sequence intubation"],
        correct: 2,
        explanation:
          "She has cardiogenic pulmonary edema and acute hypercapnic acidosis with a pH of 7.27, and bilevel noninvasive ventilation is recommended for COPD with acute respiratory acidosis at a pH of 7.35 or less. Bilevel ventilation is also recommended for cardiogenic pulmonary edema, so it treats both problems. CPAP helps the edema but gives no inspiratory support for her hypercapnia. High-flow oxygen and a nonrebreather mask do not support ventilation. She is drowsy but answering questions, so a trial of noninvasive ventilation with close watching comes before intubation.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ers-ats-niv",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following oxygen saturation targets is most appropriate while she is treated?",
        options: ["88 to 92%", "90 to 95%", "92 to 96%", "94 to 98%", "96 to 100%"],
        correct: 0,
        explanation:
          "She is hypercapnic with severe COPD, and the target for patients at risk of hypercapnic respiratory failure is 88 to 92%. Aiming higher, at 92 to 96% or above, risks more carbon dioxide retention and a worsening acidosis. A target of 90 to 95% also lets her saturation climb above 92%. The general heart failure advice to keep saturation above 90% does not account for her chronic hypercapnia. Titrating to 88 to 92% corrects her hypoxemia while the bilevel ventilation and diuresis treat the cause.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "bts-oxygen",
      },
      {
        id: "q4",
        kind: "single",
        update: "By the next morning she is off bilevel ventilation and back on 2 L/minute. Her pH is 7.38 and her ankles are less swollen. She wants to go home, and the team plans a 3-minute walk test.",
        prompt: "Which of the following is the most appropriate way to perform her walk test before discharge?",
        options: ["At a brisk pace on room air", "Own pace on room air", "Seated arm exercise on room air", "Treadmill test on 4 L/minute", "Usual pace on her home oxygen"],
        correct: 4,
        explanation:
          "The emergency department walk test asks the patient to walk at her own pace for 3 minutes, whatever the distance, on room air or her usual oxygen. She lives on 2 L/minute, so testing her on it shows how she will manage at home. The test fails if her saturation drops below 90%, her pulse rises above 110/minute, her respiratory rate rises above 28/minute, or she cannot finish. Testing her on room air measures a state she never lives in. A brisk pace, a treadmill or seated arm exercise is not the validated test.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "heartrisk6",
      },
    ],
    sources: [S.caep, S.ersNiv, S.bts, S.heartrisk6],
    ...META,
  },

  /* 43 Exertional dyspnea years after cancer therapy ------------------------ */
  {
    id: "pulmonary-edema-43",
    topic: "pulmonary-edema",
    title: "Walks the dog more slowly than before",
    stem:
      "A 61-year-old woman presents to the emergency department with 6 weeks of breathlessness when walking uphill with her dog. For 1 week she has also been short of breath climbing one flight of stairs and has woken twice at night coughing. A walk-in clinic prescribed an inhaler for a post-viral cough, and it has not helped. She completed doxorubicin and trastuzumab for breast cancer 3 years ago. She has no other history and has never smoked. She is comfortable at rest. There are a few fine crackles at both bases and trace ankle edema, with no wheeze. A chest radiograph taken at the clinic was reported as normal.",
    vitals: { temperature: "36.6°C oral", pulse: "86/minute", resp: "18/minute", bp: "128/76 mmHg", o2sat: "96% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next test to evaluate her for heart failure in the emergency department?",
        options: ["Exercise stress ECG", "NT-proBNP level", "Repeat chest radiograph", "Serum D-dimer level", "Spirometry with bronchodilator"],
        correct: 1,
        explanation:
          "Progressive exertional dyspnea, night cough, basal crackles and new ankle edema in a survivor of cardiotoxic chemotherapy suggest heart failure despite a normal film, and NT-proBNP is strongly recommended in the emergency department assessment of possible acute heart failure. A level below 300 pg/mL makes it unlikely. Repeating the radiograph adds little to one taken recently. Spirometry tests for the airway disease she has already been treated for without benefit. A D-dimer answers a different question, and a stress ECG looks for ischemia rather than ventricular failure.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "caep-ahf",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her NT-proBNP is 1 250 pg/mL.",
        prompt: "Which of the following best describes this NT-proBNP result for a patient of her age?",
        options: ["Heart failure ruled out", "In the grey zone for her age", "Raised by her age alone", "Unreliable after past chemotherapy", "Within the likely range for her age"],
        correct: 4,
        explanation:
          "For patients aged 50 to 75 years, an NT-proBNP above 900 pg/mL makes acute heart failure likely, and her 1 250 pg/mL is above that line at age 61. The grey zone at her age runs from 300 to 900 pg/mL, and only a level under 300 pg/mL makes heart failure unlikely. Age raises NT-proBNP, which is why the cut-off for her age group is set higher than for younger adults, but she is above it. Past chemotherapy does not make the test unreliable, and cardiotoxicity is a reason to take it seriously.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "caep-ahf",
      },
      {
        id: "q3",
        kind: "single",
        update: "Bedside ultrasound shows a mildly dilated left ventricle with an estimated ejection fraction of 35%, a few B-lines at both bases and no pericardial effusion. The ECG shows sinus rhythm with no Q waves.",
        prompt: "Which of the following is the most likely cause of her heart failure?",
        options: ["Constrictive pericarditis", "Hypertensive heart disease", "Ischemic cardiomyopathy", "Late chemotherapy cardiotoxicity", "Thyrotoxic heart disease"],
        correct: 3,
        explanation:
          "Doxorubicin and trastuzumab both cause cancer therapy-related cardiac dysfunction, defined by a fall in left ventricular ejection fraction, and this dysfunction may first be found during survivorship, as in her case 3 years after treatment. She has a newly reduced ejection fraction of 35%, has never smoked, is normotensive and has no Q waves, so ischemic and hypertensive heart disease are less likely. Constrictive pericarditis does not reduce the ejection fraction. Nothing in her history or examination suggests thyrotoxicosis.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "icos",
      },
      {
        id: "q4",
        kind: "menu",
        update: "She walks for 3 minutes at her own pace with a saturation of 95% and a pulse of 98/minute. Troponin is normal twice. After discussion with cardiology she will be discharged, and her husband will stay with her.",
        prompt: "Which of the following are the most appropriate parts of her discharge plan from the emergency department?",
        options: ["Bed rest until clinic review", "Clinician follow-up within 7 days", "Creatinine and potassium in 7 days", "Fluid intake of at least 3 L daily", "furosemide 20 mg PO daily", "metolazone 5 mg PO daily", "Repeat NT-proBNP in 24 hours", "Stop her inhaler and all exercise"],
        select: 3,
        correct: [1, 2, 4],
        explanation:
          "A typical starting diuretic for a patient sent home with volume overload is furosemide 20 mg once or twice daily, with creatinine and electrolytes checked within 7 days. She should be seen within 7 days by her family physician, an internist, a cardiologist or a heart failure clinic, with written instructions and advice to return if she worsens. Metolazone is for diuretic resistance, not a first prescription. A daily intake of at least 3 L works against diuresis. A repeat NT-proBNP the next day does not change her plan, and bed rest or stopping all activity is not advised.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "caep-ahf",
      },
    ],
    sources: [S.caep, S.icos],
    ...META,
  },
];
