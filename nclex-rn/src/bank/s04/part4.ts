import type { Item } from "@/engine/types";
import { ANA_CODE, DELEGATION, GUIDO, HINKLE, MARX, NCEA_FLAGS, NCSBN_SUD, PLACEBO, POTTER, PSNET_REPORT, TEAMSTEPPS, TJC_SEA40, YODER, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s04-31", {
      topic: "Task suited to a practical nurse",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A registered nurse works with a practical nurse (LPN) on a surgical unit. Which task is appropriate for the registered nurse to assign to the LPN?",
      rationale:
        "An LPN may reinforce teaching that the registered nurse has started, using the same plan. Admission assessment of a new transfer, creating a teaching plan and evaluating the response to a first unit of blood need registered nurse assessment and judgment. Those stay with the registered nurse.",
      sources: [DELEGATION, YODER, { body: "Canadian Council for Practical Nurse Regulators", work: "About the Canadian Council for Practical Nurse Regulators", year: 2026, url: "https://www.ccpnr.ca/" }],
      canada:
        "In Canada, the practical nurse is a registered practical nurse (RPN) in Ontario and a licensed practical nurse elsewhere. Scope and assignment rules come from each provincial or territorial regulator, so they vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "Complete the admission assessment of a new transfer", why: "Initial assessment of a new client is a registered nurse duty." },
      { text: "Create the discharge teaching plan for a client", why: "Planning care and teaching needs registered nurse judgment." },
      { text: "Evaluate a client's response to a first unit of blood", why: "Evaluating a high-risk therapy is a registered nurse duty." },
      { text: "Reinforce insulin pen teaching the RN began", why: "Reinforcing teaching the registered nurse started is within the LPN scope." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s04-32", {
      topic: "Finding a missed anticoagulant dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "At 0800, the nurse finds that a client on day 2 after hip replacement did not receive the enoxaparin dose due at 2100 the evening before. The client has no leg pain or swelling. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A missed dose of an anticoagulant after hip replacement raises the risk of a clot. The nurse assesses the legs and breathing, then asks the provider how to handle the missed dose. The nurse submits a safety event report and charts the facts and actions in the record. The chart does not mention the report. A doubled dose raises bleeding risk.",
      sources: [PSNET_REPORT, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Give a double dose at the next scheduled time", why: "Doubling an anticoagulant without a prescription raises bleeding risk." },
      { text: "Notify the provider for direction on the missed dose", why: "The provider decides how to manage a missed anticoagulant dose." },
      { text: "Write in the chart that an incident report was filed", why: "The safety report is a separate document and is not named in the chart." },
      { text: "Assess the legs and breathing for signs of a clot", why: "A missed dose after hip surgery raises clot risk, so the nurse checks first." },
      { text: "Submit a safety event report on the omission", why: "An omitted dose is a medication error that is reported." },
      { text: "Wait until morning rounds to mention it", why: "Delay leaves the client without direction on the missed dose." },
      { text: "Chart the facts of the omission and actions taken", why: "The record shows what happened to the client and the care given." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s04-33", {
      topic: "Responding to repeated incivility",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A new graduate nurse notices that an experienced coworker rolls her eyes when the new nurse asks questions. The coworker also leaves the new nurse out of shift huddles. This has happened on 4 shifts. What is the new nurse's best first action?",
      rationale:
        "Eye rolling and exclusion from huddles are unprofessional behaviors that harm teamwork and safety. The first step is a private talk that names the specific behavior and its effect. If it continues, the nurse involves the manager. Ignoring it or avoiding questions puts clients at risk. A group chat post spreads the conflict.",
      sources: [TJC_SEA40, TEAMSTEPPS],
    }),
    kind: "mc",
    options: [
      { text: "Ignore it until the end of orientation", why: "Ignoring the behavior lets it continue and affect client care." },
      { text: "Talk with the coworker privately about it", why: "A private talk about the specific behavior is the first step in resolving it." },
      { text: "Post about the coworker in a staff group chat", why: "A public post spreads the conflict and is unprofessional." },
      { text: "Stop asking questions to avoid the reaction", why: "Unasked questions can lead to errors in client care." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s04-34", {
      topic: "Delegating care of a stable infant",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse on a pediatric unit works with an assistive personnel (AP). A 9-month-old infant admitted with gastroenteritis is now stable and taking oral fluids. Which tasks may the nurse delegate to the AP? Select all that apply.",
      rationale:
        "The infant is stable, so routine measures with set methods can go to the AP. Weighing diapers, weighing the infant, recording bottle intake and changing linens fit. Checking skin turgor and the fontanel is assessment. Teaching the parents and judging whether intake is enough need nursing judgment.",
      sources: [DELEGATION, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Weigh the diapers and record output", why: "Weighing diapers is a measured task with a set method." },
      { text: "Assess skin turgor and the fontanel", why: "Hydration assessment needs nursing judgment." },
      { text: "Measure and record the infant's weight", why: "Weighing a stable infant is a routine AP task." },
      { text: "Teach the parents signs of dehydration", why: "Teaching needs nursing knowledge and a check of learning." },
      { text: "Record the fluid intake from each bottle", why: "Recording intake is a routine task with a set method." },
      { text: "Judge whether the oral intake is enough", why: "Judging adequacy is an evaluation that stays with the nurse." },
      { text: "Change the crib linens", why: "Linen changes need no nursing judgment." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s04-35", {
      topic: "Acting on signs of financial exploitation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A home health nurse visits a 79-year-old client whose electricity was shut off for nonpayment, though the client has a steady pension. A new neighbor now holds the client's bank card. The client says, \"He handles my money now.\" State law makes nurses mandatory reporters of elder abuse. What should the nurse do?",
      rationale:
        "Unpaid bills despite steady income and a new person controlling the bank card are warning signs of financial exploitation. A mandatory reporter reports a reasonable suspicion. Proof is not required. Adult protective services investigates. Confronting the neighbor can raise the risk to the client. Advice to close the account does not start protection.",
      sources: [NCEA_FLAGS, GUIDO, { body: "Government of Nova Scotia", work: "Adult Protection Act, R.S.N.S. 1989, c. 2, section 5", year: 2014, url: "https://nslegislature.ca/sites/default/files/legc/statutes/adult%20protection.pdf" }, { body: "Government of Ontario", work: "Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1, section 28", year: 2021, url: "https://www.ontario.ca/laws/statute/21f39" }],
      canada:
        "Canada has no single duty to report elder abuse, and reporting laws vary by province. Nova Scotia's Adult Protection Act requires anyone to report an adult in need of protection. Ontario requires reports of suspected abuse of long-term care residents.",
    }),
    kind: "mc",
    options: [
      { text: "Report to adult protective services", why: "Reasonable suspicion is enough to report. The agency investigates." },
      { text: "Ask the neighbor to return the bank card", why: "Confronting the suspected abuser can put the client at more risk." },
      { text: "Wait for proof before making any report", why: "Mandatory reporters report suspicion. Proof is not required." },
      { text: "Advise the client to close the bank account", why: "This does not start an investigation or protect the client." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-36", {
      topic: "Coworker who drank before a shift",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "At 0300 a charge nurse notices that a staff nurse has slurred speech, an unsteady gait and alcohol on the breath. The staff nurse says, \"I had a few drinks before my shift, but I am fine.\" The staff nurse has given medications to 5 clients tonight. Complete the diagram by choosing the condition the staff nurse is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Slurred speech and an unsteady gait with alcohol on the breath and an admission of drinking point to impairment at work. Client safety comes first, so the charge nurse removes the nurse from care and notifies the supervisor under policy. The charge nurse checks each assigned client and reviews the medications given tonight for errors.",
      sources: [NCSBN_SUD, YODER],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Low blood glucose in the nurse", why: "Low glucose can slur speech, but the nurse admits drinking and smells of alcohol." },
      { text: "Fatigue from a long night shift", why: "Fatigue does not cause alcohol on the breath or explain the admission of drinking." },
      { text: "Impairment from alcohol at work", why: "Alcohol on the breath, slurred speech, poor gait and an admission of drinking fit impairment." },
      { text: "An acute stroke in the nurse", why: "The nurse's own report of drinking explains the signs. Stroke is less likely." },
    ],
    actions: [
      { text: "Let the nurse finish with a lighter load", why: "An impaired nurse cannot give safe care to any client." },
      { text: "Remove the nurse from client care now", why: "Removing the nurse at once protects clients from unsafe care." },
      { text: "Ask coworkers to watch the nurse closely", why: "Watching does not remove the risk to clients." },
      { text: "Notify the nursing supervisor per policy", why: "Policy sets the next steps, such as testing and referral." },
      { text: "Keep the matter between the two nurses", why: "Silence leaves clients at risk and the nurse without help." },
    ],
    parameters: [
      { text: "Condition of the nurse's assigned clients", why: "Each client is checked for harm from impaired care." },
      { text: "The nurse's past attendance record", why: "Past attendance does not show whether clients are safe tonight." },
      { text: "The nurse's blood alcohol level", why: "Testing follows policy and is not a parameter the charge nurse monitors." },
      { text: "Medications the nurse gave tonight", why: "The 5 clients may have received wrong doses, so their records are reviewed." },
      { text: "The staffing plan for next week", why: "Future staffing does not address the risk to clients now." },
    ],
    correct: { condition: 2, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s04-37", {
      topic: "Rise in near miss reports after a campaign",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A medical unit ran a campaign to encourage safety event reporting. Six months later the nurse manager reviews the data. Near miss reports rose from 12 to 41 per month. Reports of events that harmed clients stayed at 3 per month. How should the manager interpret these results?",
      rationale:
        "Near miss reports rose from 12 to 41 per month while harm events stayed at 3. More reports of events that did not reach or harm clients point to greater trust in the system, not less safe care. A just culture treats reports as a source of learning. Stopping the campaign would hide the risks that reports reveal.",
      sources: [PSNET_REPORT, MARX],
    }),
    kind: "mc",
    options: [
      { text: "Care on the unit has become less safe", why: "Harm events did not rise. The rise is in near misses that were caught." },
      { text: "Staff are making more errors than before", why: "More reports show more willingness to report, not more errors." },
      { text: "The campaign should stop to cut the reports", why: "Fewer reports would hide risks that the team can fix." },
      { text: "Staff are more willing to report problems", why: "Near miss reports rose while harm stayed at 3 per month, which fits a stronger reporting culture." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s04-38", {
      topic: "Saline injection to test reported pain",
      cjmm: "action",
      process: "caring",
      difficulty: 4,
      stem: "A client reports pain of 8 on a 0 to 10 scale after abdominal surgery. The provider suspects the client is exaggerating. The provider prescribes an injection of sterile saline, to be described to the client as a pain medication. What should the nurse do?",
      rationale:
        "Giving a placebo to test whether pain is real deceives the client and breaks trust. A response to a placebo does not show that pain is false. Pain nursing guidance holds that placebos are not used to assess or manage pain outside an approved study. The nurse declines and discusses an effective pain plan with the provider.",
      sources: [PLACEBO, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Give the saline and chart the response", why: "A placebo response does not show pain is false. Giving it deceives the client." },
      { text: "Give the saline but tell the client what it is", why: "Honest labeling does not treat pain of 8. Placebos are not used to test pain." },
      { text: "Decline and discuss the pain plan with the provider", why: "The nurse refuses a deceptive treatment and advocates for real pain relief." },
      { text: "Give the saline only if the pain rises further", why: "Worse pain needs effective treatment, not a placebo." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s04-39", {
      topic: "Tasks for a home health aide",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A home health nurse plans care for a 70-year-old client with heart failure who lives alone. A home health aide will visit daily. Which tasks may the nurse delegate to the aide? Select all that apply.",
      rationale:
        "A home health aide can help with bathing, weigh and record the weight, prepare meals from the plan and do light housekeeping. These are routine tasks with set methods. Lung assessment, dose changes and teaching need nursing or prescriber judgment. The aide reports a weight change for the nurse to act on.",
      sources: [DELEGATION, HINKLE, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Assess the client's lung sounds", why: "Lung assessment needs nursing judgment." },
      { text: "Help the client bathe in the shower", why: "Help with hygiene is a routine aide task." },
      { text: "Weigh the client and record the result", why: "A daily weight is a measured task. The aide reports it to the nurse." },
      { text: "Adjust the diuretic dose based on weight", why: "Dose changes need a prescription and are outside the aide's role." },
      { text: "Prepare a low-sodium meal from the plan", why: "Meal preparation from a set plan is an aide task." },
      { text: "Teach the client signs of fluid overload", why: "Teaching needs nursing knowledge and a check of learning." },
      { text: "Do light housekeeping and laundry", why: "Household support is part of the aide role." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s04-40", {
      topic: "Speaking up for a resident who cannot report pain",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "An 88-year-old resident in long-term care has advanced dementia. The resident moans, grimaces and guards the right hip when moved. The resident fell 2 days ago and x-rays showed no fracture. Acetaminophen 650 mg every 6 hours as needed is the only analgesic prescribed. It was given 1 hour ago with no change. What should the nurse do?",
      rationale:
        "Moaning, grimacing and guarding are pain behaviors in a person who cannot report pain. The only analgesic has failed. The nurse advocates by reporting these findings to the provider and asking for a review of the pain plan. A repeat dose 1 hour after the last breaks the 6 hour interval. Labeling pain as behavior leaves it untreated.",
      sources: [ANA_CODE, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Recheck the resident in 4 hours", why: "Waiting leaves clear pain signs untreated." },
      { text: "Report the pain signs to the provider", why: "The prescribed analgesic failed, so the nurse seeks a new plan." },
      { text: "Chart the moaning as a behavior problem", why: "Moaning with guarding is a pain sign in dementia, not a behavior problem." },
      { text: "Give a second acetaminophen dose now", why: "A dose 1 hour after the last breaks the prescribed 6 hour interval." },
    ],
    correct: 1,
  },
];
