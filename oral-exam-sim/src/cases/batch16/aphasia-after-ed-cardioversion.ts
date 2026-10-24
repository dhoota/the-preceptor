// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const aphasiaAfterEdCardioversion: OralCase = {
  id: "aphasia-after-ed-cardioversion",
  title: "A call to the bedside before discharge",
  blueprint: "neuro",
  alsoCovers: ["cardio", "comm"],
  priorityTopic: "cva",
  keyFeatures: [
    { topic: "cva", n: 1 },
    { topic: "cva", n: 3 },
    { topic: "cqi", n: 1 },
    { topic: "cqi", n: 2 },
  ],
  summary: "A woman treated in your department this morning is suddenly unwell while she waits to go home.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre when a nurse calls you to a patient who is waiting to go home. " +
    "A 68 year old woman who was cardioverted for atrial fibrillation 90 minutes ago now cannot get her words out, and her right arm is weak.",
  card: {
    vitals: {
      temperature: "36.8°C oral",
      pulse: "74/minute",
      resp: "18/minute",
      bp: "176/94 mmHg",
      o2sat: "96% on room air",
      weight: "74 kg (163 lb)",
    },
    medications: "Amlodipine 10 mg daily. Metformin 1000 mg twice daily. Atorvastatin 40 mg daily.",
    allergies: "None known",
  },
  findings: [
    {
      id: "nurse",
      label: "The nurse's account",
      result:
        "At 11:00 she was sitting up, eating toast and chatting about going home. At 11:10 the nurse found her trying to speak with only a few words coming out. She had dropped her cup from her right hand. No shaking, no fall and no complaint of headache.",
    },
    {
      id: "ed-record",
      label: "This morning's emergency record",
      result:
        "Triage at 07:50: palpitations 'since I woke at 06:30'. ECG atrial fibrillation at 128/minute. The physician on the 02:00 to 10:00 shift documented onset under 12 hours. CHADS-65 was not recorded. " +
        "Procedural sedation at 09:38 with fentanyl 50 mcg IV and propofol 60 mg IV. One synchronized 150 J shock at 09:41 restored sinus rhythm. She was awake and talking normally by 10:05. No anticoagulant was given or prescribed. Handed over to you at 10:00 as awaiting discharge.",
    },
    {
      id: "husband",
      label: "Collateral history from her husband",
      result:
        "He is on his way in to pick her up and answers by phone. She felt a fluttering in her chest at about 21:30 last night while they watched television, and she slept badly. It was much worse when she woke, so she called it the start. She has never had this before.",
    },
    {
      id: "pmh",
      label: "Past history",
      result:
        "Hypertension for 12 years and type 2 diabetes for 8 years. No previous stroke or TIA. No bleeding problems, no recent surgery or head injury, no valve disease and no heart failure. Fully independent. She volunteers at the library and drives.",
    },
    {
      id: "meds",
      label: "Medication details",
      result:
        "Amlodipine 10 mg daily, metformin 1000 mg twice daily, atorvastatin 40 mg daily. All taken at 07:00 today. No anticoagulant, no antiplatelet and no supplements.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Retired bank manager. Lives with her husband. Never smoked. One glass of wine on weekends.",
    },
    {
      id: "neuro",
      label: "Neurological examination at 11:14",
      result:
        "Alert. Nonfluent speech with only single words. She follows simple commands but cannot answer the month or her age. No gaze deviation. Visual fields full to threat. Right lower facial weakness. " +
        "Right arm falls to the bed without effort against gravity. Right leg drifts but does not hit the bed. Reduced sensation in the right arm. Mild dysarthria. NIHSS 12.",
    },
    {
      id: "general",
      label: "General examination",
      result: "Regular pulse. No murmurs. Chest clear. No tongue bite, no incontinence and no injury. Breathing comfortably.",
    },
    {
      id: "bedside",
      label: "Bedside tests",
      result: "Capillary glucose 8.2 mmol/L. ECG sinus rhythm at 74/minute with normal intervals. Saturation 96% on room air.",
    },
    {
      id: "labs",
      label: "Blood work (resulted at 11:40)",
      result:
        "Hemoglobin 138 g/L. Platelets 221 x 10^9/L. INR 1.0. aPTT 28 seconds. Sodium 139 mmol/L. Potassium 4.2 mmol/L. Creatinine 82 µmol/L. Troponin within normal limits.",
    },
    {
      id: "ct",
      label: "Non contrast CT head (11:24)",
      result: "No hemorrhage. Hyperdense left middle cerebral artery. Subtle loss of grey white differentiation in the left insula. ASPECTS 9.",
    },
    {
      id: "cta",
      label: "CT angiography (11:27)",
      result: "Occlusion of the proximal left M1 segment of the middle cerebral artery with good collaterals. No carotid stenosis. No dissection.",
    },
    {
      id: "post-evt",
      label: "After thrombectomy (12:55)",
      result: "Near complete reperfusion after one pass. NIHSS now 4 with mild word finding difficulty and mild right hand weakness. Right femoral access site is soft. BP 192/100 mmHg.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A comprehensive stroke centre. CT is beside the department. The stroke neurologist and the neurointerventional team are in house during the day. There is an acute stroke unit and an ICU.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "11:12",
      text: "She looks at you and tries to speak, then shakes her head in frustration. Her right hand lies still on the blanket. The nurse says she was fine at 11:00.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first minutes",
      prompt: "What do you do in the next few minutes?",
      seconds: 90,
      modelAnswer: [
        "Treat this as an acute stroke until proven otherwise. Activate the in-hospital code stroke now.",
        "Confirm the last known well time with the nurse. It is 11:00.",
        "Airway, breathing and circulation. Capillary glucose now.",
        "Quick focused exam and NIHSS. IV access and blood work, but do not wait for results unless an anticoagulant is suspected.",
        "Go straight to non contrast CT and CT angiography.",
        "Consider mimics briefly. Hypoglycemia, a seizure and residual sedation. None should delay imaging.",
      ],
      rubric: ["cv-h1", "cv-p2", "cv-m1", "cv-pr1"],
      choices: [
        {
          id: "c-code",
          label: "I confirmed she was last seen well at 11:00, checked her glucose, did a quick NIHSS, called an in-hospital code stroke and took her straight to CT and CT angiography with blood work sent on the way.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Good. An in-hospital stroke has a known last well time, which is a chance to treat fast. Glucose is the one test to do first. Everything else runs in parallel so the scan is not delayed.",
        },
        {
          id: "c-sedation",
          label: "I thought this was leftover sedation from the cardioversion and asked the nurse to recheck her in 30 minutes.",
          next: "s-sedation",
          quality: "unsafe",
          feedback:
            "She was talking normally at 10:05 and again at 11:00. Sedation does not cause new aphasia and a one sided arm weakness 90 minutes later. A focal deficit after a cardioversion is an embolic stroke until proven otherwise. Waiting costs brain.",
        },
        {
          id: "c-wait-neuro",
          label: "I asked the stroke neurologist to come and examine her, and planned the CT once neurology had seen her.",
          next: "s-wait-neuro",
          quality: "partial",
          feedback:
            "Calling the stroke team is right, but imaging should not wait for their exam. The emergency physician can start the code stroke and send her to CT. The neurologist can meet her at the scanner.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-sedation",
      phase: "11:35",
      text: "The nurse calls again. Her speech is no better and her right arm has not moved. You call an in-hospital code stroke and take her to CT, 25 minutes later than you could have.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-wait-neuro",
      phase: "11:22",
      text: "The stroke neurologist arrives and asks why she is not already in the scanner. You go to CT together.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History on the way to CT",
      prompt: "She cannot give a history. What do you need to know, and where will you get it?",
      seconds: 90,
      modelAnswer: [
        "Last known well from the nurse who saw her. Exactly 11:00.",
        "Anticoagulant or antiplatelet use and the last dose. Recent surgery, bleeding, head injury, previous stroke or TIA.",
        "This morning's record. The drugs given for sedation, the shock and whether any heparin was given.",
        "The true onset of the atrial fibrillation. Call her husband, because the triage history came from her alone.",
        "Baseline function and her wishes.",
      ],
      rubric: ["cv-h1", "cv-h2", "cv-h3", "cv-h4"],
      next: "q-ddx",
    },
    {
      kind: "question",
      id: "q-ddx",
      phase: "Localization and cause",
      prompt: "Her husband says the palpitations started at about 21:30 last night. Where is the lesion, what is the likely cause, and what else are you thinking about?",
      seconds: 80,
      modelAnswer: [
        "Left middle cerebral artery territory. Nonfluent aphasia with right face and arm weakness worse than the leg.",
        "Likely a cardioembolic stroke after cardioversion. The atrial fibrillation had lasted just over 12 hours, she meets three CHADS-65 criteria and she had no anticoagulation.",
        "A large vessel occlusion is likely with an NIHSS of 12. CT angiography will show it.",
        "Intracerebral hemorrhage must be excluded on CT before any treatment.",
        "Mimics are unlikely. Glucose is 8.2 mmol/L, there was no seizure, and sedation does not cause new focal signs this late.",
      ],
      rubric: ["cv-p1", "cv-p2", "cv-p3"],
      next: "s-imaging",
    },
    {
      kind: "say",
      id: "s-imaging",
      phase: "11:30",
      text: "The CT shows no hemorrhage and an ASPECTS of 9. CT angiography shows a proximal left M1 occlusion with good collaterals. Her blood pressure is 176/94 mmHg. The neurointerventional team is ready.",
      next: "q-reperfusion",
    },
    {
      kind: "question",
      id: "q-reperfusion",
      phase: "Reperfusion",
      prompt: "What reperfusion treatment does she get?",
      seconds: 100,
      modelAnswer: [
        "She is within 4.5 hours of last known well, has a disabling deficit, no hemorrhage and no anticoagulant.",
        "IV thrombolysis now. Tenecteplase 0.25 mg/kg, which is 18.5 mg for 74 kg, as a single bolus over 5 seconds. Alteplase 0.9 mg/kg is an alternative.",
        "Do not wait for the INR, since she takes no anticoagulant.",
        "Blood pressure is below 185/110 mmHg, so it needs no treatment before the bolus.",
        "Endovascular thrombectomy for the M1 occlusion in parallel. Thrombolysis must not delay the move to the angiography suite.",
        "Recent cardioversion and procedural sedation are not contraindications.",
      ],
      rubric: ["cv-m2", "cv-m3"],
      choices: [
        {
          id: "c-tnk-evt",
          label: "I gave tenecteplase 18.5 mg IV as a single bolus, 0.25 mg/kg, without waiting for the INR, and sent her straight to the angiography suite for thrombectomy.",
          next: "s-evt",
          quality: "strong",
          feedback:
            "This is the key decision. She meets criteria for IV thrombolysis and for thrombectomy, and Canadian guidance gives both. Tenecteplase is a single bolus, so it does not slow the move to angiography.",
        },
        {
          id: "c-evt-only",
          label: "I skipped thrombolysis because she had a cardioversion this morning, and sent her for thrombectomy alone.",
          next: "s-evt-only",
          quality: "partial",
          feedback:
            "Thrombectomy is right, but cardioversion is not a reason to withhold thrombolysis. She has no anticoagulant, no hemorrhage and a blood pressure under 185/110 mmHg. Eligible patients should get IV thrombolysis on the way to thrombectomy.",
        },
        {
          id: "c-heparin",
          label: "I started an IV heparin infusion for the cardioembolic stroke and asked neurology about thrombectomy.",
          next: "s-heparin",
          quality: "unsafe",
          feedback:
            "Urgent anticoagulation is not a treatment for acute cardioembolic stroke. It raises the risk of bleeding into the infarct and does not open the artery. It also rules out thrombolysis. She needs tenecteplase and thrombectomy.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-evt-only",
      phase: "11:33",
      text: "The stroke neurologist asks why she has not had thrombolysis, since she has no contraindication. She gives tenecteplase 18.5 mg as the patient is wheeled to angiography.",
      next: "s-evt",
    },
    {
      kind: "say",
      id: "s-heparin",
      phase: "11:34",
      text: "The pharmacist questions the heparin order. The stroke neurologist stops it before it starts and gives tenecteplase 18.5 mg as a bolus. The patient goes to angiography.",
      next: "s-evt",
    },
    {
      kind: "say",
      id: "s-evt",
      phase: "12:55",
      text: "She is back in your resuscitation bay waiting for a stroke unit bed. One pass restored near complete flow. Her NIHSS is now 4. Her blood pressure is 192/100 mmHg and her groin site is soft.",
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "After reperfusion",
      prompt: "What are your orders while she waits in your department?",
      seconds: 90,
      modelAnswer: [
        "Keep blood pressure below 185/110 mmHg for 24 hours after thrombolysis. Give labetalol 10 mg IV now and repeat as needed.",
        "Neurological checks and vital signs every 15 minutes at first. Check the groin site.",
        "No antiplatelet or anticoagulant for 24 hours. Repeat CT at 24 hours before starting one.",
        "Swallow screen before anything by mouth. Treat glucose and fever.",
        "If she has headache, vomiting or a worse deficit, stop and get an urgent CT for hemorrhage.",
        "Cardiac monitoring for recurrent atrial fibrillation. The stroke team decides when to start an anticoagulant.",
      ],
      rubric: ["cv-m3", "cv-m4", "cv-pr4"],
      next: "s-husband",
    },
    {
      kind: "say",
      id: "s-husband",
      phase: "13:20",
      text: "Her husband arrives. She can now say short sentences. He asks you, 'The doctor this morning said it started when she woke. I told the nurse it was last night. Did the shock cause this?'",
      next: "q-disclose",
    },
    {
      kind: "question",
      id: "q-disclose",
      phase: "The family",
      prompt: "What do you say to them?",
      seconds: 90,
      modelAnswer: [
        "Find a quiet place, sit down and include her. Express sorrow for what has happened.",
        "Give the known facts in plain words. She had a stroke from a clot, likely from her heart after the rhythm was restored. Treatment reopened the artery.",
        "Say honestly that the palpitations probably began last night. With her risk factors, a cardioversion that late usually needs blood thinners first. The care will be reviewed.",
        "Do not speculate or blame the colleague. Do not admit legal fault.",
        "Explain the next steps, who will follow up, and that they will hear the results of the review.",
        "Document the conversation, and invite questions.",
      ],
      rubric: ["cv-pr2"],
      choices: [
        {
          id: "c-disclose",
          label: "I sat with them both, said I was very sorry this happened, explained that a clot from her heart likely caused the stroke after the cardioversion, that the rhythm probably began last night, and that the care will be reviewed and they will hear what is learned. I answered their questions and documented the talk.",
          next: "q-safety",
          quality: "strong",
          feedback:
            "Good. Disclosure states the facts known so far, offers sympathy, avoids blame and speculation, and promises follow-up. Saying sorry is not an admission of fault. Her husband's information is part of the facts and belongs in the review.",
        },
        {
          id: "c-deflect",
          label: "I told them strokes can happen after cardioversion and that the stroke team would explain everything later.",
          next: "s-deflect",
          quality: "partial",
          feedback:
            "That is true but incomplete, and it avoids what he asked. He already knows the timing was wrong. Harm from care should be disclosed as soon as reasonably possible by the team involved, starting with the facts known now.",
        },
        {
          id: "c-blame",
          label: "I told them the morning doctor made a mistake by not listening to the history, and that I would have done things differently.",
          next: "s-blame",
          quality: "partial",
          feedback:
            "Honesty is right, but blaming a colleague before a review is not. The reasons for harm are usually clear only after analysis. Give the facts, offer sympathy and explain that the care will be reviewed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-deflect",
      phase: "Later that afternoon",
      text: "Her husband asks the charge nurse whether anyone will tell them what went wrong. You go back, sit with them and explain what is known and how the review will happen.",
      next: "q-safety",
    },
    {
      kind: "say",
      id: "s-blame",
      phase: "Later that afternoon",
      text: "Her husband asks for the colleague's name so he can complain. The charge nurse reminds you that the review has not started. You go back and explain the facts and the review process without assigning blame.",
      next: "q-safety",
    },
    {
      kind: "question",
      id: "q-safety",
      phase: "Before the end of your shift",
      prompt: "She is on the stroke unit. What else do you do about what happened this morning?",
      seconds: 80,
      modelAnswer: [
        "Report the event through the hospital patient safety system.",
        "Call the colleague privately and supportively. Tell them what happened before they hear it elsewhere.",
        "Ask for a review that looks at contributing factors. The onset recorded from one source, CHADS-65 not documented, and no anticoagulation plan.",
        "Suggest a fix, such as a cardioversion checklist that records the onset from collateral and CHADS-65 before sedation.",
        "Make sure she leaves hospital on an anticoagulant, since she is CHADS-65 positive.",
        "Document the facts, the disclosure and your hand over to the stroke team.",
      ],
      rubric: ["cv-pr3", "cv-pr4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Her repeat CT at 24 hours shows a small insular infarct with no bleeding. She starts apixaban on day 3 and goes home on day 5 with mild word finding difficulty. The department adds onset and CHADS-65 fields to its cardioversion checklist. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cv-h1",
      competency: "assessment",
      criterion: "history",
      text: "Establishes the last known well time from the nurse who saw her, 11:00, and how the deficit was found.",
      points: 2,
      critical: true,
      teaching:
        "Last known well sets the treatment window. An in-hospital stroke often has an exact time, which allows fast thrombolysis.",
      source: "csbpr-acute",
    },
    {
      id: "cv-h2",
      competency: "assessment",
      criterion: "history",
      text: "Retakes the onset of atrial fibrillation with collateral from her husband and learns it began at about 21:30, just over 12 hours before cardioversion.",
      points: 2,
      teaching:
        "Patients often date atrial fibrillation from when it became worse. Onset of 12 to 48 hours with two or more CHADS-65 criteria makes cardioversion unsafe without prior anticoagulation or a negative TEE.",
      source: "caep-af",
    },
    {
      id: "cv-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about anticoagulants and the last dose, antiplatelets, heparin given today, recent surgery, bleeding, head injury and previous stroke or TIA.",
      points: 2,
      teaching: "Use or non use of anticoagulants and the time of the last dose should be sought and recorded for every patient being considered for thrombolysis.",
      source: "csbpr-acute",
    },
    {
      id: "cv-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about her baseline function and her wishes.",
      points: 1,
      teaching: "Baseline independence is part of the selection for thrombectomy. She is fully independent.",
      source: "csbpr-acute",
    },
    {
      id: "cv-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Does a focused NIHSS and localizes to the left middle cerebral artery from the nonfluent aphasia and right face and arm weakness.",
      points: 2,
      teaching:
        "Aphasia with face and arm weakness worse than the leg points to a dominant MCA lesion. An NIHSS over 5 suggests a disabling stroke and possible large vessel occlusion.",
      source: "csbpr-acute",
    },
    {
      id: "cv-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Considers mimics, checks glucose, notes no seizure, and rejects residual sedation as a cause of new focal signs.",
      points: 2,
      teaching:
        "Hypoglycemia should be corrected immediately and is the one test that comes before imaging. Seizure and sedation effects do not explain a new focal deficit after a lucid interval.",
      source: "csbpr-acute",
    },
    {
      id: "cv-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies the likely cause as cardioembolism after cardioversion of atrial fibrillation of just over 12 hours in a CHADS-65 positive patient without anticoagulation.",
      points: 2,
      teaching:
        "Age 65 or older, hypertension and diabetes are three CHADS-65 criteria. A late cardioversion without anticoagulation carries a real risk of embolism.",
      source: "caep-af",
    },
    {
      id: "cv-m1",
      competency: "resuscitation",
      criterion: "management",
      text: "Activates an in-hospital code stroke and gets non contrast CT and CT angiography at once, without waiting for blood results.",
      points: 3,
      critical: true,
      teaching: "Initial blood work should not delay imaging or treatment decisions. CT angiography in the same trip finds a large vessel occlusion.",
      source: "csbpr-acute",
    },
    {
      id: "cv-m2",
      competency: "management",
      criterion: "management",
      text: "Gives tenecteplase 0.25 mg/kg, 18.5 mg, as a single bolus and sends her for thrombectomy in parallel.",
      points: 3,
      critical: true,
      teaching:
        "Tenecteplase 0.25 mg/kg up to 25 mg is given as one bolus over 5 seconds. Eligible patients with a proximal anterior occlusion should also have thrombectomy without delay.",
      source: "csbpr-acute",
    },
    {
      id: "cv-m3",
      competency: "management",
      criterion: "management",
      text: "Does not start heparin for the acute cardioembolic stroke and holds antithrombotics for 24 hours after thrombolysis.",
      points: 2,
      teaching:
        "Early full anticoagulation does not treat acute stroke and adds bleeding risk. The stroke team times the start of an anticoagulant after the 24 hour scan.",
      source: "csbpr-acute",
    },
    {
      id: "cv-m4",
      competency: "management",
      criterion: "management",
      text: "Keeps blood pressure below 185/110 mmHg for 24 hours, orders frequent neurological checks, a swallow screen and a 24 hour CT, and has a plan for suspected hemorrhage.",
      points: 2,
      teaching: "Blood pressure should be kept below 185/110 mmHg during and for 24 hours after IV thrombolysis.",
      source: "csbpr-acute",
    },
    {
      id: "cv-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Leads the code stroke with clear roles and tasks in parallel, so imaging and treatment are not delayed.",
      points: 2,
      teaching: "Parallel work shortens door to needle time. One person leads, and others start IV access, blood work and transport at the same time.",
      source: "csbpr-acute",
    },
    {
      id: "cv-pr2",
      competency: "communication",
      criterion: "process",
      text: "Discloses to the patient and her husband promptly with sympathy and the known facts, without blame or speculation, explains the review and follow-up, and documents the talk.",
      points: 3,
      teaching:
        "Disclosure starts as soon as reasonably possible with the facts known so far. An expression of sorrow is not an admission of fault.",
      source: "cmpa",
    },
    {
      id: "cv-pr3",
      competency: "professionalism",
      criterion: "process",
      text: "Reports the event, speaks privately and supportively with the colleague, and asks for a review of contributing factors with a practical fix.",
      points: 2,
      teaching:
        "Harm from care should lead to an analysis of what contributed and what can prevent it. Recording onset from collateral and CHADS-65 before sedation is a simple system fix.",
      source: "cmpa",
    },
    {
      id: "cv-pr4",
      competency: "disposition",
      criterion: "process",
      text: "Hands her over to the stroke unit and makes sure she leaves hospital on an anticoagulant because she is CHADS-65 positive.",
      points: 1,
      teaching: "CHADS-65 positive patients should start oral anticoagulation, with a DOAC preferred over warfarin in most patients.",
      source: "caep-af",
    },
  ],
  sources: [
    {
      id: "csbpr-acute",
      citation:
        "Heran M, Lindsay P, Gubitz G, Yu A, and colleagues. Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024.",
      url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management/acute-ischemic-stroke-treatment",
    },
    {
      id: "caep-af",
      citation:
        "Stiell IG, de Wit K, Scheuermeyer FX, Vadeboncoeur A, and colleagues. 2021 CAEP acute atrial fibrillation/flutter best practices checklist. CJEM. 2021.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8423652/",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery: open and honest communication with patients. Version 3. 2017.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
