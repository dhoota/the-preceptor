// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  ncs: { id: "ncs", citation: "Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012." },
  trinka: { id: "trinka", citation: "Trinka E, Cock H, Hesdorffer D, et al. A definition and classification of status epilepticus. Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26336950/" },
  esett: { id: "esett", citation: "Kapur J, et al. Randomized trial of three anticonvulsant medications for status epilepticus. N Engl J Med. 2019." },
  trekk: { id: "trekk", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026.", url: "https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/" },
  cfpFs: { id: "cfp-fs", citation: "Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025.", url: "https://www.cfp.ca/content/71/9/563" },
  aapFs: { id: "aap-fs", citation: "American Academy of Pediatrics, Subcommittee on Febrile Seizures. Clinical practice guideline. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011." },
  aapFsLong: { id: "aap-fs-long", citation: "American Academy of Pediatrics, Steering Committee on Quality Improvement and Management, Subcommittee on Febrile Seizures. Febrile seizures. Clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18519501/" },
  cpsMen: { id: "cps-men", citation: "Le Saux N. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age. Paediatr Child Health. 2014.", url: "https://cps.ca/en/documents/position/management-of-bacterial-meningitis" },
  aanFirst: { id: "aan-first", citation: "Krumholz A, et al. Evidence-based guideline. Management of an unprovoked first seizure in adults. American Academy of Neurology and American Epilepsy Society. Neurology. 2015." },
  fisher: { id: "fisher", citation: "Fisher RS, Acevedo C, Arzimanoglou A, et al. ILAE official report. A practical clinical definition of epilepsy. Epilepsia. 2014." },
  cma: { id: "cma", citation: "Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section.", url: "https://driversguide.ca/sections/nervous-system" },
  cmaCardio: { id: "cma-cardio", citation: "Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Cardiovascular diseases section.", url: "https://driversguide.ca/sections/cardiovascular-diseases" },
  aero: { id: "aero", citation: "Aeronautics Act, R.S.C. 1985, c. A-2, section 6.5 (Canada). Medical and optometric information. 1985, as amended.", url: "https://laws-lois.justice.gc.ca/eng/acts/A-2/section-6.5.html" },
  nice: { id: "nice", citation: "National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022.", url: "https://www.nice.org.uk/guidance/ng217" },
  goldfrank: { id: "goldfrank", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019." },
  sogc: { id: "sogc", citation: "Magee LA, et al. Guideline No. 426. Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022." },
  cvt: { id: "cvt", citation: "Field TS, Lindsay MP, Wein T, et al. Canadian Stroke Best Practice Recommendations, 7th edition. Cerebral venous thrombosis, 2024. Can J Neurol Sci. 2024.", url: "https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis" },
  csbpr: { id: "csbpr", citation: "Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024.", url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management" },
  lafrance: { id: "lafrance", citation: "LaFrance WC Jr, Baker GA, Duncan R, Goldstein LH, Reuber M. Minimum requirements for the diagnosis of psychogenic nonepileptic seizures. A staged approach. A report from the International League Against Epilepsy Nonepileptic Seizures Task Force. Epilepsia. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/24111933/" },
  ncc: { id: "ncc", citation: "White AC Jr, Coyle CM, Rajshekhar V, et al. Diagnosis and treatment of neurocysticercosis. 2017 clinical practice guidelines by the Infectious Diseases Society of America and the American Society of Tropical Medicine and Hygiene. Clin Infect Dis. 2018.", url: "https://academic.oup.com/cid/article/66/8/e49/4885412" },
  aha: { id: "aha", citation: "American Heart Association. Part 9. Adult advanced life support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376" },
  ccsSync: { id: "ccs-sync", citation: "Sheldon RS, Morillo CA, Krahn AD, et al. Standardized approaches to the investigation of syncope. Canadian Cardiovascular Society position paper. Can J Cardiol. 2011." },
  pennell: { id: "pennell", citation: "Pennell PB, Peng L, Newport DJ, et al. Lamotrigine in pregnancy. Clearance, therapeutic drug monitoring, and seizure frequency. Neurology. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18046009/" },
  pack: { id: "pack", citation: "Pack AM, Oskoui M, Williams Roberson S, et al. Teratogenesis, perinatal, and neurodevelopmental outcomes after in utero exposure to antiseizure medication. Practice guideline from the AAN, AES, and SMFM. Neurology. 2024." },
  sabers: { id: "sabers", citation: "Sabers A, Ohman I, Christensen J, Tomson T. Oral contraceptives reduce lamotrigine plasma levels. Neurology. 2003." },
  mancl: { id: "mancl", citation: "Mancl EE, Gidal BE. The effect of carbapenem antibiotics on plasma concentrations of valproic acid. Ann Pharmacother. 2009.", url: "https://doi.org/10.1345/aph.1m296" },
  payne: { id: "payne", citation: "Payne LE, Gagnon DJ, Riker RR, et al. Cefepime-induced neurotoxicity. A systematic review. Crit Care. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/29137682/" },
  fugate: { id: "fugate", citation: "Fugate JE, Rabinstein AA. Posterior reversible encephalopathy syndrome. Clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol. 2015." },
  dcHhs: { id: "dc-hhs", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/29650082/" },
  hypoNa: { id: "hypo-na", citation: "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014." },
  eddleston: { id: "eddleston", citation: "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/17706760/" },
  rose: { id: "rose", citation: "Rose JJ, Wang L, Xu Q, et al. Carbon monoxide poisoning. Pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/27753502/" },
  ward: { id: "ward", citation: "Ward LM, Gaboury I, Ladhani M, Zlotkin S. Vitamin D-deficiency rickets among children in Canada. CMAJ. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17600035/" },
  chang: { id: "chang", citation: "Chang SM, Messersmith H, Ahluwalia M, et al. Anticonvulsant prophylaxis and steroid use in adults with metastatic brain tumors. ASCO and SNO endorsement of the Congress of Neurological Surgeons guidelines. J Clin Oncol. 2019." },
  btf: { id: "btf", citation: "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Brain Trauma Foundation. Neurosurgery. 2017.", url: "https://braintrauma.org/coma/guidelines/severe-tbi" },
  starr: { id: "starr", citation: "Starr P, Klein-Schwartz W, Spiller H, et al. Incidence and onset of delayed seizures after overdoses of extended-release bupropion. Am J Emerg Med. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19857406/" },
  bullock: { id: "bullock", citation: "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Surgical Management of Traumatic Brain Injury Author Group. Neurosurgery. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16710967/" },
  rosen: { id: "rosen", citation: "Walls RM, Hockberger RS, Gausche-Hill M, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter on seizures." },
} satisfies Record<string, Source>;

const T = "seizures";

export const SEIZURES_S49: Samp[] = [
  /* 16 Nonconvulsive status in an older adult ------------------------- */
  {
    id: "seizures-16",
    topic: T,
    alsoTopics: ["delirium-agitation"],
    title: "Older woman confused for two days",
    stem:
      "A 79-year-old woman is brought to the emergency department from her long-term care home because she has been confused for 2 days. Staff describe periods when she stares and does not answer, alternating with near normal conversation. They have also noticed brief twitching of her left eyelid and the left corner of her mouth. She had a right hemispheric ischemic stroke 8 months ago with mild residual left arm weakness. She takes ASA, atorvastatin and amlodipine. Glucose 6.2 mmol/L, sodium 138 mmol/L, creatinine 88 umol/L. Calcium, CBC and urinalysis are normal. She opens her eyes to voice but does not follow commands. Rhythmic twitching of the left face comes and goes. Her neck is supple.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "142/80 mmHg", o2sat: "96% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for her fluctuating level of awareness?",
        options: [
          "Delirium from a urinary infection",
          "Hypoactive delirium from her medications",
          "Nonconvulsive status epilepticus",
          "Recurrent ischemic stroke",
          "Sundowning from vascular dementia",
        ],
        correct: 2,
        explanation:
          "Fluctuating awareness with staring spells and intermittent rhythmic twitching of the face in a patient with a prior cortical stroke points to nonconvulsive status epilepticus. The stroke is a structural focus for late onset seizures. Her urinalysis is normal, which argues against urinary infection. ASA, atorvastatin and amlodipine are not sedating or anticholinergic. A new stroke gives a fixed deficit rather than rhythmic twitching that comes and goes, and no dementia or evening pattern is described.",
        keyFeature: { topic: T, n: 1 },
        source: "ncs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important to confirm the diagnosis in this patient?",
        options: [
          "CT angiography of head and neck",
          "EEG as soon as available",
          "Lumbar puncture with cell count",
          "MRI brain with diffusion imaging",
          "Serum ammonia and liver enzymes",
        ],
        correct: 1,
        explanation:
          "Nonconvulsive status can only be confirmed on EEG, and the Neurocritical Care Society advises EEG within an hour when ongoing seizures are suspected. Clinical signs such as her facial twitching are subtle and unreliable for judging response to treatment. CT angiography looks for a vessel occlusion, which does not explain rhythmic twitching that comes and goes. She has no fever or meningism to justify lumbar puncture. MRI may show peri-ictal change but cannot confirm ongoing seizures, and nothing suggests liver disease.",
        keyFeature: { topic: T, n: 6 },
        source: "ncs",
      },
      {
        id: "q3",
        kind: "single",
        update: "EEG shows continuous right hemispheric rhythmic discharges. After lorazepam 2 mg IV the discharges pause, then return within 10 minutes. She remains drowsy.",
        prompt: "Which of the following is the most appropriate next treatment for this 60 kg patient?",
        options: [
          "Fosphenytoin 300 mg PE IV",
          "Levetiracetam 3 600 mg IV",
          "Levetiracetam 500 mg IV",
          "Midazolam infusion after intubation",
          "Propofol infusion after intubation",
        ],
        correct: 1,
        explanation:
          "Seizures that return after a benzodiazepine need a fully dosed second line agent. Levetiracetam 60 mg/kg, maximum 4 500 mg, is 60 x 60 = 3 600 mg, the dose used in ESETT. Her creatinine of 88 umol/L does not change a loading dose. Levetiracetam 500 mg is a maintenance dose and will not stop status. Fosphenytoin would be 20 mg PE/kg, or 1 200 mg PE, so 300 mg PE is an underdose. Anesthetic infusions with intubation are reserved for seizures that persist after a second line agent.",
        keyFeature: { topic: T, n: 4 },
        source: "esett",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the time after which a focal seizure with impaired awareness is considered status epilepticus?",
        options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes", "60 minutes"],
        correct: 1,
        explanation:
          "The ILAE defines time point t1, when treatment should start, as 10 minutes for focal status epilepticus with impaired awareness. Five minutes is t1 for generalized convulsive status. Thirty minutes is t2 for convulsive status, when long term injury becomes likely. For focal status with impaired awareness t2 is over 60 minutes, which is when damage is expected rather than when treatment begins. Fifteen minutes is not an ILAE time point for either type.",
        keyFeature: { topic: T, n: 3 },
        source: "trinka",
      },
    ],
    sources: [S.ncs, S.esett, S.trinka],
    ...META,
  },

  /* 17 Refractory status in a rural hospital ------------------------- */
  {
    id: "seizures-17",
    topic: T,
    alsoTopics: ["airway"],
    title: "Convulsions that continue after treatment",
    stem:
      "You are working in a rural hospital emergency department with no CT scanner and no on-site neurologist. The tertiary centre is 2 hours away by air. A 38-year-old man with known epilepsy is brought by ambulance with generalized convulsions that began 45 minutes ago. Paramedics gave midazolam 10 mg IM. In the department he received lorazepam 4 mg IV, then levetiracetam 4 500 mg IV, then fosphenytoin 1 500 mg PE IV, which finished 5 minutes ago. He is still having generalized tonic clonic movements. Capillary glucose is 7.1 mmol/L. He takes levetiracetam and lamotrigine.",
    vitals: { temperature: "38.0°C tympanic", pulse: "128/minute", resp: "10/minute", bp: "158/92 mmHg", o2sat: "88% on a non rebreather mask", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his condition at this point in his treatment?",
        options: [
          "Benzodiazepine responsive status",
          "Established status epilepticus",
          "Nonconvulsive status epilepticus",
          "Postictal state with myoclonus",
          "Refractory status epilepticus",
        ],
        correct: 4,
        explanation:
          "Status epilepticus that continues after an adequate benzodiazepine and an adequately dosed second line agent is refractory. He has had two benzodiazepine doses and two second line agents, and he is still convulsing. Established status describes seizures that persist after benzodiazepines, before a second line agent has failed. It is not nonconvulsive because tonic clonic movements are visible. A postictal state implies the seizure has ended, and it has not. He is not benzodiazepine responsive because two doses failed.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in management for this patient?",
        options: [
          "Additional lorazepam 4 mg IV",
          "Air transfer before intubation",
          "Intubation and midazolam infusion",
          "Magnesium sulfate 4 g IV",
          "Pyridoxine 5 g IV",
        ],
        correct: 2,
        explanation:
          "Refractory status needs a continuous anesthetic infusion such as midazolam, propofol or pentobarbital, and that requires a secured airway. His resp rate of 10/minute and O2 sat of 88% also call for intubation. A third benzodiazepine adds respiratory depression with little chance of success. Transfer should follow airway control and infusion, not replace them. Magnesium is for eclampsia and pyridoxine is for isoniazid toxicity, and neither is suggested here.",
        keyFeature: { topic: T, n: 4 },
        source: "ncs",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is intubated using ketamine and rocuronium. A midazolam infusion is started. Twenty minutes later he has no visible movements.",
        prompt: "Which of the following is the most important concern about his seizure control at this point?",
        options: [
          "Ketamine lowers the seizure threshold",
          "Midazolam causes paradoxical seizures",
          "Paralysis may hide ongoing seizures",
          "Rocuronium triggers malignant hyperthermia",
          "Seizure activity ends with paralysis",
        ],
        correct: 2,
        explanation:
          "Rocuronium abolishes visible convulsions but not the electrical seizure, so ongoing status can be missed. Continuous EEG is needed, and until it is available, clinical cues such as pupils, heart rate and BP changes are unreliable. Ketamine has antiseizure activity and is used for refractory status. Midazolam does not cause paradoxical seizures in this setting. Rocuronium is not a trigger for malignant hyperthermia, unlike succinylcholine. Paralysis stops movement, not seizures.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following are most appropriate to arrange for this patient during and after transfer?",
        options: [
          "Admission to an intensive care unit",
          "Continuous EEG monitoring",
          "Discontinuing the midazolam infusion",
          "Lumbar puncture before transfer",
          "Scheduled repeat doses of rocuronium",
          "Serum prolactin level",
        ],
        correct: [0, 1],
        explanation:
          "Refractory status needs ICU care with continuous EEG to titrate the infusion to seizure suppression. The midazolam infusion must continue during transport. He has no CT, so lumbar puncture before transfer is unsafe and would delay care. Repeated paralysis hides seizures further. Prolactin does not guide treatment of status epilepticus.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
    ],
    sources: [S.ncs],
    ...META,
  },

  /* 18 Bupropion overdose ------------------------------------------- */
  {
    id: "seizures-18",
    topic: T,
    alsoTopics: ["tox", "suicide-risk"],
    title: "Teenager after taking her father's pills",
    stem:
      "A 16-year-old girl is brought to the emergency department by her mother 3 hours after swallowing 20 tablets of bupropion XL 300 mg that belong to her father. She says she wanted to die. She is anxious and tremulous. While you are examining her she has a generalized tonic clonic seizure lasting 90 seconds that stops on its own. She has no past history and takes no medications. Capillary glucose is 6.4 mmol/L. After the seizure she is drowsy. Pupils are 6 mm and reactive. Her skin is warm and moist.",
    vitals: { temperature: "37.8°C oral", pulse: "132/minute", resp: "20/minute", bp: "146/88 mmHg", o2sat: "97% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Ten minutes later she has another generalized seizure. She has IV access.",
        prompt: "Which of the following is the most appropriate medication for her seizure now?",
        options: [
          "Fosphenytoin 1 100 mg PE IV",
          "Lorazepam 4 mg IV",
          "Naloxone 0.4 mg IV",
          "Physostigmine 1 mg IV",
          "Sodium bicarbonate 100 mmol IV",
        ],
        correct: 1,
        explanation:
          "Benzodiazepines are first line for toxin induced seizures. Lorazepam 0.1 mg/kg is 5.5 mg for 55 kg, so the maximum single dose of 4 mg applies. Fosphenytoin is avoided in toxicologic seizures and does not work well for them. Nothing suggests opioids, so naloxone has no role. Physostigmine can itself provoke seizures. Bicarbonate treats QRS widening, not the seizure.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk",
      },
      {
        id: "q2",
        kind: "single",
        update: "The seizure stops. Her ECG shows sinus tachycardia at 128/minute, QRS 96 ms and QTc 480 ms.",
        prompt: "Which of the following findings on a repeat ECG would most change her treatment?",
        options: [
          "QRS duration of 130 ms",
          "QTc interval of 470 ms",
          "Sinus tachycardia at 120/minute",
          "T wave inversion in V1",
          "U waves in leads V2 and V3",
        ],
        correct: 0,
        explanation:
          "Large bupropion overdoses can widen the QRS by slowing cardiac conduction, and a QRS of 130 ms calls for a trial of sodium bicarbonate, ICU monitoring and readiness for dysrhythmias. A QTc of 470 ms is shorter than her first tracing. Sinus tachycardia is expected from sympathomimetic toxicity and is already present. T wave inversion in V1 can be normal. Small U waves do not change management here.",
        keyFeature: { topic: T, n: 2 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the medical management of her ingestion?",
        options: [
          "Cardiac monitoring for at least 24 hours",
          "Discharge home after 6 seizure free hours",
          "Medical clearance after one normal ECG",
          "Observation for 4 hours then psychiatry",
          "Outpatient review with her physician",
        ],
        correct: 0,
        explanation:
          "She took about 6 000 mg of an extended release product. In a poison centre series of extended release bupropion overdoses, first seizures occurred up to 24 hours after ingestion, a third of them after 8 hours, and about half of those with seizures had more than one. She needs monitored observation for at least 24 hours. A short observation period or a single normal ECG does not exclude delayed toxicity. Her suicidal intent also requires psychiatric assessment once she is medically cleared, so outpatient follow up alone is unsafe.",
        keyFeature: { topic: T, n: 2 },
        source: "starr",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following would be most appropriate if her seizures continued after two doses of lorazepam?",
        options: [
          "Carbamazepine via nasogastric tube",
          "Flumazenil 0.2 mg IV",
          "Fosphenytoin 20 mg PE/kg IV",
          "Phenobarbital 20 mg/kg IV",
          "Physostigmine 2 mg IV",
          "Propofol infusion after intubation",
        ],
        correct: [3, 5],
        explanation:
          "Toxic seizures that persist after benzodiazepines are treated with other GABA agonists. Phenobarbital or propofol with a secured airway are the usual choices. Fosphenytoin works poorly for toxic seizures and is avoided. Flumazenil reverses the benzodiazepine and can worsen seizures. Physostigmine can provoke seizures. Oral carbamazepine is slow and unsafe in a patient who is seizing.",
        keyFeature: { topic: T, n: 4 },
        source: "goldfrank",
      },
    ],
    sources: [S.trekk, S.goldfrank, S.starr],
    ...META,
  },

  /* 19 Tricyclic overdose ------------------------------------------- */
  {
    id: "seizures-19",
    topic: T,
    alsoTopics: ["tox"],
    title: "Man found drowsy beside empty packages",
    stem:
      "A 45-year-old man is brought to the emergency department by ambulance after his wife found him drowsy with empty blister packs of amitriptyline 50 mg beside him. She estimates 60 tablets are missing, taken about 2 hours ago. He takes amitriptyline for chronic back pain. In the ambulance he had a 1 minute generalized seizure. He now responds only to pain. Pupils are 7 mm. His skin is dry and flushed. Bowel sounds are absent. Capillary glucose is 7.8 mmol/L.",
    vitals: { temperature: "37.9°C oral", pulse: "136/minute", resp: "14/minute", bp: "92/54 mmHg", o2sat: "94% on 4 L/minute by nasal prongs", weight: "85 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "His ECG shows sinus tachycardia, a QRS duration of 148 ms and a terminal R wave of 4 mm in lead aVR.",
        prompt: "Which of the following is the most appropriate immediate treatment for this patient?",
        options: [
          "Amiodarone 150 mg IV",
          "Lidocaine 100 mg IV",
          "Magnesium sulfate 2 g IV",
          "Physostigmine 2 mg IV",
          "Sodium bicarbonate 150 mmol IV",
        ],
        correct: 4,
        explanation:
          "A QRS of 148 ms with a large terminal R in aVR shows sodium channel blockade from the tricyclic. The treatment is hypertonic sodium bicarbonate, 1 to 2 mmol/kg, so 85 to 170 mmol for 85 kg. Amiodarone prolongs conduction and can worsen toxicity. Lidocaine is a second line option for dysrhythmias that persist after bicarbonate. Magnesium is for torsades, which is not present. Physostigmine can cause bradycardia and asystole in tricyclic poisoning.",
        keyFeature: { topic: T, n: 2 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        update: "Ten minutes after the bicarbonate he has another generalized seizure. It has lasted 3 minutes so far.",
        prompt: "Which of the following is the most appropriate anticonvulsant for this patient now?",
        options: [
          "Flumazenil 0.5 mg IV",
          "Fosphenytoin 1 500 mg PE IV",
          "Haloperidol 5 mg IV",
          "Lorazepam 4 mg IV",
          "Physostigmine 2 mg IV",
        ],
        correct: 3,
        explanation:
          "Benzodiazepines are first line for tricyclic seizures. Stopping the seizure quickly matters because the acidosis it causes worsens sodium channel blockade. Phenytoin also blocks sodium channels and is avoided in tricyclic poisoning. Flumazenil can precipitate seizures. Haloperidol lowers the seizure threshold and prolongs the QT. Physostigmine is dangerous with a wide QRS.",
        keyFeature: { topic: T, n: 4 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the usual target when giving repeated sodium bicarbonate for this toxicity?",
        options: [
          "Bicarbonate above 35 mmol/L",
          "Serum pH 7.50 to 7.55",
          "Serum pH 7.60 to 7.65",
          "Serum sodium above 150 mmol/L",
          "Urine pH above 8.0",
        ],
        correct: 1,
        explanation:
          "Bicarbonate is repeated to narrow the QRS and correct hypotension, keeping serum pH around 7.50 to 7.55. A pH of 7.60 or more risks severe alkalemia, hypokalemia and reduced cerebral blood flow. Sodium and bicarbonate levels are checked for safety, but high values are not the goal. Urine alkalinization is the target in salicylate poisoning, not tricyclic toxicity.",
        keyFeature: { topic: T, n: 2 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 20 Postpartum seizure -------------------------------------------- */
  {
    id: "seizures-20",
    topic: T,
    alsoTopics: ["pre-eclampsia", "headache"],
    title: "Seizure a week after delivery",
    stem:
      "A 31-year-old woman presents to the emergency department 6 days after an uncomplicated vaginal delivery with a headache that has worsened over 3 days. In the waiting room she has a generalized tonic clonic seizure lasting 2 minutes. Her pregnancy was normal and her blood pressure was normal at delivery. She is breastfeeding and takes no medications. She has no history of seizures. Twenty minutes after the seizure she is drowsy but oriented. She has mild weakness of the left leg. Urine dipstick shows 1+ protein. Capillary glucose is 5.4 mmol/L.",
    vitals: { temperature: "37.2°C oral", pulse: "104/minute", resp: "18/minute", bp: "162/104 mmHg", o2sat: "97% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to give her now?",
        options: [
          "Dexamethasone 10 mg IV",
          "Levetiracetam 4 500 mg IV",
          "Lorazepam 4 mg IV",
          "Magnesium sulfate 4 g IV",
          "Phenytoin 1 500 mg IV",
        ],
        correct: 3,
        explanation:
          "A seizure in the week after delivery with a BP of 162/104 mmHg and proteinuria must be treated as postpartum eclampsia. Magnesium sulfate 4 g IV then 1 g per hour prevents recurrence better than phenytoin or benzodiazepines. She is no longer seizing, so lorazepam is not needed now. Levetiracetam is not the treatment for eclampsia. Dexamethasone has no role in eclampsia or in the causes being considered.",
        keyFeature: { topic: T, n: 4 },
        source: "sogc",
      },
      {
        id: "q2",
        kind: "single",
        update: "Noncontrast CT head shows a hyperdense superior sagittal sinus and a small right parasagittal hemorrhage.",
        prompt: "Which of the following is the most appropriate next investigation for this patient?",
        options: [
          "Carotid duplex ultrasound",
          "Catheter cerebral angiography",
          "CT venography of the head",
          "Lumbar puncture with opening pressure",
          "Urgent EEG in the department",
        ],
        correct: 2,
        explanation:
          "A dense sagittal sinus with a parasagittal hemorrhage in the puerperium suggests cerebral venous thrombosis, which also explains her left leg weakness. Canadian guidance calls for contrast enhanced CT venography or MR venography, because noncontrast CT alone cannot rule it in or out. Carotid ultrasound assesses arteries, not venous sinuses. Catheter angiography is invasive and not first line. Lumbar puncture does not make the diagnosis. EEG would not show the cause.",
        keyFeature: { topic: T, n: 6 },
        source: "cvt",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT venography confirms thrombosis of the superior sagittal sinus. Platelets are 240 x 10^9/L. Creatinine is normal.",
        prompt: "Which of the following is the most appropriate initial treatment of the thrombosis?",
        options: [
          "Alteplase 0.9 mg/kg IV",
          "Apixaban 10 mg PO twice daily",
          "ASA 160 mg PO daily",
          "Enoxaparin 1 mg/kg SC twice daily",
          "No anticoagulation because of bleeding",
        ],
        correct: 3,
        explanation:
          "Therapeutic low molecular weight heparin should start as soon as cerebral venous thrombosis is diagnosed, and it is preferred over unfractionated heparin for most patients. Intracranial blood from the thrombosis is not a contraindication to anticoagulation. Systemic thrombolysis is not recommended. Canadian guidance finds insufficient evidence to start a DOAC without a parenteral lead-in, and DOACs are contraindicated while she is breastfeeding. ASA does not treat venous thrombosis.",
        keyFeature: { topic: T, n: 2 },
        source: "cvt",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best describes antiseizure treatment for her after this acute symptomatic seizure?",
        options: [
          "Antiseizure drug for life from today",
          "Antiseizure drug to prevent early recurrence",
          "Home rescue diazepam as sole therapy",
          "Observation until a second seizure occurs",
          "No drug because the seizure was provoked",
        ],
        correct: 1,
        explanation:
          "Canadian guidance recommends antiseizure medication after an acute symptomatic seizure from cerebral venous thrombosis, to prevent further early seizures. Long term treatment beyond 3 months is often not needed, so lifelong therapy is not decided today. Waiting for a second seizure, or relying on rescue diazepam alone, leaves her at risk during the period of highest recurrence. A provoked seizure from an ongoing structural cause still warrants treatment.",
        keyFeature: { topic: T, n: 4 },
        source: "cvt",
      },
    ],
    sources: [S.sogc, S.cvt],
    ...META,
  },

  /* 21 Absence seizures in a child ----------------------------------- */
  {
    id: "seizures-21",
    topic: T,
    title: "Girl who keeps losing track at school",
    stem:
      "A 7-year-old girl is brought to the emergency department by her father after she walked into a parked bicycle while staring. For a month her teacher has reported that she stops mid-sentence and stares for about 10 seconds many times a day, then carries on as if nothing happened. She does not fall or shake. Her grades have dropped, and her family doctor suggested an attention disorder. She has had no vomiting or fever. She is otherwise healthy and takes no medications. She is alert and interactive. She has a small abrasion on her forehead. The neurological examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "20/minute", bp: "102/64 mmHg", weight: "24 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside manoeuvres would best support the suspected diagnosis in this child?",
        options: [
          "Checking orthostatic vital signs",
          "Gentle limb restraint during an event",
          "Glabellar tap testing",
          "Hyperventilation for 3 minutes",
          "Visual tracking of a moving object",
        ],
        correct: 3,
        explanation:
          "Many brief daily staring spells with abrupt return to activity suggest absence seizures, which are easily mistaken for inattention. Having the child hyperventilate for about 3 minutes often provokes an absence at the bedside. Orthostatic vitals assess syncope, and she has no falls. Gentle restraint separates jitteriness from seizures in newborns. A glabellar tap and visual tracking test other neurological functions and do not provoke absences.",
        keyFeature: { topic: T, n: 1 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation for this child?",
        options: [
          "Electrolytes, calcium and glucose",
          "Emergency CT of the head",
          "Outpatient EEG with hyperventilation",
          "Urgent MRI brain today",
          "Urine toxicology screen",
        ],
        correct: 2,
        explanation:
          "Her many daily spells mean this is not a first seizure, and a routine awake EEG with provoking manoeuvres such as hyperventilation supports the diagnosis and shows the seizure type, here the typical generalized discharges of absence epilepsy. NICE advises this EEG when the history suggests epileptic seizures. It can be done as an outpatient because she is well with a normal examination. Blood tests and imaging are guided by specific findings, such as vomiting, dehydration, a focal deficit or failure to return to baseline, and she has none. Nothing in her history suggests a toxic exposure.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her father asks what she can safely do while she waits for her neurology appointment.",
        prompt: "Which of the following activity advice is most appropriate for her?",
        options: [
          "Avoid all physical activity",
          "Bathe instead of showering",
          "Keep her home from school",
          "Ride her bicycle on roads alone",
          "Swim only with close supervision",
        ],
        correct: 4,
        explanation:
          "Brief lapses of awareness are dangerous in water, so swimming should be supervised. NICE advises showers rather than baths for people with seizures because of drowning risk. She can stay at school and remain active, since restricting all activity harms her without adding safety. Her walk into a bicycle shows that riding alone on roads is unsafe until her seizures are controlled.",
        keyFeature: { topic: T, n: 5 },
        source: "nice",
      },
    ],
    sources: [S.rosen, S.nice],
    ...META,
  },

  /* 22 Simple febrile seizure, community hospital ------------------- */
  {
    id: "seizures-22",
    topic: T,
    alsoTopics: ["pediatric-fever"],
    title: "Toddler with a cold and a seizure at home",
    stem:
      "You are working in a community hospital emergency department. A 19-month-old boy is brought in by his parents after a seizure at home 40 minutes ago. His mother saw him stiffen and then jerk all four limbs for about 3 minutes. He was sleepy for 15 minutes afterward. He has had cough and runny nose for 2 days and felt hot this morning. He is fully immunized, developing normally and has no past history. He has not had antibiotics. He is now alert, playful and drinking. He has clear rhinorrhea and mild pharyngeal redness. His neck is supple. There is no rash. The neurological examination is normal.",
    vitals: { temperature: "39.1°C rectal", pulse: "138/minute", resp: "30/minute", o2sat: "98% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for this child?",
        options: [
          "CBC and blood culture",
          "EEG within 48 hours",
          "Electrolytes, calcium and glucose",
          "Lumbar puncture and CSF culture",
          "No investigations",
        ],
        correct: 4,
        explanation:
          "A generalized seizure of 3 minutes with full recovery in a 19-month-old with fever is a simple febrile seizure, and the source is a viral upper respiratory infection. Routine blood work is not recommended, because electrolyte problems cause under 1% of febrile seizures and serious bacterial infection is no more common than with fever alone. EEG and neuroimaging are not part of the workup. He is immunized, has not had antibiotics and has no meningeal signs, so lumbar puncture is not indicated.",
        keyFeature: { topic: T, n: 8 },
        source: "cfp-fs",
      },
      {
        id: "q2",
        kind: "single",
        update: "His mother asks whether this is likely to happen again.",
        prompt: "Which of the following factors, if present, would most increase his risk of another febrile seizure?",
        options: [
          "Family history of febrile seizures",
          "Fever above 40°C at the seizure",
          "Fever for 3 days before the seizure",
          "Up to date immunizations",
          "Viral cause of the fever",
        ],
        correct: 0,
        explanation:
          "A family history of febrile seizures is an established risk factor for recurrence. Other risk factors are onset before 18 months, a lower temperature at the time of the seizure and a short interval between fever onset and the seizure. A fever above 40°C and a long febrile period before the seizure are linked with lower recurrence. Immunization status and a viral cause do not raise recurrence risk.",
        keyFeature: { topic: T, n: 8 },
        source: "aap-fs-long",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about medication at discharge?",
        options: [
          "Daily levetiracetam for 6 months",
          "Fever medicine for comfort only",
          "Intranasal midazolam kit for home",
          "Oral diazepam during each fever",
          "Scheduled ibuprofen to prevent seizures",
        ],
        correct: 1,
        explanation:
          "Antipyretics can be used to keep him comfortable, but they do not prevent febrile seizures, so scheduled dosing for prevention is not advised. The side effects of continuous or intermittent antiseizure medication outweigh the small risks of a future simple febrile seizure. A home rescue benzodiazepine is not routine after a single brief simple febrile seizure.",
        keyFeature: { topic: T, n: 8 },
        source: "aap-fs-long",
      },
      {
        id: "q4",
        kind: "menu",
        select: 3,
        prompt: "Which of the following features would have made this a complex rather than a simple febrile seizure?",
        options: [
          "Age of 19 months at onset",
          "Family history of epilepsy",
          "Focal onset of the seizure",
          "Postictal sleep of 15 minutes",
          "Second seizure within 24 hours",
          "Seizure lasting 20 minutes",
          "Temperature above 40°C",
          "Viral illness as the cause",
        ],
        correct: [2, 4, 5],
        explanation:
          "A simple febrile seizure is generalized, lasts under 15 minutes and does not recur within 24 hours in a child aged 6 months to 5 years. Focal onset, a duration of 20 minutes or a second seizure within 24 hours each make it complex. His age is within the usual range. A short postictal sleep is expected. Family history, a high temperature and a viral cause do not change the classification.",
        keyFeature: { topic: T, n: 8 },
        source: "cfp-fs",
      },
    ],
    sources: [S.cfpFs, S.aapFsLong],
    ...META,
  },

  /* 23 Febrile status epilepticus ------------------------------------ */
  {
    id: "seizures-23",
    topic: T,
    alsoTopics: ["pediatric-fever"],
    title: "Feverish toddler still jerking on arrival",
    stem:
      "A 2-year-old girl is brought to the emergency department by ambulance with a seizure that started 18 minutes ago. She has had fever since yesterday. Her mother saw her stiffen and then jerk all four limbs. Paramedics gave midazolam 2.5 mg intranasal 8 minutes ago. She is still jerking all four limbs with her eyes deviated to the right. She is fully immunized and has no past history. An IV was placed on arrival. Capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "39.8°C rectal", pulse: "170/minute", resp: "28/minute", o2sat: "92% on 10 L/minute by non rebreather mask", weight: "13 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes her condition at this time?",
        options: [
          "Convulsive status epilepticus",
          "Febrile delirium with rigors",
          "Postictal automatisms",
          "Sepsis with myoclonic jerks",
          "Simple febrile seizure",
        ],
        correct: 0,
        explanation:
          "A convulsive seizure lasting more than 5 minutes is status epilepticus, whatever its trigger. Fever does not make an 18 minute seizure simple, because simple febrile seizures last under 15 minutes and she is still seizing. Rhythmic jerking of all limbs with eye deviation is seizure activity, not rigors or delirium. Postictal automatisms occur after a seizure ends.",
        keyFeature: { topic: T, n: 3 },
        source: "trekk",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication for her now?",
        options: [
          "Diazepam 6.5 mg rectal",
          "Levetiracetam 780 mg IV",
          "Lorazepam 1.3 mg IV",
          "Lorazepam 4 mg IV",
          "Phenobarbital 260 mg IV",
        ],
        correct: 2,
        explanation:
          "She has had one benzodiazepine dose, and TREKK advises a second dose before a second line agent. With IV access, lorazepam 0.1 mg/kg is 1.3 mg for 13 kg. Lorazepam 4 mg is the adult maximum and three times her dose. Rectal diazepam is slower and less effective when IV access is available. Levetiracetam and phenobarbital are second line drugs, given if seizures continue after two benzodiazepine doses.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk",
      },
      {
        id: "q3",
        kind: "single",
        update: "Five minutes after the lorazepam she is still seizing.",
        prompt: "Which of the following is the most appropriate next medication for this child?",
        options: [
          "Fosphenytoin 130 mg PE IV",
          "Levetiracetam 780 mg IV",
          "Lorazepam 1.3 mg IV",
          "Midazolam infusion at 0.1 mg/kg/hour",
          "Phenobarbital 60 mg IV",
        ],
        correct: 1,
        explanation:
          "After two benzodiazepine doses, TREKK prefers levetiracetam 60 mg/kg IV, maximum 3 000 mg, which is 780 mg for 13 kg. A third benzodiazepine increases the risk of apnea. Fosphenytoin at 130 mg PE is 10 mg PE/kg, half the loading dose. Phenobarbital 60 mg is well below 20 mg/kg. An infusion is third line, after two second line agents fail.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk",
      },
    ],
    sources: [S.trekk],
    ...META,
  },

  /* 24 Febrile seizure in an unimmunized infant on antibiotics ------- */
  {
    id: "seizures-24",
    topic: T,
    alsoTopics: ["pediatric-fever"],
    title: "Infant with ear pain and a seizure",
    stem:
      "A 9-month-old boy is brought to the emergency department after a 2 minute generalized seizure at home 1 hour ago. He has had fever for 3 days. A walk-in clinic diagnosed otitis media 2 days ago and started amoxicillin. His parents chose to delay vaccines, and he has received none. He is now sleepy but rousable, feeding poorly and irritable when handled. His anterior fontanelle is full. There is no rash. Both tympanic membranes are dull. He moves all limbs equally.",
    vitals: { temperature: "38.9°C rectal", pulse: "172/minute", resp: "40/minute", o2sat: "97% on room air", weight: "8.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly argues against managing this as a simple febrile seizure?",
        options: [
          "Age of 9 months at the seizure",
          "Duration of 2 minutes",
          "Full fontanelle and irritability",
          "Generalized seizure activity",
          "Temperature of 38.9°C",
        ],
        correct: 2,
        explanation:
          "A full fontanelle, irritability when handled and poor feeding an hour after the seizure suggest meningitis, so he has not made the full recovery expected after a simple febrile seizure. An age of 9 months falls within the 6 month to 5 year range. A generalized seizure of 2 minutes fits the simple definition. The height of the fever does not decide whether a febrile seizure is simple.",
        keyFeature: { topic: T, n: 8 },
        source: "aap-fs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his evaluation?",
        options: [
          "Blood culture and lumbar puncture",
          "Change to amoxicillin clavulanate",
          "EEG before discharge",
          "Outpatient review in 24 hours",
          "Urine culture only",
        ],
        correct: 0,
        explanation:
          "He has meningeal signs, so lumbar puncture is needed. Even without them, the AAP lists lumbar puncture as an option for an infant of 6 to 12 months who is not immunized against Haemophilus influenzae type b and pneumococcus, and for a child pretreated with antibiotics, which can mask meningitis. Changing the oral antibiotic or arranging outpatient review delays the diagnosis. EEG does not identify infection. A urine culture alone misses meningitis.",
        keyFeature: { topic: T, n: 6 },
        source: "aap-fs",
      },
      {
        id: "q3",
        kind: "single",
        update: "Blood culture is drawn. The CSF is cloudy with 1 400 x 10^6/L white cells, mostly neutrophils.",
        prompt: "Which of the following empiric antimicrobial regimens is most appropriate for this infant?",
        options: [
          "Ampicillin and gentamicin IV",
          "Ceftriaxone and vancomycin IV",
          "High dose oral amoxicillin",
          "Piperacillin tazobactam IV",
          "Vancomycin alone IV",
        ],
        correct: 1,
        explanation:
          "The CPS recommends a third generation cephalosporin plus vancomycin for suspected bacterial meningitis in children beyond the first month, to cover cephalosporin resistant pneumococcus. An unimmunized infant is also at risk of Haemophilus influenzae type b. Ampicillin and gentamicin is a neonatal regimen with poor CSF coverage here. Oral amoxicillin has already failed and does not treat meningitis. Piperacillin tazobactam is not a meningitis regimen. Vancomycin alone misses Haemophilus and meningococcus.",
        keyFeature: { topic: T, n: 2 },
        source: "cps-men",
      },
    ],
    sources: [S.aapFs, S.cpsMen],
    ...META,
  },

  /* 25 First afebrile seizure in a school-age child ------------------ */
  {
    id: "seizures-25",
    topic: T,
    title: "Boy found stiff and jerking in bed",
    stem:
      "A 9-year-old boy is brought to the emergency department by his parents after they heard a noise from his bedroom at 06:00 and found him stiff and jerking all four limbs. It lasted about 2 minutes. He was confused for 20 minutes and now, 2 hours later, is back to his usual self. He has had no fever, headache, vomiting or recent illness. He has no past history, his development is normal and he takes no medications. There was no head injury. He has bitten the side of his tongue. The neurological examination is normal.",
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "18/minute", bp: "104/66 mmHg", o2sat: "99% on room air", weight: "30 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for investigating this seizure?",
        options: [
          "CT head before discharge",
          "Electrolytes, glucose and CBC",
          "Lumbar puncture before discharge",
          "MRI brain before discharge",
          "Outpatient EEG and neurology review",
        ],
        correct: 4,
        explanation:
          "He has had a first unprovoked generalized seizure and has fully recovered with a normal examination. Most children should have an outpatient EEG, and neurology follow up decides on MRI. Routine blood work is not recommended without vomiting, dehydration or failure to return to baseline. Urgent imaging is kept for red flags such as a focal deficit or persistent altered mental status. He has no fever or meningism, so lumbar puncture is not indicated.",
        keyFeature: { topic: T, n: 6 },
        source: "cfp-fs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings, had it been present, would most justify urgent neuroimaging?",
        options: [
          "Family history of epilepsy",
          "Lateral tongue bite",
          "Persistent left arm weakness",
          "Postictal confusion of 20 minutes",
          "Seizure on waking from sleep",
        ],
        correct: 2,
        explanation:
          "A persistent focal neurological deficit after a first seizure is a red flag for a structural lesion and justifies urgent imaging. A family history of epilepsy and a seizure on waking do not suggest a lesion needing emergency care. A lateral tongue bite supports that the event was a seizure but does not predict an imaging finding. Brief postictal confusion that resolves is expected.",
        keyFeature: { topic: T, n: 6 },
        source: "cfp-fs",
      },
      {
        id: "q3",
        kind: "single",
        update: "His parents ask how to keep him safe over the coming weeks.",
        prompt: "Which of the following is the most appropriate safety advice for him?",
        options: [
          "Avoid all school sports",
          "Climb freely at the playground",
          "Stay home from school for a month",
          "Swim alone at the public pool",
          "Take showers rather than baths",
        ],
        correct: 4,
        explanation:
          "Showers are safer than baths because a seizure in a bath can cause drowning. Swimming should be supervised, not done alone. Climbing above his own height should be supervised. Excluding him from school or from all sports adds harm without a clear safety gain.",
        keyFeature: { topic: T, n: 5 },
        source: "nice",
      },
    ],
    sources: [S.cfpFs, S.nice],
    ...META,
  },

  /* 26 Hypocalcemic seizures in an infant ---------------------------- */
  {
    id: "seizures-26",
    topic: T,
    title: "Infant with jerking of one side",
    stem:
      "A 4-month-old boy is brought to the emergency department after three episodes today of rhythmic jerking of his right arm and leg, each lasting about 1 minute. Between episodes he feeds well. He was born at term and is exclusively breastfed. He has received no vitamin D supplement. His family lives in northern Manitoba, and he has had little sun exposure this winter. There is no fever, vomiting or diarrhea. He is alert with a soft fontanelle. His wrists appear widened. Capillary glucose is 4.8 mmol/L.",
    vitals: { temperature: "36.8°C rectal", pulse: "150/minute", resp: "36/minute", o2sat: "99% on room air", weight: "6.8 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Venous blood shows ionized calcium 0.72 mmol/L (normal 1.10 to 1.30), sodium 139 mmol/L and magnesium 0.80 mmol/L.",
        prompt: "Which of the following is the most appropriate immediate treatment for this infant?",
        options: [
          "IV calcium gluconate with monitoring",
          "IV levetiracetam loading dose",
          "IV magnesium sulfate bolus",
          "IV phenobarbital loading dose",
          "Oral vitamin D 400 IU daily",
        ],
        correct: 0,
        explanation:
          "His seizures are caused by severe hypocalcemia, a quickly reversible cause that anticonvulsants will not correct. Slow IV calcium gluconate with cardiac monitoring treats the cause. Levetiracetam and phenobarbital do not correct the calcium. His magnesium of 0.80 mmol/L is normal, so magnesium is not needed. Oral vitamin D is part of later treatment but acts far too slowly to stop seizures.",
        keyFeature: { topic: T, n: 2 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely underlying cause of his hypocalcemia?",
        options: [
          "Congenital hypoparathyroidism",
          "Magnesium deficiency",
          "Nutritional vitamin D deficiency",
          "Pseudohypoparathyroidism",
          "Renal tubular acidosis",
        ],
        correct: 2,
        explanation:
          "An exclusively breastfed infant with no vitamin D supplement, little sun exposure, a northern home and widened wrists fits vitamin D deficiency rickets. Canadian surveillance found hypocalcemic seizures were a common presentation of rickets in infants. His magnesium is normal. Congenital hypoparathyroidism usually presents earlier and does not cause rickets. Pseudohypoparathyroidism and renal tubular acidosis are rare and not suggested by this history.",
        keyFeature: { topic: T, n: 6 },
        source: "ward",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would most likely have prevented this presentation?",
        options: [
          "Calcium supplement for the mother",
          "Earlier introduction of cow's milk",
          "Switching to soy based formula",
          "Vitamin D 400 IU daily from birth",
          "Weekly sun exposure through a window",
        ],
        correct: 3,
        explanation:
          "In the Canadian surveillance study no rickets occurred in breastfed children who received regular vitamin D 400 IU daily. Breast milk alone does not supply enough vitamin D. Maternal calcium does not correct infant vitamin D deficiency. Cow's milk is not advised in the first year. Formula change is not needed for a breastfed infant. Window glass blocks the ultraviolet light needed to make vitamin D.",
        keyFeature: { topic: T, n: 2 },
        source: "ward",
      },
    ],
    sources: [S.rosen, S.ward],
    ...META,
  },

  /* 27 Breakthrough seizure in pregnancy ----------------------------- */
  {
    id: "seizures-27",
    topic: T,
    alsoTopics: ["pre-eclampsia"],
    title: "Pregnant woman with a seizure after years without one",
    stem:
      "A 29-year-old woman at 26 weeks of gestation is brought to the emergency department after a generalized tonic clonic seizure at home that lasted 2 minutes. She has had focal to bilateral seizures since age 15, controlled on lamotrigine 200 mg twice daily with no seizures for 3 years. Her dose has not changed during pregnancy and she has not missed doses. Her pregnancy has otherwise been normal, and she has no contractions. She has no headache or visual symptoms. She is now alert and oriented with a normal neurological examination. Urine dipstick shows no protein. Fetal heart rate is 145/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "16/minute", bp: "118/72 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her breakthrough seizure?",
        options: [
          "Early onset eclampsia",
          "Falling lamotrigine levels",
          "Gestational hyponatremia",
          "Nonadherence to lamotrigine",
          "Sleep loss from late pregnancy",
        ],
        correct: 1,
        explanation:
          "Lamotrigine clearance rises steeply during pregnancy, so levels fall when the dose is unchanged. Seizures become more likely when the level drops well below her own prepregnancy target. Eclampsia is unlikely with a BP of 118/72 mmHg, no proteinuria and no headache. She reports taking every dose. Nothing suggests hyponatremia or unusual sleep loss.",
        keyFeature: { topic: T, n: 7 },
        source: "pennell",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most useful for her ongoing management?",
        options: [
          "CT head with abdominal shielding",
          "EEG in the department",
          "Lamotrigine serum level",
          "Serum prolactin level",
          "Urine toxicology screen",
        ],
        correct: 2,
        explanation:
          "A lamotrigine level compared with her prepregnancy level guides the dose increase she needs, and monitoring levels through pregnancy reduces seizures. She has known epilepsy, a typical seizure, full recovery and a normal examination, so neuroimaging adds little. An EEG in the department will not change management. Prolactin and toxicology screening do not help when the cause is clear.",
        keyFeature: { topic: T, n: 7 },
        source: "pennell",
      },
      {
        id: "q3",
        kind: "single",
        update: "Two hours later she has another generalized seizure that continues 6 minutes after lorazepam 4 mg IV.",
        prompt: "Which of the following second line agents is most appropriate for her?",
        options: [
          "Fosphenytoin 360 mg PE IV",
          "Lamotrigine 200 mg PO",
          "Levetiracetam 4 320 mg IV",
          "Phenobarbital 100 mg IV",
          "Valproic acid 2 880 mg IV",
        ],
        correct: 2,
        explanation:
          "Levetiracetam 60 mg/kg is 4 320 mg for 72 kg, under the 4 500 mg maximum, and it has one of the lowest risks of fetal malformation. Valproic acid 40 mg/kg is a correct status dose, but valproate carries the highest risk of major malformations and neurodevelopmental harm and should be avoided in pregnancy. Fosphenytoin 360 mg PE is 5 mg PE/kg, a quarter of the loading dose. Phenobarbital 100 mg is far below 20 mg/kg. Oral lamotrigine cannot be given to a seizing patient.",
        keyFeature: { topic: T, n: 4 },
        source: "pack",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is also required while her seizures are being treated?",
        options: [
          "Delay drugs until obstetrics arrives",
          "Emergency cesarean delivery",
          "Supine positioning for airway",
          "Tocolysis with nifedipine",
          "Uterine displacement and fetal monitoring",
        ],
        correct: 4,
        explanation:
          "At 26 weeks the uterus compresses the vena cava when she lies supine, so left lateral tilt or manual uterine displacement protects cardiac output. The fetus is viable, so fetal heart monitoring and obstetric involvement are needed. Treatment of status must not wait for obstetrics. Emergency delivery is not a treatment for maternal status epilepticus, which is stopped with drugs first. She has no contractions, so tocolysis has no role.",
        keyFeature: { topic: T, n: 4 },
        source: "rosen",
      },
    ],
    sources: [S.pennell, S.pack, S.rosen],
    ...META,
  },

  /* 28 Valproate and carbapenem ------------------------------------- */
  {
    id: "seizures-28",
    topic: T,
    title: "Seizures after a recent hospital stay",
    stem:
      "A 58-year-old man with generalized epilepsy is brought to the emergency department by ambulance after two generalized seizures today. He recovered fully between them. He has been seizure free for 4 years on valproic acid 1 000 mg twice daily. Five days ago he was discharged from hospital after treatment of a complicated urinary infection, and home care is giving him IV ertapenem daily. He reports taking every valproic acid dose. He is now alert with a normal neurological examination. There was no head injury. Capillary glucose is 6.0 mmol/L.",
    vitals: { temperature: "37.0°C oral", pulse: "92/minute", resp: "16/minute", bp: "136/82 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "His valproic acid level is 95 umol/L. His level 6 months ago was 480 umol/L on the same dose.",
        prompt: "Which of the following is the most likely cause of his low valproic acid level?",
        options: [
          "Carbapenem drug interaction",
          "Enzyme induction by the infection",
          "Laboratory error in the assay",
          "Malabsorption from the illness",
          "Unreported missed doses",
        ],
        correct: 0,
        explanation:
          "Carbapenems such as ertapenem and meropenem cause a rapid and marked fall in valproic acid levels, often within a day of starting. His level fell from 480 to 95 umol/L while taking the same dose, and the timing matches the ertapenem course. Infection does not induce valproate metabolism to this degree. He reports full adherence, and nothing suggests malabsorption or a laboratory error.",
        keyFeature: { topic: T, n: 7 },
        source: "mancl",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage this interaction?",
        options: [
          "Continue and recheck in a week",
          "Double the valproic acid dose",
          "Give an IV valproic acid load",
          "Stop valproic acid permanently",
          "Switch to a non carbapenem antibiotic",
        ],
        correct: 4,
        explanation:
          "Raising the valproate dose or giving a load does not reliably overcome the interaction, and levels may stay low for days after the carbapenem stops. The best step is to switch to an antibiotic from another class that treats his infection, with a bridging antiseizure drug if needed. Continuing unchanged leaves him at risk of more seizures. Valproate controlled his epilepsy for 4 years, so stopping it permanently is not warranted.",
        keyFeature: { topic: T, n: 7 },
        source: "mancl",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best reflects the need for neuroimaging in this patient today?",
        options: [
          "CT head because he is over 50",
          "CT head for any seizure cluster",
          "MRI brain before discharge",
          "Not needed given the clear cause",
          "Urgent CT angiography",
        ],
        correct: 3,
        explanation:
          "In known epilepsy, a typical seizure with a clear precipitant, full recovery, no head injury and a normal examination does not need emergency neuroimaging. His falling valproate level explains the cluster. Age alone is not an indication for CT in a patient with established epilepsy. MRI and CT angiography answer questions that his presentation does not raise.",
        keyFeature: { topic: T, n: 7 },
        source: "rosen",
      },
    ],
    sources: [S.mancl, S.rosen],
    ...META,
  },

  /* 29 Known epilepsy in a child after home rescue ------------------- */
  {
    id: "seizures-29",
    topic: T,
    title: "Boy with epilepsy home from camp",
    stem:
      "A 12-year-old boy with focal epilepsy is brought to the emergency department by his mother after a seizure at home. He had one of his typical focal seizures that became generalized and lasted 7 minutes, until she gave his prescribed intranasal midazolam 5 mg. He missed several evening doses of levetiracetam this week at a sleepover camp. He has had no fever, vomiting or head injury. Capillary glucose in the ambulance was 5.8 mmol/L. Now, 90 minutes later, he is awake, oriented and at his neurological baseline. His neck is supple.",
    vitals: { temperature: "37.0°C oral", pulse: "94/minute", resp: "18/minute", bp: "108/66 mmHg", o2sat: "98% on room air", weight: "40 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 1,
        prompt: "Which of the following investigations is required in the emergency department for this boy?",
        options: [
          "CBC with differential",
          "CT head without contrast",
          "Electrolytes and glucose",
          "Emergency department EEG",
          "Levetiracetam serum level",
          "Lumbar puncture and CSF",
          "Urine toxicology screen",
          "None",
        ],
        correct: [7],
        explanation:
          "He had a typical seizure with a clear trigger, missed doses, and has returned to baseline with a normal glucose. TREKK reserves CT for trauma, raised intracranial pressure or focal signs, and lumbar puncture for suspected meningitis, and he has none of these. Drug levels are suggested for agents such as phenytoin, carbamazepine, phenobarbital and valproic acid, not levetiracetam. Blood work, EEG and toxicology screening would not change his care.",
        keyFeature: { topic: T, n: 7 },
        source: "trekk",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for his levetiracetam?",
        options: [
          "Change to a different drug",
          "Double the dose for one week",
          "Resume usual dose with adherence plan",
          "Stop it and refer to neurology",
          "Switch to phenytoin today",
        ],
        correct: 2,
        explanation:
          "Missed doses explain this seizure, and the drug has controlled his epilepsy well when taken. Resuming the usual dose, with a plan such as reminders and supervised dosing away from home, addresses the cause. Changing or stopping an effective drug, or switching to phenytoin, adds risk without benefit. Doubling the dose adds side effects without evidence of benefit.",
        keyFeature: { topic: T, n: 7 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about his rescue medication at home?",
        options: [
          "Give a second dose every 5 minutes at home",
          "Give midazolam if a seizure lasts 5 minutes",
          "Give midazolam only after 15 minutes",
          "Rescue kit is no longer needed",
          "Wait for paramedics before any dose",
        ],
        correct: 1,
        explanation:
          "Treatment should start within about 5 minutes of seizure onset, because delay makes seizures harder to stop. Waiting 15 minutes or waiting for paramedics loses that window. TREKK advises no more than two benzodiazepine doses because of apnea risk, so repeated home doses are unsafe. His seizure today needed the kit, so it is still needed.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk",
      },
    ],
    sources: [S.trekk, S.rosen],
    ...META,
  },

  /* 30 Events with unusual features --------------------------------- */
  {
    id: "seizures-30",
    topic: T,
    title: "Woman with a long event and closed eyes",
    stem:
      "A 26-year-old woman is brought to the emergency department by ambulance with a seizure that has lasted 25 minutes. Paramedics gave midazolam 10 mg IM. She has had several similar events in the past year and takes levetiracetam, although an earlier EEG was normal. During the event her eyes are tightly closed and she resists eye opening. Her head moves from side to side and her pelvis thrusts. The movements wax and wane, and they pause briefly when her name is called. Her colour is good. Capillary glucose is 5.2 mmol/L.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "20/minute", bp: "128/80 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of this event most suggests a psychogenic nonepileptic seizure?",
        options: [
          "Eyes forcibly closed",
          "Heart rate of 104/minute",
          "Normal capillary glucose",
          "Prior similar events",
          "Urinary incontinence",
        ],
        correct: 0,
        explanation:
          "Forced eye closure with resistance to opening during an event favours a psychogenic nonepileptic seizure, as do side to side head movements, pelvic thrusting and waxing and waning activity. Eyes are usually open in generalized epileptic seizures. A mild tachycardia, a normal glucose and prior events occur with both kinds of event. Incontinence can occur in either and does not separate them.",
        keyFeature: { topic: T, n: 1 },
        source: "lafrance",
      },
      {
        id: "q2",
        kind: "single",
        update: "Five minutes later the movements continue unchanged. She breathes regularly between thrusts, her O2 sat stays at 99% on room air and her pupils are reactive.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Fosphenytoin 1 280 mg PE IV",
          "Intubation and propofol infusion",
          "Lorazepam 4 mg IV",
          "Observation with EEG if available",
          "Sternal rub and ammonia capsules",
        ],
        correct: 3,
        explanation:
          "After 30 minutes of generalized movements she still has regular breathing, an O2 sat of 99% and reactive pupils, she reacts to her name, and the features point to a nonepileptic event. Generalized epileptic convulsions of this length often cause desaturation or cyanosis. Repeated benzodiazepines, loading doses and intubation expose patients with nonepileptic events to real harm, so supportive observation is appropriate. EEG during an event is the best test when there is doubt, and escalation is resumed if it shows seizure activity or her condition changes. Painful or noxious stimuli are unhelpful and damage trust.",
        keyFeature: { topic: T, n: 3 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        update: "The event stops after 10 more minutes. She is alert and asks what is happening to her.",
        prompt: "Which of the following is the most appropriate way to discuss the likely diagnosis with her?",
        options: [
          "Avoid discussing it until she leaves",
          "Explain it as a real, treatable condition",
          "Increase the levetiracetam dose",
          "Stop levetiracetam today",
          "Tell her the event was faked",
        ],
        correct: 1,
        explanation:
          "Psychogenic nonepileptic seizures are involuntary, and a clear, respectful explanation that the condition is real and treatable improves engagement with care. The diagnosis should be confirmed with video EEG through neurology. Stopping levetiracetam in the emergency department is premature, because some patients have both epileptic and nonepileptic events. Raising the dose treats the wrong problem. Calling the event faked is inaccurate and harmful.",
        keyFeature: { topic: T, n: 1 },
        source: "lafrance",
      },
    ],
    sources: [S.lafrance, S.rosen],
    ...META,
  },

  /* 31 Collapse with jerking in an older man ------------------------- */
  {
    id: "seizures-31",
    topic: T,
    alsoTopics: ["arrhythmia", "loc"],
    title: "Older man slumping in his chair",
    stem:
      "You are working in a community hospital emergency department. An 81-year-old man is brought in by his wife after two episodes today in which he suddenly slumped in his chair, went grey and had a few jerks of his arms for about 15 seconds. Each time he woke within a minute and was not confused. He had a similar episode last week. He takes ramipril and atorvastatin. His wife asks whether he is having seizures. He is alert and oriented. The neurological examination is normal. Capillary glucose is 6.3 mmol/L.",
    vitals: { temperature: "36.6°C oral", pulse: "34/minute", resp: "16/minute", bp: "96/50 mmHg", o2sat: "95% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features best distinguishes these episodes from generalized seizures?",
        options: [
          "Age of more than 80 years",
          "Events occurring while seated",
          "Normal capillary glucose level",
          "Rapid recovery without confusion",
          "Several events over one week",
        ],
        correct: 3,
        explanation:
          "Brief jerks with pallor and recovery within a minute without confusion are typical of convulsive syncope, while a generalized seizure is usually followed by postictal confusion. His age, a normal glucose and repeated events occur with both. Seizures can also happen while seated, so posture does not separate the two, but sudden collapse while seated raises concern for an arrhythmia.",
        keyFeature: { topic: T, n: 1 },
        source: "ccs-sync",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important for him now?",
        options: [
          "CT head without contrast",
          "ECG with rhythm strip",
          "EEG before discharge",
          "Orthostatic vital signs",
          "Troponin and CK levels",
        ],
        correct: 1,
        explanation:
          "A pulse of 34/minute with hypotension and recurrent collapse points to a bradyarrhythmia, and an ECG with a rhythm strip is the key test for syncope. Orthostatic vitals help in suspected orthostatic syncope but will not explain a pulse of 34. CT and EEG look for neurological causes that his normal examination and rapid recovery do not suggest. Cardiac markers do not identify the rhythm.",
        keyFeature: { topic: T, n: 2 },
        source: "ccs-sync",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows complete heart block with a wide complex escape rhythm at 34/minute. Atropine 1 mg IV has no effect. He becomes grey and drowsy.",
        prompt: "Which of the following is the most appropriate next step in his treatment?",
        options: [
          "Adenosine 6 mg IV",
          "Amiodarone 150 mg IV",
          "Calcium chloride 1 g IV",
          "Procainamide 1 g IV",
          "Transcutaneous pacing",
        ],
        correct: 4,
        explanation:
          "Unstable bradycardia that does not respond to atropine needs transcutaneous pacing, or a dopamine or epinephrine infusion, while transvenous pacing is arranged. A wide complex escape rhythm in complete heart block often does not respond to atropine. Adenosine, amiodarone and procainamide slow conduction and could cause asystole. Calcium is for hyperkalemia or calcium channel blocker toxicity, and neither is suggested.",
        keyFeature: { topic: T, n: 2 },
        source: "aha",
      },
    ],
    sources: [S.ccsSync, S.aha],
    ...META,
  },

  /* 32 Cocaine with hyperthermia ------------------------------------- */
  {
    id: "seizures-32",
    topic: T,
    alsoTopics: ["tox", "environmental"],
    title: "Agitated man brought in by police",
    stem:
      "A 33-year-old man is brought to the emergency department by police after he was found agitated in a downtown alley. Friends told police he had been using cocaine all night. Police held him face down for 10 minutes before the ambulance arrived. On arrival he has a generalized tonic clonic seizure that stops after 2 minutes. He is diaphoretic and confused. Pupils are 7 mm. Capillary glucose is 5.9 mmol/L.",
    vitals: { temperature: "41.2°C rectal", pulse: "148/minute", resp: "28/minute", bp: "188/110 mmHg", o2sat: "95% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "After the seizure he becomes combative and pulls at his IV.",
        prompt: "Which of the following is the most appropriate medication for him now?",
        options: [
          "Diazepam 10 mg IV",
          "Haloperidol 10 mg IM",
          "Labetalol 20 mg IV",
          "Metoprolol 5 mg IV",
          "Phenytoin 1 600 mg IV",
        ],
        correct: 0,
        explanation:
          "Benzodiazepines treat the seizures, agitation, tachycardia and hypertension of cocaine toxicity, and they reduce heat production from muscle activity. Haloperidol lowers the seizure threshold and impairs heat loss. Beta blockers are avoided in acute cocaine toxicity because of concern for unopposed alpha stimulation, and sedation often controls the BP. Phenytoin is not effective for toxin induced seizures.",
        keyFeature: { topic: T, n: 4 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most important treatment for his temperature of 41.2°C?",
        options: [
          "Acetaminophen 1 g PR",
          "Bromocriptine 2.5 mg PO",
          "Cold water immersion",
          "Dantrolene 2.5 mg/kg IV",
          "Ibuprofen 400 mg PO",
        ],
        correct: 2,
        explanation:
          "His hyperthermia comes from muscle activity and sympathetic overdrive, not a change in the hypothalamic set point, so it needs rapid external cooling such as ice water immersion together with sedation. A temperature above 41°C is life threatening. Antipyretics do not work on this kind of hyperthermia. Dantrolene has no proven role in stimulant toxicity. Bromocriptine is used for neuroleptic malignant syndrome, not cocaine toxicity.",
        keyFeature: { topic: T, n: 2 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is sedated and cooled to 38.8°C in 20 minutes. CT head is normal.",
        prompt: "Which of the following laboratory tests is most important for him now?",
        options: [
          "Amylase and lipase",
          "Blood alcohol level",
          "Potassium, creatinine and CK",
          "Serum prolactin level",
          "Urine drug screen",
        ],
        correct: 2,
        explanation:
          "Seizure, severe agitation, prone restraint and hyperthermia all cause rhabdomyolysis, which can lead to hyperkalemia and acute kidney injury. Potassium, creatinine and CK guide fluids and monitoring. A drug screen adds little when cocaine use is known and will not change treatment. Prolactin, alcohol level and pancreatic enzymes do not address the dangerous complications here.",
        keyFeature: { topic: T, n: 2 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 33 Neurocysticercosis ------------------------------------------- */
  {
    id: "seizures-33",
    topic: T,
    alsoTopics: ["infectious-diseases"],
    title: "Seizure at work in a recent immigrant",
    stem:
      "A 34-year-old man who moved to Canada from Guatemala 2 years ago is brought to the emergency department after a seizure at work. Coworkers saw his right hand and the right side of his face twitch, then he fell and had generalized jerking for about 1 minute. He is now back to baseline. He has had no headache, fever or prior seizures, and he takes no medications. The neurological examination is normal. Capillary glucose is 5.7 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "132/78 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial investigation for this patient?",
        options: [
          "EEG before discharge",
          "Lumbar puncture and CSF",
          "Neuroimaging with CT today",
          "Serum prolactin level",
          "Stool ova and parasites",
        ],
        correct: 2,
        explanation:
          "A first seizure with a focal onset, twitching of the right hand and face, suggests a structural lesion in the left hemisphere and needs neuroimaging. He comes from a region where neurocysticercosis is a leading cause of seizures, and guidelines use CT and MRI for its diagnosis. Stool testing does not diagnose brain cysts. EEG does not show the cause. He has no fever or meningism, so lumbar puncture is not indicated. Prolactin does not change care.",
        keyFeature: { topic: T, n: 6 },
        source: "ncc",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT shows a single 12 mm cyst in the left frontal cortex with an eccentric bright dot inside and surrounding edema. There are no calcifications or hydrocephalus.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Bacterial brain abscess",
          "Cerebral toxoplasmosis",
          "High grade glioma",
          "Metastatic tumour",
          "Neurocysticercosis",
        ],
        correct: 4,
        explanation:
          "A cyst containing an eccentric dot, the scolex, is characteristic of neurocysticercosis, and he lived in an endemic area. An abscess would usually come with fever and a thick enhancing rim without a scolex. Toxoplasmosis occurs with immune suppression, which is not described. A glioma or metastasis would not contain a scolex, and he has no known cancer.",
        keyFeature: { topic: T, n: 6 },
        source: "ncc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial management in the emergency department?",
        options: [
          "Albendazole alone today",
          "Antiseizure drug and referral",
          "Neurosurgical excision",
          "Observation without treatment",
          "Praziquantel alone today",
        ],
        correct: 1,
        explanation:
          "Patients with seizures from neurocysticercosis should receive antiseizure medication, and specialist follow up plans antiparasitic treatment. Antiparasitic drugs are given with corticosteroids after an eye examination, because killing the cyst causes inflammation and more edema. Starting albendazole or praziquantel alone is therefore unsafe. A single parenchymal cyst does not need surgery. Observation without treatment leaves him at risk of more seizures.",
        keyFeature: { topic: T, n: 4 },
        source: "ncc",
      },
    ],
    sources: [S.ncc],
    ...META,
  },

  /* 34 Weakness after a seizure ------------------------------------- */
  {
    id: "seizures-34",
    topic: T,
    alsoTopics: ["cva"],
    title: "Weakness after jerking of the left arm",
    stem:
      "A 63-year-old woman is brought to the emergency department by ambulance 50 minutes after her husband found her with jerking of the left arm that spread to both sides and lasted about 2 minutes. When the jerking stopped she could not move her left arm or leg. A right frontal meningioma was removed 3 years ago, and she had one seizure 6 months after surgery. She stopped levetiracetam on her own 6 months ago. She takes ramipril. She is drowsy but follows commands. She has a dense left hemiparesis and a left facial droop. Capillary glucose is 7.4 mmol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "96/minute", resp: "18/minute", bp: "168/94 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her weakness given this history?",
        options: [
          "Conversion disorder",
          "Hemorrhage into the old tumour bed",
          "Hypoglycemic hemiparesis",
          "Postictal Todd paresis",
          "Right middle cerebral artery stroke",
        ],
        correct: 3,
        explanation:
          "A focal seizure that began in the left arm, from a known right frontal focus, after she stopped her antiseizure drug, followed by weakness of the same side, fits Todd paresis. Stroke and hemorrhage remain possible and must be excluded, but the sequence favours a postictal deficit. Her glucose of 7.4 mmol/L excludes hypoglycemia. Nothing suggests a functional disorder.",
        keyFeature: { topic: T, n: 1 },
        source: "csbpr",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging for her now?",
        options: [
          "Carotid Doppler ultrasound",
          "CT head and CT angiography",
          "EEG before any imaging",
          "MRI brain in 48 hours",
          "No imaging until weakness resolves",
        ],
        correct: 1,
        explanation:
          "A seizure does not exclude stroke, and she is within the window for reperfusion. Canadian stroke guidance excludes thrombolysis only when the deficit is judged to be postictal Todd paralysis, so noncontrast CT with CT angiography is needed now to look for hemorrhage or a vessel occlusion before that judgment is made. Waiting for the weakness to resolve, or delaying to MRI, loses the treatment window. Carotid ultrasound and EEG do not answer the urgent question.",
        keyFeature: { topic: T, n: 6 },
        source: "csbpr",
      },
      {
        id: "q3",
        kind: "single",
        update: "CT shows postoperative change only. CT angiography shows no occlusion. Ninety minutes later her strength is improving.",
        prompt: "Which of the following is the most appropriate antiseizure plan for her?",
        options: [
          "Rescue diazepam only",
          "Restart levetiracetam today",
          "Start treatment after an EEG",
          "Wait for a third seizure",
          "No treatment until MRI is done",
        ],
        correct: 1,
        explanation:
          "Two unprovoked seizures more than 24 hours apart, here with a known structural cause, meet the definition of epilepsy. She had been controlled on levetiracetam, so restarting it today is appropriate. Delaying for an EEG or MRI, or waiting for another seizure, leaves her at high risk of recurrence. Rescue diazepam treats a prolonged seizure but does not prevent seizures.",
        keyFeature: { topic: T, n: 7 },
        source: "fisher",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her private driving?",
        options: [
          "Now, since the cause is known",
          "Once off medication for 3 months",
          "Once seizure free on treatment 6 months",
          "Once strength returns after 1 week",
          "Only after a normal EEG at 12 months",
        ],
        correct: 2,
        explanation:
          "For epilepsy, the CMA guide allows private driving once the patient has been seizure free on medication for at least 6 months and the physician is confident of adherence. Her seizure followed stopping medication on her own, so adherence must be addressed. A known cause does not permit driving now. Recovery of strength and a normal EEG are not the criteria. Driving off medication is not advised after this recurrence.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.csbpr, S.fisher, S.cma],
    ...META,
  },

  /* 35 First seizure in an airline pilot ----------------------------- */
  {
    id: "seizures-35",
    topic: T,
    title: "Man with a seizure who flies for work",
    stem:
      "A 45-year-old man is brought to the emergency department by his wife after a witnessed generalized tonic clonic seizure at home lasting 90 seconds. He has no past history, takes no medications, drinks 2 beers a week and slept normally last night. He is a commercial airline pilot and also drives a car daily. He is now back to baseline with a normal neurological examination. Glucose 5.5 mmol/L and sodium 140 mmol/L. His ECG is normal. Noncontrast CT head is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "80/minute", resp: "14/minute", bp: "130/80 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for further investigation of this seizure?",
        options: [
          "Admission for continuous EEG",
          "Contrast CT head before discharge",
          "Lumbar puncture before discharge",
          "Outpatient EEG and MRI brain",
          "Serum prolactin and CK level",
        ],
        correct: 3,
        explanation:
          "After a first unprovoked seizure with full recovery, a normal CT and normal labs, EEG and MRI estimate his recurrence risk. An epileptiform EEG or a structural lesion on imaging raises that risk and guides treatment. He does not need admission for continuous EEG because he is at baseline. He has no fever or meningism for lumbar puncture. Contrast CT adds little before MRI. Prolactin and CK do not change management.",
        keyFeature: { topic: T, n: 6 },
        source: "aan-first",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes your obligation regarding his work as a pilot?",
        options: [
          "Advise him to self-report only",
          "Inform the aviation medical adviser",
          "Report only after a second seizure",
          "Wait for his neurologist to decide",
          "No action if he agrees to stop flying",
        ],
        correct: 1,
        explanation:
          "Under the federal Aeronautics Act, a physician who believes a patient holds an aviation medical certificate and has a condition likely to be a hazard to aviation safety must inform a medical adviser designated by the Minister without delay. The duty applies in every province and is not replaced by his agreement or by self-reporting. Waiting for a second seizure or a neurologist delays a report that is already required. The Act protects a physician who reports in good faith.",
        keyFeature: { topic: T, n: 5 },
        source: "aero",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about driving his car?",
        options: [
          "Continue driving with a passenger",
          "Drive after 1 month if EEG normal",
          "Drive again once CT is normal",
          "Drive only during daylight hours",
          "No driving for at least 3 months",
        ],
        correct: 4,
        explanation:
          "The CMA guide advises no private driving for at least 3 months after a single unprovoked seizure, with a complete neurological evaluation including EEG and imaging. A normal CT or a normal EEG at 1 month does not shorten this. A passenger cannot prevent a crash if he loses consciousness. Daylight driving does not reduce the risk of a seizure.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.aanFirst, S.aero, S.cma],
    ...META,
  },

  /* 36 Breakthrough seizure on lamotrigine --------------------------- */
  {
    id: "seizures-36",
    topic: T,
    title: "Seizure after two years of control",
    stem:
      "A 24-year-old woman with focal epilepsy presents to the emergency department after a coworker saw her stare, fumble with papers and not respond for 2 minutes. She has been seizure free for 2 years on lamotrigine 150 mg twice daily and has not missed doses. Seven weeks ago she started a combined oral contraceptive containing ethinyl estradiol. She has had no fever, alcohol or sleep loss. She is now back to baseline with a normal neurological examination and no injury. She drives to work daily.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "14/minute", bp: "116/70 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her breakthrough seizure?",
        options: [
          "Estrogen induced lamotrigine clearance",
          "New structural brain lesion",
          "Progestin induced hyponatremia",
          "Tolerance to lamotrigine",
          "Worsening of her epilepsy syndrome",
        ],
        correct: 0,
        explanation:
          "Estrogen containing contraceptives increase lamotrigine clearance and can lower levels by more than half. The timing after starting the pill, with full adherence and no other trigger, fits this interaction. A typical seizure with a normal examination does not suggest a new lesion. Contraceptives do not usually cause hyponatremia. Tolerance to lamotrigine and spontaneous worsening are less likely explanations than a known interaction with a clear start date.",
        keyFeature: { topic: T, n: 7 },
        source: "sabers",
      },
      {
        id: "q2",
        kind: "menu",
        select: 2,
        prompt: "Which of the following investigations are most appropriate in her emergency department assessment?",
        options: [
          "CT head without contrast",
          "EEG in the department",
          "Lamotrigine serum level",
          "Lumbar puncture",
          "MRI brain before discharge",
          "Pregnancy test",
          "Serum prolactin level",
          "Urine toxicology screen",
        ],
        correct: [2, 5],
        explanation:
          "A lamotrigine level, compared with any earlier level, documents the fall and guides the dose change. Levels should be monitored when an estrogen contraceptive is started or stopped. A pregnancy test is needed in any woman of reproductive age with a seizure, because pregnancy also lowers lamotrigine levels and changes treatment choices. A typical seizure with a clear trigger and normal examination does not need imaging, EEG, lumbar puncture or toxicology in the emergency department.",
        keyFeature: { topic: T, n: 7 },
        source: "sabers",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about driving at discharge?",
        options: [
          "Continue driving if she feels well",
          "Drive only on local roads",
          "Drive only with a passenger",
          "Resume once lamotrigine is adjusted",
          "Stop driving from today",
        ],
        correct: 4,
        explanation:
          "The CMA guide states that any seizure is grounds for stopping all driving at once, and her physician will decide when she can resume. Adjusting the dose does not by itself make driving safe. Feeling well, driving locally or having a passenger does not reduce the risk of a crash during a seizure with impaired awareness.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.sabers, S.cma],
    ...META,
  },

  /* 37 Morning jerks in a teenager ----------------------------------- */
  {
    id: "seizures-37",
    topic: T,
    title: "Teenager with a seizure after a party",
    stem:
      "A 16-year-old girl is brought to the emergency department by her parents after a generalized tonic clonic seizure at 07:00, the morning after a party where she slept 3 hours. She is now back to baseline. On direct questioning she describes sudden jerks of her arms most mornings for a year, often making her spill cereal or drop her toothbrush. She thought she was clumsy. She has no other history and takes no medications. She has a learner's licence. The neurological examination is normal. Glucose is 5.3 mmol/L and a pregnancy test is negative.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "16/minute", bp: "110/68 mmHg", o2sat: "99% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following history findings most changes the interpretation of this as a first seizure?",
        options: [
          "Absence of prior convulsions",
          "Early morning myoclonic jerks",
          "Recent party attendance",
          "Sleep deprivation last night",
          "Timing of the seizure at 07:00",
        ],
        correct: 1,
        explanation:
          "A year of morning arm jerks that make her drop things are myoclonic seizures, so this convulsion is not her first seizure. The pattern suggests juvenile myoclonic epilepsy, and epilepsy can be diagnosed once an epilepsy syndrome is recognized. Sleep deprivation and early morning timing are typical triggers in this syndrome but do not change the diagnosis on their own. The absence of prior convulsions misses the myoclonic seizures.",
        keyFeature: { topic: T, n: 1 },
        source: "fisher",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan to confirm the likely diagnosis?",
        options: [
          "CT head without contrast",
          "Lumbar puncture and CSF",
          "MRI brain with contrast",
          "Outpatient EEG and neurology",
          "Serum prolactin level",
        ],
        correct: 3,
        explanation:
          "Her year of myoclonic jerks means this is not a first seizure, and a routine awake EEG with provoking manoeuvres such as photic stimulation supports the diagnosis of a generalized epilepsy syndrome. NICE advises EEG to support the diagnosis and identify the epilepsy syndrome. She is well with a normal examination, so it can be arranged as an outpatient with neurology follow up. Imaging is guided by findings such as focal signs, which she does not have. She has no fever or meningism for lumbar puncture. Prolactin does not confirm a syndrome.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her learner's licence?",
        options: [
          "Continue under learner supervision",
          "Drive only in daylight",
          "Resume after a normal EEG",
          "Resume after 1 week of good sleep",
          "Stop until 6 months seizure free",
        ],
        correct: 4,
        explanation:
          "For epilepsy, the CMA guide allows private driving only after at least 6 months seizure free on medication, with confidence in adherence, and people with juvenile myoclonic epilepsy may not drive any class of vehicle unless they take appropriate antiseizure medication. A supervising adult cannot prevent a crash if she has a seizure. A normal EEG does not exclude epilepsy. A week of good sleep does not remove the risk. Daylight driving does not reduce seizure risk.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most important counselling point about seizure triggers for her?",
        options: [
          "Avoid all physical exercise",
          "Avoid sleep loss and alcohol",
          "Eliminate dairy from her diet",
          "Limit fluids in the evening",
          "Stop using her mobile phone",
        ],
        correct: 1,
        explanation:
          "Her convulsion followed a night of 3 hours of sleep, and sleep deprivation and alcohol are strong triggers in juvenile myoclonic epilepsy. Regular sleep lowers her risk. Exercise is encouraged with sensible precautions. Diet, evening fluids and phone use are not established triggers.",
        keyFeature: { topic: T, n: 7 },
        source: "rosen",
      },
    ],
    sources: [S.fisher, S.nice, S.cma, S.rosen],
    ...META,
  },

  /* 38 Seizure after head injury in a rural hospital ----------------- */
  {
    id: "seizures-38",
    topic: T,
    alsoTopics: ["multiple-trauma"],
    title: "Young man after a vehicle rollover",
    stem:
      "You are working in a rural hospital emergency department with CT but no neurosurgeon. A 22-year-old man is brought in by ambulance 40 minutes after rolling an all-terrain vehicle without a helmet. He had a 1 minute generalized seizure at the scene. His GCS is 7 (E1 V2 M4). His right pupil is 5 mm and sluggish, and the left is 3 mm and reactive. He has a boggy right temporal scalp swelling. Capillary glucose is 7.9 mmol/L. He is intubated for airway protection. CT shows a 2 cm right epidural hematoma with midline shift.",
    vitals: { temperature: "36.4°C tympanic", pulse: "58/minute", resp: "14/minute", bp: "176/98 mmHg", o2sat: "99% on a ventilator with FiO2 0.4", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "While transfer is arranged, he has a generalized seizure that has lasted 3 minutes despite a propofol infusion.",
        prompt: "Which of the following is the most appropriate medication to stop this seizure?",
        options: [
          "Dexamethasone 10 mg IV",
          "Lorazepam 4 mg IV",
          "Mannitol 75 g IV",
          "Phenytoin 300 mg PO",
          "Rocuronium 100 mg IV",
        ],
        correct: 1,
        explanation:
          "Seizures raise intracranial pressure and must be stopped quickly, and a benzodiazepine is first line. Rocuronium hides the convulsion but not the seizure. Mannitol treats raised pressure but does not stop a seizure. Oral phenytoin is far too slow. Corticosteroids are not recommended in traumatic brain injury.",
        keyFeature: { topic: T, n: 4 },
        source: "btf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate additional antiseizure medication once the seizure stops?",
        options: [
          "Carbamazepine 200 mg by tube",
          "Fosphenytoin 1 500 mg PE IV",
          "Fosphenytoin 300 mg PE IV",
          "Topiramate 100 mg by tube",
          "Valproic acid 500 mg IV",
        ],
        correct: 1,
        explanation:
          "He has had early post-traumatic seizures and needs a full IV load. Fosphenytoin 20 mg PE/kg is 1 500 mg PE for 75 kg. Phenytoin is the agent recommended to reduce early seizures after severe traumatic brain injury. Fosphenytoin 300 mg PE is only 4 mg PE/kg. Enteral carbamazepine and topiramate act too slowly. Valproate did not prevent early seizures better than phenytoin, and a trial found a trend toward higher mortality.",
        keyFeature: { topic: T, n: 4 },
        source: "btf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important treatment of the cause of his seizures?",
        options: [
          "Hyperventilation to PaCO2 25 mmHg",
          "Hypothermia to 33°C",
          "Methylprednisolone infusion",
          "Pentobarbital infusion",
          "Urgent surgical evacuation",
        ],
        correct: 4,
        explanation:
          "An acute epidural hematoma in a comatose patient with anisocoria, here a GCS of 7 and a dilated right pupil, should be evacuated as soon as possible, which here means rapid transfer to neurosurgery. Prolonged hyperventilation to 25 mmHg or lower is not recommended because it reduces cerebral blood flow. Early prophylactic hypothermia and high dose barbiturates are not recommended as first steps. Steroids increase mortality in head injury.",
        keyFeature: { topic: T, n: 2 },
        source: "bullock",
      },
    ],
    sources: [S.btf, S.bullock],
    ...META,
  },

  /* 39 Organophosphate poisoning on a farm --------------------------- */
  {
    id: "seizures-39",
    topic: T,
    alsoTopics: ["tox"],
    title: "Farmer found in the barn",
    stem:
      "You are working in a rural hospital emergency department. A 52-year-old farmer is brought in by his son 1 hour after he was found in the barn beside a spilled container of organophosphate insecticide. His clothing is soaked with the chemical. He is confused, drooling and sweating. He has vomited and has been incontinent of urine and stool. His pupils are pinpoint. There are diffuse wheezes and crackles. Muscles in his thighs are twitching. While you examine him he has a generalized seizure that has lasted 3 minutes.",
    vitals: { temperature: "37.2°C tympanic", pulse: "48/minute", resp: "30/minute", bp: "88/50 mmHg", o2sat: "86% on a non rebreather mask", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 3,
        prompt: "Which of the following are the most appropriate immediate actions for this patient?",
        options: [
          "Atropine 2 mg IV, doubling doses",
          "Diazepam 10 mg IV",
          "Flumazenil 0.2 mg IV",
          "Fosphenytoin 1 500 mg PE IV",
          "Naloxone 2 mg IV",
          "Physostigmine 2 mg IV",
          "Remove clothing, staff in protective gear",
          "Succinylcholine for intubation",
        ],
        correct: [0, 1, 6],
        explanation:
          "He has a cholinergic crisis. Atropine is given early and the dose doubled every 5 minutes until the chest is clear. Benzodiazepines such as diazepam treat the seizures. Contaminated clothing is removed by staff wearing protective equipment. Physostigmine adds to cholinesterase inhibition. Succinylcholine causes prolonged paralysis because cholinesterase is inhibited. Fosphenytoin, naloxone and flumazenil do not treat this toxidrome.",
        keyFeature: { topic: T, n: 4 },
        source: "eddleston",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the best sign that his atropine dosing is adequate?",
        options: [
          "Absent bowel sounds",
          "Bounding pulse over 140/minute",
          "Drying of bronchial secretions",
          "Resolution of fasciculations",
          "Temperature above 38°C",
        ],
        correct: 2,
        explanation:
          "Atropine is titrated to a clear chest with dry bronchial secretions, along with a heart rate above 80/minute and a systolic BP above 80 mmHg. Absent bowel sounds, marked tachycardia and fever are signs of too much atropine. Fasciculations are nicotinic effects that atropine does not reverse, so waiting for them to settle leads to toxic doses.",
        keyFeature: { topic: T, n: 4 },
        source: "eddleston",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following laboratory tests would best support the diagnosis in this patient?",
        options: [
          "Carboxyhemoglobin level",
          "Cholinesterase activity",
          "Serum lactate level",
          "Serum osmolal gap",
          "Urine drug screen",
        ],
        correct: 1,
        explanation:
          "Reduced red cell acetylcholinesterase activity supports organophosphate poisoning, though treatment is started on clinical grounds and should not wait for the result. A carboxyhemoglobin level looks for carbon monoxide. Lactate and the osmolal gap are not specific. Standard urine drug screens do not detect organophosphates.",
        keyFeature: { topic: T, n: 2 },
        source: "eddleston",
      },
    ],
    sources: [S.eddleston],
    ...META,
  },

  /* 40 Recurrent spells in an older man ------------------------------ */
  {
    id: "seizures-40",
    topic: T,
    title: "Man found confused in his parked car",
    stem:
      "A 72-year-old man is brought to the emergency department by his daughter. He was found sitting in his parked car at a grocery store, confused, 30 minutes after leaving home. Over 3 months he has had several brief spells in which he stops talking, stares, smacks his lips and picks at his clothes for about 1 minute. Afterward he is confused for about 15 minutes and does not remember the spell. Last week he fell and bruised his hip during one. He has hypertension and type 2 diabetes treated with metformin. He is now alert and oriented. The neurological examination is normal. Capillary glucose is 6.8 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "78/minute", resp: "16/minute", bp: "150/86 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for his recurrent spells?",
        options: [
          "Focal impaired awareness seizures",
          "Hypoglycemic episodes",
          "Recurrent vasovagal syncope",
          "Transient global amnesia",
          "Transient ischemic attacks",
        ],
        correct: 0,
        explanation:
          "Brief repeated spells of staring with lip smacking and picking at clothes, then 15 minutes of confusion and no memory of the event, are focal seizures with impaired awareness. In older adults new epilepsy often shows up as confusion or unexplained falls. Transient global amnesia lasts hours and has no automatisms. Transient ischemic attacks cause loss of function, not repetitive movements. Metformin alone rarely causes hypoglycemia, and his glucose is normal. Vasovagal syncope does not cause automatisms or prolonged confusion.",
        keyFeature: { topic: T, n: 1 },
        source: "rosen",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation to look for the cause of his spells?",
        options: [
          "Carotid Doppler ultrasound",
          "Holter monitor for 48 hours",
          "Lying and standing BP",
          "MRI brain and outpatient EEG",
          "Tilt table test referral",
        ],
        correct: 3,
        explanation:
          "New focal seizures after age 60 are usually caused by vascular disease, tumour or neurodegenerative disease, so MRI is the best test for a structural cause. An EEG supports the diagnosis and helps classify the seizures. Holter monitoring, lying and standing BP and tilt testing investigate syncope, and these spells are not syncope. Carotid ultrasound does not explain stereotyped automatisms.",
        keyFeature: { topic: T, n: 6 },
        source: "rosen",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about driving for this patient?",
        options: [
          "Drive only short distances",
          "Drive only with his daughter",
          "Keep driving until the EEG",
          "Stop driving from today",
          "Wait for the MRI before stopping",
        ],
        correct: 3,
        explanation:
          "He was found confused in his car, and spells of impaired awareness make driving unsafe. The CMA guide states that any seizure is grounds for stopping all driving at once while the evaluation is completed. Short trips or a passenger do not prevent a crash during a spell. Waiting for the EEG or MRI leaves him driving with an untreated seizure disorder.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.rosen, S.cma],
    ...META,
  },

  /* 41 Focal seizures with very high glucose ------------------------- */
  {
    id: "seizures-41",
    topic: T,
    alsoTopics: ["shock"],
    title: "Repeated jerking of one arm",
    stem:
      "A 70-year-old man is brought to the emergency department by his wife with repeated jerking of his left arm and face for 2 days. Each episode lasts 1 to 2 minutes, and he stays aware during them. He has had thirst and frequent urination for 3 weeks and has lost 4 kg. He has no known diabetes. He takes hydrochlorothiazide for hypertension. He is alert and oriented, with dry mucous membranes. There is no weakness between episodes. Glucose 42 mmol/L, sodium 142 mmol/L, potassium 4.6 mmol/L, bicarbonate 22 mmol/L, urea 18 mmol/L, creatinine 160 umol/L. Serum beta-hydroxybutyrate is 0.4 mmol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "108/minute", resp: "18/minute", bp: "128/74 mmHg", o2sat: "97% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important treatment to stop his seizures?",
        options: [
          "Fluid and insulin therapy",
          "Fosphenytoin 1 500 mg PE IV",
          "Levetiracetam 4 500 mg IV",
          "Lorazepam 4 mg IV",
          "Magnesium sulfate 2 g IV",
        ],
        correct: 0,
        explanation:
          "A glucose of 42 mmol/L with little ketosis and a normal bicarbonate is a hyperosmolar hyperglycemic state, and his focal seizures are provoked by it. Correcting the dehydration and hyperglycemia treats the cause. Anticonvulsants alone do not correct the metabolic trigger. He is aware during the episodes and not in status, so an immediate benzodiazepine is not the priority. Nothing suggests low magnesium or eclampsia.",
        keyFeature: { topic: T, n: 2 },
        source: "dc-hhs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial IV fluid for this patient?",
        options: [
          "Albumin 25% infusion",
          "Dextrose 5% in water",
          "Half normal saline",
          "Isotonic saline",
          "Sodium bicarbonate infusion",
        ],
        correct: 3,
        explanation:
          "Diabetes Canada recommends starting with 0.9% sodium chloride to restore volume, with a later change to 0.45% sodium chloride once BP is stable, while watching how fast osmolality falls. Starting with hypotonic fluid risks a rapid fall in osmolality. Dextrose 5% adds glucose and free water at the wrong time. His bicarbonate of 22 mmol/L shows no acidosis to treat. Albumin has no role in this condition.",
        keyFeature: { topic: T, n: 2 },
        source: "dc-hhs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is his calculated effective serum osmolality?",
        options: ["284 mmol/kg", "306 mmol/kg", "326 mmol/kg", "344 mmol/kg", "368 mmol/kg"],
        correct: 2,
        explanation:
          "Effective osmolality is 2 x sodium plus glucose, so 2 x 142 + 42 = 326 mmol/kg. This is above the 320 mmol/kg used to describe a hyperosmolar state. Adding his urea of 18 gives 344, the total osmolality, but urea crosses cell membranes and is left out of the effective value. The value 284 counts sodium only. The value 368 doubles the glucose as well. The value 306 does not match any correct calculation.",
        keyFeature: { topic: T, n: 6 },
        source: "dc-hhs",
      },
    ],
    sources: [S.dcHhs],
    ...META,
  },

  /* 42 Confusion in a dialysis patient on an antibiotic -------------- */
  {
    id: "seizures-42",
    topic: T,
    alsoTopics: ["delirium-agitation"],
    title: "Dialysis patient who is not herself",
    stem:
      "A 68-year-old woman on hemodialysis three times a week is brought to the emergency department with 2 days of worsening confusion. She was discharged 5 days ago on cefepime 2 g IV every 12 hours for a diabetic foot infection. Her last dialysis was yesterday and was uneventful. She drifts between drowsiness and brief periods of normal speech. She has irregular jerks of her arms and face. Her neck is supple. Eye movements are full and she has no nystagmus. Glucose 7.2 mmol/L, sodium 136 mmol/L, potassium 5.0 mmol/L, calcium normal. CT head shows only old small vessel changes.",
    vitals: { temperature: "37.4°C oral", pulse: "92/minute", resp: "16/minute", bp: "146/78 mmHg", o2sat: "96% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her change in mental status?",
        options: [
          "Cefepime neurotoxicity",
          "Dialysis disequilibrium",
          "Septic encephalopathy",
          "Uremic encephalopathy",
          "Wernicke encephalopathy",
        ],
        correct: 0,
        explanation:
          "Cefepime 2 g every 12 hours is a large dose for a patient on dialysis, and kidney failure with excess dosing are the main risk factors for cefepime neurotoxicity. Its features include fluctuating encephalopathy, myoclonus and nonconvulsive seizures. Dialysis disequilibrium occurs during or just after a session, usually early in dialysis care. She is dialyzed regularly, so uremia is unlikely. She has no fever to suggest sepsis, and her eye movements are normal.",
        keyFeature: { topic: T, n: 2 },
        source: "payne",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important for her now?",
        options: [
          "EEG as soon as possible",
          "Lumbar puncture and CSF",
          "MRI brain with diffusion",
          "Serum ammonia level",
          "Thiamine blood level",
        ],
        correct: 0,
        explanation:
          "Fluctuating awareness with myoclonus in a patient on cefepime raises concern for nonconvulsive status epilepticus, which only EEG can confirm. Nonconvulsive seizures are a reported feature of cefepime neurotoxicity. Her CT is unremarkable, and MRI will not show seizure activity. She has no fever or meningism for lumbar puncture. Nothing suggests liver disease, and she has no eye signs of Wernicke encephalopathy.",
        keyFeature: { topic: T, n: 3 },
        source: "payne",
      },
      {
        id: "q3",
        kind: "single",
        update: "EEG shows nonconvulsive status epilepticus.",
        prompt: "Which of the following is the most important step in addition to antiseizure treatment?",
        options: [
          "Add meropenem to cover sepsis",
          "Continue cefepime at a lower dose",
          "Increase cefepime for sepsis",
          "Stop cefepime and arrange dialysis",
          "Wait for levels before acting",
        ],
        correct: 3,
        explanation:
          "Cefepime neurotoxicity usually resolves once the drug is stopped, and dialysis removes the drug faster in a patient without kidney function. Her foot infection can be treated with another agent. Continuing cefepime at any dose keeps the cause in place. Carbapenems can also lower the seizure threshold. Cefepime levels are not quickly available and should not delay stopping it.",
        keyFeature: { topic: T, n: 2 },
        source: "payne",
      },
    ],
    sources: [S.payne],
    ...META,
  },

  /* 43 Seizure with a known cancer ----------------------------------- */
  {
    id: "seizures-43",
    topic: T,
    title: "Woman with lung cancer and a first seizure",
    stem:
      "A 61-year-old woman with lung adenocarcinoma diagnosed 4 months ago is brought to the emergency department after a generalized seizure at home that lasted 2 minutes. For 1 week she has had morning headaches and mild clumsiness of her left hand. She is receiving chemotherapy. She lives alone and bathes every evening. She is now alert and oriented with a mild left pronator drift. Capillary glucose is 6.9 mmol/L. CT head shows a 2.5 cm right parietal enhancing mass with surrounding edema and 4 mm of midline shift. There is no hemorrhage.",
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "16/minute", bp: "138/80 mmHg", o2sat: "96% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate antiseizure plan for this patient?",
        options: [
          "Levetiracetam started today",
          "Lorazepam as needed only",
          "Phenobarbital at bedtime",
          "Wait for EEG before treating",
          "No drug until a second seizure",
        ],
        correct: 0,
        explanation:
          "She has had a seizure from a brain metastasis, a structural cause with a high risk of recurrence, so an antiseizure drug is indicated now. The advice against routine antiseizure drugs applies to patients with brain tumours who have not had a seizure. Levetiracetam has few drug interactions, while enzyme inducers such as phenobarbital interact with many cancer drugs and with dexamethasone. Waiting for an EEG or a second seizure leaves her unprotected.",
        keyFeature: { topic: T, n: 4 },
        source: "chang",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate additional medication for her symptoms?",
        options: [
          "Dexamethasone 10 mg IV",
          "Enoxaparin 60 mg SC",
          "Mannitol 60 g IV",
          "Nimodipine 60 mg PO",
          "Tranexamic acid 1 g IV",
        ],
        correct: 0,
        explanation:
          "Headache, a pronator drift and edema with 4 mm of midline shift are symptoms of mass effect, and dexamethasone is recommended for temporary relief of these symptoms. She is alert with no signs of herniation, so mannitol is not needed. There is no hemorrhage for tranexamic acid, and nimodipine is used for subarachnoid hemorrhage. Anticoagulation does not treat edema.",
        keyFeature: { topic: T, n: 2 },
        source: "chang",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate safety advice about her evening bath?",
        options: [
          "Bathe only in the evening",
          "Bathe with the door locked",
          "Shower instead of bathing",
          "Stop washing until reviewed",
          "Use a hot tub instead",
        ],
        correct: 2,
        explanation:
          "A seizure in a bath can cause drowning, especially in someone who lives alone, so NICE advises a shower rather than a bath. A locked door delays help if she has a seizure. The time of day does not change the risk. A hot tub carries the same drowning risk. Stopping washing is unnecessary when a safer option exists.",
        keyFeature: { topic: T, n: 5 },
        source: "nice",
      },
    ],
    sources: [S.chang, S.nice],
    ...META,
  },

  /* 44 Low sodium in an older woman ---------------------------------- */
  {
    id: "seizures-44",
    topic: T,
    title: "Older woman with a week of unsteadiness",
    stem:
      "You are working in a community hospital emergency department. An 84-year-old woman is brought in by ambulance after a generalized seizure at her retirement home that lasted 2 minutes. For a week she has been more confused, unsteady and nauseated. Her physician started hydrochlorothiazide 3 weeks ago for hypertension. She drinks several cups of tea and water a day and eats little. She takes no other medications. She is drowsy but opens her eyes to voice and follows simple commands. Capillary glucose is 6.4 mmol/L. Sodium on a venous blood gas is 112 mmol/L.",
    vitals: { temperature: "36.7°C oral", pulse: "86/minute", resp: "18/minute", bp: "142/78 mmHg", o2sat: "96% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her low sodium now?",
        options: [
          "Hypertonic 3% saline 150 mL IV",
          "Levetiracetam 3 000 mg IV",
          "Normal saline 1 L IV bolus",
          "Tolvaptan 15 mg PO",
          "Water restriction to 1 L per day",
        ],
        correct: 0,
        explanation:
          "A seizure and reduced consciousness with a sodium of 112 mmol/L are severe symptoms, and the European guideline advises 150 mL of 3% saline over 20 minutes, repeated as needed. Water restriction and tolvaptan act over days. A litre of normal saline raises sodium unpredictably and is not the treatment for severe symptoms. An anticonvulsant does not correct the cause of the seizure.",
        keyFeature: { topic: T, n: 2 },
        source: "hypo-na",
      },
      {
        id: "q2",
        kind: "single",
        update: "The team manages her hyponatremia using the 2014 European clinical practice guideline.",
        prompt: "Which of the following is the target rise in serum sodium during the first hour of treatment?",
        options: ["5 mmol/L", "8 mmol/L", "10 mmol/L", "15 mmol/L", "28 mmol/L"],
        correct: 0,
        explanation:
          "The guideline aims for a rise of 5 mmol/L in the first hour, which usually improves severe symptoms, then limits the rise to 10 mmol/L in the first 24 hours. A lower daily limit of 8 mmol/L is often used when the risk of osmotic demyelination is high, as with her poor intake. A rise of 8 or 10 mmol/L in the first hour uses up most of the daily limit. A rise of 15 or 28 mmol/L, the latter taking her from 112 back to 140, would exceed it and risk osmotic demyelination.",
        keyFeature: { topic: T, n: 2 },
        source: "hypo-na",
      },
      {
        id: "q3",
        kind: "single",
        update: "Two hours later her sodium is 118 mmol/L and she is alert. Her urine output has risen to 400 mL per hour.",
        prompt: "Which of the following is the most appropriate next step to prevent overcorrection?",
        options: [
          "Continue 3% saline to 130 mmol/L",
          "Give furosemide 40 mg IV",
          "Give normal saline 2 L bolus",
          "Stop 3% saline, check sodium often",
          "Tolvaptan 15 mg PO",
        ],
        correct: 3,
        explanation:
          "Her symptoms have improved after a rise of 6 mmol/L, and a brisk water diuresis as the thiazide effect wears off can push sodium up quickly. Active treatment should stop, with sodium checked every few hours, and water with desmopressin given if she exceeds the limit. Continuing 3% saline, tolvaptan or large saline volumes would raise sodium further. Furosemide adds to fluid loss and does not control the rate of correction.",
        keyFeature: { topic: T, n: 2 },
        source: "hypo-na",
      },
    ],
    sources: [S.hypoNa],
    ...META,
  },

  /* 45 Collapse during a blood draw ---------------------------------- */
  {
    id: "seizures-45",
    topic: T,
    alsoTopics: ["loc"],
    title: "Young woman who collapsed at the laboratory",
    stem:
      "A 22-year-old woman is brought to the emergency department from the hospital laboratory, where she collapsed while having blood drawn. She felt hot, nauseated and lightheaded, her vision went grey, and she slumped in the chair. The phlebotomist saw her arms jerk a few times for about 5 seconds. She woke within 20 seconds and was fully oriented, though pale and sweaty. She had no tongue bite or incontinence. She has fainted twice before at the sight of blood. She takes no medications. Her examination and ECG are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "68/minute", resp: "14/minute", bp: "112/70 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Brief absence seizure",
          "Generalized tonic clonic seizure",
          "Myoclonic seizure",
          "Vasovagal syncope with jerks",
          "Vertebrobasilar TIA",
        ],
        correct: 3,
        explanation:
          "A clear trigger, warning symptoms of heat, nausea and greying vision, a few seconds of jerks and full orientation within 20 seconds are typical of vasovagal syncope with brief jerks. A generalized seizure usually lasts longer and leaves postictal confusion. An absence seizure does not cause a fall with warning symptoms. Myoclonic seizures do not come with this prodrome. Her age, trigger and normal examination do not fit a vertebrobasilar TIA.",
        keyFeature: { topic: T, n: 1 },
        source: "ccs-sync",
      },
      {
        id: "q2",
        kind: "menu",
        select: 1,
        prompt: "Which of the following further investigations is required before she is discharged?",
        options: [
          "CBC and electrolytes",
          "CT head without contrast",
          "Echocardiogram",
          "EEG with sleep deprivation",
          "Holter monitor for 48 hours",
          "MRI brain with contrast",
          "Serum prolactin level",
          "None",
        ],
        correct: [7],
        explanation:
          "A typical vasovagal event with a clear trigger, a normal examination and a normal ECG needs no further tests, and the history makes the diagnosis. Brief jerks during syncope do not make it a seizure, so EEG and brain imaging are not indicated. Echocardiography and Holter monitoring are for suspected cardiac syncope, which her history and ECG do not suggest. Blood tests and prolactin would not change management.",
        keyFeature: { topic: T, n: 6 },
        source: "ccs-sync",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her driving?",
        options: [
          "Drive as usual",
          "Drive only after a normal EEG",
          "Stop driving for a year",
          "Stop driving for one week",
          "Stop driving for three months",
        ],
        correct: 0,
        explanation:
          "The CMA guide, based on Canadian Cardiovascular Society advice, sets no driving restriction for private or commercial drivers after typical vasovagal syncope. Treating this event as a seizure would wrongly stop her driving for months. A week off applies to syncope with a reversible cause that has been treated. An EEG is not needed for vasovagal syncope.",
        keyFeature: { topic: T, n: 5 },
        source: "cma-cardio",
      },
    ],
    sources: [S.ccsSync, S.cmaCardio],
    ...META,
  },

  /* 46 Winter power outage ------------------------------------------- */
  {
    id: "seizures-46",
    topic: T,
    alsoTopics: ["tox", "environmental"],
    title: "Boy with a seizure during a power outage",
    stem:
      "You are working in a community hospital emergency department in January. A 6-year-old boy is brought in by his mother after a generalized seizure at home that lasted 2 minutes. The family has run a gas generator in their attached garage since a power outage 2 days ago. His parents and his sister have had headaches and nausea since yesterday. He is now drowsy but rousable and has vomited twice. He has no fever, rash or neck stiffness. Capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "36.9°C tympanic", pulse: "124/minute", resp: "24/minute", bp: "100/60 mmHg", o2sat: "99% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate treatment for this child?",
        options: [
          "Hydroxocobalamin 70 mg/kg IV",
          "Levetiracetam 1 260 mg IV",
          "Low flow oxygen to O2 sat 94%",
          "Oxygen at 100% by non rebreather",
          "Sodium nitrite 6 mg/kg IV",
        ],
        correct: 3,
        explanation:
          "Headaches and nausea in the whole family, a generator in an attached garage and a seizure in the child point to carbon monoxide poisoning. High flow 100% oxygen shortens the half life of carboxyhemoglobin and should start at once. His O2 sat of 99% does not exclude poisoning, so titrating oxygen to a saturation target is wrong. Hydroxocobalamin and sodium nitrite treat cyanide, and nitrite would further reduce oxygen delivery. An anticonvulsant does not treat the cause.",
        keyFeature: { topic: T, n: 2 },
        source: "rose",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations will best confirm the diagnosis?",
        options: [
          "Carboxyhemoglobin by co-oximetry",
          "CT head without contrast",
          "Pulse oximetry reading",
          "Serum lactate level",
          "Troponin and CK levels",
        ],
        correct: 0,
        explanation:
          "Co-oximetry on a blood gas measures carboxyhemoglobin directly and confirms carbon monoxide exposure. Standard pulse oximetry cannot tell carboxyhemoglobin from oxyhemoglobin, which is why his reading is normal. Lactate, troponin and CK can show the severity of poisoning but do not confirm it. CT is not needed to make the diagnosis.",
        keyFeature: { topic: T, n: 2 },
        source: "rose",
      },
      {
        id: "q3",
        kind: "single",
        update: "His carboxyhemoglobin is 24%. His parents are waiting with his sister in the waiting room.",
        prompt: "Which of the following is the most important additional step for this child?",
        options: [
          "Discuss hyperbaric oxygen therapy",
          "Home once headache settles",
          "Outpatient EEG in 2 weeks",
          "Send the family home to ventilate",
          "Start daily levetiracetam",
        ],
        correct: 0,
        explanation:
          "A seizure is a sign of severe carbon monoxide poisoning, and hyperbaric oxygen reduced delayed cognitive sequelae in a randomized trial, so a hyperbaric centre should be consulted. The rest of the family was exposed and needs assessment, not a return to the house. Discharge when his headache improves ignores the risk of delayed injury. The seizure was provoked, so long term antiseizure medication and a routine EEG are not the priority.",
        keyFeature: { topic: T, n: 4 },
        source: "rose",
      },
    ],
    sources: [S.rose],
    ...META,
  },

  /* 47 Seizures after a kidney transplant ---------------------------- */
  {
    id: "seizures-47",
    topic: T,
    alsoTopics: ["headache"],
    title: "Headache and blurred vision after a transplant",
    stem:
      "A 46-year-old woman who had a kidney transplant 8 months ago presents to the emergency department with a severe headache and blurred vision since this morning. In the department she has two generalized seizures, each lasting 2 minutes, and does not regain awareness between them. She takes tacrolimus, mycophenolate and prednisone. Her tacrolimus dose was increased 2 weeks ago. She is now drowsy but rousable. She cannot count fingers and has no focal weakness. Her neck is supple. Capillary glucose 6.1 mmol/L, sodium 137 mmol/L, creatinine 142 umol/L.",
    vitals: { temperature: "37.0°C oral", pulse: "102/minute", resp: "18/minute", bp: "204/118 mmHg", o2sat: "97% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following terms best describes two seizures without recovery of awareness between them?",
        options: [
          "Convulsive status epilepticus",
          "Nonepileptic events",
          "Postictal delirium only",
          "Simple partial seizures",
          "Two isolated seizures",
        ],
        correct: 0,
        explanation:
          "Repeated seizures without a return to baseline between them meet the definition of status epilepticus, even when each seizure is short. She should be treated as status rather than observed. They are not isolated seizures because she did not recover between them. Generalized convulsions with loss of awareness are not simple partial seizures, and nothing suggests nonepileptic events.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her seizures?",
        options: [
          "Acute transplant rejection",
          "Bacterial meningitis",
          "Cerebral venous thrombosis",
          "Posterior reversible encephalopathy",
          "Toxoplasma encephalitis",
        ],
        correct: 3,
        explanation:
          "Headache, loss of vision and seizures with a BP of 204/118 mmHg in a patient taking tacrolimus fit posterior reversible encephalopathy syndrome. Calcineurin inhibitors, kidney disease and BP swings are known triggers. She has no fever or neck stiffness to suggest meningitis or encephalitis. Acute rejection affects graft function and does not explain headache, visual loss and seizures, and a creatinine of 142 umol/L is far too low to cause uremic encephalopathy. Venous thrombosis is possible, but severe hypertension and visual loss on a calcineurin inhibitor favour this syndrome.",
        keyFeature: { topic: T, n: 6 },
        source: "fugate",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging to confirm the diagnosis?",
        options: [
          "Abdominal CT with contrast",
          "Carotid Doppler ultrasound",
          "CT angiography of the neck",
          "MRI brain with FLAIR imaging",
          "Transcranial Doppler study",
        ],
        correct: 3,
        explanation:
          "MRI shows the typical pattern of vasogenic edema in the subcortical white matter, often in both parietal and occipital lobes, and FLAIR images show it best. CT is often normal or less sensitive. Neck vessel imaging, carotid ultrasound and transcranial Doppler do not show the edema. Abdominal CT looks at the graft, not the brain.",
        keyFeature: { topic: T, n: 6 },
        source: "fugate",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment of the underlying cause?",
        options: [
          "Gradual BP lowering, tacrolimus review",
          "Increase the prednisone dose",
          "Lower BP to normal within 1 hour",
          "Start acyclovir and ceftriaxone",
          "Start therapeutic heparin",
        ],
        correct: 0,
        explanation:
          "Treatment is controlled lowering of BP together with review of the tacrolimus dose with the transplant team, plus seizure control. Dropping BP to normal within an hour risks cerebral ischemia. Higher steroid doses do not treat the cause. Antimicrobials and heparin treat infection and venous thrombosis, which her presentation does not support.",
        keyFeature: { topic: T, n: 2 },
        source: "fugate",
      },
    ],
    sources: [S.ncs, S.fugate],
    ...META,
  },
];
