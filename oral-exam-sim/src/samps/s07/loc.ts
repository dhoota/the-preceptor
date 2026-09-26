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

const WHO_LEAD: Source = {
  id: "who-lead",
  citation: "World Health Organization. WHO guideline for the clinical management of exposure to lead. Geneva. 2021.",
  url: "https://www.who.int/publications/i/item/9789240037045",
};
const OPC_ANTIDOTES: Source = {
  id: "opc-antidotes",
  citation: "Ontario Poison Centre and Manitoba Poison Centre. Guidelines for stocking emergency antidotes. May 2025.",
  url: "https://www.ontariopoisoncentre.ca/siteassets/pdfs/english/patient-care-resources-documents/opc_mpc-antidote-stocking-recommendations-2025-updated.pdf",
};
const BC_IFOSFAMIDE: Source = {
  id: "bccancer-ifosfamide",
  citation: "BC Cancer. BC Cancer Drug Manual. Ifosfamide monograph. Revised 1 June 2010.",
  url: "https://www.bccancer.bc.ca/drug-database-site/Drug%20Index/Ifosfamide_monograph_1June2010_formatted.pdf",
};
const IFOSFAMIDE_REVIEW: Source = {
  id: "ifosfamide-review",
  citation:
    "Torchia A, Vari S, Onesti CE, et al. A narrative review on diagnosis and treatment of ifosfamide-induced encephalopathy, the perspective of a EURACAN reference center for sarcomas. Front Pharmacol. 2025.",
  url: "https://doi.org/10.3389/fphar.2025.1512966",
};
const CSBPR_CANCER: Source = {
  id: "csbpr-cancer",
  citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Secondary prevention of stroke, section 11, cancer associated ischemic stroke. 7th edition, updated 2020.",
  url: "https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/cancer-associated-ischemic-stroke",
};
const LIORESAL_IT: Source = {
  id: "lioresal-intrathecal",
  citation: "Novartis Pharmaceuticals Canada Inc. Lioresal Intrathecal (baclofen injection) product monograph. Revised 2020.",
  url: "https://pdf.hres.ca/dpd_pm/00056262.PDF",
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
    alsoTopics: ["seizures", "tox"],
    title: "Seizures after two weeks of stomach aches",
    stem:
      "A 6-year-old boy is brought to the emergency department by ambulance after two generalized seizures at home, 10 minutes apart. Each lasted about 2 minutes and stopped without treatment, and he did not wake between them. For 2 weeks he has had a poor appetite, stomach aches, constipation and irritability. For 3 days he has vomited daily and been unusually sleepy and clumsy. Four months ago his family moved into a house built in 1912, and they have been scraping and sanding the old paint. He opens his eyes only to pressure, moans without words and withdraws both arms from pressure. His pupils are equal and reactive. His neck is supple. Capillary glucose is 5.9 mmol/L.",
    vitals: {
      temperature: "37.1°C",
      pulse: "118/minute",
      resp: "22/minute",
      bp: "126/82 mmHg",
      o2sat: "96% on room air",
      weight: "21 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "How would you document his level of consciousness now and over the next hours?",
        required: 2,
        accept: [
          { id: "gcs", text: "GCS 8 (E2 V2 M4)", match: [...gcs(2, 2, 4), "gcs 8", "gcs of 8", "glasgow coma scale 8"] },
          {
            id: "words",
            text: "A written description of each response, such as eyes opening to pressure, moaning without words and withdrawing from pressure",
            match: ["describe", "description", "moan", "moaning", "withdraw", "withdrawing", "eyes open to pressure", "document each response"],
          },
          {
            id: "trend",
            text: "Repeat and chart the GCS and pupils at set intervals to show the trend",
            match: ["repeat gcs", "serial gcs", "trend", "every 15", "every 30", "hourly", "neuro vital", "neurological check", "repeat neurological", "reassess"],
          },
        ],
        explanation:
          "Eyes opening only to pressure is E2, moaning without words is V2, and withdrawing both arms from pressure is M4, for a total of 8. The three components and a plain description of each response carry more information than the total, and they are what the next examiner compares against. A child with a falling level of consciousness can worsen quickly, so repeat and chart the score and pupils at set intervals to show the trend.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-aid",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "Which serious causes could explain both his abdominal symptoms and his decreased level of consciousness?",
        required: 3,
        accept: [
          { id: "lead", text: "Lead encephalopathy from old house paint", match: ["lead", "heavy metal", "paint"] },
          { id: "dka", text: "Diabetic ketoacidosis", match: ["dka", "diabetic ketoacidosis", "diabetes"] },
          { id: "calcium", text: "Hypercalcemia, for example from vitamin D excess", match: ["hypercalcemia", "high calcium", "vitamin d"] },
          { id: "intuss", text: "Intussusception", match: ["intussusception"] },
          { id: "hus", text: "Hemolytic uremic syndrome or other kidney failure with uremia", match: ["hemolytic uremic", "hus", "uremia", "kidney failure", "renal failure"] },
          { id: "sepsis", text: "Sepsis from an abdominal source such as perforated appendicitis", match: ["sepsis", "peritonitis", "appendicitis", "perforated", "perforation"] },
          { id: "abuse", text: "Abusive injury to the abdomen and head", match: ["abusive", "non accidental", "nonaccidental", "inflicted"] },
          { id: "tox", text: "Another toxic ingestion", match: ["ingestion", "overdose", "poisoning", "toxin"] },
          { id: "porph", text: "Acute porphyria", match: ["porphyria"] },
        ],
        explanation:
          "Two weeks of stomach aches, constipation, irritability and vomiting, then clumsiness, drowsiness and seizures, in a child living in an old house where paint is being sanded, fit lead encephalopathy. The WHO lists abdominal pain, vomiting and constipation among the effects of lead, and describes progression to cerebral edema, raised intracranial pressure, coma and death, which can follow within 48 hours of the first convulsions without intensive care. Diabetic ketoacidosis, hypercalcemia, intussusception, uremia and abdominal sepsis can also join abdominal symptoms with falling consciousness and are quickly tested for. Abusive injury and another ingestion must be kept in mind in any child with an unexplained course.",
        keyFeature: { topic: "loc", n: 1 },
        source: "who-lead",
      },
      {
        id: "q3",
        kind: "menu",
        update:
          "He has a third generalized seizure, which stops after midazolam 2 mg IV. CT head shows diffuse cerebral edema without a mass or bleeding. An abdominal radiograph shows small radiopaque flecks in the colon. His venous blood lead is 4.6 umol/L.",
        prompt: "Which of the following is most appropriate to treat the cause of his status epilepticus?",
        options: [
          "Lumbar puncture for CSF cell count and culture",
          "Oral succimer through a nasogastric tube",
          "Parenteral chelation arranged with the poison centre",
          "Pyridoxine 70 mg/kg IV",
          "Repeat the blood lead level before chelation",
          "Whole bowel irrigation through a nasogastric tube",
        ],
        select: 1,
        correct: [2],
        explanation:
          "Three seizures without recovery between them are status epilepticus, and a benzodiazepine has stopped the latest one, but the cause is lead encephalopathy with cerebral edema. The WHO strongly recommends urgent admission and parenteral chelation for a child with lead encephalopathy, and notes that parenteral treatment is safer than an oral agent when the airway is unprotected. Dimercaprol is no longer available in Canada, and the Ontario and Manitoba poison centres list DMPS through the Special Access Program for lead with encephalopathy, so the poison centre guides the agent and dose. Repeating the level only delays treatment. Lumbar puncture is hazardous with diffuse cerebral edema. Whole bowel irrigation may be considered later for paint flecks in the gut, but not in a child who is seizing and vomiting. Pyridoxine treats isoniazid seizures, and he has no isoniazid exposure.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "opc-antidotes",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What findings would make you look for a second cause of his decreased level of consciousness?",
        required: 3,
        accept: [
          {
            id: "fever",
            text: "Fever, meningism or a petechial rash",
            match: ["fever", "meningism", "neck stiffness", "stiff neck", "petechiae", "petechial", "rash", "kernig", "brudzinski"],
          },
          { id: "focal", text: "New focal signs or unequal pupils", match: ["focal", "unequal pupil", "anisocoria", "hemiparesis", "asymmetric", "asymmetry"] },
          {
            id: "injury",
            text: "Bruises, fractures or retinal hemorrhages suggesting abusive injury",
            match: ["bruise", "bruising", "fracture", "retinal", "abuse", "abusive"],
          },
          { id: "glucose", text: "Abnormal glucose or ketones", match: ["hypoglycemia", "hyperglycemia", "ketone", "ketosis", "low glucose", "high glucose"] },
          { id: "sodium", text: "Low sodium", match: ["hyponatremia", "low sodium"] },
          {
            id: "course",
            text: "Failure to improve as expected with treatment",
            match: ["failure to improve", "not improve", "not improving", "no improvement", "fails to improve", "worsening", "deteriorate", "deterioration", "deteriorating"],
          },
          { id: "history", text: "A history that changes or does not fit the findings", match: ["inconsistent history", "history does not fit", "changing history", "changing story"] },
        ],
        explanation:
          "His lead level, the paint flecks in his bowel and the cerebral edema make lead the leading cause, but a second process can coexist. Fever, meningism or a rash call for a search for CNS infection, and new focal signs or unequal pupils suggest a structural lesion or rising pressure. Unexplained bruises, fractures or retinal hemorrhages call for assessment for abusive head trauma. Abnormal glucose or sodium points to a metabolic cause, and a child who does not improve as expected needs a fresh look.",
        keyFeature: { topic: "loc", n: 1 },
        source: "who-lead",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "What collateral history about his lead exposure would you seek from his parents?",
        required: 3,
        accept: [
          {
            id: "paint",
            text: "How the old paint is being removed, and whether he stays in the house during the work",
            match: ["sanding", "scraping", "renovation", "renovating", "dust", "paint removal", "heat gun", "stay in the house", "during the work"],
          },
          {
            id: "pica",
            text: "Whether he eats paint chips, soil or other non-food items",
            match: ["pica", "eat paint", "eating paint", "paint chip", "chew", "mouthing", "soil", "dirt", "non food"],
          },
          {
            id: "others",
            text: "Whether siblings or other household members are unwell or have been tested",
            match: ["sibling", "brother", "sister", "other children", "household member", "family member", "others tested"],
          },
          {
            id: "remedies",
            text: "Traditional remedies, cosmetics such as kohl, imported spices or glazed pottery",
            match: ["remedy", "remedies", "ayurvedic", "traditional medicine", "kohl", "surma", "cosmetic", "spice", "pottery", "ceramic", "cookware"],
          },
          {
            id: "jobs",
            text: "Parental jobs or hobbies involving lead, such as construction, batteries, stained glass or ammunition",
            match: ["occupation", "job", "work", "hobby", "hobbies", "construction", "battery", "stained glass", "firing range", "ammunition", "fishing weight", "sinker"],
          },
          {
            id: "objects",
            text: "Swallowed metal objects such as jewellery, curtain weights or fishing sinkers",
            match: ["jewellery", "jewelry", "charm", "curtain weight", "swallowed object", "foreign body", "swallowed metal"],
          },
          { id: "baseline", text: "His usual development, behaviour and school performance", match: ["development", "developmental", "school", "behaviour", "behavior", "baseline"] },
          { id: "prior", text: "Previous blood lead tests or known iron deficiency", match: ["previous blood lead", "prior lead", "iron", "anemia", "anaemia", "previous test"] },
        ],
        explanation:
          "Scraping and sanding old paint releases lead dust, and the WHO notes that young children take it in through hand to mouth activity and that children with pica may eat paint flakes or soil. Other children in the home share the exposure and need testing. Traditional medicines, cosmetics such as kohl or surma, adulterated spices, lead-glazed pottery and lead brought home from a parent's job or hobby are other sources to close off. His usual development and behaviour set the baseline against which recovery is judged.",
        keyFeature: { topic: "loc", n: 3 },
        source: "who-lead",
      },
    ],
    sources: [GCS_AID, WHO_LEAD, OPC_ANTIDOTES],
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
    title: "Sleepy on the second day of treatment",
    stem:
      "A 44-year-old woman is brought to the emergency department by her partner at 2030 because she has become sleepy and muddled since mid afternoon. She has a uterine leiomyosarcoma with lung metastases. Yesterday at 1000 her oncology day unit started her second cycle of chemotherapy, which runs through a portable pump that she wears home. The pump is still running. She opens her eyes to voice, uses wrong words and obeys commands slowly. She has a flapping tremor of both hands. Her pupils are 4 mm and reactive, her neck is supple and she moves all limbs equally. Capillary glucose is 6.4 mmol/L.",
    vitals: {
      temperature: "37.2°C",
      pulse: "96/minute",
      resp: "16/minute",
      bp: "118/72 mmHg",
      o2sat: "97% on room air",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What collateral history would you seek from her partner and her oncology team?",
        required: 3,
        accept: [
          {
            id: "baseline",
            text: "Her usual thinking and function, and when this change began",
            match: ["baseline", "usual", "normal self", "when it started", "when did", "onset", "how different"],
          },
          {
            id: "pump",
            text: "Which drugs are in the pump, at what dose, and when the infusion started",
            match: ["which drug", "what drug", "chemotherapy", "regimen", "in the pump", "pump contain", "infusion", "ifosfamide", "dose"],
          },
          {
            id: "prior",
            text: "Whether she was confused or had other reactions during the first cycle",
            match: ["first cycle", "previous cycle", "last cycle", "prior cycle", "previous reaction", "happened before"],
          },
          {
            id: "meds",
            text: "Other new medications, such as antiemetics, aprepitant, opioids or sedatives",
            match: ["antiemetic", "aprepitant", "opioid", "sedative", "lorazepam", "new medication", "other medication", "ondansetron", "prochlorperazine"],
          },
          { id: "fever", text: "Fever, chills or other signs of infection", match: ["fever", "chill", "rigor", "infection", "neutropenia", "neutropenic"] },
          { id: "intake", text: "Vomiting, oral intake and urine output", match: ["vomit", "vomiting", "intake", "drinking", "urine output", "urinating", "dehydration"] },
          {
            id: "neuro",
            text: "Headache, seizures, falls or known brain metastases",
            match: ["headache", "seizure", "fall", "brain metastases", "brain metastasis", "brain met"],
          },
          { id: "labs", text: "Her recent kidney function and albumin", match: ["kidney", "renal", "creatinine", "albumin", "liver"] },
        ],
        explanation:
          "Which drugs are in the pump and when the infusion began are the key facts, because ifosfamide encephalopathy usually starts within 48 hours of the start of an infusion, and her partner may not know the drug names. Confusion in an earlier cycle, low albumin and impaired kidney function raise the risk, and drugs such as aprepitant that alter ifosfamide metabolism may add to it. Her partner can say how far she is from her usual self and when the change began. Fever, vomiting, headache, seizures or known brain metastases point toward other causes that must be excluded.",
        keyFeature: { topic: "loc", n: 3 },
        source: "ifosfamide-review",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Her oncologist confirms that the pump holds ifosfamide with mesna. Sodium is 134 mmol/L, potassium 3.2 mmol/L, creatinine 112 umol/L (68 umol/L last month), albumin 28 g/L, WBC 5.9 x 10^9/L and platelets 186 x 10^9/L.",
        prompt: "Which of the following investigations is most important before attributing her encephalopathy to ifosfamide?",
        options: ["CT head without contrast", "Lumbar puncture", "Serum ammonia level", "Serum ifosfamide level", "Urine drug screen"],
        correct: 0,
        explanation:
          "Ifosfamide encephalopathy is a clinical diagnosis, so a structural cause of new drowsiness and wrong words must be excluded before the drug is blamed. She has metastatic sarcoma, and a CT head looks for brain metastases, hemorrhage or edema. A serum ifosfamide level is not a routine emergency test and would not exclude a structural lesion. She has no fever or meningism, so lumbar puncture is not the first step. An ammonia level or a urine drug screen would not rule out the lesion that matters most tonight.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ifosfamide-review",
      },
      {
        id: "q3",
        kind: "short",
        update: "CT head is normal.",
        prompt: "What immediate steps would you take to reverse her decreased level of consciousness?",
        required: 2,
        accept: [
          {
            id: "stop",
            text: "Stop the ifosfamide infusion now",
            match: ["stop ifosfamide", "stop the pump", "stop the infusion", "stop chemotherapy", "disconnect", "clamp", "turn off the pump", "pause the pump", "discontinue ifosfamide", "discontinue the infusion"],
          },
          { id: "fluid", text: "IV hydration", match: ["iv fluid", "hydration", "hydrate", "normal saline", "crystalloid", "ringer"] },
          {
            id: "lytes",
            text: "Replace potassium and correct other electrolytes",
            match: ["potassium", "electrolyte", "hypokalemia", "phosphate", "magnesium", "bicarbonate"],
          },
          { id: "glucose", text: "Recheck glucose and treat hypoglycemia", match: ["glucose", "dextrose", "hypoglycemia"] },
          { id: "airway", text: "Position her and monitor her airway and breathing, with oxygen if needed", match: ["airway", "recovery position", "oxygen", "oximetry", "monitor breathing"] },
          {
            id: "sedatives",
            text: "Hold sedating antiemetics, opioids and benzodiazepines",
            match: ["hold sedative", "avoid sedative", "no sedative", "hold opioid", "avoid opioid", "hold antiemetic", "avoid benzodiazepine", "hold benzodiazepine"],
          },
        ],
        unacceptable: [
          { text: "Continue the infusion at a lower rate", match: ["continue the infusion", "continue ifosfamide", "slow the infusion", "reduce the rate", "lower rate"] },
        ],
        explanation:
          "Stopping the infusion removes the cause, and the BC Cancer monograph advises discontinuing ifosfamide and giving supportive care when neurotoxicity occurs. Most cases reverse after the infusion is interrupted and IV hydration is given. Her potassium of 3.2 mmol/L fits the kidney tubular injury that ifosfamide can cause and should be replaced. Recheck glucose, keep her airway safe and avoid sedating antiemetics or opioids that deepen drowsiness. Slowing the pump rather than stopping it keeps delivering the drug.",
        keyFeature: { topic: "loc", n: 2 },
        source: "bccancer-ifosfamide",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What treatments directed at ifosfamide encephalopathy would you consider with her oncologist?",
        required: 2,
        accept: [
          { id: "mb", text: "Methylene blue 50 mg IV, repeated up to 6 times a day", match: ["methylene blue", "methylthioninium"] },
          { id: "thiamine", text: "Thiamine 100 mg IV every 4 hours", match: ["thiamine", "vitamin b1"] },
          { id: "hd", text: "Hemodialysis if severe or not responding", match: ["dialysis", "hemodialysis", "crrt", "renal replacement"] },
        ],
        explanation:
          "Methylene blue is the most used treatment, given IV at 50 mg up to 6 times a day, and is thought to act as an electron acceptor that counters the toxic metabolism of ifosfamide. Thiamine 100 mg IV every 4 hours until symptoms resolve is an alternative or an addition. Evidence for both comes from case reports and small series, so the decision is shared with her oncologist. Hemodialysis lowers ifosfamide concentrations and has been used for severe encephalopathy that does not respond to these drugs, especially with kidney injury.",
        keyFeature: { topic: "tox", n: 4 },
        source: "ifosfamide-review",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "What other causes of her decreased level of consciousness would you consider?",
        required: 3,
        accept: [
          {
            id: "mets",
            text: "Brain or leptomeningeal metastases, or hemorrhage",
            match: ["metastases", "metastasis", "metastatic", "leptomeningeal", "hemorrhage", "bleed", "stroke", "tumour", "tumor"],
          },
          { id: "ncse", text: "Nonconvulsive seizures", match: ["seizure", "nonconvulsive", "non convulsive", "status epilepticus", "postictal"] },
          { id: "sepsis", text: "Sepsis, febrile neutropenia or CNS infection", match: ["sepsis", "infection", "neutropenia", "meningitis", "encephalitis"] },
          { id: "na", text: "Hyponatremia or other electrolyte disturbance", match: ["hyponatremia", "sodium", "electrolyte", "hypercalcemia", "calcium"] },
          { id: "drugs", text: "Other sedating drugs such as opioids, benzodiazepines or antiemetics", match: ["opioid", "benzodiazepine", "sedative", "antiemetic", "drug effect"] },
          { id: "glucose", text: "Hypoglycemia", match: ["hypoglycemia", "low glucose", "low sugar"] },
          { id: "organ", text: "Uremia or hepatic encephalopathy", match: ["uremia", "uremic", "hepatic", "liver failure", "renal failure", "kidney failure"] },
          { id: "wernicke", text: "Wernicke encephalopathy", match: ["wernicke", "thiamine deficiency"] },
          { id: "resp", text: "Hypoxia or hypercapnia, such as from pulmonary embolism", match: ["hypoxia", "hypoxemia", "hypercapnia", "pulmonary embolism"] },
        ],
        explanation:
          "Ifosfamide encephalopathy is a diagnosis of exclusion, and a patient with metastatic sarcoma on chemotherapy has many competing causes. Her CT is normal, but nonconvulsive seizures occur with ifosfamide and are found only by EEG, and leptomeningeal disease may need MRI if she does not improve. Sepsis with neutropenia, hyponatremia, hypoglycemia, other sedating drugs, organ failure, Wernicke encephalopathy and hypoxia from pulmonary embolism are common in patients with cancer and are treated differently.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ifosfamide-review",
      },
    ],
    sources: [BC_IFOSFAMIDE, IFOSFAMIDE_REVIEW],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  /* 09 ----------------------------------------------------------------- */
  {
    id: "loc-09",
    topic: "loc",
    alsoTopics: ["cva", "airway"],
    title: "Not making sense after breakfast",
    stem:
      "A 63-year-old woman is brought to the emergency department by her husband at 1010. She was well at breakfast at 0815. At 0845 he found her drowsy on the couch, not making sense and bumping into the door frame on her right. She has lung adenocarcinoma with bone metastases and had chemotherapy 10 days ago. Five weeks ago she had a small right cerebellar stroke with no lasting deficit, and she takes ASA 81 mg daily. She opens her eyes to voice, answers with wrong and made-up words and obeys simple commands. She does not blink to threat from her right side. Her left arm drifts down. Capillary glucose is 6.8 mmol/L.",
    vitals: {
      temperature: "36.9°C",
      pulse: "88/minute regular",
      resp: "18/minute",
      bp: "168/92 mmHg",
      o2sat: "96% on room air",
      weight: "60 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What features suggest that stroke is the cause of her altered level of consciousness?",
        required: 3,
        accept: [
          {
            id: "onset",
            text: "Sudden onset within half an hour of being well",
            match: ["sudden", "abrupt", "rapid onset", "clear onset", "time of onset", "last known well", "within 30 minutes"],
          },
          {
            id: "aphasia",
            text: "Wrong and made-up words, which are aphasia rather than confusion",
            match: ["aphasia", "aphasic", "paraphasia", "paraphasic", "made up words", "wrong words", "word finding", "language"],
          },
          {
            id: "field",
            text: "No blink to threat on the right, a right visual field defect",
            match: ["visual field", "hemianopia", "hemianopsia", "no blink to threat", "blink to threat", "field cut", "field defect", "bumping", "door frame"],
          },
          { id: "drift", text: "Left arm drift", match: ["arm drift", "pronator drift", "left arm", "arm weakness", "focal weakness", "drift"] },
          {
            id: "multi",
            text: "Signs from both hemispheres, suggesting emboli to more than one territory",
            match: ["both hemispheres", "bilateral hemispheres", "more than one territory", "multiple territories", "two territories", "both sides of the brain", "multifocal"],
          },
          {
            id: "risk",
            text: "Active cancer and a recent stroke",
            match: ["cancer", "malignancy", "adenocarcinoma", "previous stroke", "prior stroke", "recent stroke", "hypercoagulable"],
          },
          { id: "glucose", text: "A normal glucose, which excludes hypoglycemia as a mimic", match: ["normal glucose", "glucose normal", "not hypoglycemic", "no hypoglycemia"] },
        ],
        explanation:
          "Her symptoms began suddenly between 0815 and 0845, which fits a vascular event rather than a gradual metabolic or drug cause. Wrong and made-up words are aphasia, which is easily mistaken for confusion or drowsiness. Missing the blink to threat on the right points to the left hemisphere, while the left arm drift points to the right hemisphere, so emboli have reached more than one territory. Active cancer and a recent stroke raise the risk, and a normal glucose excludes the commonest mimic.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "menu",
        update: "Blood work from her oncology clinic yesterday shows platelets of 72 x 10^9/L and an INR of 1.1. She took her ASA this morning.",
        prompt: "Which of the following findings are relative exclusions to IV thrombolysis for her?",
        options: [
          "Active lung adenocarcinoma",
          "Age of 63 years",
          "ASA 81 mg taken this morning",
          "Blood pressure of 168/92 mmHg",
          "Chemotherapy given 10 days ago",
          "Glucose of 6.8 mmol/L",
          "Ischemic stroke 5 weeks ago",
          "Platelet count of 72 x 10^9/L",
        ],
        select: 2,
        correct: [6, 7],
        explanation:
          "The Canadian best practice recommendations list stroke in the preceding 3 months and a platelet count below 100 x 10^9/L as relative exclusions, which call for clinical judgement and discussion with a stroke specialist. Her stroke 5 weeks ago and her platelets of 72 x 10^9/L after chemotherapy both apply. Active cancer, recent chemotherapy, her age and daily ASA are not on the exclusion list. Her BP of 168/92 mmHg is already below the 180/105 mmHg that must be reached and held, and her glucose lies within the accepted range of 2.7 to 22.2 mmol/L.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "Non-contrast CT shows no hemorrhage and an old right cerebellar infarct. CT angiography shows no large vessel occlusion and no carotid stenosis. The stroke neurologist advises against thrombolysis. Her ECG shows sinus rhythm.",
        prompt: "What mechanisms linked to her cancer could explain her strokes?",
        required: 2,
        accept: [
          {
            id: "nbte",
            text: "Nonbacterial thrombotic (marantic) endocarditis",
            match: ["nonbacterial", "non bacterial", "marantic", "nbte", "thrombotic endocarditis", "sterile vegetation"],
          },
          {
            id: "hyper",
            text: "Cancer-related hypercoagulability, including disseminated intravascular coagulation",
            match: ["hypercoagulable", "hypercoagulability", "trousseau", "dic", "disseminated intravascular", "prothrombotic", "clotting tendency"],
          },
          {
            id: "paradox",
            text: "Paradoxical embolism from a venous thrombosis through a patent foramen ovale",
            match: ["paradoxical", "pfo", "patent foramen", "foramen ovale", "dvt", "venous thrombosis", "deep vein"],
          },
          {
            id: "compress",
            text: "Tumour compressing or invading an artery, or tumour embolism",
            match: ["compression", "compressing", "invasion", "invading", "tumour embolism", "tumor embolism", "encasement"],
          },
          {
            id: "treatment",
            text: "Effects of chemotherapy or radiation on the blood vessels",
            match: ["chemotherapy", "radiation", "treatment related", "cisplatin", "bevacizumab", "vasculopathy"],
          },
          { id: "infective", text: "Infective endocarditis during chemotherapy", match: ["infective endocarditis", "bacterial endocarditis", "septic embolism", "septic emboli", "endocarditis"] },
        ],
        explanation:
          "Canadian recommendations name nonbacterial thrombotic endocarditis, hypercoagulability, paradoxical embolism from venous thrombosis, tumour compression of vessels and effects of cancer treatment as stroke mechanisms in active malignancy. They also advise the standard work-up of vascular imaging and cardiac rhythm monitoring. Strokes in several territories, including one 5 weeks ago, in a patient with adenocarcinoma, sinus rhythm and no arterial stenosis point to an embolic source in the blood or on the heart valves. Infective endocarditis must also be considered in any patient with emboli after chemotherapy.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-cancer",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Over the next day, MRI shows small acute infarcts in the left occipital lobe, right frontal lobe and left cerebellum. Her D-dimer is markedly raised. Echocardiography shows a small mitral valve vegetation. She has no fever and blood cultures show no growth.",
        prompt: "Which of the following is the most likely mechanism of her strokes?",
        options: [
          "Cardioembolism from atrial fibrillation",
          "Infective endocarditis of the mitral valve",
          "Large artery atherosclerosis",
          "Nonbacterial thrombotic endocarditis",
          "Small vessel lacunar disease",
        ],
        correct: 3,
        explanation:
          "Acute infarcts in three territories, a markedly raised D-dimer and a sterile mitral vegetation in a patient with active adenocarcinoma fit nonbacterial thrombotic endocarditis, one of the cancer-related mechanisms in the Canadian recommendations. Infective endocarditis is less likely without fever and with blood cultures that show no growth, although cultures are repeated before it is set aside. Her rhythm is sinus, and atrial fibrillation is sought with prolonged monitoring rather than assumed. CT angiography showed no stenosis, which argues against large artery disease, and infarcts in several cortical and cerebellar territories do not fit a lacunar stroke.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-cancer",
      },
      {
        id: "q5",
        kind: "short",
        update: "Later that day her GCS falls to 8 (E2 V2 M4). She has gurgling respirations and has vomited. Her SpO2 is 90% on room air.",
        prompt: "What features show that she needs intubation now?",
        required: 2,
        accept: [
          { id: "gcs", text: "A GCS of 8 and falling", match: ["gcs", "coma", "unresponsive", "level of consciousness", "e2"] },
          {
            id: "secretions",
            text: "Gurgling, a sign that she cannot clear secretions",
            match: ["gurgling", "secretion", "pooling", "cannot clear", "airway protection", "protect her airway", "gag"],
          },
          { id: "vomit", text: "Vomiting with a risk of aspiration", match: ["vomit", "vomiting", "aspiration"] },
          { id: "hypox", text: "An SpO2 of 90% on room air", match: ["hypoxemia", "hypoxia", "saturation", "spo2", "desaturation", "90%"] },
          { id: "decline", text: "Rapid neurological decline that is likely to continue", match: ["deteriorating", "deterioration", "declining", "decline", "worsening", "falling gcs"] },
        ],
        explanation:
          "Her GCS has fallen from 12 to 8, gurgling shows she cannot clear her secretions, and she has vomited with an SpO2 of 90%, so she cannot protect her airway. The Canadian recommendations call for rapid assessment of airway, breathing and circulation in acute stroke and for advanced airway control when it is needed. New infarcts, swelling or hemorrhagic change can drive this decline, so intubate before she worsens further, then repeat the imaging.",
        keyFeature: { topic: "airway", n: 2 },
        source: "csbpr-acute",
      },
    ],
    sources: [CSBPR, CSBPR_CANCER],
    reviewed: false,
    author: AUTHOR,
    version: 2,
  },
  /* 10 ----------------------------------------------------------------- */
  {
    id: "loc-10",
    topic: "loc",
    alsoTopics: ["tox"],
    title: "Floppy after a clinic visit",
    stem:
      "A 29-year-old man with spastic quadriplegic cerebral palsy is brought to the emergency department by his mother at 1800. He has an intrathecal baclofen pump. Since mid afternoon he has become increasingly sleepy and floppy, and he drooled and gagged on his supper. His mother says this is not like him. He opens his eyes to pressure, moans without words and withdraws from pain. His limbs are flaccid and his reflexes are reduced. His pupils are 3 mm and reactive. Capillary glucose is 5.8 mmol/L.",
    vitals: {
      temperature: "35.4°C",
      pulse: "54/minute",
      resp: "8/minute",
      bp: "94/56 mmHg",
      o2sat: "89% on room air",
      weight: "48 kg",
    },
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What collateral history would you seek from his mother?",
        required: 3,
        accept: [
          {
            id: "baseline",
            text: "His usual alertness, speech, muscle tone and function",
            match: ["baseline", "usual", "normal for him", "speech", "communication", "communicate", "tone", "function"],
          },
          {
            id: "refill",
            text: "When the pump was last refilled, reprogrammed or accessed, and by whom",
            match: ["refill", "refilled", "reprogram", "reprogrammed", "programming", "dose change", "dose increase", "accessed", "clinic visit", "bolus dose"],
          },
          {
            id: "oral",
            text: "Other sedating drugs, including oral baclofen, benzodiazepines or gabapentin",
            match: ["oral baclofen", "benzodiazepine", "gabapentin", "sedative", "clonazepam", "diazepam", "other medication", "other drug"],
          },
          { id: "device", text: "Pump alarms or recent surgery on the pump or catheter", match: ["alarm", "catheter", "surgery", "pump revision", "pump replacement", "battery"] },
          { id: "seizure", text: "His seizure history and any seizure today", match: ["seizure history", "history of seizure", "seizure today", "usual seizure", "epilepsy", "convulsion today"] },
          { id: "illness", text: "Recent fever, cough, vomiting or poor intake", match: ["fever", "cough", "vomit", "vomiting", "illness", "intake", "sick"] },
          { id: "fall", text: "Any fall or head injury", match: ["fall", "head injury", "head trauma"] },
        ],
        explanation:
          "His mother knows how alert he usually is and how stiff his limbs usually are, so she can confirm that sleepiness with flaccid limbs is a change from his baseline. The timing of the last refill or reprogramming is the key history, because the product monograph names programming errors, rapid dose increases, delivery of catheter contents and added oral baclofen as causes of intrathecal overdose. Pump alarms or recent catheter surgery point to a device problem. A seizure history, recent illness or a fall widen the differential.",
        keyFeature: { topic: "loc", n: 3 },
        source: "lioresal-intrathecal",
      },
      {
        id: "q2",
        kind: "short",
        update: "His mother says the pump was refilled and its dose increased at the rehabilitation clinic at 1100 today.",
        prompt: "What immediate treatments would you give?",
        required: 2,
        accept: [
          {
            id: "vent",
            text: "Assist ventilation with a bag valve mask and oxygen",
            match: ["bag valve", "bvm", "bag mask", "assist ventilation", "ventilate", "oxygen", "o2"],
          },
          { id: "intubate", text: "Intubate if his breathing does not improve", match: INTUBATE },
          {
            id: "pump",
            text: "Have the pump team stop the pump and remove the remaining drug from the reservoir",
            match: ["stop the pump", "empty the pump", "empty the reservoir", "aspirate the reservoir", "remove the drug", "pump team", "stop the infusion", "turn off the pump", "reservoir"],
          },
          {
            id: "csf",
            text: "Withdraw 30 to 40 mL of CSF by lumbar puncture if there is no contraindication",
            match: ["csf", "lumbar puncture", "spinal tap"],
          },
          { id: "bp", text: "IV fluid to support his BP", match: ["fluid bolus", "iv fluid", "crystalloid", "normal saline", "ringer"] },
          { id: "warm", text: "Warm him", match: ["warm", "rewarm", "warming", "warmed"] },
        ],
        explanation:
          "A respiratory rate of 8 and an SpO2 of 89% need assisted ventilation now, and the product monograph advises intubation when needed until the drug is eliminated. There is no specific antidote, so the drug is stopped at its source by removing the residual solution from the pump as soon as possible, which needs the team that manages his pump. Early in the overdose, withdrawing 30 to 40 mL of CSF by lumbar puncture lowers the CSF baclofen concentration if lumbar puncture is not contraindicated. Support his circulation and warm him, since hypothermia is part of the overdose.",
        keyFeature: { topic: "loc", n: 2 },
        source: "lioresal-intrathecal",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "What complications would you anticipate over the next 24 hours?",
        required: 3,
        accept: [
          {
            id: "apnea",
            text: "Apnea or respiratory arrest",
            match: ["apnea", "apnoea", "respiratory arrest", "respiratory depression", "respiratory failure", "hypoventilation", "stop breathing"],
          },
          { id: "seizure", text: "Seizures", match: ["seizure", "convulsion"] },
          { id: "coma", text: "Deepening coma", match: ["coma", "worsening consciousness", "decreasing gcs", "falling gcs"] },
          { id: "aspiration", text: "Aspiration from drooling, vomiting and a weak gag", match: ["aspiration", "pneumonia", "vomit", "vomiting", "secretion", "drooling"] },
          { id: "cardio", text: "Hypotension or bradycardia", match: ["hypotension", "bradycardia", "low blood pressure", "shock"] },
          { id: "hypothermia", text: "Worsening hypothermia", match: ["hypothermia", "low temperature"] },
          {
            id: "withdrawal",
            text: "Baclofen withdrawal if delivery is not restored, with rebound spasticity, itch, fever and rhabdomyolysis",
            match: ["withdrawal", "rebound", "itch", "itching", "pruritus", "rhabdomyolysis", "hyperthermia"],
          },
          { id: "lp", text: "CSF leak, headache or infection after CSF withdrawal", match: ["csf leak", "post dural", "post lp headache", "infection after lp", "lp site infection"] },
        ],
        explanation:
          "The monograph lists drowsiness, seizures, hypothermia, excessive salivation, vomiting and upward spread of hypotonia in intrathecal baclofen overdose, with respiratory depression, apnea and coma when it is serious. His drooling and gagging on supper point to a risk of aspiration. Seizures are reported both in overdose and in withdrawal. Once the pump is emptied, delivery must be restored under the pump team's plan, because abrupt loss of intrathecal baclofen can cause high fever, altered mental status, rebound spasticity, rhabdomyolysis and death.",
        keyFeature: { topic: "tox", n: 5 },
        source: "lioresal-intrathecal",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "What findings would make you look for another cause of his decreased level of consciousness?",
        required: 3,
        accept: [
          {
            id: "fever",
            text: "Fever, neck stiffness, or redness or swelling over the pump or catheter",
            match: ["fever", "neck stiffness", "stiff neck", "meningism", "redness", "swelling", "pump site", "wound", "pocket"],
          },
          { id: "focal", text: "Focal weakness, unequal pupils or new asymmetry", match: ["focal", "unequal pupil", "anisocoria", "asymmetric", "asymmetry", "one sided"] },
          { id: "seizure", text: "Seizure activity", match: ["seizure", "twitching", "convulsion", "jerking"] },
          { id: "injury", text: "Signs of a fall or head injury", match: ["bruise", "bruising", "scalp", "laceration", "signs of a fall", "head wound"] },
          {
            id: "labs",
            text: "Abnormal glucose, sodium or blood gas",
            match: ["hypoglycemia", "hyponatremia", "low sodium", "low glucose", "abnormal glucose", "hypercapnia", "high co2", "blood gas"],
          },
          {
            id: "course",
            text: "No improvement after the pump is emptied and CSF is removed",
            match: ["not improve", "not improving", "no improvement", "fails to improve", "persists", "worsening", "despite"],
          },
          { id: "pupils", text: "Pinpoint pupils suggesting an opioid", match: ["pinpoint", "miosis", "small pupil"] },
        ],
        explanation:
          "Intrathecal baclofen overdose explains his drowsiness, flaccid limbs, slow breathing and hypothermia, and he should improve once the pump is emptied and CSF is withdrawn. Fever, neck stiffness or inflammation over the pump suggest infection, and the monograph lists pocket infection and meningitis among device complications. Focal signs or unequal pupils suggest a structural lesion, and signs of a fall call for head imaging. Abnormal glucose, sodium or CO2 point to a metabolic cause or hypoventilation, and failure to improve as expected demands a fresh look.",
        keyFeature: { topic: "loc", n: 1 },
        source: "lioresal-intrathecal",
      },
    ],
    sources: [LIORESAL_IT],
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
