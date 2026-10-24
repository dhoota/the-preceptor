import type { Item } from "@/engine/types";
import { BRIGGS, HINKLE, HOCKENBERRY, KUO, POWERS, WRIGHT, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s29-41", {
      topic: "Telehealth call made on behalf of a confused parent",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A telehealth triage nurse takes a call from a man who says his 78-year-old mother \"is not making sense today.\" His mother is in the room with him. What should the nurse do first?",
      rationale:
        "Telephone triage is most accurate when the nurse speaks with the client. Hearing the mother's speech and answers lets the nurse judge her confusion, breathing and ability to respond. A sudden change in thinking in an older adult can signal stroke, infection or a low glucose, so a delayed visit is unsafe. Food history and fluids come after the nurse has assessed her directly.",
      sources: [BRIGGS],
    }),
    kind: "mc",
    options: [
      { text: "Ask to speak with the mother directly on the phone", why: "Talking with the client gives the nurse first-hand cues about her speech and thinking." },
      { text: "Advise the son to bring her to the clinic tomorrow", why: "A sudden change in thinking needs same-day assessment, not a visit tomorrow." },
      { text: "Ask the son to list everything she ate today", why: "Diet history does not come before assessing an acute change in thinking." },
      { text: "Tell the son to give her water and call back later", why: "Fluids and a later call can delay care for a serious cause." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s29-42", {
      topic: "Headache call cues that need emergency services",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A telehealth triage nurse speaks with a 66-year-old caller about a headache. Which findings in the call mean the nurse should direct the caller to emergency services now? Select all that apply.",
      rationale:
        "A sudden, severe headache that began 20 minutes ago can signal bleeding in the brain. New arm weakness and speech that comes out wrong are signs of stroke. These need emergency services now, because treatment depends on the time last known well. A headache like usual tension headaches, partial relief from acetaminophen and seasonal allergies do not point to an emergency.",
      sources: [POWERS, BRIGGS],
    }),
    kind: "sata",
    options: [
      { text: "The headache feels like the usual tension headaches", why: "A familiar headache pattern does not suggest a new emergency." },
      { text: "The worst headache of life began suddenly 20 minutes ago", why: "A sudden, severe headache can signal a brain bleed." },
      { text: "Acetaminophen taken 2 hours ago gave some relief", why: "Partial relief from a pain reliever does not point to an emergency." },
      { text: "The right arm has felt weak and heavy since it began", why: "New one-sided weakness is a sign of stroke." },
      { text: "Seasonal allergies have been active this week", why: "Allergy symptoms do not explain an emergency headache." },
      { text: "Words come out wrong when the caller tries to talk", why: "New trouble speaking is a sign of stroke." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s29-43", {
      topic: "Tracheostomy call from the parent of a child at home",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A telehealth nurse takes a call from the parent of a 6-year-old who has a tracheostomy and receives care at home. The parent is trained in suctioning and emergency tube changes. The parent says the child is breathing hard, the pulse oximeter reads 85% and the tube is in place. Secretions have been thick all day. Complete the diagram by choosing the condition the child is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Thick secretions, hard breathing and an oxygen saturation of 85% with the tube in place point to a tube blocked by mucus. The parent suctions the tube now. If the catheter will not pass or breathing does not improve, the parent changes the tube using emergency supplies. Oxygen saturation and work of breathing show whether the airway has cleared. Waiting or driving to a clinic delays airway care.",
      sources: [HOCKENBERRY, BRIGGS],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Mucus blocking the tube", why: "Thick secretions with hard breathing and low saturation fit a blocked tube." },
      { text: "Accidental decannulation", why: "The parent reports the tube is in place." },
      { text: "Anxiety in the child", why: "Anxiety does not explain a saturation of 85% with thick secretions." },
      { text: "Seasonal allergy flare", why: "Allergies do not cause sudden airway blockage with low saturation." },
    ],
    actions: [
      { text: "Suction the tube now", why: "Suctioning clears mucus from a blocked tube." },
      { text: "Recheck in 15 minutes", why: "Waiting delays care of a blocked airway." },
      { text: "Change the tube if suction fails", why: "A tube that stays blocked is replaced with the emergency spare." },
      { text: "Drive the child to the clinic", why: "Driving delays airway clearance and leaves no one free to treat on the way." },
      { text: "Give a fever-reducing drug", why: "The stem gives no fever, and the problem is the airway." },
    ],
    parameters: [
      { text: "Oxygen saturation", why: "Saturation rising from 85% shows the airway has cleared." },
      { text: "Daily urine output", why: "Urine output does not track an airway emergency." },
      { text: "Work of breathing", why: "Easier breathing shows the tube is open again." },
      { text: "Body temperature", why: "Temperature does not show whether the tube is clear." },
      { text: "Weekly body weight", why: "Weight does not change with an acute airway problem." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [0, 2] },
  },
  {
    ...meta("rn-s29-44", {
      topic: "Ordering callbacks in a telehealth triage queue",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A telehealth triage nurse starts a shift with four callback messages in the queue. Which caller should the nurse call back first?",
      rationale:
        "New black, tarry stools with lightheadedness suggest upper GI bleeding with blood loss. This caller is called first so the nurse can direct emergency care. A runny nose in a toddler who eats well is mild. A refill request is routine. A sore throat with a temperature of 38.0°C needs advice today but is not an emergency.",
      sources: [BRIGGS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "A parent whose 2-year-old has a runny nose for 3 days and eats well", why: "Mild cold symptoms in a toddler who eats well can wait." },
      { text: "A 59-year-old who reports new black, tarry stools and lightheadedness", why: "Tarry stools with lightheadedness suggest GI bleeding with blood loss." },
      { text: "A 30-year-old who asks for a refill of an allergy nasal spray", why: "A refill request is routine." },
      { text: "A 45-year-old with a sore throat and a temperature of 38.0°C (100.4°F)", why: "A sore throat with a low fever needs advice today but is not urgent." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s29-45", {
      topic: "Safe habits in telephone triage",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A nurse educator observes a new telehealth triage nurse handle calls. Which two actions by the new nurse follow safe telephone triage practice? Select two.",
      rationale:
        "Triage starts with the protocol for the most serious symptom, so a dangerous cause is not missed. When the nurse is unsure between two dispositions, the higher level of care is chosen. Nurses do not give a diagnosis by phone. The caller's wishes do not set the disposition. Every call is documented, and a referral comes with care advice and instructions to call back.",
      sources: [BRIGGS],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Tells a caller that the rash is most likely shingles", why: "Diagnosis is outside telephone triage. The nurse assesses symptoms and sets a disposition." },
      { text: "Picks the protocol for the most serious symptom first", why: "Starting with the most serious symptom keeps a dangerous cause from being missed." },
      { text: "Lets the caller's preference decide the disposition", why: "The disposition follows the assessment and protocol, not the caller's preference." },
      { text: "Skips charting for a call that lasted under 2 minutes", why: "Every triage call is documented, whatever its length." },
      { text: "Chooses the higher level of care when unsure between two", why: "Upgrading when in doubt protects the caller from under-triage." },
      { text: "Refers a caller to the clinic without care advice", why: "A referral comes with care advice and instructions on when to call back." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s29-46", {
      topic: "Hospital-to-home plan for a child on a home ventilator",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse case manager plans the discharge of a 2-year-old with a tracheostomy who will go home on a ventilator. Two parents will share care, and private duty nursing has been approved. Which actions should the case manager include in the plan? Select all that apply.",
      rationale:
        "A safe move home for a child with medical complexity needs services in place before discharge. The case manager confirms nursing hours, arranges equipment and tells the power company the home has life support equipment. Both parents show tube changes and CPR before discharge. One named coordinator gives the family a single contact. Leaving the family to sort out specialist schedules alone adds burden and risk.",
      sources: [KUO, HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Give the parents a list of specialists to schedule on their own", why: "Leaving scheduling to the family alone adds burden and risks missed care." },
      { text: "Confirm the private duty nursing hours before discharge day", why: "Approved hours are confirmed so care is in place when the child arrives home." },
      { text: "Plan teaching only for the parent who is home more often", why: "Both caregivers need to show they can manage the airway." },
      { text: "Arrange equipment delivery and notify the power company", why: "Equipment must be ready, and the utility needs to know the home has life support equipment." },
      { text: "Wait to plan follow-up until supplies start to run low", why: "Follow-up and supply orders are planned before discharge, not after a shortage." },
      { text: "Have both parents show a tube change and CPR before discharge", why: "Return demonstration confirms both caregivers can respond to an airway emergency." },
      { text: "Name one care coordinator as the family's main contact", why: "A single contact helps the family navigate many providers and services." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s29-47", {
      topic: "Signs that care coordination for a complex child is working",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse case manager reviews the care of a 4-year-old with medical complexity 3 months after a care coordination plan began. Which findings show the plan is meeting its goals? Select all that apply.",
      rationale:
        "Care coordination for children with medical complexity aims to cut unplanned admissions and emergency visits, improve access and ease the family's burden. No unplanned admissions, fewer emergency visits and parents who know whom to call show progress. Specialists working without a shared plan, many separate appointment days and services changed without notice show gaps that remain.",
      sources: [KUO],
    }),
    kind: "sata",
    options: [
      { text: "The child has had no unplanned hospital admissions", why: "Fewer unplanned admissions is a main goal of care coordination." },
      { text: "Six specialists still give care without a shared plan", why: "Care without a shared plan is a gap the coordination plan should close." },
      { text: "Emergency department visits fell compared with the prior 3 months", why: "Fewer emergency visits shows care is reaching the child in planned ways." },
      { text: "The parent took 10 days off work for separate appointments", why: "Many separate visits add family burden and show scheduling has not been coordinated." },
      { text: "The parents say they know whom to call with a problem", why: "A clear contact point shows better family experience and access." },
      { text: "Home nursing hours were cut without notice to the family", why: "Unplanned service changes show the plan is not yet working." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s29-48", {
      topic: "Conflicting instructions for a child seen by many specialists",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A nurse case manager coordinates care for a 3-year-old with medical complexity who sees 7 specialists. The parent says, \"Every specialist gives me different feeding instructions, and I don't know which to follow.\" What should the case manager do?",
      rationale:
        "Children with medical complexity do best with a shared plan of care that all providers can see and update. The case manager brings the specialists' feeding advice together with the primary care provider so the family gets one plan. Following only the latest advice or one specialist can miss a needed change. Booking all visits on one day eases travel but does not fix the conflict.",
      sources: [KUO],
    }),
    kind: "mc",
    options: [
      { text: "Tell the parent to follow the most recent instruction given", why: "The latest advice may conflict with another specialist's plan." },
      { text: "Ask the parent to choose one specialist to follow for feeding", why: "Following one specialist can miss advice that the others give for good reason." },
      { text: "Book all 7 specialist visits on the same day next month", why: "Combined visits ease travel but do not resolve the conflicting instructions." },
      { text: "Build a shared plan of care with the specialists and primary provider", why: "A shared plan gives the family one set of instructions that all providers agree on." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s29-49", {
      topic: "Choosing a method to verify each staff competency",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 4,
      stem: "A nurse educator at a rural critical access hospital plans yearly competency checks for the nursing staff. Drag the best verification method for each competency. Each method is used once at most.",
      rationale:
        "The method should match the kind of competency. A mock event tests a rarely used technical skill such as defibrillation under realistic pressure. A case study tests the critical thinking needed to set priorities. Peer feedback shows how a nurse handles interpersonal situations such as a complaint. A written test checks knowledge of a policy. A class sign-in sheet and reading a manual show attendance and exposure, not competence.",
      sources: [WRIGHT],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Using the new defibrillator during a cardiac arrest", "Deciding which of four clients to see first", "Responding with respect to a family member's complaint", "Knowing the steps in the new fire response policy"],
    tokens: [
      { text: "Case study", why: "A case study tests the reasoning behind setting priorities." },
      { text: "Class sign-in sheet", why: "Attendance shows presence at a class, not competence." },
      { text: "Mock event", why: "A mock code tests a technical skill under realistic conditions." },
      { text: "Written test", why: "A test checks knowledge of policy steps." },
      { text: "Reading the policy manual", why: "Reading shows exposure to content, not the ability to apply it." },
      { text: "Peer feedback", why: "Peers observe how a nurse handles interpersonal situations." },
    ],
    correct: [2, 0, 5, 3],
  },
  {
    ...meta("rn-s29-50", {
      topic: "Evidence that a new nurse is competent in sedation monitoring",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "The charge nurse at an ambulatory surgery center checks whether a newly hired nurse is competent to monitor clients during moderate sedation. Which findings verify the nurse's competence? Select all that apply.",
      rationale:
        "Competence is verified by methods that show the nurse can apply the skill. A correct answer to a case study about falling oxygen saturation shows reasoning. Correct airway support during a mock event shows the technical skill. Correct use of capnography seen during daily work shows the skill in practice. A class certificate, years of experience and a feeling of confidence do not show the skill itself.",
      sources: [WRIGHT],
    }),
    kind: "sata",
    options: [
      { text: "Holds a certificate of attendance from a sedation class", why: "Attendance shows exposure to content, not the ability to monitor sedation." },
      { text: "Answers a case study on falling oxygen saturation correctly", why: "A case study shows the reasoning needed to respond to a change." },
      { text: "Has 8 years of nursing experience on a medical unit", why: "Experience in another area does not verify this skill." },
      { text: "Gives correct airway support during a mock event", why: "A mock event verifies the technical skill under realistic conditions." },
      { text: "Says that monitoring sedation feels comfortable", why: "Feeling confident is self-report and does not show the skill." },
      { text: "Is seen reading capnography correctly during daily work", why: "Evidence from daily work shows the skill in real practice." },
    ],
    correct: [1, 3, 5],
  },
];
