// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { KeyItem, Samp, UnacceptableItem } from "@/engine/samp";
import type { Source } from "@/engine/types";

const k = (id: string, text: string, ...match: string[]): KeyItem => ({ id, text, match });
const bad = (text: string, match: string[], dangerous = false): UnacceptableItem =>
  dangerous ? { text, match, dangerous: true } : { text, match };
const kf = (n: number) => ({ topic: "delirium-agitation", n });
const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 };

/* Sources ---------------------------------------------------------------- */

const CCSMH: Source = {
  id: "ccsmh",
  citation: "Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health: the assessment and treatment of delirium.",
};
const HCCA: Source = { id: "hcca", citation: "Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A. Ontario." };
const MHA: Source = { id: "mha", citation: "Mental Health Act, R.S.O. 1990, c. M.7. Ontario." };
const PRMA: Source = { id: "prma", citation: "Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16. Ontario." };
const BETA_PHARM: Source = {
  id: "beta-pharm",
  citation:
    "Wilson MP, et al. The psychopharmacology of agitation: consensus statement of the American Association for Emergency Psychiatry Project BETA Psychopharmacology Workgroup. West J Emerg Med. 2012.",
};
const BETA_DEESC: Source = {
  id: "beta-deesc",
  citation:
    "Richmond JS, et al. Verbal de-escalation of the agitated patient: consensus statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup. West J Emerg Med. 2012.",
};
const ACEP_AGIT: Source = {
  id: "acep-agitation",
  citation:
    "American College of Emergency Physicians. Clinical policy: critical issues in the evaluation and management of adult out-of-hospital or emergency department patients presenting with severe agitation. Ann Emerg Med. 2024.",
  url: "https://pubmed.ncbi.nlm.nih.gov/38105109/",
};
const CAM: Source = { id: "cam", citation: "Inouye SK, et al. Clarifying confusion: the confusion assessment method. Ann Intern Med. 1990." };
const INOUYE: Source = { id: "inouye", citation: "Inouye SK, Westendorp RG, Saczynski JS. Delirium in elderly people. Lancet. 2014." };
const CIWA: Source = {
  id: "ciwa",
  citation:
    "Sullivan JT, et al. Assessment of alcohol withdrawal: the revised Clinical Institute Withdrawal Assessment for Alcohol scale (CIWA-Ar). Br J Addict. 1989.",
};
const CRISM: Source = {
  id: "crism",
  citation: "Canadian Research Initiative in Substance Matters. Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder. 2023.",
  url: "https://crism.ca/alcohol-use-disorder/",
};
const GOLDFRANK: Source = { id: "goldfrank", citation: "Nelson LS, et al. Goldfrank's Toxicologic Emergencies. McGraw Hill." };
const HUNTER: Source = {
  id: "hunter",
  citation:
    "Dunkley EJ, et al. The Hunter Serotonin Toxicity Criteria: simple and accurate diagnostic decision rules for serotonin toxicity. QJM. 2003.",
};
const BOYER: Source = { id: "boyer", citation: "Boyer EW, Shannon M. The serotonin syndrome. N Engl J Med. 2005." };
const EXTRIP_LI: Source = {
  id: "extrip-lithium",
  citation:
    "Decker BS, et al. Extracorporeal treatment for lithium poisoning: systematic review and recommendations from the EXTRIP workgroup. Clin J Am Soc Nephrol. 2015.",
};
const TUNKEL: Source = {
  id: "idsa-encephalitis",
  citation: "Tunkel AR, et al. The management of encephalitis: clinical practice guidelines by the Infectious Diseases Society of America. Clin Infect Dis. 2008.",
};
const RAMPART: Source = {
  id: "rampart",
  citation: "Silbergleit R, et al. Intramuscular versus intravenous therapy for prehospital status epilepticus. N Engl J Med. 2012.",
};
const HYPONA: Source = {
  id: "hyponatremia",
  citation: "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014.",
};
const DC_HYPO: Source = { id: "dc-hypo", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia in adults. Can J Diabetes. 2018." };
const TC_BLEED: Source = { id: "tc-bleed", citation: "Thrombosis Canada. Clinical guide on the management of bleeding in patients taking DOACs." };
const DLB: Source = {
  id: "dlb",
  citation: "McKeith IG, et al. Diagnosis and management of dementia with Lewy bodies: fourth consensus report of the DLB Consortium. Neurology. 2017.",
};
const SSC: Source = {
  id: "ssc",
  citation: "Evans L, et al. Surviving Sepsis Campaign: international guidelines for management of sepsis and septic shock 2021. Crit Care Med. 2021.",
};
const NICE_HI: Source = {
  id: "nice-head",
  citation: "National Institute for Health and Care Excellence. Head injury: assessment and early management (NG232). 2023.",
  url: "https://www.nice.org.uk/guidance/ng232",
};
const HIP_BLOCK: Source = { id: "hip-block", citation: "Guay J, et al. Peripheral nerve blocks for hip fractures in adults. Cochrane Database Syst Rev." };

/* Shared key items -------------------------------------------------------- */

const ACUTE = k("acute", "Acute onset over hours to days", "acute", "sudden", "abrupt", "rapid onset", "hour");
const FLUCT = k("fluct", "Fluctuating course", "fluctuating", "fluctuation", "fluctuate", "waxing", "waning", "wax and wane");
const INATTN = k(
  "attention",
  "Inattention, such as being unable to follow a conversation or count backward",
  "inattention", "attention", "inattentive", "distractible", "distractibility", "count backward", "month backward",
);
const LOC = k(
  "loc",
  "Altered level of consciousness, drowsy or hypervigilant",
  "level of consciousness", "altered consciousness", "drowsy", "drowsiness", "hypervigilant", "hypervigilance", "decreased loc", "altered loc", "arousal", "somnolent",
);
const DISORG = k("disorg", "Disorganized thinking or incoherent speech", "disorganized", "disorganised", "incoherent", "rambling", "mumbling");
const DISORIENT = k("disorient", "Disorientation to time or place", "disoriented", "disorientation", "disorientated");

const SITTER = k("sitter", "Constant observation by a sitter or companion", "sitter", "observation", "one to one", "companion", "constant observation");
const FAMILY = k("family", "Family member at the bedside", "family", "wife", "daughter", "caregiver", "familiar");
const REORIENT = k("reorient", "Frequent reorientation and a calm, reassuring approach", "reorient", "reorientation", "reorienting", "clock", "calendar", "calm", "reassure", "reassurance");
const SENSORY = k("sensory", "Glasses and hearing aids in place", "glasses", "hearing aid", "hearing");
const ROOM = k("room", "Quiet room with low stimulation and appropriate lighting", "quiet", "noise", "stimulation", "single room", "private room", "light", "lighting");
const LOWBED = k("lowbed", "Low bed, floor mats or bed alarm and removal of hazards", "low bed", "mat", "bed alarm", "hazard", "fall");

const SDM_MATCH = ["sdm", "substitute decision maker", "substitute decision"];

export const DELIRIUM_AGITATION_SAMPS: Samp[] = [
  /* 01 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-01",
    topic: "delirium-agitation",
    title: "Confusion in an older woman",
    stem:
      "An 84-year-old woman is brought by her daughter for two days of increasing confusion. She is drowsy in the day and restless at night, pulling at her clothes. She has mild Alzheimer disease and scored 22 of 30 on a MoCA last year. At baseline she dresses herself and chats normally.\n\nMedications: donepezil, hydrochlorothiazide, zopiclone at night, and oxybutynin started one week ago.\n\nVital signs: T 37.9°C, HR 98/min, BP 146/80 mmHg, RR 20/min, SpO2 94% on room air. Glucose 7.2 mmol/L. Weight 52 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that help distinguish delirium from her baseline dementia.",
        required: 3,
        accept: [ACUTE, FLUCT, INATTN, LOC, DISORG, k("visual", "Visual hallucinations or misperceptions", "visual hallucination", "misperception", "illusion"), k("sleep", "Reversal of the sleep wake cycle", "sleep wake", "day night", "sleep cycle", "sundown")],
        explanation:
          "Delirium is acute, fluctuates and centres on inattention and altered arousal. Dementia is gradual with preserved attention and alertness until late. Memory loss is present in both and does not help. The CAM captures these features at the bedside.",
        keyFeature: kf(1),
        source: "cam",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List FOUR likely contributors to her delirium that you would look for and address.",
        required: 4,
        accept: [
          k("oxy", "Anticholinergic effect of oxybutynin", "oxybutynin", "anticholinergic"),
          k("zop", "Sedative hypnotic use with zopiclone", "zopiclone", "sedative", "hypnotic"),
          k("na", "Hyponatremia from hydrochlorothiazide", "hyponatremia", "hyponatraemia", "sodium", "hydrochlorothiazide", "thiazide", "electrolyte"),
          k("retention", "Urinary retention", "retention", "bladder"),
          k("infection", "Infection such as pneumonia or urinary tract infection", "infection", "urinary tract", "uti", "pneumonia", "sepsis"),
          k("hypoxia", "Hypoxia", "hypoxia", "hypoxemia", "hypoxaemia"),
          k("dehydration", "Dehydration", "dehydration", "dehydrated", "volume depletion"),
          k("constipation", "Constipation", "constipation"),
          k("pain", "Untreated pain", "pain"),
        ],
        explanation:
          "Delirium is usually multifactorial. New oxybutynin is a strong anticholinergic and can also cause urinary retention. Zopiclone and a thiazide add risk. Fever and borderline saturation point to infection. Each needs to be sought and corrected.",
        keyFeature: kf(2),
        source: "ccsmh",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "Her daughter asks how staff can keep her safe and settled without sedation. List THREE nonpharmacological measures.",
        required: 3,
        accept: [
          REORIENT,
          SENSORY,
          FAMILY,
          ROOM,
          k("sleep", "Protect sleep at night and keep her awake and active by day", "sleep", "day night"),
          k("mobilize", "Early mobilization", "mobilize", "mobilization", "mobilise", "mobilisation", "walk", "ambulate"),
          k("tethers", "Avoid tethers such as urinary catheters, IV lines and restraints", "avoid tether", "avoid catheter", "avoid foley", "avoid line", "avoid restraint", "avoid physical restraint", "no restraint", "minimize restraint", "remove catheter", "remove line", "remove foley"),
          k("hydration", "Maintain hydration and nutrition", "hydration", "fluid", "nutrition", "eat", "drink"),
          SITTER,
          LOWBED,
        ],
        explanation:
          "Multicomponent nonpharmacological care is first line in delirium. Reorientation, sensory aids, family presence, sleep protection and mobilization reduce distress and falls. Restraints and tethers increase agitation and injury.",
        keyFeature: kf(3),
        source: "ccsmh",
      },
    ],
    sources: [CAM, CCSMH],
    ...META,
  },

  /* 02 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-02",
    topic: "delirium-agitation",
    title: "Shouting in the waiting room",
    stem:
      "Police bring a 24-year-old man to the emergency department after he shouted at strangers on a bus. His parents say he has become withdrawn over three months and has been hearing voices. He is pacing and shouting in the waiting room.\n\nVital signs: T 36.8°C, HR 96/min, BP 132/84 mmHg, RR 16/min, SpO2 99% on room air. Glucose 5.8 mmol/L.\n\nHe is alert and oriented to person, place and date. He follows the conversation. He says voices tell him he is being watched.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features in this presentation that favour a primary psychotic disorder over delirium.",
        required: 3,
        accept: [
          k("oriented", "Oriented to person, place and time", "oriented", "orientation"),
          k("attention", "Intact attention", "attention", "attentive", "follows conversation", "follow the conversation"),
          k("alert", "Alert with a normal level of consciousness", "alert", "normal level of consciousness", "clear sensorium", "normal loc"),
          k("auditory", "Auditory rather than visual hallucinations", "auditory", "hearing voice", "voice"),
          k("gradual", "Gradual onset over months", "gradual", "month", "insidious", "prodrome", "prodromal"),
          k("age", "Young age at onset", "age", "young"),
          k("vitals", "Normal vital signs", "normal vital", "vital"),
          k("delusion", "Systematized paranoid delusions", "delusion", "paranoid", "paranoia"),
        ],
        explanation:
          "Primary psychosis usually has a clear sensorium, intact orientation and attention, and auditory hallucinations. Onset is often gradual in young adults. Delirium shows inattention, altered arousal, disorientation and often abnormal vitals. A new psychosis after about age 40 should prompt a medical search.",
        keyFeature: kf(1),
        source: "acep-agitation",
      },
      {
        id: "q2",
        kind: "short",
        update: "He becomes more agitated, clenches his fists and threatens a nurse.",
        prompt: "List THREE immediate actions to keep everyone safe.",
        required: 3,
        accept: [
          k("security", "Call security or a Code White", "security", "code white", "show of force", "police"),
          k("deesc", "Verbal de-escalation by one calm lead staff member", "de escalation", "deescalation", "de escalate", "verbal", "calm voice"),
          k("move", "Move him to a quiet safe room away from other patients", "quiet room", "safe room", "seclusion", "remove other patient", "move him", "away from other"),
          k("exit", "Keep a clear exit for staff and do not block his path", "exit", "door", "distance", "space"),
          k("weapons", "Remove potential weapons and search belongings", "weapon", "search", "belonging", "remove object"),
          k("alone", "Do not approach alone", "not alone", "never alone", "team", "backup", "help"),
          k("oral", "Offer voluntary oral medication", "oral", "po", "offer medication"),
        ],
        explanation:
          "Safety comes first for staff, other patients and the patient. Summon help early and move him to a safe space. One person leads verbal de-escalation while staff keep an exit and remove objects. Offering oral medication gives him a sense of control.",
        keyFeature: kf(3),
        source: "beta-deesc",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "He agrees to take medication by mouth. Write ONE appropriate oral regimen. Include the drug and dose.",
        required: 1,
        accept: [
          k("olanz", "Olanzapine 5 to 10 mg PO or orally disintegrating", "olanzapine 5", "olanzapine 10", "olanzapine 5mg", "olanzapine 10mg", "zyprexa 10"),
          k("risp", "Risperidone 1 to 2 mg PO", "risperidone 1", "risperidone 2", "risperidone 1mg", "risperidone 2mg"),
          k("loraz", "Lorazepam 1 to 2 mg PO or SL", "lorazepam 1", "lorazepam 2", "lorazepam 1mg", "lorazepam 2mg", "ativan 1", "ativan 2"),
          k("halo", "Haloperidol 5 mg PO, often with lorazepam", "haloperidol 5", "haloperidol 5mg", "haldol 5"),
        ],
        explanation:
          "Voluntary oral medication is preferred when the patient cooperates. A second generation antipsychotic suits agitation from psychosis. Lorazepam is reasonable alone or combined. Early calming medication can avoid the need for restraint.",
        keyFeature: kf(4),
        source: "beta-pharm",
      },
      {
        id: "q4",
        kind: "short",
        update: "After settling, he demands to leave. You believe he meets criteria for a Form 1 under Box A of the Ontario Mental Health Act.",
        prompt: "List TWO elements that must be present for a Box A Form 1.",
        required: 2,
        accept: [
          k("self", "He has threatened or attempted to cause bodily harm to himself", "harm himself", "harm to himself", "self harm", "suicide", "suicidal"),
          k("others", "He has behaved violently toward another person or caused another person to fear bodily harm", "violent", "violence", "fear", "harm other", "harm to other", "threatened a nurse", "threatening"),
          k("care", "He has shown a lack of competence to care for himself", "care for himself", "care for self", "competence", "self care"),
          k("disorder", "He is apparently suffering from a mental disorder", "mental disorder", "mental illness"),
          k("outcome", "The disorder will likely result in serious bodily harm to himself or another, or serious physical impairment", "serious bodily harm", "bodily harm", "physical impairment", "impairment"),
          k("exam", "The physician personally examined him within the past 7 days", "7 day", "seven day", "examined"),
        ],
        explanation:
          "Box A needs a past or present behaviour: threat or attempt of self harm, violence or causing fear in others, or inability to care for oneself. The physician must also believe a mental disorder will likely cause serious bodily harm or serious physical impairment. The examination must be within 7 days. Give the patient a Form 42. This is Ontario law. Other provinces have their own mental health acts with different criteria and forms.",
        keyFeature: kf(5),
        source: "mha",
      },
    ],
    sources: [ACEP_AGIT, BETA_DEESC, BETA_PHARM, MHA],
    ...META,
  },

  /* 03 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-03",
    topic: "delirium-agitation",
    alsoTopics: ["tox", "environmental"],
    title: "Running through traffic",
    stem:
      "Paramedics and four police officers bring a 31-year-old man who was running through traffic. A friend says he has used methamphetamine for three days. He is screaming, incoherent and fighting the officers holding him. There is no IV access.\n\nVital signs: T 39.2°C, HR 148/min, BP 172/100 mmHg, RR 28/min, SpO2 96% on room air. Glucose 6.1 mmol/L. Estimated weight 90 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Write the most appropriate initial chemical sedation. Include the drug, dose and route.",
        required: 1,
        accept: [
          k(
            "ketamine",
            "Ketamine 4 to 5 mg/kg IM (about 360 to 450 mg)",
            "ketamine 4 mg/kg", "ketamine 5 mg/kg", "ketamine 4mg/kg", "ketamine 5mg/kg", "ketamine 350", "ketamine 360", "ketamine 400", "ketamine 450",
          ),
          k("midaz", "Midazolam 5 to 10 mg IM, with or without haloperidol 5 mg IM", "midazolam 5", "midazolam 10", "midazolam 5mg", "midazolam 10mg", "versed 10"),
          k("drop", "Droperidol 5 to 10 mg IM where available", "droperidol 5", "droperidol 10"),
        ],
        unacceptable: [bad("Physical restraint without sedation", ["restraint alone", "restraint only", "no sedation"])],
        explanation:
          "Severe agitation with sympathomimetic toxicity needs rapid IM sedation. Ketamine gives dissociation within minutes. Midazolam, alone or with haloperidol, is a common alternative and benzodiazepines treat the underlying toxidrome. Struggling against restraint without sedation worsens hyperthermia and acidosis.",
        keyFeature: kf(4),
        source: "acep-agitation",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE life threatening complications you must anticipate in this patient.",
        required: 3,
        accept: [
          k("hyperthermia", "Severe hyperthermia", "hyperthermia", "temperature", "heat"),
          k("rhabdo", "Rhabdomyolysis", "rhabdomyolysis", "rhabdo", "ck", "creatine kinase"),
          k("aki", "Acute kidney injury", "kidney", "renal", "aki"),
          k("k", "Hyperkalemia", "hyperkalemia", "hyperkalaemia", "potassium"),
          k("acidosis", "Metabolic acidosis", "acidosis", "lactate"),
          k("seizure", "Seizures", "seizure"),
          k("arrhythmia", "Dysrhythmia or cardiac arrest", "arrhythmia", "dysrhythmia", "arrest", "ventricular"),
          k("acs", "Myocardial ischemia", "acs", "myocardial", "ischemia", "ischaemia", "acute coronary"),
          k("ich", "Intracranial hemorrhage", "intracranial", "ich", "stroke", "hemorrhage", "haemorrhage"),
          k("dissection", "Aortic dissection", "dissection"),
          k("resp", "Respiratory depression or airway loss after sedation", "respiratory depression", "apnea", "apnoea", "airway", "laryngospasm", "hypoventilation"),
        ],
        explanation:
          "Stimulant toxicity with struggle causes hyperthermia, acidosis and rhabdomyolysis with hyperkalemia. These can lead to sudden cardiac arrest. Stroke, ACS and dissection follow severe hypertension. Sedation adds airway risk.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "short",
        update: "He is sedated. Four point restraints remain on while you complete the workup.",
        prompt: "List FOUR components of monitoring required while he stays in restraints.",
        required: 4,
        accept: [
          k("obs", "Continuous direct observation", "constant observation", "continuous observation", "direct observation", "observation", "one to one", "1:1", "sitter", "line of sight"),
          k("cardiac", "Continuous cardiac monitoring", "cardiac monitor", "ecg monitor", "telemetry", "cardiac monitoring"),
          k("spo2", "Continuous pulse oximetry", "spo2", "pulse oximetry", "oximetry", "oxygen saturation"),
          k("etco2", "Capnography", "capnography", "etco2", "end tidal", "co2"),
          k("vitals", "Frequent vital signs including temperature", "vital", "temperature"),
          k("position", "Supine or lateral positioning, never prone", "avoid prone", "no prone", "never prone", "not prone", "supine", "lateral", "position", "positioning"),
          k("nv", "Neurovascular and skin checks of restrained limbs", "neurovascular", "circulation", "limb check", "skin", "pulse check"),
          k("reassess", "Regular reassessment of the need for restraint with removal as soon as safe", "reassess", "reassessment", "remove restraint", "discontinue restraint", "release", "remove as soon", "removal as soon"),
          k("doc", "Documentation of indication, type and checks", "document", "documentation"),
          k("care", "Hydration, toileting and comfort", "hydration", "toilet", "comfort"),
        ],
        explanation:
          "Restrained sedated patients can die from hypoventilation, positional asphyxia or arrhythmia. Continuous observation with cardiac, oximetry and capnography monitoring is required. Check limbs and vitals often and reassess the need for restraint regularly. Remove restraints as soon as it is safe.",
        keyFeature: kf(4),
        source: "prma",
      },
      {
        id: "q4",
        kind: "short",
        update: "Twenty minutes later his core temperature is 40.1°C.",
        prompt: "List TWO immediate treatments for his temperature.",
        required: 2,
        accept: [
          k("evap", "Evaporative cooling with mist and fans", "evaporative", "mist", "fan", "spray"),
          k("ice", "Ice packs to groin, axillae and neck", "ice pack", "ice"),
          k("immersion", "Cold water immersion", "immersion", "ice bath", "cold water"),
          k("benzo", "Further benzodiazepine sedation to stop muscle heat production", "benzodiazepine", "midazolam", "lorazepam", "diazepam", "sedation"),
          k("fluids", "Cool IV crystalloid", "cold iv", "cool iv", "chilled", "cold saline", "cold fluid", "iv fluid", "crystalloid"),
          k("paralysis", "Intubation with paralysis if temperature does not respond", "paralysis", "intubation", "paralyze", "paralyse", "intubate"),
        ],
        unacceptable: [bad("Antipyretics", ["acetaminophen", "tylenol", "antipyretic", "ibuprofen"])],
        explanation:
          "Toxic hyperthermia comes from muscle activity, not a reset hypothalamus. Cool aggressively with external methods and control agitation with more sedation. Antipyretics do not work. Refractory hyperthermia needs paralysis and intubation.",
        keyFeature: { topic: "environmental", n: 2 },
        source: "goldfrank",
      },
    ],
    sources: [ACEP_AGIT, GOLDFRANK, PRMA],
    ...META,
  },

  /* 04 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-04",
    topic: "delirium-agitation",
    alsoTopics: ["tox", "loc"],
    title: "Seeing insects on the walls",
    stem:
      "A 52-year-old man is brought by his brother. He usually drinks 20 beers a day and stopped three days ago when he ran out of money. He is sweating and tremulous, sees insects on the walls and does not know where he is. He has a healing bruise on his left forehead.\n\nVital signs: T 38.3°C, HR 132/min, BP 178/104 mmHg, RR 24/min, SpO2 95% on room air. Glucose 3.6 mmol/L. Weight 68 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Besides alcohol withdrawal, list THREE other causes of his delirium that you must consider.",
        required: 3,
        accept: [
          k("ich", "Intracranial hemorrhage such as subdural hematoma", "subdural", "intracranial", "head injury", "ich", "bleed", "hematoma"),
          k("infection", "CNS or systemic infection", "meningitis", "encephalitis", "sepsis", "infection", "pneumonia"),
          k("wernicke", "Wernicke encephalopathy", "wernicke", "thiamine deficiency"),
          k("hepatic", "Hepatic encephalopathy", "hepatic", "liver", "ammonia"),
          k("hypogly", "Hypoglycemia", "hypoglycemia", "hypoglycaemia", "glucose"),
          k("toxic", "Toxic alcohol or other ingestion", "methanol", "ethylene glycol", "toxic alcohol", "co ingestion", "overdose", "ingestion"),
          k("symp", "Sympathomimetic toxicity", "sympathomimetic", "cocaine", "amphetamine", "stimulant"),
          k("otherwd", "Withdrawal from other sedatives such as benzodiazepines, GHB or baclofen", "benzodiazepine withdrawal", "sedative withdrawal", "ghb", "baclofen"),
          k("thyroid", "Thyrotoxicosis", "thyroid", "thyrotoxicosis"),
          k("postictal", "Postictal state after a withdrawal seizure", "seizure", "postictal"),
          k("lytes", "Electrolyte disturbance such as hyponatremia", "sodium", "electrolyte", "hyponatremia", "magnesium"),
        ],
        explanation:
          "Delirium tremens is a diagnosis of exclusion. The forehead bruise demands CT for subdural hematoma. Fever may be infection rather than withdrawal. Hypoglycemia, Wernicke encephalopathy, hepatic encephalopathy and co-ingestions are common in this group.",
        keyFeature: kf(2),
        source: "crism",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "He is striking at staff and pulling out his IV. Write the initial pharmacological treatment. Include the drug, dose, route and frequency.",
        required: 1,
        accept: [
          k("diazepam", "Diazepam 10 to 20 mg IV every 5 to 10 minutes until calm", "diazepam 10", "diazepam 20", "diazepam 10mg", "diazepam 20mg", "valium 10"),
          k("lorazepam", "Lorazepam 2 to 4 mg IV every 15 to 20 minutes until calm", "lorazepam 2", "lorazepam 4", "lorazepam 2mg", "lorazepam 4mg", "ativan 2"),
          k("phenobarb", "Phenobarbital IV, as an adjunct or alternative per local protocol", "phenobarbital", "phenobarb", "phenobarbitone"),
        ],
        unacceptable: [bad("Haloperidol as the sole agent", ["haloperidol alone", "haldol alone", "haloperidol monotherapy", "antipsychotic alone"])],
        explanation:
          "Benzodiazepines treat the cause of withdrawal delirium and prevent seizures. Give large, rapidly repeated IV doses titrated to calm but rousable. Phenobarbital helps when benzodiazepines fail. Antipsychotics alone lower the seizure threshold and do not treat withdrawal.",
        keyFeature: kf(4),
        source: "crism",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO other treatments he needs now.",
        required: 2,
        accept: [
          k("thiamine", "IV thiamine, at least 100 mg and up to 500 mg if Wernicke is suspected", "thiamine", "vitamin b1", "b1"),
          k("dextrose", "IV dextrose for his low glucose", "dextrose", "d50", "d10", "glucose"),
          k("fluids", "IV crystalloid", "iv fluid", "crystalloid", "saline", "ringer", "fluid"),
          k("mg", "Magnesium replacement", "magnesium"),
          k("k", "Potassium and phosphate replacement", "potassium", "phosphate", "electrolyte"),
        ],
        explanation:
          "His glucose of 3.6 needs prompt dextrose, and thiamine should be given with it. Do not delay dextrose to give thiamine first. Most patients in withdrawal are volume depleted and low in magnesium and potassium.",
        keyFeature: kf(2),
        source: "crism",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List THREE objective signs you would track to judge the severity of his withdrawal and his response to treatment.",
        required: 3,
        accept: [
          k("hr", "Heart rate", "heart rate", "hr", "tachycardia", "pulse"),
          k("bp", "Blood pressure", "blood pressure", "bp", "hypertension"),
          k("temp", "Temperature", "temperature", "fever", "temp"),
          k("tremor", "Tremor", "tremor"),
          k("sweat", "Diaphoresis", "diaphoresis", "sweating", "sweat"),
          k("rass", "Agitation and sedation level on a scale such as RASS", "rass", "richmond", "sedation scale", "agitation score", "agitation", "sedation level"),
          k("rr", "Respiratory rate", "respiratory rate", "rr"),
          k("seizure", "Seizures", "seizure"),
        ],
        explanation:
          "Once delirious he cannot answer the subjective CIWA-Ar items reliably. Track objective signs such as heart rate, blood pressure, temperature, tremor and sweating. A sedation scale like RASS guides dosing toward calm but rousable.",
        keyFeature: { topic: "tox", n: 8 },
        source: "ciwa",
      },
    ],
    sources: [CRISM, CIWA],
    ...META,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-05",
    topic: "delirium-agitation",
    alsoTopics: ["analgesia-sedation"],
    title: "Agitation after a fall in long term care",
    stem:
      "An 88-year-old man with vascular dementia fell at his long term care home. At baseline he is pleasant, knows staff by name and walks with a walker. Now he is yelling, swinging at staff and pulling at his IV. His left leg is shortened and externally rotated. He has a small occipital hematoma. He has not had any analgesia.\n\nVital signs: T 36.9°C, HR 104/min, BP 158/88 mmHg, RR 20/min, SpO2 95% on room air. Glucose 6.8 mmol/L. Weight 60 kg.\n\nHip X-ray shows a displaced left femoral neck fracture.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE reversible contributors to his agitation.",
        required: 3,
        accept: [
          k("pain", "Untreated pain", "pain", "analgesia"),
          k("head", "Head injury with intracranial bleeding", "head injury", "subdural", "intracranial", "ich", "head"),
          k("retention", "Urinary retention", "retention", "bladder"),
          k("blood", "Blood loss or hypovolemia", "blood loss", "anemia", "anaemia", "hypovolemia", "hemorrhage", "haemorrhage", "bleeding"),
          k("hypoxia", "Hypoxia", "hypoxia", "hypoxemia", "fat embolism"),
          k("infection", "Infection", "infection", "uti", "pneumonia", "sepsis"),
          k("constipation", "Constipation", "constipation"),
          k("meds", "Medications", "medication", "anticholinergic", "sedative"),
          k("sensory", "Missing glasses or hearing aids", "glasses", "hearing"),
          k("env", "Unfamiliar noisy environment", "unfamiliar", "environment", "noise"),
        ],
        explanation:
          "Pain is the most likely and most treatable driver. The occipital hematoma needs CT head before blaming dementia. Retention, blood loss and hypoxia are common after hip fracture. Patients with dementia often cannot report these directly.",
        keyFeature: kf(2),
        source: "ccsmh",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO components of the best analgesic approach for him.",
        required: 2,
        accept: [
          k("block", "Fascia iliaca or femoral nerve block", "fascia iliaca", "femoral nerve", "nerve block", "peng", "regional"),
          k("opioid", "Low dose titrated opioid such as hydromorphone", "hydromorphone", "morphine", "fentanyl", "opioid"),
          k("apap", "Scheduled acetaminophen", "acetaminophen", "paracetamol", "tylenol"),
        ],
        explanation:
          "A fascia iliaca or femoral nerve block gives strong analgesia and reduces opioid need and delirium. Add scheduled acetaminophen and small titrated opioid doses. Undertreated pain is a major cause of delirium after hip fracture.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "hip-block",
      },
      {
        id: "q3",
        kind: "short",
        update: "After a nerve block he is calmer but still pulls at lines and tries to strike staff. Nonpharmacological measures are in place.",
        prompt: "Write an appropriate medication for his agitation. Include the drug, dose and route.",
        required: 1,
        accept: [
          k(
            "halo",
            "Haloperidol 0.25 to 0.5 mg PO, IM or SC, repeated if needed",
            "haloperidol 0.25", "haloperidol 0.5", "haloperidol 0.5mg", "haloperidol 0.25mg", "haldol 0.5", "haloperidol 1 mg", "haloperidol 1mg",
          ),
          k("risp", "Risperidone 0.25 to 0.5 mg PO", "risperidone 0.25", "risperidone 0.5"),
          k("quet", "Quetiapine 12.5 to 25 mg PO", "quetiapine 12.5", "quetiapine 25"),
          k("olanz", "Olanzapine 2.5 mg PO", "olanzapine 2.5"),
        ],
        unacceptable: [
          bad("A benzodiazepine", ["start lorazepam", "give lorazepam", "lorazepam 2", "midazolam 2", "midazolam 5", "diazepam 5", "diazepam 10", "start benzodiazepine", "give benzodiazepine"]),
          bad("Haloperidol 5 mg or more", ["haloperidol 5 mg", "haloperidol 5mg", "haloperidol 10"]),
        ],
        explanation:
          "When distress or danger persists, use a low dose antipsychotic, starting at a quarter to half the usual adult dose. Benzodiazepines worsen delirium in older adults unless the cause is alcohol or sedative withdrawal. Adult doses of haloperidol cause oversedation and extrapyramidal effects.",
        keyFeature: kf(4),
        source: "ccsmh",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "His nurse requests wrist restraints to protect his IV. List TWO alternatives you would try first.",
        required: 2,
        accept: [
          SITTER,
          FAMILY,
          k("lines", "Cover, secure or remove lines that are not essential", "cover", "remove", "sleeve", "hide", "saline lock", "subcutaneous", "secure"),
          LOWBED,
          k("station", "Move him near the nursing station", "nursing station", "near the desk", "visible"),
          REORIENT,
          k("pain", "Reassess and treat pain", "pain", "analgesia"),
        ],
        explanation:
          "Restraints increase agitation, injury and delirium duration. Reduce the reasons to restrain by hiding or removing lines and giving close observation. Family presence and reorientation often settle patients with dementia.",
        keyFeature: kf(3),
        source: "ccsmh",
      },
    ],
    sources: [CCSMH, HIP_BLOCK],
    ...META,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-06",
    topic: "delirium-agitation",
    alsoTopics: ["tox"],
    title: "Picking at the air",
    stem:
      "A 22-year-old woman is brought by her roommate, who found her confused beside an empty bottle of diphenhydramine 50 mg tablets. She is picking at the air and mumbling. She does not follow commands. She has no psychiatric history.\n\nVital signs: T 38.4°C, HR 136/min, BP 142/88 mmHg, RR 20/min, SpO2 98% on room air. Glucose 6.0 mmol/L. Weight 58 kg.\n\nPupils are 7 mm and sluggish. Her skin is dry and flushed. Bowel sounds are absent and her bladder is palpable.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Her roommate wonders if she is having a psychotic break. List THREE features that favour delirium over a primary psychotic disorder.",
        required: 3,
        accept: [
          ACUTE,
          k("attention", "Inattention, unable to follow commands", "inattention", "attention", "inattentive", "follow command"),
          FLUCT,
          LOC,
          DISORIENT,
          k("visual", "Visual hallucinations and picking at the air", "visual", "picking", "carphologia"),
          k("vitals", "Abnormal vital signs such as fever and tachycardia", "vital", "fever", "tachycardia", "hyperthermia"),
          k("signs", "Physical signs of a toxidrome such as mydriasis, dry skin or urinary retention", "mydriasis", "dilated pupil", "dry skin", "flushed", "retention", "bowel sound", "toxidrome"),
          k("nohx", "No prior psychiatric history", "no prior psychiatric", "no psychiatric history", "first episode"),
          DISORG,
        ],
        explanation:
          "Acute onset, inattention, altered arousal and visual hallucinations point to delirium. Fever, tachycardia and dry skin show a medical cause. Primary psychosis rarely starts over hours with abnormal vital signs.",
        keyFeature: kf(1),
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO investigations that will change her management.",
        required: 2,
        accept: [
          k("ecg", "ECG for QRS and QTc", "ecg", "ekg", "electrocardiogram", "qrs", "qtc"),
          k("apap", "Acetaminophen level", "acetaminophen", "paracetamol", "apap"),
          k("ck", "Creatine kinase", "ck", "creatine kinase"),
          k("hcg", "Pregnancy test", "pregnancy", "hcg"),
          k("lytes", "Electrolytes and creatinine", "electrolyte", "potassium", "creatinine"),
          k("asa", "Salicylate level", "salicylate", "asa level"),
        ],
        unacceptable: [bad("Urine drug screen", ["urine drug screen", "uds", "tox screen", "urine tox", "drug screen"])],
        explanation:
          "Diphenhydramine blocks sodium channels in overdose, so the ECG decides on bicarbonate and on antidote safety. An acetaminophen level is needed in every intentional ingestion. A urine drug screen rarely changes management.",
        keyFeature: { topic: "tox", n: 7 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "ECG shows sinus tachycardia at 134/min, QRS 88 ms and QTc 460 ms. She has had no seizures. After discussion with the poison centre you decide to give an antidote.",
        prompt: "Write the antidote. Include the drug, dose, route and rate.",
        required: 1,
        accept: [
          k(
            "physo",
            "Physostigmine 0.5 to 1 mg IV over at least 5 minutes, repeated every 10 to 15 minutes to a total of about 2 mg",
            "physostigmine 0.5", "physostigmine 0.5mg", "physostigmine 1 mg", "physostigmine 1mg",
          ),
        ],
        unacceptable: [
          bad("Neostigmine", ["give neostigmine", "neostigmine 0.5", "neostigmine 2"]),
          bad("Haloperidol", ["haloperidol 5", "haloperidol 2", "haldol 5"]),
        ],
        explanation:
          "Physostigmine reverses central anticholinergic delirium and reduces the need for sedation and restraint. Give it slowly over at least 5 minutes with atropine at the bedside, since a rapid push causes bradycardia, bronchorrhea and seizures. Avoid it with QRS widening. Neostigmine does not cross into the brain.",
        keyFeature: { topic: "tox", n: 2 },
        source: "goldfrank",
      },
    ],
    sources: [GOLDFRANK],
    ...META,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-07",
    topic: "delirium-agitation",
    alsoTopics: ["loc", "tox"],
    title: "Combative and sweaty at home",
    stem:
      "A 76-year-old man was found by his wife in the bathroom, sweaty and swinging at her. He has type 2 diabetes treated with gliclazide MR 120 mg daily and chronic kidney disease with an eGFR of 28 mL/min. Paramedics could not start an IV. In the department a nurse has placed an IV. He remains combative.\n\nVital signs: T 36.4°C, HR 102/min, BP 150/90 mmHg, RR 18/min, SpO2 97% on room air. Capillary glucose 1.9 mmol/L. Weight 74 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Write the immediate treatment. Include the drug, dose and route.",
        required: 1,
        accept: [
          k("d50", "Dextrose 50%, 20 to 50 mL IV (10 to 25 g)", "d50", "d50w", "50% dextrose", "dextrose 50%", "25 g", "25g", "50 ml"),
          k("d10", "Dextrose 10%, 250 mL IV (25 g)", "d10", "d10w", "10% dextrose", "dextrose 10%", "250 ml"),
        ],
        unacceptable: [bad("Oral glucose in a combative patient", ["oral glucose", "juice", "glucose tab", "glucose gel"])],
        explanation:
          "Severe hypoglycemia with altered behaviour needs IV dextrose at once. Diabetes Canada advises 10 to 25 g of IV dextrose, given as D50W or D10W. D10W is gentler on veins. Oral glucose risks aspiration in a patient who cannot cooperate.",
        keyFeature: kf(2),
        source: "dc-hypo",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "He wakes and is back to baseline. List TWO pieces of collateral history from his wife that would change your management.",
        required: 2,
        accept: [
          k("dose", "Recent medication or dose changes, including insulin", "dose", "medication", "new medication", "gliclazide", "sulfonylurea", "insulin"),
          k("od", "Possible intentional or accidental overdose, with a pill count", "overdose", "intentional", "pill count", "empty", "extra"),
          k("intake", "Reduced food intake or vomiting", "intake", "meal", "eating", "vomit", "vomiting", "appetite"),
          k("time", "Time last seen well and duration of symptoms", "last seen", "last normal", "baseline", "time", "duration"),
          k("prior", "Previous hypoglycemic episodes", "previous episode", "prior episode", "recurrent", "similar episode"),
          k("alcohol", "Alcohol use", "alcohol", "drinking", "etoh"),
          k("illness", "Recent illness or worsening kidney function", "illness", "infection", "kidney", "renal"),
          k("fall", "Fall or head injury", "fall", "head injury", "trauma"),
        ],
        explanation:
          "Sulfonylurea hypoglycemia can recur for many hours, especially with poor kidney function. Collateral clarifies the dose taken, intent, intake and duration. It also uncovers injury during the episode.",
        keyFeature: { topic: "loc", n: 3 },
        source: "dc-hypo",
      },
      {
        id: "q3",
        kind: "short",
        update: "Two hours later his glucose is 2.6 mmol/L despite a D10W infusion.",
        prompt: "Name the specific treatment that prevents further sulfonylurea induced hypoglycemia.",
        required: 1,
        accept: [k("octreotide", "Octreotide 50 to 100 mcg SC or IV every 6 to 8 hours", "octreotide", "sandostatin")],
        unacceptable: [bad("Repeated glucagon", ["repeat glucagon", "repeated glucagon", "glucagon 1 mg", "glucagon infusion", "give glucagon"])],
        explanation:
          "Octreotide blocks sulfonylurea driven insulin release and prevents rebound hypoglycemia. Dextrose alone stimulates more insulin release. He needs admission with glucose checks for at least 24 hours given his renal function.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
    ],
    sources: [DC_HYPO, GOLDFRANK],
    ...META,
  },

  /* 08 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-08",
    topic: "delirium-agitation",
    alsoTopics: ["shock", "infectious-diseases"],
    title: "Wanting to go home with a fever",
    stem:
      "An 81-year-old man with a chronic indwelling urinary catheter has a fever and confusion. He is oriented to self only and drifts in and out of the conversation. He is pulling at his IV and says the nurses are poisoning him. He refuses antibiotics and wants to go home. His son is with him. His wife of 55 years is at home. He has no guardian and no attorney for personal care. You work in Ontario.\n\nVital signs: T 38.9°C, HR 118/min, BP 92/54 mmHg, RR 24/min, SpO2 93% on room air. Lactate 3.8 mmol/L. Weight 72 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Under Ontario's Health Care Consent Act, list the TWO abilities a person needs to be capable of consenting to treatment.",
        required: 2,
        accept: [
          k("understand", "Able to understand the information relevant to the treatment decision", "understand", "understanding"),
          k("appreciate", "Able to appreciate the reasonably foreseeable consequences of a decision or lack of decision", "appreciate", "appreciation", "consequence"),
        ],
        unacceptable: [bad("Agreeing with the recommended treatment", ["agree", "agreement"])],
        explanation:
          "Capacity under the HCCA is specific to the decision and to the time. The person must understand the relevant information and appreciate the likely consequences. Disagreeing with the physician does not mean incapacity. Delirium often removes the ability to appreciate.",
        keyFeature: kf(5),
        source: "hcca",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "He is found incapable of consenting to antibiotics. Who is the correct substitute decision maker? Select one.",
        options: [
          "His son, because he is present",
          "His wife",
          "The Public Guardian and Trustee",
          "The most responsible physician",
          "The hospital ethics committee",
          "None. Treat him under a Form 1",
        ],
        correct: 1,
        explanation:
          "With no guardian, attorney or board appointed representative, a spouse ranks above children in the HCCA hierarchy. Being present does not raise the son's rank. The Public Guardian and Trustee is a last resort. A Form 1 does not authorize treatment of a medical illness. Other provinces rank substitutes differently.",
        keyFeature: kf(5),
        source: "hcca",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "You cannot reach his wife by phone. List TWO conditions under the HCCA that allow you to treat him now without consent.",
        required: 2,
        accept: [
          k("harm", "He is experiencing severe suffering or is at risk of serious bodily harm without prompt treatment", "severe suffering", "suffering", "serious bodily harm", "bodily harm", "harm"),
          k("delay", "The delay to obtain consent from his substitute would prolong suffering or risk harm", "delay"),
          k("incapable", "He is incapable of consenting", "incapable", "incapacity", "lack capacity", "lacks capacity", "not capable"),
          k("wish", "No known prior capable wish refusing this treatment", "no prior capable wish", "no known prior capable wish", "no prior wish", "no known wish", "no advance directive", "no prior refusal", "prior capable wish", "prior wish", "known wish", "expressed wish", "advance directive", "prior refusal"),
        ],
        explanation:
          "The HCCA emergency exception applies when an incapable person faces severe suffering or serious harm and waiting for a substitute would add to that risk. It does not apply if you know of a prior capable wish refusing the treatment. Keep trying to reach his wife and document your reasoning. This is HCCA section 25. Other provinces have similar but not identical emergency provisions.",
        keyFeature: kf(5),
        source: "hcca",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List THREE treatments you would start immediately for the cause of his delirium.",
        required: 3,
        accept: [
          k("fluids", "IV crystalloid bolus", "crystalloid", "fluid", "saline", "ringer"),
          k("abx", "Broad spectrum IV antibiotics", "antibiotic", "ceftriaxone", "piperacillin", "pip tazo", "meropenem"),
          k("o2", "Supplemental oxygen", "oxygen", "o2"),
          k("cultures", "Blood and urine cultures before antibiotics", "culture"),
          k("source", "Replace the urinary catheter for source control and a clean sample", "catheter", "foley", "source"),
          k("apap", "Acetaminophen for fever", "acetaminophen", "paracetamol"),
        ],
        explanation:
          "Delirium here is a sign of sepsis with hypoperfusion. Give early fluids and antibiotics after cultures, and change the long term catheter for source control. Treating the cause is the most effective delirium treatment.",
        keyFeature: kf(2),
        source: "ssc",
      },
    ],
    sources: [HCCA, SSC],
    ...META,
  },

  /* 09 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-09",
    topic: "delirium-agitation",
    alsoTopics: ["tox"],
    title: "Is it mania again",
    stem:
      "A 58-year-old woman with bipolar I disorder has taken lithium 900 mg daily for years. Her family doctor started hydrochlorothiazide three weeks ago. She has had four days of vomiting and diarrhea. Her husband says she is manic again.\n\nVital signs: T 37.3°C, HR 96/min, BP 108/64 mmHg, RR 18/min, SpO2 97% on room air. Glucose 5.9 mmol/L. Weight 66 kg.\n\nShe does not know the date or where she is and cannot count backward from 20. She has a coarse tremor, slurred speech, an unsteady gait and occasional myoclonic jerks.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE features that favour delirium over a manic relapse.",
        required: 3,
        accept: [
          DISORIENT,
          k("attention", "Inattention, unable to count backward", "attention", "inattention", "count backward", "inattentive"),
          k("neuro", "Neurological signs such as coarse tremor, ataxia, dysarthria or myoclonus", "tremor", "ataxia", "dysarthria", "slurred", "myoclonus", "myoclonic", "neurologic", "unsteady"),
          k("acute", "Acute onset with a gastrointestinal illness", "acute", "vomiting", "diarrhea", "diarrhoea", "sudden"),
          FLUCT,
          k("med", "Recent new medication that interacts with lithium", "thiazide", "hydrochlorothiazide", "new medication", "medication change", "interaction"),
          k("nomania", "Absence of typical mania features such as grandiosity or pressured speech", "grandiose", "grandiosity", "pressured", "no mania"),
        ],
        explanation:
          "Mania does not cause disorientation, inattention, ataxia or myoclonus. These point to delirium, here from lithium toxicity. A thiazide plus volume loss reduces lithium clearance. Attributing new behaviour to known psychiatric illness is a classic error.",
        keyFeature: kf(1),
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO investigations that will change management now.",
        required: 2,
        accept: [
          k("li", "Serum lithium level", "lithium level", "lithium", "serum lithium"),
          k("cr", "Creatinine and urea", "creatinine", "renal function", "kidney function", "egfr", "urea"),
          k("na", "Sodium and electrolytes", "sodium", "electrolyte"),
          k("ecg", "ECG", "ecg", "ekg"),
          k("ca", "Calcium", "calcium"),
        ],
        unacceptable: [bad("Urine drug screen", ["urine drug screen", "uds", "drug screen"])],
        explanation:
          "A lithium level with creatinine defines severity and the need for dialysis. In chronic toxicity, symptoms can be severe at modest levels. Sodium and ECG guide supportive care.",
        keyFeature: { topic: "tox", n: 7 },
        source: "extrip-lithium",
      },
      {
        id: "q3",
        kind: "short",
        update: "Lithium level 4.3 mmol/L. Creatinine 168 µmol/L (baseline 88). Sodium 132 mmol/L.",
        prompt: "What is the definitive treatment? List ONE.",
        required: 1,
        accept: [k("hd", "Hemodialysis", "hemodialysis", "haemodialysis", "dialysis", "extracorporeal", "crrt")],
        unacceptable: [bad("Activated charcoal", ["give charcoal", "activated charcoal 50", "charcoal 50 g", "charcoal 1 g/kg"])],
        explanation:
          "EXTRIP recommends extracorporeal removal when lithium exceeds 4.0 mmol/L with impaired kidney function, or with decreased consciousness, seizures or dysrhythmias. Intermittent hemodialysis is preferred. Charcoal does not bind lithium.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-lithium",
      },
      {
        id: "q4",
        kind: "single",
        prompt:
          "You work in Ontario. She refuses dialysis, pulls at her IV and wants to go home. She cannot describe her illness or what would happen without treatment. Her husband is present. What is the most appropriate approach? Select one.",
        options: [
          "Complete a Form 1 under the Mental Health Act, which authorizes dialysis",
          "Find her incapable for this treatment and seek consent from her husband as substitute decision maker",
          "Accept her refusal because every patient may refuse treatment",
          "Wait until she becomes capable before starting dialysis",
          "Ask her psychiatrist to complete a Form 3",
        ],
        correct: 1,
        explanation:
          "She cannot understand or appreciate the decision, so she is incapable for this treatment. Consent comes from her spouse under the HCCA. A Form 1 authorizes detention for psychiatric assessment, not treatment of a medical illness. Delay risks permanent neurological injury. Other provinces have different statutes.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [GOLDFRANK, EXTRIP_LI, HCCA],
    ...META,
  },

  /* 10 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-10",
    topic: "delirium-agitation",
    alsoTopics: ["loc"],
    title: "New confusion two days after a fall",
    stem:
      "An 82-year-old woman takes apixaban 5 mg twice daily for atrial fibrillation. She fell and struck her head two days ago. Since last night she has been confused and agitated. Her daughter says she normally lives alone and manages her own finances. Her last apixaban dose was 3 hours ago.\n\nVital signs: T 36.8°C, HR 84/min irregular, BP 168/92 mmHg, RR 16/min, SpO2 96% on room air. Glucose 7.0 mmol/L. Weight 61 kg.\n\nGCS is 14 (E4 V4 M6). No obvious focal deficit.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the single most important investigation now? List ONE.",
        required: 1,
        accept: [k("ct", "Noncontrast CT head", "ct head", "ct brain", "head ct", "ct scan of the head", "ct of the head", "ct")],
        explanation:
          "An anticoagulated older adult with new confusion after head trauma has an intracranial bleed until proven otherwise. NICE advises CT within 1 hour for a GCS below 15 after head injury, and anticoagulation lowers the threshold further. The Canadian CT Head Rule does not apply because anticoagulated patients were excluded. MRI is too slow and a lumbar puncture risks herniation with a mass lesion.",
        keyFeature: kf(2),
        source: "nice-head",
      },
      {
        id: "q2",
        kind: "short",
        update: "CT shows a 14 mm acute on chronic left subdural hematoma with 6 mm of midline shift. Neurosurgery will operate.",
        prompt: "Name the agent you would give to reverse her anticoagulation.",
        required: 1,
        accept: [k("pcc", "Prothrombin complex concentrate, or andexanet alfa where available", "pcc", "prothrombin complex", "octaplex", "beriplex", "andexanet", "andexxa")],
        explanation:
          "For life threatening bleeding on an anti-Xa drug, give PCC, often a fixed 2000 units or 25 to 50 units/kg, or andexanet alfa where it is available. Vitamin K, plasma and protamine do not reverse apixaban. Idarucizumab reverses only dabigatran.",
        keyFeature: kf(2),
        source: "tc-bleed",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO elements you will document and trend while she waits for surgery.",
        required: 2,
        accept: [
          k("gcs", "GCS with each component", "gcs", "glasgow"),
          k("pupils", "Pupil size and reactivity", "pupil"),
          k("motor", "Focal motor findings", "motor", "focal", "limb", "weakness", "hemiparesis", "lateralizing"),
          k("vitals", "Blood pressure and heart rate for Cushing response", "cushing", "blood pressure", "bradycardia", "vital"),
          k("attention", "Attention and delirium screen such as the CAM", "cam", "attention", "delirium screen"),
        ],
        explanation:
          "Serial GCS components, pupils and limb movements detect expansion early. Rising blood pressure with falling heart rate suggests raised intracranial pressure. Use descriptive terms rather than labels like confused.",
        keyFeature: { topic: "loc", n: 5 },
        source: "nice-head",
      },
      {
        id: "q4",
        kind: "short",
        prompt:
          "You work in Ontario. She says she does not want surgery. She cannot say why she is in hospital or repeat back the risks you explained. Her daughter holds her power of attorney for personal care. Who should consent to surgery?",
        required: 1,
        accept: [k("poa", "Her daughter as attorney for personal care", "daughter", "attorney for personal care", "poa", "power of attorney", ...SDM_MATCH)],
        explanation:
          "Delirium has removed her ability to understand and appreciate this decision. Her attorney for personal care is the highest ranked substitute and gives consent. The daughter must follow any known prior capable wishes, otherwise act in her best interests. Ontario has no two physician consent route. Other provinces differ.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [NICE_HI, TC_BLEED, HCCA],
    ...META,
  },

  /* 11 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-11",
    topic: "delirium-agitation",
    alsoTopics: ["tox"],
    title: "Shaking and sweating after a new painkiller",
    stem:
      "A 34-year-old woman takes sertraline 150 mg daily. Three days ago she started tramadol for back pain. Last night she took extra tramadol and a dextromethorphan cough syrup. For six hours she has been agitated, confused, shaking and sweating, with diarrhea.\n\nVital signs: T 39.0°C, HR 128/min, BP 164/96 mmHg, RR 22/min, SpO2 98% on room air. Glucose 6.4 mmol/L. Weight 64 kg.\n\nShe has dilated pupils and heavy sweating. There is inducible sustained ankle clonus, ocular clonus and brisk reflexes, greater in the legs than the arms.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE findings that support serotonin toxicity under the Hunter criteria.",
        required: 3,
        accept: [
          k("ocular", "Ocular clonus", "ocular"),
          k("inducible", "Inducible or spontaneous clonus", "inducible", "ankle clonus", "spontaneous clonus", "clonus"),
          k("reflex", "Hyperreflexia", "hyperreflexia", "brisk reflex", "hyperreflexic"),
          k("tremor", "Tremor", "tremor"),
          k("sweat", "Diaphoresis", "diaphoresis", "sweating"),
          k("agitation", "Agitation", "agitation", "agitated"),
          k("temp", "Temperature above 38°C with clonus", "hyperthermia", "temperature", "fever"),
          k("drug", "Exposure to serotonergic drugs", "serotonergic", "sertraline", "tramadol", "dextromethorphan", "ssri"),
        ],
        explanation:
          "The Hunter criteria require a serotonergic agent plus clonus based findings. Inducible clonus with agitation or diaphoresis, ocular clonus, or tremor with hyperreflexia each qualify. Lower limb predominance is typical.",
        keyFeature: { topic: "tox", n: 2 },
        source: "hunter",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List TWO other causes of agitated delirium with fever that you must distinguish.",
        required: 2,
        accept: [
          k("nms", "Neuroleptic malignant syndrome", "neuroleptic malignant", "nms"),
          k("antichol", "Anticholinergic toxicity", "anticholinergic"),
          k("symp", "Sympathomimetic toxicity", "sympathomimetic", "cocaine", "amphetamine", "stimulant"),
          k("cns", "CNS infection or sepsis", "meningitis", "encephalitis", "sepsis", "infection"),
          k("mh", "Malignant hyperthermia", "malignant hyperthermia"),
          k("thyroid", "Thyroid storm", "thyroid", "thyrotoxicosis"),
          k("wd", "Alcohol or sedative withdrawal", "withdrawal"),
          k("heat", "Heat stroke", "heat stroke"),
          k("asa", "Salicylate toxicity", "salicylate"),
        ],
        explanation:
          "NMS develops over days with rigidity and bradyreflexia. Anticholinergic toxicity has dry skin and normal reflexes. Sympathomimetic toxicity lacks clonus. Encephalitis and sepsis must stay on the list until excluded.",
        keyFeature: kf(2),
        source: "boyer",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "She is thrashing and trying to climb off the stretcher. Write the first line medication. Include the drug, dose and route.",
        required: 1,
        accept: [
          k("loraz", "Lorazepam 1 to 2 mg IV, repeated as needed", "lorazepam 1", "lorazepam 2", "lorazepam 1mg", "lorazepam 2mg", "ativan 1", "ativan 2"),
          k("diaz", "Diazepam 5 to 10 mg IV, repeated as needed", "diazepam 5", "diazepam 10", "diazepam 5mg", "diazepam 10mg"),
          k("midaz", "Midazolam 2 to 5 mg IV, repeated as needed", "midazolam 2", "midazolam 5", "midazolam 2.5", "midazolam 2mg", "midazolam 5mg"),
        ],
        unacceptable: [
          bad("Physical restraint alone", ["restraint alone", "restraint without sedation"]),
        ],
        explanation:
          "Benzodiazepines are first line for agitation and muscle activity in serotonin toxicity. Antipsychotics such as haloperidol can worsen hyperthermia and confuse the picture with NMS. Struggling against physical restraint drives heat production and lactic acidosis.",
        keyFeature: kf(4),
        source: "boyer",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "Write the specific antidote. Include the drug, dose and route.",
        required: 1,
        accept: [k("cypro", "Cyproheptadine 12 mg PO or by NG tube, then 2 mg every 2 hours if symptoms persist", "cyproheptadine 12", "cyproheptadine 12mg", "periactin 12")],
        unacceptable: [
          bad("Dantrolene", ["give dantrolene", "start dantrolene", "dantrolene 1", "dantrolene 2.5"]),
          bad("Bromocriptine", ["give bromocriptine", "start bromocriptine", "bromocriptine 2.5", "bromocriptine 5"], true),
        ],
        explanation:
          "Cyproheptadine is a serotonin antagonist. The usual adult loading dose is 12 mg, then 2 mg every 2 hours while symptoms continue. It is only available by mouth, so crush it for an NG tube. Bromocriptine has serotonergic activity and can worsen toxicity. Dantrolene has no proven role.",
        keyFeature: { topic: "tox", n: 4 },
        source: "boyer",
      },
    ],
    sources: [HUNTER, BOYER],
    ...META,
  },

  /* 12 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-12",
    topic: "delirium-agitation",
    title: "A difficult second night in the department",
    stem:
      "A 77-year-old man with Parkinson disease dementia is boarding in the emergency department on his second night, awaiting a medical bed for pneumonia. He takes carbidopa-levodopa four times daily at home. Tonight he sees children in the room, is trying to climb out of bed and struck a nurse. His wife says he sometimes sees people at home but is usually calm.\n\nLast year haloperidol 2 mg IM at another hospital left him rigid and unable to swallow for days.\n\nVital signs: T 37.8°C, HR 98/min, BP 138/78 mmHg, RR 20/min, SpO2 92% on 2 L/min nasal prongs. Glucose 8.1 mmol/L. Weight 70 kg.\n\nThe medication record shows his 1400 and 1800 levodopa doses were not given. He received diphenhydramine 25 mg for sleep last night.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE contributors to his delirium that you would address.",
        required: 3,
        accept: [
          k("levodopa", "Missed levodopa doses", "levodopa", "missed", "parkinson medication", "dopamine", "carbidopa"),
          k("dph", "Anticholinergic diphenhydramine", "diphenhydramine", "anticholinergic", "benadryl"),
          k("pneumonia", "Pneumonia", "pneumonia", "infection", "sepsis"),
          k("hypoxia", "Hypoxia", "hypoxia", "hypoxemia", "oxygen"),
          k("sleep", "Sleep deprivation and the emergency department environment", "sleep", "environment", "noise", "boarding"),
          k("retention", "Urinary retention or constipation", "retention", "constipation", "bladder"),
          k("pain", "Pain", "pain"),
        ],
        explanation:
          "Missed levodopa doses cause rapid worsening of motor function and confusion and can precipitate a hyperpyrexia syndrome. Diphenhydramine is strongly anticholinergic. Pneumonia, hypoxia and a noisy department at night add to the load.",
        keyFeature: kf(2),
        source: "ccsmh",
      },
      {
        id: "q2",
        kind: "short",
        update: "His levodopa is given and nonpharmacological measures are in place. He remains distressed and at risk of injuring himself.",
        prompt: "Write an appropriate medication for his agitation. Include the drug, dose and route.",
        required: 1,
        accept: [
          k(
            "quet",
            "Quetiapine 12.5 to 25 mg PO",
            "quetiapine 12.5", "quetiapine 25", "seroquel 12.5", "seroquel 25", "quetiapine 12.5mg", "quetiapine 25mg", "quetiapine 6.25",
          ),
        ],
        unacceptable: [
          bad(
            "Haloperidol or another potent first generation antipsychotic",
            ["give haloperidol", "start haloperidol", "haloperidol 0.5", "haloperidol 1", "haloperidol 2", "haloperidol 5", "haldol 0.5", "haldol 1", "haldol 2", "haldol 5", "droperidol 2.5", "droperidol 5", "droperidol 10"],
            true,
          ),
          bad("Risperidone or olanzapine", ["risperidone 0.25", "risperidone 0.5", "risperidone 1", "olanzapine 2.5", "olanzapine 5"]),
        ],
        explanation:
          "Patients with Parkinson disease or Lewy body dementia have severe sensitivity to dopamine blocking drugs. Haloperidol can cause life threatening rigidity and NMS, as it did before. Low dose quetiapine is the usual choice when medication is needed.",
        keyFeature: kf(4),
        source: "dlb",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List THREE nonpharmacological measures to keep him and the staff safe tonight.",
        required: 3,
        accept: [
          SITTER,
          FAMILY,
          ROOM,
          REORIENT,
          SENSORY,
          LOWBED,
          k("restraint", "Avoid restraints where possible", "avoid restraint", "no restraint", "minimize restraint"),
          k("staff", "Approach with two staff for care and never alone", "two staff", "not alone", "never alone", "security"),
          k("move", "Avoid moving him between areas overnight", "avoid moving", "avoid move", "avoid transfer", "no transfer", "not move"),
        ],
        explanation:
          "A sitter or his wife at the bedside, a quiet room with night lighting and calm reorientation lower agitation. Remove hazards and use a low bed. Staff should not approach alone given he has struck a nurse.",
        keyFeature: kf(3),
        source: "ccsmh",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "You work in Ontario. You find him incapable of consenting to treatment of his pneumonia. List TWO actions you must take.",
        required: 2,
        accept: [
          k("sdm", "Obtain consent from his wife as substitute decision maker", "wife", "spouse", ...SDM_MATCH),
          k("doc", "Document the capacity assessment and reasons", "document", "documentation"),
          k("inform", "Inform him of the finding", "inform", "tell him", "explain"),
          k("reassess", "Reassess capacity as the delirium clears", "reassess", "re assess", "reevaluate", "repeat"),
        ],
        explanation:
          "Consent for treatment comes from the highest ranking available substitute, here his wife. Document how you assessed capacity. Capacity in delirium can return, so reassess it as he improves.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [CCSMH, DLB, HCCA],
    ...META,
  },

  /* 13 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-13",
    topic: "delirium-agitation",
    alsoTopics: ["tox", "airway"],
    title: "Quiet after the struggle",
    stem:
      "Police bring a 36-year-old man after a cocaine binge. He fought officers and was held prone in the back of the cruiser. In the department he was placed in four point restraints and given midazolam 10 mg IM and haloperidol 5 mg IM 20 minutes ago. He is now quiet. No monitor was attached and his nurse was called away.\n\nYou find him with snoring respirations. RR 6/min, SpO2 82% on room air, HR 58/min, BP 102/60 mmHg, T 38.9°C. Weight 102 kg.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE immediate actions.",
        required: 3,
        accept: [
          k("airway", "Open the airway with head tilt, jaw thrust or an adjunct", "jaw thrust", "head tilt", "chin lift", "reposition", "airway", "opa", "npa"),
          k("bvm", "Assist ventilation with bag valve mask", "bag valve", "bvm", "bag mask", "assist ventilation", "ventilate"),
          k("o2", "High flow oxygen", "oxygen", "o2"),
          k("release", "Release restraints that limit breathing and position supine or lateral", "remove restraint", "release", "loosen", "supine", "lateral"),
          k("monitor", "Attach cardiac monitor, oximetry and capnography", "monitor", "capnography", "etco2", "end tidal"),
          k("help", "Call for help and prepare for intubation", "help", "intubation", "intubate", "rsi"),
          k("naloxone", "Naloxone for possible opioid co-ingestion", "naloxone", "narcan"),
          k("glucose", "Check glucose", "glucose"),
        ],
        unacceptable: [bad("Flumazenil", ["give flumazenil", "administer flumazenil", "trial of flumazenil", "flumazenil trial", "flumazenil 0.5"], true)],
        explanation:
          "This is hypoventilation after sedation in a restrained patient, a common path to arrest. Open the airway, ventilate and apply monitoring at once. Street cocaine is often contaminated with fentanyl, so naloxone is reasonable. Flumazenil can provoke seizures in stimulant toxicity or benzodiazepine dependence and is dangerous here.",
        keyFeature: kf(4),
        source: "acep-agitation",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE factors that increase the risk of sudden death in physically restrained agitated patients.",
        required: 3,
        accept: [
          k("prone", "Prone position", "prone"),
          k("pressure", "Weight or pressure on the back or chest", "pressure on the back", "weight on", "knee on", "compression", "chest pressure", "kneeling", "pressure"),
          k("stim", "Stimulant intoxication", "cocaine", "stimulant", "sympathomimetic", "methamphetamine"),
          k("heat", "Hyperthermia", "hyperthermia", "temperature", "fever"),
          k("acid", "Metabolic acidosis", "acidosis", "lactate"),
          k("struggle", "Prolonged struggle", "struggle", "prolonged", "exertion"),
          k("obesity", "Obesity", "obesity", "obese"),
          k("k", "Hyperkalemia from rhabdomyolysis", "hyperkalemia", "potassium", "rhabdomyolysis"),
          k("sedation", "Unmonitored sedation", "unmonitored", "no monitor", "oversedation", "sedation"),
        ],
        explanation:
          "Prone restraint with weight on the back impairs ventilation when metabolic demand is extreme. Stimulants, hyperthermia and acidosis add to the risk of sudden arrest. Sedation without monitoring removes the last safeguard.",
        keyFeature: kf(3),
        source: "acep-agitation",
      },
      {
        id: "q3",
        kind: "short",
        update: "After bag mask ventilation and naloxone 0.4 mg IV his RR is 14/min and SpO2 is 97%. Restraints are removed.",
        prompt: "List TWO laboratory tests that will guide further management.",
        required: 2,
        accept: [
          k("ck", "Creatine kinase", "ck", "creatine kinase"),
          k("k", "Potassium", "potassium", "electrolyte"),
          k("gas", "Blood gas with pH and lactate", "blood gas", "vbg", "abg", "ph", "lactate"),
          k("trop", "Troponin", "troponin"),
          k("cr", "Creatinine", "creatinine", "renal function"),
          k("glucose", "Glucose", "glucose"),
          k("apap", "Acetaminophen level", "acetaminophen", "paracetamol"),
        ],
        unacceptable: [bad("Urine drug screen", ["urine drug screen", "uds", "drug screen", "tox screen"])],
        explanation:
          "CK, potassium and blood gas show rhabdomyolysis and acidosis from the struggle. Troponin looks for cocaine related ischemia. A urine drug screen will not change what you do.",
        keyFeature: { topic: "tox", n: 7 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO actions after this event to support staff and improve safety.",
        required: 2,
        accept: [
          k("debrief", "Team debrief", "debrief", "debriefing"),
          k("report", "File a patient safety incident report", "incident report", "safety report", "report"),
          k("policy", "Review restraint and monitoring policy", "policy", "protocol", "review"),
          k("injury", "Assess staff for injuries and offer occupational health support", "staff injur", "injury", "occupational health", "employee health", "support"),
          k("training", "Education on restraint monitoring and positioning", "training", "education"),
        ],
        explanation:
          "A near miss in a restrained patient needs a team debrief and an incident report. Review why monitoring was not applied and fix the process. Staff exposed to violence need injury care and support.",
        keyFeature: kf(3),
        source: "prma",
      },
    ],
    sources: [ACEP_AGIT, GOLDFRANK, PRMA],
    ...META,
  },

  /* 14 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-14",
    topic: "delirium-agitation",
    alsoTopics: ["infectious-diseases", "loc", "seizures"],
    title: "Strange behaviour with a headache",
    stem:
      "A 29-year-old woman has three days of headache and strange behaviour. Her partner says she has been suspicious of him, is using wrong words and cannot find others. One hour ago she had a generalized seizure at home. She has no psychiatric history and uses no drugs.\n\nVital signs: T 38.6°C, HR 112/min, BP 128/80 mmHg, RR 20/min, SpO2 97% on room air. Glucose 6.2 mmol/L. Weight 62 kg.\n\nGCS is 13 (E3 V4 M6). There is no rash.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Her partner thinks she is having a breakdown. List THREE features that make a medical cause more likely than primary psychosis.",
        required: 3,
        accept: [
          k("fever", "Fever", "fever", "febrile", "temperature"),
          k("seizure", "Seizure", "seizure"),
          k("aphasia", "Focal neurological deficit such as word finding difficulty", "aphasia", "word finding", "wrong word", "focal", "dysphasia", "paraphasia"),
          k("loc", "Decreased level of consciousness", "gcs", "level of consciousness", "drowsy", "decreased loc", "altered loc"),
          k("vitals", "Abnormal vital signs such as tachycardia", "tachycardia", "vital"),
          k("acute", "Acute onset over days", "acute", "sudden", "day"),
          k("headache", "Headache", "headache"),
          k("nohx", "No prior psychiatric history", "no psychiatric history", "no prior psychiatric", "first episode"),
        ],
        explanation:
          "Fever, seizure, aphasia and a reduced GCS are not features of primary psychosis. New behaviour change with these findings is encephalitis until proven otherwise. HSV and autoimmune encephalitis often present first with psychiatric symptoms.",
        keyFeature: kf(1),
        source: "idsa-encephalitis",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Write the empiric antiviral. Include the drug, dose, route and frequency.",
        required: 1,
        accept: [
          k(
            "acyclovir",
            "Acyclovir 10 mg/kg IV every 8 hours (about 620 mg)",
            "acyclovir 10 mg/kg", "acyclovir 10mg/kg", "aciclovir 10 mg/kg", "acyclovir 620", "acyclovir 600", "acyclovir 10",
          ),
        ],
        unacceptable: [bad("Oral antiviral", ["valacyclovir 1", "valtrex", "acyclovir 800", "famciclovir"])],
        explanation:
          "Start IV acyclovir as soon as HSV encephalitis is suspected, before CT or LP results. Delay worsens mortality and neurological outcome. Oral agents do not reach adequate levels in the brain. Give bacterial meningitis coverage too until excluded.",
        keyFeature: { topic: "infectious-diseases", n: 1 },
        source: "idsa-encephalitis",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO investigations to establish the cause.",
        required: 2,
        accept: [
          k("lp", "Lumbar puncture with CSF HSV PCR", "lumbar puncture", "lp", "csf", "pcr"),
          k("mri", "MRI brain", "mri"),
          k("eeg", "EEG", "eeg"),
          k("ct", "CT head before LP", "ct head", "ct brain", "ct"),
          k("auto", "Autoimmune encephalitis antibodies such as anti-NMDA receptor", "nmda", "autoimmune", "antibody", "antibodies"),
          k("cultures", "Blood cultures", "blood culture", "culture"),
          k("hiv", "HIV test", "hiv"),
        ],
        explanation:
          "CSF with HSV PCR is the key test. CT first is reasonable given her reduced GCS and seizure. MRI is the most sensitive imaging for temporal lobe changes. EEG detects nonconvulsive seizures.",
        keyFeature: { topic: "loc", n: 1 },
        source: "idsa-encephalitis",
      },
      {
        id: "q4",
        kind: "short",
        update: "She has another generalized seizure. It has lasted 5 minutes. She has an IV.",
        prompt: "Write the first line drug. Include the dose and route.",
        required: 1,
        accept: [
          k("loraz", "Lorazepam 4 mg IV (0.1 mg/kg), repeat once if needed", "lorazepam 4", "lorazepam 0.1", "lorazepam 4mg", "ativan 4"),
          k("midaz", "Midazolam 10 mg IM or 0.1 to 0.2 mg/kg IV", "midazolam 10", "midazolam 10mg", "midazolam 0.2", "midazolam 0.1"),
          k("diaz", "Diazepam 10 mg IV (0.15 to 0.2 mg/kg)", "diazepam 10", "diazepam 10mg", "diazepam 0.15", "diazepam 0.2"),
        ],
        explanation:
          "A seizure lasting 5 minutes is status epilepticus and needs an adequately dosed benzodiazepine. Underdosing is common and leads to refractory status. Follow with a second line agent if seizures continue.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "rampart",
      },
    ],
    sources: [TUNKEL, RAMPART],
    ...META,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-15",
    topic: "delirium-agitation",
    alsoTopics: ["seizures"],
    title: "Just more sleepy than usual",
    stem:
      "An 81-year-old woman takes hydrochlorothiazide and citalopram. Her son says she has eaten little for a week and has been sleepy, slow to answer and not herself for two days. She vomited once. In the department she had a one minute generalized seizure.\n\nVital signs: T 36.6°C, HR 90/min, BP 128/70 mmHg, RR 18/min, SpO2 96% on room air. Glucose 6.5 mmol/L. Weight 50 kg.\n\nShe is drowsy with GCS 13. Sodium 114 mmol/L. Potassium 2.9 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Before the seizure her son thought she was just depressed. List TWO features that indicate hypoactive delirium rather than depression.",
        required: 2,
        accept: [
          INATTN,
          LOC,
          k("acute", "Acute onset over days", "acute", "sudden", "day"),
          FLUCT,
          DISORG,
          DISORIENT,
        ],
        explanation:
          "Hypoactive delirium is the most often missed form. Inattention, reduced arousal, acute onset and fluctuation separate it from depression, where attention and alertness are preserved. Screen with a tool such as the CAM or 4AT.",
        keyFeature: kf(1),
        source: "inouye",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Write the immediate treatment for her sodium. Include the solution, volume and route.",
        required: 1,
        accept: [
          k(
            "100",
            "3% NaCl 100 mL IV over 10 minutes, repeated up to 3 times as needed",
            "3% 100", "3% saline 100", "3% nacl 100", "hypertonic saline 100", "hypertonic 100", "3% 100ml", "100ml 3%", "3% 100cc",
          ),
          k(
            "150",
            "3% NaCl 150 mL IV over 20 minutes, repeated as needed",
            "3% 150", "3% saline 150", "3% nacl 150", "hypertonic saline 150", "hypertonic 150", "3% 150ml", "150ml 3%", "3% 150cc",
          ),
          k("wt", "3% NaCl 2 mL/kg IV bolus", "2 ml/kg", "2ml/kg"),
        ],
        unacceptable: [bad("Normal saline", ["normal saline 1 l", "normal saline 500", "0.9% 1 l", "ns 1 l"]), bad("Fluid restriction alone", ["fluid restriction alone", "fluid restriction only"])],
        explanation:
          "Seizure and reduced consciousness make this severe symptomatic hyponatremia. Give 3% saline boluses to raise sodium by 4 to 6 mmol/L quickly. Normal saline is too slow and may worsen sodium in some causes. Fluid restriction has no place in an emergency.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "hyponatremia",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "List TWO elements of your plan to correct her sodium safely.",
        required: 2,
        accept: [
          k("target", "Aim for an initial rise of 4 to 6 mmol/L to stop symptoms", "4 to 6", "5 mmol", "4 6", "6 mmol", "5 mmol/l", "6 mmol/l"),
          k("limit", "Limit the rise to 8 mmol/L in 24 hours given her high risk of osmotic demyelination", "8 mmol", "8 mmol/l", "8 in 24", "8 per 24", "10 mmol", "10 mmol/l", "overcorrect", "overcorrection", "osmotic demyelination", "ods", "limit"),
          k("checks", "Check sodium every 2 to 4 hours", "every 2", "every 4", "q2h", "q4h", "serial sodium", "repeat sodium", "recheck sodium", "frequent sodium", "sodium check"),
          k("k", "Replace potassium, which also raises sodium", "potassium", "hypokalemia", "kcl"),
          k("meds", "Stop the thiazide and citalopram", "stop thiazide", "stop hydrochlorothiazide", "stop hctz", "stop citalopram", "stop ssri", "stop diuretic", "hold thiazide", "hold hydrochlorothiazide", "hold hctz", "hold citalopram", "hold ssri", "hold diuretic", "discontinue thiazide", "discontinue hydrochlorothiazide", "discontinue citalopram", "d/c thiazide", "d/c hctz", "d/c citalopram"),
          k("uo", "Monitor urine output for a water diuresis", "urine output", "aquaresis", "dilute urine", "water diuresis"),
          k("ddavp", "Use desmopressin or D5W if correction is too fast", "desmopressin", "ddavp", "d5w"),
        ],
        explanation:
          "Malnutrition, hypokalemia and a thiazide give her high risk of osmotic demyelination. After the initial rise, limit correction to 8 mmol/L in 24 hours. Potassium replacement and stopping the thiazide can cause brisk overcorrection, so check sodium often.",
        keyFeature: kf(2),
        source: "hyponatremia",
      },
      {
        id: "q4",
        kind: "short",
        prompt:
          "You work in Ontario. She is incapable of consenting to treatment. Her daughter, her attorney for personal care, refuses ICU admission, saying her mother always said she never wanted to be in hospital. List TWO principles the daughter must follow under the HCCA.",
        required: 2,
        accept: [
          k("wish", "Follow a known wish expressed while capable that applies to this situation", "prior capable wish", "prior wish", "known wish", "wishes expressed", "expressed wish", "capable wish", "wish"),
          k("applicable", "The wish must apply to the current circumstances", "applicable", "apply to the circumstance", "current circumstance", "circumstance"),
          k("best", "If no applicable wish is known, act in her best interests", "best interest"),
          k("values", "Consider her values and beliefs and whether treatment is likely to help", "values", "belief"),
          k("ccb", "The physician can apply to the Consent and Capacity Board if the SDM does not follow these rules", "consent and capacity board", "ccb", "form g"),
        ],
        explanation:
          "A substitute must follow a prior capable wish only if it applies to the actual situation. A general wish to avoid hospital may not apply to a reversible illness. Otherwise the substitute acts in her best interests, weighing her values and likely benefit. If the substitute does not, the physician can apply to the Consent and Capacity Board on a Form G. Other provinces use different processes.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [INOUYE, HYPONA, HCCA],
    ...META,
  },
];
