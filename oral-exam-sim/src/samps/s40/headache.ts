// DRAFT. Written for exam practice only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { Samp } from "@/engine/samp";
import type { Source } from "@/engine/types";

const META = { reviewed: true, author: "Preceptor", version: 1 } as const;

const S = {
  trekk: { id: "trekk-migraine", citation: "TREKK. Bottom line recommendations: migraine. Version 1.0. 2025.", url: "https://trekk.ca/resources/bottom-line-recommendations-migraine" },
  cpsMig: { id: "cps-migraine", citation: "Rogers S, Orr SL, Parisien B, Chauvin-Kimoff L. Canadian Paediatric Society position statement. Pharmacological management of acute migraine attacks in children and adolescents presenting to the emergency department. Paediatr Child Health. 2025.", url: "https://cps.ca/en/documents/position/acute-migraine" },
  lewis: { id: "aan-child-imaging", citation: "Lewis DW, Ashwal S, Dahl G, et al. Practice parameter: evaluation of children and adolescents with recurrent headaches. Report of the Quality Standards Subcommittee of the American Academy of Neurology and the Practice Committee of the Child Neurology Society. Neurology. 2002." },
  ichd: { id: "ichd3", citation: "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018." },
  mollan: { id: "iih-consensus", citation: "Mollan SP, Davies B, Silver NC, et al. Idiopathic intracranial hypertension: consensus guidelines on management. J Neurol Neurosurg Psychiatry. 2018." },
  friedmanIih: { id: "iih-criteria", citation: "Friedman DI, Liu GT, Digre KB. Revised diagnostic criteria for the pseudotumor cerebri syndrome in adults and children. Neurology. 2013." },
  robbins: { id: "ahs-cluster", citation: "Robbins MS, Starling AJ, Pringsheim TM, Becker WJ, Schwedt TJ. Treatment of cluster headache: the American Headache Society evidence-based guidelines. Headache. 2016." },
  rosenCh17: { id: "rosen-ch17", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 17, Diplopia.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh18: { id: "rosen-ch18", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 18, Red and Painful Eye.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh33: { id: "rosen-ch33", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 33, Head Trauma.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh57: { id: "rosen-ch57", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 57, Ophthalmology.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh87: { id: "rosen-ch87", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 87, Stroke.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  rosenCh144: { id: "rosen-ch144", citation: "Walls RM, Hockberger RS, Gausche-Hill M, Erickson TB, Wilcox SR, editors. Rosen's Emergency Medicine: Concepts and Clinical Practice. 10th ed. Elsevier. 2023. Chapter 144, Cocaine and Other Sympathomimetics.", url: "https://www.us.elsevierhealth.com/rosens-emergency-medicine-concepts-and-clinical-practice-9780323757898.html" },
  ahaTox: { id: "aha-poisoning-2023", citation: "Lavonas EJ, Akpunonu PD, Arens AM, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life-threatening toxicity due to poisoning. Circulation. 2023.", url: "https://doi.org/10.1161/CIR.0000000000001161" },
  jonzzon: { id: "shunt-nof", citation: "Jonzzon S, Price A, Truong N, et al. Neuro-ophthalmological findings in pediatric ventricular shunt failure: a systematic review. J Neurosurg Pediatr. 2025.", url: "https://pubmed.ncbi.nlm.nih.gov/40215619/" },
  hanak: { id: "shunt-complications", citation: "Hanak BW, Bonow RH, Harris CA, Browd SR. Cerebrospinal fluid shunting complications in children. Pediatr Neurosurg. 2017.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5915307/" },
  ferras: { id: "vp-shunt-ed", citation: "Ferras M, McCauley N, Stead T, Ganti L, Desai B. Ventriculoperitoneal shunts in the emergency department: a review. Cureus. 2020.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7053664/" },
  smiljkovic: { id: "sinusitis-intracranial", citation: "Smiljkovic M, Tat J, Richardson SE, et al. A 20-year study of intracranial pyogenic complications of sinusitis in children. Pediatr Infect Dis J. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/37851970/" },
  ahaCvt: { id: "aha-cvt", citation: "Saposnik G, Bushnell C, Coutinho JM, et al. Diagnosis and management of cerebral venous thrombosis: a scientific statement from the American Heart Association. Stroke. 2024.", url: "https://pubmed.ncbi.nlm.nih.gov/38284265/" },
  weerasinghe: { id: "septic-cst", citation: "Weerasinghe D, Lueck CJ. Septic cavernous sinus thrombosis: case report and review of the literature. Neuroophthalmology. 2016.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5120738/" },
  wilneGuide: { id: "headsmart-guideline", citation: "Wilne S, Koller K, Collier J, et al. The diagnosis of brain tumours in children: a guideline to assist healthcare professionals in the assessment of children who may have a brain tumour. Arch Dis Child. 2010.", url: "https://pubmed.ncbi.nlm.nih.gov/20371594/" },
  wilneMeta: { id: "cns-tumour-presentation", citation: "Wilne S, Collier J, Kennedy C, et al. Presentation of childhood CNS tumours: a systematic review and meta-analysis. Lancet Oncol. 2007.", url: "https://pubmed.ncbi.nlm.nih.gov/17644483/" },
  kdigo: { id: "kdigo-gn", citation: "Kidney Disease: Improving Global Outcomes (KDIGO) Glomerular Diseases Work Group. KDIGO 2021 clinical practice guideline for the management of glomerular diseases. Kidney Int. 2021.", url: "https://pubmed.ncbi.nlm.nih.gov/34556256/" },
  ong: { id: "apsgn-review", citation: "Ong LT. Management and outcomes of acute post-streptococcal glomerulonephritis in children. World J Nephrol. 2022.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9521512/" },
  uppal: { id: "pdph-consensus", citation: "Uppal V, Russell R, Sondekoppam R, et al. Consensus practice guidelines on postdural puncture headache from a multisociety, international working group: a summary report. JAMA Netw Open. 2023." },
  nath: { id: "lp-needles", citation: "Nath S, Koziarz A, Badhiwala JH, et al. Atraumatic versus conventional lumbar puncture needles: a systematic review and meta-analysis. Lancet. 2018." },
  rajasekaran: { id: "uk-apoplexy", citation: "Rajasekaran S, Vanderpump M, Baldeweg S, et al. UK guidelines for the management of pituitary apoplexy. Clin Endocrinol (Oxf). 2011." },
  ducros: { id: "rcvs", citation: "Ducros A. Reversible cerebral vasoconstriction syndrome. Lancet Neurol. 2012." },
  esc: { id: "esc-htn-emerg", citation: "van den Born BH, Lip GYH, Brguljan-Hitij J, et al. ESC Council on hypertension position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother. 2019." },
  cpsMen: { id: "cps-meningitis", citation: "Le Saux N. Canadian Paediatric Society position statement. Guidelines for the management of suspected and confirmed bacterial meningitis in Canadian children older than 2 months of age. 2020, reaffirmed 2026.", url: "https://cps.ca/en/documents/position/management-of-bacterial-meningitis" },
  who: { id: "who-crypto", citation: "World Health Organization. Guidelines for diagnosing, preventing and managing cryptococcal disease among adults, adolescents and children living with HIV. 2022." },
  bendtsen: { id: "ean-tn", citation: "Bendtsen L, Zakrzewska JM, Abbott J, et al. European Academy of Neurology guideline on trigeminal neuralgia. Eur J Neurol. 2019." },
  greenberg: { id: "aha-ich", citation: "Greenberg SM, Ziai WC, Cordonnier C, et al. 2022 Guideline for the management of patients with spontaneous intracerebral hemorrhage: a guideline from the American Heart Association/American Stroke Association. Stroke. 2022." },
  cheema: { id: "sih-consensus", citation: "Cheema S, Anderson J, Angus-Leppan H, et al. Multidisciplinary consensus guideline for the diagnosis and management of spontaneous intracranial hypotension. J Neurol Neurosurg Psychiatry. 2023." },
  csbpr: { id: "csbpr", citation: "Heran M, Lindsay P, Gubitz G, et al. Canadian Stroke Best Practice Recommendations: acute stroke management, 7th edition practice guidelines update, 2022. Can J Neurol Sci. 2024." },
  chsEd: { id: "chs-ed", citation: "Orr SL, et al. Canadian Headache Society systematic review and recommendations on the treatment of migraine pain in emergency settings. Cephalalgia. 2015." },
  chsAcute: { id: "chs-acute", citation: "Worthington I, Pringsheim T, Gawel MJ, et al. Canadian Headache Society guideline: acute drug therapy for migraine headache. Can J Neurol Sci. 2013." },
  choosing: { id: "cwc-headache", citation: "Canadian Headache Society. Choosing Wisely Canada. Headache: four tests and treatments to question. 2020.", url: "https://choosingwiselycanada.org/recommendation/headache/" },
  sogc: { id: "sogc", citation: "Magee LA, et al. Guideline No. 426: Hypertensive disorders of pregnancy: diagnosis, prediction, prevention, and management. J Obstet Gynaecol Can. 2022." },
  acog: { id: "acog-ha", citation: "American College of Obstetricians and Gynecologists. Clinical Practice Guideline No. 3. Headaches in pregnancy and postpartum. Obstet Gynecol. 2022." },
  ct6h: { id: "ct6h", citation: "Perry JJ, et al. Sensitivity of computed tomography performed within six hours of onset of headache for diagnosis of subarachnoid haemorrhage: prospective cohort study. BMJ. 2011." },
  osahJama: { id: "osah-jama", citation: "Perry JJ, et al. Clinical decision rules to rule out subarachnoid hemorrhage for acute headache. JAMA. 2013." },
  ahaSah: { id: "aha-sah", citation: "Hoh BL, et al. 2023 Guideline for the management of patients with aneurysmal subarachnoid hemorrhage: a guideline from the American Heart Association and American Stroke Association. Stroke. 2023." },
  mcgill: { id: "uk-meningitis", citation: "McGill F, Heyderman RS, Michael BD, et al. The UK joint specialist societies guideline on the diagnosis and management of acute meningitis and meningococcal sepsis in immunocompetent adults. J Infect. 2016." },
  idsaMen: { id: "idsa-men", citation: "Tunkel AR, et al. Practice guidelines for the management of bacterial meningitis. Clin Infect Dis. 2004." },
  bsr: { id: "bsr-gca", citation: "Mackie SL, et al. British Society for Rheumatology guideline on diagnosis and treatment of giant cell arteritis. Rheumatology (Oxford). 2020." },
  smetana: { id: "jama-gca", citation: "Smetana GW, Shmerling RH. Does this patient have temporal arteritis? JAMA. 2002." },
  kaplan: { id: "cfp-abrs", citation: "Kaplan A. Canadian guidelines for acute bacterial rhinosinusitis: clinical summary. Can Fam Physician. 2014." },
  bodilsen: { id: "escmid-abscess", citation: "Bodilsen J, D'Alessandris QG, Humphreys H, et al. European Society of Clinical Microbiology and Infectious Diseases guidelines on diagnosis and treatment of brain abscess in children and adults. Clin Microbiol Infect. 2024." },
  flynn: { id: "aap-bp", citation: "Flynn JT, Kaelber DC, Baker-Smith CM, et al. Clinical practice guideline for screening and management of high blood pressure in children and adolescents. Pediatrics. 2017." },
  fugate: { id: "pres", citation: "Fugate JE, Rabinstein AA. Posterior reversible encephalopathy syndrome: clinical and radiological manifestations, pathophysiology, and outstanding questions. Lancet Neurol. 2015." },
  ccc: { id: "sogc-chc", citation: "Black A, Guilbert E, Costescu D, et al. No. 329 Canadian Contraception Consensus Part 4 of 4 Chapter 9: combined hormonal contraception. J Obstet Gynaecol Can. 2017." },
  phac: { id: "phac-men", citation: "Public Health Agency of Canada. Guidelines for the prevention and control of meningococcal disease. Can Commun Dis Rep. 2005. Volume 31 Supplement 1.", url: "https://www.phac-aspc.gc.ca/publicat/ccdr-rmtc/05pdf/31s1_e.pdf" },
  nac: { id: "nac-pcc", citation: "National Advisory Committee on Blood and Blood Products. Recommendations for use of prothrombin complex concentrates in Canada. Revised February 2022.", url: "https://nacblood.ca/en/resource/recommendations-use-prothrombin-complex-concentrates-canada" },
  diener: { id: "moh", citation: "Diener HC, Dodick D, Evers S, et al. Pathophysiology, prevention, and treatment of medication overuse headache. Lancet Neurol. 2019." },
} satisfies Record<string, Source>;

export const HEADACHE_S40_SAMPS: Samp[] = [
  {
    id: "headache-16",
    topic: "headache",
    title: "A girl sent home from school",
    stem:
      "An 11-year-old girl is brought to the emergency department by her father with a headache that began 6 hours ago at school. The pain is bilateral, frontal and throbbing. She has vomited twice and bright light bothers her. She has had at least six similar but milder headaches in the past year, each lasting several hours and relieved by sleep. Her mother has migraine. She took acetaminophen 500 mg at noon without benefit. She is alert and interactive and prefers to lie in a dark corner. Fundi show sharp disc margins. Cranial nerves, strength, coordination and gait are normal. There is no neck stiffness or rash.",
    vitals: { temperature: "36.9°C oral", pulse: "96/minute", resp: "18/minute", bp: "104/66 mmHg", o2sat: "99% on room air", weight: "38 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most strongly supports a primary headache rather than a secondary cause?",
        options: [
          "Bilateral frontal location of the pain",
          "Failure to respond to acetaminophen",
          "Onset of pain during the school day",
          "Recurrent stereotyped attacks",
          "Vomiting twice since the onset",
        ],
        correct: 3,
        explanation:
          "A stereotyped pattern of at least six similar attacks over a year, each ending with sleep, supports migraine, which by ICHD criteria needs five or more attacks. Bilateral frontal pain is typical of migraine in children, so its location does not separate primary from secondary causes. Vomiting occurs with both migraine and raised intracranial pressure. Onset at school and failure of one acetaminophen dose do not distinguish the two.",
        keyFeature: { topic: "headache", n: 1 },
        source: "trekk-migraine",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "She rates the pain as 8 of 10. She is still nauseated and has not kept down oral fluids.",
        prompt: "Which of the following is the most appropriate initial parenteral treatment for her headache?",
        options: [
          "dexamethasone 8 mg IV",
          "metoclopramide 5.7 mg IV",
          "morphine 4 mg IV",
          "ondansetron 4 mg IV",
          "0.9% saline 380 mL IV bolus",
        ],
        correct: 1,
        explanation:
          "She is vomiting and cannot take oral medication, and IV metoclopramide 0.15 mg/kg, maximum 10 mg, is the recommended first-line emergency treatment for a migraine attack in a child. At 38 kg the dose is 0.15 x 38 = 5.7 mg. Opioids such as morphine are not recommended because of inefficacy and potential harm. IV fluids are given only for dehydration, as a saline bolus alone did not add benefit. Ondansetron does not treat the headache, and there are inadequate data for dexamethasone in children.",
        keyFeature: { topic: "headache", n: 5 },
        source: "cps-migraine",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to neuroimaging for this girl today?",
        options: [
          "CT head before discharge",
          "CT head with contrast today",
          "MRI brain as an outpatient",
          "MRI brain within 2 weeks",
          "No neuroimaging is indicated",
        ],
        correct: 4,
        explanation:
          "Her attacks are recurrent and stereotyped, and her fundi, cranial nerves, coordination and gait are normal. The AAN practice parameter advises against routine neuroimaging for children with recurrent headaches and a normal neurological examination. Imaging is reserved for an abnormal examination, a recent change in the headache pattern or features such as seizures. CT with or without contrast adds radiation without benefit here, and an MRI would not change her management.",
        keyFeature: { topic: "headache", n: 5 },
        source: "aan-child-imaging",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "After treatment her pain is 2 of 10 and she is drinking. Her father asks what to give at home for the next attack.",
        prompt: "Which of the following is the most appropriate home treatment at the onset of her next attack?",
        options: [
          "acetaminophen 1 000 mg PO",
          "codeine 30 mg PO",
          "ibuprofen 190 mg PO",
          "ibuprofen 380 mg PO",
          "ibuprofen 760 mg PO",
        ],
        correct: 3,
        explanation:
          "At 38 kg her ibuprofen dose is 10 x 38 = 380 mg, using 10 mg/kg, maximum 600 mg, taken early in the attack, which is the recommended first-line home treatment for migraine in children. A dose of 190 mg is only 5 mg/kg, and 760 mg is 20 mg/kg, above the 600 mg maximum. Acetaminophen 1 000 mg is about 26 mg/kg, well above the usual 15 mg/kg dose. Opioids such as codeine are not recommended for migraine in children.",
        keyFeature: { topic: "headache", n: 5 },
        source: "cps-migraine",
      },
    ],
    sources: [S.trekk, S.cpsMig, S.lewis],
    ...META,
  },
  {
    id: "headache-17",
    topic: "headache",
    title: "Headache and a whooshing noise",
    stem:
      "A 26-year-old woman presents to the emergency department with 5 weeks of daily headache that is worse when she lies down and on waking. She hears a whooshing sound in time with her pulse. For 1 week she has had horizontal double vision when looking into the distance, and for a few seconds at a time her vision greys out when she stands up. She has gained 12 kg in the past year. Her only medication is minocycline for acne, started 3 months ago. She is alert and oriented. Pupils are equal and reactive. Limb strength, sensation and coordination are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "16/minute", bp: "128/78 mmHg", o2sat: "99% on room air", weight: "104 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following symptoms is most specific for raised intracranial pressure?",
        options: [
          "Daily bilateral headache",
          "Nausea with the headache",
          "Neck and shoulder stiffness",
          "Photophobia with the headache",
          "Transient visual obscurations",
        ],
        correct: 4,
        explanation:
          "Transient visual obscurations, brief greying or loss of vision often on standing, are caused by papilledema and point to raised intracranial pressure. With pulsatile tinnitus and horizontal diplopia, they strongly suggest intracranial hypertension. Daily bilateral headache, nausea, photophobia and neck stiffness are common in migraine and tension-type headache and are not specific.",
        keyFeature: { topic: "headache", n: 1 },
        source: "iih-consensus",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings would most strongly support the suspected cause of her symptoms?",
        options: [
          "Bilateral optic disc swelling",
          "Bitemporal visual field loss",
          "Gaze-evoked horizontal nystagmus",
          "Ptosis with a dilated pupil",
          "Relative afferent pupillary defect",
        ],
        correct: 0,
        explanation:
          "Papilledema, bilateral optic disc swelling from raised intracranial pressure, is the key finding in idiopathic intracranial hypertension and must be sought with fundoscopy in any patient with headache and visual symptoms. Bitemporal field loss suggests a lesion compressing the optic chiasm. A relative afferent pupillary defect points to asymmetric optic nerve disease such as optic neuritis. Ptosis with a dilated pupil indicates a third nerve palsy, and gaze-evoked nystagmus suggests a cerebellar or drug cause.",
        keyFeature: { topic: "headache", n: 3 },
        source: "iih-criteria",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Fundoscopy shows bilateral disc swelling. She has a left sixth nerve palsy. Non-contrast CT head is normal.",
        prompt: "Which of the following is the most appropriate next investigation for her?",
        options: [
          "Carotid Doppler ultrasound",
          "CT angiography of the neck",
          "CT venography of the head",
          "Lumbar puncture while sitting",
          "MRI of the pituitary gland",
        ],
        correct: 2,
        explanation:
          "Papilledema with a normal non-contrast CT requires venous imaging to exclude cerebral venous sinus thrombosis, which can mimic idiopathic intracranial hypertension, before the diagnosis is made. Lumbar puncture follows imaging and must be done in the lateral decubitus position, because pressure measured sitting is falsely high. CT angiography of the neck and carotid Doppler examine arteries, and a dedicated pituitary MRI does not address the venous differential.",
        keyFeature: { topic: "headache", n: 6 },
        source: "iih-criteria",
      },
      {
        id: "q4",
        kind: "menu",
        update:
          "CT venography is normal. Lumbar puncture in the lateral decubitus position shows an opening pressure of 38 cm H2O with normal CSF cell count, protein and glucose. Visual acuity is normal.",
        prompt: "Which of the following are the most appropriate next steps in her management?",
        options: [
          "Acetazolamide PO",
          "Dexamethasone IV",
          "Discontinue minocycline",
          "Hydromorphone IV",
          "Nimodipine PO",
          "Repeat lumbar punctures",
          "Urgent ophthalmology assessment",
          "Ventriculoperitoneal shunt",
        ],
        select: 3,
        correct: [0, 2, 6],
        explanation:
          "An opening pressure of 38 cm H2O, above the adult threshold of 25 cm H2O, with papilledema, normal CSF and normal venous imaging confirms intracranial hypertension. Acetazolamide is first-line medical therapy. Tetracyclines such as minocycline can cause intracranial hypertension and should be stopped. Papilledema threatens vision, so she needs prompt formal visual field and fundus assessment. Serial lumbar punctures, steroids, opioids and nimodipine are not recommended treatments, and a shunt is reserved for rapidly declining vision.",
        keyFeature: { topic: "headache", n: 2 },
        source: "iih-consensus",
      },
    ],
    sources: [S.mollan, S.friedmanIih],
    ...META,
  },
  {
    id: "headache-18",
    topic: "headache",
    title: "Night-time eye pain in a pacing man",
    stem:
      "A 38-year-old man presents to the emergency department at 02:00 with severe pain behind his right eye that woke him 40 minutes ago. He is pacing the room and cannot sit still. He has had similar attacks every night for 9 days, each lasting about an hour, with right eye tearing and a blocked right nostril. A similar run of attacks 2 years ago stopped after 6 weeks. He smokes a pack of cigarettes a day and takes no medications. The right eye is red and tearing, with a small right pupil and mild right ptosis. Visual acuity is normal in both eyes. The rest of the neurological examination is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "94/minute", resp: "18/minute", bp: "146/88 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history best distinguishes this headache from migraine?",
        options: [
          "History of cigarette smoking",
          "Onset during the night",
          "Pain of severe intensity",
          "Restlessness during attacks",
          "Right-sided location of pain",
        ],
        correct: 3,
        explanation:
          "Restlessness or agitation during attacks is a diagnostic feature of cluster headache in ICHD-3, whereas people with migraine lie still because movement worsens the pain. Severe unilateral pain occurs in both conditions. Migraine can also begin at night. Smoking is common in people with cluster headache but does not separate the two. His attacks of about an hour with ipsilateral tearing and nasal blockage also fit cluster headache.",
        keyFeature: { topic: "headache", n: 1 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following alternative diagnoses is most important to exclude in view of his red, painful eye?",
        options: [
          "Acute angle-closure glaucoma",
          "Bacterial conjunctivitis",
          "Diffuse episcleritis",
          "Subconjunctival hemorrhage",
          "Viral conjunctivitis",
        ],
        correct: 0,
        explanation:
          "A red, painful eye with severe periorbital headache must prompt exclusion of acute angle-closure glaucoma, which can cost vision within hours. Here the small right pupil, normal visual acuity and stereotyped nightly attacks with tearing and nasal blockage favour cluster headache, whereas glaucoma typically gives a mid-dilated, poorly reactive pupil and reduced acuity. Conjunctivitis, episcleritis and subconjunctival hemorrhage do not cause severe headache with autonomic features.",
        keyFeature: { topic: "headache", n: 4 },
        source: "rosen-ch18",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Intraocular pressure is normal in both eyes. He is still in severe pain.",
        prompt: "Which of the following is the most appropriate first treatment for his current attack?",
        options: [
          "hydromorphone 1 mg IV",
          "ketorolac 30 mg IV",
          "oxygen 12 L/minute by mask",
          "prednisone 60 mg PO",
          "verapamil 80 mg PO",
        ],
        correct: 2,
        explanation:
          "His attack is in progress and severe, and high-flow oxygen, 12 L/minute or more by non-rebreather mask, has a Level A recommendation for aborting a cluster attack and has no cardiovascular contraindications. Subcutaneous sumatriptan is the other first-line acute option. Prednisone and verapamil are used to shorten or prevent a cluster period, not to stop an attack in progress. Opioids and ketorolac are not established acute treatments for cluster headache.",
        keyFeature: { topic: "headache", n: 5 },
        source: "ahs-cluster",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "His pain resolves after 15 minutes. He has no history of coronary or cerebrovascular disease.",
        prompt: "Which of the following medications is the best option for him to use at home for further attacks?",
        options: [
          "acetaminophen 1 000 mg PO",
          "codeine 60 mg PO",
          "ibuprofen 600 mg PO",
          "rizatriptan 10 mg PO",
          "sumatriptan 6 mg SC",
        ],
        correct: 4,
        explanation:
          "His attacks last about an hour and he has no coronary or cerebrovascular disease, so subcutaneous sumatriptan 6 mg, which has a Level A recommendation for acute cluster headache and works within minutes, is suitable. Oral triptans such as rizatriptan act too slowly for attacks this short. Acetaminophen, ibuprofen and codeine are not effective acute treatments for cluster attacks.",
        keyFeature: { topic: "headache", n: 5 },
        source: "ahs-cluster",
      },
    ],
    sources: [S.ichd, S.robbins, S.rosenCh18],
    ...META,
  },
  {
    id: "headache-19",
    topic: "headache",
    title: "Headache two days after a test",
    stem:
      "A 31-year-old woman presents to the emergency department with a headache that began 36 hours after a lumbar puncture done in this department to investigate a sudden headache. That workup was negative and the first headache resolved. The new headache is bilateral and occipital. It starts within 15 minutes of sitting or standing and eases within minutes of lying flat. She has neck ache and muffled hearing when upright. She has no fever, vomiting or visual change. She has taken acetaminophen and ibuprofen. She is lying flat, alert and comfortable. The neurological examination is normal and there is no neck stiffness. The puncture site is clean.",
    vitals: { temperature: "36.9°C oral", pulse: "76/minute", resp: "14/minute", bp: "118/72 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of her history most strongly supports a post-dural puncture headache?",
        options: [
          "Absence of fever or vomiting",
          "Bilateral occipital location",
          "Negative prior workup for bleeding",
          "Relief within minutes of lying flat",
          "Use of simple analgesics at home",
        ],
        correct: 3,
        explanation:
          "The defining feature of post-dural puncture headache is its postural pattern, worsening soon after sitting or standing and easing on lying flat, from low CSF pressure after a dural leak. Onset within 5 days of the puncture and hearing change when upright also fit. Occipital location, the absence of fever and analgesic use are nonspecific. The negative earlier workup does not explain the new headache.",
        keyFeature: { topic: "headache", n: 1 },
        source: "pdph-consensus",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following new findings would most require neuroimaging rather than treatment for post-dural puncture headache?",
        options: [
          "Headache no longer postural",
          "Hearing change when upright",
          "Nausea when sitting up",
          "Neck stiffness when upright",
          "Onset within 3 days of the puncture",
        ],
        correct: 0,
        explanation:
          "A headache after dural puncture that loses its postural pattern, or new focal deficits, seizures, visual change or reduced consciousness, should prompt neuroimaging for complications such as subdural hematoma or cerebral venous thrombosis. Hearing change, nausea and neck stiffness on sitting up are recognized features of low CSF pressure. Onset within 5 days of the puncture is typical.",
        keyFeature: { topic: "headache", n: 3 },
        source: "pdph-consensus",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following changes to lumbar puncture technique would have most reduced her risk of this complication?",
        options: [
          "Bed rest after the procedure",
          "Extra oral fluids afterward",
          "Prone positioning afterward",
          "Use of a pencil-point needle",
          "Wider bore cutting needle",
        ],
        correct: 3,
        explanation:
          "Needle design is the main modifiable risk factor for her complication: atraumatic pencil-point needles substantially reduce post-dural puncture headache compared with conventional cutting needles, with similar success rates, in a meta-analysis of randomized trials. A wider bore cutting needle leaves a larger dural hole and increases the risk. Bed rest, prone positioning and extra fluids after the procedure do not prevent this headache.",
        keyFeature: { topic: "headache", n: 6 },
        source: "lp-needles",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "She returns 4 days after the lumbar puncture. Despite regular acetaminophen, ibuprofen and fluids, she cannot sit up long enough to care for her toddler. The examination is unchanged.",
        prompt: "Which of the following is the most appropriate treatment for her headache now?",
        options: [
          "Blood patch by anaesthesia",
          "Hydromorphone 1 mg IV",
          "IV fluid bolus of 2 L",
          "Strict bed rest for 48 hours",
          "Sumatriptan 6 mg SC",
        ],
        correct: 0,
        explanation:
          "An epidural blood patch is recommended when a post-dural puncture headache impairs daily activities despite conservative care, as it does here on day 4, and it is the most effective treatment. Bed rest and extra IV fluids do not treat the leak and are not recommended. Opioids and sumatriptan are not established treatments for this headache.",
        keyFeature: { topic: "headache", n: 2 },
        source: "pdph-consensus",
      },
    ],
    sources: [S.uppal, S.nath],
    ...META,
  },
  {
    id: "headache-20",
    topic: "headache",
    title: "Sudden headache and double vision",
    stem:
      "A 57-year-old man presents to the emergency department with a sudden severe frontal headache that began 5 hours ago while he was watching television. He has vomited four times and reports blurred and double vision. He has hypertension treated with amlodipine and has had erectile dysfunction and fatigue for a year. He is drowsy but oriented. His left eyelid droops and the left eye rests down and out, with a dilated left pupil. He cannot see the examiner's fingers in the temporal half of the visual field of either eye. Neck flexion is mildly painful. Limb strength is normal.",
    vitals: { temperature: "37.4°C oral", pulse: "104/minute", resp: "18/minute", bp: "92/58 mmHg", o2sat: "97% on room air", weight: "86 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following examination findings most specifically points to a lesion in the sellar region?",
        options: [
          "Drowsiness with intact orientation",
          "Left third nerve palsy",
          "Low blood pressure",
          "Pain on neck flexion",
          "Temporal field loss in both eyes",
        ],
        correct: 4,
        explanation:
          "Loss of the temporal fields in both eyes is a bitemporal hemianopia from compression of the optic chiasm, which lies directly above the pituitary. With sudden headache, vomiting and ophthalmoplegia it points to pituitary apoplexy. A third nerve palsy also occurs with a posterior communicating artery aneurysm, so it localizes less specifically. Drowsiness, neck pain and low BP occur with subarachnoid blood and adrenal insufficiency but do not localize the lesion.",
        keyFeature: { topic: "headache", n: 3 },
        source: "uk-apoplexy",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following features of his history most suggests a pre-existing pituitary tumour?",
        options: [
          "Double vision since onset",
          "Erectile dysfunction and fatigue",
          "Hypertension on amlodipine",
          "Onset of headache at rest",
          "Repeated vomiting since onset",
        ],
        correct: 1,
        explanation:
          "A year of erectile dysfunction and fatigue suggests pituitary hormone deficiency from a pre-existing macroadenoma, the usual substrate for apoplexy. Double vision and vomiting are acute effects of the bleed rather than clues to a long-standing tumour. Onset at rest and treated hypertension do not point to a pituitary cause.",
        keyFeature: { topic: "headache", n: 1 },
        source: "uk-apoplexy",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Non-contrast CT head shows a 2.5 cm hyperdense sellar mass extending upward. There is no subarachnoid blood. Na 131 mmol/L. Glucose 4.1 mmol/L.",
        prompt: "Which of the following is the most appropriate immediate medication for him?",
        options: [
          "cabergoline 0.5 mg PO",
          "dexamethasone 10 mg IV",
          "hydrocortisone 100 mg IV",
          "levothyroxine 100 mcg IV",
          "nimodipine 60 mg PO",
        ],
        correct: 2,
        explanation:
          "Hypotension, drowsiness, hyponatremia and a hemorrhagic sellar mass suggest acute adrenal insufficiency from pituitary apoplexy. The UK guideline advises prompt IV hydrocortisone in this setting, which may be life saving, without waiting for cortisol results. Dexamethasone has no mineralocorticoid effect and is not the recommended steroid for adrenal crisis. Thyroid replacement before glucocorticoid can precipitate adrenal crisis. Cabergoline does not treat the crisis, and nimodipine is for aneurysmal subarachnoid hemorrhage, which the CT does not show.",
        keyFeature: { topic: "headache", n: 6 },
        source: "uk-apoplexy",
      },
      {
        id: "q4",
        kind: "menu",
        update:
          "After hydrocortisone his BP rises to 112/70 mmHg. His visual fields and third nerve palsy are unchanged.",
        prompt: "Which of the following are the most appropriate next steps in his care?",
        options: [
          "Discharge with endocrine follow-up",
          "Lumbar puncture",
          "MRI of the pituitary",
          "Oral nimodipine",
          "Oral prednisone at home",
          "Stroke thrombolysis",
          "Urgent neurosurgical consultation",
        ],
        select: 2,
        correct: [2, 6],
        explanation:
          "His hemorrhagic sellar mass with field loss and a third nerve palsy needs MRI, the imaging of choice to confirm pituitary apoplexy and define compression of the chiasm and cavernous sinus. His visual field loss and third nerve palsy call for urgent review by neurosurgery, with endocrinology, because worsening vision may need surgical decompression. Lumbar puncture adds nothing once imaging shows the cause. Nimodipine and thrombolysis have no role, and discharge is unsafe with visual loss and adrenal insufficiency.",
        keyFeature: { topic: "headache", n: 6 },
        source: "uk-apoplexy",
      },
    ],
    sources: [S.rajasekaran],
    ...META,
  },
  {
    id: "headache-21",
    topic: "headache",
    title: "A third explosive headache this week",
    stem:
      "A 41-year-old woman presents to the emergency department with her third sudden explosive headache in 6 days. Each one reached peak intensity within a minute. The first began during sexual intercourse, the second while she lifted groceries and today's while she was laughing. Each lasted 1 to 3 hours and she was well between them. After the first episode, another hospital did a CT head and lumbar puncture, which were both normal. She started sertraline 3 weeks ago and has taken pseudoephedrine for a cold this week. She uses cannabis on weekends. She is alert and the neurological examination is normal.",
    vitals: { temperature: "36.8°C oral", pulse: "88/minute", resp: "16/minute", bp: "164/94 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Cerebral venous sinus thrombosis",
          "Migraine with prolonged aura",
          "Primary headache with sexual activity",
          "Reversible cerebral vasoconstriction",
          "Sentinel leak from an aneurysm",
        ],
        correct: 3,
        explanation:
          "Recurrent thunderclap headaches over days, triggered by sex, exertion and emotion, in a woman recently exposed to sertraline, pseudoephedrine and cannabis are the typical picture of reversible cerebral vasoconstriction syndrome. A sentinel leak is a single event, and her CT and lumbar puncture were normal. Primary headache with sexual activity does not explain attacks triggered by lifting and laughing and is diagnosed only after secondary causes are excluded. Venous thrombosis usually causes a persistent headache, and migraine does not peak within a minute.",
        keyFeature: { topic: "headache", n: 2 },
        source: "rcvs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation for her now?",
        options: [
          "Carotid Doppler ultrasound",
          "CT angiography of the head",
          "Electroencephalography",
          "MRI of the cervical spine",
          "Repeat lumbar puncture",
        ],
        correct: 1,
        explanation:
          "Recurrent thunderclap headache needs intracranial vascular imaging even when CT and lumbar puncture were normal, because the vasoconstriction syndrome, dissection and unruptured aneurysm are not excluded by those tests. Segmental narrowing of cerebral arteries on CT or MR angiography supports the diagnosis, although early angiography can be normal and narrowing is greatest 2 to 3 weeks after onset. Repeat lumbar puncture would not show vasoconstriction. Carotid Doppler does not image intracranial arteries, and EEG and spine MRI do not address the differential.",
        keyFeature: { topic: "headache", n: 6 },
        source: "rcvs",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT angiography shows multifocal segmental narrowing of the middle and posterior cerebral arteries. There is no aneurysm or hemorrhage. She asks for her usual migraine medication.",
        prompt: "Which of the following medications is most likely to worsen her condition?",
        options: [
          "acetaminophen 1 000 mg PO",
          "ketorolac 15 mg IV",
          "nimodipine 60 mg PO",
          "ondansetron 4 mg IV",
          "sumatriptan 6 mg SC",
        ],
        correct: 4,
        explanation:
          "Her angiogram shows segmental vasoconstriction, and triptans are vasoconstrictors and recognized triggers of reversible cerebral vasoconstriction syndrome, so sumatriptan should be avoided, along with other vasoactive drugs such as her pseudoephedrine. Treating her headache as migraine would be a mistake here. Nimodipine is used because it appears to reduce thunderclap headaches in this syndrome. Acetaminophen, ketorolac and ondansetron do not constrict cerebral arteries.",
        keyFeature: { topic: "headache", n: 5 },
        source: "rcvs",
      },
      {
        id: "q4",
        kind: "menu",
        update:
          "She is admitted to the neurology service.",
        prompt: "Which of the following complications of her condition should she be monitored for during admission?",
        options: [
          "Acute angle-closure glaucoma",
          "Aortic dissection",
          "Bacterial meningitis",
          "Generalized seizure",
          "Hyperkalemia",
          "Intracerebral hemorrhage",
          "Ischemic stroke",
          "Pulmonary embolism",
        ],
        select: 3,
        correct: [3, 5, 6],
        explanation:
          "Reversible cerebral vasoconstriction syndrome can be complicated by intracerebral and convexity subarachnoid hemorrhage, seizures, brain edema and ischemic stroke, and strokes can appear days after initial normal imaging, so new deficits or seizures need urgent reassessment. Angle-closure glaucoma, aortic dissection, bacterial meningitis, hyperkalemia and pulmonary embolism are not complications of the syndrome.",
        keyFeature: { topic: "headache", n: 2 },
        source: "rcvs",
      },
    ],
    sources: [S.ducros],
    ...META,
  },
  {
    id: "headache-22",
    topic: "headache",
    title: "Headache, blurred vision and confusion",
    stem:
      "A 52-year-old man is brought to the emergency department by his wife with a generalized headache for 2 days and blurred vision since this morning. She says he has become confused over the past few hours. He ran out of his amlodipine and ramipril 3 weeks ago. He has no chest pain or dyspnea. He is oriented to person only. There is no facial asymmetry and he moves all limbs equally. Fundoscopy shows flame hemorrhages, cotton wool spots and bilateral disc swelling.",
    vitals: { temperature: "36.9°C oral", pulse: "92/minute", resp: "18/minute", bp: "238/134 mmHg", o2sat: "97% on room air", weight: "88 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following investigations should be done first for him?",
        options: [
          "CT angiography of the neck",
          "Electroencephalography",
          "Lumbar puncture",
          "MRI brain with gadolinium",
          "Non-contrast CT head",
        ],
        correct: 4,
        explanation:
          "New confusion with severe hypertension needs an urgent non-contrast CT head to exclude intracerebral hemorrhage, which changes the BP target and management, before his symptoms are attributed to hypertensive encephalopathy. MRI shows posterior edema better but takes longer and is not the first test in a newly confused patient. Lumbar puncture, EEG and neck angiography do not address the leading dangerous causes.",
        keyFeature: { topic: "headache", n: 6 },
        source: "esc-htn-emerg",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT head shows no hemorrhage or mass. Creatinine 142 umol/L. Urinalysis shows 2+ protein and 2+ blood. Troponin is normal.",
        prompt: "Which of the following is the most likely cause of his confusion?",
        options: [
          "Acute ischemic stroke",
          "Cerebral venous thrombosis",
          "Hypertensive encephalopathy",
          "Nonconvulsive status epilepticus",
          "Uremic encephalopathy",
        ],
        correct: 2,
        explanation:
          "Confusion, headache and blurred vision with BP 238/134 mmHg, retinal hemorrhages, cotton wool spots and disc swelling, and a CT without hemorrhage indicate hypertensive encephalopathy. A creatinine of 142 umol/L is far too low to cause uremic encephalopathy. He has no focal deficit to suggest ischemic stroke. Venous thrombosis and nonconvulsive status are possible mimics but do not explain the severe retinopathy.",
        keyFeature: { topic: "headache", n: 2 },
        source: "esc-htn-emerg",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate BP goal for the first hour of treatment?",
        options: [
          "Reduce mean arterial pressure by 5 to 10%",
          "Reduce mean arterial pressure by 20 to 25%",
          "Reduce mean arterial pressure by 40 to 50%",
          "Reduce systolic to below 140 mmHg",
          "No reduction until MRI is done",
        ],
        correct: 1,
        explanation:
          "His encephalopathy with BP 238/134 mmHg calls for an immediate but limited reduction of mean arterial pressure, by 20 to 25%. His mean arterial pressure is (238 + 2 x 134) / 3, about 169 mmHg, so the first target is about 127 to 135 mmHg. A 40 to 50% fall risks cerebral, coronary and renal ischemia because autoregulation has shifted upward. A systolic target below 140 mmHg is used in acute intracerebral hemorrhage, which the CT excluded. A 5 to 10% fall is too little, and treatment should not wait for MRI.",
        keyFeature: { topic: "headache", n: 6 },
        source: "esc-htn-emerg",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate medication to begin lowering his BP?",
        options: [
          "hydralazine 20 mg IM",
          "labetalol 20 mg IV",
          "metoprolol 5 mg IV",
          "nifedipine 10 mg PO",
          "nitroglycerin 0.4 mg SL",
        ],
        correct: 1,
        explanation:
          "His encephalopathy needs a titratable IV agent, and labetalol, given as IV boluses or an infusion, is first-line for hypertensive encephalopathy, with nicardipine as an alternative. Immediate-release oral nifedipine causes abrupt and unpredictable falls in BP. Sublingual nitroglycerin mainly lowers preload and is used for pulmonary edema or coronary syndromes. IM hydralazine is hard to titrate, and metoprolol alone is not a recommended agent for this emergency.",
        keyFeature: { topic: "headache", n: 6 },
        source: "esc-htn-emerg",
      },
    ],
    sources: [S.esc],
    ...META,
  },
  {
    id: "headache-23",
    topic: "headache",
    title: "A sleepy boy with a shunt",
    stem:
      "A 6-year-old boy is brought to the emergency department by his mother with headache and vomiting that began yesterday. Today he is sleepier than usual and has vomited five times. He has a ventriculoperitoneal shunt that was placed in infancy for hydrocephalus after premature birth and last revised 2 years ago. He has had no fever, diarrhea or sick contacts. He opens his eyes to voice and answers questions slowly. Pupils are equal and reactive. He cannot look up fully. The shunt tract along the neck is intact without redness. Limb strength is normal.",
    vitals: { temperature: "36.8°C tympanic", pulse: "64/minute", resp: "16/minute", bp: "128/70 mmHg", o2sat: "98% on room air", weight: "21 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most strongly indicates raised intracranial pressure in this boy?",
        options: [
          "Absence of fever",
          "Equal reactive pupils",
          "Five episodes of vomiting",
          "Intact shunt tract",
          "Limited upward gaze",
        ],
        correct: 4,
        explanation:
          "Limited upward gaze, part of the setting-sun sign, results from pressure on the dorsal midbrain by dilated ventricles and is a specific sign of raised pressure in shunt failure. His pulse of 64/minute with BP 128/70 mmHg is also worrying, since slowing of the pulse with rising BP is part of the Cushing response. Vomiting is common in gastroenteritis and is nonspecific. Absence of fever, an intact shunt tract and equal pupils do not exclude obstruction.",
        keyFeature: { topic: "headache", n: 3 },
        source: "shunt-nof",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Abdominal migraine",
          "Cyclic vomiting syndrome",
          "Proximal shunt obstruction",
          "Shunt-related meningitis",
          "Viral gastroenteritis",
        ],
        correct: 2,
        explanation:
          "Headache, repeated vomiting, drowsiness, impaired upgaze and a Cushing pattern in a child with a shunt indicate shunt malfunction until proven otherwise, most often from proximal obstruction. Shunt infection usually occurs within months of surgery and typically causes fever, which he does not have. Gastroenteritis, cyclic vomiting and abdominal migraine do not cause drowsiness with impaired upgaze.",
        keyFeature: { topic: "headache", n: 2 },
        source: "shunt-complications",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are the most appropriate next steps in his management?",
        options: [
          "Ceftriaxone IV",
          "CT head or rapid MRI brain",
          "Dexamethasone IV",
          "Discharge after antiemetic",
          "Electroencephalography",
          "Lumbar puncture",
          "Oral rehydration trial",
          "Shunt series radiographs",
          "Urgent neurosurgical consultation",
        ],
        select: 3,
        correct: [1, 7, 8],
        explanation:
          "His drowsiness, vomiting and impaired upgaze point to shunt failure, which needs brain imaging, by CT or a rapid-sequence MRI, to compare ventricle size with earlier studies, plus shunt series radiographs to look for disconnection or fracture of the tubing, and urgent neurosurgical consultation. A lumbar puncture is dangerous with obstructive hydrocephalus. He has no fever to justify empiric antibiotics, and dexamethasone does not treat shunt obstruction. Discharge or an oral fluid trial would miss a life-threatening problem.",
        keyFeature: { topic: "headache", n: 6 },
        source: "vp-shunt-ed",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following history details is most important to obtain from his mother?",
        options: [
          "Course of previous shunt failures",
          "Details of his premature birth",
          "Family history of migraine",
          "Recent sick contacts at school",
          "Timing of last immunizations",
        ],
        correct: 0,
        explanation:
          "Children with shunts often present in a similar way each time the shunt fails, so a parent's account of earlier malfunctions is one of the most useful clues to the current problem. Sick contacts matter for gastroenteritis, but he has none, and a viral illness does not explain drowsiness with impaired upgaze. Details of his premature birth, a family history of migraine and immunization timing do not change the urgency of assessing the shunt.",
        keyFeature: { topic: "headache", n: 1 },
        source: "vp-shunt-ed",
      },
    ],
    sources: [S.jonzzon, S.hanak, S.ferras],
    ...META,
  },
  {
    id: "headache-24",
    topic: "headache",
    title: "Headache after a dental problem",
    stem:
      "A 45-year-old man presents to the emergency department with a worsening right-sided headache for 10 days. For 2 days his left hand has felt clumsy. He had a lower molar extracted for a dental abscess 4 weeks ago. He has type 2 diabetes treated with metformin. He has felt feverish at night. He is alert and oriented. He has a left pronator drift and mild weakness of the left hand. Fundi show sharp disc margins. There is no neck stiffness or rash.",
    vitals: { temperature: "37.9°C oral", pulse: "98/minute", resp: "16/minute", bp: "136/84 mmHg", o2sat: "98% on room air", weight: "84 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings most clearly indicates the need for urgent neuroimaging?",
        options: [
          "History of type 2 diabetes",
          "Left pronator drift",
          "Recent dental extraction",
          "Right-sided location of pain",
          "Temperature of 37.9°C",
        ],
        correct: 1,
        explanation:
          "A new focal deficit, here a left pronator drift with hand weakness, is a red flag that calls for urgent neuroimaging for a structural lesion such as abscess, tumour or stroke. Low-grade fever, diabetes and a recent dental infection raise suspicion for an abscess but do not by themselves indicate a lesion in the brain. A one-sided headache is common in primary headache.",
        keyFeature: { topic: "headache", n: 3 },
        source: "escmid-abscess",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Contrast-enhanced CT head shows a 3 cm ring-enhancing lesion in the right parietal lobe with surrounding edema and 3 mm of midline shift.",
        prompt: "Which of the following is the most appropriate empiric antibiotic regimen for him?",
        options: [
          "amoxicillin-clavulanate PO",
          "ampicillin and gentamicin IV",
          "cefazolin and metronidazole IV",
          "ceftriaxone and metronidazole IV",
          "clindamycin and gentamicin IV",
        ],
        correct: 3,
        explanation:
          "A community-acquired brain abscess after dental infection is usually caused by oral streptococci and anaerobes. The ESCMID guideline recommends empiric cefotaxime or ceftriaxone plus metronidazole in immunocompetent adults, which penetrate the abscess and cover these organisms. Cefazolin and clindamycin penetrate the brain poorly. Ampicillin with gentamicin lacks anaerobic cover, and oral amoxicillin-clavulanate is not adequate initial therapy for a brain abscess.",
        keyFeature: { topic: "headache", n: 6 },
        source: "escmid-abscess",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate definitive management for the lesion?",
        options: [
          "Antibiotics alone for 2 weeks",
          "Discharge with oral antibiotics",
          "Lumbar puncture for culture",
          "Neurosurgical aspiration",
          "Whole brain radiotherapy",
        ],
        correct: 3,
        explanation:
          "A 3 cm abscess with edema and midline shift needs neurosurgical aspiration or excision, which also provides the microbiology to guide antibiotics, followed by a prolonged course of treatment, usually about 6 weeks. Lumbar puncture risks herniation with mass effect and rarely identifies the organism. Two weeks of antibiotics alone is too short, and discharge is unsafe with a focal deficit and midline shift. Radiotherapy treats metastases, not infection.",
        keyFeature: { topic: "headache", n: 2 },
        source: "escmid-abscess",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following details of his history most suggests the source of the lesion?",
        options: [
          "Clumsiness of the left hand",
          "Night-time feverish feelings",
          "Recent dental abscess",
          "Right-sided headache for 10 days",
          "Type 2 diabetes on metformin",
        ],
        correct: 2,
        explanation:
          "A dental infection 4 weeks earlier is a classic source of brain abscess, usually with oral streptococci and anaerobes, and knowing it guides empiric antibiotic choice. Diabetes raises the risk of infection but is not a source. Night-time fevers, hand clumsiness and a one-sided headache are features of the lesion rather than clues to where it came from.",
        keyFeature: { topic: "headache", n: 1 },
        source: "escmid-abscess",
      },
    ],
    sources: [S.bodilsen],
    ...META,
  },
  {
    "id": "headache-25",
    "topic": "headache",
    "title": "Brief headaches at the back of the head",
    "stem": "A 27-year-old woman presents to the emergency department with 3 weeks of brief, severe headaches at the back of her head. Each one starts within a second of a cough, sneeze or laugh, peaks at once and fades over about a minute. She has up to 20 a day. She had a chest cold 4 weeks ago and still coughs often. Between attacks she has no pain, and lying down or standing up makes no difference. She has never had headaches like these before. She has no fever, visual change, weakness or numbness. She takes no medications. She is alert and oriented. During the interview she coughs twice, and each time she grips the back of her head.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "76/minute",
      "resp": "16/minute",
      "bp": "118/74 mmHg",
      "o2sat": "99% on room air"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following features of her history most helps to classify her headaches?",
        "options": [
          "Occipital location of the pain",
          "Recent chest cold",
          "Severe intensity at the peak",
          "Triggered by coughing or sneezing",
          "No headache between attacks"
        ],
        "correct": 3,
        "explanation": "Headache brought on only by coughing, sneezing or other straining, with sudden onset and lasting between 1 second and 2 hours, defines cough headache in ICHD-3. The trigger places her headaches in that group, and that group needs a search for a cause. Pain at the back of the head and a severe peak occur in many headache types. The chest cold explains why she coughs so often, not the pattern of her pain. Freedom from pain between attacks is shared by many episodic headaches.",
        "keyFeature": {
          "topic": "headache",
          "n": 1
        },
        "source": "ichd3"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following secondary causes is most likely to explain her headaches?",
        "options": [
          "Chiari malformation type I",
          "Idiopathic intracranial hypertension",
          "Occipital neuralgia",
          "Spontaneous intracranial hypotension",
          "Subarachnoid hemorrhage"
        ],
        "correct": 0,
        "explanation": "ICHD-3 notes that about 40% of cough headache is symptomatic, and that most of these patients have a Chiari malformation type I. Primary cough headache mostly affects people older than 40, so her age of 27 adds to the concern. Spontaneous intracranial hypotension is also a reported cause, but it is less common and usually gives a headache that worsens on standing, and hers does not change with posture. Idiopathic intracranial hypertension causes a persistent headache, not attacks lasting a minute. Subarachnoid hemorrhage does not cause 3 weeks of brief attacks with no pain between them. Occipital neuralgia causes shooting pain over the scalp that is not set off by coughing.",
        "keyFeature": {
          "topic": "headache",
          "n": 2
        },
        "source": "ichd3"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate investigation for the cause of her headaches?",
        "options": [
          "CT angiography of the head",
          "Indomethacin trial alone",
          "Lumbar puncture and pressure",
          "MRI of the brain",
          "Skull radiographs"
        ],
        "correct": 3,
        "explanation": "ICHD-3 states that neuroimaging plays an important role in finding the cause of cough headache. MRI shows the posterior fossa and the junction of the skull and spine, where the common causes lie, much better than CT. Indomethacin often helps primary cough headache, but that diagnosis requires other causes to be excluded, and ICHD-3 notes that a few symptomatic cases also respond. Lumbar puncture does not show a structural lesion and can be unsafe when the cerebellar tonsils sit low. CT angiography shows the vessels and skull radiographs show only bone.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "ichd3"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following examination findings would most suggest a structural cause for her headaches?",
        "options": [
          "Nystagmus and limb ataxia",
          "Occipital nerve tenderness",
          "Pain with neck rotation",
          "Pericranial muscle tenderness",
          "Tender temporal arteries"
        ],
        "correct": 0,
        "explanation": "Nystagmus and limb ataxia are signs of cerebellar or brainstem disease, and with cough headache they point to a lesion in the posterior fossa, a site that ICHD-3 lists among the causes of symptomatic cough headache. Occipital nerve tenderness suggests occipital neuralgia. Pericranial muscle tenderness is common in tension-type headache. Pain with neck rotation suggests a cervical source. Tender temporal arteries suggest giant cell arteritis, which is very unlikely at 27.",
        "keyFeature": {
          "topic": "headache",
          "n": 3
        },
        "source": "ichd3"
      }
    ],
    "sources": [
    {
      "id": "ichd3",
      "citation": "Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018.",
      "url": "https://ichd-3.org/other-primary-headache-disorders/4-1-primary-cough-headache/"
    }
  ],
    ...META,
    "version": 3
  },
  {
    id: "headache-26",
    topic: "headache",
    title: "Asking for something stronger",
    stem:
      "A 44-year-old woman presents to the emergency department asking for something stronger for her headaches. She has had headache on about 25 days a month for 6 months. For years before that she had migraine attacks about twice a month. She now takes acetaminophen with codeine 30 mg on about 20 days a month and ibuprofen on most other days. The headache is present on waking and eases briefly after each dose. Today's headache is her usual one. She has no fever, weight loss, visual symptoms or weakness. The neurological examination, including fundoscopy, is normal.",
    vitals: { temperature: "36.7°C oral", pulse: "76/minute", resp: "14/minute", bp: "124/78 mmHg", o2sat: "99% on room air", weight: "66 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Chronic tension-type headache",
          "Hemicrania continua",
          "Idiopathic intracranial hypertension",
          "Medication overuse headache",
          "New daily persistent headache",
        ],
        correct: 3,
        explanation:
          "Headache on 15 or more days a month for more than 3 months, in a person with a prior headache disorder who uses opioid or combination analgesics on 10 or more days a month, meets ICHD-3 criteria for medication overuse headache. She uses codeine on about 20 days a month. New daily persistent headache begins daily from a clearly remembered onset rather than by transformation of episodic migraine. Chronic tension-type headache and hemicrania continua do not explain the link with frequent analgesic use, and normal fundi make intracranial hypertension unlikely.",
        keyFeature: { topic: "headache", n: 1 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate treatment for her headache in the emergency department today?",
        options: [
          "acetaminophen 1 000 mg PO",
          "dexamethasone 10 mg IV",
          "hydromorphone 1 mg IV",
          "meperidine 50 mg IM",
          "metoclopramide 10 mg IV",
        ],
        correct: 4,
        explanation:
          "She is overusing codeine and acetaminophen, so IV metoclopramide, strongly recommended by the Canadian Headache Society for migraine in emergency settings, is the best choice because it adds no opioid or simple analgesic exposure, which matters in medication overuse. Opioids such as hydromorphone and meperidine add to her opioid exposure and are not appropriate first-line treatment. The society recommends weakly against acetaminophen, one of the drugs she overuses, and against dexamethasone for acute pain relief.",
        keyFeature: { topic: "headache", n: 5 },
        source: "chs-ed",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following are the most appropriate parts of her discharge plan?",
        options: [
          "Butalbital combination tablets",
          "Daily ibuprofen for pain",
          "Headache diary",
          "Outpatient CT head",
          "Oxycodone as needed",
          "Scheduled daily sumatriptan",
          "Start a migraine preventive",
          "Taper and stop codeine",
        ],
        select: 3,
        correct: [2, 6, 7],
        explanation:
          "Her daily headache is driven by codeine and analgesic overuse, and treatment has three parts: education to reduce acute medication, withdrawal of the overused drug and preventive therapy. Codeine should be tapered and stopped, and a diary tracks headache days and medication use. A preventive, such as topiramate, propranolol or amitriptyline, reduces headache days and supports withdrawal, and the choice can be made with her family physician. Oxycodone, butalbital combinations, daily ibuprofen and scheduled triptans all cause medication overuse headache. Her normal examination and unchanged headache pattern do not call for imaging.",
        keyFeature: { topic: "headache", n: 5 },
        source: "moh",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate approach to investigation for her?",
        options: [
          "Clinical diagnosis only",
          "CT head before discharge",
          "Lumbar puncture with pressure",
          "MRI brain as an outpatient",
          "Sedimentation rate and CRP",
        ],
        correct: 0,
        explanation:
          "Her headache is her usual daily pattern, she has no fever, weight loss, visual symptoms or weakness, and her neurological examination and fundi are normal, so medication overuse headache is a clinical diagnosis. Choosing Wisely Canada advises against neuroimaging in patients with migraine and a normal examination. Lumbar puncture is not indicated with normal fundi and no features of infection. ESR and CRP are used when giant cell arteritis is suspected in people over 50.",
        keyFeature: { topic: "headache", n: 6 },
        source: "cwc-headache",
      },
    ],
    sources: [S.ichd, S.chsEd, S.diener, S.choosing],
    ...META,
  },
  {
    id: "headache-27",
    topic: "headache",
    title: "A swelling on the forehead",
    stem:
      "A 14-year-old boy is brought to the emergency department by his mother with a severe frontal headache for 5 days and a soft swelling on his forehead for 2 days. He had nasal congestion and purulent discharge for 2 weeks and has taken amoxicillin for the past 3 days. Today he vomited twice. He has no past medical history and his immunizations are up to date. He is alert and oriented. There is a tender, fluctuant 3 cm swelling over the middle of the forehead. The eyelids are not swollen and eye movements are full and painless. There is no neck stiffness. The neurological examination is normal.",
    vitals: { temperature: "38.6°C oral", pulse: "108/minute", resp: "18/minute", bp: "118/72 mmHg", o2sat: "99% on room air", weight: "55 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Epidermoid cyst infection",
          "Frontal subperiosteal abscess",
          "Orbital cellulitis",
          "Preseptal cellulitis",
          "Uncomplicated acute sinusitis",
        ],
        correct: 1,
        explanation:
          "A tender fluctuant forehead swelling with fever and headache after frontal sinusitis in an adolescent is a Pott puffy tumour, a subperiosteal abscess from frontal bone osteomyelitis. Eyelid swelling and painful or limited eye movements are absent, which argues against preseptal and orbital cellulitis. Uncomplicated sinusitis does not produce a fluctuant forehead mass. An infected epidermoid cyst would not follow sinus symptoms with fever and vomiting.",
        keyFeature: { topic: "headache", n: 4 },
        source: "sinusitis-intracranial",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate imaging for this boy?",
        options: [
          "Contrast CT head and sinuses",
          "Forehead ultrasound",
          "Lateral skull radiograph",
          "Non-contrast CT head",
          "Sinus radiographs",
        ],
        correct: 0,
        explanation:
          "Severe headache and systemic toxicity are red flags for complicated sinusitis in the Canadian guideline, and a fluctuant forehead swelling shows spread through the frontal bone. Pott puffy tumour is often accompanied by epidural or subdural empyema or brain abscess, even without neurological signs, so contrast-enhanced CT of the head and sinuses, or MRI, is needed. Plain radiographs and ultrasound cannot exclude intracranial spread, and a non-contrast CT can miss an empyema.",
        keyFeature: { topic: "headache", n: 6 },
        source: "cfp-abrs",
      },
      {
        id: "q3",
        kind: "menu",
        update:
          "CT shows frontal sinus opacification, erosion of the anterior table of the frontal bone, a subperiosteal collection and a small epidural collection.",
        prompt: "Which of the following are the most appropriate management steps for him?",
        options: [
          "Broad-spectrum IV antibiotics",
          "Continue oral amoxicillin",
          "Discharge with follow-up",
          "Incision and drainage in the ED",
          "Intranasal corticosteroid alone",
          "Lumbar puncture",
          "Neurosurgery consultation",
          "Otolaryngology consultation",
        ],
        select: 3,
        correct: [0, 6, 7],
        explanation:
          "Frontal osteomyelitis with subperiosteal and epidural abscesses needs admission and IV antibiotics that cover streptococci, Staphylococcus aureus and anaerobes with good CNS penetration, plus surgical drainage. Otolaryngology drains the sinus and subperiosteal collection and neurosurgery assesses the epidural collection. Bedside incision does not address the sinus or intracranial disease. Oral amoxicillin has already failed. Lumbar puncture does not help with an intracranial collection and carries risk.",
        keyFeature: { topic: "headache", n: 6 },
        source: "sinusitis-intracranial",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following findings would most suggest that the infection has spread into the orbit?",
        options: [
          "Fluctuant forehead swelling",
          "Limited eye movements",
          "Purulent nasal discharge",
          "Temperature of 38.6°C",
          "Vomiting twice today",
        ],
        correct: 1,
        explanation:
          "Double vision, painful or limited eye movements, proptosis or reduced acuity indicate orbital spread of sinusitis and need urgent imaging and specialist care. His eye examination is currently normal. The forehead swelling reflects the subperiosteal abscess. Fever and purulent discharge do not localize the spread, and vomiting may reflect intracranial rather than orbital involvement.",
        keyFeature: { topic: "headache", n: 3 },
        source: "cfp-abrs",
      },
    ],
    sources: [S.smiljkovic, S.kaplan],
    ...META,
  },
  {
    "id": "headache-28",
    "topic": "headache",
    "title": "Two weeks of headache and double vision",
    "stem": "A 31-year-old man presents to the emergency department with 2 weeks of worsening headache, evening fevers and a 4 kg weight loss. Since yesterday he has seen double when he looks to the left, and his wife says he has become slow to answer questions. He moved to Canada from Somalia 5 months ago. His HIV test at his immigration medical was negative. He takes no medications. He is drowsy but oriented. GCS 14 (E3 V5 M6). There is neck stiffness. Sodium is 127 mmol/L and capillary glucose is 6.4 mmol/L.",
    "vitals": {
      "temperature": "38.2°C oral",
      "pulse": "104/minute",
      "resp": "18/minute",
      "bp": "128/78 mmHg",
      "o2sat": "98% on room air",
      "weight": "58 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examination findings best explains his double vision on looking to the left?",
        "options": [
          "Left facial nerve palsy",
          "Left fourth nerve palsy",
          "Left sixth nerve palsy",
          "Left third nerve palsy",
          "Right sixth nerve palsy"
        ],
        "correct": 2,
        "explanation": "Horizontal double vision that is worse on looking left comes from weakness of the left lateral rectus, which the left sixth nerve supplies. The Canadian standards list cranial nerve palsies with meningismus and confusion in the course of tuberculous meningitis. A right sixth nerve palsy causes diplopia on looking right. A third nerve palsy causes ptosis and a dilated pupil with the eye down and out. A fourth nerve palsy causes vertical diplopia. The facial nerve does not move the eye.",
        "keyFeature": {
          "topic": "headache",
          "n": 3
        },
        "source": "cts-eptb"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "CT head shows enhancement of the basal meninges with no mass or midline shift. A lumbar puncture is planned.",
        "prompt": "Which of the following CSF requests is most important for him?",
        "options": [
          "Bacterial culture and Gram stain",
          "Cryptococcal antigen",
          "Herpes simplex PCR",
          "Large-volume TB NAAT and culture",
          "West Nile virus IgM"
        ],
        "correct": 3,
        "explanation": "Two weeks of headache, fever and weight loss with a cranial nerve palsy, low sodium and basal enhancement after recent arrival from a high incidence country point to tuberculous meningitis. The Canadian standards advise large volume CSF samples, 7 to 15 mL, to raise yield, and rate the GeneXpert Ultra NAAT as the most sensitive rapid test. Bacterial culture with Gram stain, cryptococcal antigen, herpes simplex PCR and West Nile IgM may be added, but none of them tests for the likeliest diagnosis.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "cts-eptb"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "CSF: WBC 280 x 10^6/L with 85% lymphocytes, protein 2.1 g/L, glucose 1.4 mmol/L with serum glucose 6.2 mmol/L. Gram stain is negative. Other CSF results are pending.",
        "prompt": "Which of the following is the most appropriate treatment for him now?",
        "options": [
          "Acyclovir IV until PCR results",
          "Amphotericin B and flucytosine",
          "Ceftriaxone alone and await culture",
          "Four-drug TB therapy and dexamethasone",
          "TB therapy once culture is positive"
        ],
        "correct": 3,
        "explanation": "The lymphocytic CSF with glucose below 2.5 mmol/L and protein above 0.5 g/L fits tuberculous meningitis. The Canadian standards suggest starting empiric treatment immediately when suspicion is high, and strongly recommend corticosteroids for everyone with tuberculous meningitis. Waiting for a positive culture delays treatment of a disease where delay costs lives and function. Ceftriaxone alone misses tuberculosis. Acyclovir targets herpes simplex, which does not fit a 2 week course with low CSF glucose. Amphotericin treats cryptococcal meningitis, which is unlikely with a negative HIV test.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "cts-eptb"
      }
    ],
    "sources": [
    {
      "id": "cts-eptb",
      "citation": "Barss L, Connors WJA, Fisher D. Chapter 7: Extra-pulmonary tuberculosis. In: Canadian Tuberculosis Standards, 8th edition. Can J Respir Crit Care Sleep Med. 2022.",
      "url": "https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/extra-pulmonary-tuberculosis.html"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "headache-29",
    topic: "headache",
    alsoTopics: ["infectious-diseases"],
    title: "Weeks of headache and night sweats",
    stem:
      "A 36-year-old man presents to the emergency department with a headache for 3 weeks that has become severe, with vomiting for 2 days. He has had fevers and night sweats. He was diagnosed with HIV 2 years ago but stopped antiretroviral therapy after a few months. His last CD4 count, 8 months ago, was 60 x 10^6/L. He is alert and oriented, with mild neck stiffness. Fundi show blurred disc margins in both eyes. There is no focal neurological deficit and no rash.",
    vitals: { temperature: "38.1°C oral", pulse: "102/minute", resp: "18/minute", bp: "124/76 mmHg", o2sat: "98% on room air", weight: "62 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely cause of his headache?",
        options: [
          "Cryptococcal meningitis",
          "Herpes simplex encephalitis",
          "Pneumococcal meningitis",
          "Primary CNS lymphoma",
          "Toxoplasma encephalitis",
        ],
        correct: 0,
        explanation:
          "Headache over weeks with fever, vomiting and papilledema in a person with untreated HIV and a CD4 count below 100 x 10^6/L is typical of cryptococcal meningitis. Toxoplasma encephalitis and primary CNS lymphoma usually cause focal deficits from mass lesions, which he lacks. Herpes simplex encephalitis presents acutely with confusion, seizures or behaviour change. Pneumococcal meningitis evolves over hours to days rather than 3 weeks.",
        keyFeature: { topic: "headache", n: 2 },
        source: "who-crypto",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT head shows no mass lesion or hydrocephalus.",
        prompt: "Which of the following investigations is most important for him next?",
        options: [
          "Chest radiograph for tuberculosis",
          "Electroencephalography",
          "Lumbar puncture with opening pressure",
          "MRI brain with gadolinium",
          "Serum toxoplasma serology",
        ],
        correct: 2,
        explanation:
          "His CT shows no mass lesion, so a lumbar puncture with opening pressure can proceed and is the key test for suspected cryptococcal meningitis. CSF cryptococcal antigen confirms the diagnosis, and the opening pressure guides therapeutic drainage, since raised pressure contributes to death and visual loss. MRI, toxoplasma serology, chest radiograph and EEG neither establish the diagnosis nor measure the pressure.",
        keyFeature: { topic: "headache", n: 6 },
        source: "who-crypto",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Opening pressure is 34 cm H2O. CSF cryptococcal antigen is positive. His headache and vomiting persist.",
        prompt: "Which of the following is the most appropriate management of his raised intracranial pressure?",
        options: [
          "Acetazolamide 250 mg PO",
          "Dexamethasone 10 mg IV",
          "Drain CSF to below 20 cm H2O",
          "Mannitol 1 g/kg IV",
          "Ventriculoperitoneal shunt now",
        ],
        correct: 2,
        explanation:
          "His opening pressure of 34 cm H2O with ongoing headache and vomiting calls for a therapeutic lumbar puncture, recommended when the pressure is 25 cm H2O or more, draining enough CSF to bring it below 20 cm H2O, or to halve a very high pressure, and repeating it as symptoms require. Corticosteroids, acetazolamide and mannitol are not recommended for raised pressure in cryptococcal meningitis. A shunt is considered only when pressure stays high despite repeated drainage.",
        keyFeature: { topic: "headache", n: 6 },
        source: "who-crypto",
      },
    ],
    sources: [S.who],
    ...META,
  },
  {
    id: "headache-30",
    topic: "headache",
    title: "Electric shocks in the cheek",
    stem:
      "A 66-year-old woman presents to the emergency department with 3 weeks of attacks of stabbing pain in her right cheek and jaw. Each attack lasts 1 to 2 seconds, feels like an electric shock and occurs up to 40 times a day. Chewing, brushing her teeth and a light breeze on her face set them off. She is pain free between attacks but is not eating well. A dentist found no dental cause last week. She has hypertension treated with hydrochlorothiazide. Facial sensation, corneal reflexes, jaw strength, hearing and the rest of the neurological examination are normal. Her teeth and jaw joints are not tender.",
    vitals: { temperature: "36.6°C oral", pulse: "80/minute", resp: "14/minute", bp: "138/82 mmHg", o2sat: "98% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Cluster headache",
          "Dental pulpitis",
          "Giant cell arteritis",
          "Temporomandibular disorder",
          "Trigeminal neuralgia",
        ],
        correct: 4,
        explanation:
          "Paroxysms of electric shock-like pain lasting seconds in the maxillary and mandibular divisions, triggered by innocuous stimuli such as chewing, brushing or a breeze, with pain-free intervals, meet ICHD-3 criteria for trigeminal neuralgia. Cluster headache causes orbital pain lasting 15 to 180 minutes with autonomic features. Giant cell arteritis causes a persistent temporal headache and jaw pain with prolonged chewing, not brief shocks. Pulpitis and temporomandibular disorder would give local tenderness, which is absent.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following findings would most suggest a secondary cause such as a tumour?",
        options: [
          "Pain free between attacks",
          "Pain triggered by light touch",
          "Reduced sensation in the cheek",
          "Right-sided pain",
          "Weight loss from poor eating",
        ],
        correct: 2,
        explanation:
          "A sensory deficit in the trigeminal distribution points to secondary trigeminal neuralgia from a lesion such as a tumour or multiple sclerosis plaque and calls for MRI. Triggering by light touch and pain-free intervals are typical of classical trigeminal neuralgia. Right-sided pain is common in the classical form, and weight loss from avoiding eating is a consequence of the pain rather than a sign of a secondary cause.",
        keyFeature: { topic: "headache", n: 3 },
        source: "ean-tn",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first-line treatment for her?",
        options: [
          "amitriptyline 10 mg PO at bedtime",
          "carbamazepine 100 mg PO twice daily",
          "gabapentin 300 mg PO at bedtime",
          "hydromorphone 2 mg PO every 4 hours",
          "prednisone 50 mg PO daily",
        ],
        correct: 1,
        explanation:
          "Her attacks fit classical trigeminal neuralgia, for which carbamazepine or oxcarbazepine are the drugs of first choice, started at a low dose and titrated to effect. Gabapentin is a second-line or add-on option. Opioids are not effective for these brief paroxysms, and prednisone and amitriptyline are not recommended treatments for trigeminal neuralgia.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ean-tn",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "She is started on carbamazepine and will see a neurologist in 3 weeks.",
        prompt: "Which of the following laboratory abnormalities is most important to monitor for in her during treatment?",
        options: [
          "Hypercalcemia",
          "Hyperkalemia",
          "Hypoglycemia",
          "Hyponatremia",
          "Lactic acidosis",
        ],
        correct: 3,
        explanation:
          "She is 66 and takes hydrochlorothiazide, and carbamazepine commonly causes hyponatremia, with a higher risk in older adults and in those taking thiazide diuretics, so sodium should be checked during titration. Carbamazepine does not cause hyperkalemia, hypoglycemia or lactic acidosis. Thiazides can raise calcium slightly, but this is not the important interaction with carbamazepine.",
        keyFeature: { topic: "headache", n: 4 },
        source: "ean-tn",
      },
    ],
    sources: [S.ichd, S.bendtsen],
    ...META,
  },
  {
    "id": "headache-31",
    "topic": "headache",
    "title": "Headache and a near miss while driving",
    "stem": "A 41-year-old man presents to the emergency department with 10 days of worsening headache and low-grade fevers. For 3 days he has not seen cars coming from his right, and yesterday he nearly hit one while turning. He was diagnosed with HIV 6 years ago and stopped antiretroviral therapy 2 years ago. His last CD4 count, 4 months ago, was 38 x 10^6/L. He takes no prophylactic medications. He is alert and oriented. GCS 15. There is no neck stiffness. Strength and sensation are normal. Capillary glucose is 5.6 mmol/L.",
    "vitals": {
      "temperature": "37.9°C oral",
      "pulse": "92/minute",
      "resp": "16/minute",
      "bp": "124/78 mmHg",
      "o2sat": "98% on room air",
      "weight": "64 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examination findings best explains why he misses cars approaching from his right?",
        "options": [
          "Bitemporal hemianopia",
          "Left homonymous hemianopia",
          "Right central scotoma",
          "Right homonymous hemianopia",
          "Right sixth nerve palsy"
        ],
        "correct": 3,
        "explanation": "Loss of the right half of the visual field in both eyes, a right homonymous hemianopia, makes a patient miss things on the right. It localizes to the left optic radiation or occipital lobe, a site of focal lesions in this illness. A left hemianopia affects the left side. A bitemporal hemianopia comes from a chiasmal lesion and affects both outer fields. A central scotoma blurs what he looks at directly rather than one side. A sixth nerve palsy causes double vision rather than field loss.",
        "keyFeature": {
          "topic": "headache",
          "n": 3
        },
        "source": "vidal-toxo"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next investigation for him?",
        "options": [
          "Carotid Doppler ultrasound",
          "CT head with IV contrast",
          "Electroencephalogram",
          "Lumbar puncture first",
          "Visual field testing by optometry"
        ],
        "correct": 1,
        "explanation": "A new focal deficit with headache and fever in a man with a CD4 count of 38 x 10^6/L needs brain imaging now. Contrast shows the ring enhancement typical of opportunistic mass lesions. Mass lesions may make a lumbar puncture unsafe, so imaging comes first. Formal field testing and carotid Doppler do not look for a brain lesion. An EEG is not needed without seizures.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "vidal-toxo"
      },
      {
        "id": "q3",
        "kind": "single",
        "update": "Imaging shows three ring-enhancing lesions with surrounding edema, two of them in the basal ganglia, with no midline shift. Serum Toxoplasma IgG is positive.",
        "prompt": "Which of the following is the most likely cause of his brain lesions?",
        "options": [
          "Brain metastases",
          "Cerebral toxoplasmosis",
          "Primary CNS lymphoma",
          "Pyogenic brain abscess",
          "Tuberculoma"
        ],
        "correct": 1,
        "explanation": "Multiple ring-enhancing lesions in the basal ganglia, a CD4 count below 100 x 10^6/L without prophylaxis and a positive Toxoplasma IgG make cerebral toxoplasmosis the most likely cause. Empiric treatment follows, and about 86% of those who respond improve clinically by day 7. Primary CNS lymphoma is the main alternative, favoured by a single periventricular lesion, and is considered if he does not respond. Tuberculomas are more common in low income settings. He has no known cancer or bacteremic source.",
        "keyFeature": {
          "topic": "headache",
          "n": 2
        },
        "source": "vidal-toxo"
      }
    ],
    "sources": [
    {
      "id": "vidal-toxo",
      "citation": "Vidal JE. HIV-related cerebral toxoplasmosis revisited: current concepts and controversies of an old disease. J Int Assoc Provid AIDS Care. 2019.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6900575/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "headache-32",
    topic: "headache",
    title: "A headache that disappears lying down",
    stem:
      "A 42-year-old woman presents to the emergency department with a headache for 2 weeks that comes on within 20 minutes of getting up and is almost gone after she lies down for 15 minutes. It began after a bout of heavy coughing with a cold. She has had no recent lumbar puncture, epidural or head injury. She has ringing in her ears and neck pain when upright. She has joint hypermobility. She is lying flat and comfortable. The neurological examination and fundoscopy are normal. A non-contrast CT head done at another hospital last week was normal.",
    vitals: { temperature: "36.7°C oral", pulse: "72/minute", resp: "14/minute", bp: "116/74 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Colloid cyst of the third ventricle",
          "Idiopathic intracranial hypertension",
          "New daily persistent headache",
          "Primary cough headache",
          "Spontaneous intracranial hypotension",
        ],
        correct: 4,
        explanation:
          "An orthostatic headache that starts soon after standing and eases on lying down, without a preceding dural puncture, suggests spontaneous intracranial hypotension from a spinal CSF leak. Straining or coughing and connective tissue laxity are recognized precipitants, and tinnitus and neck pain are common. Idiopathic intracranial hypertension is worse lying down and on waking. Primary cough headache lasts seconds to minutes after each cough. A colloid cyst causes intermittent obstructive headaches rather than a consistent orthostatic pattern, and new daily persistent headache is not orthostatic.",
        keyFeature: { topic: "headache", n: 1 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate to confirm the suspected diagnosis?",
        options: [
          "CT angiography of the head",
          "Lumbar puncture with opening pressure",
          "MRI brain and spine with contrast",
          "Radionuclide cisternography",
          "Repeat non-contrast CT head",
        ],
        correct: 2,
        explanation:
          "Her orthostatic headache with a normal CT needs contrast-enhanced MRI of the brain and whole spine, the recommended first investigation. It shows pachymeningeal enhancement, brain sagging, venous distension or subdural collections, and spinal fluid collections that point to a leak. A normal CT does not exclude the diagnosis. Lumbar puncture is not needed, and a normal opening pressure does not exclude it. Cisternography and CT angiography are not first-line tests.",
        keyFeature: { topic: "headache", n: 6 },
        source: "sih-consensus",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "MRI shows diffuse pachymeningeal enhancement and sagging of the brainstem. Two weeks of conservative care has not helped.",
        prompt: "Which of the following is the most appropriate treatment for her?",
        options: [
          "Acetazolamide 250 mg PO",
          "Bed rest for 2 more weeks",
          "Epidural blood patch",
          "Oral prednisone taper",
          "Sumatriptan 6 mg SC",
        ],
        correct: 2,
        explanation:
          "Her MRI confirms intracranial hypotension and conservative care has failed, so a non-targeted epidural blood patch, the recommended first-line treatment, should be done as early as possible. Acetazolamide lowers CSF production and would worsen the problem. More bed rest has already failed. Steroids and triptans do not treat a CSF leak.",
        keyFeature: { topic: "headache", n: 2 },
        source: "sih-consensus",
      },
    ],
    sources: [S.cheema, S.ichd],
    ...META,
  },
  {
    id: "headache-33",
    topic: "headache",
    alsoTopics: ["cva"],
    title: "Weakness before the headache",
    stem:
      "A 63-year-old man presents to the emergency department 50 minutes after sudden weakness of his right arm and difficulty finding words while reading the newspaper. A throbbing left-sided headache began 10 minutes later. He has had migraine with visual aura since his twenties, typically shimmering zigzag lines that spread over about 20 minutes, but never weakness or speech change. He has hypertension and type 2 diabetes treated with ramipril and metformin. He has expressive aphasia and a right arm drift. Capillary glucose is 7.2 mmol/L.",
    vitals: { temperature: "36.8°C oral", pulse: "84/minute", resp: "16/minute", bp: "172/96 mmHg", o2sat: "97% on room air", weight: "90 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history most favours cerebral ischemia over migraine aura?",
        options: [
          "Headache following the deficits",
          "Language disturbance",
          "Prior migraine with aura",
          "Sudden maximal onset of weakness",
          "Throbbing quality of headache",
        ],
        correct: 3,
        explanation:
          "Migraine aura spreads gradually over 5 minutes or more, typically with positive features such as zigzag lines or tingling that march across the visual field or limb. Deficits that are maximal at onset and negative, such as weakness and word-finding difficulty, suggest ischemia. A headache after the neurological symptoms, a throbbing quality and language change can all occur with aura, and a history of migraine with aura does not protect against stroke.",
        keyFeature: { topic: "headache", n: 1 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate immediate action?",
        options: [
          "Activate the stroke protocol",
          "Metoclopramide and reassess in 1 hour",
          "MRI brain within 24 hours",
          "Outpatient neurology referral",
          "Sumatriptan and observe",
        ],
        correct: 0,
        explanation:
          "A new focal deficit that began 50 minutes ago is within the window for thrombolysis and thrombectomy, so he needs immediate stroke team activation with non-contrast CT and CT angiography. Attributing new weakness and aphasia to migraine in a 63-year-old with hypertension and diabetes risks missing treatable ischemia. Triptans are contraindicated when stroke is suspected. Delayed MRI or outpatient review would forfeit acute reperfusion.",
        keyFeature: { topic: "headache", n: 2 },
        source: "csbpr",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT head shows no hemorrhage. CT angiography shows no large vessel occlusion. His aphasia and arm weakness persist and are judged disabling.",
        prompt: "Which of the following is the most appropriate treatment now?",
        options: [
          "ASA 160 mg PO",
          "heparin 5 000 units IV",
          "labetalol 10 mg IV",
          "tenecteplase 22.5 mg IV",
          "tenecteplase 45 mg IV",
        ],
        correct: 3,
        explanation:
          "His disabling deficits began within 4.5 hours, CT shows no hemorrhage and his BP of 172/96 mmHg is below 185/110 mmHg, so he is eligible for thrombolysis. Canadian stroke recommendations support tenecteplase 0.25 mg/kg, maximum 25 mg, which is 0.25 x 90 = 22.5 mg as a single bolus. A 45 mg dose is double the correct dose and above the maximum. ASA and heparin are withheld for 24 hours after thrombolysis, and his BP does not need lowering before treatment.",
        keyFeature: { topic: "headache", n: 2 },
        source: "csbpr",
      },
    ],
    sources: [S.ichd, S.csbpr],
    ...META,
  },
  {
    id: "headache-34",
    topic: "headache",
    title: "Her usual migraine after heart stents",
    stem:
      "A 49-year-old woman presents to the emergency department with a left-sided throbbing headache that began 9 hours ago, with nausea and sensitivity to light and noise. It is the same as her usual migraine attacks, which occur about three times a month. She had two coronary stents placed after a myocardial infarction 2 years ago. She takes ASA, rosuvastatin, bisoprolol and ramipril. Her cardiologist stopped her rizatriptan. She took acetaminophen 1 000 mg 4 hours ago without relief. The neurological examination and fundoscopy are normal. There is no neck stiffness.",
    vitals: { temperature: "36.7°C oral", pulse: "62/minute", resp: "16/minute", bp: "132/80 mmHg", o2sat: "98% on room air", weight: "72 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate initial treatment for her headache?",
        options: [
          "dexamethasone 10 mg IV",
          "dihydroergotamine 1 mg IV",
          "hydromorphone 1 mg IV",
          "metoclopramide 10 mg IV",
          "sumatriptan 6 mg SC",
        ],
        correct: 3,
        explanation:
          "Her myocardial infarction and coronary stents rule out vasoconstrictors, and IV metoclopramide is strongly recommended for migraine in emergency settings and has no vasoconstrictor effect. Triptans such as sumatriptan and ergots such as dihydroergotamine constrict coronary arteries and are contraindicated in coronary artery disease. Opioids such as hydromorphone are not first-line for migraine. The Canadian Headache Society recommends against dexamethasone for acute pain relief.",
        keyFeature: { topic: "headache", n: 5 },
        source: "chs-ed",
      },
      {
        id: "q2",
        kind: "menu",
        prompt: "Which of the following conditions are contraindications to triptan therapy in a patient with migraine?",
        options: [
          "Age over 50 years",
          "Controlled asthma",
          "Coronary artery disease",
          "Current SSRI therapy",
          "Hemiplegic migraine",
          "Migraine with visual aura",
          "Previous ischemic stroke",
          "Treated hypothyroidism",
          "Uncontrolled hypertension",
        ],
        select: 4,
        correct: [2, 4, 6, 8],
        explanation:
          "Her coronary stents are the reason her rizatriptan was stopped: triptans cause vasoconstriction and are contraindicated in coronary artery disease and in cerebrovascular disease, uncontrolled hypertension and hemiplegic migraine. Migraine with typical visual aura is not a contraindication. Current SSRI therapy is not a contraindication, and the risk of serotonin syndrome with the combination is very low. Controlled asthma, treated hypothyroidism and age alone do not prevent their use.",
        keyFeature: { topic: "headache", n: 5 },
        source: "chs-acute",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Her pain falls to 3 of 10. Before discharge she asks how to manage future attacks.",
        prompt: "Which of the following is the most appropriate advice about her acute headache medication?",
        options: [
          "Avoid all medication during attacks",
          "Limit acute medication days each month",
          "Resume rizatriptan at half dose",
          "Take analgesics daily to prevent attacks",
          "Use codeine for attacks lasting all day",
        ],
        correct: 1,
        explanation:
          "Frequent use of acute medication causes medication overuse headache, so the Canadian Headache Society advises monitoring and limiting the number of days acute treatment is used. Daily analgesics to prevent attacks cause the overuse this advice aims to avoid. Opioids such as codeine should not be first-line therapy for migraine. Rizatriptan remains contraindicated at any dose because of her coronary disease, and withholding all acute treatment is unnecessary.",
        keyFeature: { topic: "headache", n: 5 },
        source: "cwc-headache",
      },
    ],
    sources: [S.chsEd, S.chsAcute, S.choosing],
    ...META,
  },
  {
    id: "headache-35",
    topic: "headache",
    title: "A young man who wants a scan",
    stem:
      "A 24-year-old man presents to the emergency department with a right-sided pulsating headache that began 7 hours ago, with nausea and sensitivity to light. Climbing stairs makes it worse. He has had similar headaches lasting most of a day about once a month for 4 years, but this is his first hospital visit because his usual ibuprofen did not help. He asks for a CT scan because his uncle had a brain tumour. He has no other medical history and takes no other medications. The neurological examination, fundoscopy and neck flexion are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "80/minute", resp: "14/minute", bp: "126/78 mmHg", o2sat: "99% on room air", weight: "78 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following best describes his headache using the ICHD-3 criteria?",
        options: [
          "Cluster headache",
          "Migraine without aura",
          "New daily persistent headache",
          "Probable migraine",
          "Tension-type headache",
        ],
        correct: 1,
        explanation:
          "He has had far more than the five attacks required, each lasting most of a day, within the 4 to 72 hour range. The pain is unilateral, pulsating and worsened by climbing stairs, meeting more than two of the four pain features, and he has nausea with photophobia. Probable migraine is used when one criterion is missing. Tension-type headache is usually bilateral, pressing and not aggravated by activity, and cluster headache lasts 15 to 180 minutes with autonomic signs. New daily persistent headache is continuous from onset.",
        keyFeature: { topic: "headache", n: 1 },
        source: "ichd3",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate response to his request for a CT scan?",
        options: [
          "Arrange outpatient MRI of the brain",
          "Explain that imaging is not indicated",
          "Order CT head before any treatment",
          "Order CT head if pain persists",
          "Refer to neurosurgery for screening",
        ],
        correct: 1,
        explanation:
          "His attacks meet criteria for episodic migraine and his examination is normal, and Choosing Wisely Canada advises against neuroimaging for patients who meet criteria for episodic migraine and have a normal examination and no red flags. A relative's brain tumour does not raise his own risk. Persistent pain in a typical attack is not in itself a red flag. Outpatient MRI and neurosurgical referral add cost and incidental findings without benefit.",
        keyFeature: { topic: "headache", n: 5 },
        source: "cwc-headache",
      },
      {
        id: "q3",
        kind: "menu",
        prompt: "Which of the following medications are most appropriate to treat his migraine now?",
        options: [
          "acetaminophen 1 000 mg IV",
          "dexamethasone 10 mg IV",
          "hydromorphone 1 mg IV",
          "ketorolac 30 mg IV",
          "magnesium sulfate 2 g IV",
          "metoclopramide 10 mg IV",
          "sumatriptan 6 mg SC",
          "valproate 500 mg IV",
        ],
        select: 3,
        correct: [3, 5, 6],
        explanation:
          "He is 24 with typical migraine, and metoclopramide and sumatriptan are strongly recommended, based on moderate evidence, and ketorolac, based on low evidence, for adults with migraine in emergency settings. He has no vascular disease, so sumatriptan is not contraindicated. The Canadian Headache Society recommends against dexamethasone for pain relief and weakly against magnesium sulfate, valproate and acetaminophen. Opioids such as hydromorphone are not first-line treatment for migraine.",
        keyFeature: { topic: "headache", n: 5 },
        source: "chs-ed",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "His pain resolves. He asks what to take next time, since ibuprofen no longer works for him.",
        prompt: "Which of the following is the most appropriate acute medication to prescribe for his future attacks?",
        options: [
          "almotriptan 12.5 mg PO at onset",
          "butalbital combination PO",
          "codeine 30 mg PO as needed",
          "ibuprofen 200 mg PO at onset",
          "oxycodone 5 mg PO as needed",
        ],
        correct: 0,
        explanation:
          "His usual ibuprofen no longer works, and triptans are strongly recommended for moderate to severe migraine, especially when NSAIDs have failed. Almotriptan 12.5 mg taken early in the attack is a standard dose, and he has no vascular contraindication. Codeine, oxycodone and butalbital combinations are not recommended for migraine and promote medication overuse headache. A 200 mg dose of ibuprofen is unlikely to help when his usual ibuprofen failed.",
        keyFeature: { topic: "headache", n: 5 },
        source: "chs-acute",
      },
    ],
    sources: [S.ichd, S.choosing, S.chsEd, S.chsAcute],
    ...META,
  },
  {
    "id": "headache-36",
    "topic": "headache",
    "title": "Collapse during a spin class",
    "stem": "A 22-year-old woman is brought to the emergency department by ambulance 50 minutes after a sudden severe headache during a spin class, followed by vomiting and clumsiness of her right hand. She has no history of hypertension, headaches or bleeding. She takes no medications or recreational drugs, and her urine hCG is negative. She is drowsy but follows commands. GCS 14 (E3 V5 M6). There is a mild right pronator drift and a right facial droop. Capillary glucose is 5.8 mmol/L. Non-contrast CT shows a 20 mL left parietal lobar hemorrhage with no subarachnoid blood and no hydrocephalus.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "88/minute",
      "resp": "18/minute",
      "bp": "176/98 mmHg",
      "o2sat": "98% on room air",
      "weight": "60 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following features of her case most changes the investigations she needs next?",
        "options": [
          "Drowsiness with GCS 14",
          "Lobar site without hypertension",
          "Onset during exercise",
          "Sudden severe headache",
          "Vomiting twice at onset"
        ],
        "correct": 1,
        "explanation": "The ESO and EANS guideline advises that younger people with a lobar or cerebellar hemorrhage and no history of hypertension be investigated further with CTA, MRI with MRA or catheter angiography. Drowsiness, vomiting and sudden severe headache reflect the size and speed of the bleed, not its cause. Onset during exertion occurs with many causes of hemorrhage and does not point to a vascular lesion on its own.",
        "keyFeature": {
          "topic": "headache",
          "n": 2
        },
        "source": "eso-ich"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most likely underlying cause of her hemorrhage?",
        "options": [
          "Arteriovenous malformation",
          "Cerebral amyloid angiopathy",
          "Coagulation factor deficiency",
          "Hemorrhagic metastasis",
          "Hypertensive small vessel disease"
        ],
        "correct": 0,
        "explanation": "A lobar hemorrhage in a young woman with no hypertension points to a macrovascular cause, most often an arteriovenous malformation. Amyloid angiopathy causes lobar bleeds in older adults. Hypertensive small vessel disease causes deep bleeds in people with long-standing hypertension, and her high BP now is an acute response. She has no bleeding history to suggest a factor deficiency, and no known cancer.",
        "keyFeature": {
          "topic": "headache",
          "n": 2
        },
        "source": "eso-ich"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate next investigation for her?",
        "options": [
          "CT angiography of the head",
          "Electroencephalogram",
          "Lumbar puncture",
          "Repeat CT head tomorrow",
          "Transcranial Doppler study"
        ],
        "correct": 0,
        "explanation": "CT angiography can be done at once after the plain CT and has high sensitivity and specificity for vascular malformations in selected patients. If it is normal, the guideline advises further tests, including catheter angiography. A lumbar puncture adds nothing when the CT already shows the blood and could be harmful with a mass lesion. Repeating the plain CT tomorrow delays finding the cause. Transcranial Doppler and EEG do not show a malformation.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "eso-ich"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following systolic BP targets is most appropriate for her in the first hours?",
        "options": [
          "Below 100 mmHg",
          "Below 120 mmHg",
          "Below 140 mmHg",
          "Below 160 mmHg",
          "Below 180 mmHg"
        ],
        "correct": 2,
        "explanation": "Early BP lowering within 6 hours of onset limits hematoma growth, and the guideline states that sustained reduction to below 140 mmHg is safe and linked to better function. Her systolic BP of 176 mmHg is above this. Targets of 160 or 180 mmHg allow more hematoma growth. Driving the pressure below 120 or 100 mmHg risks brain hypoperfusion without proven benefit.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "eso-ich"
      }
    ],
    "sources": [
    {
      "id": "eso-ich",
      "citation": "European Stroke Organisation and European Association of Neurosurgical Societies. Guideline on stroke due to spontaneous intracerebral haemorrhage. Eur Stroke J. 2025.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12098356/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    "id": "headache-37",
    "topic": "headache",
    "title": "Fever and headache after pituitary surgery",
    "stem": "A 54-year-old woman presents to the emergency department with 1 day of severe headache, fever and vomiting. Twelve days ago she had transsphenoidal surgery to remove a pituitary adenoma and went home on day 3. Since yesterday, clear watery fluid has dripped from her right nostril when she leans forward. She has hypertension and takes amlodipine and a tapering dose of dexamethasone. She is drowsy but oriented. GCS 14 (E3 V5 M6). There is neck stiffness. Clear fluid drips from the right nostril. There is no focal weakness and her visual fields are full.",
    "vitals": {
      "temperature": "38.9°C oral",
      "pulse": "112/minute",
      "resp": "20/minute",
      "bp": "138/82 mmHg",
      "o2sat": "97% on room air",
      "weight": "68 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following features of her history most raises concern for a serious cause of her headache?",
        "options": [
          "Amlodipine for hypertension",
          "Clear fluid dripping from her nose",
          "Dexamethasone dose being tapered",
          "Headache after pituitary surgery",
          "Vomiting since yesterday"
        ],
        "correct": 1,
        "explanation": "Clear fluid dripping from the nose after transsphenoidal surgery is likely a CSF leak, which gives bacteria from the nasal passages a direct route to the meninges. With fever and neck stiffness this makes healthcare-associated meningitis likely. Some headache is expected after pituitary surgery. Vomiting and a tapering steroid dose can accompany headache but do not explain fever and meningism. Amlodipine is unrelated.",
        "keyFeature": {
          "topic": "headache",
          "n": 1
        },
        "source": "idsa-hcavm"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate empiric antimicrobial regimen for her?",
        "options": [
          "ampicillin and gentamicin IV",
          "cefazolin 2 g IV every 8 hours",
          "ceftriaxone 2 g IV every 12 hours",
          "vancomycin and cefepime IV",
          "vancomycin and ceftriaxone IV"
        ],
        "correct": 3,
        "explanation": "After neurosurgery the likely organisms are staphylococci and gram-negative bacilli, including Pseudomonas. IDSA recommends vancomycin plus an antipseudomonal beta-lactam such as cefepime, ceftazidime or meropenem. Vancomycin with ceftriaxone is the community-acquired regimen and misses Pseudomonas. Ceftriaxone or cefazolin alone misses resistant staphylococci. Ampicillin with gentamicin targets Listeria and newborn pathogens.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "idsa-hcavm"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following investigations is most appropriate before a lumbar puncture?",
        "options": [
          "Chest radiograph for a source",
          "Electroencephalogram",
          "Head CT or MRI of the brain",
          "Nasal swab for culture",
          "Serum procalcitonin"
        ],
        "correct": 2,
        "explanation": "IDSA recommends neuroimaging when healthcare-associated meningitis is suspected. After skull base surgery it looks for an abscess, empyema, fluid collection or air that would change treatment and could make a lumbar puncture unsafe. CSF culture remains the key test, and cultures should be taken before antibiotics when possible. A nasal swab grows nasal flora and does not sample CSF. Procalcitonin may help separate infection from postoperative change but does not replace imaging. A chest radiograph and EEG do not assess the operative site.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "idsa-hcavm"
      }
    ],
    "sources": [
    {
      "id": "idsa-hcavm",
      "citation": "Tunkel AR, Hasbun R, Bhimraj A, et al. 2017 Infectious Diseases Society of America's clinical practice guidelines for healthcare-associated ventriculitis and meningitis. Clin Infect Dis. 2017.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5848239/"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "headache-38",
    topic: "headache",
    title: "Fever, headache and light sensitivity",
    stem:
      "A 23-year-old man presents to the emergency department with headache, fever and sensitivity to light that began 30 hours ago. He has vomited twice. His partner had a febrile illness with diarrhea last week. He has no rash. He is alert and oriented and answers questions appropriately. Neck flexion is uncomfortable. There is no focal neurological deficit and no papilledema. He has no history of seizures and is not immunocompromised.",
    vitals: { temperature: "38.5°C oral", pulse: "104/minute", resp: "18/minute", bp: "124/76 mmHg", o2sat: "98% on room air", weight: "75 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his investigation?",
        options: [
          "CT head before lumbar puncture",
          "Discharge with oral antibiotics",
          "Lumbar puncture without prior CT",
          "MRI brain before lumbar puncture",
          "Treat as migraine and observe",
        ],
        correct: 2,
        explanation:
          "He is alert and immunocompetent, with no focal deficit, papilledema, seizure or reduced consciousness, so he meets none of the IDSA criteria for CT before lumbar puncture, and the procedure should proceed promptly. A routine CT delays diagnosis, and if one is done antibiotics should be given first. MRI adds further delay. Fever, meningismus and photophobia need CSF analysis, not discharge or treatment as migraine.",
        keyFeature: { topic: "headache", n: 6 },
        source: "idsa-men",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CSF shows opening pressure 19 cm H2O, white cells 180 x 10^6/L with 85% lymphocytes, protein 0.7 g/L and glucose 3.3 mmol/L. Serum glucose is 5.6 mmol/L. Gram stain shows no organisms.",
        prompt: "Which of the following is the most likely diagnosis in this patient?",
        options: [
          "Cryptococcal meningitis",
          "Enteroviral meningitis",
          "Meningococcal meningitis",
          "Pneumococcal meningitis",
          "Tuberculous meningitis",
        ],
        correct: 1,
        explanation:
          "A lymphocytic pleocytosis of 180 x 10^6/L with mildly raised protein and a normal CSF to serum glucose ratio of 3.3 / 5.6 = 0.59 fits viral meningitis, and enteroviruses are the most common cause, often spread from close contacts. Bacterial meningitis from pneumococcus or meningococcus usually gives a neutrophil-predominant count, often in the thousands, with a ratio below 0.4. Tuberculous meningitis has a subacute course with a low glucose, and cryptococcal meningitis occurs mainly in immunocompromised hosts.",
        keyFeature: { topic: "headache", n: 2 },
        source: "uk-meningitis",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following features of his presentation most helps to identify the likely cause?",
        options: [
          "Partner's recent illness",
          "Photophobia for 30 hours",
          "Temperature of 38.5°C",
          "Two episodes of vomiting",
          "Uncomfortable neck flexion",
        ],
        correct: 0,
        explanation:
          "Enteroviruses spread by fecal-oral and respiratory contact, so a partner's recent febrile illness with diarrhea points toward an enteroviral cause and fits the lymphocytic CSF. Photophobia, fever, vomiting and uncomfortable neck flexion occur in both viral and bacterial meningitis and do not identify the cause.",
        keyFeature: { topic: "headache", n: 1 },
        source: "uk-meningitis",
      },
      {
        id: "q4",
        kind: "single",
        update:
          "He remains alert with stable vital signs. Blood and CSF cultures are pending.",
        prompt: "Which of the following is the most appropriate ongoing management?",
        options: [
          "Admission to intensive care",
          "Ceftriaxone for 10 days",
          "Dexamethasone for 4 days",
          "Repeat lumbar puncture tomorrow",
          "Supportive care and analgesia",
        ],
        correct: 4,
        explanation:
          "Enteroviral meningitis in an immunocompetent adult is self-limiting and is managed with analgesia, antiemetics and fluids. With a clearly viral CSF profile and no organisms on Gram stain, a full course of ceftriaxone is not needed. Dexamethasone is for suspected pneumococcal or other bacterial meningitis. A repeat lumbar puncture and intensive care are not needed in an alert patient with stable vital signs.",
        keyFeature: { topic: "headache", n: 2 },
        source: "uk-meningitis",
      },
    ],
    sources: [S.idsaMen, S.mcgill],
    ...META,
  },
  {
    "id": "headache-39",
    "topic": "headache",
    "title": "Cheek pain and a bad taste",
    "stem": "A 52-year-old woman presents to the emergency department with 9 days of left cheek pain and a left-sided headache. She has a foul-smelling discharge from her left nostril and a bad taste in her mouth. Three weeks ago she had a root canal on her upper left first molar. Her family physician started amoxicillin 500 mg three times daily 7 days ago, without improvement. She has no allergies and no visual symptoms. There is tenderness over the left cheek and pus in the left nasal cavity. The upper left first molar is tender to tapping. There is no eyelid swelling, eye movements are full and painless, and the neurological examination is normal. CT of the sinuses shows opacification of the left maxillary sinus and a lucency around the roots of the upper left first molar. The other sinuses are clear.",
    "vitals": {
      "temperature": "37.6°C oral",
      "pulse": "88/minute",
      "resp": "16/minute",
      "bp": "126/80 mmHg",
      "o2sat": "99% on room air",
      "weight": "70 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following clinical features, before any imaging, best pointed to a dental cause of her illness?",
        "options": [
          "Blocked nose on the left",
          "Foul-smelling discharge on one side",
          "Headache on the left side",
          "Low-grade fever of 37.6°C",
          "Tenderness over the left cheek"
        ],
        "correct": 1,
        "explanation": "The international consensus lists foul smell and one-sided disease among the clinical features that should make clinicians suspect a dental cause of maxillary sinusitis. A blocked nose, cheek tenderness, fever and headache occur in any maxillary sinusitis and do not separate dental from nondental disease. Suspicion then leads to dental assessment and imaging, which here shows the diseased molar.",
        "keyFeature": {
          "topic": "headache",
          "n": 4
        },
        "source": "craig-ods"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate antibiotic for her now?",
        "options": [
          "amoxicillin-clavulanate 875 mg PO twice daily",
          "azithromycin 500 mg PO daily",
          "cephalexin 500 mg PO four times daily",
          "ciprofloxacin 500 mg PO twice daily",
          "Continue amoxicillin 500 mg PO"
        ],
        "correct": 0,
        "explanation": "Sinusitis from a dental source is a mixed infection dominated by oral anaerobes, and she has not improved on amoxicillin. The expert consensus advises a penicillin with a beta-lactamase inhibitor, with or without metronidazole, to cover these organisms. Continuing amoxicillin alone repeats a failed treatment. Ciprofloxacin, cephalexin and azithromycin cover oral anaerobes poorly. She has no penicillin allergy that would call for an alternative.",
        "keyFeature": {
          "topic": "headache",
          "n": 4
        },
        "source": "lin-oms"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is most important to cure her sinus disease?",
        "options": [
          "Dental treatment of the source tooth",
          "Four weeks of antibiotics",
          "Intranasal corticosteroid alone",
          "MRI of the brain and orbits",
          "Saline irrigation alone"
        ],
        "correct": 0,
        "explanation": "The expert consensus states that antibiotic therapy alone rarely cures sinusitis from a dental source, so the infected tooth must be treated by a dentist, by root canal work or extraction, with sinus surgery when needed. A longer antibiotic course does not remove the source. Intranasal steroids and saline irrigation ease symptoms only. She has no eye or neurological signs, so brain and orbit MRI is not needed.",
        "keyFeature": {
          "topic": "headache",
          "n": 4
        },
        "source": "lin-oms"
      },
      {
        "id": "q4",
        "kind": "single",
        "prompt": "Which of the following new findings would most call for urgent admission and further imaging?",
        "options": [
          "Pain on tapping the molar",
          "Purulent nasal discharge",
          "Swelling of the left eyelids",
          "Temperature of 37.9°C",
          "Worse pain on bending forward"
        ],
        "correct": 2,
        "explanation": "The roof of the maxillary sinus forms most of the floor of the orbit, so spread of infection upward causes eyelid swelling and threatens the eye. New eyelid swelling calls for urgent admission, contrast imaging of the orbits and IV antibiotics. Pain on tapping the molar, purulent discharge, pain on bending forward and a low-grade temperature are expected features of her current sinus and dental infection.",
        "keyFeature": {
          "topic": "headache",
          "n": 4
        },
        "source": "lin-oms"
      }
    ],
    "sources": [
    {
      "id": "lin-oms",
      "citation": "Lin J, Wang C, Wang X, et al. Expert consensus on odontogenic maxillary sinusitis multi-disciplinary treatment. Int J Oral Sci. 2024.",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10834456/"
    },
    {
      "id": "craig-ods",
      "citation": "Craig JR, Poetker DM, Aksoy U, et al. Diagnosing odontogenic sinusitis: an international multidisciplinary consensus statement. Int Forum Allergy Rhinol. 2021.",
      "url": "https://doi.org/10.1002/alr.22777"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "headache-40",
    topic: "headache",
    title: "Pressure in both cheeks",
    stem:
      "A 39-year-old woman presents to the emergency department with facial pain and a frontal headache. She had a cold 12 days ago that improved, but for 4 days her symptoms have worsened, with thick yellow nasal discharge, nasal obstruction and pressure over both cheeks that is worse when she bends forward. She has no visual change, eye swelling or neck stiffness. She has no drug allergies. She is alert. Both cheeks are tender. Eye movements are full and painless and there is no periorbital swelling. The neurological examination is normal.",
    vitals: { temperature: "38.2°C oral", pulse: "90/minute", resp: "16/minute", bp: "122/76 mmHg", o2sat: "99% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features most supports a bacterial rather than viral cause of her symptoms?",
        options: [
          "Bilateral cheek tenderness",
          "Pain on bending forward",
          "Temperature of 38.2°C",
          "Thick yellow nasal discharge",
          "Worsening after improving",
        ],
        correct: 4,
        explanation:
          "Symptoms that worsen after an initial improvement, or that persist beyond 7 days without improving, suggest acute bacterial rhinosinusitis rather than a viral infection. Purulent discharge, facial pain on bending, cheek tenderness and a low-grade fever are part of the diagnosis but also occur with viral rhinosinusitis, so on their own they do not identify a bacterial cause.",
        keyFeature: { topic: "headache", n: 4 },
        source: "cfp-abrs",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most appropriate for her?",
        options: [
          "CT of the sinuses",
          "Nasal swab for culture",
          "Sinus radiographs",
          "Ultrasound of the sinuses",
          "No testing needed",
        ],
        correct: 4,
        explanation:
          "Acute bacterial rhinosinusitis is a clinical diagnosis, and the Canadian guideline advises against routine imaging in uncomplicated cases. CT is reserved for suspected complications such as orbital or intracranial spread, which her normal eye and neurological examination make unlikely. Plain radiographs and ultrasound are not useful for diagnosis, and a nasal swab does not reflect the sinus pathogens.",
        keyFeature: { topic: "headache", n: 4 },
        source: "cfp-abrs",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following is the most appropriate first-line antibiotic if one is prescribed?",
        options: [
          "amoxicillin 500 mg PO three times daily",
          "azithromycin 500 mg PO daily",
          "cephalexin 500 mg PO four times daily",
          "ciprofloxacin 500 mg PO twice daily",
          "moxifloxacin 400 mg PO daily",
        ],
        correct: 0,
        explanation:
          "She has no drug allergy, so amoxicillin, the first-line antibiotic for acute bacterial rhinosinusitis, is appropriate because it covers Streptococcus pneumoniae and most Haemophilus influenzae. Fluoroquinolones such as moxifloxacin are second-line agents for treatment failure. A macrolide such as azithromycin is an alternative only for beta-lactam allergy, which she does not have, and pneumococcal resistance to macrolides is common. Ciprofloxacin and cephalexin have poor activity against the usual pathogens.",
        keyFeature: { topic: "headache", n: 4 },
        source: "cfp-abrs",
      },
      {
        id: "q4",
        kind: "menu",
        prompt: "Which of the following findings would most require urgent CT and specialist assessment in a patient with sinusitis?",
        options: [
          "Altered mental status",
          "Cough at night",
          "Double vision",
          "Ear fullness",
          "Green nasal discharge",
          "Maxillary toothache",
          "Periorbital swelling",
          "Symptoms for 12 days",
        ],
        select: 3,
        correct: [0, 2, 6],
        explanation:
          "Altered mental status, double vision and periorbital swelling are red flags for orbital or intracranial complications of sinusitis and call for urgent imaging and specialist referral. Her examination shows none of them. Night cough, ear fullness, green discharge, maxillary toothache and symptoms for 12 days are common in uncomplicated sinusitis.",
        keyFeature: { topic: "headache", n: 3 },
        source: "cfp-abrs",
      },
    ],
    sources: [S.kaplan],
    ...META,
  },
  {
    "id": "headache-41",
    "topic": "headache",
    "title": "Headache after a summer at the cottage",
    "stem": "You are working in a community hospital emergency department in eastern Ontario in July. A 42-year-old man presents with 6 days of headache that is a little worse each day, with an aching neck, fatigue and low fevers. About 3 weeks ago his wife noticed a red patch on his right flank that spread to the size of a dinner plate over a week and then faded. He spends weekends clearing brush at a cottage near Kingston and often finds ticks on his clothes. He has no medical history and takes no medications. He is alert and oriented. His neck is mildly stiff with full range of movement. Fundoscopy is normal.",
    "vitals": {
      "temperature": "38.1°C oral",
      "pulse": "88/minute",
      "resp": "16/minute",
      "bp": "128/78 mmHg",
      "o2sat": "98% on room air",
      "weight": "84 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following examination findings would most indicate that the infection has spread to his nervous system?",
        "options": [
          "Faint ring on the right flank",
          "Pain in both knees on walking",
          "Temperature of 38.1°C",
          "Tender nodes in the right groin",
          "Weakness of one side of the face"
        ],
        "correct": 4,
        "explanation": "An expanding rash after tick exposure in an endemic area fits erythema migrans. The IDSA guideline lists meningitis, painful radiculoneuritis and cranial neuropathies, especially of the facial nerve, as acute neurologic Lyme disease. A facial palsy with his headache and stiff neck would point to spread to the nervous system and changes his treatment. A faded rash, fever, knee pain and enlarged nodes can all occur with Lyme disease but do not show nervous system involvement.",
        "keyFeature": {
          "topic": "headache",
          "n": 3
        },
        "source": "idsa-lyme-2020"
      },
      {
        "id": "q2",
        "kind": "single",
        "prompt": "Which of the following tests best supports a diagnosis of Lyme disease affecting his nervous system?",
        "options": [
          "Blood culture for Borrelia",
          "CSF antibody without serum",
          "PCR of blood for Borrelia",
          "Serum Lyme antibody testing",
          "Skin biopsy of the flank"
        ],
        "correct": 3,
        "explanation": "For possible Lyme neuroborreliosis, the IDSA guideline strongly recommends serum antibody testing rather than PCR or culture. Borrelia is rarely found in blood by culture or PCR. If CSF is tested, it should be paired with serum to calculate an antibody index, and CSF serology alone is not recommended. The rash has faded, so a skin biopsy would not help, and erythema migrans is diagnosed clinically in any case.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "idsa-lyme-2020"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following is the most appropriate antibiotic for his likely diagnosis?",
        "options": [
          "amoxicillin 500 mg PO three times daily",
          "azithromycin 500 mg PO daily",
          "doxycycline 100 mg PO twice daily",
          "prednisone 60 mg PO daily",
          "valacyclovir 1 g PO three times daily"
        ],
        "correct": 2,
        "explanation": "For Lyme meningitis, cranial neuropathy or radiculoneuropathy, the IDSA guideline recommends IV ceftriaxone, cefotaxime or penicillin G, or oral doxycycline, for 14 to 21 days. Oral doxycycline 100 mg twice daily suits a well adult who can take pills. Amoxicillin and azithromycin treat erythema migrans but are not listed for neurologic disease. Valacyclovir treats herpes viruses. Prednisone is not an antibiotic, and the guideline makes no recommendation on steroids for Lyme facial palsy.",
        "keyFeature": {
          "topic": "headache",
          "n": 6
        },
        "source": "idsa-lyme-2020"
      }
    ],
    "sources": [
    {
      "id": "idsa-lyme-2020",
      "citation": "Lantos PM, Rumbaugh J, Bockenstedt LK, et al. Clinical practice guidelines by the Infectious Diseases Society of America, American Academy of Neurology and American College of Rheumatology: 2020 guidelines for the prevention, diagnosis and treatment of Lyme disease. Clin Infect Dis. 2021.",
      "url": "https://doi.org/10.1093/cid/ciaa1215"
    }
  ],
    ...META,
    "version": 2
  },
  {
    id: "headache-42",
    topic: "headache",
    title: "Morning vomiting and a clumsy boy",
    stem:
      "A 5-year-old boy is brought to the emergency department by his parents because of headaches for 6 weeks. The headaches wake him at night or are present when he wakes, and he often vomits in the morning, after which he feels better. His teacher says he has become clumsy and trips often, and he has missed 4 days of school this month because of headaches. He has had no fever. He is otherwise healthy and his development is normal. He is alert and cooperative. He holds his head tilted to the right. Pupils are equal and reactive. He walks with a wide-based, unsteady gait.",
    vitals: { temperature: "36.8°C tympanic", pulse: "88/minute", resp: "20/minute", bp: "104/64 mmHg", o2sat: "99% on room air", weight: "19 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following features of his history is most concerning for a secondary cause of his headaches?",
        options: [
          "Absence of fever",
          "Normal developmental history",
          "Relief after vomiting",
          "School absences due to pain",
          "Waking from sleep",
        ],
        correct: 4,
        explanation:
          "Headache that wakes a child from sleep or is present on waking, with morning vomiting, suggests raised intracranial pressure and is a recognized red flag for a space-occupying lesion. Relief after vomiting occurs in both migraine and raised pressure and does not separate them. Absence of fever, normal development and missed school do not lower concern given his other features.",
        keyFeature: { topic: "headache", n: 1 },
        source: "aan-child-imaging",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following examination findings is most important to look for next in this boy?",
        options: [
          "Bulging tympanic membranes",
          "Cervical lymphadenopathy",
          "Nasal turbinate swelling",
          "Papilledema on fundoscopy",
          "Sinus tenderness",
        ],
        correct: 3,
        explanation:
          "In a child with nocturnal headache, morning vomiting and ataxia, fundoscopy for papilledema is essential to detect raised intracranial pressure, which adds urgency to imaging and neurosurgical input. Sinus, nasal and ear findings would suggest infection, and he has no fever. Cervical lymph nodes are not relevant to this presentation.",
        keyFeature: { topic: "headache", n: 3 },
        source: "headsmart-guideline",
      },
      {
        id: "q3",
        kind: "single",
        update: "Fundoscopy shows bilateral papilledema. The rest of the cranial nerve examination is normal.",
        prompt: "Which of the following locations for his lesion is most consistent with his examination findings?",
        options: [
          "Frontal lobe",
          "Pituitary fossa",
          "Posterior fossa",
          "Spinal cord",
          "Temporal lobe",
        ],
        correct: 2,
        explanation:
          "Gait ataxia with a head tilt and signs of raised pressure from blocked CSF flow point to the posterior fossa. Vomiting, headache, abnormal gait and papilledema are the most frequent features of posterior fossa tumours in children, such as medulloblastoma, pilocytic astrocytoma and ependymoma. Frontal and temporal lobe lesions cause personality change, seizures or hemiparesis rather than ataxia. A pituitary lesion causes visual field loss and hormone changes, and a spinal cord lesion does not cause headache with morning vomiting.",
        keyFeature: { topic: "headache", n: 3 },
        source: "cns-tumour-presentation",
      },
      {
        id: "q4",
        kind: "single",
        prompt: "Which of the following is the most appropriate next step in his care?",
        options: [
          "Lumbar puncture for pressure",
          "Neurology clinic referral",
          "Outpatient MRI within 6 weeks",
          "Trial of ibuprofen and diary",
          "Urgent brain imaging today",
        ],
        correct: 4,
        explanation:
          "Six weeks of headache with waking at night, morning vomiting, gait ataxia and a head tilt in a young child indicates a posterior fossa lesion until proven otherwise, and the abnormal examination calls for neuroimaging the same day, with MRI preferred where available. A lumbar puncture before imaging risks herniation with a posterior fossa mass. Outpatient imaging, clinic referral or a headache diary would delay diagnosis.",
        keyFeature: { topic: "headache", n: 6 },
        source: "aan-child-imaging",
      },
    ],
    sources: [S.lewis, S.wilneGuide, S.wilneMeta],
    ...META,
  },
  {
    id: "headache-43",
    topic: "headache",
    title: "Puffy eyes and dark urine",
    stem:
      "An 8-year-old boy is brought to the emergency department with a headache for 2 days and puffy eyes on waking for 4 days. His urine has looked cola-coloured since yesterday. He had a sore throat 2 weeks ago that was not treated. He has no history of kidney disease. He is alert and oriented. There is periorbital and mild ankle edema. His lungs are clear. The neurological examination and fundi are normal.",
    vitals: { temperature: "36.9°C oral", pulse: "92/minute", resp: "20/minute", bp: "148/98 mmHg", o2sat: "98% on room air", weight: "26 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of his history is most useful in identifying the underlying cause?",
        options: [
          "Absence of fever",
          "Cola-coloured urine",
          "Headache for 2 days",
          "Morning eyelid swelling",
          "Sore throat 2 weeks ago",
        ],
        correct: 4,
        explanation:
          "Cola-coloured urine, edema and hypertension about 2 weeks after an untreated sore throat point to post-streptococcal glomerulonephritis, and the latent period after pharyngitis is the most specific clue to the cause. The headache results from the hypertension. Edema and dark urine show a nephritic syndrome but not its cause. Absence of fever is nonspecific.",
        keyFeature: { topic: "headache", n: 1 },
        source: "kdigo-gn",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following investigations is most helpful to confirm the suspected cause?",
        options: [
          "Antinuclear antibody",
          "Complement C3 level",
          "Renal ultrasound",
          "Throat swab culture",
          "Urine protein electrophoresis",
        ],
        correct: 1,
        explanation:
          "A low serum C3, found in about 90% of children with post-streptococcal glomerulonephritis because immune complexes activate the alternative complement pathway, supports the diagnosis. Evidence of recent streptococcal infection, such as raised antistreptolysin O titres, adds to it. A throat culture shows whether streptococci are in the throat now but does not show the complement consumption that marks this nephritis. Renal ultrasound, antinuclear antibody and urine protein electrophoresis do not confirm the diagnosis.",
        keyFeature: { topic: "headache", n: 2 },
        source: "apsgn-review",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "Urinalysis shows blood 3+ and protein 1+. Creatinine 78 umol/L. Two hours later he vomits and says the headache is worse. BP is 162/108 mmHg.",
        prompt: "Which of the following is the most appropriate goal for lowering his BP?",
        options: [
          "Lower by 50% within 2 hours",
          "Lower only after a seizure occurs",
          "Lower to normal within 1 hour",
          "25% of the planned fall over 8 hours",
          "No lowering until nephrology review",
        ],
        correct: 3,
        explanation:
          "His worsening headache and vomiting with BP 162/108 mmHg make this symptomatic severe hypertension, for which the AAP guideline advises reducing BP by no more than 25% of the planned reduction over the first 8 hours, then to normal over the next 24 to 48 hours, to avoid cerebral hypoperfusion. Rapid normalization or a 50% fall within 2 hours risks ischemia of the brain and optic nerves because autoregulation has adapted. His symptoms are warning signs, so treatment should not wait for a seizure or a specialist review.",
        keyFeature: { topic: "headache", n: 6 },
        source: "aap-bp",
      },
    ],
    sources: [S.kdigo, S.ong, S.flynn],
    ...META,
  },
  {
    id: "headache-44",
    topic: "headache",
    alsoTopics: ["tox"],
    title: "Sudden headache at a party",
    stem:
      "A 33-year-old man is brought to the emergency department by ambulance with a sudden severe headache that began 1 hour ago at a party. He then developed weakness of his left arm and leg. He is sweating, restless and pulling at his IV line. His friend says he has no medical problems. He is oriented to person only. Pupils are 6 mm and reactive. He has a left facial droop and a dense left hemiparesis.",
    vitals: { temperature: "38.0°C oral", pulse: "128/minute", resp: "22/minute", bp: "214/122 mmHg", o2sat: "96% on room air", weight: "82 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following additional history questions is most important to ask his friend?",
        options: [
          "Family history of migraine",
          "Immunization history",
          "Recent stimulant drug use",
          "Recent travel abroad",
          "Sexual history",
        ],
        correct: 2,
        explanation:
          "Sweating, agitation, tachycardia, severe hypertension, dilated pupils and a raised temperature with a sudden headache and hemiparesis at a party suggest cocaine or amphetamine use, which causes intracerebral hemorrhage, subarachnoid hemorrhage and stroke. Knowing about stimulant use changes the treatment of his agitation and BP. Family history of migraine, immunizations, travel and sexual history do not explain this acute picture.",
        keyFeature: { topic: "headache", n: 1 },
        source: "rosen-ch144",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "CT head shows a 25 mL right basal ganglia hemorrhage without intraventricular extension. His friend confirms he used cocaine.",
        prompt: "Which of the following is the most appropriate first treatment for his agitation and sympathetic excess?",
        options: [
          "haloperidol 5 mg IV",
          "ketamine 80 mg IV",
          "lorazepam 2 mg IV",
          "metoprolol 5 mg IV",
          "nitroglycerin 0.4 mg SL",
        ],
        correct: 2,
        explanation:
          "His agitation, tachycardia, hypertension and raised temperature after cocaine call for a benzodiazepine, first-line for cocaine-induced agitation, which reduces the sympathetic drive. Ketamine is itself sympathomimetic and would raise his BP further. Haloperidol can impair heat loss and lower the seizure threshold. The safety of beta blockers such as metoprolol in cocaine toxicity is uncertain, so metoprolol is not a first choice. Nitroglycerin can treat cocaine-related coronary spasm but does not treat his agitation.",
        keyFeature: { topic: "headache", n: 6 },
        source: "aha-poisoning-2023",
      },
      {
        id: "q3",
        kind: "single",
        prompt: "Which of the following systolic BP target ranges is most appropriate once his agitation is controlled?",
        options: [
          "100 to 120 mmHg",
          "130 to 150 mmHg",
          "160 to 180 mmHg",
          "180 to 200 mmHg",
          "200 to 220 mmHg",
        ],
        correct: 1,
        explanation:
          "His systolic BP of 214 mmHg with an intracerebral hemorrhage falls in the 150 to 220 mmHg range where the AHA/ASA guideline supports a target of about 140 mmHg, within 130 to 150 mmHg, with smooth and sustained control. Lowering systolic BP below 130 mmHg is potentially harmful. Targets of 160 mmHg or more leave him at risk of hematoma expansion, and 100 to 120 mmHg risks cerebral hypoperfusion.",
        keyFeature: { topic: "headache", n: 6 },
        source: "aha-ich",
      },
    ],
    sources: [S.greenberg, S.rosenCh144, S.ahaTox],
    ...META,
  },
  {
    id: "headache-45",
    topic: "headache",
    title: "A seizure after a transplant",
    stem:
      "A 45-year-old woman is brought to the emergency department by ambulance after a generalized seizure at home that lasted 2 minutes. For 2 days she has had a worsening headache and blurred vision. She received a kidney transplant 3 months ago. Her medications include tacrolimus, mycophenolate and prednisone. She is now drowsy but obeys commands. She says she cannot see clearly in any direction. Pupils react normally. She has no focal limb weakness. There is no neck stiffness or rash.",
    vitals: { temperature: "37.2°C oral", pulse: "96/minute", resp: "18/minute", bp: "176/102 mmHg", o2sat: "97% on room air", weight: "64 kg" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following details of her history is most relevant to the likely cause of her presentation?",
        options: [
          "Blurred vision for 2 days",
          "Mycophenolate therapy",
          "Prednisone therapy",
          "Seizure lasting 2 minutes",
          "Tacrolimus therapy",
        ],
        correct: 4,
        explanation:
          "Headache, visual disturbance and seizures with raised BP in a patient taking a calcineurin inhibitor suggest posterior reversible encephalopathy syndrome, and tacrolimus is a well-recognized cause, sometimes even at therapeutic levels. Mycophenolate is not a typical cause. Prednisone can raise BP but is a less direct cause. Blurred vision and a brief seizure are manifestations rather than causes.",
        keyFeature: { topic: "headache", n: 1 },
        source: "pres",
      },
      {
        id: "q2",
        kind: "single",
        update:
          "Non-contrast CT head shows subtle low density in both occipital lobes. There is no hemorrhage.",
        prompt: "Which of the following is the most appropriate investigation to confirm the diagnosis?",
        options: [
          "CT angiography of the head",
          "Electroencephalography",
          "Lumbar puncture",
          "MRI of the brain",
          "Repeat CT in 24 hours",
        ],
        correct: 3,
        explanation:
          "Her CT shows only subtle occipital low density, and MRI, particularly FLAIR sequences, shows the typical symmetrical parieto-occipital vasogenic edema of posterior reversible encephalopathy far more sensitively than CT, and helps exclude venous thrombosis, stroke and infection. A lumbar puncture is not diagnostic, though it may be needed if infection is suspected in an immunosuppressed patient. EEG detects ongoing seizures but does not confirm the diagnosis, and CT angiography assesses the arteries.",
        keyFeature: { topic: "headache", n: 6 },
        source: "pres",
      },
      {
        id: "q3",
        kind: "menu",
        update:
          "Further imaging shows symmetrical vasogenic edema in both parieto-occipital regions. She has no further seizures.",
        prompt: "Which of the following are the most appropriate management steps for her?",
        options: [
          "Acetazolamide PO",
          "Controlled BP lowering",
          "Heparin infusion",
          "High-dose methylprednisolone",
          "Immunosuppressant dose review",
          "Lumbar puncture",
          "Stop all immunosuppression",
        ],
        select: 2,
        correct: [1, 4],
        explanation:
          "Her MRI confirms posterior reversible encephalopathy, which is managed by treating its triggers: controlled lowering of BP and reduction or change of the calcineurin inhibitor in discussion with the transplant team, with seizures treated as needed. Stopping all immunosuppression risks graft rejection. Steroid pulses, acetazolamide and heparin do not treat the syndrome, and a lumbar puncture adds nothing once imaging confirms it.",
        keyFeature: { topic: "headache", n: 2 },
        source: "pres",
      },
    ],
    sources: [S.fugate],
    ...META,
    version: 2,
  },
  {
    id: "headache-46",
    topic: "headache",
    title: "A drooping eyelid and eye pain",
    stem:
      "A 58-year-old woman presents to the emergency department with a left-sided headache and pain around the left eye for 2 days and double vision since this morning. She has type 2 diabetes and hypertension treated with metformin and amlodipine. She is alert. The left upper eyelid droops. The left eye rests down and out and cannot move up, down or inward. The left pupil is 6 mm and unreactive, and the right pupil is 3 mm and reactive. Visual acuity and the rest of the neurological examination are normal.",
    vitals: { temperature: "36.8°C oral", pulse: "82/minute", resp: "16/minute", bp: "156/88 mmHg", o2sat: "98% on room air" },
    questions: [
      {
        id: "q1",
        kind: "single",
        prompt: "Which of the following findings is most concerning for a compressive cause?",
        options: [
          "Dilated left pupil",
          "Drooping left eyelid",
          "Limited upward gaze",
          "Normal visual acuity",
          "Pain around the left eye",
        ],
        correct: 0,
        explanation:
          "Pupil involvement in a third nerve palsy suggests compression of the pupillomotor fibres on the surface of the nerve, most importantly by a posterior communicating artery aneurysm. Microvascular palsies from diabetes and hypertension usually spare the pupil. Ptosis, limited eye movements and periorbital pain occur with both causes, and normal acuity does not help.",
        keyFeature: { topic: "headache", n: 3 },
        source: "rosen-ch17",
      },
      {
        id: "q2",
        kind: "single",
        prompt: "Which of the following is the most appropriate investigation for her now?",
        options: [
          "CT angiography of the head",
          "Erythrocyte sedimentation rate",
          "Hemoglobin A1c and follow-up",
          "Non-contrast CT head only",
          "Orbital ultrasound",
        ],
        correct: 0,
        explanation:
          "A pupil-involving third nerve palsy needs urgent vascular imaging, and CT or MR angiography detects most posterior communicating artery aneurysms. An expanding aneurysm may be about to rupture, so this cannot wait. A non-contrast CT can miss an unruptured aneurysm. Checking glycemic control assumes a microvascular cause, and an ESR tests for giant cell arteritis, which does not explain a pupil-involving palsy here.",
        keyFeature: { topic: "headache", n: 6 },
        source: "rosen-ch17",
      },
      {
        id: "q3",
        kind: "single",
        update:
          "CT angiography shows a 7 mm left posterior communicating artery aneurysm. There is no subarachnoid blood.",
        prompt: "Which of the following is the most appropriate management for her now?",
        options: [
          "Admit for BP control only",
          "Outpatient neurosurgery clinic",
          "Repeat imaging in 6 months",
          "Tight glycemic control only",
          "Urgent neurosurgical referral",
        ],
        correct: 4,
        explanation:
          "An aneurysm that causes a new third nerve palsy is symptomatic and has a high short-term risk of rupture, so it needs urgent neurovascular or neurosurgical treatment, usually coiling or clipping. Outpatient review or repeat imaging delays treatment. BP control alone does not secure the aneurysm, and the palsy is from compression rather than diabetes.",
        keyFeature: { topic: "headache", n: 2 },
        source: "rosen-ch17",
      },
    ],
    sources: [S.rosenCh17],
    ...META,
  },
  {
    "id": "headache-47",
    "topic": "headache",
    "title": "A migraine on a new antidepressant",
    "stem": "A 46-year-old man presents to the emergency department with a left-sided throbbing headache that began 8 hours ago. He has nausea and finds light hard to bear. He has had migraine without aura since his twenties, about 2 attacks a month, and he usually treats them with sumatriptan 50 mg. Three months ago his psychiatrist started phenelzine 45 mg daily for depression. He took acetaminophen 1 000 mg 4 hours ago without relief. He has no kidney disease, peptic ulcer or asthma. He has no neck stiffness. His neurological examination and fundoscopy are normal.",
    "vitals": {
      "temperature": "36.8°C oral",
      "pulse": "92/minute",
      "resp": "16/minute",
      "bp": "158/94 mmHg",
      "o2sat": "98% on room air",
      "weight": "82 kg"
    },
    "questions": [
      {
        "id": "q1",
        "kind": "single",
        "prompt": "Which of the following details of the past day is most important to clarify next?",
        "options": [
          "Aged or fermented foods eaten",
          "Family history of migraine",
          "Hours of screen time today",
          "Number of attacks this year",
          "Recent change in eyeglasses"
        ],
        "correct": 0,
        "explanation": "He takes phenelzine, a monoamine oxidase inhibitor, and his blood pressure is raised. The Nardil product monograph names hypertensive crisis as its most important reaction and lists headache, nausea, neck stiffness, palpitations and photophobia among its features, with intracranial bleeding reported. Crises can follow foods high in tyramine, such as aged cheese, cured meats and fermented foods, or cold and sinus remedies. A crisis can therefore mimic his migraine and must be excluded before a migraine is treated. His family history, screen time, attack frequency and eyeglasses do not separate a crisis from migraine.",
        "keyFeature": {
          "topic": "headache",
          "n": 1
        },
        "source": "nardil-pm"
      },
      {
        "id": "q2",
        "kind": "single",
        "update": "Twenty minutes later his blood pressure is 136/84 mmHg. He says the pain matches his usual attacks in site, quality and associated symptoms.",
        "prompt": "Which of the following is the most appropriate treatment for his headache now?",
        "options": [
          "acetaminophen 1 000 mg IV",
          "dexamethasone 10 mg IV",
          "ketorolac 30 mg IV",
          "magnesium sulfate 2 g IV",
          "morphine 5 mg IV"
        ],
        "correct": 2,
        "explanation": "His headache matches his usual migraine, his blood pressure has settled and his examination is normal, so migraine can be treated. The Canadian Headache Society emergency review strongly recommends ketorolac for migraine pain, and he has no kidney disease, peptic ulcer or asthma. The same review recommends against dexamethasone for pain relief, and weakly against acetaminophen, magnesium sulfate and morphine. He has also already failed oral acetaminophen today.",
        "keyFeature": {
          "topic": "headache",
          "n": 5
        },
        "source": "chs-ed"
      },
      {
        "id": "q3",
        "kind": "single",
        "prompt": "Which of the following should he take at the start of future attacks while he takes phenelzine?",
        "options": [
          "butalbital compound PO",
          "naproxen 500 mg PO",
          "rizatriptan 10 mg PO",
          "sumatriptan 100 mg PO",
          "tramadol with acetaminophen PO"
        ],
        "correct": 1,
        "explanation": "The Canadian Headache Society guideline gives naproxen sodium a strong recommendation with high quality evidence for acute migraine, and it does not interact with his phenelzine. The same guideline advises avoiding sumatriptan and rizatriptan within 14 days of a monoamine oxidase inhibitor, because both are cleared by monoamine oxidase A. Canadian product monographs for both drugs list this combination as a contraindication, so his usual sumatriptan must stop while he takes phenelzine. The guideline does not recommend tramadol-containing drugs for routine use, and it strongly advises against butalbital-containing drugs.",
        "keyFeature": {
          "topic": "headache",
          "n": 5
        },
        "source": "chs-acute"
      }
    ],
    "sources": [
    {
      "id": "nardil-pm",
      "citation": "Searchlight Pharma Inc. Nardil (phenelzine sulfate tablets). Canadian product monograph. 2022.",
      "url": "https://searchlightpharma.com/wp-content/uploads/2023/10/Nardil-PM-ENG-Oct2022.pdf"
    },
    {
      "id": "chs-ed",
      "citation": "Orr SL, Aube M, Becker WJ, et al. Canadian Headache Society systematic review and recommendations on the treatment of migraine pain in emergency settings. Cephalalgia. 2015.",
      "url": "https://doi.org/10.1177/0333102414535997"
    },
    {
      "id": "chs-acute",
      "citation": "Worthington I, Pringsheim T, Gawel MJ, et al. Canadian Headache Society guideline: acute drug therapy for migraine headache. Can J Neurol Sci. 2013.",
      "url": "https://pubmed.ncbi.nlm.nih.gov/23968886/"
    }
  ],
    ...META,
    "version": 3
  },
];
