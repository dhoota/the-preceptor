import type { Item } from "@/engine/types";
import { ALERT, AHIMA_COPY, ANA_CODE, CMS_DISCHARGE, CMS_RIGHTS, DELEGATION, HIPAA_LAW, HIPAA_SUMMARY, POTTER, YODER, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s03-01", {
      topic: "Time limit for a restraint evaluation",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 34-year-old client in the emergency department strikes a staff member and tries to pull out an IV line. The team applies 4-point restraints for violent behavior. Within what time must a provider or a trained registered nurse see the client face to face?",
      rationale:
        "Federal hospital rules require a face-to-face evaluation within 1 hour of starting restraint for violent or self-destructive behavior. A provider or a registered nurse trained under the rule may do it. An adult order for violent behavior lasts up to 4 hours. It can be renewed up to 24 hours in total before a new in-person assessment.",
      sources: [CMS_RIGHTS, POTTER, { body: "Government of Ontario", work: "Patient Restraints Minimization Act, 2001, S.O. 2001, c. 16", year: 2001, url: "https://www.ontario.ca/laws/statute/01p16" }],
      canada:
        "The US federal restraint rule, including its 1 hour face-to-face check, does not apply in Canada. Restraint rules come from provincial law, regulator standards and hospital policy, such as Ontario's restraint minimization act of 2001, so time limits vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "Within 1 hour", why: "The face-to-face evaluation must happen within 1 hour of starting restraint for violent behavior." },
      { text: "Within 4 hours", why: "Four hours is how long an adult order for violent behavior lasts. The evaluation comes sooner." },
      { text: "Within 8 hours", why: "Eight hours is past the federal limit for the face-to-face evaluation." },
      { text: "Within 24 hours", why: "24 hours is the total renewal limit before a new in-person assessment. It is not the first evaluation." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-02", {
      topic: "Naming a leadership style",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "Pressure injuries on a unit have risen. The nurse manager shares a goal of zero injuries acquired in the hospital. The manager asks staff to design the new turning plan and coaches each nurse toward the goal. Which leadership style does the manager show?",
      rationale:
        "The manager inspires with a shared vision, involves staff in the design and develops each nurse through coaching. These are the marks of transformational leadership. A transactional leader trades rewards for set tasks. An autocratic leader decides alone. A laissez-faire leader gives little direction.",
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "Autocratic", why: "An autocratic leader makes the plan alone and directs staff to follow it." },
      { text: "Laissez-faire", why: "A laissez-faire leader gives little direction. This manager sets a clear goal." },
      { text: "Transformational", why: "A shared vision, staff involvement and coaching define transformational leadership." },
      { text: "Transactional", why: "A transactional leader exchanges rewards for completed tasks. It does not center on vision or growth." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s03-03", {
      topic: "Delegating in an emergency department",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse in an emergency department works with an assistive personnel (AP). Which tasks may the nurse delegate to the AP? Select all that apply.",
      rationale:
        "Tasks that are routine, have a predictable outcome and involve a stable client can go to an AP. Vital signs on a client with a sprained ankle, help with a urine sample and restocking supplies all fit. Triage, discharge teaching and checking the effect of an IV opioid need nursing assessment and judgment. The nurse keeps them.",
      sources: [DELEGATION, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Triage a walk-in client who reports chest pain", why: "Triage is an assessment that sets priority. It needs nursing judgment." },
      { text: "Measure vital signs on a client with a sprained ankle", why: "Vital signs on a stable client are routine and within AP training." },
      { text: "Help a client collect a clean-catch urine sample", why: "Helping with a specimen is a routine task with a predictable outcome." },
      { text: "Teach crutch walking to a client being discharged", why: "Teaching needs nursing knowledge and evaluation of learning. It stays with the nurse." },
      { text: "Restock supplies in the trauma room", why: "Restocking is a support task that does not need nursing judgment." },
      { text: "Check pain relief after IV morphine", why: "Evaluating a drug's effect is an assessment. The nurse keeps it." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s03-04", {
      topic: "Phone caller without the privacy code",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A client admitted with pneumonia asked to be left out of the facility directory. The unit gives approved callers a privacy code. A caller says she is the client's daughter and asks how her mother is doing. She does not know the code. What should the nurse say?",
      rationale:
        "The client opted out of the directory, so staff do not confirm that the client is on the unit. A caller without the privacy code gets no information. Saying the client is stable, offering to pass on a message or transferring the call each confirms the stay. A birth date is not the check the unit uses.",
      sources: [HIPAA_SUMMARY, POTTER, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada, and health privacy laws vary by province. Ontario's PHIPA section 38(3) lets a facility confirm a client's presence, location and general condition only if the client was offered the chance to object and did not.",
    }),
    kind: "mc",
    options: [
      { text: "\"She is stable, and I will tell her you called.\"", why: "This confirms the client is here and shares her condition without approval." },
      { text: "\"I cannot share information without the code.\"", why: "The client chose privacy. A caller without the code gets no details." },
      { text: "\"Tell me her birth date and I can give you an update.\"", why: "Anyone may know a birth date. The unit uses the privacy code to verify callers." },
      { text: "\"I will transfer you to her room phone now.\"", why: "Transferring the call confirms the client is on the unit." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-05", {
      topic: "Police request for a laboratory result",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A police officer comes to the unit and asks the nurse for the blood alcohol result of a client admitted after a car crash. The officer has no warrant, court order or subpoena. The client is alert and declines to share the result. What should the nurse do?",
      rationale:
        "Federal privacy rules let a hospital give police health information without consent only in set cases. Examples are a court order, a warrant, a subpoena from a judicial officer or a qualifying written request. None is present here. The client is alert and has declined. The nurse refers the request to the privacy officer, who applies federal and state law.",
      sources: [HIPAA_LAW, HIPAA_SUMMARY, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada, and health privacy laws vary by province. Ontario's PHIPA section 43(1)(g) permits disclosure without consent to comply with a warrant, which this officer does not have.",
    }),
    kind: "mc",
    options: [
      { text: "Read the result aloud to the officer", why: "The officer has no legal document, and the client has declined. Disclosure breaches privacy." },
      { text: "Print the laboratory report for the officer", why: "A printed report is a disclosure without consent or legal process." },
      { text: "Ask the client's spouse to approve the release", why: "The client is alert and decides. A spouse cannot override the client's refusal." },
      { text: "Refer the request to the privacy officer", why: "The privacy officer checks whether any legal basis for release exists." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s03-06", {
      topic: "Barriers to a safe discharge home",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 79-year-old client is to go home tomorrow after treatment for heart failure. The nurse reviews the discharge planning note. Click to highlight the findings that the discharge plan must address before the client goes home.",
      rationale:
        "Discharge planning checks whether the client can care for herself where she lives and can get the services she needs. She lives alone up a flight of stairs and walks only 30 m with a walker before resting. She cannot read the new labels and cannot afford the furosemide. Each needs a plan before discharge. Clear lungs, a steady weight, normal orientation and a daily neighbor check support going home.",
      sources: [CMS_DISCHARGE, POTTER, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }],
      canada:
        "In Canada, outpatient drugs such as furosemide fall outside the Canada Health Act. Drug coverage varies by province, so the cost barrier still needs a plan before discharge.",
    }),
    kind: "highlight",
    passage:
      "[[Lives alone in a second-floor apartment with no elevator]]. [[Walks 30 m with a walker before resting]]. [[Lungs clear on auscultation]]. [[Cannot read the print on the new medication labels]]. [[Says she cannot afford the new furosemide prescription]]. [[Weight steady for 3 days]]. [[A neighbor checks on her each day]]. [[Alert and oriented]].",
    spans: [
      { text: "Lives alone in a second-floor apartment with no elevator", why: "Stairs and living alone raise the risk at home. The plan must address access and help." },
      { text: "Walks 30 m with a walker before resting", why: "Limited walking tolerance may not be enough for a flight of stairs. Therapy or home help is needed." },
      { text: "Lungs clear on auscultation", why: "Clear lungs show the heart failure is controlled. No action is needed." },
      { text: "Cannot read the print on the new medication labels", why: "A client who cannot read her labels is at risk of dosing errors at home." },
      { text: "Says she cannot afford the new furosemide prescription", why: "A drug she cannot buy will not be taken. A social work or pharmacy plan is needed." },
      { text: "Weight steady for 3 days", why: "A steady weight shows fluid balance is controlled." },
      { text: "A neighbor checks on her each day", why: "A daily check is a support that helps the discharge plan." },
      { text: "Alert and oriented", why: "Normal orientation supports self-care at home." },
    ],
    correct: [0, 1, 3, 4],
  },
  {
    ...meta("rn-s03-07", {
      topic: "Copying a note forward in the record",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "The nurse opens the electronic record to chart a shift assessment. The last note describes a stage 2 pressure injury on the sacrum. The nurse now finds black eschar covering the wound bed. The record allows copying the last note forward. What should the nurse do?",
      rationale:
        "The wound has changed. The old note describes a stage 2 injury, and black eschar now covers the wound bed. Copied text would carry an outdated finding into the legal record. The nurse charts a new assessment of what is seen now. Copy and paste is safe only with controls that keep each entry accurate.",
      sources: [AHIMA_COPY, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Copy the last note and add a comment on the eschar", why: "The copied stage 2 description is now wrong and would conflict with the comment." },
      { text: "Chart a new assessment of the wound as it looks now", why: "A fresh entry records the current wound accurately." },
      { text: "Copy the last note and ask the wound nurse to edit it", why: "Each nurse charts their own findings. Another nurse should not fix a copied entry." },
      { text: "Leave the wound section blank until the wound nurse sees it", why: "A blank section omits a major change that the nurse has already seen." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-08", {
      topic: "Responding to an allergy alert",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "The nurse scans a dose of IV ampicillin-sulbactam for a client. An allergy alert fires. The record lists amoxicillin with a reaction of throat swelling. The nurse has overridden several unhelpful alerts this shift. What should the nurse do?",
      rationale:
        "Throat swelling after amoxicillin is a severe reaction. Ampicillin is a close relative of amoxicillin. The alert points to real danger, so the nurse holds the dose and contacts the prescriber. Frequent unhelpful alerts lead clinicians to override by habit. That habit is how true warnings get missed.",
      sources: [ALERT, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Override the alert and give the dose on time", why: "The alert shows a severe allergy to a related drug. Giving the dose risks airway swelling." },
      { text: "Give a small test dose and watch closely", why: "A test dose is not prescribed and still exposes the client to the allergen." },
      { text: "Ask the pharmacist to turn off the alert", why: "Turning off the alert hides a real risk and does not resolve the prescription." },
      { text: "Hold the dose and contact the prescriber", why: "Holding and clarifying protects the client from a likely severe reaction." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s03-09", {
      topic: "Advocating for time to decide",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A 58-year-old client with capacity has a new diagnosis of colon cancer. In private the client says, \"My son wants me to have surgery tomorrow, but I want time to think.\" The son asks the nurse to bring the consent form now. Which two actions by the nurse show advocacy? Select two.",
      rationale:
        "An advocate protects the client's right to decide. The client has capacity and wants time. The nurse tells the surgeon so the timing can change. The nurse also asks what information would help, so the choice is informed. Sharing the client's doubts with the son breaks confidence. Steering the client toward any choice replaces the client's judgment with someone else's.",
      sources: [ANA_CODE, POTTER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Tell the surgeon the client wants more time to decide", why: "The surgeon can adjust the timing once the client's wish is known." },
      { text: "Bring the consent form so the son can explain it", why: "This puts the son's timeline ahead of the client's request." },
      { text: "Tell the son about the client's doubts about surgery", why: "The client spoke in private. Sharing it breaks confidence." },
      { text: "Ask the client what information would help the choice", why: "Finding out what the client needs supports an informed decision." },
      { text: "Advise the client to follow the son's wishes", why: "The client with capacity decides. The son's wishes do not override the client." },
      { text: "Advise the client to decline the surgery", why: "The nurse does not steer the choice. This replaces the client's judgment." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s03-10", {
      topic: "Nursing care hours per client day",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "Over 24 hours a medical unit staffs 6 registered nurses and 3 assistive personnel on the day shift. It staffs 5 registered nurses and 2 assistive personnel on the night shift. Each shift is 12 hours. The midnight census is 25 clients. How many nursing care hours per client day did the unit provide?",
      rationale:
        "Nursing care hours per client day count every hour of direct care staff, licensed and unlicensed. The unit staffed 16 people for 12 hours each, which is 192 hours. Dividing 192 hours by the census of 25 gives 7.68 hours per client day. Managers use the figure to compare staffing with workload and budget.",
      calc: { expr: "(6 + 3 + 5 + 2) * 12 / 25", answer: 7.68, unit: "hours", round: 2, steps: ["6 + 3 + 5 + 2 = 16", "16 * 12 = 192", "192 / 25 = 7.68"] },
      sources: [YODER],
    }),
    kind: "mc",
    options: [
      { text: "4.32 hours", why: "This counts only the day shift staff and leaves out the night shift." },
      { text: "5.28 hours", why: "This counts only the registered nurses and leaves out the assistive personnel." },
      { text: "7.68 hours", why: "192 total staff hours divided by 25 clients is 7.68 hours per client day." },
      { text: "8.00 hours", why: "This divides the 192 hours by 24 hours in the day instead of the census of 25." },
    ],
    correct: 2,
  },
];
