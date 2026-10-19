// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  gina: { id: "gina-2024", citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2024 update.", url: "https://ginasthma.org/wp-content/uploads/2024/05/GINA-2024-Strategy-Report-24_05_22_WMS.pdf" },
  huh: { id: "huh-dental-fb-2022", citation: "Huh JY. Foreign body aspirations in dental clinics: a narrative review. J Dent Anesth Pain Med. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9171332/" },
  sehgal: { id: "sehgal-fb-2015", citation: "Sehgal IS, Dhooria S, Ram B, et al. Foreign body inhalation in the adult population: experience of 25,998 bronchoscopies and systematic review of the literature. Respir Care. 2015.", url: "https://doi.org/10.4187/respcare.03976" },
  btsOxygen: { id: "bts-oxygen-2017", citation: "O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.", url: "https://doi.org/10.1136/thoraxjnl-2016-209729" },
  btsIcs: { id: "bts-ics-ahrf-2016", citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. Thorax. 2016.", url: "https://doi.org/10.1136/thoraxjnl-2015-208209" },
  ersAts: { id: "ers-ats-copd-2017", citation: "Wedzicha JA, Miravitlles M, Hurst JR, et al. Management of COPD exacerbations: a European Respiratory Society/American Thoracic Society guideline. Eur Respir J. 2017.", url: "https://doi.org/10.1183/13993003.00791-2016" },
} satisfies Record<string, Source>;

/** Expansion batch s64: asthma-copd-48 to asthma-copd-52. 2027 MCQ and menu format only. */
export const ASTHMA_COPD_S64: Samp[] = [
  /* 48 Severe asthma with a near-fatal history ------------------------------ */
  {
    id: "asthma-copd-48",
    topic: "asthma-copd",
    title: "Wheeze after a cold in a line cook",
    stem:
      "You are working in a community hospital emergency department in Sault Ste. Marie, Ontario. A 31-year-old man presents with 2 days of worsening wheeze and cough that began with a cold. He has had asthma since childhood and has allergic rhinitis. At age 22 he was intubated in an intensive care unit for asthma. He stopped his budesonide-formoterol inhaler 4 months ago because of the cost, and he has used two salbutamol inhalers in the past 3 weeks. He works as a line cook. He sits upright, speaks in short phrases and uses his neck muscles. He has diffuse expiratory wheeze with fair air entry.",
    vitals: { temperature: "37.3°C oral", pulse: "124/minute", resp: "30/minute", bp: "136/84 mmHg", o2sat: "89% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of his history most increase his risk of dying from asthma?",
        options: ["Allergic rhinitis", "Asthma since childhood", "Cold for 2 days", "ICU intubation at age 22", "Stopped his inhaled corticosteroid", "Two salbutamol inhalers in 3 weeks", "Work as a line cook"],
        select: 3,
        correct: [3, 4, 5],
        explanation:
          "GINA lists the factors linked to asthma-related death, and three of them are in his history: near-fatal asthma needing intubation and ventilation, not currently using an inhaled corticosteroid, and over-use of salbutamol, especially more than one canister a month. Two inhalers in 3 weeks is well above that. Allergic rhinitis and asthma since childhood are common and do not mark a fatal risk. A cold is the usual trigger of an exacerbation, and kitchen fumes may irritate his airways, but neither is on the list.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina-2024",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oxygen saturation ranges should guide his oxygen therapy during treatment?",
        options: ["85 to 88%", "88 to 92%", "93 to 95%", "96 to 98%", "99 to 100%"],
        correct: 2,
        explanation:
          "GINA advises giving oxygen by nasal prongs or mask to keep the saturation at 93 to 95% in adults with acute asthma, started together with bronchodilators. In severe exacerbations, controlled low-flow oxygen to this range gives better physiological outcomes than 100% oxygen, which can raise the PaCO2. A range of 88 to 92% is for patients at risk of hypercapnic respiratory failure, such as those with COPD, and would leave him needlessly hypoxemic. Ranges of 96% and above mean more oxygen than he needs, and 85 to 88% is frankly hypoxemic.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina-2024",
      },
      {
        id: "q3",
        kind: "single",
        update: "After an hour of salbutamol, ipratropium and prednisone he feels a little better, but his respiratory rate is 28/minute and pulse 134/minute. Arterial gas: pH 7.36, PaCO2 44 mmHg, PaO2 68 mmHg. Lactate 3.6 mmol/L, potassium 3.2 mmol/L, glucose 10.4 mmol/L.",
        prompt: "Which of the following results is most concerning for impending respiratory failure?",
        options: ["Arterial PaCO2 of 44 mmHg", "Glucose of 10.4 mmol/L", "Lactate of 3.6 mmol/L", "Potassium of 3.2 mmol/L", "Pulse of 134/minute"],
        correct: 0,
        explanation:
          "A man breathing 28 times a minute with acute asthma should be blowing off CO2, and GINA notes that the PaCO2 is usually below 40 mmHg during an exacerbation. A PaCO2 of 44 mmHg is therefore not reassuring. It suggests fatigue, and a normal or rising PaCO2 marks respiratory failure and the possible need for airway support. A raised lactate, a mild fall in potassium, a high glucose and tachycardia are expected effects of repeated salbutamol and corticosteroid. They need monitoring but do not signal exhaustion.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2024",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate additional treatment for him now?",
        options: ["aminophylline 5 mg/kg IV", "epinephrine 0.5 mg IM", "hydrocortisone 500 mg IV", "magnesium sulfate 2 g IV", "salbutamol 250 mcg IV"],
        correct: 3,
        explanation:
          "He has not responded well to initial treatment and remains hypoxemic, the group in which GINA advises a single 2 g infusion of IV magnesium sulfate over 20 minutes, which reduces admissions. Aminophylline adds side effects, including fatal ones, without better outcomes than salbutamol. IV beta agonists are not supported for most severe exacerbations. IM epinephrine is for asthma with anaphylaxis or angioedema, which he does not have. He has already had prednisone, and adults are given the equivalent of 50 mg of prednisolone or 200 mg of hydrocortisone a day, so a larger dose adds nothing.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina-2024",
      },
    ],
    sources: [S.gina],
    ...META,
  },

  /* 49 An older man who underrates his attack ------------------------------- */
  {
    id: "asthma-copd-49",
    topic: "asthma-copd",
    title: "Only a little tight",
    stem:
      "A 69-year-old man presents to the emergency department with 4 days of cough and chest tightness after a cold. His asthma was diagnosed at age 50, and 6 years ago he was admitted to an intensive care unit with asthma. He takes budesonide-formoterol as maintenance and reliever and has used it about 10 times a day for 2 days. He has type 2 diabetes treated with metformin and lives alone. He says his breathing is only a little tight and rates it 3 out of 10. He speaks in full sentences and has scattered expiratory wheeze. His peak flow is 150 L/minute. His personal best, recorded at a clinic visit last year, is 480 L/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "24/minute", bp: "148/86 mmHg", o2sat: "93% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best indicates the severity of his exacerbation?",
        options: ["Full sentences when speaking", "His rating of 3 out of 10", "Peak flow 31% of his best", "Respiratory rate of 24/minute", "SpO2 of 93% on room air"],
        correct: 2,
        explanation:
          "His peak flow of 150 L/minute is 31% of his personal best of 480 L/minute, which GINA places in the severe range of 50% or less. GINA notes that lung function is a more reliable guide to severity than symptoms, and that some patients perceive airflow limitation poorly, especially older adults, men and those with a past near-fatal attack. Full sentences, a respiratory rate of 24/minute and an SpO2 of 93% would suggest only a mild or moderate attack, and his own rating of 3 out of 10 badly underestimates it.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2024",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following, if present in his history, would add most to his risk of death from asthma?",
        options: ["Allergy to tree pollen", "Gastroesophageal reflux", "Obstructive sleep apnea", "Peanut allergy with anaphylaxis", "Weight gain of 6 kg"],
        correct: 3,
        explanation:
          "Food allergy in a person with asthma is one of the GINA risk factors for asthma-related death, and a past anaphylactic reaction to peanut shows that the allergy is real and severe. His ICU admission and his diabetes already add to his risk. Pollen allergy, reflux, sleep apnea and weight gain can all worsen asthma control and are worth treating, but none of them is a listed marker of fatal asthma.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina-2024",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is kept overnight. The next morning his peak flow is 400 L/minute and he walks the corridor without distress. He stopped his last prednisone course after 2 days because he lost track of the days.",
        prompt: "Which of the following systemic corticosteroid prescriptions is most appropriate for him at discharge?",
        options: ["budesonide-formoterol increase alone", "dexamethasone 12 mg PO daily for 2 days", "dexamethasone 12 mg PO daily for 7 days", "prednisone 50 mg PO daily for 14 days", "prednisone 50 mg PO with a 3-week taper"],
        correct: 1,
        explanation:
          "GINA notes that oral dexamethasone 12 to 16 mg once daily for 1 to 2 days gives a relapse rate similar to 3 to 5 days of prednisolone, with similar side effects, and two doses suit a man who lost track of a longer course. Dexamethasone should not be continued beyond 2 days because of its metabolic effects, which matters with his diabetes. Courses of 5 to 7 days of prednisone work as well as 10 to 14 days, and tapering adds nothing in patients on inhaled corticosteroid. A severe exacerbation needs a systemic corticosteroid, so increasing his inhaler alone is not enough.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina-2024",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following discharge measures best addresses how he underestimated this attack?",
        options: ["Home nebulizer for salbutamol", "Home oximeter for saturation checks", "Salbutamol added to his MART inhaler", "Spirometry in 6 months", "Written action plan with peak flow meter"],
        correct: 4,
        explanation:
          "He felt only a little tight with a peak flow of 31% of his best, so his symptoms cannot be trusted to warn him. GINA suggests regular peak flow monitoring for poor perceivers, and patients discharged from the ED with an action plan and a peak flow meter do better than those without. A home nebulizer offers no advantage over his inhaler, and nebulized salbutamol use is itself a marker of fatal asthma risk. An oximeter does not measure airflow, and his saturation was 93% even with a peak flow of 31%. Patients on maintenance and reliever therapy use budesonide-formoterol as their reliever rather than adding salbutamol, and spirometry in 6 months does not help him detect the next attack.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina-2024",
      },
    ],
    sources: [S.gina],
    ...META,
  },

  /* 50 New wheeze after dental work under sedation -------------------------- */
  {
    id: "asthma-copd-50",
    topic: "asthma-copd",
    alsoTopics: ["sob"],
    title: "New asthma that will not settle",
    stem:
      "A 58-year-old man presents to the emergency department with 9 days of cough and wheeze. Ten days ago he had two dental implants placed under intravenous sedation, and he remembers coughing hard as he woke. Five days ago a walk-in clinic diagnosed adult-onset asthma and gave him salbutamol and an inhaled corticosteroid, which have not helped. His cough is worse at night. For 2 days he has had fevers and yellow sputum. He is a lifelong nonsmoker with no history of asthma or allergy. He has a single-pitched wheeze and reduced breath sounds over the right lower chest that do not change after salbutamol. The left chest is clear.",
    vitals: { temperature: "38.2°C oral", pulse: "98/minute", resp: "20/minute", bp: "132/78 mmHg", o2sat: "94% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests a cause other than asthma for his wheeze?",
        options: ["Age of 58 years", "Cough worse at night", "Fixed wheeze over one area", "Lifelong nonsmoker", "Yellow sputum for 2 days"],
        correct: 2,
        explanation:
          "Asthma narrows airways throughout both lungs and gives a diffuse wheeze that changes with bronchodilator. A single-pitched wheeze with reduced breath sounds fixed over the right lower chest, unchanged after salbutamol, points to a focal obstruction of one bronchus. Asthma can begin at 58, and a night-time cough fits asthma as well as other causes. Never having smoked and yellow sputum do not separate asthma from a local airway problem.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "huh-dental-fb-2022",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his cough, wheeze and fever?",
        options: ["Adult-onset asthma", "Aspirated dental material", "Endobronchial carcinoid tumour", "Inhaled corticosteroid reaction", "Pulmonary embolism"],
        correct: 1,
        explanation:
          "Intravenous sedation during dental work is a recognized risk for aspiration, and crowns, implant parts and teeth are the dental items most often inhaled. His symptoms began after a hard cough on waking, and the right lower lobe is the usual landing site. Only a minority of patients have the full triad of cough, wheeze and reduced breath sounds, and wheeze often leads to a wrong label of asthma. A carcinoid tumour can cause a fixed wheeze in a nonsmoker but would not begin abruptly after sedation. Embolism and a steroid reaction do not cause a fixed focal wheeze.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "huh-dental-fb-2022",
      },
      {
        id: "q3",
        kind: "single",
        update: "His chest X-ray shows right lower lobe consolidation with volume loss. No radiopaque object is seen.",
        prompt: "Which of the following is the most appropriate next step to confirm and treat the cause?",
        options: ["Flexible bronchoscopy", "Increase inhaled corticosteroid dose", "prednisone 50 mg PO daily for 5 days", "Repeat X-ray after antibiotics", "Spirometry with bronchodilator"],
        correct: 0,
        explanation:
          "Radiographs miss many aspirated objects, and collapse or consolidation may be the only sign, so a normal-looking airway on the film does not exclude a foreign body when the story fits. In a large adult series and review, flexible bronchoscopy removed the object in about 90% of cases without major complications and is the preferred first procedure in adults, done under moderate sedation. Waiting for antibiotics and a repeat film only delays removal, and the pneumonia will not clear while the bronchus stays blocked. Steroids and spirometry treat or test for asthma, which this is not.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "sehgal-fb-2015",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains his fever and right lower lobe consolidation?",
        options: ["Asthma flare from a viral infection", "Bacterial sinusitis after dental work", "Inhaled corticosteroid reaction", "Post-obstructive pneumonia", "Pulmonary embolism after sedation"],
        correct: 3,
        explanation:
          "Fever, yellow sputum and consolidation with volume loss beyond a blocked bronchus are a post-obstructive pneumonia, the most common radiographic finding in adults with an inhaled foreign body. It will not resolve until the object is removed, so antibiotics accompany bronchoscopy rather than replace it. An asthma flare does not cause lobar consolidation with volume loss. An inhaled steroid does not cause fever. Sinusitis does not explain the chest findings, and embolism does not explain a fixed focal wheeze or purulent sputum.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "sehgal-fb-2015",
      },
    ],
    sources: [S.huh, S.sehgal],
    ...META,
  },

  /* 51 Acute on chronic hypercapnia after an oxygen-driven trip -------------- */
  {
    id: "asthma-copd-51",
    topic: "asthma-copd",
    title: "Drowsy after nebulizers in the ambulance",
    stem:
      "A 72-year-old man is brought to the emergency department by ambulance with 3 days of increasing dyspnea and purulent sputum. He has severe COPD, uses home oxygen at 2 L/minute and was admitted with COPD twice last year. A clinic arterial gas 2 months ago showed a PaCO2 of 60 mmHg and a bicarbonate of 34 mmol/L. Paramedics gave salbutamol and ipratropium by a nebulizer driven by oxygen at 8 L/minute for most of the 30-minute trip. He is drowsy but rousable and follows commands. He uses his neck muscles and has quiet diffuse wheeze. Arterial gas on arrival: pH 7.26, PaCO2 82 mmHg, PaO2 92 mmHg, bicarbonate 36 mmol/L.",
    vitals: { temperature: "37.6°C oral", pulse: "112/minute", resp: "26/minute", bp: "154/88 mmHg", o2sat: "97% on nebulizer oxygen at 8 L/minute", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to give his ongoing nebulized bronchodilators?",
        options: ["Air-driven, with nasal oxygen at 2 L/minute", "Hold until his gas has improved", "Oxygen-driven at 8 L/minute, continuous", "Oxygen-driven, given every hour", "Oxygen-driven, limited to 30 minutes"],
        correct: 0,
        explanation:
          "A nebulizer driven by oxygen at 8 L/minute delivers a high, uncontrolled oxygen concentration, and in a man with chronic hypercapnia it has helped push his PaCO2 from a baseline of 60 to 82 mmHg. The BTS oxygen guideline advises driving nebulizers with compressed air for patients at risk of hypercapnic failure, with oxygen by nasal prongs at about 2 L/minute to hold the saturation at 88 to 92%. If only oxygen is available, nebulization should be limited to 6 minutes, not 30. Holding bronchodilators removes his main treatment for airflow obstruction.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "bts-oxygen-2017",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following values best indicates the severity of his acute respiratory failure?",
        options: ["Bicarbonate of 36 mmol/L", "PaCO2 of 82 mmHg", "PaO2 of 92 mmHg", "pH of 7.26", "SpO2 of 97%"],
        correct: 3,
        explanation:
          "His kidneys have retained bicarbonate for years, so his PaCO2 runs high even when he is well, and the absolute PaCO2 does not show how much has changed today. The pH falls only when CO2 rises faster than that compensation, so it measures the acute component. BTS and ICS guidance defines acute respiratory acidosis by a pH below 7.35 with a raised PCO2 and has used more severe acidosis, such as a pH below 7.25, as the point to consider invasive ventilation, so 7.26 is serious. A bicarbonate of 36 mmol/L reflects chronic compensation, and a PaO2 of 92 mmHg with an SpO2 of 97% reflects too much oxygen, not stability.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "bts-ics-ahrf-2016",
      },
      {
        id: "q3",
        kind: "single",
        update: "His nebulizers are switched to air with nasal oxygen, and his SpO2 is kept at 88 to 92%. He receives prednisone and an antibiotic.",
        prompt: "Which of the following pH thresholds, persisting with a raised PaCO2 after initial treatment, should prompt bilevel ventilation?",
        options: ["Below 7.15", "Below 7.20", "Below 7.25", "Below 7.30", "Below 7.35"],
        correct: 4,
        explanation:
          "BTS and ICS guidance uses a pH below 7.35 with a PCO2 above 6.5 kPa, about 49 mmHg, persisting after initial medical treatment as the threshold for noninvasive ventilation, and the ERS and ATS give a strong recommendation for it in acute or acute on chronic hypercapnic failure. Waiting for a pH below 7.30, 7.25, 7.20 or 7.15 lets the acidosis reach the range where invasive ventilation is considered and noninvasive support is more likely to fail. Starting early, at the 7.35 threshold, gives bilevel ventilation its best chance to work.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-ics-ahrf-2016",
      },
      {
        id: "q4",
        kind: "single",
        update: "Bilevel ventilation is started. Four days later he is back on his usual oxygen and ready to leave hospital.",
        prompt: "Which of the following is the most appropriate plan for pulmonary rehabilitation after this exacerbation?",
        options: ["Begin during this admission", "Delay for 6 months to recover", "Not indicated after bilevel ventilation", "Only once home oxygen is stopped", "Start within 3 weeks of discharge"],
        correct: 4,
        explanation:
          "The ERS and ATS conditionally recommend starting pulmonary rehabilitation within 3 weeks after discharge from a COPD admission. They recommend against starting it during the hospital stay, mainly because the largest trial of in-hospital rehabilitation was followed by higher later mortality. Delaying for 6 months loses the benefit of an early start. Home oxygen and a recent need for bilevel ventilation are not barriers to rehabilitation.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "ers-ats-copd-2017",
      },
    ],
    sources: [S.btsOxygen, S.btsIcs, S.ersAts],
    ...META,
  },

  /* 52 Drowsy teenager with a nearly silent chest --------------------------- */
  {
    id: "asthma-copd-52",
    topic: "asthma-copd",
    title: "Brought in from a group home",
    stem:
      "A 16-year-old girl is brought to the emergency department by ambulance from a group home with 6 hours of worsening breathlessness. She moved into the group home 2 months ago after a hospital admission for an overdose. She has asthma treated with a fluticasone inhaler, which staff watch her take, and a salbutamol nebulizer that she uses several times a day. She also takes montelukast at bedtime, uses a spacer and had her influenza vaccine this fall. She is in grade 11, plays competitive volleyball and works part-time at a cafe. There is a cat in the group home. She sits hunched forward, uses her accessory muscles and speaks in single words. She is drowsy and slow to respond, and her chest is nearly silent.",
    vitals: { temperature: "37.0°C oral", pulse: "138/minute", resp: "34/minute", bp: "118/70 mmHg", o2sat: "87% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings place her exacerbation in the life-threatening rather than the severe category?",
        options: ["Accessory muscle use", "Drowsy, slow to respond", "Heart rate of 138/minute", "Nearly silent chest", "Respiratory rate of 34/minute", "Sitting hunched forward", "Speaking in single words", "SpO2 of 87% on room air"],
        select: 2,
        correct: [1, 3],
        explanation:
          "In the GINA emergency department assessment, drowsiness, confusion or a silent chest mark a life-threatening exacerbation, and she has two of them. Talking in words, sitting hunched forward, a respiratory rate above 30/minute, accessory muscle use, a pulse above 120/minute and an SpO2 below 90% define a severe exacerbation. Those features are all present too, but they do not by themselves signal imminent respiratory arrest. A nearly silent chest means very little air is moving, not that the wheeze is improving.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2024",
      },
      {
        id: "q2",
        kind: "single",
        update: "She tries to blow into a peak flow meter but cannot complete the effort.",
        prompt: "Which of the following is the most appropriate approach to measuring the severity of her airflow obstruction?",
        options: ["Arterial gas before starting oxygen", "Treat now and measure peak flow later", "Use her SpO2 alone to grade severity", "Venous gas to grade severity first", "Wait for a peak flow before treating"],
        correct: 1,
        explanation:
          "GINA strongly recommends measuring peak flow or FEV1, before treatment if possible but without unduly delaying it, and again at 1 hour and until a response or plateau is clear. She is drowsy with a nearly silent chest, so salbutamol, ipratropium, oxygen and a systemic corticosteroid start now and peak flow is measured once she can blow. Blood gases are considered in patients not responding, and controlled oxygen continues while they are drawn. A gas does not need to come first. Saturation alone underestimates airflow obstruction, and oximeters can overestimate saturation in people with dark skin.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2024",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of her current treatment most increases her risk of death from asthma?",
        options: ["Daily inhaled fluticasone", "Montelukast at bedtime", "Salbutamol by home nebulizer", "Spacer for her inhaler", "Yearly influenza vaccine"],
        correct: 2,
        explanation:
          "GINA lists over-use of short-acting beta agonists, and specifically the use of nebulized salbutamol, among the factors linked to asthma-related death. Heavy home nebulizer use often reflects poor control and can let patients delay seeking care. Not using an inhaled corticosteroid is a risk factor, so her supervised daily fluticasone is protective. Montelukast, a spacer and influenza vaccination are reasonable parts of her care and are not markers of fatal asthma.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina-2024",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of her social history most increases her risk of death from asthma?",
        options: ["Cat in the group home", "Competitive volleyball", "Grade 11 student", "Part-time cafe job", "Recent overdose"],
        correct: 4,
        explanation:
          "A history of psychiatric disease or psychosocial problems is one of the GINA risk factors for asthma-related death, and an overdose needing admission 2 months ago, with a move into a group home, is both. These problems can delay recognition of an attack and reduce follow-up, so her discharge plan needs a clear action plan shared with staff. A cat can trigger symptoms in sensitized patients but is not a marker of fatal asthma. Sport, school and a part-time job are not risk factors.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina-2024",
      },
    ],
    sources: [S.gina],
    ...META,
  },
];
