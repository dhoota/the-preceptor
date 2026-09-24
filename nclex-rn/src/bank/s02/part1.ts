import type { Item } from "@/engine/types";
import { ASHP_DIVERSION, CHILD_REPORT, CMSA, DELEGATION, GUIDO, POTTER, YODER, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s02-01", {
      topic: "Witnessing a controlled drug waste",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A nurse gives hydromorphone 0.5 mg IV from a 2 mg vial. A coworker then asks the nurse to cosign the waste of 1.5 mg in the dispensing cabinet. The coworker says, \"I already put it in the sharps bin.\" What should the nurse do?",
      rationale:
        "A witness signs only for a waste they see. The nurse did not see the 1.5 mg go into the bin. Cosigning would make the record false and could hide diversion. The nurse declines and tells the charge nurse so the discrepancy is resolved under policy. An empty vial does not show where the drug went. A pharmacist cannot vouch for a waste they did not see either.",
      sources: [ASHP_DIVERSION, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Cosign after seeing the empty vial in the bin", why: "An empty vial does not show that the drug was discarded. The waste itself must be seen." },
      { text: "Decline to cosign and tell the charge nurse", why: "The nurse did not see the waste. Reporting lets the discrepancy be resolved under policy." },
      { text: "Cosign and chart that the waste was not seen", why: "A cosignature states that the waste was seen. A note does not make a false signature accurate." },
      { text: "Ask the coworker to have the pharmacist cosign", why: "The pharmacist did not see the waste either. Moving the signature does not fix the gap." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s02-02", {
      topic: "Delegation in a long-term care facility",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse in a long-term care facility plans the day with an assistive personnel (AP). Which tasks can the nurse delegate to the AP? Select all that apply.",
      rationale:
        "An AP can do routine tasks with predictable outcomes for stable residents. Measuring intake and output, helping a resident with a normal swallow eat, turning a resident on a schedule and taking vital signs on a stable resident all fit. Assessing skin after a fall, teaching a new skill and deciding on a PRN drug need nursing judgment. The nurse keeps those.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "sata",
    options: [
      { text: "Measure intake and output for a resident on a fluid limit", why: "Measuring and recording intake and output is a routine task within AP training." },
      { text: "Check the skin of a resident who fell last night", why: "A check after a fall is an assessment. Assessment stays with the nurse." },
      { text: "Help a resident with a normal swallow eat lunch", why: "Feeding a resident with no swallowing problem is routine and predictable." },
      { text: "Teach a resident how to walk safely with a new walker", why: "Teaching needs nursing or therapy knowledge. It is not delegated to an AP." },
      { text: "Turn a bedbound resident on the posted schedule", why: "Scheduled turning follows a set plan and fits AP training." },
      { text: "Decide whether a resident needs a PRN laxative", why: "Choosing to give a PRN drug needs assessment and judgment by a nurse." },
      { text: "Take vital signs on a stable resident", why: "Vital signs on a stable resident are routine. The nurse reviews the results." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s02-03", {
      topic: "Consent after a sedative dose",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is scheduled for an elective bronchoscopy. The client received lorazepam 1 mg IV 20 minutes ago and is now drowsy. The nurse finds that the consent form is unsigned. The primary health care provider asks the nurse to have the client sign it now. What should the nurse do?",
      rationale:
        "Valid consent needs a client who can understand and weigh the information. Lorazepam given 20 minutes ago makes the client drowsy and can impair judgment. The procedure is elective, so there is no emergency reason to proceed. The nurse tells the provider the form cannot be signed now. A spouse cannot sign for a client who will regain capacity. Reading the form aloud does not remove the drug effect.",
      sources: [POTTER, GUIDO],
    }),
    kind: "mc",
    options: [
      { text: "Have the client sign while the spouse watches", why: "A witness does not make consent valid when the client is sedated." },
      { text: "Ask the spouse to sign the consent form for the client", why: "The client will regain capacity. A spouse does not sign for a client in an elective case." },
      { text: "Read the form aloud before the client signs", why: "Reading aloud does not reverse the effect of the sedative on judgment." },
      { text: "Tell the provider the form cannot be signed now", why: "Consent from a sedated client is not valid, and the procedure can wait." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-04", {
      topic: "Consent in a surgical emergency",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An adult is brought to the emergency department after a motorcycle crash. The client does not respond to voice or pain. BP is 76/40 mmHg. A scan shows a ruptured spleen, and the surgeon plans surgery now. No identification or family has been found. Which statement about consent is accurate?",
      rationale:
        "Emergency surgery may proceed under implied consent when delay would threaten life and no one can consent. The client cannot respond and has a BP of 76/40 mmHg from internal bleeding. Waiting for a court or a relative would put the client's life at risk. Nursing witnesses and an administrator's signature do not create consent. The emergency and the attempt to find family are documented.",
      sources: [GUIDO, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Implied consent allows surgery to proceed now", why: "A threat to life with no one able to consent allows emergency treatment." },
      { text: "A court order is needed before the surgery starts", why: "Seeking a court order would delay lifesaving surgery. It is not required in an emergency." },
      { text: "The hospital administrator must sign the form", why: "An administrator has no authority to consent for a client." },
      { text: "Surgery waits until a relative can be reached", why: "Waiting would risk death from bleeding. Implied consent covers the emergency." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s02-05", {
      topic: "Reporting suspected child abuse",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 3-year-old is brought to the emergency department with a spiral fracture of the femur. The parent says the child rolled off a couch. The nurse notes bruises on the back and buttocks in several colors. What should the nurse do?",
      rationale:
        "Nurses are mandated reporters of suspected child abuse in every state. A report needs reasonable suspicion, not proof. A spiral femur fracture from a short fall and bruises on the back and buttocks raise that suspicion. The nurse reports to child protective services under state law. Waiting for proof or handing the decision to another person delays protection. Confronting the parent can put the child at more risk.",
      sources: [CHILD_REPORT, POTTER, { body: "Government of Ontario", work: "Child, Youth and Family Services Act, 2017, S.O. 2017, c. 14, Sched. 1, section 125", year: 2017, url: "https://www.ontario.ca/laws/statute/17c14" }],
      canada:
        "Child protection laws and agencies vary by province. In Ontario, the Child, Youth and Family Services Act, 2017 requires a person with reasonable grounds to suspect abuse to report directly to a children's aid society.",
    }),
    kind: "mc",
    options: [
      { text: "Wait for the skeletal survey to confirm abuse", why: "The law asks for reasonable suspicion. Waiting for proof delays protection." },
      { text: "Ask the charge nurse to decide whether to report", why: "The duty to report belongs to the nurse who holds the suspicion." },
      { text: "Report the suspicion to child protective services", why: "The injury pattern gives reasonable suspicion, which triggers the legal duty to report." },
      { text: "Confront the parent about the different-colored bruises", why: "Confronting the parent can raise the risk to the child. Investigation belongs to the agency." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-06", {
      topic: "Checking consent before elective surgery",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the preoperative checklist of a client scheduled for elective knee arthroscopy at 0800. Click to highlight the findings the nurse must resolve before the client goes to surgery.",
      rationale:
        "The form must name the procedure and the side, so a missing side needs correction. The client took oxycodone 5 mg at 0600 and signed at 0645, while the opioid could affect judgment. The question about other options shows the client does not yet understand the alternatives. The surgeon must answer it before consent is informed. Orientation, fasting, a matching band and a risk discussion are expected.",
      sources: [POTTER, GUIDO],
    }),
    kind: "highlight",
    passage:
      "[[Alert and oriented, age 42.]]\n[[NPO since midnight as instructed.]]\n[[Identification band matches the chart and the surgical schedule.]]\n[[Surgeon reviewed the risks with the client yesterday.]]\n[[Consent form reads \"knee arthroscopy\" with no side named.]]\n[[Oxycodone 5 mg by mouth given at 0600.]]\n[[Client signed the consent form at 0645.]]\n[[Client asks, \"Is there any option besides surgery?\"]]",
    spans: [
      { text: "Alert and oriented, age 42.", why: "Orientation is expected and supports capacity. It needs no follow-up." },
      { text: "NPO since midnight as instructed.", why: "Fasting before surgery is expected and needs no follow-up." },
      { text: "Identification band matches the chart and the surgical schedule.", why: "A matching band is expected and needs no follow-up." },
      { text: "Surgeon reviewed the risks with the client yesterday.", why: "The surgeon explaining risks is part of valid consent." },
      { text: "Consent form reads \"knee arthroscopy\" with no side named.", why: "The form must name the side to prevent wrong site surgery." },
      { text: "Oxycodone 5 mg by mouth given at 0600.", why: "An opioid given before signing can impair the client's judgment." },
      { text: "Client signed the consent form at 0645.", why: "The client signed after the opioid dose, so the signature may not be valid." },
      { text: "Client asks, \"Is there any option besides surgery?\"", why: "The client does not yet understand the alternatives, so consent is not informed." },
    ],
    correct: [4, 5, 6, 7],
  },
  {
    ...meta("rn-s02-07", {
      topic: "Off-duty help at a road crash",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An off-duty nurse stops at a highway crash and finds a driver awake with a bleeding forearm. The car is not on fire and traffic has stopped. Which action is most consistent with the protection of a Good Samaritan law?",
      rationale:
        "Good Samaritan laws protect a person who gives emergency care in good faith, within their training and without pay. Once the nurse starts care, leaving before a qualified person takes over can be abandonment. Moving a driver from a safe car can worsen a spinal injury. Accepting payment can remove the protection. Staying until paramedics take over keeps care within the law.",
      sources: [GUIDO, { body: "Government of Ontario", work: "Good Samaritan Act, 2001, S.O. 2001, c. 2", year: 2001, url: "https://www.ontario.ca/laws/statute/01g02" }],
      canada:
        "Good Samaritan laws are provincial and vary by province. Ontario's Good Samaritan Act, 2001 protects a health care professional who gives emergency care outside a hospital without expecting pay, unless the harm came from gross negligence.",
    }),
    kind: "mc",
    options: [
      { text: "Move the driver from the car to check for injuries", why: "The car is safe. Moving the driver can worsen an unseen spinal injury." },
      { text: "Stay with the driver until paramedics take over", why: "Staying until qualified help arrives avoids abandonment of the person in care." },
      { text: "Leave the scene once the bleeding has slowed", why: "Leaving before handing over care can be abandonment." },
      { text: "Accept payment offered by the driver's family", why: "The protection covers care given without pay. Payment can remove it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s02-08", {
      topic: "Choosing clients for case management",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse on a medical-surgical unit reviews six clients who will be discharged this week. Which two clients should the nurse refer to the case manager first? Select two.",
      rationale:
        "Case management helps clients with complex needs, high use of services or barriers to care. Three heart failure admissions in 60 days while living alone shows unmet needs at home. A new spinal cord injury with no insurance needs rehabilitation placement and funding. The other clients have short, simple recoveries with support or supplies already in place.",
      sources: [CMSA, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }],
      canada:
        "In Canada, medically necessary hospital and medical services are insured under provincial plans that meet the Canada Health Act. Coverage for rehabilitation and home care outside hospital varies by province.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Age 81, heart failure, third admission in 60 days, lives alone", why: "Repeated admissions and living alone show complex unmet needs after discharge." },
      { text: "Age 35, appendectomy yesterday, going home with a spouse", why: "A short recovery with a spouse at home does not need case management." },
      { text: "Age 58, new spinal cord injury, needs rehabilitation, no insurance", why: "Placement and funding for rehabilitation are complex needs that a case manager coordinates." },
      { text: "Age 24, asthma, one night stay, has a rescue inhaler", why: "A brief stay with the needed inhaler at home is a simple discharge." },
      { text: "Age 67, knee replacement, daughter staying for 2 weeks", why: "A planned surgery with a family caregiver in place is a routine discharge." },
      { text: "Age 45, cellulitis, finishing oral antibiotics at home", why: "Finishing oral antibiotics at home is a simple plan." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s02-09", {
      topic: "Assigning an unstable new admission",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The charge nurse on a medical unit receives an admission from the emergency department. The client has diabetic ketoacidosis, an insulin infusion and hourly glucose checks. Which staff member should the charge nurse assign to this client?",
      rationale:
        "The client is unstable and needs an admission assessment and an insulin infusion adjusted to hourly glucose results. These need an RN who knows the unit and has time. The unit RN with three stable clients fits both needs. An LPN does not do the admission assessment of an unstable client. A float from outpatient surgery may not know the unit's insulin protocol. An RN receiving a client from surgery now is too busy.",
      sources: [YODER, DELEGATION, { body: "Government of Ontario", work: "Nursing Act, 1991, S.O. 1991, c. 32", year: 1991, url: "https://www.ontario.ca/laws/statute/91n32" }],
      canada:
        "In Ontario this role is the registered practical nurse (RPN), and other provinces use the LPN title. Each provincial regulator sets the scope of RN and practical nurse practice.",
    }),
    kind: "mc",
    options: [
      { text: "LPN with 15 years of experience on the unit", why: "The admission assessment of an unstable client is outside the LPN role." },
      { text: "RN floated from the outpatient surgery center", why: "A float from outpatient surgery may not know the unit's insulin protocol." },
      { text: "RN with 4 clients, one of them returning from surgery now", why: "A fresh postoperative client needs close checks. This RN lacks time for another unstable client." },
      { text: "Unit RN with 1 year of experience and 3 stable clients", why: "This RN knows the unit and has stable clients, so there is time for close monitoring." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-10", {
      topic: "Elements of negligence",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse gives IV cefazolin without checking the client's allergy band. The chart lists a cephalosporin allergy. The client develops hives and wheezing and needs 2 days of intensive care. Complete the following sentences by choosing from the lists of options.",
      rationale:
        "Negligence has four elements: a duty, a breach of that duty, causation and damages. The nurse had a duty to check allergies before giving a drug. Skipping the check is the breach. The reaction came from the drug, which links the breach to the harm. The 2 days of intensive care are the damages. Duty exists from the nurse and client relationship itself.",
      sources: [GUIDO],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "Giving the drug without checking the allergy band is the element of {0}. The 2 days of intensive care are the element of {1}.",
    blanks: [
      {
        options: [
          { text: "duty to the client", why: "Duty is the nurse's obligation to the client. The unchecked allergy is a failure of that duty." },
          { text: "breach of duty", why: "Skipping the allergy check falls below the standard of care." },
          { text: "causation", why: "Causation links the breach to the harm. It is not the act itself." },
          { text: "damages", why: "Damages are the harm to the client, not the nurse's act." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "duty to the client", why: "Duty comes from the care relationship, not from the harm." },
          { text: "breach of duty", why: "The breach is the missed check. The intensive care stay is the result." },
          { text: "causation", why: "Causation is the link between act and harm. The stay is the harm itself." },
          { text: "damages", why: "The intensive care stay is the actual harm the client suffered." },
        ],
        correct: 3,
      },
    ],
  },
];
