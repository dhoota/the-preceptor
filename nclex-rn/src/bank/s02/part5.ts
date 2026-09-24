import type { Item } from "@/engine/types";
import { ACOG_HTN, ANA_CODE, CLIENT_RIGHTS, CMSA, GUIDO, LOWDERMILK, POTTER, RESIDENT_RIGHTS, TJC_UP, YODER, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s02-41", {
      topic: "Missed follow-up visits in heart failure",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 70-year-old client with heart failure comes to a clinic after missing 2 of 3 follow-up visits since discharge. The client says, \"I stopped driving and the bus does not come near here.\" The client states the purpose of each drug and shows a daily weight log with no gaps. Pill counts match the prescriptions. Weight is stable at 74 kg. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The client knows the drugs, takes them as prescribed and keeps a complete weight log. The visits are missed because the client has no way to get there. A social worker can arrange transport or other help. Telehealth visits keep follow-up going between trips. Kept appointments show whether the barrier is solved. Daily weights stay the key early sign of fluid gain in heart failure.",
      sources: [CMSA, POTTER],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Knowledge deficit about the drugs", why: "The client can state the purpose of each drug." },
      { text: "Transportation barrier to follow-up", why: "The client stopped driving and the bus does not reach the clinic." },
      { text: "Nonadherence to the drug plan", why: "Pill counts match the prescriptions." },
      { text: "Memory decline affecting self-care", why: "A complete weight log and accurate drug knowledge do not suggest memory loss." },
    ],
    actions: [
      { text: "Repeat the full drug teaching today", why: "The client already knows the drugs. Teaching does not fix the transport problem." },
      { text: "Ask the client to start driving again", why: "The client chose to stop driving. Pressing to resume may be unsafe." },
      { text: "Refer to a social worker for transport help", why: "A social worker can arrange rides or community transport." },
      { text: "Offer telehealth visits between clinic visits", why: "Telehealth keeps follow-up going without travel." },
      { text: "Space visits further apart to cut travel", why: "Less follow-up raises the risk of missing early decline in heart failure." },
    ],
    parameters: [
      { text: "Score on a memory screen", why: "Nothing in the stem suggests a memory problem." },
      { text: "Number of kept appointments", why: "Kept visits show whether the transport barrier is solved." },
      { text: "Distance from home to clinic", why: "Distance does not change and does not measure progress." },
      { text: "Serum cholesterol level", why: "Cholesterol does not track follow-up or heart failure status here." },
      { text: "Daily weight readings", why: "Weight gain is an early sign of fluid retention in heart failure." },
    ],
    correct: { condition: 1, actions: [2, 3], parameters: [1, 4] },
  },
  {
    ...meta("rn-s02-42", {
      topic: "Spotting incivility among staff",
      cjmm: "recognize",
      process: "communication",
      difficulty: 3,
      stem: "A nurse manager reviews concerns raised by staff on a surgical unit. Which behaviors are examples of workplace incivility or bullying? Select all that apply.",
      rationale:
        "Incivility and bullying include eye rolling, leaving someone out on purpose, spreading rumors and holding back information a coworker needs. These behaviors harm teamwork and client safety. Private feedback on a missed step, asking for help with a turn and assigning by skill and acuity are normal parts of work.",
      sources: [YODER, ANA_CODE],
    }),
    kind: "sata",
    options: [
      { text: "Rolling eyes when a new nurse asks a question", why: "Eye rolling is a nonverbal put-down and a common form of incivility." },
      { text: "Giving feedback on a missed step in private", why: "Private feedback is a respectful way to correct practice." },
      { text: "Leaving a coworker out of break plans on purpose", why: "Deliberate exclusion is a form of bullying." },
      { text: "Asking a peer to help turn a heavy client", why: "Asking for help is normal teamwork." },
      { text: "Spreading rumors about a coworker's private life", why: "Rumors damage reputation and are a form of bullying." },
      { text: "Assigning clients by skill and acuity", why: "Fair assignment by skill and acuity is sound management." },
      { text: "Holding back report details a new nurse needs", why: "Withholding needed information is sabotage and puts clients at risk." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s02-43", {
      topic: "Types of quality measures",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A unit is working to reduce catheter-associated urinary tract infections. The quality team lists four measures. Which one is an outcome measure?",
      rationale:
        "The Donabedian model sorts quality measures into structure, process and outcome. An outcome is a change in the client's health, so the infection rate per 1000 catheter days is the outcome. A daily review of catheter need is a process of care. The number of trained nurses and the bladder scanners on hand are structures.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "Infections per 1000 catheter days", why: "The infection rate reflects a change in clients' health, which is an outcome." },
      { text: "Percent of catheters with a daily need review", why: "A daily review is an action by staff. It is a process measure." },
      { text: "Number of nurses trained in catheter insertion", why: "Trained staff are a resource of the setting. It is a structure measure." },
      { text: "Number of bladder scanners on the unit", why: "Equipment on hand is a structure measure." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s02-44", {
      topic: "Resident rights in long-term care",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse reviews resident rights with a new AP in a long-term care facility. Which statements by the AP show understanding? Select all that apply.",
      rationale:
        "Federal rules give residents the right to choose their own provider, manage their own money and voice complaints without reprisal. Knocking and waiting protects privacy and dignity. Residents keep the right to private mail. A set bedtime for everyone ignores the right to make choices about daily life. Losing outings after a complaint is a reprisal.",
      sources: [RESIDENT_RIGHTS, { body: "Government of Ontario", work: "Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1, section 3, Residents' Bill of Rights", year: 2021, url: "https://www.ontario.ca/laws/statute/21f39" }],
      canada:
        "US federal resident rules do not apply in Canada, and long-term care law varies by province. Ontario's Fixing Long-Term Care Act, 2021 gives residents rights to manage their own money and raise concerns without reprisal.",
    }),
    kind: "sata",
    options: [
      { text: "\"A resident may choose their own primary care provider.\"", why: "Residents have the right to choose their attending provider." },
      { text: "\"I can read residents' mail to check for scams.\"", why: "Residents have the right to private, unopened mail." },
      { text: "\"Residents may manage their own money.\"", why: "The facility may not require residents to hand over their finances." },
      { text: "\"Residents who complain may lose outings.\"", why: "Punishing a complaint is a reprisal, which the rules forbid." },
      { text: "\"A resident may complain without being punished.\"", why: "Residents may voice grievances without reprisal." },
      { text: "\"I should knock and wait before entering.\"", why: "Knocking and waiting respects privacy and dignity." },
      { text: "\"Residents must be in bed by 2100.\"", why: "Residents have the right to make choices about their daily schedule." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s02-45", {
      topic: "Discrepancy found during a time-out",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "During the time-out before a left knee arthroscopy, the circulating nurse sees that the consent form lists the right knee. The surgeon says, \"I know which knee. Let's start.\" What should the nurse do?",
      rationale:
        "The time-out confirms the right client, procedure and site before the procedure starts. Any team member who finds a discrepancy can stop the procedure. The form and the plan disagree about the side, so nothing starts until the discrepancy is resolved. Changing the form is not the nurse's role. Reporting after the fact does not prevent wrong site surgery.",
      sources: [TJC_UP],
    }),
    kind: "mc",
    options: [
      { text: "Allow the start and report the form to risk management later", why: "A report after the case does not prevent wrong site surgery." },
      { text: "Mark the left knee on the form and initial it", why: "The nurse cannot change the consent. The client and surgeon must confirm the site." },
      { text: "Ask the scrub nurse whether the surgeon is right", why: "A second opinion from staff does not resolve the conflict with the form." },
      { text: "Stop the procedure until the discrepancy is resolved", why: "Any team member can halt a procedure when the site is not confirmed." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-46", {
      topic: "Responding to a family complaint",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A client's daughter tells the nurse angrily that her father's call light went unanswered for 30 minutes last night. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The nurse listens fully and apologizes that the father waited. The concern goes to the nurse manager so it can be looked into. Clients and families have a right to a grievance process, so the nurse explains how to use it. Blaming staffing sounds defensive. Sending the daughter to a lawyer escalates the conflict. A promise that it will not recur may not be kept.",
      sources: [CLIENT_RIGHTS, YODER, { body: "Government of Ontario", work: "Excellent Care for All Act, 2010, S.O. 2010, c. 14, section 6", year: 2010, url: "https://www.ontario.ca/laws/statute/10e14" }],
      canada:
        "The US federal grievance rule does not apply in Canada, and complaint processes vary by province. Ontario's Excellent Care for All Act, 2010 requires every health care organization to have a complaints process and to make information about it public.",
    }),
    kind: "sata",
    options: [
      { text: "Listen without interrupting", why: "Listening shows respect and lets the nurse learn the full concern." },
      { text: "Explain that the night shift was short of staff", why: "Offering excuses sounds defensive and does not address the concern." },
      { text: "Apologize that her father waited", why: "An apology for the delay acknowledges the client's experience." },
      { text: "Tell her to write to the hospital's lawyer", why: "This escalates the conflict and skips the grievance process." },
      { text: "Tell the nurse manager about the concern", why: "The manager can look into the delay and follow up." },
      { text: "Explain how to file a formal grievance", why: "Clients and families have a right to a grievance process." },
      { text: "Promise that it will not happen again", why: "The nurse cannot control every future response time." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s02-47", {
      topic: "Consent by a married minor",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 5,
      stem: "A 16-year-old client who is married needs an appendectomy. The client is alert and oriented. The client's 19-year-old spouse is at the bedside. The client's parents are traveling abroad. Who should give consent for the surgery?",
      rationale:
        "In most states marriage makes a minor emancipated. An emancipated minor consents to their own care. The client is alert enough to consent, so the emergency exception does not apply. A spouse consents only when the client cannot. The parents no longer hold consent authority for an emancipated child.",
      sources: [GUIDO, POTTER, { body: "Canadian Medical Protective Association", work: "Can a child provide consent?", year: 2025, url: "https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2014/can-a-child-provide-consent" }],
      canada:
        "Canadian consent law does not rest on emancipation by marriage. Outside Quebec, a minor who can understand the treatment and its risks consents to it, and capacity is judged case by case.",
    }),
    kind: "mc",
    options: [
      { text: "The 19-year-old spouse, as the adult next of kin", why: "A spouse decides only when the client cannot. This client can consent." },
      { text: "The client, as an emancipated minor", why: "Marriage emancipates a minor in most states, so the client consents." },
      { text: "The surgeon, under the emergency exception", why: "The exception applies only when no one can consent. The client can." },
      { text: "The parents, by phone once they are reached", why: "Parents do not consent for an emancipated minor." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s02-48", {
      topic: "Checking understanding of a living will",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client who is completing a living will. Which statements by the client show understanding? Select all that apply.",
      rationale:
        "A living will records the treatments a person wants or refuses if they cannot speak for themselves. It can name choices such as a feeding tube. It can be changed or revoked while the person has capacity. Copies go to the provider and family. It does not take effect while the person can decide. It does not cover money. It is not limited to one facility.",
      sources: [POTTER, GUIDO, { body: "Government of Nova Scotia", work: "Personal Directives Act, S.N.S. 2008, c. 8", year: 2008, url: "https://nslegislature.ca/sites/default/files/legc/statutes/personal%20directives.pdf" }],
      canada:
        "In Canada, advance directive laws and names vary by province. Nova Scotia's Personal Directives Act lets a capable adult write care instructions and name a delegate to make personal care decisions.",
    }),
    kind: "sata",
    options: [
      { text: "\"It tells my care team what I want if I cannot speak.\"", why: "A living will guides care when the person cannot state their wishes." },
      { text: "\"It takes effect as soon as I sign it.\"", why: "It applies only when the person cannot make or voice decisions." },
      { text: "\"I can change or cancel it while I can decide.\"", why: "A person with capacity can revise or revoke the document." },
      { text: "\"It lets my son handle my bank accounts.\"", why: "Money matters need a financial power of attorney, not a living will." },
      { text: "\"I should give copies to my provider and family.\"", why: "Copies make sure the wishes are known when needed." },
      { text: "\"It only counts if I am admitted here.\"", why: "The document is not limited to the facility where it was signed." },
      { text: "\"I can say whether I want a feeding tube.\"", why: "A living will can state choices about artificial nutrition." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s02-49", {
      topic: "Understanding of incident reports",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse educator reviews incident reporting with new nurses. Which two statements by a new nurse show understanding? Select two.",
      rationale:
        "An incident report is a quality tool kept separate from the client's record. The chart describes the event and the care given but does not mention the report. The report states facts without blame. Near misses are reported too. Reports are filed promptly while details are fresh. The client does not sign the report.",
      sources: [POTTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will not mention the report in the client's chart.\"", why: "The report is a quality document kept out of the medical record." },
      { text: "\"I will file a report only if the client was harmed.\"", why: "Near misses and events without harm are reported too." },
      { text: "\"I will describe what I saw, not who was at fault.\"", why: "Reports state objective facts without assigning blame." },
      { text: "\"I will put a copy of the report in the chart.\"", why: "The report stays out of the client's record." },
      { text: "\"I will wait a few days so I recall events calmly.\"", why: "Reports are filed promptly while details are fresh." },
      { text: "\"I will ask the client to sign the report.\"", why: "The client does not sign an internal incident report." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s02-50", {
      topic: "First postpartum client to see",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "The nurse on a postpartum unit gets the 0700 handoff for four clients who gave birth this week. Which client needs the nurse's attention first?",
      refs: ["Severe-range BP is a systolic pressure of 160 mmHg or more or a diastolic pressure of 110 mmHg or more."],
      rationale:
        "A BP of 164/110 mmHg with a headache after birth meets the severe range and suggests postpartum preeclampsia. Severe-range BP needs prompt treatment to prevent stroke and seizures. Pain of 7 with a dose due within the hour needs attention soon but is not a threat to life. Feeling overwhelmed on day 2 is common and needs support and screening later. A firm fundus at the umbilicus is expected.",
      sources: [ACOG_HTN, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Day 1 after cesarean birth, pain 7 of 10, next opioid due in 1 hour", why: "The pain needs attention soon but is not a threat to life." },
      { text: "Day 3 after vaginal birth, headache, BP 164/110 mmHg", why: "Severe-range BP with headache can lead to stroke or seizures and needs prompt treatment." },
      { text: "Day 1 after vaginal birth, fundus firm at the umbilicus", why: "A firm fundus at the umbilicus is expected on day 1." },
      { text: "Day 2 after vaginal birth, tearful, says \"I feel overwhelmed\"", why: "Tearfulness on day 2 is common. It needs support and later screening." },
    ],
    correct: 1,
  },
];
