import type { Item } from "@/engine/types";
import { ASA_DNR, CAUTI, DELEGATION, FMEA, GUIDO, HINKLE, NLC, POTTER, YODER, ANA_CODE, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s03-11", {
      topic: "Steps of ethical decision making",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "The family and the care team disagree about continuing tube feedings for a client with advanced dementia. The nurse leads the team through a stepwise ethical decision process. Place the steps in order.",
      rationale:
        "An ethical process starts with the facts of the client's condition. Next the team clarifies the values of each person and names the conflict. Then it lists the possible courses of action. The team negotiates a plan with the family, then evaluates the plan over time. An ethics committee advises and supports. It does not make the decision for the family and team.",
      sources: [POTTER, ANA_CODE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Clarify the values of each person involved", why: "Values come after the facts so the conflict can be named clearly." },
      { text: "Gather the facts about the client's condition", why: "Facts come first. Decisions built on wrong facts fail." },
      { text: "Evaluate the plan over time", why: "Evaluation closes the process and shows whether the plan still fits." },
      { text: "Ask the ethics committee to make the decision", why: "An ethics committee gives advice. The decision stays with the client's decision makers." },
      { text: "Negotiate a plan with the family and team", why: "A plan is agreed once the options are known." },
      { text: "List the possible courses of action", why: "Options are listed once the facts and values are clear." },
    ],
    correct: [1, 0, 5, 4, 2],
  },
  {
    ...meta("rn-s03-12", {
      topic: "New wish that differs from a living will",
      cjmm: "analyze",
      process: "communication",
      difficulty: 4,
      stem: "A 70-year-old client signed a living will 10 years ago that refuses mechanical ventilation. Today, with pneumonia and harder breathing, the client says, \"If I need a breathing machine, I want it.\" The client is alert and can explain the choice. How should the nurse proceed?",
      rationale:
        "A living will guides care only when the client cannot speak for themselves. This client is alert and can explain the choice, so the current spoken wish governs. A client with capacity may change or revoke a directive at any time. The nurse tells the provider and charts the new wish so the plan and the directive can be updated.",
      sources: [POTTER, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Tell the provider and chart the client's new wish", why: "A client with capacity may change a directive. The team needs to know." },
      { text: "Treat the living will as the client's current wish", why: "A directive applies only when the client cannot decide. This client can." },
      { text: "Ask the family which wish they believe is correct", why: "The client has capacity and decides. The family does not choose between the wishes." },
      { text: "Request an ethics consult before any intubation", why: "No conflict needs a consult. A delay could harm a client whose breathing is getting worse." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-13", {
      topic: "Do-not-resuscitate order before surgery",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A client with a do-not-resuscitate (DNR) order is scheduled for hip fracture repair under general anesthesia. A staff member says, \"The DNR is suspended in the operating room.\" Hospital policy does not suspend it automatically. What should the nurse do?",
      rationale:
        "Surgery and anesthesia change the risks, so the DNR order is reviewed with the client before surgery. It is not dropped by default. The client may choose full resuscitation, refuse set procedures or set limits by goals. The plan and the time the original order resumes are documented. Canceling needed surgery or asking the family to sign ignores the client's own choice.",
      sources: [ASA_DNR, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Suspend the DNR order until the client leaves recovery", why: "Automatic suspension does not respect the client's right to decide." },
      { text: "Arrange a review of the DNR with the client before surgery", why: "A review lets the client decide how the order applies during anesthesia." },
      { text: "Ask the client's family to sign a new consent form", why: "The client decides about the DNR. The family does not sign in the client's place." },
      { text: "Cancel the surgery because the client has a DNR order", why: "A DNR order does not rule out surgery. It limits resuscitation only." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-14", {
      topic: "Clients to assign to a practical nurse",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The charge nurse on a medical unit plans assignments for the shift. Which clients may the charge nurse assign to a licensed practical nurse (LPN)? Select all that apply.",
      rationale:
        "An LPN cares for stable clients whose outcomes are predictable. Scheduled insulin in stable diabetes, tube feedings 3 days after a stroke and a dressing on a stable ulcer fit. New chest pain needs an RN's first assessment. Starting a blood transfusion is kept for the RN in most states. A new ostomy needs an RN to plan and give the teaching. The LPN may reinforce it later.",
      sources: [DELEGATION, YODER, { body: "Government of Ontario", work: "Nursing Act, 1991, S.O. 1991, c. 32", year: 1991, url: "https://www.ontario.ca/laws/statute/91n32" }],
      canada:
        "In Ontario this role is the registered practical nurse (RPN), and other provinces use the LPN title. Each provincial regulator sets practical nurse scope, so assignment rules vary by province.",
    }),
    kind: "sata",
    options: [
      { text: "A client admitted 20 minutes ago with new chest pain", why: "A new, possibly unstable client needs the RN's first assessment." },
      { text: "A client with stable type 2 diabetes on scheduled insulin", why: "Stable diabetes with a routine insulin schedule is within LPN scope." },
      { text: "A stable client 3 days after a stroke on tube feedings", why: "A stable client on routine tube feedings has predictable care needs." },
      { text: "A client starting a first unit of packed red cells", why: "Starting a transfusion needs RN assessment in most states." },
      { text: "A client with a stable leg ulcer needing a dressing", why: "A dressing change on a stable wound is routine LPN care." },
      { text: "A client who needs teaching on a new ostomy", why: "The RN plans and gives new teaching. The LPN may reinforce it." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s03-15", {
      topic: "Supervising a blood pressure reading",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse watches an assistive personnel (AP) measure the blood pressure of a client with a large upper arm. The AP uses a standard adult cuff and charts 168/94 mmHg. What should the nurse do first?",
      rationale:
        "A cuff that is too small for the arm gives a falsely high reading. The 168/94 mmHg value may not be real. Supervision means correcting the task and coaching the AP. The AP rechecks with a large cuff while the nurse confirms the method. Reporting or charting a reading taken the wrong way passes on bad data.",
      sources: [DELEGATION, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "Report the reading to the provider as high", why: "The reading may be falsely high from the small cuff. It should be rechecked first." },
      { text: "Chart that the reading may be inaccurate", why: "Charting does not produce an accurate value or correct the AP's method." },
      { text: "Have the AP recheck using a large cuff", why: "A correct cuff gives an accurate value and coaches the AP in the right method." },
      { text: "Reassign blood pressure checks to another AP", why: "Reassigning skips the coaching this AP needs and delays an accurate value." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s03-16", {
      topic: "First client to see on a surgical unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse gets report on four surgical clients. One is 1 day after bowel resection with pain of 6 of 10 and an analgesic due in 1 hour. One is 2 days after thyroidectomy and reports tingling around the mouth. One is 1 day after knee replacement and due to start a motion machine. One is 4 hours after laparoscopic gallbladder removal with shoulder pain of 4 of 10. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Tingling around the mouth after thyroidectomy can mean the parathyroid glands were injured. Low calcium can progress to tetany and spasm of the larynx, which threatens the airway. That client comes first. Moderate pain after bowel surgery needs relief soon but is expected. Shoulder pain after laparoscopy comes from the gas used and is common. The motion machine can start a little later.",
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The nurse should see the client with {0} first because {1}.",
    blanks: [
      {
        options: [
          { text: "pain after bowel resection", why: "Pain of 6 of 10 on day 1 is expected. It is treated soon but is not a threat to the airway." },
          { text: "tingling after thyroidectomy", why: "Tingling around the mouth after thyroidectomy can signal low calcium." },
          { text: "shoulder pain after laparoscopy", why: "Shoulder pain after laparoscopy is usually from the gas used. It is common." },
          { text: "a motion machine due to start", why: "A short delay in the motion machine is not a threat to life." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "low calcium can cause airway spasm", why: "Low calcium can cause spasm of the larynx and block the airway." },
          { text: "moderate pain slows recovery", why: "Pain slows recovery, but it does not threaten the airway." },
          { text: "the gas can cause a bile leak", why: "The gas used in laparoscopy does not cause a bile leak." },
          { text: "motion therapy prevents stiffness", why: "Motion therapy helps range of motion. A short delay is safe." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s03-17", {
      topic: "Practicing under a multistate license",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A registered nurse holds a multistate license from the home state under the Nurse Licensure Compact. The nurse takes a travel job in another compact state. Which state's rules govern the nurse's practice in the new job?",
      rationale:
        "The compact lets the home state issue one license that works in all member states. The nurse must follow the practice laws and scope of the state where the client is located. The home state still issues and renews the license. The employer cannot choose which law applies. Nurses do not pick the strictest act.",
      sources: [NLC, { body: "College of Nurses of Ontario", work: "Interjurisdictional Nurse Licensure (INL): Registering in More than One Jurisdiction", year: 2026, url: "https://www.cno.org/maintain-your-membership/interjurisdictional-nurse-licensure" }],
      canada:
        "Canada has no nurse licensure compact. A nurse registers in each province or territory of practice, with interjurisdictional nurse licensure easing this, and follows the standards where care is given.",
    }),
    kind: "mc",
    options: [
      { text: "The rules of the nurse's home state", why: "The home state issues the license. Practice follows the law where the client is." },
      { text: "The rules the employer chooses to apply", why: "An employer sets policy within the law. It cannot choose which state law applies." },
      { text: "The rules of the strictest compact state", why: "The compact has no strictest state rule. Practice follows the client's location." },
      { text: "The rules of the state where the client is", why: "Under the compact the nurse follows the practice law of the client's state." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s03-18", {
      topic: "Finding failure points before a change",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A hospital will switch to new smart infusion pumps next month. The safety team wants to find where the new process could fail before any client is harmed. Which method should the team use?",
      rationale:
        "Failure mode and effects analysis looks ahead at a process to predict where and how it could fail. The team then fixes the weakest steps before harm occurs. It suits a new process before it starts. Root cause analysis, incident reviews and chart audits all look back at events that already happened.",
      sources: [FMEA, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Failure mode and effects analysis", why: "This method predicts failures in a process before it starts." },
      { text: "Root cause analysis", why: "Root cause analysis studies an event after it has happened." },
      { text: "Review of incident reports", why: "Incident reports describe past events. The new pumps have none yet." },
      { text: "Retrospective chart audit", why: "A chart audit looks back at care already given." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-19", {
      topic: "Reading infection data after a protocol",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      trend: true,
      stem: "A unit started a nurse-driven protocol for removing urinary catheters in January. The quality team reviews the data in the exhibit. Which conclusion does the trend support?",
      tabs: [
        {
          title: "Unit Quality Data",
          table: {
            head: ["Measure", "October", "December", "February", "April"],
            rows: [
              ["Catheter days", "410", "395", "260", "210"],
              ["Catheter-associated urinary infections", "4", "4", "2", "1"],
              ["Infections per 1000 catheter days", "9.8", "10.1", "7.7", "4.8"],
            ],
          },
        },
      ],
      rationale:
        "After the protocol began in January, catheter days fell from 395 in December to 210 in April. The infection rate per 1000 catheter days also fell, from 10.1 to 4.8. The rate adjusts for the number of catheter days. So the drop is not only from fewer catheters. Each catheter day also carried less risk. Shorter catheter use is a core way to prevent these infections.",
      sources: [CAUTI, YODER],
    }),
    kind: "mc",
    options: [
      { text: "The protocol has had no effect on catheter use", why: "Catheter days fell from 395 to 210 after the protocol started." },
      { text: "Fewer catheter days explain all of the change", why: "The rate per 1000 catheter days also fell, so fewer days is not the whole story." },
      { text: "Catheter use and infection rate both fell", why: "Catheter days and the rate per 1000 catheter days both dropped after January." },
      { text: "Infections rose once the protocol started", why: "Infections fell from 4 to 1 after the protocol started." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s03-20", {
      topic: "Client withdraws consent at the bedside",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A client signed consent for a bedside thoracentesis an hour ago. As the provider sets up the tray, the client says, \"I changed my mind. I do not want this.\" The client is alert and oriented. What should the nurse do first?",
      rationale:
        "A client with capacity may withdraw consent at any time, even after signing. The signature does not bind the client. Going ahead would be treatment without consent. The nurse stops the setup and tells the provider. The provider then explores the client's concerns. Pressure from staff or family undermines a voluntary choice.",
      sources: [POTTER, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Remind the client that the form is already signed", why: "A signed form does not stop a client from withdrawing consent." },
      { text: "Reassure the client and help with positioning", why: "Going ahead after a refusal is treatment without consent." },
      { text: "Ask the family to talk the client into it", why: "Family pressure undermines a voluntary decision." },
      { text: "Stop and tell the provider consent is withdrawn", why: "Stopping honors the refusal. The provider can then explore the concern." },
    ],
    correct: 3,
  },
];
