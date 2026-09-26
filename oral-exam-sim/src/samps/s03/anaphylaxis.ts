// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

/** Every combination of the given word groups, joined by spaces. */
const c = (...parts: string[][]): string[] =>
  parts.reduce<string[]>((acc, p) => acc.flatMap((a) => p.map((x) => (a ? `${a} ${x}` : x))), [""]);

const EPI = ["epinephrine", "adrenaline", "epi"];
const IM = ["im", "intramuscular", "intramuscularly", "thigh"];
const EPI_05 = ["0.5 mg", "0.5mg", "500 mcg", "500mcg"];
const EPI_03 = ["0.3 mg", "0.3mg", "300 mcg", "300mcg"];
/**
 * An undiluted IV push of epinephrine with a pulse. Kept to "push" phrases so that
 * a line such as "epinephrine 0.5 mg IM and a 1 L IV fluid bolus" is not flagged.
 */
const EPI_IV_BOLUS = ["epinephrine iv push", "adrenaline iv push", "epi iv push", "epinephrine 1 mg iv push", "adrenaline 1 mg iv push"];

const AUTHOR = "Preceptor";

const WAO: Source = {
  id: "wao",
  citation: "Cardona V, et al. World Allergy Organization anaphylaxis guidance 2020. World Allergy Organ J. 2020.",
};
const RCUK: Source = {
  id: "rcuk",
  citation: "Resuscitation Council UK. Emergency treatment of anaphylaxis. Guidelines for healthcare providers. 2021.",
  url: "https://www.resus.org.uk/sites/default/files/2021-05/Emergency%20Treatment%20of%20Anaphylaxis%20May%202021_0.pdf",
};
const CPS: Source = {
  id: "cps",
  citation: "Canadian Paediatric Society, Acute Care Committee. Emergency treatment of anaphylaxis in infants and children. Position statement. Paediatr Child Health. 2011. Reaffirmed 2018.",
};
const CSACI: Source = {
  id: "csaci",
  citation: "Canadian Society of Allergy and Clinical Immunology. Anaphylaxis in schools and other settings. 3rd ed, revised. 2016.",
};
const JTF: Source = {
  id: "jtf",
  citation:
    "Shaker MS, et al. Anaphylaxis. A 2020 practice parameter update, systematic review, and GRADE analysis. J Allergy Clin Immunol. 2020.",
  url: "https://www.jacionline.org/article/S0091-6749(20)30105-6/fulltext",
};
const REFRACTORY: Source = {
  id: "refractory",
  citation: "Pouessel G, et al. Management of refractory anaphylaxis. An overview of current guidelines. Clin Exp Allergy. 2024.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11439156/",
};
const CSACI_EAI: Source = {
  id: "csaci-eai",
  citation:
    "Li LDX, et al. CSACI position statement. Transition recommendations on existing epinephrine autoinjectors. Allergy Asthma Clin Immunol. 2021.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8670273/",
};
const CAFG: Source = {
  id: "cafg",
  citation:
    "Law JA, et al. Canadian Airway Focus Group updated consensus-based recommendations for management of the difficult airway. Can J Anesth. 2021.",
};
const ANGIO: Source = {
  id: "angio",
  citation:
    "Bernstein JA, et al. Angioedema in the emergency department. A practical guide to differential diagnosis and management. Int J Emerg Med. 2017.",
};
const ACR: Source = { id: "acr", citation: "American College of Radiology, Committee on Drugs and Contrast Media. ACR Manual on Contrast Media. 2025." };
const CPS_ASTHMA: Source = {
  id: "cps-asthma",
  citation: "Trottier ED, et al. Canadian Paediatric Society. Managing an acute asthma exacerbation in children. Position statement. Paediatr Child Health. 2021.",
};
const CIAF: Source = {
  id: "ciaf",
  citation: "Canadian Patient Safety Institute. Canadian Incident Analysis Framework. 2012.",
};
const DRUG_ALLERGY: Source = {
  id: "drug-allergy",
  citation: "Khan DA, et al. Drug allergy. A 2022 practice parameter update. J Allergy Clin Immunol. 2022.",
};
const AHA_SC: Source = {
  id: "aha-sc",
  citation:
    "American Heart Association. Part 10. Adult and pediatric special circumstances of resuscitation. 2025 Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.",
  url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001380",
};
const ALS_PCS: Source = {
  id: "als-pcs",
  citation: "Ontario Ministry of Health, Emergency Health Regulatory and Accountability Branch. Advanced Life Support Patient Care Standards. Version 5.4. 2025.",
  url: "https://www.ontario.ca/files/2025-04/moh-advanced-life-support-als-patient-care-standards-pcs-5.4-en-2025-04-23.pdf",
};

const base = { topic: "anaphylaxis", reviewed: true, author: AUTHOR, version: 1 } as const;

export const ANAPHYLAXIS: Samp[] = [
  {
    ...base,
    id: "anaphylaxis-01",
    alsoTopics: ["shock"],
    title: "Roofer stung on the neck",
    stem:
      "A 44-year-old roofer is brought in by coworkers 15 minutes after being stung twice on the neck by yellow jackets. He is flushed and anxious and says his throat feels tight. He has no medical history and takes no medications. He has diffuse urticaria and expiratory wheeze. His voice is normal.",
    vitals: { temperature: "36.8°C", pulse: "128/minute", resp: "26/minute", bp: "78/42 mmHg", o2sat: "92% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most appropriate first medication, including the drug, dose and route?",
        required: 1,
        accept: [
          {
            id: "epi",
            text: "Epinephrine 0.5 mg IM into the anterolateral thigh",
            match: c(EPI, EPI_05, IM),
          },
        ],
        unacceptable: [
          { text: "Epinephrine as an IV bolus in a patient with a pulse", match: EPI_IV_BOLUS, dangerous: true },
          { text: "Subcutaneous epinephrine", match: ["subcutaneous"] },
          { text: "An antihistamine as the first drug", match: ["diphenhydramine"] },
        ],
        explanation:
          "Epinephrine 0.01 mg/kg IM, maximum 0.5 mg in adults, is the first drug for anaphylaxis. The anterolateral thigh gives faster and higher peak levels than the deltoid or subcutaneous route. An IV bolus of undiluted epinephrine in a patient with a pulse can cause ventricular arrhythmias and myocardial ischemia.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the immediate interventions, other than medications?",
        required: 2,
        accept: [
          {
            id: "position",
            text: "Lay him supine with legs raised",
            match: ["supine", "leg raised", "leg elevated", "leg elevation", "lie flat", "lay flat", "trendelenburg"],
          },
          {
            id: "fluid",
            text: "Rapid crystalloid bolus of 1 to 2 L",
            match: ["bolus", "crystalloid", "normal saline", "ringer", "fluid"],
          },
          { id: "o2", text: "High flow oxygen", match: ["oxygen", "o2", "non rebreather"] },
          { id: "iv", text: "Two large bore IV lines", match: ["large bore", "iv access", "two iv", "2 iv"] },
          { id: "monitor", text: "Cardiac monitoring and repeated vital signs", match: ["monitor", "monitoring"] },
          {
            id: "airway",
            text: "Prepare difficult airway equipment and call for help",
            match: ["airway equipment", "difficult airway", "prepare intubation", "call for help"],
          },
        ],
        unacceptable: [{ text: "Sitting or standing him up while hypotensive", match: ["sit upright", "stand up", "walk"] }],
        explanation:
          "Anaphylactic shock is distributive with large capillary leak, so adults often need 1 to 2 L of crystalloid quickly. Hypotensive patients should lie flat with legs raised. Sudden sitting or standing can cause empty ventricle and cardiac arrest.",
        keyFeature: { topic: "shock", n: 3 },
        source: "rcuk",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "He has received two IM doses of epinephrine 5 minutes apart and 2 L of normal saline. BP is now 76/40 mmHg with ongoing wheeze.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Diphenhydramine 50 mg IV, repeated if the BP stays low",
          "Epinephrine infusion at about 0.1 mcg/kg/min, titrated",
          "Epinephrine 1 mg IV push, repeated every 5 minutes",
          "Methylprednisolone 125 mg IV as the main therapy",
          "Wait 15 minutes for the IM doses to take effect",
        ],
        correct: 1,
        explanation:
          "Refractory anaphylaxis, meaning persistent shock or respiratory compromise after two IM doses and fluids, calls for an IV epinephrine infusion titrated with continuous monitoring. Starting rates differ by guideline, from about 2 mcg/min in US guidance to 0.08 to 0.17 mcg/kg/min in UK guidance. A 1 mg IV push is the cardiac arrest dose and is dangerous with a pulse. Antihistamines and steroids do not treat shock.",
        keyFeature: { topic: "shock", n: 7 },
        source: "rcuk",
      },
      {
        id: "q4",
        kind: "short",
        update: "His symptoms resolve. After a period of observation he is ready to go home.",
        prompt: "What are the elements of his discharge plan?",
        required: 3,
        accept: [
          {
            id: "ai",
            text: "Prescribe two epinephrine autoinjectors, 0.3 mg or 0.5 mg at his weight, and teach their use",
            match: ["autoinjector", "auto injector", "epipen", "epinephrine pen"],
          },
          { id: "medic", text: "MedicAlert bracelet", match: ["medicalert", "medic alert", "medical alert", "bracelet"] },
          {
            id: "allergy",
            text: "Referral to an allergist for venom testing and immunotherapy",
            match: ["allergist", "allergy referral", "refer allergy", "allergy clinic", "allergy testing", "venom", "immunotherapy", "desensitization"],
          },
          { id: "plan", text: "Written anaphylaxis action plan", match: ["action plan", "written plan", "emergency plan"] },
          {
            id: "return",
            text: "Teach that symptoms can recur and to call 911 after any autoinjector use",
            match: ["biphasic", "rebound", "recur", "recurrence", "911", "return"],
          },
          {
            id: "avoid",
            text: "Sting avoidance, such as gloves, long sleeves and care near nests",
            match: ["avoid sting", "avoidance", "avoid wasp", "avoid yellow jacket", "avoid insect", "protective clothing", "long sleeve", "glove"],
          },
        ],
        explanation:
          "Every patient discharged after anaphylaxis needs an autoinjector, training, a written plan and allergist follow-up. Venom immunotherapy greatly reduces the risk of future systemic sting reactions, so referral is essential after a systemic reaction to a sting. Teach that symptoms can return and that 911 is needed after any autoinjector use.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci",
      },
    ],
    sources: [WAO, RCUK, CSACI],
  },
  {
    ...base,
    id: "anaphylaxis-02",
    alsoTopics: ["shock"],
    title: "Collapse at a seafood restaurant",
    stem:
      "A 57-year-old woman is brought by EMS after collapsing at a seafood restaurant. Her husband says she felt faint and nauseated, then slumped in her chair. She has hypertension and stable angina and takes metoprolol 50 mg twice daily and ramipril 10 mg daily. Her BP is 70 mmHg by palpation. Her glucose is 6.8 mmol/L. She is drowsy but rouses to voice. She is still wearing a turtleneck and long sleeves.",
    vitals: { pulse: "64/minute", resp: "28/minute", o2sat: "90% on 6 L/minute by nasal prongs" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What diagnoses must you consider as the cause of her shock?",
        required: 3,
        accept: [
          { id: "ana", text: "Anaphylaxis", match: ["anaphylaxis", "anaphylactic", "allergic"] },
          {
            id: "acs",
            text: "Cardiogenic shock from acute coronary syndrome",
            match: ["cardiogenic", "acs", "acute coronary", "myocardial infarction", "mi", "stemi", "heart attack"],
          },
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embolism", "pe"] },
          { id: "bb", text: "Beta blocker toxicity", match: ["beta blocker", "metoprolol", "overdose"] },
          { id: "brady", text: "Bradyarrhythmia or heart block", match: ["heart block", "bradyarrhythmia", "arrhythmia", "av block"] },
          { id: "sepsis", text: "Septic shock", match: ["sepsis", "septic"] },
          { id: "bleed", text: "Hemorrhage, such as a GI bleed", match: ["hemorrhage", "haemorrhage", "bleed", "hypovolemic"] },
          { id: "dissection", text: "Aortic dissection", match: ["dissection"] },
          { id: "tamponade", text: "Cardiac tamponade", match: ["tamponade"] },
        ],
        explanation:
          "Undifferentiated shock needs a broad differential. Anaphylaxis must be on the list for every shocked patient, especially when the skin has not yet been examined. Her normal heart rate is a trap, since beta blockade blunts the tachycardia that usually accompanies anaphylaxis.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "You remove her clothing. She has raised urticarial wheals over her chest and back and her lips are swollen. Her husband now recalls she complained of an itchy throat after a shrimp appetizer.",
        prompt: "Which of the following is the most appropriate immediate medication for her?",
        options: [
          "Diphenhydramine 50 mg IV",
          "Epinephrine 0.5 mg IM into the anterolateral thigh",
          "Epinephrine 0.5 mg subcutaneously into the deltoid",
          "Glucagon 5 mg IV over 5 minutes",
          "Norepinephrine infusion at 10 mcg/min",
        ],
        correct: 1,
        explanation:
          "IM epinephrine is first line for anaphylactic shock, even in patients taking beta blockers. Glucagon is an add-on when epinephrine fails in a beta blocked patient, not a replacement. Norepinephrine lacks the beta 2 and mast cell stabilizing effects of epinephrine.",
        keyFeature: { topic: "shock", n: 5 },
        source: "wao",
      },
      {
        id: "q3",
        kind: "short",
        update: "She has received three IM doses of epinephrine and 3 L of crystalloid. BP is 74/40 mmHg and HR 66.",
        prompt: "What drug would you add that specifically addresses her medication history, including the dose and route?",
        required: 1,
        accept: [
          {
            id: "glucagon",
            text: "Glucagon 1 to 5 mg IV over 5 minutes, then an infusion of 5 to 15 mcg/min",
            match: c(["glucagon"], ["1 mg", "1mg", "2 mg", "2mg", "3 mg", "3mg", "4 mg", "4mg", "5 mg", "5mg", "1 to 5 mg"], ["iv", "intravenous", "intravenously"]),
          },
        ],
        unacceptable: [{ text: "Atropine", match: ["atropine"] }],
        explanation:
          "Beta blockers can make anaphylaxis resistant to epinephrine, and glucagon raises cAMP without using beta receptors. US guidance gives 1 to 5 mg IV over 5 minutes, then 5 to 15 mcg/min, and UK guidance suggests 1 mg IV. Protect the airway because vomiting is common. The evidence rests on case reports.",
        keyFeature: { topic: "shock", n: 8 },
        source: "refractory",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What bedside investigations would help exclude other causes of her shock?",
        required: 2,
        accept: [
          {
            id: "pocus",
            text: "Point of care ultrasound of the heart, IVC, lungs and abdomen",
            match: ["pocus", "ultrasound", "echo", "echocardiogram", "rush"],
          },
          { id: "ecg", text: "12 lead ECG", match: ["ecg", "ekg", "12 lead", "electrocardiogram"] },
          { id: "cxr", text: "Portable chest X-ray", match: ["chest x ray", "chest xray", "cxr", "chest radiograph"] },
          { id: "gas", text: "Venous blood gas with lactate and hemoglobin", match: ["blood gas", "vbg", "lactate", "hemoglobin", "haemoglobin"] },
        ],
        unacceptable: [{ text: "CT imaging while she is unstable", match: ["ct", "computed tomography"] }],
        explanation:
          "Bedside ultrasound quickly shows a hyperdynamic underfilled heart in distributive shock, and screens for tamponade, right ventricular strain, poor LV function and free fluid. An ECG looks for ischemia and conduction block in a beta blocked patient with angina. Unstable patients should not leave the resuscitation room for CT.",
        keyFeature: { topic: "shock", n: 6 },
        source: "wao",
      },
    ],
    sources: [WAO, REFRACTORY],
  },
  {
    ...base,
    id: "anaphylaxis-03",
    title: "Vomiting toddler after a snack",
    stem:
      "A 3-year-old boy is brought in by his father 20 minutes after eating a cracker with peanut butter for the first time at daycare. He has vomited three times and is now pale, quiet and clingy. Daycare staff noticed a few hives around his mouth that have since faded. He has eczema. His capillary refill is 3 seconds and his lungs are clear.",
    vitals: { temperature: "37.1°C", pulse: "162/minute", resp: "36/minute", bp: "68/40 mmHg", o2sat: "95% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [{ id: "ana", text: "Anaphylaxis to peanut", match: ["anaphylaxis", "anaphylactic"] }],
        unacceptable: [
          { text: "Gastroenteritis", match: ["gastroenteritis", "food poisoning", "viral"] },
          { text: "Mild allergic reaction or urticaria only", match: ["mild allergic", "urticaria only", "hive only"] },
        ],
        explanation:
          "Anaphylaxis is likely when a known or probable allergen exposure is followed within minutes to hours by involvement of two or more systems. Here there are skin signs, repeated vomiting and hypotension for age. Faded hives and clear lungs do not exclude it, and vomiting after a new food is a common presentation in young children.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "cps",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the most appropriate medication now, including the drug, dose and route?",
        required: 1,
        accept: [
          {
            id: "epi",
            text: "Epinephrine 0.01 mg/kg IM, about 0.15 to 0.17 mg, into the anterolateral thigh",
            match: [
              ...c(EPI, ["0.17 mg", "0.17mg", "0.15 mg", "0.15mg", "0.01 mg/kg", "170 mcg", "150 mcg"], IM),
              "epipen jr",
              "epinephrine autoinjector 0.15",
            ],
          },
        ],
        unacceptable: [
          {
            text: "A tenfold epinephrine dose or an IV bolus",
            match: ["1.7 mg", "1.5 mg", "1.7mg", "1.5mg", ...EPI_IV_BOLUS],
            dangerous: true,
          },
          { text: "Ondansetron or an antihistamine instead of epinephrine", match: ["ondansetron", "diphenhydramine", "cetirizine"] },
        ],
        explanation:
          "The paediatric IM dose is 0.01 mg/kg of the 1 mg/mL solution, maximum 0.5 mg, in the anterolateral thigh. For 17 kg that is 0.17 mg, and a 0.15 mg autoinjector is an acceptable alternative. Tenfold errors in drawing up paediatric doses are a known and dangerous hazard.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "cps",
      },
      {
        id: "q3",
        kind: "single",
        update: "He responds well and is observed. You are preparing his discharge.",
        prompt: "Which of the following epinephrine autoinjector prescriptions is most appropriate for him?",
        options: [
          "One 0.15 mg autoinjector",
          "One 0.3 mg autoinjector",
          "Two 0.15 mg autoinjectors",
          "Two 0.3 mg autoinjectors",
          "No autoinjector prescription",
        ],
        correct: 2,
        explanation:
          "At 17 kg he needs the 0.15 mg device. Canadian product monographs label it for 15 to 30 kg, and the CPS and CSACI advise moving to 0.3 mg at about 25 kg. Many guidelines advise carrying two devices because some reactions need a second dose before EMS arrives. Gastrointestinal symptoms with hypotension are anaphylaxis and still need self-injectable epinephrine.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci-eai",
      },
    ],
    sources: [CPS, CSACI_EAI],
  },
  {
    ...base,
    id: "anaphylaxis-04",
    alsoTopics: ["cqi"],
    title: "Call from the CT suite",
    stem:
      "A 71-year-old man is having a contrast enhanced CT of the abdomen to investigate weight loss. Two minutes after the iodinated contrast injection he says he feels strange and his voice becomes hoarse. The radiology nurse calls you. He is pale and sweaty. There is no rash and no wheeze. He takes only atorvastatin.",
    vitals: { pulse: "126/minute", resp: "24/minute", bp: "72/38 mmHg", o2sat: "93% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Anaphylaxis to iodinated contrast",
          "Contrast extravasation injury",
          "Contrast induced nephropathy",
          "Massive pulmonary embolism",
          "Vasovagal reaction to the injection",
        ],
        correct: 0,
        explanation:
          "Sudden hypotension with laryngeal symptoms minutes after contrast is anaphylaxis until proven otherwise. Skin signs are absent in a meaningful minority of cases, especially when hypotension dominates. Nephropathy is delayed and extravasation causes local swelling only.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "acr",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What features of this presentation argue against a vasovagal reaction?",
        required: 2,
        accept: [
          {
            id: "tachy",
            text: "Tachycardia rather than bradycardia",
            match: ["tachycardia", "tachycardic", "heart rate 126", "hr 126", "fast heart"],
          },
          {
            id: "larynx",
            text: "Hoarse voice suggesting laryngeal involvement",
            match: ["hoarse", "hoarseness", "laryngeal", "voice", "stridor", "throat"],
          },
          {
            id: "hypox",
            text: "Low oxygen saturation",
            match: ["hypoxia", "hypoxemia", "spo2", "saturation", "desaturation"],
          },
        ],
        explanation:
          "A vasovagal reaction causes hypotension with bradycardia, pallor and nausea, and it improves quickly when the patient lies flat. It does not cause hoarseness or hypoxemia. Tachycardia with airway symptoms points to anaphylaxis and needs IM epinephrine.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "acr",
      },
      {
        id: "q3",
        kind: "short",
        update: "He receives IM epinephrine and IV fluids and recovers fully. He will need more imaging to investigate his weight loss.",
        prompt: "What measures reduce the risk of harm with his future imaging?",
        required: 2,
        accept: [
          {
            id: "doc",
            text: "Document the reaction and the agent in his chart allergy list and the radiology system",
            match: ["document", "chart", "allergy list", "flag", "label"],
          },
          {
            id: "alt",
            text: "Use an alternative study without iodinated contrast, such as MRI, ultrasound or non-contrast CT",
            match: ["mri", "ultrasound", "non contrast", "without contrast", "avoid contrast", "avoid iodinated", "no contrast", "alternative imaging", "alternative study"],
          },
          {
            id: "agent",
            text: "If contrast is essential, consult radiology and use a different contrast agent",
            match: ["different contrast", "alternate contrast", "alternative contrast", "change agent", "different agent", "radiologist"],
          },
          {
            id: "premed",
            text: "Premedication with corticosteroid and antihistamine per local protocol",
            match: ["premedication", "premedicate", "pre medicate", "prednisone", "steroid"],
          },
          { id: "allergist", text: "Referral to an allergist", match: ["allergist", "allergy referral", "allergy testing"] },
          { id: "medic", text: "MedicAlert identification", match: ["medicalert", "medic alert", "medical alert"] },
        ],
        explanation:
          "Clear allergy documentation that follows the patient across systems is a core medication safety practice. Avoiding the agent or switching to a different contrast agent is the most effective prevention. Premedication may be used but does not reliably prevent a repeat severe reaction.",
        keyFeature: { topic: "cqi", n: 5 },
        source: "acr",
      },
    ],
    sources: [ACR],
  },
  {
    ...base,
    id: "anaphylaxis-05",
    alsoTopics: ["airway"],
    title: "Swelling after a curry",
    stem:
      "A 36-year-old woman with a known cashew allergy arrives by private car 25 minutes after eating curry at a restaurant. She used her autoinjector in the car. She has marked lip and tongue swelling, a muffled voice and is drooling. She is sitting forward. She received a second IM dose of epinephrine on arrival and an epinephrine infusion is being prepared.",
    vitals: { pulse: "118/minute", resp: "26/minute", bp: "104/66 mmHg", o2sat: "94% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What findings in this patient suggest she may soon lose her airway?",
        required: 3,
        accept: [
          { id: "tongue", text: "Tongue swelling", match: ["tongue"] },
          { id: "voice", text: "Muffled voice", match: ["muffled", "voice", "dysphonia", "hoarse"] },
          { id: "drool", text: "Drooling or inability to handle secretions", match: ["drool", "drooling", "secretion", "swallow"] },
          { id: "posture", text: "Sitting forward to maintain her airway", match: ["sitting forward", "tripod", "posture", "lean forward", "leaning forward"] },
          { id: "sat", text: "Falling oxygen saturation", match: ["spo2", "hypoxia", "hypoxemia", "saturation", "desaturation"] },
          { id: "prog", text: "Progression despite two doses of epinephrine", match: ["progress", "progression", "progressing", "worsening", "despite epinephrine"] },
        ],
        explanation:
          "Tongue swelling, voice change, drooling and a forward sitting posture show the upper airway is narrowing. Progression despite epinephrine means swelling may soon make intubation impossible. These signs call for early airway planning while she can still maintain her own airway.",
        keyFeature: { topic: "airway", n: 2 },
        source: "cafg",
      },
      {
        id: "q2",
        kind: "short",
        update: "Twenty minutes later she develops inspiratory stridor and her SpO2 falls to 89% despite the infusion. You decide she needs a definitive airway.",
        prompt: "What preparations would you make before attempting intubation?",
        required: 3,
        accept: [
          {
            id: "fona",
            text: "Mark the cricothyroid membrane and open a scalpel front of neck access kit, a double setup",
            match: ["cricothyrotomy", "cricothyroidotomy", "front of neck", "fona", "scalpel", "landmark", "double setup", "surgical airway", "cricothyroid"],
          },
          {
            id: "help",
            text: "Call the most experienced operator, such as anesthesia or ENT",
            match: ["anesthesia", "anaesthesia", "anesthetist", "ent", "otolaryngology", "experienced", "call for help"],
          },
          {
            id: "tubes",
            text: "Smaller endotracheal tubes in a range of sizes",
            match: ["smaller tube", "smaller ett", "small tube", "range of tube", "tube size", "smaller endotracheal"],
          },
          { id: "vl", text: "Video laryngoscope", match: ["video", "glidescope", "mcgrath", "hyperangulated"] },
          { id: "scope", text: "Flexible bronchoscope", match: ["bronchoscope", "fiberoptic", "fibreoptic", "flexible scope"] },
          {
            id: "preox",
            text: "Preoxygenation and apneic oxygenation",
            match: ["preoxygenation", "preoxygenate", "pre oxygenate", "apneic oxygenation", "nasal cannula", "high flow"],
          },
          { id: "topical", text: "Topical airway anesthesia with lidocaine", match: ["lidocaine", "topical", "topicalization"] },
        ],
        explanation:
          "Upper airway angioedema is a predicted difficult airway. The Canadian Airway Focus Group advises a clear plan with the most skilled operator, backup devices and a front of neck access kit open and ready. Swollen tissue often needs a smaller tube.",
        keyFeature: { topic: "airway", n: 3 },
        source: "cafg",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to securing her airway?",
        options: [
          "Awake flexible bronchoscopic intubation, sitting up",
          "Blind nasal intubation, sitting up",
          "Insertion of a second generation supraglottic airway",
          "Observation with repeat IM epinephrine every 5 minutes",
          "Rapid sequence intubation with rocuronium, supine",
        ],
        correct: 0,
        explanation:
          "The awake intubation is done sitting up, with topical anesthesia and a scalpel cricothyrotomy setup ready. When the upper airway is swelling and the patient is still oxygenating, an awake approach preserves her own breathing and tone. Paralysis risks a cannot intubate cannot oxygenate situation because swollen tissue collapses. A supraglottic device sits above the obstruction and will not bypass it.",
        keyFeature: { topic: "airway", n: 4 },
        source: "cafg",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "During the attempt she becomes agitated, the scope view is lost in swollen tissue and her SpO2 falls to 78%. Two person bag mask ventilation fails.",
        prompt: "What is the specific next step?",
        required: 1,
        accept: [
          {
            id: "cric",
            text: "Scalpel bougie tube cricothyrotomy",
            match: ["cricothyrotomy", "cricothyroidotomy", "surgical airway", "front of neck", "scalpel", "fona", "cric"],
          },
        ],
        unacceptable: [
          { text: "Supraglottic airway", match: ["supraglottic", "lma", "igel", "i gel", "laryngeal mask"] },
          { text: "Needle cricothyroidotomy in an adult", match: ["needle"] },
          { text: "Another intubation attempt", match: ["another attempt", "repeat intubation", "try again"] },
        ],
        explanation:
          "This is a cannot intubate cannot oxygenate situation and needs immediate front of neck access. The Canadian Airway Focus Group recommends the scalpel bougie tube technique in adults. Further attempts from above waste time and a supraglottic device cannot bypass the swollen larynx.",
        keyFeature: { topic: "airway", n: 1 },
        source: "cafg",
      },
    ],
    sources: [CAFG],
  },
  {
    ...base,
    id: "anaphylaxis-06",
    alsoTopics: ["airway"],
    title: "Lip swelling on waking",
    stem:
      "A 68-year-old man presents at 0500 with swelling of his lower lip and tongue that he noticed on waking. It has slowly increased over 3 hours. He has no itch, no rash, no abdominal pain and no wheeze. He has hypertension and type 2 diabetes. He has taken ramipril 10 mg daily for 4 years and metformin. He speaks in full sentences with a slightly thick voice. There is no stridor.",
    vitals: { pulse: "88/minute", resp: "18/minute", bp: "158/92 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis, including the mechanism?",
        required: 1,
        accept: [
          {
            id: "acei",
            text: "ACE inhibitor induced angioedema, which is bradykinin mediated",
            match: ["ace inhibitor", "acei", "ace i", "ramipril", "bradykinin"],
          },
        ],
        unacceptable: [{ text: "Food allergy or allergic reaction", match: ["food allergy", "allergic reaction"] }],
        explanation:
          "ACE inhibitors block bradykinin breakdown, so bradykinin accumulates and causes nonpitting swelling of the lips, tongue and airway. It can start years after the drug is begun. The absence of itch and hives points away from a histamine mediated reaction.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "angio",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What features favour this diagnosis over a histamine mediated allergic reaction?",
        required: 2,
        accept: [
          {
            id: "noskin",
            text: "No urticaria or itch",
            match: ["no urticaria", "no hive", "no itch", "no pruritus", "no rash", "absence urticaria", "absent urticaria", "without urticaria"],
          },
          { id: "drug", text: "Taking an ACE inhibitor", match: ["ramipril", "ace inhibitor", "acei"] },
          { id: "slow", text: "Slow onset over hours", match: ["slow", "gradual", "hour"] },
          { id: "bp", text: "No hypotension", match: ["no hypotension", "normotensive", "hypertensive", "normal blood pressure"] },
          { id: "nowheeze", text: "No wheeze or bronchospasm", match: ["no wheeze", "no bronchospasm"] },
          { id: "trigger", text: "No allergen exposure", match: ["no allergen", "no exposure", "no trigger"] },
        ],
        explanation:
          "Bradykinin angioedema lacks urticaria, pruritus, bronchospasm and hypotension, and it builds over hours. It responds poorly to epinephrine, antihistamines and steroids. Recognizing it avoids false reassurance when those drugs fail.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "angio",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What are the key management steps for this patient?",
        required: 2,
        accept: [
          {
            id: "stop",
            text: "Stop ramipril permanently and record it as an adverse reaction",
            match: ["stop ramipril", "discontinue ramipril", "hold ramipril", "stop ace", "discontinue ace", "stop acei", "no ace inhibitor"],
          },
          {
            id: "airway",
            text: "Monitor closely with nasopharyngoscopy and a difficult airway plan for early intubation if it progresses",
            match: ["nasopharyngoscopy", "nasolaryngoscopy", "laryngoscopy", "scope", "airway plan", "difficult airway", "intubation", "monitor", "observe"],
          },
          {
            id: "specific",
            text: "Consider icatibant, C1 esterase inhibitor or fresh frozen plasma for severe progression",
            match: ["icatibant", "c1 esterase", "c1 inhibitor", "fresh frozen plasma", "ffp", "plasma"],
          },
          {
            id: "alt",
            text: "Switch to another antihypertensive class, such as a calcium channel blocker",
            match: ["amlodipine", "calcium channel", "alternative antihypertensive", "another antihypertensive", "different antihypertensive"],
          },
        ],
        unacceptable: [
          { text: "Continue ramipril or switch to another ACE inhibitor", match: ["continue ramipril", "lisinopril", "perindopril", "enalapril"] },
        ],
        explanation:
          "The key steps are to stop the ACE inhibitor for life and to watch the airway closely, with visualization and a plan for early awake intubation if the tongue or larynx is involved. Icatibant, C1 inhibitor and FFP are sometimes tried in severe cases, but two randomized trials of icatibant showed no benefit and the others rest on case series. Epinephrine, antihistamines and steroids usually fail, yet a trial is reasonable while a histamine cause cannot be excluded. Another ACE inhibitor must never be substituted.",
        keyFeature: { topic: "airway", n: 2 },
        source: "angio",
      },
    ],
    sources: [ANGIO],
  },
  {
    ...base,
    id: "anaphylaxis-07",
    title: "Collapse at hockey practice",
    stem:
      "A 16-year-old boy collapsed in the dressing room during hockey practice, 45 minutes after eating a large pasta dinner. Teammates saw hives and heard wheezing. The trainer gave him a teammate's autoinjector. He arrives by EMS 30 minutes later with fading hives and clear lungs. He has had two milder episodes during games this season, both after meals. He took ibuprofen for a sore wrist before practice.",
    vitals: { pulse: "98/minute", bp: "118/70 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What cofactors can lower the threshold for this kind of reaction?",
        required: 3,
        accept: [
          { id: "exercise", text: "Exercise", match: ["exercise", "exertion", "physical activity"] },
          { id: "nsaid", text: "NSAIDs or ASA", match: ["nsaid", "ibuprofen", "asa", "aspirin", "anti inflammatory"] },
          { id: "alcohol", text: "Alcohol", match: ["alcohol"] },
          { id: "infection", text: "Intercurrent infection or fever", match: ["infection", "illness", "fever"] },
          { id: "stress", text: "Sleep deprivation or emotional stress", match: ["stress", "sleep"] },
          { id: "heat", text: "Heat exposure", match: ["heat", "hot"] },
          { id: "menses", text: "Menstruation", match: ["menses", "menstruation", "period"] },
        ],
        explanation:
          "Food dependent exercise induced anaphylaxis occurs when a food, often wheat, is followed by exercise. Cofactors such as NSAIDs, alcohol, infection and heat lower the amount of allergen needed to trigger a reaction. Recognizing the cofactor pattern explains episodes that seem random.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the elements of your discharge counselling?",
        required: 4,
        accept: [
          {
            id: "ai",
            text: "Carry two epinephrine autoinjectors of the right dose for his weight at all times, including at the rink",
            match: ["autoinjector", "auto injector", "epipen", "carry epinephrine"],
          },
          { id: "nsaid", text: "Avoid NSAIDs before exercise", match: ["avoid nsaid", "no nsaid", "avoid ibuprofen", "no ibuprofen", "avoid anti inflammatory", "nsaid"] },
          {
            id: "meal",
            text: "Avoid eating for about 4 to 6 hours before exercise",
            match: ["avoid eating", "no eating", "no food", "not eat", "don t eat", "dont eat", "meal before", "food before", "eat before", "hour after eating", "empty stomach", "fasting"],
          },
          {
            id: "stop",
            text: "Stop activity at the first symptom and use the autoinjector if symptoms are systemic",
            match: ["stop exercising", "stop activity", "stop playing", "first symptom"],
          },
          {
            id: "team",
            text: "Tell the coach, trainer and teammates and never exercise alone",
            match: ["coach", "trainer", "teammate", "buddy", "never alone", "not alone", "never exercise alone", "alone"],
          },
          { id: "medic", text: "MedicAlert identification", match: ["medicalert", "medic alert", "medical alert"] },
          {
            id: "allergist",
            text: "Allergist referral to confirm the food trigger",
            match: ["allergist", "allergy referral", "allergy testing", "allergy clinic", "gliadin"],
          },
          { id: "911", text: "Call 911 after using the autoinjector", match: ["911", "ambulance"] },
        ],
        explanation:
          "He needs his own autoinjectors, a plan for the rink and people around him who can recognize and treat a reaction. Separating food and NSAIDs from exercise prevents most episodes. Allergist referral confirms the trigger, which is often wheat.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci",
      },
      {
        id: "q3",
        kind: "single",
        update: "He asks when he should use his autoinjector.",
        prompt: "Which of the following is the best advice about when he should use his autoinjector?",
        options: [
          "At the first systemic symptom, then call 911",
          "Only after calling 911 and getting dispatcher instructions",
          "Only if a salbutamol inhaler does not relieve his wheeze",
          "Only if he loses consciousness",
          "Take cetirizine first, then wait 20 minutes",
        ],
        correct: 0,
        explanation:
          "Delayed epinephrine is the main modifiable risk factor for fatal anaphylaxis. Patients should inject at the first sign of a systemic reaction and then call 911. Signs of a systemic reaction include hives with breathing trouble, throat tightness or faintness. Antihistamines and inhalers must never delay epinephrine.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci",
      },
    ],
    sources: [WAO, CSACI],
  },
  {
    ...base,
    id: "anaphylaxis-08",
    title: "Ready to go home after a granola bar",
    stem:
      "A 38-year-old woman ate a granola bar containing hazelnuts and developed hives, lip swelling and wheeze. Paramedics gave epinephrine 0.5 mg IM and her symptoms resolved. She has mild asthma. She arrived in the ED 1 hour ago. Her lungs are clear.",
    vitals: { pulse: "92/minute", bp: "124/78 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following features, if present, would most support extending her observation period?",
        options: [
          "A clearly identified food trigger",
          "A history of seasonal allergic rhinitis",
          "A normal serum tryptase level after the reaction",
          "Age over 30 years at the time of the reaction",
          "Female sex of the patient",
          "Hypotension or airway compromise during the initial reaction",
          "Need for more than one dose of epinephrine",
          "Treatment with cetirizine before arrival",
        ],
        select: 2,
        correct: [6, 5],
        explanation:
          "Severe initial reactions and the need for more than one epinephrine dose are the best established predictors of a biphasic reaction. The 2020 practice parameter suggests extended observation for these patients, often 6 hours or more. An unknown trigger is a weaker risk factor, so a clearly identified trigger does not support a longer stay. Antihistamine use does not change the risk.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "jtf",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "Five hours after the first reaction, while awaiting discharge, she develops new hives and wheeze and a BP of 86/52 mmHg without any new exposure.",
        prompt: "What is your immediate treatment, including the drug, dose and route?",
        required: 1,
        accept: [
          { id: "epi", text: "Epinephrine 0.5 mg IM into the anterolateral thigh", match: c(EPI, EPI_05, IM) },
        ],
        unacceptable: [
          { text: "Epinephrine as an IV bolus", match: EPI_IV_BOLUS, dangerous: true },
          { text: "Antihistamine or steroid alone", match: ["diphenhydramine", "cetirizine", "methylprednisolone", "prednisone"] },
        ],
        explanation:
          "A biphasic reaction is treated exactly like the first reaction, with IM epinephrine 0.5 mg in the thigh. It can occur hours later with no new exposure. Antihistamines and steroids do not reverse shock or bronchospasm.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What additional treatments for this recurrence would you give besides epinephrine?",
        required: 2,
        accept: [
          { id: "salb", text: "Inhaled salbutamol for wheeze", match: ["salbutamol", "ventolin", "albuterol", "bronchodilator", "beta agonist"] },
          { id: "fluid", text: "IV crystalloid bolus", match: ["bolus", "crystalloid", "fluid", "normal saline", "ringer"] },
          { id: "o2", text: "Supplemental oxygen", match: ["oxygen", "o2"] },
          { id: "position", text: "Supine positioning with legs raised", match: ["supine", "leg raised", "leg elevated", "lie flat"] },
          { id: "h1", text: "An H1 antihistamine for skin symptoms as an adjunct", match: ["antihistamine", "cetirizine", "diphenhydramine", "h1"] },
          { id: "steroid", text: "A corticosteroid as an adjunct, given her asthma", match: ["steroid", "corticosteroid", "prednisone", "methylprednisolone", "dexamethasone"] },
        ],
        explanation:
          "Fluids and oxygen support the circulation and gas exchange while epinephrine works. Inhaled salbutamol helps residual bronchospasm, especially in a patient with asthma. Antihistamines and steroids are adjuncts only and must never delay epinephrine.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "rcuk",
      },
    ],
    sources: [JTF, WAO, RCUK],
  },
  {
    ...base,
    id: "anaphylaxis-09",
    alsoTopics: ["shock"],
    title: "Itching during an antibiotic infusion",
    stem:
      "A 29-year-old woman at 31 weeks gestation is receiving ceftriaxone 1 g IV for pyelonephritis. Five minutes into the infusion she reports itching and dizziness. She is flushed with generalized urticaria. The fetal heart rate by doppler is 100 bpm. The infusion has been stopped.",
    vitals: { pulse: "132/minute", resp: "28/minute", bp: "74/40 mmHg", o2sat: "93% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What medication do you give first, including the drug, dose and route?",
        required: 1,
        accept: [
          { id: "epi", text: "Epinephrine 0.5 mg IM into the anterolateral thigh", match: c(EPI, EPI_05, IM) },
        ],
        unacceptable: [
          { text: "Epinephrine as an IV bolus", match: EPI_IV_BOLUS, dangerous: true },
          { text: "Phenylephrine or an antihistamine first", match: ["phenylephrine", "diphenhydramine"] },
        ],
        explanation:
          "Pregnancy does not change the first drug or its dose. Maternal hypotension is what endangers the fetus, and epinephrine is the drug that reverses it. Withholding epinephrine out of concern for uterine blood flow is a recognized error.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What interventions are specific to her pregnancy?",
        required: 2,
        accept: [
          {
            id: "lud",
            text: "Left lateral positioning or manual left uterine displacement",
            match: ["left lateral", "uterine displacement", "displace uterus", "left tilt", "tilt", "left side"],
          },
          {
            id: "fetal",
            text: "Continuous fetal heart rate monitoring",
            match: ["fetal monitoring", "fetal heart", "ctg", "cardiotocography", "nst", "electronic fetal"],
          },
          { id: "ob", text: "Urgent obstetrics consultation", match: ["obstetric", "obstetrics", "obstetrician", "ob"] },
          {
            id: "neo",
            text: "Alert the neonatal team and prepare for possible emergency delivery",
            match: ["neonatal", "nicu", "delivery", "caesarean", "cesarean"],
          },
        ],
        explanation:
          "After 20 weeks the gravid uterus compresses the aorta and IVC when she lies supine, which worsens hypotension. Left uterine displacement restores venous return. Fetal bradycardia reflects poor uteroplacental perfusion, so obstetrics and the neonatal team must be involved early.",
        keyFeature: { topic: "shock", n: 1 },
        source: "aha-sc",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What causes of shock specific to late pregnancy would you consider if she does not respond?",
        required: 2,
        accept: [
          { id: "abruption", text: "Placental abruption", match: ["abruption", "abruptio"] },
          { id: "afe", text: "Amniotic fluid embolism", match: ["amniotic"] },
          { id: "ppcm", text: "Peripartum cardiomyopathy", match: ["peripartum", "cardiomyopathy"] },
          { id: "rupture", text: "Uterine rupture", match: ["uterine rupture", "rupture"] },
          { id: "cav", text: "Aortocaval compression", match: ["aortocaval", "ivc compression", "supine hypotension"] },
        ],
        explanation:
          "Pregnancy adds its own causes of shock. Abruption can hide blood behind the placenta, and amniotic fluid embolism causes sudden collapse with hypoxia and coagulopathy. Always reassess the diagnosis when a shocked pregnant patient does not respond as expected.",
        keyFeature: { topic: "shock", n: 1 },
        source: "aha-sc",
      },
    ],
    sources: [WAO, AHA_SC],
  },
  {
    ...base,
    id: "anaphylaxis-10",
    alsoTopics: ["asthma-copd"],
    title: "Wheezing child from school",
    stem:
      "A 9-year-old girl is brought from school by EMS. She ate a sesame snack at lunch and developed hives, cough and wheeze. Her teacher gave her a 0.15 mg autoinjector 20 minutes ago. She has asthma treated with inhaled fluticasone. She has diffuse wheeze with intercostal retractions and can say only a few words.",
    vitals: { pulse: "138/minute", resp: "36/minute", bp: "88/54 mmHg", o2sat: "90% on room air", weight: "31 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to give her now?",
        options: [
          "Diphenhydramine 30 mg IV over 5 minutes",
          "Epinephrine 0.15 mg IM into the anterolateral thigh",
          "Epinephrine 0.3 mg IM into the anterolateral thigh",
          "Epinephrine 3 mg IM into the anterolateral thigh",
          "Epinephrine 0.3 mg IV push through a peripheral line",
        ],
        correct: 2,
        explanation:
          "She has ongoing anaphylaxis after one dose, so a repeat IM dose is due 5 to 15 minutes after the first. At 0.01 mg/kg her dose is 0.3 mg. A 3 mg dose is a tenfold error and an IV push is dangerous.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "cps",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What adjunct treatments would you give for her respiratory symptoms?",
        required: 2,
        accept: [
          {
            id: "salb",
            text: "Salbutamol by MDI with spacer or nebulizer",
            match: ["salbutamol", "ventolin", "albuterol", "bronchodilator", "beta agonist"],
          },
          { id: "o2", text: "Oxygen to keep SpO2 at or above 92%", match: ["oxygen", "o2"] },
          {
            id: "steroid",
            text: "Systemic corticosteroid such as dexamethasone",
            match: ["dexamethasone", "prednisone", "prednisolone", "methylprednisolone", "steroid", "corticosteroid"],
          },
          { id: "ipra", text: "Ipratropium", match: ["ipratropium", "atrovent"] },
          { id: "mag", text: "IV magnesium sulfate if bronchospasm persists", match: ["magnesium"] },
        ],
        explanation:
          "Asthma is a major risk factor for fatal food anaphylaxis, and bronchospasm may persist after epinephrine. Treat it as a severe asthma exacerbation with salbutamol, oxygen and a systemic steroid. These are added to epinephrine and never replace it.",
        keyFeature: { topic: "asthma-copd", n: 5 },
        source: "cps-asthma",
      },
      {
        id: "q3",
        kind: "short",
        update: "She recovers fully and will be discharged after observation.",
        prompt: "What are the elements of her discharge plan?",
        required: 3,
        accept: [
          {
            id: "dose",
            text: "Two epinephrine 0.3 mg autoinjectors, since she now weighs over 30 kg",
            match: [...c(["autoinjector", "auto injector", "epipen"], ["0.3 mg", "0.3mg", "300 mcg"]), "two autoinjector", "2 autoinjector"],
          },
          {
            id: "school",
            text: "Updated school anaphylaxis emergency plan with trained staff",
            match: ["school", "action plan", "emergency plan", "teacher"],
          },
          {
            id: "asthma",
            text: "Optimize asthma control with follow-up",
            match: ["asthma control", "asthma follow", "controller", "inhaler", "asthma"],
          },
          { id: "allergist", text: "Allergist referral", match: ["allergist", "allergy referral", "allergy clinic", "allergy testing"] },
          { id: "avoid", text: "Strict sesame avoidance and label reading", match: ["avoid sesame", "no sesame", "sesame free", "sesame", "label"] },
          { id: "medic", text: "MedicAlert identification", match: ["medicalert", "medic alert", "medical alert"] },
        ],
        explanation:
          "At 31 kg she has outgrown the 0.15 mg device, which the CPS and CSACI advise replacing at about 25 kg, and should carry 0.3 mg autoinjectors. Ontario's Sabrina's Law requires school boards to have anaphylaxis policies and individual plans, and her plan needs updating. Poor asthma control increases the risk of a fatal reaction.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci",
      },
    ],
    sources: [CPS, CPS_ASTHMA, CSACI],
  },
  {
    ...base,
    id: "anaphylaxis-11",
    alsoTopics: ["cqi"],
    title: "Sent from a walk-in clinic",
    stem:
      "A 50-year-old man walks in 40 minutes after eating mussels. At a walk-in clinic he was given diphenhydramine 50 mg PO and told to come to the ED if he did not improve. He now has generalized hives, throat tightness and crampy abdominal pain.",
    vitals: { pulse: "118/minute", resp: "22/minute", bp: "88/50 mmHg", o2sat: "96% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: [
          "Diphenhydramine 50 mg IV and observe for 1 hour",
          "Epinephrine 0.5 mg IM into the anterolateral thigh",
          "Epinephrine 1 mg IV push through a peripheral line",
          "Prednisone 50 mg PO and observe for 2 hours",
          "Salbutamol 5 mg nebulized for throat tightness",
        ],
        correct: 1,
        explanation:
          "He has skin, airway, gastrointestinal and circulatory involvement and needs IM epinephrine now. The antihistamine he already received does not treat airway swelling or shock. The IV push option is the cardiac arrest dose.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "As you step away you see a new nurse drawing up 1 mL of the 1 mg/mL epinephrine ampoule to give as an IV push. You stop it in time and the correct dose is given IM. No harm occurs.",
        prompt: "What system measures could reduce the risk of this error happening again?",
        required: 2,
        accept: [
          {
            id: "report",
            text: "Report the near miss through the incident reporting system for review",
            match: ["incident report", "safety report", "report near miss", "report", "root cause", "incident review"],
          },
          {
            id: "kit",
            text: "A standardized anaphylaxis kit with clearly labelled IM doses or prefilled syringes",
            match: ["kit", "prefilled", "pre filled", "labelled", "labeled", "autoinjector in ed"],
          },
          {
            id: "protocol",
            text: "An anaphylaxis order set or protocol stating dose and route",
            match: ["order set", "protocol", "algorithm", "standardized order", "preprinted"],
          },
          {
            id: "check",
            text: "Independent double check for high alert medications",
            match: ["double check", "independent check", "high alert"],
          },
          {
            id: "educ",
            text: "Staff education and simulation on anaphylaxis",
            match: ["education", "training", "simulation", "teaching"],
          },
          {
            id: "loop",
            text: "Closed loop communication with the dose and route stated aloud",
            match: ["closed loop", "read back", "repeat back"],
          },
        ],
        unacceptable: [{ text: "Blame or discipline the nurse", match: ["discipline", "blame", "fire the nurse", "punish"] }],
        explanation:
          "Near misses are reported and analyzed to find system causes, not to blame individuals. Route errors with epinephrine are common because the same ampoule serves both IM and arrest doses. Standardized kits, order sets, double checks and training make the correct route the easy default.",
        keyFeature: { topic: "cqi", n: 1 },
        source: "ciaf",
      },
      {
        id: "q3",
        kind: "short",
        update: "He responds to treatment. At discharge he says next time he will just take diphenhydramine as he did today.",
        prompt: "What counselling points about antihistamines in anaphylaxis would you give him?",
        required: 2,
        accept: [
          {
            id: "notreat",
            text: "Antihistamines do not treat airway swelling, breathing trouble or low blood pressure",
            match: ["not treat", "do not treat", "don t treat", "dont treat", "doesn t treat", "not work", "airway", "hypotension", "blood pressure", "shock", "breathing"],
          },
          {
            id: "delay",
            text: "They must never delay epinephrine, which is the first treatment",
            match: ["never delay", "not delay", "don t delay", "dont delay", "no delay", "delay", "epinephrine first", "autoinjector first", "first line", "use epinephrine", "use autoinjector", "use the autoinjector"],
          },
          { id: "slow", text: "Their onset is too slow for a severe reaction", match: ["slow", "onset"] },
          { id: "skin", text: "They only relieve itch and hives", match: ["skin", "itch", "hive", "cutaneous"] },
          { id: "sedation", text: "Sedating antihistamines can mask worsening symptoms", match: ["sedation", "drowsy", "drowsiness", "mask"] },
        ],
        explanation:
          "Antihistamines only relieve skin symptoms and act too slowly to treat life threatening features. Relying on them is a common reason epinephrine is delayed. Patients should use the autoinjector at the first systemic symptom and call 911.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "wao",
      },
    ],
    sources: [WAO, CIAF],
  },
  {
    ...base,
    id: "anaphylaxis-12",
    alsoTopics: ["shock", "infectious-diseases"],
    title: "Deterioration after the first antibiotic dose",
    stem:
      "An 81-year-old man from a long term care home has community acquired pneumonia. On arrival he had HR 104, BP 112/64 mmHg, RR 24, SpO2 91% on room air and temperature 38.6°C. Ten minutes after piperacillin-tazobactam is started he becomes restless. There is new diffuse wheeze and blotchy redness on his neck and chest. A colleague suggests this is worsening septic shock and orders another fluid bolus.",
    vitals: { pulse: "134/minute", resp: "32/minute", bp: "72/38 mmHg", o2sat: "84% on 4 L/minute" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely cause of this deterioration?",
        required: 1,
        accept: [
          {
            id: "ana",
            text: "Anaphylaxis to piperacillin-tazobactam",
            match: ["anaphylaxis", "anaphylactic", "allergic", "drug reaction", "hypersensitivity"],
          },
        ],
        unacceptable: [{ text: "Worsening septic shock", match: ["worsening septic shock", "worsening sepsis", "progression of sepsis", "sepsis progression"] }],
        explanation:
          "Abrupt shock with new wheeze and flushing within minutes of a new drug is anaphylaxis until proven otherwise. Anchoring on sepsis is a classic error in older patients who are already unwell. The timing is the strongest clue.",
        keyFeature: { topic: "anaphylaxis", n: 1 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are your immediate actions, including the dose and route for any drug?",
        required: 2,
        accept: [
          {
            id: "stop",
            text: "Stop the piperacillin-tazobactam infusion",
            match: ["stop infusion", "stop piperacillin", "stop antibiotic", "stop pip", "stop tazocin", "discontinue piperacillin", "discontinue antibiotic", "discontinue infusion", "hold antibiotic", "remove trigger", "stop trigger"],
          },
          { id: "epi", text: "Epinephrine 0.5 mg IM into the anterolateral thigh", match: c(EPI, EPI_05, IM) },
          { id: "o2", text: "High flow oxygen", match: ["oxygen", "o2", "non rebreather"] },
          { id: "fluid", text: "Crystalloid bolus", match: ["bolus", "crystalloid", "fluid"] },
          { id: "salb", text: "Inhaled salbutamol", match: ["salbutamol", "ventolin", "bronchodilator"] },
        ],
        unacceptable: [{ text: "Epinephrine as an IV bolus", match: EPI_IV_BOLUS, dangerous: true }],
        explanation:
          "Stopping the trigger and giving IM epinephrine come first. Age and heart disease are not contraindications to epinephrine in anaphylaxis. Fluids alone will not reverse the vasodilation and bronchospasm.",
        keyFeature: { topic: "shock", n: 5 },
        source: "wao",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What features favour anaphylaxis over progression of sepsis?",
        required: 2,
        accept: [
          {
            id: "timing",
            text: "Sudden deterioration within minutes of the new drug",
            match: ["minute", "timing", "temporal", "sudden", "abrupt", "after antibiotic", "after piperacillin"],
          },
          { id: "wheeze", text: "New wheeze or bronchospasm", match: ["wheeze", "bronchospasm"] },
          { id: "skin", text: "Flushing or erythema of the skin", match: ["flush", "flushing", "redness", "erythema", "rash", "hive", "urticaria"] },
          { id: "hypox", text: "Acute fall in oxygen saturation", match: ["hypoxemia", "hypoxia", "desaturation", "spo2", "saturation"] },
        ],
        explanation:
          "Septic shock usually evolves over hours, not minutes. Bronchospasm and flushing after a drug point to mast cell activation. A serum tryptase drawn within about 3 hours can support the diagnosis later.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "wao",
      },
      {
        id: "q4",
        kind: "short",
        update: "He improves after treatment. He still needs antibiotics for his pneumonia.",
        prompt: "What is an appropriate antibiotic choice now?",
        required: 1,
        accept: [
          {
            id: "fq",
            text: "A respiratory fluoroquinolone such as levofloxacin or moxifloxacin",
            match: ["levofloxacin", "moxifloxacin", "fluoroquinolone"],
          },
          {
            id: "ceph",
            text: "Ceftriaxone, a cephalosporin with a dissimilar side chain, with the first dose given under observation",
            match: ["ceftriaxone", "cefotaxime"],
          },
        ],
        unacceptable: [
          {
            text: "Another penicillin",
            match: ["piperacillin", "amoxicillin", "clavulanate", "clavulin", "ampicillin", "penicillin g", "cloxacillin"],
            dangerous: true,
          },
        ],
        explanation:
          "Rechallenge with a penicillin after anaphylaxis could be fatal. A respiratory fluoroquinolone avoids beta lactams entirely. The 2022 US drug allergy parameter suggests a cephalosporin with a dissimilar R1 side chain, such as ceftriaxone, can be given even after penicillin anaphylaxis without testing. That advice comes mostly from remote reactions, so after a reaction minutes ago give the first dose under close observation, and add a macrolide or doxycycline for atypical cover.",
        keyFeature: { topic: "infectious-diseases", n: 8 },
        source: "drug-allergy",
      },
    ],
    sources: [WAO, DRUG_ALLERGY],
  },
  {
    ...base,
    id: "anaphylaxis-13",
    alsoTopics: ["shock"],
    title: "Refractory shock after a church supper",
    stem:
      "A 58-year-old man developed hives and collapsed after eating dessert with pecans at a church supper. EMS gave three IM doses of epinephrine and 2 L of crystalloid. He was intubated in your department for stridor. He has since received a further 1 L, and an epinephrine infusion is now running at 15 mcg/min.",
    vitals: { pulse: "136/minute", bp: "70/38 mmHg", weight: "95 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update:
          "Point of care ultrasound shows a small hyperdynamic left ventricle with near cavity obliteration in systole and a flat IVC that collapses fully with each breath. There is no pericardial effusion and lung sliding is present on both sides.",
        prompt: "What conclusions or actions follow from these findings?",
        required: 2,
        accept: [
          {
            id: "interp",
            text: "He is still profoundly underfilled from vasodilation and capillary leak",
            match: ["underfilled", "hypovolemia", "hypovolemic", "distributive", "vasodilation", "capillary leak", "preload", "empty"],
          },
          {
            id: "fluid",
            text: "Give further rapid crystalloid boluses",
            match: ["bolus", "more fluid", "fluid", "crystalloid", "volume"],
          },
          {
            id: "excl",
            text: "Tamponade and pneumothorax are unlikely",
            match: ["no tamponade", "no pneumothorax", "tamponade", "pneumothorax"],
          },
          {
            id: "titrate",
            text: "Keep titrating the epinephrine infusion upward",
            match: ["titrate", "titrating", "titration", "increase epinephrine", "increase infusion", "uptitrate"],
          },
        ],
        explanation:
          "A hyperdynamic empty ventricle and collapsing IVC show ongoing distributive shock with major capillary leak. Anaphylaxis can shift a large share of circulating volume out of the vessels within minutes. More crystalloid is needed alongside the epinephrine infusion.",
        keyFeature: { topic: "shock", n: 6 },
        source: "rcuk",
      },
      {
        id: "q2",
        kind: "short",
        update: "After 2 more litres his BP is 76/40 mmHg on epinephrine 20 mcg/min.",
        prompt: "What second vasopressor would you add?",
        required: 1,
        accept: [
          { id: "norepi", text: "Norepinephrine", match: ["norepinephrine", "noradrenaline", "levophed"] },
          { id: "vaso", text: "Vasopressin", match: ["vasopressin"] },
          { id: "meta", text: "Metaraminol, where available", match: ["metaraminol"] },
        ],
        explanation:
          "When shock persists despite an epinephrine infusion and fluids, a second vasopressor such as norepinephrine, vasopressin or metaraminol is added. No guideline favours one agent over another. Expert and critical care input is needed, and methylene blue is sometimes described as a rescue in selected cases.",
        keyFeature: { topic: "shock", n: 7 },
        source: "refractory",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What other causes of refractory shock would you reassess in this intubated patient?",
        required: 2,
        accept: [
          {
            id: "ptx",
            text: "Tension pneumothorax or dynamic hyperinflation from bronchospasm",
            match: ["pneumothorax", "auto peep", "breath stacking", "hyperinflation"],
          },
          {
            id: "ischemia",
            text: "Myocardial ischemia or dysfunction, including Kounis syndrome",
            match: ["ischemia", "kounis", "myocardial infarction", "mi", "cardiogenic", "stemi"],
          },
          {
            id: "meds",
            text: "Beta blocker or ACE inhibitor use",
            match: ["beta blocker", "ace inhibitor", "medication"],
          },
          {
            id: "sedation",
            text: "Vasodilation from sedative or induction drugs",
            match: ["sedation", "sedative", "propofol", "induction"],
          },
          { id: "adrenal", text: "Adrenal insufficiency", match: ["adrenal"] },
          { id: "bleed", text: "Occult hemorrhage", match: ["hemorrhage", "haemorrhage", "bleeding"] },
        ],
        explanation:
          "Positive pressure ventilation in a bronchospastic patient can cause air trapping or pneumothorax that collapses venous return. Anaphylaxis and high dose epinephrine can both cause myocardial ischemia. Sedative infusions and home beta blockers or ACE inhibitors also blunt the response to treatment.",
        keyFeature: { topic: "shock", n: 5 },
        source: "wao",
      },
    ],
    sources: [RCUK, WAO, REFRACTORY],
  },
  {
    ...base,
    id: "anaphylaxis-14",
    title: "Teen brought in from a party",
    stem:
      "A 15-year-old boy is brought in by two friends from a house party at 2300. About 30 minutes after eating a homemade cookie he developed itchy skin, vomited twice, has crampy abdominal pain and feels light-headed. He drank three beers. He has a known peanut allergy and left his autoinjector at home. He has scattered hives on his trunk. His chest is clear. His friends want to take him home.",
    vitals: { pulse: "116/minute", resp: "22/minute", bp: "98/58 mmHg", o2sat: "97% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "He meets criteria for anaphylaxis.",
        prompt: "What organ system involvements support this diagnosis?",
        required: 2,
        accept: [
          { id: "skin", text: "Skin, with hives and itch", match: ["skin", "cutaneous", "hive", "urticaria", "itch", "mucocutaneous"] },
          { id: "gi", text: "Gastrointestinal, with vomiting and crampy pain", match: ["gastrointestinal", "gi", "vomit", "vomiting", "abdominal"] },
          {
            id: "cv",
            text: "Cardiovascular, with light-headedness and tachycardia",
            match: ["cardiovascular", "circulatory", "light headed", "lightheaded", "presyncope", "tachycardia"],
          },
        ],
        explanation:
          "After exposure to a likely allergen, involvement of two or more systems meets clinical criteria for anaphylaxis. Persistent gastrointestinal symptoms count as a system in food anaphylaxis. Blood pressure can be normal early, and light-headedness is an early sign of circulatory involvement.",
        keyFeature: { topic: "anaphylaxis", n: 2 },
        source: "wao",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for him now?",
        options: [
          "Cetirizine 10 mg PO and discharge with his friends",
          "Diphenhydramine 50 mg IV and prednisone 50 mg PO",
          "Epinephrine 0.5 mg IM anterolateral thigh, then observe",
          "Epinephrine 0.3 mg subcutaneously, then observe",
          "Observe 1 hour, with epinephrine only if wheeze develops",
        ],
        correct: 2,
        explanation:
          "He has anaphylaxis and needs IM epinephrine now, followed by observation. Waiting for wheeze or hypotension delays the drug that prevents progression. Alcohol may blunt his perception of symptoms, which makes discharge with friends unsafe.",
        keyFeature: { topic: "anaphylaxis", n: 3 },
        source: "wao",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What counselling points specific to this adolescent would you give at discharge?",
        required: 3,
        accept: [
          {
            id: "carry",
            text: "Always carry two autoinjectors, including at parties",
            match: ["carry", "without autoinjector", "never without", "autoinjector", "auto injector", "epipen"],
          },
          {
            id: "alcohol",
            text: "Alcohol lowers the reaction threshold and impairs recognition of symptoms",
            match: ["avoid alcohol", "no alcohol", "not drink", "alcohol", "drinking", "beer"],
          },
          {
            id: "friends",
            text: "Tell friends about the allergy and show them how to use the autoinjector",
            match: ["friend", "peer", "tell other"],
          },
          {
            id: "food",
            text: "Avoid homemade or unlabelled baked goods and ask about ingredients",
            match: ["ingredient", "label", "avoid homemade", "avoid baked", "no homemade", "baked", "homemade", "avoid peanut"],
          },
          { id: "911", text: "Call 911 after using the autoinjector", match: ["911", "ambulance"] },
          { id: "medic", text: "MedicAlert identification", match: ["medicalert", "medic alert", "medical alert"] },
          { id: "allergist", text: "Allergist follow-up", match: ["allergist", "allergy referral", "allergy clinic"] },
        ],
        explanation:
          "Adolescents and young adults have the highest risk of fatal food anaphylaxis, largely from not carrying epinephrine, risk taking and delayed treatment. Counselling should address alcohol, peers and eating food of unknown content. Friends who know the plan can save a life.",
        keyFeature: { topic: "anaphylaxis", n: 4 },
        source: "csaci",
      },
    ],
    sources: [WAO, CSACI],
  },
  {
    ...base,
    id: "anaphylaxis-15",
    alsoTopics: ["ems", "shock"],
    title: "Patch from a highway crew",
    stem:
      "You are the base hospital physician. A paramedic crew patches in from a rural highway 25 minutes away. A 45-year-old woman was stung by a bee while gardening. She is flushed, wheezing and dizzy. They gave epinephrine 0.5 mg IM 6 minutes ago. They have one IV established.",
    vitals: { pulse: "124/minute", resp: "28/minute", bp: "82/50 mmHg", o2sat: "91% on oxygen" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What orders would you give the crew now?",
        required: 2,
        accept: [
          {
            id: "epi",
            text: "Repeat epinephrine 0.5 mg IM now and every 5 minutes as needed",
            match: [...c(EPI, EPI_05, [...IM, "repeat"]), "repeat epinephrine", "second dose epinephrine", "repeat im"],
          },
          { id: "fluid", text: "IV crystalloid bolus of 1 L, repeated as needed", match: ["bolus", "fluid", "saline", "ringer", "crystalloid"] },
          { id: "salb", text: "Nebulized salbutamol for wheeze", match: ["salbutamol", "ventolin", "bronchodilator"] },
          { id: "position", text: "Keep her supine with legs raised", match: ["supine", "leg raised", "leg elevated", "lie flat"] },
          { id: "o2", text: "High flow oxygen", match: ["high flow", "non rebreather", "oxygen"] },
        ],
        unacceptable: [{ text: "Epinephrine as an IV bolus", match: EPI_IV_BOLUS, dangerous: true }],
        explanation:
          "Persistent hypotension and wheeze after one dose call for a repeat IM dose after 5 minutes, fluids and positioning. Online medical direction should be clear and specific about dose and route. Transport should not be delayed.",
        keyFeature: { topic: "ems", n: 1 },
        source: "als-pcs",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "How would you prepare the department for her arrival?",
        required: 3,
        accept: [
          {
            id: "bay",
            text: "Assign a resuscitation bay and assemble the team",
            match: ["resuscitation", "resus", "bay", "room", "team"],
          },
          { id: "airway", text: "Difficult airway equipment ready", match: ["airway", "intubation", "cric"] },
          { id: "infusion", text: "Epinephrine infusion prepared", match: ["infusion", "drip"] },
          { id: "fluids", text: "Pressure bags or a rapid infuser for fluids", match: ["pressure bag", "rapid infuser", "warmed fluid", "level 1"] },
          { id: "consult", text: "Notify ICU or anesthesia", match: ["icu", "intensivist", "critical care", "anesthesia", "anaesthesia"] },
          { id: "glucagon", text: "Glucagon available in case she takes a beta blocker", match: ["glucagon"] },
        ],
        explanation:
          "A call ahead lets the team prepare for refractory anaphylaxis before the patient arrives. Airway swelling and shock may both need advanced care on arrival. Preparing the infusion saves minutes.",
        keyFeature: { topic: "ems", n: 1 },
        source: "rcuk",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "On arrival, after a second IM dose and 1.5 L of fluid, her hives have faded and her wheeze has improved, but she remains hypotensive at 80/48 mmHg.",
        prompt: "What other causes of shock would you now consider?",
        required: 3,
        accept: [
          {
            id: "cardiac",
            text: "Myocardial ischemia or cardiogenic shock, including Kounis syndrome",
            match: ["cardiogenic", "ischemia", "kounis", "acs", "myocardial", "mi", "stemi"],
          },
          { id: "bb", text: "Beta blocker effect limiting the response to epinephrine", match: ["beta blocker"] },
          { id: "pe", text: "Pulmonary embolism", match: ["pulmonary embolism", "pe"] },
          { id: "arrhythmia", text: "Arrhythmia", match: ["arrhythmia", "dysrhythmia", "atrial fibrillation"] },
          { id: "bleed", text: "Hemorrhage", match: ["hemorrhage", "haemorrhage", "bleed", "bleeding"] },
          { id: "sepsis", text: "Sepsis", match: ["sepsis", "septic"] },
          { id: "adrenal", text: "Adrenal insufficiency", match: ["adrenal"] },
          { id: "tox", text: "Co-ingestion or drug toxicity", match: ["ingestion", "overdose", "toxicity", "toxin"] },
        ],
        explanation:
          "When shock does not respond as expected, re-examine the diagnosis. Anaphylaxis can trigger coronary spasm or infarction, and other causes can coexist. Bedside ultrasound and an ECG help sort these out quickly.",
        keyFeature: { topic: "shock", n: 5 },
        source: "wao",
      },
    ],
    sources: [ALS_PCS, RCUK, WAO],
  },
];
