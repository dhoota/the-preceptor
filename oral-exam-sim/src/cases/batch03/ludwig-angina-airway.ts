// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const ludwigAnginaAirway: OralCase = {
  id: "ludwig-angina-airway",
  title: "Toothache and a muffled voice",
  blueprint: "resp",
  alsoCovers: ["id", "procedures"],
  priorityTopic: "airway",
  keyFeatures: [
    { topic: "airway", n: 1 },
    { topic: "airway", n: 2 },
    { topic: "airway", n: 3 },
    { topic: "infectious-diseases", n: 4 },
    { topic: "sob", n: 1 },
  ],
  summary: "A 44 year old man with diabetes has four days of jaw pain and now struggles to swallow.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "An anesthetist, an ENT surgeon and an oral surgeon are on call. There is an OR, CT and an ICU. " +
    "A 44 year old man arrives with a swollen neck. He cannot swallow his saliva.",
  card: {
    vitals: {
      temperature: "38.9°C",
      pulse: "118/minute",
      resp: "24/minute",
      bp: "138/82 mmHg",
      o2sat: "95% on room air",
      weight: "96 kg (212 lb)",
    },
    medications: "Metformin",
    allergies: "No known drug allergies",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "Pain in a lower left molar for 4 days. Since last night his neck has swollen and he cannot swallow his saliva. " +
        "Saw a dentist 5 days ago who advised extraction. Took ibuprofen at home. Last ate 14 hours ago.",
    },
    {
      id: "triage",
      label: "Triage nurse's observations",
      result:
        "The triage nurse says: 'He is sitting forward, drooling into a towel. His voice sounds like he has a hot potato in his mouth. He will not lie back.' " +
        "Capillary glucose 21.4 mmol/L. CTAS 2.",
    },
    {
      id: "exam",
      label: "Head and neck exam",
      result:
        "Tense, woody swelling under the jaw on both sides and in the upper neck. The floor of the mouth is raised and firm. The tongue is pushed up against the palate. " +
        "Mouth opening 1.5 cm between the incisors. Decayed and tender lower left second molar. No fluctuance. Voice muffled. No stridor at rest. Neck extension limited by pain.",
    },
    {
      id: "airway",
      label: "Airway assessment",
      result:
        "Sitting upright and leaning forward. Drooling. Cannot open his mouth enough to see the soft palate. Thyromental distance hard to judge due to swelling. " +
        "The cricothyroid membrane cannot be felt through the swelling. Ultrasound can identify it 2.5 cm deep.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Type 2 diabetes. Last HbA1c 10.8 percent.",
    },
    {
      id: "meds",
      label: "Medications and allergies",
      result: "Metformin, with missed doses for a month. Ibuprofen at home for the tooth. No known drug allergies.",
    },
    {
      id: "social",
      label: "Social history",
      result: "He could not afford the dental extraction he was advised to have 5 days ago.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "White cells 21.6 x 10^9/L with 88 percent neutrophils. Hemoglobin 148 g/L. Platelets 312 x 10^9/L. Sodium 131 mmol/L. Potassium 4.6 mmol/L. " +
        "Creatinine 104 µmol/L. Glucose 22.1 mmol/L. Beta hydroxybutyrate 0.8 mmol/L. Lactate 2.8 mmol/L. CRP 286 mg/L.",
    },
    {
      id: "gas",
      label: "Venous blood gas",
      result: "pH 7.34. pCO2 39 mmHg. HCO3 21 mmol/L. Anion gap 14.",
    },
    {
      id: "pocus",
      label: "Neck ultrasound",
      result: "Diffuse edema of the submandibular and sublingual spaces on both sides. A small hypoechoic area 1.2 cm near the left mandible. No large drainable collection seen.",
    },
    {
      id: "ct",
      label: "CT neck with contrast (after the airway is secured)",
      result:
        "Cellulitis and phlegmon of the bilateral submandibular and sublingual spaces with a 2.4 cm gas containing collection near the left mandible. " +
        "Periapical abscess of tooth 37. Airway narrowed to 6 mm at the level of the tongue base. No mediastinal extension.",
    },
    {
      id: "cultures",
      label: "Cultures",
      result: "Two sets of blood cultures drawn before antibiotics.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text: "He is sitting bolt upright on the stretcher, spitting into a basin. The nurse wants to lay him flat to start an IV and send him to CT.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What is your working diagnosis and what are your priorities right now?",
      seconds: 90,
      modelAnswer: [
        "Ludwig angina: bilateral submandibular and sublingual space infection from a dental source. Threatened airway.",
        "Keep him sitting up. Do not lay him flat. Do not send him to CT alone.",
        "Oxygen, monitor, IV with him upright.",
        "Call anesthesia and ENT or oral surgery now for a joint airway plan.",
        "Blood cultures, then IV antibiotics without delay.",
        "Difficult airway cart and front of neck access kit to the bedside.",
        "Ask how fast the swelling has spread, about the tooth and dental care, and whether he can swallow, speak or lie flat. Examine mouth opening, floor of mouth, voice and stridor.",
      ],
      rubric: ["lu-a1", "lu-r1", "lu-l1", "lu-h1", "lu-h2", "lu-x1"],
      choices: [
        {
          id: "c-upright",
          label: "I kept him upright, started an IV sitting up, gave antibiotics after cultures, and called anesthesia and ENT to the bedside right away.",
          next: "q-assess",
          quality: "strong",
          feedback:
            "Correct. Ludwig angina kills by sudden airway loss. Lying flat lets the tongue fall back onto a swollen floor of mouth. Early joint planning with anesthesia and surgery is the key step.",
        },
        {
          id: "c-ct-first",
          label: "I sent him to CT to see the extent of the infection before calling anyone.",
          next: "s-ct-first",
          quality: "partial",
          feedback:
            "CT helps with surgical planning. Lying supine in a scanner away from resus is a common setting for airway loss. Secure the airway plan first and image later with a team present.",
        },
        {
          id: "c-drain",
          label: "I planned to incise and drain the swelling in the ED under procedural sedation with propofol.",
          next: "s-drain",
          quality: "unsafe",
          feedback:
            "Sedation removes the muscle tone holding his airway open. He could obstruct completely and you may not be able to bag or intubate him. There is also no drainable collection on ultrasound yet.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ct-first",
      phase: "In CT",
      text:
        "The technologist calls. He will not lie flat and became distressed with his SpO2 at 88 percent when they tried. He is brought back to resus sitting up. The scan was not done.",
      next: "q-assess",
    },
    {
      kind: "say",
      id: "s-drain",
      phase: "Three minutes later",
      text:
        "After 40 mg of propofol he snores, then stops moving air. SpO2 falls to 84 percent. The RT sits him up and does a jaw thrust. He wakes and breathes again. The anesthetist arrives and asks that no more sedation be given.",
      next: "q-assess",
    },
    {
      kind: "question",
      id: "q-assess",
      phase: "Airway assessment",
      prompt: "What features make this airway difficult, and what are the options for securing it?",
      seconds: 60,
      modelAnswer: [
        "Trismus of 1.5 cm limits mouth opening and it will not reliably improve with paralysis.",
        "Raised tongue and floor of mouth block the view. Distorted neck anatomy makes front of neck access hard.",
        "Difficult laryngoscopy, difficult mask ventilation and difficult cricothyrotomy are all likely.",
        "Options: awake flexible bronchoscopic intubation, usually nasal. Awake tracheostomy under local anesthetic.",
        "Mark the cricothyroid membrane with ultrasound now.",
      ],
      rubric: ["lu-a2"],
      next: "q-abx",
    },
    {
      kind: "question",
      id: "q-abx",
      phase: "Medical therapy",
      prompt: "Tell me your antibiotics and other medical treatment with doses.",
      seconds: 60,
      modelAnswer: [
        "Piperacillin tazobactam 4.5 g IV every 6 to 8 hours, or ceftriaxone 2 g IV daily plus metronidazole 500 mg IV every 12 hours.",
        "Add vancomycin for MRSA colonization or risk. Poorly controlled diabetes justifies broad cover such as piperacillin tazobactam.",
        "Dexamethasone 10 mg IV is often given for airway edema. Evidence is limited and it must not delay a definitive airway.",
        "Fluids for sepsis. Insulin for hyperglycemia once potassium is checked.",
        "Analgesia with small doses that do not depress breathing.",
        "Ask about drug allergies, diabetes control and the time of his last meal.",
      ],
      rubric: ["lu-m1", "lu-m2", "lu-h3", "lu-h4"],
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Airway plan",
      prompt: "The anesthetist and ENT surgeon are here. The resident suggests a rapid sequence intubation with a video laryngoscope now. What plan do you agree on?",
      seconds: 90,
      modelAnswer: [
        "No RSI. Paralysis may leave you unable to intubate or oxygenate.",
        "Awake flexible bronchoscopic intubation, usually nasal, in the OR.",
        "Topical lidocaine and a nasal vasoconstrictor. Minimal or no sedation.",
        "Double setup: ENT scrubbed and ready for surgical airway or awake tracheostomy.",
        "Clear plan A, B and C spoken aloud before starting.",
      ],
      rubric: ["lu-r2", "lu-l1"],
      choices: [
        {
          id: "c-awake",
          label: "I agreed on an awake nasal flexible bronchoscopic intubation in the OR, with topical anesthesia and ENT scrubbed for a surgical airway.",
          next: "s-stridor",
          quality: "strong",
          feedback:
            "This is the standard approach. The patient keeps breathing on his own until the tube is confirmed. The surgeon is ready if the airway is lost.",
        },
        {
          id: "c-awake-vl",
          label: "I planned an awake video laryngoscopy in the ED with topical lidocaine.",
          next: "s-awake-vl",
          quality: "partial",
          feedback:
            "An awake technique is the right idea. With 1.5 cm of mouth opening a video laryngoscope may not fit. The OR with a flexible scope and a surgeon scrubbed is safer.",
        },
        {
          id: "c-rsi",
          label: "I agreed to RSI with rocuronium and a video laryngoscope in the ED.",
          next: "s-rsi",
          quality: "unsafe",
          feedback:
            "Paralysis in Ludwig angina can cause a can't intubate, can't oxygenate situation. Trismus from infection often does not resolve with a relaxant. Mask ventilation may fail because of the swollen tongue.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-awake-vl",
      phase: "At the bedside",
      text: "The anesthetist tries to place the video laryngoscope blade. It will not pass his teeth. She stops and asks that the OR be opened for a flexible scope.",
      next: "s-stridor",
    },
    {
      kind: "say",
      id: "s-rsi",
      phase: "At the bedside",
      text:
        "The anesthetist says she will not paralyze him. She asks to move to the OR for an awake approach. The ENT surgeon agrees. The resident draws the drugs back up.",
      next: "s-stridor",
    },
    {
      kind: "say",
      id: "s-stridor",
      phase: "Waiting for the OR",
      text:
        "The OR says it needs 25 minutes to be ready. Ten minutes later he develops inspiratory stridor. SpO2 is 89 percent on a non rebreather. He is anxious and gripping the side rails.",
      next: "q-stridor",
    },
    {
      kind: "question",
      id: "q-stridor",
      phase: "Deterioration",
      prompt: "What do you do now?",
      seconds: 90,
      modelAnswer: [
        "Keep him upright. Add high flow nasal oxygen.",
        "Nebulized epinephrine 5 mg, which is 5 mL of 1 mg/mL, as a temporary bridge. Evidence in Ludwig angina is limited. Dexamethasone if not already given.",
        "Do not sedate. Do not send to CT.",
        "Move the plan forward: awake intubation now in resus or go straight to the OR with the team.",
        "ENT ready for awake tracheostomy or surgical airway at the bedside. Cricothyroid membrane marked.",
      ],
      rubric: ["lu-r3", "lu-l2"],
      choices: [
        {
          id: "c-now",
          label: "I sat him up, added high flow nasal oxygen and nebulized epinephrine, and moved the team to secure the airway now with ENT ready for a surgical airway.",
          next: "q-cico",
          quality: "strong",
          feedback:
            "Correct. Stridor means the airway is critically narrowed. Epinephrine can buy minutes but is not a plan. The team must act now rather than wait for the OR schedule.",
        },
        {
          id: "c-midaz",
          label: "I gave midazolam 2 mg IV because his anxiety was making his breathing worse.",
          next: "s-midaz",
          quality: "unsafe",
          feedback:
            "This is unsafe. His anxiety is from air hunger. Benzodiazepines reduce airway tone and drive and can cause complete obstruction. Any sedation belongs inside the awake intubation plan with the surgeon ready.",
        },
        {
          id: "c-ct",
          label: "I sent him to CT to see how narrow the airway is before deciding.",
          next: "s-ct",
          quality: "unsafe",
          feedback:
            "A patient with stridor should never leave resus for imaging. Lying flat can cause complete obstruction. The decision to secure the airway is clinical.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-midaz",
      phase: "Two minutes later",
      text: "His stridor becomes quieter and his SpO2 falls to 80 percent. He is barely moving air. The anesthetist sits him forward and the ENT surgeon opens the tracheostomy kit.",
      next: "q-cico",
    },
    {
      kind: "say",
      id: "s-ct",
      phase: "In the hallway",
      text: "On the way to CT he becomes silent and his SpO2 falls to 78 percent. The nurse brings him back to resus. The ENT surgeon is scrubbing.",
      next: "q-cico",
    },
    {
      kind: "question",
      id: "q-cico",
      phase: "Can't intubate, can't oxygenate",
      prompt: "The anesthetist attempts an awake nasal scope. He suddenly obstructs and his SpO2 falls to 70 percent. You cannot bag him. What do you do?",
      seconds: 90,
      modelAnswer: [
        "Declare can't intubate, can't oxygenate out loud.",
        "Immediate front of neck access. ENT performs a surgical airway if at the bedside.",
        "Otherwise scalpel, finger, bougie, tube cricothyrotomy with a vertical skin incision because the landmarks are distorted.",
        "Place a 6.0 cuffed tube. Confirm with waveform capnography.",
        "Do not delay for further attempts from above.",
      ],
      rubric: ["lu-r4", "lu-l2"],
      next: "q-after",
    },
    {
      kind: "question",
      id: "q-after",
      phase: "After the airway",
      prompt: "ENT has placed a surgical airway. His SpO2 is 96 percent. What happens next and where does he go?",
      seconds: 60,
      modelAnswer: [
        "CT neck and chest with contrast to map collections and look for mediastinal spread.",
        "Urgent surgical drainage and extraction of the source tooth by ENT or oral surgery.",
        "Continue antibiotics. Tailor to cultures.",
        "Insulin infusion for glucose control. Sepsis care.",
        "ICU admission.",
        "Debrief the team and update his family.",
      ],
      rubric: ["lu-d1", "lu-c1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He goes to the OR for drainage and extraction, then to the ICU. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "lu-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Diagnoses Ludwig angina from bilateral submandibular swelling, raised floor of mouth and a dental source.",
      points: 2,
      teaching: "Ludwig angina is a rapidly spreading cellulitis of the submandibular and sublingual spaces. Drooling, muffled voice and trismus signal airway threat.",
      source: "ajem",
    },
    {
      id: "lu-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Keeps the patient upright, avoids laying him flat, and does not send him to CT unaccompanied.",
      points: 2,
      teaching: "Position is airway protection. Supine positioning and trips to CT are common settings for sudden obstruction.",
      source: "ajem",
    },
    {
      id: "lu-l1",
      competency: "leadership",
      criterion: "process",
      text: "Calls anesthesia and ENT or oral surgery early and leads a shared airway plan.",
      points: 2,
      teaching: "An anticipated difficult airway is a team problem. Plan A, B and C should be agreed and spoken aloud before anyone starts.",
      source: "cafg",
    },
    {
      id: "lu-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies predictors of difficult laryngoscopy, mask ventilation and front of neck access, and marks the cricothyroid membrane with ultrasound.",
      points: 2,
      teaching: "Distorted neck anatomy makes cricothyrotomy harder. Finding the membrane with ultrasound before a crisis saves time.",
      source: "cafg",
    },
    {
      id: "lu-m1",
      competency: "management",
      criterion: "management",
      text: "Gives broad spectrum IV antibiotics covering oral streptococci and anaerobes after blood cultures.",
      points: 2,
      teaching: "Piperacillin tazobactam, or ceftriaxone with metronidazole, cover the usual mixed oral flora. Add vancomycin for MRSA risk.",
      source: "ajem",
    },
    {
      id: "lu-m2",
      competency: "management",
      criterion: "management",
      text: "Considers dexamethasone and manages hyperglycemia and sepsis.",
      points: 1,
      teaching: "Steroids are commonly used to reduce edema though evidence is limited. Uncontrolled diabetes worsens deep neck infection.",
      source: "ajem",
    },
    {
      id: "lu-r2",
      competency: "resuscitation",
      criterion: "management",
      text: "Chooses awake flexible bronchoscopic intubation or awake tracheostomy with a double setup, and rejects RSI.",
      points: 3,
      critical: true,
      teaching: "An awake technique keeps spontaneous breathing until the tube is confirmed. Paralysis can create a can't intubate, can't oxygenate crisis.",
      source: "das-ati",
    },
    {
      id: "lu-r3",
      competency: "resuscitation",
      criterion: "management",
      text: "Responds to stridor by keeping the patient upright, giving nebulized epinephrine as a bridge, avoiding sedation and securing the airway without delay.",
      points: 3,
      critical: true,
      teaching: "Stridor means severe narrowing. Bridges buy minutes. The airway must be secured by the most expert team available now.",
      source: "cafg",
    },
    {
      id: "lu-l2",
      competency: "leadership",
      criterion: "process",
      text: "Keeps the ENT surgeon at the bedside ready for a surgical airway during any attempt.",
      points: 1,
      teaching: "A double setup means the surgical option is scrubbed and ready, not on the way.",
      source: "cafg",
    },
    {
      id: "lu-r4",
      competency: "resuscitation",
      criterion: "management",
      text: "Declares can't intubate, can't oxygenate and performs or directs immediate front of neck access with a scalpel, bougie and tube technique.",
      points: 3,
      critical: true,
      teaching: "Delay kills in CICO. A vertical skin incision helps when landmarks are distorted. Confirm with waveform capnography.",
      source: "das-cico",
    },
    {
      id: "lu-d1",
      competency: "disposition",
      criterion: "process",
      text: "Arranges CT after the airway is secure, urgent surgical drainage and source control, and ICU admission.",
      points: 2,
      teaching: "Antibiotics alone rarely resolve a gas containing collection. Source control of the tooth and drainage are needed.",
      source: "ajem",
    },
    {
      id: "lu-c1",
      competency: "communication",
      criterion: "process",
      text: "Leads a team debrief after the airway crisis and updates the family.",
      points: 1,
      teaching: "A surgical airway is stressful for everyone. A short debrief supports the team and captures lessons.",
      source: "cafg",
    },
    {
      id: "lu-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about airway symptoms: how fast the swelling has spread, drooling, voice change, trouble swallowing or breathing, and whether he can lie flat.",
      points: 3,
      teaching: "Rapid progression, drooling, a muffled voice and inability to lie flat mark an airway at risk. These answers set the urgency.",
      source: "ajem",
    },
    {
      id: "lu-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the dental source: which tooth, how long, and any recent dental visit or procedure.",
      points: 2,
      teaching: "Most Ludwig angina starts from a lower molar. A recent dental visit or untreated decay supports the diagnosis and guides source control.",
      source: "ajem",
    },
    {
      id: "lu-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about diabetes control, adherence to medication and recent glucose readings.",
      points: 2,
      teaching: "Poorly controlled diabetes is a major risk factor for deep neck infection and worsens outcome. It also guides insulin in the ED.",
      source: "ajem",
    },
    {
      id: "lu-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about drug allergies before antibiotics and the time of his last meal before airway management.",
      points: 2,
      teaching: "Allergies change the antibiotic choice. Fasting time informs aspiration risk during the airway plan.",
      source: "cafg",
    },
    {
      id: "lu-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Examines for trismus, floor of mouth elevation, tongue position, drooling, voice change and stridor.",
      points: 2,
      teaching: "Measure mouth opening between the incisors. A raised, firm floor of mouth and a tongue pushed against the palate predict a very difficult airway.",
      source: "ajem",
    },
  ],
  sources: [
    {
      id: "cafg",
      citation:
        "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus based recommendations for management of the difficult airway. Part 2. Planning and implementing safe management of the patient with an anticipated difficult airway. Canadian Journal of Anesthesia. 2021.",
    },
    {
      id: "das-ati",
      citation: "Ahmad I, El-Boghdadly K, Bhagrath R, et al. Difficult Airway Society guidelines for awake tracheal intubation in adults. Anaesthesia. 2020.",
    },
    {
      id: "das-cico",
      citation:
        "Ahmad I, et al. Difficult Airway Society 2025 guidelines for management of unanticipated difficult tracheal intubation in adults. British Journal of Anaesthesia. 2026.",
    },
    {
      id: "ajem",
      citation: "Bridwell R, Gottlieb M, Koyfman A, Long B. Diagnosis and management of Ludwig's angina. An evidence based review. American Journal of Emergency Medicine. 2021.",
      url: "https://pubmed.ncbi.nlm.nih.gov/33383265/",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
