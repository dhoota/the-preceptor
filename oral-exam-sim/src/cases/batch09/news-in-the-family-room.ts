// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const newsInTheFamilyRoom: OralCase = {
  id: "news-in-the-family-room",
  title: "A husband and son in the family room",
  blueprint: "comm",
  alsoCovers: ["cardio", "ethics"],
  priorityTopic: "arrhythmia",
  keyFeatures: [{ topic: "arrhythmia", n: 2 }, { topic: "arrhythmia", n: 5 }, { topic: "cqi", n: 1 }],
  summary: "After a failed resuscitation you must speak with a husband and his 12 year old son who have just arrived.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital in Ontario when the family of a patient arrives. " +
    "A 44 year old woman collapsed while running and could not be resuscitated. You stopped at 08:22. " +
    "Her husband and their 12 year old son have just arrived. Nobody has told them anything except that she is here.",
  card: {
    vitals: {
      temperature: "Not recorded",
      pulse: "No pulse. No return of circulation. Resuscitation stopped at 08:22.",
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
      id: "nurse",
      label: "The nurse's report",
      result:
        "'Her husband and their son just arrived. The son is 12. They are in the family room. " +
        "Nobody has told them anything except that she is here. The coroner has not been called yet.' A social worker and a spiritual care provider are on site.",
    },
    {
      id: "timeline",
      label: "Resuscitation timeline",
      result:
        "Collapse 07:10. Bystander CPR from about 07:14. Paramedics on scene 07:19. First shock 07:21. Four shocks before arrival. " +
        "In the ED: three more shocks, epinephrine every 4 minutes, amiodarone 300 mg then 150 mg, intubated. Persistent VF then asystole. She never had a return of circulation. Stopped at 08:22 after about 40 minutes of resuscitation in the ED.",
    },
    {
      id: "pocus",
      label: "Final bedside echo",
      result: "No cardiac activity. No pericardial effusion. Right ventricle not dilated.",
    },
    {
      id: "chart",
      label: "Her prior chart",
      result:
        "Seen in this ED five weeks ago after fainting while climbing stairs. ECG that day showed a QTc of 498 ms. She was discharged with advice to follow up with her family doctor. No follow up is recorded.",
    },
    {
      id: "family-history",
      label: "Family history from the husband",
      result:
        "Her younger brother died in his sleep at 30. No cause was ever found. Her mother has had fainting spells. Their son has never had an ECG.",
    },
    {
      id: "family",
      label: "Who is in the room",
      result:
        "Her husband, 46. Their son, 12. The husband's sister is driving in and will arrive in about an hour. They are Catholic.",
    },
    {
      id: "body",
      label: "State of the body",
      result: "Endotracheal tube, two IV lines and an intraosseous needle in place. Defibrillator pads on the chest. Some blood on the sheets from the IO site.",
    },
    {
      id: "coroner",
      label: "Coroner call",
      result:
        "The regional coroner accepts the case as a sudden and unexpected death. She asks that all tubes and lines stay in place and plans a post mortem examination.",
    },
    {
      id: "tgln",
      label: "Donation notification",
      result:
        "The Ontario Health Trillium Gift of Life Network coordinator says she may be a candidate for tissue donation. The coordinator will speak with the family once the coroner agrees.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "Outside the family room",
      text: "You can see her husband pacing through the window. Their son is sitting on the couch in his school uniform, looking at his phone.",
      next: "q-prepare",
    },
    {
      kind: "question",
      id: "q-prepare",
      phase: "Before you go in",
      prompt: "What do you do before you walk into that room?",
      seconds: 60,
      modelAnswer: [
        "Gather the facts: timeline, bystander CPR, what was done, time of death.",
        "Confirm her identity and who is in the room and how they are related.",
        "Bring the nurse and the social worker. Call spiritual care.",
        "Hand off your pager or phone so you are not interrupted.",
        "Take a moment to compose yourself.",
        "Plan to ask them who they are and what they already know.",
      ],
      rubric: ["dn-l1", "dn-h1"],
      next: "q-deliver",
    },
    {
      kind: "question",
      id: "q-deliver",
      phase: "Giving the news",
      prompt: "Show the examiner exactly how you tell them. What do you say?",
      seconds: 120,
      modelAnswer: [
        "Sit down at their level. Introduce yourself and your role. Confirm who they are.",
        "Ask what they already know.",
        "Give a warning shot: 'I am afraid I have very bad news.'",
        "Give a brief summary: she collapsed while running, her heart stopped, CPR and shocks were given.",
        "Say the word 'died'. 'Despite everything we did, she died.'",
        "Then stop and allow silence.",
      ],
      rubric: ["dn-c1", "dn-c2"],
      choices: [
        {
          id: "c-clear",
          label: "I sat down, introduced myself, asked what they knew, gave a warning shot and a short summary, then said 'she died' and stopped talking.",
          next: "q-reaction",
          quality: "strong",
          feedback:
            "This is exactly what the examiner wanted to hear. A structure such as GRIEV_ING or SPIKES, a warning shot and the word 'died'. " +
            "Clear language prevents the false hope that euphemisms create. Silence lets them absorb it.",
        },
        {
          id: "c-long",
          label: "I explained the rhythm, the shocks and the medications in detail before telling them she had died.",
          next: "s-long",
          quality: "partial",
          feedback:
            "Accurate but in the wrong order. Families cannot absorb detail while waiting to hear if their person is alive. " +
            "The examiner wanted a warning shot, a brief summary and the word 'died' within the first minute.",
        },
        {
          id: "c-euphemism",
          label: "I stood at the door and said we lost her and did everything we could.",
          next: "s-euphemism",
          quality: "unsafe",
          feedback:
            "Standing at the door signals you are about to leave. 'We lost her' is ambiguous, especially to a 12 year old. " +
            "The examiner wanted you seated, a warning shot and the words 'she died'.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-long",
      phase: "In the room",
      text: "Her husband interrupts you halfway through. 'Is she alive? Just tell me if she is alive.' You stop and say: 'No. I am so sorry. She died.'",
      next: "q-reaction",
    },
    {
      kind: "say",
      id: "s-euphemism",
      phase: "In the room",
      text: "The son asks: 'Lost her where? Is she in surgery?' His father looks at you. You sit down and say: 'I am so sorry. She died.'",
      next: "q-reaction",
    },
    {
      kind: "question",
      id: "q-reaction",
      phase: "The reaction",
      prompt:
        "Her husband shouts: 'Why did you stop? Why didn't you keep going?' Their son starts to sob. How do you respond?",
      seconds: 90,
      modelAnswer: [
        "Allow the emotion. Do not argue or rush to fill the silence.",
        "Name the emotion and show empathy. 'This is a terrible shock.'",
        "Answer honestly and simply. Her heart was stopped for over an hour and could not be restarted despite every treatment.",
        "Reassure that the passerby, paramedics and team did everything possible.",
        "Offer tissues, water and the social worker's support.",
      ],
      rubric: ["dn-c3", "dn-c4"],
      next: "q-son",
    },
    {
      kind: "question",
      id: "q-son",
      phase: "The son",
      prompt: "How do you include the son?",
      seconds: 60,
      modelAnswer: [
        "Speak to him directly as well as to his father.",
        "Use concrete words at his level: 'Her heart stopped and could not be started again. She died.'",
        "Avoid phrases like 'went to sleep' or 'passed on' that confuse children.",
        "Ask his father about letting him see her, and prepare him for what he will see.",
        "Offer the social worker or a child life specialist.",
        "Ask him what he understands and what he wants to know.",
      ],
      rubric: ["dn-c5", "dn-h4"],
      next: "s-interrupt",
    },
    {
      kind: "say",
      id: "s-interrupt",
      phase: "A knock at the door",
      text: "A nurse opens the door. 'Sorry. We have a CTAS 1 multi trauma arriving in four minutes and you are the only physician.'",
      next: "q-interrupt",
    },
    {
      kind: "question",
      id: "q-interrupt",
      phase: "The interruption",
      prompt: "What do you do?",
      seconds: 60,
      modelAnswer: [
        "Tell the family honestly that you must step out for an emergency.",
        "Leave the nurse or social worker with them. They must not be left alone.",
        "Say when you expect to be back, and come back.",
        "Ask for a second physician to be called in if one is available.",
      ],
      rubric: ["dn-l2"],
      choices: [
        {
          id: "c-explain-return",
          label: "I told her husband I had to leave for an emergency, left the social worker with them and promised to return in about 30 minutes. I did.",
          next: "s-viewing",
          quality: "strong",
          feedback:
            "Good. Honesty about the interruption and a named person staying with them prevents a sense of abandonment. " +
            "Keeping your promise to return matters a great deal to families.",
        },
        {
          id: "c-leave-silent",
          label: "I slipped out without explaining so as not to upset them.",
          next: "s-leave-silent",
          quality: "unsafe",
          feedback:
            "Leaving without a word feels like abandonment at the worst moment of their lives. " +
            "The examiner wanted a brief honest explanation, someone left with them and a time to return.",
        },
        {
          id: "c-stay",
          label: "I stayed with the family and let the nurses start the trauma on their own.",
          next: "s-stay",
          quality: "partial",
          feedback:
            "Your compassion is right but the incoming patient has no physician. The family can be supported by the social worker. " +
            "The examiner wanted you to step out honestly and return.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-leave-silent",
      phase: "Later",
      text:
        "When you return 40 minutes later, her husband says: 'You just left. I thought something else had gone wrong.' You apologize and sit down again.",
      next: "s-viewing",
    },
    {
      kind: "say",
      id: "s-stay",
      phase: "Minutes later",
      text:
        "The charge nurse comes back. The trauma patient is hypotensive and they need you now. You tell her husband you must go, leave the social worker with them and return when you can.",
      next: "s-viewing",
    },
    {
      kind: "say",
      id: "s-viewing",
      phase: "Back in the family room",
      text: "Her husband asks: 'Can we see her? Can you take that tube out of her mouth first? I don't want our son to see her like that.'",
      next: "q-viewing",
    },
    {
      kind: "question",
      id: "q-viewing",
      phase: "Viewing and the coroner",
      prompt: "What do you tell him and what must happen before they see her?",
      seconds: 75,
      modelAnswer: [
        "Yes, they can see her and touch and hold her hand.",
        "This is a sudden and unexpected death. It must be reported to the coroner.",
        "Tubes and lines stay in place until the coroner releases the body. Explain why gently.",
        "With the coroner's agreement, clean visible blood and cover the lines where possible. Prepare them for what they will see.",
        "Notify Ontario Health (Trillium Gift of Life Network), as designated hospitals must for every death. A trained coordinator speaks with the family about donation.",
      ],
      rubric: ["dn-p1", "dn-p2"],
      choices: [
        {
          id: "c-coroner",
          label: "I called the coroner, explained gently that the tube must stay for now, had her cleaned and covered, prepared them and let them see her. I notified the Trillium Gift of Life Network.",
          next: "s-question",
          quality: "strong",
          feedback:
            "This is what the examiner wanted. A sudden unexpected death is a coroner's case and devices stay in place. " +
            "Preparing the family and the body makes the viewing bearable. Designated Ontario hospitals must notify Ontario Health of every death.",
        },
        {
          id: "c-remove",
          label: "I removed the tube and lines so the family would not be upset.",
          next: "s-remove",
          quality: "partial",
          feedback:
            "The kindness is understandable but removing devices before the coroner releases the body can interfere with the investigation. " +
            "The examiner wanted the coroner called first and the family prepared for what they would see.",
        },
        {
          id: "c-no-viewing",
          label: "I told them they could not see her until the coroner had finished.",
          next: "s-no-viewing",
          quality: "partial",
          feedback:
            "Families can almost always see and touch the body in a coroner's case. Only removing devices waits. " +
            "Refusing a viewing adds needless pain. The examiner wanted a prepared viewing.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-remove",
      phase: "The coroner calls",
      text:
        "The coroner asks whether the tube placement was confirmed and notes that devices should have stayed in place. You document what was removed and when.",
      next: "s-question",
    },
    {
      kind: "say",
      id: "s-no-viewing",
      phase: "The nurse",
      text:
        "The nurse tells you the coroner has already agreed to a viewing with the devices in place. You go back and bring her husband and son to see her, after preparing them.",
      next: "s-question",
    },
    {
      kind: "say",
      id: "s-question",
      phase: "At her bedside",
      text:
        "Her husband holds her hand. Then he says: 'She fainted last month and came here. And her brother died in his sleep at 30. Is this something our son could have?' " +
        "You check the chart. Five weeks ago her ECG showed a QTc of 498 ms.",
      next: "q-genetic",
    },
    {
      kind: "question",
      id: "q-genetic",
      phase: "Family risk",
      prompt: "What do you say to him, and what do you do with this information?",
      seconds: 90,
      modelAnswer: [
        "Answer honestly. Sudden death at a young age with a family history can be caused by an inherited heart rhythm condition.",
        "The post mortem, including genetic testing, may help find the cause.",
        "The son and other first degree relatives should be screened with an ECG and referred to an inherited heart rhythm clinic.",
        "Tell the coroner about the family history and the prior QTc.",
        "Do not speculate about the earlier visit in front of the family. Review it through your hospital quality process.",
        "Her prior QTc of 498 ms is prolonged. Consider long QT or another inherited arrhythmia, a cardiomyopathy or a coronary anomaly.",
        "Ask about her fainting, sudden deaths in the family and whether relatives have had ECGs.",
      ],
      rubric: ["dn-d1", "dn-p3", "dn-h2", "dn-x1", "dn-x2"],
      choices: [
        {
          id: "c-screen",
          label: "I told him honestly that an inherited rhythm condition is possible, that their son needs an ECG and a referral to an inherited heart rhythm clinic, and I told the coroner about the family history.",
          next: "q-close",
          quality: "strong",
          feedback:
            "Excellent. Family screening after sudden cardiac death finds treatable conditions in a meaningful share of relatives. " +
            "The coroner needs the history to guide a molecular autopsy.",
        },
        {
          id: "c-reassure",
          label: "I reassured him that this was very rare and their son would be fine.",
          next: "s-reassure",
          quality: "unsafe",
          feedback:
            "False reassurance could cost a second life. A prolonged QTc, a sibling's sudden death and her collapse strongly suggest an inherited condition. " +
            "The examiner wanted screening for the son and a heads up to the coroner.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-reassure",
      phase: "The coroner",
      text:
        "The coroner calls back with questions. She asks about family history and whether any relatives have been referred for screening. You call her husband and arrange an ECG for their son and a referral to an inherited heart rhythm clinic.",
      next: "q-close",
    },
    {
      kind: "question",
      id: "q-close",
      phase: "Closing",
      prompt: "How do you close the encounter, and what do you do for yourself and your team?",
      seconds: 60,
      modelAnswer: [
        "Explain next steps: the coroner, the funeral home, her belongings.",
        "Give a name and number for follow up questions.",
        "Offer grief resources for her husband and son.",
        "Ask if they want to call anyone and wait with them until family arrives.",
        "Brief team debrief. Check on yourself before the next patient.",
        "Ask about religious or cultural needs and who else they want called.",
      ],
      rubric: ["dn-d2", "dn-l3", "dn-h3"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "Her husband's sister arrives. The social worker stays with them. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "dn-l1",
      competency: "leadership",
      criterion: "process",
      text: "Prepares by gathering facts, bringing support staff and handing off the pager.",
      points: 1,
      teaching: "The GRIEV_ING approach starts with gathering the family and resources before you speak.",
      source: "grieving",
    },
    {
      id: "dn-c1",
      competency: "communication",
      criterion: "process",
      text: "Sits down, introduces self, asks what they know and gives a warning shot.",
      points: 2,
      teaching: "Asking what they know first tells you where to start. A warning shot prepares them for what comes next.",
      source: "spikes",
    },
    {
      id: "dn-c2",
      competency: "communication",
      criterion: "management",
      text: "Uses the word 'died' early and then allows silence.",
      points: 3,
      critical: true,
      teaching: "Euphemisms like 'we lost her' create confusion and false hope. The word 'died' is kind because it is clear.",
      source: "grieving",
    },
    {
      id: "dn-c3",
      competency: "communication",
      criterion: "management",
      text: "Responds to anger and grief with empathy rather than defensiveness.",
      points: 2,
      teaching: "Anger is a normal grief response. Name the emotion and stay present.",
      source: "spikes",
    },
    {
      id: "dn-c4",
      competency: "communication",
      criterion: "process",
      text: "Explains simply and honestly why resuscitation was stopped.",
      points: 1,
      teaching: "Families often ask why you stopped. A short honest answer about time and response to treatment helps.",
      source: "grieving",
    },
    {
      id: "dn-c5",
      competency: "communication",
      criterion: "management",
      text: "Speaks to the child directly in concrete language and offers support for him.",
      points: 2,
      teaching: "Children understand concrete words. 'Went to sleep' can create fear of sleeping.",
      source: "grieving",
    },
    {
      id: "dn-l2",
      competency: "leadership",
      criterion: "process",
      text: "Handles an interruption honestly, leaves support with the family and returns as promised.",
      points: 2,
      teaching: "Being called away is common in emergency medicine. Say so, leave someone with them and come back.",
      source: "grieving",
    },
    {
      id: "dn-p1",
      competency: "professionalism",
      criterion: "management",
      text: "Reports the death to the coroner and keeps devices in place until release.",
      points: 3,
      critical: true,
      teaching: "The Ontario Coroners Act requires reporting of sudden and unexpected deaths. Leave tubes and lines in place.",
      source: "coroners",
    },
    {
      id: "dn-p2",
      competency: "professionalism",
      criterion: "process",
      text: "Offers a prepared viewing and notifies Ontario Health (Trillium Gift of Life Network).",
      points: 1,
      teaching: "Designated Ontario hospitals must notify Ontario Health as soon as possible after a death or when death is imminent. A trained coordinator discusses donation with the family.",
      source: "tgln",
    },
    {
      id: "dn-d1",
      competency: "disposition",
      criterion: "management",
      text: "Recommends ECG screening and inherited heart rhythm clinic referral for the son and first degree relatives.",
      points: 3,
      critical: true,
      teaching: "After unexplained sudden cardiac death in a young person, first degree relatives need cardiac screening. Inherited arrhythmias are treatable.",
      source: "ccs-genetic",
    },
    {
      id: "dn-p3",
      competency: "professionalism",
      criterion: "process",
      text: "Shares the family history with the coroner and routes the prior visit to the quality process without speculating.",
      points: 1,
      teaching: "The coroner uses history to guide testing. Concerns about earlier care go through quality review, and the family is owed disclosure if that review finds a gap.",
      source: "coroners",
    },
    {
      id: "dn-d2",
      competency: "disposition",
      criterion: "process",
      text: "Explains next steps, gives a contact for questions and offers grief resources.",
      points: 1,
      teaching: "Families remember practical guidance. Tell them who will call and what happens next.",
      source: "grieving",
    },
    {
      id: "dn-l3",
      competency: "leadership",
      criterion: "process",
      text: "Leads a brief team debrief and checks on own wellbeing.",
      points: 1,
      teaching: "A short pause after a death helps the team and the physician before the next patient.",
      source: "spikes",
    },
    {
      id: "dn-h1",
      competency: "communication",
      criterion: "history",
      text: "Confirms who is in the room, how they are related to her and what they already know before giving the news.",
      points: 2,
      teaching: "Speaking to the wrong family is a serious error. Asking what they know tells you where to begin.",
      source: "grieving",
    },
    {
      id: "dn-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks the husband about her past fainting, sudden deaths in the family and whether relatives have had cardiac testing.",
      points: 2,
      teaching: "Unexplained sudden death in a young relative and prior syncope point to an inherited arrhythmia. The family history guides the post mortem and screening.",
      source: "ccs-genetic",
    },
    {
      id: "dn-h3",
      competency: "communication",
      criterion: "history",
      text: "Asks about religious or cultural needs and who else they would like called.",
      points: 1,
      teaching: "Spiritual care and the arrival of other family change what the next hour needs. Ask rather than assume.",
      source: "grieving",
    },
    {
      id: "dn-h4",
      competency: "communication",
      criterion: "history",
      text: "Asks the son what he understands and what he wants to know.",
      points: 1,
      teaching: "Children fill gaps with fears. Checking his understanding lets you correct it in words he can use.",
      source: "grieving",
    },
    {
      id: "dn-x1",
      competency: "assessment",
      criterion: "physical",
      text: "Reviews her prior visit and recognizes the QTc of 498 ms as prolonged.",
      points: 2,
      teaching: "A QTc near 500 ms after exertional syncope is a red flag for long QT syndrome. It changes the post mortem and the family plan.",
      source: "ccs-genetic",
    },
    {
      id: "dn-x2",
      competency: "assessment",
      criterion: "physical",
      text: "Names the differential for sudden death in a young adult: an inherited arrhythmia such as long QT syndrome, a cardiomyopathy and a coronary anomaly.",
      points: 2,
      teaching: "Most sudden cardiac deaths under 45 have an inherited or structural cause. A named differential guides the molecular autopsy.",
      source: "ccs-genetic",
    },
  ],
  sources: [
    {
      id: "grieving",
      citation:
        "Hobgood C, et al. The educational intervention GRIEV_ING improves the death notification skills of residents. Academic Emergency Medicine. 2005.",
    },
    {
      id: "spikes",
      citation: "Baile WF, et al. SPIKES. A six step protocol for delivering bad news. The Oncologist. 2000.",
    },
    {
      id: "coroners",
      citation: "Ontario. Coroners Act. RSO 1990, c C.37, section 10.",
    },
    {
      id: "tgln",
      citation: "Ontario. Gift of Life Act. RSO 1990, c H.20. Section 8.1, routine notification by designated facilities.",
      url: "https://www.canlii.org/en/on/laws/stat/rso-1990-c-h20/latest/rso-1990-c-h20.html",
    },
    {
      id: "ccs-genetic",
      citation:
        "Gollob MH, et al. Recommendations for the use of genetic testing in the clinical evaluation of inherited cardiac arrhythmias associated with sudden cardiac death. Canadian Cardiovascular Society and Canadian Heart Rhythm Society joint position paper. Canadian Journal of Cardiology. 2011.",
    },
  ],
  reviewed: true,
  author: "Preceptor",
  version: 2,
};
