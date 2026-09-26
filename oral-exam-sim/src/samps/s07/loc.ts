// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";
import { AUTHOR } from "./helpers";

const GCS40: Source = {
  id: "gcs-40",
  citation: "Teasdale G, Maas A, Lecky F, et al. The Glasgow Coma Scale at 40 years. Standing the test of time. Lancet Neurology 2014.",
  url: "https://doi.org/10.1016/S1474-4422(14)70120-6",
};
const BTF: Source = {
  id: "btf-tbi",
  citation:
    "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the Management of Severe Traumatic Brain Injury. Fourth Edition. Brain Trauma Foundation. Neurosurgery 2017.",
  url: "https://doi.org/10.1227/NEU.0000000000001432",
};
const GOLDFRANK: Source = {
  id: "goldfrank",
  citation: "Nelson LS, Howland MA, Lewin NA, et al., editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education. 2019.",
};
const DC_HYPO: Source = {
  id: "diabetes-canada-hypoglycemia",
  citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee. Hypoglycemia. Canadian Journal of Diabetes 2018.",
};
const DC_HHS: Source = {
  id: "diabetes-canada-hyperglycemic",
  citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee. Hyperglycemic emergencies in adults. Canadian Journal of Diabetes 2018.",
};
const IDSA_MEN: Source = {
  id: "idsa-meningitis",
  citation: "Tunkel AR, Hartman BJ, Kaplan SL, et al. Practice guidelines for the management of bacterial meningitis. Clinical Infectious Diseases 2004.",
  url: "https://doi.org/10.1086/425368",
};
const IDSA_ENC: Source = {
  id: "idsa-encephalitis",
  citation:
    "Tunkel AR, Glaser CA, Bloch KC, et al. The management of encephalitis. Clinical practice guidelines by the Infectious Diseases Society of America. Clinical Infectious Diseases 2008.",
  url: "https://doi.org/10.1086/589747",
};
const AES: Source = {
  id: "aes-status",
  citation:
    "Glauser T, Shinnar S, Gloss D, et al. Evidence-based guideline. Treatment of convulsive status epilepticus in children and adults. Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Currents 2016.",
  url: "https://doi.org/10.5698/1535-7597-16.1.48",
};
const ESETT: Source = {
  id: "esett",
  citation: "Kapur J, Elm J, Chamberlain JM, et al. Randomized trial of three anticonvulsant medications for status epilepticus. New England Journal of Medicine 2019.",
  url: "https://doi.org/10.1056/NEJMoa1905795",
};
const HYPONA_EU: Source = {
  id: "hyponatremia-eu",
  citation: "Spasovski G, Vanholder R, Allolio B, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. European Journal of Endocrinology 2014.",
  url: "https://doi.org/10.1530/EJE-13-1020",
};
const HYPONA_US: Source = {
  id: "hyponatremia-us",
  citation:
    "Verbalis JG, Goldsmith SR, Greenberg A, et al. Diagnosis, evaluation, and treatment of hyponatremia. Expert panel recommendations. American Journal of Medicine 2013.",
  url: "https://doi.org/10.1016/j.amjmed.2013.07.006",
};
const CCHR: Source = {
  id: "canadian-ct-head",
  citation: "Stiell IG, Wells GA, Vandemheen K, et al. The Canadian CT Head Rule for patients with minor head injury. Lancet 2001.",
  url: "https://doi.org/10.1016/s0140-6736(00)04561-x",
};
const CO: Source = {
  id: "co-practice",
  citation:
    "Hampson NB, Piantadosi CA, Thom SR, Weaver LK. Practice recommendations in the diagnosis, management, and prevention of carbon monoxide poisoning. American Journal of Respiratory and Critical Care Medicine 2012.",
  url: "https://doi.org/10.1164/rccm.201207-1284CI",
};
const CSBPR: Source = {
  id: "csbpr-acute",
  citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management. 7th edition. 2022.",
  url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management",
};
const AHA_ICH: Source = {
  id: "aha-ich-2022",
  citation:
    "Greenberg SM, Ziai WC, Cordonnier C, et al. 2022 Guideline for the management of patients with spontaneous intracerebral hemorrhage. A guideline from the American Heart Association and American Stroke Association. Stroke 2022.",
  url: "https://doi.org/10.1161/STR.0000000000000407",
};
const SSC: Source = {
  id: "ssc-2021",
  citation:
    "Evans L, Rhodes A, Alhazzani W, et al. Surviving Sepsis Campaign. International guidelines for management of sepsis and septic shock 2021. Critical Care Medicine 2021.",
  url: "https://doi.org/10.1097/CCM.0000000000005337",
};
const HE: Source = {
  id: "aasld-easl-he",
  citation:
    "Vilstrup H, Amodio P, Bajaj J, et al. Hepatic encephalopathy in chronic liver disease. 2014 practice guideline by the American Association for the Study of Liver Diseases and the European Association for the Study of the Liver. Hepatology 2014.",
  url: "https://doi.org/10.1002/hep.27210",
};
const ATA: Source = {
  id: "ata-hypothyroidism",
  citation:
    "Jonklaas J, Bianco AC, Bauer AJ, et al. Guidelines for the treatment of hypothyroidism. Prepared by the American Thyroid Association Task Force on Thyroid Hormone Replacement. Thyroid 2014.",
  url: "https://doi.org/10.1089/thy.2014.0028",
};
const HYPOTHERMIA: Source = {
  id: "hypothermia-nejm",
  citation: "Brown DJA, Brugger H, Boyd J, Paal P. Accidental hypothermia. New England Journal of Medicine 2012.",
  url: "https://doi.org/10.1056/NEJMra1114208",
};

const GCS_AID: Source = {
  id: "gcs-aid",
  citation: "Teasdale G. Glasgow Coma Scale. Do it this way. Assessment aid. Institute of Neurological Sciences, NHS Greater Glasgow and Clyde. 2015.",
  url: "https://www.glasgowcomascale.org/downloads/GCS-Assessment-Aid-English.pdf",
};
const ERC_POST: Source = {
  id: "erc-post",
  citation:
    "Nolan JP, Sandroni C, Bottiger BW, et al. European Resuscitation Council and European Society of Intensive Care Medicine guidelines 2021. Post-resuscitation care. Intensive Care Med. 2021.",
  url: "https://doi.org/10.1007/s00134-021-06368-4",
};
const ISMP_PACK: Source = {
  id: "ismp-pack",
  citation: "Institute for Safe Medication Practices Canada. Balancing safety and efficiency in community pharmacy. ISMP Canada Safety Bulletin. 2021.",
  url: "https://ismpcanada.ca/bulletin/balancing-safety-and-efficiency-in-community-pharmacy/",
};
const TOX_2023: Source = {
  id: "tox-2023",
  citation:
    "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023.",
  url: "https://doi.org/10.1161/CIR.0000000000001161",
};
const CSBPR_CVT: Source = {
  id: "csbpr-cvt",
  citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Cerebral venous thrombosis. 7th edition. 2024.",
  url: "https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis",
};
const GUANFACINE_SERIES: Source = {
  id: "guanfacine-series",
  citation: "Peters E, Hodgson SE, Elliott R, Greene SL. Guanfacine exposure in paediatric and adolescent patients. A multicentre retrospective review. Emerg Med Australas. 2025.",
  url: "https://doi.org/10.1111/1742-6723.70018",
};
const GUANFACINE_TODDLER: Source = {
  id: "guanfacine-toddler",
  citation: "Assali DR, Adkins AQ, Chang J. Accidental ingestion of extended-release guanfacine in a toddler. Cureus. 2025.",
  url: "https://doi.org/10.7759/cureus.85261",
};

const INTUBATE = ["intubate", "intubation", "intubated", "rsi", "rapid sequence", "definitive airway", "secure airway", "ett"];
const NEUROSURG = ["neurosurgery", "neurosurgical", "neurosurgeon"];
const CT_HEAD = ["ct head", "ct brain", "ct scan", "urgent ct", "stat ct", "immediate ct", "emergent ct"];
const REPEAT_CT = ["repeat ct", ...CT_HEAD];
/** GCS components written as "E2 V2 M5", "E2V2M5" or "eyes 2 verbal 2 motor 5". */
const gcs = (e: number, v: number, m: number) => [`e${e} v${v} m${m}`, `e${e}v${v}m${m}`, `eye ${e} verbal ${v} motor ${m}`];

export const LOC: Samp[] = [
  /* 01 ----------------------------------------------------------------- */
  {
    id: "loc-01",
    topic: "loc",
    alsoTopics: ["airway"],
    title: "Found on a bench in November",
    stem:
      "A 71-year-old man is brought in by EMS after a passer-by found him slumped on a park bench on a cold November evening. He smells strongly of alcohol. The paramedics say he is a regular at a nearby shelter and is \"just drunk again\". He opens his eyes only to trapezius pressure, makes incomprehensible sounds, and reaches toward the painful stimulus. He has a boggy occipital hematoma. His right pupil is 4 mm and sluggish. His left pupil is 3 mm and brisk. No capillary glucose has been checked.",
    vitals: {
      temperature: "35.9°C",
      pulse: "58/minute",
      resp: "14/minute",
      bp: "176/94 mmHg",
      o2sat: "95% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is his level of consciousness on the Glasgow Coma Scale, with the total and the components?",
        required: 1,
        accept: [{ id: "gcs", text: "GCS 9 (E2 V2 M5)", match: gcs(2, 2, 5) }],
        explanation:
          "Eye opening to pressure is E2, incomprehensible sounds are V2, and localizing to pain is M5, for a total of 9. Always record the components, since the same total can describe very different patients. Also document pupils and any lateralizing signs with the time.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What findings argue against alcohol intoxication as the sole cause of his decreased level of consciousness?",
        required: 3,
        accept: [
          { id: "head", text: "Occipital scalp hematoma suggesting head injury", match: ["hematoma", "head injury", "head trauma", "trauma", "occipital", "scalp"] },
          { id: "pupils", text: "Unequal pupils with a sluggish right pupil", match: ["pupil", "anisocoria", "unequal", "sluggish"] },
          {
            id: "cushing",
            text: "Hypertension with relative bradycardia (Cushing response)",
            match: ["bradycardia", "hypertension", "cushing", "heart rate", "blood pressure", "hr 58", "bp 176"],
          },
          { id: "depth", text: "Depth of coma (GCS 9) is more than expected from typical intoxication", match: ["gcs", "depth", "deep", "coma"] },
          { id: "glucose", text: "No glucose checked yet, so hypoglycemia has not been excluded", match: ["glucose", "hypoglycemia", "sugar"] },
        ],
        explanation:
          "Intoxication does not cause focal signs such as anisocoria. A scalp hematoma, a Cushing pattern and a deep coma all point to an intracranial lesion. Labelling him as drunk is a classic trap that delays care for a treatable hematoma.",
        keyFeature: { topic: "loc", n: 4 },
        source: "gcs-40",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following actions are most appropriate right now?",
        options: [
          "Capillary blood glucose",
          "Flumazenil 0.2 mg IV",
          "Lumbar puncture",
          "MRI of the brain",
          "Naloxone 2 mg IV",
          "Observe in the hallway until sober",
          "Serum ethanol level before any imaging",
          "Urgent non-contrast CT head",
        ],
        select: 2,
        correct: [0, 7],
        explanation:
          "A bedside glucose takes seconds and treats a reversible cause. Anisocoria after head trauma needs urgent CT. His breathing and pupils do not suggest opioid toxicity, flumazenil can cause seizures, and an ethanol level must never delay imaging.",
        keyFeature: { topic: "loc", n: 1 },
        source: "btf-tbi",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "His glucose is 6.2 mmol/L. While he waits for CT, his GCS falls to 6 (E1 V1 M4). His right pupil is now 6 mm and nonreactive.",
        prompt: "What are the immediate management steps?",
        required: 3,
        accept: [
          { id: "airway", text: "Intubate by rapid sequence intubation to protect the airway", match: INTUBATE },
          {
            id: "osmo",
            text: "Hyperosmolar therapy, such as mannitol 1 g/kg IV or hypertonic saline",
            match: ["mannitol", "hypertonic", "3% saline", "osmolar", "hyperosmolar"],
          },
          { id: "nsx", text: "Emergent neurosurgical consultation", match: NEUROSURG },
          { id: "hob", text: "Elevate the head of bed to 30 degrees with the neck neutral", match: ["head of bed", "elevate", "30 degree", "hob"] },
          { id: "ct", text: "CT head immediately once the airway is secured", match: CT_HEAD },
          { id: "hyperv", text: "Brief hyperventilation as a bridge to surgery", match: ["hyperventilation", "hyperventilate"] },
          { id: "targets", text: "Avoid hypoxia and hypotension", match: ["hypoxia", "hypotension", "avoid hypoxia", "avoid hypotension", "oxygenation", "map", "sbp"] },
        ],
        unacceptable: [{ text: "Lumbar puncture", match: ["lumbar puncture", "lp"], dangerous: true }],
        explanation:
          "A falling GCS with a blown pupil means herniation. He needs a definitive airway, hyperosmolar therapy and neurosurgery now. Brief hyperventilation is only a bridge. A lumbar puncture could be fatal.",
        keyFeature: { topic: "airway", n: 2 },
        source: "btf-tbi",
      },
    ],
    sources: [GCS40, BTF],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 02 ----------------------------------------------------------------- */
  {
    id: "loc-02",
    topic: "loc",
    alsoTopics: ["tox"],
    title: "Unresponsive in a mall washroom",
    stem:
      "A 26-year-old woman is brought in by EMS after security found her unresponsive in a shopping centre washroom. A friend with her says she smoked something about 20 minutes earlier. Paramedics have been ventilating her with a bag-valve-mask. Her pupils are 1 mm. She does not open her eyes, make sounds or move to pressure.",
    vitals: {
      temperature: "36.4°C",
      pulse: "112/minute",
      resp: "4/minute",
      bp: "104/62 mmHg",
      o2sat: "82% on bag-valve-mask with oxygen",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate management for this patient?",
        options: [
          "Flumazenil 0.2 mg IV with ongoing ventilation",
          "Immediate rapid sequence intubation without naloxone",
          "Naloxone 2 mg IV push, then remove the bag-valve-mask",
          "Non-rebreather mask at 15 L/min and observation",
          "Ventilate with oxygen, titrate naloxone 0.04 to 0.4 mg IV",
        ],
        correct: 4,
        explanation:
          "Continued bag-valve-mask ventilation with 100% oxygen fixes hypoxia immediately and comes first. Naloxone should then be titrated to breathing, not to full wakefulness. Small doses in opioid dependent patients reduce precipitated withdrawal, vomiting and aspiration. Flumazenil is dangerous in unknown ingestions.",
        keyFeature: { topic: "loc", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What pieces of collateral history would you seek from the friend or paramedics?",
        required: 3,
        accept: [
          { id: "substance", text: "What substance was used and its source", match: ["substance", "what she", "what was", "drug", "fentanyl", "source"] },
          { id: "time", text: "Time of use and how long she was down", match: ["time", "when", "how long", "downtime", "down time", "duration"] },
          {
            id: "coingest",
            text: "Other substances, such as benzodiazepines, alcohol or xylazine",
            match: ["co ingestion", "coingestion", "benzodiazepine", "alcohol", "xylazine", "other substance", "other drug"],
          },
          { id: "oat", text: "Prescribed medications, including methadone or buprenorphine", match: ["methadone", "buprenorphine", "suboxone", "opioid agonist", "prescription", "medication"] },
          { id: "trauma", text: "Any fall, head strike or seizure activity", match: ["fall", "head", "trauma", "seizure"] },
          { id: "baseline", text: "Baseline health, medical history and pregnancy possibility", match: ["baseline", "medical history", "history", "pregnancy", "pregnant"] },
        ],
        explanation:
          "Collateral identifies the likely toxin, co-ingestants and long acting opioids that change monitoring time. It also flags trauma and downtime, which predict hypoxic injury. The friend may leave soon, so ask early.",
        keyFeature: { topic: "loc", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "After a total of 0.4 mg IV naloxone she breathes at 16 per minute and is drowsy but rousable. Forty-five minutes later her respiratory rate is 8 again. The friend now tells you she is on methadone 120 mg daily.",
        prompt: "What naloxone infusion would you start, with the dose per hour and how you calculated it?",
        required: 1,
        accept: [
          {
            id: "infusion",
            text: "About 0.27 mg/h, which is two thirds of the effective reversal dose (0.4 mg) given each hour",
            match: ["two third", "2/3", "0.25", "0.26", "0.27", "0.3 mg"],
          },
        ],
        unacceptable: [{ text: "Discharge once awake", match: ["discharge"], dangerous: true }],
        explanation:
          "Naloxone lasts 30 to 90 minutes, far shorter than methadone. A standard starting infusion is two thirds of the dose that reversed respiratory depression, given each hour, so 2/3 x 0.4 mg = about 0.27 mg/h, then titrated. She needs monitored observation until well after the infusion stops.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "On the infusion her respiratory rate is 16 and SpO2 is 97%. Her glucose is 5.4 mmol/L. Two hours later she remains at GCS 9 (E2 V3 M4).",
        prompt: "What other causes of her persistently decreased level of consciousness must you consider?",
        required: 3,
        accept: [
          { id: "hypoxic", text: "Hypoxic brain injury from the period of hypoventilation", match: ["hypoxic", "anoxic", "hypoxia", "hypoxic ischemic"] },
          {
            id: "coingest",
            text: "Co-ingested sedatives such as benzodiazepines, alcohol, GHB or xylazine",
            match: ["benzodiazepine", "xylazine", "co ingestion", "coingestion", "alcohol", "ghb", "sedative", "co ingestant"],
          },
          {
            id: "head",
            text: "Head injury from a fall with intracranial hemorrhage",
            match: ["head injury", "trauma", "intracranial", "hemorrhage", "subdural", "bleed"],
          },
          { id: "seizure", text: "Seizure or post-ictal state", match: ["seizure", "postictal", "post ictal", "nonconvulsive"] },
          { id: "co2", text: "Hypercapnia or aspiration pneumonia", match: ["hypercapnia", "co2", "carbon dioxide", "aspiration"] },
          { id: "infection", text: "CNS infection or sepsis, such as from injection use", match: ["meningitis", "encephalitis", "sepsis", "infection", "endocarditis"] },
        ],
        explanation:
          "Once opioid effect is reversed and ventilation is normal, persistent coma needs another explanation. Hypoxic injury, co-ingestants and occult head trauma are the most common. CT head, a blood gas and review of the timeline should follow.",
        keyFeature: { topic: "loc", n: 4 },
        source: "goldfrank",
      },
    ],
    sources: [GOLDFRANK],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 03 ----------------------------------------------------------------- */
  {
    id: "loc-03",
    topic: "loc",
    alsoTopics: ["cva"],
    title: "Hard to wake this morning",
    stem:
      "An 84-year-old woman is brought in by her son, who found her hard to rouse at 0700. She was well at dinner last night. She has type 2 diabetes, chronic kidney disease (eGFR 28 mL/min/1.73 m2) and hypertension. She opens her eyes to voice and mumbles. Her right arm drifts and she has a right facial droop.",
    vitals: {
      temperature: "36.2°C",
      pulse: "96/minute",
      resp: "18/minute",
      bp: "158/84 mmHg",
      o2sat: "96% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following tests should be done first for this patient?",
        options: [
          "Capillary blood glucose",
          "CT angiography head and neck",
          "ECG with rhythm strip",
          "Non-contrast CT head",
          "Serum electrolytes",
        ],
        correct: 0,
        explanation:
          "Hypoglycemia is a common stroke mimic and can cause focal deficits. A capillary glucose takes seconds and must be checked before any stroke pathway decision. Thrombolysis should never be given before glucose is known.",
        keyFeature: { topic: "loc", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "short",
        update: "Her capillary glucose is 1.8 mmol/L. Two attempts at IV access have failed.",
        prompt: "What drug, dose and route would you give now?",
        required: 1,
        accept: [
          { id: "glucagon", text: "Glucagon 1 mg IM or SC", match: ["glucagon 1 mg", "glucagon 1mg"] },
          {
            id: "io",
            text: "Dextrose 25 g (50 mL of D50W) by the intraosseous route",
            match: ["intraosseous dextrose", "io dextrose", "d50 io", "d50w io", "d10 io", "d10w io", "dextrose io", "dextrose intraosseous"],
          },
        ],
        unacceptable: [
          { text: "Oral glucose gel, juice or tablets", match: ["oral glucose", "juice", "glucose tablet", "glucose gel", "po glucose"], dangerous: true },
        ],
        explanation:
          "Without IV access, glucagon 1 mg IM is the fastest option. Intraosseous dextrose is an alternative. Oral glucose is unsafe in a patient who cannot protect her airway. Glucagon may work less well if glycogen is depleted, so obtain access and give dextrose as soon as possible.",
        keyFeature: { topic: "loc", n: 2 },
        source: "diabetes-canada-hypoglycemia",
      },
      {
        id: "q3",
        kind: "short",
        update: "IV access is obtained and she receives 25 g of IV dextrose. She wakes and her weakness resolves.",
        prompt: "What items of collateral history would you now seek from her son?",
        required: 3,
        accept: [
          {
            id: "meds",
            text: "Full medication list, including recent changes such as a new sulfonylurea or insulin",
            match: ["medication", "glyburide", "gliclazide", "sulfonylurea", "insulin", "new drug", "pill", "prescription"],
          },
          { id: "baseline", text: "Her baseline cognition and function", match: ["baseline", "usual", "normal self", "cognition", "function"] },
          { id: "timeline", text: "When she was last seen well", match: ["last seen", "last known well", "time", "when"] },
          { id: "intake", text: "Recent oral intake, vomiting or illness", match: ["intake", "eating", "ate", "vomiting", "illness", "appetite", "meal"] },
          { id: "overdose", text: "Possible intentional or accidental overdose, such as empty bottles", match: ["overdose", "bottle", "intentional", "blister pack"] },
          { id: "alcohol", text: "Alcohol use", match: ["alcohol"] },
          { id: "fall", text: "Any fall or head strike", match: ["fall", "head strike", "trauma"] },
        ],
        explanation:
          "The son can tell you what is normal for her and what has changed. Here the key collateral is that her family doctor started glyburide 2 weeks ago. That predicts prolonged hypoglycemia, especially with her poor renal function.",
        keyFeature: { topic: "loc", n: 3 },
        source: "diabetes-canada-hypoglycemia",
      },
      {
        id: "q4",
        kind: "short",
        update: "Her son says her family doctor started glyburide 5 mg twice daily 2 weeks ago.",
        prompt: "What measures would prevent recurrent hypoglycemia?",
        required: 2,
        accept: [
          { id: "d10", text: "Dextrose infusion, such as D10W", match: ["d10", "d10w", "dextrose infusion", "dextrose 10%"] },
          { id: "octreotide", text: "Octreotide 50 mcg SC every 6 hours", match: ["octreotide"] },
          { id: "food", text: "Feed her complex carbohydrate once she can swallow safely", match: ["eat", "meal", "food", "feed", "carbohydrate", "snack"] },
          { id: "stop", text: "Stop glyburide", match: ["stop glyburide", "discontinue", "hold glyburide", "stop sulfonylurea", "stop the glyburide"] },
          { id: "monitor", text: "Admit with glucose checks every 1 to 2 hours", match: ["admit", "admission", "hourly", "frequent glucose", "monitor glucose", "serial glucose", "q1h"] },
        ],
        explanation:
          "Sulfonylureas stimulate insulin release, and repeated dextrose can trigger more insulin and rebound lows. Octreotide blocks that release and is the antidote of choice for recurrent sulfonylurea hypoglycemia. Glyburide should be avoided in older adults and in renal impairment.",
        keyFeature: { topic: "loc", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this patient?",
        options: [
          "Admit for monitored glucose checks for at least 24 hours",
          "Admit only if a CT head shows an abnormality",
          "Discharge home after a meal with her son",
          "Discharge with a home glucometer and follow-up in 1 week",
          "Observe 4 hours, discharge if glucose stays above 4 mmol/L",
        ],
        correct: 0,
        explanation:
          "Glyburide has active metabolites that are cleared by the kidneys. Hypoglycemia can recur for 24 hours or more, especially with an eGFR of 28. Short observation is unsafe.",
        keyFeature: { topic: "loc", n: 2 },
        source: "goldfrank",
      },
    ],
    sources: [CSBPR, DC_HYPO, GOLDFRANK],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 04 ----------------------------------------------------------------- */
  {
    id: "loc-04",
    topic: "loc",
    alsoTopics: ["headache", "infectious-diseases"],
    title: "Fever and new confusion in a retired engineer",
    stem:
      "A 67-year-old man is brought in by his wife. He has had headache and fever for 2 days and today is confused and not making sense. She says he is normally fully independent, still does their taxes and drove yesterday. His GCS is 12 (E3 V4 M5). His neck is stiff. There is no rash, no focal deficit and no papilledema. Capillary glucose is 7.1 mmol/L.",
    vitals: {
      temperature: "39.2°C",
      pulse: "112/minute",
      resp: "22/minute",
      bp: "138/76 mmHg",
      o2sat: "96% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What serious causes of his presentation must you consider?",
        required: 3,
        accept: [
          { id: "bm", text: "Bacterial meningitis", match: ["meningitis"] },
          { id: "enc", text: "Viral encephalitis, especially HSV", match: ["encephalitis", "hsv", "herpes"] },
          { id: "abscess", text: "Brain abscess", match: ["abscess"] },
          { id: "sah", text: "Subarachnoid hemorrhage", match: ["subarachnoid", "sah", "hemorrhage", "bleed"] },
          { id: "sepsis", text: "Sepsis from another source, such as pneumonia or urinary infection", match: ["sepsis", "pneumonia", "urinary", "uti", "urosepsis"] },
          { id: "ncse", text: "Nonconvulsive status epilepticus", match: ["nonconvulsive", "non convulsive", "seizure", "status epilepticus"] },
          { id: "endo", text: "Endocarditis with septic emboli", match: ["endocarditis", "septic emboli"] },
          { id: "stroke", text: "Stroke", match: ["stroke"] },
        ],
        explanation:
          "Fever, headache, meningism and altered mental status make meningitis or encephalitis the leading concern. Subarachnoid hemorrhage can also cause fever and neck stiffness. Sepsis from another source and nonconvulsive seizures are common in older adults.",
        keyFeature: { topic: "loc", n: 1 },
        source: "idsa-meningitis",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What medications would you give now, with the dose for each?",
        required: 4,
        accept: [
          { id: "ceftriaxone", text: "Ceftriaxone 2 g IV", match: ["ceftriaxone 2 g", "ceftriaxone 2g", "ceftriaxone 2 gram"] },
          {
            id: "vanco",
            text: "Vancomycin 15 to 20 mg/kg IV (a loading dose of 25 to 30 mg/kg is also accepted)",
            match: ["vancomycin 15", "vancomycin 20", "vancomycin 25", "vancomycin 30"],
          },
          { id: "ampicillin", text: "Ampicillin 2 g IV (for Listeria, age over 50)", match: ["ampicillin 2 g", "ampicillin 2g", "ampicillin 2 gram"] },
          { id: "dex", text: "Dexamethasone 10 mg IV, before or with the first antibiotic dose", match: ["dexamethasone 10 mg", "dexamethasone 10mg", "dexamethasone 0.15 mg/kg"] },
          { id: "acyclovir", text: "Acyclovir 10 mg/kg IV", match: ["acyclovir 10", "aciclovir 10"] },
        ],
        unacceptable: [
          {
            text: "Wait for CT and lumbar puncture before antibiotics",
            match: ["delay antibiotic", "antibiotic after ct", "antibiotic after lp", "antibiotic after lumbar puncture", "wait for ct", "wait for lp", "wait for lumbar puncture"],
            dangerous: true,
          },
        ],
        explanation:
          "Antibiotics must not wait for CT or LP. At 67 he needs ceftriaxone and vancomycin plus ampicillin for Listeria. Dexamethasone should go with or before the first dose. Add acyclovir because encephalitis cannot be excluded in a confused, febrile patient.",
        keyFeature: { topic: "infectious-diseases", n: 1 },
        source: "idsa-meningitis",
      },
      {
        id: "q3",
        kind: "single",
        update: "His antibiotics have been given.",
        prompt: "Which of the following is the most appropriate next step before lumbar puncture?",
        options: [
          "Defer lumbar puncture for 48 hours",
          "EEG before any other testing",
          "Lumbar puncture now without imaging",
          "MRI brain with gadolinium",
          "Non-contrast CT head",
        ],
        correct: 4,
        explanation:
          "Altered mental status and age over 60 are accepted indications for CT before LP, to look for mass effect. Antibiotics already given will not delay the diagnosis much, since CSF cell counts, PCR and Gram stain remain useful. MRI is more sensitive for encephalitis but should not delay an LP.",
        keyFeature: { topic: "headache", n: 6 },
        source: "idsa-meningitis",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "CT head is normal. CSF shows WBC 180 x 10^6/L (85% lymphocytes), RBC 400 x 10^6/L, protein 0.9 g/L and glucose 3.8 mmol/L (serum 7.0 mmol/L). Gram stain is negative.",
        prompt: "What is the most likely diagnosis, and what test would confirm it?",
        required: 2,
        accept: [
          { id: "pcr", text: "HSV PCR on CSF", match: ["pcr"] },
          { id: "dx", text: "HSV encephalitis", match: ["hsv", "herpes", "encephalitis"] },
        ],
        explanation:
          "A lymphocytic pleocytosis with red cells, raised protein and normal glucose in a confused febrile patient suggests HSV encephalitis. CSF HSV PCR confirms it. MRI and EEG support the diagnosis but do not confirm it. Continue acyclovir until PCR is negative and the picture fits another diagnosis.",
        keyFeature: { topic: "loc", n: 1 },
        source: "idsa-encephalitis",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "His wife asks how the team will know if he is getting better or worse. How will you document and monitor his level of consciousness?",
        required: 2,
        accept: [
          { id: "gcs", text: "Serial GCS with each component recorded", match: ["gcs", "glasgow"] },
          {
            id: "descriptive",
            text: "Written description of his orientation, speech and behaviour",
            match: ["orientation", "oriented", "descriptive", "describe", "behaviour", "behavior", "speech"],
          },
          { id: "pupils", text: "Pupil size and reactivity", match: ["pupil"] },
          { id: "neuro", text: "Focal neurological examination", match: ["focal", "motor", "neuro exam", "neurological exam", "neurologic exam"] },
          { id: "freq", text: "Assessments at set intervals, such as hourly", match: ["hourly", "q1h", "every hour", "interval", "frequent", "serial"] },
          { id: "cam", text: "A delirium tool such as CAM", match: ["cam", "confusion assessment", "delirium"] },
        ],
        explanation:
          "A number alone misses important change, so pair the GCS components with a plain language description. Timed, repeated observations make trends visible to the whole team. Deterioration should trigger reassessment for seizures, raised pressure or airway compromise.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
    ],
    sources: [IDSA_MEN, IDSA_ENC, GCS40],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 05 ----------------------------------------------------------------- */
  {
    id: "loc-05",
    topic: "loc",
    alsoTopics: ["seizures"],
    title: "Jerking while waiting for an ICU bed",
    stem:
      "A 58-year-old man is in the resuscitation area of the emergency department awaiting an ICU bed. He was brought in 12 hours ago after an out-of-hospital cardiac arrest, with return of spontaneous circulation before arrival. He is intubated and ventilated, and a surface device holds his temperature at 36.0°C. Propofol was stopped 30 minutes ago for a neurological assessment. He now has sudden, brief, symmetrical jerks of the face, trunk and all four limbs every few seconds, worse when he is suctioned. His eyes stay closed to supraorbital pressure, and both arms extend at the elbow. His pupils are 3 mm and react to light. Capillary glucose is 8.4 mmol/L.",
    vitals: {
      temperature: "36.0°C core",
      pulse: "96/minute",
      bp: "122/70 mmHg",
      o2sat: "97% on 40% oxygen by ventilator",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "How would you record his level of consciousness?",
        required: 2,
        accept: [
          {
            id: "gcs",
            text: "GCS components E1 VT M2, with the verbal score recorded as not testable because he is intubated",
            match: ["e1 m2", "e1 vt m2", "e1 vnt m2", "eye 1 motor 2", "e1 v nt m2"],
          },
          {
            id: "words",
            text: "A written description of the jerks, what provokes them and his response on each side",
            match: ["describe", "description", "written", "document the jerk", "video"],
          },
        ],
        explanation:
          "His eyes do not open to pressure (E1), his verbal response cannot be tested because of the tube (VT, not testable), and his arms extend at the elbow to pressure (M2). Report the three components, with the verbal response marked as not testable, rather than a single total. Write down what the jerks look like, what provokes them and how he responds, because these words are what the next examiner compares against.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-aid",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the possible causes of the jerking?",
        required: 3,
        accept: [
          {
            id: "myoclonus",
            text: "Post-anoxic myoclonus",
            match: ["myoclonus", "myoclonic", "post anoxic", "postanoxic", "hypoxic", "anoxic"],
          },
          {
            id: "seizure",
            text: "Convulsive or nonconvulsive seizures",
            match: ["seizure", "status epilepticus", "nonconvulsive", "non convulsive", "epileptic", "epilepsy", "convulsion"],
          },
          { id: "lance", text: "Lance-Adams syndrome", match: ["lance", "adams"] },
          { id: "shiver", text: "Shivering", match: ["shiver", "shivering", "rigor"] },
          {
            id: "metabolic",
            text: "Metabolic causes such as low glucose, sodium, calcium or magnesium",
            match: ["hypoglycemia", "glucose", "sodium", "calcium", "magnesium", "electrolyte", "metabolic", "uremia"],
          },
          { id: "drug", text: "Drug effects, including propofol withdrawal", match: ["propofol", "sedation", "withdrawal", "drug", "medication", "serotonin"] },
          { id: "ich", text: "Intracranial hemorrhage or stroke", match: ["hemorrhage", "bleed", "stroke", "intracranial"] },
        ],
        explanation:
          "Brief, generalized, stimulus-sensitive jerks in a comatose patient soon after cardiac arrest are most often post-anoxic myoclonus, and the EEG may show discharges time-locked to the jerks. Convulsive and nonconvulsive seizures also occur after arrest and may be unmasked when sedation is stopped. Lance-Adams syndrome is a less common myoclonus that usually appears in a patient who has woken. Shivering and metabolic causes such as low glucose, sodium, calcium or magnesium must be excluded.",
        keyFeature: { topic: "loc", n: 1 },
        source: "erc-post",
      },
      {
        id: "q3",
        kind: "menu",
        update: "The jerks continue. There is no EEG technologist in the hospital overnight.",
        prompt: "Which of the following are the most appropriate next steps for his jerking?",
        options: [
          "Arrange EEG as soon as possible",
          "Flumazenil 0.2 mg IV",
          "Haloperidol 5 mg IV",
          "Levetiracetam IV loading dose",
          "Neuromuscular blocker to stop the jerks",
          "Phenytoin 20 mg/kg IV",
          "Withdraw life-sustaining therapy now",
        ],
        select: 2,
        correct: [0, 3],
        explanation:
          "ERC and ESICM recommend EEG to diagnose seizures in patients with clinical convulsions after cardiac arrest, and they suggest recording it when myoclonus is present. They suggest levetiracetam or sodium valproate as first line antiseizure drugs, alongside sedation. Phenytoin is not the suggested first choice after arrest, and a neuromuscular blocker only hides the movements. Prognosis is assessed at 72 hours or later once sedation and other confounders are excluded, so withdrawing care now is far too early. Flumazenil can provoke seizures and haloperidol does not treat them.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "erc-post",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What investigations would help find the cause of his coma and jerking?",
        required: 2,
        accept: [
          { id: "eeg", text: "EEG", match: ["eeg", "electroencephalogram", "electroencephalography"] },
          { id: "ct", text: "CT head", match: [...CT_HEAD, "ct"] },
          {
            id: "lytes",
            text: "Electrolytes including sodium, calcium, magnesium and phosphate",
            match: ["electrolyte", "sodium", "calcium", "magnesium", "lytes", "phosphate"],
          },
          { id: "gas", text: "Blood gas and lactate", match: ["blood gas", "abg", "vbg", "lactate"] },
          { id: "glucose", text: "Repeat glucose", match: ["glucose"] },
          { id: "organ", text: "Kidney and liver function", match: ["creatinine", "renal", "kidney", "liver", "ammonia"] },
          { id: "tox", text: "Toxicology guided by the history", match: ["toxicology", "drug level", "acetaminophen", "salicylate", "ethanol"] },
        ],
        explanation:
          "EEG separates post-anoxic myoclonus from seizures and helps judge the potential for recovery. The ERC advises CT of the brain when symptoms before the arrest suggest a neurological cause, and diffuse anoxic injury on CT is one of the later prognostic signs. Electrolytes, glucose and a blood gas look for metabolic causes of coma and myoclonus. Kidney and liver function affect how long sedatives persist and confound the examination.",
        keyFeature: { topic: "loc", n: 1 },
        source: "erc-post",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "What collateral history about the arrest would you seek?",
        required: 3,
        accept: [
          { id: "witness", text: "Whether the collapse was witnessed", match: ["witness", "witnessed", "seen"] },
          { id: "bystander", text: "Whether bystander CPR was done, and how soon", match: ["bystander", "cpr", "compression"] },
          {
            id: "time",
            text: "Total time to return of circulation",
            match: ["how long", "downtime", "time to rosc", "duration", "minutes", "low flow", "no flow", "time to return", "total time"],
          },
          { id: "rhythm", text: "First rhythm and number of shocks", match: ["rhythm", "shockable", "aed", "defibrillation", "defibrillated", "shock"] },
          {
            id: "symptoms",
            text: "Symptoms before the collapse, such as chest pain, headache, seizure or breathlessness",
            match: ["headache", "chest pain", "seizure", "short of breath", "breathless", "shortness of breath", "symptom", "before the collapse", "prodrome"],
          },
          { id: "baseline", text: "His baseline health and function", match: ["baseline", "function", "comorbid", "medical history", "health"] },
          {
            id: "goals",
            text: "Goals of care, advance directives and his substitute decision maker",
            match: ["goals of care", "advance directive", "wishes", "dnr", "substitute decision", "code status"],
          },
          { id: "drugs", text: "Drugs, alcohol or possible overdose", match: ["overdose", "drug", "medication", "substance", "alcohol"] },
        ],
        explanation:
          "Whether the arrest was witnessed, how soon bystander CPR began, the first rhythm and the time to return of circulation describe the no-flow and low-flow periods that drive anoxic injury. Symptoms before the collapse such as headache, seizures or breathlessness point to a neurological or respiratory cause and prompt a CT brain or CT pulmonary angiogram. His baseline function and his known wishes guide later decisions with his family. None of this answers the question of prognosis tonight.",
        keyFeature: { topic: "loc", n: 3 },
        source: "erc-post",
      },
    ],
    sources: [GCS_AID, ERC_POST],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  /* 06 ----------------------------------------------------------------- */
  {
    id: "loc-06",
    topic: "loc",
    title: "Confused after a cold",
    stem:
      "A 79-year-old woman is brought in by her daughter. Over 3 days she has become increasingly confused. She vomited twice this morning and is now very drowsy. The daughter says her mother lives alone, is fully independent and does the crossword every day. Her medications are hydrochlorothiazide and sertraline, which was started 3 weeks ago. She has been drinking lots of water for a cold. In the department she has a 1 minute generalized seizure. Afterward she opens her eyes to pressure, makes incomprehensible sounds and localizes. Capillary glucose is 6.0 mmol/L. Serum sodium is 114 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What treatment would you give for her sodium now, including the fluid, volume and time over which you give it?",
        required: 1,
        accept: [
          {
            id: "hts",
            text: "3% saline 150 mL IV over 20 minutes (or 100 mL over 10 minutes), repeated up to 2 more times until symptoms improve",
            match: ["3% 150", "3% 100", "hypertonic 150", "hypertonic 100", "3% 2 ml/kg", "hypertonic 2 ml/kg"],
          },
        ],
        unacceptable: [
          { text: "0.9% saline", match: ["0.9%", "normal saline"] },
          { text: "Fluid restriction alone", match: ["fluid restriction alone", "restriction only"] },
        ],
        explanation:
          "Seizure and a depressed level of consciousness mean severe symptomatic hyponatremia. Give 3% saline boluses to raise sodium by 4 to 6 mmol/L, which is usually enough to stop symptoms. Isotonic saline may not raise sodium and can worsen it in SIADH.",
        keyFeature: { topic: "loc", n: 2 },
        source: "hyponatremia-eu",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What is the maximum rise in serum sodium you would allow in the first 24 hours?",
        required: 1,
        accept: [{ id: "limit", text: "8 mmol/L (no more than 10 mmol/L) in 24 hours", match: ["8", "10", "8 mmol", "10 mmol", "no more than 8", "no more than 10", "not more than 8", "not more than 10", "not exceed 8", "not exceed 10"] }],
        unacceptable: [
          { text: "12 mmol/L", match: ["12"] },
          { text: "15 mmol/L or more", match: ["15", "20 mmol"], dangerous: true },
        ],
        explanation:
          "Correcting too fast risks osmotic demyelination. Most guidance sets a limit of 10 mmol/L in 24 hours. Many experts aim for 8 or less in high risk patients, such as those who are older or have hypokalemia, malnutrition or alcohol use.",
        keyFeature: { topic: "loc", n: 2 },
        source: "hyponatremia-us",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What details from the daughter's history establish that this is a change from baseline or point to the cause?",
        required: 3,
        accept: [
          { id: "baseline", text: "Normally independent and sharp, doing the crossword daily", match: ["baseline", "crossword", "independent", "lives alone", "usual"] },
          { id: "ssri", text: "Sertraline started 3 weeks ago (SIADH)", match: ["sertraline", "ssri", "siadh", "antidepressant"] },
          { id: "thiazide", text: "Hydrochlorothiazide use", match: ["thiazide", "hydrochlorothiazide", "hctz", "diuretic"] },
          { id: "water", text: "High free water intake", match: ["water", "fluid intake", "polydipsia", "drinking"] },
          { id: "vomiting", text: "Vomiting, a potent stimulus for ADH", match: ["vomiting", "vomited", "emesis"] },
          { id: "course", text: "Gradual worsening over 3 days", match: ["3 day", "three day", "gradual", "onset", "timeline"] },
        ],
        explanation:
          "Collateral shows a sharp decline from an independent baseline, which rules out chronic dementia as the explanation. A thiazide, a new SSRI, vomiting and high water intake together explain the hyponatremia. The patient herself could not give this history.",
        keyFeature: { topic: "loc", n: 3 },
        source: "hyponatremia-eu",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "After two 3% saline boluses her sodium is 119 mmol/L at 6 hours and she is alert. Her urine output is now 400 mL/h of dilute urine.",
        prompt: "Which of the following is the most appropriate management of her sodium now?",
        options: [
          "Continue a 3% saline infusion at 1 mL/kg/h",
          "Give desmopressin 1 to 2 mcg IV and consider D5W",
          "Give furosemide 40 mg IV",
          "Start tolvaptan 15 mg PO",
          "No change and recheck sodium in 12 hours",
        ],
        correct: 1,
        explanation:
          "She has risen 5 mmol/L in 6 hours and now has a water diuresis. Sodium may climb quickly past the safe limit. Desmopressin, with D5W if needed, controls the rise and prevents overcorrection. Sodium should be checked every 2 to 4 hours.",
        keyFeature: { topic: "loc", n: 2 },
        source: "hyponatremia-us",
      },
    ],
    sources: [HYPONA_EU, HYPONA_US],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 07 ----------------------------------------------------------------- */
  {
    id: "loc-07",
    topic: "loc",
    alsoTopics: ["multiple-trauma"],
    title: "Brought in by police after a bar fight",
    stem:
      "At 0200, police bring in a 23-year-old man. At about 2330 he was punched and fell outside a bar. Witnesses say he was \"out cold\" for about a minute, then got up, talked and walked to the police car. He smells of alcohol. On arrival his GCS is 13 (E3 V4 M6). He has a laceration over the left temple. Vital signs are normal. Serum ethanol is 18 mmol/L. A nurse suggests he be put in a quiet room to sleep it off.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Why should his decreased level of consciousness not be attributed to alcohol?",
        required: 2,
        accept: [
          {
            id: "level",
            text: "An ethanol level of 18 mmol/L (about 83 mg/dL) is too low to explain a GCS of 13 in most adults",
            match: ["level", "18", "83", "low", "ethanol level", "alcohol level", "not high enough"],
          },
          {
            id: "loc",
            text: "Head trauma with loss of consciousness",
            match: ["loss of consciousness", "knocked out", "out cold", "head injury", "head trauma", "trauma", "assault", "punched"],
          },
          { id: "temporal", text: "Temporal injury, where middle meningeal artery bleeding occurs", match: ["temporal", "temple", "middle meningeal", "laceration"] },
          { id: "lucid", text: "Brief lucid interval, a warning pattern for epidural hematoma", match: ["lucid", "epidural"] },
        ],
        explanation:
          "Blood ethanol around 18 mmol/L usually causes mild intoxication, not a GCS of 13. A blow to the temple with brief loss of consciousness and a lucid interval is the classic pattern for epidural hematoma. Alcohol is a diagnosis of exclusion.",
        keyFeature: { topic: "loc", n: 4 },
        source: "canadian-ct-head",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging decision for this patient?",
        options: [
          "CT head only if his GCS falls below 9",
          "Discharge to police with a head injury sheet",
          "Non-contrast CT head now",
          "Observe until sober, then reassess for CT",
          "Skull X-ray series before any CT",
        ],
        correct: 2,
        explanation:
          "He qualifies for the Canadian CT Head Rule because he had witnessed loss of consciousness and a GCS of 13 to 15. His GCS is still below 15 at 2.5 hours after injury, which is a high risk feature, so he needs CT. Intoxication makes the exam less reliable, which is a reason to image, not to wait. Skull films do not exclude intracranial bleeding.",
        keyFeature: { topic: "loc", n: 4 },
        source: "canadian-ct-head",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "While waiting for CT, he vomits twice. He now opens his eyes only to pressure, says inappropriate words and localizes to pain. His left pupil is 5 mm and sluggish.",
        prompt: "What is his level of consciousness on the Glasgow Coma Scale, with the total and the components?",
        required: 1,
        accept: [{ id: "gcs", text: "GCS 10 (E2 V3 M5)", match: gcs(2, 3, 5) }],
        explanation:
          "Eye opening to pressure is E2, inappropriate words are V3, and localizing is M5, for a total of 10. A fall of 2 or more points, new vomiting and a dilating pupil are signs of an expanding lesion. They need immediate action.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
      {
        id: "q4",
        kind: "short",
        update: "CT shows a 2.1 cm left temporal epidural hematoma with 6 mm of midline shift.",
        prompt: "What are the immediate management steps?",
        required: 3,
        accept: [
          { id: "nsx", text: "Emergent neurosurgery for evacuation", match: [...NEUROSURG, "evacuation", "craniotomy"] },
          { id: "airway", text: "Rapid sequence intubation", match: INTUBATE },
          { id: "osmo", text: "Mannitol or hypertonic saline", match: ["mannitol", "hypertonic", "3% saline", "hyperosmolar"] },
          { id: "hob", text: "Head of bed at 30 degrees", match: ["head of bed", "elevate", "30 degree", "hob"] },
          { id: "targets", text: "Avoid hypoxia and hypotension", match: ["hypoxia", "hypotension", "avoid hypoxia", "avoid hypotension", "sbp", "oxygen", "map"] },
          { id: "transfer", text: "Urgent transfer to a neurosurgical centre if not on site", match: ["transfer"] },
        ],
        unacceptable: [{ text: "Admit for observation only", match: ["observe only", "observation only", "serial gcs only"], dangerous: true }],
        explanation:
          "An epidural hematoma with shift and falling GCS needs urgent evacuation. Outcome depends on time to surgery. Secure the airway, give hyperosmolar therapy and prevent secondary injury while arranging the operating room or transfer.",
        keyFeature: { topic: "multiple-trauma", n: 5 },
        source: "btf-tbi",
      },
    ],
    sources: [CCHR, GCS40, BTF],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 08 ----------------------------------------------------------------- */
  {
    id: "loc-08",
    topic: "loc",
    alsoTopics: ["tox"],
    title: "Hard to rouse after a new blister pack",
    stem:
      "An 82-year-old woman is brought in by ambulance after her daughter found her hard to rouse in bed at 0900. They spoke by phone at 2000 last night, and she sounded normal. She lives alone. She has atrial fibrillation treated with apixaban 2.5 mg twice daily, hypertension and chronic kidney disease. Her pharmacy supplies her medications in weekly blister packs, and a new pack started yesterday. She has a 3 cm bruise over her right forehead. She opens her eyes to pressure, makes incomprehensible sounds and withdraws from pain. Her pupils are 2 mm and reactive. Capillary glucose is 6.4 mmol/L.",
    vitals: {
      temperature: "36.2°C",
      pulse: "62/minute",
      resp: "7/minute",
      bp: "136/78 mmHg",
      o2sat: "88% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What specific collateral history would you seek from her daughter?",
        required: 3,
        accept: [
          {
            id: "baseline",
            text: "Her usual memory, thinking and daily function",
            match: ["baseline", "usual", "normal self", "cognition", "memory", "function", "dementia"],
          },
          {
            id: "change",
            text: "Any new or changed prescription, including one added part way through a pack",
            match: ["new medication", "new prescription", "medication change", "change in medication", "new drug", "started", "changed"],
          },
          {
            id: "pack",
            text: "What is in the blister pack and whether it matches the labels",
            match: ["blister", "pack", "pill", "tablet", "dispensing", "pharmacy", "pharmacist"],
          },
          { id: "fall", text: "Any fall or head strike", match: ["fall", "fell", "head strike", "hit her head", "injury"] },
          {
            id: "symptoms",
            text: "Recent fever, headache, vomiting, weakness or urinary symptoms",
            match: ["fever", "headache", "vomit", "vomiting", "weakness", "speech", "urinary", "infection", "cough"],
          },
          {
            id: "other",
            text: "Alcohol, sleeping pills or other medications in the home",
            match: ["alcohol", "sleeping pill", "sedative", "opioid", "other medication", "over the counter"],
          },
        ],
        explanation:
          "Her daughter knows how she usually thinks and functions, so she can say how far this is from normal. A new medication in an older person who lives alone is a leading toxic cause, and ISMP Canada has found that changes made part way through a blister pack cycle contribute to dispensing errors. A fall matters because she takes apixaban and has a forehead bruise. Recent fever, headache or weakness points toward infection or stroke.",
        keyFeature: { topic: "loc", n: 3 },
        source: "ismp-pack",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Her daughter brings the blister pack. Hydroxyzine 25 mg at bedtime was added 2 days ago for itch. The pharmacist confirms that the slots labelled hydroxyzine were filled with hydromorphone 2 mg tablets, and last night's slot is empty.",
        prompt: "Which of the following investigations is most important once her breathing is supported?",
        options: [
          "CT head without contrast",
          "Electroencephalogram",
          "Serum ammonia level",
          "Serum hydromorphone level",
          "Urine drug screen",
        ],
        correct: 0,
        explanation:
          "Hydromorphone explains her small pupils and slow breathing, but she has a forehead bruise, takes apixaban and has a GCS of 8, so intracranial hemorrhage must be excluded. The Canadian CT Head Rule was built for patients with a GCS of 13 to 15 and counts age over 65 as high risk, so at GCS 8 and age 82 imaging is not in doubt. The drug is already identified, so a urine drug screen or a hydromorphone level would not change care. Ammonia and EEG are for coma that the history and CT do not explain.",
        keyFeature: { topic: "loc", n: 1 },
        source: "canadian-ct-head",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What immediate treatment would you give for her breathing, including the dose and route of any drug?",
        required: 2,
        accept: [
          {
            id: "bvm",
            text: "Bag valve mask ventilation",
            match: ["bag valve mask", "bag mask", "bvm", "assisted ventilation", "ventilate", "bag her"],
          },
          {
            id: "naloxone",
            text: "Naloxone 0.2 to 0.4 mg IV, repeated until her breathing is adequate",
            match: ["naloxone 0.04", "naloxone 0.05", "naloxone 0.1", "naloxone 0.2", "naloxone 0.4", "narcan 0.4", "naloxone 0.2 to 0.4"],
          },
          { id: "o2", text: "Oxygen", match: ["oxygen", "o2", "non rebreather"] },
        ],
        unacceptable: [{ text: "Flumazenil", match: ["flumazenil"] }],
        explanation:
          "A respiratory rate of 7 and an SpO2 of 88% need support now with bag valve mask ventilation and oxygen. Naloxone reverses opioid respiratory depression, and the AHA lists an adult dose range of 0.2 to 2 mg IV. She has taken hydromorphone for only 1 night and is not opioid dependent, so withdrawal is not a concern, but repeated modest doses titrated to her breathing are enough. Aim for adequate ventilation rather than full wakefulness. Flumazenil has a worse safety profile than naloxone and does not treat an opioid.",
        keyFeature: { topic: "loc", n: 2 },
        source: "tox-2023",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "After naloxone 0.4 mg IV she opens her eyes and her respiratory rate is 16. The pharmacist says the tablets are immediate-release hydromorphone. Her creatinine is 212 umol/L, close to her baseline.",
        prompt: "What is your plan for her ongoing care?",
        required: 2,
        accept: [
          {
            id: "admit",
            text: "Admit to a monitored bed rather than discharge after a short observation",
            match: ["admit", "admission", "monitored bed", "step down", "icu", "telemetry"],
          },
          {
            id: "monitor",
            text: "Continuous oximetry and capnography with frequent checks of her respiratory rate and level of consciousness",
            match: ["capnography", "end tidal", "etco2", "oximetry", "respiratory rate", "sedation score", "level of consciousness", "monitoring"],
          },
          {
            id: "naloxone",
            text: "Repeat small doses of naloxone, or an infusion, if sedation recurs",
            match: ["repeat naloxone", "naloxone if", "further naloxone", "naloxone infusion", "naloxone again"],
          },
          {
            id: "pack",
            text: "Remove the blister pack so no further doses are given",
            match: ["remove the blister", "hold the blister", "stop the blister", "remove the pack", "no further doses", "stop hydromorphone", "hold hydromorphone"],
          },
          {
            id: "report",
            text: "Disclose the error to her and her daughter, and report it to the pharmacy and through incident reporting",
            match: ["disclose", "disclosure", "report", "incident", "notify the pharmacy", "tell the pharmacy"],
          },
        ],
        unacceptable: [{ text: "Discharge home once she is awake", match: ["discharge home", "send home", "discharge her"] }],
        explanation:
          "Naloxone may wear off before the hydromorphone does, so respiratory depression can return after a good response. The AHA recommends observation in a healthcare setting until the risk of recurrent opioid toxicity is low and her level of consciousness and vital signs have normalized. Her age and kidney disease add uncertainty about how long the effect will last, so admission to a monitored bed is safer than a short stay in the department. Disclosing and reporting the dispensing error is also part of her care. If sedation recurs, repeated small doses or an infusion of naloxone can be used.",
        keyFeature: { topic: "tox", n: 4 },
        source: "tox-2023",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "What other causes of her decreased level of consciousness would you check for?",
        required: 2,
        accept: [
          { id: "ich", text: "Intracranial hemorrhage or stroke", match: ["hemorrhage", "bleed", "subdural", "head injury", "intracranial", "stroke"] },
          { id: "co2", text: "Hypercapnia from hypoventilation", match: ["hypercapnia", "carbon dioxide", "co2", "blood gas", "vbg"] },
          { id: "na", text: "Hyponatremia or other electrolyte disturbance", match: ["sodium", "hyponatremia", "electrolyte", "calcium"] },
          { id: "sepsis", text: "Sepsis, such as urinary infection or pneumonia", match: ["sepsis", "infection", "urinary", "pneumonia", "urosepsis"] },
          { id: "uremia", text: "Uremia from her kidney disease", match: ["uremia", "kidney", "renal", "creatinine"] },
          {
            id: "other",
            text: "Other substituted drugs in the same blister pack",
            match: ["other medication", "other drug", "co ingestion", "coingestion", "second drug", "rest of the pack", "other slot"],
          },
          { id: "temp", text: "Hypothermia", match: ["hypothermia", "temperature"] },
          { id: "glucose", text: "Recurrent hypoglycemia", match: ["hypoglycemia", "glucose"] },
        ],
        explanation:
          "A known toxin does not rule out a second cause in an 82-year-old woman who lay in bed overnight. Hypoventilation raises the CO2, which deepens drowsiness. Kidney disease can cause uremia, and hyponatremia and infection are common in older adults. Check every slot of the pack against its label, since an error made while the pack was being changed may involve more than one drug.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ismp-pack",
      },
    ],
    sources: [ISMP_PACK, CCHR, TOX_2023],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  /* 09 ----------------------------------------------------------------- */
  {
    id: "loc-09",
    topic: "loc",
    alsoTopics: ["cva", "airway"],
    title: "Headache for days, then hard to wake",
    stem:
      "A 29-year-old woman is brought in by her roommate at 1300. For 3 days she has had a worsening headache and has vomited several times, which she put down to migraine. This morning she was slow to answer questions, and at noon her roommate could barely wake her. She takes a combined oral contraceptive and smokes. She opens her eyes to pressure, says a few inappropriate words and localizes to pain. Her neck is supple and both plantar responses are extensor. Capillary glucose is 5.4 mmol/L, and a urine pregnancy test is negative.",
    vitals: {
      temperature: "37.3°C",
      pulse: "92/minute",
      resp: "16/minute",
      bp: "148/90 mmHg",
      o2sat: "97% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What serious causes of her decreased level of consciousness must you consider?",
        required: 3,
        accept: [
          {
            id: "cvt",
            text: "Cerebral venous thrombosis",
            match: ["venous thrombosis", "cvt", "cvst", "sinus thrombosis", "venous sinus", "venous infarct"],
          },
          { id: "sah", text: "Subarachnoid hemorrhage", match: ["subarachnoid", "sah", "aneurysm"] },
          { id: "ich", text: "Intracerebral hemorrhage", match: ["intracerebral", "hemorrhage", "bleed", "ich"] },
          { id: "cns", text: "Meningitis, encephalitis or brain abscess", match: ["meningitis", "encephalitis", "abscess"] },
          { id: "seizure", text: "Nonconvulsive seizures or a postictal state", match: ["seizure", "status", "nonconvulsive", "postictal", "post ictal"] },
          { id: "tox", text: "Toxic ingestion", match: ["overdose", "ingestion", "toxin", "toxic", "poisoning"] },
          { id: "pres", text: "Posterior reversible encephalopathy syndrome", match: ["pres", "posterior reversible", "hypertensive encephalopathy"] },
          { id: "arterial", text: "Arterial stroke, such as basilar occlusion", match: ["basilar", "ischemic stroke", "arterial stroke", "dissection"] },
          { id: "mass", text: "Mass lesion or hydrocephalus", match: ["tumour", "tumor", "mass", "hydrocephalus"] },
        ],
        explanation:
          "Days of worsening headache with vomiting, then drowsiness, in a young woman taking an estrogen-containing contraceptive should raise cerebral venous thrombosis. Its onset is usually more insidious than arterial stroke, and a depressed level of consciousness or encephalopathy is present in about a fifth of patients. Hemorrhage, meningitis or encephalitis, nonconvulsive seizures and toxins must be excluded in parallel. Bilateral extensor plantar responses point to a structural cause.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-cvt",
      },
      {
        id: "q2",
        kind: "menu",
        update:
          "Non-contrast CT shows low density in both thalami with a small area of hemorrhage in the left thalamus. The straight sinus looks dense.",
        prompt: "Which of the following investigations should be done now for this patient?",
        options: [
          "Carotid Doppler ultrasound",
          "CBC, INR and PTT",
          "Contrast-enhanced CT venography",
          "Hereditary thrombophilia panel",
          "Lumbar puncture",
          "Time-of-flight MR venography",
          "Transthoracic echocardiogram",
        ],
        select: 2,
        correct: [1, 2],
        explanation:
          "Changes in both thalami with a dense straight sinus suggest thrombosis of the deep venous system. Canadian guidance recommends contrast-enhanced CT or MR venography to confirm CVT, since non-contrast CT alone cannot rule it in or out. Time-of-flight MR venography is not recommended because flow artefacts cause false positives and it misses cortical vein thrombosis. A CBC, INR and PTT are part of the routine initial bloodwork before anticoagulation. Routine lumbar puncture is not recommended, and thrombophilia testing is not advised in the acute setting.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-cvt",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT venography shows thrombosis of the straight sinus and both internal cerebral veins.",
        prompt: "What risk factors for her thrombosis would you ask about or test for?",
        required: 3,
        accept: [
          { id: "ocp", text: "Estrogen-containing contraceptive use", match: ["contraceptive", "ocp", "birth control", "estrogen", "the pill", "hormone"] },
          { id: "preg", text: "Recent pregnancy, miscarriage or delivery", match: ["pregnancy", "pregnant", "postpartum", "puerperium", "miscarriage", "delivery"] },
          {
            id: "infection",
            text: "Head, neck or systemic infection, such as sinusitis, otitis or mastoiditis",
            match: ["infection", "sinusitis", "otitis", "mastoiditis", "meningitis", "covid"],
          },
          {
            id: "thrombophilia",
            text: "Inherited or acquired thrombophilia, including a family history of clots",
            match: ["thrombophilia", "factor v", "prothrombin gene", "family history", "antiphospholipid", "lupus anticoagulant", "clotting disorder"],
          },
          { id: "cancer", text: "Active cancer", match: ["cancer", "malignancy", "tumour", "tumor"] },
          { id: "vitt", text: "Recent adenoviral vector COVID-19 vaccine", match: ["vaccine", "vaccination", "vitt"] },
          {
            id: "systemic",
            text: "Inflammatory or other systemic disease, such as inflammatory bowel disease or nephrotic syndrome",
            match: ["inflammatory bowel", "crohn", "colitis", "lupus", "nephrotic", "autoimmune"],
          },
          { id: "anemia", text: "Anemia", match: ["anemia", "anaemia", "iron"] },
          { id: "dehydration", text: "Dehydration", match: ["dehydration", "volume depletion"] },
        ],
        explanation:
          "CVT usually has one or more transient or persistent risk factors. Transient factors include oral contraceptive use, pregnancy and the puerperium, and infection. Persistent factors include active cancer and inherited or acquired thrombophilia, which the ISTH suggests testing for later when the result would change the length of anticoagulation. Vaccine-induced thrombosis with thrombocytopenia after an adenoviral vector COVID-19 vaccine commonly presented as CVT, which is one reason the platelet count matters.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-cvt",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment plan given her thalamic hemorrhage?",
        options: [
          "Anticoagulate now with LMWH",
          "Delay anticoagulation for 7 days",
          "Give ASA until a repeat CT is stable",
          "Start a DOAC without a heparin lead-in",
          "Use systemic thrombolysis instead",
        ],
        correct: 0,
        explanation:
          "Canadian guidance recommends therapeutic LMWH or IV unfractionated heparin as soon as CVT is diagnosed, and intracranial blood is not a contraindication. The hemorrhage comes from the venous obstruction, which anticoagulation treats. LMWH is preferred over UFH for most patients. There is not enough evidence to start a DOAC without parenteral lead-in, and systemic thrombolysis is not recommended. Delaying anticoagulation or using ASA leaves the thrombosis untreated.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-cvt",
      },
      {
        id: "q5",
        kind: "short",
        update: "An hour later her GCS is 7 (E1 V2 M4). She has snoring respirations and has vomited once. Her SpO2 is 91% on room air.",
        prompt: "What features indicate that she needs intubation now?",
        required: 2,
        accept: [
          { id: "gcs", text: "A GCS of 7 and falling", match: ["gcs", "consciousness", "coma", "unresponsive", "e1"] },
          {
            id: "airway",
            text: "Snoring, a sign of partial airway obstruction",
            match: ["snoring", "obstruction", "obstructed", "airway protection", "protect her airway", "gag"],
          },
          { id: "vomit", text: "Vomiting with a risk of aspiration", match: ["vomit", "vomiting", "aspiration"] },
          { id: "hypox", text: "Low oxygen saturation", match: ["hypoxemia", "hypoxia", "saturation", "spo2", "desaturation"] },
          { id: "course", text: "Rapid neurological deterioration", match: ["deteriorating", "deterioration", "declining", "worsening"] },
          { id: "icp", text: "Possible rising intracranial pressure", match: ["intracranial pressure", "icp", "herniation", "edema"] },
        ],
        explanation:
          "Her GCS has fallen from 10 to 7, snoring signals partial obstruction, and she has vomited with an SpO2 of 91%, so she cannot protect her airway. Canadian CVT guidance puts assessment of airway, breathing and circulation first and calls for regular monitoring for raised intracranial pressure. A falling GCS in CVT may mean worsening edema or hemorrhage. Intubate before she deteriorates further, then repeat imaging and involve neurosurgery and critical care.",
        keyFeature: { topic: "airway", n: 2 },
        source: "csbpr-cvt",
      },
    ],
    sources: [CSBPR_CVT],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  /* 10 ----------------------------------------------------------------- */
  {
    id: "loc-10",
    topic: "loc",
    alsoTopics: ["tox"],
    title: "Sleepy boy after lunch",
    stem:
      "A 3-year-old boy is brought in by his mother at 1500. At 1300 she found him sitting on the floor beside his 9-year-old brother's weekly pill organizer, which was open. Over the last hour he has become increasingly sleepy. He was well this morning and has no medical history. He opens his eyes to his mother's voice, then drifts off, and he pushes her hand away when touched. His pupils are 3 mm and reactive. His capillary glucose is 5.1 mmol/L.",
    vitals: {
      temperature: "36.4°C",
      pulse: "68/minute",
      resp: "18/minute",
      bp: "74/40 mmHg",
      o2sat: "97% on room air",
      weight: "14 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What specific collateral history would you seek?",
        required: 3,
        accept: [
          {
            id: "meds",
            text: "The names and doses of his brother's medications",
            match: ["brother", "sibling", "medication", "prescription", "what was in", "adhd"],
          },
          {
            id: "form",
            text: "Whether they are extended-release products",
            match: ["extended release", "xr", "long acting", "formulation", "slow release", "sustained release"],
          },
          { id: "count", text: "How many tablets are missing, by pill count", match: ["count", "how many", "missing", "amount"] },
          { id: "time", text: "The earliest time he could have taken them", match: ["time", "when", "how long ago"] },
          {
            id: "other",
            text: "Other medications or substances in the home, such as the parents' drugs or cannabis edibles",
            match: ["other medication", "other drug", "parent", "grandparent", "cannabis", "edible", "alcohol", "household"],
          },
          { id: "fall", text: "Any fall or injury", match: ["fall", "injury", "trauma", "head"] },
          { id: "illness", text: "Recent fever or illness", match: ["fever", "illness", "sick"] },
        ],
        explanation:
          "His brother's medication list is the most useful history. Children with ADHD may take stimulants, which cause agitation, or alpha-2 agonists such as guanfacine or clonidine, which cause drowsiness, bradycardia and hypotension like his. Ask for the product and formulation, since extended-release guanfacine reaches its peak about 5 hours after ingestion. A pill count estimates the dose, and the time of access sets the observation window.",
        keyFeature: { topic: "loc", n: 3 },
        source: "guanfacine-toddler",
      },
      {
        id: "q2",
        kind: "short",
        update:
          "His father confirms by phone that two guanfacine XR 3 mg tablets are missing. His HR is now 62 and his BP 72/38 mmHg. He is breathing comfortably.",
        prompt: "What immediate treatments would you give?",
        required: 2,
        accept: [
          {
            id: "fluid",
            text: "IV crystalloid bolus of 10 to 20 mL/kg, 140 to 280 mL",
            match: ["bolus", "crystalloid", "normal saline", "saline", "ringer", "fluid"],
          },
          { id: "monitor", text: "Continuous cardiac and oxygen saturation monitoring", match: ["monitor", "monitoring", "telemetry", "oximetry"] },
          { id: "atropine", text: "Atropine 0.02 mg/kg IV if bradycardia causes poor perfusion", match: ["atropine"] },
          { id: "naloxone", text: "A trial of naloxone", match: ["naloxone"] },
          { id: "position", text: "Airway positioning and stimulation as needed", match: ["stimulation", "stimulate", "positioning", "jaw thrust", "recovery position"] },
          { id: "o2", text: "Oxygen if his saturation falls", match: ["oxygen", "o2"] },
        ],
        unacceptable: [{ text: "Activated charcoal while he is drowsy", match: ["charcoal"] }],
        explanation:
          "Bradycardia and hypotension from guanfacine usually respond to supportive care. In a large paediatric series, some children needed IV fluid, none needed vasopressors, and atropine was given only once, to a child who had also taken cannabis. An isotonic bolus of 10 to 20 mL/kg is 140 to 280 mL at 14 kg. Naloxone may be tried when an opioid cannot be excluded, although it did not help a reported toddler with guanfacine poisoning. Activated charcoal risks aspiration in a drowsy child.",
        keyFeature: { topic: "loc", n: 2 },
        source: "guanfacine-series",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What complications would you anticipate over the next 24 to 48 hours?",
        required: 2,
        accept: [
          {
            id: "delay",
            text: "Delayed worsening as the extended-release tablets are absorbed",
            match: ["delayed", "later", "peak", "worsen", "worsening", "extended release", "prolonged"],
          },
          { id: "htn", text: "Transient, sometimes severe, hypertension", match: ["hypertension", "high blood pressure", "hypertensive"] },
          { id: "ortho", text: "Prolonged orthostatic hypotension", match: ["orthostatic", "postural"] },
          { id: "brady", text: "Worsening bradycardia", match: ["bradycardia", "heart block", "slow heart"] },
          { id: "hypot", text: "Worsening hypotension", match: ["hypotension", "low blood pressure"] },
          { id: "resp", text: "Respiratory depression or apnea", match: ["apnea", "apnoea", "respiratory depression", "hypoventilation"] },
        ],
        explanation:
          "Extended-release guanfacine is absorbed slowly, so drowsiness, bradycardia and hypotension may worsen for hours after arrival. Its peripheral alpha effect can also cause transient hypertension, which has occasionally been severe. In a paediatric series, some children had orthostatic hypotension lasting a median of 36 hours, and this must be excluded before discharge. He should be admitted with cardiorespiratory monitoring.",
        keyFeature: { topic: "tox", n: 5 },
        source: "guanfacine-series",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What findings would make you look for a cause other than guanfacine?",
        required: 2,
        accept: [
          { id: "fever", text: "Fever, meningism or a rash", match: ["fever", "meningism", "neck stiffness", "stiff neck", "rash", "petechiae"] },
          {
            id: "focal",
            text: "Focal neurological signs or unequal pupils",
            match: ["focal", "unequal pupil", "asymmetric", "hemiparesis", "weakness", "anisocoria"],
          },
          {
            id: "injury",
            text: "Bruising or other signs of injury, including abusive head trauma",
            match: ["bruise", "bruising", "injury", "retinal", "fracture", "scalp", "abuse", "abusive", "trauma"],
          },
          { id: "seizure", text: "Seizures", match: ["seizure", "convulsion"] },
          {
            id: "signs",
            text: "Tachycardia or dilated pupils",
            match: ["tachycardia", "fast heart", "dilated pupil", "mydriasis", "large pupil"],
          },
          {
            id: "course",
            text: "No improvement as the drug should be clearing",
            match: ["not improve", "not improving", "no improvement", "fails to improve", "persist", "prolonged coma"],
          },
          { id: "glucose", text: "Low glucose", match: ["hypoglycemia", "low glucose", "low sugar"] },
        ],
        explanation:
          "Guanfacine explains drowsiness, bradycardia and hypotension, and extended-release poisoning usually settles with supportive care. Fever, meningism or a rash suggest CNS infection, and focal signs, seizures or unequal pupils suggest a structural lesion. Unexplained bruising, or a history that does not fit, should prompt assessment for abusive head trauma. Tachycardia or dilated pupils point to another toxin, such as the brother's stimulant, and a child who does not improve as expected needs a fresh look.",
        keyFeature: { topic: "loc", n: 1 },
        source: "guanfacine-toddler",
      },
    ],
    sources: [GUANFACINE_TODDLER, GUANFACINE_SERIES],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  /* 11 ----------------------------------------------------------------- */
  {
    id: "loc-11",
    topic: "loc",
    alsoTopics: ["infectious-diseases"],
    title: "Less responsive than usual",
    stem:
      "An 88-year-old woman arrives by ambulance from her long-term care home. The transfer note reads \"decreased LOC, ? UTI\". She has moderate dementia. She opens her eyes to voice, says a few inappropriate words and localizes to pain. Capillary glucose is 8.2 mmol/L.",
    vitals: {
      temperature: "38.4°C",
      pulse: "116/minute",
      resp: "26/minute",
      bp: "82/44 mmHg",
      o2sat: "91% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What items of collateral history would you obtain from the care home staff?",
        required: 3,
        accept: [
          { id: "baseline", text: "Her usual cognition, speech and mobility", match: ["baseline", "usual", "normal", "mobility", "cognition"] },
          { id: "timing", text: "When the change started and how it progressed", match: ["when", "onset", "time", "timeline", "last seen"] },
          { id: "meds", text: "Recent medication changes, including sedatives, opioids or antipsychotics", match: ["medication", "new drug", "opioid", "sedative", "antipsychotic", "mar"] },
          { id: "falls", text: "Recent falls", match: ["fall"] },
          { id: "goals", text: "Advance directive or goals of care", match: ["advance directive", "goals of care", "code status", "dnr", "level of care", "substitute decision"] },
          { id: "symptoms", text: "Infective symptoms such as cough, urinary change or an outbreak on the unit", match: ["cough", "urinary", "outbreak", "symptom", "diarrhea"] },
          { id: "intake", text: "Food and fluid intake", match: ["intake", "eating", "drinking"] },
        ],
        explanation:
          "In dementia, only people who know her can say what her usual state is. The timeline and medication changes narrow the cause. Goals of care guide how aggressive resuscitation should be and must be clarified early.",
        keyFeature: { topic: "loc", n: 3 },
        source: "gcs-40",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What immediate treatments would you give, with doses where relevant?",
        required: 3,
        accept: [
          {
            id: "fluid",
            text: "IV crystalloid bolus, up to 30 mL/kg, given in smaller boluses with reassessment",
            match: ["crystalloid", "ringer", "normal saline", "fluid bolus", "bolus", "30 ml/kg", "plasmalyte"],
          },
          {
            id: "abx",
            text: "Broad spectrum IV antibiotics within 1 hour",
            match: ["antibiotic", "piperacillin", "ceftriaxone", "meropenem", "cefepime"],
          },
          { id: "o2", text: "Oxygen to SpO2 of 92% or higher", match: ["oxygen", "o2"] },
          { id: "pressor", text: "Norepinephrine if hypotension persists, targeting MAP 65 mmHg or higher", match: ["norepinephrine", "vasopressor", "pressor", "noradrenaline"] },
          { id: "cultures", text: "Blood cultures before antibiotics if they cause no delay", match: ["culture"] },
        ],
        explanation:
          "Hypotension and altered mental status with fever are septic shock until proven otherwise. Give fluids in aliquots with reassessment, antibiotics within the hour, and norepinephrine for persistent hypotension. Correcting perfusion and oxygenation often improves her mental status.",
        keyFeature: { topic: "loc", n: 2 },
        source: "ssc-2021",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Urinalysis shows positive leukocyte esterase and negative nitrite. Chest X-ray shows right lower lobe consolidation.",
        prompt: "Which of the following conclusions is most appropriate given these results?",
        options: [
          "Both urine and chest need separate antibiotic courses",
          "Pneumonia is the likely source, despite the pyuria",
          "The chest X-ray is unreliable in this setting",
          "Urinary tract infection is confirmed as the source",
          "No infection is present and antibiotics can stop",
        ],
        correct: 1,
        explanation:
          "Asymptomatic bacteriuria and pyuria are very common in older adults in long-term care and should not anchor the diagnosis. A dipstick result is weak evidence for urinary sepsis. Anchoring on the transfer label risks missing the real source, here pneumonia.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ssc-2021",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "Two hours after fluids and antibiotics, she opens her eyes spontaneously, speaks in confused sentences and obeys commands.",
        prompt: "What was her GCS at arrival and what is it now, with components?",
        required: 2,
        accept: [
          { id: "arrival", text: "Arrival GCS 11 (E3 V3 M5)", match: gcs(3, 3, 5) },
          { id: "now", text: "Current GCS 14 (E4 V4 M6)", match: gcs(4, 4, 6) },
        ],
        explanation:
          "At arrival she scored E3, V3 and M5, a total of 11. Now she scores E4, V4 and M6, a total of 14. Documenting both with times shows the response to resuscitation. Confused speech may be her baseline in dementia, so compare with the care home's description.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
    ],
    sources: [GCS40, SSC],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 12 ----------------------------------------------------------------- */
  {
    id: "loc-12",
    topic: "loc",
    title: "A week of thirst",
    stem:
      "A 74-year-old man is brought in by his neighbour, who found him confused at home. The neighbour says he has been very thirsty and passing a lot of urine for a week. He has type 2 diabetes treated with metformin and empagliflozin. His mucous membranes are dry. His GCS is 11 (E3 V3 M5). Laboratory results: glucose 52 mmol/L, sodium 149 mmol/L, potassium 4.8 mmol/L, chloride 112 mmol/L, bicarbonate 22 mmol/L, urea 28 mmol/L, creatinine 180 umol/L, beta-hydroxybutyrate 0.8 mmol/L, venous pH 7.34.",
    vitals: {
      temperature: "37.4°C",
      pulse: "118/minute",
      resp: "20/minute",
      bp: "96/60 mmHg",
      o2sat: "96% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is his effective serum osmolality?",
        required: 1,
        accept: [{ id: "osm", text: "350 mmol/kg (2 x 149 + 52)", match: ["350"] }],
        unacceptable: [{ text: "378 (this includes urea, which does not cause water shifts)", match: ["378"] }],
        explanation:
          "Effective osmolality is 2 x Na + glucose = 298 + 52 = 350 mmol/kg. Urea crosses cell membranes and does not contribute to effective tonicity. Values above 320 with little ketosis and pH above 7.30 define a hyperosmolar hyperglycemic state.",
        keyFeature: { topic: "loc", n: 1 },
        source: "diabetes-canada-hyperglycemic",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "What are the initial treatment steps, with rates where relevant?",
        required: 3,
        accept: [
          {
            id: "fluid",
            text: "0.9% saline 1 to 2 L over the first hour, then guided by volume status",
            match: ["0.9%", "normal saline", "ns", "saline", "isotonic", "crystalloid", "ringer", "1 l", "2 l", "1 l/h", "2 l/h", "fluid"],
          },
          { id: "k", text: "Check and replace potassium before and during insulin", match: ["potassium", "k"] },
          { id: "insulin", text: "IV insulin infusion at about 0.05 to 0.1 units/kg/h once fluids are running and potassium is at least 3.3", match: ["insulin infusion", "insulin drip", "insulin 0.1", "insulin 0.05", "iv insulin"] },
          { id: "hold", text: "Hold metformin and empagliflozin", match: ["hold metformin", "stop metformin", "discontinue metformin", "hold empagliflozin", "stop empagliflozin", "discontinue empagliflozin", "hold sglt2", "stop sglt2", "discontinue sglt2", "hold oral"] },
          { id: "monitor", text: "Hourly glucose and frequent electrolytes and osmolality", match: ["hourly glucose", "monitor glucose", "serial electrolyte", "frequent", "hourly"] },
          { id: "vte", text: "VTE prophylaxis", match: ["prophylaxis", "heparin", "enoxaparin", "dalteparin"] },
        ],
        unacceptable: [{ text: "IV insulin bolus before fluids", match: ["insulin bolus", "bolus insulin"] }],
        explanation:
          "Profound dehydration is the main problem in HHS, so fluid comes first. Fluid alone often lowers glucose substantially. Insulin should start at a low rate once potassium is known to be safe. Holding the SGLT2 inhibitor and metformin avoids ketosis and lactic acidosis.",
        keyFeature: { topic: "loc", n: 2 },
        source: "diabetes-canada-hyperglycemic",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What is the main risk of lowering his osmolality too quickly?",
        required: 1,
        accept: [
          {
            id: "edema",
            text: "Cerebral edema, and possibly osmotic demyelination",
            match: ["cerebral edema", "cerebral oedema", "brain swelling", "brain edema", "osmotic demyelination", "odp"],
          },
        ],
        explanation:
          "Rapid falls in osmolality shift water into brain cells. Guidance favours a gradual fall in osmolality and glucose over 24 to 72 hours. Watch sodium closely, since it rises as glucose falls.",
        keyFeature: { topic: "loc", n: 2 },
        source: "diabetes-canada-hyperglycemic",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What precipitants of this presentation would you look for?",
        required: 2,
        accept: [
          { id: "infection", text: "Infection such as pneumonia or urinary infection", match: ["infection", "sepsis", "pneumonia", "urinary", "uti"] },
          { id: "mi", text: "Myocardial infarction", match: ["myocardial", "mi", "ischemia", "acs", "infarct"] },
          { id: "stroke", text: "Stroke", match: ["stroke"] },
          { id: "meds", text: "Medications such as steroids or thiazides, or missed diabetes medications", match: ["steroid", "thiazide", "adherence", "missed", "medication"] },
          { id: "pancreatitis", text: "Pancreatitis", match: ["pancreatitis"] },
          { id: "access", text: "Poor access to water", match: ["access to water", "water intake", "unable to drink"] },
        ],
        explanation:
          "HHS usually has a trigger. Infection is the most common, followed by vascular events and medications. The ECG, chest X-ray, urinalysis, cultures and lipase target these triggers.",
        keyFeature: { topic: "loc", n: 1 },
        source: "diabetes-canada-hyperglycemic",
      },
    ],
    sources: [DC_HHS],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 13 ----------------------------------------------------------------- */
  {
    id: "loc-13",
    topic: "loc",
    title: "Sleepy again, says his sister",
    stem:
      "A 58-year-old man with alcohol related cirrhosis is brought in by his sister. For 2 days he has been sleepy and muddled. She says he was admitted with the same thing last year. He fell in the bathroom last week. He opens his eyes to voice, is confused and obeys commands. He has asterixis. Laboratory results: INR 2.4, platelets 58 x 10^9/L, sodium 131 mmol/L, capillary glucose 3.2 mmol/L.",
    vitals: {
      temperature: "37.6°C",
      pulse: "98/minute",
      resp: "16/minute",
      bp: "108/64 mmHg",
      o2sat: "96% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Before attributing his state to hepatic encephalopathy, what other causes must you exclude?",
        required: 3,
        accept: [
          { id: "gi", text: "GI bleed", match: ["gi bleed", "gastrointestinal", "variceal", "melena", "upper gi"] },
          { id: "ich", text: "Subdural or other intracranial hemorrhage", match: ["subdural", "intracranial", "head injury", "ich", "brain bleed", "hemorrhage"] },
          { id: "hypo", text: "Hypoglycemia", match: ["hypoglycemia", "glucose"] },
          { id: "infection", text: "Spontaneous bacterial peritonitis or other infection", match: ["sbp", "peritonitis", "infection", "sepsis", "pneumonia"] },
          { id: "wernicke", text: "Wernicke encephalopathy", match: ["wernicke", "thiamine"] },
          { id: "etoh", text: "Alcohol intoxication or withdrawal", match: ["withdrawal", "intoxication", "alcohol"] },
          { id: "drugs", text: "Sedative, opioid or other drug effect", match: ["sedative", "benzodiazepine", "opioid", "overdose", "drug"] },
          { id: "na", text: "Hyponatremia", match: ["hyponatremia", "sodium"] },
          { id: "seizure", text: "Nonconvulsive seizures", match: ["seizure", "nonconvulsive"] },
        ],
        explanation:
          "Asterixis and a past episode make hepatic encephalopathy likely, but it is a diagnosis of exclusion. A recent fall, coagulopathy and low platelets make subdural hematoma a real risk. Hypoglycemia and Wernicke encephalopathy are easily treated and must not be missed.",
        keyFeature: { topic: "loc", n: 4 },
        source: "aasld-easl-he",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "His glucose is 3.2 mmol/L. What immediate treatments would you give?",
        required: 2,
        accept: [
          { id: "thiamine", text: "IV thiamine, such as 200 to 500 mg", match: ["thiamine"] },
          { id: "dextrose", text: "IV dextrose, such as 25 g of D50W", match: ["dextrose", "d50", "d50w", "d10", "d10w"] },
        ],
        explanation:
          "Low glucose is common in advanced cirrhosis and alcohol use. Give thiamine along with dextrose in malnourished patients, but never delay dextrose to wait for thiamine. Recheck glucose often, since glycogen stores are poor.",
        keyFeature: { topic: "loc", n: 2 },
        source: "aasld-easl-he",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations is most important for him now?",
        options: [
          "Abdominal ultrasound",
          "Electroencephalogram",
          "MRI of the brain",
          "Non-contrast CT head",
          "Serum ammonia level",
        ],
        correct: 3,
        explanation:
          "A fall, an INR of 2.4 and platelets of 58 put him at high risk of subdural hematoma, which can look exactly like encephalopathy. A high ammonia neither confirms hepatic encephalopathy nor excludes a bleed. Guidelines do not require ammonia to make the diagnosis, although a normal level should prompt a search for another cause.",
        keyFeature: { topic: "loc", n: 4 },
        source: "aasld-easl-he",
      },
      {
        id: "q4",
        kind: "short",
        update: "His CT head is normal.",
        prompt: "What precipitants of hepatic encephalopathy would you look for?",
        required: 2,
        accept: [
          { id: "gi", text: "GI bleeding", match: ["gi bleed", "gastrointestinal", "variceal", "melena", "bleeding", "bleed"] },
          { id: "infection", text: "Infection, including SBP by diagnostic paracentesis", match: ["sbp", "peritonitis", "infection", "paracentesis", "sepsis"] },
          { id: "constipation", text: "Constipation", match: ["constipation", "constipated"] },
          { id: "dehydration", text: "Dehydration or overdiuresis", match: ["dehydration", "diuretic", "overdiuresis", "hypovolemia", "volume"] },
          { id: "lytes", text: "Hypokalemia or hyponatremia", match: ["hypokalemia", "potassium", "hyponatremia", "electrolyte"] },
          { id: "sedatives", text: "Sedatives or opioids", match: ["sedative", "benzodiazepine", "opioid"] },
          { id: "adherence", text: "Missed lactulose doses", match: ["lactulose", "adherence", "missed"] },
          { id: "aki", text: "Acute kidney injury", match: ["kidney", "renal", "aki"] },
        ],
        explanation:
          "Most episodes of hepatic encephalopathy have a precipitant, and treating it is as important as lactulose. If examination finds ascites, a diagnostic paracentesis is indicated to look for SBP. A low grade fever raises concern for SBP here.",
        keyFeature: { topic: "loc", n: 1 },
        source: "aasld-easl-he",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "What is the first-line treatment for his hepatic encephalopathy, with the dose and goal?",
        required: 1,
        accept: [
          {
            id: "lactulose",
            text: "Lactulose 25 mL PO or by NG tube every 1 to 2 hours until 2 soft stools, then titrated to 2 to 3 soft stools a day",
            match: ["lactulose 20", "lactulose 25", "lactulose 30", "lactulose soft", "lactulose stool", "lactulose bowel movement", "lactulose bm", "lactulose bms"],
          },
        ],
        unacceptable: [{ text: "Protein restriction", match: ["protein restriction", "restrict protein", "low protein"] }],
        explanation:
          "Lactulose is first line and is titrated to 2 to 3 soft bowel movements a day. Rifaximin is added for recurrence. Protein restriction is no longer recommended, as it worsens malnutrition.",
        keyFeature: { topic: "loc", n: 2 },
        source: "aasld-easl-he",
      },
    ],
    sources: [HE],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 14 ----------------------------------------------------------------- */
  {
    id: "loc-14",
    topic: "loc",
    alsoTopics: ["airway"],
    title: "Collapsed in the garden",
    stem:
      "A 66-year-old woman with poorly controlled hypertension was gardening at 0900 when she had a sudden severe headache and vomited. Her husband found her on the ground 20 minutes later. EMS recorded a GCS of 13 (E3 V4 M6). She arrives at 0955. At 1010, she opens her eyes only to pressure, says inappropriate words and localizes with her left arm. Her right arm is weak.",
    vitals: {
      pulse: "62/minute",
      bp: "212/118 mmHg",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is her GCS at 1010, with the total and the components?",
        required: 1,
        accept: [{ id: "gcs", text: "GCS 10 (E2 V3 M5)", match: gcs(2, 3, 5) }],
        explanation:
          "Eye opening to pressure is E2, inappropriate words are V3, and localizing is M5, for a total of 10. Score the best motor response, here from the stronger left arm, and document the right arm weakness separately. A 3 point drop in about an hour signals an expanding lesion.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Other than the GCS total, how would you document her level of consciousness so that other clinicians can follow the trend?",
        required: 2,
        accept: [
          { id: "components", text: "Record each GCS component separately", match: ["component", "e v m", "eye verbal motor", "separately", "breakdown", "subscore"] },
          { id: "describe", text: "Describe the actual responses and the stimulus used in words", match: ["describe", "descriptive", "words", "stimulus", "plain language"] },
          { id: "pupils", text: "Pupil size and reactivity", match: ["pupil"] },
          { id: "motor", text: "Lateralizing motor findings on each side", match: ["lateralizing", "focal", "limb", "weakness", "each side", "side to side"] },
          { id: "time", text: "Time stamp each assessment and repeat at set intervals", match: ["time", "serial", "trend", "interval", "frequency", "hourly"] },
          { id: "confounders", text: "Note confounders such as sedation, intubation or eye swelling", match: ["sedation", "confounder", "intubated", "intubation", "untestable"] },
        ],
        explanation:
          "The total hides important detail, so communicate the components and describe what the patient did. Pupils and side to side motor signs pick up herniation that the total can miss. Timed, serial entries make the trend obvious to everyone.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging for her now?",
        options: [
          "Carotid Doppler ultrasound",
          "Electroencephalogram",
          "Lumbar puncture before imaging",
          "MRI of the brain",
          "Non-contrast CT head",
        ],
        correct: 4,
        explanation:
          "Sudden headache, vomiting, very high BP and a falling GCS suggest intracranial hemorrhage. Non-contrast CT is fast and highly sensitive for acute blood. CT angiography is often added to look for a vascular cause.",
        keyFeature: { topic: "loc", n: 1 },
        source: "aha-ich-2022",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "CT shows a 45 mL left basal ganglia hemorrhage with intraventricular extension. She takes no anticoagulant or antiplatelet. Her BP is 208/116 mmHg.",
        prompt: "What is your systolic BP target, and what IV agent would you use?",
        required: 2,
        accept: [
          { id: "target", text: "Systolic BP about 140 mmHg (range 130 to 150)", match: ["140", "130 150", "150"] },
          { id: "agent", text: "Labetalol 10 to 20 mg IV, or a nicardipine or clevidipine infusion", match: ["labetalol", "nicardipine", "clevidipine", "hydralazine", "enalaprilat"] },
        ],
        unacceptable: [
          { text: "Systolic BP below 130 mmHg, such as 120", match: ["sbp 120", "sbp 110", "below 120", "under 120", "less than 120", "target 120", "120 mmhg", "110 mmhg"] },
          { text: "Sublingual nifedipine", match: ["nifedipine"], dangerous: true },
        ],
        explanation:
          "In spontaneous ICH with SBP between 150 and 220, lowering toward about 140 mmHg is reasonable and safe. Lowering below 130 may cause harm. Use a titratable IV agent and avoid large, abrupt drops.",
        keyFeature: { topic: "loc", n: 2 },
        source: "aha-ich-2022",
      },
      {
        id: "q5",
        kind: "short",
        update: "At 1030 her GCS is 7 (E1 V2 M4). She has snoring respirations.",
        prompt: "What immediate actions would you take?",
        required: 2,
        accept: [
          { id: "airway", text: "Rapid sequence intubation", match: INTUBATE },
          { id: "nsx", text: "Urgent neurosurgical consultation for an external ventricular drain", match: [...NEUROSURG, "evd", "external ventricular", "drain"] },
          { id: "hob", text: "Elevate the head of bed to 30 degrees", match: ["head of bed", "elevate", "hob", "30 degree"] },
          { id: "osmo", text: "Hyperosmolar therapy for signs of herniation", match: ["mannitol", "hypertonic", "hyperosmolar"] },
          { id: "ct", text: "Repeat CT for expansion or hydrocephalus", match: REPEAT_CT },
        ],
        explanation:
          "A GCS of 7 with snoring respirations means she cannot protect her airway. Intraventricular blood can cause acute hydrocephalus, which needs a drain. Deterioration should prompt repeat imaging.",
        keyFeature: { topic: "airway", n: 2 },
        source: "aha-ich-2022",
      },
    ],
    sources: [GCS40, AHA_ICH],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 15 ----------------------------------------------------------------- */
  {
    id: "loc-15",
    topic: "loc",
    alsoTopics: ["environmental"],
    title: "Newspapers piling up",
    stem:
      "In January, a neighbour calls 911 after noticing newspapers piling up outside a 76-year-old woman's door. Paramedics find her on the floor of her cold apartment. In the emergency department her SpO2 does not read. She is obese with puffy eyes, dry skin, delayed reflexes and an old thyroidectomy scar. She opens her eyes to pressure, makes incomprehensible sounds and withdraws to pain (GCS 8). Capillary glucose is 3.4 mmol/L. Her pharmacy tells you her levothyroxine 125 mcg has not been refilled for 4 months.",
    vitals: {
      temperature: "31.4°C core",
      pulse: "42/minute",
      resp: "8/minute",
      bp: "84/50 mmHg",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What conditions may be contributing to her decreased level of consciousness?",
        required: 3,
        accept: [
          { id: "myx", text: "Myxedema coma (severe hypothyroidism)", match: ["myxedema", "hypothyroid", "hypothyroidism", "thyroid"] },
          { id: "hypothermia", text: "Hypothermia", match: ["hypothermia", "cold"] },
          { id: "hypo", text: "Hypoglycemia", match: ["hypoglycemia", "glucose"] },
          { id: "co2", text: "Hypercapnia from hypoventilation", match: ["hypercapnia", "co2", "hypoventilation", "respiratory acidosis", "carbon dioxide"] },
          { id: "adrenal", text: "Adrenal insufficiency", match: ["adrenal", "cortisol"] },
          { id: "na", text: "Hyponatremia", match: ["hyponatremia", "sodium"] },
          { id: "sepsis", text: "Sepsis, often without fever in myxedema", match: ["sepsis", "infection", "pneumonia"] },
          { id: "head", text: "Head injury from a fall", match: ["head injury", "subdural", "intracranial", "fall"] },
        ],
        explanation:
          "Myxedema coma is often triggered by cold, infection or stopping thyroid hormone. It causes hypothermia, hypoventilation, hyponatremia and hypoglycemia, each of which lowers consciousness. Adrenal insufficiency and occult infection often coexist, and a fall needs a CT head.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ata-hypothyroidism",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Apart from thyroid hormone and corticosteroids, what immediate treatments would you give?",
        required: 3,
        accept: [
          { id: "dextrose", text: "IV dextrose", match: ["dextrose", "d50", "d10", "glucose"] },
          {
            id: "rewarm",
            text: "Active external rewarming with forced warm air and warmed IV fluids",
            match: ["rewarming", "rewarm", "warm", "warmed", "forced air", "bair hugger", "warming"],
          },
          {
            id: "ventilation",
            text: "Support ventilation with bag-valve-mask, then intubation if needed",
            match: ["ventilation", "ventilate", "bvm", "bag valve", "intubate", "intubation", "airway", "niv"],
          },
          { id: "fluids", text: "Careful IV crystalloid boluses for hypotension", match: ["fluid", "saline", "crystalloid", "bolus"] },
          { id: "monitor", text: "Cardiac monitoring with gentle handling", match: ["monitor", "gentle handling", "gentle"] },
        ],
        explanation:
          "Correct hypoglycemia immediately and support her breathing, as hypoventilation is a common cause of death. Rewarm actively and give fluids carefully. Handle her gently, since a cold heart is prone to ventricular fibrillation.",
        keyFeature: { topic: "loc", n: 2 },
        source: "hypothermia-nejm",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following medication orders are most appropriate for her now?",
        options: [
          "Atropine 3 mg IV for bradycardia",
          "Dexamethasone 0.5 mg PO",
          "Dopamine infusion at 20 mcg/kg/min",
          "Hydrocortisone 100 mg IV",
          "Levothyroxine 2 000 mcg IV",
          "Levothyroxine 25 mcg PO daily",
          "Levothyroxine 200 to 400 mcg IV loading dose",
          "None",
        ],
        select: 2,
        correct: [6, 3],
        explanation:
          "Myxedema coma needs IV levothyroxine, commonly a 200 to 400 mcg load, with lower doses for frail patients or those with cardiac disease. Give stress dose hydrocortisone first, or at the same time, until adrenal insufficiency is excluded. Hypothermic bradycardia rarely responds to atropine.",
        keyFeature: { topic: "loc", n: 2 },
        source: "ata-hypothyroidism",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What sources of collateral information would you use, and what would each add in a patient who cannot give a history?",
        required: 2,
        accept: [
          { id: "pharmacy", text: "Pharmacy dispensing record, for medications and adherence", match: ["pharmacy", "pharmacist", "dispensing", "pip"] },
          { id: "neighbour", text: "Neighbour, for when she was last seen well", match: ["neighbour", "neighbor"] },
          { id: "ems", text: "Paramedics, for scene findings such as room temperature, pill bottles and signs of a fall", match: ["ems", "paramedic", "scene"] },
          { id: "records", text: "Family doctor or health records, for her baseline and past history", match: ["family doctor", "family physician", "primary care", "record", "chart", "emr"] },
          { id: "family", text: "Family or substitute decision maker, for baseline and goals of care", match: ["family", "daughter", "son", "relative", "next of kin", "substitute decision"] },
        ],
        explanation:
          "When the patient cannot speak, collateral must be actively sought. Here the pharmacy record revealed the cause, and the neighbour and paramedics establish her downtime and exposure. Family or a substitute decision maker can give her baseline and wishes.",
        keyFeature: { topic: "loc", n: 3 },
        source: "ata-hypothyroidism",
      },
      {
        id: "q5",
        kind: "single",
        prompt: "Which of the following is the best way to monitor her core temperature during rewarming?",
        options: [
          "Axillary digital thermometer",
          "Esophageal probe once her airway is secured",
          "Oral electronic thermometer",
          "Temporal artery infrared scanner",
          "Tympanic infrared thermometer",
        ],
        correct: 1,
        explanation:
          "Esophageal temperature best reflects cardiac temperature in a patient with a secured airway. A low reading rectal or bladder probe is an alternative, but lags during rewarming. Surface and tympanic readings are unreliable in the cold.",
        keyFeature: { topic: "environmental", n: 3 },
        source: "hypothermia-nejm",
      },
    ],
    sources: [ATA, HYPOTHERMIA],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
];
