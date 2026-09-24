import type { Item } from "@/engine/types";
import { ANA_CODE, BEDSIDE, DELEGATION, ELDER_REPORT, EMTALA, HINKLE, HIPAA, POTTER, RESEARCH_CONSENT, STROKE, YODER, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s02-21", {
      topic: "Disclosure to public health without consent",
      cjmm: "analyze",
      process: "communication",
      difficulty: 2,
      stem: "A client at a community clinic tests positive for syphilis. Which disclosure may the nurse make without the client's written authorization?",
      rationale:
        "The HIPAA Privacy Rule allows disclosure to a public health authority that is required by law. Syphilis is a reportable disease, so the result goes to the local health department. An employer, a relative and a life insurer are not covered by that exception. Each of those needs the client's written authorization.",
      sources: [HIPAA, { body: "Government of Ontario", work: "Health Protection and Promotion Act, R.S.O. 1990, c. H.7, section 25", year: 1990, url: "https://www.ontario.ca/laws/statute/90h07" }, { body: "Government of Ontario", work: "O. Reg. 135/18, Designation of Diseases, under the Health Protection and Promotion Act", year: 2018, url: "https://www.ontario.ca/laws/regulation/180135" }],
      canada:
        "HIPAA does not apply in Canada, and public health reporting laws vary by province. In Ontario, the Health Protection and Promotion Act requires a nurse who finds syphilis in a community client to report it to the medical officer of health.",
    }),
    kind: "mc",
    options: [
      { text: "Telling the client's employer the reason for sick leave", why: "An employer has no right to the diagnosis without the client's authorization." },
      { text: "Reporting the result to the local health department", why: "Reporting a notifiable disease to public health is required by law and needs no authorization." },
      { text: "Confirming the diagnosis to the client's adult sister", why: "A relative needs the client's permission to receive the diagnosis." },
      { text: "Sending the result to the client's life insurance company", why: "An insurer that is not paying for this care needs written authorization." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s02-22", {
      topic: "Suspected neglect by a family caregiver",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A home health nurse visits an 84-year-old client with dementia who lives with an adult son, the only caregiver. The client weighs 48 kg, down from 55 kg 2 months ago. There is a stage 3 pressure injury on the sacrum. The client's clothes are soiled with urine. A 30-day bottle of donepezil filled 60 days ago is nearly full. The kitchen has little food. The son says, \"I work nights and cannot keep up.\" Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The client depends on the son for food, hygiene, skin care and drugs. Weight fell from 55 kg to 48 kg, a deep pressure injury is present, and drugs are not being given. These findings point to caregiver neglect, even if it is not intended. Nurses are mandated reporters in nearly every state. The nurse reports the suspicion to Adult Protective Services. Clear, measured documentation supports the report. Weight and wound size show whether care improves.",
      sources: [ELDER_REPORT, POTTER, { body: "Government of Nova Scotia", work: "Adult Protection Act, R.S.N.S. 1989, c. 2, section 5", year: 2014, url: "https://nslegislature.ca/sites/default/files/legc/statutes/adult%20protection.pdf" }],
      canada:
        "Canada has no Adult Protective Services, and duties to report abuse of an adult living at home vary by province. Nova Scotia's Adult Protection Act requires anyone with information that an adult needs protection to report it.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Caregiver neglect", why: "Weight loss, a deep pressure injury, soiled clothes and missed drugs in a dependent client fit neglect." },
      { text: "Expected dementia progression", why: "Dementia does not explain missed drugs and a kitchen with little food in a home with a caregiver." },
      { text: "Financial exploitation", why: "The stem gives no sign that money or property is being misused." },
      { text: "Self-neglect", why: "The client depends on the son, so the lapses belong to the caregiver." },
    ],
    actions: [
      { text: "Ask the son to sign a promise to improve care", why: "A promise does not protect the client or meet the duty to report." },
      { text: "Report suspected neglect to Adult Protective Services", why: "A report needs only reasonable suspicion, and nurses are mandated reporters in nearly every state." },
      { text: "Wait for the next visit to confirm the pattern", why: "Waiting leaves a client with weight loss and a stage 3 wound at risk." },
      { text: "Document measured findings and the son's words", why: "Objective notes on weight, the wound and quotes support the report." },
      { text: "Ask a neighbor to look in on the client daily", why: "A neighbor's visit does not address the neglect or meet the legal duty." },
    ],
    parameters: [
      { text: "Son's work schedule", why: "The schedule may explain the strain but does not measure the client's condition." },
      { text: "Client's body weight", why: "Weight shows whether the client is now getting enough food." },
      { text: "Serum cholesterol level", why: "Cholesterol does not track neglect or recovery from it." },
      { text: "Size of the sacral wound", why: "Wound size shows whether skin care and nutrition are improving." },
      { text: "Client's blood type", why: "Blood type does not change and does not guide this plan." },
    ],
    correct: { condition: 0, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s02-23", {
      topic: "First client to see at urgent care",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "Four adults arrive at an urgent care center at the same time. Which client should the nurse see first?",
      rationale:
        "New slurred speech that started 40 minutes ago can be a stroke. Stroke treatment depends on time from onset, so this client needs emergency transfer now. An ankle injury, a cough with a temperature of 38.1°C and a scalp cut with controlled bleeding are stable. They can wait for assessment.",
      sources: [STROKE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Age 67, new slurred speech that started 40 minutes ago", why: "Sudden slurred speech can be a stroke. Treatment depends on time, so this client comes first." },
      { text: "Age 30, swollen ankle after a fall while running", why: "An ankle injury is stable and can wait." },
      { text: "Age 45, cough for 5 days, temperature 38.1°C (100.6°F)", why: "A cough with a low fever is stable and not an immediate threat." },
      { text: "Age 22, scalp cut with bleeding controlled by pressure", why: "Bleeding is controlled, so the cut can wait." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s02-24", {
      topic: "Referrals after hip fracture repair",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 79-year-old client is ready for discharge 4 days after repair of a hip fracture. The client lives alone in a second-floor apartment with no elevator. The client walks 15 m with a walker and needs help to get in and out of the shower. The client says, \"I cannot afford all these new prescriptions.\" The client eats well, swallows without difficulty and has clear lungs. Which referrals should the nurse request? Select all that apply.",
      rationale:
        "Stairs and a walker point to physical therapy for gait and stair training. Needing help to shower points to occupational therapy for bathing skills and equipment. Cost concerns point to a social worker. A client who lives alone after surgery benefits from home health nursing to check recovery and drugs. Normal eating, swallowing and clear lungs give no reason for a dietitian, speech therapy or respiratory therapy.",
      sources: [HINKLE, POTTER, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }],
      canada:
        "In Canada, outpatient prescription drugs fall outside the Canada Health Act, so public drug coverage varies by province.",
    }),
    kind: "sata",
    options: [
      { text: "Speech-language pathologist", why: "The client swallows without difficulty and has no speech problem." },
      { text: "Physical therapist", why: "Stairs and walker use call for gait and stair training." },
      { text: "Respiratory therapist", why: "The lungs are clear. There is no breathing need." },
      { text: "Occupational therapist", why: "Help with showering calls for training in daily tasks and bath equipment." },
      { text: "Registered dietitian", why: "The client eats well. There is no nutrition problem in the stem." },
      { text: "Social worker", why: "A social worker can find help with the cost of the prescriptions." },
      { text: "Home health nurse", why: "A client living alone after surgery needs checks on recovery and drugs at home." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s02-25", {
      topic: "Leaving a research study",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "A client enrolled in a drug trial for migraine tells the nurse, \"I want to quit the study, but I am afraid my care will suffer.\" How should the nurse respond?",
      rationale:
        "Federal rules on research consent state that a subject may stop taking part at any time. There is no penalty or loss of benefits. The nurse confirms this right and tells the research team. A signed consent form does not bind the client to finish. The client does not need anyone's permission to leave. Delaying the choice to another dose ignores the request.",
      sources: [RESEARCH_CONSENT],
    }),
    kind: "mc",
    options: [
      { text: "\"You signed a consent form, so you must finish the study.\"", why: "Consent to research can be withdrawn at any time." },
      { text: "\"Let's wait and see how you feel after the next dose.\"", why: "This puts off the client's clear request to leave." },
      { text: "\"You may leave at any time without losing care.\"", why: "Research rules protect the right to withdraw without penalty or loss of benefits." },
      { text: "\"You will need the provider's permission to leave.\"", why: "The choice to withdraw belongs to the client alone." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s02-26", {
      topic: "Why teaching is not delegated",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse on an orthopedic unit works with an assistive personnel (AP). A client needs to learn to walk with crutches before discharge. Complete the sentence by choosing from the lists of options.",
      rationale:
        "Teaching crutch walking includes checking what the client has learned and deciding whether the client is safe. That evaluation needs nursing judgment, so the nurse keeps the task. Helping a stable client bathe and measuring urine output are routine tasks with predictable results. They can go to an AP. A task that needs only basic training is not one the nurse must keep.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers. Delegation rules vary by province, and the delegating nurse stays responsible for the decision to delegate.",
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The nurse should keep {0} because it requires {1}.",
    targets: ["Task", "Reason"],
    tokens: [
      { text: "teaching crutch walking", why: "Teaching includes evaluation of learning, which needs a nurse." },
      { text: "helping a stable client bathe", why: "Bathing a stable client is routine and can be delegated." },
      { text: "measuring urine output", why: "Measuring output is a routine task within AP training." },
      { text: "evaluation of the client's learning", why: "Judging whether the client learned safely needs nursing judgment." },
      { text: "a skill with a predictable result", why: "A predictable skill is the kind of task that can be delegated." },
      { text: "only basic training in hygiene", why: "Basic hygiene training fits AP work. It is not a reason to keep a task." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s02-27", {
      topic: "Client asks for a second opinion",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A client is scheduled for a mastectomy tomorrow. The client tells the nurse, \"My surgeon did not talk about other treatments. I want a second opinion before I agree.\" What should the nurse do?",
      rationale:
        "A client has the right to know the alternatives and to seek a second opinion. The nurse acts as advocate and tells the surgeon about the request. Explaining treatment options is the surgeon's duty in informed consent. Praising the surgeon's skill dismisses the concern. Asking the family to settle it tonight pressures the client.",
      sources: [ANA_CODE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Reassure the client that the surgeon is highly skilled", why: "Praising the surgeon does not answer the client's concern or honor the request." },
      { text: "Explain the other treatment options to the client", why: "Disclosing alternatives is the surgeon's duty in informed consent." },
      { text: "Ask the family to help the client decide tonight", why: "This pressures the client and ignores the request for another opinion." },
      { text: "Tell the surgeon the client wants a second opinion", why: "The nurse advocates by bringing the client's request to the surgeon." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s02-28", {
      topic: "Bedside report with a visitor present",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "The nurse gives shift report at the bedside of an alert client. The client's neighbor is visiting. The client had a biopsy result come back this afternoon. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Bedside report brings the client into the handoff. The nurse asks the client whether the visitor may stay. The client is invited to add to or correct the report. Both nurses check the wristband and look at the IV site and pump together. Sensitive news is not shared in front of a visitor without consent. Plain words help the client take part. Moving report to the station loses the safety checks.",
      sources: [BEDSIDE],
    }),
    kind: "sata",
    options: [
      { text: "Share the biopsy result while the visitor listens", why: "Sharing sensitive results in front of a visitor needs the client's consent." },
      { text: "Check the wristband with the oncoming nurse", why: "A joint wristband check confirms identity at the handoff." },
      { text: "Give report at the station after the visitor leaves", why: "Moving to the station loses the client's input and the bedside safety checks." },
      { text: "Ask the client whether the visitor may stay", why: "The client decides who hears their health information." },
      { text: "Invite the client to add to or correct the report", why: "The client can catch errors and share goals." },
      { text: "Use medical terms only between the two nurses", why: "Jargon shuts the client out of the handoff." },
      { text: "Look at the IV site and pump together", why: "A shared look at lines and pumps catches problems at the handoff." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s02-29", {
      topic: "Confirming competence with new pumps",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A medical unit will switch to new smart infusion pumps next month. The nurse educator plans how to confirm that each nurse can use them safely. Which two methods should the educator choose? Select two.",
      rationale:
        "Competence with a device is shown by performance, not by exposure. A return demonstration shows that the nurse can program a real infusion. A skills checklist scored by a trained observer confirms each step. A signed reading statement, a lecture, a quiz and a video show attendance or knowledge only.",
      sources: [YODER],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Return demonstration of programming an infusion", why: "Doing the task shows the nurse can use the pump safely." },
      { text: "Signed statement of reading the manual", why: "Reading does not show that the nurse can program the pump." },
      { text: "Attendance at a vendor lecture on the pump", why: "Attendance shows exposure, not skill." },
      { text: "Skills checklist scored by a trained observer", why: "An observer confirms each step of safe use." },
      { text: "Online quiz on the features of the pump", why: "A quiz tests knowledge but not hands-on skill." },
      { text: "Video showing the pump being set up", why: "Watching a video does not show that the nurse can do it." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s02-30", {
      topic: "Screening duty for an uninsured client",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client arrives at the emergency department with chest pain. The registration clerk says the client has no insurance. The clerk asks the nurse to send the client to a county hospital 20 km away. What should the nurse tell the clerk?",
      rationale:
        "Under EMTALA, a hospital with an emergency department must give a medical screening exam to anyone who asks. Care cannot be delayed to ask about payment. Chest pain needs screening here first. A transfer is allowed only after screening and stabilizing, and under set conditions. A deposit or the ability to walk does not change this duty.",
      sources: [EMTALA, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }],
      canada:
        "EMTALA is a US law and does not apply in Canada. Hospital and medical services are insured under provincial health plans that meet the Canada Health Act, and coverage rules vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "The client gets a screening exam here first", why: "EMTALA requires a medical screening exam before any transfer or payment question." },
      { text: "The client may be sent if the other hospital agrees", why: "Acceptance by another hospital does not replace the screening exam here." },
      { text: "The client must pay a deposit before being seen", why: "Asking for payment cannot delay the screening exam." },
      { text: "The client may be sent if well enough to walk", why: "Walking does not rule out an emergency. Screening comes first." },
    ],
    correct: 0,
  },
];
