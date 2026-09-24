import type { Item } from "@/engine/types";
import { ANA_CODE, CMS_DISCHARGE, DELEGATION, HINKLE, HIPAA_AMEND, HIPAA_SUMMARY, POTTER, SOCIAL, TJC_NPG, YODER, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s03-41", {
      topic: "Charge nurse sorting urgent requests",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The charge nurse on a medical unit receives four reports within a few minutes. Which situation should the charge nurse handle first?",
      rationale:
        "A client found on the floor after striking the head may have a brain injury. The client needs an assessment and a provider review now. The difficult IV is for routine fluids and can wait briefly. The count signature must be resolved before the shift ends but poses no immediate harm to a client. A cold tray is a service concern.",
      sources: [YODER, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "A client was found on the floor after hitting the head", why: "A fall with a head strike can cause bleeding in the brain and needs assessment now." },
      { text: "A family member says the lunch trays arrived cold", why: "This is a service concern that can be handled after urgent care." },
      { text: "A nurse needs help starting a difficult IV for routine fluids", why: "Routine fluids can wait a short time for help." },
      { text: "Pharmacy reports a missing signature on the opioid count", why: "The count must be resolved this shift but is not an immediate threat to a client." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-42", {
      topic: "Mismatch between charting and a client report",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 3,
      stem: "The nurse asked an assistive personnel (AP) to walk a client in the hall three times this shift. The AP charted three walks. The client tells the nurse, \"I only got up once today because she was busy.\" What should the nurse do first?",
      rationale:
        "The nurse who delegates must follow up and evaluate the result. The first step is to get the facts from the AP in private. The AP may explain, correct the charting with a late entry or reveal a workload problem. If the charting was false, the nurse reports it. The nurse does not change another person's entries or chart care as someone else's.",
      sources: [DELEGATION, POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "mc",
    options: [
      { text: "Correct the AP's charting to show one walk", why: "Each person corrects their own entries. The nurse does not alter the AP's charting." },
      { text: "Report the AP to the nurse manager at once", why: "Reporting comes after the nurse learns the facts from the AP." },
      { text: "Walk the client and chart it under the AP's name", why: "Charting under another person's name is false documentation." },
      { text: "Talk with the AP privately about the walks", why: "The nurse gathers the facts first as part of evaluating the delegated task." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s03-43", {
      topic: "Accountability in delegation",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 5,
      stem: "A new charge nurse reviews delegation with the unit educator. Which statements by the charge nurse show correct understanding? Select all that apply.",
      rationale:
        "The delegating nurse stays accountable for the decision to delegate and for follow-up. The task must fit the AP's job description and training. The AP is responsible for doing the accepted task correctly. An AP who lacks training for a task should say so and decline it. Assessment is not delegated, and delegation does not end the need to follow up.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers. The Canadian Nurses Protective Society says the delegating nurse stays responsible for the decision to delegate, and delegation standards vary by province.",
    }),
    kind: "sata",
    options: [
      { text: "\"Once I delegate, the AP alone answers for the outcome.\"", why: "The nurse stays accountable for delegating and for supervision." },
      { text: "\"I delegate only tasks within the AP's job and training.\"", why: "The right task must fit the AP's role and competence." },
      { text: "\"I may delegate the first assessment of a stable admission.\"", why: "Assessment needs nursing judgment and is not delegated." },
      { text: "\"The AP is responsible for doing the task correctly.\"", why: "The AP is accountable for performing an accepted task correctly." },
      { text: "\"I remain accountable for the decision to delegate.\"", why: "The delegating nurse answers for the choice to delegate." },
      { text: "\"The AP should decline a task they were not trained for.\"", why: "An untrained AP should say so and not accept the task." },
      { text: "\"Delegation means I can skip follow-up on routine tasks.\"", why: "Follow-up and evaluation are part of every delegation." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s03-44", {
      topic: "Client asks to change the record",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A client reviews a copy of their record and finds an entry listing a penicillin allergy. The client says they have taken penicillin many times with no reaction and asks the nurse to delete the entry. What should the nurse do?",
      rationale:
        "Clients have a right to request an amendment to their record. The request goes through the facility's process, usually in writing. The facility must act on it within 60 days. Original entries are not deleted. An approved change is added and linked to the original. The nurse also tells the provider, because an allergy label affects drug choices.",
      refs: ["A covered entity must act on a request to amend a record within 60 days."],
      sources: [HIPAA_AMEND, HIPAA_SUMMARY, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada, and access laws vary by province. Under Ontario's PHIPA section 55, a client asks for a correction in writing and the custodian replies within 30 days, extendable by 30 days.",
    }),
    kind: "mc",
    options: [
      { text: "Delete the allergy entry from the record now", why: "Deleting an entry alters the legal record and skips the amendment process." },
      { text: "Tell the client the record cannot be changed", why: "Clients have a legal right to request an amendment." },
      { text: "Help the client ask in writing to amend it", why: "A written request starts the amendment process the client is entitled to." },
      { text: "Ask the provider to erase the original entry", why: "Original entries are kept. Changes are added and linked." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s03-45", {
      topic: "First referrals for a new colostomy",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 52-year-old client is going home after surgery that created a colostomy. The client lost their job last month and has no health insurance. The client cannot yet empty the pouch without help. Which two referrals should the nurse make first? Select two.",
      rationale:
        "The client cannot empty the pouch alone, so an ostomy nurse is needed for teaching and supplies. The client has no job and no insurance, so a social worker is needed for coverage and supply costs. A dietitian may help later. Nothing in the stem suggests a need for speech, respiratory or spiritual care.",
      sources: [CMS_DISCHARGE, HINKLE, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }, { body: "Government of Ontario", work: "Assistive Devices Program: Enteral Feeding and Ostomy Supplies", year: 2026, url: "https://www.ontario.ca/page/enteral-feeding-and-ostomy" }],
      canada:
        "Hospital and medical care are insured under provincial plans that meet the Canada Health Act. Ostomy supply coverage varies by province, such as Ontario's Assistive Devices Program grant for a permanent colostomy.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Ostomy nurse", why: "The client cannot yet manage the pouch and needs specialist teaching." },
      { text: "Dietitian", why: "Diet advice helps, but self-care and costs are the urgent problems." },
      { text: "Speech-language pathologist", why: "No swallowing or speech problem is described." },
      { text: "Social worker", why: "Loss of work and insurance threatens access to supplies and follow-up." },
      { text: "Respiratory therapist", why: "No breathing problem is described." },
      { text: "Chaplain", why: "No spiritual concern is described." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s03-46", {
      topic: "Discharge plan that is not safe",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "An 81-year-old client had a hip fracture repair and is to be discharged home today. The client lives alone. The client needs 2 staff to move from bed to chair. The client cannot recall how to use the walker taught yesterday. The client's only son lives in another state. Complete the diagram by choosing the condition the client most likely has, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A client who lives alone, needs 2 staff to transfer and cannot use the walker cannot care for themselves at home. The discharge plan is not safe. The nurse tells the provider and asks case management to evaluate rehabilitation or other options. Transfer help and walker use show when the client is ready. Glucose trends, weight and pupil checks do not measure readiness here.",
      sources: [CMS_DISCHARGE, POTTER],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Ready for discharge with written teaching", why: "Needing 2 staff to transfer shows the client is not ready." },
      { text: "Unsafe plan for discharge home alone", why: "The client cannot transfer or use the walker and has no one at home." },
      { text: "Caregiver role strain in the son", why: "The son lives in another state and gives no daily care." },
      { text: "Client refusal of the discharge plan", why: "The stem describes no refusal by the client." },
    ],
    actions: [
      { text: "Tell the provider the home plan is unsafe", why: "The provider must know before writing the discharge." },
      { text: "Send the client home with agency phone numbers", why: "A list of numbers does not give the client help to transfer today." },
      { text: "Request case management for rehab options", why: "Case management can arrange rehabilitation or other safe care." },
      { text: "Ask the son to travel in to provide care", why: "The son's availability is unknown. It does not solve the need today." },
      { text: "Postpone walker teaching until the client is home", why: "The client needs to use the walker safely before discharge." },
    ],
    parameters: [
      { text: "Hemoglobin A1C level over time", why: "A1C reflects diabetes control, which the stem does not describe." },
      { text: "Level of help needed to transfer", why: "Transfer help shows whether the client can move safely at home." },
      { text: "Daily body weight on one scale", why: "Weight does not measure readiness to go home after hip repair." },
      { text: "Return demonstration of walker use", why: "A correct demonstration shows the client can walk safely." },
      { text: "Pupil response to light each shift", why: "No head injury is described, so pupils do not guide discharge." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s03-47", {
      topic: "When to consult the ethics committee",
      cjmm: "recognize",
      process: "caring",
      difficulty: 2,
      stem: "The nurse on an intensive care unit reviews current concerns with the charge nurse. Which situations are appropriate to bring to the ethics committee? Select all that apply.",
      rationale:
        "An ethics committee helps with conflicts about values in care. A surrogate asking for treatment the team sees as only prolonging dying fits. So does a family split on withdrawing life support with no directive. Moral distress over repeated resuscitation also fits. An impaired coworker goes to the manager. A break schedule is a staffing matter. A meal complaint goes to client relations.",
      sources: [ANA_CODE, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Two nurses disagree about the break schedule", why: "Scheduling is a management matter, not an ethical conflict." },
      { text: "A surrogate asks for care the team sees as only prolonging dying", why: "Conflict over the goals of care is a core reason for an ethics consult." },
      { text: "A nurse suspects a coworker came to work intoxicated", why: "Suspected impairment goes to the manager under facility policy." },
      { text: "Staff feel moral distress over repeated resuscitation", why: "Ethics consults support staff facing moral distress in care." },
      { text: "A client wants to complain about a cold meal", why: "A service complaint goes to client relations." },
      { text: "A family is split on stopping life support with no directive", why: "Disagreement among decision makers is a common reason for an ethics consult." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s03-48", {
      topic: "Advocating for better pain control",
      cjmm: "evaluate",
      process: "caring",
      difficulty: 4,
      trend: true,
      stem: "A 45-year-old client is 1 day after open abdominal surgery. Oxycodone 5 mg orally every 4 hours as needed is prescribed. The nurse reviews the flow sheet in the exhibit. Based on the trend, which action should the nurse take?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Time", "0800", "1200", "1600", "2000"],
            rows: [
              ["Pain (0 to 10)", "7", "8", "8", "9"],
              ["Oxycodone 5 mg given", "Yes", "Yes", "Yes", "Yes"],
              ["Heart rate (/minute)", "92", "98", "104", "110"],
              ["Respiratory rate (/minute)", "18", "18", "20", "22"],
              ["Walked in hall", "No", "No", "No", "No"],
            ],
          },
        },
      ],
      rationale:
        "Pain rose from 7 to 9 even though every dose was given on time. The heart rate climbed from 92 to 110/minute and the client has not walked. The current plan is not working. The nurse advocates by asking the provider to review the plan. A rising heart rate can also signal a complication that the provider needs to assess.",
      sources: [POTTER, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Ask the provider to review the pain plan", why: "Pain is rising despite every dose, so the plan needs to change." },
      { text: "Continue the plan and reassess pain in 4 hours", why: "The trend shows the plan is failing. Waiting leaves pain uncontrolled." },
      { text: "Teach distraction in place of the next oxycodone dose", why: "Distraction adds to drug therapy. It does not replace a dose for severe pain." },
      { text: "Explain that this pain is expected after surgery", why: "Pain of 9 with a rising heart rate is not an acceptable result on day 1." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-49", {
      topic: "Taking a critical result by phone",
      cjmm: "prioritize",
      process: "communication",
      difficulty: 1,
      stem: "The laboratory calls the nurse with a critical serum potassium of 6.8 mEq/L (6.8 mmol/L) for a client on the unit. What should the nurse do first?",
      rationale:
        "Spoken results can be misheard. The nurse writes down the result and reads it back to the caller before ending the call. This confirms the value and the client. The nurse then reports the result to the provider without delay. Charting follows. Redrawing the sample first would delay treatment of a dangerous value.",
      sources: [POTTER, TJC_NPG, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
      canada:
        "Canadian labs report potassium in SI units only, so the critical result reads 6.8 mmol/L.",
    }),
    kind: "mc",
    options: [
      { text: "Notify the provider of the result", why: "The provider is called next, once the value has been confirmed." },
      { text: "Write down and read back the result", why: "Read-back confirms the value and the client before the call ends." },
      { text: "Recheck the potassium on a new sample", why: "A redraw delays treatment of a critical value." },
      { text: "Chart the result in the client's record", why: "Charting follows confirmation and notification." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-50", {
      topic: "Smartphone use and client privacy",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 2,
      stem: "The nurse manager reviews how staff on a unit use smartphones at work. Which staff actions protect client information? Select all that apply.",
      rationale:
        "Client information on a phone must stay secure. The hospital's encrypted app, a locked screen and logging out at the end of the shift protect it. A personal text app is not secure. Photos on a personal camera leave images outside the record. A post without names can still identify a client by its details.",
      sources: [HIPAA_SUMMARY, SOCIAL, { body: "Government of Ontario", work: "Personal Health Information Protection Act, 2004, S.O. 2004, c. 3, Sched. A", year: 2004, url: "https://www.ontario.ca/laws/statute/04p03" }],
      canada:
        "HIPAA does not apply in Canada, and health privacy laws vary by province. Ontario's PHIPA section 12(1) requires reasonable steps to protect health information against theft, loss and unauthorized use or disclosure.",
    }),
    kind: "sata",
    options: [
      { text: "Texting lab results over a personal text app", why: "Personal text apps are not secure for client information." },
      { text: "Taking wound photos with a personal phone camera", why: "Photos stored on a personal phone are outside secure systems." },
      { text: "Posting a story about a shift online without names", why: "Details in a post can still identify a client." },
      { text: "Using the hospital's encrypted app for client questions", why: "An approved encrypted app protects messages about clients." },
      { text: "Locking the phone with a passcode when not in use", why: "A lock keeps others from seeing client data on the device." },
      { text: "Logging out of the secure app at the end of the shift", why: "Logging out stops access to client data after work." },
    ],
    correct: [3, 4, 5],
  },
];
