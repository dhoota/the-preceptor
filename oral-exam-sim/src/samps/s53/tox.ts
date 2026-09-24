// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  cag: { id: "cag", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Online edition. Accessed 24 September 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes" },
  aha: { id: "aha-2023", citation: "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023." },
  goldfrank: { id: "goldfrank", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019." },
  tenenbein: { id: "tenenbein-screen", citation: "Tenenbein M. Do you really need that emergency drug screen? Clin Toxicol. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19514875/" },
  glatstein: { id: "glatstein-octreotide", citation: "Glatstein M, Scolnik D, Bentur Y. Octreotide for the treatment of sulfonylurea poisoning. Clin Toxicol. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/23046209/" },
  extripMet: { id: "extrip-metformin", citation: "Calello DP, Liu KD, Wiegand TJ, et al. Extracorporeal treatment for metformin poisoning: systematic review and recommendations from the EXTRIP workgroup. Crit Care Med. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25860205/" },
  extripVpa: { id: "extrip-valproate", citation: "Ghannoum M, Laliberte M, Nolin TD, et al. Extracorporeal treatment for valproic acid poisoning: systematic review and recommendations from the EXTRIP workgroup. Clin Toxicol. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25950372/" },
  extripCbz: { id: "extrip-carbamazepine", citation: "Ghannoum M, Yates C, Galvao TF, et al. Extracorporeal treatment for carbamazepine poisoning: systematic review and recommendations from the EXTRIP workgroup. Clin Toxicol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25355482/" },
  slaughter: { id: "slaughter-isopropanol", citation: "Slaughter RJ, Mason RW, Beasley DM, Vale JA, Schep LJ. Isopropanol poisoning. Clin Toxicol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24815348/" },
  caustic: { id: "caustic-nejm", citation: "Hoffman RS, Burns MM, Gosselin S. Ingestion of caustic substances. N Engl J Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32348645/" },
  hf: { id: "hf-burns", citation: "McKee D, Thoma A, Bailey K, Fish J. A review of hydrofluoric acid burn management. Plast Surg. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25114621/" },
  borron: { id: "borron-cyanide", citation: "Borron SW, Baud FJ, Barriot P, Imbert M, Bismuth C. Prospective study of hydroxocobalamin for acute cyanide poisoning in smoke inhalation. Ann Emerg Med. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17481777/" },
  tormoehlen: { id: "tormoehlen-hc", citation: "Tormoehlen LM, Tekulve KJ, Nanagas KA. Hydrocarbon toxicity: a review. Clin Toxicol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24911841/" },
  cannabis: { id: "cannabis-cfp", citation: "Zwiebel H, Greenky D, Goldman RD. Accidental cannabis ingestion in young children. Can Fam Physician. 2025.", url: "https://www.cfp.ca/content/71/3/161" },
  eggleston: { id: "eggleston-loperamide", citation: "Eggleston W, Clark KH, Marraffa JM. Loperamide abuse associated with cardiac dysrhythmia and death. Ann Emerg Med. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/27140747/" },
  bccsu: { id: "bccsu-oud", citation: "British Columbia Centre on Substance Use and BC Ministry of Health. A guideline for the clinical management of opioid use disorder. 2023 update.", url: "https://www.bccsu.ca/opioid-use-disorder/" },
  insulin: { id: "insulin-review", citation: "Johansen NJ, Christensen MB. A systematic review on insulin overdose cases: clinical course, complications and treatment options. Basic Clin Pharmacol Toxicol. 2018.", url: "https://onlinelibrary.wiley.com/doi/10.1111/bcpt.12957" },
  colchicine: { id: "colchicine-review", citation: "Finkelstein Y, Aks SE, Hutson JR, et al. Colchicine poisoning: the dark side of an ancient drug. Clin Toxicol. 2010.", url: "https://pubmed.ncbi.nlm.nih.gov/20586571/" },
  amatoxin: { id: "amatoxin-review", citation: "Enjalbert F, Rapior S, Nouguier-Soule J, et al. Treatment of amatoxin poisoning: 20-year retrospective analysis. J Toxicol Clin Toxicol. 2002.", url: "https://pubmed.ncbi.nlm.nih.gov/12475187/" },
  asra: { id: "asra-last", citation: "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine local anesthetic systemic toxicity checklist: 2020 version. Reg Anesth Pain Med. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/33148630/" },
  penninga: { id: "penninga-flumazenil", citation: "Penninga EI, Graudal N, Ladekarl MB, Jurgens G. Adverse events associated with flumazenil treatment for the management of suspected benzodiazepine intoxication: a systematic review with meta-analyses of randomised trials. Basic Clin Pharmacol Toxicol. 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/26096314/" },
  nacPcc: { id: "nac-pcc", citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. Revised 2022.", url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" },
  traub: { id: "traub-bodypacking", citation: "Traub SJ, Hoffman RS, Nelson LS. Body packing: the internal concealment of illicit drugs. N Engl J Med. 2003.", url: "https://pubmed.ncbi.nlm.nih.gov/14695412/" },
  wbi: { id: "wbi-position", citation: "Thanacoody R, Caravati EM, Troutman B, et al. Position paper update: whole bowel irrigation for gastrointestinal decontamination of overdose patients. Clin Toxicol. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25511637/" },
  apap: { id: "apap-consensus", citation: "Dart RC, Mullins ME, Matoushek T, et al. Management of acetaminophen poisoning in the US and Canada: a consensus statement. JAMA Netw Open. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37552484/" },
  kings: { id: "kings-college", citation: "O'Grady JG, Alexander GJ, Hayllar KM, Williams R. Early indicators of prognosis in fulminant hepatic failure. Gastroenterology. 1989.", url: "https://pubmed.ncbi.nlm.nih.gov/2490426/" },
  cows: { id: "cows-scale", citation: "Wesson DR, Ling W. The Clinical Opiate Withdrawal Scale (COWS). J Psychoactive Drugs. 2003.", url: "https://pubmed.ncbi.nlm.nih.gov/12924748/" },
  bcAud: { id: "bc-aud", citation: "British Columbia Centre on Substance Use and BC Ministry of Health. Provincial guideline for the clinical management of high-risk drinking and alcohol use disorder. 2019.", url: "https://www.bccsu.ca/alcohol-use-disorder/" },
  ecbcOat: { id: "ecbc-missed-oat", citation: "Kestler A, Miles I, Chai J, Brar R. Missed OAT doses. Emergency Care BC clinical summary. 2024.", url: "https://emergencycarebc.ca/clinical_resource/clinical-summary/missed-oat-doses/" },
  rosenson: { id: "rosenson-phenobarbital", citation: "Rosenson J, Clements C, Simon B, et al. Phenobarbital for acute alcohol withdrawal: a prospective randomized double-blind placebo-controlled study. J Emerg Med. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/22999778/" },
  marquardt: { id: "marquardt-hcq", citation: "Marquardt K, Albertson TE. Treatment of hydroxychloroquine overdose. Am J Emerg Med. 2001.", url: "https://pubmed.ncbi.nlm.nih.gov/11555803/" },
  long: { id: "long-hyperkalemia", citation: "Long B, Warix JR, Koyfman A. Controversies in management of hyperkalemia. J Emerg Med. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/29731287/" },
  extripTheo: { id: "extrip-theophylline", citation: "Ghannoum M, Wiegand TJ, Liu KD, et al. Extracorporeal treatment for theophylline poisoning: systematic review and recommendations from the EXTRIP workgroup. Clin Toxicol. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25715736/" },
  riou: { id: "riou-chloroquine", citation: "Riou B, Barriot P, Rimailho A, Baud FJ. Treatment of severe chloroquine poisoning. N Engl J Med. 1988.", url: "https://pubmed.ncbi.nlm.nih.gov/3336379/" },
  paris: { id: "paris-n2o", citation: "Paris A, Lake L, Joseph A, et al. Nitrous oxide-induced subacute combined degeneration of the cord: diagnosis and treatment. Pract Neurol. 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/36813556/" },
  garakani: { id: "garakani-n2o", citation: "Garakani A, Jaffe RJ, Savla D, et al. Neurologic, psychiatric, and other medical manifestations of nitrous oxide abuse: a systematic review of the case literature. Am J Addict. 2016.", url: "https://onlinelibrary.wiley.com/doi/10.1111/ajad.12372" },
} satisfies Record<string, Source>;

export const TOX_S53: Samp[] = [
  /* 16 Hydroxychloroquine ------------------------------------------------- */
  {
    id: "tox-16",
    topic: "tox",
    title: "Young woman brought in after an argument at home",
    stem:
      "A 29-year-old woman is brought to the emergency department by her partner 1 hour after she swallowed a handful of tablets during an argument. Her partner brings an empty bottle labelled hydroxychloroquine 200 mg that was dispensed last week with 100 tablets. She takes it for lupus and no other medication. She is drowsy but answers questions and her skin is cool. K 2.4 mmol/L and glucose 6.0 mmol/L. The ECG shows sinus tachycardia with a QRS of 126 ms and a QTc of 520 ms.",
    vitals: { temperature: "36.8°C oral", pulse: "122/minute", resp: "18/minute", bp: "84/48 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following pieces of collateral information most changes her immediate care?",
        options: ["Her last menstrual period", "The bottle label and tablet count", "The name of her rheumatologist", "Whether she drove herself here", "Whether she has eaten today"],
        correct: 1,
        explanation:
          "The label names hydroxychloroquine and the dispensed count of 100 tablets sets an upper limit on what she took, which is what turns a drowsy patient with a QRS of 126 ms into a recognized cardiotoxic ingestion needing epinephrine, high dose diazepam and close watch on her potassium. Her rheumatologist can confirm the prescription later but not within the hour. A menstrual history matters for pregnancy testing rather than for this decision. How she travelled and when she last ate do not alter the treatment of her conduction delay.",
        keyFeature: { topic: "tox", n: 1 },
        source: "marquardt-hcq",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next hour?",
        options: ["Hepatic failure with jaundice", "Hypoglycemia with seizures", "Pulmonary edema from fluid", "Severe hyperthermia", "Ventricular dysrhythmia and arrest"],
        correct: 4,
        explanation:
          "Hydroxychloroquine blocks fast sodium and potassium channels, and she already has a QRS of 126 ms, a QTc of 520 ms and a blood pressure of 84/48 mmHg, so ventricular dysrhythmia and arrest are what the next hour holds. Hypoglycemia can follow chloroquine drugs but her glucose is 6.0 mmol/L and it is not the threat that kills first. Hyperthermia is not a feature of this poisoning, pulmonary edema is a later problem of large fluid and vasopressor loads rather than the event of the next hour, and hepatic failure is not described after an acute ingestion.",
        keyFeature: { topic: "tox", n: 5 },
        source: "marquardt-hcq",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her blood pressure of 84/48 mmHg?",
        options: ["calcium chloride bolus IV", "epinephrine infusion IV", "glucagon bolus IV", "lipid emulsion 20% bolus IV", "vasopressin infusion IV"],
        correct: 1,
        explanation:
          "Hydroxychloroquine both dilates vessels and depresses the myocardium, and epinephrine treats both. It is the vasopressor in the regimen of early ventilation, high dose diazepam and epinephrine that improved survival after severe chloroquine poisoning, and the same approach is used for hydroxychloroquine. Her QRS of 126 ms is treated with hypertonic sodium bicarbonate at the same time, with the potassium rechecked because bicarbonate drives it lower. Vasopressin constricts vessels without supporting a failing myocardium. Glucagon is used for beta blocker poisoning. Lipid emulsion is kept for arrest or shock that fails standard care, and its support here rests on case reports. Calcium treats calcium channel blocker poisoning and hyperkalemia, and her potassium is 2.4 mmol/L.",
        keyFeature: { topic: "tox", n: 4 },
        source: "riou-chloroquine",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following investigations should be ordered for her in the emergency department?",
        options: ["Chest radiograph", "Head CT without contrast", "Serum acetaminophen level", "Serum creatine kinase", "Serum potassium concentration", "Twelve lead ECG", "Urine drug screen"],
        select: 3,
        correct: [2, 4, 5],
        explanation:
          "Her potassium of 2.4 mmol/L reflects potassium driven into cells rather than lost from the body. It falls further when bicarbonate is given and can rebound as the drug is cleared, so it is measured repeatedly and replaced with care. Serial ECGs follow the QRS of 126 ms and the QTc of 520 ms. She reached for pills during an argument, so a silent acetaminophen co-ingestion is possible and a measurable concentration would start acetylcysteine. A urine drug screen reports classes she is not suspected of taking. Creatine kinase follows prolonged seizures, which she has not had. A head CT is for a focal deficit or head injury, which the case does not describe, and a chest film is for hypoxia, and her saturation is 97%.",
        keyFeature: { topic: "tox", n: 7 },
        source: "tenenbein-screen",
      },
    ],
    sources: [S.marquardt, S.riou, S.tenenbein],
    ...META,
  },

  /* 17 Sulfonylurea hypoglycemia ----------------------------------------- */
  {
    id: "tox-17",
    topic: "tox",
    title: "Older woman found sweaty and confused at home",
    stem:
      "An 82-year-old woman is brought to the emergency department by her son, who found her sweaty and confused at home. She takes glyburide 5 mg twice daily, ramipril and atorvastatin. She has eaten little for 2 days because of a chest infection. Paramedics measured a capillary glucose of 1.9 mmol/L and gave dextrose IV, after which she woke up. She is now oriented and hungry. Repeat capillary glucose is 7.4 mmol/L. Creatinine 148 umol/L with an estimated glomerular filtration rate of 32 mL/minute. The examination is otherwise normal.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "132/78 mmHg", o2sat: "96% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment to prevent recurrent hypoglycemia in her?",
        options: ["dextrose 50% 50 mL IV every 4 hours", "glucagon 1 mg IM once", "hydrocortisone 100 mg IV", "octreotide 50 mcg SC every 6 hours", "oral glucose gel as needed"],
        correct: 3,
        explanation:
          "Glyburide keeps stimulating insulin release, and dextrose boluses provoke further release, so hypoglycemia returns. Octreotide suppresses pancreatic insulin secretion and reduces repeat hypoglycemia after sulfonylurea poisoning. Repeated dextrose 50% boluses treat each episode but feed the cycle. Glucagon gives a brief rise that depends on glycogen stores, and she has eaten little for 2 days. Hydrocortisone treats adrenal insufficiency, which her history does not suggest. Oral glucose gel alone will not hold her through a night on glyburide with an estimated glomerular filtration rate of 32 mL/minute.",
        keyFeature: { topic: "tox", n: 2 },
        source: "glatstein-octreotide",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her from the emergency department?",
        options: ["Admit for 24 hours of glucose monitoring", "Discharge after a meal and repeat glucose", "Discharge with a glucagon kit at home", "Observe for 4 hours then discharge home", "Refer to her family physician tomorrow"],
        correct: 0,
        explanation:
          "Glyburide and its active metabolites outlast a single meal, and her estimated glomerular filtration rate of 32 mL/minute slows their clearance further, so she needs at least 24 hours of monitored glucose measurement. She also lives with poor oral intake during a chest infection. A meal, a 4 hour observation or an outpatient referral all release her while insulin release is still driven by the drug. A home glucagon kit depends on glycogen stores and on someone to give it, and it does not replace monitoring.",
        keyFeature: { topic: "tox", n: 5 },
        source: "glatstein-octreotide",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations best explains why she became hypoglycemic on her usual dose?",
        options: ["Estimated glomerular filtration rate", "Random serum cortisol", "Serum C peptide concentration", "Serum insulin concentration", "Urine sulfonylurea screen"],
        correct: 0,
        explanation:
          "Her estimated glomerular filtration rate of 32 mL/minute shows reduced renal clearance of the active metabolites of glyburide, which together with 2 days of poor intake explains hypoglycemia on an unchanged dose. C peptide and insulin concentrations would confirm endogenous insulin release but not explain why the usual dose became too much. A sulfonylurea screen confirms a drug she is known to take. Random cortisol tests for adrenal insufficiency, which her presentation and recovery do not suggest.",
        keyFeature: { topic: "tox", n: 7 },
        source: "glatstein-octreotide",
      },
      {
        id: "q4",
        kind: "menu",
        update: "She is admitted to the medical unit. Her capillary glucose falls to 3.1 mmol/L 3 hours later and she feels shaky again.",
        prompt: "Which of the following are appropriate parts of her inpatient care over the next 24 hours?",
        options: ["Continue glyburide at her usual dose", "Dextrose 10% infusion titrated to glucose", "Glucagon infusion IV", "Hold glyburide while in hospital", "Hourly capillary glucose checks", "Insulin infusion for tight control", "Repeat dextrose 50% boluses only"],
        select: 3,
        correct: [1, 3, 4],
        explanation:
          "Holding glyburide removes the drive to insulin release, a dextrose 10% infusion titrated to her glucose maintains a steady supply between meals, and hourly capillary checks find the next fall early, as her fall to 3.1 mmol/L at 3 hours shows. Continuing glyburide repeats the exposure that caused the problem. Relying on repeat dextrose 50% boluses provokes further insulin release. A glucagon infusion depends on glycogen stores that 2 days of poor intake have reduced. An insulin infusion would lower her glucose further.",
        keyFeature: { topic: "tox", n: 4 },
        source: "cag",
      },
    ],
    sources: [S.glatstein, S.cag],
    ...META,
  },

  /* 18 Metformin associated lactic acidosis ------------------------------ */
  {
    id: "tox-18",
    topic: "tox",
    title: "Man with vomiting and fast breathing",
    stem:
      "A 66-year-old man presents to the emergency department with 2 days of vomiting, diarrhea and weakness. He takes metformin 1000 mg twice daily, perindopril and naproxen for knee pain. He has had no fever or cough. His mucous membranes are dry and his abdomen is soft and not tender. He is drowsy but rousable. Venous pH 6.96 with HCO3 5 mmol/L and lactate 22 mmol/L. Na 137, K 5.8, Cl 99 mmol/L, urea 19 mmol/L. Creatinine 386 umol/L, up from 92 umol/L 3 months ago. Glucose 7.2 mmol/L.",
    vitals: { temperature: "36.2°C oral", pulse: "104/minute", resp: "30/minute", bp: "96/58 mmHg", o2sat: "97% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his raised anion gap metabolic acidosis?",
        options: ["Accumulation of metformin", "Diabetic ketoacidosis", "Ethylene glycol ingestion", "Salicylate toxicity", "Uremic acidosis from kidney injury"],
        correct: 0,
        explanation:
          "His anion gap is 137 minus 99 minus 5, which is 33 mmol/L, and the lactate of 22 mmol/L accounts for most of it. Two days of vomiting and diarrhea on metformin and perindopril with naproxen produced a creatinine of 386 umol/L, metformin accumulates, and lactate rises. His glucose of 7.2 mmol/L argues against diabetic ketoacidosis. Uremia alone rarely drives a gap this wide, and it does not produce a lactate of 22 mmol/L. There is no history of drinking a toxic alcohol, and salicylate toxicity usually brings tinnitus with a respiratory alkalosis as well.",
        keyFeature: { topic: "tox", n: 3 },
        source: "extrip-metformin",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in treating his acidosis?",
        options: ["Insulin infusion with dextrose", "Intermittent hemodialysis now", "Isotonic bicarbonate infusion alone", "Repeat lactate in 6 hours", "Sodium bicarbonate 100 mmol IV bolus"],
        correct: 1,
        explanation:
          "A pH of 6.96 and a lactate of 22 mmol/L each meet a recommended EXTRIP criterion for extracorporeal treatment in metformin poisoning, a pH of 7.0 or less and a lactate above 20 mmol/L, and with a creatinine of 386 umol/L he cannot clear the drug himself. Intermittent hemodialysis removes metformin and corrects the acidemia at the same time. Bicarbonate by bolus or infusion buffers acid without removing the drug or restoring clearance. Insulin with dextrose treats ketoacidosis, and his glucose is 7.2 mmol/L. Repeating the lactate in 6 hours delays the only treatment that addresses both problems.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-metformin",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following tests best screens for a toxic alcohol as a second cause of his acidosis?",
        options: ["Serum beta hydroxybutyrate", "Serum osmolality with calculated gap", "Serum salicylate concentration", "Urinary calcium oxalate crystals", "Urine drug screen for alcohols"],
        correct: 1,
        explanation:
          "A measured serum osmolality compared with one calculated from his sodium, glucose and urea gives the osmolal gap, which rises early after a toxic alcohol is drunk. A normal gap does not fully exclude one, and his kidney failure and lactate raise the gap a little on their own, so the result is read with those in mind. Beta hydroxybutyrate tests for ketones and a salicylate concentration for a different poison, so neither addresses alcohols. Calcium oxalate crystals appear late after ethylene glycol and are absent in many poisoned patients. Routine urine drug screens do not report methanol, ethylene glycol or their metabolites.",
        keyFeature: { topic: "tox", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications should be anticipated in the next few hours?",
        options: ["Acute pancreatitis from vomiting", "Cerebral edema from bicarbonate", "Hyperkalemic cardiac dysrhythmia", "Hypoglycemia from metformin alone", "Rhabdomyolysis from immobility"],
        correct: 2,
        explanation:
          "His potassium is 5.8 mmol/L with a creatinine of 386 umol/L and a pH of 6.96, and acidemia shifts potassium out of cells, so a dysrhythmia is the complication to watch for while dialysis is arranged. Metformin does not stimulate insulin release, so hypoglycemia on its own is unlikely at a glucose of 7.2 mmol/L. Cerebral edema is described in children treated for ketoacidosis rather than as a bicarbonate effect here. Nothing in the history points to pancreatitis or to prolonged immobility.",
        keyFeature: { topic: "tox", n: 5 },
        source: "extrip-metformin",
      },
    ],
    sources: [S.extripMet, S.goldfrank],
    ...META,
  },

  /* 19 Valproate ---------------------------------------------------------- */
  {
    id: "tox-19",
    topic: "tox",
    title: "Man found unresponsive beside an empty bottle",
    stem:
      "A 29-year-old man is brought to the emergency department by ambulance 3 hours after his roommate found him unresponsive beside an empty bottle of divalproex 500 mg tablets. The bottle was dispensed last week with 100 tablets. He takes divalproex for bipolar disorder and nothing else. He responds only to painful stimuli. Pupils are 3 mm and reactive. Glucose 5.6 mmol/L. Na 139 mmol/L, HCO3 17 mmol/L, ammonia 142 umol/L. The valproate concentration is 6800 umol/L. The ECG shows sinus tachycardia with a normal QRS.",
    vitals: { temperature: "36.4°C oral", pulse: "118/minute", resp: "12/minute", bp: "104/62 mmHg", o2sat: "95% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following treatments is most appropriate for his raised serum ammonia?",
        options: ["L carnitine 100 mg/kg IV", "lactulose 30 g PO", "naloxone 0.4 mg IV", "rifaximin 550 mg PO", "sodium benzoate 5 g IV bolus"],
        correct: 0,
        explanation:
          "Valproate depletes carnitine and blocks urea cycle handling of ammonia, and his ammonia is 142 umol/L with coma after a large divalproex ingestion. L carnitine replaces the depleted cofactor and is the treatment recommended for valproate induced hyperammonemic encephalopathy. The Canadian Antidote Guide loading dose is 100 mg/kg to a maximum of 6 g, so he receives 6 g rather than 7.2 g, then 15 mg/kg every 4 hours. Lactulose and rifaximin target ammonia produced by gut flora in liver disease, which is a different mechanism. Sodium benzoate is used in inborn urea cycle disorders. Naloxone reverses opioid effect, does nothing to ammonia, and nothing in the history suggests access to an opioid.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cag",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings best supports starting hemodialysis for him now?",
        options: ["Bicarbonate of 17 mmol/L", "Blood pressure of 104/62 mmHg", "Coma with a valproate of 6800 umol/L", "Ingestion of 100 tablets by history", "Tachycardia of 118/minute"],
        correct: 2,
        explanation:
          "A valproate of 6800 umol/L is about 980 mg/L, above the EXTRIP threshold of 900 mg/L (about 6250 umol/L) at which extracorporeal treatment is suggested, and he also has coma that will need mechanical ventilation, a second suggested criterion. His ammonia of 142 umol/L is a further supporting criterion. A blood pressure of 104/62 mmHg is not the shock that would make dialysis a firm recommendation. A bicarbonate of 17 mmol/L is well short of the pH of 7.10 or less that EXTRIP uses. A tablet count from a bottle is an estimate of dose rather than a measure of effect. Sinus tachycardia of 118/minute is non specific.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-valproate",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway management for him at this point?",
        options: ["Bag mask ventilation and observation", "High flow oxygen by face mask", "Nasopharyngeal airway insertion", "Rapid sequence intubation now", "Supraglottic airway insertion"],
        correct: 3,
        explanation:
          "He responds only to painful stimuli and breathes at 12/minute after a large divalproex ingestion, and absorption from tablets continues, so his level of consciousness is likely to fall further. Intubation protects the airway before hemodialysis and transfer. Oxygen by mask treats the saturation of 95% without protecting the airway. A nasopharyngeal or supraglottic airway does not prevent aspiration of gastric contents. Bag mask support with observation leaves a comatose patient unprotected during procedures.",
        keyFeature: { topic: "tox", n: 5 },
        source: "extrip-valproate",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following investigations is most likely to change his management over the next 6 hours?",
        options: ["Electroencephalogram", "Head CT without contrast", "Repeat valproate level", "Serum ammonia in 24 hours", "Urine drug screen"],
        correct: 2,
        explanation:
          "A repeat valproate concentration shows whether absorption from the tablets is still rising and whether dialysis has lowered the concentration, and it therefore guides whether treatment continues. A urine drug screen reports classes rather than valproate. Head CT and electroencephalography are for focal signs or suspected seizures, and he has neither. Waiting 24 hours for the next ammonia is too slow to guide care in the next 6 hours.",
        keyFeature: { topic: "tox", n: 7 },
        source: "extrip-valproate",
      },
    ],
    sources: [S.cag, S.extripVpa],
    ...META,
  },

  /* 20 Carbamazepine ------------------------------------------------------ */
  {
    id: "tox-20",
    topic: "tox",
    title: "Woman with unsteadiness and a brief seizure",
    stem:
      "A 52-year-old woman is brought to the emergency department by her daughter after taking an unknown number of her carbamazepine 200 mg tablets about 4 hours ago. She takes carbamazepine for trigeminal neuralgia. She had one brief generalized seizure in the ambulance and is now drowsy but rousable, with nystagmus, ataxia and 6 mm pupils. Na 128 mmol/L and glucose 5.9 mmol/L. The carbamazepine concentration is 165 umol/L. The ECG shows sinus tachycardia with a QRS of 104 ms.",
    vitals: { temperature: "37.0°C oral", pulse: "116/minute", resp: "16/minute", bp: "110/70 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following decontamination or elimination strategies is most appropriate for her now?",
        options: ["Gastric lavage then charcoal", "Multiple dose activated charcoal", "Sorbitol cathartic with charcoal", "Urinary alkalinization", "Whole bowel irrigation"],
        correct: 1,
        explanation:
          "Carbamazepine is absorbed slowly, forms concretions and undergoes enterohepatic recirculation, so repeated doses of activated charcoal continue to bind drug in the gut and shorten its half life. She is rousable and can protect her airway at present. Gastric lavage 4 hours after ingestion carries aspiration risk with little yield. Repeated cathartics cause fluid and electrolyte loss without added benefit. Whole bowel irrigation is for iron, lithium, packets and modified release products. Carbamazepine is not appreciably cleared by alkalinizing the urine.",
        keyFeature: { topic: "tox", n: 6 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains her serum sodium of 128 mmol/L?",
        options: ["Cerebral salt wasting", "Free water intake with vomiting", "Pseudohyponatremia from lipemia", "Syndrome of inappropriate antidiuresis", "Thiazide effect on the kidney"],
        correct: 3,
        explanation:
          "Carbamazepine promotes water retention through an antidiuretic effect, and the syndrome of inappropriate antidiuresis is the usual reason a patient taking it presents with a sodium of 128 mmol/L. She takes carbamazepine and nothing else, so a thiazide effect does not apply. Cerebral salt wasting follows intracranial injury or surgery, which she has not had. She has not vomited or been described as drinking large volumes of water. Pseudohyponatremia needs marked hyperlipidemia or paraproteinemia, and neither is described.",
        keyFeature: { topic: "tox", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following complications should be anticipated over the next several hours?",
        options: ["Acute kidney injury", "Further generalized seizures", "Hepatic failure within hours", "Pancreatitis with severe pain", "Progressive coma with apnea", "Thrombocytopenic bleeding", "Thyroid storm with fever"],
        select: 2,
        correct: [1, 4],
        explanation:
          "She has already had one seizure, and her sodium of 128 mmol/L lowers the threshold for another. Absorption of carbamazepine is slow and erratic, so the concentration of 165 umol/L, about 39 mg/L, can still climb and deepen the coma to the point of apnea, which is why she is watched in a monitored bed. Acute hepatic failure, pancreatitis and marrow suppression with bleeding are described during long term carbamazepine use rather than in the hours after an acute overdose. Nothing in her results points to kidney injury, and thyroid storm is unrelated to this drug.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        update: "Six hours later she has a second seizure, remains comatose and is intubated. The repeat carbamazepine concentration is 220 umol/L.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: ["Continuous venovenous hemofiltration", "Intermittent hemodialysis now", "Peritoneal dialysis catheter", "Sodium bicarbonate infusion IV", "Therapeutic plasma exchange"],
        correct: 1,
        explanation:
          "Coma needing mechanical ventilation and toxicity that persists while the concentration rises from 165 to 220 umol/L (about 39 to 52 mg/L) despite charcoal are settings where EXTRIP suggests extracorporeal removal, and intermittent hemodialysis is the preferred method. Continuous venovenous techniques clear drug more slowly and are alternatives only when hemodialysis is not available. Peritoneal dialysis is too slow to help. Plasma exchange is not among the recommended alternatives, which are hemoperfusion and continuous techniques. Her QRS was 104 ms, so bicarbonate does not address the problem driving her seizures.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-carbamazepine",
      },
    ],
    sources: [S.goldfrank, S.extripCbz],
    ...META,
  },

  /* 21 Sustained release potassium chloride -------------------------------- */
  {
    id: "tox-21",
    topic: "tox",
    title: "Weak legs after swallowing a bottle of tablets",
    stem:
      "You are working in a rural hospital emergency department 300 km from the nearest dialysis unit. A 52-year-old man presents 2 hours after swallowing about 60 of his potassium chloride 20 mmol sustained release tablets. He takes them with a thiazide for hypertension and has no kidney disease. He feels nauseated and his legs feel heavy. Creatinine 92 umol/L, K 7.6 mmol/L, Na 139 mmol/L, glucose 6.1 mmol/L and venous pH 7.38. The ECG shows peaked T waves with a PR interval of 240 ms and a QRS of 118 ms.",
    vitals: { temperature: "36.7°C oral", pulse: "52/minute", resp: "18/minute", bp: "132/80 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his serum potassium of 7.6 mmol/L?",
        options: ["Absorbed potassium from the tablets", "Acute kidney injury from diuretics", "Hemolysis in the blood sample", "Metabolic acidosis shifting potassium", "Rhabdomyolysis from weakness"],
        correct: 0,
        explanation:
          "Sixty tablets hold 1200 mmol of potassium, and absorption from a sustained release product 2 hours after swallowing is enough to reach 7.6 mmol/L with peaked T waves, a PR of 240 ms and a QRS of 118 ms in a man whose creatinine is 92 umol/L. A sample artefact would not produce those ECG changes. His kidney function is normal, so retention from diuretic induced injury does not apply. His venous pH is 7.38, so no acidosis is shifting potassium out of cells. He has heaviness rather than muscle injury, and rhabdomyolysis takes hours to release this much potassium.",
        keyFeature: { topic: "tox", n: 3 },
        source: "long-hyperkalemia",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best describes how his potassium will change over the next few hours?",
        options: ["Fall as his kidneys excrete it", "Fall as it shifts into cells", "Rise as the tablets keep releasing", "Stay level after the first peak", "Swing low from his thiazide"],
        correct: 2,
        explanation:
          "Sustained release tablets keep releasing potassium for hours, and 2 hours after swallowing 60 tablets holding 1200 mmol only part of the load has been absorbed, so a potassium already at 7.6 mmol/L is expected to keep rising. His creatinine of 92 umol/L means his kidneys do excrete potassium, but they cannot keep pace with a load of this size. Some potassium moves into cells, which is why insulin and salbutamol buy time, but that shift is temporary and cannot absorb the whole load. A level that stays flat assumes absorption has finished, which it has not with a modified release product. His thiazide promotes urinary potassium loss over days rather than hours and will not lower a level the tablets are still raising.",
        keyFeature: { topic: "tox", n: 5 },
        source: "wbi-position",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following decontamination measures is most appropriate for this ingestion?",
        options: ["Activated charcoal 50 g PO", "Gastric lavage with a large tube", "Milk to bind the tablets", "Repeat dose charcoal by tube", "Whole bowel irrigation by tube"],
        correct: 4,
        explanation:
          "Polyethylene glycol by tube moves sustained release tablets through the bowel before the rest of their potassium is released, which is the situation in which whole bowel irrigation is recommended for modified release products. Charcoal does not bind potassium, whether given once or repeatedly. Lavage 2 hours after a large tablet load recovers little and risks aspiration. Milk neither binds the salt nor speeds its passage, and it adds volume to a nauseated patient.",
        keyFeature: { topic: "tox", n: 6 },
        source: "wbi-position",
      },
      {
        id: "q4",
        kind: "menu",
        update: "He has received calcium and his ECG looks unchanged. The repeat potassium 1 hour later is 7.9 mmol/L and he now cannot lift either leg off the bed.",
        prompt: "Which of the following are appropriate in his care over the next few hours?",
        options: ["Arrange transfer for hemodialysis", "Insulin with dextrose infusion", "Oral potassium supplement", "Potassium sparing diuretic", "Repeat ECG and potassium hourly", "Sodium bicarbonate infusion IV", "Sodium polystyrene sulfonate PO"],
        select: 3,
        correct: [0, 1, 4],
        explanation:
          "A potassium that climbs to 7.9 mmol/L with new leg weakness while tablets continue to release needs removal rather than further shifting alone, so transfer for hemodialysis is arranged from a hospital 300 km away while insulin with dextrose holds the potassium down and hourly ECG and potassium measurements track the rise. Calcium is repeated while the ECG stays abnormal, since it protects the heart without lowering the potassium. More potassium by any route or a potassium sparing diuretic would add to the load. Bicarbonate shifts potassium only in acidemia, and his pH is 7.38. Sodium polystyrene sulfonate works too slowly to be relied on here.",
        keyFeature: { topic: "tox", n: 4 },
        source: "long-hyperkalemia",
      },
    ],
    sources: [S.long, S.wbi],
    ...META,
  },

  /* 22 Isopropanol -------------------------------------------------------- */
  {
    id: "tox-22",
    topic: "tox",
    title: "Confused man found with empty bottles",
    stem:
      "A 58-year-old man is brought to the emergency department by his brother, who found him confused at home beside several empty bottles of rubbing alcohol. He has an alcohol use disorder and takes no medication. He is drowsy but rousable and his breath smells fruity. He has vomited twice, once with coffee ground material, and his epigastrium is tender. Venous pH 7.36 with HCO3 23 mmol/L. Na 140, Cl 107 mmol/L, urea 4.2 mmol/L, glucose 5.1 mmol/L. Measured serum osmolality is 352 mmol/kg. Serum ketones are positive and ethanol is not detected.",
    vitals: { temperature: "36.5°C oral", pulse: "108/minute", resp: "16/minute", bp: "104/64 mmHg", o2sat: "97% on room air", weight: "74 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his wide osmolal gap with a normal anion gap?",
        options: ["Ethanol still present in serum", "Ethylene glycol poisoning", "Isopropanol poisoning", "Methanol poisoning", "Starvation ketoacidosis"],
        correct: 2,
        explanation:
          "His calculated osmolality is twice 140 plus 5.1 plus 4.2, or 289.3 mmol/kg, so the gap from the measured 352 mmol/kg is about 63 mmol/kg. Isopropanol is metabolized to acetone, which raises osmolality and ketones while leaving the pH at 7.36 and the anion gap at 140 minus 107 minus 23, which is 10 mmol/L. Methanol and ethylene glycol produce acids and would lower the pH and widen the anion gap. Ethanol is not detected. Starvation ketosis does not widen the osmolal gap.",
        keyFeature: { topic: "tox", n: 3 },
        source: "slaughter-isopropanol",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following laboratory patterns is most characteristic of this poisoning?",
        options: ["Anion gap of 25 mmol/L", "Hypoglycemia with high lactate", "Increased carboxyhemoglobin", "Ketonemia without acidemia", "Oxalate crystals in the urine"],
        correct: 3,
        explanation:
          "Isopropanol is oxidized to acetone, a ketone that is not an acid, so ketones are positive while the pH stays at 7.36 and the bicarbonate at 23 mmol/L, as in this man. A wide anion gap would point to an acid producing alcohol. Oxalate crystals follow ethylene glycol. Carboxyhemoglobin rises after carbon monoxide exposure, which his history does not include. Hypoglycemia with a high lactate suggests sepsis or other poisonings rather than isopropanol.",
        keyFeature: { topic: "tox", n: 7 },
        source: "slaughter-isopropanol",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate management for him at this point?",
        options: ["Fomepizole 15 mg/kg IV", "Hemodialysis for the osmolal gap", "Sodium bicarbonate infusion", "Supportive care with observation", "Thiamine and folic acid IV"],
        correct: 3,
        explanation:
          "Isopropanol produces sedation and gastritis rather than an acidosis, and care is supportive with attention to the airway and blood pressure until acetone is cleared. His pH is 7.36, so bicarbonate has nothing to correct. Blocking alcohol dehydrogenase with fomepizole would prolong the sedating parent alcohol. Dialysis is reserved for refractory hypotension or a very large exposure rather than for the osmolal gap alone. Thiamine and folate treat deficiency and other alcohol poisonings rather than this one.",
        keyFeature: { topic: "tox", n: 4 },
        source: "slaughter-isopropanol",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following steps is most likely to confirm which product he drank?",
        options: ["Call the poison centre for advice", "Check the provincial medication profile", "Have the brother bring the bottles", "Order a comprehensive urine screen", "Repeat the osmolal gap in 4 hours"],
        correct: 2,
        explanation:
          "The brother saw the empty bottles at home, and their labels name the alcohol and its concentration, which no test in this hospital reports quickly. A medication profile lists prescriptions and he takes none. Urine screens report drug classes and do not detect isopropanol or acetone. Repeating the osmolal gap tracks clearance without naming the product. The poison centre gives advice on management but depends on knowing what was swallowed.",
        keyFeature: { topic: "tox", n: 1 },
        source: "goldfrank",
      },
    ],
    sources: [S.slaughter, S.goldfrank],
    ...META,
  },

  /* 23 Propranolol -------------------------------------------------------- */
  {
    id: "tox-23",
    topic: "tox",
    title: "Woman with a slow pulse after taking her migraine tablets",
    stem:
      "A 38-year-old woman presents to the emergency department 90 minutes after swallowing about 40 of her propranolol 40 mg tablets. She takes propranolol for migraine prophylaxis and no other medication. She is drowsy but answers questions and her skin is cool. Capillary glucose is 3.2 mmol/L. The ECG shows a junctional bradycardia with a QRS of 128 ms and a normal QTc. The chest is clear and the abdomen is soft.",
    vitals: { temperature: "36.7°C oral", pulse: "44/minute", resp: "14/minute", bp: "78/44 mmHg", o2sat: "96% on room air", weight: "65 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following treatments best addresses her QRS duration of 128 ms?",
        options: ["atropine 0.5 mg IV bolus", "calcium chloride 1 g IV", "glucagon 5 mg IV bolus", "magnesium sulfate 2 g IV", "sodium bicarbonate 100 mmol IV"],
        correct: 4,
        explanation:
          "Propranolol is lipophilic and blocks fast sodium channels in large ingestions, which widens the QRS to 128 ms as seen here. Hypertonic sodium bicarbonate is the treatment that narrows a poisoned QRS. Atropine may raise a vagally mediated rate but does nothing to conduction through the ventricle. Glucagon and calcium support inotropy and rate rather than the QRS. Magnesium is for torsades, and her QTc is normal.",
        keyFeature: { topic: "tox", n: 4 },
        source: "aha-2023",
      },
      {
        id: "q2",
        kind: "single",
        update: "She receives crystalloid and glucagon. Her pulse is 46/minute and her blood pressure is 74/40 mmHg with cool peripheries.",
        prompt: "Which of the following is the most appropriate next treatment for her shock?",
        options: ["dopamine 5 mcg/kg/minute IV", "high dose insulin with dextrose", "hydrocortisone 100 mg IV", "lipid emulsion 20% 100 mL IV", "transvenous pacing wire"],
        correct: 1,
        explanation:
          "Shock from beta blocker poisoning that persists after fluid and glucagon is treated with high dose insulin and dextrose, which improves myocardial carbohydrate use and contractility. Standard dose catecholamines such as dopamine are often ineffective against saturating beta blockade. Pacing may capture the ventricle without improving output, so it does not fix the underlying contractility problem. Lipid emulsion is a rescue measure for a patient in arrest or near arrest. Hydrocortisone treats adrenal insufficiency, which she does not have.",
        keyFeature: { topic: "tox", n: 4 },
        source: "aha-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best explains her capillary glucose of 3.2 mmol/L?",
        options: ["Adrenal insufficiency from stress", "Insulin overdose taken with tablets", "Propranolol block of glycogenolysis", "Sepsis with poor perfusion", "Sulfonylurea co-ingestion"],
        correct: 2,
        explanation:
          "Beta blockade impairs catecholamine driven glycogenolysis and gluconeogenesis, so hypoglycemia is expected after a large propranolol ingestion, and she reports taking propranolol alone. She is afebrile at 36.7°C with a clear chest, which does not support sepsis. A sulfonylurea or insulin co-ingestion is possible in principle but nothing in the history or the home supply suggests either. Adrenal insufficiency would not appear abruptly 90 minutes after an ingestion.",
        keyFeature: { topic: "tox", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications is most characteristic of propranolol in large overdose?",
        options: ["Acute liver injury with jaundice", "Hyperkalemia with peaked T waves", "Methemoglobinemia with cyanosis", "Pulmonary fibrosis over weeks", "Seizures and rapid coma"],
        correct: 4,
        explanation:
          "Propranolol crosses into the brain because it is lipophilic, and seizures with a rapid fall in level of consciousness are described early after large ingestions, which matters in a patient who is already drowsy with a glucose of 3.2 mmol/L. Methemoglobinemia follows oxidizing agents such as benzocaine or dapsone. Pulmonary fibrosis is a long term amiodarone effect. Hyperkalemia is more typical of digoxin poisoning. Acute liver injury is not a feature of acute propranolol overdose.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
    ],
    sources: [S.aha, S.goldfrank],
    ...META,
  },

  /* 24 Clonidine in a toddler --------------------------------------------- */
  {
    id: "tox-24",
    topic: "tox",
    title: "Sleepy toddler after a visit from his grandmother",
    stem:
      "A 2-year-old boy is brought to the emergency department by his mother 1 hour after she found him holding his grandmother's blister pack of clonidine 0.1 mg tablets. Two tablets are missing from the pack. He was well earlier today, has no medical problems and takes no medication. He is sleepy but wakes to voice and cries on examination. His pupils are 2 mm. Capillary glucose is 5.2 mmol/L. The chest is clear and capillary refill is 2 seconds.",
    vitals: { temperature: "36.4°C rectal", pulse: "74/minute", resp: "18/minute", bp: "82/48 mmHg", o2sat: "95% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following pieces of collateral information is most useful in his assessment now?",
        options: ["The child's immunization record", "The grandmother's pharmacy address", "The mother's recent travel history", "The name of the family physician", "Which other pills are kept in the home"],
        correct: 4,
        explanation:
          "Two clonidine tablets are missing, but a toddler found with one blister pack may have reached others, and knowing every medication in the home decides what else to watch for and for how long. His immunization record and his family physician's name do not change management of an ingestion. A travel history does not bear on a witnessed exposure at home. The grandmother's pharmacy could confirm her prescriptions, but the question is what is within the child's reach.",
        keyFeature: { topic: "tox", n: 1 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial management of his drowsiness?",
        options: ["Flumazenil 0.01 mg/kg IV", "Naloxone 0.1 mg/kg IV", "Physostigmine 0.02 mg/kg IV", "Sodium bicarbonate 1 mmol/kg IV", "Watchful observation with airway care"],
        correct: 4,
        explanation:
          "Clonidine sedation in a child is managed by watching the airway and breathing until the drug wears off, and he still wakes to voice with a respiratory rate of 18/minute. Naloxone has been tried in clonidine poisoning with inconsistent results and does not replace observation. Flumazenil treats benzodiazepine sedation and carries a seizure risk. Physostigmine is for antimuscarinic delirium, and his pupils are 2 mm. He has no conduction delay to treat with bicarbonate.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cag",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next several hours?",
        options: ["Hypertensive crisis with seizures", "Hyperthermia with rigidity", "Rhabdomyolysis with kidney injury", "Slow breathing with bradycardia", "Wide complex tachycardia"],
        correct: 3,
        explanation:
          "Clonidine is a central alpha 2 agonist, and after the first hours it produces sedation, bradycardia and periods of shallow or slow breathing, which fits his pulse of 74/minute and 2 mm pupils. A brief early rise in blood pressure can occur from peripheral alpha stimulation, but a hypertensive crisis with seizures is not the expected course. Clonidine does not widen the QRS or drive a tachycardia. Hyperthermia with rigidity belongs to serotonin toxicity, and nothing suggests prolonged immobility or muscle injury.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this child?",
        options: ["Discharge after 4 hours if awake", "Discharge now with return advice", "Observe 6 hours then discharge home", "Overnight monitored admission", "Refer to the poison centre clinic"],
        correct: 3,
        explanation:
          "He is already sedated with a pulse of 74/minute at 1 hour after the ingestion, and clonidine effects in a 12 kg child can last well beyond a working day, so he needs admission with cardiac and respiratory monitoring. Discharge now or after 4 or 6 hours would send home a child whose bradycardia and sedation may deepen. An outpatient referral does not provide the monitoring he needs tonight.",
        keyFeature: { topic: "tox", n: 5 },
        source: "cag",
      },
    ],
    sources: [S.goldfrank, S.cag],
    ...META,
  },

  /* 25 Caustic ingestion --------------------------------------------------- */
  {
    id: "tox-25",
    topic: "tox",
    title: "Man with throat pain after swallowing a cleaner",
    stem:
      "A 44-year-old man is brought to the emergency department 45 minutes after he swallowed a mouthful of an industrial drain cleaner during an argument. The label lists sodium hydroxide 20%. He is drooling, has severe throat and chest pain and speaks with a hoarse voice. He has vomited once. The oropharynx shows white ulcerated mucosa. He sits forward and looks anxious. The chest is clear and the abdomen is soft without guarding.",
    vitals: { temperature: "37.2°C oral", pulse: "112/minute", resp: "22/minute", bp: "146/88 mmHg", o2sat: "96% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate priority in his care?",
        options: ["Activated charcoal by mouth", "Dilution with 250 mL of milk", "Early airway assessment for intubation", "Nasogastric tube for lavage", "Neutralization with dilute vinegar"],
        correct: 2,
        explanation:
          "Drooling, a hoarse voice and a sitting forward posture after a strong alkali point to upper airway injury that can swell shut, so the airway is assessed early and secured while it can still be seen. Charcoal does not bind alkali and obscures endoscopy. A blind nasogastric tube risks perforating injured tissue. Neutralization with an acid releases heat and adds injury. Dilution with milk after 45 minutes does not undo liquefaction necrosis and may provoke vomiting.",
        keyFeature: { topic: "tox", n: 5 },
        source: "caustic-nejm",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following gastrointestinal decontamination measures is appropriate for him now?",
        options: ["Activated charcoal 50 g PO", "Gastric lavage with saline", "Nasogastric aspiration of stomach", "Neutralization with weak acid", "Whole bowel irrigation by tube", "None"],
        select: 1,
        correct: [5],
        explanation:
          "Alkali injury begins within seconds of contact and no decontamination reverses it 45 minutes later, while each listed measure adds risk. Charcoal does not adsorb sodium hydroxide and coats mucosa before endoscopy. Lavage and blind aspiration can perforate an injured esophagus and re expose it to the cleaner. Neutralizing with an acid is exothermic and deepens the burn. Whole bowel irrigation delivers large volumes through an injured esophagus and has no toxin to carry out. Care is directed at the airway, resuscitation and imaging or endoscopy instead.",
        keyFeature: { topic: "tox", n: 6 },
        source: "caustic-nejm",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following investigations best defines the extent of his injury?",
        options: ["Barium swallow study now", "Chest x-ray and abdominal film", "Gastric aspirate pH testing", "Serum lactate and blood gas", "Upper endoscopy within 24 hours"],
        correct: 4,
        explanation:
          "Endoscopy within the first day grades the depth and extent of mucosal injury and guides feeding, surgery and follow up, which matters here because visible oropharyngeal ulceration does not predict what lies below. Plain films show free air only after perforation. A barium study is insensitive early and leaves contrast in the field. Lactate and blood gas measure systemic effect rather than the injury itself. Testing gastric aspirate pH does not grade tissue damage.",
        keyFeature: { topic: "tox", n: 7 },
        source: "caustic-nejm",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications is most likely within the first 24 hours?",
        options: ["Esophageal stricture with dysphagia", "Gastric outlet obstruction", "Mediastinitis from perforation", "Pyloric scarring with vomiting", "Squamous cell carcinoma"],
        correct: 2,
        explanation:
          "A concentrated alkali produces liquefaction necrosis that can reach the full thickness of the esophageal wall within hours, and his severe chest pain raises that concern, so perforation with mediastinitis is the early threat. Strictures and pyloric or gastric outlet scarring develop over weeks as the burn heals. Squamous cell carcinoma is a risk decades later. Recognizing early perforation changes care today.",
        keyFeature: { topic: "tox", n: 5 },
        source: "caustic-nejm",
      },
    ],
    sources: [S.caustic],
    ...META,
  },

  /* 26 Hydrofluoric acid --------------------------------------------------- */
  {
    id: "tox-26",
    topic: "tox",
    title: "Painful hands after a workplace splash",
    stem:
      "You are working in a community hospital emergency department. A 34-year-old man presents 2 hours after splashing a rust remover on both hands at work. The label lists hydrofluoric acid 8%. He rinsed his hands under running water for 10 minutes at the plant. The pain is now severe and throbbing and is out of keeping with the appearance of the skin. Both palms are erythematous without blistering. Sensation and capillary refill are normal. He takes no medication and has no other injuries.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "18/minute", bp: "134/80 mmHg", o2sat: "98% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for his hands?",
        options: ["Magnesium sulfate soaks", "Silver sulfadiazine cream", "Sodium bicarbonate soaks", "Topical calcium gluconate gel", "Topical lidocaine 2% gel"],
        correct: 3,
        explanation:
          "Fluoride ion keeps penetrating tissue after the rinse and binds calcium, which is why his pain is severe while the palms look only erythematous. Calcium gluconate gel supplies calcium at the surface to bind fluoride and relieves pain. Silver sulfadiazine treats thermal burn colonization and does nothing to fluoride. Bicarbonate soaks do not bind the ion. Topical lidocaine masks the pain that is used to judge whether treatment is working. Magnesium soaks are not the established topical therapy.",
        keyFeature: { topic: "tox", n: 2 },
        source: "hf-burns",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following investigations should be ordered for him after this exposure?",
        options: ["Arterial blood gas", "Chest radiograph", "Serum calcium concentration", "Serum creatine kinase", "Serum magnesium concentration", "Serum potassium concentration", "Twelve lead ECG", "Wound swab for culture"],
        select: 4,
        correct: [2, 4, 5, 6],
        explanation:
          "Absorbed fluoride binds calcium and magnesium and shifts potassium, and those three concentrations guide replacement after a hydrofluoric acid exposure. An ECG is added because a falling calcium prolongs the QT interval and precedes ventricular dysrhythmia. A urine or serum fluoride result is not available in time in a community hospital. Creatine kinase and a wound swab address muscle injury and infection, neither of which is present at 2 hours with normal sensation and capillary refill. A blood gas and a chest film add little when his saturation is 98% and his breathing is unlaboured.",
        keyFeature: { topic: "tox", n: 7 },
        source: "hf-burns",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated after a large exposure to this acid?",
        options: ["Hypercalcemia with confusion", "Hypernatremia with seizures", "Hypocalcemia with dysrhythmia", "Metabolic alkalosis with tetany", "Methemoglobinemia with cyanosis"],
        correct: 2,
        explanation:
          "Fluoride that reaches the circulation binds calcium and magnesium, and the resulting hypocalcemia prolongs the QT interval and can produce ventricular dysrhythmia, which is the reason to monitor and replace calcium after a large splash. Calcium falls rather than rises. Sodium handling is not affected by fluoride. Methemoglobinemia follows oxidizing agents rather than this acid. Systemic fluoride exposure tends to produce acidosis rather than alkalosis.",
        keyFeature: { topic: "tox", n: 5 },
        source: "hf-burns",
      },
      {
        id: "q4",
        kind: "single",
        update: "After 2 hours of calcium gluconate gel his pain is unchanged and he cannot bear any touch to the palms. His serum calcium is 2.02 mmol/L.",
        prompt: "Which of the following is the most appropriate next treatment for his ongoing pain?",
        options: ["Digital block with lidocaine 2%", "Intra-arterial calcium gluconate infusion", "Intravenous calcium chloride bolus", "Morphine 5 mg IV and observation", "Repeat calcium gluconate gel only"],
        correct: 1,
        explanation:
          "Pain that persists after adequate topical treatment means fluoride is still active in deeper tissue, and regional calcium delivered into the artery supplying the hand brings calcium to that tissue. Repeating the gel has already failed. Opioids relieve pain without treating the cause and remove the marker of response. A digital block does the same while adding pressure to injured tissue. His calcium of 2.02 mmol/L also needs IV replacement, but calcium given into a peripheral vein does not reach the fluoride in his palms at a useful concentration, and calcium chloride is a vesicant through a peripheral line.",
        keyFeature: { topic: "tox", n: 4 },
        source: "hf-burns",
      },
    ],
    sources: [S.hf],
    ...META,
  },

  /* 27 Smoke inhalation and cyanide ---------------------------------------- */
  {
    id: "tox-27",
    topic: "tox",
    title: "Man pulled from a house fire",
    stem:
      "A 52-year-old man is brought to the emergency department by paramedics after being pulled from a house fire. He was found in a smoke filled basement. He has soot around the nose and mouth, a hoarse voice and no burns to the chest or limbs. He is confused and agitated. Paramedics have given oxygen by non rebreather mask. Venous lactate is 13 mmol/L and venous pH is 7.18. Carboxyhemoglobin is 18%. Glucose 7.8 mmol/L. The chest has scattered wheezes.",
    vitals: { temperature: "36.8°C oral", pulse: "128/minute", resp: "30/minute", bp: "88/52 mmHg", o2sat: "100% on 15 L/minute by non rebreather mask", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following treatments should be given to him in the next few minutes?",
        options: ["amyl nitrite by inhalation", "hydroxocobalamin 5 g IV", "hyperbaric oxygen now", "methylene blue 1 mg/kg IV", "oxygen 100% by mask or tube", "sodium bicarbonate 100 mmol IV", "sodium nitrite 300 mg IV"],
        select: 2,
        correct: [1, 4],
        explanation:
          "Confusion and hypotension with a lactate of 13 mmol/L after enclosed space smoke exposure fit cyanide toxicity, and hydroxocobalamin binds cyanide without impairing oxygen carriage. Oxygen at the highest concentration shortens the half life of the carbon monoxide that gave him a carboxyhemoglobin of 18% and supports tissue oxygen delivery. Sodium nitrite and amyl nitrite work by making methemoglobin, which is hazardous when carbon monoxide already occupies his hemoglobin and his blood pressure is 88/52 mmHg. Methylene blue treats methemoglobinemia, which he does not have. Bicarbonate buffers acid without removing either toxin, and a hyperbaric chamber is not a first step in a hypotensive patient needing resuscitation.",
        keyFeature: { topic: "tox", n: 2 },
        source: "borron-cyanide",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings best supports cyanide toxicity in this man?",
        options: ["Carboxyhemoglobin of 18%", "Hoarse voice with soot", "Lactate of 13 mmol/L", "Oxygen saturation of 100%", "Respiratory rate of 30/minute"],
        correct: 2,
        explanation:
          "Cyanide blocks mitochondrial oxygen use, so cells switch to anaerobic metabolism and lactate climbs, and a value of 13 mmol/L in a smoke exposed patient with hypotension is the finding that best supports it. Carboxyhemoglobin of 18% confirms carbon monoxide exposure but overlaps widely with survivors who have no cyanide toxicity. Soot and hoarseness show airway exposure. A pulse oximeter reading of 100% is unreliable in carbon monoxide exposure, and tachypnea is non specific.",
        keyFeature: { topic: "tox", n: 7 },
        source: "borron-cyanide",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate airway plan for him?",
        options: ["Heliox by face mask", "Intubate early for airway injury", "Nebulized epinephrine and observe", "Non invasive ventilation trial", "Oxygen by nasal prongs only"],
        correct: 1,
        explanation:
          "Soot around the mouth with a hoarse voice after enclosed space smoke exposure signals inhalation injury, and swelling worsens over hours, so the airway is secured early while intubation is still straightforward. Nebulized epinephrine with observation risks losing the airway as edema progresses. Non invasive ventilation needs a cooperative patient and he is confused and agitated. Nasal prongs deliver less oxygen than he needs. Heliox does not treat swelling or cyanide toxicity.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following details from the scene is most useful in guiding his treatment?",
        options: ["The colour of the smoke", "The distance from the nearest exit", "The materials burning in the house", "The number of other people rescued", "The time the fire service arrived"],
        correct: 2,
        explanation:
          "What was burning predicts the toxins released, because burning wool, silk, polyurethane and other nitrogen containing materials generate cyanide alongside carbon monoxide, and that supports giving hydroxocobalamin to a man with a lactate of 13 mmol/L. Smoke colour is a poor guide to its contents. The number of people rescued and the time of arrival describe the response rather than the exposure. His distance from an exit does not identify the gases he breathed.",
        keyFeature: { topic: "tox", n: 1 },
        source: "borron-cyanide",
      },
    ],
    sources: [S.borron, S.goldfrank],
    ...META,
  },

  /* 28 Theophylline --------------------------------------------------------- */
  {
    id: "tox-28",
    topic: "tox",
    title: "Vomiting and tremor in a young woman",
    stem:
      "A 24-year-old woman presents to the emergency department 3 hours after swallowing about 40 of her grandmother's theophylline 300 mg sustained release tablets. She has vomited five times since and feels shaky. She takes no medication of her own and has no lung disease. She is anxious and alert with a fine tremor of both hands. K 2.8 mmol/L, glucose 9.8 mmol/L, venous pH 7.46 and lactate 3.2 mmol/L. The theophylline concentration is 210 umol/L. The ECG shows sinus tachycardia with a normal QRS.",
    vitals: { temperature: "37.0°C oral", pulse: "136/minute", resp: "24/minute", bp: "104/48 mmHg", o2sat: "98% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following decontamination or elimination measures is most appropriate now?",
        options: ["Gastric lavage then charcoal", "Multiple dose activated charcoal", "Sodium bicarbonate infusion", "Sorbitol cathartic alone", "Urinary alkalinization"],
        correct: 1,
        explanation:
          "Theophylline is absorbed slowly from sustained release tablets, and repeated charcoal binds drug still in the gut and draws theophylline back from the blood across the bowel wall, which shortens its half life. She is alert and can protect her airway, and her vomiting is treated so the charcoal stays down. Lavage 3 hours after tablets recovers little and risks aspiration in a vomiting patient. Repeated cathartics cause fluid and electrolyte loss without added benefit. Theophylline is not cleared by alkalinizing the urine or by bicarbonate, and her pH is 7.46.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-theophylline",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of her potassium of 2.8 mmol/L?",
        options: ["insulin with dextrose IV", "magnesium sulfate 2 g IV", "potassium chloride 10 mmol/hour IV", "salbutamol nebulized 5 mg", "sodium bicarbonate 50 mmol IV"],
        correct: 2,
        explanation:
          "Theophylline raises circulating catecholamines, which stimulate beta 2 receptors and drive potassium into cells, so her total body potassium is near normal and the measured 2.8 mmol/L rebounds as the drug is cleared. Potassium chloride at 10 mmol/hour is a cautious rate, given with repeated measurement rather than in large loads. Insulin with dextrose and nebulized salbutamol would push the potassium lower. Magnesium is replaced when it is low but does not correct this shift. Bicarbonate would also move potassium into cells, and her pH is already 7.46.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following investigations should be ordered for her at this point?",
        options: ["Chest radiograph", "Head CT without contrast", "Repeat theophylline concentration", "Serum acetaminophen level", "Serum magnesium and potassium", "Twelve lead ECG", "Urine drug screen", "Venous blood gas"],
        select: 4,
        correct: [2, 3, 4, 5],
        explanation:
          "Absorption from sustained release tablets continues for many hours, so the theophylline concentration is repeated to show whether it is still climbing above the 210 umol/L measured at 3 hours. Magnesium and potassium are followed because both fall with beta 2 stimulation and both set the risk of dysrhythmia. Serial ECGs track the rate of 136/minute and the rhythm. Forty tablets from another person's supply may be an intentional overdose, so an acetaminophen level is sent, because a silent co-ingestion would need acetylcysteine. A urine drug screen does not report theophylline. A head CT and a chest film are for findings she does not have with a saturation of 98% and a clear sensorium, and her venous gas has already given the pH and lactate.",
        keyFeature: { topic: "tox", n: 7 },
        source: "extrip-theophylline",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next several hours?",
        options: ["Acute liver failure", "Hyperkalemia with weakness", "Methemoglobinemia with cyanosis", "Renal papillary necrosis", "Seizures and ventricular dysrhythmia"],
        correct: 4,
        explanation:
          "The tablets release drug for many hours, so the concentration rises after arrival, and seizures with ventricular dysrhythmia are the events that follow, helped along by a potassium of 2.8 mmol/L and a pulse of 136/minute. Potassium rises above normal only if it is replaced aggressively while the shift reverses, which is why replacement is cautious rather than an expected complication. Methemoglobinemia follows oxidizing drugs. Papillary necrosis belongs to long term analgesic use, and acute liver failure is not part of theophylline poisoning.",
        keyFeature: { topic: "tox", n: 5 },
        source: "extrip-theophylline",
      },
    ],
    sources: [S.extripTheo, S.goldfrank],
    ...META,
  },

  /* 29 Hydrocarbon aspiration ---------------------------------------------- */
  {
    id: "tox-29",
    topic: "tox",
    title: "Coughing child found in the garage",
    stem:
      "A 4-year-old boy is brought to the emergency department by his father 1 hour after he was found coughing and choking beside an open bottle of lamp oil in the garage. He coughed for several minutes and vomited once. He is now alert and playing but coughs intermittently. His breath smells of fuel. There are scattered crackles at the right base. There is no drooling, no stridor and no rash.",
    vitals: { temperature: "37.4°C rectal", pulse: "124/minute", resp: "34/minute", bp: "96/60 mmHg", o2sat: "93% on room air", weight: "17 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate gastrointestinal management for this child?",
        options: ["Activated charcoal 1 g/kg by mouth", "Gastric lavage with a small tube", "Milk by mouth to bind the oil", "Whole bowel irrigation by tube", "No gastric emptying or charcoal"],
        correct: 4,
        explanation:
          "Lamp oil harms by aspiration rather than by absorption from the gut, and he has already coughed, vomited and developed crackles. Every listed manoeuvre risks a second aspiration of a low viscosity hydrocarbon. Charcoal binds hydrocarbons poorly and provokes vomiting. Lavage and whole bowel irrigation move fluid in a child who is already coughing. Milk does not bind the oil and fills the stomach. Care is directed at oxygen and observation of the lungs instead.",
        keyFeature: { topic: "tox", n: 6 },
        source: "tormoehlen-hc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most useful over the next few hours?",
        options: ["Abdominal ultrasound", "Arterial blood gas sampling", "Bronchoscopy for aspiration", "Chest radiograph in 6 hours", "Serum hydrocarbon concentration"],
        correct: 3,
        explanation:
          "Radiographic changes after hydrocarbon aspiration often lag behind symptoms, so a film taken several hours after the event shows the infiltrate that guides admission and oxygen therapy. He already has crackles and a saturation of 93% on room air, which is being followed clinically. Hydrocarbon concentrations are not available or useful. Bronchoscopy is for a retained foreign body rather than aspirated oil. Abdominal ultrasound does not assess the lungs, and an arterial sample adds pain without adding to pulse oximetry here.",
        keyFeature: { topic: "tox", n: 7 },
        source: "tormoehlen-hc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications is most likely in this child?",
        options: ["Chemical pneumonitis with hypoxia", "Esophageal stricture in weeks", "Hemolysis with anemia", "Hepatic failure in 48 hours", "Renal tubular acidosis"],
        correct: 0,
        explanation:
          "Low viscosity hydrocarbons spread across the alveolar surface and destroy surfactant, producing a chemical pneumonitis, and his crackles with a saturation of 93% show it has begun. Strictures follow caustic ingestion. Hemolysis, hepatic failure and renal tubular acidosis are described after certain halogenated and aromatic hydrocarbons in large absorbed doses rather than after aspiration of lamp oil.",
        keyFeature: { topic: "tox", n: 5 },
        source: "tormoehlen-hc",
      },
      {
        id: "q4",
        kind: "single",
        update: "At 4 hours he is comfortable but still coughing. His oxygen saturation is 92% on room air and his respiratory rate is 34/minute.",
        prompt: "Which of the following is the most appropriate disposition for him now?",
        options: ["Admit for oxygen and observation", "Discharge home with return advice", "Discharge with oral antibiotics", "Give corticosteroids and discharge", "Observe 2 more hours then discharge"],
        correct: 0,
        explanation:
          "A child who remains symptomatic at 4 hours with a saturation of 92% on room air and a respiratory rate of 34/minute needs admission, because pneumonitis worsens over the first day. Children who stay well with a normal examination and normal saturation may go home after a period of observation, which does not describe him. Antibiotics are for secondary infection rather than the chemical injury. Corticosteroids have not been shown to help hydrocarbon pneumonitis.",
        keyFeature: { topic: "tox", n: 5 },
        source: "tormoehlen-hc",
      },
    ],
    sources: [S.tormoehlen],
    ...META,
  },

  /* 30 Cannabis edible in a child ------------------------------------------ */
  {
    id: "tox-30",
    topic: "tox",
    title: "Sleepy girl after a family gathering",
    stem:
      "A 3-year-old girl is brought to the emergency department by her parents because she has been unusually sleepy since the afternoon. She was at a family gathering and played unsupervised for about an hour. She has no medical problems and takes no medication. She wakes to voice and then drifts back to sleep. Her pupils are 5 mm, her conjunctivae are red and she is unsteady when helped to stand. Capillary glucose is 4.9 mmol/L. There is no rash, no neck stiffness and no sign of injury.",
    vitals: { temperature: "36.9°C rectal", pulse: "132/minute", resp: "22/minute", bp: "94/56 mmHg", o2sat: "97% on room air", weight: "15 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following questions to the parents is most likely to identify the cause?",
        options: ["Ask about cannabis products in the home", "Ask about her immunizations", "Ask about recent foreign travel", "Ask about sick contacts at daycare", "Ask whether she hit her head"],
        correct: 0,
        explanation:
          "Sleepiness with 5 mm pupils, red conjunctivae, ataxia and a pulse of 132/minute in a well child who was unsupervised for an hour fits an edible cannabis ingestion, and asking who at the gathering keeps cannabis products locates the source. Her immunizations are irrelevant to an acute exposure. She has no fever or neck stiffness to suggest an infection from daycare contacts. There is no sign of injury to support a head injury, and travel does not explain these findings.",
        keyFeature: { topic: "tox", n: 1 },
        source: "cannabis-cfp",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most likely to confirm the diagnosis?",
        options: ["Blood ethanol concentration", "Head CT without contrast", "Lumbar puncture for culture", "Serum ammonia and lactate", "Urine cannabinoid screen"],
        correct: 4,
        explanation:
          "A urine cannabinoid screen is one of the few screening tests that changes care, because a positive result in a drowsy toddler explains the presentation, avoids a head CT and a lumbar puncture, and opens the conversation about safe storage at home. Ethanol, ammonia and lactate would be sought if the history or examination suggested them, and nothing here does. Imaging and lumbar puncture are invasive tests for a child with no injury, no fever and no meningism.",
        keyFeature: { topic: "tox", n: 7 },
        source: "cannabis-cfp",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated in a child of this size?",
        options: ["Acute kidney injury", "Hypoglycemia with seizures", "Severe hypertension", "Slowed breathing with apnea", "Wide complex tachycardia"],
        correct: 3,
        explanation:
          "Young children who swallow an adult sized dose of tetrahydrocannabinol can become deeply sedated, and respiratory depression with apnea is the effect that has led to intubation in reported Canadian cases, so she is watched for it. Her glucose is 4.9 mmol/L, which is normal. Cannabis produces tachycardia rather than a wide complex rhythm. Blood pressure tends to fall with standing rather than rise, and kidney injury is not a feature.",
        keyFeature: { topic: "tox", n: 5 },
        source: "cannabis-cfp",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this child?",
        options: ["Admit for observation until alert", "Discharge after a normal head CT", "Discharge once the screen returns", "Observe 2 hours then discharge", "Refer to the paediatric clinic"],
        correct: 0,
        explanation:
          "She wakes only to voice and drifts back to sleep on arrival, and sedation from an edible can deepen and last many hours, so she stays in hospital with monitoring until she is fully alert and feeding. Discharge at 2 hours or on the strength of a test result sends home a child who may still deteriorate. A head CT would not change this decision. An outpatient referral does not provide observation tonight.",
        keyFeature: { topic: "tox", n: 5 },
        source: "cannabis-cfp",
      },
    ],
    sources: [S.cannabis],
    ...META,
  },

  /* 31 Loperamide ---------------------------------------------------------- */
  {
    id: "tox-31",
    topic: "tox",
    title: "Collapse in a man who stopped his opioids",
    stem:
      "A 29-year-old man presents to the emergency department after a witnessed collapse at home. He stopped oxycodone 3 months ago and has since taken large daily amounts of over the counter loperamide to control withdrawal symptoms. He has had several episodes of dizziness this week. He is alert and fully oriented. K 4.1 mmol/L, Mg 0.82 mmol/L, glucose 5.5 mmol/L. The ECG shows sinus rhythm with a QRS of 132 ms and a QTc of 560 ms. The examination is otherwise normal.",
    vitals: { temperature: "36.6°C oral", pulse: "58/minute", resp: "14/minute", bp: "112/70 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following dysrhythmias best explains his collapse at home?",
        options: ["Atrial fibrillation with pauses", "Complete heart block", "Supraventricular tachycardia", "Torsades de pointes", "Ventricular fibrillation"],
        correct: 3,
        explanation:
          "High dose loperamide blocks cardiac potassium channels and prolongs repolarization, and his QTc of 560 ms with a pulse of 58/minute is the setting in which torsades de pointes arises and then stops on its own, which fits a collapse followed by a normal level of consciousness. Ventricular fibrillation does not terminate without treatment. His rhythm strip shows sinus rhythm rather than atrial fibrillation or heart block, and a supraventricular tachycardia rarely causes syncope in a young man with a normal blood pressure.",
        keyFeature: { topic: "tox", n: 5 },
        source: "eggleston-loperamide",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following treatments best addresses his QRS duration of 132 ms?",
        options: ["amiodarone 300 mg IV", "calcium gluconate 1 g IV over 10 minutes", "lidocaine 1 mg/kg IV", "magnesium sulfate 2 g IV", "sodium bicarbonate 2 mmol/kg IV"],
        correct: 4,
        explanation:
          "Loperamide in large doses blocks fast sodium channels as well as potassium channels, which widens his QRS to 132 ms, and hypertonic sodium bicarbonate is the treatment for that conduction delay. Amiodarone blocks potassium channels and lengthens a QTc that is already 560 ms. Lidocaine is kept for ventricular dysrhythmia rather than for the conduction delay itself. Magnesium is given for torsades and shortens no QRS. Calcium is used for calcium channel blocker poisoning and hyperkalemia, neither of which applies at a potassium of 4.1 mmol/L.",
        keyFeature: { topic: "tox", n: 4 },
        source: "aha-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated during his monitored stay?",
        options: ["Acute liver failure", "Hyperkalemia with weakness", "Pancreatitis with severe pain", "Recurrent ventricular dysrhythmia", "Serotonin toxicity with clonus"],
        correct: 3,
        explanation:
          "Loperamide is eliminated slowly after months of high dose use, so the QTc of 560 ms and the QRS of 132 ms persist for days and further ventricular dysrhythmia is the main threat during his stay. He takes no serotonergic drug, so serotonin toxicity does not apply. His potassium is 4.1 mmol/L. Hepatic failure and pancreatitis are not features of loperamide toxicity.",
        keyFeature: { topic: "tox", n: 5 },
        source: "eggleston-loperamide",
      },
      {
        id: "q4",
        kind: "single",
        update: "His rhythm is stable after treatment. He asks for help so that he does not have to keep buying loperamide.",
        prompt: "Which of the following best determines whether buprenorphine can be started safely today?",
        options: ["Clinical Opiate Withdrawal Scale score", "Last reported time of opioid use", "Results of the urine drug screen", "Self reported severity of craving", "Serum loperamide concentration"],
        correct: 0,
        explanation:
          "Buprenorphine is a partial agonist with high receptor affinity, so it is started once objective withdrawal is present, and a scored scale of pulse, sweating, pupil size, gooseflesh, tremor and gastrointestinal upset is how that is judged at the bedside. Self reported craving does not show withdrawal. A reported time of last use is unreliable and does not predict the receptor state. A urine screen confirms exposure rather than withdrawal. Loperamide concentrations are not measured in practice. The BCCSU guideline also allows a low dose start that does not wait for withdrawal, but a standard start today depends on the scored signs.",
        keyFeature: { topic: "tox", n: 8 },
        source: "bccsu-oud",
      },
    ],
    sources: [S.eggleston, S.aha, S.bccsu],
    ...META,
  },

  /* 32 Insulin -------------------------------------------------------------- */
  {
    id: "tox-32",
    topic: "tox",
    title: "Young woman with diabetes brought in by her sister",
    stem:
      "A 24-year-old woman with type 1 diabetes is brought to the emergency department by her sister 2 hours after she injected a large amount of insulin glargine and insulin aspart during a crisis at home. She was sweating and confused at the scene. Paramedics measured a capillary glucose of 1.4 mmol/L and gave dextrose IV. She is now oriented and asking for food. Her glucose is 6.8 mmol/L and her potassium is 3.2 mmol/L. There are several injection marks on the abdomen. The examination is otherwise normal.",
    vitals: { temperature: "36.6°C oral", pulse: "96/minute", resp: "16/minute", bp: "118/72 mmHg", o2sat: "99% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes the expected course after this injection?",
        options: ["Hyperglycemia rebound within hours", "Hypoglycemia for many hours to days", "Ketoacidosis within 12 hours", "Rapid recovery after one bolus", "Slow recovery over 2 to 3 hours"],
        correct: 1,
        explanation:
          "A large subcutaneous depot of a long acting insulin is absorbed slowly and unpredictably, and reported cases have needed dextrose for days rather than hours. She has already dropped to 1.4 mmol/L once, so further falls are expected after the paramedic bolus wears off. Ketoacidosis develops when insulin is lacking, which is the opposite of her state. A single bolus does not end the exposure, and recovery within a few hours would not be expected from a long acting product.",
        keyFeature: { topic: "tox", n: 5 },
        source: "insulin-review",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate ongoing treatment for her?",
        options: ["Dextrose 10% infusion with potassium", "Glucagon 1 mg IM every 4 hours", "Octreotide 50 mcg SC every 6 hours", "Repeat dextrose 50% boluses only", "Surgical excision of the injection site"],
        correct: 0,
        explanation:
          "A continuous dextrose 10% infusion titrated to glucose matches the slow release of insulin from the depot, and potassium is added because insulin drives potassium into cells and hers is already 3.2 mmol/L. Repeated dextrose 50% boluses give swings between hypoglycemia and hyperglycemia and worsen the potassium shift. Glucagon depends on glycogen stores and acts briefly. Octreotide is used for sulfonylurea poisoning, where the problem is stimulated endogenous insulin release. Excision of the site is a reported extreme measure rather than initial care.",
        keyFeature: { topic: "tox", n: 4 },
        source: "insulin-review",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following tests best distinguishes injected insulin from an insulin secreting tumour?",
        options: ["Concentration of serum C peptide", "Glycated hemoglobin level", "Serum beta hydroxybutyrate", "Serum insulin concentration", "Urine sulfonylurea screen"],
        correct: 0,
        explanation:
          "C peptide is released with endogenous insulin and is absent from manufactured insulin, so a high insulin concentration with a low C peptide points to an injection, as her abdominal marks and her sister's account describe. A measured insulin concentration alone is raised in both situations. A sulfonylurea screen tests for a different cause of stimulated release. Glycated hemoglobin describes control over months. Beta hydroxybutyrate measures ketones rather than the source of insulin.",
        keyFeature: { topic: "tox", n: 7 },
        source: "insulin-review",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for her from the emergency department?",
        options: ["Admit for monitoring and psychiatric care", "Discharge after a meal and review", "Discharge with a glucagon kit", "Observe 6 hours then discharge", "Refer to her diabetes clinic"],
        correct: 0,
        explanation:
          "She needs admission for glucose monitoring because the insulin depot keeps releasing for far longer than an emergency department stay, and she also needs assessment after a deliberate self harm act. A meal, a 6 hour observation or an outpatient referral would send her home while the risk of another fall to 1.4 mmol/L continues. A glucagon kit does not substitute for monitored dextrose in this setting.",
        keyFeature: { topic: "tox", n: 5 },
        source: "insulin-review",
      },
    ],
    sources: [S.insulin],
    ...META,
  },

  /* 33 Colchicine ----------------------------------------------------------- */
  {
    id: "tox-33",
    topic: "tox",
    title: "Woman with vomiting and diarrhea after taking her gout tablets",
    stem:
      "A 62-year-old woman presents to the emergency department 10 hours after taking a large number of her colchicine 0.6 mg tablets. She has gout and chronic kidney disease. She has vomiting, watery diarrhea and crampy abdominal pain. She looks unwell and her peripheries are cool. WBC 18.4 x 10^9/L. Creatinine 210 umol/L, up from 130 umol/L last month. Lactate 3.8 mmol/L and venous pH 7.30. The abdomen is diffusely tender without guarding.",
    vitals: { temperature: "36.3°C oral", pulse: "118/minute", resp: "24/minute", bp: "94/58 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her at this time?",
        options: ["Fluid resuscitation and monitored care", "Granulocyte stimulating factor now", "Intravenous immunoglobulin", "Prednisone 50 mg PO daily", "Repeat colchicine at a lower dose"],
        correct: 0,
        explanation:
          "There is no antidote for colchicine, and she is losing fluid through vomiting and diarrhea with a blood pressure of 94/58 mmHg, a pulse of 118/minute and a lactate of 3.8 mmol/L, so resuscitation with close monitoring is the treatment. Colony stimulating factor is considered later if the white cell count falls, and hers is 18.4 x 10^9/L today. Immunoglobulin and corticosteroids have no role. Giving more colchicine would add to the exposure.",
        keyFeature: { topic: "tox", n: 4 },
        source: "colchicine-review",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following complications should be anticipated over the next 2 to 3 days?",
        options: ["Acute pancreatitis with pain", "Bone marrow suppression", "Cardiogenic shock with failure", "Hemolytic uremic syndrome", "Pulmonary fibrosis with hypoxia", "Thyroid storm with fever"],
        select: 2,
        correct: [1, 2],
        explanation:
          "Colchicine arrests mitosis, so after the gastrointestinal phase the dividing cells of the marrow fail and cytopenias appear over the following days. Her white cell count of 18.4 x 10^9/L today is an early stress response and does not predict that fall. Severe poisoning also depresses the myocardium, and a blood pressure of 94/58 mmHg with a lactate of 3.8 mmol/L can progress to cardiogenic shock that outlasts fluid replacement. Pancreatitis, hemolytic uremic syndrome and thyroid storm are not part of colchicine toxicity, and pulmonary fibrosis over days is not its pattern.",
        keyFeature: { topic: "tox", n: 5 },
        source: "colchicine-review",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following elimination techniques removes a meaningful amount of colchicine?",
        options: ["Charcoal hemoperfusion", "Continuous renal replacement", "Intermittent hemodialysis", "Peritoneal dialysis", "Therapeutic plasma exchange", "None"],
        select: 1,
        correct: [5],
        explanation:
          "Colchicine leaves the circulation quickly and concentrates inside cells, so its volume of distribution is very large and little of the body burden sits in blood where a machine can reach it. Hemodialysis, continuous renal replacement and peritoneal dialysis clear small, water soluble drugs that stay in plasma. Hemoperfusion and plasma exchange have not been shown to change the course. Her rising creatinine of 210 umol/L calls for careful fluid and electrolyte management, and dialysis may later be needed for kidney failure itself, but not to remove the drug.",
        keyFeature: { topic: "tox", n: 6 },
        source: "colchicine-review",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following investigations best reflects the severity of her poisoning over the coming days?",
        options: ["Colchicine concentration in serum", "Complete blood count daily", "Serum amylase concentration", "Thyroid stimulating hormone", "Urine drug screen"],
        correct: 1,
        explanation:
          "Daily blood counts show the marrow failure that follows the gastrointestinal phase, and the white cell count and platelet count guide isolation, transfusion and antibiotic decisions. Colchicine concentrations are sent out and return too late to guide care. A urine drug screen does not report colchicine. Amylase and thyroid tests address conditions that her presentation does not suggest.",
        keyFeature: { topic: "tox", n: 7 },
        source: "colchicine-review",
      },
    ],
    sources: [S.colchicine],
    ...META,
  },

  /* 34 Amatoxin mushrooms --------------------------------------------------- */
  {
    id: "tox-34",
    topic: "tox",
    title: "Couple unwell after a foraged meal",
    stem:
      "A 54-year-old man presents to the emergency department with 14 hours of profuse watery diarrhea, vomiting and abdominal cramps. He and his wife picked and ate wild mushrooms from woodland near their home yesterday evening, and she has the same symptoms. His first symptoms began about 10 hours after the meal. He takes no medication. He is dry and weak. Na 134 mmol/L, K 3.1 mmol/L, creatinine 168 umol/L, ALT 68 U/L and INR 1.1. The abdomen is soft with active bowel sounds.",
    vitals: { temperature: "36.7°C oral", pulse: "112/minute", resp: "20/minute", bp: "98/60 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details about the meal most helps identify the group of mushroom?",
        options: ["Colour of the mushroom caps", "Number of mushrooms eaten", "Time from the meal to first symptoms", "Whether the mushrooms were cooked", "Whether they were picked in daylight"],
        correct: 2,
        explanation:
          "Symptoms that begin 10 hours after the meal separate the amatoxin containing species from the many mushrooms that upset the stomach within 2 hours, and that interval is what drives admission and liver monitoring here. Cap colour is unreliable without an expert and a specimen. Cooking does not destroy amatoxins. The number eaten refines the dose but not the species. The time of day the mushrooms were gathered tells nothing about which species was picked.",
        keyFeature: { topic: "tox", n: 1 },
        source: "amatoxin-review",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is most likely to happen over the next 2 days?",
        options: ["Acute pancreatitis with severe back pain", "Complete recovery without sequelae", "Hemolysis with dark urine", "Liver failure after a quiet interval", "Methemoglobinemia with cyanosis"],
        correct: 3,
        explanation:
          "Amatoxin poisoning runs in phases. The diarrhea he has now settles over a day, the patient feels better, and then transaminases and INR climb as hepatocytes die, so his ALT of 68 U/L and INR of 1.1 today do not reassure. Recovery without sequelae is the outcome only in milder exposures and cannot be assumed at this stage. Hemolysis, methemoglobinemia and pancreatitis are not features of amatoxin poisoning.",
        keyFeature: { topic: "tox", n: 5 },
        source: "amatoxin-review",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following treatments is most appropriate alongside his fluid resuscitation?",
        options: ["Corticosteroids for the colitis", "Intravenous immunoglobulin", "Loperamide to stop the diarrhea", "Multiple dose activated charcoal", "Octreotide for secretory loss"],
        correct: 3,
        explanation:
          "Amatoxins are secreted in bile and reabsorbed from the gut, so repeated doses of activated charcoal interrupt that cycle and lower the amount reaching the liver, which is worth doing even 24 hours after the meal. Loperamide slows the gut and keeps toxin in contact with mucosa. Octreotide reduces secretory volume without changing toxin handling. Corticosteroids and immunoglobulin have no established effect on amatoxin poisoning.",
        keyFeature: { topic: "tox", n: 6 },
        source: "amatoxin-review",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following investigations best tracks his course over the next 3 days?",
        options: ["Amatoxin concentration in urine", "INR and transaminases serially", "Serum amylase and lipase", "Stool culture for pathogens", "Urine drug screen"],
        correct: 1,
        explanation:
          "Repeated INR and transaminase measurements show whether hepatocyte injury is developing and are the values used to decide on transfer to a transplant centre, which matters because his ALT is only 68 U/L on arrival. Urine amatoxin testing is not widely available and is negative once the toxin has cleared. A stool culture addresses infectious diarrhea, which does not explain a shared meal of foraged mushrooms. Amylase and drug screening do not follow liver injury.",
        keyFeature: { topic: "tox", n: 7 },
        source: "amatoxin-review",
      },
    ],
    sources: [S.amatoxin],
    ...META,
  },

  /* 35 Local anesthetic systemic toxicity ------------------------------------ */
  {
    id: "tox-35",
    topic: "tox",
    title: "Seizure during a laceration repair",
    stem:
      "You are working in a community hospital emergency department. A 68-year-old woman becomes agitated and then has a generalized seizure 8 minutes after you infiltrate 40 mL of lidocaine 1% with epinephrine around a large scalp laceration. She has hypertension and chronic kidney disease. The seizure stops after midazolam. She is now unresponsive and poorly perfused. The monitor shows a wide complex bradycardia. Glucose 6.2 mmol/L. There is no head injury and the pupils are 3 mm.",
    vitals: { temperature: "36.5°C oral", pulse: "48/minute", resp: "8/minute", bp: "72/40 mmHg", o2sat: "90% on 15 L/minute by non rebreather mask", weight: "52 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the total dose of lidocaine she received?",
        options: ["100 mg", "200 mg", "300 mg", "400 mg", "500 mg"],
        correct: 3,
        explanation:
          "Lidocaine 1% contains 10 mg in each millilitre, so 40 mL delivered 400 mg. For her weight of 52 kg that is about 7.7 mg/kg, which is above the usual ceiling of about 7 mg/kg when lidocaine is given with epinephrine. A seizure followed by wide complex bradycardia 8 minutes after infiltration fits systemic toxicity from that dose.",
        keyFeature: { topic: "tox", n: 7 },
        source: "asra-last",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate specific treatment for her now?",
        options: ["Flumazenil 0.2 mg IV", "Intravenous lipid emulsion 20%", "Procainamide 100 mg IV", "Propofol infusion for seizures", "Sodium bicarbonate 50 mmol IV"],
        correct: 1,
        explanation:
          "Lipid emulsion draws lidocaine out of cardiac tissue and is the treatment for local anesthetic toxicity with cardiovascular collapse, which is what her blood pressure of 72/40 mmHg and wide complex bradycardia represent. Procainamide is itself a sodium channel blocker and deepens the block. Propofol lowers blood pressure further and delivers far too little lipid to help. Flumazenil reverses benzodiazepines and risks further seizures. Bicarbonate is used for other sodium channel blocking drugs and is not the specific treatment here.",
        keyFeature: { topic: "tox", n: 2 },
        source: "asra-last",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next hour?",
        options: ["Hepatic failure within hours", "Malignant hyperthermia", "Methemoglobinemia from lidocaine", "Serotonin toxicity with clonus", "Ventricular arrest from toxicity"],
        correct: 4,
        explanation:
          "Local anesthetic toxicity progresses from agitation and seizure to conduction block, ventricular dysrhythmia and arrest, and she is already bradycardic at 48/minute with a wide complex rhythm and a blood pressure of 72/40 mmHg. Methemoglobinemia is described mainly with prilocaine and benzocaine. Malignant hyperthermia follows volatile agents and succinylcholine. She takes no serotonergic drug. Acute hepatic failure is not part of this syndrome.",
        keyFeature: { topic: "tox", n: 5 },
        source: "asra-last",
      },
      {
        id: "q4",
        kind: "single",
        update: "She loses her pulse and cardiopulmonary resuscitation begins while lipid emulsion runs.",
        prompt: "Which of the following vasopressor strategies is most appropriate during her resuscitation?",
        options: ["epinephrine 50 mcg IV boluses", "epinephrine 1 mg IV every 3 minutes", "norepinephrine 0.1 mcg/kg/minute", "phenylephrine 100 mcg IV boluses", "vasopressin 40 units IV once"],
        correct: 0,
        explanation:
          "In arrest from local anesthetic toxicity the recommended approach is reduced epinephrine dosing, in the order of 1 mcg/kg or less per dose, because large boluses impair resuscitation and reduce the effect of lipid emulsion. For her 52 kg that is close to 50 mcg. Standard 1 mg boluses are the dose to avoid in this specific arrest. Vasopressin is no longer recommended in this setting. Phenylephrine and a norepinephrine infusion do not address the arrest rhythm.",
        keyFeature: { topic: "tox", n: 4 },
        source: "asra-last",
      },
    ],
    sources: [S.asra],
    ...META,
  },

  /* 36 Methemoglobinemia ------------------------------------------------------ */
  {
    id: "tox-36",
    topic: "tox",
    title: "Blue lips after a dental appointment",
    stem:
      "A 27-year-old man presents to the emergency department with 3 hours of headache, breathlessness and blue discolouration of his lips and fingers. He used a topical anesthetic spray containing benzocaine repeatedly before a dental procedure this morning. He has no cardiac or respiratory history and takes no medication. He is alert with central cyanosis. The chest is clear and the heart sounds are normal. The laboratory reports that his blood sample is chocolate brown. Glucose is 5.4 mmol/L. His saturation does not improve on high flow oxygen.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "22/minute", bp: "128/76 mmHg", o2sat: "85% on 15 L/minute by non rebreather mask", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations confirms the diagnosis in this man?",
        options: ["Arterial blood gas oxygen tension", "Carboxyhemoglobin by co-oximetry", "Chest radiograph and ECG", "Co-oximetry for methemoglobin", "Echocardiogram with bubbles"],
        correct: 3,
        explanation:
          "Co-oximetry measures the methemoglobin fraction directly, which is what explains cyanosis with chocolate brown blood and a saturation that stays at 85% on high flow oxygen. The oxygen tension on a blood gas is normal in methemoglobinemia because dissolved oxygen is unaffected, so it misleads. Carboxyhemoglobin identifies a different pigment and there has been no fire or exhaust exposure. A chest radiograph, ECG and bubble study look for cardiac and pulmonary shunts, and his chest and heart sounds are normal.",
        keyFeature: { topic: "tox", n: 7 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate antidote for this man?",
        options: ["hydroxocobalamin 5 g IV", "hyperbaric oxygen therapy", "methylene blue 1 mg/kg IV", "N acetylcysteine 150 mg/kg IV", "sodium thiosulfate 12.5 g IV"],
        correct: 2,
        explanation:
          "Methylene blue accelerates the reduction of methemoglobin back to hemoglobin through the NADPH dependent pathway and is the treatment for symptomatic methemoglobinemia, which he has with headache, breathlessness and a saturation of 85% despite oxygen. Hydroxocobalamin and thiosulfate treat cyanide poisoning. Acetylcysteine treats acetaminophen toxicity. Hyperbaric oxygen is a rescue option when methylene blue cannot be used rather than the first treatment.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cag",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated at higher methemoglobin fractions?",
        options: ["Cerebral edema with papilledema", "Dysrhythmia with lactic acidosis", "Hyperkalemia with weakness", "Pulmonary edema from fluid", "Seizures from hypoglycemia"],
        correct: 1,
        explanation:
          "Methemoglobin carries no oxygen and shifts the remaining hemoglobin so that it releases oxygen less readily, so as the fraction climbs tissue hypoxia produces lactic acidosis, dysrhythmia, seizures and coma. His glucose is 5.4 mmol/L, so hypoglycemic seizures do not apply. Potassium handling and lung water are not affected by the pigment itself, and raised intracranial pressure with papilledema is not part of this poisoning.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following most affects the safety of the antidote in this man?",
        options: ["Chronic kidney disease history", "History of asthma in childhood", "Inherited enzyme deficiency in red cells", "Recent use of alcohol", "Use of inhaled corticosteroids"],
        correct: 2,
        explanation:
          "Methylene blue needs NADPH generated by glucose 6 phosphate dehydrogenase to work, so in a patient deficient in that enzyme it fails to reduce methemoglobin and can itself cause hemolysis. Asking about family history, ethnic background and past reactions to oxidant drugs is therefore part of the decision. Asthma, inhaled corticosteroids and recent alcohol use do not alter how methylene blue behaves. Severe kidney disease slows excretion of methylene blue and calls for care with repeat doses, but he has no kidney disease and it is not the main hazard.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cag",
      },
    ],
    sources: [S.goldfrank, S.cag],
    ...META,
  },

  /* 37 Quetiapine ------------------------------------------------------------- */
  {
    id: "tox-37",
    topic: "tox",
    title: "Drowsy man with a fast pulse and dry skin",
    stem:
      "A 41-year-old man is brought to the emergency department by his sister 3 hours after she found him drowsy beside an empty bottle of quetiapine 300 mg tablets. The bottle was dispensed 2 days ago with 60 tablets. He takes quetiapine for bipolar disorder and nothing else. He responds to voice with mumbling. His skin is dry and flushed, his pupils are 6 mm and his bowel sounds are reduced. He has not passed urine since arrival. Glucose 6.6 mmol/L. The ECG shows sinus tachycardia with a QRS of 96 ms and a QTc of 480 ms.",
    vitals: { temperature: "37.3°C oral", pulse: "134/minute", resp: "14/minute", bp: "96/54 mmHg", o2sat: "96% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of his reduced level of consciousness?",
        options: ["Flumazenil 0.2 mg IV bolus", "Naloxone 0.4 mg IV bolus", "Physostigmine 1 mg IV slowly", "Rapid sequence intubation immediately", "Supportive care with monitoring"],
        correct: 4,
        explanation:
          "He responds to voice, breathes at 14/minute and maintains a saturation of 96% on room air, so quetiapine sedation is managed by watching the airway, the blood pressure and the ECG until it wears off. Immediate intubation is reserved for a patient who cannot protect the airway or ventilate. Flumazenil treats benzodiazepine sedation, which he has not taken, and can provoke seizures. Naloxone reverses opioids and his pupils are 6 mm. Physostigmine is used for agitated antimuscarinic delirium, and his depressed consciousness comes mainly from histamine blockade, which it does not reverse, while it risks bradycardia and seizures.",
        keyFeature: { topic: "tox", n: 2 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains his dry flushed skin and 6 mm pupils?",
        options: ["Alpha blockade from quetiapine", "Dopamine blockade in the brain", "Muscarinic blockade by quetiapine", "Serotonin excess from the drug", "Withdrawal of his usual medication"],
        correct: 2,
        explanation:
          "Quetiapine blocks muscarinic receptors as well as dopamine, histamine and alpha receptors, and the muscarinic effect produces dry flushed skin, large pupils, reduced bowel sounds, urinary retention and a pulse of 134/minute. Alpha blockade explains his blood pressure of 96/54 mmHg rather than the dry skin. Dopamine blockade produces movement disorders. Serotonin excess brings clonus and sweating, and his skin is dry. He took extra quetiapine rather than stopping it.",
        keyFeature: { topic: "tox", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following complications should be anticipated over the next several hours?",
        options: ["Acute dystonic reaction", "Deepening sedation", "Hypotension needing fluids", "Neuroleptic malignant syndrome", "Pulmonary embolism", "Serotonin toxicity with clonus", "Wide complex tachycardia"],
        select: 2,
        correct: [1, 2],
        explanation:
          "Absorption from up to 60 quetiapine tablets continues well beyond 3 hours, so the sedation that now leaves him mumbling to voice deepens further. Alpha blockade lowers vascular tone, and his blood pressure of 96/54 mmHg with a pulse of 134/minute is likely to fall further and need fluid. Dystonic reactions are uncommon with quetiapine because of its low affinity for dopamine receptors. Neuroleptic malignant syndrome develops over days and he is afebrile at 37.3°C. His QRS is 96 ms, and he takes no serotonergic drug. Pulmonary embolism is a later risk of immobility rather than an event of the next few hours.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following investigations is most likely to change his management tonight?",
        options: ["Head CT without contrast", "Repeat ECG for QT interval", "Serum quetiapine concentration", "Urine drug screen", "Venous ammonia level"],
        correct: 1,
        explanation:
          "His QTc is already 480 ms, and quetiapine prolongs repolarization further as the concentration peaks, so serial ECGs decide on monitoring, electrolyte correction and magnesium. A quetiapine concentration is a send out test that does not return in time. A urine drug screen reports classes he is not suspected of taking. Head CT is for focal signs or an unexplained coma. Ammonia is measured when valproate or liver failure is suspected, and neither applies.",
        keyFeature: { topic: "tox", n: 7 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 38 Benzodiazepine with ethanol -------------------------------------------- */
  {
    id: "tox-38",
    topic: "tox",
    title: "Man found asleep on a park bench",
    stem:
      "A 62-year-old man is brought to the emergency department by ambulance after being found asleep on a park bench. A friend says he takes clonazepam daily for anxiety, drinks heavily most days and took extra clonazepam today. He groans and moves when shaken. His pupils are 3 mm. Glucose 5.9 mmol/L and serum ethanol 42 mmol/L. There are no injuries and no needle marks. The chest is clear. The ECG shows sinus rhythm with a normal QRS.",
    vitals: { temperature: "36.2°C oral", pulse: "82/minute", resp: "12/minute", bp: "118/70 mmHg", o2sat: "94% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of his sedation now?",
        options: ["Flumazenil 0.2 mg IV titrated", "Intubation for airway protection", "Naloxone 0.8 mg IV", "Observation with airway care", "Physostigmine 1 mg IV"],
        correct: 3,
        explanation:
          "He groans and moves to stimulation, breathes at 12/minute and holds a saturation of 94% on room air, so sedation from clonazepam with an ethanol of 42 mmol/L is managed by positioning, monitoring and repeated assessment. Intubation is for failure to ventilate or protect the airway, which he has not reached. Naloxone is for opioid induced hypoventilation, and he breathes at 12/minute with no history of opioid use. Physostigmine treats antimuscarinic delirium. Flumazenil in a person who takes clonazepam daily risks withdrawal seizures.",
        keyFeature: { topic: "tox", n: 2 },
        source: "penninga-flumazenil",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the main risk of giving flumazenil to this man?",
        options: ["Acute liver injury", "Hypotension and bradycardia", "Prolonged sedation afterwards", "Seizures from abrupt reversal", "Ventricular tachycardia"],
        correct: 3,
        explanation:
          "He takes clonazepam daily, so his receptors are adapted to constant benzodiazepine occupancy, and abrupt reversal has been associated with seizures in trials that pooled adverse events from flumazenil. That risk is why it is reserved for reversal after procedural sedation in a patient who does not use benzodiazepines regularly. Flumazenil does not injure the liver or provoke ventricular tachycardia, and it shortens rather than prolongs sedation. Bradycardia and hypotension are not its characteristic harms.",
        keyFeature: { topic: "tox", n: 2 },
        source: "penninga-flumazenil",
      },
      {
        id: "q3",
        kind: "single",
        update: "Two hours later he is harder to rouse. His respiratory rate is 8/minute and his pupils are now 2 mm.",
        prompt: "Which of the following best explains this change in his condition?",
        options: ["Deepening ethanol effect", "Nonconvulsive status epilepticus", "Opioid co-ingestion emerging", "Postictal state after a seizure", "Rising carbon dioxide from sleep"],
        correct: 2,
        explanation:
          "Ethanol and benzodiazepine sedation should lighten as the hours pass, so deterioration at 2 hours with a respiratory rate of 8/minute and pupils narrowing from 3 mm to 2 mm points to a second agent, and that pattern is opioid. An unwitnessed seizure would not constrict the pupils. Carbon dioxide retention follows the hypoventilation rather than starting it. Ethanol at 42 mmol/L falls steadily with time rather than deepening.",
        keyFeature: { topic: "tox", n: 3 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate treatment for his breathing?",
        options: ["flumazenil 0.3 mg IV", "intubation without medication", "naloxone 2 mg IM single dose", "naloxone 0.4 mg IV titrated", "oxygen by nasal prongs only"],
        correct: 3,
        explanation:
          "Small titrated doses of naloxone restore ventilation while limiting abrupt withdrawal, which matters in a man who also has a benzodiazepine on board and a respiratory rate of 8/minute. A single 2 mg intramuscular dose gives a larger and slower acting reversal than is needed for a monitored patient with intravenous access. Oxygen alone treats the saturation without correcting ventilation. Intubation is avoidable if naloxone works. Flumazenil carries a seizure risk and does not reverse an opioid.",
        keyFeature: { topic: "tox", n: 4 },
        source: "cag",
      },
    ],
    sources: [S.penninga, S.goldfrank, S.cag],
    ...META,
  },

  /* 39 Nitrous oxide misuse -------------------------------------------------- */
  {
    id: "tox-39",
    topic: "tox",
    title: "Young man with numb feet and an unsteady walk",
    stem:
      "A 22-year-old man presents to the emergency department with 3 weeks of numbness in both feet and hands and an unsteady walk. He has fallen twice at home. He has inhaled nitrous oxide from cream chargers most evenings for 4 months. He takes no medication, drinks little alcohol and eats a mixed diet. Vibration and position sense are reduced to both knees, knee reflexes are brisk and ankle reflexes are absent, and his gait is wide based. Power is 4 out of 5 in both legs. Hb 118 g/L with a mean cell volume of 104 fL. Glucose 5.2 mmol/L.",
    vitals: { temperature: "36.7°C oral", pulse: "84/minute", resp: "16/minute", bp: "124/74 mmHg", o2sat: "99% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of his use most supports the diagnosis?",
        options: ["Brand of the canisters he buys", "Cost of his weekly supply", "Number of canisters used each week", "Time of day he uses them", "Whether he uses them alone"],
        correct: 2,
        explanation:
          "Neurological injury from nitrous oxide follows the amount inhaled over months, so counting canisters each week turns a vague history into an exposure that matches 3 weeks of numbness, absent ankle reflexes and a mean cell volume of 104 fL. The brand and the price do not describe the dose. The time of day and whether he uses alone inform safety advice and overdose risk but not the cause of a myeloneuropathy. Asking about the count also gives a baseline to follow once he stops.",
        keyFeature: { topic: "tox", n: 1 },
        source: "garakani-n2o",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations best supports the diagnosis in this man?",
        options: ["Nerve conduction studies", "Serum lead concentration", "Serum methylmalonic acid level", "Serum vitamin B12 concentration", "Thyroid stimulating hormone"],
        correct: 2,
        explanation:
          "Nitrous oxide oxidizes the cobalt in vitamin B12 and stops it working as a cofactor, so the substrates of the cobalamin dependent enzymes accumulate and methylmalonic acid rises even when the vitamin measures normal. A B12 concentration is still sent but a normal value does not exclude the injury. Nerve conduction studies show a neuropathy without naming its cause and do not assess the cord. Lead poisoning gives a motor neuropathy with abdominal pain, and thyroid disease does not produce loss of position sense with brisk knee reflexes.",
        keyFeature: { topic: "tox", n: 7 },
        source: "paris-n2o",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following explains a normal vitamin B12 result in a man with these findings?",
        options: ["Dietary intake of animal products", "Inactivation of the cobalamin cofactor", "Laboratory measurement error", "Recent multivitamin supplement", "Reduced intrinsic factor binding"],
        correct: 1,
        explanation:
          "The assay measures how much cobalamin is present, not whether it works, and nitrous oxide leaves the molecule in place while oxidizing it so that methionine synthase stalls. That is why a man with reduced position sense, absent ankle reflexes and a mean cell volume of 104 fL can report a normal value. His mixed diet keeps stores up but does not restore function. A recent supplement raises the measured value without changing the block. Loss of intrinsic factor lowers the concentration rather than leaving it normal, and a result that fits his history is not an error.",
        keyFeature: { topic: "tox", n: 3 },
        source: "garakani-n2o",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for him now?",
        options: ["Cyanocobalamin 1000 mcg IM", "Folic acid 5 mg PO daily", "Methylprednisolone 1 g IV", "Plasma exchange over 5 days", "Pyridoxine 100 mg PO daily"],
        correct: 0,
        explanation:
          "Parenteral cobalamin replaces the cofactor that nitrous oxide has inactivated and is given alongside advice to stop inhaling, which together give the best chance that his numbness and gait recover. Cyanocobalamin is the injectable form sold in Canada, and the hydroxocobalamin used in British guidance is equally effective. Folic acid corrects the blood picture without protecting the cord and can leave a neurological deficit to progress. Methylprednisolone and plasma exchange treat immune mediated myelopathies, which his 4 month exposure history does not describe. Pyridoxine treats isoniazid neuropathy and seizures rather than this one.",
        keyFeature: { topic: "tox", n: 2 },
        source: "paris-n2o",
      },
    ],
    sources: [S.garakani, S.paris],
    ...META,
  },

  /* 40 Methamphetamine with hyperthermia ------------------------------------- */
  {
    id: "tox-40",
    topic: "tox",
    title: "Agitated man brought in by police after a struggle",
    stem:
      "A 34-year-old man is brought to the emergency department by police after he was found fighting with bystanders. He was held face down in restraints for several minutes. He says he has used crystal methamphetamine for 3 days without sleep. He is agitated, diaphoretic and speaking rapidly, and his pupils are 7 mm. Glucose 7.4 mmol/L, K 5.6 mmol/L, creatinine 190 umol/L and creatine kinase 42 000 U/L. The ECG shows sinus tachycardia with a normal QRS.",
    vitals: { temperature: "40.4°C rectal", pulse: "148/minute", resp: "28/minute", bp: "176/104 mmHg", o2sat: "96% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most important initial treatment for this man?",
        options: ["Active cooling with sedation", "Dantrolene 2.5 mg/kg IV", "Haloperidol 5 mg IM alone", "Physical restraint and observation", "Propranolol 1 mg IV"],
        correct: 0,
        explanation:
          "A rectal temperature of 40.4°C with agitation is the finding that will kill him first, and benzodiazepine sedation with active external cooling lowers heat production and heat load together. Continued physical restraint without sedation drives muscle heat and worsens the creatine kinase of 42 000 U/L. Haloperidol alone lowers the seizure threshold and impairs heat loss. Dantrolene treats malignant hyperthermia from volatile anesthetics. Propranolol leaves alpha stimulation unopposed at a blood pressure of 176/104 mmHg.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations most changes his immediate management?",
        options: ["Blood culture and lactate", "Chest radiograph for infiltrates", "Head CT without contrast", "Potassium with an ECG", "Urine drug screen for amphetamines"],
        correct: 3,
        explanation:
          "His creatine kinase of 42 000 U/L and creatinine of 190 umol/L put him at risk of a rising potassium, which is already 5.6 mmol/L, so repeated potassium measurement with an ECG decides on calcium, insulin and dialysis. A urine screen confirms the drug he has already described and changes nothing. Head CT is for focal signs or persistent confusion after cooling and sedation. Blood cultures and a chest film address infection, which his history of 3 days of stimulant use and restraint does not point to.",
        keyFeature: { topic: "tox", n: 7 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications is most likely given his creatine kinase of 42 000 U/L?",
        options: ["Aspiration pneumonia", "Bowel ischemia with bleeding", "Cerebral venous thrombosis", "Kidney injury with hyperkalemia", "Pancreatitis with severe back pain"],
        correct: 3,
        explanation:
          "Myoglobin released from injured muscle obstructs and injures tubules, and his creatinine has already reached 190 umol/L with a potassium of 5.6 mmol/L, so worsening kidney injury with hyperkalemia is the expected complication. Stimulant use can cause bowel ischemia and arterial events, but neither fits a soft presentation with no abdominal or focal findings. Cerebral venous thrombosis and pancreatitis are not features of this picture, and he has no history of aspiration.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        update: "After sedation and cooling his temperature is 37.8°C. His urine is dark and he has passed 20 mL in the past 2 hours.",
        prompt: "Which of the following is the most appropriate treatment for his kidney risk now?",
        options: ["Furosemide 40 mg IV bolus", "Hemodialysis without delay", "Intravenous crystalloid infusion", "Mannitol 25 g IV once", "Sodium bicarbonate 100 mmol boluses"],
        correct: 2,
        explanation:
          "Volume repletion with crystalloid restores renal perfusion and flushes myoglobin through the tubules, and 20 mL of dark urine in 2 hours after 3 days without food or sleep shows he is dry. Furosemide lowers intravascular volume further in a patient who is already under filled. Mannitol has not been shown to add benefit and risks volume shifts. Bicarbonate boluses are given to alkalinize urine only once volume is restored. Dialysis is for refractory hyperkalemia, acidosis or anuria rather than a first measure.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 41 Warfarin over anticoagulation ------------------------------------------ */
  {
    id: "tox-41",
    topic: "tox",
    title: "Older woman with black stools",
    stem:
      "An 81-year-old woman presents to the emergency department with 2 days of black stools and light headedness. She takes warfarin for atrial fibrillation and started ciprofloxacin 4 days ago for a urinary infection. She has had no vomiting and no abdominal pain. She is pale and cool. Hb 78 g/L, platelets 210 x 10^9/L, INR 7.4, creatinine 96 umol/L. Rectal examination shows melena. The abdomen is soft and not tender.",
    vitals: { temperature: "36.6°C oral", pulse: "108/minute", resp: "20/minute", bp: "96/58 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her anticoagulation now?",
        options: ["Fresh frozen plasma 2 units", "Prothrombin concentrate and vitamin K", "Tranexamic acid 1 g IV alone", "Vitamin K 10 mg IV alone", "Withhold warfarin and observe"],
        correct: 1,
        explanation:
          "She has major bleeding with an INR of 7.4, a hemoglobin of 78 g/L and a blood pressure of 96/58 mmHg, so factors are replaced at once with four factor prothrombin complex concentrate, 3 000 units for an INR above 5, which is also the single dose maximum in the Canadian recommendations, and vitamin K 10 mg IV is given so that the correction holds as the concentrate wears off. Vitamin K alone takes hours to work. Plasma needs large volumes in an 81-year-old and corrects more slowly. Tranexamic acid does not replace clotting factors. Withholding warfarin alone leaves her bleeding for days.",
        keyFeature: { topic: "tox", n: 4 },
        source: "nac-pcc",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following best explains her INR of 7.4 on a stable dose?",
        options: ["Dietary vitamin K excess", "Hepatic failure from sepsis", "Interaction with ciprofloxacin", "Platelet dysfunction from age", "Warfarin resistance developing"],
        correct: 2,
        explanation:
          "Ciprofloxacin inhibits the cytochrome enzymes that clear warfarin and also disturbs gut flora that make vitamin K, and her INR rose after it was started 4 days ago. Extra dietary vitamin K would lower the INR rather than raise it. Her platelet count is 210 x 10^9/L, and platelet function does not alter the INR. She is afebrile at 36.6°C with no features of sepsis or liver failure. Warfarin resistance produces a low INR on a usual dose.",
        keyFeature: { topic: "tox", n: 3 },
        source: "nac-pcc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important next step in her resuscitation?",
        options: ["Intravenous pantoprazole infusion", "Nasogastric tube for lavage", "Octreotide infusion for varices", "Transfusion of matched red cells", "Urgent colonoscopy tonight"],
        correct: 3,
        explanation:
          "A hemoglobin of 78 g/L with a pulse of 108/minute and a blood pressure of 96/58 mmHg after 2 days of melena means she needs red cells alongside factor replacement. A pantoprazole infusion is given for upper gastrointestinal bleeding but does not restore oxygen carriage. Octreotide is for variceal bleeding, and nothing suggests liver disease. Nasogastric lavage does not change management. Colonoscopy is not the first test for melena and is unsafe before she is resuscitated.",
        keyFeature: { topic: "tox", n: 5 },
        source: "nac-pcc",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following tests best confirms that the reversal has worked?",
        options: ["Complete blood count", "Fibrinogen and platelet count", "Repeat INR after 30 minutes", "Thromboelastography", "Warfarin concentration"],
        correct: 2,
        explanation:
          "Prothrombin complex concentrate acts within minutes, and a repeat INR shortly after the infusion shows whether the factors have been replaced and whether a further dose is needed. A blood count follows the bleeding rather than the clotting. Fibrinogen and platelets are not the deficit created by warfarin. A warfarin concentration is not used in acute care. Thromboelastography is not required when the INR answers the question directly.",
        keyFeature: { topic: "tox", n: 7 },
        source: "nac-pcc",
      },
    ],
    sources: [S.nacPcc],
    ...META,
  },

  /* 42 MDMA and hyponatremia --------------------------------------------------- */
  {
    id: "tox-42",
    topic: "tox",
    title: "Seizure at a music festival",
    stem:
      "A 19-year-old woman is brought to the emergency department from a music festival after a witnessed generalized seizure. Friends say she took two tablets of ecstasy during the evening and drank a large amount of water because she felt hot. She has vomited twice. She is confused and restless and complains of headache. Her pupils are 6 mm. Na 118 mmol/L, K 3.8 mmol/L, glucose 6.2 mmol/L, urea 3.6 mmol/L, creatinine 72 umol/L. Measured serum osmolality is 248 mmol/kg. There are no injuries.",
    vitals: { temperature: "37.9°C oral", pulse: "118/minute", resp: "20/minute", bp: "112/68 mmHg", o2sat: "98% on room air", weight: "54 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her sodium of 118 mmol/L?",
        options: ["Fluid restriction alone", "Hypertonic saline 3% 100 mL IV", "Isotonic saline 1 L bolus IV", "Normal saline with furosemide IV", "Tolvaptan 15 mg PO once"],
        correct: 1,
        explanation:
          "She has had a seizure and remains confused with a sodium of 118 mmol/L, which is symptomatic hyponatremia and calls for a small bolus of hypertonic saline to raise the sodium by a few millimoles and pull water out of brain cells. Isotonic saline corrects too slowly and can worsen the sodium when antidiuretic hormone is high. Fluid restriction alone is for stable patients. Furosemide adds losses without correcting the sodium quickly. Tolvaptan acts over hours to days.",
        keyFeature: { topic: "tox", n: 4 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations best explains the cause of her low sodium?",
        options: ["Serum cortisol concentration", "Thyroid stimulating hormone", "Urine drug screen for ecstasy", "Urine output over 24 hours", "Urine sodium with urine osmolality"],
        correct: 4,
        explanation:
          "Paired urine sodium and osmolality separate free water intake with appropriate dilute urine from the inappropriate antidiuresis that ecstasy provokes, and that distinction sets how fast and how far her sodium of 118 mmol/L should be corrected. A urine screen confirms an exposure she has already described. Cortisol and thyroid testing look for endocrine causes that a night at a festival does not suggest. A 24 hour urine volume is not available in time to guide care.",
        keyFeature: { topic: "tox", n: 7 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next few hours?",
        options: ["Cerebral edema with herniation", "Hepatic failure with jaundice", "Malignant hyperthermia", "Pulmonary fibrosis over days", "Thrombocytopenia with bleeding"],
        correct: 0,
        explanation:
          "Water has moved into brain cells at a sodium of 118 mmol/L, and she has already seized and remains confused with a headache, so further swelling with brainstem compression is the immediate threat. Liver injury after ecstasy develops over days and she has no jaundice. Malignant hyperthermia follows volatile anesthetics and succinylcholine. Thrombocytopenia with bleeding and pulmonary fibrosis are not part of this presentation.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains her measured serum osmolality of 248 mmol/kg?",
        options: ["Dilution from water intake", "Ethanol in the serum", "Hyperglycemia from stress", "Laboratory measurement error", "Renal failure with urea rise"],
        correct: 0,
        explanation:
          "Twice her sodium of 118 plus a glucose of 6.2 and a urea of 3.6 gives a calculated osmolality of 245.8 mmol/kg, within about 2 mmol/kg of the measured 248 mmol/kg, so the low value reflects dilution by the water she drank rather than an unmeasured substance. A toxic alcohol or ethanol co-ingestion raises measured osmolality above the calculated value instead of lowering it. Hyperglycemia and a high urea also raise it, and her glucose is 6.2 mmol/L with a urea of 3.6 mmol/L.",
        keyFeature: { topic: "tox", n: 3 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank],
    ...META,
  },

  /* 43 Internally concealed packets -------------------------------------------- */
  {
    id: "tox-43",
    topic: "tox",
    title: "Traveller with densities on an abdominal film",
    stem:
      "A 31-year-old man is brought to the emergency department by border officers after an abdominal radiograph at the airport showed multiple oval densities through the bowel. He gives no history and asks for a lawyer. He is alert and calm and says he has no symptoms. His pupils are 4 mm. Glucose 5.8 mmol/L. The abdomen is soft and not tender with normal bowel sounds. The ECG shows sinus rhythm with a normal QRS.",
    vitals: { temperature: "36.8°C oral", pulse: "76/minute", resp: "16/minute", bp: "124/78 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate management of the packets he is carrying?",
        options: ["Endoscopic retrieval of packets", "Laparotomy to remove them", "Observation without treatment", "Single dose activated charcoal", "Whole bowel irrigation by tube"],
        correct: 4,
        explanation:
          "He is asymptomatic with a soft abdomen and normal bowel sounds, so polyethylene glycol given by tube moves the packets through intact and shortens the time they can leak. Endoscopic retrieval risks tearing a packet in the stomach. Laparotomy is kept for obstruction, perforation or leaking packets with toxicity. A single dose of charcoal does not clear packets from the bowel. Observation alone leaves intact packets sitting in the gut for days.",
        keyFeature: { topic: "tox", n: 6 },
        source: "wbi-position",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following pieces of information is most useful in planning his care?",
        options: ["His flight number and route", "The drug the packets contain", "The name of his travel agent", "Whether he has eaten today", "Whether he is under arrest"],
        correct: 1,
        explanation:
          "Knowing whether the packets hold cocaine, an opioid or a stimulant decides which deterioration to plan for and which antidote and monitoring to prepare, so the officers and the seized samples are worth asking about. His custody status and his travel agent do not change treatment. A recent meal matters little when whole bowel irrigation is planned. The flight number alone does not identify the contents.",
        keyFeature: { topic: "tox", n: 1 },
        source: "traub-bodypacking",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most dangerous complication of this condition?",
        options: ["Bowel obstruction with vomiting", "Mechanical bowel perforation", "Packet rupture with poisoning", "Peritonitis from ischemia", "Rectal bleeding from trauma"],
        correct: 2,
        explanation:
          "A packet that splits delivers a concentrated dose all at once, and the resulting poisoning kills faster than any mechanical problem, which is why he stays monitored even while looking well with a pulse of 76/minute. Obstruction and perforation do occur and need surgery, but they develop with warning signs in an abdomen that is currently soft with normal bowel sounds. Ischemic peritonitis and rectal bleeding are uncommon and slower to evolve.",
        keyFeature: { topic: "tox", n: 5 },
        source: "traub-bodypacking",
      },
      {
        id: "q4",
        kind: "single",
        update: "Six hours into irrigation he becomes agitated and diaphoretic with 8 mm pupils, a pulse of 168/minute and a temperature of 40.1°C.",
        prompt: "Which of the following is the most appropriate next step in his management?",
        options: ["Activated charcoal by tube", "Emergency laparotomy for removal", "Haloperidol 5 mg IM only", "Repeat whole bowel irrigation now", "Upper endoscopy for retrieval"],
        correct: 1,
        explanation:
          "Agitation with 8 mm pupils, a pulse of 168/minute and a temperature of 40.1°C means a packet has ruptured and is still releasing drug, and surgical removal alongside sedation and cooling is the only way to stop the exposure. Continuing irrigation cannot outpace a leaking packet. Endoscopy cannot reach packets through the small bowel and risks rupturing more. Charcoal does not bind what has already been absorbed. Haloperidol alone treats agitation while the source keeps delivering drug.",
        keyFeature: { topic: "tox", n: 4 },
        source: "traub-bodypacking",
      },
    ],
    sources: [S.traub, S.wbi],
    ...META,
  },

  /* 44 Nicotine liquid in a toddler --------------------------------------------- */
  {
    id: "tox-44",
    topic: "tox",
    title: "Toddler found with a vaping bottle",
    stem:
      "A 20-month-old girl is brought to the emergency department by her mother 30 minutes after she was found with an open bottle of nicotine liquid for a vaping device. Liquid was on her face, hands and clothing, and the bottle was about half empty. She has vomited three times and is pale and drooling. She is irritable but consolable. Her pupils are 3 mm. Capillary glucose is 5.6 mmol/L. There are no burns to the lips and the chest is clear.",
    vitals: { temperature: "36.6°C rectal", pulse: "164/minute", resp: "36/minute", bp: "96/58 mmHg", o2sat: "97% on room air", weight: "11 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate decontamination for this child?",
        options: ["Activated charcoal 1 g/kg PO", "Gastric lavage with saline", "Nasogastric aspiration of liquid", "Remove clothing and wash the skin", "Whole bowel irrigation by tube now"],
        correct: 3,
        explanation:
          "Nicotine crosses skin readily, and liquid remains on her face, hands and clothing, so taking the clothes off and washing the skin stops a source of continuing absorption. Charcoal in a child who has vomited three times and is drooling risks aspiration. Lavage and nasogastric aspiration provoke vomiting of a liquid that is already absorbed. Whole bowel irrigation is for packets and modified release tablets rather than a swallowed liquid.",
        keyFeature: { topic: "tox", n: 6 },
        source: "goldfrank",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next few hours?",
        options: ["Hypertensive crisis with stroke", "Late bradycardia and weakness", "Methemoglobinemia with cyanosis", "Prolonged hypoglycemia", "Severe hyperthermia"],
        correct: 1,
        explanation:
          "Nicotine first stimulates autonomic ganglia, which explains her pulse of 164/minute, vomiting and drooling, and then blocks them, so bradycardia, weakness and respiratory muscle failure follow in significant exposures. Her glucose is 5.6 mmol/L, and hypoglycemia is not a feature of nicotine poisoning. Methemoglobinemia follows oxidizing agents. A stroke from hypertension is not a described course in a toddler, and nicotine does not produce severe hyperthermia.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following treatments is most appropriate for her at this time?",
        options: ["Atropine 0.02 mg/kg IV now", "Naloxone 0.1 mg/kg IV", "Ondansetron and observation", "Physostigmine 0.02 mg/kg IV", "Pralidoxime 25 mg/kg IV"],
        correct: 2,
        explanation:
          "There is no antidote for nicotine, so care is an antiemetic for repeated vomiting with monitoring of the pulse, breathing and level of consciousness while the effect passes. Atropine is given for bradycardia with secretions, and her pulse is 164/minute. Physostigmine inhibits cholinesterase and would add cholinergic effect. Pralidoxime reactivates cholinesterase blocked by organophosphates, and nicotine does not inhibit the enzyme. Naloxone reverses opioids, and her drooling, vomiting and tachycardia are not an opioid picture.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cag",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for this child?",
        options: ["Discharge after 2 hours if settled", "Discharge now with advice", "Monitored observation for 6 hours", "Observe 1 hour then discharge", "Refer to the poison centre clinic"],
        correct: 2,
        explanation:
          "She is symptomatic with vomiting, drooling and a pulse of 164/minute at 30 minutes, and the later phase of bradycardia and weakness can appear several hours after a concentrated liquid exposure, so she stays on a monitor for at least 6 hours. Discharge now or after 1 or 2 hours would send home a child before that phase could declare itself. An outpatient referral does not provide observation today.",
        keyFeature: { topic: "tox", n: 5 },
        source: "goldfrank",
      },
    ],
    sources: [S.goldfrank, S.cag],
    ...META,
  },

  /* 45 Staggered acetaminophen ingestion ----------------------------------------- */
  {
    id: "tox-45",
    topic: "tox",
    title: "Woman with nausea and right sided abdominal pain",
    stem:
      "A 46-year-old woman presents to the emergency department with 2 days of nausea and right upper quadrant pain. She has taken two extra strength acetaminophen tablets of 500 mg every 4 hours for 3 days for dental pain and has eaten very little. She drinks 4 to 6 standard drinks most days. She is tender in the right upper quadrant without guarding. ALT 3200 U/L, AST 2900 U/L, INR 2.1, creatinine 104 umol/L, glucose 4.4 mmol/L, venous pH 7.36 and lactate 2.4 mmol/L. The acetaminophen concentration is 90 umol/L.",
    vitals: { temperature: "37.0°C oral", pulse: "96/minute", resp: "18/minute", bp: "118/74 mmHg", o2sat: "98% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best guides treatment in this pattern of ingestion?",
        options: ["Acetaminophen concentration alone", "Liver enzymes and INR", "Rumack Matthew nomogram plot", "Time since the first tablet", "Urine drug screen result"],
        correct: 1,
        explanation:
          "Her transaminases of 3200 U/L and an INR of 2.1 show injury that is already established, and those values decide treatment and follow up after repeated supratherapeutic doses. The nomogram applies only to a single ingestion at a known time, which she did not have. A concentration of 90 umol/L is low and would falsely reassure when taken alone 2 days into the illness. Screening urine adds nothing to a clear medication history.",
        keyFeature: { topic: "tox", n: 7 },
        source: "apap-consensus",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her at this time?",
        options: ["Activated charcoal 50 g PO", "Fomepizole 15 mg/kg IV", "Intravenous acetylcysteine infusion", "Observation with enzymes repeated daily", "Vitamin K 10 mg IV alone"],
        correct: 2,
        explanation:
          "Acetylcysteine replenishes glutathione and limits further injury, and it is given whenever transaminases are raised after repeated supratherapeutic acetaminophen, which her ALT of 3200 U/L and INR of 2.1 show. Charcoal binds drug in the gut and her last tablets were hours ago with injury already present. Vitamin K corrects a coagulopathy from vitamin K deficiency rather than from failing hepatocytes. Fomepizole is for toxic alcohols. Observation alone withholds the treatment that changes outcome.",
        keyFeature: { topic: "tox", n: 4 },
        source: "apap-consensus",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings would most support transfer to a liver transplant centre?",
        options: ["ALT above 3000 U/L", "Arterial pH below 7.30", "Creatinine of 104 umol/L", "INR of 2.1 on arrival", "Lactate of 2.4 mmol/L"],
        correct: 1,
        explanation:
          "Acidemia after resuscitation is the single strongest marker of poor outcome in acetaminophen induced liver failure, and her venous pH of 7.36 today is reassuring by comparison. Transaminases show that hepatocytes have been injured but do not predict survival, and hers are already above 3000 U/L without other failure. An INR of 2.1 on day 2 is below the threshold used for listing, and her creatinine of 104 umol/L and lactate of 2.4 mmol/L are near normal.",
        keyFeature: { topic: "tox", n: 5 },
        source: "kings-college",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following features most increases her risk of liver injury from this dose?",
        options: ["Dental pain as the reason", "Female sex at this age", "Normal creatinine of 104 umol/L", "Regular alcohol with poor intake", "Use of tablets rather than liquid"],
        correct: 3,
        explanation:
          "Drinking 4 to 6 standard drinks most days induces the enzyme that forms the toxic metabolite, and eating very little for days lowers the glutathione available to detoxify it, so the 6 g she took each day is more dangerous in her than in a well nourished person. The reason she took the tablets and the formulation she chose do not alter metabolism. Her sex is not an established risk factor, and a creatinine of 104 umol/L describes kidney function rather than added risk.",
        keyFeature: { topic: "tox", n: 3 },
        source: "apap-consensus",
      },
    ],
    sources: [S.apap, S.kings],
    ...META,
  },

  /* 46 Missed methadone doses ------------------------------------------------- */
  {
    id: "tox-46",
    topic: "tox",
    title: "Man unwell after a week away from home",
    stem:
      "You are working in an emergency department in British Columbia. A 37-year-old man presents with 12 hours of sweating, abdominal cramps, diarrhea and severe restlessness. He has taken methadone 90 mg daily for 2 years and missed his last 4 daily doses while away from home. He says he has used no other opioid since. He is anxious and yawning, with gooseflesh, a fine tremor and 6 mm pupils. Glucose 5.4 mmol/L. The abdomen is soft with active bowel sounds and there is no tenderness.",
    vitals: { temperature: "37.1°C oral", pulse: "108/minute", resp: "18/minute", bp: "142/88 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best establishes the severity of his withdrawal?",
        options: ["Clinical Opiate Withdrawal Scale score", "His reported craving score", "Serum methadone concentration", "Time since his last dose", "Urine drug screen result"],
        correct: 0,
        explanation:
          "A scored scale of observed signs, including his pulse of 108/minute, sweating, gooseflesh, 6 mm pupils, tremor, yawning and gastrointestinal upset, grades withdrawal objectively and is repeated to show whether treatment is working. Craving is subjective and does not track the physical state. A methadone concentration is not measured in acute care. The interval since his last dose predicts withdrawal but does not measure it. A urine screen confirms exposure rather than severity.",
        keyFeature: { topic: "tox", n: 8 },
        source: "cows-scale",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate methadone dose to give him today?",
        options: ["30 mg PO once", "45 mg PO once", "60 mg PO once", "90 mg PO once", "120 mg PO once"],
        correct: 1,
        explanation:
          "The BCCSU guideline resumes the usual dose after up to 3 missed daily doses, but after 4 consecutive missed doses tolerance has fallen, so the dose is 50% of the previous dose or 30 to 40 mg, whichever is higher. Half of 90 mg is 45 mg. Giving 60 mg or more risks sedation and respiratory depression at the peak in 3 to 4 hours. A dose of 30 mg is the restart dose after 5 or more missed days and would leave him in withdrawal here.",
        keyFeature: { topic: "tox", n: 8 },
        source: "bccsu-oud",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following medications best relieves his autonomic withdrawal symptoms?",
        options: ["clonidine 0.1 mg PO", "dimenhydrinate 50 mg PO", "haloperidol 2 mg PO", "ibuprofen 400 mg PO", "loperamide 4 mg PO"],
        correct: 0,
        explanation:
          "Clonidine dampens the central noradrenergic surge that produces his sweating, gooseflesh, restlessness, tremor and pulse of 108/minute, so it covers the autonomic cluster while the methadone dose takes effect. Loperamide and dimenhydrinate each treat one symptom, namely diarrhea and nausea, and loperamide in large doses is itself a cardiac hazard. Ibuprofen helps cramps and aches only. Haloperidol does not treat withdrawal and lowers the seizure threshold.",
        keyFeature: { topic: "tox", n: 8 },
        source: "bccsu-oud",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan after his dose is given?",
        options: ["Give a further 45 mg in 2 hours", "Notify his pharmacy and prescriber", "Prescribe take home doses for a week", "Refer to a clinic in 1 week", "Restart 90 mg daily from tomorrow"],
        correct: 1,
        explanation:
          "A dose given in the emergency department must be reported to his community pharmacy so that he is not dosed twice today, and his prescriber reviews the restart and the titration back toward his usual dose, which keeps him in treatment. A further 45 mg in 2 hours stacks onto a concentration that is still rising. Returning to 90 mg tomorrow ignores the loss of tolerance that led to the reduced dose. Take home doses for a person with reduced tolerance are unsafe, and a referral in a week leaves him without his daily witnessed dose.",
        keyFeature: { topic: "tox", n: 8 },
        source: "ecbc-missed-oat",
      },
    ],
    sources: [S.cows, S.bccsu, S.ecbcOat],
    ...META,
  },

  /* 47 Severe alcohol withdrawal ------------------------------------------------ */
  {
    id: "tox-47",
    topic: "tox",
    title: "Agitated woman 3 days after a fall",
    stem:
      "You are working in a community hospital emergency department. A 58-year-old woman is brought in by her son with 2 days of tremor, vomiting and worsening agitation. She drinks about 1 L of wine daily and stopped 3 days ago after a fall at home. She is disoriented to place and time, picks at her blanket and says there are spiders on the wall. She has had lorazepam 2 mg IV on four occasions over 2 hours with little change. Glucose 5.8 mmol/L. Na 134, K 3.2, Mg 0.62 mmol/L. There is no head injury and no focal weakness.",
    vitals: { temperature: "37.8°C oral", pulse: "132/minute", resp: "24/minute", bp: "168/96 mmHg", o2sat: "97% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes her condition three days after her last drink?",
        options: ["Alcoholic hallucinosis", "Delirium tremens", "Hepatic encephalopathy", "Wernicke encephalopathy", "Withdrawal seizure"],
        correct: 1,
        explanation:
          "Disorientation to place and time with visual hallucinations, picking at the bedclothes, a pulse of 132/minute, a blood pressure of 168/96 mmHg and a temperature of 37.8°C three days after her last drink is delirium tremens rather than a milder syndrome. Alcoholic hallucinosis leaves the sensorium clear. Wernicke encephalopathy brings ophthalmoplegia and ataxia rather than autonomic storm. Hepatic encephalopathy causes a depressed level of consciousness with asterixis. She has had no seizure.",
        keyFeature: { topic: "tox", n: 8 },
        source: "bc-aud",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next treatment for her agitation?",
        options: ["Haloperidol 5 mg IM", "Ketamine 1 mg/kg IV", "Phenobarbital 10 mg/kg IV", "Propofol without intubation", "Restraints and observation"],
        correct: 2,
        explanation:
          "She has had 8 mg of lorazepam over 2 hours with little effect, and phenobarbital acts at a different site on the same receptor and at the dose studied in the emergency department it reduced intensive care admission when added to benzodiazepines. Haloperidol lowers the seizure threshold and impairs heat loss. Propofol without a secured airway risks apnea. Ketamine is not an established treatment for this syndrome. Restraint alone drives further agitation and muscle injury.",
        keyFeature: { topic: "tox", n: 4 },
        source: "rosenson-phenobarbital",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following treatments should accompany her sedation tonight?",
        options: ["Beta blocker infusion for the pulse", "Intravenous antibiotics empirically", "Intravenous thiamine and electrolytes", "Oral folic acid and multivitamin", "Physical restraint until calm"],
        correct: 2,
        explanation:
          "Thiamine given parenterally protects a chronically drinking patient against Wernicke encephalopathy, and her potassium of 3.2 mmol/L and magnesium of 0.62 mmol/L both need replacement because low magnesium sustains tremor and dysrhythmia. Beta blockade masks the autonomic signs used to titrate sedation. Antibiotics are for a documented or strongly suspected infection rather than for a temperature of 37.8°C in withdrawal. Oral vitamins are absorbed poorly and act too slowly. Restraint is not a treatment.",
        keyFeature: { topic: "tox", n: 2 },
        source: "bc-aud",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next 24 hours?",
        options: ["Acute kidney injury from sepsis", "Aspiration with respiratory failure", "Hemolysis with dark urine", "Hypertensive intracerebral hemorrhage", "Thyroid storm with fever"],
        correct: 1,
        explanation:
          "Deepening sedation is needed to control delirium tremens, and she has been vomiting with a respiratory rate of 24/minute, so aspiration with respiratory failure is the complication that follows treatment in this setting and drives the decision about an airway and transfer. Thyroid storm produces a similar autonomic picture but is not caused by alcohol withdrawal. Hemolysis and intracerebral hemorrhage are not features. Sepsis may coexist but nothing in her presentation points to a source.",
        keyFeature: { topic: "tox", n: 5 },
        source: "bc-aud",
      },
    ],
    sources: [S.bcAud, S.rosenson],
    ...META,
  },
];
