// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const hourSevenInTheHallway: OralCase = {
  id: "hour-seven-in-the-hallway",
  title: "Hour seven in the hallway",
  blueprint: "comm",
  alsoCovers: ["geri", "systems"],
  priorityTopic: "delirium-agitation",
  keyFeatures: [{ topic: "delirium-agitation", n: 1 }, { topic: "delirium-agitation", n: 3 }, { topic: "analgesia-sedation", n: 2 }, { topic: "cqi", n: 1 }],
  summary: "A daughter is shouting at the nursing station about her elderly mother, who has been on a hallway stretcher for seven hours.",
  durationMinutes: 13,
  stem:
    "You are the night physician at a 300 bed community hospital in Ontario. It is 23:00. There are 22 admitted patients boarding in the ED and 11 patients on hallway stretchers. " +
    "Security is on site. The manager and the administrator are on call by phone. Patient relations opens at 08:00. " +
    "Margaret Olsen is 86 years old. She fell at home and arrived at 16:05 with right hip pain. Her X ray shows a displaced femoral neck fracture. " +
    "She is admitted to orthopedics and booked for surgery tomorrow. There is no ward bed. " +
    "The nurse says: 'Her daughter is yelling at the desk and filming us on her phone. She called Leah useless. Mrs. Olsen has not had anything for pain since 16:30. We have been slammed.'",
  findings: [
    {
      id: "chart",
      label: "ED chart",
      result:
        "Acetaminophen 1 g given at 16:30. Hydromorphone 0.5 mg subcutaneously ordered at 17:10, not given. Pain score 9 out of 10 at 22:40. " +
        "Orthopedics saw her at 19:00. No regional block documented.",
    },
    {
      id: "mother",
      label: "Assessment of Mrs. Olsen",
      result:
        "Grimacing and calling out. Oriented to person and place, not to time. Inattentive when asked to count backward. " +
        "Her brief is soaked with urine. She has no glasses or hearing aids with her. Sacrum intact but red. Weight 52 kg.",
    },
    {
      id: "labs",
      label: "Blood work",
      result: "Hemoglobin 112 g/L. Creatinine 98 µmol/L with eGFR 45 mL/min/1.73 m2. Sodium 136 mmol/L. INR 1.0. Not on anticoagulants.",
    },
    {
      id: "wishes",
      label: "What Mrs. Olsen says",
      result: "When asked, she says: 'Karen does everything for me. You can tell her anything.' She says her hip hurts terribly.",
    },
    {
      id: "daughter",
      label: "The daughter's story",
      result:
        "Karen is 58. She is her mother's main caregiver and has been at the bedside since 16:00 without eating. " +
        "Last year her mother became very confused after a hospital stay and never fully recovered. She is terrified it will happen again.",
    },
    {
      id: "nurse",
      label: "The nurse's account",
      result:
        "Leah has five hallway patients and two admitted patients on insulin infusions. She has not had a break since 19:00. " +
        "She is shaken. She says Karen stood close, pointed at her face and made a remark about her accent.",
    },
    {
      id: "census",
      label: "Department status",
      result:
        "Twenty two admitted patients boarding. Three ambulances waiting to offload. The hospital is in its surge protocol but no overcapacity call has been made to the administrator tonight.",
    },
    {
      id: "video",
      label: "What she is filming",
      result: "She is filming the nursing station. The screen shows Leah's face and the patient in the next hallway stretcher.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "The nursing station",
      text:
        "Karen is holding her phone up. 'My mother has been lying in her own urine for seven hours with no pain medicine. This place is a disgrace. Everyone is going to see this.' Two security guards are watching from a distance.",
      next: "q-approach",
    },
    {
      kind: "question",
      id: "q-approach",
      phase: "First contact",
      prompt: "You walk over. What do you do and say?",
      seconds: 90,
      modelAnswer: [
        "Check the scene for safety. Stand at an angle, keep distance, keep an exit clear.",
        "Introduce yourself by name and role. Lower your voice and slow down.",
        "Invite her to talk away from the desk, near her mother.",
        "Listen without interrupting. Let her finish.",
        "Acknowledge and name the emotion. 'You are frightened for your mother and angry that she has been in pain.'",
        "Agree with what is true. Say you will see her mother now.",
      ],
      rubric: ["hw-c1", "hw-c2"],
      choices: [
        {
          id: "c-listen",
          label: "I introduced myself, suggested we talk at her mother's stretcher, listened without interrupting and said she was right that her mother should not have waited in pain.",
          next: "q-clinical",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Listening fully and agreeing with what is true takes the heat out of most anger. " +
            "Moving to the bedside also puts the focus back on the patient.",
        },
        {
          id: "c-explain",
          label: "I explained that the department is over capacity and the nurses are doing their best.",
          next: "s-explain",
          quality: "partial",
          feedback:
            "It is true but it sounds like an excuse before she has been heard. Explanations come after acknowledgment. " +
            "The examiner wanted listening, empathy and a promise to see her mother now.",
        },
        {
          id: "c-threaten",
          label: "I told her to calm down or security would remove her.",
          next: "s-threaten",
          quality: "unsafe",
          feedback:
            "Telling an upset person to calm down and threatening removal as a first step escalates the conflict. Her complaint is legitimate. " +
            "The examiner wanted de escalation first, with limits only if behaviour becomes unsafe.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-explain",
      phase: "At the desk",
      text: "Karen says: 'I do not care how busy you are. She is 86 and in agony.' She raises her voice. You stop, apologize for interrupting and ask her to show you her mother.",
      next: "q-clinical",
    },
    {
      kind: "say",
      id: "s-threaten",
      phase: "At the desk",
      text:
        "She shouts that you are threatening her and turns the camera on you. Patients in the hallway are watching. You take a breath, lower your voice and ask her to tell you what has happened to her mother.",
      next: "q-clinical",
    },
    {
      kind: "question",
      id: "q-clinical",
      phase: "The patient",
      prompt: "You see Mrs. Olsen. She is in pain, inattentive and soaked with urine. What do you do for her right now?",
      seconds: 90,
      modelAnswer: [
        "Ask her if you can speak freely with her daughter. She agrees.",
        "Treat pain now. Fascia iliaca block, for example 30 mL of 0.25 percent bupivacaine. That is 75 mg, under the 2 mg/kg maximum of 104 mg for her.",
        "Hydromorphone 0.25 to 0.5 mg IV titrated while the block is set up.",
        "Scheduled acetaminophen, for example 1 g every 8 hours, keeping to 3 g per day in a frail older adult. Avoid NSAIDs with eGFR 45.",
        "She has early delirium. Clean and change her, get glasses and hearing aids, keep her daughter at the bedside, avoid benzodiazepines and restraints.",
        "Pressure injury prevention with a pressure relieving mattress.",
      ],
      rubric: ["hw-m1", "hw-m2", "hw-a1"],
      choices: [
        {
          id: "c-block",
          label: "I gave a small dose of IV hydromorphone, did a fascia iliaca block, ordered scheduled acetaminophen and started delirium prevention with her daughter's help.",
          next: "q-apology",
          quality: "strong",
          feedback:
            "Excellent. A regional block reduces pain and opioid need and may lower delirium risk. " +
            "Involving her daughter in delirium care turns an adversary into a partner.",
        },
        {
          id: "c-big-opioid",
          label: "I gave hydromorphone 2 mg IV to get her comfortable quickly.",
          next: "s-big-opioid",
          quality: "partial",
          feedback:
            "Treating pain is right. A 2 mg IV dose in an 86 year old weighing 52 kg is too large and risks respiratory depression and worse delirium. " +
            "The examiner wanted small titrated doses and a regional block.",
        },
        {
          id: "c-haloperidol",
          label: "I gave haloperidol for her agitation.",
          next: "s-haloperidol",
          quality: "unsafe",
          feedback:
            "Her agitation is from untreated pain and a wet brief. Sedating her without treating the cause is harmful. " +
            "The examiner wanted analgesia, a block and non drug delirium measures.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-big-opioid",
      phase: "Forty minutes later",
      text:
        "Mrs. Olsen is hard to rouse with a respiratory rate of 8 and SpO2 of 87 percent. You give naloxone 0.04 mg IV and she wakes. Karen is frightened. You do a fascia iliaca block and switch to small titrated doses.",
      next: "q-apology",
    },
    {
      kind: "say",
      id: "s-haloperidol",
      phase: "Thirty minutes later",
      text:
        "She is drowsy but still grimaces when moved. Karen says: 'She is not agitated. She is in pain.' You give small IV doses of hydromorphone and perform a fascia iliaca block.",
      next: "q-apology",
    },
    {
      kind: "question",
      id: "q-apology",
      phase: "Apology",
      prompt: "Karen says: 'So you admit this was wrong. I am going to sue.' How do you respond?",
      seconds: 75,
      modelAnswer: [
        "Apologize sincerely. 'I am sorry your mother waited so long for pain relief. She should not have.'",
        "In Ontario, the Apology Act means an apology is not an admission of liability.",
        "Do not blame individual staff. Explain honestly that the department is overwhelmed and that is not acceptable for her mother.",
        "Tell her what you have done and what happens next.",
        "Offer patient relations for a formal concern and say you will file a safety report.",
      ],
      rubric: ["hw-c3", "hw-p1"],
      choices: [
        {
          id: "c-apologize",
          label: "I said I was sorry her mother had waited in pain, told her what we had done and would do next, and offered her the patient relations contact.",
          next: "s-escalate",
          quality: "strong",
          feedback:
            "That is what the examiner wanted. A genuine apology is protected by the Apology Act in Ontario and is often what families most need. " +
            "Offering the formal route shows you are not hiding anything.",
        },
        {
          id: "c-no-apology",
          label: "I avoided apologizing because it could be used against me in a lawsuit.",
          next: "s-no-apology",
          quality: "partial",
          feedback:
            "The Apology Act in Ontario protects an apology from being used as evidence of liability. " +
            "Refusing to apologize often fuels complaints. The examiner wanted a sincere apology.",
        },
        {
          id: "c-blame",
          label: "I told her the nurse should have given the hydromorphone and I would deal with her.",
          next: "s-blame",
          quality: "unsafe",
          feedback:
            "Blaming a colleague to the family is unprofessional and unfair. The delay reflects a system under strain. " +
            "The examiner wanted an apology without blame and a safety report.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-apology",
      phase: "At the bedside",
      text: "Karen says: 'You cannot even say sorry?' She turns her phone back on. You pause and tell her you are sorry her mother waited in pain.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-blame",
      phase: "Minutes later",
      text: "Karen repeats what you said to Leah at the desk. Leah is in tears. The charge nurse asks to speak with you. You go back and correct what you said to Karen.",
      next: "s-escalate",
    },
    {
      kind: "say",
      id: "s-escalate",
      phase: "Twenty minutes later",
      text:
        "Karen goes to the desk to ask for a blanket. Leah says she will bring one when she can. Karen moves close, points at her face and says: 'Can you even understand English?' " +
        "She is filming Leah and the patient on the next stretcher.",
      next: "q-limits",
    },
    {
      kind: "question",
      id: "q-limits",
      phase: "Setting limits",
      prompt: "What do you do?",
      seconds: 75,
      modelAnswer: [
        "Step in calmly. Stand beside Leah, not between them in a confrontational way.",
        "Name the behaviour and set a clear limit. Personal remarks and abuse of staff are not acceptable.",
        "Ask her to stop filming other patients and staff. Their privacy must be protected. Do not grab the phone.",
        "Offer a choice: continue with respectful conversation at her mother's bedside, or security will be involved.",
        "If she becomes threatening or violent, call security or a Code White.",
        "Get Leah away from the situation.",
      ],
      rubric: ["hw-l1", "hw-p2"],
      choices: [
        {
          id: "c-limit",
          label: "I stood with Leah, told Karen calmly that remarks about Leah's accent are not acceptable, asked her to stop filming other patients, and offered her the choice to continue at her mother's bedside.",
          next: "q-staff",
          quality: "strong",
          feedback:
            "Well done. Clear limits with a respectful choice preserve dignity and safety. " +
            "Protecting other patients' privacy and a colleague from discrimination is part of your job.",
        },
        {
          id: "c-ignore",
          label: "I let it go because she had calmed down with me and I did not want to restart the conflict.",
          next: "s-ignore",
          quality: "partial",
          feedback:
            "Avoiding conflict leaves Leah unsupported and other patients filmed without consent. " +
            "The examiner wanted a calm, clear limit set immediately.",
        },
        {
          id: "c-grab",
          label: "I took the phone from her hand and told security to escort her out.",
          next: "s-grab",
          quality: "unsafe",
          feedback:
            "Taking her phone is physical contact that can escalate to violence and is not your role. " +
            "Removing her also leaves a delirious patient without her main support. The examiner wanted verbal limits first and security only if needed.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ignore",
      phase: "Minutes later",
      text: "The patient on the next stretcher asks why he is being filmed. Leah leaves the area upset. You go back and speak with Karen about the filming and the remark.",
      next: "q-staff",
    },
    {
      kind: "say",
      id: "s-grab",
      phase: "At the desk",
      text:
        "Karen screams and pushes you away. Security steps in. It takes ten minutes to calm the situation. Mrs. Olsen becomes more confused without her daughter. Karen returns to the bedside with a security guard nearby.",
      next: "q-staff",
    },
    {
      kind: "question",
      id: "q-staff",
      phase: "Leah",
      prompt: "How do you support Leah?",
      seconds: 60,
      modelAnswer: [
        "Check on her privately. Acknowledge what happened was wrong.",
        "Reassign Mrs. Olsen to another nurse if Leah wishes.",
        "Arrange a break with the charge nurse.",
        "Support her in filing a workplace violence and harassment report.",
        "Offer the employee assistance program.",
      ],
      rubric: ["hw-l2"],
      next: "q-system",
    },
    {
      kind: "question",
      id: "q-system",
      phase: "The system",
      prompt: "What do you do about the conditions that led to this?",
      seconds: 60,
      modelAnswer: [
        "Call the administrator on call about boarding and trigger the overcapacity escalation.",
        "File a patient safety report on the delayed analgesia, focused on the system.",
        "Advocate for a bed for Mrs. Olsen or a quieter space in the ED.",
        "Suggest a nurse initiated analgesia or hip fracture block protocol for the department.",
      ],
      rubric: ["hw-l3", "hw-d1"],
      next: "q-close",
    },
    {
      kind: "question",
      id: "q-close",
      phase: "Closing the loop",
      prompt: "Before you go back to your other patients, what do you say to Karen and what do you document?",
      seconds: 60,
      modelAnswer: [
        "Summarize what has been done for her mother and the plan for surgery.",
        "Give a time you or the nurse will check back.",
        "Ask her to help with delirium prevention: reorientation, fluids, bringing glasses and hearing aids.",
        "Give her the patient relations contact.",
        "Document the clinical care, the conversation and the limit setting factually.",
      ],
      rubric: ["hw-c4", "hw-p3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Mrs. Olsen's pain score is 3 out of 10 after the block. Karen sits with her and thanks the night nurse. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "hw-c1",
      competency: "communication",
      criterion: "plan",
      text: "Introduces self, moves the conversation to a private space and listens without interrupting.",
      points: 2,
      critical: true,
      teaching: "Verbal de escalation starts with respect and listening. Most anger fades when a person feels heard.",
      source: "beta",
    },
    {
      id: "hw-c2",
      competency: "communication",
      criterion: "plan",
      text: "Names the emotion and agrees with what is legitimate in the complaint.",
      points: 2,
      teaching: "Agreeing with the truth is disarming. Arguing about details escalates.",
      source: "beta",
    },
    {
      id: "hw-a1",
      competency: "assessment",
      criterion: "diagnosis",
      text: "Recognizes early delirium, untreated pain and continence needs, and confirms consent to share information with the daughter.",
      points: 2,
      teaching: "Inattention is the core feature of delirium. Pain and a wet brief are common triggers in older adults.",
      source: "ccsmh",
    },
    {
      id: "hw-m1",
      competency: "management",
      criterion: "plan",
      text: "Treats pain promptly with a fascia iliaca block within the local anesthetic maximum, small titrated opioid doses and scheduled acetaminophen.",
      points: 3,
      critical: true,
      teaching: "Regional blocks for hip fracture reduce pain and opioid use. Check the maximum dose before drawing up.",
      source: "cochrane",
    },
    {
      id: "hw-m2",
      competency: "management",
      criterion: "plan",
      text: "Starts non drug delirium prevention and avoids NSAIDs, benzodiazepines and restraints.",
      points: 1,
      teaching: "Glasses, hearing aids, family presence and reorientation help. Sedatives treat the symptom and worsen the cause.",
      source: "ccsmh",
    },
    {
      id: "hw-c3",
      competency: "communication",
      criterion: "plan",
      text: "Apologizes sincerely for the delay without blaming staff.",
      points: 2,
      teaching: "A genuine apology is often what families want most. It should never shift blame to a colleague.",
      source: "apology",
    },
    {
      id: "hw-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Knows the Ontario Apology Act protects an apology from use as an admission of liability and offers the patient relations route.",
      points: 1,
      teaching: "An apology is not an admission of fault in Ontario law. Offering the formal route shows transparency.",
      source: "apology",
    },
    {
      id: "hw-l1",
      competency: "leadership",
      criterion: "plan",
      text: "Sets a calm, clear limit on abuse and filming of others and offers a respectful choice.",
      points: 3,
      critical: true,
      teaching: "Name the behaviour, state the limit and offer a choice. Escalate to security only if the behaviour continues or becomes unsafe.",
      source: "beta",
    },
    {
      id: "hw-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Protects other patients' privacy and does not physically take the phone.",
      points: 1,
      teaching: "Ask her to stop filming others. Physical intervention risks injury and escalation.",
      source: "beta",
    },
    {
      id: "hw-l2",
      competency: "leadership",
      criterion: "plan",
      text: "Supports the nurse, offers reassignment and a break, and supports a workplace violence report.",
      points: 2,
      teaching: "Ontario employers must have workplace violence and harassment programs. Staff should be supported to report.",
      source: "ohsa",
    },
    {
      id: "hw-l3",
      competency: "leadership",
      criterion: "plan",
      text: "Escalates the overcapacity situation to the administrator on call.",
      points: 1,
      teaching: "Boarding is a hospital problem, not an ED problem. Use the escalation pathway every time.",
      source: "caep",
    },
    {
      id: "hw-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Files a system focused safety report and advocates for a bed or quieter space for the patient.",
      points: 1,
      teaching: "Delayed analgesia in boarded patients is a system signal. Reports drive fixes such as nurse initiated protocols.",
      source: "caep",
    },
    {
      id: "hw-c4",
      competency: "communication",
      criterion: "plan",
      text: "Closes the loop with a plan, a check back time and a role for the daughter in delirium care.",
      points: 1,
      teaching: "A promised check back time lowers anxiety. Families are effective partners in delirium prevention.",
      source: "ccsmh",
    },
    {
      id: "hw-p3",
      competency: "professionalism",
      criterion: "plan",
      text: "Documents care, the conversation and the limit setting factually.",
      points: 1,
      teaching: "Objective notes help patient relations and protect everyone if a complaint follows.",
      source: "apology",
    },
  ],
  sources: [
    {
      id: "beta",
      citation:
        "Richmond JS, et al. Verbal de escalation of the agitated patient. Consensus statement of the American Association for Emergency Psychiatry Project BETA De escalation Workgroup. Western Journal of Emergency Medicine. 2012.",
    },
    {
      id: "apology",
      citation: "Ontario. Apology Act, 2009. SO 2009, c 3.",
    },
    {
      id: "cochrane",
      citation: "Guay J, Kopp S. Peripheral nerve blocks for hip fractures in adults. Cochrane Database of Systematic Reviews. 2020.",
    },
    {
      id: "ohsa",
      citation: "Ontario. Occupational Health and Safety Act. RSO 1990, c O.1. Workplace violence and harassment provisions.",
    },
    {
      id: "caep",
      citation: "Affleck A, Parks P, Drummond A, Rowe BH, Ovens HJ. Emergency department overcrowding and access block. CAEP position statement. CJEM. 2013.",
    },
    {
      id: "ccsmh",
      citation: "Canadian Coalition for Seniors' Mental Health. National guidelines for seniors' mental health. The assessment and treatment of delirium.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
