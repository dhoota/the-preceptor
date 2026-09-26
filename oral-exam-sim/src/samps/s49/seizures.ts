// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: false, author: "Draft for review by Arjan Dhoot, MD", version: 1 } as const;

const S = {
  ncs: { id: "ncs", citation: "Brophy GM, et al. Guidelines for the evaluation and management of status epilepticus. Neurocritical Care Society. Neurocrit Care. 2012." },
  trinka: { id: "trinka", citation: "Trinka E, Cock H, Hesdorffer D, et al. A definition and classification of status epilepticus. Report of the ILAE Task Force on Classification of Status Epilepticus. Epilepsia. 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26336950/" },
  esett: { id: "esett", citation: "Kapur J, et al. Randomized trial of three anticonvulsant medications for status epilepticus. N Engl J Med. 2019." },
  trekk: { id: "trekk", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Status epilepticus. Version 1.2. 2026.", url: "https://trekk.ca/resources/bottom-line-recommendations-status-epilepticus/" },
  cfpFs: { id: "cfp-fs", citation: "Gardner K, Schonfeld D, Willemsen MA, Ostrow O. Reducing unnecessary investigations in pediatric simple febrile and first-episode generalized unprovoked seizures. Can Fam Physician. 2025.", url: "https://www.cfp.ca/content/71/9/563" },
  aapFs: { id: "aap-fs", citation: "American Academy of Pediatrics, Subcommittee on Febrile Seizures. Clinical practice guideline. Neurodiagnostic evaluation of the child with a simple febrile seizure. Pediatrics. 2011." },
  aapFsLong: { id: "aap-fs-long", citation: "American Academy of Pediatrics, Steering Committee on Quality Improvement and Management, Subcommittee on Febrile Seizures. Febrile seizures. Clinical practice guideline for the long-term management of the child with simple febrile seizures. Pediatrics. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18519501/" },
  cpsMen: { id: "cps-men", citation: "Le Saux N. Canadian Paediatric Society, Infectious Diseases and Immunization Committee. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than one month of age. Paediatr Child Health. 2014.", url: "https://cps.ca/en/documents/position/management-of-bacterial-meningitis" },
  aanFirst: { id: "aan-first", citation: "Krumholz A, et al. Evidence-based guideline. Management of an unprovoked first seizure in adults. American Academy of Neurology and American Epilepsy Society. Neurology. 2015." },
  fisher: { id: "fisher", citation: "Fisher RS, Acevedo C, Arzimanoglou A, et al. ILAE official report. A practical clinical definition of epilepsy. Epilepsia. 2014." },
  cma: { id: "cma", citation: "Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Nervous system section.", url: "https://driversguide.ca/sections/nervous-system" },
  cmaCardio: { id: "cma-cardio", citation: "Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles. 10th edition. 2023. Cardiovascular diseases section.", url: "https://driversguide.ca/sections/cardiovascular-diseases" },
  aero: { id: "aero", citation: "Aeronautics Act, R.S.C. 1985, c. A-2, section 6.5 (Canada). Medical and optometric information. 1985, as amended.", url: "https://laws-lois.justice.gc.ca/eng/acts/A-2/section-6.5.html" },
  nice: { id: "nice", citation: "National Institute for Health and Care Excellence. Epilepsies in children, young people and adults. NICE guideline NG217. 2022.", url: "https://www.nice.org.uk/guidance/ng217" },
  gfAtypical: { id: "goldfrank-atypical-antidepressants", citation: "Stork CM. Serotonin reuptake inhibitors and atypical antidepressants. In: Nelson LS, Howland MA, Lewin NA, Smith SW, Goldfrank LR, Hoffman RS, editors. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw Hill. 2019. Chapter: Serotonin Reuptake Inhibitors and Atypical Antidepressants.", url: "https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2569&sectionid=210274776" },
  ecbcTca: { id: "ecbc-tca", citation: "Purssell R. Emergency Care BC. Clinical summary: tricyclic antidepressant overdose. Last reviewed 2018.", url: "https://emergencycarebc.ca/clinical_resource/clinical-summary/tricyclic-antidepressant-overdose-2/" },
  ahaTox: { id: "aha-tox-2023", citation: "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023.", url: "https://doi.org/10.1161/CIR.0000000000001161" },
  sogc: { id: "sogc", citation: "Magee LA, et al. Guideline No. 426. Hypertensive disorders of pregnancy. Diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022." },
  cvt: { id: "cvt", citation: "Field TS, Lindsay MP, Wein T, et al. Canadian Stroke Best Practice Recommendations, 7th edition. Cerebral venous thrombosis, 2024. Can J Neurol Sci. 2024.", url: "https://www.strokebestpractices.ca/recommendations/cerebral-venous-thrombosis" },
  csbpr: { id: "csbpr", citation: "Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations. Acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024.", url: "https://www.strokebestpractices.ca/recommendations/acute-stroke-management" },
  lafrance: { id: "lafrance", citation: "LaFrance WC Jr, Baker GA, Duncan R, Goldstein LH, Reuber M. Minimum requirements for the diagnosis of psychogenic nonepileptic seizures. A staged approach. A report from the International League Against Epilepsy Nonepileptic Seizures Task Force. Epilepsia. 2013.", url: "https://pubmed.ncbi.nlm.nih.gov/24111933/" },
  ncc: { id: "ncc", citation: "White AC Jr, Coyle CM, Rajshekhar V, et al. Diagnosis and treatment of neurocysticercosis. 2017 clinical practice guidelines by the Infectious Diseases Society of America and the American Society of Tropical Medicine and Hygiene. Clin Infect Dis. 2018.", url: "https://academic.oup.com/cid/article/66/8/e49/4885412" },
  aha: { id: "aha", citation: "American Heart Association. Part 9. Adult advanced life support. 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. Circulation. 2025.", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001376" },
  ccsSync: { id: "ccs-sync", citation: "Sheldon RS, Morillo CA, Krahn AD, et al. Standardized approaches to the investigation of syncope. Canadian Cardiovascular Society position paper. Can J Cardiol. 2011." },
  pennell: { id: "pennell", citation: "Pennell PB, Peng L, Newport DJ, et al. Lamotrigine in pregnancy. Clearance, therapeutic drug monitoring, and seizure frequency. Neurology. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18046009/" },
  pack: { id: "pack", citation: "Pack AM, Oskoui M, Williams Roberson S, et al. Teratogenesis, perinatal, and neurodevelopmental outcomes after in utero exposure to antiseizure medication. Practice guideline from the AAN, AES, and SMFM. Neurology. 2024." },
  sabers: { id: "sabers", citation: "Sabers A, Ohman I, Christensen J, Tomson T. Oral contraceptives reduce lamotrigine plasma levels. Neurology. 2003." },
  mancl: { id: "mancl", citation: "Mancl EE, Gidal BE. The effect of carbapenem antibiotics on plasma concentrations of valproic acid. Ann Pharmacother. 2009.", url: "https://doi.org/10.1345/aph.1m296" },
  payne: { id: "payne", citation: "Payne LE, Gagnon DJ, Riker RR, et al. Cefepime-induced neurotoxicity. A systematic review. Crit Care. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/29137682/" },
  fugate: { id: "fugate", citation: "Fugate JE, Rabinstein AA. Posterior reversible encephalopathy syndrome. Clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol. 2015." },
  dcHhs: { id: "dc-hhs", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Goguen J, Gilbert J. Hyperglycemic emergencies in adults. Can J Diabetes. 2018.", url: "https://pubmed.ncbi.nlm.nih.gov/29650082/" },
  hypoNa: { id: "hypo-na", citation: "Spasovski G, et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014." },
  eddleston: { id: "eddleston", citation: "Eddleston M, Buckley NA, Eyer P, Dawson AH. Management of acute organophosphorus pesticide poisoning. Lancet. 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/17706760/" },
  rose: { id: "rose", citation: "Rose JJ, Wang L, Xu Q, et al. Carbon monoxide poisoning. Pathogenesis, management, and future directions of therapy. Am J Respir Crit Care Med. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/27753502/" },
  ward: { id: "ward", citation: "Ward LM, Gaboury I, Ladhani M, Zlotkin S. Vitamin D-deficiency rickets among children in Canada. CMAJ. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17600035/" },
  chang: { id: "chang", citation: "Chang SM, Messersmith H, Ahluwalia M, et al. Anticonvulsant prophylaxis and steroid use in adults with metastatic brain tumors. ASCO and SNO endorsement of the Congress of Neurological Surgeons guidelines. J Clin Oncol. 2019." },
  btf: { id: "btf", citation: "Carney N, Totten AM, O'Reilly C, et al. Guidelines for the management of severe traumatic brain injury, fourth edition. Brain Trauma Foundation. Neurosurgery. 2017.", url: "https://braintrauma.org/coma/guidelines/severe-tbi" },
  starr: { id: "starr", citation: "Starr P, Klein-Schwartz W, Spiller H, et al. Incidence and onset of delayed seizures after overdoses of extended-release bupropion. Am J Emerg Med. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/19857406/" },
  bullock: { id: "bullock", citation: "Bullock MR, Chesnut R, Ghajar J, et al. Surgical management of acute epidural hematomas. Surgical Management of Traumatic Brain Injury Author Group. Neurosurgery. 2006.", url: "https://pubmed.ncbi.nlm.nih.gov/16710967/" },
  rosen88: { id: "rosen-ch88", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 88, Seizure.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosen169: { id: "rosen-ch169", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 169, Pediatric Neurologic Disorders.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosen174: { id: "rosen-ch174", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 174, Medical Emergencies During Pregnancy.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  ilaeCae: { id: "ilae-cae", citation: "International League Against Epilepsy. EpilepsyDiagnosis.org. Childhood absence epilepsy: overview and EEG. Last updated 2024.", url: "https://www.epilepsydiagnosis.org/syndrome/cae-eeg.html" },
  ilaeTemporal: { id: "ilae-temporal", citation: "International League Against Epilepsy. EpilepsyDiagnosis.org. Temporal lobe seizure. Last updated 2024.", url: "https://www.epilepsydiagnosis.org/seizure/temporal-overview.html" },
  acog723: { id: "acog-723", citation: "American College of Obstetricians and Gynecologists. Committee Opinion No. 723. Guidelines for diagnostic imaging during pregnancy and lactation. Obstet Gynecol. 2017.", url: "https://pubmed.ncbi.nlm.nih.gov/28937575/" },
  zyban: { id: "zyban", citation: "Bausch Health, Canada Inc. Product monograph. Zyban (bupropion hydrochloride extended-release tablets). Date of revision 1 June 2021.", url: "https://bauschhealth.ca/wp-content/uploads/2021/11/Zyban-PM-E-2021-06-01.pdf" },
  cigMeasles: { id: "cig-measles", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Measles vaccines. Updated 2025.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html" },
  cigContra: { id: "cig-contra", citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 2. Contraindications, precautions and concerns. Updated 2026.", url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-2-vaccine-safety/page-3-contraindications-precautions-concerns.html" },
  aes: { id: "aes", citation: "Glauser T, Shinnar S, Gloss D, et al. Evidence-based guideline. Treatment of convulsive status epilepticus in children and adults. Report of the Guideline Committee of the American Epilepsy Society. Epilepsy Curr. 2016.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4749120/" },
  idsa2017: { id: "idsa-2017", citation: "Tunkel AR, Hasbun R, Bhimraj A, et al. 2017 Infectious Diseases Society of America's clinical practice guidelines for healthcare-associated ventriculitis and meningitis. Clin Infect Dis. 2017.", url: "https://doi.org/10.1093/cid/ciw861" },
  trekkGe: { id: "trekk-ge", citation: "TREKK (Translating Emergency Knowledge for Kids). Bottom line recommendations. Gastroenteritis. Version 5.0. 2025.", url: "https://cms.trekk.ca/wp-content/uploads/2023/11/2025_10_14-TREKK-Gastroenteritis-BLR-v5.0_FinalDraft.pdf" },
  drolet: { id: "drolet", citation: "Drolet BA, Frommelt PC, Chamlin SL, et al. Initiation and use of propranolol for infantile hemangioma. Report of a consensus conference. Pediatrics. 2013.", url: "https://doi.org/10.1542/peds.2012-1691" },
  brigo: { id: "brigo", citation: "Brigo F, Nardone R, Bongiovanni LG. Value of tongue biting in the differential diagnosis between epileptic seizures and syncope. Seizure. 2012.", url: "https://doi.org/10.1016/j.seizure.2012.06.005" },
  ahmedMg: { id: "ahmed-mg", citation: "Ahmed F, Mohammed A. Magnesium. The forgotten electrolyte. A review on hypomagnesemia. Med Sci (Basel). 2019.", url: "https://doi.org/10.3390/medsci7040056" },
  benmassaoud: { id: "benmassaoud", citation: "Benmassaoud A, McDonald EG, Lee TC. Potential harms of proton pump inhibitor therapy. Rare adverse effects of commonly used drugs. CMAJ. 2016.", url: "https://doi.org/10.1503/cmaj.150570" },
  turner: { id: "turner", citation: "Turner J, Gittoes N, Selby P. Society for Endocrinology emergency endocrine guidance. Emergency management of acute hypocalcaemia in adult patients. Endocr Connect. 2016.", url: "https://doi.org/10.1530/EC-16-0056" },
  cannon: { id: "cannon", citation: "Cannon JP, Lee TA, Clark NM, Setlak P, Grim SA. The risk of seizures among the carbapenems. A meta-analysis. J Antimicrob Chemother. 2014.", url: "https://doi.org/10.1093/jac/dku111" },
  kumar: { id: "kumar", citation: "Kumar S. Epilepsia partialis continua stopped by insulin. J R Soc Med. 2004.", url: "https://doi.org/10.1177/014107680409700709" },
  harden: { id: "harden", citation: "Harden CL, Huff JS, Schwartz TH, et al. Reassessment. Neuroimaging in the emergency patient presenting with seizure. An evidence-based review. Report of the Therapeutics and Technology Assessment Subcommittee of the American Academy of Neurology. Neurology. 2007.", url: "https://doi.org/10.1212/01.wnl.0000285083.25882.0e" },
  charlier: { id: "charlier", citation: "Charlier B, Coglianese A, De Rosa F, et al. The effect of plasma protein binding on therapeutic drug monitoring of antiseizure medications. Pharmaceutics. 2021.", url: "https://doi.org/10.3390/pharmaceutics13081208" },
  yaleHypo: { id: "yale-hypo", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Yale JF, Paty B, Senior PA. Hypoglycemia. Can J Diabetes. 2018.", url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" },
  houldenDriving: { id: "houlden-driving", citation: "Diabetes Canada Clinical Practice Guidelines Expert Committee, Houlden RL, Berard L, Lakoff JM, Woo V, Yale JF. Diabetes and driving. Can J Diabetes. 2018.", url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-21" },
  sheldon: { id: "sheldon", citation: "Sheldon R, Rose S, Ritchie D, et al. Historical criteria that distinguish syncope from seizures. J Am Coll Cardiol. 2002.", url: "https://doi.org/10.1016/S0735-1097(02)01940-X" },
  apoTramadol: { id: "apo-tramadol", citation: "Apotex Inc. Product monograph. APO-TRAMADOL (tramadol hydrochloride tablets USP, 50 mg). Date of revision 2 October 2019.", url: "https://pdf.hres.ca/dpd_pm/00053394.PDF" },
  ddavpMelt: { id: "ddavp-melt", citation: "Ferring Inc. Product monograph. DDAVP Melt (desmopressin acetate orally disintegrating tablets). Date of revision 2 May 2017.", url: "https://www.ferring.ca/media/1032/ddavp-melt-pm-control-no-187742-en_2may2017.pdf" },
  moritz: { id: "moritz", citation: "Moritz ML, Ayus JC. New aspects in the pathogenesis, prevention, and treatment of hyponatremic encephalopathy in children. Pediatr Nephrol. 2010.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2874061/" },
  vanMook: { id: "van-mook", citation: "van Mook WN, Rennenberg RJ, Schurink GW, et al. Cerebral hyperperfusion syndrome. Lancet Neurol. 2005.", url: "https://doi.org/10.1016/S1474-4422(05)70251-9" },
} satisfies Record<string, Source>;

const T = "seizures";

export const SEIZURES_S49: Samp[] = [
  /* 16 Unwitnessed seizure provoked by tramadol ------------------------ */
  {
    id: "seizures-16",
    topic: T,
    alsoTopics: ["tox"],
    title: "Burned while cooking alone",
    stem:
      "A 44-year-old man presents to the emergency department with a burn on his left forearm. He was frying food alone at home, and his next memory is lying on the kitchen floor beside the spilled pan. He felt no lightheadedness, sweating or chest pain beforehand. His partner arrived 10 minutes later and found him confused, and the confusion lasted about 20 minutes. He now has a headache and aching muscles. For 3 weeks he has taken tramadol 50 mg tablets for low back pain, and for the past 3 days he has taken three tablets four times a day. He takes no other medication, drinks 2 beers a week, slept normally last night and has never had a seizure. There is a 3% partial-thickness burn on the forearm and no head injury. The neurological examination is normal. Capillary glucose is 5.8 mmol/L and the ECG is normal.",
    vitals: { temperature: "37.0°C oral", pulse: "94/minute", resp: "16/minute", bp: "132/80 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following most likely caused him to fall?",
        options: [
          "Cardiac arrhythmia",
          "Generalized seizure",
          "Hypoglycemic episode",
          "Orthostatic hypotension",
          "Vasovagal syncope",
        ],
        correct: 1,
        explanation:
          "He has no memory of falling, was confused for about 20 minutes afterward and now has a headache and aching muscles, which point to an unwitnessed generalized seizure. The burn is an unexplained injury, which is itself a reason to consider seizure. Sheldon and colleagues found that confusion after an event favours seizure, while lightheadedness or sweating beforehand favours syncope, and he had neither warning. Vasovagal and orthostatic syncope recover quickly without a long period of confusion. His normal ECG makes an arrhythmia less likely, and his glucose of 5.8 mmol/L excludes hypoglycemia.",
        keyFeature: { topic: T, n: 1 },
        source: "sheldon",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following factors most likely provoked this event?",
        options: [
          "Alcohol withdrawal",
          "Head injury from the fall",
          "Low blood glucose",
          "Sleep deprivation",
          "Tramadol above 400 mg a day",
        ],
        correct: 4,
        explanation:
          "Three 50 mg tablets four times a day is 12 x 50 = 600 mg a day, above the 400 mg daily maximum. The Canadian tramadol monograph reports that seizure risk rises with doses above the recommended range, although seizures also occur within it. He drinks 2 beers a week, so alcohol withdrawal is unlikely. He has no head injury, and he fell after losing awareness, so the fall did not cause the seizure. His glucose is 5.8 mmol/L, and he slept normally last night.",
        keyFeature: { topic: T, n: 6 },
        source: "apo-tramadol",
      },
      {
        id: "q3",
        kind: "single",
        update: "While his burn is dressed, he has a generalized tonic-clonic seizure that has now lasted 5 minutes. He is on his side with oxygen, breathing adequately, and an IV is in place.",
        prompt: "Which of the following is the most appropriate medication to give him now?",
        options: [
          "levetiracetam 4 500 mg IV",
          "lorazepam 4 mg IV",
          "naloxone 0.4 mg IV",
          "phenytoin 1 680 mg IV",
          "propofol 170 mg IV",
        ],
        correct: 1,
        explanation:
          "A generalized seizure lasting 5 minutes needs a benzodiazepine now, and lorazepam 0.1 mg/kg is capped at 4 mg for his 84 kg. The tramadol monograph states that seizures in tramadol overdose may be controlled with a benzodiazepine, while naloxone may increase the risk of seizures, and his breathing is adequate. Levetiracetam and phenytoin are second-line drugs, given after a benzodiazepine. A propofol bolus is for refractory status with the airway secured.",
        keyFeature: { topic: T, n: 4 },
        source: "apo-tramadol",
      },
      {
        id: "q4",
        kind: "single",
        update: "The seizure stops 2 minutes after treatment. Fifteen minutes later, before he has regained awareness, another generalized seizure begins.",
        prompt: "Which of the following terms best describes his condition at this point?",
        options: [
          "Clustered provoked seizures",
          "Convulsive status epilepticus",
          "Nonepileptic events",
          "Postictal agitation",
          "Refractory status epilepticus",
        ],
        correct: 1,
        explanation:
          "Two seizures without a return of awareness between them is convulsive status epilepticus, whatever the length of each seizure. The Neurocritical Care Society defines status as 5 minutes or more of continuous seizure activity, or recurrent seizures without recovery between them. Refractory status continues after a benzodiazepine and a second-line drug, and he has had only a benzodiazepine. Clustered seizures with recovery between them would not meet the definition. Generalized jerking with loss of awareness is not a nonepileptic event, and postictal agitation does not cause convulsions.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
    ],
    sources: [S.sheldon, S.apoTramadol, { ...S.ncs, url: "https://doi.org/10.1007/s12028-012-9695-z" }],
    ...META,
    version: 2,
  },

  /* 17 Refractory status in a rural hospital ------------------------- */
  {
    id: "seizures-17",
    topic: T,
    alsoTopics: ["airway"],
    title: "Convulsions that continue after treatment",
    stem:
      "You are working in a rural hospital emergency department with no CT scanner and no on-site neurologist. The tertiary centre is 2 hours away by air. A 38-year-old man with known epilepsy is brought by ambulance with generalized convulsions that began 45 minutes ago. Paramedics gave midazolam 10 mg IM. In the department he received lorazepam 4 mg IV, then levetiracetam 4 500 mg IV, then fosphenytoin 1 500 mg PE IV, which finished 5 minutes ago. He is still having generalized tonic clonic movements. Capillary glucose is 7.1 mmol/L. He takes levetiracetam and lamotrigine.",
    vitals: { temperature: "38.0°C tympanic", pulse: "128/minute", resp: "10/minute", bp: "158/92 mmHg", o2sat: "88% on a non rebreather mask", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his condition at this point in his treatment?",
        options: [
          "Benzodiazepine responsive status",
          "Established status epilepticus",
          "Nonconvulsive status epilepticus",
          "Postictal state with myoclonus",
          "Refractory status epilepticus",
        ],
        correct: 4,
        explanation:
          "Status epilepticus that continues after an adequate benzodiazepine and an adequately dosed second line agent is refractory. He has had two benzodiazepine doses and two second line agents, and he is still convulsing. Established status describes seizures that persist after benzodiazepines, before a second line agent has failed. It is not nonconvulsive because tonic clonic movements are visible. A postictal state implies the seizure has ended, and it has not. He is not benzodiazepine responsive because two doses failed.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in management for this patient?",
        options: [
          "Additional lorazepam 4 mg IV",
          "Air transfer before intubation",
          "Intubation and midazolam infusion",
          "Magnesium sulfate 4 g IV",
          "Pyridoxine 5 g IV",
        ],
        correct: 2,
        explanation:
          "Refractory status needs a continuous anesthetic infusion such as midazolam, propofol or pentobarbital, and that requires a secured airway. His resp rate of 10/minute and O2 sat of 88% also call for intubation. A third benzodiazepine adds respiratory depression with little chance of success. Transfer should follow airway control and infusion, not replace them. Magnesium is for eclampsia and pyridoxine is for isoniazid toxicity, and neither is suggested here.",
        keyFeature: { topic: T, n: 4 },
        source: "ncs",
      },
      {
        id: "q3",
        kind: "single",
        update: "He is intubated using ketamine and rocuronium. A midazolam infusion is started. Twenty minutes later he has no visible movements.",
        prompt: "Which of the following is the most important concern about his seizure control at this point?",
        options: [
          "Ketamine lowers the seizure threshold",
          "Midazolam causes paradoxical seizures",
          "Paralysis may hide ongoing seizures",
          "Rocuronium triggers malignant hyperthermia",
          "Seizure activity ends with paralysis",
        ],
        correct: 2,
        explanation:
          "Rocuronium abolishes visible convulsions but not the electrical seizure, so ongoing status can be missed. Continuous EEG is needed, and until it is available, clinical cues such as pupils, heart rate and BP changes are unreliable. Ketamine has antiseizure activity and is used for refractory status. Midazolam does not cause paradoxical seizures in this setting. Rocuronium is not a trigger for malignant hyperthermia, unlike succinylcholine. Paralysis stops movement, not seizures.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following are most appropriate to arrange for this patient during and after transfer?",
        options: [
          "Admission to an intensive care unit",
          "Continuous EEG monitoring",
          "Discontinuing the midazolam infusion",
          "Lumbar puncture before transfer",
          "Scheduled repeat doses of rocuronium",
          "Serum prolactin level",
        ],
        correct: [0, 1],
        explanation:
          "Refractory status needs ICU care with continuous EEG to titrate the infusion to seizure suppression. The midazolam infusion must continue during transport. He has no CT, so lumbar puncture before transfer is unsafe and would delay care. Repeated paralysis hides seizures further. Prolactin does not guide treatment of status epilepticus.",
        keyFeature: { topic: T, n: 3 },
        source: "ncs",
      },
    ],
    sources: [S.ncs],
    ...META,
  },

  /* 18 Bupropion overdose ------------------------------------------- */
  {
    id: "seizures-18",
    topic: T,
    alsoTopics: ["tox", "suicide-risk"],
    title: "Teenager after taking her father's pills",
    stem:
      "A 16-year-old girl is brought to the emergency department by her mother 3 hours after swallowing 20 tablets of bupropion XL 300 mg that belong to her father. She says she wanted to die. She is anxious and tremulous. While you are examining her she has a generalized tonic clonic seizure lasting 90 seconds that stops on its own. She has no past history and takes no medications. Capillary glucose is 6.4 mmol/L. After the seizure she is drowsy. Pupils are 6 mm and reactive. Her skin is warm and moist.",
    vitals: { temperature: "37.8°C oral", pulse: "132/minute", resp: "20/minute", bp: "146/88 mmHg", o2sat: "97% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Ten minutes later she has another generalized seizure. She has IV access.",
        prompt: "Which of the following is the most appropriate medication for her seizure now?",
        options: [
          "Fosphenytoin 1 100 mg PE IV",
          "Lorazepam 4 mg IV",
          "Naloxone 0.4 mg IV",
          "Physostigmine 1 mg IV",
          "Sodium bicarbonate 100 mmol IV",
        ],
        correct: 1,
        explanation:
          "Benzodiazepines are first line for toxin induced seizures. Lorazepam 0.1 mg/kg is 5.5 mg for 55 kg, so the maximum single dose of 4 mg applies. Fosphenytoin is avoided in toxicologic seizures and does not work well for them. Nothing suggests opioids, so naloxone has no role. Physostigmine can itself provoke seizures. Bicarbonate treats QRS widening, not the seizure.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk",
      },
      {
        id: "q2",
        kind: "single",
        update: "The seizure stops. Her ECG shows sinus tachycardia at 128/minute, QRS 96 ms and QTc 480 ms.",
        prompt: "Which of the following findings on a repeat ECG would most change her treatment?",
        options: [
          "QRS duration of 130 ms",
          "QTc interval of 470 ms",
          "Sinus tachycardia at 120/minute",
          "T wave inversion in V1",
          "U waves in leads V2 and V3",
        ],
        correct: 0,
        explanation:
          "Large bupropion overdoses can widen the QRS by slowing cardiac conduction, and a QRS of 130 ms calls for a trial of sodium bicarbonate, ICU monitoring and readiness for dysrhythmias. A QTc of 470 ms is shorter than her first tracing. Sinus tachycardia is expected from sympathomimetic toxicity and is already present. T wave inversion in V1 can be normal. Small U waves do not change management here.",
        keyFeature: { topic: T, n: 2 },
        source: "goldfrank-atypical-antidepressants",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for the medical management of her ingestion?",
        options: [
          "Cardiac monitoring for at least 24 hours",
          "Discharge home after 6 seizure free hours",
          "Medical clearance after one normal ECG",
          "Observation for 4 hours then psychiatry",
          "Outpatient review with her physician",
        ],
        correct: 0,
        explanation:
          "She took about 6 000 mg of an extended release product. In a poison centre series of extended release bupropion overdoses, first seizures occurred up to 24 hours after ingestion, a third of them after 8 hours, and about half of those with seizures had more than one. She needs monitored observation for at least 24 hours. A short observation period or a single normal ECG does not exclude delayed toxicity. Her suicidal intent also requires psychiatric assessment once she is medically cleared, so outpatient follow up alone is unsafe.",
        keyFeature: { topic: T, n: 2 },
        source: "starr",
      },
      {
        id: "q4",
        kind: "menu",
        select: 2,
        prompt: "Which of the following would be most appropriate if her seizures continued after two doses of first-line treatment?",
        options: [
          "Carbamazepine via nasogastric tube",
          "Flumazenil 0.2 mg IV",
          "Fosphenytoin 20 mg PE/kg IV",
          "Phenobarbital 20 mg/kg IV",
          "Physostigmine 2 mg IV",
          "Propofol infusion after intubation",
        ],
        correct: [3, 5],
        explanation:
          "Toxic seizures that persist after benzodiazepines are treated with other GABA agonists. Phenobarbital or propofol with a secured airway are the usual choices. Fosphenytoin works poorly for toxic seizures and is avoided. Flumazenil reverses the benzodiazepine and can worsen seizures. Physostigmine can provoke seizures. Oral carbamazepine is slow and unsafe in a patient who is seizing.",
        keyFeature: { topic: T, n: 4 },
        source: "goldfrank-atypical-antidepressants",
      },
    ],
    sources: [S.trekk, S.gfAtypical, S.starr],
    ...META,
  },

  /* 19 Hyponatremic seizure on desmopressin for bedwetting -------------- */
  {
    id: "seizures-19",
    topic: T,
    title: "Headache and vomiting after a birthday party",
    stem:
      "An 8-year-old boy is brought to the emergency department by ambulance with a generalized seizure that began at home 15 minutes ago. Paramedics gave midazolam 5 mg IN 8 minutes ago, and he is still jerking all four limbs. Ten days ago his family physician started desmopressin 120 mcg orally disintegrating tablets each evening for bedwetting before summer camp. Yesterday he had a birthday party on a hot day and drank several bottles of water and juice through the evening and at bedtime. This morning he woke with a headache and vomited twice. He has no fever, head injury or history of seizures. An IV is in place. Capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "37.0°C tympanic", pulse: "124/minute", resp: "24/minute", bp: "118/72 mmHg", o2sat: "95% on 10 L/minute by non-rebreather mask", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his seizure?",
        options: [
          "Exertional heat stroke",
          "Hypoglycemic seizure",
          "Hyponatremic seizure",
          "Unprovoked epileptic seizure",
          "Viral encephalitis",
        ],
        correct: 2,
        explanation:
          "Desmopressin stops the kidneys from clearing free water, so the large volume he drank in the evening and at bedtime was retained and diluted his sodium. A headache and vomiting before the seizure fit brain swelling from acute hyponatremia. The Canadian product monograph warns of a steep fall in plasma osmolality with seizures in young children when fluid intake is not limited. He has no fever, which argues against heat stroke and encephalitis. His glucose of 5.6 mmol/L excludes hypoglycemia. A new epileptic seizure would not explain the timing after heavy drinking on desmopressin.",
        keyFeature: { topic: T, n: 2 },
        source: "ddavp-melt",
      },
      {
        id: "q2",
        kind: "single",
        update: "Blood tests have been sent. Lorazepam 2.6 mg IV was given 5 minutes ago, and he is still seizing.",
        prompt: "Which of the following is the most appropriate treatment for him now?",
        options: [
          "Fluid restriction alone",
          "furosemide 26 mg IV",
          "hypertonic saline 3% 52 mL IV",
          "isotonic saline 520 mL IV",
          "levetiracetam 1 560 mg IV",
        ],
        correct: 2,
        explanation:
          "His story makes acute hyponatremia the likely cause, and he is still seizing after two benzodiazepine doses, so the priority is to raise his sodium quickly. Moritz and Ayus advise that treatment of suspected symptomatic hyponatremic encephalopathy should begin with a 3% saline bolus. They give 2 mL/kg over 10 minutes, to a maximum of 100 mL, repeated once or twice until symptoms improve, which is 2 x 26 = 52 mL. Levetiracetam 60 mg/kg is the usual next drug after two benzodiazepine doses, but it does not correct the sodium that is causing the seizure. Isotonic saline raises the sodium too slowly to stop a seizure. Furosemide and fluid restriction act far too slowly for a child who is seizing.",
        keyFeature: { topic: T, n: 2 },
        source: "moritz",
      },
      {
        id: "q3",
        kind: "single",
        update: "After treatment the seizure stops, and he wakes over the next hour. His parents ask how this could have been prevented.",
        prompt: "Which of the following instructions, if followed, would most likely have prevented this seizure?",
        options: [
          "Add a bedwetting alarm",
          "Give the dose in the morning",
          "Offer extra fluids on hot days",
          "Restrict drinks from 1 hour before bed",
          "Wake him to void at midnight",
        ],
        correct: 3,
        explanation:
          "The monograph tells families to limit drinks after supper, especially from 1 hour before bedtime until the next morning, at least 8 hours, to prevent water intoxication and convulsions. He drank heavily through the evening and at bedtime, and the water he could not excrete lowered his sodium. Extra fluids on a hot day add to the water he cannot clear. A morning dose would not help night wetting and would still hold back water from daytime drinking. An alarm or waking him to void treats the wetting but does not change how much water the drug retains.",
        keyFeature: { topic: T, n: 2 },
        source: "ddavp-melt",
      },
    ],
    sources: [S.ddavpMelt, S.moritz],
    ...META,
    version: 2,
  },

  /* 20 First seizure in early pregnancy on bupropion -------------------- */
  {
    id: "seizures-20",
    topic: T,
    alsoTopics: ["tox"],
    title: "Woman who collapsed at work",
    stem:
      "A 29-year-old woman, G1P0 at 10 weeks of gestation by ultrasound, is brought to the emergency department by ambulance after a generalized tonic-clonic seizure at work. She has no history of seizures. Three weeks ago she started bupropion extended-release 150 mg tablets for smoking cessation, and she has been taking three tablets a day because she felt it helped more. She has no headache or vaginal bleeding. As she is moved to a stretcher, she has a second generalized seizure. It has now lasted 6 minutes. An IV is in place. Capillary glucose is 5.6 mmol/L.",
    vitals: { temperature: "37.0°C oral", pulse: "118/minute", resp: "22/minute", bp: "132/78 mmHg", o2sat: "94% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to give her now?",
        options: [
          "levetiracetam 3 720 mg IV",
          "lorazepam 4 mg IV",
          "magnesium sulfate 4 g IV",
          "phenobarbital 1 240 mg IV",
          "propofol 100 mg IV bolus",
        ],
        correct: 1,
        explanation:
          "A generalized seizure lasting 6 minutes is status epilepticus, and a benzodiazepine is the first drug, so lorazepam 4 mg IV comes first. Pregnancy does not change that choice. SOGC defines pre-eclampsia, and so eclampsia, as a condition after 20 weeks, and she is at 10 weeks with a normal BP, so magnesium sulfate has no role. Levetiracetam and phenobarbital are second-line drugs after a benzodiazepine fails. A propofol bolus without airway control is not initial therapy.",
        keyFeature: { topic: T, n: 4 },
        source: "sogc",
      },
      {
        id: "q2",
        kind: "single",
        update: "The seizure stops 3 minutes after treatment. An hour later she is awake and oriented with a normal neurological examination. Sodium, calcium and a CBC are normal.",
        prompt: "Which of the following is the most appropriate imaging decision for her?",
        options: [
          "CT head in the ED today",
          "Defer imaging until after delivery",
          "MRI with gadolinium this week",
          "No imaging because of pregnancy",
          "Skull radiographs today",
        ],
        correct: 0,
        explanation:
          "A first seizure that progressed to status epilepticus needs brain imaging before a cause is assumed, even with bupropion as a likely trigger. ACOG advises that CT should not be withheld from a pregnant patient when it is needed, and the fetal dose from a head CT is very low. Deferring imaging until delivery or declining it because of pregnancy would leave a structural cause undiagnosed for months. ACOG advises limiting gadolinium in pregnancy to cases where it clearly changes care. Skull radiographs do not show the brain.",
        keyFeature: { topic: T, n: 6 },
        source: "acog-723",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for her bupropion?",
        options: [
          "Continue at 150 mg twice daily",
          "Continue at the current dose",
          "Reduce to 150 mg once daily",
          "Stop it and do not restart",
          "Switch to bupropion XL 300 mg",
        ],
        correct: 3,
        explanation:
          "Bupropion carries a dose-dependent seizure risk, and she has taken 450 mg a day, above the 300 mg daily maximum for smoking cessation. The Canadian product monograph states that treatment should not be restarted after a seizure on bupropion. Continuing at any dose, reducing the dose or switching to another bupropion product all ignore that warning. Her plan to stop smoking can continue with counselling or nicotine replacement.",
        keyFeature: { topic: T, n: 2 },
        source: "zyban",
      },
      {
        id: "q4",
        kind: "single",
        update: "An hour later, while awaiting admission, she has two more generalized seizures without regaining awareness between them. She has now had two doses of first-line treatment.",
        prompt: "Which of the following is the most appropriate next medication for her?",
        options: [
          "levetiracetam 3 720 mg IV",
          "magnesium sulfate 4 g IV",
          "midazolam infusion now",
          "phenobarbital 1 240 mg IV",
          "valproate 2 480 mg IV",
        ],
        correct: 0,
        explanation:
          "Seizures recurring without recovery after two doses of lorazepam need a second-line drug. Pack and colleagues state that valproate must be avoided in people who can become pregnant because of malformations and harm to neurodevelopment, and they favour levetiracetam. Levetiracetam 60 mg/kg is 60 x 62 = 3 720 mg, below the 4 500 mg maximum. Phenobarbital causes more sedation and respiratory depression and has its own fetal risks. A midazolam infusion is for refractory status after a second-line drug fails, with airway control. Magnesium does not treat seizures at 10 weeks.",
        keyFeature: { topic: T, n: 4 },
        source: "pack",
      },
    ],
    sources: [
      { ...S.sogc, url: "https://pubmed.ncbi.nlm.nih.gov/35577426/" },
      S.acog723,
      S.zyban,
      { ...S.pack, url: "https://doi.org/10.1212/WNL.0000000000209279" },
    ],
    ...META,
    version: 2,
  },

  /* 21 Absence seizures in a child ----------------------------------- */
  {
    id: "seizures-21",
    topic: T,
    title: "Girl who keeps losing track at school",
    stem:
      "A 7-year-old girl is brought to the emergency department by her father after she walked into a parked bicycle while staring. For a month her teacher has reported that she stops mid-sentence and stares for about 10 seconds many times a day, then carries on as if nothing happened. She does not fall or shake. Her grades have dropped, and her family doctor suggested an attention disorder. She has had no vomiting or fever. She is otherwise healthy and takes no medications. She is alert and interactive. She has a small abrasion on her forehead. The neurological examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "92/minute", resp: "20/minute", bp: "102/64 mmHg", weight: "24 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following bedside manoeuvres would best support the suspected diagnosis in this child?",
        options: [
          "Checking orthostatic vital signs",
          "Gentle limb restraint during an event",
          "Glabellar tap testing",
          "Hyperventilation for 3 minutes",
          "Visual tracking of a moving object",
        ],
        correct: 3,
        explanation:
          "Many brief daily staring spells with abrupt return to activity suggest absence seizures, which are easily mistaken for inattention. Having the child hyperventilate for about 3 minutes often provokes an absence at the bedside. Orthostatic vitals assess syncope, and she has no falls. Gentle restraint separates jitteriness from seizures in newborns. A glabellar tap and visual tracking test other neurological functions and do not provoke absences.",
        keyFeature: { topic: T, n: 1 },
        source: "ilae-cae",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation for this child?",
        options: [
          "Electrolytes, calcium and glucose",
          "Emergency CT of the head",
          "Outpatient EEG with hyperventilation",
          "Urgent MRI brain today",
          "Urine toxicology screen",
        ],
        correct: 2,
        explanation:
          "Her many daily spells mean this is not a first seizure, and a routine awake EEG with provoking manoeuvres such as hyperventilation supports the diagnosis and shows the seizure type, here the typical generalized discharges of absence epilepsy. NICE advises this EEG when the history suggests epileptic seizures. It can be done as an outpatient because she is well with a normal examination. Blood tests and imaging are guided by specific findings, such as vomiting, dehydration, a focal deficit or failure to return to baseline, and she has none. Nothing in her history suggests a toxic exposure.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her father asks what she can safely do while she waits for her neurology appointment.",
        prompt: "Which of the following activity advice is most appropriate for her?",
        options: [
          "Avoid all physical activity",
          "Bathe instead of showering",
          "Keep her home from school",
          "Ride her bicycle on roads alone",
          "Swim only with close supervision",
        ],
        correct: 4,
        explanation:
          "Brief lapses of awareness are dangerous in water, so swimming should be supervised. NICE advises showers rather than baths for people with seizures because of drowning risk. She can stay at school and remain active, since restricting all activity harms her without adding safety. Her walk into a bicycle shows that riding alone on roads is unsafe until her seizures are controlled.",
        keyFeature: { topic: T, n: 5 },
        source: "nice",
      },
    ],
    sources: [S.ilaeCae, S.nice],
    ...META,
  },

  /* 22 Simple febrile seizure timed on video ---------------------- */
  {
    id: "seizures-22",
    topic: T,
    alsoTopics: ["pediatric-fever"],
    title: "A seizure caught on video",
    stem:
      "A 26-month-old boy is brought to the emergency department by his father 1 hour after an episode at home. He has had a runny nose, cough and fever since yesterday, and his 5-year-old sister had influenza confirmed at her clinic this week. His father says the whole episode lasted about half an hour. He started recording on his phone as the jerking began. The video shows the boy unresponsive, with both arms and legs jerking together, and the jerking stops after 4 minutes by the video clock. He then slept in his father's arms for 25 minutes. He was born at term, is developing normally and is fully immunized. He is now alert, walking and asking for juice. He has clear nasal discharge. His ears and chest are normal, his neck is supple and there is no rash. The neurological examination is normal.",
    vitals: { temperature: "39.2°C tympanic", pulse: "136/minute", resp: "30/minute", o2sat: "98% on room air", weight: "13 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following durations should be used to classify the seizure he had at home?",
        options: [
          "Father's estimate of 30 minutes",
          "Jerking plus sleep, 29 minutes",
          "Jerking time on the video, 4 minutes",
          "Sleep after the jerking, 25 minutes",
          "Unknown until an EEG is done",
        ],
        correct: 2,
        explanation:
          "A simple febrile seizure lasts less than 15 minutes, and that limit applies to the seizure itself. The video times the jerking at 4 minutes, which is the most reliable measure available. The 25 minutes of sleep came after the jerking stopped, so neither the sleep alone nor the 29 minutes of jerking plus sleep is seizure time. His father's estimate of half an hour covers the whole episode, sleep included. An EEG done now cannot time an event that is already over.",
        keyFeature: { topic: T, n: 8 },
        source: "cfp-fs",
      },
      {
        id: "q2",
        kind: "menu",
        select: 1,
        prompt: "Which of the following investigations is needed to find the cause of his seizure?",
        options: [
          "Blood glucose",
          "CBC with differential",
          "CT head without contrast",
          "Electrolytes and calcium",
          "Emergency department EEG",
          "Lumbar puncture",
          "Urinalysis and culture",
          "None",
        ],
        correct: [7],
        explanation:
          "He had a generalized seizure of 4 minutes with fever at 26 months, it did not recur, and he is back to baseline with a normal examination. That is a simple febrile seizure. Choosing Wisely Canada and CAEP advise against laboratory testing or CT of the head for a simple febrile seizure once the child is back to baseline, and glucose, electrolytes, calcium and CBC are not needed to explain it. He has no signs of meningitis, so a lumbar puncture is not indicated. Testing for a bacterial source follows the usual approach to fever, and his cold with a sister who has influenza gives a clear viral source.",
        keyFeature: { topic: T, n: 8 },
        source: "cfp-fs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate follow-up plan for this seizure?",
        options: [
          "Neurology referral within 2 weeks",
          "Outpatient EEG and neurology review",
          "Outpatient MRI of the brain",
          "Pediatric neurology consult today",
          "Usual care with his family doctor",
        ],
        correct: 4,
        explanation:
          "Children with simple febrile seizures do not need assessment by a neurologist and usually outgrow them by 6 years of age, so usual care with his family doctor is enough. A neurology referral, whether today or within 2 weeks, adds nothing for him. Routine neuroimaging is not recommended after a simple febrile seizure. Outpatient EEG and MRI are part of the workup for a first unprovoked seizure, not for a simple febrile seizure.",
        keyFeature: { topic: T, n: 8 },
        source: "cfp-fs",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following statements about his risk of a serious bacterial infection is most accurate?",
        options: [
          "Higher, because he had a seizure",
          "Lower, because the seizure was brief",
          "Same as for fever without a seizure",
          "Unknown until a lumbar puncture",
          "Unknown until blood culture results",
        ],
        correct: 2,
        explanation:
          "The risk of bacteremia, urinary tract infection or meningitis is the same in children with a simple febrile seizure as in children with fever alone. The seizure neither raises nor lowers it. Less testing since the 2011 AAP guideline has not led to more delayed diagnoses of bacterial meningitis. His risk is judged the usual way for fever, from his well appearance, normal examination and full immunization, so it does not wait on a lumbar puncture or a blood culture.",
        keyFeature: { topic: T, n: 8 },
        source: "cfp-fs",
      },
    ],
    sources: [S.cfpFs],
    ...META,
    version: 3,
  },

  /* 23 Status epilepticus without IV access ----------------------------- */
  {
    id: "seizures-23",
    topic: T,
    title: "Seizure in a man from a group home",
    stem:
      "You are working in a rural hospital emergency department. A 34-year-old man with cerebral palsy, intellectual disability and epilepsy is brought in by ambulance from his group home. Staff saw a generalized tonic-clonic seizure begin 7 minutes ago, and it has not stopped. His jaw is clenched, so they could not give buccal midazolam. He takes levetiracetam and valproate. Paramedics tried twice and your nurse once to place an IV, and all attempts failed because of contractures and small veins. He is on his side with oxygen by non-rebreather mask. Capillary glucose is 6.4 mmol/L.",
    vitals: { temperature: "37.6°C oral", pulse: "132/minute", resp: "28/minute", bp: "150/90 mmHg", o2sat: "93% on 15 L/minute by non-rebreather mask", weight: "38 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following seizure durations marks the point at which drug treatment of a generalized convulsive seizure should begin?",
        options: ["1 minute", "2 minutes", "5 minutes", "10 minutes", "30 minutes"],
        correct: 2,
        explanation:
          "The ILAE sets time point t1, when a generalized convulsive seizure becomes status epilepticus and treatment should start, at 5 minutes. He has been seizing for 7 minutes, so treatment is already due. Thirty minutes is t2, when long-term injury becomes likely, and waiting until then allows harm. Ten minutes is t1 for focal status with impaired awareness, not for convulsive seizures. One or 2 minutes falls within the length of most seizures that stop on their own.",
        keyFeature: { topic: T, n: 3 },
        source: "trinka",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate first medication for him while IV access is unavailable?",
        options: [
          "Intramuscular lorazepam",
          "Intramuscular midazolam",
          "Intramuscular phenytoin",
          "Oral levetiracetam load",
          "Rectal diazepam",
        ],
        correct: 1,
        explanation:
          "The AES guideline names intramuscular midazolam, IV lorazepam and IV diazepam as the first-line options, and with no IV access intramuscular midazolam is the choice. In the trial behind that advice it worked at least as well as IV lorazepam. Rectal diazepam is a reasonable alternative only when none of those three options is available. Intramuscular lorazepam is not among the recommended first-line options. Phenytoin is not given intramuscularly, and a second-line drug does not come before a benzodiazepine. Nothing is given by mouth to a patient who is seizing.",
        keyFeature: { topic: T, n: 4 },
        source: "aes",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following doses of intramuscular midazolam is most appropriate for this patient?",
        options: ["1 mg", "2.5 mg", "5 mg", "10 mg", "20 mg"],
        correct: 2,
        explanation:
          "The AES guideline uses 10 mg IM for patients over 40 kg and 5 mg for patients weighing 13 to 40 kg. He weighs 38 kg, so the dose is 5 mg. A 10 mg dose is meant for heavier patients and adds respiratory depression in a small man whose saturation is already 93%. A 20 mg dose is double the largest first dose studied. Doses of 1 or 2.5 mg are below the studied dose for his weight and risk leaving the seizure untreated.",
        keyFeature: { topic: T, n: 4 },
        source: "aes",
      },
    ],
    sources: [{ ...S.trinka }, S.aes],
    ...META,
    version: 2,
  },

  /* 24 Febrile seizure with a recently revised shunt -------------------- */
  {
    id: "seizures-24",
    topic: T,
    alsoTopics: ["pediatric-fever", "infectious-diseases"],
    title: "Feverish toddler with a shunt",
    stem:
      "A 2-year-old boy is brought to the emergency department after a seizure at home. He has had a fever since yesterday. His mother saw him stiffen and shake all four limbs for 3 minutes, and he was sleepy for 30 minutes afterward. He was born at 27 weeks and has a ventriculoperitoneal shunt for hydrocephalus after an intraventricular hemorrhage. The shunt was revised 5 weeks ago. He has had no cough, vomiting or diarrhea. He is now awake but irritable and wants to be held. The skin over the shunt tubing behind his right ear is red and tender. The neck is supple and there is no rash.",
    vitals: { temperature: "39.1°C rectal", pulse: "156/minute", resp: "30/minute", bp: "94/58 mmHg", o2sat: "98% on room air", weight: "12 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly argues against managing this as a simple febrile seizure?",
        options: [
          "Age of 2 years",
          "Fever of 39.1°C",
          "Seizure lasting 3 minutes",
          "Shunt revised 5 weeks ago",
          "Sleepy for 30 minutes after",
        ],
        correct: 3,
        explanation:
          "The AAP defines a simple febrile seizure as a brief generalized seizure in a febrile child without an intracranial infection, and a shunt revised 5 weeks ago with red, tender skin over the tubing points to shunt infection. His age, his fever, a generalized seizure of 3 minutes and 30 minutes of drowsiness afterward all fit a simple febrile seizure. Those features do not outweigh a recently revised shunt, which makes infection inside the skull the first concern.",
        keyFeature: { topic: T, n: 8 },
        source: "aap-fs-long",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his evaluation?",
        options: [
          "EEG within 24 hours",
          "Lumbar puncture in the ED",
          "Outpatient MRI of the brain",
          "Shunt CSF via neurosurgery",
          "Urine culture only",
        ],
        correct: 3,
        explanation:
          "IDSA advises that when CSF shunt infection is suspected, a neurosurgeon is needed to obtain CSF for analysis, and neuroimaging is also recommended. Cell counts from the shunt and from a lumbar puncture differ, so a lumbar puncture alone does not assess the shunt. An EEG does not look for infection. An outpatient MRI delays diagnosis of a treatable infection. A urine culture alone ignores the red, tender shunt tract.",
        keyFeature: { topic: T, n: 6 },
        source: "idsa-2017",
      },
      {
        id: "q3",
        kind: "single",
        update: "CSF and blood cultures have been sent.",
        prompt: "Which of the following empiric antimicrobial regimens is most appropriate now?",
        options: [
          "ampicillin and gentamicin IV",
          "cefazolin IV alone",
          "ceftriaxone IV alone",
          "meropenem IV alone",
          "vancomycin and cefepime IV",
        ],
        correct: 4,
        explanation:
          "IDSA recommends vancomycin plus an antipseudomonal beta-lactam, such as cefepime, ceftazidime or meropenem, as empiric therapy for healthcare-associated ventriculitis, which covers staphylococci and gram-negative bacilli including Pseudomonas. Meropenem alone misses methicillin-resistant staphylococci. Ceftriaxone does not cover Pseudomonas or methicillin-resistant staphylococci. Cefazolin misses both. Ampicillin with gentamicin is a regimen for neonatal sepsis and misses resistant staphylococci.",
        keyFeature: { topic: T, n: 2 },
        source: "idsa-2017",
      },
    ],
    sources: [{ ...S.aapFsLong, url: "https://doi.org/10.1542/peds.2008-0939" }, S.idsa2017],
    ...META,
    version: 2,
  },

  /* 25 First afebrile seizure in a school-age child ------------------ */
  {
    id: "seizures-25",
    topic: T,
    title: "Boy found stiff and jerking in bed",
    stem:
      "A 9-year-old boy is brought to the emergency department by his parents after they heard a noise from his bedroom at 06:00 and found him stiff and jerking all four limbs. It lasted about 2 minutes. He was confused for 20 minutes and now, 2 hours later, is back to his usual self. He has had no fever, headache, vomiting or recent illness. He has no past history, his development is normal and he takes no medications. There was no head injury. He has bitten the side of his tongue. The neurological examination is normal.",
    vitals: { temperature: "36.9°C oral", pulse: "90/minute", resp: "18/minute", bp: "104/66 mmHg", o2sat: "99% on room air", weight: "30 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for investigating this seizure?",
        options: [
          "CT head before discharge",
          "Electrolytes, glucose and CBC",
          "Lumbar puncture before discharge",
          "MRI brain before discharge",
          "Outpatient EEG and neurology review",
        ],
        correct: 4,
        explanation:
          "He has had a first unprovoked generalized seizure and has fully recovered with a normal examination. Most children should have an outpatient EEG, and neurology follow up decides on MRI. Routine blood work is not recommended without vomiting, dehydration or failure to return to baseline. Urgent imaging is kept for red flags such as a focal deficit or persistent altered mental status. He has no fever or meningism, so lumbar puncture is not indicated.",
        keyFeature: { topic: T, n: 6 },
        source: "cfp-fs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings, had it been present, would most justify urgent neuroimaging?",
        options: [
          "Family history of epilepsy",
          "Lateral tongue bite",
          "Persistent left arm weakness",
          "Postictal confusion of 20 minutes",
          "Seizure on waking from sleep",
        ],
        correct: 2,
        explanation:
          "A persistent focal neurological deficit after a first seizure is a red flag for a structural lesion and justifies urgent imaging. A family history of epilepsy and a seizure on waking do not suggest a lesion needing emergency care. A lateral tongue bite supports that the event was a seizure but does not predict an imaging finding. Brief postictal confusion that resolves is expected.",
        keyFeature: { topic: T, n: 6 },
        source: "cfp-fs",
      },
      {
        id: "q3",
        kind: "single",
        update: "His parents ask how to keep him safe over the coming weeks.",
        prompt: "Which of the following is the most appropriate safety advice for him?",
        options: [
          "Avoid all school sports",
          "Climb freely at the playground",
          "Stay home from school for a month",
          "Swim alone at the public pool",
          "Take showers rather than baths",
        ],
        correct: 4,
        explanation:
          "Showers are safer than baths because a seizure in a bath can cause drowning. Swimming should be supervised, not done alone. Climbing above his own height should be supervised. Excluding him from school or from all sports adds harm without a clear safety gain.",
        keyFeature: { topic: T, n: 5 },
        source: "nice",
      },
    ],
    sources: [S.cfpFs, S.nice],
    ...META,
  },

  /* 26 Hypocalcemic seizures in an infant ---------------------------- */
  {
    id: "seizures-26",
    topic: T,
    title: "Infant with jerking of one side",
    stem:
      "A 4-month-old boy is brought to the emergency department after three episodes today of rhythmic jerking of his right arm and leg, each lasting about 1 minute. Between episodes he feeds well. He was born at term and is exclusively breastfed. He has received no vitamin D supplement. His family lives in northern Manitoba, and he has had little sun exposure this winter. There is no fever, vomiting or diarrhea. He is alert with a soft fontanelle. His wrists appear widened. Capillary glucose is 4.8 mmol/L.",
    vitals: { temperature: "36.8°C rectal", pulse: "150/minute", resp: "36/minute", o2sat: "99% on room air", weight: "6.8 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "Venous blood shows ionized calcium 0.72 mmol/L (normal 1.10 to 1.30), sodium 139 mmol/L and magnesium 0.80 mmol/L.",
        prompt: "Which of the following is the most appropriate immediate treatment for this infant?",
        options: [
          "IV calcium gluconate with monitoring",
          "IV levetiracetam loading dose",
          "IV magnesium sulfate bolus",
          "IV phenobarbital loading dose",
          "Oral vitamin D 400 IU daily",
        ],
        correct: 0,
        explanation:
          "His seizures are caused by severe hypocalcemia, a quickly reversible cause that anticonvulsants will not correct. Slow IV calcium gluconate with cardiac monitoring treats the cause. Levetiracetam and phenobarbital do not correct the calcium. His magnesium of 0.80 mmol/L is normal, so magnesium is not needed. Oral vitamin D is part of later treatment but acts far too slowly to stop seizures.",
        keyFeature: { topic: T, n: 2 },
        source: "rosen-ch169",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely underlying cause of his hypocalcemia?",
        options: [
          "Congenital hypoparathyroidism",
          "Magnesium deficiency",
          "Nutritional vitamin D deficiency",
          "Pseudohypoparathyroidism",
          "Renal tubular acidosis",
        ],
        correct: 2,
        explanation:
          "An exclusively breastfed infant with no vitamin D supplement, little sun exposure, a northern home and widened wrists fits vitamin D deficiency rickets. Canadian surveillance found hypocalcemic seizures were a common presentation of rickets in infants. His magnesium is normal. Congenital hypoparathyroidism usually presents earlier and does not cause rickets. Pseudohypoparathyroidism and renal tubular acidosis are rare and not suggested by this history.",
        keyFeature: { topic: T, n: 6 },
        source: "ward",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following would most likely have prevented this presentation?",
        options: [
          "Calcium supplement for the mother",
          "Earlier introduction of cow's milk",
          "Switching to soy based formula",
          "Vitamin D 400 IU daily from birth",
          "Weekly sun exposure through a window",
        ],
        correct: 3,
        explanation:
          "In the Canadian surveillance study no rickets occurred in breastfed children who received regular vitamin D 400 IU daily. Breast milk alone does not supply enough vitamin D. Maternal calcium does not correct infant vitamin D deficiency. Cow's milk is not advised in the first year. Formula change is not needed for a breastfed infant. Window glass blocks the ultraviolet light needed to make vitamin D.",
        keyFeature: { topic: T, n: 2 },
        source: "ward",
      },
    ],
    sources: [S.rosen169, S.ward],
    ...META,
  },

  /* 27 Breakthrough seizure in pregnancy ----------------------------- */
  {
    id: "seizures-27",
    topic: T,
    alsoTopics: ["pre-eclampsia"],
    title: "Pregnant woman with a seizure after years without one",
    stem:
      "A 29-year-old woman at 26 weeks of gestation is brought to the emergency department after a generalized tonic clonic seizure at home that lasted 2 minutes. She has had focal to bilateral seizures since age 15, controlled on lamotrigine 200 mg twice daily with no seizures for 3 years. Her dose has not changed during pregnancy and she has not missed doses. Her pregnancy has otherwise been normal, and she has no contractions. She has no headache or visual symptoms. She is now alert and oriented with a normal neurological examination. Urine dipstick shows no protein. Fetal heart rate is 145/minute.",
    vitals: { temperature: "36.8°C oral", pulse: "96/minute", resp: "16/minute", bp: "118/72 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her breakthrough seizure?",
        options: [
          "Early onset eclampsia",
          "Falling lamotrigine levels",
          "Gestational hyponatremia",
          "Nonadherence to lamotrigine",
          "Sleep loss from late pregnancy",
        ],
        correct: 1,
        explanation:
          "Lamotrigine clearance rises steeply during pregnancy, so levels fall when the dose is unchanged. Seizures become more likely when the level drops well below her own prepregnancy target. Eclampsia is unlikely with a BP of 118/72 mmHg, no proteinuria and no headache. She reports taking every dose. Nothing suggests hyponatremia or unusual sleep loss.",
        keyFeature: { topic: T, n: 7 },
        source: "pennell",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most useful for her ongoing management?",
        options: [
          "CT head with abdominal shielding",
          "EEG in the department",
          "Lamotrigine serum level",
          "Serum prolactin level",
          "Urine toxicology screen",
        ],
        correct: 2,
        explanation:
          "A lamotrigine level compared with her prepregnancy level guides the dose increase she needs, and monitoring levels through pregnancy reduces seizures. She has known epilepsy, a typical seizure, full recovery and a normal examination, so neuroimaging adds little. An EEG in the department will not change management. Prolactin and toxicology screening do not help when the cause is clear.",
        keyFeature: { topic: T, n: 7 },
        source: "pennell",
      },
      {
        id: "q3",
        kind: "single",
        update: "Two hours later she has another generalized seizure that continues 6 minutes after lorazepam 4 mg IV.",
        prompt: "Which of the following second line agents is most appropriate for her?",
        options: [
          "Fosphenytoin 360 mg PE IV",
          "Lamotrigine 200 mg PO",
          "Levetiracetam 4 320 mg IV",
          "Phenobarbital 100 mg IV",
          "Valproic acid 2 880 mg IV",
        ],
        correct: 2,
        explanation:
          "Levetiracetam 60 mg/kg is 4 320 mg for 72 kg, under the 4 500 mg maximum, and it has one of the lowest risks of fetal malformation. Valproic acid 40 mg/kg is a correct status dose, but valproate carries the highest risk of major malformations and neurodevelopmental harm and should be avoided in pregnancy. Fosphenytoin 360 mg PE is 5 mg PE/kg, a quarter of the loading dose. Phenobarbital 100 mg is far below 20 mg/kg. Oral lamotrigine cannot be given to a seizing patient.",
        keyFeature: { topic: T, n: 4 },
        source: "pack",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is also required while her seizures are being treated?",
        options: [
          "Delay drugs until obstetrics arrives",
          "Emergency cesarean delivery",
          "Supine positioning for airway",
          "Tocolysis with nifedipine",
          "Uterine displacement and fetal monitoring",
        ],
        correct: 4,
        explanation:
          "At 26 weeks the uterus compresses the vena cava when she lies supine, so left lateral tilt or manual uterine displacement protects cardiac output. The fetus is viable, so fetal heart monitoring and obstetric involvement are needed. Treatment of status must not wait for obstetrics. Emergency delivery is not a treatment for maternal status epilepticus, which is stopped with drugs first. She has no contractions, so tocolysis has no role.",
        keyFeature: { topic: T, n: 4 },
        source: "rosen-ch174",
      },
    ],
    sources: [S.pennell, S.pack, S.rosen174],
    ...META,
  },

  /* 28 Valproate and carbapenem ------------------------------------- */
  {
    id: "seizures-28",
    topic: T,
    title: "Seizures after a recent hospital stay",
    stem:
      "A 58-year-old man with generalized epilepsy is brought to the emergency department by ambulance after two generalized seizures today. He recovered fully between them. He has been seizure free for 4 years on valproic acid 1 000 mg twice daily. Five days ago he was discharged from hospital after treatment of a complicated urinary infection, and home care is giving him IV ertapenem daily. He reports taking every valproic acid dose. He is now alert with a normal neurological examination. There was no head injury. Capillary glucose is 6.0 mmol/L.",
    vitals: { temperature: "37.0°C oral", pulse: "92/minute", resp: "16/minute", bp: "136/82 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "His valproic acid level is 95 umol/L. His level 6 months ago was 480 umol/L on the same dose.",
        prompt: "Which of the following is the most likely cause of his low valproic acid level?",
        options: [
          "Carbapenem drug interaction",
          "Enzyme induction by the infection",
          "Laboratory error in the assay",
          "Malabsorption from the illness",
          "Unreported missed doses",
        ],
        correct: 0,
        explanation:
          "Carbapenems such as ertapenem and meropenem cause a rapid and marked fall in valproic acid levels, often within a day of starting. His level fell from 480 to 95 umol/L while taking the same dose, and the timing matches the ertapenem course. Infection does not induce valproate metabolism to this degree. He reports full adherence, and nothing suggests malabsorption or a laboratory error.",
        keyFeature: { topic: T, n: 7 },
        source: "mancl",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate way to manage this interaction?",
        options: [
          "Continue and recheck in a week",
          "Double the valproic acid dose",
          "Give an IV valproic acid load",
          "Stop valproic acid permanently",
          "Switch to a non carbapenem antibiotic",
        ],
        correct: 4,
        explanation:
          "Raising the valproate dose or giving a load does not reliably overcome the interaction, and levels may stay low for days after the carbapenem stops. The best step is to switch to an antibiotic from another class that treats his infection, with a bridging antiseizure drug if needed. Continuing unchanged leaves him at risk of more seizures. Valproate controlled his epilepsy for 4 years, so stopping it permanently is not warranted.",
        keyFeature: { topic: T, n: 7 },
        source: "mancl",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best reflects the need for neuroimaging in this patient today?",
        options: [
          "CT head because he is over 50",
          "CT head for any seizure cluster",
          "MRI brain before discharge",
          "Not needed given the clear cause",
          "Urgent CT angiography",
        ],
        correct: 3,
        explanation:
          "In known epilepsy, a typical seizure with a clear precipitant, full recovery, no head injury and a normal examination does not need emergency neuroimaging. His falling valproate level explains the cluster. Age alone is not an indication for CT in a patient with established epilepsy. MRI and CT angiography answer questions that his presentation does not raise.",
        keyFeature: { topic: T, n: 7 },
        source: "rosen-ch88",
      },
    ],
    sources: [S.mancl, S.rosen88],
    ...META,
  },

  /* 29 Known epilepsy in a child after home rescue ------------------- */
  {
    id: "seizures-29",
    topic: T,
    title: "Boy with epilepsy home from camp",
    stem:
      "A 12-year-old boy with focal epilepsy is brought to the emergency department by his mother after a seizure at home. He had one of his typical focal seizures that became generalized and lasted 7 minutes, until she gave his prescribed intranasal midazolam 5 mg. He missed several evening doses of levetiracetam this week at a sleepover camp. He has had no fever, vomiting or head injury. Capillary glucose in the ambulance was 5.8 mmol/L. Now, 90 minutes later, he is awake, oriented and at his neurological baseline. His neck is supple.",
    vitals: { temperature: "37.0°C oral", pulse: "94/minute", resp: "18/minute", bp: "108/66 mmHg", o2sat: "98% on room air", weight: "40 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        select: 1,
        prompt: "Which of the following investigations is required in the emergency department for this boy?",
        options: [
          "CBC with differential",
          "CT head without contrast",
          "Electrolytes and glucose",
          "Emergency department EEG",
          "Levetiracetam serum level",
          "Lumbar puncture and CSF",
          "Urine toxicology screen",
          "None",
        ],
        correct: [7],
        explanation:
          "He had a typical seizure with a clear trigger, missed doses, and has returned to baseline with a normal glucose. TREKK reserves CT for trauma, raised intracranial pressure or focal signs, and lumbar puncture for suspected meningitis, and he has none of these. Drug levels are suggested for agents such as phenytoin, carbamazepine, phenobarbital and valproic acid, not levetiracetam. Blood work, EEG and toxicology screening would not change his care.",
        keyFeature: { topic: T, n: 7 },
        source: "trekk",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan for his levetiracetam?",
        options: [
          "Change to a different drug",
          "Double the dose for one week",
          "Resume usual dose with adherence plan",
          "Stop it and refer to neurology",
          "Switch to phenytoin today",
        ],
        correct: 2,
        explanation:
          "Missed doses explain this seizure, and the drug has controlled his epilepsy well when taken. Resuming the usual dose, with a plan such as reminders and supervised dosing away from home, addresses the cause. Changing or stopping an effective drug, or switching to phenytoin, adds risk without benefit. Doubling the dose adds side effects without evidence of benefit.",
        keyFeature: { topic: T, n: 7 },
        source: "rosen-ch169",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about his rescue medication at home?",
        options: [
          "Give a second dose every 5 minutes at home",
          "Give midazolam if a seizure lasts 5 minutes",
          "Give midazolam only after 15 minutes",
          "Rescue kit is no longer needed",
          "Wait for paramedics before any dose",
        ],
        correct: 1,
        explanation:
          "Treatment should start within about 5 minutes of seizure onset, because delay makes seizures harder to stop. Waiting 15 minutes or waiting for paramedics loses that window. TREKK advises no more than two benzodiazepine doses because of apnea risk, so repeated home doses are unsafe. His seizure today needed the kit, so it is still needed.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk",
      },
    ],
    sources: [S.trekk, S.rosen169],
    ...META,
  },

  /* 30 Events with unusual features --------------------------------- */
  {
    id: "seizures-30",
    topic: T,
    title: "Woman with a long event and closed eyes",
    stem:
      "A 26-year-old woman is brought to the emergency department by ambulance with a seizure that has lasted 25 minutes. Paramedics gave midazolam 10 mg IM. She has had several similar events in the past year and takes levetiracetam, although an earlier EEG was normal. During the event her eyes are tightly closed and she resists eye opening. Her head moves from side to side and her pelvis thrusts. The movements wax and wane, and they pause briefly when her name is called. Her colour is good. Capillary glucose is 5.2 mmol/L.",
    vitals: { temperature: "36.9°C oral", pulse: "104/minute", resp: "20/minute", bp: "128/80 mmHg", o2sat: "99% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of this event most suggests a psychogenic nonepileptic seizure?",
        options: [
          "Eyes forcibly closed",
          "Heart rate of 104/minute",
          "Normal capillary glucose",
          "Prior similar events",
          "Urinary incontinence",
        ],
        correct: 0,
        explanation:
          "Forced eye closure with resistance to opening during an event favours a psychogenic nonepileptic seizure, as do side to side head movements, pelvic thrusting and waxing and waning activity. Eyes are usually open in generalized epileptic seizures. A mild tachycardia, a normal glucose and prior events occur with both kinds of event. Incontinence can occur in either and does not separate them.",
        keyFeature: { topic: T, n: 1 },
        source: "lafrance",
      },
      {
        id: "q2",
        kind: "single",
        update: "Five minutes later the movements continue unchanged. She breathes regularly between thrusts, her O2 sat stays at 99% on room air and her pupils are reactive.",
        prompt: "Which of the following is the most appropriate next step in her management?",
        options: [
          "Fosphenytoin 1 280 mg PE IV",
          "Intubation and propofol infusion",
          "Lorazepam 4 mg IV",
          "Observation with EEG if available",
          "Sternal rub and ammonia capsules",
        ],
        correct: 3,
        explanation:
          "After 30 minutes of generalized movements she still has regular breathing, an O2 sat of 99% and reactive pupils, she reacts to her name, and the features point to a nonepileptic event. Generalized epileptic convulsions of this length often cause desaturation or cyanosis. Repeated benzodiazepines, loading doses and intubation expose patients with nonepileptic events to real harm, so supportive observation is appropriate. EEG during an event is the best test when there is doubt, and escalation is resumed if it shows seizure activity or her condition changes. Painful or noxious stimuli are unhelpful and damage trust.",
        keyFeature: { topic: T, n: 3 },
        source: "rosen-ch88",
      },
      {
        id: "q3",
        kind: "single",
        update: "The event stops after 10 more minutes. She is alert and asks what is happening to her.",
        prompt: "Which of the following is the most appropriate way to discuss the likely diagnosis with her?",
        options: [
          "Avoid discussing it until she leaves",
          "Explain it as a real, treatable condition",
          "Increase the levetiracetam dose",
          "Stop levetiracetam today",
          "Tell her the event was faked",
        ],
        correct: 1,
        explanation:
          "Psychogenic nonepileptic seizures are involuntary, and a clear, respectful explanation that the condition is real and treatable improves engagement with care. The diagnosis should be confirmed with video EEG through neurology. Stopping levetiracetam in the emergency department is premature, because some patients have both epileptic and nonepileptic events. Raising the dose treats the wrong problem. Calling the event faked is inaccurate and harmful.",
        keyFeature: { topic: T, n: 1 },
        source: "lafrance",
      },
    ],
    sources: [S.lafrance, S.rosen88],
    ...META,
  },

  /* 31 Collapse with jerking in an older man ------------------------- */
  {
    id: "seizures-31",
    topic: T,
    alsoTopics: ["arrhythmia", "loc"],
    title: "Older man slumping in his chair",
    stem:
      "You are working in a community hospital emergency department. An 81-year-old man is brought in by his wife after two episodes today in which he suddenly slumped in his chair, went grey and had a few jerks of his arms for about 15 seconds. Each time he woke within a minute and was not confused. He had a similar episode last week. He takes ramipril and atorvastatin. His wife asks whether he is having seizures. He is alert and oriented. The neurological examination is normal. Capillary glucose is 6.3 mmol/L.",
    vitals: { temperature: "36.6°C oral", pulse: "34/minute", resp: "16/minute", bp: "96/50 mmHg", o2sat: "95% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features best distinguishes these episodes from generalized seizures?",
        options: [
          "Age of more than 80 years",
          "Events occurring while seated",
          "Normal capillary glucose level",
          "Rapid recovery without confusion",
          "Several events over one week",
        ],
        correct: 3,
        explanation:
          "Brief jerks with pallor and recovery within a minute without confusion are typical of convulsive syncope, while a generalized seizure is usually followed by postictal confusion. His age, a normal glucose and repeated events occur with both. Seizures can also happen while seated, so posture does not separate the two, but sudden collapse while seated raises concern for an arrhythmia.",
        keyFeature: { topic: T, n: 1 },
        source: "ccs-sync",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important for him now?",
        options: [
          "CT head without contrast",
          "ECG with rhythm strip",
          "EEG before discharge",
          "Orthostatic vital signs",
          "Troponin and CK levels",
        ],
        correct: 1,
        explanation:
          "A pulse of 34/minute with hypotension and recurrent collapse points to a bradyarrhythmia, and an ECG with a rhythm strip is the key test for syncope. Orthostatic vitals help in suspected orthostatic syncope but will not explain a pulse of 34. CT and EEG look for neurological causes that his normal examination and rapid recovery do not suggest. Cardiac markers do not identify the rhythm.",
        keyFeature: { topic: T, n: 2 },
        source: "ccs-sync",
      },
      {
        id: "q3",
        kind: "single",
        update: "The ECG shows complete heart block with a wide complex escape rhythm at 34/minute. Atropine 1 mg IV has no effect. He becomes grey and drowsy.",
        prompt: "Which of the following is the most appropriate next step in his treatment?",
        options: [
          "Adenosine 6 mg IV",
          "Amiodarone 150 mg IV",
          "Calcium chloride 1 g IV",
          "Procainamide 1 g IV",
          "Transcutaneous pacing",
        ],
        correct: 4,
        explanation:
          "Unstable bradycardia that does not respond to atropine needs transcutaneous pacing, or a dopamine or epinephrine infusion, while transvenous pacing is arranged. A wide complex escape rhythm in complete heart block often does not respond to atropine. Adenosine, amiodarone and procainamide slow conduction and could cause asystole. Calcium is for hyperkalemia or calcium channel blocker toxicity, and neither is suggested.",
        keyFeature: { topic: T, n: 2 },
        source: "aha",
      },
    ],
    sources: [S.ccsSync, S.aha],
    ...META,
  },

  /* 32 Hypoglycemic seizure on propranolol ------------------------------ */
  {
    id: "seizures-32",
    topic: T,
    alsoTopics: ["pediatric-fever"],
    title: "Infant with vomiting who will not stop shaking",
    stem:
      "A 5-month-old girl is brought to the emergency department after she started seizing at home. For 2 days she has had vomiting and diarrhea and has taken only small amounts of formula. This morning she was hard to wake, then stiffened and jerked all four limbs. The jerking has now lasted 8 minutes. She takes propranolol 1 mg/kg twice daily for a large hemangioma on her upper lip, and her mother gave the usual doses. She is sweaty and pale, with dry mucous membranes. Capillary refill is 3 seconds. An IV has just been placed. Capillary glucose is 1.8 mmol/L.",
    vitals: { temperature: "37.4°C rectal", pulse: "118/minute", resp: "36/minute", bp: "80/48 mmHg", o2sat: "95% on room air", weight: "7 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for her ongoing seizure?",
        options: [
          "dextrose 10% 35 mL IV",
          "levetiracetam 420 mg IV",
          "lorazepam 0.7 mg IV",
          "midazolam 1.4 mg IN",
          "phenobarbital 140 mg IV",
        ],
        correct: 0,
        explanation:
          "Her seizure has a treatable cause, a glucose of 1.8 mmol/L, so dextrose comes first. TREKK advises D10W 5 mL/kg IV for a glucose of 2.6 mmol/L or less, which is 5 x 7 = 35 mL, with a recheck in 5 to 10 minutes. Lorazepam 0.1 mg/kg, intranasal midazolam 0.2 mg/kg, levetiracetam 60 mg/kg and phenobarbital 20 mg/kg are doses suited to her weight, but none corrects the low glucose that is driving the seizure. A benzodiazepine is added if she is still seizing once her glucose is corrected.",
        keyFeature: { topic: T, n: 4 },
        source: "trekk-ge",
      },
      {
        id: "q2",
        kind: "single",
        update: "The seizure stops 2 minutes after treatment. A repeat glucose is 5.9 mmol/L.",
        prompt: "Which of the following best explains why her glucose fell so low?",
        options: [
          "Congenital hyperinsulinism",
          "Hidden sulfonylurea ingestion",
          "Inborn error of metabolism",
          "Propranolol with poor intake",
          "Sepsis from gastroenteritis",
        ],
        correct: 3,
        explanation:
          "Drolet and colleagues explain that propranolol can block the glycogenolysis, gluconeogenesis and lipolysis that protect an infant during fasting, and 2 days of vomiting and poor feeding removed her intake. They add that infants are especially vulnerable and that the drug can hide warning signs of hypoglycemia. Congenital hyperinsulinism and inborn errors would not explain why severe hypoglycemia appeared only now, during an illness while on propranolol. Sepsis is not suggested by her temperature and rapid recovery. Nothing in the history suggests access to a sulfonylurea.",
        keyFeature: { topic: T, n: 2 },
        source: "drolet",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her propranolol?",
        options: [
          "Continue it at the usual dose",
          "Double the dose when she is well",
          "Give each dose at bedtime",
          "Hold it while intake is poor",
          "Stop it permanently today",
        ],
        correct: 3,
        explanation:
          "The consensus guidance advises stopping propranolol during an intercurrent illness, especially when oral intake is restricted, and restarting it once she is feeding normally. It also advises giving doses in the daytime with a feed soon after, so moving doses to bedtime is the wrong change. Continuing the usual dose during vomiting led to this seizure. A higher dose adds risk without a reason. Stopping it for good is not needed, because these precautions prevent hypoglycemia and the hemangioma still needs treatment.",
        keyFeature: { topic: T, n: 2 },
        source: "drolet",
      },
    ],
    sources: [S.trekkGe, S.drolet],
    ...META,
    version: 2,
  },

  /* 33 Neurocysticercosis ------------------------------------------- */
  {
    id: "seizures-33",
    topic: T,
    alsoTopics: ["infectious-diseases"],
    title: "Seizure at work in a recent immigrant",
    stem:
      "A 34-year-old man who moved to Canada from Guatemala 2 years ago is brought to the emergency department after a seizure at work. Coworkers saw his right hand and the right side of his face twitch, then he fell and had generalized jerking for about 1 minute. He is now back to baseline. He has had no headache, fever or prior seizures, and he takes no medications. The neurological examination is normal. Capillary glucose is 5.7 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "132/78 mmHg", o2sat: "98% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial investigation for this patient?",
        options: [
          "EEG before discharge",
          "Lumbar puncture and CSF",
          "Neuroimaging with CT today",
          "Serum prolactin level",
          "Stool ova and parasites",
        ],
        correct: 2,
        explanation:
          "A first seizure with a focal onset, twitching of the right hand and face, suggests a structural lesion in the left hemisphere and needs neuroimaging. He comes from a region where neurocysticercosis is a leading cause of seizures, and guidelines use CT and MRI for its diagnosis. Stool testing does not diagnose brain cysts. EEG does not show the cause. He has no fever or meningism, so lumbar puncture is not indicated. Prolactin does not change care.",
        keyFeature: { topic: T, n: 6 },
        source: "ncc",
      },
      {
        id: "q2",
        kind: "single",
        update: "CT shows a single 12 mm cyst in the left frontal cortex with an eccentric bright dot inside and surrounding edema. There are no calcifications or hydrocephalus.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Bacterial brain abscess",
          "Cerebral toxoplasmosis",
          "High grade glioma",
          "Metastatic tumour",
          "Neurocysticercosis",
        ],
        correct: 4,
        explanation:
          "A cyst containing an eccentric dot, the scolex, is characteristic of neurocysticercosis, and he lived in an endemic area. An abscess would usually come with fever and a thick enhancing rim without a scolex. Toxoplasmosis occurs with immune suppression, which is not described. A glioma or metastasis would not contain a scolex, and he has no known cancer.",
        keyFeature: { topic: T, n: 6 },
        source: "ncc",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial management in the emergency department?",
        options: [
          "Albendazole alone today",
          "Antiseizure drug and referral",
          "Neurosurgical excision",
          "Observation without treatment",
          "Praziquantel alone today",
        ],
        correct: 1,
        explanation:
          "Patients with seizures from neurocysticercosis should receive antiseizure medication, and specialist follow up plans antiparasitic treatment. Antiparasitic drugs are given with corticosteroids after an eye examination, because killing the cyst causes inflammation and more edema. Starting albendazole or praziquantel alone is therefore unsafe. A single parenchymal cyst does not need surgery. Observation without treatment leaves him at risk of more seizures.",
        keyFeature: { topic: T, n: 4 },
        source: "ncc",
      },
    ],
    sources: [S.ncc],
    ...META,
  },

  /* 34 Recurrence after antiseizure drug withdrawal --------------------- */
  {
    id: "seizures-34",
    topic: T,
    title: "Found on the floor by her roommate",
    stem:
      "A 29-year-old woman is brought to the emergency department by her roommate, who found her on the bedroom floor 40 minutes ago, confused and with wet clothes. No one saw what happened. She has generalized epilepsy and was seizure free for 3 years on levetiracetam, so her neurologist tapered it off, and she took the last dose 2 months ago. She takes no other medication and does not drink alcohol. She is now alert and oriented, recalls nothing of the event and says her muscles ache. There is a bite mark on the right side of her tongue. There is no head or scalp injury. The neurological examination is normal. Capillary glucose is 5.2 mmol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "92/minute", resp: "16/minute", bp: "124/76 mmHg", o2sat: "98% on room air", weight: "60 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely explanation for this event?",
        options: [
          "Generalized seizure",
          "Mechanical trip and fall",
          "Orthostatic hypotension",
          "Panic attack with fainting",
          "Vasovagal syncope with jerks",
        ],
        correct: 0,
        explanation:
          "Confusion afterward, wet clothes, aching muscles, amnesia and a bite on the side of her tongue point to a generalized seizure that no one saw, 2 months after her epilepsy medication was stopped. In a meta-analysis a bitten tongue had a specificity of 96% for an epileptic seizure over syncope. Vasovagal syncope and orthostatic hypotension recover quickly and seldom cause a tongue bite. She has no head injury, and a simple fall does not explain the bite or the incontinence. A panic attack does not cause a tongue bite or incontinence.",
        keyFeature: { topic: T, n: 1 },
        source: "brigo",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most useful in her emergency department assessment?",
        options: [
          "EEG in the emergency department",
          "Electrolytes and calcium",
          "Levetiracetam serum level",
          "Serum prolactin level",
          "Urine drug screen",
        ],
        correct: 1,
        explanation:
          "Few tests are needed after a seizure with a clear trigger in known epilepsy. NICE advises keeping metabolic disturbance in mind, so electrolytes and calcium are checked along with the glucose already measured. Her levetiracetam was stopped 2 months ago, so a level will be zero and adds nothing. A prolactin level does not change her care. A broad urine drug screen rarely changes management, and she gives no history of drug use. An EEG in the emergency department does not change immediate care, and NICE warns that an EEG cannot exclude epilepsy.",
        keyFeature: { topic: T, n: 7 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging plan for her?",
        options: [
          "CT angiography of the head",
          "CT head before discharge",
          "CT head with contrast",
          "MRI brain within 24 hours",
          "No neuroimaging now",
        ],
        correct: 4,
        explanation:
          "NICE advises against CT for people with established epilepsy who present after a typical seizure unless there are other concerns. She has known generalized epilepsy, a clear trigger in the stopped levetiracetam, full recovery, no head injury and a normal examination. Plain or contrast CT, CT angiography and urgent MRI would add radiation, cost or delay without changing her care.",
        keyFeature: { topic: T, n: 7 },
        source: "nice",
      },
      {
        id: "q4",
        kind: "single",
        update: "After discussion with her neurologist, she restarts levetiracetam at her previous dose. She drives a car to work.",
        prompt: "Which of the following is the most appropriate advice about driving her car?",
        options: [
          "Drive as usual from tomorrow",
          "Drive once her EEG is normal",
          "Wait 12 months seizure free",
          "Wait 3 months seizure free",
          "Wait 5 years seizure free",
        ],
        correct: 3,
        explanation:
          "The CMA Driver's Guide advises that a private driver whose seizures recur after medication is withdrawn may resume driving after 3 months seizure free on the reinstated medication. Twelve months applies to other situations, such as auras alone or a single seizure in a commercial driver without epilepsy. Five years applies to commercial drivers with epilepsy. Driving from tomorrow ignores the risk of early recurrence. A normal EEG does not show that her seizures are controlled.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.brigo, S.nice, S.cma],
    ...META,
    version: 2,
  },

  /* 35 First seizure in a roofer and pilot ------------------------------ */
  {
    id: "seizures-35",
    topic: T,
    title: "First seizure in a roofer",
    stem:
      "A 38-year-old man is brought to the emergency department after a witnessed generalized tonic-clonic seizure at home that lasted 2 minutes. He has never had a seizure. He works as a roofer and holds a private pilot licence. He takes no medication, drinks 2 beers a week, uses no drugs and slept normally last night. He has no fever, headache or neck stiffness. He is now alert and oriented with a normal neurological examination. There is a bite on the side of his tongue. Glucose, electrolytes, calcium and creatinine are normal. A non-contrast CT head is normal.",
    vitals: { temperature: "37.0°C oral", pulse: "84/minute", resp: "16/minute", bp: "128/80 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional tests is most important before he leaves the emergency department?",
        options: [
          "12-lead ECG",
          "EEG in the ED",
          "Lumbar puncture",
          "Serum prolactin",
          "Urine drug screen",
        ],
        correct: 0,
        explanation:
          "NICE advises a 12-lead ECG for everyone after a first suspected seizure, because cardiac conditions can mimic an epileptic seizure. If an EEG is requested, NICE advises doing it as soon as possible, ideally within 72 hours, as part of the first seizure assessment rather than in the ED. A lumbar puncture is for suspected infection, and he has no fever, headache or neck stiffness. A prolactin level does not change his care. A broad urine drug screen rarely changes management, and he uses no drugs.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about his work as a roofer?",
        options: [
          "Continue roofing with a harness",
          "Return to roofing after 24 hours",
          "Roof only with a coworker present",
          "Stop working at heights",
          "Work at heights once CT is normal",
        ],
        correct: 3,
        explanation:
          "NICE lists avoiding working at heights among the safety measures to discuss after a seizure, and a roofer who seizes on a roof risks a fatal fall. A harness or a coworker does not prevent a fall or the injury a seizure causes on a roof. A normal CT or 24 hours without a seizure does not remove the risk of recurrence. He should stay off roofs until his specialist assessment and advice about recurrence.",
        keyFeature: { topic: T, n: 5 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following best describes your obligation regarding his private pilot licence?",
        options: [
          "Advise him to self-report only",
          "Inform the aviation medical adviser",
          "Report only after a second seizure",
          "Wait for his neurologist to decide",
          "No action if he agrees to stop flying",
        ],
        correct: 1,
        explanation:
          "Under the federal Aeronautics Act, a physician who believes a patient holds an aviation document that requires medical fitness and has a condition likely to be a hazard to aviation safety must inform a medical adviser designated by the Minister without delay. The duty applies in every province and is not replaced by his agreement or by self-reporting. Waiting for a second seizure or a neurologist delays a report that is already required. The Act protects a physician who reports in good faith.",
        keyFeature: { topic: T, n: 5 },
        source: "aero",
      },
    ],
    sources: [S.nice, S.aero],
    ...META,
    version: 2,
  },

  /* 36 Phenytoin level with low albumin --------------------------------- */
  {
    id: "seizures-36",
    topic: T,
    title: "Seizure after four quiet years",
    stem:
      "A 58-year-old woman with epilepsy after a head injury 20 years ago is brought to the emergency department after a generalized tonic-clonic seizure at home that lasted 2 minutes. She has been seizure free for 4 years on phenytoin 300 mg daily, and her pharmacy confirms she refills it on time. She has alcohol-related cirrhosis and has not drunk alcohol for 3 years. For 2 days she has had fever and burning on urination. She is now alert and oriented. Her neck is supple and the neurological examination is normal. Total phenytoin is 28 umol/L (reference 40 to 80 umol/L), albumin 22 g/L, creatinine 68 umol/L, sodium 137 mmol/L and glucose 6.0 mmol/L.",
    vitals: { temperature: "38.4°C oral", pulse: "102/minute", resp: "18/minute", bp: "118/70 mmHg", o2sat: "97% on room air", weight: "70 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best explains why her total phenytoin level may be misleading?",
        options: [
          "Cirrhosis speeds phenytoin clearance",
          "Fever lowers the assay reading",
          "Low albumin raises the free fraction",
          "Missed doses lower the total level",
          "Urinary infection increases binding",
        ],
        correct: 2,
        explanation:
          "Phenytoin is highly bound to albumin, and with an albumin of 22 g/L more of the drug is free and active than the total level suggests. Charlier and colleagues note that total levels mislead in hypoalbuminemia and that a free level should be measured directly. Her pharmacy confirms she refills on time, so missed doses do not explain the result. Cirrhosis does not speed phenytoin clearance. Fever does not change the assay, and an infection does not increase protein binding.",
        keyFeature: { topic: T, n: 7 },
        source: "charlier",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following investigations are most appropriate to guide her care?",
        options: [
          "CT head without contrast",
          "EEG in the emergency department",
          "Free phenytoin level",
          "Lumbar puncture",
          "Serum prolactin",
          "Urinalysis and urine culture",
        ],
        select: 2,
        correct: [2, 5],
        explanation:
          "A free phenytoin level shows whether the active drug is in range before anyone changes her dose. Fever and burning on urination point to a urinary infection as the trigger for this breakthrough seizure, so a urinalysis and culture look for it. NICE advises against CT for people with established epilepsy after a typical seizure unless there are other concerns, and she has recovered with a normal examination. Her neck is supple, so a lumbar puncture is not needed. An EEG and a prolactin level do not change her emergency care.",
        keyFeature: { topic: T, n: 7 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her free phenytoin level is in the therapeutic range. A urinary infection is confirmed and treated. She drives a car.",
        prompt: "Which of the following is the most appropriate advice about her driving?",
        options: [
          "Drive after 1 week if afebrile",
          "Drive as usual once treated",
          "Drive once her EEG is normal",
          "Wait 6 months seizure free",
          "Wait 5 years seizure free",
        ],
        correct: 3,
        explanation:
          "The CMA Driver's Guide advises that a private driver with epilepsy may drive once seizure free for 6 months on medication, with confidence in adherence. Treating the infection does not remove the need for that interval. Five years applies to commercial drivers with epilepsy. One week without fever is not a recognized interval. A normal EEG does not show that seizures are controlled.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.charlier, S.nice, S.cma],
    ...META,
    version: 2,
  },

  /* 37 Morning jerks in a teenager ----------------------------------- */
  {
    id: "seizures-37",
    topic: T,
    title: "Teenager with a seizure after a party",
    stem:
      "A 16-year-old girl is brought to the emergency department by her parents after a generalized tonic clonic seizure at 07:00, the morning after a party where she slept 3 hours. She is now back to baseline. On direct questioning she describes sudden jerks of her arms most mornings for a year, often making her spill cereal or drop her toothbrush. She thought she was clumsy. She has no other history and takes no medications. She has a learner's licence. The neurological examination is normal. Glucose is 5.3 mmol/L and a pregnancy test is negative.",
    vitals: { temperature: "36.7°C oral", pulse: "88/minute", resp: "16/minute", bp: "110/68 mmHg", o2sat: "99% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following history findings most changes the interpretation of this as a first seizure?",
        options: [
          "Absence of prior convulsions",
          "Early morning myoclonic jerks",
          "Recent party attendance",
          "Sleep deprivation last night",
          "Timing of the seizure at 07:00",
        ],
        correct: 1,
        explanation:
          "A year of morning arm jerks that make her drop things are myoclonic seizures, so this convulsion is not her first seizure. The pattern suggests juvenile myoclonic epilepsy, and epilepsy can be diagnosed once an epilepsy syndrome is recognized. Sleep deprivation and early morning timing are typical triggers in this syndrome but do not change the diagnosis on their own. The absence of prior convulsions misses the myoclonic seizures.",
        keyFeature: { topic: T, n: 1 },
        source: "fisher",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate plan to confirm the likely diagnosis?",
        options: [
          "CT head without contrast",
          "Lumbar puncture and CSF",
          "MRI brain with contrast",
          "Outpatient EEG and neurology",
          "Serum prolactin level",
        ],
        correct: 3,
        explanation:
          "Her year of myoclonic jerks means this is not a first seizure, and a routine awake EEG with provoking manoeuvres such as photic stimulation supports the diagnosis of a generalized epilepsy syndrome. NICE advises EEG to support the diagnosis and identify the epilepsy syndrome. She is well with a normal examination, so it can be arranged as an outpatient with neurology follow up. Imaging is guided by findings such as focal signs, which she does not have. She has no fever or meningism for lumbar puncture. Prolactin does not confirm a syndrome.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her learner's licence?",
        options: [
          "Continue under learner supervision",
          "Drive only in daylight",
          "Resume after a normal EEG",
          "Resume after 1 week of good sleep",
          "Stop until 6 months seizure free",
        ],
        correct: 4,
        explanation:
          "For epilepsy, the CMA guide allows private driving only after at least 6 months seizure free on medication, with confidence in adherence, and people with juvenile myoclonic epilepsy may not drive any class of vehicle unless they take appropriate antiseizure medication. A supervising adult cannot prevent a crash if she has a seizure. A normal EEG does not exclude epilepsy. A week of good sleep does not remove the risk. Daylight driving does not reduce seizure risk.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most important counselling point about seizure triggers for her?",
        options: [
          "Avoid all physical exercise",
          "Avoid sleep loss and alcohol",
          "Eliminate dairy from her diet",
          "Limit fluids in the evening",
          "Stop using her mobile phone",
        ],
        correct: 1,
        explanation:
          "Her convulsion followed a night of 3 hours of sleep, and sleep deprivation and alcohol are strong triggers in juvenile myoclonic epilepsy. Regular sleep lowers her risk. Exercise is encouraged with sensible precautions. Diet, evening fluids and phone use are not established triggers.",
        keyFeature: { topic: T, n: 7 },
        source: "rosen-ch88",
      },
    ],
    sources: [S.fisher, S.nice, S.cma, S.rosen88],
    ...META,
  },

  /* 38 Seizure after head injury in a rural hospital ----------------- */
  {
    id: "seizures-38",
    topic: T,
    alsoTopics: ["multiple-trauma"],
    title: "Young man after a vehicle rollover",
    stem:
      "You are working in a rural hospital emergency department with CT but no neurosurgeon. A 22-year-old man is brought in by ambulance 40 minutes after rolling an all-terrain vehicle without a helmet. He had a 1 minute generalized seizure at the scene. His GCS is 7 (E1 V2 M4). His right pupil is 5 mm and sluggish, and the left is 3 mm and reactive. He has a boggy right temporal scalp swelling. Capillary glucose is 7.9 mmol/L. He is intubated for airway protection. CT shows a 2 cm right epidural hematoma with midline shift.",
    vitals: { temperature: "36.4°C tympanic", pulse: "58/minute", resp: "14/minute", bp: "176/98 mmHg", o2sat: "99% on a ventilator with FiO2 0.4", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        update: "While transfer is arranged, he has a generalized seizure that has lasted 3 minutes despite a propofol infusion.",
        prompt: "Which of the following is the most appropriate medication to stop this seizure?",
        options: [
          "Dexamethasone 10 mg IV",
          "Lorazepam 4 mg IV",
          "Mannitol 75 g IV",
          "Phenytoin 300 mg PO",
          "Rocuronium 100 mg IV",
        ],
        correct: 1,
        explanation:
          "Seizures raise intracranial pressure and must be stopped quickly, and a benzodiazepine is first line. Rocuronium hides the convulsion but not the seizure. Mannitol treats raised pressure but does not stop a seizure. Oral phenytoin is far too slow. Corticosteroids are not recommended in traumatic brain injury.",
        keyFeature: { topic: T, n: 4 },
        source: "btf",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate additional antiseizure medication once the seizure stops?",
        options: [
          "Carbamazepine 200 mg by tube",
          "Fosphenytoin 1 500 mg PE IV",
          "Fosphenytoin 300 mg PE IV",
          "Topiramate 100 mg by tube",
          "Valproic acid 500 mg IV",
        ],
        correct: 1,
        explanation:
          "He has had early post-traumatic seizures and needs a full IV load. Fosphenytoin 20 mg PE/kg is 1 500 mg PE for 75 kg. Phenytoin is the agent recommended to reduce early seizures after severe traumatic brain injury. Fosphenytoin 300 mg PE is only 4 mg PE/kg. Enteral carbamazepine and topiramate act too slowly. Valproate did not prevent early seizures better than phenytoin, and a trial found a trend toward higher mortality.",
        keyFeature: { topic: T, n: 4 },
        source: "btf",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most important treatment of the cause of his seizures?",
        options: [
          "Hyperventilation to PaCO2 25 mmHg",
          "Hypothermia to 33°C",
          "Methylprednisolone infusion",
          "Pentobarbital infusion",
          "Urgent surgical evacuation",
        ],
        correct: 4,
        explanation:
          "An acute epidural hematoma in a comatose patient with anisocoria, here a GCS of 7 and a dilated right pupil, should be evacuated as soon as possible, which here means rapid transfer to neurosurgery. Prolonged hyperventilation to 25 mmHg or lower is not recommended because it reduces cerebral blood flow. Early prophylactic hypothermia and high dose barbiturates are not recommended as first steps. Steroids increase mortality in head injury.",
        keyFeature: { topic: T, n: 2 },
        source: "bullock",
      },
    ],
    sources: [S.btf, S.bullock],
    ...META,
  },

  /* 39 Status with no-intubation wishes on imipenem --------------------- */
  {
    id: "seizures-39",
    topic: T,
    alsoTopics: ["delirium-agitation"],
    title: "Long-term care resident still jerking",
    stem:
      "An 87-year-old woman is brought to the emergency department by ambulance from her long-term care home with a generalized seizure that began 20 minutes ago. She has advanced Alzheimer dementia and needs help with all care. Her advance directive, confirmed by her son by phone, declines intubation and ICU admission but accepts other treatment. Four days ago she started imipenem for a urinary infection. Last week her creatinine was 132 umol/L. She has no history of seizures. Paramedics gave midazolam 5 mg IM 10 minutes ago. She is still jerking all four limbs, with gurgling breathing. An IV is in place. Capillary glucose is 7.2 mmol/L and a point-of-care sodium is 138 mmol/L.",
    vitals: { temperature: "37.9°C rectal", pulse: "118/minute", resp: "24/minute", bp: "164/88 mmHg", o2sat: "90% on 6 L/minute by face mask", weight: "45 kg" },
    questions: [
      {
        id: "q1",
        kind: "menu",
        prompt: "Which of the following are the most appropriate immediate actions for her now?",
        options: [
          "Bite block between the teeth",
          "Intubation with rocuronium",
          "Lateral position with oral suction",
          "Lorazepam 4 mg IV",
          "Oxygen by non-rebreather mask",
          "Phenytoin 300 mg IV",
          "Physical restraint of her limbs",
        ],
        select: 3,
        correct: [2, 3, 4],
        explanation:
          "She is still seizing 20 minutes after onset and 10 minutes after IM midazolam, so a second benzodiazepine dose is due, and lorazepam 0.1 mg/kg capped at 4 mg is 4 mg for 45 kg. Lying her on her side with suction clears the gurgling secretions, and high flow oxygen treats a saturation of 90%. Her directive declines intubation, so rocuronium and a tube are not offered. Nothing goes between the teeth of a seizing patient. Restraining the limbs causes injury. Phenytoin 300 mg is far below a 20 mg/kg load of 900 mg, and it is a second-line drug.",
        keyFeature: { topic: T, n: 4 },
        source: "ncs",
      },
      {
        id: "q2",
        kind: "single",
        update: "Five minutes after treatment she is still seizing.",
        prompt: "Which of the following is the most appropriate next medication, given her goals of care?",
        options: [
          "diazepam 10 mg IV",
          "levetiracetam 2 700 mg IV",
          "midazolam infusion 0.2 mg/kg/hour",
          "phenobarbital 900 mg IV",
          "propofol infusion 2 mg/kg/hour",
        ],
        correct: 1,
        explanation:
          "After two benzodiazepine doses she needs a second-line drug. Levetiracetam 60 mg/kg is 60 x 45 = 2 700 mg, below the 4 500 mg maximum, and the NCS guideline lists few serious adverse effects for it, which matters because she has declined intubation. Phenobarbital 20 mg/kg, or 900 mg, adds respiratory depression and hypotension. Midazolam and propofol infusions are for refractory status and require mechanical ventilation. A third benzodiazepine dose adds sedation after two doses have failed.",
        keyFeature: { topic: T, n: 4 },
        source: "ncs",
      },
      {
        id: "q3",
        kind: "single",
        update: "Her seizures stop.",
        prompt: "Which of the following is the most likely provoking factor for her seizures?",
        options: [
          "Alzheimer dementia alone",
          "Fever from the urinary infection",
          "Imipenem neurotoxicity",
          "New ischemic stroke",
          "Unrecognized hyponatremia",
        ],
        correct: 2,
        explanation:
          "In a meta-analysis imipenem was the only carbapenem linked to more seizures than other antibiotics, adding about 4 seizures per 1 000 patients, with an odds ratio of 3.5. She started it 4 days ago, has no history of seizures, and her age and creatinine of 132 umol/L at 45 kg make accumulation more likely. Advanced dementia raises seizure risk but does not explain a sudden onset of status now. A temperature of 37.9°C does not cause seizures in an adult. Her sodium of 138 mmol/L is normal. A stroke remains possible and imaging will look for one, but the new drug is the clear exposure.",
        keyFeature: { topic: T, n: 2 },
        source: "cannon",
      },
    ],
    sources: [{ ...S.ncs, url: "https://doi.org/10.1007/s12028-012-9695-z" }, S.cannon],
    ...META,
    version: 2,
  },

  /* 40 Recurrent spells in an older man ------------------------------ */
  {
    id: "seizures-40",
    topic: T,
    title: "Man found confused in his parked car",
    stem:
      "A 72-year-old man is brought to the emergency department by his daughter. He was found sitting in his parked car at a grocery store, confused, 30 minutes after leaving home. Over 3 months he has had several brief spells in which he stops talking, stares, smacks his lips and picks at his clothes for about 1 minute. Afterward he is confused for about 15 minutes and does not remember the spell. Last week he fell and bruised his hip during one. He has hypertension and type 2 diabetes treated with metformin. He is now alert and oriented. The neurological examination is normal. Capillary glucose is 6.8 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "78/minute", resp: "16/minute", bp: "150/86 mmHg", o2sat: "97% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis for his recurrent spells?",
        options: [
          "Focal impaired awareness seizures",
          "Hypoglycemic episodes",
          "Recurrent vasovagal syncope",
          "Transient global amnesia",
          "Transient ischemic attacks",
        ],
        correct: 0,
        explanation:
          "Brief repeated spells of staring with lip smacking and picking at clothes, then 15 minutes of confusion and no memory of the event, are focal seizures with impaired awareness. In older adults new epilepsy often shows up as confusion or unexplained falls. Transient global amnesia lasts hours and has no automatisms. Transient ischemic attacks cause loss of function, not repetitive movements. Metformin alone rarely causes hypoglycemia, and his glucose is normal. Vasovagal syncope does not cause automatisms or prolonged confusion.",
        keyFeature: { topic: T, n: 1 },
        source: "ilae-temporal",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation to look for the cause of his spells?",
        options: [
          "Carotid Doppler ultrasound",
          "Holter monitor for 48 hours",
          "Lying and standing BP",
          "MRI brain and outpatient EEG",
          "Tilt table test referral",
        ],
        correct: 3,
        explanation:
          "NICE advises an MRI for people diagnosed with epilepsy, other than idiopathic generalized epilepsy, to look for a structural cause. A routine EEG supports the diagnosis and gives information about the seizure type. Holter monitoring, lying and standing BP and tilt testing investigate syncope, and these spells are not syncope. Carotid ultrasound does not explain stereotyped automatisms.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about driving for this patient?",
        options: [
          "Drive only short distances",
          "Drive only with his daughter",
          "Keep driving until the EEG",
          "Stop driving from today",
          "Wait for the MRI before stopping",
        ],
        correct: 3,
        explanation:
          "He was found confused in his car, and spells of impaired awareness make driving unsafe. The CMA guide states that any seizure is grounds for stopping all driving at once while the evaluation is completed. Short trips or a passenger do not prevent a crash during a spell. Waiting for the EEG or MRI leaves him driving with an untreated seizure disorder.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.ilaeTemporal, S.nice, S.cma],
    ...META,
  },

  /* 41 Cerebral hyperperfusion after carotid endarterectomy ------------- */
  {
    id: "seizures-41",
    topic: T,
    alsoTopics: ["cva", "headache"],
    title: "Headache and a seizure after carotid surgery",
    stem:
      "A 71-year-old man is brought to the emergency department by ambulance after a generalized tonic-clonic seizure at home that lasted 2 minutes. Five days ago he had a left carotid endarterectomy for a 90% stenosis found after a brief episode of right arm weakness, and he went home the next day. Since yesterday he has had a severe, throbbing left-sided headache. He stopped his amlodipine after surgery because he felt dizzy, and he still takes ASA and atorvastatin. He does not drink alcohol and has never had a seizure. He is drowsy but oriented, with no focal weakness. The neck wound is clean and flat. Capillary glucose is 6.8 mmol/L and sodium is 138 mmol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "84/minute", resp: "18/minute", bp: "214/112 mmHg", o2sat: "96% on room air", weight: "80 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his seizure?",
        options: [
          "Alcohol withdrawal seizure",
          "Cerebral hyperperfusion syndrome",
          "Embolic stroke from the repair",
          "Postoperative hyponatremia",
          "Unprovoked epileptic seizure",
        ],
        correct: 1,
        explanation:
          "A severe headache on the side of the operation, a seizure and a BP of 214/112 mmHg, 5 days after endarterectomy of a 90% stenosis, point to cerebral hyperperfusion syndrome. Van Mook and colleagues describe headache, seizures and focal deficits after repair of a high-grade stenosis, with high BP as a key risk factor. An embolic stroke would usually cause a focal deficit, and he has none. His sodium of 138 mmol/L is normal, and he does not drink alcohol. A new unprovoked seizure does not explain the headache and severe hypertension after this operation.",
        keyFeature: { topic: T, n: 2 },
        source: "van-mook",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate drug to lower his BP?",
        options: [
          "hydralazine 10 mg IV",
          "labetalol 20 mg IV",
          "nifedipine 10 mg PO",
          "nitroglycerin 50 mcg/minute IV",
          "nitroprusside 0.5 mcg/kg/minute IV",
        ],
        correct: 1,
        explanation:
          "Van Mook and colleagues base treatment on strict BP control with labetalol or clonidine until the brain's autoregulation recovers, because high pressure drives the excess flow into the operated territory. They advise against calcium channel blockers such as nifedipine and against direct vasodilators such as hydralazine, nitroglycerin and nitroprusside. These drugs dilate the cerebral vessels and can add to the hyperperfusion. Labetalol lowers BP without that effect and can be repeated or given by infusion.",
        keyFeature: { topic: T, n: 2 },
        source: "van-mook",
      },
      {
        id: "q3",
        kind: "single",
        update: "His BP is brought down to 158/88 mmHg.",
        prompt: "Which of the following investigations is most appropriate next for him?",
        options: [
          "Duplex scan of the carotid",
          "EEG within 24 hours",
          "Lumbar puncture",
          "MRI brain in 6 weeks",
          "Non-contrast CT head now",
        ],
        correct: 4,
        explanation:
          "A first seizure with a severe headache after endarterectomy needs a non-contrast CT head now. Van Mook and colleagues describe brain edema and intracerebral hemorrhage as the serious complications of hyperperfusion, and CT shows a hemorrhage quickly. A duplex scan looks for narrowing or clot at the repair but does not image the brain, and a clot would not explain a headache with severe hypertension. An EEG does not look for bleeding. A lumbar puncture does not answer the question of hemorrhage and adds risk if there is mass effect. An MRI in 6 weeks is far too late.",
        keyFeature: { topic: T, n: 6 },
        source: "van-mook",
      },
    ],
    sources: [S.vanMook],
    ...META,
    version: 2,
  },

  /* 42 Confusion in a dialysis patient on an antibiotic -------------- */
  {
    id: "seizures-42",
    topic: T,
    alsoTopics: ["delirium-agitation"],
    title: "Dialysis patient who is not herself",
    stem:
      "A 68-year-old woman on hemodialysis three times a week is brought to the emergency department with 2 days of worsening confusion. She was discharged 5 days ago on cefepime 2 g IV every 12 hours for a diabetic foot infection. Her last dialysis was yesterday and was uneventful. She drifts between drowsiness and brief periods of normal speech. She has irregular jerks of her arms and face. Her neck is supple. Eye movements are full and she has no nystagmus. Glucose 7.2 mmol/L, sodium 136 mmol/L, potassium 5.0 mmol/L, calcium normal. CT head shows only old small vessel changes.",
    vitals: { temperature: "37.4°C oral", pulse: "92/minute", resp: "16/minute", bp: "146/78 mmHg", o2sat: "96% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her change in mental status?",
        options: [
          "Cefepime neurotoxicity",
          "Dialysis disequilibrium",
          "Septic encephalopathy",
          "Uremic encephalopathy",
          "Wernicke encephalopathy",
        ],
        correct: 0,
        explanation:
          "Cefepime 2 g every 12 hours is a large dose for a patient on dialysis, and kidney failure with excess dosing are the main risk factors for cefepime neurotoxicity. Its features include fluctuating encephalopathy, myoclonus and nonconvulsive seizures. Dialysis disequilibrium occurs during or just after a session, usually early in dialysis care. She is dialyzed regularly, so uremia is unlikely. She has no fever to suggest sepsis, and her eye movements are normal.",
        keyFeature: { topic: T, n: 2 },
        source: "payne",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most important for her now?",
        options: [
          "EEG as soon as possible",
          "Lumbar puncture and CSF",
          "MRI brain with diffusion",
          "Serum ammonia level",
          "Thiamine blood level",
        ],
        correct: 0,
        explanation:
          "Fluctuating awareness with myoclonus in a patient on cefepime raises concern for nonconvulsive status epilepticus, which only EEG can confirm. Nonconvulsive seizures are a reported feature of cefepime neurotoxicity. Her CT is unremarkable, and MRI will not show seizure activity. She has no fever or meningism for lumbar puncture. Nothing suggests liver disease, and she has no eye signs of Wernicke encephalopathy.",
        keyFeature: { topic: T, n: 3 },
        source: "payne",
      },
      {
        id: "q3",
        kind: "single",
        update: "EEG shows nonconvulsive status epilepticus.",
        prompt: "Which of the following is the most important step in addition to antiseizure treatment?",
        options: [
          "Add meropenem to cover sepsis",
          "Continue cefepime at a lower dose",
          "Increase cefepime for sepsis",
          "Stop cefepime and arrange dialysis",
          "Wait for levels before acting",
        ],
        correct: 3,
        explanation:
          "Cefepime neurotoxicity usually resolves once the drug is stopped, and dialysis removes the drug faster in a patient without kidney function. Her foot infection can be treated with another agent. Continuing cefepime at any dose keeps the cause in place. Carbapenems can also lower the seizure threshold. Cefepime levels are not quickly available and should not delay stopping it.",
        keyFeature: { topic: T, n: 2 },
        source: "payne",
      },
    ],
    sources: [S.payne],
    ...META,
  },

  /* 43 Hypoglycemic seizure in type 1 diabetes -------------------------- */
  {
    id: "seizures-43",
    topic: T,
    alsoTopics: ["loc"],
    title: "Student found confused in bed",
    stem:
      "A 21-year-old man with type 1 diabetes is brought to the emergency department by his roommate, who found him sweaty and confused in bed at 07:30. He uses insulin glargine at bedtime and insulin lispro with meals. Last night he played 2 hours of hockey, drank 6 beers and skipped his bedtime snack. In triage he begins jerking all four limbs, and the jerking has now lasted 3 minutes. Two attempts at IV access fail. Capillary glucose is 1.6 mmol/L.",
    vitals: { temperature: "36.6°C tympanic", pulse: "124/minute", resp: "24/minute", bp: "142/84 mmHg", o2sat: "95% on room air", weight: "76 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate first treatment for him?",
        options: [
          "glucagon 1 mg IM",
          "glucose gel 15 g buccal",
          "midazolam 10 mg IM",
          "orange juice 200 mL PO",
          "thiamine 100 mg IM",
        ],
        correct: 0,
        explanation:
          "His seizure has a reversible cause, a glucose of 1.6 mmol/L, and IV access has failed. Diabetes Canada advises glucagon 1 mg SC or IM for severe hypoglycemia when no IV is available. Nothing goes into the mouth of a seizing patient, so gel and juice risk aspiration. IM midazolam is added if the seizure reaches 5 minutes, but it does not correct the glucose. Thiamine does not treat hypoglycemia.",
        keyFeature: { topic: T, n: 4 },
        source: "yale-hypo",
      },
      {
        id: "q2",
        kind: "single",
        update: "Ten minutes after treatment he stops jerking and wakes. His glucose is 5.8 mmol/L.",
        prompt: "Which of the following best explains his low glucose this morning?",
        options: [
          "Adrenal insufficiency",
          "Exercise and alcohol without a snack",
          "Gastroparesis delaying his meal",
          "Insulin-secreting tumour",
          "Lispro given at bedtime by mistake",
        ],
        correct: 1,
        explanation:
          "Diabetes Canada notes that the body's response to hypoglycemia is reduced during sleep and after exercise or alcohol, and he had 2 hours of hockey, 6 beers and no bedtime snack before a night of basal insulin. Nothing suggests he gave lispro at bedtime. Gastroparesis delays meal absorption, but he did not eat. Adrenal insufficiency and an insulin-secreting tumour are rare and not needed to explain a clear trigger.",
        keyFeature: { topic: T, n: 2 },
        source: "yale-hypo",
      },
      {
        id: "q3",
        kind: "single",
        update: "He has had no previous severe hypoglycemia. He drives to work.",
        prompt: "Which of the following is the most appropriate advice about his driving?",
        options: [
          "Check glucose before each drive",
          "Drive only on short trips",
          "Drive with no change in routine",
          "Report to the licensing body now",
          "Stop driving for 12 months",
        ],
        correct: 0,
        explanation:
          "Diabetes Canada advises drivers on insulin to consider checking glucose before driving and at least every 4 hours while driving, not to drive below 4.0 mmol/L, and to keep fast-acting carbohydrate within reach. A private driver notifies the licensing body after any severe hypoglycemia while driving in the past 12 months, or more than one severe episode while awake in the past 6 months. This single episode happened during sleep, so neither applies. Short trips do not remove the risk, and a 12-month ban has no basis here.",
        keyFeature: { topic: T, n: 5 },
        source: "houlden-driving",
      },
    ],
    sources: [S.yaleHypo, S.houldenDriving],
    ...META,
    version: 2,
  },

  /* 44 Hypomagnesemia from a proton pump inhibitor ---------------------- */
  {
    id: "seizures-44",
    topic: T,
    title: "Tingling hands and a seizure at 74",
    stem:
      "A 74-year-old woman is brought to the emergency department after a generalized seizure at home that lasted 2 minutes. For 3 days she has had cramps in her hands and tingling around her mouth. She has taken pantoprazole 40 mg daily for 9 years for reflux, with amlodipine, atorvastatin, cholecalciferol 1 000 units daily and acetaminophen as needed. She does not drink alcohol. She is now alert. Inflating the BP cuff causes spasm of her hand. Total calcium is 1.74 mmol/L with albumin 38 g/L, potassium 2.9 mmol/L, sodium 139 mmol/L, creatinine 72 umol/L and glucose 6.1 mmol/L. The QTc is 505 ms. An hour after calcium gluconate 2 g IV, her calcium is 1.76 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "18/minute", bp: "138/76 mmHg", o2sat: "97% on room air", weight: "58 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following tests is most likely to explain why her calcium has not corrected?",
        options: [
          "Parathyroid hormone level",
          "Serum magnesium",
          "Serum phosphate",
          "TSH and free T4",
          "Vitamin D level",
        ],
        correct: 1,
        explanation:
          "Low calcium with low potassium that does not correct with IV calcium, in a woman on a proton pump inhibitor for 9 years, points to magnesium deficiency. Ahmed and Mohammed explain that low magnesium impairs parathyroid hormone release and action, so the calcium cannot be corrected with calcium or vitamin D until magnesium is replaced. A parathyroid hormone level may be low or normal but does not name the cause. A vitamin D level or phosphate does not explain why IV calcium failed. Thyroid tests do not explain these findings.",
        keyFeature: { topic: T, n: 2 },
        source: "ahmed-mg",
      },
      {
        id: "q2",
        kind: "single",
        update: "Further blood tests have been sent, and the results will take an hour.",
        prompt: "Which of the following is the most appropriate treatment for her while the results are awaited?",
        options: [
          "calcitriol 0.5 mcg PO",
          "calcium gluconate 2 g IV again",
          "levetiracetam 1 000 mg IV",
          "magnesium sulfate 2 g IV",
          "potassium chloride 40 mmol IV",
        ],
        correct: 3,
        explanation:
          "Calcium that does not correct with IV calcium, a low potassium and 9 years of a proton pump inhibitor make magnesium deficiency the likely block, and she has had a seizure. Ahmed and Mohammed recommend IV magnesium sulfate for severe symptomatic hypomagnesemia. Replacing magnesium restores parathyroid hormone action, so calcium and potassium can then correct. Her creatinine is 72 umol/L, so there is little risk in giving it before the level returns. Another dose of calcium gluconate had only a brief effect and will fail again until magnesium is given. The kidney keeps losing potassium while magnesium is low, so potassium alone does not correct. Calcitriol acts slowly and does not fix the cause. Levetiracetam does not treat a metabolic cause of seizures.",
        keyFeature: { topic: T, n: 2 },
        source: "ahmed-mg",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following medications on her list most likely caused this presentation?",
        options: ["acetaminophen", "amlodipine", "atorvastatin", "cholecalciferol", "pantoprazole"],
        correct: 4,
        explanation:
          "Proton pump inhibitors are linked to severe hypomagnesemia, most often after more than 5 years of use, and it can cause tetany, seizures and arrhythmias. She has taken pantoprazole for 9 years, so its ongoing need should be reviewed and her magnesium rechecked. Amlodipine, atorvastatin and acetaminophen do not cause magnesium loss. Cholecalciferol at 1 000 units daily does not cause low calcium or low magnesium.",
        keyFeature: { topic: T, n: 2 },
        source: "benmassaoud",
      },
    ],
    sources: [S.ahmedMg, S.benmassaoud],
    ...META,
    version: 2,
  },

  /* 45 Nocturnal seizures in a bus driver ------------------------------- */
  {
    id: "seizures-45",
    topic: T,
    title: "Confused on three mornings",
    stem:
      "A 26-year-old woman presents to the emergency department because on three mornings over the past 2 months she has woken with a bitten tongue, aching muscles and a wet bed. Each time she felt confused for about half an hour. She lives alone, and no one has seen an event. She drives a school bus. She rarely drinks alcohol, uses no drugs and takes no medication. She has no daytime episodes and no history of head injury. Her examination is normal apart from a healing bite on the right side of her tongue. Glucose, electrolytes and a 12-lead ECG are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "76/minute", resp: "14/minute", bp: "118/72 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly suggests that these events are epileptic seizures?",
        options: [
          "Bed wet on waking",
          "ECG and glucose normal",
          "Events only during sleep",
          "Lateral tongue bite",
          "Three events in 2 months",
        ],
        correct: 3,
        explanation:
          "A bite on the side of the tongue is the finding that most strongly points to epileptic seizures. In a meta-analysis by Brigo and colleagues a bitten tongue had a specificity of 96% for epileptic seizures over syncope. Urinary incontinence occurs with both seizures and syncope and does not reliably separate them, so a wet bed adds little on its own. Events confined to sleep also fit parasomnias such as REM sleep behaviour disorder. Three events in 2 months shows that the problem recurs but not what it is. A normal ECG and glucose make some causes less likely but do not point to seizures.",
        keyFeature: { topic: T, n: 1 },
        source: "brigo",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following investigations are most appropriate to arrange for her?",
        options: [
          "CT head in the ED today",
          "Holter monitor for 48 hours",
          "MRI of the brain",
          "Polysomnography",
          "Routine EEG",
          "Serum prolactin",
          "Tilt-table test",
        ],
        select: 2,
        correct: [2, 4],
        explanation:
          "NICE advises a routine EEG when epilepsy is suspected, followed by a sleep-deprived EEG if it is normal, and an MRI for people diagnosed with epilepsy. Her normal examination and lack of head injury mean a CT in the ED adds little. Her ECG is normal and the events are not faints, so Holter and tilt-table testing do not answer the question. Polysomnography looks for sleep disorders rather than seizures. A prolactin level is not used to diagnose epilepsy.",
        keyFeature: { topic: T, n: 6 },
        source: "nice",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate advice about her school bus licence if epilepsy is confirmed?",
        options: [
          "Drive after 12 months seizure free",
          "Drive after 3 months seizure free",
          "Drive after 5 years seizure free",
          "Drive if her EEG is normal",
          "Drive on day routes only",
        ],
        correct: 2,
        explanation:
          "A school bus is a commercial vehicle, and the CMA Driver's Guide requires a commercial driver with epilepsy to be seizure free for 5 years, with or without medication. The guide keeps the same 5-year bar for commercial drivers whose seizures occur only in sleep. Three months applies to a private driver after a single unprovoked seizure, and 12 months to a commercial driver after a single seizure without a diagnosis of epilepsy. A normal EEG does not exclude epilepsy. Driving only by day does nothing for seizures that can happen at any time she falls asleep.",
        keyFeature: { topic: T, n: 5 },
        source: "cma",
      },
    ],
    sources: [S.brigo, S.nice, S.cma],
    ...META,
    version: 2,
  },

  /* 46 Hypocalcemia after thyroidectomy --------------------------------- */
  {
    id: "seizures-46",
    topic: T,
    title: "Tingling lips two days after neck surgery",
    stem:
      "A 46-year-old woman presents to the emergency department 2 days after a total thyroidectomy for Graves disease. She went home yesterday. Since this morning she has had tingling of her lips and fingers and cramps in her hands. In the waiting room she had a generalized seizure that lasted 1 minute. She is now drowsy but answers questions. Tapping in front of her ear makes the corner of her mouth twitch. The neck wound is flat and dry, and there is no stridor. She takes no medication. Capillary glucose is 5.8 mmol/L.",
    vitals: { temperature: "37.1°C oral", pulse: "88/minute", resp: "16/minute", bp: "126/74 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of her seizure?",
        options: [
          "Cerebral venous sinus thrombosis",
          "Neck hematoma with hypoxia",
          "Postoperative hypoparathyroidism",
          "Postoperative thyroid storm",
          "SIADH with hyponatremia",
        ],
        correct: 2,
        explanation:
          "Tingling of the lips and fingers, hand cramps and a positive Chvostek sign after a total thyroidectomy point to low calcium from parathyroid injury, which can cause seizures. The Society for Endocrinology names total thyroidectomy as the most common cause of acute symptomatic hypocalcemia in hospital. A flat, dry wound with no stridor and a saturation of 98% argue against a neck hematoma. She has no fever and a pulse of 88/minute, which do not suggest thyroid storm. Low sodium and venous sinus thrombosis do not explain perioral tingling and a positive Chvostek sign.",
        keyFeature: { topic: T, n: 2 },
        source: "turner",
      },
      {
        id: "q2",
        kind: "single",
        update: "Magnesium is 0.82 mmol/L and potassium 4.1 mmol/L. The other results will take an hour.",
        prompt: "Which of the following is the most appropriate initial treatment for her?",
        options: [
          "calcitriol 0.5 mcg PO twice daily",
          "calcium carbonate 1 250 mg PO",
          "calcium gluconate 2 g IV over 10 minutes",
          "levothyroxine 100 mcg PO",
          "magnesium sulfate 2 g IV over 15 minutes",
        ],
        correct: 2,
        explanation:
          "Tetany, a positive Chvostek sign and a seizure 2 days after total thyroidectomy make acute low calcium the working diagnosis, and it cannot wait an hour. The Society for Endocrinology treats low calcium with symptoms such as tetany or seizures as severe and advises 10 to 20 mL of 10% calcium gluconate, which is 1 to 2 g, in 50 to 100 mL of 5% dextrose IV over 10 minutes with ECG monitoring. Oral calcium and calcitriol are added for ongoing treatment but act too slowly now. Her magnesium of 0.82 mmol/L is normal, so magnesium is not the priority. Levothyroxine replaces thyroid hormone and does not treat low calcium.",
        keyFeature: { topic: T, n: 2 },
        source: "turner",
      },
      {
        id: "q3",
        kind: "single",
        update: "Before her treatment is started, she has another generalized seizure. It has now lasted 6 minutes.",
        prompt: "Which of the following is the most appropriate step now?",
        options: [
          "Fosphenytoin 1 280 mg PE IV",
          "Levetiracetam 3 840 mg IV",
          "Lorazepam 4 mg IV and treat the cause",
          "Rapid sequence intubation first",
          "Treat the cause only, then wait",
        ],
        correct: 2,
        explanation:
          "A seizure lasting 6 minutes is status epilepticus, and the AES guideline starts a benzodiazepine at 5 minutes, so lorazepam is given while the calcium gluconate that treats the cause runs. Treating the cause alone leaves the seizure untreated past the 5-minute point. Levetiracetam and fosphenytoin are second-line drugs after a benzodiazepine. Intubation is not the first step while she keeps her saturation and has not yet had a benzodiazepine.",
        keyFeature: { topic: T, n: 4 },
        source: "aes",
      },
    ],
    sources: [S.turner, S.aes],
    ...META,
    version: 2,
  },

  /* 47 Focal motor status from hyperglycemia ---------------------------- */
  {
    id: "seizures-47",
    topic: T,
    title: "Twitching hand that will not settle",
    stem:
      "A 63-year-old man is brought to the emergency department by his wife with 2 days of repeated jerking of his right hand and the right side of his face. The jerks come every few seconds for minutes at a time, and he stays fully aware and can talk during them. He has lost 5 kg over 3 months. He has no known medical problems and takes no medication. He does not drink alcohol or use drugs. He is alert and oriented. Rhythmic twitching of the right hand and face comes and goes during the examination. Between episodes, strength, sensation and speech are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "16/minute", bp: "146/86 mmHg", o2sat: "97% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following terms best describes the seizures he has had over the past 2 days?",
        options: [
          "Absence status epilepticus",
          "Focal impaired awareness seizures",
          "Focal motor status epilepticus",
          "Generalized convulsive status",
          "Psychogenic nonepileptic events",
        ],
        correct: 2,
        explanation:
          "Repeated focal motor jerking over 2 days with awareness kept is focal motor status epilepticus, the form called epilepsia partialis continua, which the ILAE lists among the types of status with prominent motor signs. His awareness is preserved, so these are not focal impaired awareness seizures or absence status. The jerks stay in one hand and one side of the face, so this is not generalized convulsive status. Rhythmic twitching confined to one side, seen during the examination, does not suggest a psychogenic cause.",
        keyFeature: { topic: T, n: 3 },
        source: "trinka",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following bedside tests is most likely to identify the cause?",
        options: [
          "Ammonia level",
          "Blood ethanol concentration",
          "Point-of-care glucose",
          "Serum prolactin",
          "Urine drug screen",
        ],
        correct: 2,
        explanation:
          "Nonketotic hyperglycemia is a recognized cause of persistent focal motor seizures, and Kumar stresses remembering it in exactly this situation, so a glucose check comes first in a man with unexplained weight loss. An ammonia level does not explain a focal seizure pattern in a man with no liver disease. He does not drink or use drugs, so an ethanol level and a broad urine drug screen add little. A prolactin level does not identify a cause.",
        keyFeature: { topic: T, n: 6 },
        source: "kumar",
      },
      {
        id: "q3",
        kind: "single",
        update: "Capillary glucose is 27.4 mmol/L. Sodium 132 mmol/L, bicarbonate 24 mmol/L, and blood ketones are negative.",
        prompt: "Which of the following is the most appropriate brain imaging plan for him?",
        options: [
          "CT angiography of head and neck",
          "MRI of the brain",
          "PET scan of the brain",
          "Skull radiographs",
          "No brain imaging needed",
        ],
        correct: 1,
        explanation:
          "Harden and colleagues found neuroimaging useful in emergency patients with seizures, especially with focal seizure onset, and high glucose does not exclude a tumour or stroke at the seizure focus. MRI shows the cortex in the most detail and can show the reversible changes of nonketotic hyperglycemia. Skipping imaging because a metabolic cause is found could miss a lesion. CT angiography looks at vessels rather than brain tissue. PET and skull radiographs have no role in this evaluation.",
        keyFeature: { topic: T, n: 6 },
        source: "harden",
      },
      {
        id: "q4",
        kind: "single",
        update: "Phenytoin is being considered for his ongoing jerking.",
        prompt: "Which of the following treatments is most likely to stop his seizures?",
        options: [
          "Fosphenytoin 1 640 mg PE IV",
          "Levetiracetam 4 500 mg IV",
          "Lorazepam 4 mg IV every 5 minutes",
          "Phenobarbital 1 640 mg IV",
          "Treat glucose with insulin",
        ],
        correct: 4,
        explanation:
          "Seizures from nonketotic hyperglycemia respond to correcting the glucose better than to antiseizure drugs. Kumar describes focal motor seizures that persisted despite a midazolam infusion and stopped once an insulin infusion brought the glucose below 8 mmol/L. Kumar also warns that phenytoin may do harm by worsening glycemic control, so fosphenytoin is a poor choice. Levetiracetam and phenobarbital do not treat the cause. Lorazepam every 5 minutes risks oversedation in a man who is awake and breathing well.",
        keyFeature: { topic: T, n: 2 },
        source: "kumar",
      },
    ],
    sources: [S.trinka, S.kumar, S.harden],
    ...META,
    version: 2,
  },
];
