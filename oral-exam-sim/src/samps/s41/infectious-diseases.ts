// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

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
    id: "infectious-diseases-17",
    topic: "infectious-diseases",
    title: "Jaw swelling after a toothache",
    stem: "A 36-year-old man presents to the emergency department with 3 days of right lower molar pain and 1 day of swelling under his jaw. Since this morning he has had trouble swallowing and his voice sounds thick. He has type 2 diabetes treated with metformin. He is sitting upright and leaning forward, drooling into a basin. There is firm, tender swelling of both submandibular regions that extends into the upper neck. The floor of the mouth is raised and woody, pushing the tongue up and back. He has no stridor. Capillary glucose is 18.2 mmol/L.",
    vitals: {
      temperature: "38.9°C oral",
      pulse: "118/minute",
      resp: "22/minute",
      bp: "134/82 mmHg",
      o2sat: "97% on room air",
      weight: "92 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis for this man?",
        kind: "single",
        options: [
          "Acute sialadenitis",
          "Ludwig angina",
          "Peritonsillar abscess",
          "Retropharyngeal abscess",
          "Submandibular lymphadenitis"
        ],
        correct: 1,
        explanation: "Bilateral firm submandibular swelling, a raised woody floor of the mouth and an upward displaced tongue after a lower molar infection define Ludwig angina. Diabetes is a recognized risk factor, and a lower molar is the usual dental source. Sialadenitis and lymphadenitis are usually one sided and do not lift the floor of the mouth. A peritonsillar abscess causes a bulging tonsillar pillar and uvular deviation. A retropharyngeal abscess causes posterior pharyngeal swelling rather than floor of mouth induration.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "bridwell"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most important immediate priority in his care?",
        kind: "single",
        options: [
          "Airway plan with anesthesia and ENT",
          "Bedside drainage of the swelling",
          "CT neck before airway planning",
          "Racemic epinephrine by nebulizer",
          "Rapid sequence intubation now"
        ],
        correct: 0,
        explanation: "Drooling, a thick voice and a tongue pushed upward warn of impending airway obstruction even without stridor. The airway should be planned early with anesthesia and ENT, often as awake fibreoptic intubation with a surgical airway ready. Rapid sequence induction with paralysis risks a failed airway because the anatomy is distorted. Lying him flat for CT before an airway plan can precipitate obstruction. Nebulized epinephrine does not shrink infected tissue, and early Ludwig angina is often firm cellulitis without a collection to drain at the bedside.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "bridwell"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate empiric antibiotic regimen?",
        kind: "single",
        options: [
          "amoxicillin-clavulanate 875 mg PO",
          "cefazolin 2 g IV",
          "clindamycin 300 mg PO",
          "metronidazole 500 mg IV",
          "piperacillin-tazobactam 4.5 g IV"
        ],
        correct: 4,
        explanation: "Ludwig angina is a polymicrobial odontogenic infection of streptococci and oral anaerobes and needs broad IV cover. Piperacillin-tazobactam covers both, which matters more in a patient with diabetes. Oral agents are not appropriate for a spreading deep neck infection that threatens the airway. Cefazolin misses many oral anaerobes. Metronidazole alone does not cover the aerobic streptococci.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "bridwell"
      },
      {
        id: "q4",
        update: "His airway is secured by awake fibreoptic intubation. CT of the neck with contrast shows gas and rim enhancing fluid collections in the submandibular and sublingual spaces on both sides.",
        prompt: "Which of the following is the most appropriate next step in management?",
        kind: "single",
        options: [
          "Dental extraction in clinic tomorrow",
          "IV dexamethasone and observation",
          "Needle aspiration by the ED physician",
          "Repeat CT of the neck in 48 hours",
          "Urgent surgical drainage in the OR"
        ],
        correct: 4,
        explanation: "Drainable collections with gas in the deep neck spaces need surgical source control in the operating room, along with IV antibiotics and ICU care. The source tooth is usually dealt with at the same operation, not deferred to a clinic. Steroids and observation do not treat an established abscess. Bedside needle aspiration cannot drain several spaces and delays definitive care. Waiting 48 hours for repeat imaging allows spread toward the mediastinum.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "bridwell"
      }
    ],
    sources: [
      {
        id: "bridwell",
        citation: "Bridwell R, Gottlieb M, Koyfman A, Long B. Diagnosis and management of Ludwig's angina: an evidence-based review. Am J Emerg Med. 2021.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33383265/"
      }
    ],
    ...META
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
    id: "infectious-diseases-21",
    topic: "infectious-diseases",
    title: "Facial pressure and congestion",
    stem: "A 39-year-old woman presents to the emergency department with 4 days of nasal congestion, cloudy nasal discharge and pressure over both cheeks. The symptoms began with a sore throat and cough. She is a teacher and several of her students have colds. She has mild asthma treated with inhaled budesonide and has no allergies. She has tenderness over both maxillary sinuses. There is no swelling around the eyes, eye movements are full and painless, and her neck is supple. Her neurological examination is normal.",
    vitals: {
      temperature: "37.8°C oral",
      pulse: "88/minute",
      resp: "16/minute",
      bp: "124/78 mmHg",
      o2sat: "98% on room air"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate treatment for her today?",
        kind: "single",
        options: [
          "Amoxicillin for 10 days",
          "Amoxicillin-clavulanate for 7 days",
          "Cefuroxime for 10 days",
          "Intranasal corticosteroid spray",
          "Moxifloxacin for 5 days"
        ],
        correct: 3,
        explanation: "Four days of symptoms after a cold is most likely viral rhinosinusitis, and bacterial sinusitis is usually considered only after 7 days or with worsening. The Canadian guideline supports an intranasal corticosteroid, with saline irrigation and analgesia, for mild to moderate symptoms. An antibiotic now exposes her to adverse effects without benefit. Moxifloxacin and amoxicillin-clavulanate are second line even when a bacterial infection is likely.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 9
        },
        source: "desrosiers"
      },
      {
        id: "q2",
        prompt: "Which of the following investigations is most appropriate for her today?",
        kind: "single",
        options: [
          "CBC and C-reactive protein",
          "CT of the paranasal sinuses",
          "Nasal swab for bacterial culture",
          "Sinus X-ray series",
          "No imaging or laboratory tests"
        ],
        correct: 4,
        explanation: "Acute rhinosinusitis is a clinical diagnosis, and the Canadian guideline advises against imaging in uncomplicated cases. She has no orbital, neurological or meningeal signs that would call for CT. Plain sinus films and blood tests do not separate viral from bacterial infection. Nasal swab cultures do not reflect sinus bacteriology.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "desrosiers"
      },
      {
        id: "q3",
        prompt: "Which of the following findings would call for urgent imaging and specialist assessment in acute sinusitis?",
        kind: "menu",
        options: [
          "Cloudy nasal discharge",
          "Double vision",
          "Maxillary tooth pain",
          "Neck stiffness",
          "Night time cough",
          "Periorbital swelling",
          "Postnasal drip",
          "Reduced sense of smell",
          "Symptoms for 10 days"
        ],
        select: 3,
        correct: [
          1,
          3,
          5
        ],
        explanation: "Double vision and periorbital swelling suggest orbital spread, and neck stiffness suggests meningitis or intracranial spread. The Canadian guideline lists these among the red flags that need urgent imaging and referral. Symptoms for 10 days point toward bacterial sinusitis but are not an emergency. Cloudy discharge, tooth pain, cough, postnasal drip and reduced smell are common features of uncomplicated sinusitis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "desrosiers"
      },
      {
        id: "q4",
        update: "She returns 6 days later. After improving for a few days, her facial pain and purulent nasal discharge have worsened over the last 2 days. Her examination shows no orbital, neurological or meningeal signs.",
        prompt: "Which of the following is the most appropriate first line antibiotic?",
        kind: "single",
        options: [
          "amoxicillin 500 mg PO three times daily",
          "azithromycin 500 mg PO once daily",
          "ciprofloxacin 500 mg PO twice daily",
          "clindamycin 300 mg PO four times daily",
          "moxifloxacin 400 mg PO once daily"
        ],
        correct: 0,
        explanation: "Worsening after initial improvement, with purulent discharge and facial pain beyond 7 days, now fits acute bacterial sinusitis. She has no allergy, so amoxicillin is first line in the Canadian guideline. A macrolide is a substitute only for beta-lactam allergy, and pneumococcal resistance to macrolides limits its use. Ciprofloxacin has weak pneumococcal activity and clindamycin does not cover Haemophilus influenzae. Moxifloxacin is kept for treatment failure or allergy.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "desrosiers"
      }
    ],
    sources: [
      {
        id: "desrosiers",
        citation: "Desrosiers M, Evans GA, Keith PK, et al. Canadian clinical practice guidelines for acute and chronic rhinosinusitis. Allergy Asthma Clin Immunol. 2011.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3055847/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-22",
    topic: "infectious-diseases",
    title: "Swollen eyelids in a school-aged child",
    stem: "A 7-year-old boy is brought to the emergency department by his father with 2 days of increasing swelling and redness of the left eyelids. He has had a cold with thick nasal discharge for a week. Today he says it hurts to look to the side and that he sees two of things. He has no medical history and his immunizations are up to date. The left eyelids are swollen and red and can be opened only with help. The left eye is pushed forward, and abduction and upgaze are painful and limited. Visual acuity is normal and equal in both eyes. The pupils react normally.",
    vitals: {
      temperature: "38.7°C oral",
      pulse: "112/minute",
      resp: "22/minute",
      bp: "104/64 mmHg",
      o2sat: "99% on room air",
      weight: "24 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following findings indicate that the infection has spread behind the orbital septum?",
        kind: "menu",
        options: [
          "Double vision",
          "Eyelid redness",
          "Eyelid swelling",
          "Fever over 38.5°C",
          "Painful eye movements",
          "Proptosis",
          "Recent nasal congestion",
          "Tender eyelids"
        ],
        select: 3,
        correct: [
          0,
          4,
          5
        ],
        explanation: "Proptosis, pain with eye movement, limited movement and double vision mean orbital (postseptal) cellulitis, a complication of sinusitis in this boy. Preseptal cellulitis also causes red, swollen and tender eyelids, so those findings do not separate the two. Fever and a recent cold occur with both. Orbital involvement changes management to IV antibiotics, imaging and specialist review.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "wong-orbit"
      },
      {
        id: "q2",
        prompt: "Which of the following investigations is most appropriate for him now?",
        kind: "single",
        options: [
          "CT orbits and sinuses with contrast",
          "MRI brain without contrast",
          "Plain X-rays of the sinuses",
          "Swab of the nasal discharge",
          "No imaging unless no improvement"
        ],
        correct: 0,
        explanation: "Proptosis, ophthalmoplegia and diplopia are indications for contrast enhanced CT of the orbits and sinuses, which shows a subperiosteal or orbital abscess that may need drainage. Delaying imaging until he fails treatment is appropriate only for mild cases without these signs. Plain films cannot show orbital collections. MRI without contrast is less useful for abscess and is slower in a child who may need sedation. Nasal swabs do not reflect the organisms in the orbit.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "wong-orbit"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate antibiotic therapy for him?",
        kind: "single",
        options: [
          "amoxicillin-clavulanate PO",
          "cefazolin IV alone",
          "ceftriaxone and vancomycin IV",
          "cephalexin PO for 10 days",
          "clindamycin PO for 10 to 14 days"
        ],
        correct: 2,
        explanation: "Orbital cellulitis needs admission and broad IV antibiotics that cover streptococci, Staphylococcus aureus including MRSA, and Haemophilus influenzae, such as ceftriaxone with vancomycin. Oral antibiotics are suitable only for mild preseptal cellulitis. Cefazolin alone gives weaker cover of the respiratory gram negative organisms that come from the sinuses. Oral clindamycin misses Haemophilus influenzae.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "wong-orbit"
      },
      {
        id: "q4",
        update: "CT shows left ethmoid sinusitis with a 14 mm subperiosteal abscess along the medial wall of the left orbit. Visual acuity is unchanged.",
        prompt: "Which of the following is the most appropriate next step in management?",
        kind: "single",
        options: [
          "Discharge on oral antibiotics",
          "Ophthalmology and ENT consult now",
          "Oral prednisone and reassessment",
          "Outpatient repeat CT in 1 week",
          "Warm compresses and observation"
        ],
        correct: 1,
        explanation: "A subperiosteal abscess is a complication that can threaten vision, and larger abscesses often need surgical drainage. Ophthalmology and ENT should see him now, while IV antibiotics continue and vision is checked often. Discharge or outpatient imaging is unsafe with an orbital abscess. Steroids and warm compresses do not treat the collection.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "wong-orbit"
      }
    ],
    sources: [
      {
        id: "wong-orbit",
        citation: "Wong SJ, Levi J. Management of pediatric orbital cellulitis: a systematic review. Int J Pediatr Otorhinolaryngol. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29859573/"
      }
    ],
    ...META
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
    id: "infectious-diseases-24",
    topic: "infectious-diseases",
    title: "Strange behaviour and fever in a retired teacher",
    stem: "A 66-year-old woman is brought to the emergency department by her husband with 2 days of fever and headache and 1 day of strange behaviour. This morning she did not recognize their kitchen and spoke in words that made no sense. An hour ago she had a 1 minute episode of lip smacking and unresponsiveness. She has hypothyroidism treated with levothyroxine. She has not travelled. She is drowsy and disoriented, with word finding difficulty. GCS is 13 (E3 V4 M6). There is no neck stiffness and no rash. Capillary glucose is 6.1 mmol/L.",
    vitals: {
      temperature: "38.5°C oral",
      pulse: "102/minute",
      resp: "18/minute",
      bp: "146/84 mmHg",
      o2sat: "97% on room air",
      weight: "62 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely cause of her presentation?",
        kind: "single",
        options: [
          "Acute ischemic stroke",
          "Bacterial meningitis",
          "Delirium from urinary infection",
          "Herpes simplex encephalitis",
          "Primary psychiatric illness"
        ],
        correct: 3,
        explanation: "Fever with altered behaviour, aphasia and a focal seizure with lip smacking point to temporal lobe involvement, which is typical of herpes simplex encephalitis. Bacterial meningitis is possible without neck stiffness, but the focal cortical features favour encephalitis. Stroke does not explain 2 days of fever and headache. A urinary infection does not cause a focal seizure and aphasia. A first psychiatric illness at 66 with fever and seizure should not be assumed.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "tunkel-enc"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate sequence of care now?",
        kind: "single",
        options: [
          "Acyclovir IV now, then CT and LP",
          "CT head, then acyclovir if abnormal",
          "LP first, then acyclovir if CSF abnormal",
          "MRI brain, then decide on treatment",
          "Wait for the CSF HSV PCR result"
        ],
        correct: 0,
        explanation: "IDSA advises starting acyclovir in every patient with suspected encephalitis while tests are pending, because delay worsens outcomes in herpes simplex encephalitis. Her reduced level of consciousness and seizure mean CT should come before the lumbar puncture. Neither the scan nor the LP should delay the first dose. Early CT can be normal in herpes encephalitis, so a normal scan is not a reason to withhold treatment.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 1
        },
        source: "tunkel-enc"
      },
      {
        id: "q3",
        update: "Her blood tests show a creatinine of 68 umol/L, Na 137 mmol/L and a WBC of 9.8 x 10^9/L.",
        prompt: "Which of the following is the most appropriate acyclovir dose for her?",
        kind: "single",
        options: [
          "acyclovir 620 mg IV every 8 hours",
          "acyclovir 310 mg IV every 8 hours",
          "acyclovir 620 mg IV every 24 hours",
          "acyclovir 800 mg PO five times daily",
          "valacyclovir 1 g PO three times daily"
        ],
        correct: 0,
        explanation: "The dose for herpes simplex encephalitis is 10 mg/kg IV every 8 hours. For 62 kg that is 62 x 10 = 620 mg. Her creatinine of 68 umol/L is normal, so there is no reason to extend the interval to 24 hours. Half the dose undertreats. Oral acyclovir and valacyclovir are not used for initial treatment of encephalitis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "tunkel-enc"
      },
      {
        id: "q4",
        update: "CT of the head is normal. CSF shows WBC 86 x 10^6/L with 90% lymphocytes, red cells 420 x 10^6/L, protein 0.9 g/L and glucose 3.6 mmol/L. Gram stain shows no organisms.",
        prompt: "Which of the following CSF tests best confirms the suspected diagnosis?",
        kind: "single",
        options: [
          "Bacterial culture",
          "Cryptococcal antigen",
          "Enterovirus PCR",
          "Herpes simplex virus PCR",
          "Oligoclonal bands"
        ],
        correct: 3,
        explanation: "CSF PCR for herpes simplex virus is the diagnostic test of choice for herpes encephalitis. A lymphocytic pleocytosis with red cells, raised protein and normal glucose fits the diagnosis. Bacterial culture is sent but the profile is not typical of bacterial meningitis. Cryptococcal antigen is for immunocompromised patients. Enterovirus rarely causes focal encephalitis at her age, and oligoclonal bands are used for demyelinating disease.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "tunkel-enc"
      }
    ],
    sources: [
      {
        id: "tunkel-enc",
        citation: "Tunkel AR, Glaser CA, Bloch KC, et al. The management of encephalitis: clinical practice guidelines by the Infectious Diseases Society of America. Clin Infect Dis. 2008.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18582201/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-25",
    topic: "infectious-diseases",
    title: "Weeks of malaise and new hand weakness",
    stem: "A 71-year-old man is brought to the emergency department by his daughter with 3 weeks of fatigue, night sweats and poor appetite. This morning at 0700 his right hand became weak and clumsy, and it is now 1000. Eight months ago he had a bioprosthetic aortic valve replacement. He had a dental cleaning 5 weeks ago. He takes ASA 81 mg daily and ramipril, and no anticoagulant. He is alert and oriented. There is a new grade 3 of 6 diastolic murmur at the left sternal border. He has painless red macules on both soles and a splinter hemorrhage under the left thumbnail. Right hand grip is weak.",
    vitals: {
      temperature: "38.2°C oral",
      pulse: "98/minute",
      resp: "18/minute",
      bp: "138/70 mmHg",
      o2sat: "97% on room air",
      weight: "80 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely unifying diagnosis?",
        kind: "single",
        options: [
          "Atrial fibrillation with cardioembolism",
          "Giant cell arteritis",
          "Infective endocarditis with embolism",
          "Lacunar stroke with a viral illness",
          "Polymyalgia rheumatica"
        ],
        correct: 2,
        explanation: "Weeks of fever and night sweats in a man with a prosthetic valve, a new regurgitant murmur, painless plantar macules (Janeway lesions), a splinter hemorrhage and a sudden focal deficit point to endocarditis with a cerebral embolus. A prosthetic valve is a major risk factor. Atrial fibrillation is not described and does not explain the fever and skin signs. Giant cell arteritis and polymyalgia do not cause a new murmur or embolic skin lesions. A viral illness does not explain a new valve lesion.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "esc-ie"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate blood culture strategy before antibiotics?",
        kind: "single",
        options: [
          "Cultures after the first antibiotic dose",
          "Cultures only if fever exceeds 38.5°C",
          "One set, then start antibiotics",
          "Three sets from separate venipunctures",
          "Two sets from one venipuncture"
        ],
        correct: 3,
        explanation: "He is hemodynamically stable, so at least three sets of blood cultures should be drawn from separate venipunctures before antibiotics, spaced about 30 minutes apart as the ESC guideline advises. Several sets raise the yield and help show continuous bacteremia. Antibiotics given first can make cultures negative and hide the organism. Fever height does not decide the need for cultures. A single set or two sets from one venipuncture give lower yield and cannot separate true bacteremia from contamination.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "esc-ie"
      },
      {
        id: "q3",
        update: "It is now 1030. CT of the head shows no hemorrhage. CT angiography shows no large vessel occlusion. His neurological deficit is unchanged.",
        prompt: "Which of the following is the most appropriate approach to reperfusion therapy?",
        kind: "single",
        options: [
          "Alteplase 0.9 mg/kg IV now",
          "Heparin infusion without a bolus",
          "Tenecteplase 0.25 mg/kg IV now",
          "Thrombectomy referral now",
          "Withhold thrombolytic therapy"
        ],
        correct: 4,
        explanation: "Thrombolysis is not recommended for embolic stroke caused by infective endocarditis because the risk of intracranial hemorrhage is high. Recognizing endocarditis as the cause is therefore essential before any lytic is given. Starting heparin is not indicated for embolic stroke from endocarditis and adds bleeding risk. Thrombectomy may be considered for a large vessel occlusion, but CT angiography shows none.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 5
        },
        source: "esc-ie"
      },
      {
        id: "q4",
        prompt: "Which of the following imaging studies is most important to confirm the diagnosis?",
        kind: "single",
        options: [
          "Abdominal CT for emboli",
          "Cardiac MRI with gadolinium",
          "Carotid Doppler ultrasound",
          "Transesophageal echocardiography",
          "Transthoracic echo only"
        ],
        correct: 3,
        explanation: "Transesophageal echocardiography is recommended when endocarditis is suspected on a prosthetic valve, because transthoracic images often miss vegetations and abscesses around the prosthesis. A transthoracic study can be done first but cannot exclude the diagnosis here. Carotid Doppler looks for atherosclerotic sources, which do not explain the fever and skin signs. Abdominal CT may show emboli but does not confirm valve infection, and cardiac MRI is not the standard test for vegetations.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "esc-ie"
      }
    ],
    sources: [
      {
        id: "esc-ie",
        citation: "Delgado V, Ajmone Marsan N, de Waha S, et al. 2023 ESC Guidelines for the management of endocarditis. Eur Heart J. 2023.",
        url: "https://pubmed.ncbi.nlm.nih.gov/37622656/"
      }
    ],
    ...META
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
    id: "infectious-diseases-27",
    topic: "infectious-diseases",
    title: "Man found confused at home with a cough",
    stem: "A 56-year-old man is brought to the emergency department by ambulance after his landlord found him confused at home. He has had 3 days of cough, fever and right sided chest pain. He drinks about 20 standard drinks a day and has cirrhosis. He takes no regular medications. He is drowsy but rousable and answers questions slowly. There are bronchial breath sounds over the right lower chest. His skin is mottled over both knees and capillary refill is 5 seconds. Lactate is 6.1 mmol/L. Chest X-ray shows dense right lower lobe consolidation.",
    vitals: {
      temperature: "38.9°C oral",
      pulse: "128/minute",
      resp: "32/minute",
      bp: "78/40 mmHg",
      o2sat: "90% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following should be started within the first hour of his care?",
        kind: "menu",
        options: [
          "Albumin 25% infusion",
          "Balanced crystalloid bolus",
          "Blood cultures",
          "Broad spectrum IV antibiotics",
          "CT of the chest",
          "Dopamine infusion",
          "Procalcitonin level",
          "Red cell transfusion",
          "Sodium bicarbonate infusion"
        ],
        select: 3,
        correct: [
          1,
          2,
          3
        ],
        explanation: "He has hypotension, mottling, a capillary refill of 5 seconds and a lactate of 6.1 mmol/L from pneumonia, so he needs the first hour sepsis bundle. That means blood cultures, ideally before antibiotics, broad spectrum IV antibiotics within the hour and a balanced crystalloid bolus. Antibiotics must not wait for further tests such as CT or procalcitonin. Dopamine is not a first line vasopressor. Crystalloid comes first, and supplemental albumin is at most considered later, after large crystalloid volumes or in cirrhosis. Bicarbonate and red cell transfusion need a specific indication.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 1
        },
        source: "ssc26"
      },
      {
        id: "q2",
        update: "He has received 2 L of Ringer's lactate over 1 hour. His BP is now 82/44 mmHg, he remains mottled and he has new crackles at both lung bases.",
        prompt: "Which of the following is the most appropriate next step in his resuscitation?",
        kind: "single",
        options: [
          "Another 3 L of Ringer's lactate",
          "Dopamine by peripheral IV now",
          "Norepinephrine by peripheral IV now",
          "Phenylephrine by peripheral IV now",
          "Vasopressor after central line placed"
        ],
        correct: 2,
        explanation: "His mean arterial pressure is (82 + 2 x 44) / 3 = 57 mmHg after fluid, with ongoing hypoperfusion, so he is in septic shock and needs a vasopressor. Norepinephrine is first line, and the Surviving Sepsis Campaign suggests starting it peripherally rather than waiting for central access. Dopamine causes more arrhythmias and phenylephrine is not a first line agent. Further large fluid boluses without reassessment risk overload, especially with cirrhosis and hypoxemia.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 2
        },
        source: "ssc26"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate initial mean arterial pressure target for him?",
        kind: "single",
        options: [
          "60 mmHg",
          "65 mmHg",
          "70 mmHg",
          "75 mmHg",
          "85 mmHg"
        ],
        correct: 1,
        explanation: "The Surviving Sepsis Campaign recommends an initial mean arterial pressure target of 65 mmHg in adults with septic shock on vasopressors. Aiming higher, at 70 mmHg or more, increases vasopressor exposure and arrhythmias without improving survival. A target of 60 mmHg sits below the recommended initial threshold for a 56-year-old and accepts ongoing hypoperfusion. His lactate and mental status are then used to judge whether perfusion is adequate at that pressure.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 2
        },
        source: "ssc26"
      },
      {
        id: "q4",
        update: "Norepinephrine is running and his mean arterial pressure is 66 mmHg. A repeat lactate 2 hours after arrival is 5.4 mmol/L. Capillary refill is 4 seconds.",
        prompt: "Which of the following is the most appropriate way to guide his ongoing fluid resuscitation?",
        kind: "single",
        options: [
          "Central venous pressure of 8 to 12 mmHg",
          "Fixed total of 5 L over 6 hours",
          "Hemoglobin level every 2 hours",
          "Serial lactate and capillary refill",
          "Urine specific gravity"
        ],
        correct: 3,
        explanation: "The Surviving Sepsis Campaign suggests serial lactate measurements to guide resuscitation, with capillary refill time as an adjunct, together with frequent reassessment of the response to each bolus. His lactate, down from 6.1 to 5.4 mmol/L, and his slow capillary refill give measurable targets. Central venous pressure alone predicts fluid responsiveness poorly. A fixed volume ignores his response and risks overload with cirrhosis. Hemoglobin and urine specific gravity do not track tissue perfusion.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 2
        },
        source: "ssc26"
      }
    ],
    sources: [
      {
        id: "ssc26",
        citation: "Prescott HC, Antonelli M, Alhazzani W, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2026. Crit Care Med. 2026.",
        url: "https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-28",
    topic: "infectious-diseases",
    title: "Older man with rigors and yellow eyes",
    stem: "A 78-year-old man is brought to the emergency department by ambulance with 1 day of fever, rigors and right upper quadrant pain. His wife noticed his eyes turned yellow yesterday. Gallstones were seen on an ultrasound 2 years ago and he declined surgery. He has atrial fibrillation treated with apixaban and hypertension treated with amlodipine. He is confused about the date. He is tender in the right upper quadrant without peritonism. Bilirubin is 96 umol/L, ALP 410 U/L, WBC 21 x 10^9/L, creatinine 168 umol/L, platelets 88 x 10^9/L, INR 1.6 and lactate 4.2 mmol/L.",
    vitals: {
      temperature: "39.0°C oral",
      pulse: "118/minute irregular",
      resp: "24/minute",
      bp: "84/48 mmHg",
      o2sat: "94% on room air",
      weight: "76 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate timing of his first antibiotic dose?",
        kind: "single",
        options: [
          "After bile cultures from ERCP",
          "After CT confirms obstruction",
          "After ultrasound of the bile ducts",
          "Now, before imaging or drainage",
          "Only if blood cultures are positive"
        ],
        correct: 3,
        explanation: "Fever, jaundice and right upper quadrant pain with hypotension and confusion make acute cholangitis with septic shock likely. Antibiotics should be given now, after blood cultures, and not held for imaging, ERCP or culture results. Waiting for bile cultures or imaging delays treatment of a rapidly fatal infection. Blood cultures are negative in many cases, so they cannot decide whether to treat.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 1
        },
        source: "tg18-mx"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate empiric antibiotic?",
        kind: "single",
        options: [
          "ampicillin 2 g IV every 6 hours",
          "cefazolin 2 g IV every 8 hours",
          "ciprofloxacin 500 mg PO twice daily",
          "piperacillin-tazobactam 4.5 g IV every 6 hours",
          "vancomycin 25 mg/kg IV loading dose"
        ],
        correct: 3,
        explanation: "He has severe (grade III) cholangitis, because he has organ dysfunction: confusion, an INR of 1.6 (above 1.5) and platelets of 88 x 10^9/L (below 100). Tokyo Guidelines 2018 recommend broad agents such as piperacillin-tazobactam for severe community acquired cholangitis, to cover Enterobacterales, enterococci and anaerobes. Ampicillin and cefazolin leave gaps in gram negative cover. Oral ciprofloxacin is inadequate in shock. Vancomycin does not cover gram negative organisms.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "tg18"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate plan for biliary drainage?",
        kind: "single",
        options: [
          "Antibiotics alone for 14 days",
          "Cholecystectomy within 72 hours",
          "Drainage only if cultures are positive",
          "Elective ERCP in 6 weeks",
          "Urgent drainage after resuscitation"
        ],
        correct: 4,
        explanation: "Severe cholangitis needs urgent biliary drainage, usually by ERCP, as soon as he is resuscitated and organ support is in place. Source control is part of structured septic shock care, and antibiotics alone often fail with an obstructed duct. Waiting for culture results or an elective procedure allows ongoing sepsis. Cholecystectomy does not drain an obstructed common bile duct and is planned later.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 2
        },
        source: "tg18-mx"
      }
    ],
    sources: [
      {
        id: "tg18",
        citation: "Gomi H, Solomkin JS, Schlossberg D, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/29090866/"
      },
      {
        id: "tg18-mx",
        citation: "Miura F, Okamoto K, Takada T, et al. Tokyo Guidelines 2018: initial management of acute biliary infection and flowchart for acute cholangitis. J Hepatobiliary Pancreat Sci. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28941329/"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-29",
    topic: "infectious-diseases",
    title: "Drowsy toddler with fever in a small hospital",
    stem: "You are working in a rural hospital emergency department. The nearest pediatric ICU is 3 hours away by air. A 2-year-old girl is brought in by her parents with 1 day of fever and decreased activity. Over the past hour a spotty rash has spread over her legs. She has had one wet diaper today. She has no medical history and her immunizations are up to date. She is lethargic and responds only to a loud voice. There are non blanching purple spots on her legs and trunk. Her hands and feet are cold with a capillary refill of 5 seconds. Two IV attempts have failed.",
    vitals: {
      temperature: "39.8°C rectal",
      pulse: "180/minute",
      resp: "44/minute",
      bp: "70/38 mmHg",
      o2sat: "95% on room air",
      weight: "12 kg"
    },
    questions: [
      {
        id: "q1",
        update: "An intraosseous needle is placed in her right proximal tibia. A blood culture and a capillary glucose of 4.8 mmol/L are obtained from it.",
        prompt: "Which of the following is the most appropriate timing of her first antibiotic dose?",
        kind: "single",
        options: [
          "After a lumbar puncture",
          "After the first 20 mL/kg bolus",
          "After transfer to the pediatric ICU",
          "Immediately, through the IO line",
          "When the CBC and CRP return"
        ],
        correct: 3,
        explanation: "She has septic shock with a non blanching rash, so antibiotics should be given as soon as possible and ideally within 1 hour of recognition. The intraosseous line can be used for antibiotics right away. A lumbar puncture is unsafe in shock and must not delay treatment. Fluids and antibiotics are given together, not in sequence. Waiting for laboratory results or for transfer loses hours.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 1
        },
        source: "ssc-peds26"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate first fluid bolus for her?",
        kind: "single",
        options: [
          "Albumin 5% 240 mL IO bolus",
          "Dextrose 5% water 240 mL IO bolus",
          "Ringer's lactate 240 mL IO bolus",
          "Ringer's lactate 720 mL IO bolus",
          "Ringer's lactate 60 mL IO bolus"
        ],
        correct: 2,
        explanation: "Children with septic shock receive boluses of 10 to 20 mL/kg of crystalloid, with reassessment after each for response and signs of overload. For 12 kg, 20 mL/kg is 240 mL. Balanced crystalloid is preferred over saline, and albumin is not recommended for initial resuscitation. 720 mL is 60 mL/kg given as one bolus without reassessment. 60 mL is only 5 mL/kg, and 5% dextrose in water is not a resuscitation fluid.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 2
        },
        source: "ssc-peds26"
      },
      {
        id: "q3",
        update: "After three boluses of 20 mL/kg, her BP is 72/40 mmHg and her hands and feet remain cold. Her liver edge is now 4 cm below the costal margin and she has new crackles at both bases.",
        prompt: "Which of the following is the most appropriate next step in her treatment?",
        kind: "single",
        options: [
          "Dopamine infusion through the IO",
          "Epinephrine infusion through the IO",
          "Further 20 mL/kg crystalloid bolus",
          "Milrinone infusion through the IO",
          "Vasoactive drug after central access"
        ],
        correct: 1,
        explanation: "Shock persists after 60 mL/kg and the new hepatomegaly and crackles show she is no longer fluid responsive, so she needs a vasoactive infusion now. Epinephrine is an accepted first choice for cold, fluid refractory shock in children, and it can be started through peripheral or intraosseous access rather than waiting for a central line. Dopamine is not preferred. More fluid will worsen the overload. Milrinone is an inodilator that can worsen hypotension, so it is not a first choice in a hypotensive child.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 2
        },
        source: "ssc-peds26"
      }
    ],
    sources: [
      {
        id: "ssc-peds26",
        citation: "Weiss SL, Peters MJ, Oczkowski SJW, et al. Surviving Sepsis Campaign international guidelines for the management of sepsis and septic shock in children 2026. Pediatr Crit Care Med. 2026.",
        url: "https://pubmed.ncbi.nlm.nih.gov/41869844/"
      }
    ],
    ...META
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
    id: "infectious-diseases-32",
    topic: "infectious-diseases",
    title: "Fever in a bedbound nursing home resident",
    stem: "An 84-year-old man is brought to the emergency department by ambulance from his long term care home with 1 day of reduced responsiveness. Staff recorded an oral temperature of 36.6°C yesterday. He is bedbound after a stroke 2 years ago and has vascular dementia and type 2 diabetes. He has no urinary catheter. The nursing note reports no cough, vomiting or diarrhea. He groans when moved but does not follow commands. His chest is clear. His abdomen is soft. Urinalysis shows no leukocytes or nitrites. Lactate is 2.8 mmol/L.",
    vitals: {
      temperature: "37.9°C oral",
      pulse: "108/minute",
      resp: "22/minute",
      bp: "108/62 mmHg",
      o2sat: "95% on room air",
      weight: "56 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following best defines fever in an older long term care resident?",
        kind: "single",
        options: [
          "Oral temperature over 37.8°C once",
          "Oral temperature over 38.3°C once",
          "Oral temperature over 38.9°C once",
          "Rectal temperature over 38.5°C twice",
          "Tympanic temperature over 39.0°C once"
        ],
        correct: 0,
        explanation: "Older residents often mount a blunted fever, so IDSA defines fever in long term care as a single oral temperature over 37.8°C, repeated readings over 37.2°C oral or 37.5°C rectal, or a rise of more than 1.1°C over baseline. His 37.9°C meets the single reading threshold and is also a rise of 1.3°C from yesterday. The higher cut offs would miss infection in many older adults.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "idsa-ltc"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most important next step in his examination?",
        kind: "single",
        options: [
          "Digital rectal exam for impaction",
          "Fundoscopy for papilledema",
          "Inspection of the sacrum and heels",
          "Kernig and Brudzinski signs",
          "Repeat chest auscultation"
        ],
        correct: 2,
        explanation: "A bedbound resident with fever and no source in the chest, abdomen or urine needs a full skin examination, including the sacrum, hips and heels, where infected pressure injuries are easily missed. He must be turned to examine his back. His chest is already clear. Fundoscopy, meningeal signs and a rectal examination are less likely to find the source in this setting.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "idsa-ltc"
      },
      {
        id: "q3",
        update: "On turning him, there is a 6 cm sacral pressure injury with black eschar at one edge, foul purulent drainage and 3 cm of surrounding redness. Bone is visible at its base.",
        prompt: "Which of the following is the most appropriate microbiology testing?",
        kind: "single",
        options: [
          "Blood cultures and deep tissue sample",
          "Nasal swab for MRSA only",
          "Stool for C. difficile toxin",
          "Superficial swab of the eschar",
          "Urine culture from the bag"
        ],
        correct: 0,
        explanation: "An infected pressure injury with systemic signs calls for blood cultures and a deep tissue or bone specimen, because exposed bone raises concern for osteomyelitis and bacteremia. Superficial swabs grow colonizing organisms, and IDSA advises against surface swab cultures for these infections. He has no diarrhea, so C. difficile testing is not indicated. A urine culture from a collection bag is contaminated and his urinalysis is negative. A nasal MRSA swab alone does not identify the cause.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "idsa-ltc"
      }
    ],
    sources: [
      {
        id: "idsa-ltc",
        citation: "High KP, Bradley SF, Gravenstein S, et al. Clinical practice guideline for the evaluation of fever and infection in older adult residents of long-term care facilities: 2008 update by the Infectious Diseases Society of America. Clin Infect Dis. 2009.",
        url: "https://pubmed.ncbi.nlm.nih.gov/19072244/"
      }
    ],
    ...META
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
          "Hypertension",
          "Kidney infection",
          "Living with her husband",
          "Proton pump inhibitor use",
          "Ramipril use",
          "Recent ciprofloxacin course"
        ],
        select: 3,
        correct: [
          0,
          4,
          6
        ],
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
        update: "She recovers and completes 10 days of oral vancomycin. Three weeks later she returns with watery diarrhea 6 times a day, and her stool is again positive for C. difficile toxin. She is not in shock.",
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
    ...META
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
    id: "infectious-diseases-37",
    topic: "infectious-diseases",
    title: "Swollen finger after a pet bite",
    stem: "A 44-year-old woman presents to the emergency department 30 hours after her own cat bit the palm side of her right index finger. The puncture wounds were small and she washed them at home. Since this morning the whole finger has become swollen and very painful. She is a pianist. She has no medical history and no allergies. She completed her childhood immunizations and her last tetanus booster was 12 years ago. She has not had a pertussis booster as an adult. The finger is diffusely swollen and held slightly bent. Passive extension causes severe pain. There is tenderness along the palm side of the finger into the palm.",
    vitals: {
      temperature: "37.8°C oral",
      pulse: "94/minute",
      resp: "16/minute",
      bp: "128/78 mmHg",
      o2sat: "99% on room air",
      weight: "64 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in her finger?",
        kind: "single",
        options: [
          "Acute paronychia",
          "Cellulitis of the finger",
          "Felon of the fingertip",
          "Herpetic whitlow",
          "Pyogenic flexor tenosynovitis"
        ],
        correct: 4,
        explanation: "She has all four Kanavel signs: a uniformly swollen finger, a slightly flexed resting position, severe pain on passive extension and tenderness along the flexor tendon sheath. A cat bite can inoculate the sheath directly. Cellulitis does not cause pain on passive extension or sheath tenderness. Paronychia and felon stay at the nail fold or fingertip pulp. Herpetic whitlow causes vesicles.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "kennedy"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate management of her finger?",
        kind: "single",
        options: [
          "Incision of the puncture wounds",
          "IV antibiotics and urgent hand surgery",
          "Oral antibiotics and review in 48 hours",
          "Primary closure of the wounds",
          "Splint, elevate and discharge"
        ],
        correct: 1,
        explanation: "Pyogenic flexor tenosynovitis can destroy the tendon and spread into the palm, so it needs IV antibiotics and urgent hand surgery review, often for irrigation of the sheath. Oral antibiotics and delayed review risk permanent loss of function, which matters greatly to a pianist. Opening only the puncture wounds does not drain the sheath. Bite wounds should not be closed.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "kennedy"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate IV antibiotic regimen?",
        kind: "single",
        options: [
          "cefazolin 2 g IV alone",
          "ceftriaxone and metronidazole IV",
          "clindamycin 600 mg IV every 8 hours",
          "cloxacillin 2 g IV alone",
          "vancomycin 1 g IV alone"
        ],
        correct: 1,
        explanation: "Cat bites carry Pasteurella multocida as well as streptococci, staphylococci and anaerobes. In the IDSA animal bite table, ceftriaxone has good activity against Pasteurella multocida but misses anaerobes, so metronidazole is added. First generation cephalosporins, cloxacillin and clindamycin have poor activity against Pasteurella multocida. Vancomycin does not cover Pasteurella or gram negative anaerobes.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "idsa-ssti"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most appropriate tetanus prophylaxis for her?",
        kind: "single",
        options: [
          "Td vaccine and immune globulin",
          "Tdap vaccine alone",
          "Tdap vaccine and immune globulin",
          "Tetanus immune globulin alone",
          "No tetanus prophylaxis needed"
        ],
        correct: 1,
        explanation: "A bite is not a clean minor wound. She has had at least 3 doses and her last booster was more than 10 years ago, so she needs a tetanus containing vaccine but not immune globulin. Immune globulin is for people with an unknown history or fewer than 3 doses. Adults who have not had a pertussis dose in adulthood should receive Tdap, so Tdap is preferred over Td.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-tetanus"
      }
    ],
    sources: [
      {
        id: "kennedy",
        citation: "Kennedy CD, Huang JI, Hanel DP. In brief: Kanavel's signs and pyogenic flexor tenosynovitis. Clin Orthop Relat Res. 2016.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26022113/"
      },
      {
        id: "idsa-ssti",
        citation: "Stevens DL, Bisno AL, Chambers HF, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
        url: "https://pubmed.ncbi.nlm.nih.gov/24973422/"
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
    id: "infectious-diseases-39",
    topic: "infectious-diseases",
    title: "Young woman seen after an assault",
    stem: "A 23-year-old woman presents to the emergency department 30 hours after she was sexually assaulted by a man she did not know. There was vaginal penetration without a condom. His HIV status is unknown. She has no injuries that need repair. She has no medical history and takes no medications. She completed hepatitis B vaccination in grade 6 and had a protective antibody level documented when she started nursing school. Her last menstrual period was 2 weeks ago and urine hCG is negative. She wants all preventive care that is available.",
    vitals: {
      temperature: "36.8°C oral",
      pulse: "88/minute",
      resp: "16/minute",
      bp: "116/72 mmHg",
      o2sat: "99% on room air",
      weight: "60 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate approach to HIV postexposure prophylaxis?",
        kind: "single",
        options: [
          "Start after her HIV test result returns",
          "Start now and continue for 28 days",
          "Start now and continue for 7 days",
          "Start only if the assailant is found",
          "Wait, as over 24 hours have passed"
        ],
        correct: 1,
        explanation: "The Canadian guideline advises offering PEP after sexual assault unless the assailant is unlikely to have transmissible HIV, which cannot be known here. PEP should start as soon as possible, up to 72 hours after exposure, and she is at 30 hours. It is given for 28 days. A baseline HIV test is drawn, but the first dose should not wait for the result. A 7 day course is too short to be effective.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "can-pep"
      },
      {
        id: "q2",
        prompt: "Which of the following is a preferred PEP regimen in the Canadian guideline?",
        kind: "single",
        options: [
          "abacavir/lamivudine plus nevirapine",
          "bictegravir/tenofovir alafenamide/emtricitabine",
          "lopinavir/ritonavir plus zidovudine",
          "tenofovir disoproxil/emtricitabine alone",
          "zidovudine/lamivudine plus nevirapine"
        ],
        correct: 1,
        explanation: "The 2025 Canadian guideline names two preferred PEP regimens, bictegravir/tenofovir alafenamide/emtricitabine once daily, or dolutegravir with tenofovir disoproxil/emtricitabine. Tenofovir disoproxil/emtricitabine alone is a PrEP regimen and is not enough for PEP. Nevirapine can cause severe liver toxicity in people without HIV. Zidovudine and lopinavir based regimens are older options with more side effects.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "can-pep"
      },
      {
        id: "q3",
        prompt: "Which of the following baseline tests are most appropriate today?",
        kind: "menu",
        options: [
          "Blood culture",
          "CT abdomen and pelvis",
          "Gonorrhea and chlamydia NAAT",
          "Hepatitis B surface antibody",
          "Herpes simplex serology",
          "HIV antigen and antibody test",
          "Pelvic ultrasound",
          "Syphilis serology"
        ],
        select: 3,
        correct: [
          2,
          5,
          7
        ],
        explanation: "Baseline testing before PEP includes a fourth generation HIV antigen and antibody test and screening for sexually transmitted infections, including gonorrhea and chlamydia NAAT and syphilis serology. Hepatitis B testing is for people of unknown status, and she has documented immunity. Herpes serology does not change management. She has no injuries or findings that need imaging or blood cultures.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 7
        },
        source: "can-pep"
      },
      {
        id: "q4",
        prompt: "Which of the following hepatitis B measures does she need after this exposure?",
        kind: "single",
        options: [
          "Hepatitis B immune globulin alone",
          "Hepatitis B vaccine booster dose",
          "Repeat anti-HBs, then decide",
          "Vaccine and immune globulin now",
          "No hepatitis B prophylaxis needed"
        ],
        correct: 4,
        explanation: "She completed the vaccine series and has a documented protective anti-HBs level, so she is a known responder. Known responders are protected and need no hepatitis B vaccine, immune globulin or further testing after an exposure. Immune globulin and vaccine are for people who are unvaccinated, known non-responders or of unknown response. Boosters are not needed in healthy people who have responded.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-hbv"
      }
    ],
    sources: [
      {
        id: "can-pep",
        citation: "Tan DHS, Hull MW, Onyegbule SO, et al. Canadian guideline on HIV pre- and postexposure prophylaxis: 2025 update. CMAJ. 2025.",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12680393/"
      },
      {
        id: "cig-hbv",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Hepatitis B vaccine chapter, including post-exposure prophylaxis. Updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-7-hepatitis-b-vaccine.html"
      }
    ],
    ...META
  },
  {
    id: "infectious-diseases-40",
    topic: "infectious-diseases",
    title: "Infant exposed in a clinic waiting room",
    stem: "A 9-month-old boy is brought to the emergency department by his mother because public health called her about a measles exposure. Fifty hours ago they sat for 2 hours in a walk in clinic waiting room with a child who has since been confirmed to have measles. He has had his 2, 4 and 6 month vaccines but no measles vaccine. He was born at term and is healthy with no immune problems. He is well, feeding normally and has no rash, cough or fever.",
    vitals: {
      temperature: "37.0°C rectal",
      pulse: "124/minute",
      resp: "30/minute",
      o2sat: "99% on room air",
      weight: "9 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate postexposure prophylaxis for him?",
        kind: "single",
        options: [
          "Immune globulin IM now",
          "MMR vaccine and immune globulin",
          "MMR vaccine now",
          "Wait until 12 months for MMR",
          "No prophylaxis, observe for a rash"
        ],
        correct: 2,
        explanation: "Susceptible infants aged 6 to under 12 months should receive MMR vaccine within 72 hours of exposure, and he is at 50 hours. Immune globulin is used for this age group only when more than 72 hours have passed. Giving both together is not needed and immune globulin can blunt the vaccine response. Waiting or observation leaves a susceptible infant unprotected after a real exposure.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-measles"
      },
      {
        id: "q2",
        prompt: "Which of the following is correct about the MMR dose he receives today?",
        kind: "single",
        options: [
          "Antibody testing decides further doses",
          "It completes his measles series",
          "It replaces his 12 month dose",
          "One more dose at 4 to 6 years",
          "Two more doses after 12 months"
        ],
        correct: 4,
        explanation: "An MMR dose given before 12 months of age does not count toward the routine series. He still needs 2 more doses of measles containing vaccine after his first birthday. So this dose neither completes the series nor replaces the 12 month dose. Serology is not used to decide routine doses.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-measles"
      },
      {
        id: "q3",
        update: "His 4-month-old cousin, who is healthy and weighs 6 kg, sat beside them in the same waiting room for the same 2 hours.",
        prompt: "Which of the following is the most appropriate prophylaxis for the cousin?",
        kind: "single",
        options: [
          "IM immune globulin 0.5 mL/kg",
          "IV immune globulin 400 mg/kg",
          "MMR and IM immune globulin",
          "MMR vaccine now",
          "No prophylaxis until 6 months"
        ],
        correct: 0,
        explanation: "Infants younger than 6 months are protected with IM immune globulin at 0.5 mL/kg, given within 6 days of exposure. For 6 kg that is 3 mL. MMR vaccine is not given before 6 months of age. IV immune globulin at 400 mg/kg is reserved for groups such as immunocompromised people, not a healthy infant. No prophylaxis leaves a young infant at high risk of severe measles.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-measles"
      }
    ],
    sources: [
      {
        id: "cig-measles",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Measles vaccine chapter, including post-exposure management. 2015, partially updated 2025.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html"
      }
    ],
    ...META
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
    title: "Farm injury in an older woman",
    stem: "You are working in a rural hospital emergency department. A 72-year-old woman presents 5 hours after she stepped on a pitchfork tine in her barn. The tine went through the sole of her rubber boot into her left heel. She grew up on a farm abroad and does not recall ever being vaccinated, and her daughter confirms there are no immunization records. She has hypertension treated with hydrochlorothiazide. There is a 5 mm puncture wound on the left heel with soil in it. There is no redness. She can bear weight.",
    vitals: {
      temperature: "36.7°C oral",
      pulse: "78/minute",
      resp: "16/minute",
      bp: "152/86 mmHg",
      o2sat: "98% on room air",
      weight: "70 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most appropriate tetanus prophylaxis today?",
        kind: "single",
        options: [
          "Immune globulin 250 units IM alone",
          "Tdap and immune globulin 250 units IM",
          "Tdap and immune globulin 500 units IM",
          "Tdap vaccine alone",
          "No prophylaxis, as the wound is small"
        ],
        correct: 1,
        explanation: "A deep puncture contaminated with soil is not a clean minor wound, and she has no record of a primary series. With an unknown history or fewer than 3 doses, she needs both a tetanus containing vaccine and tetanus immune globulin. The immune globulin dose for adults is 250 units by deep IM injection. Tdap is preferred because she has had no pertussis dose as an adult. Vaccine alone gives no immediate protection, and a small wound does not remove the risk.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-tetanus"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate plan for her further tetanus immunization?",
        kind: "single",
        options: [
          "Complete a 3 dose primary series",
          "One booster dose in 10 years",
          "Repeat immune globulin in 4 weeks",
          "Serology to guide further doses",
          "No further doses after today"
        ],
        correct: 0,
        explanation: "An adult who was never immunized needs a full primary series of 3 doses of tetanus and diphtheria toxoid, and today's dose is the first. Boosters every 10 years start only after the primary series is complete. Immune globulin gives temporary passive protection and is not repeated for this wound. Serology is not used to plan routine tetanus doses.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 10
        },
        source: "cig-tetanus"
      },
      {
        id: "q3",
        prompt: "Which of the following groups in Canada is least likely to have completed a primary tetanus series?",
        kind: "single",
        options: [
          "Adolescents aged 14 to 16 years",
          "Adults aged 60 years or older",
          "Children aged 4 to 6 years",
          "Health care workers",
          "Pregnant people in prenatal care"
        ],
        correct: 1,
        explanation: "In Canada, people aged 60 or older account for over half of tetanus cases, and increasing age, birth outside Canada and missing records are linked to a lack of tetanus immunity. This woman fits that pattern. Children and adolescents receive tetanus toxoid through routine school and infant programs. Health care workers and pregnant people have their immunizations reviewed as part of routine care.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 3
        },
        source: "cig-tetanus"
      }
    ],
    sources: [
      {
        id: "cig-tetanus",
        citation: "Public Health Agency of Canada. Canadian Immunization Guide. Tetanus toxoid chapter, including tetanus prophylaxis in wound management. Updated 2026.",
        url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html"
      }
    ],
    ...META
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
    id: "infectious-diseases-45",
    topic: "infectious-diseases",
    title: "Severe sore throat with a normal looking pharynx",
    stem: "A 45-year-old man presents to the emergency department with 12 hours of rapidly worsening sore throat and pain on swallowing. He now cannot swallow his saliva and his voice is muffled. He has hypertension and smokes. He is sitting upright, leaning forward and spitting into a cup. There is no stridor. His oropharynx is only mildly red and the tonsils are normal. There is marked tenderness when the larynx is gently moved from side to side. There is no neck swelling and no trismus.",
    vitals: {
      temperature: "38.7°C oral",
      pulse: "112/minute",
      resp: "20/minute",
      bp: "148/90 mmHg",
      o2sat: "97% on room air",
      weight: "88 kg"
    },
    questions: [
      {
        id: "q1",
        prompt: "Which of the following is the most likely diagnosis in this man?",
        kind: "single",
        options: [
          "Acute epiglottitis",
          "Infectious mononucleosis",
          "Peritonsillar abscess",
          "Streptococcal pharyngitis",
          "Viral laryngitis"
        ],
        correct: 0,
        explanation: "Severe sore throat and inability to swallow saliva out of proportion to a nearly normal oropharynx, with a muffled voice and tenderness over the larynx, suggest acute epiglottitis. It is now seen mainly in adults. Pharyngitis and mononucleosis show obvious tonsillar or pharyngeal findings. A peritonsillar abscess causes trismus and a bulging pillar. Viral laryngitis causes hoarseness without drooling.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "guldfred"
      },
      {
        id: "q2",
        prompt: "Which of the following is the most appropriate way to confirm the diagnosis?",
        kind: "single",
        options: [
          "CT of the neck with him supine",
          "Flexible nasolaryngoscopy",
          "Monospot heterophile test",
          "Rapid streptococcal antigen test",
          "Tongue depressor examination"
        ],
        correct: 1,
        explanation: "The larynx must be examined to find the problem, and flexible nasolaryngoscopy shows the swollen epiglottis directly. It should be done with him sitting up and with airway equipment and staff ready. Lying him flat for CT risks sudden obstruction. A tongue depressor cannot see the epiglottis in adults. Streptococcal and monospot tests address pharyngitis, not the supraglottis.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 6
        },
        source: "guldfred"
      },
      {
        id: "q3",
        prompt: "Which of the following is the most appropriate antibiotic for him?",
        kind: "single",
        options: [
          "amoxicillin 1 g PO",
          "azithromycin 500 mg PO",
          "ceftriaxone 2 g IV",
          "cephalexin 500 mg PO",
          "penicillin V 600 mg PO"
        ],
        correct: 2,
        explanation: "Adult epiglottitis needs IV antibiotics that cover Haemophilus influenzae, streptococci and Staphylococcus aureus, and a third generation cephalosporin such as ceftriaxone is standard. He cannot swallow his saliva, so oral drugs are not an option. Amoxicillin and penicillin miss beta-lactamase producing Haemophilus influenzae. Azithromycin and cephalexin give unreliable cover for a threatened airway.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 8
        },
        source: "guldfred"
      },
      {
        id: "q4",
        prompt: "Which of the following is the most appropriate disposition for him?",
        kind: "single",
        options: [
          "Dexamethasone and discharge home",
          "Discharge on oral antibiotics",
          "ICU admission for airway monitoring",
          "Observe in the ED for 4 hours",
          "Ward bed with pulse oximetry"
        ],
        correct: 2,
        explanation: "Adult epiglottitis can progress to complete airway obstruction within hours, and he already cannot swallow his saliva. He needs admission to a monitored setting such as the ICU, where a team can secure the airway at once if needed. A general ward bed or a short ED observation period does not give this protection. Discharge is unsafe.",
        keyFeature: {
          topic: "infectious-diseases",
          n: 4
        },
        source: "guldfred"
      }
    ],
    sources: [
      {
        id: "guldfred",
        citation: "Guldfred LA, Lyhne D, Becker BC. Acute epiglottitis: epidemiology, clinical presentation, management and outcome. J Laryngol Otol. 2008.",
        url: "https://pubmed.ncbi.nlm.nih.gov/17892608/"
      }
    ],
    ...META
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
