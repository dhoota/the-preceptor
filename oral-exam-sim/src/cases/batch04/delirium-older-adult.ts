// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const deliriumOlderAdult: OralCase = {
  id: "delirium-older-adult",
  title: "Not herself since the weekend",
  blueprint: "geri",
  alsoCovers: ["ethics", "psych"],
  priorityTopic: "delirium-agitation",
  keyFeatures: [
    { topic: "delirium-agitation", n: 1 },
    { topic: "delirium-agitation", n: 2 },
    { topic: "delirium-agitation", n: 4 },
    { topic: "delirium-agitation", n: 5 },
  ],
  summary: "An 86 year old woman is brought in by her daughter because she has been sleepy and muddled for three days.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre when the following patient arrives. " +
    "It is Monday at 16:00. An 86 year old woman is brought in by her daughter because she has been sleepy and muddled since Saturday.",
  card: {
    vitals: {
      temperature: "37.2°C",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "142/76 mmHg",
      o2sat: "95% on room air",
      weight: "55 kg (121 lb)",
    },
    medications: "Oxybutynin 5 mg PO twice daily, zopiclone 7.5 mg PO nightly, hydrochlorothiazide 12.5 mg PO daily, amlodipine 5 mg PO daily",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness (from her daughter)",
      result:
        "Since Saturday her mother has been sleepy in the day, confused at night, picking at the air and calling her husband by her late brother's name. She has barely eaten. " +
        "Capillary glucose 6.8 mmol/L at triage. The triage note says: 'Urine dip positive for leukocytes and nitrites. Likely UTI. Family wants her home tonight.'",
    },
    {
      id: "cognition",
      label: "Cognitive screen",
      result:
        "Drowsy but rousable to voice. Cannot say the months of the year backward past November. Rambling speech that jumps between topics. Knows her name but not the place or year. " +
        "4AT score 11. Confusion Assessment Method positive for acute onset, fluctuation, inattention, disorganized thinking and altered level of consciousness.",
    },
    {
      id: "baseline",
      label: "Social history and baseline function",
      result:
        "She lives at home with her husband, who is 88. Independent in dressing, bathing and toileting. Her daughter manages her banking. MoCA 23 out of 30 a year ago with mild memory complaints. She uses reading glasses and a hearing aid in the left ear. The hearing aid was left at home.",
    },
    {
      id: "meds",
      label: "Medication review",
      result:
        "Oxybutynin 5 mg twice daily started 6 days ago for urge incontinence. Zopiclone 7.5 mg nightly for 8 years. Hydrochlorothiazide 12.5 mg daily. Amlodipine 5 mg daily. " +
        "Her husband has been giving her an over the counter sleep aid containing diphenhydramine for 3 nights because she was restless.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Dry mucous membranes. Chest clear. Heart sounds normal. Suprapubic fullness and tenderness. No meningism. No focal neurological deficit. Moves all limbs. No signs of trauma.",
    },
    {
      id: "bladder-rectal",
      label: "Bladder scan and rectal exam",
      result: "Bladder scan 740 mL. Rectal exam shows hard stool filling the rectum. Last bowel movement 5 days ago per her daughter.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Sodium 127 mmol/L. Potassium 3.4 mmol/L. Creatinine 108 µmol/L, baseline 78 six months ago. Urea 12.1 mmol/L. Glucose 6.8 mmol/L. Calcium 2.34 mmol/L. " +
        "Hemoglobin 124 g/L. WBC 8.9 x 10^9/L. TSH 2.4 mU/L. High sensitivity troponin I 9 ng/L. CK 110 U/L. B12 pending.",
    },
    {
      id: "urine",
      label: "Urinalysis",
      result: "Leukocyte esterase 2+. Nitrite positive. No fever. No dysuria reported by family before this illness. She has urinary incontinence at baseline.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 94. QTc 468 ms. No ischemic changes.",
    },
    {
      id: "cxr-ct",
      label: "Chest X ray and CT head",
      result: "Chest X ray clear. CT head was ordered from triage: chronic small vessel disease and atrophy. No acute findings.",
    },
    {
      id: "family",
      label: "Family and decision maker",
      result:
        "Her daughter says: 'I have power of attorney, so I make the decisions.' When asked, she says it is a continuing power of attorney for property that was set up for the banking. There is no power of attorney for personal care. Her husband is at the bedside and is very tired.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "First look",
      text: "The patient is dozing on the stretcher. She wakes when you speak but drifts off mid sentence. Her daughter says: 'Can you just give her antibiotics so we can go home?'",
      next: "q-recognize",
    },
    {
      kind: "question",
      id: "q-recognize",
      phase: "Recognition",
      prompt: "What is going on and how do you confirm it?",
      seconds: 60,
      modelAnswer: [
        "Hypoactive delirium until proven otherwise. Acute change over days with fluctuation.",
        "Confirm with a validated tool such as the 4AT or the Confusion Assessment Method.",
        "Inattention is the core feature. Test with months backward or days of the week backward.",
        "Collateral on baseline cognition and function is essential.",
        "Delirium is a medical emergency with high mortality. It needs a cause search, not a label.",
      ],
      rubric: ["del-a1", "del-h1"],
      choices: [
        {
          id: "c-cam",
          label: "I recognized a hypoactive delirium, confirmed it with the 4AT and CAM, and got collateral on her baseline.",
          next: "q-causes",
          quality: "strong",
          feedback:
            "Correct. Hypoactive delirium is the most commonly missed subtype because the patient is quiet. A validated tool makes the diagnosis objective and gives a baseline for tracking.",
        },
        {
          id: "c-uti-label",
          label: "I accepted the UTI diagnosis, started antibiotics and planned discharge if she improved.",
          next: "s-uti-label",
          quality: "partial",
          feedback:
            "A positive dipstick does not explain delirium on its own. Anchoring on a UTI stops the search for the real causes. Delirium needs a structured search for all contributors.",
        },
        {
          id: "c-dementia",
          label: "I thought her dementia was progressing and referred her to a memory clinic.",
          next: "s-dementia",
          quality: "unsafe",
          feedback:
            "Dementia develops over months and years, not days. Acute onset, fluctuation and inattention define delirium. Missing delirium carries a high risk of death and loss of independence.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-uti-label",
      phase: "The GEM nurse",
      text: "The geriatric emergency management nurse does a 4AT. The score is 11. She asks whether anyone has checked a bladder scan or reviewed her medications.",
      next: "q-causes",
    },
    {
      kind: "say",
      id: "s-dementia",
      phase: "The daughter",
      text: "Her daughter says: 'She was doing her own crossword on Friday.' The GEM nurse does a 4AT. The score is 11. You reconsider.",
      next: "q-causes",
    },
    {
      kind: "question",
      id: "q-causes",
      phase: "Cause search",
      prompt: "How do you search for the cause? What do you find?",
      seconds: 90,
      modelAnswer: [
        "Structured review of drugs, retention, constipation, electrolytes, infection, hypoxia, pain, glucose and alcohol or sedative withdrawal.",
        "Medications. New oxybutynin and over the counter diphenhydramine are strongly anticholinergic. Zopiclone. Hydrochlorothiazide.",
        "Bladder scan shows 740 mL of retention, likely worsened by anticholinergics.",
        "Fecal impaction on rectal exam.",
        "Sodium 127 from the thiazide and poor intake. Creatinine up from dehydration and retention.",
        "Usually multifactorial. Check ECG, CBC, calcium and glucose. CT head only if there is a fall, anticoagulation, focal deficit or no other cause.",
        "Ask about new and over the counter drugs, sleep aids, alcohol, bowels, bladder, intake, falls and urinary symptoms.",
      ],
      rubric: ["del-a2", "del-a3", "del-x1", "del-h2", "del-h3"],
      next: "q-urine",
    },
    {
      kind: "question",
      id: "q-urine",
      phase: "The urine",
      prompt: "Her dipstick is positive for leukocytes and nitrites. She has no fever. Do you treat for a urinary tract infection?",
      seconds: 60,
      modelAnswer: [
        "Asymptomatic bacteriuria is common in older women. A positive dipstick alone is not an infection.",
        "Delirium alone is not an indication for antibiotics when another cause explains it and there is no fever or localizing sign.",
        "Decompress the bladder with an in and out catheter and reassess.",
        "Send a culture only if she develops fever, rigors, flank pain or new urinary symptoms.",
        "If treatment becomes needed, avoid nitrofurantoin because her creatinine clearance is under 30 mL/min. Avoid fluoroquinolones.",
      ],
      rubric: ["del-m2"],
      choices: [
        {
          id: "c-no-abx",
          label: "I did not start antibiotics. I decompressed her bladder, treated the other causes and planned to reassess for fever or urinary symptoms.",
          next: "q-meds",
          quality: "strong",
          feedback:
            "Correct. Treating asymptomatic bacteriuria does not improve delirium and causes harm, including C difficile. She has several clear causes that you can fix now.",
        },
        {
          id: "c-nitrofurantoin",
          label: "I started nitrofurantoin 100 mg twice daily for 5 days to be safe.",
          next: "s-nitrofurantoin",
          quality: "partial",
          feedback:
            "Treating bacteriuria without symptoms is not recommended. Her estimated creatinine clearance is about 29 mL/min, and nitrofurantoin is on the Beers list to avoid below 30. It adds risk without benefit.",
        },
        {
          id: "c-cipro",
          label: "I started ciprofloxacin 500 mg twice daily because it covers most urinary organisms.",
          next: "s-cipro",
          quality: "unsafe",
          feedback:
            "Fluoroquinolones can cause delirium, tendon rupture and hypoglycemia in older adults. They also carry high C difficile risk. There is no clear infection here to treat.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-nitrofurantoin",
      phase: "Pharmacy review",
      text: "The ED pharmacist calls. Her creatinine clearance is about 29 mL/min. She asks if there is a clear indication. You cancel the order.",
      next: "q-meds",
    },
    {
      kind: "say",
      id: "s-cipro",
      phase: "Pharmacy review",
      text: "The pharmacist calls about the fluoroquinolone in a delirious 86 year old without fever. She suggests withholding antibiotics. You cancel the order.",
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Treatment",
      prompt: "What do you do about her medications and the other causes you found?",
      seconds: 75,
      modelAnswer: [
        "Stop oxybutynin and diphenhydramine. Both are strongly anticholinergic and on the Beers list.",
        "Do not stop zopiclone abruptly after 8 years of nightly use. Continue it at a reduced dose, such as 3.75 mg, the usual dose for older adults, and plan a supervised taper once the delirium clears.",
        "Hold hydrochlorothiazide. Replace potassium. Correct sodium slowly with isotonic fluid. Aim for no more than 8 mmol/L in 24 hours and check sodium every 4 to 6 hours, because stopping the thiazide can cause a brisk rise.",
        "Catheterize for retention. Treat impaction with an enema then a regular bowel routine.",
        "Glasses and hearing aid. Hydration and nutrition.",
      ],
      rubric: ["del-m1", "del-m4"],
      next: "s-agitation",
    },
    {
      kind: "say",
      id: "s-agitation",
      phase: "22:00",
      text:
        "You are called to her bed. The patient is now agitated. She has pulled out her IV, is trying to climb over the rails and is shouting that she is late for work. Her husband has gone home to sleep. " +
        "The nurse says: 'Can I give her lorazepam 1 mg IV, or haloperidol 5 mg IM, and put her in wrist restraints?'",
      next: "q-agitation",
    },
    {
      kind: "question",
      id: "q-agitation",
      phase: "Agitation",
      prompt: "How do you manage her agitation?",
      seconds: 75,
      modelAnswer: [
        "Look for a new cause first. Pain, retention, hypoxia, hypoglycemia.",
        "Non pharmacological measures first. Calm voice, reorientation, family presence, glasses and hearing aid, light, remove tethers.",
        "Replace the IV with oral fluids if possible. Avoid restraints.",
        "If she is at risk of harm or very distressed, low dose haloperidol 0.25 to 0.5 mg orally or IM. Reassess before repeating.",
        "Check QTc. It is 468 ms.",
        "Avoid benzodiazepines unless the cause is alcohol or sedative withdrawal.",
        "Physical restraint only as a last resort, with consent and monitoring.",
      ],
      rubric: ["del-m3", "del-p2"],
      choices: [
        {
          id: "c-nonpharm",
          label: "I checked for a new cause, used a calm approach, called her husband back, removed tethers, and would give haloperidol 0.25 mg only if she remained at risk.",
          next: "q-sdm",
          quality: "strong",
          feedback:
            "Correct. Non pharmacological care is first line. If a drug is needed, a small dose of an antipsychotic is preferred. Restraints increase agitation, injury and death.",
        },
        {
          id: "c-haldol-5",
          label: "I gave haloperidol 5 mg IM.",
          next: "s-haldol-5",
          quality: "partial",
          feedback:
            "Haloperidol is the right class if a drug is needed, but 5 mg is ten to twenty times the starting dose for a frail 86 year old. It risks oversedation, aspiration, falls and QT prolongation.",
        },
        {
          id: "c-lorazepam",
          label: "I gave lorazepam 1 mg IV and applied wrist restraints.",
          next: "s-lorazepam",
          quality: "unsafe",
          feedback:
            "Benzodiazepines worsen delirium except in alcohol or sedative withdrawal. Restraints increase agitation and injury. This combination is the opposite of guideline care.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-haldol-5",
      phase: "Two hours later",
      text: "She is deeply asleep and snoring. SpO2 is 89 percent. She has stiffness in her arms. The nurse repositions her and starts oxygen. She rouses only to pain the next morning.",
      next: "q-sdm",
    },
    {
      kind: "say",
      id: "s-lorazepam",
      phase: "One hour later",
      text: "She is more confused and has twisted her wrist against the restraint. The charge nurse asks to remove the restraints and to call her husband back. You agree.",
      next: "q-sdm",
    },
    {
      kind: "question",
      id: "q-sdm",
      phase: "Decision making",
      prompt: "She needs an indwelling catheter and admission. She cannot understand the choices. Her daughter says she has power of attorney. Who gives consent?",
      seconds: 60,
      modelAnswer: [
        "Assess capacity for this specific decision. She cannot understand or appreciate it now.",
        "Clarify what kind of power of attorney the daughter holds.",
        "A power of attorney for property does not cover health decisions.",
        "Under the Ontario Health Care Consent Act the ranked list applies. Her husband, as spouse, ranks above a child when there is no guardian or attorney for personal care.",
        "Include the daughter in discussions. Emergency treatment can proceed without consent only if delay would cause serious harm.",
      ],
      rubric: ["del-p1", "del-c1"],
      choices: [
        {
          id: "c-spouse",
          label: "I found the daughter holds a power of attorney for property only, so I obtained consent from her husband as the substitute decision maker and included the daughter.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. Property and personal care are different powers. The spouse ranks above children in the Health Care Consent Act list. Including the daughter keeps the family together.",
        },
        {
          id: "c-daughter",
          label: "I accepted the daughter's consent because she said she has power of attorney.",
          next: "s-daughter",
          quality: "partial",
          feedback:
            "You need to ask what kind of power of attorney it is. A power of attorney for property gives no authority over health care. Consent from the wrong person is not valid.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-daughter",
      phase: "The next morning",
      text: "The admitting team asks for a copy of the document. It covers property only. The team calls her husband to confirm consent and he agrees.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "The daughter still wants her mother home tonight. What is your disposition and what do you tell the family?",
      seconds: 75,
      modelAnswer: [
        "Admit. She has an active delirium with several causes that need treatment and monitoring.",
        "Her husband is 88 and exhausted. Home is not safe tonight.",
        "Explain delirium in plain words. Brain failure from many small stresses. Usually improves over days to weeks. Some people do not return to baseline.",
        "Ask family to stay, bring glasses and hearing aid, and help with orientation.",
        "Delirium prevention on the ward: sleep, mobility, hydration, bowel and bladder care. Geriatric medicine consult.",
        "Cognitive follow up after recovery. Delirium can unmask a dementia.",
      ],
      rubric: ["del-d1", "del-c2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "She is admitted to medicine with geriatrics following. After drainage of her bladder, bowel care and stopping the anticholinergics, her 4AT falls to 2 by day 4. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "del-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes hypoactive delirium and confirms it with a validated tool such as the 4AT or CAM.",
      points: 3,
      critical: true,
      teaching: "The CAM requires acute onset or fluctuation and inattention, plus disorganized thinking or altered consciousness. Hypoactive delirium is the most often missed form.",
      source: "cam",
    },
    {
      id: "del-a2",
      competency: "assessment",
      criterion: "history",
      text: "Performs a structured search for causes including medications, retention, constipation, electrolytes, infection and hypoxia.",
      points: 2,
      teaching: "Delirium in older adults is usually multifactorial. Fixing only one cause often leaves the delirium in place.",
      source: "ccsmh",
    },
    {
      id: "del-a3",
      competency: "assessment",
      criterion: "history",
      text: "Identifies oxybutynin and over the counter diphenhydramine as anticholinergic contributors.",
      points: 1,
      teaching: "Anticholinergic drugs cause delirium directly and through retention and constipation. Always ask about over the counter sleep aids.",
      source: "beers",
    },
    {
      id: "del-m1",
      competency: "management",
      criterion: "management",
      text: "Stops the anticholinergic drugs, avoids abrupt withdrawal of long term zopiclone and holds the thiazide.",
      points: 3,
      critical: true,
      teaching: "Removing the offending drug is the single most effective treatment. Stopping a long term sedative abruptly can cause withdrawal delirium.",
      source: "beers",
    },
    {
      id: "del-m2",
      competency: "management",
      criterion: "management",
      text: "Does not treat asymptomatic bacteriuria in the absence of fever or localizing symptoms.",
      points: 2,
      teaching: "Positive urine tests are common in older women without infection. Antibiotics do not improve delirium from other causes and cause harm.",
      source: "cw-ammi",
    },
    {
      id: "del-m3",
      competency: "management",
      criterion: "management",
      text: "Uses non pharmacological measures first, reserves low dose haloperidol 0.25 to 0.5 mg for danger or severe distress and avoids benzodiazepines.",
      points: 3,
      critical: true,
      teaching: "Benzodiazepines worsen delirium except in alcohol or sedative withdrawal. Antipsychotics do not shorten delirium and are only for safety or distress.",
      source: "ccsmh",
    },
    {
      id: "del-m4",
      competency: "management",
      criterion: "management",
      text: "Relieves retention with a catheter, treats impaction and corrects sodium slowly.",
      points: 1,
      teaching: "Retention and constipation are easily fixed causes. Sodium should rise no more than 8 mmol/L in 24 hours in a chronic case.",
      source: "ccsmh",
    },
    {
      id: "del-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Assesses capacity, clarifies the type of power of attorney and obtains consent from the correct substitute decision maker.",
      points: 2,
      teaching: "In Ontario a power of attorney for property does not give authority over health care. The Health Care Consent Act lists the order of substitute decision makers.",
      source: "hcca",
    },
    {
      id: "del-p2",
      competency: "professionalism",
      criterion: "management",
      text: "Uses physical restraint only as a last resort, with consent and monitoring.",
      points: 1,
      teaching: "Restraints increase agitation, injury and death in delirium. Ontario hospitals must follow the Patient Restraints Minimization Act.",
      source: "ccsmh",
    },
    {
      id: "del-c1",
      competency: "communication",
      criterion: "process",
      text: "Explains the decision maker role respectfully to the daughter and includes her in planning.",
      points: 1,
      teaching: "Families often misunderstand power of attorney. A calm explanation prevents conflict and keeps everyone involved.",
      source: "hcca",
    },
    {
      id: "del-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains delirium, its likely course and how family can help, in plain words.",
      points: 1,
      teaching: "Family presence, glasses, hearing aids and familiar voices help recovery. Families need to know recovery can take weeks.",
      source: "ccsmh",
    },
    {
      id: "del-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits for treatment and delirium care rather than discharging home to an exhausted spouse, with geriatric follow up.",
      points: 3,
      critical: true,
      teaching: "Delirium carries a high risk of death, falls and institutional placement. Discharge needs a resolved cause and a safe caregiver.",
      source: "ccsmh",
    },
    {
      id: "del-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Finds urinary retention with a bladder scan and fecal impaction on rectal exam.",
      points: 1,
      teaching: "Retention and constipation are common, easily missed and quickly fixed causes of delirium. Anticholinergic drugs make both worse.",
      source: "ccsmh",
    },
    {
      id: "del-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the daughter and husband about the time course and fluctuation, and about her cognition and function before this illness.",
      points: 2,
      teaching: "Delirium is defined by acute change from baseline. Only collateral can tell you what her baseline was.",
      source: "ccsmh",
    },
    {
      id: "del-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks specifically about new medications, over the counter products and sleep aids, alcohol and sedative use.",
      points: 2,
      teaching: "Families often do not think of over the counter sleep aids as medications. Diphenhydramine is strongly anticholinergic and on the Beers list.",
      source: "beers",
    },
    {
      id: "del-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about bowel and bladder function, food and fluid intake, falls and urinary symptoms such as dysuria.",
      points: 1,
      teaching: "Constipation, retention, dehydration and falls are common precipitants. Real urinary symptoms separate infection from bacteriuria.",
      source: "ccsmh",
    },
  ],
  sources: [
    {
      id: "ccsmh",
      citation: "Canadian Coalition for Seniors' Mental Health. 2014 guideline update. The assessment and treatment of delirium. 2014.",
      url: "https://ccsmh.ca/wp-content/uploads/2016/03/2014-ccsmh-Guideline-Update-Delirium.pdf",
    },
    {
      id: "cam",
      citation: "Inouye SK et al. Clarifying confusion. The confusion assessment method. A new method for detection of delirium. Annals of Internal Medicine. 1990.",
    },
    {
      id: "beers",
      citation:
        "American Geriatrics Society Beers Criteria Update Expert Panel. American Geriatrics Society 2023 updated AGS Beers Criteria for potentially inappropriate medication use in older adults. Journal of the American Geriatrics Society. 2023.",
    },
    {
      id: "cw-ammi",
      citation: "Choosing Wisely Canada. Medical microbiology. Recommendations from the Association of Medical Microbiology and Infectious Disease Canada. Updated 2021.",
      url: "https://choosingwiselycanada.org/recommendation/medical-microbiology/",
    },
    {
      id: "hcca",
      citation: "Ontario. Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A.",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
