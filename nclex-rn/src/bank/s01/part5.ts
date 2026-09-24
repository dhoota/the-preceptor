import type { Item } from "@/engine/types";
import { ANA_CODE, BEAUCHAMP, CMSA, HINKLE, LANGLEY, NAYLOR, POLST, POTTER, SUD, TJC_NPG, TJC_NPSG, YODER, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s01-41", {
      topic: "Signs of an impaired colleague",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "The charge nurse notes that one nurse has signed out hydromorphone far more often than other nurses this month. Three of that nurse's clients report no pain relief after doses the nurse charted. Today the nurse has slurred speech and pinpoint pupils and leaves the unit often. Complete the diagram by choosing the condition the charge nurse is most likely seeing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Heavy opioid sign-outs, clients without relief after charted doses, slurred speech, pinpoint pupils and frequent absences fit impairment with drug diversion. Client safety comes first, so the nurse is removed from care now. The concern goes to the nurse manager under policy. Opioid counts, waste records and pain scores after charted doses show whether diversion continues.",
      sources: [SUD, { body: "Government of Canada", work: "Narcotic Control Regulations, C.R.C., c. 1041, section 63", year: 2019, url: "https://laws-lois.justice.gc.ca/eng/regulations/C.R.C.,_c._1041/FullText.html" }],
      canada:
        "In Canada, the Narcotic Control Regulations require the person in charge of a hospital to report any loss or theft of a narcotic, such as hydromorphone, to Health Canada within 10 days of discovery.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Fatigue from extra shifts", why: "Fatigue does not explain pinpoint pupils or clients without pain relief." },
      { text: "Poor pain assessment skills", why: "Weak assessment does not explain heavy sign-outs or pinpoint pupils." },
      { text: "Low blood glucose episode", why: "Hypoglycemia can slur speech but does not explain the opioid pattern." },
      { text: "Impairment with drug diversion", why: "Heavy sign-outs, unrelieved clients and opioid signs fit diversion." },
    ],
    actions: [
      { text: "Confront the nurse in front of the team", why: "A public confrontation is unsafe and does not follow policy." },
      { text: "Remove the nurse from client care now", why: "An impaired nurse cannot give safe care. Clients are protected first." },
      { text: "Let the nurse finish the shift if watched", why: "Watching does not make care safe while the nurse is impaired." },
      { text: "Report the concern to the nurse manager", why: "The manager starts the facility's process for suspected diversion." },
      { text: "Tell the nurse to take a break and return", why: "A break does not end the impairment or the risk to clients." },
    ],
    parameters: [
      { text: "Hours of overtime the nurse works", why: "Overtime does not show whether diversion continues." },
      { text: "Opioid counts and waste records", why: "Count errors and heavy waste are markers of diversion." },
      { text: "Hand hygiene rates on the unit", why: "Hand hygiene rates do not relate to drug diversion." },
      { text: "Client satisfaction survey scores", why: "Survey scores are too broad and slow to track diversion." },
      { text: "Pain scores after charted doses", why: "Unrelieved pain after charted doses suggests clients are not getting the drug." },
    ],
    correct: { condition: 3, actions: [1, 3], parameters: [1, 4] },
  },
  {
    ...meta("rn-s01-42", {
      topic: "Choosing a client to move off telemetry",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The charge nurse must free a telemetry bed for a client coming from the emergency department. Which client is most appropriate to transfer to a medical unit without telemetry?",
      rationale:
        "A client with pneumonia who has stayed in sinus rhythm for 3 days has no ongoing need for rhythm monitoring. Chest pain with a pending troponin may be a heart attack. A new atrial fibrillation on a diltiazem infusion needs rate monitoring. Syncope of unknown cause admitted this morning may come from an arrhythmia. These three clients keep telemetry.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Client with chest pain 4 hours ago and a pending troponin", why: "A pending troponin means a heart attack is not yet ruled out." },
      { text: "Client with pneumonia in sinus rhythm for 3 days", why: "A stable rhythm for days shows no ongoing need for telemetry." },
      { text: "Client with new atrial fibrillation on a diltiazem drip", why: "A rate-control infusion needs continuous rhythm monitoring." },
      { text: "Client with syncope of unknown cause admitted today", why: "Unexplained fainting may be caused by an arrhythmia." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-43", {
      topic: "Supporting a decision to stop dialysis",
      cjmm: "generate",
      process: "caring",
      difficulty: 5,
      stem: "A 74-year-old client with end-stage kidney disease has decided to stop dialysis. The client has capacity and has discussed the choice with the primary health care provider. The client's son tells the nurse, \"You have to make her keep going.\" Which actions by the nurse support the client? Select all that apply.",
      rationale:
        "A client with capacity may refuse life-sustaining treatment. The nurse advocates by making sure the decision is recorded and by offering palliative care for comfort. A family meeting with the team helps the son understand the choice. Asking about symptom wishes keeps care centered on the client. Persuading her, delaying for the son or telling him he can override her all undercut her right to decide.",
      sources: [ANA_CODE, BEAUCHAMP],
    }),
    kind: "sata",
    options: [
      { text: "Try to persuade the client to continue", why: "Pressuring a capable client undercuts her right to decide." },
      { text: "Confirm the decision is documented", why: "A recorded decision guides every member of the team." },
      { text: "Offer a palliative care referral", why: "Palliative care manages symptoms after dialysis stops." },
      { text: "Tell the son he can override her choice", why: "Family cannot override a client who has capacity." },
      { text: "Arrange a family meeting with the team", why: "A meeting helps the son understand and cope with the decision." },
      { text: "Ask the client about symptom wishes", why: "Her preferences shape the plan for comfort care." },
      { text: "Delay stopping until the son agrees", why: "The client's decision does not depend on her son's agreement." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s01-44", {
      topic: "Discharge list that drops a home drug",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 68-year-old client is being discharged after treatment for pneumonia. The home medication list includes warfarin 5 mg daily for atrial fibrillation. The discharge list does not include warfarin, and no note explains the change. What should the nurse do?",
      rationale:
        "An unexplained difference between the home and discharge lists is a discrepancy. It must be resolved before the client leaves. Only the provider can decide whether warfarin continues. Telling the client to restart it or sending the list as written leaves the question open. A pharmacist does not add a drug without the provider's decision.",
      sources: [TJC_NPSG],
    }),
    kind: "mc",
    options: [
      { text: "Ask the provider about the missing warfarin", why: "The provider resolves the discrepancy before the client leaves." },
      { text: "Tell the client to restart warfarin at home", why: "The nurse cannot decide to continue a drug the provider left off." },
      { text: "Discharge the client with the list as written", why: "An unresolved gap may leave the client without stroke prevention." },
      { text: "Have the pharmacist add warfarin to the list", why: "A pharmacist does not add a drug without the provider's decision." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s01-45", {
      topic: "Steps of a small test of change",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A unit team wants to shorten the time between a call light and a staff response. Place the activities in the order of one Plan-Do-Study-Act cycle.",
      rationale:
        "The cycle starts with a plan that states a prediction. The team then runs a small test, here pagers on one hall for 2 weeks. Study compares results with the prediction. Act decides whether to adopt, adapt or drop the change. Disciplining slow staff is not part of the cycle and shifts focus from the system.",
      sources: [LANGLEY],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Plan", "Do", "Study", "Act"],
    tokens: [
      { text: "Compare response times before and during the test", why: "Study compares results with the prediction." },
      { text: "Discipline staff with the slowest response times", why: "Discipline is not a step of the cycle and blames people, not the system." },
      { text: "Predict that pagers will shorten response times", why: "The plan states the change and the expected result." },
      { text: "Adopt, adapt or drop the pagers based on results", why: "Act decides what to do with the change." },
      { text: "Test the pagers on one hall for 2 weeks", why: "Do runs the change on a small scale." },
    ],
    correct: [2, 4, 0, 3],
  },
  {
    ...meta("rn-s01-46", {
      topic: "Portable order for no resuscitation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A resident of a long-term care facility is found without a pulse and not breathing. The resident's POLST form, signed by the resident and the primary health care provider, orders no CPR. What should the nurse do?",
      rationale:
        "A POLST form is a medical order. With no pulse and no breathing, the CPR section applies. No CPR means no chest compressions and no defibrillator, including an automated one. The nurse follows the order and notifies the provider. The family is informed but does not need to be asked, because the order already reflects the resident's wishes.",
      sources: [POLST, { body: "Alberta Health Services", work: "Advance Care Planning and Goals of Care Designations, Information for Health Professionals", year: 2026, url: "https://www.albertahealthservices.ca/info/page9099.aspx" }],
      canada:
        "POLST is a US program. Canadian provinces use their own orders, such as the Goals of Care Designation in Alberta, and the forms and names vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "Start chest compressions and call 911", why: "Compressions go against a valid order for no CPR." },
      { text: "Call the family to ask whether to start CPR", why: "The order already states the resident's choice." },
      { text: "Follow the order and notify the provider", why: "The POLST form is a valid medical order that applies now." },
      { text: "Apply the automated defibrillator first", why: "No CPR includes no defibrillation." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s01-47", {
      topic: "Cues for a social work referral",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the discharge assessment of a 58-year-old client with new type 2 diabetes. Which findings indicate a need for a social work referral? Select all that apply.",
      rationale:
        "Skipped meals at month's end suggest food insecurity. Being unable to pay for a drug and having no transport to visits are barriers social work can address. A home glucose meter, daily walks and a supportive partner are strengths. A question about food labels is a teaching need for the nurse or dietitian.",
      sources: [CMSA, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Skips meals at the end of each month", why: "Running out of food suggests food insecurity." },
      { text: "Has a glucose meter at home", why: "Having a meter is a strength, not a barrier." },
      { text: "Cannot pay for the prescribed metformin", why: "Cost is a barrier social work can help address." },
      { text: "Walks for 30 minutes most days", why: "Regular activity is a strength for diabetes control." },
      { text: "Has no transport to clinic visits", why: "Lack of transport can cause missed follow-up." },
      { text: "Asks how to read the labels on food packages", why: "Label reading is a teaching need, not a social need." },
      { text: "Lives with a partner who offers support", why: "Family support is a strength." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s01-48", {
      topic: "Staff conflict in a public hallway",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "Two nurses argue loudly in the hallway about who should take a new admission. Clients and visitors can hear them. What should the charge nurse do first?",
      rationale:
        "A loud argument in front of clients harms trust and privacy. The first step is to move the talk to a private place. Then the charge nurse helps the two nurses work toward a shared solution. Handing the admission to a third nurse avoids the conflict. Reporting both nurses first skips resolution. Staying out lets the scene continue.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "Give the admission to a third nurse to end it", why: "This avoids the conflict and leaves its cause in place." },
      { text: "Move the discussion to a private area", why: "Moving away from clients stops the public scene and allows calm talk." },
      { text: "Report both nurses to the nurse manager", why: "Reporting is premature before the charge nurse tries to resolve it." },
      { text: "Let them settle it to avoid taking sides", why: "Staying out lets the argument continue in front of clients." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s01-49", {
      topic: "Checking a heart failure plan at home",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A home health nurse calls a 71-year-old client 3 days after discharge for heart failure. The plan was to weigh daily and call the clinic after a gain of 1 kg in a day. Which statement by the client shows the plan is working?",
      rationale:
        "The plan depends on daily weights and early calls. A call to the clinic after a gain of 1 kg shows both parts are in place. Weighing only when the ankles swell misses early fluid gain. Stopping the diuretic can cause fluid to build up. Putting off weights leaves gains unseen during the riskiest time after discharge.",
      sources: [NAYLOR, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I called the clinic when I gained 1 kg.\"", why: "Acting on the weight gain shows the plan is working." },
      { text: "\"I weigh myself when my ankles look puffy.\"", why: "Weighing only with swelling misses early fluid gain." },
      { text: "\"I stopped the water pill because I urinate a lot.\"", why: "Stopping the diuretic lets fluid build up." },
      { text: "\"I will start weighing once I feel settled.\"", why: "Delaying weights leaves early gain unnoticed." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s01-50", {
      topic: "Scanner fails to read a wristband",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give a 0900 dose of levetiracetam. The scanner does not read the client's wristband. What should the nurse do?",
      rationale:
        "Barcode scanning checks the right client and drug at the bedside. A fresh wristband lets the check happen as designed. Overriding the scan skips the safety check. A spare band on the chart or a label on the door is not attached to the client. Room location is not an accepted identifier.",
      sources: [TJC_NPG],
    }),
    kind: "mc",
    options: [
      { text: "Scan a spare wristband kept with the chart", why: "A band that is not on the client does not confirm who is in the bed." },
      { text: "Override the scan and give the dose on time", why: "An override skips the bedside identity and drug check." },
      { text: "Scan the barcode label on the room door", why: "Room location is not an accepted identifier." },
      { text: "Have a new wristband printed and then scan it", why: "A working band on the client allows the full barcode check." },
    ],
    correct: 3,
  },
];
