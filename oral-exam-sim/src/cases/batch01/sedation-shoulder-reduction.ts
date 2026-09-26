// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const sedationShoulderReduction: OralCase = {
  id: "sedation-shoulder-reduction",
  title: "A fall on the curling ice",
  blueprint: "procedures",
  alsoCovers: ["trauma", "comm"],
  priorityTopic: "analgesia-sedation",
  keyFeatures: [
    { topic: "analgesia-sedation", n: 2 },
    { topic: "analgesia-sedation", n: 5 },
    { topic: "analgesia-sedation", n: 6 },
    { topic: "msk", n: 5 },
    { topic: "msk", n: 8 },
  ],
  summary: "A 46 year old man with a painful shoulder after a fall needs a procedure in a busy department.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "It is 14:20 on a Saturday. A 46 year old man has severe right shoulder pain after he slipped on the ice an hour ago. " +
    "Every monitor has waveform capnography. A respiratory therapist is available.",
  card: {
    vitals: {
      temperature: "36.7°C",
      pulse: "98/minute",
      resp: "18/minute",
      bp: "152/94 mmHg",
      o2sat: "95% on room air",
      weight: "118 kg (260 lb)",
    },
    medications: "Amlodipine",
    allergies: "None",
  },
  findings: [
    {
      id: "hpi",
      label: "History of presenting illness",
      result:
        "He slipped on the ice at his curling club an hour ago and landed on his outstretched right arm. He has severe right shoulder pain, 9 out of 10. " +
        "He had a similar injury at age 22 that was reduced under sedation. He was triaged CTAS 3. " +
        "The nurse says: 'He is holding his arm out from his side and won't let anyone touch it. He hasn't had anything for pain.'",
    },
    {
      id: "intake",
      label: "Last oral intake",
      result: "He ate a large lunch at 13:00.",
    },
    {
      id: "shoulder",
      label: "Shoulder exam",
      result:
        "Loss of the normal rounded contour of the right shoulder. A palpable humeral head anteriorly below the coracoid. Arm held slightly abducted and externally rotated. Unable to internally rotate.",
    },
    {
      id: "nv",
      label: "Neurovascular exam before reduction",
      result:
        "Sensation over the lateral deltoid is intact to light touch. Radial, median and ulnar nerve function intact. Radial pulse strong. Capillary refill under 2 seconds.",
    },
    {
      id: "xray",
      label: "Shoulder X rays",
      result:
        "Anterior subcoracoid dislocation of the right humeral head. No fracture of the humeral neck or glenoid. Small impaction defect of the posterolateral humeral head. No greater tuberosity fracture.",
    },
    {
      id: "airway",
      label: "Airway assessment",
      result:
        "Mallampati class 3. Neck circumference 46 cm. Full beard. Full dentition. Mouth opening three finger breadths. Normal neck movement. Snores at home.",
    },
    {
      id: "history",
      label: "Medical history",
      result:
        "Obstructive sleep apnea on CPAP. Hypertension on amlodipine 10 mg. No heart or lung disease. No previous problems with sedation. No allergies. No regular opioids or sedatives. ASA class 2 to 3.",
    },
    {
      id: "weights",
      label: "Dosing weights",
      result: "Height 178 cm. Actual body weight 118 kg. Ideal body weight about 73 kg. Adjusted body weight about 91 kg.",
    },
    {
      id: "post-xray",
      label: "Post reduction X rays",
      result: "Humeral head reduced in the glenoid. No new fracture.",
    },
    {
      id: "post-nv",
      label: "Neurovascular exam after reduction",
      result: "Sensation over the lateral deltoid intact. Deltoid contraction present on attempted abduction. Distal nerves and pulse intact.",
    },
    {
      id: "social",
      label: "Social situation",
      result: "He drove himself to the club. His car is in the parking lot. His wife is at work until 18:00. He lives 15 minutes away.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In the acute area",
      text:
        "He is sitting on the stretcher cradling his right arm and grimacing. The X ray confirms an anterior dislocation with no fracture. The nurse asks how you want to proceed.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First approach",
      prompt: "How would you approach the reduction?",
      seconds: 75,
      modelAnswer: [
        "Document the neurovascular exam, including the axillary nerve, before any attempt.",
        "Early analgesia, for example fentanyl 1 mcg/kg IV, about 75 to 100 mcg.",
        "Consider an intra articular lidocaine injection.",
        "Try a technique that needs no sedation first, such as external rotation, Cunningham or FARES.",
        "Sedation is the backup if those fail.",
        "Ask how he fell, when, and whether this shoulder has dislocated before.",
      ],
      rubric: ["sd-a1", "sd-m1", "sd-h1"],
      choices: [
        {
          id: "c-no-sed",
          label: "I documented the neurovascular exam, gave fentanyl 75 mcg IV, and tried a slow external rotation technique before thinking about sedation.",
          next: "s-fail",
          quality: "strong",
          feedback:
            "Good. Many anterior dislocations reduce without sedation using a slow, patient led technique. In a man with sleep apnea and a full stomach, avoiding sedation removes most of the risk.",
        },
        {
          id: "c-straight-sed",
          label: "I went straight to deep sedation because it is the most reliable.",
          next: "s-fail",
          quality: "partial",
          feedback:
            "Sedation works but carries more risk in this patient. He has sleep apnea, obesity and a recent meal. Techniques without sedation succeed often and should be tried first when the patient is suitable.",
        },
        {
          id: "c-hallway",
          label: "I gave ketamine 4 mg/kg IM in the hallway chair and reduced the shoulder there.",
          next: "s-hallway",
          quality: "unsafe",
          feedback:
            "Any dissociative sedation needs a monitored bed, capnography, airway equipment and a dedicated monitor. A hallway chair has none of these. This is an unsafe setting regardless of the drug.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-hallway",
      phase: "Before the injection",
      text:
        "The charge nurse stops you. She reminds you that sedation must be done in a monitored bed with a respiratory therapist present. You move him to a resus bay and try an external rotation technique first.",
      next: "s-fail",
    },
    {
      kind: "say",
      id: "s-fail",
      phase: "Forty minutes later",
      text:
        "A slow external rotation attempt and a Cunningham technique both fail because of muscle spasm. He is in severe pain. You decide to reduce under procedural sedation.",
      next: "q-presed",
    },
    {
      kind: "question",
      id: "q-presed",
      phase: "Before sedation",
      prompt: "He ate a large lunch about two hours ago. Is it safe to sedate him now? What do you need in place?",
      seconds: 90,
      modelAnswer: [
        "Recent food intake is not by itself a reason to delay in the emergency department.",
        "He has aspiration risk factors. Consider a lighter target depth. A short delay is reasonable only if the shoulder can wait.",
        "Assess risk: sleep apnea, obesity, Mallampati 3, beard. Plan for difficult mask ventilation.",
        "Informed consent covering risks and alternatives.",
        "A clinician whose only job is to monitor and a separate person for the procedure.",
        "Monitor, capnography, oxygen, suction, bag mask with PEEP valve, airway adjuncts and a supraglottic airway at the bedside.",
        "Preoxygenate. Consider nasal cannula oxygen during the procedure.",
      ],
      rubric: ["sd-a2", "sd-p1", "sd-l1", "sd-h2", "sd-h3"],
      choices: [
        {
          id: "c-prepared",
          label: "I proceeded after a risk assessment and consent, with a respiratory therapist monitoring only, capnography, suction, bag mask and a supraglottic airway ready.",
          next: "q-drug",
          quality: "strong",
          feedback:
            "Correct. Fasting time does not predict aspiration in emergency sedation and should not delay needed procedures in most adults. With his risk factors, aim for the lightest depth that works. What matters is preparation for the airway and a dedicated person watching the patient.",
        },
        {
          id: "c-fast",
          label: "I made him wait six hours to meet fasting guidelines.",
          next: "s-fast",
          quality: "partial",
          feedback:
            "Fasting has not been shown to reduce aspiration in emergency sedation. A long delay prolongs pain and makes the reduction harder as spasm builds. Risk should be managed by preparation and drug choice, not by waiting alone.",
        },
        {
          id: "c-no-capno",
          label: "I sedated him in a side room with pulse oximetry and a nurse who was also helping with traction.",
          next: "s-no-capno",
          quality: "unsafe",
          feedback:
            "Pulse oximetry lags behind apnea by a minute or more, especially with oxygen on. Capnography detects hypoventilation first. The person monitoring should have no other task.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fast",
      phase: "Four hours later",
      text:
        "He is still in severe pain and needed two more doses of fentanyl. The spasm is worse. The department is busier. You decide to proceed with the same precautions you could have used earlier.",
      next: "q-drug",
    },
    {
      kind: "say",
      id: "s-no-capno",
      phase: "In the side room",
      text:
        "The respiratory therapist arrives and moves him to a resus bay with capnography. She says she will monitor and nothing else. You agree.",
      next: "q-drug",
    },
    {
      kind: "question",
      id: "q-drug",
      phase: "Drug choice",
      prompt: "Which agent will you use, and at what dose for this patient?",
      seconds: 75,
      modelAnswer: [
        "Ketamine and propofol together, for example 0.5 mg/kg of each, is a good choice.",
        "Or propofol 0.5 to 1 mg/kg then 0.25 to 0.5 mg/kg boluses.",
        "Dose propofol on lean or adjusted weight, not actual weight. About 75 to 90 kg here.",
        "Starting propofol dose of about 40 to 90 mg. Start low given his sleep apnea.",
        "Titrate slowly in small boluses.",
        "Avoid stacking benzodiazepines and opioids.",
      ],
      rubric: ["sd-m2"],
      choices: [
        {
          id: "c-ketofol",
          label: "I used ketamine 40 mg and propofol 40 mg based on adjusted weight, then 20 mg propofol boluses as needed.",
          next: "s-apnea",
          quality: "strong",
          feedback:
            "Good. Dosing on adjusted or lean weight avoids overdose in obesity. Ketamine may offset some of the respiratory and blood pressure effects of propofol.",
        },
        {
          id: "c-actual",
          label: "I gave propofol 1.5 mg/kg of actual body weight, 175 mg, as a single bolus.",
          next: "s-apnea",
          quality: "unsafe",
          feedback:
            "That is an induction dose calculated on total weight. It is far above a sedation dose for this patient and makes apnea very likely. Use adjusted weight and titrate in small boluses.",
        },
        {
          id: "c-benzo",
          label: "I gave midazolam 5 mg and fentanyl 200 mcg.",
          next: "s-apnea",
          quality: "partial",
          feedback:
            "This combination causes longer respiratory depression than propofol and recovery is slower. It is a poor choice in sleep apnea. Muscle relaxation is also less reliable for a shoulder reduction.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-apnea",
      phase: "Two minutes after the last dose",
      text:
        "As you apply traction the capnography waveform flattens. His chest is not moving. SpO2 is 94 percent and falling. His heart rate is 88. The respiratory therapist says: 'He's apneic.'",
      next: "q-apnea",
    },
    {
      kind: "question",
      id: "q-apnea",
      phase: "Adverse event",
      prompt: "What do you do, step by step?",
      seconds: 75,
      modelAnswer: [
        "Stop the procedure and any further sedative.",
        "Stimulate. Jaw thrust and head tilt.",
        "Oral or nasal airways.",
        "Two person bag mask ventilation with PEEP.",
        "Supraglottic airway if mask ventilation fails.",
        "Naloxone is not the first step. Most apnea here is from propofol.",
        "Intubation only if the above fail.",
      ],
      rubric: ["sd-r1"],
      choices: [
        {
          id: "c-airway-steps",
          label: "I stopped the procedure, gave a jaw thrust, inserted two nasal airways and did two person bag mask ventilation until he breathed again.",
          next: "q-post",
          quality: "strong",
          feedback:
            "Correct. Apnea after propofol is usually brief. Simple airway manoeuvres and bag mask ventilation almost always rescue it. The key is to act as soon as capnography changes.",
        },
        {
          id: "c-naloxone",
          label: "I gave naloxone 2 mg IV and waited for it to work.",
          next: "s-naloxone",
          quality: "partial",
          feedback:
            "Naloxone does not reverse propofol or ketamine. Waiting for it delays airway support. Open the airway and ventilate first.",
        },
        {
          id: "c-wait",
          label: "I waited for the SpO2 to drop below 90 before doing anything.",
          next: "s-naloxone",
          quality: "unsafe",
          feedback:
            "Saturation falls late and then falls fast, especially in obesity. A flat capnography trace is the signal to act. Waiting risks hypoxic arrest.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-naloxone",
      phase: "Forty seconds later",
      text:
        "SpO2 is 78 percent. His heart rate slows to 58. The respiratory therapist performs a jaw thrust and starts bag mask ventilation. SpO2 recovers to 96 percent within a minute. He starts breathing again.",
      next: "q-post",
    },
    {
      kind: "question",
      id: "q-post",
      phase: "After reduction",
      prompt: "He is breathing well and the shoulder is reduced. What do you do next?",
      seconds: 60,
      modelAnswer: [
        "Repeat the neurovascular exam, including axillary nerve sensation and deltoid function.",
        "Post reduction X ray.",
        "Sling for comfort.",
        "Over 40 with a dislocation, rotator cuff tears are more common. Arrange follow up.",
        "This is his second dislocation. Refer to orthopedics or sports medicine.",
      ],
      rubric: ["sd-a3", "sd-d2"],
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Discharge",
      prompt: "An hour later he is awake and wants to drive himself home because his wife is at work. What do you do?",
      seconds: 60,
      modelAnswer: [
        "He cannot drive after sedation. Advise no driving until the next day.",
        "He needs a responsible adult to take him home.",
        "Discharge only when back to baseline mental status and vitals.",
        "Longer observation is reasonable given sleep apnea and the apnea event. Use CPAP tonight.",
        "Written instructions and return precautions.",
        "Ask early how he got here and who can take him home.",
      ],
      rubric: ["sd-d1", "sd-h4"],
      choices: [
        {
          id: "c-no-drive",
          label: "I told him he cannot drive, kept him until his wife could pick him up, and advised CPAP tonight.",
          next: "q-disclose",
          quality: "strong",
          feedback:
            "Correct. Psychomotor effects of sedation can last hours. A responsible adult escort is a standard discharge criterion. His sleep apnea makes CPAP tonight important.",
        },
        {
          id: "c-drive",
          label: "I let him drive because he seemed fully alert.",
          next: "s-drive",
          quality: "unsafe",
          feedback:
            "Feeling alert does not mean reaction time has recovered. Driving after sedation puts him and others at risk. It also exposes you to liability.",
        },
        {
          id: "c-taxi",
          label: "I sent him home alone in a taxi.",
          next: "s-drive",
          quality: "partial",
          feedback:
            "A taxi avoids driving but leaves him alone at home after an apnea event. He should have a responsible adult with him for the first several hours.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-drive",
      phase: "At the desk",
      text:
        "The nurse doing his discharge questions the plan. She reminds you of the department sedation policy. You agree to keep him until his wife arrives at 18:15.",
      next: "q-disclose",
    },
    {
      kind: "question",
      id: "q-disclose",
      phase: "Afterwards",
      prompt: "Does he need to be told about the breathing event? What do you document and report?",
      seconds: 60,
      modelAnswer: [
        "Yes. Tell him what happened, what was done and that he recovered fully.",
        "Explain the extra risk with sleep apnea for any future sedation or anesthesia.",
        "Document drugs, doses, times, the event, interventions and recovery.",
        "Report the event through the hospital safety reporting system.",
        "Debrief with the team.",
      ],
      rubric: ["sd-c1", "sd-p2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "His wife takes him home at 18:15. He sees sports medicine a week later. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "sd-a1",
      competency: "assessment",
      criterion: "physical",
      text: "Documents axillary nerve sensation and distal neurovascular status before any reduction attempt.",
      points: 2,
      teaching: "Axillary nerve injury is common with anterior dislocation. A pre reduction exam shows whether a deficit was caused by the injury or the reduction.",
      source: "roberts",
    },
    {
      id: "sd-m1",
      competency: "management",
      criterion: "management",
      text: "Gives early analgesia and tries a technique without sedation, such as external rotation, Cunningham or FARES.",
      points: 2,
      teaching: "Many anterior dislocations reduce without sedation. This avoids most sedation risk in a patient with sleep apnea.",
      source: "roberts",
    },
    {
      id: "sd-a2",
      competency: "assessment",
      criterion: "physical",
      text: "Identifies sedation risk factors: sleep apnea, obesity, Mallampati 3 and a beard.",
      points: 2,
      teaching: "These predict airway obstruction and difficult mask ventilation. Plan the rescue before giving the drug.",
      source: "green-2019",
    },
    {
      id: "sd-p1",
      competency: "professionalism",
      criterion: "process",
      text: "Obtains informed consent and does not delay sedation for fasting time alone.",
      points: 1,
      teaching: "ACEP advises that emergency sedation should not be delayed based on fasting time. Consent should cover the airway risks and the alternatives.",
      source: "acep-2014",
    },
    {
      id: "sd-l1",
      competency: "leadership",
      criterion: "process",
      text: "Assigns a dedicated clinician to monitor, with capnography, oxygen, suction and rescue airway equipment at the bedside.",
      points: 3,
      critical: true,
      teaching: "Capnography detects hypoventilation before oxygen saturation falls. The person monitoring should have no other task.",
      source: "acep-2014",
    },
    {
      id: "sd-m2",
      competency: "management",
      criterion: "management",
      text: "Doses propofol on lean or adjusted weight and titrates small boluses, or uses a ketamine and propofol combination.",
      points: 2,
      teaching: "Propofol dosed on total weight in obesity causes overdose. Titration reduces apnea and hypotension.",
      source: "roberts",
    },
    {
      id: "sd-r1",
      competency: "resuscitation",
      criterion: "management",
      text: "Responds to apnea at once with a stop, jaw thrust, adjuncts and bag mask ventilation, and does not wait for desaturation or rely on naloxone.",
      points: 3,
      critical: true,
      teaching: "Most sedation apnea is brief and rescued with simple airway manoeuvres. Delay is what causes harm.",
      source: "acep-2014",
    },
    {
      id: "sd-a3",
      competency: "assessment",
      criterion: "physical",
      text: "Repeats the neurovascular exam and obtains a post reduction X ray.",
      points: 1,
      teaching: "Confirm reduction and rule out a fracture caused by the manoeuvre. Document nerve function again.",
      source: "roberts",
    },
    {
      id: "sd-d2",
      competency: "disposition",
      criterion: "process",
      text: "Provides a sling and arranges orthopedic or sports medicine follow up for a recurrent dislocation over age 40.",
      points: 1,
      teaching: "Rotator cuff tears are more common after dislocation over 40. Recurrence may need surgical assessment.",
      source: "roberts",
    },
    {
      id: "sd-d1",
      competency: "disposition",
      criterion: "process",
      text: "Discharges only when at baseline, with a responsible adult, no driving until the next day, and CPAP tonight.",
      points: 3,
      critical: true,
      teaching: "Psychomotor recovery lags behind alertness. A responsible adult escort is a standard discharge criterion after sedation.",
      source: "caep-psa",
    },
    {
      id: "sd-c1",
      competency: "communication",
      criterion: "process",
      text: "Tells the patient about the apnea event, what was done and what it means for future sedation.",
      points: 2,
      teaching: "Patients should hear about events during their care. This one matters for future anesthesia.",
      source: "cmpa",
    },
    {
      id: "sd-p2",
      competency: "professionalism",
      criterion: "process",
      text: "Documents drugs, doses, the event and the response, and reports it through the hospital safety system.",
      points: 1,
      teaching: "Reporting sedation events improves systems. Clear records protect the patient and the team.",
      source: "cmpa",
    },
    {
      id: "sd-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks about the mechanism and time of injury and any previous dislocation of that shoulder.",
      points: 2,
      teaching: "A fall on the outstretched arm with a prior dislocation fits a recurrent anterior dislocation. Recurrence shapes follow up and future instability risk.",
      source: "roberts",
    },
    {
      id: "sd-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks about sleep apnea and CPAP use, other medical history, medications, allergies and any past problems with sedation.",
      points: 2,
      teaching: "Sleep apnea and obesity raise the risk of airway obstruction and apnea during sedation. An uneventful sedation at age 22 is reassuring but does not remove this risk.",
      source: "green-2019",
    },
    {
      id: "sd-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks the time and size of his last meal and weighs it with his other risk factors.",
      points: 2,
      teaching: "Fasting time alone should not delay emergency sedation. Green 2019 advises weighing a recent large meal with other risk factors to choose the timing and depth of sedation.",
      source: "green-2019",
    },
    {
      id: "sd-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks how he got to the club and who can take him home, before choosing sedation.",
      points: 1,
      teaching: "He drove himself and his wife is at work until 18:00. Planning the ride home early prevents an unsafe discharge after sedation.",
      source: "caep-psa",
    },
  ],
  sources: [
    {
      id: "acep-2014",
      citation: "Godwin SA, Burton JH, Gerardo CJ, et al. Clinical policy. Procedural sedation and analgesia in the emergency department. Ann Emerg Med. 2014.",
    },
    {
      id: "green-2019",
      citation: "Green SM, Roback MG, Krauss BS, et al. Unscheduled procedural sedation. A multidisciplinary consensus practice guideline. Ann Emerg Med. 2019.",
    },
    {
      id: "caep-psa",
      citation: "Innes G, Murphy M, Nijssen Jordan C, Ducharme J, Drummond A. Procedural sedation and analgesia in the emergency department. Canadian consensus guidelines. J Emerg Med. 1999.",
    },
    {
      id: "roberts",
      citation: "Roberts JR, Custalow CB, Thomsen TW, editors. Roberts and Hedges' Clinical Procedures in Emergency Medicine and Acute Care. 7th edition. 2019.",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery. Open and honest communication with patients. Version 3. 2017.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 2,
};
