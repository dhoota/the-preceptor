// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const TINT: Source = {
  id: "tintinalli",
  citation: "Tintinalli JE, Ma OJ, Yealy DM, et al, editors. Tintinalli's Emergency Medicine. A Comprehensive Study Guide. 9th ed. McGraw Hill. 2020.",
};
const RH: Source = {
  id: "roberts-hedges",
  citation: "Roberts JR, Custalow CB, Thomsen TW, editors. Roberts and Hedges' Clinical Procedures in Emergency Medicine and Acute Care. 7th ed. Elsevier. 2019.",
};
const ESMO_PAIN: Source = {
  id: "esmo-cancer-pain",
  citation:
    "Fallon M, Giusti R, Aielli F, et al. Management of cancer pain in adult patients. ESMO Clinical Practice Guidelines. Ann Oncol. 2018.",
  url: "https://doi.org/10.1093/annonc/mdy152",
};
const SCHWENK: Source = {
  id: "schwenk-ketamine",
  citation:
    "Schwenk ES, Viscusi ER, Buvanendran A, et al. Consensus guidelines on the use of intravenous ketamine infusions for acute pain management from the American Society of Regional Anesthesia and Pain Medicine, the American Academy of Pain Medicine, and the American Society of Anesthesiologists. Reg Anesth Pain Med. 2018.",
  url: "https://pubmed.ncbi.nlm.nih.gov/29870457/",
};
const FLACC: Source = {
  id: "flacc",
  citation: "Merkel SI, Voepel-Lewis T, Shayevitz JR, Malviya S. The FLACC. A behavioral scale for scoring postoperative pain in young children. Pediatr Nurs. 1997.",
  url: "https://pubmed.ncbi.nlm.nih.gov/9220806/",
};
const BLACK: Source = {
  id: "black-femur",
  citation: "Black KJ, Bevan CA, Murphy NG, Howard JJ. Nerve blocks for initial pain management of femoral fractures in children. Cochrane Database Syst Rev. 2013.",
  url: "https://pubmed.ncbi.nlm.nih.gov/24343768/",
};
const HC_NSAID: Source = {
  id: "hc-nsaid-pregnancy",
  citation:
    "Health Canada. Use of non-steroidal anti-inflammatory drugs (NSAIDs) beyond 20 weeks of pregnancy and risk of kidney damage to unborn babies. Public advisory. 2020.",
  url: "https://recalls-rappels.canada.ca/en/alert-recall/use-non-steroidal-anti-inflammatory-drugs-nsaids-beyond-20-weeks-pregnancy-and-risk",
};
const HQO: Source = {
  id: "hqo-acute-opioids",
  citation: "Health Quality Ontario. Opioid prescribing for acute pain. Care for people 15 years of age and older. Quality standard. 2018.",
};
const GREEN11: Source = {
  id: "green-ketamine-2011",
  citation:
    "Green SM, Roback MG, Kennedy RM, Krauss B. Clinical practice guideline for emergency department ketamine dissociative sedation. 2011 update. Ann Emerg Med. 2011.",
  url: "https://pubmed.ncbi.nlm.nih.gov/21256625/",
};
const MINER07: Source = {
  id: "miner-propofol",
  citation: "Miner JR, Burton JH. Clinical practice advisory. Emergency department procedural sedation with propofol. Ann Emerg Med. 2007.",
};
const PENTHROX: Source = {
  id: "penthrox-pm",
  citation: "Paladin Labs. PENTHROX (methoxyflurane volatile liquid for inhalation). Canadian product monograph. Revised 2024.",
  url: "https://pdf.hres.ca/dpd_pm/00075149.PDF",
};
const CHANG17: Source = {
  id: "chang-2017",
  citation:
    "Chang AK, Bijur PE, Esses D, Barnaby DP, Baer J. Effect of a single dose of oral opioid and nonopioid analgesics on acute extremity pain in the emergency department. A randomized clinical trial. JAMA. 2017.",
};
const MOORE: Source = {
  id: "moore-dental",
  citation:
    "Moore PA, Ziegler KM, Lipman RD, et al. Benefits and harms associated with analgesic medications used in the management of acute dental pain. An overview of systematic reviews. J Am Dent Assoc. 2018.",
  url: "https://pubmed.ncbi.nlm.nih.gov/29599019/",
};
const MARCO: Source = {
  id: "marco-vitals",
  citation: "Marco CA, Plewa MC, Buderer N, Hymel G, Cooper J. Self-reported pain scores in the emergency department. Lack of association with vital signs. Acad Emerg Med. 2006.",
  url: "https://onlinelibrary.wiley.com/doi/10.1197/j.aem.2006.04.015",
};
const CHANG13: Source = {
  id: "chang-older",
  citation:
    "Chang AK, Bijur PE, Davitt M, Gallagher EJ. Randomized clinical trial of an intravenous hydromorphone titration protocol versus usual care for management of acute pain in older emergency department patients. Drugs Aging. 2013.",
  url: "https://pubmed.ncbi.nlm.nih.gov/23846749/",
};
const CHANG16: Source = {
  id: "chang-titration",
  citation:
    "Chang AK, Bijur PE, Holden L, Gallagher EJ. Efficacy of an acute pain titration protocol driven by patient response to a simple query. Do you want more pain medication? Ann Emerg Med. 2016.",
  url: "https://pubmed.ncbi.nlm.nih.gov/26590747/",
};
const FRIEDMAN: Source = {
  id: "friedman-back",
  citation:
    "Friedman BW, Dym AA, Davitt M, et al. Naproxen with cyclobenzaprine, oxycodone/acetaminophen, or placebo for treating acute low back pain. A randomized clinical trial. JAMA. 2015.",
  url: "https://pubmed.ncbi.nlm.nih.gov/26501533/",
};
const CPS19: Source = {
  id: "cps-procedures",
  citation:
    "Trottier ED, Doré-Bergeron MJ, Chauvin-Kimoff L, Baerg K, Ali S. Managing pain and distress in children undergoing brief diagnostic and therapeutic procedures. Canadian Paediatric Society position statement. Paediatr Child Health. 2019.",
  url: "https://cps.ca/en/documents/position/managing-pain-and-distress",
};
const CPS22: Source = {
  id: "cps-pain",
  citation:
    "Trottier ED, Ali S, Doré-Bergeron MJ, Chauvin-Kimoff L. Best practices in pain assessment and management for children. Canadian Paediatric Society position statement. Paediatr Child Health. 2022.",
  url: "https://cps.ca/en/documents/position/pain-assessment-and-management",
};
const ASAPS: Source = {
  id: "asa-ps",
  citation: "American Society of Anesthesiologists. ASA physical status classification system. Approved 2014, last amended 2020.",
};
const ACEP14: Source = {
  id: "acep-psa-2014",
  citation:
    "Godwin SA, Burton JH, Gerardo CJ, et al. Clinical policy. Procedural sedation and analgesia in the emergency department. American College of Emergency Physicians. Ann Emerg Med. 2014.",
  url: "https://pubmed.ncbi.nlm.nih.gov/24438649/",
};
const MINER_ETOM: Source = {
  id: "miner-etomidate",
  citation: "Miner JR, Danahy M, Moch A, Biros M. Randomized clinical trial of etomidate versus propofol for procedural sedation in the emergency department. Ann Emerg Med. 2007.",
  url: "https://pubmed.ncbi.nlm.nih.gov/16997421/",
};
const ASA18: Source = {
  id: "asa-moderate-sedation",
  citation:
    "American Society of Anesthesiologists Task Force on Moderate Procedural Sedation and Analgesia, et al. Practice guidelines for moderate procedural sedation and analgesia 2018. Anesthesiology. 2018.",
  url: "https://pubmed.ncbi.nlm.nih.gov/29334501/",
};
const MOTOV: Source = {
  id: "motov-ketamine",
  citation:
    "Motov S, Rockoff B, Cohen V, et al. Intravenous subdissociative-dose ketamine versus morphine for analgesia in the emergency department. A randomized controlled trial. Ann Emerg Med. 2015.",
  url: "https://pubmed.ncbi.nlm.nih.gov/25817884/",
};
const PADIS: Source = {
  id: "padis",
  citation:
    "Devlin JW, Skrobik Y, Gélinas C, et al. Clinical practice guidelines for the prevention and management of pain, agitation/sedation, delirium, immobility, and sleep disruption in adult patients in the ICU. Crit Care Med. 2018.",
};
const COLE: Source = {
  id: "cole-agitation",
  citation: "Cole JB, Moore JC, Nystrom PC, et al. A prospective study of ketamine versus haloperidol for severe prehospital agitation. Clin Toxicol (Phila). 2016.",
  url: "https://pubmed.ncbi.nlm.nih.gov/27102743/",
};
const AAP: Source = {
  id: "aap-sedation",
  citation:
    "Coté CJ, Wilson S, American Academy of Pediatrics, American Academy of Pediatric Dentistry. Guidelines for monitoring and management of pediatric patients before, during, and after sedation for diagnostic and therapeutic procedures. Pediatrics. 2019.",
};
const ANDOLFATTO: Source = {
  id: "andolfatto-ketofol",
  citation:
    "Andolfatto G, Abu-Laban RB, Zed PJ, et al. Ketamine-propofol combination (ketofol) versus propofol alone for emergency department procedural sedation and analgesia. A randomized double-blind trial. Ann Emerg Med. 2012.",
  url: "https://pubmed.ncbi.nlm.nih.gov/22401952/",
};
const WMS: Source = {
  id: "wms-frostbite",
  citation:
    "McIntosh SE, Freer L, Grissom CK, et al. Wilderness Medical Society clinical practice guidelines for the prevention and treatment of frostbite. 2024 update. Wilderness Environ Med. 2024.",
  url: "https://pubmed.ncbi.nlm.nih.gov/38577729/",
};
const LALONDE: Source = {
  id: "lalonde-epinephrine",
  citation:
    "Lalonde D, Bell M, Benoit P, Sparkes G, Denkler K, Chang P. A multicenter prospective study of 3,110 consecutive cases of elective epinephrine use in the fingers and hand. The Dalhousie Project clinical phase. J Hand Surg Am. 2005.",
  url: "https://pubmed.ncbi.nlm.nih.gov/16182068/",
};
const BUSSE: Source = {
  id: "busse-opioids",
  citation: "Busse JW, Craigie S, Juurlink DN, et al. Guideline for opioid therapy and chronic noncancer pain. CMAJ. 2017.",
  url: "https://pubmed.ncbi.nlm.nih.gov/28483845/",
};
const FREY: Source = {
  id: "frey-prime",
  citation:
    "Frey TM, Florin TA, Caruso M, et al. Effect of intranasal ketamine vs fentanyl on pain reduction for extremity injuries in children. The PRIME randomized clinical trial. JAMA Pediatr. 2019.",
  url: "https://pubmed.ncbi.nlm.nih.gov/30592476/",
};
const ACR: Source = {
  id: "acr-gout",
  citation: "FitzGerald JD, Dalbeth N, Mikuls T, et al. 2020 American College of Rheumatology guideline for the management of gout. Arthritis Care Res (Hoboken). 2020.",
  url: "https://pubmed.ncbi.nlm.nih.gov/32391934/",
};
const HANDOLL: Source = {
  id: "handoll-radius",
  citation: "Handoll HHG, Madhok R, Dodds C. Anaesthesia for treating distal radial fracture in adults. Cochrane Database Syst Rev. 2002.",
  url: "https://pubmed.ncbi.nlm.nih.gov/12137688/",
};
const SENER: Source = {
  id: "sener-midazolam",
  citation: "Sener S, Eken C, Schultz CH, Serinken M, Ozsarac M. Ketamine with and without midazolam for emergency department sedation in adults. A randomized controlled trial. Ann Emerg Med. 2011.",
  url: "https://pubmed.ncbi.nlm.nih.gov/20970888/",
};

const AUTHOR = "Draft for review by Arjan Dhoot, MD";
const TOPIC = "analgesia-sedation";

export const ANALGESIA_SEDATION_S22_SAMPS: Samp[] = [
  {
    id: "analgesia-sedation-16",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Arm pain in a patient with cancer",
    stem:
      "A 64-year-old man presents to the emergency department with severe left upper arm pain that began 3 hours ago when he heard a crack while lifting a grocery bag. He has metastatic lung cancer with known bone metastases. He takes long-acting hydromorphone 12 mg PO every 12 hours and immediate-release hydromorphone 2 mg PO for breakthrough pain, which he has used 3 times a day this week. He has no kidney or liver disease. He rates his pain 9 out of 10 and holds the arm still against his chest. X-ray shows a displaced pathologic fracture of the left humeral shaft. The hand is neurovascularly intact.",
    vitals: { temperature: "36.9°C oral", pulse: "108/minute", resp: "18/minute", bp: "146/88 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details from his history most directly guides the size of his first opioid dose?",
        options: ["Cancer type and metastatic sites", "Mechanism of the pathologic fracture", "Pain score on arrival", "Time since the fracture occurred", "Total daily opioid dose at home"],
        correct: 4,
        explanation:
          "He is opioid tolerant. He takes 24 mg of long-acting hydromorphone and about 6 mg of breakthrough hydromorphone a day, about 30 mg of oral hydromorphone in total. That daily total sets how large a dose must be to have any effect, since a dose sized for an opioid-naive patient will do little for him. His score of 9 out of 10 confirms severe pain but does not tell you what dose he needs. His metastatic sites, the mechanism and the time since the fracture do not change the dose calculation.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "esmo-cancer-pain",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for his long-acting hydromorphone while he is in the emergency department?",
        options: ["Continue it at his usual dose", "Double the next scheduled dose", "Hold it until the pain is controlled", "Replace it with a fentanyl patch", "Switch it to oral morphine"],
        correct: 0,
        explanation:
          "Continuing his usual long-acting hydromorphone keeps his baseline opioid requirement covered, so the acute doses can treat the new fracture pain. Holding it would leave him underdosed and at risk of withdrawal. Doubling it gives a delayed effect that cannot be titrated. A fentanyl patch takes 12 hours or more to reach effect and cannot be titrated for acute pain. Switching to morphine adds conversion error with no benefit.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "He receives hydromorphone 1 mg IV twice, 15 minutes apart. He still rates his pain 8 out of 10. He is alert, with a pulse of 104/minute and resp. of 16/minute.",
        prompt: "Which of the following is the most appropriate next analgesic step for him?",
        options: ["Add lorazepam 1 mg sublingual", "Give acetaminophen 1 g PO and wait", "Give hydromorphone 2 mg IV now", "Reassess him again in 60 minutes", "Wait for the orthopedic consultation"],
        correct: 2,
        explanation:
          "Two 1 mg doses are close to an opioid-naive regimen, and his pain is still 8 out of 10 while he is alert with a normal respiratory rate. A rescue dose in opioid tolerance is about 10 to 15% of the daily opioid total. For his 30 mg of oral hydromorphone a day that is 3 to 4.5 mg oral, or roughly 1 to 2 mg IV, so 2 mg IV now is the right step, then titration every 15 minutes until relief. Waiting 60 minutes or waiting for the consultant leaves severe pain untreated. Acetaminophen is a reasonable adjunct but will not control this pain on its own. Lorazepam adds sedation and respiratory risk without analgesia.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "esmo-cancer-pain",
      },
      {
        id: "q4",
        kind: "single",
        update: "After a total of 7 mg of IV hydromorphone he rates his pain 7 out of 10. He is drowsy but rousable to voice. Resp. is 14/minute.",
        prompt: "Which of the following is the most appropriate adjunct to improve his analgesia now?",
        options: ["diazepam 5 mg IV", "hydromorphone 3 mg IV", "ketamine 0.3 mg/kg IV", "meperidine 50 mg IV", "naloxone 0.04 mg IV"],
        correct: 2,
        explanation:
          "He is now drowsy after 7 mg of IV hydromorphone, yet his pain is still 7 out of 10, so more opioid alone raises the risk of respiratory depression for little gain. Sub-dissociative ketamine at 0.3 mg/kg, 21 mg for 70 kg, adds analgesia through a different mechanism and is recommended for opioid-tolerant patients with acute pain. A further 3 mg of hydromorphone would deepen his sedation. Diazepam sedates without analgesia. Meperidine offers no advantage and has a neurotoxic metabolite. Naloxone is not indicated because he is rousable with an adequate respiratory rate.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "schwenk-ketamine",
      },
    ],
    sources: [TINT, ESMO_PAIN, SCHWENK],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-17",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Toddler who will not move his leg",
    stem:
      "A 3-year-old boy is brought to the emergency department by his parents after falling from the top of a bunk bed 1 hour ago. He screams when his right thigh is touched and will not move the leg. He has no other injuries and is otherwise healthy. He has had no analgesia. X-ray shows a displaced midshaft fracture of the right femur. The foot is warm with normal capillary refill. His parents are at the bedside.",
    vitals: { temperature: "37.1°C tympanic", pulse: "148/minute", resp: "30/minute", bp: "98/60 mmHg", o2sat: "99% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate tool to assess his pain at this age?",
        options: ["Faces Pain Scale Revised", "FLACC behavioural scale", "Numeric rating scale", "Parent estimate of pain", "Visual analogue scale"],
        correct: 1,
        explanation:
          "At 3 years he cannot reliably use a self-report scale, so a validated observational tool is needed. FLACC scores face, legs, activity, cry and consolability from 0 to 10 and was validated in children aged 2 months to 7 years. The Faces Pain Scale Revised is intended for children from about 4 years. Numeric and visual analogue scales need abstract skills he does not yet have. A parent estimate is useful context but is not a validated measure on its own.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "flacc",
      },
      {
        id: "q2",
        kind: "single",
        update: "His FLACC score is 9. An IV is in place.",
        prompt: "Which of the following is the most effective initial intervention for his femoral fracture pain?",
        options: ["acetaminophen 225 mg PR alone", "Fascia iliaca compartment block", "ibuprofen 150 mg PO alone", "midazolam 0.75 mg IV", "morphine 1.5 mg IM into the thigh"],
        correct: 1,
        explanation:
          "A fascia iliaca compartment block anaesthetises the femoral nerve territory. In the one randomized trial of children with femoral fractures, it gave better and longer-lasting pain relief with fewer adverse events than IV morphine, although the evidence is of low quality. Acetaminophen 15 mg/kg is 225 mg and ibuprofen 10 mg/kg is 150 mg for 15 kg. Both are useful adjuncts but neither is enough alone for a FLACC score of 9. IM morphine is painful and unnecessary when an IV is in place. Midazolam sedates without relieving pain.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "black-femur",
      },
      {
        id: "q3",
        kind: "single",
        update: "Twenty minutes after the block he still cries when his leg is moved. His FLACC score is 6. His breathing is normal.",
        prompt: "Which of the following is the most appropriate next analgesic for him?",
        options: ["codeine 15 mg PO", "ketamine 22 mg IV", "morphine 1.5 mg IV", "morphine 4.5 mg IV", "No further analgesia"],
        correct: 2,
        explanation:
          "A FLACC score of 6 is still moderate to severe pain, so a titrated IV opioid is needed on top of the block. Morphine 0.1 mg/kg is 1.5 mg for 15 kg and can be repeated after reassessment. 4.5 mg is 0.3 mg/kg, three times a standard single IV dose. Codeine is not recommended for children under 12 in Canada because its conversion to morphine is unpredictable. Ketamine 22 mg is about 1.5 mg/kg, a dissociative sedation dose rather than an analgesic dose. Stopping now leaves him in pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [FLACC, BLACK, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-18",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Ankle injury late in pregnancy",
    stem:
      "A 29-year-old woman who is 31 weeks pregnant presents to the emergency department after slipping on a wet floor at work 2 hours ago. She has severe right ankle pain and cannot bear weight. Her pregnancy has been uncomplicated. She takes a prenatal vitamin and has no allergies. She rates her pain 8 out of 10. The fetal heart rate is 144/minute. The lateral ankle is swollen and tender, and the foot is neurovascularly intact. X-ray with abdominal shielding shows an isolated distal fibula fracture with no talar shift.",
    vitals: { temperature: "37.0°C oral", pulse: "96/minute", resp: "18/minute", bp: "112/68 mmHg", o2sat: "99% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following analgesic plans is most appropriate for her in the emergency department?",
        options: ["Acetaminophen and titrated IV opioid", "Ibuprofen 400 mg and acetaminophen PO", "Inhaled methoxyflurane 3 mL", "Ketorolac 15 mg IV every 6 hours", "Splint and ice without drugs"],
        correct: 0,
        explanation:
          "At 31 weeks NSAIDs are contraindicated, because from about 20 weeks they can cause fetal kidney problems with low amniotic fluid, and they are contraindicated outright in the third trimester. That rules out ibuprofen and ketorolac. Acetaminophen with a titrated IV opioid treats her 8 out of 10 pain and is acceptable in pregnancy. Methoxyflurane is not indicated during pregnancy in its Canadian product monograph. A splint helps, but withholding drugs leaves severe pain untreated.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "hc-nsaid-pregnancy",
      },
      {
        id: "q2",
        kind: "single",
        update: "She receives acetaminophen 1 g PO and morphine 4 mg IV. Twenty minutes later she rates her pain 6 out of 10. She is alert, with resp. of 16/minute.",
        prompt: "Which of the following is the most appropriate next step for her pain?",
        options: ["Give lorazepam 1 mg SL", "Give morphine 2 mg IV and reassess", "Give morphine 10 mg IV as one bolus", "Reassess her pain in 2 hours", "Wait for the acetaminophen to act"],
        correct: 1,
        explanation:
          "Her pain is still 6 out of 10 while she is alert with a normal respiratory rate, so a further small IV dose followed by reassessment is the correct titration step. Morphine 10 mg as one bolus risks oversedation and hypoventilation, which also threatens fetal oxygenation. Reassessing in 2 hours, or waiting for acetaminophen alone, leaves her pain undertreated. Lorazepam treats anxiety, not pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "The fracture is splinted and orthopedics arranges clinic follow-up in 1 week. She asks what she can take for pain at home.",
        prompt: "Which of the following discharge analgesic plans is most appropriate for her?",
        options: [
          "Codeine and acetaminophen for 14 days",
          "Ibuprofen 400 mg PO every 6 hours",
          "Naproxen 500 mg PO twice daily",
          "Oxycodone controlled release 10 mg",
          "Scheduled acetaminophen, 3-day opioid",
        ],
        correct: 4,
        explanation:
          "Scheduled acetaminophen with a small supply of immediate-release opioid for the first few days matches the expected course of her pain. A duration of 3 days or less is often enough for acute pain, and more than 7 days is rarely needed. Ibuprofen and naproxen remain contraindicated in the third trimester. A 14-day codeine supply exceeds what acute fracture pain usually needs. A controlled-release opioid should not be started for acute pain in an opioid-naive patient.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "hqo-acute-opioids",
      },
    ],
    sources: [HC_NSAID, TINT, HQO],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-19",
    topic: TOPIC,
    title: "Painful swelling on the buttock",
    stem:
      "A 36-year-old man presents to the emergency department with 4 days of a painful, enlarging swelling on his left buttock. He has schizophrenia, stable on clozapine for 6 years, and no other medical history. He last ate 5 hours ago. He rates his pain 8 out of 10. There is an 8 cm fluctuant, indurated abscess with surrounding redness. He has a Mallampati class I view, full neck movement and normal teeth. The surgical resident tried local infiltration, but he could not tolerate the incision. You plan procedural sedation for incision and drainage.",
    vitals: { temperature: "37.9°C oral", pulse: "102/minute", resp: "18/minute", bp: "128/80 mmHg", o2sat: "98% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his presentation is most relevant to your choice of sedative agent?",
        options: ["Abscess size of 8 cm", "Last meal 5 hours ago", "Low-grade temperature of 37.9°C", "Mallampati class I airway", "Schizophrenia on clozapine"],
        correct: 4,
        explanation:
          "The 2011 emergency department ketamine guideline lists known or suspected schizophrenia as a contraindication to ketamine, even when the illness is stable, because ketamine can worsen psychosis. That rules out the usual dissociative choice and points to another agent such as propofol. A Mallampati class I view and full neck movement predict an easy airway. A meal 5 hours ago does not require delay. The abscess size and a low-grade fever do not change the agent.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "green-ketamine-2011",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following sedation regimens best provides both sedation and analgesia for this drainage?",
        options: ["etomidate 0.15 mg/kg IV alone", "ketamine 1 mg/kg IV alone", "midazolam 0.05 mg/kg IV, repeated", "propofol 1 mg/kg IV alone", "propofol plus fentanyl 1 mcg/kg"],
        correct: 4,
        explanation:
          "Propofol is an effective sedative with no analgesic effect, so a small dose of fentanyl, about 80 mcg for 82 kg, ensures analgesia for a painful drainage. Propofol, etomidate or midazolam alone would sedate him without treating pain he already rates 8 out of 10. Ketamine provides both, but his schizophrenia makes it contraindicated.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "miner-propofol",
      },
      {
        id: "q3",
        kind: "menu",
        update: "He receives fentanyl 80 mcg IV, then propofol. Ninety seconds after the second propofol dose his chest stops moving. The capnography waveform is flat and his O2 sat falls from 98% to 91%.",
        prompt: "Which of the following are the most appropriate immediate interventions for this event?",
        select: 2,
        options: ["Bag-mask ventilation", "flumazenil 0.2 mg IV", "Jaw thrust manoeuvre", "naloxone 0.4 mg IV", "Rapid sequence intubation", "succinylcholine 1.5 mg/kg IV"],
        correct: [0, 2],
        explanation:
          "No chest movement with a flat capnography waveform means apnea, a common and usually brief effect of propofol. A jaw thrust opens the airway, and bag-mask ventilation with oxygen supports him until spontaneous breathing returns. Propofol has no reversal agent, and flumazenil reverses only benzodiazepines, which he did not receive. Naloxone is not the first step for apnea after propofol. Intubation and succinylcholine are not needed when bag-mask ventilation works.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "miner-propofol",
      },
      {
        id: "q4",
        kind: "single",
        update: "He resumes breathing and the drainage is completed. Thirty minutes later he is alert and oriented with normal vital signs. He plans to drive himself home.",
        prompt: "Which of the following discharge instructions is most appropriate for him after this sedation?",
        options: [
          "Drive home after 1 hour of observation",
          "Leave alone by taxi if he feels well",
          "Leave with an adult and do not drive",
          "Resume clozapine only after 48 hours",
          "Stay 6 hours for delayed apnea",
        ],
        correct: 2,
        explanation:
          "After propofol and fentanyl he should leave with a responsible adult and should not drive, operate machinery or make important decisions for the rest of the day, because subtle impairment outlasts apparent recovery. Driving after an hour or leaving alone ignores that impairment. Propofol is short acting, so a routine 6-hour stay for delayed apnea is not needed once he is back to baseline. There is no reason to hold clozapine for 48 hours.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "tintinalli",
      },
    ],
    sources: [GREEN11, MINER07, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-20",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Knee injury on the soccer field",
    stem:
      "A 19-year-old woman is brought to the emergency department by ambulance after twisting her left knee while playing soccer 40 minutes ago. She felt her kneecap shift out of place. She had one previous dislocation of the same knee. She is healthy, takes no medications and has not used alcohol or drugs. She rates her pain 9 out of 10. The left knee is held flexed with the patella displaced laterally. Distal pulses are normal. Paramedics gave no analgesia.",
    vitals: { temperature: "36.8°C oral", pulse: "112/minute", resp: "20/minute", bp: "128/78 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic to allow a prompt reduction of her patella?",
        options: ["acetaminophen 1 g PO", "ibuprofen 400 mg PO", "methoxyflurane 3 mL inhaled", "morphine 10 mg IM", "propofol sedation 1 mg/kg IV"],
        correct: 2,
        explanation:
          "A lateral patellar dislocation usually reduces with gentle knee extension once pain is controlled, so deep sedation is rarely needed. Self-administered inhaled methoxyflurane has a median onset of about 5 minutes and is authorized in Canada for moderate to severe trauma pain in conscious adults. Oral acetaminophen or ibuprofen will not act in time for 9 out of 10 pain. IM morphine is painful, slow and unpredictable. Propofol sedation adds airway risk for a brief reduction that analgesia alone usually allows.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "penthrox-pm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings, if present in her history, would contraindicate the use of methoxyflurane?",
        options: ["Malignant hyperthermia in family", "Mild penicillin allergy with rash", "Oral contraceptive use", "Previous patellar dislocation", "Seasonal allergic rhinitis"],
        correct: 0,
        explanation:
          "Methoxyflurane is a halogenated anesthetic, and a known or genetic susceptibility to malignant hyperthermia, or severe reactions in the patient or relatives, is a contraindication in its product monograph. Other contraindications include altered consciousness, clinically significant kidney impairment, hemodynamic instability and clinically evident respiratory impairment. A penicillin allergy, oral contraceptive use, allergic rhinitis and a previous dislocation do not affect its use.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "penthrox-pm",
      },
      {
        id: "q3",
        kind: "single",
        update: "She inhales methoxyflurane from one 3 mL bottle. After 10 minutes she rates her pain 6 out of 10. The reduction has not yet been attempted.",
        prompt: "Which of the following is the most appropriate next step for her analgesia before the reduction?",
        options: ["Add midazolam 2 mg IV", "Proceed with the reduction now", "Stop and give oral codeine", "Switch to propofol sedation", "Use a second 3 mL bottle"],
        correct: 4,
        explanation:
          "The monograph allows a second 3 mL bottle if the first does not give enough relief, up to 6 mL in a day. She still rates her pain 6 out of 10, so titrating further before the reduction is appropriate. Proceeding now would cause avoidable pain. Midazolam adds sedation, not analgesia, and the monograph advises avoiding methoxyflurane with CNS depressants. Codeine is weak and slow, and propofol sedation is unnecessary.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "penthrox-pm",
      },
      {
        id: "q4",
        kind: "single",
        update: "The patella reduces with knee extension. She is placed in a knee immobilizer and can walk with crutches.",
        prompt: "Which of the following home analgesic regimens is most appropriate for her over the next few days?",
        options: ["Codeine 30 mg with acetaminophen", "Methoxyflurane inhaler for home", "Oxycodone 5 mg PO every 4 hours as needed", "Regular ibuprofen and acetaminophen", "Tramadol 50 mg every 6 hours"],
        correct: 3,
        explanation:
          "For acute extremity pain in the emergency department, ibuprofen 400 mg with acetaminophen 1000 mg gave pain relief at 2 hours similar to combinations of acetaminophen with oxycodone, hydrocodone or codeine. It avoids opioid sedation, dependence and diversion, so codeine and oxycodone add harm without better relief. Tramadol shares those opioid risks and adds seizure and serotonergic risks. Methoxyflurane is for supervised, short-term use and is not suited to repeated pain at home.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "chang-2017",
      },
    ],
    sources: [PENTHROX, CHANG17],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-21",
    topic: TOPIC,
    title: "Toothache in the night",
    stem:
      "You are working in a rural hospital emergency department with no on-call dentist. A 33-year-old man presents at 02:00 with 2 days of worsening throbbing pain in a lower left molar. Cold water makes it worse and the pain keeps him awake. He took codeine with acetaminophen that a friend gave him and says it did nothing, as has happened with codeine prescriptions in the past. He has no medical history and no allergies. The lower left second molar has a deep cavity and is tender to percussion. There is no facial swelling, trismus or fever. He rates his pain 8 out of 10.",
    vitals: { temperature: "36.9°C oral", pulse: "92/minute", resp: "16/minute", bp: "134/82 mmHg", o2sat: "99% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his repeated lack of response to codeine in the past?",
        options: ["Drug-seeking behaviour", "Opioid tolerance from undisclosed misuse", "Poor CYP2D6 conversion to morphine", "Rapid kidney clearance of codeine", "Underdosing by his friend"],
        correct: 2,
        explanation:
          "Codeine is a prodrug that must be converted to morphine by CYP2D6, and people with low CYP2D6 activity get little analgesia from it. His lack of response on several occasions fits this pattern and should be taken at face value. Nothing in his history supports drug seeking or tolerance. Codeine is not cleared unusually fast by the kidneys. A low dose from a friend would not explain repeated failures with prescriptions.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most effective immediate treatment for his dental pain in the emergency department?",
        options: ["hydromorphone 1 mg IV", "Inferior alveolar nerve block", "ketorolac 30 mg IM", "Oral amoxicillin 500 mg", "Topical benzocaine gel on the gum"],
        correct: 1,
        explanation:
          "An inferior alveolar nerve block anaesthetises the lower teeth on that side and gives rapid, complete relief of pulpitis pain. IV hydromorphone and IM ketorolac give partial, shorter relief. Antibiotics do not relieve pulpitis pain when there is no swelling or fever. Topical benzocaine does not reach the pulp.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following local anesthetics will give the longest-lasting block for him until he sees a dentist?",
        options: [
          "Bupivacaine 0.5% with epinephrine",
          "Lidocaine 2% with epinephrine",
          "Lidocaine 1% without epinephrine",
          "Mepivacaine 3% without epinephrine",
          "Tetracaine 4% topical gel",
        ],
        correct: 0,
        explanation:
          "Bupivacaine is a long-acting amide, and in dental nerve blocks bupivacaine with epinephrine gives the longest anesthesia, often many hours, which can carry him until he sees a dentist. Lidocaine and mepivacaine give shorter blocks, and plain solutions wear off sooner than those with epinephrine. Topical tetracaine does not produce a nerve block.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following oral regimens is most appropriate for his pain at home until he sees a dentist?",
        options: [
          "Acetaminophen 650 mg PO alone",
          "Codeine 60 mg with acetaminophen",
          "Ibuprofen 400 mg with acetaminophen",
          "Oxycodone 5 mg with acetaminophen 325 mg",
          "Tramadol 50 mg PO every 6 hours",
        ],
        correct: 2,
        explanation:
          "In an overview of systematic reviews, ibuprofen 400 mg combined with acetaminophen 1000 mg was among the most effective regimens for acute dental pain, and it outperformed opioid-containing combinations. Codeine has already failed him. Oxycodone and tramadol add opioid harms without better relief. Acetaminophen alone is less effective than the combination.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "moore-dental",
      },
    ],
    sources: [TINT, RH, MOORE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-22",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Quiet man after a bicycle fall",
    stem:
      "You are working in a community hospital emergency department. A 71-year-old man is brought by his son after falling from his bicycle onto his right shoulder 3 hours ago. He speaks Mandarin and little English. His son translates and says his father is fine and does not want to be a bother. He has hypertension treated with amlodipine and normal kidney function on recent testing. He sits very still, supporting his right arm. There is swelling and tenderness over the middle of the right clavicle with intact skin. X-ray shows a displaced midshaft clavicle fracture. The neurovascular examination is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "78/minute", resp: "16/minute", bp: "150/86 mmHg", o2sat: "97% on room air", weight: "68 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the best way to assess the severity of his pain?",
        options: ["Infer it from his vital signs", "Numeric scale through his son", "Numeric scale via an interpreter", "Observe his facial expression only", "Wait until he reports pain himself"],
        correct: 2,
        explanation:
          "He can self-report if he has language access, and self-report is the reference standard for pain. A trained medical interpreter avoids the filtering seen here, where his son says he is fine. Vital signs are a poor guide to pain intensity. Observation alone is a fallback for patients who cannot self-report. Waiting for him to ask may leave pain untreated in a patient who does not want to be a bother.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update: "Through the interpreter he rates his pain 8 out of 10. The triage nurse notes his pulse of 78/minute and asks whether the pain is really severe.",
        prompt: "Which of the following statements about his vital signs and his pain is most accurate?",
        options: [
          "A normal pulse rules out severe pain",
          "Amlodipine is blunting his heart rate",
          "His blood pressure confirms severe pain",
          "Older adults overstate their pain",
          "Vital signs correlate poorly with pain",
        ],
        correct: 4,
        explanation:
          "In emergency patients with painful diagnoses, heart rate, BP and respiratory rate showed no clinically useful association with self-reported pain, so his rating of 8 out of 10 should drive treatment. A normal pulse does not rule out severe pain. His BP of 150/86 may reflect his hypertension, so it cannot confirm severity. Amlodipine is a dihydropyridine calcium channel blocker and does not slow the heart rate. There is no basis for assuming that older adults overstate pain.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "marco-vitals",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following initial analgesic plans is most appropriate for his clavicle fracture?",
        options: ["Codeine 60 mg PO every 4 hours with a sling", "Figure-of-eight brace without drugs", "Ketorolac 60 mg IV with a sling", "Morphine 10 mg IV bolus with a sling", "Sling, acetaminophen, low-dose opioid"],
        correct: 4,
        explanation:
          "A sling supports the fracture, and acetaminophen with a small titrated opioid dose, such as hydromorphone 0.5 mg IV, treats 8 out of 10 pain while limiting sedation at 71 years. Morphine 10 mg as a single bolus is too large a starting dose at his age. Ketorolac 60 mg is a high dose that raises bleeding and kidney risk at his age. Codeine gives unreliable analgesia because it depends on activation by CYP2D6. A figure-of-eight brace without analgesia leaves severe pain untreated.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "chang-older",
      },
      {
        id: "q4",
        kind: "single",
        update: "He receives acetaminophen 1 g PO and hydromorphone 0.5 mg IV. Fifteen minutes later he says through the interpreter that his pain is 6 out of 10 and asks for more.",
        prompt: "Which of the following is the most appropriate next step for his pain?",
        options: ["Give hydromorphone 0.5 mg IV now", "Give hydromorphone 2 mg IV now", "Give lorazepam 0.5 mg SL", "Reassess him again in 2 hours", "Tell him the fracture needs time"],
        correct: 0,
        explanation:
          "His pain has fallen only from 8 to 6 out of 10 and he wants more, so a repeat 0.5 mg dose is the next titration step. Asking whether the patient wants more pain medication at fixed intervals, and giving another dose when the answer is yes, gave satisfactory analgesia in most patients with few adverse effects. Hydromorphone 2 mg is a fourfold jump for a 71-year-old. Waiting 2 hours or reassuring him leaves pain untreated, and lorazepam does not relieve pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "chang-titration",
      },
    ],
    sources: [TINT, MARCO, CHANG13, CHANG16],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-23",
    topic: TOPIC,
    title: "Back pain after lifting drywall",
    stem:
      "A 41-year-old man presents to the emergency department with low back pain that began yesterday while he lifted drywall at work. The pain is across the lower lumbar area and into the left buttock. He has no leg weakness, numbness, or bladder or bowel symptoms. He has no history of cancer, injection drug use or fever. He takes no medications and has no kidney disease or ulcers. He rates his pain 7 out of 10 and cannot bend to put on his shoes. There is left paraspinal tenderness with normal leg strength, sensation and reflexes, and a negative straight leg raise.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "138/84 mmHg", o2sat: "99% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic plan for his acute low back pain?",
        options: [
          "Diazepam 5 mg PO three times daily",
          "Naproxen 500 mg PO twice daily",
          "Naproxen with cyclobenzaprine",
          "Naproxen with oxycodone-acetaminophen",
          "Oxycodone with acetaminophen alone",
        ],
        correct: 1,
        explanation:
          "In emergency patients with acute nonradicular low back pain, adding cyclobenzaprine or oxycodone with acetaminophen to naproxen did not improve pain or function at 1 week. Naproxen alone is effective, and he has no kidney disease or ulcer history. The added drugs bring sedation and dependence risks with no gain. Diazepam sedates without adding analgesia. Oxycodone without naproxen gives up the NSAID and adds opioid harms.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "friedman-back",
      },
      {
        id: "q2",
        kind: "single",
        update: "He asks for something stronger because a coworker received oxycodone for a similar injury.",
        prompt: "Which of the following is the most appropriate response to his request for a stronger analgesic?",
        options: ["Discharge him without any analgesic", "Give oxycodone to maintain trust", "Order lumbar MRI to reassure him", "Refer him to a pain clinic", "Review the expected course with him"],
        correct: 4,
        explanation:
          "Taking his preference seriously means explaining that acute low back pain usually improves over weeks and that adding oxycodone to naproxen did not improve pain or function at 1 week in a randomized trial. Giving oxycodone to maintain trust adds harm without benefit. An MRI is not indicated without red flags and does not relieve pain. A pain clinic referral is premature for pain that began yesterday, and discharge with no analgesic ignores his 7 out of 10 pain.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "friedman-back",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following nondrug measures are most appropriate to recommend for his back pain at home?",
        select: 2,
        options: [
          "Bed rest for 3 to 5 days",
          "Daily lumbar traction at home",
          "Lumbar brace worn at all times",
          "Remaining active within pain limits",
          "Strict avoidance of work for a month",
          "Superficial heat to the lower back",
        ],
        correct: [3, 5],
        explanation:
          "Staying active within pain limits speeds recovery compared with bed rest for acute low back pain, and superficial heat is a reasonable adjunct for short-term relief. Bed rest, a brace worn all day and a month off work all encourage deconditioning and delay return to function. Traction has no proven benefit.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tintinalli",
      },
    ],
    sources: [FRIEDMAN, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-24",
    topic: TOPIC,
    title: "Sudden back pain in an older woman",
    stem:
      "An 86-year-old woman presents to the emergency department with sudden severe mid back pain that began 6 hours ago when she lifted a bag of potting soil. She has osteoporosis, chronic kidney disease with an eGFR of 32 mL/minute, and mild cognitive impairment. She takes alendronate, amlodipine and vitamin D. She lives alone and walks with a cane. She rates her pain 8 out of 10 and answers questions appropriately. There is tenderness over the T12 spinous process with normal leg strength and sensation. X-ray shows a new T12 compression fracture with 25% loss of height and an intact posterior wall.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "18/minute", bp: "154/80 mmHg", o2sat: "96% on room air", weight: "48 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following oral agents is the best scheduled baseline analgesic for her?",
        options: ["acetaminophen 650 mg PO every 6 hours", "codeine 30 mg PO every 4 hours", "ibuprofen 400 mg PO every 6 hours", "naproxen 500 mg PO twice daily with food", "tramadol 50 mg PO every 6 hours"],
        correct: 0,
        explanation:
          "Scheduled acetaminophen is the safest baseline analgesic for an 86-year-old with an eGFR of 32 mL/minute, and 650 mg every 6 hours is 2.6 g a day, a cautious total for her weight of 48 kg. Ibuprofen and naproxen can worsen her kidney function and raise bleeding risk. Codeine depends on variable activation by CYP2D6, and its metabolites accumulate in kidney disease. Tramadol lowers the seizure threshold and can cause delirium and hyponatremia in older adults.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update: "Thirty minutes after acetaminophen she still rates her pain 8 out of 10 and cannot sit up. Resp. is 18/minute and she is alert.",
        prompt: "Which of the following is the most appropriate IV opioid regimen for her now?",
        options: ["hydromorphone 2 mg IV every 4 hours", "hydromorphone 0.5 mg IV, then titrate", "meperidine 50 mg IV every 3 hours as needed", "morphine 5 mg IV every 4 hours", "morphine 10 mg SC every 4 hours"],
        correct: 1,
        explanation:
          "In older emergency patients, hydromorphone 0.5 mg IV followed by further 0.5 mg doses on request gave effective relief with few adverse events. Small titrated doses suit her age, her weight of 48 kg and her reduced kidney function. Morphine has an active metabolite that accumulates with an eGFR of 32 mL/minute, and fixed doses of 5 or 10 mg are large for her. Hydromorphone 2 mg every 4 hours is a fixed high dose without titration. Meperidine has a neurotoxic metabolite and is not recommended.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "chang-older",
      },
      {
        id: "q3",
        kind: "menu",
        update: "Her pain improves to 3 out of 10 after 1 mg of hydromorphone in total. She can walk to the bathroom with her cane. She wishes to go home, where her daughter will stay with her.",
        prompt: "Which of the following should be part of her discharge analgesic plan from the emergency department?",
        select: 3,
        options: [
          "Bowel regimen with a laxative",
          "Celecoxib 200 mg PO daily",
          "Codeine with acetaminophen",
          "Scheduled acetaminophen",
          "Short supply of low-dose hydromorphone",
          "Strict bed rest for 1 week",
          "Tramadol 50 mg every 6 hours",
          "Zopiclone at bedtime for sleep",
        ],
        correct: [0, 3, 4],
        explanation:
          "Scheduled acetaminophen, a small supply of low-dose immediate-release hydromorphone for breakthrough pain and a laxative to prevent opioid constipation make a safe plan for an 86-year-old with kidney disease. Celecoxib still carries kidney risk with an eGFR of 32 mL/minute. Codeine relies on variable activation by CYP2D6, and tramadol can cause delirium and hyponatremia. Bed rest promotes deconditioning, and zopiclone adds fall and delirium risk.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tintinalli",
      },
    ],
    sources: [TINT, CHANG13],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-25",
    topic: TOPIC,
    alsoTopics: ["pediatric-fever"],
    title: "Feverish infant needing procedures",
    stem:
      "A 7-week-old girl is brought to the emergency department by her parents with a fever of 38.6°C at home and poor feeding for 12 hours. She was born at 39 weeks and has been well. She is breastfed. She is fussy but consolable, with a flat fontanelle and no rash. Blood work and a catheter urine sample are planned, and you plan a lumbar puncture. Her mother asks how her baby's pain will be managed during these procedures.",
    vitals: { temperature: "38.4°C rectal", pulse: "172/minute", resp: "44/minute", o2sat: "98% on room air", weight: "4.6 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following measures most effectively reduce her pain during these needle procedures?",
        select: 3,
        options: [
          "Breastfeeding during the procedure",
          "Intranasal fentanyl 1.5 mcg/kg",
          "Intranasal midazolam 0.2 mg/kg",
          "Oral acetaminophen 15 mg/kg",
          "Oral ibuprofen 10 mg/kg",
          "Oral sucrose 24% solution",
          "Topical anesthetic cream",
        ],
        correct: [0, 5, 6],
        explanation:
          "For infants, the Canadian Paediatric Society recommends sweet solutions or breastfeeding combined with a topical anesthetic for needle procedures. Breastfeeding combines sucking, skin contact and sweet taste, and 24% sucrose works when breastfeeding is not possible during the procedure. Topical anesthetic cream reduces needle pain when applied in advance. Acetaminophen does not relieve procedural pain, and ibuprofen is not used under 6 months of age. Intranasal fentanyl and midazolam add respiratory risk and are not needed for these brief procedures.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cps-procedures",
      },
      {
        id: "q2",
        kind: "single",
        update: "The nurse asks how long before the lumbar puncture the lidocaine-prilocaine cream should be applied.",
        prompt: "Which of the following application times is most appropriate for the cream before her lumbar puncture?",
        options: ["5 minutes", "15 minutes", "30 minutes", "60 minutes", "180 minutes"],
        correct: 3,
        explanation:
          "Lidocaine-prilocaine cream needs about 60 minutes under an occlusive dressing to anaesthetise the skin, so it should be applied as soon as the lumbar puncture is planned. Shorter times give incomplete anesthesia. A much longer application adds no benefit in a young infant and increases the amount absorbed, and prilocaine can cause methemoglobinemia.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cps-procedures",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes the most helpful role for her parents during these procedures?",
        options: ["Allow them in for blood work only", "Ask them to leave for every procedure", "Encourage them to comfort her", "Have them hold her down firmly", "Let them watch from the doorway"],
        correct: 2,
        explanation:
          "Parents who stay and comfort their infant, with skin-to-skin contact, holding or breastfeeding where the procedure allows, reduce the infant's distress, and most parents want to be present. Sending them out removes an effective comfort measure. Asking parents to restrain their own child increases distress for both. Watching from the doorway gives none of the benefit of touch or feeding.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cps-procedures",
      },
    ],
    sources: [CPS19],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-26",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Skateboard fall in a young teen",
    stem:
      "A 12-year-old girl presents to the emergency department with her mother after falling on her outstretched right hand while skateboarding 2 hours ago. X-ray shows displaced, angulated fractures of the distal radius and ulna that need closed reduction. She has mild asthma, uses salbutamol about once a month and has had no symptoms this week. She has never been sedated. She ate a granola bar 3 hours ago. She received intranasal fentanyl at triage and now rates her pain 5 out of 10. Her chest is clear and her airway examination is normal. You plan ketamine sedation.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "112/70 mmHg", o2sat: "99% on room air", weight: "42 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes her American Society of Anesthesiologists physical status class?",
        options: ["ASA I", "ASA II", "ASA III", "ASA IV", "ASA V"],
        correct: 1,
        explanation:
          "Mild asthma that is well controlled is a mild systemic disease without functional limitation, which is ASA class II. ASA I is a healthy patient with no systemic disease. ASA III requires severe systemic disease, such as asthma with a current exacerbation. Classes IV and V describe a constant threat to life and a moribund patient. Patients in ASA classes I and II are good candidates for emergency department sedation.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "asa-ps",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate decision about proceeding with her ketamine sedation now?",
        options: [
          "Delay until asthma is reviewed",
          "Delay until 6 hours after she ate",
          "Give prophylactic atropine and proceed",
          "Proceed now with ketamine sedation",
          "Use propofol because of her asthma",
        ],
        correct: 3,
        explanation:
          "Her asthma is mild and quiet with a clear chest, so it is not the active pulmonary disease that the ketamine guideline lists as a relative contraindication. A snack 3 hours ago is not a reason to delay an emergency procedure. Ketamine suits a painful reduction because it gives analgesia and sedation together. Routine anticholinergic premedication is not recommended. Switching to propofol offers no advantage for inactive asthma and gives up ketamine's analgesia.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "green-ketamine-2011",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial IV ketamine dose for her sedation?",
        options: ["ketamine 21 mg IV", "ketamine 42 mg IV", "ketamine 63 mg IV", "ketamine 105 mg IV", "ketamine 168 mg IV"],
        correct: 2,
        explanation:
          "The pediatric IV dose for ketamine dissociative sedation is 1.5 to 2 mg/kg given over 30 to 60 seconds, so 1.5 mg/kg for 42 kg is 63 mg. 21 mg and 42 mg are 0.5 and 1 mg/kg, which may not produce dissociation in a child. 105 mg is 2.5 mg/kg, an unusually high initial dose that raises the risk of vomiting. 168 mg is 4 mg/kg, which is an IM dose.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "green-ketamine-2011",
      },
      {
        id: "q4",
        kind: "single",
        update: "The reduction goes well. Forty minutes later, as she is waking, she vomits twice. Her airway is clear and her O2 sat is 98% on room air.",
        prompt: "Which of the following is the most appropriate management of her vomiting during recovery?",
        options: ["Admit her for aspiration pneumonia", "Give naloxone 0.1 mg/kg IV", "Obtain a chest X-ray now", "Ondansetron and observation", "Start IV antibiotics now"],
        correct: 3,
        explanation:
          "Vomiting during ketamine recovery is common, and early adolescence is the peak age for it. Ondansetron and observation are appropriate while her airway is clear and her O2 sat is 98%. With no respiratory signs, aspiration is unlikely, so a chest X-ray, antibiotics and admission are not needed. Naloxone does not reverse ketamine.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "green-ketamine-2011",
      },
    ],
    sources: [ASAPS, GREEN11],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-27",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Deformed ankle in a man with a heart murmur",
    stem:
      "A 78-year-old man presents to the emergency department after tripping on a curb 1 hour ago. His left ankle is grossly deformed and the skin over the medial malleolus is tented and pale. The foot is cool with a weak dorsalis pedis pulse. He has severe aortic stenosis with a valve area of 0.7 cm2 and is awaiting valve replacement. He becomes short of breath after walking one block. He takes furosemide and ramipril. He rates his pain 9 out of 10. There is a harsh systolic murmur. X-ray shows an ankle fracture-dislocation. Urgent reduction is needed.",
    vitals: { temperature: "36.5°C oral", pulse: "92/minute", resp: "18/minute", bp: "118/74 mmHg", o2sat: "95% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the greatest risk to him during procedural sedation for the reduction?",
        options: ["Aspiration of gastric contents", "Emergence delirium", "Hypotension and collapse", "Laryngospasm on induction", "Malignant hyperthermia"],
        correct: 2,
        explanation:
          "Severe aortic stenosis fixes his cardiac output, so a fall in vascular resistance from sedatives can cause hypotension, reduced coronary perfusion and collapse. His exertional dyspnea and a valve area of 0.7 cm2 mark severe disease. Laryngospasm is rare in adult sedation. Malignant hyperthermia is triggered by volatile anesthetics and succinylcholine, not by sedative agents. He has no stated recent meal, and emergence reactions are unpleasant but rarely dangerous.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following approaches best balances analgesia and hemodynamic safety for his reduction?",
        options: ["etomidate plus fentanyl, titrated", "hydromorphone 4 mg IV bolus alone", "ketamine 2 mg/kg IV bolus alone", "midazolam 5 mg IV bolus alone", "propofol 1 mg/kg IV bolus alone"],
        correct: 0,
        explanation:
          "Etomidate causes little change in BP, which suits his fixed cardiac output, and it can be used safely for adult emergency sedation. It has no analgesic effect, so small fentanyl doses given first provide the analgesia the reduction needs. Propofol and a large midazolam bolus lower vascular resistance and can cause hypotension. Ketamine raises heart rate and myocardial oxygen demand, which severe aortic stenosis tolerates poorly. A 4 mg hydromorphone bolus alone risks hypotension and apnea without reliable sedation.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "acep-psa-2014",
      },
      {
        id: "q3",
        kind: "single",
        update: "During the etomidate sedation he develops jerking movements of his arms and legs for 20 seconds. His O2 sat is 96% and BP is 112/70.",
        prompt: "Which of the following is the most likely cause of the jerking movements during his sedation?",
        options: ["Emergence reaction", "Fentanyl chest wall rigidity", "Generalized tonic-clonic seizure", "Hypoxic brain injury", "Myoclonus from etomidate"],
        correct: 4,
        explanation:
          "Myoclonus is a common effect of etomidate, seen in about a fifth of emergency department sedations in a randomized trial, and it is usually brief and harmless. He stays well oxygenated with a stable BP, which argues against hypoxic injury. Chest wall rigidity stiffens the trunk and impairs ventilation rather than causing limb jerking. A seizure is unlikely in a brief episode with normal oxygenation. Emergence reactions occur on waking, mainly after ketamine.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "miner-etomidate",
      },
      {
        id: "q4",
        kind: "single",
        update: "The ankle is reduced and the foot is warm with a strong pulse. Twenty minutes later he is drowsy but rousable. BP is 104/64 and O2 sat is 95%.",
        prompt: "Which of the following is the most appropriate monitoring plan until he returns to his baseline?",
        options: [
          "Cardiac monitor, oximetry and frequent BP",
          "Hourly vital signs on the orthopedic ward",
          "Pulse oximetry spot checks every hour",
          "Vital signs once before admission",
          "No monitoring after the procedure",
        ],
        correct: 0,
        explanation:
          "Monitoring continues until he is back to baseline, because the risks of hypoventilation and hypotension persist after the procedure ends and stimulation stops. With severe aortic stenosis and a BP drifting to 104/64, he needs continuous cardiac monitoring and oximetry with frequent BP checks. Hourly or spot checks can miss evolving events, and transfer to a ward should wait until he has recovered.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "asa-moderate-sedation",
      },
    ],
    sources: [TINT, ACEP14, MINER_ETOM, ASA18],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-28",
    topic: TOPIC,
    alsoTopics: ["multiple-trauma"],
    title: "Fall from scaffolding",
    stem:
      "A 45-year-old man is brought to the emergency department by ambulance after falling 3 m from scaffolding onto his left side 1 hour ago. He has left chest pain that is worse with breathing. He is alert and oriented. He has no medical history and takes no medications. Breath sounds are reduced at the left base. Point of care ultrasound shows a large left hemothorax and no pericardial fluid. He has received 1 L of crystalloid. He rates his pain 9 out of 10. You plan a left tube thoracostomy.",
    vitals: { temperature: "36.4°C oral", pulse: "118/minute", resp: "26/minute", bp: "98/64 mmHg", o2sat: "92% on 6 L/minute by nasal prongs", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate systemic analgesic for him before the chest tube is inserted?",
        options: ["ketamine 0.3 mg/kg IV", "ketorolac 30 mg IV", "midazolam 2 mg IV", "morphine 15 mg IV push", "propofol 1 mg/kg IV"],
        correct: 0,
        explanation:
          "Sub-dissociative ketamine at 0.3 mg/kg, 24 mg for 80 kg, gave pain relief comparable to IV morphine in emergency patients, and ketamine does not lower BP, which matters with a BP of 98/64 and a large hemothorax. Morphine 15 mg is a large bolus that can cause hypotension. Ketorolac impairs platelet function in a bleeding patient. Midazolam and propofol sedate without analgesia, and both can lower his BP.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "motov-ketamine",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following structures most need local anesthetic infiltration to reduce the pain of his chest tube?",
        select: 2,
        options: [
          "Intercostal muscle only",
          "Lung parenchyma at the base",
          "Parietal pleura",
          "Periosteum of the rib",
          "Skin at the incision only",
          "Visceral pleura over the lung",
        ],
        correct: [2, 3],
        explanation:
          "The parietal pleura and the rib periosteum are richly innervated, so generous infiltration of both, along the upper border of the rib, reduces the pain of blunt dissection and tube insertion. Anaesthetising only the skin or the muscle leaves the most painful steps untreated. The visceral pleura and lung have no somatic pain fibres, so infiltrating them adds nothing.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings most increases his risk of complications from procedural sedation?",
        options: ["Absence of prior medical illness", "Alert mental status on arrival", "BP 98/64 and pulse 118/minute", "Left chest pain on breathing", "Pain rated 9 out of 10"],
        correct: 2,
        explanation:
          "A pulse of 118/minute with a BP of 98/64 despite 1 L of crystalloid suggests ongoing blood loss, and sedatives can remove his compensatory sympathetic drive and cause hypotension. That makes hemodynamic risk the key finding in his pre-sedation assessment, and it favours local anesthesia with titrated analgesia over deep sedation. His alert state and lack of illness lower his risk. His chest pain and pain score guide analgesia but are not sedation risk factors.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "single",
        update: "The chest tube drains 900 mL of blood. He rates his pain 6 out of 10 and asks for more analgesia. BP is 108/70.",
        prompt: "Which of the following is the most appropriate next analgesic for him after the chest tube?",
        options: ["fentanyl 250 mcg IV", "fentanyl 50 mcg IV", "ketorolac 30 mg IV", "lorazepam 1 mg IV", "meperidine 75 mg IM"],
        correct: 1,
        explanation:
          "Fentanyl in small doses, 50 mcg for 80 kg being about 0.6 mcg/kg, gives rapid titratable analgesia with little effect on BP and can be repeated. 250 mcg is about 3 mcg/kg at once and risks apnea and chest wall rigidity. Ketorolac remains unwise with active bleeding. Lorazepam does not treat pain, and IM meperidine is painful, erratic and has a neurotoxic metabolite.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [MOTOV, RH, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-29",
    topic: TOPIC,
    alsoTopics: ["multiple-trauma"],
    title: "Intubated after a highway crash",
    stem:
      "A 34-year-old woman is brought to the emergency department after a high-speed car crash. She was intubated on arrival for hypoxia from a left flail chest, using ketamine 150 mg and rocuronium 100 mg IV 15 minutes ago. CT shows bilateral pulmonary contusions, an unstable pelvic fracture and bilateral femur fractures. CT of the head is normal. A pelvic binder is in place and she has received 2 units of packed red cells. No sedative or analgesic infusion is running yet.",
    vitals: { temperature: "36.2°C core", pulse: "124/minute", resp: "16/minute", bp: "134/86 mmHg", o2sat: "99% on 40% oxygen by ventilator", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate infusion to start first for her now?",
        options: [
          "dexmedetomidine 0.5 mcg/kg/hour",
          "fentanyl 50 mcg/hour IV",
          "midazolam 2 mg/hour IV",
          "propofol 20 mcg/kg/minute IV",
          "rocuronium 0.6 mg/kg/hour IV",
        ],
        correct: 1,
        explanation:
          "With a pelvic fracture and bilateral femur fractures she has severe pain that she cannot report, and rocuronium hides any movement. An analgesia-first approach starts an opioid infusion such as fentanyl before adding a sedative. 50 mcg/hour is about 0.7 mcg/kg/hour at 70 kg. Propofol, dexmedetomidine and midazolam sedate without adequate analgesia for her fractures. A rocuronium infusion adds paralysis without comfort and raises the risk of unrecognized awareness.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "padis",
      },
      {
        id: "q2",
        kind: "single",
        update: "Twenty minutes later the rocuronium is still active. Her pulse rises to 138/minute and BP to 168/98. The fentanyl infusion is running.",
        prompt: "Which of the following is the most appropriate response to the change in her vital signs?",
        options: ["Bolus fentanyl and start propofol", "Give labetalol 10 mg IV", "Give more rocuronium", "Increase the ventilator rate", "Order repeat CT of chest and abdomen"],
        correct: 0,
        explanation:
          "In a paralysed patient a sudden rise in pulse and BP may be the only sign of pain or awareness, since she cannot move or speak. The right response is to deepen analgesia with a fentanyl bolus and add a sedative such as propofol. Labetalol would hide the warning sign without treating its cause. More rocuronium deepens paralysis while she may be aware. Changing the ventilator rate or repeating CT does not address the likely cause.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "padis",
      },
      {
        id: "q3",
        kind: "single",
        update: "The rocuronium has worn off. She is on fentanyl and propofol infusions. She grimaces and fights the ventilator when she is turned.",
        prompt: "Which of the following is the most appropriate tool to assess her pain while she is intubated?",
        options: [
          "Critical-Care Pain Observation Tool",
          "FLACC behavioural scale",
          "Numeric rating scale",
          "Pain Assessment in Advanced Dementia",
          "Richmond Agitation-Sedation Scale",
        ],
        correct: 0,
        explanation:
          "For adults who cannot self-report, including intubated patients, the PADIS guideline recommends the Critical-Care Pain Observation Tool or the Behavioral Pain Scale. The tool scores facial expression, body movements, muscle tension and ventilator compliance, which match her grimacing and fighting the ventilator. The Richmond scale measures agitation and sedation, not pain. A numeric scale needs self-report. FLACC is for young children and PAINAD is for advanced dementia.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "padis",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following sedation targets is most appropriate for her once her pain is controlled?",
        options: [
          "Continuous paralysis with sedation",
          "Deep sedation, RASS of -4",
          "Light sedation, RASS 0 to -2",
          "Sedation titrated to BP",
          "No sedation, restraints only",
        ],
        correct: 2,
        explanation:
          "Once analgesia is adequate, the PADIS guideline suggests light rather than deep sedation, such as a Richmond Agitation-Sedation Scale target of 0 to -2, because it is linked to a shorter time on the ventilator. Deep sedation and ongoing paralysis are not needed for her injuries. BP is an unreliable sedation target. Restraints without sedation leave her distressed and at risk of self-extubation.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "padis",
      },
    ],
    sources: [PADIS],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-30",
    topic: TOPIC,
    alsoTopics: ["delirium-agitation", "tox"],
    title: "Combative man after a balcony jump",
    stem:
      "A 27-year-old man is brought to the emergency department by police and paramedics after jumping from a second-floor balcony. He says he used methamphetamine tonight. He is shouting, swinging at staff and trying to leave, and verbal de-escalation has failed. He cannot be reasoned with. His right ankle is deformed with bone visible through a 3 cm wound. There is no IV in place. His weight is estimated.",
    vitals: { temperature: "37.8°C tympanic", pulse: "136/minute", resp: "24/minute", bp: "162/94 mmHg", o2sat: "97% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate agent to control his agitation given his open fracture?",
        options: ["haloperidol 5 mg IM", "ketamine 400 mg IM", "lorazepam 2 mg IM", "morphine 10 mg IM", "olanzapine 10 mg IM"],
        correct: 1,
        explanation:
          "He needs rapid control for his safety and the staff's, and his open fracture is a major source of pain. Ketamine 5 mg/kg IM, 400 mg for 80 kg, produced adequate sedation in a median of 5 minutes compared with 17 minutes for haloperidol, and it also provides analgesia. Haloperidol, olanzapine and lorazepam may calm him but act more slowly and leave the fracture pain untreated. Morphine alone gives analgesia but will not control severe agitation.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "cole-agitation",
      },
      {
        id: "q2",
        kind: "menu",
        update: "Five minutes after IM ketamine he is dissociated and calm. An IV is placed.",
        prompt: "Which of the following are the most important to monitor continuously for him during the next hour?",
        select: 3,
        options: [
          "Blood glucose every hour",
          "Capnography",
          "Cardiac rhythm and BP",
          "Continuous pulse oximetry",
          "Pupil size every 15 minutes",
          "Serum ketamine level",
          "Urine drug screen result",
        ],
        correct: [1, 2, 3],
        explanation:
          "IM ketamine for severe agitation has a meaningful rate of airway complications. In one prehospital study, hypersalivation occurred in 38%, laryngospasm in 5% and intubation in 39% of patients given ketamine. Oximetry and capnography detect hypoventilation early. Cardiac and BP monitoring matter because ketamine and methamphetamine both raise the pulse and BP. Glucose, pupil checks, drug screens and ketamine levels do not detect these complications.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "cole-agitation",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ten minutes later his O2 sat falls to 88%. He has copious oral secretions and gurgling with each breath.",
        prompt: "Which of the following is the most appropriate first intervention for his falling oxygen saturation?",
        options: ["glycopyrrolate 0.2 mg IV", "naloxone 0.4 mg IV", "Rapid sequence intubation", "succinylcholine 1.5 mg/kg IV", "Suction and jaw thrust"],
        correct: 4,
        explanation:
          "Gurgling with copious secretions and a falling O2 sat point to hypersalivation obstructing the airway, a common effect of ketamine. Suctioning the pharynx and opening the airway with a jaw thrust, with oxygen, usually corrects it quickly. Glycopyrrolate can reduce further secretions but does not clear the secretions already obstructing his airway. Succinylcholine and intubation are for laryngospasm or failure of simple measures. Naloxone does not reverse ketamine.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "green-ketamine-2011",
      },
      {
        id: "q4",
        kind: "single",
        update: "His airway settles. As the ketamine wears off he is calm and rates his ankle pain 9 out of 10. Orthopedics plans surgery in 2 hours.",
        prompt: "Which of the following is the most appropriate analgesic plan for him while he waits for surgery?",
        options: [
          "Acetaminophen 1 g PO alone",
          "Further ketamine 400 mg IM",
          "Haloperidol 5 mg IV",
          "Titrated IV opioid doses",
          "Withhold opioids after stimulant use",
        ],
        correct: 3,
        explanation:
          "He now has severe pain from an open fracture and is calm enough to be reassessed, so titrated IV opioid doses are appropriate. Stimulant use tonight is not a reason to withhold analgesia. Acetaminophen alone cannot control 9 out of 10 fracture pain. A further full dissociative IM dose is not needed now that his agitation has settled, and haloperidol does not treat pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [COLE, GREEN11, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-31",
    topic: TOPIC,
    alsoTopics: ["lacerations"],
    title: "Cut palm in a distressed child",
    stem:
      "A 7-year-old boy with autism spectrum disorder is brought to the emergency department by his father after cutting his left palm on broken glass 1 hour ago. He has a 3 cm straight laceration across the palm that needs sutures. Tendon and nerve function are intact. He is screaming, covering his hand and pulling away from staff. His father says needles caused severe distress at past visits. He is otherwise healthy and takes no medications. No child life specialist is available.",
    vitals: { temperature: "37.0°C tympanic", pulse: "128/minute", resp: "24/minute", bp: "102/64 mmHg", o2sat: "99% on room air", weight: "24 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "The resident plans to give intranasal midazolam and then suture the palm wound.",
        prompt: "Which of the following is the most important addition to intranasal midazolam for this repair?",
        options: ["A second dose of midazolam", "Intranasal dexmedetomidine", "Local anesthetic for the wound", "Ondansetron before midazolam", "Physical restraint by two staff members"],
        correct: 2,
        explanation:
          "Midazolam reduces anxiety but gives no analgesia, so the wound still needs local anesthesia, ideally after a topical agent such as LET gel and with buffered lidocaine injected slowly through the wound edges. A second midazolam dose or dexmedetomidine adds sedation but not pain relief. Restraint increases distress in a child with autism and needle fear. Midazolam rarely causes vomiting, so ondansetron is not needed.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "cps-procedures",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following techniques most reduces the pain of the lidocaine infiltration for him?",
        options: [
          "Buffer with sodium bicarbonate",
          "Chill the lidocaine before use",
          "Inject quickly to finish sooner",
          "Inject through intact skin edges",
          "Use a 21-gauge needle",
        ],
        correct: 0,
        explanation:
          "Buffering lidocaine with sodium bicarbonate reduces the sting of injection. Warming the solution, injecting slowly and using a fine needle also help. Chilled solution, fast injection and a large 21-gauge needle all increase pain. Injecting through the wound edges hurts less than injecting through intact skin.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cps-procedures",
      },
      {
        id: "q3",
        kind: "single",
        update: "He receives intranasal midazolam 0.4 mg/kg. After 15 minutes he is calm and drowsy. The repair is completed.",
        prompt: "Which of the following monitoring plans is most appropriate for him after intranasal midazolam?",
        options: ["Blood pressure once before discharge", "Discharge as soon as sutures are done", "ECG monitoring for 6 hours", "Pulse oximetry until back to baseline", "No monitoring after intranasal use"],
        correct: 3,
        explanation:
          "Intranasal midazolam at 0.4 mg/kg, 9.6 mg for 24 kg, has made him drowsy, so pulse oximetry and observation continue until he returns to his baseline level of responsiveness. The intranasal route does not remove the risk of respiratory depression. Discharge straight after suturing may miss continued sedation. A single BP check or 6 hours of ECG monitoring does not address the airway and breathing risk of a benzodiazepine.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "aap-sedation",
      },
    ],
    sources: [CPS19, AAP],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-32",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Elbow injury in a man with sleep apnea",
    stem:
      "A 48-year-old man presents to the emergency department after falling on his outstretched left arm while playing basketball 1 hour ago. X-ray shows a posterior elbow dislocation without fracture. The hand is neurovascularly intact. He has obstructive sleep apnea treated with nightly CPAP, type 2 diabetes controlled with metformin, and hypertension controlled with ramipril. His BMI is 42 kg/m2, his neck circumference is 46 cm and he has a Mallampati class III view. He rates his pain 9 out of 10. He drove himself to the hospital.",
    vitals: { temperature: "36.8°C oral", pulse: "106/minute", resp: "18/minute", bp: "156/94 mmHg", o2sat: "95% on room air", weight: "136 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following American Society of Anesthesiologists physical status classes best describes him?",
        options: ["ASA I", "ASA II", "ASA III", "ASA IV", "ASA V"],
        correct: 2,
        explanation:
          "Morbid obesity with a BMI of 40 or more is listed as an example of severe systemic disease, which makes him ASA class III, and his OSA adds to his risk. His well-controlled diabetes and hypertension alone would place him in class II. Class IV requires a severe disease that is a constant threat to life. A higher ASA class carries a higher risk of sedation adverse events, which should shape the plan.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "asa-ps",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following preparations most reduce his risk of respiratory complications during procedural sedation?",
        select: 3,
        options: [
          "Atropine before induction",
          "Capnography monitoring",
          "Deep sedation target",
          "Large single propofol bolus",
          "Preoxygenation before sedation",
          "Propofol dosed by total weight",
          "Ramped head-up position",
          "Supine flat position",
        ],
        correct: [1, 4, 6],
        explanation:
          "His OSA, a neck circumference of 46 cm, a Mallampati class III view and a BMI of 42 predict rapid desaturation and difficult rescue ventilation. A ramped head-up position improves airway patency and oxygen reserve, preoxygenation lengthens the safe time before desaturation, and capnography gives early warning of hypoventilation. Propofol should be dosed on lean body weight and titrated in small increments, not given as a large bolus on total weight. A deep sedation target and a flat supine position increase airway risk, and routine atropine has no role.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following sedation plans best provides both analgesia and sedation for his elbow reduction?",
        options: [
          "Etomidate alone, single dose",
          "Hydromorphone 2 mg IV alone",
          "Ketamine-propofol mix, titrated",
          "Midazolam 5 mg IV alone",
          "Propofol alone, repeated boluses",
        ],
        correct: 2,
        explanation:
          "A 1:1 mixture of ketamine and propofol given in small titrated doses provides analgesia from the ketamine and sedation from both drugs, and in a randomized emergency department trial it gave more consistent sedation depth than propofol alone. Propofol, etomidate and midazolam alone sedate without analgesia for a painful reduction. A single 5 mg dose of midazolam also risks prolonged sedation with OSA. Hydromorphone alone gives analgesia but not reliable sedation for the reduction.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "andolfatto-ketofol",
      },
      {
        id: "q4",
        kind: "single",
        update: "After ketamine-propofol sedation starts he makes snoring sounds with chest movement. The capnography waveform flattens and his O2 sat falls from 95% to 88%.",
        prompt: "Which of the following is the most appropriate first intervention for this change during his sedation?",
        options: ["flumazenil 0.2 mg IV", "naloxone 0.4 mg IV", "Nasal airway and jaw thrust", "Rapid sequence intubation", "succinylcholine 1.5 mg/kg IV"],
        correct: 2,
        explanation:
          "Snoring with chest movement but a flattening capnography waveform is upper airway obstruction from soft tissue collapse, which his OSA and obesity predispose to. A jaw thrust with a nasal airway usually restores airflow promptly, followed by bag-mask ventilation if it does not. Flumazenil and naloxone reverse drugs he did not receive. Intubation and succinylcholine are not first steps before simple airway manoeuvres have been tried.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "tintinalli",
      },
    ],
    sources: [ASAPS, TINT, ANDOLFATTO],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-33",
    topic: TOPIC,
    alsoTopics: ["lacerations"],
    title: "Hard to rouse after a hand repair",
    stem:
      "A 58-year-old woman had a complex dog bite laceration of her right hand irrigated and repaired 20 minutes ago under procedural sedation. She received midazolam 4 mg IV and fentanyl 150 mcg IV in divided doses. She has generalized anxiety disorder and has taken clonazepam 1 mg PO twice daily for 10 years. She also has hypothyroidism treated with levothyroxine. The nurse calls you because she is hard to rouse and responds only to a firm sternal rub. Her pupils are 2 mm.",
    vitals: { temperature: "36.4°C oral", pulse: "64/minute", resp: "6/minute", bp: "104/62 mmHg", o2sat: "86% on 2 L/minute by nasal prongs", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first action for her at this moment?",
        options: ["flumazenil 0.5 mg IV", "naloxone 2 mg IV push", "Obtain an arterial blood gas first", "Open the airway and bag-mask", "Rapid sequence intubation"],
        correct: 3,
        explanation:
          "With a respiratory rate of 6/minute and an O2 sat of 86%, the first priority is to open her airway and assist ventilation with a bag-mask device while reversal is prepared. Reversal drugs take time and do not replace ventilation. A 2 mg push of naloxone is a large dose that can cause abrupt pain and agitation. A blood gas delays treatment, and intubation is not needed if bag-mask ventilation works and reversal is effective.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update: "She is ventilated with a bag-mask device and her O2 sat rises to 95%. She remains hard to rouse.",
        prompt: "Which of the following reversal plans is most appropriate for her given her medication history?",
        options: ["Flumazenil and naloxone together", "Flumazenil 0.2 mg IV, repeated", "Naloxone 2 mg IM once", "Naloxone 0.04 mg IV, titrated", "No reversal, ventilate until awake"],
        correct: 3,
        explanation:
          "Fentanyl is a likely contributor to her hypoventilation and small pupils, and small naloxone doses starting at 0.04 mg IV, titrated to breathing, restore ventilation while limiting abrupt reversal. Flumazenil should be avoided because she has taken clonazepam daily for 10 years, and sudden benzodiazepine reversal can cause withdrawal seizures. A single 2 mg IM dose is less controllable and slower to act. Prolonged bag-mask ventilation without reversal is possible, but titrated naloxone restores her own breathing sooner and more safely.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "After naloxone 0.08 mg IV in total, her resp. is 14/minute and O2 sat 96% on 2 L/minute. She is drowsy but rousable to voice.",
        prompt: "Which of the following is the most appropriate monitoring plan for her after the naloxone?",
        options: ["Admit to the ICU for 24 hours", "Discharge once she is talking", "Monitor continuously until stable", "Naloxone infusion for 12 hours", "Spot checks of vital signs every 2 hours"],
        correct: 2,
        explanation:
          "Naloxone may wear off before the combined effects of midazolam and fentanyl, so she needs continuous oximetry and capnography until she is back to baseline and has stayed stable after the last naloxone dose. Discharge once she is talking ignores the risk of resedation, and spot checks every 2 hours could miss it. A 12-hour naloxone infusion is for long-acting opioid toxicity, not procedural fentanyl. ICU admission is not needed now that she breathes adequately.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "tintinalli",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features of her sedation most increased her risk of respiratory depression?",
        options: [
          "Body weight of 62 kg",
          "Female sex and age of 58",
          "Hand wound near the tendons",
          "Opioid plus benzodiazepine",
          "Treated hypothyroidism",
        ],
        correct: 3,
        explanation:
          "Combining a benzodiazepine with an opioid increases the risk of respiratory depression and airway obstruction, so each drug should be given in smaller doses, titrated slowly, with time to reach peak effect between doses. Her treated hypothyroidism, her weight of 62 kg, her age and her sex are not strong sedation risk factors. The hand wound affects the procedure, not the sedation risk.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "asa-moderate-sedation",
      },
    ],
    sources: [TINT, ASA18],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-34",
    topic: TOPIC,
    alsoTopics: ["environmental"],
    title: "Snowmobile breakdown overnight",
    stem:
      "You are working in a rural hospital emergency department in northern Manitoba. A 44-year-old man is brought by a friend after spending the night outdoors at minus 32°C when his snowmobile broke down. He was rescued 1 hour ago. Both hands are pale, cold and waxy beyond the knuckles, with loss of sensation. His core temperature is normal. He has no medical history, takes no medications and has no allergies. You plan rapid rewarming of both hands in a warm water bath.",
    vitals: { temperature: "36.6°C oral", pulse: "104/minute", resp: "18/minute", bp: "142/86 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic plan for rewarming his hands?",
        options: ["Acetaminophen 1 g PO only", "Ibuprofen alone, then reassess", "Ketorolac 30 mg IV once", "Oral codeine 60 mg", "Titrated IV opioid"],
        correct: 4,
        explanation:
          "Rapid rewarming of frostbitten tissue is intensely painful, and the guideline advises analgesia during rewarming as dictated by the patient's response. With deep injury to both hands the pain is usually severe, so a parenteral opioid titrated to effect should be given as rewarming starts. Acetaminophen, a single dose of ketorolac, codeine or ibuprofen alone is unlikely to control this pain. Ibuprofen is still recommended in frostbite for its effect on tissue injury, but as an addition to the opioid rather than as the only analgesic.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "wms-frostbite",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following oral medications is recommended in frostbite for both analgesia and tissue protection?",
        options: ["acetaminophen PO", "gabapentin PO", "ibuprofen PO", "prednisone PO", "tramadol PO"],
        correct: 2,
        explanation:
          "Ibuprofen blocks the prostaglandin and thromboxane pathways that contribute to tissue injury after frostbite, and it also relieves pain, so it is recommended unless contraindicated. He has no allergies or contraindications. Acetaminophen and tramadol relieve pain without that anti-inflammatory effect. Prednisone has no established role, and gabapentin is for neuropathic pain.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "wms-frostbite",
      },
      {
        id: "q3",
        kind: "single",
        update: "After rewarming his fingers are swollen and red with clear blisters. He rates his pain 7 out of 10, but the nurse notes that he is joking and using his phone.",
        prompt: "Which of the following should best guide further analgesia for him at this point?",
        options: ["His appearance of comfort", "His heart rate trend", "His own pain rating", "The blister pattern", "The nurse's impression"],
        correct: 2,
        explanation:
          "Self-report should guide analgesia, and patients often cope through distraction, such as using a phone, so looking comfortable does not mean his pain is controlled. His rating of 7 out of 10 should guide further titration. Vital signs such as heart rate were not associated with self-reported pain intensity in emergency patients. The blister pattern helps predict tissue outcome, not current pain.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "marco-vitals",
      },
    ],
    sources: [WMS, MARCO],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-35",
    topic: TOPIC,
    alsoTopics: ["lacerations"],
    title: "Kitchen knife injury to the hand",
    stem:
      "A 29-year-old man presents to the emergency department after cutting his right palm and index finger on a kitchen knife 1 hour ago. He works as a line cook. There is a 4 cm laceration across the central palm and a separate 2 cm laceration on the palmar surface of the proximal index finger. Before any anesthetic, sensation, two-point discrimination and flexor tendon function are normal. He is healthy with no allergies. He rates his pain 6 out of 10 and is anxious about needles.",
    vitals: { temperature: "36.8°C oral", pulse: "94/minute", resp: "16/minute", bp: "132/80 mmHg", o2sat: "99% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following anesthetic techniques is most appropriate for repairing the central palm laceration?",
        options: [
          "Bier block with lidocaine",
          "Median nerve block at the wrist",
          "Radial nerve block at the wrist",
          "Topical LET gel alone",
          "Ulnar nerve block at the elbow",
        ],
        correct: 1,
        explanation:
          "The central palm is supplied mainly by the median nerve and its palmar cutaneous branch, so a median nerve block at the wrist, including a small subcutaneous injection over that branch, anaesthetises the wound without distorting its edges. The radial nerve supplies the back of the hand, and the ulnar nerve supplies the medial palm and little finger. A Bier block is more than this wound needs. LET gel alone gives unreliable anesthesia for a 4 cm hand wound that needs thorough irrigation.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following statements about adding epinephrine to lidocaine for his index finger block is most accurate?",
        options: [
          "Acceptable in a healthy finger",
          "Causes ischemia in most fingers",
          "Contraindicated in finger blocks",
          "Shortens the block duration",
          "Speeds the onset of the block",
        ],
        correct: 0,
        explanation:
          "In a prospective multicentre series of 3 110 hand and finger cases using lidocaine with epinephrine, there was no finger infarction and no patient needed phentolamine rescue. The belief that it causes finger ischemia or is contraindicated in fingers is not supported in a healthy finger. Epinephrine prolongs the block rather than shortening it, and it gives a drier field, but it does not meaningfully speed onset.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "lalonde-epinephrine",
      },
      {
        id: "q3",
        kind: "single",
        update: "Ten minutes after the median nerve block he still feels the needle at the ulnar edge of the palm wound.",
        prompt: "Which of the following is the most appropriate next step before you continue the repair?",
        options: [
          "Add local infiltration at that edge",
          "Give fentanyl 100 mcg IV",
          "Proceed and ask him to tolerate it",
          "Repeat the median block at the elbow",
          "Start procedural sedation with propofol",
        ],
        correct: 0,
        explanation:
          "The ulnar side of the palm has overlapping supply from the ulnar nerve, so a small supplemental infiltration where sensation remains completes the anesthesia. Repeating the median block more proximally does not reach ulnar territory. IV fentanyl or propofol sedation is excessive for a small area of incomplete block. Proceeding while he feels the needle causes avoidable pain.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
    ],
    sources: [RH, LALONDE],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-36",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Forearm caught by a forklift",
    stem:
      "A 24-year-old man presents to the emergency department 3 hours after his left forearm was crushed between a forklift and a wall. X-ray shows no fracture. He has no medical history. His forearm is swollen and tense. He has received hydromorphone 1 mg IV twice over the last hour, and his pain has risen from 7 out of 10 to 10 out of 10. He cries out when his fingers are passively extended. The radial pulse is strong and capillary refill is 2 seconds.",
    vitals: { temperature: "36.9°C oral", pulse: "116/minute", resp: "20/minute", bp: "146/88 mmHg", o2sat: "99% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important interpretation of his rising need for analgesia?",
        options: [
          "Early sign of compartment syndrome",
          "Evidence of opioid-seeking behaviour",
          "Expected pain from a soft tissue crush",
          "Opioid-induced hyperalgesia",
          "Pain amplified by anxiety",
        ],
        correct: 0,
        explanation:
          "Pain out of proportion to the injury, pain on passive stretch of the finger flexors and a rising opioid need despite repeated doses are the earliest signs of compartment syndrome. A strong radial pulse and normal capillary refill do not exclude it, because pulses usually persist until late. Attributing the escalating pain to anxiety, drug seeking, hyperalgesia after two small doses or an ordinary crush injury risks missing a limb-threatening diagnosis.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update: "Orthopedics is called urgently to assess him for compartment syndrome.",
        prompt: "Which of the following analgesic approaches is most appropriate while he waits for the orthopedic assessment?",
        options: ["Brachial plexus block for relief", "Elevate the arm well above the heart", "Hold analgesia until surgical review", "Tight elastic wrap for swelling", "Titrate IV hydromorphone to effect"],
        correct: 4,
        explanation:
          "Analgesia should not be withheld while surgical review is arranged, so titrated IV hydromorphone continues with frequent reassessment of pain and of the forearm. A brachial plexus block could mask the escalating pain that tracks compartment syndrome before the diagnosis is settled. Raising the arm well above the heart lowers perfusion pressure, so the limb is kept at heart level. A tight wrap raises compartment pressure further.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the best way to track his pain while he waits for surgical assessment?",
        options: ["Distal pulse checks", "Hourly heart rate and BP trend", "Sedation score alone", "Serial numeric pain scores", "Visual forearm swelling"],
        correct: 3,
        explanation:
          "Repeated numeric pain scores recorded with each dose, alongside the passive stretch examination, show whether pain is escalating despite analgesia, which is the key warning of compartment syndrome. Heart rate and BP are a poor guide to pain intensity. Pulses usually stay present until late. A sedation score tracks opioid safety, not pain, and visible swelling does not reliably reflect compartment pressure.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
    ],
    sources: [TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-37",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Fall at the dialysis unit",
    stem:
      "A 66-year-old woman presents to the emergency department after a fall at her dialysis centre 2 hours ago. She has end-stage kidney disease treated with hemodialysis 3 times a week and was dialysed this morning. She also has depression treated with sertraline and type 2 diabetes treated with insulin. She has no allergies. She rates her right groin pain 8 out of 10 and cannot bear weight. X-ray shows nondisplaced fractures of the right superior and inferior pubic rami.",
    vitals: { temperature: "36.7°C oral", pulse: "98/minute", resp: "18/minute", bp: "148/78 mmHg", o2sat: "97% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following opioids is the most appropriate choice for her severe pain today?",
        options: ["codeine 30 mg PO every 4 hours", "hydromorphone 0.5 mg IV, titrated", "meperidine 25 mg IV every 3 hours", "morphine 5 mg IV every 4 hours", "tramadol 50 mg PO every 6 hours"],
        correct: 1,
        explanation:
          "In end-stage kidney disease, small titrated doses of hydromorphone are preferred because its metabolites cause fewer problems than those of morphine. Morphine's active metabolite accumulates and causes prolonged sedation and respiratory depression. Codeine is converted to morphine and shares the problem. Meperidine's metabolite normeperidine accumulates and can cause seizures. Tramadol accumulates in kidney failure and, with her sertraline, raises the risk of serotonin syndrome and seizures.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following nonopioid adjuncts is most appropriate to add for her pain?",
        options: [
          "acetaminophen 650 mg PO every 6 hours",
          "celecoxib 200 mg PO daily",
          "gabapentin 300 mg PO three times daily",
          "ibuprofen 400 mg PO every 6 hours",
          "ketorolac 30 mg IV every 6 hours",
        ],
        correct: 0,
        explanation:
          "Acetaminophen needs little or no dose change in kidney failure and is the safest nonopioid adjunct for her. NSAIDs such as ibuprofen, ketorolac and celecoxib can destroy any residual kidney function, raise potassium and increase the risk of GI bleeding. Gabapentin is cleared by the kidneys and accumulates to cause sedation and falls, and three doses a day is far above what dialysis patients can clear.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "She tells you that oxycodone made her confused and see things after a previous surgery.",
        prompt: "Which of the following is the most appropriate use of this information in her analgesic plan?",
        options: ["Choose codeine instead", "Consider it a true allergy", "Ignore it as a common complaint", "Record it and pick another opioid", "Use oxycodone plus haloperidol 0.5 mg"],
        correct: 3,
        explanation:
          "A previous adverse response to a specific analgesic is part of a structured pain history and should shape the plan, so it is recorded and another opioid is chosen. Confusion with hallucinations is an adverse effect, not an allergy. Dismissing it, or adding haloperidol so the same drug can be used, ignores her experience. Codeine is converted to morphine and should be avoided in kidney failure.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
    ],
    sources: [TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-38",
    topic: TOPIC,
    alsoTopics: ["abdominal-pain"],
    title: "Upper abdominal pain radiating to the back",
    stem:
      "A 40-year-old woman presents to the emergency department with 8 hours of severe epigastric pain radiating to her back, with vomiting. She drinks about 6 beers a day. She has no other medical history and takes no medications. She rates her pain 9 out of 10 and is lying curled on her side. Her epigastrium is tender without peritonism. Lipase is 2 400 U/L, more than 3 times the upper limit of normal, and creatinine is 72 umol/L. Ultrasound shows no gallstones.",
    vitals: { temperature: "37.4°C oral", pulse: "114/minute", resp: "20/minute", bp: "138/84 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial analgesic for her severe abdominal pain?",
        options: ["acetaminophen 1 g IV alone", "hydromorphone 1 mg IV, then titrate", "ketorolac 30 mg IV alone", "meperidine 50 mg IV every 4 hours as needed", "morphine 5 mg IM, then wait"],
        correct: 1,
        explanation:
          "Her 9 out of 10 pain needs a strong IV opioid given in titrated doses, such as hydromorphone 1 mg IV repeated as needed. The old concern that morphine or hydromorphone worsens pancreatitis through the sphincter of Oddi is not supported, so meperidine offers no advantage and has a neurotoxic metabolite. IM morphine absorbs unpredictably and hurts. Acetaminophen or ketorolac alone will not control this pain, and ketorolac adds kidney and bleeding risk in a vomiting patient.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        update: "She receives hydromorphone 1 mg IV. Fifteen minutes later she is alert with resp. of 18/minute, and she says yes when asked whether she wants more pain medication.",
        prompt: "Which of the following is the most appropriate response to her answer at this point?",
        options: [
          "Give hydromorphone 4 mg IV now",
          "Give hydromorphone 1 mg IV now",
          "Give ondansetron only",
          "Reassess her in 1 hour",
          "Switch to oral oxycodone",
        ],
        correct: 1,
        explanation:
          "In the titration protocol, a patient who says yes to more pain medication 15 minutes after the first 1 mg dose receives another 1 mg, and this simple question achieved satisfactory analgesia in most patients. Jumping to 4 mg raises the risk of oversedation. Waiting an hour, or switching to oral oxycodone while she is vomiting, delays relief. Ondansetron treats nausea but not pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "chang-titration",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 3 mg in total she rates her pain 4 out of 10 and says it is now tolerable.",
        prompt: "Which of the following best defines an adequate analgesic endpoint for her at this stage?",
        options: ["A score of 0 out of 10", "Her own report of tolerable pain", "Normal heart rate", "Pain score halved from her baseline", "Sleeping comfortably"],
        correct: 1,
        explanation:
          "The goal is pain that the patient herself finds tolerable. She now reports 4 out of 10 as tolerable, so more opioid is not needed unless that changes. Aiming for 0 out of 10 invites oversedation. A normal heart rate or sleep does not confirm comfort, and a fixed halving of the score may not match what she finds acceptable.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "chang-titration",
      },
    ],
    sources: [TINT, CHANG16],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-39",
    topic: TOPIC,
    alsoTopics: ["multiple-trauma", "msk"],
    title: "Thigh deformity after a motorcycle crash",
    stem:
      "A 26-year-old man is brought to the emergency department by ambulance after a motorcycle crash 40 minutes ago. He is healthy, takes no medications and uses no drugs. He has an isolated closed deformity of the right mid thigh, with no other injuries on primary and secondary survey. The FAST examination is negative. He is alert and oriented, screaming, and rates his pain 10 out of 10. He has received 500 mL of crystalloid. X-ray shows a displaced midshaft femur fracture. The foot is warm with normal pulses.",
    vitals: { temperature: "36.6°C oral", pulse: "124/minute", resp: "24/minute", bp: "102/66 mmHg", o2sat: "98% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate interpretation of his pulse of 124/minute?",
        options: ["Anxiety about the crash", "Normal for his age", "Opioid withdrawal", "Pain alone, so treat the pain", "Possible hidden blood loss"],
        correct: 4,
        explanation:
          "A closed femoral shaft fracture can hide 1 L or more of blood in the thigh, so a pulse of 124/minute with a BP of 102/66 must be treated as possible hemorrhage, even though pain also raises the pulse. Attributing it to pain alone risks missing shock. Anxiety and withdrawal are not supported by his history, and this pulse is not normal for a 26-year-old.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most effective combination for his femur fracture pain?",
        options: ["Femoral nerve block and traction splint", "Ibuprofen and acetaminophen by mouth", "Midazolam and fentanyl bolus", "Morphine 15 mg IV and a pillow", "Nitrous oxide by mask and a long backboard"],
        correct: 0,
        explanation:
          "A femoral nerve block anaesthetises much of the femur and anterior thigh, and a traction splint realigns the fracture and eases muscle spasm, giving effective relief without lowering BP. Morphine 15 mg as a single bolus is large for a patient with a BP of 102/66 and a pulse of 124/minute. Oral agents are too slow and weak for 10 out of 10 pain. Midazolam sedates without analgesia. Nitrous oxide is a weak adjunct, and a backboard does not immobilize a femur fracture.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following IV opioid regimens is most appropriate while his nerve block is being prepared?",
        options: ["fentanyl 300 mcg IV once", "fentanyl 50 mcg IV, titrated", "hydromorphone 4 mg IV once", "morphine 20 mg IM once", "morphine 2 mg IV every hour as needed"],
        correct: 1,
        explanation:
          "Fentanyl has a rapid onset and causes less hypotension than morphine, so doses of about 0.5 to 1 mcg/kg, 50 mcg here, repeated every few minutes to effect, suit a patient with a pulse of 124/minute and a BP of 102/66. 300 mcg is 4 mcg/kg at once and risks apnea and chest wall rigidity. Hydromorphone 4 mg in one dose is large and not titrated. IM morphine absorbs unpredictably, and 2 mg every hour undertreats 10 out of 10 pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [TINT, RH],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-40",
    topic: TOPIC,
    alsoTopics: ["abdominal-pain"],
    title: "Fourth visit this month",
    stem:
      "A 35-year-old woman presents to the emergency department with her usual crampy lower abdominal pain, which she has had on and off for 6 years from endometriosis. It began 2 days ago with her period. This is her fourth visit this month. Last month her gynecologist and family physician wrote an individualized emergency care plan that recommends ketorolac 15 mg IV, acetaminophen and a heating pad, and advises against IV opioids. She takes an oral contraceptive continuously and naproxen as needed. Her abdomen is soft with mild suprapubic tenderness. Urine beta hCG is negative. She rates her pain 8 out of 10 and says it is like her usual pain.",
    vitals: { temperature: "36.9°C oral", pulse: "88/minute", resp: "16/minute", bp: "118/74 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in planning her analgesia today?",
        options: ["Discharge with an opioid prescription", "Give IV hydromorphone 1 mg now", "Order CT of the abdomen and pelvis", "Use her individualized care plan", "Withhold analgesia until review"],
        correct: 3,
        explanation:
          "A care plan written by her own physicians records her past responses and the agreed approach, and following it gives consistent, effective care for pain that matches her usual pattern. Her examination and negative beta hCG do not suggest a new cause needing CT. Withholding analgesia leaves 8 out of 10 pain untreated. IV hydromorphone and an opioid prescription go against a plan that advises against opioids for her.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "busse-opioids",
      },
      {
        id: "q2",
        kind: "single",
        update: "She tells you that she took naproxen 500 mg PO 2 hours ago.",
        prompt: "Which of the following is the most appropriate adjustment to her care plan in light of this?",
        options: [
          "Add oral naproxen 500 mg now",
          "Give ketorolac as planned",
          "Give ketorolac 30 mg IV instead",
          "Omit ketorolac, give the rest",
          "Replace it with IV hydromorphone",
        ],
        correct: 3,
        explanation:
          "She took naproxen 2 hours ago, and ketorolac on top of it combines two NSAIDs, adding GI bleeding and kidney risk without more analgesia. Giving the acetaminophen and heat from the plan while omitting the ketorolac respects the plan and avoids the duplication. A larger ketorolac dose or more naproxen increases the risk further. Switching to IV hydromorphone goes against the plan without a new reason.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "tintinalli",
      },
      {
        id: "q3",
        kind: "single",
        update: "After acetaminophen and heat she rates her pain 5 out of 10, which she says is the level she usually manages at home.",
        prompt: "Which of the following is the most appropriate next step in her care before she leaves?",
        options: ["Admit her for pain control", "Give IV hydromorphone before discharge", "Order a pelvic MRI before discharge", "Refer back to her own physicians", "Start a long-acting opioid"],
        correct: 3,
        explanation:
          "Her pain is back to the level she manages at home, a sensible goal that she has defined, so discharge with follow-up with the physicians who wrote her plan is appropriate, and four visits this month is a reason for them to review it. Starting a long-acting opioid or giving IV hydromorphone goes against guidance to optimize nonopioid therapy for chronic noncancer pain. Admission and MRI are not needed for her usual pain.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "busse-opioids",
      },
    ],
    sources: [BUSSE, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-41",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Shoulder injury in a man who lives alone",
    stem:
      "An 84-year-old man presents to the emergency department after falling at home and injuring his right shoulder 2 hours ago. X-ray shows an anterior shoulder dislocation without fracture. Attempts at reduction with external rotation after intra-articular lidocaine have failed. He has hypertension treated with amlodipine and hydrochlorothiazide, and he has no other medical problems. He lives alone. He ate lunch 4 hours ago. His airway examination is normal. He is alert and oriented. You plan propofol sedation.",
    vitals: { temperature: "36.5°C oral", pulse: "84/minute", resp: "16/minute", bp: "128/76 mmHg", o2sat: "96% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following investigations are required before his procedural sedation can proceed?",
        select: 1,
        options: [
          "Arterial blood gas",
          "Chest radiograph",
          "Coagulation profile",
          "Complete blood count",
          "Electrocardiogram",
          "Serum electrolytes",
          "None",
        ],
        correct: [6],
        explanation:
          "Routine laboratory tests, ECG and imaging are not required before procedural sedation when the history and examination are reassuring, as they are here. Pre-procedure testing is guided by specific findings in the patient's condition. None of these tests would change his sedation plan, and waiting for them delays the reduction.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "asa-moderate-sedation",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following propofol dosing strategies is most appropriate for him at 84 years of age?",
        options: ["propofol 3 mg/kg IV as a rapid push", "propofol 2 mg/kg IV as one bolus", "propofol 2.5 mg/kg IV over 1 minute", "propofol 1 mg/kg IV, then 0.5 mg/kg", "propofol 0.5 mg/kg IV, then top-ups"],
        correct: 4,
        explanation:
          "Older adults need smaller propofol doses because of reduced distribution volume and cardiac reserve, so starting at about 0.5 mg/kg, 35 mg for 70 kg, and giving small top-ups every few minutes lowers the risk of hypotension and apnea. The usual adult regimen of 1 mg/kg then 0.5 mg/kg suits younger patients. Doses of 2 to 3 mg/kg approach general anesthesia induction doses and are unsafe here.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "miner-propofol",
      },
      {
        id: "q3",
        kind: "single",
        update: "After 35 mg of propofol and one 10 mg top-up, the shoulder is reduced. His BP falls to 82/50 with a pulse of 78/minute and an O2 sat of 96%.",
        prompt: "Which of the following is the most appropriate first intervention for his hypotension?",
        options: ["atropine 0.5 mg IV", "naloxone 0.4 mg IV", "norepinephrine infusion", "phenylephrine 1 mg IV bolus", "Saline 250 mL IV bolus"],
        correct: 4,
        explanation:
          "Propofol lowers BP through vasodilation and reduced cardiac output, and the fall is usually brief and responds to a small crystalloid bolus while no further doses are given. A 250 mL bolus suits an 84-year-old while you reassess. His pulse of 78/minute is not bradycardic, so atropine is not indicated. Naloxone does not reverse propofol. A norepinephrine infusion is premature, and 1 mg of phenylephrine is several times a usual push dose.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "miner-propofol",
      },
      {
        id: "q4",
        kind: "menu",
        update: "His BP returns to 124/72. Forty minutes later he is alert and oriented, walking with his arm in a sling, and wants to go home.",
        prompt: "Which of the following are required before he is discharged home after this sedation?",
        select: 2,
        options: [
          "A dose of naloxone before leaving",
          "A responsible adult to stay with him",
          "Fasting until the next morning",
          "Normal serum electrolytes",
          "Return to his baseline mental status",
          "Six hours of observation",
          "Tolerating a full meal",
        ],
        correct: [1, 4],
        explanation:
          "Discharge after sedation requires a return to baseline mental status with stable vital signs, and a responsible adult to accompany him and stay with him, since he lives alone and may have residual impairment. If no one is available he should stay for observation. A routine 6-hour stay, a full meal, overnight fasting and electrolytes are not required, and naloxone has no role after propofol.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "tintinalli",
      },
    ],
    sources: [ASA18, MINER07, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-42",
    topic: TOPIC,
    alsoTopics: ["lacerations"],
    title: "Lip wound in a boy who snores",
    stem:
      "A 5-year-old boy is brought to the emergency department by his mother after falling against a metal bed frame 1 hour ago. He has a 4 cm deep laceration of the lower lip that crosses the vermilion border. He is crying and will not let anyone near his face. His mother says he snores loudly every night, stops breathing for a few seconds during sleep, and is on a waiting list for tonsillectomy. He has no other medical history. His tonsils are enlarged and nearly touch in the midline. His mother asks about sedation for the repair.",
    vitals: { temperature: "37.0°C tympanic", pulse: "118/minute", resp: "24/minute", bp: "100/62 mmHg", o2sat: "98% on room air", weight: "20 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most increases his risk of an airway complication during sedation?",
        options: [
          "Being 5 years of age",
          "Body weight of 20 kg",
          "Crying and refusing examination",
          "Enlarged tonsils with apneas",
          "Laceration crossing the vermilion",
        ],
        correct: 3,
        explanation:
          "Loud nightly snoring with witnessed pauses in breathing and tonsils that nearly touch suggest obstructive sleep apnea from tonsillar enlargement, which raises the risk of airway obstruction and desaturation under sedation. His crying does not raise sedation risk. The vermilion laceration changes the repair, not the sedation risk. His age and weight are not risk factors in themselves.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "aap-sedation",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following sedative agents best preserves his airway tone and breathing for this repair?",
        options: [
          "chloral hydrate 50 mg/kg PO",
          "ketamine 1.5 mg/kg IV",
          "midazolam with fentanyl IV",
          "pentobarbital 2 mg/kg IV",
          "propofol 1 mg/kg IV",
        ],
        correct: 1,
        explanation:
          "Ketamine largely preserves pharyngeal muscle tone, protective airway reflexes and spontaneous breathing, which makes it the preferred agent when airway obstruction is a concern, and it also gives analgesia for the repair. Propofol, pentobarbital and midazolam with fentanyl reduce upper airway tone and respiratory drive, which his large tonsils make dangerous. Chloral hydrate has a slow, unpredictable onset with prolonged sedation, and it gives no analgesia.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "green-ketamine-2011",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following nerve blocks best anaesthetises his lower lip without distorting the vermilion border?",
        options: [
          "Auriculotemporal nerve block",
          "Greater auricular nerve block",
          "Infraorbital nerve block",
          "Mental nerve block",
          "Supraorbital nerve block",
        ],
        correct: 3,
        explanation:
          "The mental nerve leaves the mental foramen, which lies below the primary molars at his age, and supplies the lower lip and chin, so a mental nerve block anaesthetises the lip without swelling the wound edges, keeping the vermilion border visible for alignment. The infraorbital nerve supplies the upper lip. The supraorbital, auriculotemporal and greater auricular nerves supply the forehead, temple and ear regions, not the lip.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
    ],
    sources: [AAP, GREEN11, RH],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-43",
    topic: TOPIC,
    alsoTopics: ["lacerations"],
    title: "Gravel in the wounds after a bicycle fall",
    stem:
      "A 31-year-old woman presents to the emergency department after falling from her bicycle at high speed 2 hours ago. She has deep abrasions over about 12% of her body surface area on the left thigh, hip and forearm, heavily embedded with gravel. She has no other injuries. She is healthy, with no psychiatric or heart history, and takes no medications. She ate 3 hours ago. Her airway examination is normal. The wounds are too large to scrub under local anesthetic, and you plan ketamine sedation.",
    vitals: { temperature: "36.8°C oral", pulse: "98/minute", resp: "18/minute", bp: "124/78 mmHg", o2sat: "99% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why ketamine suits this particular procedure for her?",
        options: ["It causes no vomiting in adults", "It has a reversal agent", "It lowers blood pressure", "It provides analgesia and sedation", "It shortens recovery compared with propofol"],
        correct: 3,
        explanation:
          "Scrubbing embedded gravel from large abrasions is intensely painful, and ketamine provides strong analgesia as well as dissociative sedation, so one agent covers both needs. It has no reversal agent. Nausea and vomiting occurred in about a third of adults in a randomized emergency department trial. Ketamine tends to raise rather than lower BP, and recovery takes longer than with propofol.",
        keyFeature: { topic: TOPIC, n: 4 },
        source: "sener-midazolam",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following adjuncts most reduces recovery agitation after her ketamine sedation?",
        options: [
          "glycopyrrolate 0.2 mg IV",
          "haloperidol 5 mg IV",
          "midazolam 0.03 mg/kg IV",
          "ondansetron 4 mg IV",
          "propofol 1 mg/kg IV",
        ],
        correct: 2,
        explanation:
          "In adults, midazolam 0.03 mg/kg IV given with ketamine reduced recovery agitation from 25% to 8%, a number needed to treat of 6. For her 60 kg that is 1.8 mg. Ondansetron reduces vomiting, not agitation. Glycopyrrolate only reduces secretions. Haloperidol was not the agent tested, and propofol at 1 mg/kg adds deep sedation and apnea risk.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "sener-midazolam",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following initial IV ketamine regimens is most appropriate for her sedation?",
        options: [
          "ketamine 240 mg IV over 1 minute",
          "ketamine 150 mg IV over 1 minute",
          "ketamine 60 mg IV over 1 minute",
          "ketamine 60 mg IV rapid push",
          "ketamine 18 mg IV, then infusion",
        ],
        correct: 2,
        explanation:
          "The adult IV dose for dissociative sedation is 1 mg/kg, 60 mg for 60 kg, given over 30 to 60 seconds, with further doses of 0.5 to 1 mg/kg if needed. A rapid push raises the risk of brief apnea. 150 mg and 240 mg are 2.5 and 4 mg/kg, excessive IV starting doses that prolong recovery. 18 mg is 0.3 mg/kg, an analgesic dose that will not produce dissociation.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "green-ketamine-2011",
      },
      {
        id: "q4",
        kind: "single",
        update: "During recovery she is awake but frightened, screaming that the room is melting. Her airway is patent and her O2 sat is 98%.",
        prompt: "Which of the following is the most appropriate management of her distress during recovery?",
        options: ["Calm reassurance and IV midazolam", "haloperidol 10 mg IM", "naloxone 0.4 mg IV", "Physical restraints on the stretcher", "Repeat ketamine 60 mg IV"],
        correct: 0,
        explanation:
          "Unpleasant recovery reactions after ketamine respond to a calm, quiet setting and, when distressing, a small dose of IV midazolam. Her airway is patent with an O2 sat of 98%, so there is no respiratory emergency. Naloxone does not reverse ketamine. More ketamine prolongs the dissociation. Restraints and high-dose haloperidol add risk without treating the cause.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "green-ketamine-2011",
      },
    ],
    sources: [SENER, GREEN11],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-44",
    topic: TOPIC,
    alsoTopics: ["lacerations"],
    title: "Finger caught in a car door",
    stem:
      "A 9-year-old girl is brought to the emergency department by her father after her right middle finger was slammed in a car door 45 minutes ago. The fingertip is swollen, with a subungual hematoma under 60% of the nail and a laceration of the nail fold. X-ray shows a nondisplaced tuft fracture. She is crying and rates her pain 8 out of 10 on the Faces Pain Scale Revised. She has no IV and is healthy. You plan nail removal and nail bed repair in the emergency department.",
    vitals: { temperature: "37.0°C tympanic", pulse: "122/minute", resp: "22/minute", bp: "108/66 mmHg", o2sat: "99% on room air", weight: "30 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial analgesic while the repair is being prepared?",
        options: ["acetaminophen 450 mg PO", "codeine 30 mg PO", "ketamine 45 mg IN", "midazolam 9 mg IN", "morphine 3 mg IM"],
        correct: 2,
        explanation:
          "Intranasal ketamine at 1.5 mg/kg, 45 mg for 30 kg, gave pain relief similar to intranasal fentanyl in children with limb injuries and needs no IV. Acetaminophen at 15 mg/kg alone is too weak for 8 out of 10 pain. Codeine is not recommended in Canada for children under 12. IM morphine is painful, and intranasal midazolam reduces anxiety without relieving pain.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "frey-prime",
      },
      {
        id: "q2",
        kind: "single",
        update: "Ten minutes after intranasal ketamine she says she feels dizzy and that the room looks strange. She is talking and her O2 sat is 99%.",
        prompt: "Which of the following is the most appropriate response to these symptoms after intranasal ketamine?",
        options: [
          "Call for airway support",
          "Give IN midazolam 9 mg",
          "Give naloxone 0.3 mg IN",
          "Reassure and continue observing",
          "Stop the procedure and admit her",
        ],
        correct: 3,
        explanation:
          "Dizziness and mild perceptual changes are common, minor and transient after intranasal ketamine at this dose, and she is talking with an O2 sat of 99%, so reassurance and continued observation are enough. Naloxone does not reverse ketamine. Midazolam would add sedation she does not need. Calling for airway support or admitting her is not warranted for these minor effects.",
        keyFeature: { topic: TOPIC, n: 6 },
        source: "frey-prime",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate anesthesia for her nail removal and nail bed repair?",
        options: ["Digital block with lidocaine", "Intranasal fentanyl 1.5 mcg/kg alone", "LET gel on the nail bed", "Propofol deep sedation", "Topical vapocoolant spray"],
        correct: 0,
        explanation:
          "A digital block anaesthetises the whole finger, including the nail bed, and allows nail removal and a precise repair once systemic analgesia has settled her. Deep propofol sedation adds airway risk for a procedure that a block handles well. Intranasal fentanyl alone will not permit nail removal. LET gel and vapocoolant spray act only on the surface and cannot anaesthetise the nail bed.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to reassess her pain after the analgesic?",
        options: [
          "Ask her father to rate it",
          "Faces Pain Scale Revised again",
          "FLACC behavioural scale",
          "Heart rate compared with arrival",
          "Observe whether she is crying",
        ],
        correct: 1,
        explanation:
          "She has already self-reported using the Faces Pain Scale Revised, which suits her age, so using the same scale again allows a direct comparison. Self-report is preferred over observation in a child who can give it. FLACC is for children who cannot self-report. A parent's rating and her heart rate are less accurate than her own report, and crying reflects fear as well as pain.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "cps-pain",
      },
    ],
    sources: [FREY, RH, CPS22],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-45",
    topic: TOPIC,
    title: "Hot swollen big toe",
    stem:
      "A 71-year-old man presents to the emergency department with 1 day of severe pain, redness and swelling of his right first metatarsophalangeal joint. He has had two similar episodes diagnosed as gout. He has no liver disease. He has atrial fibrillation treated with apixaban, chronic kidney disease with an eGFR of 34 mL/minute, and a bleeding duodenal ulcer 2 years ago. He takes no anti-inflammatory drugs. He rates his pain 8 out of 10 and cannot wear a shoe. The joint is hot and very tender. He has no fever and no break in the skin.",
    vitals: { temperature: "37.4°C oral", pulse: "88/minute irregular", resp: "18/minute", bp: "142/84 mmHg", o2sat: "97% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his acute joint pain given his history?",
        options: [
          "indomethacin 50 mg PO three times daily",
          "ketorolac 30 mg IV every 6 hours",
          "naproxen 500 mg PO twice daily",
          "oxycodone 5 mg PO alone",
          "prednisone 35 mg PO daily for 5 days",
        ],
        correct: 4,
        explanation:
          "With an eGFR of 34 mL/minute, apixaban and a past bleeding ulcer, NSAIDs such as indomethacin, naproxen and ketorolac carry high risks of kidney injury and GI bleeding. An oral glucocorticoid such as prednisone for 5 days is a recommended first-line treatment for a gout flare and suits these comorbidities. Oxycodone alone treats pain without treating the inflammation that causes it.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "acr-gout",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following nondrug measures is most appropriate to relieve the pain in his toe?",
        select: 1,
        options: ["Compression bandage applied tightly", "Firm massage of the joint", "Heat pack on the joint", "Ice applied to the joint", "Soaking the foot in hot water", "Walking to keep the joint mobile"],
        correct: [3],
        explanation:
          "Topical ice applied to the joint is conditionally recommended as an adjunct to drug treatment for a gout flare. Heat and hot water soaks have no supporting evidence and can add to the warmth and swelling of an inflamed joint. A tight bandage or firm massage adds pressure to a very tender joint, and walking on it worsens the pain during a flare.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "acr-gout",
      },
      {
        id: "q3",
        kind: "single",
        update: "Two hours after the first prednisone dose he still rates his pain 7 out of 10 and asks for something to help him sleep tonight.",
        prompt: "Which of the following is the most appropriate additional analgesic for him tonight?",
        options: ["acetaminophen 650 mg PO every 6 hours", "celecoxib 200 mg PO twice daily", "codeine 30 mg PO every 4 hours as needed", "ibuprofen 400 mg PO every 6 hours", "meperidine 50 mg PO every 4 hours"],
        correct: 0,
        explanation:
          "Acetaminophen adds analgesia without the kidney and bleeding risks that matter with an eGFR of 34 mL/minute, apixaban and a past ulcer, and 650 mg every 6 hours, 2.6 g a day, is a cautious total for a 71-year-old without liver disease. Celecoxib and ibuprofen are NSAIDs and carry those risks. Codeine metabolites accumulate in kidney disease, and meperidine has a neurotoxic metabolite that accumulates when kidney function is reduced.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "tintinalli",
      },
    ],
    sources: [ACR, TINT],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-46",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Jammed finger at volleyball",
    stem:
      "A 17-year-old boy presents to the emergency department after jamming his left ring finger playing volleyball 1 hour ago. The proximal interphalangeal joint is dislocated dorsally. He is very afraid of needles and asks for nitrous oxide, which his sister received for a procedure. Ten days ago he was discharged from hospital after a chest tube for a spontaneous left pneumothorax, and an X-ray 3 days ago showed a small residual pneumothorax. He takes no medications. Sensation and capillary refill in the finger are normal. He rates his pain 7 out of 10.",
    vitals: { temperature: "36.7°C oral", pulse: "90/minute", resp: "16/minute", bp: "124/72 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important consideration before offering him nitrous oxide?",
        options: ["His age under 18 years", "His fear of needles", "His last meal time", "His pain score of 7 out of 10", "His residual pneumothorax"],
        correct: 4,
        explanation:
          "Nitrous oxide diffuses into closed air-filled spaces faster than nitrogen can leave them, so it can enlarge a pneumothorax, and his X-ray 3 days ago still showed residual air. It should not be used for him. His age and his fear of needles would otherwise favour it. Nitrous oxide alone at 50% or less produces minimal sedation, so his last meal matters little, and his pain score does not affect the choice.",
        keyFeature: { topic: TOPIC, n: 5 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate anesthesia for reducing his finger dislocation?",
        options: ["Intranasal midazolam alone", "Lidocaine digital nerve block", "Methoxyflurane 3 mL inhaled", "Propofol deep sedation", "Topical EMLA cream over the joint"],
        correct: 1,
        explanation:
          "A digital block with lidocaine anaesthetises the whole finger, allows a painless reduction and avoids sedation risk. Methoxyflurane is authorized in Canada only for adults, and he is 17. Propofol sedation is more than a finger reduction needs. Intranasal midazolam reduces anxiety but provides no analgesia, and topical EMLA does not reach the joint.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "roberts-hedges",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best addresses his fear of needles before the digital block?",
        options: ["Explain steps and use distraction", "Give lorazepam 2 mg PO 30 minutes before", "Have staff hold him still", "Proceed without warning him", "Tell him it will not hurt"],
        correct: 0,
        explanation:
          "For youth with needle fear, explaining what will happen, using distraction and letting him choose a coping strategy reduce distress, and they pair well with a vapocoolant spray and slow injection. Holding him still or proceeding without warning increases fear. Telling him it will not hurt undermines trust when he feels the needle. Lorazepam adds sedation that a finger block does not need.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "cps-procedures",
      },
    ],
    sources: [TINT, RH, CPS19],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
  {
    id: "analgesia-sedation-47",
    topic: TOPIC,
    alsoTopics: ["msk"],
    title: "Wrist fracture in a woman on treatment",
    stem:
      "A 38-year-old woman presents to the emergency department after falling down stairs 2 hours ago. X-ray shows displaced fractures of the right distal radius and ulna that need closed reduction and casting. She has opioid use disorder and takes methadone 90 mg PO daily, witnessed at her pharmacy each morning. She took today's dose 5 hours ago. She has used no other drugs for 3 years. She rates her pain 9 out of 10, is tearful, and is afraid she will be refused pain medication. The hand is neurovascularly intact.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "18/minute", bp: "138/86 mmHg", o2sat: "99% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important step in assessing her analgesic needs?",
        options: ["Check a urine drug screen first", "Measure her pupil size", "Obtain an ECG before any opioid", "Order a serum methadone level", "Verify her methadone dose"],
        correct: 4,
        explanation:
          "Confirming her daily methadone dose and the time of her last witnessed dose with her pharmacy establishes her baseline opioid tolerance, which determines how much additional analgesia she will need. A urine drug screen does not measure pain or tolerance. A serum methadone level is not available in time and does not guide acute dosing. Pupil size is not a measure of analgesic need. An ECG may be useful with methadone but should not delay analgesia.",
        keyFeature: { topic: TOPIC, n: 1 },
        source: "tintinalli",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate analgesic approach for her in the emergency department?",
        options: ["Continue methadone and add IV opioid", "Give an extra 30 mg of methadone", "Hold methadone and give IV morphine instead", "Nonopioid analgesics only", "Switch to buprenorphine today"],
        correct: 0,
        explanation:
          "People taking opioid agonist treatment should continue it when they have acute pain and still receive adequate analgesia. Her methadone treats her opioid use disorder but gives little relief for new pain, and her tolerance means she needs larger and more frequent doses of a short-acting opioid than an opioid-naive patient. Holding methadone risks withdrawal and relapse. An extra methadone dose acts slowly, accumulates and cannot be titrated. Nonopioids alone are unlikely to control 9 out of 10 fracture pain. Starting buprenorphine now could precipitate withdrawal.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "hqo-acute-opioids",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best provides analgesia for the closed reduction of her fractures?",
        options: ["Hematoma block with lidocaine", "Midazolam 2 mg IV alone", "Nitrous oxide at 30%", "Oral oxycodone 5 mg before reduction", "Topical lidocaine patch"],
        correct: 0,
        explanation:
          "A hematoma block places lidocaine directly into the fracture hematoma and gives useful analgesia for closed reduction of a distal radius fracture without systemic sedation, which suits her opioid tolerance. Midazolam alone sedates without analgesia. A single 5 mg dose of oxycodone will do little for someone taking methadone 90 mg a day. A lidocaine patch and low-concentration nitrous oxide do not provide analgesia adequate for a reduction.",
        keyFeature: { topic: TOPIC, n: 2 },
        source: "handoll-radius",
      },
      {
        id: "q4",
        kind: "menu",
        update: "The fractures are reduced and casted. She will be discharged with orthopedic follow-up in 1 week.",
        prompt: "Which of the following should be part of her discharge analgesic plan from the emergency department?",
        select: 2,
        options: [
          "Double her methadone dose for 1 week",
          "Inform her methadone prescriber",
          "Oxycodone 30 tablets, no follow-up",
          "Scheduled acetaminophen and NSAID",
          "Stop methadone and use oxycodone",
          "Tramadol 50 mg added to methadone",
        ],
        correct: [1, 3],
        explanation:
          "Scheduled acetaminophen and an NSAID, with her usual methadone continued, cover expected fracture pain, and informing her methadone prescriber keeps her care coordinated and safe. Doubling methadone for a week risks accumulation and overdose. A large oxycodone supply without follow-up, or stopping methadone, threatens her recovery. Tramadol adds serotonergic and seizure risk with methadone.",
        keyFeature: { topic: TOPIC, n: 3 },
        source: "hqo-acute-opioids",
      },
    ],
    sources: [TINT, HQO, HANDOLL],
    reviewed: false,
    author: AUTHOR,
    version: 1,
  },
];
