// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

const GINA: Source = {
  id: "gina",
  citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2024 update.",
  url: "https://ginasthma.org",
};
const CTS_ASTHMA: Source = {
  id: "cts-asthma",
  citation:
    "Yang CL, Hicks EA, Mitchell P, et al. Canadian Thoracic Society 2021 guideline update. Diagnosis and management of asthma in preschoolers, children and adults. Can J Respir Crit Care Sleep Med. 2021.",
  url: "https://doi.org/10.1080/24745332.2021.1945887",
};
const GOLD: Source = {
  id: "gold",
  citation:
    "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease. 2024 report.",
  url: "https://goldcopd.org",
};
const CTS_COPD: Source = {
  id: "cts-copd",
  citation:
    "Bourbeau J, Bhutani M, Hernandez P, et al. 2023 Canadian Thoracic Society guideline on pharmacotherapy in patients with stable COPD. Can J Respir Crit Care Sleep Med. 2023.",
  url: "https://doi.org/10.1080/24745332.2023.2231451",
};
const NIV: Source = {
  id: "ers-ats-niv",
  citation:
    "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.",
  url: "https://doi.org/10.1183/13993003.02426-2016",
};
const TREKK_ASTHMA: Source = {
  id: "trekk-asthma",
  citation: "TREKK. Bottom Line Recommendations. Asthma exacerbations for children aged 12 months and older. Version 2.1. 2024.",
  url: "https://cms.trekk.ca/wp-content/uploads/2023/11/2024_02_26_Asthma-BLR_FINAL_v2.1.pdf",
};
const ROSEN: Source = {
  id: "rosen",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. 2023.",
};
const CCS_HF: Source = {
  id: "ccs-hf",
  citation:
    "Ezekowitz JA, O'Meara E, McDonald MA, et al. 2017 comprehensive update of the Canadian Cardiovascular Society guidelines for the management of heart failure. Can J Cardiol. 2017.",
  url: "https://onlinecjc.ca/article/S0828-282X(17)30973-X/fulltext",
};
const BTS_PLEURAL: Source = {
  id: "bts-pleural",
  citation: "Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023.",
  url: "https://pubmed.ncbi.nlm.nih.gov/37553157/",
};
const ATLS: Source = {
  id: "atls",
  citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 10th edition. 2018.",
};
const CAP: Source = {
  id: "ats-idsa-cap",
  citation:
    "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the ATS and IDSA. Am J Respir Crit Care Med. 2019.",
};
const PE_COPD: Source = {
  id: "aleva-pe-copd",
  citation:
    "Aleva FE, Voets LWLM, Simons SO, et al. Prevalence and localization of pulmonary embolism in unexplained acute exacerbations of COPD. A systematic review and meta-analysis. Chest. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/27522956/",
};
const THROMBOSIS_CANADA: Source = {
  id: "thrombosis-canada",
  citation: "Thrombosis Canada. Clinical guides. Pulmonary embolism (PE): diagnosis. 2025. Pulmonary embolism (PE): treatment. 2023.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf",
};
const WAO: Source = {
  id: "wao-anaphylaxis",
  citation: "Cardona V, Ansotegui IJ, Ebisawa M, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020.",
  url: "https://doi.org/10.1016/j.waojou.2020.100472",
};
const MG_COCHRANE: Source = {
  id: "cochrane-mg",
  citation:
    "Kew KM, Kirtchuk L, Michell CI. Intravenous magnesium sulfate for treating adults with acute asthma in the emergency department. Cochrane Database Syst Rev. 2014.",
  url: "https://doi.org/10.1002/14651858.CD010909.pub2",
};

export const ASTHMA_COPD_SAMPS: Samp[] = [
  {
    id: "asthma-copd-01",
    topic: "asthma-copd",
    title: "Breathless after a cold",
    stem:
      "A 26-year-old woman with asthma since childhood arrives by ambulance with two days of worsening breathlessness after a cold. She has used her salbutamol inhaler every hour since last night. She speaks in short phrases, uses her neck muscles to breathe and has diffuse expiratory wheeze.",
    vitals: { temperature: "37.4°C", pulse: "124/minute", resp: "30/minute", bp: "128/76 mmHg", o2sat: "90% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What elements of her past asthma history would place her at high risk of a fatal or near fatal attack?",
        required: 3,
        accept: [
          { id: "icu", text: "Previous intubation or ICU admission for asthma", match: ["intubation", "intubated", "icu", "intensive care", "mechanical ventilation", "ventilated"] },
          { id: "visits", text: "Hospital admission or repeated ED visits for asthma in the past year", match: ["hospitalization", "hospitalisation", "admission", "admitted", "ed visit", "emergency visit", "emergency department visit", "er visit", "frequent visit"] },
          { id: "ocs", text: "Recent or current oral corticosteroid use", match: ["oral steroid", "oral corticosteroid", "prednisone", "systemic steroid", "systemic corticosteroid", "recent steroid"] },
          { id: "saba", text: "Overuse of salbutamol, such as more than one canister a month", match: ["salbutamol", "saba", "ventolin", "canister", "reliever", "rescue inhaler", "blue puffer"] },
          { id: "ics", text: "Not using or poor adherence to inhaled corticosteroid", match: ["ics", "inhaled corticosteroid", "inhaled steroid", "controller", "adherence", "nonadherence", "compliance", "noncompliance"] },
          { id: "psych", text: "Psychiatric illness or major psychosocial problems", match: ["psychiatric", "psychosocial", "depression", "mental health", "substance", "social"] },
          { id: "food", text: "Confirmed food allergy", match: ["food allergy", "food allergie"] },
          { id: "perception", text: "Poor perception of airflow obstruction", match: ["perception", "poor perceiver"] },
        ],
        explanation:
          "Prior intubation or ICU care is the strongest single marker of a future fatal attack. Recent admissions, recent oral steroids, heavy reliever use and no inhaled corticosteroid all signal poor control. These patients need a lower threshold for escalation and admission.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What medications, with the dose and route of each, would you give in the first 20 minutes?",
        required: 3,
        accept: [
          { id: "salb", text: "Salbutamol 5 mg by nebulizer or 4 to 8 puffs by MDI with spacer, every 20 minutes", match: ["salbutamol 5 mg", "salbutamol 5mg", "salbutamol 2.5 mg", "salbutamol 2.5mg", "salbutamol 4 puff", "salbutamol 5 puff", "salbutamol 6 puff", "salbutamol 8 puff", "salbutamol 10 puff", "salbutamol 400 mcg", "salbutamol 800 mcg", "ventolin 5 mg", "ventolin 8 puff"] },
          { id: "ipra", text: "Ipratropium 500 mcg by nebulizer or 4 to 8 puffs by MDI with spacer, every 20 minutes for 3 doses", match: ["ipratropium 500", "ipratropium 500mcg", "ipratropium 0.5 mg", "ipratropium 0.5mg", "ipratropium 4 puff", "ipratropium 6 puff", "ipratropium 8 puff", "atrovent 500", "atrovent 4 puff", "atrovent 8 puff"] },
          { id: "steroid", text: "Prednisone 50 mg PO, or methylprednisolone 125 mg IV if unable to swallow", match: ["prednisone 40", "prednisone 50", "prednisone 60", "prednisone 40mg", "prednisone 50mg", "prednisone 60mg", "prednisolone 40", "prednisolone 50", "methylprednisolone 40", "methylprednisolone 60", "methylprednisolone 80", "methylprednisolone 125", "methylprednisolone 125mg", "solumedrol 125", "dexamethasone 10", "dexamethasone 12", "dexamethasone 16", "dexamethasone 10mg", "hydrocortisone 100", "hydrocortisone 200"] },
          { id: "o2", text: "Oxygen titrated to SpO2 93 to 95%", match: ["oxygen", "o2"] },
          { id: "mg", text: "Magnesium sulfate 2 g IV over 20 minutes", match: ["magnesium 2 g", "magnesium sulfate 2", "mgso4 2", "magnesium 2", "magnesium 2g", "magnesium sulfate 2g", "mgso4 2g"] },
        ],
        unacceptable: [
          { text: "Sedative for anxiety", match: ["lorazepam", "midazolam", "benzodiazepine", "sedative"], dangerous: true },
          { text: "Aminophylline or theophylline", match: ["aminophylline", "theophylline"] },
          { text: "Antibiotic without evidence of bacterial infection", match: ["antibiotic", "azithromycin", "amoxicillin"] },
        ],
        explanation:
          "Repeated inhaled salbutamol plus ipratropium reduces admissions in moderate to severe attacks. Systemic steroids should be given within the first hour. Oxygen is titrated to 93 to 95% in adults. Sedatives can precipitate respiratory arrest and have no role outside intubation.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        update: "After three rounds of bronchodilators she says she feels a little better. Pulse is 116/minute, respiratory rate 26/minute and SpO2 94% on 2 L/minute by nasal prongs.",
        prompt: "Which of the following is the most useful objective measure of the severity of her attack now?",
        options: [
          "Loudness of the wheeze on chest auscultation",
          "Oxygen saturation on 2 L/minute by nasal prongs",
          "Patient rating of breathlessness on a numeric rating scale",
          "Peak flow or FEV1 compared with predicted or personal best",
          "Portable chest radiograph for hyperinflation",
        ],
        correct: 3,
        explanation:
          "Peak flow or FEV1 as a percentage of predicted or personal best is the standard objective measure and guides disposition. Symptoms and wheeze correlate poorly with obstruction, and a quiet chest can mean severe disease. Saturation on supplemental oxygen hides the degree of obstruction.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "cts-asthma",
      },
      {
        id: "q4",
        kind: "short",
        update: "One hour later her peak flow is 38% of predicted and her pulse is 118/minute. She is alert and tiring slightly.",
        prompt: "What further treatments, with the dose of any drug, would you now add?",
        required: 2,
        accept: [
          { id: "mg", text: "Magnesium sulfate 2 g IV over 20 minutes", match: ["magnesium 2 g", "magnesium sulfate 2", "mgso4 2", "magnesium 2", "mag sulfate 2", "magnesium 2g", "magnesium sulfate 2g", "mgso4 2g"] },
          { id: "cont", text: "Continuous nebulized salbutamol, about 10 to 15 mg per hour", match: ["continuous salbutamol", "continuous neb", "continuous nebulized", "salbutamol 10 mg", "salbutamol 15 mg", "back to back salbutamol"] },
          { id: "icu", text: "Early ICU or critical care consultation", match: ["icu", "critical care", "intensivist"] },
          { id: "niv", text: "Trial of BiPAP with close monitoring in a resuscitation bay", match: ["bipap", "noninvasive", "non invasive", "niv", "cpap"] },
          { id: "heliox", text: "Heliox driven nebulization where available", match: ["heliox"] },
        ],
        unacceptable: [
          { text: "Sedation to settle anxiety", match: ["lorazepam", "midazolam", "benzodiazepine", "sedative", "haloperidol"], dangerous: true },
          { text: "Aminophylline or theophylline", match: ["aminophylline", "theophylline"] },
        ],
        explanation:
          "IV magnesium reduces admission in adults with severe attacks not responding to initial therapy. Continuous salbutamol and early critical care involvement are appropriate. Methylxanthines add toxicity without benefit and are not recommended.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "cochrane-mg",
      },
    ],
    sources: [GINA, CTS_ASTHMA, MG_COCHRANE],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-02",
    topic: "asthma-copd",
    title: "Drowsy after the ambulance ride",
    stem:
      "A 71-year-old man with COPD (FEV1 38% of predicted) has three days of increased breathlessness with more sputum that has turned green. Paramedics gave oxygen by non-rebreather mask at 15 L/minute. He is now drowsy but rousable to voice. Venous gas: pH 7.24, pCO2 82 mmHg, HCO3 34 mmol/L.",
    vitals: { temperature: "37.8°C", pulse: "108/minute", resp: "28/minute", bp: "152/88 mmHg", o2sat: "99% on non-rebreather mask at 15 L/minute", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings in this presentation indicate a severe, life threatening exacerbation?",
        required: 3,
        accept: [
          { id: "loc", text: "Drowsiness or decreased level of consciousness", match: ["drowsy", "drowsiness", "decreased loc", "level of consciousness", "altered mental", "confusion", "mental status", "somnolent", "obtunded"] },
          { id: "ph", text: "Acidemia with pH below 7.35", match: ["ph", "acidemia", "acidosis", "acidaemia"] },
          { id: "co2", text: "Marked hypercapnia with pCO2 82 mmHg", match: ["pco2", "hypercapnia", "hypercarbia", "co2", "carbon dioxide"] },
          { id: "rr", text: "Tachypnea with RR 28", match: ["tachypnea", "tachypnoea", "respiratory rate", "rr 28", "rr"] },
          { id: "hr", text: "Tachycardia with HR 108", match: ["tachycardia", "hr 108", "heart rate"] },
        ],
        explanation:
          "Altered mental status and an acute respiratory acidosis define a life threatening exacerbation. Tachypnea and tachycardia add to the severity grade. The raised bicarbonate shows chronic retention with an acute rise on top. A high saturation on a non-rebreather is not reassuring here and may be part of the cause.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gold",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oxygen saturation targets is most appropriate for him?",
        options: [
          "85 to 88%",
          "88 to 92%",
          "94 to 98%",
          "98 to 100%",
          "No target while he is on the non-rebreather mask",
        ],
        correct: 1,
        explanation:
          "In COPD with hypercapnia, oxygen is titrated to 88 to 92%, often with a Venturi mask. High flow oxygen worsens hypercapnia through ventilation perfusion mismatch and the Haldane effect. Oxygen should never be withdrawn abruptly in a hypoxic patient.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "gold",
      },
      {
        id: "q3",
        kind: "short",
        update: "Oxygen is weaned and you decide to start BiPAP.",
        prompt: "What contraindications to noninvasive ventilation must you check for before starting?",
        required: 3,
        accept: [
          { id: "airway", text: "Unable to protect the airway or coma", match: ["protect airway", "protect the airway", "airway protection", "not protect airway", "no airway protection", "coma", "gcs", "unconscious", "unresponsive"] },
          { id: "vomit", text: "Active vomiting or upper GI bleeding", match: ["vomiting", "vomit", "gi bleed", "hematemesis", "upper gi"] },
          { id: "face", text: "Facial trauma, burns or deformity preventing a mask seal", match: ["facial", "face", "mask seal", "mask fit"] },
          { id: "shock", text: "Hemodynamic instability or shock", match: ["hemodynamic", "haemodynamic", "shock", "hypotension", "unstable"] },
          { id: "arrest", text: "Respiratory or cardiac arrest", match: ["arrest", "apnea", "apnoea", "agonal"] },
          { id: "ptx", text: "Undrained pneumothorax", match: ["pneumothorax"] },
          { id: "secretions", text: "Copious secretions he cannot clear", match: ["secretion"] },
          { id: "agitation", text: "Severe agitation or inability to cooperate", match: ["agitation", "agitated", "uncooperative", "combative", "cooperate"] },
          { id: "surgery", text: "Recent upper airway or esophageal surgery", match: ["esophageal surgery", "oesophageal surgery", "upper airway surgery", "gastric surgery"] },
        ],
        explanation:
          "NIV requires a patient who can protect the airway, cooperate and maintain a mask seal. Drowsiness from hypercapnia alone is not a contraindication if he rouses and improves quickly, but he needs close watching. Vomiting, facial injury, shock and an undrained pneumothorax are standard exclusions.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "ers-ats-niv",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What systemic corticosteroid would you prescribe, including the drug, dose and duration?",
        required: 1,
        accept: [
          { id: "pred", text: "Prednisone 40 mg PO daily for 5 days, or an IV equivalent such as methylprednisolone while he is on BiPAP", match: ["prednisone 40", "prednisone 30", "prednisone 50", "prednisone 40mg", "prednisone 50mg", "prednisolone 40", "prednisolone 30", "prednisolone 50", "methylprednisolone 40", "methylprednisolone 60", "methylprednisolone 125", "methylprednisolone 125mg", "solumedrol 125"] },
        ],
        unacceptable: [
          { text: "Prolonged course of 14 days or more", match: ["14 day", "two week", "2 week", "3 week", "month"] },
        ],
        explanation:
          "Prednisone 40 mg daily for 5 days is as effective as longer courses and causes fewer adverse effects. Oral dosing is equivalent to IV when the patient can swallow. While he is drowsy on BiPAP an IV dose is reasonable, then switch to oral. Longer courses add hyperglycemia and myopathy without benefit.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gold",
      },
      {
        id: "q5",
        kind: "single",
        update: "After one hour on BiPAP he is more alert. Repeat venous gas: pH 7.30, pCO2 70 mmHg.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Continue BiPAP, gas in 1 to 2 hours, monitored bed",
          "Discharge home with prednisone and antibiotics",
          "Give lorazepam to improve mask tolerance",
          "Proceed to rapid sequence intubation now",
          "Stop BiPAP and switch to nasal prongs at 2 L/minute",
        ],
        correct: 0,
        explanation:
          "Improving pH and mental status within one to two hours predict NIV success. The trend matters more than an absolute pCO2 in a chronic retainer. He needs continued NIV and admission to a monitored setting with serial gases. A pCO2 still above 60 mmHg is not by itself a reason to intubate while pH and alertness improve.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "ers-ats-niv",
      },
    ],
    sources: [GOLD, NIV],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-03",
    topic: "asthma-copd",
    alsoTopics: ["sob"],
    title: "A toddler who started wheezing",
    stem:
      "A 22-month-old boy is brought in with cough and wheeze that began suddenly yesterday afternoon. His mother says he had a coughing and gagging spell while his older brother was sharing a bag of trail mix. He has never wheezed before and has no fever. There is a monophonic wheeze and reduced air entry over the right chest. No stridor.",
    vitals: { temperature: "36.9°C", pulse: "130/minute", resp: "36/minute", o2sat: "95% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What diagnoses other than asthma would you consider for a first episode of wheeze in this child?",
        required: 3,
        accept: [
          { id: "fb", text: "Aspirated foreign body", match: ["foreign body", "aspiration", "aspirated", "fb"] },
          { id: "bronchiolitis", text: "Bronchiolitis", match: ["bronchiolitis", "rsv"] },
          { id: "pneumonia", text: "Pneumonia", match: ["pneumonia"] },
          { id: "croup", text: "Croup", match: ["croup", "laryngotracheobronchitis"] },
          { id: "anaphylaxis", text: "Anaphylaxis, for example to nuts", match: ["anaphylaxis", "allergic reaction"] },
          { id: "congenital", text: "Congenital airway or vascular anomaly such as a vascular ring or tracheomalacia", match: ["vascular ring", "tracheomalacia", "bronchomalacia", "congenital", "malacia"] },
          { id: "cardiac", text: "Heart failure from congenital heart disease or myocarditis", match: ["heart failure", "myocarditis", "cardiac", "congenital heart"] },
          { id: "reflux", text: "Aspiration from reflux or swallowing dysfunction", match: ["reflux", "gerd", "swallowing"] },
        ],
        unacceptable: [{ text: "Reactive airway disease", match: ["reactive airway"] }],
        explanation:
          "Not all that wheezes is asthma, especially in a first episode. In a toddler with a sudden choking spell and a focal wheeze, foreign body aspiration leads the list. Infection, anaphylaxis and structural lesions complete a sensible differential.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial imaging for this child?",
        options: [
          "Anteroposterior and lateral inspiratory chest radiographs",
          "CT of the chest with IV contrast",
          "Inspiratory and expiratory, or decubitus, chest films",
          "Lateral soft tissue neck radiograph only",
          "No imaging, treat as asthma and reassess",
        ],
        correct: 2,
        explanation:
          "Most aspirated nuts are radiolucent. Air trapping on an expiratory or dependent decubitus film is the typical clue, with the affected lung failing to deflate. A normal radiograph does not exclude the diagnosis when the history is suggestive. Bilateral decubitus films replace the expiratory film when a child cannot cooperate.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        update: "The decubitus films show persistent hyperinflation of the right lung when he lies on his right side.",
        prompt: "What are the next steps in management?",
        required: 2,
        accept: [
          { id: "bronch", text: "Urgent consultation for rigid bronchoscopy by ENT, pediatric surgery or respirology", match: ["bronchoscopy", "ent", "otolaryngology", "pediatric surgery", "paediatric surgery", "thoracic surgery", "respirology"] },
          { id: "npo", text: "Keep him NPO", match: ["npo", "nil by mouth", "nothing by mouth", "fasting"] },
          { id: "calm", text: "Keep him calm with a parent in a position of comfort and avoid agitating procedures", match: ["calm", "position of comfort", "parent", "avoid agitation", "comfort"] },
          { id: "monitor", text: "Continuous monitoring with airway equipment ready in case the object moves", match: ["monitor", "airway equipment", "resuscitation bay", "observe"] },
        ],
        unacceptable: [
          { text: "Blind finger sweep", match: ["finger sweep", "blind sweep"], dangerous: true },
          { text: "Abdominal thrusts or back blows in a child who is moving air", match: ["heimlich", "abdominal thrust", "back blow", "chest thrust"], dangerous: true },
          { text: "Discharge home", match: ["discharge"], dangerous: true },
        ],
        explanation:
          "An aspirated foreign body needs removal by rigid bronchoscopy. While waiting, keep him calm, fasting and monitored. Thrusts or back blows are for a child who cannot cough or breathe, and here they could move a partial obstruction into the trachea.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What features on history or examination should make you suspect an inhaled foreign body in any wheezing child?",
        required: 2,
        accept: [
          { id: "choke", text: "Witnessed or reported choking or sudden coughing episode", match: ["choking", "choke", "gagging", "sudden cough", "coughing episode", "witnessed"] },
          { id: "focal", text: "Unilateral or focal wheeze or reduced air entry", match: ["unilateral", "focal", "asymmetric", "one side", "localized", "localised", "monophonic"] },
          { id: "age", text: "Age 1 to 3 years", match: ["toddler", "age", "1 to 3", "young child"] },
          { id: "first", text: "No previous wheeze or atopy", match: ["no previous", "no prior", "first episode", "no history", "no atopy"] },
          { id: "response", text: "Poor response to bronchodilators", match: ["poor response", "no response", "not responding", "unresponsive to bronchodilator", "refractory", "no improvement"] },
          { id: "recurrent", text: "Recurrent pneumonia in the same lobe", match: ["recurrent pneumonia", "same lobe", "same location"] },
        ],
        explanation:
          "A choking episode followed by a focal wheeze in a toddler is the classic pattern. The history is often missed because the event was brief or unwitnessed. Recurrent pneumonia in one area or a wheeze that ignores bronchodilators should prompt a second look.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "rosen",
      },
    ],
    sources: [ROSEN],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-04",
    topic: "asthma-copd",
    alsoTopics: ["pulmonary-edema"],
    title: "Wheezing at three in the morning",
    stem:
      "A 74-year-old woman with no history of lung disease wakes at 03:00 unable to breathe and wheezing. She has had a week of increasing breathlessness on exertion and now sleeps on three pillows. History of myocardial infarction six years ago, hypertension and type 2 diabetes. Medications are metformin, ramipril and ASA. There is diffuse wheeze with fine crackles at both bases, raised JVP and pitting ankle edema.",
    vitals: { temperature: "36.8°C", pulse: "112/minute", resp: "30/minute", bp: "186/102 mmHg", o2sat: "86% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What diagnoses other than asthma or COPD must you consider for her wheeze?",
        required: 3,
        accept: [
          { id: "chf", text: "Acute heart failure with pulmonary edema", match: ["heart failure", "chf", "pulmonary edema", "pulmonary oedema", "cardiac asthma", "chf exacerbation", "scape", "lv failure"] },
          { id: "acs", text: "Acute coronary syndrome", match: ["acs", "acute coronary", "myocardial infarction", "mi", "ischemia", "nstemi", "stemi"] },
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embolism", "pe"] },
          { id: "pneumonia", text: "Pneumonia", match: ["pneumonia"] },
          { id: "arrhythmia", text: "Arrhythmia such as atrial fibrillation", match: ["arrhythmia", "atrial fibrillation", "afib", "af"] },
          { id: "anaphylaxis", text: "Anaphylaxis", match: ["anaphylaxis"] },
          { id: "valve", text: "Acute valvular lesion such as mitral regurgitation", match: ["mitral", "valve", "valvular", "aortic stenosis"] },
        ],
        explanation:
          "A first wheezing episode in an older adult with cardiac risk factors is heart failure until proven otherwise. Orthopnea, crackles, raised JVP and edema all point that way. Ischemia and arrhythmia are both mimics and precipitants.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ccs-hf",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What investigations would you obtain in the first 30 minutes to confirm your leading diagnosis?",
        required: 3,
        accept: [
          { id: "ecg", text: "12 lead ECG", match: ["ecg", "ekg", "electrocardiogram"] },
          { id: "cxr", text: "Chest radiograph", match: ["chest x ray", "cxr", "chest radiograph", "chest film", "x ray"] },
          { id: "pocus", text: "Point of care ultrasound of lungs and heart for B lines and LV function", match: ["pocus", "ultrasound", "echo", "b line", "echocardiogram"] },
          { id: "bnp", text: "BNP or NT proBNP", match: ["bnp", "natriuretic", "probnp"] },
          { id: "trop", text: "High sensitivity troponin", match: ["troponin", "trop"] },
          { id: "gas", text: "Venous or arterial blood gas", match: ["blood gas", "vbg", "abg", "venous gas", "arterial gas"] },
        ],
        explanation:
          "ECG and troponin look for ischemia as a cause. Chest radiograph, lung ultrasound for B lines and natriuretic peptide support heart failure. Point of care ultrasound is fast and more sensitive than a portable film.",
        keyFeature: { topic: "pulmonary-edema", n: 5 },
        source: "ccs-hf",
      },
      {
        id: "q3",
        kind: "short",
        update: "ECG shows sinus tachycardia with LVH and no new ST elevation. Lung ultrasound shows diffuse bilateral B lines and the LV looks poorly contracting.",
        prompt: "What treatments would you start now?",
        required: 2,
        accept: [
          { id: "ntg", text: "Nitroglycerin, sublingual 0.4 mg repeated or IV infusion titrated to blood pressure", match: ["nitroglycerin", "nitro", "ntg", "gtn", "nitrate", "nitroglycerine"] },
          { id: "niv", text: "CPAP or BiPAP", match: ["cpap", "bipap", "noninvasive", "non invasive", "niv", "positive pressure"] },
          { id: "diuretic", text: "Furosemide IV, for example 40 mg", match: ["furosemide", "lasix", "diuretic"] },
          { id: "o2", text: "Oxygen titrated to SpO2 above 90%", match: ["oxygen", "o2"] },
        ],
        unacceptable: [
          { text: "IV fluid bolus", match: ["fluid bolus", "saline bolus", "normal saline", "ringer"], dangerous: true },
          { text: "Beta blocker in acute decompensated heart failure", match: ["metoprolol", "beta blocker", "esmolol"], dangerous: true },
        ],
        explanation:
          "Early high dose nitrate and noninvasive ventilation are the key therapies for hypertensive pulmonary edema. Diuretics help when there is volume overload. Fluids and beta blockers worsen acute decompensation.",
        keyFeature: { topic: "pulmonary-edema", n: 1 },
        source: "ccs-hf",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What precipitants of her decompensation would you look for?",
        required: 2,
        accept: [
          { id: "ischemia", text: "Myocardial ischemia or infarction", match: ["ischemia", "ischaemia", "infarction", "acs", "mi", "acute coronary"] },
          { id: "htn", text: "Uncontrolled hypertension", match: ["hypertension", "blood pressure", "bp"] },
          { id: "arrhythmia", text: "Arrhythmia such as atrial fibrillation", match: ["arrhythmia", "atrial fibrillation", "af", "afib"] },
          { id: "adherence", text: "Medication or dietary nonadherence, including salt load", match: ["adherence", "nonadherence", "compliance", "salt", "sodium", "diet"] },
          { id: "infection", text: "Infection", match: ["infection", "pneumonia", "sepsis"] },
          { id: "nsaid", text: "New drugs that cause fluid retention, such as NSAIDs", match: ["nsaid", "ibuprofen", "naproxen", "anti inflammatory"] },
          { id: "renal", text: "Worsening renal function", match: ["renal", "kidney", "aki", "creatinine"] },
          { id: "anemia", text: "Anemia or thyroid disease", match: ["anemia", "anaemia", "thyroid"] },
        ],
        explanation:
          "Heart failure rarely decompensates without a trigger. Ischemia, arrhythmia and uncontrolled blood pressure need immediate treatment. Nonadherence, NSAIDs and infection are common and fixable.",
        keyFeature: { topic: "pulmonary-edema", n: 2 },
        source: "ccs-hf",
      },
    ],
    sources: [CCS_HF],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-05",
    topic: "asthma-copd",
    alsoTopics: ["multiple-trauma"],
    title: "Sudden deterioration during treatment",
    stem:
      "A 19-year-old man with asthma has been treated for 40 minutes with salbutamol, ipratropium and oral prednisone. He suddenly clutches the left side of his chest and becomes more distressed. The trachea is deviated to the right. Breath sounds are absent on the left and the left chest is hyperresonant.",
    vitals: { pulse: "138/minute", resp: "36/minute", bp: "84/50 mmHg", o2sat: "82% on non-rebreather mask", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate step in his management?",
        options: [
          "Epinephrine 0.5 mg IM in the lateral thigh",
          "Increase salbutamol to continuous nebulization now",
          "Needle or finger decompression of the left chest",
          "Portable chest radiograph at the bedside",
          "Rapid sequence intubation and ventilation",
        ],
        correct: 2,
        explanation:
          "Hypotension, hypoxia, tracheal deviation and absent breath sounds define tension pneumothorax, a clinical diagnosis. Imaging delays life saving decompression. Intubation and positive pressure would worsen the tension.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "atls",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is an acceptable anatomic site for needle decompression in this adult?",
        required: 1,
        accept: [
          { id: "lat", text: "4th or 5th intercostal space just anterior to the midaxillary line", match: ["4th intercostal", "fourth intercostal", "5th intercostal", "fifth intercostal", "midaxillary", "mid axillary", "4th ics", "5th ics"] },
          { id: "ant", text: "2nd intercostal space in the midclavicular line", match: ["2nd intercostal", "second intercostal", "midclavicular", "mid clavicular", "2nd ics"] },
        ],
        explanation:
          "ATLS now favours the 4th or 5th intercostal space just anterior to the midaxillary line in adults because the chest wall is thinner there. The 2nd intercostal space at the midclavicular line remains acceptable. Use a long catheter and follow with a chest tube.",
        keyFeature: { topic: "multiple-trauma", n: 1 },
        source: "atls",
      },
      {
        id: "q3",
        kind: "short",
        update: "There is a rush of air on decompression. BP improves to 108/70 mmHg and SpO2 to 91%.",
        prompt: "What are the next steps in managing the pneumothorax?",
        required: 2,
        accept: [
          { id: "tube", text: "Left chest tube or tube thoracostomy", match: ["chest tube", "tube thoracostomy", "thoracostomy", "pigtail", "chest drain", "intercostal drain"] },
          { id: "cxr", text: "Chest radiograph to confirm lung re-expansion and tube position", match: ["chest x ray", "cxr", "x ray", "radiograph"] },
          { id: "bronch", text: "Continue bronchodilator and steroid treatment for the asthma", match: ["continue bronchodilator", "continue salbutamol", "salbutamol", "bronchodilator", "continue asthma"] },
          { id: "consult", text: "Admit or consult thoracic surgery or respirology", match: ["thoracic surgery", "respirology", "admit", "admission", "surgery consult"] },
          { id: "o2", text: "Continue high flow oxygen", match: ["oxygen", "o2"] },
        ],
        explanation:
          "Needle decompression is a temporizing step and must be followed by a chest tube. Imaging then confirms the result. The asthma that caused the barotrauma still needs treatment.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "bts-pleural",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What other coexisting conditions should you look for when an asthma exacerbation does not respond as expected?",
        required: 3,
        accept: [
          { id: "pneumonia", text: "Pneumonia", match: ["pneumonia"] },
          { id: "ptx", text: "Pneumothorax or pneumomediastinum", match: ["pneumothorax", "pneumomediastinum"] },
          { id: "chf", text: "Heart failure", match: ["heart failure", "chf", "pulmonary edema", "pulmonary oedema"] },
          { id: "acs", text: "Myocardial ischemia", match: ["ischemia", "ischaemia", "acs", "myocardial infarction", "acute coronary", "mi"] },
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embolism", "pe"] },
          { id: "anaphylaxis", text: "Anaphylaxis", match: ["anaphylaxis"] },
          { id: "vcd", text: "Vocal cord dysfunction or upper airway obstruction", match: ["vocal cord", "upper airway", "laryngeal"] },
          { id: "fb", text: "Foreign body", match: ["foreign body"] },
          { id: "atel", text: "Mucus plugging with lobar collapse", match: ["mucus plug", "atelectasis", "collapse", "lobar"] },
          { id: "lactate", text: "Lactic acidosis from salbutamol driving tachypnea", match: ["lactic acidosis", "lactate"] },
        ],
        explanation:
          "Failure to improve should prompt a search for a second process. Pneumothorax, pneumonia and lobar collapse are the common pulmonary ones. Cardiac disease, PE and anaphylaxis can all mimic or coexist with asthma.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "bts-pleural",
      },
    ],
    sources: [ATLS, BTS_PLEURAL],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-06",
    topic: "asthma-copd",
    title: "A school age child with a cough overnight",
    stem:
      "A 6-year-old girl with known asthma has had two days of a runny nose and was wheezing overnight. Her father gave two puffs of salbutamol without a spacer at 04:00. She has suprasternal retractions and visible scalene contraction. Air entry is reduced at both bases and she has expiratory wheeze only.",
    vitals: { temperature: "37.9°C", pulse: "132/minute", resp: "34/minute", o2sat: "91% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is her Pediatric Respiratory Assessment Measure (PRAM) score and severity?",
        options: [
          "PRAM 3, mild",
          "PRAM 5, moderate",
          "PRAM 7, moderate",
          "PRAM 8, severe",
          "PRAM 11, severe",
        ],
        correct: 3,
        explanation:
          "SpO2 below 92% scores 2, suprasternal retractions 2, scalene contraction 2, reduced air entry at the bases 1 and expiratory wheeze 1. The total of 8 falls in the severe range of 8 to 12. PRAM is the validated Canadian tool for grading and reassessing pediatric asthma.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "trekk-asthma",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What inhaled bronchodilators, with the dose and delivery method of each, would you give now?",
        required: 2,
        accept: [
          { id: "salb", text: "Salbutamol 5 mg by nebulizer, continuous or back to back over the first hour, or 10 puffs of 100 mcg by MDI with spacer every 20 minutes", match: ["salbutamol 10 puff", "salbutamol 5 mg", "salbutamol 5mg", "salbutamol 1000 mcg", "continuous salbutamol", "continuous nebulized salbutamol", "salbutamol 15 mg", "ventolin 10 puff", "ventolin 5 mg"] },
          { id: "ipra", text: "Ipratropium 500 mcg by nebulizer with the salbutamol, or 4 to 6 puffs of 20 mcg by MDI with spacer, for 3 doses in the first hour", match: ["ipratropium 4 puff", "ipratropium 6 puff", "ipratropium 500", "ipratropium 500mcg", "ipratropium 80 mcg", "ipratropium 120 mcg", "atrovent 4 puff", "atrovent 6 puff", "atrovent 500"] },
        ],
        unacceptable: [{ text: "Nebulized epinephrine as first line for asthma", match: ["racemic epinephrine", "nebulized epinephrine"] }],
        explanation:
          "TREKK doses salbutamol at 5 puffs under 20 kg and 10 puffs at 20 kg or more. For a severe PRAM it advises continuous nebulized salbutamol with ipratropium in the first hour, and 5 mg per dose suits a child of 21 kg. Two or three doses of ipratropium in the first hour reduce admission. The 250 mcg nebulized ipratropium dose is for children under 20 kg.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "trekk-asthma",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following corticosteroid orders is most appropriate for her?",
        options: [
          "Dexamethasone 0.6 mg/kg PO, 12 mg",
          "Inhaled budesonide alone",
          "Methylprednisolone 30 mg/kg IV, 630 mg",
          "Prednisolone 5 mg/kg PO",
          "No systemic corticosteroid",
        ],
        correct: 0,
        explanation:
          "TREKK advises oral dexamethasone 0.6 mg/kg to a maximum of 12 mg, given in the first hour. Prednisolone 1 mg/kg to a maximum of 60 mg is an alternative. Oral dosing works as well as IV in a child who can swallow. A viral trigger is not a reason to withhold steroids.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "trekk-asthma",
      },
      {
        id: "q4",
        kind: "short",
        update: "After an hour of treatment her PRAM is 2 and SpO2 is 96% on room air. This is sustained three hours after her last salbutamol.",
        prompt: "What interventions before discharge reduce the risk of an early return visit?",
        required: 3,
        accept: [
          { id: "spacer", text: "Teach and check MDI technique with a spacer", match: ["spacer", "aerochamber", "inhaler technique", "mdi technique", "technique"] },
          { id: "ics", text: "Start or confirm a daily inhaled corticosteroid controller", match: ["inhaled corticosteroid", "inhaled steroid", "ics", "controller", "fluticasone", "budesonide", "ciclesonide", "beclomethasone"] },
          { id: "plan", text: "Written asthma action plan", match: ["action plan", "written plan"] },
          { id: "steroid", text: "Complete the oral steroid course", match: ["oral steroid", "dexamethasone", "prednisolone", "prednisone", "steroid course", "second dose"] },
          { id: "fu", text: "Follow up with her family doctor or pediatrician within about a week", match: ["follow up", "followup", "family doctor", "pediatrician", "paediatrician", "primary care"] },
          { id: "smoke", text: "Remove second hand smoke and other triggers at home", match: ["smoke", "smoking", "trigger"] },
          { id: "vaccine", text: "Annual influenza vaccination", match: ["influenza", "flu shot", "vaccine", "vaccination"] },
          { id: "return", text: "Clear return instructions", match: ["return", "red flag"] },
        ],
        unacceptable: [
          { text: "Home nebulizer", match: ["home nebulizer", "home neb"] },
          { text: "Antibiotic", match: ["antibiotic", "amoxicillin"] },
        ],
        explanation:
          "Most returns are driven by poor technique, no controller therapy and no plan. A spacer, a daily inhaled corticosteroid and a written action plan address all three. Primary care follow up within a week closes the loop.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "cts-asthma",
      },
    ],
    sources: [TREKK_ASTHMA, CTS_ASTHMA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-07",
    topic: "asthma-copd",
    title: "Ready to go back to work",
    stem:
      "A 31-year-old roofer with asthma was treated three hours ago with salbutamol, ipratropium and prednisone 50 mg PO. He now feels well and wants to leave. Peak flow is 480 L/minute. His predicted is 590 L/minute. He uses his salbutamol several times a day and takes his fluticasone inhaler only when he feels bad. He smokes 10 cigarettes a day.",
    vitals: { pulse: "96/minute", resp: "18/minute", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What objective checks would you complete before discharge?",
        required: 2,
        accept: [
          { id: "pef", text: "Peak flow or FEV1 above 70% of predicted, sustained 60 minutes after the last bronchodilator", match: ["peak flow", "pef", "pefr", "fev1", "spirometry"] },
          { id: "walk", text: "Ambulation test without significant breathlessness or desaturation", match: ["ambulate", "ambulation", "ambulatory", "walk", "exertion", "road test", "exercise", "stair"] },
          { id: "sat", text: "SpO2 94% or higher on room air at rest", match: ["oxygen saturation", "spo2", "saturation", "oximetry", "sat"] },
          { id: "wob", text: "Normal respiratory rate and work of breathing, able to speak in full sentences", match: ["respiratory rate", "work of breathing", "full sentence", "accessory"] },
        ],
        explanation:
          "Recovery should be confirmed objectively and after the bronchodilator effect has had time to wear off. Peak flow above 70% of predicted is reassuring. A walk test unmasks patients who look well only at rest.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What medications would you prescribe at discharge?",
        required: 2,
        accept: [
          { id: "pred", text: "Prednisone 40 to 50 mg PO daily for 5 to 7 days", match: ["prednisone", "prednisolone", "oral steroid", "oral corticosteroid", "dexamethasone"] },
          { id: "ics", text: "Inhaled corticosteroid containing controller, preferably budesonide formoterol as maintenance and reliever", match: ["inhaled corticosteroid", "inhaled steroid", "ics", "budesonide", "fluticasone", "symbicort", "ciclesonide", "beclomethasone", "mometasone", "advair", "controller"] },
        ],
        unacceptable: [
          { text: "Salbutamol alone", match: ["salbutamol alone", "saba alone", "saba only", "salbutamol only"] },
          { text: "Antibiotic", match: ["antibiotic", "azithromycin", "amoxicillin"] },
        ],
        explanation:
          "Every adult discharged after an exacerbation should have a short oral steroid course and a regular inhaled corticosteroid. SABA only treatment increases the risk of severe attacks and death. As needed budesonide formoterol can serve as both controller and reliever.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "cts-asthma",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What education or follow up measures would you arrange?",
        required: 3,
        accept: [
          { id: "technique", text: "Check and correct inhaler technique", match: ["inhaler technique", "technique", "spacer", "mdi"] },
          { id: "adherence", text: "Explain that the controller must be taken every day", match: ["adherence", "daily", "every day", "regular", "compliance"] },
          { id: "plan", text: "Written asthma action plan", match: ["action plan", "written plan"] },
          { id: "smoking", text: "Smoking cessation counselling and pharmacotherapy", match: ["smoking", "cessation", "quit", "nicotine", "varenicline", "tobacco"] },
          { id: "fu", text: "Follow up with his family doctor within 2 to 7 days", match: ["follow up", "followup", "family doctor", "primary care", "gp"] },
          { id: "educator", text: "Referral to a certified asthma educator or asthma clinic", match: ["educator", "asthma clinic", "respirology", "respirologist"] },
          { id: "triggers", text: "Trigger and occupational exposure review", match: ["trigger", "occupational", "exposure", "work"] },
          { id: "return", text: "Return if symptoms recur or peak flow falls", match: ["return", "come back"] },
        ],
        explanation:
          "Poor technique, poor adherence and smoking all drive relapse. A written plan tells him when to step up treatment and when to come back. Follow up within a week lets his physician adjust therapy while he recovers.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What features of his current history raise his risk of a future severe exacerbation?",
        required: 2,
        accept: [
          { id: "saba", text: "Frequent salbutamol use", match: ["salbutamol", "saba", "reliever", "ventolin"] },
          { id: "ics", text: "Poor inhaled corticosteroid adherence", match: ["fluticasone", "ics", "inhaled corticosteroid", "inhaled steroid", "controller", "adherence", "compliance"] },
          { id: "smoking", text: "Active smoking", match: ["smoking", "smoker", "cigarette", "tobacco"] },
          { id: "ed", text: "Current ED visit for an exacerbation", match: ["ed visit", "emergency visit", "exacerbation", "this visit"] },
          { id: "occ", text: "Occupational exposures", match: ["occupational", "roofer", "work"] },
        ],
        explanation:
          "High reliever use and not taking inhaled steroids regularly are markers of poor control and future risk. Smoking blunts steroid response. The current exacerbation itself raises his risk of another.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
    ],
    sources: [GINA, CTS_ASTHMA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-08",
    topic: "asthma-copd",
    alsoTopics: ["infectious-diseases"],
    title: "Fever and more sputum",
    stem:
      "A 66-year-old woman with COPD and a 40 pack year history has four days of fever, rusty sputum and worsening breathlessness. She is alert and oriented. There are coarse crackles at the right base.",
    vitals: { temperature: "38.9°C", pulse: "112/minute", resp: "30/minute", bp: "104/62 mmHg", o2sat: "85% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What investigations would you order now?",
        required: 3,
        accept: [
          { id: "cxr", text: "Chest radiograph", match: ["chest x ray", "cxr", "chest radiograph", "chest film"] },
          { id: "cultures", text: "Blood cultures", match: ["blood culture"] },
          { id: "cbc", text: "CBC", match: ["cbc", "complete blood count", "white count", "wbc"] },
          { id: "lytes", text: "Electrolytes, urea and creatinine", match: ["electrolyte", "lytes", "urea", "creatinine", "renal function", "bun"] },
          { id: "gas", text: "Venous or arterial blood gas", match: ["blood gas", "vbg", "abg", "venous gas", "arterial gas"] },
          { id: "lactate", text: "Lactate", match: ["lactate", "lactic"] },
          { id: "sputum", text: "Sputum gram stain and culture", match: ["sputum"] },
          { id: "viral", text: "Nasopharyngeal swab for influenza, COVID 19 and RSV", match: ["influenza", "covid", "viral swab", "nasopharyngeal", "rsv", "respiratory panel"] },
          { id: "ecg", text: "ECG", match: ["ecg", "ekg"] },
        ],
        explanation:
          "Fever, focal crackles and rusty sputum point to pneumonia as the trigger. Radiograph, cultures and a blood gas define the severity and guide antibiotics and ventilatory support. Viral testing can guide antiviral therapy and isolation.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "ats-idsa-cap",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oxygen strategies is most appropriate while you await her blood gas?",
        options: [
          "High flow nasal cannula at 60 L/minute with FiO2 1.0",
          "Nasal prongs at 6 L/minute targeting 96 to 98%",
          "Non-rebreather mask at 15 L/minute targeting 100%",
          "Venturi mask from 28%, titrated to SpO2 88 to 92%",
          "No oxygen until the blood gas returns",
        ],
        correct: 3,
        explanation:
          "Controlled oxygen with a Venturi mask gives a predictable FiO2 and avoids worsening hypercapnia. Target 88 to 92% until a gas shows she does not retain CO2. Withholding oxygen from a hypoxic patient is never appropriate.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gold",
      },
      {
        id: "q3",
        kind: "short",
        update: "Chest radiograph shows right lower lobe consolidation. Urea is 6.8 mmol/L. She has no features of severe pneumonia needing ICU. You admit her to a medical ward.",
        prompt: "What is an appropriate empiric antibiotic regimen?",
        required: 1,
        accept: [
          { id: "bl-mac", text: "Ceftriaxone plus azithromycin or clarithromycin", match: ["ceftriaxone azithromycin", "ceftriaxone azithro", "ceftriaxone clarithromycin", "cefotaxime azithromycin", "ceftriaxone macrolide", "beta lactam macrolide", "ceftriaxone doxycycline", "amoxicillin clavulanate azithromycin"] },
          { id: "fq", text: "Respiratory fluoroquinolone such as levofloxacin or moxifloxacin", match: ["levofloxacin", "moxifloxacin", "respiratory fluoroquinolone"] },
        ],
        unacceptable: [
          { text: "Single agent that misses atypical or typical organisms", match: ["ceftriaxone alone", "azithromycin alone", "amoxicillin alone", "doxycycline alone"] },
          { text: "Ciprofloxacin", match: ["ciprofloxacin", "cipro"] },
        ],
        explanation:
          "For a ward admission with community acquired pneumonia, a beta lactam plus macrolide or a respiratory fluoroquinolone alone is standard. Ciprofloxacin has poor pneumococcal cover. Local resistance patterns and recent antibiotic use should refine the choice.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "ats-idsa-cap",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What systemic corticosteroid, if any, would you give, including the drug, dose and duration?",
        required: 1,
        accept: [
          { id: "pred", text: "Yes. Prednisone 40 mg PO daily for 5 days", match: ["prednisone 40", "prednisone 30", "prednisone 50", "prednisolone 40", "prednisolone 50", "methylprednisolone 40", "methylprednisolone 60"] },
        ],
        explanation:
          "Pneumonia commonly triggers COPD exacerbations and does not preclude steroids. A 5 day course of prednisone 40 mg improves lung function and shortens recovery. Monitor glucose.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gold",
      },
    ],
    sources: [CAP, GOLD],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-09",
    topic: "asthma-copd",
    alsoTopics: ["airway"],
    title: "Quieter but not better",
    stem:
      "A 23-year-old woman with asthma, two prior ICU admissions and one intubation, has had 90 minutes of treatment with continuous salbutamol, three doses of ipratropium, methylprednisolone 125 mg IV and magnesium sulfate 2 g IV. Her respiratory rate has fallen from 36/minute to 12/minute. She is slumped forward, answers in single words and her eyes keep closing. Air movement is barely audible. Venous gas: pH 7.18, pCO2 68 mmHg.",
    vitals: { pulse: "142/minute", resp: "12/minute", bp: "104/60 mmHg", o2sat: "88% on non-rebreather mask", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings tell you she is close to respiratory arrest?",
        required: 3,
        accept: [
          { id: "loc", text: "Drowsiness or decreased level of consciousness", match: ["drowsy", "drowsiness", "eyes closing", "level of consciousness", "decreased loc", "altered mental", "somnolent", "obtunded", "mental status", "confusion"] },
          { id: "rr", text: "Falling respiratory rate without improvement", match: ["respiratory rate", "falling rate", "bradypnea", "bradypnoea", "rr 12", "slow breathing", "decreasing rr"] },
          { id: "silent", text: "Silent or near silent chest", match: ["silent chest", "silent", "air movement", "air entry", "quiet chest"] },
          { id: "co2", text: "Rising pCO2 with respiratory acidosis", match: ["pco2", "hypercapnia", "hypercarbia", "co2", "acidosis", "ph 7.18", "acidemia"] },
          { id: "hypoxia", text: "Hypoxemia despite high flow oxygen", match: ["hypoxia", "hypoxemia", "hypoxaemia", "spo2 88", "desaturation", "saturation"] },
          { id: "speech", text: "Speaking in single words", match: ["single word", "unable to speak", "word"] },
        ],
        explanation:
          "A falling respiratory rate with a quiet chest and drowsiness is exhaustion, not improvement. A normal or rising pCO2 in acute asthma is ominous because early attacks cause hypocapnia. These are objective markers of life threatening severity.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Rapid sequence intubation by the most experienced operator",
          "Repeat venous blood gas in 30 minutes",
          "Salbutamol driven by heliox via face mask",
          "Second dose of magnesium sulfate 2 g IV",
          "Trial of BiPAP with reassessment in 30 minutes",
        ],
        correct: 0,
        explanation:
          "Decreasing level of consciousness with a rising pCO2 despite maximal therapy is an indication for intubation. NIV requires an alert, cooperative patient who can protect her airway. Delay risks a peri-arrest intubation.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What is the preferred induction agent for her, including the dose for this patient?",
        required: 1,
        accept: [
          { id: "ketamine", text: "Ketamine 1 to 2 mg/kg IV, about 55 to 110 mg", match: ["ketamine 1 mg/kg", "ketamine 1.5 mg/kg", "ketamine 2 mg/kg", "ketamine 1mg/kg", "ketamine 2mg/kg", "ketamine 1 to 2", "ketamine 100mg", "ketamine 80mg", "ketamine 60mg", "ketamine 55", "ketamine 60", "ketamine 70", "ketamine 75", "ketamine 80", "ketamine 90", "ketamine 100", "ketamine 110"] },
        ],
        unacceptable: [{ text: "Ketamine at an analgesic or sub dissociative dose", match: ["ketamine 0.3", "ketamine 0.5", "ketamine 20", "ketamine 10"] }],
        explanation:
          "Ketamine is preferred in severe asthma because it preserves blood pressure and has bronchodilating properties. A full dissociative dose of 1 to 2 mg/kg is needed for induction. Reduce the dose if she becomes hypotensive.",
        keyFeature: { topic: "airway", n: 5 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What initial ventilator strategies limit dynamic hyperinflation?",
        required: 3,
        accept: [
          { id: "rr", text: "Low set rate of about 8 to 10 breaths per minute", match: ["low respiratory rate", "low rate", "slow rate", "rate 8", "rate 10", "rr 8", "rr 10", "decrease rate", "reduce rate", "lower rate"] },
          { id: "vt", text: "Low tidal volume of 6 to 8 mL/kg ideal body weight", match: ["low tidal volume", "tidal volume 6", "tidal volume 8", "vt 6", "vt 8", "6 ml/kg", "8 ml/kg", "small tidal volume", "lower tidal volume"] },
          { id: "ie", text: "Long expiratory time with I to E ratio of 1 to 4 or longer", match: ["expiratory time", "long expiration", "prolonged expiration", "i:e", "exhalation time", "1:4", "1:5"] },
          { id: "flow", text: "Fast inspiratory flow of 60 to 80 L per minute to shorten inspiration", match: ["inspiratory flow", "fast flow", "peak flow 80", "flow 80", "flow 60"] },
          { id: "permissive", text: "Permissive hypercapnia with pH above about 7.15 to 7.20", match: ["permissive hypercapnia", "permissive hypercarbia", "permissive", "accept hypercapnia", "tolerate co2", "accept co2"] },
          { id: "plateau", text: "Keep plateau pressure below 30 cm H2O", match: ["plateau"] },
          { id: "peep", text: "Low or zero applied PEEP", match: ["low peep", "zero peep", "peep 0", "minimal peep", "peep 5", "zeep"] },
        ],
        unacceptable: [
          { text: "Increasing the set rate to clear CO2", match: ["hyperventilate", "hyperventilation", "normalize co2", "normalise co2", "normocapnia", "rate 20", "rate 24", "rate 30"], dangerous: true },
          { text: "Large tidal volume", match: ["large tidal volume", "10 ml/kg", "12 ml/kg"], dangerous: true },
        ],
        explanation:
          "The goal is to give the lungs time to empty and avoid breath stacking. That means a slow rate, small breaths, fast inspiratory flow and permissive hypercapnia. Trying to normalize the pCO2 with a higher rate causes auto PEEP, hypotension and barotrauma.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "rosen",
      },
      {
        id: "q5",
        kind: "short",
        update: "Five minutes after intubation her BP is 62/30 mmHg, pulse 150/minute and SpO2 84%. Peak airway pressures are very high.",
        prompt: "What are your immediate actions?",
        required: 2,
        accept: [
          { id: "disconnect", text: "Disconnect from the ventilator to allow full exhalation, with gentle chest compression", match: ["disconnect", "off the ventilator", "off ventilator", "allow exhalation", "compress chest", "chest compression"] },
          { id: "ptx", text: "Assess for tension pneumothorax and decompress if present", match: ["pneumothorax", "needle decompression", "decompress", "finger thoracostomy", "thoracostomy"] },
          { id: "fluid", text: "IV fluid bolus", match: ["fluid bolus", "bolus", "crystalloid", "normal saline", "ringer", "fluid"] },
          { id: "tube", text: "Check tube position and patency, suction for plugging", match: ["tube position", "dope", "displacement", "obstruction", "suction", "etco2", "end tidal", "tube"] },
          { id: "pressor", text: "Push dose vasopressor if hypotension persists", match: ["pressor", "vasopressor", "phenylephrine", "norepinephrine", "push dose", "epinephrine"] },
        ],
        unacceptable: [{ text: "Bag faster or increase the rate", match: ["bag faster", "faster bagging", "hyperventilate", "hyperventilation"], dangerous: true }],
        explanation:
          "Post intubation hypotension in asthma is usually from dynamic hyperinflation or tension pneumothorax. Disconnecting the circuit lets trapped air escape and often restores the pressure within seconds. Faster bagging makes both worse.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "rosen",
      },
    ],
    sources: [GINA, ROSEN],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-10",
    topic: "asthma-copd",
    title: "Wheeze in the third trimester",
    stem:
      "A 29-year-old woman, G2P1 at 31 weeks, has asthma. She stopped her budesonide inhaler early in pregnancy because she worried it might harm the baby. She has two days of worsening wheeze. Peak flow is 45% of her personal best. Fetal heart rate is 150/minute.",
    vitals: { temperature: "37.0°C", pulse: "118/minute", resp: "28/minute", bp: "118/70 mmHg", o2sat: "92% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What treatments would you start now?",
        required: 3,
        accept: [
          { id: "salb", text: "Inhaled salbutamol, repeated every 20 minutes", match: ["salbutamol", "ventolin", "saba", "beta agonist"] },
          { id: "ipra", text: "Inhaled ipratropium", match: ["ipratropium", "atrovent", "anticholinergic"] },
          { id: "steroid", text: "Systemic corticosteroid such as prednisone 50 mg PO", match: ["prednisone", "prednisolone", "methylprednisolone", "systemic steroid", "oral steroid", "corticosteroid", "steroid", "dexamethasone"] },
          { id: "o2", text: "Oxygen titrated to SpO2 95% or higher", match: ["oxygen", "o2"] },
          { id: "mg", text: "Magnesium sulfate 2 g IV if not improving", match: ["magnesium"] },
        ],
        explanation:
          "Acute asthma in pregnancy is treated with the same drugs as in any adult. Maternal hypoxia is the main threat to the fetus. Systemic steroids should not be withheld.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following maternal oxygen saturation targets is most appropriate?",
        options: [
          "85% or higher",
          "88 to 92%",
          "90 to 92%",
          "95% or higher",
          "No target, oxygen only if she is cyanosed",
        ],
        correct: 3,
        explanation:
          "In pregnancy, maternal SpO2 is kept at 95% or higher to protect fetal oxygenation. The fetus is sensitive to small drops in maternal oxygen content. The COPD target of 88 to 92% does not apply.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "short",
        update: "She asks whether the steroids and inhalers will harm her baby.",
        prompt: "What are the key counselling points?",
        required: 2,
        accept: [
          { id: "uncontrolled", text: "Uncontrolled asthma poses a greater risk to the baby than asthma medications", match: ["uncontrolled asthma", "greater risk", "asthma itself", "hypoxia", "benefit outweigh", "risk of asthma"] },
          { id: "ics", text: "Inhaled corticosteroids such as budesonide are safe and should be restarted and continued", match: ["budesonide", "inhaled corticosteroid", "inhaled steroid", "ics", "controller", "restart"] },
          { id: "pred", text: "A short course of oral prednisone is considered safe in pregnancy", match: ["prednisone", "oral steroid", "short course"] },
          { id: "salb", text: "Salbutamol is safe in pregnancy", match: ["salbutamol", "ventolin", "saba"] },
          { id: "fu", text: "Close follow up with her obstetric care provider and family doctor", match: ["obstetric", "obstetrician", "midwife", "family doctor", "follow up"] },
        ],
        explanation:
          "Poorly controlled asthma raises the risk of preeclampsia, preterm birth and low birth weight. Budesonide has the most reassuring pregnancy data. Stopping controller therapy is a common and avoidable cause of exacerbations in pregnancy.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What additional elements of her asthma history would help you decide on disposition?",
        required: 2,
        accept: [
          { id: "icu", text: "Previous intubation or ICU admission", match: ["intubation", "intubated", "icu", "intensive care", "ventilated", "mechanical ventilation"] },
          { id: "hosp", text: "Hospital admissions or ED visits in the past year", match: ["hospitalization", "hospitalisation", "admission", "ed visit", "emergency visit", "er visit"] },
          { id: "ocs", text: "Recent oral steroid courses", match: ["oral steroid", "prednisone", "systemic steroid", "oral corticosteroid"] },
          { id: "saba", text: "Recent reliever use frequency", match: ["salbutamol", "saba", "reliever", "ventolin"] },
          { id: "course", text: "Previous course of asthma in pregnancy or recent rapid deterioration", match: ["previous pregnancy", "last pregnancy", "rapid", "sudden"] },
          { id: "food", text: "Food allergy or anaphylaxis history", match: ["food allergy", "anaphylaxis"] },
        ],
        explanation:
          "Past intubation, recent admissions and recent steroid courses mark a patient at risk of fatal asthma. In pregnancy these lower the threshold for admission and obstetric consultation. They also guide how aggressively to escalate.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
    ],
    sources: [GINA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-11",
    topic: "asthma-copd",
    alsoTopics: ["dvt-pe"],
    title: "Breathless a week after surgery",
    stem:
      "A 68-year-old man with COPD had a left total knee replacement eight days ago. He has had one day of increased breathlessness. Sputum is unchanged and he has no fever. His baseline SpO2 is 93%. There is a faint expiratory wheeze. The left calf is 3 cm larger than the right.",
    vitals: { temperature: "37.1°C", pulse: "116/minute", resp: "26/minute", bp: "132/80 mmHg", o2sat: "86% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features make a simple COPD exacerbation a less likely explanation?",
        required: 3,
        accept: [
          { id: "sputum", text: "No change in sputum volume or colour", match: ["sputum", "no change sputum", "unchanged sputum", "no purulence"] },
          { id: "fever", text: "No fever or viral prodrome", match: ["no fever", "afebrile", "no infection", "no viral", "prodrome", "fever"] },
          { id: "surgery", text: "Recent major orthopedic surgery", match: ["surgery", "knee replacement", "arthroplasty", "postoperative", "post op", "tkr", "immobile", "immobility", "immobilization"] },
          { id: "calf", text: "Unilateral calf swelling", match: ["calf", "leg swelling", "dvt", "unilateral"] },
          { id: "hypoxia", text: "Hypoxemia out of proportion to the wheeze", match: ["out of proportion", "hypoxia", "hypoxemia", "hypoxaemia", "desaturation", "minimal wheeze", "faint wheeze"] },
          { id: "tachy", text: "Marked tachycardia", match: ["tachycardia", "hr 116", "heart rate"] },
        ],
        explanation:
          "About one in six unexplained COPD exacerbations is due to PE. The lack of an infective trigger, recent surgery and unilateral leg swelling all point away from a simple flare. Hypoxemia with little wheeze should also raise suspicion.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "aleva-pe-copd",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate diagnostic test for him?",
        options: [
          "Arterial blood gas on room air",
          "Chest radiograph alone",
          "CT pulmonary angiogram",
          "Quantitative D-dimer assay",
          "Ventilation perfusion scan",
        ],
        correct: 2,
        explanation:
          "His pretest probability is high, so a D-dimer should be skipped. Underlying COPD makes a VQ scan more likely to be nondiagnostic. CT pulmonary angiography also shows alternative diagnoses.",
        keyFeature: { topic: "dvt-pe", n: 5 },
        source: "thrombosis-canada",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT shows bilateral segmental emboli. RV to LV ratio is 0.8. Troponin is normal. BP remains 130/78 mmHg.",
        prompt: "What are the key elements of his management?",
        required: 2,
        accept: [
          { id: "anticoag", text: "Therapeutic anticoagulation, for example apixaban, rivaroxaban or LMWH", match: ["anticoagulation", "anticoagulant", "apixaban", "rivaroxaban", "edoxaban", "dabigatran", "enoxaparin", "dalteparin", "tinzaparin", "heparin", "lmwh", "doac"] },
          { id: "o2", text: "Oxygen titrated to 88 to 92%", match: ["oxygen", "o2"] },
          { id: "bronch", text: "Continue his inhaled bronchodilators", match: ["bronchodilator", "salbutamol", "ipratropium", "tiotropium", "inhaler"] },
          { id: "admit", text: "Admit for monitoring given hypoxemia", match: ["admit", "admission", "hospital", "ward"] },
          { id: "surgeon", text: "Inform the orthopedic surgeon about wound bleeding risk", match: ["orthopedic", "orthopaedic", "surgeon"] },
        ],
        unacceptable: [{ text: "Systemic thrombolysis", match: ["thrombolysis", "tpa", "alteplase", "tenecteplase", "tnk", "lytic"], dangerous: true }],
        explanation:
          "He has a hemodynamically stable PE, so anticoagulation is the treatment. Thrombolysis is not indicated and eight days after surgery carries a high bleeding risk. His hypoxemia means he needs admission rather than outpatient care.",
        keyFeature: { topic: "dvt-pe", n: 6 },
        source: "thrombosis-canada",
      },
    ],
    sources: [PE_COPD, THROMBOSIS_CANADA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-12",
    topic: "asthma-copd",
    title: "Third visit this year",
    stem:
      "A 16-year-old boy with asthma is seen for his third emergency department visit this year. He was prescribed fluticasone 125 mcg two puffs twice daily but says he does not take it. He goes through two salbutamol inhalers a month and vapes daily. After salbutamol, ipratropium and prednisone his peak flow is 78% of predicted and he feels well.",
    vitals: { weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What additional history questions would you ask to judge his risk of a fatal attack?",
        required: 3,
        accept: [
          { id: "icu", text: "Previous ICU admission or intubation", match: ["intubation", "intubated", "icu", "intensive care", "ventilated", "mechanical ventilation"] },
          { id: "hosp", text: "Hospital admissions in the past year", match: ["hospitalization", "hospitalisation", "admission", "admitted", "hospital"] },
          { id: "ocs", text: "Oral steroid courses in the past year", match: ["oral steroid", "prednisone", "systemic steroid", "oral corticosteroid", "steroid course"] },
          { id: "food", text: "Food allergy or previous anaphylaxis", match: ["food allergy", "anaphylaxis", "allergy"] },
          { id: "psych", text: "Mental health or psychosocial difficulties", match: ["mental health", "psychiatric", "depression", "psychosocial", "social", "home situation", "substance"] },
          { id: "perception", text: "Whether he recognizes worsening symptoms", match: ["perception", "recognize", "recognise"] },
          { id: "smoke", text: "Other smoking or cannabis use", match: ["cannabis", "marijuana", "smoking", "cigarette"] },
        ],
        explanation:
          "His current history already shows heavy reliever use and no controller. Past ICU care, recent admissions, steroid courses, food allergy and psychosocial problems further stratify risk. Adolescents are a group with high asthma mortality.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following controller regimens is most appropriate for him at discharge?",
        options: [
          "Budesonide formoterol as maintenance and reliever therapy",
          "Fluticasone only on days with symptoms",
          "Montelukast 10 mg PO daily as the only controller",
          "Salbutamol as needed with no daily controller",
          "Salmeterol inhaler twice daily as the only controller",
        ],
        correct: 0,
        explanation:
          "For adolescents and adults, an inhaled corticosteroid with formoterol used as both maintenance and reliever reduces severe exacerbations compared with SABA based regimens. It also ensures every reliever dose delivers steroid. LABA without an inhaled steroid is unsafe in asthma.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "cts-asthma",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What strategies would reduce his chance of an early return visit?",
        required: 3,
        accept: [
          { id: "technique", text: "Teach and check inhaler technique", match: ["inhaler technique", "technique", "spacer", "demonstrate", "demonstration"] },
          { id: "plan", text: "Written asthma action plan", match: ["action plan", "written plan"] },
          { id: "fu", text: "Follow up with his primary care provider within a week", match: ["follow up", "followup", "family doctor", "primary care", "pediatrician", "paediatrician", "gp"] },
          { id: "vape", text: "Vaping cessation counselling", match: ["vaping", "vape", "cessation", "quit", "nicotine"] },
          { id: "barriers", text: "Explore barriers to adherence such as cost or beliefs", match: ["barrier", "cost", "adherence", "belief", "coverage", "insurance", "drug plan"] },
          { id: "educator", text: "Referral to a certified asthma educator or asthma clinic", match: ["educator", "asthma clinic", "respirology"] },
          { id: "pred", text: "Complete the oral prednisone course", match: ["prednisone", "steroid course"] },
        ],
        explanation:
          "Adolescent nonadherence often reflects beliefs, cost and poor technique rather than simple forgetfulness. A written plan and early follow up support a new regimen. Stopping vaping removes a daily airway irritant.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following should he be prescribed in addition to his controller?",
        options: [
          "Amoxicillin 500 mg PO three times daily for 7 days",
          "Home nebulizer with salbutamol",
          "Montelukast 10 mg PO daily",
          "Prednisone 50 mg PO daily for 5 days",
          "Prednisone 5 mg PO daily for 5 days",
          "None",
        ],
        select: 1,
        correct: [3],
        explanation:
          "An adult dose oral steroid course for 5 to 7 days is recommended after an ED treated exacerbation. There is no indication for antibiotics. A home nebulizer offers no advantage over an MDI with spacer.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "cts-asthma",
      },
    ],
    sources: [GINA, CTS_ASTHMA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-13",
    topic: "asthma-copd",
    alsoTopics: ["anaphylaxis"],
    title: "Tight chest after dinner out",
    stem:
      "A 41-year-old woman with mild asthma develops wheeze and throat tightness 15 minutes after eating at a restaurant. Paramedics gave salbutamol 5 mg by nebulizer with little effect. She has hives across her trunk, swollen lips and diffuse wheeze.",
    vitals: { pulse: "128/minute", resp: "30/minute", bp: "82/48 mmHg", o2sat: "91% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for her presentation?",
        options: [
          "Anaphylaxis",
          "Isolated angioedema",
          "Scombroid poisoning",
          "Severe asthma attack",
          "Vasovagal reaction",
        ],
        correct: 0,
        explanation:
          "Acute onset after a likely allergen with skin, respiratory and cardiovascular involvement is anaphylaxis. Asthma alone does not cause urticaria, lip swelling and hypotension. Patients with asthma are at higher risk of fatal anaphylaxis.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "wao-anaphylaxis",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the first drug you would give, including the dose and route?",
        required: 1,
        accept: [
          { id: "epi", text: "Epinephrine 0.5 mg IM (1 mg/mL) in the anterolateral thigh", match: ["epinephrine 0.5 mg im", "epinephrine 0.5mg im", "epinephrine 0.5 mg intramuscular", "epinephrine 0.5 im", "epi 0.5 mg im", "epi 0.5mg im", "adrenaline 0.5 mg im", "adrenaline 0.5mg im", "epinephrine 500 mcg im", "epinephrine 0.5 mg thigh", "epinephrine 0.5 mg 1 mg/ml", "epinephrine 0.01 mg/kg im"] },
        ],
        unacceptable: [
          { text: "IV bolus of undiluted epinephrine", match: ["epinephrine 1 mg iv", "iv push epinephrine", "epinephrine iv push", "undiluted iv"], dangerous: true },
        ],
        explanation:
          "IM epinephrine 0.01 mg/kg to a maximum of 0.5 mg is the first line drug for anaphylaxis. It treats bronchospasm, airway edema and hypotension together. Antihistamines and steroids are adjuncts and do not treat shock.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao-anaphylaxis",
      },
      {
        id: "q3",
        kind: "short",
        update: "After two doses of IM epinephrine five minutes apart, BP is 88/54 mmHg and she is still wheezing.",
        prompt: "What further treatments would you give for her hypotension and bronchospasm?",
        required: 3,
        accept: [
          { id: "fluid", text: "IV crystalloid bolus of 1 to 2 L", match: ["fluid bolus", "bolus", "crystalloid", "normal saline", "ringer", "iv fluid"] },
          { id: "infusion", text: "Epinephrine infusion titrated to effect", match: ["epinephrine infusion", "epinephrine drip", "epi drip", "epi infusion", "adrenaline infusion"] },
          { id: "salb", text: "Inhaled salbutamol for persistent bronchospasm", match: ["salbutamol", "ventolin", "bronchodilator"] },
          { id: "o2", text: "High flow oxygen", match: ["oxygen", "o2"] },
          { id: "position", text: "Lie her supine with legs raised", match: ["supine", "legs raised", "trendelenburg", "leg elevation", "lie flat"] },
          { id: "repeat", text: "Further IM epinephrine every 5 minutes while an infusion is prepared", match: ["repeat epinephrine", "third dose", "repeat im", "further epinephrine"] },
        ],
        unacceptable: [{ text: "Sitting her upright while hypotensive", match: ["sit up", "upright", "stand"] }],
        explanation:
          "Refractory anaphylaxis needs large volume fluids and an epinephrine infusion. Salbutamol can be added for persistent wheeze. Standing or sitting a hypotensive patient can precipitate cardiovascular collapse.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao-anaphylaxis",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What features help distinguish anaphylaxis from an asthma exacerbation?",
        required: 2,
        accept: [
          { id: "skin", text: "Skin or mucosal involvement such as hives, flushing or lip swelling", match: ["hive", "urticaria", "flushing", "lip swelling", "angioedema", "skin", "mucosal", "rash", "itch"] },
          { id: "bp", text: "Hypotension", match: ["hypotension", "low blood pressure", "shock", "bp"] },
          { id: "exposure", text: "Rapid onset after exposure to a likely allergen", match: ["allergen", "exposure", "food", "rapid onset", "minute", "sudden"] },
          { id: "gi", text: "GI symptoms such as vomiting, cramps or diarrhea", match: ["vomiting", "cramp", "diarrhea", "diarrhoea", "abdominal", "gi"] },
          { id: "upper", text: "Upper airway symptoms such as throat tightness, stridor or hoarseness", match: ["throat", "stridor", "hoarse", "upper airway", "voice"] },
          { id: "response", text: "Poor response to bronchodilator alone", match: ["poor response", "no response", "salbutamol"] },
        ],
        explanation:
          "Asthma is confined to the lower airway. Skin signs, hypotension, GI symptoms and upper airway involvement indicate a systemic allergic reaction. When in doubt in a hypotensive wheezing patient, give epinephrine.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "wao-anaphylaxis",
      },
    ],
    sources: [WAO],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-14",
    topic: "asthma-copd",
    title: "Wanting to go home after a bad day",
    stem:
      "A 63-year-old woman with COPD arrived six hours ago with increased breathlessness and more purulent sputum. She was treated with salbutamol, ipratropium and prednisone 40 mg PO. She now feels close to her usual self. She quit smoking two years ago. She uses tiotropium daily. She has had two exacerbations treated with prednisone in the past year and no admissions. She lives with her husband.",
    vitals: { pulse: "92/minute", resp: "20/minute", o2sat: "92% on room air at rest" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What objective checks would you complete before discharge?",
        required: 2,
        accept: [
          { id: "walk", text: "Ambulation test with oximetry, without desaturation below about 88% or marked breathlessness", match: ["ambulate", "ambulation", "ambulatory", "walk", "exertion", "road test", "exercise", "stair"] },
          { id: "sat", text: "Resting SpO2 at her baseline on room air", match: ["resting saturation", "spo2", "saturation", "oximetry", "oxygen saturation", "sat"] },
          { id: "gas", text: "Blood gas without acute respiratory acidosis if hypercapnia was suspected", match: ["blood gas", "vbg", "abg", "ph", "pco2"] },
          { id: "function", text: "Able to eat, sleep and manage self care as usual", match: ["eat", "sleep", "self care", "adl", "activities of daily living", "baseline function"] },
          { id: "mental", text: "Normal mental status", match: ["mental status", "alert", "orientation", "cognition"] },
        ],
        explanation:
          "A resting saturation alone can miss patients who desaturate with minimal activity. A walk test is the practical exertion check in the ED. She should be able to manage at home at close to her usual level.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gold",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What medications would you prescribe at discharge for this exacerbation?",
        required: 2,
        accept: [
          { id: "pred", text: "Prednisone 40 mg PO daily to complete 5 days", match: ["prednisone", "prednisolone", "oral steroid", "oral corticosteroid"] },
          { id: "abx", text: "Antibiotic such as amoxicillin, doxycycline or amoxicillin clavulanate for 5 days", match: ["antibiotic", "amoxicillin", "doxycycline", "clavulanate", "clavulin", "cefuroxime", "azithromycin", "clarithromycin", "trimethoprim", "septra", "levofloxacin", "moxifloxacin"] },
          { id: "labalama", text: "Step up maintenance to a LAMA LABA inhaler, or to triple therapy with an added ICS", match: ["laba", "lama laba", "umeclidinium vilanterol", "tiotropium olodaterol", "glycopyrronium", "dual bronchodilator", "anoro", "inspiolto", "triple therapy", "triple inhaler", "trelegy", "breztri"] },
          { id: "saba", text: "Short acting bronchodilator as needed", match: ["salbutamol", "saba", "ventolin", "ipratropium", "short acting bronchodilator"] },
        ],
        unacceptable: [{ text: "Prolonged steroid course", match: ["14 day", "two week", "2 week", "month"] }],
        explanation:
          "A 5 day prednisone course is supported. Antibiotics are indicated because sputum purulence has increased along with breathlessness. Amoxicillin, doxycycline or trimethoprim sulfamethoxazole suit a simple exacerbation. Amoxicillin clavulanate or a respiratory fluoroquinolone are kept for higher risk patients. Her exacerbation history also justifies escalating her maintenance inhaler.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gold",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What measures would reduce her risk of future exacerbations?",
        required: 3,
        accept: [
          { id: "inhaler", text: "Escalate maintenance to LAMA LABA or triple therapy and review inhaler technique", match: ["laba", "dual bronchodilator", "escalate", "step up", "inhaler technique", "technique", "triple therapy", "triple inhaler", "trelegy", "breztri", "ics laba lama"] },
          { id: "rehab", text: "Referral to pulmonary rehabilitation soon after the exacerbation", match: ["pulmonary rehab", "rehabilitation", "rehab"] },
          { id: "vaccine", text: "Influenza, pneumococcal and COVID 19 vaccines, and RSV vaccine where eligible", match: ["vaccine", "vaccination", "influenza", "pneumococcal", "flu shot", "rsv", "covid", "immunization"] },
          { id: "plan", text: "Written COPD action plan", match: ["action plan", "written plan", "self management"] },
          { id: "fu", text: "Follow up with her family doctor within 1 to 4 weeks", match: ["follow up", "followup", "family doctor", "primary care", "respirology", "gp"] },
          { id: "smoke", text: "Support to remain smoke free", match: ["smoke free", "smoking", "relapse prevention"] },
        ],
        explanation:
          "The 2023 CTS guideline recommends triple therapy with a LAMA, LABA and ICS for symptomatic patients at high risk of exacerbations, and two moderate exacerbations in a year puts her in that group. LAMA LABA is the minimum step up. Pulmonary rehabilitation started soon after an exacerbation reduces readmission. Vaccines and a written action plan also lower risk.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "cts-copd",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following factors best predicts that she will have another exacerbation?",
        options: [
          "Female sex in a patient with COPD",
          "Her age of 63 years at presentation",
          "Purulent colour of her sputum at today's visit",
          "Resting SpO2 of 92% on room air",
          "Two treated exacerbations in the past year",
        ],
        correct: 4,
        explanation:
          "A history of frequent exacerbations is the strongest predictor of future events. Two or more moderate exacerbations a year, or one requiring admission, defines a high risk patient. This history should drive escalation of therapy and follow up.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gold",
      },
    ],
    sources: [GOLD, CTS_COPD],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-15",
    topic: "asthma-copd",
    title: "Looking calmer after two hours",
    stem:
      "A 52-year-old man with asthma has had two hours of treatment with repeated salbutamol and ipratropium and methylprednisolone 125 mg IV. The nurse says he looks calmer. His respiratory rate has fallen from 34/minute to 22/minute. He is diaphoretic with paradoxical abdominal movement. He remains alert and follows commands. Venous pCO2 was 34 mmHg on arrival and is now 52 mmHg with pH 7.29.",
    vitals: { pulse: "128/minute", resp: "22/minute", o2sat: "91% on 6 L/minute by mask", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings show he is tiring rather than improving?",
        required: 2,
        accept: [
          { id: "co2", text: "pCO2 rising from low to high", match: ["pco2", "co2", "hypercapnia", "hypercarbia", "rising"] },
          { id: "acidosis", text: "Respiratory acidosis with pH 7.29", match: ["acidosis", "acidemia", "ph"] },
          { id: "paradox", text: "Paradoxical abdominal breathing", match: ["paradoxical", "abdominal", "paradox"] },
          { id: "sweat", text: "Diaphoresis", match: ["diaphoresis", "diaphoretic", "sweating", "sweaty"] },
          { id: "hypoxia", text: "Persistent hypoxemia despite oxygen", match: ["hypoxia", "hypoxemia", "hypoxaemia", "spo2 91", "saturation"] },
          { id: "tachy", text: "Persistent tachycardia", match: ["tachycardia", "hr 128", "heart rate"] },
        ],
        explanation:
          "Early acute asthma drives the pCO2 down. A return to normal or above means he can no longer keep up. Paradoxical breathing and sweating are clinical signs of respiratory muscle fatigue even when the respiratory rate falls.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Give midazolam 2 mg IV to reduce his anxiety",
          "Plan discharge once his peak flow improves",
          "Repeat methylprednisolone 125 mg IV now",
          "Start an aminophylline loading dose and infusion",
          "Start BiPAP in resuscitation, ready to intubate, involve ICU",
        ],
        correct: 4,
        explanation:
          "He is fatiguing but still alert and cooperative, so a closely watched BiPAP trial is reasonable. The team must be ready to intubate if he worsens. Sedating an asthmatic outside of intubation can cause arrest.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "ers-ats-niv",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What findings during the BiPAP trial would prompt you to intubate?",
        required: 3,
        accept: [
          { id: "loc", text: "Declining level of consciousness", match: ["level of consciousness", "decreased loc", "drowsy", "drowsiness", "confusion", "obtunded", "somnolent", "mental status", "gcs"] },
          { id: "gas", text: "Rising pCO2 or falling pH despite NIV", match: ["pco2", "co2", "ph", "acidosis", "hypercapnia", "hypercarbia"] },
          { id: "hypoxia", text: "Persistent or worsening hypoxemia", match: ["hypoxia", "hypoxemia", "hypoxaemia", "desaturation", "spo2", "saturation"] },
          { id: "shock", text: "Hemodynamic instability", match: ["hypotension", "hemodynamic", "haemodynamic", "shock", "unstable"] },
          { id: "tolerance", text: "Intolerance of the mask or agitation", match: ["intolerance", "tolerate", "agitation", "agitated", "uncooperative", "combative"] },
          { id: "arrest", text: "Respiratory pauses, apnea or arrest", match: ["apnea", "apnoea", "arrest", "pause", "bradypnea"] },
          { id: "vomit", text: "Vomiting or inability to clear secretions", match: ["vomiting", "vomit", "secretion"] },
          { id: "exhaustion", text: "Worsening fatigue or exhaustion", match: ["fatigue", "exhaustion", "tiring", "exhausted"] },
        ],
        explanation:
          "NIV in asthma buys time but must not delay a needed intubation. Falling mental status, a worsening gas, refractory hypoxemia and instability are the usual triggers. Reassess clinically every few minutes and with a gas within an hour.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "ers-ats-niv",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What drug treatment not yet given is recommended for his severe exacerbation, including the dose?",
        required: 1,
        accept: [
          { id: "mg", text: "Magnesium sulfate 2 g IV over 20 minutes", match: ["magnesium 2 g", "magnesium sulfate 2", "mgso4 2", "magnesium 2", "mag sulfate 2", "magnesium 2g", "magnesium sulfate 2g", "mgso4 2g"] },
          { id: "cont", text: "Continuous nebulized salbutamol at 10 to 15 mg per hour", match: ["continuous salbutamol", "salbutamol 10 mg", "salbutamol 15 mg", "continuous neb"] },
        ],
        unacceptable: [
          { text: "Benzodiazepine or antipsychotic", match: ["midazolam", "lorazepam", "benzodiazepine", "haloperidol", "sedative"], dangerous: true },
          { text: "Aminophylline", match: ["aminophylline", "theophylline"] },
        ],
        explanation:
          "IV magnesium 2 g is recommended for severe attacks that respond poorly to initial therapy. It is safe and inexpensive. Methylxanthines add toxicity without benefit.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "cochrane-mg",
      },
    ],
    sources: [GINA, NIV, MG_COCHRANE],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
];
