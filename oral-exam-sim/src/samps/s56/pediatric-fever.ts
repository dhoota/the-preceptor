// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { topic: "pediatric-fever", reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  scharman: { id: "scharman-dimenhydrinate", citation: "Scharman EJ, Erdman AR, Wax PM, et al. Diphenhydramine and dimenhydrinate poisoning: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol (Phila). 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16749537/" },
  cagPhyso: { id: "cag-physostigmine", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Physostigmine. Updated 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes/physostigmine" },
  dawson: { id: "dawson-anticholinergic", citation: "Dawson AH, Buckley NA. Pharmacological management of anticholinergic delirium: theory, evidence and practice. Br J Clin Pharmacol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26589572/" },
  sscPeds: { id: "ssc-peds-2020", citation: "Weiss SL, Peters MJ, Alhazzani W, et al. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis-associated organ dysfunction in children. Intensive Care Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32030529/" },
  ata: { id: "ata-hyperthyroidism-2016", citation: "Ross DS, Burch HB, Cooper DS, et al. 2016 American Thyroid Association guidelines for diagnosis and management of hyperthyroidism and other causes of thyrotoxicosis. Thyroid. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27521067/" },
  akhDose: { id: "akh-antipyretic-dosing", citation: "SickKids AboutKidsHealth. Acetaminophen and ibuprofen dose recommendations. 2024.", url: "https://www.aboutkidshealth.ca/globalassets/assets/acetaminophen-and-ibuprofen-dose-recommendations.pdf" },
  aapSinus: { id: "aap-sinusitis-2013", citation: "Wald ER, Applegate KE, Bordley C, et al. Clinical practice guideline for the diagnosis and management of acute bacterial sinusitis in children aged 1 to 18 years. Pediatrics. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23796742/" },
  thompson: { id: "thompson-mening", citation: "Thompson MJ, Ninis N, Perera R, et al. Clinical recognition of meningococcal disease in children and adolescents. Lancet. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16458763/" },
  fn: { id: "fn-peds-2023", citation: "Lehrnbecher T, Robinson PD, Ammann RA, et al. Guideline for the management of fever and neutropenia in pediatric patients with cancer and hematopoietic cell transplantation recipients: 2023 update. J Clin Oncol. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/36689694/" },
  almatrafi: { id: "almatrafi-ecthyma", citation: "Almatrafi MA, Alidrisi D, Alhusaini E, et al. Severe ecthyma gangrenosum in a pediatric patient with neutropenia and a novel HELLS variant: case report. Clin Case Rep. 2026.", url: "https://doi.org/10.1002/ccr3.73143" },
} satisfies Record<string, Source>;

export const PEDIATRIC_FEVER_S56: Samp[] = [
  /* 48 Dimenhydrinate poisoning with fever ------------------------------- */
  {
    id: "pediatric-fever-48",
    title: "Hot, restless toddler after a weekend away",
    stem:
      "A 3-year-old girl is brought to the emergency department by her parents at 21:00 because she has been hot, restless and not making sense for 3 hours. She keeps picking at things in the air and does not seem to recognize her mother. The family returned this afternoon from a cool, rainy weekend at her grandparents' cottage. She has had no cough, vomiting, diarrhea or rash, and she has not passed urine since noon. She is healthy and her immunizations are up to date. She is flushed and agitated. Her pupils are 7 mm and react sluggishly. Her skin, mouth and axillae are dry. Bowel sounds are quiet and her bladder is palpable. Her neck is supple and she moves all limbs.",
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
          "Fever, agitated delirium with picking at the air, dilated pupils, flushed dry skin with dry axillae, quiet bowel sounds and a full bladder form the anticholinergic toxidrome, a noninfectious cause of fever in a child with no source. Serotonin toxicity causes sweating, clonus and diarrhea rather than dry skin and urinary retention. Meningitis and encephalitis cause fever and confusion but do not explain dry skin, wide pupils and retention together, and her neck is supple. Classic heat stroke needs a hot environment, and her weekend was cool and rainy.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "scharman-dimenhydrinate",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her grandmother calls to say that an open sleeve of her dimenhydrinate 50 mg tablets was found in the child's bag, with 5 tablets missing.",
        prompt: "Which of the following investigations is most important for this child now?",
        options: ["CT of the head", "Lumbar puncture", "Serum ammonia", "Twelve lead ECG", "Urine drug screen"],
        correct: 3,
        explanation:
          "Five 50 mg tablets is up to 250 mg, or about 17 mg/kg for her 15 kg. Dimenhydrinate contains diphenhydramine, and Scharman's consensus guideline sends children with more than mild drowsiness or stimulation to the emergency department. A large ingestion can block cardiac sodium channels and widen the QRS, and the Canadian Antidote Guide warns against physostigmine when the QRS is wide, so the ECG decides the next treatment. With a known drug and no focal signs, head CT and lumbar puncture are not needed now. Ammonia and a urine drug screen do not change her care.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "cag-physostigmine",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows sinus tachycardia at 166/minute with a QRS of 82 ms. She remains agitated and keeps pulling at her IV despite her parents and a quiet room.",
        prompt: "Which of the following is the most appropriate treatment for her delirium?",
        options: [
          "haloperidol 0.75 mg IV",
          "ketamine 15 mg IV",
          "physostigmine 0.3 mg IV",
          "quetiapine 25 mg PO",
          "risperidone 0.25 mg PO",
        ],
        correct: 2,
        explanation:
          "Pure anticholinergic delirium that has not settled with calming measures is the indication for physostigmine in the Canadian Antidote Guide, which gives 0.01 to 0.02 mg/kg IV, up to 0.5 mg per dose, in children. For 15 kg, 0.02 mg/kg is 0.3 mg, given slowly. Her QRS of 82 ms is normal and the ingestion is a single known anticholinergic. Dawson and Buckley advise waiting at least 10 to 15 minutes before a repeat dose. Haloperidol, quetiapine and risperidone add their own anticholinergic or QT effects and do not reverse the cause. Ketamine sedates without treating the delirium.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "dawson-anticholinergic",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings would most suggest that sepsis rather than her ingestion explains her illness?",
        options: [
          "Agitation with picking at the air",
          "Cool mottled legs with slow refill",
          "Dry axillae and a dry mouth",
          "Pupils of 7 mm that react slowly",
          "Urinary retention",
        ],
        correct: 1,
        explanation:
          "Anticholinergic poisoning leaves the skin hot, dry and flushed. Cool, mottled legs with a slow capillary refill show impaired perfusion, which the Surviving Sepsis Campaign counts as cardiovascular dysfunction in septic shock even before the blood pressure falls, and it would send the team looking for infection. Delirium with picking, dry axillae and mouth, wide pupils and urinary retention are all part of the toxidrome she already has.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "ssc-peds-2020",
      },
    ],
    sources: [S.scharman, S.cagPhyso, S.dawson, S.sscPeds],
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
          "Low-grade fever with weight loss despite a big appetite, palpitations, tremor, warm moist skin, a diffuse goitre and lid retraction point to Graves hyperthyroidism, an uncommon cause of persistent fever in a child with no source. Temperature is one of the features scored in the ATA point scale for thyroid storm. Inflammatory bowel disease causes weight loss with abdominal pain and diarrhea, not tremor and a goitre. Leukemia causes pallor, bruising and bone pain. Endocarditis is unlikely without a murmur or heart disease, and lupus would bring a rash or joint pain.",
        keyFeature: { topic: "pediatric-fever", n: 5 },
        source: "ata-hyperthyroidism-2016",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for her symptoms in the emergency department?",
        options: ["ceftriaxone IV", "lorazepam IV", "methylprednisolone IV", "propranolol PO", "propylthiouracil PO"],
        correct: 3,
        explanation:
          "The ATA recommends beta-adrenergic blockade for children with symptoms of hyperthyroidism, especially with a resting heart rate above 100/minute, and her pulse is 108/minute. Propranolol eases palpitations and tremor within hours, while antithyroid drugs take weeks. The ATA advises that PTU generally not be used in children because of its risk of liver failure. Ceftriaxone treats an infection she does not have, which is the trap in a febrile child with no source. Lorazepam sedates without treating the cause. She does not have thyroid storm. On the ATA point scale a temperature of 37.8°C scores 10 and a pulse of 108/minute scores 5, with no points for the nervous system, gut or heart, a total of 15 that is well below 25, so corticosteroids are not needed.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "ata-hyperthyroidism-2016",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following acetaminophen doses is most appropriate for her evening fevers?",
        options: [
          "acetaminophen 540 mg PO",
          "acetaminophen 180 mg PO",
          "acetaminophen 900 mg PO",
          "acetaminophen 1 080 mg PO",
          "acetaminophen 1 440 mg PO",
        ],
        correct: 0,
        explanation:
          "Acetaminophen is dosed at 10 to 15 mg/kg every 4 to 6 hours, up to 5 doses a day. For her 36 kg, 15 mg/kg is 540 mg. 180 mg is 5 mg/kg, too little to help. 900 mg is 25 mg/kg, 1 080 mg is 30 mg/kg and 1 440 mg is 40 mg/kg, all above the single dose range and a risk to the liver if repeated. Dosing by weight rather than by age avoids both errors.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "akh-antipyretic-dosing",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her TSH is below 0.01 mIU/L and her free T4 is 58 pmol/L. The pediatric endocrinologist agrees with starting an antithyroid drug today.",
        prompt: "Which of the following antithyroid treatments is most appropriate to start for her?",
        options: ["levothyroxine PO", "methimazole PO", "potassium iodide PO", "propylthiouracil PO", "radioactive iodine PO"],
        correct: 1,
        explanation:
          "Methimazole is the antithyroid drug the ATA recommends for virtually every patient with Graves disease who chooses drug therapy, and it is the drug used in children. The ATA advises that propylthiouracil generally not be used in children because of the risk of severe liver injury. Potassium iodide is part of thyroid storm and preoperative care, not first-line therapy. Radioactive iodine is a later, planned decision, not an emergency start. Levothyroxine would add thyroid hormone and worsen her thyrotoxicosis.",
        keyFeature: { topic: "pediatric-fever", n: 6 },
        source: "ata-hyperthyroidism-2016",
      },
    ],
    sources: [S.ata, S.akhDose],
    ...META,
  },

  /* 50 Viral rhinosinusitis with green discharge -------------------------- */
  {
    id: "pediatric-fever-50",
    title: "Boy with a cold and green discharge",
    stem:
      "A 6-year-old boy is brought to the emergency department by his mother with 6 days of runny nose, nasal congestion and daytime cough. He had a temperature of 38.4°C on the first 2 days only. Since yesterday his nasal discharge has turned thick and green. He is eating, drinking and playing, but he slept poorly last night because of his cough. He has no headache, eye swelling or ear pain. His mother asks for an antibiotic for a sinus infection. He has no medical history and his immunizations are up to date. He is alert and playful. There is thick green discharge in both nostrils and mild redness of the throat. His eyelids are normal, his eye movements are full and painless, and his ears and chest are normal.",
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
          "The AAP diagnoses acute bacterial sinusitis only with persistent illness beyond 10 days without improvement, a worsening course after initial improvement, or a severe onset with a temperature of 39°C or more and purulent discharge for at least 3 days in a row. He has had 6 days of symptoms, his fever of 38.4°C lasted only 2 days and he is improving, so this is a viral cold. Green discharge alone does not mean a bacterial infection. Amoxicillin, amoxicillin-clavulanate, azithromycin and cefuroxime would add side effects and resistance without benefit.",
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
          "The AAP advises against imaging of any kind to tell acute bacterial sinusitis from a viral cold, because it does not help the diagnosis, and it keeps contrast CT for a child with suspected orbital or intracranial complications. His eyelids, eye movements and neurologic state are normal, so there is no such concern. The diagnosis rests on the history, so a nasal swab culture, a blood count and a CRP add nothing to the decision and may prompt needless antibiotics.",
        keyFeature: { topic: "pediatric-fever", n: 7 },
        source: "aap-sinusitis-2013",
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
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following ibuprofen doses is most appropriate for his discomfort and any fever?",
        options: [
          "ibuprofen 50 mg PO",
          "ibuprofen 400 mg PO",
          "ibuprofen 200 mg PO",
          "ibuprofen 600 mg PO",
          "ibuprofen 800 mg PO",
        ],
        correct: 2,
        explanation:
          "Ibuprofen is dosed at 5 to 10 mg/kg every 6 to 8 hours, up to 4 doses a day, in children 6 months and older. For his 20 kg, 10 mg/kg is 200 mg. 50 mg is 2.5 mg/kg, too little to help. 400 mg is 20 mg/kg, 600 mg is 30 mg/kg and 800 mg is 40 mg/kg, all well above the single dose range and a risk to the stomach and kidneys. Dosing by his weight rather than his age gives the right amount.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "akh-antipyretic-dosing",
      },
    ],
    sources: [S.aapSinus, S.akhDose],
    ...META,
  },

  /* 51 Early meningococcal sepsis before the rash ------------------------- */
  {
    id: "pediatric-fever-51",
    title: "Girl whose legs hurt too much to walk",
    stem:
      "An 11-year-old girl is brought to the emergency department by her father 9 hours after a fever began at school. She has vomited twice. For the past 2 hours she has said her legs hurt so much that she does not want to walk, and her father says her hands and feet feel cold although she feels hot. She has no cough, sore throat, rash or urinary symptoms. She is healthy and her immunizations are up to date. She is pale and quiet but answers questions. Her hands and feet are cool and her capillary refill is 4 seconds. Her neck is supple. A full skin examination shows no rash. Her throat, ears and chest are normal.",
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
        prompt: "Which of the following best describes the state of her circulation at this point?",
        options: [
          "Dehydration from vomiting only",
          "Normal circulation for her fever",
          "Sepsis without circulatory failure",
          "Septic shock despite a normal BP",
          "Vasovagal response to pain",
        ],
        correct: 3,
        explanation:
          "The Surviving Sepsis Campaign defines septic shock in children as severe infection with cardiovascular dysfunction, which includes impaired perfusion, hypotension or the need for a vasoactive drug. Her cool hands and feet, capillary refill of 4 seconds and pulse of 142/minute show impaired perfusion, so she is in shock even though her BP of 104/62 mmHg is normal. Children keep their BP up until late, so waiting for hypotension delays treatment. Two vomits do not explain cold extremities at 39.4°C, and a vasovagal response causes slowing of the pulse, not tachycardia.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "ssc-peds-2020",
      },
      {
        id: "q3",
        kind: "single",
        update: "A peripheral IV is placed and blood cultures are drawn. A 20 mL/kg bolus of crystalloid is running.",
        prompt: "Which of the following is the most appropriate empiric antibiotic for her now?",
        options: ["azithromycin IV", "cefazolin IV", "ceftriaxone IV", "gentamicin IV", "metronidazole IV"],
        correct: 2,
        explanation:
          "In children with septic shock the Surviving Sepsis Campaign recommends antimicrobials as soon as possible, within 1 hour of recognition, and notes that a third-generation cephalosporin such as ceftriaxone may be enough for a previously healthy child with community-acquired sepsis. Ceftriaxone covers Neisseria meningitidis and Streptococcus pneumoniae and reaches the cerebrospinal fluid. Cefazolin does not reliably reach the CSF and is not used for meningococcal disease. Gentamicin alone, azithromycin and metronidazole do not cover the likely organisms adequately.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "ssc-peds-2020",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings after her fluid bolus would best show that her perfusion is improving?",
        options: [
          "Capillary refill of 2 seconds, warm feet",
          "Fever falling to 38.0°C",
          "Leg pain eased by ibuprofen",
          "Respiratory rate rising to 34/minute",
          "Urine output of 0.3 mL/kg/hour",
        ],
        correct: 0,
        explanation:
          "The Surviving Sepsis Campaign titrates fluid to clinical markers of cardiac output such as heart rate, capillary refill, level of consciousness and urine output. A capillary refill back to 2 seconds with warm feet shows that her peripheral perfusion is recovering. A falling temperature and less leg pain after an antipyretic say nothing about her circulation. A rising respiratory rate may be a sign of fluid overload or worsening acidosis. A urine output of 0.3 mL/kg/hour is still low.",
        keyFeature: { topic: "pediatric-fever", n: 2 },
        source: "ssc-peds-2020",
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
      "A 7-year-old boy is brought to the emergency department by his mother 2 hours after a temperature of 38.6°C at home. He has acute lymphoblastic leukemia and is in the delayed intensification phase of chemotherapy, with his last dose 8 days ago. He has a tunnelled central venous line in the right side of his chest. Since this morning he has had a painful spot on his left buttock. He has no cough, diarrhea or urinary symptoms. He is tired but alert. On the left buttock there is a 2 cm round, raised lesion with a dark, almost black centre and a red, tender rim. The line exit site is clean. Capillary refill is 2 seconds.",
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
          "A painful round lesion with a black necrotic centre and a red rim, in a febrile child on chemotherapy, is ecthyma gangrenosum, a severe skin sign usually caused by Pseudomonas aeruginosa in an immunocompromised host and often a marker of bloodstream infection. It is a dangerous rash that needs urgent treatment. A bruise from thrombocytopenia is flat and not tender, an insect bite is small and itchy, a pressure injury sits over a bony prominence after immobility, and varicella starts as crops of vesicles rather than one necrotic lesion.",
        keyFeature: { topic: "pediatric-fever", n: 4 },
        source: "almatrafi-ecthyma",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of his history most determines the urgency of his fever assessment?",
        options: [
          "Age of 7 years",
          "Fever of 38.6°C at home",
          "His chemotherapy 8 days ago",
          "Normal capillary refill",
          "Pulse of 132/minute",
        ],
        correct: 2,
        explanation:
          "Intensive chemotherapy 8 days ago makes neutropenia likely, so his fever is managed as fever and neutropenia, an emergency, whatever his age or how well he looks. The pediatric fever and neutropenia guideline advises a validated risk stratification approach and empiric antibiotics as soon as possible. At 7 years, age alone would not prompt a septic workup. A single home temperature, a normal capillary refill and a pulse of 132/minute with a fever of 38.9°C do not on their own set his risk.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "fn-peds-2023",
      },
      {
        id: "q3",
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
        id: "q4",
        kind: "single",
        update: "His absolute neutrophil count is 0.1 x 10^9/L. He remains alert with a BP of 98/58 mmHg.",
        prompt: "Which of the following empiric antibiotic regimens is most appropriate for him now?",
        options: [
          "amoxicillin-clavulanate PO",
          "cefazolin IV alone",
          "ceftriaxone IV alone",
          "clindamycin IV alone",
          "piperacillin-tazobactam IV",
        ],
        correct: 4,
        explanation:
          "For high-risk fever and neutropenia the guideline recommends monotherapy with an antipseudomonal beta-lactam, a fourth-generation cephalosporin or a carbapenem, and his skin lesion makes Pseudomonas the organism to cover. Piperacillin-tazobactam is an antipseudomonal beta-lactam. A second gram-negative agent or a glycopeptide is reserved for unstable children or suspected resistance, and he is stable. Cefazolin, ceftriaxone, clindamycin and amoxicillin-clavulanate do not cover Pseudomonas, and an oral drug is not appropriate with a neutrophil count of 0.1 x 10^9/L.",
        keyFeature: { topic: "pediatric-fever", n: 3 },
        source: "fn-peds-2023",
      },
    ],
    sources: [S.almatrafi, S.fn],
    ...META,
  },
];
