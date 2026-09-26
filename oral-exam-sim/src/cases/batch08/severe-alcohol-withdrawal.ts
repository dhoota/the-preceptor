// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const severeAlcoholWithdrawal: OralCase = {
  id: "severe-alcohol-withdrawal",
  title: "Shaking and seeing bugs on the wall",
  blueprint: "psych",
  alsoCovers: ["tox", "neuro"],
  priorityTopic: "delirium-agitation",
  keyFeatures: [
    { topic: "delirium-agitation", n: 2 },
    { topic: "delirium-agitation", n: 5 },
    { topic: "tox", n: 8 },
    { topic: "loc", n: 2 },
  ],
  summary: "A 54 year old man is brought in after a seizure at home and is now tremulous, sweaty and hallucinating.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in Ontario when the following patient arrives. " +
    "There is an ICU, CT and an internist on call. " +
    "A 54 year old man is brought in by paramedics after his partner saw him have a seizure at home.",
  card: {
    vitals: {
      temperature: "38.0°C",
      pulse: "128/minute",
      resp: "24/minute",
      bp: "176/102 mmHg",
      o2sat: "95% on room air",
      weight: "78 kg (172 lb)",
    },
    medications: "Not recorded. No benzodiazepines or opioids at home.",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness and triage",
      result:
        "Paramedics were called after his partner saw him have a generalized seizure lasting about one minute. He hit the back of his head on the kitchen floor. At triage he was CTAS 2 with a capillary glucose of 3.6 mmol/L. The nurse says: 'He is shaking all over and picking at the sheets. He says there are bugs on the wall. CIWA is 29.'",
    },
    {
      id: "alcohol",
      label: "Alcohol use",
      result:
        "He usually drinks a 26 ounce bottle of vodka a day. His last drink was about 48 hours ago because he ran out of money.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result:
        "Tremulous and drenched in sweat. Oriented to person only. Picking at the air. Visual and tactile hallucinations. Horizontal nystagmus on lateral gaze. " +
        "3 cm occipital laceration, no step. No neck stiffness. Moves all limbs. Chest clear. Abdomen soft, liver edge 3 cm below the costal margin, no tenderness.",
    },
    {
      id: "ciwa",
      label: "CIWA-Ar score",
      result: "29 at triage. Severe tremor, drenching sweats, visual and tactile hallucinations, severe anxiety, disorientation.",
    },
    {
      id: "history",
      label: "History from his partner",
      result:
        "He had a withdrawal seizure two years ago when he tried to stop. He was treated in hospital for two days. No known liver disease. No benzodiazepines or opioids at home. " +
        "He has eaten very little for a week. No other drugs. No recent head injury before today.",
    },
    {
      id: "chem",
      label: "Electrolytes and chemistry",
      result:
        "Sodium 133 mmol/L. Potassium 3.0 mmol/L. Chloride 96 mmol/L. Bicarbonate 17 mmol/L. Anion gap 20. Magnesium 0.52 mmol/L. Phosphate 0.58 mmol/L. " +
        "Creatinine 71 µmol/L. Glucose 3.6 mmol/L. Beta hydroxybutyrate 3.8 mmol/L. Lactate 2.9 mmol/L. Ethanol not detected. Serum osmolal gap 6.",
    },
    {
      id: "liver",
      label: "Liver tests and CBC",
      result:
        "AST 188 U/L. ALT 74 U/L. GGT 410 U/L. Bilirubin 24 µmol/L. Albumin 34 g/L. INR 1.2. Lipase normal. " +
        "Hemoglobin 128 g/L. MCV 104 fL. Platelets 96 x 10^9/L. WBC 10.8 x 10^9/L. CK 1,240 U/L.",
    },
    {
      id: "ct",
      label: "CT head",
      result: "Occipital scalp hematoma. No fracture. No intracranial hemorrhage. Mild generalized atrophy.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 126. QTc 488 ms. Prominent U waves. No ischemic changes.",
    },
    {
      id: "cxr",
      label: "Chest X ray",
      result: "No consolidation. No effusion.",
    },
    {
      id: "urine",
      label: "Urinalysis and urine drug screen",
      result: "Ketones 3+. No leukocytes. Drug screen negative.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text: "He is shaking and trying to climb over the side rail to get away from the bugs. The nurse has one IV in and asks for orders.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First orders",
      prompt: "Glucose is 3.6 mmol/L. He has nystagmus and confusion. What are your first orders, in what order, and at what doses?",
      seconds: 75,
      modelAnswer: [
        "Monitor, oxygen as needed, seizure precautions, bed low with rails padded.",
        "High dose IV thiamine now, such as 500 mg IV, because Wernicke encephalopathy is possible. Continue IV thiamine for several days. Regimens vary from 200 to 500 mg IV up to three times daily.",
        "Treat the low glucose now. Do not delay dextrose to wait for thiamine.",
        "Start a benzodiazepine immediately for severe withdrawal.",
        "Send electrolytes, magnesium, phosphate, liver tests, lipase, ketones, CK, ethanol and osmolality.",
        "History from paramedics and his partner: usual intake, last drink, past withdrawal seizures or delirium, other drugs, eating and the head strike.",
        "Examine for Wernicke signs, head injury, liver disease and infection.",
      ],
      rubric: ["aw-r1", "aw-m1", "aw-h1", "aw-h2", "aw-h3", "aw-h4", "aw-x1"],
      choices: [
        {
          id: "c-thiamine-high",
          label: "I gave thiamine 500 mg IV, treated his glucose with dextrose right away, and started a benzodiazepine for his withdrawal.",
          next: "q-benzo",
          quality: "strong",
          feedback:
            "Good. Confusion plus nystagmus in a malnourished drinker is Wernicke encephalopathy until proven otherwise. It needs high dose IV thiamine. " +
            "Give thiamine as soon as possible, but never let it delay treatment of low glucose.",
        },
        {
          id: "c-delay-glucose",
          label: "I gave thiamine 100 mg IM and held dextrose until the thiamine had time to work.",
          next: "s-delay-glucose",
          quality: "partial",
          feedback:
            "Holding glucose for thiamine is outdated. Hypoglycemia injures the brain within minutes. " +
            "100 mg IM is also too low for suspected Wernicke encephalopathy. The examiner wanted high dose IV thiamine, such as 500 mg, and immediate dextrose.",
        },
        {
          id: "c-no-thiamine",
          label: "I gave 50 mL of D50W and started a dextrose infusion, without thiamine.",
          next: "s-no-thiamine",
          quality: "unsafe",
          feedback:
            "Treating the glucose is right, but a malnourished heavy drinker with confusion and nystagmus needs thiamine now. " +
            "Untreated Wernicke encephalopathy can leave permanent memory loss. Ongoing dextrose without thiamine may also worsen it. The examiner wanted high dose IV thiamine given right away.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-delay-glucose",
      phase: "Fifteen minutes later",
      text: "His glucose is now 2.9 mmol/L and he is less responsive. The nurse asks if she can give dextrose. You give it and add thiamine 500 mg IV.",
      next: "q-benzo",
    },
    {
      kind: "say",
      id: "s-no-thiamine",
      phase: "At the bedside",
      text: "The nurse asks whether you want thiamine before the dextrose infusion runs further. The pharmacist is on the phone asking the same. You order thiamine 500 mg IV now.",
      next: "q-benzo",
    },
    {
      kind: "question",
      id: "q-benzo",
      phase: "Benzodiazepines",
      prompt: "How will you treat his withdrawal? Give me the drug, dose, route and endpoint.",
      seconds: 90,
      modelAnswer: [
        "Front loading with a long acting benzodiazepine.",
        "Diazepam 10 to 20 mg IV every 5 to 10 minutes until he is calm but rousable.",
        "Then symptom triggered dosing by CIWA-Ar once he can be scored reliably.",
        "Lorazepam is an alternative if there is significant liver failure, but it is shorter acting.",
        "Do not use antipsychotics alone. They lower the seizure threshold and do not treat withdrawal.",
      ],
      rubric: ["aw-m2", "aw-a1"],
      choices: [
        {
          id: "c-diazepam",
          label: "I gave diazepam 20 mg IV and repeated 10 to 20 mg every 5 to 10 minutes until he was calm but rousable.",
          next: "q-workup",
          quality: "strong",
          feedback:
            "Correct. Rapid IV loading with a long acting benzodiazepine controls severe withdrawal and prevents more seizures. " +
            "The endpoint is light sedation, not a fixed dose. Diazepam's long half life smooths the course.",
        },
        {
          id: "c-fixed-low",
          label: "I ordered lorazepam 1 mg by mouth every 4 hours on a fixed schedule.",
          next: "s-fixed-low",
          quality: "partial",
          feedback:
            "This is far too little for a CIWA of 29 with hallucinations and a seizure. He cannot reliably take oral medication. " +
            "The examiner wanted rapid IV titration to a clinical endpoint.",
        },
        {
          id: "c-haldol",
          label: "I gave haloperidol 5 mg IV for the hallucinations.",
          next: "s-haldol",
          quality: "unsafe",
          feedback:
            "Antipsychotics alone do not treat withdrawal. They lower the seizure threshold and can prolong the QT, which is already 488 ms. " +
            "The examiner wanted IV benzodiazepines titrated to effect.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fixed-low",
      phase: "Forty minutes later",
      text: "He has spat out the tablet and is now trying to pull out his IV. CIWA is 34. You start IV diazepam 20 mg and repeat it.",
      next: "q-workup",
    },
    {
      kind: "say",
      id: "s-haldol",
      phase: "Twenty minutes later",
      text: "He has a second generalized seizure lasting 90 seconds. You give diazepam 10 mg IV and it stops. You then continue diazepam every 5 to 10 minutes.",
      next: "q-workup",
    },
    {
      kind: "question",
      id: "q-workup",
      phase: "Other problems",
      prompt: "His blood work is back. What other problems does he have, and how do you manage them?",
      seconds: 75,
      modelAnswer: [
        "Hypokalemia, hypomagnesemia and hypophosphatemia. Replace magnesium first or together with potassium.",
        "Magnesium sulfate 2 to 4 g IV. Potassium chloride 10 mmol/h peripherally with monitoring. Phosphate replacement.",
        "Alcoholic ketoacidosis. Dextrose containing fluid such as D5 normal saline after thiamine.",
        "Refeeding risk. Monitor electrolytes daily.",
        "Low grade fever may be withdrawal, but look for aspiration, meningitis and other infection.",
        "Head injury: CT is negative. Repair the laceration.",
        "QTc 488 ms: avoid QT prolonging drugs until corrected.",
      ],
      rubric: ["aw-a2", "aw-m3"],
      next: "s-refractory",
    },
    {
      kind: "say",
      id: "s-refractory",
      phase: "Ninety minutes later",
      text:
        "He has had 200 mg of diazepam IV in the last 90 minutes. He is still hallucinating, trying to get out of bed and hitting out at staff. Heart rate 142. Blood pressure 184/108. Temperature 38.4. CIWA cannot be scored.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Refractory withdrawal",
      prompt: "What is happening and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Benzodiazepine resistant withdrawal and delirium tremens.",
        "Call the ICU now.",
        "Add phenobarbital, either 130 to 260 mg IV every 15 to 20 minutes titrated, or a single 10 mg/kg IV load over 30 minutes in a monitored setting.",
        "Be ready to manage the airway. If still refractory, intubate and use a propofol infusion.",
        "Dexmedetomidine can be an adjunct but does not prevent seizures and is not used alone.",
        "Avoid physical restraint alone.",
      ],
      rubric: ["aw-m4", "aw-l1"],
      choices: [
        {
          id: "c-phenobarb",
          label: "I called the ICU and gave phenobarbital 10 mg/kg IV over 30 minutes, about 780 mg, with airway equipment ready.",
          next: "q-leave",
          quality: "strong",
          feedback:
            "Good. Phenobarbital acts on a different part of the GABA receptor and works when benzodiazepines are failing. " +
            "Early ICU involvement matters because he may need intubation and continuous monitoring.",
        },
        {
          id: "c-more-diazepam",
          label: "I kept giving diazepam 20 mg every 10 minutes without a limit and did not call the ICU yet.",
          next: "s-more-diazepam",
          quality: "partial",
          feedback:
            "More benzodiazepine alone often fails once resistance is clear, and doses keep climbing. " +
            "The examiner wanted a second agent such as phenobarbital and early ICU involvement.",
        },
        {
          id: "c-restrain",
          label: "I put him in four point restraints and gave haloperidol 10 mg IV.",
          next: "s-restrain",
          quality: "unsafe",
          feedback:
            "Restraints without adequate sedation cause hyperthermia and rhabdomyolysis. Haloperidol does not treat withdrawal and lowers the seizure threshold. " +
            "The examiner wanted phenobarbital and ICU care.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-more-diazepam",
      phase: "Forty minutes later",
      text:
        "He has now had 320 mg of diazepam. He is still thrashing, and his SpO2 is falling to 90 percent with snoring respirations between episodes. You call the ICU and give phenobarbital.",
      next: "q-leave",
    },
    {
      kind: "say",
      id: "s-restrain",
      phase: "Thirty minutes later",
      text:
        "He is straining against the restraints. His temperature is 39.4 and his CK has risen to 3,800 U/L. The ICU fellow arrives and you give phenobarbital together.",
      next: "q-leave",
    },
    {
      kind: "question",
      id: "q-leave",
      phase: "Leaving",
      prompt:
        "He settles after phenobarbital. At 04:00, while awaiting an ICU bed, he sits up and demands to go home. He is still disoriented. What do you do?",
      seconds: 60,
      modelAnswer: [
        "Assess capacity. He is delirious and cannot understand or appreciate the risks. He is incapable.",
        "He can be kept and treated under emergency treatment provisions of the Health Care Consent Act.",
        "Contact his substitute decision maker, likely his partner.",
        "Use the least restrictive approach: calm voice, reorientation, a sitter, and more medication if needed.",
        "A Form 1 is for psychiatric assessment and does not authorize medical treatment. It is not the right tool for a medical delirium.",
      ],
      rubric: ["aw-p1"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "The internist offers to admit him to a regular medical ward. Where should he go?",
      seconds: 60,
      modelAnswer: [
        "ICU or step down for delirium tremens requiring phenobarbital and high benzodiazepine doses.",
        "He needs continuous monitoring of airway, rhythm and electrolytes.",
        "Ongoing high dose IV thiamine.",
        "Addiction medicine consult.",
      ],
      rubric: ["aw-d1"],
      choices: [
        {
          id: "c-icu",
          label: "I insisted on the ICU because he has delirium tremens needing phenobarbital and high benzodiazepine doses, with a risk to his airway.",
          next: "q-recovery",
          quality: "strong",
          feedback:
            "Correct. Delirium tremens carries a real mortality risk. After phenobarbital and 200 mg of diazepam he needs continuous monitoring. " +
            "A ward cannot provide that safely.",
        },
        {
          id: "c-ward",
          label: "I agreed to a ward bed with CIWA every 4 hours.",
          next: "s-ward",
          quality: "unsafe",
          feedback:
            "Four hourly scoring cannot keep up with delirium tremens, and he has had large sedative doses. " +
            "The examiner wanted ICU or step down care.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ward",
      phase: "Six hours later",
      text: "The ward calls a rapid response. He is agitated again, has pulled out his IV and his temperature is 39.1. He is moved to the ICU.",
      next: "q-recovery",
    },
    {
      kind: "question",
      id: "q-recovery",
      phase: "Recovery",
      prompt: "Three days later he is clear and asks you what happened. He says he wants to stop drinking. What do you offer him?",
      seconds: 75,
      modelAnswer: [
        "Explain without judgment what happened and how serious it was.",
        "Offer medication for alcohol use disorder. Naltrexone 50 mg daily or acamprosate 666 mg three times daily are first line.",
        "His AST is about 5 times normal and his platelets are low, so possible cirrhosis. Acamprosate is the safer choice. Naltrexone is avoided in acute hepatitis or liver failure and in anyone needing opioids.",
        "Refer to a rapid access addiction medicine clinic and community withdrawal and counselling services.",
        "Do not discharge with a benzodiazepine prescription.",
        "Continue oral thiamine.",
      ],
      rubric: ["aw-c1", "aw-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He leaves with a prescription for acamprosate and an appointment at a rapid access addiction medicine clinic. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "aw-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Treats hypoglycemia immediately without waiting for thiamine.",
      points: 2,
      teaching: "Low glucose injures the brain now. Give thiamine as soon as possible but never delay glucose for it.",
      source: "crism",
    },
    {
      id: "aw-m1",
      competency: "management",
      criterion: "management",
      text: "Gives high dose IV thiamine, such as 500 mg, for suspected Wernicke encephalopathy.",
      points: 3,
      critical: true,
      teaching: "Confusion, eye signs or ataxia in a malnourished drinker suggest Wernicke. The classic triad is often incomplete. Treat with parenteral thiamine. The Canadian guideline gives a floor of 200 to 300 mg daily, and many centres give 500 mg IV three times daily.",
      source: "crism",
    },
    {
      id: "aw-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Uses CIWA-Ar to grade severity and recognizes it cannot be scored in a delirious patient.",
      points: 1,
      teaching: "CIWA-Ar needs a patient who can answer questions. In delirium use signs and sedation scales.",
      source: "ciwa",
    },
    {
      id: "aw-m2",
      competency: "management",
      criterion: "management",
      text: "Front loads diazepam 10 to 20 mg IV every 5 to 10 minutes to a calm but rousable endpoint.",
      points: 3,
      critical: true,
      teaching: "Early aggressive benzodiazepine dosing prevents seizures and delirium tremens. Titrate to effect, not to a fixed dose.",
      source: "asam",
    },
    {
      id: "aw-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Looks for other causes and complications: head injury, infection, ketoacidosis, electrolyte losses and QT prolongation.",
      points: 2,
      teaching: "Withdrawal is common but not the only problem. Seizure with head injury needs CT. Fever needs a search for infection.",
      source: "asam",
    },
    {
      id: "aw-m3",
      competency: "management",
      criterion: "management",
      text: "Replaces magnesium, potassium and phosphate and gives dextrose containing fluid for alcoholic ketoacidosis.",
      points: 2,
      teaching: "Potassium will not correct until magnesium is replaced. Dextrose and fluid switch off ketogenesis.",
      source: "crism",
    },
    {
      id: "aw-m4",
      competency: "management",
      criterion: "management",
      text: "Recognizes benzodiazepine resistant withdrawal and adds phenobarbital, with propofol and intubation if still refractory.",
      points: 3,
      critical: true,
      teaching: "Phenobarbital adds a second GABA mechanism. A single 10 mg/kg IV dose reduced ICU admission in one ED trial.",
      source: "rosenson",
    },
    {
      id: "aw-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls the ICU early when high benzodiazepine doses fail.",
      points: 1,
      teaching: "Delirium tremens can need airway support. Bring in help before the crisis.",
      source: "asam",
    },
    {
      id: "aw-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Assesses capacity when he tries to leave and keeps him under emergency treatment provisions with the least restrictive approach.",
      points: 2,
      teaching: "A delirious patient is usually incapable. Emergency treatment without consent is allowed when delay risks serious harm.",
      source: "hcca",
    },
    {
      id: "aw-d1",
      competency: "disposition",
      criterion: "process",
      text: "Admits him to the ICU or step down unit.",
      points: 2,
      teaching: "Delirium tremens needing phenobarbital or large benzodiazepine doses is an ICU condition.",
      source: "asam",
    },
    {
      id: "aw-c1",
      competency: "communication",
      criterion: "process",
      text: "Discusses alcohol use without judgment and supports his goal to stop.",
      points: 1,
      teaching: "A serious event is a window for change. Respectful conversation raises the chance he will engage.",
      source: "crism",
    },
    {
      id: "aw-d2",
      competency: "disposition",
      criterion: "process",
      text: "Offers naltrexone or acamprosate and referral to addiction medicine, and avoids a benzodiazepine prescription at discharge.",
      points: 2,
      teaching: "Naltrexone and acamprosate are first line for alcohol use disorder. Choose acamprosate when liver disease is a concern. Take home benzodiazepines add overdose risk with alcohol.",
      source: "crism",
    },
    {
      id: "aw-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about his usual daily alcohol intake and the time of his last drink.",
      points: 2,
      teaching: "Withdrawal seizures peak at 6 to 48 hours after the last drink and delirium at 48 to 96 hours. The timeline tells you where he is on that curve.",
      source: "asam",
    },
    {
      id: "aw-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about past withdrawal seizures, delirium tremens and admissions for withdrawal.",
      points: 2,
      teaching: "A history of complicated withdrawal is the strongest predictor of severe withdrawal this time.",
      source: "asam",
    },
    {
      id: "aw-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about other sedatives, opioids and drugs, his medications, and known liver disease.",
      points: 1,
      teaching: "Co use of sedatives changes the withdrawal picture and the risk of oversedation. Liver disease affects the choice of benzodiazepine.",
      source: "asam",
    },
    {
      id: "aw-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about his recent eating and about the fall and head strike during the seizure.",
      points: 1,
      teaching: "Poor intake raises the risk of Wernicke encephalopathy, ketoacidosis and refeeding problems. A head strike needs imaging in a confused patient.",
      source: "crism",
    },
    {
      id: "aw-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for nystagmus, ophthalmoplegia and ataxia, head injury, and signs of liver disease or infection.",
      points: 2,
      teaching: "Wernicke encephalopathy rarely shows the full triad. Any one sign in a malnourished drinker is enough to treat with high dose thiamine.",
      source: "crism",
    },
  ],
  sources: [
    {
      id: "crism",
      citation:
        "Wood E, et al. Canadian guideline for the clinical management of high risk drinking and alcohol use disorder. Canadian Research Initiative in Substance Misuse (CRISM). CMAJ. 2023.",
      url: "https://www.cmaj.ca/content/195/40/E1364",
    },
    {
      id: "asam",
      citation: "American Society of Addiction Medicine. The ASAM clinical practice guideline on alcohol withdrawal management. J Addict Med. 2020.",
    },
    {
      id: "ciwa",
      citation:
        "Sullivan JT, et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict. 1989.",
    },
    {
      id: "rosenson",
      citation:
        "Rosenson J, et al. Phenobarbital for acute alcohol withdrawal: a prospective randomized double blind placebo controlled study. J Emerg Med. 2013.",
    },
    {
      id: "hcca",
      citation: "Government of Ontario. Health Care Consent Act, 1996. S.O. 1996, c. 2, Sched. A.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
