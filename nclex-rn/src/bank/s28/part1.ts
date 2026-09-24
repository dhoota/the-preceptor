import type { Item } from "@/engine/types";
import { ASPEN_EN, DSM, HALTER, HINKLE, NPIAP, POTTER, YALOM, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s28-01", {
      need: "BCC",
      topic: "Climbing stairs with a cane",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 68-year-old client has left leg weakness after a stroke and walks with a single-point cane. Three steps lead up to the client's front door. Which instruction should the nurse give for going up the steps?",
      rationale:
        "The cane is held in the hand on the stronger side, here the right. Going up, the stronger right leg lifts the body first. The cane and the weak left leg follow onto the same step. Going down reverses this, with the cane and weak leg leading. Leading upward with the weak leg asks it to lift the full body weight.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Step up with the left leg, then the cane and right leg", why: "The weak left leg cannot safely lift the body weight onto the next step." },
      { text: "Step up with the right leg, then the cane and left leg", why: "The strong leg lifts the body up and the cane supports the weak leg as it follows." },
      { text: "Move the cane up first, then the left leg, then the right", why: "Cane and weak leg lead when going down. Going up, the strong leg leads." },
      { text: "Hold the cane in the left hand while on the steps", why: "The cane belongs in the hand opposite the weak leg, which is the right hand." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-02", {
      need: "PSY",
      topic: "Depression that looks like memory loss",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A daughter brings her 76-year-old parent to the clinic. The parent's spouse died 6 weeks ago. Since then the parent has stopped cooking and answers most questions with \"I don't know.\" The parent says, \"My memory is terrible now.\" Until the spouse died, the parent managed all the household bills. Which condition do these findings most suggest?",
      rationale:
        "The change began after a major loss and has lasted 6 weeks. The client complains about memory loss and gives up on questions with \"I don't know\". Both point to depression with cognitive symptoms. The client managed the bills until 6 weeks ago, so the decline was fast. Alzheimer disease starts slowly, and people with it tend to hide or play down deficits. Delirium develops over hours to days with a swinging level of attention.",
      sources: [HALTER, DSM],
    }),
    kind: "mc",
    options: [
      { text: "Early stage Alzheimer disease", why: "Alzheimer disease develops slowly, and the person often hides memory gaps rather than stressing them." },
      { text: "Delirium from an acute medical illness", why: "Delirium comes on over hours to days with shifting attention. The stem gives no acute illness." },
      { text: "Normal memory change of aging", why: "Normal aging does not cause a rapid loss of function that follows a bereavement." },
      { text: "Depression with cognitive symptoms", why: "A fast decline after a loss, complaints about memory and \"I don't know\" answers fit depression." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s28-03", {
      need: "BCC",
      topic: "Pressure injury prevention plan",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "An 81-year-old client is on bed rest after repair of a hip fracture. The Braden score is 12. The client is sometimes incontinent of urine. Which measures should the nurse include in the plan to prevent pressure injury? Select all that apply.",
      rationale:
        "A Braden score of 12 places the client at high risk. Floating the heels removes pressure from a common injury site. Keeping the head of the bed at 30 degrees or lower limits shear on the sacrum. Prompt cleansing after incontinence limits moisture damage. Regular repositioning relieves pressure over bony areas. Massage and ring cushions harm tissue. Stacked pads trap moisture and heat.",
      refs: ["A Braden score of 10 to 12 indicates high risk for pressure injury."],
      sources: [NPIAP, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Float the heels off the bed on a pillow", why: "Offloading the heels removes pressure from a site that injures easily." },
      { text: "Massage reddened skin over the sacrum", why: "Massage over reddened bony areas can damage fragile tissue further." },
      { text: "Keep the head of the bed at 30 degrees or lower", why: "A lower head of bed reduces sliding and shear over the sacrum." },
      { text: "Place a foam ring under the sacrum", why: "Ring devices concentrate pressure on the skin around the ring." },
      { text: "Cleanse skin promptly after incontinence", why: "Prompt cleansing limits moisture and irritant damage to the skin." },
      { text: "Reposition the client on a regular schedule", why: "Scheduled turning relieves sustained pressure over bony areas." },
      { text: "Layer extra absorbent pads under the hips", why: "Several layers of pads trap heat and moisture against the skin." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s28-04", {
      need: "PSY",
      topic: "Meals for a client who fears poisoning",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A 45-year-old client with delusional disorder refuses each hospital meal. The client says, \"The kitchen staff put poison in my food.\" In 24 hours the client has eaten only crackers from a sealed packet. Which action should the nurse take?",
      rationale:
        "The client will eat food from a sealed packet. Offering sealed, unopened foods meets nutrition needs without challenging the fixed belief. Logic does not change a delusion and can raise mistrust. Tasting the food suggests it could be unsafe. Linking meals to discharge is a threat that damages trust.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Offer foods in sealed, unopened packages", why: "The client already accepts sealed food, so this meets nutrition needs without a power struggle." },
      { text: "Taste the meal in front of the client", why: "Tasting implies the food might be unsafe and does not address the belief." },
      { text: "Explain how the kitchen checks food safety", why: "Reasoning does not change a fixed false belief and can increase suspicion." },
      { text: "Say that refusing meals will delay discharge", why: "A threat damages trust and does not address the client's fear." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s28-05", {
      need: "BCC",
      topic: "Totaling shift intake and output",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse totals intake and output at the end of an 8-hour shift. The client drank 240 mL, 180 mL and 120 mL of fluid. The IV infused 600 mL. The client voided 350 mL and 425 mL and vomited 100 mL. What is the client's fluid balance for the shift?",
      rationale:
        "Intake is the oral fluid plus the IV fluid, which totals 1140 mL. Output is the urine plus the emesis, which totals 875 mL. Intake minus output gives a positive balance of 265 mL. Emesis counts as output. IV fluid counts as intake.",
      calc: {
        expr: "240 + 180 + 120 + 600 - (350 + 425 + 100)",
        answer: 265,
        unit: "mL",
        round: 0,
        steps: ["240 + 180 + 120 + 600 = 1140", "350 + 425 + 100 = 875", "1140 - 875 = 265"],
      },
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Negative 335 mL", why: "This leaves the 600 mL of IV fluid out of the intake." },
      { text: "Positive 165 mL", why: "This subtracts the 100 mL of emesis twice." },
      { text: "Positive 265 mL", why: "Intake of 1140 mL minus output of 875 mL is 265 mL." },
      { text: "Positive 365 mL", why: "This leaves the 100 mL of emesis out of the output." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s28-06", {
      need: "PSY",
      topic: "Codependent behavior in a spouse",
      cjmm: "recognize",
      process: "communication",
      difficulty: 3,
      stem: "The nurse talks with the wife of a client admitted for alcohol use disorder. Which statements by the wife suggest codependent behavior? Select all that apply.",
      rationale:
        "Codependence shows as covering for the drinker, taking blame for the drinking and giving up one's own needs. Calling the employer with an excuse and hiding bottles both shield the client from consequences. Believing a calmer house would stop the drinking takes on his responsibility. Dropping friends to watch him sacrifices her own needs. Al-Anon attendance, refusing to buy alcohol and learning the treatment plan are healthy steps.",
      sources: [HALTER],
    }),
    kind: "sata",
    options: [
      { text: "\"I call his boss and say he has the flu.\"", why: "Making excuses protects the client from the results of drinking." },
      { text: "\"I go to an Al-Anon meeting every Tuesday night.\"", why: "A support group for families is a healthy way to cope." },
      { text: "\"If I kept the house calm, he would not drink.\"", why: "She takes responsibility for his drinking, a core codependent belief." },
      { text: "\"I told him I will not buy him alcohol anymore.\"", why: "Refusing to supply alcohol is a healthy boundary." },
      { text: "\"I hide his empty bottles from our kids.\"", why: "Hiding evidence covers up the problem and shields the client." },
      { text: "\"I stopped seeing friends so I can watch him.\"", why: "Giving up her own needs to monitor him is a codependent pattern." },
      { text: "\"I want to learn about his treatment plan.\"", why: "Seeking information about treatment supports recovery." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s28-07", {
      need: "BCC",
      topic: "Feeding a client with dysphagia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 70-year-old client with dysphagia after a stroke has a prescription for a pureed diet with mildly thick liquids. The client has right facial weakness. Which action should the nurse take while helping the client eat lunch?",
      rationale:
        "A chin tuck while swallowing narrows the airway entrance and helps protect it. The client should sit fully upright for meals. Food goes on the stronger left side of the mouth, away from the weak right side. A straw sends liquid to the back of the throat faster and raises aspiration risk.",
      sources: [HINKLE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Offer a straw for the thick liquids", why: "A straw delivers a larger, faster bolus and raises aspiration risk." },
      { text: "Place food on the right side of the mouth", why: "Food belongs on the stronger side. The right side is the weak side." },
      { text: "Have the client tuck the chin to swallow", why: "A chin tuck helps close off the airway during the swallow." },
      { text: "Recline the bed to 45 degrees for the meal", why: "A partly reclined position raises aspiration risk. The client should sit fully upright." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s28-08", {
      need: "PSY",
      topic: "Managing a monopolizing group member",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "During an inpatient group therapy session, one member has talked for most of the first 20 minutes and interrupts others. Two quieter members have stopped making eye contact. Which action by the nurse leading the group is best?",
      rationale:
        "The leader protects the group by redirecting a member who dominates. Acknowledging the member and opening the floor to others keeps the member's dignity. It also brings the quiet members back in during this session. Removal is punitive. Waiting lets the withdrawal continue. A private talk later leaves the pattern in place for the rest of the session.",
      sources: [YALOM, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Ask the member to leave the session for today", why: "Removal is punitive when the leader can redirect the behavior in the group." },
      { text: "Thank the member and invite others to respond", why: "This respects the member and draws the quieter members back in now." },
      { text: "Wait and let the group solve the problem itself", why: "Two members are already withdrawing, so waiting lets the pattern continue." },
      { text: "Talk with the member alone after the session", why: "This leaves the quieter members silent for the rest of this session." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-09", {
      need: "BCC",
      topic: "Giving a gastrostomy bolus feeding",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give a prescribed bolus feeding through a client's gastrostomy tube. The client is sitting upright in bed. Place the steps in order.",
      rationale:
        "The nurse first checks the external length mark to confirm the tube has not moved. A water flush before the feeding confirms the tube is open. The formula runs in by gravity. A second flush clears formula from the tube. The head of the bed stays raised after the feeding to lower aspiration risk. Lying flat raises that risk.",
      sources: [ASPEN_EN, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Instill the formula by gravity", why: "The formula goes in after the first flush shows the tube is open." },
      { text: "Check the tube length mark at the skin", why: "Checking the mark first confirms the tube has not migrated." },
      { text: "Flush the tube with 30 mL of water", why: "A flush before feeding confirms the tube is open." },
      { text: "Lower the head of the bed to flat", why: "Lying flat after a feeding raises the risk of aspiration." },
      { text: "Flush again with 30 mL of water", why: "The second flush clears formula so the tube does not clog." },
      { text: "Keep the head of the bed raised afterward", why: "Staying upright after the feeding lowers aspiration risk." },
    ],
    correct: [1, 2, 0, 4, 5],
  },
  {
    ...meta("rn-s28-10", {
      need: "PSY",
      topic: "Adaptive coping after a job loss",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 50-year-old client lost a factory job 3 weeks ago and has met twice with a community mental health nurse. Which statement by the client shows adaptive coping?",
      rationale:
        "Adaptive coping acts on the problem and uses support. Working on a resume each morning is problem-focused action. Walking with a friend adds social support and exercise. Staying in bed is withdrawal. Drinking to stop thinking is avoidance. Insisting the layoff will be reversed is denial.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I stay in bed most mornings because there is no point.\"", why: "Staying in bed is withdrawal and can signal depression." },
      { text: "\"A few drinks at night help me stop thinking about it.\"", why: "Using alcohol to avoid feelings is a maladaptive coping pattern." },
      { text: "\"I keep telling my wife they will call me back soon.\"", why: "Expecting a recall with no basis is denial of the loss." },
      { text: "\"I work on my resume each morning, then walk with a friend.\"", why: "This combines problem-focused action with social support." },
    ],
    correct: 3,
  },
];
