// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const psychosisMedicalCause: OralCase = {
  id: "psychosis-medical-cause",
  title: "Strange behaviour for three days",
  blueprint: "psych",
  alsoCovers: ["neuro", "id", "ethics"],
  priorityTopic: "delirium-agitation",
  keyFeatures: [
    { topic: "delirium-agitation", n: 1 },
    { topic: "delirium-agitation", n: 2 },
    { topic: "delirium-agitation", n: 5 },
    { topic: "infectious-diseases", n: 1 },
    { topic: "seizures", n: 4 },
  ],
  summary: "A 46 year old man with no psychiatric history is paranoid and acting oddly, and triage has called the crisis team.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in northern Ontario when the following patient arrives. " +
    "Neurology is by phone from a tertiary centre. " +
    "A 46 year old man is brought in by his wife because he believes she is poisoning his food, and triage has paged the crisis worker.",
  card: {
    vitals: {
      temperature: "38.1°C",
      pulse: "108/minute",
      resp: "18/minute",
      bp: "138/84 mmHg",
      o2sat: "97% on room air",
      weight: "82 kg (181 lb)",
    },
    medications: "Not recorded. No new medications.",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness and triage",
      result:
        "He is an accountant with no psychiatric history. For three days he has been accusing his wife of poisoning his food and saying the house smells of burnt rubber. At triage he was CTAS 3 with a capillary glucose of 6.8 mmol/L. The triage nurse put him in the mental health assessment room and paged the crisis worker. She tells you: 'He is paranoid and a bit feverish. Probably a first break.'",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A regional hospital. There is CT around the clock, MRI on weekdays, an inpatient psychiatry unit, internal medicine and an ICU. Neurology is available by phone from a tertiary centre.",
    },
    {
      id: "mse",
      label: "Mental status and cognition",
      result:
        "Restless and suspicious. Cannot say the months of the year backwards. Thinks it is last week. His attention drifts mid sentence and is worse at times. " +
        "Reports a smell of burnt rubber. Believes his wife is poisoning him. Word finding pauses with some wrong words.",
    },
    {
      id: "neuro",
      label: "Neurological exam",
      result:
        "Mild neck discomfort on flexion without true meningismus. Pupils equal and reactive. No papilledema seen. Mild word finding difficulty. " +
        "Subtle right pronator drift. Reflexes symmetric. No rash.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "He had a flu like illness with headache six days ago. Last night he stared blankly for about a minute while smacking his lips and did not answer her. " +
        "No drugs. Two beers a week. No new medications. No travel. No psychiatric illness in him or his family. He was completely normal a week ago.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "WBC 11.4 x 10^9/L. Sodium 131 mmol/L. Potassium 4.0 mmol/L. Creatinine 78 µmol/L. Glucose 6.8 mmol/L. Calcium normal. Liver enzymes normal. " +
        "TSH normal. Ammonia normal. Ethanol not detected. CK 180 U/L. Lactate 1.6 mmol/L. HIV and syphilis serology sent.",
    },
    {
      id: "urine",
      label: "Urine drug screen and urinalysis",
      result: "Urine drug screen negative. Urinalysis normal.",
    },
    {
      id: "ct",
      label: "CT head",
      result: "No hemorrhage, mass or hydrocephalus. Possible subtle low density in the left anterior temporal lobe.",
    },
    {
      id: "lp",
      label: "Lumbar puncture",
      result:
        "Opening pressure 22 cm H2O. WBC 86 x 10^6/L with 90 percent lymphocytes. RBC 140 x 10^6/L in tube 1 and 120 x 10^6/L in tube 4. " +
        "Protein 0.92 g/L. Glucose 3.6 mmol/L with serum glucose 6.8. Gram stain shows no organisms. HSV PCR sent to the provincial lab with results expected in 24 to 48 hours.",
    },
    {
      id: "mri",
      label: "MRI brain the next day",
      result: "T2 and FLAIR high signal in the left medial temporal lobe and insula with restricted diffusion. No mass effect.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 106. Normal intervals.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the assessment room",
      text:
        "He is sitting on the edge of the bed. He asks you twice what day it is in five minutes. He says his wife has been putting something in his coffee. His wife is crying in the hallway.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First impression",
      prompt: "Do you agree this is a first episode of psychosis? What features concern you, and what do you do first?",
      seconds: 75,
      modelAnswer: [
        "No. Treat this as delirium until proven otherwise.",
        "First episode after 40, fever and tachycardia, abrupt onset, and no psychiatric history.",
        "Inattention and disorientation that fluctuate are delirium, not primary psychosis.",
        "Olfactory hallucinations and the staring spell with lip smacking suggest temporal lobe seizures.",
        "Move him to a monitored medical bed and start a full medical workup.",
        "Take collateral from his wife: time course, the recent flu like illness, staring spells, substances, travel and psychiatric history.",
      ],
      rubric: ["ps-a1", "ps-a2", "ps-h1", "ps-h2", "ps-h3"],
      choices: [
        {
          id: "c-medical",
          label: "I moved him to a monitored bed, called this delirium until proven otherwise, and started a medical workup for encephalitis and other causes.",
          next: "q-workup",
          quality: "strong",
          feedback:
            "Correct. Fever, inattention, olfactory hallucinations and a possible focal seizure in a previously well 46 year old point to an organic cause. " +
            "Moving him to a monitored bed shows you have changed the frame from psychiatric to medical.",
        },
        {
          id: "c-psych-first",
          label: "I asked the crisis worker and psychiatry to see him first and ordered routine blood work.",
          next: "s-psych-first",
          quality: "partial",
          feedback:
            "Routine blood work is a start, but the red flags here need an emergency physician to lead a medical workup. " +
            "The examiner wanted delirium named and an encephalitis workup started before any psychiatric referral.",
        },
        {
          id: "c-haldol",
          label: "I gave haloperidol 5 mg IM for the paranoia and left him in the mental health room for the crisis worker.",
          next: "s-haldol",
          quality: "unsafe",
          feedback:
            "Sedating a febrile, delirious patient and leaving him in an unmonitored room delays diagnosis. Antipsychotics can also lower the seizure threshold. " +
            "The examiner wanted delirium recognized and a medical workup started.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-psych-first",
      phase: "One hour later",
      text:
        "The psychiatrist calls you. 'He is febrile, inattentive and disoriented. This is delirium. I cannot take him until he has a medical workup.' You move him to a monitored bed.",
      next: "q-workup",
    },
    {
      kind: "say",
      id: "s-haldol",
      phase: "Ninety minutes later",
      text:
        "The crisis worker finds him drowsy and hard to rouse. His temperature is 38.7. She asks you to reassess because he is not able to answer any questions. You move him to a monitored bed.",
      next: "q-workup",
    },
    {
      kind: "question",
      id: "q-workup",
      phase: "Workup",
      prompt: "What is your differential diagnosis and your workup?",
      seconds: 90,
      modelAnswer: [
        "Viral encephalitis, especially HSV. Bacterial meningitis. Autoimmune encephalitis.",
        "Nonconvulsive status epilepticus. Stroke or tumour.",
        "Metabolic: glucose, sodium, calcium, thyroid, liver, kidney, ammonia.",
        "Toxic: anticholinergic or sympathomimetic toxicity, withdrawal.",
        "Blood cultures, CBC, electrolytes, HIV and syphilis serology, urinalysis.",
        "CT head then lumbar puncture with cell count, protein, glucose, Gram stain, culture and HSV and enterovirus PCR.",
        "MRI and EEG as soon as available.",
      ],
      rubric: ["ps-a3"],
      next: "q-empiric",
    },
    {
      kind: "question",
      id: "q-empiric",
      phase: "Empiric treatment",
      prompt: "The CT is done. The LP will take some time to arrange. What treatment do you start now, and at what doses?",
      seconds: 75,
      modelAnswer: [
        "Acyclovir 10 mg/kg IV every 8 hours now. For 82 kg that is 820 mg.",
        "Do not wait for the LP or the PCR.",
        "Hydrate well and adjust for kidney function to prevent crystal nephropathy.",
        "Until bacterial meningitis is excluded, ceftriaxone 2 g IV every 12 hours and vancomycin, with dexamethasone 10 mg IV given before or with the first antibiotic dose.",
        "Ampicillin is added for Listeria if over 50 or immunocompromised.",
      ],
      rubric: ["ps-m1", "ps-m2"],
      choices: [
        {
          id: "c-acyclovir",
          label: "I gave acyclovir 820 mg IV right away, plus ceftriaxone 2 g IV, vancomycin and dexamethasone 10 mg IV until bacterial meningitis was excluded.",
          next: "q-consent",
          quality: "strong",
          feedback:
            "Right. Delay in acyclovir is linked to worse outcome in HSV encephalitis. Start it on suspicion. " +
            "Covering bacterial meningitis until the CSF is back is also correct since fever and altered mental status overlap.",
        },
        {
          id: "c-ceftriaxone-only",
          label: "I gave ceftriaxone 2 g IV and planned to add acyclovir if the CSF looked viral.",
          next: "s-late-acyclovir",
          quality: "partial",
          feedback:
            "Bacterial coverage is reasonable, but HSV encephalitis is the leading concern here. Acyclovir should not wait for the CSF. " +
            "The examiner wanted acyclovir 10 mg/kg IV started now.",
        },
        {
          id: "c-wait-pcr",
          label: "I held antimicrobials until the MRI and HSV PCR confirmed the diagnosis.",
          next: "s-late-acyclovir",
          quality: "unsafe",
          feedback:
            "The PCR can take days and MRI is not available tonight. Untreated HSV encephalitis has a high mortality and severe lasting deficits. " +
            "The examiner wanted empiric acyclovir started in the emergency department.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-late-acyclovir",
      phase: "Two hours later",
      text:
        "The medicine resident on call asks why acyclovir has not been started in a febrile man with a temporal lobe picture. You start acyclovir 820 mg IV now, two hours after you first saw him.",
      next: "q-consent",
    },
    {
      kind: "question",
      id: "q-consent",
      phase: "Consent for the LP",
      prompt:
        "You explain the lumbar puncture. He shouts, 'You are trying to poison me too,' and refuses. His wife is at the bedside. How do you proceed?",
      seconds: 75,
      modelAnswer: [
        "Assess capacity for this decision. Can he understand the information and appreciate the consequences?",
        "He is delirious and his refusal is driven by a delusion. He is incapable for this decision.",
        "Under the Health Care Consent Act, his wife is his substitute decision maker unless he has a guardian or an attorney for personal care.",
        "Tell him he has been found incapable for this decision and that he can apply to the Consent and Capacity Board.",
        "Explain the risks and benefits to her and get informed consent.",
        "Explain to him what is happening. Use gentle low dose sedation if needed for a safe procedure.",
        "A Form 1 does not authorize treatment or procedures.",
      ],
      rubric: ["ps-p1", "ps-c1"],
      choices: [
        {
          id: "c-sdm",
          label: "I assessed his capacity, found him incapable for this decision because of delirium, obtained informed consent from his wife as his substitute decision maker, and explained each step to him.",
          next: "s-seizure",
          quality: "strong",
          feedback:
            "Correct. Capacity is decision specific. A refusal based on a delusion in a delirious patient is not a capable refusal. " +
            "Unless he has a guardian or an attorney for personal care, his spouse is his substitute decision maker under the Health Care Consent Act.",
        },
        {
          id: "c-skip-lp",
          label: "I accepted his refusal and decided to treat empirically without an LP.",
          next: "s-skip-lp",
          quality: "partial",
          feedback:
            "Respecting refusal is right for a capable patient, but he is not capable of this decision. Without CSF you cannot confirm the diagnosis or stop unneeded therapy. " +
            "The examiner wanted a capacity assessment and consent from his substitute decision maker.",
        },
        {
          id: "c-form1",
          label: "I completed a Form 1 so that I could do the LP without consent.",
          next: "s-form1",
          quality: "unsafe",
          feedback:
            "A Form 1 authorizes detention for psychiatric assessment only. It does not authorize a procedure or medical treatment. " +
            "The examiner wanted consent from his substitute decision maker.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-skip-lp",
      phase: "Later",
      text:
        "His wife asks why there is no test to find out what is wrong with him. She says she would agree to anything that helps. You realize she is his substitute decision maker and discuss the LP with her.",
      next: "s-seizure",
    },
    {
      kind: "say",
      id: "s-form1",
      phase: "At the bedside",
      text:
        "The nurse questions the plan and says a Form 1 does not cover procedures. You speak with his wife as his substitute decision maker and she consents.",
      next: "s-seizure",
    },
    {
      kind: "say",
      id: "s-seizure",
      phase: "Deterioration",
      text:
        "While the LP tray is being opened, his head turns to the right and his right arm starts jerking. Within 30 seconds he has a generalized tonic clonic seizure. At 5 minutes it has not stopped. SpO2 is 86 percent.",
      next: "q-seizure",
    },
    {
      kind: "question",
      id: "q-seizure",
      phase: "Seizure",
      prompt: "Manage this seizure. Give me drugs and doses.",
      seconds: 90,
      modelAnswer: [
        "Airway position, suction, high flow oxygen, bag valve mask ready. Check glucose.",
        "Lorazepam 4 mg IV, which is about 0.1 mg/kg capped at 4 mg, and repeat once in 5 minutes. Midazolam 10 mg IM if no IV.",
        "If still seizing, a second line agent: levetiracetam 60 mg/kg IV to a maximum of 4500 mg, fosphenytoin 20 mg PE/kg, or valproate 40 mg/kg.",
        "For 82 kg, levetiracetam is capped at 4500 mg.",
        "Intubate if refractory or not protecting his airway. Arrange EEG to rule out nonconvulsive status.",
      ],
      rubric: ["ps-r1", "ps-m3"],
      next: "q-csf",
    },
    {
      kind: "question",
      id: "q-csf",
      phase: "Results",
      prompt:
        "The seizure stops after lorazepam and levetiracetam. The LP shows WBC 86 with 90 percent lymphocytes, protein 0.92 g/L, glucose 3.6 mmol/L and RBC 140. Interpret this. What if the HSV PCR comes back negative tomorrow?",
      seconds: 75,
      modelAnswer: [
        "Lymphocytic pleocytosis, raised protein and normal glucose ratio fit viral encephalitis.",
        "Red cells that do not clear support HSV encephalitis.",
        "Continue acyclovir, usually for 14 to 21 days if HSV is confirmed.",
        "An early negative PCR can be falsely negative. If suspicion stays high, continue acyclovir and repeat the LP in 3 to 7 days.",
        "MRI and EEG to support the diagnosis. Consider autoimmune encephalitis if tests stay negative.",
      ],
      rubric: ["ps-a4"],
      next: "q-wife",
    },
    {
      kind: "question",
      id: "q-wife",
      phase: "Family",
      prompt: "His wife asks: 'Is he going crazy? Will he come back to normal?' What do you tell her?",
      seconds: 60,
      modelAnswer: [
        "Explain that this looks like an infection of the brain, not a mental illness.",
        "The treatment has started and is the right one.",
        "Be honest that recovery varies and some people have lasting memory or behaviour changes.",
        "Reassure her she did the right thing bringing him in.",
        "Explain the next steps and who will care for him.",
      ],
      rubric: ["ps-c2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Where should he be admitted, and do you need to transfer him?",
      seconds: 60,
      modelAnswer: [
        "Admit to ICU or a monitored bed after a seizure with encephalitis.",
        "He needs MRI, EEG and neurology input.",
        "Discuss with neurology. Transfer through CritiCall if EEG or neurology care is not available locally.",
        "Psychiatry can help with delirium and behaviour, but the admitting service is medical.",
      ],
      rubric: ["ps-d1", "ps-c1"],
      choices: [
        {
          id: "c-icu",
          label: "I admitted him to the ICU, called neurology, and arranged transfer through CritiCall because he needs continuous EEG that is not available here.",
          next: "end",
          quality: "strong",
          feedback:
            "Good. After a prolonged seizure with encephalitis he needs close monitoring and EEG to exclude nonconvulsive status. " +
            "Using CritiCall to reach a centre with neurology and EEG is the right systems step.",
        },
        {
          id: "c-psych-unit",
          label: "I admitted him to the inpatient psychiatry unit with medicine consulting.",
          next: "s-psych-unit",
          quality: "unsafe",
          feedback:
            "A psychiatric unit cannot monitor seizures, airway or IV therapy. He has a medical emergency. " +
            "The examiner wanted ICU or monitored medical care with neurology involved.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-psych-unit",
      phase: "At the psychiatric unit",
      text:
        "The charge nurse on the psychiatric unit refuses the transfer. She says the unit has no monitors and cannot run IV acyclovir. You admit him to the ICU and call neurology.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The HSV PCR comes back positive the next day. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ps-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes delirium rather than primary psychosis from inattention, disorientation, fever and fluctuation.",
      points: 3,
      critical: true,
      teaching: "Inattention is the core of delirium. A new psychosis after 40, with abnormal vitals, is medical until proven otherwise.",
      source: "acep-psych",
    },
    {
      id: "ps-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies olfactory hallucinations and the staring spell as temporal lobe features.",
      points: 2,
      teaching: "HSV favours the temporal lobes. Smell hallucinations and focal seizures are clues.",
      source: "tunkel-enc",
    },
    {
      id: "ps-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Orders a broad workup including CT then LP with HSV PCR, blood cultures, metabolic tests, HIV and syphilis serology, MRI and EEG.",
      points: 2,
      teaching: "Encephalitis workup is broad. MRI is the most sensitive imaging test and EEG finds nonconvulsive seizures.",
      source: "venkatesan",
    },
    {
      id: "ps-a4",
      competency: "assessment",
      criterion: "physical",
      text: "Interprets the CSF as viral encephalitis and knows an early negative HSV PCR does not exclude it.",
      points: 2,
      teaching: "PCR can be negative in the first 72 hours. Repeat the LP if suspicion stays high.",
      source: "tunkel-enc",
    },
    {
      id: "ps-m1",
      competency: "management",
      criterion: "management",
      text: "Starts acyclovir 10 mg/kg IV every 8 hours without waiting for LP, PCR or MRI.",
      points: 3,
      critical: true,
      teaching: "Delay in starting acyclovir is linked to worse outcome in HSV encephalitis. Keep him hydrated and adjust for kidney function.",
      source: "tunkel-enc",
    },
    {
      id: "ps-m2",
      competency: "management",
      criterion: "management",
      text: "Covers bacterial meningitis with ceftriaxone 2 g IV, vancomycin and dexamethasone 10 mg IV until the CSF excludes it.",
      points: 2,
      teaching: "Fever and altered mental status can be bacterial meningitis. Give dexamethasone before or with the first antibiotic dose.",
      source: "tunkel-men",
    },
    {
      id: "ps-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Manages the airway during the seizure with positioning, suction, oxygen and a check of glucose.",
      points: 1,
      teaching: "Protect the airway and correct hypoxia while you give drugs.",
      source: "glauser",
    },
    {
      id: "ps-m3",
      competency: "management",
      criterion: "management",
      text: "Treats the seizure with lorazepam 4 mg IV repeated once, then a second line agent such as levetiracetam 60 mg/kg to a maximum of 4500 mg.",
      points: 3,
      critical: true,
      teaching: "Levetiracetam, fosphenytoin and valproate are accepted second line agents with similar effectiveness. Do not wait long between steps.",
      source: "glauser",
    },
    {
      id: "ps-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Assesses capacity for the LP, finds him incapable, and obtains consent from his wife as substitute decision maker.",
      points: 2,
      teaching: "Capacity is specific to each decision. A spouse comes after a guardian, an attorney for personal care and a board appointed representative on the Health Care Consent Act list.",
      source: "hcca",
    },
    {
      id: "ps-c1",
      competency: "communication",
      criterion: "process",
      text: "Knows a Form 1 does not authorize treatment and explains each step to the patient even when he is incapable.",
      points: 1,
      teaching: "The Mental Health Act allows detention for assessment, not treatment. Medical care needs consent or an emergency.",
      source: "hcca",
    },
    {
      id: "ps-c2",
      competency: "communication",
      criterion: "process",
      text: "Explains to his wife that this is a brain infection, not a mental illness, and is honest about prognosis.",
      points: 1,
      teaching: "Families are frightened by psychosis. Naming the cause and the treatment reassures them.",
      source: "venkatesan",
    },
    {
      id: "ps-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits to ICU or a monitored bed with neurology input and transfers through CritiCall if EEG is not available.",
      points: 2,
      teaching: "Encephalitis with seizures needs monitoring and EEG. A psychiatric unit is not the right place.",
      source: "venkatesan",
    },
    {
      id: "ps-h1",
      competency: "assessment",
      criterion: "history",
      text: "Takes collateral from his wife on the time course, the recent flu like illness and headache, and any staring spells or abnormal movements.",
      points: 2,
      teaching: "Abrupt onset after a febrile prodrome points to encephalitis. Witnessed staring with lip smacking suggests focal seizures from the temporal lobe.",
      source: "venkatesan",
    },
    {
      id: "ps-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about drugs, alcohol, medications, and personal and family psychiatric history.",
      points: 2,
      teaching: "New psychosis after 40 with no personal or family psychiatric history is a red flag for a medical cause. Substances and medications are common reversible causes.",
      source: "acep-psych",
    },
    {
      id: "ps-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about travel, immune suppression, HIV risk and animal or insect exposure.",
      points: 1,
      teaching: "Exposure and immune history widens the encephalitis differential and changes the tests and empiric treatment.",
      source: "venkatesan",
    },
  ],
  sources: [
    {
      id: "tunkel-enc",
      citation: "Tunkel AR, et al. The management of encephalitis: clinical practice guidelines by the Infectious Diseases Society of America. Clin Infect Dis. 2008.",
    },
    {
      id: "venkatesan",
      citation:
        "Venkatesan A, et al. Case definitions, diagnostic algorithms, and priorities in encephalitis: consensus statement of the International Encephalitis Consortium. Clin Infect Dis. 2013.",
    },
    {
      id: "tunkel-men",
      citation: "Tunkel AR, et al. Practice guidelines for the management of bacterial meningitis. Infectious Diseases Society of America. Clin Infect Dis. 2004.",
    },
    {
      id: "glauser",
      citation:
        "Glauser T, et al. Evidence based guideline: treatment of convulsive status epilepticus in children and adults. Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016.",
    },
    {
      id: "acep-psych",
      citation:
        "American College of Emergency Physicians. Clinical policy: critical issues in the diagnosis and management of the adult psychiatric patient in the emergency department. Ann Emerg Med. 2017.",
    },
    {
      id: "hcca",
      citation: "Government of Ontario. Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A, and Mental Health Act, R.S.O. 1990, c. M.7.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
