// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const preExcitedAtrialFibrillation: OralCase = {
  id: "pre-excited-atrial-fibrillation",
  title: "Racing heart after a pickup game",
  blueprint: "cardio",
  alsoCovers: ["resus"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 2 },
    { topic: "arrhythmia", n: 3 },
    { topic: "arrhythmia", n: 4 },
    { topic: "arrhythmia", n: 6 },
    { topic: "analgesia-sedation", n: 5 },
    { topic: "cqi", n: 1 },
  ],
  summary: "A 24 year old man with sudden palpitations during basketball and a very fast, irregular rhythm.",
  durationMinutes: 14,
  stem:
    "You are working in the ED of an academic hospital in Ottawa. Cardiology is on call and there is an electrophysiology service. " +
    "Jonah Whitecloud is 24 years old and weighs 78 kg. His heart started racing 2 hours ago during a pickup basketball game. " +
    "Triage vitals: heart rate 230 and irregular, blood pressure 118/72, respiratory rate 20, SpO2 98 percent on room air, temperature 36.9. CTAS 2. " +
    "He is anxious but talking in full sentences. " +
    "The nurse brings you the ECG and says: 'It is fast AF with a bundle branch block I think. Rates are hitting 270. Should I draw up diltiazem?'",
  findings: [
    {
      id: "history",
      label: "History",
      result:
        "Sudden onset of rapid pounding at 19:10 while sprinting. No chest pain or syncope. Mild lightheadedness. " +
        "He had short spells of racing heart in high school that stopped on their own. Two energy drinks today. Occasional cannabis. No other drugs.",
    },
    {
      id: "pmh",
      label: "Past history and medications",
      result: "Healthy. No medications. No allergies. No family history of sudden death. He had an ECG before a school trip 6 years ago and was told it was 'a bit unusual'.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Warm and well perfused. Irregular pulse, hard to count. JVP normal. Chest clear. No murmur. Alert and oriented. No thyroid enlargement.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result:
        "Irregularly irregular rhythm at 190 to 280 per minute. No P waves. QRS width varies from beat to beat between 100 and 170 ms with changing morphology. " +
        "Shortest RR interval between two pre-excited beats is 200 ms. No ST elevation.",
    },
    {
      id: "old-ecg",
      label: "Old ECG from the chart",
      result: "Sinus rhythm at 72. PR interval 96 ms. Slurred upstroke of the QRS in I, aVL and V4 to V6. QRS 120 ms. Tall R wave in V1.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Potassium 3.8 mmol/L. Magnesium 0.80 mmol/L. Creatinine 84 µmol/L. TSH 1.6 mIU/L. High sensitivity troponin T 11 ng/L. Hemoglobin 152 g/L.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result: "Normal left ventricular size and function. No pericardial effusion. Normal right ventricle. Structurally normal valves on a limited view.",
    },
    {
      id: "risk",
      label: "Stroke risk",
      result: "CHADS-65 negative. Onset clearly 2 hours ago. No valve disease.",
    },
    {
      id: "partner",
      label: "Collateral from his partner",
      result: "His partner says he plays in a competitive league tournament this weekend. He drove himself to the ED.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "He is on the monitor. The rate jumps between 190 and 280. Some complexes are narrow and some are very wide. The nurse has the diltiazem vial in her hand.",
      next: "q-ecg",
    },
    {
      kind: "question",
      id: "q-ecg",
      phase: "Reading the ECG",
      prompt: "What is this rhythm, and what do you tell the nurse about the diltiazem?",
      seconds: 60,
      modelAnswer: [
        "Irregular, very fast, with varying QRS width. This is pre-excited atrial fibrillation until proven otherwise.",
        "The old ECG with a short PR and delta wave confirms an accessory pathway.",
        "Shortest pre-excited RR of 200 ms marks a high risk pathway.",
        "No AV nodal blockers. No diltiazem, beta blocker, adenosine, digoxin or IV amiodarone.",
        "Blocking the AV node pushes more impulses down the pathway and can cause VF.",
        "Pads on now in case he becomes unstable.",
      ],
      rubric: ["wpw-a1", "wpw-r1", "wpw-r2"],
      choices: [
        {
          id: "c-preexcited",
          label: "I called it pre-excited atrial fibrillation, stopped the diltiazem and put pads on.",
          next: "q-plan",
          quality: "strong",
          feedback:
            "Correct. Irregular, very fast and with changing QRS width is the signature of AF down an accessory pathway. Rates near 300 and a shortest RR of 200 ms mean a pathway that can conduct VF. Stopping the nodal blocker is the key safety call.",
        },
        {
          id: "c-unsure",
          label: "I was not sure if it was AF with a bundle branch block, so I held all drugs and called cardiology.",
          next: "s-unsure",
          quality: "partial",
          feedback:
            "Holding the drug was safe. But AF with a fixed bundle branch block has one QRS shape and rarely runs above 220. Changing morphology at 280 should make you name pre-excitation yourself and plan treatment.",
        },
        {
          id: "c-dilt",
          label: "I agreed and asked for diltiazem 0.25 mg/kg IV over 2 minutes.",
          next: "s-dilt",
          quality: "unsafe",
          feedback:
            "This is the classic trap. Diltiazem slows the AV node and leaves the accessory pathway unopposed. Ventricular rates climb and VF can follow. The examiner wanted no AV nodal blockers.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-unsure",
      phase: "Ten minutes later",
      text:
        "The cardiology resident arrives and pulls up the old ECG. He points to the delta wave and asks what your plan is now.",
      next: "q-plan",
    },
    {
      kind: "say",
      id: "s-dilt",
      phase: "Two minutes later",
      text:
        "Halfway through the push the rate climbs to 310 with almost every beat wide. His pressure falls to 86/50 and he says he feels faint. You stop the push. Pads go on. " +
        "With his legs raised his pressure comes back to 104/66 and he is talking again.",
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Stable plan",
      prompt: "He is still perfusing. How do you convert him? Give me drug, dose and your stop criteria, or tell me about your electrical plan.",
      seconds: 90,
      modelAnswer: [
        "Rhythm control. Rate control with nodal blockers is not an option.",
        "Procainamide 15 mg/kg IV over 60 minutes. For 78 kg that is about 1170 mg. Maximum 1500 mg.",
        "Do not start if systolic is under 100 or QTc is over 500 ms. Stop if the pressure drops or the QRS widens visibly, for example by more than 30 percent.",
        "Or synchronized electrical cardioversion under procedural sedation. Start at 150 to 200 J, not low energy. Anterolateral or anteroposterior pads are both acceptable.",
        "Electrical cardioversion is the most reliable option and often the first choice.",
        "Onset under 12 hours and CHADS-65 negative. No anticoagulation needed before or after.",
      ],
      rubric: ["wpw-m1", "wpw-m2", "wpw-m3"],
      choices: [
        {
          id: "c-proc",
          label: "I started procainamide 15 mg/kg, about 1170 mg, over 60 minutes with blood pressure every 5 minutes and a plan to stop if his pressure dropped or his QRS widened by more than 30 percent.",
          next: "s-deteriorate",
          quality: "strong",
          feedback:
            "Good. Procainamide slows conduction in the pathway and the atrium. Your dose and stop criteria are right. Keep the pads on and sedation ready in case he tips over.",
        },
        {
          id: "c-dccv",
          label: "I prepared for synchronized cardioversion at 200 J under procedural sedation.",
          next: "s-deteriorate",
          quality: "strong",
          feedback:
            "Good. Electrical cardioversion is fast and reliable in pre-excited AF. Starting at 200 J gives a high first shock success. Onset under 12 hours means no anticoagulation is needed first.",
        },
        {
          id: "c-amio",
          label: "I ordered amiodarone 150 mg IV over 10 minutes because it is safe in structural heart disease.",
          next: "s-amio",
          quality: "unsafe",
          feedback:
            "Intravenous amiodarone has AV nodal blocking effects before its pathway effects take hold. It has caused VF in pre-excited AF and current guidelines advise against it. Procainamide or cardioversion was the answer.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-amio",
      phase: "The pharmacist calls",
      text:
        "The ED pharmacist calls before the bag is hung. She says amiodarone IV is listed as potentially harmful in pre-excited AF and asks you to reconsider. You cancel it and start procainamide 15 mg/kg over 60 minutes.",
      next: "s-deteriorate",
    },
    {
      kind: "say",
      id: "s-deteriorate",
      phase: "Twenty minutes later",
      text:
        "Before your plan is finished, the rate reaches 290 with mostly wide beats. His pressure is 80/48. He is pale, sweaty and slow to answer.",
      next: "q-unstable",
    },
    {
      kind: "question",
      id: "q-unstable",
      phase: "Unstable",
      prompt: "He is now unstable. What exactly do you do? Include sedation and energy.",
      seconds: 75,
      modelAnswer: [
        "Immediate synchronized cardioversion. Stop any procainamide infusion.",
        "200 J biphasic synchronized. Escalate to maximum if needed. Change pad position if shocks fail.",
        "Sedation adjusted for hypotension. Ketamine 0.5 to 1 mg/kg IV, or etomidate 0.1 to 0.15 mg/kg, or reduced propofol.",
        "Check sync marker on each R wave. Wide beats may not be tagged. Be ready to defibrillate unsynchronized if he becomes pulseless or goes into VF.",
        "Airway equipment, suction and a second person managing the airway.",
      ],
      rubric: ["wpw-r3", "wpw-r4"],
      choices: [
        {
          id: "c-sync200",
          label: "I gave ketamine 0.5 mg/kg and did a synchronized 200 J shock after checking the sync markers, ready to defibrillate if needed.",
          next: "s-sinus",
          quality: "strong",
          feedback:
            "Excellent. Hemodynamically neutral sedation, a synchronized 200 J shock and a defibrillation plan is exactly right. Checking that sync markers land on the wide beats avoids a shock on the T wave.",
        },
        {
          id: "c-sync50",
          label: "I did a synchronized shock at 50 J because it is a fast rhythm in a young heart.",
          next: "s-low",
          quality: "partial",
          feedback:
            "Right action, wrong energy. AF needs higher energy. CAEP advises starting at 150 to 200 J and avoiding low starting energy. AHA 2025 suggests at least 200 J. Low energy adds shocks and sedation time.",
        },
        {
          id: "c-push",
          label: "I sped up the procainamide to get it in faster.",
          next: "s-vf",
          quality: "unsafe",
          feedback:
            "An unstable patient needs electricity, not a faster drug. Procainamide also lowers blood pressure. The examiner wanted immediate synchronized cardioversion.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-low",
      phase: "One minute later",
      text: "The 50 J shock does nothing. You shock again at 200 J synchronized. He converts.",
      next: "s-sinus",
    },
    {
      kind: "say",
      id: "s-vf",
      phase: "Three minutes later",
      text:
        "The monitor shows ventricular fibrillation. He has no pulse. The nurse starts compressions. You defibrillate at 200 J unsynchronized. He returns to an organized rhythm with a pulse within 20 seconds.",
      next: "s-sinus",
    },
    {
      kind: "say",
      id: "s-sinus",
      phase: "After conversion",
      text:
        "He is in sinus rhythm at 92. Pressure 122/74. He wakes up and asks what happened. The new ECG shows a PR of 98 ms, a delta wave and a QRS of 122 ms.",
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "After conversion",
      prompt: "What does the new ECG show, and what does it mean for his risk?",
      seconds: 60,
      modelAnswer: [
        "Wolff Parkinson White pattern. Short PR, delta wave, wide QRS.",
        "With symptoms and AF this is WPW syndrome.",
        "Pre-excited AF with a shortest RR of 250 ms or less marks a high risk pathway.",
        "Risk of sudden cardiac death from AF degenerating to VF.",
        "Catheter ablation is the definitive treatment.",
      ],
      rubric: ["wpw-a2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "He feels great and wants to go home. What is your disposition?",
      seconds: 75,
      modelAnswer: [
        "Discuss with cardiology or electrophysiology before he leaves.",
        "He had a high risk pathway and a period of instability. Many centres will admit for ablation or arrange EP within days.",
        "No AV nodal blocking drugs. Document this clearly.",
        "No competitive sport until cleared by EP.",
        "No anticoagulation needed. Onset under 12 hours and CHADS-65 negative.",
        "Clear return advice for palpitations, syncope or chest pain.",
      ],
      rubric: ["wpw-d1", "wpw-d2", "wpw-m4"],
      choices: [
        {
          id: "c-ep",
          label: "I spoke with electrophysiology, who admitted him for an EP study and ablation. I wrote 'no AV nodal blockers' in the chart.",
          next: "q-patient",
          quality: "strong",
          feedback:
            "Good. A symptomatic high risk pathway needs ablation soon. Direct EP involvement and a clear drug warning protect him from the next well meaning prescriber.",
        },
        {
          id: "c-routine",
          label: "I discharged him with a routine cardiology referral and told him to avoid energy drinks.",
          next: "s-routine",
          quality: "partial",
          feedback:
            "Discharge can be reasonable in some centres after EP agrees. But a routine referral can take months. He had instability and a high risk pathway. He needs EP within days and a clear drug warning.",
        },
        {
          id: "c-metoprolol",
          label: "I discharged him on metoprolol 25 mg twice daily to prevent recurrence.",
          next: "s-metoprolol",
          quality: "unsafe",
          feedback:
            "Beta blockers can promote pathway conduction during AF. They do not treat the substrate. The examiner wanted EP referral for ablation and avoidance of nodal blockers.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-routine",
      phase: "The cardiology fellow calls back",
      text:
        "The EP fellow sees the tracing in the system and calls. She asks you to keep him. She wants to do the EP study tomorrow. You cancel the discharge.",
      next: "q-patient",
    },
    {
      kind: "say",
      id: "s-metoprolol",
      phase: "The pharmacist calls",
      text:
        "The ED pharmacist flags the prescription against the ECG diagnosis. She asks you to call EP. The EP fellow asks you to cancel the metoprolol and keep him for an EP study.",
      next: "q-patient",
    },
    {
      kind: "question",
      id: "q-patient",
      phase: "Talking with the patient",
      prompt: "He asks if he can play in his tournament this weekend and drive home. What do you tell him?",
      seconds: 60,
      modelAnswer: [
        "Explain the extra electrical pathway in plain language.",
        "No competitive sport until the EP team clears him, usually after ablation.",
        "No driving today after sedation. Driving after that depends on EP advice and CCS fitness to drive guidance.",
        "Ablation cures most pathways with low risk.",
        "Confirm understanding and invite questions.",
      ],
      rubric: ["wpw-c1"],
      next: "q-teach",
    },
    {
      kind: "question",
      id: "q-teach",
      phase: "Teaching",
      prompt: "The nurse asks why diltiazem would have been dangerous when it is what you normally use for fast AF. What do you tell her, and what would you change on the unit?",
      seconds: 60,
      modelAnswer: [
        "In pre-excited AF the pathway and AV node compete. The node normally shields the ventricles.",
        "Blocking the node sends more impulses down the pathway, which has no decremental conduction.",
        "The clue is an irregular wide rhythm with changing QRS shapes and rates over 250.",
        "Thank her for asking. Frame it as a shared learning point.",
        "Suggest a short teaching huddle or an ECG alert on the AF order set.",
      ],
      rubric: ["wpw-c2", "wpw-l1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is admitted to the cardiology ward for an EP study in the morning. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "wpw-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Identifies pre-excited AF from an irregular rhythm with varying QRS width and rates over 250.",
      points: 3,
      teaching: "AF with a bundle branch block has a fixed QRS shape. Beat to beat change in width at very fast rates means conduction down an accessory pathway.",
      source: "esc-svt",
    },
    {
      id: "wpw-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Avoids all AV nodal blocking drugs including diltiazem, beta blockers, adenosine, digoxin and IV amiodarone.",
      points: 3,
      critical: true,
      teaching: "Nodal blockade leaves the pathway unopposed and can trigger VF. This is the single most important safety action.",
      source: "acc-af",
    },
    {
      id: "wpw-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Places defibrillation pads early in a stable patient with pre-excited AF.",
      points: 1,
      teaching: "Pre-excited AF can decompensate without warning. Pads on early makes the next step immediate.",
      source: "caep-af",
    },
    {
      id: "wpw-m1",
      competency: "management",
      criterion: "plan",
      text: "Chooses rhythm control with procainamide or electrical cardioversion rather than rate control.",
      points: 2,
      teaching: "The goal is to stop the AF. Rate control is dangerous when a pathway is conducting.",
      source: "esc-svt",
    },
    {
      id: "wpw-m2",
      competency: "management",
      criterion: "plan",
      text: "Doses procainamide 15 mg/kg IV over 60 minutes, maximum 1500 mg, with stop criteria for hypotension or QRS widening.",
      points: 2,
      teaching: "Procainamide slows pathway conduction. CAEP advises avoiding it if systolic is under 100 or QTc is over 500 ms, and stopping if pressure drops or the QRS widens visibly, such as by more than 30 percent.",
      source: "caep-af",
    },
    {
      id: "wpw-m3",
      competency: "management",
      criterion: "plan",
      text: "Recognizes onset under 12 hours with CHADS-65 negative means no anticoagulation is needed before or after cardioversion.",
      points: 1,
      teaching: "Canadian guidance supports cardioversion without anticoagulation in low risk patients with clear onset under 12 hours.",
      source: "ccs-af",
    },
    {
      id: "wpw-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Performs immediate synchronized cardioversion at 200 J biphasic when he becomes unstable.",
      points: 3,
      critical: true,
      teaching: "Instability means electricity now. Start AF cardioversion at 150 to 200 J or more, not at low energy. Anterolateral and anteroposterior pads are both acceptable.",
      source: "caep-af",
    },
    {
      id: "wpw-r4",
      competency: "resuscitation",
      criterion: "plan",
      text: "Uses hemodynamically neutral sedation such as ketamine 0.5 to 1 mg/kg or etomidate 0.1 to 0.15 mg/kg.",
      points: 1,
      teaching: "Full dose propofol can deepen hypotension. Lower doses or neutral agents keep the pressure up.",
      source: "caep-af",
    },
    {
      id: "wpw-a2",
      competency: "assessment",
      criterion: "data",
      text: "Interprets the post conversion ECG as WPW pattern and explains the high risk features.",
      points: 2,
      teaching: "A shortest pre-excited RR of 250 ms or less predicts a pathway capable of conducting VF.",
      source: "esc-svt",
    },
    {
      id: "wpw-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Arranges urgent electrophysiology review for catheter ablation rather than routine follow up.",
      points: 3,
      critical: true,
      teaching: "Ablation is first line for symptomatic WPW. It removes the risk of sudden death and is curative in most patients.",
      source: "esc-svt",
    },
    {
      id: "wpw-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Documents clearly that AV nodal blocking drugs must be avoided.",
      points: 1,
      teaching: "The next clinician may see 'AF' and reach for a rate control drug. A clear warning in the chart prevents harm.",
      source: "acc-af",
    },
    {
      id: "wpw-m4",
      competency: "management",
      criterion: "plan",
      text: "Advises no competitive sport until cleared by electrophysiology.",
      points: 1,
      teaching: "Exertion drove this episode. Sport clearance should come from the EP team after ablation.",
      source: "esc-svt",
    },
    {
      id: "wpw-c1",
      competency: "communication",
      criterion: "plan",
      text: "Explains the diagnosis, sport and driving advice in plain language and checks understanding.",
      points: 1,
      teaching: "Young patients may downplay risk once they feel well. Be clear about why restrictions matter.",
      source: "ccs-af",
    },
    {
      id: "wpw-c2",
      competency: "communication",
      criterion: "plan",
      text: "Teaches the nurse the mechanism without blame.",
      points: 1,
      teaching: "The nurse offered a common answer to a common problem. Teaching in the moment builds a safer team.",
      source: "acc-af",
    },
    {
      id: "wpw-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Proposes a system fix such as an ECG warning on the AF order set or a team huddle.",
      points: 1,
      teaching: "Near misses are the cheapest lessons. Build the check into the system, not into memory.",
      source: "caep-af",
    },
  ],
  sources: [
    {
      id: "caep-af",
      citation: "Stiell IG, et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/",
    },
    {
      id: "ccs-af",
      citation: "Andrade JG, et al. The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society Comprehensive Guidelines for the Management of Atrial Fibrillation. Canadian Journal of Cardiology. 2020.",
    },
    {
      id: "esc-svt",
      citation: "Brugada J, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. European Heart Journal. 2020.",
    },
    {
      id: "acc-af",
      citation: "Joglar JA, et al. 2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation. Circulation. 2024.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
