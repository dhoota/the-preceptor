import type { Item } from "@/engine/types";
import { ANA_DOC, HINKLE, HIPAA_DEID, HIPAA_DIRECTORY, IHI_MEASURES, IHI_TOOLKIT, LOWDERMILK, POTTER, RCA2, TEAMSTEPPS, YODER, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s05-11", {
      topic: "Using a Pareto chart to pick a focus",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 1,
      stem: "A unit team sorts 120 medication event reports into a Pareto chart. There are 54 late doses, 30 missed barcode scans, 20 wrong times charted and 16 other causes. Where should the team focus its first changes?",
      rationale:
        "A Pareto chart ranks causes from most to least frequent. A few categories usually account for most of the problem. Late doses are the largest category at 54 of 120 reports. Work on that category offers the largest gain. Missed scans, charting times and other causes are smaller categories that can follow.",
      sources: [IHI_TOOLKIT],
    }),
    kind: "mc",
    options: [
      { text: "Late doses", why: "At 54 of 120 reports, late doses are the largest category." },
      { text: "Missed barcode scans", why: "Missed scans are the second largest category at 30 reports." },
      { text: "Wrong times charted", why: "Charting times account for 20 reports, fewer than late doses." },
      { text: "Other causes", why: "Other causes are the smallest group at 16 reports and are mixed." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-12", {
      topic: "Stronger actions after a heparin event",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client received a heparin overdose after a nurse picked a high-strength vial instead of a low-strength vial. The root cause analysis team lists possible actions. Which actions are stronger actions in the action hierarchy? Select all that apply.",
      rationale:
        "Stronger actions change the system so the error is hard to make. Removing high-strength vials from unit stock takes the wrong choice away. Supplying only premixed bags from pharmacy standardizes the process. Retraining, warning stickers, a new double check policy and a staff meeting all depend on people remembering. They are weaker actions and are unlikely to prevent a repeat on their own.",
      sources: [RCA2],
    }),
    kind: "sata",
    options: [
      { text: "Retrain nurses on reading vial labels", why: "Training relies on memory and attention. It is a weaker action." },
      { text: "Remove high-strength vials from unit stock", why: "Taking the vial off the unit removes the chance to pick it." },
      { text: "Put a caution sticker on the vial bin", why: "A warning label relies on people noticing it. It is a weaker action." },
      { text: "Write a new policy requiring a double check", why: "New policies and double checks are weaker actions in the hierarchy." },
      { text: "Supply heparin only as premixed pharmacy bags", why: "Standardizing the product removes the vial choice. This is a stronger action." },
      { text: "Hold a staff meeting to review the event", why: "A meeting raises awareness but does not change the system." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s05-13", {
      topic: "Stating a safety concern to a surgeon",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A client is 1 day after bowel surgery. Heart rate is 124/minute, BP is 88/50 mmHg and the client is newly confused. The nurse calls the surgeon, who says to recheck in 4 hours. Using TeamSTEPPS language, which statement should the nurse make next?",
      rationale:
        "The heart rate of 124/minute, BP of 88/50 mmHg and new confusion signal possible shock. Waiting 4 hours is unsafe. CUS phrasing states concern, discomfort and a safety issue in words the team agrees will stop the action. Agreeing to wait accepts an unsafe plan. A vague request and a soft guess do not convey urgency.",
      sources: [TEAMSTEPPS],
    }),
    kind: "mc",
    options: [
      { text: "\"I will recheck the vital signs in 4 hours.\"", why: "This accepts a delay while the client shows signs of shock." },
      { text: "\"Could you come see the client when you can?\"", why: "This request is polite but does not state the danger." },
      { text: "\"I think the client may be a bit dry today.\"", why: "A soft guess does not signal that the client may be in shock." },
      { text: "\"I am concerned. This is a safety issue.\"", why: "CUS words tell the surgeon the nurse sees a safety risk that needs action now." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s05-14", {
      topic: "Removing identifiers from a conference slide",
      cjmm: "recognize",
      process: "communication",
      difficulty: 3,
      stem: "A nurse prepares a slide about a client fall for a regional nursing conference. The slide must meet the HIPAA Safe Harbor method for de-identified data. Click to highlight the items that must be removed.",
      rationale:
        "Safe Harbor removes names and their parts, such as initials. It removes ages over 89 and every date element except the year. It removes full ZIP codes and record numbers. The age of 93, the admission date, the ZIP code, the initials and the record number must go. The diagnosis, the shift, the alarm status and the discharge setting do not identify the client.",
      refs: ["Safe Harbor removes names and initials, ages over 89, all date elements except the year, full ZIP codes and medical record numbers."],
      sources: [HIPAA_DEID, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A, section 2", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada: "HIPAA and its Safe Harbor list do not apply in Canada. Ontario's PHIPA defines de-identifying as removing any information that could reasonably be used to identify the client, rather than a fixed list. Other provinces vary.",
    }),
    kind: "highlight",
    passage:
      "[[Initials J.R.]]\n[[Age 93]]\n[[Hip fracture repair]]\n[[Admitted on March 3]]\n[[ZIP code 60614]]\n[[Record number 448120]]\n[[Fell on the night shift]]\n[[Bed alarm was off]]\n[[Discharged to rehabilitation]]",
    spans: [
      { text: "Initials J.R.", why: "Initials are a part of a name and are not allowed under Safe Harbor." },
      { text: "Age 93", why: "Ages over 89 must be grouped or removed." },
      { text: "Hip fracture repair", why: "A diagnosis alone is not one of the listed identifiers." },
      { text: "Admitted on March 3", why: "Dates more specific than the year must be removed." },
      { text: "ZIP code 60614", why: "A full ZIP code is a geographic identifier." },
      { text: "Record number 448120", why: "A medical record number is a listed identifier." },
      { text: "Fell on the night shift", why: "The shift does not identify the client." },
      { text: "Bed alarm was off", why: "Equipment status is event detail, not an identifier." },
      { text: "Discharged to rehabilitation", why: "A general care setting does not identify the client." },
    ],
    correct: [0, 1, 3, 4, 5],
  },
  {
    ...meta("rn-s05-15", {
      topic: "First client to see on a labor unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "Four clients are on the labor and birth unit at shift change. Which client does the nurse assess before the other three?",
      rationale:
        "Late decelerations after each contraction point to reduced blood flow to the fetus. With oxytocin running, the nurse stops the infusion and starts intrauterine resuscitation. Dilation of 4 cm with contractions every 4 minutes is expected labor. A BP of 112/68 mmHg after an epidural is normal. A firm fundus at the umbilicus 2 hours after birth is expected.",
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "39 weeks, 4 cm dilated, contractions every 4 minutes, membranes intact", why: "This is the expected pattern of early active labor." },
      { text: "Oxytocin infusion, late decelerations after each contraction", why: "Recurrent late decelerations signal fetal hypoxia and need action now." },
      { text: "38 weeks, epidural in place, BP 112/68 mmHg", why: "This BP is normal and shows no hypotension after the epidural." },
      { text: "2 hours after birth, fundus firm at the umbilicus", why: "A firm fundus at the umbilicus is expected soon after birth." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-16", {
      topic: "Charting a refused dose",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "At 0900 a client refuses a prescribed dose of enoxaparin after the nurse explains its purpose. Which entries belong in the electronic record? Select all that apply.",
      rationale:
        "The record shows what happened and what the nurse did. It holds the client's own reason, the teaching given and the provider notification with the time. The dose is charted as not given with the reason. Marking it given is false charting. A personal opinion is not objective data. The chart does not mention an incident report.",
      sources: [ANA_DOC, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "The nurse's view that the client is difficult", why: "A label is an opinion. The chart records facts and the client's words." },
      { text: "The client's stated reason for refusing", why: "The client's own words explain the refusal." },
      { text: "The dose marked given to clear the task list", why: "Charting a dose that was not given is false documentation." },
      { text: "An entry that an incident report was filed", why: "Incident reports are quality records and are not referenced in the chart." },
      { text: "The teaching given about the drug's purpose", why: "This shows the refusal was an informed choice." },
      { text: "The time the provider was told of the refusal", why: "Notification shows the team knows the dose was missed." },
      { text: "The dose charted as not given, with the reason", why: "This keeps the medication record accurate." },
    ],
    correct: [1, 4, 5, 6],
  },
  {
    ...meta("rn-s05-17", {
      topic: "Scanning data after a unit campaign",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      trend: true,
      stem: "A unit began a barcode scanning campaign at the start of month 1. The nurse on the quality team reviews the data. Which conclusion is best supported by the trend?",
      tabs: [
        {
          title: "Medication Safety Data",
          table: {
            head: ["Measure", "Month 1", "Month 2", "Month 3", "Month 4"],
            rows: [
              ["Doses scanned (%)", "78", "86", "93", "97"],
              ["Scan overrides per 1000 doses", "41", "28", "15", "9"],
              ["Wrong-drug errors reaching clients", "4", "3", "1", "0"],
            ],
          },
        },
      ],
      rationale:
        "Doses scanned rose from 78% to 97%. Overrides fell from 41 to 9 per 1000 doses. Wrong-drug errors that reached clients fell from 4 to 0. All three measures moved in the direction the campaign wanted. Scanning did not reach every dose, because month 4 shows 97%.",
      sources: [IHI_MEASURES, YODER],
    }),
    kind: "mc",
    options: [
      { text: "Errors reaching clients rose over the months", why: "Errors reaching clients fell from 4 to 0." },
      { text: "Overrides held steady while scanning rose", why: "Overrides fell from 41 to 9 per 1000 doses." },
      { text: "More scanning went with fewer overrides and errors", why: "Scanning rose while overrides and errors fell." },
      { text: "Scanning reached every dose by month 4", why: "Month 4 shows 97% of doses scanned, not all of them." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s05-18", {
      topic: "Caller asks about a client who opted out",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A client admitted for alcohol withdrawal asked at admission not to be listed in the facility directory. A caller who says she is the client's sister asks the nurse for the client's room number. What should the nurse say?",
      rationale:
        "A client may opt out of the facility directory. Once they do, staff do not confirm that the client is in the facility. Giving the room number or hinting at the reason for admission discloses information the client chose to keep private. A birth date may confirm who the caller is, but it does not undo the client's opt out.",
      sources: [HIPAA_DIRECTORY, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A, section 38(3)", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada: "HIPAA does not apply in Canada, and health privacy law varies by province. Ontario's PHIPA s. 38(3) lets a facility confirm a client's presence, location and general health status only if the client was offered the chance to object and did not.",
    }),
    kind: "mc",
    options: [
      { text: "\"I cannot confirm that this person is a client here.\"", why: "This respects the client's choice to stay out of the directory." },
      { text: "\"The client is in room 512, but that is all I can say.\"", why: "Giving the room confirms the admission against the client's wish." },
      { text: "\"Please call back once the withdrawal has settled.\"", why: "This reveals both the admission and the reason for it." },
      { text: "\"Give me the client's birth date and I will connect you.\"", why: "Checking the caller's knowledge does not override the opt out." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-19", {
      topic: "Choosing the first client and the reason",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "After report, the nurse on a surgical unit has four clients. One is 1 day after thyroidectomy and reports tingling around the mouth. One has COPD with SpO2 90% on 2 L/minute of oxygen, the same as overnight. One has a new colostomy and asks when the ostomy nurse will visit. One has heart failure and weighs 0.5 kg more than yesterday. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Tingling around the mouth after thyroidectomy suggests low calcium from parathyroid injury. Low calcium can progress to tetany and laryngospasm, which threatens the airway. An SpO2 of 90% that matches overnight is stable for this client with COPD. Stoma teaching matters but is not urgent. A gain of 0.5 kg in a day is below the usual threshold for a heart failure alert.",
      refs: ["Clients with heart failure usually report a gain of 0.9 kg (2 lb) or more in a day or 2.3 kg (5 lb) or more in a week."],
      sources: [HINKLE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The nurse should see {0} first because {1}.",
    blanks: [
      {
        options: [
          { text: "the client with COPD", why: "An SpO2 of 90% that matches overnight is stable for this client." },
          { text: "the client after thyroidectomy", why: "Perioral tingling after thyroid surgery signals low calcium and airway risk." },
          { text: "the client with a colostomy", why: "A question about teaching is not an urgent physical need." },
          { text: "the client with heart failure", why: "A gain of 0.5 kg in a day is below the usual alert threshold." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "an SpO2 of 90% is below normal", why: "This saturation is unchanged and acceptable for this client with COPD." },
          { text: "stoma teaching must start early", why: "Teaching is important but can follow urgent physical needs." },
          { text: "weight gain signals fluid overload", why: "A gain of 0.5 kg is too small to signal overload by itself." },
          { text: "low calcium can cause laryngospasm", why: "Hypocalcemia can progress to tetany and airway spasm." },
        ],
        correct: 3,
      },
    ],
  },
  {
    ...meta("rn-s05-20", {
      topic: "Balancing measure for early discharges",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A surgical unit tests a change to discharge clients before 1100 so beds open sooner. The team tracks the share of discharges done before 1100. Which measure should the team add as a balancing measure?",
      rationale:
        "A balancing measure checks whether a change causes problems elsewhere in the system. Rushing discharges could send clients home before they are ready. Readmissions within 30 days would show that harm. The share of early discharges and the timing of discharge orders are process measures. Time from bed cleaning to the next admission tracks the goal of the change.",
      sources: [IHI_MEASURES],
    }),
    kind: "mc",
    options: [
      { text: "Share of discharge orders written by 0900", why: "This is a process measure that helps early discharge happen." },
      { text: "Time from bed cleaning to the next admission", why: "This tracks the intended gain of freeing beds sooner." },
      { text: "Share of all discharges done before 1100", why: "This is the main measure the team already tracks." },
      { text: "Readmissions within 30 days of discharge", why: "A rise would show that faster discharges are harming clients." },
    ],
    correct: 3,
  },
];
