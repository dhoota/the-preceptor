import type { Item } from "@/engine/types";
import { CMS_HOSPICE, CMS_RIGHTS, GUIDO, HALTER, HINKLE, HIPAA_SUMMARY, IPASS, MERP, POTTER, SEPSIS, TELEHEALTH, YODER, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s03-21", {
      topic: "Consent for an adult under guardianship",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 26-year-old client with a severe intellectual disability needs a dental extraction under sedation. A court appointed the client's aunt as guardian of the person. The client's mother visits daily and asks to sign the consent form. Who should sign the consent?",
      rationale:
        "A court-appointed guardian of the person holds legal authority for health care decisions. The aunt signs. The mother has no legal authority, even though she is close to the client. The client should still hear a simple explanation and have a chance to agree. Implied consent applies only in an emergency, and this procedure is planned.",
      sources: [GUIDO, POTTER, { body: "Government of Ontario", work: "Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A", year: 1996, url: "https://www.ontario.ca/laws/statute/96h02" }],
      canada:
        "Substitute decision maker rules vary by province. In Ontario, the Health Care Consent Act, 1996 ranks a guardian of the person with authority over treatment first, ahead of a parent.",
    }),
    kind: "mc",
    options: [
      { text: "The client's mother", why: "A parent of an adult has no legal authority once a court names another guardian." },
      { text: "The aunt who is the guardian", why: "The court gave the aunt authority to make this client's health care decisions." },
      { text: "The client, with the mother as witness", why: "The court found the client needs a guardian for these decisions." },
      { text: "The dentist, under implied consent", why: "Implied consent covers emergencies. A planned extraction is not one." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-22", {
      topic: "Client's choice of visitors",
      cjmm: "generate",
      process: "culture",
      difficulty: 3,
      stem: "A client admitted with heart failure asks the nurse to list her same-sex partner as her main visitor and support person. The client's brother objects and asks the nurse to keep the partner away. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Hospitals must tell clients they may receive the visitors they choose, including a same-sex partner. Visits may not be limited because of sexual orientation. The nurse records the partner as the designated visitor and gives the partner the same visiting rights as family. The client may change or withdraw her choices at any time. The brother does not decide, and no proof of partnership is required.",
      sources: [CMS_RIGHTS, { body: "Government of Ontario", work: "Human Rights Code, R.S.O. 1990, c. H.19, section 1", year: 1990, url: "https://www.ontario.ca/laws/statute/90h19" }],
      canada:
        "The US federal visitation rule does not apply in Canada. Hospital visitor policies apply, and provincial human rights laws, such as Ontario's Human Rights Code, ban discrimination in services based on sexual orientation.",
    }),
    kind: "sata",
    options: [
      { text: "Record the partner as the client's designated visitor", why: "The client has the right to name her visitors, and the record should show it." },
      { text: "Ask the brother to decide which visitors may come", why: "The client, not a relative, chooses her visitors." },
      { text: "Give the partner the visiting rights of family", why: "Designated visitors have the same privileges as family members." },
      { text: "Limit the partner's visits to keep peace in the family", why: "Limiting visits because of a relative's objection to the relationship is discrimination." },
      { text: "Tell the client she may change her visitor list", why: "The client may withdraw or change consent for visitors at any time." },
      { text: "Require proof of a legal partnership before visits", why: "No proof of partnership is required to be a designated visitor." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s03-23", {
      topic: "Rights of a client admitted involuntarily",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 4,
      stem: "The nurse orients a new graduate on an inpatient psychiatric unit. A client on the unit was admitted involuntarily yesterday. Which statement by the new graduate shows correct understanding of the client's rights?",
      rationale:
        "An involuntary admission does not remove a client's civil rights. The client may still refuse medication, except in an emergency or under a court order or a formal review set by state law. The client keeps the right to phone calls and to send and receive mail unopened. Limits on these rights need a documented clinical reason.",
      sources: [HALTER, { body: "Government of Ontario", work: "Health Care Consent Act, 1996, S.O. 1996, c. 2, Sched. A", year: 1996, url: "https://www.ontario.ca/laws/statute/96h02" }, { body: "Government of British Columbia", work: "Mental Health Act, R.S.B.C. 1996, c. 288, sections 8 and 31", year: 2025, url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96288_01" }],
      canada:
        "Mental health acts vary by province. In Ontario, treating an involuntary client still needs consent from the client if capable, or from a substitute decision maker, under the Health Care Consent Act, 1996. In British Columbia, the facility director may authorize psychiatric treatment of a detained client.",
    }),
    kind: "mc",
    options: [
      { text: "\"The client may refuse medication outside an emergency or court order.\"", why: "Involuntary status alone does not remove the right to refuse treatment." },
      { text: "\"The client gave up the right to refuse treatment during the hold.\"", why: "Admission against the client's will does not end the right to refuse treatment." },
      { text: "\"The client may not make phone calls until the hold ends.\"", why: "Clients keep access to the phone unless a documented clinical reason limits it." },
      { text: "\"Staff may open and read the client's mail during the hold.\"", why: "Clients keep the right to send and receive mail unopened." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-24", {
      topic: "Order of a structured handoff",
      cjmm: "generate",
      process: "communication",
      difficulty: 2,
      stem: "The nurse hands off a client to the oncoming nurse using the I-PASS handoff structure. Place the parts of the handoff in the order the structure uses.",
      rationale:
        "I-PASS opens with illness severity so the receiver knows how closely to watch. A summary of the client's condition and plan follows. The action list comes next. Then the nurse gives situation awareness and backup plans. The receiver closes by restating the key points. A recommendation to the provider belongs to SBAR, not I-PASS.",
      sources: [IPASS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "List the actions still to be done", why: "The action list comes third, after the summary." },
      { text: "Have the receiver restate the key points", why: "Synthesis by the receiver closes the handoff." },
      { text: "State how ill the client is", why: "Illness severity opens the handoff and sets the level of watchfulness." },
      { text: "Give a recommendation to the provider", why: "A recommendation is the last part of SBAR. It is not part of I-PASS." },
      { text: "Summarize the client's condition and plan", why: "The summary follows illness severity." },
      { text: "Describe what to watch for and backup plans", why: "Situation awareness and contingency plans come fourth." },
    ],
    correct: [2, 4, 0, 5, 1],
  },
  {
    ...meta("rn-s03-25", {
      topic: "Duplicate prescriptions from two providers",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A client with atrial fibrillation is followed by a cardiologist and a hospitalist. Both wrote prescriptions today. The nurse reviews the active prescriptions before the 0900 medications. Which entry needs clarification before the next dose?",
      rationale:
        "Two active prescriptions for the same drug at different doses is a duplication. Giving both could cause a slow heart rate and low blood pressure. Giving one means guessing which the prescribers intended. The nurse holds metoprolol and contacts the prescribers to clarify. The other entries are complete, with a drug, dose, route and frequency.",
      sources: [POTTER, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Apixaban 5 mg orally twice daily for stroke prevention", why: "This is a complete prescription at a usual dose for atrial fibrillation." },
      { text: "Atorvastatin 40 mg orally once daily at bedtime", why: "This is a complete prescription with no conflict." },
      { text: "Two active metoprolol prescriptions, 25 mg and 50 mg", why: "Two active doses of one drug are a duplication that needs clarification." },
      { text: "Acetaminophen 650 mg orally every 6 hours as needed", why: "This is a complete as-needed prescription within safe daily limits." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s03-26", {
      topic: "Family understanding of hospice",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches the family of an 84-year-old client with end-stage heart failure about hospice care. Which statements by the family show understanding? Select all that apply.",
      rationale:
        "Hospice focuses on comfort, not cure. It is often given at home. A client qualifies when the expected life span is 6 months or less if the illness runs its usual course. The team also supports the family. Drugs that relieve symptoms may continue. A client may leave hospice at any time. Care can continue past 6 months if the client still qualifies.",
      sources: [CMS_HOSPICE, POTTER, { body: "Health Canada", work: "Framework on Palliative Care in Canada", year: 2018, url: "https://www.canada.ca/en/health-canada/services/health-care-system/reports-publications/palliative-care/framework-palliative-care-canada.html" }],
      canada:
        "The US hospice benefit and its 6 month certification rule do not apply in Canada. Each province and territory runs its own palliative care programs, so eligibility for hospice care varies by province.",
    }),
    kind: "sata",
    options: [
      { text: "\"She will have to stop all of her heart medicines.\"", why: "Medicines that ease symptoms, such as diuretics, often continue in hospice." },
      { text: "\"Hospice focuses on comfort rather than cure.\"", why: "Comfort and quality of life are the goals of hospice care." },
      { text: "\"She cannot leave hospice once she enrolls.\"", why: "A client may revoke hospice and return to other treatment." },
      { text: "\"Hospice care can be given in her home.\"", why: "Most hospice care is given where the client lives." },
      { text: "\"Hospice will stop all visits after 6 months.\"", why: "Care continues past 6 months if the client still qualifies." },
      { text: "\"Hospice is for an expected life span of 6 months or less.\"", why: "Eligibility rests on a prognosis of 6 months or less." },
      { text: "\"The hospice team will support our family too.\"", why: "Hospice includes support for the family, including grief support." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s03-27", {
      topic: "Variance from a clinical pathway",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is on day 2 of a clinical pathway after a total knee replacement. The day 2 targets are walking 15 m with a walker, pain of 4 of 10 or less on oral analgesics and knee flexion of 70 degrees. The case manager reviews the findings for day 2. Which finding is a variance?",
      rationale:
        "A variance is any result that departs from the pathway's expected outcome for that day. The target is pain control on oral analgesics. A client who still needs IV morphine has not met it. The case manager looks for the cause and adjusts the plan. Walking 18 m, pain of 3 and flexion of 75 degrees all meet or beat the targets.",
      sources: [YODER, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Walked 18 m with a walker", why: "Walking 18 m beats the 15 m target." },
      { text: "Pain of 3 of 10 on oral analgesics", why: "Pain of 3 on oral analgesics meets the target." },
      { text: "Knee flexion of 75 degrees", why: "Flexion of 75 degrees beats the 70 degree target." },
      { text: "Still needs IV morphine for pain", why: "The pathway expects pain control on oral analgesics by day 2." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s03-28", {
      topic: "Medication given to the wrong client",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "At 0900 the nurse gives metoprolol 100 mg orally to a 72-year-old client in bed 4A. The prescription was for the client in bed 4B. The client in 4A takes no beta blocker. At 0930 the heart rate is 58/minute and BP 104/62 mmHg, down from 76/minute and 128/74 mmHg at 0800. Complete the diagram by choosing the condition the client most likely has, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The drug went to the wrong client and reached that client. The fall in heart rate and blood pressure shows an effect that needs monitoring, which places the error in category D or higher on the error index. The nurse notifies the provider so treatment can be planned. The nurse reports the event through the safety system. Heart rate and blood pressure show whether the beta blocker effect is deepening.",
      sources: [MERP, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Near miss caught before the dose", why: "The dose was swallowed, so the error reached the client." },
      { text: "Wrong-client error that reached the client", why: "The client in 4A took a drug prescribed for 4B." },
      { text: "Allergic reaction to metoprolol", why: "No rash, swelling or wheeze is described. The changes fit the drug's expected effect." },
      { text: "Missed dose for the client in 4A", why: "The client in 4A had no metoprolol prescription to miss." },
    ],
    actions: [
      { text: "Notify the provider of the error", why: "The provider must know so the client can be assessed and treated." },
      { text: "Keep the error from the client and family", why: "Clients have a right to know about errors that reach them." },
      { text: "Chart that an incident report was filed", why: "The chart records the facts and care. It does not mention the incident report." },
      { text: "File a report in the safety event system", why: "Reporting lets the organization find and fix the causes." },
      { text: "Wait to call until heart rate is under 50/minute", why: "Waiting delays treatment of a drug effect that is already showing." },
    ],
    parameters: [
      { text: "Apical heart rate", why: "Metoprolol slows the heart. The rate has already fallen to 58/minute." },
      { text: "Blood pressure", why: "Metoprolol lowers blood pressure. It has fallen to 104/62 mmHg." },
      { text: "Capillary blood glucose", why: "The client has no diabetes described. Glucose does not track this error." },
      { text: "Serum sodium level", why: "Metoprolol does not change sodium in a way that guides care here." },
      { text: "Oral temperature", why: "Temperature does not reflect a beta blocker effect." },
    ],
    correct: { condition: 1, actions: [0, 3], parameters: [0, 1] },
  },
  {
    ...meta("rn-s03-29", {
      topic: "Which new prescription to carry out first",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "An emergency department nurse cares for four clients. The provider has just entered a new prescription for each. Which prescription should the nurse carry out first?",
      rationale:
        "Probable sepsis with a lactate of 4.2 mmol/L is a threat to life. Delay in the first antibiotic is linked to a higher risk of death. Antibiotics are due within 1 hour when sepsis is probable. The ibuprofen, the tetanus vaccine and the chest x-ray treat stable problems and can follow.",
      refs: ["Antibiotics are given within 1 hour of recognition in probable or definite sepsis and in possible septic shock."],
      sources: [SEPSIS],
    }),
    kind: "mc",
    options: [
      { text: "Oral ibuprofen for a client with a sprained wrist", why: "A sprain is painful but stable. The dose can follow shortly." },
      { text: "IV ceftriaxone for probable sepsis, lactate 4.2 mmol/L", why: "A raised lactate in probable sepsis makes the first antibiotic time critical." },
      { text: "Tetanus vaccine for a client with a clean cut", why: "Tetanus protection matters but is not urgent within the hour." },
      { text: "Chest x-ray for a client with a cough for 2 weeks", why: "A 2 week cough in a stable client can be imaged after the urgent care." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-30", {
      topic: "Privacy during a video visit",
      cjmm: "generate",
      process: "communication",
      difficulty: 2,
      stem: "A home health nurse plans a video visit with a client who lives with several relatives. Which actions protect the client's privacy during the visit? Select all that apply.",
      rationale:
        "The nurse takes reasonable steps to keep the talk private. The nurse joins from a private room, confirms the client can talk freely and uses the agency's approved platform. A public livestream app is not allowed for telehealth. Recording on a personal phone puts health data on an unsecured device. A coworker listening on speaker hears more than needed.",
      sources: [TELEHEALTH, HIPAA_SUMMARY, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada, and health privacy laws vary by province. Ontario's PHIPA section 12(1) requires reasonable steps to protect health information against theft, loss and unauthorized use or disclosure.",
    }),
    kind: "sata",
    options: [
      { text: "Join the visit from a private room with the door closed", why: "A private room keeps others from overhearing the nurse's side." },
      { text: "Ask whether the client can talk privately right now", why: "The client can move or reschedule if relatives are nearby." },
      { text: "Use a public livestream app for the visit", why: "Public-facing apps broadcast the visit and are not allowed for telehealth." },
      { text: "Use the agency's approved video platform", why: "An approved platform has the security safeguards the agency requires." },
      { text: "Record the visit on the nurse's personal phone", why: "A personal phone is not a secure place for health information." },
      { text: "Use speakerphone so a coworker can listen in", why: "A coworker with no role in the visit does not need to hear it." },
    ],
    correct: [0, 1, 3],
  },
];
