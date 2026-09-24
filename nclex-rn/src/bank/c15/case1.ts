import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c15-1";

/** Case 1. Medical unit. Young man with weakness that climbs from the legs toward the chest. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Weakness That Keeps Climbing",
  intro:
    "A 29-year-old man is admitted to the medical unit with leg weakness that has spread from his feet to his thighs over 4 days. He had a diarrheal illness 2 weeks ago. Guillain-Barre syndrome is diagnosed after a lumbar puncture. His first dose of intravenous immune globulin (IVIG) runs on day 1.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Diarrheal illness 2 weeks ago that settled without treatment.",
        "Tingling in both feet for 5 days, then leg weakness for 4 days.",
        "Leg strength 3 of 5. Arm strength 5 of 5. Knee and ankle reflexes absent.",
        "Cerebrospinal fluid: protein raised, white cell count normal.",
        "Weight 80 kg. No known allergies. No regular medications.",
        "Works as a carpenter. Lives with his partner.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "IVIG 0.4 g/kg IV daily for 5 days.",
        "Enoxaparin 40 mg subcutaneous daily.",
        "Vital capacity every 4 hours. Call the primary health care provider for a fall of 20 percent or more.",
        "Acetaminophen 650 mg by mouth every 6 hours as needed for pain.",
        "Diet as tolerated.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 1 0800"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "124/76 mmHg"],
          ["SpO2", "98% on room air"],
          ["Vital capacity", "2900 mL"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Findings as nerve weakness spreads",
        cjmm: "recognize",
        difficulty: 2,
        stem: "On day 2 at 1400 the nurse reviews the flow sheet and writes the note below. Click to highlight the findings that require follow-up.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "Day 1 0800", "Day 2 0300", "Day 2 1000", "Day 2 1400"],
              rows: [
                ["Temperature", "36.8°C (98.2°F)", "36.9°C (98.4°F)", "37.0°C (98.6°F)", "36.9°C (98.4°F)"],
                ["Heart rate", "84/minute", "52/minute", "128/minute", "110/minute"],
                ["Respiratory rate", "16/minute", "18/minute", "22/minute", "24/minute"],
                ["BP", "124/76 mmHg", "98/58 mmHg", "166/98 mmHg", "150/90 mmHg"],
                ["SpO2", "98% on room air", "97% on room air", "96% on room air", "95% on room air"],
                ["Vital capacity", "2900 mL", "2300 mL", "1800 mL", "1400 mL"],
              ],
            },
          },
        ],
        rationale:
          "Leg strength has fallen from 3 of 5 to 2 of 5, so the weakness is still progressing. A weak cough and a vital capacity of 1400 mL, down from 2900 mL, show the breathing muscles are failing. Coughing on water and a nasal voice point to weak swallowing muscles. A 600 mL bladder volume after a failed void is urinary retention. Unchanged tingling, full orientation, intact skin and relieved back ache need no new action.",
        sources: [SRC.leonhard, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Legs 2 of 5 strength]], down from 3 of 5. [[Arms 5 of 5 strength]]. [[Tingling in both feet, unchanged]]. [[Cough is weak]]. [[Coughed twice while drinking water at lunch]]. [[Voice soft and nasal]]. [[Vital capacity 1400 mL]], down from 2900 mL on day 1. [[Bladder scan shows 600 mL after he could not void]]. [[Alert and oriented]]. [[Skin intact over the sacrum and both heels]]. [[Back ache eased after acetaminophen at 0900]].",
      spans: [
        { text: "Legs 2 of 5 strength", why: "Falling strength shows the weakness is still spreading and needs close tracking." },
        { text: "Arms 5 of 5 strength", why: "Full arm strength matches admission and needs no new action." },
        { text: "Tingling in both feet, unchanged", why: "Tingling that has not changed since admission is expected in this illness." },
        { text: "Cough is weak", why: "A weak cough shows weak expiratory muscles and poor airway clearance." },
        { text: "Coughed twice while drinking water at lunch", why: "Coughing on thin liquid suggests weak swallowing muscles and aspiration risk." },
        { text: "Voice soft and nasal", why: "A nasal voice points to weakness of the palate and throat muscles." },
        { text: "Vital capacity 1400 mL", why: "The value has fallen by more than half since day 1, which signals failing breathing muscles." },
        { text: "Bladder scan shows 600 mL after he could not void", why: "Urine retention can reflect autonomic nerve involvement and needs drainage." },
        { text: "Alert and oriented", why: "Normal orientation is expected because the illness spares the brain." },
        { text: "Skin intact over the sacrum and both heels", why: "Intact skin needs routine prevention only, not new follow-up." },
        { text: "Back ache eased after acetaminophen at 0900", why: "Pain that responds to the prescribed drug is controlled for now." },
      ],
      correct: [0, 3, 4, 5, 6, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Sorting signs of nerve involvement",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse groups the client's day 2 findings by the nerves involved. For each finding, specify the problem it is most consistent with.",
        rationale:
          "Guillain-Barre syndrome can affect breathing muscles, the muscles of the throat and the autonomic nerves. A falling vital capacity and a weak cough reflect the breathing muscles. Coughing on water and a nasal voice reflect the throat and palate. Swings in heart rate and BP and urine retention reflect autonomic nerve damage.",
        sources: [SRC.leonhard, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Respiratory muscle weakness", "Throat muscle weakness", "Autonomic dysfunction"],
      rows: [
        { text: "Vital capacity 1400 mL, down from 2900 mL", correct: [0], why: "Vital capacity measures the strength of the breathing muscles." },
        { text: "Heart rate 52/minute at 0300 and 128/minute at 1000", correct: [2], why: "Wide heart rate swings reflect unstable autonomic control." },
        { text: "Coughing while drinking water", correct: [1], why: "Weak throat muscles let liquid enter the airway during a swallow." },
        { text: "Weak cough", correct: [0], why: "A weak cough reflects weak expiratory and abdominal muscles." },
        { text: "BP 98/58 mmHg at 0300 and 166/98 mmHg at 1000", correct: [2], why: "BP that swings high and low reflects autonomic nerve damage." },
        { text: "Soft, nasal voice", correct: [1], why: "A nasal voice comes from weak palate muscles." },
        { text: "Urine retention of 600 mL", correct: [2], why: "Bladder emptying depends on autonomic nerves." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Vital capacity per kilogram",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse compares the client's 1400 mL vital capacity at 1400 with his weight of 80 kg. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Dividing 1400 mL by 80 kg gives 17.5 mL/kg. A value below 20 mL/kg predicts the need for a ventilator. The fall from 2900 mL on day 1 is steep. With a weak cough, the highest risk is respiratory failure. No leg swelling, chest pain, fever or burning on voiding was described.",
        refs: ["A vital capacity below 20 mL/kg predicts the need for mechanical ventilation in Guillain-Barre syndrome."],
        calc: { expr: "1400 / 80", answer: 17.5, unit: "mL/kg", round: 1, steps: ["1400 / 80 = 17.5"] },
        sources: [SRC.lawn, SRC.leonhard],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The client is at highest risk for {0} as shown by a vital capacity of {1}.",
      blanks: [
        {
          options: [
            { text: "pulmonary embolism", why: "Embolism shows as sudden chest pain and hypoxia. The stem gives neither." },
            { text: "respiratory failure", why: "A vital capacity below 20 mL/kg with a weak cough signals failing breathing muscles." },
            { text: "hypertensive crisis", why: "BP swings from autonomic damage are a concern, but they are not the highest risk here." },
            { text: "urinary tract infection", why: "Retention raises infection risk later, but no fever, burning or cloudy urine is described." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "36.3 mL/kg", why: "This uses the day 1 value of 2900 mL, not the current 1400 mL." },
            { text: "1.75 mL/kg", why: "This misplaces the decimal point by one place." },
            { text: "17.5 mL/kg", why: "1400 mL divided by 80 kg is 17.5 mL/kg, below the 20 mL/kg threshold." },
            { text: "175 mL/kg", why: "This moves the decimal point one place the wrong way." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety plan for spreading weakness",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse updates the plan of care to keep the client safe while his weakness and swallowing problems progress. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Weak breathing and swallowing muscles call for suction and a bag-valve mask at the bedside. Oral intake waits until swallowing is assessed, because he coughed on water. Leg strength of 2 of 5 makes a low bed and help with each transfer essential. Four raised rails act as a restraint. Tingling feet and weak legs can burn under a heating pad. A straw speeds thin liquid into a weak throat.",
        sources: [SRC.brunner, SRC.leonhard],
      }),
      kind: "sata",
      options: [
        { text: "Raise all four side rails at night", why: "Four raised rails act as a restraint and can lead to falls over the rails." },
        { text: "Keep suction and a bag-valve mask at the bedside", why: "Weak cough and swallowing muscles raise the risk of airway blockage and sudden failure." },
        { text: "Apply a heating pad to his legs for comfort", why: "Altered sensation and legs too weak to move away from heat raise the risk of a burn." },
        { text: "Keep the bed in its lowest position", why: "A low bed reduces injury if the weak client falls." },
        { text: "Offer thin liquids through a straw", why: "A straw delivers thin liquid fast and raises aspiration risk with weak throat muscles." },
        { text: "Help him with each transfer", why: "Leg strength of 2 of 5 cannot support safe standing alone." },
        { text: "Hold oral intake until swallowing is assessed", why: "He coughed on water, so a swallow assessment comes before more oral intake." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Assigning care on the medical unit",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The registered nurse leads a team with an assistive personnel, a licensed practical nurse and a physical therapist. Match each task for this client to the most appropriate team member. Each member may be used once.",
        rationale:
          "Turning a client on a set schedule is a routine task with a predictable outcome, so it goes to the assistive personnel. A scheduled subcutaneous injection of enoxaparin fits the practical nurse's scope for a stable task. Assessing a client whose breathing and swallowing are getting worse needs nursing judgment. That stays with the registered nurse. The physical therapist plans mobility but is not the right choice for 2-hourly turns.",
        sources: [SRC.delegation, { body: "Canadian Council for Practical Nurse Regulators", work: "Become a LPN/RPN", year: 2026, url: "https://ccpnr.ca/become-a-lpn-rpn/" }],
        canada: "In Canada the practical nurse is an RPN in Ontario and an LPN elsewhere. Assignment rules come from each provincial nursing regulator and vary by province.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: [
        "Turn and reposition the client every 2 hours",
        "Give the scheduled dose of enoxaparin 40 mg subcutaneous",
        "Assess breathing and swallowing after the vital capacity falls",
      ],
      tokens: [
        { text: "Assistive personnel", why: "Routine repositioning has a predictable outcome and can be assigned to assistive personnel." },
        { text: "Licensed practical nurse", why: "A scheduled subcutaneous injection is within practical nurse scope." },
        { text: "Registered nurse", why: "Assessing a worsening client needs registered nurse judgment and cannot be assigned." },
        { text: "Physical therapist", why: "The therapist plans mobility and exercise but does not provide routine 2-hourly turns." },
      ],
      correct: [0, 1, 2],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Fear of not being able to breathe",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 2,
        stem: "The client says, \"I am scared I will stop breathing and nobody will notice.\" He rates his fear 8 of 10. The nurse explains the monitoring plan, places the call light by his hand and stays with him during checks. Which two findings the next morning show the plan is working? Select two.",
        rationale:
          "The goal was lower fear and a sense of safety. Fear that falls from 8 of 10 to 3 of 10 shows progress. A client who can describe how often his breathing is checked understands the plan that protects him. Asking the nurse not to leave, gripping the rail during checks and refusing visitors all show fear or withdrawal still in charge.",
        sources: [SRC.brunner, SRC.leonhard],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "He grips the bed rail during each check", why: "Gripping the rail shows he is still tense during the checks." },
        { text: "He says, \"I know you check my breathing every 4 hours.\"", why: "Knowing the monitoring plan shows he trusts that a change will be caught." },
        { text: "He asks the nurse not to leave the room", why: "Needing constant presence shows his fear is still high." },
        { text: "He rates his fear 3 of 10", why: "A drop from 8 of 10 shows the plan is easing his fear." },
        { text: "He asks for the lights off and no visitors", why: "Withdrawing from people can signal low mood, not relief." },
      ],
      correct: [1, 3],
    },
  ],
};
