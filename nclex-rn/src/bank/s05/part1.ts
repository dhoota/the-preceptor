import type { Item } from "@/engine/types";
import { CLABSI, HINKLE, HIPAA, HIPAA_DIRECTORY, HIPAA_MESSAGES, IHI_MEASURES, ISMP_PUMPS, LANGLEY, NHSN, POTTER, RUN_CHART, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s05-01", {
      topic: "First client to see on an oncology unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "Report on the oncology unit ends at 0700. Of the four assigned clients, which one needs the nurse's first visit?",
      rationale:
        "A temperature of 38.3°C in a client with neutropenia is febrile neutropenia. The client cannot mount a normal response to infection, so sepsis can develop within hours. Cultures and antibiotics need to start promptly. A platelet count of 42 000/mm3 without bleeding calls for bleeding precautions. Nausea of 6 needs an antiemetic but is not a threat to life. Pain of 4 after morphine is controlled to a moderate level.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report platelets as x 10^9/L, so this count reads 42 x 10^9/L. The Medical Council of Canada lists 130 to 380 x 10^9/L as the adult range.",
    }),
    kind: "mc",
    options: [
      { text: "Leukemia, platelets 42 000/mm3, no signs of bleeding", why: "A low platelet count needs bleeding precautions. With no bleeding it is not the first concern." },
      { text: "Receiving chemotherapy, nausea rated 6 of 10", why: "Nausea needs an antiemetic soon. It does not threaten life the way sepsis does." },
      { text: "Neutropenia, temperature 38.3°C (100.9°F)", why: "Fever with neutropenia can progress to sepsis quickly. This client is seen first." },
      { text: "Bone metastases, pain 4 of 10 after oral morphine", why: "Pain has responded to the opioid. It can be rechecked after the febrile client." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s05-02", {
      topic: "Handling a printed report sheet",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "During a day shift the nurse carries a printed report sheet that lists client names, diagnoses and room numbers. Which actions protect client confidentiality? Select all that apply.",
      rationale:
        "A report sheet holds protected health information. The Privacy Rule expects reasonable safeguards for it. Keeping it on the nurse's person stops others from reading it. At shift end it goes into the locked shredding bin. A sheet left on a counter, taken home or put in open recycling can be read by people with no need to know. Handing it to a nurse who is not caring for those clients also discloses it without a need.",
      sources: [HIPAA, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Keep the sheet in a pocket during the shift", why: "The sheet stays with the nurse, so no one else can read it." },
      { text: "Leave the sheet on the counter at the station", why: "Visitors and staff without a need to know can read an unattended sheet." },
      { text: "Give the sheet to a nurse on another unit", why: "A nurse who is not caring for these clients has no need to see their information." },
      { text: "Take the sheet home to finish charting notes", why: "Removing the sheet from the facility exposes the information outside safeguards." },
      { text: "Put the sheet in the locked shredding bin", why: "Shredding destroys the information so it cannot be read after disposal." },
      { text: "Drop the sheet in the open recycling bin", why: "Open recycling can be read by anyone who handles it." },
    ],
    correct: [0, 4],
  },
  {
    ...meta("rn-s05-03", {
      topic: "Reading a shift on a run chart",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A unit tracks the weekly percentage of clients whose pain is reassessed within 1 hour after an as-needed opioid. The baseline median is 71%. After an electronic reminder starts, the next 7 weekly points all fall above the median. What does this pattern show?",
      rationale:
        "On a run chart, 6 or more consecutive points on one side of the median form a shift. Seven points above the median of 71% meet this rule. A shift is a signal of nonrandom change, and here it follows the reminder. A trend needs 5 or more points in a row that all rise or all fall. An astronomical point is a single value far from all the others.",
      refs: [
        "Run chart rules: a shift is 6 or more consecutive points above or below the median. A trend is 5 or more consecutive points all rising or all falling.",
      ],
      sources: [RUN_CHART],
    }),
    kind: "mc",
    options: [
      { text: "A shift that signals nonrandom change", why: "Seven points in a row above the median meet the shift rule." },
      { text: "Random variation scattered around the median", why: "Random variation would scatter points on both sides of the median." },
      { text: "A trend that shows steady decline", why: "A trend needs 5 or more points that all rise or all fall. No decline is described." },
      { text: "A single astronomical data point", why: "An astronomical point is one extreme value. Here seven points form a pattern." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s05-04", {
      topic: "Hard limit alert on a smart pump",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse programs a smart infusion pump for a prescribed insulin infusion. The pump shows a hard limit alert and will not start the infusion. What should the nurse do first?",
      rationale:
        "A hard limit blocks a dose outside the limits the facility set for that drug. It cannot be overridden at the pump. The nurse first checks the prescription, the concentration and the numbers entered, because a programming error is a common cause. If the prescription itself is outside the limit, the nurse contacts the prescriber and pharmacist. Basic mode or a second pump removes the dose error protection.",
      sources: [ISMP_PUMPS],
    }),
    kind: "mc",
    options: [
      { text: "Move the tubing to a pump without the drug library", why: "A pump without the library has no dose error protection for a high-alert drug." },
      { text: "Enter the rate again in the basic infusion mode", why: "Basic mode bypasses the drug library and the limit that caught the problem." },
      { text: "Ask a second nurse to override the hard limit", why: "A hard limit cannot be overridden at the pump by any user." },
      { text: "Recheck the prescription and the programmed dose", why: "The alert may reflect a keying or prescribing error that needs to be found." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s05-05", {
      topic: "Ordering visits after report on a medical unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "At 0800 the nurse on a medical unit reviews five assigned clients after report. Place the first four clients the nurse should see in priority order.",
      rationale:
        "Breathing comes first. An SpO2 of 89% with use of neck muscles shows a client working hard to breathe. A glucose of 58 mg/dL is hypoglycemia, and it worsens fast without treatment. A client at high fall risk who is calling to get up is a safety risk that is next. A scheduled oral antibiotic can be given on time after these. A sleeping client with pain of 2 is stable and is seen last.",
      sources: [POTTER, HINKLE, { body: "Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1)", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" }],
      canada: "Canadian labs report glucose in mmol/L only, so this result reads 3.2 mmol/L. Diabetes Canada uses a glucose below 4.0 mmol/L as the hypoglycemia threshold for people on insulin or an insulin secretagogue.",
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "High fall risk, calling to get up to the toilet", why: "A client at fall risk trying to get up is a safety need after airway and glucose." },
      { text: "Cellulitis, asleep, pain 2 of 10 at 0600", why: "This client is stable and comfortable. The visit can come last." },
      { text: "Asthma, SpO2 89%, using neck muscles to breathe", why: "Accessory muscle use with low saturation is a breathing problem. It comes first." },
      { text: "Pneumonia, oral antibiotic due at 0900", why: "A scheduled drug can be given on time once the urgent needs are met." },
      { text: "Glucose 58 mg/dL (3.2 mmol/L), sweaty and alert", why: "Hypoglycemia can progress to a seizure or loss of consciousness if not treated." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s05-06", {
      topic: "Leaving a voicemail for a client",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "The nurse calls a client at home to arrange a follow-up visit after a new cancer diagnosis. The call goes to a voicemail greeting that does not give the client's name. Which message should the nurse leave?",
      rationale:
        "Leaving a voicemail is allowed, but the message should hold only what is needed. The nurse's role, the clinic and a request to call back are enough. Anyone in the home may hear the message, and the greeting does not confirm whose phone it is. Naming oncology, a biopsy or cancer treatment reveals the diagnosis to whoever plays the message.",
      sources: [HIPAA_MESSAGES],
    }),
    kind: "mc",
    options: [
      { text: "\"Your oncology follow-up is on Monday at 1000.\"", why: "The word oncology reveals the diagnosis to anyone who hears the message." },
      { text: "\"This is the clinic nurse. Please call us back.\"", why: "A role and a request to call back protect privacy and still reach the client." },
      { text: "\"Your biopsy result is ready to review with us.\"", why: "Mentioning a biopsy result gives health details to anyone who plays the message." },
      { text: "\"Please call about your cancer treatment plan.\"", why: "This states the diagnosis on a phone that may not be the client's." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-07", {
      topic: "Clients to see first on a kidney unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "At 0730 a nephrology unit nurse holds a six-client assignment after handoff. Which two clients need a bedside check before the rest? Select two.",
      rationale:
        "A potassium of 6.6 mEq/L with new peaked T waves puts the heart at risk of a fatal dysrhythmia. New crackles with an SpO2 of 90% suggest fluid overload that now affects breathing. A fistula with a thrill and bruit is working. A dose due at 1000 is routine. Edema that matches yesterday is stable. Clear effluent at the expected volume is a normal exchange.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
      sources: [HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada: "Canadian labs report serum potassium in mmol/L only, so this result reads 6.6 mmol/L. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the reference range.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Chronic kidney disease, potassium 6.6 mEq/L (6.6 mmol/L), new peaked T waves", why: "Hyperkalemia with ECG changes can cause a fatal dysrhythmia." },
      { text: "Dialysis today, arteriovenous fistula with a thrill and bruit", why: "A thrill and bruit show the fistula is open. This is expected." },
      { text: "Kidney transplant, tacrolimus due at 1000", why: "A dose due later in the morning is routine and can wait." },
      { text: "Nephrotic syndrome, ankle edema the same as yesterday", why: "Edema that has not changed is a stable finding." },
      { text: "Acute kidney injury, new crackles, SpO2 90% on room air", why: "New crackles with low saturation suggest fluid overload affecting gas exchange." },
      { text: "Peritoneal dialysis, clear effluent at the expected volume", why: "Clear effluent at the expected volume is a normal exchange." },
    ],
    correct: [0, 4],
  },
  {
    ...meta("rn-s05-08", {
      topic: "Writing an aim for a falls project",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A unit practice council plans an improvement project to reduce falls on a medical unit. Which aim statement is written in the most useful form?",
      rationale:
        "A useful aim says how much, by when and for whom. Cutting falls from 4.2 to 3.0 per 1000 client days by June 30 gives a measurable target and a deadline. The team can then tell whether its changes work. Making falls a priority has no target. Teaching staff and adding alarms are possible changes to test, not aims.",
      sources: [LANGLEY, IHI_MEASURES],
    }),
    kind: "mc",
    options: [
      { text: "Make fall prevention a top priority for each shift this year", why: "This states intent but gives no measure or target to judge success." },
      { text: "Cut falls from 4.2 to 3.0 per 1000 client days by June 30", why: "It names the measure, the target and the deadline." },
      { text: "Teach fall prevention to the staff at the spring meetings", why: "Teaching is a change to test. It is not a measurable aim." },
      { text: "Place bed alarms on the beds of clients at high fall risk", why: "Bed alarms are an intervention. They do not state the result wanted." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s05-09", {
      topic: "Rising line infections in an ICU",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse on the ICU quality team reviews unit data. Last quarter the unit had 4 bloodstream infections in clients with central lines, up from 1 the quarter before. Audits show dressing changes are often late and connectors are not scrubbed before access. Complete the diagram by choosing the problem the team is addressing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Bloodstream infections in clients with central lines are central line-associated bloodstream infections. The audits point to two gaps. Scrubbing the connector before each access and changing dressings on time and when soiled close those gaps. The infection rate per 1000 central line days is the outcome measure. Audit compliance is the process measure that shows whether the changes are done. Routine line replacement, prophylactic antibiotics and antibiotic ointment are not recommended for this.",
      sources: [CLABSI, NHSN],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Surgical site infections", why: "The infections are in the blood of clients with central lines, not in incisions." },
      { text: "Central line-associated bloodstream infections", why: "Bloodstream infections in clients with central lines fit this problem." },
      { text: "Catheter-associated urinary infections", why: "The data describe bloodstream infections and central line care, not urinary catheters." },
      { text: "Ventilator-associated pneumonia", why: "The audits concern line dressings and connectors, not ventilator care." },
    ],
    actions: [
      { text: "Scrub each connector before line access", why: "Scrubbing the hub removes organisms before they enter the line." },
      { text: "Replace central lines on a weekly schedule", why: "Routine replacement is not recommended and adds insertion risk." },
      { text: "Change dressings on time and when soiled", why: "Late or soiled dressings let organisms reach the insertion site." },
      { text: "Start prophylactic antibiotics for line care", why: "Systemic prophylaxis is not recommended to prevent line infections." },
      { text: "Apply antibiotic ointment at insertion sites", why: "Ointment is not recommended for most central lines and can promote resistance." },
    ],
    parameters: [
      { text: "Mean length of stay on the unit", why: "Length of stay has many causes and does not track line infections directly." },
      { text: "Infection rate per 1000 central line days", why: "This is the standard outcome measure for line infections." },
      { text: "Client satisfaction survey scores", why: "Satisfaction does not measure infection or line care." },
      { text: "Hub scrub and dressing audit compliance", why: "Audit compliance shows whether the new practices are being done." },
      { text: "Number of lines inserted in surgery", why: "Insertion counts in surgery do not measure the maintenance gaps found." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s05-10", {
      topic: "Update for the spouse of a sedated client",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A client is sedated and on a ventilator after a car crash. The client's spouse has visited daily and helps with care decisions. The spouse asks the nurse how the client did overnight. The client has never asked that anyone be excluded. What should the nurse do?",
      rationale:
        "The Privacy Rule lets a nurse share information with a family member involved in care when the client cannot agree or object. The nurse uses professional judgment that sharing is in the client's best interest. The update is limited to what is relevant to the spouse's involvement. Waiting for consent from a sedated client blocks a lawful disclosure. The privacy officer and the provider are not the only people who may share it.",
      sources: [HIPAA_DIRECTORY, HIPAA, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A, section 26", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada: "HIPAA does not apply in Canada, and health privacy law varies by province. Ontario's PHIPA s. 26 lets the spouse of an incapable client consent to disclosure on the client's behalf, after any guardian, attorney or Board-appointed representative.",
    }),
    kind: "mc",
    options: [
      { text: "Ask the spouse to wait until the client can consent", why: "The client cannot agree or object now. The rule allows sharing in the client's interest." },
      { text: "Refer the question to the privacy officer", why: "A routine update to an involved spouse does not need the privacy officer." },
      { text: "Share how the client did overnight", why: "Sharing relevant information with an involved spouse is permitted when the client is incapacitated." },
      { text: "Tell the spouse only the provider can give updates", why: "Nurses may share relevant information within their role. It is not limited to the provider." },
    ],
    correct: 2,
  },
];
