import type { Item } from "@/engine/types";
import { ANA_DOC, HIPAA_ACCESS, MARX, POTTER, SAFER, TEACHBACK, TJC_SENTINEL, YODER, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s02-11", {
      topic: "Charting a missed assessment later",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "At 1500 the nurse realizes that a wound assessment done at 1000 was never charted in the electronic record. What should the nurse do?",
      rationale:
        "A missed entry is added as a late entry. It carries the current date and time and states when the care happened. Backdating the entry to 1000 makes the record look as if it was written then, which is falsification. Leaving it out or dropping the time leaves the record incomplete. Telling the charge nurse does not replace the entry.",
      sources: [ANA_DOC, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Enter it now as a late entry with the current time", why: "A late entry shows when it was written and when the care happened. The record stays honest." },
      { text: "Enter it with a 1000 time so the record is in order", why: "Backdating makes the entry look written at 1000. That is falsification." },
      { text: "Add it to the shift summary without a time", why: "An untimed note does not show when the wound was assessed." },
      { text: "Tell the charge nurse and leave the record as is", why: "The assessment still needs to be in the record. Telling someone does not add it." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s02-12", {
      topic: "Working through an electronic record outage",
      cjmm: "generate",
      process: "communication",
      difficulty: 3,
      stem: "The hospital's electronic health record stops working without warning. The outage is expected to last 4 hours. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Care goes on during an outage using the downtime plan. The nurse charts on the approved paper forms and gives drugs from the latest downtime medication report. Lab results come by phone and are read back. When the system returns, paper records are entered or scanned per policy. Holding scheduled drugs harms clients. Notes on scrap paper can be lost. Admissions continue using the same paper process.",
      sources: [SAFER],
    }),
    kind: "sata",
    options: [
      { text: "Hold scheduled drugs until the electronic system returns", why: "Holding scheduled drugs for hours can harm clients. The downtime report guides giving them." },
      { text: "Chart on the paper downtime forms", why: "Approved paper forms keep a legal record during the outage." },
      { text: "Give drugs from the latest downtime medication report", why: "The printed report lists current prescriptions so doses can go on safely." },
      { text: "Write notes on scrap paper to enter later", why: "Scrap paper is not part of the record and can be lost." },
      { text: "Take lab results by phone and read them back", why: "Read-back confirms results given by phone while the system is down." },
      { text: "Enter the paper records per policy when it returns", why: "Adding downtime records keeps the electronic record complete." },
      { text: "Stop new admissions until the electronic record returns", why: "Admissions continue on paper. Stopping them delays care." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s02-13", {
      topic: "Recognizing a sentinel event",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse manager reviews four event reports from the past week. Which event meets The Joint Commission definition of a sentinel event?",
      rationale:
        "The Joint Commission counts a fall that causes any fracture as a sentinel event. A fall with a wrist fracture qualifies and needs a root cause analysis. A scanner catching a wrong dose is a near miss because it did not reach the client. A rash after a first antibiotic dose is an adverse reaction, not a sentinel event. A client who left the unit and came back unharmed had no harm.",
      sources: [TJC_SENTINEL],
    }),
    kind: "mc",
    options: [
      { text: "A scanner stopped a wrong dose before it was given", why: "The error did not reach the client. It is a near miss and is still reported." },
      { text: "A client had a rash after a first antibiotic dose", why: "An unexpected drug reaction without severe harm is not a sentinel event." },
      { text: "A client fell in the bathroom and broke a wrist", why: "A fall that causes any fracture meets the sentinel event definition." },
      { text: "A client left the unit to smoke and came back unharmed", why: "Leaving the unit without harm does not meet the definition." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-14", {
      topic: "Just culture response to a workaround",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A charge nurse learns that a nurse often scans copies of client wristbands taped to the medication cart. The nurse says bedside scanning is slow and no error has happened. Using a just culture approach, how should the charge nurse respond?",
      rationale:
        "A just culture sorts behavior into human error, at-risk behavior and reckless behavior. Scanning taped copies is at-risk behavior. The nurse chose a shortcut and did not see the risk. The response is coaching and fixing the system that made the shortcut tempting. Discipline and a board report fit reckless behavior. Doing nothing leaves a bypass that can let a wrong client error through.",
      sources: [MARX, { body: "Government of Ontario", work: "Nursing Act, 1991, S.O. 1991, c. 32", year: 1991, url: "https://www.ontario.ca/laws/statute/91n32" }],
      canada:
        "In Canada, nurses answer to a provincial or territorial nursing regulator, such as the College of Nurses of Ontario, not a state board of nursing.",
    }),
    kind: "mc",
    options: [
      { text: "Begin formal discipline for breaking the policy", why: "Discipline fits reckless behavior. This nurse took a shortcut without seeing the risk." },
      { text: "Coach the nurse and look at why scanning is slow", why: "At-risk behavior calls for coaching and a fix to the system that invites the shortcut." },
      { text: "Take no action because no harm has occurred", why: "The workaround defeats the barcode check. Harm is possible even if none has happened yet." },
      { text: "Report the nurse to the state board of nursing", why: "A board report is not the response to at-risk behavior that coaching can correct." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s02-15", {
      topic: "Client request to read the chart",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "A client admitted 2 days ago asks the nurse, \"Can I read what is written in my chart?\" How should the nurse respond?",
      rationale:
        "Under HIPAA a person has the right to see and get a copy of their own health record. The nurse supports the request and starts the agency's process. The client does not need the provider's permission. The record is kept by the hospital, but the information belongs to the client. There is no rule that access must wait until discharge.",
      sources: [HIPAA_ACCESS, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada. Provincial health information laws give clients a right of access to their own records, such as section 52 of Ontario's Personal Health Information Protection Act, 2004.",
    }),
    kind: "mc",
    options: [
      { text: "\"Only your provider can decide if you may see it.\"", why: "The right of access belongs to the client. It does not depend on provider permission." },
      { text: "\"The chart belongs to the hospital, not to you.\"", why: "The hospital keeps the record, but the client has a legal right to see it." },
      { text: "\"You can read it after you are discharged.\"", why: "The right of access does not start at discharge." },
      { text: "\"You have that right. I will start the request.\"", why: "HIPAA gives the client access to their own record through the agency's process." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-16", {
      topic: "Correcting a paper charting error",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "The nurse wrote \"left leg\" instead of \"right leg\" in a paper nursing note. Place the steps to correct the entry in order.",
      rationale:
        "A single line through the wrong words keeps them readable. The nurse labels the change as a mistaken entry and initials it so the reader knows who changed it. The correct words follow. Correction fluid and rewriting the page hide the original entry. Hiding an entry can look like tampering.",
      sources: [POTTER, ANA_DOC],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third"],
    tokens: [
      { text: "Write the correct words", why: "The correct words come last, after the error is marked." },
      { text: "Cover the words with correction fluid", why: "Hiding the words can look like tampering with the record." },
      { text: "Draw one line through the wrong words", why: "One line keeps the original words readable." },
      { text: "Rewrite the page on a new sheet", why: "Replacing a page removes the original record." },
      { text: "Label it a mistaken entry and initial it", why: "The label and initials show what was changed and by whom." },
    ],
    correct: [2, 4, 0],
  },
  {
    ...meta("rn-s02-17", {
      topic: "Reading readmission data after teach-back",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      trend: true,
      stem: "A medical unit started a teach-back program for heart failure discharges at the start of Q2. The nurse reviews the unit's quality data for the year. Which conclusion is best supported by the data?",
      tabs: [
        {
          title: "Unit Quality Data",
          table: {
            head: ["Measure", "Q1", "Q2", "Q3", "Q4"],
            rows: [
              ["Heart failure discharges", "60", "64", "58", "62"],
              ["Readmitted within 30 days", "15", "12", "9", "7"],
              ["Readmission rate (%)", "25", "19", "16", "11"],
              ["Teach-back documented (%)", "10", "55", "78", "92"],
            ],
          },
        },
      ],
      rationale:
        "Discharges stay between 58 and 64 each quarter. Over the same time the readmission rate falls from 25% to 11%. Documented teach-back rises from 10% to 92%. The rate fell as teach-back use rose. The data show a link over time, not proof of cause. Fewer discharges cannot explain the fall. By Q4 teach-back use is high enough to judge.",
      sources: [TEACHBACK, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Readmissions fell because fewer clients went home", why: "Discharges stayed between 58 and 64 each quarter, so volume does not explain it." },
      { text: "The program had no effect on readmission rates", why: "The rate fell from 25% to 11% while teach-back use rose." },
      { text: "Readmission rates fell as teach-back use rose", why: "The two measures move together over four quarters." },
      { text: "Teach-back use is too low to judge its effect", why: "Teach-back was documented for 92% of discharges by Q4." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-18", {
      topic: "Naming a conflict strategy",
      cjmm: "analyze",
      process: "communication",
      difficulty: 2,
      stem: "Two nurses both ask for the last week of December off. The manager meets with them. One nurse needs December 24 for a family event. The other needs December 31 for a flight. They build a schedule that gives each nurse the day they need. Which conflict strategy did they use?",
      rationale:
        "Collaborating means both parties work together until each fully meets their goal. Each nurse got the exact day they needed. In compromising, each side gives up part of what it wants. In accommodating, one side yields to the other. In avoiding, the conflict is left unresolved.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "Collaborating", why: "Both nurses fully met their needs by working out a shared solution." },
      { text: "Compromising", why: "Compromise means each side gives something up. Neither nurse gave up the needed day." },
      { text: "Accommodating", why: "Accommodating means one side yields. Neither nurse yielded." },
      { text: "Avoiding", why: "Avoiding leaves the conflict unresolved. This conflict was resolved." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s02-19", {
      topic: "Stage of planned change",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse manager plans to move shift report to the bedside. Before any change, the manager shares unit data on handoff errors. The manager also asks staff what worries them about the current report. Which stage of Lewin's change theory does this reflect?",
      rationale:
        "Lewin describes three stages: unfreezing, moving and refreezing. Unfreezing creates the felt need for change and brings out resistance. Sharing error data and asking about concerns does both. Moving is when the new practice starts. Refreezing makes the new practice the norm. Maintaining is not one of Lewin's stages.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "Refreezing", why: "Refreezing makes the new practice stable. No change has started yet." },
      { text: "Moving", why: "Moving is when staff begin the new practice. The change has not begun." },
      { text: "Unfreezing", why: "Showing the need for change and hearing concerns prepares staff to let go of the old way." },
      { text: "Maintaining", why: "Maintaining is not one of Lewin's three stages." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-20", {
      topic: "Charge nurse response to short staffing",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "Two nurses call in sick on a medical unit. The charge nurse has 4 RNs for 28 clients instead of the usual 6 RNs. Which actions should the charge nurse take? Select all that apply.",
      rationale:
        "The charge nurse tells the supervisor so the shortage is on record and help can be sought. Float or on-call staff are requested. Assignments are made by client acuity and nurse skill, not by equal numbers. Nonurgent tasks are put off so essential care gets done. Admission assessments need an RN. Holding discharges keeps beds full and adds work.",
      sources: [YODER],
    }),
    kind: "sata",
    options: [
      { text: "Give each nurse an equal number of clients", why: "Equal numbers ignore acuity. One nurse may get several unstable clients." },
      { text: "Tell the nursing supervisor about the shortage", why: "The supervisor can find staff and needs to know the unit is short." },
      { text: "Ask the AP to do admission assessments", why: "Admission assessment needs an RN. It cannot go to an AP." },
      { text: "Assign clients by acuity and nurse skill", why: "Matching acuity and skill keeps the sickest clients with the right nurses." },
      { text: "Request float or on-call staff", why: "Extra staff reduces the load on each nurse." },
      { text: "Hold planned discharges until the oncoming shift arrives", why: "Delaying discharges keeps beds full and adds work to a short shift." },
      { text: "Postpone nonurgent tasks such as linen changes", why: "Putting off nonurgent tasks frees time for essential care." },
    ],
    correct: [1, 3, 4, 6],
  },
];
