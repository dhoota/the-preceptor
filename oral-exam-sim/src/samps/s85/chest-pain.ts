// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  ross: { id: "ross-sc-septic-s85", citation: "Ross JJ, Shamsuddin H. Sternoclavicular septic arthritis: review of 180 cases. Medicine (Baltimore). 2004.", url: "https://doi.org/10.1097/01.md.0000126761.83417.29" },
  escPeri2025: { id: "esc-myo-peri-2025-s85", citation: "Schulz-Menger J, Collini V, Groschel J, and colleagues. 2025 ESC guidelines for the management of myocarditis and pericarditis. Eur Heart J. 2025.", url: "https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf192/8234510" },
  escPeri2015: { id: "esc-pericardial-2015-s85", citation: "Adler Y, Charron P, Imazio M, and colleagues. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.", url: "https://academic.oup.com/eurheartj/article/36/42/2921/2293375" },
  eacts: { id: "eacts-mediastinitis-s85", citation: "Abu-Omar Y, Kocher GJ, Bosco P, and colleagues. European Association for Cardio-Thoracic Surgery expert consensus statement on the prevention and management of mediastinitis. Eur J Cardiothorac Surg. 2017.", url: "https://academic.oup.com/ejcts/article/51/1/10/2736969" },
  chaulk: { id: "dnm-review-2025-s85", citation: "Chaulk RC, Sahai D, Raj L, Nayak R. Etiology, diagnosis, and management of descending necrotizing mediastinitis: a narrative review. Mediastinum. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11982982/" },
  kofman: { id: "cps-precordial-catch-s85", citation: "Kofman K, D'Alessandro LCA, Yilmaz Furtun B. Practical tips for paediatricians: precordial catch syndrome. Paediatr Child Health. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11261817/" },
  scamp: { id: "chest-pain-scamp-s85", citation: "Verghese GR, Friedman KG, Rathod RH, and colleagues. Resource utilization reduction for evaluation of chest pain in pediatrics using a novel standardized clinical assessment and management plan (SCAMP). J Am Heart Assoc. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3487367/" },
  sst: { id: "sst-misdiagnosis-s85", citation: "Wilkinson M, Obst S, Palmer T, Whish-Wilson G. Misdiagnosis of superior sulcus tumours: a scoping review. J Thorac Dis. 2026.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12972777/" },
} satisfies Record<string, Source>;

export const CHEST_PAIN_S85: Samp[] = [
  /* 48 Slowly worsening pain at the top of the chest ---------------------- */
  {
    id: "chest-pain-48",
    topic: "chest-pain",
    title: "Pain near the collarbone after yard work",
    stem:
      "A 61-year-old man presents to the emergency department with 12 days of pain at the top of his right chest, beside the collarbone, that has slowly worsened. It began the day after an afternoon of yard work. Ibuprofen helped for the first few days but no longer does. The pain is worse when he lifts his right arm or lies on his right side. For 4 nights he has woken with chills. He has type 2 diabetes treated with insulin and an infected ulcer on his left foot that the wound clinic has treated for 3 weeks. He has hypertension treated with ramipril and takes atorvastatin. He stopped smoking 10 years ago. The skin over the right sternoclavicular joint is warm and swollen, and the joint is very tender. Heart sounds are normal and the lungs are clear. His ECG and chest X-ray are normal.",
    vitals: { temperature: "37.6°C oral", pulse: "98/minute", resp: "18/minute", bp: "138/82 mmHg", o2sat: "98% on room air", weight: "96 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most points to an infected joint rather than a strain?",
        options: ["Pain when he lifts his right arm", "Pain with chills as it worsened", "Pain worse lying on his right side", "Relief from ibuprofen at first", "Worse after a day of yard work"],
        correct: 1,
        explanation:
          "Pain that keeps building over 12 days and now comes with chills at night is the course of an infection, not a strain, which should ease over that time. In the largest review of sternoclavicular septic arthritis, patients presented with chest pain in 78% and shoulder pain in 24%, after a median of 14 days of symptoms. Pain on lifting the arm or lying on the joint happens with both causes, because both load the joint. Early relief from ibuprofen is common with any inflamed joint, and onset after yard work does not separate an infection from an injury.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "ross-sc-septic-s85",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following in his history most raises his risk of an infected sternoclavicular joint?",
        options: ["Age of 61 years", "Atorvastatin therapy", "Former smoking history", "Hypertension on ramipril", "Infected diabetic foot ulcer"],
        correct: 4,
        explanation:
          "A distant site of infection and diabetes were two of the commonest risk factors in the review of 180 cases, found in 15% and 13% of patients, and his infected foot ulcer gives him both. Bacteria from the ulcer can seed the joint through the blood, and bacteremia was present in 62% of cases. Injection drug use, trauma and an infected central line were the other common risk factors. His age, his statin, his past smoking and his hypertension do not raise the risk of a joint infection.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ross-sc-septic-s85",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about his temperature of 37.6°C is most accurate?",
        options: ["It does not exclude a septic joint", "It excludes a deep chest wall abscess", "It favours a viral illness", "It points to a muscle strain", "It suggests gout in the joint"],
        correct: 0,
        explanation:
          "Only 65% of patients with sternoclavicular septic arthritis were febrile at presentation, so a temperature of 37.6°C cannot be used to set the diagnosis aside in a man with a warm, swollen, very tender joint and chills. A temperature below 38°C also says nothing about a chest wall abscess, which was found in a quarter of cases. Gout of the sternoclavicular joint is rare, and a temperature below 38°C does not separate a crystal arthritis from a septic one. This temperature does not point to a viral illness or a strain when the joint itself is hot and swollen.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "ross-sc-septic-s85",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: ["Blood cultures and CT of the chest wall", "Bone scan as an outpatient", "Oral cephalexin and clinic review", "Repeat X-ray in 2 weeks", "Sling and NSAID for 1 week"],
        correct: 0,
        explanation:
          "Blood cultures come first because bacteremia is common, and CT or MRI should be obtained routinely to look for a chest wall abscess or phlegmon (25%), a retrosternal abscess, or mediastinitis (13%). An abscess or mediastinitis changes the plan to surgical resection of the joint. A normal chest X-ray does not show this soft tissue spread. Empiric IV antibiotics should follow the cultures and may need to cover MRSA, because Staphylococcus aureus caused about half of cases. Oral cephalexin, a sling with an NSAID, a bone scan as an outpatient and a repeat X-ray in 2 weeks all leave a deep infection untreated.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ross-sc-septic-s85",
      },
    ],
    sources: [S.ross],
    ...META,
  },

  /* 49 Subacute pericarditis with systemic features ------------------------ */
  {
    id: "chest-pain-49",
    topic: "chest-pain",
    title: "Sharp pain after a week of fevers",
    stem:
      "A 64-year-old woman presents to the emergency department with 10 days of sharp central chest pain that has slowly worsened. It is worse when she lies flat or breathes in, and it eases when she leans forward. It spreads to the ridge of her left shoulder. She has had fevers at home. She had a cold 2 weeks before the pain began. Over the past month she has lost 4 kg, and she wakes most nights soaked in sweat. She moved to Canada from the Philippines 6 years ago. She has osteoarthritis and takes acetaminophen as needed. A scratchy sound is heard at the left sternal border in systole and diastole. The lungs are clear. Her ECG shows diffuse concave ST elevation with PR depression.",
    vitals: { temperature: "38.4°C oral", pulse: "104/minute", resp: "20/minute", bp: "118/74 mmHg", o2sat: "97% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most suggests a cause other than viral or idiopathic pericarditis?",
        options: ["Cold symptoms before the pain", "Pain easing when she leans forward", "Pain spreading to the shoulder ridge", "Pain worse on deep breathing", "Weight loss with night sweats"],
        correct: 4,
        explanation:
          "A month of weight loss and drenching night sweats points to a systemic illness behind the pericarditis, such as tuberculosis, which is common in the country she comes from, or cancer. The ESC advises admission and a search for the cause when the presentation suggests an underlying systemic disease. A viral illness before the pain, pain that is worse on breathing in and eased by leaning forward, and spread to the trapezius ridge are all typical of ordinary viral or idiopathic pericarditis, and they do not point to another cause.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "esc-pericardial-2015-s85",
      },
      {
        id: "q2",
        kind: "menu",
        select: 3,
        update: "Bedside echocardiography shows a circumferential pericardial effusion measuring 24 mm in diastole, with no chamber collapse.",
        prompt: "Which of the following findings in her case are predictors of a poor prognosis that call for her admission?",
        options: ["Age of 64 years", "Cold symptoms 2 weeks earlier", "Diastolic effusion of 24 mm", "Diffuse ST elevation on ECG", "Fever of 38.4°C", "Pericardial friction rub", "PR depression on ECG", "Slow worsening over 10 days"],
        correct: [2, 4, 7],
        explanation:
          "The ESC major predictors of a poor prognosis are fever above 38°C, a subacute course, a large effusion with an echo-free space over 20 mm in diastole, tamponade and no response to NSAIDs after a week. She has three of them: a temperature of 38.4°C, pain that has built over 10 days, and a 24 mm effusion. Any one predictor calls for admission and a search for the cause. Diffuse ST elevation, PR depression and a friction rub confirm pericarditis but do not predict complications. Her age and the cold before the pain are not predictors.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "esc-pericardial-2015-s85",
      },
      {
        id: "q3",
        kind: "single",
        update: "She is admitted for investigation of the cause. Her creatinine is 64 umol/L and she has no history of peptic ulcer or bleeding.",
        prompt: "Which of the following is the most appropriate first-line anti-inflammatory treatment for her pericarditis while the cause is sought?",
        options: ["Colchicine alone", "Ibuprofen alone", "Ibuprofen and colchicine", "Prednisone alone", "Prednisone and colchicine"],
        correct: 2,
        explanation:
          "The 2025 ESC guideline treats acute pericarditis first with aspirin or an NSAID at full anti-inflammatory doses, usually every 8 hours, plus colchicine to reduce recurrence. Her kidney function is normal and she has no ulcer history, so ibuprofen is safe to use. An NSAID alone leaves her at higher risk of recurrence, and colchicine alone is not enough to control the inflammation. Corticosteroids are for patients who cannot take aspirin or NSAIDs, at low to moderate doses with colchicine. Used early, they favour recurrence and a chronic course, and they are a poor choice before tuberculosis has been excluded.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "esc-myo-peri-2025-s85",
      },
      {
        id: "q4",
        kind: "single",
        update: "Six hours later she feels light-headed. Her pulse is 124/minute and her BP is 92/70 mmHg. Her neck veins are distended.",
        prompt: "Which of the following bedside findings would most strongly support cardiac tamponade as the cause of her deterioration?",
        options: ["Louder friction rub than on arrival", "New crackles at both lung bases", "Pulsus paradoxus of 16 mmHg", "Rise in temperature to 39.1°C", "Widespread ST elevation persisting"],
        correct: 2,
        explanation:
          "Pulsus paradoxus, a fall in systolic pressure of more than 10 mmHg on normal inspiration, is a key sign of tamponade, and 16 mmHg with hypotension, tachycardia and distended neck veins in a woman with a 24 mm effusion makes tamponade very likely. She needs urgent echocardiography and pericardiocentesis. A rub can persist or grow louder whatever the effusion is doing. Crackles at both bases point to heart failure, and the lungs are typically clear in tamponade. A higher fever suggests infection, and persisting diffuse ST elevation reflects the pericarditis. Low voltage and electrical alternans are the ECG changes that go with tamponade.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "esc-myo-peri-2025-s85",
      },
    ],
    sources: [S.escPeri2015, S.escPeri2025],
    ...META,
  },

  /* 50 Chest pain and fever after a tooth infection, remote ---------------- */
  {
    id: "chest-pain-50",
    topic: "chest-pain",
    title: "Fever and pain on swallowing at a nursing station",
    stem:
      "You are working in a nursing station in a remote northern community. A 36-year-old woman presents with 2 days of fever and constant central chest pain that is worse when she swallows. Nine days ago she had a painful lower right molar and swelling under her jaw, and 6 days ago she started amoxicillin from the nursing station. The jaw swelling has gone down, but her neck has become sore and stiff. She has type 2 diabetes treated with metformin, takes a combined oral contraceptive and smokes 10 cigarettes a day. She looks unwell. Her voice is normal and the floor of the mouth is soft. The lower right side of her neck is swollen, red and tender down to the collarbone. Breath sounds are equal and the heart sounds are normal. Her ECG shows sinus tachycardia. A chest X-ray read through telehealth is normal.",
    vitals: { temperature: "39.1°C oral", pulse: "122/minute", resp: "22/minute", bp: "104/66 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history best explains her chest pain?",
        options: ["Amoxicillin started 6 days ago", "Combined oral contraceptive use", "Lower molar infection 9 days ago", "Smoking 10 cigarettes a day", "Type 2 diabetes on metformin"],
        correct: 2,
        explanation:
          "A tooth infection 9 days ago, followed by a sore swollen neck and then fever with chest pain on swallowing, traces a path from the jaw down the neck into the chest. Odontogenic infection is the most commonly accepted origin of descending mediastinal infection. Diabetes raises her risk of a severe infection but does not explain where the pain comes from. The contraceptive pill raises the risk of PE, but PE does not cause pain on swallowing or a red, swollen neck. Amoxicillin is not a usual cause of pill injury to the esophagus, and smoking does not explain this course.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "dnm-review-2025-s85",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her chest pain and fever?",
        options: ["Acute viral pericarditis", "Mediastinitis from neck spread", "Pill-induced esophagitis", "Pulmonary embolism with infarction", "Retropharyngeal abscess alone"],
        correct: 1,
        explanation:
          "Infection from a lower molar that spreads along the fascial planes of the neck into the mediastinum is descending necrotizing mediastinitis. Her neck swelling reaching the collarbone, fever, chest pain and pain on swallowing fit it, and it remains lethal unless it is drained early. A retropharyngeal abscess alone would not explain chest pain, although it can be the route into the chest. Pill esophagitis does not cause fever or a red neck. Viral pericarditis does not follow a tooth infection with neck swelling, and PE does not explain the neck findings.",
        keyFeature: { topic: "chest-pain", n: 1 },
        source: "eacts-mediastinitis-s85",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about her normal chest X-ray is most accurate?",
        options: ["It excludes an esophageal perforation", "It makes transfer for CT unnecessary", "It may be normal early in this illness", "It points to an esophageal pill injury", "It supports continuing oral amoxicillin"],
        correct: 2,
        explanation:
          "A plain chest film cannot rule out mediastinal infection, which may show only as fat stranding or a small fluid collection. The EACTS consensus calls for liberal use of contrast-enhanced CT of the neck and chest because it is essential for early detection, and delay in diagnosis drives the high death rate. A normal film does not exclude perforation either, and it gives no support to pill injury or to oral antibiotics in a woman with a temperature of 39.1°C and a pulse of 122/minute. She still needs transfer for CT and surgical care.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "eacts-mediastinitis-s85",
      },
      {
        id: "q4",
        kind: "single",
        update: "The regional hospital, which has CT and on-call surgical services, accepts her. The aircraft will arrive in 3 hours. Her airway remains clear.",
        prompt: "Which of the following is the most appropriate treatment to start before the aircraft arrives?",
        options: ["Change to amoxicillin-clavulanate PO", "Continue amoxicillin, add analgesia", "Needle aspiration of the neck swelling", "Start IV broad-spectrum antibiotics", "No antibiotic change until CT"],
        correct: 3,
        explanation:
          "The EACTS consensus advises immediate IV broad-spectrum antibiotics covering aerobic and anaerobic organisms for descending mediastinitis, followed by prompt drainage of the neck and mediastinum. A cephalosporin with metronidazole, or piperacillin-tazobactam, are usual choices, started after blood cultures if they can be drawn without delay. She is febrile and tachycardic after 6 days of oral amoxicillin, so oral treatment of any kind has failed her. Waiting 3 hours for the aircraft and more for CT lets the infection spread. Needle aspiration at the station does not drain the mediastinum and delays definitive care.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "eacts-mediastinitis-s85",
      },
    ],
    sources: [S.chaulk, S.eacts],
    ...META,
  },

  /* 51 Brief sharp pain in a schoolgirl ------------------------------------ */
  {
    id: "chest-pain-51",
    topic: "chest-pain",
    title: "Girl sent from a school assembly",
    stem:
      "A 12-year-old girl is brought to the emergency department by her mother after a sudden sharp pain under her left breast during a school assembly. She was standing still and slouching. The pain lasted about 2 minutes, caught her when she tried to breathe in, and stopped after she straightened up and took one deep breath. She has had three similar brief episodes over 2 months, all at rest, and feels well between them. She has had no palpitations. She plays soccer twice a week without symptoms. She has no medical history and takes no medications. She points to the spot with one finger. She is comfortable and pain free. Heart sounds are normal with no murmur, rub or gallop, and there is no chest wall tenderness. The lungs are clear and femoral pulses are normal. Her ECG is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "104/64 mmHg", o2sat: "99% on room air", weight: "41 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her episodes of chest pain?",
        options: ["Acute pericarditis", "Anxiety-related chest pain", "Costochondritis", "Exercise-induced asthma", "Precordial catch syndrome"],
        correct: 4,
        explanation:
          "Sudden, sharp pain under the left breast that lasts a few minutes, starts at rest, catches on inspiration, eases when she straightens up and takes a deep breath, and can be pointed to with one finger is precordial catch syndrome. It is a clinical diagnosis made from the history and examination. Costochondritis causes tenderness over the costal cartilages, which she does not have. Pericarditis causes longer pain with a rub or ECG changes. Asthma brought on by exercise does not cause brief pain at rest, and nothing in her history points to anxiety.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "cps-precordial-catch-s85",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her after this assessment?",
        options: ["Echocardiogram before discharge", "Exercise stress test next week", "Holter monitor for 48 hours", "Reassurance and posture advice", "Troponin and chest X-ray now"],
        correct: 3,
        explanation:
          "With a typical history, a normal examination, a normal ECG and no red flags, precordial catch syndrome needs no further testing. Naming the condition and explaining that it is benign and usually fades with age eases the worry of the child and her family. She can be shown how to sit upright, roll her shoulders back and breathe through an episode. Extra tests add anxiety and uncertainty without benefit. An echocardiogram is kept for red flags. An exercise test and a Holter monitor look for exertional or rhythm problems that nothing in her story suggests, and she has had no palpitations. A troponin and chest X-ray are not needed in a well child with a normal examination.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "cps-precordial-catch-s85",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features in a child with chest pain are red flags that call for echocardiography?",
        options: ["Brief pain when slouching", "Chest pain during soccer", "Fainting while running", "Fever with the pain", "Pain eased by a deep breath", "Pain under the left breast", "Pain worse breathing in", "Pointing to one spot"],
        correct: [1, 2, 3],
        explanation:
          "Pain with exercise, syncope and recent fever are red flags in a child with chest pain and call for ECG and echocardiography. Exertional pain and syncope raise concern for cardiomyopathy, a coronary anomaly or an outflow obstruction, and fever with pain raises concern for pericarditis or myocarditis. In the Boston plan exertional pain was the commonest reason for an echocardiogram. Brief pain at rest when slouching, pain under the left breast that catches on inspiration and eases with a deep breath, and pain that can be pointed to with one finger are the reassuring features of precordial catch.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "chest-pain-scamp-s85",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following family history findings would most change your assessment of her chest pain?",
        options: ["Brother died suddenly at age 19", "Father with hypertension at 45", "Grandfather with MI at age 76", "Mother with migraine headaches", "Sister with childhood asthma"],
        correct: 0,
        explanation:
          "A sudden or unexplained death in a first-degree relative is a pertinent positive in the Boston pediatric chest pain plan and calls for an echocardiogram and cardiology assessment, because inherited cardiomyopathies and arrhythmia syndromes can first show themselves as chest pain or syncope. A brother who died suddenly at 19 is exactly that history. Hypertension in a parent at 45 and a heart attack in a grandparent at 76 are common and do not point to an inherited heart condition in a child. Migraine and asthma in relatives do not change her cardiac risk.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "chest-pain-scamp-s85",
      },
    ],
    sources: [S.kofman, S.scamp],
    ...META,
  },

  /* 52 Months of shoulder and upper chest pain in a smoker ---------------- */
  {
    id: "chest-pain-52",
    topic: "chest-pain",
    title: "Shoulder pain that physiotherapy did not help",
    stem:
      "A 63-year-old man presents to the emergency department with 3 months of deep, constant pain in his right shoulder and upper chest. It is worse at night and does not change with arm movement. For a month it has also run down his inner arm to the little finger. Physiotherapy for a presumed rotator cuff problem has not helped. A walk-in clinic chest X-ray 6 weeks ago was reported as normal. He has lost 5 kg without trying. He has smoked for 45 pack-years. He takes ramipril for hypertension and metformin for type 2 diabetes, and has worked at a desk for 30 years. Passive shoulder movement is full and painless, with no crepitus. The Spurling test is negative. The right upper eyelid droops and the right pupil is smaller than the left. Finger abduction is weak on the right. The right trapezius is mildly tender. His ECG is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "146/84 mmHg", o2sat: "96% on room air", weight: "71 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following in his history most raises his pretest probability of lung cancer as the cause of his pain?",
        options: ["Age of 63 years", "Desk job for 30 years", "Hypertension on ramipril", "45 pack-years of smoking", "Type 2 diabetes on metformin"],
        correct: 3,
        explanation:
          "A 45 pack-year smoking history is the strongest risk factor here for a lung cancer at the apex, and the scoping review advises apical lung imaging when shoulder pain comes with Horner syndrome and a smoking history or weight loss. He has all three. His age adds some risk, but far less than his smoking. Hypertension, diabetes and years of desk work do not raise the risk of lung cancer.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "sst-misdiagnosis-s85",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings most raises the probability that his pain arises from the lung apex?",
        options: ["Full passive shoulder movement", "Negative Spurling test", "Tenderness over the trapezius", "Unequal pupils with ptosis", "Weak finger abduction"],
        correct: 3,
        explanation:
          "A drooping right eyelid with a smaller right pupil is Horner syndrome, which a tumour at the lung apex causes by invading the sympathetic chain, and with shoulder pain and his smoking history it should prompt apical imaging. Weak finger abduction shows a T1 nerve root problem, the commonest neuropathy with these tumours, but cervical radiculopathy causes it too. Full painless passive movement without crepitus and a negative Spurling test make a shoulder or neck cause less likely without pointing to the apex. Trapezius tenderness is common and nonspecific.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "sst-misdiagnosis-s85",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following statements about his chest X-ray reported as normal 6 weeks ago is most accurate?",
        options: ["It excludes a lung cancer", "It is unreliable at the lung apex", "It points to a rotator cuff cause", "It rules out bone destruction", "It shows the pain is mechanical"],
        correct: 1,
        explanation:
          "Radiographic error was the most common cause of delayed diagnosis of superior sulcus tumours in the scoping review. In one study, 78 lesions were missed and 20 misread across 166 radiographs from 50 patients. The apex is crowded by the ribs, clavicle and soft tissue, so early apical pleural thickening or rib destruction is easy to miss. A normal report therefore does not exclude a lung cancer or bone destruction. A chest film says nothing about the rotator cuff, and his pain is not mechanical, because shoulder movement does not change it.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "sst-misdiagnosis-s85",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next investigation for him in the emergency department?",
        options: ["Cervical spine X-ray series", "CT of the chest with contrast", "Nerve conduction studies", "Repeat shoulder X-ray", "Shoulder ultrasound"],
        correct: 1,
        explanation:
          "Shoulder pain with Horner syndrome, a heavy smoking history and weight loss calls for imaging of the lung apex now. CT of the chest shows the apical mass, rib and vertebral destruction and the rest of the chest, and it is preferred over plain films for staging. MRI, the preferred modality in the review with a sensitivity of about 90%, usually follows to define spread into the brachial plexus. Cervical spine and shoulder films, shoulder ultrasound and nerve conduction studies look for the shoulder and neck causes that his examination has already made less likely, and they would add to a delay that has lasted 3 months.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "sst-misdiagnosis-s85",
      },
    ],
    sources: [S.sst],
    ...META,
  },
];
