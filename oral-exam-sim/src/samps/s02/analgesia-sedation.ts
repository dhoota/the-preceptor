// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const CAEP: Source = {
  id: "caep-psa",
  citation:
    "Innes G, Murphy M, Nijssen-Jordan C, Ducharme J, Drummond A. Procedural sedation and analgesia in the emergency department. Canadian consensus guidelines. J Emerg Med. 1999.",
};
const ACEP: Source = {
  id: "acep-psa",
  citation: "Godwin SA, Burton JH, Gerardo CJ, et al. Clinical policy. Procedural sedation and analgesia in the emergency department. Ann Emerg Med. 2014.",
};
const GREEN: Source = {
  id: "green-ketamine",
  citation:
    "Green SM, Roback MG, Kennedy RM, Krauss B. Clinical practice guideline for emergency department ketamine dissociative sedation. 2011 update. Ann Emerg Med. 2011.",
};
const AAP: Source = {
  id: "aap-sedation",
  citation:
    "Coté CJ, Wilson S, American Academy of Pediatrics, American Academy of Pediatric Dentistry. Guidelines for monitoring and management of pediatric patients before, during, and after sedation for diagnostic and therapeutic procedures. Pediatrics. 2019.",
};
const CPS: Source = {
  id: "cps-pain",
  citation:
    "Canadian Paediatric Society. Managing pain and distress in children undergoing brief diagnostic and therapeutic procedures. Position statement. Paediatr Child Health. 2019.",
};
const POONAI: Source = {
  id: "poonai",
  citation:
    "Poonai N, Bhullar G, Lin K, et al. Oral administration of morphine versus ibuprofen to manage postfracture pain in children. A randomized trial. CMAJ. 2014.",
};
const HICKS: Source = {
  id: "fps-r",
  citation:
    "Hicks CL, von Baeyer CL, Spafford PA, van Korlaar I, Goodenough B. The Faces Pain Scale Revised. Toward a common metric in pediatric pain measurement. Pain. 2001.",
};
const PAINAD: Source = {
  id: "painad",
  citation:
    "Warden V, Hurley AC, Volicer L. Development and psychometric evaluation of the Pain Assessment in Advanced Dementia (PAINAD) scale. J Am Med Dir Assoc. 2003.",
};
const GUAY: Source = {
  id: "guay",
  citation: "Guay J, Parker MJ, Griffiths R, Kopp S. Peripheral nerve blocks for hip fractures. Cochrane Database Syst Rev.",
};
const PATHAN: Source = {
  id: "pathan",
  citation:
    "Pathan SA, Mitra B, Straney LD, et al. Delivering safe and effective analgesia for management of renal colic in the emergency department. A double-blind, multigroup, randomised controlled trial. Lancet. 2016.",
};
const NHLBI: Source = {
  id: "nhlbi-scd",
  citation: "National Heart, Lung, and Blood Institute. Evidence-based management of sickle cell disease. Expert panel report. 2014.",
};
const ASH: Source = {
  id: "ash-scd",
  citation:
    "Brandow AM, Carroll CP, Creary S, et al. American Society of Hematology 2020 guidelines for sickle cell disease. Management of acute and chronic pain. Blood Adv. 2020.",
};
const CRISM: Source = {
  id: "crism",
  citation: "Canadian Research Initiative in Substance Misuse (CRISM). National guideline for the clinical management of opioid use disorder. 2018.",
};
const ASRA: Source = {
  id: "asra-last",
  citation:
    "Neal JM, Barrington MJ, Fettiplace MR, et al. The third American Society of Regional Anesthesia and Pain Medicine practice advisory on local anesthetic systemic toxicity. Executive summary 2017. Reg Anesth Pain Med. 2018.",
};
const ASRA2020: Source = {
  id: "asra-checklist",
  citation:
    "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine local anesthetic systemic toxicity checklist. 2020 version. Reg Anesth Pain Med. 2021.",
  url: "https://pubmed.ncbi.nlm.nih.gov/33148630/",
};
const ASRAAC: Source = {
  id: "asra-anticoag",
  citation:
    "Kopp SL, Vandermeulen E, McBane RD, et al. Regional anesthesia in the patient receiving antithrombotic or thrombolytic therapy. American Society of Regional Anesthesia and Pain Medicine evidence-based guidelines (fifth edition). Reg Anesth Pain Med. 2025.",
};
const BOYER: Source = {
  id: "boyer",
  citation: "Boyer EW. Management of opioid analgesic overdose. N Engl J Med. 2012.",
};
const EAST: Source = {
  id: "east-ribs",
  citation:
    "Galvagno SM, Smith CE, Varon AJ, et al. Pain management for blunt thoracic trauma. A joint practice management guideline from the Eastern Association for the Surgery of Trauma and Trauma Anesthesiology Society. J Trauma Acute Care Surg. 2016.",
};
const ABLS: Source = {
  id: "abls",
  citation: "American Burn Association. Advanced Burn Life Support provider manual.",
};
const TINT: Source = {
  id: "tintinalli",
  citation: "Tintinalli JE, et al, eds. Tintinalli's Emergency Medicine. A Comprehensive Study Guide. McGraw Hill.",
};
const CDC: Source = {
  id: "cdc-opioids",
  citation: "Dowell D, Ragan KR, Jones CM, Baldwin GT, Chou R. CDC clinical practice guideline for prescribing opioids for pain. United States, 2022. MMWR Recomm Rep. 2022.",
};
const MANTEROLA: Source = {
  id: "manterola",
  citation: "Manterola C, Vial M, Moraga J, Astudillo P. Analgesia in patients with acute abdominal pain. Cochrane Database Syst Rev. 2011.",
};

const AUTHOR = "Draft for review by Arjan Dhoot, MD";

export const ANALGESIA_SEDATION_SAMPS: Samp[] = [
  {
    id: "analgesia-sedation-01",
    topic: "analgesia-sedation",
    alsoTopics: ["msk"],
    title: "Slipped on the ice",
    stem:
      "A 42-year-old man slipped on an icy sidewalk and twisted his right ankle. X-ray shows a displaced bimalleolar fracture. The ankle is aligned and the foot is neurovascularly intact. He rates his pain 9 out of 10. Vitals: HR 112, BP 152/90, RR 20, SpO2 99% on room air, temperature 36.8°C. He is sweating and guarding the leg. He weighs 90 kg. He tells you that morphine made him vomit and itch after a previous surgery, but hydromorphone worked well. He takes no medications and has no other medical history.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE elements of a structured pain assessment for this patient.",
        required: 3,
        accept: [
          { id: "scale", text: "Pain score on a numeric rating scale", match: ["numeric", "pain scale", "pain score", "nrs", "vas", "visual analogue", "rating scale", "0 to 10"] },
          { id: "vitals", text: "Physiologic signs such as tachycardia, hypertension and sweating", match: ["tachycardia", "heart rate", "blood pressure", "hypertension", "diaphoresis", "sweating", "vital"] },
          { id: "behaviour", text: "Behaviour such as guarding, grimacing or refusing to move", match: ["guarding", "grimace", "grimacing", "behaviour", "behavior"] },
          { id: "character", text: "Location, character, onset and radiation of the pain", match: ["location", "character", "onset", "radiation", "opqrst"] },
          { id: "previous", text: "Response to previous analgesics", match: ["previous", "prior", "past response"] },
          { id: "pref", text: "His preferences and goals for pain control", match: ["preference", "goal", "expectation"] },
          { id: "tolerance", text: "Opioid tolerance or substance use", match: ["tolerance", "substance", "opioid use", "addiction"] },
          { id: "allergy", text: "True allergies versus side effects such as nausea or itch", match: ["allergy", "allergic", "intolerance", "side effect"] },
          { id: "comorbid", text: "Comorbidities that limit drug choice, such as kidney or liver disease or ulcers", match: ["kidney", "renal", "liver", "hepatic", "comorbidity", "ulcer"] },
          { id: "reassess", text: "Planned reassessment after each dose", match: ["reassess", "reassessment"] },
        ],
        explanation:
          "A structured assessment combines a self reported score, objective signs and the patient's own history with analgesics. His past reaction to morphine and good response to hydromorphone should guide your first choice. Reassessment after each dose is part of the assessment, not an afterthought.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which initial analgesic plan is most appropriate? Select one.",
        options: [
          "Hydromorphone 1 mg IV, reassessed and repeated every 10 to 15 minutes until pain is controlled",
          "Morphine 5 mg IM once",
          "Acetaminophen 1 g PO alone",
          "Codeine 60 mg PO",
          "Hydromorphone 4 mg IV as a single dose",
        ],
        correct: 0,
        explanation:
          "Severe fracture pain needs an IV opioid titrated to effect, and his prior good response favours hydromorphone. A 4 mg single bolus risks respiratory depression. IM dosing is painful and absorbs unpredictably. Codeine is weak and variably metabolized.",
        keyFeature: { topic: "msk", n: 8 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "short",
        update: "He is placed in a well padded posterior slab with stirrups. Orthopedics will see him in fracture clinic in 5 days.",
        prompt: "List THREE elements of a safe discharge analgesia plan.",
        required: 3,
        accept: [
          { id: "acet", text: "Scheduled acetaminophen", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "nsaid", text: "Scheduled NSAID such as ibuprofen or naproxen", match: ["nsaid", "ibuprofen", "naproxen", "advil", "anti inflammatory"] },
          { id: "safety", text: "Advice on opioid risks, safe storage, no driving and no alcohol", match: ["storage", "driving", "alcohol", "risk", "no driving", "avoid driving", "don't drive", "no alcohol", "avoid alcohol"] },
          { id: "bowel", text: "Bowel regimen while taking opioids", match: ["bowel", "laxative", "constipation", "stool softener"] },
          { id: "opioid", text: "Short course of a low dose opioid, small quantity, for breakthrough pain only", match: ["opioid", "hydromorphone", "oxycodone", "short course"] },
          { id: "elevate", text: "Elevation and ice", match: ["elevate", "elevation", "ice"] },
          { id: "splint", text: "Keep the splint on, no weight bearing, crutches", match: ["splint", "weight bearing", "crutch"] },
          { id: "follow", text: "Follow up in fracture clinic", match: ["follow up", "orthopedic", "fracture clinic"] },
          { id: "return", text: "Return for worsening pain, numbness or colour change", match: ["return", "numbness", "compartment"] },
        ],
        explanation:
          "Build the plan on scheduled acetaminophen and an NSAID, with a small supply of opioid for severe pain only. Counsel on safe storage and driving, and prevent constipation. Pain out of proportion in a splint needs return for assessment of compartment syndrome or a tight slab.",
        keyFeature: { topic: "msk", n: 8 },
        source: "cdc-opioids",
      },
    ],
    sources: [TINT, CDC],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-02",
    topic: "analgesia-sedation",
    title: "Writhing with flank pain",
    stem:
      "A 36-year-old man has sudden severe left flank pain radiating to the groin. He is writhing on the stretcher and has vomited twice. Vitals: HR 104, BP 146/88, RR 20, SpO2 99% on room air, temperature 36.9°C. He weighs 80 kg. Urinalysis shows blood. Creatinine is 88 µmol/L. Point of care ultrasound shows mild left hydronephrosis. He has no history of ulcers, kidney disease or bleeding.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which is the most appropriate first line analgesic? Select one.",
        options: ["Ketorolac 15 mg IV", "Morphine 10 mg IM", "Hyoscine butylbromide 20 mg IV", "Tamsulosin 0.4 mg PO", "Acetaminophen 325 mg PO"],
        correct: 0,
        explanation:
          "NSAIDs reduce ureteric spasm and inflammation and work at least as well as opioids for renal colic, with less vomiting. Ketorolac has an analgesic ceiling around 10 to 15 mg IV, so larger doses add risk without benefit. Antispasmodics add nothing, and tamsulosin is for stone passage, not acute pain.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "pathan",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE contraindications or cautions that would make you avoid an NSAID in a patient with renal colic.",
        required: 3,
        accept: [
          { id: "kidney", text: "Acute kidney injury, chronic kidney disease or a solitary kidney", match: ["kidney", "renal", "aki", "ckd", "creatinine", "solitary"] },
          { id: "gi", text: "Active or previous GI bleeding or peptic ulcer", match: ["gi", "ulcer", "gastrointestinal", "bleed"] },
          { id: "preg", text: "Pregnancy, especially the third trimester", match: ["pregnancy", "pregnant"] },
          { id: "anticoag", text: "Anticoagulant use or a bleeding disorder", match: ["anticoagulant", "anticoagulation", "warfarin", "apixaban", "rivaroxaban", "coagulopathy", "bleeding disorder", "doac"] },
          { id: "allergy", text: "NSAID allergy or aspirin exacerbated asthma", match: ["allergy", "allergic", "aspirin", "asthma"] },
          { id: "hf", text: "Severe heart failure", match: ["heart failure", "chf"] },
          { id: "volume", text: "Dehydration or use of an ACE inhibitor with a diuretic", match: ["dehydration", "hypovolemia", "ace", "diuretic"] },
          { id: "liver", text: "Cirrhosis", match: ["cirrhosis", "liver"] },
          { id: "age", text: "Older age", match: ["elderly", "older"] },
        ],
        explanation:
          "NSAIDs reduce renal blood flow and impair platelets. Avoid them with kidney injury, bleeding risk, pregnancy and severe heart failure. In those patients, IV acetaminophen and titrated opioids are the safer choices.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "short",
        update: "Thirty minutes after ketorolac, his pain is still 8 out of 10.",
        prompt: "List TWO next analgesic options. Include the drug and route.",
        required: 2,
        accept: [
          { id: "morphine", text: "Morphine 0.05 to 0.1 mg/kg IV, titrated", match: ["morphine iv", "morphine intravenous"] },
          { id: "hm", text: "Hydromorphone 0.5 to 1 mg IV, titrated", match: ["hydromorphone iv", "hydromorphone intravenous", "dilaudid iv"] },
          { id: "fent", text: "Fentanyl 1 mcg/kg IV", match: ["fentanyl iv", "fentanyl intravenous"] },
          { id: "ketamine", text: "Ketamine 0.1 to 0.3 mg/kg IV over 10 to 15 minutes", match: ["ketamine iv", "ketamine intravenous"] },
          { id: "acet", text: "Acetaminophen 1 g IV or PO", match: ["acetaminophen", "paracetamol", "tylenol"] },
          { id: "lido", text: "Lidocaine 1.5 mg/kg IV over 10 minutes, where local protocols allow", match: ["lidocaine iv", "iv lidocaine", "lidocaine intravenous"] },
        ],
        unacceptable: [
          { text: "Ketamine at a dissociative dose", match: ["ketamine 1 mg/kg", "ketamine 1.5 mg/kg", "ketamine 2 mg/kg"] },
          { text: "A second, larger NSAID dose", match: ["repeat ketorolac", "more ketorolac", "second ketorolac", "ketorolac 30 mg"] },
        ],
        explanation:
          "When an NSAID is not enough, add rather than replace. A titrated IV opioid is standard. Low dose ketamine and IV acetaminophen are reasonable adjuncts. More ketorolac adds risk without more analgesia because of its ceiling effect.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "pathan",
      },
    ],
    sources: [PATHAN, TINT],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-03",
    topic: "analgesia-sedation",
    alsoTopics: ["msk", "delirium-agitation"],
    title: "Fall at the care home",
    stem:
      "An 86-year-old woman from a long term care home fell while walking to the bathroom. She has advanced dementia and is nonverbal at baseline. Her right leg is shortened and externally rotated. She is moaning, grimacing and pulls away when the leg is touched. Vitals: HR 98, BP 164/88, RR 20, SpO2 95% on room air, temperature 36.5°C. She weighs 52 kg. Creatinine is 132 µmol/L with an eGFR of 34. X-ray shows a displaced right femoral neck fracture.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "She cannot rate her pain. List THREE observable indicators you would use to assess it.",
        required: 3,
        accept: [
          { id: "face", text: "Facial expression such as grimacing or frowning", match: ["facial", "face", "grimace", "grimacing", "frown"] },
          { id: "vocal", text: "Vocalization such as moaning or crying out", match: ["moaning", "moan", "vocalization", "crying", "groaning"] },
          { id: "body", text: "Body language such as guarding, bracing or pulling away", match: ["guarding", "bracing", "pulling", "body language", "rigid", "tense", "withdraw"] },
          { id: "breath", text: "Breathing pattern", match: ["breathing"] },
          { id: "consol", text: "Consolability", match: ["consolability", "consolable", "console"] },
          { id: "vitals", text: "Tachycardia or hypertension", match: ["tachycardia", "heart rate", "hypertension", "blood pressure", "vital"] },
          { id: "baseline", text: "Change from baseline behaviour reported by caregivers", match: ["caregiver", "baseline", "staff", "family"] },
          { id: "tool", text: "A validated observational tool such as PAINAD", match: ["painad", "abbey", "pacslac", "doloplus", "observational"] },
        ],
        explanation:
          "In advanced dementia, pain is assessed by observation. PAINAD scores breathing, vocalization, facial expression, body language and consolability. Caregivers can tell you how current behaviour differs from her baseline. Vital signs support but do not replace behavioural assessment.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "painad",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which is the most appropriate analgesic intervention? Select one.",
        options: [
          "Fascia iliaca compartment block with bupivacaine 0.25%, 30 mL",
          "Morphine 10 mg IM",
          "Ketorolac 30 mg IV",
          "Hydromorphone 2 mg IV",
          "No analgesia until the orthopedic assessment",
        ],
        correct: 0,
        explanation:
          "A fascia iliaca block reduces hip fracture pain, lowers opioid needs and may reduce delirium. Thirty mL of 0.25% bupivacaine is 75 mg, within the safe limit for her weight. Hydromorphone 2 mg is far too much for a frail 52 kg patient, and ketorolac is unsafe with her kidney function.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "guay",
      },
      {
        id: "q3",
        kind: "short",
        update: "The block gives partial relief. Her PAINAD score falls from 8 to 4.",
        prompt: "List TWO appropriate additional analgesics for her. Include a dose.",
        required: 2,
        accept: [
          { id: "acet", text: "Acetaminophen 650 mg to 1 g PO or IV every 6 hours", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "hm", text: "Hydromorphone 0.2 to 0.25 mg IV, titrated", match: ["hydromorphone", "dilaudid"] },
          { id: "fent", text: "Fentanyl 10 to 25 mcg IV, titrated", match: ["fentanyl"] },
          { id: "oxy", text: "Oxycodone 2.5 mg PO", match: ["oxycodone"] },
        ],
        unacceptable: [
          { text: "NSAID with her reduced kidney function", match: ["ketorolac", "ibuprofen", "nsaid", "naproxen", "diclofenac"] },
          { text: "Codeine", match: ["codeine"] },
        ],
        explanation:
          "Scheduled acetaminophen is the base of analgesia in older adults. Add small, titrated opioid doses, starting at about a quarter to half of a younger adult dose. NSAIDs risk further kidney injury and bleeding. Codeine is unpredictable and its metabolites accumulate in kidney disease.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "Eight hours later, while waiting for a ward bed, she is agitated, pulling at her IV and calling out. The block has worn off. The overnight resident suggests haloperidol 5 mg IM.",
        prompt: "List TWO more appropriate first steps.",
        required: 2,
        accept: [
          { id: "pain", text: "Reassess and treat pain, for example a further analgesic dose or a repeat block", match: ["pain", "analgesic", "analgesia", "block", "opioid", "hydromorphone", "fentanyl"] },
          { id: "cause", text: "Look for other delirium triggers such as urinary retention, hypoxia or infection", match: ["retention", "bladder", "hypoxia", "infection", "delirium", "constipation", "trigger", "cause"] },
          { id: "nonpharm", text: "Non-drug measures such as family presence, reorientation, glasses, hearing aids and a quiet room", match: ["family", "reorient", "reorientation", "glasses", "hearing", "quiet", "nonpharmacologic", "non pharmacologic"] },
          { id: "lowdose", text: "If sedation is still needed, a low dose antipsychotic such as haloperidol 0.5 mg", match: ["0.5 mg", "low dose"] },
        ],
        unacceptable: [{ text: "Haloperidol 5 mg IM", match: ["haloperidol 5 mg", "5 mg haloperidol"] }],
        explanation:
          "Untreated pain is a common cause of agitation in older adults with hip fracture. Sedating her without treating the pain leaves the cause in place and adds risk of falls, aspiration and oversedation. If a drug is still needed, use a low dose.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "tintinalli",
      },
    ],
    sources: [PAINAD, GUAY, TINT],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-04",
    topic: "analgesia-sedation",
    alsoTopics: ["lacerations", "tox"],
    title: "Two long lacerations",
    stem:
      "A 30-year-old man fell from a ladder onto a glass table. He has a 14 cm forearm laceration and a 9 cm scalp laceration. He is otherwise well, with no allergies. Vitals: HR 88, BP 128/76, RR 16, SpO2 99% on room air, temperature 36.7°C. He weighs 70 kg. A junior resident plans to repair both wounds using lidocaine 1%.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "State the maximum safe dose of lidocaine for him, first plain and then with epinephrine. Give TWO answers.",
        required: 2,
        accept: [
          { id: "plain", text: "Plain lidocaine 4.5 mg/kg, maximum about 300 mg (30 mL of 1%)", match: ["4.5 mg/kg", "5 mg/kg", "300 mg", "300mg", "30 ml"] },
          { id: "epi", text: "Lidocaine with epinephrine 7 mg/kg, about 490 mg (49 mL of 1%)", match: ["7 mg/kg", "490", "500 mg", "500mg", "49 ml"] },
        ],
        unacceptable: [{ text: "7 mg/kg for plain lidocaine", match: ["7 mg/kg plain", "plain 7 mg/kg"] }],
        explanation:
          "Plain lidocaine is limited to about 4.5 mg/kg (some references use 5 mg/kg), to a maximum near 300 mg. Epinephrine slows absorption and raises the limit to about 7 mg/kg. A 1% solution contains 10 mg per mL, so plain lidocaine allows only about 30 mL in this patient.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "The resident injected 35 mL of 2% lidocaine, a total of 700 mg. Five minutes later the patient reports tingling around his mouth and ringing in his ears, then has a generalized seizure. HR is 48 and BP 82/40.",
        prompt: "List THREE immediate management steps.",
        required: 3,
        accept: [
          { id: "airway", text: "Manage the airway with 100% oxygen and ventilation to avoid hypoxia and acidosis", match: ["airway", "oxygen", "ventilate", "ventilation", "bag", "intubate", "intubation"] },
          { id: "benzo", text: "Benzodiazepine for the seizure, such as midazolam", match: ["benzodiazepine", "midazolam", "lorazepam", "diazepam"] },
          { id: "lipid", text: "20% lipid emulsion", match: ["lipid", "intralipid"] },
          { id: "acls", text: "Advanced life support with small epinephrine doses of 1 mcg/kg or less if he arrests", match: ["acls", "cpr", "small epinephrine", "epinephrine 1 mcg/kg", "reduced epinephrine"] },
          { id: "ecmo", text: "Alert a centre with cardiopulmonary bypass or ECMO", match: ["ecmo", "bypass"] },
          { id: "stop", text: "Stop injecting and call for help", match: ["stop", "help"] },
        ],
        unacceptable: [
          { text: "Give a beta blocker or calcium channel blocker", match: ["give beta blocker", "give calcium channel blocker", "metoprolol", "esmolol", "labetalol", "propranolol", "diltiazem", "verapamil"], dangerous: true },
          { text: "Vasopressin", match: ["vasopressin"] },
        ],
        explanation:
          "This is local anesthetic systemic toxicity. Oxygenate and ventilate, stop seizures with a benzodiazepine and give lipid emulsion early. If he arrests, use smaller epinephrine doses. Beta blockers and calcium channel blockers deepen cardiovascular collapse.",
        keyFeature: { topic: "tox", n: 4 },
        source: "asra-last",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which lipid emulsion regimen is correct? Select one.",
        options: [
          "20% lipid emulsion 1.5 mL/kg IV over 2 to 3 minutes, then an infusion of about 0.25 mL/kg/min",
          "20% lipid emulsion 20 mL IV over 30 minutes",
          "10% lipid emulsion 10 mL/kg IV push",
          "Sodium bicarbonate 1 mmol/kg IV",
          "Naloxone 2 mg IV",
        ],
        correct: 0,
        explanation:
          "The ASRA 2020 checklist recommends a 20% lipid bolus of 1.5 mL/kg of ideal body weight over 2 to 3 minutes, or 100 mL in adults over 70 kg, followed by an infusion of about 0.25 mL/kg/min. Repeat the bolus and increase the infusion if instability persists. A small slow dose will not reach an effective concentration.",
        keyFeature: { topic: "tox", n: 2 },
        source: "asra-checklist",
      },
    ],
    sources: [TINT, ASRA, ASRA2020],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-05",
    topic: "analgesia-sedation",
    alsoTopics: ["msk"],
    title: "Fall from the monkey bars",
    stem:
      "A 6-year-old girl fell from the monkey bars at school. Her left forearm is visibly deformed. She is crying and holding her arm. Vitals: HR 132, BP 104/66, RR 24, SpO2 99% on room air, temperature 37.0°C. She weighs 20 kg. The distal neurovascular exam is normal. She has no IV. Her parents are at the bedside.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Name ONE pain scale suitable for her age.",
        required: 1,
        accept: [
          { id: "faces", text: "Faces Pain Scale Revised", match: ["faces", "fps r", "fpsr", "wong baker"] },
          { id: "flacc", text: "FLACC (observational, if she cannot self report)", match: ["flacc"] },
        ],
        unacceptable: [{ text: "Numeric rating scale", match: ["numeric", "nrs", "visual analogue", "vas"] }],
        explanation:
          "Self report is the preferred measure, and the Faces Pain Scale Revised is validated for children aged about 4 to 12 years. A numeric scale is less reliable before about age 8. FLACC is an observational scale for children who cannot self report.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "fps-r",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which is the most appropriate initial analgesic? Select one.",
        options: ["Intranasal fentanyl 30 mcg", "Oral codeine 20 mg", "Intramuscular morphine 2 mg", "Intranasal fentanyl 100 mcg", "Oral acetaminophen 300 mg alone"],
        correct: 0,
        explanation:
          "Intranasal fentanyl 1.5 mcg/kg works within minutes and needs no IV. For 20 kg that is 30 mcg. 100 mcg is 5 mcg/kg and dangerous. Codeine is contraindicated in children under 12 in Canada, and IM injections are painful.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "cps-pain",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE non-drug measures to reduce her pain and distress.",
        required: 3,
        accept: [
          { id: "splint", text: "Splint the arm", match: ["splint", "immobilize", "immobilization", "sling"] },
          { id: "ice", text: "Ice", match: ["ice", "cold"] },
          { id: "elevate", text: "Elevation", match: ["elevate", "elevation"] },
          { id: "distract", text: "Distraction with videos, games or bubbles", match: ["distraction", "distract", "video", "tablet", "bubble", "play", "game"] },
          { id: "parent", text: "Parent presence and comfort holding", match: ["parent", "parental", "caregiver", "hold", "lap"] },
          { id: "childlife", text: "Child life specialist", match: ["child life"] },
          { id: "position", text: "Position of comfort", match: ["comfort position", "position of comfort", "positioning"] },
        ],
        explanation:
          "Immobilizing a fracture is itself analgesic. Distraction, a parent's presence and comfort positioning reduce distress and are recommended for all procedures in children. These add to, and do not replace, drug analgesia.",
        keyFeature: { topic: "msk", n: 8 },
        source: "cps-pain",
      },
      {
        id: "q4",
        kind: "short",
        update: "The fracture needs no reduction. She is going home in a cast.",
        prompt: "List TWO analgesics, with doses, for home.",
        required: 2,
        accept: [
          { id: "ibu", text: "Ibuprofen 10 mg/kg (200 mg) PO every 6 to 8 hours", match: ["ibuprofen", "advil", "motrin", "nsaid"] },
          { id: "acet", text: "Acetaminophen 15 mg/kg (300 mg) PO every 4 to 6 hours", match: ["acetaminophen", "tylenol", "paracetamol", "tempra"] },
        ],
        unacceptable: [
          { text: "Codeine", match: ["codeine", "t3"], dangerous: true },
          { text: "Tramadol", match: ["tramadol"] },
        ],
        explanation:
          "Ibuprofen controlled post-fracture pain in children as well as oral morphine with fewer side effects. Pair it with acetaminophen. Codeine and tramadol are not recommended under age 12 because ultrarapid metabolizers can develop fatal respiratory depression.",
        keyFeature: { topic: "msk", n: 8 },
        source: "poonai",
      },
    ],
    sources: [HICKS, CPS, POONAI],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-06",
    topic: "analgesia-sedation",
    title: "Snowboarder with a shoulder injury",
    stem:
      "A 34-year-old man fell while snowboarding 2 hours ago. X-ray shows an anterior shoulder dislocation without fracture. Attempts at reduction using the Cunningham technique and then external rotation have failed. He has no medical history and takes no medications. He ate a sandwich 3 hours ago. Vitals: HR 96, BP 138/84, RR 16, SpO2 98% on room air, temperature 36.7°C. He weighs 85 kg. You plan procedural sedation with propofol.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE elements of your pre-sedation risk assessment.",
        required: 3,
        accept: [
          { id: "asa", text: "ASA physical status class", match: ["asa"] },
          { id: "airway", text: "Airway exam for predictors of difficult bag-mask ventilation or intubation", match: ["airway", "mallampati", "mouth opening", "neck", "lemon", "moans", "dentition", "teeth"] },
          { id: "osa", text: "Snoring or sleep apnea", match: ["sleep apnea", "osa", "snoring"] },
          { id: "prior", text: "Previous problems with sedation or anesthesia", match: ["previous", "prior", "anesthesia", "anaesthesia"] },
          { id: "comorbid", text: "Cardiac or respiratory disease", match: ["cardiac", "heart", "respiratory", "lung", "asthma", "copd", "comorbidity"] },
          { id: "meds", text: "Medications and allergies", match: ["medication", "allergy", "allergies"] },
          { id: "intake", text: "Time of last oral intake, documented but not a reason to delay", match: ["oral intake", "last meal", "npo", "fasting", "ate", "intake"] },
          { id: "substance", text: "Alcohol or drug use", match: ["alcohol", "drug use", "substance"] },
          { id: "vitals", text: "Baseline vital signs and oxygen saturation", match: ["vital", "baseline", "saturation"] },
          { id: "consent", text: "Informed consent", match: ["consent"] },
        ],
        unacceptable: [{ text: "Delay until fasted for 6 hours", match: ["wait 6 hour", "delay 6 hour", "wait until fasted", "delay until fasted", "wait 8 hour"] }],
        explanation:
          "Formal assessment covers ASA class, the airway, sleep apnea, prior sedation problems and comorbidity. Recent food intake should be recorded, but emergency physicians should not delay needed sedation on fasting time alone. Aspiration during ED sedation is very rare.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "acep-psa",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Propofol has no analgesic effect. Which TWO additions best provide analgesia for this reduction? Select TWO.",
        options: [
          "Fentanyl 1 mcg/kg IV",
          "Midazolam 0.05 mg/kg IV",
          "Ondansetron 4 mg IV",
          "Diphenhydramine 50 mg IV",
          "Increase the propofol dose to 3 mg/kg",
          "Ketamine 0.5 mg/kg IV",
          "Glycopyrrolate 0.2 mg IV",
          "Haloperidol 5 mg IV",
        ],
        select: 2,
        correct: [0, 5],
        explanation:
          "Sedation without analgesia leaves the patient in pain even if he does not remember it. A small dose of fentanyl or ketamine with propofol provides analgesia. Midazolam, diphenhydramine and haloperidol sedate but do not relieve pain. More propofol only deepens sedation and apnea risk.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "acep-psa",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE monitoring elements you require during the sedation.",
        required: 3,
        accept: [
          { id: "spo2", text: "Continuous pulse oximetry", match: ["oximetry", "spo2", "saturation"] },
          { id: "cap", text: "Waveform capnography", match: ["capnography", "capnograph", "etco2", "end tidal", "co2"] },
          { id: "ecg", text: "Cardiac monitor", match: ["cardiac monitor", "ecg", "ekg", "telemetry", "cardiac", "rhythm"] },
          { id: "bp", text: "Blood pressure every 3 to 5 minutes", match: ["blood pressure", "bp"] },
          { id: "person", text: "A dedicated nurse or respiratory therapist watching the patient throughout", match: ["dedicated", "nurse", "respiratory therapist", "rt", "second person"] },
          { id: "level", text: "Level of sedation and response to voice", match: ["level of sedation", "sedation score", "responsive", "response", "consciousness"] },
          { id: "equip", text: "Suction, bag-mask and airway equipment at the bedside", match: ["suction", "bag", "airway equipment", "equipment"] },
          { id: "o2", text: "Supplemental oxygen", match: ["supplemental oxygen", "oxygen"] },
        ],
        explanation:
          "Pulse oximetry, cardiac monitoring, regular blood pressure and capnography are standard. Capnography shows hypoventilation and obstruction before oxygen saturation falls. A dedicated person who is not doing the procedure must watch the patient.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "caep-psa",
      },
      {
        id: "q4",
        kind: "single",
        update: "Ninety seconds after propofol 60 mg IV, the capnography waveform goes flat. His chest and abdomen are still moving. SpO2 is 98%.",
        prompt: "What is the most likely problem and the best next step? Select one.",
        options: [
          "Upper airway obstruction. Reposition with jaw thrust and consider an airway adjunct.",
          "Apnea. Intubate immediately.",
          "Equipment problem. Ignore it because SpO2 is normal.",
          "Bronchospasm. Give salbutamol.",
          "Oversedation. Give flumazenil.",
        ],
        correct: 0,
        explanation:
          "Chest movement with no exhaled CO2 means air is not moving through the upper airway. Jaw thrust or an airway adjunct usually fixes it. Oxygen saturation lags behind by a minute or more, so a normal value is false reassurance. Flumazenil does not reverse propofol.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "acep-psa",
      },
    ],
    sources: [CAEP, ACEP],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-07",
    topic: "analgesia-sedation",
    alsoTopics: ["msk"],
    title: "Wrist fracture in a frail patient",
    stem:
      "A 78-year-old woman fell on her outstretched hand. X-ray shows a dorsally displaced distal radius fracture that needs closed reduction. She has severe COPD on home oxygen at 2 L/min, obstructive sleep apnea on CPAP and heart failure with an ejection fraction of 30%. Vitals: HR 88, BP 118/66, RR 22, SpO2 91% on 2 L/min, temperature 36.6°C. She weighs 62 kg. She wants to go home tonight with her husband.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that increase her risk of complications from procedural sedation.",
        required: 3,
        accept: [
          { id: "age", text: "Older age", match: ["age", "elderly", "older", "78"] },
          { id: "asa", text: "ASA class III or higher", match: ["asa"] },
          { id: "copd", text: "Severe COPD on home oxygen with little respiratory reserve", match: ["copd", "home oxygen", "co2 retention", "lung", "respiratory reserve"] },
          { id: "osa", text: "Obstructive sleep apnea", match: ["sleep apnea", "osa", "cpap"] },
          { id: "hf", text: "Heart failure with low ejection fraction, prone to hypotension", match: ["heart failure", "ejection fraction", "chf", "ef", "cardiac"] },
          { id: "hypox", text: "Baseline hypoxemia with SpO2 of 91%", match: ["91", "hypoxemia", "hypoxia", "spo2"] },
        ],
        explanation:
          "She is at least ASA class III. COPD with baseline hypoxemia leaves no reserve for sedative induced hypoventilation. Sleep apnea predicts airway obstruction, and a low ejection fraction predicts hypotension with propofol. Together these favour avoiding systemic sedation.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "caep-psa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which anesthetic approach is most appropriate for the reduction? Select one.",
        options: [
          "Regional anesthesia without systemic sedation, such as a Bier block",
          "Propofol 1 mg/kg IV",
          "Ketamine 1.5 mg/kg IV",
          "Midazolam 5 mg IV with fentanyl 100 mcg IV",
          "Discharge in a splint without reduction",
        ],
        correct: 0,
        explanation:
          "A Bier block or hematoma block gives good analgesia for distal radius reduction without affecting breathing or blood pressure. That makes it the safer choice in a high risk patient. Leaving a displaced fracture unreduced risks worse function and skin problems.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "You choose a Bier block. List THREE key safety steps.",
        required: 3,
        accept: [
          { id: "drug", text: "Plain lidocaine 0.5%, 1.5 to 3 mg/kg", match: ["lidocaine", "0.5%", "3 mg/kg", "1.5 mg/kg"] },
          { id: "exsang", text: "Elevate or exsanguinate the arm before inflating the cuff", match: ["elevate", "exsanguinate", "exsanguination", "esmarch"] },
          { id: "time", text: "Keep the cuff inflated at least 20 to 30 minutes after injection", match: ["20 minute", "30 minute", "time", "duration"] },
          { id: "iv", text: "IV in the injured hand and a second IV in the other arm", match: ["second iv", "other arm", "hand", "two iv", "dorsum"] },
          { id: "monitor", text: "Cardiac monitoring and observation for toxicity, with lipid emulsion available", match: ["monitor", "toxicity", "lipid"] },
          { id: "staff", text: "A second person to watch the cuff", match: ["second person", "watch"] },
          { id: "cuff", text: "Check the tourniquet or double cuff and inflate it well above systolic pressure", match: ["cuff", "tourniquet"] },
        ],
        unacceptable: [{ text: "Bupivacaine", match: ["bupivacaine", "marcaine"], dangerous: true }],
        explanation:
          "The main hazard of a Bier block is a bolus of local anesthetic reaching the circulation if the cuff fails or is released early. Use a checked cuff, plain dilute lidocaine and a minimum cuff time. Bupivacaine is never used for IV regional anesthesia because of fatal cardiotoxicity.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "short",
        update: "The reduction is completed and she is placed in a sugar tong splint.",
        prompt: "List TWO things you would document after the reduction.",
        required: 2,
        accept: [
          { id: "nerve", text: "Median nerve sensation and function", match: ["median", "nerve", "sensation", "sensory", "motor"] },
          { id: "pulse", text: "Radial pulse and capillary refill", match: ["pulse", "capillary", "perfusion", "circulation"] },
          { id: "xray", text: "Alignment on post-reduction X-ray", match: ["x ray", "xray", "radiograph", "film", "alignment"] },
          { id: "skin", text: "Skin integrity and splint fit", match: ["skin", "splint", "cast"] },
        ],
        explanation:
          "Neurovascular status must be documented before and after every manipulation. Median nerve injury is the classic complication of distal radius fractures and their reduction. A post-reduction film confirms alignment.",
        keyFeature: { topic: "msk", n: 5 },
        source: "tintinalli",
      },
    ],
    sources: [CAEP, TINT],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-08",
    topic: "analgesia-sedation",
    alsoTopics: ["lacerations"],
    title: "Toddler with a gaping chin wound",
    stem:
      "A 4-year-old boy fell against a coffee table and has a 3 cm deep, gaping chin laceration that needs layered closure. LET gel was applied 30 minutes ago. He remains terrified and combative despite a child life specialist and his mother at the bedside. He has had a mild runny nose for 2 days with no fever, cough or wheeze. He ate crackers and apple juice 90 minutes ago. He is healthy and fully immunized. Vitals: HR 118, RR 24, SpO2 99% on room air, temperature 37.2°C. He weighs 18 kg. You plan ketamine sedation.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which statement about proceeding with ketamine sedation now is most accurate? Select one.",
        options: [
          "He must fast for 6 hours after solids before ketamine can be given",
          "Recent intake does not require a delay, and the mild runny nose slightly increases the risk of laryngospasm",
          "Ketamine is contraindicated under 5 years of age",
          "Any upper respiratory infection is an absolute contraindication",
          "Atropine must be given with ketamine in every child",
        ],
        correct: 1,
        explanation:
          "The ketamine guideline states that timing of recent intake need not delay ED ketamine sedation. A mild upper respiratory infection is a relative risk factor for laryngospasm, not a contraindication. Routine atropine is no longer recommended.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "green-ketamine",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List the TWO absolute contraindications to ketamine sedation in the 2011 ED ketamine guideline.",
        required: 2,
        accept: [
          { id: "age", text: "Age younger than 3 months", match: ["3 month", "three month"] },
          { id: "schiz", text: "Known or suspected schizophrenia", match: ["schizophrenia", "psychosis", "psychotic"] },
        ],
        unacceptable: [{ text: "Head injury or raised intracranial pressure", match: ["head injury", "intracranial pressure", "icp"] }],
        explanation:
          "The 2011 update lists only two absolute contraindications: age under 3 months, because of higher airway complications, and known or suspected schizophrenia, because ketamine can worsen psychosis. Head injury was removed as a contraindication.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "green-ketamine",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO reasons ketamine is a good choice for this procedure compared with propofol.",
        required: 2,
        accept: [
          { id: "analgesia", text: "Provides analgesia as well as sedation", match: ["analgesia", "analgesic", "pain"] },
          { id: "reflex", text: "Preserves airway reflexes and spontaneous breathing", match: ["airway reflex", "reflexes", "spontaneous breathing", "breathing", "respiratory drive"] },
          { id: "im", text: "Can be given IM if IV access is difficult", match: ["intramuscular", "im route", "im"] },
          { id: "bp", text: "Maintains blood pressure", match: ["blood pressure", "hemodynamic"] },
          { id: "still", text: "Dissociation keeps him still for a fine facial repair", match: ["dissociation", "dissociative", "immobility", "still", "motionless"] },
        ],
        explanation:
          "Ketamine is both analgesic and dissociative, so the painful parts of the repair are covered. Airway reflexes and breathing are usually preserved, and it can be given IM. Propofol provides no analgesia and more often causes apnea.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "green-ketamine",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "He receives ketamine 27 mg IV. During suturing he develops a high pitched inspiratory noise, then silence. His chest wall moves but the capnography trace is flat. SpO2 falls from 99% to 85%.",
        prompt: "List THREE steps to manage this complication.",
        required: 3,
        accept: [
          { id: "stop", text: "Stop the procedure and suction the pharynx", match: ["suction", "stop"] },
          { id: "jaw", text: "Jaw thrust with firm pressure at the laryngospasm notch", match: ["jaw thrust", "larson", "laryngospasm notch", "jaw"] },
          { id: "ppv", text: "100% oxygen with positive pressure by bag-mask", match: ["positive pressure", "bag", "bvm", "cpap", "ppv"] },
          { id: "sux", text: "Succinylcholine IV, or IM if no IV, if spasm persists", match: ["succinylcholine", "sux", "paralytic"] },
          { id: "intubate", text: "Intubate if hypoxia persists after paralysis", match: ["intubate", "intubation"] },
          { id: "help", text: "Call for help", match: ["help"] },
        ],
        explanation:
          "This is laryngospasm, which occurs in about 0.3% of pediatric ketamine sedations. Most cases resolve with jaw thrust and positive pressure oxygen. If they do not, give succinylcholine and be ready to intubate.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "green-ketamine",
      },
      {
        id: "q5",
        kind: "short",
        update: "He recovers quickly and the repair is completed without further problems.",
        prompt: "List THREE discharge criteria or instructions for him and his mother.",
        required: 3,
        accept: [
          { id: "baseline", text: "Back to baseline mental status, talking and interacting normally", match: ["baseline", "talking", "alert", "awake"] },
          { id: "walk", text: "Able to sit or walk as he normally would", match: ["walk", "sit", "ambulate", "ambulating", "ambulatory"] },
          { id: "vitals", text: "Normal vital signs and SpO2 on room air", match: ["vital", "saturation", "spo2"] },
          { id: "adult", text: "Discharged with a responsible adult who will supervise him", match: ["adult", "parent", "supervision", "supervise", "supervised"] },
          { id: "activity", text: "No bikes, swimming, climbing or unsupervised play for the rest of the day", match: ["bike", "bicycle", "swimming", "climbing", "play", "activity", "activities"] },
          { id: "food", text: "Start with clear fluids, then usual diet", match: ["fluid", "drink", "diet", "eat", "food"] },
          { id: "return", text: "Return for breathing trouble, persistent vomiting or unusual behaviour", match: ["return", "vomiting", "breathing"] },
          { id: "written", text: "Written instructions", match: ["written", "instruction"] },
        ],
        explanation:
          "Discharge when he is back to his baseline mental and motor state with normal vital signs. Balance may stay off for some hours, so restrict risky activity and require adult supervision. Written instructions should cover vomiting and breathing problems.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "aap-sedation",
      },
    ],
    sources: [GREEN, AAP],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-09",
    topic: "analgesia-sedation",
    title: "Back and thigh pain in a young woman",
    stem:
      "A 22-year-old woman with sickle cell disease (HbSS) presents with 6 hours of pain in her lower back and both thighs that she says is typical of her crises. Oral hydromorphone 4 mg at home did not help. Her individualized care plan from the hematology clinic is in the chart and recommends hydromorphone 1.5 mg IV for crisis pain. Vitals: HR 88, BP 118/72, RR 16, SpO2 97% on room air, temperature 37.4°C. She weighs 55 kg. She is lying still and rates her pain 9 out of 10.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "A nurse comments that she does not look like she is in pain because her vital signs are normal. List TWO reasons this reasoning is flawed.",
        required: 2,
        accept: [
          { id: "vitals", text: "Vital signs are unreliable markers of pain, especially in recurrent pain", match: ["vital", "heart rate", "blood pressure", "unreliable"] },
          { id: "plan", text: "Her care plan and history of typical crises support her report", match: ["care plan", "history", "typical"] },
          { id: "self", text: "Self report is the most reliable measure of pain", match: ["self report", "self", "patient report", "her report", "believe"] },
          { id: "adapt", text: "Patients with recurrent pain often adapt and show little outward distress", match: ["adapt", "adaptation", "chronic", "recurrent", "distress", "behaviour", "behavior"] },
          { id: "bias", text: "Stigma and bias lead to undertreatment in sickle cell disease", match: ["bias", "stigma", "racism", "undertreatment", "discrimination"] },
        ],
        explanation:
          "Patients with repeated painful crises often lie still and have normal vital signs. Their self report is the best measure. Undertreatment of sickle cell pain is well documented and often driven by bias.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "nhlbi-scd",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE elements of timely, adequate analgesia for her.",
        required: 3,
        accept: [
          { id: "time", text: "Give a parenteral opioid within 60 minutes of arrival", match: ["60 minute", "1 hour", "one hour", "within", "rapid", "prompt", "timely", "quickly"] },
          { id: "plan", text: "Follow her individualized care plan", match: ["care plan", "individualized", "plan"] },
          { id: "dose", text: "Hydromorphone 1.5 mg IV (or an equivalent opioid dose)", match: ["hydromorphone", "morphine", "opioid", "dilaudid"] },
          { id: "route", text: "Subcutaneous route if IV access is delayed", match: ["subcutaneous", "subcut", "sc"] },
          { id: "reassess", text: "Reassess every 15 to 30 minutes and redose", match: ["reassess", "redose", "repeat", "15 minute"] },
          { id: "pca", text: "Patient controlled analgesia", match: ["pca", "patient controlled"] },
          { id: "adjunct", text: "Adjuncts such as acetaminophen, or an NSAID if kidney function allows", match: ["acetaminophen", "nsaid", "ketorolac", "ibuprofen", "tylenol"] },
        ],
        unacceptable: [
          { text: "Meperidine", match: ["meperidine", "demerol", "pethidine"] },
          { text: "Intramuscular injection", match: ["intramuscular", "im injection"] },
        ],
        explanation:
          "NHLBI guidance calls for a parenteral opioid within about 60 minutes of arrival, with reassessment and redosing every 15 to 30 minutes. An individualized plan gives the dose that has worked before. Meperidine causes seizures from its metabolite and IM injections are painful.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "nhlbi-scd",
      },
      {
        id: "q3",
        kind: "short",
        update: "After two doses of hydromorphone her pain is 8 out of 10. She is alert with RR 16 and SpO2 97%.",
        prompt: "List TWO next analgesic options.",
        required: 2,
        accept: [
          { id: "more", text: "Further opioid dose, increased by about 25%", match: ["opioid", "hydromorphone", "morphine", "increase", "repeat", "redose", "higher dose"] },
          { id: "pca", text: "Patient controlled analgesia", match: ["pca", "patient controlled"] },
          { id: "ketamine", text: "Low dose ketamine infusion, 0.1 to 0.3 mg/kg/h", match: ["ketamine"] },
          { id: "nsaid", text: "NSAID if kidney function is normal", match: ["nsaid", "ketorolac", "ibuprofen"] },
          { id: "acet", text: "Acetaminophen", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "heat", text: "Heat packs and distraction", match: ["heat", "warm", "distraction"] },
        ],
        unacceptable: [{ text: "Lorazepam for anxiety instead of analgesia", match: ["lorazepam", "benzodiazepine"] }],
        explanation:
          "Keep titrating while she is alert and breathing normally. Escalating opioid doses or a PCA are standard. The ASH guideline suggests low dose ketamine for pain that is refractory to opioids. Benzodiazepines add sedation without relief.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "ash-scd",
      },
    ],
    sources: [NHLBI, ASH],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-10",
    topic: "analgesia-sedation",
    title: "Motorcycle crash in a patient on treatment",
    stem:
      "A 31-year-old man crashed his motorcycle and has a closed midshaft tibial fracture. The leg is neurovascularly intact and the compartments are soft. He has taken buprenorphine-naloxone 16 mg SL daily for 2 years for opioid use disorder. His last dose was 6 hours ago. He rates his pain 10 out of 10. Vitals: HR 120, BP 150/90, RR 20, SpO2 98% on room air, temperature 36.9°C. He weighs 78 kg. He asks you not to stop his buprenorphine and is worried about relapse. Orthopedics plans intramedullary nailing tomorrow.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE pieces of history you would clarify before choosing his analgesia.",
        required: 3,
        accept: [
          { id: "confirm", text: "Confirm the dose with his prescriber or pharmacy", match: ["prescriber", "pharmacy", "pharmacist", "confirm"] },
          { id: "dose", text: "Current buprenorphine dose and time of last dose", match: ["dose", "last dose", "buprenorphine", "suboxone"] },
          { id: "other", text: "Other substance use, including recent opioid or alcohol use", match: ["substance", "alcohol", "other drug", "drug use", "recent use"] },
          { id: "prior", text: "What has worked for pain before", match: ["previous", "prior", "worked", "past"] },
          { id: "pref", text: "His goals, fears and preferences, including relapse concerns", match: ["preference", "goal", "fear", "concern", "relapse", "wishes"] },
          { id: "allergy", text: "Allergies", match: ["allergy", "allergies"] },
          { id: "naloxone", text: "Access to a take home naloxone kit", match: ["naloxone"] },
          { id: "organ", text: "Kidney or liver disease", match: ["kidney", "renal", "liver", "hepatic"] },
        ],
        explanation:
          "His buprenorphine dose, other substance use and past analgesic responses shape the plan. His own concerns about relapse matter and should be addressed openly. Confirming the dose with the pharmacy avoids errors in continuing therapy.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "crism",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which analgesic strategy is most appropriate? Select one.",
        options: [
          "Stop buprenorphine and start IV morphine",
          "Continue buprenorphine, add non-opioid analgesia, and titrate a potent full agonist such as hydromorphone at higher than usual doses",
          "Give naloxone to displace buprenorphine, then IV morphine",
          "Avoid all opioids and give acetaminophen alone",
          "Switch to methadone 30 mg PO now",
        ],
        correct: 1,
        explanation:
          "Continuing buprenorphine protects against relapse and withdrawal. Its high receptor affinity means full agonists need higher doses to work, so titrate to effect and add multimodal agents. Stopping it risks relapse and makes later re-induction difficult.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "crism",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE non-opioid options for his fracture pain.",
        required: 3,
        accept: [
          { id: "splint", text: "Splint the leg", match: ["splint", "immobilize", "immobilization"] },
          { id: "nsaid", text: "NSAID such as ketorolac or ibuprofen", match: ["nsaid", "ketorolac", "ibuprofen", "naproxen", "anti inflammatory"] },
          { id: "acet", text: "Acetaminophen", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "ketamine", text: "Low dose ketamine, 0.1 to 0.3 mg/kg IV or as an infusion", match: ["ketamine"] },
          { id: "ice", text: "Ice and elevation", match: ["ice", "elevate", "elevation"] },
          { id: "block", text: "Regional nerve block, after discussing compartment syndrome monitoring with orthopedics", match: ["block"] },
        ],
        explanation:
          "Splinting, acetaminophen, an NSAID and low dose ketamine reduce the opioid needed. Nerve blocks help, but with a tibial shaft fracture discuss them with orthopedics first, because a dense block may mask compartment syndrome.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "tintinalli",
      },
    ],
    sources: [CRISM, TINT],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-11",
    topic: "analgesia-sedation",
    alsoTopics: ["burns"],
    title: "Kitchen accident with hot oil",
    stem:
      "A 28-year-old man spilled a pot of hot cooking oil 30 minutes ago. He has partial thickness burns to both legs and his right forearm, about 18% of total body surface area. He ran the burns under cool tap water for 5 minutes. Vitals: HR 124, BP 146/86, RR 22, SpO2 99% on room air, temperature 36.9°C. He weighs 75 kg. He is screaming and rates his pain 10 out of 10. Two IVs are in place. He has no other injuries.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE measures to control his pain in the first 30 minutes. Include doses for any drugs.",
        required: 3,
        accept: [
          { id: "opioid", text: "IV opioid titrated to effect, such as fentanyl 1 mcg/kg (75 mcg) every 5 minutes or morphine 0.1 mg/kg", match: ["fentanyl", "morphine", "hydromorphone", "opioid", "dilaudid"] },
          { id: "ketamine", text: "Ketamine 0.1 to 0.3 mg/kg IV", match: ["ketamine"] },
          { id: "cover", text: "Cover burns with clean dressings or plastic wrap to keep air off", match: ["cover", "dressing", "plastic wrap", "cling", "saran"] },
          { id: "cool", text: "Cool running water for 20 minutes, since he is within 3 hours of the burn", match: ["cool", "cooling", "water"] },
          { id: "acet", text: "Acetaminophen 1 g", match: ["acetaminophen", "tylenol", "paracetamol"] },
        ],
        unacceptable: [
          { text: "Intramuscular opioids", match: ["intramuscular", "im morphine", "im injection"] },
          { text: "Ice on the burn", match: ["ice"] },
        ],
        explanation:
          "Severe burn pain needs IV opioids titrated quickly, and fentanyl works fast. Covering the wound reduces pain from air currents, and cool running water for 20 minutes within 3 hours of injury reduces pain and burn depth. Ice worsens tissue injury and causes hypothermia.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
      {
        id: "q2",
        kind: "short",
        update: "After fentanyl 250 mcg over 30 minutes, his pain is 8 out of 10. He is alert with RR 18 and SpO2 98%.",
        prompt: "List TWO next steps for his pain.",
        required: 2,
        accept: [
          { id: "more", text: "Keep titrating the opioid, as there is no fixed ceiling while he is monitored", match: ["titrate", "titrating", "more fentanyl", "further", "continue", "additional"] },
          { id: "ketamine", text: "Add low dose ketamine", match: ["ketamine"] },
          { id: "longer", text: "Add a longer acting opioid such as hydromorphone", match: ["hydromorphone", "morphine", "longer acting", "dilaudid"] },
          { id: "pca", text: "Patient controlled analgesia", match: ["pca", "patient controlled"] },
          { id: "acet", text: "Scheduled acetaminophen or an NSAID", match: ["acetaminophen", "tylenol", "paracetamol", "nsaid", "ibuprofen", "ketorolac"] },
          { id: "cover", text: "Cover the wounds", match: ["cover", "dressing", "wrap"] },
        ],
        unacceptable: [{ text: "Stop because the maximum opioid dose is reached", match: ["maximum dose", "max dose", "ceiling reached"] }],
        explanation:
          "He is alert and breathing normally, so he can safely receive more. Opioid needs in burns are high and there is no fixed maximum when the patient is monitored. Ketamine adds analgesia and reduces opioid requirements.",
        keyFeature: { topic: "burns", n: 3 },
        source: "abls",
      },
      {
        id: "q3",
        kind: "single",
        update: "His wounds need cleaning and debridement of large blisters in the ED before transfer to the burn centre.",
        prompt: "Which is the most appropriate agent for procedural sedation during the debridement? Select one.",
        options: ["Ketamine 1 mg/kg IV", "Propofol 1 mg/kg IV alone", "Midazolam 2 mg IV alone", "Haloperidol 5 mg IV", "Lorazepam 2 mg PO"],
        correct: 0,
        explanation:
          "Ketamine provides both analgesia and sedation while keeping airway reflexes and blood pressure. Propofol and midazolam sedate without relieving pain. Sedation without analgesia for a painful procedure is inadequate care.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "green-ketamine",
      },
    ],
    sources: [ABLS, GREEN],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-12",
    topic: "analgesia-sedation",
    title: "Hard to wake after a busy shift change",
    stem:
      "A 76-year-old man with chronic kidney disease (eGFR 28) and COPD arrived 2 hours ago with three left rib fractures after a fall. The previous physician ordered morphine 10 mg IV given over 20 minutes and lorazepam 1 mg IV for anxiety. His nurse now calls you. He is difficult to rouse. Vitals: HR 64, BP 104/60, RR 6, SpO2 82% on 2 L/min nasal cannula, temperature 36.5°C. His pupils are 2 mm. GCS is 9. He weighs 68 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE immediate actions.",
        required: 3,
        accept: [
          { id: "stim", text: "Stimulate him and call for help", match: ["stimulate", "stimulation", "rouse", "sternal rub", "help"] },
          { id: "airway", text: "Open the airway with jaw thrust or chin lift", match: ["jaw thrust", "chin lift", "airway", "head tilt"] },
          { id: "bvm", text: "Assist ventilation with bag-mask and oxygen", match: ["bag", "bvm", "ventilate", "ventilation", "assist"] },
          { id: "naloxone", text: "Naloxone in small titrated IV doses", match: ["naloxone", "narcan"] },
          { id: "hold", text: "Hold further opioids and sedatives", match: ["hold", "stop", "discontinue"] },
          { id: "monitor", text: "Continuous capnography and cardiac monitoring", match: ["capnography", "etco2", "end tidal", "monitor"] },
        ],
        unacceptable: [{ text: "Naloxone 2 mg IV bolus", match: ["naloxone 2 mg", "narcan 2 mg", "2 mg naloxone"] }],
        explanation:
          "Support the airway and breathing first, then reverse. Small titrated naloxone doses restore breathing without abrupt withdrawal, severe pain or pulmonary edema. Stop all further sedating drugs.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which naloxone regimen is most appropriate? Select one.",
        options: [
          "Naloxone 0.04 to 0.1 mg IV, repeated every 2 to 3 minutes until breathing improves",
          "Naloxone 2 mg IV",
          "Naloxone 0.4 mg IM once, then discharge when awake",
          "Flumazenil 1 mg IV rapid push",
          "Naloxone 10 mg IV",
        ],
        correct: 0,
        explanation:
          "The goal is adequate breathing, not full wakefulness. Small repeated doses achieve that while preserving analgesia. Large doses cause abrupt pain and sympathetic surge in an older patient. Flumazenil can provoke seizures and is not first line.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "boyer",
      },
      {
        id: "q3",
        kind: "short",
        update: "After naloxone 0.2 mg in total, his RR is 14 and SpO2 94%. He is awake and talking.",
        prompt: "List TWO reasons he needs prolonged monitoring.",
        required: 2,
        accept: [
          { id: "duration", text: "Naloxone wears off in 30 to 90 minutes, before morphine does", match: ["wear off", "wears off", "duration", "shorter", "half life", "resedation", "renarcotization"] },
          { id: "ckd", text: "Kidney disease causes active morphine metabolites to accumulate", match: ["kidney", "renal", "metabolite", "ckd", "accumulate"] },
          { id: "benzo", text: "Lorazepam also depresses breathing and naloxone does not reverse it", match: ["lorazepam", "benzodiazepine"] },
          { id: "reserve", text: "COPD and rib fractures limit his respiratory reserve", match: ["copd", "rib", "reserve", "lung"] },
          { id: "age", text: "Older age increases sensitivity to opioids", match: ["age", "elderly", "older"] },
        ],
        explanation:
          "Naloxone is shorter acting than morphine, so resedation is expected. Morphine 6 glucuronide accumulates in kidney failure and prolongs the effect. The benzodiazepine adds unreversed respiratory depression.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO changes you would make to his analgesic plan based on how he responded.",
        required: 2,
        accept: [
          { id: "switch", text: "Avoid morphine and use a small dose of hydromorphone or fentanyl", match: ["hydromorphone", "fentanyl", "avoid morphine", "switch"] },
          { id: "acet", text: "Scheduled acetaminophen", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "block", text: "Regional block such as a serratus anterior or erector spinae plane block", match: ["block", "serratus", "erector"] },
          { id: "nobenzo", text: "Avoid combining opioids with benzodiazepines", match: ["avoid sedative", "no sedative", "avoid benzodiazepine", "no benzodiazepine", "stop benzodiazepine", "hold benzodiazepine", "avoid lorazepam", "no lorazepam", "stop lorazepam", "hold lorazepam", "discontinue lorazepam"] },
          { id: "lower", text: "Lower doses, longer intervals and reassessment with a sedation score", match: ["lower", "smaller", "reduce", "reduced", "titrate", "sedation score", "reassess"] },
          { id: "patch", text: "Lidocaine patch", match: ["lidocaine patch", "patch"] },
        ],
        unacceptable: [
          { text: "NSAID with advanced kidney disease", match: ["ketorolac", "ibuprofen", "nsaid", "naproxen"] },
          { text: "Codeine", match: ["codeine"] },
        ],
        explanation:
          "His response shows high sensitivity to morphine and benzodiazepines. Use an opioid without active renal metabolites, in small titrated doses, and add acetaminophen and a regional block for rib fractures. NSAIDs are unsafe at his level of kidney function.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "tintinalli",
      },
    ],
    sources: [TINT, BOYER],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-13",
    topic: "analgesia-sedation",
    alsoTopics: ["msk"],
    title: "Hip out after bending over",
    stem:
      "A 72-year-old man felt his hip give way while bending to tie his shoes. X-ray shows a posterior dislocation of his total hip replacement. He has hypertension and type 2 diabetes. He snores loudly but has never been tested for sleep apnea. He has a full beard and wears full dentures, which have been removed. He ate breakfast 1 hour ago. Vitals: HR 88, BP 158/90, RR 18, SpO2 95% on room air, temperature 36.8°C. He weighs 104 kg. He has had no analgesia since arrival. You plan procedural sedation with propofol.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features in this patient that predict difficult rescue bag-mask ventilation.",
        required: 3,
        accept: [
          { id: "beard", text: "Beard", match: ["beard", "mask seal"] },
          { id: "teeth", text: "No teeth", match: ["teeth", "no teeth", "edentulous", "dentures", "dentition"] },
          { id: "obese", text: "Obesity", match: ["obesity", "obese", "weight", "bmi"] },
          { id: "snore", text: "Snoring or probable sleep apnea", match: ["snoring", "snore", "sleep apnea", "osa"] },
          { id: "age", text: "Age over 55", match: ["age", "55", "older"] },
        ],
        explanation:
          "The MOANS mnemonic covers mask seal, obesity or obstruction, age over 55, no teeth and stiff lungs or snoring. He has nearly all of them. Plan for an oral airway, two-person bag-mask technique and a supraglottic airway if needed.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "caep-psa",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which statement about his recent meal is most accurate? Select one.",
        options: [
          "Sedation must be delayed until 6 hours after his meal",
          "Recent food intake is not by itself a reason to delay ED sedation, but it can be weighed with his other risk factors when choosing timing and depth",
          "He must have a nasogastric tube placed first",
          "He needs rapid sequence intubation instead of sedation",
          "Give metoclopramide and wait 30 minutes",
        ],
        correct: 1,
        explanation:
          "Evidence does not show that fasting times reduce aspiration during ED sedation, which is rare. ACEP advises against delaying sedation on fasting time alone. In a patient with several airway risk factors, it is reasonable to consider the timing and target a lighter depth.",
        keyFeature: { topic: "analgesia-sedation", n: 5 },
        source: "acep-psa",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "He has had no analgesia. List TWO ways to provide analgesia along with the propofol.",
        required: 2,
        accept: [
          { id: "fent", text: "Fentanyl 0.5 to 1 mcg/kg IV before sedation", match: ["fentanyl"] },
          { id: "opioid", text: "Another titrated IV opioid such as hydromorphone", match: ["hydromorphone", "morphine", "opioid", "dilaudid"] },
          { id: "ketamine", text: "Ketamine with propofol (ketofol)", match: ["ketamine", "ketofol"] },
          { id: "block", text: "Fascia iliaca or PENG block", match: ["block", "fascia iliaca", "peng"] },
        ],
        unacceptable: [{ text: "Propofol alone is enough", match: ["propofol alone", "propofol only", "none needed"] }],
        explanation:
          "Propofol provides amnesia but no analgesia. Relocating a hip is very painful, so give analgesia before or with the sedative. A regional block also reduces the propofol needed.",
        keyFeature: { topic: "analgesia-sedation", n: 4 },
        source: "acep-psa",
      },
      {
        id: "q4",
        kind: "short",
        update: "After propofol 80 mg IV in divided doses his BP falls to 76/40 with HR 70. SpO2 is 94%.",
        prompt: "List TWO immediate interventions.",
        required: 2,
        accept: [
          { id: "stop", text: "Stop further propofol", match: ["stop", "hold"] },
          { id: "fluid", text: "IV fluid bolus", match: ["fluid", "bolus", "saline", "ringer"] },
          { id: "pressor", text: "Phenylephrine 50 to 100 mcg IV or push-dose epinephrine 10 mcg IV", match: ["phenylephrine", "epinephrine", "pressor", "vasopressor"] },
          { id: "legs", text: "Raise the legs", match: ["leg", "trendelenburg"] },
          { id: "oxygen", text: "Ensure oxygenation and ventilation", match: ["oxygen", "ventilation"] },
        ],
        explanation:
          "Propofol causes dose related vasodilation and myocardial depression, most marked in older patients. Stop dosing, give fluid and use a small vasopressor dose if the pressure does not recover. Start older patients at lower doses and give slower increments.",
        keyFeature: { topic: "analgesia-sedation", n: 6 },
        source: "acep-psa",
      },
    ],
    sources: [CAEP, ACEP],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-14",
    topic: "analgesia-sedation",
    alsoTopics: ["abdominal-pain"],
    title: "Right sided abdominal pain",
    stem:
      "A 24-year-old woman presents with 14 hours of periumbilical pain that has moved to the right lower quadrant. She has vomited twice. She is lying still and guarding, and rates her pain 8 out of 10. Vitals: HR 104, BP 118/70, RR 18, SpO2 99% on room air, temperature 38.0°C. She weighs 58 kg. Urine beta hCG is negative. The surgical resident asks that no analgesia be given until the staff surgeon examines her in 2 hours.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "What is the most appropriate approach to her pain? Select one.",
        options: [
          "Give an IV opioid now, titrated to effect",
          "Withhold all analgesia until the surgeon examines her",
          "Give acetaminophen 325 mg PO only",
          "Give lorazepam to help her relax",
          "Give analgesia only after the CT scan",
        ],
        correct: 0,
        explanation:
          "Systematic reviews show that opioid analgesia in acute abdominal pain does not reduce diagnostic accuracy or delay treatment. Withholding it causes needless suffering. Explain the evidence to the resident and treat her now.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "manterola",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO appropriate IV analgesic options for her. Include the dose.",
        required: 2,
        accept: [
          { id: "morphine", text: "Morphine 0.1 mg/kg IV (about 5 to 6 mg), titrated", match: ["morphine"] },
          { id: "hm", text: "Hydromorphone 0.5 to 1 mg IV", match: ["hydromorphone", "dilaudid"] },
          { id: "fent", text: "Fentanyl 1 mcg/kg IV (about 50 to 60 mcg)", match: ["fentanyl"] },
          { id: "acet", text: "Acetaminophen 1 g IV", match: ["acetaminophen", "paracetamol"] },
          { id: "ketorolac", text: "Ketorolac 10 to 15 mg IV", match: ["ketorolac", "toradol", "nsaid"] },
        ],
        unacceptable: [{ text: "Intramuscular injection", match: ["intramuscular", "im"] }],
        explanation:
          "A weight based IV opioid titrated in small increments gives fast, adjustable relief. IV acetaminophen and a low dose NSAID are reasonable adjuncts. IM injections are painful and absorb unpredictably.",
        keyFeature: { topic: "analgesia-sedation", n: 3 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO ways you would reassess her response to analgesia.",
        required: 2,
        accept: [
          { id: "score", text: "Repeat pain score 15 to 30 minutes after each dose", match: ["pain score", "pain scale", "repeat", "numeric", "rating"] },
          { id: "vitals", text: "Change in heart rate and blood pressure", match: ["heart rate", "vital", "blood pressure", "tachycardia"] },
          { id: "function", text: "Function, such as ability to move, cough or tolerate the exam", match: ["function", "move", "cough", "walk", "exam"] },
          { id: "sedation", text: "Sedation level and respiratory rate", match: ["sedation", "respiratory rate", "rr", "drowsy", "oxygen saturation"] },
          { id: "goal", text: "Whether her pain is at a level she finds acceptable", match: ["acceptable", "goal", "satisfied", "satisfaction", "tolerable"] },
        ],
        explanation:
          "Pain assessment is repeated after each intervention. Combine her own score, function and her view of whether relief is adequate. Track sedation and breathing to guide safe further dosing.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "tintinalli",
      },
    ],
    sources: [MANTEROLA, TINT],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-15",
    topic: "analgesia-sedation",
    alsoTopics: ["multiple-trauma"],
    title: "Chest wall pain after a fall",
    stem:
      "An 81-year-old man fell down four stairs at home. CT shows fractures of the left 5th to 8th ribs with no pneumothorax or hemothorax. He takes apixaban for atrial fibrillation and took his last dose this morning. His eGFR is 55. He rates his pain 3 out of 10 at rest but 9 out of 10 with deep breathing and coughing. He is splinting and his cough is weak. Vitals: HR 96, BP 146/80, RR 24, SpO2 93% on room air, temperature 36.7°C. He weighs 74 kg. Incentive spirometry is 700 mL.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List TWO measures you would use to assess his pain in a way that guides treatment.",
        required: 2,
        accept: [
          { id: "dynamic", text: "Pain score with deep breathing and coughing, not just at rest", match: ["cough", "deep breath", "dynamic", "movement", "breathing"] },
          { id: "spiro", text: "Incentive spirometry volume", match: ["spirometry", "spirometer", "vital capacity", "inspiratory volume"] },
          { id: "resp", text: "Respiratory rate and oxygen saturation", match: ["respiratory rate", "rr", "saturation", "spo2", "oxygen"] },
          { id: "scale", text: "Numeric rating scale repeated after each intervention", match: ["numeric", "scale", "score", "nrs"] },
        ],
        explanation:
          "In rib fractures, pain at rest understates the problem. Pain with coughing, the ability to cough and incentive spirometry volume predict pulmonary complications. Use them to judge whether analgesia is working.",
        keyFeature: { topic: "analgesia-sedation", n: 1 },
        source: "east-ribs",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE analgesic interventions appropriate for him.",
        required: 3,
        accept: [
          { id: "block", text: "Serratus anterior plane or erector spinae plane block", match: ["serratus", "erector", "plane block", "esp", "espb", "sapb"] },
          { id: "acet", text: "Scheduled acetaminophen 1 g every 6 hours", match: ["acetaminophen", "tylenol", "paracetamol"] },
          { id: "opioid", text: "Low dose opioid titrated, such as hydromorphone 0.25 to 0.5 mg IV", match: ["hydromorphone", "opioid", "fentanyl", "morphine", "oxycodone"] },
          { id: "patch", text: "Lidocaine patch", match: ["lidocaine patch", "patch"] },
          { id: "ketamine", text: "Low dose ketamine", match: ["ketamine"] },
        ],
        unacceptable: [
          { text: "Thoracic epidural while on apixaban", match: ["epidural"], dangerous: true },
          { text: "Paravertebral block while on apixaban", match: ["paravertebral"] },
          { text: "NSAID in an older patient on an anticoagulant", match: ["ketorolac", "ibuprofen", "nsaid", "naproxen"] },
        ],
        explanation:
          "Multimodal analgesia with a fascial plane block reduces opioid needs and improves breathing. Serratus anterior and erector spinae plane blocks are superficial and compressible, so they are generally accepted on anticoagulants. ASRA treats paravertebral blocks like neuraxial blocks, and a thoracic epidural within about 72 hours of apixaban risks an epidural hematoma. NSAIDs add bleeding and kidney risk.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "asra-anticoag",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which local anesthetic volume for his serratus anterior plane block is within safe limits? Select one.",
        options: [
          "Bupivacaine 0.25%, 30 mL (75 mg)",
          "Bupivacaine 0.5%, 60 mL (300 mg)",
          "Lidocaine 2%, 40 mL (800 mg)",
          "Bupivacaine 0.5%, 50 mL (250 mg)",
          "Ropivacaine 1%, 50 mL (500 mg)",
        ],
        correct: 0,
        explanation:
          "The usual maximum for plain bupivacaine is about 2.5 mg/kg, which is 185 mg for him, and many use a ceiling of 175 mg. Older patients warrant a lower dose. Seventy-five mg leaves a wide margin. Every other choice exceeds the maximum dose for its drug and risks local anesthetic systemic toxicity.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "asra-last",
      },
    ],
    sources: [EAST, ASRA, ASRAAC],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
];
