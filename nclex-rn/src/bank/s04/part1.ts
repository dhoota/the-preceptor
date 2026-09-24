import type { Item } from "@/engine/types";
import { DELEGATION, GUIDO, HINKLE, NCSBN_SUD, POTTER, PSNET_REPORT, TEAMSTEPPS, TJC_SEA40, YODER, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s04-01", {
      topic: "Feeding a client whose swallow has changed",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 74-year-old client had an ischemic stroke 3 days ago and passed a bedside swallow screen yesterday. At breakfast today the client coughed during the meal and had a wet voice. A speech therapy consult is pending. The nurse asks an assistive personnel (AP) trained in feeding to feed the client lunch. Which right of delegation does this decision break?",
      rationale:
        "The right circumstance needs a stable client with a predictable response. Coughing and a wet voice at breakfast are new signs of possible aspiration. The pending speech therapy consult shows the plan is not settled. Feeding is an AP task and this AP is trained, so the task and the person fit. The nurse keeps this meal and assesses swallowing first.",
      sources: [DELEGATION, HINKLE, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "Right task", why: "Feeding is within the AP's job description, so the task itself fits." },
      { text: "Right person", why: "The AP is trained in feeding, so the AP has the needed skill." },
      { text: "Right circumstance", why: "The client's swallowing changed today, so the outcome is no longer predictable." },
      { text: "Right supervision", why: "Close follow-up cannot make safe a handoff that the client's changed condition rules out." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s04-02", {
      topic: "Delegating on a postpartum unit",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse on a postpartum unit works with an assistive personnel (AP). One client gave birth vaginally 20 hours ago and her vital signs have been stable all shift. Which tasks may the nurse delegate to the AP for this client? Select all that apply.",
      rationale:
        "The client is stable 20 hours after birth, so routine tasks with predictable outcomes can go to the AP. Vital signs, help to the shower, linen changes and intake records fit. Fundal and lochia checks are assessments. Perineal care teaching and judging pain relief need nursing knowledge. The nurse keeps those.",
      sources: [DELEGATION, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Assess the fundus and lochia", why: "Fundal and lochia checks are assessments that need nursing judgment." },
      { text: "Measure and record vital signs", why: "Vital signs on a stable client are routine and within AP training." },
      { text: "Teach perineal care with the peri bottle", why: "Teaching needs nursing knowledge and a check of learning. The nurse keeps it." },
      { text: "Help the client walk to the shower", why: "Help with hygiene for a stable client is a routine AP task." },
      { text: "Evaluate pain relief after ibuprofen", why: "Judging a drug's effect is an evaluation that stays with the nurse." },
      { text: "Change the bed linens", why: "Linen changes need no nursing judgment and suit the AP role." },
      { text: "Record the client's oral fluid intake", why: "Measuring and recording intake is a routine task with a set method." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s04-03", {
      topic: "Correcting an AP's temperature technique",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse sees an assistive personnel (AP) place an oral thermometer in a client's mouth. The client finished a cup of hot tea 2 minutes earlier. The AP records a temperature of 38.3°C (100.9°F). What should the nurse do?",
      refs: ["An oral temperature is measured 20 to 30 minutes after a hot or cold drink."],
      rationale:
        "Hot tea 2 minutes earlier can raise an oral reading. The value of 38.3°C may be false. The nurse has the AP wait and recheck, which also corrects the technique at the point of care. Treating or reporting a fever that may not exist wastes effort and can lead to needless drugs. Taking over every temperature does not fix the gap in skill.",
      sources: [POTTER, DELEGATION],
    }),
    kind: "mc",
    options: [
      { text: "Have the AP recheck it in 30 minutes", why: "Waiting 20 to 30 minutes after a hot drink gives a true reading and corrects the AP's technique." },
      { text: "Report the fever to the provider now", why: "The reading may be false because of the hot tea. A recheck comes first." },
      { text: "Take over temperature checks this shift", why: "Taking the task back does not teach the AP. Brief correction and follow-up do." },
      { text: "Give the PRN acetaminophen as prescribed", why: "Treating a reading that may be false could give a drug the client does not need." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s04-04", {
      topic: "Matching a client to a practical nurse",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The charge nurse on a medical unit makes an assignment for a practical nurse (LPN). One client has a chronic venous leg ulcer with a scheduled dressing change. One client was admitted 1 hour ago with chest pain. One client is about to start a first unit of blood. Complete the sentence by dragging the correct words into each blank.",
      rationale:
        "The client with the chronic leg ulcer has an established plan and a predictable course. This fits the LPN scope. The client admitted 1 hour ago with chest pain needs an initial assessment by the registered nurse. The start of a transfusion carries the highest risk of a reaction, so the registered nurse monitors it.",
      sources: [DELEGATION, YODER, { body: "Canadian Council for Practical Nurse Regulators", work: "About the Canadian Council for Practical Nurse Regulators", year: 2026, url: "https://www.ccpnr.ca/" }],
      canada:
        "In Canada, the practical nurse is a registered practical nurse (RPN) in Ontario and a licensed practical nurse elsewhere. Scope and assignment rules come from each provincial or territorial regulator, so they vary by province.",
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The charge nurse assigns the client {0} to the LPN because the client is {1}.",
    targets: ["Client", "Reason"],
    tokens: [
      { text: "with the chronic leg ulcer", why: "A stable wound with a set dressing plan suits the LPN scope." },
      { text: "admitted with chest pain", why: "A new admission with chest pain needs an initial registered nurse assessment." },
      { text: "starting a blood transfusion", why: "The start of a transfusion needs close registered nurse monitoring for a reaction." },
      { text: "stable with a predictable course", why: "Stability and a predictable course are the basis for an LPN assignment." },
      { text: "due for an initial nursing assessment", why: "The initial assessment belongs to the registered nurse, not the LPN." },
      { text: "at risk of a sudden change", why: "A client at risk of sudden change stays with the registered nurse." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s04-05", {
      topic: "Next step when a surgeon declines to act",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client is on day 1 after a bowel resection. Over 4 hours, abdominal pain rose from 4 to 9 on a 0 to 10 scale despite the prescribed analgesic. The abdomen is now firm and distended. Heart rate is 104/minute and BP is 126/78 mmHg. The surgeon hears the report, says to continue the current plan and ends the call. What should the nurse do next?",
      rationale:
        "Pain rising from 4 to 9 with a new firm, distended abdomen after bowel surgery needs a prompt provider review. The surgeon has declined to act. The nurse follows the chain of command and tells the charge nurse, who can involve the supervisor. Waiting or charting alone leaves the client at risk. Skipping to the chief of surgery bypasses the nursing chain.",
      sources: [YODER, TEAMSTEPPS],
    }),
    kind: "mc",
    options: [
      { text: "Recheck the pain score in 1 hour", why: "Pain has climbed to 9 with a firm abdomen. A delay leaves a possible complication untreated." },
      { text: "Page the chief of surgery directly", why: "This skips the facility chain of command. The charge nurse or supervisor comes first." },
      { text: "Document the call and continue to monitor", why: "Charting alone does not get the client the review the findings call for." },
      { text: "Tell the charge nurse about the concern", why: "The chain of command starts with the charge nurse when a provider does not respond to a concern." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s04-06", {
      topic: "Ordering a DESC conversation",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "During a busy shift, a surgeon criticizes a nurse in a loud voice at the nurses' station about a late lab draw. The next day the nurse asks to speak with the surgeon in private. Place the parts of the nurse's conversation in the order of the DESC script.",
      rationale:
        "The DESC script first describes the specific behavior. The nurse then expresses how it affected them. Next the nurse suggests another way to handle it. Last the nurse states the consequence for the team and clients. Pointing to other staff complaints turns the talk into an attack. A threat of a formal complaint ends the dialogue before a solution is found.",
      sources: [TEAMSTEPPS, TJC_SEA40],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "\"Please speak with me in private when a task runs late.\"", why: "This suggests a new approach, the third step of DESC." },
      { text: "\"Other nurses on the unit have complained about you too.\"", why: "Bringing in others' complaints makes the talk an attack and is not part of DESC." },
      { text: "\"Yesterday you raised your voice at me at the desk.\"", why: "Describing the specific behavior is the first step of DESC." },
      { text: "\"That way we can fix delays faster and keep clients safe.\"", why: "Stating the consequence for safety is the final step of DESC." },
      { text: "\"I felt embarrassed, and it was hard to focus after.\"", why: "Expressing the effect on the nurse is the second step of DESC." },
      { text: "\"If this happens again I will file a formal complaint.\"", why: "A threat closes the discussion before the two agree on a solution." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s04-07", {
      topic: "Revising a draft safety event report",
      cjmm: "recognize",
      process: "communication",
      difficulty: 3,
      stem: "A nurse drafts a safety event report after a client received a scheduled dose of metoprolol 2 hours late. Click to highlight the statements in the draft that should be removed or rewritten before the report is submitted.",
      rationale:
        "A safety event report states what happened, the client's condition and the actions taken. It uses facts, not blame or opinion. A remark that the pharmacy is slow as usual is opinion. Saying the night nurse should have checked assigns blame. A guess about staffing is not an observed fact. Times, vital signs, provider notification and the client's own words belong.",
      sources: [PSNET_REPORT, POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Metoprolol 50 mg was due at 0900 and given at 1100.]]\n[[The pharmacy was slow again, as usual.]]\n[[BP at 1100 was 148/92 mmHg with heart rate 96/minute.]]\n[[The provider was notified at 1105.]]\n[[The night nurse should have checked the drawer.]]\n[[The client said, \"I wondered where my pill was.\"]]\n[[I think this happens because we are always short staffed.]]\n[[No change in the client's condition was found at 1200.]]",
    spans: [
      { text: "Metoprolol 50 mg was due at 0900 and given at 1100.", why: "The drug, dose and both times are the core facts of the event." },
      { text: "The pharmacy was slow again, as usual.", why: "This is a complaint and an opinion. It does not describe the event." },
      { text: "BP at 1100 was 148/92 mmHg with heart rate 96/minute.", why: "Objective findings at the time of the late dose belong in the report." },
      { text: "The provider was notified at 1105.", why: "Notification and its time are actions taken and belong in the report." },
      { text: "The night nurse should have checked the drawer.", why: "This assigns blame to a person instead of stating a fact." },
      { text: "The client said, \"I wondered where my pill was.\"", why: "The client's own words in quotes are an objective record." },
      { text: "I think this happens because we are always short staffed.", why: "A guess at the cause is opinion. Review of the report looks for causes." },
      { text: "No change in the client's condition was found at 1200.", why: "Follow-up findings show the outcome and belong in the report." },
    ],
    correct: [1, 4, 6],
  },
  {
    ...meta("rn-s04-08", {
      topic: "Wrong vial strength caught before use",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse removes a vial of hydromorphone from the automated cabinet for a client with a prescription for 1 mg IV. The vial holds 10 mg/mL instead of the 2 mg/mL product stocked on the unit. The nurse notices before drawing up the dose. After getting the correct vial, what should the nurse do?",
      rationale:
        "A wrong strength that is caught before it reaches the client is a near miss. Near misses show weak points in a system without harm, so they are reported through the safety event system. The report is not part of the client's chart. Telling the pharmacist alone or waiting for a repeat loses the chance to fix the stocking process.",
      sources: [PSNET_REPORT, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Tell the pharmacist and take no other step", why: "A phone call does not enter the event into the system that tracks and fixes causes." },
      { text: "Submit a safety event report as a near miss", why: "Reporting a near miss lets the team fix the stocking error before a client is harmed." },
      { text: "Record the wrong vial in the client's chart", why: "The wrong vial never reached the client. Safety reports stay out of the medical record." },
      { text: "Report it only if the error happens again", why: "Waiting for a repeat risks a client receiving a fivefold dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s04-09", {
      topic: "Reporting a visitor's fall",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A visitor slips on a wet floor in a hallway on the medical unit and reports right wrist pain. The nurse helps her to a chair. Staff escort her to the emergency department. The nurse now completes a safety event report. Which details should the nurse include? Select all that apply.",
      rationale:
        "Events that involve visitors are reported the same way as client events. The report gives the time and place, the conditions the nurse saw, the person's own words and the care given. It does not assign fault or give the writer's opinion on cause. It does not promise payment, which can read as an admission of liability.",
      sources: [PSNET_REPORT, GUIDO],
    }),
    kind: "sata",
    options: [
      { text: "The time and exact place of the fall", why: "Time and location are basic facts every report needs." },
      { text: "The staff member at fault for the spill", why: "Assigning fault is not a fact the nurse observed. Review of the report looks at causes." },
      { text: "The visitor's own words about the fall", why: "Quoted statements are an objective record of the visitor's account." },
      { text: "A promise that the hospital will pay costs", why: "A promise of payment can read as an admission of liability and is not a fact of the event." },
      { text: "The floor condition the nurse observed", why: "What the nurse saw, such as water on the floor, is an objective finding." },
      { text: "The escort to the emergency department", why: "Care given after the event is part of the factual record." },
      { text: "The nurse's opinion of what caused the fall", why: "Opinion on cause does not belong. The report states observed facts." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s04-10", {
      topic: "Pattern in controlled substance records",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "The charge nurse reviews records for a client on day 3 after spinal fusion. The client has a prescription for hydromorphone 1 mg IV every 3 hours as needed for pain. Each dose comes from a 2 mg vial, so every dose has a waste. Based on the trend, what is the most likely explanation?",
      tabs: [
        {
          title: "Controlled Substance Review",
          table: {
            head: ["Item", "Night 1", "Night 2", "Night 3", "Night 4"],
            rows: [
              ["Nurse on duty", "Nurse A", "Nurse B", "Nurse A", "Nurse B"],
              ["Doses removed", "2", "4", "2", "4"],
              ["Wastes witnessed at the time", "2 of 2", "1 of 4", "2 of 2", "1 of 4"],
              ["Pain score 1 hour after dose (0 to 10)", "3", "8", "3", "8"],
            ],
          },
        },
      ],
      rationale:
        "On Nurse B's nights, doses double from 2 to 4, yet pain after each dose stays at 8. Only 1 of 4 wastes is witnessed at the time. On Nurse A's nights, 2 doses bring pain to 3. Frequent removals, unwitnessed waste and poor relief tied to one nurse are warning signs of diversion. The charge nurse reports the pattern to the manager under facility policy.",
      sources: [NCSBN_SUD, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Growing opioid tolerance in the client", why: "Tolerance would not change with the nurse on duty. Pain falls to 3 on Nurse A's nights." },
      { text: "Worse surgical pain at night", why: "Every column is a night shift. Pain differs by nurse, not by time of day." },
      { text: "Possible diversion by one nurse", why: "More removals, unwitnessed waste and no relief on one nurse's nights fit diversion." },
      { text: "Late charting on busy nights", why: "Late charting would not explain double the removals and pain that stays at 8." },
    ],
    correct: 2,
  },
];

