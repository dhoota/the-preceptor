// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const northernSnowmobileTransfer: OralCase = {
  id: "northern-snowmobile-transfer",
  title: "A snowmobile, a tree and a long way to go",
  blueprint: "systems",
  alsoCovers: ["trauma", "neuro"],
  summary: "A young man with a head injury at a small northern hospital needs care that is 380 km away, and the weather is closing in.",
  durationMinutes: 15,
  stem:
    "You are the only physician on shift at a 25 bed hospital in northwestern Ontario. It is 19:40 on a Saturday in January. " +
    "You have a CT scanner with remote radiology reading, three nurses, and a respiratory therapist on call from home. " +
    "The local land ambulance base has two primary care paramedic crews. The nearest neurosurgery is at a regional trauma centre 380 km away. The local airport is 15 minutes away. " +
    "Evan Tremblay is 24 years old. At about 18:00 his snowmobile hit a tree. He was knocked out briefly, then walked and talked. Friends drove him in at 19:05. " +
    "Triage vitals: heart rate 70, blood pressure 150/86, respiratory rate 16, SpO2 97 percent on room air, temperature 36.1, capillary glucose 6.3 mmol/L. GCS 14. " +
    "The radiologist phones: 'Right temporal epidural hematoma, 22 mm thick, with 8 mm of midline shift and an overlying skull fracture. C spine CT is normal.'",
  findings: [
    {
      id: "primary",
      label: "Primary survey",
      result:
        "Airway patent. Talking. Chest clear with equal air entry. No chest wall tenderness. Abdomen soft. Pelvis stable. FAST negative. " +
        "No long bone deformity. Right temporal boggy swelling.",
    },
    {
      id: "neuro",
      label: "Neurological exam at 19:40",
      result: "GCS 14 (eyes 3, verbal 5, motor 6). Pupils 3 mm and equal, reactive. Moves all limbs. Complains of worsening headache. Vomited twice.",
    },
    {
      id: "ct",
      label: "CT head",
      result:
        "Biconvex right temporal extradural collection 22 mm thick. Midline shift 8 mm. Effacement of the right lateral ventricle. Nondisplaced right temporal bone fracture. No other injury.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 146 g/L. Platelets 228 x 10^9/L. INR 1.0. Sodium 139 mmol/L. Glucose 6.5 mmol/L. Serum ethanol 16 mmol/L. Weight about 85 kg.",
    },
    {
      id: "repeat-neuro",
      label: "Neurological exam at 20:05",
      result:
        "GCS 8 (eyes 2, verbal 2, motor 4). Right pupil 6 mm and sluggish. Left pupil 3 mm and reactive. Heart rate 54. Blood pressure 176/72. Irregular breathing.",
    },
    {
      id: "criticall",
      label: "CritiCall Ontario",
      result:
        "Can set up a conference call with the on call neurosurgeon and Ornge within minutes of a life or limb request. Needs the patient details, images pushed to the receiving site and a callback number.",
    },
    {
      id: "ornge",
      label: "Ornge transport status",
      result:
        "At 20:15 the Ornge transport medicine physician reports freezing fog at your airport. No fixed wing landing expected for at least 4 hours. " +
        "An Ornge fixed wing crew can meet a land ambulance at an open airport 110 km south, about 90 minutes by road.",
    },
    {
      id: "local",
      label: "Local staffing tonight",
      result:
        "Three nurses. One has ICU experience and is comfortable with ventilated patients. The respiratory therapist can be in within 15 minutes. " +
        "A second local physician is on call from home and can cover the department if needed.",
    },
    {
      id: "post-intubation",
      label: "After intubation",
      result:
        "Heart rate 60. Blood pressure 138/78. SpO2 99 percent. End tidal CO2 38 mmHg. Tube 23 cm at the lip, confirmed on chest X ray. Arterial gas pH 7.37, pCO2 40 mmHg, pO2 180 mmHg.",
    },
    {
      id: "mother",
      label: "His mother",
      result: "Arrives at 20:30. She knows he crashed but not how serious it is. She wants to travel with him.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "19:40",
      text: "Evan is on a stretcher in your resus room, talking but drowsy. His friends are in the waiting room. The nurse asks what you want to do.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "The CT result",
      prompt: "What do you do now?",
      seconds: 90,
      modelAnswer: [
        "This is a surgical lesion with mass effect. He needs neurosurgery as fast as possible.",
        "Call CritiCall now as a life or limb request. Push the images to the receiving site.",
        "Head of bed up 30 degrees. Two IVs. Neuro checks every 15 minutes.",
        "Avoid hypoxia and hypotension. Keep systolic at least 110 for his age.",
        "Tranexamic acid 1 g IV over 10 minutes then 1 g over 8 hours. He is within 3 hours.",
        "Call in the respiratory therapist and prepare for intubation.",
      ],
      rubric: ["nt-a1", "nt-d1", "nt-m1"],
      choices: [
        {
          id: "c-criticall",
          label: "I called CritiCall right away for a neurosurgery and transport conference, pushed the images, gave tranexamic acid, and called in the respiratory therapist to prepare for intubation.",
          next: "s-deteriorate",
          quality: "strong",
          feedback:
            "Correct. An epidural hematoma with 8 mm of shift can decompensate at any moment. CritiCall links the neurosurgeon and Ornge in one call, so acceptance and transport run in parallel. Tranexamic acid within 3 hours fits CRASH 3 for his GCS.",
        },
        {
          id: "c-direct",
          label: "I paged the neurosurgeon at the trauma centre through their switchboard and waited for a callback before arranging transport.",
          next: "s-direct",
          quality: "partial",
          feedback:
            "Speaking to neurosurgery is right, but going around CritiCall splits acceptance from transport. The callback may take time, and Ornge is not yet moving. CritiCall runs both at once.",
        },
        {
          id: "c-observe",
          label: "His GCS is 14, so I admitted him for neuro checks every hour and planned to discuss in the morning.",
          next: "s-observe",
          quality: "unsafe",
          feedback:
            "A lucid interval with a large epidural hematoma is the classic setup for sudden herniation. GCS 14 now does not predict GCS 14 in an hour. This needs emergent neurosurgery.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-direct",
      phase: "20:00",
      text:
        "Twenty minutes pass with no callback. The neurosurgeon finally calls and asks why transport has not been requested. He tells you to call CritiCall. You do.",
      next: "s-deteriorate",
    },
    {
      kind: "say",
      id: "s-observe",
      phase: "20:05",
      text: "The nurse calls you urgently from the ward hallway. He is hard to rouse and one pupil is bigger. You bring him back to resus and call CritiCall.",
      next: "s-deteriorate",
    },
    {
      kind: "say",
      id: "s-deteriorate",
      phase: "20:05",
      text:
        "Evan is now GCS 8. His right pupil is 6 mm and sluggish. Heart rate 54. Blood pressure 176/72. His breathing is irregular. The respiratory therapist has just arrived.",
      next: "q-airway",
    },
    {
      kind: "question",
      id: "q-airway",
      phase: "The airway",
      prompt: "How will you intubate him?",
      seconds: 90,
      modelAnswer: [
        "Rapid sequence intubation now. He cannot protect his airway and must travel.",
        "Preoxygenate. Keep SpO2 above 90 percent throughout.",
        "Hemodynamically stable induction. Ketamine 1 to 2 mg/kg or etomidate 0.3 mg/kg. Rocuronium 1.2 mg/kg.",
        "Avoid hypotension. Push dose vasopressor ready. Keep systolic at least 110.",
        "His C spine CT is normal. Handle the neck gently and follow local clearance practice.",
        "After the tube. End tidal CO2 35 to 40. Sedation and analgesia infusions.",
      ],
      rubric: ["nt-r1", "nt-r2"],
      choices: [
        {
          id: "c-rsi",
          label: "I preoxygenated, used ketamine 1.5 mg/kg and rocuronium 1.2 mg/kg with phenylephrine ready, and set ventilation to an end tidal CO2 of 35 to 40.",
          next: "q-herniation",
          quality: "strong",
          feedback:
            "Good. One episode of hypoxia or hypotension raises mortality in severe head injury. Ketamine keeps the pressure up and does not raise ICP in a way that matters. Normal CO2 is the target after intubation.",
        },
        {
          id: "c-propofol",
          label: "I gave midazolam 5 mg and propofol 200 mg for induction to blunt the pressure response.",
          next: "s-propofol",
          quality: "partial",
          feedback:
            "Large doses of both agents risk a drop in pressure. Hypotension is more harmful to the injured brain than a brief rise at laryngoscopy. Choose a stable agent and have a vasopressor ready.",
        },
        {
          id: "c-wait-crew",
          label: "I held off intubation so the transport crew could do it when they arrived.",
          next: "s-wait-crew",
          quality: "unsafe",
          feedback:
            "The crew is hours away. A GCS 8 patient with irregular breathing and herniation signs needs his airway secured now. Hypoxia and hypercapnia will drive up his ICP.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-propofol",
      phase: "20:15",
      text: "After induction his pressure falls to 82/48. You give phenylephrine 100 mcg twice and a fluid bolus. It comes back to 124/70 over three minutes.",
      next: "q-herniation",
    },
    {
      kind: "say",
      id: "s-wait-crew",
      phase: "20:15",
      text: "His SpO2 falls to 84 percent and his breathing slows to 6 per minute. You intubate him urgently with the respiratory therapist.",
      next: "q-herniation",
    },
    {
      kind: "question",
      id: "q-herniation",
      phase: "Herniation",
      prompt: "He is intubated. His right pupil is still dilated. What else do you do for his brain now?",
      seconds: 75,
      modelAnswer: [
        "Hyperosmolar therapy now. 3 percent saline 250 mL over 10 to 15 minutes, or mannitol 1 g/kg if pressure allows.",
        "Brief hyperventilation to end tidal CO2 30 to 35 only as a bridge while herniating.",
        "No prolonged or deep hyperventilation.",
        "Head up 30 degrees. Tube ties not tight on the neck. Adequate sedation.",
        "Treat fever and keep glucose normal.",
      ],
      rubric: ["nt-m2", "nt-m3"],
      choices: [
        {
          id: "c-osmo",
          label: "I gave 3 percent saline 250 mL, raised the head of the bed, and briefly targeted an end tidal CO2 of 30 to 35 as a bridge.",
          next: "s-weather",
          quality: "strong",
          feedback:
            "Right. Osmotherapy buys time. Brief mild hyperventilation is acceptable for signs of herniation, but it causes vasoconstriction and should stop as soon as the crisis passes.",
        },
        {
          id: "c-deep-hv",
          label: "I hyperventilated him to an end tidal CO2 of 25 and kept it there for transport.",
          next: "s-deep-hv",
          quality: "partial",
          feedback:
            "Sustained hyperventilation to a pCO2 of 25 or less reduces cerebral blood flow and risks ischemia. Use it briefly for active herniation only. Osmotherapy should come first.",
        },
        {
          id: "c-wait-ns",
          label: "I waited for neurosurgery to accept before starting osmotherapy.",
          next: "s-wait-ns",
          quality: "unsafe",
          feedback:
            "Hyperosmolar therapy does not need a neurosurgeon's permission. A blown pupil is an emergency and minutes matter.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-deep-hv",
      phase: "20:25",
      text: "The respiratory therapist asks you to confirm the target. His end tidal CO2 is 24. You give 3 percent saline and bring the target back to 35 to 40.",
      next: "s-weather",
    },
    {
      kind: "say",
      id: "s-wait-ns",
      phase: "20:25",
      text: "The neurosurgeon joins the CritiCall line and asks what osmotherapy has been given. None. He asks you to start it now. You give 3 percent saline 250 mL.",
      next: "s-weather",
    },
    {
      kind: "say",
      id: "s-weather",
      phase: "20:30",
      text:
        "His right pupil is now 4 mm and reacting. On the CritiCall conference, the neurosurgeon accepts him. " +
        "Then the Ornge transport physician says freezing fog has closed your airport for at least 4 hours. A fixed wing crew could meet a land ambulance at an open airport 110 km south, about 90 minutes by road. " +
        "Your land ambulance crews are primary care paramedics.",
      next: "q-transport",
    },
    {
      kind: "question",
      id: "q-transport",
      phase: "The weather",
      prompt: "How do you get him there?",
      seconds: 90,
      modelAnswer: [
        "Do not wait 4 hours. Time to decompression drives his outcome.",
        "Agree a rendezvous with Ornge at the open airport, by land ambulance.",
        "Send an escort who can manage a ventilated patient. The ICU trained nurse and the respiratory therapist.",
        "Primary care paramedics alone cannot manage a ventilated head injured patient.",
        "Call in the second physician to cover the department if a physician escort is needed or staff leave.",
        "Confirm the plan with the neurosurgeon so the operating room is ready on arrival.",
      ],
      rubric: ["nt-d2", "nt-l1", "nt-c1"],
      choices: [
        {
          id: "c-rendezvous",
          label: "I agreed a road rendezvous with Ornge at the open airport, sent my ICU nurse and the respiratory therapist as escorts, and called in the on call physician to cover the department.",
          next: "q-package",
          quality: "strong",
          feedback:
            "This is the fastest safe option. It matches the escort's skills to the patient's needs and keeps the department covered. Rendezvous transfers are a routine part of Ornge operations in the north.",
        },
        {
          id: "c-wait-weather",
          label: "I kept him in my department and waited for the fog to lift.",
          next: "s-wait-weather",
          quality: "unsafe",
          feedback:
            "Four or more hours of delay for an expanding epidural hematoma risks herniation and death. There is a faster option. Ask Ornge about rendezvous or land critical care before accepting a wait.",
        },
        {
          id: "c-pcp-only",
          label: "I sent him by land with the primary care paramedic crew alone so my staff could stay in the hospital.",
          next: "s-pcp-only",
          quality: "unsafe",
          feedback:
            "Primary care paramedics are not trained to manage a ventilator, sedation infusions or a herniating patient. The sending physician must match the escort to the patient's needs.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-weather",
      phase: "21:30",
      text:
        "An hour later his right pupil is 6 mm again despite a second dose of hypertonic saline. The neurosurgeon calls and asks why he has not left. You call Ornge back and arrange the road rendezvous.",
      next: "q-package",
    },
    {
      kind: "say",
      id: "s-pcp-only",
      phase: "20:45",
      text:
        "The paramedic crew lead refuses. 'We cannot manage a vent or the drips. We need a nurse or RT with us.' She is right. You send your ICU nurse and the respiratory therapist and call in the second physician.",
      next: "q-package",
    },
    {
      kind: "question",
      id: "q-package",
      phase: "Packaging",
      prompt: "What must be done before he leaves your door?",
      seconds: 90,
      modelAnswer: [
        "Tube secured and position confirmed on X ray. Continuous end tidal CO2 on the transport monitor.",
        "Transport ventilator settings checked on the patient before leaving. Oxygen supply for twice the expected time.",
        "Two working IVs. Sedation infusion. Vasopressor mixed and ready. Extra hypertonic saline.",
        "Orogastric tube and urinary catheter.",
        "Images pushed electronically. Copies of notes, drug record, labs and consent forms.",
        "Head up 30 degrees. Keep warm.",
      ],
      rubric: ["nt-d3", "nt-a2"],
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover and family",
      prompt: "The ambulance is at the door and his mother has just arrived. What do you say to the escort team, and what do you tell his mother?",
      seconds: 90,
      modelAnswer: [
        "Structured handover. Mechanism, injuries, interventions with times, current vitals and targets.",
        "Targets. Systolic at least 110, SpO2 above 90, end tidal CO2 35 to 40.",
        "What to do if the pupil dilates again. Hypertonic saline dose and brief hyperventilation.",
        "Who to call en route. Sending physician and Ornge transport medicine.",
        "Tell his mother honestly. Bleeding on the brain that needs urgent surgery. He is very sick.",
        "Explain where he is going and how she can get there. She usually cannot ride in the aircraft.",
      ],
      rubric: ["nt-c2", "nt-c3"],
      next: "q-after",
    },
    {
      kind: "question",
      id: "q-after",
      phase: "After he leaves",
      prompt: "He has left. What are your remaining responsibilities?",
      seconds: 60,
      modelAnswer: [
        "I remain responsible until care is handed over to the Ornge crew.",
        "Stay available by phone to the escort team.",
        "Document the timeline, decisions, consultant advice and transport discussions.",
        "Confirm department coverage and staff return.",
        "Debrief the team. Consider a review of how long each step took.",
      ],
      rubric: ["nt-l2", "nt-p1"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "The road rendezvous goes smoothly. Evan has a craniotomy shortly after midnight. Three days later he is extubated and talking. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "nt-a1",
      competency: "assessment",
      text: "Recognizes a large epidural hematoma with mass effect as a neurosurgical emergency despite GCS 14.",
      points: 3,
      critical: true,
      teaching: "The lucid interval can end suddenly. Size, shift and symptoms matter more than the current GCS.",
      source: "atls",
    },
    {
      id: "nt-a2",
      competency: "assessment",
      text: "Checks tube position, ventilator settings and oxygen supply on the transport equipment before departure.",
      points: 1,
      teaching: "Problems found at the door are easy to fix. Problems found on the road are not.",
      source: "warren",
    },
    {
      id: "nt-r1",
      competency: "resuscitation",
      text: "Intubates promptly with a hemodynamically stable induction and a vasopressor ready.",
      points: 2,
      teaching: "A single episode of hypotension or hypoxia worsens outcome after head injury.",
      source: "btf",
    },
    {
      id: "nt-r2",
      competency: "resuscitation",
      text: "Targets systolic at least 110, SpO2 above 90 and end tidal CO2 35 to 40.",
      points: 3,
      critical: true,
      teaching: "Brain Trauma Foundation guidance sets a systolic of at least 110 for patients aged 15 to 49. Normocapnia is the default.",
      source: "btf",
    },
    {
      id: "nt-m1",
      competency: "management",
      text: "Gives tranexamic acid 1 g over 10 minutes then 1 g over 8 hours within 3 hours of injury.",
      points: 1,
      teaching: "CRASH 3 showed reduced head injury death with early tranexamic acid in mild to moderate injury. Benefit falls with time.",
      source: "crash3",
    },
    {
      id: "nt-m2",
      competency: "management",
      text: "Gives hyperosmolar therapy for herniation, such as 3 percent saline 250 mL or mannitol 1 g/kg.",
      points: 2,
      teaching: "Osmotherapy lowers ICP within minutes and buys time to decompression.",
      source: "btf",
    },
    {
      id: "nt-m3",
      competency: "management",
      text: "Uses hyperventilation only briefly as a bridge and avoids a pCO2 of 25 or less.",
      points: 1,
      teaching: "Deep or prolonged hyperventilation causes cerebral vasoconstriction and ischemia.",
      source: "btf",
    },
    {
      id: "nt-d1",
      competency: "disposition",
      text: "Calls CritiCall immediately as a life or limb request so acceptance and transport run in parallel.",
      points: 2,
      teaching: "CritiCall connects the sending physician, the accepting specialist and Ornge in one conference.",
      source: "criticall",
    },
    {
      id: "nt-d2",
      competency: "disposition",
      text: "Chooses the fastest safe transport, such as a road rendezvous with an air crew, rather than waiting for weather.",
      points: 3,
      critical: true,
      teaching: "Time to decompression drives outcome. Ask transport medicine for every option, not just the first one.",
      source: "ornge",
    },
    {
      id: "nt-d3",
      competency: "disposition",
      text: "Packages the patient fully with secured tube, continuous capnography, infusions, extra doses and records.",
      points: 2,
      teaching: "Prepare for the worst event on the road. Carry what you would need to treat it.",
      source: "warren",
    },
    {
      id: "nt-l1",
      competency: "leadership",
      text: "Matches escort skills to the patient and arranges physician coverage for the department.",
      points: 2,
      teaching: "The sending physician decides who escorts. A rural department cannot be left without a physician.",
      source: "warren",
    },
    {
      id: "nt-l2",
      competency: "leadership",
      text: "Documents the timeline and decisions and debriefs the team.",
      points: 1,
      teaching: "A clear timeline supports the receiving team and later review of transfer delays.",
      source: "warren",
    },
    {
      id: "nt-c1",
      competency: "communication",
      text: "Keeps the neurosurgeon and Ornge in a shared plan with confirmed timings.",
      points: 1,
      teaching: "Closed loop communication across three sites prevents the operating room being ready at the wrong time.",
      source: "criticall",
    },
    {
      id: "nt-c2",
      competency: "communication",
      text: "Gives a structured handover with targets and an if then plan for deterioration.",
      points: 2,
      teaching: "Escort teams need explicit targets and a plan for the most likely emergency.",
      source: "warren",
    },
    {
      id: "nt-c3",
      competency: "communication",
      text: "Tells his mother honestly how sick he is and how she can reach him.",
      points: 1,
      teaching: "Families are often separated from patients in northern transfers. Give practical details as well as the diagnosis.",
      source: "ornge",
    },
    {
      id: "nt-p1",
      competency: "professionalism",
      text: "Accepts ongoing responsibility until handover to the transport crew and stays available.",
      points: 1,
      teaching: "The sending physician remains responsible for the patient until care is formally handed over.",
      source: "warren",
    },
  ],
  sources: [
    {
      id: "btf",
      citation: "Carney N, et al. Guidelines for the management of severe traumatic brain injury. Fourth edition. Brain Trauma Foundation. Neurosurgery. 2017.",
    },
    {
      id: "crash3",
      citation: "CRASH 3 trial collaborators. Effects of tranexamic acid on death, disability, vascular occlusive events and other morbidities in patients with acute traumatic brain injury (CRASH 3). The Lancet. 2019.",
    },
    {
      id: "criticall",
      citation: "CritiCall Ontario. Emergency consultation and referral service for Ontario hospitals.",
      url: "https://www.criticall.org",
    },
    {
      id: "ornge",
      citation: "Ornge. Air ambulance and critical care land transport services in Ontario.",
      url: "https://www.ornge.ca",
    },
    {
      id: "warren",
      citation: "Warren J, et al. Guidelines for the inter and intrahospital transport of critically ill patients. Critical Care Medicine. 2004.",
    },
    {
      id: "atls",
      citation: "American College of Surgeons Committee on Trauma. Advanced Trauma Life Support. 11th edition. 2025.",
      url: "https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/atls-11/",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
