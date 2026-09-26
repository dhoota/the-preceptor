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

const ESC_ACS: Source = {
  id: "esc-acs",
  citation: "Byrne RA, Rossello X, Coughlan JJ, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.",
  url: "https://doi.org/10.1093/eurheartj/ehad191",
};
const SJODING: Source = {
  id: "sjoding",
  citation: "Sjoding MW, Dickson RP, Iwashyna TJ, Gay SE, Valley TS. Racial bias in pulse oximetry measurement. N Engl J Med. 2020.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7808260/",
};
const BTS_ICS: Source = {
  id: "bts-ics",
  citation: "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. BMJ Open Respir Res. 2016.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4800170/",
};

const ERS_HFNO: Source = {
  id: "ers-hfno",
  citation: "Oczkowski S, Ergan B, Bos L, et al. ERS clinical practice guidelines. High-flow nasal cannula in acute respiratory failure. Eur Respir J. 2022.",
  url: "https://doi.org/10.1183/13993003.01574-2021",
};
const ISHAM_ABPA: Source = {
  id: "isham-abpa",
  citation: "Agarwal R, Sehgal IS, Muthu V, et al. Revised ISHAM-ABPA working group clinical practice guidelines for diagnosing, classifying and treating allergic bronchopulmonary aspergillosis and mycoses. Eur Respir J. 2024.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10991853/",
};
const LACTMED_PREDNISONE: Source = {
  id: "lactmed-prednisone",
  citation: "National Institute of Child Health and Human Development. Drugs and Lactation Database (LactMed). Prednisone. Revised 2024.",
  url: "https://www.ncbi.nlm.nih.gov/books/NBK501077/",
};
const EDDLESTON_OP: Source = {
  id: "eddleston-op",
  citation: "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2493390/",
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
    title: "Heaviness on the stairs",
    stem: "A 64-year-old woman presents to the emergency department with 2 days of wheeze and cough after a cold. Tonight, while climbing stairs, she had 30 minutes of central chest heaviness spreading to her jaw, with sweating and nausea. A milder episode began at rest 20 minutes ago. She says it feels different from her asthma. She has asthma treated with budesonide-formoterol, hypertension and type 2 diabetes. She has taken ibuprofen many times for knee pain with no breathing problems. She speaks in full sentences. There is scattered expiratory wheeze with equal air entry and no crackles. Her calves are soft and not swollen. Her ECG shows new 2 mm horizontal ST depression in V4 to V6.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "96/minute",
      resp: "22/minute",
      bp: "152/88 mmHg",
      o2sat: "95% on room air",
      weight: "74 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "High-sensitivity troponin I is 58 ng/L on arrival and 390 ng/L 2 hours later. The upper reference limit is 16 ng/L. Bedside ultrasound shows lung sliding on both sides.",
        prompt: "Which of the following is the most likely cause of her chest heaviness?",
        options: [
          "Acute pulmonary embolism",
          "Asthma-related chest tightness",
          "Chest wall strain from coughing",
          "Non-ST-elevation myocardial infarction",
          "Spontaneous pneumothorax"
        ],
        correct: 3,
        explanation: "Her troponin rose from 58 to 390 ng/L, far above the upper reference limit of 16 ng/L, and she has ischemic chest heaviness with new horizontal ST depression in V4 to V6. In the ESC guideline, a rising troponin with ischemic symptoms and no persistent ST elevation is a non-ST-elevation myocardial infarction. Asthma tightness does not raise troponin or cause new ST depression, and she says this pain is different. Chest wall strain does not explain the troponin rise. Lung sliding on both sides and equal air entry make a pneumothorax unlikely. Exertional heaviness spreading to the jaw, with soft calves, points to the heart rather than a pulmonary embolism.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "esc-acs"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate antiplatelet treatment to give her now?",
        options: [
          "ASA 40 mg PO as a test dose",
          "ASA 160 mg PO chewed",
          "clopidogrel 300 mg PO instead of ASA",
          "ticagrelor 180 mg PO instead of ASA",
          "No antiplatelet because of her asthma"
        ],
        correct: 1,
        explanation: "GINA advises that ASA and other NSAIDs are not generally contraindicated in asthma unless there has been a previous reaction, and she has taken ibuprofen many times without a problem. Her asthma is therefore no reason to withhold or reduce ASA. The ESC guideline recommends an ASA loading dose of 150 to 300 mg by mouth, and 160 mg chewed fits that range. A 40 mg test dose is below the loading range and is not needed when there has been no reaction. The ESC guideline gives a P2Y12 inhibitor in addition to ASA, not instead of it.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "single",
        update: "She is admitted. The next morning her wheeze has settled and her peak flow is at her personal best. Echocardiography shows an ejection fraction of 35%, and she has no signs of heart failure.",
        prompt: "Which of the following beta-blocker plans is most appropriate for her?",
        options: [
          "bisoprolol started at a low dose",
          "labetalol started at a low dose",
          "propranolol started at a low dose",
          "sotalol started at a low dose",
          "No beta-blocker because of her asthma"
        ],
        correct: 0,
        explanation: "The ESC guideline recommends a beta-blocker after an acute coronary syndrome when the ejection fraction is 40% or less, and hers is 35%. GINA states that asthma is not an absolute contraindication to a cardioselective beta-blocker when one is indicated after an acute coronary event, and people with asthma given a beta-blocker within 24 hours of admission for such an event had lower in-hospital mortality. Bisoprolol is cardioselective, and GINA advises that treatment start under close specialist supervision. Propranolol, labetalol and sotalol also block beta2 receptors and are more likely to cause bronchospasm. Withholding a beta-blocker denies her a treatment of proven benefit.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gina"
      }
    ],
    sources: [GINA, ESC_ACS],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    title: "Plugs and a stubborn cough",
    stem:
      "A 34-year-old woman with asthma since childhood presents to the emergency department with five days of worsening wheeze and cough. She brings up thick brown plugs of mucus. She has had three flares needing prednisone in the past year despite taking fluticasone-salmeterol twice daily. She has never smoked. She has had no night sweats, weight loss, rash, numbness or sinus symptoms. She speaks in short phrases. There is wheeze throughout the chest and reduced air entry at the right upper zone. Her blood eosinophil count is 1.6 x 10^9/L.",
    vitals: {
      temperature: "37.4°C oral",
      pulse: "104/minute",
      resp: "26/minute",
      bp: "126/78 mmHg",
      o2sat: "92% on room air",
      weight: "64 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains her repeated flares and her findings today?",
        options: [
          "Allergic bronchopulmonary aspergillosis",
          "Chronic pulmonary aspergillosis",
          "Community-acquired pneumonia",
          "Eosinophilic granulomatosis with polyangiitis",
          "Poorly controlled allergic asthma",
        ],
        correct: 0,
        explanation:
          "Brown mucus plugs, a blood eosinophil count of 1.6 x 10^9/L, reduced air entry over one zone and three steroid treated flares in a year point to a hypersensitivity reaction to Aspergillus fumigatus in the airway. The ISHAM working group describes this pattern in long-standing asthma. Pneumonia would not explain the year of flares or the eosinophil count. Chronic pulmonary aspergillosis is a slow infection of damaged lungs that brings weight loss and cavities, and she has lifelong asthma without weight loss. Vasculitis usually brings sinus disease, rash or neuropathy, and she has none. Poorly controlled asthma alone does not produce plugs or this eosinophil count.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "isham-abpa",
      },
      {
        id: "q2",
        kind: "single",
        update: "A chest radiograph shows right upper lobe collapse with mucoid impaction.",
        prompt: "Which of the following tests should be sent first to pursue the suspected diagnosis?",
        options: [
          "Aspergillus fumigatus IgE",
          "Aspergillus fumigatus precipitins",
          "Serum galactomannan level",
          "Sputum acid-fast bacilli smear",
          "Sputum bacterial culture",
        ],
        correct: 0,
        explanation:
          "The 2024 ISHAM working group recommends Aspergillus fumigatus specific IgE as the first test, because fungal sensitisation is mandatory for the diagnosis. If it is 0.35 kUA/L or more, the next steps are a serum total IgE, which should be 500 IU/mL or more, and two of fungal specific IgG, a blood eosinophil count of 0.5 x 10^9/L or more, and compatible imaging. Her eosinophil count already meets one of these. The group reached no consensus on precipitins, which are less sensitive than immunoassays for fungal IgG, and advises against serum galactomannan for this diagnosis. An acid-fast smear and a bacterial culture look for other infections and would not confirm it.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "isham-abpa",
      },
      {
        id: "q3",
        kind: "single",
        update: "While the tests are pending she is more breathless. On a non-rebreather mask at 15 L/minute her SpO2 is 89%. An arterial gas shows pH 7.45, PaCO2 34 mmHg and PaO2 58 mmHg. She is alert and speaks in short sentences.",
        prompt: "Which of the following is the most appropriate respiratory support to start now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Continue the non-rebreather mask",
          "Heliox by face mask",
          "High-flow nasal oxygen",
          "Rapid sequence intubation",
        ],
        correct: 3,
        explanation:
          "A PaO2 of 58 mmHg on a non-rebreather mask with a pH of 7.45 and a PaCO2 of 34 mmHg is hypoxemic failure without carbon dioxide retention. The 2022 European Respiratory Society guideline suggests high-flow nasal oxygen over conventional oxygen and over noninvasive ventilation in hypoxemic acute respiratory failure. Staying on the non-rebreather leaves her at 89% on conventional oxygen that has already failed. Heliox eases flow through narrowed airways but limits the oxygen fraction, so it does not treat her hypoxemia. Bilevel ventilation adds inspiratory pressure she does not need with a normal PaCO2. She is alert with a normal pH, so intubation is not the first step.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "ers-hfno",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her serum total IgE is 2 400 IU/mL and the respirology service confirms the diagnosis suspected on arrival. Her oxygen needs settle.",
        prompt: "Which of the following treatments should be started for her underlying problem?",
        options: [
          "amoxicillin-clavulanate 875 mg PO BID",
          "azithromycin 500 mg PO daily",
          "fluconazole 400 mg PO daily",
          "omalizumab 300 mg SC now",
          "prednisone 0.5 mg/kg PO daily",
        ],
        correct: 4,
        explanation:
          "For an acute episode the ISHAM group recommends oral glucocorticoid or itraconazole monotherapy, with prednisolone 0.5 mg/kg daily for 2 weeks, then on alternate days for 8 weeks and a taper over 3 to 5 months. At 64 kg her dose is about 32 mg daily, and prednisone is the Canadian equivalent. Antibacterials such as amoxicillin-clavulanate and azithromycin do not treat a hypersensitivity reaction. Fluconazole has no useful activity against Aspergillus species. The group advises against biological agents such as omalizumab as first-line treatment of acute disease.",
        keyFeature: { topic: "asthma-copd", n: 4 },
        source: "isham-abpa",
      },
    ],
    sources: [ISHAM_ABPA, ERS_HFNO],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    title: "A cold three weeks after the birth",
    stem:
      "A 27-year-old woman presents to the emergency department with one day of wheeze and breathlessness after three days of a head cold. She gave birth three weeks ago and is breastfeeding every three hours. She has had asthma since childhood and has kept taking budesonide-formoterol twice daily. She has had no fever, chest pain, calf pain or leg swelling. She speaks in short phrases and has diffuse expiratory wheeze with good air entry. Her peak expiratory flow is 210 L/minute and her personal best is 430 L/minute.",
    vitals: {
      temperature: "37.1°C oral",
      pulse: "108/minute",
      resp: "24/minute",
      bp: "118/70 mmHg",
      o2sat: "93% on room air",
      weight: "58 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in her care?",
        options: [
          "Arrange a CT pulmonary angiogram first",
          "Give inhaled salbutamol and ipratropium",
          "Give intravenous magnesium sulfate now",
          "Obtain a chest radiograph before treatment",
          "Send a D-dimer before treatment",
        ],
        correct: 1,
        explanation:
          "Her peak flow of 210 L/minute is 49% of her personal best of 430 L/minute, and diffuse expiratory wheeze after a head cold marks a severe asthma flare. GINA advises repeated inhaled salbutamol with ipratropium for moderate to severe exacerbations, given before any tests. She has no chest pain or leg symptoms, so a CT pulmonary angiogram is not the first step, and her response to treatment will show whether a clot needs to be considered again. A D-dimer is often raised in the weeks after birth, so a positive result would settle little and must not delay treatment. GINA advises against a routine chest radiograph in a flare. Intravenous magnesium is for patients who do not respond to initial treatment.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "gina",
      },
      {
        id: "q2",
        kind: "single",
        update: "After an hour of treatment her peak expiratory flow is 300 L/minute. She is still wheezy.",
        prompt: "Which of the following corticosteroid plans is most appropriate for her now?",
        options: [
          "budesonide nebules instead of tablets",
          "hydrocortisone 100 mg IV once",
          "prednisone 25 mg PO daily for 5 days",
          "prednisone 50 mg PO daily for 5 days",
          "Wait until she has weaned the baby",
        ],
        correct: 3,
        explanation:
          "Her peak flow is still 70% of her best after an hour of treatment, and GINA advises prompt oral corticosteroid for a moderate or severe flare, prednisone 1 mg/kg daily up to 50 mg for 5 to 7 days in adults. At 58 kg the 1 mg/kg calculation comes to 58 mg, so the 50 mg ceiling applies. A 25 mg dose is half the dose her weight calls for. Hydrocortisone by vein is for a patient who cannot swallow, and she can. Nebulized budesonide is an inhaled steroid and does not replace the oral course in a flare this severe. Waiting leaves a severe flare untreated, and the course shortens the flare and lowers the chance of relapse.",
        keyFeature: { topic: "asthma-copd", n: 6 },
        source: "gina",
      },
      {
        id: "q3",
        kind: "single",
        update: "Four hours after arrival, and an hour after her last treatment, her peak expiratory flow is 390 L/minute, 91% of her best. She asks whether prednisone is safe while she breastfeeds.",
        prompt: "Which of the following is the most appropriate advice about breastfeeding while she takes prednisone?",
        options: [
          "Breastfeed as usual during the course",
          "Delay each feed by 4 hours after a dose",
          "Discard the milk for 24 hours after a dose",
          "Stop breastfeeding until the course ends",
          "Switch to formula for the next 5 days",
        ],
        correct: 0,
        explanation:
          "Amounts of prednisone in breastmilk are very low and no adverse effects have been reported in breastfed infants of mothers taking any corticosteroid, so the LactMed record states that the often quoted practice of avoiding breastfeeding for 4 hours after a dose is not needed. Discarding milk, stopping feeds or moving to formula removes the benefits of breastfeeding for no gain. Her peak flow of 91% of her best an hour after treatment supports discharge, with inhaler technique checked and review within 2 to 7 days.",
        keyFeature: { topic: "asthma-copd", n: 8 },
        source: "lactmed-prednisone",
      },
    ],
    sources: [GINA, LACTMED_PREDNISONE],
    reviewed: false,
    author: AUTHOR,
    version: 4,
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
    title: "Wheeze after a morning in the orchard",
    stem:
      "A 46-year-old man presents to the emergency department with three hours of cough, wheeze and vomiting. He spent the morning spraying his apple orchard with an insecticide concentrate poured from an unlabelled drum in the barn, and the backpack sprayer leaked onto his back and legs. He has never wheezed before and has no lung disease. A walk-in clinic gave him salbutamol by spacer with no change and sent him here. He is anxious and sweating heavily, with saliva pooling in his mouth. His clothes are still damp. Both pupils are 2 mm. The chest sounds wet, with diffuse wheeze and coarse crackles.",
    vitals: {
      temperature: "36.5°C oral",
      pulse: "52/minute",
      resp: "28/minute",
      bp: "104/62 mmHg",
      o2sat: "90% on room air",
      weight: "80 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his first episode of wheeze?",
        options: [
          "Acute anaphylaxis to the insecticide",
          "Aspiration pneumonitis after vomiting",
          "New-onset adult asthma",
          "Organophosphate cholinergic toxicity",
          "Reactive airway irritation from solvent",
        ],
        correct: 3,
        explanation:
          "Pupils of 2 mm, pooled saliva, heavy sweating, vomiting, a pulse of 52/minute and a wet chest after insecticide soaked into his skin fit overstimulation of muscarinic receptors, and salbutamol did nothing. Eddleston and colleagues note that carbamate poisoning looks the same at the bedside and is treated the same way. Anaphylaxis brings a fast pulse, hives and large pupils rather than miosis and drooling. A first episode of asthma does not cause miosis, salivation or a pulse of 52/minute. Aspiration pneumonitis would not explain the pupils or the sweating. Solvent irritation can cause wheeze but leaves the cholinergic findings unexplained.",
        keyFeature: { topic: "asthma-copd", n: 1 },
        source: "eddleston-op",
      },
      {
        id: "q2",
        kind: "single",
        update: "He is decontaminated by staff in protective gowns and gloves and antidote treatment is started. Secretions keep filling his airway, his breathing is shallow, he is drowsy and his SpO2 is 86% on a non-rebreather mask.",
        prompt: "Which of the following is the most appropriate respiratory support for him now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Continue the non-rebreather mask",
          "High-flow nasal oxygen",
          "Rapid sequence intubation",
          "Suction and reassess in 30 minutes",
        ],
        correct: 3,
        explanation:
          "Drowsiness with shallow breathing and an airway that keeps filling despite antidote is the respiratory failure that kills in this poisoning, so he needs a definitive airway and ventilation now. Eddleston and colleagues describe resuscitation with oxygen, atropine and an oxime, with respiratory support as needed. A mask holding positive pressure over a drowsy patient with copious secretions and vomiting invites aspiration and does not clear the airway, so bilevel ventilation and high-flow nasal oxygen are both unsuitable here. Staying on the non-rebreather leaves him at 86%. Waiting 30 minutes after suction alone gives the secretions time to obstruct him again.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "eddleston-op",
      },
      {
        id: "q3",
        kind: "single",
        update: "By the next morning his secretions have stopped, his chest is clear and he breathes comfortably on room air. He feels well and asks to go home.",
        prompt: "Which of the following plans is most appropriate for the next 24 to 48 hours?",
        options: [
          "Discharge after four more hours",
          "Discharge with a salbutamol inhaler",
          "Monitored bed with strength checks",
          "Trial of bilevel ventilation at night",
          "Ward bed with 4-hourly vital signs",
        ],
        correct: 2,
        explanation:
          "Patients can develop peripheral respiratory failure days after the cholinergic crisis settles, while still awake, so Eddleston and colleagues advise regular testing of neck flexion strength against resistance and tidal volume checks, with ventilation if the tidal volume falls below 5 mL/kg, which is 400 mL at his 80 kg. Fat soluble compounds can also bring the cholinergic features back and change his atropine needs. Either discharge plan misses both. Vital signs alone do not measure respiratory muscle strength. He is breathing comfortably, so bilevel ventilation is not the treatment now.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "eddleston-op",
      },
    ],
    sources: [EDDLESTON_OP],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "asthma-copd-38",
    topic: "asthma-copd",
    title: "A positive home test",
    stem: "You are working in a community hospital emergency department. A 67-year-old man with asthma presents with 2 days of fever, sore throat and cough and 1 day of wheeze. A home rapid antigen test for COVID-19 was positive yesterday. He uses fluticasone 250 mcg with salmeterol 50 mcg, one inhalation twice daily, and salbutamol as needed. He finished a 5-day course of prednisone for an asthma flare 6 weeks ago. He has had asthma since early childhood and hay fever every spring. He has never been admitted to hospital for asthma. He speaks in full sentences and has scattered expiratory wheeze. His peak flow is 72% of his personal best.",
    vitals: {
      temperature: "38.1°C oral",
      pulse: "98/minute",
      resp: "20/minute",
      bp: "138/82 mmHg",
      o2sat: "95% on room air"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his asthma history most increases his risk of severe COVID-19?",
        options: [
          "Asthma since early childhood",
          "Daily inhaled fluticasone use",
          "Hay fever every spring",
          "Prednisone course 6 weeks ago",
          "Salbutamol use when wheezy"
        ],
        correct: 3,
        explanation: "GINA notes that people with asthma are not, as a group, at higher risk of severe COVID-19, but those with poorly controlled asthma, such as a recent need for oral corticosteroids, are at higher risk of hospitalization if they acquire it. His prednisone course 6 weeks ago is that marker. How long he has had asthma and his seasonal hay fever do not add to this risk. GINA advises patients to keep taking their usual asthma medicines during COVID-19, so daily inhaled fluticasone is not a cause for concern. Occasional salbutamol use is not the marker GINA names.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        update: "He needs repeated doses of salbutamol while he is treated in the department.",
        prompt: "Which of the following is the most appropriate way to give his salbutamol in the emergency department?",
        options: [
          "Continuous nebulizer by face mask",
          "Nebulizer driven by oxygen",
          "Nebulizer with the curtain drawn",
          "pMDI and spacer kept for him alone",
          "Salbutamol by IV infusion"
        ],
        correct: 3,
        explanation: "GINA advises avoiding nebulizers where COVID-19 is present, because they can carry respiratory viral particles at least 1 metre to other patients and staff. For acute asthma it recommends a pressurized metered-dose inhaler with a spacer, which improves lung function as well as a nebulizer in patients without life-threatening asthma. Spacers that cannot be sterilized should be kept for a single patient. A curtain does not contain the aerosol, and a continuous or oxygen-driven nebulizer still creates it. GINA does not support routine intravenous beta2-agonists in severe asthma, and his flare is not severe.",
        keyFeature: {
          topic: "asthma-copd",
          n: 4
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "single",
        update: "He is prescribed nirmatrelvir-ritonavir for 5 days.",
        prompt: "Which of the following inhaler plans is most appropriate while he takes this antiviral?",
        options: [
          "Continue fluticasone-salmeterol unchanged",
          "Double the fluticasone-salmeterol dose",
          "Fluticasone alone until 5 days after it ends",
          "Salmeterol alone until 5 days after it ends",
          "Stop both controllers until 5 days after it ends"
        ],
        correct: 2,
        explanation: "Ritonavir is a potent CYP3A4 inhibitor, and GINA warns that it may increase the cardiac toxicity of salmeterol. Product information advises against combining CYP3A4 inhibitors with ICS-salmeterol. GINA suggests switching to an inhaled corticosteroid alone, or to ICS-formoterol, for the antiviral course and a further 5 days, and teaching the technique for the new inhaler. The short course makes corticosteroid side effects unlikely. Stopping both controllers raises his risk of an asthma exacerbation. Salmeterol without an inhaled corticosteroid is unsafe in asthma. Continuing or doubling the combination keeps the interaction.",
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
    version: 3,
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
    title: "Two hours from the nearest unit",
    stem:
      "You are working in a rural hospital with no intensive care unit. A 58-year-old woman with COPD presents with three days of increasing breathlessness and more purulent sputum. She takes umeclidinium-vilanterol daily and has no home oxygen. Over the past hour she has had nebulized salbutamol and ipratropium, prednisone, an antibiotic and controlled oxygen. She is alert and follows commands but speaks in short phrases and says she is exhausted. Air entry is reduced with quiet wheeze. The nearest hospital with an intensive care unit is a two-hour drive away.",
    vitals: {
      temperature: "37.6°C oral",
      pulse: "118/minute",
      resp: "30/minute",
      bp: "142/86 mmHg",
      o2sat: "90% on 2 L/minute by nasal prongs",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best measures the severity of her respiratory failure now?",
        options: [
          "Accessory muscle use",
          "Arterial blood gas",
          "End-tidal carbon dioxide",
          "Peak expiratory flow",
          "Pulse oximetry on room air",
        ],
        correct: 1,
        explanation:
          "Only an arterial gas gives the pH and the arterial carbon dioxide that define acute hypercapnic respiratory failure, and the BTS and ICS guideline asks for a gas before noninvasive ventilation is started and again afterwards. Her saturation is already held in the 88 to 92% target band, so oximetry adds nothing about ventilation. Capnography reports exhaled carbon dioxide and gives no pH. Peak flow reflects airflow obstruction, not whether she is ventilating. Accessory muscle use shows effort and is graded by eye, so it cannot say how far her pH has fallen.",
        keyFeature: { topic: "asthma-copd", n: 3 },
        source: "bts-ics",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her gas on 2 L/minute shows pH 7.29, PaCO2 68 mmHg and PaO2 61 mmHg. She stays alert and cooperative. The transfer crew is 30 minutes away.",
        prompt: "Which of the following is the most appropriate next step for her ventilation?",
        options: [
          "Continue nebulizers and oxygen alone",
          "High-flow nasal oxygen at 50 L/minute",
          "Rapid sequence intubation before transport",
          "Start bilevel ventilation before transport",
          "Wait to start bilevel on arrival there",
        ],
        correct: 3,
        explanation:
          "A pH of 7.29 with a PaCO2 of 68 mmHg after an hour of full medical treatment meets the threshold the BTS and ICS guideline sets for noninvasive ventilation, a pH below 7.35 with a PaCO2 above 49 mmHg that persists despite that treatment. Starting before a two-hour drive treats the acidosis at the point it is found. Oxygen and nebulizers alone leave the acidosis untreated. High-flow nasal oxygen gives no inspiratory pressure to unload her breathing. She is alert and cooperative, so intubation is not the first step, and waiting adds two hours of acidosis.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-ics",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is settled on the ventilator with a full face mask. When the mask comes off for a nebulizer she desaturates to 85% within a minute. She still needs repeated bronchodilator.",
        prompt: "Which of the following is the most appropriate way to give her bronchodilator now?",
        options: [
          "Aminophylline infusion during transfer",
          "Hold bronchodilators until she arrives",
          "Nebulizer in the ventilator circuit",
          "Nebulizer with the mask off for 10 minutes",
          "Salbutamol by continuous IV infusion",
        ],
        correct: 2,
        explanation:
          "The BTS and ICS guideline advises giving nebulized drugs during breaks from noninvasive ventilation, and putting the nebulizer into the ventilator circuit when the patient depends on the machine. She drops to 85% within a minute off the mask, so she depends on it. Ten minutes off the mask repeats what has just failed. Holding treatment leaves her obstruction untreated for the two-hour drive. Intravenous salbutamol adds tremor, tachycardia and lactate without an advantage over drug delivered into the circuit. Aminophylline has a narrow margin between effect and toxicity and brings vomiting and arrhythmia, and it does not replace an inhaled bronchodilator.",
        keyFeature: { topic: "asthma-copd", n: 7 },
        source: "bts-ics",
      },
    ],
    sources: [BTS_ICS],
    reviewed: false,
    author: AUTHOR,
    version: 4,
  },
  {
    id: "asthma-copd-42",
    topic: "asthma-copd",
    title: "Evacuated ahead of the fire",
    stem: "You are working in a regional hospital emergency department in northern Alberta during a wildfire evacuation. A 34-year-old woman with asthma is brought to the emergency department by ambulance from an evacuation centre with 1 day of worsening wheeze and breathlessness. Heavy smoke covered her town for 2 days before she left. She takes budesonide-formoterol 200/6 mcg, one inhalation twice daily and as needed, and has used 10 extra inhalations today. She had one asthma admission 3 years ago and has never been intubated. She is alert and sits upright on the stretcher. She talks in phrases and can sip water. She has loud expiratory wheeze in both lungs and no stridor, hives or leg swelling.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "118/minute",
      resp: "28/minute",
      bp: "132/80 mmHg",
      o2sat: "90% on room air"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings places her presentation in the severe category of the GINA 2026 emergency department criteria?",
        options: [
          "Heart rate of 118/minute",
          "Loud wheeze in both lungs",
          "Respiratory rate of 28/minute",
          "SpO2 of 90% on room air",
          "Talks in phrases, not sentences"
        ],
        correct: 3,
        explanation: "Her room air saturation of 90% is below the GINA 2026 severe threshold of 92%, and any one severe feature is enough to class the presentation as severe. Talking in phrases while preferring to sit is a moderate feature. A respiratory rate of 28/minute is raised but does not reach the severe cut-off of more than 30/minute. Loud expiratory wheeze is listed with moderate presentations, and a quiet chest is the worrying sign. Heart rate is not among the GINA 2026 severe criteria, and earlier GINA versions set the severe cut-off above 120/minute. Her pulse may also partly reflect the 10 extra doses of formoterol she took today.",
        keyFeature: {
          topic: "asthma-copd",
          n: 3
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        update: "Salbutamol and ipratropium by pMDI and spacer are started. A chest X-ray is ordered because of her smoke exposure. The portable machine will not be free for 1 hour.",
        prompt: "Which of the following corticosteroid orders is most appropriate for her at this point?",
        options: [
          "budesonide 1 mg nebulized, no prednisone",
          "methylprednisolone 80 mg IM now",
          "prednisone 50 mg PO after the chest X-ray",
          "prednisone 50 mg PO if no better in 1 hour",
          "prednisone 50 mg PO now"
        ],
        correct: 4,
        explanation: "GINA advises systemic corticosteroid for all but the mildest exacerbations, given within 1 hour of presentation where possible. Oral corticosteroids take at least 4 hours to help, so the dose should not wait. She can sip water, and oral prednisone is as effective as IV and quicker to give. Waiting for the chest X-ray delays treatment for an investigation that would not change the need for it. GINA does not advise a routine chest X-ray in acute asthma. Waiting 1 hour to judge the response to bronchodilators also delays it, when her presentation is already severe. High-dose inhaled budesonide has shown benefit mainly in patients who receive no systemic corticosteroid. IM methylprednisolone has shown no benefit over the oral route in trials and adds an injection.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "single",
        update: "Forty minutes later, after three rounds of bronchodilators, she is restless and keeps trying to climb off the stretcher. She says she is panicking. The nurse asks for an order to calm her.",
        prompt: "Which of the following is the most appropriate response to her restlessness?",
        options: [
          "Bilevel ventilation with midazolam 1 mg IV",
          "Blood gas and urgent ICU review",
          "Coached slow breathing and reassurance",
          "haloperidol 2.5 mg IM, then reassess",
          "lorazepam 1 mg SL, then reassess"
        ],
        correct: 1,
        explanation: "New restlessness after three rounds of bronchodilators in a severe exacerbation must be treated as possible worsening gas exchange until shown otherwise. GINA lists not being agitated as a feature of a moderate presentation. It advises a blood gas for a patient who is not responding or is deteriorating, and considering ICU transfer when the patient is worsening. GINA states that sedation must be strictly avoided in acute asthma, because anxiolytic and hypnotic drugs depress breathing and have been linked to avoidable asthma deaths. That rules out lorazepam and argues against haloperidol. GINA also advises that NIV should not be tried in an agitated patient and that patients should not be sedated to receive it. Coaching her breathing assumes panic and could miss respiratory failure.",
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
    version: 4,
  },
  {
    id: "asthma-copd-43",
    topic: "asthma-copd",
    title: "Wheeze after a double shift",
    stem: "A 38-year-old man presents to the emergency department with 6 hours of wheeze and chest tightness that began near the end of a double shift. He has painted cars in an autobody shop for 4 years, spraying two-part polyurethane paints. A runny nose and sneezing at work began about 2 years ago. A walk-in clinic diagnosed asthma 8 months ago and prescribed a salmeterol inhaler twice daily and salbutamol as needed. He has never smoked and has no pets. After salbutamol and ipratropium by spacer and prednisone 50 mg PO, his peak flow rises from 55% to 82% of predicted.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "92/minute",
      resp: "18/minute",
      bp: "128/76 mmHg",
      o2sat: "97% on room air"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following history findings would most change his long-term management?",
        options: [
          "Eczema in early childhood",
          "Father with childhood asthma",
          "Symptoms ease on vacations",
          "Wheeze first began after a cold",
          "Worse symptoms in cold air"
        ],
        correct: 2,
        explanation: "His asthma began in adult life after rhinitis at work, while he sprays paints. GINA advises that adult-onset asthma needs a systematic inquiry about work exposures, and it calls asking whether symptoms improve away from work an essential screening question. Improvement on vacations would point to occupational asthma, where persistent exposure is linked to worse outcomes and early removal from the sensitizer and specialist referral are central to care. Childhood eczema and a family history make asthma more likely but do not change the plan. A cold or cold air can trigger any asthma.",
        keyFeature: {
          topic: "asthma-copd",
          n: 2
        },
        source: "gina"
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following changes to his controller treatment is most appropriate at discharge?",
        options: [
          "Add an inhaled corticosteroid",
          "Add montelukast to salmeterol",
          "Add tiotropium to salmeterol",
          "Continue salmeterol unchanged",
          "Increase salmeterol to three times daily"
        ],
        correct: 0,
        explanation: "He is taking a long-acting beta2-agonist with no inhaled corticosteroid. GINA strongly discourages regular LABA use without an inhaled corticosteroid because of the risk of exacerbations, and it advises starting ICS-containing treatment before discharge after an emergency visit. Adding an inhaled corticosteroid, for example by changing to a combination inhaler, treats the airway inflammation that salmeterol leaves untreated. Montelukast adds no inhaled corticosteroid. GINA also warns that a long-acting muscarinic antagonist without an inhaled corticosteroid increases the risk of severe exacerbations. Continuing or increasing salmeterol keeps the unsafe regimen.",
        keyFeature: {
          topic: "asthma-copd",
          n: 6
        },
        source: "gina"
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following should be arranged before he leaves the emergency department?",
        options: [
          "Chest CT before follow-up",
          "Follow-up visit within 2 to 7 days",
          "Home nebulizer for salbutamol",
          "Oral antibiotic for 5 days",
          "Referral for specialist assessment",
          "Salbutamol before each shift"
        ],
        select: 2,
        correct: [
          1,
          4
        ],
        explanation: "GINA advises a follow-up visit within 2 to 7 days after an emergency visit for asthma. It also advises that suspected occupational asthma be referred for expert assessment, because the diagnosis must be confirmed objectively and has economic and legal consequences. Taking salbutamol before each shift would hide symptoms while exposure continues. A home nebulizer gives no advantage over a pMDI and spacer. Antibiotics are not recommended without strong evidence of lung infection. A chest CT is not part of the assessment GINA describes.",
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
    version: 3,
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
    title: "A reassuring number at triage",
    stem: "A 61-year-old Black man with COPD presents to the emergency department with 3 days of increasing breathlessness and cough with more sputum than usual. He uses tiotropium-olodaterol once daily and salbutamol as needed. He has no home oxygen. At triage his pulse oximeter reads 93% on room air, so no oxygen is started. He is alert, speaks in short sentences and has diffuse wheeze. He has no leg swelling. A chest X-ray shows hyperinflation without consolidation or pneumothorax.",
    vitals: {
      temperature: "37.4°C oral",
      pulse: "108/minute",
      resp: "26/minute",
      bp: "146/84 mmHg",
      o2sat: "93% on room air",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "An arterial gas on room air shows pH 7.34, PaCO2 52 mmHg, PaO2 50 mmHg and a measured SaO2 of 84%. Carboxyhemoglobin is 1.5% and methemoglobin 0.8%. Hemoglobin is 138 g/L. A new oximeter probe still reads 93%.",
        prompt: "Which of the following best explains the gap between his oximeter reading and his measured saturation?",
        options: [
          "Carbon monoxide exposure",
          "Faulty oximeter probe",
          "Low hemoglobin level",
          "Methemoglobinemia",
          "Skin pigmentation bias"
        ],
        correct: 4,
        explanation: "His measured arterial saturation of 84% is far below the 93% shown by oximetry. Normal carboxyhemoglobin and methemoglobin levels, a normal hemoglobin of 138 g/L and the same reading from a new probe leave skin pigmentation as the likely cause. In a large study of paired measurements, oximeter readings of 92 to 96% hid an arterial saturation below 88% in 17% of readings in Black patients, nearly three times the rate in White patients. His arterial gas, not the oximeter, now defines his hypoxemia and hypercapnia, and it should guide his oxygen therapy.",
        keyFeature: {
          topic: "asthma-copd",
          n: 3
        },
        source: "sjoding"
      },
      {
        id: "q2",
        kind: "single",
        update: "Salbutamol and ipratropium are started with controlled oxygen and prednisone. The nurse asks about his usual tiotropium-olodaterol.",
        prompt: "Which of the following is the most appropriate plan for his usual long-acting inhaler?",
        options: [
          "Hold it until the flare settles",
          "Keep it, alongside short-acting inhalers",
          "Replace it with IV aminophylline",
          "Replace it with salbutamol every 20 minutes",
          "Switch it to nebulized ipratropium alone"
        ],
        correct: 1,
        explanation: "The GOLD report recommends continuing long-acting bronchodilators during an exacerbation, or starting them as soon as possible before discharge, alongside short-acting bronchodilators. Holding his tiotropium-olodaterol removes his baseline bronchodilation. GOLD advises against high doses of short-acting beta2-agonists because of side effects, so salbutamol every 20 minutes is not a substitute. IV methylxanthines such as aminophylline are not recommended because of significant side effects. Nebulized ipratropium alone drops the beta2-agonist and replaces both long-acting agents with one short-acting drug.",
        keyFeature: {
          topic: "asthma-copd",
          n: 5
        },
        source: "gold"
      },
      {
        id: "q3",
        kind: "single",
        update: "One hour later his pH is 7.30 and PaCO2 60 mmHg. He is alert. Bilevel ventilation is started, but despite coaching and two different masks he pulls the mask off and refuses further attempts. He has capacity, declines intubation and agrees to nasal prongs.",
        prompt: "Which of the following is the most appropriate respiratory support for him now?",
        options: [
          "Continue low-flow prongs and recheck",
          "High-flow nasal therapy",
          "Non-rebreather mask at 15 L/minute",
          "Restart bilevel with another mask",
          "Venturi mask at 60% oxygen"
        ],
        correct: 1,
        explanation: "His pH of 7.30 and PaCO2 of 60 mmHg call for ventilatory support, but he will not accept bilevel ventilation and declines intubation. The GOLD report describes high-flow nasal therapy for patients with COPD who are hypercapnic or unable to tolerate NIV, and trials in hypercapnic exacerbations found it lowered PaCO2 about as well as NIV and was more comfortable, though about 30% switched to NIV in one trial, so his gas must be rechecked. Low-flow prongs alone leave the acidosis untreated. A non-rebreather mask or a 60% Venturi mask raises oxygen without supporting ventilation. Restarting a mask he has refused is not an option while he declines it.",
        keyFeature: {
          topic: "asthma-copd",
          n: 7
        },
        source: "gold"
      }
    ],
    sources: [SJODING, GOLD],
    reviewed: false,
    author: AUTHOR,
    version: 3,
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
