// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

const GINA: Source = {
  id: "gina",
  citation: "Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention. 2026 update.",
  url: "https://ginasthma.org/wp-content/uploads/2026/05/GINA-2026-Strategy-Report-WMS.pdf",
};
const TREKK_ASTHMA: Source = {
  id: "trekk-asthma",
  citation: "TREKK. Bottom Line Recommendations. Asthma exacerbations for children aged 12 months and older. Version 2.1. 2024.",
  url: "https://cms.trekk.ca/wp-content/uploads/2023/11/2024_02_26_Asthma-BLR_FINAL_v2.1.pdf",
};
const TREKK_SEVERE: Source = {
  id: "trekk-severe",
  citation: "TREKK. Pediatric severe asthma exacerbation algorithm for children aged 12 months and older. Version 2.0. 2024.",
  url: "https://cms.trekk.ca/wp-content/uploads/2024/02/2024-02-19_Asthma-Algorithm_v2.0-FINAL.pdf",
};
const GOLD: Source = {
  id: "gold",
  citation: "Global Initiative for Chronic Obstructive Lung Disease. Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease. 2026 report.",
  url: "https://goldcopd.org/wp-content/uploads/2026/01/GOLD-REPORT-2026-v1.3-8Dec2025_WMV2.pdf",
};
const CTS_COPD: Source = {
  id: "cts-copd",
  citation: "Bourbeau J, Bhutani M, Hernandez P, et al. 2023 Canadian Thoracic Society guideline on pharmacotherapy in patients with stable COPD. Chest. 2023.",
  url: "https://pubmed.ncbi.nlm.nih.gov/37690008/",
};
const ERS_ATS_NIV: Source = {
  id: "ers-ats-niv",
  citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/28860265/",
};
const BTS_OXYGEN: Source = {
  id: "bts-oxygen",
  citation: "O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/28507176/",
};
const CPS_BRONCHIOLITIS: Source = {
  id: "cps-bronchiolitis",
  citation: "Friedman JN, Rieder MJ, Walton JM, Canadian Paediatric Society. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatr Child Health. 2014, updated 2021.",
  url: "https://cps.ca/en/documents/position/bronchiolitis",
};
const ERS_ELS_ILO: Source = {
  id: "ers-els-ilo",
  citation: "Halvorsen T, Walsted ES, Bucca C, et al. Inducible laryngeal obstruction. An official joint European Respiratory Society and European Laryngological Society statement. Eur Respir J. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/28889105/",
};
const ERNST_CAO: Source = {
  id: "ernst-cao",
  citation: "Ernst A, Feller-Kopman D, Becker HD, Mehta AC. Central airway obstruction. Am J Respir Crit Care Med. 2004.",
  url: "https://pubmed.ncbi.nlm.nih.gov/15187010/",
};
const BRENNER: Source = {
  id: "brenner",
  citation: "Brenner B, Corbridge T, Kazzi A. Intubation and mechanical ventilation of the asthmatic patient in respiratory failure. J Emerg Med. 2009.",
  url: "https://pubmed.ncbi.nlm.nih.gov/19683662/",
};
const ROSEN_CH2: Source = {
  id: "rosen-ch2",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 2, Mechanical Ventilation and Noninvasive Ventilatory Support.",
  url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html",
};
const ROSEN_CH65: Source = {
  id: "rosen-ch65",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 65, Dysrhythmias.",
  url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html",
};
const ROSEN_CH113: Source = {
  id: "rosen-ch113",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 113, Acid-Base Disorders.",
  url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html",
};
const ROSEN_CH163: Source = {
  id: "rosen-ch163",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 163, Pediatric Lower Airway Obstruction.",
  url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html",
};
const ROSEN_CH165: Source = {
  id: "rosen-ch165",
  citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 165, Pediatric Cardiac Disorders.",
  url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html",
};
const IND_ANTICHOLINERGIC: Source = {
  id: "ind-anticholinergic",
  citation: "Ind PW, Dixon CM, Fuller RW, Barnes PJ. Anticholinergic blockade of beta-blocker-induced bronchoconstriction. Am Rev Respir Dis. 1989.",
  url: "https://doi.org/10.1164/ajrccm/139.6.1390",
};
const ATSDR_CHLORINE: Source = {
  id: "atsdr-chlorine",
  citation: "Agency for Toxic Substances and Disease Registry. Medical management guidelines for chlorine. Page last reviewed 2014.",
  url: "https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=198&toxid=36",
};
const BTS_PLEURAL: Source = {
  id: "bts-pleural",
  citation: "Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023.",
  url: "https://pubmed.ncbi.nlm.nih.gov/37553157/",
};
const CCS_HF: Source = {
  id: "ccs-hf",
  citation: "Ezekowitz JA, O'Meara E, McDonald MA, et al. 2017 comprehensive update of the Canadian Cardiovascular Society guidelines for the management of heart failure. Can J Cardiol. 2017.",
  url: "https://onlinecjc.ca/article/S0828-282X(17)30973-X/fulltext",
};
const KOURITAS_PM: Source = {
  id: "kouritas-pm",
  citation: "Kouritas VK, Papagiannopoulos K, Lazaridis G, et al. Pneumomediastinum. J Thorac Dis. 2015.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4332083/",
};
const STIELL_COPD: Source = {
  id: "stiell-copd",
  citation: "Stiell IG, Clement CM, Aaron SD, et al. Clinical characteristics associated with adverse events in patients with exacerbation of chronic obstructive pulmonary disease. A prospective cohort study. CMAJ. 2014.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3971051/",
};
const WHITE_CHLORINE: Source = {
  id: "white-chlorine",
  citation: "White CW, Martin JG. Chlorine gas inhalation. Human clinical evidence of toxicity and experience in animal models. Proc Am Thorac Soc. 2010.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3136961/",
};
const BOYER_OPIOID: Source = {
  id: "boyer-opioid",
  citation: "Boyer EW. Management of opioid analgesic overdose. N Engl J Med. 2012.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3739053/",
};
const THROMBOSIS_CANADA: Source = {
  id: "thrombosis-canada",
  citation: "Thrombosis Canada. Clinical guide. Pulmonary embolism (PE): diagnosis. 2025.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_83.pdf",
};

export const ASTHMA_COPD_S25: Samp[] = [
  {
    id: "asthma-copd-16",
    topic: "asthma-copd",
    title: "A baby with a cough and noisy breathing",
    stem:
      "A 5-month-old boy is brought to the emergency department by his parents with three days of runny nose and cough and one day of noisy breathing. He is taking about half his usual feeds. He was born at 39 weeks and has been well. His 3-year-old sister has a cold. There has been no choking episode and the cough is not paroxysmal. He has never wheezed before. On examination he has nasal congestion, subcostal and intercostal retractions, and fine crackles with expiratory wheeze throughout both lung fields. Capillary refill is 2 seconds.",
    vitals: {
      temperature: "37.9°C rectal",
      pulse: "158/minute",
      resp: "56/minute",
      o2sat: "94% on room air",
      weight: "7.1 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for this infant?",
        options: [
          "Bronchiolitis",
          "First asthma exacerbation",
          "Inhaled foreign body",
          "Pertussis infection",
          "Pneumococcal pneumonia",
        ],
        correct: 0,
        explanation:
          "A first episode of wheeze with diffuse crackles after two to three days of coryza, in an infant under 12 months with a sick contact, is bronchiolitis. Asthma should not be labelled on a first viral wheeze at 5 months. The findings are bilateral and there was no choking episode, which argues against an inhaled foreign body. Pneumococcal or other bacterial pneumonia is less likely with a temperature of 37.9°C and diffuse rather than focal findings. Pertussis is not suggested because the cough is not paroxysmal.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "cps-bronchiolitis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for this infant?",
        options: [
          "dexamethasone 4.3 mg PO",
          "Nebulized epinephrine",
          "Nebulized hypertonic saline",
          "salbutamol by MDI and spacer",
          "Superficial nasal suctioning",
        ],
        correct: 4,
        explanation:
          "Bronchiolitis care is supportive, and his nasal congestion is limiting feeds, so superficial nasal suctioning is the appropriate first step. The Canadian Paediatric Society advises that suctioning, if done, be superficial rather than deep. It recommends against routine salbutamol, epinephrine and corticosteroids. Salbutamol does not improve oxygen saturation or admission rates, and corticosteroids give no meaningful improvement in outcomes or hospitalization. Hypertonic 3% saline is also not supported in routine cases. Treating this infant as asthma would add drugs without benefit.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "cps-bronchiolitis",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 2 hours his SpO2 falls to 87% on room air while asleep. He is taking less than half his feeds and the retractions persist.",
        prompt: "Which of the following is the most appropriate next step for this infant?",
        options: [
          "Admit with supplemental oxygen",
          "Chest radiograph before deciding",
          "Discharge with next-day review",
          "Oral prednisolone and admission",
          "Trial of salbutamol then reassess",
        ],
        correct: 0,
        explanation:
          "The Canadian Paediatric Society advises oxygen when saturation falls below 90% and maintaining it at 90% or higher. His SpO2 of 87% and intake under half of normal need inpatient oxygen and feeding support. Discharge is unsafe while he is hypoxemic and not feeding. A chest radiograph is not indicated in typical bronchiolitis and would not change his need for oxygen. Prednisolone and salbutamol are not recommended in routine bronchiolitis.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "cps-bronchiolitis",
      },
      {
        id: "q4",
        kind: "single",
        update: "His parents ask what findings would have pointed to a cause other than a viral infection.",
        prompt: "Which of the following findings would most suggest a diagnosis other than bronchiolitis in this infant?",
        options: [
          "Crackles heard in both lung fields",
          "Localized reduced air entry",
          "Nasal congestion with poor feeding",
          "Respiratory rate of 60/minute",
          "Wheeze after two days of coryza",
        ],
        correct: 1,
        explanation:
          "Reduced air entry confined to one area of the chest is a localized finding, and localized findings on lung examination point away from a diffuse viral process and toward a focal cause such as an inhaled foreign body or consolidation. GINA lists localized lung findings among the features associated with an abnormal chest radiograph in wheezing children. Bilateral crackles, nasal congestion with poor feeding, tachypnea and wheeze after a coryzal prodrome are all typical of bronchiolitis. None of these typical features by themselves suggests another diagnosis.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "gina",
      },
    ],
    sources: [CPS_BRONCHIOLITIS, GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-17",
    topic: "asthma-copd",
    title: "Noisy breathing at the regatta",
    stem:
      "A 16-year-old girl is brought to the emergency department from a rowing regatta with throat tightness and noisy breathing. She has had four similar episodes this season, each labelled as exercise-induced asthma. Salbutamol taken before races has not prevented them. She has no food allergy, took no new medication and was not stung. She takes no other medications. She speaks in full sentences and holds her hand to her throat. There is a harsh inspiratory sound heard loudest over the larynx. The chest is clear with no expiratory wheeze. There is no urticaria or lip swelling.",
    vitals: {
      pulse: "108/minute",
      resp: "24/minute",
      bp: "122/74 mmHg",
      o2sat: "99% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her current symptoms?",
        options: [
          "Anaphylaxis to an unknown trigger",
          "Exercise-induced bronchoconstriction",
          "Inducible laryngeal obstruction",
          "Inhaled foreign body",
          "Spontaneous pneumothorax",
        ],
        correct: 2,
        explanation:
          "Inspiratory noise loudest over the larynx, a clear chest, normal SpO2, full sentences and recurrent episodes that salbutamol did not prevent fit inducible laryngeal obstruction. Exercise-induced bronchoconstriction causes expiratory wheeze in the chest, which she does not have. There is no urticaria, lip swelling or trigger to suggest anaphylaxis. Recurrent stereotyped episodes argue against an inhaled foreign body. A pneumothorax would reduce breath sounds on one side rather than cause laryngeal noise.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ers-els-ilo",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of her episodes would most support an upper airway cause?",
        options: [
          "Chest tightness when training in cold air",
          "Cough at night during viral colds",
          "Eczema and allergic rhinitis in childhood",
          "Onset during maximal effort",
          "Symptoms peaking 10 minutes after exercise",
        ],
        correct: 3,
        explanation:
          "Onset during maximal effort points to the larynx. Exercise-induced laryngeal obstruction typically starts during high intensity exercise and settles within minutes of stopping, with noise on inspiration. Bronchoconstriction from exercise usually peaks after exercise has ended, so symptoms peaking 10 minutes afterward point to asthma. Night cough with colds, chest tightness in cold air and a history of atopy also support asthma rather than a laryngeal cause. Her failure to respond to salbutamol fits an upper airway cause.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ers-els-ilo",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her symptoms settle over 20 minutes with reassurance and coached breathing. The examination is now normal.",
        prompt: "Which of the following investigations is most likely to confirm the diagnosis at follow-up?",
        options: [
          "Laryngoscopy during exercise",
          "Methacholine challenge test",
          "Neck CT at rest",
          "Serum tryptase level",
          "Spirometry with bronchodilator",
        ],
        correct: 0,
        explanation:
          "The joint ERS and ELS statement describes laryngoscopy during an episode, such as continuous laryngoscopy during exercise, as the reference test for exercise-induced laryngeal obstruction. The obstruction is dynamic, so a CT scan of the neck at rest will not show it. A methacholine challenge tests bronchial hyperresponsiveness and does not assess the larynx. Tryptase supports anaphylaxis, which is not suggested here. Spirometry at rest is often normal between episodes.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ers-els-ilo",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to discuss with her if the diagnosis is confirmed?",
        options: [
          "Breathing techniques with speech therapy",
          "Daily inhaled fluticasone",
          "Epinephrine autoinjector for races",
          "Higher salbutamol dose before races",
          "montelukast 10 mg PO daily",
        ],
        correct: 0,
        explanation:
          "Inducible laryngeal obstruction is managed with education and breathing techniques, often taught by a speech-language therapist or physiotherapist. Asthma controllers such as fluticasone and montelukast do not treat laryngeal closure. Salbutamol has already failed to prevent her episodes, so a higher dose adds side effects without benefit. She has no features of anaphylaxis, so an epinephrine autoinjector is not indicated.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ers-els-ilo",
      },
    ],
    sources: [ERS_ELS_ILO],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-18",
    topic: "asthma-copd",
    title: "Wheeze that does not settle",
    stem:
      "A 67-year-old man presents to the emergency department with six weeks of worsening breathlessness and noisy breathing. His family physician diagnosed COPD two months ago without spirometry. This is his third visit in six weeks, and each time he received salbutamol and prednisone with little change. He has smoked 50 pack years. He has lost 6 kg and has noticed streaks of blood in his sputum. He recalls no choking episode. He takes a tiotropium inhaler. He speaks in full sentences. A loud monophonic wheeze is heard at the mouth and over the upper sternum. It is unchanged after salbutamol 5 mg by nebulizer.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "96/minute",
      resp: "22/minute",
      bp: "148/86 mmHg",
      o2sat: "94% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his symptoms?",
        options: [
          "Central airway tumour",
          "Congestive heart failure",
          "COPD exacerbation",
          "Inhaled foreign body",
          "Pulmonary embolism",
        ],
        correct: 0,
        explanation:
          "GINA lists breathlessness that does not respond to bronchodilators as a clue to central airway obstruction. A fixed monophonic wheeze over the trachea, weight loss, blood-streaked sputum and 50 pack years point to a tumour. A COPD exacerbation gives diffuse wheeze that usually improves with bronchodilators, and his COPD was never confirmed. There are no findings of heart failure. He recalls no choking episode. Pulmonary embolism does not cause a fixed tracheal wheeze over six weeks.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate next in the emergency department?",
        options: [
          "Arterial blood gas analysis",
          "Contrast CT of the chest",
          "Serum BNP measurement",
          "Serum D-dimer measurement",
          "Sputum culture and sensitivity",
        ],
        correct: 1,
        explanation:
          "CT of the chest defines the site, length and cause of a central airway narrowing and helps plan bronchoscopic treatment. A D-dimer is not useful because pulmonary embolism is not the working diagnosis. A BNP adds little without signs of heart failure. Sputum culture and a blood gas do not locate or characterize an obstructing lesion.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ernst-cao",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would have best tested his original diagnosis of COPD?",
        options: [
          "Chest radiograph in two views",
          "Pulse oximetry at rest",
          "Six-minute walk test with oximetry",
          "Spirometry after bronchodilator",
          "Venous blood gas analysis",
        ],
        correct: 3,
        explanation:
          "GOLD requires spirometry showing persistent airflow obstruction after a bronchodilator to confirm COPD. His diagnosis was made without it, so a different cause of his symptoms was never excluded. A chest radiograph cannot confirm COPD. Pulse oximetry, a walk test and a venous gas measure the consequences of lung disease, not airflow obstruction.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "gold",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT shows a mass narrowing the distal trachea by about 70%. While he waits, his noisy breathing becomes louder and his SpO2 falls to 90% on room air.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Activate the rigid bronchoscopy team",
          "Admission to a medical ward",
          "BiPAP with high inspiratory pressure",
          "Continuous nebulized salbutamol",
          "Rapid sequence intubation in the ED",
        ],
        correct: 0,
        explanation:
          "A symptomatic, worsening malignant narrowing of the distal trachea needs urgent therapeutic bronchoscopy, and rigid bronchoscopy allows ventilation, debulking and stenting at the same time. A standard tube placed in the ED may not pass or bypass a distal tracheal lesion, and induction can turn partial obstruction into complete obstruction. Salbutamol has already failed because the narrowing is fixed. BiPAP does not relieve a mechanical obstruction. Routine ward admission delays definitive airway care.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "ernst-cao",
      },
    ],
    sources: [GINA, ERNST_CAO, GOLD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-19",
    topic: "asthma-copd",
    title: "Worse days after a lung procedure",
    stem: "A 69-year-old man with severe COPD presents to the emergency department with 3 hours of sudden worsening breathlessness and right-sided chest pain. Five days ago he had endobronchial valves placed in his right upper lobe to reduce hyperinflation. For 2 days before the pain began he had a cold with more sputum. He uses tiotropium-olodaterol and no home oxygen. He speaks in short phrases. Breath sounds are reduced over the right upper chest. He has no fever and no leg swelling. After salbutamol and ipratropium, a venous gas shows pH 7.30 and pCO2 64 mmHg.",
    vitals: {
      temperature: "37.2°C oral",
      pulse: "112/minute",
      resp: "30/minute",
      bp: "138/80 mmHg",
      o2sat: "86% on room air",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following most likely explains his sudden worsening five days after the procedure?",
        options: [
          "Acute heart failure",
          "Lobar collapse from mucus plugging",
          "Pneumonia in the treated lobe",
          "Pneumothorax after valve placement",
          "Pulmonary embolism"
        ],
        correct: 3,
        explanation: "The GOLD report describes pneumothorax as the main early complication of endobronchial valve treatment. It reports that about three quarters occur within 72 hours, so a later one is less common but still expected. Sudden pain with abruptly worse breathlessness and reduced breath sounds over the treated side fits it. Pneumonia would usually bring fever and a gradual course. Lobar collapse from mucus reduces breath sounds but rarely causes sudden pleuritic pain. Heart failure would usually bring leg swelling, and he has none. Pulmonary embolism can mimic an exacerbation, but the sudden onset after the procedure with focal signs on the treated side points first to pneumothorax.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gold"
      },
      {
        id: "q2",
        kind: "single",
        update: "A chest X-ray shows a large right pneumothorax. His venous pH is 7.30 and pCO2 64 mmHg despite bronchodilators and steroids.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Bilevel ventilation now, drain if worse",
          "Chest drain, then reassess for NIV",
          "Needle aspiration and discharge home",
          "Observe with a repeat X-ray in 6 hours",
          "Oxygen at 15 L/minute to speed reabsorption"
        ],
        correct: 1,
        explanation: "He has a large pneumothorax and acute hypercapnic acidosis. The BTS/ICS guideline notes that a pneumothorax usually needs intercostal drainage, followed by a review of whether noninvasive ventilation should continue. Positive pressure through an undrained pneumothorax risks enlarging it. Needle aspiration and discharge is unsafe in a hypercapnic patient with severe COPD. Observation leaves a large air leak untreated in a patient with little reserve. High-flow oxygen can worsen hypercapnia in COPD, where the guideline targets a saturation of 88 to 92%.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "bts-ics"
      },
      {
        id: "q3",
        kind: "single",
        update: "After the drain the lung has re-expanded, but his pH is 7.31 and pCO2 62 mmHg on optimal medical treatment. Bilevel ventilation is started. He is anxious and keeps pulling off the mask. He wants intubation if it is needed.",
        prompt: "Which of the following is the most appropriate step to help him tolerate noninvasive ventilation?",
        options: [
          "haloperidol 5 mg IM",
          "midazolam infusion IV",
          "morphine 2.5 mg IV",
          "propofol 1 mg/kg IV",
          "Stop NIV and use a Venturi mask"
        ],
        correct: 2,
        explanation: "The BTS/ICS guideline suggests that in an agitated or distressed patient on noninvasive ventilation, IV morphine 2.5 to 5 mg can relieve symptoms and may improve tolerance. Infused sedatives such as midazolam should only be used in a high dependency or intensive care setting. Propofol at 1 mg/kg is an anesthetic induction dose that would stop his breathing. Haloperidol treats agitation from delirium but does not address his air hunger. He still meets the criteria for noninvasive ventilation, with a pH below 7.35 and a pCO2 above 49 mmHg despite treatment, so stopping it is wrong.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      },
      {
        id: "q4",
        kind: "single",
        update: "He recovers and is ready for discharge. This is his second exacerbation treated with prednisone this year despite good inhaler technique. His blood eosinophil count is 0.40 x 10^9/L.",
        prompt: "Which of the following changes to his maintenance inhalers is most appropriate at discharge?",
        options: [
          "Add an inhaled corticosteroid",
          "Add azithromycin 250 mg PO daily",
          "Add montelukast 10 mg PO daily",
          "Switch to an ICS-LABA inhaler",
          "No change to his inhalers"
        ],
        correct: 0,
        explanation: "He has had a moderate or severe exacerbation while taking a LABA and a LAMA, and his eosinophil count of 0.40 x 10^9/L is 400 cells/microL. The GOLD report suggests escalating to LABA plus LAMA plus ICS in this situation, with a benefit seen from 100 cells/microL and more likely at higher counts. Azithromycin is considered mainly when eosinophils are below 100 cells/microL. Switching to an ICS-LABA would drop his LAMA, and the report states that triple therapy is superior to ICS-LABA when an ICS is indicated. Leukotriene modifiers have not been tested adequately in COPD. Leaving his inhalers unchanged ignores two exacerbations in a year.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gold"
      }
    ],
    sources: [
      GOLD,
      {
        id: "bts-ics",
        citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016.",
        url: "https://doi.org/10.1136/bmjresp-2016-000133"
      }
    ],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-20",
    topic: "asthma-copd",
    title: "A toddler working hard to breathe",
    stem:
      "A 3-year-old girl is brought to the emergency department by her father with two days of cough and runny nose and six hours of increasing work of breathing. She has had four previous wheezing episodes with colds and takes fluticasone 50 mcg twice daily by spacer. She has cow's milk protein allergy. She is anxious and sitting upright. There is suprasternal indrawing and scalene muscle contraction. She has inspiratory and expiratory wheeze with widespread decreased air entry.",
    vitals: {
      temperature: "37.8°C tympanic",
      pulse: "164/minute",
      resp: "48/minute",
      o2sat: "90% on room air",
      weight: "14 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following doses should be given for each of the three bronchodilator treatments in her first hour?",
        options: [
          "salbutamol 2.5 mg alone by neb",
          "salbutamol 5 mg alone by neb",
          "salbutamol 1.25 mg and ipratropium 125 mcg neb",
          "salbutamol 2.5 mg and ipratropium 250 mcg neb",
          "salbutamol 5 mg and ipratropium 500 mcg neb",
        ],
        correct: 3,
        explanation:
          "Her PRAM score is 10 (suprasternal 2, scalene 2, wheeze 2, air entry 2, SpO2 below 92% 2), a severe exacerbation. TREKK advises salbutamol with ipratropium every 20 minutes for three treatments or by near continuous nebulization in the first hour. For a child under 20 kg the salbutamol dose is 2.5 mg, and the ipratropium dose is 250 mcg at all weights. Salbutamol 5 mg is the dose for 20 kg or more, and 500 mcg of ipratropium is double the dose. The 1.25 mg and 125 mcg doses are too low, and salbutamol alone leaves out ipratropium, which helps most in severe distress.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "trekk-severe",
      },
      {
        id: "q2",
        kind: "single",
        update: "She vomits twice after the first treatment and will not take anything by mouth. An IV is placed.",
        prompt: "Which of the following corticosteroid orders is most appropriate for her now?",
        options: [
          "dexamethasone 8.4 mg IV",
          "dexamethasone 16.8 mg IV",
          "hydrocortisone 400 mg IV",
          "methylprednisolone 80 mg IV",
          "prednisolone 14 mg PO",
        ],
        correct: 0,
        explanation:
          "TREKK doses dexamethasone at 0.6 mg/kg to a maximum of 12 mg, so 0.6 x 14 kg gives 8.4 mg, and it may be given IV when she cannot take it by mouth. Dexamethasone 16.8 mg is 1.2 mg/kg and exceeds the 12 mg maximum. Hydrocortisone is dosed at 8 mg/kg, which is 112 mg, so 400 mg is far too much for her. Methylprednisolone is dosed at 2 mg/kg to a maximum of 80 mg, so 80 mg is almost three times her 28 mg dose, and TREKK also warns that methylprednisolone 40 mg vials are contraindicated in cow's milk protein allergy. Prednisolone by mouth will not stay down while she is vomiting.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "trekk-severe",
      },
      {
        id: "q3",
        kind: "single",
        update: "After one hour she is quieter and responds only to a loud voice. Her respiratory effort is decreasing. Venous pCO2 has risen from 38 mmHg to 55 mmHg.",
        prompt: "Which of the following is the most appropriate respiratory support to start while you call the referral centre?",
        options: [
          "High-flow nasal oxygen",
          "Manual ventilation by bag and mask",
          "Nasal prongs at 2 L/minute",
          "Rapid sequence intubation",
          "Simple face mask at 8 L/minute",
        ],
        correct: 0,
        explanation:
          "Decreasing effort, a falling level of consciousness and a rising pCO2 mark impending respiratory failure whatever her PRAM score. TREKK advises stepwise ventilatory support, starting with high-flow oxygen, then CPAP, then BiPAP. Intubation in pediatric asthma is high risk and a last resort, best done with the referral centre. She is still breathing on her own, so manual bag and mask ventilation is not yet needed. Nasal prongs and a simple face mask give oxygen but no support for her tiring muscles.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "trekk-severe",
      },
      {
        id: "q4",
        kind: "single",
        update: "She improves and is admitted. Her father asks about her risk of another severe attack.",
        prompt: "Which of the following history items would most increase her risk of future severe exacerbations?",
        options: [
          "Attends a daycare centre",
          "Eczema as an infant",
          "Father who has hay fever",
          "Oral steroids in March",
          "Wheezing only with colds",
        ],
        correct: 3,
        explanation:
          "TREKK lists a previous severe exacerbation needing systemic steroids, an ED visit or admission as a marker of higher risk, along with poor control, using more than two reliever inhalers a year and smoking. A course of oral steroids in March is therefore the key history item to ask about. Infant eczema, a parent with hay fever, daycare attendance and wheeze confined to colds are common in young children with asthma. None of them is one of the listed markers of severe exacerbation risk.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "trekk-asthma",
      },
    ],
    sources: [TREKK_SEVERE, TREKK_ASTHMA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-21",
    topic: "asthma-copd",
    title: "Better breathing, worse numbers",
    stem:
      "A 34-year-old man with asthma presents to the emergency department with a day of wheeze after a cold. He uses salbutamol only and has no controller inhaler. Over the past three hours he has received salbutamol 5 mg by nebulizer seven times, ipratropium 500 mcg three times and prednisone 50 mg PO. His wheeze is now faint and he speaks in full sentences, but he is breathing quickly and has a fine tremor. Peak flow has risen from 210 L/minute to 390 L/minute. His predicted value is 600 L/minute. The chest radiograph is normal.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "132/minute",
      resp: "30/minute",
      bp: "138/72 mmHg",
      o2sat: "96% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Venous gas: pH 7.29, pCO2 31 mmHg, HCO3 14 mmol/L. Lactate is 7.6 mmol/L, potassium 2.9 mmol/L and glucose 10.8 mmol/L. Serum ketones are negative.",
        prompt: "Which of the following is the most likely cause of his acid-base disturbance?",
        options: [
          "Diabetic ketoacidosis",
          "Hypercapnia from muscle fatigue",
          "Hypoxemia with tissue hypoxia",
          "Lactic acidosis from salbutamol",
          "Sepsis with hypoperfusion",
        ],
        correct: 3,
        explanation:
          "He has had 35 mg of nebulized salbutamol in three hours, and GINA warns that high dose SABA can cause lactic acidosis, hypokalemia and tachycardia. The resulting fast breathing can be mistaken for worsening asthma. His pCO2 of 31 mmHg excludes hypercapnia. Negative ketones with a glucose of 10.8 mmol/L exclude ketoacidosis. His SpO2 is 96% on room air, and he is afebrile with a normal radiograph, so tissue hypoxia and sepsis are unlikely.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate change to his treatment now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Continuous salbutamol nebulization",
          "magnesium sulfate 2 g IV",
          "Reduce salbutamol to as needed",
          "sodium bicarbonate 100 mmol IV",
        ],
        correct: 3,
        explanation:
          "His peak flow has improved from 35% to 65% of predicted and his wheeze is faint, so his rapid breathing is compensation for a metabolic acidosis rather than failing asthma. GINA advises considering SABA toxicity so that more salbutamol is not given for these signs, and reducing salbutamol removes the cause. Continuous salbutamol would worsen the acidosis. IV magnesium is for patients who fail to respond to initial treatment, and he is responding. He is alert with a low pCO2, so ventilatory support is not needed. Bicarbonate does not treat the cause.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        update: "Six hours later lactate is 2.0 mmol/L and peak flow is 450 L/minute. He walks the corridor without distress and his SpO2 stays at 97% on room air.",
        prompt: "Which of the following inhaler regimens is most appropriate to prescribe at discharge?",
        options: [
          "budesonide-formoterol maintenance and reliever",
          "montelukast 10 mg PO daily only",
          "salbutamol as needed only",
          "salbutamol every 4 hours regularly",
          "salmeterol twice daily with salbutamol",
        ],
        correct: 0,
        explanation:
          "GINA advises starting ICS-containing treatment before discharge, and the preferred regimen after an ED visit is maintenance and reliever therapy with ICS-formoterol. His peak flow is now 75% of predicted and he has passed an exertion check, so discharge is reasonable. Salbutamol alone is no longer recommended, and regular salbutamol can worsen asthma and mask deterioration. A long-acting beta agonist without an inhaled corticosteroid is unsafe in asthma. Montelukast alone does not give him the inhaled corticosteroid he needs.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following oral corticosteroid prescriptions is most appropriate at discharge?",
        options: [
          "prednisone 10 mg PO daily for 5 days",
          "prednisone 50 mg PO daily for 5 days",
          "prednisone 50 mg PO daily for 21 days",
          "prednisone 50 mg PO with 2-week taper",
          "No oral steroid if ICS is started",
        ],
        correct: 1,
        explanation:
          "GINA advises prednisone 40 to 50 mg daily for 5 to 7 days for adults after an ED visit, and short courses work as well as longer ones. A taper is not needed for a course under 2 weeks. A 21-day course adds steroid exposure without benefit, and 10 mg is below the effective dose. Systemic steroids are advised for all but the mildest exacerbations, and his started with a peak flow of 35% of predicted, so an inhaled corticosteroid does not replace the oral course.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina",
      },
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-22",
    topic: "asthma-copd",
    title: "A clear plan on the chart",
    stem:
      "An 84-year-old woman with very severe COPD is brought to the emergency department by ambulance with two days of worsening breathlessness. She uses oxygen at 2 L/minute at home. Her advance directive, confirmed with her and her son, declines intubation and cardiopulmonary resuscitation but accepts all other treatment. Her sputum is white and unchanged in amount. She has no fever. She is drowsy but opens her eyes to voice and follows commands. There is poor air entry with scattered wheeze. The chest radiograph shows hyperinflation without consolidation. Venous gas: pH 7.27, pCO2 84 mmHg, HCO3 37 mmol/L.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "108/minute",
      resp: "30/minute",
      bp: "144/80 mmHg",
      o2sat: "89% on 2 L/minute by nasal prongs",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support for her?",
        options: [
          "Bilevel positive pressure by mask",
          "Comfort care with morphine only",
          "High-flow oxygen by non-rebreather",
          "Intubation after family discussion",
          "Oxygen increased to 6 L/minute",
        ],
        correct: 0,
        explanation:
          "A pH of 7.27 with a pCO2 of 84 mmHg is acute on chronic hypercapnic acidosis, and the ERS and ATS recommend bilevel noninvasive ventilation for COPD with a pH of 7.35 or less. Her directive accepts every treatment except intubation and resuscitation, so noninvasive ventilation is her ceiling of care. Comfort care alone ignores treatment she has accepted. She has declined intubation. Raising the oxygen, by prongs or by non-rebreather, does not treat her ventilatory failure and may raise her pCO2 further.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "ers-ats-niv",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate antibiotic plan for her exacerbation?",
        options: [
          "Antibiotics started today",
          "Await procalcitonin before deciding",
          "Await sputum culture results",
          "Give antibiotics only if fever develops",
          "No antibiotics for this exacerbation",
        ],
        correct: 0,
        explanation:
          "GOLD advises antibiotics for any COPD exacerbation that needs mechanical ventilation, invasive or noninvasive, even without purulent sputum. She needs noninvasive ventilation, so antibiotics should start now. GOLD does not recommend procalcitonin-guided decisions because the evidence conflicts. Waiting for a sputum culture delays treatment, and fever is not required. Withholding antibiotics ignores the indication created by her need for ventilatory support.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "gold",
      },
      {
        id: "q3",
        kind: "single",
        update: "After one hour of bilevel ventilation she is more alert and tolerating the mask. Venous gas: pH 7.31, pCO2 72 mmHg.",
        prompt: "Which of the following is the most appropriate next step in her respiratory care?",
        options: [
          "Add IV midazolam for mask comfort",
          "Continue bilevel ventilation",
          "Lower the IPAP to reduce leak",
          "Stop bilevel and use nasal prongs",
          "Switch to CPAP at the same EPAP",
        ],
        correct: 1,
        explanation:
          "Her pH has risen from 7.27 to 7.31 and her pCO2 has fallen from 84 to 72 mmHg, but she is still acidotic, so bilevel ventilation should continue, with a repeat gas to confirm the trend. GOLD notes it can be stopped once she tolerates at least 4 hours unassisted, which she has not reached. Stopping now risks relapse. Midazolam can depress her breathing. Lowering the IPAP or switching to CPAP reduces the pressure support that is lowering her pCO2.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "gold",
      },
    ],
    sources: [ERS_ATS_NIV, GOLD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-23",
    topic: "asthma-copd",
    title: "Neck pain after a night of wheezing",
    stem:
      "A 17-year-old boy with asthma presents to the emergency department with two days of wheeze and one day of neck pain and a change in his voice. He has been coughing hard at night. He has not vomited or retched. He uses salbutamol several times a day and vapes daily. He speaks in full sentences. There is crepitus over both sides of the neck and above the clavicles. A crunching sound is heard with each heartbeat at the left sternal edge. Breath sounds are equal with scattered expiratory wheeze.",
    vitals: {
      temperature: "37.1°C oral",
      pulse: "112/minute",
      resp: "24/minute",
      bp: "124/70 mmHg",
      o2sat: "95% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely complication of his asthma?",
        options: [
          "Acute pericarditis",
          "Esophageal rupture",
          "Pneumomediastinum",
          "Retropharyngeal abscess",
          "Tension pneumothorax",
        ],
        correct: 2,
        explanation:
          "Crepitus in the neck with a crunching sound timed with the heartbeat (Hamman sign) after forceful coughing is spontaneous pneumomediastinum from alveolar rupture. He has not vomited or retched, which makes esophageal rupture unlikely. His breath sounds are equal and his BP is normal, which argues against tension pneumothorax. A retropharyngeal abscess causes fever and does not produce subcutaneous air. Pericarditis does not explain the air under the skin.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "kouritas-pm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations should be obtained first to confirm the diagnosis?",
        options: [
          "Bronchoscopy",
          "Chest radiograph",
          "Contrast esophagram",
          "Echocardiogram",
          "MRI of the neck",
        ],
        correct: 1,
        explanation:
          "A chest radiograph shows mediastinal and soft tissue air and checks for an associated pneumothorax. A contrast esophagram is reserved for suspected esophageal perforation, and he has had no vomiting or retching. Bronchoscopy is not needed to confirm alveolar air leak. An echocardiogram does not show mediastinal air. MRI is slow and adds nothing in this setting.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "kouritas-pm",
      },
      {
        id: "q3",
        kind: "single",
        update: "The radiograph shows air outlining the mediastinum and in the soft tissues of the neck. There is no pneumothorax.",
        prompt: "Which of the following is the most appropriate management of this complication?",
        options: [
          "Bilateral chest tubes",
          "Broad-spectrum IV antibiotics",
          "Nil by mouth and surgical consult",
          "Positive pressure ventilation",
          "Treat the asthma and observe",
        ],
        correct: 4,
        explanation:
          "Spontaneous pneumomediastinum in asthma is usually benign and settles once the asthma and cough are controlled, so treatment of the asthma with observation is appropriate. There is no pneumothorax, so chest tubes are not indicated. Antibiotics and surgical review with nil by mouth are for esophageal perforation, which is not suspected. Positive pressure ventilation can worsen an air leak.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "kouritas-pm",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following additional history items would most increase his risk of a fatal asthma attack?",
        options: [
          "Allergic rhinitis each spring",
          "Cough during hockey practice",
          "Mother with childhood asthma",
          "Onset of asthma at age 5",
          "Prednisone stopped last week",
        ],
        correct: 4,
        explanation:
          "GINA lists current use or recent stopping of oral corticosteroids as a red flag for fatal or near fatal asthma, because it marks a recent severe event. Other red flags include prior intubation, admission in the past year, not using an inhaled corticosteroid and heavy salbutamol use, which he already reports. Seasonal allergic rhinitis, exercise cough, a family history and childhood onset are common in asthma. None of these is among the listed red flags.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
    ],
    sources: [KOURITAS_PM, GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-24",
    topic: "asthma-copd",
    title: "Sudden pain on the right",
    stem:
      "You are working in a rural emergency department. The regional centre is 3 hours away by road. A 63-year-old woman with COPD and known bullous emphysema presents with 2 hours of sudden right-sided pleuritic chest pain and breathlessness that began while she was carrying groceries. She has had no fever and no change in her sputum. She takes a tiotropium and olodaterol inhaler. She speaks in short phrases. Breath sounds are reduced on the right. The trachea is midline.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "116/minute",
      resp: "30/minute",
      bp: "138/84 mmHg",
      o2sat: "88% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her sudden deterioration?",
        options: [
          "Acute coronary syndrome",
          "Acute pulmonary embolism",
          "Community-acquired pneumonia",
          "Infective COPD exacerbation",
          "Spontaneous pneumothorax",
        ],
        correct: 4,
        explanation:
          "Sudden pleuritic pain and breathlessness with reduced breath sounds on one side in a patient with bullous emphysema is a secondary spontaneous pneumothorax until proven otherwise. A COPD exacerbation develops over days with a change in sputum and gives bilateral findings. She has no fever or sputum change to suggest pneumonia. Pulmonary embolism does not explain breath sounds reduced on one side. Her pain is pleuritic rather than typical of an acute coronary syndrome.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "bts-pleural",
      },
      {
        id: "q2",
        kind: "single",
        update: "The chest radiograph shows a right pneumothorax with a 3 cm rim at the level of the hilum. The mediastinum is not shifted.",
        prompt: "Which of the following is the most appropriate management of her pneumothorax?",
        options: [
          "Large-bore 28 French chest tube",
          "Needle aspiration and discharge",
          "Observation without intervention",
          "Oxygen and repeat film in 4 hours",
          "Small-bore chest drain insertion",
        ],
        correct: 4,
        explanation:
          "She has a large secondary pneumothorax with breathlessness and an SpO2 of 88%, so it needs drainage, and the British Thoracic Society favours a small-bore drain inserted by the Seldinger technique. A large-bore tube is not needed for a spontaneous air leak. Patients with a secondary pneumothorax should be admitted, so aspiration with discharge is unsafe. Observation or oxygen alone is not appropriate while she is symptomatic and hypoxemic.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "bts-pleural",
      },
      {
        id: "q3",
        kind: "single",
        update: "A small-bore drain is placed and the lung partly re-expands. Her SpO2 is 87% on room air and her venous pCO2 is 52 mmHg.",
        prompt: "Which of the following oxygen plans is most appropriate for her now?",
        options: [
          "Controlled oxygen to 88 to 92%",
          "High-flow oxygen to target 98%",
          "Non-rebreather mask at 15 L/minute",
          "Oxygen to target 94 to 98%",
          "No oxygen once the drain is in",
        ],
        correct: 0,
        explanation:
          "Her SpO2 of 87% needs correcting, but her raised pCO2 of 52 mmHg marks her as at risk of hypercapnic respiratory failure, and the BTS target for such patients with COPD is 88 to 92%. High-flow oxygen to 98% or a non-rebreather mask at 15 L/minute can worsen hypercapnia. A target of 94 to 98% is the BTS range for patients who are not at risk of hypercapnia. Withholding oxygen leaves her hypoxemic while the lung is only partly re-expanded.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "bts-oxygen",
      },
    ],
    sources: [BTS_PLEURAL, BTS_OXYGEN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-25",
    topic: "asthma-copd",
    title: "Ready to go home after a busy night",
    stem:
      "An 8-year-old boy with asthma was brought to the emergency department at 01:00 with wheeze after a cold. His PRAM score on arrival was 6. He received salbutamol 10 puffs and ipratropium 4 puffs by spacer every 20 minutes three times, and dexamethasone 12 mg PO. At 03:30 he had one more salbutamol dose. He takes fluticasone 100 mcg twice daily, but his mother says he often forgets it. At home he uses his salbutamol inhaler without a spacer. It is now 05:30. He is watching videos and asking for breakfast.",
    vitals: {
      temperature: "37.2°C oral",
      pulse: "104/minute",
      resp: "22/minute",
      o2sat: "95% on room air",
      weight: "27 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "He now has no indrawing or scalene contraction, mild expiratory wheeze only, and normal air entry.",
        prompt: "Which of the following best describes his readiness for discharge at this time?",
        options: [
          "Needs a normal chest radiograph",
          "Needs a second dexamethasone dose first",
          "Needs 4 more hours of observation",
          "Needs no wheeze on auscultation",
          "Ready for discharge now",
        ],
        correct: 4,
        explanation:
          "His PRAM score is now 1 (expiratory wheeze 1 and 0 for the other items), and it is 2 hours since his last salbutamol at 03:30. TREKK allows discharge with a PRAM score of 3 or less at least 1 to 2 hours after the last bronchodilator, SpO2 of 92% or more on room air, and at most mild expiratory wheeze. He meets all of these and is eating. A chest radiograph is not required. TREKK suggests admission for a PRAM score of 4 or more persisting 4 to 6 hours after steroid, which does not apply. A second dexamethasone dose is optional and is not a condition of discharge.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "trekk-asthma",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following are most important to provide before he leaves the emergency department?",
        options: [
          "Chest radiograph at follow-up",
          "Follow-up within 7 days",
          "Home nebulizer machine",
          "montelukast in place of fluticasone",
          "Oral amoxicillin for 5 days",
          "Salbutamol regularly for 2 weeks",
          "Spacer for all MDI doses",
          "Written asthma action plan",
        ],
        select: 3,
        correct: [1, 6, 7],
        explanation:
          "TREKK advises a spacer for every MDI, a written asthma teaching and action plan, and follow-up with primary care ideally within 7 days. He uses his reliever without a spacer at home, so the spacer is essential. Salbutamol is given every 4 hours for 24 hours and then as needed, not regularly for 2 weeks. A nebulizer is not better than an MDI with spacer. Montelukast does not replace his inhaled corticosteroid. There is no infection to treat and no need for a follow-up radiograph.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "trekk-asthma",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following controller plans is most appropriate for him at discharge?",
        options: [
          "budesonide-formoterol as needed only",
          "fluticasone 100 mcg twice daily by spacer",
          "fluticasone 250 mcg twice daily by spacer",
          "montelukast 5 mg PO daily instead",
          "Stop fluticasone, use salbutamol alone",
        ],
        correct: 1,
        explanation:
          "TREKK advises that every child with a PRAM score of 4 or more goes home on daily inhaled corticosteroid, and 100 mcg twice daily is the low starting dose at 6 to 11 years. It advises moving to a medium dose only after technique, adherence and triggers have been addressed, and he often forgets his doses. Stopping his inhaled corticosteroid removes his protection against further attacks. TREKK reserves budesonide-formoterol for patients 12 years and older. Montelukast is not the preferred controller for him.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "trekk-asthma",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following salbutamol instructions is most appropriate for his first day at home?",
        options: [
          "1 puff every 8 hours",
          "2 to 4 puffs every 4 hours",
          "2 puffs twice daily",
          "10 puffs every hour",
          "10 puffs every 20 minutes",
        ],
        correct: 1,
        explanation:
          "TREKK suggests salbutamol 2 to 4 puffs every 4 hours for the first 24 hours after discharge, then 2 puffs every 4 hours as needed. Ten puffs every 20 minutes is the ED treatment dose, and needing 10 puffs every hour at home means he is not recovering and should return. One puff every 8 hours or 2 puffs twice daily is less than TREKK advises for the first day after a moderate exacerbation.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "trekk-asthma",
      },
    ],
    sources: [TREKK_ASTHMA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-26",
    topic: "asthma-copd",
    title: "Snoring and drowsy on arrival",
    stem: "A 61-year-old woman with COPD and obesity is brought to the emergency department by ambulance with 3 days of increasing breathlessness, cough and ankle swelling. Her partner says she snores loudly and stops breathing at night. She uses fluticasone-umeclidinium-vilanterol, has no home oxygen and takes no opioids or sedatives. She is drowsy but rousable and follows commands. She has scattered wheeze. After 1 hour of nebulized bronchodilators, prednisone and controlled oxygen, an arterial gas on 2 L/minute shows pH 7.22, PaCO2 88 mmHg, PaO2 62 mmHg and HCO3 35 mmol/L. Her body mass index is 46 kg/m2.",
    vitals: {
      temperature: "37.0°C oral",
      pulse: "104/minute",
      resp: "26/minute",
      bp: "152/88 mmHg",
      o2sat: "90% on 2 L/minute by nasal prongs",
      weight: "128 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support for her now?",
        options: [
          "Bilevel ventilation, intubation ready",
          "High-flow nasal oxygen at 60 L/minute",
          "Immediate intubation for the pH",
          "Oxygen increased to 6 L/minute",
          "Venturi mask, repeat gas in 1 hour"
        ],
        correct: 0,
        explanation: "Her pH is below 7.35 and her PaCO2 is above 49 mmHg after an hour of optimal medical treatment, so the BTS/ICS guideline recommends noninvasive ventilation. It adds that severe acidosis alone does not preclude a trial of noninvasive ventilation where staff can intubate safely, and she is still rousable and following commands. Intubating for the pH alone skips a trial that often succeeds. More oxygen would raise her PaCO2 further. A Venturi mask and waiting an hour leaves a pH of 7.22 untreated. High-flow nasal oxygen gives no set inspiratory pressure support, so it is not the first choice for her acidosis.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      },
      {
        id: "q2",
        kind: "single",
        update: "On bilevel ventilation with an IPAP of 16 and an EPAP of 5 cm H2O, she snores, her chest and abdomen move in opposite directions, and her tidal volumes stay low despite visible effort. The mask fits well without a leak.",
        prompt: "Which of the following ventilator changes is most appropriate for her?",
        options: [
          "Decrease the EPAP",
          "Decrease the IPAP",
          "Increase the EPAP",
          "Increase the oxygen only",
          "Switch to CPAP of 5 cm H2O"
        ],
        correct: 2,
        explanation: "Snoring with chest and abdominal paradox on noninvasive ventilation points to upper airway obstruction, and the BTS/ICS troubleshooting guide advises increasing the EPAP. Patients with obesity hypoventilation often need higher pressures than usual. Lowering either pressure worsens obstruction or ventilation. Adding oxygen alone treats the saturation but not the hypercapnia. CPAP of 5 cm H2O gives no inspiratory support to clear her carbon dioxide.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      },
      {
        id: "q3",
        kind: "single",
        update: "After further ventilator adjustment the snoring and paradox stop. One hour later she is more alert, but her tidal volumes are still small with a good mask seal. Her pH is 7.24 and PaCO2 84 mmHg.",
        prompt: "Which of the following is the most appropriate next step in her ventilatory support?",
        options: [
          "Continue unchanged, repeat gas in 4 hours",
          "Endotracheal intubation now",
          "High-flow nasal oxygen instead",
          "Increase the IPAP setting",
          "Lower the EPAP setting"
        ],
        correct: 3,
        explanation: "Her upper airway is now open, but small tidal volumes mean she is still underventilated. The BTS/ICS troubleshooting guide advises raising the IPAP when tidal volume is inadequate, and notes that patients with obesity hypoventilation often need high pressures, for example an IPAP above 30 and an EPAP above 8 cm H2O. She is more alert and her pH is improving, so she does not meet the guideline's triggers for invasive ventilation, such as a pH persisting below 7.15, a falling pH or a GCS below 8. Leaving the settings unchanged for 4 hours accepts inadequate ventilation. High-flow nasal oxygen gives no inspiratory pressure support. Lowering the EPAP would bring back the obstruction.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      }
    ],
    sources: [
      {
        id: "bts-ics",
        citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016.",
        url: "https://doi.org/10.1136/bmjresp-2016-000133"
      }
    ],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-27",
    topic: "asthma-copd",
    title: "Wheeze after dental pain",
    stem:
      "You are working in a community hospital emergency department. A 46-year-old woman with asthma presents with wheeze that began 40 minutes after she took ibuprofen 400 mg for a toothache. She has a blocked nose, watery eyes and a flushed face and neck. She has chronic sinusitis with nasal polyps and lost her sense of smell two years ago. She takes budesonide-formoterol as needed only. She has no cold symptoms, hives, lip swelling, vomiting or abdominal pain. She speaks in phrases and has diffuse expiratory wheeze.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "118/minute",
      resp: "28/minute",
      bp: "136/84 mmHg",
      o2sat: "91% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains the timing and features of her presentation?",
        options: [
          "Acute bacterial sinusitis",
          "Anaphylaxis to ibuprofen",
          "Aspirin-exacerbated respiratory disease",
          "Inducible laryngeal obstruction",
          "Viral-triggered asthma exacerbation",
        ],
        correct: 2,
        explanation:
          "GINA describes aspirin-exacerbated respiratory disease as asthma with nasal polyps and loss of smell, with an attack minutes to 2 hours after aspirin or another NSAID, often with rhinorrhea, eye irritation and flushing of the head and neck. She has all of these. Anaphylaxis is less likely without hives, lip swelling, vomiting or hypotension. She has no cold to suggest a viral trigger. Her wheeze is diffuse and expiratory rather than laryngeal. Sinusitis does not cause acute bronchospasm.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following initial treatment combinations is most appropriate for her?",
        options: [
          "IV aminophylline and salbutamol",
          "montelukast 10 mg PO and salbutamol",
          "Salbutamol and oxygen to target 98%",
          "Salbutamol, ipratropium, prednisone, oxygen",
          "Salbutamol, then observe for 1 hour",
        ],
        correct: 3,
        explanation:
          "She speaks in phrases with an SpO2 of 91%, so she needs a short-acting beta agonist with ipratropium, early oral corticosteroid, and oxygen because her saturation is below 92%. GINA 2026 sets the upper oxygen target at 95%, so aiming for 98% is too high. Salbutamol alone delays the corticosteroid, which takes hours to act. Aminophylline is not recommended because of poor efficacy and safety. Evidence for leukotriene receptor antagonists in acute asthma is limited.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        update: "She improves over three hours and is ready for discharge. Her toothache persists until her dental appointment in two days.",
        prompt: "Which of the following analgesics is most appropriate to prescribe for her toothache?",
        options: [
          "acetaminophen 650 mg PO every 6 hours",
          "diclofenac 50 mg PO three times daily",
          "ibuprofen 200 mg PO every 6 hours",
          "ketorolac 10 mg PO every 6 hours",
          "naproxen 250 mg PO twice daily",
        ],
        correct: 0,
        explanation:
          "GINA advises that patients with aspirin-exacerbated respiratory disease avoid aspirin, NSAIDs and other drugs that inhibit cyclooxygenase-1. Acetaminophen is not an NSAID and is the appropriate choice at a moderate dose. GINA advises that the first dose be given under supervision with at least 2 hours of observation, which can be done in the ED before she leaves. Diclofenac, ketorolac and naproxen are NSAIDs and can provoke another attack. A lower dose of ibuprofen is still an NSAID and does not remove the risk.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following items in her history would most warrant referral for specialist asthma care?",
        options: [
          "A sister with asthma",
          "Asthma diagnosed at age 30",
          "Mild eczema on her hands",
          "Night cough twice a year",
          "Two prednisone courses in 12 months",
        ],
        correct: 4,
        explanation:
          "GINA advises referral for expert advice when a patient has had one or more exacerbations needing oral corticosteroids or urgent care in the past 12 months. Two prednisone courses in the past year would meet that threshold on their own. A family history, adult onset, mild eczema and occasional night cough do not by themselves call for specialist care.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-28",
    topic: "asthma-copd",
    title: "Wheezing and living alone",
    stem: "A 68-year-old woman with asthma presents to the emergency department with 2 days of wheeze and breathlessness after a cold. She has never smoked and lives alone. She uses budesonide-formoterol twice daily and a salbutamol inhaler, and she has used 14 puffs of salbutamol in the past 24 hours. She was admitted for asthma last winter. She is speaking in phrases and has diffuse wheeze. Her predicted peak flow is 380 L/minute and her arrival peak flow is 120 L/minute. She receives salbutamol and ipratropium by spacer.",
    vitals: {
      temperature: "37.3°C oral",
      pulse: "110/minute",
      resp: "26/minute",
      bp: "146/84 mmHg",
      o2sat: "91% on room air"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best predicts whether she will need admission to hospital?",
        options: [
          "Chest X-ray findings",
          "Heart rate on arrival",
          "Oxygen saturation on arrival",
          "Peak flow on arrival",
          "Status and peak flow at 1 hour"
        ],
        correct: 4,
        explanation: "The GINA report states that clinical status, including the ability to lie flat, and lung function 1 hour after treatment starts are more reliable predictors of the need for hospitalization than the patient's status on arrival. Her arrival peak flow, heart rate and saturation describe how sick she was before treatment, not how she responds to it. A chest X-ray is not routinely recommended in asthma and does not predict the need for admission unless a complication is suspected.",
        keyFeature: {
          topic: "asthma-copd",
          n: 8
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        update: "After 1 hour of treatment her peak flow is 160 L/minute. Her SpO2 is 94% and she still cannot lie flat.",
        prompt: "Which of the following is the most appropriate disposition for her now?",
        options: [
          "Admit her for ongoing treatment",
          "Discharge after one more salbutamol dose",
          "Discharge home with oral prednisone",
          "Discharge if she walks without desaturating",
          "Observe for 2 hours, then discharge"
        ],
        correct: 0,
        explanation: "Her peak flow of 160 L/minute is 42% of her predicted 380 L/minute, and the GINA report lists a final peak flow below 50% of predicted among the features that increase the need for admission. She also cannot lie flat, is older, lives alone and had an admission last winter. Discharge after another dose, with prednisone alone, or after a fixed period of observation ignores her poor lung function. A walking test cannot replace an objective peak flow that is still below half of predicted.",
        keyFeature: {
          topic: "asthma-copd",
          n: 8
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following features in her history increase her likelihood of needing admission?",
        options: [
          "Admission for asthma last winter",
          "Age of 68 years",
          "Budesonide-formoterol as her controller",
          "Cold as the trigger",
          "Lifelong non-smoker",
          "Normal temperature",
          "Salbutamol 14 puffs in 24 hours"
        ],
        select: 3,
        correct: [
          0,
          1,
          6
        ],
        explanation: "The GINA report lists older age, use of more than 8 beta2-agonist actuations in the previous 24 hours and a past history of severe exacerbations such as asthma admissions among the factors linked to a greater need for hospitalization. She has all three. Taking an inhaled corticosteroid-formoterol controller reduces the risk of severe exacerbations, so it does not add to her risk. A cold as the trigger is not among the listed factors. Being a lifelong non-smoker and having a normal temperature do not increase her risk.",
        keyFeature: {
          topic: "asthma-copd",
          n: 8
        },
        source: "gina"
      },
      {
        id: "q4",
        kind: "single",
        update: "Later that day she vomits twice and cannot keep tablets down.",
        prompt: "Which of the following corticosteroid orders is most appropriate for her today?",
        options: [
          "dexamethasone 12 mg PO once",
          "methylprednisolone 40 mg IV daily",
          "methylprednisolone 125 mg IV every 6 hours",
          "prednisone 50 mg PO daily",
          "No corticosteroid until the vomiting stops"
        ],
        correct: 1,
        explanation: "The GINA report states that oral corticosteroids are as effective as IV, but that IV corticosteroids can be given when a patient is vomiting. The usual adult dose is equivalent to prednisone 50 mg a day, and methylprednisolone 40 mg IV is that equivalent dose. Oral prednisone or dexamethasone will not stay down while she is vomiting. Methylprednisolone 125 mg every 6 hours is several times the needed dose and adds side effects without benefit. Withholding steroids from a patient admitted with a severe flare delays a treatment that speeds recovery.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gina"
      }
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-29",
    topic: "asthma-copd",
    title: "New wheeze at seventy",
    stem:
      "A 69-year-old woman presents to the emergency department with five days of wheeze and breathlessness. She has never had asthma or COPD and has never smoked. Ten days ago her ophthalmologist started new eye drops for glaucoma. She also takes amlodipine for hypertension. She has no chest pain, fever, leg swelling or orthopnea. She speaks in full sentences. There is diffuse expiratory wheeze. Heart sounds are normal, the JVP is not raised and there is no edema. The ECG shows sinus bradycardia.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "54/minute",
      resp: "22/minute",
      bp: "132/76 mmHg",
      o2sat: "94% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following glaucoma drops would most likely explain her new wheeze and slow pulse?",
        options: [
          "brimonidine drops",
          "dorzolamide drops",
          "latanoprost drops",
          "timolol drops",
          "travoprost drops",
        ],
        correct: 3,
        explanation:
          "Timolol is a nonselective beta blocker, and drops are absorbed systemically enough to cause bronchospasm and bradycardia, which fits her new wheeze and pulse of 54/minute. GINA notes that beta blockers, including topical eye preparations, can cause bronchospasm. Latanoprost and travoprost are prostaglandin analogues, dorzolamide is a carbonic anhydrase inhibitor and brimonidine is an alpha agonist. None of them blocks beta receptors in the airway.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for her bronchospasm?",
        options: [
          "epinephrine 0.5 mg IM once",
          "glucagon 5 mg IV over 2 minutes",
          "ipratropium and salbutamol by spacer",
          "magnesium sulfate 2 g IV over 20 minutes",
          "prednisone 50 mg PO alone",
        ],
        correct: 2,
        explanation:
          "Inhaled bronchodilators should start at once, and adding ipratropium gives a route of bronchodilation that does not depend on beta receptors while beta blockade may blunt salbutamol. Her BP is normal and she is only mildly bradycardic, so glucagon for beta blocker toxicity is not needed. Epinephrine is for anaphylaxis, which she does not have. Magnesium is reserved for severe bronchospasm that fails initial treatment. Prednisone alone delays relief of her symptoms.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "ind-anticholinergic",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important step before she is discharged?",
        options: [
          "Add a second glaucoma drop",
          "Change the eye drops",
          "Prescribe prednisone for 14 days",
          "Refer for an allergy skin test",
          "Start daily fluticasone inhaler",
        ],
        correct: 1,
        explanation:
          "Her wheeze is caused by the beta blocker drops, so the prescriber should be contacted to switch her to a drop that does not block beta receptors. GINA advises that beta blocker prescribing in patients with bronchospasm be decided case by case with the prescriber. Adding a second drop leaves the cause in place. A long steroid course or a daily inhaled corticosteroid treats the result rather than the cause. Allergy testing does not address a drug effect.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
    ],
    sources: [GINA, IND_ANTICHOLINERGIC],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-30",
    topic: "asthma-copd",
    title: "Cough after cleaning the pump room",
    stem:
      "A 42-year-old man presents to the emergency department 40 minutes after cleaning the pump room at a community pool. He mixed a bleach solution with an acid cleaner in a bucket and noticed a strong smell and a yellow-green haze. He developed burning eyes, a sore throat, cough and chest tightness. He did not vomit or lose consciousness. He has no history of asthma and does not smoke. He takes no medications. His eyes are red and watering. He speaks in full sentences. There is diffuse expiratory wheeze without crackles.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "104/minute",
      resp: "24/minute",
      bp: "138/82 mmHg",
      o2sat: "94% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following gases most likely caused his symptoms?",
        options: [
          "Ammonia gas",
          "Carbon monoxide",
          "Chloramine vapour",
          "Chlorine gas",
          "Hydrogen sulfide",
        ],
        correct: 3,
        explanation:
          "Mixing bleach with an acid releases chlorine, a yellow-green gas that irritates the eyes, throat and airways and can constrict the airways. Chloramine is released when bleach is mixed with ammonia, not acid. Ammonia is highly soluble and mainly burns the upper airway. Carbon monoxide is colourless and does not cause eye irritation or wheeze. Hydrogen sulfide smells of rotten eggs and is not produced by these products.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "atsdr-chlorine",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for his wheeze and chest tightness?",
        options: [
          "hydroxocobalamin 5 g IV",
          "Hyperbaric oxygen therapy",
          "Inhaled salbutamol by spacer",
          "methylprednisolone 1 g IV",
          "Prophylactic IV antibiotics",
        ],
        correct: 2,
        explanation:
          "After removal from exposure and eye irrigation, bronchospasm from chlorine is treated with an inhaled beta agonist, as for asthma. Hyperbaric oxygen is for carbon monoxide poisoning and hydroxocobalamin is for cyanide, and neither exposure occurred. Pulse dose methylprednisolone has no proven role in irritant gas injury. Prophylactic antibiotics do not treat a chemical injury and are not part of initial care.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "white-chlorine",
      },
      {
        id: "q3",
        kind: "single",
        update: "His wheeze improves with salbutamol. Two hours later he is breathless again, his SpO2 is 89% on room air, and there are fine crackles at both bases.",
        prompt: "Which of the following best explains his deterioration at two hours?",
        options: [
          "Acute heart failure",
          "Aspiration pneumonia",
          "Chemical pneumonitis",
          "Rebound bronchospasm",
          "Spontaneous pneumothorax",
        ],
        correct: 2,
        explanation:
          "Chlorine injures the alveolar lining as well as the airways, and new bilateral crackles with hypoxemia after an irritant gas exposure point to chemical pneumonitis with noncardiogenic pulmonary edema. Rebound bronchospasm would cause wheeze rather than basal crackles. He is 42, takes no medications and developed crackles only after a toxic inhalation, so heart failure is unlikely. There was no vomiting or loss of consciousness to cause aspiration. A pneumothorax gives reduced breath sounds on one side rather than bilateral crackles.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "white-chlorine",
      },
    ],
    sources: [WHITE_CHLORINE, ATSDR_CHLORINE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-31",
    topic: "asthma-copd",
    title: "Wet and wheezy",
    stem:
      "A 76-year-old man with COPD and ischemic cardiomyopathy presents to the emergency department with five days of worsening breathlessness. He now sleeps sitting in a chair. His ankles have been more swollen for a week. His sputum is unchanged and he has no chest pain. He takes tiotropium-olodaterol, furosemide 40 mg daily, bisoprolol and sacubitril-valsartan. He ran out of furosemide eight days ago. He speaks in short phrases. There is expiratory wheeze with crackles to the mid-lung fields on both sides. The JVP is 6 cm above the sternal angle and there is pitting edema to the knees.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "106/minute",
      resp: "30/minute",
      bp: "164/94 mmHg",
      o2sat: "88% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely primary cause of his current deterioration?",
        options: [
          "Acute coronary syndrome",
          "Acute heart failure",
          "Acute pulmonary embolism",
          "Community-acquired pneumonia",
          "Infective COPD exacerbation",
        ],
        correct: 1,
        explanation:
          "Orthopnea, rising edema, a raised JVP and bilateral crackles after stopping his furosemide point to decompensated heart failure. GOLD notes that heart failure can mimic or worsen a COPD exacerbation. His unchanged sputum makes a COPD exacerbation or pneumonia less likely as the main problem. He has no chest pain, and bilateral crackles with edema favour heart failure over pulmonary embolism.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "gold",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests best supports the leading diagnosis given his current medications?",
        options: [
          "BNP measurement",
          "D-dimer measurement",
          "NT-proBNP measurement",
          "Peak expiratory flow",
          "Sputum culture",
        ],
        correct: 2,
        explanation:
          "Natriuretic peptides support a diagnosis of heart failure in breathless patients, and the Canadian Cardiovascular Society advises NT-proBNP rather than BNP in patients taking sacubitril-valsartan. Sacubitril blocks the breakdown of BNP, so BNP rises with the drug itself and is harder to interpret, while NT-proBNP is not a neprilysin substrate. D-dimer and sputum culture do not address heart failure. Peak flow is low in both heart failure and COPD, so it does not separate them.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "ccs-hf",
      },
      {
        id: "q3",
        kind: "single",
        update: "Venous gas: pH 7.30, pCO2 59 mmHg. He is alert and cooperative.",
        prompt: "Which of the following is the most appropriate respiratory support to start now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Nasal prongs at 6 L/minute",
          "Non-rebreather mask at 15 L/minute",
          "Rapid sequence intubation",
          "Venturi mask at 28%",
        ],
        correct: 0,
        explanation:
          "He has both a hypercapnic acidosis (pH 7.30) and cardiogenic pulmonary edema, and the ERS and ATS support noninvasive ventilation for each. Bilevel ventilation offloads his breathing, lowers pCO2 and reduces preload. He is alert and cooperative, so intubation is not the first step. Oxygen alone by prongs, Venturi mask or non-rebreather does not correct his ventilatory failure, and high flows can worsen hypercapnia.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "ers-ats-niv",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following drug treatments should be started first for his main problem?",
        options: [
          "ceftriaxone 1 g IV",
          "furosemide 80 mg IV",
          "furosemide 20 mg PO",
          "morphine 4 mg IV",
          "normal saline 500 mL IV",
        ],
        correct: 1,
        explanation:
          "He is volume overloaded, and the Canadian Cardiovascular Society advises an IV loop diuretic for congestion. In a patient already taking a loop diuretic, the first IV dose is usually at least equal to the home oral dose, and furosemide 80 mg IV is twice his 40 mg. Oral furosemide 20 mg is below his usual dose and gut edema reduces absorption. Routine morphine is not recommended in acute heart failure. There are no signs of infection to justify ceftriaxone. Saline would worsen his congestion.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "ccs-hf",
      },
    ],
    sources: [GOLD, CCS_HF, ERS_ATS_NIV],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-32",
    topic: "asthma-copd",
    title: "Fine sitting down",
    stem:
      "A 14-year-old boy with asthma is brought to the emergency department by his mother with a day of wheeze and cough after a cold. He takes fluticasone 125 mcg twice daily. He received salbutamol, ipratropium and dexamethasone 12 mg PO. Two hours after his last salbutamol dose he says he feels fine and wants to go home. He is sitting on the stretcher playing a game. He speaks in full sentences, has no indrawing and has faint end-expiratory wheeze. His peak flow is 330 L/minute and his personal best is 440 L/minute.",
    vitals: {
      temperature: "37.0°C oral",
      pulse: "100/minute",
      resp: "20/minute",
      o2sat: "95% on room air",
      weight: "52 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate step before deciding on his discharge?",
        options: [
          "Chest radiograph",
          "Exertion test with oximetry",
          "Repeat peak flow in 4 hours",
          "Second dexamethasone dose now",
          "Venous blood gas",
        ],
        correct: 1,
        explanation:
          "He looks well at rest with a peak flow of 75% of his best (330 of 440 L/minute), but rest can hide incomplete recovery. Watching him walk or climb stairs with oximetry tests whether the improvement holds with exertion before he goes home. A chest radiograph and venous gas are not needed in an uncomplicated exacerbation that is improving. Waiting 4 more hours for a repeat peak flow delays discharge without testing him under effort. A second dexamethasone dose is optional and does not show whether he is ready.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "rosen-ch163",
      },
      {
        id: "q2",
        kind: "single",
        update: "He climbs two flights of stairs with the nurse. He stops halfway, is using his neck muscles, and his SpO2 falls to 90% and stays there after 5 minutes of rest. Peak flow is 250 L/minute.",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "Discharge once SpO2 reaches 92%",
          "Discharge with a spacer and plan",
          "Discharge with oral prednisone",
          "Further bronchodilator treatment",
          "Intubation and ICU admission",
        ],
        correct: 3,
        explanation:
          "Exertion has unmasked an incomplete recovery. His SpO2 is 90%, below the TREKK discharge threshold of 92% on room air, his peak flow has fallen to 57% of his best (250 of 440 L/minute), and he is using accessory muscles. He needs further bronchodilator treatment and reassessment rather than discharge. A spacer, an action plan or oral prednisone do not fix his current state. He is alert and talking, so intubation is not indicated.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "trekk-asthma",
      },
      {
        id: "q3",
        kind: "single",
        update: "After further treatment he passes a repeat stair test with SpO2 of 96% and peak flow of 400 L/minute.",
        prompt: "Which of the following is the most appropriate timing for his primary care follow-up after discharge?",
        options: [
          "2 to 7 days",
          "3 to 4 weeks",
          "6 to 8 weeks",
          "10 to 12 weeks",
          "No routine follow-up",
        ],
        correct: 0,
        explanation:
          "GINA advises a follow-up appointment within 2 to 7 days of an ED visit for adolescents and adults, to check recovery, adherence and inhaler technique. His exertional drop in the ED shows why early review matters. Waiting 3 weeks or more falls well outside that window. Leaving follow-up to chance is not appropriate after an exacerbation that needed ED care.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
    ],
    sources: [TREKK_ASTHMA, GINA, ROSEN_CH163],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-33",
    topic: "asthma-copd",
    title: "How sick is this flare",
    stem:
      "You are working in a community hospital emergency department. A 69-year-old man with COPD presents with four days of increased breathlessness and more purulent sputum. He rates his breathlessness as 7 out of 10 on a visual analogue scale. His usual resting SpO2 is 94% on room air. He takes umeclidinium-vilanterol. He is alert and speaks in sentences. There is scattered expiratory wheeze with no crackles and no leg edema. The chest radiograph shows no consolidation. CRP is 46 mg/L. Arterial gas on room air: pH 7.37, PaCO2 49 mmHg, PaO2 62 mmHg.",
    vitals: {
      temperature: "37.4°C oral",
      pulse: "102/minute",
      resp: "26/minute",
      bp: "146/88 mmHg",
      o2sat: "88% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the severity of his exacerbation using the GOLD Rome criteria?",
        options: [
          "Life-threatening exacerbation",
          "Mild exacerbation",
          "Moderate exacerbation",
          "Pneumonia, not an exacerbation",
          "Severe exacerbation",
        ],
        correct: 2,
        explanation:
          "The Rome criteria in GOLD call an exacerbation moderate when at least three of five thresholds are met, and he meets all five: dyspnea 7 (5 or more), respiratory rate 26 (24 or more), pulse 102 (95 or more), SpO2 88% (below 92%, and 6 points below his usual) and CRP 46 mg/L (10 or more). In the original Rome proposal, severe requires hypercapnia with acidosis, a PaCO2 above 45 mmHg with a pH below 7.35. The GOLD figure also lists a PaO2 of 60 mmHg or less under severe. His pH is 7.37 and his PaO2 is 62 mmHg, so he is not severe by either version. The Rome scheme has no life-threatening grade. His radiograph shows no consolidation.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gold",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support for him now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Controlled oxygen to 88 to 92%",
          "CPAP at 10 cm H2O",
          "Non-rebreather mask at 15 L/minute",
          "Oxygen to target 96 to 98%",
        ],
        correct: 1,
        explanation:
          "He is hypoxemic with a raised PaCO2 of 49 mmHg, and the BTS target for patients with COPD at risk of hypercapnia is 88 to 92%, which corrects hypoxemia without worsening hypercapnia. His pH of 7.37 is not acidotic, so he does not have the hypercapnic acidosis that calls for bilevel ventilation. CPAP gives no inspiratory pressure support and is not the ventilatory mode used for COPD. A non-rebreather mask or a target of 96 to 98% gives more oxygen than he needs and risks raising his PaCO2.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-oxygen",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following medications are most appropriate to start now for his exacerbation?",
        options: [
          "amoxicillin-clavulanate 875 mg PO BID",
          "furosemide 40 mg IV",
          "IV aminophylline infusion",
          "montelukast 10 mg PO",
          "Nebulized magnesium sulfate",
          "prednisone 40 mg PO daily",
          "Salbutamol with ipratropium",
        ],
        select: 3,
        correct: [0, 5, 6],
        explanation:
          "GOLD recommends short-acting bronchodilators with or without a short-acting anticholinergic, prednisone 40 mg daily for 5 days, and antibiotics when increased sputum purulence comes with increased dyspnea or sputum volume. He has increased breathlessness and purulent sputum, and amoxicillin-clavulanate is one of the recommended first-line choices. Methylxanthines such as aminophylline are not recommended because of side effects. He has no signs of heart failure needing furosemide. Montelukast and nebulized magnesium are not among the treatments GOLD recommends for COPD exacerbations.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gold",
      },
    ],
    sources: [GOLD, BTS_OXYGEN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-34",
    topic: "asthma-copd",
    title: "Not responding as expected",
    stem:
      "A 6-year-old boy is brought to the emergency department with three days of cough, tiredness and fast breathing after a week of fever and diarrhea. His mother says he wheezed once with a cold at age 3. He has received salbutamol 10 puffs by spacer three times and dexamethasone 12 mg PO with no improvement. He is pale and lies quietly. There is soft expiratory wheeze with fine crackles at both bases. There is a gallop rhythm. The liver edge is 4 cm below the right costal margin. Capillary refill is 4 seconds.",
    vitals: {
      temperature: "37.5°C oral",
      pulse: "168/minute",
      resp: "44/minute",
      bp: "86/54 mmHg",
      o2sat: "93% on room air",
      weight: "22 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings most strongly suggest a cardiac cause for his presentation?",
        options: [
          "Cough for three days",
          "Expiratory wheeze",
          "Gallop rhythm on auscultation",
          "Liver edge 4 cm below the margin",
          "Prior wheeze with a cold",
          "Respiratory rate of 44/minute",
          "SpO2 of 93% on room air",
        ],
        select: 2,
        correct: [2, 3],
        explanation:
          "A gallop rhythm and an enlarged liver point to heart failure, and after a viral illness with poor response to asthma treatment this raises concern for myocarditis. TREKK lists concern for an underlying cardiac problem as a reason to involve the pediatric referral centre in a child treated for severe asthma. Wheeze, cough, tachypnea and mild hypoxemia occur in both asthma and heart failure. One previous wheeze with a cold does not confirm asthma.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "trekk-severe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following bedside investigations should be done first to support your concern?",
        options: [
          "Focused cardiac ultrasound",
          "Nasopharyngeal viral swab",
          "Peak expiratory flow",
          "Serum magnesium level",
          "Venous blood gas",
        ],
        correct: 0,
        explanation:
          "A focused cardiac ultrasound at the bedside can quickly show a dilated, poorly contracting ventricle and change management within minutes. A viral swab does not assess cardiac function. A 6-year-old in distress may not do a reliable peak flow, and it would not separate asthma from heart failure. A magnesium level and a venous gas do not identify a cardiac cause.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "rosen-ch165",
      },
      {
        id: "q3",
        kind: "single",
        update: "Bedside ultrasound shows a dilated, poorly contracting left ventricle.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Continuous salbutamol nebulization",
          "magnesium sulfate 1 100 mg IV",
          "Normal saline 20 mL/kg IV rapidly",
          "Repeat dexamethasone dose",
          "Urgent PICU and cardiology consult",
        ],
        correct: 4,
        explanation:
          "He has poor perfusion (capillary refill 4 seconds, BP 86/54 mmHg, pulse 168/minute) with a failing left ventricle, so he needs urgent intensive care and cardiology input. TREKK warns to consider cardiogenic shock if a child deteriorates after IV fluid, and a rapid 20 mL/kg bolus can worsen pulmonary edema. Continuous salbutamol adds tachycardia without treating the cause. Magnesium and more dexamethasone are asthma treatments that do not help a failing heart.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "trekk-severe",
      },
    ],
    sources: [TREKK_SEVERE, ROSEN_CH165],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-35",
    topic: "asthma-copd",
    title: "Smoky air and a tight chest",
    stem: "You are working in an emergency department in the British Columbia interior during a week of heavy wildfire smoke. A 45-year-old woman with asthma presents with 1 day of chest tightness, cough and wheeze. She uses a salbutamol inhaler only and has used it 10 times since yesterday. She had a course of prednisone for asthma 4 months ago. She has no fever, hives, lip swelling or throat tightness. She speaks in phrases and has diffuse wheeze. Her peak flow is 190 L/minute, and her predicted value is 400 L/minute.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "108/minute",
      resp: "24/minute",
      bp: "132/80 mmHg",
      o2sat: "94% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first bronchodilator treatment for her?",
        options: [
          "aminophylline IV loading dose",
          "epinephrine 0.5 mg IM",
          "magnesium sulfate 2 g IV",
          "montelukast 10 mg PO",
          "salbutamol by inhaler and spacer"
        ],
        correct: 4,
        explanation: "The GINA report advises starting a short-acting beta2-agonist while severity is being assessed, in most patients by metered-dose inhaler and spacer. Her peak flow is 48% of predicted, a moderate to severe flare, so ipratropium is also added early. Epinephrine is not indicated for asthma without anaphylaxis, and she has no features of it. Magnesium is reserved for patients who fail to respond to initial treatment. Aminophylline should not be used because of poor efficacy and safety. The evidence for leukotriene receptor antagonists in acute asthma is limited.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following systemic corticosteroid orders is most appropriate for her now?",
        options: [
          "budesonide nebulized alone",
          "methylprednisolone 125 mg IV",
          "prednisone 10 mg PO daily",
          "prednisone 50 mg PO now",
          "No corticosteroid unless salbutamol fails"
        ],
        correct: 3,
        explanation: "Systemic corticosteroids should be used in all but the mildest exacerbations and given within 1 hour of presentation where possible. They matter most when the patient has needed oral corticosteroids for past flares, as she has. Oral treatment is as effective as IV and is preferred when she can swallow, so IV methylprednisolone adds nothing. The usual adult dose is equivalent to prednisone 50 mg a day, so 10 mg is too low. Waiting to see whether salbutamol fails delays a drug that needs at least 4 hours to act. High-dose inhaled budesonide alone is not the preferred treatment for a flare of this severity in a patient who has needed oral courses before.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "menu",
        update: "Three hours later her peak flow is 330 L/minute, her SpO2 is 97% and she wants to go home. She will stay indoors with a portable air cleaner while the smoke lasts.",
        prompt: "Which of the following should be part of her discharge plan?",
        options: [
          "Antibiotic course for 5 days",
          "Budesonide-formoterol maintenance and reliever",
          "Follow-up visit within 2 to 7 days",
          "Home nebulizer for salbutamol",
          "Montelukast instead of an inhaled steroid",
          "Prednisone taper over 3 weeks",
          "Salbutamol alone as needed",
          "Written asthma action plan"
        ],
        select: 3,
        correct: [
          1,
          2,
          7
        ],
        explanation: "The GINA report advises that every patient leaves on ICS-containing treatment, preferably budesonide-formoterol maintenance-and-reliever therapy after an emergency visit, with a follow-up visit in 2 to 7 days and a written action plan. Salbutamol alone is no longer recommended. Tapering prednisone gives no benefit over stopping a short course. Antibiotics are not recommended without strong evidence of lung infection, and she has none. Nebulized salbutamol use is a red flag for fatal asthma rather than a safer option. Montelukast is less effective than inhaled corticosteroids.",
        keyFeature: {
          topic: "asthma-copd",
          n: 8
        },
        source: "gina"
      }
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-36",
    topic: "asthma-copd",
    title: "Wheezing with no diagnosis yet",
    stem: "A 58-year-old man presents to the emergency department with 2 days of worsening breathlessness and wheeze after a cold. He has never been given a lung diagnosis, but he has had a winter cough for years and wheezes when he has a cold. He has smoked a pack a day for 40 years. He takes no regular inhalers. He speaks in short phrases, uses his neck muscles to breathe and has a barrel-shaped chest with diffuse wheeze. He has no leg swelling. A venous bicarbonate is 34 mmol/L. No spirometry or chest X-ray is available yet.",
    vitals: {
      temperature: "37.1°C oral",
      pulse: "116/minute",
      resp: "30/minute",
      bp: "148/86 mmHg",
      o2sat: "86% on room air",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in his treatment?",
        options: [
          "Chest X-ray before any bronchodilator",
          "furosemide 40 mg IV",
          "Salbutamol and ipratropium now",
          "Spirometry to confirm the diagnosis",
          "Wait for a blood gas before treatment"
        ],
        correct: 2,
        explanation: "Whether this proves to be asthma, COPD or both, he has severe airflow obstruction now. The GINA report advises assessing severity while starting a short-acting beta2-agonist and oxygen, and the GOLD report recommends a short-acting beta2-agonist with or without a short-acting anticholinergic as the initial bronchodilator for an exacerbation. Spirometry confirms a diagnosis later, not during a severe flare. A chest X-ray and a blood gas are useful, but neither should delay bronchodilators. He has no edema or other features of heart failure to justify furosemide.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "gold"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oxygen saturation targets is most appropriate for him until a blood gas is available?",
        options: [
          "84 to 88%",
          "88 to 92%",
          "93 to 95%",
          "96 to 98%",
          "98 to 100%"
        ],
        correct: 1,
        explanation: "His 40 pack-year smoking history, chronic cough, barrel chest and venous bicarbonate of 34 mmol/L suggest chronic carbon dioxide retention. The BTS/ICS guideline advises a saturation target of 88 to 92% for COPD exacerbations, which limits worsening hypercapnia while still correcting hypoxemia. The 93 to 95% target used in asthma, and higher targets, risk raising his carbon dioxide if he retains it. A target of 84 to 88% accepts hypoxemia with no added benefit.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "bts-ics"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 1 hour of treatment he is alert and cooperative. A venous gas shows pH 7.31 and pCO2 60 mmHg. He still has diffuse wheeze and a respiratory rate of 28/minute.",
        prompt: "Which of the following is the most appropriate respiratory support for him now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Continue treatment, recheck in 4 hours",
          "High-flow oxygen by non-rebreather mask",
          "Immediate endotracheal intubation",
          "IV aminophylline infusion"
        ],
        correct: 0,
        explanation: "His pH is below 7.35 and his pCO2 is above 49 mmHg despite an hour of treatment, and he is alert and cooperative. The BTS/ICS guideline recommends noninvasive ventilation in this situation for COPD. It advises against noninvasive ventilation in acute asthma, but states that hypercapnia complicating chronic asthma closely resembles COPD and should be managed the same way, so the uncertain diagnosis does not change the decision. Waiting 4 hours leaves the acidosis untreated. A non-rebreather mask would worsen hypercapnia. He does not yet need intubation. Aminophylline is not recommended because of its side effects.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      },
      {
        id: "q4",
        kind: "single",
        update: "Four days later he is ready for discharge. Spirometry after salbutamol shows an FEV1/FVC of 0.61, and his FEV1 rose by 450 mL (24%) after the bronchodilator.",
        prompt: "Which of the following maintenance inhaler regimens is most appropriate for him at discharge?",
        options: [
          "budesonide-formoterol twice daily",
          "montelukast 10 mg PO daily",
          "Salbutamol as needed alone",
          "tiotropium alone once daily",
          "tiotropium-olodaterol inhaler once daily"
        ],
        correct: 0,
        explanation: "A post-bronchodilator FEV1/FVC below 0.7 after 40 pack-years points to COPD, while wheeze with colds and a large bronchodilator response point to asthma. The GINA report advises that patients with features of both be treated as asthma with ICS-containing therapy, and that a LABA and/or LAMA must not be given alone without an ICS, because of the risk of severe exacerbations and death. Tiotropium-olodaterol is a usual first choice in COPD, but without an inhaled corticosteroid it is unsafe if he has asthma. Tiotropium alone has the same problem. Salbutamol alone leaves both conditions without a controller. Montelukast is less effective than an inhaled corticosteroid.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gina"
      }
    ],
    sources: [
      GINA,
      GOLD,
      {
        id: "bts-ics",
        citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016.",
        url: "https://doi.org/10.1136/bmjresp-2016-000133"
      }
    ],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-37",
    topic: "asthma-copd",
    title: "Sleepy after the hip repair",
    stem:
      "A 74-year-old woman with COPD is brought to the emergency department from a rehabilitation unit because she is hard to wake. She had a hip fracture repaired nine days ago. Hydromorphone was increased yesterday for pain. Staff note no new cough, fever or change in sputum. Her usual SpO2 is 91% on room air. She rouses briefly to a sternal rub and falls back asleep. She moves all four limbs equally. Her pupils are 2 mm and reactive. The chest has quiet breath sounds without wheeze or crackles. Venous gas: pH 7.24, pCO2 78 mmHg, HCO3 32 mmol/L. Capillary glucose is 6.4 mmol/L.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "78/minute",
      resp: "8/minute",
      bp: "118/66 mmHg",
      o2sat: "90% on 2 L/minute by nasal prongs",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her hypercapnia?",
        options: [
          "Acute ischemic stroke",
          "COPD exacerbation",
          "Hospital-acquired pneumonia",
          "Opioid toxicity",
          "Pulmonary embolism",
        ],
        correct: 3,
        explanation:
          "A respiratory rate of 8/minute with stupor, 2 mm pupils and an increase in hydromorphone point to opioid toxicity causing hypoventilation rather than a flare of her lung disease. She has no new cough, sputum change or wheeze to suggest a COPD exacerbation. She is afebrile without crackles, so pneumonia is unlikely. Pulmonary embolism usually drives fast breathing, not a rate of 8/minute. She moves all four limbs equally, which does not suggest a stroke.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "boyer-opioid",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate treatment for her?",
        options: [
          "Bilevel noninvasive ventilation",
          "flumazenil 0.2 mg IV",
          "naloxone 0.04 mg IV and titrate",
          "naloxone 2 mg IV bolus",
          "Rapid sequence intubation",
        ],
        correct: 2,
        explanation:
          "Naloxone started at 0.04 mg IV and increased every 2 minutes as needed reverses opioid respiratory depression while limiting sudden severe pain and withdrawal in a patient who needs opioids after surgery. A 2 mg bolus risks abrupt pain, agitation and withdrawal. She barely rouses, so she cannot protect her airway on a mask, and the cause is reversible. She has taken no benzodiazepine, so flumazenil has no role. Intubation may be avoided if naloxone restores her breathing.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "boyer-opioid",
      },
      {
        id: "q3",
        kind: "single",
        update: "After naloxone she is awake and talking with a respiratory rate of 16/minute. Venous gas: pH 7.33, pCO2 60 mmHg.",
        prompt: "Which of the following is the most appropriate plan for the next several hours?",
        options: [
          "Discharge to the rehabilitation unit now",
          "Monitored observation for resedation",
          "Oral naloxone to prevent recurrence",
          "Resume the increased hydromorphone dose",
          "Scheduled flumazenil every 4 hours",
        ],
        correct: 1,
        explanation:
          "Naloxone acts for only 20 to 90 minutes, shorter than hydromorphone, so she can become sedated and hypoventilate again, and she needs monitored observation with repeat naloxone or an infusion ready. Returning her to the rehabilitation unit now is unsafe. Resuming the increased dose repeats the cause. Oral naloxone is not absorbed enough to reverse respiratory depression, and flumazenil does not reverse opioids.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "boyer-opioid",
      },
    ],
    sources: [BOYER_OPIOID],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-38",
    topic: "asthma-copd",
    title: "Admitted from his wheelchair",
    stem: "A 72-year-old man with COPD presents to the emergency department with 4 days of increasing breathlessness. He is coughing up more sputum than usual, and it has turned green. He has had no fever or chest pain. He has used a wheelchair since a spinal cord injury 20 years ago and cannot stand. He takes tiotropium-olodaterol. He speaks in full sentences and has scattered wheeze without crackles. His legs are symmetric and not swollen. Chest X-ray shows hyperinflation with no consolidation, effusion or pneumothorax. A venous gas shows pH 7.37. He is to be admitted because he cannot manage his care at home.",
    vitals: {
      temperature: "37.2°C oral",
      pulse: "98/minute",
      resp: "24/minute",
      bp: "128/76 mmHg",
      o2sat: "90% on room air",
      weight: "78 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the need for antibiotics in his exacerbation?",
        options: [
          "Indicated, from purulent and increased sputum",
          "Not indicated, as he has no fever",
          "Not indicated, as the X-ray is clear",
          "Only if a sputum culture grows bacteria",
          "Only if procalcitonin is raised"
        ],
        correct: 0,
        explanation: "The GOLD report advises antibiotics when at least two of increased dyspnea, fever, increased sputum volume and increased sputum purulence are present, if purulence is one of them. He has increased dyspnea, volume and purulence. A clear chest X-ray rules out pneumonia but not a bacterial exacerbation. Fever is one of the qualifying symptoms, but it is not required when purulence comes with another. The report states it cannot recommend procalcitonin-based protocols to decide on antibiotics. Waiting for a sputum culture delays treatment, and culture is advised mainly for frequent or ventilated exacerbations.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gold"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to venous thromboembolism during his admission?",
        options: [
          "ASA 81 mg PO daily",
          "CT pulmonary angiography first",
          "Prophylactic-dose LMWH SC",
          "Therapeutic-dose anticoagulation",
          "No prophylaxis while he is on steroids"
        ],
        correct: 2,
        explanation: "The GOLD report notes that patients hospitalized with COPD exacerbations are at increased risk of deep vein thrombosis and pulmonary embolism, with pulmonary embolism found in up to 5.9%, and it advises prophylaxis for these patients. He is also immobile. Prophylactic-dose low molecular weight heparin fits. He has no signs of an embolism, so CT angiography or therapeutic anticoagulation is not indicated. ASA is not adequate prophylaxis against venous thrombosis in a medical inpatient. Corticosteroid treatment is not a reason to withhold prophylaxis.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gold"
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following prednisone courses is most appropriate for him?",
        options: [
          "10 mg daily for 3 months",
          "40 mg daily for 5 days",
          "40 mg daily for 14 days",
          "60 mg daily, tapered over 3 weeks",
          "No systemic corticosteroid"
        ],
        correct: 1,
        explanation: "The GOLD report recommends 40 mg of prednisone equivalent a day for 5 days in exacerbations, and a systematic review found 5 days likely sufficient. Longer courses have been linked with more pneumonia and higher mortality, so 14 days or a 3-week taper adds risk without benefit. Long-term low-dose prednisone is not a treatment for an exacerbation. Systemic corticosteroids shorten recovery and improve lung function, so withholding them is wrong.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gold"
      }
    ],
    sources: [GOLD],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-39",
    topic: "asthma-copd",
    title: "Breathless with a cold at two",
    stem:
      "A 2-year-old boy is brought to the emergency department by his mother with a day of cough, runny nose and wheeze. He has had two similar episodes this winter that settled with salbutamol. He has no fever and there was no choking episode. He is alert and interacting but can say only single words between breaths. There is suprasternal and intercostal indrawing, and wheeze with decreased air entry throughout.",
    vitals: {
      temperature: "37.6°C rectal",
      pulse: "170/minute",
      resp: "52/minute",
      o2sat: "90% on room air",
      weight: "12 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following findings place his exacerbation in the severe category for a child under 6 years?",
        options: [
          "Alert and interacting",
          "Oxygen saturation of 90%",
          "Respiratory rate of 52/minute",
          "Runny nose for a day",
          "Speech limited to single words",
          "Temperature of 37.6°C",
          "Two prior wheeze episodes",
        ],
        select: 3,
        correct: [1, 2, 4],
        explanation:
          "GINA grades an exacerbation in children 5 years and younger as severe with any of an SpO2 below 92%, a respiratory rate above 40/minute, speech limited to words, or accessory muscle use. His SpO2 of 90%, rate of 52/minute and single words each meet a severe criterion. Being alert and interacting is reassuring and means he is not in the life-threatening category. A runny nose, low grade temperature and prior episodes do not grade severity.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oxygen saturation targets is most appropriate while he is treated?",
        options: [
          "88% or higher",
          "90% or higher",
          "92% or higher",
          "96% or higher",
          "98 to 100%",
        ],
        correct: 2,
        explanation:
          "For children 5 years and younger with acute wheeze or a severe exacerbation, GINA 2026 sets the target saturation at 92% or higher when oxygen is given. His SpO2 of 90% is below this, so he needs oxygen now. Targets of 88% or 90% fall below the recommended level. Aiming for 96% or 98 to 100% uses more oxygen than needed.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following corticosteroid orders is most appropriate for him in the emergency department?",
        options: [
          "dexamethasone 1.2 mg PO",
          "dexamethasone 7.2 mg PO",
          "dexamethasone 14.4 mg PO",
          "prednisolone 1.2 mg PO",
          "prednisolone 60 mg PO",
        ],
        correct: 1,
        explanation:
          "For a severe exacerbation in a child 5 years or younger, GINA gives dexamethasone 0.3 to 0.6 mg/kg to a maximum of 12 mg, or prednisolone 1 to 2 mg/kg to a maximum of 30 mg a day at 2 to 5 years. At 12 kg, 0.6 mg/kg gives 7.2 mg. Dexamethasone 1.2 mg and prednisolone 1.2 mg are only 0.1 mg/kg. Dexamethasone 14.4 mg is 1.2 mg/kg and exceeds the 12 mg maximum. Prednisolone 60 mg is 5 mg/kg and twice the 30 mg maximum for his age.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "single",
        update: "He improves with treatment and oral corticosteroid. He has needed no salbutamol for 2 hours, is eating, and his SpO2 is 95% on room air.",
        prompt: "Which of the following instructions should his mother receive at discharge?",
        options: [
          "Give prednisolone at home for next colds",
          "Give salbutamol every hour overnight",
          "Return if salbutamol is needed within 4 hours",
          "Use a home nebulizer instead of spacer",
          "No routine follow-up if he is well",
        ],
        correct: 2,
        explanation:
          "GINA advises that parents of young children return to the emergency department if salbutamol is needed again within 4 hours, and that the child be seen in follow-up after an exacerbation. Hourly salbutamol at home means he is not recovering. Parent-started oral corticosteroids for later colds have not shown benefit in outpatient studies. A nebulizer is not better than an MDI with spacer and mask.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-40",
    topic: "asthma-copd",
    title: "The inhalers do not work",
    stem:
      "A 15-year-old girl with asthma presents to the emergency department with two days of wheeze. This is her second visit this month. She has a salbutamol inhaler and a fluticasone inhaler and says neither of them works. She shows you how she uses them. She does not shake the inhaler, takes the cap off, breathes in quickly while pressing the canister partway through the breath, and breathes out right away. She does not own a spacer. After treatment in the emergency department she feels well and her peak flow is 85% of predicted.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "92/minute",
      resp: "18/minute",
      o2sat: "97% on room air",
      weight: "55 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following changes to her inhaler technique would most improve the dose she receives?",
        options: [
          "Breathe in as fast as possible",
          "Fire two puffs into the spacer",
          "Hold the breath after inhaling",
          "Keep the inhaler in the fridge",
          "Rinse the mouth before each puff",
          "Shake before each actuation",
          "Use a spacer with each puff",
        ],
        select: 3,
        correct: [2, 5, 6],
        explanation:
          "GINA advises shaking suspension inhalers immediately before each actuation, because a delay changes the dose delivered. It recommends an MDI with a spacer and, for routine use, a single slow breath followed by a breath-hold. She does none of these. A fast inhalation deposits more drug in the mouth and throat. Puffs should go into the spacer one at a time. Rinsing is done after, not before, an inhaled corticosteroid. Refrigeration does not improve delivery.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following additional history items would most increase her risk of a fatal attack?",
        options: [
          "Cough after running in gym class",
          "Diagnosed with asthma at age 4",
          "Mild eczema on both elbows",
          "Symptoms worse in pollen season",
          "Two salbutamol inhalers a month",
        ],
        correct: 4,
        explanation:
          "GINA lists overuse of short-acting beta agonist as a red flag for fatal asthma, with extremely high risk when more than one salbutamol canister is used a month. Two inhalers a month is double that threshold. Exercise cough, childhood onset, mild eczema and seasonal symptoms are common in asthma. None of these is among the listed red flags.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about her fluticasone inhaler is most accurate for her teaching?",
        options: [
          "It can be stopped once she feels well",
          "It mainly prevents exercise wheeze",
          "It reduces attacks with daily use",
          "It relieves wheeze within minutes",
          "It should be used only during attacks",
        ],
        correct: 2,
        explanation:
          "Inhaled corticosteroids control airway inflammation with regular use and reduce the risk of severe exacerbations and asthma death, as GINA notes. She says it does not work, but it is not meant to give fast relief, so judging it by immediate effect is misleading. Using it only during attacks or stopping it once she feels well removes that protection. Its benefit is not limited to exercise symptoms.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina",
      },
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-41",
    topic: "asthma-copd",
    title: "Found wheezing after smoking",
    stem: "A 33-year-old woman with asthma is brought to the emergency department by ambulance after a friend found her struggling to breathe 1 hour after they smoked heroin together from foil. She uses a salbutamol inhaler and no controller. Paramedics gave salbutamol 5 mg and ipratropium 0.5 mg by nebulizer twice and naloxone 0.4 mg IM with no change in her breathing. On arrival she is sitting upright, agitated and can say only single words. Her pupils are 4 mm. There is very little air movement and almost no wheeze over either lung.",
    vitals: {
      temperature: "36.8°C tympanic",
      pulse: "132/minute",
      resp: "34/minute",
      bp: "142/88 mmHg",
      o2sat: "88% on 10 L/minute by non-rebreather mask",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly indicates a life-threatening attack in her?",
        options: [
          "Blood pressure of 142/88 mmHg",
          "Heart rate of 132/minute",
          "Pupils of 4 mm after naloxone",
          "Quiet chest with little air movement",
          "Temperature of 36.8°C"
        ],
        correct: 3,
        explanation: "A chest with almost no wheeze and little air movement in a patient who can say only single words means airflow is severely limited, not improving. The GINA report lists a silent chest, drowsiness and confusion as signs that warrant intensive care. Her heart rate of 132/minute shows a severe attack but is less specific. Her pupils and lack of response to naloxone argue against opioid-induced hypoventilation as the main problem. Her blood pressure and temperature do not grade asthma severity.",
        keyFeature: {
          topic: "asthma-copd",
          n: 3
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        update: "Despite continuous salbutamol, ipratropium, methylprednisolone and magnesium sulfate 2 g IV, she becomes drowsy and her venous pCO2 rises from 44 to 62 mmHg over 30 minutes.",
        prompt: "Which of the following is the most appropriate next step for her breathing?",
        options: [
          "Bilevel NIV with midazolam to tolerate it",
          "Continue nebulizers and recheck in 1 hour",
          "Heliox by face mask and observe",
          "naloxone 2 mg IV and reassess",
          "Prepare for intubation now"
        ],
        correct: 4,
        explanation: "She is drowsy with a rising pCO2 after maximal treatment, which signals impending respiratory failure. The BTS/ICS guideline recommends against noninvasive ventilation in acute asthma with hypercapnic respiratory failure, and the GINA report warns that patients should not be sedated to receive it and that sedatives must be avoided in asthma flares. Waiting an hour risks arrest. Heliox has no role in routine care and does not treat ventilatory failure. More naloxone will not help, because her pupils are not small and 0.4 mg IM changed nothing, so her drowsiness reflects rising carbon dioxide rather than opioid effect.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      },
      {
        id: "q3",
        kind: "single",
        update: "She is intubated with ketamine and rocuronium. On a rate of 12/minute with a long expiratory time, her plateau pressure is 26 cm H2O. An arterial gas shows pH 7.22 and PaCO2 70 mmHg.",
        prompt: "Which of the following ventilator changes is most appropriate for her now?",
        options: [
          "Add PEEP of 15 cm H2O",
          "Increase the rate to 24/minute",
          "Increase tidal volume to 10 mL/kg",
          "Shorten expiration to an I:E of 1:1",
          "No change, accept the hypercapnia"
        ],
        correct: 4,
        explanation: "Her pH of 7.22 lies in the permissive hypercapnia range of about 7.2 to 7.25 that the BTS/ICS guideline accepts to avoid high airway pressures when airflow obstruction is severe. Her low rate and long expiratory time are limiting air trapping, and her plateau pressure is acceptable. Raising the rate to 24/minute to clear carbon dioxide shortens expiration and worsens dynamic hyperinflation. A tidal volume of 10 mL/kg adds volume she cannot exhale. An I:E of 1:1 cuts expiratory time, where the guideline advises 1:3 or longer. It also advises that applied PEEP should not normally exceed 12 cm H2O.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      }
    ],
    sources: [
      GINA,
      {
        id: "bts-ics",
        citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016.",
        url: "https://doi.org/10.1136/bmjresp-2016-000133"
      }
    ],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-42",
    topic: "asthma-copd",
    title: "Wheezing on the last night of camp",
    stem: "You are working in a rural emergency department. A 16-year-old boy is brought in by a counsellor from a nearby summer camp with 4 hours of wheeze and breathlessness that began during a campfire. He has asthma and uses a fluticasone inhaler that he left at home. He has used his salbutamol inhaler 12 times since the evening started. He has no food allergy, and he has no hives, lip swelling or throat tightness. He is sitting forward and speaks in short phrases. He has diffuse wheeze. His predicted peak flow is 520 L/minute.",
    vitals: {
      temperature: "37.0°C oral",
      pulse: "124/minute",
      resp: "30/minute",
      bp: "124/72 mmHg",
      o2sat: "90% on room air",
      weight: "62 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most reliable way to grade the severity of his exacerbation now?",
        options: [
          "Heart rate compared with his usual rate",
          "His own rating of breathlessness",
          "Loudness of his wheeze",
          "Peak flow as a percentage of predicted",
          "Time since his last salbutamol dose"
        ],
        correct: 3,
        explanation: "The GINA report states that in the acute setting, lung function measured by peak flow or FEV1 compared with the patient's previous or predicted values is a more reliable indicator of severity than symptoms, and it strongly recommends objective measurement. The loudness of wheeze can mislead, because a severely obstructed chest may be quiet. Patients perceive airflow limitation poorly, so his own rating can underestimate severity. Heart rate is affected by salbutamol and anxiety. The time since his last dose does not grade severity.",
        keyFeature: {
          topic: "asthma-copd",
          n: 3
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "menu",
        update: "His peak flow is 170 L/minute.",
        prompt: "Which of the following treatments should be started now for his severe exacerbation?",
        options: [
          "Antibiotic for a presumed chest infection",
          "Chest X-ray before bronchodilators",
          "epinephrine 0.5 mg IM",
          "Ipratropium with the salbutamol",
          "lorazepam 1 mg for anxiety",
          "Oral corticosteroid within 1 hour",
          "Oxygen to keep SpO2 at 93 to 95%",
          "Salbutamol by inhaler and spacer",
          "theophylline PO loading dose"
        ],
        select: 4,
        correct: [
          3,
          5,
          6,
          7
        ],
        explanation: "His peak flow of 170 L/minute is 33% of his predicted 520 L/minute, a severe exacerbation. The GINA report advises a short-acting beta2-agonist by inhaler and spacer, adding ipratropium in moderate to severe flares, a systemic corticosteroid within 1 hour, and oxygen when saturation is below 92%, aiming for 93 to 95%. Sedatives must be avoided in an asthma flare. Epinephrine is only for asthma with anaphylaxis. Antibiotics are not recommended without strong evidence of infection. A chest X-ray is not routine and should not delay treatment. Theophylline and aminophylline are not recommended because of poor efficacy and safety.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "single",
        update: "After 1 hour of this treatment his peak flow is 190 L/minute. He is alert and still speaks in short phrases. His respiratory rate is 26/minute and his SpO2 is 94% on oxygen.",
        prompt: "Which of the following investigations is most appropriate to add now?",
        options: [
          "Blood gas for pCO2",
          "CT pulmonary angiogram",
          "D-dimer level",
          "Formal spirometry",
          "Portable chest X-ray"
        ],
        correct: 0,
        explanation: "His peak flow of 190 L/minute is still only 37% of his predicted 520 L/minute after an hour of treatment. The GINA report advises considering a blood gas when peak flow or FEV1 is below 50% of predicted, or when a patient is not responding or is deteriorating. In a flare the pCO2 is usually low, so a normal or raised value signals tiring and possible respiratory failure, which a saturation of 94% on oxygen cannot show. A chest X-ray is not routine and is kept for a suspected complication or an alternative diagnosis. Nothing in his case points to pulmonary embolism, so a D-dimer or CT angiography adds nothing. Formal spirometry is impractical during a severe flare, and his peak flow already tracks his airflow.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "gina"
      }
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-43",
    topic: "asthma-copd",
    title: "A night-shift worker with a cat",
    stem: "A 23-year-old woman presents to the emergency department with 1 day of wheeze and chest tightness. She has had asthma since childhood and was intubated for it at age 17. She works night shifts at a warehouse and has a cat at home. She uses about two salbutamol inhalers a month and stopped her inhaled corticosteroid a year ago because she felt well. She finished a 5-day course of prednisone from a walk-in clinic 1 week ago. A chest X-ray last year was normal. After salbutamol and ipratropium by spacer and prednisone 50 mg, her peak flow improves from 45% to 82% of predicted and she wants to go home.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "118/72 mmHg",
      o2sat: "97% on room air"
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features in her history increase her risk of fatal or near-fatal asthma?",
        options: [
          "A cat living in her apartment",
          "Asthma diagnosed in early childhood",
          "Intubation for asthma at age 17",
          "Night shifts at a warehouse",
          "Normal chest X-ray last year",
          "Prednisone course ending 1 week ago",
          "Stopped her inhaled steroid a year ago",
          "Two salbutamol inhalers a month"
        ],
        select: 4,
        correct: [
          2,
          5,
          6,
          7
        ],
        explanation: "The GINA red flags for fatal or near-fatal asthma include a history of intubation for asthma, not using inhaled corticosteroids, currently using or recently stopping oral corticosteroids, and over-use of short-acting beta2-agonists, with extremely high risk above one inhaler a month. She has all four. Childhood onset, a pet, shift work and a normal chest X-ray are not among these red flags, although a cat may trigger her symptoms if she is sensitized.",
        keyFeature: {
          topic: "asthma-copd",
          n: 2
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        update: "She is prescribed prednisone 50 mg daily for 5 days. She asks whether she must taper it because this is her second course in 3 weeks.",
        prompt: "Which of the following is the most appropriate way to end this prednisone course?",
        options: [
          "Check a morning cortisol before stopping",
          "Continue 10 mg daily for a month",
          "Stop after day 5 without a taper",
          "Taper over 10 days after the course",
          "Taper over 3 weeks after the course"
        ],
        correct: 2,
        explanation: "The GINA report states that tapering is not needed when oral corticosteroids are taken for less than 2 weeks, and that tapering gives no benefit either in the short term or over several weeks. Her two 5-day courses add up to 10 days, well short of that. A 10-day or 3-week taper adds steroid exposure and side effects without reducing relapse. A month of 10 mg is a maintenance dose that treats nothing here. A morning cortisol is not needed after courses this short. Her repeated courses matter more as a sign of risk than as a reason to taper.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "single",
        update: "She is started on budesonide-formoterol 200/6 mcg, one inhalation twice daily as maintenance and reliever therapy. Her inhaler technique is checked and follow-up is booked.",
        prompt: "Which of the following reliever instructions is most appropriate for her new inhaler plan?",
        options: [
          "Extra inhalations only if peak flow drops",
          "One extra inhalation as needed for symptoms",
          "Salbutamol 2 puffs as needed for symptoms",
          "Two extra inhalations every 4 hours regularly",
          "Up to 24 inhalations a day before calling"
        ],
        correct: 1,
        explanation: "In maintenance and reliever therapy the same budesonide-formoterol inhaler is the reliever. The GINA report prescribes it as one inhalation twice daily plus one inhalation whenever needed for symptoms, and advises seeking care if more than 12 inhalations in total are needed in a day. Using salbutamol as the reliever removes the inhaled steroid dose that comes with each reliever puff, which is how this regimen prevents severe exacerbations. Two inhalations every 4 hours is scheduled use, and with her maintenance doses it passes the daily limit. A limit of 24 inhalations is twice the maximum. Relief is taken for symptoms, not only when peak flow falls.",
        keyFeature: {
          topic: "asthma-copd",
          n: 8
        },
        source: "gina"
      }
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-44",
    topic: "asthma-copd",
    title: "Breathless two days after the trip",
    stem:
      "A 33-year-old woman with mild asthma presents to the emergency department with a day of breathlessness and right-sided pleuritic chest pain. She coughed up a small amount of blood this morning. She returned from a 15-hour flight two days ago. She takes an estrogen-containing oral contraceptive and uses budesonide-formoterol as needed, which has not helped. She has no leg pain or swelling, no cancer and no recent surgery or immobilization. She had a DVT after an ankle fracture eight years ago. She speaks in full sentences. The chest is clear with no wheeze. Her peak flow is 440 L/minute, the same as her personal best.",
    vitals: {
      temperature: "37.4°C oral",
      pulse: "118/minute",
      resp: "26/minute",
      bp: "124/78 mmHg",
      o2sat: "92% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly argues against an asthma exacerbation?",
        options: [
          "Peak flow equal to her best",
          "Poor response to her reliever",
          "Respiratory rate of 26/minute",
          "SpO2 of 92% on room air",
          "Tachycardia of 118/minute",
        ],
        correct: 0,
        explanation:
          "GINA describes an exacerbation as a fall in lung function from the patient's usual level, measured by peak flow or FEV1. Her peak flow equals her personal best and her chest is clear, so an asthma flare does not explain her symptoms. GINA lists pulmonary embolism among the alternative causes of acute breathlessness. Tachycardia, tachypnea, low saturation and a poor response to her reliever can occur in both conditions.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        update: "You consider pulmonary embolism more likely than any other diagnosis.",
        prompt: "Which of the following is her Wells score for pulmonary embolism?",
        options: [
          "1.5",
          "3.0",
          "4.5",
          "5.5",
          "7.0",
        ],
        correct: 4,
        explanation:
          "She scores 3 for pulmonary embolism as the most likely diagnosis, 1.5 for a pulse above 100/minute, 1.5 for her previous DVT and 1 for hemoptysis, for a total of 7.0. A total of 5.5 leaves out the previous DVT, and the lower totals leave out further items, such as the 3 points for PE as the most likely diagnosis. She has no signs of DVT, no recent surgery or immobilization and no cancer. Air travel and estrogen use are risk factors but are not Wells items. Thrombosis Canada classifies a score above 6 as high pretest probability and above 4 as PE likely.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "thrombosis-canada",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next diagnostic step for her?",
        options: [
          "Apply PERC and discharge",
          "CT pulmonary angiography",
          "D-dimer then imaging if positive",
          "Leg compression ultrasound",
          "Spirometry with bronchodilator",
        ],
        correct: 1,
        explanation:
          "With a Wells score of 7.0, her pretest probability is high on every Thrombosis Canada scheme, and patients with a high pretest probability go directly to imaging without a D-dimer. A negative D-dimer does not rule out PE in this group. PERC applies only to patients with low pretest probability, and she fails several criteria, including her pulse, SpO2, hemoptysis, previous DVT and estrogen use. She has no leg symptoms, and a negative leg ultrasound would not exclude PE. Spirometry does not address embolism.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "thrombosis-canada",
      },
      {
        id: "q4",
        kind: "single",
        update: "CT pulmonary angiography will not be available for 6 hours. She has no bleeding risk factors and her BP remains normal.",
        prompt: "Which of the following is the most appropriate step while she waits for imaging?",
        options: [
          "alteplase 100 mg IV over 2 hours",
          "ASA 160 mg PO chewed",
          "prednisone 50 mg PO daily",
          "Therapeutic anticoagulation now",
          "Wait for the scan before treatment",
        ],
        correct: 3,
        explanation:
          "Thrombosis Canada advises that when imaging will be delayed more than 4 hours, patients with a likely pretest probability should receive a rapidly acting anticoagulant such as low-molecular-weight heparin or a DOAC unless bleeding risk is high. Her Wells score is 7.0 and the wait is 6 hours. Waiting leaves a likely PE untreated. Thrombolysis is reserved for high-risk PE with hemodynamic instability, and her BP is normal. ASA does not treat PE. Prednisone treats asthma, which her normal peak flow has excluded as the cause.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "thrombosis-canada",
      },
    ],
    sources: [GINA, THROMBOSIS_CANADA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-45",
    topic: "asthma-copd",
    title: "Breathless during an outbreak at the care home",
    stem: "A 77-year-old woman with COPD is sent from her long-term care home, where there is an outbreak of respiratory syncytial virus, with 2 days of increasing breathlessness, cough and sputum. She rates her breathlessness as 8 on a 10-point visual analogue scale. She uses tiotropium-olodaterol once daily and has no home oxygen. She is alert and speaks in short sentences. She has scattered wheeze and no leg swelling. CRP is 42 mg/L. An arterial gas on room air shows pH 7.33, PaCO2 52 mmHg and PaO2 54 mmHg.",
    vitals: {
      temperature: "37.8°C oral",
      pulse: "108/minute",
      resp: "28/minute",
      bp: "136/78 mmHg",
      o2sat: "85% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best grades her exacerbation using the Rome classification in the GOLD report?",
        options: [
          "Life-threatening exacerbation",
          "Mild exacerbation",
          "Moderate exacerbation",
          "Needs spirometry to grade",
          "Severe exacerbation"
        ],
        correct: 4,
        explanation: "She meets all five moderate-level criteria: breathlessness of 8 (5 or more), a respiratory rate of 28 (24 or more), a heart rate of 108 (95 or more), a saturation of 85% (below 92%) and a CRP of 42 mg/L (10 or more). What makes her severe is hypercapnia with acidosis, a PaCO2 of 52 mmHg (above 45) with a pH of 7.33 (below 7.35). The original Rome proposal and the GOLD figure agree on that criterion. The GOLD figure also lists a PaO2 of 60 mmHg or less under severe, but the original proposal places hypoxemia without acidosis in the moderate grade, so her PaO2 alone would not settle it. The Rome scheme has no life-threatening grade. Spirometry is not used to grade an acute exacerbation.",
        keyFeature: {
          topic: "asthma-copd",
          n: 3
        },
        source: "gold"
      },
      {
        id: "q2",
        kind: "single",
        update: "Salbutamol and ipratropium are started by metered-dose inhaler and spacer, with controlled oxygen and prednisone. The nurse asks about her usual tiotropium-olodaterol.",
        prompt: "Which of the following is the most appropriate plan for her usual long-acting inhaler?",
        options: [
          "Continue it with the short-acting inhalers",
          "Replace it with IV aminophylline",
          "Replace it with salbutamol every 20 minutes",
          "Stop it until the exacerbation settles",
          "Switch it to nebulized ipratropium alone"
        ],
        correct: 0,
        explanation: "The GOLD report recommends continuing long-acting bronchodilators during an exacerbation, or starting them before discharge, alongside short-acting bronchodilators. Stopping her usual tiotropium-olodaterol removes baseline bronchodilation. The report recommends against high doses of short-acting beta2-agonists because of side effects, so salbutamol every 20 minutes as a replacement is wrong. IV methylxanthines such as aminophylline are not recommended because of significant side effects. Nebulized ipratropium alone drops the beta2-agonist and replaces her long-acting agents with a short-acting one.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "gold"
      },
      {
        id: "q3",
        kind: "single",
        update: "One hour later she is on 2 L/minute by nasal prongs with an SpO2 of 90%. She is alert. A repeat gas shows pH 7.36, PaCO2 47 mmHg and PaO2 62 mmHg. Her respiratory rate is 24/minute.",
        prompt: "Which of the following is the most appropriate respiratory support for her now?",
        options: [
          "Bilevel noninvasive ventilation now",
          "Continue controlled oxygen and medical care",
          "High-flow nasal oxygen at 60 L/minute",
          "Increase oxygen to 15 L/minute by mask",
          "Intubation for her hypoxemia"
        ],
        correct: 1,
        explanation: "Her acidosis has cleared with an hour of medical treatment, from pH 7.33 to 7.36. The BTS/ICS guideline starts noninvasive ventilation only when a pH below 7.35 and a pCO2 above 49 mmHg persist or develop despite optimal medical therapy, so she no longer meets the threshold. She is alert, improving, and within the 88 to 92% saturation target on low-flow oxygen. Raising oxygen to 15 L/minute risks worsening hypercapnia. The GOLD report describes high-flow nasal therapy for patients who stay hypoxemic on conventional oxygen or cannot tolerate noninvasive ventilation. She is at target on 2 L/minute and improving, so it adds nothing now. She has no indication for intubation.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "bts-ics"
      }
    ],
    sources: [
      GOLD,
      {
        id: "bts-ics",
        citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016.",
        url: "https://doi.org/10.1136/bmjresp-2016-000133"
      }
    ],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-46",
    topic: "asthma-copd",
    title: "Already on prednisone",
    stem:
      "A 52-year-old woman with severe asthma presents to the emergency department with two days of wheeze and breathlessness after a cold. She has taken prednisone 10 mg daily for the past eight months and uses budesonide 200 mcg with formoterol 6 mcg, two inhalations twice daily and extra inhalations as needed. She was admitted for asthma once last year and has never been intubated. She speaks in phrases and has diffuse wheeze. Peak flow is 150 L/minute and her personal best is 380 L/minute.",
    vitals: {
      temperature: "37.1°C oral",
      pulse: "116/minute",
      resp: "28/minute",
      bp: "132/78 mmHg",
      o2sat: "91% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features of her history most increase her risk of a fatal attack?",
        options: [
          "Age over 50 years",
          "Asthma admission last year",
          "Asthma onset in childhood",
          "Current daily prednisone use",
          "Use of ICS-formoterol reliever",
          "Viral trigger for this attack",
        ],
        select: 2,
        correct: [1, 3],
        explanation:
          "GINA lists hospitalization for asthma in the past year and current or recent use of oral corticosteroids among the red flags for fatal or near fatal asthma. She has both. Childhood onset is common and is not a red flag. ICS-formoterol as a reliever is recommended treatment, not a risk factor. Age and a viral trigger are not listed red flags.",
        keyFeature: { topic: "asthma-copd", n: 2 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is closest to her peak flow as a percentage of her personal best?",
        options: [
          "25%",
          "40%",
          "50%",
          "60%",
          "75%",
        ],
        correct: 1,
        explanation:
          "Her peak flow is 150 of 380 L/minute, which is 39.5%, closest to 40%. GINA notes that lung function measures such as peak flow are more reliable than symptoms for judging severity in the acute setting, and advises considering an arterial gas when PEF or FEV1 is below 50% predicted. A value this low confirms a significant exacerbation even though she can still speak in phrases.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following systemic corticosteroid plans is most appropriate for this exacerbation?",
        options: [
          "Continue her usual 10 mg prednisone",
          "hydrocortisone 100 mg IV once only",
          "prednisone 20 mg daily for 5 days",
          "prednisone 50 mg 5 days, then 10 mg",
          "prednisone 50 mg 5 days, then stop",
        ],
        correct: 3,
        explanation:
          "GINA advises prednisone 40 to 50 mg daily for 5 to 7 days for an adult exacerbation, and the exacerbation developed while she was taking oral steroids, which makes systemic corticosteroid especially important. After the burst she should return to her maintenance 10 mg. GINA warns that long-term oral corticosteroids carry a risk of adrenal insufficiency and should be reduced gradually with monitoring, not stopped abruptly after an exacerbation. Her usual 10 mg or a 20 mg course is too low for this exacerbation. A single hydrocortisone dose is not a full course.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following follow-up arrangements is most important for her?",
        options: [
          "Chest CT as an outpatient",
          "Follow-up only if symptoms recur",
          "Home nebulizer prescription",
          "Pulmonary function in 1 year",
          "Specialist asthma referral",
        ],
        correct: 4,
        explanation:
          "GINA advises referral for expert advice after one or more exacerbations needing oral corticosteroids or urgent care in the past year, and she also needs daily oral prednisone, which calls for specialist review of other options such as biologic therapy. Follow-up only if symptoms recur ignores her risk. A nebulizer does not add benefit over her current inhaler. Pulmonary function in a year is too late. A chest CT is not the priority.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "gina",
      },
    ],
    sources: [GINA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "asthma-copd-47",
    topic: "asthma-copd",
    title: "A preschooler who spits out medicine",
    stem:
      "A 4-year-old boy is brought to the emergency department with a day of cough and wheeze after a cold. He has had three similar episodes in the past year and takes no daily medication. His mother has a salbutamol inhaler at home but no spacer. He is alert and talks in short sentences. There is suprasternal indrawing without scalene contraction. He has expiratory wheeze only, with decreased air entry at the bases.",
    vitals: {
      temperature: "37.4°C tympanic",
      pulse: "136/minute",
      resp: "34/minute",
      o2sat: "93% on room air",
      weight: "17 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following salbutamol doses should be repeated every 20 minutes for three doses?",
        options: [
          "salbutamol 5 mg by nebulizer",
          "salbutamol 10 mg by nebulizer",
          "salbutamol 2 puffs by MDI and spacer",
          "salbutamol 5 puffs by MDI and spacer",
          "salbutamol 10 puffs by MDI and spacer",
        ],
        correct: 3,
        explanation:
          "His PRAM score is 5 (suprasternal 2, scalene 0, expiratory wheeze 1, reduced air entry at the bases 1, SpO2 92 to 94% 1). TREKK doses salbutamol for a child under 20 kg at 5 puffs of 100 mcg by MDI and spacer, or 2.5 mg by nebulizer, every 20 minutes for three treatments. Ten puffs is the dose for 20 kg or more, and 2 puffs is too low. Nebulized doses of 5 mg and 10 mg exceed the 2.5 mg advised for his weight of 17 kg.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "trekk-severe",
      },
      {
        id: "q2",
        kind: "single",
        update: "His mother says he spat out prednisolone syrup during his last visit and vomited.",
        prompt: "Which of the following corticosteroid orders is most appropriate for him?",
        options: [
          "budesonide 1 mg nebulized alone",
          "dexamethasone 1.7 mg PO",
          "dexamethasone 10.2 mg PO",
          "dexamethasone 20.4 mg PO",
          "prednisolone 85 mg PO",
        ],
        correct: 2,
        explanation:
          "TREKK advises oral dexamethasone at 0.6 mg/kg to a maximum of 12 mg for a moderate exacerbation, and prefers it because it is better tolerated with less vomiting. For 17 kg that is 10.2 mg. Dexamethasone 1.7 mg is only 0.1 mg/kg, and 20.4 mg is 1.2 mg/kg and exceeds the maximum. Prednisolone 85 mg is 5 mg/kg, well above the TREKK maximum of 60 mg. Nebulized budesonide alone does not replace a systemic corticosteroid.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "trekk-asthma",
      },
      {
        id: "q3",
        kind: "menu",
        update: "After three doses his PRAM score is 2 and stays there for 2 hours. His SpO2 is 96% on room air.",
        prompt: "Which of the following should be arranged before he is discharged?",
        options: [
          "Chest radiograph at follow-up",
          "fluticasone 50 mcg twice daily",
          "fluticasone 250 mcg twice daily",
          "Follow-up within 7 days",
          "Home nebulizer machine",
          "Oral antibiotic for 5 days",
          "Regular salbutamol for 2 weeks",
          "Spacer device for his inhaler",
        ],
        select: 3,
        correct: [1, 3, 7],
        explanation:
          "His arrival PRAM score was 5, and TREKK advises that every child with a score of 4 or more goes home on daily inhaled corticosteroid, with 50 mcg twice daily the low starting dose at 1 to 5 years. TREKK also advises a spacer for every MDI and follow-up ideally within 7 days. Fluticasone 250 mcg is well above the starting dose. Regular salbutamol for 2 weeks, a nebulizer, antibiotics and a follow-up radiograph are not part of the TREKK discharge plan.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "trekk-asthma",
      },
    ],
    sources: [TREKK_SEVERE, TREKK_ASTHMA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
