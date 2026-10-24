// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.
import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Preceptor", version: 1 } as const;

const S = {
  weaver: { id: "weaver-ghb", citation: "Weaver VK, Ickowicz S, Fairbairn N. Management of gamma-hydroxybutyrate intoxication and withdrawal. CMAJ. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10241545/" },
  tay: { id: "tay-ghb", citation: "Tay E, Lo WKW, Murnion B. Current insights on the impact of gamma-hydroxybutyrate (GHB) abuse. Subst Abuse Rehabil. 2022.", url: "https://www.dovepress.com/current-insights-on-the-impact-of-gamma-hydroxybutyrate-ghb-abuse-peer-reviewed-fulltext-article-SAR" },
  wojtowicz: { id: "wojtowicz-ghb", citation: "Wojtowicz JM, Yarema MC, Wax PM. Withdrawal from gamma-hydroxybutyrate, 1,4-butanediol and gamma-butyrolactone: a case report and systematic review. CJEM. 2008.", url: "https://www.cambridge.org/core/journals/canadian-journal-of-emergency-medicine/article/withdrawal-from-gammahydroxybutyrate-14butanediol-and-gammabutyrolactone-a-case-report-and-systematic-review/482581883919EDECE5E2C8207CD1776C" },
  cpsNows: { id: "cps-nows-2025", citation: "Narvey M, Hamilton D, Paquette V. Canadian Paediatric Society, Fetus and Newborn Committee. Managing newborns at risk for neonatal abstinence syndrome and neonatal opioid withdrawal syndrome: updates and emerging best practices. Paediatr Child Health. 2025.", url: "https://cps.ca/en/documents/position/nas-nows" },
  apap: { id: "apap-consensus", citation: "Dart RC, Mullins ME, Matoushek T, et al. Management of acetaminophen poisoning in the US and Canada: a consensus statement. JAMA Netw Open. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37552484/" },
} satisfies Record<string, Source>;

export const TOX_S83: Samp[] = [
  /* 48 Withdrawal from a liquid bought online ------------------------------ */
  {
    id: "tox-48",
    topic: "tox",
    alsoTopics: ["delirium-agitation"],
    title: "Shaking man who ran out of his sleep aid",
    stem:
      "A 31-year-old man is brought to the emergency department by his partner because of 6 hours of shaking, sweating and anxiety. His partner says he has drunk a capful of a clear liquid every 2 to 3 hours, day and night, for 5 months. He uses it to sleep and to relax. The bottle, bought online, is labelled as a wheel cleaner. It ran out last night, and his last dose was 8 hours ago. He does not drink alcohol, uses no other drugs and takes no medication. He is restless and cannot sit still. He has a coarse tremor of both hands and moist skin. His pupils are 5 mm and reactive. He is oriented to person, place and time. There is no clonus and his reflexes are normal.",
    vitals: { temperature: "37.6°C oral", pulse: "118/minute", resp: "20/minute", bp: "158/94 mmHg", o2sat: "98% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his symptoms?",
        options: ["Alcohol withdrawal", "GHB withdrawal", "Serotonin toxicity", "Sympathomimetic toxicity", "Thyrotoxic crisis"],
        correct: 1,
        explanation:
          "Gamma-butyrolactone is sold as an industrial solvent and is converted to GHB in the body within minutes. Dosing every 2 to 3 hours around the clock is the pattern of a dependent user, and tremor, sweating, anxiety and a fast pulse starting within hours of the last dose fit withdrawal from a drug with a half-life of 20 to 30 minutes. He does not drink, so alcohol withdrawal does not fit. Serotonin toxicity brings clonus and hyperreflexia, which he does not have. A sympathomimetic would not explain why symptoms began when his supply ran out. Thyrotoxic crisis does not follow stopping a drug.",
        keyFeature: { topic: "tox", n: 2 },
        source: "weaver-ghb",
      },
      {
        id: "q2",
        kind: "single",
        update: "Four hours later his pulse is 112/minute. He says he has not slept and wants the liquid. He now believes he is in a hotel and is talking to people who are not in the room.",
        prompt: "Which of the following findings best shows that his withdrawal has become severe?",
        options: ["Craving for the liquid", "Delirium with hallucinations", "Lack of sleep overnight", "Pulse of 112/minute", "Systolic BP of 150 mmHg"],
        correct: 1,
        explanation:
          "His disorientation to place and his conversation with people who are not there show delirium with hallucinations, the observed signs that mark severe withdrawal and that can progress to seizures or death without treatment. Craving and lack of sleep are common in mild withdrawal and are reported by the patient, so they do not grade severity. His pulse has fallen from 118 to 112/minute, and a modest rise in pulse or blood pressure appears early in withdrawal of any severity. These signs are repeated with each dose, but on their own they do not mark severe withdrawal.",
        keyFeature: { topic: "tox", n: 8 },
        source: "tay-ghb",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for his withdrawal?",
        options: ["Clonidine 0.1 mg PO", "Haloperidol 5 mg IM", "Lorazepam 2 mg IV", "Olanzapine 10 mg IM", "Quetiapine 50 mg PO"],
        correct: 2,
        explanation:
          "A benzodiazepine is first line for GHB withdrawal, and an IV route lets lorazepam be repeated every few minutes and titrated to calm. Very large total doses are often needed, and diazepam up to 300 mg a day has been used. Haloperidol and olanzapine have been tried with variable success, usually after deterioration, and they do not treat the loss of GABA effect that drives his symptoms. Clonidine may blunt his pulse and blood pressure but does not prevent delirium or seizures. Quetiapine adds sedation without treating withdrawal.",
        keyFeature: { topic: "tox", n: 8 },
        source: "weaver-ghb",
      },
      {
        id: "q4",
        kind: "single",
        update: "Three hours later, despite escalating doses of the first-line drug class, he is still agitated and hallucinating. His pulse is 134/minute and his BP is 168/100 mmHg. He is protecting his airway.",
        prompt: "Which of the following is the most appropriate next treatment for him?",
        options: ["Flumazenil IV", "Haloperidol IV", "Ketamine IM", "Phenobarbital IV", "Physostigmine IV"],
        correct: 3,
        explanation:
          "Resistance to benzodiazepines is reported in GHB withdrawal, and when symptoms worsen despite escalating doses, phenobarbital is the next step, with monitoring in a high-acuity unit. Case reports describe good effect from a barbiturate after benzodiazepines have failed. Flumazenil would reverse the benzodiazepine he has received and could provoke seizures. Haloperidol does not treat the cause and has had variable success. Ketamine sedates briefly without treating withdrawal. Physostigmine treats anticholinergic delirium, and his moist skin argues against that.",
        keyFeature: { topic: "tox", n: 4 },
        source: "weaver-ghb",
      },
      {
        id: "q5",
        kind: "single",
        update: "He settles, is breathing on his own and is moved to the intensive care unit.",
        prompt: "Which of the following investigations is most important to look for a complication of his withdrawal?",
        options: ["Creatine kinase", "Serum ammonia", "Serum lipase", "Thyroid function tests", "Urine drug screen"],
        correct: 0,
        explanation:
          "Rhabdomyolysis complicates about 7% of withdrawal episodes from GHB and its analogues, and hours of agitation, tremor and restlessness put his muscles at risk, so a creatine kinase guides fluids and monitoring of his kidneys. Ammonia rises in valproate poisoning and liver failure, neither of which he has. Lipase looks for pancreatitis, which nothing suggests. Thyroid tests would not explain a withdrawal that began when his supply ran out. GHB is not included on a standard urine drug screen, so the screen would neither confirm the diagnosis nor change his care.",
        keyFeature: { topic: "tox", n: 5 },
        source: "wojtowicz-ghb",
      },
    ],
    sources: [S.weaver, S.tay, S.wojtowicz],
    ...META,
  },

  /* 49 Five-day-old with a mother on methadone ----------------------------- */
  {
    id: "tox-49",
    topic: "tox",
    alsoTopics: ["pediatric-fever"],
    title: "Crying newborn on day five",
    stem:
      "You are working in a community hospital emergency department. A 5-day-old boy is brought in by his parents with 1 day of high-pitched crying, poor feeding and loose stools. He was born at 39 weeks by vaginal delivery after an uncomplicated labour and went home at 36 hours of age. His mother has taken methadone 60 mg daily for opioid use disorder throughout the pregnancy, and her HIV test was negative. She is breastfeeding. He has had no fever and no vomiting. He sneezes often, and he has a tremor and increased tone when handled. His anterior fontanelle is flat, his abdomen is soft and not distended, and his capillary refill is 2 seconds. His birth weight was 3.4 kg.",
    vitals: { temperature: "37.2°C rectal", pulse: "168/minute", resp: "54/minute", o2sat: "98% on room air", weight: "3.1 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations should be done first for this infant?",
        options: ["Abdominal radiograph", "Capillary glucose", "Cranial ultrasound", "Infant urine drug screen", "Meconium drug testing"],
        correct: 1,
        explanation:
          "Hypoglycemia is one of the conditions the Canadian Paediatric Society lists to exclude before tremor and irritability are put down to withdrawal, and a capillary glucose gives an answer in a minute and can be treated at once. His exposure to methadone is already known, so a urine drug screen would not change his care. Meconium testing documents an exposure that is already known and takes days to report. Cranial ultrasound looks for brain injury, and his fontanelle is flat with no focal signs. His soft, undistended abdomen and lack of vomiting do not suggest an obstruction that a radiograph would show.",
        keyFeature: { topic: "tox", n: 7 },
        source: "cps-nows-2025",
      },
      {
        id: "q2",
        kind: "single",
        update: "His capillary glucose is 4.1 mmol/L. The examination is otherwise normal.",
        prompt: "Which of the following approaches does the Canadian Paediatric Society recommend for assessing his withdrawal?",
        options: ["Eat, Sleep, Console assessment", "Lipsitz neonatal drug withdrawal tool", "Modified Finnegan scoring", "Serial daily weights", "Serum methadone level"],
        correct: 0,
        explanation:
          "The Canadian Paediatric Society recommends the Eat, Sleep, Console approach for every newborn at risk, a family-centred, functional assessment of whether the infant can feed well, sleep and be consoled. It is repeated at regular intervals so that care can be stepped up or down. Finnegan scoring counts many nonspecific signs and is being replaced. The Lipsitz tool is an older sign checklist. Daily weights follow feeding but do not grade withdrawal, and a methadone level in the infant does not guide care.",
        keyFeature: { topic: "tox", n: 8 },
        source: "cps-nows-2025",
      },
      {
        id: "q3",
        kind: "single",
        update: "He takes 5 to 10 mL per feed, sleeps less than 30 minutes at a time and cannot be settled within 10 minutes when held by his mother.",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: ["Discharge with formula feeds", "Morphine 0.05 mg/kg PO now", "Phenobarbital 20 mg/kg IV load", "Transfer to a regional NICU", "Ward admission with mother rooming in"],
        correct: 4,
        explanation:
          "He cannot feed, sleep or be consoled, and he has lost 0.3 kg, about 9% of his birth weight of 3.4 kg, so he needs admission. The Canadian Paediatric Society puts non-drug care first, with the mother rooming in, skin-to-skin contact, feeding support and a quiet, dim room, and adds medication only when these measures are not enough. Oral morphine is a first-line drug but comes after non-drug care has been tried. Phenobarbital is not first line for opioid withdrawal. He is a stable term infant, so transfer to a NICU would separate him from his mother without need. Discharge is unsafe.",
        keyFeature: { topic: "tox", n: 8 },
        source: "cps-nows-2025",
      },
      {
        id: "q4",
        kind: "single",
        update: "His mother asks whether she should stop breastfeeding because she takes methadone. She uses no other substances.",
        prompt: "Which of the following is the most appropriate advice about his feeding?",
        options: ["Formula until symptoms settle", "Pump and discard for 24 hours", "Stop breastfeeding while on methadone", "Support breastfeeding on demand", "Switch to donor human milk"],
        correct: 3,
        explanation:
          "The Canadian Paediatric Society advises that a parent on opioid agonist therapy who is HIV negative and not using unregulated substances be supported to breastfeed, and his mother meets each of these conditions. Breastfeeding keeps mother and infant together, and direct breastfeeding and expressed milk are both encouraged for infants at risk of withdrawal. Stopping, switching to formula or to donor milk, or pumping and discarding would remove this support without making him safer.",
        keyFeature: { topic: "tox", n: 8 },
        source: "cps-nows-2025",
      },
    ],
    sources: [S.cpsNows],
    ...META,
  },

  /* 50 Teen with a nighttime pain product ---------------------------------- */
  {
    id: "tox-50",
    topic: "tox",
    alsoTopics: ["suicide-risk"],
    title: "Restless teen after a breakup",
    stem:
      "A 16-year-old girl is brought to the emergency department by her mother 2 hours after she said she swallowed about 24 extra strength acetaminophen tablets after a breakup. She has no medical problems and takes no regular medication. She is restless and keeps picking at her blanket, but she is oriented and answers questions. Her pupils are 7 mm and sluggish, her face is flushed, and her skin and mouth are dry. Bowel sounds are reduced. Her bladder is palpable and she has not voided since the morning. Tone and reflexes are normal and there is no clonus. The ECG shows sinus tachycardia with a QRS of 86 ms.",
    vitals: { temperature: "37.8°C oral", pulse: "122/minute", resp: "18/minute", bp: "128/76 mmHg", o2sat: "99% on room air", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains her pupils, dry skin and full bladder?",
        options: ["Acetaminophen hepatotoxicity", "Antihistamine co-ingestion", "Anxiety after the breakup", "Serotonin toxicity", "Sympathomimetic co-ingestion"],
        correct: 1,
        explanation:
          "Large sluggish pupils, flushed dry skin, reduced bowel sounds, urinary retention, a fast pulse and picking at her blanket form the anticholinergic toxidrome, which acetaminophen alone does not cause. A drug she has not mentioned is the likely source, and an antihistamine such as diphenhydramine, found in many nighttime pain products, is a common one. Acetaminophen causes few signs in the first hours and does not cause these. A sympathomimetic also dilates the pupils but makes the skin sweaty, not dry. Serotonin toxicity brings sweating, clonus and brisk reflexes, and she has none. Anxiety causes sweating rather than dry skin and does not retain urine.",
        keyFeature: { topic: "tox", n: 3 },
        source: "apap-consensus",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following sources is most likely to identify exactly what she swallowed?",
        options: ["Her family physician's chart", "Pharmacy dispensing record", "Photo of the empty package", "School counsellor's account", "Urine drug screen"],
        correct: 2,
        explanation:
          "The package names every ingredient and its strength, so a photo taken at home shows whether the tablets combined acetaminophen with another drug, as many nighttime pain products do. These products are bought without a prescription, so neither the pharmacy dispensing record nor her family physician's chart would list them. A school counsellor may know about the breakup but not the product. A urine drug screen reports a few drug classes, gives no amount and does not measure acetaminophen, so it would not tell her team what or how much she took.",
        keyFeature: { topic: "tox", n: 1 },
        source: "apap-consensus",
      },
      {
        id: "q3",
        kind: "single",
        update: "It is now 2.5 hours since the ingestion. She is alert, follows instructions and is protecting her airway.",
        prompt: "Which of the following decontamination measures is most appropriate for her now?",
        options: ["Activated charcoal 50 g PO", "Gastric lavage by large tube", "Multiple dose activated charcoal", "Whole bowel irrigation", "No decontamination"],
        correct: 0,
        explanation:
          "She presents within the 4 hour window in which the 2023 consensus supports a single dose of activated charcoal after an acetaminophen overdose, and she is alert with a protected airway, so she can drink it safely. About 1 g/kg, or 50 g at 52 kg, binds drug still in a gut slowed by the co-ingestant. Gastric lavage adds risk without proven benefit. Repeated doses of charcoal are for drugs that recirculate or form masses, which is not the problem here. Whole bowel irrigation is for sustained release tablets, metals and packets. Giving nothing would waste a chance to reduce absorption.",
        keyFeature: { topic: "tox", n: 6 },
        source: "apap-consensus",
      },
      {
        id: "q4",
        kind: "single",
        update: "Her acetaminophen level drawn 4 hours after the ingestion is 480 umol/L (about 73 mg/L). AST is 24 U/L.",
        prompt: "Which of the following is the most appropriate next step in deciding whether she needs acetylcysteine?",
        options: ["Clear her for psychiatric review", "INR and lactate now", "Repeat AST in 12 hours", "Repeat level in 4 hours", "Urine acetaminophen screen"],
        correct: 3,
        explanation:
          "Her 4 hour level of 480 umol/L sits below the treatment line of 1000 umol/L (150 mg/L) but above 66 umol/L (10 mg/L). With an anticholinergic or opioid co-ingestant, absorption can be delayed, so the consensus advises a second level 4 to 6 hours after the first rather than relying on one value. Clearing her now could miss a later rise above the line. A normal AST this early does not exclude liver injury to come, and waiting 12 hours delays treatment. The INR and lactate grade established toxicity. A urine screen does not give a concentration to plot.",
        keyFeature: { topic: "tox", n: 7 },
        source: "apap-consensus",
      },
      {
        id: "q5",
        kind: "single",
        update: "She has been under constant observation. A second level, 8 hours after the ingestion, is 690 umol/L (about 104 mg/L).",
        prompt: "Which of the following best explains the rise in her acetaminophen level since the first sample?",
        options: ["Extended-release formulation", "Laboratory error", "Reduced renal clearance", "Second hidden ingestion", "Slowed gastric emptying"],
        correct: 4,
        explanation:
          "An anticholinergic drug slows the stomach and gut, as her reduced bowel sounds show, so acetaminophen keeps being absorbed for hours and the level can rise after a reassuring first sample. At 8 hours the treatment line is about 500 umol/L (75 mg/L), so 690 umol/L now calls for a full course of acetylcysteine. Extra strength 500 mg tablets are immediate release, not an extended-release product. She has been observed throughout, so a second ingestion is unlikely. Acetaminophen is cleared mainly by the liver, so reduced renal clearance would not explain a rise. Two consistent samples make a laboratory error unlikely.",
        keyFeature: { topic: "tox", n: 3 },
        source: "apap-consensus",
      },
    ],
    sources: [S.apap],
    ...META,
  },
];
