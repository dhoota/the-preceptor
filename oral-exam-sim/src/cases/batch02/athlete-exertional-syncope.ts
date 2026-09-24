// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const athleteExertionalSyncope: OralCase = {
  id: "athlete-exertional-syncope",
  title: "Collapse at hockey practice",
  blueprint: "cardio",
  alsoCovers: ["ethics"],
  priorityTopic: "arrhythmia",
  keyFeatures: [
    { topic: "arrhythmia", n: 1 },
    { topic: "arrhythmia", n: 2 },
    { topic: "arrhythmia", n: 5 },
    { topic: "shock", n: 7 },
  ],
  summary: "A 19 year old varsity hockey player collapsed during sprints and now feels fine and wants to leave.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre when the following patient arrives. " +
    "A 19 year old varsity hockey player collapsed during practice sprints 90 minutes ago and has a 2 cm chin laceration. " +
    "Cardiology and echo are available during the day.",
  card: {
    vitals: {
      temperature: "36.8°C",
      pulse: "84/minute",
      resp: "16/minute",
      bp: "122/70 mmHg",
      o2sat: "99% on room air",
    },
    medications: "Caffeine based pre-workout powder. No other medications documented",
    allergies: "Not documented",
  },
  findings: [
    {
      id: "trainer",
      label: "Collateral from the team trainer and triage",
      result:
        "The team trainer says: 'He dropped mid stride and was out for maybe 20 seconds. He came around fast. Probably dehydrated. He wants to be back for Saturday's playoff game.' " +
        "Triage assigned CTAS 2. Capillary glucose 5.4 mmol/L.",
    },
    {
      id: "history",
      label: "History of presenting illness",
      result:
        "He was sprinting at full effort. No warning, no nausea, no sweating beforehand. He woke on the ice with his chin bleeding. No chest pain.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "He had a similar faint during summer training 6 months ago that was put down to heat.",
    },
    {
      id: "meds",
      label: "Medications and supplements",
      result: "He takes a caffeine based pre-workout powder.",
    },
    {
      id: "family",
      label: "Family history",
      result:
        "His father's brother died suddenly at 34 while jogging. The cause was never clear to the family. His father has never had a heart test. No known epilepsy in the family.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Well, fit young man. Grade 3 of 6 harsh systolic murmur at the left lower sternal border. It gets louder when he stands and during Valsalva and softer when he squats. " +
        "Brisk carotid upstroke. No radiation to the carotids. Lungs clear. Normal neurological exam. Orthostatic vitals normal.",
    },
    {
      id: "ecg",
      label: "12 lead ECG",
      result:
        "Sinus rhythm at 76. Very high QRS voltage. Deep narrow Q waves in II, III, aVF, V5 and V6. T wave inversion of 2 to 3 mm in V4 to V6, I and aVL. " +
        "PR 156 ms. QRS 96 ms. QTc 436 ms. No delta wave. No Brugada pattern. No epsilon wave.",
    },
    {
      id: "pocus",
      label: "Bedside echo",
      result:
        "Parasternal long axis shows a markedly thick interventricular septum of about 2.4 cm. Posterior wall 1.1 cm. Small, hyperdynamic left ventricle. " +
        "The anterior mitral leaflet appears to move toward the septum in systole. No pericardial effusion.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "High sensitivity troponin T 9 ng/L. Potassium 4.1 mmol/L. Magnesium 0.84 mmol/L. Hemoglobin 148 g/L. Creatinine 92 µmol/L. CK 310 U/L. Urine drug screen negative.",
    },
    {
      id: "csrs",
      label: "Canadian Syncope Risk Score",
      result:
        "No vasovagal predisposition. No known heart disease. Systolic 122. Troponin normal. Normal QRS axis and QRS duration. QTc under 480 ms. ED diagnosis cardiac syncope. Total score 2, medium risk.",
    },
    {
      id: "lac",
      label: "Chin laceration",
      result: "2 cm clean chin laceration. No dental injury. No jaw tenderness. No neck pain. Canadian C-Spine Rule applied and imaging not needed.",
    },
    {
      id: "telemetry",
      label: "Telemetry strip",
      result: "Nine beat run of monomorphic wide complex tachycardia at 180 when he stood up to use the washroom. Back to sinus on its own.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text:
        "He is sitting up in his practice gear and laughing with the trainer. He asks if you can just stitch his chin so he can go home.",
      next: "q-risk",
    },
    {
      kind: "question",
      id: "q-risk",
      phase: "Risk",
      prompt: "The trainer thinks it was dehydration. What in this history worries you, and how do you frame his risk?",
      seconds: 75,
      modelAnswer: [
        "Syncope during peak exertion is a high risk feature. Vasovagal syncope happens after exercise, not during it.",
        "No prodrome. Injury from the fall.",
        "Second episode.",
        "Sudden unexplained death of a young relative.",
        "Murmur that changes with manoeuvres.",
        "The Canadian Syncope Risk Score helps when the cause is unclear. It does not override these red flags.",
        "Get these facts by asking him and the trainer: activity at collapse, prodrome, prior faints and family history.",
      ],
      rubric: ["syn-a1", "syn-a2", "syn-h1", "syn-h2"],
      choices: [
        {
          id: "c-highrisk",
          label: "I told the trainer that syncope mid sprint with no warning, a prior episode and a young relative's sudden death makes this cardiac until proven otherwise.",
          next: "q-ecg",
          quality: "strong",
          feedback:
            "Correct. Exertional syncope is a major high risk feature in the ESC syncope guideline. A family history of sudden death under 40 adds to it. The examiner wanted you to reject the dehydration label.",
        },
        {
          id: "c-csrs",
          label: "I calculated his Canadian Syncope Risk Score, which is only medium risk, and planned an outpatient echo.",
          next: "s-csrs",
          quality: "partial",
          feedback:
            "The CSRS predicts 30 day serious outcomes when no serious cause is found in the ED. It was not built to override clear cardiac red flags like exertional syncope. His overall picture needs a same day cardiac evaluation.",
        },
        {
          id: "c-vasovagal",
          label: "I agreed it was likely dehydration, gave a litre of saline and planned to discharge after the sutures.",
          next: "s-vasovagal",
          quality: "unsafe",
          feedback:
            "Syncope during effort without prodrome is not dehydration until proven otherwise. Missing a cardiac cause in a young athlete can mean sudden death. The examiner wanted high risk features named.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-csrs",
      phase: "Your staff colleague",
      text:
        "Your colleague reviews the chart before signing and asks you to look again at the murmur and the family history. She suggests a closer look at the ECG before you plan anything outpatient.",
      next: "q-ecg",
    },
    {
      kind: "say",
      id: "s-vasovagal",
      phase: "Before discharge",
      text:
        "The nurse doing the discharge vitals hears a loud murmur and asks you to come listen. She also hands you the ECG, which nobody has read yet.",
      next: "q-ecg",
    },
    {
      kind: "question",
      id: "q-ecg",
      phase: "ECG and exam",
      prompt: "Read the ECG and interpret the murmur. What is your leading diagnosis?",
      seconds: 75,
      modelAnswer: [
        "High voltage with deep narrow inferolateral Q waves and lateral T wave inversion is not normal athletic remodelling.",
        "Murmur louder with standing and Valsalva and softer with squatting suggests dynamic outflow obstruction.",
        "Leading diagnosis is hypertrophic cardiomyopathy with outflow obstruction.",
        "Bedside echo shows a septum near 2.4 cm and possible systolic anterior motion of the mitral valve.",
        "A septum of 1.5 cm or more supports HCM in an adult.",
      ],
      rubric: ["syn-a3", "syn-a4"],
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Differential",
      prompt: "What other causes of exertional syncope in a young athlete do you want to exclude, and how?",
      seconds: 60,
      modelAnswer: [
        "Anomalous coronary artery origin. CT coronary angiography.",
        "Arrhythmogenic cardiomyopathy. ECG, echo and MRI.",
        "Long QT, CPVT, Brugada and WPW. ECG and later exercise testing.",
        "Myocarditis. Troponin and MRI.",
        "Aortic stenosis. Echo.",
        "Stimulant use. History and drug screen.",
      ],
      rubric: ["syn-a5", "syn-h3"],
      next: "s-nsvt",
    },
    {
      kind: "say",
      id: "s-nsvt",
      phase: "Thirty minutes later",
      text:
        "He stands up to go to the washroom. He says he feels lightheaded and sits back down on the stretcher. The telemetry shows a 9 beat run of wide complex tachycardia at 180. " +
        "Now he is in sinus at 112. Blood pressure 88/52. He says his chest feels tight.",
      next: "q-lvot",
    },
    {
      kind: "question",
      id: "q-lvot",
      phase: "Lightheaded and hypotensive",
      prompt: "What do you do for his hypotension and chest tightness? What will you avoid?",
      seconds: 75,
      modelAnswer: [
        "Lie him flat and raise his legs. Increased preload reduces outflow obstruction.",
        "IV fluid bolus, for example 500 mL to 1 L of saline.",
        "If still hypotensive, a pure vasoconstrictor such as phenylephrine 50 to 100 mcg IV.",
        "Avoid nitrates, diuretics, inotropes such as dobutamine and epinephrine, and vasodilators. They worsen obstruction.",
        "Pads on. Telemetry. Correct potassium and magnesium to high normal.",
        "A beta blocker is the first line long term drug, started with cardiology.",
      ],
      rubric: ["syn-r1", "syn-m1"],
      choices: [
        {
          id: "c-preload",
          label: "I laid him flat, raised his legs, gave a litre of saline, put pads on and had phenylephrine ready. I avoided nitrates and inotropes.",
          next: "s-settled",
          quality: "strong",
          feedback:
            "Well done. In obstructive HCM a full, slow ventricle has less obstruction. Fluids and a pure vasoconstrictor help. Inotropes and vasodilators make it worse.",
        },
        {
          id: "c-metoprolol",
          label: "I gave metoprolol 5 mg IV to slow his heart rate.",
          next: "s-metoprolol",
          quality: "partial",
          feedback:
            "Beta blockers are first line in obstructive HCM. But an IV bolus to a hypotensive patient before restoring preload is risky. Fluids and positioning come first. Start the beta blocker with cardiology.",
        },
        {
          id: "c-nitro",
          label: "I gave a nitroglycerin spray for his chest tightness.",
          next: "s-nitro",
          quality: "unsafe",
          feedback:
            "Nitrates lower preload and afterload. That worsens outflow obstruction and can cause syncope or arrest in HCM. The examiner wanted preload restored and nitrates avoided.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-metoprolol",
      phase: "Five minutes later",
      text: "His pressure falls to 80/46 and he feels faint again. You lay him flat, raise his legs and give a litre of saline. His pressure recovers to 108/64.",
      next: "s-settled",
    },
    {
      kind: "say",
      id: "s-nitro",
      phase: "One minute later",
      text:
        "He goes pale and his eyes roll back. His pressure is 64/38. The nurse lays him flat. You give a fluid bolus and phenylephrine 100 mcg IV. He wakes up. His pressure comes back to 104/62.",
      next: "s-settled",
    },
    {
      kind: "say",
      id: "s-settled",
      phase: "Settled",
      text: "He is lying flat, in sinus at 86 with a pressure of 116/68. The chest tightness is gone. He asks again when he can go home.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "What is your disposition and what do you tell him about sport?",
      seconds: 75,
      modelAnswer: [
        "Admit to a monitored bed under cardiology.",
        "Formal echo and cardiac MRI. Risk stratification for sudden death.",
        "Unexplained syncope is a major sudden death risk marker in HCM. A possible HCM death in a close relative and NSVT add to it. An ICD discussion is likely.",
        "No competitive sport or intense exertion until expert assessment. Return to play is then a shared decision.",
        "Stop stimulant pre-workout products. Stay hydrated.",
      ],
      rubric: ["syn-d1", "syn-d2"],
      choices: [
        {
          id: "c-admit",
          label: "I admitted him to telemetry under cardiology for echo, MRI and sudden death risk assessment and told him no hockey until cardiology clears him.",
          next: "q-coach",
          quality: "strong",
          feedback:
            "Correct. Exertional syncope with NSVT in suspected HCM is high risk for sudden death. Inpatient work up and an ICD discussion are appropriate.",
        },
        {
          id: "c-holter",
          label: "I got a cardiology consult in the ED and discharged him with a Holter and outpatient echo, no sport until then.",
          next: "s-holter",
          quality: "partial",
          feedback:
            "Involving cardiology and restricting sport is good. But he had NSVT and hypotension in the department. With unexplained exertional syncope, NSVT and a possible family sudden death he needs monitored inpatient care.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-holter",
      phase: "The cardiologist calls back",
      text: "The cardiology fellow reviews the telemetry strip. She asks you to keep him on a monitor. She will admit him for an echo and MRI tomorrow.",
      next: "q-coach",
    },
    {
      kind: "question",
      id: "q-coach",
      phase: "A phone call",
      prompt: "The team coach calls the ED and asks you if the patient can play Saturday and what is wrong with him. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Do not share health information without the patient's consent.",
        "He is 19 and capable. The coach is not his substitute decision maker.",
        "Tell the coach you cannot discuss a patient. Offer to pass on a message.",
        "Talk to the patient. Encourage him to tell the team himself that he cannot play until cleared.",
        "Document the call.",
      ],
      rubric: ["syn-p1"],
      choices: [
        {
          id: "c-confidential",
          label: "I told the coach I could not share anything without his consent, then spoke with him about what he wanted the team to know.",
          next: "q-family",
          quality: "strong",
          feedback:
            "Correct. Under the Personal Health Information Protection Act you need his consent to disclose. Helping him plan what to tell the team respects his privacy and keeps him safe.",
        },
        {
          id: "c-disclose",
          label: "I told the coach he has a heart condition and must not play Saturday, to keep him safe.",
          next: "s-disclose",
          quality: "unsafe",
          feedback:
            "Well meant but a privacy breach. PHIPA allows disclosure without consent only to reduce a significant risk of serious bodily harm. That does not apply because he is admitted and can be counselled directly. Get his consent first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-disclose",
      phase: "An hour later",
      text:
        "His phone lights up with messages from teammates asking about his heart. He is angry and asks who told them. You apologize, explain what happened and let him know you will report it through the privacy process.",
      next: "q-family",
    },
    {
      kind: "question",
      id: "q-family",
      phase: "Family and driving",
      prompt: "His parents arrive. What do you tell them about the rest of the family, and what about his driving?",
      seconds: 60,
      modelAnswer: [
        "With the patient's consent, explain that HCM is often inherited.",
        "First degree relatives should have ECG and echo screening. Genetic counselling and testing through cardiology.",
        "His uncle's death may have been from the same condition.",
        "No driving until cardiology assessment. Syncope from a cardiac cause is a risk of sudden incapacitation.",
        "In Ontario physicians must report a condition with a moderate or high risk of sudden incapacitation, or one that caused it and is likely to recur, to the Registrar of Motor Vehicles. Tell him before you report.",
      ],
      rubric: ["syn-c1", "syn-d3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is admitted to the cardiology telemetry unit. His parents book screening for themselves and his younger sister. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "syn-a1",
      competency: "assessment",
      criterion: "history",
      text: "Identifies syncope during exertion without prodrome as a high risk cardiac feature.",
      points: 3,
      critical: true,
      teaching: "Vasovagal syncope happens after exercise stops. Syncope at peak effort suggests an arrhythmia or outflow obstruction.",
      source: "esc-syncope",
    },
    {
      id: "syn-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Uses the Canadian Syncope Risk Score appropriately and does not let it override high risk features.",
      points: 2,
      teaching: "The CSRS predicts 30 day serious outcomes in adults when no serious cause is found during the ED evaluation. Red flags like exertional syncope and a family history of sudden death trump the score.",
      source: "csrs",
    },
    {
      id: "syn-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes the ECG pattern of HCM and distinguishes it from athletic remodelling.",
      points: 2,
      teaching: "Deep narrow Q waves and lateral T wave inversion are not normal in athletes. Voltage alone is common in fit people.",
      source: "aha-hcm",
    },
    {
      id: "syn-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Interprets a murmur that increases with standing and Valsalva as dynamic outflow obstruction.",
      points: 1,
      teaching: "Less preload means more obstruction. Squatting increases preload and softens the murmur.",
      source: "aha-hcm",
    },
    {
      id: "syn-a5",
      competency: "assessment",
      criterion: "physical",
      text: "Lists other causes of exertional syncope such as anomalous coronary, arrhythmogenic cardiomyopathy, long QT, CPVT and WPW.",
      points: 1,
      teaching: "Young athletes with exertional syncope need a structured search for inherited and structural disease.",
      source: "esc-syncope",
    },
    {
      id: "syn-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats hypotension in obstructive HCM with positioning, fluids and a pure vasoconstrictor such as phenylephrine.",
      points: 2,
      teaching: "A fuller ventricle with higher afterload has less obstruction. Phenylephrine 50 to 100 mcg IV raises afterload without adding inotropy.",
      source: "aha-hcm",
    },
    {
      id: "syn-m1",
      competency: "management",
      criterion: "management",
      text: "Avoids nitrates, diuretics, inotropes and vasodilators in suspected obstructive HCM.",
      points: 3,
      critical: true,
      teaching: "These drugs worsen outflow obstruction and can cause collapse. Beta blockers are the first line long term drug.",
      source: "aha-hcm",
    },
    {
      id: "syn-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to a monitored bed under cardiology for echo, MRI and sudden death risk stratification.",
      points: 3,
      critical: true,
      teaching: "Unexplained syncope is a major sudden death risk marker in HCM. NSVT adds risk. Together they often lead to an ICD discussion.",
      source: "aha-hcm",
    },
    {
      id: "syn-d2",
      competency: "disposition",
      criterion: "management",
      text: "Restricts competitive sport and intense exertion until expert assessment.",
      points: 2,
      teaching: "Return to play in HCM is now a shared decision after expert evaluation. Until then, no competitive sport.",
      source: "aha-hcm",
    },
    {
      id: "syn-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Protects the patient's health information and does not disclose to the coach without consent.",
      points: 2,
      teaching: "Under the Personal Health Information Protection Act disclosure needs consent unless a specific exception applies.",
      source: "phipa",
    },
    {
      id: "syn-c1",
      competency: "communication",
      criterion: "process",
      text: "Advises screening and genetic counselling for first degree relatives, with the patient's consent to involve family.",
      points: 1,
      teaching: "HCM is usually autosomal dominant. Screening relatives can prevent another sudden death.",
      source: "aha-hcm",
    },
    {
      id: "syn-d3",
      competency: "disposition",
      criterion: "process",
      text: "Advises no driving until cardiology assessment and explains the Ontario duty to report.",
      points: 1,
      teaching: "Cardiac syncope that may recur is a risk of sudden incapacitation. Ontario makes this a mandatory report to the Registrar of Motor Vehicles.",
      source: "ontario-hta",
    },
    {
      id: "syn-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks exactly what he was doing at the moment of collapse, about warning symptoms, chest pain or palpitations, and how quickly he recovered.",
      points: 2,
      teaching: "Collapse at peak effort with no prodrome and a fast recovery points to an arrhythmia or outflow obstruction. Vasovagal faints come after exercise stops.",
      source: "esc-syncope",
    },
    {
      id: "syn-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about earlier faints and a family history of sudden death under 40, inherited heart disease or epilepsy.",
      points: 2,
      teaching: "A second episode and an uncle who died suddenly at 34 raise the risk of an inherited cardiomyopathy. Unexplained drownings and 'epilepsy' in relatives can hide the same story.",
      source: "aha-hcm",
    },
    {
      id: "syn-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about stimulants, supplements, recreational drugs and medications.",
      points: 1,
      teaching: "Caffeine based pre-workout powders and stimulants can provoke arrhythmias and worsen outflow obstruction.",
      source: "esc-syncope",
    },
  ],
  sources: [
    {
      id: "csrs",
      citation: "Thiruganasambandamoorthy V, et al. Development of the Canadian Syncope Risk Score to predict serious adverse events after emergency department assessment of syncope. CMAJ. 2016.",
      url: "https://www.cmaj.ca/content/188/12/e289",
    },
    {
      id: "esc-syncope",
      citation: "Brignole M, et al. 2018 ESC Guidelines for the diagnosis and management of syncope. European Heart Journal. 2018.",
      url: "https://academic.oup.com/eurheartj/article/39/21/1883/4939241",
    },
    {
      id: "aha-hcm",
      citation: "Ommen SR, et al. 2024 AHA/ACC/AMSSM/HRS/PACES/SCMR Guideline for the Management of Hypertrophic Cardiomyopathy. Circulation. 2024.",
      url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001250",
    },
    {
      id: "phipa",
      citation: "Ontario. Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A.",
      url: "https://www.canlii.org/en/on/laws/stat/so-2004-c-3-sch-a/latest/so-2004-c-3-sch-a.html",
    },
    {
      id: "ontario-hta",
      citation: "Ontario. Highway Traffic Act, R.S.O. 1990, c. H.8, section 203, and O. Reg. 340/94. Medical reporting to the Registrar of Motor Vehicles.",
      url: "https://www.ontario.ca/page/reporting-driver-medical-review",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
