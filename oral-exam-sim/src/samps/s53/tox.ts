// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  cag: { id: "cag", citation: "Centre antipoison du Quebec and CIUSSS de la Capitale-Nationale. Canadian Antidote Guide in Acute Care Toxicology. Online edition. Accessed 24 September 2026.", url: "https://www.ciusss-capitalenationale.gouv.qc.ca/en/antidotes" },
  aha: { id: "aha-2023", citation: "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023.", url: "https://doi.org/10.1161/CIR.0000000000001161" },
  gfCh3: { id: "goldfrank-ch3", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter 3, Initial Evaluation of the Patient: Vital Signs and Toxic Syndromes.", url: "https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html" },
  gfCh4: { id: "goldfrank-ch4", citation: "Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter 4, Principles of Managing the Acutely Poisoned or Overdosed Patient.", url: "https://www.mheducation.com/highered/mhp/product/goldfrank-s-toxicologic-emergencies-eleventh-edition.html" },
  gfToxAlc: { id: "goldfrank-toxic-alcohols", citation: "Wiener SW. Toxic Alcohols. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Toxic Alcohols.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210275462" },
  gfAntiepileptics: { id: "goldfrank-antiepileptics", citation: "Doyon S. Antiepileptics. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Antiepileptics.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210272255" },
  gfMethylxanthines: { id: "goldfrank-methylxanthines", citation: "Hoffman RJ. Methylxanthines and Selective β2-Adrenergic Agonists. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Methylxanthines and Selective β2-Adrenergic Agonists.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210274122" },
  gfMetHb: { id: "goldfrank-methemoglobin", citation: "Price DP. Methemoglobin Inducers. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Methemoglobin Inducers.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210264643" },
  gfAntipsychotics: { id: "goldfrank-antipsychotics", citation: "Juurlink DN. Antipsychotics. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Antipsychotics.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210274542" },
  gfAmphetamines: { id: "goldfrank-amphetamines", citation: "Spyres MB, Jang DH. Amphetamines. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Amphetamines.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210259500" },
  gfFluid: { id: "goldfrank-fluid-electrolyte", citation: "Charney AN, Hoffman RS. Fluid, Electrolyte, and Acid-Base Principles. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Fluid, Electrolyte, and Acid-Base Principles.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210258523" },
  gfNicotine: { id: "goldfrank-nicotine", citation: "Fernández D, Soghoian S. Nicotine. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Nicotine.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210260322" },
  aacMdac: { id: "aact-mdac", citation: "American Academy of Clinical Toxicology, European Association of Poisons Centres and Clinical Toxicologists. Position statement and practice guidelines on the use of multi-dose activated charcoal in the treatment of acute poisoning. J Toxicol Clin Toxicol. 1999.", url: "https://pubmed.ncbi.nlm.nih.gov/10584586/" },
  reith: { id: "reith-bb", citation: "Reith DM, Dawson AH, Epid D, Whyte IM, Buckley NA, Sayer GP. Relative toxicity of beta blockers in overdose. J Toxicol Clin Toxicol. 1996.", url: "https://pubmed.ncbi.nlm.nih.gov/8667464/" },
  spiller: { id: "spiller-clonidine", citation: "Spiller HA, Klein-Schwartz W, Colvin JM, et al. Toxic clonidine ingestion in children. J Pediatr. 2005.", url: "https://pubmed.ncbi.nlm.nih.gov/15689921/" },
  scharman: { id: "scharman-rhabdo", citation: "Scharman EJ, Troutman WG. Prevention of kidney injury following rhabdomyolysis: a systematic review. Ann Pharmacother. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/23324509/" },
  sfe: { id: "sfe-hyponatraemia", citation: "Ball S, Barth J, Levy M, Society for Endocrinology Clinical Committee. Society for Endocrinology endocrine emergency guidance: emergency management of severe symptomatic hyponatraemia in adult patients. Endocr Connect. 2016.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5314809/" },
  tenenbein: { id: "tenenbein-screen", citation: "Tenenbein M. Do you really need that emergency drug screen? Clin Toxicol. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19514875/" },
  glatstein: { id: "glatstein-octreotide", citation: "Glatstein M, Scolnik D, Bentur Y. Octreotide for the treatment of sulfonylurea poisoning. Clin Toxicol. 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/23046209/" },
  extripMet: { id: "extrip-metformin", citation: "Calello DP, Liu KD, Wiegand TJ, et al. Extracorporeal treatment for metformin poisoning: systematic review and recommendations from the EXTRIP workgroup. Crit Care Med. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25860205/" },
  extripVpa: { id: "extrip-valproate", citation: "Ghannoum M, Laliberte M, Nolin TD, et al. Extracorporeal treatment for valproic acid poisoning: systematic review and recommendations from the EXTRIP workgroup. Clin Toxicol. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/25950372/" },
  extripCbz: { id: "extrip-carbamazepine", citation: "Ghannoum M, Yates C, Galvao TF, et al. Extracorporeal treatment for carbamazepine poisoning: systematic review and recommendations from the EXTRIP workgroup. Clin Toxicol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/25355482/" },
  slaughter: { id: "slaughter-isopropanol", citation: "Slaughter RJ, Mason RW, Beasley DM, Vale JA, Schep LJ. Isopropanol poisoning. Clin Toxicol. 2014.", url: "https://pubmed.ncbi.nlm.nih.gov/24815348/" },
  caustic: { id: "caustic-nejm", citation: "Hoffman RS, Burns MM, Gosselin S. Ingestion of caustic substances. N Engl J Med. 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/32348645/" },
  aapccLaar: { id: "aapcc-laar", citation: "Caravati EM and colleagues, American Association of Poison Control Centers. Long-acting anticoagulant rodenticide poisoning: an evidence-based consensus guideline for out-of-hospital management. Clin Toxicol. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17357377/" },
  gunja: { id: "gunja-brodifacoum", citation: "Gunja N, Coggins A, Bidny S. Management of intentional superwarfarin poisoning with long-term vitamin K and brodifacoum levels. Clin Toxicol. 2011.", url: "https://pubmed.ncbi.nlm.nih.gov/21740137/" },
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
  ng: { id: "ng-h2s", citation: "Ng PC, Hendry-Hofer TB, Witeof AE, et al. Hydrogen sulfide toxicity: mechanism of action, clinical presentation, and countermeasure development. J Med Toxicol. 2019.", url: "https://doi.org/10.1007/s13181-019-00710-5" },
  atsdrH2s: { id: "atsdr-h2s", citation: "Agency for Toxic Substances and Disease Registry. Medical management guidelines for hydrogen sulfide. Centers for Disease Control and Prevention. 2014.", url: "https://wwwn.cdc.gov/TSP/MMG/MMGDetails.aspx?mmgid=385&toxid=67" },
  boland: { id: "boland-naloxone", citation: "Boland J, Boland E, Brooks D. Importance of the correct diagnosis of opioid-induced respiratory depression in adult cancer patients and titration of naloxone. Clin Med (Lond). 2013.", url: "https://doi.org/10.7861/clinmedicine.13-2-149" },
  sandozFentanyl: { id: "sandoz-fentanyl", citation: "Sandoz Canada Inc. Product monograph. Sandoz Fentanyl Patch (fentanyl transdermal system). Date of revision 26 February 2020.", url: "https://pdf.hres.ca/dpd_pm/00055220.PDF" },
  fuOximetry: { id: "fu-oximetry", citation: "Fu ES, Downs JB, Schweiger JW, Miguel RV, Smith RA. Supplemental oxygen impairs detection of hypoventilation by pulse oximetry. Chest. 2004.", url: "https://doi.org/10.1378/chest.126.5.1552" },
  bhargava: { id: "bhargava-mtx", citation: "Bhargava P, et al. Comparison of two doses of leucovorin in severe low-dose methotrexate toxicity. A randomized controlled trial. Arthritis Res Ther. 2023.", url: "https://doi.org/10.1186/s13075-023-03054-2" },
  pivovarov: { id: "pivovarov-mtx", citation: "Pivovarov K, Zipursky JS. Low-dose methotrexate toxicity. CMAJ. 2019.", url: "https://doi.org/10.1503/cmaj.181054" },
  trekkGe: { id: "trekk-ge", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Gastroenteritis. Version 5.0. 2025.", url: "https://cms.trekk.ca/wp-content/uploads/2023/11/2025_10_14-TREKK-Gastroenteritis-BLR-v5.0_FinalDraft.pdf" },
  rayar: { id: "rayar", citation: "Rayar P, Ratnapalan S. Pediatric ingestions of household products containing ethanol. A review. Clin Pediatr (Phila). 2013.", url: "https://doi.org/10.1177/0009922812470970" },
  purssell: { id: "purssell", citation: "Purssell RA, Pudek M, Brubacher J, Abu-Laban RB. Derivation and validation of a formula to calculate the contribution of ethanol to the osmolal gap. Ann Emerg Med. 2001.", url: "https://doi.org/10.1067/mem.2001.119455" },
  santos: { id: "santos", citation: "Santos C, Kieszak S, Wang A, Law R, Schier J, Wolkin A. Reported adverse health effects in children from ingestion of alcohol-based hand sanitizers. United States, 2011 to 2014. MMWR Morb Mortal Wkly Rep. 2017.", url: "https://www.cdc.gov/mmwr/volumes/66/wr/mm6608a5.htm" },
  extripBaclofen: { id: "extrip-baclofen", citation: "Ghannoum M, Berling I, Lavergne V, et al. Recommendations from the EXTRIP workgroup on extracorporeal treatment for baclofen poisoning. Kidney Int. 2021.", url: "https://doi.org/10.1016/j.kint.2021.07.014" },
  extripLithium: { id: "extrip-lithium", citation: "Decker BS, Goldfarb DS, Dargan PI, et al. Extracorporeal treatment for lithium poisoning. Systematic review and recommendations from the EXTRIP workgroup. Clin J Am Soc Nephrol. 2015.", url: "https://doi.org/10.2215/CJN.10021014" },
  thanacoody: { id: "thanacoody", citation: "Thanacoody R, Caravati EM, Troutman B, et al. Position paper update. Whole bowel irrigation for gastrointestinal decontamination of overdose patients. Clin Toxicol (Phila). 2015.", url: "https://doi.org/10.3109/15563650.2014.989326" },
  toce: { id: "toce-buprenorphine", citation: "Toce MS, Burns MM, O'Donnell KA. Clinical effects of unintentional pediatric buprenorphine exposures: experience at a single tertiary care center. Clin Toxicol (Phila). 2017.", url: "https://doi.org/10.1080/15563650.2016.1244337" },
  moeller: { id: "moeller-uds", citation: "Moeller KE, Kissack JC, Atayee RS, Lee KC. Clinical interpretation of urine drug tests: what clinicians need to know about urine drug screens. Mayo Clin Proc. 2017.", url: "https://doi.org/10.1016/j.mayocp.2016.12.007" },
  acpcNaloxone: { id: "acpc-naloxone", citation: "Atlantic Canada Poison Centre. Antidote kit manual. Naloxone hydrochloride, pediatric. Updated February 2020.", url: "https://atlanticcanadapoisoncentre.ca/naloxone-hydrochloride-pediatric.html" },
  oakley: { id: "oakley", citation: "Oakley B, Wilson H, Hayes V, Lintzeris N. Managing opioid withdrawal precipitated by buprenorphine with buprenorphine. Drug Alcohol Rev. 2021.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8248003/" },
  martino: { id: "martino-2025", citation: "Martino A, Di Serafino M, Zito FP, et al. Role of computed tomography in the assessment of caustic ingestion severity. A comprehensive review. World Journal of Radiology. 2025.", url: "https://doi.org/10.4329/wjr.v17.i7.109172" },
  zar: { id: "zar-2007", citation: "Zar T, Graeber C, Perazella MA. Recognition, treatment and prevention of propylene glycol toxicity. Seminars in Dialysis. 2007.", url: "https://doi.org/10.1111/j.1525-139x.2007.00280.x" },
  yahwak: { id: "yahwak-2008", citation: "Yahwak JA, Riker RR, Fraser GL, Subak-Sharpe S. Determination of a lorazepam dose threshold for using the osmol gap to monitor for propylene glycol toxicity. Pharmacotherapy. 2008.", url: "https://doi.org/10.1592/phco.28.8.984" },
  thakrar: { id: "thakrar", citation: "Thakrar AP, et al. Buprenorphine-precipitated withdrawal among hospitalized patients using fentanyl. JAMA Netw Open. 2024.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11437388/" },
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

  /* 17 Fentanyl patch toxicity ------------------------------------------- */
  {
    id: "tox-17",
    topic: "tox",
    alsoTopics: ["loc"],
    title: "Older man who could not be woken",
    stem:
      "A 78-year-old man is brought to the emergency department by ambulance because his wife could not wake him this morning. He has prostate cancer with painful bone metastases. His palliative care physician increased his fentanyl patch from 50 to 75 mcg/hour 3 days ago. Since yesterday he has had a cough and fever, and last night he slept under an electric blanket. He takes no other opioid. He groans to a sternal rub but does not open his eyes. His pupils are 1 mm. There are crackles at the right lung base. A 75 mcg/hour patch is on his chest, and a 50 mcg/hour patch dated 4 days ago is still on his back. Capillary glucose is 6.8 mmol/L.",
    vitals: { temperature: "38.4°C oral", pulse: "62/minute", resp: "6/minute", bp: "108/62 mmHg", o2sat: "85% on room air", weight: "61 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first naloxone dose while he is ventilated by bag and mask?",
        options: ["naloxone 0.04 mg IV", "naloxone 0.4 mg IV", "naloxone 0.8 mg IV", "naloxone 2 mg IV", "naloxone 4 mg IV"],
        correct: 0,
        explanation:
          "Coma, 1 mm pupils and a respiratory rate of 6/minute are the opioid toxidrome, from two patches and a fever with an electric blanket. He takes opioids every day for cancer pain, so a bolus can cause withdrawal and a crisis of refractory pain. Boland advises titrating 20 to 100 mcg IV every 2 minutes to breathing, not to full wakefulness, so 0.04 mg is right while bag and mask ventilation supports him. Doses of 0.4 mg to 4 mg IV are boluses 10 to 100 times larger than his first titrated step, and they risk that crisis.",
        keyFeature: { topic: "tox", n: 2 },
        source: "boland-naloxone",
      },
      {
        id: "q2",
        kind: "single",
        update: "After a total of 0.16 mg of naloxone over 8 minutes, his respiratory rate is 14/minute and he opens his eyes to voice. Both patches are removed.",
        prompt: "Which of the following complications is most likely over the next several hours?",
        options: [
          "Acute opioid withdrawal",
          "Naloxone-induced pulmonary edema",
          "Recurrent respiratory depression",
          "Seizures from naloxone",
          "Serotonin toxicity",
        ],
        correct: 2,
        explanation:
          "Fentanyl forms a depot in the skin, so absorption continues after the patches are removed and serum levels fall slowly, with a mean half-life of about 20 hours. The half-life of naloxone is only 30 to 81 minutes, so sedation and slow breathing are likely to return, and repeated naloxone may be needed. Small titrated doses restored his breathing without a large reversal, which makes withdrawal unlikely. Pulmonary edema and seizures are rare effects of naloxone and not the expected course here. He takes no serotonergic drug, so serotonin toxicity is not expected.",
        keyFeature: { topic: "tox", n: 5 },
        source: "sandoz-fentanyl",
      },
      {
        id: "q3",
        kind: "single",
        update: "Thirty minutes later he is drowsy but rousable. He is on oxygen at 4 L/minute by nasal prongs, and his saturation is 96%.",
        prompt: "Which of the following tests best shows whether his breathing is adequate now?",
        options: ["Chest radiograph", "Peak expiratory flow", "Pulse oximetry trend", "Serum fentanyl concentration", "Venous blood gas for PCO2"],
        correct: 4,
        explanation:
          "On supplemental oxygen his saturation can stay at 96% while his breathing slows and carbon dioxide rises. Fu and colleagues showed that pulse oximetry detects hypoventilation reliably only on room air, so the oximetry trend can mislead here. A PCO2 from a blood gas shows whether he is ventilating enough and whether he needs more naloxone. A chest radiograph assesses his right basal crackles, not his ventilation. Peak flow needs full effort and measures airway obstruction. A fentanyl concentration does not return in time to guide his care.",
        keyFeature: { topic: "tox", n: 7 },
        source: "fu-oximetry",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following are the most appropriate parts of his care over the next 24 hours?",
        options: [
          "Activated charcoal 50 g PO",
          "Apply a 25 mcg/hour patch today",
          "Discharge after 4 hours of observation",
          "Flumazenil 0.2 mg IV if drowsiness persists",
          "Hold further patches pending palliative review",
          "Monitored admission for at least 24 hours",
          "Naloxone infusion if sedation recurs",
        ],
        select: 3,
        correct: [4, 5, 6],
        explanation:
          "Serum fentanyl falls by only about half in the 20 to 27 hours after removal, so he needs a monitored bed for at least 24 hours. If sedation returns, repeated doses or an infusion of naloxone cover the gap left by its short half-life. New patches wait until palliative care reviews his dose, because the skin depot is still releasing drug and fever raises absorption. A new patch today, even at 25 mcg/hour, adds to that depot. Discharge at 4 hours comes before the risk has passed. Charcoal does nothing for a drug absorbed through skin. Flumazenil reverses benzodiazepines, not opioids.",
        keyFeature: { topic: "tox", n: 4 },
        source: "sandoz-fentanyl",
      },
    ],
    sources: [S.boland, S.sandozFentanyl, S.fuOximetry],
    ...META,
    reviewed: false,
    version: 3,
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
        source: "goldfrank-toxic-alcohols",
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
    sources: [S.extripMet, S.gfToxAlc],
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
        source: "aact-mdac",
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
        source: "goldfrank-antiepileptics",
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
        source: "extrip-carbamazepine",
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
    sources: [S.extripCbz, S.aacMdac, S.gfAntiepileptics],
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
        source: "goldfrank-ch4",
      },
    ],
    sources: [S.slaughter, S.gfCh4],
    ...META,
  },

  /* 23 Hand sanitizer ethanol in a toddler ------------------------------ */
  {
    id: "tox-23",
    topic: "tox",
    alsoTopics: ["pediatric-fever"],
    title: "Sleepy toddler after a play date",
    stem:
      "A 2-year-old girl is brought to the emergency department by her father 2 hours after he found her with an open bottle of hand sanitizer containing 70% ethanol. The bottle had tipped over, so how much she swallowed is unknown. She has not eaten since breakfast 6 hours ago. She is sleepy but rouses to voice, and she is unsteady when helped to stand. Her breath smells of alcohol. Her pupils are 4 mm and reactive, and there is no sign of injury. Capillary glucose is 2.2 mmol/L.",
    vitals: { temperature: "35.8°C rectal", pulse: "128/minute", resp: "20/minute", bp: "90/56 mmHg", o2sat: "97% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for her?",
        options: [
          "activated charcoal 12 g PO",
          "dextrose 10% 60 mL IV",
          "flumazenil 0.12 mg IV",
          "fomepizole 180 mg IV",
          "naloxone 1.2 mg IV",
        ],
        correct: 1,
        explanation:
          "Her glucose of 2.2 mmol/L needs treatment now. TREKK advises D10W 5 mL/kg IV for a glucose of 2.6 mmol/L or less, which is 5 x 12 = 60 mL, with a recheck in 5 to 10 minutes. Ethanol is absorbed quickly and is not bound well by charcoal, which also adds a risk of aspiration in a drowsy child. Fomepizole blocks the metabolism of toxic alcohols and would slow the clearance of ethanol. She has no sign of opioid or benzodiazepine exposure, so naloxone and flumazenil have no role.",
        keyFeature: { topic: "tox", n: 4 },
        source: "trekk-ge",
      },
      {
        id: "q2",
        kind: "single",
        update: "Her glucose rises to 6.1 mmol/L, but 1 hour later it is 2.9 mmol/L again and she is harder to rouse.",
        prompt: "Which of the following is the most appropriate treatment now?",
        options: [
          "Continuous dextrose infusion",
          "glucagon 0.5 mg IM",
          "hydrocortisone 50 mg IV",
          "octreotide 12 mcg SC",
          "Repeat bolus, then observe",
        ],
        correct: 0,
        explanation:
          "Ethanol blocks gluconeogenesis, and young children have small glycogen stores, so her glucose will keep falling while ethanol remains. She needs a repeat bolus followed by a continuous dextrose infusion with frequent checks, not a bolus alone. Glucagon works by releasing liver glycogen, which she has little of. Octreotide blocks insulin release after a sulfonylurea, and this hypoglycemia is not driven by insulin. Nothing suggests adrenal insufficiency, so hydrocortisone is not indicated.",
        keyFeature: { topic: "tox", n: 4 },
        source: "rayar",
      },
      {
        id: "q3",
        kind: "single",
        update: "Sodium 138 mmol/L, glucose 6.0 mmol/L, urea 4.0 mmol/L, measured osmolality 327 mmol/kg and serum ethanol 32 mmol/L.",
        prompt: "Which of the following best explains the size of her osmolal gap?",
        options: [
          "Diabetic ketoacidosis",
          "Ethanol explains the whole gap",
          "Hidden methanol ingestion",
          "Isopropanol from another product",
          "Laboratory measurement error",
        ],
        correct: 1,
        explanation:
          "Her calculated osmolality is 2 x 138 + 6.0 + 4.0 = 286 mmol/kg, so the osmolal gap is 327 - 286 = 41. Purssell and colleagues showed that ethanol raises osmolality by its concentration in mg/dL divided by 3.7, which is about 1.25 times the ethanol in mmol/L, so 32 x 1.25 = 40. Ethanol explains the whole gap, leaving no sign of a second toxic alcohol. Her glucose of 6.0 mmol/L excludes diabetic ketoacidosis. A laboratory error is not needed to explain a gap that ethanol accounts for.",
        keyFeature: { topic: "tox", n: 3 },
        source: "purssell",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next several hours?",
        options: [
          "Acute liver failure",
          "Delayed kidney injury",
          "Respiratory depression",
          "Serotonin toxicity",
          "Visual loss from formate",
        ],
        correct: 2,
        explanation:
          "In the national review of hand sanitizer ingestions by children, serious effects were rare but included coma, seizures, hypoglycemia, metabolic acidosis and respiratory depression. She is already drowsy, so her breathing and airway need close watching as ethanol peaks. Formate causes visual loss after methanol, not ethanol. Ethanol does not cause acute liver failure or delayed kidney injury in a single ingestion. Nothing she took is serotonergic.",
        keyFeature: { topic: "tox", n: 5 },
        source: "santos",
      },
    ],
    sources: [S.trekkGe, S.rayar, S.purssell, S.santos],
    ...META,
    version: 2,
  },

  /* 24 Baclofen accumulation in kidney disease -------------------------- */
  {
    id: "tox-24",
    topic: "tox",
    alsoTopics: ["loc"],
    title: "Older woman drowsy for two days",
    stem:
      "A 71-year-old woman is brought to the emergency department by her daughter, who found her increasingly drowsy over 2 days. She has chronic kidney disease with a creatinine of 290 umol/L last month, hypertension and osteoarthritis. Her daughter lists her usual medications as amlodipine, calcium carbonate and acetaminophen. Five days ago she saw a walk-in clinic for back spasms, and her daughter does not know what was prescribed. She responds only to pain. Her pupils are 3 mm and reactive. There is no focal deficit and her neck is supple. Capillary glucose is 6.4 mmol/L.",
    vitals: { temperature: "35.4°C rectal", pulse: "48/minute", resp: "12/minute", bp: "104/60 mmHg", o2sat: "95% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following sources of collateral information is most useful now?",
        options: [
          "Hospital chart from last year",
          "Neighbour who visits weekly",
          "Pharmacy dispensing record",
          "Previous discharge summary",
          "Provincial vaccine record",
        ],
        correct: 2,
        explanation:
          "The drug most likely to explain her drowsiness is whatever the walk-in clinic prescribed 5 days ago, and the pharmacy dispensing record shows it directly, with the dose and date. A hospital chart and a discharge summary from before this visit cannot list a new prescription. A neighbour who visits weekly is unlikely to know it. Her vaccine record does not help.",
        keyFeature: { topic: "tox", n: 1 },
        source: "extrip-baclofen",
      },
      {
        id: "q2",
        kind: "single",
        update: "The pharmacy reports baclofen 10 mg three times daily, dispensed 5 days ago.",
        prompt: "Which of the following is the most appropriate management of her decreased consciousness?",
        options: [
          "Activated charcoal 50 g PO",
          "Flumazenil 0.2 mg IV",
          "Naloxone 0.4 mg IV",
          "Physostigmine 1 mg IV",
          "Supportive care only",
        ],
        correct: 4,
        explanation:
          "Baclofen is cleared by the kidney, and at her creatinine of 290 umol/L it has built up from ordinary doses. EXTRIP describes standard care as stopping baclofen, supporting breathing and treating seizures, because there is no antidote. Naloxone and flumazenil reverse opioids and benzodiazepines, not baclofen. Physostigmine is for anticholinergic toxicity. Charcoal does not help toxicity from doses taken over days and risks aspiration in a patient who responds only to pain.",
        keyFeature: { topic: "tox", n: 2 },
        source: "extrip-baclofen",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated over the next 24 hours?",
        options: [
          "Acute liver failure",
          "Malignant hyperthermia",
          "Respiratory depression",
          "Serotonin toxicity",
          "Severe hypoglycemia",
        ],
        correct: 2,
        explanation:
          "EXTRIP lists respiratory depression, seizures, coma, bradycardia and hypothermia in severe baclofen toxicity, and she already has a pulse of 48/minute and a temperature of 35.4°C. Her respiratory rate of 12/minute needs close watching. Baclofen causes low rather than high temperature. It does not injure the liver, lower glucose or cause serotonin toxicity.",
        keyFeature: { topic: "tox", n: 5 },
        source: "extrip-baclofen",
      },
      {
        id: "q4",
        kind: "single",
        update: "Six hours later her GCS is 7 and she is intubated. Her creatinine is 296 umol/L.",
        prompt: "Which of the following treatments is most likely to shorten her illness?",
        options: [
          "Hemodialysis",
          "Multiple-dose charcoal",
          "Naloxone infusion",
          "Physostigmine infusion",
          "Urinary alkalinization",
        ],
        correct: 0,
        explanation:
          "EXTRIP suggests extracorporeal treatment for toxicity from therapeutic baclofen in kidney impairment, especially with coma needing ventilation, because baclofen is dialyzable when the kidneys fail and dialysis can shorten the encephalopathy. Multiple-dose charcoal and urinary alkalinization do not remove baclofen. Naloxone and physostigmine infusions treat other poisonings.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-baclofen",
      },
    ],
    sources: [S.extripBaclofen],
    ...META,
    version: 2,
  },

  /* 25 Sustained-release lithium overdose ------------------------------- */
  {
    id: "tox-25",
    topic: "tox",
    alsoTopics: ["suicide-risk"],
    title: "Tablets swallowed after an argument",
    stem:
      "A 26-year-old woman with bipolar disorder presents to the emergency department 2 hours after swallowing 40 of her lithium carbonate sustained-release 300 mg tablets, 12 g in total, after an argument. She takes lithium 900 mg daily and her kidney function has been normal. She has vomited once. She is alert and oriented, with a fine tremor and no clonus. Creatinine 68 umol/L and sodium 139 mmol/L. The ECG is normal. The first lithium level is pending.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "122/74 mmHg", o2sat: "99% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following complications is she at greatest risk of over the next day?",
        options: [
          "Acute liver failure",
          "Delayed neurotoxicity",
          "Esophageal stricture in weeks",
          "Pulmonary edema",
          "Severe hypoglycemia",
        ],
        correct: 1,
        explanation:
          "Sustained-release tablets keep releasing lithium for hours, so her level can keep rising after a reassuring first examination, and neurotoxicity with confusion or seizures can appear late. EXTRIP bases its dialysis advice on decreased consciousness, seizures and dysrhythmias because these are the dangerous effects. Lithium does not cause liver failure, hypoglycemia or pulmonary edema in overdose. Esophageal strictures follow caustic ingestions.",
        keyFeature: { topic: "tox", n: 5 },
        source: "extrip-lithium",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following decontamination measures is most appropriate for her now?",
        options: [
          "Activated charcoal 50 g PO",
          "Forced diuresis with furosemide",
          "Gastric lavage",
          "Multiple-dose activated charcoal",
          "Urinary alkalinization",
          "Whole bowel irrigation",
          "None",
        ],
        select: 1,
        correct: [5],
        explanation:
          "The position paper on whole bowel irrigation lists substantial lithium ingestions and sustained-release products as situations where it may be considered, and she is alert, protecting her airway and has no sign of obstruction. Charcoal, single or repeated, does not bind lithium. Gastric lavage cannot remove intact sustained-release tablets reliably and adds risk. Furosemide lowers lithium clearance by causing volume loss, and alkalinization does not speed its removal. Doing nothing leaves tablets releasing lithium for hours.",
        keyFeature: { topic: "tox", n: 6 },
        source: "thanacoody",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her first lithium level, drawn 2 hours after the ingestion, is 1.9 mmol/L.",
        prompt: "Which of the following is the most appropriate plan for measuring her lithium over the next day?",
        options: [
          "Daily level until discharge",
          "Repeat levels until clearly falling",
          "Single repeat level at 12 hours",
          "Urine drug screen with next level",
          "No repeat unless she becomes unwell",
        ],
        correct: 1,
        explanation:
          "Sustained-release tablets keep releasing lithium for many hours, so a level drawn 2 hours after the ingestion can be far below the peak. EXTRIP notes that absorption after an acute ingestion of a sustained-release product can be delayed, so levels are repeated until they are clearly falling. A single level at 12 hours or once a day can miss a rising level. Waiting for symptoms is unsafe because neurotoxicity lags behind the serum level. A urine drug screen does not measure lithium and rarely changes management.",
        keyFeature: { topic: "tox", n: 7 },
        source: "extrip-lithium",
      },
      {
        id: "q4",
        kind: "single",
        update: "Whole bowel irrigation is completed. At 12 hours she is alert, with a fine tremor and no confusion. Her lithium level is 2.2 mmol/L, down from 2.6 mmol/L at 8 hours, and her creatinine is 70 umol/L.",
        prompt: "Which of the following is the most appropriate next step in her care?",
        options: [
          "Activated charcoal 50 g PO",
          "Furosemide 40 mg IV",
          "Hemodialysis now",
          "IV saline and repeat levels",
          "Sodium bicarbonate infusion",
        ],
        correct: 3,
        explanation:
          "EXTRIP recommends extracorporeal treatment for a level above 4.0 mmol/L with impaired kidney function, or for decreased consciousness, seizures or dysrhythmias. It suggests it for a level above 5.0 mmol/L, significant confusion, or an expected time above 36 hours to fall below 1.0 mmol/L. She meets none of these. Her creatinine is normal, and the fall from 2.6 to 2.2 mmol/L in 4 hours gives a half-life of about 17 hours, so she should be below 1.0 mmol/L in about 19 hours. Isotonic saline keeps her kidneys clearing lithium while levels are repeated. Hemodialysis adds risk without benefit now. Furosemide lowers lithium clearance, charcoal does not bind lithium and bicarbonate does not remove it.",
        keyFeature: { topic: "tox", n: 6 },
        source: "extrip-lithium",
      },
    ],
    sources: [S.extripLithium, S.thanacoody],
    ...META,
    version: 2,
  },

  /* 26 Long-acting anticoagulant rodenticide ------------------------------- */
  {
    id: "tox-26",
    topic: "tox",
    title: "A box from the garage",
    stem:
      "A 46-year-old man is brought to the emergency department by his sister 3 hours after he told her he had eaten a whole box of rodent bait blocks from his garage because he wanted to die. She brought the empty box. The label lists brodifacoum 0.005% and a net weight of 200 g. He says he took nothing else. He takes no medications and has no bleeding or bruising. He is alert and calm, and his examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "128/78 mmHg", o2sat: "98% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following tests will best guide the management of his ingestion?",
        options: ["INR now and at 48 to 72 hours", "Platelet count and fibrinogen", "Serum brodifacoum level", "Single INR at 6 hours", "Urine drug screen"],
        correct: 0,
        explanation:
          "The box held about 10 mg of brodifacoum (200 g x 0.005%), a long-acting anticoagulant that blocks the recycling of vitamin K. Clotting factors already in the blood keep working for a day or more, so an early INR is often normal. The AAPCC consensus guideline times the check for coagulopathy at 48 to 72 hours after an ingestion of 1 mg or more of active ingredient, and a baseline INR now gives a comparison. A single INR at 6 hours is too early to exclude a coagulopathy. Brodifacoum levels are not available in time to guide early care. Platelets and fibrinogen are not affected by this poison. A urine drug screen does not detect it.",
        keyFeature: { topic: "tox", n: 7 },
        source: "aapcc-laar",
      },
      {
        id: "q2",
        kind: "single",
        update: "His INR on arrival is 1.0. The psychiatry team will assess him. A resident suggests giving vitamin K before he is moved to the observation unit.",
        prompt: "Which of the following is the most appropriate approach to vitamin K for him now?",
        options: ["Frozen plasma 15 mL/kg IV", "IV vitamin K1 10 mg now", "Oral vitamin K1 10 mg now", "Prothrombin complex concentrate", "No vitamin K until the INR rises"],
        correct: 4,
        explanation:
          "The AAPCC consensus guideline advises against giving vitamin K before the patient has been evaluated for coagulopathy. A single early dose can hold the INR down for a short time and hide a coagulopathy until after the planned check, while it cannot cover a poison that lasts for weeks. So vitamin K is withheld, and the INR is repeated at 48 to 72 hours. Oral and IV vitamin K1 now are both prophylactic doses of this kind. Frozen plasma and prothrombin complex concentrate replace clotting factors for bleeding, and he has a normal INR and no bleeding.",
        keyFeature: { topic: "tox", n: 2 },
        source: "aapcc-laar",
      },
      {
        id: "q3",
        kind: "single",
        update: "At 60 hours after the ingestion his INR is 6.8. He has no bleeding or bruising.",
        prompt: "Which of the following is the most appropriate treatment for his raised INR?",
        options: ["Frozen plasma 15 mL/kg IV", "Oral vitamin K1 in high daily doses", "Prothrombin complex concentrate", "Recheck INR in 1 week", "Single IV vitamin K1 10 mg dose"],
        correct: 1,
        explanation:
          "Brodifacoum stays in the body for weeks, so a raised INR without bleeding is treated with high-dose oral vitamin K1 every day, adjusted to the INR. In two reported large ingestions, patients needed 100 mg daily for 3 and 6 months. A single IV dose of 10 mg lowers the INR for only a day or two, and the coagulopathy then returns. Prothrombin complex concentrate and plasma give short-lived clotting factors and are kept for bleeding, which he does not have. Waiting a week leaves an INR of 6.8 untreated.",
        keyFeature: { topic: "tox", n: 4 },
        source: "gunja-brodifacoum",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following complications is most likely if his vitamin K is stopped when his INR first returns to normal?",
        options: ["Acute liver injury", "Delayed seizures", "Hypercalcemia", "Recurrent coagulopathy", "Venous thrombosis"],
        correct: 3,
        explanation:
          "Brodifacoum is cleared slowly, with elimination half-lives of 15 and 33 days in two reported patients. A normal INR on vitamin K shows only that the vitamin is overcoming the poison for now. If vitamin K is stopped too early the INR rises again and he can bleed. So treatment continues for weeks to months, and the INR is checked after it stops. Delayed seizures follow bromethalin, a different rodenticide. Hypercalcemia follows cholecalciferol rodenticides. Brodifacoum does not injure the liver, and stopping vitamin K does not cause thrombosis.",
        keyFeature: { topic: "tox", n: 5 },
        source: "gunja-brodifacoum",
      },
    ],
    sources: [S.aapccLaar, S.gunja],
    ...META,
  },

  /* 27 Hydrogen sulfide in a manure pit ----------------------------------- */
  {
    id: "tox-27",
    topic: "tox",
    alsoTopics: ["environmental"],
    title: "Farm worker pulled from a pit",
    stem:
      "You are working in a rural hospital emergency department. A 38-year-old man who works on a dairy farm is brought to the emergency department by ambulance after he collapsed inside an enclosed liquid manure pit. He had climbed down to free a blocked pump shortly after the manure was stirred. A coworker who went in after him also collapsed. Firefighters wearing breathing apparatus pulled both men out after about 10 minutes. A second coworker at the top of the pit noticed a rotten egg smell that faded within a few minutes. He was unresponsive at the scene. Now, 50 minutes after rescue, he is drowsy but opens his eyes to voice. His eyes are red and painful, and he has a cough with crackles at both lung bases. Carboxyhemoglobin is 1.2% and lactate is 4.1 mmol/L.",
    vitals: { temperature: "36.4°C oral", pulse: "112/minute", resp: "26/minute", bp: "128/76 mmHg", o2sat: "92% on 15 L/minute by non-rebreather mask", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his collapse in the pit?",
        options: ["Ammonia inhalation", "Carbon monoxide poisoning", "Chlorine gas inhalation", "Hydrogen sulfide poisoning", "Methane asphyxiation"],
        correct: 3,
        explanation:
          "A sudden collapse in a confined space, with a rescuer struck down as well, fits the knockdown of hydrogen sulfide, which often claims would-be rescuers. The rotten egg smell that faded is typical, because higher concentrations paralyze the sense of smell. His red, painful eyes and cough fit its irritant effects. A carboxyhemoglobin of 1.2% excludes significant carbon monoxide poisoning. Methane has no smell. Ammonia and chlorine have sharp, pungent odours rather than a smell of rotten eggs.",
        keyFeature: { topic: "tox", n: 2 },
        source: "ng-h2s",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for his poisoning now?",
        options: ["hydroxocobalamin 5 g IV", "hyperbaric oxygen", "methylene blue 1 mg/kg IV", "oxygen and supportive care", "sodium nitrite 300 mg IV"],
        correct: 3,
        explanation:
          "There is no proven antidote for hydrogen sulfide, so treatment is oxygen with support of breathing and circulation once he is out of the exposure. Sulfide is cleared quickly after exposure ends, which fits his improvement since rescue. The ATSDR supports nitrite only if it can be started shortly after exposure, and it is now 50 minutes later. The methemoglobin it creates would also reduce oxygen carriage when his saturation is only 92% on high flow oxygen. Hydroxocobalamin and methylene blue remain under study, mainly in animals, for this poison. Hyperbaric oxygen is controversial and rests on anecdotal reports.",
        keyFeature: { topic: "tox", n: 2 },
        source: "atsdr-h2s",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate disposition for him?",
        options: ["Admit for monitoring for 24 hours", "Discharge after 4 to 6 hours if well", "Discharge once saturation is normal", "Discharge with next day follow-up", "Observe 2 hours, then discharge"],
        correct: 0,
        explanation:
          "He had a serious inhalation exposure, with loss of consciousness, eye irritation, cough and crackles. Pulmonary edema after hydrogen sulfide can be delayed in onset, so the ATSDR advises monitoring seriously exposed patients for 24 hours. Discharge after 4 to 6 hours is reserved for patients with no symptoms, no eye irritation and no lung or nervous system effects, and he has all of these problems. A normal saturation or a 2 hour observation does not exclude delayed pulmonary edema, and next day follow-up leaves him unmonitored overnight.",
        keyFeature: { topic: "tox", n: 5 },
        source: "atsdr-h2s",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following investigations is most useful in guiding his care now?",
        options: ["Blood sulfide level", "Chest radiograph", "Serum cyanide level", "Urine drug screen", "Urine thiosulfate level"],
        correct: 1,
        explanation:
          "Crackles, cough and a saturation of 92% on high flow oxygen raise concern for pulmonary edema or aspiration, and a chest radiograph can show either and guide his oxygen and ventilation. The ATSDR notes that specific tests for hydrogen sulfide in blood and urine generally are not useful to the doctor, so a blood sulfide or urine thiosulfate level will not change his care. No fire or cyanide source was involved, so a cyanide level is not indicated. A urine drug screen does not explain a collapse in a manure pit.",
        keyFeature: { topic: "tox", n: 7 },
        source: "atsdr-h2s",
      },
    ],
    sources: [S.ng, S.atsdrH2s],
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
        source: "goldfrank-methylxanthines",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following investigations should be ordered for her at this point?",
        options: [
          "Head CT without contrast",
          "Portable chest radiograph",
          "Repeat theophylline concentration",
          "Serum acetaminophen level",
          "Serum magnesium and potassium",
          "Twelve lead ECG",
          "Urine drug screen",
          "Venous blood gas with lactate",
        ],
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
    sources: [S.extripTheo, S.gfMethylxanthines],
    ...META,
    reviewed: false,
    version: 2,
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
        options: ["Abdominal ultrasound", "Arterial blood gas sampling", "Bronchoscopy for aspiration", "Chest radiograph now and at 6 hours", "Serum hydrocarbon concentration"],
        correct: 3,
        explanation:
          "He already has crackles and a saturation of 93% on room air, so he needs a chest radiograph now. Radiographic changes after hydrocarbon aspiration lag behind symptoms, so an early film can be normal. It is repeated at about 6 hours to show the infiltrate that guides admission and oxygen therapy. Hydrocarbon concentrations are not available or useful. Bronchoscopy is for a retained foreign body rather than aspirated oil. Abdominal ultrasound does not assess the lungs, and an arterial sample adds pain without adding to pulse oximetry here.",
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

  /* 35 Toddler buprenorphine exposure ---------------------------------- */
  {
    id: "tox-35",
    topic: "tox",
    alsoTopics: ["loc"],
    title: "Hard to wake after a nap",
    stem:
      "A 22-month-old boy is brought to the emergency department by his mother because he is hard to wake from a nap. About 3 hours ago he was playing in the room of his uncle, who is staying with the family and takes buprenorphine-naloxone for opioid use disorder. An opened blister card of the uncle's 8 mg sublingual tablets was found on the floor with one tablet missing. The boy has no medical history. He rouses briefly to a firm sternal rub, then falls back to sleep. His pupils are 1 mm. There is no sign of injury. Capillary glucose is 5.4 mmol/L. A urine opiate immunoassay sent from triage is negative.",
    vitals: { temperature: "36.6°C rectal", pulse: "98/minute", resp: "10/minute", bp: "86/54 mmHg", o2sat: "90% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains his negative urine opiate immunoassay?",
        options: [
          "Assay does not detect buprenorphine",
          "Exposure too recent to reach urine",
          "Naloxone in the tablet blocks the assay",
          "No buprenorphine was swallowed",
          "Urine too dilute for detection",
        ],
        correct: 0,
        explanation:
          "Standard opiate immunoassays are built to detect morphine and codeine. Moeller and colleagues note that buprenorphine, like fentanyl and methadone, differs enough in structure that it is often missed, so a negative screen is expected and does not rule out exposure. His 1 mm pupils, slow breathing and a missing tablet are enough to act on. Timing and a dilute sample do not matter for a drug the assay is not designed to find. The naloxone in the tablet does not interfere with the assay.",
        keyFeature: { topic: "tox", n: 7 },
        source: "moeller-uds",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following drugs is most appropriate while his breathing is supported by bag and mask?",
        options: ["Activated charcoal PO", "Atropine IV", "Flumazenil IV", "Naloxone IV", "Physostigmine IV"],
        correct: 3,
        explanation:
          "Drowsiness, 1 mm pupils and a respiratory rate of 10/minute with a saturation of 90% are the opioid toxidrome. He is not opioid dependent, so naloxone carries no risk of withdrawal, and Toce and colleagues gave it to 55% of young children exposed to buprenorphine. Flumazenil reverses benzodiazepines and can provoke seizures. Physostigmine treats anticholinergic toxicity, which causes large pupils. Atropine treats bradycardia, and his pulse is 98/minute. Charcoal in a child who cannot protect his airway risks aspiration.",
        keyFeature: { topic: "tox", n: 2 },
        source: "toce-buprenorphine",
      },
      {
        id: "q3",
        kind: "single",
        update: "He wakes after two doses of naloxone 0.3 mg IV, a total of 0.6 mg, and breathes 24/minute. It is now 4 hours since he was found.",
        prompt: "Which of the following is the most appropriate plan for his observation?",
        options: [
          "Admit with overnight monitoring",
          "Discharge 1 hour after he wakes",
          "Discharge 2 hours after naloxone",
          "Discharge with a naloxone kit now",
          "Observe 6 hours, then discharge",
        ],
        correct: 0,
        explanation:
          "Buprenorphine acts for many hours and outlasts naloxone. In the series by Toce and colleagues, respiratory depression began a median of 263 minutes after exposure, some children first developed it more than 8 hours after exposure, 41% went to intensive care and the median stay was 22 hours. He has already needed naloxone, so he needs a monitored bed overnight. Discharge 1 or 2 hours after waking or after naloxone ignores how short its effect is. Six hours of observation can miss late respiratory depression. A naloxone kit does not replace monitoring.",
        keyFeature: { topic: "tox", n: 5 },
        source: "toce-buprenorphine",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "Three hours after his last naloxone dose his breathing slows to 8/minute and his saturation falls to 89%. A repeat bolus of 0.6 mg IV restores his breathing, and a naloxone infusion of 0.4 mg/hour is started. Twelve hours later he is awake, drinking and breathing 24/minute on the infusion.",
        prompt: "Which of the following is the most appropriate plan for his naloxone infusion?",
        options: [
          "Continue 0.4 mg/hour for another 24 hours",
          "Stop it and discharge him 1 hour later",
          "Stop it now and discharge him home",
          "Switch to naloxone 0.4 mg IM every 4 hours",
          "Wean in 50% steps, then watch 4 to 6 hours",
        ],
        correct: 4,
        explanation:
          "He has been stable for 12 hours, but buprenorphine may still be acting, so the infusion is reduced rather than simply stopped. The Atlantic Canada Poison Centre advises weaning an infusion in 50% decrements, watching for recurrence while it is weaned, and monitoring for 4 to 6 hours after it stops. Stopping it and discharging him now or 1 hour later ignores that naloxone may act for as little as 45 minutes. Intermittent IM doses leave gaps between doses in which his breathing can slow again. Keeping the full rate for a fixed 24 hours prolongs his stay without testing whether he still needs it.",
        keyFeature: { topic: "tox", n: 4 },
        source: "acpc-naloxone",
      },
    ],
    sources: [S.moeller, S.toce, S.acpcNaloxone],
    ...META,
    version: 4,
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
        source: "goldfrank-methemoglobin",
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
        source: "goldfrank-methemoglobin",
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
    sources: [S.cag, S.gfMetHb],
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
        source: "goldfrank-antipsychotics",
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
        source: "goldfrank-antipsychotics",
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
        source: "goldfrank-antipsychotics",
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
        source: "goldfrank-antipsychotics",
      },
    ],
    sources: [S.gfAntipsychotics],
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
        source: "goldfrank-ch3",
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
    sources: [S.penninga, S.cag, S.gfCh3],
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

  /* 40 Caustic alkali ingestion ------------------------------------------------ */
  {
    id: "tox-40",
    topic: "tox",
    title: "A drink from an unlabelled bottle",
    stem:
      "A 58-year-old man is brought to the emergency department 45 minutes after he swallowed a mouthful of liquid from an unlabelled bottle in a restaurant kitchen. The bottle held an industrial oven cleaner containing 10% sodium hydroxide. He swallowed it before he noticed the taste and vomited once. He has burning pain behind the sternum and in the epigastrium. His voice is normal and he is neither drooling nor stridulous. There are white patches on the palate and tongue. The chest is clear and the abdomen is soft. He takes no medications.",
    vitals: { temperature: "36.8°C oral", pulse: "104/minute", resp: "20/minute", bp: "138/82 mmHg", o2sat: "97% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for him?",
        options: ["activated charcoal 50 g PO", "dilution with 250 mL of milk", "gastric lavage by nasogastric tube", "intravenous analgesia and fluids", "neutralization with dilute vinegar"],
        correct: 3,
        explanation: "He is kept nil by mouth while his pain is treated, fluids are given and imaging is arranged, because nothing given by mouth can undo an alkali burn that is already made. Charcoal does not bind sodium hydroxide and it coats the mucosa, which obscures the later assessment of depth. Drinking milk or water can provoke vomiting and bring the alkali back across the esophagus a second time. A tube passed blindly into a burnt esophagus can perforate it. Adding an acid to neutralize the alkali releases heat and adds a thermal burn to the chemical one.",
        keyFeature: { topic: "tox", n: 4 },
        source: "caustic-nejm",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations best guides his management now?",
        options: ["Barium swallow study", "CT with intravenous contrast", "Plain chest radiograph", "Ultrasound of the neck", "Water soluble contrast swallow"],
        correct: 1,
        explanation: "CT after intravenous contrast shows how deep the burn goes, because a wall that still takes up contrast is alive and a wall that does not is necrotic, and that finding decides between conservative care and an operation. It also covers the mediastinum and peritoneum for free air or fluid. A plain chest film shows free air only once perforation has happened and is usually normal in the first hours. Barium and water soluble swallows outline the lumen but say nothing about the wall, and both risk spillage and aspiration. Ultrasound cannot see an esophagus surrounded by air.",
        keyFeature: { topic: "tox", n: 7 },
        source: "martino-2025",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications is most likely in the first 2 days?",
        options: ["Aspiration pneumonia with hypoxia", "Esophageal stricture at 3 weeks", "Methemoglobinemia", "Perforation with mediastinitis", "Squamous cell carcinoma"],
        correct: 3,
        explanation: "Alkali produces liquefactive necrosis that keeps eating into the wall over the first days, and a full thickness burn gives way, so perforation with mediastinitis or peritonitis is the early threat and the usual cause of early death. Strictures form later, as the burn heals and scars over weeks. Squamous carcinoma of the scarred esophagus appears decades afterwards. Methemoglobinemia follows oxidizing agents such as nitrites, which sodium hydroxide is not. His chest is clear with a saturation of 97% on room air, so aspiration is not the current problem.",
        keyFeature: { topic: "tox", n: 5 },
        source: "caustic-nejm",
      },
      {
        id: "q4",
        kind: "single",
        update: "Imaging shows a thickened distal esophagus and stomach with necrosis through the full thickness of the wall and blurred surrounding fat.",
        prompt: "Which of the following is the most appropriate management now?",
        options: ["Emergency surgical resection", "Nasogastric feeding tube placement", "Observation with repeat imaging in 24 hours", "Proton pump inhibitor infusion alone", "Systemic corticosteroids"],
        correct: 0,
        explanation: "On CT a wall that no longer takes up contrast, with blurred fat around it, marks necrosis through the full thickness, and dead esophagus and stomach do not recover, so resection is arranged without waiting. A repeat scan a day later simply records the perforation and sepsis that follow. A feeding tube pushed through a necrotic stomach can perforate it and does nothing for the necrosis. Acid suppression is used for the healing mucosa after the acute phase rather than as treatment for necrosis. Corticosteroids have not been shown to prevent stricture and can mask early signs of infection.",
        keyFeature: { topic: "tox", n: 4 },
        source: "martino-2025",
      },
    ],
    sources: [S.caustic, S.martino],
    ...META,
    version: 2,
  },

  /* 41 Warfarin over anticoagulation ------------------------------------------ */
  {
    id: "tox-41",
    topic: "tox",
    alsoTopics: ["infectious-diseases"],
    title: "Mouth sores and bruising at 76",
    stem:
      "A 76-year-old man is brought to the emergency department by his daughter with 5 days of painful mouth sores and trouble swallowing. He has had rheumatoid arthritis for 9 years and takes methotrexate 15 mg once weekly with folic acid. He has taken ramipril and pantoprazole for years. Two weeks ago his pharmacy began packing his pills in daily blister packs. He is tired and pale, with ulcers on the tongue, gums and inside of both cheeks, and bruises on both forearms. He has no cough, the chest is clear and there is no rash. Hemoglobin 94 g/L, white cells 1.2 x 10^9/L, neutrophils 0.2 x 10^9/L, platelets 31 x 10^9/L. Creatinine 148 umol/L, up from 82 umol/L 2 months ago. Potassium 4.6 mmol/L, ALT 58 U/L, bilirubin 14 umol/L.",
    vitals: { temperature: "37.4°C oral", pulse: "104/minute", resp: "18/minute", bp: "112/66 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate specific treatment for his methotrexate toxicity?",
        options: [
          "filgrastim 5 mcg/kg SC once daily",
          "folic acid 5 mg PO daily",
          "glucarpidase 50 units/kg IV",
          "leucovorin 15 mg IV every 6 hours",
          "methylprednisolone 1 g IV",
        ],
        correct: 3,
        explanation:
          "Mouth ulcers with neutrophils of 0.2 x 10^9/L and platelets of 31 x 10^9/L in a patient on methotrexate mean severe toxicity. Leucovorin is a reduced folate that reverses the folate block, and in the Bhargava trial 15 mg IV every 6 hours did as well as 25 mg. Folic acid must be activated by the enzyme that methotrexate blocks, so it cannot rescue him. Glucarpidase is used after high-dose methotrexate with renal failure, and levels after low-dose toxicity are generally too low for it to help. Filgrastim is often added but does not reverse the block. Methylprednisolone treats neither the block nor the low counts.",
        keyFeature: { topic: "tox", n: 4 },
        source: "bhargava-mtx",
      },
      {
        id: "q2",
        kind: "single",
        update: "His daughter brings the blister packs. For the past 2 weeks, every daily compartment has held six methotrexate 2.5 mg tablets.",
        prompt: "Which of the following best explains his toxicity on a regimen that was stable for years?",
        options: [
          "Folic acid taken with each dose",
          "Interaction with pantoprazole",
          "Interaction with ramipril",
          "Progressive rheumatoid disease",
          "Taking it daily, not weekly",
        ],
        correct: 4,
        explanation:
          "Six 2.5 mg tablets in every daily compartment is 15 mg a day, or 105 mg a week instead of 15 mg, a sevenfold overdose for 2 weeks. Mix-ups between daily and weekly dosing are a known cause of methotrexate toxicity, and his new daily blister packs made that error easy. His rising creatinine slows clearance and adds to the harm. Pantoprazole and ramipril have been part of his stable regimen for years, so neither explains a sudden change. Folic acid lowers the rate of adverse effects rather than causing them. Active arthritis does not cause mucositis and pancytopenia.",
        keyFeature: { topic: "tox", n: 3 },
        source: "pivovarov-mtx",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications poses the greatest threat to his life over the coming days?",
        options: [
          "Acute liver failure",
          "Hyperkalemic arrhythmia",
          "Intracranial hemorrhage",
          "Pulmonary fibrosis",
          "Sepsis from neutropenia",
        ],
        correct: 4,
        explanation:
          "With neutrophils of 0.2 x 10^9/L and ulcers that breach the lining of his mouth, infection is the main danger. In the Bhargava trial more than 4 in 10 patients with severe low-dose toxicity died within 30 days, most from severe sepsis and respiratory failure during ongoing cytopenia, so any fever is treated at once as neutropenic sepsis. Platelets of 31 x 10^9/L raise the bleeding risk, but sepsis drove the deaths. His potassium of 4.6 mmol/L is normal. An ALT of 58 U/L with a normal bilirubin does not suggest liver failure. He has no cough and his chest is clear.",
        keyFeature: { topic: "tox", n: 5 },
        source: "bhargava-mtx",
      },
      {
        id: "q4",
        kind: "single",
        update: "Leucovorin, IV fluids and filgrastim are started, and he is admitted.",
        prompt: "Which of the following tests best guides how long leucovorin is continued?",
        options: ["Blood folate level", "Bone marrow biopsy", "Daily blood counts", "Serum methotrexate level", "Urine drug screen"],
        correct: 2,
        explanation:
          "In the Bhargava trial leucovorin continued until the counts recovered, to white cells of at least 4 x 10^9/L and platelets of at least 100 x 10^9/L, or for 10 days, and every patient had daily blood counts. After low-dose toxicity a serum methotrexate level has no established role, because levels are generally low even when the marrow is failing. A folate level does not measure the block. A bone marrow biopsy is invasive and would not change the plan. A urine drug screen adds nothing when the drug is already known.",
        keyFeature: { topic: "tox", n: 7 },
        source: "bhargava-mtx",
      },
    ],
    sources: [S.bhargava, S.pivovarov],
    ...META,
    version: 2,
  },

  /* 42 Propylene glycol from a lorazepam infusion ------------------------------ */
  {
    id: "tox-42",
    topic: "tox",
    title: "A gap on the second hospital day",
    stem:
      "A 46-year-old man has been in the emergency department for 40 hours awaiting an intensive care bed. He was intubated for severe alcohol withdrawal and is sedated with a lorazepam infusion, now at 8 mg/hour. His last drink was 3 days ago and his blood ethanol on arrival was zero. He has no liver disease and his creatinine on arrival was 80 umol/L. He has received no other new drug. This morning he is harder to keep sedated. Na 142 mmol/L, K 4.2 mmol/L, Cl 101 mmol/L, HCO3 15 mmol/L, urea 6.0 mmol/L, creatinine 96 umol/L, glucose 6.0 mmol/L and lactate 3.8 mmol/L. Measured serum osmolality is 320 mmol/kg and venous pH is 7.26.",
    vitals: { temperature: "37.2°C core", pulse: "104/minute", resp: "18/minute", bp: "112/68 mmHg", o2sat: "98% on 40% inspired oxygen", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first step in his management?",
        options: ["fomepizole 15 mg/kg IV", "Hemodialysis without delay", "Increase the lorazepam rate", "sodium bicarbonate 100 mmol IV", "Stop the lorazepam infusion"],
        correct: 4,
        explanation: "The solvent that carries the lorazepam is being infused continuously, so the load stops only when the infusion stops, and sedation is carried instead by a drug without that carrier, such as phenobarbital or propofol. His acidosis and his gap then usually settle over a day or two. Raising the rate adds more of the same solvent. Bicarbonate lifts the pH while the cause keeps running. Fomepizole has been used in single reports and removes nothing already given. Dialysis clears the solvent well and is kept for acidosis or kidney failure that persists after the infusion is stopped.",
        keyFeature: { topic: "tox", n: 4 },
        source: "zar-2007",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most likely to change his treatment?",
        options: ["Computed tomography of the head", "Repeat osmolality after 12 hours", "Serum ammonia concentration", "Serum salicylate concentration", "Urine drug screen"],
        correct: 1,
        explanation: "At 8 mg/hour he has received 192 mg a day, about 2.5 mg/kg/day, well above the 1 mg/kg/day at which the osmolal gap is used to screen for solvent toxicity, and a gap of 12 or more predicts toxic effects. Repeating the osmolality after the infusion is stopped tells you whether the gap is closing, and a closing gap with a falling lactate and a stable creatinine means supportive care is enough, while a gap that stays open with worsening acidosis is the argument for dialysis. A head CT does not explain an anion gap acidosis in a sedated man with no focal signs. An ammonia level is for liver failure, and his liver is normal. A salicylate concentration and a urine screen look for ingestions he cannot have made while intubated and watched.",
        keyFeature: { topic: "tox", n: 7 },
        source: "yahwak-2008",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following complications should be anticipated in him?",
        options: ["Acute kidney injury with oliguria", "Hepatic failure with jaundice", "Hypocalcemia with tetany", "Retinal injury with blindness", "Rhabdomyolysis with a high creatine kinase"],
        correct: 0,
        explanation: "The solvent is partly cleared unchanged by the kidney, and accumulation injures the proximal tubule, so his creatinine, already up from 80 to 96 umol/L, and his urine output are followed closely. The picture can go on to look like sepsis, with hypotension and a rising lactate. Retinal injury and blindness follow methanol, which he has not taken. Hypocalcemia with tetany follows ethylene glycol, whose oxalate binds calcium. Liver failure is not a feature of this accumulation, and his liver was normal. He is sedated and still, so muscle breakdown has no cause here.",
        keyFeature: { topic: "tox", n: 5 },
        source: "zar-2007",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following best explains his raised osmolal gap?",
        options: ["Ethanol remaining from his last drinks", "Ethylene glycol co-ingestion", "Ketones from poor intake", "Propylene glycol from a drug solvent", "Uremia from kidney injury"],
        correct: 3,
        explanation: "Twice his sodium of 142 plus a glucose of 6.0 and a urea of 6.0 gives a calculated value of 296 mmol/kg, so the gap is 320 minus 296, that is 24 mmol/kg. Lorazepam for injection is dissolved in propylene glycol, and 8 mg/hour for 40 hours delivers a large solvent load that raises measured osmolality and is metabolized to lactate, part of it the D form that the usual assay does not report, which is why his anion gap of 26 mmol/L exceeds his measured lactate of 3.8 mmol/L. His ethanol was zero on arrival 40 hours ago. He has been intubated and watched since, so a fresh ingestion is not possible. Ketones add little to the gap. Urea is already in the calculation.",
        keyFeature: { topic: "tox", n: 3 },
        source: "zar-2007",
      },
    ],
    sources: [S.zar, S.yahwak],
    ...META,
    version: 2,
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
        source: "goldfrank-nicotine",
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
        source: "goldfrank-nicotine",
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
        source: "goldfrank-nicotine",
      },
    ],
    sources: [S.cag, S.gfNicotine],
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

  /* 47 Buprenorphine-precipitated withdrawal ---------------------------- */
  {
    id: "tox-47",
    topic: "tox",
    title: "Sick soon after a tablet from a friend",
    stem:
      "A 27-year-old man presents to the emergency department 50 minutes after taking a buprenorphine-naloxone 8 mg tablet under his tongue that a friend gave him. He smokes fentanyl every day and last used 5 hours ago. He wants to stop using and did not want to wait for a clinic appointment. Within 20 minutes he developed vomiting, diarrhea, cramps, sweating and severe restlessness. He takes no other medication and denies other drug use today. He is yawning, with a runny nose, gooseflesh, a coarse tremor and 7 mm pupils. Capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "37.2°C oral", pulse: "118/minute", resp: "20/minute", bp: "148/90 mmHg", o2sat: "99% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his condition 50 minutes after the tablet?",
        options: [
          "Anticholinergic toxicity",
          "Buprenorphine overdose",
          "Precipitated withdrawal",
          "Serotonin toxicity",
          "Sympathomimetic toxicity",
        ],
        correct: 2,
        explanation:
          "Buprenorphine binds opioid receptors tightly but activates them only partly, so taken 5 hours after fentanyl it displaced the fentanyl and set off withdrawal within minutes. His yawning, runny nose, gooseflesh, dilated pupils, tremor, restlessness, vomiting and diarrhea are the objective signs scored on the Clinical Opiate Withdrawal Scale. Overdose would cause sedation and small pupils. Anticholinergic toxicity dries the skin. Serotonin toxicity causes clonus. Sympathomimetic toxicity does not cause yawning, a runny nose or diarrhea.",
        keyFeature: { topic: "tox", n: 8 },
        source: "cows-scale",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for him now?",
        options: [
          "buprenorphine 8 mg SL",
          "clonidine 0.1 mg PO every hour",
          "haloperidol 5 mg IM",
          "lorazepam 2 mg IV",
          "naloxone 0.4 mg IV",
        ],
        correct: 0,
        explanation:
          "Oakley and colleagues treated precipitated withdrawal with more buprenorphine, giving repeated 8 mg doses up to 24 mg that day, because more of the partial agonist fills the receptors and relieves the withdrawal. Symptom relief alone with antiemetics or sedatives was not enough in their case. Clonidine eases some autonomic signs but not the withdrawal itself. Haloperidol and lorazepam sedate without treating the cause. Naloxone would deepen the withdrawal.",
        keyFeature: { topic: "tox", n: 4 },
        source: "oakley",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following findings best distinguishes his condition from sympathomimetic toxicity?",
        options: [
          "Dilated pupils",
          "Heart rate of 118/minute",
          "Profuse sweating",
          "Restlessness and agitation",
          "Yawning and gooseflesh",
        ],
        correct: 4,
        explanation:
          "Yawning and gooseflesh are items on the Clinical Opiate Withdrawal Scale that point to opioid withdrawal and are not features of stimulant toxicity. Dilated pupils, a fast pulse, sweating and restlessness occur in both conditions, so they do not separate them.",
        keyFeature: { topic: "tox", n: 2 },
        source: "cows-scale",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following outcomes is most strongly linked to withdrawal during a buprenorphine start?",
        options: [
          "Acute liver injury",
          "Discharge against advice",
          "Prolonged QT interval",
          "Respiratory arrest",
          "Seizures from withdrawal",
        ],
        correct: 1,
        explanation:
          "Thakrar and colleagues found precipitated withdrawal in about 1 in 6 people using fentanyl who started buprenorphine in hospital, and they note that withdrawal during initiation is linked to leaving hospital before medically advised and to poor retention in care. Controlling his withdrawal today helps keep him in treatment. Respiratory arrest, liver injury and QT prolongation are not outcomes the study linked to withdrawal, and opioid withdrawal does not cause seizures in adults.",
        keyFeature: { topic: "tox", n: 5 },
        source: "thakrar",
      },
    ],
    sources: [S.cows, S.oakley, S.thakrar],
    ...META,
    version: 2,
  },
];
