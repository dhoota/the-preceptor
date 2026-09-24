import type { Item } from "@/engine/types";
import { ANA_CODE, APPELBAUM, CANDOR, CMSA, DELEGATION, GUTTMACHER, HINKLE, LANGUAGE, NAYLOR, POTTER, YODER, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s01-21", {
      topic: "Dividing care among the RN, LPN and AP",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse plans care with an LPN and an AP for a stable client who is 1 day after a colectomy. The client goes home tomorrow. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "An AP can measure and record urine output for a stable client. An LPN can give scheduled oral medications. The RN keeps work that needs full assessment, planning, teaching or evaluation. The home teaching plan is RN work. Incision assessment, pain evaluation and the admission assessment are also RN work. Bathing, linen changes and recording intake can go to the AP.",
      sources: [DELEGATION, { body: "College of Nurses of Ontario", work: "Scope of Practice, Practice Standard", year: 2025, url: "https://www.cno.org/Assets/CNO/Documents/Standard-and-Learning/Practice-Standards/49041-scope-of-practice.pdf" }, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Ontario the practical nurse is a registered practical nurse (RPN), and assistive personnel are unregulated care providers. Delegation and assignment rules vary by province and come from each provincial regulator.",
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse should delegate {0} to the AP, assign {1} to the LPN and keep {2}.",
    blanks: [
      {
        options: [
          { text: "the incision assessment", why: "Assessing a surgical wound needs RN judgment." },
          { text: "measuring urine output", why: "Measuring and recording output is routine for a stable client." },
          { text: "the pain evaluation", why: "Evaluating the response to pain treatment is RN work." },
          { text: "the admission teaching", why: "Teaching is not delegated to an AP." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "writing the care plan", why: "Planning care is an RN responsibility." },
          { text: "the admission assessment", why: "The admission assessment belongs to the RN." },
          { text: "the home teaching plan", why: "Planning discharge teaching belongs to the RN." },
          { text: "scheduled oral medications", why: "Giving routine oral drugs to a stable client fits LPN scope." },
        ],
        correct: 3,
      },
      {
        options: [
          { text: "the home teaching plan", why: "Planning and teaching for discharge need RN knowledge." },
          { text: "the bed bath", why: "A bath for a stable client can go to the AP." },
          { text: "the linen change", why: "Changing linens is a routine AP task." },
          { text: "recording oral intake", why: "Recording intake is a routine AP task." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s01-22", {
      topic: "Returning calls in home health",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A home health nurse returns four phone messages at the start of the day. Which client should the nurse call first?",
      rationale:
        "New shortness of breath 1 week after hip surgery may be a pulmonary embolism. That is a threat to life, so this call comes first. A question about a new meter is routine. An inhaler due in 3 days leaves time. Rescheduling a visit can wait.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A client with diabetes asking how to set up a new glucose meter", why: "A question about equipment is routine and can wait." },
      { text: "A client with COPD whose inhaler refill is due in 3 days", why: "A refill due in 3 days leaves time to arrange." },
      { text: "A client with a leg ulcer asking to change a visit time", why: "Rescheduling does not affect safety today." },
      { text: "A client 1 week after hip surgery with new shortness of breath", why: "New breathlessness after hip surgery may signal a pulmonary embolism." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s01-23", {
      topic: "Responding to a medication error",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse realizes a client was given morphine 4 mg IV 20 minutes ago instead of the prescribed 2 mg. The client's respirations are 14/minute and the client wakes easily to voice. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The client comes first, so the nurse assesses and keeps monitoring breathing and sedation. The provider is told right away. An event report lets the facility study the cause. The client is told about the error as facility policy directs. Respirations of 14/minute with easy waking do not call for naloxone now. The chart does not mention the event report. Harm is not a condition for reporting.",
      sources: [CANDOR, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Reporting and Disclosure of Adverse Events", year: 2025, url: "https://cnps.ca/article/reporting-disclosure-of-adverse-events/" }, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Legal Status of an Apology", year: 2025, url: "https://cnps.ca/article/legal-status-of-an-apology/" }],
      canada:
        "In Canada, the Canadian Disclosure Guidelines from Healthcare Excellence Canada guide disclosure, and some provinces require it by law. Every province and territory except Yukon has apology legislation, so an apology is not an admission of fault.",
    }),
    kind: "sata",
    options: [
      { text: "Wait to report the error until harm appears", why: "Errors are reported promptly whether or not harm has occurred." },
      { text: "Assess and monitor breathing and sedation", why: "Opioid effects peak after the dose, so the client needs close watching." },
      { text: "Give naloxone right away", why: "Respirations of 14/minute with easy waking do not need reversal now." },
      { text: "Notify the primary health care provider", why: "The provider may change the monitoring or treatment plan." },
      { text: "Chart the event report number in the note", why: "The event report is kept out of the health record." },
      { text: "Complete an event report", why: "Reporting lets the facility find and fix the cause." },
      { text: "Take part in telling the client about the error", why: "Open disclosure to the client is expected after an error that reaches them." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s01-24", {
      topic: "Referral for repeated heart failure readmissions",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 79-year-old client with heart failure has been readmitted 3 times in 60 days. Each time the client gained weight at home and did not call anyone. The client lives alone. Which referral best addresses this pattern?",
      rationale:
        "The pattern is weight gain at home that nobody catches. Transitional care with nurse home visits after discharge tracks weight and symptoms and acts early. This model has cut readmissions in older adults with heart failure. Rehabilitation builds exercise capacity but does not track daily weight. A visit in 3 months is too late. Long-term care is more restrictive than the problem needs.",
      sources: [NAYLOR, CMSA],
    }),
    kind: "mc",
    options: [
      { text: "Outpatient cardiac rehabilitation sessions three times a week", why: "Rehabilitation improves exercise capacity but does not catch weight gain at home." },
      { text: "Transitional care with nurse home visits after discharge", why: "Home visits catch weight gain early and link the client to the provider." },
      { text: "A cardiology clinic appointment in 3 months", why: "A visit in 3 months cannot catch weight gain between admissions." },
      { text: "Placement in a long-term care facility at discharge", why: "Placement is more restrictive than the problem requires." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-25", {
      topic: "Assigning a float nurse",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse who usually works on a medical-surgical unit floats to a cardiac step-down unit for the shift. Which two clients should the charge nurse assign to the float nurse? Select two.",
      rationale:
        "A float nurse gets clients whose care matches the nurse's usual skills. IV antibiotics for pneumonia and diabetes teaching are routine on a medical-surgical unit. A titrated diltiazem infusion, the hours after cardioversion, a new temporary pacemaker and chest pain with a pending troponin need cardiac skills. Those clients go to nurses on the home unit staff.",
      sources: [YODER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Client with pneumonia receiving IV antibiotics", why: "IV antibiotics for pneumonia are routine medical-surgical care." },
      { text: "Client on a diltiazem infusion titrated to heart rate", why: "Titrating a cardiac drip needs step-down skills." },
      { text: "Client 2 hours after electrical cardioversion", why: "Early after cardioversion the rhythm may change. Cardiac skills are needed." },
      { text: "Client with diabetes waiting for discharge teaching", why: "Diabetes teaching is familiar work on a medical-surgical unit." },
      { text: "Client with a new temporary pacemaker", why: "Pacemaker care needs specialized cardiac knowledge." },
      { text: "Client with chest pain and a pending troponin", why: "Active chest pain may be a heart attack. Cardiac skills are needed." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s01-26", {
      topic: "Minor's consent for infection testing",
      cjmm: "action",
      process: "caring",
      difficulty: 4,
      stem: "A 16-year-old comes alone to a community clinic and asks to be tested for chlamydia. The teen asks that the parents not be told. What should the nurse do?",
      rationale:
        "Every US state and the District of Columbia let minors consent to testing and treatment for sexually transmitted infections. A 16-year-old meets the age limits that some states set. Testing can go ahead on the teen's own consent. Asking for a parent or a court would delay care the teen has a right to. Some states allow parents to be told in certain cases, so the nurse explains the clinic's rules.",
      sources: [GUTTMACHER, { body: "Canadian Medical Protective Association", work: "Can a child provide consent?", year: 2025, url: "https://www.cmpa-acpm.ca/en/advice-publications/browse-articles/2014/can-a-child-provide-consent" }],
      canada:
        "In Canada outside Quebec, most provinces set no fixed age of consent to treatment. A mature minor who understands the test and its risks can consent, and capacity is judged case by case.",
    }),
    kind: "mc",
    options: [
      { text: "Proceed with testing on the teen's own consent", why: "State laws let minors consent to testing for sexually transmitted infections." },
      { text: "Call a parent to get consent before any testing", why: "Parental consent is not required for this care." },
      { text: "Delay testing until a parent can come in", why: "Delay puts off care the teen may legally consent to." },
      { text: "Test only after a court grants permission", why: "No court order is needed for this care." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s01-27", {
      topic: "Cues that a client lacks capacity to consent",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 81-year-old client with a hip fracture is asked to consent to surgical repair. The nurse records the client's responses. Click to highlight the findings that suggest the client lacks decision-making capacity.",
      rationale:
        "Capacity needs four abilities. The client must understand the facts, appreciate how they apply to them, reason about options and state a stable choice. Not knowing what happens without surgery shows poor understanding. Believing she is at home shows she does not grasp her situation. A changing answer shows no stable choice. Slow speech, glasses and wanting her son's input do not show lost capacity.",
      sources: [APPELBAUM],
    }),
    kind: "highlight",
    passage:
      "[[States the surgery will fix her broken hip.]]\n[[Cannot say what could happen without surgery.]]\n[[Believes she is at home in her own kitchen.]]\n[[Asks how long recovery will take.]]\n[[Changes her answer each time she is asked.]]\n[[Wears glasses and a hearing aid.]]\n[[Speaks slowly and pauses to think.]]\n[[Says she wants to decide with her son.]]",
    spans: [
      { text: "States the surgery will fix her broken hip.", why: "She understands the purpose of the surgery." },
      { text: "Cannot say what could happen without surgery.", why: "She does not understand the result of refusing." },
      { text: "Believes she is at home in her own kitchen.", why: "She does not appreciate her current situation." },
      { text: "Asks how long recovery will take.", why: "A question about recovery shows she is engaging with the decision." },
      { text: "Changes her answer each time she is asked.", why: "Capacity requires a choice that stays stable." },
      { text: "Wears glasses and a hearing aid.", why: "Sensory aids do not reduce capacity when they are in use." },
      { text: "Speaks slowly and pauses to think.", why: "Slow speech is not a sign of lost capacity." },
      { text: "Says she wants to decide with her son.", why: "Choosing to involve family is a valid way to decide." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s01-28", {
      topic: "Conscientious objection to an assignment",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A nurse has a sincere moral objection to taking part in withdrawing ventilator support. The nurse learns that a client on the unit will have the ventilator withdrawn tomorrow. This follows the client's advance directive and the family's request. What should the nurse do?",
      rationale:
        "A nurse may decline to take part in care that violates deeply held moral beliefs. The objection is raised early through the proper channel, so care can be reassigned without leaving the client. Refusing at the moment of assignment risks a gap in care. Staying silent leaves the nurse in moral distress. Asking the family to delay goes against the client's documented wishes.",
      sources: [ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Care for the client and keep the objection to yourself", why: "Hiding the objection leaves the nurse in moral distress and is not required." },
      { text: "Tell the nurse manager now so care can be reassigned", why: "Early notice lets the manager plan care without a gap." },
      { text: "Refuse the assignment when it is given tomorrow", why: "A late refusal risks a gap in the client's care." },
      { text: "Ask the family to delay the ventilator withdrawal", why: "The plan follows the client's own directive. The nurse does not try to change it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-29", {
      topic: "Delegating tasks on a rehabilitation unit",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse on a rehabilitation unit works with an AP. All of the clients are stable. Which tasks can the nurse delegate to the AP? Select all that apply.",
      rationale:
        "An AP can do routine tasks with predictable outcomes for stable clients. Measuring intake and output, help with a shower, turning every 2 hours and collecting a routine stool specimen fit. Assessing a new pressure injury, teaching walker use and evaluating tolerance of a diet need nursing judgment. The nurse keeps them.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Assess a new pressure injury on the sacrum", why: "Assessment of a new wound needs nursing judgment." },
      { text: "Measure and record intake and output", why: "Measuring and recording are routine data collection tasks." },
      { text: "Teach a client to use a walker safely", why: "Teaching is not delegated to an AP." },
      { text: "Help a client take a shower", why: "Hygiene care for a stable client is a routine AP task." },
      { text: "Reposition a client every 2 hours", why: "Scheduled turning is a routine AP task." },
      { text: "Evaluate a client's tolerance of a new diet", why: "Evaluation of a client's response needs nursing judgment." },
      { text: "Collect a routine stool specimen", why: "Routine specimen collection is within AP training." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s01-30", {
      topic: "Interpreter for discharge teaching",
      cjmm: "action",
      process: "culture",
      difficulty: 1,
      stem: "The nurse prepares discharge teaching for a client who speaks Mandarin and little English. The client's 15-year-old grandson offers to interpret. What should the nurse do?",
      rationale:
        "A client with limited English needs a qualified interpreter for health teaching. Federal rules bar relying on a minor child to interpret except in an emergency. A family member may also leave out or change details. English handouts and slow English do not give the client meaningful access.",
      sources: [LANGUAGE],
    }),
    kind: "mc",
    options: [
      { text: "Use a qualified medical interpreter for the teaching", why: "A qualified interpreter conveys the teaching accurately and privately." },
      { text: "Accept the grandson's offer to interpret", why: "A minor child is not relied on to interpret outside an emergency." },
      { text: "Give written English instructions and a phone number", why: "English text does not reach a client who reads little English." },
      { text: "Teach slowly in English using simple words", why: "Simple English still does not give the client meaningful access." },
    ],
    correct: 0,
  },
];
