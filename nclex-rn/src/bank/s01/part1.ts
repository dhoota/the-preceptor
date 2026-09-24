import type { Item } from "@/engine/types";
import { AMA_DC, ANA_CODE, ANA_DOC, DELEGATION, HINKLE, HIPAA, LANGUAGE, POTTER, SBAR, TEAMSTEPPS, YODER, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s01-01", {
      topic: "Choosing a task for assistive personnel",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse on a surgical unit works with an assistive personnel (AP). Which task should the nurse delegate to the AP?",
      rationale:
        "Walking with a client who is 3 days after knee surgery is a routine task with a predictable outcome. It fits the training of an AP. Assessment, teaching and evaluation need nursing judgment. The nurse keeps the first check of a new incision, the spirometer teaching and the pain evaluation after an IV opioid.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "Check the incision of a client just back from surgery", why: "The first check after surgery is an assessment. Assessment stays with the nurse." },
      { text: "Teach a client to use an incentive spirometer", why: "Teaching needs nursing knowledge and judgment. It is not delegated to an AP." },
      { text: "Walk with a client 3 days after knee surgery", why: "Walking with a client who is days past surgery is routine and has a predictable outcome." },
      { text: "Evaluate pain relief 30 minutes after an IV opioid", why: "Evaluating a drug's effect is a nursing judgment. The nurse keeps it." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-02", {
      topic: "First client to assess after report",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "After shift report, the nurse on a medical unit reviews the four assigned clients. Which client should the nurse assess first?",
      rationale:
        "A fall in SpO2 from 94% to 86% within an hour is an acute change in breathing. Breathing comes before other needs. A fasting glucose of 188 mg/dL is high but not an emergency. Edema that has not changed since admission is stable. Leg pain of 5 in cellulitis is expected and can wait a short time.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Pneumonia, SpO2 now 86% after 94% an hour ago", why: "A sudden drop in oxygen saturation is an acute breathing problem. It comes first." },
      { text: "Type 2 diabetes, fasting glucose 188 mg/dL (10.4 mmol/L)", why: "A glucose of 188 mg/dL is high but is not an immediate threat to life." },
      { text: "Heart failure, ankle edema unchanged since admission", why: "Edema that has not changed is a stable finding. It does not need to be seen first." },
      { text: "Cellulitis, leg pain rated 5 on a 0 to 10 scale", why: "Moderate pain is expected with cellulitis. It is addressed after the breathing problem." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s01-03", {
      topic: "Nurse's role in informed consent",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A client who speaks Spanish and limited English is scheduled for a colonoscopy with moderate sedation. The client's adult son is at the bedside. The client asks the nurse what could go wrong during the procedure. Which actions are part of the nurse's role in informed consent? Select all that apply.",
      rationale:
        "The provider who does the procedure explains its risks, benefits and alternatives. The nurse arranges a qualified medical interpreter because the client has limited English. The nurse may witness the signature and confirms the form is signed before any sedation. If the client still has questions about risks, the nurse tells the provider. A family member is not used as the interpreter.",
      sources: [POTTER, LANGUAGE],
    }),
    kind: "sata",
    options: [
      { text: "Explain the risks and benefits of the procedure", why: "Explaining risks and benefits is the duty of the provider who does the procedure." },
      { text: "Arrange a qualified medical interpreter", why: "A client with limited English needs a qualified interpreter to give valid consent." },
      { text: "Witness the client signing the consent form", why: "The nurse may witness that the client signed the form of their own free will." },
      { text: "Ask the client's son to interpret the form", why: "A family member may filter or change what is said. Federal rules favor a qualified interpreter." },
      { text: "Confirm the form is signed before sedation", why: "Sedation impairs judgment. Consent must be signed while the client is clear." },
      { text: "Tell the provider the client has questions about risks", why: "Unanswered questions mean consent is not yet informed. The provider must answer them." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s01-04", {
      topic: "Authority of a health care agent",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 78-year-old client had a stroke and cannot communicate. The client's durable power of attorney for health care names a niece as the agent. The client's daughter disagrees with the niece about placing a feeding tube. Who has the authority to make this decision?",
      rationale:
        "A durable power of attorney for health care names the person who decides when the client cannot. The client chose the niece, so the niece decides. The agent's authority comes before the wishes of other relatives, including the daughter. The provider recommends treatment but does not replace the agent. An ethics committee advises and helps settle conflict. It does not make the decision.",
      sources: [POTTER, HINKLE, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Consent for the Incapable Adult", year: 2025, url: "https://cnps.ca/article/consent-for-the-incapable-adult/" }],
      canada:
        "In Canada, substitute decision maker laws and titles vary by province, such as the attorney for personal care in Ontario. Provincial statutes generally rank the person the client named ahead of family members.",
    }),
    kind: "mc",
    options: [
      { text: "The client's daughter, as the closest relative", why: "Next of kin decide only when no agent is named. The client named the niece." },
      { text: "The primary health care provider, after a family meeting", why: "The provider advises on treatment. The named agent makes the decision." },
      { text: "The hospital ethics committee, by majority vote", why: "An ethics committee gives advice. It does not hold decision-making authority." },
      { text: "The niece named as health care agent", why: "The client gave the niece legal authority to decide when the client cannot." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s01-05", {
      topic: "Spoken breaches of confidentiality",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 2,
      stem: "The charge nurse observes staff on a medical unit during the day shift. Which two actions by staff need correction? Select two.",
      rationale:
        "A biopsy result discussed in an elevator can be overheard by the public. That is an avoidable disclosure. A caller who knows the room number has not shown a right to the diagnosis. Sharing the plan with a spouse is allowed when the client is present and agrees. Giving the medication list to the home health nurse supports treatment. Curtains, low voices and logging off are safeguards.",
      sources: [HIPAA, { body: "Office of the Privacy Commissioner of Canada", work: "Provincial and territorial privacy laws and oversight", year: 2026, url: "https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/provincial-and-territorial-privacy-laws-and-oversight/" }],
      canada:
        "HIPAA does not apply in Canada. Provincial health information laws protect client information, such as the Personal Health Information Protection Act, 2004 in Ontario, and the rules vary by province.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Discussing a client's biopsy result with a coworker in the elevator", why: "Others in the elevator can overhear. This is an avoidable disclosure." },
      { text: "Closing the curtain and speaking quietly when discussing care at the bedside", why: "These are reasonable safeguards that protect privacy in a shared room." },
      { text: "Telling a phone caller who gives the room number the client's diagnosis", why: "Knowing a room number does not confirm who the caller is or their right to know." },
      { text: "Reviewing the care plan with the client's wife while the client listens and agrees", why: "The privacy rule allows sharing with family when the client is present and agrees." },
      { text: "Sending the medication list to the home health nurse taking over care", why: "Sharing information for treatment by another provider is permitted." },
      { text: "Logging off the computer before leaving the workstation", why: "Logging off stops others from viewing records. It protects privacy." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s01-06", {
      topic: "Client who wants to leave against advice",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 54-year-old male client was admitted 6 hours ago with chest pain and is waiting for a second troponin result. The client is alert and oriented. The client says, \"No one is feeding my dog. I am going home now.\" Which action should the nurse take first?",
      rationale:
        "An alert, oriented adult has the right to leave. The first step is to learn why the client wants to go. The dog may be a solvable problem. The nurse then tells the provider, who explains the risks of leaving before the second troponin. The form comes later if the client still leaves. Saying the client cannot leave or taking the clothes can be false imprisonment.",
      sources: [AMA_DC, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Tell the client the hospital cannot let him go", why: "A competent adult may leave. Saying otherwise can amount to false imprisonment." },
      { text: "Ask the client what is making him leave", why: "Learning the reason may reveal a problem the team can solve, such as care for the dog." },
      { text: "Give the client the against advice form to sign", why: "The form comes after the reasons and risks are discussed. It is not the first step." },
      { text: "Remove the client's clothes from the room", why: "Keeping a competent client from leaving this way can be false imprisonment." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-07", {
      topic: "Structured report to the provider at night",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "At 0300 the nurse calls the primary health care provider about a client on day 1 after a bowel resection. Place the parts of the report in SBAR order.",
      rationale:
        "SBAR starts with the situation, the change that prompted the call. Here that is the heart rate of 124/minute. Background follows, with the surgery and history. The assessment gives the nurse's view that the client may be bleeding. The recommendation asks for what the nurse needs, a visit within 30 minutes. A quiet unit is not part of the report.",
      sources: [SBAR],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Situation", "Background", "Assessment", "Recommendation"],
    tokens: [
      { text: "The client had a bowel resection yesterday and has no cardiac history.", why: "Surgery and history give the background the provider needs." },
      { text: "Please come and see the client within 30 minutes.", why: "The recommendation states what the nurse asks the provider to do." },
      { text: "The unit has been quiet overnight and the other clients are asleep.", why: "The state of the unit does not describe this client. It is left out." },
      { text: "The client's heart rate rose to 124/minute in the last hour.", why: "The new change in the client is the situation that prompted the call." },
      { text: "I think the client may be bleeding internally.", why: "The nurse's judgment about the problem is the assessment." },
    ],
    correct: [3, 0, 4, 1],
  },
  {
    ...meta("rn-s01-08", {
      topic: "Assigning a client to a practical nurse",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The charge nurse on a medical unit makes the client assignments for a licensed practical nurse (LPN). Which client is most appropriate to assign to the LPN?",
      rationale:
        "An LPN cares for clients whose condition is stable and whose outcomes are predictable. Stable chronic kidney disease with scheduled oral drugs fits. A new pulmonary embolism is unstable and needs RN assessment. First insulin teaching needs RN teaching. New back pain during a transfusion may be a reaction and needs RN assessment now.",
      sources: [DELEGATION, YODER, { body: "College of Nurses of Ontario", work: "Scope of Practice, Practice Standard", year: 2025, url: "https://www.cno.org/Assets/CNO/Documents/Standard-and-Learning/Practice-Standards/49041-scope-of-practice.pdf" }],
      canada:
        "In Ontario this role is the registered practical nurse (RPN), and other provinces use the LPN title. Each provincial regulator sets the scope of RN and practical nurse practice.",
    }),
    kind: "mc",
    options: [
      { text: "A client admitted 1 hour ago with a new pulmonary embolism", why: "A new embolism is unstable and needs RN assessment." },
      { text: "A client with diabetes who needs a first session on insulin", why: "Initial teaching belongs to the RN." },
      { text: "A client with stable chronic kidney disease due for oral drugs", why: "A stable client with predictable care fits the LPN scope." },
      { text: "A client receiving packed red blood cells who has new back pain", why: "Back pain during a transfusion can signal a reaction. The RN assesses it." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-09", {
      topic: "Reporting and charting a fall",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 70-year-old client is found sitting on the floor beside the bed. The client says she slipped on the way to the bathroom. The AP had not answered her call light. The nurse finds no injury. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The health record holds the objective facts of the fall and the nurse's findings. The event report goes through the facility's quality system. It is not mentioned in or filed with the chart. The provider is told so the client can be examined. Blaming a coworker in the chart is opinion, not fact. The late response to the call light belongs in the event report.",
      sources: [ANA_DOC, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Place a copy of the event report in the chart", why: "The event report is a quality document. Filing it in the chart makes it part of the legal record." },
      { text: "Document the facts of the fall in the health record", why: "The chart records what was found and done in objective terms." },
      { text: "Chart that the fall happened because the AP was late", why: "Blame is opinion. The chart holds facts, and staffing concerns go in the event report." },
      { text: "Complete an event report per facility policy", why: "An event report lets the facility track falls and fix system problems." },
      { text: "Write \"incident report filed\" in the progress note", why: "Naming the report in the chart points readers to it. It stays out of the record." },
      { text: "Notify the primary health care provider of the fall", why: "The provider needs to know so the client can be examined for injury." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s01-10", {
      topic: "Escalating an unsafe prescription",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The primary health care provider prescribes metoprolol 50 mg by mouth now for a client whose heart rate is 48/minute and BP is 92/58 mmHg. The nurse questions the prescription twice. Each time the provider says to give it as written. What should the nurse do next?",
      rationale:
        "Metoprolol slows the heart and lowers blood pressure. A heart rate of 48/minute and a BP of 92/58 mmHg make the dose unsafe. The nurse is accountable for any drug given, even when it is prescribed. After the concern is voiced twice, the nurse holds the dose and uses the chain of command. Half a dose is a new prescription the nurse cannot write.",
      refs: ["Adult bradycardia is a heart rate below 60/minute."],
      sources: [TEAMSTEPPS, ANA_CODE, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Give the dose and recheck vital signs in 1 hour", why: "Giving a drug the nurse judges unsafe makes the nurse accountable for the harm." },
      { text: "Give half the dose and document the concern", why: "Changing the dose without a prescription is outside the nurse's scope." },
      { text: "Ask the pharmacist to change the prescription", why: "A pharmacist cannot change the provider's prescription on the nurse's request." },
      { text: "Hold the dose and notify the nursing supervisor", why: "Holding protects the client. The supervisor moves the concern up the chain of command." },
    ],
    correct: 3,
  },
];
