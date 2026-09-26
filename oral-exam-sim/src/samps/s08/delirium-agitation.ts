// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { KeyItem, Samp, UnacceptableItem } from "@/engine/samp";
import type { Source } from "@/engine/types";

const k = (id: string, text: string, ...match: string[]): KeyItem => ({ id, text, match });
const bad = (text: string, match: string[], dangerous = false): UnacceptableItem =>
  dangerous ? { text, match, dangerous: true } : { text, match };
const kf = (n: number) => ({ topic: "delirium-agitation", n });
const META = { reviewed: true, author: "Preceptor", version: 1 };

/* Sources ---------------------------------------------------------------- */

const CCSMH: Source = {
  id: "ccsmh",
  citation: "Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health: the assessment and treatment of delirium. 2006, updated 2014.",
  url: "https://ccsmh.ca/wp-content/uploads/2016/03/2014-ccsmh-Guideline-Update-Delirium.pdf",
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
const GOLDFRANK: Source = {
  id: "goldfrank",
  citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. 2019.",
};
const RAMPART: Source = {
  id: "rampart",
  citation: "Silbergleit R, et al. Intramuscular versus intravenous therapy for prehospital status epilepticus. N Engl J Med. 2012.",
};
const TC_BLEED: Source = { id: "tc-bleed", citation: "Thrombosis Canada. Clinical guide: DOACs, management of bleeding. 2025." };
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

const MARINELLI_GHB: Source = {
  id: "marinelli-ghb",
  citation: "Marinelli E, Beck R, Malvasi A, Lo Faro AF, Zaami S. Gamma-hydroxybutyrate abuse: pharmacology and poisoning and withdrawal management. Arh Hig Rada Toksikol. 2020.",
  url: "https://doi.org/10.2478/aiht-2020-71-3314",
};
const FLOYD_GHB: Source = {
  id: "floyd-ghb",
  citation: "Floyd CN, Wood DM, Dargan PI. Baclofen in gamma-hydroxybutyrate withdrawal: patterns of use and online availability. Eur J Clin Pharmacol. 2018.",
  url: "https://doi.org/10.1007/s00228-017-2387-z",
};
const BORELLI_GHB: Source = {
  id: "borelli-ghb",
  citation: "Borelli CM, Kessler N, Suter D, Levesque A. Severe gamma-hydroxybutyrate withdrawal with delirium, hemodynamic lability, and rhabdomyolysis: a case series. Am J Addict. 2025.",
  url: "https://doi.org/10.1111/ajad.70013",
};
const ACR_GOUT: Source = {
  id: "acr-gout",
  citation: "FitzGerald JD, Dalbeth N, Mikuls T, et al. 2020 American College of Rheumatology guideline for the management of gout. Arthritis Care Res. 2020.",
  url: "https://doi.org/10.1002/acr.24180",
};
const ROMANELLI_DXM: Source = {
  id: "romanelli-dxm",
  citation: "Romanelli F, Smith KM. Dextromethorphan abuse: clinical effects and management. J Am Pharm Assoc. 2009.",
  url: "https://doi.org/10.1331/JAPhA.2009.08091",
};
const DART_APAP: Source = {
  id: "dart-apap",
  citation: "Dart RC, Mullins ME, Matoushek T, et al. Management of acetaminophen poisoning in the US and Canada: a consensus statement. JAMA Netw Open. 2023.",
  url: "https://doi.org/10.1001/jamanetworkopen.2023.27739",
};
const MEDAROV_MAS: Source = {
  id: "medarov-mas",
  citation: "Medarov BI. Milk-alkali syndrome. Mayo Clin Proc. 2009.",
  url: "https://doi.org/10.4065/84.3.261",
};
const BRANDARIZ_ACV: Source = {
  id: "brandariz-acv",
  citation: "Brandariz-Nunez D, Correas-Sanahuja M, Maya-Gallego S, Martin Herranz I. Neurotoxicity associated with acyclovir and valacyclovir: a systematic review of cases. J Clin Pharm Ther. 2021.",
  url: "https://doi.org/10.1111/jcpt.13464",
};
const ROBERTSON_ACV: Source = {
  id: "robertson-acv",
  citation: "Robertson KM, Harvey CL, Cunningham JM. Acyclovir-induced neurotoxicity with a positive cerebrospinal fluid varicella zoster PCR result creating a management dilemma: a case report. J Med Case Rep. 2020.",
  url: "https://doi.org/10.1186/s13256-020-02498-3",
};
const SADJADI_ACV: Source = {
  id: "sadjadi-acv",
  citation: "Sadjadi SA, Regmi S, Chau T. Acyclovir neurotoxicity in a peritoneal dialysis patient: report of a case and review of the pharmacokinetics of acyclovir. Am J Case Rep. 2018.",
  url: "https://doi.org/10.12659/AJCR.911520",
};
const TAKAKUWA_CANNABIS: Source = {
  id: "takakuwa-cannabis",
  citation: "Takakuwa KM, Schears RM. The emergency department care of the cannabis and synthetic cannabinoid patient: a narrative review. Int J Emerg Med. 2021.",
  url: "https://doi.org/10.1186/s12245-021-00330-3",
};
const CDC_STI: Source = {
  id: "cdc-sti-2021",
  citation: "Workowski KA, Bachmann LH, Chan PA, et al. Sexually transmitted infections treatment guidelines, 2021. MMWR Recomm Rep. 2021.",
  url: "https://www.cdc.gov/std/treatment-guidelines/neurosyphilis.htm",
};
const AB_STI: Source = {
  id: "ab-sti-2018",
  citation: "Alberta Health. Alberta treatment guidelines for sexually transmitted infections (STI) in adolescents and adults. 2018, updated December 2023.",
  url: "https://open.alberta.ca/dataset/93a97f17-5210-487d-a9ae-a074c66ad678/resource/0975565f-c114-441f-8aab-6234763fc8a7/download/hlth-treatment-guidelines-for-sti-adolescents-adults-2018-updated-2023-12.pdf",
};
const ERC_ALS: Source = {
  id: "erc-als-2025",
  citation: "Soar J, Bottiger BW, Carli P, et al. European Resuscitation Council Guidelines 2025: adult advanced life support. Resuscitation. 2025.",
};

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
      "An 84-year-old woman is brought to the emergency department by her daughter for two days of increasing confusion. She is drowsy in the day and restless at night, pulling at her clothes. She has mild Alzheimer disease and scored 22 of 30 on a MoCA last year. At baseline she dresses herself and chats normally.\n\nMedications: donepezil, hydrochlorothiazide, zopiclone at night, and oxybutynin started one week ago.\n\nGlucose 7.2 mmol/L.",
    vitals: { temperature: "37.9°C", pulse: "98/minute", resp: "20/minute", bp: "146/80 mmHg", o2sat: "94% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features help distinguish delirium from her baseline dementia?",
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
        prompt: "What likely contributors to her delirium would you look for and address?",
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
        update: "Her daughter asks how staff can keep her safe and settled without sedation.",
        prompt: "What nonpharmacological measures would you use?",
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
      "Police bring a 24-year-old man to the emergency department after he shouted at strangers on a bus. His parents say he has become withdrawn over three months and has been hearing voices. He is pacing and shouting in the waiting room.\n\nGlucose 5.8 mmol/L. He is alert and oriented to person, place and date. He follows the conversation. He says voices tell him he is being watched.",
    vitals: { temperature: "36.8°C", pulse: "96/minute", resp: "16/minute", bp: "132/84 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features in this presentation favour a primary psychotic disorder over delirium?",
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
        prompt: "What immediate actions would you take to keep everyone safe?",
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
        update: "He agrees to take medication by mouth.",
        prompt: "What oral regimen would you give, with the drug and dose?",
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
        prompt: "What elements must be present for a Box A Form 1?",
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
      "Paramedics and four police officers bring a 31-year-old man to the emergency department. He was running through traffic. A friend says he has used methamphetamine for three days. He is screaming, incoherent and fighting the officers holding him. There is no IV access.\n\nGlucose 6.1 mmol/L. His weight is an estimate.",
    vitals: { temperature: "39.2°C", pulse: "148/minute", resp: "28/minute", bp: "172/100 mmHg", o2sat: "96% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most appropriate initial chemical sedation, with the drug, dose and route?",
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
        prompt: "What life threatening complications must you anticipate in this patient?",
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
        prompt: "What components of monitoring are required while he stays in restraints?",
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
        prompt: "What immediate treatments would you give for his temperature?",
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
    alsoTopics: ["tox"],
    title: "Awake for two nights",
    stem:
      "A 27-year-old man is brought to the emergency department by his partner. For 8 months he has taken GHB every 2 to 3 hours, day and night. His supplier was arrested and his last dose was 36 hours ago. Since last night he has been anxious, sleepless and shaking. Now he talks to people who are not in the room and does not know where he is. He drinks little alcohol and takes no prescribed medications.\n\nCapillary glucose 5.8 mmol/L. He is sweating, with a coarse tremor and pupils of 5 mm that react to light. He picks at the sheets and cannot follow a conversation. His neck is supple and there is no clonus.",
    vitals: { temperature: "38.2°C", pulse: "126/minute", resp: "22/minute", bp: "166/98 mmHg", o2sat: "97% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Besides GHB withdrawal, what other causes of his delirium must you consider?",
        required: 3,
        accept: [
          k("sedwd", "Withdrawal from alcohol, benzodiazepines or baclofen", "alcohol withdrawal", "benzodiazepine withdrawal", "sedative withdrawal", "baclofen"),
          k("stim", "Stimulant toxicity, such as methamphetamine or a synthetic cathinone", "stimulant", "methamphetamine", "amphetamine", "cathinone", "cocaine", "sympathomimetic", "mdma"),
          k("sero", "Serotonin toxicity", "serotonin"),
          k("antichol", "Anticholinergic toxicity", "anticholinergic"),
          k("cns", "CNS infection such as meningitis or encephalitis", "meningitis", "encephalitis", "cns infection"),
          k("sepsis", "Sepsis or another systemic infection", "sepsis", "infection", "pneumonia"),
          k("head", "Head injury with intracranial bleeding", "head injury", "subdural", "intracranial", "bleed", "hematoma"),
          k("lytes", "Hyponatremia or another electrolyte disturbance", "sodium", "hyponatremia", "electrolyte", "calcium"),
          k("hypogly", "Hypoglycemia", "hypoglycemia", "hypoglycaemia"),
          k("thyroid", "Thyrotoxicosis", "thyroid", "thyrotoxicosis"),
          k("postictal", "Postictal state or nonconvulsive seizures", "postictal", "seizure", "nonconvulsive"),
        ],
        explanation:
          "In a person who doses every few hours, GHB withdrawal starts within hours of the last dose and can progress to delirium with hallucinations. His fever, tachycardia and sweating also fit stimulant or serotonin toxicity, and GHB is often taken with stimulants such as synthetic cathinones. Sepsis and encephalitis can look the same, and his fever keeps them on the list. Withdrawal from other sedatives, a head injury while intoxicated and metabolic causes are also common in this group.",
        keyFeature: kf(2),
        source: "marinelli-ghb",
      },
      {
        id: "q2",
        kind: "short",
        update: "He pulls out his IV and swings at staff. Security is at the bedside, and restraint is being discussed.",
        prompt: "What medication would you give before any restraint, with the drug, dose and route?",
        required: 1,
        accept: [
          k("midaz", "Midazolam 5 to 10 mg IM, repeated as needed", "midazolam 5", "midazolam 10", "midazolam 5mg", "midazolam 10mg", "versed 5", "versed 10"),
          k("loraz", "Lorazepam 2 to 4 mg IM, repeated as needed", "lorazepam 2", "lorazepam 4", "lorazepam 2mg", "lorazepam 4mg", "ativan 2", "ativan 4"),
        ],
        unacceptable: [
          bad("Diazepam IM, which is absorbed erratically", ["diazepam im", "diazepam intramuscular"]),
          bad("An antipsychotic alone", ["haloperidol alone", "haldol alone", "antipsychotic alone", "olanzapine alone", "droperidol alone"]),
          bad("Physical restraint without sedation", ["restraint alone", "restraint without sedation", "restrain without"]),
        ],
        explanation:
          "With no IV access, an IM benzodiazepine is the fastest way to treat both the agitation and the withdrawal that drives it. Midazolam is absorbed reliably from muscle, and diazepam is not. GHB withdrawal often needs doses far above those used for alcohol, and Floyd and colleagues describe diazepam equivalents of up to 200 mg a day. An antipsychotic alone does not treat withdrawal. Restraint without sedation prolongs the struggle and adds heat and muscle injury.",
        keyFeature: kf(4),
        source: "floyd-ghb",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "After midazolam and a new IV he is calm but rousable. His temperature is 38.6°C. CK is 21 400 U/L, creatinine 146 umol/L and potassium 5.2 mmol/L.",
        prompt: "What treatments does he need now?",
        required: 2,
        accept: [
          k("fluids", "IV isotonic crystalloid for rhabdomyolysis", "crystalloid", "iv fluid", "saline", "ringer", "fluid", "hydration"),
          k("uo", "Urine output monitoring, with a catheter if needed", "urine output", "catheter", "foley"),
          k("benzo", "Ongoing benzodiazepine dosing to control the withdrawal and muscle activity", "benzodiazepine", "diazepam", "lorazepam", "midazolam", "symptom triggered"),
          k("pheno", "Phenobarbital if benzodiazepines fail", "phenobarbital", "phenobarb", "barbiturate"),
          k("cool", "External cooling", "cooling", "cool", "ice pack"),
          k("monitor", "Cardiac monitoring and repeat potassium", "cardiac monitor", "telemetry", "repeat potassium", "ecg"),
          k("icu", "Admission to a monitored or ICU bed", "icu", "intensive care", "monitored bed", "step down"),
        ],
        unacceptable: [bad("An NSAID for the fever", ["ibuprofen", "ketorolac", "naproxen", "nsaid"])],
        explanation:
          "A CK of 21 400 U/L with a creatinine of 146 umol/L shows rhabdomyolysis with kidney injury, a complication reported in severe GHB withdrawal. IV isotonic fluid titrated to urine output protects the kidneys. Muscle activity and fever settle only when the withdrawal itself is controlled, so benzodiazepine dosing continues, and phenobarbital has been used when benzodiazepines fail. A potassium of 5.2 mmol/L needs monitoring and repeat levels. An NSAID would add to the kidney injury.",
        keyFeature: kf(2),
        source: "borelli-ghb",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What objective findings would mark his withdrawal as severe enough to need ICU care?",
        required: 3,
        accept: [
          k("delirium", "Delirium with hallucinations and disorientation", "delirium", "hallucination", "disoriented", "disorientation", "confusion"),
          k("temp", "Rising temperature or hyperthermia", "temperature", "hyperthermia", "fever"),
          k("hemo", "Hemodynamic instability, such as severe hypertension, marked tachycardia or hypotension", "hemodynamic", "hypotension", "hypertension", "tachycardia", "heart rate", "blood pressure"),
          k("seizure", "Seizures", "seizure"),
          k("benzo", "Escalating benzodiazepine doses without control of symptoms", "escalating", "benzodiazepine resistant", "refractory", "high dose", "not responding", "no response", "inadequate response", "benzodiazepine requirement"),
          k("resp", "Oversedation or respiratory depression during treatment", "respiratory depression", "oversedation", "airway", "hypoventilation"),
          k("rhabdo", "Rhabdomyolysis or kidney injury", "rhabdomyolysis", "creatine kinase", "kidney", "creatinine"),
          k("rass", "A high score on an agitation scale such as RASS", "rass", "richmond", "agitation score", "agitation scale"),
        ],
        explanation:
          "GHB withdrawal is driven by sympathetic overactivity and can move quickly to florid delirium, so its severity is judged by objective signs. Work cited by Floyd and colleagues found that CIWA-Ar scoring alone does not show the need for treatment. Delirium, hyperthermia, unstable blood pressure or heart rate, seizures and rhabdomyolysis each mark severe withdrawal. Escalating benzodiazepine doses without control predict the need for other agents or intubation, and very large doses bring a risk of respiratory depression that needs ICU monitoring.",
        keyFeature: { topic: "tox", n: 8 },
        source: "floyd-ghb",
      },
    ],
    sources: [MARINELLI_GHB, FLOYD_GHB, BORELLI_GHB],
    ...META,
    reviewed: false,
    version: 2,
  },

  /* 05 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-05",
    topic: "delirium-agitation",
    alsoTopics: ["analgesia-sedation"],
    title: "Striking out during transfers",
    stem:
      "An 86-year-old man with moderate Alzheimer disease is sent to the emergency department from his long-term care home. Since yesterday he has yelled and struck at care aides during transfers and refused to walk. At baseline he walks with a walker, feeds himself and is pleasant. Ten days ago his furosemide was increased from 20 mg to 40 mg daily for ankle swelling. He also takes donepezil, ramipril and ASA 81 mg.\n\nCapillary glucose 6.6 mmol/L. Creatinine 148 umol/L, from a baseline of 96 umol/L. He drifts off mid-sentence and cannot follow a two-step command. His right knee is warm, red and swollen with an effusion, and he cries out when it is moved. His chest is clear and his abdomen is soft.",
    vitals: { temperature: "37.7°C", pulse: "102/minute", resp: "20/minute", bp: "148/84 mmHg", o2sat: "95% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What investigations would identify reversible causes of his delirium?",
        required: 3,
        accept: [
          k("tap", "Knee aspiration for cell count, Gram stain, culture and crystals", "aspiration", "aspirate", "arthrocentesis", "synovial", "joint fluid", "knee tap", "tap the knee", "crystal", "gram stain"),
          k("bcx", "Blood cultures", "blood culture"),
          k("cbc", "CBC", "cbc", "complete blood count", "white count", "wbc", "blood count"),
          k("lytes", "Electrolytes, including sodium and potassium", "electrolyte", "sodium", "potassium"),
          k("bladder", "Bladder scan for retention", "bladder scan", "bladder ultrasound", "post void", "retention"),
          k("xray", "Knee or chest radiograph", "x ray", "xray", "radiograph", "cxr"),
          k("crp", "CRP", "crp", "c reactive"),
          k("ua", "Urinalysis", "urinalysis", "urine dip", "urine test"),
          k("ecg", "ECG", "ecg", "ekg"),
        ],
        explanation:
          "A warm, red, swollen knee in a man with a new delirium and a temperature of 37.7°C is septic arthritis until joint fluid shows otherwise. Aspiration with cell count, Gram stain, culture and crystal analysis separates infection from crystal arthritis, and blood cultures go with it. His creatinine has risen from 96 to 148 umol/L since the furosemide was doubled, so electrolytes are needed. A bladder scan finds retention, a common and treatable cause of agitation in dementia. Pain he cannot describe is often what drives the behaviour.",
        keyFeature: kf(2),
        source: "ccsmh",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "Aspiration yields cloudy fluid with 24 x 10^9/L white cells and negatively birefringent needle-shaped crystals. No organisms are seen on Gram stain. Culture is pending. He spits out every tablet he is offered.",
        prompt: "What is the safest effective treatment for his knee pain?",
        required: 2,
        accept: [
          k(
            "steroid",
            "A glucocorticoid by the IM or IV route, such as methylprednisolone",
            "methylprednisolone", "triamcinolone", "im steroid", "iv steroid", "intramuscular steroid", "parenteral steroid", "im glucocorticoid", "iv glucocorticoid", "im corticosteroid", "iv corticosteroid", "dexamethasone",
          ),
          k("apap", "Acetaminophen by suppository or IV", "acetaminophen", "paracetamol", "tylenol"),
          k("ice", "Ice to the knee", "ice", "cold pack"),
          k("rest", "Rest and support of the knee, such as a pillow or splint", "rest", "splint", "pillow", "elevate", "elevation"),
          k("opioid", "A small SC or IV opioid dose for severe pain", "opioid", "hydromorphone", "morphine"),
        ],
        unacceptable: [
          bad("An NSAID such as IV ketorolac", ["ketorolac", "naproxen", "indomethacin", "ibuprofen", "nsaid", "diclofenac", "celecoxib"]),
          bad("Intra-articular steroid before the culture result", ["intra articular", "intraarticular", "joint injection", "inject the knee"]),
        ],
        explanation:
          "Negatively birefringent needle-shaped crystals confirm gout. He will not take tablets, and the ACR 2020 guideline strongly recommends a glucocorticoid by the IM, IV or intra-articular route for a flare in a patient who cannot take oral medication. With the culture still pending, the joint is not injected, which leaves an IM or IV glucocorticoid. His creatinine has risen to 148 umol/L on furosemide and ramipril, so ketorolac or another NSAID risks further kidney injury. Acetaminophen by suppository or IV and ice add relief without sedation.",
        keyFeature: { topic: "analgesia-sedation", n: 2 },
        source: "acr-gout",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "Two hours later he pulls out his IV and swings at a nurse. A sitter, a quiet room and his daughter's voice on the phone have not settled him. Staff ask for restraints.",
        prompt: "What medication would you give before any restraint, with the drug, dose and route?",
        required: 1,
        accept: [
          k("halo", "Haloperidol 0.25 to 1 mg IM or SC", "haloperidol 0.25", "haloperidol 0.5", "haloperidol 1", "haloperidol 0.5mg", "haloperidol 1mg", "haldol 0.5", "haldol 1"),
          k("olz", "Olanzapine 1.25 to 2.5 mg IM", "olanzapine 1.25", "olanzapine 2.5"),
        ],
        unacceptable: [
          bad("A benzodiazepine", ["lorazepam", "midazolam", "diazepam", "benzodiazepine"]),
          bad("Haloperidol 5 mg or more", ["haloperidol 5", "haloperidol 10", "haldol 5"]),
        ],
        explanation:
          "He is a danger to himself and to staff after less restrictive measures have failed, so medication comes before any restraint. With no IV and no tablets accepted, a low dose of haloperidol IM or SC is the usual choice in an older adult, starting at a quarter to half of the usual adult dose. Benzodiazepines worsen delirium in older adults unless the cause is alcohol or sedative withdrawal. An adult dose such as haloperidol 5 mg causes oversedation, falls and extrapyramidal effects in a frail man of 86.",
        keyFeature: kf(4),
        source: "ccsmh",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What measures would keep him and the staff safe while he is in the department?",
        required: 3,
        accept: [
          k("analg", "Analgesia before moving the knee or giving care", "analgesia before", "pain before", "premedicate", "analgesia", "pain control"),
          k("two", "Two staff for transfers and hands-on care", "two staff", "2 staff"),
          k("approach", "Approach from the front, explain each step and do not rush", "approach from the front", "explain", "calm", "do not rush", "slowly"),
          SITTER,
          FAMILY,
          LOWBED,
          k("room", "A quiet single room away from frail patients", "quiet", "single room", "private room", "low stimulation"),
          k("exit", "Staff keep a clear exit and stay out of reach", "exit", "out of reach", "arm length", "distance"),
          k("security", "Security nearby but out of his line of sight", "security"),
          k("cluster", "Group care tasks and time them for when he is calm", "cluster care", "group care", "timing of care"),
        ],
        explanation:
          "His outbursts come when his painful knee is moved, so analgesia before transfers removes the main trigger. Two staff for hands-on care, an approach from the front with each step explained, and a clear exit protect the staff he has struck. A sitter or family member and a quiet single room lower stimulation and keep other patients away from harm. Security can wait nearby without crowding him, since a show of force escalates agitation.",
        keyFeature: kf(3),
        source: "beta-deesc",
      },
    ],
    sources: [CCSMH, ACR_GOUT, BETA_DEESC],
    ...META,
    reviewed: false,
    version: 2,
  },

  /* 06 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-06",
    topic: "delirium-agitation",
    alsoTopics: ["tox"],
    title: "Floating above the stretcher",
    stem:
      "A 16-year-old boy is brought to the emergency department by friends 3 hours after he drank a bottle of cough and cold syrup at a party on a dare. They brought the empty 240 mL bottle. Its label lists dextromethorphan 15 mg and acetaminophen 325 mg in each 15 mL. He says he is floating above the stretcher and that the walls are breathing. He has no psychiatric history. His mother is on her way.\n\nCapillary glucose 6.2 mmol/L. He cannot say the date or keep track of questions. Pupils are 6 mm and reactive, with horizontal nystagmus. He is sweating and unsteady, with brisk reflexes and no clonus. Bowel sounds are present.",
    vitals: { temperature: "37.9°C", pulse: "124/minute", resp: "20/minute", bp: "152/90 mmHg", o2sat: "98% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "His friends ask whether he is having a first psychotic break.",
        prompt: "What features favour delirium over a first episode of psychosis?",
        required: 3,
        accept: [
          ACUTE,
          k("attention", "Inattention, unable to keep track of questions", "inattention", "attention", "inattentive", "keep track", "distractible"),
          DISORIENT,
          FLUCT,
          k("visual", "Visual and dissociative distortions rather than voices", "visual", "distortion", "dissociative", "walls breathing", "illusion", "floating"),
          k("vitals", "Abnormal vital signs such as tachycardia, hypertension and fever", "vital", "tachycardia", "hypertension", "fever", "temperature"),
          k("neuro", "Neurological signs such as nystagmus, ataxia or brisk reflexes", "nystagmus", "ataxia", "unsteady", "brisk reflex", "hyperreflexia", "neurologic"),
          k("ingest", "A clear toxic exposure just before the onset", "ingestion", "exposure", "overdose", "cough syrup", "dextromethorphan"),
          k("nohx", "No psychiatric history", "no psychiatric history", "no prior psychiatric"),
        ],
        explanation:
          "Onset within hours of a known ingestion, disorientation and inattention point to delirium rather than a primary psychosis. A first psychosis usually develops over weeks with a clear sensorium and mostly auditory hallucinations, while his distortions are visual and dissociative. Tachycardia, hypertension, fever, nystagmus and ataxia are physical signs that a primary psychiatric illness does not produce. Dextromethorphan above about 2 mg/kg causes dissociative effects like those of ketamine, and he took 240 mg, or 4 mg/kg.",
        keyFeature: kf(1),
        source: "romanelli-dxm",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What investigations will change his management?",
        required: 2,
        accept: [
          k("apap", "Acetaminophen level 4 hours or more after ingestion", "acetaminophen", "paracetamol", "apap", "tylenol level"),
          k("ecg", "ECG", "ecg", "ekg", "electrocardiogram"),
          k("ck", "Creatine kinase", "creatine kinase", "ck"),
          k("lytes", "Electrolytes and creatinine", "electrolyte", "creatinine", "sodium", "potassium"),
          k("asa", "Salicylate level", "salicylate", "asa level"),
          k("liver", "Liver enzymes", "alt", "ast", "liver enzyme", "transaminase", "liver function"),
          k("etoh", "Ethanol level", "ethanol", "alcohol level", "blood alcohol"),
        ],
        unacceptable: [bad("Urine drug screen", ["urine drug screen", "uds", "drug screen", "tox screen", "urine tox"])],
        explanation:
          "The label shows 16 doses of 325 mg, or 5 200 mg of acetaminophen, about 87 mg/kg at 60 kg. A reported dose is unreliable after a party, and the US and Canadian consensus statement bases treatment on a level drawn 4 hours or more after ingestion and plotted on the nomogram. Dextromethorphan has no useful serum level. An ECG screens for co-ingestants that affect conduction. A urine drug screen does not measure dextromethorphan and can give a false positive for phencyclidine, so it will not change his care.",
        keyFeature: { topic: "tox", n: 7 },
        source: "dart-apap",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "An hour later he is thrashing on the stretcher and pulling off the monitor leads. His ECG shows sinus tachycardia with a normal QRS and QTc. A resident suggests physostigmine.",
        prompt: "What medication would you give for his agitation, with the drug, dose and route?",
        required: 1,
        accept: [
          k("loraz", "Lorazepam 1 to 2 mg IV, repeated as needed", "lorazepam 1", "lorazepam 2", "lorazepam 1mg", "lorazepam 2mg", "ativan 1", "ativan 2"),
          k("midaz", "Midazolam 2 to 5 mg IV, repeated as needed", "midazolam 2", "midazolam 2.5", "midazolam 5", "midazolam 2mg", "midazolam 5mg"),
          k("diaz", "Diazepam 5 to 10 mg IV, repeated as needed", "diazepam 5", "diazepam 10", "diazepam 5mg", "diazepam 10mg"),
        ],
        unacceptable: [
          bad("Physostigmine", ["physostigmine"], true),
          bad("Naloxone for the agitation", ["naloxone", "narcan"]),
        ],
        explanation:
          "No antidote reverses dextromethorphan, so care is supportive, and a small IV benzodiazepine dose treats the agitation and the sympathetic excess. Physostigmine is for an anticholinergic toxidrome, and he is sweating with bowel sounds present, so it would add cholinergic effects with no benefit. Naloxone has had inconsistent effects in dextromethorphan toxicity and is kept for respiratory depression. Titrate to calm while watching his breathing.",
        keyFeature: { topic: "tox", n: 2 },
        source: "romanelli-dxm",
      },
    ],
    sources: [ROMANELLI_DXM, DART_APAP],
    ...META,
    reviewed: false,
    version: 2,
  },

  /* 07 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-07",
    topic: "delirium-agitation",
    alsoTopics: ["loc", "tox"],
    title: "Not herself for four days",
    stem:
      "A 79-year-old woman is brought to the emergency department by her son with 4 days of increasing confusion, vomiting and poor appetite. Today she did not know his name. At baseline she lives alone, drives and manages her own finances. She has osteoporosis and hypertension. The medication list from her family physician shows alendronate, hydrochlorothiazide and a calcium and vitamin D supplement.\n\nCapillary glucose 6.3 mmol/L. She is drowsy, oriented to person only and cannot keep her attention on the conversation. Her mucous membranes are dry. There is no focal deficit, no neck stiffness and no sign of injury.",
    vitals: { temperature: "36.8°C", pulse: "104/minute", resp: "16/minute", bp: "108/64 mmHg", o2sat: "96% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What investigations would you send now to find a reversible cause of her delirium?",
        required: 3,
        accept: [
          k("ca", "Serum calcium with albumin, or ionized calcium", "calcium", "ionized calcium", "ionised calcium"),
          k("lytes", "Electrolytes, including sodium and potassium", "electrolyte", "sodium", "potassium"),
          k("cr", "Creatinine and urea", "creatinine", "urea", "kidney function", "renal function", "egfr"),
          k("gas", "Blood gas or bicarbonate", "blood gas", "vbg", "abg", "bicarbonate"),
          k("cbc", "CBC", "cbc", "blood count"),
          k("ua", "Urinalysis", "urinalysis", "urine dip"),
          k("ecg", "ECG", "ecg", "ekg"),
          k("ct", "CT head", "ct head", "ct brain", "head ct"),
          k("tsh", "Thyroid function", "tsh", "thyroid"),
          k("lft", "Liver enzymes and lipase", "liver enzyme", "liver function", "lipase", "alt"),
        ],
        explanation:
          "She takes a thiazide, which lowers calcium excretion and can lower sodium, and a calcium supplement, and she has been vomiting, so calcium and electrolytes come first. Dehydration from vomiting makes kidney injury likely, and creatinine shows it. A blood gas or bicarbonate shows the acid base disturbance that vomiting and alkali cause. The rest of the screen looks for the common causes of delirium in older adults, including infection and a structural brain lesion.",
        keyFeature: kf(2),
        source: "ccsmh",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "Calcium is 3.58 mmol/L with an albumin of 38 g/L. Bicarbonate is 36 mmol/L. Creatinine is 186 umol/L, from a baseline of 78 umol/L. Sodium is 136 mmol/L. PTH is pending.",
        prompt: "What collateral history from her son would change your management?",
        required: 2,
        accept: [
          k("antacid", "Over-the-counter antacids containing calcium carbonate", "antacid", "calcium carbonate", "tums", "over the counter", "otc"),
          k("supp", "How much calcium and vitamin D she actually takes", "vitamin d", "supplement", "calcium dose", "extra calcium"),
          k("other", "Other nonprescription products or herbal remedies", "herbal", "nonprescription", "natural product"),
          k("cancer", "Weight loss, bone pain or a history of cancer", "weight loss", "cancer", "malignancy", "bone pain", "tumour", "tumor"),
          k("milk", "Large intake of milk or dairy", "milk", "dairy"),
          k("baseline", "Her usual function and when she was last well", "baseline", "usual", "last well", "last seen"),
          k("intake", "Vomiting and fluid intake over the past days", "vomiting", "fluid intake", "drinking", "intake"),
        ],
        explanation:
          "A calcium of 3.58 mmol/L with a bicarbonate of 36 mmol/L and a creatinine that has risen from 78 to 186 umol/L is the triad of calcium-alkali syndrome, and it follows large intakes of calcium carbonate. Medarov stresses that accurate medication and diet histories are central to this diagnosis, and antacids bought without a prescription rarely appear on a medication list. Weight loss, bone pain or a cancer history point instead to malignancy, which changes the workup. Her son also defines how far she is from her usual self.",
        keyFeature: { topic: "loc", n: 3 },
        source: "medarov-mas",
      },
      {
        id: "q3",
        kind: "short",
        update: "Her son finds that for 3 weeks she has chewed about 12 calcium carbonate antacid tablets a day for heartburn.",
        prompt: "What treatments would you start?",
        required: 2,
        accept: [
          k("saline", "IV isotonic saline", "saline", "crystalloid", "iv fluid", "normal saline", "hydration", "fluid"),
          k("stopca", "Stop the calcium carbonate, calcium and vitamin D", "stop calcium", "stop antacid", "stop vitamin d", "hold calcium", "hold vitamin d", "discontinue calcium", "withdraw calcium", "stop supplement"),
          k("stophctz", "Stop the hydrochlorothiazide", "stop hydrochlorothiazide", "stop thiazide", "hold thiazide", "hold hydrochlorothiazide", "stop hctz", "hold hctz", "discontinue thiazide"),
          k("recheck", "Serial calcium checks, watching for rebound hypocalcemia", "serial calcium", "repeat calcium", "recheck calcium", "rebound hypocalcemia", "hypocalcemia"),
          k("monitor", "Cardiac monitoring", "cardiac monitoring", "cardiac monitor", "telemetry", "ecg"),
          k("furo", "Furosemide only once her volume is restored", "furosemide once", "furosemide after", "loop diuretic after"),
          k("antiemetic", "An antiemetic", "antiemetic", "ondansetron"),
        ],
        unacceptable: [bad("Sodium bicarbonate", ["sodium bicarbonate", "bicarbonate infusion"])],
        explanation:
          "Calcium carbonate supplies both the calcium and the alkali, and a thiazide reduces calcium excretion, so treatment is IV isotonic saline and withdrawal of all three. Medarov reports that hydration and withdrawal of the offending agents are enough in most cases. Rebound hypocalcemia, sometimes severe, is common as the syndrome resolves, so calcium is checked often. Bisphosphonates have no proven benefit here and add to that risk. Furosemide can increase calcium excretion, but only after volume is restored. Bicarbonate would worsen her alkalosis.",
        keyFeature: { topic: "tox", n: 4 },
        source: "medarov-mas",
      },
    ],
    sources: [CCSMH, MEDAROV_MAS],
    ...META,
    reviewed: false,
    version: 2,
  },
  /* 08 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-08",
    topic: "delirium-agitation",
    alsoTopics: ["shock", "infectious-diseases"],
    title: "Wanting to go home with a fever",
    stem:
      "You work in Ontario. An 81-year-old man with a chronic indwelling urinary catheter presents to the emergency department with fever and confusion. He is oriented to self only and drifts in and out of the conversation. He is pulling at his IV and says the nurses are poisoning him. He refuses antibiotics and wants to go home. His son is with him. His wife of 55 years is at home. He has no guardian and no attorney for personal care.\n\nLactate 3.8 mmol/L.",
    vitals: { temperature: "38.9°C", pulse: "118/minute", resp: "24/minute", bp: "92/54 mmHg", o2sat: "93% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Under Ontario's Health Care Consent Act, what abilities does a person need to be capable of consenting to treatment?",
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
        update: "He is found incapable of consenting to antibiotics.",
        prompt: "Which of the following is the correct substitute decision maker for him?",
        options: [
          "His son, who is present",
          "His wife, who is at home",
          "The most responsible physician",
          "The Public Guardian and Trustee",
          "None, treat him under a Form 1",
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
        update: "You cannot reach his wife by phone.",
        prompt: "Which conditions under the HCCA allow you to treat him now without consent?",
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
        prompt: "What treatments would you start immediately for the cause of his delirium?",
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
    title: "Refusing his exchanges",
    stem:
      "A 74-year-old man on peritoneal dialysis is brought to the emergency department by his son. For 2 days he has been talking to people who are not there, slurring his words and stumbling. Since yesterday he has refused his dialysis exchanges and shouts at his son to leave him alone. His son thinks he is being stubborn. Four days ago a walk-in clinic prescribed valacyclovir 1 g three times daily for shingles on his chest. He does not drink alcohol.\n\nCapillary glucose 7.1 mmol/L. Serum ethanol is undetectable. He is drowsy, then suddenly loud, and cannot name the day or count backward from 10. He has dysarthria, a tremor and myoclonic jerks. There is a crusted rash over the right T5 dermatome. His neck is supple.",
    vitals: { temperature: "37.2°C", pulse: "92/minute", resp: "18/minute", bp: "158/88 mmHg", o2sat: "96% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features favour delirium over intoxication or a deliberate refusal of care?",
        required: 3,
        accept: [
          k("acute", "Acute onset within days of a new drug", "acute", "sudden", "new drug", "new medication", "valacyclovir"),
          FLUCT,
          INATTN,
          DISORIENT,
          LOC,
          k("halluc", "Hallucinations", "hallucination", "talking to people", "seeing things"),
          k("neuro", "Neurological signs such as dysarthria, tremor or myoclonus", "dysarthria", "slurred", "tremor", "myoclonus", "myoclonic", "ataxia", "stumbling", "neurologic"),
          k("etoh", "No alcohol use and an undetectable ethanol", "ethanol", "no alcohol", "undetectable", "alcohol level"),
        ],
        explanation:
          "Fluctuating arousal, inattention, disorientation and hallucinations define delirium, and none of them is a feature of stubbornness. Slurred speech and stumbling look like drunkenness, but his ethanol is undetectable and he does not drink. Confusion, altered consciousness, hallucinations, agitation and dysarthria are the usual picture of acyclovir neurotoxicity, which in a systematic review of cases began a mean of 3 days after the antiviral was started, mostly in people with kidney failure. Calling his refusal a choice would leave a reversible delirium untreated.",
        keyFeature: kf(1),
        source: "brandariz-acv",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What investigations will change his management now?",
        required: 2,
        accept: [
          k("lp", "Lumbar puncture with CSF cell count and VZV PCR", "lumbar puncture", "lp", "csf", "vzv pcr", "pcr"),
          k("ct", "CT head", "ct head", "ct brain", "head ct", "mri"),
          k("k", "Potassium and electrolytes", "potassium", "electrolyte", "sodium"),
          k("urea", "Urea", "urea", "bun"),
          k("ca", "Calcium", "calcium"),
          k("gas", "Blood gas", "blood gas", "vbg", "abg"),
          k("ecg", "ECG", "ecg", "ekg"),
        ],
        unacceptable: [bad("Urine drug screen", ["urine drug screen", "uds", "drug screen", "tox screen"])],
        explanation:
          "The main alternative to acyclovir neurotoxicity is varicella zoster encephalitis, which is treated with IV acyclovir, the opposite of stopping the drug. CSF cell count and VZV PCR, after a CT head, separate the two, although VZV DNA can appear in CSF with skin zoster alone, so the cell count matters. Potassium, urea and a blood gas guide urgent dialysis in a man who has missed his exchanges. An acyclovir level takes days to return and does not change the decision today. A urine drug screen adds nothing.",
        keyFeature: { topic: "tox", n: 7 },
        source: "robertson-acv",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT head is normal. CSF has 2 x 10^6/L white cells and a normal protein. Potassium is 5.6 mmol/L.",
        prompt: "What is the definitive treatment?",
        required: 1,
        accept: [k("hd", "Hemodialysis", "hemodialysis", "haemodialysis", "intermittent dialysis")],
        unacceptable: [
          bad("More peritoneal dialysis exchanges alone", ["more exchange", "extra exchange", "increase exchange", "increase peritoneal", "more peritoneal", "continue peritoneal", "restart peritoneal", "resume peritoneal", "pd exchange", "peritoneal dialysis alone"]),
          bad("IV acyclovir or continued valacyclovir", ["iv acyclovir", "continue valacyclovir", "acyclovir 10 mg/kg"], true),
        ],
        explanation:
          "Acyclovir, the active product of valacyclovir, is cleared by the kidney and builds up in kidney failure. Hemodialysis removes it and shortens the neurotoxicity, while peritoneal dialysis clears it poorly. Sadjadi and colleagues describe a patient on peritoneal dialysis whose acyclovir neurotoxicity resolved after a switch to hemodialysis. The antiviral is stopped. A normal CSF makes VZV encephalitis unlikely, so there is no reason to keep giving it.",
        keyFeature: { topic: "tox", n: 6 },
        source: "sadjadi-acv",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "You work in Ontario. He refuses a dialysis catheter and cannot explain his illness or what could happen without treatment. He has no power of attorney. His partner of 6 years, with whom he lives, his adult son and his wife, from whom he separated 10 years ago, are all present.",
        prompt: "Which of the following is the most appropriate person to consent to hemodialysis on his behalf?",
        options: [
          "His adult son from his first marriage",
          "His legally married but separated wife",
          "His partner of six years",
          "The Public Guardian and Trustee",
          "Treatment under a Form 1 certificate",
        ],
        correct: 2,
        explanation:
          "He cannot understand or appreciate the decision, so he is incapable for this treatment. With no guardian or attorney, the Health Care Consent Act ranks a spouse or partner first, and a person who has lived with him for at least one year in a close relationship of primary importance qualifies. A spouse living separate and apart after the relationship broke down is not his substitute. His son ranks below his partner. The Public Guardian and Trustee decides only when no one on the list is available and willing. A Form 1 authorizes a psychiatric assessment, not dialysis. Other provinces have different statutes.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [BRANDARIZ_ACV, ROBERTSON_ACV, SADJADI_ACV, HCCA],
    ...META,
    reviewed: false,
    version: 2,
  },
  /* 10 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-10",
    topic: "delirium-agitation",
    alsoTopics: ["loc"],
    title: "New confusion two days after a fall",
    stem:
      "An 82-year-old woman who takes apixaban 5 mg twice daily for atrial fibrillation presents to the emergency department. She fell and struck her head two days ago. Since last night she has been confused and agitated. Her daughter says she normally lives alone and manages her own finances. Her last apixaban dose was 3 hours ago.\n\nGlucose 7.0 mmol/L. GCS is 14 (E4 V4 M6). No obvious focal deficit.",
    vitals: { temperature: "36.8°C", pulse: "84/minute irregular", resp: "16/minute", bp: "168/92 mmHg", o2sat: "96% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the single most important investigation now?",
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
        prompt: "What agent would you give to reverse her anticoagulation?",
        required: 1,
        accept: [k("pcc", "Prothrombin complex concentrate, or andexanet alfa where available", "pcc", "prothrombin complex", "octaplex", "beriplex", "andexanet", "andexxa")],
        explanation:
          "For life threatening bleeding on an anti-Xa drug, give PCC, often a fixed 2 000 units or 25 to 50 units/kg, or andexanet alfa where it is available. Vitamin K, plasma and protamine do not reverse apixaban. Idarucizumab reverses only dabigatran.",
        keyFeature: kf(2),
        source: "tc-bleed",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What elements will you document and trend while she waits for surgery?",
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
        update: "You work in Ontario. She says she does not want surgery. She cannot say why she is in hospital or repeat back the risks you explained. Her daughter holds her power of attorney for personal care.",
        prompt: "Who should consent to surgery?",
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
    title: "A packet of herbal incense",
    stem:
      "A 23-year-old man is brought to the emergency department by ambulance after a seizure in a park. Friends told paramedics that about 1 hour earlier he smoked a product sold as herbal incense, then became terrified and aggressive. He had a 2 minute generalized seizure before paramedics arrived. He has no medical history and takes no medications.\n\nCapillary glucose 6.1 mmol/L. He is shouting, swinging at staff and does not know where he is. Pupils are 6 mm and reactive. His skin is sweaty. There is a small laceration on his tongue and an abrasion on his forehead. Bowel sounds are present and there is no clonus.",
    vitals: { temperature: "38.1°C", pulse: "138/minute", resp: "22/minute", bp: "172/102 mmHg", o2sat: "97% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "His friends show you the empty packet, labelled as incense and not for human use. A colleague asks which antidote to give.",
        prompt: "Which antidote, if any, would you give?",
        required: 1,
        accept: [k("none", "No specific antidote, with supportive care", "no antidote", "no specific antidote", "none", "supportive care", "supportive")],
        unacceptable: [bad("Flumazenil", ["flumazenil"], true), bad("Physostigmine", ["physostigmine"], true)],
        explanation:
          "Synthetic cannabinoids are a changing group of potent receptor agonists with no antidote, so treatment is supportive with oxygen, IV fluids and benzodiazepines. Flumazenil can precipitate seizures, and he has already had one. Physostigmine treats an anticholinergic toxidrome, and he is sweating with bowel sounds present. Naloxone is kept for respiratory depression that suggests an opioid co-ingestant.",
        keyFeature: { topic: "tox", n: 2 },
        source: "takakuwa-cannabis",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What other causes of his agitation and seizure must you look for?",
        required: 3,
        accept: [
          k("head", "Head injury with intracranial bleeding", "head injury", "intracranial", "subdural", "bleed", "hematoma"),
          k("coing", "Co-ingestion of alcohol, stimulants or other drugs", "co ingestion", "coingestion", "stimulant", "cocaine", "amphetamine", "methamphetamine", "cathinone", "alcohol"),
          k("wd", "Alcohol or benzodiazepine withdrawal", "withdrawal"),
          k("cns", "CNS infection such as meningitis or encephalitis", "meningitis", "encephalitis", "cns infection"),
          k("lytes", "Hyponatremia or another electrolyte disturbance", "sodium", "hyponatremia", "electrolyte", "calcium"),
          k("stroke", "Stroke", "stroke"),
          k("hypogly", "Hypoglycemia", "hypoglycemia", "hypoglycaemia"),
          k("sero", "Serotonin toxicity", "serotonin"),
          k("heat", "Heat stroke", "heat stroke", "heat illness"),
          k("nonconv", "Ongoing nonconvulsive seizures", "nonconvulsive", "eeg"),
          k("thyroid", "Thyrotoxicosis", "thyroid", "thyrotoxicosis"),
        ],
        explanation:
          "The forehead abrasion and tongue laceration mean he may have struck his head during the seizure, so intracranial bleeding stays on the list until it is excluded. Alcohol, cannabis and benzodiazepines are common co-ingestants with synthetic cannabinoids, and withdrawal from alcohol or benzodiazepines also causes seizures and agitation. Synthetic cannabinoids are linked to stroke. Fever with a seizure keeps meningitis and encephalitis in view until they are excluded or he improves.",
        keyFeature: kf(2),
        source: "takakuwa-cannabis",
      },
      {
        id: "q3",
        kind: "short",
        update: "He pulls out his IV and fights four staff members. Restraint is needed to keep everyone safe.",
        prompt: "What medication would you give to sedate him as restraint is applied, with the drug, dose and route?",
        required: 1,
        accept: [
          k("midaz", "Midazolam 5 to 10 mg IM", "midazolam 5", "midazolam 10", "midazolam 5mg", "midazolam 10mg", "versed 5", "versed 10"),
          k("loraz", "Lorazepam 2 to 4 mg IM", "lorazepam 2", "lorazepam 4", "lorazepam 2mg", "lorazepam 4mg", "ativan 2", "ativan 4"),
          k("ket", "Ketamine 4 to 5 mg/kg IM (320 to 400 mg)", "ketamine 4", "ketamine 5", "ketamine 320", "ketamine 400", "ketamine 300"),
        ],
        unacceptable: [
          bad("An antipsychotic alone", ["haloperidol alone", "droperidol alone", "antipsychotic alone"]),
          bad("Restraint without sedation", ["restraint alone", "restraint without sedation", "without sedation"]),
        ],
        explanation:
          "Sedation with medication goes with any restraint, because struggling against restraint drives hyperthermia, acidosis and sudden death. With no IV, midazolam IM acts quickly and also treats seizures, which suits a man who has just seized. Ketamine IM at 4 to 5 mg/kg, 320 to 400 mg at 80 kg, is an alternative for severe agitation. Once he is sedated he needs continuous monitoring of breathing, oximetry and vital signs, and the restraints come off as soon as it is safe.",
        keyFeature: kf(4),
        source: "acep-agitation",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "He is sedated. CK is 9 800 U/L, creatinine 212 umol/L with no previous value, potassium 5.3 mmol/L and troponin normal. He has passed little urine.",
        prompt: "What treatments does his kidney injury need?",
        required: 2,
        accept: [
          k("fluid", "IV isotonic crystalloid", "crystalloid", "iv fluid", "saline", "ringer", "fluid", "hydration"),
          k("uo", "Urinary catheter with hourly urine output", "catheter", "foley", "urine output", "hourly"),
          k("nephrotox", "Avoid nephrotoxins such as NSAIDs and IV contrast", "nephrotoxin", "avoid nsaid", "no nsaid", "stop nsaid", "avoid contrast", "no contrast"),
          k("k", "Repeat potassium with cardiac monitoring", "repeat potassium", "potassium", "cardiac monitor", "telemetry", "ecg"),
          k("dialysis", "Nephrology consultation for dialysis if needed", "nephrology", "dialysis"),
          k("sedate", "Continued sedation to stop muscle activity", "sedation", "benzodiazepine", "midazolam", "lorazepam"),
        ],
        unacceptable: [bad("Furosemide to force a diuresis", ["furosemide", "lasix", "diuretic"])],
        explanation:
          "Acute kidney injury is a recognized complication of synthetic cannabinoids, and his CK of 9 800 U/L adds muscle injury from the seizure and the struggle. With no antidote to direct, treatment is IV isotonic fluid with close urine output monitoring. NSAIDs and IV contrast would add kidney injury. A potassium of 5.3 mmol/L with little urine needs repeat levels, cardiac monitoring and nephrology involvement if it rises or he stays oliguric. Furosemide does not protect the kidney and can worsen volume depletion.",
        keyFeature: { topic: "tox", n: 4 },
        source: "takakuwa-cannabis",
      },
    ],
    sources: [TAKAKUWA_CANNABIS, ACEP_AGIT],
    ...META,
    reviewed: false,
    version: 2,
  },
  /* 12 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-12",
    topic: "delirium-agitation",
    title: "A difficult second night in the department",
    stem:
      "A 77-year-old man with Parkinson disease dementia is boarding in the emergency department on his second night, awaiting a medical bed for pneumonia. He takes carbidopa-levodopa four times daily at home. Tonight he sees children in the room, is trying to climb out of bed and struck a nurse. His wife says he sometimes sees people at home but is usually calm.\n\nLast year haloperidol 2 mg IM at another hospital left him rigid and unable to swallow for days.\n\nGlucose 8.1 mmol/L. The medication record shows his 1400 and 1800 levodopa doses were not given. He received diphenhydramine 25 mg for sleep last night.",
    vitals: { temperature: "37.8°C", pulse: "98/minute", resp: "20/minute", bp: "138/78 mmHg", o2sat: "92% on 2 L/minute by nasal prongs", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What contributors to his delirium would you address?",
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
        prompt: "What medication would you give for his agitation, with the drug, dose and route?",
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
        prompt: "What nonpharmacological measures would keep him and the staff safe tonight?",
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
        update: "You work in Ontario. You find him incapable of consenting to treatment of his pneumonia.",
        prompt: "What actions must you take?",
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
      "Police bring a 36-year-old man to the emergency department after a cocaine binge. He fought officers and was held prone in the back of the cruiser. In the department he was placed in four point restraints and given midazolam 10 mg IM and haloperidol 5 mg IM 20 minutes ago. He is now quiet. No monitor was attached and his nurse was called away.\n\nYou find him with snoring respirations.",
    vitals: { temperature: "38.9°C", pulse: "58/minute", resp: "6/minute", bp: "102/60 mmHg", o2sat: "82% on room air", weight: "102 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What are your immediate actions?",
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
        prompt: "What factors increase the risk of sudden death in physically restrained agitated patients?",
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
        update: "After bag mask ventilation and naloxone 0.4 mg IV his RR is 14/minute and SpO2 is 97%. Restraints are removed.",
        prompt: "What laboratory tests will guide further management?",
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
        prompt: "What actions after this event would support staff and improve safety?",
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
    title: "Suspicious of his coworkers",
    stem:
      "A 48-year-old man is brought to the emergency department by his husband after a generalized seizure at home. For 6 weeks he has been suspicious of his coworkers, forgetful and careless at work, which is unlike him. Today he is confused and accuses staff of spying on him. Four months ago he had a rash on his palms and soles that faded without treatment. He has no psychiatric history and uses no drugs.\n\nCapillary glucose 5.9 mmol/L. He is drowsy, oriented to person only and cannot repeat a short sentence. His pupils are small and irregular, and they constrict to accommodation but not to light. There is no neck stiffness or focal weakness.",
    vitals: { temperature: "37.3°C", pulse: "96/minute", resp: "18/minute", bp: "138/84 mmHg", o2sat: "97% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "His husband wonders whether this is a breakdown from stress.",
        prompt: "What features make a medical cause more likely than a primary psychiatric illness?",
        required: 3,
        accept: [
          k("seizure", "Seizure", "seizure"),
          k("loc", "Drowsiness and a reduced level of consciousness", "drowsy", "drowsiness", "level of consciousness", "decreased loc", "altered loc", "gcs"),
          DISORIENT,
          INATTN,
          k("cog", "Cognitive decline such as forgetfulness and poor judgment", "forgetful", "memory", "cognitive", "judgment", "judgement", "dementia"),
          k("pupils", "Abnormal pupils that react to accommodation but not to light", "pupil", "argyll robertson", "accommodation"),
          k("rash", "A past rash on the palms and soles", "rash", "palm", "sole", "syphilis"),
          k("age", "New psychiatric symptoms after age 40", "after 40", "older age", "age"),
          k("nohx", "No psychiatric history", "no psychiatric history", "no prior psychiatric"),
        ],
        explanation:
          "A first seizure, drowsiness, disorientation and a decline in memory and judgment are not features of a primary psychiatric illness. Small irregular pupils that constrict to accommodation but not to light, with a past rash on the palms and soles, point to neurosyphilis. New paranoia at 48 with no psychiatric history needs a medical cause excluded before a psychiatric label. The CDC guideline lists cognitive dysfunction among the neurological findings that call for CSF examination in a person with syphilis.",
        keyFeature: kf(1),
        source: "cdc-sti-2021",
      },
      {
        id: "q2",
        kind: "short",
        update: "A serum treponemal antibody test is reactive and the RPR titre is 1:128. Lumbar puncture will follow a CT head.",
        prompt: "What antimicrobial treatment would you start now, with the drug, dose, route and frequency?",
        required: 1,
        accept: [
          k(
            "pen",
            "Aqueous penicillin G 3 to 4 million units IV every 4 hours",
            "penicillin g 4", "penicillin g 3", "penicillin 4 million", "penicillin 3 million", "penicillin 24 million", "penicillin 18 million", "crystalline penicillin", "aqueous penicillin", "pen g 4",
          ),
          k("ceftri", "Ceftriaxone 2 g IV daily, if penicillin cannot be used", "ceftriaxone 2", "ceftriaxone 1", "ceftriaxone 2g"),
        ],
        unacceptable: [
          bad("Benzathine penicillin G 2.4 million units IM", ["benzathine", "bicillin", "2.4 million"]),
          bad("Oral doxycycline", ["doxycycline"]),
        ],
        explanation:
          "Reactive treponemal serology with an RPR of 1:128 in a man with cognitive decline, a seizure and Argyll Robertson pupils makes neurosyphilis likely, and treatment should not wait for CSF results that take days. Alberta's STI guideline prefers crystalline penicillin G 4 million units IV every 4 hours for 10 to 14 days, and the CDC gives 3 to 4 million units on the same schedule. Ceftriaxone 2 g IV daily for 10 to 14 days is the alternative when penicillin cannot be used. Benzathine penicillin IM, the treatment for early syphilis, does not reach adequate levels in CSF.",
        keyFeature: { topic: "infectious-diseases", n: 1 },
        source: "ab-sti-2018",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT head is normal. A lumbar puncture is done.",
        prompt: "Which tests on his CSF and blood would confirm neurosyphilis and guide his care?",
        required: 3,
        accept: [
          k("vdrl", "CSF VDRL", "vdrl", "csf rpr", "nontreponemal"),
          k("cells", "CSF cell count and differential", "cell count", "white cell", "wbc", "leukocyte", "pleocytosis", "differential"),
          k("protein", "CSF protein", "protein"),
          k("fta", "CSF treponemal test such as FTA-ABS", "fta", "fta abs", "treponemal", "tppa", "tp pa"),
          k("hiv", "HIV test", "hiv"),
        ],
        explanation:
          "Alberta's STI guideline recommends CSF cell count and differential, protein, VDRL and FTA-ABS to establish neurosyphilis in anyone with neurological signs. The CDC describes the CSF VDRL as highly specific but insensitive, so a lymphocytic pleocytosis or a raised protein supports the diagnosis when the VDRL is negative. A negative CSF FTA-ABS makes neurosyphilis highly unlikely. The CDC advises an HIV test for everyone with neurosyphilis, and HIV infection widens the differential to opportunistic infections.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ab-sti-2018",
      },
      {
        id: "q4",
        kind: "short",
        update: "Back in the department he pulls out his IV and has a generalized seizure. It has lasted 5 minutes.",
        prompt: "What is the first line drug, with the dose and route?",
        required: 1,
        accept: [
          k("midaz", "Midazolam 10 mg IM, intranasal or buccal", "midazolam 10", "midazolam 10mg", "versed 10"),
          k("loraz", "Lorazepam 4 mg IV or IO once access is regained", "lorazepam 4", "lorazepam 4mg", "lorazepam 0.1", "ativan 4"),
        ],
        unacceptable: [bad("An underdosed benzodiazepine such as midazolam 2 mg", ["midazolam 2", "midazolam 1 mg", "lorazepam 1 mg"])],
        explanation:
          "A seizure lasting 5 minutes is status epilepticus and needs a full benzodiazepine dose now. With no IV, midazolam 10 mg IM suits an adult over 40 kg, and in RAMPART it ended seizures before hospital arrival more often than IV lorazepam, 73.4% against 63.4%. Waiting to replace the IV delays treatment. Small doses such as midazolam 2 mg are a common cause of refractory status. A second line agent follows if the seizure continues.",
        keyFeature: { topic: "seizures", n: 4 },
        source: "rampart",
      },
    ],
    sources: [AB_STI, CDC_STI, RAMPART],
    ...META,
    reviewed: false,
    version: 2,
  },

  /* 15 ------------------------------------------------------------------ */
  {
    id: "delirium-agitation-15",
    topic: "delirium-agitation",
    alsoTopics: ["seizures", "arrhythmia"],
    title: "Quiet and not eating",
    stem:
      "An 84-year-old woman is brought to the emergency department by her daughter. For 10 days she has eaten little, stopped going to her bridge club and spent most of the day in her chair. Her daughter thinks she is depressed since her sister died last month. She has hypertension and glaucoma and uses amlodipine and timolol eye drops.\n\nCapillary glucose 6.1 mmol/L. She is drowsy and slow to answer. She loses the thread of questions, cannot spell WORLD backward and is unsure of the month. The examination is otherwise normal.",
    vitals: { temperature: "36.4°C", pulse: "42/minute regular", resp: "16/minute", bp: "104/58 mmHg", o2sat: "95% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "short",
        update: "Her daughter asks whether an antidepressant would help.",
        prompt: "What features indicate hypoactive delirium rather than depression?",
        required: 2,
        accept: [
          INATTN,
          LOC,
          DISORIENT,
          k("acute", "Acute onset over days", "acute", "sudden", "day"),
          FLUCT,
          DISORG,
          k("physical", "A new physical abnormality such as a slow pulse", "bradycardia", "slow pulse", "heart rate", "pulse"),
        ],
        explanation:
          "Drowsiness, inattention and uncertainty about the month point to hypoactive delirium, the form most often missed. In depression attention and alertness are usually preserved, and the change is in mood rather than in consciousness. An onset over days and a pulse of 42/minute also point to a medical cause. Inouye and colleagues describe delirium as an acute disorder of attention and cognition, diagnosed with a formal cognitive assessment and a history of acute onset.",
        keyFeature: kf(1),
        source: "inouye",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "On the monitor she stiffens and jerks for 15 seconds with loss of consciousness. The rhythm strip shows P waves with no conducted beats for 12 seconds, then a wide complex escape rhythm at 30/minute. She is pale and rouses only to pain.",
        prompt: "What is the immediate treatment?",
        required: 1,
        accept: [
          k("pace", "Transcutaneous pacing, then transvenous pacing", "transcutaneous", "pacing", "pacer", "transvenous"),
          k("epi", "Epinephrine infusion 2 to 10 mcg/minute", "epinephrine", "adrenaline"),
          k("iso", "Isoproterenol infusion", "isoproterenol", "isoprenaline"),
        ],
        unacceptable: [
          bad("Atropine", ["atropine"]),
          bad("An antiseizure drug for the jerking", ["lorazepam 2", "lorazepam 4", "levetiracetam", "phenytoin", "fosphenytoin", "antiseizure", "anticonvulsant"]),
        ],
        explanation:
          "The jerking came with a 12 second pause without conducted beats, so this was convulsive syncope from complete heart block, not an epileptic seizure. Treatment restores the heart rate. The ERC 2025 guideline advises transvenous pacing as soon as possible, with transcutaneous pacing as a bridge, and epinephrine at 2 to 10 mcg/minute or isoprenaline while it is set up. It advises against atropine in high-degree block with wide QRS complexes, where it is ineffective and may worsen the block. An antiseizure drug would treat the wrong problem.",
        keyFeature: { topic: "seizures", n: 2 },
        source: "erc-als-2025",
      },
      {
        id: "q3",
        kind: "short",
        update: "Transcutaneous pacing captures at 70/minute and she becomes more alert.",
        prompt: "What reversible causes of her heart block and delirium would you look for?",
        required: 2,
        accept: [
          k("timolol", "Beta blocker effect from her timolol eye drops", "timolol", "eye drop", "beta blocker"),
          k("k", "Hyperkalemia", "hyperkalemia", "potassium"),
          k("mi", "Myocardial ischemia or infarction", "ischemia", "infarction", "troponin", "acs", "myocardial"),
          k("thyroid", "Hypothyroidism", "hypothyroid", "hypothyroidism", "thyroid", "tsh"),
          k("otherdrug", "Other rate-slowing drugs such as digoxin or a nondihydropyridine calcium channel blocker", "digoxin", "diltiazem", "verapamil", "nondihydropyridine"),
          k("lyme", "Lyme carditis", "lyme"),
          k("lytes", "Other electrolyte disorders such as high magnesium", "magnesium", "electrolyte"),
          k("hypotherm", "Hypothermia", "hypothermia"),
        ],
        explanation:
          "Heart block has reversible causes that must be sought before a permanent pacemaker is placed. Timolol drops are absorbed into the circulation and slow AV conduction, and the ERC guideline suggests glucagon when a beta blocker may be the cause. Hyperkalemia, ischemia and hypothyroidism are also reversible. Her delirium most likely came from low cardiac output, so it should clear once her rate is restored, which is itself a check on the cause.",
        keyFeature: kf(2),
        source: "erc-als-2025",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "You work in Ontario. The next morning she is alert and attentive with a temporary transvenous pacer. Cardiology recommends a permanent pacemaker. She declines, saying she has had a full life. Her daughter asks you to override her.",
        prompt: "What should you do about her refusal?",
        required: 2,
        accept: [
          k("assess", "Assess her capacity for this decision now that the delirium has cleared", "assess capacity", "capacity assessment", "reassess capacity", "capacity", "capable"),
          k("respect", "If she is capable, respect her refusal", "respect", "accept her refusal", "honour", "honor", "her decision"),
          k("explore", "Explore her reasons, values and understanding of the risks", "explore", "reason", "values", "understanding"),
          k("doc", "Document the assessment and discussion", "document", "documentation"),
          k("daughter", "Explain that her daughter cannot consent while she is capable", "daughter cannot", "no substitute", "not the substitute"),
          k("revisit", "Offer to revisit the decision and involve family if she wishes", "revisit", "time to consider", "second opinion", "family meeting", "involve family"),
        ],
        unacceptable: [bad("Seek consent from her daughter", ["consent from her daughter", "consent from daughter", "daughter as sdm", "daughter as substitute"])],
        explanation:
          "Capacity is specific to a decision and a time, and her delirium has cleared since her heart rate was restored. If she understands the information and appreciates the consequences of refusing, she is capable and her refusal stands even if others disagree. Under the Health Care Consent Act a substitute decides only when the person is incapable, so her daughter cannot consent for her now. Exploring her reasons and documenting the assessment protect her choice, and the offer can be revisited. Other provinces use different statutes.",
        keyFeature: kf(5),
        source: "hcca",
      },
    ],
    sources: [INOUYE, ERC_ALS, HCCA],
    ...META,
    reviewed: false,
    version: 2,
  },
];
