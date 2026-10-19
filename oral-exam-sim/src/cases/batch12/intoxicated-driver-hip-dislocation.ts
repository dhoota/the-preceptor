// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const intoxicatedDriverHipDislocation: OralCase = {
  id: "intoxicated-driver-hip-dislocation",
  title: "Hip pain after a late night crash",
  blueprint: "procedures",
  alsoCovers: ["trauma", "tox"],
  priorityTopic: "analgesia-sedation",
  keyFeatures: [
    { topic: "analgesia-sedation", n: 1 },
    { topic: "analgesia-sedation", n: 3 },
    { topic: "analgesia-sedation", n: 4 },
    { topic: "analgesia-sedation", n: 5 },
    { topic: "analgesia-sedation", n: 6 },
  ],
  summary: "A young man who has been drinking arrives after a car crash with severe pain in one hip and needs a time sensitive procedure.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a tertiary care centre when the following patient arrives. " +
    "A 31 year old man was the driver in a head on collision 40 minutes ago. He has severe right hip pain and smells of alcohol.",
  card: {
    vitals: {
      temperature: "36.5°C oral",
      pulse: "118/minute",
      resp: "20/minute",
      bp: "148/88 mmHg",
      o2sat: "97% on room air",
      weight: "84 kg (185 lb)",
    },
    medications: "None",
    allergies: "No known drug allergies",
  },
  findings: [
    {
      id: "mechanism",
      label: "Mechanism from the paramedics",
      result:
        "Belted driver. Head on into a parked truck at about 60 km/h at 00:50. Airbags deployed. His right knee struck the dashboard. He could not get out of the car. No loss of consciousness according to his passenger. GCS 15 at the scene. No analgesia given.",
    },
    {
      id: "hpi",
      label: "History of the presenting complaint",
      result:
        "Severe pain in the right hip and groin, 10 out of 10. He cannot move the leg. Tingling over the top of the right foot. Mild pain in the right knee. No neck, chest or abdominal pain. No headache.",
    },
    {
      id: "intake",
      label: "Alcohol, drugs and last meal",
      result: "About 8 beers between 20:00 and midnight. No drugs. A large plate of chicken wings and fries at 23:30. No vomiting.",
    },
    {
      id: "pmh",
      label: "Past history, medications and allergies",
      result:
        "Healthy. General anesthetic for an appendectomy at 19 with no problems. His partner says he does not snore. No regular medications. No allergies. Tetanus up to date.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Carpenter. Lives with his partner. Drinks 8 to 12 beers most weekends. Has never had withdrawal symptoms. This is his first crash.",
    },
    {
      id: "primary",
      label: "Primary and secondary survey",
      result:
        "Airway patent. Chest clear with equal air entry. Abdomen soft and nontender. No seatbelt sign. Pelvis stable to gentle pressure. FAST negative. GCS 14 (E4 V4 M6), smells of alcohol. Pupils equal and reactive. No other limb injury.",
    },
    {
      id: "leg",
      label: "Right leg",
      result:
        "Right leg shortened, flexed, adducted and internally rotated. Abrasion over the right tibial tuberosity. Small right knee effusion. Ligament testing limited by pain.",
    },
    {
      id: "nv",
      label: "Neurovascular exam of the right leg",
      result:
        "Dorsalis pedis and posterior tibial pulses palpable. Capillary refill 2 seconds. Reduced light touch over the dorsum of the foot and the first web space. Ankle dorsiflexion and great toe extension 3 out of 5. Plantar flexion 5 out of 5.",
    },
    {
      id: "airway",
      label: "Pre sedation airway assessment",
      result:
        "Mallampati class 2. Mouth opening 3 finger breadths. Full dentition. Short beard. Full neck movement once the cervical spine is cleared. BMI 27 kg/m2. Chest clear. ASA class 1 apart from acute intoxication.",
    },
    {
      id: "xray",
      label: "Pelvis and chest X ray",
      result:
        "Posterior dislocation of the right hip. No femoral neck fracture. No obvious acetabular fracture. Chest X ray normal.",
    },
    {
      id: "ct",
      label: "CT head and cervical spine",
      result: "No intracranial injury. No cervical spine fracture. The collar is cleared clinically once he can cooperate.",
    },
    {
      id: "labs",
      label: "Blood work",
      result: "Ethanol 41 mmol/L. Hemoglobin 148 g/L. Glucose 6.1 mmol/L. Electrolytes and creatinine normal. CK 820 U/L.",
    },
    {
      id: "resources",
      label: "Department resources",
      result:
        "01:30. Tertiary trauma centre. The orthopedic resident is in the department. The operating room is running a trauma laparotomy, with the next slot in about 4 hours. A respiratory therapist, capnography, propofol and ketamine are available.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Arrival",
      text:
        "He is writhing on the stretcher and shouting with every movement. The nurse says, 'He is drunk. Can we hold off on opioids until he sobers up?'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "How do you answer the nurse, and what are your first steps?",
      seconds: 90,
      modelAnswer: [
        "Primary survey first. Airway, breathing, circulation, disability. Cervical spine precautions.",
        "Measure his pain with a numeric scale and watch for behaviour that suggests pain.",
        "Intoxication is not a reason to withhold analgesia. It is a reason to titrate and monitor.",
        "IV fentanyl about 1 mcg/kg, then 25 to 50 mcg every 5 minutes to effect. Reassess pain and sedation after each dose.",
        "Continuous SpO2 monitoring and capnography if available. Naloxone at the bedside.",
        "Splint the leg in the position of comfort.",
      ],
      rubric: ["hd-m1", "hd-h4", "hd-p1"],
      choices: [
        {
          id: "c-titrate",
          label: "I said no. After the primary survey I gave fentanyl 75 mcg IV and then 25 mcg every 5 minutes, scoring his pain and sedation each time, with continuous monitoring and naloxone at the bedside.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Correct. Alcohol does not abolish pain, and untreated pain makes him harder to assess. Small titrated IV doses with monitoring give relief while you watch for added respiratory depression. Scoring pain each time shows whether the plan is working.",
        },
        {
          id: "c-bolus",
          label: "I gave morphine 10 mg IV once and moved on to the X rays.",
          next: "s-bolus",
          quality: "partial",
          feedback:
            "Treating pain is right, but a single large fixed dose in an intoxicated patient risks oversedation, and there was no plan to reassess. Titrate small doses to a measured effect.",
        },
        {
          id: "c-withhold",
          label: "I agreed to hold opioids until his ethanol level falls and gave acetaminophen.",
          next: "s-withhold",
          quality: "unsafe",
          feedback:
            "That leaves a man with a dislocated hip in severe pain for hours. Intoxication is a reason for careful titration and monitoring, not for withholding analgesia. Oligoanalgesia remains common, and this is one of its causes.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bolus",
      phase: "Twenty minutes later",
      text:
        "The nurse calls you over. He is snoring with a respiratory rate of 8 and an SpO2 of 89%. He wakes to a sternal rub and his breathing improves with stimulation and oxygen. He is still in pain when he moves. You switch to small titrated doses.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-withhold",
      phase: "Thirty minutes later",
      text:
        "He has pulled out his IV trying to get off the stretcher and the X ray tech cannot position him. His pulse is 130. The nurse asks for an analgesic order. You start titrated IV fentanyl with monitoring.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "What history do you need before you plan treatment, and why?",
      seconds: 90,
      modelAnswer: [
        "Time of the crash and mechanism. Dashboard impact. Loss of consciousness. Other pain.",
        "How much alcohol, any drugs, and the time and size of his last meal.",
        "Previous sedation or anesthesia and any problems.",
        "Snoring or sleep apnea. Past illness, medications and allergies.",
        "Symptoms in the leg such as numbness or weakness.",
        "Tetanus status and social history including usual drinking.",
      ],
      rubric: ["hd-h1", "hd-h2", "hd-h3"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination and imaging",
      prompt: "What do you look for on examination and imaging, and what is your differential?",
      seconds: 90,
      modelAnswer: [
        "Leg shortened, flexed, adducted and internally rotated suggests a posterior hip dislocation.",
        "Document distal pulses and sciatic nerve function before any reduction. Peroneal division first. Dorsiflexion, great toe extension, dorsal foot sensation.",
        "Examine the knee. The dashboard drives force through the knee to the hip.",
        "Pelvis X ray. Look for femoral neck and acetabular fractures.",
        "CT head and cervical spine because intoxication makes clinical clearance unreliable.",
        "Differential. Posterior hip dislocation, fracture dislocation, femoral neck or shaft fracture, acetabular fracture.",
      ],
      rubric: ["hd-p2", "hd-p3", "hd-p4"],
      next: "s-xray",
    },
    {
      kind: "say",
      id: "s-xray",
      phase: "Results",
      text:
        "The X ray shows a posterior dislocation of the right hip without a femoral neck fracture. The CT head and cervical spine are normal. His ethanol is 41 mmol/L. Ankle dorsiflexion is 3 out of 5. The orthopedic resident says the next operating room slot is in about 4 hours and asks what you want to do.",
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "The plan",
      prompt: "When and where should this hip be reduced? Walk me through your sedation assessment and plan.",
      seconds: 90,
      modelAnswer: [
        "Reduce as soon as possible and within 6 hours to lower the risk of avascular necrosis and help the sciatic nerve. Do it in the ED now.",
        "Pre sedation assessment. Airway exam, ASA class, aspiration risk from a full stomach and alcohol, hemodynamics.",
        "Capacity and consent. He can understand and weigh the risks despite his intoxication.",
        "Propofol for muscle relaxation. Small titrated boluses such as 0.5 mg/kg then 0.25 mg/kg. Expect lower needs with alcohol.",
        "Respiratory therapist, capnography, suction, bag valve mask, airway adjuncts and intubation equipment ready. A nurse who only monitors.",
        "Continue analgesia. Sedation alone does not treat pain.",
      ],
      rubric: ["hd-p5", "hd-m2", "hd-m3", "hd-c1", "hd-c5"],
      choices: [
        {
          id: "c-ed-propofol",
          label: "I assessed his airway and aspiration risk, confirmed he could consent, and planned ED reduction now with titrated propofol, a respiratory therapist, capnography, suction and a dedicated monitoring nurse.",
          next: "s-apnea",
          quality: "strong",
          feedback:
            "Good. Time matters for the femoral head and the sciatic nerve. His full stomach and alcohol raise the risk, but fasting time alone is not a reason to delay an urgent procedure. A formal assessment and full preparation make ED sedation the right call.",
        },
        {
          id: "c-midaz",
          label: "I gave midazolam 5 mg and fentanyl 200 mcg IV and had the resident try to reduce it.",
          next: "s-midaz",
          quality: "partial",
          feedback:
            "Stacked benzodiazepine and opioid in an intoxicated patient gives respiratory depression without reliable muscle relaxation. There was no formal airway assessment or preparation. Choose an agent for the procedure and prepare for its complications.",
        },
        {
          id: "c-wait",
          label: "I decided to wait until he is sober or the operating room is free, since he has a full stomach and alcohol on board.",
          next: "s-wait",
          quality: "unsafe",
          feedback:
            "Waiting 4 to 8 hours pushes reduction to or well past 6 hours from the injury, which raises the risk of avascular necrosis and worsens the outlook for his sciatic nerve. A full stomach raises risk, but fasting time is not a reason to delay an emergency reduction.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-midaz",
      phase: "Ten minutes later",
      text:
        "He is drowsy but his thigh muscles are rigid and the reduction fails. His SpO2 drifts to 91% on nasal prongs. You stop, support his breathing, and set up properly with the respiratory therapist, capnography and propofol.",
      next: "s-apnea",
    },
    {
      kind: "say",
      id: "s-wait",
      phase: "Two hours later",
      text:
        "The orthopedic attending calls in. She says the hip has now been out for nearly 3 hours and needs reduction now, in the ED. The operating room is still busy. You prepare for ED sedation with propofol.",
      next: "s-apnea",
    },
    {
      kind: "say",
      id: "s-apnea",
      phase: "During the sedation",
      text:
        "He receives propofol 40 mg, then 20 mg. As the resident applies traction, the capnography waveform goes flat. His chest stops moving. SpO2 falls from 98% to 86%. Heart rate 102.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "Adverse event",
      prompt: "What is happening, and what do you do?",
      seconds: 75,
      modelAnswer: [
        "Apnea or airway obstruction from propofol, worsened by alcohol and opioid.",
        "Stop the procedure and any further sedative.",
        "Jaw thrust and head tilt. Oral or nasal airway. Suction if he vomits.",
        "Bag valve mask ventilation with 100% oxygen until he breathes on his own.",
        "Propofol is short acting. Most events resolve within minutes with support.",
        "Intubate only if ventilation fails. Reversal agents do not act on propofol.",
      ],
      rubric: ["hd-m4", "hd-c3"],
      choices: [
        {
          id: "c-bvm",
          label: "I stopped the procedure, did a jaw thrust, inserted an oral airway and ventilated with a bag valve mask on 100% oxygen until he breathed on his own.",
          next: "s-reduced",
          quality: "strong",
          feedback:
            "Exactly right. Flat capnography warns you before the saturation falls. Airway opening and assisted ventilation fix almost every propofol apnea within a minute or two. Then you can finish the reduction.",
        },
        {
          id: "c-reverse",
          label: "I gave naloxone 0.4 mg and flumazenil 0.2 mg IV and waited for them to work.",
          next: "s-reverse",
          quality: "unsafe",
          feedback:
            "Neither drug reverses propofol, and flumazenil can provoke seizures. Waiting for them while he is apneic and desaturating wastes the minutes that matter. The fix is opening the airway and ventilating now.",
        },
        {
          id: "c-oxygen",
          label: "I turned up the nasal prong oxygen to 6 L/minute and watched the monitor.",
          next: "s-oxygen",
          quality: "unsafe",
          feedback:
            "Oxygen does nothing for a patient who is not breathing. An apneic patient needs an open airway and assisted ventilation now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-reverse",
      phase: "A minute later",
      text:
        "His SpO2 is 80%. The respiratory therapist steps in with a jaw thrust and bag valve mask ventilation. His saturation climbs and he starts breathing on his own.",
      next: "s-reduced",
    },
    {
      kind: "say",
      id: "s-oxygen",
      phase: "Forty seconds later",
      text:
        "His SpO2 is 78% and his heart rate is falling. The respiratory therapist pushes past, opens his airway and ventilates him with a bag valve mask. He recovers.",
      next: "s-reduced",
    },
    {
      kind: "say",
      id: "s-reduced",
      phase: "The reduction",
      text:
        "Once he is breathing well, a further 20 mg of propofol allows the resident to reduce the hip with an Allis manoeuvre. There is a clunk and the leg lies straight.",
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "After the reduction",
      prompt: "What do you do now, and when is he safe to leave your direct monitoring?",
      seconds: 75,
      modelAnswer: [
        "Repeat the neurovascular exam, including sciatic function, and compare it to the pre reduction exam.",
        "Check stability through a gentle range of motion. Post reduction X ray.",
        "CT pelvis to confirm concentric reduction and look for acetabular fragments.",
        "Examine the knee again now that he can relax.",
        "Continuous monitoring with capnography until he is back to his pre sedation baseline. He was intoxicated before, so the baseline is not normal.",
        "Debrief the team and document the apnea and its management.",
      ],
      rubric: ["hd-m5", "hd-c2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "He is awake and comfortable. Tell me your disposition and ongoing plan.",
      seconds: 75,
      modelAnswer: [
        "Admit under orthopedics. Possible acetabular fracture and a sciatic nerve deficit need follow up.",
        "Multimodal analgesia. Scheduled acetaminophen and titrated opioid with monitoring overnight.",
        "Watch for alcohol withdrawal given his weekend drinking.",
        "Brief alcohol intervention once he is sober, with resources.",
        "Structured handover including the sedation adverse event.",
      ],
      rubric: ["hd-m6", "hd-c4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The CT shows a concentric reduction with a small posterior wall fragment that orthopedics manages without surgery. His foot drop slowly improves over 3 months. In the morning, sober, he asks for help with his drinking. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "hd-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the time of the crash, mechanism including the dashboard impact, loss of consciousness and other pain.",
      points: 2,
      teaching: "The time of injury tells you how long the femoral head has been at risk. A dashboard impact links knee and hip injury.",
      source: "dawson-hip",
    },
    {
      id: "hd-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks how much alcohol, any drugs, and the time and size of the last meal.",
      points: 2,
      teaching: "Alcohol adds to sedative and opioid respiratory depression. A recent large meal raises aspiration risk, which shapes depth and preparation rather than timing.",
      source: "green-sedation",
    },
    {
      id: "hd-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about previous sedation or anesthesia, snoring or sleep apnea, past illness, medications and allergies.",
      points: 2,
      teaching: "Prior anesthetic problems, sleep apnea and comorbidity are the history half of the pre sedation risk assessment.",
      source: "green-sedation",
    },
    {
      id: "hd-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks him to rate his pain on a numeric scale and repeats it after each dose.",
      points: 1,
      teaching: "Systematic pain assessment on arrival and after each intervention guides titration. Do not let intoxication replace measurement.",
      source: "eusem-pain",
    },
    {
      id: "hd-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Completes the primary and secondary survey and images the head and cervical spine before focusing on the hip.",
      points: 1,
      teaching: "A painful distracting injury and intoxication make clinical clearance of the head and neck unreliable.",
      source: "atls",
    },
    {
      id: "hd-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies a posterior hip dislocation from the shortened, flexed, adducted, internally rotated leg and looks for femoral neck and acetabular fractures.",
      points: 2,
      teaching: "Posterior dislocation is the common type after a dashboard injury. Acetabular fractures often accompany it.",
      source: "dawson-hip",
    },
    {
      id: "hd-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Documents sciatic nerve function, especially the peroneal division, and distal pulses before reduction.",
      points: 2,
      critical: true,
      teaching: "Sciatic injury occurs in 10 to 15% of posterior dislocations, usually the peroneal division. A pre reduction exam shows whether a deficit came from the injury or the reduction.",
      source: "dawson-hip",
    },
    {
      id: "hd-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Examines the ipsilateral knee.",
      points: 1,
      teaching: "Knee effusion, bone bruise and meniscal tears are common with hip dislocation, and the knee is the lever during reduction.",
      source: "dawson-hip",
    },
    {
      id: "hd-p5",
      competency: "assessment",
      criterion: "physical",
      text: "Performs a formal pre sedation assessment of airway, ASA class, aspiration risk and hemodynamics.",
      points: 2,
      critical: true,
      teaching: "Unscheduled sedation needs a structured risk assessment. Airway features, comorbidity, intoxication and a full stomach set the depth, agent and preparation.",
      source: "green-sedation",
    },
    {
      id: "hd-m1",
      competency: "management",
      criterion: "management",
      text: "Gives titrated IV opioid early despite intoxication, with monitoring and naloxone available.",
      points: 2,
      critical: true,
      teaching: "Oligoanalgesia remains common. Severe pain needs prompt analgesia titrated to effect, with closer monitoring when other depressants are on board.",
      source: "eusem-pain",
    },
    {
      id: "hd-m2",
      competency: "management",
      criterion: "management",
      text: "Reduces the hip in the ED within 6 hours rather than waiting for sobriety or the operating room.",
      points: 2,
      teaching: "No more than 6 hours should pass between presentation and reduction. Later reduction raises the risk of avascular necrosis.",
      source: "dawson-hip",
    },
    {
      id: "hd-m3",
      competency: "management",
      criterion: "management",
      text: "Chooses propofol in small titrated boluses for muscle relaxation, with capnography, suction, airway equipment and a dedicated monitoring nurse.",
      points: 2,
      teaching: "Propofol is safe for ED procedural sedation. Capnography detects hypoventilation before desaturation. A nurse or other staff member should monitor while the physician does the procedure.",
      source: "acep-sedation",
    },
    {
      id: "hd-m4",
      competency: "resuscitation",
      criterion: "management",
      text: "Manages sedation apnea by stopping the drug, opening the airway and giving bag valve mask ventilation, without relying on reversal agents.",
      points: 2,
      teaching: "Most sedation apnea resolves within minutes with airway manoeuvres and assisted ventilation. Propofol has no reversal agent.",
      source: "green-sedation",
    },
    {
      id: "hd-m5",
      competency: "management",
      criterion: "management",
      text: "Repeats the neurovascular exam after reduction and arranges X ray and CT of the pelvis.",
      points: 1,
      teaching: "CT after reduction confirms a concentric joint and finds acetabular fragments.",
      source: "dawson-hip",
    },
    {
      id: "hd-m6",
      competency: "management",
      criterion: "management",
      text: "Plans ongoing multimodal analgesia with scheduled acetaminophen and titrated opioid.",
      points: 1,
      teaching: "Multimodal analgesia reduces opioid needs and side effects while keeping pain controlled.",
      source: "eusem-pain",
    },
    {
      id: "hd-c1",
      competency: "professionalism",
      criterion: "process",
      text: "Assesses his capacity despite intoxication and obtains informed consent for sedation and reduction.",
      points: 2,
      teaching: "Intoxication does not automatically remove capacity. If he can understand and weigh the risks, he consents. If not, treat under the emergency provision and document why.",
      source: "green-sedation",
    },
    {
      id: "hd-c2",
      competency: "disposition",
      criterion: "process",
      text: "Monitors him until he returns to his pre sedation baseline, recognizing that alcohol prolongs recovery.",
      points: 1,
      teaching: "Recovery monitoring continues until the patient is back to baseline. Alcohol and opioids extend the risk window after propofol wears off.",
      source: "green-sedation",
    },
    {
      id: "hd-c3",
      competency: "leadership",
      criterion: "process",
      text: "Leads the team through the apnea with clear roles, then debriefs and documents the adverse event.",
      points: 1,
      teaching: "A short debrief and a clear record of the event, its management and the outcome support safety and quality review.",
      source: "green-sedation",
    },
    {
      id: "hd-c4",
      competency: "disposition",
      criterion: "process",
      text: "Admits under orthopedics with a structured handover and offers a brief alcohol intervention once he is sober.",
      points: 2,
      teaching: "An alcohol related injury is a teachable moment. In a randomized trial at a trauma centre, a brief alcohol intervention cut drinking and was associated with fewer repeat injuries.",
      source: "gentilello",
    },
    {
      id: "hd-c5",
      competency: "communication",
      criterion: "process",
      text: "Agrees the timing and location of reduction with orthopedics, with the operating room as the backup if ED reduction fails.",
      points: 1,
      teaching: "A failed closed reduction or an irreducible hip needs the operating room. Plan the backup before you start.",
      source: "dawson-hip",
    },
  ],
  sources: [
    {
      id: "green-sedation",
      citation:
        "Green SM, Roback MG, Krauss BS, et al. Unscheduled procedural sedation. A multidisciplinary consensus practice guideline. Ann Emerg Med. 2019.",
      url: "https://pubmed.ncbi.nlm.nih.gov/31029297/",
    },
    {
      id: "acep-sedation",
      citation:
        "Godwin SA, Burton JH, Gerardo CJ, et al. American College of Emergency Physicians. Clinical policy: procedural sedation and analgesia in the emergency department. Ann Emerg Med. 2014.",
      url: "https://pubmed.ncbi.nlm.nih.gov/24438649/",
    },
    {
      id: "eusem-pain",
      citation:
        "Hachimi-Idrissi S, Dobias V, Hautz WE, et al. Updated European Society for Emergency Medicine guidelines for acute pain management in emergency departments and prehospital care. Eur J Emerg Med. 2026.",
      url: "https://pubmed.ncbi.nlm.nih.gov/41810980/",
    },
    {
      id: "dawson-hip",
      citation:
        "Dawson-Amoah K, Raszewski J, Duplantier N, Waddell BS. Dislocation of the hip. A review of types, causes, and treatment. Ochsner J. 2018.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6162140/",
    },
    {
      id: "atls",
      citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support Student Course Manual. 10th edition. 2018.",
    },
    {
      id: "gentilello",
      citation:
        "Gentilello LM, Rivara FP, Donovan DM, et al. Alcohol interventions in a trauma center as a means of reducing the risk of injury recurrence. Ann Surg. 1999.",
      url: "https://pubmed.ncbi.nlm.nih.gov/10522717/",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
