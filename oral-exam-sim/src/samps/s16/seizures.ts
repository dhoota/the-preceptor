// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  esett: { id: "esett", citation: "Kapur J, et al. Randomized trial of three anticonvulsant medications for status epilepticus. N Engl J Med. 2019." },
  aes: { id: "aes", citation: "Glauser T, et al. Evidence-based guideline: treatment of convulsive status epilepticus in children and adults. Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016." },
  ncs: { id: "ncs", citation: "Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012." },
  cpsSe: { id: "cps-se", citation: "McKenzie KC, Hahn CD, Friedman JN. Canadian Paediatric Society, Acute Care Committee. Emergency management of the paediatric patient with convulsive status epilepticus. Paediatr Child Health. 2021.", url: "https://cps.ca/en/documents/position/emergency-management-of-the-paediatric-patient-with-convulsive-status-epilepticus" },
  trekkSe: { id: "trekk-se", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.1. 2025.", url: "https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/" },
  aapFsLong: { id: "aap-fs-long", citation: "American Academy of Pediatrics, Steering Committee on Quality Improvement and Management, Subcommittee on Febrile Seizures. Febrile seizures. Clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18519501/" },
  aapFs: { id: "aap-fs", citation: "American Academy of Pediatrics, Subcommittee on Febrile Seizures. Clinical practice guideline. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011." },
  acep: { id: "acep", citation: "American College of Emergency Physicians. Clinical policy. Critical issues in the evaluation and management of adult patients presenting to the emergency department with seizures. Ann Emerg Med. 2014." },
  aanFirst: { id: "aan-first", citation: "Krumholz A, et al. Evidence-based guideline. Management of an unprovoked first seizure in adults. American Academy of Neurology and American Epilepsy Society. Neurology. 2015." },
  cmaDriver: { id: "cma-driver", citation: "Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section.", url: "https://driversguide.ca/sections/nervous-system" },
  hta: { id: "hta", citation: "Highway Traffic Act, R.S.O. 1990, c. H.8, section 203 (Ontario). Mandatory reporting of medical conditions by physicians." },
  sogc: { id: "sogc", citation: "Magee LA, et al. Guideline No. 426. Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022." },
  goldfrank: { id: "goldfrank", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter on isoniazid and pyridoxine." },
  dcHypo: { id: "dc-hypo", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Yale JF, Paty B, Senior PA. Hypoglycemia. Can J Diabetes. 2018." },
  hypoNa: { id: "hypo-na", citation: "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014." },
  escVa: { id: "esc-va", citation: "Zeppenfeld K, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022." },
  idsaEnc: { id: "idsa-enc", citation: "Tunkel AR, et al. The management of encephalitis. Clinical practice guidelines by the Infectious Diseases Society of America. Clin Infect Dis. 2008." },
  spasms: { id: "spasms", citation: "Pellock JM, et al. Infantile spasms. A U.S. consensus report. Epilepsia. 2010." },
  cpsHsv: { id: "cps-hsv", citation: "Allen UD, Robinson JL. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Prevention and management of neonatal herpes simplex virus infections. Paediatr Child Health. 2014." },
  whoNeo: { id: "who-neo", citation: "World Health Organization. Guidelines on neonatal seizures. 2011." },
  crism: { id: "crism", citation: "Canadian Research Initiative in Substance Misuse. Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder. 2023." },
  rosen: { id: "rosen", citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter on seizures." },
} satisfies Record<string, Source>;

export const SEIZURES_SAMPS: Samp[] = [
  /* 01 Adult convulsive status epilepticus ------------------------------ */
  {
    id: "seizures-01",
    topic: "seizures",
    alsoTopics: ["airway"],
    title: "Man seizing on arrival by ambulance",
    stem:
      "A 44-year-old man arrives by ambulance with a generalized tonic clonic seizure. His partner says he seized at home, stopped briefly, then started again without waking up. Total time since the first seizure is 14 minutes. Paramedics gave midazolam 10 mg IM 7 minutes ago. He is still seizing. His respirations are shallow. Capillary glucose 6.8 mmol/L. His weight is an estimate. He has no IV yet.",
    vitals: { temperature: "37.9°C", pulse: "132/minute", resp: "8/minute", bp: "172/96 mmHg", o2sat: "87% on a non rebreather mask", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "His breathing is snoring and shallow. What interventions, other than anticonvulsant medication, would improve his oxygenation and ventilation now?",
        accept: [
          { id: "position", text: "Place in the lateral or recovery position", match: ["lateral", "recovery position", "on his side", "left lateral"] },
          { id: "suction", text: "Suction the oropharynx", match: ["suction"] },
          { id: "jaw", text: "Jaw thrust or head tilt chin lift", match: ["jaw thrust", "chin lift", "head tilt"] },
          { id: "npa", text: "Insert a nasopharyngeal airway", match: ["nasopharyngeal", "npa", "nasal airway", "nasal trumpet"] },
          { id: "bvm", text: "Assist ventilation with a bag valve mask", match: ["bag valve", "bvm", "bag mask", "assist ventilation", "bagging"] },
          { id: "rsi", text: "Prepare for rapid sequence intubation", match: ["intubate", "intubation", "rsi", "rapid sequence", "prepare to intubate"] },
          { id: "etco2", text: "Continuous capnography and oximetry monitoring", match: ["capnography", "etco2", "end tidal"] },
        ],
        unacceptable: [
          { text: "Forcing a bite block or tongue depressor between clenched teeth", match: ["bite block", "tongue depressor", "something in mouth"] },
        ],
        explanation:
          "Hypoventilation and hypoxia during a prolonged seizure are expected and are often transient. Basic manoeuvres, suction, a nasal airway and assisted ventilation usually suffice while the seizure is stopped. Plan for intubation if hypoxia persists or the seizure proves refractory. Never force objects between clenched teeth.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "ncs",
      },
      {
        id: "q2",
        kind: "single",
        update: "An IV is placed. He is still seizing 9 minutes after the IM midazolam.",
        prompt: "Which of the following is the most appropriate next medication for this patient?",
        options: [
          "Levetiracetam 1 000 mg IV",
          "Lorazepam 4 mg IV",
          "Lorazepam 10 mg IV",
          "Phenytoin 1 000 mg rapid IV push",
          "Propofol without intubation",
        ],
        correct: 1,
        explanation:
          "This is convulsive status epilepticus. The paramedic dose counts as the first benzodiazepine, so one more dose is appropriate. Lorazepam is 0.1 mg/kg IV to a maximum of 4 mg per dose. Moving straight to a fully dosed second line agent is also defensible, but levetiracetam 1 000 mg is an underdose for status. Phenytoin must never be pushed rapidly because of hypotension and arrhythmia.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "aes",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "He is still seizing 5 minutes after the lorazepam.",
        prompt: "What second line anticonvulsant, with its dose, would you give this 80 kg man?",
        accept: [
          { id: "lev", text: "Levetiracetam 60 mg/kg IV, maximum 4500 mg, so 4500 mg", match: ["levetiracetam 4500", "levetiracetam 4.5 g", "levetiracetam 60 mg/kg", "levetiracetam 60mg/kg", "keppra 4500", "keppra 60 mg/kg"] },
          { id: "fos", text: "Fosphenytoin 20 mg PE/kg IV, maximum 1500 mg PE, so 1500 mg PE", match: ["fosphenytoin 1500", "fosphenytoin 20 mg", "fosphenytoin 20mg"] },
          { id: "vpa", text: "Valproic acid 40 mg/kg IV, maximum 3000 mg, so 3000 mg", match: ["valproate 3000", "valproic 3000", "valproate 40 mg/kg", "valproic 40 mg/kg", "valproate 40mg/kg", "valproic 40mg/kg", "valproate 3 g", "valproic 3 g"] },
          { id: "phen", text: "Phenytoin 20 mg/kg IV, so 1600 mg, at no more than 50 mg per minute", match: ["phenytoin 20 mg/kg", "phenytoin 20mg/kg", "phenytoin 1600"] },
        ],
        unacceptable: [
          { text: "Levetiracetam 1000 mg or 20 mg/kg (underdosed)", match: ["levetiracetam 1000", "levetiracetam 1 g", "levetiracetam 20 mg/kg", "keppra 1000"] },
          { text: "Third benzodiazepine dose", match: ["lorazepam", "midazolam", "diazepam"] },
        ],
        explanation:
          "ESETT found levetiracetam 60 mg/kg, fosphenytoin 20 mg PE/kg and valproate 40 mg/kg equally effective, stopping about half of benzodiazepine refractory seizures. Choose by comorbidity. Avoid valproate in pregnancy and liver disease. IV valproate is available in Canada only through Health Canada's Special Access Program. Further benzodiazepines beyond two doses add respiratory depression with little benefit.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "esett",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        update: "Clinical seizure activity stops. Forty minutes later he has not woken. GCS is 6. Pupils are equal and reactive. Temperature is 38.1°C.",
        prompt: "What are the next steps in his management?",
        accept: [
          { id: "airway", text: "Intubate to protect the airway", match: ["intubate", "intubation", "secure airway", "rsi", "protect airway"] },
          { id: "eeg", text: "Urgent or continuous EEG to exclude nonconvulsive status epilepticus", match: ["eeg", "electroencephalogram"] },
          { id: "ct", text: "CT head", match: ["ct head", "ct brain", "head ct", "ct scan"] },
          { id: "lp", text: "Lumbar puncture after CT, with empiric antimicrobials", match: ["lumbar puncture", "lp"] },
          { id: "abx", text: "Empiric antibiotics and acyclovir for possible CNS infection", match: ["antibiotic", "ceftriaxone", "acyclovir", "vancomycin"] },
          { id: "labs", text: "Sodium, calcium, magnesium, CK, toxicology and antiseizure drug levels", match: ["sodium", "calcium", "magnesium", "electrolyte", "ck", "toxicology", "level"] },
          { id: "icu", text: "Admit to ICU", match: ["icu", "intensive care", "critical care"] },
        ],
        unacceptable: [{ text: "Observe and let him sleep off the postictal state", match: ["sleep it off", "observe only", "normal postictal"] }],
        explanation:
          "Failure to recover within 30 minutes after clinical seizures stop is not a normal postictal state. Up to one in seven patients has ongoing electrographic seizures after convulsive status. EEG is needed to exclude nonconvulsive status. Fever and new status also demand imaging and a search for CNS infection.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "ncs",
      },
    ],
    sources: [S.ncs, S.aes, S.esett],
    ...META,
  },

  /* 02 Paediatric status epilepticus without access -------------------- */
  {
    id: "seizures-02",
    topic: "seizures",
    title: "Toddler with ongoing jerking",
    stem:
      "A 3-year-old boy is carried in by his father. He started shaking all four limbs at home 10 minutes ago and has not stopped. He has a known seizure disorder and takes levetiracetam. He has no rescue medication at home. Two IV attempts have failed.",
    vitals: { temperature: "37.4°C", pulse: "164/minute", resp: "30/minute", o2sat: "93% on oxygen by mask", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first medication for this child?",
        options: [
          "Diazepam 3 mg rectal",
          "Lorazepam 4 mg IM",
          "Midazolam 7.5 mg intranasal",
          "Midazolam 3 mg intranasal",
          "Wait for IO access, then lorazepam",
        ],
        correct: 3,
        explanation:
          "Without IV access, intranasal or IM midazolam 0.2 mg/kg (maximum 10 mg) works as fast as IV lorazepam. For 15 kg that is 3 mg. TREKK also allows a standard 5 mg dose from 13 to 40 kg. 7.5 mg is a buccal dose, not an intranasal one. Lorazepam IM is poorly absorbed and 4 mg is over 0.1 mg/kg. Rectal diazepam is 0.5 mg/kg, so 3 mg is an underdose. Do not delay treatment waiting for access.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "trekk-se",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What bedside or rapid tests would look for a reversible cause?",
        accept: [
          { id: "glucose", text: "Point of care glucose", match: ["glucose", "sugar", "glucometer", "bg"] },
          { id: "na", text: "Sodium, by blood gas or electrolytes", match: ["sodium", "na", "electrolyte", "lyte"] },
          { id: "ca", text: "Ionized calcium", match: ["calcium", "ca"] },
          { id: "gas", text: "Venous or capillary blood gas", match: ["blood gas", "vbg", "cbg"] },
          { id: "level", text: "Antiseizure drug level if applicable", match: ["level"] },
          { id: "tox", text: "History of access to medications or toxins at home", match: ["ingestion", "toxin", "toxicology"] },
        ],
        explanation:
          "Hypoglycemia, hyponatremia and hypocalcemia are quickly found and corrected, and they will not respond to anticonvulsants alone. A blood gas analyser gives glucose, sodium and ionized calcium within minutes. Ask about accessible medications in the home.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "cps-se",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "An IO is placed. He received a second benzodiazepine dose 5 minutes ago and is still seizing. Glucose is 5.9 mmol/L.",
        prompt: "What second line medication, with its dose, would you give this 15 kg child?",
        accept: [
          { id: "lev", text: "Levetiracetam 40 to 60 mg/kg, so 600 to 900 mg IV or IO", match: ["levetiracetam 900", "levetiracetam 60 mg/kg", "levetiracetam 60mg/kg", "keppra 900", "keppra 60 mg/kg", "levetiracetam 40 mg/kg", "levetiracetam 40mg/kg", "levetiracetam 600", "keppra 40 mg/kg", "keppra 600"] },
          { id: "fos", text: "Fosphenytoin 20 mg PE/kg, so 300 mg PE", match: ["fosphenytoin 300", "fosphenytoin 20 mg", "fosphenytoin 20mg"] },
          { id: "phen", text: "Phenytoin 20 mg/kg, so 300 mg", match: ["phenytoin 300", "phenytoin 20 mg/kg", "phenytoin 20mg/kg"] },
          { id: "pb", text: "Phenobarbital 20 mg/kg, so 300 mg", match: ["phenobarbital 300", "phenobarbital 20 mg/kg", "phenobarbital 20mg/kg", "phenobarb 20 mg/kg"] },
          { id: "vpa", text: "Valproic acid 40 mg/kg, so 600 mg, if no suspicion of a metabolic or mitochondrial disorder", match: ["valproate 600", "valproic 600", "valproate 40 mg/kg", "valproic 40 mg/kg", "valproate 40mg/kg"] },
        ],
        unacceptable: [
          { text: "A third benzodiazepine dose", match: ["midazolam", "lorazepam", "diazepam"] },
        ],
        explanation:
          "After two benzodiazepine doses give a second line agent. TREKK prefers levetiracetam 60 mg/kg, maximum 3 000 mg, because it is fast and well tolerated. Some protocols use 40 mg/kg. He already takes levetiracetam. Many clinicians still give a full load, while others choose fosphenytoin. Valproate is avoided under 2 years and when a metabolic, mitochondrial or liver disorder is possible.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "cps-se",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "The seizure continues 10 minutes after the second line agent finished.",
        prompt: "What are the next steps?",
        accept: [
          { id: "second", text: "Give a different second line agent", match: ["another second line", "different second line", "fosphenytoin", "phenobarbital", "phenytoin", "levetiracetam"] },
          { id: "rsi", text: "Intubate with an induction agent that is anticonvulsant", match: ["intubate", "intubation", "rsi", "rapid sequence"] },
          { id: "infusion", text: "Start a continuous infusion such as midazolam", match: ["midazolam infusion", "midazolam drip", "continuous infusion", "ketamine infusion", "propofol infusion", "pentobarbital"] },
          { id: "picu", text: "Call PICU or a paediatric critical care transport team", match: ["picu", "critical care", "icu", "transport team", "transfer"] },
          { id: "eeg", text: "Arrange continuous EEG", match: ["eeg"] },
          { id: "neuro", text: "Consult neurology", match: ["neurology", "neurologist"] },
        ],
        explanation:
          "Status that persists after a second line agent is established status. TREKK advises a different second line agent next, then a continuous infusion with airway support and EEG monitoring if two fail. Early contact with the paediatric referral centre or transport team avoids delay.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "trekk-se",
      },
    ],
    sources: [S.trekkSe, S.cpsSe],
    ...META,
  },

  /* 03 Eclampsia -------------------------------------------------------- */
  {
    id: "seizures-03",
    topic: "seizures",
    alsoTopics: ["pre-eclampsia"],
    title: "Seizure in the third trimester",
    stem:
      "A 27-year-old woman, G1P0 at 35 weeks, has a generalized seizure in the waiting room. It lasts 90 seconds and stops on its own. She had a headache and blurred vision since yesterday. She has no history of epilepsy. She is drowsy but rousable.",
    vitals: { pulse: "108/minute", resp: "22/minute", bp: "174/112 mmHg", o2sat: "95% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What is the most important medication to give now, including the dose and route?",
        accept: [
          { id: "mg", text: "Magnesium sulfate 4 g IV over 15 to 20 minutes, then 1 g per hour", match: ["magnesium 4 g", "magnesium 4g", "mgso4 4 g", "mgso4 4g", "magnesium sulfate 4", "magnesium sulphate 4"] },
        ],
        unacceptable: [
          { text: "Benzodiazepine as the primary treatment", match: ["lorazepam", "midazolam", "diazepam"] },
          { text: "Phenytoin or levetiracetam as the primary treatment", match: ["phenytoin", "levetiracetam"] },
        ],
        explanation:
          "A seizure in late pregnancy with hypertension is eclampsia until proven otherwise. Magnesium sulfate is superior to phenytoin and diazepam for treating and preventing recurrent eclamptic seizures. Give 4 g IV loading then 1 g per hour. Benzodiazepines are reserved for seizures that persist despite magnesium.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "sogc",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What medication, with its dose and route, would lower her blood pressure?",
        accept: [
          { id: "lab", text: "Labetalol 20 mg IV, repeat with escalating doses", match: ["labetalol 20", "labetalol 10", "labetalol 200 mg po", "labetalol 200 mg oral"] },
          { id: "nif", text: "Nifedipine immediate release 10 mg orally", match: ["nifedipine 10", "nifedipine 5", "nifedipine 20"] },
          { id: "hyd", text: "Hydralazine 5 mg IV", match: ["hydralazine 5", "hydralazine 10"] },
        ],
        unacceptable: [
          { text: "Nitroprusside as first line", match: ["nitroprusside"] },
          { text: "ACE inhibitor in pregnancy", match: ["enalapril", "captopril", "ace inhibitor", "lisinopril"] },
        ],
        explanation:
          "Severe hypertension of 160/110 or more needs treatment within about 30 to 60 minutes to reduce maternal stroke risk. Labetalol IV, oral immediate release nifedipine or hydralazine IV are first line. Target a diastolic around 85. ACE inhibitors are contraindicated in pregnancy.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        update: "Twenty minutes later she has a second generalized seizure. The magnesium infusion is running.",
        prompt: "What are the steps to manage this seizure?",
        accept: [
          { id: "bolus", text: "Additional magnesium sulfate 2 g IV", match: ["magnesium 2 g", "magnesium 2g", "mgso4 2", "magnesium sulfate 2", "magnesium sulphate 2", "another magnesium", "repeat magnesium", "further magnesium"] },
          { id: "lateral", text: "Left lateral position or left uterine displacement", match: ["left lateral", "lateral", "uterine displacement", "tilt"] },
          { id: "airway", text: "Support airway and give oxygen", match: ["airway", "oxygen", "suction"] },
          { id: "benzo", text: "Benzodiazepine if seizure persists despite magnesium", match: ["lorazepam", "midazolam", "diazepam", "benzodiazepine"] },
          { id: "ob", text: "Urgent obstetric consultation for delivery once stable", match: ["obstetric", "obstetrician", "delivery", "obs"] },
        ],
        explanation:
          "Recurrent eclamptic seizures on magnesium are treated with a further 2 g IV. Positioning to the left relieves aortocaval compression and aids airway protection. A benzodiazepine is the next option only if magnesium fails. Delivery is the definitive treatment once the mother is stable.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "sogc",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "Two hours later her RR is 8 and her patellar reflexes are absent. Urine output was 15 mL in the last hour.",
        prompt: "What are the immediate actions?",
        accept: [
          { id: "stop", text: "Stop the magnesium infusion", match: ["stop magnesium", "hold magnesium", "stop infusion", "discontinue magnesium", "stop mgso4", "hold mgso4"] },
          { id: "ca", text: "Calcium gluconate 1 g IV (10 mL of 10%)", match: ["calcium gluconate", "calcium chloride", "calcium"] },
          { id: "vent", text: "Support ventilation with bag valve mask or intubation", match: ["bag valve", "bvm", "intubate", "intubation", "ventilation", "ventilate"] },
          { id: "level", text: "Check serum magnesium level and creatinine", match: ["magnesium level", "serum magnesium", "mg level", "creatinine"] },
        ],
        unacceptable: [{ text: "Continue magnesium at the same rate", match: ["continue magnesium"] }],
        explanation:
          "Loss of reflexes and respiratory depression are signs of magnesium toxicity. Oliguria reduces magnesium clearance. Stop the infusion, give calcium gluconate as the antidote and support breathing. Check the level and renal function before any restart.",
        keyFeature: { topic: "pre-eclampsia", n: 4 },
        source: "sogc",
      },
    ],
    sources: [S.sogc],
    ...META,
  },

  /* 04 Isoniazid toxicity ---------------------------------------------- */
  {
    id: "seizures-04",
    topic: "seizures",
    alsoTopics: ["tox"],
    title: "Seizures that do not stop",
    stem:
      "A 22-year-old woman is brought in by her roommate after a seizure. She has had two more generalized seizures in the emergency department over 15 minutes without waking in between. She received lorazepam 4 mg IV twice. Her roommate brings a bag of her medications. It contains an empty bottle of isoniazid 300 mg tablets, originally 60 tablets, filled 1 week ago. VBG pH 6.94, bicarbonate 7 mmol/L, lactate 14 mmol/L. Glucose 7.2 mmol/L.",
    vitals: { pulse: "126/minute", resp: "26/minute", bp: "104/60 mmHg", o2sat: "94% on oxygen", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What specific treatment does she need, including the dose?",
        accept: [
          { id: "b6", text: "Pyridoxine IV, 1 g per gram of isoniazid ingested, usually 5 g as the first dose, repeated if seizures continue", match: ["pyridoxine 5 g", "pyridoxine 5g", "pyridoxine 5000", "b6 5 g", "b6 5g", "pyridoxine 1 g per g", "pyridoxine gram", "pyridoxine 5 gram", "vitamin b6 5 g", "pyridoxine 70 mg/kg"] },
        ],
        unacceptable: [{ text: "Pyridoxine at a vitamin supplement dose such as 50 or 100 mg", match: ["pyridoxine 50 mg", "pyridoxine 100 mg", "b6 100 mg"] }],
        explanation:
          "Isoniazid depletes pyridoxal phosphate and blocks GABA synthesis, so seizures resist standard anticonvulsants. Give pyridoxine 1 g IV per gram ingested, or 5 g empirically when the amount is unknown. Up to 18 g may have been taken here, so give 5 g now and repeat if seizures persist or acidosis does not clear.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "The pharmacy stocks only 1 g of pyridoxine. What class of anticonvulsant works with pyridoxine while more is obtained?",
        accept: [
          { id: "benzo", text: "Benzodiazepines", match: ["benzodiazepine", "benzo", "lorazepam", "midazolam", "diazepam"] },
          { id: "barb", text: "Barbiturates such as phenobarbital", match: ["barbiturate", "phenobarbital", "phenobarb"] },
          { id: "propofol", text: "Propofol", match: ["propofol"] },
        ],
        unacceptable: [{ text: "Phenytoin or fosphenytoin", match: ["phenytoin", "fosphenytoin"] }],
        explanation:
          "GABA agonists act synergistically with pyridoxine. Phenytoin does not act on GABA and is ineffective for isoniazid seizures. Crushed pyridoxine tablets by nasogastric tube are an option when IV stock is short. Call the poison centre early.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "What other ingestions commonly cause seizures and need specific treatment beyond standard anticonvulsants?",
        accept: [
          { id: "tca", text: "Tricyclic antidepressants, needing sodium bicarbonate", match: ["tricyclic", "tca", "amitriptyline"] },
          { id: "bupropion", text: "Bupropion", match: ["bupropion", "wellbutrin"] },
          { id: "salicylate", text: "Salicylates, needing bicarbonate and dialysis", match: ["salicylate", "asa", "aspirin"] },
          { id: "lithium", text: "Lithium, needing hemodialysis", match: ["lithium"] },
          { id: "tramadol", text: "Tramadol", match: ["tramadol"] },
          { id: "hypoglycemic", text: "Sulfonylureas or insulin causing hypoglycemia", match: ["sulfonylurea", "insulin", "gliclazide", "glyburide"] },
          { id: "theophylline", text: "Theophylline", match: ["theophylline"] },
          { id: "withdrawal", text: "Alcohol or benzodiazepine withdrawal", match: ["withdrawal"] },
          { id: "stim", text: "Sympathomimetics such as cocaine or amphetamines", match: ["cocaine", "amphetamine", "methamphetamine", "sympathomimetic", "mdma"] },
          { id: "co", text: "Carbon monoxide", match: ["carbon monoxide", "co poisoning"] },
          { id: "local", text: "Local anesthetic systemic toxicity, needing lipid emulsion", match: ["local anesthetic", "local anaesthetic", "lidocaine", "bupivacaine"] },
        ],
        explanation:
          "Toxic seizures often need a specific antidote or elimination strategy. TCA toxicity needs bicarbonate for QRS widening. Salicylate and lithium toxicity may need dialysis. Sulfonylurea induced hypoglycemia needs dextrose and octreotide. Phenytoin is avoided in most toxic seizures.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 05 Hypoglycemic seizure -------------------------------------------- */
  {
    id: "seizures-05",
    topic: "seizures",
    title: "Seizure in a man found at work",
    stem:
      "A 58-year-old man had a generalized seizure at his warehouse job and is brought in by ambulance. The seizure has stopped. He is confused and sweaty. He has type 2 diabetes treated with metformin and gliclazide. His family doctor increased the gliclazide last week. He is not on insulin. His O2 sat is 97%. Capillary glucose 1.8 mmol/L. He has IV access.",
    vitals: { pulse: "104/minute", resp: "18/minute", bp: "152/88 mmHg", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What is the immediate treatment, including the dose and route?",
        accept: [
          { id: "d50", text: "Dextrose 25 g IV, for example 50 mL of D50W", match: ["d50", "d50w", "dextrose 50%", "amp dextrose", "dextrose 25 g", "dextrose 25g", "glucose 25 g", "glucose 25g", "50 ml 50%", "d10 250", "dextrose 10% 250"] },
        ],
        unacceptable: [
          { text: "Oral glucose in a confused patient", match: ["oral glucose", "juice", "glucose tablet"] },
          { text: "Anticonvulsant as the primary treatment", match: ["lorazepam", "levetiracetam", "phenytoin"] },
        ],
        explanation:
          "Hypoglycemia is the most rapidly reversible cause of seizure. With IV access give 25 g dextrose IV. Glucagon 1 mg IM or SC is the option without access. Oral glucose is unsafe with depressed consciousness. Anticonvulsants do not fix the cause.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "dc-hypo",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        update: "He wakes fully. His glucose is 8.4 mmol/L at 15 minutes. He wants to go back to work.",
        prompt: "Why does he need further observation or admission?",
        accept: [
          { id: "su", text: "Sulfonylurea hypoglycemia is prolonged and recurs", match: ["sulfonylurea", "gliclazide", "long acting", "recur", "recurrent", "rebound"] },
          { id: "renal", text: "Possible renal impairment reducing clearance", match: ["renal", "kidney", "creatinine"] },
          { id: "dose", text: "Recent dose increase", match: ["dose increase", "increased dose", "dose change"] },
          { id: "cause", text: "Need to find a cause such as poor intake or intercurrent illness", match: ["intake", "infection", "illness", "missed meal"] },
          { id: "seizure", text: "He had a seizure, a severe hypoglycemic event", match: ["seizure", "severe hypoglycemia"] },
        ],
        explanation:
          "Sulfonylurea hypoglycemia can recur for 24 hours or more, especially with renal impairment. Dextrose alone stimulates more insulin release. Observe with frequent glucose checks. Many centres admit after a sulfonylurea induced seizure.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "dc-hypo",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "Four hours later his glucose drops to 2.6 mmol/L despite a D10W infusion.",
        prompt: "What medication, with its dose, would prevent recurrence?",
        accept: [
          { id: "oct", text: "Octreotide 50 to 100 mcg SC or IV, repeated every 6 to 8 hours", match: ["octreotide 50", "octreotide 100", "octreotide 75"] },
        ],
        unacceptable: [{ text: "Glucagon as the sole ongoing treatment", match: ["glucagon"] }],
        explanation:
          "Octreotide inhibits pancreatic insulin release and is the treatment of choice for recurrent sulfonylurea hypoglycemia. A typical adult dose is 50 to 100 mcg SC every 6 to 8 hours. Glucagon causes only a brief rise and also stimulates insulin.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "He drives a forklift and a car. What advice about driving or safety would you give at discharge?",
        accept: [
          { id: "nodrive", text: "Do not drive until the hypoglycemia cause is fixed and he is cleared by his physician", match: ["not drive", "no driving", "stop driving", "avoid driving"] },
          { id: "report", text: "Report to the provincial licensing authority where required, and tell him a report may be made", match: ["report", "licensing", "ministry", "mto"] },
          { id: "check", text: "Check glucose before driving. Do not drive if under 4 mmol/L and keep it above 5 while driving", match: ["before driving", "check glucose", "check sugar"] },
          { id: "forklift", text: "No forklift or heavy machinery until cleared", match: ["forklift", "machinery", "no forklift", "avoid machinery", "no machinery"] },
          { id: "carry", text: "Carry fast acting carbohydrate", match: ["carbohydrate", "carry glucose", "glucose tablet"] },
        ],
        explanation:
          "Severe hypoglycemia causing loss of consciousness is a driving safety issue. Every province lets or requires physicians to report drivers who may be unsafe. In Ontario, sudden incapacitation with a moderate or high risk of recurrence is a mandatory report, while a clearly provoked event with a corrected cause may be discretionary. The regimen should be reviewed before he drives or operates machinery again.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "cma-driver",
      },
    ],
    sources: [S.dcHypo, S.goldfrank, S.cmaDriver],
    ...META,
  },

  /* 06 Hyponatremic seizure -------------------------------------------- */
  {
    id: "seizures-06",
    topic: "seizures",
    title: "Seizure after a long run",
    stem:
      "A 34-year-old woman collapsed and had a generalized seizure at the finish line of a marathon. She drank water at every station. The seizure stopped after lorazepam 2 mg IV given by paramedics. She is now drowsy, vomiting, and confused. Her O2 sat is 96%. Glucose 6.1 mmol/L. VBG sodium 117 mmol/L.",
    vitals: { temperature: "37.6°C", pulse: "96/minute", resp: "20/minute", bp: "126/78 mmHg", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What specific treatment does she need now, including the dose?",
        accept: [
          { id: "hts", text: "3% hypertonic saline 100 to 150 mL IV over 10 to 20 minutes, repeated up to 3 times as needed (2 mL/kg in a child)", match: ["3% 100", "3% saline 100", "hypertonic 100", "3% 150", "hypertonic 150", "3% 2 ml/kg", "hypertonic 2 ml/kg"] },
        ],
        unacceptable: [
          { text: "Fluid restriction alone", match: ["fluid restriction", "restrict fluid"] },
          { text: "Normal saline bolus", match: ["normal saline", "0.9%", "ns bolus"] },
        ],
        explanation:
          "Symptomatic acute hyponatremia with seizure or reduced consciousness needs hypertonic saline. Give 100 to 150 mL of 3% saline IV over 10 to 20 minutes and repeat up to 3 times until symptoms improve. A rise of 4 to 6 mmol/L is usually enough to stop seizures. Normal saline can worsen exercise associated hyponatremia.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "hypo-na",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What is the maximum rise in sodium you would allow in the first 24 hours?",
        accept: [
          { id: "ten", text: "8 to 10 mmol/L in 24 hours", match: ["10", "ten", "8", "eight"] },
        ],
        unacceptable: [{ text: "Correct to normal within 24 hours", match: ["correct to normal", "normalize", "140", "135", "20"] }],
        explanation:
          "Guidelines cap correction at 10 mmol/L in the first 24 hours and 8 more in each following 24 hours. Many clinicians aim for 8 or less in high risk patients. Acute marathon hyponatremia carries lower demyelination risk, but the limit still applies once symptoms settle.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "hypo-na",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "What other causes of hyponatremic seizures would you consider in other emergency department patients?",
        accept: [
          { id: "mdma", text: "MDMA or ecstasy use", match: ["mdma", "ecstasy", "molly"] },
          { id: "formula", text: "Infant fed diluted formula or free water", match: ["formula", "free water", "diluted"] },
          { id: "psych", text: "Psychogenic polydipsia", match: ["polydipsia", "water intoxication"] },
          { id: "siadh", text: "SIADH, for example from medications such as SSRIs or carbamazepine", match: ["siadh", "ssri", "carbamazepine", "antidiuretic"] },
          { id: "thiazide", text: "Thiazide diuretics", match: ["thiazide", "hydrochlorothiazide", "diuretic"] },
          { id: "beer", text: "Beer potomania or tea and toast diet", match: ["potomania", "tea and toast", "beer"] },
          { id: "postop", text: "Postoperative hypotonic fluids", match: ["hypotonic", "postoperative"] },
          { id: "adrenal", text: "Adrenal insufficiency", match: ["adrenal", "addison"] },
        ],
        explanation:
          "Acute hyponatremia with seizures follows rapid water loading. Common scenarios are MDMA, polydipsia, diluted infant formula and hypotonic fluids. Chronic causes such as thiazides and SIADH more often present with confusion and falls.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "hypo-na",
      },
    ],
    sources: [S.hypoNa],
    ...META,
  },

  /* 07 Convulsive syncope with long QT --------------------------------- */
  {
    id: "seizures-07",
    topic: "seizures",
    alsoTopics: ["arrhythmia"],
    title: "Collapse at the pool",
    stem:
      "A 15-year-old girl collapsed while climbing out of the pool at swim practice. Her coach saw her fall and jerk her arms for about 15 seconds. She was pale and woke within a minute. She was not confused afterward. Two months ago she fainted when her alarm clock went off. Her uncle drowned at age 30. Her O2 sat is 99%. Glucose 5.4 mmol/L. Her exam is normal.",
    vitals: { pulse: "58/minute", resp: "16/minute", bp: "112/68 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What features suggest this was not an epileptic seizure?",
        accept: [
          { id: "brief", text: "Brief jerking of about 15 seconds", match: ["brief", "short", "15 second"] },
          { id: "noconfusion", text: "Rapid recovery without postictal confusion", match: ["postictal", "no confusion", "rapid recovery", "quick recovery", "not confused"] },
          { id: "pale", text: "Pallor at the time of the event", match: ["pale", "pallor"] },
          { id: "trigger", text: "Triggered by exertion or a sudden noise", match: ["exertion", "exercise", "swim", "noise", "alarm", "startle", "trigger"] },
          { id: "fall", text: "Fall preceded the jerking", match: ["fall first", "collapse first", "fell before", "fall preceded", "fell first", "collapsed first", "fall before"] },
          { id: "fh", text: "Family history of sudden unexplained death", match: ["family history", "uncle", "sudden death"] },
        ],
        explanation:
          "Convulsive syncope causes brief myoclonic jerks with quick recovery and little postictal confusion. Exertional or startle triggered collapse, especially while swimming, suggests a channelopathy. A family history of unexplained drowning is a red flag.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "esc-va",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important in the emergency department?",
        options: [
          "12 lead ECG",
          "Noncontrast CT head",
          "Serum prolactin",
          "Sleep deprived EEG",
          "Urine drug screen",
        ],
        correct: 0,
        explanation:
          "Every patient with a first seizure or collapse needs an ECG. It is cheap and finds long QT, Brugada pattern, pre excitation and hypertrophic cardiomyopathy. Missing a channelopathy can be fatal. CT and EEG would not identify this cause.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "esc-va",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        update: "Her ECG shows sinus rhythm with a QTc of 530 ms and broad based T waves.",
        prompt: "What is the most likely diagnosis?",
        accept: [
          { id: "lqts", text: "Congenital long QT syndrome", match: ["long qt", "lqt", "lqts", "prolonged qt"] },
        ],
        unacceptable: [{ text: "Epilepsy", match: ["epilepsy"] }],
        explanation:
          "Swimming triggered events point to long QT type 1. Auditory startle triggered events point to type 2. She may have more than one trigger. The collapse was likely torsades de pointes that self terminated. Misdiagnosis as epilepsy is a well described and dangerous error.",
        keyFeature: { topic: "arrhythmia", n: 2 },
        source: "esc-va",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        prompt: "What management steps are needed before she leaves the emergency department?",
        accept: [
          { id: "bb", text: "Start a beta blocker such as nadolol or propranolol", match: ["beta blocker", "nadolol", "propranolol", "bb"] },
          { id: "monitor", text: "Cardiac monitoring and cardiology consultation or admission", match: ["cardiology", "cardiologist", "electrophysiology", "admit", "monitor", "telemetry"] },
          { id: "k", text: "Check and correct potassium and magnesium", match: ["potassium", "magnesium", "electrolyte"] },
          { id: "drugs", text: "Avoid QT prolonging drugs", match: ["qt prolonging", "avoid qt", "avoid drug", "crediblemeds"] },
          { id: "sport", text: "No swimming or competitive sport until assessed", match: ["no swimming", "avoid swimming", "no sport", "stop swimming", "restrict"] },
          { id: "family", text: "Screen first degree relatives with ECGs", match: ["family screening", "screen family", "relative", "sibling"] },
        ],
        unacceptable: [{ text: "Start an anticonvulsant", match: ["levetiracetam", "anticonvulsant", "antiepileptic", "carbamazepine"] }],
        explanation:
          "Symptomatic long QT with syncope is high risk. Beta blockade reduces events. Correct electrolytes and avoid QT prolonging drugs. Cardiology decides about further therapy such as an ICD. First degree relatives need screening.",
        keyFeature: { topic: "arrhythmia", n: 6 },
        source: "esc-va",
      },
    ],
    sources: [S.escVa],
    ...META,
  },

  /* 08 Unwitnessed event older man ------------------------------------- */
  {
    id: "seizures-08",
    topic: "seizures",
    title: "Found on the kitchen floor",
    stem:
      "A 71-year-old man was found on his kitchen floor by his daughter this morning. He does not remember what happened. He was well last night. He takes apixaban for atrial fibrillation and metoprolol. You work in Ontario. He is now alert and oriented but tired. His O2 sat is 96%. He has a bite mark on the lateral tongue, wet trousers, and holds his right arm internally rotated. He cannot externally rotate the shoulder.",
    vitals: { temperature: "36.9°C", pulse: "84/minute irregular", resp: "16/minute", bp: "148/84 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What findings in this case suggest the event was a seizure?",
        accept: [
          { id: "tongue", text: "Lateral tongue bite", match: ["tongue"] },
          { id: "incont", text: "Urinary incontinence", match: ["incontinence", "incontinent", "wet", "urinary", "urine"] },
          { id: "shoulder", text: "Posterior shoulder dislocation", match: ["shoulder", "posterior dislocation"] },
          { id: "amnesia", text: "Amnesia with fatigue suggesting a postictal state", match: ["amnesia", "postictal", "tired", "fatigue"] },
        ],
        explanation:
          "Lateral tongue biting is fairly specific for a generalized tonic clonic seizure. Incontinence is less specific. Posterior shoulder dislocation is a classic seizure injury. Seizures are often unwitnessed in older adults living alone and present as a fall.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "acep",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What imaging does his shoulder need?",
        accept: [
          { id: "xray", text: "Shoulder X-ray with an axillary or scapular Y view", match: ["axillary", "scapular y", "y view", "shoulder x ray", "shoulder xray"] },
          { id: "ct", text: "CT shoulder if plain films are unclear", match: ["ct shoulder"] },
        ],
        explanation:
          "Posterior dislocations are missed in up to half of cases on a single AP view. An axillary or scapular Y view is required. Bilateral dislocations can occur after seizures.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What investigations would find the cause of this likely first seizure?",
        accept: [
          { id: "ct", text: "Urgent non contrast CT head, given anticoagulation and age", match: ["ct head", "ct brain", "head ct", "ct scan", "ct"] },
          { id: "glucose", text: "Glucose", match: ["glucose", "sugar"] },
          { id: "na", text: "Sodium and electrolytes", match: ["sodium", "electrolyte", "lyte"] },
          { id: "ca", text: "Calcium and magnesium", match: ["calcium", "magnesium"] },
          { id: "ecg", text: "ECG", match: ["ecg", "ekg", "electrocardiogram"] },
          { id: "renal", text: "Creatinine and liver tests", match: ["creatinine", "renal", "liver"] },
          { id: "cbc", text: "CBC", match: ["cbc", "complete blood count"] },
          { id: "ck", text: "CK for rhabdomyolysis after a long lie", match: ["ck", "creatine kinase"] },
        ],
        explanation:
          "A new seizure in an older anticoagulated patient needs an urgent CT to exclude subdural or intracerebral hemorrhage. Stroke and tumour are the most common causes of late onset seizures. Glucose and sodium are the most useful labs. An ECG helps separate seizure from arrhythmic syncope.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "acep",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        update: "His CT shows an old left frontal infarct and no acute findings. Labs are normal. He is back to baseline. He drives daily.",
        prompt: "What must you tell him or do about driving?",
        accept: [
          { id: "nodrive", text: "He must not drive until cleared. That is at least 3 months for a single unprovoked seizure, and longer if epilepsy is diagnosed", match: ["not drive", "no driving", "stop driving", "avoid driving", "3 month", "three month", "6 month", "six month"] },
          { id: "report", text: "Report to the Ministry of Transportation as required under the Highway Traffic Act", match: ["report", "ministry", "mto", "highway traffic act"] },
          { id: "doc", text: "Document the advice given in the chart", match: ["document", "chart"] },
          { id: "neuro", text: "Neurology follow up is needed before clearance", match: ["neurology", "neurologist"] },
        ],
        explanation:
          "In Ontario a seizure is sudden incapacitation. Reporting is mandatory when the risk of recurrence is moderate or high. His old infarct is a structural cause, so recurrence risk is high. The CMA guide advises no private driving for at least 3 months after a single unprovoked seizure, and 6 months seizure free on treatment if epilepsy is diagnosed. Document the advice and the report.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "hta",
      },
    ],
    sources: [S.acep, S.rosen, S.hta],
    ...META,
  },

  /* 09 First unprovoked seizure, young adult --------------------------- */
  {
    id: "seizures-09",
    topic: "seizures",
    title: "Young adult after an event at a party",
    stem:
      "A 24-year-old man had a witnessed generalized tonic clonic seizure lasting 2 minutes at a friend's apartment at 01:00. He had been awake for 26 hours and had 4 beers. He denies drug use. He has no past history. He is now fully alert, 3 hours later, with a normal neurological exam. His O2 sat is 99%. He is a commercial truck driver. He also enjoys rock climbing and lake swimming.",
    vitals: { temperature: "36.8°C", pulse: "88/minute", resp: "14/minute", bp: "128/76 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following investigations are most appropriate in the emergency department?",
        options: [
          "Antiseizure drug levels",
          "Blood cultures",
          "Capillary glucose",
          "Chest radiograph",
          "Complete blood count",
          "Lumbar puncture",
          "Neuroimaging, CT or early MRI",
          "Serum prolactin",
          "Serum sodium",
          "Urine drug screen",
        ],
        correct: [2, 8, 6],
        explanation:
          "Glucose and sodium are the highest yield labs after a first seizure. Neuroimaging is recommended. CT in the ED is reasonable, or early MRI if follow up is reliable. LP is only for fever, meningism or immunosuppression. Routine drug screens and prolactin rarely change ED management.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "acep",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What outpatient investigations would you arrange?",
        accept: [
          { id: "eeg", text: "EEG", match: ["eeg", "electroencephalogram"] },
          { id: "mri", text: "MRI brain", match: ["mri"] },
          { id: "neuro", text: "First seizure clinic or neurology referral", match: ["neurology", "neurologist", "first seizure clinic", "seizure clinic"] },
        ],
        explanation:
          "EEG and MRI together estimate recurrence risk and guide treatment. An epileptiform EEG or a structural lesion raises the two year recurrence risk from about 20 to 40 percent. Referral to a first seizure clinic ensures these are done.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "aan-first",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Given his normal examination, which of the following best describes starting an antiseizure medication today?",
        options: [
          "Delaying treatment lowers long term remission",
          "Not routinely needed after a single unprovoked seizure",
          "Start levetiracetam because he drives a commercial truck",
          "Start phenytoin to prevent status epilepticus",
          "Start valproate as the drug of choice at his age",
        ],
        correct: 1,
        explanation:
          "Immediate treatment reduces early recurrence but does not change long term remission. For most patients with a single unprovoked seizure the decision can wait for neurology. Occupation affects the discussion but is not an ED indication by itself.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "aan-first",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        prompt: "What advice would you give about high risk activities?",
        accept: [
          { id: "drive", text: "No driving until cleared by neurology and the licensing authority", match: ["drive", "driving", "licence", "license", "no driving", "not drive", "no drive", "avoid driving", "stop driving"] },
          { id: "commercial", text: "Commercial licence restricted for longer, often 12 months", match: ["commercial", "truck", "12 month", "twelve month"] },
          { id: "swim", text: "No swimming alone, and supervised swimming only", match: ["swim", "swimming", "no swimming", "avoid swimming", "not swim", "never swim"] },
          { id: "heights", text: "Avoid heights and climbing", match: ["height", "climb", "climbing", "avoid height", "avoid climbing", "no climbing", "no height"] },
          { id: "bath", text: "Shower rather than bathe, with the door unlocked", match: ["shower", "bath"] },
          { id: "machine", text: "Avoid operating heavy machinery or power tools", match: ["machinery", "power tool", "avoid machinery", "no machinery", "avoid power tool"] },
          { id: "sleep", text: "Avoid sleep deprivation and excess alcohol", match: ["sleep", "alcohol", "avoid sleep deprivation", "avoid alcohol", "no alcohol", "avoid sleep"] },
        ],
        explanation:
          "Recurrence risk is highest in the first months. Avoid activities where a seizure could cause death or injury to self or others. Commercial drivers face longer restrictions, often 12 months seizure free. Sleep deprivation and alcohol lower the seizure threshold.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "cma-driver",
      },
      {
        id: "q5",
        kind: "short",
        required: 1,
        prompt: "He asks you not to tell anyone because he will lose his job. What must you do in Ontario?",
        accept: [
          { id: "report", text: "Report to the Ministry of Transportation despite his objection, as it is mandatory", match: ["report", "mto", "ministry", "notify"] },
        ],
        unacceptable: [{ text: "Keep it confidential at his request", match: ["confidential", "not report", "no report"] }],
        explanation:
          "Under the Highway Traffic Act and its regulation, sudden incapacitation with a moderate or high risk of recurrence is a mandatory report. A first unprovoked seizure is generally treated as reportable until neurology assessment shows otherwise, and he drives commercially. The duty overrides his request for confidentiality. Explain the reasons, document the discussion, and note that no action can be brought against a physician for reporting.",
        keyFeature: { topic: "seizures", n: 5 },
        source: "hta",
      },
    ],
    sources: [S.acep, S.aanFirst, S.cmaDriver, S.hta],
    ...META,
  },

  /* 10 Breakthrough seizure in known epilepsy ------------------------- */
  {
    id: "seizures-10",
    topic: "seizures",
    title: "Woman with a seizure at the mall",
    stem:
      "A 36-year-old woman with longstanding generalized epilepsy had a typical tonic clonic seizure at a shopping mall. It lasted 1 minute. She takes phenytoin 300 mg daily. She has been seizure free for 2 years. She ran out of pills 4 days ago while waiting for a refill. She is now back to baseline. Her O2 sat is 99%. Neurological exam is normal. There is no head injury. She is not pregnant by history and has an IUD.",
    vitals: { temperature: "36.7°C", pulse: "84/minute", bp: "118/72 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 2,
        prompt: "Which of the following investigations are most appropriate for this patient?",
        options: [
          "Blood cultures",
          "Capillary glucose",
          "EEG in the ED",
          "Head CT scan",
          "Lumbar puncture",
          "MRI brain",
          "Serum phenytoin level",
          "Serum prolactin",
        ],
        correct: [6, 1],
        explanation:
          "A typical breakthrough seizure with a clear cause and full recovery needs little testing. A phenytoin level confirms the likely low level and guides reloading. Glucose is quick and cheap. CT is only for new focal findings, head injury, a change in seizure pattern or prolonged recovery.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "acep",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        update: "The phenytoin level is undetectable. Albumin is normal.",
        prompt: "What is the most appropriate management of her phenytoin?",
        accept: [
          { id: "load", text: "Reload with phenytoin 15 to 20 mg/kg, oral in divided doses or IV, then resume 300 mg daily", match: ["reload", "load", "loading dose", "20 mg/kg", "15 mg/kg"] },
        ],
        unacceptable: [{ text: "Simply restart 300 mg daily with no loading", match: ["restart 300", "resume only", "no load"] }],
        explanation:
          "Phenytoin takes 1 to 2 weeks to reach steady state. A loading dose restores protection now. Oral loading in divided doses is safe for a stable patient. IV fosphenytoin is preferred if she seizes again. Then resume the maintenance dose.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "What other precipitants of breakthrough seizures would you ask about?",
        accept: [
          { id: "sleep", text: "Sleep deprivation", match: ["sleep"] },
          { id: "etoh", text: "Alcohol use or withdrawal", match: ["alcohol", "etoh", "drinking"] },
          { id: "drugs", text: "Recreational drugs", match: ["drug use", "recreational", "cannabis", "cocaine", "street drug"] },
          { id: "infection", text: "Intercurrent infection or fever", match: ["infection", "fever", "illness"] },
          { id: "interaction", text: "New medications that interact or lower the threshold", match: ["interact", "new medication", "bupropion", "antibiotic"] },
          { id: "stress", text: "Stress", match: ["stress"] },
          { id: "menses", text: "Menstrual cycle or pregnancy", match: ["menses", "menstrual", "period", "pregnancy", "pregnant"] },
          { id: "vomit", text: "Vomiting or diarrhea affecting absorption", match: ["vomit", "diarrhea", "absorption"] },
        ],
        explanation:
          "Nonadherence is the most common cause. Sleep deprivation, alcohol, infection and interacting drugs are next. A focused history avoids unnecessary tests.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "acep",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "What practical steps at discharge would prevent recurrence?",
        accept: [
          { id: "rx", text: "Provide a prescription or bridging supply", match: ["prescription", "bridging", "supply", "refill", "rx"] },
          { id: "pharm", text: "Arrange automatic refills or pharmacy reminders", match: ["pharmacy", "pharmacist", "blister", "reminder"] },
          { id: "fu", text: "Follow up with her family physician or neurologist", match: ["follow up", "family physician", "family doctor", "neurology", "neurologist"] },
          { id: "cost", text: "Address cost or access barriers", match: ["cost", "coverage", "barrier", "access"] },
          { id: "drive", text: "Driving advice and reporting as required", match: ["drive", "driving", "report"] },
        ],
        explanation:
          "Running out of medication is a system problem. A bridging prescription and pharmacy support prevent recurrence. A seizure after 2 years seizure free also affects her licence and should be addressed.",
        keyFeature: { topic: "seizures", n: 7 },
        source: "rosen",
      },
    ],
    sources: [S.acep, S.rosen],
    ...META,
  },

  /* 11 Simple febrile seizure ------------------------------------------ */
  {
    id: "seizures-11",
    topic: "seizures",
    alsoTopics: ["pediatric-fever"],
    title: "Toddler after shaking at daycare",
    stem:
      "A 20-month-old girl is brought from daycare after she stiffened and shook all four limbs for about 2 minutes. She was sleepy for 10 minutes and is now playing and smiling. She has had a runny nose and fever since last night. She is fully immunized and has no past history. Her O2 sat is 98%. She has clear rhinorrhea and red tympanic membranes without bulging. Her neck is supple. She has no rash. The neurological exam is normal.",
    vitals: { temperature: "39.6°C rectal", pulse: "142/minute", resp: "30/minute", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 3,
        prompt: "What features of her history or exam make this a simple febrile seizure?",
        accept: [
          { id: "gen", text: "Generalized from the start, with no focal features", match: ["generalized", "generalised", "all four limb", "no focal", "not focal"] },
          { id: "short", text: "Lasted under 15 minutes", match: ["15 minute", "fifteen minute", "2 minute", "two minute", "short", "brief"] },
          { id: "single", text: "Single seizure, not recurring within 24 hours", match: ["single", "one seizure", "no recurrence", "not recur", "once", "24 hour"] },
          { id: "recovery", text: "Full recovery to baseline, now playing and smiling", match: ["recovery", "recovered", "baseline", "playing", "smiling"] },
          { id: "age", text: "Age between 6 months and 5 years", match: ["age", "20 month", "6 month", "5 year", "60 month"] },
          { id: "neuro", text: "Normal neurological exam and no meningeal signs", match: ["normal neuro", "neurological exam", "supple", "no meningeal", "no meningism"] },
        ],
        explanation:
          "A simple febrile seizure is generalized, lasts under 15 minutes, does not recur within 24 hours and occurs from 6 months to 5 years of age. She has recovered fully and her exam is normal. No blood tests, LP, EEG or imaging are needed. Evaluate the fever source as for any febrile child of her age.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "aap-fs-long",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What features would make you consider a lumbar puncture in a child with a febrile seizure?",
        accept: [
          { id: "mening", text: "Meningeal signs such as neck stiffness", match: ["meningeal", "neck stiff", "nuchal", "kernig", "brudzinski", "meningism"] },
          { id: "notback", text: "Not returning to baseline or persistent drowsiness", match: ["baseline", "drowsy", "drowsiness", "lethargic", "lethargy", "altered", "not recover", "not returning", "not back"] },
          { id: "abx", text: "Pretreated with antibiotics", match: ["antibiotic", "pretreated"] },
          { id: "imm", text: "Incomplete immunization against Hib or pneumococcus", match: ["immunized", "immunization", "unimmunized", "underimmunized", "vaccine", "vaccination", "vaccinated"] },
          { id: "young", text: "Age under 12 months", match: ["12 month", "under 1", "infant", "young"] },
          { id: "complex", text: "Complex or prolonged seizure, or status", match: ["complex", "prolonged", "status", "focal"] },
          { id: "fontanelle", text: "Bulging fontanelle", match: ["fontanelle"] },
          { id: "petechiae", text: "Petechial rash", match: ["petechiae", "petechial", "purpura"] },
        ],
        explanation:
          "LP is not routine after a simple febrile seizure. It is considered with meningeal signs, failure to recover, pretreatment with antibiotics, incomplete immunization in infants, or a complex or prolonged seizure. Antibiotics can mask meningism.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "aap-fs",
      },
      {
        id: "q3",
        kind: "short",
        required: 1,
        prompt: "Her parents ask for medicine for the fever. What antipyretic, with a weight based dose, would you give her?",
        accept: [
          { id: "acet", text: "Acetaminophen 15 mg/kg, so 165 mg orally", match: ["acetaminophen 15 mg/kg", "acetaminophen 15mg/kg", "acetaminophen 160", "acetaminophen 165", "tylenol 160", "tylenol 15 mg/kg"] },
          { id: "ibu", text: "Ibuprofen 10 mg/kg, so 110 mg orally", match: ["ibuprofen 10 mg/kg", "ibuprofen 10mg/kg", "ibuprofen 100", "ibuprofen 110", "advil 10 mg/kg"] },
        ],
        unacceptable: [{ text: "ASA in a child", match: ["asa", "aspirin", "acetylsalicylic"], dangerous: true }],
        explanation:
          "Dose antipyretics by weight. Acetaminophen is 15 mg/kg every 4 to 6 hours. Ibuprofen is 10 mg/kg every 6 to 8 hours. ASA is avoided in children because of Reye syndrome. Antipyretics improve comfort but do not prevent febrile seizures.",
        keyFeature: { topic: "pediatric-fever", n: 8 },
        source: "aap-fs-long",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        prompt: "What key points would you tell her parents at discharge?",
        accept: [
          { id: "benign", text: "Febrile seizures are common and do not cause brain damage", match: ["brain damage", "benign", "common", "harmless", "no lasting", "no brain damage", "not harmful", "not cause brain damage"] },
          { id: "recur", text: "About 1 in 3 children will have another febrile seizure", match: ["recur", "another seizure", "30%", "1 in 3", "third", "again"] },
          { id: "epilepsy", text: "The risk of later epilepsy is only slightly higher than in other children", match: ["epilepsy"] },
          { id: "antipyretic", text: "Antipyretics help comfort but do not prevent recurrence", match: ["not prevent", "no prevent", "cannot prevent", "doesn t prevent", "won t prevent", "comfort"] },
          { id: "firstaid", text: "Seizure first aid. Place on side and nothing in the mouth", match: ["on side", "on her side", "recovery position", "nothing in mouth", "first aid"] },
          { id: "911", text: "Call 911 if a seizure lasts more than 5 minutes", match: ["911", "5 minute", "ambulance", "five minute"] },
          { id: "return", text: "Return for drowsiness, stiff neck, rash or breathing problems", match: ["return", "come back"] },
        ],
        unacceptable: [{ text: "Start daily anticonvulsant prophylaxis", match: ["daily anticonvulsant", "start anticonvulsant", "start phenobarbital", "start valproate", "start levetiracetam", "daily phenobarbital"] }],
        explanation:
          "Education is the main treatment. Recurrence is about 30 percent and is higher if the first seizure occurs before 18 months. Daily or intermittent anticonvulsants are not recommended. Parents need first aid and when to call 911.",
        keyFeature: { topic: "seizures", n: 8 },
        source: "aap-fs-long",
      },
    ],
    sources: [S.aapFsLong, S.aapFs],
    ...META,
  },

  /* 12 Infantile spasms ------------------------------------------------ */
  {
    id: "seizures-12",
    topic: "seizures",
    title: "Infant with episodes of crying and jerks",
    stem:
      "A 6-month-old boy is brought in by his parents for colic. For 2 weeks he has had clusters of sudden head drops with his arms flung up, about 10 at a time, mostly on waking. He cries afterward. He no longer smiles or reaches for toys as he did at 4 months. Two hypopigmented patches are seen on his back. He is well between clusters.",
    vitals: { temperature: "36.9°C", pulse: "128/minute", resp: "32/minute", weight: "7.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What is the most likely diagnosis?",
        accept: [
          { id: "is", text: "Infantile spasms (infantile epileptic spasms syndrome, West syndrome)", match: ["infantile spasm", "west syndrome", "epileptic spasm"] },
        ],
        unacceptable: [
          { text: "Colic", match: ["colic"] },
          { text: "Benign sleep myoclonus or startle", match: ["startle", "moro", "benign myoclonus"] },
        ],
        explanation:
          "Clusters of flexor or extensor spasms on waking, with developmental regression, are classic for infantile spasms. They are often mistaken for colic, reflux or startle. The hypopigmented macules suggest tuberous sclerosis as the cause.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "spasms",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What investigations or referrals would you arrange urgently?",
        accept: [
          { id: "eeg", text: "EEG within days, looking for hypsarrhythmia", match: ["eeg", "hypsarrhythmia"] },
          { id: "neuro", text: "Urgent paediatric neurology referral", match: ["neurology", "neurologist"] },
          { id: "mri", text: "MRI brain", match: ["mri"] },
          { id: "woods", text: "Wood's lamp skin exam", match: ["wood", "uv lamp"] },
          { id: "echo", text: "Echocardiogram for rhabdomyoma", match: ["echo", "echocardiogram"] },
        ],
        explanation:
          "Infantile spasms are an epileptic emergency. Delay in treatment worsens developmental outcome. An EEG and neurology review should happen within days. MRI and a Wood's lamp look for tuberous sclerosis and other structural causes.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "spasms",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations is most likely to show the underlying cause of his spasms?",
        options: [
          "CT of the head",
          "EEG in the ED",
          "Lumbar puncture",
          "Metabolic screen",
          "MRI brain",
        ],
        correct: 4,
        explanation:
          "The EEG confirms the syndrome by showing hypsarrhythmia, but it does not show the cause. MRI shows the cortical tubers and subependymal nodules of tuberous sclerosis and most other structural causes. CT misses many of these lesions and adds radiation. Metabolic tests and LP are reserved for infants with no structural cause. Vigabatrin is first line when tuberous sclerosis is the cause.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "spasms",
      },
    ],
    sources: [S.spasms],
    ...META,
  },

  /* 13 Alcohol withdrawal seizure ------------------------------------- */
  {
    id: "seizures-13",
    topic: "seizures",
    alsoTopics: ["tox"],
    title: "Seizure in a man who stopped drinking",
    stem:
      "A 49-year-old man had a witnessed generalized seizure lasting 1 minute at a shelter. He usually drinks 20 standard drinks a day. He had his last drink 30 hours ago because he ran out of money. This is his first seizure. He is now alert and tremulous. His O2 sat is 97%. He is sweating, and a CIWA-Ar score is 18. Glucose 4.6 mmol/L. There is a small abrasion over his left temple.",
    vitals: { temperature: "37.8°C", pulse: "118/minute", resp: "20/minute", bp: "164/98 mmHg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What immediate medications would you give, with the dose and route for each?",
        accept: [
          { id: "diaz", text: "Diazepam 10 to 20 mg IV or PO, repeated to CIWA-Ar under 10", match: ["diazepam 10", "diazepam 20", "valium 10", "valium 20"] },
          { id: "lzp", text: "Lorazepam 2 to 4 mg IV or SL", match: ["lorazepam 2", "lorazepam 4", "ativan 2", "ativan 4"] },
          { id: "thiamine", text: "Thiamine 100 mg or more IV", match: ["thiamine 100", "thiamine 200", "thiamine 250", "thiamine 500", "b1 100"] },
        ],
        unacceptable: [{ text: "Phenytoin for withdrawal seizures", match: ["phenytoin", "fosphenytoin"] }],
        explanation:
          "Alcohol withdrawal seizures respond to benzodiazepines. Early benzodiazepine reduces recurrence and progression to delirium tremens. Give thiamine to prevent Wernicke encephalopathy. Phenytoin does not prevent withdrawal seizures.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "crism",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging decision for this patient?",
        options: [
          "CT head in the emergency department",
          "CT head only if a second seizure occurs",
          "MRI brain as an outpatient only",
          "Skull X-ray series in the emergency department",
          "No imaging for a presumed withdrawal seizure",
        ],
        correct: 0,
        explanation:
          "A first alcohol related seizure should not be assumed to be withdrawal. People who drink heavily fall often and have high rates of subdural hematoma. A first seizure, head trauma or focal findings each justify CT. He has both a first seizure and a head abrasion.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "acep",
      },
      {
        id: "q3",
        kind: "short",
        required: 2,
        prompt: "What other conditions would you look for as the cause of his seizure or fever?",
        accept: [
          { id: "sdh", text: "Intracranial hemorrhage such as subdural hematoma", match: ["subdural", "hemorrhage", "haemorrhage", "bleed", "sdh", "hematoma"] },
          { id: "hypoNa", text: "Hyponatremia", match: ["sodium", "hyponatremia"] },
          { id: "hypoMg", text: "Hypomagnesemia", match: ["magnesium", "hypomagnesemia"] },
          { id: "infect", text: "CNS infection or aspiration pneumonia", match: ["meningitis", "infection", "pneumonia", "aspiration", "encephalitis"] },
          { id: "tox", text: "Co-ingestion or other substance withdrawal", match: ["co ingestion", "coingestion", "benzodiazepine withdrawal", "overdose", "cocaine"] },
        ],
        explanation:
          "A low grade fever may be from withdrawal, but infection must be excluded in this group. Electrolyte disorders are common in heavy drinkers and lower the seizure threshold. Head injury must be excluded before attributing the seizure to withdrawal.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "rosen",
      },
      {
        id: "q4",
        kind: "short",
        required: 2,
        prompt: "He wants to leave after his CT is normal. What factors make him high risk for complicated withdrawal?",
        accept: [
          { id: "seizure", text: "Withdrawal seizure", match: ["seizure"] },
          { id: "ciwa", text: "High CIWA-Ar score despite treatment", match: ["ciwa", "high score"] },
          { id: "vitals", text: "Autonomic instability such as tachycardia, hypertension, fever", match: ["tachycardia", "tachycardic", "hypertension", "fever", "autonomic", "vital"] },
          { id: "heavy", text: "Heavy daily drinking", match: ["heavy", "20 drink", "amount"] },
          { id: "housing", text: "Unstable housing and no supervision", match: ["housing", "shelter", "homeless", "support", "supervision"] },
          { id: "prior", text: "Prior DTs or withdrawal seizures", match: ["delirium tremens", "dts", "prior withdrawal"] },
        ],
        explanation:
          "A withdrawal seizure, high CIWA-Ar and autonomic instability predict progression to delirium tremens. He needs admission or medically supervised withdrawal, not outpatient management. Offer anticraving medication and addiction follow up once stable.",
        keyFeature: { topic: "tox", n: 8 },
        source: "crism",
      },
    ],
    sources: [S.crism, S.acep, S.rosen],
    ...META,
  },

  /* 14 Encephalitis presenting with focal seizure ---------------------- */
  {
    id: "seizures-14",
    topic: "seizures",
    alsoTopics: ["infectious-diseases"],
    title: "Confusion and a strange smell",
    stem:
      "A 52-year-old woman is brought in by her husband. For 3 days she has had fever and headache. Today she said she smelled burning rubber, then stared and smacked her lips for 1 minute, then had a generalized seizure. She is now drowsy and confused, and cannot name objects. Her O2 sat is 97%. Glucose 6.5 mmol/L. Sodium 136 mmol/L. There is no rash. Neck is mildly stiff.",
    vitals: { temperature: "38.7°C", pulse: "110/minute", resp: "18/minute", bp: "136/82 mmHg", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 1,
        prompt: "What is the most likely diagnosis?",
        accept: [
          { id: "hsv", text: "Herpes simplex encephalitis", match: ["hsv", "herpes", "encephalitis"] },
        ],
        explanation:
          "Fever, olfactory aura, focal temporal lobe seizures, aphasia and confusion point to temporal lobe involvement. HSV encephalitis is the most common treatable cause of sporadic encephalitis. Mortality is very high without early acyclovir.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "idsa-enc",
      },
      {
        id: "q2",
        kind: "short",
        required: 1,
        prompt: "What key medication would you start now, including the dose?",
        accept: [
          { id: "acv", text: "Acyclovir 10 mg/kg IV every 8 hours, so 700 mg", match: ["acyclovir 10 mg/kg", "acyclovir 10mg/kg", "acyclovir 700", "aciclovir 10 mg/kg", "aciclovir 700"] },
        ],
        unacceptable: [
          { text: "Oral valacyclovir", match: ["valacyclovir", "oral acyclovir"] },
          { text: "Wait for MRI or LP results before treating", match: ["wait"] },
        ],
        explanation:
          "Start IV acyclovir 10 mg/kg every 8 hours as soon as encephalitis is suspected. Do not wait for CT, LP or MRI. Adjust for renal function and hydrate to prevent crystal nephropathy. Add empiric bacterial meningitis coverage until the CSF is back.",
        keyFeature: { topic: "infectious-diseases", n: 1 },
        source: "idsa-enc",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        prompt: "What investigations would confirm the cause of her seizure?",
        accept: [
          { id: "ct", text: "CT head before LP given reduced consciousness and focal signs", match: ["ct"] },
          { id: "lp", text: "Lumbar puncture with cell count, protein, glucose, culture", match: ["lumbar puncture", "lp", "csf"] },
          { id: "pcr", text: "CSF HSV PCR", match: ["pcr"] },
          { id: "mri", text: "MRI brain", match: ["mri"] },
          { id: "eeg", text: "EEG", match: ["eeg"] },
          { id: "bc", text: "Blood cultures", match: ["blood culture"] },
          { id: "hiv", text: "HIV test", match: ["hiv"] },
        ],
        explanation:
          "Image first because of focal deficits and depressed consciousness. CSF HSV PCR is the diagnostic test. It may be negative very early and should be repeated if suspicion stays high. MRI shows temporal lobe changes. EEG may show periodic lateralized discharges.",
        keyFeature: { topic: "seizures", n: 6 },
        source: "idsa-enc",
      },
      {
        id: "q4",
        kind: "short",
        required: 1,
        update: "In the CT scanner she has another focal seizure that becomes generalized and lasts 4 minutes. She stops seizing after lorazepam 4 mg IV but has not recovered 20 minutes later.",
        prompt: "What medication, with its dose, would prevent further seizures?",
        accept: [
          { id: "lev", text: "Levetiracetam 60 mg/kg IV, so 4200 mg", match: ["levetiracetam 4200", "levetiracetam 60 mg/kg", "levetiracetam 60mg/kg", "keppra 60 mg/kg", "levetiracetam 4000", "levetiracetam 4 g"] },
          { id: "fos", text: "Fosphenytoin 20 mg PE/kg IV, so 1400 mg PE", match: ["fosphenytoin 1400", "fosphenytoin 20 mg", "fosphenytoin 20mg"] },
          { id: "vpa", text: "Valproic acid 40 mg/kg IV, so 2800 mg", match: ["valproate 2800", "valproic 2800", "valproate 40 mg/kg", "valproic 40 mg/kg"] },
        ],
        unacceptable: [{ text: "Levetiracetam 500 or 1000 mg", match: ["levetiracetam 500", "levetiracetam 1000", "levetiracetam 1 g"] }],
        explanation:
          "She has had a second seizure without full recovery, which meets the definition of status epilepticus. She needs a full loading dose of a second line agent after the benzodiazepine. Maintenance doses are too small to stop status.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "esett",
      },
    ],
    sources: [S.idsaEnc, S.esett],
    ...META,
  },

  /* 15 Neonatal seizures ----------------------------------------------- */
  {
    id: "seizures-15",
    topic: "seizures",
    alsoTopics: ["pediatric-fever"],
    title: "Newborn with odd movements",
    stem:
      "A 9-day-old girl is brought in because she keeps smacking her lips and her right arm jerks rhythmically for about a minute at a time. She has had three episodes today. She is breastfed and was born at term by vaginal delivery. Her mother had a genital lesion at delivery that was not tested. She is feeding less and seems sleepy. Her O2 sat is 95%. The jerking does not stop when you hold her arm.",
    vitals: { temperature: "38.2°C rectal", pulse: "176/minute", resp: "58/minute", weight: "3.2 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        required: 2,
        prompt: "What features suggest these are seizures rather than jitteriness?",
        accept: [
          { id: "restraint", text: "Jerking does not stop with gentle restraint", match: ["restrain", "restraint", "restrained", "hold", "holding", "not stop", "not suppress", "not suppressible"] },
          { id: "oral", text: "Associated lip smacking or oral automatisms", match: ["lip", "automatism", "oral"] },
          { id: "rhythm", text: "Rhythmic focal clonic movements", match: ["rhythmic", "focal", "clonic", "one arm"] },
          { id: "notstim", text: "Not provoked by stimulation", match: ["stimulation", "stimulus", "stimuli", "provoked", "not provoked", "not stimulus", "unprovoked", "spontaneous"] },
          { id: "autonomic", text: "Autonomic changes such as tachycardia or apnea", match: ["apnea", "autonomic", "tachycardia"] },
          { id: "unwell", text: "Abnormal state between episodes, sleepy and feeding poorly", match: ["sleepy", "lethargic", "feeding", "poor feeding"] },
        ],
        explanation:
          "Jitteriness is stimulus sensitive, tremulous and stops with gentle restraint. Seizures are rhythmic, often focal, and persist with restraint. Neonatal seizures are often subtle, with lip smacking, eye deviation or apnea.",
        keyFeature: { topic: "seizures", n: 1 },
        source: "who-neo",
      },
      {
        id: "q2",
        kind: "short",
        required: 2,
        prompt: "What bedside or rapid tests for reversible causes would you check first?",
        accept: [
          { id: "glucose", text: "Glucose", match: ["glucose", "sugar"] },
          { id: "ca", text: "Ionized calcium", match: ["calcium"] },
          { id: "na", text: "Sodium", match: ["sodium", "electrolyte"] },
          { id: "mg", text: "Magnesium", match: ["magnesium"] },
          { id: "gas", text: "Blood gas", match: ["blood gas", "vbg", "cbg"] },
        ],
        explanation:
          "Hypoglycemia, hypocalcemia, hypomagnesemia and sodium disorders are common and easily treated causes of neonatal seizures. A blood gas gives several of these in minutes.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "who-neo",
      },
      {
        id: "q3",
        kind: "short",
        required: 3,
        update: "Glucose, calcium and sodium are normal. She has another seizure lasting 4 minutes.",
        prompt: "What antimicrobials or antiseizure medications would you give now, with the dose for each?",
        accept: [
          { id: "pb", text: "Phenobarbital 20 mg/kg IV, so 64 mg", match: ["phenobarbital 20 mg/kg", "phenobarbital 20mg/kg", "phenobarbital 64", "phenobarb 20 mg/kg", "phenobarbital 60"] },
          { id: "acv", text: "Acyclovir 20 mg/kg IV every 8 hours, so 64 mg", match: ["acyclovir 20 mg/kg", "acyclovir 20mg/kg", "acyclovir 64", "acyclovir 60"] },
          { id: "amp", text: "Ampicillin 100 mg/kg IV (meningitic dosing)", match: ["ampicillin 100", "ampicillin 50", "ampicillin 75", "ampicillin 300"] },
          { id: "cef", text: "Cefotaxime 50 mg/kg IV, or ceftazidime 50 mg/kg if cefotaxime is short. Gentamicin 4 mg/kg is an alternative but covers meningitis poorly", match: ["cefotaxime 50", "cefotaxime 100", "gentamicin 4", "gentamicin 5", "ceftazidime 50"] },
          { id: "benzo", text: "Lorazepam 0.1 mg/kg IV or midazolam 0.1 to 0.2 mg/kg for an ongoing seizure", match: ["lorazepam 0.1", "midazolam 0.1", "midazolam 0.2", "lorazepam 0.05"] },
        ],
        unacceptable: [{ text: "Ceftriaxone in a seizing 9 day old who may need IV calcium", match: ["ceftriaxone"] }],
        explanation:
          "Phenobarbital 20 mg/kg is the usual first line neonatal anticonvulsant. A febrile neonate with seizures needs sepsis workup and empiric ampicillin plus cefotaxime or gentamicin. Maternal genital lesions, fever and seizures at day 9 make HSV likely, so give acyclovir 20 mg/kg every 8 hours. With seizures, a third generation cephalosporin is preferred over gentamicin because meningitis is possible. Ceftriaxone is avoided here because it displaces bilirubin and precipitates with IV calcium, which a seizing neonate may need. Ceftazidime is the usual substitute during cefotaxime shortages.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "cps-hsv",
      },
      {
        id: "q4",
        kind: "short",
        required: 3,
        prompt: "What investigations would find the underlying cause?",
        accept: [
          { id: "lp", text: "Lumbar puncture with CSF HSV PCR", match: ["lumbar puncture", "lp", "csf"] },
          { id: "bc", text: "Blood culture", match: ["blood culture"] },
          { id: "uc", text: "Urine culture by catheter", match: ["urine"] },
          { id: "hsv", text: "HSV swabs of skin, eyes, mouth and rectum, and blood HSV PCR", match: ["hsv", "herpes", "pcr", "swab"] },
          { id: "alt", text: "ALT for disseminated HSV", match: ["alt", "liver"] },
          { id: "cbc", text: "CBC", match: ["cbc"] },
          { id: "us", text: "Head ultrasound or MRI", match: ["ultrasound", "mri", "imaging"] },
          { id: "eeg", text: "EEG", match: ["eeg"] },
        ],
        explanation:
          "A full septic workup is mandatory in a febrile neonate. HSV testing includes CSF PCR, surface swabs, blood PCR and ALT. Neuroimaging and EEG identify stroke, hemorrhage and malformations and confirm subtle seizures.",
        keyFeature: { topic: "pediatric-fever", n: 1 },
        source: "who-neo",
      },
    ],
    sources: [S.whoNeo, S.cpsHsv],
    ...META,
  },
];
