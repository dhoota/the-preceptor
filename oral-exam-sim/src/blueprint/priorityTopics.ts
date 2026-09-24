/**
 * CFPC Emergency Medicine priority topics and key features.
 * Topic names and key feature numbering follow the CFPC document
 * "Emergency Medicine Key Features of the Priority Topics for the Assessment
 * of Competence in Family Medicine at the Enhanced Skills Level" (2017).
 * Key feature text here is our own short paraphrase, not the CFPC wording.
 * Read the official text at CFPC_KF_URL.
 */
export const CFPC_KF_URL = "https://www.cfpc.ca/CFPC/media/Resources/Education/EM_KF-2017_Final_ENG.pdf";

export interface KeyFeature { n: number; summary: string; }
export interface PriorityTopic { id: string; name: string; page: number; keyFeatures: KeyFeature[]; }

export const PRIORITY_TOPICS = [
  {
    id: "abdominal-pain", name: "Abdominal pain", page: 2, keyFeatures: [
      { n: 1, summary: "Weigh age, sex, pain site and migration, and lethal or atypical causes such as AAA when building the differential." },
      { n: 2, summary: "When pain seems far worse than the exam suggests, actively exclude serious disease such as mesenteric ischemia or pancreatitis." },
      { n: 3, summary: "If no intra-abdominal source is found, search for causes outside the abdomen such as ACS, pneumonia, or DKA." },
      { n: 4, summary: "When findings point to a surgical emergency, involve the surgeon without waiting for needless extra tests." },
      { n: 5, summary: "Match imaging to the leading diagnosis, for example FAST in trauma or ultrasound for biliary and pelvic disease." },
      { n: 6, summary: "Do not exclude serious disease like appendicitis on one insensitive finding, such as a normal temperature or white count." },
      { n: 7, summary: "Factor radiation dose and lifetime cancer risk into imaging decisions for abdominal pain." },
      { n: 8, summary: "Avoid blaming abdominal pain on a urinary tract infection too readily, particularly in women." },
    ],
  },
  {
    id: "abuse-domestic", name: "Abuse (domestic)", page: 3, keyFeatures: [
      { n: 1, summary: "In higher risk groups such as older adults, pregnant women, and frequent ED users, watch for quiet clues of hidden abuse." },
      { n: 2, summary: "In injured patients, notice injury patterns, delayed presentation, or repeat visits that hint at undisclosed abuse." },
      { n: 3, summary: "When abuse is suspected, find all current and prior injuries using old charts, skeletal survey, or fundoscopy as needed." },
      { n: 4, summary: "Offer a private, nonjudgmental, safe setting that makes disclosure easier and builds trust with a possible victim." },
      { n: 5, summary: "Involve a team, including sexual assault services, abuse counsellors, and social workers, to intervene and support the patient." },
      { n: 6, summary: "Obtain the patient's consent to the plan, report to authorities when required, and secure safety for them and dependants." },
    ],
  },
  {
    id: "airway", name: "Airway management", page: 4, keyFeatures: [
      { n: 1, summary: "When first attempts at airway control fail, move promptly to alternative rescue techniques." },
      { n: 2, summary: "Anticipate early intubation in patients likely to deteriorate, such as those with burns, trauma, airway swelling, coma, or obesity." },
      { n: 3, summary: "Before intubating, predict difficulty with tools like LEMON or 3-3-2 and prepare equipment and backups to match." },
      { n: 4, summary: "Adapt the airway strategy to special contexts such as trauma, children, or significant comorbid illness." },
      { n: 5, summary: "Choose RSI drugs carefully when the patient has contraindications or conditions that favour specific agents." },
      { n: 6, summary: "Confirm tube placement with end tidal CO2, oximetry, and blood gases to catch misplacement that is not obvious." },
    ],
  },
  {
    id: "analgesia-sedation", name: "Analgesia/sedation", page: 5, keyFeatures: [
      { n: 1, summary: "Assess pain systematically with scales, vital sign clues, and the patient's preferences and past responses to analgesics." },
      { n: 2, summary: "Pick the safest effective pain control for the condition, including drugs, splints, local infiltration, and nerve blocks." },
      { n: 3, summary: "For severe pain, give enough analgesia, combining agents and routes and titrating the dose upward until relief." },
      { n: 4, summary: "Whenever a painful condition calls for sedation, make sure pain relief is also given, not sedation alone." },
      { n: 5, summary: "Before procedural sedation, formally evaluate the airway and hemodynamic risk of complications." },
      { n: 6, summary: "During and after sedation, monitor effect and adverse events, be ready for oversedation, and give safe discharge advice." },
    ],
  },
  {
    id: "anaphylaxis", name: "Anaphylaxis", page: 6, keyFeatures: [
      { n: 1, summary: "Keep anaphylaxis on the differential for every patient who presents in shock." },
      { n: 2, summary: "Diagnose anaphylaxis even when only some features, such as rash, hypotension, vomiting, or wheeze, are present." },
      { n: 3, summary: "Treat anaphylaxis fast with epinephrine, early airway management when needed, IV access, and fluid resuscitation." },
      { n: 4, summary: "At discharge, prescribe an epinephrine autoinjector, teach avoidance and rebound risk, and arrange allergy follow-up." },
    ],
  },
  {
    id: "arrhythmia", name: "Arrhythmia", page: 7, keyFeatures: [
      { n: 1, summary: "Exclude an arrhythmia in patients with vague symptoms of poor perfusion like syncope, presyncope, or dizziness." },
      { n: 2, summary: "Spot subtle ECG warnings of dangerous rhythms, such as a long QT, peaked T waves, or delta waves." },
      { n: 3, summary: "Read rhythm strips systematically, sorting narrow from wide complex tachycardias and identifying AV blocks." },
      { n: 4, summary: "Decide whether an arrhythmia is stable or unstable and choose electrical or drug therapy accordingly." },
      { n: 5, summary: "For any identified arrhythmia, consider which underlying causes may have triggered it." },
      { n: 6, summary: "Modify arrhythmia treatment for special contexts such as WPW, poisoning, hypothermia, or long QT." },
      { n: 7, summary: "Manage reperfusion rhythms mainly with support, using drugs only when clearly needed." },
      { n: 8, summary: "After return of spontaneous circulation, start targeted temperature management when indicated." },
    ],
  },
  {
    id: "asthma-copd", name: "Asthma/COPD", page: 8, keyFeatures: [
      { n: 1, summary: "For a first wheezing episode, consider mimics such as foreign body, heart failure, PE, or anaphylaxis before labelling it asthma." },
      { n: 2, summary: "In asthma or COPD flares, ask about prior ICU care or intubation, recent steroids, and frequent visits to gauge risk." },
      { n: 3, summary: "Grade exacerbation severity objectively, using peak flow or FEV1, rising CO2, fatigue, and mental status." },
      { n: 4, summary: "Identify and promptly treat coexisting problems in asthma patients, such as heart failure, pneumonia, or pneumothorax." },
      { n: 5, summary: "Start bronchodilators, steroids, and oxygen for acute asthma before the diagnosis is fully confirmed." },
      { n: 6, summary: "Give systemic or inhaled corticosteroids for asthma and COPD exacerbations when indicated." },
      { n: 7, summary: "Detect subtle signs of tiring or impending respiratory failure and begin early noninvasive support such as BiPAP." },
      { n: 8, summary: "Before discharge, confirm true recovery with an exertion test and objective measures, then review inhaler technique and follow-up." },
    ],
  },
  {
    id: "burns", name: "Burns", page: 9, keyFeatures: [
      { n: 1, summary: "In burned patients, look for linked trauma, smoke, cyanide or CO exposure, and complications like compartment syndrome or rhabdomyolysis." },
      { n: 2, summary: "Look for signs of inhalation injury in burn patients and secure the airway early if needed." },
      { n: 3, summary: "Give prompt, effective IV analgesia to patients with severe burns." },
      { n: 4, summary: "Calculate burn fluids from the time of injury, not ED arrival, and track the response." },
      { n: 5, summary: "After stabilization, base burn disposition on burn site and size, age, comorbidity, and home circumstances." },
      { n: 6, summary: "Ask about chemical contact, such as hydrofluoric acid, when hand or finger pain is severe and unexplained." },
    ],
  },
  {
    id: "cva", name: "Cerebrovascular accident (CVA)", page: 10, keyFeatures: [
      { n: 1, summary: "For acute neurologic deficits, consider stroke mimics such as hypoglycemia, migraine, Todd's paralysis, or tumour." },
      { n: 2, summary: "Recognize stroke in subtle non-MCA presentations, including posterior circulation signs or isolated confusion." },
      { n: 3, summary: "For persistent deficits, weigh reperfusion by localizing the territory, seeking a cause, choosing CT imaging, and assessing thrombolysis risk." },
      { n: 4, summary: "After a TIA, estimate recurrence risk with a tool like ABCD2 and arrange prompt carotid and cardiac workup." },
    ],
  },
  {
    id: "chest-pain", name: "Chest pain", page: 11, keyFeatures: [
      { n: 1, summary: "In undifferentiated chest pain, first consider and quickly recognize lethal causes like ACS, PE, pneumothorax, and aortic dissection." },
      { n: 2, summary: "Begin early treatment and tests, like ASA and an ECG, as possibilities emerge, even before the history is complete." },
      { n: 3, summary: "Take a detailed pain and symptom history to separate dangerous from benign causes and shape the differential." },
      { n: 4, summary: "Identify risk factors that shift the pretest likelihood of key diagnoses like ACS or PE." },
      { n: 5, summary: "Do not exclude serious causes on unreliable clues like chest wall tenderness, antacid response, or single normal tests." },
    ],
  },
  {
    id: "msk", name: "Common fractures/MSK", page: 12, keyFeatures: [
      { n: 1, summary: "When one injury is found, look for its typical companions, such as calcaneal with lumbar fractures or neurovascular damage." },
      { n: 2, summary: "Let the injury pattern suggest its cause, like posterior shoulder dislocation after seizure or ulnar shaft fracture after assault." },
      { n: 3, summary: "Consider referred pain when examining a painful site, for instance hip pathology felt in the knee." },
      { n: 4, summary: "When a suspected fracture has normal first films, consider occult scaphoid, hip, or elbow injury and treat accordingly." },
      { n: 5, summary: "Document distal pulses and nerve function around every manipulation, and reduce prior to films when indicated." },
      { n: 6, summary: "Carefully inspect for subtle open fractures, such as small punctures, bandaged wounds, or fight bites, so treatment is timely." },
      { n: 7, summary: "Consult surgery promptly for injuries needing urgent operative care like compartment syndrome or open fractures." },
      { n: 8, summary: "After diagnosis and initial care of an injury, arrange splinting, analgesia, and timely follow-up." },
    ],
  },
  {
    id: "cqi", name: "Continuous quality improvement (CQI)", page: 13, keyFeatures: [
      { n: 1, summary: "After an adverse event or near miss, find contributing factors and put corrective measures in place to prevent recurrence." },
      { n: 2, summary: "Disclose any adverse event and its effects to the patient or family, whatever the outcome." },
      { n: 3, summary: "Proactively plan and carry out reviews of care quality using outcome based quality indicators." },
      { n: 4, summary: "When a quality gap is found, design a simple improvement project and remeasure afterward to judge its effect." },
      { n: 5, summary: "Improve ED safety through core practices such as two identifiers, hand hygiene, SBAR, safe medication use, and reconciliation." },
      { n: 6, summary: "Build ongoing quality improvement work into everyday emergency practice." },
    ],
  },
  {
    id: "critical-appraisal", name: "Critical appraisal", page: 14, keyFeatures: [
      { n: 1, summary: "Identify a study's design and explain the strengths and weaknesses that design brings to the research question." },
      { n: 2, summary: "Calculate sensitivity, specificity, likelihood ratios, and NNT or NNH from study data and explain what they mean." },
      { n: 3, summary: "Use these statistics to justify specific clinical decisions and changes to practice." },
      { n: 4, summary: "Judge whether results matter clinically, apply to your own patients, and actually support the authors' conclusions." },
      { n: 5, summary: "Integrate the best available evidence into decisions about the care of an individual patient." },
    ],
  },
  {
    id: "loc", name: "Decreased level of consciousness", page: 15, keyFeatures: [
      { n: 1, summary: "Build a broad differential for altered consciousness while quickly excluding intracranial bleeding, CNS infection, or toxins." },
      { n: 2, summary: "Promptly correct reversible causes of altered consciousness such as hypoglycemia, hypoxia, opioid toxicity, or hypotension." },
      { n: 3, summary: "Seek collateral and prehospital history to establish how the patient's mental status differs from usual." },
      { n: 4, summary: "Do not attribute decreased consciousness to something minor like alcohol until head injury and other serious causes are excluded." },
      { n: 5, summary: "Document and trend consciousness with descriptive terms and a scored scale such as the GCS." },
    ],
  },
  {
    id: "dvt-pe", name: "Deep venous thrombosis (DVT) and pulmonary embolus (PE)", page: 16, keyFeatures: [
      { n: 1, summary: "When DVT or PE is suspected, take a history that captures the patient's baseline risk factors." },
      { n: 2, summary: "Examine for signs supporting DVT or PE and for findings that suggest an alternative diagnosis." },
      { n: 3, summary: "Apply validated decision rules to estimate the pretest probability of DVT or PE." },
      { n: 4, summary: "Choose tests suited to pretest probability, for example skipping D-dimer in high probability patients." },
      { n: 5, summary: "Tailor VTE testing to context, such as leg ultrasound first in pregnancy or CT over VQ with lung disease." },
      { n: 6, summary: "Choose anticoagulation that fits the patient, for example avoiding warfarin in pregnancy or LMWH in renal failure." },
      { n: 7, summary: "Use objective data like vitals, oxygen saturation, and biomarkers to decide whether outpatient VTE treatment is safe." },
    ],
  },
  {
    id: "delirium-agitation", name: "Delirium/agitation", page: 17, keyFeatures: [
      { n: 1, summary: "In an agitated patient, look for features that separate delirium from dementia and from psychosis." },
      { n: 2, summary: "Keep a wide differential for delirium, including structural, toxic, withdrawal, and metabolic causes, and quickly treat reversible ones." },
      { n: 3, summary: "Protect everyone's safety, including staff, families, other patients, and the patient, when managing agitation." },
      { n: 4, summary: "If restraint is needed, sedate with medication first, then monitor closely for as long as restraints remain." },
      { n: 5, summary: "Assess decision making capacity in delirium and decide whether a surrogate decision maker or involuntary treatment is needed." },
    ],
  },
  {
    id: "ems", name: "Emergency medical services (EMS)", page: 18, keyFeatures: [
      { n: 1, summary: "When EMS calls ahead, get a focused report, give field direction as needed, and ready the department and hospital." },
      { n: 2, summary: "At handover, ask paramedics for details only they know, like scene findings, treatments given, and changes en route." },
      { n: 3, summary: "Before transferring a patient beyond your facility's capacity, stabilize them for the trip, such as securing airway and IV access." },
      { n: 4, summary: "In mass casualty or disaster events, guide EMS on field triage, early treatment, and decontamination before arrival." },
    ],
  },
  {
    id: "environmental", name: "Environmental", page: 19, keyFeatures: [
      { n: 1, summary: "Suspect heat stroke in a confused, febrile patient exposed to heat and start cooling right away." },
      { n: 2, summary: "Cool severe hyperthermia rapidly with several methods before confirming the cause, while considering NMS, overdose, endocrine, or infection." },
      { n: 3, summary: "Rewarm hypothermic patients effectively, track core temperature with a reliable probe, and keep resuscitating until warm." },
      { n: 4, summary: "Consider decompression illness in divers with pain or unexplained symptoms, and refer for hyperbaric oxygen when indicated." },
      { n: 5, summary: "After electrical injury, look for hidden internal and cardiac damage and associated trauma, and monitor until risk has passed." },
    ],
  },
  {
    id: "eye", name: "Eye: red eye and loss of vision", page: 20, keyFeatures: [
      { n: 1, summary: "Before calling a red eye conjunctivitis, exclude serious causes such as glaucoma, iritis, keratitis, or a foreign body." },
      { n: 2, summary: "Take a detailed eye history, including onset, trauma, pain, and vision change, plus related systemic disease like temporal arteritis." },
      { n: 3, summary: "Record visual acuity for every eye complaint, then do a full eye exam including slit lamp." },
      { n: 4, summary: "Avoid prescribing topical steroids routinely for viral eye infections." },
      { n: 5, summary: "After eye or orbital trauma with subconjunctival bleeding, exclude hyphema, including subtle ones seen only on slit lamp." },
    ],
  },
  {
    id: "first-trimester-bleeding", name: "First trimester bleeding", page: 21, keyFeatures: [
      { n: 1, summary: "With acute vaginal bleeding, detect early shock using vital signs and orthostatic changes." },
      { n: 2, summary: "Consider pregnancy in any vaginal bleeding, and if positive, work up to exclude ectopic pregnancy." },
      { n: 3, summary: "Perform both a speculum and a bimanual pelvic exam in first trimester bleeding." },
      { n: 4, summary: "Know that beta-hCG levels and ultrasound findings have limits when excluding ectopic pregnancy." },
      { n: 5, summary: "Check Rh status in pregnant patients with bleeding so anti-D prophylaxis can be offered." },
      { n: 6, summary: "Before sending home a patient with a failed pregnancy, arrange counselling, emotional support, and follow-up care." },
    ],
  },
  {
    id: "gi-bleed", name: "Gastrointestinal (GI) bleed", page: 22, keyFeatures: [
      { n: 1, summary: "In GI bleeding, look for clues to the source such as medications, alcohol, weight loss, liver disease, or coagulopathy." },
      { n: 2, summary: "Remember that apparent lower GI bleeding can come from an upper GI source." },
      { n: 3, summary: "Suspect hidden GI blood loss in patients with hypoperfusion signs like syncope, angina, or confusion without GI symptoms." },
      { n: 4, summary: "Examine the nose, throat, and lungs to exclude non-GI sources of apparent melena or hematemesis." },
      { n: 5, summary: "Resuscitate severe GI bleeds well, with early crossmatch, a sensible choice of blood product, and crystalloid." },
      { n: 6, summary: "Arrange targeted therapy like octreotide, IV PPI, endoscopy, or surgery promptly while resuscitation continues." },
    ],
  },
  {
    id: "headache", name: "Headache", page: 23, keyFeatures: [
      { n: 1, summary: "Take a detailed headache history, covering onset, severity, prior episodes, and associated symptoms, to shape the differential." },
      { n: 2, summary: "Consider and exclude dangerous causes such as bleeding, meningitis, mass lesions, and pre-eclampsia when needed." },
      { n: 3, summary: "Examine specifically for red flags such as altered mentation, focal deficits, papilledema, meningismus, or rash." },
      { n: 4, summary: "When an intracranial cause is unlikely, consider sources like temporal arteritis, glaucoma, zoster, or sinusitis." },
      { n: 5, summary: "Diagnose and treat migraine when the picture fits and serious pathology has been excluded." },
      { n: 6, summary: "Investigate a worrying headache promptly with CT or LP, giving empiric therapy first when indicated, as in meningitis." },
    ],
  },
  {
    id: "infectious-diseases", name: "Infectious diseases", page: 24, keyFeatures: [
      { n: 1, summary: "Start empiric antibiotics early in suspected severe infection, before investigations are finished." },
      { n: 2, summary: "Recognize septic shock in serious infection and treat aggressively with structured resuscitation plus antibiotics." },
      { n: 3, summary: "Identify host factors, like immunosuppression, age, comorbidity, travel, or substance use, that raise the risk of severe infection." },
      { n: 4, summary: "Look beyond an apparently minor infection for complications, such as peritonsillar abscess, necrotizing fasciitis, or PID." },
      { n: 5, summary: "Include infection, even uncommon ones like malaria, TB, endocarditis, or Lyme disease, in vague presentations such as confusion." },
      { n: 6, summary: "When the source is unclear, examine often missed sites like the neck, skin, pelvis, and retained foreign bodies." },
      { n: 7, summary: "Tailor fever investigations to age and context, avoiding both excessive and insufficient testing." },
      { n: 8, summary: "Choose empiric antibiotics for bacterial infection based on likely organisms and local resistance before cultures return." },
      { n: 9, summary: "Avoid antibiotics for infections that are probably viral, such as a common cold." },
      { n: 10, summary: "Offer post-exposure prophylaxis to patients and contacts when needed, for example after needlesticks, rabies exposure, or tetanus risk." },
    ],
  },
  {
    id: "ischemic-heart-disease", name: "Ischemic heart disease", page: 25, keyFeatures: [
      { n: 1, summary: "In possible ACS, start testing immediately and continue serial ECGs and biomarkers until the question is resolved." },
      { n: 2, summary: "Interpret ECGs accurately in possible ACS, catching subtle ischemia and mimics like pericarditis." },
      { n: 3, summary: "Risk stratify confirmed or possible ACS, including atypical presentations, to guide management." },
      { n: 4, summary: "Do not exclude ACS on one negative test or weak clues like antacid relief, chest wall tenderness, or pain resolution." },
      { n: 5, summary: "Consider ACS in atypical presentations such as fatigue or dyspnea, particularly in elderly, diabetic, female, or cocaine using patients." },
      { n: 6, summary: "Arrange rapid reperfusion for STEMI using the best available option, PCI or thrombolysis." },
      { n: 7, summary: "Weigh risks and benefits of thrombolysis, PCI, pacing, or beta blockers before starting them in ACS." },
      { n: 8, summary: "For low risk possible ACS, arrange follow-up and further testing, such as stress testing, until resolved." },
    ],
  },
  {
    id: "lacerations", name: "Lacerations", page: 26, keyFeatures: [
      { n: 1, summary: "Clarify how every laceration happened to identify wounds at risk of infection, foreign body, or deep structure injury." },
      { n: 2, summary: "Examine for damage to nearby tendons, nerves, vessels, and joints in patients with lacerations." },
      { n: 3, summary: "Before closing a high risk wound, explore, irrigate, and image as needed, and consider delayed or no closure." },
      { n: 4, summary: "Give antibiotics and close follow-up for infection prone wounds, but withhold antibiotics from low risk ones." },
    ],
  },
  {
    id: "multiple-patients", name: "Multiple patients", page: 27, keyFeatures: [
      { n: 1, summary: "Triage several simultaneous patients using the presenting complaint, vitals, and airway, breathing, circulation." },
      { n: 2, summary: "With several patients, stabilize those needing resuscitation first, then manage everyone in parallel with timely reassessment." },
      { n: 3, summary: "Lead clearly, delegate tasks to nurses and RTs, and call in colleagues, consultants, or the OR early." },
      { n: 4, summary: "When demand exceeds ED capacity, activate disaster plans and extra resources early and coordinate with EMS." },
    ],
  },
  {
    id: "multiple-trauma", name: "Multiple trauma", page: 28, keyFeatures: [
      { n: 1, summary: "Perform critical interventions during the primary survey, such as spine protection, chest decompression, hemorrhage control, and pelvic binding." },
      { n: 2, summary: "Prioritize injuries as they are found so the most lethal problems are treated first." },
      { n: 3, summary: "After the primary survey, search for easily missed injuries and iatrogenic problems like hypothermia or vascular compromise." },
      { n: 4, summary: "Identify modifying factors in trauma patients such as pregnancy, bleeding disorders, medications, or advance directives." },
      { n: 5, summary: "Watch for subtle changes like narrowing pulse pressure or agitation that signal an evolving complication, and act on them." },
      { n: 6, summary: "Guide fluid and blood replacement in major trauma with defined targets such as MAP and a massive transfusion protocol." },
      { n: 7, summary: "Lead the trauma team and assign tasks so interventions happen in parallel." },
      { n: 8, summary: "Prepare trauma patients for transport by splinting, securing the airway, placing tubes, and planning for altitude effects." },
    ],
  },
  {
    id: "pediatric-fever", name: "Pediatric fever", page: 29, keyFeatures: [
      { n: 1, summary: "Stratify sepsis risk in febrile neonates, infants, and children by age and other factors to guide the septic workup." },
      { n: 2, summary: "Recognize subtle sepsis signs in febrile children, such as lethargy, poor feeding, or abnormal vital signs." },
      { n: 3, summary: "Give early broad spectrum antibiotics to children with suspected sepsis." },
      { n: 4, summary: "In a febrile child with rash, separate dangerous rashes like meningococcemia or measles from benign viral exanthems." },
      { n: 5, summary: "For persistent fever without a source, consider less common causes such as Kawasaki disease, malaria, inflammatory disease, or cancer." },
      { n: 6, summary: "Consider noninfectious causes like poisoning or heat illness in a febrile child with no clear source." },
      { n: 7, summary: "Do not give antibiotics to children whose fever likely has a viral source, such as URTI or otitis media." },
      { n: 8, summary: "Dose antipyretics for children by weight rather than by age." },
    ],
  },
  {
    id: "pre-eclampsia", name: "Pre-eclampsia", page: 30, keyFeatures: [
      { n: 1, summary: "Consider pre-eclampsia in pregnant patients with unexplained headache, abdominal pain, or confusion, even with normal blood pressure." },
      { n: 2, summary: "Evaluate suspected pre-eclampsia systematically, including risk factors, symptoms, BP change from baseline, and labs, to decide quickly." },
      { n: 3, summary: "Exclude HELLP syndrome in pregnant patients with vague symptoms like nausea, vomiting, or abdominal pain before other diagnoses." },
      { n: 4, summary: "Begin BP control and seizure prophylaxis, monitor mother and fetus, and arrange urgent obstetric planning for delivery." },
    ],
  },
  {
    id: "pulmonary-edema", name: "Pulmonary edema", page: 31, keyFeatures: [
      { n: 1, summary: "Treat pulmonary edema early and aggressively, such as with BiPAP, before the cause is known." },
      { n: 2, summary: "While stabilizing pulmonary edema, search for the underlying cause, such as MI, volume overload, or anemia." },
      { n: 3, summary: "Treat the identified cause of pulmonary edema, for example with reperfusion, diuresis, or transfusion, to prevent worsening." },
      { n: 4, summary: "Watch for impending respiratory failure in pulmonary edema and escalate with ventilatory support or vasoactive drugs." },
      { n: 5, summary: "Consider subtle pulmonary edema in patients with apparent respiratory complaints like exertional dyspnea or wheeze." },
      { n: 6, summary: "Before discharge after pulmonary edema, confirm safety with an exertion test, home situation review, and follow-up." },
    ],
  },
  {
    id: "seizures", name: "Seizures", page: 32, keyFeatures: [
      { n: 1, summary: "Consider seizure in unwitnessed events with confusion, incontinence, unexplained falls or injury, or tics in children." },
      { n: 2, summary: "Search for and promptly treat quickly reversible seizure causes such as hypoglycemia, toxins, or arrhythmia." },
      { n: 3, summary: "Diagnose status epilepticus when seizures recur or the patient does not recover between them, and treat promptly." },
      { n: 4, summary: "In ongoing seizures, support airway and breathing, treat special causes like eclampsia or toxins, and escalate anticonvulsants stepwise." },
      { n: 5, summary: "After a first seizure, advise on risky activities such as driving and meet reporting obligations." },
      { n: 6, summary: "Investigate a first seizure promptly for its cause, using CT, LP, EEG, or metabolic and toxicology testing as needed." },
      { n: 7, summary: "In known epilepsy, check adherence, drug levels, and triggers, but avoid unnecessary testing." },
      { n: 8, summary: "Diagnose a simple febrile seizure with full recovery on history and exam alone without extra tests." },
    ],
  },
  {
    id: "shock", name: "Shock/dehydration", page: 33, keyFeatures: [
      { n: 1, summary: "Recognize subtle shock in groups that present atypically, including children, pregnant patients, and older adults." },
      { n: 2, summary: "Estimate the fluid deficit in dehydrated patients accurately, accounting for their age." },
      { n: 3, summary: "Choose the right resuscitation fluid for the shocked patient, whether blood, crystalloid, or colloid." },
      { n: 4, summary: "Treat septic shock aggressively, adjusting fluids and antibiotics through ongoing clinical reassessment." },
      { n: 5, summary: "Look past hypovolemia for other shock types such as cardiogenic, neurogenic, toxic, or anaphylactic." },
      { n: 6, summary: "Use bedside ultrasound, chest X-ray, and ECG to narrow down the cause of shock." },
      { n: 7, summary: "When vasopressors are needed, choose the agent according to the shock type and presentation." },
      { n: 8, summary: "Give non-fluid therapies when indicated, such as steroids for adrenal crisis or antidotes for poisoning." },
    ],
  },
  {
    id: "sob", name: "Shortness of breath", page: 34, keyFeatures: [
      { n: 1, summary: "In acute dyspnea, distinguish upper from lower airway causes because emergency management differs." },
      { n: 2, summary: "Keep a broad dyspnea differential, seeking combined causes, new problems in chronic disease, and non-pulmonary causes like acidosis or anemia." },
      { n: 3, summary: "Begin emergency treatment for severe dyspnea before a final diagnosis, deciding between invasive and noninvasive ventilation." },
      { n: 4, summary: "Gauge dyspnea severity with subjective and objective measures like mental status, peak flow, or ABG to catch respiratory failure early." },
      { n: 5, summary: "Choose PE tests with pretest probability in mind, for example not relying on D-dimer in high risk or a normal CXR." },
    ],
  },
  {
    id: "suicide-risk", name: "Suicide risk", page: 35, keyFeatures: [
      { n: 1, summary: "Ask specifically about suicide risk factors, such as hopelessness, poor supports, and impulsivity, in patients with psychiatric complaints." },
      { n: 2, summary: "Recognize hidden suicidality, like unexplained injuries, self-neglect, or 'accidental' overdoses, especially in older, postpartum, or substance using patients." },
      { n: 3, summary: "If a suicidal patient wants to leave, assess and document certification criteria, weighing patient rights and legal implications." },
      { n: 4, summary: "For low risk suicidal patients, agree on an outpatient plan together and discharge at the right time." },
      { n: 5, summary: "Outpatient plans should include scheduled follow-up, crisis contacts, and, when used, medication counselling on effects and side effects." },
    ],
  },
  {
    id: "tox", name: "Toxicology", page: 36, keyFeatures: [
      { n: 1, summary: "Gather collateral from the scene, including EMS reports, pill bottles, and recent prescriptions, to identify likely toxins." },
      { n: 2, summary: "Recognize toxidromes from clinical patterns and use antidotes selectively, weighing indications and contraindications." },
      { n: 3, summary: "Suspect co-ingestion when signs are mixed or labs are unexpected, such as a raised osmolar gap." },
      { n: 4, summary: "Choose treatments using both the toxidrome and the suspected agent, like bicarbonate for TCA wide complex tachycardia." },
      { n: 5, summary: "Anticipate complications of poisoning such as respiratory depression or dysrhythmias." },
      { n: 6, summary: "Use decontamination or enhanced elimination when timing and pharmacokinetics support it, as with sustained release drugs or iron." },
      { n: 7, summary: "Order tests that change management, like ECG, ABG, gaps, and specific drug levels, rather than broad urine screens." },
      { n: 8, summary: "Assess withdrawal from alcohol or opioids with objective signs to judge its severity and set priorities." },
    ],
  },
] as const satisfies readonly PriorityTopic[];

export type PriorityTopicId = (typeof PRIORITY_TOPICS)[number]["id"];
export const topicById = (id: string) => PRIORITY_TOPICS.find((t) => t.id === id);
export const topicName = (id: string) => topicById(id)?.name ?? id;
