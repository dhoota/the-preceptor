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
  citation: "Nelson LS, Howland MA, Lewin NA, et al., editors. Goldfrank's Toxicologic Emergencies. 11th edition. McGraw-Hill Education.",
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
  citation: "Heart and Stroke Foundation of Canada. Canadian Stroke Best Practice Recommendations. Acute stroke management.",
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
      "A 71-year-old man is brought in by EMS after a passer-by found him slumped on a park bench on a cold November evening. He smells strongly of alcohol. The paramedics say he is a regular at a nearby shelter and is \"just drunk again\". Vital signs: HR 58, BP 176/94, RR 14, SpO2 95% on room air, temperature 35.9°C. He opens his eyes only to trapezius pressure, makes incomprehensible sounds, and reaches toward the painful stimulus. He has a boggy occipital hematoma. His right pupil is 4 mm and sluggish. His left pupil is 3 mm and brisk. No capillary glucose has been checked.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Document his level of consciousness using the Glasgow Coma Scale. Give the total and the components.",
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
        prompt: "List THREE findings that argue against alcohol intoxication as the sole cause of his decreased level of consciousness.",
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
        prompt: "Which TWO actions are most appropriate right now? Select TWO.",
        options: [
          "Capillary blood glucose",
          "Urgent non-contrast CT head",
          "Serum ethanol level before any imaging",
          "Naloxone 2 mg IV",
          "Flumazenil 0.2 mg IV",
          "Observe in the hallway until sober",
          "Lumbar puncture",
          "MRI brain",
        ],
        select: 2,
        correct: [0, 1],
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
        prompt: "List THREE immediate management steps.",
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
      "A 26-year-old woman is brought in by EMS after security found her unresponsive in a shopping centre washroom. A friend with her says she smoked something about 20 minutes earlier. Paramedics have been ventilating her with a bag-valve-mask. On arrival: HR 112, BP 104/62, RR 4, SpO2 82% on bag-valve-mask with oxygen, temperature 36.4°C. Her pupils are 1 mm. She does not open her eyes, make sounds or move to pressure.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate management? Select one.",
        options: [
          "Naloxone 2 mg IV push, then remove the bag-valve-mask",
          "Continue bag-valve-mask ventilation with 100% oxygen and give naloxone 0.04 to 0.4 mg IV, titrated to adequate breathing",
          "Immediate rapid sequence intubation without naloxone",
          "Flumazenil 0.2 mg IV",
          "Non-rebreather mask at 15 L/min and observation",
        ],
        correct: 1,
        explanation:
          "Ventilation fixes hypoxia immediately and comes first. Naloxone should then be titrated to breathing, not to full wakefulness. Small doses in opioid dependent patients reduce precipitated withdrawal, vomiting and aspiration. Flumazenil is dangerous in unknown ingestions.",
        keyFeature: { topic: "loc", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE pieces of collateral history you would seek from the friend or paramedics.",
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
        prompt: "State the naloxone infusion you would start. Give the dose per hour and how you calculated it.",
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
        prompt: "List THREE other causes of her persistently decreased level of consciousness that you must consider.",
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
      "An 84-year-old woman is brought in by her son, who found her hard to rouse at 0700. She was well at dinner last night. She has type 2 diabetes, chronic kidney disease (eGFR 28 mL/min/1.73 m2) and hypertension. Vital signs: HR 96, BP 158/84, RR 18, SpO2 96% on room air, temperature 36.2°C. She opens her eyes to voice and mumbles. Her right arm drifts and she has a right facial droop.",
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which single test should be done first? Select one.",
        options: ["Non-contrast CT head", "CT angiography head and neck", "Capillary blood glucose", "12-lead ECG", "Serum electrolytes"],
        correct: 2,
        explanation:
          "Hypoglycemia is a common stroke mimic and can cause focal deficits. A capillary glucose takes seconds and must be checked before any stroke pathway decision. Thrombolysis should never be given before glucose is known.",
        keyFeature: { topic: "loc", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "short",
        update: "Her capillary glucose is 1.8 mmol/L. Two attempts at IV access have failed.",
        prompt: "State the drug, dose and route you would give now.",
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
        prompt: "List THREE items of collateral history you would now seek from her son.",
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
        prompt: "List TWO measures to prevent recurrent hypoglycemia.",
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
        prompt: "Which is the most appropriate disposition? Select one.",
        options: [
          "Discharge home after a meal with her son",
          "Observe for 4 hours and discharge if glucose stays above 4 mmol/L",
          "Admit for monitored glucose checks for at least 24 hours",
          "Discharge with a home glucometer and follow-up in 1 week",
          "Admit only if a CT head shows an abnormality",
        ],
        correct: 2,
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
      "A 67-year-old man is brought in by his wife. He has had headache and fever for 2 days and today is confused and not making sense. She says he is normally fully independent, still does their taxes and drove yesterday. Vital signs: HR 112, BP 138/76, RR 22, SpO2 96% on room air, temperature 39.2°C. His GCS is 12 (E3 V4 M5). His neck is stiff. There is no rash, no focal deficit and no papilledema. Capillary glucose is 7.1 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE serious causes of his presentation that you must consider.",
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
        prompt: "List FOUR medications you would give now. Include the dose for each.",
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
        prompt: "His antibiotics have been given. Which is the most appropriate next step before lumbar puncture? Select one.",
        options: [
          "Lumbar puncture immediately without imaging",
          "Non-contrast CT head, because he has altered mental status and is over 60",
          "MRI brain with gadolinium before any lumbar puncture",
          "Defer lumbar puncture for 48 hours",
          "EEG before any other testing",
        ],
        correct: 1,
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
        prompt: "State the most likely diagnosis and ONE test to confirm it.",
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
        prompt: "His wife asks how the team will know if he is getting better or worse. List TWO ways you will document and monitor his level of consciousness.",
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
    title: "Not waking up after a seizure",
    stem:
      "A 38-year-old woman with epilepsy on levetiracetam is brought in by EMS. Her husband saw two generalized tonic-clonic seizures at home, and she did not wake between them. Paramedics gave midazolam 10 mg IM, and the convulsions stopped. Fifty minutes later in the emergency department, her eyes are closed. She opens them only to pressure, makes no sounds, and withdraws her limbs from pain. There is subtle rhythmic twitching at the left corner of her mouth and her eyes are deviated to the right. Vital signs: HR 108, BP 142/88, RR 16, SpO2 95% on room air. Capillary glucose is 5.8 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Document her level of consciousness using the Glasgow Coma Scale. Give the total and the components.",
        required: 1,
        accept: [{ id: "gcs", text: "GCS 7 (E2 V1 M4)", match: gcs(2, 1, 4) }],
        explanation:
          "Eye opening to pressure is E2, no verbal response is V1, and withdrawal is M4, for a total of 7. Record the subtle motor activity and gaze deviation in words too. They are the clues to ongoing seizure.",
        keyFeature: { topic: "loc", n: 5 },
        source: "gcs-40",
      },
      {
        id: "q2",
        kind: "short",
        prompt: "List THREE possible causes of her failure to wake up.",
        required: 3,
        accept: [
          {
            id: "ncse",
            text: "Nonconvulsive (subtle) status epilepticus",
            match: ["nonconvulsive", "non convulsive", "subtle status", "ongoing seizure", "status epilepticus", "electrographic", "subclinical"],
          },
          { id: "postictal", text: "Prolonged post-ictal state", match: ["postictal", "post ictal"] },
          { id: "benzo", text: "Sedation from midazolam", match: ["midazolam", "benzodiazepine", "sedation", "sedative"] },
          { id: "ich", text: "Intracranial hemorrhage or head injury during the seizure", match: ["hemorrhage", "head injury", "intracranial", "bleed", "trauma", "subdural"] },
          { id: "infection", text: "CNS infection", match: ["meningitis", "encephalitis", "cns infection"] },
          { id: "metabolic", text: "Metabolic cause such as hyponatremia", match: ["hyponatremia", "sodium", "metabolic", "electrolyte", "calcium"] },
          { id: "tox", text: "Toxic ingestion or withdrawal", match: ["toxin", "overdose", "withdrawal", "ingestion", "toxic"] },
        ],
        explanation:
          "Most patients start to improve within 20 to 30 minutes after a seizure. Persistent coma with gaze deviation and facial twitching strongly suggests nonconvulsive status. Structural, infectious, metabolic and toxic causes must be excluded in parallel.",
        keyFeature: { topic: "loc", n: 1 },
        source: "aes-status",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which TWO medications are most appropriate now? Select TWO.",
        options: [
          "Lorazepam 4 mg IV",
          "Lorazepam 10 mg IV",
          "Levetiracetam 60 mg/kg IV (maximum 4,500 mg)",
          "Levetiracetam 20 mg/kg IV (maximum 1,000 mg)",
          "Fosphenytoin 10 mg PE/kg IV",
          "Valproate 10 mg/kg IV",
          "Flumazenil 0.2 mg IV",
          "Haloperidol 5 mg IV",
        ],
        select: 2,
        correct: [0, 2],
        explanation:
          "She has had one prehospital benzodiazepine dose, so one repeat dose of lorazepam 0.1 mg/kg (maximum 4 mg) is appropriate. A second line agent at full loading dose should follow, such as levetiracetam 60 mg/kg up to 4,500 mg. The other second line doses listed are too low, and flumazenil can provoke seizures.",
        keyFeature: { topic: "seizures", n: 3 },
        source: "esett",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO investigations to confirm the diagnosis or find its cause.",
        required: 2,
        accept: [
          { id: "eeg", text: "Urgent EEG", match: ["eeg", "electroencephalogram"] },
          { id: "ct", text: "CT head", match: CT_HEAD },
          { id: "lytes", text: "Electrolytes including sodium, calcium and magnesium", match: ["sodium", "electrolyte", "calcium", "magnesium", "lytes"] },
          { id: "preg", text: "Pregnancy test", match: ["pregnancy", "bhcg", "hcg", "beta hcg"] },
          { id: "tox", text: "Ethanol and specific drug levels guided by history", match: ["ethanol", "toxicology", "drug level", "acetaminophen", "salicylate"] },
          { id: "lp", text: "Lumbar puncture if infection is suspected", match: ["lumbar puncture", "lp"] },
        ],
        explanation:
          "EEG is the only way to confirm nonconvulsive status and to guide treatment. A CT head looks for bleeding after two convulsions. Metabolic tests and a pregnancy test are routine for a woman of reproductive age.",
        keyFeature: { topic: "loc", n: 1 },
        source: "aes-status",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "List TWO pieces of collateral history you would seek from her husband.",
        required: 2,
        accept: [
          { id: "adherence", text: "Missed doses or recent changes to her antiseizure medication", match: ["missed", "adherence", "compliance", "dose change", "ran out"] },
          { id: "triggers", text: "Triggers such as sleep deprivation, illness or fever", match: ["sleep", "illness", "trigger", "fever", "infection", "stress"] },
          { id: "newmeds", text: "New medications or interactions", match: ["new medication", "medication change", "new drug", "interaction", "bupropion", "antibiotic"] },
          { id: "substances", text: "Alcohol or drug use or withdrawal", match: ["alcohol", "drug use", "substance", "cannabis"] },
          { id: "usual", text: "Her usual seizure pattern and usual recovery time", match: ["usual", "typical", "how long", "recovery", "pattern"] },
          { id: "head", text: "Head injury or fall", match: ["head", "fall"] },
          { id: "preg", text: "Possible pregnancy", match: ["pregnant", "pregnancy"] },
        ],
        explanation:
          "Knowing her usual recovery time tells you this episode is different. Missed doses and sleep deprivation are the most common triggers in known epilepsy. Pregnancy raises the possibility of eclampsia.",
        keyFeature: { topic: "loc", n: 3 },
        source: "aes-status",
      },
    ],
    sources: [GCS40, AES, ESETT],
    reviewed: true,
    author: AUTHOR,
    version: 1,
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
        prompt: "State the treatment for her sodium now. Include the fluid, volume and time over which you give it.",
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
        prompt: "What is the maximum rise in serum sodium you would allow in the first 24 hours? State the value.",
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
        prompt: "List THREE details from the daughter's history that establish this is a change from baseline or point to the cause.",
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
        prompt: "Which is the most appropriate management now? Select one.",
        options: [
          "Continue a 3% saline infusion at 1 mL/kg/h",
          "Give desmopressin 1 to 2 mcg IV and consider D5W to prevent overcorrection",
          "Give furosemide 40 mg IV",
          "Start tolvaptan 15 mg PO",
          "No change. Recheck sodium in 12 hours",
        ],
        correct: 1,
        explanation:
          "She has risen 5 mmol/L in 6 hours and now has a water diuresis. Sodium may climb quickly past the safe limit. Desmopressin, with D5W if needed, controls the rise. Sodium should be checked every 2 to 4 hours.",
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
        prompt: "Give TWO reasons his decreased level of consciousness should not be attributed to alcohol.",
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
        prompt: "Which is the most appropriate imaging decision? Select one.",
        options: [
          "Observe until sober and reassess the need for CT",
          "Non-contrast CT head now",
          "Skull X-ray series",
          "CT head only if his GCS falls below 9",
          "Discharge to police custody with a head injury sheet",
        ],
        correct: 1,
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
        prompt: "Document his level of consciousness using the Glasgow Coma Scale. Give the total and the components.",
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
        prompt: "List THREE immediate management steps.",
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
    title: "A drowsy man on a February morning",
    stem:
      "In February, a 34-year-old man is helped in by his partner, who found him hard to rouse on the couch this morning. His partner says they have both had headaches and nausea for 2 days, and their 6-year-old daughter vomited this morning. They live in an older rented house. On examination his GCS is 13 (E3 V4 M6). Vital signs: HR 118, BP 128/80, RR 20, SpO2 99% on room air, temperature 36.8°C. Capillary glucose is 5.6 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "What is the most likely diagnosis?",
        required: 1,
        accept: [{ id: "co", text: "Carbon monoxide poisoning", match: ["carbon monoxide", "co poisoning", "co toxicity", "co"] }],
        unacceptable: [{ text: "Viral gastroenteritis", match: ["gastroenteritis", "viral", "flu"] }],
        explanation:
          "Several people in one home with headache, nausea and drowsiness in winter is carbon monoxide until proven otherwise. The collateral that the whole household is sick is the key clue. Viral illness is the usual misdiagnosis.",
        keyFeature: { topic: "loc", n: 3 },
        source: "co-practice",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which test will confirm the diagnosis? Select one.",
        options: [
          "Standard pulse oximetry",
          "Blood gas with co-oximetry for carboxyhemoglobin",
          "Serum lactate",
          "Cyanide level",
          "Non-contrast CT head",
        ],
        correct: 1,
        explanation:
          "Standard pulse oximeters read carboxyhemoglobin as oxyhemoglobin, so the SpO2 is falsely normal. Co-oximetry on a venous or arterial sample measures carboxyhemoglobin directly. Levels fall with time and oxygen, so interpret them with the history.",
        keyFeature: { topic: "loc", n: 1 },
        source: "co-practice",
      },
      {
        id: "q3",
        kind: "short",
        prompt: "State the initial treatment, including the delivery method.",
        required: 1,
        accept: [
          {
            id: "o2",
            text: "100% oxygen by non-rebreather mask at 15 L/min",
            match: ["100%", "non rebreather", "nonrebreather", "high flow oxygen", "15 l/min", "nrb"],
          },
        ],
        unacceptable: [{ text: "Oxygen titrated to SpO2 92 to 96%", match: ["titrate", "titrated", "nasal prong", "nasal cannula"] }],
        explanation:
          "High flow oxygen shortens the carboxyhemoglobin half-life from about 5 hours on room air to about 1 hour. Titrating to SpO2 is meaningless because the saturation reads falsely normal. Continue oxygen until symptoms resolve and the level is low.",
        keyFeature: { topic: "loc", n: 2 },
        source: "co-practice",
      },
      {
        id: "q4",
        kind: "short",
        update: "His carboxyhemoglobin is 28%. His partner says he was unresponsive for a few minutes at home. His ECG shows sinus tachycardia and his troponin is normal.",
        prompt: "List THREE indications for discussing hyperbaric oxygen in carbon monoxide poisoning.",
        required: 3,
        accept: [
          {
            id: "loc",
            text: "Loss of consciousness or altered mental status",
            match: ["loss of consciousness", "syncope", "altered", "coma", "confusion", "unresponsive", "decreased level"],
          },
          { id: "preg", text: "Pregnancy with carboxyhemoglobin over about 15 to 20%", match: ["pregnant", "pregnancy"] },
          { id: "level", text: "Carboxyhemoglobin 25% or higher", match: ["25", "25%"] },
          { id: "neuro", text: "Focal neurological deficits or seizure", match: ["neurologic", "neurological", "focal", "seizure", "deficit"] },
          { id: "cardiac", text: "Cardiac ischemia or dysrhythmia", match: ["ischemia", "ecg change", "troponin", "cardiac", "chest pain", "dysrhythmia", "arrhythmia"] },
          { id: "acidosis", text: "Severe metabolic acidosis", match: ["acidosis", "ph", "lactate"] },
          { id: "risk", text: "Exposure of 24 hours or more, or age 36 or older", match: ["24 hour", "prolonged exposure", "long exposure", "36"] },
        ],
        explanation:
          "Hyperbaric oxygen is usually considered for loss of consciousness, neurological signs, cardiovascular involvement, severe acidosis, or carboxyhemoglobin of 25% or more. Age 36 or older and exposure of 24 hours or more are further risk factors for later cognitive problems. The lower threshold in pregnancy reflects fetal hemoglobin binding. He meets two criteria and should be discussed with a hyperbaric centre.",
        keyFeature: { topic: "tox", n: 4 },
        source: "co-practice",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "List TWO actions you would take for the rest of the household.",
        required: 2,
        accept: [
          { id: "assess", text: "Assess and test the daughter and partner", match: ["daughter", "partner", "family member", "child", "household member", "test the family"] },
          { id: "fire", text: "Notify the fire department or gas utility to inspect the home", match: ["fire", "gas company", "utility", "inspect", "inspection"] },
          { id: "noreturn", text: "No return home until the source is fixed", match: ["not return", "no return", "stay away", "until cleared", "until fixed"] },
          { id: "detector", text: "Install carbon monoxide detectors", match: ["detector", "alarm"] },
        ],
        explanation:
          "Everyone exposed needs assessment, including the child, whose symptoms may be subtle. The source must be found and fixed before anyone goes home. Working CO detectors prevent recurrence.",
        keyFeature: { topic: "loc", n: 1 },
        source: "co-practice",
      },
    ],
    sources: [CO],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 09 ----------------------------------------------------------------- */
  {
    id: "loc-09",
    topic: "loc",
    alsoTopics: ["cva", "airway"],
    title: "Dizzy, then sleepy",
    stem:
      "A 62-year-old man is brought in by his wife at 1545. At 1400 he said he felt dizzy and his speech was slurred. He has become steadily more sleepy since. He has hypertension and atrial fibrillation. His wife says he stopped apixaban 2 weeks ago for dental work and never restarted it. Vital signs: HR 96 irregular, BP 188/102, RR 18, SpO2 95% on room air, temperature 36.9°C. He opens his eyes to pressure, says a few inappropriate words and localizes with his left arm. His pupils are small and reactive, he has skew deviation, and his right arm is weak. Capillary glucose is 6.9 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE serious causes of his decreased level of consciousness.",
        required: 3,
        accept: [
          {
            id: "basilar",
            text: "Posterior circulation ischemic stroke, such as basilar artery occlusion",
            match: ["basilar", "posterior circulation", "brainstem stroke", "vertebrobasilar", "ischemic stroke", "stroke"],
          },
          { id: "ich", text: "Cerebellar or pontine hemorrhage", match: ["hemorrhage", "bleed", "ich", "hemorrhagic"] },
          { id: "seizure", text: "Seizure or nonconvulsive status", match: ["seizure", "status", "nonconvulsive"] },
          { id: "tox", text: "Toxic ingestion", match: ["toxin", "overdose", "ingestion", "toxic"] },
          { id: "htn", text: "Hypertensive encephalopathy", match: ["hypertensive encephalopathy", "pres"] },
          { id: "mass", text: "Posterior fossa mass", match: ["tumour", "tumor", "mass"] },
          { id: "infection", text: "CNS infection such as meningitis or encephalitis", match: ["meningitis", "encephalitis"] },
        ],
        explanation:
          "Dizziness and slurred speech progressing to drowsiness, with skew deviation and weakness, point to the brainstem. Stopping anticoagulation for atrial fibrillation raises the chance of embolic basilar occlusion. Hemorrhage must be excluded before any reperfusion treatment.",
        keyFeature: { topic: "cva", n: 2 },
        source: "csbpr-acute",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which TWO investigations should be done immediately? Select TWO.",
        options: [
          "Non-contrast CT head",
          "CT angiography of the head and neck",
          "MRI brain",
          "Lumbar puncture",
          "EEG",
          "Carotid Doppler ultrasound",
          "Transthoracic echocardiogram",
          "Serum ethanol",
        ],
        select: 2,
        correct: [0, 1],
        explanation:
          "Non-contrast CT excludes hemorrhage. CT angiography identifies a large vessel occlusion, which may be treatable with thrombectomy. MRI takes longer and should not delay a reperfusion decision.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "CT shows no hemorrhage. CT angiography shows a basilar artery occlusion. It is now 1610, 2 hours and 10 minutes since he was last known well.",
        prompt: "List TWO reperfusion treatments to offer. Include the dose where relevant.",
        required: 2,
        accept: [
          { id: "tnk", text: "Tenecteplase 0.25 mg/kg IV bolus (maximum 25 mg)", match: ["tenecteplase 0.25", "tnk 0.25"] },
          { id: "tpa", text: "Alteplase 0.9 mg/kg IV (maximum 90 mg), 10% as a bolus", match: ["alteplase 0.9", "tpa 0.9", "rtpa 0.9"] },
          { id: "evt", text: "Endovascular thrombectomy", match: ["thrombectomy", "evt", "endovascular"] },
        ],
        explanation:
          "He is within 4.5 hours and has not taken apixaban for 2 weeks, so thrombolysis is not excluded by anticoagulation. Canadian recommendations accept tenecteplase 0.25 mg/kg or alteplase 0.9 mg/kg. Basilar occlusion should also be referred for thrombectomy without waiting to see a response to lysis.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "His BP is 188/102 mmHg. Which is the most appropriate step before thrombolysis? Select one.",
        options: [
          "No treatment. Proceed with thrombolysis",
          "Labetalol 10 mg IV over 1 to 2 minutes, aiming for BP below 185/110 mmHg",
          "Lower systolic BP below 140 mmHg before thrombolysis",
          "Sublingual nifedipine 10 mg",
          "Withhold thrombolysis because BP is too high",
        ],
        correct: 1,
        explanation:
          "BP must be below 185/110 mmHg before thrombolysis and kept below 180/105 mmHg for 24 hours after. Labetalol in small IV doses is a standard choice. Sublingual nifedipine causes unpredictable drops, and aggressive lowering can extend ischemia.",
        keyFeature: { topic: "cva", n: 3 },
        source: "csbpr-acute",
      },
      {
        id: "q5",
        kind: "short",
        update: "While awaiting transfer for thrombectomy, his GCS falls to 7 (E1 V2 M4) and he has snoring respirations.",
        prompt: "List TWO immediate actions.",
        required: 2,
        accept: [
          { id: "airway", text: "Intubate to protect the airway", match: INTUBATE },
          { id: "stop", text: "Stop the thrombolytic infusion if still running and assess for hemorrhage", match: ["stop alteplase", "stop infusion", "stop the infusion", "stop tpa"] },
          { id: "ct", text: "Repeat CT head", match: REPEAT_CT },
          { id: "team", text: "Update the stroke and neurointerventional team", match: ["stroke team", "neurology", "neurointerventional", "interventional"] },
          { id: "pupils", text: "Reassess pupils, glucose and vital signs", match: ["pupil", "glucose", "reassess"] },
        ],
        explanation:
          "A GCS of 7 with snoring means he cannot protect his airway, and transfer is not safe without a definitive airway. Deterioration after thrombolysis may mean hemorrhage, so stop any running alteplase and rescan. Brainstem stroke can also progress without bleeding.",
        keyFeature: { topic: "airway", n: 2 },
        source: "csbpr-acute",
      },
    ],
    sources: [CSBPR],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 10 ----------------------------------------------------------------- */
  {
    id: "loc-10",
    topic: "loc",
    alsoTopics: ["tox"],
    title: "A sleepy toddler after a visit",
    stem:
      "A 2-year-old girl (12 kg) is brought in by her father. She spent the afternoon at her grandmother's apartment and has become increasingly sleepy over the last hour. Her father does not know what she might have got into. Vital signs: HR 72, BP 76/40, RR 16, SpO2 95% on room air, temperature 36.2°C. Her pupils are 2 mm. She opens her eyes briefly to voice, cries weakly and pulls away from pressure.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE specific pieces of collateral history you would seek.",
        required: 3,
        accept: [
          {
            id: "meds",
            text: "The grandmother's full medication list, including patches and pill organizers",
            match: ["grandmother", "medication", "pill", "patch", "patches", "organizer", "prescription"],
          },
          { id: "time", text: "When she could have had access and when symptoms began", match: ["time", "when", "access"] },
          { id: "amount", text: "How much could be missing, by pill count", match: ["count", "how many", "amount", "missing"] },
          {
            id: "other",
            text: "Other substances in the home, such as cannabis edibles, alcohol, opioids or cleaning products",
            match: ["cannabis", "edible", "alcohol", "opioid", "household", "cleaning", "other substance"],
          },
          { id: "trauma", text: "Any fall or injury", match: ["fall", "trauma", "injury", "head"] },
          { id: "baseline", text: "Her baseline health and any recent illness", match: ["baseline", "recent illness", "fever", "sick", "illness"] },
        ],
        explanation:
          "In a toddler with sudden drowsiness, the grandparent's medication list is the single most useful history. Many adult drugs, such as sulfonylureas, clonidine, opioids and calcium channel blockers, can be dangerous in one tablet. Ask someone to phone the grandmother or bring the bottles.",
        keyFeature: { topic: "loc", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "short",
        update: "Her capillary glucose is 2.1 mmol/L.",
        prompt: "State the drug, dose and route you would give now.",
        required: 1,
        accept: [
          {
            id: "d10",
            text: "D10W 5 mL/kg (60 mL) IV, which is 0.5 g/kg of dextrose",
            match: [
              ...["d10", "d10w", "dextrose 10%"].flatMap((d) => [2, 3, 4, 5].map((v) => `${d} ${v} ml/kg`)),
              ...["d10", "d10w", "dextrose 10%"].flatMap((d) => [24, 30, 36, 40, 48, 50, 60].map((v) => `${d} ${v} ml`)),
              "dextrose 0.5 g/kg",
              "dextrose 0.25 g/kg",
              "dextrose 0.2 g/kg",
            ],
          },
        ],
        unacceptable: [{ text: "Undiluted D50W", match: ["d50", "d50w", "50% dextrose", "dextrose 50%"], dangerous: true }],
        explanation:
          "Young children should receive D10W at 2 to 5 mL/kg IV, which gives 0.2 to 0.5 g/kg. For 12 kg that is 24 to 60 mL. Concentrated D50W is sclerosing to small veins. Recheck glucose within 15 minutes.",
        keyFeature: { topic: "loc", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "short",
        update:
          "The grandmother says she takes gliclazide MR 30 mg and clonidine 0.1 mg, and several tablets of each may be missing. After dextrose, the child's glucose is 6.5 mmol/L, but she remains drowsy with small pupils and a heart rate of 70.",
        prompt: "List TWO further management steps.",
        required: 2,
        accept: [
          { id: "octreotide", text: "Octreotide 1 mcg/kg SC to prevent recurrent hypoglycemia", match: ["octreotide"] },
          { id: "dextrose", text: "Dextrose infusion with frequent glucose checks", match: ["dextrose infusion", "d10 infusion", "d10w infusion", "hourly glucose", "frequent glucose", "glucose check", "serial glucose"] },
          { id: "admit", text: "Admit to a monitored or PICU bed for at least 24 hours", match: ["admit", "admission", "picu", "icu", "monitored bed", "cardiac monitor"] },
          { id: "poison", text: "Consult the regional poison centre", match: ["poison"] },
          { id: "naloxone", text: "Trial of naloxone for clonidine toxicity", match: ["naloxone"] },
          { id: "atropine", text: "Atropine if bradycardia causes poor perfusion", match: ["atropine"] },
          { id: "fluid", text: "Fluid bolus of 10 to 20 mL/kg for hypotension", match: ["fluid bolus", "bolus", "normal saline", "crystalloid", "20 ml/kg", "10 ml/kg"] },
        ],
        explanation:
          "A single sulfonylurea tablet can cause hypoglycemia in a toddler that recurs for 24 hours or more. Octreotide is the preferred treatment. Clonidine causes miosis, bradycardia and drowsiness that usually respond to supportive care, with naloxone sometimes helpful. Both ingestions warrant monitored admission.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO other causes of a decreased level of consciousness in a toddler that you would keep in mind.",
        required: 2,
        accept: [
          { id: "nai", text: "Abusive head trauma", match: ["abusive", "abuse", "non accidental", "nai", "inflicted", "shaken"] },
          { id: "cns", text: "Meningitis or encephalitis", match: ["meningitis", "encephalitis", "cns infection"] },
          { id: "intuss", text: "Intussusception presenting with lethargy", match: ["intussusception"] },
          { id: "seizure", text: "Seizure or post-ictal state", match: ["seizure", "postictal", "post ictal"] },
          { id: "dka", text: "Diabetic ketoacidosis", match: ["dka", "diabetic ketoacidosis", "diabetic"] },
          { id: "metabolic", text: "Inborn error of metabolism or other metabolic cause", match: ["inborn", "metabolic", "hyperammonemia"] },
          { id: "sepsis", text: "Sepsis", match: ["sepsis", "septic"] },
          { id: "other", text: "Other ingestions such as opioids or cannabis", match: ["opioid", "cannabis", "thc", "alcohol"] },
        ],
        explanation:
          "Even with a likely ingestion, keep abusive head trauma, CNS infection, intussusception and seizures in mind. Occult injury is easy to miss in a drowsy child. Reassess if she does not improve as expected.",
        keyFeature: { topic: "loc", n: 1 },
        source: "goldfrank",
      },
    ],
    sources: [GOLDFRANK],
    reviewed: true,
    author: AUTHOR,
    version: 1,
  },
  /* 11 ----------------------------------------------------------------- */
  {
    id: "loc-11",
    topic: "loc",
    alsoTopics: ["infectious-diseases"],
    title: "Less responsive than usual",
    stem:
      "An 88-year-old woman arrives by ambulance from her long-term care home. The transfer note reads \"decreased LOC, ? UTI\". She has moderate dementia. Vital signs: HR 116, BP 82/44, RR 26, SpO2 91% on room air, temperature 38.4°C. She opens her eyes to voice, says a few inappropriate words and localizes to pain. Capillary glucose is 8.2 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE items of collateral history you would obtain from the care home staff.",
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
        prompt: "List THREE immediate treatments. Include doses where relevant.",
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
        prompt: "Which conclusion is most appropriate? Select one.",
        options: [
          "Urinary tract infection is confirmed as the source",
          "Pneumonia is the likely source. Pyuria is common in long-term care residents and should not anchor the diagnosis",
          "She has two sources of infection and needs two antibiotic courses",
          "The chest X-ray is unreliable, so treat the urine",
          "No infection is present, so stop antibiotics",
        ],
        correct: 1,
        explanation:
          "Asymptomatic bacteriuria and pyuria are very common in older adults in long-term care. A dipstick result is weak evidence for urinary sepsis. Anchoring on the transfer label risks missing the real source, here pneumonia.",
        keyFeature: { topic: "loc", n: 1 },
        source: "ssc-2021",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "Two hours after fluids and antibiotics, she opens her eyes spontaneously, speaks in confused sentences and obeys commands.",
        prompt: "State her GCS at arrival and now, with components. List TWO values.",
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
      "A 74-year-old man is brought in by his neighbour, who found him confused at home. The neighbour says he has been very thirsty and passing a lot of urine for a week. He has type 2 diabetes treated with metformin and empagliflozin. Vital signs: HR 118, BP 96/60, RR 20, SpO2 96% on room air, temperature 37.4°C. His mucous membranes are dry. His GCS is 11 (E3 V3 M5). Laboratory results: glucose 52 mmol/L, sodium 149 mmol/L, potassium 4.8 mmol/L, chloride 112 mmol/L, bicarbonate 22 mmol/L, urea 28 mmol/L, creatinine 180 µmol/L, beta-hydroxybutyrate 0.8 mmol/L, venous pH 7.34.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Calculate his effective serum osmolality. State the value.",
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
        prompt: "List THREE initial treatment steps. Include rates where relevant.",
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
        prompt: "What is the main risk of lowering his osmolality too quickly? Answer in one line.",
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
        prompt: "List TWO precipitants of this presentation that you would look for.",
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
      "A 58-year-old man with alcohol related cirrhosis is brought in by his sister. For 2 days he has been sleepy and muddled. She says he was admitted with the same thing last year. He fell in the bathroom last week. He opens his eyes to voice, is confused and obeys commands. He has asterixis. Vital signs: HR 98, BP 108/64, RR 16, SpO2 96% on room air, temperature 37.6°C. Laboratory results: INR 2.4, platelets 58 x 10^9/L, sodium 131 mmol/L, capillary glucose 3.2 mmol/L.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Before attributing his state to hepatic encephalopathy, list THREE other causes you must exclude.",
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
        prompt: "His glucose is 3.2 mmol/L. List TWO immediate treatments.",
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
        prompt: "Which investigation is most important now? Select one.",
        options: [
          "Serum ammonia to confirm hepatic encephalopathy",
          "Non-contrast CT head",
          "EEG",
          "MRI brain",
          "Abdominal ultrasound for liver size",
        ],
        correct: 1,
        explanation:
          "A fall, an INR of 2.4 and platelets of 58 put him at high risk of subdural hematoma, which can look exactly like encephalopathy. A high ammonia neither confirms hepatic encephalopathy nor excludes a bleed. Guidelines do not require ammonia to make the diagnosis, although a normal level should prompt a search for another cause.",
        keyFeature: { topic: "loc", n: 4 },
        source: "aasld-easl-he",
      },
      {
        id: "q4",
        kind: "short",
        update: "His CT head is normal.",
        prompt: "List TWO precipitants of hepatic encephalopathy that you would look for.",
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
          "Most episodes of hepatic encephalopathy have a precipitant, and treating it is as important as lactulose. A diagnostic paracentesis should be done in any patient with ascites and encephalopathy. A low grade fever raises concern for SBP here.",
        keyFeature: { topic: "loc", n: 1 },
        source: "aasld-easl-he",
      },
      {
        id: "q5",
        kind: "short",
        prompt: "State the first-line treatment for his hepatic encephalopathy, with the dose and goal.",
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
      "A 66-year-old woman with poorly controlled hypertension was gardening at 0900 when she had a sudden severe headache and vomited. Her husband found her on the ground 20 minutes later. EMS recorded a GCS of 13 (E3 V4 M6). She arrives at 0955 with BP 212/118 and HR 62. At 1010, she opens her eyes only to pressure, says inappropriate words and localizes with her left arm. Her right arm is weak.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "Document her GCS at 1010. Give the total and the components.",
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
        prompt: "List TWO ways, other than the GCS total, to document her level of consciousness so that other clinicians can follow the trend.",
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
        prompt: "Which is the most appropriate imaging now? Select one.",
        options: ["MRI brain", "Non-contrast CT head", "Lumbar puncture before imaging", "Carotid Doppler ultrasound", "EEG"],
        correct: 1,
        explanation:
          "Sudden headache, vomiting, very high BP and a falling GCS suggest intracranial hemorrhage. Non-contrast CT is fast and highly sensitive for acute blood. CT angiography is often added to look for a vascular cause.",
        keyFeature: { topic: "loc", n: 1 },
        source: "aha-ich-2022",
      },
      {
        id: "q4",
        kind: "short",
        update:
          "CT shows a 45 mL left basal ganglia hemorrhage with intraventricular extension. She takes no anticoagulant or antiplatelet. Her BP is 208/116.",
        prompt: "State your systolic BP target and ONE IV agent you would use. List TWO answers.",
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
        prompt: "List TWO immediate actions.",
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
      "In January, a neighbour calls 911 after noticing newspapers piling up outside a 76-year-old woman's door. Paramedics find her on the floor of her cold apartment. In the emergency department her core temperature is 31.4°C, HR 42, BP 84/50 and RR 8. SpO2 does not read. She is obese with puffy eyes, dry skin, delayed reflexes and an old thyroidectomy scar. She opens her eyes to pressure, makes incomprehensible sounds and withdraws to pain (GCS 8). Capillary glucose is 3.4 mmol/L. Her pharmacy tells you her levothyroxine 125 mcg has not been refilled for 4 months.",
    questions: [
      {
        id: "q1",
        kind: "short",
        prompt: "List THREE conditions that may be contributing to her decreased level of consciousness.",
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
        prompt: "Apart from thyroid hormone and corticosteroids, list THREE immediate treatments.",
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
        prompt: "Which TWO medication orders are most appropriate now? Select TWO.",
        options: [
          "Levothyroxine 200 to 400 mcg IV loading dose",
          "Levothyroxine 25 mcg PO daily",
          "Levothyroxine 2,000 mcg IV",
          "Hydrocortisone 100 mg IV",
          "Dexamethasone 0.5 mg PO",
          "Atropine 3 mg IV for bradycardia",
          "Dopamine infusion at 20 mcg/kg/min",
          "None",
        ],
        select: 2,
        correct: [0, 3],
        explanation:
          "Myxedema coma needs IV levothyroxine, commonly a 200 to 400 mcg load, with lower doses for frail patients or those with cardiac disease. Give stress dose hydrocortisone first, or at the same time, until adrenal insufficiency is excluded. Hypothermic bradycardia rarely responds to atropine.",
        keyFeature: { topic: "loc", n: 2 },
        source: "ata-hypothyroidism",
      },
      {
        id: "q4",
        kind: "short",
        prompt: "List TWO sources of collateral information and what each would add in a patient who cannot give a history.",
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
        prompt: "Which is the best way to monitor her core temperature during rewarming? Select one.",
        options: ["Tympanic infrared thermometer", "Oral thermometer", "Esophageal probe once her airway is secured", "Axillary thermometer", "Temporal artery scanner"],
        correct: 2,
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
