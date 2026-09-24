// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const sympatheticCrashingPulmonaryEdema: OralCase = {
  id: "sympathetic-crashing-pulmonary-edema",
  title: "Woken up gasping at 3 a.m.",
  blueprint: "cardio",
  alsoCovers: ["resp", "resus"],
  priorityTopic: "pulmonary-edema",
  keyFeatures: [
    { topic: "pulmonary-edema", n: 1 },
    { topic: "pulmonary-edema", n: 2 },
    { topic: "pulmonary-edema", n: 3 },
    { topic: "pulmonary-edema", n: 4 },
  ],
  summary: "A 71 year old woman arrives by ambulance in severe respiratory distress with a very high blood pressure.",
  durationMinutes: 14,
  stem:
    "You are the night physician at a community hospital in the Greater Toronto Area with an ICU and an intensivist on call from home. " +
    "BiPAP is available in the ED and respiratory therapy is in house. " +
    "Doris Kowalczyk is 71 years old and weighs 84 kg. Her husband called 911 at 03:00 when she woke up unable to breathe. " +
    "Triage vitals: heart rate 128 sinus, blood pressure 224/122, respiratory rate 38, SpO2 83 percent on 15 L by non-rebreather mask, temperature 36.8, capillary glucose 11.2 mmol/L. CTAS 1. " +
    "The paramedic says: 'She has been sitting bolt upright the whole way. We gave two nitro sprays. She is getting tired and can only say two words at a time.'",
  findings: [
    {
      id: "history",
      label: "History",
      result:
        "Woke from sleep gasping at 02:40. Two nights of needing extra pillows. No chest pain before tonight. Ran out of her blood pressure pills 10 days ago. Ate a large salty meal at a family party yesterday.",
    },
    {
      id: "pmh",
      label: "Past history and medications",
      result:
        "Hypertension, type 2 diabetes, chronic kidney disease with baseline creatinine 118 µmol/L. Amlodipine 10 mg, hydrochlorothiazide 25 mg and metformin 1000 mg twice daily. No known heart failure. No allergies.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Sitting upright, diaphoretic, using accessory muscles. Warm hands. Crackles to the mid lung fields on both sides. JVP 8 cm above the sternal angle. " +
        "S3 present. No murmur of aortic stenosis. Trace ankle edema. Speaks two word sentences. GCS 15.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result: "Sinus tachycardia at 126. Left ventricular hypertrophy by voltage with lateral strain pattern. 1 mm ST depression in V5 and V6. No ST elevation.",
    },
    {
      id: "cxr",
      label: "Portable chest X ray",
      result: "Bilateral perihilar airspace opacities. Kerley B lines. Cardiomegaly. Small bilateral effusions. No pneumothorax.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound",
      result:
        "Diffuse B lines in all lung zones. Left ventricular function mildly reduced. Thick left ventricular walls. No pericardial effusion. " +
        "No obvious aortic valve calcification. IVC 2.4 cm with minimal collapse.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.22. pCO2 60 mmHg. Bicarbonate 23 mmol/L. Lactate 3.9 mmol/L.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Potassium 4.4 mmol/L. Sodium 136 mmol/L. Creatinine 146 µmol/L. Hemoglobin 121 g/L. High sensitivity troponin T 36 ng/L. NT-proBNP 7200 pg/mL. White count 11.2 x 10^9/L.",
    },
    {
      id: "troponin-2",
      label: "Repeat troponin at 2 hours",
      result: "High sensitivity troponin T 49 ng/L.",
    },
    {
      id: "husband",
      label: "Collateral from her husband",
      result: "He says she is independent and still volunteers at church. They have never talked about life support. He wants 'whatever gives her the best chance'.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the resuscitation room",
      text:
        "She is bolt upright, sweating and grabbing the bed rail. The respiratory therapist is at the bedside with a BiPAP machine. The nurse has one IV in and asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First five minutes",
      prompt: "What is going on and what do you do in the first five minutes?",
      seconds: 90,
      modelAnswer: [
        "Sympathetic crashing acute pulmonary edema. Hypertensive acute heart failure with flash pulmonary edema.",
        "Non-invasive ventilation now. CPAP 8 to 10 cmH2O or BiPAP about 12/6 cmH2O with FiO2 1.0.",
        "High dose nitroglycerin at the same time. The main problem is afterload and fluid redistribution, not total body overload.",
        "Sit her upright. Monitor, second IV, ECG, blood work and a blood gas.",
        "Avoid morphine.",
        "Prepare for intubation in case NIV fails.",
      ],
      rubric: ["scape-a1", "scape-r1", "scape-r2"],
      choices: [
        {
          id: "c-niv-ntg",
          label: "I put her on BiPAP at 12/6 with 100 percent oxygen and started high dose nitroglycerin at the same time.",
          next: "q-nitro",
          quality: "strong",
          feedback:
            "Exactly right. NIV reduces preload and afterload and cuts the work of breathing. High dose nitrates attack the afterload surge. Together they reduce the need for intubation.",
        },
        {
          id: "c-low-ntg",
          label: "I started BiPAP and gave one nitro spray every 5 minutes with furosemide 80 mg IV.",
          next: "s-low-ntg",
          quality: "partial",
          feedback:
            "NIV was right. But 0.4 mg every 5 minutes is far too little for a pressure of 224 systolic. Furosemide is not the first priority because she is redistributed, not grossly overloaded. The examiner wanted high dose nitrates.",
        },
        {
          id: "c-morphine",
          label: "I gave morphine 5 mg IV and furosemide 120 mg IV and kept the non-rebreather on while the diuretic worked.",
          next: "s-morphine",
          quality: "unsafe",
          feedback:
            "Morphine is associated with more intubation and worse outcomes in observational acute heart failure data. Diuretics take 30 minutes or more to work. A non-rebreather does nothing for her work of breathing. She needed NIV and nitrates now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-low-ntg",
      phase: "Fifteen minutes later",
      text:
        "Her pressure is still 210/118. SpO2 87 percent on BiPAP. The respiratory therapist says she is still tachypneic at 34. You increase the nitroglycerin.",
      next: "q-nitro",
    },
    {
      kind: "say",
      id: "s-morphine",
      phase: "Ten minutes later",
      text:
        "She is drowsy and her breathing is shallower. SpO2 79 percent. A repeat gas shows pCO2 74 mmHg. The respiratory therapist puts her on BiPAP without being asked and asks you for a nitroglycerin order.",
      next: "q-nitro",
    },
    {
      kind: "question",
      id: "q-nitro",
      phase: "Nitroglycerin",
      prompt: "Give me your nitroglycerin plan. Route, dose, how fast you escalate and your blood pressure target.",
      seconds: 75,
      modelAnswer: [
        "Sublingual 0.8 mg (two sprays) every 3 to 5 minutes while the IV infusion is set up.",
        "IV infusion started high, around 100 mcg/min, and increased by 50 to 100 mcg/min every 3 to 5 minutes.",
        "Doses up to 400 mcg/min are often needed. Some centres use IV boluses under a local protocol.",
        "Aim for a fall in systolic pressure of about 25 percent over the first hour and relief of distress.",
        "Stop or reduce if systolic falls under 110 or she becomes symptomatic.",
        "Check for recent phosphodiesterase inhibitor use and screen for severe aortic stenosis.",
      ],
      rubric: ["scape-m1", "scape-m2"],
      next: "s-agitated",
    },
    {
      kind: "say",
      id: "s-agitated",
      phase: "Ten minutes later",
      text:
        "Nitroglycerin is at 200 mcg/min. Pressure 178/100. SpO2 90 percent. But she is agitated and keeps pulling the BiPAP mask off. Each time she drops to 80 percent. The nurse asks for something to calm her down.",
      next: "q-agitated",
    },
    {
      kind: "question",
      id: "q-agitated",
      phase: "Not tolerating the mask",
      prompt: "She is fighting the mask. What do you do?",
      seconds: 75,
      modelAnswer: [
        "Stay at the bedside. Coach her. Explain that the mask is helping.",
        "Check mask fit and leak. Consider holding the mask by hand for a few minutes.",
        "Adjust settings for comfort. Lower the IPAP briefly if needed.",
        "Keep increasing nitroglycerin. Agitation often settles as oxygenation improves.",
        "If coaching fails, a low dose dexmedetomidine infusion can help. Avoid boluses of benzodiazepines or opioids.",
        "Set a clear intubation trigger and have the drugs ready.",
      ],
      rubric: ["scape-m3", "scape-r3"],
      choices: [
        {
          id: "c-coach",
          label: "I stood at her head, held the mask, coached her breathing, fixed the leak and kept climbing on the nitroglycerin. I had dexmedetomidine ready if she did not settle.",
          next: "s-better",
          quality: "strong",
          feedback:
            "Very good. Most agitation on NIV in this setting is hypoxia and fear. Coaching and a well fitted mask work. Dexmedetomidine at 0.2 to 0.7 mcg/kg/h can help with little effect on respiratory drive. Watch for bradycardia and hypotension.",
        },
        {
          id: "c-midaz",
          label: "I gave midazolam 2 mg IV to help her tolerate the mask.",
          next: "s-midaz",
          quality: "partial",
          feedback:
            "A small dose may calm her, but benzodiazepines can depress her drive and her pCO2 is already 60. Coaching and mask fit come first. If a drug is needed, dexmedetomidine is safer.",
        },
        {
          id: "c-rsi",
          label: "I took the mask off and intubated her with propofol 2 mg/kg and rocuronium.",
          next: "s-rsi",
          quality: "unsafe",
          feedback:
            "She was improving on NIV. Full dose propofol with the sudden loss of sympathetic drive and positive pressure can drop her pressure hard. If intubation is needed, use a reduced induction dose, preoxygenate on NIV and have pressors ready.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-midaz",
      phase: "Ten minutes later",
      text:
        "She stops fighting but she is drowsy. Her pCO2 is now 68 mmHg. The respiratory therapist asks you to stay close. You hold further sedation and coach her as she wakes.",
      next: "s-better",
    },
    {
      kind: "say",
      id: "s-rsi",
      phase: "Five minutes later",
      text:
        "The tube is in. Her pressure falls to 74/40 and her SpO2 is 86 percent. You stop the nitroglycerin and give push dose phenylephrine. " +
        "Her pressure recovers to 110/64. She is now on the ventilator with PEEP 10 and will need an ICU bed.",
      next: "s-better",
    },
    {
      kind: "say",
      id: "s-better",
      phase: "Forty minutes in",
      text:
        "SpO2 is 95 percent on FiO2 0.5. Respiratory rate 24. She can speak in sentences. Blood pressure 152/88. Now you have time to think about why this happened.",
      next: "q-precip",
    },
    {
      kind: "question",
      id: "q-precip",
      phase: "Cause and other drugs",
      prompt: "What precipitants are you looking for, and what other drugs will you give or avoid?",
      seconds: 75,
      modelAnswer: [
        "Precipitants. Non-adherence, salt load, ischemia, arrhythmia, renal artery stenosis, infection, thyroid disease.",
        "Here the likely cause is stopped antihypertensives and a salt load.",
        "ECG and troponin for ACS. ST depression and a small troponin rise may be demand. Repeat and trend.",
        "Furosemide 40 mg IV once blood pressure is falling. She is diuretic naive to loops.",
        "Avoid morphine. Avoid beta blockers acutely.",
        "Hold metformin given creatinine rise and lactate.",
      ],
      rubric: ["scape-a2", "scape-m4"],
      next: "s-hypo",
    },
    {
      kind: "say",
      id: "s-hypo",
      phase: "One hour later",
      text:
        "The nurse calls you back. The nitroglycerin was increased to 360 mcg/min while you were with another patient. Pressure is now 88/54. Heart rate 112. She says she feels lightheaded. SpO2 94 percent.",
      next: "q-hypo",
    },
    {
      kind: "question",
      id: "q-hypo",
      phase: "Pressure has dropped",
      prompt: "What do you do now?",
      seconds: 60,
      modelAnswer: [
        "Stop the nitroglycerin. Its half life is minutes.",
        "Reassess at the bedside. Repeat ECG and POCUS.",
        "Look for a new ischemic event, RV failure, arrhythmia or aortic stenosis missed earlier.",
        "Lower PEEP if high. Small fluid bolus only if she is not in pulmonary edema on ultrasound.",
        "Restart nitroglycerin at a lower dose once pressure recovers if congestion returns.",
        "Set clear titration limits with the nurse.",
      ],
      rubric: ["scape-m5", "scape-l1"],
      choices: [
        {
          id: "c-stop",
          label: "I stopped the nitroglycerin, repeated the ECG and POCUS and set a written titration limit with the nurse.",
          next: "s-recover",
          quality: "strong",
          feedback:
            "Correct. Stopping the nitroglycerin fixes this within minutes. The repeat ECG and echo rule out a new cause. Clear limits prevent a repeat.",
        },
        {
          id: "c-norepi",
          label: "I started norepinephrine at 0.05 mcg/kg/min and left the nitroglycerin running.",
          next: "s-norepi",
          quality: "partial",
          feedback:
            "Running a vasopressor against a vasodilator makes no sense here. The cause is the nitroglycerin dose. Stop it first and reassess.",
        },
        {
          id: "c-bolus",
          label: "I gave a 1 L saline bolus.",
          next: "s-bolus",
          quality: "unsafe",
          feedback:
            "She is still in pulmonary edema on a background of heart failure. A litre can push her back into respiratory failure. Stop the nitroglycerin and reassess first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-norepi",
      phase: "Fifteen minutes later",
      text:
        "Her pressure is 96/58 on two opposing infusions. The ICU fellow asks why she is on both. You stop the nitroglycerin and wean the norepinephrine off.",
      next: "s-recover",
    },
    {
      kind: "say",
      id: "s-bolus",
      phase: "Twenty minutes later",
      text:
        "After 600 mL her respiratory rate is 34 and SpO2 is 86 percent. B lines are back in every zone. You stop the fluid, stop the nitroglycerin and increase her BiPAP support.",
      next: "s-recover",
    },
    {
      kind: "say",
      id: "s-recover",
      phase: "Stabilized",
      text:
        "Pressure recovers to 128/74 off nitroglycerin. Repeat ECG is unchanged. Repeat troponin is 49 ng/L. She is on positive pressure support with FiO2 0.4 and SpO2 95 percent.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where does she go and what do you ask the admitting team to do?",
      seconds: 60,
      modelAnswer: [
        "ICU or a step down unit that can run BiPAP and titrated nitroglycerin.",
        "Not a general ward while she needs NIV.",
        "Trend troponin. Cardiology review. Echo.",
        "Restart antihypertensives and plan heart failure therapy once stable.",
        "Hold metformin while creatinine and lactate are up.",
      ],
      rubric: ["scape-d1"],
      next: "q-husband",
    },
    {
      kind: "question",
      id: "q-husband",
      phase: "Talking with her husband",
      prompt: "Her husband asks if she would be put on life support if she gets worse. How do you handle this?",
      seconds: 60,
      modelAnswer: [
        "If she can engage, ask her directly about her wishes.",
        "Explain what intubation and ICU care would mean in plain language.",
        "She is improving and the outlook for this type of episode is often good.",
        "If she cannot decide, her husband is her substitute decision maker under the Ontario Health Care Consent Act, unless she has named an attorney for personal care.",
        "Document the conversation and the plan.",
      ],
      rubric: ["scape-c1", "scape-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "She goes to the ICU with a pressure of 134/78 and her goals of care documented. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "scape-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes hypertensive acute heart failure with flash pulmonary edema driven by afterload.",
      points: 2,
      teaching: "Sudden onset, very high pressure and warm extremities point to afterload driven fluid redistribution rather than slow volume gain.",
      source: "esc-hf",
    },
    {
      id: "scape-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Starts non-invasive ventilation immediately with CPAP 8 to 10 or BiPAP about 12/6 cmH2O.",
      points: 3,
      critical: true,
      teaching: "NIV in cardiogenic pulmonary edema reduces intubation and likely mortality. Start it in the first minutes.",
      source: "cochrane-niv",
    },
    {
      id: "scape-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Gives high dose nitroglycerin at the same time as NIV.",
      points: 3,
      critical: true,
      teaching: "In sympathetic crashing pulmonary edema the dose matters. Standard spray doses are too low for a pressure over 200.",
      source: "esc-hf",
    },
    {
      id: "scape-m1",
      competency: "management",
      criterion: "plan",
      text: "Gives sublingual 0.8 mg doses and an IV infusion starting around 100 mcg/min, titrated quickly toward 400 mcg/min.",
      points: 2,
      teaching: "Rapid titration controls afterload within minutes. The short half life makes high doses safe if you watch the pressure.",
      source: "esc-hf",
    },
    {
      id: "scape-m2",
      competency: "management",
      criterion: "plan",
      text: "Sets a target of about a 25 percent fall in systolic pressure and screens for PDE5 inhibitors and aortic stenosis.",
      points: 1,
      teaching: "Too fast a fall causes hypoperfusion. Nitrates are dangerous with PDE5 inhibitors and with severe aortic stenosis.",
      source: "esc-hf",
    },
    {
      id: "scape-m3",
      competency: "management",
      criterion: "plan",
      text: "Manages NIV intolerance with coaching and mask fit first, and dexmedetomidine rather than benzodiazepine boluses if needed.",
      points: 2,
      teaching: "Agitation usually means hypoxia or fear. Sedatives that suppress drive can tip a hypercapnic patient into failure.",
      source: "ers-ats-niv",
    },
    {
      id: "scape-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Sets an intubation trigger and plans a reduced dose induction with pressors ready if NIV fails.",
      points: 1,
      teaching: "Loss of sympathetic drive and positive pressure can crash the pressure at induction. Prepare before you push drugs.",
      source: "ers-ats-niv",
    },
    {
      id: "scape-a2",
      competency: "assessment",
      criterion: "approach",
      text: "Looks for precipitants including non-adherence, salt load, ischemia, arrhythmia and renal artery stenosis.",
      points: 2,
      teaching: "The treatment of the episode is the same, but the cause changes the admission plan. Trend troponin to separate ACS from demand.",
      source: "ccs-hf",
    },
    {
      id: "scape-m4",
      competency: "management",
      criterion: "plan",
      text: "Avoids morphine and uses a modest loop diuretic dose such as furosemide 40 mg IV once pressure is falling.",
      points: 2,
      teaching: "Morphine is associated with more intubation. A loop diuretic helps, but it is second to nitrates in this phenotype.",
      source: "ccs-hf",
    },
    {
      id: "scape-m5",
      competency: "management",
      criterion: "plan",
      text: "Stops the nitroglycerin first when hypotension develops and reassesses with ECG and POCUS.",
      points: 3,
      critical: true,
      teaching: "Nitroglycerin wears off in minutes. Stopping it is the fix. Fluid or pressors are rarely needed and fluid can undo your work.",
      source: "esc-hf",
    },
    {
      id: "scape-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Sets clear titration limits with the nurse and closes the loop on infusion changes.",
      points: 1,
      teaching: "High dose infusions need explicit targets and stop points. Write them down and check back.",
      source: "ccs-hf",
    },
    {
      id: "scape-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits to ICU or step down while on NIV and requests echo, troponin trend and cardiology review.",
      points: 2,
      teaching: "Patients on NIV need a unit that can escalate. A new heart failure diagnosis needs an echo and a medication plan.",
      source: "ccs-hf",
    },
    {
      id: "scape-c1",
      competency: "communication",
      criterion: "plan",
      text: "Asks the patient about her own wishes once she can engage, rather than going only through the family.",
      points: 2,
      teaching: "A capable patient decides for herself. As she improves on NIV she may be able to take part.",
      source: "hcca",
    },
    {
      id: "scape-c2",
      competency: "communication",
      criterion: "plan",
      text: "Explains intubation and ICU care in plain language and documents the goals of care.",
      points: 1,
      teaching: "Families ask about life support when they are frightened. Honest, simple language builds trust.",
      source: "ccs-hf",
    },
  ],
  sources: [
    {
      id: "cochrane-niv",
      citation: "Berbenetz N, et al. Non-invasive positive pressure ventilation (CPAP or bilevel NPPV) for cardiogenic pulmonary oedema. Cochrane Database of Systematic Reviews. 2019.",
      url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD005351.pub4/full",
    },
    {
      id: "ers-ats-niv",
      citation: "Rochwerg B, et al. Official ERS/ATS clinical practice guidelines. Noninvasive ventilation for acute respiratory failure. European Respiratory Journal. 2017.",
    },
    {
      id: "esc-hf",
      citation: "McDonagh TA, et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. European Heart Journal. 2021.",
    },
    {
      id: "ccs-hf",
      citation: "Ezekowitz JA, et al. 2017 Comprehensive Update of the Canadian Cardiovascular Society Guidelines for the Management of Heart Failure. Canadian Journal of Cardiology. 2017.",
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
