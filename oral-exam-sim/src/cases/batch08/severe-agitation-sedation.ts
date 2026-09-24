// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const severeAgitationSedation: OralCase = {
  id: "severe-agitation-sedation",
  title: "A man held down by police",
  blueprint: "psych",
  alsoCovers: ["tox", "ethics"],
  priorityTopic: "delirium-agitation",
  keyFeatures: [
    { topic: "delirium-agitation", n: 2 },
    { topic: "delirium-agitation", n: 3 },
    { topic: "delirium-agitation", n: 4 },
    { topic: "environmental", n: 2 },
    { topic: "airway", n: 5 },
  ],
  summary: "Police bring a young man who is shouting and fighting to the emergency department after he ran through traffic.",
  durationMinutes: 14,
  stem:
    "You are the attending in a busy urban emergency department in Toronto. There is a security team, a psychiatric emergency service, an ICU and CT. " +
    "Police bring in Marcus Ferreira, 29 years old, estimated weight 90 kg. They apprehended him under section 17 of the Mental Health Act after he ran through traffic shouting that people were chasing him. " +
    "A friend told police he had been using crystal meth for two days. " +
    "Triage vitals, taken with difficulty: heart rate 142, blood pressure 170/98, respiratory rate 28, SpO2 97 percent with a poor trace, tympanic temperature 38.7. CTAS 1. " +
    "The charge nurse calls you: 'He is on a stretcher in resus 2. Two officers and a guard are holding him face down. He is screaming and soaked in sweat.'",
  findings: [
    {
      id: "appearance",
      label: "Appearance and behaviour",
      result:
        "Screaming, pulling against the officers, not responding to his name. Pupils 7 mm. Skin hot and drenched. Abrasions on both knees and a 3 cm scalp laceration above the right ear with dried blood.",
    },
    {
      id: "glucose",
      label: "Capillary glucose",
      result: "5.2 mmol/L once obtained after sedation.",
    },
    {
      id: "temp",
      label: "Core temperature after sedation",
      result: "Rectal temperature 40.3 degrees Celsius.",
    },
    {
      id: "vitals-post",
      label: "Vitals after sedation",
      result: "Heart rate 148. Blood pressure 158/90. Respiratory rate 24. SpO2 95 percent on 2 L nasal cannula. End tidal CO2 38 mmHg with a normal waveform.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Sodium 141 mmol/L. Potassium 5.6 mmol/L. Bicarbonate 16 mmol/L. Creatinine 162 µmol/L. CK 14,800 U/L. Lactate 5.9 mmol/L. " +
        "High sensitivity troponin T 38 ng/L. Ethanol not detected. Acetaminophen and salicylate not detected. WBC 16.2 x 10^9/L.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus tachycardia at 146. QRS 92 ms. QTc 468 ms. No ST elevation. No peaked T waves.",
    },
    {
      id: "exam-post",
      label: "Exam after sedation",
      result:
        "No neck stiffness. Pupils equal and reactive. Moves all limbs. No clonus. Muscle tone normal. Bowel sounds present. No track marks. Urine dark brown.",
    },
    {
      id: "ct",
      label: "CT head",
      result: "Small right parietal scalp hematoma. No fracture. No intracranial hemorrhage.",
    },
    {
      id: "urine",
      label: "Urinalysis",
      result: "Large blood on dipstick with 0 to 2 red cells per high power field, suggesting myoglobin.",
    },
    {
      id: "friend",
      label: "Collateral from the friend by phone",
      result:
        "He has used meth for about a year. No psychiatric history that the friend knows of. No regular medications. He was up for two nights and started saying the neighbours were filming him this morning.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Arrival in resus",
      text:
        "You walk in. He is face down on the stretcher. One officer has a knee across his upper back. He is breathing fast and yelling, 'Get off me.' The team looks at you.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The first minute",
      prompt: "What do you do right now?",
      seconds: 60,
      modelAnswer: [
        "Take charge and assign roles: leader, one person per limb, one at the head, one drawing medication.",
        "Get the knee off his back and move him supine or on his side. Prone restraint with weight on the back risks sudden death.",
        "One calm voice. Brief verbal de-escalation and offer of help.",
        "Prepare parenteral sedation now since he is dangerous and cannot engage.",
        "Airway equipment, suction, oxygen and end tidal CO2 at the bedside.",
      ],
      rubric: ["ag-r1", "ag-l1", "ag-c1"],
      choices: [
        {
          id: "c-supine",
          label: "I asked the officer to take his knee off, had the team turn him supine with one person per limb, spoke to him calmly and had sedation drawn up.",
          next: "q-sedate",
          quality: "strong",
          feedback:
            "Good leadership. Prone restraint with weight on the back is linked to sudden death from restricted breathing and exhaustion. " +
            "A coordinated supine hold with one voice talking to him is safer for him and staff.",
        },
        {
          id: "c-talk-prone",
          label: "I tried to talk him down for several minutes while the team kept holding him face down.",
          next: "s-talk-prone",
          quality: "partial",
          feedback:
            "Verbal de-escalation is always worth a try, but he cannot engage and he is still prone with weight on his back. " +
            "The examiner wanted the restraint position fixed first and sedation prepared at the same time.",
        },
        {
          id: "c-keep-prone",
          label: "I told the officers to keep him face down until the sedation worked because it was the safest way to control him.",
          next: "s-keep-prone",
          quality: "unsafe",
          feedback:
            "Prone restraint with pressure on the back is a known cause of restraint related death, especially with stimulants and hyperthermia. " +
            "The examiner wanted him moved supine or lateral immediately.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-talk-prone",
      phase: "Four minutes later",
      text:
        "He is still screaming and his breathing is getting shallower. His face is dusky. The nurse says the SpO2 now reads 86 percent. You have him turned supine and his colour improves.",
      next: "q-sedate",
    },
    {
      kind: "say",
      id: "s-keep-prone",
      phase: "Two minutes later",
      text:
        "He suddenly goes quiet. The officer says, 'Finally.' The nurse cannot find a pulse oximeter trace and his lips are blue. You roll him over. He is gasping with a pulse of 160. With a jaw thrust and bag valve mask he pinks up and starts struggling again.",
      next: "q-sedate",
    },
    {
      kind: "question",
      id: "q-sedate",
      phase: "Sedation",
      prompt: "He is supine and still fighting. There is no IV. What do you give, in what dose and by what route?",
      seconds: 75,
      modelAnswer: [
        "IM route since there is no IV.",
        "Ketamine 4 to 5 mg/kg IM, about 360 mg, for rapid dissociation. Or midazolam 5 to 10 mg IM.",
        "A combination of midazolam 5 mg and haloperidol 5 mg IM is an alternative when stimulants are less likely.",
        "Benzodiazepines are preferred for stimulant toxicity because they reduce sympathetic drive.",
        "Monitor continuously after sedation with SpO2, end tidal CO2 and a nurse at the bedside.",
        "Avoid IM olanzapine together with a parenteral benzodiazepine because of reported cardiorespiratory depression.",
      ],
      rubric: ["ag-m1", "ag-m2"],
      choices: [
        {
          id: "c-ketamine",
          label: "I gave ketamine 360 mg IM, about 4 mg/kg, had midazolam ready for emergence, and kept him on continuous SpO2 and capnography with a nurse at the bedside.",
          next: "s-sedated",
          quality: "strong",
          feedback:
            "Correct. IM ketamine at 4 to 5 mg/kg works within a few minutes and keeps airway reflexes. " +
            "Midazolam 5 to 10 mg IM is also a good choice. Continuous monitoring is mandatory after any parenteral sedation.",
        },
        {
          id: "c-halo-alone",
          label: "I gave haloperidol 5 mg IM alone.",
          next: "s-halo",
          quality: "partial",
          feedback:
            "Haloperidol alone is slow to work and does not treat the sympathetic storm of stimulant toxicity. It can also impair heat loss and lower the seizure threshold. " +
            "The examiner wanted a fast agent such as ketamine or a benzodiazepine.",
        },
        {
          id: "c-no-monitor",
          label: "I gave olanzapine 10 mg IM and midazolam 10 mg IM together and left him with security in a side room once he settled.",
          next: "s-no-monitor",
          quality: "unsafe",
          feedback:
            "IM olanzapine with a parenteral benzodiazepine has been linked to respiratory depression and hypotension. Leaving a sedated patient without monitoring is the key safety failure. " +
            "The examiner wanted continuous SpO2 and capnography with a nurse present.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-halo",
      phase: "Fifteen minutes later",
      text:
        "He is still fighting. The guard has a bite wound on his forearm. His heart rate is 156. You give midazolam 10 mg IM. Five minutes later he settles and you place him on full monitoring.",
      next: "s-sedated",
    },
    {
      kind: "say",
      id: "s-no-monitor",
      phase: "Twenty minutes later",
      text:
        "The guard calls for help. He is snoring with SpO2 of 81 percent and a blood pressure of 88/50. You reposition the airway, give oxygen by bag valve mask and move him back to resus on full monitoring. He recovers over 10 minutes.",
      next: "s-sedated",
    },
    {
      kind: "say",
      id: "s-sedated",
      phase: "Sedated",
      text:
        "He is now dissociated and breathing on his own. You get two IVs. Rectal temperature 40.3. Heart rate 148. Glucose 5.2 mmol/L. CK 14,800 U/L. Potassium 5.6 mmol/L. Creatinine 162 µmol/L. His urine is dark brown.",
      next: "q-workup",
    },
    {
      kind: "question",
      id: "q-workup",
      phase: "Medical assessment",
      prompt: "What is your differential now, and what else do you need to check?",
      seconds: 75,
      modelAnswer: [
        "Sympathomimetic toxicity with hyperthermia, rhabdomyolysis and acute kidney injury is most likely.",
        "Exclude hypoglycemia, head injury, CNS infection, serotonin toxicity, NMS, thyroid storm and alcohol or sedative withdrawal.",
        "Full exam for trauma. CT head for the scalp injury and altered mental status.",
        "ECG, troponin, electrolytes, CK, lactate, creatinine and urinalysis.",
        "LP if fever and altered mental status persist without another explanation.",
      ],
      rubric: ["ag-a1", "ag-a2"],
      next: "q-cool",
    },
    {
      kind: "question",
      id: "q-cool",
      phase: "Hyperthermia",
      prompt: "His temperature is 40.3 and climbing. How do you manage it?",
      seconds: 75,
      modelAnswer: [
        "This is a life threat. Cool him actively now.",
        "Evaporative cooling with mist and fans, ice packs to neck, axillae and groin, or ice water immersion if available.",
        "Stop at about 38.5 to 39 to avoid overshoot.",
        "More benzodiazepine to reduce muscle activity and sympathetic drive.",
        "Antipyretics do not work because the hypothalamic set point is normal.",
        "Isotonic fluid for rhabdomyolysis with a target urine output of about 200 to 300 mL/h.",
      ],
      rubric: ["ag-m3", "ag-m4"],
      choices: [
        {
          id: "c-active-cool",
          label: "I started evaporative cooling with ice packs, gave more midazolam to control muscle activity, and ran isotonic fluid for rhabdomyolysis aiming for a urine output of 200 to 300 mL/h.",
          next: "s-worse",
          quality: "strong",
          feedback:
            "Right. Hyperthermia is the main driver of death in stimulant toxicity. Rapid physical cooling and sedation to stop heat production are the treatment. " +
            "Aggressive fluids protect the kidneys from myoglobin.",
        },
        {
          id: "c-tylenol",
          label: "I gave acetaminophen 1 g rectally and put a cooling blanket on him.",
          next: "s-tylenol",
          quality: "partial",
          feedback:
            "Acetaminophen does not lower temperature in toxic hyperthermia because the set point is normal. A cooling blanket alone is too slow. " +
            "The examiner wanted evaporative or ice cooling and more benzodiazepine.",
        },
        {
          id: "c-restraint",
          label: "I kept him in four point restraints and gave haloperidol 5 mg IV to stop him moving.",
          next: "s-restraint",
          quality: "unsafe",
          feedback:
            "Struggling against restraints generates heat and worsens rhabdomyolysis. Haloperidol impairs heat loss and does not cool him. " +
            "The examiner wanted active cooling, benzodiazepines and fluid.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-tylenol",
      phase: "Thirty minutes later",
      text: "His temperature is 40.8. He is starting to emerge and thrash. You start ice packs and fans and give midazolam.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-restraint",
      phase: "Thirty minutes later",
      text:
        "He is straining hard against the restraints. His temperature is 41.1 and his CK is now 22,400 U/L. You start ice packs and fans and give midazolam.",
      next: "s-worse",
    },
    {
      kind: "say",
      id: "s-worse",
      phase: "Deterioration",
      text:
        "Forty minutes after sedation he emerges and becomes wildly agitated again despite midazolam 20 mg IV in total. His temperature is 40.1. Heart rate 152. Potassium 6.0 mmol/L.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Airway",
      prompt: "You decide to intubate. What is your plan, and which drugs do you choose?",
      seconds: 90,
      modelAnswer: [
        "Intubation lets you control agitation, heat production and ventilation.",
        "Preoxygenate. Expect a high minute ventilation need because of the metabolic acidosis.",
        "Induction with ketamine 1 to 2 mg/kg or propofol, with pressor ready.",
        "Rocuronium 1.2 mg/kg. Avoid succinylcholine because of hyperkalemia and rhabdomyolysis.",
        "Match his pre intubation minute ventilation on the ventilator, then check a gas.",
        "Continue cooling and deep sedation after intubation.",
      ],
      rubric: ["ag-r2"],
      choices: [
        {
          id: "c-roc",
          label: "I preoxygenated, induced with ketamine 1.5 mg/kg, paralysed with rocuronium 1.2 mg/kg and set a high minute ventilation to match his acidosis.",
          next: "q-legal",
          quality: "strong",
          feedback:
            "Good. Rocuronium avoids the potassium rise from succinylcholine in rhabdomyolysis. " +
            "A high respiratory rate after intubation prevents his acidosis from worsening when he loses his own compensation.",
        },
        {
          id: "c-sux",
          label: "I used succinylcholine 1.5 mg/kg because it wears off quickly.",
          next: "s-sux",
          quality: "unsafe",
          feedback:
            "With a potassium of 6.0 and rhabdomyolysis, succinylcholine can push potassium to a lethal level. " +
            "The examiner wanted rocuronium 1.2 mg/kg and a high minute ventilation.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-sux",
      phase: "Two minutes after induction",
      text:
        "The tube is in. The monitor shows peaked T waves and a widening QRS. You give calcium chloride 1 g IV and insulin with dextrose. The QRS narrows over several minutes.",
      next: "q-legal",
    },
    {
      kind: "question",
      id: "q-legal",
      phase: "Consent and restraint",
      prompt: "A resident asks: 'We sedated and restrained him without consent. Was that legal? What do we need to document?'",
      seconds: 75,
      modelAnswer: [
        "Restraint to prevent imminent serious bodily harm falls under the common law duty to restrain, which the Health Care Consent Act preserves.",
        "Sedation is treatment. He was incapable and at risk of serious bodily harm, so emergency treatment without consent was allowed under the Health Care Consent Act.",
        "Police apprehension under section 17 brings him for examination by a physician. It does not authorize treatment.",
        "Restraint must be the least restrictive option and removed as soon as safe.",
        "Document the behaviour, why less restrictive measures failed, the drugs, the monitoring and restraint checks.",
        "Obtain consent from him or a substitute decision maker for ongoing treatment when possible.",
      ],
      rubric: ["ag-p1", "ag-p2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition and team",
      prompt: "Where does he go, what happens with the police and the Mental Health Act, and what do you do for your team?",
      seconds: 75,
      modelAnswer: [
        "ICU for ventilation, cooling, rhabdomyolysis and kidney injury.",
        "Police can transfer custody once he is in the hospital's care.",
        "Decide on a Form 1 when he can be examined for a mental disorder. Psychiatry consult once medically stable.",
        "Check the guard's bite wound and arrange post exposure care.",
        "Brief team debrief after the resuscitation.",
      ],
      rubric: ["ag-d1", "ag-l2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The ICU team arrives. His temperature is 38.9 and falling. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ag-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Ends prone restraint immediately and positions him supine or lateral.",
      points: 3,
      critical: true,
      teaching: "Prone restraint with weight on the back restricts breathing. Stimulant use, hyperthermia and exhaustion raise the risk of sudden death.",
      source: "acep-agitation",
    },
    {
      id: "ag-r2",
      competency: "resuscitation",
      criterion: "plan",
      text: "Intubates with rocuronium rather than succinylcholine and sets a high minute ventilation.",
      points: 2,
      teaching: "Succinylcholine raises potassium and is dangerous in rhabdomyolysis. Match his own minute ventilation to avoid worsening acidosis.",
      source: "aha-tox",
    },
    {
      id: "ag-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Takes charge, assigns roles and uses a coordinated team for restraint and sedation.",
      points: 2,
      teaching: "A clear leader, one person per limb and one voice make restraint faster and safer for everyone.",
      source: "beta-overview",
    },
    {
      id: "ag-c1",
      competency: "communication",
      criterion: "plan",
      text: "Attempts brief verbal de-escalation with one calm voice while preparing sedation.",
      points: 1,
      teaching: "De-escalation is always the first step. When a patient cannot engage, it runs alongside, not instead of, sedation.",
      source: "beta-deesc",
    },
    {
      id: "ag-m1",
      competency: "management",
      criterion: "plan",
      text: "Chooses a fast IM agent at the right dose: ketamine 4 to 5 mg/kg IM or midazolam 5 to 10 mg IM.",
      points: 3,
      critical: true,
      teaching: "Benzodiazepines and ketamine act within minutes and treat the sympathetic drive. Haloperidol alone is slow in this setting.",
      source: "acep-agitation",
    },
    {
      id: "ag-m2",
      competency: "management",
      criterion: "plan",
      text: "Keeps continuous SpO2 and capnography monitoring with a nurse at the bedside after sedation.",
      points: 2,
      critical: true,
      teaching: "Airway obstruction and hypoventilation happen after sedation. Capnography shows it before the saturation falls.",
      source: "acep-agitation",
    },
    {
      id: "ag-a1",
      competency: "assessment",
      criterion: "data",
      text: "Measures glucose and core temperature once the patient is safe.",
      points: 1,
      teaching: "Hypoglycemia and hyperthermia are fast killers. Tympanic readings underestimate core temperature.",
      source: "beta-overview",
    },
    {
      id: "ag-a2",
      competency: "assessment",
      criterion: "approach",
      text: "Considers medical causes including head injury, CNS infection, serotonin toxicity, NMS, thyroid storm and withdrawal.",
      points: 2,
      teaching: "Agitation is a symptom. Look for a medical cause before calling it psychiatric or drug related.",
      source: "beta-overview",
    },
    {
      id: "ag-m3",
      competency: "management",
      criterion: "plan",
      text: "Starts active evaporative or ice cooling to about 38.5 to 39 and gives more benzodiazepine, not antipyretics.",
      points: 3,
      teaching: "Toxic hyperthermia comes from muscle activity, not a raised set point. Acetaminophen does not help.",
      source: "aha-tox",
    },
    {
      id: "ag-m4",
      competency: "management",
      criterion: "plan",
      text: "Treats rhabdomyolysis with isotonic fluid aiming for a urine output of about 200 to 300 mL/h and watches potassium.",
      points: 2,
      teaching: "Early fluid protects the kidneys from myoglobin. Check potassium often since it can rise quickly.",
      source: "acep-agitation",
    },
    {
      id: "ag-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Explains that emergency treatment without consent is allowed when an incapable patient faces serious harm.",
      points: 2,
      teaching: "The Health Care Consent Act allows emergency treatment without consent and preserves the common law duty to restrain. A police apprehension alone does not authorize treatment.",
      source: "hcca",
    },
    {
      id: "ag-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Uses the least restrictive restraint, removes it as soon as safe, and documents the reasons and monitoring.",
      points: 1,
      teaching: "Restraint is a last resort. Good documentation shows why less restrictive options were not enough.",
      source: "restraint-act",
    },
    {
      id: "ag-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits him to the ICU and plans psychiatric assessment and a Form 1 decision once medically stable.",
      points: 1,
      teaching: "Medical stabilization comes first. The Mental Health Act assessment follows once he can be examined.",
      source: "hcca",
    },
    {
      id: "ag-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Arranges care for the injured staff member and a brief team debrief.",
      points: 1,
      teaching: "Violent events hurt staff physically and emotionally. A short debrief improves safety and learning.",
      source: "beta-overview",
    },
  ],
  sources: [
    {
      id: "acep-agitation",
      citation:
        "American College of Emergency Physicians. Clinical policy: critical issues in the evaluation and management of adult out of hospital or emergency department patients presenting with severe agitation. Ann Emerg Med. 2024.",
      url: "https://pubmed.ncbi.nlm.nih.gov/38105109/",
    },
    {
      id: "aha-tox",
      citation:
        "Lavonas EJ, et al. 2023 American Heart Association focused update on the management of patients with cardiac arrest or life threatening toxicity due to poisoning. Circulation. 2023.",
      url: "https://pubmed.ncbi.nlm.nih.gov/37721023/",
    },
    {
      id: "beta-overview",
      citation:
        "Holloman GH, Zeller SL. Overview of Project BETA: best practices in evaluation and treatment of agitation. West J Emerg Med. 2012.",
    },
    {
      id: "beta-deesc",
      citation:
        "Richmond JS, et al. Verbal de-escalation of the agitated patient: consensus statement of the American Association for Emergency Psychiatry Project BETA De-escalation Workgroup. West J Emerg Med. 2012.",
    },
    {
      id: "hcca",
      citation: "Government of Ontario. Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A, and Mental Health Act, R.S.O. 1990, c. M.7.",
    },
    {
      id: "restraint-act",
      citation: "Government of Ontario. Patient Restraints Minimization Act, 2001.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
