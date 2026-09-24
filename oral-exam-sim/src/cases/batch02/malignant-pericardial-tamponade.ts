// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const malignantPericardialTamponade: OralCase = {
  id: "malignant-pericardial-tamponade",
  title: "Breathless woman on cancer treatment",
  blueprint: "cardio",
  alsoCovers: ["procedures", "ethics"],
  priorityTopic: "shock",
  keyFeatures: [
    { topic: "shock", n: 5 },
    { topic: "shock", n: 6 },
    { topic: "sob", n: 2 },
  ],
  summary: "A 58 year old woman with metastatic lung cancer arrives with worsening breathlessness and low blood pressure.",
  durationMinutes: 15,
  stem:
    "You are working evenings at a community hospital in Ontario with an ICU and a cardiologist on call from home, about 45 minutes away. " +
    "There is no cardiac surgery on site. You have a bedside ultrasound machine with a phased array probe. " +
    "Linh Tran is 58 years old and weighs 61 kg. She has metastatic lung adenocarcinoma and has been more short of breath for 2 weeks. Tonight she nearly fainted getting off the toilet. " +
    "Triage vitals: heart rate 124, blood pressure 88/68, respiratory rate 28, SpO2 92 percent on room air, temperature 37.2. CTAS 2. " +
    "The nurse says: 'She is getting worse in the chair. Her neck veins are huge. Her daughter is here and keeps asking if her mom is dying.'",
  findings: [
    {
      id: "history",
      label: "History",
      result:
        "Two weeks of breathlessness, now at rest. Cannot lie flat. Chest heaviness. Near syncope tonight. No fever. No leg swelling. No hemoptysis.",
    },
    {
      id: "onc",
      label: "Oncology history and medications",
      result:
        "Stage IV lung adenocarcinoma diagnosed 8 months ago with bone and liver metastases. On immunotherapy, last dose 2 weeks ago. " +
        "Dalteparin 150 IU/kg daily for a leg DVT 3 months ago, reduced from 200 IU/kg after the first month. Last dose at 08:00 today. Hydromorphone as needed for bone pain. No written advance directive.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Anxious, sitting forward, cool hands. JVP to the angle of the jaw. Heart sounds muffled. Chest clear except reduced air entry at the left base. " +
        "Pulsus paradoxus 24 mmHg. Alert and oriented.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result: "Sinus tachycardia at 124. Low voltage in the limb leads. Electrical alternans in V2 to V4. No ST elevation.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result:
        "Large circumferential pericardial effusion up to 2.8 cm. Right atrial collapse for more than a third of systole. Right ventricular free wall collapse in diastole. " +
        "IVC 2.4 cm with no respiratory variation. The heart swings in the fluid. " +
        "Largest pocket closest to the probe is at the apex, 2.4 cm deep with no lung in the path. Subxiphoid pocket is 1.9 cm with the left lobe of the liver in the way.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Enlarged globular cardiac silhouette. Small left pleural effusion. Known right upper lobe mass. No pneumothorax.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 104 g/L. Platelets 188 x 10^9/L. INR 1.1. aPTT 31 s. Creatinine 96 µmol/L. Potassium 4.0 mmol/L. Lactate 3.2 mmol/L. " +
        "High sensitivity troponin T 18 ng/L. TSH normal.",
    },
    {
      id: "daughter",
      label: "Collateral from her daughter",
      result:
        "Her daughter Mai says her mother wants to be at Mai's wedding in 6 weeks. Her oncologist talked about 'months to a year'. " +
        "The family has not discussed resuscitation. Mai says 'Please do not let her suffer, but she is a fighter.'",
    },
    {
      id: "fluid",
      label: "Pericardial fluid results",
      result: "Hemorrhagic fluid. Hematocrit 0.06, far lower than blood. Protein 52 g/L. LDH high. Cytology pending.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text:
        "She is sitting forward, breathing fast. Her pressure on the monitor is 86/68. The nurse has one IV in. The ultrasound machine is at the bedside.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First ten minutes",
      prompt: "What is your working diagnosis and what are your first actions?",
      seconds: 90,
      modelAnswer: [
        "Cardiac tamponade from a malignant effusion. Obstructive shock.",
        "Clinical diagnosis supported by echo. RA systolic and RV diastolic collapse with a plethoric IVC.",
        "Differential includes PE, which is common in cancer, and a massive pleural effusion.",
        "Keep her upright. Oxygen. Second IV. Blood work including coagulation.",
        "Avoid diuretics, nitrates and positive pressure ventilation.",
        "Plan urgent pericardiocentesis and call cardiology now.",
      ],
      rubric: ["tam-a1", "tam-a2", "tam-r1"],
      choices: [
        {
          id: "c-tamponade",
          label: "I called it tamponade from the echo findings and exam, sat her up, avoided anything that lowers preload and called cardiology while I set up for pericardiocentesis.",
          next: "q-temporize",
          quality: "strong",
          feedback:
            "Correct. Tamponade is a clinical diagnosis. Hypotension, raised JVP, pulsus paradoxus over 10 mmHg and chamber collapse on echo make it clear. Planning drainage early is the key step.",
        },
        {
          id: "c-ct",
          label: "I ordered a CT pulmonary angiogram to look for PE since she has cancer and a DVT history.",
          next: "s-ct",
          quality: "partial",
          feedback:
            "PE is a fair differential. But her echo already shows tamponade physiology. Lying flat in the scanner can decompensate her. Treat the obvious obstructive cause first.",
        },
        {
          id: "c-lasix",
          label: "I gave furosemide 40 mg IV for her raised JVP and orthopnea.",
          next: "s-lasix",
          quality: "unsafe",
          feedback:
            "A tamponade heart is preload dependent. Diuretics lower filling pressure and can cause collapse. The raised JVP is from pericardial pressure, not fluid overload.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In the CT room",
      text:
        "As she lies flat on the table she becomes agitated and her pressure falls to 72/60. The technologist calls you. You bring her back to resus sitting up. Your echo is unchanged.",
      next: "q-temporize",
    },
    {
      kind: "say",
      id: "s-lasix",
      phase: "Twenty minutes later",
      text: "Her pressure is 74/62 and she is making urine. She is paler and more anxious. The nurse asks whether you meant to give the diuretic.",
      next: "q-temporize",
    },
    {
      kind: "question",
      id: "q-temporize",
      phase: "Buying time",
      prompt: "The cardiologist is 45 minutes away. What can you do to support her in the meantime?",
      seconds: 60,
      modelAnswer: [
        "A modest fluid bolus of 250 to 500 mL may raise filling pressure. Large volumes can worsen tamponade.",
        "Norepinephrine as a short bridge if she stays hypotensive.",
        "Avoid intubation. Positive pressure lowers venous return and can cause arrest.",
        "Hold dalteparin. Note the last dose at 08:00. It does not stop an emergency drain.",
        "Prepare the pericardiocentesis kit and drain now so you can act if she worsens.",
      ],
      rubric: ["tam-r2", "tam-m1"],
      next: "q-goals",
    },
    {
      kind: "question",
      id: "q-goals",
      phase: "Goals of care",
      prompt: "She is alert and asks what is happening. Her daughter asks if you should make her mother 'DNR'. How do you handle this?",
      seconds: 90,
      modelAnswer: [
        "She is capable. She makes her own decisions. Talk to her directly.",
        "Explain the fluid around the heart, the drain and the risks in plain language.",
        "Explore her goals. Being at the wedding matters. Drainage often gives quick relief even in advanced cancer.",
        "Ask about CPR and intubation now, while she can decide.",
        "Invite the daughter in with her permission. Under the Health Care Consent Act a family substitute decision maker only decides if she becomes incapable.",
        "Document the conversation and the plan.",
      ],
      rubric: ["tam-p1", "tam-c1"],
      choices: [
        {
          id: "c-patient",
          label: "I spoke with her directly. She wants the fluid drained and ICU care but would not want CPR or a breathing tube. I consented her and documented it with her daughter present.",
          next: "s-worse",
          quality: "strong",
          feedback:
            "Excellent. A capable patient decides for herself. Drainage is a proportionate, often effective treatment even in advanced cancer. Her wishes about CPR and intubation now guide you if she worsens.",
        },
        {
          id: "c-daughter",
          label: "I discussed code status with her daughter in the hallway as the substitute decision maker.",
          next: "s-daughter",
          quality: "partial",
          feedback:
            "The daughter is not the decision maker while her mother is capable. Talking outside the room excludes the person who matters most. Go to the patient.",
        },
        {
          id: "c-futile",
          label: "I told them that with metastatic cancer a drain would not help and offered comfort care.",
          next: "s-futile",
          quality: "unsafe",
          feedback:
            "That is not true and it takes the choice away from her. Pericardiocentesis often gives fast relief and weeks to months of good life. Offer the procedure and let her decide.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-daughter",
      phase: "Back in the room",
      text: "Mrs. Tran overhears part of the conversation and asks why you are talking about her and not to her. You apologize and speak with her directly. She wants the drain but does not want CPR or a breathing tube.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-futile",
      phase: "Five minutes later",
      text:
        "Her daughter is upset and says the oncologist told them treatment was working. Mrs. Tran asks, 'Is there really nothing you can do?' You correct yourself, explain the drain and she consents. She does not want CPR or a breathing tube.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "Twenty minutes in",
      text:
        "Her pressure is 70/58 despite 500 mL of fluid and norepinephrine at 0.1 mcg/kg/min. Heart rate 138. She is drowsy and hard to engage. The cardiologist is still 25 minutes away.",
      next: "q-procedure",
    },
    {
      kind: "question",
      id: "q-procedure",
      phase: "Pericardiocentesis",
      prompt: "What do you do now? If you drain, take me through how.",
      seconds: 120,
      modelAnswer: [
        "Do the pericardiocentesis now. She is peri-arrest and consented.",
        "Ultrasound guided. Choose the largest pocket closest to the skin with no lung, liver or vessel in the path. Here the apical window.",
        "Sterile prep, local anaesthetic. 18 gauge needle in plane, continuous aspiration. Go over the top of the rib. If you use a parasternal window, stay well lateral to the sternum to avoid the internal mammary artery.",
        "Confirm the needle is in the pericardium with agitated saline on echo before dilating.",
        "Seldinger technique to a pigtail catheter. Drain until pressure improves. Removing 100 to 200 mL often reverses tamponade.",
        "Monitor for arrhythmia, pneumothorax and ventricular puncture.",
      ],
      rubric: ["tam-m2", "tam-m3", "tam-r3"],
      choices: [
        {
          id: "c-us",
          label: "I did an ultrasound guided apical pericardiocentesis in plane, confirmed with agitated saline and placed a pigtail drain.",
          next: "s-drained",
          quality: "strong",
          feedback:
            "Well done. Ultrasound guidance from the best window cuts complications to a few percent. The apical pocket avoids the liver. Agitated saline confirms position before you dilate.",
        },
        {
          id: "c-blind",
          label: "I did a blind subxiphoid approach aiming toward the left shoulder.",
          next: "s-blind",
          quality: "partial",
          feedback:
            "The landmark subxiphoid approach is a last resort in arrest without ultrasound. You had an echo showing the liver in that path. Guided drainage from the best window is safer.",
        },
        {
          id: "c-wait",
          label: "I increased the norepinephrine, gave another litre of fluid and waited for the cardiologist to drain her.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "She is peri-arrest from a mechanical problem that only drainage can fix. Emergency physicians must be able to perform this. More fluid can make things worse.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-blind",
      phase: "During the procedure",
      text:
        "The needle draws blood tinged fluid at 7 cm but she winces and the nurse sees a run of ventricular ectopy. You pull back, bring the probe over and redirect under guidance through the apical window. Agitated saline confirms the pericardial space.",
      next: "s-drained",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Ten minutes later",
      text:
        "She stops responding. The cuff reads 54 systolic. The nurse says her pulse is barely palpable. You grab the kit and perform an ultrasound guided apical pericardiocentesis.",
      next: "s-drained",
    },
    {
      kind: "say",
      id: "s-drained",
      phase: "After drainage",
      text:
        "You remove 180 mL of dark red fluid. Her pressure climbs to 106/72 and her heart rate falls to 104. She opens her eyes and says she can breathe. A pigtail drain is in place. The fluid in the syringe does not clot.",
      next: "q-confirm",
    },
    {
      kind: "question",
      id: "q-confirm",
      phase: "After the drain",
      prompt: "The fluid is bloody. How do you know you are not in the ventricle? What do you do next?",
      seconds: 75,
      modelAnswer: [
        "Clinical improvement after drainage supports pericardial position.",
        "Agitated saline seen in the pericardium, not the ventricle.",
        "Pericardial blood does not clot. Fluid hematocrit much lower than blood.",
        "Chest X ray for pneumothorax and catheter position.",
        "Send fluid for cell count, protein, LDH, glucose, culture and cytology.",
        "Leave the drain in. Hold dalteparin. Watch for pericardial decompression syndrome.",
      ],
      rubric: ["tam-a3", "tam-m4"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "The cardiologist arrives. Where does she go and what is the plan for the next few days?",
      seconds: 60,
      modelAnswer: [
        "ICU or CCU with the drain in place.",
        "Extended catheter drainage reduces recurrence. Keep the drain until output falls to about 30 mL or less in 24 hours.",
        "Malignant effusions recur often. Consider pericardial window or other options with cardiology and surgery.",
        "Involve oncology and palliative care.",
        "Plan when to restart anticoagulation with the team.",
        "Code status clearly documented and handed over.",
      ],
      rubric: ["tam-d1", "tam-c2"],
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "The family",
      prompt: "Mai asks you in private: 'Does this mean the cancer is getting worse? Will she make it to my wedding?' What do you say?",
      seconds: 60,
      modelAnswer: [
        "Check first that her mother is happy for you to share information.",
        "Be honest. A malignant effusion usually means the cancer has spread to the lining of the heart.",
        "Many people feel much better after drainage. The oncologist is best placed to talk about time.",
        "Avoid false reassurance or a specific number.",
        "Offer palliative care support and help with the wedding goal.",
      ],
      rubric: ["tam-c3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She goes to the CCU with her drain in and her goals documented. Her daughter is at the bedside. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "tam-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Diagnoses cardiac tamponade from hypotension, raised JVP, pulsus paradoxus and echo findings.",
      points: 3,
      critical: true,
      teaching: "Tamponade is a clinical diagnosis. Pulsus paradoxus over 10 mmHg, RA systolic and RV diastolic collapse and a plethoric IVC confirm it.",
      source: "esc-pericardial",
    },
    {
      id: "tam-a2",
      competency: "assessment",
      criterion: "approach",
      text: "Considers PE and pleural effusion but does not delay treatment for further imaging.",
      points: 1,
      teaching: "Cancer patients get PE too. But an echo showing tamponade physiology in a hypotensive patient should drive action.",
      source: "ase-pericardial",
    },
    {
      id: "tam-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Avoids diuretics, nitrates and positive pressure ventilation.",
      points: 2,
      teaching: "Tamponade is preload dependent. Anything that lowers venous return can cause arrest.",
      source: "esc-pericardial",
    },
    {
      id: "tam-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Uses a modest fluid bolus of 250 to 500 mL and a vasopressor only as a bridge to drainage.",
      points: 1,
      teaching: "Small boluses can help a hypovolemic patient. Large volumes raise pericardial pressure. Only drainage fixes the problem.",
      source: "esc-pericardial",
    },
    {
      id: "tam-m1",
      competency: "management",
      criterion: "plan",
      text: "Holds dalteparin and recognizes that recent LMWH does not prevent emergency drainage.",
      points: 1,
      teaching: "Bleeding risk rises with anticoagulation, but a peri-arrest tamponade needs drainage now.",
      source: "esc-pericardial",
    },
    {
      id: "tam-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Obtains consent and goals of care from the capable patient herself.",
      points: 3,
      critical: true,
      teaching: "Under the Ontario Health Care Consent Act a capable patient decides. Family become decision makers only if she is incapable.",
      source: "hcca",
    },
    {
      id: "tam-c1",
      competency: "communication",
      criterion: "plan",
      text: "Offers pericardiocentesis as a proportionate treatment and does not assume futility because of cancer.",
      points: 2,
      teaching: "Drainage relieves symptoms fast and can give weeks to months of good life. The choice belongs to the patient.",
      source: "esc-pericardial",
    },
    {
      id: "tam-m2",
      competency: "management",
      criterion: "plan",
      text: "Performs emergency pericardiocentesis without waiting when she is peri-arrest.",
      points: 3,
      critical: true,
      teaching: "Obstructive shock from tamponade is reversible in minutes. Waiting for a consultant is not safe when the patient is failing.",
      source: "esc-pericardial",
    },
    {
      id: "tam-m3",
      competency: "management",
      criterion: "plan",
      text: "Uses ultrasound guidance and selects the largest pocket closest to the skin with no structure in the path.",
      points: 2,
      teaching: "Echo guided drainage has a low complication rate. The best window varies. Subxiphoid is not always best.",
      source: "ase-pericardial",
    },
    {
      id: "tam-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Confirms needle position with agitated saline before dilating and places a pigtail catheter.",
      points: 1,
      teaching: "Agitated saline in the pericardial space confirms position. Dilating into the ventricle is a catastrophe.",
      source: "ase-pericardial",
    },
    {
      id: "tam-a3",
      competency: "assessment",
      criterion: "data",
      text: "Explains how to tell pericardial blood from ventricular blood and orders a post procedure chest X ray.",
      points: 1,
      teaching: "Defibrinated pericardial blood does not clot and has a lower hematocrit. Clinical improvement is the best sign.",
      source: "esc-pericardial",
    },
    {
      id: "tam-m4",
      competency: "management",
      criterion: "data",
      text: "Sends pericardial fluid for cell count, protein, LDH, glucose, culture and cytology.",
      points: 1,
      teaching: "Cytology confirms malignant effusion and guides oncology treatment. Infection is rare but important.",
      source: "esc-pericardial",
    },
    {
      id: "tam-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to ICU or CCU with extended drainage and involves oncology and palliative care.",
      points: 2,
      teaching: "Malignant effusions recur often. Extended catheter drainage and a plan for recurrence are standard.",
      source: "esc-pericardial",
    },
    {
      id: "tam-c2",
      competency: "communication",
      criterion: "plan",
      text: "Hands over code status and the patient's goals clearly to the admitting team.",
      points: 1,
      teaching: "Goals discussed in the ED are lost if not documented and handed over.",
      source: "hcca",
    },
    {
      id: "tam-c3",
      competency: "communication",
      criterion: "plan",
      text: "Answers the daughter honestly after confirming the patient's permission, without false reassurance.",
      points: 1,
      teaching: "Privacy first, then honesty. Leave precise prognosis to the oncologist but do not avoid the truth.",
      source: "hcca",
    },
  ],
  sources: [
    {
      id: "esc-pericardial",
      citation: "Adler Y, et al. 2015 ESC Guidelines for the diagnosis and management of pericardial diseases. European Heart Journal. 2015.",
      url: "https://academic.oup.com/eurheartj/article/36/42/2921/2293375",
    },
    {
      id: "ase-pericardial",
      citation: "Klein AL, et al. American Society of Echocardiography clinical recommendations for multimodality cardiovascular imaging of patients with pericardial disease. Journal of the American Society of Echocardiography. 2013.",
    },
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A.",
      url: "https://www.ontario.ca/laws/statute/96h02",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
