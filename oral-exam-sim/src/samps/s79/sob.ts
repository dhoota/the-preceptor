// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  corbeddu: { id: "corbeddu-airway-hemangioma", citation: "Corbeddu M, Meucci D, Diociaiuti A, and colleagues. Management of upper airway infantile hemangiomas: experience of one Italian multidisciplinary center. Front Pediatr. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8688849/" },
  cpsCroup: { id: "cps-croup-2017", citation: "Ortiz-Alvarez O, Canadian Paediatric Society Acute Care Committee. Acute management of croup in the emergency department. Paediatr Child Health. 2017, updated 2026.", url: "https://cps.ca/en/documents/position/acute-management-of-croup" },
  esc: { id: "esc-pe-2019", citation: "Konstantinides SV, Meyer G, Becattini C, and colleagues. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society. Eur Heart J. 2020.", url: "https://doi.org/10.1093/eurheartj/ehz405" },
  mos: { id: "mos-recurrent-pe", citation: "Mos IC, Douma RA, Erkens PM, and colleagues. Diagnostic outcome management study in patients with clinically suspected recurrent acute pulmonary embolism with a structured algorithm. Thromb Res. 2014." },
  wittram: { id: "wittram-ctpa", citation: "Wittram C, Maher MM, Yoo AJ, Kalra MK, Shepard JA, McLoud TC. CT angiography of pulmonary embolism: diagnostic criteria and causes of misdiagnosis. RadioGraphics. 2004." },
  legal: { id: "legal-recurrent-vte", citation: "Le Gal G, Kovacs MJ, Carrier M, and colleagues. Validation of a diagnostic approach to exclude recurrent venous thromboembolism. J Thromb Haemost. 2009." },
  hps: { id: "soulaidopoulos-hps", citation: "Soulaidopoulos S, Cholongitas E, Giannakoulas G, Vlachou M, Goulis I. Review article: update on current and emergent data on hepatopulmonary syndrome. World J Gastroenterol. 2018.", url: "https://pmc.ncbi.nlm.nih.gov/articles/5871824/" },
  msd: { id: "msd-epiglottitis", citation: "Cheng AG. Epiglottitis. MSD Manual Professional Version. Merck and Co. Reviewed 2026.", url: "https://www.msdmanuals.com/professional/ear-nose-and-throat-disorders/oral-and-pharyngeal-disorders/epiglottitis" },
} satisfies Record<string, Source>;

export const SOB_S79: Samp[] = [
  /* 48 Infant whose noisy breathing keeps returning ------------------------- */
  {
    id: "sob-48",
    topic: "sob",
    title: "Noisy breathing that keeps coming back",
    stem:
      "You are working in a community hospital emergency department. A 12-week-old girl is brought in by her parents with noisy breathing. It began about 4 weeks ago, was first heard only when she cried and has slowly become constant. A walk-in clinic diagnosed croup 10 days ago and gave oral dexamethasone, and the noise eased for 3 days before it returned. Two days ago she developed a runny nose and a barking cough. She was born at term and has had no fever. She now feeds more slowly than before. Since about 3 weeks of age a raised, bright red plaque has grown over her chin, lower lip and the front of her neck. She has stridor on both inspiration and expiration, with suprasternal retractions. Her chest is clear.",
    vitals: { temperature: "37.2°C rectal", pulse: "168/minute", resp: "52/minute", o2sat: "96% on room air", weight: "5.4 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her stridor?",
        options: ["Bilateral vocal cord palsy", "Laryngomalacia", "Recurrent viral croup", "Subglottic hemangioma", "Vascular ring"],
        correct: 3,
        explanation:
          "Stridor that began at about 8 weeks of age and has grown steadily, heard on both inspiration and expiration, together with a growing hemangioma over the chin, lip and neck, points to a subglottic hemangioma. Biphasic stridor is typical of subglottic narrowing, airway symptoms usually start at 2 to 4 months, and about half of airway hemangiomas come with a skin lesion in this beard area. These infants are often treated for croup first. Laryngomalacia causes inspiratory stridor only, from the first weeks of life. Croup is unusual before 6 months and does not explain weeks of stridor before this cold. A vascular ring and vocal cord palsy can cause stridor in infancy but do not explain a stridor that appeared at 8 weeks alongside the skin lesion.",
        keyFeature: { topic: "sob", n: 1 },
        source: "corbeddu-airway-hemangioma",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate test to confirm the cause of her stridor?",
        options: ["Airway endoscopy", "Barium swallow", "Chest radiograph", "CT angiography of the chest", "Lateral neck radiograph"],
        correct: 0,
        explanation:
          "Airway endoscopy is the reference standard for diagnosing an airway hemangioma and for following it, because it shows exactly where the lesion sits and how much it narrows the lumen. It is done by a paediatric otolaryngologist in a setting where the airway can be secured. A lateral neck radiograph may show subglottic narrowing but cannot tell a hemangioma from croup or stenosis. Her chest is clear, so a chest radiograph adds little. A barium swallow and CT angiography of the chest look for a vascular ring, which does not explain the hemangioma in her beard area.",
        keyFeature: { topic: "sob", n: 1 },
        source: "corbeddu-airway-hemangioma",
      },
      {
        id: "q3",
        kind: "single",
        update: "Thirty minutes later her stridor is louder and her retractions are deeper. She is alert and her O2 sat is 95% on room air.",
        prompt: "Which of the following is the most appropriate treatment to give her now?",
        options: ["epinephrine 1 mg/mL 5 mL nebulized", "hypertonic saline 3% 4 mL nebulized", "ipratropium 250 mcg nebulized", "propranolol 5 mg PO", "salbutamol 2.5 mg nebulized"],
        correct: 0,
        explanation:
          "Louder stridor and deeper retractions call for treatment that works within minutes while the diagnosis is still being confirmed. Nebulized epinephrine constricts the swollen mucosa of the upper airway. The Canadian Paediatric Society gives 5 mL of 1 mg/mL L-epinephrine as the standard dose for all ages and weights. Its effect is short, so she stays on a monitor and is reassessed. Salbutamol, ipratropium and hypertonic saline act on the lower airways and do not open a narrowed subglottis. Propranolol is first-line treatment for the hemangioma itself, but it is started once endoscopy confirms the lesion and it does not relieve obstruction within minutes.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cps-croup-2017",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her stridor softens after the nebulizer. Two hours later the stridor at rest and the retractions have returned to their earlier level.",
        prompt: "Which of the following is the most appropriate disposition for her?",
        options: ["Admit to the local paediatric ward", "Discharge with oral dexamethasone", "Discharge with otolaryngology review in 1 week", "Observe 4 hours, then discharge if settled", "Transfer to a paediatric airway centre"],
        correct: 4,
        explanation:
          "A likely airway hemangioma with stridor at rest needs endoscopy to confirm it and first-line propranolol, so she belongs in a centre with paediatric otolaryngology and intensive care. The stridor came back once the epinephrine wore off, which shows a fixed narrowing rather than croup that is settling. A local paediatric ward cannot provide airway endoscopy or a surgical airway if she worsens. Observation and discharge suit croup that has settled, not a growing lesion. Clinic review in a week leaves a narrowed airway untreated, and more dexamethasone delays the treatment that works.",
        keyFeature: { topic: "sob", n: 1 },
        source: "corbeddu-airway-hemangioma",
      },
    ],
    sources: [S.corbeddu, S.cpsCroup],
    ...META,
  },

  /* 49 Rural night with no CT --------------------------------------------- */
  {
    id: "sob-49",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Breathless two weeks after ankle surgery",
    stem:
      "You are working in a rural hospital emergency department in northern Ontario at 22:00. The hospital has no CT or nuclear medicine, and freezing rain has grounded flights to the regional centre until morning. A 57-year-old man presents with 6 hours of shortness of breath and sharp right sided chest pain on inspiration. Sixteen days ago he had open reduction and internal fixation of a right ankle fracture. He walks in a boot and was not given thromboprophylaxis. He has no previous VTE, cancer or hemoptysis and takes no medications. The right calf is swollen and tender along the deep veins. The chest is clear. The ECG shows sinus tachycardia and the chest radiograph is normal. Hemoglobin, platelets and creatinine are normal. PE is your leading diagnosis.",
    vitals: { temperature: "37.4°C oral", pulse: "114/minute", resp: "24/minute", bp: "132/80 mmHg", o2sat: "92% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first test for venous thromboembolism in him tonight?",
        options: ["Arterial blood gas on room air", "Focused cardiac ultrasound", "High-sensitivity troponin level", "Leg compression ultrasound", "Quantitative D-dimer level"],
        correct: 3,
        explanation:
          "A swollen, tender calf in a patient with suspected PE makes leg compression ultrasound the most useful test available tonight. Finding a proximal DVT in a patient with suspected PE is enough to start treatment without lung imaging, which this hospital cannot do. His Wells score is 9 (3 for signs of DVT, 3 for PE as the leading diagnosis, 1.5 for a pulse above 100/minute and 1.5 for surgery within 4 weeks), so PE is likely and a D-dimer cannot exclude it. A focused cardiac ultrasound is not required in a stable patient, and a normal one does not exclude PE. A blood gas and a troponin neither confirm nor exclude PE.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe-2019",
      },
      {
        id: "q2",
        kind: "single",
        update: "Two-point compression ultrasound shows fully compressible right femoral and popliteal veins. A focused cardiac ultrasound shows a right ventricle of normal size and function.",
        prompt: "Which of the following best describes how these two results change his probability of PE?",
        options: ["Musculoskeletal pain more likely", "Only subsegmental PE possible", "PE excluded without imaging", "PE still likely, imaging needed", "PE unlikely, testing can stop"],
        correct: 3,
        explanation:
          "Neither result can rule out PE when clinical probability is high. Proximal DVT is found in only 30 to 50% of patients with PE, so normal femoral and popliteal veins miss many emboli, and the calf veins were not examined. Echocardiography has a negative predictive value of only 40 to 50% for PE, and a normal right ventricle is common in a stable patient. His pulse of 114/minute, saturation of 92% and recent surgery are unchanged, so he still needs lung imaging. Calling the pain musculoskeletal ignores his hypoxemia and tachycardia, and normal results here do not limit the possibility to small emboli.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe-2019",
      },
      {
        id: "q3",
        kind: "single",
        update: "The regional centre can perform CT pulmonary angiography at 09:00 tomorrow, once flights resume.",
        prompt: "Which of the following is the most appropriate treatment for him until the CT pulmonary angiogram is done?",
        options: ["alteplase 100 mg IV over 2 hours", "apixaban 5 mg PO twice daily", "dalteparin 200 units/kg SC daily", "enoxaparin 40 mg SC daily", "heparin 5 000 units SC every 12 hours"],
        correct: 2,
        explanation:
          "The ESC guideline advises starting anticoagulation without delay when clinical probability is high or intermediate and testing is still under way, and his imaging is 11 hours away. Weight-based LMWH is preferred for a stable patient, and dalteparin 200 units/kg is about 18 400 units at 92 kg. His normal blood counts and creatinine allow it. Enoxaparin 40 mg daily and heparin 5 000 units every 12 hours are prophylactic doses that do not treat a clot. Apixaban 5 mg twice daily is the maintenance dose, not the starting dose for acute VTE. Alteplase is reserved for PE with hemodynamic instability, and his BP is 132/80 mmHg.",
        keyFeature: { topic: "sob", n: 3 },
        source: "esc-pe-2019",
      },
      {
        id: "q4",
        kind: "single",
        update: "At 03:00 the nurse asks which changes overnight should make her call you to the bedside at once.",
        prompt: "Which of the following findings would most strongly indicate that he now needs systemic thrombolysis?",
        options: ["O2 sat 88% on 2 L/minute", "Pulse rising to 128/minute", "Respiratory rate of 30/minute", "Rise in high-sensitivity troponin I", "Systolic 84 mmHg for 20 minutes"],
        correct: 4,
        explanation:
          "The ESC guideline defines high-risk PE by hemodynamic instability, which includes a systolic BP below 90 mmHg for more than 15 minutes that is not explained by arrhythmia, hypovolemia or sepsis. Systemic thrombolysis is the treatment for high-risk PE, and rescue thrombolysis is advised for a patient on anticoagulation who becomes unstable. With CT out of reach until morning, a dilated right ventricle on repeat bedside ultrasound would support treating on clinical grounds. A rising troponin, a faster pulse, tachypnea and a lower saturation point to intermediate risk and closer monitoring, and routine thrombolysis is not recommended in intermediate-risk PE.",
        keyFeature: { topic: "sob", n: 4 },
        source: "esc-pe-2019",
      },
    ],
    sources: [S.esc],
    ...META,
  },

  /* 50 Pleuritic pain with an old clot on file ----------------------------- */
  {
    id: "sob-50",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Pleuritic pain after a previous clot",
    stem:
      "A 46-year-old woman presents to the emergency department with 2 days of left sided pleuritic chest pain, cough with green sputum and mild shortness of breath. Her husband and son have had colds this week. Two years ago she had a left lower lobe PE after a long flight. She took rivaroxaban for 6 months and then stopped. A CT pulmonary angiogram done when she stopped showed residual thrombus in a left lower lobe segmental artery. She takes no medications. She has no hemoptysis, recent surgery, immobilization or cancer. Her legs are normal. There are crackles at the left lung base. The ECG shows sinus rhythm. You judge another diagnosis to be more likely than PE.",
    vitals: { temperature: "38.3°C oral", pulse: "96/minute", resp: "20/minute", bp: "124/76 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her Wells score for pulmonary embolism?",
        options: ["1.5 points", "3 points", "4.5 points", "6 points", "7.5 points"],
        correct: 0,
        explanation:
          "She scores 1.5 points, all for her previous PE. Her pulse of 96/minute is below the 100/minute threshold. She has no signs of DVT, no recent surgery or immobilization, no hemoptysis and no cancer. You judge another diagnosis more likely, so the 3 points for PE as the most likely diagnosis do not apply. A score of 4 or less places PE in the unlikely group. Higher scores come from wrongly adding points for the old flight, for a pulse under 100/minute or for PE as the leading diagnosis.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe-2019",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her evaluation for PE?",
        options: ["CT pulmonary angiogram", "D-dimer level", "Leg compression ultrasound", "Ventilation perfusion scan", "No testing for PE"],
        correct: 1,
        explanation:
          "With a Wells score of 1.5, PE is unlikely, and a normal D-dimer would exclude it without imaging. A previous PE does not remove this option. In a management study of suspected recurrent PE, a strategy of Wells score, D-dimer and then CT pulmonary angiography was effective and safe. Going straight to CT or a V/Q scan because of the earlier clot exposes her to radiation that a normal D-dimer could avoid. Her legs are normal, so leg ultrasound has a low yield. Stopping without testing is not safe, because her previous VTE means she cannot be ruled out by PERC.",
        keyFeature: { topic: "sob", n: 5 },
        source: "mos-recurrent-pe",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT pulmonary angiography is later done. A thin web crosses the left lower lobe segmental artery where the earlier scan showed residual thrombus. No other filling defect is seen. There is left lower lobe consolidation.",
        prompt: "Which of the following best interprets the finding in the left lower lobe segmental artery?",
        options: ["Acute recurrent PE at that site", "Chronic post-thrombotic web", "Flow-related artifact", "Hilar lymph node", "Mucus-filled bronchus"],
        correct: 1,
        explanation:
          "A web or band across an artery is a sign of chronic thrombus that has organized and partly recanalized, and it sits exactly where her end-of-treatment scan showed residual clot. Chronic defects meet the vessel wall at obtuse angles, while acute emboli sit centrally in the lumen or meet the wall at acute angles. Comparing with that baseline scan is how a new clot is told from an old one. Flow artifacts, lymph nodes and bronchi are known mimics of a filling defect, but a node or bronchus lies outside the artery and a flow artifact does not form a fixed web at the site of a known clot.",
        keyFeature: { topic: "sob", n: 5 },
        source: "wittram-ctpa",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains her fever, cough and pleuritic pain?",
        options: ["Community-acquired pneumonia", "Heart failure with pleural effusion", "Old embolic lung scarring", "Pulmonary infarction", "Viral pleuritis from a cold"],
        correct: 0,
        explanation:
          "Fever of 38.3°C, green sputum, crackles at the left base and new left lower lobe consolidation after colds at home point to pneumonia. The arterial finding matches the residual clot seen 18 months ago, and when imaging shows no change from the baseline taken at the end of treatment, recurrent VTE can be safely ruled out. She needs treatment for pneumonia, not anticoagulation. Pulmonary infarction needs a new embolus upstream, which she does not have. Viral pleuritis does not cause consolidation, and old scarring does not cause fever. Nothing suggests heart failure, and no effusion was seen.",
        keyFeature: { topic: "sob", n: 2 },
        source: "legal-recurrent-vte",
      },
    ],
    sources: [S.esc, S.mos, S.wittram, S.legal],
    ...META,
  },

  /* 51 Breathless when upright with liver disease -------------------------- */
  {
    id: "sob-51",
    topic: "sob",
    title: "Breathless when he stands up",
    stem:
      "A 56-year-old man presents to the emergency department with 4 months of slowly worsening shortness of breath. He is breathless when he stands or walks and feels better lying down. He has cirrhosis from metabolic dysfunction-associated steatohepatitis, and his esophageal varices were banded last year. He takes propranolol and spironolactone. He has never smoked. He has no cough, fever, chest pain or orthopnea. He has spider angiomas, palmar erythema and clubbing of the fingers. His lungs are clear, and there is no ascites or leg edema. The JVP is not raised and the heart sounds are normal. The chest radiograph is normal. His O2 sat is 95% lying flat and falls to 87% after he stands for 2 minutes.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "20/minute", bp: "112/68 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shortness of breath?",
        options: ["Hepatic hydrothorax", "Hepatopulmonary syndrome", "Interstitial lung disease", "Portopulmonary hypertension", "Pulmonary embolism"],
        correct: 1,
        explanation:
          "Breathlessness that comes on when he stands and eases when he lies down, with a saturation that falls from 95% to 87% on standing, is platypnea with orthodeoxia. With clubbing, spider angiomas, clear lungs and a normal radiograph in cirrhosis, this points to hepatopulmonary syndrome, in which dilated vessels in the lungs let blood pass without full oxygenation. Portopulmonary hypertension is a different complication, caused by narrowed pulmonary vessels and raised resistance, and it does not explain a positional fall in saturation. Hepatic hydrothorax would show on his radiograph, and interstitial lung disease would cause crackles and an abnormal film. PE does not explain 4 months of positional symptoms.",
        keyFeature: { topic: "sob", n: 2 },
        source: "soulaidopoulos-hps",
      },
      {
        id: "q2",
        kind: "single",
        update: "An arterial gas is drawn on room air while he sits, at sea level: pH 7.46, PaCO2 30 mmHg, PaO2 62 mmHg.",
        prompt: "Which of the following is closest to his alveolar to arterial oxygen gradient on this gas?",
        options: ["12 mmHg", "26 mmHg", "38 mmHg", "50 mmHg", "88 mmHg"],
        correct: 3,
        explanation:
          "At sea level the alveolar oxygen is 0.21 times (760 minus 47), which is 149.7, minus the PaCO2 of 30 divided by 0.8, which is 37.5. That gives about 112 mmHg. Subtracting his PaO2 of 62 mmHg leaves a gradient of about 50 mmHg, well above the cutoff of 15 mmHg used for hepatopulmonary syndrome at his age. A wide gradient with a low PaCO2 shows a failure of gas exchange, not hypoventilation. A value of 88 mmHg comes from leaving out the PaCO2 term, and 12 mmHg would be normal.",
        keyFeature: { topic: "sob", n: 4 },
        source: "soulaidopoulos-hps",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following tests best confirms the cause of his low oxygen levels?",
        options: ["CT angiography of the pulmonary arteries", "High-resolution chest CT", "Pulmonary function tests", "Right heart catheterization", "Saline contrast echocardiogram"],
        correct: 4,
        explanation:
          "Contrast echocardiography with agitated saline is the reference test for the dilated lung vessels of hepatopulmonary syndrome. The bubbles are normally trapped in the lung capillaries, but here they reach the left atrium between the fourth and sixth heartbeat after they fill the right atrium. Bubbles that appear within three beats point instead to a shunt inside the heart. Right heart catheterization measures pulmonary pressures and is used for portopulmonary hypertension. CT angiography looks for emboli, and high-resolution CT and pulmonary function tests look for lung disease that his clear chest and normal film do not suggest.",
        keyFeature: { topic: "sob", n: 2 },
        source: "soulaidopoulos-hps",
      },
      {
        id: "q4",
        kind: "single",
        update: "The echocardiogram confirms the diagnosis. He asks which treatment will fix his breathing.",
        prompt: "Which of the following treatments is most likely to reverse his condition over the long term?",
        options: ["Garlic extract", "Liver transplantation", "Long-term oxygen at home", "Methylene blue", "Pentoxifylline"],
        correct: 1,
        explanation:
          "Liver transplantation is the only established treatment that changes the course of hepatopulmonary syndrome, and his diagnosis should prompt referral to a transplant centre. Oxygen is recommended for severe hypoxemia and eases symptoms, but it does not reverse the dilated vessels. Methylene blue, pentoxifylline and garlic have been tried, and none has been shown to work. Finding this condition in a patient with cirrhosis matters because it changes his prognosis and his priority for transplant assessment.",
        keyFeature: { topic: "sob", n: 2 },
        source: "soulaidopoulos-hps",
      },
    ],
    sources: [S.hps],
    ...META,
  },

  /* 52 Drooling child far from a paediatric centre ------------------------- */
  {
    id: "sob-52",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Sore throat and drooling in a small girl",
    stem:
      "You are working in a rural hospital emergency department in northern Manitoba. Air transport to the paediatric centre in Winnipeg takes about 3 hours. A 4-year-old girl is brought in by her mother with 6 hours of high fever and sore throat. She now refuses to swallow and is drooling. Her family declined all childhood vaccines. She has no cough and no history of choking. She sits upright on her mother's lap, leaning forward with her chin pushed out, and does not want to move. Her voice is muffled. She looks anxious and toxic. There is soft inspiratory stridor. Air entry is equal and the chest is clear.",
    vitals: { temperature: "39.8°C axillary", pulse: "156/minute", resp: "32/minute", o2sat: "95% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this child?",
        options: ["Bacterial tracheitis", "Epiglottitis", "Peritonsillar abscess", "Retropharyngeal abscess", "Viral croup"],
        correct: 1,
        explanation:
          "Sudden high fever, drooling, refusal to swallow, a muffled voice, a toxic look and a forward-leaning posture with stridor in an unimmunized child point to epiglottitis. Drooling without a barking cough is highly specific and sensitive for it, and the Hib vaccine she did not receive is the main protection against it. Viral croup and bacterial tracheitis cause a barking cough, which she does not have. A retropharyngeal abscess usually brings neck pain and stiffness, and a peritonsillar abscess causes trismus and a deviated uvula, and neither usually causes stridor this quickly.",
        keyFeature: { topic: "sob", n: 1 },
        source: "msd-epiglottitis",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        prompt: "Which of the following are most appropriate while the airway equipment and the transport team are being prepared?",
        options: [
          "Call the most skilled airway help",
          "Examine her throat with a tongue depressor",
          "Insert an IV and draw blood cultures",
          "Keep her upright on her mother's lap",
          "Lay her supine for continuous monitoring",
          "Nebulized salbutamol by face mask",
          "Send her for a lateral neck radiograph",
        ],
        correct: [0, 3],
        explanation:
          "In epiglottitis, airway assessment and management come before every other step, and the airway is best secured by the most experienced people available. She stays upright on her mother's lap, because lying flat can worsen the obstruction and upsetting her can cause complete obstruction. Examining the throat with a tongue depressor can trigger complete obstruction and should happen only where the airway can be secured. An IV and blood cultures can wait until the airway is safe, because they upset her. A child with stridor should not go to the radiology room, and a lateral neck film is not accurate enough to delay care. Salbutamol treats the lower airways and does nothing for supraglottic swelling.",
        keyFeature: { topic: "sob", n: 1 },
        source: "msd-epiglottitis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following changes would most indicate that she is tiring toward respiratory failure?",
        options: ["Drooling more and spitting saliva", "Louder stridor on each breath", "Lying back, no longer upright", "Pulse rising to 170/minute", "Temperature rising to 40.5°C"],
        correct: 2,
        explanation:
          "A child with epiglottitis sits upright and leans forward to hold her airway open, so giving up that posture is a sign of exhaustion and coming respiratory failure. It means she can no longer work to keep air moving past the swollen epiglottis. Louder stridor shows obstruction but also shows that air is still moving. More drooling, a rising pulse and a higher fever are part of the illness and her distress, and they do not by themselves signal respiratory failure.",
        keyFeature: { topic: "sob", n: 4 },
        source: "msd-epiglottitis",
      },
      {
        id: "q4",
        kind: "single",
        update: "Before the team is ready, she stops breathing and turns blue. Her O2 sat falls to 72% and her pulse is 90/minute.",
        prompt: "Which of the following is the most appropriate immediate action for her now?",
        options: ["Abdominal thrusts", "Nebulized epinephrine", "Needle cricothyroidotomy", "Start chest compressions", "Two-person bag-mask ventilation"],
        correct: 4,
        explanation:
          "When respiratory arrest happens before the airway is secured, bag-mask ventilation can be a life-saving temporary measure in epiglottitis. Two operators, one holding a tight seal and one squeezing the bag slowly, give the best chance of moving oxygen past the swollen supraglottis. She still has a pulse of 90/minute, so her problem is ventilation, and chest compressions are not the first step. Abdominal thrusts are for a foreign body. Needle cricothyroidotomy is a last resort if ventilation and intubation fail. Nebulized epinephrine cannot reach the airway of a child who is not breathing.",
        keyFeature: { topic: "sob", n: 3 },
        source: "msd-epiglottitis",
      },
      {
        id: "q5",
        kind: "single",
        update: "Her O2 sat rises to 94%. She is intubated with a tube smaller than usual for her age, and the tube position is confirmed.",
        prompt: "Which of the following is the most appropriate antibiotic to start for her now?",
        options: ["amoxicillin 850 mg PO", "azithromycin 170 mg IV", "cefazolin 850 mg IV", "ceftriaxone 1 g IV", "vancomycin 255 mg IV"],
        correct: 3,
        explanation:
          "A third-generation cephalosporin is the recommended empiric treatment for epiglottitis, at 50 to 75 mg/kg IV once daily to a maximum of 2 g. At 17 kg, 1 g is about 59 mg/kg. It covers Haemophilus influenzae type b, the likely cause in an unimmunized child, and the streptococci that cause many cases now. An oral drug is not suitable for an intubated, toxic child. Cefazolin is a first-generation cephalosporin with weak activity against H influenzae. Vancomycin alone does not cover H influenzae, and azithromycin is not a recommended treatment.",
        keyFeature: { topic: "sob", n: 3 },
        source: "msd-epiglottitis",
      },
    ],
    sources: [S.msd],
    ...META,
  },
];
