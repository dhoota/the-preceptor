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
  ccb: { id: "ccb-consensus", citation: "St-Onge M, Anseeuw K, Cantrell FL, et al. Experts consensus recommendations for the management of calcium channel blocker poisoning in adults. Crit Care Med. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5312725/" },
  glatstein: { id: "glatstein-octreotide", citation: "Glatstein M, Scolnik D, Bentur Y. Octreotide for the treatment of sulfonylurea poisoning. Clin Toxicol. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/23046209/" },
  crism: { id: "crism-aud-2023", citation: "Wood E, Bright J, Hsu K, and colleagues. Canadian Research Initiative in Substance Misuse. Canadian guideline for the clinical management of high-risk drinking and alcohol use disorder. CMAJ. 2023.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10581718/" },
  pawss: { id: "pawss-2014", citation: "Maldonado JR, Sher Y, Ashouri JF, and colleagues. The Prediction of Alcohol Withdrawal Severity Scale (PAWSS): systematic literature review and pilot study of a new scale for the prediction of complicated alcohol withdrawal syndrome. Alcohol. 2014." },
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
          "Gamma-butyrolactone is sold as an industrial solvent and is converted to GHB in the body within minutes. Dosing every 2 to 3 hours around the clock is the pattern of a dependent user, and tremor, sweating, anxiety and a fast pulse starting within hours of the last dose fit withdrawal from a drug with a half-life of 20 to 30 minutes. He does not drink, so alcohol withdrawal does not fit. Serotonin toxicity brings clonus and hyperreflexia, which he does not have. A sympathomimetic would not explain why symptoms began when his supply ran out. Nothing in his history suggests thyroid disease, and his symptoms began when his supply ran out.",
        keyFeature: { topic: "tox", n: 2 },
        source: "weaver-ghb",
      },
      {
        id: "q2",
        kind: "single",
        update: "Thirty minutes later, while his IV is being placed, his pulse is 112/minute. He says he has not slept and wants the liquid. He now believes he is in a hotel and is talking to people who are not in the room.",
        prompt: "Which of the following findings best shows that his withdrawal has become severe?",
        options: ["BP of 158/94 mmHg", "Craving for the liquid", "Delirium with hallucinations", "Lack of sleep overnight", "Pulse of 112/minute"],
        correct: 2,
        explanation:
          "His disorientation to place and his conversation with people who are not there show delirium with hallucinations, the observed signs that mark severe withdrawal and that can progress to seizures or death without treatment. Craving and lack of sleep are common in mild withdrawal and are reported by the patient, so they do not grade severity. His pulse has fallen from 118 to 112/minute, and a modest rise in pulse or blood pressure appears early in withdrawal of any severity. On their own, pulse and blood pressure do not mark severe withdrawal.",
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
      "You are working in a community hospital emergency department. A 5-day-old boy is brought in by his parents with 1 day of high-pitched crying, poor feeding and loose stools. He was born at 39 weeks by vaginal delivery after an uncomplicated labour and went home at 96 hours of age after a period of observation. His mother has taken methadone 60 mg daily for opioid use disorder throughout the pregnancy, and her HIV test was negative. She is breastfeeding. He has had no fever and no vomiting. He sneezes often, and he has a tremor and increased tone when handled. His anterior fontanelle is flat, his abdomen is soft and not distended, and his capillary refill is 2 seconds. His birth weight was 3.4 kg.",
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
        prompt: "Which of the following approaches does the Canadian Paediatric Society recommend for assessing his withdrawal?",
        options: ["Eat, Sleep, Console assessment", "Lipsitz neonatal drug withdrawal tool", "Modified Finnegan scoring", "Serial daily weights", "Serum methadone level"],
        correct: 0,
        explanation:
          "The Canadian Paediatric Society recommends the Eat, Sleep, Console approach for every newborn at risk, a family-centred, functional assessment of whether the infant can feed well, sleep and be consoled. It is repeated at regular intervals so that care can be stepped up or down. Finnegan scoring is still widely used but counts many nonspecific signs, and the CPS recommends ESC as the evidence-based alternative. The Lipsitz tool is an older sign checklist. Daily weights follow feeding but do not grade withdrawal, and a methadone level in the infant does not guide care.",
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
          "Her 4 hour level of 480 umol/L sits below the treatment line of 1000 umol/L (150 mg/L) but above 66 umol/L (10 mg/L). With an anticholinergic or opioid co-ingestant, absorption can be delayed, so the consensus advises a second level 4 to 6 hours after the first rather than relying on one value. Clearing her now could miss a later rise above the line. A normal AST this early does not exclude liver injury to come, and waiting 12 hours delays treatment. The INR and lactate grade established toxicity. A urine screen does not give a concentration to plot. If the repeat level at 8 hours were 690 umol/L (about 104 mg/L), it would sit above the 8 hour line of about 500 umol/L (75 mg/L), and she would need a full course of acetylcysteine.",
        keyFeature: { topic: "tox", n: 7 },
        source: "apap-consensus",
      },
    ],
    sources: [S.apap],
    ...META,
  },

  /* 51 Blood pressure pills and a falling glucose -------------------------- */
  {
    id: "tox-51",
    topic: "tox",
    alsoTopics: ["shock"],
    title: "Older woman sweating after an argument",
    stem:
      "A 67-year-old woman is brought to the emergency department by her husband 90 minutes after she told him she had swallowed her blood pressure pills during an argument. He brings an empty bottle of amlodipine 10 mg that was dispensed 10 days ago with 30 tablets. She has hypertension and knee osteoarthritis and takes amlodipine and acetaminophen. She ate breakfast 3 hours ago. She is drowsy, sweaty and slow to answer but follows commands. Her capillary glucose is 2.2 mmol/L. ALT is 22 U/L and INR is 1.0. Her chest is clear and her abdomen is soft.",
    vitals: { temperature: "36.6°C oral", pulse: "108/minute", resp: "18/minute", bp: "102/58 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "She becomes alert after dextrose 50% 50 mL IV. One hour later, on a dextrose 10% infusion, she is sweaty again with a glucose of 2.6 mmol/L.",
        prompt: "Which of the following best explains her recurrent hypoglycemia in the emergency department?",
        options: ["Adrenal insufficiency", "Amlodipine toxicity", "Early liver failure", "Prolonged fasting", "Sulfonylurea co-ingestion"],
        correct: 4,
        explanation:
          "A glucose of 2.2 mmol/L that falls again to 2.6 mmol/L on a dextrose 10% infusion points to ongoing insulin release, and sulfonylurea poisoning causes sustained hypoglycemia that is refractory to IV dextrose. Calcium channel blocker poisoning reduces insulin release and tends to raise glucose, so recurrent hypoglycemia after amlodipine points to a second drug. She ate 3 hours ago, so fasting does not explain it. A normal ALT and INR argue against liver failure. Nothing in her history suggests adrenal insufficiency, and it would not explain a glucose that falls again within an hour on an infusion.",
        keyFeature: { topic: "tox", n: 3 },
        source: "glatstein-octreotide",
      },
      {
        id: "q2",
        kind: "single",
        update: "She says she took only her own tablets.",
        prompt: "Which of the following is most likely to identify the cause of her low glucose?",
        options: ["Check all medicines in the home", "Her pharmacy dispensing profile", "Repeat history from her", "Serum C peptide level", "Urine drug screen"],
        correct: 0,
        explanation:
          "A drug that lowers glucose may belong to someone else in the home, so asking her husband to check every bottle and blister pack, including his own, is the quickest way to find it. Her own pharmacy profile lists only her prescriptions. She has already given her account, and a patient who has just overdosed in distress may not give a full one. A C peptide level shows that her own insulin is being released but does not name the drug, and it takes days to report. A standard urine drug screen does not detect the drugs that cause this.",
        keyFeature: { topic: "tox", n: 1 },
        source: "glatstein-octreotide",
      },
      {
        id: "q3",
        kind: "single",
        update: "Four hours after arrival her BP is 78/40 mmHg and her pulse 112/minute despite 2 L of crystalloid and calcium gluconate 3 g IV. Bedside echocardiography shows a small, vigorously contracting left ventricle.",
        prompt: "Which of the following is the most appropriate next treatment for her hypotension?",
        options: ["Dopamine infusion", "Glucagon infusion", "Methylene blue infusion", "Norepinephrine infusion", "Vasopressin infusion"],
        correct: 3,
        explanation:
          "Amlodipine relaxes the arterioles, and her fast pulse with a small, vigorous ventricle shows vasodilatory shock rather than a failing heart. The calcium channel blocker consensus lists IV calcium, high dose insulin when the heart is failing and norepinephrine or epinephrine as first line, and prefers norepinephrine for vasodilatory shock. It suggests against dopamine in shock because its effect was inconsistent. It does not recommend glucagon or methylene blue. No recommendation could be made for vasopressin as an added drug, and it is not a first-line choice.",
        keyFeature: { topic: "tox", n: 4 },
        source: "ccb-consensus",
      },
      {
        id: "q4",
        kind: "single",
        update: "She is moved to the intensive care unit on a norepinephrine infusion. The intensive care team asks when high dose insulin should be added.",
        prompt: "Which of the following findings would most support adding high dose insulin to her treatment?",
        options: ["Glucose of 14.0 mmol/L", "Lactate of 2.1 mmol/L", "Poor contraction on repeat echo", "Potassium of 3.6 mmol/L", "Pulse of 118/minute"],
        correct: 2,
        explanation:
          "The calcium channel blocker consensus gives high dose insulin as a first-line treatment, alongside the others, when there is evidence of myocardial dysfunction. A repeat echocardiogram that shows poor contraction, unlike her first small and vigorous ventricle, would therefore support adding it. Her shock so far is vasodilatory, which norepinephrine treats. A glucose of 14.0 mmol/L does not by itself call for insulin as a treatment of the poisoning. Insulin drives potassium into cells, so a potassium of 3.6 mmol/L is a value to watch and replace during treatment, not a reason to start it. A fast pulse is the expected reflex response to vasodilation, and a lactate of 2.1 mmol/L is only mildly raised.",
        keyFeature: { topic: "tox", n: 4 },
        source: "ccb-consensus",
      },
    ],
    sources: [S.glatstein, S.ccb],
    ...META,
  },

  /* 52 Asking for help to stop drinking, rural ------------------------------ */
  {
    id: "tox-52",
    topic: "tox",
    title: "Man who wants to stop drinking",
    stem:
      "You are working in a rural hospital emergency department with inpatient beds. A 48-year-old man presents asking for help to stop drinking. He has drunk 12 to 15 beers a day for 6 years, and his last drink was 10 hours ago. He was drunk two nights ago. When he goes without alcohol he gets morning shakes and sweats that settle with a drink. He reports no seizures, delirium, blackouts or past alcohol treatment. He says he uses no other substances and takes no medication. His wife can stay with him, and they live 10 minutes from the hospital. He has a fine tremor of his outstretched hands and is mildly sweaty. He is oriented and has no hallucinations. His serum ethanol is undetectable.",
    vitals: { temperature: "37.1°C oral", pulse: "102/minute", resp: "18/minute", bp: "146/88 mmHg", o2sat: "98% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is his Prediction of Alcohol Withdrawal Severity Scale score?",
        options: ["1", "2", "3", "4", "5"],
        correct: 2,
        explanation:
          "He meets the threshold because he has drunk in the last 30 days. He then scores 1 point for being drunk within the last 30 days, 1 for past withdrawal shown by his morning shakes and sweats, and 1 for signs of increased autonomic activity, his tremor and sweating, which makes 3. He has had no treatment, blackouts, seizures or delirium, he uses no sedatives or other substances, and his ethanol is not 200 mg/dL or more. A pulse of 102/minute is below 120/minute but the tremor and sweating already earn that point. A score of 4 or more marks high risk, so 3 is below it.",
        keyFeature: { topic: "tox", n: 8 },
        source: "pawss-2014",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate withdrawal management plan for him?",
        options: ["Admission for diazepam loading", "Discharge with no medication", "Outpatient diazepam taper", "Outpatient gabapentin with daily review", "Phenobarbital load, then discharge"],
        correct: 3,
        explanation:
          "With a score below 4, no past seizures or delirium, a support person at home and the hospital close by, the Canadian guideline suggests outpatient withdrawal management with a medication other than a benzodiazepine, such as gabapentin, with regular review. Benzodiazepines are offered to patients at high risk, ideally in hospital, so a home diazepam taper is not the first choice for him. Admission for diazepam loading is for high risk withdrawal, which he does not have. A phenobarbital load is not a plan for an outpatient. Discharge with nothing leaves his tremor and sweating untreated.",
        keyFeature: { topic: "tox", n: 8 },
        source: "crism-aud-2023",
      },
      {
        id: "q3",
        kind: "menu",
        select: 3,
        update: "His wife arrives. She says there are things he did not mention.",
        prompt: "Which of the following details, if his wife confirms them, would add points to his withdrawal severity score?",
        options: ["Blackouts after heavy drinking", "Clonazepam taken most nights", "Father with alcohol use disorder", "Fatty liver on ultrasound", "Seizure during a past attempt to quit", "Six years of daily drinking", "Started drinking at age 15"],
        correct: [0, 1, 4],
        explanation:
          "Collateral from his wife can change his risk category, and the scale counts past blackouts, past withdrawal seizures and combining alcohol with a benzodiazepine or barbiturate in the last 90 days, each as 1 point. Any two of these would lift his score from 3 to at least 5, into the high risk range. A family history of alcohol use disorder, fatty liver, the years he has been drinking and the age he started are not items on the scale, however much they matter to his long term care.",
        keyFeature: { topic: "tox", n: 1 },
        source: "pawss-2014",
      },
      {
        id: "q4",
        kind: "single",
        update: "His wife's account raises his score to 5.",
        prompt: "Which of the following is the most appropriate withdrawal management plan for him at this point?",
        options: ["Admission for benzodiazepine treatment", "Discharge with phenobarbital taper", "Observation for 4 hours, then discharge", "Outpatient diazepam with daily review", "Outpatient gabapentin with daily review"],
        correct: 0,
        explanation:
          "A score of 5 puts him at high risk of complicated withdrawal, and the Canadian guideline then recommends a short course of a benzodiazepine, ideally as an inpatient, which his hospital can offer. Outpatient benzodiazepines are kept for high risk patients who cannot be admitted and can be closely monitored. Gabapentin is suggested for low risk patients, which he no longer is. A few hours of observation will not cover the days in which seizures and delirium appear. A phenobarbital taper at home is not a recommended plan for high risk withdrawal.",
        keyFeature: { topic: "tox", n: 8 },
        source: "crism-aud-2023",
      },
    ],
    sources: [S.pawss, S.crism],
    ...META,
  },
];
