import type { Item } from "@/engine/types";
import { ASC_ASSESS, ASC_TRANSFER, CAH_OPO, HINKLE, HOSPICE_AIDE, HOSPICE_IPU, NCP, NGND, OPO_CFR, SOM_A, SOM_W, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s29-21", {
      topic: "Emergency transfer from an ambulatory surgery center",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 58-year-old client in the recovery area of an ambulatory surgery center develops crushing chest pain 40 minutes after a colonoscopy. The monitor shows new ST elevation. The anesthesia provider decides the client needs immediate transfer to the local hospital. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Surgery centers must have a procedure for immediate transfer to a hospital when a client needs care beyond their capability. The nurse calls emergency medical services, sends a copy of the record with the procedure and anesthesia notes and gives report to the receiving nurse. The nurse stays with the client until the crew takes over. A family member's car has no monitoring. Waiting for a bed delays care, and the client is not discharged.",
      sources: [ASC_TRANSFER, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Ask the client's spouse to drive the client to the hospital", why: "A private car has no monitoring or staff to treat a dysrhythmia on the way." },
      { text: "Wait for the surgeon's office to arrange a hospital bed", why: "Immediate transfer goes through the center's emergency procedure. Waiting delays care." },
      { text: "Call emergency medical services for transport", why: "A crew with monitoring and resuscitation equipment is needed for this transfer." },
      { text: "Discharge the client from the center before the crew arrives", why: "The client is transferred, not discharged, and stays under the center's care until handoff." },
      { text: "Send a copy of the record with the procedure and anesthesia notes", why: "The receiving team needs the procedure, sedation and medication details." },
      { text: "Give report to the receiving emergency department nurse", why: "A direct report gives the receiving team a clear handoff before arrival." },
      { text: "Stay with the client and monitor until the crew takes over", why: "Continuous monitoring continues until care is handed over." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s29-22", {
      topic: "Missing surgeon assessment before an outpatient procedure",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 61-year-old client is in the preoperative area of an ambulatory surgery center for cataract extraction. The surgeon asks the nurse to bring the client to the operating room now. The nurse finds that the record has no pre-surgical assessment by the surgeon, and the client's drug allergies have not been reviewed by the surgeon. What should the nurse do?",
      rationale:
        "Federal rules require that the surgeon who will perform the procedure complete a pre-surgical assessment, including drug allergies, before surgery. The history and physical must be in the record before the client goes to the operating room. The nurse tells the surgeon the assessment is needed first. The nurse cannot complete it for the surgeon. Canceling is not needed when the gap can be closed now.",
      sources: [ASC_ASSESS],
    }),
    kind: "mc",
    options: [
      { text: "Take the client to the operating room and note the gap in the record", why: "Charting the gap does not meet the rule that the assessment be done before surgery." },
      { text: "Tell the surgeon the pre-surgical assessment is needed before surgery", why: "The operating surgeon completes the assessment, including allergies, before the procedure." },
      { text: "Complete the pre-surgical assessment and ask the surgeon to cosign", why: "The rule requires the surgeon who will operate to complete this assessment." },
      { text: "Cancel the procedure and arrange for the client to go home", why: "The gap can be closed now, so canceling the procedure is not needed." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-23", {
      topic: "Assigning a practical nurse at a surgery center",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The charge nurse of an ambulatory surgery center plans the afternoon assignments. A licensed practical nurse is working with two registered nurses. Which two tasks should the charge nurse assign to the practical nurse? Select two.",
      rationale:
        "A practical nurse can reinforce teaching that a registered nurse has started and can give scheduled oral medications to stable clients. The first assessment after surgery, deciding readiness for discharge and assessing new shortness of breath call for registered nurse assessment. A call about a falling blood pressure reports an unstable client and also belongs to the registered nurse.",
      sources: [NGND],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Reinforce written discharge teaching for a client ready to leave", why: "Reinforcing teaching that a registered nurse has begun is within practical nurse scope." },
      { text: "Do the first assessment of a client arriving from the operating room", why: "The first assessment after surgery needs a registered nurse." },
      { text: "Give a scheduled oral antibiotic to a stable preoperative client", why: "A scheduled oral dose for a stable client is within practical nurse scope." },
      { text: "Decide whether a client meets the criteria for discharge home", why: "Judging discharge readiness is a registered nurse assessment." },
      { text: "Assess a client who has new shortness of breath after surgery", why: "A new change in condition needs registered nurse assessment." },
      { text: "Call the surgeon about a client whose blood pressure is falling", why: "Reporting an unstable client involves assessment and judgment by the registered nurse." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s29-24", {
      topic: "First client to see on an inpatient hospice unit",
      cjmm: "prioritize",
      process: "caring",
      difficulty: 2,
      stem: "The nurse on an inpatient hospice unit receives report on four clients at 0700. Which client should the nurse see first?",
      rationale:
        "Pain rated 9 is a symptom crisis, and symptom control is the main reason for inpatient hospice care. This client is seen first. Noisy breathing in a comfortable client near death is expected and is managed with positioning. Mottling and falling urine output are expected signs of approaching death. A family request about funeral planning matters and can be met after the pain is treated.",
      sources: [NCP, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A client with lung cancer who has noisy breathing and appears comfortable", why: "Noisy breathing near death is expected. The client appears comfortable." },
      { text: "A client whose family wants to discuss funeral planning today", why: "The request is important but can wait until uncontrolled pain is treated." },
      { text: "A client with mottled knees and less urine output overnight", why: "Mottling and falling urine output are expected signs as death approaches." },
      { text: "A client with bone metastases who rates pain 9 on a 0 to 10 scale", why: "Severe uncontrolled pain is a symptom crisis that needs prompt treatment." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-25", {
      topic: "Referral to the organ procurement organization after a cancer death",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "An 88-year-old client with metastatic pancreatic cancer dies at 0310 on an inpatient hospice unit inside an acute care hospital. The client was not on a ventilator. A coworker says, \"No one will take anything from someone with cancer. Just add the death to the weekly list we send.\" What should the nurse do?",
      rationale:
        "Hospitals must notify the organ procurement organization of every death, including clients who are not on a ventilator. The call is made by phone as soon as possible, ideally within 1 hour. Periodic lists of deaths are not allowed. The organization, not hospital staff, decides whether organs, tissue or eyes are suitable. Only a trained requester or organization staff approach the family about donation.",
      refs: ["Referral is made by phone as soon as possible after a death, ideally within 1 hour."],
      sources: [SOM_A, OPO_CFR],
    }),
    kind: "mc",
    options: [
      { text: "Call the organ procurement organization now to report the death", why: "Every death is reported by phone as soon as possible so the organization can judge suitability." },
      { text: "Add the death to the weekly list for the organ procurement organization", why: "Batch reporting of deaths is not allowed, even if the organization requests it." },
      { text: "Skip the referral because metastatic cancer rules out donation", why: "The organization decides suitability. Tissue or eye donation may still be possible." },
      { text: "Ask the family about eye donation before calling the organization", why: "Only a trained requester or organization staff approach the family about donation." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s29-26", {
      topic: "Hospice aide who failed one competency area",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "On an inpatient hospice unit, a hospice aide completes a competency evaluation. The aide passes every area except safe transfer from bed to chair, which is rated unsatisfactory. Today the aide is assigned to a client who needs help moving to a chair. What should the nurse do?",
      rationale:
        "An aide rated unsatisfactory in a task may not perform that task without direct supervision by a registered nurse. This lasts until the aide is retrained and passes a new evaluation of that task. The aide passed every other area, so the aide can give other care. The aide transfers the client today only with the registered nurse directly supervising. Reading a policy does not restore competence.",
      sources: [HOSPICE_AIDE],
    }),
    kind: "mc",
    options: [
      { text: "Let the aide do the transfer because the aide passed every other area", why: "Passing other areas does not make the aide competent in transfers." },
      { text: "Ask the aide to reread the transfer policy before moving the client", why: "Reading does not replace retraining and a passed evaluation." },
      { text: "Have the aide do the transfer only under direct nurse supervision", why: "A task rated unsatisfactory is done only with direct registered nurse supervision until reevaluated." },
      { text: "Remove the aide from all client care until a full new evaluation", why: "Only the failed task is restricted. The aide may give other care." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s29-27", {
      topic: "Night staffing for general inpatient hospice care",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A freestanding hospice inpatient unit has 8 clients receiving general inpatient care for symptom control. The night schedule lists one licensed practical nurse and two hospice aides. A registered nurse will be on call by phone from home. How should the nurse manager interpret this schedule?",
      rationale:
        "Hospices that provide inpatient care must give nursing care around the clock that meets every client's needs. When any client receives general inpatient care, each shift must include a registered nurse who gives direct care. An on-call nurse at home does not meet this rule. Practical nurse experience does not replace the registered nurse. No rule sets a count of practical nurses.",
      sources: [HOSPICE_IPU],
    }),
    kind: "mc",
    options: [
      { text: "It is adequate because a registered nurse is reachable by phone", why: "Phone access does not meet the rule for a registered nurse giving direct care each shift." },
      { text: "It falls short because each shift needs a registered nurse giving direct care", why: "General inpatient care requires a registered nurse giving direct care on every shift." },
      { text: "It is adequate if the practical nurse has years of hospice experience", why: "Experience does not replace the required registered nurse." },
      { text: "It falls short because the unit needs two practical nurses at night", why: "The gap is the missing registered nurse, not the number of practical nurses." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-28", {
      topic: "Auditing a note written after a death on a hospice unit",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 4,
      stem: "The nurse manager of an inpatient hospice unit inside an acute care hospital reviews a note written after a client died at 0310. Click to highlight the entries that show the unit's donation duties were not met.",
      rationale:
        "The hospital must call the organ procurement organization as soon as possible after a death, ideally within 1 hour. A call at 0800 for a 0310 death is not timely. Only an organization representative or a trained designated requester may raise donation with the family, so the unit clerk should not have asked. Notifying the provider, pronouncing death, preparing the body and offering chaplain support were done as expected.",
      refs: ["Referral is made by phone as soon as possible after a death, ideally within 1 hour."],
      sources: [SOM_A, OPO_CFR, HINKLE],
    }),
    kind: "highlight",
    passage:
      "[[0310 Client died with family at the bedside.]]\n[[0315 Hospice provider notified. Death pronounced at 0330.]]\n[[0340 Body cleaned and dentures placed in the mouth.]]\n[[0400 Unit clerk, who has no donation training, asked the family about eye donation.]]\n[[0450 Chaplain stayed with the family.]]\n[[0510 Family left with the client's belongings.]]\n[[0800 Day shift called the organ procurement organization to report the death.]]",
    spans: [
      { text: "0310 Client died with family at the bedside.", why: "Recording the time and who was present is expected." },
      { text: "0315 Hospice provider notified. Death pronounced at 0330.", why: "Prompt notice and pronouncement meet the unit's duties." },
      { text: "0340 Body cleaned and dentures placed in the mouth.", why: "Placing dentures before the jaw stiffens is routine care after death." },
      { text: "0400 Unit clerk, who has no donation training, asked the family about eye donation.", why: "Only organization staff or a trained designated requester approach the family." },
      { text: "0450 Chaplain stayed with the family.", why: "Spiritual support for the family is expected care." },
      { text: "0510 Family left with the client's belongings.", why: "Returning belongings to the family is routine." },
      { text: "0800 Day shift called the organ procurement organization to report the death.", why: "A call at 0800 for a death at 0310 is not timely. The call is made as soon as possible." },
    ],
    correct: [3, 6],
  },
  {
    ...meta("rn-s29-29", {
      topic: "Timing a donation referral before ventilator withdrawal",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 46-year-old client is in the emergency department of a rural critical access hospital after a cardiac arrest at home. After return of circulation the client is on a ventilator with a Glasgow Coma Scale score of 3. The family decides to withdraw the ventilator at 1600. The hospital's agreed trigger for imminent death includes a ventilated client with a score of 5 or less. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A ventilated client with a Glasgow Coma Scale score of 3 meets the agreed trigger of 5 or less. Referral is timely when it is made as soon as the trigger is met and before life-sustaining therapy is withdrawn. A call after the ventilator is removed or after death can lose the chance for organ donation. Referral does not wait for the family to raise donation.",
      sources: [CAH_OPO, SOM_W],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse should notify the organ procurement organization {0} because {1}.",
    blanks: [
      {
        options: [
          { text: "now, while the client is on the ventilator", why: "Referral comes as soon as the trigger is met and before withdrawal." },
          { text: "after the ventilator is removed", why: "Referral must come before any life-sustaining therapy is withdrawn." },
          { text: "after death is pronounced", why: "Waiting until death can make organs unsuitable for transplant." },
          { text: "when the family asks about donation", why: "Referral does not depend on the family raising donation." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "the client meets the imminent death trigger", why: "A ventilated client with a score of 3 meets the agreed trigger of 5 or less." },
          { text: "the family has asked about donation", why: "The stem gives no family question about donation." },
          { text: "the client has a signed donor card", why: "The stem does not mention a donor card, and referral does not depend on one." },
          { text: "brain death has been declared", why: "The stem gives no brain death declaration." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s29-30", {
      topic: "Splitting care on a hospice unit among nurse and aide",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "The charge nurse on an inpatient hospice unit plans assignments for a registered nurse, a licensed practical nurse and a hospice aide. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A practical nurse can give scheduled oral medications to a stable client. A hospice aide can give mouth care to an unresponsive client after training. Admission assessment, evaluating a new pain plan and teaching about signs of approaching death call for registered nurse assessment and teaching. Checking the effect of a breakthrough opioid dose is an evaluation, and medications are not given by aides.",
      sources: [NGND, HOSPICE_AIDE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The charge nurse should assign {0} to the practical nurse and {1} to the hospice aide.",
    blanks: [
      {
        options: [
          { text: "scheduled oral medications for a stable client", why: "Scheduled oral doses for a stable client are within practical nurse scope." },
          { text: "the admission assessment of a new client", why: "Admission assessment is a registered nurse function." },
          { text: "evaluating a newly changed pain plan", why: "Evaluating a new plan of care needs registered nurse judgment." },
          { text: "teaching the family about approaching death", why: "Planned teaching is a registered nurse function." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "mouth care for a client who is unresponsive", why: "Mouth care is a routine personal care task for a trained aide." },
          { text: "checking the effect of a breakthrough opioid dose", why: "Judging a medication effect is an evaluation for licensed nurses." },
          { text: "giving a scheduled oral morphine dose", why: "Aides do not give medications." },
          { text: "deciding whether a client needs more oxygen", why: "Deciding on a change in care needs nursing assessment." },
        ],
        correct: 0,
      },
    ],
  },
];
