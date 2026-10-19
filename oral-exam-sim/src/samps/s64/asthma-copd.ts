// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  gina: { id: "gina-2026", citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update.", url: "https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf" },
  thien: { id: "thien-thunderstorm-2018", citation: "Thien F, Beggs PJ, Csutoros D, et al. The Melbourne epidemic thunderstorm asthma event 2016: an investigation of environmental triggers, effect on health services, and patient risk factors. Lancet Planet Health. 2018.", url: "https://doi.org/10.1016/S2542-5196(18)30120-7" },
  huh: { id: "huh-dental-fb-2022", citation: "Huh JY. Foreign body aspirations in dental clinics: a narrative review. J Dent Anesth Pain Med. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9171332/" },
  sehgal: { id: "sehgal-fb-2015", citation: "Sehgal IS, Dhooria S, Ram B, et al. Foreign body inhalation in the adult population: experience of 25,998 bronchoscopies and systematic review of the literature. Respir Care. 2015.", url: "https://doi.org/10.4187/respcare.03976" },
  hcGabapentin: { id: "health-canada-gabapentin-2016", citation: "Health Canada. Summary Safety Review. Gabapentin: assessing the potential risk of serious breathing problems. 2016.", url: "https://www.canada.ca/en/health-canada/services/drugs-health-products/medeffect-canada/safety-reviews/summary-safety-review-gabapentin-assessing-potential-risk-serious-breathing.html" },
  btsIcs: { id: "bts-ics-ahrf-2016", citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. Thorax. 2016.", url: "https://doi.org/10.1136/thoraxjnl-2015-208209" },
} satisfies Record<string, Source>;

/** Expansion batch s64: asthma-copd-48 to asthma-copd-52. 2027 MCQ and menu format only. */
export const ASTHMA_COPD_S64: Samp[] = [
  /* 48 First wheeze in a storm surge, no oximeter free ------------------------ */
  {
    id: "asthma-copd-48",
    topic: "asthma-copd",
    title: "Wheezing after the walk home",
    stem:
      "You are working in a community hospital emergency department on a June evening. Since 18:00, when a thunderstorm with strong winds crossed the town, 21 people have arrived with cough and wheeze. A 29-year-old woman was walking home from a soccer field when the storm hit, and within 30 minutes she had chest tightness, cough and wheeze. She has had hay fever every June since childhood and uses a mometasone nasal spray in season. She has never been told she has asthma and has no inhalers. She has no hives, lip swelling, vomiting or fever, and she ate nothing new. She sits upright, speaks in words and uses her neck muscles. There is loud expiratory wheeze in both lungs. Her peak flow is 160 L/minute, and her predicted value is 450 L/minute. Every pulse oximeter in the department is in use.",
    vitals: { temperature: "36.9°C oral", pulse: "124/minute", resp: "32/minute", bp: "132/80 mmHg", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains her first episode of wheeze tonight?",
        options: ["Anaphylaxis to a food", "Carbon monoxide exposure", "Thunderstorm asthma", "Upper airway obstruction", "Viral bronchitis"],
        correct: 2,
        explanation:
          "A cluster of people wheezing within an hour of a storm front in grass pollen season, in a woman with lifelong grass season hay fever, fits epidemic thunderstorm asthma. In the Melbourne event of 2016, grass pollen counts were extremely high when the gust front arrived, emergency visits surged within hours, and only 28% of those who presented had a current diagnosis of asthma. She ate nothing new and has no hives, lip swelling or vomiting, which argues against anaphylaxis. Upper airway obstruction gives a harsh inspiratory noise over the neck, not expiratory wheeze through both lungs. A virus does not strike 21 people at the same hour, and carbon monoxide does not cause diffuse wheeze.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "thien-thunderstorm-2018",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oxygen plans is most appropriate for her while no oximeter is free?",
        options: ["Arterial gas before any oxygen", "High-concentration oxygen by reservoir mask", "Low-flow oxygen by nasal prongs", "Oxygen once an oximeter is free", "No oxygen unless cyanosis appears"],
        correct: 2,
        explanation:
          "She has a severe exacerbation: she speaks in words, her respiratory rate is 32/minute, her pulse is 124/minute and her peak flow of 160 L/minute is 36% of predicted. GINA states that oxygen should not be withheld when pulse oximetry is not available, and that in severe adult exacerbations controlled low-flow oxygen gives better physiological outcomes than high-concentration oxygen. Once an oximeter is free, the flow is titrated to a saturation of 93 to 95%. Blood gases are not routinely needed, and controlled oxygen continues while one is drawn. Waiting for an oximeter or for cyanosis withholds a treatment she needs now.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina-2026",
      },
      {
        id: "q3",
        kind: "single",
        update: "She receives salbutamol, ipratropium and prednisone. Her temperature stays at 36.9°C, her sputum is clear and her chest X-ray shows hyperinflation only. Her white cell count is 12.8 x 10^9/L.",
        prompt: "Which of the following antimicrobial plans is most appropriate for her now?",
        options: ["amoxicillin 1 g PO three times daily", "azithromycin 500 mg PO daily for 3 days", "doxycycline 100 mg PO twice daily", "oseltamivir 75 mg PO twice daily", "No antimicrobial treatment"],
        correct: 4,
        explanation:
          "GINA advises against routine antibiotics in asthma exacerbations unless there is strong evidence of lung infection, such as fever, purulent sputum or pneumonia on the chest X-ray. She has none of these: she is afebrile, her sputum is clear and her film shows only hyperinflation. A white cell count of 12.8 x 10^9/L is not one of those features, and her attack has an allergic trigger. Amoxicillin, doxycycline and azithromycin would add side effects without benefit. She has no influenza-like illness, so oseltamivir has no role.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "gina-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "Four hours later her peak flow is 370 L/minute and she walks the corridor without distress. She will go home on budesonide-formoterol, with follow-up in 3 days.",
        prompt: "Which of the following advice will best reduce her risk during future storms in the grass pollen season?",
        options: ["Avoid all exercise until autumn", "Stay indoors with windows shut in storms", "Stop her nasal corticosteroid spray", "Take cetirizine only on storm days", "Use salbutamol before going outdoors each day"],
        correct: 1,
        explanation:
          "Her peak flow has risen to 82% of predicted (370 of 450 L/minute). GINA notes that thunderstorms raise the level of respirable grass pollen allergens and can trigger epidemics of asthma, and advises sensitized patients to reduce exposure when counts are highest by staying indoors with windows and doors closed. Intranasal corticosteroids are recommended for allergic rhinitis, so her spray should continue. An antihistamine on storm days does not replace her ICS-containing inhaler. Regular salbutamol can worsen asthma or mask deterioration. GINA encourages regular physical activity, so she should not stop exercising.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina-2026",
      },
    ],
    sources: [S.thien, S.gina],
    ...META,
  },

  /* 49 An older man who underrates his attack ------------------------------- */
  {
    id: "asthma-copd-49",
    topic: "asthma-copd",
    title: "Only a little tight",
    stem:
      "A 69-year-old man presents to the emergency department with 4 days of cough and chest tightness after a cold. His asthma was diagnosed at age 50, and 6 years ago he was admitted to an intensive care unit with asthma. He takes budesonide-formoterol 200/6 mcg, one inhalation twice daily and as needed, and has used about 10 inhalations a day for 2 days. He has type 2 diabetes treated with metformin and lives alone. He says his breathing is only a little tight and rates it 3 out of 10. He speaks in full sentences and has scattered expiratory wheeze. His peak flow is 150 L/minute. His personal best, recorded at a clinic visit last year, is 480 L/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "24/minute", bp: "148/86 mmHg", o2sat: "93% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings best shows that he perceives his airflow limitation poorly?",
        options: ["Full sentences when speaking", "His rating of 3 out of 10", "Pulse of 108/minute", "Reliever used 10 times a day", "SpO2 of 93% on room air"],
        correct: 1,
        explanation:
          "His peak flow of 150 L/minute is 31% of his personal best of 480 L/minute, yet he rates his breathing as only 3 out of 10. GINA describes impaired perception as few symptoms despite low lung function, and notes it is common in older adults. Full sentences, a pulse of 108/minute and an SpO2 of 93% are signs measured by others, not his own sense of breathlessness. Using his reliever 10 times a day shows that he did notice something and acted on it.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2026",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following, if present in his history, would add most to his risk of death from asthma?",
        options: ["Allergy to tree pollen", "Gastroesophageal reflux", "Obstructive sleep apnea", "Peanut allergy with anaphylaxis", "Weight gain of 6 kg"],
        correct: 3,
        explanation:
          "Food allergy or a history of anaphylaxis in a person with asthma is one of the GINA risk factors for asthma-related death, and a past anaphylactic reaction to peanut shows that the allergy is real and severe. His past ICU admission and his diabetes already raise his risk. Pollen allergy, reflux, sleep apnea and weight gain can all worsen asthma control and are worth treating, but none of them is a listed marker of fatal asthma.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina-2026",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is kept overnight in the emergency department. The next morning his peak flow is 400 L/minute and he walks the corridor without distress. Prednisone 50 mg PO daily for 5 days is prescribed.",
        prompt: "Which of the following changes to his budesonide-formoterol is most appropriate at discharge?",
        options: ["Maintenance 1 inhalation once daily", "Maintenance 1 inhalation twice daily", "Maintenance 2 inhalations twice daily", "Maintenance 4 inhalations twice daily", "Reliever use only, without maintenance"],
        correct: 2,
        explanation:
          "His peak flow is now 83% of his best (400 of 480 L/minute), and the prednisone treats this flare. One maintenance inhalation twice daily is Step 3 MART. After an emergency department presentation, GINA advises starting MART at Step 4, which for budesonide-formoterol 200/6 mcg is 2 inhalations twice daily plus 1 as needed, and stepping down once he has been stable for 2 to 3 months. Staying on 1 inhalation twice daily ignores the higher risk that a severe exacerbation signals, and dropping to once daily or reliever only steps his treatment down. Four inhalations twice daily is high-dose ICS-formoterol, which GINA does not recommend for MART.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina-2026",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following discharge measures best addresses how he underestimated this attack?",
        options: ["Home nebulizer for salbutamol", "Home oximeter for daily saturation checks", "Salbutamol added to his MART inhaler", "Spirometry in 6 months", "Written action plan with peak flow meter"],
        correct: 4,
        explanation:
          "He felt only a little tight with a peak flow of 31% of his best, so his symptoms cannot be trusted to warn him. GINA suggests long-term peak flow monitoring for patients with poor perception of airflow limitation, and guided self-management with self-monitoring and a written action plan cuts asthma admissions and emergency visits by one-third to two-thirds. A home nebulizer offers no advantage over his inhaler, and nebulized salbutamol use is itself a marker of fatal asthma risk. An oximeter does not measure airflow, and his saturation was 93% even with a peak flow of 31%. Patients on maintenance and reliever therapy use budesonide-formoterol as their reliever rather than adding salbutamol, and spirometry in 6 months does not help him detect the next attack.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina-2026",
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
        prompt: "Which of the following diagnoses best explains his illness over the past 9 days?",
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
        update: "His chest X-ray shows right lower lobe consolidation with volume loss.",
        prompt: "Which of the following is the most appropriate next step to confirm and treat the cause?",
        options: ["Flexible bronchoscopy", "Increase inhaled corticosteroid dose", "prednisone 50 mg PO daily for 5 days", "Repeat X-ray after antibiotics", "Spirometry with bronchodilator"],
        correct: 0,
        explanation:
          "In a large adult series, the inhaled object itself was seen on imaging in only about a quarter of patients, and nonresolving pneumonia and segmental collapse were the commonest findings. Consolidation with volume loss is what his film shows, and it does not need a visible object to confirm the story. In that series and its systematic review, flexible bronchoscopy removed the object in about 90% of cases without major complications and is the preferred first procedure in adults. Waiting for antibiotics and a repeat film only delays removal, and the pneumonia will not clear while the bronchus stays blocked. Steroids and spirometry treat or test for asthma, which this is not.",
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
  /* 51 Hypercapnic COPD on a new drug, bilevel ventilation set-up ---------- */
  {
    id: "asthma-copd-51",
    topic: "asthma-copd",
    title: "Hard to rouse after a bad week",
    stem:
      "A 74-year-old woman is brought to the emergency department by ambulance with 3 days of increasing breathlessness and purulent sputum. She has COPD with an FEV1 of 31% of predicted. She takes tiotropium-olodaterol, amlodipine, rosuvastatin and acetaminophen, and 3 weeks ago she started gabapentin 300 mg twice daily for pain after shingles. Her eGFR is 38 mL/minute/1.73 m2. She lives with her husband, walks to the corner store daily and has told her family physician she wants full treatment. After 1 hour of nebulized salbutamol and ipratropium, prednisone, doxycycline and oxygen titrated to 88 to 92%, she is drowsy but rousable and follows commands. Arterial gas: pH 7.29, PaCO2 69 mmHg, PaO2 60 mmHg, bicarbonate 32 mmol/L.",
    vitals: { temperature: "37.4°C oral", pulse: "104/minute", resp: "26/minute", bp: "146/82 mmHg", o2sat: "90% on 2 L/minute by nasal prongs", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following medications most likely contributed to her drowsiness and hypercapnia?",
        options: ["gabapentin", "ipratropium", "prednisone", "rosuvastatin", "tiotropium-olodaterol"],
        correct: 0,
        explanation:
          "Health Canada reviewed reports of serious breathing problems with gabapentin, including when it is taken alone, and found the risk higher in older adults and in people with lung or kidney disease that affects breathing. She is 74, has severe COPD and an eGFR of 38, and started gabapentin 3 weeks ago, so it may be adding to her drowsiness and hypoventilation. Its prescriber should be told and the drug reviewed. Ipratropium, prednisone and rosuvastatin are not known to depress breathing, and tiotropium-olodaterol is her long-acting bronchodilator.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "health-canada-gabapentin-2016",
      },
      {
        id: "q2",
        kind: "single",
        update: "Bilevel ventilation is to be started in the resuscitation room with a respiratory therapist.",
        prompt: "Which of the following is the most appropriate interface for starting her bilevel ventilation?",
        options: ["Full face mask", "Helmet interface", "High-flow nasal cannula", "Nasal mask only", "Nasal pillows"],
        correct: 0,
        explanation:
          "BTS and ICS guidance advises a full face mask as the usual first interface, because mouth breathing predominates in acute hypercapnic failure, and a range of mask sizes should be at hand. A nasal mask or nasal pillows leak through the open mouth, and pillows dislodge more easily, so they are kept for patients who cannot tolerate a full face mask. A helmet triggers poorly and cannot deliver humidified gas. High-flow nasal cannula does not deliver bilevel pressure support.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-ics-ahrf-2016",
      },
      {
        id: "q3",
        kind: "single",
        update: "Bilevel ventilation runs at IPAP 16 and EPAP 5 cm H2O. After 1 hour her pH is 7.28 and PaCO2 72 mmHg. Air hisses from around the interface, and the ventilator often misses her breaths.",
        prompt: "Which of the following is the most appropriate next step in her ventilation?",
        options: ["Increase oxygen to 6 L/minute", "Intubate for failed NIV", "Lower the IPAP to 10 cm H2O", "Refit or change the mask", "Switch to high-flow nasal oxygen"],
        correct: 3,
        explanation:
          "A large leak explains both the missed breaths and the unchanged gas. BTS and ICS guidance says that before NIV is judged to have failed, common technical problems must be fixed, and excessive leak is the first cause to correct when the ventilator does not trigger despite visible effort. Failure means acidosis that persists or worsens despite optimized delivery, which has not yet been tried. Oxygen flows above 4 L/minute can worsen leak and asynchrony, and settings should be optimized before FiO2 is raised. Lowering the IPAP reduces her ventilation. Switching to high-flow oxygen abandons pressure support before it has been delivered properly.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-ics-ahrf-2016",
      },
      {
        id: "q4",
        kind: "menu",
        update: "The leak is fixed. A resident wonders whether intensive care would be futile for someone with her lung function if she later needs intubation.",
        prompt: "Which of the following statements about her outcome if she needs invasive ventilation are most accurate?",
        options: ["FEV1 below 35% rules out intubation", "Her age alone makes ICU care futile", "Most intubated patients die in hospital", "Most survivors would choose it again", "Prognostic scores predict her outcome well", "Survival is often underestimated"],
        select: 2,
        correct: [3, 5],
        explanation:
          "BTS and ICS guidance warns that clinicians are likely to underestimate survival in COPD exacerbations treated with invasive ventilation. In one study, 62% of patients survived to 180 days when the predicted survival was 49%, and most patients who survive invasive ventilation say they would choose it again. Prognostic tools can inform the discussion but predict poorly for one patient, so neither her FEV1 of 31% nor her age alone settles the question. Since most intubated patients survive to leave hospital, her stated wish for full treatment should guide the plan.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-ics-ahrf-2016",
      },
    ],
    sources: [S.hcGabapentin, S.btsIcs],
    ...META,
  },

  /* 52 Drowsy teenager with a nearly silent chest --------------------------- */
  {
    id: "asthma-copd-52",
    topic: "asthma-copd",
    title: "Brought in from a group home",
    stem:
      "A 16-year-old girl is brought to the emergency department by ambulance from her group home with 6 hours of worsening breathlessness after a cold. She has asthma and takes fluticasone 250 mcg twice daily, which staff watch her take. She uses salbutamol by pMDI and spacer and has taken 12 puffs since this morning. She sits hunched forward, uses her accessory muscles and speaks in single words. She is drowsy and slow to respond, and her chest is nearly silent.",
    vitals: { temperature: "37.0°C oral", pulse: "138/minute", resp: "34/minute", bp: "118/70 mmHg", o2sat: "87% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "She tries to blow into a peak flow meter but cannot complete the effort.",
        prompt: "Which of the following is the most appropriate approach to measuring the severity of her airflow obstruction?",
        options: ["Arterial gas before starting oxygen", "Treat now and measure peak flow later", "Use her SpO2 alone to grade severity", "Venous gas to grade severity first", "Wait for a peak flow before treating"],
        correct: 1,
        explanation:
          "GINA strongly recommends measuring peak flow or FEV1, before treatment if possible but without unduly delaying it, and again at 1 hour and until a response or plateau is clear. She is drowsy with a nearly silent chest, so salbutamol, ipratropium, oxygen and a systemic corticosteroid start now and peak flow is measured once she can blow. Blood gases are considered in patients not responding, and controlled oxygen continues while they are drawn. A gas does not need to come first. Saturation alone underestimates airflow obstruction, and oximeters can overestimate saturation in people with dark skin.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2026",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to deliver her salbutamol?",
        options: ["Breath-actuated pMDI", "Dry powder inhaler with a breath hold", "IV infusion titrated to response", "Nebulizer by face mask", "pMDI and spacer with a mouthpiece"],
        correct: 3,
        explanation:
          "She is drowsy, speaks in single words and moves very little air, so she cannot seal a mouthpiece, time a breath or draw hard enough to trigger a breath-actuated or dry powder device. GINA notes that a pMDI with a spacer works as well as a nebulizer in most exacerbations, but patients with life-threatening asthma were not included in those studies and the evidence is weaker in near-fatal asthma. A nebulizer by face mask needs no effort from her and runs alongside her oxygen. GINA does not support routine IV beta2-agonists in severe exacerbations.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina-2026",
      },
      {
        id: "q3",
        kind: "single",
        update: "Forty minutes later she is more alert and speaks in short phrases. Her wheeze is now loud throughout both lungs.",
        prompt: "Which of the following best explains the louder wheeze she now has?",
        options: ["Increasing bronchospasm", "Mucus plugging", "New pneumothorax", "Salbutamol toxicity", "Widening of her airways"],
        correct: 4,
        explanation:
          "GINA notes that wheeze may be absent in a severe exacerbation because airflow is so reduced, and that a quiet chest means too little ventilation to produce a wheeze. Her louder wheeze, together with better alertness and longer phrases, means more air is moving through airways that are opening. Worsening bronchospasm would bring more distress, not less. A mucus plug or a pneumothorax reduces breath sounds over one area rather than making wheeze louder everywhere. Salbutamol toxicity causes tachycardia, tremor, low potassium and lactic acidosis, not wheeze.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina-2026",
      },
      {
        id: "q4",
        kind: "single",
        update: "She is to be admitted to the ward on prednisone 50 mg PO daily.",
        prompt: "Which of the following plans for her daily fluticasone is most appropriate while she is in hospital?",
        options: ["Continue it at her usual dose", "Hold it while on nebulizers", "Replace it with montelukast", "Stop it during the prednisone course", "Switch to salmeterol alone"],
        correct: 0,
        explanation:
          "GINA advises that patients admitted to hospital for an asthma exacerbation should continue, or be prescribed, ICS-containing treatment, because inhaled corticosteroids lower the risk of later severe attacks and asthma death. Prednisone treats this flare but does not replace her daily controller, so holding or stopping it while she takes prednisone or nebulizers leaves a gap. Montelukast is less effective than an inhaled corticosteroid. GINA advises against treating asthma with a long-acting beta2-agonist such as salmeterol without an inhaled corticosteroid.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina-2026",
      },
    ],
    sources: [S.gina],
    ...META,
  },
];
