// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const driverAsksForSilence: OralCase = {
  id: "driver-asks-for-silence",
  title: "A driver who asks you to keep it quiet",
  blueprint: "ethics",
  alsoCovers: ["neuro", "comm"],
  summary: "A 49 year old man brought in by ambulance after an episode at home is back to normal and needs to be at work this afternoon.",
  durationMinutes: 13,
  stem:
    "You are working a day shift at a 220 bed community hospital in Ontario. There is CT around the clock. MRI and EEG are outpatient only. " +
    "Neurology runs a first seizure clinic with appointments within two to four weeks. " +
    "Dennis Pereira is 49 years old. His wife called 911 at 06:30 after he stiffened and shook in bed for about two minutes. He was confused for 20 minutes afterward. " +
    "Triage vitals at 07:20: heart rate 88, blood pressure 138/84, respiratory rate 16, SpO2 98 percent on room air, temperature 37.0, capillary glucose 6.4 mmol/L. CTAS 3. " +
    "The nurse says: 'He is back to himself. He drives a school bus and has a route at 14:30. He is asking when he can go.'",
  findings: [
    {
      id: "history",
      label: "History",
      result:
        "He remembers going to bed and then waking up with paramedics. Sore tongue and aching muscles. " +
        "No head injury, fever or headache before the event. Slept six hours. Two beers a week, none in the past week. No drugs. No new medications.",
    },
    {
      id: "pmh",
      label: "Past history and licence",
      result:
        "Hypertension on amlodipine. No prior known seizures. No family history of epilepsy. " +
        "He holds a Class B licence for the school bus and drives his own car daily.",
    },
    {
      id: "exam",
      label: "Physical exam",
      result: "Alert and oriented. Bite mark on the right lateral tongue. Normal neurological exam. No signs of trauma. Normal cardiac exam.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "Sodium 139 mmol/L. Calcium 2.36 mmol/L. Magnesium 0.86 mmol/L. Glucose 6.1 mmol/L. Creatinine 82 µmol/L. CK 380 U/L. Ethanol undetectable. Lactate 1.4 mmol/L.",
    },
    {
      id: "ecg",
      label: "ECG",
      result: "Sinus rhythm at 84. PR 168 ms. QRS 90 ms. QTc 426 ms. No pre excitation or Brugada pattern.",
    },
    {
      id: "ct",
      label: "CT head",
      result: "No hemorrhage, mass, infarct or other acute finding.",
    },
    {
      id: "wife",
      label: "Collateral from his wife",
      result:
        "Twice in the past three months he stared blankly, smacked his lips and did not answer her for about 30 seconds. He did not remember either episode. " +
        "The second time he was driving their car and had stopped at a red light. She thought he was tired.",
    },
    {
      id: "work",
      label: "Work and family",
      result:
        "He has driven a school bus for 11 years. Two children in university. His wife works part time. He says losing his licence would mean losing his job.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "At the bedside",
      text: "He is sitting up, dressed, and checking the time. He says: 'I feel fine now, doc. I think I was just overtired.'",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "Assessment",
      prompt: "How do you assess this episode in the ED?",
      seconds: 75,
      modelAnswer: [
        "Confirm it was a seizure and not syncope or another mimic. Witness account, tongue bite and post ictal confusion.",
        "Look for provoking causes: glucose, sodium, calcium, magnesium, alcohol or drug withdrawal, sleep deprivation, medications.",
        "ECG to exclude a cardiac cause.",
        "CT head in the ED is reasonable, with MRI and EEG as an outpatient.",
        "Ask about earlier unrecognized events. Collateral history is essential.",
      ],
      rubric: ["dr-a1"],
      next: "s-wife",
    },
    {
      kind: "say",
      id: "s-wife",
      phase: "His wife arrives",
      text:
        "His wife tells you privately that twice in the past three months he stared, smacked his lips and did not respond for about 30 seconds. " +
        "The second time he was behind the wheel of their car at a red light.",
      next: "q-interpret",
    },
    {
      kind: "question",
      id: "q-interpret",
      phase: "What it means",
      prompt: "How does this change your assessment?",
      seconds: 75,
      modelAnswer: [
        "The earlier episodes sound like focal seizures with impaired awareness.",
        "This is not a first seizure. He has had recurrent unprovoked seizures, which means epilepsy is likely.",
        "Recurrence risk is high. One event happened while driving.",
        "Discuss starting an antiseizure medication with neurology and expedite the first seizure clinic.",
        "Driving risk is now much greater.",
      ],
      rubric: ["dr-a2", "dr-m1"],
      choices: [
        {
          id: "c-epilepsy",
          label: "I recognized the staring spells as likely focal seizures, so this is recurrent seizures rather than a first event. I called neurology to expedite follow up and discuss treatment.",
          next: "q-advice",
          quality: "strong",
          feedback:
            "Correct. Brief unresponsive spells with lip smacking and amnesia are typical of focal impaired awareness seizures. " +
            "The examiner wanted you to see that he likely has epilepsy and a high recurrence risk.",
        },
        {
          id: "c-first",
          label: "I treated it as a first unprovoked seizure and referred him to the first seizure clinic.",
          next: "s-first",
          quality: "partial",
          feedback:
            "The referral is right but you missed the meaning of the collateral history. " +
            "Previous episodes change the diagnosis, the recurrence risk and the urgency. The examiner wanted epilepsy named.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-first",
      phase: "On the phone",
      text: "The neurologist asks whether there were any earlier events. You describe the staring spells. She says this sounds like epilepsy and offers to see him within the week.",
      next: "q-advice",
    },
    {
      kind: "question",
      id: "q-advice",
      phase: "Driving advice",
      prompt: "What do you tell him about driving?",
      seconds: 75,
      modelAnswer: [
        "He must not drive any vehicle, including his own car, until he is cleared.",
        "This includes the school bus route this afternoon.",
        "Commercial licence standards are stricter and seizure free intervals are longer than for private drivers.",
        "The Ministry of Transportation decides on his licence, not you. It uses standards such as the CMA Driver's Guide.",
        "Tell him directly that you are required to report.",
      ],
      rubric: ["dr-c1", "dr-p1"],
      choices: [
        {
          id: "c-no-driving",
          label: "I told him he must not drive any vehicle, including the bus this afternoon, and that I am required by law to report to the Ministry of Transportation.",
          next: "s-plead",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. Clear advice, applied to every vehicle, with honest notice that you must report. " +
            "Patients handle hard news better than discovering a report later.",
        },
        {
          id: "c-bus-only",
          label: "I told him not to drive the bus but that his own car was fine for short trips.",
          next: "s-bus-only",
          quality: "partial",
          feedback:
            "A seizure risk does not depend on the vehicle. One of his spells happened in the family car. " +
            "The examiner wanted no driving of any vehicle until cleared.",
        },
        {
          id: "c-no-limit",
          label: "I told him his CT was normal so there was no need to restrict driving.",
          next: "s-no-limit",
          quality: "unsafe",
          feedback:
            "A normal CT does not lower recurrence risk after recurrent seizures. He would be driving children this afternoon. " +
            "The examiner wanted no driving and a mandatory report.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bus-only",
      phase: "His wife",
      text: "His wife says: 'But he had one of those spells in our car.' You correct your advice. He must not drive at all until cleared.",
      next: "s-plead",
    },
    {
      kind: "say",
      id: "s-no-limit",
      phase: "The neurologist",
      text:
        "The neurologist calls back and asks what driving advice you gave. She is alarmed that he may drive the school bus today. You go back and advise him not to drive any vehicle.",
      next: "s-plead",
    },
    {
      kind: "say",
      id: "s-plead",
      phase: "His request",
      text:
        "He puts his head in his hands. 'Please do not report this. I will lose my job. I have two kids in university. I promise I will not drive for a few weeks.'",
      next: "q-report",
    },
    {
      kind: "question",
      id: "q-report",
      phase: "The report",
      prompt: "What do you do?",
      seconds: 90,
      modelAnswer: [
        "Acknowledge the impact on his work and family. Show empathy.",
        "Explain that Ontario law requires physicians to report a patient 16 or older who has a prescribed condition.",
        "The prescribed conditions include a disorder that has caused sudden incapacitation and has a moderate or high risk of recurrence. Recurrent seizures qualify.",
        "You report even without his consent. You cannot make a side deal.",
        "The Ministry decides on the licence. The report does not go to his employer.",
        "Offer social work and help with work related paperwork.",
      ],
      rubric: ["dr-p2", "dr-c2", "dr-p3"],
      choices: [
        {
          id: "c-report-empathy",
          label: "I acknowledged how hard this is, explained that Ontario law requires me to report, and said the Ministry makes the licence decision. I offered social work support.",
          next: "q-how",
          quality: "strong",
          feedback:
            "That is the answer. The duty is mandatory for this condition in Ontario. " +
            "Pairing honesty with empathy and practical support keeps the therapeutic relationship intact.",
        },
        {
          id: "c-delay",
          label: "I agreed to wait until after his neurology appointment before deciding whether to report.",
          next: "s-delay",
          quality: "partial",
          feedback:
            "The duty is triggered now, by your findings today. It is not deferred to a specialist. " +
            "Delay leaves a man with recent seizures licensed to drive a school bus. The examiner wanted the report made now.",
        },
        {
          id: "c-employer",
          label: "I called his employer to tell them he should not drive the bus.",
          next: "s-employer",
          quality: "unsafe",
          feedback:
            "The legal route is a report to the Ministry of Transportation. Calling his employer without consent is a privacy breach. " +
            "The examiner wanted the Ministry report and clear advice to him.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-delay",
      phase: "Later that day",
      text:
        "A colleague reviewing the chart asks why no report was made for a school bus driver with recurrent seizures. You call the CMPA for advice. They confirm the report is mandatory now. You submit it.",
      next: "q-how",
    },
    {
      kind: "say",
      id: "s-employer",
      phase: "The next day",
      text:
        "The hospital privacy office calls you about a complaint that his health information was shared with his employer. You learn that the correct route was the Ministry report. You submit it and meet with the privacy officer.",
      next: "q-how",
    },
    {
      kind: "question",
      id: "q-how",
      phase: "Making the report",
      prompt: "How do you make the report, and what should it contain?",
      seconds: 60,
      modelAnswer: [
        "Use the Ministry of Transportation medical condition report form. Submit it promptly.",
        "Include his identifying details, the condition and the relevant facts.",
        "You do not need to recommend a licence outcome.",
        "Document the report and your conversation with him in the chart.",
        "A physician who reports in good faith is protected from legal action for doing so. The report goes only to the Registrar.",
      ],
      rubric: ["dr-l1"],
      next: "s-angry",
    },
    {
      kind: "say",
      id: "s-angry",
      phase: "Before discharge",
      text:
        "He becomes angry. 'Fine. Report me. I will file a complaint with the College. And I am driving myself home because my wife has to get to work.' He picks up his car keys.",
      next: "q-drive-home",
    },
    {
      kind: "question",
      id: "q-drive-home",
      phase: "The keys",
      prompt: "How do you respond?",
      seconds: 75,
      modelAnswer: [
        "Stay calm. Do not argue about the complaint. He has the right to make one.",
        "Repeat clearly that he must not drive today.",
        "Offer alternatives: his wife, a taxi or a friend.",
        "If he says he will drive the bus this afternoon, disclosure to prevent serious harm may be justified. Call the CMPA.",
        "Document the advice given and his response.",
      ],
      rubric: ["dr-c3", "dr-d1"],
      choices: [
        {
          id: "c-calm",
          label: "I acknowledged his anger, repeated that he must not drive, arranged for his wife to drive him and documented everything.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Well done. You did not take the complaint threat personally. You focused on the immediate safety issue and gave him a way out. " +
            "Documenting the advice protects both of you.",
        },
        {
          id: "c-retract",
          label: "I told him that if he promised not to complain I would reconsider the report.",
          next: "s-retract",
          quality: "unsafe",
          feedback:
            "A mandatory duty cannot be traded. Bargaining over a complaint is unprofessional. " +
            "The examiner wanted a calm restatement of the advice and a safe ride home.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-retract",
      phase: "Minutes later",
      text: "He agrees and leaves for the parking lot. The nurse asks whether the report was sent. You realize what you have done, submit the report and ask his wife to drive him.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Discharge",
      prompt: "What are your discharge instructions and follow up?",
      seconds: 60,
      modelAnswer: [
        "Neurology follow up within the week. Outpatient MRI and EEG.",
        "Any antiseizure medication decision made with neurology.",
        "No driving any vehicle until cleared by the Ministry.",
        "Seizure safety: no swimming alone, no bathing alone, showers only, no heights or dangerous machinery.",
        "Return for a further seizure, a seizure over five minutes or failure to wake up.",
        "Written instructions for him and his wife.",
      ],
      rubric: ["dr-d2"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "His wife drives him home. The report is sent the same day. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "dr-a1",
      competency: "assessment",
      text: "Distinguishes seizure from mimics, looks for provoking causes and obtains an ECG and collateral history.",
      points: 2,
      teaching: "Collateral history is the key test in seizure. It often reveals earlier events the patient cannot recall.",
      source: "acep",
    },
    {
      id: "dr-a2",
      competency: "assessment",
      text: "Recognizes the staring spells as likely focal seizures and names probable epilepsy.",
      points: 2,
      teaching: "Brief unresponsiveness with automatisms and amnesia suggests focal impaired awareness seizures. Two unprovoked seizures more than 24 hours apart define epilepsy.",
      source: "acep",
    },
    {
      id: "dr-m1",
      competency: "management",
      text: "Arranges expedited neurology follow up and discusses antiseizure treatment with neurology.",
      points: 1,
      teaching: "Recurrent unprovoked seizures usually warrant treatment. Starting it is best coordinated with neurology.",
      source: "acep",
    },
    {
      id: "dr-c1",
      competency: "communication",
      text: "Advises him clearly not to drive any vehicle until cleared.",
      points: 2,
      teaching: "Advice must cover every vehicle. Seizure risk does not depend on the licence class.",
      source: "cma-driver",
    },
    {
      id: "dr-p1",
      competency: "professionalism",
      text: "Tells him directly that a report is required before making it.",
      points: 1,
      teaching: "Honest notice preserves trust. Patients who find out later feel betrayed.",
      source: "mto",
    },
    {
      id: "dr-p2",
      competency: "professionalism",
      text: "Reports to the Ministry of Transportation despite his objection and without delay.",
      points: 3,
      critical: true,
      teaching: "Highway Traffic Act section 203 and Ontario Regulation 340/94 require physicians to report patients 16 or older with a prescribed condition. This includes a disorder that has caused sudden incapacitation and has a moderate or high risk of recurrence.",
      source: "hta",
    },
    {
      id: "dr-c2",
      competency: "communication",
      text: "Responds with empathy to the impact on his job and family and offers practical support.",
      points: 2,
      teaching: "Losing a licence is a major loss. Acknowledge it and offer social work, while staying clear about the duty.",
      source: "cma-driver",
    },
    {
      id: "dr-l1",
      competency: "leadership",
      text: "Uses the Ministry medical condition report form, documents the report and knows good faith reporting is protected.",
      points: 1,
      teaching: "The report goes to the Ministry, which decides the licence. The Highway Traffic Act protects physicians who report in good faith.",
      source: "mto",
    },
    {
      id: "dr-c3",
      competency: "communication",
      text: "Stays calm when threatened with a complaint and does not bargain over the report.",
      points: 2,
      teaching: "A patient may complain. A mandatory duty cannot be traded away. Call the CMPA if you are worried.",
      source: "hta",
    },
    {
      id: "dr-d1",
      competency: "disposition",
      text: "Prevents him from driving home and knows that disclosure to prevent serious harm may be justified if he intends to drive the bus.",
      points: 3,
      critical: true,
      teaching: "Ontario privacy law allows disclosure without consent to reduce a significant risk of serious bodily harm. Seek advice before using it.",
      source: "phipa",
    },
    {
      id: "dr-d2",
      competency: "disposition",
      text: "Gives written seizure safety advice, return precautions and follow up for MRI, EEG and neurology.",
      points: 1,
      teaching: "Seizure safety covers water, heights and machinery as well as driving. Give it in writing to the patient and family.",
      source: "acep",
    },
    {
      id: "dr-p3",
      competency: "professionalism",
      text: "Does not contact his employer without consent.",
      points: 1,
      teaching: "The legal route is the Ministry report. Telling an employer without consent breaches privacy.",
      source: "phipa",
    },
  ],
  sources: [
    {
      id: "hta",
      citation: "Ontario. Highway Traffic Act. RSO 1990, c H.8, section 203, and Ontario Regulation 340/94 on drivers' licences.",
    },
    {
      id: "mto",
      citation: "Ontario Ministry of Transportation. Medical reporting guidance for physicians and the medical condition report form.",
      url: "https://www.ontario.ca/page/reporting-driver-medical-review",
    },
    {
      id: "cma-driver",
      citation: "Canadian Medical Association. CMA Driver's Guide. Determining medical fitness to operate motor vehicles.",
    },
    {
      id: "phipa",
      citation: "Ontario. Personal Health Information Protection Act, 2004. SO 2004, c 3, Sched A, section 40.",
    },
    {
      id: "acep",
      citation:
        "Huff JS, et al. Clinical policy. Critical issues in the evaluation and management of adult patients presenting to the emergency department with seizures. Annals of Emergency Medicine. 2014.",
    },
  ],
  reviewed: false,
  author: "Draft for review by Arjan Dhoot, MD",
  version: 1,
};
