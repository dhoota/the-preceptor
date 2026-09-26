// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

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
const TCPE: Source = {
  id: "tc-pe",
  citation: "Thrombosis Canada. Pulmonary embolism (PE). Diagnosis. Clinical guide. 2023.",
  url: "https://thrombosiscanada.ca/clinical_guides/pdfs/PULMONARYEMBOLISMDIAGNOSISANDM_80.pdf",
};
const WELLS2000: Source = {
  id: "wells-2000",
  citation: "Wells PS, Anderson DR, Rodger M, and colleagues. Derivation of a simple clinical model to categorize patients' probability of pulmonary embolism: increasing the model's utility with the SimpliRED D-dimer. Thromb Haemost. 2000.",
  url: "https://doi.org/10.1055/s-0037-1613830",
};
const WELLS1998: Source = {
  id: "wells-1998",
  citation: "Wells PS, Ginsberg JS, Anderson DR, and colleagues. Use of a clinical model for safe management of patients with suspected pulmonary embolism. Ann Intern Med. 1998.",
  url: "https://doi.org/10.7326/0003-4819-129-12-199812150-00002",
};
const ESCPE: Source = {
  id: "esc-pe",
  citation: "Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020.",
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
const CAEPAF: Source = {
  id: "caep-af",
  citation: "Stiell IG, de Wit K, Scheuermeyer FX, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.",
};
const CAP: Source = {
  id: "cap",
  citation:
    "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019.",
};
const KLOPPER: Source = {
  id: "klopper-lts",
  citation: "Klopper GJ, Adeniyi OV. Diagnostic accuracy of non-invasive modalities for laryngotracheal stenosis. A systematic review and meta-analysis. Eur Arch Otorhinolaryngol. 2025.",
  url: "https://doi.org/10.1007/s00405-025-09773-3",
};
const MARWAHA: Source = {
  id: "marwaha-2022",
  citation: "Marwaha A, Kumar A, Sharma S, Sood J. Anaesthesia for tracheal resection and anastomosis. J Anaesthesiol Clin Pharmacol. 2022.",
  url: "https://doi.org/10.4103/joacp.JOACP_611_20",
};
const PELLEGRINO: Source = {
  id: "ats-ers-2005",
  citation: "Pellegrino R, Viegi G, Brusasco V, et al. ATS/ERS task force. Interpretative strategies for lung function tests. Eur Respir J. 2005.",
  url: "https://doi.org/10.1183/09031936.05.00035205",
};
const AHABLS: Source = {
  id: "aha-bls",
  citation:
    "American Heart Association. Part 7. Adult basic life support. 2025 American Heart Association guidelines for cardiopulmonary resuscitation and emergency cardiovascular care. Circulation. 2025.",
  url: "https://doi.org/10.1161/CIR.0000000000001369",
};
const CURB: Source = {
  id: "curb65",
  citation:
    "Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital. An international derivation and validation study. Thorax. 2003.",
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

const AKOGLU: Source = {
  id: "akoglu",
  citation: "Akoglu E, Seyfeli E, Akoglu S, et al. Retropharyngeal hematoma as a complication of anticoagulation therapy. Ear Nose Throat J. 2008.",
  url: "https://pubmed.ncbi.nlm.nih.gov/18404913/",
};
const NACPCC: Source = {
  id: "nac-pcc",
  citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. Revised 2022.",
  url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada",
};
const WMSDROWN: Source = {
  id: "wms-drowning",
  citation: "Davis CA, Schmidt AC, Sempsrott JR, et al. Wilderness Medical Society clinical practice guidelines for the treatment and prevention of drowning. 2024 update. Wilderness Environ Med. 2024.",
  url: "https://doi.org/10.1177/10806032241227460",
};
const BOYDBH: Source = {
  id: "boyd-breath-hold",
  citation: "Boyd C, Levy A, McProud T, et al. Fatal and nonfatal drowning outcomes related to dangerous underwater breath-holding behaviors. New York State, 1988 to 2011. MMWR Morb Mortal Wkly Rep. 2015.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4584570/",
};
const DESJARDINS: Source = {
  id: "desjardins",
  citation: "Desjardins M, Iachimov D, Mousseau S, et al. Clinical characteristics of pediatric pertussis cases, Quebec 2015 to 2017. Can Commun Dis Rep. 2018.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6449091/",
};
const TIWARI: Source = {
  id: "tiwari",
  citation: "Tiwari T, Murphy TV, Moran J. Recommended antimicrobial agents for the treatment and postexposure prophylaxis of pertussis. 2005 CDC guidelines. MMWR Recomm Rep. 2005.",
  url: "https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5414a1.htm",
};
const WINTER: Source = {
  id: "winter",
  citation: "Winter K, Zipprich J, Harriman K, et al. Risk factors associated with infant deaths from pertussis. A case-control study. Clin Infect Dis. 2015.",
  url: "https://doi.org/10.1093/cid/civ472",
};
const SOMAPILLAY: Source = {
  id: "soma-pillay",
  citation: "Soma-Pillay P, Nelson-Piercy C, Tolppanen H, Mebazaa A. Physiological changes in pregnancy. Cardiovasc J Afr. 2016.",
  url: "https://doi.org/10.5830/CVJA-2016-021",
};
const AMMIFLU: Source = {
  id: "ammi-flu",
  citation: "Harrison R, Mubareka S, Papenburg J, et al. AMMI Canada 2023 update on influenza. Management and emerging issues. J Assoc Med Microbiol Infect Dis Can. 2023.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10697102/",
};
const ELBOGHDADLY: Source = {
  id: "el-boghdadly",
  citation: "El-Boghdadly K, Chin KJ, Chan VWS. Phrenic nerve palsy and regional anesthesia for shoulder surgery. Anatomical, physiologic, and clinical considerations. Anesthesiology. 2017.",
  url: "https://doi.org/10.1097/ALN.0000000000001668",
};
const URMEY: Source = {
  id: "urmey",
  citation: "Urmey WF, Talts KH, Sharrock NE. One hundred percent incidence of hemidiaphragmatic paresis associated with interscalene brachial plexus anesthesia as diagnosed by ultrasonography. Anesth Analg. 1991.",
  url: "https://doi.org/10.1213/00000539-199104000-00014",
};
const ALMUTAIRI: Source = {
  id: "al-mutairi",
  citation: "Al-Mutairi B, Kirk V. Bacterial tracheitis in children. Approach to diagnosis and treatment. Paediatr Child Health. 2004.",
  url: "https://doi.org/10.1093/pch/9.1.25",
};
const COLLARD: Source = {
  id: "collard-aeipf",
  citation: "Collard HR, Ryerson CJ, Corte TJ, et al. Acute exacerbation of idiopathic pulmonary fibrosis. An international working group report. Am J Respir Crit Care Med. 2016.",
  url: "https://doi.org/10.1164/rccm.201604-0801CI",
};
const RAGHUIPF: Source = {
  id: "raghu-ipf",
  citation: "Raghu G, Collard HR, Egan JJ, et al. An official ATS/ERS/JRS/ALAT statement. Idiopathic pulmonary fibrosis. Evidence-based guidelines for diagnosis and management. Am J Respir Crit Care Med. 2011.",
  url: "https://doi.org/10.1164/rccm.2009-040GL",
};
const WINTERS: Source = {
  id: "albert-winters",
  citation: "Albert MS, Dell RB, Winters RW. Quantitative displacement of acid-base equilibrium in metabolic acidosis. Ann Intern Med. 1967.",
  url: "https://doi.org/10.7326/0003-4819-66-2-312",
};
const BROWNTICK: Source = {
  id: "brown-tick",
  citation: "Brown N, Waja N. Tick paralysis in a 6-year-old boy. Can Fam Physician. 2022.",
  url: "https://doi.org/10.46747/cfp.680122",
};
const SHOESMITH: Source = {
  id: "shoesmith-als",
  citation: "Shoesmith C, Abrahao A, Benstead T, et al. Canadian best practice recommendations for the management of amyotrophic lateral sclerosis. CMAJ. 2020.",
  url: "https://doi.org/10.1503/cmaj.191721",
};
const LUZURIAGA: Source = {
  id: "luzuriaga",
  citation: "Luzuriaga K, Sullivan JL. Infectious mononucleosis. N Engl J Med. 2010.",
  url: "https://doi.org/10.1056/NEJMcp1001116",
};
const GOMESIM: Source = {
  id: "gomes-im",
  citation: "Gomes K, Goldman RD. Corticosteroids for infectious mononucleosis. Can Fam Physician. 2023.",
  url: "https://doi.org/10.46747/cfp.6902101",
};
const AASLD: Source = {
  id: "aasld-ascites",
  citation: "Biggins SW, Angeli P, Garcia-Tsao G, et al. Diagnosis, evaluation, and management of ascites, spontaneous bacterial peritonitis and hepatorenal syndrome. 2021 practice guidance by the American Association for the Study of Liver Diseases. Hepatology. 2021.",
  url: "https://doi.org/10.1002/hep.31884",
};
const ASCOIRAE: Source = {
  id: "asco-irae",
  citation: "Schneider BJ, Naidoo J, Santomasso BD, et al. Management of immune-related adverse events in patients treated with immune checkpoint inhibitor therapy. ASCO guideline update. J Clin Oncol. 2021.",
  url: "https://doi.org/10.1200/JCO.21.01440",
};
const LARADAH: Source = {
  id: "lara-dah",
  citation: "Lara AR, Schwarz MI. Diffuse alveolar hemorrhage. Chest. 2010.",
  url: "https://doi.org/10.1378/chest.08-2084",
};
const ACRAAV: Source = {
  id: "acr-aav",
  citation: "Chung SA, Langford CA, Maz M, et al. 2021 American College of Rheumatology/Vasculitis Foundation guideline for the management of antineutrophil cytoplasmic antibody-associated vasculitis. Arthritis Rheumatol. 2021.",
  url: "https://doi.org/10.1002/art.41773",
};
const JATLAOUI: Source = {
  id: "jatlaoui-evali",
  citation: "Jatlaoui TC, Wiltz JL, Kabbani S, et al. Update. Interim guidance for health care providers for managing patients with suspected e-cigarette, or vaping, product use-associated lung injury. United States, November 2019. MMWR Morb Mortal Wkly Rep. 2019.",
  url: "https://doi.org/10.15585/mmwr.mm6846e2",
};
const EVANSEVALI: Source = {
  id: "evans-evali",
  citation: "Evans ME, Twentyman E, Click ES, et al. Update. Interim guidance for health care professionals evaluating and caring for patients with suspected e-cigarette, or vaping, product use-associated lung injury. MMWR Morb Mortal Wkly Rep. 2020.",
  url: "https://doi.org/10.15585/mmwr.mm685152e2",
};
const KDIGOGD: Source = {
  id: "kdigo-gd",
  citation: "Kidney Disease. Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group. KDIGO 2021 clinical practice guideline for the management of glomerular diseases. Kidney Int. 2021.",
  url: "https://doi.org/10.1016/j.kint.2021.05.021",
};
const PHACDIPH: Source = {
  id: "phac-diphtheria",
  citation: "Public Health Agency of Canada. Diphtheria. For health professionals. 2023.",
  url: "https://www.canada.ca/en/public-health/services/immunization/vaccine-preventable-diseases/diphtheria/health-professionals.html",
};
const ONTDIPH: Source = {
  id: "ontario-diphtheria",
  citation: "Ontario Ministry of Health. Diphtheria. Guide for health care professionals. 2024.",
  url: "https://www.ontario.ca/files/2024-02/moh-diphtheria-guide-health-care-professionals-en-2024-02-09.pdf",
};
const AALHAMAD: Source = {
  id: "aal-hamad",
  citation: "Aal-Hamad AH, Al-Alawi AM, Kashoub MS, Falhammar H. Hypermagnesemia in clinical practice. Medicina (Kaunas). 2023.",
  url: "https://doi.org/10.3390/medicina59071190",
};
const DREBOT: Source = {
  id: "drebot-hps",
  citation: "Drebot MA, Jones S, Grolla A, et al. Hantavirus pulmonary syndrome in Canada. An overview of clinical and diagnostic features, epidemiology and prevention. Can Commun Dis Rep. 2015.",
  url: "https://doi.org/10.14745/ccdr.v41i06a02",
};

const LENDERS: Source = {
  id: "lenders-pheo",
  citation: "Lenders JWM, Duh QY, Eisenhofer G, et al. Pheochromocytoma and paraganglioma. An Endocrine Society clinical practice guideline. J Clin Endocrinol Metab. 2014.",
  url: "https://doi.org/10.1210/jc.2014-1498",
};
const WHITELAW: Source = {
  id: "whitelaw-crisis",
  citation: "Whitelaw BC, Prague JK, Mustafa OG, et al. Phaeochromocytoma crisis. Clin Endocrinol (Oxf). 2014.",
  url: "https://doi.org/10.1111/cen.12324",
};

const PIOPED2: Source = {
  id: "pioped2",
  citation: "Stein PD, Fowler SE, Goodman LR, et al. Multidetector computed tomography for acute pulmonary embolism. N Engl J Med. 2006.",
  url: "https://doi.org/10.1056/NEJMoa052367",
};
const CHESTVTE: Source = {
  id: "chest-vte",
  citation: "Stevens SM, Woller SC, Baumann Kreuziger L, et al. Executive summary. Antithrombotic therapy for VTE disease. Second update of the CHEST guideline and expert panel report. Chest. 2021.",
  url: "https://doi.org/10.1016/j.chest.2021.07.056",
};
const TUCHSCHERER: Source = {
  id: "tuchscherer-toluene",
  citation: "Tuchscherer J, Rehman H. Metabolic acidosis in toluene sniffing. CJEM. 2013.",
  url: "https://doi.org/10.2310/8000.2013.130974",
};
const ATSDRTOL: Source = {
  id: "atsdr-toluene",
  citation: "Agency for Toxic Substances and Disease Registry. Medical management guidelines for toluene. 2014.",
  url: "https://wwwn.cdc.gov/tsp/MMG/MMGDetails.aspx?mmgid=157&toxid=29",
};
const LUZZATTO: Source = {
  id: "luzzatto-g6pd",
  citation: "Luzzatto L, Ally M, Notaro R. Glucose-6-phosphate dehydrogenase deficiency. Blood. 2020.",
  url: "https://doi.org/10.1182/blood.2019000944",
};

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

export const SOB_S51_SAMPS: Samp[] = [
  {
    id: "sob-16",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Throat pain after a fall at home",
    stem:
      "A 71-year-old woman presents to the emergency department 8 hours after she tripped on a rug and struck her chin and the front of her neck on the edge of a kitchen counter. Over the last 3 hours she has had pain on swallowing, a muffled voice and tightness in her throat. She is more breathless lying flat. She takes warfarin for atrial fibrillation. Her INR today is 4.6. She is sitting upright and spitting saliva into a cup. There is bruising over the front of the neck. The posterior pharyngeal wall bulges forward and looks dark purple. There is no stridor. The chest is clear. The cervical spine is not tender.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute irregular", resp: "22/minute", bp: "164/88 mmHg", o2sat: "96% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings best places the cause of her breathlessness in the upper airway?",
        options: [
          "Breathlessness when lying flat",
          "Bulging dark posterior pharyngeal wall",
          "Clear breath sounds in both lungs",
          "Irregular pulse of 104/minute",
          "Oxygen saturation of 96%",
        ],
        correct: 1,
        explanation:
          "A dark, bulging posterior pharyngeal wall shows a mass directly behind the airway, and it fits with her muffled voice, painful swallowing and pooled saliva. Breathlessness when lying flat occurs with heart failure as well as upper airway narrowing, so it does not place the problem. Clear lungs make a lower airway cause less likely but do not show where the obstruction is. The irregular pulse reflects her known atrial fibrillation. A normal saturation does not measure how narrow the airway has become.",
        keyFeature: { topic: "sob", n: 1 },
        source: "eskander",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her throat symptoms and breathlessness?",
        options: [
          "Acute epiglottitis",
          "Angioedema of the pharynx",
          "Cervical esophageal perforation",
          "Retropharyngeal abscess",
          "Retropharyngeal hematoma",
        ],
        correct: 4,
        explanation:
          "A blow to the front of the neck, bruising over the neck and a dark purple swelling of the posterior pharyngeal wall in a woman with an INR of 4.6 point to bleeding into the retropharyngeal space. Minor trauma is enough to cause this in a patient taking warfarin, and the hematoma can compromise the airway. A retropharyngeal abscess develops over days with fever, and she is afebrile. Epiglottitis follows a febrile sore throat and does not bruise the neck. Angioedema swells the lips, tongue or uvula rather than the posterior pharyngeal wall. Esophageal perforation follows forceful vomiting or instrumentation, which she has not had.",
        keyFeature: { topic: "sob", n: 1 },
        source: "akoglu",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT of the neck confirms a large retropharyngeal hematoma narrowing the oropharyngeal airway. Anesthesia and otolaryngology are on their way to plan her airway.",
        prompt: "Which of the following treatments should be given now while the airway team prepares?",
        options: [
          "Frozen plasma 4 units IV",
          "Hold warfarin and repeat the INR",
          "PCC 2 000 units and vitamin K 10 mg IV",
          "tranexamic acid 1 g IV alone",
          "vitamin K 10 mg IV alone",
        ],
        correct: 2,
        explanation:
          "An INR of 4.6 lets the hematoma keep growing toward complete obstruction, so warfarin must be reversed at once. The National Advisory Committee on Blood and Blood Products gives 2 000 units of prothrombin complex concentrate (PCC) as a sample dose for an INR of 3 to 5, with IV vitamin K given at the same time, since vitamin K starts to lower the INR only after about 6 hours. Vitamin K alone is therefore too slow. The committee calls plasma for warfarin reversal inappropriate. Tranexamic acid does not replace the missing clotting factors. Holding warfarin and waiting lets the INR fall over days.",
        keyFeature: { topic: "sob", n: 3 },
        source: "nac-pcc",
      },
    ],
    sources: [ESKANDER, AKOGLU, NACPCC],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-17",
    topic: "sob",
    alsoTopics: ["environmental"],
    title: "Found at the bottom of the pool",
    stem:
      "A 17-year-old boy is brought to the emergency department by ambulance after a lifeguard pulled him from the bottom of a public swimming pool. He is a strong competitive swimmer. His friends say he had been swimming lengths underwater on one breath, after breathing fast and deep at the wall for a minute to stay under longer. He did not dive. He was not breathing for about 1 minute and started breathing after two rescue breaths, then coughed and vomited pool water. He has not vomited since. His friends say he used no alcohol or drugs. He is alert and oriented. He coughs pink frothy sputum. There are crackles throughout both lungs without wheeze. There is no sign of head or neck injury.",
    vitals: { temperature: "36.1°C tympanic", pulse: "118/minute", resp: "32/minute", bp: "126/74 mmHg", o2sat: "88% on 15 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support for him now?",
        options: [
          "Bag-valve-mask ventilation",
          "High flow nasal oxygen at 40 L/minute",
          "Noninvasive ventilation by face mask",
          "Rapid sequence intubation",
          "Venturi mask at 60% oxygen",
        ],
        correct: 2,
        explanation:
          "He is alert, protecting his airway and no longer vomiting, but he stays hypoxemic on a nonrebreather mask because aspirated water has flooded his alveoli. The Wilderness Medical Society notes that noninvasive positive pressure ventilation has been used successfully in alert drowning patients with mild to moderate respiratory symptoms, with caution in those who are vomiting or confused. A Venturi mask gives less oxygen than he already receives. High flow nasal oxygen adds only a small and variable positive pressure. Intubation is kept for a falling level of consciousness or failure of noninvasive support. Bag-mask ventilation is for a patient who is not breathing adequately.",
        keyFeature: { topic: "sob", n: 3 },
        source: "wms-drowning",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following medications should be started now to treat the lung injury from drowning?",
        select: 1,
        options: [
          "ceftriaxone IV",
          "dexamethasone IV",
          "furosemide IV",
          "methylprednisolone IV",
          "piperacillin-tazobactam IV",
          "salbutamol by inhaler",
          "None",
        ],
        correct: [6],
        explanation:
          "The Wilderness Medical Society finds no evidence to support antibiotics or corticosteroids for the initial treatment of drowning. Ceftriaxone, piperacillin-tazobactam, dexamethasone and methylprednisolone therefore add risk without benefit. Antibiotics are considered later only if signs of pneumonia develop. Furosemide treats volume overload, which a healthy teenager who has just aspirated water does not have. Salbutamol treats bronchospasm, and he has crackles without wheeze. Support with oxygen and positive pressure is the treatment.",
        keyFeature: { topic: "sob", n: 3 },
        source: "wms-drowning",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "After 1 hour of noninvasive ventilation at an FiO2 of 0.6, his O2 saturation is 93% and his pulse is 112/minute. He still has crackles in both lungs and pink frothy sputum. He has become drowsy and has vomited once into the mask.",
        prompt: "Which of the following findings best shows that noninvasive ventilation is no longer safe for him?",
        options: [
          "Crackles still heard in both lungs",
          "Drowsiness with vomiting into the mask",
          "O2 saturation of 93% on an FiO2 of 0.6",
          "Pink frothy sputum with coughing",
          "Pulse of 112/minute",
        ],
        correct: 1,
        explanation:
          "A falling level of consciousness with vomiting means he can no longer protect his airway under a tight mask, and the Wilderness Medical Society warns that noninvasive ventilation carries a higher risk of vomiting and aspiration in a drowning patient with altered mental status. He now needs intubation. His saturation of 93% has improved on support. Crackles and frothy sputum are expected while aspirated water clears and do not by themselves mean failure. A pulse of 112/minute has fallen from 118/minute.",
        keyFeature: { topic: "sob", n: 4 },
        source: "wms-drowning",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains why he lost consciousness under water?",
        options: [
          "Arrhythmia from a long QT syndrome",
          "Cold shock from sudden immersion",
          "Hypoglycemia during hard exercise",
          "Hypoxic blackout after hyperventilating",
          "Seizure from new onset epilepsy",
        ],
        correct: 3,
        explanation:
          "Breathing fast and deep before swimming underwater lowers his carbon dioxide, which delays the urge to surface. His oxygen falls first, and he loses consciousness under water without warning. In a New York State series, these dangerous breath-holding behaviours mainly affected advanced swimmers, and all the deaths were in swimmers aged 17 to 22 years. Cold shock occurs in the first minutes after sudden immersion in cold water, and he had been swimming lengths. Nothing in his history suggests hypoglycemia or a seizure disorder. A long QT arrhythmia remains possible in any unexplained drowning, but his breath-holding history explains this event.",
        keyFeature: { topic: "sob", n: 2 },
        source: "boyd-breath-hold",
      },
    ],
    sources: [WMSDROWN, BOYDBH],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-18",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Coughing spells in a young infant",
    stem:
      "A 7-week-old girl is brought to the emergency department by her parents with 10 days of cough. For 4 days she has had coughing spells that end in vomiting. Twice today her face turned blue during a spell and she stopped breathing for several seconds until her mother picked her up. She has had no fever. She was born at term and has not yet had any vaccines. Her mother did not receive a pertussis vaccine in pregnancy. Her 12-year-old brother has had a cough for 3 weeks. Between spells she looks well and feeds. Her chest is clear.",
    vitals: { temperature: "37.0°C rectal", pulse: "156/minute", resp: "48/minute", o2sat: "97% on room air", weight: "4.4 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her illness most indicates that her disease is severe?",
        options: [
          "Absence of fever",
          "Brother with a long cough",
          "Clear chest between spells",
          "Cyanosis and apnea with coughing",
          "Vomiting after coughing spells",
        ],
        correct: 3,
        explanation:
          "Apnea and cyanosis with coughing spells mark severe pertussis in a young infant. In a Quebec series of children with pertussis, every reported episode of apnea occurred in infants under 3 months of age, and 92% of those infants needed hospital care. Vomiting after coughing spells is common in pertussis and supports the diagnosis without marking severity. A clear chest and no fever are typical of pertussis without complications. Her brother is the likely source, but his cough says nothing about how sick she is.",
        keyFeature: { topic: "sob", n: 4 },
        source: "desjardins",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate antibiotic plan while her pertussis test result is pending?",
        options: [
          "azithromycin 44 mg PO daily for 5 days",
          "azithromycin 44 mg PO once PCR is positive",
          "ceftriaxone 220 mg IV daily",
          "doxycycline 9 mg PO twice daily",
          "trimethoprim-sulfamethoxazole PO twice daily",
        ],
        correct: 0,
        explanation:
          "Treatment should start on clinical suspicion in a young infant rather than after the PCR result. The CDC regimen for infants under 6 months is azithromycin 10 mg/kg once daily for 5 days, which is 44 mg for her 4.4 kg. In a California case-control study, infants who died of pertussis were less likely to have received a macrolide, so a delay matters. Trimethoprim-sulfamethoxazole should not be given under 2 months of age because of the risk of kernicterus. Ceftriaxone and doxycycline are not among the recommended agents for pertussis, and doxycycline is not used in infants.",
        keyFeature: { topic: "sob", n: 3 },
        source: "tiwari",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this infant?",
        options: [
          "Admit to a monitored bed",
          "Discharge with a home apnea monitor",
          "Discharge with review tomorrow",
          "Observe 4 hours in the department",
          "Transfer for elective intubation",
        ],
        correct: 0,
        explanation:
          "An infant under 3 months with apnea and cyanosis during coughing spells needs admission with continuous cardiorespiratory monitoring, because further spells can be prolonged and are often unwitnessed at home. In the Quebec series, 92% of infants under 3 months were admitted and 28% needed intensive care. A home apnea monitor or a review tomorrow leaves her without trained help at the next spell. Four hours of observation is too short to see the pattern of her spells. Elective intubation is not needed while she recovers from each spell and breathes well between them.",
        keyFeature: { topic: "sob", n: 3 },
        source: "desjardins",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Her CBC shows a white cell count of 52 x 10^9/L with 78% lymphocytes. Hemoglobin and platelets are normal. Her nasopharyngeal PCR later confirms Bordetella pertussis.",
        prompt: "Which of the following best describes the significance of her white cell count?",
        options: [
          "Bacterial superinfection needing broader antibiotics",
          "Expected finding with no prognostic value",
          "Marker of high risk of a fatal course",
          "Sign of leukemia needing a marrow biopsy",
          "Stress response to repeated vomiting",
        ],
        correct: 2,
        explanation:
          "A white cell count of 52 x 10^9/L with a marked lymphocytosis signals severe pertussis. In a California case-control study of young infants, a higher peak white cell count independently predicted death, and fatal cases more often developed pulmonary hypertension. She needs close monitoring and early involvement of a pediatric intensive care team. A lymphocyte predominance is not the pattern of a bacterial superinfection. Normal hemoglobin and platelets argue against leukemia. Vomiting does not produce a lymphocytosis of this size.",
        keyFeature: { topic: "sob", n: 4 },
        source: "winter",
      },
    ],
    sources: [DESJARDINS, TIWARI, WINTER],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    title: "Breathless and sweating after a clinic visit",
    stem:
      "A 44-year-old woman is brought to the emergency department by ambulance with 40 minutes of severe shortness of breath, a pounding headache, palpitations and sweating. An hour ago an urgent care clinic gave her metoclopramide 10 mg IV for nausea, and her symptoms began 20 minutes later. For 6 months she has had brief spells of headache, racing heart and sweating, which were labelled panic attacks. High BP was found at a pharmacy last month. She takes no medications. She is pale, sweaty and tremulous. There is no goitre. There are crackles to the mid lung fields. The JVP is not raised. The ECG shows sinus tachycardia without ST changes.",
    vitals: { temperature: "37.8°C oral", pulse: "138/minute", resp: "32/minute", bp: "238/134 mmHg", o2sat: "88% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her pulmonary edema?",
        options: [
          "Acute coronary syndrome",
          "Catecholamine crisis from a pheochromocytoma",
          "Essential hypertension with a BP surge",
          "Panic attack with hyperventilation",
          "Thyroid storm from a toxic goitre",
        ],
        correct: 1,
        explanation:
          "Months of brief spells of headache, palpitations and sweating, new hypertension, and a crisis that began soon after a dose of metoclopramide point to a catecholamine surge from a pheochromocytoma. Drugs such as metoclopramide are recognized triggers of a crisis, which can present with severe hypertension and pulmonary edema. Essential hypertension does not explain the months of spells or the trigger. Panic does not cause crackles, hypoxemia or a BP of this level. There is no goitre to suggest thyroid storm. The ECG shows no ST changes to suggest an acute coronary syndrome, although troponin should still be checked.",
        keyFeature: { topic: "sob", n: 2 },
        source: "whitelaw-crisis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests is most useful to confirm the underlying cause of her crisis?",
        options: [
          "Aldosterone to renin ratio",
          "Morning serum cortisol level",
          "Plasma free metanephrines",
          "TSH and free thyroxine",
          "Urine 5-HIAA over 24 hours",
        ],
        correct: 2,
        explanation:
          "The Endocrine Society recommends plasma free metanephrines or urinary fractionated metanephrines as the first test for pheochromocytoma, because tumours release metanephrines continuously even between spells. An aldosterone to renin ratio screens for primary aldosteronism, which causes hypertension without these spells. A morning cortisol looks for adrenal insufficiency or Cushing syndrome, which do not explain her paroxysms. Urine 5-HIAA looks for carcinoid tumours, which cause flushing and diarrhea. Thyroid tests are reasonable in a tachycardic patient, but she has no goitre, and they do not confirm the cause suggested by her spells and trigger.",
        keyFeature: { topic: "sob", n: 2 },
        source: "lenders-pheo",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to lower her BP now?",
        options: [
          "esmolol 500 mcg/kg IV bolus",
          "furosemide 80 mg IV",
          "labetalol 20 mg IV",
          "metoprolol 5 mg IV",
          "phentolamine 5 mg IV",
        ],
        correct: 4,
        explanation:
          "Alpha-adrenergic blockade treats the cause of the crisis, and its use is strongly associated with survival. Phentolamine is a short-acting IV alpha blocker that can be repeated to control her BP, and a beta blocker is added only after alpha blockade to control the heart rate. Metoprolol, esmolol and labetalol, which has much more beta than alpha effect, can leave alpha stimulation unopposed and worsen the vasoconstriction. Furosemide is not the answer because a catecholamine crisis often leaves patients volume depleted, and her JVP is not raised.",
        keyFeature: { topic: "sob", n: 3 },
        source: "whitelaw-crisis",
      },
    ],
    sources: [WHITELAW, LENDERS],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-21",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Fever and breathlessness at 31 weeks",
    stem:
      "A 29-year-old woman, G2P1 at 31 weeks gestation, presents to the emergency department with 3 days of fever, cough and muscle aches and 1 day of worsening shortness of breath. Her 3-year-old son had influenza A confirmed last week. She did not receive an influenza vaccine this season. The pregnancy has been uncomplicated and she takes a prenatal vitamin. She speaks in short sentences. There are crackles at the right lung base. The uterus is soft and nontender. The fetal heart rate is 165/minute.",
    vitals: { temperature: "39.1°C oral", pulse: "122/minute", resp: "30/minute", bp: "106/64 mmHg", o2sat: "90% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "On 4 L/minute by nasal prongs her O2 saturation is 93%. Arterial gas: pH 7.32, PaCO2 40 mmHg, PaO2 68 mmHg, HCO3 20 mmol/L.",
        prompt: "Which of the following best interprets her arterial blood gas?",
        options: [
          "Acute respiratory acidosis from fatigue",
          "Compensated respiratory alkalosis of pregnancy",
          "Metabolic acidosis from lactate",
          "Normal gas for the third trimester",
          "Primary metabolic alkalosis",
        ],
        correct: 0,
        explanation:
          "Normal pregnancy lowers the arterial PCO2 to about 30 mmHg or less, with a bicarbonate of 18 to 22 mmol/L and a pH near 7.44. A PaCO2 of 40 mmHg in a woman breathing 30 times a minute is therefore high for her, and a pH of 7.32 shows an acute respiratory acidosis. She is tiring. Reading 40 mmHg as normal misses early ventilatory failure. Her bicarbonate of 20 mmol/L is expected in pregnancy, so there is no primary metabolic acidosis or alkalosis. The compensated respiratory alkalosis of pregnancy has a pH above 7.40.",
        keyFeature: { topic: "sob", n: 4 },
        source: "soma-pillay",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate antiviral plan for her now?",
        options: [
          "oseltamivir after a positive swab",
          "oseltamivir 75 mg PO daily",
          "oseltamivir 75 mg PO twice daily now",
          "zanamivir 10 mg inhaled twice daily",
          "No antiviral after 48 hours of illness",
        ],
        correct: 2,
        explanation:
          "She is pregnant, hypoxemic and tiring, which is severe and progressive influenza. AMMI Canada advises empiric antiviral treatment for severe, complicated or progressive illness regardless of the time since symptoms began, prescribed as soon as possible without waiting for laboratory confirmation. The treatment dose is oseltamivir 75 mg by mouth twice daily for 5 days. Once daily dosing is a prophylaxis dose. Waiting for a swab result delays treatment in a woman who is getting worse. Inhaled zanamivir is hard to deliver to a woman breathing 30 times a minute.",
        keyFeature: { topic: "sob", n: 3 },
        source: "ammi-flu",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Two hours later she is drowsy and hard to rouse. Her O2 saturation is 86% on 15 L/minute by nonrebreather mask. Arterial gas: pH 7.22, PaCO2 54 mmHg.",
        prompt: "Which of the following is the most appropriate respiratory management for her now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Emergency caesarean delivery first",
          "High flow nasal oxygen",
          "Rapid sequence intubation",
          "Repeat the gas in 1 hour",
        ],
        correct: 3,
        explanation:
          "A falling level of consciousness with worsening hypercapnic acidosis and refractory hypoxemia means she needs intubation now. Noninvasive ventilation depends on a patient who is awake, cooperative and able to protect her airway, and a drowsy woman in late pregnancy is at high risk of aspiration. High flow nasal oxygen does not treat ventilatory failure. Waiting an hour risks maternal arrest and fetal hypoxia. Delivery does not treat her pneumonia and should not come before securing her airway and oxygenation.",
        keyFeature: { topic: "sob", n: 3 },
        source: "niv",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "After intubation her BP falls to 84/50 mmHg while she lies flat on her back.",
        prompt: "Which of the following is the most appropriate first step to restore her blood pressure?",
        options: [
          "Displace the uterus to the left",
          "norepinephrine infusion IV",
          "phenylephrine 100 mcg IV",
          "Raise the head of the bed",
          "Saline 2 L IV bolus",
        ],
        correct: 0,
        explanation:
          "At 31 weeks, the uterus compresses the inferior vena cava when she lies on her back, which cuts venous return, and turning from the lateral to the supine position can lower cardiac output by about 25%. Relieving that compression by displacing the uterus to the left, or tilting her to the left, is the first step and costs nothing. A vasopressor may still be needed if her pressure stays low, but it does not remove the obstruction to venous return. A 2 L bolus risks pulmonary edema in a woman with pneumonia and hypoxemia. Raising the head of the bed does not relieve caval compression.",
        keyFeature: { topic: "sob", n: 3 },
        source: "soma-pillay",
      },
    ],
    sources: [SOMAPILLAY, AMMIFLU, NIV],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-22",
    topic: "sob",
    alsoTopics: ["analgesia-sedation"],
    title: "Breathless after day surgery",
    stem:
      "A 66-year-old man presents to the emergency department at 21:00 with 4 hours of increasing shortness of breath. This morning he had day surgery to repair a torn rotator cuff in his right shoulder under general anesthesia with an interscalene nerve block. He has COPD with an FEV1 of 55% predicted and a BMI of 36 kg/m2. His right arm is still numb and weak. He has no chest pain, fever, cough or change in sputum. He breathes more easily sitting up. He is alert. There are decreased breath sounds at the right base without wheeze or crackles. The JVP is not raised. Compared with his film from last month, today's chest radiograph shows a newly raised right hemidiaphragm, with no pneumothorax or consolidation.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "26/minute", bp: "148/86 mmHg", o2sat: "89% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shortness of breath?",
        options: [
          "Aspiration pneumonitis",
          "COPD exacerbation",
          "Opioid hypoventilation",
          "Pneumothorax from the block",
          "Right phrenic nerve block",
        ],
        correct: 4,
        explanation:
          "The phrenic nerve arises from C3 to C5, close to where an interscalene block is placed, and the block commonly paralyzes the diaphragm on the same side. His still numb and weak right arm shows the block is still working, and the newly raised right hemidiaphragm with reduced breath sounds at that base fits. His COPD and obesity leave little reserve to cope with the loss of one hemidiaphragm. The radiograph shows no pneumothorax. He has no fever, consolidation, wheeze or new sputum to suggest aspiration or a COPD exacerbation. He is alert and breathing 26 times a minute, which argues against opioid hypoventilation.",
        keyFeature: { topic: "sob", n: 2 },
        source: "el-boghdadly",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following bedside tests would best confirm the cause of his shortness of breath?",
        options: [
          "Arterial blood gas on room air",
          "Diaphragm ultrasound during a sniff",
          "Lung ultrasound for B lines",
          "Peak expiratory flow rate",
          "Spirometry at the bedside",
        ],
        correct: 1,
        explanation:
          "Ultrasound of the right hemidiaphragm during a sniff shows reduced, absent or paradoxical movement when the phrenic nerve is blocked. In the study that established this, every patient given an interscalene block developed paradoxical motion of the hemidiaphragm on the block side within minutes. A blood gas measures the effect on gas exchange but not its cause. B lines point to pulmonary edema. Peak flow and spirometry are already reduced by his COPD and cannot show which hemidiaphragm is failing.",
        keyFeature: { topic: "sob", n: 2 },
        source: "urmey",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Ultrasound shows paradoxical motion of the right hemidiaphragm. Arterial gas on 1 L/minute by nasal prongs: pH 7.37, PaCO2 47 mmHg, PaO2 62 mmHg. He remains alert.",
        prompt: "Which of the following is the most appropriate management for him now?",
        options: [
          "Bilevel noninvasive ventilation",
          "Rapid sequence intubation",
          "Right chest tube insertion",
          "salbutamol and prednisone",
          "Upright position with controlled oxygen",
        ],
        correct: 4,
        explanation:
          "His pH is normal, he is alert and his saturation responds to low flow oxygen, so he can be supported while the block wears off. He breathes better sitting up, and the BTS guideline advises a target saturation of 88 to 92% in COPD to avoid oxygen induced hypercapnia. Noninvasive ventilation is for acidotic hypercapnic respiratory failure, which he does not have. Intubation is not needed in an alert patient with a normal pH. There is no pneumothorax to drain. Salbutamol and prednisone treat bronchospasm, and he has no wheeze.",
        keyFeature: { topic: "sob", n: 3 },
        source: "bts-o2",
      },
    ],
    sources: [ELBOGHDADLY, URMEY, BTSO2],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-23",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Pleuritic pain three weeks after gallbladder surgery",
    stem:
      "A 41-year-old woman presents to the emergency department with 2 days of right sided pleuritic chest pain and shortness of breath. She had a laparoscopic cholecystectomy 3 weeks ago. She has no personal history of venous thromboembolism or cancer. She has no hemoptysis, cough or fever and takes no medications. Her legs are not swollen or tender. The chest is clear. The ECG shows sinus tachycardia and the chest radiograph is normal. Her creatinine is normal and she has no contrast allergy. PE is your leading diagnosis.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "22/minute", bp: "124/76 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is this patient's Wells score for pulmonary embolism?",
        options: ["3 points", "4.5 points", "6 points", "7.5 points", "9 points"],
        correct: 2,
        explanation:
          "She scores 3 because PE is the most likely diagnosis, 1.5 for a heart rate above 100/minute and 1.5 for surgery within 4 weeks, a total of 6. She has no previous VTE, cancer, hemoptysis or signs of DVT. That makes PE likely, and on the three level scale a score of 2 to 6 is moderate. A score of 4.5 leaves out either the heart rate or the surgery, and 3 counts only the leading diagnosis. A score of 7.5 counts surgery and immobilization as two items, although they form one. A score of 9 adds 3 points for signs of DVT, and her legs are normal.",
        keyFeature: { topic: "sob", n: 5 },
        source: "wells-2000",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT pulmonary angiography shows no central or lobar PE. The radiologist reports that breathing motion prevented assessment of the segmental and subsegmental arteries. Her pulse is still 108/minute and her O2 saturation 93%.",
        prompt: "Which of the following is the most appropriate next step in the evaluation for pulmonary embolism?",
        options: [
          "D-dimer to decide on discharge",
          "Discharge with outpatient follow up",
          "Echocardiography to exclude PE",
          "Repeat CT angiogram in 1 week",
          "Ventilation perfusion scan",
        ],
        correct: 4,
        explanation:
          "A CT that could not assess the segmental arteries is not a negative study. With a Wells score of 6, PE is still likely. Thrombosis Canada advises further testing with a V/Q scan or proximal leg ultrasound when suspicion stays high after a negative initial CT, and her normal chest radiograph makes a V/Q scan likely to give a clear answer. A D-dimer has no role at this pretest probability. Discharge treats an incomplete study as a normal one. Echocardiography can support PE in an unstable patient but cannot exclude it in a stable one, and waiting a week leaves a possible PE untreated.",
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
          "Her Wells score of 6 is moderate, and serial compression ultrasound of the legs was shown to be safe after a V/Q scan that is neither normal nor high probability when pretest probability is low or moderate. Finding a proximal DVT confirms that she needs anticoagulation, and repeated normal studies make a clinically important PE unlikely. A single normal study is not enough, because a calf clot can extend into the proximal veins over the following days. Treating for 3 months commits her to anticoagulation and its bleeding risk without a diagnosis. Discharge ignores a nondiagnostic result, and repeating the V/Q scan does not resolve the uncertainty.",
        keyFeature: { topic: "sob", n: 5 },
        source: "wells-1998",
      },
    ],
    sources: [TCPE, WELLS2000, WELLS1998],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-24",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Breathless after a household flu",
    stem:
      "A 52-year-old man presents to the emergency department with 5 days of shortness of breath on exertion, a dry cough and aching muscles. His wife and son had a flu-like illness last week. He has hypertension treated with ramipril. He has no previous VTE, cancer, recent surgery, immobilization, hemoptysis or leg symptoms. His chest is clear and his legs look and feel normal. The ECG shows sinus rhythm and the chest radiograph is normal. You judge a viral illness to be more likely than PE. A triage protocol for shortness of breath has already ordered a CT pulmonary angiogram, which has not yet been done.",
    vitals: { temperature: "37.8°C oral", pulse: "96/minute", resp: "20/minute", bp: "138/84 mmHg", o2sat: "96% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his evaluation for PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram as ordered",
          "D-dimer before any imaging",
          "Ventilation perfusion scan",
          "No further testing for PE",
        ],
        correct: 2,
        explanation:
          "His Wells score is 0. His pulse of 96/minute is below 100/minute, he has none of the other items, and PE is not the most likely diagnosis. Thrombosis Canada advises a D-dimer as the first test when PE is unlikely, and a negative result excludes PE without imaging. Going straight to CT exposes him to contrast, radiation and the false positive results that come with a low pretest probability. Stopping without any test would rest on the PERC rule, which cannot be used because he is older than 49 years. Leg ultrasound and a ventilation perfusion scan are imaging tests that a negative D-dimer could make unnecessary.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT pulmonary angiography shows a single small filling defect in one subsegmental artery of the right lower lobe, with no other defect and a normal right ventricle.",
        prompt: "Which of the following features most lowers the likelihood that this filling defect is a true PE?",
        options: [
          "Age of 52 years",
          "Normal chest radiograph",
          "Normal right ventricle on CT",
          "Oxygen saturation of 96%",
          "Wells score of 0",
        ],
        correct: 4,
        explanation:
          "A positive CT result is less reliable when the clinical probability is low. In PIOPED II the positive predictive value of CT angiography was 96% with a high clinical probability but only 58% with a low one, so his Wells score of 0 makes a false positive result a real possibility. A saturation of 96% on room air is common in PE, which often causes no hypoxemia. A normal chest radiograph is common in PE and does not lower its likelihood. A normal right ventricle shows that any clot is small, not that it is absent. His age does not lower the likelihood of PE.",
        keyFeature: { topic: "sob", n: 5 },
        source: "pioped2",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next test for him?",
        options: [
          "Bilateral leg compression ultrasound",
          "Echocardiogram for right heart strain",
          "MR pulmonary angiogram",
          "Repeat CT angiogram in 24 hours",
          "Troponin and BNP levels",
        ],
        correct: 0,
        explanation:
          "The CHEST guideline advises bilateral leg compression ultrasound for patients with a subsegmental PE, whether or not the legs have symptoms. A proximal DVT confirms venous thromboembolism that needs treatment, whatever the CT shows. With no proximal DVT and a low risk of recurrence, the guideline suggests clinical surveillance over anticoagulation. An echocardiogram, troponin or BNP measures strain on the heart but cannot confirm or refute a small clot. A repeat CT adds radiation without settling the question. MR angiography is less accurate than CT and is not a standard test here.",
        keyFeature: { topic: "sob", n: 5 },
        source: "chest-vte",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Further testing finds a thrombus in the right popliteal vein. His hemoglobin, platelets and creatinine are normal and he has no bleeding risk factors.",
        prompt: "Which of the following is the most appropriate management for him now?",
        options: [
          "Clinical surveillance with repeat ultrasound",
          "IVC filter without anticoagulation",
          "Repeat CT angiogram in 1 week",
          "Start anticoagulation for 3 months or more",
          "Systemic alteplase infusion",
        ],
        correct: 3,
        explanation:
          "A thrombus in the popliteal vein is a proximal DVT. It confirms venous thromboembolism, which needs anticoagulation for at least 3 months whatever the CT showed. The CHEST guideline keeps clinical surveillance for a subsegmental PE with no proximal DVT and a low risk of recurrence, and he now has a proximal DVT. An IVC filter is for patients who cannot be anticoagulated, and he has no bleeding risk. Systemic thrombolysis is for PE with hypotension, and he is stable. Repeating the CT does not change the need to treat his DVT.",
        keyFeature: { topic: "sob", n: 3 },
        source: "chest-vte",
      },
    ],
    sources: [TCPE, PIOPED2, CHESTVTE],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-25",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "A barking cough that keeps getting worse",
    stem:
      "A 5-year-old boy is brought to the emergency department by his parents with a barking cough and noisy breathing. Five days ago he had fever, cough and aches, and his sister had influenza B confirmed that week. He had been improving until last night, when his fever rose again and his breathing became noisy. This morning a walk-in clinic gave him oral dexamethasone for croup. Since then he has become more unwell. He is fully immunized. He is sitting up, pale and ill looking, and coughs up thick yellow secretions. He has inspiratory stridor at rest with suprasternal retractions. He is not drooling.",
    vitals: { temperature: "39.8°C rectal", pulse: "156/minute", resp: "38/minute", o2sat: "93% on room air", weight: "19 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most suggests a cause of his stridor other than viral croup?",
        options: [
          "Barking cough with hoarseness",
          "High fever with a toxic look",
          "Inspiratory stridor at rest",
          "Retractions above the sternum",
          "Worse breathing overnight",
        ],
        correct: 1,
        explanation:
          "Children with bacterial tracheitis have higher fevers and look more unwell than children with viral croup, and the illness often follows influenza or parainfluenza. A child who worsens with a high fever and a toxic appearance after a viral illness should be assessed for it. A barking cough with hoarseness, stridor at rest and suprasternal retractions occur in both croup and tracheitis, so they do not separate them. Croup symptoms are also often worse at night.",
        keyFeature: { topic: "sob", n: 1 },
        source: "al-mutairi",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "He receives nebulized epinephrine 5 mL of 1 mg/mL with little change in his stridor. A lateral neck radiograph shows subglottic narrowing with ragged, irregular edges along the tracheal wall.",
        prompt: "Which of the following is the most likely diagnosis in this child?",
        options: [
          "Bacterial tracheitis",
          "Foreign body in the trachea",
          "Retropharyngeal abscess",
          "Severe viral croup",
          "Supraglottitis",
        ],
        correct: 0,
        explanation:
          "A poor response to epinephrine and a corticosteroid, a high fever, purulent secretions and irregular tracheal margins on the lateral film point to bacterial tracheitis. It should be considered in any child with croup that does not respond to usual treatment, and the lateral view may show haziness and irregularity of the tracheal wall. Severe viral croup usually improves at least briefly after epinephrine. Supraglottitis causes drooling and difficulty swallowing, which he does not have. A retropharyngeal abscess causes neck stiffness and pain on swallowing rather than a barking cough. A foreign body does not cause a febrile illness after influenza.",
        keyFeature: { topic: "sob", n: 1 },
        source: "al-mutairi",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following additional investigations is most likely to change his management now?",
        options: [
          "Chest radiograph",
          "CT of the neck with contrast",
          "Rapid influenza antigen test",
          "Serum procalcitonin",
          "Throat swab for strep",
        ],
        correct: 0,
        explanation:
          "Chest radiographs show pneumonia in more than half of children with bacterial tracheitis, and finding it changes oxygen needs, antibiotic plans and the level of care. A contrast CT of the neck needs him to lie flat and still, which is unsafe with stridor at rest, and adds little once the lateral film shows tracheal disease. An influenza test will not change management after his sister's confirmed case and his course. A strep swab looks for pharyngitis, not tracheal infection. Procalcitonin will not change the need for antibiotics in a child who already needs them.",
        keyFeature: { topic: "sob", n: 2 },
        source: "al-mutairi",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Despite oxygen, his O2 saturation falls to 88% and his retractions worsen. He is tiring and has thick secretions pooling in his mouth.",
        prompt: "Which of the following is the most appropriate next step in his airway management?",
        options: [
          "Heliox by face mask",
          "High flow nasal cannula",
          "Noninvasive ventilation by mask",
          "Repeat nebulized epinephrine",
          "Tracheal intubation and suctioning",
        ],
        correct: 4,
        explanation:
          "A tiring child with worsening hypoxemia and thick secretions blocking the trachea needs a secure airway, and intubation allows the purulent secretions to be suctioned directly. Many children with bacterial tracheitis need intubation, and the decision is made on the degree of obstruction. Heliox and high flow nasal oxygen may ease the work of breathing but do nothing for secretions in the tracheal lumen. Noninvasive ventilation pushes gas against a narrowed, secretion-filled trachea. Nebulized epinephrine has already failed to help.",
        keyFeature: { topic: "sob", n: 3 },
        source: "al-mutairi",
      },
    ],
    sources: [ALMUTAIRI],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-26",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Not helped by her new inhaler",
    stem:
      "A 49-year-old woman presents to the emergency department with 6 weeks of worsening shortness of breath and noisy breathing on exertion. Three months ago she spent 14 days intubated in the ICU for influenza pneumonia. A walk-in clinic diagnosed asthma 4 weeks ago, and neither salbutamol nor a 5-day course of prednisone helped. She has never smoked and had no breathing problems before that illness. She speaks in full sentences. A harsh noise is heard on both inspiration and expiration, loudest over the front of the neck, and the lung fields are otherwise clear. Her chest radiograph is normal. Peak expiratory flow is 190 L/minute and does not change after salbutamol.",
    vitals: { temperature: "36.8°C oral", pulse: "94/minute", resp: "22/minute", bp: "132/80 mmHg", o2sat: "96% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her breathlessness?",
        options: ["Asthma resistant to steroids", "Cardiac asthma from heart failure", "Inducible laryngeal obstruction", "Post-intubation tracheal stenosis", "Pulmonary embolism"],
        correct: 3,
        explanation: "Progressive exertional dyspnea with a harsh noise on both inspiration and expiration, loudest over the neck, after 14 days of intubation and with no response to salbutamol or prednisone, points to a fixed narrowing of the trachea. Prolonged intubation is a leading cause of laryngotracheal stenosis, and the condition is often misdiagnosed as asthma. Asthma did not precede her ICU stay, and its wheeze is heard over the lung fields rather than the neck. Inducible laryngeal obstruction causes episodic, mainly inspiratory symptoms with triggers rather than steady progression. Heart failure would be expected to show on her chest radiograph. Pulmonary embolism does not produce a harsh noise over the trachea.",
        keyFeature: { topic: "sob", n: 1 },
        source: "klopper-lts",
      },
      {
        id: "q2",
        kind: "single",
        update: "Spirometry with a flow-volume loop is arranged.",
        prompt: "Which of the following flow-volume loop patterns is most likely in this patient?",
        options: ["Concave expiratory limb", "Flattened expiratory limb only", "Flattened in both limbs", "Flattened inspiratory limb only", "Small loop of normal shape"],
        correct: 2,
        explanation: "A fixed narrowing, such as a scarred tracheal segment, limits flow equally in both directions, so the loop shows a plateau on both the inspiratory and the expiratory limbs. A plateau on the inspiratory limb alone fits a variable obstruction above the thoracic inlet, such as vocal cord paralysis. A plateau on the expiratory limb alone fits a variable obstruction inside the chest. A concave expiratory limb is the pattern of asthma and COPD. A small loop of normal shape suggests restriction.",
        keyFeature: { topic: "sob", n: 1 },
        source: "ats-ers-2005",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following new findings would most indicate that her airway narrowing has become critical?",
        options: ["Cough with clear sputum", "Normal oxygen saturation", "Stridor at rest", "Voice hoarse for weeks", "Wheeze on exertion only"],
        correct: 2,
        explanation: "Symptoms of laryngotracheal stenosis usually appear first with exertion and then at rest as the lumen narrows, so stridor at rest means flow is limited even at low demand and she needs urgent airway specialist care. Oxygen saturation stays normal until late in upper airway obstruction, so a normal value does not reassure. Noise or wheeze only on exertion describes her present, less severe state. Hoarseness and a cough do not measure how narrow the airway is.",
        keyFeature: { topic: "sob", n: 4 },
        source: "marwaha-2022",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: ["Discharge with an inhaled corticosteroid", "Increase prednisone to 60 mg daily", "Methacholine challenge as an outpatient", "Repeat chest radiograph in 6 weeks", "Urgent airway endoscopy referral"],
        correct: 4,
        explanation: "Direct laryngotracheobronchoscopy is the reference standard that confirms the site, length and severity of the narrowing, and it lets an ENT or thoracic surgeon plan dilation or resection. Her symptoms are progressing despite asthma treatment, so the referral is urgent. More prednisone or an inhaled corticosteroid continues treatment for a disease she does not have. A methacholine challenge tests airway hyperresponsiveness and does not show the narrowing. A plain chest radiograph was normal and does not show the trachea well enough to follow the lesion.",
        keyFeature: { topic: "sob", n: 1 },
        source: "klopper-lts",
      },
    ],
    sources: [KLOPPER, PELLEGRINO, MARWAHA],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "sob-27",
    topic: "sob",
    alsoTopics: ["asthma-copd"],
    title: "Worse breathing in a man with scarred lungs",
    stem:
      "A 74-year-old man presents to the emergency department with 10 days of worsening shortness of breath and dry cough. He has idiopathic pulmonary fibrosis diagnosed 3 years ago and takes nintedanib. He normally walks 2 blocks and uses oxygen only on exertion. He has no fever, chest pain, leg swelling or orthopnea. He lives with his wife and makes his own decisions. He speaks in short phrases. There are fine inspiratory crackles at both lung bases, unchanged from his last clinic note. The JVP is not raised and there is no leg edema.",
    vitals: { temperature: "37.2°C oral", pulse: "108/minute", resp: "30/minute", bp: "136/80 mmHg", o2sat: "85% on 4 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most useful to find the cause of his deterioration?",
        options: [
          "Bronchoscopy with lavage",
          "CT chest with pulmonary angiography",
          "Serum procalcitonin",
          "Sputum bacterial culture",
          "Transthoracic echocardiogram",
        ],
        correct: 1,
        explanation:
          "An acute respiratory deterioration in IPF can come from an acute exacerbation, infection, PE, pneumothorax or heart failure, and the international working group uses CT to separate them. CT with pulmonary angiography shows new bilateral ground glass against his fibrosis and excludes PE and pneumothorax in one test. Bronchoscopy with lavage risks worsening hypoxemia in a man with a saturation of 85% on 4 L/minute. An echocardiogram looks only for a cardiac cause, which his normal JVP and lack of edema make less likely. Sputum culture and procalcitonin cannot show PE, pneumothorax or new ground glass.",
        keyFeature: { topic: "sob", n: 2 },
        source: "collard-aeipf",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT shows new bilateral ground glass opacity over his fibrosis, with no PE, pneumothorax or consolidation. He has never discussed his wishes about life support.",
        prompt: "Which of the following is the most appropriate approach to invasive ventilation for this patient?",
        options: [
          "Discuss its poor outcome and his wishes",
          "Intubate if his saturation falls below 80%",
          "Intubate now before he tires further",
          "Let his wife make the decision",
          "Offer it as a routine bridge to recovery",
        ],
        correct: 0,
        explanation:
          "The ATS/ERS/JRS/ALAT guideline recommends against mechanical ventilation for most patients with respiratory failure from IPF, while accepting it as a reasonable choice for a minority. He can make his own decisions, so the choice is his, after a clear discussion of the likely outcome and of what he values. Intubating now, or at a saturation trigger, commits him to an invasive treatment he has not chosen. His wife does not decide while he is able to decide for himself. Offering intubation as a routine bridge to recovery misstates its expected benefit in this disease.",
        keyFeature: { topic: "sob", n: 3 },
        source: "raghu-ipf",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "He chooses a trial of high flow nasal oxygen. On 50 L/minute at an FiO2 of 0.80, his arterial PaO2 is 56 mmHg.",
        prompt: "Which of the following is closest to his ratio of PaO2 to FiO2 on this support?",
        options: [
          "45",
          "56",
          "70",
          "112",
          "140",
        ],
        correct: 2,
        explanation:
          "The ratio of PaO2 to FiO2 is 56 divided by 0.80, which is 70. A ratio this low confirms severe hypoxemia despite high flow support, and it gives an objective measure of how sick he is that his breathlessness alone cannot. A value of 45 comes from multiplying the PaO2 by the FiO2 instead of dividing. A value of 56 is the PaO2 alone. Values of 112 and 140 come from dividing by an FiO2 of 0.50 or 0.40 instead of 0.80.",
        keyFeature: { topic: "sob", n: 4 },
        source: "collard-aeipf",
      },
    ],
    sources: [COLLARD, RAGHUIPF],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    title: "Weak and breathing fast",
    stem:
      "A 26-year-old man is brought to the emergency department by his roommate with 2 days of worsening shortness of breath and weakness. Since this morning he cannot climb stairs or lift his arms above his head. His roommate says he has inhaled spray paint from a bag most evenings for months. He has had no vomiting, diarrhea or fever. He takes no medications, sedatives or opioids. There is silver paint around his nose and mouth. He is alert. His breathing is fast and shallow and his chest is clear. His limbs are weak with reduced reflexes. Labs: Na 139 mmol/L, K 1.9 mmol/L, Cl 117 mmol/L, HCO3 10 mmol/L, glucose 5.6 mmol/L, creatinine 104 umol/L, calcium 2.30 mmol/L, lactate 1.3 mmol/L, osmolal gap 5 mOsm/kg. Serum ketones are negative.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "32/minute", bp: "112/70 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his acidosis?",
        options: [
          "Diabetic ketoacidosis",
          "Salicylate poisoning",
          "Severe diarrhea",
          "Toluene inhalation",
          "Toxic alcohol ingestion",
        ],
        correct: 3,
        explanation:
          "His anion gap is 139 minus 117 minus 10, which is 12 mmol/L, so this is a normal anion gap acidosis with severe hypokalemia. Toluene in spray paint and glue causes this pattern. It is a recognized cause of distal renal tubular acidosis, and its breakdown product, hippuric acid, is excreted in the urine with sodium and potassium. Diabetic ketoacidosis, salicylate poisoning and a toxic alcohol raise the anion gap, and his glucose, ketones and osmolal gap are normal. Severe diarrhea causes a normal anion gap acidosis with hypokalemia, but he has had none.",
        keyFeature: { topic: "sob", n: 2 },
        source: "tuchscherer-toluene",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Arterial gas on room air: pH 7.09, PaCO2 34 mmHg, HCO3 10 mmol/L.",
        prompt: "Which of the following best describes his respiratory compensation for this metabolic acidosis?",
        options: [
          "Appropriate for the degree of acidosis",
          "Excessive, from a primary respiratory alkalosis",
          "Inadequate, from a central respiratory depressant",
          "Inadequate, from weak respiratory muscles",
          "Not assessable until potassium is normal",
        ],
        correct: 3,
        explanation:
          "By Winter's formula his expected PaCO2 is 1.5 x 10 + 8 = 23 mmHg, plus or minus 2, so 21 to 25 mmHg. His PaCO2 of 34 mmHg is well above that, so his breathing is not keeping pace with the acidosis. With a potassium of 1.9 mmol/L and weak limbs, the weakness is reaching his breathing muscles, and he is at risk of respiratory failure even though his saturation is 97%. A primary respiratory alkalosis would push the PaCO2 below the expected range. He is alert and has taken no sedative or opioid. The gas can be read now, and waiting for a normal potassium would delay recognition of his failing ventilation.",
        keyFeature: { topic: "sob", n: 4 },
        source: "albert-winters",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for his acidosis and electrolyte disorder?",
        options: [
          "calcium gluconate IV",
          "insulin with dextrose IV",
          "potassium replacement IV",
          "salbutamol by nebulizer",
          "sodium bicarbonate IV",
        ],
        correct: 2,
        explanation:
          "Potassium must be replaced first, by IV infusion with cardiac monitoring. The ATSDR guideline for toluene advises that bicarbonate not be given until potassium and calcium are adequately replaced, because alkali drives potassium into cells and can deepen the weakness, including of his breathing muscles. Insulin with dextrose and salbutamol also shift potassium into cells and would make it worse. His calcium of 2.30 mmol/L is normal, so calcium gluconate is not needed. Ventilatory support may still be needed if his breathing weakens further.",
        keyFeature: { topic: "sob", n: 3 },
        source: "atsdr-toluene",
      },
    ],
    sources: [TUCHSCHERER, WINTERS, ATSDRTOL],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-30",
    topic: "sob",
    alsoTopics: ["environmental"],
    title: "A young child who stopped walking",
    stem:
      "You are working in a rural hospital emergency department in the interior of British Columbia in May. A 4-year-old girl is brought in by her parents because she has been unsteady and falling since yesterday. Today she cannot walk or lift her arms well, and her voice is weak. She spent the weekend at a family ranch. She has had no fever, vomiting or diarrhea. She is alert and follows commands. Her legs are floppy with absent knee and ankle reflexes, and her arms are weak. Sensation seems normal. Her cough is weak, and her abdomen moves inward as her chest rises when she breathes in.",
    vitals: { temperature: "36.9°C tympanic", pulse: "124/minute", resp: "34/minute", bp: "98/60 mmHg", o2sat: "96% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings best shows how severely her breathing is affected?",
        options: [
          "Absent knee and ankle reflexes",
          "Oxygen saturation of 96%",
          "Paradoxical breathing and weak cough",
          "Pulse of 124/minute",
          "Unsteady gait since yesterday",
        ],
        correct: 2,
        explanation:
          "A weak cough and inward movement of the abdomen as the chest rises show that the ascending paralysis has reached her breathing muscles, including the diaphragm, and she is at risk of respiratory failure. A saturation of 96% on room air does not measure the strength of those muscles and can stay normal until ventilation fails. Absent reflexes and an unsteady gait describe the neurological deficit but not the threat to her breathing. A fast pulse is nonspecific in a frightened, unwell child.",
        keyFeature: { topic: "sob", n: 4 },
        source: "brown-tick",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "While a nurse brushes her long hair, she finds an engorged tick attached to the scalp behind the right ear.",
        prompt: "Which of the following is the most appropriate treatment for her now?",
        options: [
          "Botulism antitoxin via public health",
          "Cover the tick with petroleum jelly",
          "doxycycline 37 mg PO twice daily",
          "IV immune globulin 2 g/kg",
          "Remove the tick with fine tweezers",
        ],
        correct: 4,
        explanation:
          "Ascending flaccid paralysis with lost reflexes over 1 to 2 days and an attached engorged tick is tick paralysis. Removing the tick is the treatment, and strength usually improves within hours. Grasp the tick with tweezers as close to the skin as possible. Covering it with petroleum jelly delays removal. Immune globulin treats Guillain-Barré syndrome, which usually progresses more slowly, over up to 4 weeks, and is not reversed by removing a tick. Botulism antitoxin is for a descending paralysis, and hers is ascending. Doxycycline treats tick-borne infections, not the paralysis.",
        keyFeature: { topic: "sob", n: 3 },
        source: "brown-tick",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Two hours after the tick is removed she can lift her arms, her cough is stronger and her breathing is no longer paradoxical. Her legs are still weak.",
        prompt: "Which of the following is the most appropriate plan for her now?",
        options: [
          "Discharge home now with her parents",
          "Elective intubation before transfer",
          "Lumbar puncture to exclude Guillain-Barré",
          "MRI of the spine before any decision",
          "Observe with serial checks of breathing",
        ],
        correct: 4,
        explanation:
          "Rapid improvement within hours of removing the tick confirms the diagnosis, and recovery is usually complete by about 36 hours. Until then she should stay where her strength, cough and breathing can be rechecked at set times, because weakness that reached her breathing muscles can still threaten ventilation. Sending her home now removes that monitoring while her legs are still weak. Intubation is not needed while her breathing improves. A lumbar puncture and spinal MRI are not needed once removal of the tick has produced clear improvement.",
        keyFeature: { topic: "sob", n: 4 },
        source: "brown-tick",
      },
    ],
    sources: [BROWNTICK],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    alsoTopics: ["airway"],
    title: "Fever and a wet cough in a man with weak muscles",
    stem:
      "A 63-year-old man with amyotrophic lateral sclerosis is brought to the emergency department by ambulance with 3 days of fever and a wet cough that he cannot clear, and 1 day of worsening shortness of breath. He uses bilevel noninvasive ventilation at night and has a gastrostomy tube. His peak cough flow at clinic last month was 190 L/minute. His advance directive, written with his neurologist, accepts noninvasive ventilation and antibiotics and declines intubation and tracheostomy. He is drowsy but rousable. There are coarse crackles at the right lung base. Paramedics started oxygen by nonrebreather mask.",
    vitals: { temperature: "38.4°C oral", pulse: "112/minute", resp: "30/minute", bp: "132/78 mmHg", o2sat: "97% on 15 L/minute by nonrebreather mask" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate respiratory support for him now?",
        options: [
          "Bilevel ventilation by face mask",
          "Comfort care with morphine only",
          "High flow nasal oxygen",
          "Keep the nonrebreather mask",
          "Rapid sequence intubation",
        ],
        correct: 0,
        explanation:
          "He is drowsy, and high flow oxygen can keep his saturation normal while his weak breathing muscles let carbon dioxide rise. Canadian ALS recommendations treat noninvasive ventilation as the standard of care for respiratory insufficiency and advise against oxygen as a routine treatment, with low oxygen levels treated first by noninvasive ventilation. His advance directive accepts noninvasive ventilation and declines intubation, so intubation would override his stated wishes. High flow nasal oxygen gives no inspiratory pressure support. Comfort care alone withholds a treatment he has chosen.",
        keyFeature: { topic: "sob", n: 3 },
        source: "shoesmith-als",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most effective way to help him clear his airway secretions?",
        options: [
          "Bronchoscopy at the bedside",
          "glycopyrrolate 0.2 mg SC every 6 hours",
          "Incentive spirometry every hour",
          "Mechanical insufflation-exsufflation",
          "Nebulized acetylcysteine every 6 hours",
        ],
        correct: 3,
        explanation:
          "His peak cough flow of 190 L/minute is well below the 270 L/minute threshold at which Canadian ALS recommendations advise mechanical insufflation-exsufflation for trouble clearing secretions, with more frequent use during a chest infection. The device inflates the lungs and then applies negative pressure to produce an effective cough. Incentive spirometry depends on muscle strength he does not have. Glycopyrrolate treats drooling of saliva, not retained chest secretions. Nebulized acetylcysteine does not give him the cough he needs to bring secretions up. Bronchoscopy is invasive and is kept for failure of the device.",
        keyFeature: { topic: "sob", n: 3 },
        source: "shoesmith-als",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His arrival arterial gas showed pH 7.26 and PaCO2 68 mmHg. After 1 hour of bilevel ventilation with added oxygen, his O2 saturation is 95%.",
        prompt: "Which of the following is the best measure of whether noninvasive ventilation is working for him?",
        options: [
          "Chest radiograph appearance",
          "Oxygen saturation of 95%",
          "Peak expiratory flow rate",
          "Repeat arterial PaCO2 and pH",
          "Temperature trend over 1 hour",
        ],
        correct: 3,
        explanation:
          "His failure is ventilatory, so success is judged by a falling PaCO2 and a rising pH, and the BTS/ICS guideline advises a repeat blood gas 1 to 2 hours after starting noninvasive ventilation. A saturation of 95% on added oxygen can coexist with a PaCO2 that is still rising. Peak flow needs effort and a lip seal he cannot give and measures airflow obstruction, not ventilation. The chest radiograph and temperature follow the pneumonia over days, not his response to ventilation in the first hours.",
        keyFeature: { topic: "sob", n: 4 },
        source: "bts-ahrf",
      },
    ],
    sources: [SHOESMITH, BTSAHRF],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-33",
    topic: "sob",
    alsoTopics: ["airway"],
    title: "Noisy breathing and a very sore throat",
    stem:
      "A 15-year-old boy is brought to the emergency department by his father after 8 days of fever, sore throat and tiredness. Since last night his breathing has become noisy and he cannot sleep lying down. Swallowing is painful but he can manage sips of water. He is fully immunized and has not travelled. He is sitting up and speaks in a thick voice. Both tonsils are grossly enlarged, meet in the midline and are covered with white exudate. The uvula is in the midline and he can open his mouth fully. There are large tender nodes in the back of the neck, and the spleen tip is palpable. There is a loud snoring noise with each breath.",
    vitals: { temperature: "38.6°C oral", pulse: "112/minute", resp: "24/minute", bp: "118/70 mmHg", o2sat: "95% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings indicates that his upper airway is becoming narrowed?",
        options: [
          "Palpable spleen tip",
          "Posterior cervical lymph nodes",
          "Snoring noise and cannot lie flat",
          "Temperature of 38.6°C",
          "White tonsillar exudate",
        ],
        correct: 2,
        explanation:
          "A snoring noise with each breath while awake, called stertor, and being unable to lie down show that tonsils meeting in the midline are narrowing his upper airway. Lying flat lets the enlarged tonsils fall back and worsens the obstruction. A palpable spleen, posterior cervical nodes, fever and tonsillar exudate support the cause of his illness but say nothing about the size of his airway. The distinction matters because upper airway narrowing needs a different response from a lower airway problem.",
        keyFeature: { topic: "sob", n: 1 },
        source: "eskander",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his upper airway narrowing?",
        options: [
          "Acute epiglottitis",
          "Infectious mononucleosis",
          "Peritonsillar abscess",
          "Respiratory diphtheria",
          "Retropharyngeal abscess",
        ],
        correct: 1,
        explanation:
          "Eight days of fever and tiredness, huge symmetrical tonsils with exudate, posterior cervical nodes and a palpable spleen tip in a teenager point to infectious mononucleosis. A peritonsillar abscess is usually one-sided, with trismus and deviation of the uvula, and his uvula is central and his mouth opens fully. Epiglottitis causes severe pain with a nearly normal oropharynx, not tonsils that meet in the midline. He is fully immunized and has not travelled, which makes diphtheria very unlikely. A retropharyngeal abscess bulges the posterior pharyngeal wall and stiffens the neck.",
        keyFeature: { topic: "sob", n: 2 },
        source: "luzuriaga",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to start for him now?",
        options: [
          "acyclovir 800 mg PO five times daily",
          "amoxicillin 500 mg PO three times daily",
          "Awake flexible intubation now",
          "dexamethasone 10 mg IV",
          "Needle aspiration of both tonsils",
        ],
        correct: 3,
        explanation:
          "Corticosteroids are not used for the usual symptoms of mononucleosis but are reserved for impending airway obstruction, and stertor with inability to lie flat is that situation. A corticosteroid such as dexamethasone IV can shrink the swollen lymphoid tissue while he is watched closely in case the obstruction progresses. An antiviral such as acyclovir adds nothing. Amoxicillin does not treat a viral illness and often causes a rash in mononucleosis. There is no abscess to aspirate. He keeps a saturation of 95% and is talking, so even an awake intubation is not yet needed, although the airway team should be told about him.",
        keyFeature: { topic: "sob", n: 3 },
        source: "gomes-im",
      },
    ],
    sources: [ESKANDER, LUZURIAGA, GOMESIM],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    title: "Breathless with a swollen abdomen",
    stem:
      "A 58-year-old man with alcohol-related cirrhosis presents to the emergency department with 1 week of increasing shortness of breath, now at rest, and he cannot lie flat. He stopped drinking 1 year ago. He takes spironolactone 100 mg and furosemide 40 mg daily. He has no fever, cough or chest pain. There is dullness and absent breath sounds over the lower two thirds of the right chest. He has moderate ascites and spider angiomas. The JVP is not raised and there is mild ankle edema. A chest radiograph shows a large right pleural effusion with a normal heart size and a clear left lung.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "28/minute", bp: "104/62 mmHg", o2sat: "89% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his pleural effusion?",
        options: [
          "Ascites moving across the diaphragm",
          "Heart failure with fluid overload",
          "Malignancy spreading to the pleura",
          "Parapneumonic effusion",
          "Pulmonary embolism with infarction",
        ],
        correct: 0,
        explanation:
          "A large right-sided effusion in a man with cirrhosis and ascites, with a normal heart size, a normal JVP and no fever, is most likely a hepatic hydrothorax, where ascitic fluid passes through small defects in the diaphragm into the pleural space. Heart failure usually causes bilateral effusions with a raised JVP and a large heart. A parapneumonic effusion comes with fever, cough and consolidation. Pulmonary infarction causes pleuritic pain and a small effusion. Malignancy, including liver cancer, remains possible and is one reason to send the fluid for analysis.",
        keyFeature: { topic: "sob", n: 2 },
        source: "aasld-ascites",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his breathlessness now?",
        options: [
          "albumin 25% 100 mL IV",
          "Increase furosemide to 80 mg IV",
          "Large-volume paracentesis alone",
          "Noninvasive ventilation",
          "Therapeutic thoracentesis",
        ],
        correct: 4,
        explanation:
          "The large effusion is causing his hypoxemia and orthopnea, and the AASLD guidance advises therapeutic thoracentesis for dyspnea, followed by diuretics to slow reaccumulation. Draining the fluid relieves him within minutes and provides fluid to exclude infection and malignancy. Paracentesis alone removes abdominal fluid but leaves the pleural collection that is compressing his lung. A higher dose of IV furosemide acts over days and risks kidney injury with his low BP. Albumin does not drain the effusion. Noninvasive ventilation does not remove a collection of fluid.",
        keyFeature: { topic: "sob", n: 3 },
        source: "aasld-ascites",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "He improves after removal of 1.5 L of transudate with a low neutrophil count and a negative culture. Four days later the effusion has returned to the same size despite diuretics.",
        prompt: "Which of the following is the most appropriate plan for his recurrent pleural effusion?",
        options: [
          "Chest tube for continuous drainage",
          "Chest tube with talc pleurodesis",
          "Discharge and review in 4 weeks",
          "Repeat thoracentesis and TIPS referral",
          "Stop both diuretics",
        ],
        correct: 3,
        explanation:
          "A hydrothorax that returns despite diuretics is refractory, and repeat thoracentesis controls his symptoms while he is assessed for a transjugular intrahepatic portosystemic shunt (TIPS) or liver transplantation. The AASLD guidance advises avoiding chest tubes in hepatic hydrothorax because they are linked to high morbidity, clinical deterioration, death and fistula formation. Talc pleurodesis also needs a chest tube. Stopping diuretics speeds reaccumulation. Waiting 4 weeks leaves a large recurrent effusion untreated.",
        keyFeature: { topic: "sob", n: 3 },
        source: "aasld-ascites",
      },
    ],
    sources: [AASLD],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
        update: "Bilevel noninvasive ventilation is started and oxygen is titrated down.",
        prompt: "Which of the following is the most appropriate way to judge her response to noninvasive ventilation?",
        options: ["Chest radiograph in 6 hours", "Continuous pulse oximetry alone", "Repeat blood gas in 1 to 2 hours", "Respiratory rate trend alone", "Serum bicarbonate tomorrow"],
        correct: 2,
        explanation: "Her failure is hypercapnic, so the response is judged by the pH and PaCO2, and the BTS/ICS guideline advises a repeat blood gas within 1 to 2 hours of starting NIV and after changes in settings. Oximetry cannot show the CO2, and a saturation can look normal on oxygen while the PaCO2 climbs. A falling respiratory rate is encouraging but does not measure ventilation. A chest radiograph does not track the CO2. The bicarbonate changes over days rather than hours.",
        keyFeature: { topic: "sob", n: 4 },
        source: "bts-ahrf",
      },
      {
        id: "q3",
        kind: "single",
        update: "She improves and is admitted. Two days later on room air her pH is 7.38 and PaCO2 is 58 mmHg, and she is alert. Discharge is planned before her sleep study.",
        prompt: "Which of the following is the most appropriate breathing support plan for her discharge?",
        options: ["CPAP only after weight loss", "Home NIV until sleep testing", "Home oxygen at 2 L/minute alone", "Tracheostomy referral now", "No home breathing support"],
        correct: 1,
        explanation: "The ATS guideline suggests that patients hospitalized with hypercapnic respiratory failure and suspected obesity hypoventilation go home on noninvasive ventilation until outpatient sleep testing and pressure titration, ideally within 2 to 3 months. Her PaCO2 of 58 mmHg on room air shows that daytime hypoventilation persists, so going home without support risks a relapse. Oxygen alone does not treat hypoventilation. CPAP may suit her after testing, but treatment is not deferred until weight loss. Tracheostomy is reserved for patients who fail or cannot use noninvasive support.",
        keyFeature: { topic: "sob", n: 3 },
        source: "mokhlesi",
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
    alsoTopics: ["infectious-diseases"],
    title: "Breathless during cancer treatment",
    stem:
      "A 64-year-old woman presents to the emergency department with 10 days of dry cough and shortness of breath that has progressed to breathlessness at rest. She has metastatic non-small cell lung cancer treated with pembrolizumab every 3 weeks. Her fourth dose was 2 weeks ago. She has never had chest radiation. She has no fever, chest pain or leg swelling. She now needs help to walk to the bathroom. There are fine crackles at both lung bases. The JVP is not raised.",
    vitals: { temperature: "37.3°C oral", pulse: "104/minute", resp: "26/minute", bp: "128/76 mmHg", o2sat: "87% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "Her white cell count is normal. CT with pulmonary angiography shows no PE and new patchy ground glass opacity and consolidation in both lower lobes. Her tumour is smaller than on her last scan.",
        prompt: "Which of the following is the most likely cause of her shortness of breath?",
        options: [
          "Community-acquired bacterial pneumonia",
          "Heart failure with pulmonary edema",
          "Immune checkpoint inhibitor pneumonitis",
          "Lymphangitic spread of the cancer",
          "Radiation pneumonitis of both lungs",
        ],
        correct: 2,
        explanation:
          "New bilateral ground glass and consolidation during treatment with pembrolizumab, with no fever, a normal white count, no PE and a shrinking tumour, point to immune checkpoint inhibitor pneumonitis. It is diagnosed after infection, heart failure, PE and cancer progression have been considered. Bacterial pneumonia is less likely without fever or a raised white count, although cultures are still sent. A normal JVP and no leg swelling argue against heart failure. A smaller tumour makes lymphangitic spread unlikely. She has never had chest radiation.",
        keyFeature: { topic: "sob", n: 2 },
        source: "asco-irae",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to start for her now?",
        options: [
          "budesonide 400 mcg inhaled twice daily",
          "Continue pembrolizumab and observe",
          "infliximab 300 mg IV once",
          "methylprednisolone 60 mg IV daily",
          "prednisone 10 mg PO daily",
        ],
        correct: 3,
        explanation:
          "She needs oxygen and help with self-care, which makes this severe pneumonitis. The ASCO guideline advises holding the checkpoint inhibitor and giving IV methylprednisolone 1 to 2 mg/kg per day, which is 60 to 120 mg for her 60 kg. Prednisone 10 mg is far below that dose. Infliximab is a second-line drug for pneumonitis that has not improved after 48 hours of corticosteroids. Inhaled budesonide is not a treatment for immune pneumonitis. Continuing pembrolizumab keeps driving the injury.",
        keyFeature: { topic: "sob", n: 3 },
        source: "asco-irae",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings best marks her pneumonitis as severe rather than moderate?",
        options: [
          "Bilateral lower lobe involvement",
          "Cough lasting 10 days",
          "Crackles at both lung bases",
          "Heart rate of 104/minute",
          "Needing oxygen for a saturation of 87%",
        ],
        correct: 4,
        explanation:
          "The grade of checkpoint inhibitor pneumonitis rests on symptoms and function. Grade 3, or severe, pneumonitis has severe symptoms that limit self-care and need oxygen, as she does with a saturation of 87% on room air and needing help to walk to the bathroom. Involvement of more than one lobe fits grade 2 and on its own does not make the illness severe. Cough duration, crackles and a heart rate of 104/minute do not set the grade.",
        keyFeature: { topic: "sob", n: 4 },
        source: "asco-irae",
      },
    ],
    sources: [ASCOIRAE],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-39",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Blood-streaked sputum after months of sinus trouble",
    stem:
      "A 52-year-old man presents to the emergency department with 1 week of cough and 2 days of increasing shortness of breath. Yesterday he coughed up a small amount of blood-streaked sputum twice. For 3 months he has had nasal crusting and bloody nasal discharge, treated as sinusitis with two courses of antibiotics. His joints have ached for a month. He does not smoke and takes no medications. The nasal mucosa is crusted. There are crackles in both lungs. His hemoglobin was 128 g/L at a walk-in clinic 1 week ago. A chest radiograph shows bilateral patchy alveolar opacities.",
    vitals: { temperature: "37.8°C oral", pulse: "112/minute", resp: "28/minute", bp: "158/94 mmHg", o2sat: "89% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update:
          "His hemoglobin today is 92 g/L. He has no melena and no other source of bleeding.",
        prompt: "Which of the following findings best shows how much he is bleeding into his lungs?",
        options: [
          "Bilateral alveolar opacities",
          "Blood-streaked sputum twice yesterday",
          "Crackles in both lungs",
          "Fall in hemoglobin of 36 g/L",
          "Nasal crusting and bleeding",
        ],
        correct: 3,
        explanation:
          "A fall in hemoglobin from 128 to 92 g/L in a week, with no other source of bleeding, shows that a large volume of blood has entered his alveoli. Hemoptysis is absent in up to one third of patients with diffuse alveolar hemorrhage, so a little blood-streaked sputum can badly underestimate the bleed. Crackles and bilateral alveolar opacities occur with any process that fills the alveoli and do not measure the amount of blood. Nasal crusting points to the cause, not to the amount of lung bleeding.",
        keyFeature: { topic: "sob", n: 4 },
        source: "lara-dah",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following tests is most useful now to identify the cause of his lung bleeding?",
        options: [
          "B-type natriuretic peptide",
          "Serum D-dimer level",
          "Sputum bacterial culture",
          "Transthoracic echocardiogram",
          "Urinalysis for blood and casts",
        ],
        correct: 4,
        explanation:
          "Nasal crusting, joint aches and alveolar hemorrhage suggest an ANCA-associated vasculitis such as granulomatosis with polyangiitis, which often involves the kidneys as well. A urinalysis with blood and red cell casts identifies a pulmonary renal syndrome within minutes, and glomerulonephritis with alveolar hemorrhage defines severe, organ-threatening disease. D-dimer and BNP do not point to a cause of alveolar bleeding. Sputum culture looks for infection, which does not explain the nasal disease or anemia. Echocardiography looks for heart failure, which nothing in his findings suggests.",
        keyFeature: { topic: "sob", n: 2 },
        source: "acr-aav",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Urinalysis shows 3+ blood with red cell casts and his creatinine is 214 umol/L. His O2 saturation is 90% on 6 L/minute by nasal prongs. ANCA testing is sent.",
        prompt: "Which of the following is the most appropriate treatment to start for him now?",
        options: [
          "methylprednisolone 1 g IV daily",
          "piperacillin-tazobactam 4.5 g IV alone",
          "Plasma exchange as the first therapy",
          "prednisone 10 mg PO daily",
          "tranexamic acid 1 g IV alone",
        ],
        correct: 0,
        explanation:
          "Alveolar hemorrhage with glomerulonephritis is severe vasculitis, and immunosuppression should start without waiting for the ANCA result. Pulse IV methylprednisolone is one accepted way to begin glucocorticoids, alongside induction therapy such as rituximab. The 2021 ACR/Vasculitis Foundation guideline advises against routinely adding plasma exchange to induction therapy for alveolar hemorrhage, because the PEXIVAS trial showed no reduction in death or end-stage kidney disease. Prednisone 10 mg is far too low a dose for severe disease. Tranexamic acid does not treat the inflammation causing the bleeding. An antibiotic alone does not treat vasculitis.",
        keyFeature: { topic: "sob", n: 3 },
        source: "acr-aav",
      },
    ],
    sources: [LARADAH, ACRAAV],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-40",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "A teenager with fever, vomiting and breathlessness",
    stem:
      "A 17-year-old boy is brought to the emergency department by his mother with 5 days of cough, fever and increasing shortness of breath. He also has nausea, vomiting and crampy abdominal pain. Two days ago a walk-in clinic diagnosed gastroenteritis. He has no medical history and takes no medications. He plays hockey and has not travelled. His mother waits outside while you interview him alone. He speaks in full sentences. There are fine crackles at both lung bases. The abdomen is soft with mild diffuse tenderness.",
    vitals: { temperature: "38.4°C oral", pulse: "118/minute", resp: "26/minute", bp: "122/70 mmHg", o2sat: "91% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following questions is most likely to identify the cause of his illness?",
        options: [
          "Contact with sick birds or farm animals",
          "Recent insect or tick bites",
          "Recent sexual partners",
          "Recent swimming in a lake or river",
          "Use of vaping products, including cannabis",
        ],
        correct: 4,
        explanation:
          "Respiratory symptoms with nausea, vomiting and abdominal pain in a teenager with hypoxemia and bilateral crackles fit e-cigarette or vaping product use-associated lung injury. The CDC advises asking every patient with respiratory, gastrointestinal or constitutional symptoms about vaping, and seeing a teenager without a parent present makes an honest answer more likely. Contact with birds or farm animals and freshwater swimming point to uncommon zoonotic infections that his history gives no reason to suspect. Tick bites and sexual contacts do not explain bilateral lung disease with gastrointestinal symptoms.",
        keyFeature: { topic: "sob", n: 2 },
        source: "jatlaoui-evali",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "He says he has vaped cannabis oil bought from a friend several times a day for 3 months. It is January and influenza is circulating in the community.",
        prompt: "Which of the following investigations is most important before his illness is attributed to vaping?",
        options: [
          "Bronchoscopy with lavage",
          "Influenza and viral respiratory testing",
          "Serum lipase and liver tests",
          "Transthoracic echocardiogram",
          "Urine drug screen for THC",
        ],
        correct: 1,
        explanation:
          "Vaping-associated lung injury is a diagnosis of exclusion, and its symptoms overlap with influenza and other respiratory infections, which can also occur together. During influenza season the CDC advises testing for influenza and treating infection according to usual guidelines. A urine test for THC only confirms what he has told you and does not change management. Bronchoscopy is not needed routinely. Lipase and liver tests look at his abdominal symptoms, which are part of the syndrome. An echocardiogram looks for a cardiac cause that nothing in his examination suggests.",
        keyFeature: { topic: "sob", n: 2 },
        source: "jatlaoui-evali",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Influenza and other viral tests are negative. CT shows bilateral ground glass opacity with sparing just beneath the pleura. His O2 saturation is 90% on room air.",
        prompt: "Which of the following is the most appropriate management plan for him now?",
        options: [
          "Admit for antibiotics and a corticosteroid",
          "Admit for inhaled salbutamol alone",
          "Admit for oseltamivir alone",
          "Discharge on amoxicillin with follow-up",
          "Discharge on prednisone with follow-up",
        ],
        correct: 0,
        explanation:
          "A saturation of 90% on room air means he needs admission, as outpatient care is reserved for stable patients with normal oxygenation. In hospital, CDC guidance supports considering empiric corticosteroids for the lung injury together with antimicrobials while infection has not been fully excluded. Discharging him on amoxicillin or prednisone sends a hypoxemic patient home, and corticosteroids are used with caution in outpatients because they can worsen infection. Oseltamivir alone treats influenza, which testing did not find. Salbutamol alone does not treat inflammatory lung injury.",
        keyFeature: { topic: "sob", n: 3 },
        source: "evans-evali",
      },
    ],
    sources: [JATLAOUI, EVANSEVALI],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-41",
    topic: "sob",
    alsoTopics: ["dvt-pe"],
    title: "Pleuritic pain in a young man with swollen legs",
    stem:
      "A 29-year-old man presents to the emergency department with 2 days of right-sided pleuritic chest pain and shortness of breath. Three weeks ago both his legs and his face began to swell. Last week his family physician diagnosed nephrotic syndrome, with a serum albumin of 18 g/L and 9 g of protein in the urine per day, and started furosemide. His creatinine is 76 umol/L. He has no other medical history and no recent travel, surgery or immobilization. He has symmetrical pitting edema to both knees without calf tenderness. There are reduced breath sounds at both lung bases. A chest radiograph shows small bilateral pleural effusions.",
    vitals: { temperature: "37.1°C oral", pulse: "108/minute", resp: "24/minute", bp: "128/82 mmHg", o2sat: "92% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important diagnosis to exclude in this patient?",
        options: [
          "Acute heart failure",
          "Acute pericarditis",
          "Community-acquired pneumonia",
          "Pleural effusions from low albumin",
          "Pulmonary embolism",
        ],
        correct: 4,
        explanation:
          "The risk of venous thromboembolism in nephrotic syndrome is highest with heavy proteinuria and a low serum albumin, and his albumin is 18 g/L. New pleuritic pain with tachycardia and a saturation of 92% makes PE the diagnosis that must be excluded. Small effusions from a low albumin cause gradual breathlessness, not new pleuritic pain. There is no fever or productive cough to suggest pneumonia. Pericarditis causes central chest pain that changes with position rather than one-sided pleuritic pain. His normal creatinine and generalized edema do not make heart failure a likely cause of sudden pleuritic pain.",
        keyFeature: { topic: "sob", n: 2 },
        source: "kdigo-gd",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "You judge PE to be more likely than any other diagnosis.",
        prompt: "Which of the following is this patient's Wells score for pulmonary embolism?",
        options: [
          "1.5 points",
          "3.0 points",
          "4.5 points",
          "6.0 points",
          "7.5 points",
        ],
        correct: 2,
        explanation:
          "He scores 3 points because PE is the most likely diagnosis and 1.5 points for a heart rate above 100/minute, which gives 4.5 points. His leg swelling is symmetrical and caused by nephrotic syndrome, without calf tenderness, so he does not score the 3 points for clinical signs of DVT. He has no previous VTE, recent surgery or immobilization, hemoptysis or cancer. Scores of 6.0 and 7.5 wrongly count his bilateral edema as a sign of DVT. Scores of 1.5 and 3.0 leave out one of the two items he has.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate next test to evaluate him for PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "CT pulmonary angiogram",
          "High sensitivity D-dimer",
          "Transthoracic echocardiogram",
          "Ventilation perfusion scan",
        ],
        correct: 1,
        explanation:
          "Thrombosis Canada advises going straight to imaging without a D-dimer when the Wells score is 4.5 or more, because a negative D-dimer cannot exclude PE at that pretest probability. His creatinine is normal, so CT pulmonary angiography is safe. His radiograph shows bilateral effusions, and a ventilation perfusion scan performs best in patients with a normal chest radiograph. Leg ultrasound is a poor first test when his leg swelling is symmetrical from nephrotic syndrome, and a negative scan would not exclude PE. Echocardiography is for patients too unstable for CT and does not exclude PE in a stable patient.",
        keyFeature: { topic: "sob", n: 5 },
        source: "tc-pe",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "The CT pulmonary angiogram is of good quality and shows no filling defect in the main, lobar or segmental arteries. It confirms small bilateral pleural effusions.",
        prompt: "Which of the following is the most appropriate next step in his evaluation for PE?",
        options: [
          "Bilateral leg compression ultrasound",
          "Repeat CT angiogram in 1 week",
          "Start dalteparin while testing continues",
          "Ventilation perfusion scan",
          "No further testing for PE",
        ],
        correct: 4,
        explanation:
          "The ESC guideline accepts a normal CT pulmonary angiogram as excluding PE in patients with a low or intermediate clinical probability, and a Wells score of 4.5 is intermediate on its three level scale. A ventilation perfusion scan would be hard to read with bilateral effusions and is not needed. Repeating the CT adds radiation without a new question. Leg ultrasound and empiric dalteparin are not needed once PE has been excluded, although his thrombosis risk from nephrotic syndrome should be addressed with his nephrologist.",
        keyFeature: { topic: "sob", n: 5 },
        source: "esc-pe",
      },
    ],
    sources: [KDIGOGD, TCPE, ESCPE],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-42",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Sore throat and noisy breathing after travel",
    stem:
      "A 26-year-old man presents to the emergency department with 4 days of sore throat, low grade fever and pain on swallowing, and since this morning noisy breathing and a hoarse voice. Nine days ago he returned from visiting family in a region with an ongoing diphtheria outbreak. He did not receive routine childhood vaccines. His neck is diffusely swollen. A grey-white membrane covers both tonsils and extends onto the soft palate and posterior pharynx. It bleeds when touched with a tongue depressor. There is soft inspiratory stridor at rest. The chest is clear.",
    vitals: { temperature: "38.2°C oral", pulse: "118/minute", resp: "26/minute", bp: "118/72 mmHg", o2sat: "94% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his noisy breathing?",
        options: [
          "Acute epiglottitis",
          "Infectious mononucleosis",
          "Peritonsillar abscess",
          "Respiratory diphtheria",
          "Streptococcal pharyngitis",
        ],
        correct: 3,
        explanation:
          "An adherent grey-white membrane on the tonsils and pharynx, a swollen bull neck and new stridor in an unvaccinated traveller from an outbreak region is respiratory diphtheria. The membrane can extend into the larynx and trachea and obstruct the upper airway, which his hoarseness and stridor suggest is happening. Streptococcal pharyngitis and mononucleosis cause tonsillar exudate but not a spreading membrane that bleeds when touched. A peritonsillar abscess causes a one-sided bulge with deviation of the uvula. Epiglottitis causes severe pain with a nearly normal oropharynx.",
        keyFeature: { topic: "sob", n: 1 },
        source: "ontario-diphtheria",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to arrange for him now?",
        options: [
          "Antitoxin now through public health",
          "Antitoxin once the culture confirms diphtheria",
          "dexamethasone 10 mg IV alone",
          "penicillin G 2 million units IV alone",
          "Tdap vaccine as the only treatment",
        ],
        correct: 0,
        explanation:
          "The Public Health Agency of Canada advises giving diphtheria antitoxin when diphtheria is suspected clinically, without waiting for laboratory confirmation, and it is available on an emergency basis through local public health authorities. Antitoxin neutralizes circulating toxin before it binds to the heart and nerves but cannot reverse toxin already bound, so waiting for culture lets the damage grow. An antibiotic such as penicillin is needed as well, but antibiotics alone do not neutralize toxin. A vaccine does not treat the current illness. Dexamethasone does not neutralize toxin.",
        keyFeature: { topic: "sob", n: 3 },
        source: "phac-diphtheria",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "His stridor worsens and his O2 saturation falls to 89% on oxygen. He is sitting forward and anxious.",
        prompt: "Which of the following is the most appropriate airway plan for him now?",
        options: [
          "Bilevel ventilation by face mask",
          "Blind nasotracheal intubation",
          "Heliox by nonrebreather mask",
          "Intubation with a surgical airway ready",
          "Nebulized epinephrine and reassess",
        ],
        correct: 3,
        explanation:
          "Worsening stridor and falling saturation mean the membrane is closing his airway, and he needs a definitive airway now. The Canadian Airway Focus Group advises that an anticipated difficult airway be managed by the most experienced operator with a front of neck access plan ready, since a friable membrane can bleed or come loose and block the tube or trachea. Blind nasal intubation passes through the membrane without seeing it. Bilevel ventilation and heliox do not relieve a fixed obstruction. Nebulized epinephrine does not remove an adherent membrane.",
        keyFeature: { topic: "sob", n: 3 },
        source: "cafg2",
      },
    ],
    sources: [ONTDIPH, PHACDIPH, CAFG2],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
          "epoprostenol infusion",
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
        update: "Epoprostenol is restarted on a hospital pump through a peripheral IV. Arrival blood shows lactate 4.6 mmol/L, high sensitivity troponin I 60 ng/L and BNP 2400 ng/L. Oxygen at 3 L/minute by nasal prongs raises her O2 saturation to 93%.",
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
          "metoprolol 5 mg IV",
          "Stop the epoprostenol infusion",
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
    alsoTopics: ["tox"],
    title: "Drowsy and breathing slowly",
    stem:
      "A 67-year-old woman is brought to the emergency department by her husband because she has become drowsy and weak and is breathing slowly. For constipation she takes magnesium hydroxide tablets most days, and over the last 2 days she drank 3 bottles of magnesium citrate. She has stage 4 chronic kidney disease, with a creatinine of 240 umol/L last month. She takes no opioids, benzodiazepines or other sedatives. She is drowsy but opens her eyes to voice. Her face is flushed. Her pupils are 4 mm and reactive. Knee and ankle reflexes are absent. Her chest is clear.",
    vitals: { temperature: "36.2°C oral", pulse: "52/minute", resp: "8/minute", bp: "86/50 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most clearly signals impending respiratory failure in this patient?",
        options: [
          "Absent knee and ankle reflexes",
          "Flushed skin of the face",
          "Oxygen saturation of 93%",
          "Pulse of 52/minute",
          "Slow breathing with drowsiness",
        ],
        correct: 4,
        explanation:
          "A respiratory rate of 8/minute with drowsiness shows that her ventilation is failing, and her PCO2 is likely rising even though her saturation is 93% on room air. Saturation measures oxygenation, not ventilation, and can look acceptable while carbon dioxide builds up. Depressed reflexes appear at lower magnesium levels than slow breathing, so they are an earlier and less urgent sign. Flushing and a slow pulse reflect effects on blood vessels and the heart rather than the state of her breathing.",
        keyFeature: { topic: "sob", n: 4 },
        source: "aal-hamad",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Arterial gas on room air: pH 7.24, PaCO2 62 mmHg. Magnesium 5.6 mmol/L, calcium 2.12 mmol/L, potassium 5.1 mmol/L, creatinine 262 umol/L, glucose 6.4 mmol/L.",
        prompt: "Which of the following is the most likely cause of her hypoventilation?",
        options: [
          "Guillain-Barré syndrome",
          "Hidden opioid toxicity",
          "Hypercalcemia from kidney disease",
          "Hypermagnesemia from laxatives",
          "Uremic encephalopathy",
        ],
        correct: 3,
        explanation:
          "A magnesium of 5.6 mmol/L follows large doses of magnesium laxatives in a woman whose kidneys cannot excrete them, and hypermagnesemia causes drowsiness, lost reflexes, a slow pulse, low BP and slow breathing. Her calcium of 2.12 mmol/L is normal, not high. Her creatinine of 262 umol/L is close to her baseline of 240 umol/L, which does not explain an acute change. Reactive 4 mm pupils and no opioid use argue against opioid toxicity. Guillain-Barré syndrome does not cause drowsiness.",
        keyFeature: { topic: "sob", n: 2 },
        source: "aal-hamad",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for this patient?",
        options: [
          "calcium gluconate 1 g IV",
          "flumazenil 0.2 mg IV",
          "furosemide 80 mg IV",
          "naloxone 0.4 mg IV",
          "sodium bicarbonate 50 mmol IV",
        ],
        correct: 0,
        explanation:
          "Calcium antagonizes the neuromuscular and cardiac effects of magnesium, so IV calcium, about 1 g given over a few minutes, is the first treatment while hemodialysis is arranged, since her kidneys cannot clear the load. Furosemide relies on kidney function she lacks and acts too slowly. Naloxone and flumazenil reverse opioids and benzodiazepines, which she has not taken. Bicarbonate does not treat the cause of her hypoventilation. Ventilatory support may still be needed if calcium does not improve her breathing.",
        keyFeature: { topic: "sob", n: 3 },
        source: "aal-hamad",
      },
    ],
    sources: [AALHAMAD],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  {
    id: "sob-45",
    topic: "sob",
    alsoTopics: ["infectious-diseases"],
    title: "Fever and breathlessness after cleaning a shed",
    stem:
      "You are working in a rural hospital emergency department in southern Alberta in June. A 34-year-old man presents with 4 days of fever, muscle aches, headache and nausea, and 1 day of dry cough and rapidly increasing shortness of breath. Two weeks ago he spent a weekend clearing out an old grain shed full of mouse droppings, without a mask. He has no medical history. There are fine crackles in both lungs. The JVP is not raised. A chest radiograph shows bilateral interstitial edema with a normal heart size. Platelets are 58 x 10^9/L, hematocrit 0.54 and white cell count 15.2 x 10^9/L with immature forms.",
    vitals: { temperature: "38.7°C oral", pulse: "124/minute", resp: "32/minute", bp: "98/60 mmHg", o2sat: "86% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Hantavirus pulmonary syndrome",
          "Influenza pneumonia",
          "Legionella pneumonia",
          "Leptospirosis with lung bleeding",
          "Psittacosis from bird contact",
        ],
        correct: 0,
        explanation:
          "A febrile prodrome followed by rapidly developing pulmonary edema with a normal heart size, a low platelet count and a raised hematocrit, 2 weeks after sweeping out a building full of mouse droppings in western Canada, is hantavirus pulmonary syndrome. Thrombocytopenia with a raised hematocrit is highly sensitive and specific for it, and the median incubation is about 2 weeks. Influenza and Legionella pneumonia do not usually cause this pairing of blood findings. Leptospirosis follows contact with water or soil contaminated by animal urine. Psittacosis needs contact with birds.",
        keyFeature: { topic: "sob", n: 2 },
        source: "drebot-hps",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "His BP falls to 84/52 mmHg and his O2 saturation is 88% on 15 L/minute by nonrebreather mask.",
        prompt: "Which of the following is the most appropriate approach to supporting his circulation?",
        options: [
          "Crystalloid 30 mL/kg IV bolus",
          "furosemide 80 mg IV bolus",
          "oseltamivir 75 mg PO twice daily",
          "ribavirin IV loading dose",
          "Small fluid boluses and a vasopressor",
        ],
        correct: 4,
        explanation:
          "Hantavirus pulmonary syndrome makes the pulmonary capillaries leak, so large volumes of fluid pour into the lungs and worsen hypoxemia. Management depends on careful fluid administration with ventilatory support, and a vasopressor supports BP without flooding the lungs. A 30 mL/kg bolus is the sepsis approach and fits poorly here. Furosemide lowers an already falling BP in a man who is not volume overloaded. There is no proven antiviral therapy, so ribavirin is not a treatment. Oseltamivir treats influenza, which does not explain his findings.",
        keyFeature: { topic: "sob", n: 3 },
        source: "drebot-hps",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Despite norepinephrine and intubation, his lactate rises to 6.2 mmol/L and his hands and feet are cool and mottled.",
        prompt: "Which of the following investigations best explains why his shock is getting worse?",
        options: [
          "Blood cultures from two sites",
          "CT pulmonary angiogram",
          "Focused cardiac ultrasound",
          "Hantavirus serology",
          "Serum procalcitonin",
        ],
        correct: 2,
        explanation:
          "Death in hantavirus pulmonary syndrome comes from respiratory failure, myocardial dysfunction and shock, and cool mottled extremities with a rising lactate despite a vasopressor suggest the heart is failing. A focused cardiac ultrasound shows poor ventricular function at the bedside and helps separate it from low filling, which guides the need for inotropes and urgent referral for ECMO. Serology confirms the diagnosis days later through the National Microbiology Laboratory. Blood cultures and procalcitonin look for a bacterial cause that his picture does not suggest. CT would mean moving an unstable patient.",
        keyFeature: { topic: "sob", n: 2 },
        source: "drebot-hps",
      },
    ],
    sources: [DREBOT],
    reviewed: false,
    author: AUTHOR,
    version: 2,
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
    title: "Breathless with dark urine",
    stem:
      "A 24-year-old man presents to the emergency department with 1 day of shortness of breath on exertion, tiredness and low back pain. This morning his urine was dark brown. Two days ago he ate a large dish of fresh fava beans at a family dinner. He has no fever, cough or chest pain, takes no medications and has not travelled. He is pale and his sclerae are yellow. His chest is clear, the spleen is not palpable and there is no leg swelling. Labs: hemoglobin 64 g/L (148 g/L 1 year ago), MCV 96 fL, platelets 256 x 10^9/L, total bilirubin 86 umol/L, mostly unconjugated, LDH 1 380 U/L, CK 140 U/L, creatinine 92 umol/L. Urine dipstick shows 3+ blood, with no red cells on microscopy.",
    vitals: { temperature: "37.3°C oral", pulse: "124/minute", resp: "26/minute", bp: "116/66 mmHg", o2sat: "98% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his shortness of breath?",
        options: [
          "Acute hemolytic anemia",
          "Acute viral hepatitis",
          "Community-acquired pneumonia",
          "Pulmonary embolism",
          "Rhabdomyolysis",
        ],
        correct: 0,
        explanation:
          "His hemoglobin has fallen from 148 to 64 g/L, with unconjugated jaundice, a high LDH and dark urine that is positive for blood without red cells, which means hemoglobin in the urine. Anemia this severe cuts the oxygen his blood can carry, so he is breathless and tachycardic although his saturation is 98%. Fava beans are a classic trigger of acute hemolysis in G6PD deficiency. Rhabdomyolysis also darkens the urine, but his CK is normal and it does not cause anemia. Hepatitis does not explain the fall in hemoglobin. A clear chest, no fever and a normal saturation argue against pneumonia and PE.",
        keyFeature: { topic: "sob", n: 2 },
        source: "luzzatto-g6pd",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "The blood film shows bite cells and blister cells.",
        prompt: "Which of the following tests best separates an immune from a nonimmune cause of his illness?",
        options: [
          "Blood cultures, two sets",
          "Direct antiglobulin test",
          "Haptoglobin level",
          "Hemoglobin electrophoresis",
          "Serum ferritin level",
        ],
        correct: 1,
        explanation:
          "A direct antiglobulin test detects antibody or complement on the red cells. It is positive in autoimmune hemolytic anemia and negative in the oxidative hemolysis of G6PD deficiency, where bite and blister cells are typical. A low haptoglobin confirms hemolysis of any cause but does not separate the causes. Hemoglobin electrophoresis looks for sickle cell disease or thalassemia. Ferritin measures iron stores. Blood cultures look for infection, and he has no fever or source.",
        keyFeature: { topic: "sob", n: 2 },
        source: "luzzatto-g6pd",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "An hour later he is breathless at rest, his pulse is 134/minute and his hemoglobin is 57 g/L.",
        prompt: "Which of the following is the most appropriate treatment for him now?",
        options: [
          "folic acid 5 mg PO alone",
          "methylene blue 1 mg/kg IV",
          "prednisone 75 mg PO",
          "Red blood cell transfusion",
          "sodium bicarbonate IV infusion",
        ],
        correct: 3,
        explanation:
          "Breathlessness at rest, a rising pulse and a hemoglobin still falling, now 57 g/L, show that his anemia is severe and symptomatic, so he needs a red cell transfusion now. The hemolysis usually settles on its own once the trigger is gone and the oldest, most enzyme-deficient red cells have been destroyed, but he must be supported until then. Methylene blue needs NADPH, which G6PD-deficient cells cannot make, and it can itself cause hemolysis. His saturation of 98% also gives no reason to suspect methemoglobinemia. Prednisone treats autoimmune hemolysis, and his bite and blister cells point to oxidative damage from G6PD deficiency instead. Folic acid supports red cell production over weeks. Bicarbonate does not treat the anemia.",
        keyFeature: { topic: "sob", n: 3 },
        source: "luzzatto-g6pd",
      },
    ],
    sources: [LUZZATTO],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
];
