// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const cicoScalpelCricothyrotomy: OralCase = {
  id: "cico-scalpel-cricothyrotomy",
  title: "Facial injuries after an assault",
  blueprint: "procedures",
  alsoCovers: ["trauma", "resus"],
  priorityTopic: "airway",
  keyFeatures: [
    { topic: "airway", n: 1 },
    { topic: "airway", n: 2 },
    { topic: "airway", n: 3 },
    { topic: "airway", n: 4 },
    { topic: "airway", n: 6 },
    { topic: "multiple-trauma", n: 1 },
  ],
  summary: "A 31 year old man with severe facial injuries and a falling level of consciousness needs airway control.",
  durationMinutes: 14,
  stem:
    "You work in a community emergency department in Ontario, 90 minutes by road from the regional trauma centre. It is 01:30. " +
    "Anesthesia is on call from home, 30 minutes away. A respiratory therapist is in the department. " +
    "You have video and direct laryngoscopes, bougies, second generation supraglottic airways, two suction units and a scalpel cricothyrotomy kit with a size 10 blade, a bougie and a 6.0 cuffed tube. " +
    "Tyler Bouchard is 31 years old and weighs about 95 kg. He was struck repeatedly in the face with a baseball bat. " +
    "Paramedic vitals: heart rate 118, blood pressure 144/88, respiratory rate 28, SpO2 89 percent on a non rebreather. GCS 8. He is in a cervical collar. CTAS 1. " +
    "The paramedic says: 'He's got blood pouring from his mouth and his face moves when I touch it. His sats keep dropping.'",
  findings: [
    {
      id: "face",
      label: "Face and mouth",
      result:
        "Mobile midface when the upper teeth are pulled forward. Bilateral mandible fractures with a mobile anterior segment. Several broken teeth. " +
        "Brisk bleeding from the mouth and nose. Gurgling respirations. Mouth opening limited by pain and swelling.",
    },
    {
      id: "neck",
      label: "Neck",
      result:
        "No midline tenderness can be assessed because of his GCS. Trachea midline. The thyroid cartilage is palpable. " +
        "The cricothyroid membrane is palpable with some difficulty. Ultrasound confirms it at 1.2 cm depth. No neck hematoma.",
    },
    {
      id: "neuro",
      label: "Neurological",
      result: "GCS 8: eyes 2, verbal 2, motor 4. Pupils 3 mm and reactive. Moves all limbs to pain.",
    },
    {
      id: "chest",
      label: "Chest",
      result: "Tender with crepitus over the left lateral ribs 5 to 7. Air entry equal at arrival. No obvious flail segment.",
    },
    {
      id: "efast",
      label: "E FAST",
      result: "Lung sliding present on both sides at arrival. No pericardial effusion. No free fluid in the abdomen.",
    },
    {
      id: "vbg",
      label: "Venous blood gas",
      result: "pH 7.31, pCO2 49 mmHg, lactate 2.8 mmol/L, hemoglobin 132 g/L. Ethanol 34 mmol/L.",
    },
    {
      id: "post-cric",
      label: "After the surgical airway",
      result: "Capnography waveform present with end tidal CO2 of 44 mmHg. Bilateral chest rise. SpO2 rising from 64 to 93 percent over 2 minutes.",
    },
    {
      id: "late-change",
      label: "Ten minutes after the surgical airway",
      result:
        "Peak airway pressure 42 cmH2O. SpO2 84 percent. Blood pressure 82/50. Heart rate 132. Absent breath sounds on the left. No lung sliding on the left on ultrasound. Trachea midline.",
    },
    {
      id: "friend",
      label: "Collateral from his friend",
      result: "His friend says he was attacked outside a bar. He is healthy with no medical problems. His mother lives in town.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "In resus",
      text:
        "He is on the stretcher with blood welling in his mouth. SpO2 is 88 percent on a non rebreather. The respiratory therapist is suctioning. The nurse asks if you want to intubate.",
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Airway plan",
      prompt: "Talk me through your preparation and your airway plan before you give any drugs.",
      seconds: 120,
      modelAnswer: [
        "Anticipate a difficult airway. Call anesthesia, but do not wait if he deteriorates.",
        "Two large bore suction units. Consider a SALAD technique.",
        "Sit him up with manual in line stabilization. Front of collar open.",
        "Preoxygenate. Non rebreather plus nasal cannula at 15 L/min. Avoid nasal adjuncts with the midface fracture.",
        "Mark the cricothyroid membrane by palpation and ultrasound. Open the scalpel kit.",
        "Brief the team. Plan A video laryngoscopy with bougie, plan B supraglottic airway, plan C bag mask, plan D scalpel cricothyrotomy.",
        "Name the trigger for plan D out loud.",
      ],
      rubric: ["cc-l1", "cc-r1", "cc-a1"],
      choices: [
        {
          id: "c-brief",
          label: "I briefed a plan A to D, had two suctions, preoxygenated sitting up with in line stabilization, marked the membrane with ultrasound and opened the scalpel kit before induction.",
          next: "q-induction",
          quality: "strong",
          feedback:
            "Strong answer. A shared plan with the surgical kit open means the team moves without hesitation if intubation fails. Marking the membrane in advance speeds the cut.",
        },
        {
          id: "c-vl-only",
          label: "I set up the video laryngoscope and planned to figure out the rest if it failed.",
          next: "s-vl-only",
          quality: "partial",
          feedback:
            "Blood in the airway and an unstable face make failure likely. Without a stated plan and an open kit, the team loses minutes finding equipment. The examiner wanted every step planned before induction.",
        },
        {
          id: "c-nasal",
          label: "I placed a nasopharyngeal airway and bagged him to bring up his saturation before induction.",
          next: "s-vl-only",
          quality: "unsafe",
          feedback:
            "A nasal adjunct is relatively contraindicated with a mobile midface because it can pass into the cranial vault or worsen bleeding. Vigorous bagging of a bleeding airway before induction also pushes blood into the lungs. Suction, position and preoxygenation come first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-vl-only",
      phase: "Two minutes later",
      text:
        "The respiratory therapist asks where the cricothyrotomy kit is and who will mark the neck. You stop, brief the team, open the kit and mark the membrane. His SpO2 is 86 percent.",
      next: "q-induction",
    },
    {
      kind: "question",
      id: "q-induction",
      phase: "Induction",
      prompt: "Which drugs and doses will you use for induction?",
      seconds: 60,
      modelAnswer: [
        "Ketamine 1 to 1.5 mg/kg, about 100 to 140 mg.",
        "Rocuronium 1.2 to 1.6 mg/kg, about 120 to 150 mg, or succinylcholine 1.5 mg/kg.",
        "Full dose paralysis gives the best first pass conditions.",
        "Suction running before and during laryngoscopy.",
      ],
      rubric: ["cc-m1"],
      next: "s-fail",
    },
    {
      kind: "say",
      id: "s-fail",
      phase: "01:42",
      text:
        "First attempt with the video laryngoscope: the camera is covered in blood. Second attempt by you with a direct laryngoscope and suction: no view of the larynx. " +
        "A supraglottic airway is placed. There is no capnography trace. Two person bag mask ventilation with an oral airway gives no chest rise. " +
        "SpO2 is 72 percent and falling. Heart rate 98.",
      next: "q-cico",
    },
    {
      kind: "question",
      id: "q-cico",
      phase: "Can't intubate, can't oxygenate",
      prompt: "What is happening and what do you do now?",
      seconds: 60,
      modelAnswer: [
        "This is a can't intubate, can't oxygenate situation.",
        "Say it out loud. Declare it to the team.",
        "Move to a scalpel cricothyrotomy now.",
        "Keep trying oxygen from above while you cut.",
        "Do not make more intubation attempts.",
      ],
      rubric: ["cc-r2", "cc-l2"],
      choices: [
        {
          id: "c-declare",
          label: "I declared a can't intubate, can't oxygenate situation out loud and started a scalpel cricothyrotomy at once.",
          next: "q-technique",
          quality: "strong",
          feedback:
            "Correct. Failed intubation, failed supraglottic airway and failed mask ventilation with falling saturation is the trigger. Declaring it aloud overcomes fixation and gives the team permission to act.",
        },
        {
          id: "c-one-more",
          label: "I tried one more laryngoscopy with a different blade.",
          next: "s-one-more",
          quality: "unsafe",
          feedback:
            "Repeated attempts cause more bleeding and swelling and waste the oxygen he has left. Intubation, a supraglottic airway and mask ventilation have all failed with falling saturation. The next step is the neck. Fixation on intubation is a common cause of airway death.",
        },
        {
          id: "c-needle",
          label: "I placed a needle cricothyroidotomy and started jet ventilation.",
          next: "s-one-more",
          quality: "partial",
          feedback:
            "Needle techniques fail often in adults. The cannulas kink and displace and jet ventilation causes barotrauma. Current guidelines favour the scalpel, bougie, tube technique.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-one-more",
      phase: "Forty seconds later",
      text:
        "SpO2 is 54 percent. His heart rate falls to 48. The respiratory therapist says: 'We need to cut now.' You pick up the scalpel.",
      next: "q-technique",
    },
    {
      kind: "question",
      id: "q-technique",
      phase: "The procedure",
      prompt: "Describe exactly how you perform the cricothyrotomy.",
      seconds: 120,
      modelAnswer: [
        "A right handed operator stands on the patient's left side. Extend the neck if the spine allows. Remove the front of the collar with in line stabilization.",
        "Laryngeal handshake with the non dominant hand to find and hold the larynx.",
        "Transverse stab incision through skin and cricothyroid membrane with a size 10 blade.",
        "Turn the blade 90 degrees so the sharp edge points toward the feet. Pull it gently toward you to open the hole.",
        "Slide the bougie tip along the blade into the trachea.",
        "Railroad a lubricated 6.0 cuffed tube over the bougie. Inflate the cuff and confirm with capnography.",
        "If the membrane cannot be felt, make an 8 to 10 cm vertical midline incision and use blunt finger dissection first.",
      ],
      rubric: ["cc-r3"],
      next: "s-cric",
    },
    {
      kind: "say",
      id: "s-cric",
      phase: "01:46",
      text:
        "The tube is in. There is a capnography waveform with an end tidal CO2 of 44 mmHg. His SpO2 rises from 64 to 93 percent over two minutes. His heart rate is 112. You secure the tube.",
      next: "s-late",
    },
    {
      kind: "say",
      id: "s-late",
      phase: "01:56",
      text:
        "The ventilator alarms. Peak pressure is 42 cmH2O. SpO2 is 84 percent and falling. Blood pressure 82/50, heart rate 132. There are no breath sounds on the left. " +
        "Capnography still shows a waveform.",
      next: "q-desat",
    },
    {
      kind: "question",
      id: "q-desat",
      phase: "New deterioration",
      prompt: "What is your approach to this deterioration and what do you do?",
      seconds: 90,
      modelAnswer: [
        "Take him off the ventilator and bag by hand to feel compliance.",
        "Check DOPES: displacement, obstruction, pneumothorax, equipment, stacking.",
        "A capnography trace means the tube is in the airway.",
        "Rib fractures and positive pressure make tension pneumothorax likely. No lung sliding on the left supports it.",
        "Finger thoracostomy at the 4th or 5th space, just anterior to the mid axillary line.",
        "Follow with a chest tube.",
      ],
      rubric: ["cc-a2", "cc-r4"],
      choices: [
        {
          id: "c-finger",
          label: "I bagged by hand, ran through DOPES, found no lung sliding on the left and did a finger thoracostomy at the 5th space in the mid axillary line, then placed a chest tube.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. A systematic check prevents you from pulling a working airway. In an intubated patient, finger thoracostomy is fast and reliable for tension pneumothorax.",
        },
        {
          id: "c-pull",
          label: "I assumed the cricothyrotomy tube had moved and pulled it to replace it.",
          next: "s-pull",
          quality: "unsafe",
          feedback:
            "The capnography waveform shows the tube is in the trachea. Removing a hard won airway in a patient with an unmanageable upper airway can be fatal. Check DOPES before touching the tube.",
        },
        {
          id: "c-needle-2",
          label: "I did a needle decompression in the 2nd space mid clavicular line with a standard IV cannula.",
          next: "s-pull",
          quality: "partial",
          feedback:
            "Needle decompression is reasonable but standard cannulas often fail to reach the pleura in adults at the 2nd space. ATLS now favours the 4th or 5th space just anterior to the mid axillary line. In a ventilated patient a finger thoracostomy is better.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-pull",
      phase: "One minute later",
      text:
        "SpO2 is 76 percent. The respiratory therapist points to the left chest, which is not moving. You perform a finger thoracostomy at the 5th space. There is a rush of air. His SpO2 and pressure recover. You place a chest tube.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Next steps",
      prompt: "He is now stable. What are your next steps?",
      seconds: 75,
      modelAnswer: [
        "Chest X ray for tube positions.",
        "Sedation and analgesia.",
        "CT head, cervical spine and face, and chest and abdomen, if he is stable for the scanner.",
        "Trauma team referral through CritiCall to the regional trauma centre.",
        "Tell the receiving team about the surgical airway. It will need formal revision, often to a tracheostomy.",
        "Tetanus. Antibiotics for open facial fractures per local protocol.",
      ],
      rubric: ["cc-d1", "cc-c1"],
      next: "q-debrief",
    },
    {
      kind: "question",
      id: "q-debrief",
      phase: "After the event",
      prompt:
        "The anesthetist arrives and says in front of the team: 'You should have waited for me. I would have got that tube.' How do you respond, and what do you do after he leaves?",
      seconds: 75,
      modelAnswer: [
        "Stay calm. Do not argue in front of the patient and team.",
        "State the facts: two failed laryngoscopies, failed supraglottic airway, failed mask ventilation and SpO2 in the 50s.",
        "Invite a formal review of the case.",
        "Debrief the team. Thank them. Check how they are.",
        "Document the sequence and times clearly.",
        "Speak with his mother when she arrives.",
      ],
      rubric: ["cc-c2", "cc-p1"],
      choices: [
        {
          id: "c-calm",
          label: "I stayed calm, stated the failed steps and the saturations, invited a formal case review, then debriefed the team and documented the timeline.",
          next: "end",
          quality: "strong",
          feedback:
            "Well handled. The facts support the decision. A calm response models professionalism for the team. A structured debrief helps everyone process a stressful event.",
        },
        {
          id: "c-argue",
          label: "I told him he was not there and had no right to judge, and we argued at the bedside.",
          next: "s-argue",
          quality: "partial",
          feedback:
            "Your decision was correct, but arguing in front of the team harms team function and patient care. Take the conversation away from the bedside and use a formal review process.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-argue",
      phase: "Later",
      text:
        "The charge nurse asks you both to step out of the room. Later you meet the anesthetist privately and agree to review the case at the next airway rounds. You debrief the team.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He is flown to the trauma centre at 03:10. His cricothyrotomy is converted to a tracheostomy the next day. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "cc-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Briefs the team with a plan A to D and a named trigger for the surgical airway before induction.",
      points: 2,
      teaching: "A pre stated plan removes hesitation. The team knows what happens next and who does it.",
      source: "das-2015",
    },
    {
      id: "cc-r1",
      competency: "resuscitation",
      criterion: "plan",
      text: "Prepares two suction units, preoxygenates sitting up with in line stabilization and avoids nasal adjuncts with a midface fracture.",
      points: 2,
      teaching: "Positioning upright helps drainage and oxygenation. Nasal devices can enter the cranial vault through a skull base fracture.",
      source: "atls",
    },
    {
      id: "cc-a1",
      competency: "assessment",
      criterion: "approach",
      text: "Identifies predictors of a difficult airway and marks the cricothyroid membrane by palpation and ultrasound before induction.",
      points: 2,
      teaching: "Blood, facial instability and limited mouth opening predict failure. Ultrasound finds the membrane more reliably than palpation.",
      source: "cafg-1",
    },
    {
      id: "cc-m1",
      competency: "management",
      criterion: "plan",
      text: "Uses full dose paralysis with a hemodynamically stable induction agent.",
      points: 1,
      teaching: "Full paralysis improves first pass success. Rocuronium 1.2 mg/kg or more gives good conditions within about 60 seconds.",
      source: "cafg-1",
    },
    {
      id: "cc-r2",
      competency: "resuscitation",
      criterion: "diagnosis",
      text: "Recognizes can't intubate, can't oxygenate after failed intubation, supraglottic airway and mask ventilation, and moves to a scalpel cricothyrotomy without further attempts.",
      points: 3,
      critical: true,
      teaching: "Delay in moving to the neck is a leading cause of death and brain injury in failed airways. Once all three routes fail and saturation falls, cut.",
      source: "das-2015",
    },
    {
      id: "cc-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Declares the can't intubate, can't oxygenate situation out loud to the team.",
      points: 1,
      teaching: "Saying it aloud breaks fixation and gives everyone permission to move to the next step.",
      source: "vortex",
    },
    {
      id: "cc-r3",
      competency: "resuscitation",
      criterion: "plan",
      text: "Describes the scalpel, bougie, tube technique: laryngeal handshake, transverse stab, rotate blade, bougie, 6.0 cuffed tube, capnography.",
      points: 3,
      critical: true,
      teaching: "The technique uses tools familiar to every airway operator. If the membrane cannot be felt, a vertical incision and finger dissection come first.",
      source: "das-2015",
    },
    {
      id: "cc-a2",
      competency: "assessment",
      criterion: "data",
      text: "Uses a systematic DOPES approach to post airway deterioration and trusts the capnography trace.",
      points: 2,
      teaching: "A capnography waveform confirms tracheal placement. Look for pneumothorax, obstruction and equipment failure before touching the tube.",
      source: "atls",
    },
    {
      id: "cc-r4",
      competency: "resuscitation",
      criterion: "plan",
      text: "Decompresses tension pneumothorax with finger thoracostomy at the 4th or 5th space anterior to the mid axillary line, then places a chest tube.",
      points: 3,
      critical: true,
      teaching: "Positive pressure turns a simple pneumothorax into tension fast. In a ventilated patient a finger thoracostomy is quick and reliable.",
      source: "atls",
    },
    {
      id: "cc-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Completes the trauma assessment and arranges transfer to the trauma centre through CritiCall with a plan to revise the surgical airway.",
      points: 2,
      teaching: "A cricothyrotomy is a temporary airway. The receiving team should plan formal revision, usually to a tracheostomy.",
      source: "atls",
    },
    {
      id: "cc-c1",
      competency: "communication",
      criterion: "plan",
      text: "Gives the receiving team a clear handover of the failed airway, the surgical airway and the chest tube.",
      points: 1,
      teaching: "A known difficult airway must be flagged in every handover. Include what failed and why.",
      source: "cafg-1",
    },
    {
      id: "cc-c2",
      competency: "communication",
      criterion: "plan",
      text: "Responds to criticism from a colleague calmly with facts and moves the discussion away from the bedside.",
      points: 2,
      teaching: "Conflict at the bedside harms team function. Use facts and a formal review to settle disagreement.",
      source: "vortex",
    },
    {
      id: "cc-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Leads a team debrief and documents the airway timeline clearly.",
      points: 1,
      teaching: "Debriefing supports staff after a stressful event and finds system lessons. Documentation of times and saturations supports review.",
      source: "das-2015",
    },
  ],
  sources: [
    {
      id: "das-2015",
      citation: "Frerk C, Mitchell VS, McNarry AF, et al. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. Br J Anaesth. 2015.",
    },
    {
      id: "cafg-1",
      citation:
        "Law JA, Duggan LV, Asselin M, et al. Canadian Airway Focus Group updated consensus based recommendations for management of the difficult airway. Part 1. Difficult airway management encountered in an unconscious patient. Can J Anesth. 2021.",
    },
    {
      id: "atls",
      citation: "American College of Surgeons. Advanced Trauma Life Support. Student course manual. 10th edition. 2018.",
    },
    {
      id: "vortex",
      citation: "Chrimes N. The Vortex. A universal high acuity implementation tool for emergency airway management. Br J Anaesth. 2016.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
