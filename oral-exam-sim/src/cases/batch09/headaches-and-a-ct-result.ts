// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const headachesAndACtResult: OralCase = {
  id: "headaches-and-a-ct-result",
  title: "Headaches and a CT result",
  blueprint: "comm",
  alsoCovers: ["neuro", "ethics"],
  priorityTopic: "headache",
  keyFeatures: [{ topic: "headache", n: 2 }, { topic: "headache", n: 6 }],
  summary: "A 61 year old man with three weeks of headaches is waiting alone for his CT results when his daughter calls.",
  durationMinutes: 14,
  stem:
    "You are working an evening shift at a 240 bed community hospital in Ontario with CT, internal medicine and oncology by referral. " +
    "Neurosurgery is at the regional centre and is reached through CritiCall Ontario. " +
    "Tomasz Nowak is 61 years old. He has had headaches for three weeks, worse in the morning, and has been dropping things with his left hand. " +
    "Triage vitals: heart rate 82, blood pressure 146/88, respiratory rate 16, SpO2 96 percent on room air, temperature 36.6, capillary glucose 6.8 mmol/L. CTAS 3. " +
    "He came alone by taxi. His wife is at work. " +
    "The nurse says: 'His CT is back and the radiologist wants to speak with you. He keeps asking if it is a migraine.'",
  findings: [
    {
      id: "history",
      label: "History",
      result:
        "Headaches for three weeks, worst on waking, with nausea twice. Left hand clumsy for one week. No seizures. " +
        "Lost 6 kg in two months without trying. Smoked a pack a day for 40 years. Cough for two months. Works as a machinist and drives to work.",
    },
    {
      id: "exam",
      label: "Neurological exam",
      result:
        "GCS 15. Oriented. Mild left pronator drift. Grip 4 out of 5 on the left. Reflexes brisker on the left. No papilledema on fundoscopy. Speech normal.",
    },
    {
      id: "ct-head",
      label: "CT head with contrast",
      result:
        "Three ring enhancing lesions. The largest is 2.8 cm in the right frontoparietal lobe with surrounding vasogenic edema and 4 mm of midline shift. " +
        "Two smaller lesions of 8 mm in the left cerebellum and left occipital lobe. No hydrocephalus. No hemorrhage.",
    },
    {
      id: "ct-chest",
      label: "CT chest",
      result: "A 4.2 cm spiculated mass in the right upper lobe with enlarged right hilar and mediastinal lymph nodes. No pleural effusion.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Hemoglobin 131 g/L. WBC 8.4 x 10^9/L. Platelets 310 x 10^9/L. Sodium 134 mmol/L. Calcium 2.52 mmol/L. Creatinine 88 µmol/L. ALP 140 U/L. Glucose 6.9 mmol/L.",
    },
    {
      id: "social",
      label: "Social history",
      result:
        "Lives with his wife. Two adult children. His daughter is a pharmacist in another city. He emigrated from Poland 30 years ago and speaks fluent English. No advance directive.",
    },
    {
      id: "daughter-call",
      label: "The daughter's phone call",
      result:
        "She says her mother told her he was in the ED. She has heard a CT was done. She asks you not to tell him if it is cancer. " +
        "'In our family we do not tell. It will take away his hope. Tell me and I will decide how to tell him.'",
    },
    {
      id: "patient-wishes",
      label: "What he says he wants to know",
      result:
        "When asked, he says: 'I want to know everything. I am not a child. But I would like my wife on the phone when you tell me.'",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "The radiologist",
      text:
        "The radiologist tells you about three ring enhancing brain lesions with edema and 4 mm of shift. She recommends a CT chest, which you order. It shows a spiculated right upper lobe mass with enlarged nodes.",
      next: "q-medical",
    },
    {
      kind: "question",
      id: "q-medical",
      phase: "Medical plan",
      prompt: "What is your medical management of the brain lesions tonight?",
      seconds: 75,
      modelAnswer: [
        "Most likely brain metastases from a primary lung cancer. Tissue is needed to confirm.",
        "Dexamethasone for symptomatic edema. Start at 4 to 8 mg per day, or 16 mg per day or more for severe symptoms of raised pressure.",
        "No seizure prophylaxis because he has not had a seizure.",
        "Discuss with neurosurgery through CritiCall given the size, edema and shift.",
        "Complete staging and admit for expedited work up.",
      ],
      rubric: ["bn-m1", "bn-m2"],
      choices: [
        {
          id: "c-dex",
          label: "I started dexamethasone for his symptomatic edema, did not start an antiseizure drug, and discussed him with neurosurgery through CritiCall.",
          next: "q-prepare",
          quality: "strong",
          feedback:
            "Correct. Steroids help symptoms from vasogenic edema. Prophylactic antiseizure drugs are not recommended without a seizure. " +
            "A 2.8 cm lesion with shift needs a neurosurgical opinion.",
        },
        {
          id: "c-levetiracetam",
          label: "I started dexamethasone and also loaded levetiracetam to prevent seizures.",
          next: "s-levetiracetam",
          quality: "partial",
          feedback:
            "The steroid is right. Seizure prophylaxis in patients with brain metastases who have never seized is not recommended. It adds side effects without benefit. " +
            "The examiner also wanted neurosurgery involved.",
        },
        {
          id: "c-discharge",
          label: "I planned discharge with an outpatient MRI and oncology referral since he is neurologically stable.",
          next: "s-discharge",
          quality: "unsafe",
          feedback:
            "He has a motor deficit, edema and midline shift and no treatment has started. Sending him home alone risks deterioration. " +
            "The examiner wanted dexamethasone, a neurosurgical opinion and admission.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-levetiracetam",
      phase: "On the phone",
      text: "The neurosurgery resident asks why levetiracetam was started without a seizure. She suggests stopping it. She agrees to review the images and advise on surgery.",
      next: "q-prepare",
    },
    {
      kind: "say",
      id: "s-discharge",
      phase: "The internist",
      text:
        "The internist you call for an outpatient referral asks about the shift and the pronator drift. She recommends dexamethasone and admission tonight. You agree and call neurosurgery.",
      next: "q-prepare",
    },
    {
      kind: "question",
      id: "q-prepare",
      phase: "Preparing",
      prompt: "You now need to tell him. How do you prepare for the conversation?",
      seconds: 60,
      modelAnswer: [
        "Know the results and what is and is not certain.",
        "Find a private room. Sit down. Hand off your phone or pager.",
        "Bring his nurse.",
        "Ask him whether he wants anyone present in person or by phone.",
        "Plan what you will say first and what next steps you can offer.",
      ],
      rubric: ["bn-c1"],
      next: "s-daughter",
    },
    {
      kind: "say",
      id: "s-daughter",
      phase: "A phone call",
      text:
        "Before you go in, the clerk transfers a call. It is his daughter. 'Please, if it is cancer, do not tell my father. In our family we do not tell. It will take away his hope. Tell me and I will decide how to tell him.'",
      next: "q-daughter",
    },
    {
      kind: "question",
      id: "q-daughter",
      phase: "The daughter",
      prompt: "What do you say to her?",
      seconds: 75,
      modelAnswer: [
        "Acknowledge her love and her worry. Ask what she fears will happen.",
        "Explain that her father is capable and has a right to his own health information.",
        "You cannot share his results with her without his permission.",
        "You will ask him how much he wants to know and who he wants involved, and you will respect his answer.",
        "Offer to include her in the conversation if he agrees.",
      ],
      rubric: ["bn-p1", "bn-c2"],
      choices: [
        {
          id: "c-ask-him",
          label: "I thanked her for caring, explained I could not share results without his permission, and said I would ask him how much he wants to know and who he wants involved.",
          next: "q-deliver",
          quality: "strong",
          feedback:
            "That is the balanced answer. Some patients do prefer family to receive news, so asking him honours both his autonomy and her culture. " +
            "His answer, not hers, decides what happens next.",
        },
        {
          id: "c-withhold",
          label: "I agreed not to tell him and to let the family decide.",
          next: "s-withhold",
          quality: "unsafe",
          feedback:
            "A capable patient is entitled to information about his own health. Withholding it at a family's request, without asking him, overrides his autonomy. " +
            "The examiner wanted you to ask him what he wants.",
        },
        {
          id: "c-tell-daughter",
          label: "I told her the CT findings over the phone so she could help.",
          next: "s-tell-daughter",
          quality: "unsafe",
          feedback:
            "Sharing his results with a caller without his consent is a privacy breach. You also could not verify who she was. " +
            "The examiner wanted his permission first.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-withhold",
      phase: "At the bedside",
      text:
        "When you go in, he asks directly: 'Doctor, is it a tumour? I want the truth.' You realize you cannot keep your promise to his daughter and honour his request. You tell him you will explain everything.",
      next: "q-deliver",
    },
    {
      kind: "say",
      id: "s-tell-daughter",
      phase: "Ten minutes later",
      text:
        "Before you reach the room, his daughter has called him. He is upset. 'Why does my daughter know about my brain before I do?' You apologize and sit down with him.",
      next: "q-deliver",
    },
    {
      kind: "question",
      id: "q-deliver",
      phase: "Breaking the news",
      prompt: "He wants to know everything, with his wife on speakerphone. Show the examiner how you give the news.",
      seconds: 120,
      modelAnswer: [
        "Setting: private, seated, wife on the phone, nurse present.",
        "Perception: 'What have you been thinking might be causing the headaches?'",
        "Invitation: confirm how much detail he wants.",
        "Knowledge: warning shot, then plain words. 'The scans show three spots in the brain and a mass in the lung. I am worried this is a cancer that started in the lung and has spread.'",
        "Be honest about uncertainty. A biopsy is needed to be sure.",
        "Emotions: pause, respond with empathy. Strategy: summarize the plan for tonight.",
      ],
      rubric: ["bn-c3", "bn-c4"],
      choices: [
        {
          id: "c-spikes",
          label: "I asked what he thought was going on, gave a warning shot, said in plain words that I was worried about a lung cancer that had spread to the brain, then paused and responded to his reaction.",
          next: "s-question",
          quality: "strong",
          feedback:
            "This is what the examiner wanted to hear. SPIKES in order, plain language and a pause. " +
            "Saying 'I am worried this is cancer' is honest without claiming certainty before a biopsy.",
        },
        {
          id: "c-jargon",
          label: "I told him he has ring enhancing lesions consistent with metastatic non small cell lung cancer.",
          next: "s-jargon",
          quality: "partial",
          feedback:
            "The content is accurate but jargon blocks understanding and it overstates certainty before tissue. " +
            "The examiner wanted a warning shot, plain words and a check of what he understood.",
        },
        {
          id: "c-vague",
          label: "I told him there were some spots that could be many things and that his family doctor would follow up.",
          next: "s-vague",
          quality: "unsafe",
          feedback:
            "He asked for the truth. Being vague delays care and breaks trust when he learns the full picture. " +
            "The examiner wanted honest disclosure of your concern for cancer.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-jargon",
      phase: "At the bedside",
      text: "He looks blank. His wife asks on the phone: 'Does that mean cancer?' You slow down and explain in plain words.",
      next: "s-question",
    },
    {
      kind: "say",
      id: "s-vague",
      phase: "At the bedside",
      text:
        "His wife asks on the phone: 'Spots of what? Is it cancer?' He adds: 'Please do not hide anything.' You sit back down and explain your concern honestly.",
      next: "s-question",
    },
    {
      kind: "say",
      id: "s-question",
      phase: "His question",
      text: "After a long silence, he says quietly: 'How long do I have?'",
      next: "q-prognosis",
    },
    {
      kind: "question",
      id: "q-prognosis",
      phase: "Prognosis",
      prompt: "How do you answer him?",
      seconds: 75,
      modelAnswer: [
        "Acknowledge the question and the emotion behind it.",
        "Be honest that you do not yet know. It depends on the type of cancer and how it responds.",
        "Some lung cancers have targeted treatments that work well, even with brain spread.",
        "Explore what he is most worried about.",
        "Promise that the oncology team will give a clearer answer once the biopsy is back.",
      ],
      rubric: ["bn-c5"],
      choices: [
        {
          id: "c-honest-unknown",
          label: "I said it was an important question, that I did not yet know because it depends on the type of cancer, and asked what he was most worried about.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Well handled. You stayed honest without inventing a number, and you opened space for his real concerns. " +
            "That is what the examiner wanted.",
        },
        {
          id: "c-median",
          label: "I told him median survival with brain metastases from lung cancer is usually under a year.",
          next: "s-median",
          quality: "partial",
          feedback:
            "A number from memory without a tissue diagnosis can be badly wrong. Some subtypes live years with targeted therapy. " +
            "The examiner wanted honest uncertainty and exploration of his concerns.",
        },
        {
          id: "c-reassure",
          label: "I told him not to worry because cancer is very treatable now.",
          next: "s-reassure",
          quality: "unsafe",
          feedback:
            "False reassurance undermines trust and informed decisions. He may make plans on a promise you cannot keep. " +
            "The examiner wanted honesty about uncertainty.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-median",
      phase: "At the bedside",
      text: "His wife begins to cry on the phone. He says: 'So that is it then.' You explain that you spoke too soon and that the type of cancer matters a great deal.",
      next: "q-dispo",
    },
    {
      kind: "say",
      id: "s-reassure",
      phase: "At the bedside",
      text: "He asks: 'So I will be cured?' You realize you have promised too much. You explain honestly that you do not know yet.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "What is the plan tonight, and what practical advice do you give him?",
      seconds: 60,
      modelAnswer: [
        "Admit to internal medicine for dexamethasone, MRI brain, staging and biopsy planning.",
        "Neurosurgery and oncology involvement.",
        "Advise him not to drive for now. He has a left sided weakness and brain lesions. Consider whether a Ministry of Transportation report is required.",
        "Offer social work and spiritual care.",
        "Ask him who else he wants informed, including his daughter.",
      ],
      rubric: ["bn-d1", "bn-d2"],
      next: "q-close",
    },
    {
      kind: "question",
      id: "q-close",
      phase: "Closing",
      prompt: "How do you close the conversation, and what do you document and hand over?",
      seconds: 60,
      modelAnswer: [
        "Summarize in a few sentences and check his understanding with teach back.",
        "Tell him what will happen next and who he will see.",
        "Document what he was told, what he wants to know and who may receive information.",
        "Hand over to the admitting team so they do not repeat or contradict the conversation.",
        "Record the daughter's request and his answer.",
      ],
      rubric: ["bn-c6", "bn-p2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He asks you to call his daughter with him. He is admitted to internal medicine. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "bn-m1",
      competency: "management",
      criterion: "plan",
      text: "Starts dexamethasone for symptomatic vasogenic edema.",
      points: 2,
      critical: true,
      teaching: "Dexamethasone reduces vasogenic edema and symptoms. Start at 4 to 8 mg per day, or 16 mg per day or more for severe symptoms of raised pressure, then taper to the lowest effective dose.",
      source: "cns",
    },
    {
      id: "bn-m2",
      competency: "management",
      criterion: "plan",
      text: "Avoids seizure prophylaxis without a prior seizure and consults neurosurgery.",
      points: 1,
      teaching: "Guidelines advise against prophylactic antiseizure drugs in brain metastases without seizures. A large lesion with shift needs a surgical opinion.",
      source: "cns",
    },
    {
      id: "bn-c1",
      competency: "communication",
      criterion: "plan",
      text: "Prepares a private setting, hands off the pager and asks who he wants present.",
      points: 1,
      teaching: "Setting is the first step of SPIKES. Interruptions and hallway talks damage trust.",
      source: "spikes",
    },
    {
      id: "bn-p1",
      competency: "professionalism",
      criterion: "plan",
      text: "Does not disclose results to the daughter without his consent.",
      points: 3,
      critical: true,
      teaching: "A capable patient controls who receives his health information. A caller's relationship does not give access.",
      source: "phipa",
    },
    {
      id: "bn-c2",
      competency: "communication",
      criterion: "plan",
      text: "Responds to the family request with empathy and asks the patient how much he wants to know.",
      points: 2,
      teaching: "Some patients prefer family to receive news. Asking the patient respects both his autonomy and cultural preferences.",
      source: "cma",
    },
    {
      id: "bn-c3",
      competency: "communication",
      criterion: "plan",
      text: "Uses the SPIKES structure with perception, invitation and a warning shot.",
      points: 2,
      teaching: "Asking what he thinks first tells you where to start. A warning shot prepares him.",
      source: "spikes",
    },
    {
      id: "bn-c4",
      competency: "communication",
      criterion: "diagnosis",
      text: "Discloses the concern for cancer honestly in plain language and acknowledges uncertainty.",
      points: 3,
      critical: true,
      teaching: "Say what you are worried about in plain words. Being honest about uncertainty is not the same as being vague.",
      source: "cpso",
    },
    {
      id: "bn-c5",
      competency: "communication",
      criterion: "plan",
      text: "Answers the prognosis question honestly without inventing a number and explores his concerns.",
      points: 2,
      teaching: "Prognosis depends on histology and molecular markers. It is better to say 'I do not know yet' than to guess.",
      source: "spikes",
    },
    {
      id: "bn-d1",
      competency: "disposition",
      criterion: "plan",
      text: "Admits for expedited work up with neurosurgery and oncology involvement.",
      points: 2,
      teaching: "A motor deficit with edema and shift needs inpatient steroids, MRI and a coordinated diagnostic plan.",
      source: "asco",
    },
    {
      id: "bn-d2",
      competency: "disposition",
      criterion: "plan",
      text: "Advises him not to drive and offers social work and spiritual care.",
      points: 1,
      teaching: "Brain lesions with weakness make driving unsafe. Practical supports matter from the first conversation.",
      source: "cma",
    },
    {
      id: "bn-c6",
      competency: "communication",
      criterion: "plan",
      text: "Summarizes, checks understanding with teach back and hands over what he knows to the admitting team.",
      points: 1,
      teaching: "Handover of what the patient has been told prevents contradictory messages on the ward.",
      source: "spikes",
    },
    {
      id: "bn-p2",
      competency: "professionalism",
      criterion: "plan",
      text: "Documents the disclosure, his information preferences and who may receive information.",
      points: 1,
      teaching: "A clear note of consent to share information protects the patient and guides the next team.",
      source: "phipa",
    },
  ],
  sources: [
    {
      id: "spikes",
      citation: "Baile WF, et al. SPIKES. A six step protocol for delivering bad news. The Oncologist. 2000.",
    },
    {
      id: "asco",
      citation: "Vogelbaum MA, et al. Treatment for brain metastases. ASCO, SNO and ASTRO guideline. Journal of Clinical Oncology. 2022.",
    },
    {
      id: "cns",
      citation:
        "American Society of Clinical Oncology and Society for Neuro-Oncology. Anticonvulsant prophylaxis and steroid use in adults with metastatic brain tumors. Endorsement of the Congress of Neurological Surgeons guidelines. Journal of Clinical Oncology. 2019.",
      url: "https://ascopubs.org/doi/10.1200/JCO.18.02085",
    },
    {
      id: "cpso",
      citation: "College of Physicians and Surgeons of Ontario. Consent to Treatment. Policy.",
    },
    {
      id: "cma",
      citation: "Canadian Medical Association. CMA Code of Ethics and Professionalism. 2018.",
    },
    {
      id: "phipa",
      citation: "Ontario. Personal Health Information Protection Act, 2004. SO 2004, c 3, Sched A.",
    },
  ],
  reviewed: true,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
