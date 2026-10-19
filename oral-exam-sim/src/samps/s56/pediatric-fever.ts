// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "pediatric-fever", reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  scharman: { id: "scharman-dimenhydrinate", citation: "Scharman EJ, Erdman AR, Wax PM, et al. Diphenhydramine and dimenhydrinate poisoning: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol (Phila). 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16749537/" },
  chyka: { id: "chyka-charcoal", citation: "Chyka PA, Seger D, Krenzelok EP, Vale JA. Position paper: single-dose activated charcoal. American Academy of Clinical Toxicology and European Association of Poisons Centres and Clinical Toxicologists. Clin Toxicol (Phila). 2005.", url: "https://pubmed.ncbi.nlm.nih.gov/15822758/" },
  venkatesan: { id: "venkatesan-encephalitis", citation: "Venkatesan A, Tunkel AR, Bloch KC, et al. Case definitions, diagnostic algorithms, and priorities in encephalitis: consensus statement of the International Encephalitis Consortium. Clin Infect Dis. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23861361/" },
  sscPeds: { id: "ssc-peds-2026", citation: "Weiss SL, Peters MJ, Oczkowski SJ, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Pediatr Crit Care Med. 2026.", url: "https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-the-management-of-sepsis-and-septic-shock-in" },
  ata: { id: "ata-hyperthyroidism-2016", citation: "Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27521067/" },
  akhDose: { id: "akh-antipyretic-dosing", citation: "SickKids AboutKidsHealth. Acetaminophen and ibuprofen dose recommendations. 2024.", url: "https://www.aboutkidshealth.ca/globalassets/assets/acetaminophen-and-ibuprofen-dose-recommendations.pdf" },
  vicente: { id: "vicente-agranulocytosis", citation: "Vicente N, Cardoso L, Barros L, Carrilho F. Antithyroid drug-induced agranulocytosis: state of the art on diagnosis and management. Drugs R D. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28105610/" },
  cwcSinus: { id: "cwc-peds-ent-2021", citation: "McDonough M, Hathi K, et al. Choosing Wisely Canada pediatric otolaryngology recommendations. J Otolaryngol Head Neck Surg. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8557011/" },
  aapSinus: { id: "aap-sinusitis-2013", citation: "Wald ER, Applegate KE, Bordley C, et al. Clinical practice guideline for the diagnosis and management of acute bacterial sinusitis in children aged 1 to 18 years. Pediatrics. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23796742/" },
  thompson: { id: "thompson-mening", citation: "Thompson MJ, Ninis N, Perera R, et al. Clinical recognition of meningococcal disease in children and adolescents. Lancet. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16458763/" },
  fn: { id: "fn-peds-2023", citation: "Lehrnbecher T, Robinson PD, Ammann RA, et al. Guideline for the management of fever and neutropenia in pediatric patients with cancer and hematopoietic cell transplantation recipients: 2023 update. J Clin Oncol. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/36689694/" },
  galazka: { id: "galazka-ecthyma", citation: "Gałązka P, Kaczor P, Kałużny K, Leis K. Ecthyma gangrenosum as a serious complication of Pseudomonas aeruginosa infection in departments of paediatric oncology. Postepy Dermatol Alergol. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8501443/" },
} satisfies Record<string, Source>;

export const PEDIATRIC_FEVER_S56: Samp[] = [
  /* 48 Dimenhydrinate poisoning with fever ------------------------------- */
  {
    id: "pediatric-fever-48",
    title: "Hot, restless toddler after a weekend away",
    alsoTopics: ["tox", "infectious-diseases"],
    stem:
      "A 3-year-old girl is brought to the emergency department by her parents at 21:00 because she has been hot, restless and confused for 3 hours. She cries out at shadows on the wall and reaches for things that are not there. The family drove home this afternoon from a cool, rainy weekend at a cottage and arrived at 15:00. She has had no cough, vomiting, diarrhea or rash, and she has not passed urine since noon. She is healthy and her immunizations are up to date. Her face and chest are red and hot, with no sweat on her scalp or in her groin. Her lips are cracked and her tongue is dry. Her pupils are wide and barely constrict to light. Her abdomen is soft with few bowel sounds, and there is a dull swelling above the pubis. Her neck is supple and she moves all limbs.",
    vitals: { temperature: "38.9°C rectal", pulse: "168/minute", resp: "28/minute", bp: "102/64 mmHg", o2sat: "98% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of this child's fever and confusion?",
        options: [
          "Anticholinergic poisoning",
          "Bacterial meningitis",
          "Classic heat stroke",
          "Herpes simplex encephalitis",
          "Serotonin toxicity",
        ],
        correct: 0,
        explanation:
          "Fever, agitated delirium with hallucinations, wide pupils, red dry skin with no sweat, a dry mouth, few bowel sounds and a full bladder form the anticholinergic toxidrome, a noninfectious cause of fever in a child with no source. Serotonin toxicity causes sweating, clonus and diarrhea rather than dry skin and urinary retention. Meningitis and encephalitis cause fever and confusion but do not explain dry skin, wide pupils and retention together, and her neck is supple. Classic heat stroke needs a hot environment, and her weekend was cool and rainy.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "scharman-dimenhydrinate",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her father finds that a blister pack of his dimenhydrinate 50 mg tablets, kept in the back seat beside her during the drive, is missing 5 tablets.",
        prompt: "Which of the following decontamination measures is most appropriate for her now?",
        options: [
          "Activated charcoal by mouth",
          "Activated charcoal by NG tube",
          "Gastric lavage by orogastric tube",
          "Whole bowel irrigation by NG tube",
          "No decontamination",
        ],
        correct: 4,
        explanation:
          "Five 50 mg tablets is up to 250 mg, about 17 mg/kg for her 15 kg, but she took them at least 6 hours ago, because the drive ended at 15:00. The AACT and EAPCCT position paper says single-dose charcoal should not be given routinely, may be considered up to 1 hour after a toxic ingestion, and is contraindicated unless the airway is intact or protected. This delirious, agitated toddler would need restraint and a nasogastric tube to receive it, with a real risk of aspiration. Gastric lavage and whole bowel irrigation carry the same airway risk and are not routine for an ingestion this late. Supportive care is her treatment.",
        keyFeature: { topic: "tox", n: 6 },
        source: "chyka-charcoal",
      },
      {
        id: "q3",
        kind: "single",
        update: "Overnight she needs two doses of midazolam. By 09:00 her skin is moist, her pupils are 4 mm and she has voided. She is still confused and cannot name her toys, and her temperature is 38.7°C.",
        prompt: "Which of the following is the most appropriate next step in her care now?",
        options: ["Further observation", "Lumbar puncture", "Physostigmine IV", "Repeat midazolam IV", "Urine drug screen"],
        correct: 1,
        explanation:
          "Her sweating, pupils and voiding have recovered, so the anticholinergic effect has worn off, yet she is still confused and febrile 15 hours after the onset. The International Encephalitis Consortium bases its case definition on altered mental status with no alternative cause identified, with fever as a supporting feature, and advises lumbar puncture in suspected encephalitis unless it is contraindicated. Once the toxidrome has cleared, the ingestion no longer explains her state, so meningitis and encephalitis must be sought. Physostigmine reverses active anticholinergic signs, which she no longer has. More observation or more midazolam delays the diagnosis, and a urine drug screen would not change her care.",
        keyFeature: { topic: "infectious-diseases", n: 5 },
        source: "venkatesan-encephalitis",
      },
    ],
    sources: [S.scharman, S.chyka, S.venkatesan],
    ...META,
  },

  /* 49 Thyrotoxicosis presenting as persistent fever ---------------------- */
  {
    id: "pediatric-fever-49",
    title: "Teenager with evening fevers and a racing heart",
    stem:
      "A 14-year-old girl is brought to the emergency department by her mother with 3 weeks of evening temperatures up to 38.0°C, palpitations and poor sleep. She has lost 4 kg although she is eating more than usual, and her school marks have dropped. A walk-in clinic diagnosed a viral illness 10 days ago. She has no cough, rash, joint pain, diarrhea or recent travel, and takes no medications. She has a fine tremor of the outstretched hands. Her skin is warm and moist. Her thyroid is diffusely enlarged and not tender, and there is mild lid retraction on both sides. Heart sounds are normal with no murmur, and she is alert and oriented.",
    vitals: { temperature: "37.8°C oral", pulse: "108/minute", resp: "18/minute", bp: "126/56 mmHg", o2sat: "99% on room air", weight: "36 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her persistent low-grade fever?",
        options: [
          "Acute lymphoblastic leukemia",
          "Graves hyperthyroidism",
          "Infective endocarditis",
          "Inflammatory bowel disease",
          "Systemic lupus erythematosus",
        ],
        correct: 1,
        explanation:
          "Low-grade fever with weight loss despite a big appetite, palpitations, tremor, warm moist skin, a diffuse goitre and lid retraction point to Graves hyperthyroidism, an uncommon cause of persistent fever in a child with no source. Temperature is one of the features scored in the Burch-Wartofsky point scale for thyroid storm, which the ATA guideline uses. Inflammatory bowel disease causes weight loss with abdominal pain and diarrhea, not tremor and a goitre. Leukemia causes pallor, bruising and bone pain. Endocarditis is unlikely without a murmur or heart disease, and lupus would bring a rash or joint pain.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "ata-hyperthyroidism-2016",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her mother has been giving her two 325 mg adult acetaminophen tablets for the evening fevers, the dose on the package for age 12 and over.",
        prompt: "Which of the following acetaminophen doses is most appropriate for her fevers?",
        options: [
          "acetaminophen 160 mg PO",
          "acetaminophen 320 mg PO",
          "acetaminophen 480 mg PO",
          "acetaminophen 650 mg PO",
          "acetaminophen 1 000 mg PO",
        ],
        correct: 2,
        explanation:
          "She is 14 but weighs 36 kg, so her dose is set by her weight, not by the age on the package. The SickKids sheet gives 10 to 15 mg/kg every 4 to 6 hours, up to 5 doses a day, lists 480 mg for children of 32 to 44 kg and keeps adult dosing for children over 44 kg. 480 mg is 13.3 mg/kg for her. Her mother's 650 mg is 18 mg/kg and 1 000 mg is about 28 mg/kg, both above the single dose range. 160 mg is 4.4 mg/kg and 320 mg is 8.9 mg/kg, too little to help.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "akh-antipyretic-dosing",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her specialist starts a daily tablet. Seven weeks later she returns with a temperature of 39.3°C, a sore throat and painful mouth ulcers. She has no cough.",
        prompt: "Which of the following investigations is most important for her at this visit?",
        options: [
          "CBC with differential",
          "Chest X-ray, two views",
          "Monospot test",
          "Rapid strep antigen test",
          "Throat swab for viral PCR",
        ],
        correct: 0,
        explanation:
          "With Graves disease, her daily tablet is most likely an antithyroid drug such as methimazole, and fever, sore throat and mouth ulcers weeks after starting it raise concern for agranulocytosis. The ATA advises that a child on an antithyroid drug who develops fever, mouth sores or pharyngitis stop the drug at once and have a white count measured. A CBC with differential shows whether her neutrophils are gone, which decides how urgent her care is. A rapid strep test, a viral throat swab and a monospot test look for common causes of a sore throat but would miss a neutrophil count near zero. A chest X-ray is not needed without cough or chest signs.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "ata-hyperthyroidism-2016",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her absolute neutrophil count is 0.2 x 10^9/L. Her pulse is 128/minute and her BP is 104/60 mmHg. The tablet has been stopped.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Admit and observe off antibiotics",
          "Amoxicillin-clavulanate PO at home",
          "Filgrastim SC without antibiotics",
          "IV broad-spectrum antibiotics",
          "Repeat CBC in 24 hours",
        ],
        correct: 3,
        explanation:
          "An absolute neutrophil count below 0.5 x 10^9/L on an antithyroid drug is agranulocytosis, and with a fever of 39.3°C she is at risk of overwhelming infection. Vicente and colleagues make IV broad-spectrum antibiotics, started soon after blood, urine and other cultures, the mainstay of treatment, with admission for IV therapy. Oral amoxicillin-clavulanate at home and observation off antibiotics leave a neutropenic infection untreated. Filgrastim may be added in selected patients on expert advice, but evidence that it speeds recovery is mixed and it does not replace antibiotics. Waiting 24 hours for a repeat count delays treatment.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "vicente-agranulocytosis",
      },
    ],
    sources: [S.ata, S.akhDose, S.vicente],
    ...META,
  },

  /* 50 Viral rhinosinusitis with green discharge -------------------------- */
  {
    id: "pediatric-fever-50",
    title: "Boy with a cold and green discharge",
    stem:
      "A 6-year-old boy is brought to the emergency department by his mother with 6 days of runny nose, nasal congestion and daytime cough. He had a temperature of 38.4°C on the first 2 days only. Since yesterday his nasal discharge has turned thick and green, but his congestion and cough have not worsened. He is eating, drinking and playing, but he slept poorly last night because of his cough. He has no headache, eye swelling or ear pain. His mother asks for an antibiotic for a sinus infection. He has no medical history and his immunizations are up to date. He is alert and playful. There is thick green discharge in both nostrils and mild redness of the throat. His eyelids are normal, his eye movements are full and painless, and his ears and chest are normal.",
    vitals: { temperature: "37.6°C oral", pulse: "104/minute", resp: "22/minute", o2sat: "99% on room air", weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of this boy's illness?",
        options: [
          "Amoxicillin for 10 days",
          "Amoxicillin-clavulanate for 10 days",
          "Azithromycin for 5 days",
          "Cefuroxime axetil for 10 days",
          "Saline rinses, fluids and analgesia",
        ],
        correct: 4,
        explanation:
          "The AAP diagnoses acute bacterial sinusitis only with persistent illness beyond 10 days without improvement, a worsening course after initial improvement, or a severe onset with a temperature of 39°C or more and purulent discharge for at least 3 days in a row. He has had 6 days of symptoms, his fever of 38.4°C lasted only 2 days and his congestion and cough have not worsened, so this is a viral cold. Green discharge alone does not mean a bacterial infection. Amoxicillin, amoxicillin-clavulanate, azithromycin and cefuroxime would add side effects and resistance without benefit.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "aap-sinusitis-2013",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for him in the emergency department today?",
        options: [
          "Blood count and CRP",
          "CT of the sinuses",
          "Nasal swab for bacterial culture",
          "Plain X-rays of the sinuses",
          "No investigations",
        ],
        correct: 4,
        explanation:
          "Choosing Wisely Canada advises against imaging to tell acute bacterial sinusitis from a viral infection, because the diagnosis rests on clinical criteria and abnormal sinus images are common in colds. Imaging is kept for a child who is immunocompromised or has orbital, intracranial or suppurative complications. He is healthy, and his eyelids, eye movements and neurologic state are normal. The diagnosis rests on the history, so a nasal swab culture, a blood count and a CRP add nothing to the decision and may prompt needless antibiotics.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "cwc-peds-ent-2021",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings at a return visit would most justify starting an antibiotic for him?",
        options: [
          "Cough that is worse at night",
          "Green discharge for 3 more days",
          "Nasal congestion lasting 8 days",
          "New fever after initial improvement",
          "Sore throat with the cough",
        ],
        correct: 3,
        explanation:
          "A worsening course, with new fever, discharge or cough after he had started to improve, is one of the three AAP patterns of acute bacterial sinusitis, and the AAP advises an antibiotic in that case. Congestion for 8 days is still short of the 10 days that define persistent illness. A cough that is worse at night, green discharge and a sore throat with the cough are all expected in a viral cold and do not by themselves call for an antibiotic.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "aap-sinusitis-2013",
      },
    ],
    sources: [S.aapSinus, S.cwcSinus],
    ...META,
  },

  /* 51 Early meningococcal sepsis before the rash ------------------------- */
  {
    id: "pediatric-fever-51",
    title: "Girl whose legs hurt too much to walk",
    alsoTopics: ["shock"],
    stem:
      "An 11-year-old girl is brought to the emergency department by her father 9 hours after a fever began at school. She has vomited twice. For the past 2 hours she has said her legs hurt so much that she does not want to walk, and her father says her hands and feet feel cold although she feels hot. She has no cough, sore throat, rash or urinary symptoms. She is healthy, takes no medications and her immunizations are up to date. She is pale and quiet but answers questions. Her hands and feet are cool and her capillary refill is 4 seconds. Her neck is supple. A full skin examination shows no rash. Her throat, ears and chest are normal.",
    vitals: { temperature: "39.4°C oral", pulse: "142/minute", resp: "28/minute", bp: "104/62 mmHg", o2sat: "98% on room air", weight: "38 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most strongly suggests sepsis rather than a viral illness in this girl?",
        options: [
          "Cold hands and feet with leg pain",
          "Fever for 9 hours",
          "Temperature of 39.4°C",
          "Two episodes of vomiting",
          "Unremarkable throat and ears",
        ],
        correct: 0,
        explanation:
          "In a study of 448 children and adolescents with meningococcal disease, 72% had early signs of sepsis, namely leg pain, cold hands and feet and abnormal skin colour, at a median of 8 hours, while the rash, neck stiffness and confusion came later, at a median of 13 to 22 hours. She has leg pain and cold extremities 9 hours into her illness. The height of the fever, its duration and two vomits are common in viral illness and do not separate the two. A normal throat and ears only rule out one source.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "thompson-mening",
      },
      {
        id: "q2",
        kind: "single",
        update: "A peripheral IV is placed, blood cultures are drawn and ceftriaxone is given. A 20 mL/kg bolus of balanced crystalloid is running.",
        prompt: "Which of the following blood tests is most important to add to her initial evaluation?",
        options: ["D-dimer level", "Ferritin level", "Lactate level", "Procalcitonin level", "Troponin level"],
        correct: 2,
        explanation:
          "The 2026 Surviving Sepsis Campaign guideline for children makes a strong recommendation to measure blood lactate as part of the initial evaluation of probable sepsis or suspected septic shock. She has a fever with cold hands and feet, a capillary refill of 4 seconds and a pulse of 142/minute, so she qualifies. The guideline makes no recommendation for procalcitonin at this stage and suggests against using it routinely to guide stopping antibiotics. A ferritin, a D-dimer and a troponin answer other questions, such as a hyperinflammatory state, clotting or heart muscle injury, and do not guide her first hour.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "ssc-peds-2026",
      },
      {
        id: "q3",
        kind: "menu",
        select: 1,
        update: "After 40 mL/kg of crystalloid her pulse is 148/minute and her capillary refill is 4 seconds. Epinephrine at 0.1 mcg/kg/minute is started through her peripheral IV. Thirty minutes later her pulse is 116/minute, capillary refill 2 seconds and BP 108/64 mmHg.",
        prompt: "Which of the following treatments should be added to her care at this point?",
        options: [
          "Albumin 5% bolus IV",
          "Hydrocortisone IV",
          "Levothyroxine IV",
          "Sodium bicarbonate IV",
          "Thiamine IV",
          "Vitamin C IV",
          "None",
        ],
        correct: [6],
        explanation:
          "Her circulation has been restored with fluid and epinephrine, and the 2026 Surviving Sepsis Campaign guideline for children suggests against IV hydrocortisone in that situation. Stress-dose steroids are kept for suspected or known adrenal insufficiency, and she is healthy and takes no medications. The guideline also suggests against routine vitamin C, thiamine and levothyroxine, and favours crystalloids over albumin for resuscitation. It makes no recommendation on sodium bicarbonate for acidemia, and no acidemia has been reported. Nothing needs to be added now.",
        keyFeature: { topic: "shock", n: 8 },
        source: "ssc-peds-2026",
      },
    ],
    sources: [S.thompson, S.sscPeds],
    ...META,
  },

  /* 52 Fever with a necrotic skin lesion during chemotherapy -------------- */
  {
    id: "pediatric-fever-52",
    title: "Fever and a dark spot during treatment",
    stem:
      "A 7-year-old boy is brought to the emergency department by his mother 2 hours after a temperature of 38.6°C at home. He has acute lymphoblastic leukemia and is in the delayed intensification phase of chemotherapy, with his last dose 8 days ago. He has a tunnelled central venous line in the right side of his chest. Since this morning he has had a dark spot on his left buttock. He has no cough, diarrhea or urinary symptoms. He is tired but alert. On the left buttock there is a 2 cm round, raised lesion with a black centre and a red rim. The line exit site is clean. Capillary refill is 2 seconds.",
    vitals: { temperature: "38.9°C oral", pulse: "132/minute", resp: "24/minute", bp: "98/58 mmHg", o2sat: "98% on room air", weight: "23 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of the lesion on this boy's buttock?",
        options: [
          "Bruise from a low platelet count",
          "Ecthyma gangrenosum",
          "Insect bite reaction",
          "Pressure injury from sitting",
          "Varicella with crusting",
        ],
        correct: 1,
        explanation:
          "A round lesion with a black eschar surrounded by redness on the buttock, in a febrile child on chemotherapy, is ecthyma gangrenosum. Gałązka and colleagues describe it as a complication mostly of Pseudomonas aeruginosa bloodstream infection in children with neutropenia, most often on the lower back, perineum and buttocks, and progressing to necrotic ulcers within 12 to 24 hours. It is a dangerous rash that needs urgent treatment. A bruise from thrombocytopenia is flat with no eschar, an insect bite is small and itchy, a pressure injury sits over a bony prominence after immobility, and varicella starts as crops of vesicles rather than one necrotic lesion.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "galazka-ecthyma",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        prompt: "Which of the following investigations are most appropriate for him at the onset of this fever?",
        options: [
          "Blood culture from each line lumen",
          "CBC with differential",
          "Chest X-ray, two views",
          "CT of the pelvis",
          "Lumbar puncture",
          "Stool for C difficile toxin",
          "Throat swab for strep",
        ],
        correct: [0, 1],
        explanation:
          "The 2023 pediatric fever and neutropenia guideline recommends blood cultures from all lumens of the central venous catheter at the onset of fever, and a CBC with differential confirms the neutrophil count that drives his risk and treatment. It advises chest radiography only for children with respiratory signs or symptoms, and he has none. He has no diarrhea, sore throat, headache or neck stiffness, so stool testing, a throat swab and a lumbar puncture are not indicated. A pelvic CT does not help a superficial skin lesion.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "fn-peds-2023",
      },
      {
        id: "q3",
        kind: "single",
        update: "His neutrophil count is 0.1 x 10^9/L. Piperacillin-tazobactam was started 30 minutes after arrival. An hour later he is drowsy, his capillary refill is 4 seconds and his BP is 74/38 mmHg after 40 mL/kg of crystalloid.",
        prompt: "Which of the following changes to his antimicrobial therapy is most appropriate now?",
        options: ["Add acyclovir IV", "Add clindamycin IV", "Add fluconazole IV", "Add gentamicin IV", "Add metronidazole IV"],
        correct: 3,
        explanation:
          "He is now hypotensive and drowsy, so he is clinically unstable. The 2023 pediatric fever and neutropenia guideline uses monotherapy with an antipseudomonal beta-lactam for high-risk patients and reserves a second anti-gram-negative agent or a glycopeptide for those who are clinically unstable or at risk of resistant infection. His ecthyma points to Pseudomonas, so a second anti-gram-negative agent such as gentamicin broadens his gram-negative cover. Piperacillin-tazobactam already covers anaerobes, so metronidazole adds little, and clindamycin has no gram-negative activity. Empiric antifungal therapy is for persistent fever in high-risk patients, not the first hours, and acyclovir treats herpes viruses he shows no sign of.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "fn-peds-2023",
      },
    ],
    sources: [S.galazka, S.fn],
    ...META,
  },
];
