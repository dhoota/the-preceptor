import type { Item, Source } from "@/engine/types";
import { ANA_DOC, HINKLE, HIPAA, POTTER, RRT, SAFER_ID, YODER, meta } from "./common";

const ENOX: Source = {
  body: "Sanofi-Aventis US. US Food and Drug Administration",
  work: "Enoxaparin Sodium Injection (Lovenox) Prescribing Information, Dosage in Severe Renal Impairment",
  year: 2021,
  url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/020164s129lbl.pdf",
};

export const PART4: Item[] = [
  {
    ...meta("rn-s05-31", {
      topic: "Entries charted in the wrong record",
      cjmm: "analyze",
      process: "communication",
      difficulty: 3,
      stem: "A client had a right total knee arthroplasty yesterday. Admission weight was 61 kg. The nurse reviews today's entries in the client's electronic record. Which two entries suggest data were charted in the wrong client's record? Select two.",
      rationale:
        "The surgery was on the right knee, so a left knee dressing entry does not fit this client. A weight of 102 kg cannot follow an admission weight of 61 kg one day earlier. Both point to charting in the wrong record, which is a client identification error. Pain after oxycodone, machine use, pedal pulses and walking with a physical therapist all fit the day after knee surgery.",
      sources: [SAFER_ID, ANA_DOC],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Left knee dressing reinforced at 0400", why: "The client's surgery was on the right knee." },
      { text: "Pain 4 of 10 after oral oxycodone", why: "Moderate pain after knee surgery fits this client." },
      { text: "Continuous passive motion used for 2 hours", why: "Passive motion therapy is common after knee replacement." },
      { text: "Pedal pulses present in both feet", why: "This is an expected circulation check after knee surgery." },
      { text: "Weight 102 kg at 0600", why: "A gain from 61 kg in one day does not fit this client." },
      { text: "Walked with a walker and a physical therapist", why: "Early walking with help is expected after knee replacement." },
    ],
    correct: [0, 4],
  },
  {
    ...meta("rn-s05-32", {
      topic: "Correcting an entry in the wrong chart",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A nurse realizes that a full head-to-toe assessment was entered in the electronic record of the client in the next room. What should the nurse do?",
      rationale:
        "An entry in the wrong record is corrected, not erased. The nurse uses the facility process to mark it entered in error, which keeps an audit trail. The assessment is then charted in the right record. Deleting the entry hides what happened. Leaving it in place lets wrong data guide care. Another nurse cannot correct an entry the first nurse made.",
      sources: [ANA_DOC, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Delete the entry so the other record is clean", why: "Deleting removes the audit trail. Errors are marked, not erased." },
      { text: "Mark the entry in error and chart it in the right record", why: "This keeps the audit trail and puts the data where it belongs." },
      { text: "Leave the entry and add a note in the right client's record", why: "Wrong data left in the other record could guide that client's care." },
      { text: "Ask the other client's nurse to overwrite the entry", why: "Only the author corrects an entry, and overwriting hides the error." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-33", {
      topic: "Portal message that reports chest pressure",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A clinic nurse reads a portal message that a 58-year-old client sent 20 minutes ago: \"I have had pressure in my chest and my left arm aches since breakfast.\" Which actions should the nurse take? Select all that apply.",
      rationale:
        "Chest pressure with arm pain may be acute coronary syndrome. A portal is not a safe channel for an emergency, so the nurse phones the client right away. The client is told to call 911 for emergency transport. The provider is told, and the message, call and advice are charted. A visit next week, driving in or waiting for the provider delays care.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Reply in the portal to book a visit next week", why: "A delayed visit is unsafe for possible acute coronary syndrome." },
      { text: "Phone the client right away", why: "A phone call reaches the client faster than the portal." },
      { text: "Tell the client to call 911 now", why: "Emergency transport allows care to start on the way." },
      { text: "Advise the client to drive to the clinic", why: "Driving delays care and is unsafe during possible heart attack." },
      { text: "Notify the primary health care provider", why: "The provider needs to know about a possible cardiac event." },
      { text: "Chart the message, the call and the advice", why: "The record shows the response to an urgent message." },
      { text: "Wait for the provider to read the message", why: "Waiting delays emergency care." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s05-34", {
      topic: "Which task list alert to act on first",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "At the start of the shift, the nurse's electronic task list shows four new notifications. Which notification should the nurse act on first?",
      rationale:
        "A potassium of 2.8 mEq/L is low. Low potassium raises the risk of digoxin toxicity and dangerous dysrhythmias, so it needs action now. A delay of 30 minutes in an antibiotic is minor. An A1C result guides long-term care. A delivery planned for tomorrow can wait.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report potassium in mmol/L only, so this result reads 2.8 mmol/L. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the range and still reports A1C as a percentage.",
    }),
    kind: "mc",
    options: [
      { text: "Potassium 2.8 mEq/L (2.8 mmol/L) in a client on digoxin", why: "Low potassium with digoxin can trigger a dangerous dysrhythmia." },
      { text: "Pharmacy says a 1000 antibiotic will be 30 minutes late", why: "A short delay in a scheduled antibiotic is not an immediate risk." },
      { text: "A morning hemoglobin A1C result of 8.2% is available", why: "A1C reflects long-term control and is not urgent." },
      { text: "Home oxygen delivery is set for tomorrow morning", why: "A delivery planned for tomorrow needs no action now." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-35", {
      topic: "Referral for a client who cannot afford drugs",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 66-year-old client with heart failure is readmitted with fluid overload. The client says, \"I cut my water pills in half so they last longer. I lost my job last month.\" The client lives alone, cooks low-salt meals and states the medication schedule correctly. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The client splits pills to stretch the supply after losing a job. This is a cost barrier, not a knowledge gap. A social worker can link the client to drug assistance and financial resources. Low-salt cooking shows diet is not the problem. A correct schedule shows understanding. Fluid overload is the result of the missed doses, not the reason for the referral.",
      sources: [HINKLE, POTTER, { body: "Government of Ontario", work: "Get coverage for prescription drugs: Ontario Drug Benefit program", year: 2026, url: "https://www.ontario.ca/page/get-coverage-prescription-drugs" }],
      canada: "Public drug coverage varies by province. An Ontario resident of this age is enrolled automatically in the Ontario Drug Benefit, with a $100 yearly deductible and up to $6.11 per prescription.",
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The nurse should request a referral to {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "a dietitian", why: "The client already cooks low-salt meals." },
          { text: "a social worker", why: "A social worker addresses the cost barrier and job loss." },
          { text: "cardiac rehabilitation", why: "Exercise training does not solve the cost problem." },
          { text: "an occupational therapist", why: "No problem with daily tasks is described." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "cooking low-salt meals", why: "This shows good diet habits and needs no referral." },
          { text: "a correct medication schedule", why: "This shows understanding, not a need." },
          { text: "splitting pills to stretch them", why: "Rationing pills shows the client cannot afford the full dose." },
          { text: "an age of 66 years", why: "Age alone does not show a need for this referral." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "fluid overload on admission", why: "This is the result of the missed doses, not the reason for referral." },
          { text: "a recent job loss", why: "Loss of income explains why the client rations the drug." },
          { text: "knowledge of the schedule", why: "Knowledge is not the problem here." },
          { text: "a readmission for heart failure", why: "The readmission is the outcome, not the cause to address." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s05-36", {
      topic: "Kidney dosing question for a new anticoagulant",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A 79-year-old client has a creatinine clearance of 25 mL/minute. A new prescription reads enoxaparin 1 mg/kg subcut every 12 hours. The dose is due now. What should the nurse do?",
      rationale:
        "A creatinine clearance of 25 mL/minute is below 30 mL/minute. At this level, treatment dosing of enoxaparin is reduced to once daily because the drug builds up and raises bleeding risk. The nurse holds the dose and contacts the prescriber and pharmacist to clarify. Giving it first risks harm. The nurse cannot change the dose or timing without a new prescription.",
      refs: ["Enoxaparin treatment dosing is 1 mg/kg once daily when creatinine clearance is below 30 mL/minute."],
      sources: [ENOX],
    }),
    kind: "mc",
    options: [
      { text: "Give the dose now and recheck the kidney function tests tomorrow", why: "Giving a dose too frequent for this kidney function raises bleeding risk." },
      { text: "Give half the dose until the prescriber calls back", why: "The nurse cannot change a dose without a prescription." },
      { text: "Hold the dose and contact the prescriber and pharmacist", why: "The dosing does not match the kidney function and needs clarification." },
      { text: "Change the timing to once daily in the record", why: "Changing the schedule is outside the nurse's scope without a new prescription." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s05-37", {
      topic: "Reading a record access audit",
      cjmm: "recognize",
      process: "communication",
      difficulty: 4,
      stem: "The nurse manager reviews an audit report of electronic record access on the unit. Which entries show access without a job need? Select all that apply.",
      rationale:
        "Staff may open a record only for a treatment, payment or operations purpose tied to their role. Viewing a family member's chart, a public figure's chart after discharge and an ex-spouse's chart serve no job purpose. A nurse opening the chart of a client on another unit without an assignment has no need either. A clerk printing a face sheet for a transfer, a pharmacist checking a new prescription and a therapist opening a caseload chart all have a job need.",
      sources: [HIPAA],
    }),
    kind: "sata",
    options: [
      { text: "A unit clerk prints a face sheet for a transfer", why: "Preparing a transfer is part of the clerk's job." },
      { text: "A nurse opens the chart of her own father", why: "Being family does not create a job need to open the record." },
      { text: "A pharmacist reviews a client's new prescription", why: "Verifying prescriptions is part of the pharmacist's role." },
      { text: "A therapist opens the chart of a caseload client", why: "The therapist is treating this client." },
      { text: "A nurse views a public figure's chart after discharge", why: "Curiosity after discharge is not a job purpose." },
      { text: "An aide opens the chart of her former spouse", why: "Personal interest is not a job purpose." },
      { text: "A nurse with no assignment there opens a chart on another unit", why: "Without an assignment there is no care role for that client." },
    ],
    correct: [1, 4, 5, 6],
  },
  {
    ...meta("rn-s05-38", {
      topic: "New nurse's view of setting priorities",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The charge nurse talks with a newly hired nurse about planning care for a group of clients. Which statement by the new nurse shows correct understanding?",
      rationale:
        "Priority setting puts threats to the airway, breathing and circulation ahead of other needs. A client with an airway problem is seen before a client in pain. Room order ignores urgency. A distressed family matters but does not outrank a physical threat. Finishing all scheduled drugs before any assessment could delay care for an unstable client.",
      sources: [POTTER, YODER],
    }),
    kind: "mc",
    options: [
      { text: "\"I see clients in order of their room numbers.\"", why: "Room order ignores how urgent each need is." },
      { text: "\"I see the client whose family is most upset first.\"", why: "Family distress does not outrank a physical threat." },
      { text: "\"I give all the 0900 drugs before I assess anyone.\"", why: "This could delay care for an unstable client." },
      { text: "\"I see an airway problem before a pain problem.\"", why: "Airway threats come before other needs." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s05-39", {
      topic: "Escalating care for a sedated client on a PCA",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client is 1 day after hip surgery and has a hydromorphone PCA. At 0300 the client is hard to arouse. Respirations are 7/minute and shallow, SpO2 is 86% on room air and heart rate is 64/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A client on an opioid PCA who is hard to arouse with respirations of 7/minute and an SpO2 of 86% has opioid-induced respiratory depression. The nurse stops the PCA so no more drug is given. The rapid response team brings extra help at the bedside. Respiratory rate and depth and sedation level show whether the client is recovering. A heart rate of 64/minute argues against embolism and shock, which raise the heart rate.",
      sources: [RRT, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Pulmonary embolism", why: "Embolism usually raises the heart rate and breathing rate. Here breathing is slow and the rate is 64/minute." },
      { text: "Hypovolemic shock", why: "Shock raises the heart rate. The rate is 64/minute." },
      { text: "Acute ischemic stroke", why: "No one-sided weakness or speech change is described." },
      { text: "Opioid respiratory depression", why: "Sedation and slow shallow breathing on an opioid PCA fit this condition." },
    ],
    actions: [
      { text: "Give a bolus dose from the PCA", why: "More opioid would deepen the respiratory depression." },
      { text: "Stop the PCA infusion", why: "Stopping the pump prevents more opioid from being given." },
      { text: "Let the client sleep and recheck in 1 hour", why: "Waiting risks respiratory arrest." },
      { text: "Call the rapid response team", why: "The team brings skilled help to a deteriorating client." },
      { text: "Coach use of the incentive spirometer", why: "A client who is hard to arouse cannot use a spirometer." },
    ],
    parameters: [
      { text: "Blood glucose level", why: "Glucose does not track opioid effect on breathing." },
      { text: "Respiratory rate and depth", why: "Breathing shows whether the opioid effect is easing." },
      { text: "Hourly urine output", why: "Urine output does not track respiratory depression." },
      { text: "Sedation level", why: "Sedation usually deepens before breathing slows further." },
      { text: "Serum potassium level", why: "Potassium does not track opioid effect." },
    ],
    correct: { condition: 3, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s05-40", {
      topic: "Staffing and falls over four quarters",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      trend: true,
      stem: "The nurse on a unit council reviews staffing and quality data for the past year. For each statement, specify whether it is supported or not supported by the data.",
      tabs: [
        {
          title: "Unit Quality Data",
          table: {
            head: ["Measure", "Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
            rows: [
              ["Nursing hours per client day", "8.1", "7.6", "7.2", "6.9"],
              ["Falls per 1000 client days", "2.2", "2.9", "3.4", "3.8"],
              ["Call lights answered after 5 minutes (%)", "12", "18", "24", "31"],
              ["Average daily census", "26", "26", "27", "26"],
            ],
          },
        },
      ],
      rationale:
        "Nursing hours fell from 8.1 to 6.9 per client day. Falls rose from 2.2 to 3.8 per 1000 client days. Slow call light responses rose from 12% to 31%. The census stayed near 26, so more clients do not explain fewer hours. Data from one unit over time show an association but do not prove cause. Falls were above 2.5 by quarter 2.",
      sources: [YODER],
    }),
    kind: "matrix",
    mode: "single",
    columns: ["Supported", "Not supported"],
    rows: [
      { text: "Nursing hours per client day fell each quarter", correct: [0], why: "Hours fell from 8.1 to 6.9 across the year." },
      { text: "Falls rose as nursing hours fell", correct: [0], why: "Falls rose from 2.2 to 3.8 as hours dropped." },
      { text: "A rising census explains the drop in hours", correct: [1], why: "The census stayed between 26 and 27." },
      { text: "Slow call light responses rose each quarter", correct: [0], why: "They rose from 12% to 31%." },
      { text: "The data prove low staffing caused the falls", correct: [1], why: "Trend data show association. Other factors may have changed." },
      { text: "Falls stayed below 2.5 per 1000 client days", correct: [1], why: "Falls reached 2.9 in quarter 2 and 3.8 in quarter 4." },
    ],
  },
];
