// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const suicidalPatientLeaving: OralCase = {
  id: "suicidal-patient-leaving",
  title: "A farmer who wants to go home",
  blueprint: "psych",
  alsoCovers: ["ethics", "comm"],
  summary: "A 49 year old man brought in late at night by his sister says he is fine and stands up to leave.",
  durationMinutes: 14,
  stem:
    "You are the only physician overnight at a 40 bed hospital in a farming town in southwestern Ontario. " +
    "The hospital is not a Schedule 1 psychiatric facility. The nearest one is 70 km away. There is one security guard overnight and an OPP detachment in town. " +
    "Darren Vos is 49 years old and runs a dairy farm. His sister brought him in at 23:10. " +
    "Triage vitals: heart rate 96, blood pressure 142/88, respiratory rate 16, SpO2 98 percent on room air, temperature 36.6, capillary glucose 6.4 mmol/L. CTAS 2. " +
    "The triage nurse says: 'He smells of alcohol and says he only came to get some sleep. His sister pulled me aside and said she found him in his truck in the machine shed with his rifle on the seat. Now he is putting his boots back on.'",
  findings: [
    {
      id: "sister",
      label: "Collateral from his sister",
      result:
        "At 21:30 he texted her: 'Take care of the dogs. Sorry for everything.' She drove over and found him in his truck with the engine off and his deer rifle on the passenger seat. " +
        "He agreed to come in to 'get some sleep'. His wife left four months ago. The farm is behind on payments and he sold part of the milk quota last month. " +
        "Their father died by suicide 12 years ago. He has a rifle and a shotgun in an unlocked cabinet at the house.",
    },
    {
      id: "interview",
      label: "Interview with the patient",
      result:
        "He says the text was 'stupid' and he just wanted to be alone. He says he has to milk at 5 am. When asked directly, he says he has thought about 'not being around' most days for a month and 'there is no way out of this mess'. " +
        "He will not say what the rifle was for. He says his two teenage kids would be 'better off with the insurance'.",
    },
    {
      id: "mse",
      label: "Mental status exam",
      result:
        "Dishevelled, in work clothes. Slow speech, mildly slurred. Mood 'fine'. Affect flat and tearful when his kids are mentioned. Hopeless thought content. " +
        "No hallucinations or delusions. Oriented. Insight poor. Judgment impaired.",
    },
    {
      id: "history",
      label: "Past history",
      result:
        "No prior psychiatric care. His sister says he rolled his ATV into a ditch last fall sober and she has wondered since. Drinks 6 to 8 beers most nights since the separation. No other drugs. No medications.",
    },
    {
      id: "ethanol",
      label: "Serum ethanol",
      result: "Ethanol 31 mmol/L at 23:40.",
    },
    {
      id: "tox",
      label: "Acetaminophen, salicylate and other blood work",
      result:
        "Acetaminophen and salicylate not detected. CBC, electrolytes, creatinine and liver enzymes normal. Glucose 6.4 mmol/L.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result: "No injuries. No ligature marks. No self harm scars. Gait mildly unsteady. Neurological exam otherwise normal.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 92. Normal intervals.",
    },
    {
      id: "phone",
      label: "Psychiatric facility",
      result:
        "The Schedule 1 facility 70 km away has an on call psychiatrist and will accept a patient on a Form 1. They ask that transport be arranged by police or ambulance.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the door",
      text:
        "You walk over. He has his jacket on and his keys in his hand. He says: 'I am fine, doc. It was a dumb text. I have cows to milk at five. I am going home.'",
      next: "q-leave",
    },
    {
      kind: "question",
      id: "q-leave",
      phase: "He wants to leave",
      prompt: "What do you do right now?",
      seconds: 60,
      modelAnswer: [
        "Do not let him leave before a proper assessment. The collateral suggests an interrupted attempt with a firearm.",
        "Speak calmly and directly. Explain you are worried about his safety and need to talk with him.",
        "Have security and the nurse nearby but not confrontational.",
        "Safe room, belongings and keys secured, one to one observation.",
        "If he tries to leave while at imminent risk, the common law duty to restrain allows you to stop him while you examine him and complete a Form 1 if criteria are met.",
      ],
      rubric: ["su-r1", "su-c1"],
      choices: [
        {
          id: "c-stay",
          label: "I told him calmly I was worried about his safety and that he could not leave until I had assessed him, and I arranged one to one observation in a safe room with his keys secured.",
          next: "q-risk",
          quality: "strong",
          feedback:
            "Right. The text, the rifle and the setting describe an interrupted attempt. That is very high risk. " +
            "Being clear and calm about why he must stay, with security in the background, is what the examiner wanted.",
        },
        {
          id: "c-promise",
          label: "I let him go home after he promised he would not hurt himself, with his sister driving him.",
          next: "s-promise",
          quality: "unsafe",
          feedback:
            "A promise or no harm contract does not protect a patient. He has just had an interrupted attempt with a firearm and the rifle is still at home. " +
            "The examiner wanted him kept for assessment and observed.",
        },
        {
          id: "c-sober",
          label: "I told him to come back tomorrow when he was sober so we could assess him properly.",
          next: "s-promise",
          quality: "unsafe",
          feedback:
            "Intoxication raises risk. It does not postpone it. Sending him home to his firearms tonight is the most dangerous option. " +
            "The examiner wanted him kept safe now and reassessed as he sobers.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-promise",
      phase: "In the ambulance bay",
      text:
        "His sister comes running back in. He has walked off toward the road and told her he will 'get a ride home and finish this'. " +
        "The security guard and the nurse bring him back inside. He is swearing. You place him in the quiet room with one to one observation.",
      next: "q-risk",
    },
    {
      kind: "question",
      id: "q-risk",
      phase: "Risk assessment",
      prompt: "Take me through your suicide risk assessment. What do you want to know, and what do you conclude?",
      seconds: 90,
      modelAnswer: [
        "Ask directly about ideation, intent, plan and means. Asking does not increase risk.",
        "Preparatory acts: the goodbye text, the rifle in the truck, the prior ATV crash.",
        "Risk factors: recent separation, financial loss, alcohol, male, middle age, rural, family history of suicide, hopelessness, firearm access.",
        "Protective factors: his children, his sister, his work. They are weak tonight.",
        "Collateral outweighs his current denial.",
        "Risk scores such as SAD PERSONS should not be used to decide disposition. Use structured clinical judgment.",
        "Conclusion: high acute risk.",
      ],
      rubric: ["su-a1", "su-a2", "su-a3"],
      next: "q-form",
    },
    {
      kind: "question",
      id: "q-form",
      phase: "Intoxication and the Form 1",
      prompt: "His ethanol is 31 mmol/L. The nurse asks if you should just wait until he is sober before you decide anything. What do you do?",
      seconds: 75,
      modelAnswer: [
        "Assess cognition, not a number. He is alert, oriented and able to give a coherent account.",
        "The danger comes from events before he drank to this level and from his firearm access.",
        "He meets Form 1 Box A: threats and a likely attempt, with likely serious bodily harm to himself, and an apparent mental disorder.",
        "Complete the Form 1 now after examining him yourself. Reassess him as he sobers, but do not delay the safety decision.",
        "Screen for co ingestion. Acetaminophen and salicylate are negative.",
      ],
      rubric: ["su-a4", "su-d1"],
      choices: [
        {
          id: "c-form-now",
          label: "I judged him high risk based on the interrupted attempt and the collateral, completed a Form 1 now, and planned to reassess him as he sobered.",
          next: "q-form-details",
          quality: "strong",
          feedback:
            "Good. His risk comes from what he did before he drank to this level. Intoxication does not stop you from acting. " +
            "Decisions about psychiatric assessment should rest on cognition and behaviour, not a specific alcohol level.",
        },
        {
          id: "c-wait-sober",
          label: "I waited until he was sober to decide, and let him stay voluntarily in the department.",
          next: "s-wait-sober",
          quality: "partial",
          feedback:
            "Reassessing when sober is sensible, but waiting leaves him free to walk out at any time. The collateral already establishes high risk. " +
            "The examiner wanted a Form 1 completed now with close observation.",
        },
        {
          id: "c-discharge",
          label: "I planned to discharge him with the crisis line number once sober because he now denies a plan.",
          next: "s-wait-sober",
          quality: "unsafe",
          feedback:
            "Denial after an interrupted attempt with a firearm is not reassuring. Collateral and actions outweigh what he says now. " +
            "The examiner wanted a Form 1 and transfer for psychiatric assessment.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-wait-sober",
      phase: "02:10",
      text:
        "The nurse finds him in the staff hallway looking for the exit. He says he will 'do it properly this time'. His sister is in tears in the waiting room. You examine him again and complete a Form 1.",
      next: "q-form-details",
    },
    {
      kind: "question",
      id: "q-form-details",
      phase: "The paperwork",
      prompt: "This hospital is not a Schedule 1 facility. What does the Form 1 allow, and what must you do to complete the process correctly?",
      seconds: 75,
      modelAnswer: [
        "You must have personally examined him within the 7 days before you sign it. Here you examine him and sign tonight.",
        "For 7 days from signing, it authorizes taking him to a Schedule 1 psychiatric facility. Once there he can be detained for up to 72 hours for psychiatric assessment.",
        "It does not authorize treatment.",
        "As the signing physician, give him a Form 42 and explain his right to talk to a lawyer without delay.",
        "Call the Schedule 1 facility to arrange acceptance. Transport by police or ambulance.",
        "Keep him on one to one observation until he leaves.",
      ],
      rubric: ["su-p1", "su-p2"],
      next: "s-angry",
    },
    {
      kind: "say",
      id: "s-angry",
      phase: "He is told he is being held",
      text:
        "When you tell him about the Form 1, he stands up, shouts that he will sue you, and punches the wall. He moves toward the door. The security guard is between him and the exit. The nurse asks if you want something to calm him.",
      next: "q-agitated",
    },
    {
      kind: "question",
      id: "q-agitated",
      phase: "Escalation",
      prompt: "How do you manage this?",
      seconds: 75,
      modelAnswer: [
        "Keep a safe distance and exit route. One person talks.",
        "Acknowledge his anger and fear. Explain why he is being kept, in plain words.",
        "Offer choices: a quiet room, a phone call to his sister, food, oral medication.",
        "If medication is needed and he accepts oral, olanzapine 5 to 10 mg orally is reasonable.",
        "If he becomes a danger, haloperidol 5 mg IM is preferred over a large benzodiazepine dose because he has been drinking.",
        "Monitor after any sedation.",
      ],
      rubric: ["su-c2", "su-m1"],
      choices: [
        {
          id: "c-deesc",
          label: "I spoke calmly, acknowledged his anger, explained why he was being kept, offered him a quiet room and oral medication, and kept haloperidol 5 mg IM as a backup.",
          next: "q-guns",
          quality: "strong",
          feedback:
            "Good. Most agitated patients settle with respect, explanation and choices. " +
            "With alcohol on board, an antipsychotic is a safer parenteral backup than a large benzodiazepine dose.",
        },
        {
          id: "c-midaz",
          label: "I gave midazolam 10 mg IM right away.",
          next: "s-midaz",
          quality: "partial",
          feedback:
            "He had not yet been given a chance to settle. A large benzodiazepine dose on top of alcohol can depress breathing. " +
            "The examiner wanted de-escalation first and a safer drug choice if needed.",
        },
        {
          id: "c-restrain",
          label: "I had security put him in four point restraints in the quiet room and closed the door.",
          next: "s-restrain",
          quality: "unsafe",
          feedback:
            "Restraint without trying less restrictive options, and then leaving him alone, is unsafe and not justified. " +
            "A restrained patient needs constant observation. The examiner wanted verbal de-escalation first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-midaz",
      phase: "Thirty minutes later",
      text:
        "He is asleep and snoring. His SpO2 drifts to 89 percent. The nurse repositions him, applies oxygen and puts him on the monitor with capnography. He needs close observation for the next two hours.",
      next: "q-guns",
    },
    {
      kind: "say",
      id: "s-restrain",
      phase: "Ten minutes later",
      text:
        "The nurse checks the room and finds him red faced, straining and vomiting while on his back. She turns him on his side. You remove the restraints once he calms with a nurse at the bedside and an explanation.",
      next: "q-guns",
    },
    {
      kind: "question",
      id: "q-guns",
      phase: "Firearms and confidentiality",
      prompt:
        "His sister asks what is going on and says, 'His guns are still at the house.' He tells you not to tell her anything. What do you do?",
      seconds: 75,
      modelAnswer: [
        "Means restriction is one of the most effective suicide prevention steps. Removing the firearms matters.",
        "PHIPA section 40 allows disclosure without consent when you believe on reasonable grounds it is needed to eliminate or reduce a significant risk of serious bodily harm.",
        "Share only what is needed with his sister and police to arrange removal of the firearms.",
        "Listening to his sister's information does not breach confidentiality.",
        "Tell him what you are sharing and why.",
        "Document the disclosure and the reason.",
      ],
      rubric: ["su-d2", "su-p3"],
      choices: [
        {
          id: "c-disclose",
          label: "I told him I would share only what was needed to keep him safe, asked the police to arrange removal of the firearms with his sister, and documented my reasons.",
          next: "q-psych",
          quality: "strong",
          feedback:
            "Correct. Firearm access is a major risk and removing it saves lives. " +
            "Ontario health privacy law allows limited disclosure to reduce a significant risk of serious bodily harm. Being open with him about it maintains trust.",
        },
        {
          id: "c-silent",
          label: "I told his sister I could not discuss anything about him because of confidentiality.",
          next: "s-silent",
          quality: "partial",
          feedback:
            "Confidentiality matters, but it has limits. You can always listen, and you can disclose what is needed to reduce a serious risk of harm. " +
            "The examiner wanted a plan to remove the firearms.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-silent",
      phase: "In the waiting room",
      text:
        "His sister says she will drive out to the farm alone and take the guns herself. She is upset and has been awake all night. You call her back and arrange for police to help her safely.",
      next: "q-psych",
    },
    {
      kind: "question",
      id: "q-psych",
      phase: "Consultant pushback",
      prompt:
        "The on call psychiatrist at the Schedule 1 facility says: 'He is intoxicated. Keep him overnight. If he denies a plan when sober, just discharge him.' How do you respond?",
      seconds: 60,
      modelAnswer: [
        "Share the specifics: interrupted attempt with a rifle, goodbye text, family history, hopelessness, attempt to leave saying he would finish it.",
        "Explain that he is on a Form 1 and your site cannot provide a psychiatric assessment or safe observation for 72 hours.",
        "He is medically stable. His alcohol level is falling and his cognition is intact.",
        "Ask for acceptance and transfer. Escalate through the hospital or CritiCall if needed.",
      ],
      rubric: ["su-c3", "su-d3"],
      next: "q-close",
    },
    {
      kind: "question",
      id: "q-close",
      phase: "Before he leaves",
      prompt: "The police are here to transport him. What do you say to him, and what goes with him?",
      seconds: 60,
      modelAnswer: [
        "Speak to him with respect. Explain where he is going and why, and that the goal is to help.",
        "Address his practical worries. Ask his sister to arrange help with the milking.",
        "Confirm he has his Form 42 and understands his rights.",
        "Send the Form 1, a copy of your notes, the collateral, the ethanol level and medications given.",
        "Phone handover to the receiving physician.",
      ],
      rubric: ["su-c4", "su-d3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He leaves with police for the psychiatric facility. His sister has arranged for a neighbour to do the morning milking. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "su-r1",
      competency: "disposition",
      text: "Prevents him from leaving before assessment and arranges one to one observation in a safe room.",
      points: 3,
      critical: true,
      teaching: "An interrupted attempt with a firearm is very high risk. Safety comes first. Secure belongings and keys.",
      source: "mha",
    },
    {
      id: "su-c1",
      competency: "communication",
      text: "Speaks calmly and directly, explaining his concern for the patient's safety.",
      points: 1,
      teaching: "A clear, respectful explanation often prevents a confrontation.",
      source: "wilson",
    },
    {
      id: "su-a1",
      competency: "assessment",
      text: "Asks directly about ideation, intent, plan, means and preparatory acts.",
      points: 2,
      teaching: "Asking about suicide does not increase risk. Preparatory acts such as goodbye messages carry great weight.",
      source: "perlman",
    },
    {
      id: "su-a2",
      competency: "assessment",
      text: "Uses collateral from his sister and weighs it above his current denial.",
      points: 2,
      teaching: "Patients at high risk often minimize. Collateral and actions are more reliable than statements.",
      source: "perlman",
    },
    {
      id: "su-a3",
      competency: "assessment",
      text: "Identifies risk factors including firearm access, family history, separation, financial loss, alcohol and hopelessness, and does not rely on a risk score.",
      points: 2,
      teaching: "Risk scores predict poorly for individuals. Structured clinical judgment guides the decision.",
      source: "perlman",
    },
    {
      id: "su-a4",
      competency: "assessment",
      text: "Assesses cognition rather than waiting for a specific alcohol level before acting.",
      points: 1,
      teaching: "Psychiatric assessment can proceed based on cognition. A falling alcohol level does not lower the risk from earlier actions.",
      source: "acep-psych",
    },
    {
      id: "su-d1",
      competency: "disposition",
      text: "Completes a Form 1 because he meets criteria for likely serious bodily harm to himself.",
      points: 3,
      critical: true,
      teaching: "Box A requires past or present threats, attempts or behaviour, an apparent mental disorder and a likely serious harm outcome.",
      source: "mha",
    },
    {
      id: "su-p1",
      competency: "professionalism",
      text: "States that a Form 1 requires a personal exam within 7 days before signing, allows detention in a Schedule 1 facility for up to 72 hours for assessment, and does not authorize treatment.",
      points: 2,
      teaching: "Know the limits of the form. Treatment still needs consent or an emergency.",
      source: "mha",
    },
    {
      id: "su-p2",
      competency: "professionalism",
      text: "Gives him a Form 42 and explains his right to a lawyer.",
      points: 1,
      teaching: "Form 42 tells the patient why he is held and that he can speak with a lawyer.",
      source: "mha",
    },
    {
      id: "su-c2",
      competency: "communication",
      text: "De-escalates with acknowledgment, explanation and choices before using medication or restraint.",
      points: 2,
      teaching: "Offering control through choices often settles an angry patient. Restraint is a last resort.",
      source: "wilson",
    },
    {
      id: "su-m1",
      competency: "management",
      text: "If medication is needed, chooses oral first and an antipsychotic such as haloperidol 5 mg IM over a large benzodiazepine dose given recent alcohol.",
      points: 1,
      teaching: "Benzodiazepines add to alcohol induced respiratory depression. Monitor after any parenteral sedation.",
      source: "wilson",
    },
    {
      id: "su-d2",
      competency: "disposition",
      text: "Arranges removal of firearms with police and family.",
      points: 3,
      critical: true,
      teaching: "Means restriction is one of the most effective interventions. Firearm attempts are usually fatal.",
      source: "stanley",
    },
    {
      id: "su-p3",
      competency: "professionalism",
      text: "Discloses only what is needed to reduce a significant risk of serious bodily harm, tells the patient, and documents it.",
      points: 2,
      teaching: "Ontario privacy law permits disclosure without consent to reduce a significant risk of serious bodily harm. Keep it limited and documented.",
      source: "phipa",
    },
    {
      id: "su-c3",
      competency: "communication",
      text: "Advocates with the psychiatrist using specific risk findings and requests acceptance.",
      points: 1,
      teaching: "Describe actions and collateral, not labels. A small site cannot safely hold a Form 1 patient for 72 hours.",
      source: "mha",
    },
    {
      id: "su-d3",
      competency: "disposition",
      text: "Arranges safe transfer by police or ambulance with the Form 1, notes and a phone handover.",
      points: 1,
      teaching: "A complete handover prevents the receiving team from missing the collateral that drove your decision.",
      source: "mha",
    },
    {
      id: "su-c4",
      competency: "communication",
      text: "Treats him with dignity and addresses practical barriers such as the farm.",
      points: 1,
      teaching: "Practical worries drive patients to leave. Solving them builds trust for the next contact with care.",
      source: "stanley",
    },
  ],
  sources: [
    {
      id: "mha",
      citation: "Government of Ontario. Mental Health Act. R.S.O. 1990, c. M.7.",
    },
    {
      id: "phipa",
      citation: "Government of Ontario. Personal Health Information Protection Act, 2004. S.O. 2004, c. 3, Sched. A.",
    },
    {
      id: "perlman",
      citation:
        "Perlman CM, et al. Suicide risk assessment inventory: a resource guide for Canadian health care organizations. Ontario Hospital Association and Canadian Patient Safety Institute. 2011.",
    },
    {
      id: "acep-psych",
      citation:
        "American College of Emergency Physicians. Clinical policy: critical issues in the diagnosis and management of the adult psychiatric patient in the emergency department. Ann Emerg Med. 2017.",
    },
    {
      id: "stanley",
      citation: "Stanley B, Brown GK. Safety planning intervention: a brief intervention to mitigate suicide risk. Cogn Behav Pract. 2012.",
    },
    {
      id: "wilson",
      citation:
        "Wilson MP, et al. The psychopharmacology of agitation: consensus statement of the American Association for Emergency Psychiatry Project BETA Psychopharmacology Workgroup. West J Emerg Med. 2012.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
