// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const lateDinnerChestPain: OralCase = {
  id: "late-dinner-chest-pain",
  title: "Chest pain after a family dinner",
  blueprint: "cardio",
  alsoCovers: ["id", "procedures"],
  priorityTopic: "chest-pain",
  keyFeatures: [
    { topic: "chest-pain", n: 1 },
    { topic: "chest-pain", n: 2 },
    { topic: "chest-pain", n: 3 },
    { topic: "chest-pain", n: 5 },
  ],
  summary: "A man arrives late at night with severe chest and upper abdominal pain. The first tests look reassuring and the nurse asks about sending him home.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "It is 23:40. A 56 year old man is driven in by his wife with severe chest and upper abdominal pain that started an hour ago. " +
    "You have CT. Thoracic surgery is at a tertiary centre 90 minutes away by road.",
  card: {
    vitals: {
      temperature: "37.6°C oral",
      pulse: "118/minute",
      resp: "26/minute",
      bp: "148/92 mmHg",
      o2sat: "93% on room air",
      weight: "96 kg (212 lb)",
    },
    medications: "Metformin, ramipril, atorvastatin, pantoprazole as needed",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "He ate a large dinner and drank about six glasses of wine at a family party. At 22:30 he began retching hard and vomited three times. " +
        "During the last bout, at about 22:50, he felt a sudden severe pain behind the lower breastbone and in the upper abdomen. It is 9 out of 10 and constant. " +
        "It goes through to his back between the shoulder blades and to the left shoulder. It is worse when he swallows or breathes in. The last vomit had a streak of blood. He has not vomited since the pain began.",
    },
    {
      id: "ros",
      label: "Associated symptoms and review of systems",
      result:
        "He feels short of breath and cannot lie flat because of the pain. No exertional chest pain in the past. No syncope. No leg swelling or calf pain. No cough or fever before tonight. No black stools.",
    },
    {
      id: "antacid",
      label: "What he took at home",
      result:
        "His wife gave him 30 mL of a liquid antacid at 23:05. He says the pain eased a little for about 10 minutes, then came back as bad as before. He took nothing else.",
    },
    {
      id: "pmh",
      label: "Past and family history",
      result:
        "Type 2 diabetes for 9 years. Hypertension. High cholesterol. Reflux treated with pantoprazole when needed. Obesity. No known heart disease. No previous blood clots. His father had a heart attack at 61.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Metformin 1000 mg twice daily. Ramipril 5 mg daily. Atorvastatin 20 mg daily. Pantoprazole 40 mg as needed. No anticoagulants or antiplatelets. No allergies.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "He drives a long haul truck and drove 9 hours yesterday. He smokes 15 cigarettes a day and has for 30 years. He drinks 10 to 12 drinks a week, more on weekends. No drug use.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "\"He was bent over the toilet heaving and heaving. Then he grabbed his chest and screamed. He has never had a pain like this. He has gone grey. Is it his heart?\"",
    },
    {
      id: "general",
      label: "General exam and both arm pressures",
      result:
        "Distressed, sweating and sitting forward. Right arm 148/92, left arm 144/90. Radial and femoral pulses equal. Capillary refill 3 seconds.",
    },
    {
      id: "chest",
      label: "Neck, chest and heart",
      result:
        "Fine crackling under the skin in the left supraclavicular fossa. A crunching sound with each heartbeat at the left sternal border. Reduced breath sounds at the left base. Heart sounds regular, no murmur, no rub. Trachea midline.",
    },
    {
      id: "abdomen",
      label: "Abdomen",
      result: "Epigastric tenderness with voluntary guarding. No rebound. Bowel sounds present. No pulsatile mass.",
    },
    {
      id: "ecg",
      label: "ECG at 10 minutes and repeat at 30 minutes",
      result: "Both show sinus tachycardia at 116 to 120. Normal axis and intervals. No ST elevation or depression. Unchanged between tracings.",
    },
    {
      id: "troponin",
      label: "High sensitivity troponin",
      result: "First sample at 23:50: 6 ng/L. Second sample at 01:50: 7 ng/L. Laboratory 99th percentile 26 ng/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "White cells 15.8 x 10^9/L. Hemoglobin 152 g/L. Platelets 268 x 10^9/L. Lipase 48 U/L (normal under 60). Creatinine 98 µmol/L. Glucose 11.2 mmol/L. Lactate 3.4 mmol/L. Venous pH 7.36.",
    },
    {
      id: "cxr",
      label: "Portable upright chest X ray",
      result:
        "Thin lucent line along the left heart border and air tracking into the left side of the neck. Small left pleural effusion. No pneumothorax. Mediastinum not widened.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result: "No pericardial effusion. Normal left ventricular function. Right ventricle not dilated. Aortic root 3.3 cm. Small left pleural effusion. No free fluid in the abdomen.",
    },
    {
      id: "ct",
      label: "CT chest with IV and water soluble oral contrast",
      result:
        "Oral contrast leaks from the left side of the distal esophagus about 3 cm above the gastroesophageal junction. Pneumomediastinum. Small left hydropneumothorax. No aortic dissection. No pulmonary embolism.",
    },
    {
      id: "later",
      label: "Vitals and ultrasound at 01:40",
      result:
        "Temperature 38.7°C. Pulse 134. BP 84/48 mmHg, mean arterial pressure 60. Resp 32. SpO2 88% on 6 L by nasal prongs. Breath sounds absent over the left lower chest. Ultrasound shows a large left effusion with debris and no lung sliding at the apex.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "23:45",
      text: "The nurse puts him in a monitored bed. He is grey, sweating and holding his chest. She asks what you want done first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What do you do in the first ten minutes, and what are you worried about?",
      seconds: 90,
      modelAnswer: [
        "Monitor, oxygen to keep SpO2 at 92 percent or more, two IVs.",
        "12 lead ECG within 10 minutes of arrival and read it right away.",
        "Blood work with high sensitivity troponin, lipase, lactate and a group and screen. Portable chest X ray and bedside ultrasound.",
        "Lethal causes to keep in mind: acute coronary syndrome, aortic dissection, pulmonary embolism, pneumothorax, tamponade and esophageal rupture.",
        "Check both arm pressures and pulses.",
        "ASA 160 mg chewed if acute coronary syndrome stays likely and there is nothing to suggest dissection or perforation.",
        "Keep him fasting until a surgical cause is excluded.",
      ],
      rubric: ["cp-m1", "cp-p2", "cp-pr2"],
      choices: [
        {
          id: "c-parallel",
          label:
            "I had an ECG done within 10 minutes, put him on a monitor, started two IVs with troponin, lipase and lactate, ordered a portable chest X ray, did a bedside ultrasound and kept him fasting while I took a focused history.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Good. The ECG belongs in the first 10 minutes for any chest pain. Working several lethal causes in parallel is right when the patient looks this sick. " +
            "Keeping him fasting costs nothing while a surgical cause is still possible.",
        },
        {
          id: "c-acs-only",
          label: "I got an ECG, sent a troponin and gave ASA 160 mg and nitroglycerin. I planned to decide on the next step when the troponin came back.",
          next: "s-acs-only",
          quality: "partial",
          feedback:
            "ECG and troponin are right, but you have committed to one diagnosis. He is tachycardic, tachypneic and hypoxic, which a normal troponin will not explain. " +
            "The examiner wanted a chest X ray, bedside ultrasound and a differential that includes dissection, pulmonary embolism, pneumothorax and esophageal rupture.",
        },
        {
          id: "c-gi",
          label: "He has reflux and had been drinking, so I gave him a GI cocktail and planned to reassess in an hour.",
          next: "s-gi",
          quality: "unsafe",
          feedback:
            "This anchors on a benign cause in a man with abnormal vital signs. Every chest pain needs an ECG within 10 minutes. " +
            "Response to an antacid does not separate cardiac or other dangerous pain from reflux.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-acs-only",
      phase: "00:20",
      text:
        "The nurse calls you back. His SpO2 is 90 percent and he says the nitroglycerin did nothing. She asks whether you want a chest X ray. You order it and start to widen your differential.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-gi",
      phase: "00:30",
      text:
        "The nurse is uneasy and does an ECG on her own. It shows sinus tachycardia at 124. His SpO2 has fallen to 90 percent and he is breathing at 30. She asks you to come back and see him now.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "Take me through the history you want. What details matter most here and why?",
      seconds: 75,
      modelAnswer: [
        "What he was doing when it began. Pain that starts during forceful retching or vomiting points to esophageal rupture.",
        "Onset, severity, character, radiation, and what makes it worse. Sudden severe pain to the back, worse with swallowing and breathing.",
        "Blood in the vomit, shortness of breath, syncope, leg symptoms.",
        "Cardiac risk factors: diabetes, hypertension, smoking, family history. PE risk: the long drive, prior clots.",
        "Medications, alcohol and the antacid he took. Partial relief from an antacid is not reassuring.",
        "Collateral from his wife about the onset.",
        "Then examine the neck and chest for crepitus, a mediastinal crunch and a pleural effusion.",
      ],
      rubric: ["cp-h1", "cp-h2", "cp-h3", "cp-h4", "cp-h5", "cp-p1"],
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "00:30",
      text:
        "The ECG shows sinus tachycardia without ischemic change. The first troponin is 6 ng/L. The chest X ray has just been taken. " +
        "The nurse says: \"His pain got better after the antacid at home. He has reflux. If the second troponin is normal can we give him a GI cocktail and let him go?\"",
      next: "q-reassure",
    },
    {
      kind: "question",
      id: "q-reassure",
      phase: "Reassuring tests",
      prompt: "What do you say to the nurse, and what do you do next?",
      seconds: 75,
      modelAnswer: [
        "No. A normal troponin and a brief response to an antacid do not exclude a dangerous cause.",
        "His vital signs are abnormal and the pain began during forceful vomiting.",
        "Crepitus, a mediastinal crunch, a left effusion and air along the heart border mean pneumomediastinum. In this story that is esophageal rupture until proven otherwise.",
        "CT chest with IV contrast and water soluble oral contrast. It also looks for dissection and pulmonary embolism.",
        "Nothing by mouth. No more antacid or oral ASA.",
        "Explain the reasoning to the nurse so the team shares the plan.",
      ],
      rubric: ["cp-m2", "cp-p3", "cp-pr4"],
      choices: [
        {
          id: "c-ct",
          label:
            "I told her the antacid response and one normal troponin do not rule out danger. I showed her the air along the heart border, kept him fasting and ordered a CT chest with IV and water soluble oral contrast.",
          next: "s-ct",
          quality: "strong",
          feedback:
            "Correct. Antacid response, chest wall findings and a single normal test do not exclude serious disease. " +
            "Pneumomediastinum after vomiting is esophageal rupture until proven otherwise. CT with oral contrast is the imaging test of choice and also looks for dissection and pulmonary embolism.",
        },
        {
          id: "c-ctpa",
          label: "I waited for the second troponin and ordered a CT pulmonary angiogram because of his long drive.",
          next: "s-ctpa",
          quality: "partial",
          feedback:
            "Thinking about pulmonary embolism is reasonable, but the story and the X ray point elsewhere. Waiting 2 hours for a troponin delays the diagnosis. " +
            "The examiner wanted a CT with water soluble oral contrast to look for an esophageal leak.",
        },
        {
          id: "c-home",
          label: "I agreed. If the second troponin was normal he could go home with a GI cocktail and a pantoprazole prescription.",
          next: "s-home",
          quality: "unsafe",
          feedback:
            "A normal troponin excludes myocardial infarction only. It says nothing about dissection, pulmonary embolism or rupture. " +
            "Esophageal rupture has a mortality near 30 percent when treatment is delayed beyond 24 hours. Discharging this man could kill him.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ctpa",
      phase: "01:00",
      text:
        "While you wait for the second troponin, the radiologist calls about the CT pulmonary angiogram. There is no embolism but there is pneumomediastinum and a left effusion. He suggests repeating the scan with water soluble oral contrast. You order it.",
      next: "s-ct",
    },
    {
      kind: "say",
      id: "s-home",
      phase: "01:10",
      text:
        "As the nurse goes to tell his wife, she sees he is shivering. His temperature is 38.4°C and his pulse is 130. She refuses to discharge him and calls you back. You review the chest X ray and order a CT with oral contrast.",
      next: "s-ct",
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "CT result",
      text: "The CT shows oral contrast leaking from the left side of the distal esophagus, pneumomediastinum and a small left hydropneumothorax. There is no dissection and no pulmonary embolism.",
      next: "q-manage",
    },
    {
      kind: "question",
      id: "q-manage",
      phase: "Management",
      prompt: "What is your management now?",
      seconds: 90,
      modelAnswer: [
        "Nothing by mouth.",
        "Broad spectrum IV antibiotics that cover aerobes and anaerobes, such as piperacillin tazobactam 4.5 g IV.",
        "IV proton pump inhibitor. Fluids. IV analgesia and an antiemetic.",
        "Do not pass a nasogastric tube blindly. Do not start anticoagulants or antiplatelets now that the cause is known.",
        "Call thoracic surgery at the tertiary centre now, through CritiCall in Ontario. Time to definitive care drives survival.",
        "Reassess vital signs often. He is at high risk of sepsis and an enlarging effusion.",
      ],
      rubric: ["cp-m3", "cp-pr1"],
      choices: [
        {
          id: "c-bundle",
          label:
            "I kept him fasting, gave piperacillin tazobactam 4.5 g IV, IV pantoprazole, fluids and analgesia, and called thoracic surgery at the tertiary centre through CritiCall for urgent transfer.",
          next: "s-turn",
          quality: "strong",
          feedback:
            "Good. Fasting, broad spectrum antibiotics, acid suppression and early surgical contact are the core of early care. " +
            "Mortality is under 10 percent when treatment starts within 24 hours and about 30 percent after that, so the call should not wait for morning.",
        },
        {
          id: "c-local",
          label: "I admitted him to our general surgeon on antibiotics and planned an endoscopy in the morning.",
          next: "s-local",
          quality: "partial",
          feedback:
            "Antibiotics and fasting are right. But a thoracic esophageal rupture with a pleural leak needs a centre that can repair or stent it. " +
            "Waiting for morning endoscopy uses up the window when outcomes are best.",
        },
        {
          id: "c-ng",
          label: "I passed a nasogastric tube to empty his stomach and started heparin in case this was also cardiac.",
          next: "s-ng",
          quality: "unsafe",
          feedback:
            "A blind nasogastric tube can enlarge the tear. Guidelines suggest placing one only under endoscopic guidance. " +
            "Heparin adds bleeding risk with no indication now that the troponin is normal and the cause is known.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-local",
      phase: "01:30",
      text:
        "Your general surgeon calls back. She says this needs a thoracic surgeon tonight and asks you to arrange transfer. You call CritiCall.",
      next: "s-turn",
    },
    {
      kind: "say",
      id: "s-ng",
      phase: "01:30",
      text:
        "The nurse questions the order. As the tube is advanced he gags and his pain becomes much worse. You remove it, stop the heparin, and call thoracic surgery through CritiCall.",
      next: "s-turn",
    },
    {
      kind: "say",
      id: "s-turn",
      phase: "01:40",
      text:
        "The transport team is 60 minutes away. He is now hot and confused. Temperature 38.7°C, pulse 134, BP 84/48 mmHg, resp 32, SpO2 88% on 6 L. " +
        "Breath sounds are absent over the left lower chest. Your ultrasound shows a large left effusion with debris.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "Deterioration",
      prompt: "He is getting worse. What is happening and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Septic shock from mediastinitis, with a growing left hydropneumothorax.",
        "High flow oxygen. Crystalloid boluses toward 30 mL/kg, about 3 L, with reassessment after each.",
        "Norepinephrine for a mean arterial pressure under 65 after fluid. A peripheral start is acceptable.",
        "Left chest tube now. Send the fluid for pH, amylase, Gram stain and culture.",
        "Drain the chest before positive pressure ventilation if intubation is needed. Push dose vasopressor ready.",
        "Confirm the antibiotic has gone in. Blood cultures. Update the receiving surgeon.",
      ],
      rubric: ["cp-p4", "cp-m4", "cp-pr2"],
      choices: [
        {
          id: "c-drain",
          label:
            "I gave crystalloid boluses with reassessment, started norepinephrine for a mean arterial pressure under 65, put in a left chest tube and sent the fluid for pH, amylase and culture, and planned the airway after the chest was drained.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Correct. Source control of the pleural space and shock resuscitation come first. " +
            "Draining before intubation avoids turning a leak into a tension pneumothorax under positive pressure. Murky fluid with a low pH and high amylase supports an esophageal leak.",
        },
        {
          id: "c-intubate",
          label: "He was hypoxic and confused, so I intubated him first and planned the chest tube afterwards.",
          next: "s-intubate",
          quality: "partial",
          feedback:
            "He may need intubation, but induction in septic shock without pressors, and positive pressure before the chest is drained, are both dangerous. " +
            "The examiner wanted fluid, norepinephrine and a chest tube first, with a vasopressor drawn up for induction.",
        },
        {
          id: "c-wait",
          label: "I gave a litre of fluid and decided to let the transport team and the thoracic surgeon manage the chest.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "He is in septic shock with an undrained infected pleural collection. Waiting an hour plus the drive is not safe. " +
            "You must resuscitate and drain before he leaves.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-intubate",
      phase: "01:55",
      text:
        "After induction his BP falls to 58/30. Peak airway pressures climb and the left chest is silent. You insert a left chest tube. Brown fluid and air drain. His pressure rises to 92/54 on norepinephrine.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "02:05",
      text:
        "Twenty minutes later his BP is 70/38 and his SpO2 is 82 percent. The respiratory therapist asks for help. You start norepinephrine and insert a left chest tube. Brown fluid with food particles drains.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "The tertiary centre accepts him. How do you get him there safely?",
      seconds: 75,
      modelAnswer: [
        "Critical care transport with a team able to manage the airway, vasopressors and a chest tube.",
        "Stable before departure as far as possible. Norepinephrine on a pump. Chest tube secured to an underwater seal or valve, never clamped.",
        "Antibiotic given and the time documented. Fasting. Two working IVs.",
        "Images pushed to the receiving centre. Copies of notes, labs and the pleural fluid results.",
        "Physician to physician handover with the thoracic surgeon and the transport team.",
        "Agree what to do if he deteriorates on the road.",
      ],
      rubric: ["cp-pr6", "cp-pr1"],
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "His wife",
      prompt: "His wife says: \"The nurse said it was probably reflux and he might go home. Now you are sending him to another hospital. Is it his heart?\" What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Sit down in a quiet space. Check what she understands.",
        "Plain language: the forceful vomiting tore the food pipe. It is not his heart.",
        "This is serious. Infection has spread into his chest and he is on drugs to support his blood pressure.",
        "He needs a surgeon who repairs this, at the tertiary centre, tonight.",
        "Acknowledge that the early impression was different and explain that tests changed the picture.",
        "Tell her how to get there and who will call her.",
      ],
      rubric: ["cp-pr3"],
      next: "q-lessons",
    },
    {
      kind: "question",
      id: "q-lessons",
      phase: "Debrief",
      prompt: "At the team debrief, the nurse asks what made this hard to catch. What do you say?",
      seconds: 60,
      modelAnswer: [
        "The first tests answered only the cardiac question. A normal ECG and troponin do not exclude other lethal causes.",
        "Antacid response and a history of reflux pulled the team toward a benign cause.",
        "The key clue was in the history: the pain began during forceful vomiting.",
        "Abnormal vital signs should stop a discharge plan.",
        "Ask every time: what else could kill this patient tonight?",
        "Thank the nurse who escalated. Speaking up is part of safe care.",
      ],
      rubric: ["cp-pr5"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "He has a primary repair and drainage at the tertiary centre at 06:00, about seven hours after the tear. He leaves the ICU on day 6 and goes home on day 19. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cp-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks what he was doing when the pain began and establishes that it started during forceful retching after a large meal and alcohol.",
      points: 2,
      teaching: "Spontaneous esophageal rupture follows a vomiting effort. Without that question the diagnosis is easily missed.",
      source: "wses-esophagus",
    },
    {
      id: "cp-h2",
      competency: "assessment",
      criterion: "history",
      text: "Characterizes the pain: sudden onset, severity, radiation to the back, worse with swallowing and breathing, and blood in the vomit.",
      points: 2,
      teaching: "A careful description of the pain separates dangerous from benign causes better than any single test.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about risk factors for acute coronary syndrome and pulmonary embolism: diabetes, hypertension, smoking, family history, the long drive and prior clots.",
      points: 2,
      teaching: "Risk factors shift the pretest probability of each lethal cause and shape which tests you order.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the antacid, alcohol and reflux history and does not treat a brief response to the antacid as reassuring.",
      points: 1,
      teaching: "Response to a treatment does not establish the cause. Relief after nitroglycerin is not diagnostic of ischemia, and relief after an antacid does not prove reflux.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-h5",
      competency: "communication",
      criterion: "history",
      text: "Gets collateral from his wife about how the pain started.",
      points: 1,
      teaching: "A witness to the onset often gives the single most useful fact in the history.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for subcutaneous emphysema in the neck, a mediastinal crunch and a pleural effusion, and compares both arm pressures.",
      points: 2,
      teaching: "Neck crepitus and a crunch with the heartbeat mean air in the mediastinum. Equal arm pressures make dissection less likely but do not exclude it.",
      source: "wses-esophagus",
    },
    {
      id: "cp-p2",
      competency: "assessment",
      criterion: "physical",
      text: "States a differential of lethal causes early: acute coronary syndrome, aortic dissection, pulmonary embolism, pneumothorax, tamponade and esophageal rupture.",
      points: 2,
      critical: true,
      teaching: "In undifferentiated chest pain, name and actively work up each life threat before settling on a benign cause.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes pneumomediastinum and a left effusion on the chest X ray and interprets the CT contrast leak as esophageal rupture.",
      points: 2,
      teaching: "Spontaneous rupture usually tears the left side of the distal esophagus. A left effusion with mediastinal air fits that pattern.",
      source: "wses-esophagus",
    },
    {
      id: "cp-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes septic shock and an enlarging infected hydropneumothorax from the vital signs, exam and ultrasound.",
      points: 1,
      teaching: "Fever, hypotension and a raised lactate after a leak mean mediastinitis. The pleural collection is the source to drain.",
      source: "ssc",
    },
    {
      id: "cp-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Gets an ECG within 10 minutes, monitors, places two IVs and sends troponin, lipase and lactate.",
      points: 2,
      teaching: "An ECG within 10 minutes of arrival is the first test for every adult with acute chest pain.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-m2",
      competency: "management",
      criterion: "management",
      text: "Orders CT chest with IV and water soluble oral contrast instead of discharging on a normal troponin.",
      points: 2,
      critical: true,
      teaching: "CT with oral contrast is the imaging test of choice for suspected esophageal perforation. A normal troponin excludes only myocardial infarction.",
      source: "wses-esophagus",
    },
    {
      id: "cp-m3",
      competency: "management",
      criterion: "management",
      text: "Keeps him fasting and gives broad spectrum antibiotics covering aerobes and anaerobes, an IV proton pump inhibitor, fluids and analgesia. Avoids a blind nasogastric tube.",
      points: 3,
      critical: true,
      teaching: "Early care for esophageal perforation is nothing by mouth, broad spectrum antibiotics and acid suppression. A nasogastric tube should be placed only under endoscopic guidance.",
      source: "wses-esophagus",
    },
    {
      id: "cp-m4",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives crystalloid toward 30 mL/kg, starts norepinephrine for a mean arterial pressure under 65 and inserts a left chest tube before positive pressure ventilation.",
      points: 2,
      teaching: "Treat septic shock and drain the infected pleural space. Positive pressure before drainage can turn a leak into a tension pneumothorax.",
      source: "ssc",
    },
    {
      id: "cp-pr1",
      competency: "disposition",
      criterion: "process",
      text: "Calls thoracic surgery at the tertiary centre as soon as the diagnosis is made and arranges transfer the same night.",
      points: 2,
      critical: true,
      teaching: "Mortality is under 10 percent when perforation is treated within 24 hours and about 30 percent after that. Delay to treatment is a major, avoidable driver of death.",
      source: "wses-esophagus",
    },
    {
      id: "cp-pr2",
      competency: "leadership",
      criterion: "process",
      text: "Works several diagnoses in parallel, reassesses vital signs often and reprioritizes when he deteriorates.",
      points: 2,
      teaching: "Sick chest pain patients need a parallel workup and frequent reassessment, not one test at a time.",
      source: "ssc",
    },
    {
      id: "cp-pr3",
      competency: "communication",
      criterion: "process",
      text: "Explains the diagnosis and the transfer to his wife in plain language and acknowledges the change from the first impression.",
      points: 1,
      teaching: "Families remember the first explanation. Correct it openly, in plain words, and say what happens next.",
      source: "aha-chest-pain",
    },
    {
      id: "cp-pr4",
      competency: "communication",
      criterion: "process",
      text: "Explains to the nurse why the antacid response and a normal troponin do not rule out danger, so the team shares one plan.",
      points: 1,
      teaching: "Saying your reasoning out loud lets the team catch errors such as premature closure and keeps everyone working toward the same diagnosis.",
      source: "croskerry",
    },
    {
      id: "cp-pr5",
      competency: "leadership",
      criterion: "process",
      text: "Names the cognitive traps at the debrief, anchoring on a benign cause and false reassurance from single normal tests, and thanks the nurse who escalated.",
      points: 1,
      teaching: "Anchoring and premature closure are common causes of diagnostic error in emergency medicine. Naming them at a debrief helps the team catch the next one.",
      source: "croskerry",
    },
    {
      id: "cp-pr6",
      competency: "disposition",
      criterion: "process",
      text: "Prepares a safe transfer: critical care escort, vasopressor on a pump, secured unclamped chest tube, antibiotic time recorded, images sent and a direct handover.",
      points: 1,
      teaching: "A transfer is only as safe as its preparation. The receiving surgeon needs the images and the timeline before the patient arrives.",
      source: "wses-esophagus",
    },
  ],
  sources: [
    {
      id: "aha-chest-pain",
      citation:
        "Gulati M, Levy PD, Mukherjee D, et al. 2021 AHA/ACC/ASE/CHEST/SAEM/SCCT/SCMR Guideline for the Evaluation and Diagnosis of Chest Pain. Circulation. 2021.",
      url: "https://doi.org/10.1161/CIR.0000000000001029",
    },
    {
      id: "wses-esophagus",
      citation: "Chirica M, Kelly MD, Siboni S, et al. Esophageal emergencies: WSES guidelines. World Journal of Emergency Surgery. 2019.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/",
    },
    {
      id: "ssc",
      citation: "Evans L, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine. 2021.",
      url: "https://pubmed.ncbi.nlm.nih.gov/34605781/",
    },
    {
      id: "croskerry",
      citation: "Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Academic Medicine. 2003.",
      url: "https://pubmed.ncbi.nlm.nih.gov/12915363/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
