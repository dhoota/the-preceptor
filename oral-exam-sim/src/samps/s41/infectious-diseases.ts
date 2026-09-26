// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

export const INFECTIOUS_DISEASES_S41_SAMPS: Samp[] = [
  {
    id: "infectious-diseases-16",
    topic: "infectious-diseases",
    title: "Fever in a preschooler with a blood disorder",
    stem: "A 4-year-old boy is brought to the emergency department by his mother with fever that began 3 hours ago. He has sickle cell disease (HbSS) and takes daily penicillin prophylaxis and folic acid. He has never had a blood transfusion. He has had no cough, vomiting or diarrhea. His immunizations are up to date. He is irritable but consolable. Capillary refill is 2 seconds. His chest is clear, with no increased work of breathing. His abdomen is soft and the spleen is not palpable. There is no joint swelling and no bone tenderness.",
    vitals: {
      temperature: "39.6°C rectal",
      pulse: "142/minute",
      resp: "28/minute",
      bp: "98/58 mmHg",
      o2sat: "98% on room air",
      weight: "16 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following best explains why this child is at high risk of overwhelming bacterial infection?",
        kind: "single",
        options: [
          "Functional asplenia from splenic infarction",
          "Hypogammaglobulinemia from folate deficiency",
          "Iron overload from repeated transfusion",
          "Lymphopenia from hydroxyurea therapy",
          "Neutropenia caused by penicillin prophylaxis"
        ],
        correct: 0,
        explanation: "In HbSS, repeated splenic infarction causes functional asplenia in early childhood, which fits a spleen that is no longer palpable at age 4. Loss of splenic function leaves him open to rapidly fatal infection with encapsulated organisms such as Streptococcus pneumoniae. He has never been transfused, so iron overload does not apply. Prophylactic penicillin lowers his pneumococcal risk and nothing in the case suggests neutropenia. He does not take hydroxyurea, and he takes folic acid, which does not cause antibody deficiency.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "yawn"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate timing for his first dose of parenteral antibiotic?",
        kind: "single",
        options: [
          "After blood culture results at 24 hours",
          "After CBC and reticulocyte count return",
          "After chest X-ray excludes acute chest",
          "Immediately, without waiting for results",
          "Only if fever persists after ibuprofen"
        ],
        correct: 3,
        explanation: "A child with sickle cell disease and a temperature of 38.5°C or more needs urgent assessment and prompt parenteral antibiotics, because pneumococcal sepsis can kill within hours. His temperature is 39.6°C, so the dose should go in as soon as cultures are drawn, without waiting for any result. Laboratory results and a chest X-ray help guide later care but must not delay the first dose. Blood culture results take a day or more. Response to an antipyretic does not separate bacterial from viral illness.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 1
        },
        source: "yawn"
      },
      {
        id: "q3",
        prompt: "Which of the following investigations are most appropriate for him now?",
        kind: "menu",
        options: [
          "Abdominal ultrasound",
          "Blood culture",
          "CBC with differential",
          "Chest X-ray",
          "CT of the head",
          "Hemoglobin electrophoresis",
          "Lumbar puncture",
          "Reticulocyte count",
          "Throat swab culture"
        ],
        select: 3,
        correct: [
          1,
          2,
          7
        ],
        explanation: "The expert panel advises a CBC with differential, a reticulocyte count and a blood culture for every febrile child with sickle cell disease, with a urine culture when urinary infection is suspected. The reticulocyte count and hemoglobin detect aplastic crisis or splenic sequestration. A chest X-ray is reserved for respiratory signs or hypoxia, and he has a clear chest and normal saturation. He has no meningeal or neurological signs to justify a lumbar puncture or head CT. Electrophoresis adds nothing when the genotype is known, and he has no abdominal or throat findings.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "yawn"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most appropriate empiric antibiotic order for him?",
        kind: "single",
        options: [
          "amoxicillin 720 mg PO",
          "azithromycin 160 mg PO",
          "cefazolin 400 mg IV",
          "ceftriaxone 800 mg IV",
          "vancomycin 240 mg IV"
        ],
        correct: 3,
        explanation: "Parenteral ceftriaxone covers Streptococcus pneumoniae and gram negative enteric organisms, as the expert panel recommends for fever in sickle cell disease. At 50 mg/kg, 16 kg x 50 mg = 800 mg. Oral amoxicillin or azithromycin is not adequate initial therapy for a febrile child with functional asplenia. Cefazolin gives weaker cover of pneumococci with reduced penicillin susceptibility and of many enteric gram negative organisms. Vancomycin alone has no gram negative activity.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "yawn"
      }
    ],
    sources: [
      {
        id: "yawn",
        citation: "Yawn BP, Buchanan GR, Afenyi-Annan AN, et al. Management of sickle cell disease: summary of the 2014 evidence-based report by expert panel members. JAMA. 2014.",
        url: "https://jamanetwork.com/journals/jama/fullarticle/1902235"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-17",
    "topic": "infectious-diseases",
    "title": "A painful breast three weeks after birth",
    "stem": "A 31-year-old woman presents to the emergency department 3 weeks after the birth of her first baby with 5 days of pain and redness in her left breast. A walk-in clinic started cephalexin 500 mg four times daily 4 days ago, and she has taken every dose. The pain is worse and she has had fevers and chills since yesterday. She is breastfeeding. Her baby was born at term and has jaundice that is being followed by the family physician. She has no allergies. There is a 7 cm area of warm, red, firm skin in the upper outer left breast, with a tender, fluctuant centre about 3 cm across. The right breast is normal.",
    "vitals": {
      "temperature": "38.6°C oral",
      "pulse": "108/minute",
      "resp": "18/minute",
      "bp": "116/72 mmHg",
      "o2sat": "99% on room air",
      "weight": "68 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate test to assess the fluctuant area in her breast?",
        "options": [
          "Breast ultrasound",
          "CT of the chest",
          "Mammography",
          "MRI of the breast",
          "Needle core biopsy"
        ],
        "correct": 0,
        "explanation": "Worsening redness with a fluctuant centre despite 4 days of antibiotics suggests that bacterial mastitis has progressed to an abscess. The ABM protocol notes that abscess is often diagnosed clinically but that ultrasound may be used, and ultrasound also guides drainage. Mammography is painful in an inflamed lactating breast and poorly shows a fluid collection. CT and MRI add cost and delay without changing management. A core biopsy is not a test for an infected collection.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "abm-36"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Imaging shows a 3.2 cm fluid collection in the upper outer left breast.",
        "prompt": "Which of the following is the most appropriate management of the collection?",
        "options": [
          "Antibiotics alone for 14 days",
          "Drainage with fluid culture",
          "Hot compresses and review in 1 week",
          "Mastectomy of the affected segment",
          "Stop breastfeeding to rest the breast"
        ],
        "correct": 1,
        "explanation": "The ABM protocol advises draining an abscess for source control, by needle aspiration with culture or by drain placement, because it may keep worsening until the collection is drained. Antibiotics alone do not clear a walled-off collection. Waiting a week with compresses delays source control. Surgical excision is not needed for a simple lactational abscess. Stopping breastfeeding does not treat the abscess and risks engorgement.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "abm-36"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate change to her oral antibiotic now?",
        "options": [
          "amoxicillin 500 mg PO three times daily",
          "ciprofloxacin 500 mg PO twice daily",
          "clindamycin 300 mg PO four times daily",
          "Continue cephalexin 500 mg PO",
          "trimethoprim-sulfamethoxazole DS PO twice daily"
        ],
        "correct": 2,
        "explanation": "She has not improved after more than 48 hours of first-line therapy, so the ABM protocol advises culture and consideration of resistant organisms such as MRSA. Clindamycin 300 mg four times daily is a listed second-line choice. Trimethoprim-sulfamethoxazole is the other second-line option, but it should be used with caution when the infant is under 30 days old or has hyperbilirubinemia, and her 3-week-old baby is jaundiced. Continuing cephalexin repeats a failing drug. Amoxicillin and ciprofloxacin are not recommended for mastitis because they miss staphylococci.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "abm-36"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate advice about feeding her baby?",
        "options": [
          "Breastfeed only from the right side",
          "Continue breastfeeding from both sides",
          "Pump and discard milk from the left side",
          "Stop breastfeeding until healed",
          "Switch to formula for 2 weeks"
        ],
        "correct": 1,
        "explanation": "After aspiration or drain placement, the ABM protocol advises continuing to breastfeed from the affected breast, and the risk of a milk fistula is under 2%. Milk removal helps resolve inflammation. Feeding only from the right side, pumping and discarding, stopping, or switching to formula all reduce milk removal from the left breast and risk ending breastfeeding without benefit to healing.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "abm-36"
      }
    ],
    "sources": [
    {
      "id": "abm-36",
      "citation": "Mitchell KB, Johnson HM, Rodríguez JM, et al. Academy of Breastfeeding Medicine clinical protocol #36: the mastitis spectrum, revised 2022. Breastfeed Med. 2022.",
      "url": "https://doi.org/10.1089/bfm.2022.29207.kbm"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-18",
    topic: "infectious-diseases",
    title: "Chest pain a week after a sore throat",
    stem: "A 21-year-old man presents to the emergency department with 2 days of right sided pleuritic chest pain and shaking chills. Eight days ago he had a severe sore throat that was improving. Yesterday the right side of his neck became painful and swollen. He is healthy, takes no medications and does not inject drugs. He looks unwell. There is tender swelling along the right sternocleidomastoid muscle with no fluctuance. His tonsils are mildly enlarged and the uvula is midline. Chest X-ray shows several nodules in the periphery of both lungs, two of them cavitating.",
    vitals: {
      temperature: "39.3°C oral",
      pulse: "124/minute",
      resp: "26/minute",
      bp: "102/60 mmHg",
      o2sat: "92% on room air",
      weight: "74 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this young man?",
        kind: "single",
        options: [
          "Community acquired pneumonia",
          "Peritonsillar abscess",
          "Pulmonary tuberculosis",
          "Right sided infective endocarditis",
          "Septic jugular thrombophlebitis"
        ],
        correct: 4,
        explanation: "A pharyngitis followed within days by lateral neck swelling along the sternocleidomastoid, rigors and several peripheral lung nodules, two of them cavitating, is Lemierre syndrome. Infection spreads from the tonsil to the internal jugular vein and septic emboli seed the lungs. Right sided endocarditis also causes septic pulmonary emboli but he does not inject drugs and the neck finding points to the jugular vein. A midline uvula argues against peritonsillar abscess. Tuberculosis and ordinary pneumonia do not explain the neck swelling or several peripheral nodules, some cavitating, after a sore throat.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "riordan"
      },
      {
        id: "q2",
        prompt: "Which of the following investigations best confirms the diagnosis in this young man?",
        kind: "single",
        options: [
          "CT neck with IV contrast",
          "Monospot heterophile test",
          "Rapid streptococcal antigen test",
          "Sputum for acid fast bacilli",
          "Transthoracic echocardiogram"
        ],
        correct: 0,
        explanation: "Contrast enhanced CT of the neck shows thrombosis of the internal jugular vein and any parapharyngeal collection, and it confirms the diagnosis alongside blood cultures. The neck is the site to image because the swelling lies along the vein. An echocardiogram looks for valve vegetations, which do not explain the neck findings. Streptococcal and heterophile tests address the original sore throat, not its complication. Sputum for acid fast bacilli investigates tuberculosis, which does not fit this acute course.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "riordan"
      },
      {
        id: "q3",
        update: "After 30 hours, gram negative bacilli grow in the anaerobic bottles of both blood culture sets. The aerobic bottles show no growth.",
        prompt: "Which of the following organisms is the most likely cause of his illness?",
        kind: "single",
        options: [
          "Actinomyces israelii",
          "Fusobacterium necrophorum",
          "Haemophilus influenzae type b",
          "Staphylococcus aureus",
          "Streptococcus pyogenes"
        ],
        correct: 1,
        explanation: "Lemierre syndrome is most often caused by Fusobacterium necrophorum, an anaerobic gram negative bacillus of the oropharynx, which fits growth only in the anaerobic bottles. Staphylococcus aureus and Streptococcus pyogenes are gram positive cocci. Haemophilus influenzae is a gram negative organism that also grows in aerobic bottles. Actinomyces is a gram positive organism that causes slow, chronic infection rather than this acute illness.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "riordan"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most appropriate empiric antibiotic therapy?",
        kind: "single",
        options: [
          "azithromycin 500 mg IV",
          "ceftriaxone 2 g IV alone",
          "penicillin V 600 mg PO",
          "piperacillin-tazobactam 4.5 g IV",
          "vancomycin 25 mg/kg IV loading dose"
        ],
        correct: 3,
        explanation: "The usual cause is Fusobacterium necrophorum, an anaerobe that is susceptible to beta-lactam and beta-lactamase inhibitor combinations and to metronidazole. Piperacillin-tazobactam also covers the streptococci that can be present. F. necrophorum is resistant to macrolides, so azithromycin is a poor choice. Ceftriaxone without metronidazole gives unreliable anaerobic cover. Oral penicillin is not enough for bacteremia with septic emboli, some strains make beta-lactamase, and vancomycin has no activity against gram negative anaerobes.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "riordan"
      }
    ],
    sources: [
      {
        id: "riordan",
        citation: "Riordan T. Human infection with Fusobacterium necrophorum (necrobacillosis), with a focus on Lemierre's syndrome. Clin Microbiol Rev. 2007.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17934077/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-19",
    topic: "infectious-diseases",
    title: "Teen hockey player with a sore throat",
    stem: "A 17-year-old girl presents to the emergency department with 6 days of sore throat, fever and marked fatigue. A walk in clinic swab 4 days ago was negative for group A streptococcus. She plays competitive hockey and has a game in 5 days. She has no medical history and no allergies. Her tonsils are enlarged with grey exudate. There are tender posterior cervical lymph nodes on both sides. The spleen tip is palpable 2 cm below the left costal margin. There is no trismus and the uvula is midline.",
    vitals: {
      temperature: "38.4°C oral",
      pulse: "104/minute",
      resp: "18/minute",
      bp: "114/70 mmHg",
      o2sat: "99% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most useful test to confirm the likely diagnosis?",
        kind: "single",
        options: [
          "Abdominal CT with contrast",
          "Blood cultures, two sets",
          "Heterophile antibody test",
          "Repeat throat culture",
          "Streptococcal antigen retest"
        ],
        correct: 2,
        explanation: "Exudative pharyngitis, posterior cervical nodes, fatigue and a palpable spleen suggest infectious mononucleosis, and a heterophile antibody test is the usual confirmatory test. About a quarter of tests are falsely negative in the first week, so a negative result on day 6 would need repeating. A CBC showing lymphocytosis with atypical lymphocytes supports the diagnosis. Repeating streptococcal testing after a negative swab adds little. Blood cultures and CT do not help an uncomplicated case.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "womack"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate treatment for her symptoms?",
        kind: "single",
        options: [
          "acyclovir 400 mg PO",
          "amoxicillin 500 mg PO",
          "azithromycin 500 mg PO",
          "ibuprofen 400 mg PO",
          "prednisone 40 mg PO"
        ],
        correct: 3,
        explanation: "Mononucleosis is a viral illness and care is supportive, with an analgesic such as ibuprofen or acetaminophen, fluids and rest. Antibiotics have no role, and amoxicillin often causes a rash in this setting. Antivirals such as acyclovir have not shown clinical benefit. Corticosteroids are not recommended routinely and are reserved for complications such as impending airway obstruction.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "womack"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate advice about her hockey game?",
        kind: "single",
        options: [
          "Play once she is afebrile on game day",
          "Return after a negative repeat monospot",
          "Return when the sore throat settles",
          "Wear a padded vest and play as planned",
          "No contact sport for at least 3 weeks"
        ],
        correct: 4,
        explanation: "Splenic rupture is a rare but serious complication of mononucleosis and is most likely in the first 3 weeks, and her spleen is already palpable. Current advice is to avoid contact sport for at least 3 weeks from symptom onset, so a game on day 11 is too early. Feeling better or losing the fever does not mean the spleen is safe. The heterophile test can stay positive for months, so it cannot guide return to play. A padded vest does not reliably protect an enlarged spleen.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "womack"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most likely effect of giving her amoxicillin for this illness?",
        kind: "single",
        options: [
          "Faster resolution of her fever",
          "Lower risk of splenic rupture",
          "Prevention of rheumatic fever",
          "Shorter duration of her fatigue",
          "Widespread maculopapular rash"
        ],
        correct: 4,
        explanation: "Amoxicillin given during infectious mononucleosis commonly causes a widespread maculopapular rash, and it treats nothing because the illness is viral. It does not shorten the fever or the fatigue. Rheumatic fever follows group A streptococcal infection, and her streptococcal swab was negative. Antibiotics have no effect on splenic enlargement or the risk of rupture.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "womack"
      }
    ],
    sources: [
      {
        id: "womack",
        citation: "Womack J, Jimenez M. Common questions about infectious mononucleosis. Am Fam Physician. 2015.",
        url: "https://www.aafp.org/pubs/afp/issues/2015/0315/p372.html"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-20",
    topic: "infectious-diseases",
    title: "Cough that will not settle",
    stem: "A 47-year-old man presents to the emergency department with 10 days of cough productive of green sputum. It began with a runny nose and sore throat, which have settled. He feels tired but is eating and drinking normally. He smokes 10 cigarettes a day. He has no lung disease, no heart disease and takes no medications. His partner insisted he come because the sputum is green. He speaks in full sentences. There is scattered wheeze that clears with coughing, and there are no crackles, bronchial breath sounds or dullness.",
    vitals: {
      temperature: "37.4°C oral",
      pulse: "84/minute",
      resp: "16/minute",
      bp: "132/84 mmHg",
      o2sat: "97% on room air"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following findings in a healthy adult with acute cough would justify a chest X-ray?",
        kind: "menu",
        options: [
          "Chest wall tenderness",
          "Cough for more than 1 week",
          "Current cigarette smoking",
          "Green or yellow sputum",
          "Heart rate over 100/minute",
          "Respiratory rate over 24/minute",
          "Temperature over 38°C",
          "Wheeze clearing with a cough"
        ],
        select: 3,
        correct: [
          4,
          5,
          6
        ],
        explanation: "In a healthy adult with acute cough, chest imaging is advised when pneumonia is suspected from a heart rate over 100/minute, a respiratory rate over 24/minute, a temperature over 38°C or focal chest findings. This man has none of these, so he does not need an X-ray. Sputum colour does not separate bacterial from viral infection. Cough lasting beyond a week is expected in acute bronchitis. Smoking, wheeze that clears with coughing and chest wall tenderness do not suggest pneumonia.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "harris"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate management for him today?",
        kind: "single",
        options: [
          "Amoxicillin-clavulanate for 7 days",
          "Azithromycin for 5 days",
          "Doxycycline for 7 days",
          "Oseltamivir for 5 days",
          "Symptom relief and smoking advice"
        ],
        correct: 4,
        explanation: "This is acute bronchitis in a healthy adult, which is nearly always viral, and antibiotics are not recommended unless pneumonia is suspected. His normal vital signs and the absence of crackles, bronchial breath sounds or dullness make pneumonia unlikely. Green sputum reflects inflammation, not bacterial infection. Management is symptom relief, an explanation of the expected course and advice to stop smoking. An influenza antiviral started 10 days after onset in a well adult offers no expected benefit.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "harris"
      },
      {
        id: "q3",
        prompt: "Which of the following is closest to the typical total duration of cough in acute bronchitis?",
        kind: "single",
        options: [
          "7 days in total",
          "21 days in total",
          "56 days in total",
          "90 days in total",
          "120 days in total"
        ],
        correct: 1,
        explanation: "The cough of acute bronchitis typically lasts about 3 weeks, so a cough at day 10 is expected and is not a reason for antibiotics. Telling patients this in advance reduces return visits and requests for antibiotics. Expecting it to clear within a week sets him up to think treatment has failed. A cough that persists past 8 weeks is chronic and needs a different evaluation.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "harris"
      }
    ],
    sources: [
      {
        id: "harris",
        citation: "Harris AM, Hicks LA, Qaseem A. Appropriate antibiotic use for acute respiratory tract infection in adults: advice for high-value care from the American College of Physicians and the Centers for Disease Control and Prevention. Ann Intern Med. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26785402/"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-21",
    "topic": "infectious-diseases",
    "title": "A cold and sores around the nose",
    "stem": "A 6-year-old boy is brought to the emergency department by his mother with 4 days of runny nose, cough and a low fever that has now settled. For 2 days he has had sores around his left nostril and upper lip. His mother asks for an antibiotic because the cold is not going away. He has no medical history, no eczema and no allergies, and his immunizations are up to date. He is playful and drinking well. His nose has clear discharge, his throat is mildly red, his ears are normal and his chest is clear. Around the left nostril and on the upper lip there are three shallow erosions with honey-coloured crusts, together about 2 cm across, with no blisters, spreading redness or swelling.",
    "vitals": {
      "temperature": "37.4°C oral",
      "pulse": "96/minute",
      "resp": "20/minute",
      "bp": "98/60 mmHg",
      "o2sat": "99% on room air",
      "weight": "21 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate treatment for his runny nose and cough?",
        "options": [
          "amoxicillin PO for 10 days",
          "azithromycin PO for 5 days",
          "cefprozil PO for 10 days",
          "Fluids and acetaminophen as needed",
          "prednisolone PO for 3 days"
        ],
        "correct": 3,
        "explanation": "His runny nose, cough and mild throat redness fit a common cold, which is viral. The 2025 Cochrane review found no benefit from antibiotics for the common cold in children or adults, and routine use is not recommended. Antibiotics add side effects and resistance without shortening the illness, so amoxicillin, azithromycin and cefprozil are all wrong for the cold. A corticosteroid has no role in a cold. Fluids and acetaminophen for comfort are the right care.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 9
        },
        "source": "cochrane-cold-2025"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following investigations is most appropriate for him today?",
        "options": [
          "CBC and C-reactive protein",
          "Nasal swab for viral PCR",
          "Swab of the crusts for culture",
          "Throat swab for group A strep",
          "No tests needed today"
        ],
        "correct": 4,
        "explanation": "The IDSA guideline recommends culture of impetigo exudate to identify the organism, but it accepts treatment without culture in typical cases. His crusted sores are typical and limited, so a swab would not change treatment today. He is well with a viral cold, so blood tests and a viral swab add nothing. A throat swab is not needed for a child whose cough and runny nose point to a viral cause.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "idsa-ssti-2014"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following new findings over the next few weeks would most call for urgent reassessment?",
        "options": [
          "Cough for 2 more weeks",
          "Dark urine and puffy eyelids",
          "New sores on his chin",
          "Runny nose for 10 days",
          "Yellow nasal mucus"
        ],
        "correct": 1,
        "explanation": "Acute post-streptococcal glomerulonephritis can follow a group A streptococcal infection of the throat or of the skin, and it presents with hematuria, hypertension and edema. Dark urine and puffy eyelids in the weeks after streptococcal impetigo need urgent assessment of urine and blood pressure. A cough can last 2 weeks after a cold, and a runny nose with yellow mucus is part of a normal cold. A new sore nearby is spread of impetigo and can be treated at a routine visit.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "ong-apsgn-2022"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate treatment for the sores around his nose?",
        "options": [
          "cephalexin PO for 7 days",
          "clotrimazole 1% cream",
          "hydrocortisone 1% cream",
          "mupirocin ointment for 5 days",
          "nystatin cream for 7 days"
        ],
        "correct": 3,
        "explanation": "Golden crusted erosions around the nose are impetigo, usually from Staphylococcus aureus or group A streptococcus. The IDSA guideline recommends topical mupirocin twice daily for 5 days for a small number of lesions. Oral agents such as cephalexin are for numerous lesions or outbreaks, and he has three small sores. Clotrimazole and nystatin treat fungal infection. A topical steroid does not treat a bacterial infection.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "idsa-ssti-2014"
      }
    ],
    "sources": [
    {
      "id": "cochrane-cold-2025",
      "citation": "Kenealy T, Arroll B. Antibiotics for the common cold and acute purulent rhinitis. Cochrane Database Syst Rev. 2025.",
      "url": "https://doi.org/10.1002/14651858.CD000247.pub4"
    },
    {
      "id": "idsa-ssti-2014",
      "citation": "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
      "url": "https://doi.org/10.1093/cid/ciu444"
    },
    {
      "id": "ong-apsgn-2022",
      "citation": "Ong LT. Management and outcomes of acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9521512/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "infectious-diseases-22",
    "topic": "infectious-diseases",
    "title": "A red, swollen upper ear",
    "stem": "A 19-year-old woman presents to the emergency department with 3 days of increasing pain, redness and swelling of her right ear. Ten days ago she had a piercing through the cartilage of the upper right ear at a shopping mall kiosk. A walk-in clinic started cephalexin 500 mg four times daily 2 days ago, and she is worse. She has no medical history or allergies. The upper right ear is red, hot, swollen and very tender, and its normal folds are lost. There is a fluctuant area 1.5 cm across on the front of the helix beside the stud. The earlobe looks normal. The ear canal and tympanic membrane are normal.",
    "vitals": {
      "temperature": "37.8°C oral",
      "pulse": "92/minute",
      "resp": "16/minute",
      "bp": "118/72 mmHg",
      "o2sat": "99% on room air",
      "weight": "60 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following findings best shows that the infection involves the ear cartilage?",
        "options": [
          "Fever of 37.8°C",
          "Normal ear canal and drum",
          "Redness around the stud",
          "Sparing of the earlobe",
          "Tenderness to light touch"
        ],
        "correct": 3,
        "explanation": "The earlobe has no cartilage, so an infection that swells the upper ear and loses its folds but spares the lobe is following the cartilage and its perichondrium. Auricular perichondritis can deform the ear if it is not treated promptly. Redness around the stud, tenderness and a low-grade fever occur with simple skin infection at a piercing site. A normal canal and drum exclude otitis externa and media but do not show cartilage involvement.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "ungar-perichondritis"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following investigations is most appropriate before her antibiotic is changed?",
        "options": [
          "Blood cultures and lactate",
          "CBC and CRP only",
          "CT of the temporal bones",
          "Culture of pus from the ear",
          "No tests are needed"
        ],
        "correct": 3,
        "explanation": "The authors recommend culture before systemic antibiotics for every new case of auricular perichondritis, because resistance to fluoroquinolones is rising and some cases are not caused by Pseudomonas. Pus from the fluctuant area gives the best sample. She is not septic, so blood cultures and lactate add little. Blood counts and CRP do not guide the antibiotic. CT is not needed for a localized infection of the outer ear.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "ungar-perichondritis"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following oral antibiotics is most appropriate for her now?",
        "options": [
          "amoxicillin-clavulanate 875 mg PO twice daily",
          "ciprofloxacin 750 mg PO twice daily",
          "clindamycin 300 mg PO four times daily",
          "Continue cephalexin 500 mg PO",
          "doxycycline 100 mg PO twice daily"
        ],
        "correct": 1,
        "explanation": "Pseudomonas aeruginosa is the usual cause of auricular perichondritis, and piercing-related cases were colonized with it significantly more often. Empiric treatment usually consists of ciprofloxacin, adjusted to the culture result. Cephalexin, amoxicillin-clavulanate, clindamycin and doxycycline do not cover Pseudomonas, which explains why she worsened on cephalexin.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "ungar-perichondritis"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most important additional step in her treatment?",
        "options": [
          "Incision and drainage of the collection",
          "Leave the stud in place",
          "Plastic surgery review in 6 weeks",
          "Topical mupirocin to the site",
          "Warm compresses alone"
        ],
        "correct": 0,
        "explanation": "Abscess formation was the strongest predictor of complications, and a subperichondral abscess needs incision and drainage along with antibiotics. Pus left under the perichondrium can destroy cartilage and cause a cauliflower deformity. Topical mupirocin and warm compresses do not treat a collection. The stud is a foreign body in infected cartilage. Reconstruction is for deformity after the infection, not for acute care.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "ungar-perichondritis"
      }
    ],
    "sources": [
    {
      "id": "ungar-perichondritis",
      "citation": "Ungar OJ, Bursztyn N, Shilo S, et al. Auricular perichondritis in the cartilage piercing era. Laryngoscope. 2025.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12706554/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-23",
    topic: "infectious-diseases",
    title: "Fever and aches after a trip to Asia",
    stem: "A 32-year-old woman presents to the emergency department with 4 days of fever, severe headache, pain behind the eyes and aching muscles and joints. She returned 6 days ago from 3 weeks of backpacking in Thailand and Cambodia, including 4 nights in a forest area near the border. She did not take malaria prophylaxis. She is otherwise healthy and takes no medications. She has a faint blanching rash on her trunk. Her abdomen is soft and not tender. There is no bleeding from the gums or nose. Platelets are 92 x 10^9/L, WBC 2.8 x 10^9/L and hematocrit 0.41.",
    vitals: {
      temperature: "38.6°C oral",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "112/72 mmHg",
      o2sat: "99% on room air",
      weight: "61 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this returned traveller?",
        kind: "single",
        options: [
          "Acute hepatitis A",
          "Dengue fever",
          "Enteric fever",
          "Influenza A",
          "Leptospirosis"
        ],
        correct: 1,
        explanation: "Fever with severe headache, pain behind the eyes, muscle and joint pain, a blanching rash, leukopenia and thrombocytopenia within 2 weeks of travel in Southeast Asia is typical of dengue. Hepatitis A causes jaundice and raised transaminases rather than this picture. Enteric fever is more often gradual with abdominal symptoms. Influenza does not usually cause rash or marked thrombocytopenia. Leptospirosis follows freshwater exposure and often causes conjunctival suffusion, renal or liver involvement.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "who-arbo"
      },
      {
        id: "q2",
        prompt: "Which of the following investigations must be done for her today?",
        kind: "single",
        options: [
          "Dengue IgG serology alone",
          "Lyme disease serology",
          "Malaria thick and thin smears",
          "Stool ova and parasites",
          "Typhoid Widal test"
        ],
        correct: 2,
        explanation: "Any fever in a traveller back from a malaria endemic area needs urgent malaria testing, and she slept 4 nights in a forest border area without prophylaxis. Thick and thin smears, with a rapid antigen test where available, are sent the same day and repeated if negative. Dengue IgG alone cannot confirm an acute infection this early. The Widal test is unreliable. Lyme serology and stool testing do not fit her exposure or symptoms.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "catmat"
      },
      {
        id: "q3",
        update: "Malaria thick and thin smears and a malaria rapid antigen test are negative. A dengue NS1 antigen test is positive. She is drinking well.",
        prompt: "Which of the following is the most appropriate treatment for her?",
        kind: "single",
        options: [
          "Acetaminophen and oral fluids",
          "Azithromycin for 5 days",
          "Ceftriaxone for 5 days",
          "Doxycycline for 7 days",
          "Ibuprofen and oral fluids"
        ],
        correct: 0,
        explanation: "Dengue is a viral infection, so treatment is supportive with oral fluids and acetaminophen for fever and pain. WHO recommends against NSAIDs such as ibuprofen in suspected or confirmed dengue because of the bleeding risk, and her platelets are already 92 x 10^9/L. Antibiotics have no role once the positive NS1 test confirms dengue. Doxycycline would treat rickettsial disease or leptospirosis, which are not the diagnosis here.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "who-arbo"
      },
      {
        id: "q4",
        prompt: "Which of the following would be warning signs that she needs admission?",
        kind: "menu",
        options: [
          "Blanching truncal rash",
          "Bleeding gums",
          "Joint pain",
          "Loss of taste",
          "Muscle aches",
          "Pain behind the eyes",
          "Persistent vomiting",
          "Severe abdominal pain"
        ],
        select: 3,
        correct: [
          1,
          6,
          7
        ],
        explanation: "WHO warning signs of severe dengue include abdominal pain or tenderness, persistent vomiting, mucosal bleeding such as bleeding gums, lethargy or restlessness, liver enlargement, fluid accumulation and a rising hematocrit with a rapid fall in platelets. These signal plasma leakage, which often begins as the fever settles. Rash, joint and muscle pain and pain behind the eyes are expected features of dengue itself. Loss of taste is not a dengue warning sign.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "who-arbo"
      }
    ],
    sources: [
      {
        id: "who-arbo",
        citation: "World Health Organization. WHO guidelines for clinical management of arboviral diseases: dengue, chikungunya, Zika and yellow fever. 2025.",
        url: "https://iris.who.int/handle/10665/381804"
      },
      {
        id: "catmat",
        citation: "Committee to Advise on Tropical Medicine and Travel (CATMAT). Canadian recommendations for the prevention and treatment of malaria. Public Health Agency of Canada. 2014, treatment chapter updated 2019.",
        url: "https://www.canada.ca/en/public-health/services/catmat/canadian-recommendations-prevention-treatment-malaria.html"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-24",
    "topic": "infectious-diseases",
    "title": "Fever and aches at 29 weeks",
    "stem": "A 30-year-old woman who is 29 weeks pregnant presents to the emergency department with 2 days of fever, chills, muscle aches and low back pain. Four days ago she had watery diarrhea that has settled. She has no cough, urinary symptoms, vaginal bleeding or leaking fluid, and the baby is moving normally. Her pregnancy has been uncomplicated. Three weeks ago she ate soft cheese made from unpasteurized milk that she bought at a farm stand. She has not travelled. She is flushed but alert. Her uterus is non-tender and there is no costovertebral angle tenderness. Urinalysis is normal. Influenza and COVID-19 swabs are negative. The fetal heart rate is 158/minute.",
    "vitals": {
      "temperature": "38.7°C oral",
      "pulse": "110/minute",
      "resp": "18/minute",
      "bp": "112/66 mmHg",
      "o2sat": "98% on room air",
      "weight": "74 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following exposures in her history most likely explains her illness?",
        "options": [
          "Changing a cat litter box",
          "Contact with a child with a cold",
          "Swimming in a lake last month",
          "Travel to Florida last winter",
          "Unpasteurized soft cheese"
        ],
        "correct": 4,
        "explanation": "Fever, muscle aches and back pain after a bout of diarrhea in a pregnant woman who ate unpasteurized soft cheese 3 weeks ago point to listeriosis. PHAC notes that the incubation period in pregnancy is often about 4 weeks and can be up to about 70 days. Cat litter carries toxoplasmosis, which rarely causes a febrile illness like this. A child's cold and her negative viral swabs make a viral cause less likely. A lake swim a month ago and travel last winter do not fit this illness.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 5
        },
        "source": "phac-listeria"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate timing for her antibiotics?",
        "options": [
          "After culture results are back",
          "After obstetric ultrasound",
          "After stool testing",
          "Now, before test results",
          "Only if fever lasts 48 hours"
        ],
        "correct": 3,
        "explanation": "ACOG advises that a pregnant woman with a possible exposure, fever above 38.1°C and symptoms of listeriosis with no other cause should be tested and treated at the same time. Waiting for culture results, stool tests, an obstetric ultrasound or 48 hours of fever risks infection of the fetus, preterm labour and fetal loss, which are the main harms of this infection.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 1
        },
        "source": "acog-listeria"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate empiric antibiotic regimen for her?",
        "options": [
          "ampicillin and gentamicin IV",
          "cefazolin IV alone",
          "ceftriaxone and azithromycin IV",
          "ceftriaxone IV alone",
          "vancomycin and ceftriaxone IV"
        ],
        "correct": 0,
        "explanation": "Ampicillin or amoxicillin with gentamicin is the primary treatment for Listeria monocytogenes, according to the PHAC pathogen safety data sheet. Cephalosporins are not active against this organism, so cefazolin, ceftriaxone alone, ceftriaxone with azithromycin, and vancomycin with ceftriaxone all miss it. Intravenous trimethoprim-sulfamethoxazole is the alternative for someone who cannot take a beta-lactam.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "phac-psds-listeria"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following tests is most useful to confirm the cause of her illness?",
        "options": [
          "Blood cultures",
          "Serum IgM serology",
          "Stool culture",
          "Urine culture",
          "Vaginal swab culture"
        ],
        "correct": 0,
        "explanation": "Invasive listeriosis is confirmed by growing the organism from a normally sterile site such as blood or CSF. PHAC states that stool testing is not useful for diagnosing invasive disease. Serology is not used for diagnosis. Her urinalysis is normal and she has no urinary symptoms. A vaginal swab samples a non-sterile site and does not confirm invasive infection.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "phac-listeria"
      }
    ],
    "sources": [
    {
      "id": "phac-listeria",
      "citation": "Public Health Agency of Canada. Listeria (listeriosis): for health professionals. 2024.",
      "url": "https://www.canada.ca/en/public-health/services/diseases/listeriosis/health-professionals-listeriosis.html"
    },
    {
      "id": "acog-listeria",
      "citation": "American College of Obstetricians and Gynecologists. Committee Opinion No. 614: management of pregnant women with presumptive exposure to Listeria monocytogenes. Obstet Gynecol. 2014.",
      "url": "https://doi.org/10.1097/01.AOG.0000457501.73326.6c"
    },
    {
      "id": "phac-psds-listeria",
      "citation": "Public Health Agency of Canada. Pathogen safety data sheet: Listeria monocytogenes. 2023.",
      "url": "https://www.canada.ca/en/public-health/services/laboratory-biosafety-biosecurity/pathogen-safety-data-sheets-risk-assessment/listeria-monocytogenes.html"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "infectious-diseases-25",
    "topic": "infectious-diseases",
    "title": "A pneumonia that did not settle",
    "stem": "A 48-year-old man presents to the emergency department with 6 weeks of cough, evening sweats and a 6 kg weight loss. He lives near Kenora in northwestern Ontario and fishes on local lakes most weekends. A walk-in clinic treated him for pneumonia with amoxicillin and then doxycycline, without improvement. For 2 weeks he has had low back pain and two slowly growing crusted skin lesions on his shin and cheek. He has not travelled outside Canada. His HIV test is negative. He smokes. The skin lesions are raised, 2 to 3 cm across, with crusted, warty surfaces and small pustules at the edges. There is tenderness over the L3 spinous process. Chest X-ray shows a mass-like consolidation in the right upper lobe.",
    "vitals": {
      "temperature": "37.9°C oral",
      "pulse": "96/minute",
      "resp": "20/minute",
      "bp": "128/78 mmHg",
      "o2sat": "95% on room air",
      "weight": "74 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of his illness?",
        "options": [
          "Blastomycosis",
          "Histoplasmosis",
          "Lung cancer with metastases",
          "Pulmonary nocardiosis",
          "Pulmonary tuberculosis"
        ],
        "correct": 0,
        "explanation": "Blastomyces lives in soil near freshwater drainage basins, including areas from Quebec into Saskatchewan, and northwestern Ontario is a known focus. A pneumonia that fails antibiotics, with warty crusted skin lesions and a painful vertebra, fits disseminated blastomycosis. Tuberculosis remains possible and must be excluded, but it does not usually cause these skin lesions. Histoplasmosis rarely causes this skin picture. Nocardiosis mostly affects immunocompromised people. Lung cancer could explain the mass and weight loss but not the skin lesions with pustules.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 5
        },
        "source": "ecmm-endemic"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following tests is most likely to give a rapid diagnosis?",
        "options": [
          "Biopsy of a skin lesion for microscopy",
          "PET-CT to stage the lung mass",
          "Repeat chest X-ray in 6 weeks",
          "Serum antibody serology",
          "Sputum Gram stain and culture"
        ],
        "correct": 0,
        "explanation": "The ECMM guideline advises examining clinical specimens under the microscope with fungal stains, which show the typical broad-based budding yeast, with fungal culture that may take up to 6 weeks. A skin lesion is easy to sample. Antibody tests lack the specificity needed for diagnosis. Sputum Gram stain and routine culture do not detect this organism. PET-CT and a repeat X-ray delay the diagnosis.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "ecmm-endemic"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following precautions is most appropriate while his tests are pending?",
        "options": [
          "Airborne isolation until TB is excluded",
          "Contact precautions only",
          "Droplet precautions for 24 hours",
          "Protective isolation for immunosuppression",
          "No isolation precautions"
        ],
        "correct": 0,
        "explanation": "Weeks of cough, night sweats, weight loss and an upper lobe consolidation mean pulmonary tuberculosis must be excluded, even when another infection seems more likely. The Canadian TB Standards describe how easily TB is confused with other causes. Airborne isolation protects others until sputum testing excludes it. Blastomycosis itself does not spread from person to person, but that cannot yet be assumed. Droplet or contact precautions do not stop airborne TB. He is not immunosuppressed.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 5
        },
        "source": "cts-eptb"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following additional investigations is most appropriate because of his back pain?",
        "options": [
          "Abdominal ultrasound",
          "Bone marrow biopsy",
          "CT of the head",
          "Echocardiogram",
          "MRI of the lumbar spine"
        ],
        "correct": 4,
        "explanation": "The ECMM guideline advises further imaging guided by symptoms to find complications, and bone is a site of disseminated disease that needs a longer course of treatment. His focal tenderness at L3 calls for spinal MRI. He has no neurological symptoms to justify head CT, no murmur or embolic signs for echocardiography, and no abdominal or blood count findings for ultrasound or marrow biopsy.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "ecmm-endemic"
      }
    ],
    "sources": [
    {
      "id": "ecmm-endemic",
      "citation": "Thompson GR 3rd, Le T, Chindamporn A, et al. Global guideline for the diagnosis and management of the endemic mycoses: an initiative of the European Confederation of Medical Mycology. Lancet Infect Dis. 2021.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9450022/"
    },
    {
      "id": "cts-eptb",
      "citation": "Barss L, Connors WJA, Fisher D. Chapter 7: Extra-pulmonary tuberculosis. In: Canadian Tuberculosis Standards, 8th edition. Can J Respir Crit Care Sleep Med. 2022.",
      "url": "https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/extra-pulmonary-tuberculosis.html"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-26",
    topic: "infectious-diseases",
    title: "Weeks of breathlessness and weight loss",
    stem: "A 38-year-old man presents to the emergency department with 3 weeks of dry cough, fevers and shortness of breath that now comes on when he walks across a room. He has lost 6 kg. He has had oral thrush for a month that did not clear with two courses of an over the counter treatment. He has sex with men and has never had an HIV test. He takes no medications. He is thin and breathing quickly. There is white plaque on his tongue and palate. His chest has a few fine crackles. Chest X-ray shows diffuse bilateral interstitial opacities. Room air arterial blood gas shows a PaO2 of 58 mmHg.",
    vitals: {
      temperature: "38.1°C oral",
      pulse: "112/minute",
      resp: "28/minute",
      bp: "118/72 mmHg",
      o2sat: "88% on room air",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely cause of his pneumonia?",
        kind: "single",
        options: [
          "Legionella pneumophila",
          "Mycobacterium tuberculosis",
          "Pneumocystis jirovecii",
          "Respiratory syncytial virus",
          "Streptococcus pneumoniae"
        ],
        correct: 2,
        explanation: "A subacute course of dry cough, exertional dyspnea, weight loss and diffuse interstitial opacities with marked hypoxemia, in a man with persistent thrush and HIV risk, is typical of Pneumocystis pneumonia. Oral thrush is a marker of advanced immunosuppression. Legionella and pneumococcus cause acute illness, usually with lobar consolidation. Tuberculosis stays on the differential in HIV and needs sputum testing, but diffuse interstitial opacities with marked hypoxemia and a dry cough fit Pneumocystis better. RSV causes an acute illness over days, not weeks.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "ewald-pcp"
      },
      {
        id: "q2",
        prompt: "Which of the following tests is most important to send today?",
        kind: "single",
        options: [
          "HIV antigen and antibody test",
          "Legionella urinary antigen",
          "Nasopharyngeal viral swab",
          "Serum procalcitonin",
          "Sputum bacterial culture"
        ],
        correct: 0,
        explanation: "His presentation strongly suggests advanced HIV, the host factor that explains this opportunistic infection, and he has never been tested. A fourth generation HIV antigen and antibody test is the preferred test. The result changes the diagnosis, the treatment of this pneumonia and his long term care. Legionella antigen, viral swabs, procalcitonin and routine sputum culture do not address the underlying immune defect.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "phac-hivtest"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate initial treatment for him?",
        kind: "single",
        options: [
          "azithromycin and ceftriaxone",
          "fluconazole and prednisone",
          "rifampin, isoniazid, pyrazinamide, ethambutol",
          "trimethoprim-sulfamethoxazole alone",
          "trimethoprim-sulfamethoxazole and prednisone"
        ],
        correct: 4,
        explanation: "Trimethoprim-sulfamethoxazole is the treatment of choice for Pneumocystis pneumonia. Adjunctive prednisone is recommended for moderate to severe disease, defined by a room air PaO2 below 70 mmHg or an alveolar-arterial gradient above 35 mmHg, and his PaO2 is 58 mmHg. So trimethoprim-sulfamethoxazole alone undertreats him. Ceftriaxone with azithromycin treats bacterial pneumonia, fluconazole treats his thrush but not the pneumonia, and tuberculosis therapy is not started without evidence of tuberculosis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "ewald-pcp"
      },
      {
        id: "q4",
        prompt: "Which of the following is the recommended timing for starting his adjunctive prednisone?",
        kind: "single",
        options: [
          "After 7 days if he is not improving",
          "Only after the HIV test is positive",
          "Only if he needs intubation",
          "When a sputum stain confirms it",
          "Within 72 hours of starting treatment"
        ],
        correct: 4,
        explanation: "In moderate to severe Pneumocystis pneumonia, adjunctive corticosteroids should start as soon as possible and within 72 hours of starting treatment. Their benefit comes from blunting the inflammatory worsening that often follows the start of therapy. His PaO2 of 58 mmHg already meets the threshold, so waiting for failure to improve or for intubation loses that benefit. Treatment is started on clinical suspicion and does not wait for the HIV result or a positive stain.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "ewald-pcp"
      }
    ],
    sources: [
      {
        id: "ewald-pcp",
        citation: "Ewald H, Raatz H, Boscacci R, et al. Adjunctive corticosteroids for Pneumocystis jiroveci pneumonia in patients with HIV infection. Cochrane Database Syst Rev. 2015.",
        url: "https://pubmed.ncbi.nlm.nih.gov/25835432/"
      },
      {
        id: "phac-hivtest",
        citation: "Public Health Agency of Canada. Human immunodeficiency virus: HIV screening and testing guide. 2012.",
        url: "https://www.canada.ca/en/public-health/services/hiv-aids/hiv-screening-testing-guide.html"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-27",
    "topic": "infectious-diseases",
    "title": "Fever and a red, swollen arm",
    "stem": "A 58-year-old woman is brought to the emergency department by ambulance after she fainted while getting out of bed. For 1 day she has had fever and a painful, spreading redness of her left arm. Six years ago she had a left mastectomy with axillary node dissection for breast cancer, and her left arm has been swollen since. She has had two milder infections of that arm before. She takes no regular medications and has no allergies. She is confused about the date. Bright red, hot, tender skin extends from her left wrist to her shoulder, with no blisters, crepitus or wound. Her hands are cold and capillary refill is 5 seconds. Lactate is 5.6 mmol/L and hemoglobin is 104 g/L. Two attempts at IV access in her right arm have failed, and blood cultures have not been drawn.",
    "vitals": {
      "temperature": "39.4°C oral",
      "pulse": "124/minute",
      "resp": "26/minute",
      "bp": "80/42 mmHg",
      "o2sat": "95% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step to get her first antibiotic dose?",
        "options": [
          "Intraosseous line and antibiotics now",
          "Oral cephalexin while access is sought",
          "Wait for a central venous line",
          "Wait for blood cultures first",
          "Wait for ultrasound of the arm"
        ],
        "correct": 0,
        "explanation": "She is in septic shock, and the SSC guideline recommends antimicrobials immediately, ideally within 1 hour of recognition. Blood cultures should be collected as soon as possible and ideally before the first dose, but the dose must not wait while attempts at access keep failing. With two failed IV attempts, an intraosseous needle gives access within minutes for antibiotics and fluids. Waiting for a central line, cultures or imaging of the arm delays treatment. An oral drug is not reliably absorbed in shock.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 1
        },
        "source": "ssc-2026"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Ninety minutes later she has received 2 L of Ringer's lactate, and a norepinephrine infusion has started. Her MAP is 62 mmHg.",
        "prompt": "Which of the following best guides whether she should receive more IV fluid now?",
        "options": [
          "Central venous pressure",
          "Chest X-ray appearance",
          "Heart rate trend alone",
          "Passive leg raise response",
          "Urine output over 4 hours"
        ],
        "correct": 3,
        "explanation": "The SSC guideline suggests dynamic measures to guide fluid resuscitation over physical examination or static measures alone. A passive leg raise with a measure of stroke volume or pulse pressure is one of these dynamic tests. Heart rate and central venous pressure are poor guides to fluid status. A chest X-ray shows overload late. Urine output over 4 hours is too slow to decide on the next bolus for a patient in shock.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 2
        },
        "source": "ssc-2026"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate measure to track her response to resuscitation over the next few hours?",
        "options": [
          "Central venous oxygen saturation",
          "Daily procalcitonin levels",
          "Hemoglobin concentration",
          "Serial lactate levels",
          "Temperature curve"
        ],
        "correct": 3,
        "explanation": "Her lactate of 5.6 mmol/L shows poor tissue perfusion. The SSC guideline suggests serial lactate measurements to guide resuscitation, with capillary refill time as an adjunct to other measures of perfusion. Trials that targeted central venous oxygen saturation did not show benefit over usual care. Procalcitonin, hemoglobin and temperature do not measure perfusion from hour to hour.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 2
        },
        "source": "ssc-2026"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "Six hours after arrival she has received 4 L of crystalloid and her MAP is 68 mmHg on norepinephrine. Her hemoglobin is now 78 g/L. She has no bleeding, no chest pain and no new ECG changes.",
        "prompt": "Which of the following is the most appropriate management of her hemoglobin now?",
        "options": [
          "Erythropoietin SC now",
          "Iron sucrose IV now",
          "Red cells 1 unit IV now",
          "Red cells 2 units IV now",
          "No transfusion at this level"
        ],
        "correct": 4,
        "explanation": "Her hemoglobin has fallen from 104 to 78 g/L with dilution from 4 L of fluid, and she has no bleeding or cardiac ischemia. The SSC guideline recommends a restrictive transfusion strategy in sepsis, which typically uses a trigger of 70 g/L, judged with her overall state. Red cells now would add risk without benefit. Iron and erythropoietin work over weeks and do not correct an acute fall.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 2
        },
        "source": "ssc-2026"
      }
    ],
    "sources": [
    {
      "id": "ssc-2026",
      "citation": "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
      "url": "https://doi.org/10.1097/CCM.0000000000007075"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "infectious-diseases-28",
    "topic": "infectious-diseases",
    "title": "Fever and a swollen knee in an older man",
    "stem": "A 71-year-old man is brought to the emergency department by ambulance with 1 day of fever, rigors and increasing pain and swelling in his right knee. He had a right total knee replacement 3 years ago. Twelve days ago a boil on his thigh was drained at a walk-in clinic, and the swab grew methicillin-resistant Staphylococcus aureus (MRSA). He has hypertension and type 2 diabetes. He is drowsy but oriented. The right knee is hot, red and swollen with a large effusion, and he will not let it bend. Lactate is 4.6 mmol/L. Blood cultures have been drawn. His blood pressure has not improved after 2 L of Ringer's lactate.",
    "vitals": {
      "temperature": "39.3°C oral",
      "pulse": "122/minute",
      "resp": "26/minute",
      "bp": "80/44 mmHg",
      "o2sat": "95% on room air",
      "weight": "88 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "update": "The orthopedic resident asks you to hold antibiotics until the knee is aspirated in the operating room tomorrow morning, so that joint cultures are not affected.",
        "prompt": "Which of the following is the most appropriate timing of his first antibiotic dose?",
        "options": [
          "After aspiration in the morning",
          "After blood culture results",
          "Now, before the knee is aspirated",
          "Once the knee x-ray is reported",
          "Only if his lactate rises further"
        ],
        "correct": 2,
        "explanation": "He has septic shock, with hypotension that persists after 2 L of fluid and a lactate of 4.6 mmol/L. The Surviving Sepsis Campaign recommends antimicrobials immediately, ideally within 1 hour, for possible, probable or definite septic shock. His blood cultures are already drawn. Holding antibiotics until a morning aspiration would leave his shock untreated for many hours, and better joint culture yield does not justify that delay. Waiting for blood culture results or an x-ray report also delays treatment, and his lactate is already high enough to act on.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 1
        },
        "source": "ssc-2026"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate empiric antibiotic regimen for him?",
        "options": [
          "cefazolin 2 g IV every 8 hours",
          "ceftriaxone 2 g IV every 24 hours",
          "meropenem 1 g IV every 8 hours",
          "piperacillin-tazobactam 4.5 g IV every 6 hours",
          "vancomycin 25 mg/kg IV plus ceftriaxone 2 g IV"
        ],
        "correct": 4,
        "explanation": "A boil drained 12 days ago grew MRSA, and his knee is the likely source, so his risk of MRSA infection is high. The Surviving Sepsis Campaign suggests empiric cover for this resistant organism in patients at high risk. Vancomycin covers MRSA, and ceftriaxone adds cover for streptococci and gram-negative bacteria while cultures are pending. For his 88 kg, 25 mg/kg is a loading dose of 2200 mg. Cefazolin, ceftriaxone alone, meropenem and piperacillin-tazobactam each leave MRSA uncovered.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "ssc-2026"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Norepinephrine is started through a peripheral IV while further fluid is given.",
        "prompt": "Which of the following is the most appropriate initial mean arterial pressure target for him?",
        "options": [
          "MAP 55 to 60 mmHg",
          "MAP 60 to 65 mmHg",
          "MAP 70 to 75 mmHg",
          "MAP 80 to 85 mmHg",
          "MAP 90 to 95 mmHg"
        ],
        "correct": 1,
        "explanation": "For adults with septic shock the Surviving Sepsis Campaign recommends an initial MAP target of 65 mmHg over higher targets. For adults aged 65 years or older, as he is at 71, it suggests an initial range of 60 to 65 mmHg. That suggestion is conditional and rests on low certainty evidence, mainly one large trial in older patients in which a lower target reduced vasopressor exposure without raising mortality. Higher targets of 70 mmHg or more mean more norepinephrine with no survival benefit shown. A target of 55 to 60 mmHg falls below the recommended range and risks ongoing hypoperfusion.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 2
        },
        "source": "ssc-2026"
      }
    ],
    "sources": [
    {
      "id": "ssc-2026",
      "citation": "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
      "url": "https://doi.org/10.1097/CCM.0000000000007075"
    }
  ],
    ...META,
    "version": 3
  },
  {
    "id": "infectious-diseases-29",
    "topic": "infectious-diseases",
    "title": "Tummy pain in a boy with swollen legs",
    "stem": "A 5-year-old boy is brought to the emergency department by his parents with 1 day of fever, abdominal pain and vomiting. He has steroid-sensitive nephrotic syndrome and is in relapse, taking prednisone 40 mg daily for the past 3 weeks. Since this morning he has been sleepy. He is lethargic but rouses to voice. His hands and feet are cool and mottled, with a capillary refill of 5 seconds. He has puffy eyelids and pitting edema of both legs. The abdomen is distended and tender all over, with guarding. His lungs are clear and his liver edge is not enlarged. Blood cultures have been drawn through a new IV.",
    "vitals": {
      "temperature": "39.3°C tympanic",
      "pulse": "168/minute",
      "resp": "32/minute",
      "bp": "76/40 mmHg",
      "o2sat": "96% on room air",
      "weight": "20 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate timing of his first antibiotic dose?",
        "options": [
          "After abdominal ultrasound",
          "After diagnostic paracentesis",
          "Once the CBC and CRP are back",
          "When the surgeon has assessed him",
          "Within 1 hour of recognition"
        ],
        "correct": 4,
        "explanation": "He has septic shock with hypotension and poor perfusion, likely from peritonitis, to which nephrotic syndrome and steroids predispose. The pediatric SSC guideline advises antimicrobials as soon as possible, within 1 hour of recognizing septic shock, and his blood cultures are already drawn. Waiting for ultrasound, paracentesis, blood tests or a surgical assessment delays treatment of a shocked child.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 1
        },
        "source": "ssc-peds-2026"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate first fluid bolus for him?",
        "options": [
          "Albumin 25% 20 mL/kg IV",
          "Balanced crystalloid 1 200 mL IV at once",
          "Balanced crystalloid 400 mL IV, then reassess",
          "Furosemide 1 mg/kg IV first",
          "No fluid until albumin is checked"
        ],
        "correct": 2,
        "explanation": "Despite his edema, his circulating volume is low, and cool mottled limbs with hypotension show shock. The pediatric SSC guideline suggests boluses of 10 to 20 mL/kg, repeated up to 40 to 60 mL/kg in the first hour while there are no signs of fluid overload. A bolus of 20 mL/kg is 20 x 20 = 400 mL, followed by reassessment of perfusion, liver size and lungs. Giving 60 mL/kg, 1 200 mL, at once skips those checks. Withholding fluid or giving furosemide worsens shock, and an albumin level does not change the need for a bolus. The guideline suggests crystalloids rather than albumin for initial resuscitation, and concentrated 25% albumin at 20 mL/kg is not a resuscitation bolus.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 2
        },
        "source": "ssc-peds-2026"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "After 60 mL/kg of crystalloid and an epinephrine infusion, he remains hypotensive with cool extremities.",
        "prompt": "Which of the following is the most appropriate additional treatment for him?",
        "options": [
          "Additional 20 mL/kg crystalloid bolus",
          "Double his usual prednisone PO",
          "Fludrocortisone PO",
          "Hydrocortisone at stress dose IV",
          "No corticosteroid"
        ],
        "correct": 3,
        "explanation": "Three weeks of daily prednisone makes adrenal suppression likely, and the pediatric SSC guideline advises stress-dose corticosteroids for suspected or documented adrenal insufficiency. Oral prednisone is unreliable in shock and doubling it is not stress replacement. Fludrocortisone alone lacks the glucocorticoid effect. More fluid after 60 mL/kg without response risks overload, and withholding steroids ignores his suppressed adrenal axis.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 2
        },
        "source": "ssc-peds-2026"
      }
    ],
    "sources": [
    {
      "id": "ssc-peds-2026",
      "citation": "Weiss SL, Peters MJ, Oczkowski SJ, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Pediatr Crit Care Med. 2026.",
      "url": "https://doi.org/10.1097/PCC.0000000000003927"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-30",
    topic: "infectious-diseases",
    title: "Fever and abdominal pain after a birth",
    stem: "A 29-year-old woman presents to the emergency department 4 days after a vaginal birth with fever, chills and worsening lower abdominal pain. The delivery needed a second degree perineal repair. Her 4-year-old son had a sore throat last week. She has no medical history and is breastfeeding. She looks unwell and is shivering. Her breasts are soft with no redness. Her calves are soft and not tender. The perineal repair is intact without discharge. Her lower abdomen is tender without guarding. Lactate is 4.4 mmol/L.",
    vitals: {
      temperature: "39.4°C oral",
      pulse: "132/minute",
      resp: "26/minute",
      bp: "86/50 mmHg",
      o2sat: "96% on room air",
      weight: "72 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following examinations is most important to find the source of her sepsis?",
        kind: "single",
        options: [
          "Chest auscultation after coughing",
          "Fundoscopic eye examination",
          "Lumbar spine percussion",
          "Pelvic speculum and bimanual exam",
          "Throat examination for exudate"
        ],
        correct: 3,
        explanation: "Four days after birth, lower abdominal pain with sepsis points to the uterus, so a speculum and bimanual examination is the key step to look for uterine tenderness, foul lochia or retained tissue. The pelvis is an often missed source when the perineum and breasts look normal. Her son's sore throat raises concern for group A streptococcus, which can cause severe postpartum infection. Chest, throat, eye and spine examinations are unlikely to show the source here.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "rcog64"
      },
      {
        id: "q2",
        update: "Speculum examination shows foul smelling purulent lochia, and the uterus is enlarged and very tender. Gram stain of the lochia shows gram positive cocci in chains.",
        prompt: "Which of the following is the most appropriate antibiotic regimen?",
        kind: "single",
        options: [
          "ampicillin and gentamicin IV",
          "cephalexin and metronidazole PO",
          "metronidazole and gentamicin IV",
          "piperacillin-tazobactam and clindamycin IV",
          "vancomycin and gentamicin IV"
        ],
        correct: 3,
        explanation: "Hypotension and a lactate of 4.4 mmol/L with postpartum endometritis and gram positive cocci in chains suggests invasive group A streptococcus within a polymicrobial pelvic infection. For life threatening genital tract sepsis, the RCOG advises piperacillin-tazobactam or meropenem plus clindamycin. Piperacillin-tazobactam covers streptococci, gram negative organisms and anaerobes, and clindamycin is added to switch off toxin production. Ampicillin with gentamicin misses anaerobes and gives no toxin suppression. Oral therapy is not appropriate in shock. Metronidazole with gentamicin gives no reliable streptococcal cover, and vancomycin with gentamicin gives no anaerobic cover or toxin suppression.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "rcog64"
      },
      {
        id: "q3",
        update: "Two hours later she needs norepinephrine despite 3 L of crystalloid. CT of the abdomen and pelvis shows gas within the wall of the uterus.",
        prompt: "Which of the following is the most appropriate next step in management?",
        kind: "single",
        options: [
          "Add gentamicin and reassess in 24 hours",
          "IV immune globulin and observation",
          "Repeat CT of the pelvis in 48 hours",
          "Switch to meropenem alone",
          "Urgent gynecology for surgical control"
        ],
        correct: 4,
        explanation: "Gas in the uterine wall with worsening shock suggests necrotizing infection of the uterus, which needs urgent surgical source control. Source control should happen as early as possible, ideally within 6 hours of the diagnosis. Changing or adding antibiotics does not treat necrotic tissue, and meropenem alone drops the clindamycin. Immune globulin is at most an adjunct. Waiting 48 hours for repeat imaging allows the infection to progress.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "ssc26"
      }
    ],
    sources: [
      {
        id: "ssc26",
        citation: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines"
      },
      {
        id: "rcog64",
        citation: "Lissauer D, Morgan M, Banerjee A, et al. Identification and management of maternal sepsis during and following pregnancy: Green-top Guideline No. 64. Royal College of Obstetricians and Gynaecologists. BJOG. 2025.",
        url: "https://pubmed.ncbi.nlm.nih.gov/39694496/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-31",
    topic: "infectious-diseases",
    title: "Scrotal pain in a man with diabetes",
    stem: "You are working in a rural hospital emergency department with a general surgeon on call from home. A 61-year-old man presents with 2 days of scrotal and perineal pain that is now severe. He has type 2 diabetes treated with metformin and empagliflozin, and obesity. He looks unwell. There is dusky red swelling of the scrotum and perineum extending toward the left groin, with a small patch of black skin. There is crepitus in the perineum, and pain on palpation extends beyond the redness. WBC is 24.6 x 10^9/L, glucose 16.2 mmol/L, creatinine 168 umol/L and lactate 4.2 mmol/L.",
    vitals: {
      temperature: "38.6°C oral",
      pulse: "122/minute",
      resp: "28/minute",
      bp: "96/58 mmHg",
      o2sat: "96% on room air",
      weight: "108 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this man?",
        kind: "single",
        options: [
          "Epididymo-orchitis",
          "Fournier gangrene",
          "Scrotal cellulitis",
          "Strangulated inguinal hernia",
          "Testicular torsion"
        ],
        correct: 1,
        explanation: "Severe perineal and scrotal pain with dusky skin, a patch of necrosis, crepitus and pain beyond the redness is necrotizing fasciitis of the perineum, or Fournier gangrene. The finding depends on a full examination of the perineum and genitals, which is easy to skip. Cellulitis does not cause crepitus or skin necrosis. Epididymo-orchitis and torsion centre on the testis. A strangulated hernia causes a tense groin mass with bowel obstruction.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "bersoff"
      },
      {
        id: "q2",
        prompt: "Which of the following diabetes drug classes has been most strongly linked to this infection?",
        kind: "single",
        options: [
          "Biguanide",
          "DPP-4 inhibitor",
          "SGLT2 inhibitor",
          "Sulfonylurea",
          "Thiazolidinedione"
        ],
        correct: 2,
        explanation: "He takes empagliflozin, an SGLT2 inhibitor. An FDA review found 55 cases of Fournier gangrene with SGLT2 inhibitors from 2013 to 2019, against 19 cases with all other diabetes drugs since 1984, and called it a new safety concern. It should be stopped while he is this unwell. Metformin, a biguanide, and sitagliptin, a DPP-4 inhibitor, appeared in only a few of those comparison cases. No comparison case involved a sulfonylurea or a thiazolidinedione.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "bersoff"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most important definitive treatment?",
        kind: "single",
        options: [
          "CT of the pelvis before surgical referral",
          "Hyperbaric oxygen before surgery",
          "IV antibiotics alone for 48 hours",
          "Needle aspiration of the scrotum",
          "Urgent surgical debridement"
        ],
        correct: 4,
        explanation: "Necrotizing soft tissue infection needs prompt surgical exploration and debridement, and the on call surgeon should be called now. Imaging must not delay surgery when the clinical signs, including crepitus and skin necrosis, are already clear. Antibiotics alone do not penetrate necrotic tissue. Hyperbaric oxygen should not delay debridement, and needle aspiration does not treat fascial necrosis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "idsa-ssti"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most appropriate empiric antibiotic regimen?",
        kind: "single",
        options: [
          "cephalexin and metronidazole PO",
          "ciprofloxacin and metronidazole PO for 14 days",
          "clindamycin 600 mg IV alone",
          "vancomycin and piperacillin-tazobactam",
          "vancomycin 25 mg/kg IV alone"
        ],
        correct: 3,
        explanation: "Fournier gangrene is usually polymicrobial, with gram positive, gram negative and anaerobic organisms. IDSA advises broad IV therapy such as vancomycin with piperacillin-tazobactam until cultures return. Oral regimens are inadequate in a patient with sepsis. Vancomycin alone misses gram negative organisms and anaerobes. Clindamycin alone misses gram negative organisms.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "idsa-ssti"
      }
    ],
    sources: [
      {
        id: "bersoff",
        citation: "Bersoff-Matcha SJ, Chamberlain C, Cao C, et al. Fournier gangrene associated with sodium-glucose cotransporter-2 inhibitors: a review of spontaneous postmarketing cases. Ann Intern Med. 2019.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31060053/"
      },
      {
        id: "idsa-ssti",
        citation: "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24973422/"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-32",
    "topic": "infectious-diseases",
    "title": "Feeling unwell with a normal CRP",
    "stem": "A 61-year-old woman presents to the emergency department with 2 days of chills, malaise and poor appetite. She has rheumatoid arthritis treated with monthly tocilizumab infusions, last given 2 weeks ago, and prednisone 5 mg daily. Yesterday her family physician found a temperature of 37.3°C and a CRP of 3 mg/L and reassured her. She took acetaminophen 650 mg 8 hours ago. Today she feels worse and is slow to answer questions. She has no cough, urinary symptoms, abdominal pain, headache or rash that she has noticed. She wears compression stockings for leg swelling. Her chest is clear, her abdomen is soft and there is no neck stiffness. Urinalysis and chest X-ray are normal. Lactate is 3.2 mmol/L.",
    "vitals": {
      "temperature": "37.6°C oral",
      "pulse": "118/minute",
      "resp": "24/minute",
      "bp": "94/58 mmHg",
      "o2sat": "96% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following best explains why her temperature and CRP were near normal despite serious illness?",
        "options": [
          "Acetaminophen taken 8 hours ago",
          "Early stage of a viral illness",
          "Her age of 61 years",
          "Interleukin-6 blockade by tocilizumab",
          "Low-dose daily prednisone"
        ],
        "correct": 3,
        "explanation": "Tocilizumab blocks interleukin-6 signalling, which drives fever and the hepatic acute phase response. The Canadian product monograph warns that signs and symptoms of acute inflammation may be lessened because acute phase reactants are suppressed, so infection can be missed. Acetaminophen can lower her temperature but not her CRP. Prednisone 5 mg has only a modest effect. Her age and an early viral illness do not explain a normal CRP with tachycardia, hypotension and a raised lactate.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 3
        },
        "source": "actemra-pm"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most important next step in her examination?",
        "options": [
          "Count of tender and swollen joints",
          "Full skin check with stockings removed",
          "Fundoscopy for papilledema",
          "Repeat auscultation of the chest",
          "Tender point examination"
        ],
        "correct": 1,
        "explanation": "Her history and first examination give no source, and blunted inflammation makes local signs less obvious. The skin under clothing and stockings is an often missed site of cellulitis or a wound, and she cannot see her own legs well under the stockings. The monograph advises a prompt and complete workup for new infection. A joint count assesses arthritis activity, not sepsis. Her chest is already clear and she has no headache or neurological signs to direct fundoscopy. Tender points belong to fibromyalgia.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 6
        },
        "source": "actemra-pm"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following investigations is most important to send now?",
        "options": [
          "Antinuclear antibody titre",
          "Blood cultures, two sets",
          "Erythrocyte sedimentation rate",
          "Repeat CRP in 12 hours",
          "Rheumatoid factor level"
        ],
        "correct": 1,
        "explanation": "She has a systolic BP of 94 mmHg, tachycardia, confusion and a lactate of 3.2 mmol/L on an immunosuppressive drug, so she needs a full workup for sepsis before antibiotics start. The SSC guideline recommends collecting blood cultures as soon as possible and ideally before antimicrobials. A repeat CRP or an ESR will stay falsely reassuring while interleukin-6 is blocked. Antinuclear antibody and rheumatoid factor tests assess autoimmune disease and do not guide treatment of infection.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "ssc-2026"
      }
    ],
    "sources": [
    {
      "id": "actemra-pm",
      "citation": "Hoffmann-La Roche Limited. Actemra (tocilizumab) product monograph. Health Canada. 2023.",
      "url": "https://assets.roche.com/f/173850/x/26aa4f5e44/actemra_pm_e.pdf"
    },
    {
      "id": "ssc-2026",
      "citation": "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
      "url": "https://doi.org/10.1097/CCM.0000000000007075"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-33",
    topic: "infectious-diseases",
    title: "Fever and rigors in a woman receiving home IV nutrition",
    stem: "A 55-year-old woman presents to the emergency department with 1 day of fever and shaking chills that began shortly after her evening infusion. She has short bowel syndrome after surgery for mesenteric ischemia. She receives parenteral nutrition at home through a right arm peripherally inserted central catheter placed 5 months ago. She has no abdominal pain, back pain, cough or urinary symptoms. Her abdomen has healed scars and is soft and not tender. Her chest is clear. The catheter is covered by an occlusive dressing that has not been removed.",
    vitals: {
      temperature: "38.9°C oral",
      pulse: "116/minute",
      resp: "20/minute",
      bp: "104/62 mmHg",
      o2sat: "97% on room air",
      weight: "54 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most important next step in her examination?",
        kind: "single",
        options: [
          "Examine the throat and sinuses",
          "Inspect the catheter exit site and tunnel",
          "Palpate for costovertebral angle tenderness",
          "Perform a digital rectal examination",
          "Perform a pelvic examination"
        ],
        correct: 1,
        explanation: "Rigors that start with an infusion through a central catheter strongly suggest catheter related bloodstream infection. The dressing must come off so the exit site and the course of the line can be checked for redness, tenderness or pus. The catheter is an often missed source when it is hidden under a dressing. She has no urinary, pelvic, bowel or upper respiratory symptoms to direct the other examinations.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "mermel"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate blood culture strategy?",
        kind: "single",
        options: [
          "Catheter tip culture after removal only",
          "Cultures only if the fever persists",
          "One peripheral culture after antibiotics",
          "Paired catheter and peripheral cultures",
          "Surface swab of the exit site only"
        ],
        correct: 3,
        explanation: "IDSA advises paired blood cultures from the catheter and a peripheral vein before antibiotics. Growth from the catheter sample at least 2 hours before the peripheral sample supports catheter related infection. A tip culture alone gives no information until the line is out. Cultures after antibiotics lose yield, and fever with rigors already justifies cultures. An exit site swab does not diagnose bloodstream infection.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "mermel"
      },
      {
        id: "q3",
        update: "Both sets of blood cultures grow Staphylococcus aureus, susceptible to cloxacillin. The catheter sample turned positive 3 hours before the peripheral sample. The exit site is mildly red.",
        prompt: "Which of the following is the most appropriate management of the catheter?",
        kind: "single",
        options: [
          "Antibiotic lock and keep the line",
          "Exchange it over a guidewire",
          "Remove the catheter promptly",
          "Replace with a new arm line today",
          "Treat through the line for 14 days"
        ],
        correct: 2,
        explanation: "Catheter related Staphylococcus aureus bacteremia needs prompt removal of the catheter, plus at least 14 days of IV therapy and evaluation for endocarditis. Salvage with antibiotic locks or treatment through the line has high failure and relapse rates with this organism. Guidewire exchange leaves the infected tract in place. A new line should wait until blood cultures clear.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "mermel"
      },
      {
        id: "q4",
        prompt: "Which of the following investigations is most important to look for a complication of this bacteremia?",
        kind: "single",
        options: [
          "CT of the chest with contrast",
          "Gallium scan of the whole body",
          "MRI of the lumbar spine",
          "Transesophageal echocardiography",
          "Ultrasound of the abdomen"
        ],
        correct: 3,
        explanation: "Staphylococcus aureus bacteremia from a catheter can seed the heart valves, and endocarditis changes the length and type of treatment. IDSA advises transesophageal echocardiography before a catheter related Staphylococcus aureus bacteremia can be treated with a short course, and without it 4 to 6 weeks of therapy is given. She has no chest, back or abdominal symptoms to direct the other studies. A whole body gallium scan is not a first line test for endocarditis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "mermel"
      }
    ],
    sources: [
      {
        id: "mermel",
        citation: "Mermel LA, Allon M, Bouza E, et al. Clinical practice guidelines for the diagnosis and management of intravascular catheter-related infection: 2009 update by the Infectious Diseases Society of America. Clin Infect Dis. 2009.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19489710/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-34",
    topic: "infectious-diseases",
    title: "Foot ulcer that will not heal",
    stem: "A 64-year-old man presents to the emergency department with 5 days of increasing redness and swelling of his right foot. He has had an ulcer under the first metatarsal head for 2 months. He has type 2 diabetes with peripheral neuropathy and peripheral arterial disease, and takes insulin glargine, metformin and atorvastatin. He says the foot does not hurt. There is a 2 cm plantar ulcer with purulent drainage and redness extending 4 cm around it onto the top of the foot. A sterile metal probe touches hard, gritty bone at the base. Dorsalis pedis and posterior tibial pulses are not palpable. Glucose is 16.4 mmol/L and WBC 11.2 x 10^9/L.",
    vitals: {
      temperature: "37.6°C oral",
      pulse: "92/minute",
      resp: "16/minute",
      bp: "148/82 mmHg",
      o2sat: "98% on room air",
      weight: "96 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following findings most strongly suggests osteomyelitis in his foot?",
        kind: "single",
        options: [
          "Absent pedal pulses",
          "Glucose of 16.4 mmol/L",
          "Positive probe to bone test",
          "Purulent drainage from the ulcer",
          "Redness extending 4 cm"
        ],
        correct: 2,
        explanation: "Touching bone with a sterile probe through a diabetic foot ulcer strongly suggests osteomyelitis, and IWGDF/IDSA advise combining the probe to bone test with plain X-rays for the first assessment. Purulent drainage and spreading redness show soft tissue infection but not bone involvement. Absent pulses show peripheral arterial disease, which affects healing. Hyperglycemia is common with any infection.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "iwgdf"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate initial imaging for his foot?",
        kind: "single",
        options: [
          "CT angiography of the leg",
          "Labelled white cell scan",
          "Plain X-rays of the foot",
          "Technetium bone scan",
          "Ultrasound of the soft tissue"
        ],
        correct: 2,
        explanation: "IWGDF/IDSA recommend plain X-rays as the first imaging study for suspected diabetic foot osteomyelitis, alongside the probe to bone test. X-rays also show gas and foreign bodies. MRI or nuclear imaging is used when the diagnosis stays uncertain. A bone scan is not specific in the neuropathic foot. CT angiography assesses his arteries but does not diagnose bone infection.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "iwgdf"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate plan for him today?",
        kind: "single",
        options: [
          "Admit with urgent vascular assessment",
          "Discharge on oral cephalexin for 7 days",
          "Discharge with daily wound dressing",
          "Home IV antibiotics through a clinic",
          "Outpatient MRI in 2 weeks"
        ],
        correct: 0,
        explanation: "Redness more than 2 cm from the ulcer edge makes this at least a moderate infection, and probable osteomyelitis with absent pulses are complicating features. IWGDF/IDSA advise hospital care for moderate infections with such features, with urgent vascular assessment because poor perfusion limits healing and antibiotic delivery. Discharge on a short oral course or dressings alone undertreats bone infection. Outpatient pathways delay revascularization and surgical review.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "iwgdf"
      },
      {
        id: "q4",
        prompt: "Which of the following organisms should his empiric antibiotic regimen target first?",
        kind: "single",
        options: [
          "Candida and other yeasts",
          "Mycobacterium species",
          "Obligate anaerobic bacteria alone",
          "Pseudomonas aeruginosa",
          "Staphylococci and streptococci"
        ],
        correct: 4,
        explanation: "Aerobic gram positive cocci, especially Staphylococcus aureus and beta-hemolytic streptococci, are the main pathogens in diabetic foot infection, so empiric therapy must cover them. IWGDF/IDSA advise against routine empiric cover of Pseudomonas aeruginosa in temperate climates unless it was isolated recently or there are specific risk factors. Anaerobes may join the infection in an ischemic foot but are rarely the only cause. Yeasts and mycobacteria are not usual causes.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "iwgdf"
      }
    ],
    sources: [
      {
        id: "iwgdf",
        citation: "Senneville E, Albalawi Z, van Asten SA, et al. IWGDF/IDSA guidelines on the diagnosis and treatment of diabetes-related foot infections (IWGDF/IDSA 2023). Clin Infect Dis. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/37779457/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-35",
    topic: "infectious-diseases",
    title: "Watery diarrhea after a kidney infection",
    stem: "A 79-year-old woman presents to the emergency department with 4 days of watery diarrhea 8 to 10 times a day and crampy lower abdominal pain. Two weeks ago she finished a 7 day course of ciprofloxacin for pyelonephritis. She takes pantoprazole, and ramipril for hypertension. She lives at home with her husband. Her mucous membranes are dry. Her abdomen is soft and mildly tender in the lower quadrants without guarding, and bowel sounds are present. WBC is 18.6 x 10^9/L and creatinine is 142 umol/L, up from a baseline of 80 umol/L. Stool testing is positive for C. difficile toxin.",
    vitals: {
      temperature: "37.9°C oral",
      pulse: "104/minute",
      resp: "18/minute",
      bp: "118/64 mmHg",
      o2sat: "97% on room air",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following in her history are risk factors for this infection?",
        kind: "menu",
        options: [
          "Age over 65 years",
          "Hypertension on medication",
          "Kidney infection",
          "Living with her husband",
          "Proton pump inhibitor use",
          "Ramipril use",
          "Recent ciprofloxacin course",
        ],
        select: 3,
        correct: [0, 4, 6],
        explanation: "Recent antibiotic exposure is the main risk factor for C. difficile infection, and fluoroquinolones such as ciprofloxacin are among the classes most often implicated. Older age raises both the risk and the severity. Gastric acid suppression with a proton pump inhibitor is associated with infection. The kidney infection mattered only because it led to the antibiotic. Hypertension, ramipril and her living arrangements are not recognized risk factors.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "mcdonald-cdi"
      },
      {
        id: "q2",
        prompt: "Which of the following best classifies the severity of her infection?",
        kind: "single",
        options: [
          "Carrier state only",
          "Fulminant infection",
          "Non-severe infection",
          "Recurrent infection",
          "Severe infection"
        ],
        correct: 4,
        explanation: "IDSA defines severe C. difficile infection by a WBC of 15 x 10^9/L or more or a creatinine above 133 umol/L (1.5 mg/dL). She has both, with a WBC of 18.6 x 10^9/L and a creatinine of 142 umol/L. Fulminant infection needs hypotension, ileus or megacolon, which she does not have. This is her first episode, so it is not recurrent. Diarrhea with a positive toxin is infection, not carriage.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "mcdonald-cdi"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate treatment for her?",
        kind: "single",
        options: [
          "ciprofloxacin 500 mg PO twice daily",
          "loperamide 4 mg PO then as needed",
          "metronidazole 500 mg PO three times daily",
          "vancomycin 1 g IV every 12 hours",
          "vancomycin 125 mg PO four times daily"
        ],
        correct: 4,
        explanation: "For an initial episode, IDSA and SHEA recommend fidaxomicin, with oral vancomycin 125 mg four times daily for 10 days as an acceptable alternative. Metronidazole is no longer recommended for severe infection. IV vancomycin does not reach the colon. Ciprofloxacin, the likely trigger of this episode, does not treat C. difficile and adds antibiotic pressure. Antimotility drugs such as loperamide are avoided in active infection.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "johnson-cdi"
      },
      {
        id: "q4",
        update: "She recovers after 10 days of treatment. Three weeks later she returns with watery diarrhea 6 times a day, and her stool is again positive for C. difficile toxin. She is not in shock.",
        prompt: "Which of the following is the most appropriate treatment for this episode of her infection?",
        kind: "single",
        options: [
          "Fecal microbiota transplantation",
          "fidaxomicin 200 mg PO twice daily",
          "metronidazole 500 mg PO three times daily",
          "rifaximin 400 mg PO three times daily",
          "vancomycin 1 g IV every 12 hours"
        ],
        correct: 1,
        explanation: "Diarrhea with a positive toxin 3 weeks after a treated episode is a first recurrence. For a first recurrence, IDSA and SHEA suggest fidaxomicin, 200 mg twice daily for 10 days or an extended pulsed course, rather than a standard vancomycin course, which stays an acceptable alternative along with a vancomycin taper and pulse. Metronidazole is not recommended for recurrent infection. IV vancomycin does not reach the colon. Fecal microbiota transplantation is reserved for a second or later recurrence. Rifaximin is used only after a vancomycin course in repeated recurrences, not alone.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "johnson-cdi"
      }
    ],
    sources: [
      {
        id: "mcdonald-cdi",
        citation: "McDonald LC, Gerding DN, Johnson S, et al. Clinical practice guidelines for Clostridium difficile infection in adults and children: 2017 update by the Infectious Diseases Society of America and Society for Healthcare Epidemiology of America. Clin Infect Dis. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29462280/"
      },
      {
        id: "johnson-cdi",
        citation: "Johnson S, Lavergne V, Skinner AM, et al. Clinical practice guideline by the Infectious Diseases Society of America and Society for Healthcare Epidemiology of America: 2021 focused update guidelines on management of Clostridioides difficile infection in adults. Clin Infect Dis. 2021.",
        url: "https://pubmed.ncbi.nlm.nih.gov/34164674/"
      }
    ],
    ...META,
    reviewed: false,
    version: 3
  },
  {
    id: "infectious-diseases-36",
    topic: "infectious-diseases",
    title: "Older woman with falls and new confusion",
    stem: "An 86-year-old woman is brought to the emergency department by her son because she has fallen twice in 2 days and is more confused than usual. She has not complained of cough or fever. She has mild cognitive impairment, hypertension and osteoarthritis, and takes amlodipine and acetaminophen. She is newly disoriented to date and place. She has crackles at the right base. There are no injuries from the falls. CT of the head is normal. Urinalysis shows no leukocytes or nitrites. Urea is 9.8 mmol/L. Chest X-ray shows right lower lobe consolidation.",
    vitals: {
      temperature: "37.6°C oral",
      pulse: "104/minute",
      resp: "26/minute",
      bp: "96/58 mmHg",
      o2sat: "92% on room air",
      weight: "58 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely cause of her falls and confusion?",
        kind: "single",
        options: [
          "Acetaminophen toxicity",
          "Amlodipine induced hypotension",
          "Community acquired pneumonia",
          "Progression of dementia",
          "Urinary tract infection"
        ],
        correct: 2,
        explanation: "Older adults with pneumonia often present with falls and delirium rather than cough or fever. Her crackles, tachypnea, low saturation and right lower lobe consolidation confirm the source. A negative urinalysis makes urinary infection unlikely. Dementia does not progress over 2 days. Amlodipine and therapeutic acetaminophen do not explain the chest findings.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "metlay"
      },
      {
        id: "q2",
        prompt: "Which of the following is her CURB-65 score on arrival today?",
        kind: "single",
        options: [
          "1 point",
          "2 points",
          "3 points",
          "4 points",
          "5 points"
        ],
        correct: 3,
        explanation: "She scores 1 for new confusion, 1 for urea above 7 mmol/L (9.8), 0 for respiratory rate because 26/minute is below 30, 1 for diastolic BP of 60 mmHg or less (58), and 1 for age 65 or older. The total is 4. In the derivation study, 30 day mortality was about 41% with a score of 4. A score of 3 to 5 supports hospital admission and assessment for higher level care.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "lim"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate empiric antibiotic regimen for her?",
        kind: "single",
        options: [
          "amoxicillin 1 g PO three times daily",
          "azithromycin 500 mg PO alone",
          "ceftriaxone and azithromycin IV",
          "ceftriaxone 1 g IV alone",
          "vancomycin and meropenem IV"
        ],
        correct: 2,
        explanation: "For adults admitted with community acquired pneumonia without risk factors for MRSA or Pseudomonas, ATS/IDSA recommend a beta-lactam plus a macrolide, or a respiratory fluoroquinolone alone. Ceftriaxone with azithromycin covers pneumococcus and atypical organisms. Oral amoxicillin or azithromycin alone is for outpatients. A beta-lactam without a macrolide misses atypical organisms. Vancomycin with meropenem is not needed without MRSA or Pseudomonas risk factors.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "metlay"
      }
    ],
    sources: [
      {
        id: "lim",
        citation: "Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. Thorax. 2003.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12728155/"
      },
      {
        id: "metlay",
        citation: "Metlay JP, Waterer GW, Long AC, et al. Diagnosis and treatment of adults with community-acquired pneumonia: an official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. Am J Respir Crit Care Med. 2019.",
        url: "https://pubmed.ncbi.nlm.nih.gov/31573350/"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-37",
    "topic": "infectious-diseases",
    "title": "Fever and a girl who will not walk",
    "stem": "A 6-year-old girl is brought to the emergency department by her father with 2 days of fever and 1 day of refusing to stand on her left leg. A week ago she had a sore throat that settled without treatment. She has not fallen. She has no medical history, her immunizations are up to date and she has no allergies. She lives with her parents and her 3-year-old brother, and her mother is 28 weeks pregnant. She is miserable but alert, with warm hands and a capillary refill of 2 seconds. She holds her left hip flexed and turned outward and screams with any passive movement of it. There is no rash.",
    "vitals": {
      "temperature": "39.2°C oral",
      "pulse": "132/minute",
      "resp": "24/minute",
      "bp": "102/64 mmHg",
      "o2sat": "99% on room air",
      "weight": "21 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely cause of her refusal to walk?",
        "options": [
          "Abscess of the iliopsoas muscle",
          "Osteomyelitis of the distal femur",
          "Reactive arthritis after the sore throat",
          "Septic arthritis of the left hip",
          "Transient synovitis of the hip"
        ],
        "correct": 3,
        "explanation": "High fever, refusal to bear weight and severe pain with any passive movement of a hip held flexed and turned outward point to septic arthritis, which the CPS statement treats as an urgent diagnosis. A recent sore throat can be the start of a group A streptococcal infection that later seeds a joint. An iliopsoas abscess causes pain mainly when the hip is extended, not with every movement. Osteomyelitis of the distal femur causes pain and tenderness above the knee, not severe pain on moving the hip. Transient synovitis and reactive arthritis cause milder pain in a child who looks less unwell.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "cps-osteoarticular"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next step in her care?",
        "options": [
          "Hip ultrasound and urgent orthopaedic review",
          "Ibuprofen and review in 48 hours",
          "MRI of the pelvis as an outpatient",
          "Plain X-ray of the hip only",
          "Throat swab for group A strep"
        ],
        "correct": 0,
        "explanation": "The CPS statement notes that ultrasound detects excess fluid in the joint and that a child with suspected septic arthritis needs prompt assessment by an orthopaedic surgeon for urgent irrigation. Delay risks damage to the joint. A plain X-ray alone is often normal early. An outpatient MRI or a 48-hour review wastes time. A throat swab does not answer whether the hip is infected.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "cps-osteoarticular"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Two sets of blood cultures have been drawn, and she is to receive her first antibiotic dose now.",
        "prompt": "Which of the following is the most appropriate empiric IV antibiotic for her?",
        "options": [
          "cefazolin 1 g IV every 8 hours",
          "clindamycin 280 mg IV every 8 hours",
          "gentamicin 150 mg IV daily",
          "piperacillin-tazobactam IV",
          "vancomycin 300 mg IV every 6 hours"
        ],
        "correct": 0,
        "explanation": "The CPS statement recommends cefazolin 100 to 150 mg/kg/day divided every 6 or 8 hours for bone and joint infection. For 21 kg, 1 g every 8 hours is about 143 mg/kg/day. It covers Staphylococcus aureus and group A streptococcus. Vancomycin is added when MRSA is suspected, and Kingella kingae resists vancomycin and clindamycin. Gentamicin alone misses these organisms. Piperacillin-tazobactam is broader than she needs.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "cps-osteoarticular"
      },
      {
        "id": "q4",
        "kind": "single",
        "update": "Her blood culture grows group A streptococcus. She has had no low blood pressure, rash, organ dysfunction or tissue necrosis.",
        "prompt": "Which of the following is the most appropriate advice for her household contacts?",
        "options": [
          "Amoxicillin for her brother only",
          "Cephalexin for all household contacts",
          "Cephalexin for her pregnant mother",
          "Penicillin V for all contacts",
          "Warning signs only, no antibiotics"
        ],
        "correct": 4,
        "explanation": "The CPS practice point offers chemoprophylaxis only to close contacts of severe invasive group A streptococcal disease, such as toxic shock, necrotizing fasciitis or meningitis. Bacteremia or septic arthritis without these features is non-severe, and routine chemoprophylaxis is not recommended. All close contacts should be told the warning signs and to seek care for fever or other signs of infection within 30 days. Pregnancy does not change this for a non-severe case.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 10
        },
        "source": "cps-igas"
      }
    ],
    "sources": [
    {
      "id": "cps-osteoarticular",
      "citation": "Le Saux N. Diagnosis and management of acute osteoarticular infections in children. Canadian Paediatric Society position statement. Paediatr Child Health. 2018.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6054183/"
    },
    {
      "id": "cps-igas",
      "citation": "Moore DL, Allen UD, Mailman T. Invasive group A streptococcal disease: management and chemoprophylaxis. Canadian Paediatric Society practice point (reaffirmed 2024). Paediatr Child Health. 2019.",
      "url": "https://cps.ca/en/documents/position/Invasive-group-A-streptococcal-disease"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-38",
    topic: "infectious-diseases",
    title: "Bite from a street dog while travelling",
    stem: "A 26-year-old man presents to the emergency department 4 days after returning from a month of travel in India. Nine days ago a street dog ran up and bit his left calf while he was walking through a village. He cleaned the wound with bottled water and did not seek care. The dog ran off and could not be found. He has never had rabies vaccine. He is healthy, his routine immunizations are complete and he had a tetanus booster 3 years ago. There are two healing puncture wounds on the left calf with no redness, swelling or discharge.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "72/minute",
      resp: "14/minute",
      bp: "124/76 mmHg",
      o2sat: "99% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate rabies management for him?",
        kind: "single",
        options: [
          "Check a rabies antibody titre first",
          "Observe the wound for 10 days",
          "Rabies immune globulin and vaccine now",
          "Vaccine alone, as over 7 days have passed",
          "No prophylaxis this long after the bite"
        ],
        correct: 2,
        explanation: "A bite from an unobserved dog in a country where canine rabies is common needs full post exposure prophylaxis, and a delay of 9 days is not a reason to withhold it because the incubation period is often long. He has never been vaccinated, so he needs rabies immune globulin and vaccine. The 7 day limit for immune globulin counts from the first vaccine dose, not from the bite. Observation is not possible because the dog cannot be found. Antibody titres do not guide the decision to start prophylaxis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-rabies"
      },
      {
        id: "q2",
        prompt: "Which of the following is the correct dose of rabies immune globulin for him?",
        kind: "single",
        options: [
          "800 IU",
          "1 600 IU",
          "2 400 IU",
          "3 200 IU",
          "4 000 IU"
        ],
        correct: 1,
        explanation: "The dose of rabies immune globulin is 20 IU/kg on day 0. For 80 kg that is 80 x 20 = 1 600 IU. As much as possible is infiltrated into and around the wounds, and any remainder is given IM at a site away from the vaccine. A larger dose can blunt the response to the vaccine, and a smaller dose gives less passive protection.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-rabies"
      },
      {
        id: "q3",
        prompt: "Which of the following is the correct rabies vaccine schedule for him?",
        kind: "single",
        options: [
          "Days 0, 3, 7 and 14",
          "Days 0 and 3",
          "Days 0, 3, 7, 14 and 28",
          "Days 0, 7 and 21",
          "Days 0, 7 and 28"
        ],
        correct: 0,
        explanation: "A healthy person who has never been vaccinated receives 4 doses of rabies vaccine IM on days 0, 3, 7 and 14, together with immune globulin on day 0. The fifth dose on day 28 is added for people who are immunocompromised, and he is healthy. Two doses on days 0 and 3 are for people who have been vaccinated before. Schedules of 3 doses are used for pre-exposure vaccination, not after exposure.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-rabies"
      },
      {
        id: "q4",
        prompt: "Which of the following tetanus measures does he need today?",
        kind: "single",
        options: [
          "Td booster vaccine",
          "Tdap and immune globulin",
          "Tdap booster vaccine",
          "Tetanus immune globulin",
          "No tetanus prophylaxis needed"
        ],
        correct: 4,
        explanation: "His routine immunizations are complete, so he has had at least 3 doses of tetanus toxoid, and his last booster was 3 years ago. With 3 or more doses and a last dose less than 5 years ago, no vaccine or immune globulin is needed for any type of wound. Immune globulin is only for people with an unknown history or fewer than 3 doses.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-tetanus"
      }
    ],
    sources: [
      {
        id: "cig-rabies",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Rabies vaccine chapter, including post exposure prophylaxis. 2015, updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-18-rabies-vaccine.html"
      },
      {
        id: "cig-tetanus",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Tetanus toxoid chapter, including tetanus prophylaxis in wound management. Updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-39",
    "topic": "infectious-diseases",
    "title": "A needle in the sandbox",
    "stem": "An 8-year-old boy is brought to the emergency department by his mother 2 hours after he pricked the tip of his finger on a discarded needle and syringe in a park sandbox. The syringe had no visible blood. The puncture is shallow and bled a little, and his mother washed it with soap and water. His routine immunizations are up to date, including the complete hepatitis B series as an infant, and his last tetanus-containing vaccine was at age 4. He has no medical history. There is a 1 mm puncture on the pad of his left index finger with no foreign body. His mother brought the needle in a plastic bottle.",
    "vitals": {
      "temperature": "36.8°C tympanic",
      "pulse": "96/minute",
      "resp": "20/minute",
      "o2sat": "99% on room air",
      "weight": "26 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate approach to HIV postexposure prophylaxis for him?",
        "options": [
          "Discuss the low risk without offering PEP",
          "Start PEP if his mother is anxious",
          "Start PEP once the needle is tested",
          "Start three-drug PEP for 28 days",
          "Start two-drug PEP for 14 days"
        ],
        "correct": 0,
        "explanation": "No case of HIV infection from a discarded needle in the community has been reported, and the risk is extremely unlikely. The CPS statement advises discussing but not recommending prophylaxis in low-risk situations and keeping it for high-risk ones, such as a needle with visible blood or blood injected. His shallow puncture with no visible blood is low risk. Testing the needle is not indicated because a negative result would not rule out infection. Anxiety alone does not justify antiretroviral drugs.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 10
        },
        "source": "cps-needle"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate hepatitis B management for him?",
        "options": [
          "Check anti-HBs, vaccine dose if delayed",
          "Hepatitis B immune globulin alone",
          "Immune globulin and full vaccine series",
          "Restart the full vaccine series",
          "No hepatitis B measures are needed"
        ],
        "correct": 0,
        "explanation": "For a child who completed the hepatitis B series, the CPS statement advises testing anti-HBs and HBsAg. If the anti-HBs result is not available within 48 hours, one dose of hepatitis B vaccine is given. A protective titre needs no further action, while a non-protective result calls for immune globulin with a vaccine dose. Immune globulin with a full series is for unvaccinated children. Restarting the series or doing nothing ignores his status and the unknown source.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 10
        },
        "source": "cps-needle"
      },
      {
        "id": "q3",
        "kind": "menu",
        "select": 3,
        "prompt": "Which of the following baseline tests should be drawn from him today?",
        "options": [
          "CBC with differential",
          "Culture of the needle tip",
          "Hepatitis B serology",
          "Hepatitis C antibody",
          "HIV antibody test",
          "Liver enzymes",
          "Testing the needle for viruses"
        ],
        "correct": [
          2,
          3,
          4
        ],
        "explanation": "The CPS statement advises baseline HBV, HCV and HIV serology, so that any later infection can be shown to have come from this injury, with repeat testing at 4 to 6 weeks and 4 to 6 months. Testing the needle or syringe is not indicated because a negative result does not exclude infection. Needle culture, a blood count and liver enzymes do not change management of a well child with a minor puncture.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 7
        },
        "source": "cps-needle"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate tetanus management for him?",
        "options": [
          "Td vaccine booster now",
          "Tdap and tetanus immune globulin",
          "Tdap vaccine booster now",
          "Tetanus immune globulin alone",
          "No tetanus vaccine or immune globulin"
        ],
        "correct": 4,
        "explanation": "He has had at least 3 doses of tetanus vaccine, the last at age 4, which is under 5 years ago. The Canadian Immunization Guide advises no vaccine and no immune globulin for any wound, clean or contaminated, when the last dose was under 5 years ago in a child with 3 or more doses. Tetanus immune globulin is for people with fewer than 3 doses or an unknown history and a contaminated wound. A Td or Tdap booster is not due.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 10
        },
        "source": "cig-tetanus"
      }
    ],
    "sources": [
    {
      "id": "cps-needle",
      "citation": "Moore DL, Bitnun A, Fanella S, Penner J, Barton M. Needle stick injuries in the community. Canadian Paediatric Society position statement (updated 2024). Paediatr Child Health. 2018.",
      "url": "https://cps.ca/en/documents/position/needle-stick-injuries-in-the-community"
    },
    {
      "id": "cig-tetanus",
      "citation": "Public Health Agency of Canada. Tetanus toxoid: Canadian Immunization Guide. 2026.",
      "url": "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-40",
    topic: "infectious-diseases",
    title: "Family of a coughing teenager",
    stem: "You are working in an emergency department in Manitoba. A 31-year-old woman who is 33 weeks pregnant presents with her husband and their 4-year-old daughter. Her 15-year-old son was diagnosed with pertussis by PCR today at his family physician's office and started treatment. His illness began 9 days ago with a runny nose and cough, and the family has lived together throughout. The woman, her husband and her daughter feel well and have no cough. Her daughter is fully immunized for her age. The woman missed her prenatal visit at 28 weeks and has not had a pertussis-containing vaccine in this pregnancy. She has no allergies and takes prenatal vitamins. Her examination is normal.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "88/minute",
      resp: "16/minute",
      bp: "114/70 mmHg",
      o2sat: "99% on room air",
      weight: "72 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        prompt: "Which of the following contacts of her son should receive antibiotic chemoprophylaxis?",
        options: [
          "Her 4-year-old daughter",
          "Her husband",
          "Her son's classmates",
          "Her son's hockey teammates",
          "Her son's teacher",
          "His school bus driver",
        ],
        correct: [0, 1],
        explanation: "The provincial protocol limits household chemoprophylaxis to homes where a vulnerable person lives, meaning an infant under 1 year or a pregnant person in the third trimester. At 33 weeks the woman is in her third trimester, so every household contact is treated, vaccinated or not. That includes her husband and her fully immunized daughter. Classmates, teammates, a teacher and a bus driver are contacts outside the home. There, prophylaxis is offered only to vulnerable people, and none of them is described as vulnerable. His illness began 9 days ago, so every household contact is within the 21 days after first contact when prophylaxis can still help.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "mb-pertussis",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate chemoprophylaxis for the woman?",
        options: [
          "amoxicillin 500 mg PO three times daily for 7 days",
          "azithromycin 500 mg then 250 mg PO daily, 5 days",
          "cephalexin 500 mg PO four times daily for 7 days",
          "clarithromycin 500 mg PO twice daily for 7 days",
          "doxycycline 100 mg PO twice daily for 7 days",
        ],
        correct: 1,
        explanation: "The provincial protocol names azithromycin as the preferred drug for all ages and states that pregnancy is not a contraindication. The adult course is 500 mg on day 1, then 250 mg daily for 4 more days. Clarithromycin is effective against pertussis but is not recommended in pregnancy. Doxycycline is avoided in pregnancy and is not a listed agent for pertussis. Amoxicillin and cephalexin are not among the agents the protocol lists for treatment or prophylaxis.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "mb-pertussis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her pertussis immunization?",
        options: [
          "Td booster today instead",
          "Tdap after delivery only",
          "Tdap in her next pregnancy",
          "Tdap today, before delivery",
          "No pertussis vaccine",
        ],
        correct: 3,
        explanation: "The Canadian Immunization Guide recommends Tdap in every pregnancy, ideally at 27 to 32 weeks. It adds that Tdap should be considered until the end of pregnancy because it can still give partial protection. She missed the ideal window, so she should receive it now at 33 weeks. Antibiotics clear current exposure but do not give her baby antibodies. A dose after delivery or in a later pregnancy does nothing for this baby before birth. Td contains no pertussis component.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "cig-pertussis",
      },
    ],
    sources: [
      {
        id: "mb-pertussis",
        citation: "Manitoba Health, Seniors and Long-Term Care. Communicable disease management protocol: pertussis (whooping cough). Government of Manitoba. September 2024.",
        url: "https://www.gov.mb.ca/health/publichealth/cdc/protocol/pertussis.pdf",
      },
      {
        id: "cig-pertussis",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Pertussis (whooping cough) vaccine. Updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-15-pertussis-vaccine.html",
      },
    ],
    ...META,
    version: 3,
  },
  {
    id: "infectious-diseases-41",
    topic: "infectious-diseases",
    title: "Pregnant woman after a household exposure",
    stem: "A 31-year-old woman who is 14 weeks pregnant presents to the emergency department because her 5-year-old nephew, who stayed at her home for the weekend, developed chickenpox yesterday. He slept in her home for 2 nights and his rash began the morning after he left. She grew up in the Philippines and does not remember having chickenpox. She has no record of varicella vaccination. She has no rash or fever. She has no medical history and takes prenatal vitamins. Her last contact with her nephew was 36 hours ago.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "84/minute",
      resp: "16/minute",
      bp: "112/68 mmHg",
      o2sat: "99% on room air",
      weight: "68 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate next step for her?",
        kind: "single",
        options: [
          "Reassurance, as exposure was brief",
          "Recheck only if a rash appears",
          "Urgent varicella IgG serology",
          "Varicella vaccine today",
          "Zoster vaccine today"
        ],
        correct: 2,
        explanation: "Two nights in the same home as a child who developed chickenpox the next day is a significant exposure, because varicella is contagious for 1 to 2 days before the rash. After exposure in pregnancy, immunity should be checked by serology as soon as possible, since many adults without a history are immune. Live varicella vaccine is contraindicated in pregnancy, and zoster vaccine is not used for post exposure protection. Waiting for a rash loses the window for immune globulin.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-varicella"
      },
      {
        id: "q2",
        update: "Her varicella IgG result returns negative 24 hours later. She still has no rash or fever.",
        prompt: "Which of the following is the correct dose of varicella zoster immune globulin for her?",
        kind: "single",
        options: [
          "375 IU",
          "625 IU",
          "850 IU",
          "1 250 IU",
          "1 700 IU"
        ],
        correct: 1,
        explanation: "She is susceptible, pregnant and significantly exposed, and live vaccine is contraindicated, so she meets the criteria for varicella zoster immune globulin. The dose is 125 IU per 10 kg to a maximum of 625 IU. For 68 kg the weight based dose is 6.8 x 125 = 850 IU, which is capped at 625 IU. The minimum dose of 125 IU is for small children.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-varicella"
      },
      {
        id: "q3",
        prompt: "Which of the following is the longest interval after exposure at which immune globulin may still be given?",
        kind: "single",
        options: [
          "2 days",
          "4 days",
          "7 days",
          "10 days",
          "21 days"
        ],
        correct: 3,
        explanation: "Varicella zoster immune globulin should be given as soon as possible and ideally within 96 hours, which is 4 days. It may still be used up to 10 days after exposure, although benefit after 96 hours is less certain. A dose given when her result returns, 60 hours after her last contact, falls within the ideal window. At 21 days the incubation period has largely passed.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-varicella"
      }
    ],
    sources: [
      {
        id: "cig-varicella",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Varicella (chickenpox) vaccine chapter, including post-exposure management and varicella zoster immune globulin. Updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-24-varicella-chickenpox-vaccine.html"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-42",
    topic: "infectious-diseases",
    title: "A husband after his wife's diagnosis",
    stem: "A 52-year-old man presents to the emergency department because his wife was diagnosed yesterday with acute hepatitis A. Her nausea began 8 days ago and her jaundice 2 days ago. They share a home, meals and a bed. He feels well, with no nausea, dark urine or jaundice. He has cirrhosis from hepatitis C, which was cured 3 years ago. He also has type 2 diabetes treated with metformin and hypertension treated with ramipril, and he takes omeprazole for heartburn. He was born in Canada, has never received hepatitis A vaccine and has never had hepatitis A. His sclerae are not icteric, and his abdomen is soft without ascites.",
    vitals: {
      temperature: "36.6°C oral",
      pulse: "72/minute",
      resp: "14/minute",
      bp: "132/80 mmHg",
      o2sat: "98% on room air",
      weight: "82 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most increases his risk of severe hepatitis A if he is infected?",
        options: [
          "Birth in Canada",
          "Cirrhosis from hepatitis C",
          "Daily omeprazole use",
          "Hypertension on ramipril",
          "Type 2 diabetes on metformin",
        ],
        correct: 1,
        explanation: "The Canadian Immunization Guide states that people with chronic liver disease have an increased risk of progressing to fulminant hepatic failure and death from hepatitis A. His cirrhosis remains even though the hepatitis C was cured. Being born in Canada makes it less likely that he is already immune, which raises his chance of infection but not its severity. The guide does not name diabetes, hypertension or omeprazole as risk factors for severe hepatitis A.",
        keyFeature: { topic: "infectious-diseases", n: 3 },
        source: "cig-hepa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate post-exposure prophylaxis for him?",
        options: [
          "Hepatitis A vaccine alone",
          "Immune globulin alone",
          "Serology first, then vaccine",
          "Vaccine plus immune globulin",
          "No prophylaxis this late",
        ],
        correct: 3,
        explanation: "The guide recommends hepatitis A vaccine for susceptible household contacts as soon as possible, preferably within 14 days of the last exposure. It adds that people with chronic liver disease should receive immune globulin as well as vaccine. He lives with his wife, so his last exposure is today and he is well within that window. Vaccine alone is for healthy contacts, and immune globulin alone is for people who cannot receive vaccine, such as infants under 6 months. Serology is mainly considered where prior immunity is likely, and waiting for it delays protection in a Canadian-born man with no history of hepatitis A.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "cig-hepa",
      },
      {
        id: "q3",
        kind: "single",
        update: "Their 24-year-old daughter lives with them and shares meals. She is healthy, is not pregnant and has never received hepatitis A vaccine.",
        prompt: "Which of the following is the most appropriate post-exposure prophylaxis for the daughter?",
        options: [
          "Hepatitis A vaccine alone",
          "Immune globulin alone",
          "Serology first, then vaccine",
          "Vaccine plus immune globulin",
          "No prophylaxis while she is well",
        ],
        correct: 0,
        explanation: "For healthy household contacts aged 6 months or older, the guide recommends hepatitis A vaccine in preference to immune globulin, given as soon as possible and preferably within 14 days of the last exposure. She is 24, healthy and has no liver disease or immune compromise, so she does not need immune globulin as well. Immune globulin alone is for infants under 6 months and people who cannot receive vaccine. Feeling well now does not exclude infection in its incubation period, and waiting for serology delays protection.",
        keyFeature: { topic: "infectious-diseases", n: 10 },
        source: "cig-hepa",
      },
    ],
    sources: [
      {
        id: "cig-hepa",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Hepatitis A vaccine, including post-exposure prophylaxis. Updated 2021.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-6-hepatitis-a-vaccine.html",
      },
    ],
    ...META,
    version: 2,
  },
  {
    id: "infectious-diseases-43",
    topic: "infectious-diseases",
    title: "Toddler who will not turn her neck",
    stem: "A 3-year-old girl is brought to the emergency department by her parents with 3 days of fever and 1 day of refusing to eat. She had a cold last week. Today she cries when she turns her head and holds her neck stiffly extended. She drools a little and her voice is muffled. She has no medical history and her immunizations are up to date. She is irritable but consolable. There is no stridor. There are enlarged tender lymph nodes on the right side of her neck. Her tonsils are normal and the back of the throat bulges slightly on the right. Kernig and Brudzinski signs are negative.",
    vitals: {
      temperature: "39.2°C rectal",
      pulse: "148/minute",
      resp: "30/minute",
      bp: "100/60 mmHg",
      o2sat: "98% on room air",
      weight: "14 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this child?",
        kind: "single",
        options: [
          "Acute epiglottitis",
          "Bacterial meningitis",
          "Peritonsillar abscess",
          "Retropharyngeal abscess",
          "Torticollis from muscle strain"
        ],
        correct: 3,
        explanation: "Fever, neck pain with limited movement, a stiffly extended neck, drooling and a bulge in the posterior pharynx in a young child after a cold suggest a retropharyngeal abscess. Careful examination of the neck and pharynx is what finds it. Negative meningeal signs and neck extension rather than true meningismus argue against meningitis. Epiglottitis is rare in immunized children and the tonsils are normal, which argues against peritonsillar abscess. Muscle strain does not cause fever and a pharyngeal bulge.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "craig"
      },
      {
        id: "q2",
        prompt: "Which of the following imaging studies is most appropriate for her?",
        kind: "single",
        options: [
          "Barium swallow study",
          "Chest X-ray, two views",
          "CT neck with IV contrast",
          "MRI brain with contrast",
          "Ultrasound of the thyroid"
        ],
        correct: 2,
        explanation: "Contrast enhanced CT of the neck shows whether there is a drainable retropharyngeal collection and how far it extends. A chest X-ray, barium swallow or thyroid ultrasound does not assess the retropharyngeal space. MRI of the brain does not image the neck spaces and needs sedation.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "craig"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate initial antibiotic therapy?",
        kind: "single",
        options: [
          "amoxicillin PO for 10 days",
          "azithromycin PO for 5 days",
          "ceftriaxone and clindamycin IV",
          "cephalexin PO for 10 days",
          "gentamicin IV alone"
        ],
        correct: 2,
        explanation: "Retropharyngeal abscess is a polymicrobial infection with group A streptococcus, Staphylococcus aureus and oral anaerobes, so IV therapy that covers all of these is started. Many children improve with IV antibiotics alone, and surgery is added for large collections or failure to improve. Oral agents are not adequate for a deep neck infection with drooling. Gentamicin does not cover streptococci or anaerobes.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "craig"
      },
      {
        id: "q4",
        prompt: "Which of the following complications is the most important reason for urgent treatment?",
        kind: "single",
        options: [
          "Acute otitis media",
          "Airway obstruction",
          "Febrile seizure",
          "Glomerulonephritis",
          "Reactive arthritis"
        ],
        correct: 1,
        explanation: "A retropharyngeal abscess can compromise the airway, and she already has drooling and a muffled voice. Other serious complications include rupture with aspiration, spread to the mediastinum and jugular vein thrombosis. Otitis media, febrile seizure, glomerulonephritis and reactive arthritis are not the threats that make this an emergency.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "craig"
      }
    ],
    sources: [
      {
        id: "craig",
        citation: "Craig FW, Schunk JE. Retropharyngeal abscess in children: clinical presentation, utility of imaging, and current management. Pediatrics. 2003.",
        url: "https://pubmed.ncbi.nlm.nih.gov/12777558/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-44",
    topic: "infectious-diseases",
    title: "Painful wrist and scattered skin spots",
    stem: "A 22-year-old woman presents to the emergency department with 3 days of fever and joint pain that has moved from her knees to her left wrist and hand. She has also noticed a few painful spots on her arms and legs. She has had a new male partner for 2 months, and they have vaginal, oral and anal sex without condoms. She has no vaginal discharge. She takes an oral contraceptive. She looks mildly unwell. There is swelling and tenderness over the tendons on the back of her left wrist, with pain when she extends her fingers. There are five small pustules on red bases on her forearms and shins. Her knees have no effusion.",
    vitals: {
      temperature: "38.3°C oral",
      pulse: "102/minute",
      resp: "16/minute",
      bp: "112/70 mmHg",
      o2sat: "99% on room air",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this woman?",
        kind: "single",
        options: [
          "Acute rheumatic fever",
          "Disseminated gonococcal infection",
          "Post-streptococcal reactive arthritis",
          "Secondary syphilis",
          "Systemic lupus erythematosus"
        ],
        correct: 1,
        explanation: "Migratory arthralgia, tenosynovitis of the wrist and a few painful pustules on the limbs in a sexually active young woman are the classic triad of disseminated gonococcal infection. Genital symptoms are often absent. Post-streptococcal reactive arthritis follows a streptococcal sore throat and does not cause pustules. Secondary syphilis causes a widespread rash, often on the palms and soles, rather than a few pustules. Lupus and rheumatic fever do not explain pustular skin lesions.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "cdc-sti"
      },
      {
        id: "q2",
        prompt: "Which of the following investigations are most appropriate for her?",
        kind: "menu",
        options: [
          "Antinuclear antibody",
          "Antistreptolysin O titre",
          "Blood cultures",
          "Cervical NAAT for gonorrhea",
          "Lyme disease serology",
          "MRI of the wrist",
          "Pharyngeal and rectal NAAT",
          "Rheumatoid factor"
        ],
        select: 3,
        correct: [
          2,
          3,
          6
        ],
        explanation: "Suspected disseminated gonococcal infection calls for NAAT and culture from urogenital and extragenital sites, including the pharynx and rectum, plus cultures of blood and any other involved site. Mucosal sites are often positive when blood cultures are not. Autoantibody tests, antistreptolysin O and Lyme serology do not fit this picture. MRI does not identify the organism.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "cdc-sti"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate initial treatment?",
        kind: "single",
        options: [
          "azithromycin 1 g PO once",
          "ceftriaxone 1 g IV every 24 hours",
          "ceftriaxone 500 mg IM once",
          "ciprofloxacin 500 mg PO twice daily",
          "doxycycline 100 mg PO twice daily"
        ],
        correct: 1,
        explanation: "Disseminated gonococcal infection is treated with ceftriaxone 1 g IV or IM every 24 hours, usually in hospital, with a switch to an oral agent guided by susceptibility after improvement to complete at least 7 days. A single 500 mg IM dose treats uncomplicated gonorrhea only. Resistance makes azithromycin alone and ciprofloxacin unreliable. Doxycycline treats chlamydia but not gonorrhea.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "cdc-sti"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most appropriate management of her partner?",
        kind: "single",
        options: [
          "Test and treat empirically now",
          "Test, then treat only if positive",
          "Treat after her cultures return",
          "Treat only if he has symptoms",
          "No action, as she will tell him"
        ],
        correct: 0,
        explanation: "The Public Health Agency of Canada advises that sexual partners from the 60 days before symptom onset be tested and treated empirically, without waiting for results. Many infected men have no symptoms, so symptom based treatment misses cases. Waiting for her cultures or his results delays treatment and allows reinfection and spread. Partner notification should be supported, not left to chance.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "phac-gc"
      }
    ],
    sources: [
      {
        id: "cdc-sti",
        citation: "Workowski KA, Bachmann LH, Chan PA, et al. Sexually transmitted infections treatment guidelines, 2021. MMWR Recomm Rep. 2021.",
        url: "https://pubmed.ncbi.nlm.nih.gov/34292926/"
      },
      {
        id: "phac-gc",
        citation: "Public Health Agency of Canada. Gonorrhea guide: key information and resources. Updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/infectious-diseases/sexual-health-sexually-transmitted-infections/canadian-guidelines/gonorrhea.html"
      }
    ],
    ...META
  },
  {
    "id": "infectious-diseases-45",
    "topic": "infectious-diseases",
    "title": "Ear pain that keeps an older man awake",
    "stem": "A 76-year-old man presents to the emergency department with 5 weeks of right ear pain and discharge. He has used three courses of ciprofloxacin and dexamethasone ear drops from his family physician without improvement. The pain is severe, keeps him awake at night and now spreads to the right side of his head. He has type 2 diabetes with an A1c of 9.8% and chronic kidney disease. The right ear canal is swollen with foul discharge and pink granulation tissue on its floor, and the tympanic membrane cannot be seen. There is no swelling behind the ear. CRP is 64 mg/L and ESR is 78 mm/hour.",
    "vitals": {
      "temperature": "37.4°C oral",
      "pulse": "84/minute",
      "resp": "16/minute",
      "bp": "146/82 mmHg",
      "o2sat": "97% on room air",
      "weight": "82 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following is the most likely diagnosis for his ear problem?",
        "options": [
          "Fungal otitis externa",
          "Furunculosis of the canal",
          "Middle ear cholesteatoma",
          "Necrotizing otitis externa",
          "Uncomplicated otitis externa"
        ],
        "correct": 3,
        "explanation": "Weeks of severe ear pain that is worse at night and out of keeping with the findings, granulation tissue in the canal, failure of topical treatment and raised CRP and ESR in an older man with poorly controlled diabetes point to necrotizing otitis externa. Uncomplicated otitis externa responds to drops within days. Fungal otitis externa causes itch and debris rather than granulation and raised inflammatory markers. A furuncle is a localized pustule. A middle ear cholesteatoma causes painless discharge and hearing loss.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "costa-noe"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following examinations is most important to complete now?",
        "options": [
          "Cranial nerve examination",
          "Fundoscopy for retinopathy",
          "Palpation of the neck nodes",
          "Rinne and Weber tests",
          "Temporal artery palpation"
        ],
        "correct": 0,
        "explanation": "Spread of the infection through the skull base can damage the facial nerve and the lower cranial nerves. In the cohort, 35% had cranial nerve involvement and 29% had a facial palsy, which changes imaging and admission decisions. Tuning fork tests describe hearing loss but do not show spread. Neck nodes and retinopathy do not stage the infection. Temporal artery palpation looks for arteritis, and his pain has an obvious ear source.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 6
        },
        "source": "costa-noe"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate empiric antibiotic after cultures are taken?",
        "options": [
          "amoxicillin-clavulanate 875 mg PO twice daily",
          "cefazolin 2 g IV every 8 hours",
          "ceftazidime 2 g IV every 8 hours",
          "clindamycin 600 mg IV every 8 hours",
          "More ciprofloxacin ear drops"
        ],
        "correct": 2,
        "explanation": "Pseudomonas aeruginosa is the most frequent pathogen, and a third of isolates in the cohort were resistant to ciprofloxacin. The protocol uses IV ceftazidime for admitted patients until the antibiogram returns, with at least 6 weeks of IV therapy. More ciprofloxacin drops repeat a failed treatment. Cefazolin, clindamycin and amoxicillin-clavulanate do not cover Pseudomonas.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 8
        },
        "source": "costa-noe"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following investigations is most appropriate to define the extent of his disease?",
        "options": [
          "CT of the temporal bones",
          "Formal audiogram",
          "Plain skull radiograph",
          "Swab of the canal alone",
          "Ultrasound of the neck"
        ],
        "correct": 0,
        "explanation": "The protocol suggests CT for everyone with suspected necrotizing otitis externa, because it shows soft tissue thickening and erosion of the bony canal, and it guides treatment. MRI is added for cranial nerve involvement or intracranial spread. A skull radiograph cannot show early skull base erosion. An audiogram and a neck ultrasound do not stage the infection. A swab guides antibiotics but does not define its extent.",
        "keyFeature": {
          "topic": "infectious-diseases",
          "n": 4
        },
        "source": "costa-noe"
      }
    ],
    "sources": [
    {
      "id": "costa-noe",
      "citation": "Costa MB, Onishi ET, Penido NO, et al. Necrotizing otitis externa: a proposal for diagnostic and therapeutic approach. Int Arch Otorhinolaryngol. 2023.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10593509/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "infectious-diseases-46",
    topic: "infectious-diseases",
    title: "Painful lump on the thigh",
    stem: "A 28-year-old man presents to the emergency department with 4 days of a painful, enlarging lump on his right thigh. He has had no fever or chills. He works as a mechanic and is otherwise healthy, with no allergies. He does not inject drugs and takes no medications. There is a 3 cm fluctuant, tender swelling with 1 cm of surrounding redness. There is no lymphangitic streaking. Bedside ultrasound shows a 2.8 cm fluid collection.",
    vitals: {
      temperature: "36.9°C oral",
      pulse: "82/minute",
      resp: "14/minute",
      bp: "128/80 mmHg",
      o2sat: "99% on room air",
      weight: "82 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most important part of his treatment?",
        kind: "single",
        options: [
          "Cephalexin for 7 days",
          "Clindamycin for 7 days",
          "Incision and drainage",
          "Topical mupirocin",
          "Warm compresses alone"
        ],
        correct: 2,
        explanation: "A fluctuant abscess confirmed on ultrasound needs incision and drainage, which is the key treatment. Antibiotics without drainage do not clear the collection. Warm compresses may help a small early lesion but not a 2.8 cm collection. Topical mupirocin is used for impetigo, not abscesses.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "idsa-ssti"
      },
      {
        id: "q2",
        update: "After drainage he asks about antibiotics. In a trial of uncomplicated abscesses, clinical cure was 80.5% with trimethoprim-sulfamethoxazole and 73.6% with placebo after drainage.",
        prompt: "Which of the following is closest to the number needed to treat for one additional cure?",
        kind: "single",
        options: [
          "10 patients",
          "15 patients",
          "20 patients",
          "30 patients",
          "70 patients"
        ],
        correct: 1,
        explanation: "The absolute risk difference is 80.5% - 73.6% = 6.9%, or 0.069. The number needed to treat is 1 / 0.069 = 14.5, so about 15 patients. Trimethoprim-sulfamethoxazole after drainage gave a modest benefit, and it has to be weighed against adverse effects. A number needed to treat of 10 would need a difference of 10%, and one of 70 would need a difference of about 1.4%.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "talan"
      },
      {
        id: "q3",
        prompt: "Which of the following features, if present, would most favour adding a systemic antibiotic after drainage?",
        kind: "menu",
        options: [
          "Abscess 3 cm across",
          "Fever and tachycardia",
          "Fluctuance on palpation",
          "High dose prednisone use",
          "Occupation as a mechanic",
          "Pain on palpation",
          "Redness 1 cm around it",
          "Ultrasound fluid pocket"
        ],
        select: 2,
        correct: [
          1,
          3
        ],
        explanation: "IDSA advises adding antibiotics after drainage when there are signs of systemic infection, such as fever and tachycardia, or when host defences are impaired, such as with high dose corticosteroids. Fluctuance, pain and a fluid pocket on ultrasound confirm an abscess but do not call for antibiotics. A 3 cm abscess with 1 cm of redness is an uncomplicated abscess. His occupation does not change management.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "idsa-ssti"
      }
    ],
    sources: [
      {
        id: "idsa-ssti",
        citation: "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24973422/"
      },
      {
        id: "talan",
        citation: "Talan DA, Mower WR, Krishnadasan A, et al. Trimethoprim-sulfamethoxazole versus placebo for uncomplicated skin abscess. N Engl J Med. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26962903/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-47",
    topic: "infectious-diseases",
    title: "Fever, rash and sore throat in a young man",
    stem: "A 27-year-old man presents to the emergency department with 5 days of fever, sore throat, aching muscles and a rash. He has had loose stools for 2 days. Three weeks ago he had condomless anal sex with a new male partner. He has never taken pre-exposure prophylaxis. His last HIV test, 8 months ago, was negative. He has no medical history. He has a faint pink maculopapular rash on his trunk, two shallow painful ulcers inside his lower lip and small tender lymph nodes in his neck and armpits. His pharynx is red without exudate. A rapid streptococcal antigen test is negative.",
    vitals: {
      temperature: "38.4°C oral",
      pulse: "104/minute",
      resp: "16/minute",
      bp: "118/72 mmHg",
      o2sat: "99% on room air",
      weight: "74 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this man?",
        kind: "single",
        options: [
          "Acute HIV infection",
          "Infectious mononucleosis",
          "Secondary syphilis",
          "Streptococcal pharyngitis",
          "Toxic shock syndrome"
        ],
        correct: 0,
        explanation: "Fever, sore throat, a truncal rash, painful mouth ulcers, diffuse lymph nodes and diarrhea 3 weeks after a condomless exposure fit acute HIV infection. It is easily mistaken for a viral illness if a sexual history is not taken. Secondary syphilis usually appears weeks after a chancre and often involves the palms and soles. Mononucleosis rarely causes mucosal ulcers and diarrhea. The negative antigen test and absent exudate argue against streptococcal pharyngitis, and he is not in shock.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "can-pep"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate test for the likely diagnosis?",
        kind: "single",
        options: [
          "CD4 lymphocyte count",
          "Heterophile antibody test",
          "HIV antibody only rapid test",
          "HIV antigen and antibody test",
          "Western blot for HIV"
        ],
        correct: 3,
        explanation: "A fourth generation HIV antigen and antibody test detects p24 antigen before antibodies form, so it is the preferred test, and people with signs of acute HIV should also have an HIV RNA test. Antibody only rapid tests and Western blot can be negative this early. A CD4 count does not diagnose HIV. A heterophile test looks for mononucleosis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "can-pep"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate treatment for his sore throat?",
        kind: "single",
        options: [
          "Amoxicillin-clavulanate for 10 days",
          "Analgesics and no antibiotics",
          "Azithromycin for 5 days",
          "Cephalexin for 10 days",
          "Penicillin V for 10 days"
        ],
        correct: 1,
        explanation: "His sore throat is part of a viral illness, and the rapid streptococcal test is negative. Choosing Wisely Canada advises against antibiotics for viral upper respiratory infections such as a sore throat. Analgesia treats the symptom. Antibiotics add side effects and resistance without benefit.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "cwc"
      }
    ],
    sources: [
      {
        id: "can-pep",
        citation: "Tan DHS, Hull MW, Onyegbule SO, et al. Canadian guideline on HIV pre- and postexposure prophylaxis: 2025 update. CMAJ. 2025.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12680393/"
      },
      {
        id: "cwc",
        citation: "Choosing Wisely Canada. Using Antibiotics Wisely: reducing unnecessary antibiotics for acute upper respiratory tract infections in primary care. 2018.",
        url: "https://choosingwiselycanada.org/using-antibiotics-wisely-across-canada-2018/"
      }
    ],
    ...META
  }
];
