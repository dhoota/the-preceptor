// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  aorta: { id: "acc-aha-aorta-2022-s85", citation: "Isselbacher EM, Preventza O, Hamilton Black J, and colleagues. 2022 ACC/AHA guideline for the diagnosis and management of aortic disease. Circulation. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9876736/" },
  advised: { id: "advised-2018-s85", citation: "Nazerian P, Mueller C, Soeiro AM, and colleagues. Diagnostic accuracy of the aortic dissection detection risk score plus D-dimer for acute aortic syndromes: the ADvISED prospective multicenter study. Circulation. 2018." },
  escPeri2025: { id: "esc-myo-peri-2025-s85", citation: "Schulz-Menger J, Collini V, Groschel J, and colleagues. 2025 ESC guidelines for the management of myocarditis and pericarditis. Eur Heart J. 2025.", url: "https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehaf192/8234510" },
  escPeri2015: { id: "esc-pericardial-2015-s85", citation: "Adler Y, Charron P, Imazio M, and colleagues. 2015 ESC guidelines for the diagnosis and management of pericardial diseases. Eur Heart J. 2015.", url: "https://academic.oup.com/eurheartj/article/36/42/2921/2293375" },
  eacts: { id: "eacts-mediastinitis-s85", citation: "Abu-Omar Y, Kocher GJ, Bosco P, and colleagues. European Association for Cardio-Thoracic Surgery expert consensus statement on the prevention and management of mediastinitis. Eur J Cardiothorac Surg. 2017.", url: "https://academic.oup.com/ejcts/article/51/1/10/2736969" },
  chaulk: { id: "dnm-review-2025-s85", citation: "Chaulk RC, Sahai D, Raj L, Nayak R. Etiology, diagnosis, and management of descending necrotizing mediastinitis: a narrative review. Mediastinum. 2025.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11982982/" },
  kofman: { id: "cps-precordial-catch-s85", citation: "Kofman K, D'Alessandro LCA, Yilmaz Furtun B. Practical tips for paediatricians: precordial catch syndrome. Paediatr Child Health. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11261817/" },
  scamp: { id: "chest-pain-scamp-s85", citation: "Verghese GR, Friedman KG, Rathod RH, and colleagues. Resource utilization reduction for evaluation of chest pain in pediatrics using a novel standardized clinical assessment and management plan (SCAMP). J Am Heart Assoc. 2012.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3487367/" },
  bts: { id: "bts-pleural-2023-s85", citation: "Roberts ME, Rahman NM, Maskell NA, and colleagues. British Thoracic Society guideline for pleural disease. Thorax. 2023." },
  cheng: { id: "ptx-review-2024-s85", citation: "Cheng HS, Wong C, Chiu PH, Tong CW, Miu PLF. Management of spontaneous pneumothorax: a mini-review on its latest evidence. J Thorac Dis. 2024.", url: "https://jtd.amegroups.org/article/view/88287/html" },
} satisfies Record<string, Source>;

export const CHEST_PAIN_S85: Samp[] = [
  /* 48 Interscapular pain while carrying a heavy load ---------------------- */
  {
    id: "chest-pain-48",
    topic: "chest-pain",
    title: "Pain while carrying a water heater",
    stem:
      "You are working in a community hospital emergency department with CT. A 47-year-old man presents 70 minutes after pain struck between his shoulder blades while he and a friend carried an old water heater up the basement stairs. He says the pain was at its worst the instant it began. It now also sits in the centre of his chest, and he has felt nauseated since it started. It eases a little when he sits up, and turning his trunk causes a twinge. His father died suddenly at 51 of a ruptured thoracic aorta. He has hypertension treated with amlodipine and smokes 20 cigarettes a day. He is sweaty and restless. Radial and femoral pulses are equal, and the BP is the same in both arms. There is no murmur. The neurological examination is normal. His ECG shows sinus tachycardia with left ventricular hypertrophy and no ST elevation.",
    vitals: { temperature: "36.8°C oral", pulse: "108/minute", resp: "20/minute", bp: "172/98 mmHg", o2sat: "97% on room air", weight: "92 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his pain history most raises concern for an acute aortic syndrome?",
        options: ["Easing a little when he sits up", "Instant onset at peak intensity", "Nausea since the pain began", "Sweating with the pain", "Twinge when he turns his trunk"],
        correct: 1,
        explanation:
          "Pain that is at its worst the moment it starts is the high-risk pain feature of the aortic dissection detection risk score, along with severe intensity and a ripping or tearing quality,. Nausea and sweating come with many serious causes, including ACS, and do not point to the aorta. Slight relief on sitting up and a twinge with trunk movement suggest pericardial or chest wall pain, and both can mislead when the onset was this abrupt.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "acc-aha-aorta-2022-s85",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following in his history counts as a high-risk condition in the aortic dissection detection risk score?",
        options: ["Father's death from aortic rupture", "Hypertension on amlodipine", "Left ventricular hypertrophy on ECG", "Smoking 20 cigarettes a day", "Systolic BP above 170 mmHg"],
        correct: 0,
        explanation:
          "The high-risk conditions in the score are Marfan syndrome or another connective tissue disease, a family history of aortic disease, known aortic valve disease, recent aortic manipulation and a known thoracic aneurysm. His father's sudden death from a ruptured thoracic aorta is a family history of aortic disease, and up to one in five people with a thoracic aneurysm or dissection have one. Hypertension is the commonest risk factor for dissection, and smoking and left ventricular hypertrophy go with it, but none of them is a score item. A high systolic pressure is not a score item either. Among the blood pressure findings, only a difference between the arms or hypotension counts.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "acc-aha-aorta-2022-s85",
      },
      {
        id: "q3",
        kind: "single",
        update: "A D-dimer sent at triage is 380 mcg/L FEU. The laboratory cutoff is 500 mcg/L FEU.",
        prompt: "Which of the following is the most appropriate next step for him?",
        options: ["Discharge with BP clinic follow-up", "Repeat D-dimer in 6 hours", "Serial troponins over 3 hours", "Transthoracic echo, then decide", "Urgent CT angiography of the aorta"],
        correct: 4,
        explanation:
          "His score is 2, one point for the family history of aortic disease and one for abrupt severe pain, which places him at high risk. In the ADvISED study the D-dimer strategy was tested only with a score of 0 or 1. Eight patients with an acute aortic syndrome had a negative D-dimer, so a low value cannot set aside a high-risk presentation, and he needs CT angiography. Repeating the D-dimer adds nothing. Serial troponins address ACS, not the aorta. Transthoracic echo often misses a dissection beyond the aortic root, so a normal study would not settle the question. Discharge would send home a man who may have a dissection.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "advised-2018-s85",
      },
      {
        id: "q4",
        kind: "single",
        update: "The CT technologist is 45 minutes away. He has had fentanyl 50 mcg IV. His pulse is 106/minute and his BP is 170/96 mmHg in both arms.",
        prompt: "Which of the following is the most appropriate treatment of his heart rate and blood pressure while he waits for CT?",
        options: ["Esmolol IV infusion now", "Hydralazine IV bolus now", "Labetalol once CT confirms", "Nicardipine IV infusion now", "No antihypertensive until CT"],
        correct: 0,
        explanation:
          "With a dissection likely and CT 45 minutes away, treatment should start now rather than wait for proof. The 2022 ACC/AHA guideline starts with an IV beta blocker, which lowers the force of each contraction on the aortic wall, and aims for a heart rate of 60 to 80 and a systolic BP below 120 mmHg. Esmolol is short acting and easy to stop if CT shows another cause. Hydralazine and nicardipine are vasodilators, which should not be used first because the reflex tachycardia they cause raises shear stress on the aorta. Waiting for CT, with or without a later labetalol dose, leaves his pressure at 170/96 mmHg for the riskiest part of his stay.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "acc-aha-aorta-2022-s85",
      },
    ],
    sources: [S.aorta, S.advised],
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
        options: ["Colchicine alone", "Ibuprofen alone", "Ibuprofen and colchicine", "Prednisone and colchicine", "Prednisone alone"],
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
      "You are working in a nursing station in a remote northern community. Air transfer to the regional hospital takes about 3 hours. A 36-year-old woman presents with 2 days of fever and constant central chest pain that is worse when she swallows. Nine days ago she had a painful lower right molar and swelling under her jaw, and 6 days ago she started amoxicillin from the nursing station. The jaw swelling has gone down, but her neck has become sore and stiff. She has type 2 diabetes treated with metformin, takes a combined oral contraceptive and smokes 10 cigarettes a day. She looks unwell. She opens her mouth fully, her voice is normal and the floor of the mouth is soft. The lower right side of her neck is swollen, red and tender down to the collarbone. Breath sounds are equal and the heart sounds are normal. Her ECG shows sinus tachycardia. A portable chest X-ray, read by a radiologist through telehealth, is normal.",
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
        options: ["It excludes an esophageal perforation", "It makes transfer for CT unnecessary", "It may miss early mediastinal spread", "It points to an esophageal pill injury", "It supports continuing oral amoxicillin"],
        correct: 2,
        explanation:
          "A plain chest film cannot rule out mediastinal infection, which may show only as fat stranding or a small fluid collection. The EACTS consensus calls for liberal use of contrast-enhanced CT of the neck and chest because it is essential for early detection, and delay in diagnosis drives the high death rate. A normal film does not exclude perforation either, and it gives no support to pill injury or to oral antibiotics in a woman with a temperature of 39.1°C and a pulse of 122/minute. She still needs transfer for CT and surgical care.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "eacts-mediastinitis-s85",
      },
      {
        id: "q4",
        kind: "single",
        update: "The regional hospital, which has CT and on-call thoracic surgery, accepts her. The aircraft will arrive in 3 hours. Her airway remains clear.",
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
      "A 12-year-old girl is brought to the emergency department by her mother after a sudden sharp pain under her left breast during a school assembly. She was standing still and slouching. The pain lasted about 2 minutes, caught her when she tried to breathe in, and stopped after she straightened up and took one deep breath. She has had three similar brief episodes over 2 months, all at rest, and feels well between them. She plays soccer twice a week without symptoms. She has no medical history and takes no medications. She points to the spot with one finger. She is comfortable and pain free. Heart sounds are normal with no murmur, rub or gallop, and there is no chest wall tenderness. The lungs are clear and femoral pulses are normal. Her ECG is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "104/64 mmHg", o2sat: "99% on room air", weight: "41 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her episodes of chest pain?",
        options: ["Acute pericarditis", "Anxiety-related chest pain", "Costochondritis", "Exercise-induced asthma", "Precordial catch syndrome"],
        correct: 4,
        explanation:
          "Sudden, sharp pain under the left breast that lasts a few minutes, starts at rest, catches on inspiration, eases when she straightens up and takes a deep breath, and can be pointed to with one finger is precordial catch syndrome. It is diagnosed from the history and examination, not by exclusion. Costochondritis causes tenderness over the costal cartilages, which she does not have. Pericarditis causes longer pain with a rub or ECG changes. Asthma brought on by exercise does not cause brief pain at rest, and nothing in her history points to anxiety.",
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
        prompt: "Which of the following features, if they were present in her history, would call for further cardiac testing such as echocardiography?",
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

  /* 52 Sudden one-sided pain in severe emphysema, rural -------------------- */
  {
    id: "chest-pain-52",
    topic: "chest-pain",
    title: "Gardener with emphysema and new pain",
    stem:
      "You are working in a rural hospital emergency department with X-ray but no CT. A 71-year-old woman presents with 4 hours of sharp right-sided chest pain and worsening breathlessness. The pain came on suddenly as she bent to lift a bag of potting soil. She has severe COPD with emphysema and uses tiotropium-olodaterol, with home oxygen at night. Her usual daytime oxygen saturation is 92% on room air. She also has hypertension treated with amlodipine. She has had no change in cough or sputum and no fever. She smoked for 50 years and quit 3 years ago. She says this does not feel like her usual flare-ups. She is speaking in short sentences. Her chest is barrel-shaped and hyperresonant on both sides. Breath sounds are quiet throughout and perhaps slightly quieter on the right. The trachea is midline.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "28/minute", bp: "142/84 mmHg", o2sat: "86% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following in her history most raises her pretest probability of a pneumothorax?",
        options: ["Age of 71 years", "Bending to lift a heavy bag", "Hypertension on amlodipine", "Severe emphysematous COPD", "Use of tiotropium-olodaterol"],
        correct: 3,
        explanation:
          "COPD with emphysema is the commonest lung disease behind a secondary spontaneous pneumothorax, because thin-walled diseased lung ruptures into the pleural space, and her disease is severe enough to need home oxygen. Underlying lung disease is also one of the high-risk characteristics that shape treatment. Age raises the risk only through the lung disease that comes with it. Bending and lifting are not recognized triggers. Her inhaler treats the COPD and does not cause a pneumothorax, and hypertension has no link to it.",
        keyFeature: { topic: "chest-pain", n: 4 },
        source: "ptx-review-2024-s85",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of her presentation most favours a pneumothorax over an exacerbation of her COPD?",
        options: ["Breathlessness worse than usual", "Fifty years of past smoking", "Onset while bending to lift", "Speaking in short sentences", "Sudden one-sided sharp pain"],
        correct: 4,
        explanation:
          "Sudden sharp pain on one side with breathlessness is the typical start of a pneumothorax, while an exacerbation of COPD builds over days with more cough, more sputum or a change in its colour, and she has none of those. Her own sense that this is unlike her usual flare-ups supports the difference. Worse breathlessness and speaking in short sentences happen with both conditions and only show how unwell she is. Her smoking history explains her COPD but does not separate the two causes, and bending to lift is not a known trigger.",
        keyFeature: { topic: "chest-pain", n: 3 },
        source: "bts-pleural-2023-s85",
      },
      {
        id: "q3",
        kind: "single",
        update: "Chest X-ray shows a right apical pneumothorax with a visible pleural line, a 1.5 cm rim at the apex and no mediastinal shift. No bullae are seen near the pleural line.",
        prompt: "Which of the following statements about the size of her pneumothorax is most accurate?",
        options: ["It allows discharge with clinic review", "It calls for needle decompression", "It excludes a tension pneumothorax", "It is less important than her symptoms", "It makes oxygen alone sufficient"],
        correct: 3,
        explanation:
          "Under the 2023 BTS approach, the decision to intervene rests on symptoms and on high-risk characteristics such as underlying lung disease and significant hypoxia, not on the size of the rim. She has both, with a saturation of 86% against her usual 92%, so a small rim does not make her safe. Oxygen alone and discharge are options only for a patient with minimal symptoms. Her trachea is midline and her BP is 142/84 mmHg, so there is no tension physiology to decompress, but a small pneumothorax can still enlarge and become a tension pneumothorax in damaged lungs.",
        keyFeature: { topic: "chest-pain", n: 5 },
        source: "ptx-review-2024-s85",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for her pneumothorax?",
        options: ["Ambulatory valve and discharge", "Chest drain and admission", "Needle aspiration then discharge", "Needle decompression at 2nd space", "Transfer for CT before any drain"],
        correct: 1,
        explanation:
          "A symptomatic secondary pneumothorax with hypoxia in a patient with severe emphysema usually needs a chest drain, which removes the air at once and relieves her symptoms, and she should be admitted. An ambulatory valve failed in 46% of patients with secondary pneumothorax in a randomized trial, against 15% with standard care, and discharge after aspiration is unsafe at a saturation of 86%. Needle decompression is for tension physiology, which she does not have. The X-ray shows a clear pleural line with no bullae nearby, so CT is not needed before the drain, and a long transfer would delay it.",
        keyFeature: { topic: "chest-pain", n: 2 },
        source: "ptx-review-2024-s85",
      },
    ],
    sources: [S.bts, S.cheng],
    ...META,
  },
];
