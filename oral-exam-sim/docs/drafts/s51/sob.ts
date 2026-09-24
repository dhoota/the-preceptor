// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const GULDFRED: Source = {
  id: "guldfred",
  citation: "Guldfred LA, Lyhne D, Becker BC. Acute epiglottitis. Epidemiology, clinical presentation, management and outcome. J Laryngol Otol. 2008.",
};
const CAFG2: Source = {
  id: "cafg2",
  citation:
    "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Can J Anesth. 2021.",
  url: "https://doi.org/10.1007/s12630-021-02008-z",
};
const NIV: Source = {
  id: "niv",
  citation: "Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. Eur Respir J. 2017.",
};
const ESCHF: Source = {
  id: "eschf",
  citation: "McDonagh TA, Metra M, Adamo M, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021.",
};
const PRAM: Source = {
  id: "pram",
  citation:
    "Ducharme FM, Chalut D, Plotnick L, et al. The Pediatric Respiratory Assessment Measure. A valid clinical score for assessing acute asthma severity from toddlers to teenagers. J Pediatr. 2008.",
};
const CPSASTHMA: Source = {
  id: "cps-asthma",
  citation: "Trottier ED, Chan K, Allain D, Chauvin-Kimoff L. Canadian Paediatric Society. Managing an acute asthma exacerbation in children. Paediatr Child Health. 2021.",
  url: "https://doi.org/10.1093/pch/pxab058",
};
const CPSBRONCH: Source = {
  id: "cps-bronch",
  citation:
    "Friedman JN, Rieder MJ, Walton JM. Canadian Paediatric Society. Bronchiolitis. Recommendations for diagnosis, monitoring and management of children one to 24 months of age. Paediatr Child Health. 2014.",
  url: "https://cps.ca/en/documents/position/bronchiolitis",
};
const PARIS: Source = {
  id: "paris",
  citation: "Franklin D, Babl FE, Schlapbach LJ, et al. A randomized trial of high-flow oxygen therapy in infants with bronchiolitis. N Engl J Med. 2018.",
  url: "https://doi.org/10.1056/NEJMoa1714855",
};
const BARKUN: Source = {
  id: "barkun",
  citation:
    "Barkun AN, Almadi M, Kuipers EJ, et al. Management of nonvariceal upper gastrointestinal bleeding. Guideline recommendations from the International Consensus Group. Ann Intern Med. 2019.",
};
const WENDELL: Source = {
  id: "wendell",
  citation: "Wendell LC, Levine JM. Myasthenic crisis. Neurohospitalist. 2011.",
  url: "https://doi.org/10.1177/1941875210382918",
};
const MGANES: Source = {
  id: "mg-anes",
  citation: "Blichfeldt-Lauridsen L, Hansen BD. Anesthesia and myasthenia gravis. Acta Anaesthesiol Scand. 2012.",
  url: "https://doi.org/10.1111/j.1399-6576.2011.02558.x",
};
const ESCPERI: Source = {
  id: "esc-peri",
  citation: "Adler Y, Charron P, Imazio M, et al. 2015 ESC Guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.",
};
const TCPE: Source = {
  id: "tc-pe",
  citation: "Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf",
};
const ESCPE: Source = {
  id: "esc-pe",
  citation: "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
};
const CRAIG: Source = {
  id: "craig",
  citation: "Craig FW, Schunk JE. Retropharyngeal abscess in children. Clinical presentation, utility of imaging, and current management. Pediatrics. 2003.",
};
const BTSPLEURAL: Source = {
  id: "bts-pleural",
  citation: "Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society guideline for pleural disease. Thorax. 2023.",
};
const BTSO2: Source = {
  id: "bts-o2",
  citation: "O'Driscoll BR, Howard LS, Earis J, Mak V. BTS guideline for oxygen use in adults in healthcare and emergency settings. Thorax. 2017.",
};
const HFNC: Source = {
  id: "hfnc",
  citation:
    "Rochwerg B, Einav S, Chaudhuri D, et al. The role for high flow nasal cannula as a respiratory support strategy in adults. A clinical practice guideline. Intensive Care Med. 2020.",
  url: "https://doi.org/10.1007/s00134-020-06312-y",
};
const ROX: Source = {
  id: "rox",
  citation: "Roca O, Caralt B, Messika J, et al. An index combining respiratory rate and oxygenation to predict outcome of nasal high-flow therapy. Am J Respir Crit Care Med. 2019.",
};
const SKOLD: Source = {
  id: "skold",
  citation: "Skold A, Cosco DL, Klein R. Methemoglobinemia. Pathogenesis, diagnosis, and management. South Med J. 2011.",
};
const ROSE: Source = {
  id: "rose",
  citation: "Rose JJ, Wang L, Xu Q, et al. Carbon monoxide poisoning. Pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017.",
};
const CAEPAF: Source = {
  id: "caep-af",
  citation: "Stiell IG, de Wit K, Scheuermeyer FX, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.",
};
const CAP: Source = {
  id: "cap",
  citation:
    "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019.",
};
const LEATHERMAN: Source = {
  id: "leatherman",
  citation: "Leatherman J. Mechanical ventilation for severe asthma. Chest. 2015.",
  url: "https://doi.org/10.1378/chest.14-1733",
};

const LUDWIG: Source = {
  id: "ludwig",
  citation: "Candamourty R, Venkatachalam S, Babu MR, Kumar GS. Ludwig's angina. An emergency. A case report with literature review. J Nat Sci Biol Med. 2012.",
};
const AHABLS: Source = {
  id: "aha-bls",
  citation:
    "American Heart Association. Part 7. Adult basic life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.",
  url: "https://doi.org/10.1161/CIR.0000000000001369",
};
const STEMI: Source = {
  id: "stemi",
  citation:
    "Wong GC, Welsford M, Ainsworth C, et al. 2019 Canadian Cardiovascular Society/Canadian Association of Interventional Cardiology guidelines on the acute management of ST-elevation myocardial infarction. Focused update on regionalization and reperfusion. Can J Cardiol. 2019.",
};
const HOWARD: Source = {
  id: "howard",
  citation: "Howard J, Hart N, Roberts-Harewood M, et al. Guideline on the management of acute chest syndrome in sickle cell disease. Br J Haematol. 2015.",
  url: "https://doi.org/10.1111/bjh.13348",
};
const OIPCP: Source = {
  id: "oi-pcp",
  citation:
    "Panel on Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents With HIV. Guidelines for the prevention and treatment of opportunistic infections in adults and adolescents with HIV. Pneumocystis pneumonia. National Institutes of Health. 2026.",
  url: "https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/pneumocystis",
};
const LAWMYO: Source = {
  id: "law-myo",
  citation: "Law YM, Lal AK, Chen S, et al. Diagnosis and management of myocarditis in children. A scientific statement from the American Heart Association. Circulation. 2021.",
  url: "https://doi.org/10.1161/CIR.0000000000001001",
};
const ILIFF: Source = {
  id: "iliff",
  citation:
    "Iliff HA, El-Boghdadly K, Ahmad I, et al. Management of haematoma after thyroid surgery. Systematic review and multidisciplinary consensus guidelines from the Difficult Airway Society, the British Association of Endocrine and Thyroid Surgeons and the British Association of Otorhinolaryngology, Head and Neck Surgery. Anaesthesia. 2022.",
  url: "https://doi.org/10.1111/anae.15585",
};
const BOYER: Source = {
  id: "boyer",
  citation: "Boyer EW. Management of opioid analgesic overdose. N Engl J Med. 2012.",
};
const CBSTR: Source = {
  id: "cbs-tr",
  citation: "Laureano M, Khandelwal A, Yan M. Transfusion reactions. In: Clinical Guide to Transfusion. Canadian Blood Services. 2022.",
  url: "https://professionaleducation.blood.ca/en/transfusion/clinical-guide/transfusion-reactions",
};
const PPCM: Source = {
  id: "ppcm",
  citation:
    "Bauersachs J, Konig T, van der Meer P, et al. Pathophysiology, diagnosis and management of peripartum cardiomyopathy. A position statement from the Heart Failure Association of the European Society of Cardiology Study Group on peripartum cardiomyopathy. Eur J Heart Fail. 2019.",
  url: "https://doi.org/10.1002/ejhf.1493",
};
const CURB: Source = {
  id: "curb65",
  citation:
    "Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital. An international derivation and validation study. Thorax. 2003.",
};
const PERC: Source = {
  id: "perc",
  citation: "Kline JA, Courtney DM, Kabrhel C, et al. Prospective multicenter evaluation of the pulmonary embolism rule-out criteria. J Thromb Haemost. 2008.",
};

const ESKANDER: Source = {
  id: "eskander",
  citation: "Eskander A, de Almeida JR, Irish JC. Acute upper airway obstruction. N Engl J Med. 2019.",
  url: "https://doi.org/10.1056/NEJMra1811697",
};
const MOKHLESI: Source = {
  id: "mokhlesi",
  citation:
    "Mokhlesi B, Masa JF, Brozek JL, et al. Evaluation and management of obesity hypoventilation syndrome. An official American Thoracic Society clinical practice guideline. Am J Respir Crit Care Med. 2019.",
  url: "https://doi.org/10.1164/rccm.201905-1071ST",
};
const BTSAHRF: Source = {
  id: "bts-ahrf",
  citation:
    "Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. Thorax. 2016.",
};
const WILCOX: Source = {
  id: "wilcox-ph",
  citation: "Wilcox SR, Kabrhel C, Channick RN. Pulmonary hypertension and right ventricular failure in emergency medicine. Ann Emerg Med. 2015.",
  url: "https://pubmed.ncbi.nlm.nih.gov/26342901/",
};
const HARRIS: Source = {
  id: "bts-cap-child",
  citation:
    "Harris M, Clark J, Coote N, et al. British Thoracic Society guidelines for the management of community acquired pneumonia in children. Update 2011. Thorax. 2011.",
};
const CPSEMPYEMA: Source = {
  id: "cps-empyema",
  citation: "Chibuk TK, Cohen E, Robinson JL, Mahant S, Hartfield DS. Canadian Paediatric Society. Paediatric complicated pneumonia. Diagnosis and management of empyema. Paediatr Child Health. 2011.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3200394/",
};
const CPSCAP: Source = {
  id: "cps-cap",
  citation: "Le Saux N, Robinson JL. Canadian Paediatric Society. Uncomplicated pneumonia in healthy Canadian children and youth. Practice points for management. Paediatr Child Health. 2015.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4699530/",
};

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

export const SOB_S51_SAMPS: Samp[] = [
  {
    id: "sob-16",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Sore throat and a muffled voice",
    stem:
      "You are working in a community hospital emergency department. The on-call otolaryngologist and anesthetist are 30 minutes away. A 48-year-old man presents to the emergency department with 10 hours of severe sore throat and pain on swallowing. Over the last 2 hours his voice has become muffled and he cannot swallow his saliva. He has type 2 diabetes treated with metformin. He is sitting upright, leaning forward and drooling. The oropharynx looks nearly normal apart from pooled saliva. The anterior neck is very tender over the hyoid. There is no stridor and the chest is clear.",
    vitals: { temperature: "38.9°C oral", pulse: "116/minute", resp: "22/minute", bp: "142/86 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: ["Acute supraglottitis", "Bacterial tracheitis", "Peritonsillar abscess", "Retropharyngeal abscess", "Streptococcal pharyngitis"],
        correct: 0,
        explanation:
          "Severe pain on swallowing that is out of proportion to a near normal oropharynx, a muffled voice, drooling and tenderness over the hyoid place the problem above the glottis, in the epiglottis and supraglottic tissues. A peritonsillar abscess shows visible tonsillar bulging and uvular deviation, which this oropharynx lacks. A retropharyngeal abscess is uncommon in adults and causes neck stiffness and posterior pharyngeal swelling rather than anterior tenderness at the hyoid. Bacterial tracheitis is mainly a disease of children and causes a brassy cough and stridor. Streptococcal pharyngitis produces a red, exudative pharynx and does not stop a patient swallowing his saliva.",
        keyFeature: { topic: "sob", n: 1 },
        source: "guldfred",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate to confirm the diagnosis and gauge airway narrowing?",
        options: [
          "Bedside flexible nasolaryngoscopy",
          "CT of the neck with contrast",
          "Lateral neck radiograph in radiology",
          "Rapid antigen throat swab",
          "Ultrasound of the neck soft tissues",
        ],
        correct: 0,
        explanation:
          "Flexible nasolaryngoscopy done with the patient sitting upright shows the swollen epiglottis directly and lets the operator judge how much of the airway is left, without moving him from the resuscitation room. CT needs him to lie supine in the scanner, away from airway equipment, which can precipitate obstruction. A lateral neck radiograph can miss supraglottitis and also sends him out of the department. A rapid antigen swab looks for streptococcal pharyngitis and does not assess the airway. Ultrasound of the epiglottis is operator dependent and does not grade supraglottic narrowing reliably.",
        keyFeature: { topic: "sob", n: 1 },
        source: "guldfred",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Nasolaryngoscopy shows a swollen, red epiglottis. Twenty minutes later he develops soft inspiratory stridor and can no longer finish a sentence. O2 saturation is 91%. The otolaryngologist and anesthetist have just arrived.",
        prompt: "Which of the following is the most appropriate airway plan for this patient?",
        options: [
          "Awake intubation with neck access ready",
          "Bag-mask ventilation to assist breathing",
          "High flow nasal oxygen and observation",
          "Noninvasive positive pressure ventilation",
          "Rapid sequence intubation in the department",
        ],
        correct: 0,
        explanation:
          "New stridor and falling saturation mean the supraglottic airway is closing. The Canadian Airway Focus Group advises awake tracheal intubation for an anticipated difficult airway with obstruction, so he keeps breathing on his own, with the front of the neck marked and a surgeon ready for a surgical airway. Rapid sequence induction removes his own airway tone and can turn partial obstruction into a cannot intubate, cannot oxygenate emergency. Noninvasive ventilation and bag-mask ventilation push gas against a swollen supraglottis and do not relieve the obstruction. Observation on high flow oxygen delays action while the stridor gets worse.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [GULDFRED, CAFG2],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-17",
    topic: "sob",
    alsoTopics: ["pulmonary-edema"],
    title: "Woke from sleep unable to breathe",
    stem:
      "A 69-year-old woman is brought to the emergency department by ambulance with 40 minutes of severe shortness of breath that woke her from sleep. She has hypertension and type 2 diabetes. She ran out of her amlodipine and ramipril 1 week ago. Paramedics gave one 0.4 mg dose of nitroglycerin spray. She is sitting bolt upright, sweaty and speaking 1 or 2 words at a time. She is alert and follows commands. The JVP is 6 cm above the sternal angle. There are crackles to the apices of both lungs. There is no leg edema.",
    vitals: { temperature: "36.8°C oral", pulse: "124/minute", resp: "36/minute", bp: "212/118 mmHg", o2sat: "86% on 15 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support for this patient now?",
        options: [
          "High flow nasal oxygen at 60 L/minute",
          "Noninvasive positive pressure ventilation",
          "Rapid sequence intubation and ventilation",
          "Simple face mask at 10 L/minute",
          "Venturi mask at 60% FiO2",
        ],
        correct: 1,
        explanation:
          "She has acute cardiogenic pulmonary edema, is alert and can protect her airway. The ERS/ATS guideline strongly recommends bilevel or CPAP noninvasive ventilation here, because positive pressure recruits flooded alveoli, lowers preload and afterload and reduces the need for intubation. High flow nasal oxygen gives only a small, variable positive pressure and is not the recommended first choice for cardiogenic edema. Intubation is not needed yet, as she is alert, and induction in a hypertensive, hypoxemic patient carries a high risk of arrest. A simple face mask or Venturi mask gives less oxygen than she is already receiving and no positive pressure.",
        keyFeature: { topic: "sob", n: 3 },
        source: "niv",
      },
      {
        id: "q2",
        kind: "single",
        update: "Noninvasive ventilation is started. Her BP is now 206/114 mmHg and her respiratory rate is 34/minute.",
        prompt: "Which of the following medications is the most appropriate to give next?",
        options: [
          "furosemide 120 mg IV as a single bolus",
          "labetalol 20 mg IV then infusion",
          "metoprolol 5 mg IV every 5 minutes",
          "morphine 4 mg IV every 10 minutes",
          "nitroglycerin 100 mcg/minute IV infusion",
        ],
        correct: 4,
        explanation:
          "Sudden pulmonary edema with a BP of 212/118 mmHg after stopping her antihypertensives, and no leg edema, is driven by afterload and fluid redistribution more than by volume overload. A high dose intravenous nitrate lowers preload and afterload within minutes, and the ESC guideline supports vasodilators when systolic pressure is above 110 mmHg. Furosemide acts more slowly, and a large dose in a patient who is not volume overloaded risks hypovolemia and kidney injury once the edema clears. Beta-blockers such as metoprolol and labetalol reduce contractility and can precipitate cardiogenic shock in acute pulmonary edema. Morphine is linked to more intubation and is not recommended routinely.",
        keyFeature: { topic: "sob", n: 3 },
        source: "eschf",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Thirty minutes later she is drowsy, opens her eyes only to voice and breathes shallowly. She has received no opioid. Venous gas: pH 7.14, PCO2 78 mmHg. BP 164/96 mmHg.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Change to high flow nasal oxygen",
          "Give naloxone 0.4 mg IV",
          "Increase the NIV inspiratory pressure",
          "Rapid sequence intubation",
          "Repeat the venous gas in 1 hour",
        ],
        correct: 3,
        explanation:
          "A falling level of consciousness with a pH of 7.14 and a PCO2 of 78 mmHg after 30 minutes of noninvasive ventilation means that NIV has failed. Drowsiness also removes her ability to protect her airway, so she needs intubation now. Raising the inspiratory pressure is reasonable only in an alert patient who is improving. High flow nasal oxygen gives less ventilatory support than NIV. She received no opioid, so naloxone has no target. Waiting an hour for another gas lets hypercapnic coma progress to arrest.",
        keyFeature: { topic: "sob", n: 4 },
        source: "niv",
      },
      {
        id: "q4",
        kind: "single",
        update: "She is intubated and her BP settles to 138/80 mmHg on a nitroglycerin infusion.",
        prompt: "Which of the following investigations is most important to identify a treatable trigger for this episode?",
        options: ["Blood cultures", "D-dimer level", "Electrocardiogram", "Serum lipase", "Urine drug screen"],
        correct: 2,
        explanation:
          "Acute coronary syndrome and arrhythmia are common triggers of acute heart failure that need their own urgent treatment, and the ESC guideline asks for an ECG as soon as possible in every patient. Her missed antihypertensives explain much of the episode, but ischemia can coexist and would change management. She has no fever to prompt blood cultures. D-dimer is not specific in acute heart failure and she has no features of PE. Lipase and a urine drug screen do not look for the usual cardiac triggers.",
        keyFeature: { topic: "sob", n: 2 },
        source: "eschf",
      },
    ],
    sources: [NIV, ESCHF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-18",
    topic: "sob",
    alsoTopics: ["asthma-copd"],
    title: "A cold and a wheezy 6-year-old",
    stem:
      "A 6-year-old boy is brought to the emergency department by his mother with 1 day of cough and increasing wheeze after a cold. He has asthma and uses fluticasone 50 mcg twice daily and salbutamol as needed. He has had 6 puffs of salbutamol at home in the past 2 hours with little effect. He has never been admitted to an ICU. He is sitting up and speaks in short sentences. There are suprasternal retractions and scalene muscle contraction. Air entry is decreased throughout both lungs. There is inspiratory and expiratory wheeze.",
    vitals: { temperature: "37.4°C tympanic", pulse: "138/minute", resp: "36/minute", o2sat: "91% on room air", weight: "22 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is this child's Pediatric Respiratory Assessment Measure (PRAM) score at triage?",
        options: ["4 points", "6 points", "8 points", "10 points", "12 points"],
        correct: 3,
        explanation:
          "The PRAM scores suprasternal retractions 2, scalene contraction 2, widespread decrease in air entry 2, inspiratory and expiratory wheeze 2 and an O2 saturation below 92% 2, which gives 10 points. A score of 8 to 12 is a severe exacerbation. A score of 8 leaves out one 2 point finding, such as the scalene contraction. A score of 12 needs absent or minimal air entry and a silent chest or wheeze audible without a stethoscope, which he does not have. Scores of 4 and 6 leave out findings the stem describes.",
        keyFeature: { topic: "sob", n: 4 },
        source: "pram",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following treatments should be started now for this child?",
        select: 3,
        options: [
          "amoxicillin by mouth",
          "Chest physiotherapy",
          "High dose inhaled budesonide",
          "Inhaled ipratropium bromide",
          "Intramuscular epinephrine",
          "montelukast by mouth",
          "Oral corticosteroid",
          "salbutamol by MDI with spacer",
        ],
        correct: [3, 6, 7],
        explanation:
          "A PRAM of 10 is a severe exacerbation. The Canadian Paediatric Society recommends repeated salbutamol, with an MDI and spacer as the preferred device, plus ipratropium in moderate to severe attacks, and an oral corticosteroid given early. Inhaled budesonide does not replace a systemic steroid in the emergency department. Montelukast has no role in acute treatment. There is no fever or focal sign to justify an antibiotic, and chest physiotherapy does not help. Intramuscular epinephrine is for anaphylaxis, and he has no features of it.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cps-asthma",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "He has had three doses of salbutamol with ipratropium over 1 hour and oral dexamethasone, which he kept down. His PRAM score is now 9. O2 saturation is 92% on 2 L/minute by nasal prongs.",
        prompt: "Which of the following is the most appropriate additional treatment now?",
        options: [
          "budesonide 1 mg nebulized",
          "epinephrine 0.2 mg IM",
          "ketamine 22 mg IV",
          "magnesium sulfate 1 g IV",
          "methylprednisolone 44 mg IV",
        ],
        correct: 3,
        explanation:
          "A PRAM that stays in the severe range after an hour of salbutamol and ipratropium is an incomplete response. The Canadian Paediatric Society advises IV magnesium sulfate at this point, with cardiorespiratory monitoring, and 1 g is about 45 mg/kg for a 22 kg child. He kept down oral dexamethasone, and a second steroid by the IV route acts no faster and does not replace a bronchodilator step. Nebulized budesonide is not an escalation step for severe asthma. Intramuscular epinephrine is not needed when inhaled drugs can be delivered. There is not enough evidence to support ketamine in a child who is not intubated.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cps-asthma",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Two hours later he is sleepy and hard to rouse. Air entry is minimal and the wheeze is now faint. Capillary gas: pH 7.26, PCO2 52 mmHg.",
        prompt: "Which of the following best explains the change in this child's examination?",
        options: [
          "Clearing of bronchospasm",
          "Fatigue after a long night",
          "Hypermagnesemia after the infusion",
          "Impending respiratory failure",
          "Tension pneumothorax",
        ],
        correct: 3,
        explanation:
          "A quiet chest with minimal air entry, drowsiness and a PCO2 of 52 mmHg mean he is tiring and moving too little air to wheeze. The Canadian Paediatric Society lists drowsiness as a sign of impending respiratory failure and warns that even a normal CO2 in a child who is still working hard to breathe can signal it. Clearing bronchospasm would bring better air entry and a falling CO2. Ordinary tiredness does not cause hypercapnic acidosis. A single 1 g dose of magnesium rarely causes drowsiness, and a pneumothorax would give one sided findings.",
        keyFeature: { topic: "sob", n: 4 },
        source: "cps-asthma",
      },
    ],
    sources: [PRAM, CPSASTHMA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-19",
    topic: "sob",
    title: "Fast breathing and poor feeding at 10 weeks",
    stem:
      "A 10-week-old girl is brought to the emergency department by her parents with 3 days of runny nose and cough and 1 day of fast breathing and poor feeding. She was born at 33 weeks gestation and went home at 3 weeks of age. Today she has taken about half her usual feeds and has had 2 wet diapers. Her older brother has a cold. She has subcostal and intercostal retractions, nasal flaring and head bobbing. There are fine crackles and wheeze throughout both lungs. Capillary refill is 2 seconds.",
    vitals: { temperature: "37.9°C rectal", pulse: "178/minute", resp: "68/minute", o2sat: "88% on room air", weight: "4.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to start first for this infant?",
        options: [
          "Nebulized epinephrine",
          "Nebulized hypertonic saline",
          "Nebulized salbutamol",
          "Oral dexamethasone",
          "Supplemental oxygen",
        ],
        correct: 4,
        explanation:
          "Her saturation of 88% is below the Canadian Paediatric Society threshold of 90%, so supplemental oxygen is the first treatment. The same statement recommends against routine salbutamol, epinephrine and corticosteroids in bronchiolitis, because trials show no lasting benefit. Nebulized hypertonic saline is not recommended in the emergency department, where it has not reduced admissions. These treatments also delay the supportive care she needs.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cps-bronch",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "On 2 L/minute by nasal prongs her O2 saturation is 91%. After 1 hour she is tiring, with a respiratory rate of 76/minute and worse retractions. She is alert with no apnea. Venous gas: pH 7.31, PCO2 52 mmHg.",
        prompt: "Which of the following is the most appropriate respiratory support for this infant now?",
        options: [
          "High flow nasal cannula at 2 L/kg/minute",
          "Intubation and mechanical ventilation",
          "Nasal prongs increased to 4 L/minute",
          "Nonrebreather mask at 10 L/minute",
          "Simple face mask at 6 L/minute",
        ],
        correct: 0,
        explanation:
          "She is failing standard oxygen, with rising work of breathing and a mild respiratory acidosis, but she is alert and has had no apnea. In the PARIS trial, heated humidified high flow at 2 L/kg/minute in infants with hypoxemic bronchiolitis reduced treatment failure and escalation of care compared with standard oxygen. Intubation is kept for infants who fail noninvasive support or develop apnea or a falling level of consciousness. Raising low flow prongs beyond 2 L/minute in an infant gives unheated, dry gas with little extra support. Face masks are poorly tolerated and add no distending pressure.",
        keyFeature: { topic: "sob", n: 3 },
        source: "paris",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following additional findings would most suggest a diagnosis other than bronchiolitis in this infant?",
        options: [
          "Fine crackles in both lungs",
          "Hepatomegaly with a gallop rhythm",
          "Low grade fever of 37.9°C",
          "Nasal flaring with retractions",
          "Sibling with a recent cold",
        ],
        correct: 1,
        explanation:
          "Heart failure from congenital heart disease or myocarditis can look like bronchiolitis in a young infant with fast breathing and poor feeding. A gallop rhythm with an enlarged liver points to a cardiac cause, even though hyperinflation alone can push the liver edge down. Crackles, wheeze, low grade fever, retractions and a sick contact are all typical of viral bronchiolitis, as the Canadian Paediatric Society describes it. None of those findings argue against the diagnosis.",
        keyFeature: { topic: "sob", n: 2 },
        source: "cps-bronch",
      },
    ],
    sources: [CPSBRONCH, PARIS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-20",
    topic: "sob",
    alsoTopics: ["gi-bleed"],
    title: "Breathless walking to the kitchen",
    stem:
      "An 81-year-old woman presents to the emergency department with 2 weeks of increasing shortness of breath on exertion. She now gets breathless walking from her bedroom to the kitchen. She has atrial fibrillation treated with apixaban 5 mg twice daily. She has taken naproxen daily for 1 month for knee osteoarthritis. She has noticed black stools for 10 days. She has no chest pain, cough or fever. She is pale. The JVP is not elevated. The chest is clear and there is no leg edema. Rectal examination shows black, tarry stool.",
    vitals: { temperature: "36.6°C oral", pulse: "108/minute irregular", resp: "22/minute", bp: "118/66 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following initial investigations are most useful for this patient?",
        select: 3,
        options: [
          "Blood cultures",
          "BNP level",
          "Complete blood count",
          "CT pulmonary angiogram",
          "D-dimer level",
          "Electrocardiogram",
          "Group and screen",
          "Procalcitonin level",
          "Sputum culture",
        ],
        correct: [2, 5, 6],
        explanation:
          "Pallor and melena in a patient taking naproxen and apixaban make blood loss the leading cause of her breathlessness, so a complete blood count and a group and screen come first. An ECG checks her rhythm and looks for ischemia, which severe anemia can provoke in an 81-year-old. BNP adds little when the JVP is normal, the chest is clear and there is no edema, and it is often raised by atrial fibrillation and age alone. She is fully anticoagulated and melena explains her symptoms, so D-dimer and CT angiography are not the first tests. She has no fever or cough to justify cultures or procalcitonin.",
        keyFeature: { topic: "sob", n: 2 },
        source: "barkun",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Hemoglobin is 64 g/L, down from 128 g/L 6 months ago. MCV is 76 fL. Urea is 18.2 mmol/L and creatinine is 92 umol/L. The ECG shows atrial fibrillation at 106/minute with no ST changes.",
        prompt: "Which of the following is the most likely cause of this patient's shortness of breath?",
        options: [
          "Acute decompensated heart failure",
          "Atrial fibrillation with rapid rate",
          "Blood loss anemia from the gut",
          "Community acquired pneumonia",
          "Pulmonary embolism",
        ],
        correct: 2,
        explanation:
          "Her hemoglobin has halved, she has melena while taking an NSAID with an anticoagulant, and her urea is high out of proportion to her creatinine, as happens when blood is digested in the upper gut. Reduced oxygen carrying capacity explains exertional breathlessness with a normal saturation. Heart failure is unlikely with a normal JVP, a clear chest and no edema. A ventricular rate of 106/minute is modest and is in part a response to the anemia. She is on therapeutic apixaban and has a normal saturation, which makes PE unlikely, and she has no fever, cough or crackles to suggest pneumonia.",
        keyFeature: { topic: "sob", n: 2 },
        source: "barkun",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate transfusion plan for this patient?",
        options: [
          "Four units of red cells rapidly",
          "One unit of red cells, then reassess",
          "Oral iron and outpatient follow up",
          "tranexamic acid 1 g IV alone",
          "Transfuse to a hemoglobin of 120 g/L",
        ],
        correct: 1,
        explanation:
          "A hemoglobin of 64 g/L with symptoms is below the transfusion thresholds the International Consensus Group recommends, with or without cardiovascular disease, so she needs red cells now. Giving one unit and then reassessing symptoms and hemoglobin limits the risk of circulatory overload in an 81-year-old. Four rapid units invite that overload. A liberal target of 120 g/L adds volume without benefit and liberal strategies have been linked to more rebleeding. Oral iron is too slow for symptomatic anemia with ongoing bleeding. Tranexamic acid alone does not correct the anemia that is causing her symptoms.",
        keyFeature: { topic: "sob", n: 3 },
        source: "barkun",
      },
    ],
    sources: [BARKUN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-21",
    topic: "sob",
    title: "Weak voice and trouble swallowing",
    stem:
      "A 58-year-old woman presents to the emergency department with 2 days of worsening shortness of breath and difficulty swallowing. She has generalized myasthenia gravis treated with pyridostigmine 60 mg four times daily and prednisone 10 mg daily. Five days ago she started ciprofloxacin for a urinary tract infection. She speaks in short phrases with a nasal voice and coughs weakly after sips of water. She has bilateral ptosis and weak neck flexion. Her abdomen moves inward as she breathes in while lying back. The chest is clear.",
    vitals: { temperature: "37.2°C oral", pulse: "104/minute", resp: "28/minute", bp: "146/88 mmHg", o2sat: "95% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside measurements best predicts impending respiratory failure in this patient?",
        options: ["Arterial blood gas PaO2", "End tidal CO2 by nasal cannula", "Forced vital capacity", "Peak expiratory flow", "Pulse oximetry trend"],
        correct: 2,
        explanation:
          "Her breathing problem is weakness of the respiratory muscles, shown by paradoxical abdominal movement, a weak cough and bulbar signs. In neuromuscular weakness, serial forced vital capacity falls before gas exchange fails, and a value below about 20 mL/kg signals the need for ventilatory support. Oxygen saturation and PaO2 stay normal until late, especially if she is given oxygen. End tidal CO2 by nasal cannula underestimates arterial CO2 and rises only when failure is established. Peak flow measures airway obstruction and is not used to predict ventilatory failure from weakness.",
        keyFeature: { topic: "sob", n: 4 },
        source: "wendell",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her FVC is 0.9 L. She is pooling saliva and cannot clear her secretions. Venous gas: pH 7.36, PCO2 46 mmHg.",
        prompt: "Which of the following is the most appropriate next step in her respiratory management?",
        options: [
          "Bilevel noninvasive ventilation",
          "Edrophonium test at the bedside",
          "Increase the pyridostigmine dose",
          "Intubation and mechanical ventilation",
          "Repeat FVC in 4 hours on the ward",
        ],
        correct: 3,
        explanation:
          "Her FVC of 0.9 L is 900 mL divided by 72 kg, or about 12.5 mL/kg, well below 20 mL/kg, and she cannot clear her secretions, so she cannot protect her airway. She needs elective intubation before she tires, even though her venous PCO2 is still near normal. Bilevel ventilation can help in myasthenic crisis only when bulbar function is good enough to manage secretions. More pyridostigmine increases secretions and can cause cholinergic weakness. An edrophonium test does not change management. A ward bed with a repeat FVC in 4 hours is unsafe with these numbers.",
        keyFeature: { topic: "sob", n: 3 },
        source: "wendell",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following responses to neuromuscular blocking drugs should be expected during intubation of this patient?",
        options: [
          "Hyperkalemia after succinylcholine",
          "Increased sensitivity to rocuronium",
          "Increased sensitivity to succinylcholine",
          "Resistance to rocuronium",
          "No change from other adults",
        ],
        correct: 1,
        explanation:
          "Myasthenia gravis reduces the number of working acetylcholine receptors. Patients are therefore very sensitive to nondepolarizing drugs such as rocuronium, so a reduced dose with neuromuscular monitoring is advised. The same receptor loss makes them resistant to succinylcholine, which may need a larger than usual dose. Hyperkalemia after succinylcholine follows receptor upregulation after denervation, burns or prolonged immobility, not myasthenia gravis.",
        keyFeature: { topic: "sob", n: 3 },
        source: "mg-anes",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following steps should be taken now to treat the cause of this patient's crisis?",
        select: 2,
        options: [
          "gentamicin for the UTI",
          "Increase pyridostigmine",
          "IV immune globulin",
          "magnesium sulfate IV",
          "rituximab infusion",
          "Stop ciprofloxacin",
        ],
        correct: [2, 5],
        explanation:
          "Myasthenic crisis is treated with a rapid immunotherapy, either IV immune globulin or plasma exchange, which acts within days. Ciprofloxacin started 5 days ago is a likely trigger, because fluoroquinolones worsen neuromuscular transmission, so it should be stopped and the infection treated with a safer drug. Gentamicin and magnesium also impair neuromuscular transmission and can deepen the crisis. Rituximab is a long term therapy that takes weeks to act. More pyridostigmine adds secretions in a patient who cannot clear them.",
        keyFeature: { topic: "sob", n: 3 },
        source: "wendell",
      },
    ],
    sources: [WENDELL, MGANES],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-22",
    topic: "sob",
    alsoTopics: ["shock"],
    title: "Faint when she stands, breathless when she sits",
    stem:
      "A 63-year-old woman presents to the emergency department with 1 week of progressive shortness of breath, now present at rest, and feeling faint when she stands. She has metastatic breast cancer treated with chemotherapy. She has no chest pain, cough or fever. She is pale and sweaty and prefers to sit forward. Her neck veins are distended to the angle of the jaw while she sits upright. The heart sounds are quiet. The chest is clear. Her radial pulse weakens noticeably when she breathes in. Her face and arms are not swollen.",
    vitals: { temperature: "37.0°C oral", pulse: "122/minute", resp: "28/minute", bp: "92/74 mmHg", o2sat: "94% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this patient's shortness of breath?",
        options: ["Cardiac tamponade", "Lymphangitic carcinomatosis", "Malignant pleural effusion", "Pulmonary embolism", "Superior vena cava obstruction"],
        correct: 0,
        explanation:
          "Low blood pressure with a narrow pulse pressure of 18 mmHg, distended neck veins and quiet heart sounds make up Beck's triad, and a pulse that weakens on inspiration is pulsus paradoxus. With a clear chest and known metastatic breast cancer, a malignant pericardial effusion with tamponade is most likely. Lymphangitic spread causes crackles and marked hypoxemia without these circulatory signs. A pleural effusion causes dullness and reduced breath sounds, and her chest is clear. PE can raise the neck veins and lower the BP, but it does not muffle the heart sounds. Superior vena cava obstruction swells the face and arms and does not cause hypotension or pulsus paradoxus.",
        keyFeature: { topic: "sob", n: 2 },
        source: "esc-peri",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for this patient?",
        options: ["Chest radiograph", "CT pulmonary angiogram", "Point of care echocardiography", "Serum troponin level", "Venous duplex of the legs"],
        correct: 2,
        explanation:
          "Echocardiography at the bedside confirms a pericardial effusion within minutes, shows chamber collapse and guides drainage, and the ESC guideline makes it the first imaging test for suspected tamponade. It also looks for a dilated right ventricle, which would point instead to PE. A chest radiograph may show a large heart but cannot show tamponade physiology. CT angiography means lying flat in the scanner while hypotensive and delays treatment. Troponin and leg duplex do not answer the question at hand.",
        keyFeature: { topic: "sob", n: 2 },
        source: "esc-peri",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Echocardiography shows a large circumferential pericardial effusion with diastolic collapse of the right ventricle. The right ventricle is not dilated. Her BP is now 84/68 mmHg.",
        prompt: "Which of the following is the most appropriate immediate management of this patient?",
        options: [
          "alteplase 100 mg IV over 2 hours",
          "furosemide 40 mg IV",
          "Rapid sequence intubation",
          "Surgical pericardial window tomorrow",
          "Urgent echo-guided pericardiocentesis",
        ],
        correct: 4,
        explanation:
          "Right ventricular diastolic collapse with a falling BP is tamponade with circulatory compromise, and the ESC guideline recommends urgent pericardiocentesis, guided by echocardiography. Positive pressure ventilation after induction reduces venous return and can cause arrest in tamponade. Furosemide lowers the preload she depends on. Alteplase treats massive PE, and the echocardiogram shows an effusion with a small right ventricle. A surgical window suits loculated or recurrent effusions, and waiting until tomorrow is unsafe.",
        keyFeature: { topic: "sob", n: 3 },
        source: "esc-peri",
      },
    ],
    sources: [ESCPERI],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-23",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Pleuritic pain three weeks after gallbladder surgery",
    stem:
      "A 41-year-old woman presents to the emergency department with 2 days of right sided pleuritic chest pain and shortness of breath. She had a laparoscopic cholecystectomy 3 weeks ago. She had an unprovoked DVT 6 years ago and stopped anticoagulation after 6 months. She has no hemoptysis, cough or fever and takes no medications. Her legs are not swollen or tender. The chest is clear. The ECG shows sinus tachycardia and the chest radiograph is normal. Her creatinine is normal and she has no contrast allergy. PE is your leading diagnosis.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "22/minute", bp: "124/76 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is this patient's Wells score for pulmonary embolism?",
        options: ["4.5 points", "6 points", "7.5 points", "9 points", "10.5 points"],
        correct: 2,
        explanation:
          "She scores 3 because PE is the most likely diagnosis, 1.5 for a heart rate above 100/minute, 1.5 for surgery within 4 weeks and 1.5 for a previous DVT, a total of 7.5. That is above 4.5, so PE is likely, and Thrombosis Canada advises going straight to imaging without a D-dimer. A score of 6 leaves out either the surgery or the old DVT, and 4.5 leaves out both. A score of 9 counts surgery and immobilization as two items, although they form one. A score of 10.5 adds 3 points for signs of DVT, and her legs are normal.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT pulmonary angiography shows no central or lobar PE. The radiologist reports that breathing motion prevented assessment of the segmental and subsegmental arteries. Her pulse is still 108/minute and her O2 saturation 93%.",
        prompt: "Which of the following is the most appropriate next step in the evaluation for pulmonary embolism?",
        options: [
          "D-dimer to decide on discharge",
          "Discharge as PE is excluded",
          "Echocardiography to exclude PE",
          "Repeat CT angiogram in 1 week",
          "Ventilation perfusion scan",
        ],
        correct: 4,
        explanation:
          "A CT that could not assess the segmental arteries is not a negative study, and with a Wells score of 7.5 her probability of PE is still high. Thrombosis Canada advises further testing with a V/Q scan or proximal leg ultrasound when suspicion stays high after a negative initial CT, and her normal chest radiograph makes a V/Q scan likely to give a clear answer. A D-dimer has no role at this pretest probability. Discharge treats an incomplete study as a normal one. Echocardiography can support PE in an unstable patient but cannot exclude it in a stable one, and waiting a week leaves a possible PE untreated.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update: "The V/Q scan shows one mismatched subsegmental defect and is reported as neither normal nor high probability.",
        prompt: "Which of the following is the most appropriate next step after this V/Q scan result?",
        options: [
          "Anticoagulate for 3 months",
          "Discharge with no further testing",
          "Repeat V/Q scan in 1 week",
          "Serial leg compression ultrasound",
          "Single ultrasound of both legs",
        ],
        correct: 3,
        explanation:
          "Thrombosis Canada advises serial compression ultrasound of the legs when a V/Q scan is neither normal nor high probability. Finding a proximal DVT confirms that she needs anticoagulation, and repeated normal studies make a clinically important PE unlikely. A single normal study is not enough, because a calf clot can extend into the proximal veins over the following days, which is why the test is repeated. Treating for 3 months commits her to anticoagulation and its bleeding risk without a diagnosis. Discharge without further testing ignores a nondiagnostic result in a patient whose pretest probability was high, and repeating the V/Q scan does not resolve the uncertainty.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
    ],
    sources: [TCPE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-24",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Sudden breathlessness after a hip replacement",
    stem:
      "A 52-year-old woman presents to the emergency department 2 hours after sudden shortness of breath when she got out of bed. She had a right hip arthroplasty 12 days ago. Her right calf has been painful and swollen for 3 days. She has chronic kidney disease from diabetes, with an eGFR of 15 mL/minute/1.73 m2 last month. She has no hemoptysis and no prior clot. The right calf is 4 cm larger than the left and tender along the deep veins. The chest is clear. The ECG shows sinus tachycardia and the chest radiograph is normal. PE is your leading diagnosis. It is 23:00 and nuclear medicine opens at 08:00.",
    vitals: { temperature: "37.1°C oral", pulse: "112/minute", resp: "26/minute", bp: "128/78 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is this patient's Wells score for pulmonary embolism?",
        options: ["4.5 points", "6 points", "7.5 points", "9 points", "10.5 points"],
        correct: 3,
        explanation:
          "She scores 3 for clinical signs of DVT, 3 because PE is the most likely diagnosis, 1.5 for a heart rate above 100/minute and 1.5 for surgery within 4 weeks, a total of 9. That places her well above the threshold at which PE is likely. A total of 10.5 counts surgery and immobilization twice, although they form one item. Lower totals leave out items the stem shows.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her diagnostic workup?",
        options: [
          "CT pulmonary angiogram now",
          "D-dimer before any imaging",
          "Leg compression ultrasound now",
          "PERC rule to decide on testing",
          "V/Q scan in the morning",
        ],
        correct: 2,
        explanation:
          "With a Wells score of 9, a negative D-dimer would not exclude PE, and PERC applies only to patients with a low pretest probability. Her eGFR of 15 mL/minute makes contrast CT a real risk, and a V/Q scan is not available for 9 hours. She has a swollen, tender leg, and the ESC guideline accepts a proximal DVT on compression ultrasound in a patient with suspected PE as enough to start treatment. A bedside ultrasound therefore answers the question now, without contrast.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ultrasound shows occlusive thrombus in the right femoral and popliteal veins.",
        prompt: "Which of the following further tests are needed before treating this patient for pulmonary embolism?",
        options: [
          "CT pulmonary angiogram after hydration",
          "D-dimer to confirm clot burden",
          "Echocardiography to confirm PE",
          "V/Q scan in the morning",
          "No lung imaging before treatment",
        ],
        correct: 4,
        explanation:
          "A proximal DVT in the femoral and popliteal veins, in a patient with suspected PE, confirms venous thromboembolism, and the ESC guideline accepts it as enough to start the same anticoagulation PE would need. Lung imaging adds nothing to that decision tonight, and contrast CT is a real risk with an eGFR of 15. Waiting until morning for a V/Q scan delays treatment. A D-dimer does not measure clot burden and has no role once thrombosis is proven. A normal echocardiogram cannot exclude PE, and she is stable.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial anticoagulant for this patient?",
        options: [
          "apixaban 10 mg PO twice daily",
          "dabigatran 150 mg PO twice daily",
          "enoxaparin 1.5 mg/kg SC daily",
          "rivaroxaban 15 mg PO twice daily",
          "unfractionated heparin IV infusion",
        ],
        correct: 4,
        explanation:
          "The ESC guideline recommends unfractionated heparin when creatinine clearance is 30 mL/minute or less. Her eGFR is 15. Heparin is not cleared by the kidney, and its short half-life and reversibility suit a patient 12 days after major surgery. Enoxaparin accumulates below a clearance of 30 mL/minute. Dabigatran is contraindicated below 30 mL/minute and also needs 5 days of parenteral heparin first. Rivaroxaban and apixaban were not studied in patients with this degree of kidney failure.",
        keyFeature: { topic: "sob", n: 3 },
        source: "esc-pe",
      },
    ],
    sources: [TCPE, ESCPE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-25",
    topic: "sob",
    alsoTopics: ["airway", "pediatric-fever"],
    title: "Fever, drooling and a stiff neck at 3",
    stem:
      "A 3-year-old boy is brought to the emergency department by his parents with 3 days of fever and sore throat. Today he refuses to eat or drink, is drooling and holds his head stiffly. His breathing has become noisy, especially when he lies down. He had a viral illness last week. He is fully immunized and otherwise well. He cries when asked to look up and will not extend his neck. There is tender swelling behind the angle of the left mandible. There is soft inspiratory stridor at rest. The chest is clear with good air entry.",
    vitals: { temperature: "39.3°C rectal", pulse: "150/minute", resp: "32/minute", o2sat: "97% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most clearly places this child's breathing problem in the upper airway?",
        options: ["Fever of 39.3°C", "Inspiratory stridor at rest", "Refusal to eat or drink", "Respiratory rate of 32/minute", "Tachycardia of 150/minute"],
        correct: 1,
        explanation:
          "Inspiratory stridor comes from narrowing at or above the glottis, and with a clear chest and good air entry it places the problem in the upper airway. That changes management, because sedation, lying flat and agitation can worsen an upper airway obstruction, and bronchodilators do not help it. Fever, tachycardia and refusal to eat reflect infection and pain wherever it lies. A respiratory rate of 32/minute is raised but does not tell upper from lower airway disease.",
        keyFeature: { topic: "sob", n: 1 },
        source: "craig",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this child?",
        options: ["Acute epiglottitis", "Bacterial tracheitis", "Peritonsillar abscess", "Retropharyngeal abscess", "Viral laryngotracheitis"],
        correct: 3,
        explanation:
          "A preschool child with fever, drooling, neck swelling and a refusal to extend the neck after a recent viral illness fits a retropharyngeal abscess. Limited neck movement, especially extension, was the typical finding in the Craig and Schunk series. Epiglottitis is rare in an immunized child and starts abruptly, without neck stiffness. Bacterial tracheitis causes a brassy cough and a toxic child after croup. A peritonsillar abscess is seen mainly in adolescents, with trismus and a deviated uvula. Viral croup causes a barking cough without drooling or neck stiffness.",
        keyFeature: { topic: "sob", n: 1 },
        source: "craig",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations best confirms the diagnosis and guides drainage in this child?",
        options: ["Blood culture and CBC", "Chest radiograph", "CT of the neck with IV contrast", "Lateral neck radiograph", "Rapid antigen throat swab"],
        correct: 2,
        explanation:
          "Contrast CT of the neck shows whether there is a drainable abscess or only cellulitis and maps its extent, which decides between surgical drainage and antibiotics alone. It should be done only with the airway judged safe and a clinician present. A lateral neck radiograph can show widening of the prevertebral soft tissue but cannot separate abscess from cellulitis. A chest radiograph does not image the neck. Blood tests and a throat swab do not confirm a deep neck infection.",
        keyFeature: { topic: "sob", n: 2 },
        source: "craig",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "While he waits for CT, his stridor becomes louder. He is restless, with suprasternal retractions, and he will only sit upright on his mother's lap. O2 saturation is 92%.",
        prompt: "Which of the following is the most appropriate next step for this child?",
        options: [
          "dexamethasone 9 mg PO and observe",
          "Intubation in the operating room",
          "Needle cricothyroidotomy now",
          "Proceed to CT lying supine",
          "Rapid sequence intubation in the department",
        ],
        correct: 1,
        explanation:
          "Worsening stridor with retractions and falling saturation means the abscess is compressing his airway. The safest place to secure this anticipated difficult airway is the operating room, with an experienced anesthetist keeping spontaneous breathing during induction and a surgeon ready for a surgical airway. Rapid sequence induction removes airway tone and may turn partial obstruction into complete obstruction. Lying supine in the scanner can close the airway. Dexamethasone treats croup and does not relieve an abscess. Needle cricothyroidotomy is a rescue for failed oxygenation, which has not occurred.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [CRAIG, CAFG2],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-26",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Toothache, then a swollen floor of mouth",
    stem:
      "A 44-year-old man presents to the emergency department with 2 days of worsening pain and swelling under his jaw after a lower molar toothache last week. Today he cannot open his mouth fully, has trouble swallowing his saliva and his voice is muffled. He has type 2 diabetes treated with metformin. He is sitting upright and spitting into a basin. There is firm, tender, board-like swelling of both submandibular areas and the floor of the mouth. The tongue is pushed upward. Mouth opening is 2 cm. There is no stridor and the chest is clear.",
    vitals: { temperature: "38.7°C oral", pulse: "118/minute", resp: "24/minute", bp: "134/82 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: ["Acute sialadenitis", "Angioedema of the tongue", "Ludwig angina", "Peritonsillar abscess", "Retropharyngeal abscess"],
        correct: 2,
        explanation:
          "Firm, board-like swelling of both submandibular spaces and the floor of the mouth after a lower molar infection, with the tongue pushed upward, fever and trismus, is Ludwig angina. Its main danger is that the tongue is displaced upward and backward into the airway. Sialadenitis swells one gland and does not lift the tongue. Angioedema is soft, painless and afebrile. A peritonsillar abscess bulges the tonsil and deviates the uvula, and a retropharyngeal abscess swells the posterior pharynx rather than the floor of the mouth.",
        keyFeature: { topic: "sob", n: 1 },
        source: "ludwig",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following new findings would most strongly indicate that his airway is about to obstruct?",
        options: [
          "Fever rising to 39.5°C",
          "Mouth opening falling to 1.5 cm",
          "Neck swelling reaching the chest",
          "Rising white cell count",
          "Stridor when lying back",
        ],
        correct: 4,
        explanation:
          "Stridor means airflow is already limited at the level of the larynx or above, and its appearance when he lies back shows that the swollen tissues are falling into the airway. That is the point at which the airway must be secured. Worsening trismus makes laryngoscopy harder but does not by itself narrow the airway. Spread of swelling to the chest raises concern for mediastinitis and needs imaging, but it does not mark airway obstruction. Fever and a rising white count track infection, not airway size.",
        keyFeature: { topic: "sob", n: 4 },
        source: "ludwig",
      },
      {
        id: "q3",
        kind: "single",
        update: "Over the next hour his voice becomes more muffled and he develops soft stridor when he leans back. An anesthetist and a surgeon are present.",
        prompt: "Which of the following is the most appropriate airway plan for this patient?",
        options: [
          "Awake intubation with a surgical airway ready",
          "Noninvasive ventilation in the ICU",
          "Observation with IV antibiotics on the ward",
          "Rapid sequence intubation with video laryngoscope",
          "Supraglottic airway after sedation",
        ],
        correct: 0,
        explanation:
          "He now has signs of impending obstruction with limited mouth opening and distorted anatomy, an anticipated difficult airway. The Canadian Airway Focus Group advises awake tracheal intubation, often by flexible scope through the nose, with the neck marked and a surgeon ready to perform a surgical airway. Rapid sequence induction abolishes muscle tone and his own breathing, and failure then leaves no way to oxygenate. A supraglottic airway cannot seal around a swollen floor of mouth. Noninvasive ventilation does not open an upper airway obstruction, and ward observation is unsafe once stridor appears.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cafg2",
      },
      {
        id: "q4",
        kind: "menu",
        update: "His airway is secured by awake nasal intubation.",
        prompt: "Which of the following should be arranged now to treat the underlying infection?",
        select: 2,
        options: [
          "Discharge with dental follow up",
          "IV antibiotics for oral flora",
          "Nebulized racemic epinephrine",
          "Oral antibiotics and review",
          "Surgical drainage consultation",
          "Tooth extraction in the department",
        ],
        correct: [1, 4],
        explanation:
          "Ludwig angina is a rapidly spreading infection of the floor of the mouth from oral flora, so it needs high dose IV antibiotics that cover streptococci and anaerobes, and early surgical review for decompression and drainage of any collection. Oral antibiotics and discharge are unsafe for a spreading deep neck infection in an intubated patient. Nebulized epinephrine does not shrink infected tissue. Removing the source tooth is part of definitive care, but it is done with drainage in the operating room, not in the emergency department.",
        keyFeature: { topic: "sob", n: 3 },
        source: "ludwig",
      },
    ],
    sources: [LUDWIG, CAFG2],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-27",
    topic: "sob",
    alsoTopics: ["asthma-copd"],
    title: "Sudden pain while carrying groceries",
    stem:
      "A 67-year-old man with severe COPD presents to the emergency department 3 hours after sudden right sided chest pain and worse shortness of breath while carrying groceries. He normally walks 1 block before he has to stop. He uses tiotropium and salbutamol and smokes 1 pack a day. He has had no fever or change in sputum. He is speaking in short phrases. Breath sounds are reduced on the right and the percussion note is hard to judge. The trachea is midline. The neck veins are not distended.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "28/minute", bp: "146/88 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this patient's worsening shortness of breath?",
        options: [
          "Acute exacerbation of COPD",
          "Pneumonia of the right lower lobe",
          "Pulmonary embolism",
          "Right sided pneumothorax",
          "Tension pneumothorax",
        ],
        correct: 3,
        explanation:
          "Sudden one sided chest pain with reduced breath sounds on that side in a patient with severe COPD is a secondary spontaneous pneumothorax until proven otherwise, a new problem that can be mistaken for his chronic disease. An exacerbation of COPD builds over days, with more cough or sputum and bilateral findings. He has no fever or new sputum to suggest pneumonia. PE can cause sudden pain and hypoxemia but not unilateral loss of breath sounds. A midline trachea, flat neck veins and a normal BP argue against tension.",
        keyFeature: { topic: "sob", n: 2 },
        source: "bts-pleural",
      },
      {
        id: "q2",
        kind: "single",
        update: "The chest radiograph shows a right pneumothorax with a 2.5 cm rim at the level of the hilum. There are large bullae in both upper lobes.",
        prompt: "Which of the following is the most appropriate management of this patient's pneumothorax?",
        options: [
          "Conservative care with a repeat film",
          "Discharge with an ambulatory valve",
          "High flow oxygen and observation",
          "Needle aspiration and discharge",
          "Small bore chest drain and admission",
        ],
        correct: 4,
        explanation:
          "He has a secondary pneumothorax with breathlessness and a saturation of 88%. The BTS guideline advises intervention and admission for a breathless patient with a secondary pneumothorax, and a small bore chest drain is the usual choice because aspiration fails more often when the lung is diseased. Conservative care is for patients with few symptoms. Ambulatory devices and discharge after aspiration are mainly for primary pneumothorax in healthy lungs. High flow oxygen does not treat the pneumothorax and risks hypercapnia in severe COPD.",
        keyFeature: { topic: "sob", n: 3 },
        source: "bts-pleural",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "A drain is placed under local anesthetic alone and the lung re-expands. On 4 L/minute by nasal prongs his O2 saturation is 97%. Two hours later he is drowsy but rousable. Arterial gas: pH 7.26, PaCO2 68 mmHg, PaO2 98 mmHg, HCO3 30 mmol/L.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Increase oxygen to 6 L/minute",
          "Lower the O2 target and start NIV",
          "naloxone 0.4 mg IV and observation",
          "Rapid sequence intubation now",
          "Repeat arterial gas in 2 hours",
        ],
        correct: 1,
        explanation:
          "A saturation of 97% is above the 88 to 92% target the BTS guideline sets for patients at risk of hypercapnia, and the drowsiness with a pH of 7.26 and PaCO2 of 68 mmHg is acute on chronic hypercapnic failure. Oxygen should be reduced to that target and noninvasive ventilation started, as he is still rousable. More oxygen worsens the hypercapnia. The drain went in under local anesthetic alone, so naloxone has no target. Intubation is kept for failure of NIV or inability to protect the airway. Waiting 2 hours lets the acidosis progress.",
        keyFeature: { topic: "sob", n: 4 },
        source: "bts-o2",
      },
    ],
    sources: [BTSPLEURAL, BTSO2],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-28",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Rusty sputum and a falling saturation",
    stem:
      "A 61-year-old man presents to the emergency department with 4 days of fever, cough with rusty sputum and worsening shortness of breath. He has hypertension treated with ramipril and no lung disease. He is alert and oriented but breathing rapidly. There are bronchial breath sounds and crackles over the right lower chest. The chest radiograph shows right lower lobe consolidation without effusion.",
    vitals: { temperature: "38.8°C oral", pulse: "108/minute", resp: "32/minute", bp: "118/72 mmHg", o2sat: "86% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "On a nonrebreather mask at 15 L/minute his O2 saturation is 89% and his respiratory rate is 34/minute. Arterial gas: pH 7.46, PaCO2 32 mmHg, PaO2 58 mmHg.",
        prompt: "Which of the following is the most appropriate respiratory support for this patient now?",
        options: [
          "Bilevel noninvasive ventilation",
          "High flow nasal cannula oxygen",
          "Intubation and mechanical ventilation",
          "Nasal prongs added under the mask",
          "Venturi mask at 50% FiO2",
        ],
        correct: 1,
        explanation:
          "He has acute hypoxemic respiratory failure from pneumonia, without hypercapnia, and he is alert. A clinical practice guideline makes a strong recommendation for high flow nasal cannula over conventional oxygen in this setting, and in the FLORALI trial it was associated with fewer deaths than noninvasive ventilation. Bilevel ventilation has no clear benefit in de novo hypoxemic failure and can drive large, harmful tidal volumes. Intubation is not yet needed in an alert patient without hypercapnia. Adding nasal prongs or changing to a Venturi mask gives no more oxygen than the nonrebreather that is already failing.",
        keyFeature: { topic: "sob", n: 3 },
        source: "hfnc",
      },
      {
        id: "q2",
        kind: "single",
        update: "He is started on high flow nasal cannula at 60 L/minute with an FiO2 of 0.6. Two hours later his O2 saturation is 90% and his respiratory rate is 32/minute.",
        prompt: "Which of the following is closest to this patient's ROX index at 2 hours?",
        options: ["2.8", "3.0", "3.5", "4.4", "4.7"],
        correct: 4,
        explanation:
          "The ROX index is the SpO2 to FiO2 ratio divided by the respiratory rate. Here that is 90 divided by 0.6, which is 150, and 150 divided by 32 is 4.7. In the multicentre validation study a ROX of 4.88 or more at 2, 6 or 12 hours predicted success, so 4.7 is not yet reassuring and he needs close review. A value of 4.4 uses his earlier rate of 34/minute. A value of 3.5 uses an FiO2 of 0.8. A value of 3.0 uses his earlier PaO2 in place of the saturation, and 2.8 leaves out the FiO2.",
        keyFeature: { topic: "sob", n: 4 },
        source: "rox",
      },
      {
        id: "q3",
        kind: "single",
        update: "Six hours later he is confused and pulling at the cannula. O2 saturation is 85% on an FiO2 of 1.0, respiratory rate is 40/minute and BP is 92/58 mmHg.",
        prompt: "Which of the following is the most appropriate next step in his respiratory management?",
        options: [
          "Bilevel noninvasive ventilation",
          "haloperidol 2 mg IV for agitation",
          "Increase the flow to 70 L/minute",
          "Intubation and mechanical ventilation",
          "Prone positioning while awake",
        ],
        correct: 3,
        explanation:
          "Confusion, a saturation of 85% on an FiO2 of 1.0 and a respiratory rate of 40/minute mean high flow has failed, and he now needs intubation. Observational data link delayed intubation after high flow failure with higher mortality. Noninvasive ventilation needs a cooperative patient who can protect his airway. Haloperidol treats the agitation but not the hypoxemia that causes it. More flow adds little at an FiO2 of 1.0. Awake prone positioning needs a calm, cooperative patient and does not rescue established failure.",
        keyFeature: { topic: "sob", n: 3 },
        source: "hfnc",
      },
      {
        id: "q4",
        kind: "single",
        update: "His initial blood work, drawn at arrival, showed a urea of 9.4 mmol/L.",
        prompt: "Which of the following was this patient's CURB-65 score at arrival?",
        options: ["0 points", "1 point", "2 points", "3 points", "4 points"],
        correct: 2,
        explanation:
          "At arrival he was not confused, his urea of 9.4 mmol/L was above 7 mmol/L for 1 point, his respiratory rate of 32/minute was 30/minute or more for 1 point, his BP of 118/72 mmHg met neither BP criterion, and at 61 he was under 65. His score was therefore 2. The score does not include oxygenation, so a patient with a modest CURB-65 can still have severe hypoxemic respiratory failure, as he did. Lower scores leave out the urea or the respiratory rate, and higher scores count items he did not have.",
        keyFeature: { topic: "sob", n: 4 },
        source: "curb65",
      },
    ],
    sources: [HFNC, ROX, CURB],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-29",
    topic: "sob",
    alsoTopics: ["tox"],
    title: "Grey lips after an endoscopy",
    stem:
      "A 46-year-old woman presents to the emergency department 90 minutes after an outpatient upper endoscopy. The endoscopist sprayed her throat several times with benzocaine because she gagged. She now has a headache, light-headedness and shortness of breath when she walks. She has no chest pain. She is otherwise healthy, takes no medications and is not pregnant. Her lips and fingertips are grey-blue. The chest is clear and the heart sounds are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "22/minute", bp: "132/80 mmHg", o2sat: "85% on 15 L/minute by nonrebreather mask", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Arterial gas on 15 L/minute: pH 7.40, PaCO2 36 mmHg, PaO2 410 mmHg. The blood in the syringe is dark brown.",
        prompt: "Which of the following is the most likely cause of this patient's low oxygen saturation?",
        options: ["Aspiration pneumonitis", "Carbon monoxide poisoning", "Methemoglobinemia", "Pulmonary embolism", "Sulfhemoglobinemia"],
        correct: 2,
        explanation:
          "A PaO2 of 410 mmHg should give a saturation close to 100%, so a pulse oximeter reading of 85% on high flow oxygen is a saturation gap. With cyanosis, chocolate brown blood and recent benzocaine spray, the cause is methemoglobinemia. Aspiration and PE lower the PaO2, which here is very high. Carbon monoxide makes the pulse oximeter read falsely normal, not low. Sulfhemoglobinemia is rare and follows sulfur containing drugs, while benzocaine is a well known cause of methemoglobinemia.",
        keyFeature: { topic: "sob", n: 2 },
        source: "skold",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate test to confirm the diagnosis in this patient?",
        options: ["Arterial co-oximetry", "CT pulmonary angiogram", "Hemoglobin electrophoresis", "Repeat pulse oximetry", "Serum lactate level"],
        correct: 0,
        explanation:
          "Co-oximetry measures light absorption at several wavelengths and reports the methemoglobin fraction directly, which confirms the diagnosis and guides treatment. A standard pulse oximeter uses two wavelengths and tends toward a reading of about 85% as methemoglobin rises, so repeating it adds nothing. CT angiography looks for PE, which the high PaO2 argues against. Hemoglobin electrophoresis detects inherited hemoglobin variants, not an acquired drug effect. Lactate may rise but does not identify the cause.",
        keyFeature: { topic: "sob", n: 4 },
        source: "skold",
      },
      {
        id: "q3",
        kind: "single",
        update: "Co-oximetry shows a methemoglobin level of 32%. She has no known G6PD deficiency.",
        prompt: "Which of the following is the most appropriate treatment for this patient?",
        options: [
          "ascorbic acid 1 g IV",
          "hyperbaric oxygen therapy",
          "methylene blue 60 mg IV over 5 minutes",
          "methylene blue 300 mg IV over 5 minutes",
          "sodium thiosulfate 12.5 g IV",
        ],
        correct: 2,
        explanation:
          "A methemoglobin level of 32% with symptoms is an indication for methylene blue, which speeds the reduction of methemoglobin back to hemoglobin. The usual dose is 1 to 2 mg/kg, and 1 mg/kg for 60 kg is 60 mg. The 300 mg dose is 5 mg/kg, far above the usual starting dose, and large doses of methylene blue can themselves cause hemolysis and methemoglobinemia. Ascorbic acid acts too slowly for a symptomatic patient. Hyperbaric oxygen is used for carbon monoxide, and sodium thiosulfate treats cyanide.",
        keyFeature: { topic: "sob", n: 3 },
        source: "skold",
      },
    ],
    sources: [SKOLD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-30",
    topic: "sob",
    alsoTopics: ["tox", "environmental"],
    title: "Headaches during a power outage",
    stem:
      "A 38-year-old man presents to the emergency department in January with 1 day of headache, nausea and shortness of breath on exertion. His wife and teenage son also have headaches. Their power has been out for 2 days and they have been running a gasoline generator in their attached garage. He has no past medical history and takes no medications. He is alert and oriented. The chest is clear and the neurologic examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "22/minute", bp: "136/84 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following tests is most appropriate to confirm the suspected diagnosis in this patient?",
        options: [
          "Arterial PaO2 measurement",
          "Carboxyhemoglobin by co-oximetry",
          "CT head without contrast",
          "Serum lactate and electrolytes",
          "Urine toxicology screen",
        ],
        correct: 1,
        explanation:
          "A household cluster of headache, nausea and breathlessness while a generator runs in an attached garage points to carbon monoxide. The diagnosis is confirmed by measuring carboxyhemoglobin with co-oximetry on a venous or arterial sample. A standard pulse oximeter reads carboxyhemoglobin as oxyhemoglobin, so his saturation of 99% is falsely reassuring. The PaO2 reflects dissolved oxygen and stays normal. CT of the head, lactate and a urine screen do not measure carbon monoxide.",
        keyFeature: { topic: "sob", n: 4 },
        source: "rose",
      },
      {
        id: "q2",
        kind: "single",
        update: "His carboxyhemoglobin level is 24%.",
        prompt: "Which of the following is the most appropriate initial treatment for this patient?",
        options: [
          "hydroxocobalamin 5 g IV",
          "methylene blue 1 mg/kg IV",
          "Nasal prongs at 2 L/minute",
          "Observation on room air",
          "Oxygen 15 L/minute by nonrebreather",
        ],
        correct: 4,
        explanation:
          "High flow oxygen by nonrebreather mask is the first treatment for carbon monoxide poisoning. It shortens the half-life of carboxyhemoglobin from about 5 hours on room air to about 1 hour. Low flow nasal prongs and room air leave the carbon monoxide bound for much longer. Hydroxocobalamin treats cyanide from smoke inhalation, and he was exposed to generator exhaust, not a fire. Methylene blue treats methemoglobinemia.",
        keyFeature: { topic: "sob", n: 3 },
        source: "rose",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following additional findings would most support referral for hyperbaric oxygen therapy?",
        options: [
          "Carboxyhemoglobin of 20% on repeat",
          "Headache that improves on oxygen",
          "Nausea with one episode of vomiting",
          "Syncope in the garage before arrival",
          "Tachycardia of 112/minute",
        ],
        correct: 3,
        explanation:
          "Loss of consciousness is one of the accepted markers of severe carbon monoxide poisoning that prompt consideration of hyperbaric oxygen, along with neurologic deficits, a carboxyhemoglobin level above about 25%, cardiac ischemia and severe acidosis. A repeat level of 20% is falling on oxygen and, like his first level of 24%, is below the usual threshold in a patient who is not pregnant. Headache that settles, nausea and tachycardia are features of mild to moderate poisoning that are treated with normobaric oxygen.",
        keyFeature: { topic: "sob", n: 4 },
        source: "rose",
      },
    ],
    sources: [ROSE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-31",
    topic: "sob",
    alsoTopics: ["arrhythmia", "pulmonary-edema"],
    title: "Fever, palpitations and orthopnea at 79",
    stem:
      "A 79-year-old woman presents to the emergency department with 5 days of cough with yellow sputum and fever, and 2 days of palpitations and worsening shortness of breath. Since last night she cannot lie flat. She has no chest pain. She has hypertension and type 2 diabetes treated with ramipril and metformin. She has no known heart disease. She speaks in short sentences. The JVP is 5 cm above the sternal angle. There are crackles at both bases and bronchial breathing at the left base. She has mild ankle edema. The ECG shows atrial fibrillation at 148/minute with no ST changes.",
    vitals: { temperature: "38.2°C oral", pulse: "148/minute irregular", resp: "30/minute", bp: "134/82 mmHg", o2sat: "89% on room air" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following conditions are supported by the findings in this patient's history and examination?",
        select: 3,
        options: [
          "Acute coronary syndrome",
          "Acute heart failure",
          "Atrial fibrillation",
          "Bacterial pneumonia",
          "COPD exacerbation",
          "Pericardial tamponade",
          "Pulmonary embolism",
          "Tension pneumothorax",
        ],
        correct: [1, 2, 3],
        explanation:
          "Breathlessness in older adults often has more than one cause, and each needs treatment. Fever, purulent sputum and bronchial breathing at the left base support pneumonia. The ECG shows atrial fibrillation at 148/minute. Orthopnea, a raised JVP, bilateral crackles and ankle edema support acute heart failure. She has no chest pain or ST changes to suggest a coronary syndrome, no history of COPD, a normal BP without the circulatory signs of tamponade, and breath sounds with crackles on both sides rather than the absent breath sounds of a tension pneumothorax. Nothing in the case points to PE over these explanations.",
        keyFeature: { topic: "sob", n: 2 },
        source: "caep-af",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial approach to her atrial fibrillation?",
        options: [
          "diltiazem 20 mg IV bolus",
          "Electrical cardioversion now",
          "metoprolol 5 mg IV every 5 minutes",
          "procainamide 1 g IV over 1 hour",
          "Treat the underlying illness first",
        ],
        correct: 4,
        explanation:
          "Her atrial fibrillation is secondary to an acute illness, pneumonia with heart failure. The CAEP checklist advises treating the underlying cause first in secondary AF, because a fast rate is often compensatory and rate or rhythm control can cause harm. Diltiazem is a negative inotrope and can precipitate shock in decompensated heart failure. Repeated IV metoprolol can also cause hypotension in this setting. Electrical or procainamide cardioversion is unlikely to hold while the fever and heart failure persist, and her onset is not clearly recent enough to be safe without anticoagulation.",
        keyFeature: { topic: "sob", n: 3 },
        source: "caep-af",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following antibiotic regimens is most appropriate for her pneumonia on admission to hospital?",
        options: [
          "amoxicillin 1 g PO three times daily",
          "azithromycin 500 mg IV alone",
          "ceftriaxone 1 g IV plus azithromycin",
          "ciprofloxacin 400 mg IV alone",
          "piperacillin-tazobactam plus vancomycin",
        ],
        correct: 2,
        explanation:
          "For adults admitted to a ward with community acquired pneumonia and no risk factors for MRSA or Pseudomonas, the ATS/IDSA guideline recommends a beta-lactam such as ceftriaxone combined with a macrolide such as azithromycin. Oral amoxicillin alone is an outpatient regimen for patients without comorbidity. A macrolide alone does not cover resistant pneumococcus well enough for an admitted patient. Ciprofloxacin has poor pneumococcal activity. Broad coverage with piperacillin-tazobactam and vancomycin is for patients with risk factors she does not have.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cap",
      },
    ],
    sources: [CAEPAF, CAP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-32",
    topic: "sob",
    alsoTopics: ["asthma-copd", "airway"],
    title: "Pressure falls after the tube goes in",
    stem:
      "A 31-year-old man with severe asthma is brought to the emergency department by ambulance after 2 days of worsening wheeze. He has had 2 prior ICU admissions for asthma. Despite continuous salbutamol, ipratropium, methylprednisolone 125 mg IV and magnesium sulfate 2 g IV, he became exhausted and confused. He was intubated 20 minutes ago with ketamine and rocuronium. The ventilator is on volume control with a tidal volume of 500 mL, a rate of 22/minute, PEEP of 5 cmH2O and an FiO2 of 1.0. Breath sounds are very faint on both sides and the chest looks hyperinflated.",
    vitals: { pulse: "132/minute", bp: "74/40 mmHg", o2sat: "90% on FiO2 1.0 by ventilator", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate action for this patient's hypotension?",
        options: [
          "Disconnect the circuit to allow exhalation",
          "Increase the PEEP to 10 cmH2O",
          "Increase the respiratory rate to 28/minute",
          "Needle decompression of both sides",
          "norepinephrine infusion alone",
        ],
        correct: 0,
        explanation:
          "Hypotension soon after intubation in severe asthma, with faint breath sounds and a hyperinflated chest, is most often dynamic hyperinflation. A rate of 22/minute leaves too little time to exhale through narrowed airways, so breaths stack and intrathoracic pressure blocks venous return. Disconnecting the circuit for 30 to 60 seconds lets the lungs empty, and the BP usually recovers at once. If it does not, tension pneumothorax is considered next, but blind bilateral decompression can create pneumothoraces. More PEEP or a faster rate worsens trapping. A vasopressor alone leaves the cause untreated.",
        keyFeature: { topic: "sob", n: 3 },
        source: "leatherman",
      },
      {
        id: "q2",
        kind: "single",
        update: "His BP rises to 112/70 mmHg within a minute of disconnection. The ventilator is about to be reconnected.",
        prompt: "Which of the following ventilator changes is most appropriate for this patient?",
        options: [
          "Increase PEEP to 12 cmH2O",
          "Increase tidal volume to 700 mL",
          "Lower the rate to 10/minute",
          "Raise the rate to 30/minute",
          "Slow the inspiratory flow rate",
        ],
        correct: 2,
        explanation:
          "The aim in severe asthma is controlled hypoventilation. A low rate, such as 10 to 12/minute, with a modest tidal volume and a high inspiratory flow gives the longest possible time to exhale and limits hyperinflation, accepting a raised PaCO2. A faster rate or larger tidal volume increases minute ventilation and trapping. Slowing inspiratory flow lengthens inspiration and shortens the time left to exhale. Added external PEEP does not help and may add to hyperinflation in a paralyzed patient.",
        keyFeature: { topic: "sob", n: 3 },
        source: "leatherman",
      },
      {
        id: "q3",
        kind: "single",
        update: "Thirty minutes later the arterial gas shows pH 7.19, PaCO2 78 mmHg, PaO2 88 mmHg. The plateau pressure is 26 cmH2O and the BP is 118/72 mmHg.",
        prompt: "Which of the following is the most appropriate response to this arterial gas result?",
        options: [
          "Increase the rate to 20/minute",
          "Increase tidal volume to 650 mL",
          "sodium bicarbonate 100 mmol IV",
          "Start inhaled nitric oxide",
          "Tolerate the current hypercapnia",
        ],
        correct: 4,
        explanation:
          "Permissive hypercapnia is the accepted strategy in ventilated severe asthma. A pH of 7.19 is tolerated when oxygenation is adequate, the plateau pressure is below 30 cmH2O and he is hemodynamically stable, as he now is. Increasing the rate or tidal volume to lower the PaCO2 brings back the hyperinflation that caused his hypotension. Bicarbonate is not needed at this pH and adds CO2. Inhaled nitric oxide dilates pulmonary vessels and does not relieve airflow obstruction.",
        keyFeature: { topic: "sob", n: 4 },
        source: "leatherman",
      },
    ],
    sources: [LEATHERMAN],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-33",
    topic: "sob",
    alsoTopics: ["airway", "asthma-copd"],
    title: "Noisy breathing that inhalers do not help",
    stem:
      "A 67-year-old man presents to the emergency department with 3 weeks of worsening shortness of breath on walking and noisy breathing. Two weeks ago his family physician diagnosed COPD and prescribed salbutamol and tiotropium, which have not helped. He has smoked for 45 pack-years and drinks 6 beers a day. His voice has been hoarse for 4 months and he has lost 7 kg. He is sitting upright and speaking in short sentences. There is a high-pitched noise on inspiration, loudest over the neck. There is no wheeze. There is a firm, nontender 2 cm node in the left side of the neck.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "24/minute", bp: "152/88 mmHg", o2sat: "95% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why his inhalers have not relieved his breathing?",
        options: [
          "Fixed airway obstruction from COPD",
          "Obstruction at the level of the larynx",
          "Poor inhaler technique",
          "Undertreated asthma with remodeling",
          "Viral bronchitis still resolving",
        ],
        correct: 1,
        explanation:
          "A high-pitched inspiratory noise that is loudest over the neck, with no wheeze, is stridor from narrowing at or near the larynx. Bronchodilators relax the smooth muscle of the lower airways and do nothing for a fixed laryngeal obstruction. Four months of hoarseness, weight loss, heavy smoking and drinking and a hard neck node point to a laryngeal cancer. COPD and asthma cause expiratory wheeze and a prolonged expiration, not inspiratory stridor over the neck. Poor inhaler technique or a slowly resolving bronchitis would not explain the stridor, the hoarseness or the node.",
        keyFeature: { topic: "sob", n: 1 },
        source: "eskander",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following findings in this patient are not explained by a diagnosis of COPD?",
        select: 3,
        options: [
          "Breathlessness when walking",
          "Firm left neck node",
          "Heart rate of 104/minute",
          "Hoarse voice for 4 months",
          "Inspiratory noise over the neck",
          "O2 sat of 95% on room air",
          "Smoking history of 45 pack-years",
          "Speaking in short sentences",
        ],
        correct: [1, 3, 4],
        explanation:
          "Hoarseness lasting 4 months, inspiratory noise over the neck and a firm neck node each point to a new problem, most likely a laryngeal cancer with spread to a neck node, and none is a feature of COPD. A new diagnosis in a patient already labelled with a chronic lung disease is easy to miss when every symptom is put down to that label. Breathlessness on walking, a heart rate of 104/minute, short sentences and a saturation of 95% fit COPD as well as they fit laryngeal obstruction. Heavy smoking is a risk factor for both, so it does not separate them.",
        keyFeature: { topic: "sob", n: 2 },
        source: "eskander",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Flexible nasolaryngoscopy shows a large glottic mass that leaves an airway of a few millimetres. Over the next hour his stridor becomes louder and his O2 saturation falls to 91%. An otolaryngologist and an anesthetist are at the bedside.",
        prompt: "Which of the following is the most appropriate airway plan for this patient?",
        options: [
          "Awake tracheostomy under local anesthesia",
          "Nebulized salbutamol and ipratropium",
          "Noninvasive positive pressure ventilation",
          "Rapid sequence intubation with a bougie",
          "Supraglottic airway after sedation",
        ],
        correct: 0,
        explanation:
          "A glottic tumour that leaves only a few millimetres of airway may not let a tube pass, and any sedation can turn partial obstruction into complete obstruction. A tracheostomy under local anesthesia while he stays awake and breathing secures the airway below the tumour and avoids both problems. Awake flexible intubation is sometimes tried for a difficult airway, but a friable mass this tight may block the scope or bleed, so the awake surgical airway is the safer plan here. Rapid sequence induction removes his own airway tone, and a bougie or tube may not pass the mass or may make it bleed. A supraglottic airway sits above the obstruction and cannot bypass it. Noninvasive ventilation and bronchodilators do not relieve a fixed laryngeal obstruction.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [ESKANDER, CAFG2],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-34",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Lunch tray in a stretcher bay",
    stem:
      "A 72-year-old man with Parkinson disease is in the emergency department awaiting a ward bed after a fall. While eating roast beef from his lunch tray, he suddenly sits forward and clutches his throat. He cannot speak, cough or make any sound. His lips are turning blue. A nurse calls you to the bedside. He is conscious and looking at you in panic. He has no known allergies and was breathing comfortably moments earlier.",
    vitals: { pulse: "124/minute", o2sat: "82% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate action for this conscious patient?",
        options: [
          "Back blows then abdominal thrusts",
          "Blind finger sweep of the mouth",
          "Encourage him to keep coughing",
          "Immediate cricothyrotomy",
          "Start chest compressions",
        ],
        correct: 0,
        explanation:
          "He cannot speak, cough or make a sound, which is severe foreign body airway obstruction. The 2025 American Heart Association guideline recommends cycles of 5 back blows followed by 5 abdominal thrusts for a conscious adult until the object comes out or he becomes unresponsive. Encouraging coughing is right only for mild obstruction, when the patient can cough forcefully. A blind finger sweep can push the object deeper. Chest compressions start once he is unresponsive. A surgical airway is kept for failure of these measures and of removal under direct vision.",
        keyFeature: { topic: "sob", n: 1 },
        source: "aha-bls",
      },
      {
        id: "q2",
        kind: "single",
        update: "The obstruction does not clear. He becomes unresponsive and is lowered onto the stretcher. He is not breathing.",
        prompt: "Which of the following is the most appropriate next action for this unresponsive patient?",
        options: [
          "Abdominal thrusts while supine",
          "Back blows with him on his side",
          "Blind finger sweep of the mouth",
          "Check for a pulse for 30 seconds",
          "Start chest compressions",
        ],
        correct: 4,
        explanation:
          "Once a choking adult becomes unresponsive, the American Heart Association recommends starting CPR at once, looking in the mouth for a visible object each time the airway is opened for breaths. Chest compressions raise intrathoracic pressure and can expel the object. Back blows and abdominal thrusts are for the conscious patient. A blind finger sweep can push the object further in. A pulse check should take no more than 10 seconds, and 30 seconds delays compressions.",
        keyFeature: { topic: "sob", n: 3 },
        source: "aha-bls",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings in a choking adult would indicate mild obstruction that is best managed by encouraging coughing?",
        options: [
          "Able to cough forcefully and speak",
          "Clutching the throat",
          "Cyanosis of the lips",
          "High pitched noise when breathing in",
          "Silent attempts to cough",
        ],
        correct: 0,
        explanation:
          "An adult who can speak and cough forcefully is still moving air, and the American Heart Association advises letting that person keep coughing while staying with them. Clutching the throat is the universal sign of choking and does not tell mild from severe. Cyanosis, a high pitched inspiratory noise and silent coughing are signs of severe obstruction that call for back blows and abdominal thrusts.",
        keyFeature: { topic: "sob", n: 1 },
        source: "aha-bls",
      },
    ],
    sources: [AHABLS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-35",
    topic: "sob",
    title: "Weight loss and a dull left chest",
    stem:
      "A 71-year-old woman presents to the emergency department with 3 weeks of increasing shortness of breath, now on minimal exertion, and a dry cough. She has lost 6 kg over 2 months. She is a former smoker with 40 pack-years. She has no fever and no chest pain. She is sitting up and speaking in full sentences. There is dullness to percussion and absent breath sounds over the lower two thirds of the left chest. The trachea is deviated to the right. The JVP is not raised. The chest radiograph shows a large left pleural effusion with the mediastinum shifted to the right.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "26/minute", bp: "138/82 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step to relieve this patient's breathlessness?",
        options: [
          "Chest drain with suction to drain dry",
          "furosemide 40 mg IV daily",
          "Needle decompression of the left chest",
          "Talc pleurodesis in the department",
          "Thoracentesis of up to 1.5 L",
        ],
        correct: 4,
        explanation:
          "A large effusion pushing the mediastinum away is causing her breathlessness, and a therapeutic aspiration relieves symptoms and gives fluid for diagnosis. The BTS guideline advises removing no more than about 1.5 L at one sitting to limit re-expansion pulmonary edema. Draining the whole effusion quickly on suction raises that risk. Furosemide does not treat an effusion from probable malignancy, and her JVP is normal. Needle decompression is for tension pneumothorax, not fluid. Pleurodesis comes after the diagnosis is made and the lung is shown to re-expand.",
        keyFeature: { topic: "sob", n: 3 },
        source: "bts-pleural",
      },
      {
        id: "q2",
        kind: "single",
        update: "Pleural fluid protein is 42 g/L and serum protein is 68 g/L. Pleural fluid LDH is 380 U/L and serum LDH is 210 U/L, with a laboratory upper limit of normal of 250 U/L.",
        prompt: "Which of the following best interprets these pleural fluid results?",
        options: [
          "Exudate, meeting all three criteria",
          "Exudate, meeting only the LDH criteria",
          "Indeterminate, needing a serum albumin gradient",
          "Transudate, as serum LDH is normal",
          "Transudate, as serum protein exceeds fluid",
        ],
        correct: 0,
        explanation:
          "Light's criteria call an effusion an exudate if any one is met. The protein ratio is 42 divided by 68, or 0.62, above 0.5. The LDH ratio is 380 divided by 210, or 1.8, above 0.6. The fluid LDH of 380 U/L is above two thirds of the upper limit, which is about 167 U/L. All three are met, so this is an exudate, consistent with malignancy in a smoker with weight loss. The albumin gradient is for a borderline exudate in a patient on diuretics, and a normal serum LDH or a higher serum protein does not make an effusion a transudate.",
        keyFeature: { topic: "sob", n: 2 },
        source: "bts-pleural",
      },
      {
        id: "q3",
        kind: "single",
        update: "During a repeat therapeutic aspiration a week later, after 1.2 L has been removed, she develops chest tightness and persistent coughing.",
        prompt: "Which of the following is the most appropriate action at this point in the procedure?",
        options: [
          "Apply suction to finish drainage",
          "codeine 30 mg PO and continue",
          "Continue to 1.5 L as planned",
          "Stop the aspiration now",
          "Switch to a vacuum bottle",
        ],
        correct: 3,
        explanation:
          "Chest tightness and persistent coughing during drainage suggest a sharp fall in pleural pressure as the lung re-expands, which can lead to re-expansion pulmonary edema. The BTS guideline advises stopping the aspiration when these symptoms appear, whatever volume has been removed. Suction and a vacuum bottle lower pleural pressure further. Continuing to the planned volume or suppressing the cough with codeine ignores the warning.",
        keyFeature: { topic: "sob", n: 3 },
        source: "bts-pleural",
      },
    ],
    sources: [BTSPLEURAL],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-36",
    topic: "sob",
    alsoTopics: ["ischemic-heart-disease"],
    title: "Breathless while hanging laundry",
    stem:
      "You are working in a rural hospital emergency department. The nearest PCI centre is 3 hours away by road. A 76-year-old woman presents to the emergency department with 3 hours of shortness of breath and nausea that began while she was hanging laundry. She has no chest pain. She has type 2 diabetes treated with insulin, hypertension and stage 3 chronic kidney disease. She has no history of stroke or bleeding. She is sweaty and pale. The JVP is not raised. There are faint crackles at both bases. Her legs are not swollen.",
    vitals: { temperature: "36.7°C oral", pulse: "98/minute", resp: "24/minute", bp: "148/88 mmHg", o2sat: "93% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations should be done first for this patient?",
        options: ["Arterial blood gas", "Chest radiograph", "D-dimer level", "Electrocardiogram", "Serum troponin level"],
        correct: 3,
        explanation:
          "Sudden breathlessness with nausea and sweating on exertion in an older woman with diabetes can be an anginal equivalent, with no chest pain at all. An ECG within 10 minutes of arrival identifies ST elevation myocardial infarction, which needs reperfusion decisions within minutes. Troponin takes time to result and does not decide reperfusion. A chest radiograph and blood gas describe the lungs but do not find the cause if it is ischemic. A D-dimer is not the first test before the ECG has excluded a coronary cause.",
        keyFeature: { topic: "sob", n: 2 },
        source: "stemi",
      },
      {
        id: "q2",
        kind: "single",
        update: "The ECG shows 3 mm of ST elevation in V1 to V4 with reciprocal ST depression in II, III and aVF.",
        prompt: "Which of the following is the most appropriate reperfusion strategy for this patient?",
        options: [
          "Fibrinolysis and admission locally",
          "Fibrinolysis then transfer for PCI",
          "heparin infusion and admission locally",
          "Transfer for primary PCI without lysis",
          "Troponin first, then decide",
        ],
        correct: 1,
        explanation:
          "A 3 hour road transfer means first medical contact to device time will be well over 120 minutes. The Canadian Cardiovascular Society guideline then recommends fibrinolysis within 30 minutes of arrival, followed by routine transfer to a PCI centre for angiography within 24 hours, or at once for failed reperfusion. Transfer for primary PCI alone delays reperfusion past the recommended window. Lysis without transfer misses early angiography. Heparin alone does not reperfuse the artery. Waiting for troponin delays treatment of a diagnosis the ECG has already made.",
        keyFeature: { topic: "sob", n: 3 },
        source: "stemi",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following fibrinolytic regimens is most appropriate for this patient?",
        options: [
          "alteplase 100 mg IV over 2 hours",
          "tenecteplase 8.75 mg IV bolus",
          "tenecteplase 17.5 mg IV bolus",
          "tenecteplase 35 mg IV bolus",
          "tenecteplase 50 mg IV bolus",
        ],
        correct: 2,
        explanation:
          "She is 76 years old. The Canadian guideline suggests a half dose of fibrinolytic for patients older than 75 in a pharmacoinvasive strategy, because full dose tenecteplase raised intracranial hemorrhage in this age group in the STREAM trial. The full weight-based dose for 68 kg is 35 mg, so half is 17.5 mg. The 35 mg dose is the full dose meant for younger patients of her weight, and 50 mg is the dose for 90 kg or more. A quarter dose of 8.75 mg has not been tested. Alteplase 100 mg over 2 hours is the regimen used for massive PE.",
        keyFeature: { topic: "sob", n: 3 },
        source: "stemi",
      },
    ],
    sources: [STEMI],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-37",
    topic: "sob",
    alsoTopics: ["loc"],
    title: "Sleepy and breathless after a cold",
    stem:
      "A 58-year-old woman is brought to the emergency department by her daughter because she has been more short of breath and sleepy for 3 days after a cold. She has hypertension, a BMI of 52 kg/m2 and loud snoring with pauses in breathing at night, but has never had a sleep study. Her TSH was normal last month. She has never smoked, has no known lung disease and takes no opioids or sedatives. She dozes off during the history but rouses to voice, follows commands and coughs on request. There are distant breath sounds with no wheeze. Both legs have pitting edema. Paramedics gave oxygen at 6 L/minute.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "18/minute", bp: "156/92 mmHg", o2sat: "97% on 6 L/minute by nasal prongs", weight: "138 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Arterial gas on 6 L/minute: pH 7.24, PaCO2 84 mmHg, PaO2 88 mmHg, HCO3 35 mmol/L.",
        prompt: "Which of the following is the most likely cause of this patient's respiratory failure?",
        options: [
          "COPD exacerbation",
          "Hypothyroidism with myxedema",
          "Obesity hypoventilation syndrome",
          "Opioid or sedative toxicity",
          "Pulmonary embolism",
        ],
        correct: 2,
        explanation:
          "Severe obesity, snoring with witnessed apneas and hypercapnia with a raised bicarbonate, in a woman with no lung disease, point to obesity hypoventilation syndrome, made worse now by a respiratory infection and supplemental oxygen. The ATS guideline defines it as a BMI of 30 kg/m2 or more with awake daytime hypercapnia once other causes of hypoventilation are excluded. She has never smoked and has no lung disease, which makes COPD unlikely. Her TSH was normal last month, and she takes no opioids or sedatives. PE causes hypoxemia with a low PaCO2, not a PaCO2 of 84 mmHg.",
        keyFeature: { topic: "sob", n: 2 },
        source: "mokhlesi",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings best shows that her hypercapnia is not purely acute?",
        options: [
          "Arterial PaCO2 of 84 mmHg",
          "Arterial PaO2 of 88 mmHg",
          "Bicarbonate of 35 mmol/L",
          "Respiratory rate of 18/minute",
          "Somnolence during the history",
        ],
        correct: 2,
        explanation:
          "In acute hypercapnia the bicarbonate rises only about 1 mmol/L for each 10 mmHg rise in PaCO2. A rise from 40 to 84 mmHg would therefore take the bicarbonate from 24 to about 28 mmol/L. Her bicarbonate of 35 mmol/L shows days of renal retention, so this is acute on chronic hypercapnia, and the ATS guideline uses a raised serum bicarbonate to screen for obesity hypoventilation. The PaCO2 alone does not show how long it has been raised. A PaO2 of 88 mmHg reflects the oxygen she is receiving. A normal respiratory rate is common in hypoventilation, and somnolence reflects the CO2 level, not its duration.",
        keyFeature: { topic: "sob", n: 4 },
        source: "mokhlesi",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following treatments should be started now for this patient?",
        select: 2,
        options: [
          "Bilevel noninvasive ventilation",
          "flumazenil 0.2 mg IV",
          "Increase oxygen to 10 L/minute",
          "naloxone 0.4 mg IV",
          "Nebulized salbutamol",
          "sodium bicarbonate 50 mmol IV",
          "Titrate oxygen to 88 to 92%",
        ],
        correct: [0, 6],
        explanation:
          "She has acute on chronic hypercapnic respiratory failure with a pH of 7.24, and she is rousable and protecting her airway, so bilevel noninvasive ventilation is the first step, with close watch for failure. The BTS/ICS guideline recommends NIV for acidotic hypercapnic failure due to obesity. Oxygen at 6 L/minute has pushed her saturation to 97%, above the 88 to 92% target for patients at risk of hypercapnia, and more oxygen would worsen it. She takes no opioids or sedatives, so naloxone and flumazenil have no target, and she has no wheeze to treat. Bicarbonate adds CO2 and does not correct a respiratory acidosis.",
        keyFeature: { topic: "sob", n: 3 },
        source: "bts-ahrf",
      },
    ],
    sources: [MOKHLESI, BTSAHRF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-38",
    topic: "sob",
    title: "Back pain, then fever and chest pain",
    stem:
      "A 17-year-old boy with sickle cell disease (HbSS) presents to the emergency department with 2 days of pain in his back and legs, and since this morning fever, cough and right sided chest pain. He has had 3 painful crises this year. He takes hydroxyurea and folic acid and has been using hydromorphone at home. He is speaking in short sentences. There are crackles and reduced breath sounds at the right base. The chest radiograph shows a new right lower lobe infiltrate. Hemoglobin is 84 g/L, his usual level.",
    vitals: { temperature: "38.6°C oral", pulse: "118/minute", resp: "30/minute", bp: "124/72 mmHg", o2sat: "90% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Acute chest syndrome",
          "Opioid induced hypoventilation",
          "Pulmonary embolism",
          "Splenic sequestration crisis",
          "Vaso-occlusive rib infarction",
        ],
        correct: 0,
        explanation:
          "A new pulmonary infiltrate with fever, cough, chest pain and hypoxemia in a patient with sickle cell disease is acute chest syndrome, whatever the trigger. It often follows a painful crisis, as here. Rib infarction causes chest pain and splinting but not a new infiltrate with fever. Opioid hypoventilation lowers the respiratory rate, and his is 30/minute. Splenic sequestration causes a falling hemoglobin and a large spleen, and his hemoglobin is at baseline. PE can occur in sickle cell disease but does not explain fever with a lobar infiltrate.",
        keyFeature: { topic: "sob", n: 2 },
        source: "howard",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following treatments should be started now for this patient?",
        select: 4,
        options: [
          "Cephalosporin plus macrolide",
          "dexamethasone",
          "Fluids at twice maintenance",
          "Incentive spirometry",
          "Opioid analgesia",
          "Stopping hydroxyurea",
          "Supplemental oxygen",
          "Withholding all opioids",
        ],
        correct: [0, 3, 4, 6],
        explanation:
          "The British guideline advises oxygen for hypoxemia, antibiotics that cover both typical and atypical organisms, such as a cephalosporin with a macrolide, adequate analgesia and incentive spirometry to prevent further atelectasis. Pain causes splinting, so opioids are continued with monitoring rather than withheld. Fluids at twice maintenance can cause pulmonary edema and worsen hypoxemia, so fluids are given to maintain euvolemia only. Routine corticosteroids are not recommended, because they are linked to rebound sickling and readmission. Hydroxyurea is a disease modifying drug that the same guideline recommends to prevent further episodes, so stopping it does not treat this one.",
        keyFeature: { topic: "sob", n: 3 },
        source: "howard",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Eight hours later the infiltrate involves both lower lobes. His O2 saturation is 88% on 10 L/minute by face mask and his respiratory rate is 38/minute. Hemoglobin has fallen to 66 g/L. He is more drowsy.",
        prompt: "Which of the following is the most appropriate next step in management?",
        options: [
          "furosemide 40 mg IV",
          "Increase the hydromorphone dose",
          "IV methylprednisolone",
          "Red cell exchange transfusion",
          "Repeat chest radiograph tomorrow",
        ],
        correct: 3,
        explanation:
          "Spread to both lower lobes, hypoxemia on 10 L/minute of oxygen, a respiratory rate of 38/minute, a falling hemoglobin and drowsiness mark severe, progressing acute chest syndrome. The guideline recommends urgent exchange transfusion, with ICU involvement, to lower the proportion of sickle hemoglobin quickly. Waiting for a radiograph tomorrow ignores that progression. More hydromorphone in a drowsy, hypoxemic patient risks respiratory depression. Steroids are not recommended routinely. Furosemide is not indicated without volume overload.",
        keyFeature: { topic: "sob", n: 4 },
        source: "howard",
      },
    ],
    sources: [HOWARD],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-39",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Three weeks of dry cough and thrush",
    stem:
      "A 34-year-old man presents to the emergency department with 3 weeks of dry cough, low grade fevers and shortness of breath that now comes on when he climbs one flight of stairs. He has lost 5 kg. He has had a sore, white-coated mouth for a month. He has not seen a physician in 6 years and has had condomless sex with male partners. He speaks in full sentences at rest. There are white plaques on the tongue and palate. The chest is clear. The chest radiograph shows faint bilateral perihilar interstitial opacities.",
    vitals: { temperature: "38.0°C oral", pulse: "104/minute", resp: "24/minute", bp: "118/70 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "After 2 minutes of walking in the hallway, his O2 saturation falls to 84% and he has to stop.",
        prompt: "Which of the following findings best shows the severity of this patient's gas exchange problem?",
        options: [
          "Clear chest on auscultation",
          "O2 sat of 84% on walking",
          "Respiratory rate of 24/minute",
          "Temperature of 38.0°C",
          "Weight loss of 5 kg",
        ],
        correct: 1,
        explanation:
          "A fall in saturation from 93% to 84% with brief exertion is an objective sign of a significant diffusion problem, typical of Pneumocystis pneumonia, and it is more telling than his resting values. A clear chest is common in this infection and does not measure severity. A respiratory rate of 24/minute is raised but not specific. Fever and weight loss reflect the underlying illness, not how well he is exchanging gas.",
        keyFeature: { topic: "sob", n: 4 },
        source: "oi-pcp",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following investigations are most useful now in this patient?",
        select: 3,
        options: [
          "Arterial blood gas",
          "CT pulmonary angiogram",
          "D-dimer level",
          "HIV antigen and antibody test",
          "Induced sputum for Pneumocystis",
          "Legionella urine antigen",
          "Pulmonary function tests",
        ],
        correct: [0, 3, 4],
        explanation:
          "Thrush, weight loss, subacute dry cough, exertional desaturation and perihilar interstitial opacities point to Pneumocystis pneumonia with undiagnosed HIV. An HIV test confirms the underlying cause. Induced sputum looks for the organism. An arterial gas gives the PaO2 and alveolar-arterial gradient that decide whether he needs adjunctive steroids. His 3 week course and interstitial pattern do not fit PE, so CT angiography and D-dimer are not the priority. Legionella causes an acute lobar pneumonia, and pulmonary function tests have no role in acute illness.",
        keyFeature: { topic: "sob", n: 2 },
        source: "oi-pcp",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "The HIV test is positive. Induced sputum is positive for Pneumocystis jirovecii. Arterial gas on room air: pH 7.47, PaCO2 32 mmHg, PaO2 62 mmHg.",
        prompt: "Which of the following is the most appropriate treatment for this patient?",
        options: [
          "atovaquone suspension alone",
          "ceftriaxone plus azithromycin",
          "prednisone and antiretrovirals only",
          "trimethoprim-sulfamethoxazole alone",
          "trimethoprim-sulfamethoxazole plus prednisone",
        ],
        correct: 4,
        explanation:
          "His PaO2 of 62 mmHg is below 70 mmHg, and his alveolar-arterial gradient is about 150 minus 40 minus 62, or 48 mmHg, above 35. By either measure he has moderate to severe Pneumocystis pneumonia. The guideline recommends trimethoprim-sulfamethoxazole with prednisone started within 72 hours, which lowers mortality in this group. Trimethoprim-sulfamethoxazole alone omits the steroid he qualifies for. Atovaquone is an alternative only for mild to moderate disease and is less effective. Ceftriaxone and azithromycin do not treat Pneumocystis. Antiretroviral therapy starts within 2 weeks, but never in place of treating the infection.",
        keyFeature: { topic: "sob", n: 3 },
        source: "oi-pcp",
      },
    ],
    sources: [OIPCP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-40",
    topic: "sob",
    alsoTopics: ["shock"],
    title: "Tired and breathless after a stomach bug",
    stem:
      "A 9-year-old girl is brought to the emergency department by her father with 3 days of worsening shortness of breath and fatigue. She had a febrile illness with diarrhea 10 days ago. Today she vomited twice and became short of breath climbing the stairs. She has no history of asthma or heart disease. She is pale and tired. Her hands and feet are cool, with a capillary refill of 4 seconds. There is a gallop rhythm. There are fine crackles at both bases and no wheeze. The liver edge is 4 cm below the right costal margin.",
    vitals: { temperature: "37.3°C oral", pulse: "148/minute", resp: "36/minute", bp: "88/60 mmHg", o2sat: "94% on room air", weight: "30 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this child?",
        options: [
          "Asthma exacerbation",
          "Community acquired pneumonia",
          "Diabetic ketoacidosis",
          "Gastroenteritis with dehydration",
          "Viral myocarditis",
        ],
        correct: 4,
        explanation:
          "A gallop rhythm, an enlarged liver, basal crackles and cool peripheries with a slow capillary refill after a recent viral illness point to heart failure from myocarditis. Children with myocarditis often present with breathlessness, vomiting and fatigue, which are easily taken for a respiratory or gut illness. Dehydration does not cause a gallop, crackles or hepatomegaly. She has no wheeze or asthma history, and no focal chest signs of pneumonia. Diabetic ketoacidosis causes deep breathing with dry mucous membranes, not congestion.",
        keyFeature: { topic: "sob", n: 2 },
        source: "law-myo",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most useful to confirm the cause of her illness?",
        options: ["Abdominal ultrasound", "Blood cultures", "Chest radiograph", "Echocardiography", "Venous blood gas"],
        correct: 3,
        explanation:
          "Echocardiography shows ventricular size and function, looks for a pericardial effusion and excludes structural heart disease, so it confirms the cardiac cause and guides treatment. The AHA statement places it at the centre of the initial workup, along with ECG and troponin. A chest radiograph may show cardiomegaly and edema but cannot measure function. A venous gas and blood cultures describe her physiology and look for sepsis without identifying myocarditis. Abdominal ultrasound follows the vomiting, not the cause.",
        keyFeature: { topic: "sob", n: 2 },
        source: "law-myo",
      },
      {
        id: "q3",
        kind: "single",
        update: "Echocardiography shows a dilated left ventricle with an ejection fraction of 25%. Lactate is 4.2 mmol/L. Her BP is now 84/56 mmHg.",
        prompt: "Which of the following is the most appropriate initial treatment to support her circulation?",
        options: [
          "epinephrine 0.05 mcg/kg/minute IV",
          "furosemide 30 mg IV",
          "IV immune globulin 2 g/kg",
          "normal saline 1 800 mL IV over 1 hour",
          "normal saline 600 mL IV, repeated twice",
        ],
        correct: 0,
        explanation:
          "She is in cardiogenic shock, with a BP of 84/56 mmHg, a lactate of 4.2 mmol/L and an ejection fraction of 25%. The AHA statement calls for prompt treatment of low cardiac output and keeps inotropes with vasopressor effect, such as epinephrine, for children with hypotension and cardiogenic shock, as she now has. Boluses of 20 mL/kg repeated, or 60 mL/kg in an hour, load a failing ventricle when she already has crackles and a large liver. Furosemide before perfusion is restored can deepen shock. IV immune globulin has uncertain benefit in myocarditis and does not support her circulation now.",
        keyFeature: { topic: "sob", n: 3 },
        source: "law-myo",
      },
    ],
    sources: [LAWMYO],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-41",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "A second panic attack",
    stem:
      "A 34-year-old woman presents to the emergency department with 1 hour of sudden breathlessness, tingling in her fingers and around her mouth, and a sense of doom that began at her desk. She has generalized anxiety disorder and had a similar episode 2 years ago. She takes sertraline and a combined oral contraceptive. She flew home from Australia 5 days ago. She has no chest pain, hemoptysis or leg symptoms. She is anxious and breathing quickly. The chest is clear and the legs are normal. The ECG shows sinus tachycardia.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "28/minute", bp: "124/78 mmHg", o2sat: "94% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features should most prompt testing for a physical cause of this patient's symptoms?",
        options: [
          "History of generalized anxiety",
          "O2 saturation of 94% on room air",
          "Perioral and finger tingling",
          "Rapid breathing with a sense of doom",
          "Similar episode 2 years ago",
        ],
        correct: 1,
        explanation:
          "Anxiety driven overbreathing raises alveolar oxygen, so a healthy 34-year-old who is hyperventilating should have a normal or high saturation. A saturation of 94% on room air means a gas exchange problem, and with estrogen use and a long flight, PE must be considered. Tingling, rapid breathing and a sense of doom occur with both panic and PE, so they do not separate the two. A history of anxiety and a similar past episode make anchoring on panic tempting, but they do not lower her risk of PE.",
        keyFeature: { topic: "sob", n: 2 },
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "single",
        update: "You judge an alternative diagnosis to be more likely than PE.",
        prompt: "Which of the following is the most appropriate next step in the evaluation for pulmonary embolism?",
        options: [
          "CT pulmonary angiogram",
          "High sensitivity D-dimer",
          "lorazepam 1 mg SL and reassess",
          "PERC rule to stop testing",
          "Reassure and discharge home",
        ],
        correct: 1,
        explanation:
          "She fails three PERC criteria: a heart rate of 112/minute, a saturation below 95% and estrogen use. PERC therefore cannot exclude PE. Her Wells score is 1.5, for tachycardia alone, so PE is unlikely and a high sensitivity D-dimer with the standard cutoff for her age is the next step. CT angiography first exposes a young woman to radiation without need. Lorazepam and discharge both treat panic as the diagnosis before PE has been excluded.",
        keyFeature: { topic: "sob", n: 5 },
        source: "perc",
      },
      {
        id: "q3",
        kind: "single",
        update: "The D-dimer is 1 450 mcg/L. The chest radiograph is normal.",
        prompt: "Which of the following is the most appropriate next step in the evaluation for pulmonary embolism?",
        options: [
          "CT angiogram or V/Q scan",
          "Echocardiography first",
          "Leg compression ultrasound only",
          "Repeat D-dimer tomorrow",
          "Start apixaban and discharge",
        ],
        correct: 0,
        explanation:
          "A D-dimer of 1 450 mcg/L is well above her cutoff of 500 mcg/L, so PE has not been excluded and she needs lung imaging. Thrombosis Canada accepts CT angiography, and prefers a V/Q scan for young patients with a normal chest radiograph. A normal leg ultrasound would not exclude PE in a patient with no leg symptoms. Echocardiography is for unstable patients, and she is stable. Repeating the D-dimer, or treating without a diagnosis, commits her either to missed PE or to months of anticoagulation she may not need.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q4",
        kind: "single",
        update: "The CT pulmonary angiogram is of good quality and shows no PE. Her breathing settles over the next hour.",
        prompt: "Which of the following is the most appropriate next step for this patient?",
        options: [
          "Admit for serial leg ultrasound",
          "Anticoagulate for 3 months",
          "Discharge with anxiety follow up",
          "Repeat CT angiogram in 1 week",
          "V/Q scan to confirm the result",
        ],
        correct: 2,
        explanation:
          "A good quality negative CT angiogram excludes PE in a patient whose pretest probability was unlikely, with a Wells score of 1.5. Thrombosis Canada reserves further testing, such as V/Q scanning or leg ultrasound, for patients in whom clinical suspicion stays high despite a negative CT, which is not her situation. Serial leg ultrasound, repeat CT and a confirmatory V/Q scan add cost and radiation without benefit. Anticoagulation without a diagnosis exposes her to bleeding risk. Her anxiety disorder needs follow up now that PE has been excluded.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
    ],
    sources: [TCPE, PERC],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-42",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "A tight neck on the evening of day surgery",
    stem:
      "A 58-year-old woman is brought back to the emergency department by her husband 6 hours after discharge from a day surgery total thyroidectomy. Over the last 40 minutes her neck has become swollen and tight and she feels short of breath. It is hard to swallow and her voice is hoarse. She takes no anticoagulants. She is sitting upright and anxious. The front of her neck is swollen and tense beneath the sutured incision, and the swelling is increasing as you watch. There is soft inspiratory stridor. There is no rash or wheeze.",
    vitals: { temperature: "36.9°C oral", pulse: "118/minute", resp: "28/minute", bp: "168/94 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this patient's breathing difficulty?",
        options: [
          "Anaphylaxis to the dressing",
          "Bilateral vocal cord palsy",
          "Expanding neck hematoma",
          "Hypocalcemic laryngospasm",
          "Tracheomalacia after surgery",
        ],
        correct: 2,
        explanation:
          "A tense, enlarging swelling under a fresh thyroidectomy wound with new stridor is a hematoma compressing the airway, and the venous congestion it causes swells the larynx as well. Bilateral recurrent laryngeal nerve palsy causes stridor soon after extubation without neck swelling. Hypocalcemia usually appears after 24 to 48 hours, with tingling and spasm rather than a mass. Anaphylaxis would bring urticaria, wheeze or hypotension, and she has none. Tracheomalacia is uncommon and does not produce a swelling that grows.",
        keyFeature: { topic: "sob", n: 1 },
        source: "iliff",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate action for this patient?",
        options: [
          "dexamethasone 8 mg IV and observe",
          "Needle aspiration of the swelling",
          "Rapid sequence intubation first",
          "Remove sutures and open the wound",
          "Transfer to the operating room",
        ],
        correct: 3,
        explanation:
          "With stridor and a growing hematoma, the multidisciplinary guideline advises decompression at the bedside without delay. Staff open the skin and deep layers, cut the sutures and evacuate the clot, which often relieves the obstruction at once. Intubating first through a compressed, edematous larynx is hazardous and often fails. Moving her to the operating room delays decompression. A needle cannot aspirate clotted blood. Dexamethasone does not act fast enough and does not remove the cause.",
        keyFeature: { topic: "sob", n: 3 },
        source: "iliff",
      },
      {
        id: "q3",
        kind: "single",
        update: "The wound is opened and clot is evacuated at the bedside. Her stridor settles and O2 saturation rises to 97%. The wound is loosely packed.",
        prompt: "Which of the following is the most appropriate next step for this patient?",
        options: [
          "Close the wound with staples",
          "Compress the neck with a tight dressing",
          "Discharge after 4 hours of observation",
          "tranexamic acid 1 g IV and observe",
          "Urgent return to the operating room",
        ],
        correct: 4,
        explanation:
          "Evacuating the clot relieves the obstruction, but the bleeding point is still open and laryngeal edema can worsen over hours. The guideline advises urgent return to the operating room for hemostasis and airway management, with a senior anesthetist present. Closing the skin or applying a tight dressing traps new bleeding and rebuilds the compression. Tranexamic acid does not replace surgical hemostasis. Discharge is unsafe after an airway threatening hematoma.",
        keyFeature: { topic: "sob", n: 3 },
        source: "iliff",
      },
    ],
    sources: [ILIFF],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-43",
    topic: "sob",
    alsoTopics: ["shock"],
    title: "Breathless after her pump alarmed",
    stem:
      "A 41-year-old woman presents to the emergency department with 1 hour of rapidly worsening shortness of breath and lightheadedness. She has idiopathic pulmonary arterial hypertension treated with tadalafil, macitentan and a continuous IV epoprostenol infusion through a tunnelled central line. Her portable infusion pump stopped 90 minutes ago and she has no spare pump. She has had no fever, chest pain or leg swelling. She is anxious and speaks in short phrases. The JVP is at the angle of the jaw. There is a left parasternal heave and a loud pulmonic second sound. The chest is clear and her hands are cool. The line exit site is clean.",
    vitals: { temperature: "36.8°C oral", pulse: "122/minute", resp: "30/minute", bp: "92/60 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in her treatment?",
        options: [
          "CT pulmonary angiogram",
          "epoprostenol infusion restarted",
          "norepinephrine infusion",
          "normal saline 1 L IV bolus",
          "Rapid sequence intubation",
        ],
        correct: 1,
        explanation:
          "Her symptoms began soon after a continuous epoprostenol infusion stopped. Epoprostenol has a half-life of a few minutes, so an interruption causes rebound pulmonary vasoconstriction and acute right ventricular failure. Wilcox and colleagues advise restarting the infusion at once, through a peripheral IV if her own line or pump cannot be used, while her pulmonary hypertension specialist is called. Norepinephrine may be needed if she becomes hypotensive, but it does not reverse the cause. A 1 L bolus adds preload to a right ventricle that is already failing. CT delays the one treatment that reverses the crisis, and intubation can precipitate collapse in right ventricular failure.",
        keyFeature: { topic: "sob", n: 3 },
        source: "wilcox-ph",
      },
      {
        id: "q2",
        kind: "single",
        update: "Epoprostenol is restarted on a hospital pump through a peripheral IV. Blood drawn on arrival shows a lactate of 4.6 mmol/L, a high sensitivity troponin I of 60 ng/L and a BNP of 2400 ng/L. Nasal prongs at 3 L/minute raise her O2 saturation to 93%.",
        prompt: "Which of the following findings best shows that her right heart failure was causing inadequate tissue perfusion?",
        options: [
          "BNP of 2400 ng/L",
          "Lactate of 4.6 mmol/L",
          "O2 sat of 88% on room air",
          "Respiratory rate of 30/minute",
          "Troponin I of 60 ng/L",
        ],
        correct: 1,
        explanation:
          "A lactate of 4.6 mmol/L shows that her tissues were not receiving enough oxygen, even though her systolic pressure was above 90 mmHg. Wilcox and colleagues use the lactate, with blood pressure, urine output and saturation, to follow the response to each treatment. The BNP reflects stretch of the right ventricle and is often high at baseline in pulmonary arterial hypertension, so on its own it does not show hypoperfusion. The troponin signals strain or ischemia of the right ventricle, not the adequacy of flow to the tissues. Her saturation and respiratory rate describe gas exchange and work of breathing, and oxygen has already corrected the saturation.",
        keyFeature: { topic: "sob", n: 4 },
        source: "wilcox-ph",
      },
      {
        id: "q3",
        kind: "menu",
        update: "Over the next hour her breathing eases and her BP rises to 104/68 mmHg. Her pulse is 108/minute and she has new flushing and a headache.",
        prompt: "Which of the following are appropriate now that her epoprostenol infusion is running again?",
        select: 2,
        options: [
          "Call her pulmonary hypertension specialist",
          "Continue her usual tadalafil",
          "Halve the epoprostenol dose",
          "Hold macitentan until she stabilizes",
          "metoprolol 5 mg IV for tachycardia",
          "Stop epoprostenol for the flushing",
        ],
        correct: [0, 1],
        explanation:
          "Her pulmonary hypertension specialist should be called early to guide care, and her oral pulmonary vasodilators are continued, because withdrawal of any of them can provoke the same crisis. Wilcox and colleagues advise that the emergency team not stop or reduce epoprostenol, even for side effects such as flushing or headache, and contact the prescriber instead. Halving or stopping the dose risks the rebound that brought her in. Macitentan is continued unless her specialist changes it. Beta blockers such as metoprolol can further impair a failing right ventricle, and her tachycardia is compensatory.",
        keyFeature: { topic: "sob", n: 3 },
        source: "wilcox-ph",
      },
    ],
    sources: [WILCOX],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-44",
    topic: "sob",
    alsoTopics: ["tox", "loc"],
    title: "Sleepy and breathless at the nursing home",
    stem:
      "An 84-year-old woman is brought to the emergency department by ambulance from her nursing home because she is short of breath and more drowsy than usual. Staff say she has been sleepy for 2 days. She has chronic back pain from osteoporotic fractures and stage 4 chronic kidney disease. A fentanyl 25 mcg/hour patch was started 4 days ago, and she has received hydromorphone 1 mg by mouth 5 times in the last day. She has no lung disease. She rouses to voice and then drifts off. Her pupils are 2 mm. There are a few crackles at the right base. Paramedics placed her on oxygen.",
    vitals: { temperature: "36.4°C oral", pulse: "64/minute", resp: "8/minute", bp: "118/64 mmHg", o2sat: "98% on 10 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best reflects the adequacy of this patient's ventilation?",
        options: ["Blood gas PCO2", "Chest radiograph findings", "Heart rate of 64/minute", "O2 saturation of 98%", "Pupil size of 2 mm"],
        correct: 0,
        explanation:
          "Ventilation is measured by carbon dioxide, so a blood gas PCO2 tells whether she is moving enough air. On high flow oxygen her saturation can stay at 98% while her PCO2 climbs, and the BTS guideline warns that oxygen can hide hypoventilation. Small pupils suggest an opioid effect but do not measure ventilation. Her heart rate and chest radiograph describe other problems.",
        keyFeature: { topic: "sob", n: 4 },
        source: "bts-o2",
      },
      {
        id: "q2",
        kind: "single",
        update: "Venous gas: pH 7.21, PCO2 74 mmHg, HCO3 29 mmol/L.",
        prompt: "Which of the following is the most likely main cause of this patient's respiratory failure?",
        options: [
          "Aspiration pneumonia",
          "Brainstem stroke",
          "Hypercapnic COPD exacerbation",
          "Opioid accumulation",
          "Pulmonary embolism",
        ],
        correct: 3,
        explanation:
          "A respiratory rate of 8/minute, pinpoint pupils and drowsiness with acute hypercapnia after a new fentanyl patch and repeated hydromorphone point to opioid toxicity. Kidney disease and old age slow the clearance of opioids and their metabolites. The crackles at the right base may be aspiration, a common complication of opioid sedation, but aspiration causes tachypnea, not a rate of 8/minute. She has no lung disease, which makes a COPD exacerbation unlikely. PE causes tachypnea and a low PCO2. A brainstem stroke is possible, but she has no focal signs.",
        keyFeature: { topic: "sob", n: 2 },
        source: "boyer",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial reversal treatment for this patient?",
        options: [
          "flumazenil 0.2 mg IV",
          "naloxone 4 mg IN",
          "naloxone 0.04 mg IV",
          "naloxone 0.4 mg IV",
          "naloxone 2 mg IV",
        ],
        correct: 2,
        explanation:
          "She is breathing and has a pulse, and she has chronic pain treated with opioids. A small dose of 0.04 mg IV, repeated every few minutes until her breathing improves, restores ventilation without causing abrupt withdrawal and a pain crisis. The fentanyl patch should also be removed, and she needs monitoring, because the patch keeps releasing drug. Doses of 0.4 mg, 2 mg IV or 4 mg IN risk withdrawal, severe pain and agitation in an opioid-dependent patient. Flumazenil reverses benzodiazepines, not opioids, and can cause seizures.",
        keyFeature: { topic: "sob", n: 3 },
        source: "boyer",
      },
    ],
    sources: [BTSO2, BOYER],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-45",
    topic: "sob",
    alsoTopics: ["pulmonary-edema"],
    title: "Breathless during the second unit",
    stem:
      "A 78-year-old man with myelodysplastic syndrome and heart failure with a reduced ejection fraction is receiving red cells in the emergency department for a hemoglobin of 68 g/L. Both units have run at 250 mL/hour. Forty minutes into the second unit he becomes acutely short of breath and anxious. Before the transfusion his temperature was 37.0°C, his O2 saturation was 96% on room air and his systolic BP was 142 mmHg. He is sitting up and speaking in short phrases. The JVP is 8 cm above the sternal angle. There are crackles to the mid chest on both sides. There is no rash or wheeze.",
    vitals: { temperature: "37.2°C oral", pulse: "112/minute", resp: "30/minute", bp: "188/98 mmHg", o2sat: "86% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this patient's breathlessness?",
        options: [
          "Acute hemolytic transfusion reaction",
          "Anaphylactic transfusion reaction",
          "Bacterial contamination of the unit",
          "Circulatory overload from transfusion",
          "Transfusion-related acute lung injury",
        ],
        correct: 3,
        explanation:
          "New breathlessness during a transfusion with a rising BP, a raised JVP and bilateral crackles, in a patient with reduced ejection fraction receiving two units quickly, is transfusion associated circulatory overload. Transfusion-related acute lung injury also causes hypoxemia and crackles, but usually with low or normal BP, fever and a normal JVP. Anaphylaxis causes hypotension, wheeze or urticaria. An acute hemolytic reaction and bacterial contamination cause fever, rigors and hypotension, and his temperature has risen only from 37.0°C to 37.2°C.",
        keyFeature: { topic: "sob", n: 2 },
        source: "cbs-tr",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following actions are most appropriate now for this patient?",
        select: 3,
        options: [
          "diphenhydramine IV",
          "epinephrine IM",
          "furosemide IV",
          "hydrocortisone IV",
          "normal saline bolus",
          "Oxygen, sitting upright",
          "Restart at a slower rate",
          "Stop the transfusion",
        ],
        correct: [2, 5, 7],
        explanation:
          "The transfusion is stopped first. He is sat upright and given oxygen, and IV furosemide removes the excess volume, with noninvasive ventilation if hypoxemia persists. Canadian Blood Services advises stopping the transfusion, giving a diuretic and oxygen, and reporting the reaction. Restarting now, even at a slower rate, adds volume he cannot yet handle. A saline bolus adds to the overload. Epinephrine, diphenhydramine and hydrocortisone treat allergic reactions, and he has no hives, wheeze or hypotension.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cbs-tr",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings would most favour transfusion-related acute lung injury over circulatory overload?",
        options: [
          "Elevated NT-proBNP level",
          "Hypotension with fever",
          "Quick response to diuretic",
          "Raised jugular venous pressure",
          "Rise in BP during transfusion",
        ],
        correct: 1,
        explanation:
          "Transfusion-related acute lung injury is an immune reaction that makes the lungs leak, so it often comes with fever and a fall in BP, and the JVP is normal. Circulatory overload is hydrostatic, so it tends to raise the BP and JVP, raise NT-proBNP and respond quickly to diuresis. Each of those other findings therefore points toward overload rather than lung injury.",
        keyFeature: { topic: "sob", n: 2 },
        source: "cbs-tr",
      },
    ],
    sources: [CBSTR],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-46",
    topic: "sob",
    alsoTopics: ["pediatric-fever", "infectious-diseases"],
    title: "Still febrile on amoxicillin at 4",
    stem:
      "A 4-year-old girl is brought to the emergency department by her mother with 7 days of fever and cough. Her family physician started high dose amoxicillin for pneumonia 4 days ago, and she has taken every dose. She is still febrile and eating little, and today she is breathing fast and says her right side hurts. She is fully immunized and otherwise well, with no history of choking. She is alert and talking, but lies still and splints her right chest. There is dullness to percussion and reduced breath sounds over the lower half of the right chest. The left chest is clear.",
    vitals: { temperature: "39.1°C tympanic", pulse: "142/minute", resp: "40/minute", bp: "98/60 mmHg", o2sat: "91% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely reason this child has not improved on amoxicillin?",
        options: [
          "Empyema or parapneumonic effusion",
          "Foreign body aspiration",
          "Poor absorption of oral amoxicillin",
          "Resistant pneumococcal infection",
          "Viral lower respiratory infection",
        ],
        correct: 0,
        explanation:
          "Fever that persists after 4 days of an appropriate antibiotic, with dullness and reduced breath sounds over one lower chest, points to a complication, most often a parapneumonic effusion or empyema. The Canadian Paediatric Society advises a chest radiograph and clinical reassessment for empyema or another complication when a child with suspected bacterial pneumonia has not responded within 48 to 72 hours. Pneumococcal resistance to high dose amoxicillin is uncommon and would not explain the dullness. Oral amoxicillin is well absorbed and she has taken every dose. A viral infection does not produce a large dull area, and she has no history of choking to suggest a foreign body.",
        keyFeature: { topic: "sob", n: 2 },
        source: "cps-cap",
      },
      {
        id: "q2",
        kind: "single",
        update: "Chest ultrasound shows a large right pleural effusion with septations, filling half the hemithorax.",
        prompt: "Which of the following is the most appropriate management for this child?",
        options: [
          "Continue amoxicillin at home",
          "IV antibiotics alone and reassess",
          "IV antibiotics and chest drainage",
          "Oral azithromycin added",
          "Repeated needle thoracentesis",
        ],
        correct: 2,
        explanation:
          "A large, septated effusion with tachypnea and hypoxemia needs IV antibiotics and drainage. The Canadian Paediatric Society recommends early drainage for a child in moderate to severe respiratory distress, by a small bore chest tube with intrapleural fibrinolytics or by thoracoscopic surgery, with IV cefotaxime or ceftriaxone as a usual empiric choice. Antibiotics alone leave a large septated collection undrained and prolong the illness. Repeated needle taps drain septated fluid poorly, and each one is distressing for a young child. Adding a macrolide does not drain infected fluid, and she cannot continue treatment at home with these findings.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cps-empyema",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support while she waits for drainage?",
        options: [
          "High flow at 2 L/kg/minute",
          "Low flow oxygen by nasal prongs",
          "Noninvasive ventilation",
          "Rapid sequence intubation",
          "Room air and observation",
        ],
        correct: 1,
        explanation:
          "Her saturation of 91% on room air is at or below 92%, the level at which the BTS pneumonia guideline for children advises oxygen by nasal cannula, head box or face mask to keep saturations above 92%. She is alert and talking and not tiring, so low flow oxygen is enough for now. High flow and noninvasive ventilation are for children who stay hypoxemic or tire despite low flow oxygen. Intubation is not indicated in an alert child whose hypoxemia can be corrected simply. Leaving her on room air accepts a saturation below target.",
        keyFeature: { topic: "sob", n: 3 },
        source: "bts-cap-child",
      },
    ],
    sources: [CPSCAP, CPSEMPYEMA, HARRIS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-47",
    topic: "sob",
    alsoTopics: ["pulmonary-edema"],
    title: "Cannot lie flat 4 weeks after delivery",
    stem:
      "A 31-year-old woman presents to the emergency department 4 weeks after an uncomplicated vaginal delivery of her second child. For 1 week she has had increasing shortness of breath, a cough at night and swollen ankles. Tonight she could not lie flat. Her pregnancy was complicated by gestational hypertension. She is breastfeeding and takes no medications. The JVP is 6 cm above the sternal angle. There is a third heart sound and there are crackles at both bases. Both ankles are equally swollen and the calves are not tender. Her hemoglobin is 124 g/L.",
    vitals: { temperature: "36.9°C oral", pulse: "118/minute", resp: "28/minute", bp: "132/84 mmHg", o2sat: "92% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Amniotic fluid embolism",
          "Peripartum cardiomyopathy",
          "Postpartum anemia",
          "Postpartum preeclampsia",
          "Pulmonary embolism",
        ],
        correct: 1,
        explanation:
          "New heart failure, with orthopnea, a raised JVP, a third heart sound, crackles and symmetric edema, a month after delivery in a woman with a history of gestational hypertension fits peripartum cardiomyopathy. Postpartum preeclampsia with pulmonary edema would need a BP of at least 140/90 mmHg, and hers is 132/84 mmHg. Amniotic fluid embolism occurs during labour or just after it, not weeks later. Her hemoglobin of 124 g/L excludes significant anemia. PE remains in the differential after delivery but does not explain a third heart sound, bilateral crackles and orthopnea.",
        keyFeature: { topic: "sob", n: 2 },
        source: "ppcm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most useful to confirm the diagnosis in this patient?",
        options: ["Chest radiograph", "CT pulmonary angiogram", "D-dimer level", "Echocardiography", "Ventilation perfusion scan"],
        correct: 3,
        explanation:
          "Peripartum cardiomyopathy is defined by a left ventricular ejection fraction below 45% near the end of pregnancy or in the months after it, with no other cause. Echocardiography measures that directly and should be done promptly. A chest radiograph can show edema and cardiomegaly but cannot measure function. CT angiography and V/Q scanning look for PE, which does not explain her findings. D-dimer is often raised after delivery and does not confirm or exclude heart failure.",
        keyFeature: { topic: "sob", n: 2 },
        source: "ppcm",
      },
      {
        id: "q3",
        kind: "single",
        update: "Echocardiography shows a dilated left ventricle with an ejection fraction of 30%.",
        prompt: "Which of the following is the most appropriate treatment to start first in the emergency department?",
        options: [
          "bromocriptine 2.5 mg PO",
          "furosemide 40 mg IV",
          "metoprolol 5 mg IV",
          "milrinone infusion IV",
          "normal saline 1 L IV",
        ],
        correct: 1,
        explanation:
          "She is congested, with orthopnea, crackles, a raised JVP and edema, and her BP is adequate, so IV furosemide is the first treatment. Oxygen and noninvasive ventilation are added if she remains hypoxemic. The ESC position statement lists bromocriptine as an option in selected patients after specialist review, with anticoagulation, but it stops lactation and does not relieve congestion now. IV metoprolol can worsen acute decompensation. Inotropes are for low output shock, which she does not have, and catecholamines may be harmful in this condition. Saline adds to the overload.",
        keyFeature: { topic: "sob", n: 3 },
        source: "ppcm",
      },
    ],
    sources: [PPCM],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
