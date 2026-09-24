// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const completeHeartBlockPacing: OralCase = {
  id: "complete-heart-block-pacing",
  title: "Slow pulse after two faints",
  blueprint: "cardio",
  alsoCovers: ["resus", "procedures"],
  summary: "A 79 year old man with two faints at home arrives pale, slow and hypotensive at a community hospital.",
  durationMinutes: 15,
  stem:
    "You are the emergency physician at a 200 bed community hospital in eastern Ontario. " +
    "There is a CCU, a general internist on call and a transcutaneous pacer on the resuscitation cart. " +
    "Cardiology is by phone only. Permanent pacemakers are inserted at a regional centre 90 minutes away by land. " +
    "Walter Brennan is 79 years old. He fainted twice at home this morning. " +
    "Triage vitals: heart rate 34, blood pressure 76/42, respiratory rate 20, SpO2 94 percent on room air, temperature 36.6, capillary glucose 6.4 mmol/L. CTAS 1. " +
    "The paramedic says: 'He was grey on the kitchen floor. We put pads on and gave 500 mL of saline. His pressure has not moved.'",
  findings: [
    {
      id: "history",
      label: "History",
      result:
        "Three days of fatigue and lightheadedness. Two brief faints today with no warning. No chest pain. Mild breathlessness walking to the bathroom. " +
        "No tick bites or rash. No vomiting. No new medications.",
    },
    {
      id: "meds",
      label: "Past history and medications",
      result:
        "Hypertension and dyslipidemia. Bisoprolol 2.5 mg daily for 2 years. Amlodipine 5 mg daily. Ramipril 5 mg daily. Atorvastatin 20 mg daily. " +
        "No digoxin. No known kidney disease. No allergies.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Pale, cool hands, capillary refill 4 seconds. Drowsy but oriented to person and place. " +
        "Intermittent cannon a waves in the neck. Fine crackles at both bases. Soft systolic murmur. Abdomen benign. No focal neurological deficit.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result:
        "Regular P waves at 86 per minute with no relationship to the QRS complexes. Regular wide escape rhythm at 34 per minute. " +
        "QRS 150 ms with a right bundle branch block and left anterior fascicular morphology. No ST elevation. Peaked T waves are absent.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Potassium 4.7 mmol/L. Sodium 138 mmol/L. Creatinine 131 µmol/L (baseline 98). Magnesium 0.86 mmol/L. Calcium normal. " +
        "High sensitivity troponin T 24 ng/L. Hemoglobin 129 g/L. TSH 2.3 mIU/L.",
    },
    {
      id: "vbg",
      label: "Venous blood gas and lactate",
      result: "pH 7.31. pCO2 38 mmHg. Bicarbonate 19 mmol/L. Lactate 3.6 mmol/L.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result:
        "Mildly reduced left ventricular function with no regional wall motion abnormality. Normal right ventricle. No pericardial effusion. " +
        "IVC 2.1 cm with less than 50 percent collapse. B lines at both bases.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Mild pulmonary vascular congestion. No consolidation. No pneumothorax. Pacer pads in place front and back.",
    },
    {
      id: "daughter",
      label: "Collateral from his daughter",
      result:
        "He lives alone and still drives and golfs. He has always said he wants full treatment. She holds his power of attorney for personal care but says he makes his own decisions.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text:
        "He is on the monitor with pads on. The nurse has one 18 gauge IV in the left forearm. He answers questions slowly. The rhythm on the monitor is slow and wide.",
      next: "q-initial",
    },
    {
      kind: "question",
      id: "q-initial",
      phase: "First five minutes",
      prompt: "Tell me what you see on the rhythm strip and what you do in the next five minutes.",
      seconds: 90,
      modelAnswer: [
        "Third degree AV block with a wide ventricular escape at 34 and signs of shock.",
        "Second large bore IV, 12 lead ECG, blood work including potassium and a blood gas.",
        "Atropine 1 mg IV, repeat every 3 to 5 minutes to a maximum of 3 mg.",
        "Expect atropine to fail with a wide escape. Infranodal block rarely responds.",
        "Prepare transcutaneous pacing and an epinephrine infusion at the same time. Do not wait for atropine to fail.",
        "Screen quickly for hyperkalemia, drug toxicity and ischemia.",
      ],
      rubric: ["chb-a1", "chb-r1", "chb-r2"],
      choices: [
        {
          id: "c-parallel",
          label: "I called it third degree block with shock, gave atropine 1 mg IV and had the pacer and an epinephrine infusion set up at the same time.",
          next: "s-atropine",
          quality: "strong",
          feedback:
            "That is what the examiner wanted. Atropine 1 mg every 3 to 5 minutes to 3 mg is reasonable but likely to fail with a wide escape. Running pacing and a chronotrope in parallel saves minutes in a patient in shock.",
        },
        {
          id: "c-serial",
          label: "I gave atropine 0.5 mg every 3 minutes up to 3 mg and planned to pace only if that failed.",
          next: "s-slow",
          quality: "partial",
          feedback:
            "Atropine is a reasonable first drug but the current adult dose is 1 mg. A serial approach wastes time. Infranodal block with a wide escape usually does not respond, so pacing should be ready from the start.",
        },
        {
          id: "c-fluid",
          label: "I gave another litre of saline and sent him for a CT head because of the faints.",
          next: "s-fluid",
          quality: "unsafe",
          feedback:
            "His hypotension is from a rate of 34, not volume loss. He already has B lines and congestion. Leaving the resuscitation room for CT with an unstable bradycardia is dangerous. The examiner wanted chronotropy and pacing now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-slow",
      phase: "Twelve minutes later",
      text:
        "After six small doses of atropine the rate is still 33. His pressure is 70/40 and he is harder to rouse. The nurse asks why the pacer is not on yet. You turn it on now.",
      next: "s-atropine",
    },
    {
      kind: "say",
      id: "s-fluid",
      phase: "Ten minutes later",
      text:
        "Halfway through the litre his SpO2 falls to 88 percent and he is more short of breath. The CT technologist calls to say the scanner is ready. The charge nurse stops the transfer and asks for your plan for the rhythm. You give atropine 1 mg and ask for the pacer.",
      next: "s-atropine",
    },
    {
      kind: "say",
      id: "s-atropine",
      phase: "Atropine has failed",
      text:
        "He has had 2 mg of atropine with no change. Rate 33. Blood pressure 72/40. He is drowsy but still answers to his name. The pacer is ready.",
      next: "q-pace",
    },
    {
      kind: "question",
      id: "q-pace",
      phase: "Starting to pace",
      prompt: "Walk me through how you start transcutaneous pacing in this man. Include settings and drugs.",
      seconds: 90,
      modelAnswer: [
        "Anterior posterior pad placement. Monitor leads connected to the pacer.",
        "Demand mode at a rate of 60 to 80.",
        "Increase output from low until electrical capture, then set about 10 percent above threshold.",
        "Analgesia first, for example fentanyl 25 to 50 mcg IV. Small doses of midazolam or ketamine if needed.",
        "Avoid large sedative doses in shock.",
        "Epinephrine 2 to 10 mcg/min or dopamine 5 to 20 mcg/kg/min is the bridge if pacing is delayed or fails.",
      ],
      rubric: ["chb-r3", "chb-m1", "chb-m2"],
      choices: [
        {
          id: "c-tcp",
          label: "I paced in demand mode at 70, gave fentanyl 25 mcg, turned the output up until capture and set it 10 percent above threshold.",
          next: "s-capture",
          quality: "strong",
          feedback:
            "Good. Demand mode at 60 to 80 with output just above threshold is standard. Small opioid doses keep him comfortable without dropping his pressure further.",
        },
        {
          id: "c-epi-only",
          label: "I started epinephrine at 2 mcg/min and held off pacing because he was still talking.",
          next: "s-epi-only",
          quality: "partial",
          feedback:
            "Epinephrine at 2 to 10 mcg/min is a valid bridge. But he is in shock after failed atropine and pacing is the definitive ED therapy. Starting the drug and the pacer together is better.",
        },
        {
          id: "c-propofol",
          label: "I gave propofol 1 mg/kg so he would not feel the pacer, then started pacing.",
          next: "s-propofol",
          quality: "unsafe",
          feedback:
            "Propofol at that dose in a patient with a pressure of 72 systolic can cause arrest. Use small doses of opioid first and titrate. Ketamine or tiny doses of midazolam are safer choices if more is needed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-epi-only",
      phase: "Eight minutes later",
      text:
        "At 8 mcg/min of epinephrine the escape rate is 41 with frequent ventricular ectopy. Pressure is 80/46. He is still drowsy. The nurse asks if you want to pace now. You give fentanyl and start pacing.",
      next: "s-capture",
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "One minute later",
      text:
        "His pressure falls to 54/30 and he stops responding. The nurse bags him. You start pacing and give push dose epinephrine 10 mcg twice. His pressure comes back to 70/40 and he opens his eyes.",
      next: "s-capture",
    },
    {
      kind: "say",
      id: "s-capture",
      phase: "The monitor",
      text:
        "At 70 mA the monitor shows a pacer spike followed by a wide complex at a rate of 70. The nurse says 'We have capture.' " +
        "The pulse oximeter shows a heart rate of 34. The cuff reads 70/38.",
      next: "q-capture",
    },
    {
      kind: "question",
      id: "q-capture",
      phase: "Confirming capture",
      prompt: "The nurse says you have capture. Do you agree? What do you do?",
      seconds: 60,
      modelAnswer: [
        "Electrical capture on the monitor is not proof of mechanical capture.",
        "Large pacer artifact can look like a wide QRS.",
        "Confirm with a femoral pulse that matches the paced rate, the pleth rate or cardiac motion on POCUS.",
        "Increase output until the pulse matches the paced rate, then set just above that threshold.",
        "Reassess blood pressure and mental status once captured.",
      ],
      rubric: ["chb-a2", "chb-r3"],
      choices: [
        {
          id: "c-confirm",
          label: "I felt the femoral pulse, found it at 34 and turned the output up until the pulse and pleth matched 70. That happened at 110 mA.",
          next: "s-captured",
          quality: "strong",
          feedback:
            "Correct. The pleth rate of 34 tells you this is artifact, not capture. A matching femoral pulse or wall motion on echo confirms mechanical capture. Set the output a little above that threshold.",
        },
        {
          id: "c-accept",
          label: "I accepted capture because every spike was followed by a wide complex.",
          next: "s-false",
          quality: "unsafe",
          feedback:
            "The pleth rate did not match. Pacer artifact often mimics a captured complex. Without a matching pulse you are not pacing the heart. The examiner wanted a femoral pulse or echo check.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-false",
      phase: "Five minutes later",
      text:
        "He is more confused and his pressure is 66/36. The respiratory therapist feels a femoral pulse at about 34. You increase the output and gain true capture at 110 mA.",
      next: "s-captured",
    },
    {
      kind: "say",
      id: "s-captured",
      phase: "Paced",
      text:
        "Paced at 70 with a matching femoral pulse. Blood pressure 104/62. He is more alert and says the pacing hurts. Your labs are back.",
      next: "q-cause",
    },
    {
      kind: "question",
      id: "q-cause",
      phase: "Why is he blocked",
      prompt: "What causes are you looking for, and what do his results tell you?",
      seconds: 75,
      modelAnswer: [
        "Hyperkalemia. Potassium 4.7 mmol/L rules it out.",
        "Drugs. Beta blocker, calcium channel blocker and digoxin. Doses here are low and do not explain a wide escape.",
        "Ischemia, especially inferior MI. No ST elevation and a low troponin make it unlikely.",
        "Lyme carditis. Eastern Ontario is endemic, but it usually affects younger patients and he has no exposure or rash. Hypothyroidism and hypothermia.",
        "BRASH syndrome. Beta blocker, ACE inhibitor and a creatinine rise. His potassium is normal, so it is less likely.",
        "Most likely degenerative conduction disease below the AV node.",
        "Hold bisoprolol, amlodipine and ramipril. The creatinine rise is likely from low output.",
      ],
      rubric: ["chb-a3", "chb-m3"],
      next: "s-loss",
    },
    {
      kind: "say",
      id: "s-loss",
      phase: "Forty minutes later",
      text:
        "He keeps moving because of the pain. Twice he loses capture and his rate drops to 30 with a pressure of 68 systolic. " +
        "The cardiologist on the phone says the regional centre can put in a permanent pacemaker tomorrow morning. " +
        "The internist on call is not comfortable placing a transvenous wire. The cardiologist asks you to do it.",
      next: "q-tvp",
    },
    {
      kind: "question",
      id: "q-tvp",
      phase: "Transvenous pacing",
      prompt: "How do you place a temporary transvenous pacer? Take me through site, technique and settings.",
      seconds: 120,
      modelAnswer: [
        "Consent from the patient, who has capacity. Explain risks of bleeding, pneumothorax, arrhythmia and perforation.",
        "Right internal jugular vein under ultrasound guidance. Avoid the left subclavian, which is the usual permanent pacemaker site.",
        "Sterile technique. Sheath, then balloon tipped pacing wire. Inflate the balloon once the tip is in the vein. Deflate it once in the right ventricle and before any pullback.",
        "Confirm right ventricular position with echo, or with paced complexes of left bundle branch block shape, and note the depth.",
        "Threshold under 1 mA. Set output about 3 times threshold. Demand mode at 70. Sensitivity about 2 mV.",
        "Keep the transcutaneous pads on as backup. Chest X ray for position and pneumothorax.",
      ],
      rubric: ["chb-m4", "chb-m5", "chb-c1"],
      choices: [
        {
          id: "c-rij",
          label: "I got his consent and put a balloon tipped wire through a right internal jugular sheath under ultrasound. I saw it in the right ventricle on echo, got a threshold of 0.8 mA and set 3 mA in demand mode at 70.",
          next: "q-transfer",
          quality: "strong",
          feedback:
            "Well done. The right internal jugular gives the straightest path to the right ventricle and keeps the left chest free for the permanent device. A threshold under 1 mA with output 2 to 3 times higher gives a good safety margin.",
        },
        {
          id: "c-lsc",
          label: "I placed the wire through the left subclavian vein using landmarks.",
          next: "s-lsc",
          quality: "partial",
          feedback:
            "The left subclavian can work but it is the usual permanent pacemaker site and landmark access adds pneumothorax risk. Ultrasound guided right internal jugular is preferred. The examiner also wanted consent and position confirmation.",
        },
        {
          id: "c-sedate",
          label: "I kept him on the transcutaneous pacer overnight and gave midazolam so he would stop moving.",
          next: "s-sedate",
          quality: "unsafe",
          feedback:
            "Transcutaneous pacing is a bridge for minutes to hours, not a night. He is losing capture, which is dangerous. Heavy sedation in a hypotensive older man risks airway loss. He needs a transvenous wire.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-lsc",
      phase: "Twenty minutes later",
      text:
        "The wire captures but the cardiologist calls back and is unhappy with the site. He asks for a chest X ray. It shows a small left apical pneumothorax. You arrange close monitoring and tell the receiving team.",
      next: "q-transfer",
    },
    {
      kind: "say",
      id: "s-sedate",
      phase: "One hour later",
      text:
        "After 4 mg of midazolam his SpO2 is 86 percent and his airway is obstructing. He loses capture again and his rate falls to 28. The nurse calls you back urgently. You reposition his airway and he rouses to voice. You then place a right internal jugular transvenous wire under ultrasound.",
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Disposition",
      prompt: "He is now paced through the wire. Where does he go tonight and what do you hand over?",
      seconds: 75,
      modelAnswer: [
        "CCU admission locally or direct transfer to the regional pacemaker centre, arranged through CritiCall and the cardiologist.",
        "Critical care transport with staff able to manage the pacer. Transcutaneous pads stay on as backup.",
        "Hand over threshold, output, rate, sensitivity and wire depth.",
        "Hold AV nodal blocking drugs. Keep potassium and magnesium normal.",
        "Continuous monitoring, chest X ray reviewed, lactate repeated.",
      ],
      rubric: ["chb-d1", "chb-c2"],
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "Talking with the family",
      prompt: "His daughter asks if this was caused by his blood pressure pills and whether he can drive home from the pacemaker centre. What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Ask the patient for permission to share, as he has capacity.",
        "The pills may have added a little but the main cause is likely age related damage to the heart's wiring.",
        "He needs a permanent pacemaker. The pills are on hold until his team reviews them.",
        "He should not drive until cleared after the pacemaker. CCS fitness to drive guidance sets a short no driving period after insertion. Follow Ontario reporting rules.",
        "Plain language. Check understanding. Invite questions.",
      ],
      rubric: ["chb-c3", "chb-d2"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "Systems",
      prompt: "The internist was not able to place the wire. What would you raise with your department after this case?",
      seconds: 60,
      modelAnswer: [
        "Who places transvenous pacers after hours at this site is unclear.",
        "Keep a stocked, checked transvenous pacing kit and generator in the ED.",
        "Regular simulation for transcutaneous and transvenous pacing.",
        "A written pathway with the regional centre for urgent pacemaker transfer.",
        "Debrief the team and report through the quality process without blame.",
      ],
      rubric: ["chb-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The critical care transport team arrives. He is paced at 70 with a pressure of 118/70 and he is joking with the nurse. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "chb-a1",
      competency: "assessment",
      text: "Identifies third degree AV block with a wide ventricular escape and signs of hypoperfusion.",
      points: 2,
      teaching: "AV dissociation with regular P waves and a slower regular escape defines complete block. A wide escape means the block is likely below the AV node.",
      source: "aha-brady",
    },
    {
      id: "chb-r1",
      competency: "resuscitation",
      text: "Gives atropine 1 mg IV repeated every 3 to 5 minutes to a maximum of 3 mg.",
      points: 1,
      teaching: "Current adult ACLS uses 1 mg doses of atropine. It works on the AV node and often fails in infranodal block.",
      source: "aha-acls",
    },
    {
      id: "chb-r2",
      competency: "resuscitation",
      text: "Prepares pacing and a chronotropic infusion in parallel rather than waiting for atropine to fail.",
      points: 3,
      critical: true,
      teaching: "In unstable bradycardia every minute of low output counts. Set up the pacer and the infusion while giving atropine.",
      source: "aha-acls",
    },
    {
      id: "chb-r3",
      competency: "resuscitation",
      text: "Starts transcutaneous pacing in demand mode at 60 to 80 with output set just above the capture threshold.",
      points: 2,
      teaching: "Anterior posterior pads lower the threshold. Demand mode avoids pacing on a T wave if the native rhythm returns.",
      source: "aha-acls",
    },
    {
      id: "chb-a2",
      competency: "assessment",
      text: "Confirms mechanical capture with a matching femoral pulse, pleth rate or cardiac motion on POCUS.",
      points: 3,
      critical: true,
      teaching: "Pacer artifact can look like a captured QRS. Only a pulse that matches the paced rate proves the heart is being paced.",
      source: "aha-acls",
    },
    {
      id: "chb-m1",
      competency: "management",
      text: "Gives analgesia before or with pacing using small titrated doses, such as fentanyl 25 to 50 mcg IV.",
      points: 1,
      teaching: "Transcutaneous pacing is painful. Titrate opioid first and add small doses of a sedative only if needed.",
      source: "aha-acls",
    },
    {
      id: "chb-m2",
      competency: "management",
      text: "Names epinephrine 2 to 10 mcg/min or dopamine 5 to 20 mcg/kg/min as the bridge when pacing is delayed or fails.",
      points: 1,
      teaching: "Chronotropic infusions buy time. They increase myocardial oxygen demand and can cause ectopy.",
      source: "aha-acls",
    },
    {
      id: "chb-a3",
      competency: "assessment",
      text: "Screens for reversible causes including hyperkalemia, AV nodal blocking drugs, digoxin, ischemia and Lyme carditis.",
      points: 2,
      teaching: "Treat the treatable. Hyperkalemia and drug toxicity can mimic structural block and respond to calcium or antidotes.",
      source: "acc-brady",
    },
    {
      id: "chb-m3",
      competency: "management",
      text: "Holds beta blocker, calcium channel blocker and ACE inhibitor while he is hypotensive.",
      points: 1,
      teaching: "Even low doses of AV nodal blockers can worsen block. Stop them until the rhythm is secured.",
      source: "acc-brady",
    },
    {
      id: "chb-m4",
      competency: "management",
      text: "Places a transvenous pacer through the right internal jugular vein under ultrasound, avoiding the left subclavian.",
      points: 3,
      critical: true,
      teaching: "Transcutaneous pacing is a short bridge. The right internal jugular gives the most direct route and preserves the left side for a permanent device.",
      source: "esc-pacing",
    },
    {
      id: "chb-m5",
      competency: "management",
      text: "Confirms wire position and sets output 2 to 3 times a threshold under 1 mA in demand mode.",
      points: 2,
      teaching: "A low threshold means good contact. A margin above threshold protects against loss of capture as the wire settles.",
      source: "esc-pacing",
    },
    {
      id: "chb-c1",
      competency: "communication",
      text: "Obtains informed consent from the patient for the transvenous pacer, explaining main risks.",
      points: 1,
      teaching: "A patient with capacity consents for himself even when a substitute decision maker is present.",
      source: "hcca",
    },
    {
      id: "chb-d1",
      competency: "disposition",
      text: "Arranges CCU or direct transfer for a permanent pacemaker with a critical care escort and backup pads.",
      points: 2,
      teaching: "Temporary wires can dislodge in transport. Keep pads on and send staff who can troubleshoot the generator.",
      source: "esc-pacing",
    },
    {
      id: "chb-c2",
      competency: "communication",
      text: "Gives a structured handover including pacer settings, threshold and wire depth.",
      points: 1,
      teaching: "The receiving team needs the numbers to detect a change in threshold or a migrating wire.",
      source: "esc-pacing",
    },
    {
      id: "chb-c3",
      competency: "communication",
      text: "Explains the likely cause and plan to the family in plain language after confirming the patient's permission.",
      points: 1,
      teaching: "Ask the capable patient before sharing. Name the plan and what happens next.",
      source: "acc-brady",
    },
    {
      id: "chb-d2",
      competency: "disposition",
      text: "Advises no driving until cleared after pacemaker insertion and follows fitness to drive guidance.",
      points: 1,
      teaching: "Syncope from heart block is a risk of sudden incapacitation at the wheel. Driving advice belongs in the ED plan.",
      source: "ccs-drive",
    },
    {
      id: "chb-l1",
      competency: "leadership",
      text: "Identifies the gap in after hours transvenous pacing coverage and proposes kit checks, simulation and a regional pathway.",
      points: 1,
      teaching: "Rare high stakes procedures need a named operator, a ready kit and practice. Fix the system after the shift.",
      source: "esc-pacing",
    },
  ],
  sources: [
    {
      id: "aha-acls",
      citation: "American Heart Association. Part 9. Adult Advanced Life Support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376",
    },
    {
      id: "aha-brady",
      citation: "American Heart Association. Adult bradycardia algorithm. Advanced Cardiovascular Life Support.",
    },
    {
      id: "acc-brady",
      citation: "Kusumoto FM, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019.",
    },
    {
      id: "esc-pacing",
      citation: "Glikson M, et al. 2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. European Heart Journal. 2021.",
    },
    {
      id: "ccs-drive",
      citation: "Guerra PG, et al. Canadian Cardiovascular Society 2023 Guidelines on the Fitness to Drive. Canadian Journal of Cardiology. 2024.",
    },
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A.",
      url: "https://www.ontario.ca/laws/statute/96h02",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
