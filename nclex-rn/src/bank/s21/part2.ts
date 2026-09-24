import type { Item } from "@/engine/types";
import { ACLS, AF_GUIDE, HALTER, HINKLE, POTTER, meta } from "./common";

/** s21 items 11 to 20. Therapeutic procedures: ECT, radiation, traction, halo, pacemaker, ventilator, cardioversion, balloon pump. */
export const PART2: Item[] = [
  {
    ...meta("rn-s21-11", {
      topic: "Recovery after electroconvulsive therapy",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had electroconvulsive therapy with a short-acting IV anesthetic and succinylcholine 10 minutes ago. The client is drowsy, rouses to voice and is unsure of the day. Respirations are 16/minute. Which action is the nurse's priority?",
      rationale:
        "The client has just had general anesthesia and a muscle relaxant. A drowsy client can lose the airway or aspirate. Side-lying keeps the airway open and lets secretions drain until the client is fully awake. Short-term confusion is expected after the treatment and is addressed once the airway is safe. Food waits until the client is alert and swallowing well.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Keep the client side-lying until awake", why: "Airway protection comes first while anesthesia wears off." },
      { text: "Reorient the client to the day and place", why: "Brief confusion is expected. Reorienting follows once the airway is secure." },
      { text: "Offer breakfast and oral fluids now", why: "A drowsy client may aspirate. Intake waits until the client is alert." },
      { text: "Explain that memory gaps are permanent", why: "Memory loss after treatment usually improves over weeks. This statement is also false." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s21-12", {
      topic: "Care with a sealed radiation implant",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client has a low-dose-rate sealed radiation source placed in the cervix for 3 days. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "Exposure falls with less time, more distance and shielding. A private room limits exposure to others. A lead container and long forceps let staff handle a source that falls out without touching it. Staff wear a dosimeter to track dose. Care is grouped to limit time at the bedside. Staff rotate rather than one nurse taking every shift. Children and pregnant visitors are not allowed. The client stays on bed rest so the source does not move.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Place the client in a private room", why: "A private room keeps others away from the source." },
      { text: "Assign one nurse to every shift", why: "Staff rotate so no one nurse builds up a high dose." },
      { text: "Keep a lead container and long forceps in the room", why: "A dislodged source is picked up with forceps and shielded at once." },
      { text: "Allow a 6-year-old grandchild to visit", why: "Children are not allowed to visit while the source is in place." },
      { text: "Wear a dosimeter badge in the room", why: "The badge measures each staff member's exposure." },
      { text: "Encourage walks in the hallway", why: "The client stays on bed rest so the source stays in place." },
      { text: "Group care to limit time at the bedside", why: "Less time near the source means a lower dose for staff." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s21-13", {
      topic: "Skin care during external beam radiation",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client who starts external beam radiation to the right chest wall next week. The therapist has drawn ink marks on the skin. Which statement by the client needs further teaching?",
      rationale:
        "The ink marks guide the beam to the same place at each session. Scrubbing them off risks treating the wrong area. Gentle washing with lukewarm water, loose cotton clothing and sun protection all limit skin damage in the treated field.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will scrub off the ink marks after each session.\"", why: "The marks guide the beam and stay until treatment ends. This statement needs correction." },
      { text: "\"I will wash the area with lukewarm water and mild soap.\"", why: "Gentle washing protects irritated skin in the treated field." },
      { text: "\"I will wear loose cotton tops over the area.\"", why: "Loose, soft fabric limits friction on the treated skin." },
      { text: "\"I will keep the treated area out of the sun.\"", why: "Treated skin burns easily, so sun protection is correct." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s21-14", {
      topic: "Checking skin traction setup",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 76-year-old client with a hip fracture is in Buck's skin traction with 3 kg of weight while waiting for surgery. Which finding shows the traction is working as intended?",
      rationale:
        "Traction pulls only when the weights hang freely. Weights on the floor or a rope knot jammed at the pulley stop the pull. A foot pressed against the footboard means the client has slid down, which removes the countertraction from body weight.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "The weights rest on the floor at night", why: "Weights on the floor apply no pull at all." },
      { text: "The foot presses against the footboard", why: "The client has slid down the bed, so countertraction is lost." },
      { text: "The rope knot sits against the pulley", why: "A knot at the pulley blocks the rope and stops the pull." },
      { text: "The weights hang freely off the bed", why: "Free-hanging weights give a steady pull as prescribed." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s21-15", {
      topic: "Care of a client in a halo vest",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with a cervical spine fracture has a new halo fixation device with a vest. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The wrench stays taped to the vest so the front can be opened fast for CPR. Skin under the vest edges can break down, and pin sites can become infected. Neurologic checks detect any change in cord function. The halo ring is never used to lift or turn the client. Only the primary health care provider tightens a pin. The vest stays on for bathing.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Tape the vest wrench to the front of the vest", why: "The wrench allows quick removal of the front panel for CPR." },
      { text: "Turn the client using the halo ring", why: "Pulling on the ring can move the pins and the fracture." },
      { text: "Inspect the skin under the vest edges", why: "Pressure and moisture under the vest can cause skin breakdown." },
      { text: "Tighten a loose pin with the wrench", why: "A loose pin is reported. The provider adjusts it." },
      { text: "Check pin sites for redness and drainage", why: "Pin sites are a route for infection." },
      { text: "Check limb strength and sensation", why: "Neurologic checks detect any change in spinal cord function." },
      { text: "Remove the vest for a tub bath", why: "The vest stays on. Removal can move the fracture." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s21-16", {
      topic: "Teaching after pacemaker insertion",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client had a permanent pacemaker placed in the left upper chest yesterday. The nurse reviews discharge teaching. Which statement by the client needs further teaching?",
      rationale:
        "A cell phone is kept at least 15 cm (6 inches) from the generator and held to the ear on the opposite side. A shirt pocket over the device breaks that rule. Limiting left arm movement lets the leads settle. The device card informs other providers and security staff. Swelling or drainage can mean bleeding or infection.",
      refs: ["Cell phones are kept at least 15 cm (6 inches) from the pulse generator."],
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will keep my left elbow below my shoulder for now.\"", why: "Limiting arm lift protects the new leads while they settle." },
      { text: "\"I will keep my cell phone in my left shirt pocket.\"", why: "This places the phone over the generator. It needs correction." },
      { text: "\"I will carry my device card when I travel.\"", why: "The card tells staff the device type and settings." },
      { text: "\"I will report swelling or drainage at the incision.\"", why: "These can signal bleeding or infection at the pocket." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s21-17", {
      topic: "Low-pressure ventilator alarm",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client on a mechanical ventilator is turned to the left side for skin care. The low-pressure alarm sounds and the exhaled tidal volume reads far below the set volume. SpO2 is falling. Which action should the nurse take first?",
      rationale:
        "A low-pressure alarm right after a turn most often means the circuit has come apart or the tube has lost its seal. The nurse checks the connections from the tube to the ventilator. If the cause is not found fast, the nurse disconnects and gives breaths with a bag-valve device. Suctioning treats a high-pressure alarm. Silencing the alarm leaves the client without a fix.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Suction the endotracheal tube", why: "Secretions raise airway pressure and set off the high-pressure alarm." },
      { text: "Silence the alarm and page respiratory therapy", why: "The client needs the cause fixed now. Waiting lets hypoxemia worsen." },
      { text: "Check the circuit for a disconnection", why: "A loose connection after turning is the most likely cause of low pressure." },
      { text: "Raise the set tidal volume", why: "A leak loses the added volume. The cause must be found first." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s21-18", {
      topic: "Sequence for synchronized cardioversion",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client with atrial flutter and a ventricular rate of 150/minute will have elective synchronized cardioversion. Consent is signed, an IV line is in place and procedural sedation has taken effect. Place the remaining steps in the order the nurse carries them out.",
      rationale:
        "Pads and monitor leads go on first so the rhythm is seen. Sync mode is then turned on and the markers checked on each R wave, so the shock avoids the T wave. The energy is chosen and the device charged. Everyone clears the bed, and then the shock is delivered. A precordial thump has no role. Turning sync off would allow a shock on the T wave.",
      sources: [ACLS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Turn on sync and check R wave markers", why: "Sync needs the monitored rhythm and is set before charging so the shock lands on the R wave." },
      { text: "Place the pads and monitor leads", why: "The rhythm must be seen before anything else is done." },
      { text: "Call all clear and check no one touches the bed", why: "This protects staff just before the shock." },
      { text: "Give a precordial thump to the chest", why: "A thump has no role in elective cardioversion." },
      { text: "Press and hold the shock buttons", why: "The shock is delivered last, once everyone is clear of the bed." },
      { text: "Select the energy and charge", why: "The device is charged after sync is confirmed." },
      { text: "Turn sync off before charging the device", why: "Without sync the shock may land on the T wave and cause ventricular fibrillation." },
    ],
    correct: [1, 0, 5, 2, 4],
  },
  {
    ...meta("rn-s21-19", {
      topic: "Anticoagulation before elective cardioversion",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with atrial fibrillation for 2 months is scheduled for elective cardioversion today without a transesophageal echocardiogram. BP is 128/76 mmHg and heart rate 104/minute. Potassium is 4.2 mEq/L (4.2 mmol/L). Which finding should the nurse report before the procedure?",
      rationale:
        "Atrial fibrillation for more than 48 hours can form a clot in the left atrium. Cardioversion can dislodge it and cause a stroke. Without a transesophageal echocardiogram, the client needs 3 weeks of steady anticoagulation first. Missed apixaban doses break that protection. Fasting, a potassium of 4.2 mEq/L and a morning metoprolol dose are all acceptable.",
      refs: ["Elective cardioversion of atrial fibrillation lasting 48 hours or more needs 3 weeks of uninterrupted anticoagulation or a transesophageal echocardiogram."],
      canada: "Canadian labs report potassium in SI units only, so it reads 4.2 mmol/L. The 2020 CCS/CHRS atrial fibrillation guideline also calls for at least 3 weeks of therapeutic anticoagulation or a transesophageal echocardiogram before elective cardioversion.",
      sources: [
        AF_GUIDE,
        { body: "Andrade JG, Aguilar M, Atzema C, et al. Canadian Cardiovascular Society and Canadian Heart Rhythm Society", work: "The 2020 Canadian Cardiovascular Society/Canadian Heart Rhythm Society Comprehensive Guidelines for the Management of Atrial Fibrillation. Canadian Journal of Cardiology 36(12):1847", year: 2020, url: "https://pubmed.ncbi.nlm.nih.gov/33191198/" },
        { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" },
      ],
    }),
    kind: "mc",
    options: [
      { text: "Nothing to eat since midnight", why: "Fasting is expected before sedation for the procedure." },
      { text: "Metoprolol taken at 0600 with a sip of water", why: "Rate control drugs are usually continued. This needs no report." },
      { text: "Four missed apixaban doses last week", why: "Missed doses mean the client lacks 3 weeks of steady anticoagulation, which raises stroke risk." },
      { text: "Potassium of 4.2 mEq/L", why: "4.2 mEq/L is within the normal range and supports a safe shock." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s21-20", {
      topic: "Limb check with an intra-aortic balloon pump",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client has an intra-aortic balloon pump inserted through the right femoral artery. One hour later the left radial pulse is absent and the left hand is cool and pale. The right radial pulse is strong and the right pedal pulses are present. Urine output is 60 mL per hour. What is the most likely cause?",
      rationale:
        "The balloon sits just below the left subclavian artery. If it moves upward it can block flow to the left arm. That explains an absent left radial pulse with a strong right radial pulse. Downward movement would block the renal arteries and cut urine output, which is 60 mL/hour. Present right pedal pulses make leg ischemia unlikely.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "The balloon has migrated to the left subclavian artery", why: "Upward movement blocks flow to the left arm, as seen here." },
      { text: "The balloon has migrated down and covers the renal arteries", why: "This would reduce urine output. Output is 60 mL/hour." },
      { text: "A clot has formed in the right femoral artery", why: "A femoral clot affects the right leg. Right pedal pulses are present." },
      { text: "The balloon inflates too early in each beat", why: "Timing errors change pressures in both arms, not a single limb." },
    ],
    correct: 0,
  },
];
