import type { Item } from "@/engine/types";
import { ANA_CODE, ANA_FATIGUE, BEAUCHAMP, CMS_RIGHTS, DELEGATION, HINKLE, MELNYK, POTTER, RED, YODER, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s03-31", {
      topic: "Strongest level of evidence",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 1,
      stem: "A nursing practice council wants the strongest evidence on whether daily chlorhexidine bathing lowers bloodstream infections in intensive care. Which source gives the highest level of evidence?",
      rationale:
        "A meta-analysis pools the results of many randomized trials. It sits at the top of the evidence hierarchy for questions about an intervention. One trial, however large, gives less certainty than many trials combined. A cohort study does not randomize, so bias is more likely. Expert opinion sits at the bottom of the hierarchy.",
      sources: [MELNYK],
    }),
    kind: "mc",
    options: [
      { text: "A meta-analysis of randomized trials", why: "Pooling many randomized trials gives the highest level of evidence for an intervention." },
      { text: "One large randomized controlled trial", why: "A single trial ranks below a pooled analysis of many trials." },
      { text: "A cohort study from one hospital", why: "A cohort study does not randomize, so it ranks lower." },
      { text: "An opinion paper from an expert panel", why: "Expert opinion is the lowest level of evidence." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s03-32", {
      topic: "Parts of a clinical question",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nurse writes this clinical question. In older adults after hip surgery, does hourly rounding compared with usual care lead to fewer falls during the hospital stay? Match each part of the question to its element.",
      rationale:
        "A PICOT question names the population, the intervention, the comparison, the outcome and the time frame. Here the population is older adults after hip surgery. Hourly rounding is the intervention and usual care is the comparison. Fewer falls is the outcome, measured during the hospital stay. Bed alarms and the unit nurses do not appear in the question.",
      sources: [MELNYK],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Population", "Intervention", "Comparison", "Outcome", "Time"],
    tokens: [
      { text: "usual care", why: "Usual care is what the intervention is compared with." },
      { text: "during the hospital stay", why: "The hospital stay is the time frame for the outcome." },
      { text: "older adults after hip surgery", why: "This is the group the question studies." },
      { text: "bed alarms on every bed", why: "Bed alarms do not appear in the question." },
      { text: "hourly rounding", why: "Hourly rounding is the action being tested." },
      { text: "fewer falls", why: "Fewer falls is the result the question measures." },
      { text: "the nurses on the unit", why: "The nurses deliver care but are not an element of this question." },
    ],
    correct: [2, 4, 0, 5, 1],
  },
  {
    ...meta("rn-s03-33", {
      topic: "Asked to stay after a night shift",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "A nurse has just finished a 12-hour night shift after sleeping 4 hours the day before. Two staff called in sick, and the charge nurse asks the nurse to stay for the day shift. The nurse feels drowsy. What is the most appropriate response?",
      rationale:
        "Fatigue slows reaction time and raises the risk of errors. Nurses have an ethical duty to weigh their rest before accepting extra hours. A nurse who is too tired to work safely may decline overtime. The employer is responsible for finding other staff. Coffee, a lighter load or a shorter extra stint do not remove the risk from this level of fatigue.",
      sources: [ANA_FATIGUE, ANA_CODE],
    }),
    kind: "mc",
    options: [
      { text: "Stay and drink coffee to remain alert", why: "Caffeine masks sleepiness briefly. It does not restore safe judgment." },
      { text: "Stay but care only for stable clients", why: "Stable clients can still be harmed by errors from fatigue." },
      { text: "Agree to stay for half of the shift", why: "Several more hours awake still leaves the nurse unsafe." },
      { text: "Decline and explain that fatigue makes care unsafe", why: "A fatigued nurse may decline extra hours to protect clients." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s03-34", {
      topic: "Clear directions when delegating",
      cjmm: "generate",
      process: "communication",
      difficulty: 3,
      stem: "The nurse delegates vital signs for a client 1 day after abdominal surgery to an assistive personnel (AP). Which two instructions give the AP clear direction? Select two.",
      rationale:
        "Clear delegation names what to do, when to do it and what to report. Set times for the checks and a set heart rate that must be reported right away meet that standard. Vague phrases such as when you have time or if anything seems off leave the AP to guess. Assessing the incision is not delegated to an AP.",
      sources: [DELEGATION, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Delegation rules vary by province and come from each provincial regulator and employer policy.",
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"Take vital signs at 1000 and 1400, then report them.\"", why: "This gives set times and says to report back." },
      { text: "\"Check the vital signs whenever you have some time.\"", why: "No time is given, so checks may be late or missed." },
      { text: "\"Report a heart rate over 110/minute right away.\"", why: "A set limit tells the AP exactly when to report." },
      { text: "\"Let me know if anything seems off to you.\"", why: "The AP is left to judge what is abnormal." },
      { text: "\"Look at the incision while you are in the room.\"", why: "Assessing an incision is a nursing task. It is not delegated." },
      { text: "\"Take the vital signs as you usually do.\"", why: "This gives no times and no values to report." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s03-35", {
      topic: "First resident to see in long-term care",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The registered nurse in a long-term care facility receives four reports from the practical nurse at the start of the shift. Which resident should the registered nurse see first?",
      rationale:
        "Slurred speech that began after breakfast is a new neurological change. It can signal a stroke, where treatment depends on time from onset. This resident comes first. Wandering in known dementia needs supervision but is not new. A dressing on a stage 2 injury is routine. A care plan talk with family can be scheduled.",
      sources: [HINKLE, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "A resident with dementia who wanders in the hall", why: "Wandering in known dementia needs supervision but is not a new change." },
      { text: "A resident with a stage 2 pressure injury due for care", why: "A routine dressing can wait a short time." },
      { text: "A resident with new slurred speech since breakfast", why: "New slurred speech can signal a stroke. Time from onset guides treatment." },
      { text: "A resident whose daughter asks to discuss the plan", why: "A family meeting matters but can be scheduled later." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s03-36", {
      topic: "Follow-up call after discharge",
      cjmm: "recognize",
      process: "communication",
      difficulty: 2,
      stem: "A nurse calls a client 2 days after discharge from a heart failure admission. Which findings from the call need follow-up? Select all that apply.",
      rationale:
        "A follow-up call checks medicines, symptoms, appointments and whether the client knows whom to call. An unfilled prescription means a missed treatment. A new need for 3 pillows to sleep suggests fluid is building up. Not knowing whom to call leaves the client without help when problems arise. A booked visit, low-sodium meals and walking without breathlessness are signs the plan is working.",
      sources: [RED, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Has not filled the new spironolactone prescription", why: "The client is missing a prescribed heart failure drug." },
      { text: "Needs 3 pillows to sleep since coming home", why: "New trouble breathing when lying flat can mean fluid overload." },
      { text: "Has a follow-up visit booked for next week", why: "A booked visit shows the plan is in place." },
      { text: "Does not know whom to call with questions", why: "The client needs a contact for problems at home." },
      { text: "Eats low-sodium meals that a son prepares", why: "A low-sodium diet supports heart failure care." },
      { text: "Walks to the mailbox without getting short of breath", why: "Tolerating activity is a good sign." },
    ],
    correct: [0, 1, 3],
  },
  {
    ...meta("rn-s03-37", {
      topic: "Charting of checks that were not done",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "At the end of the shift, the nurse sees a coworker chart hourly neurological checks from 1300 to 1500 for a client after a head injury. The nurse was in the room during that time and saw no checks done. What should the nurse do first?",
      rationale:
        "The client after a head injury may have gone from 1300 to 1500 without a real neurological check. Client safety comes first, so the nurse checks the client now. The nurse then reports the false entries to the charge nurse through the chain of command. Deleting entries alters the legal record. A report to the board may follow the facility's review.",
      sources: [ANA_CODE, POTTER, { body: "Government of Ontario", work: "Nursing Act, 1991, S.O. 1991, c. 32", year: 1991, url: "https://www.ontario.ca/laws/statute/91n32" }],
      canada:
        "In Canada, concerns about a nurse's conduct go to the provincial or territorial nursing regulator, such as the College of Nurses of Ontario, not a state board.",
    }),
    kind: "mc",
    options: [
      { text: "Report the coworker to the state board of nursing", why: "A board report may follow later. The client's status is unknown now." },
      { text: "Do a neurological check on the client now", why: "The client may not have been checked. Safety comes first." },
      { text: "Ask the coworker to delete the entries", why: "Deleting entries alters the legal record and hides the event." },
      { text: "Report the concern to the charge nurse", why: "Reporting is needed, but the client's condition must be checked first." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s03-38", {
      topic: "Naming ethical principles",
      cjmm: "recognize",
      process: "caring",
      difficulty: 1,
      stem: "A nurse tells a client, \"I will be back in 15 minutes to help you walk,\" and returns on time. Later the nurse gives the last open bed to the client with the greatest need, not the first to ask. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Fidelity is keeping promises and commitments. Returning in 15 minutes as promised shows it. Justice is fair distribution of care and resources. Giving the bed to the client with the greatest need shows it. Veracity is truth telling. Autonomy is respect for the client's own choices. Nonmaleficence is avoiding harm.",
      sources: [BEAUCHAMP, ANA_CODE],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "Keeping the promise shows {0}, and assigning the bed by need shows {1}.",
    blanks: [
      {
        options: [
          { text: "veracity", why: "Veracity is telling the truth. The act here is keeping a promise." },
          { text: "fidelity", why: "Fidelity means keeping promises, as the nurse did." },
          { text: "autonomy", why: "Autonomy is the client's right to choose. It is not about the nurse's promise." },
          { text: "beneficence", why: "Beneficence is doing good. Keeping a promise is named fidelity." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "nonmaleficence", why: "Nonmaleficence is avoiding harm. The act here is fair allocation." },
          { text: "autonomy", why: "Autonomy concerns the client's choices, not how beds are shared." },
          { text: "fidelity", why: "Fidelity is keeping promises. Sharing by need is justice." },
          { text: "justice", why: "Justice means fair allocation based on need." },
        ],
        correct: 3,
      },
    ],
  },
  {
    ...meta("rn-s03-39", {
      topic: "Gaps in restraint care",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "A confused client has soft wrist restraints for pulling at a nasogastric tube. At 1400 the nurse reviews the restraint note for the day. Click to highlight the entries that show a gap in required restraint care.",
      rationale:
        "Restraint needs a specific prescription. An as-needed prescription is not allowed. The last release and range of motion were at 0800. By 1400 the client had gone most of the shift without release. Cool, pale fingers show poor circulation and need action now. Less restrictive measures must be tried or considered first and charted. Quick-release knots on the frame, a two-finger fit, fluids, toileting and family updates meet the standard.",
      sources: [CMS_RIGHTS, POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Restraints applied at 0800 under an as-needed prescription]]. [[Straps tied to the bed frame with quick-release knots]]. [[Two fingers fit under each wrist strap]]. [[Last release and range of motion at 0800]]. [[Offered fluids and the bedpan at 1000 and 1200]]. [[Fingers on the right hand cool and pale]]. [[No less restrictive measures charted]]. [[Family told the reason for the restraints]].",
    spans: [
      { text: "Restraints applied at 0800 under an as-needed prescription", why: "Restraint prescriptions may not be written as needed." },
      { text: "Straps tied to the bed frame with quick-release knots", why: "Tying to the frame with a quick-release knot is correct." },
      { text: "Two fingers fit under each wrist strap", why: "A two-finger fit shows the strap is not too tight." },
      { text: "Last release and range of motion at 0800", why: "No release from 0800 to 1400 risks harm to skin and circulation." },
      { text: "Offered fluids and the bedpan at 1000 and 1200", why: "Regular fluids and toileting meet the client's needs." },
      { text: "Fingers on the right hand cool and pale", why: "Poor circulation distal to a restraint needs action now." },
      { text: "No less restrictive measures charted", why: "Less restrictive options must be tried or ruled out first and charted." },
      { text: "Family told the reason for the restraints", why: "Informing the family is appropriate." },
    ],
    correct: [0, 3, 5, 6],
  },
  {
    ...meta("rn-s03-40", {
      topic: "Cost-effective use of supplies",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 1,
      stem: "The nurse manager reviews supply use on a surgical unit. Which staff actions show cost-effective use of resources? Select all that apply.",
      rationale:
        "Cost-effective care uses what is needed without waste or lower quality. Bundling blood draws saves supplies and spares the client extra sticks. Returning sealed, unused items keeps them in use. The lowest-cost product that meets the need saves money without harm. Opening a full kit for one item, taking extra supplies into isolation rooms and overstocking waste resources.",
      sources: [YODER],
    }),
    kind: "sata",
    options: [
      { text: "Opening a full dressing kit for one gauze pad", why: "The rest of the kit is wasted once opened." },
      { text: "Bundling blood draws into one venipuncture", why: "One stick uses fewer supplies and spares the client pain." },
      { text: "Returning unused sealed supplies to stock", why: "Sealed items can be used again, so nothing is wasted." },
      { text: "Taking extra supplies into an isolation room", why: "Extra supplies in isolation are often discarded unused." },
      { text: "Choosing the lowest-cost product that meets the need", why: "This saves money without lowering the quality of care." },
      { text: "Ordering extra stock to avoid running short", why: "Overstock ties up money and lets items expire unused." },
    ],
    correct: [1, 2, 4],
  },
];
