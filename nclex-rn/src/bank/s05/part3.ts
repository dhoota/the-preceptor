import type { Item } from "@/engine/types";
import { ANA_CODE, HALTER, HINKLE, HIPAA, HIPAA_ACCESS, IHI_MEASURES, IHI_TOOLKIT, TEAMSTEPPS, YODER, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s05-21", {
      topic: "Student handling of client information",
      cjmm: "recognize",
      process: "communication",
      difficulty: 2,
      stem: "A clinical instructor reviews how nursing students handled client information during a hospital shift. Which student actions breach client confidentiality? Select all that apply.",
      rationale:
        "Confidentiality limits client information to people who need it for care or approved learning. A full name on paperwork taken home can be read outside the facility. A case discussed in a cafeteria line can be overheard. A wound photo on a personal phone leaves facility control. Reading a chart out of curiosity has no care purpose. A coded care plan, chart review for the assigned client and a private post-conference are acceptable.",
      sources: [HIPAA, ANA_CODE],
    }),
    kind: "sata",
    options: [
      { text: "Writes the client's full name on a care plan taken home", why: "Identifiable information leaves the facility without safeguards." },
      { text: "Uses a code in place of the name on care plan notes", why: "A code keeps the notes from identifying the client." },
      { text: "Discusses the client's case in the cafeteria line", why: "Others in a public area can overhear the details." },
      { text: "Reviews the chart of the assigned client before care", why: "The student needs this information to give safe care." },
      { text: "Photographs the client's wound with a personal phone", why: "The image leaves facility control and may be shared or lost." },
      { text: "Talks about the client in a private post-conference", why: "A closed teaching session is an approved learning purpose." },
      { text: "Opens the chart of another student's client out of interest", why: "Curiosity is not a care or learning purpose for this record." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s05-22", {
      topic: "Closed-loop reply during a rapid response",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 2,
      stem: "A nurse educator observes a new nurse during a rapid response. The team leader says, \"Give amiodarone 150 mg IV over 10 minutes.\" Which reply by the new nurse shows correct check-back?",
      rationale:
        "Check-back closes the loop. The receiver repeats the drug, dose, route and rate back to the sender, and the sender confirms. Repeating amiodarone 150 mg IV over 10 minutes lets the leader catch any error before the drug is given. A general agreement repeats nothing. A question about a past dose and a plan to wait do not confirm the prescription.",
      sources: [TEAMSTEPPS],
    }),
    kind: "mc",
    options: [
      { text: "\"Okay, I will get that started for the client now.\"", why: "This agrees but does not repeat the drug, dose or rate for checking." },
      { text: "\"Amiodarone 150 mg IV over 10 minutes, starting now.\"", why: "Repeating the full prescription lets the leader confirm it." },
      { text: "\"Is that the same dose we gave on the last call?\"", why: "This asks about a past event and does not confirm this prescription." },
      { text: "\"I will draw it up once the pharmacist gets here.\"", why: "This delays the drug and does not repeat the prescription back." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-23", {
      topic: "First client to see on a mental health unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse on an inpatient mental health unit takes over four clients at the start of the evening shift. Which client should the nurse see first?",
      rationale:
        "A client with depression who gives away belongings and then seems suddenly calm may have made a plan for suicide. Safety comes first, so this client needs a direct suicide risk check now. Voices during a calm meal are a stable symptom. A client with fast speech who accepted redirection is responding to the plan. A request for an as-needed dose for anxiety can follow the safety check.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Schizophrenia, hears voices, eating dinner calmly", why: "The client is calm and eating. The symptom is stable at present." },
      { text: "Bipolar disorder, fast speech, accepted a quiet room", why: "The client is responding to redirection and is not in danger." },
      { text: "Panic disorder, asking for an as-needed anxiety dose", why: "This need is real but can follow an urgent safety check." },
      { text: "Depression, gave away a watch, now suddenly calm", why: "Giving away items with sudden calm can signal a suicide plan." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s05-24", {
      topic: "Matching quality tools to their uses",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A unit team studies why first antibiotic doses start late after admission. Place the quality tool that fits each purpose.",
      rationale:
        "A cause and effect diagram lays out possible causes in groups such as people, methods and equipment. A Pareto chart ranks causes by how often they occur, so the team can focus on the largest. A run chart plots one measure over time to show whether changes lead to improvement. A Gantt chart schedules project tasks. An organizational chart shows reporting lines.",
      sources: [IHI_TOOLKIT],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Explore possible causes", "Rank causes by frequency", "Track a measure over time"],
    tokens: [
      { text: "Run chart", why: "A run chart plots data over time to show change." },
      { text: "Gantt chart", why: "A Gantt chart schedules tasks. It does not analyze causes or data." },
      { text: "Cause and effect diagram", why: "This diagram groups the possible causes of one problem." },
      { text: "Organizational chart", why: "An organizational chart shows reporting lines, not causes or trends." },
      { text: "Pareto chart", why: "A Pareto chart orders categories from most to least frequent." },
    ],
    correct: [2, 4, 0],
  },
  {
    ...meta("rn-s05-25", {
      topic: "Neighbor admitted to another unit",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "A nurse hears from a friend that a neighbor was admitted to another unit of the hospital. The nurse has access to the electronic record. What should the nurse do?",
      rationale:
        "Access to the record is allowed only for a job purpose. The nurse has no care role for the neighbor, so the record stays closed. This includes looking up only a room number. Asking the unit nurse about the neighbor seeks the same information another way. Record access is logged and audited.",
      sources: [HIPAA, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Open the neighbor's record to check the diagnosis", why: "Viewing a record with no care role is a privacy breach." },
      { text: "Ask the unit nurse how the neighbor is doing", why: "This seeks protected information with no care purpose." },
      { text: "Leave the neighbor's record unopened", why: "The nurse has no job need to view it." },
      { text: "Look up only the room number to send flowers", why: "Even a room number is protected. It is not needed for the nurse's work." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s05-26", {
      topic: "Team for a care conference in ALS",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with amyotrophic lateral sclerosis has softer speech and coughs when drinking thin liquids. The client wants to plan now for future decisions about breathing support. The family asks about a power wheelchair. The skin is intact and the heart rhythm is regular. Which team members should the nurse invite to the care conference? Select all that apply.",
      rationale:
        "Coughing on thin liquids and softer speech call for a speech-language pathologist to assess swallowing and communication. Planning for future breathing support is advance care planning, which the palliative care team leads with the client. An occupational therapist assesses seating and the power wheelchair. Intact skin means wound care is not needed. A regular rhythm gives no reason for cardiology. No infection issue is described.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Cardiology nurse practitioner", why: "The heart rhythm is regular. No cardiac problem is described." },
      { text: "Speech-language pathologist", why: "Swallowing and speech changes need assessment and a plan." },
      { text: "Wound care nurse", why: "The skin is intact, so no wound care is needed now." },
      { text: "Palliative care team", why: "The team guides advance care planning for breathing support decisions." },
      { text: "Occupational therapist", why: "Seating and power wheelchair needs fall within occupational therapy." },
      { text: "Infection preventionist", why: "The stem describes no infection or isolation need." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s05-27", {
      topic: "Judging a new handoff tool",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A unit adopted a structured handoff tool with the goal of fewer items left out of shift report. Three months later, the nurse reviews the results. Which finding best shows the goal was met?",
      rationale:
        "The goal was fewer omissions in report. An audit showing missing items fell from 22% to 6% measures that outcome directly. Nurses liking the tool shows acceptance, not fewer omissions. Longer handoffs are a cost of the change and serve as a balancing measure. Training completion is a process step that does not prove report content improved.",
      sources: [IHI_MEASURES],
    }),
    kind: "mc",
    options: [
      { text: "Audits show missing items fell from 22% to 6%", why: "This measures the stated goal of fewer omissions." },
      { text: "Nurses rate the new tool as easy to use", why: "Ease of use shows acceptance but does not measure omissions." },
      { text: "Handoffs now take 4 minutes longer per client", why: "This is a balancing measure. It does not show fewer omissions." },
      { text: "All nurses finished the handoff training module", why: "Training completion is a process step, not the outcome." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-28", {
      topic: "Comparing a unit rate with a benchmark",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "In the latest quarterly survey, 3.8% of clients on a unit had a hospital-acquired pressure injury. Last quarter the unit rate was 4.5%. The national benchmark for similar units is 2.1%. Which interpretation is accurate?",
      rationale:
        "The unit rate fell from 4.5% to 3.8%, so it improved. The benchmark for similar units is 2.1%, so the unit is still above it. A rate above the benchmark is worse, not better, for a harm measure. The target has not been met.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "The unit is doing better than similar units nationally", why: "At 3.8% the unit is above the 2.1% benchmark, which is worse." },
      { text: "The unit rate rose since last quarter", why: "The rate fell from 4.5% to 3.8%." },
      { text: "The unit has now met the benchmark", why: "A rate of 3.8% has not reached the 2.1% benchmark." },
      { text: "The unit improved but is still above the benchmark", why: "The rate dropped but remains higher than 2.1%." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s05-29", {
      topic: "Handoff findings that need follow-up",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse receives handoff on a client who is on day 2 after a bowel resection. Click to highlight the findings that need follow-up at the start of the shift.",
      rationale:
        "Urine output of 20 mL/hour for 3 hours is below the usual adult minimum and may mean low volume. A heart rate that rose from 84 to 112/minute fits the same picture or early sepsis. New shortness of breath after surgery can signal a pulmonary embolism or fluid overload. Controlled pain, walking, a closed incision, routine heparin, a clean IV site and clear liquids are expected on day 2.",
      refs: ["Adult urine output below 30 mL/hour needs follow-up."],
      sources: [HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[Pain 3 of 10 after oral oxycodone.]]\n[[Urine output 20 mL/hour for the last 3 hours.]]\n[[Walked in the hall twice.]]\n[[Heart rate 112/minute, up from 84/minute this morning.]]\n[[Incision edges together, no drainage.]]\n[[New report of feeling short of breath.]]\n[[Heparin 5 000 units subcut given at 0600.]]\n[[IV site in left forearm without redness.]]\n[[Tolerating clear liquids.]]",
    spans: [
      { text: "Pain 3 of 10 after oral oxycodone.", why: "Mild pain after an oral opioid on day 2 is controlled." },
      { text: "Urine output 20 mL/hour for the last 3 hours.", why: "Output below 30 mL/hour can signal low volume or kidney injury." },
      { text: "Walked in the hall twice.", why: "Walking on day 2 is expected and helps recovery." },
      { text: "Heart rate 112/minute, up from 84/minute this morning.", why: "A rising heart rate can signal bleeding, low volume or infection." },
      { text: "Incision edges together, no drainage.", why: "A closed, dry incision is expected." },
      { text: "New report of feeling short of breath.", why: "New dyspnea after surgery can signal an embolism or fluid overload." },
      { text: "Heparin 5 000 units subcut given at 0600.", why: "Routine prophylactic heparin is expected after surgery." },
      { text: "IV site in left forearm without redness.", why: "A site without redness shows no sign of phlebitis." },
      { text: "Tolerating clear liquids.", why: "Tolerating clear liquids shows the bowel is recovering." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s05-30", {
      topic: "Client asks for results by regular email",
      cjmm: "action",
      process: "communication",
      difficulty: 5,
      stem: "A clinic client asks for recent laboratory results to be sent to a personal email address. The clinic has a secure portal. The client says she prefers regular email over the portal. Following clinic policy on record requests, what should the nurse do?",
      rationale:
        "Clients have a right to their health information in the form they ask for when the clinic can produce it. A client may choose unencrypted email after being told it could be read by others in transit. The nurse explains the risk, and if the client still prefers email, the request goes ahead through the clinic process. Refusing, switching to fax or mailing without asking ignores the client's stated choice.",
      sources: [HIPAA_ACCESS, { body: "Information and Privacy Commissioner of Ontario", work: "Fact Sheet: Communicating Personal Health Information by Email", year: 2016, url: "https://www.ipc.on.ca/en/resources-and-decisions/fact-sheet-communicating-personal-health-information-email" }],
      canada: "HIPAA does not apply in Canada, and rules vary by province. Ontario's privacy commissioner (2016) expects a written email policy, notice to the client and consent before unencrypted email is used, with limits on what is sent.",
    }),
    kind: "mc",
    options: [
      { text: "Decline because regular email is not permitted", why: "A client may choose unencrypted email after being warned of the risk." },
      { text: "Fax the results to the client's home instead", why: "This replaces the client's chosen format without reason." },
      { text: "Explain the risk, then honor the client's choice", why: "The client may accept the risk of email once it is explained." },
      { text: "Mail printed results without asking again", why: "This ignores the format the client asked for." },
    ],
    correct: 2,
  },
];
