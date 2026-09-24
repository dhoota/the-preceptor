import type { Item } from "@/engine/types";
import { ANA_CODE, DELEGATION, HIPAA, ORGAN, POTTER, RCA2, RRT, TEAMSTEPPS, YODER, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s01-31", {
      topic: "Ranking clients to see after report",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse on a medical unit receives report on five clients. Place the three clients the nurse should see first in order of priority.",
      rationale:
        "Lip swelling after a new antibiotic can progress to airway closure, so that client comes first. A glucose of 52 mg/dL with sweating is hypoglycemia that can quickly affect the brain. It comes second. Pain rated 8 with the last dose 4 hours ago needs prompt relief and comes third. A question about home oxygen and a ride at noon can wait.",
      sources: [POTTER, { body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" }],
      canada:
        "Canadian labs report glucose only in mmol/L, so this value reads as 2.9 mmol/L. Diabetes Canada defines hypoglycemia as a level below 4.0 mmol/L in people treated with insulin or an insulin secretagogue.",
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third"],
    tokens: [
      { text: "Client after surgery with pain rated 8, last dose 4 hours ago", why: "Severe pain needs prompt relief once the threats to airway and glucose are handled." },
      { text: "Client ready for discharge whose ride arrives at noon today", why: "A stable client waiting for a ride can be seen after the others." },
      { text: "Client with lip swelling after a new antibiotic", why: "Lip swelling may signal anaphylaxis and a threat to the airway." },
      { text: "Client with stable COPD who has questions about home oxygen", why: "Teaching questions from a stable client can wait." },
      { text: "Client with glucose 52 mg/dL (2.9 mmol/L) who is sweaty", why: "Hypoglycemia needs quick treatment to protect the brain." },
    ],
    correct: [2, 4, 0],
  },
  {
    ...meta("rn-s01-32", {
      topic: "Purpose of a root cause analysis",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "After a client receives a tenfold overdose of heparin, the hospital begins a root cause analysis. Which statement by a nurse on the analysis team shows understanding of its purpose?",
      rationale:
        "A root cause analysis looks for the system weaknesses that let an error reach a client. Examples are look-alike vials, pump settings or missing double checks. It then sets actions to prevent a repeat. It is not meant to find someone to blame or to decide discipline. Filing an error report starts the process but does not complete it.",
      sources: [RCA2, { body: "Incident Analysis Collaborating Parties. Canadian Patient Safety Institute", work: "Canadian Incident Analysis Framework", year: 2012, url: "https://www.healthcareexcellence.ca/resources/patient-safety-incident-analysis/" }],
      canada:
        "The Canadian equivalent is the Canadian Incident Analysis Framework (2012), now offered by Healthcare Excellence Canada. It is based on the 2006 Canadian Root Cause Analysis Framework and looks for system factors, not blame.",
    }),
    kind: "mc",
    options: [
      { text: "\"We need to find out which nurse made the mistake.\"", why: "Blame shifts attention away from the system causes of the error." },
      { text: "\"The goal is to decide what discipline is fair.\"", why: "Discipline is handled apart from the safety analysis." },
      { text: "\"We are looking for system gaps that let this happen.\"", why: "The analysis finds system causes and sets actions to prevent a repeat." },
      { text: "\"The analysis is done once the error report is filed.\"", why: "The report starts the review. Analysis and action follow." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-33", {
      topic: "Spotting electronic record security breaches",
      cjmm: "recognize",
      process: "communication",
      difficulty: 1,
      stem: "The nurse manager reviews an audit of electronic health record use on the unit. Which findings show a breach of client information security? Select all that apply.",
      rationale:
        "Staff may open only the records they need for their work. Opening a neighbor's chart without a care role is a breach. A shared password makes the audit trail false and gives access to someone else. A printed summary taken home leaves the facility's protection. Logging out, viewing an assigned client's chart and turning the screen are proper safeguards.",
      sources: [HIPAA, POTTER, { body: "Office of the Privacy Commissioner of Canada", work: "Provincial and territorial privacy laws and oversight", year: 2026, url: "https://www.priv.gc.ca/en/about-the-opc/what-we-do/provincial-and-territorial-collaboration/provincial-and-territorial-privacy-laws-and-oversight/" }],
      canada:
        "HIPAA does not apply in Canada. Provincial health information laws protect client records, such as the Health Information Act in Alberta, and the rules vary by province.",
    }),
    kind: "sata",
    options: [
      { text: "Opened a neighbor's chart without a care role", why: "Access without a work need breaks the minimum necessary standard." },
      { text: "Logged out before leaving the workstation", why: "Logging out keeps others from using the nurse's access." },
      { text: "Shared a password with a float nurse", why: "Shared passwords give access to others and corrupt the audit trail." },
      { text: "Viewed the chart of an assigned client", why: "Viewing records needed for assigned care is permitted." },
      { text: "Took a printed client summary home", why: "Paper records taken home are no longer protected by the facility." },
      { text: "Turned the screen away from the hallway", why: "Turning the screen keeps passersby from reading client data." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s01-34", {
      topic: "Choosing the first nursing problem after surgery",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 67-year-old client is on day 1 after abdominal surgery. The nurse hears coarse crackles that remain after a weak cough. SpO2 is 93%. The client rates incision pain 5 and worries about hospital bills. The client has not had a bowel movement since surgery. Which problem should the nurse address first?",
      rationale:
        "Coarse crackles that remain after a weak cough show secretions the client cannot clear. Airway comes before other needs. Pain of 5 is addressed next, partly because pain limits coughing. Worry about bills is a real concern but not a physical threat. No bowel movement on day 1 is expected after abdominal surgery.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Anxiety about hospital bills", why: "Worry matters but does not threaten physical safety now." },
      { text: "Ineffective airway clearance", why: "Secretions in the airway threaten oxygenation. Airway comes first." },
      { text: "Acute incision pain", why: "Pain is treated promptly but comes after the airway." },
      { text: "Risk for constipation", why: "No bowel movement on day 1 is expected. It is not the first need." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-35", {
      topic: "Naming intentional torts",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews two events on the unit. In the first, a nurse warned a client who refused a bath that the nurse would tie the client's hands. In the second, a nurse locked the door of an alert client's room to keep the client from leaving. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Assault is a threat that makes a person fear harmful contact. The warning to tie the client's hands is a threat with no touch, so it is assault. Battery needs actual contact. Keeping an alert client in a room without legal authority is false imprisonment. Defamation and slander involve false statements. Negligence is a failure of care, not an intentional act.",
      sources: [POTTER],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The threat in the first event is {0}. Locking the door in the second event is {1}.",
    blanks: [
      {
        options: [
          { text: "battery", why: "Battery needs actual contact. No one touched the client." },
          { text: "assault", why: "A threat that causes fear of harmful contact is assault." },
          { text: "defamation", why: "Defamation is a false statement that harms a reputation." },
          { text: "negligence", why: "Negligence is an unintended failure of care. The threat was deliberate." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "battery", why: "Locking a door involves no contact with the client." },
          { text: "invasion of privacy", why: "Privacy concerns exposure of the client or their information." },
          { text: "professional negligence", why: "Locking the door was deliberate, not a lapse in care." },
          { text: "false imprisonment", why: "Keeping an alert client from leaving without legal authority is false imprisonment." },
        ],
        correct: 3,
      },
    ],
  },
  {
    ...meta("rn-s01-36", {
      topic: "Family question about organ donation",
      cjmm: "action",
      process: "caring",
      difficulty: 4,
      stem: "A 34-year-old client has a catastrophic brain injury and death is expected soon. The family asks the nurse whether the client's organs could help someone. What should the nurse do?",
      rationale:
        "Hospitals must notify the organ procurement organization in a timely way when a death is imminent. Only an organ procurement representative or a trained designated requester approaches the family about donation. The nurse makes sure the organization is notified. The family's question does not need to wait until death is declared. The provider is not the person who makes the request.",
      sources: [ORGAN, { body: "Ontario Health (Trillium Gift of Life Network)", work: "Health Care Professionals: Routine Notification for Donation Eligibility", year: 2026, url: "https://www.giftoflife.on.ca/en/professionals.htm" }, { body: "Government of Nova Scotia", work: "Organ and tissue donation, Human Organ and Tissue Donation Act", year: 2026, url: "https://novascotia.ca/organ-and-tissue-donation/" }],
      canada:
        "In Canada, organ donation agencies and referral laws vary by province. Designated Ontario hospitals must notify Ontario Health (Trillium Gift of Life Network), and Nova Scotia uses deemed consent for adults 19 and older.",
    }),
    kind: "mc",
    options: [
      { text: "Explain the donation process and get consent", why: "Only a procurement representative or trained requester seeks consent." },
      { text: "Tell the family to ask again after death", why: "Imminent death already triggers notice to the procurement organization." },
      { text: "Ask the provider to request donation", why: "The request is made by the procurement organization or a trained requester." },
      { text: "Ensure the procurement organization is notified", why: "Timely notice lets trained staff speak with the family." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s01-37", {
      topic: "Handoff content for a facility transfer",
      cjmm: "generate",
      process: "communication",
      difficulty: 2,
      stem: "A 75-year-old client on contact precautions for MRSA is being transferred from the hospital to a skilled nursing facility. Which information should the nurse include in the handoff report? Select all that apply.",
      rationale:
        "A safe handoff gives the receiving team what it needs to continue care. Isolation status protects other residents. A reconciled medication list prevents omitted or duplicate drugs. Code status and allergies guide emergency care and prescribing. Recent vital signs give a baseline. Opinions about the family, billing codes and the hospital's staffing do not help the next team.",
      sources: [TEAMSTEPPS, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Contact precautions for MRSA", why: "The facility must plan isolation before the client arrives." },
      { text: "Nurse's opinion of the family", why: "Personal opinions are not part of a clinical handoff." },
      { text: "Reconciled medication list", why: "An accurate list prevents missed or duplicated drugs." },
      { text: "Hospital billing codes", why: "Billing codes do not guide the next team's care." },
      { text: "Code status and allergies", why: "These guide emergency care and safe prescribing." },
      { text: "The unit's staffing level today", why: "Hospital staffing does not affect care at the facility." },
      { text: "Most recent vital signs", why: "Recent values give the facility a baseline for comparison." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s01-38", {
      topic: "Acting on a trend charted by an AP",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "At 2015 the nurse reviews vital signs an AP recorded for a 70-year-old client admitted with a urinary tract infection. The AP did not report them. Based on the trend, what should the nurse do first?",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Time", "0800", "1200", "1600", "2000"],
            rows: [
              ["Temperature (°C)", "37.6", "38.2", "38.9", "39.3"],
              ["Heart rate (/minute)", "92", "104", "116", "128"],
              ["Respirations (/minute)", "18", "22", "26", "30"],
              ["BP (mmHg)", "124/76", "116/70", "102/60", "88/52"],
              ["SpO2 (%)", "96", "95", "93", "91"],
            ],
          },
        },
      ],
      rationale:
        "From 0800 to 2000 the heart rate rose from 92 to 128/minute and respirations from 18 to 30/minute. The BP fell from 124/76 to 88/52 mmHg with a rising fever. In a client with an infection, this points to worsening sepsis. The rapid response team brings critical care skills to the bedside. The nurse later reviews reporting duties with the AP.",
      sources: [RRT, DELEGATION],
    }),
    kind: "mc",
    options: [
      { text: "Ask the AP to recheck vital signs in 1 hour", why: "The client is getting worse now. Another hour of delay adds risk." },
      { text: "Give the prescribed acetaminophen for fever", why: "Treating the fever does not address falling BP and rising heart rate." },
      { text: "Call the rapid response team to the bedside", why: "Worsening vital signs in infection need urgent expert help." },
      { text: "Add the trend to the next shift handoff report", why: "Waiting for handoff delays care for a client who is getting worse." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-39", {
      topic: "Asked to do an unfamiliar skill",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A nurse floats to an intensive care unit. The nurse is asked to remove a femoral arterial sheath but has never been trained in this skill. What should the nurse do?",
      rationale:
        "Nurses are accountable for accepting only work they are competent to do. Sheath removal carries a risk of bleeding and needs trained hands. The nurse tells the charge nurse so a competent nurse can do it. Reading the manual or watching a video does not build a supervised skill. An AP does not share in a procedure the nurse cannot do.",
      sources: [ANA_CODE, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Remove the sheath using the unit's procedure manual", why: "Reading steps does not replace supervised training in a risky skill." },
      { text: "Watch a video of the procedure and then do it", why: "A video does not make the nurse competent to remove a sheath." },
      { text: "Ask the AP to hold pressure during the removal", why: "Adding an AP does not make up for the nurse's lack of training." },
      { text: "Tell the charge nurse about the lack of training", why: "The charge nurse can assign a competent nurse to the procedure." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s01-40", {
      topic: "New nurse's understanding of delegation",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse manager reviews delegation with a newly licensed nurse. Which two statements by the new nurse need correction? Select two.",
      rationale:
        "The nurse who delegates stays accountable for the outcome. Evaluation needs nursing judgment and cannot be delegated to an AP. The other statements are correct. The nurse checks that the AP is trained, gives clear instructions with what to report and follows up on the reports.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers. Delegation rules vary by province, and the delegating nurse stays responsible for the decision to delegate.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I stay accountable for the tasks I delegate to the AP.\"", why: "Accountability stays with the delegating nurse." },
      { text: "\"The AP can evaluate a client's discharge teaching.\"", why: "Evaluation needs nursing judgment. It is not delegated." },
      { text: "\"I check that the AP has been trained for the task.\"", why: "Delegation requires a trained, competent delegatee." },
      { text: "\"The AP answers for the outcome of a delegated task.\"", why: "The delegating nurse keeps accountability for the outcome." },
      { text: "\"I give the AP clear instructions and what to report.\"", why: "Clear direction is part of safe delegation." },
      { text: "\"I follow up on what the AP reports to me.\"", why: "Follow-up closes the delegation loop." },
    ],
    correct: [1, 3],
  },
];
