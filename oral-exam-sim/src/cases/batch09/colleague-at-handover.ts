// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const colleagueAtHandover: OralCase = {
  id: "colleague-at-handover",
  title: "A colleague at handover",
  blueprint: "ethics",
  alsoCovers: ["systems", "comm"],
  priorityTopic: "cqi",
  keyFeatures: [{ topic: "cqi", n: 1 }, { topic: "cqi", n: 5 }, { topic: "multiple-patients", n: 3 }, { topic: "suicide-risk", n: 1 }],
  summary: "At evening handover, a nurse takes you aside with a concern about the physician you are relieving.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in Ontario when the charge nurse takes you aside at the start of your 19:00 shift. " +
    "She says the senior physician you are relieving smells of alcohol, nearly fell, and ordered 10 mg of IV hydromorphone for an 84 year old.",
  card: {
    vitals: {
      temperature: "Not recorded",
      pulse: "Not recorded",
      resp: "Not recorded",
      bp: "Not recorded",
      o2sat: "Not recorded",
      weight: "Not recorded",
    },
    medications: "Not recorded",
    allergies: "Not recorded",
  },
  findings: [
    {
      id: "nurse-report",
      label: "The charge nurse's report",
      result:
        "As you arrive, the charge nurse takes you into the medication room and closes the door. " +
        "She says: 'I do not know what to do. He ordered 10 mg of IV hydromorphone for an 84 year old. I caught it. " +
        "He smells of alcohol and he nearly fell at the nursing station. I am scared of what else he has ordered.'",
    },
    {
      id: "background",
      label: "The physician and the department",
      result:
        "He has worked here for 20 years and is respected by everyone. He is scheduled to stay until 23:00 as the second physician. " +
        "The hospital has 180 beds and the ED has 28 stretchers. Two physicians overlap from 19:00 to 23:00, then you are alone until 07:00. The department has a physician call in list for surge.",
    },
    {
      id: "observations",
      label: "Your own observations of the physician",
      result:
        "At handover he smells strongly of alcohol. His speech is slightly slurred. He loses his place in the list twice. He steadies himself on the counter when he stands.",
    },
    {
      id: "order",
      label: "The hydromorphone order",
      result:
        "Hydromorphone 10 mg IV once for an 84 year old woman with a wrist fracture. Not given. The nurse held it and asked him to clarify. He said 'fine, make it 1' and walked away.",
    },
    {
      id: "patients",
      label: "His current patient list",
      result:
        "Nine active patients. A 71 year old with melena awaiting a repeat hemoglobin. A 58 year old with chest pain awaiting a second troponin. Seven lower acuity patients. " +
        "Four patients discharged by him since 16:00.",
    },
    {
      id: "discharges",
      label: "Chart review of his recent discharges",
      result:
        "A 34 year old with an ankle sprain, appropriate. A 22 year old with a UTI, appropriate. A 66 year old with syncope discharged without an ECG on the chart. " +
        "A 45 year old with a laceration, repaired and appropriate.",
    },
    {
      id: "orders-review",
      label: "Review of his active orders",
      result:
        "Enoxaparin 80 mg subcutaneously ordered at 17:40 for the patient with melena. It has not been given. All other active orders are appropriate.",
    },
    {
      id: "colleagues",
      label: "What colleagues have noticed",
      result:
        "Another nurse says he separated from his wife this spring. He has called in sick for three shifts in two months. Nobody has spoken to him about it.",
    },
    {
      id: "leadership",
      label: "Who is on call for leadership",
      result:
        "The department chief is on vacation. The deputy chief is reachable by cell. The chief of staff is on call through switchboard tonight. The call in list has a physician available within 45 minutes.",
    },
    {
      id: "transport",
      label: "How he got here",
      result: "He drove in. His car is in the staff lot. He lives 25 minutes away.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "The medication room",
      text: "The charge nurse is upset. She asks you not to tell him she was the one who spoke up. Through the window you can see him at the computer.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First response",
      prompt: "You have confirmed what she described. What do you do in the next five minutes?",
      seconds: 90,
      modelAnswer: [
        "Patient safety first. He must stop clinical work now.",
        "Speak with him privately, away from patients and staff.",
        "Describe what you have observed, not a diagnosis. Express concern for him.",
        "Tell him you are taking over his patients immediately.",
        "Do not argue about how much he drank. Do not demand a test.",
        "Thank the charge nurse. Do not reveal her name unnecessarily.",
        "Ask the charge nurse exactly what she saw, then check it yourself: speech, gait, attention and the smell of alcohol.",
      ],
      rubric: ["ic-p1", "ic-c1", "ic-h1", "ic-x1"],
      choices: [
        {
          id: "c-private",
          label: "I asked him to step into an office, told him calmly what I had seen, said I was worried about him and that I was taking over his patients now.",
          next: "q-patients",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Removing him from care protects patients. Doing it privately protects his dignity. " +
            "Observable facts are hard to dispute. Opinions about drinking invite argument.",
        },
        {
          id: "c-public",
          label: "I told him at the nursing station in front of the team that he was drunk and had to leave.",
          next: "s-public",
          quality: "partial",
          feedback:
            "Removing him is right. Doing it publicly humiliates him, labels without proof and makes him more likely to resist. " +
            "The examiner wanted a private conversation based on specific observations.",
        },
        {
          id: "c-ignore",
          label: "I assumed he was just tired, took handover and let him finish his overlap shift.",
          next: "s-ignore",
          quality: "unsafe",
          feedback:
            "You have a near miss, your own observations and a nurse's report. Letting him keep working exposes patients to real harm. " +
            "The examiner wanted him off the floor now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-public",
      phase: "At the nursing station",
      text:
        "He becomes angry and says loudly that you have no right to accuse him. Two patients in the hallway watch. The charge nurse leads you both into the office. You start again privately.",
      next: "q-patients",
    },
    {
      kind: "say",
      id: "s-ignore",
      phase: "Twenty minutes later",
      text:
        "The charge nurse comes back. He has just ordered a dose of IV potassium that is ten times the usual rate. She held it. She says she will call the chief of staff herself if you do not act. You go to speak with him privately.",
      next: "q-patients",
    },
    {
      kind: "question",
      id: "q-patients",
      phase: "His patients",
      prompt: "He is out of the department for now. What do you do about his patients?",
      seconds: 90,
      modelAnswer: [
        "Take over all nine active patients.",
        "Review every active order he wrote this shift, not just the ones flagged.",
        "Cancel the enoxaparin for the patient with melena. Recheck the hydromorphone for the 84 year old. Even 1 mg IV is high for her.",
        "Review his discharges since his shift began and call back anyone with a gap, such as the syncope without an ECG.",
        "Activate the call in list for a second physician.",
        "Tell the charge nurse the plan so the team knows who is in charge.",
      ],
      rubric: ["ic-m1", "ic-l1"],
      choices: [
        {
          id: "c-full-review",
          label: "I reviewed every active order and each discharge since his shift began, cancelled the enoxaparin, arranged a callback for the syncope patient and called in the backup physician.",
          next: "s-denial",
          quality: "strong",
          feedback:
            "Excellent. Impairment affects every decision, not only the ones someone noticed. " +
            "A systematic review found a dangerous order and an incomplete discharge. Calling backup keeps the department safe.",
        },
        {
          id: "c-flagged-only",
          label: "I took over the patients he said were sick and let the nurses flag anything else.",
          next: "s-flagged-only",
          quality: "partial",
          feedback:
            "An impaired physician is not a reliable source for which patients are safe. " +
            "The examiner wanted every active order and recent discharge reviewed and backup called.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-flagged-only",
      phase: "One hour later",
      text:
        "The nurse caring for the patient with melena asks if the enoxaparin is still wanted. You had not seen it. You cancel it and go back to review every order and discharge.",
      next: "s-denial",
    },
    {
      kind: "say",
      id: "s-denial",
      phase: "In the office",
      text:
        "He says: 'I had one glass of wine at lunch. I have been doing this for twenty years. I am fine to finish my shift. Please do not turn this into something. You know what it would do to me.'",
      next: "q-denial",
    },
    {
      kind: "question",
      id: "q-denial",
      phase: "He pushes back",
      prompt: "How do you respond?",
      seconds: 90,
      modelAnswer: [
        "Stay calm and kind. Repeat the specific observations.",
        "Do not negotiate. He will not work tonight.",
        "Say you cannot keep this private. You have a duty to patients.",
        "Tell him you will call the deputy chief or chief of staff now.",
        "Frame it as concern for his health as well as patient safety.",
        "Offer to help him reach support.",
        "Ask whether he is unwell. Low glucose, a stroke or another illness can look like intoxication.",
      ],
      rubric: ["ic-p2", "ic-c2", "ic-x2"],
      choices: [
        {
          id: "c-firm-kind",
          label: "I said I was worried about him, that he was not safe to work tonight, and that I had to inform the chief of staff. I offered to help him get support.",
          next: "q-escalate",
          quality: "strong",
          feedback:
            "That is the balance the examiner wanted. You were compassionate and clear. " +
            "You did not promise secrecy. A colleague who is ill still needs the system to know so patients stay safe and he gets help.",
        },
        {
          id: "c-finish-low",
          label: "I agreed he could stay to discharge minor patients if I checked his orders.",
          next: "s-finish-low",
          quality: "unsafe",
          feedback:
            "Supervising an impaired physician is not a safety plan. He should not be caring for any patient tonight. " +
            "The examiner wanted a clear stop and escalation.",
        },
        {
          id: "c-secret",
          label: "I agreed to keep it between us if he went straight home.",
          next: "s-secret",
          quality: "unsafe",
          feedback:
            "Keeping it secret protects neither him nor future patients. The pattern of missed shifts suggests an ongoing problem. " +
            "The examiner wanted medical leadership informed tonight.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-finish-low",
      phase: "Thirty minutes later",
      text: "The charge nurse reports he tried to discharge the chest pain patient before the second troponin. She has called the chief of staff herself. The chief of staff asks you to call her back.",
      next: "q-escalate",
    },
    {
      kind: "say",
      id: "s-secret",
      phase: "Later in the shift",
      text:
        "The charge nurse asks what you have done. She says she is obliged to report the near miss and her concern through the hospital system. You realize a private deal leaves the patients and the nurse exposed. You call the chief of staff.",
      next: "q-escalate",
    },
    {
      kind: "question",
      id: "q-escalate",
      phase: "Escalation",
      prompt: "Who do you notify, and what do you say and document?",
      seconds: 75,
      modelAnswer: [
        "Deputy chief of emergency or the chief of staff tonight. They have authority over privileges.",
        "Report facts: time, observations, the orders, the near misses.",
        "The CPSO Reporting Requirements policy says you must take appropriate and timely action. Telling hospital leadership meets that tonight. You may also report to the College directly.",
        "The hospital, as the facility operator, has its own legal duty to report suspected incapacity to the College.",
        "Call the CMPA for advice about your own obligations if unsure.",
        "File a patient safety report on the medication near misses in factual language.",
        "Keep notes factual and free of speculation.",
      ],
      rubric: ["ic-l2", "ic-p3"],
      next: "s-keys",
    },
    {
      kind: "say",
      id: "s-keys",
      phase: "The staff exit",
      text: "Security calls you. The physician has his car keys in his hand and is walking toward the staff lot.",
      next: "q-driving",
    },
    {
      kind: "question",
      id: "q-driving",
      phase: "The car",
      prompt: "What do you do?",
      seconds: 60,
      modelAnswer: [
        "Go to him. Ask him not to drive.",
        "Offer a taxi, a family member or a colleague to take him home.",
        "If he insists on driving while impaired, call police. He is not your patient, and the risk to the public justifies the call.",
        "Do not physically take the keys yourself.",
        "Ask how he got to work and how he plans to get home.",
      ],
      rubric: ["ic-d1", "ic-h3"],
      choices: [
        {
          id: "c-taxi",
          label: "I asked him not to drive, offered a taxi or a call to a friend, and told him I would call police if he drove.",
          next: "q-support",
          quality: "strong",
          feedback:
            "Right. You gave him a safe option and a clear consequence. " +
            "Impaired driving endangers the public. Calling police is justified if he will not accept an alternative.",
        },
        {
          id: "c-let-drive",
          label: "I let him go. What he does outside the hospital is not my responsibility.",
          next: "s-let-drive",
          quality: "unsafe",
          feedback:
            "You know he is impaired and about to drive. Doing nothing risks his life and others. " +
            "The examiner wanted an alternative offered and police called if he refused.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-let-drive",
      phase: "Minutes later",
      text: "The security guard calls back. He is sitting in his car with the engine running. The guard asks whether to call police. You go out, persuade him to take a taxi, and he hands the keys to security.",
      next: "q-support",
    },
    {
      kind: "question",
      id: "q-support",
      phase: "Support",
      prompt: "The next day he calls you, ashamed. What support do you point him to?",
      seconds: 60,
      modelAnswer: [
        "Treat it as a health problem. Substance use disorder is an illness.",
        "The Ontario Medical Association Physician Health Program offers confidential support and monitoring.",
        "Suggest his family doctor and the hospital's employee assistance program.",
        "Ask directly about his safety and suicidal thoughts. Physicians in crisis carry high risk.",
        "Do not become his treating physician.",
      ],
      rubric: ["ic-c3", "ic-d2"],
      next: "q-team",
    },
    {
      kind: "question",
      id: "q-team",
      phase: "The team",
      prompt: "What do you say to the charge nurse and the team?",
      seconds: 60,
      modelAnswer: [
        "Thank the charge nurse. Speaking up about a senior physician took courage.",
        "Tell her it was the right thing to do and that it will be handled through proper channels.",
        "Protect her from retaliation. Tell leadership she raised it in good faith.",
        "Keep details confidential from the wider team.",
        "Offer a debrief and support.",
        "Ask the team what they have noticed before, such as missed shifts or recent stress.",
      ],
      rubric: ["ic-l3", "ic-h2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The backup physician arrives at 20:10. The chief of staff meets the physician the next morning. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "ic-p1",
      competency: "professionalism",
      criterion: "management",
      text: "Removes the colleague from clinical duties immediately.",
      points: 3,
      critical: true,
      teaching: "Patient safety comes before collegial loyalty. A physician who appears impaired must stop clinical work now.",
      source: "cma",
    },
    {
      id: "ic-c1",
      competency: "communication",
      criterion: "process",
      text: "Speaks privately using specific observations rather than accusations.",
      points: 2,
      teaching: "Describe what you saw and heard. Facts are harder to deny and preserve dignity.",
      source: "cpso",
    },
    {
      id: "ic-m1",
      competency: "management",
      criterion: "management",
      text: "Reviews all active orders and recent discharges and corrects the dangerous ones.",
      points: 3,
      critical: true,
      teaching: "Impairment affects every decision made during the shift. Review systematically, not only what was flagged.",
      source: "cma",
    },
    {
      id: "ic-l1",
      competency: "leadership",
      criterion: "process",
      text: "Activates the backup physician and tells the charge nurse the plan.",
      points: 2,
      teaching: "Losing a physician mid shift is a capacity problem. Fix staffing early and make the leadership line clear.",
      source: "cpso",
    },
    {
      id: "ic-p2",
      competency: "professionalism",
      criterion: "management",
      text: "Refuses to keep the concern secret or let him continue working.",
      points: 2,
      teaching: "A private deal protects no one. Future patients and the colleague both need the system to know.",
      source: "cma",
    },
    {
      id: "ic-c2",
      competency: "communication",
      criterion: "process",
      text: "Stays calm and compassionate while holding a firm line.",
      points: 1,
      teaching: "Kindness and firmness together are more effective than either alone.",
      source: "php",
    },
    {
      id: "ic-l2",
      competency: "leadership",
      criterion: "management",
      text: "Notifies the deputy chief or chief of staff the same night.",
      points: 3,
      critical: true,
      teaching: "CPSO policy requires appropriate and timely action when a colleague appears incapacitated. Leadership can act on privileges under the hospital by-laws. The hospital as facility operator has its own legal duty to report suspected incapacity to the College. Do not wait for the chief to return.",
      source: "cpso",
    },
    {
      id: "ic-p3",
      competency: "professionalism",
      criterion: "process",
      text: "Documents factually, files a patient safety report and seeks CMPA advice on personal obligations.",
      points: 1,
      teaching: "Keep notes objective and free of speculation. The CMPA can advise on your own reporting options.",
      source: "cmpa",
    },
    {
      id: "ic-d1",
      competency: "disposition",
      criterion: "management",
      text: "Prevents him from driving and calls police if he will not accept an alternative.",
      points: 2,
      teaching: "An impaired colleague about to drive is a public safety emergency. Offer a safe option first, then call police.",
      source: "cma",
    },
    {
      id: "ic-c3",
      competency: "communication",
      criterion: "history",
      text: "Asks directly about his safety and suicidal thoughts.",
      points: 1,
      teaching: "Physicians facing a professional crisis are at higher risk of suicide. Ask directly.",
      source: "php",
    },
    {
      id: "ic-d2",
      competency: "disposition",
      criterion: "management",
      text: "Directs him to the OMA Physician Health Program, his family doctor or the employee assistance program.",
      points: 1,
      teaching: "The Physician Health Program offers confidential assessment, treatment and monitoring. Many physicians return to practice.",
      source: "php",
    },
    {
      id: "ic-l3",
      competency: "leadership",
      criterion: "process",
      text: "Thanks the nurse, protects her from retaliation and offers a debrief.",
      points: 1,
      teaching: "Staff who speak up about senior physicians need visible support. That is how a safety culture is built.",
      source: "cpso",
    },
    {
      id: "ic-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the charge nurse exactly what she saw, when it happened, and which orders and patients were involved.",
      points: 2,
      teaching: "Specific, dated facts are the basis for every later step. They also let you check the concern yourself.",
      source: "cpso",
    },
    {
      id: "ic-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks the team whether there is a pattern, such as missed shifts, recent stressors or earlier concerns.",
      points: 1,
      teaching: "A pattern of absences and stress suggests an ongoing illness, not a single lapse. It shapes the support he needs and what leadership must hear.",
      source: "php",
    },
    {
      id: "ic-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks how he got to work and how he plans to get home.",
      points: 1,
      teaching: "An impaired colleague who drove in may drive out. Asking early lets you plan a safe ride before the keys come out.",
      source: "cma",
    },
    {
      id: "ic-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Confirms the concern by direct observation of speech, gait, attention and the smell of alcohol, and records the specific findings.",
      points: 2,
      teaching: "Your own observations turn a report into reasonable grounds. Record what you saw and heard, not a conclusion.",
      source: "cpso",
    },
    {
      id: "ic-x2",
      competency: "assessment",
      criterion: "physical",
      text: "Keeps a differential open, such as hypoglycemia, a stroke or another acute illness, and checks that he is not medically unwell.",
      points: 1,
      teaching: "Slurred speech and unsteadiness have medical causes as well as alcohol. A colleague can also be a patient who needs assessment.",
      source: "php",
    },
  ],
  sources: [
    {
      id: "cma",
      citation: "Canadian Medical Association. CMA Code of Ethics and Professionalism. 2018.",
      url: "https://policybase.cma.ca/media/PolicyPDF/PD19-03.pdf",
    },
    {
      id: "cpso",
      citation: "College of Physicians and Surgeons of Ontario. Reporting Requirements. Policy. Updated 2024.",
      url: "https://www.cpso.on.ca/physicians/policies-guidance/policies/reporting-requirements",
    },
    {
      id: "php",
      citation: "Canadian Medical Association. CMA Policy. Physician health. 2017.",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Do you need to report another health professional? 2010, revised 2023.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2010/do-you-need-to-report-another-health-professional",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 2,
};
