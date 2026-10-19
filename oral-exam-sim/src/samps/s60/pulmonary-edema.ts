// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  price: { id: "price-peds-hf", citation: "Price JF. Congestive heart failure in children. Pediatr Rev. 2019.", url: "https://doi.org/10.1542/pir.2016-0168" },
  ong: { id: "ong-apsgn", citation: "Ong LT. Management and outcomes of acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022.", url: "https://doi.org/10.5527/wjn.v11.i5.139" },
  abugrain: { id: "abugrain-apsgn", citation: "Abugrain K, McCulloch MI, Muloiwa R, Luyckx VA, Buys H. A 6-year review of acute post-streptococcal glomerulonephritis at a public children's hospital in Cape Town, South Africa. Pediatr Nephrol. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11026274/" },
  caep: { id: "caep-ahf", citation: "Stiell IG, Almufleh A, Archambault PM, et al. CAEP Acute Heart Failure Best Practices Checklist. CJEM. 2025.", url: "https://doi.org/10.1007/s43678-025-00961-y" },
  ohfrs: { id: "ohfrs-2017", citation: "Stiell IG, Perry JJ, Clement CM, et al. Prospective and explicit clinical validation of the Ottawa Heart Failure Risk Scale, with and without use of quantitative NT-proBNP. Acad Emerg Med. 2017.", url: "https://doi.org/10.1111/acem.13141" },
  escAmyloid: { id: "esc-amyloid", citation: "Garcia-Pavia P, Rapezzi C, Adler Y, et al. Diagnosis and treatment of cardiac amyloidosis. A position statement of the ESC Working Group on Myocardial and Pericardial Diseases. Eur Heart J. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8060056/" },
  ersNiv: { id: "ers-ats-niv", citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.", url: "https://doi.org/10.1183/13993003.02426-2016" },
  cochraneBb: { id: "cochrane-bb-copd", citation: "Salpeter S, Ormiston T, Salpeter E. Cardioselective beta-blockers for chronic obstructive pulmonary disease. Cochrane Database Syst Rev. 2005.", url: "https://doi.org/10.1002/14651858.CD003566.pub2" },
  heartrisk6: { id: "heartrisk6", citation: "Stiell IG, Perry JJ, Eagles D, et al. The HEARTRISK6 Scale. Predicting short-term serious outcomes in emergency department acute heart failure patients. JACC Adv. 2024.", url: "https://doi.org/10.1016/j.jacadv.2024.100988" },
  asco: { id: "asco-survivors", citation: "Armenian SH, Lacchetti C, Barac A, et al. Prevention and monitoring of cardiac dysfunction in survivors of adult cancers. American Society of Clinical Oncology clinical practice guideline. J Clin Oncol. 2017.", url: "https://doi.org/10.1200/JCO.2016.70.5400" },
  icos: { id: "icos", citation: "Herrmann J, Lenihan D, Armenian S, et al. Defining cardiovascular toxicities of cancer therapies. An International Cardio-Oncology Society (IC-OS) consensus statement. Eur Heart J. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8803367/" },
  cmajPleural: { id: "cmaj-pleural", citation: "Beaudoin S, Gonzalez AV. Evaluation of the patient with pleural effusion. CMAJ. 2018.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5849448/" },
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

  /* 40 Post-streptococcal glomerulonephritis after impetigo ------------------ */
  {
    id: "pulmonary-edema-40",
    topic: "pulmonary-edema",
    title: "Boy who sleeps sitting up",
    stem:
      "A 6-year-old boy is brought to the emergency department by his mother with 2 days of cough and fast breathing. Since last night he has slept sitting up. This morning his face looked puffy, and his urine has been dark brown for 2 days. Three weeks ago he had crusted sores on both legs that his family physician treated with fusidic acid cream, and they have healed. He has no medical history and takes no medications. He is alert and sitting upright, with subcostal retractions. There is facial and pretibial edema. The JVP is raised and there are crackles at both lung bases. There is no rash, joint swelling or murmur.",
    vitals: { temperature: "36.9°C oral", pulse: "124/minute", resp: "40/minute", bp: "146/96 mmHg", o2sat: "89% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Oxygen by face mask raises his saturation to 93%. Blood and urine tests have been sent.",
        prompt: "Which of the following is the most appropriate medication to give him now for his breathlessness?",
        options: ["IV furosemide", "IV methylprednisolone", "IV normal saline bolus", "Nebulized salbutamol", "Oral penicillin V"],
        correct: 0,
        explanation:
          "Orthopnea, a raised JVP, crackles, edema and high blood pressure point to fluid overload, and he should get a loop diuretic now rather than after the cause is proven. Pulmonary edema in post-streptococcal glomerulonephritis comes from salt and water retention, and diuretics are part of first treatment, with loop diuretics favoured when kidney function is impaired. A saline bolus adds to the overload. Salbutamol treats bronchospasm, which he does not have. Steroids and penicillin do not relieve his congestion and do not alter the course of the nephritis.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ong-apsgn",
      },
      {
        id: "q2",
        kind: "single",
        update: "Urinalysis shows 3+ blood with red cell casts and 2+ protein. Creatinine is 104 umol/L and potassium 5.2 mmol/L.",
        prompt: "Which of the following blood tests is most likely to show a recent streptococcal infection in him?",
        options: ["Anti-DNase B titre", "Antistreptolysin O titre", "Blood culture", "C-reactive protein", "Wound swab culture"],
        correct: 0,
        explanation:
          "His nephritis followed a skin infection, and anti-DNase B is the antibody most often raised after streptococcal skin infection, while antistreptolysin O is the one most often raised after throat infection. In one series of children with this illness, about two thirds of whom had a preceding skin infection, anti-DNase B was raised in every child tested and antistreptolysin O in 85%, so a normal antistreptolysin O does not exclude a streptococcal trigger. A swab of sores that have healed is unlikely to grow the organism. Blood cultures look for bacteremia, which an afebrile child with nephritis is not expected to have. C-reactive protein shows inflammation, not its cause.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "abugrain-apsgn",
      },
      {
        id: "q3",
        kind: "single",
        update: "C3 is low. Over the next 2 hours he passes 280 mL of urine.",
        prompt: "Which of the following measures best addresses the cause of his fluid overload over the next few days?",
        options: ["Cyclophosphamide IV", "Low-sodium diet and fluid limit", "Penicillin V for 10 days", "Pulse methylprednisolone IV", "Therapeutic plasma exchange"],
        correct: 1,
        explanation:
          "Post-streptococcal glomerulonephritis is self-limiting, and its edema and hypertension come from sodium and water retention, so sodium restriction, fluid restriction and diuretics are the core of care while the kidneys recover. Antibiotics given now do not change the course of established nephritis. Cyclophosphamide, pulse steroids and plasma exchange are for rapidly progressive or atypical disease after biopsy, not for the typical picture he shows.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "ong-apsgn",
      },
      {
        id: "q4",
        kind: "single",
        update: "Two hours later he is alert but still breathes 38/minute on a face mask, with crackles to the mid zones. His BP has risen to 156/106 mmHg and potassium is 5.4 mmol/L.",
        prompt: "Which of the following is the most appropriate medication to lower his blood pressure now?",
        options: ["captopril PO", "enalaprilat IV", "eplerenone PO", "losartan PO", "nifedipine PO"],
        correct: 4,
        explanation:
          "His pulmonary edema is not settling and his blood pressure has risen to 156/106 mmHg, so treatment should be escalated with a vasodilator. Short-acting nifedipine is safe in children with severe hypertension who need a rapid fall in blood pressure, and a calcium channel blocker added to a diuretic is a recognized combination for the volume-driven hypertension of post-streptococcal glomerulonephritis. Captopril, enalaprilat and losartan are usually avoided in the acute phase because they can further reduce glomerular filtration and worsen hyperkalemia, and his potassium is already 5.4 mmol/L. Eplerenone also raises potassium and does not lower blood pressure quickly.",
        keyFeature: { topic: "pulmonary-edema", n: 4 },
        source: "ong-apsgn",
      },
      {
        id: "q5",
        kind: "single",
        update: "He is started on bilevel ventilation and his breathing settles, but his urine output drops to 5 mL/hour despite a second diuretic dose. Potassium is now 6.6 mmol/L and creatinine 236 umol/L.",
        prompt: "Which of the following is the most appropriate definitive management for his worsening fluid overload?",
        options: ["Albumin with furosemide", "Continuous furosemide infusion", "Metolazone added orally", "Sodium bicarbonate infusion", "Urgent renal replacement therapy"],
        correct: 4,
        explanation:
          "He is now oliguric despite repeated diuretics, with rising creatinine and hyperkalemia, and dialysis is recommended in post-streptococcal glomerulonephritis when kidney failure causes volume excess and electrolyte problems such as hyperkalemia or acidosis. His potassium still needs temporizing treatment while dialysis is arranged. More furosemide, by infusion or with albumin, and an added thiazide all depend on kidneys that are no longer responding. Bicarbonate shifts potassium briefly but does not remove fluid.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "ong-apsgn",
      },
    ],
    sources: [S.ong, S.abugrain],
    ...META,
  },

  /* 41 Cardiac amyloidosis and the Ottawa Heart Failure Risk Scale ----------- */
  {
    id: "pulmonary-edema-41",
    topic: "pulmonary-edema",
    title: "Nights in the recliner",
    stem:
      "A 79-year-old man presents to the emergency department with 5 days of increasing shortness of breath and 3 nights of sleeping in a recliner. Heart failure was diagnosed a year ago. He takes furosemide 40 mg daily and apixaban for atrial fibrillation. He had a transient ischemic attack 4 years ago and has never been intubated. He has had carpal tunnel surgery on both wrists and has lumbar spinal stenosis. He has never had high blood pressure. There are crackles at both bases and pitting edema to the knees. The ECG shows atrial fibrillation at 118/minute with low QRS voltage in the limb leads and no new ischemic changes.",
    vitals: { temperature: "36.6°C oral", pulse: "118/minute irregular", resp: "26/minute", bp: "112/70 mmHg", o2sat: "87% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Bedside ultrasound shows a non-dilated left ventricle with walls 17 mm thick and an ejection fraction of about 45%. Both atria are enlarged and the aortic valve opens normally.",
        prompt: "Which of the following is the most likely underlying cause of his heart failure?",
        options: ["Aortic stenosis", "Constrictive pericarditis", "Hypertensive heart disease", "Hypertrophic cardiomyopathy", "Transthyretin amyloidosis"],
        correct: 4,
        explanation:
          "Thick ventricular walls with low QRS voltage on the ECG are a mismatch that points to an infiltrative cause, and bilateral carpal tunnel syndrome and lumbar spinal stenosis are recognized red flags for transthyretin cardiac amyloidosis in an older man. Light-chain amyloidosis still has to be excluded with blood and urine tests for a monoclonal protein. Hypertensive heart disease is unlikely in a man who has never had high blood pressure, and thick walls from hypertension or hypertrophic cardiomyopathy usually come with normal or high QRS voltage, not low. The aortic valve opens normally, so aortic stenosis does not explain the thick walls. Constrictive pericarditis limits filling but does not thicken the ventricular wall.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "esc-amyloid",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following tests are most appropriate to confirm the underlying cause of his heart failure?",
        options: ["Bone scintigraphy", "Coronary angiography", "Holter monitoring", "Serum ACE level", "Serum ferritin", "Serum free light chain assay", "Thyroid function tests"],
        select: 2,
        correct: [0, 5],
        explanation:
          "When cardiac amyloidosis is suspected, bone scintigraphy is paired with tests for a monoclonal protein. Grade 2 or 3 cardiac uptake on scintigraphy, with typical imaging and no monoclonal protein, allows transthyretin amyloidosis to be diagnosed without a biopsy. A clonal plasma cell disorder, which would point to light-chain amyloidosis, is excluded only when the serum free light chain assay and serum and urine immunofixation are all normal. A serum ACE level is a nonspecific marker of sarcoidosis, another infiltrative disease, and it can neither confirm nor exclude amyloidosis. Coronary angiography, Holter monitoring, ferritin and thyroid tests look for causes his findings do not suggest.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "esc-amyloid",
      },
      {
        id: "q3",
        kind: "single",
        update: "After furosemide 80 mg IV he passes 1.4 L of urine. Urea is 13.6 mmol/L, serum CO2 29 mmol/L, troponin is below the infarction level and NT-proBNP is 4 300 pg/mL. On a 3-minute walk his pulse peaks at 104/minute.",
        prompt: "Which of the following is his total score on the Ottawa Heart Failure Risk Scale?",
        options: ["3 points", "4 points", "5 points", "6 points", "7 points"],
        correct: 2,
        explanation:
          "His score is 5. The prior transient ischemic attack scores 1, a heart rate of 110/minute or more on arrival scores 2 (his was 118/minute), a saturation below 90% on arrival scores 1 (his was 87%) and a urea of 12 mmol/L or more scores 1 (his is 13.6 mmol/L). He has never been intubated, his walk test pulse stayed under 110/minute, the ECG shows no new ischemia, CO2 is below 35 mmol/L, troponin is not at the infarction level and NT-proBNP is under 5 000 pg/mL, so none of these adds points. A total of 4 misses the transient ischemic attack, and 6 counts the NT-proBNP.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs-2017",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him now?",
        options: ["Discharge after a second walk test", "Discharge with clinic in 7 days", "Discharge with home care nursing", "Hospital admission under medicine", "Observation for 6 hours, then discharge"],
        correct: 3,
        explanation:
          "A score of 5 is far above the threshold of more than 1 point at which the validation study found admission would capture 91.8% of serious adverse events, so he should be admitted. His arrival tachycardia and hypoxemia, raised urea and prior transient ischemic attack all add risk, even though he walked without tachycardia. Home nursing, an early clinic or a repeated walk test do not lower that risk. A few hours of observation would not change his score either, because it is built from arrival and laboratory findings.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "ohfrs-2017",
      },
    ],
    sources: [S.escAmyloid, S.ohfrs],
    ...META,
  },

  /* 42 Pulmonary edema with hypercapnic COPD -------------------------------- */
  {
    id: "pulmonary-edema-42",
    topic: "pulmonary-edema",
    alsoTopics: ["asthma-copd"],
    title: "Breathless on her walking oxygen",
    stem:
      "A 70-year-old woman is brought to the emergency department by ambulance with 3 days of worsening shortness of breath. She has severe COPD and uses oxygen at 1 L/minute when she walks. She also has heart failure with an ejection fraction of 35% and takes bisoprolol, sacubitril-valsartan and furosemide 40 mg daily with her inhalers. Paramedics gave salbutamol and ipratropium with little change. For 4 nights she has slept upright, and her ankles are more swollen. Her sputum is unchanged in colour. She is drowsy but answers questions. She has scattered expiratory wheeze, crackles at both bases and pitting edema to mid shin. A venous gas shows pH 7.30 and PCO2 64 mmHg. Lung ultrasound shows multiple B-lines in both lungs.",
    vitals: { temperature: "36.8°C oral", pulse: "106/minute", resp: "30/minute", bp: "158/88 mmHg", o2sat: "85% on 1 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most supports pulmonary edema as the main cause of her worsening breathlessness?",
        options: ["Little response to bronchodilators", "Multiple B-lines in both lungs", "PCO2 of 64 mmHg on venous gas", "Scattered expiratory wheeze", "Sputum unchanged in colour"],
        correct: 1,
        explanation:
          "Multiple B-lines in both lungs on point-of-care ultrasound show lung congestion, and with orthopnea and worsening edema they point to heart failure as the main driver. Wheeze occurs in acute heart failure as well as in COPD, so it does not separate them. A PCO2 of 64 mmHg shows hypercapnic failure, which either condition can produce in a patient with severe COPD. A poor response to bronchodilators and unchanged sputum argue against a simple infective exacerbation but do not by themselves show congestion.",
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
          "She has both cardiogenic pulmonary edema and acute hypercapnic acidosis with a pH of 7.30, and bilevel ventilation treats both at once. It is recommended for COPD with acute respiratory acidosis at a pH of 7.35 or less, and bilevel ventilation or CPAP is recommended for cardiogenic pulmonary edema. CPAP alone would help the edema but gives no inspiratory support to clear her carbon dioxide. High-flow oxygen and a nonrebreather mask do not support ventilation. She is drowsy but answering questions, so a closely watched trial of noninvasive ventilation comes before intubation.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ers-ats-niv",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 3 hours of treatment she is alert with a pH of 7.36. Her pulse is 92/minute and BP 136/80 mmHg. She still has some wheeze, and her morning bisoprolol is due.",
        prompt: "Which of the following is the most appropriate plan for her bisoprolol today?",
        options: ["Continue her usual dose", "Hold until the wheeze settles", "Stop it permanently", "Switch to carvedilol", "Switch to diltiazem"],
        correct: 0,
        explanation:
          "She is not in shock or bradycardic, so her bisoprolol should continue at her usual dose, because therapy for reduced ejection fraction is continued through an episode of heart failure and continuing a beta blocker is safe. Bisoprolol is cardioselective, and in COPD, including severe disease, cardioselective beta blockers do not reduce FEV1, worsen respiratory symptoms or blunt the response to salbutamol. Holding or stopping it for her wheeze removes a treatment her heart needs without helping her airways. Carvedilol also blocks beta-2 receptors, so switching to it in COPD gains nothing. Diltiazem should be avoided when the ejection fraction is low.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "cochrane-bb-copd",
      },
      {
        id: "q4",
        kind: "single",
        update: "By the next morning she is comfortable on room air at rest. Her pH is 7.39 and her ankles are less swollen. She wants to go home, and the team plans a 3-minute walk test.",
        prompt: "Which of the following is the most appropriate way to perform her walk test before discharge?",
        options: ["At a brisk pace on room air", "Own pace on room air", "Own pace on usual oxygen", "Seated arm exercise on room air", "Treadmill test on 4 L/minute"],
        correct: 2,
        explanation:
          "The emergency department walk test asks the patient to walk at her own pace for 3 minutes, whatever the distance, on room air or her usual oxygen. She always walks on 1 L/minute, so testing her on it shows how she will manage at home. The test fails if her saturation drops below 90%, her pulse rises above 110/minute, her respiratory rate rises above 28/minute, or she cannot finish. Testing her walking on room air measures a state she never walks in. A brisk pace, a treadmill or seated arm exercise is not the validated test.",
        keyFeature: { topic: "pulmonary-edema", n: 6 },
        source: "heartrisk6",
      },
    ],
    sources: [S.caep, S.ersNiv, S.cochraneBb, S.heartrisk6],
    ...META,
  },

  /* 43 Bilateral effusions in a survivor of cardiotoxic cancer therapy ------- */
  {
    id: "pulmonary-edema-43",
    topic: "pulmonary-edema",
    title: "Sent from the cancer clinic for a drain",
    stem:
      "A 58-year-old woman is sent to the emergency department by her oncologist to have fluid drained from around her lungs. She received doxorubicin and trastuzumab for breast cancer 4 years ago and has had no sign of recurrence since. For 3 weeks she has been short of breath doing housework, and she now sleeps propped up on pillows. A chest radiograph this morning showed moderate effusions on both sides, slightly larger on the right. She has no fever, sputum, chest pain or weight loss. She has never smoked and takes no medications. Her albumin is 39 g/L and creatinine 74 umol/L. She is comfortable sitting up. The JVP is 6 cm above the sternal angle. Breath sounds are reduced at both bases, and there is pitting edema to the mid shin.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "22/minute", bp: "128/78 mmHg", o2sat: "93% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her pleural effusions?",
        options: ["Cancer recurrence", "Heart failure", "Hypoalbuminemia", "Parapneumonic effusion", "Pulmonary embolism"],
        correct: 1,
        explanation:
          "Effusions on both sides with orthopnea, a JVP 6 cm above the sternal angle and edema to the mid shin point to heart failure, and she received two cardiotoxic cancer drugs. In a survivor of potentially cardiotoxic therapy, suspicion for heart disease should be high and the threshold for cardiac evaluation low. Recurrence is her oncologist's worry, but it would not explain her raised JVP, orthopnea and leg edema, and she has been free of disease for 4 years. Her albumin of 39 g/L is normal, so low oncotic pressure does not explain the fluid. She has no fever or sputum to suggest a parapneumonic effusion, and a pulmonary embolism does not explain orthopnea with edema of both legs.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "asco-survivors",
      },
      {
        id: "q2",
        kind: "single",
        update: "Bedside ultrasound shows a mildly dilated left ventricle with an ejection fraction of about 35%, B-lines above both effusions and no pericardial effusion. The ECG shows sinus rhythm with no Q waves, and troponin is normal twice.",
        prompt: "Which of the following is the most likely cause of her reduced ejection fraction?",
        options: ["Constrictive pericarditis", "Hypertensive heart disease", "Ischemic cardiomyopathy", "Late chemotherapy cardiotoxicity", "Thyrotoxic heart disease"],
        correct: 3,
        explanation:
          "Doxorubicin and trastuzumab both cause cancer therapy-related cardiac dysfunction, defined by a fall in left ventricular ejection fraction, and this dysfunction may first be found during survivorship, as in her case 4 years after treatment. She has a newly reduced ejection fraction of 35%, has never smoked, is normotensive, has no Q waves and has a normal troponin twice, so ischemic and hypertensive heart disease are less likely. Constrictive pericarditis does not reduce the ejection fraction. Nothing in her history or examination suggests thyrotoxicosis.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "icos",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her oncologist calls to ask when the effusions will be drained.",
        prompt: "Which of the following is the most appropriate plan for her pleural effusions now?",
        options: ["CT of the chest with contrast", "Diagnostic tap of the right side", "Drainage of both effusions", "IV diuretic, then reassess", "PET scan for recurrence"],
        correct: 3,
        explanation:
          "In heart failure with no clinical clue to an exudate, thoracentesis may be deferred until the outcome of a trial of diuretic therapy is known. She has a reduced ejection fraction, a raised JVP and leg edema, and no fever, sputum or weight loss to point to infection or malignancy. A loop diuretic treats the cause, and reassessment shows whether the effusions improve. A diagnostic tap now adds procedural risk, including pneumothorax, for a result unlikely to change today's plan, and draining both sides removes fluid that diuresis should clear. CT and PET look for recurrence, which her clinical picture does not suggest.",
        keyFeature: { topic: "pulmonary-edema", n: 3 },
        source: "cmaj-pleural",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following findings over the next 3 days would most justify sampling her pleural fluid?",
        options: ["Ankle edema less but still present", "Creatinine up from 74 to 92 umol/L", "Effusions smaller but still present", "Effusions unchanged on repeat imaging", "Fever with purulent sputum", "Pulse down to 78/minute", "Weight down by 2 kg"],
        select: 2,
        correct: [3, 4],
        explanation:
          "When a heart failure effusion is treated first, more investigation is needed if the effusion fails to improve, so effusions unchanged on repeat imaging after several days of treatment call for sampling to look for another cause such as malignancy. Fever or purulent sputum should prompt urgent evaluation and raises a parapneumonic effusion, which should be sampled. Smaller effusions, less edema, a lower weight and a slower pulse show that treatment is working. A small rise in creatinine during diuresis calls for review of her kidney function and diuretic dose, not a tap.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "cmaj-pleural",
      },
    ],
    sources: [S.asco, S.icos, S.cmajPleural],
    ...META,
  },
];
