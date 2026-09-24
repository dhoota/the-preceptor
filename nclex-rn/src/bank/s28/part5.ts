import type { Item, Source } from "@/engine/types";
import { ASPEN_EN, CHS, CLAS, HALTER, HINKLE, HOCKENBERRY, NPIAP, PAINAD, POTTER, meta } from "./common";

const STATCAN_CCMED: Source = {
  body: "Statistics Canada",
  work: "Canadian Coroner and Medical Examiner Database: Annual Report",
  year: 2012,
  url: "https://www150.statcan.gc.ca/n1/pub/82-214-x/82-214-x2012001-eng.htm",
};

const TRC_CALLS: Source = {
  body: "Truth and Reconciliation Commission of Canada",
  work: "Truth and Reconciliation Commission of Canada: Calls to Action",
  year: 2015,
  url: "https://ehprnh2mwo3.exactdn.com/wp-content/uploads/2021/01/Calls_to_Action_English2.pdf",
};

export const PART5: Item[] = [
  {
    ...meta("rn-s28-41", {
      need: "PSY",
      topic: "Hospital care for an autistic adolescent",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 15-year-old client with autism spectrum disorder is admitted to a pediatric unit for an appendectomy. The client speaks in full sentences but becomes distressed by noise and changes in routine. Which measures should the nurse plan? Select all that apply.",
      rationale:
        "Noise and change distress this client. Parents know which calming strategies work, so the nurse asks them. Clear, literal language avoids confusion. A picture schedule makes the day predictable. Dimmer light and fewer alarms lower sensory load. Rotating nurses adds change. A room by the busy station adds noise. Jokes and figures of speech are easily taken literally.",
      sources: [HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Assign a different nurse each shift for variety", why: "Frequent changes in caregivers add to distress over change." },
      { text: "Ask the parents which calming strategies work", why: "Parents know the strategies that already help their child." },
      { text: "Use clear, literal language", why: "Plain, literal wording avoids confusion and misreading." },
      { text: "Choose a room beside the busy nurses' station", why: "A busy area adds noise that distresses the client." },
      { text: "Give a picture schedule of the day's care", why: "A visual schedule makes events predictable." },
      { text: "Use jokes and figures of speech to build rapport", why: "Figures of speech may be taken literally and cause confusion." },
      { text: "Dim lights and lower alarm volume where safe", why: "Less light and noise reduce sensory overload." },
    ],
    correct: [1, 2, 4, 6],
  },
  {
    ...meta("rn-s28-42", {
      need: "BCC",
      topic: "Scoring pain in advanced dementia",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 91-year-old resident with advanced dementia cannot report pain. The nurse scores the Pain Assessment in Advanced Dementia (PAINAD) scale. Breathing scores 1, negative vocalization 2, facial expression 2, body language 1 and consolability 0. What is the resident's total PAINAD score?",
      rationale:
        "The PAINAD scale has five items, each scored 0 to 2, for a total out of 10. Adding the item scores gives a total of 6. A higher total means more pain behavior. The nurse acts on the score with a comfort measure and then rescores to judge the effect.",
      calc: { expr: "1 + 2 + 2 + 1 + 0", answer: 6, unit: "points", round: 0, steps: ["1 + 2 + 2 + 1 + 0 = 6"] },
      sources: [PAINAD],
    }),
    kind: "mc",
    options: [
      { text: "4 of 10", why: "This leaves out one of the items that scored 2." },
      { text: "5 of 10", why: "This leaves out one of the items that scored 1." },
      { text: "6 of 10", why: "The five item scores add to 6." },
      { text: "7 of 10", why: "This adds a point that no item scored." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s28-43", {
      need: "PSY",
      topic: "First goal in severe depression",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 58-year-old client with severe depression has taken only a few sips of fluid in 2 days and stays in bed. The mucous membranes are dry and the urine is dark amber. The nurse sets care goals with the client. Which goal has the highest priority?",
      rationale:
        "Dry mucous membranes and dark urine after 2 days of minimal intake show dehydration. A physiological need comes before psychosocial goals. Fluid intake is the first goal. Group attendance, naming strengths and showering all matter but can wait until the client is hydrated.",
      sources: [HALTER, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Drinks at least 1500 mL of fluid each day", why: "Dehydration is a physiological threat and comes first." },
      { text: "Attends one group session each day", why: "Group attendance is a psychosocial goal that follows physical needs." },
      { text: "Names three personal strengths", why: "Building self-esteem matters but does not address the dehydration." },
      { text: "Showers each morning with staff prompting", why: "Hygiene is important but is less urgent than fluid intake." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s28-44", {
      need: "BCC",
      topic: "Care of the body after an expected death",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A client dies on a medical unit after an expected death. No autopsy is planned and the death does not need review by the coroner. The family will view the body in 30 minutes. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The body lies flat with a pillow under the head so blood does not pool in the face. Closing the eyes and mouth gives a natural look. Tubes and lines come out per policy because no autopsy is planned. Cleaning and a fresh gown prepare the body for viewing. Dentures stay in the mouth to keep the face's shape. The shroud goes on after the family's visit.",
      sources: [POTTER, STATCAN_CCMED],
      canada: "Each province and territory runs its own death investigation system, led by a chief coroner or a chief medical examiner. Canadian nurses follow their own province's act on which deaths to report.",
    }),
    kind: "sata",
    options: [
      { text: "Lay the body flat with a pillow under the head", why: "A raised head keeps blood from pooling and discoloring the face." },
      { text: "Remove the dentures and give them to the family", why: "Dentures stay in place to keep the natural shape of the face." },
      { text: "Close the eyes and the mouth", why: "Closing the eyes and mouth gives a natural appearance." },
      { text: "Remove tubes and lines per agency policy", why: "With no autopsy or coroner review, tubes and lines can be removed." },
      { text: "Wrap the body in a shroud before the family arrives", why: "The shroud goes on after the family has viewed the body." },
      { text: "Clean soiled areas and put on a clean gown", why: "Cleaning prepares the body for a dignified viewing." },
    ],
    correct: [0, 2, 3, 5],
  },
  {
    ...meta("rn-s28-45", {
      need: "PSY",
      topic: "Phases of the nurse-client relationship",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A nurse becomes the primary nurse for a client expected to stay on a mental health unit for 3 weeks. Place the nurse's activities in the order they occur across the relationship.",
      rationale:
        "Before meeting, the nurse reviews the record and examines their own feelings. In the orientation phase the nurse and client agree on meeting times and the limits of confidentiality. In the working phase they explore problems and build coping. In termination they review progress and talk about ending. Giving advice is not a phase and does not help the client build skills.",
      sources: [HALTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Explore how the client copes with current problems", why: "Exploring problems and coping is the work of the working phase." },
      { text: "Review the client's record before meeting", why: "Reviewing the record comes before the first meeting." },
      { text: "Agree on meeting times and confidentiality limits", why: "Setting terms belongs to the orientation phase." },
      { text: "Tell the client how to fix the family conflict", why: "Advice giving is not a phase and takes the problem away from the client." },
      { text: "Summarize progress and discuss ending", why: "Reviewing progress and feelings about ending mark termination." },
    ],
    correct: [1, 2, 0, 4],
  },
  {
    ...meta("rn-s28-46", {
      need: "BCC",
      topic: "Types of urinary incontinence",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse assesses four older adults who report urine leakage. Match each description to the type of urinary incontinence.",
      rationale:
        "Leaking with a cough or lift is stress incontinence from weak pelvic floor support. A sudden urge with leaking before reaching the toilet is urge incontinence. Frequent dribbling with a large volume left after voiding is overflow from a bladder that does not empty. Normal control with leaking because of trouble undressing is functional incontinence.",
      sources: [POTTER, HINKLE],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "Leaks a small amount when coughing or lifting",
      "Feels a sudden strong urge and leaks before reaching the toilet",
      "Dribbles often, and a scan shows a large volume after voiding",
      "Has normal bladder control but cannot undo buttons in time",
    ],
    tokens: [
      { text: "Urge incontinence", why: "An overactive bladder causes a sudden urge and leaking." },
      { text: "Stress incontinence", why: "Raised abdominal pressure overcomes weak pelvic floor support." },
      { text: "Functional incontinence", why: "Bladder control is normal but a physical limit delays toileting." },
      { text: "Overflow incontinence", why: "A bladder that does not empty leaks as it overfills." },
      { text: "Reflex incontinence", why: "Reflex leaking follows spinal cord injury, which no client here has." },
      { text: "Transient incontinence", why: "Transient leaking has a short-term cause such as infection, which none of these descriptions give." },
    ],
    correct: [1, 0, 3, 2],
  },
  {
    ...meta("rn-s28-47", {
      need: "PSY",
      topic: "History pointing to cannabis-linked vomiting",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 24-year-old client comes to the emergency department with a third bout of severe vomiting in 6 months. Which findings from the history support cannabinoid hyperemesis syndrome? Select three.",
      rationale:
        "The syndrome occurs with long-term, frequent cannabis use. Vomiting comes in bouts with well periods between them. Many clients learn that hot showers ease the nausea. Undercooked food and bloody diarrhea point to infection. A new antibiotic suggests a drug side effect.",
      sources: [CHS, HALTER],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Uses cannabis daily for the past 4 years", why: "Long-term daily use is a core feature of the syndrome." },
      { text: "Ate undercooked chicken the day before", why: "This points to foodborne infection, not a cannabis-linked cause." },
      { text: "Takes long hot showers to ease the nausea", why: "Relief from hot showers is a typical feature of the syndrome." },
      { text: "Has had bloody diarrhea since yesterday", why: "Bloody diarrhea suggests an infectious or inflammatory cause." },
      { text: "Feels well for weeks between vomiting bouts", why: "A cyclic pattern with well periods fits the syndrome." },
      { text: "Began a new antibiotic 2 days ago", why: "A new drug suggests a side effect rather than this syndrome." },
    ],
    correct: [0, 2, 4],
  },
  {
    ...meta("rn-s28-48", {
      need: "BCC",
      topic: "Continuous enteral feeding rate",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client has a prescription for 1800 mL of enteral formula over 24 hours by continuous pump. At what rate should the nurse set the feeding pump?",
      rationale:
        "The daily volume is divided by the hours in a day. 1800 mL over 24 hours gives 75 mL/hour. A slower rate underfeeds the client. A faster rate overfeeds and raises the risk of intolerance.",
      calc: { expr: "1800 / 24", answer: 75, unit: "mL/hour", round: 0, steps: ["1800 / 24 = 75"] },
      sources: [ASPEN_EN],
    }),
    kind: "mc",
    options: [
      { text: "60 mL/hour", why: "This rate delivers less than the prescribed volume in a day." },
      { text: "75 mL/hour", why: "1800 mL divided by 24 hours is 75 mL/hour." },
      { text: "90 mL/hour", why: "This rate delivers more than the prescribed volume in a day." },
      { text: "150 mL/hour", why: "This would give the full daily volume in half the prescribed time." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-49", {
      need: "PSY",
      topic: "Request for a traditional healing ceremony",
      cjmm: "action",
      process: "culture",
      difficulty: 4,
      stem: "A 67-year-old Indigenous client in hospital with pneumonia asks whether a traditional healer can hold a healing ceremony at the bedside. The client receives oxygen by nasal cannula. Which response by the nurse is best?",
      rationale:
        "Traditional healing can support the client's well-being alongside medical care. The nurse first asks what the ceremony involves. That lets the team make space and plan for safety, such as moving smoke or flame away from oxygen. Refusing, delaying until discharge or handing the choice to someone else ignores the client's request.",
      sources: [CLAS, POTTER, TRC_CALLS],
      canada: "Truth and Reconciliation Commission Call to Action 22 asks the Canadian health system to recognize Indigenous healing practices. It asks that they be used with healers and Elders when Indigenous clients request it.",
    }),
    kind: "mc",
    options: [
      { text: "\"Only prescribed treatments are allowed in the hospital.\"", why: "This dismisses a practice that can support the client alongside care." },
      { text: "\"It would be best to wait until you go home.\"", why: "Delaying denies support when the client asks for it most." },
      { text: "\"I will ask the chaplain to decide if it can happen.\"", why: "This hands the client's decision to someone else without exploring it." },
      { text: "\"Tell me what the ceremony involves so we can plan it.\"", why: "Exploring the ceremony lets the team support it and keep it safe." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s28-50", {
      need: "BCC",
      topic: "Judging a pressure injury prevention plan",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse evaluates a bedbound 77-year-old client 1 week after a pressure injury prevention plan began. The Braden score at the start was 12. Which findings show the plan is working? Select all that apply.",
      rationale:
        "Skin that blanches when pressed has intact blood flow. Pale pink heels without redness show offloading works. Dry, intact groin skin shows moisture is controlled. A Braden score that rose from 12 to 15 means lower risk. A purple heel area suggests deep tissue injury. A blister over the coccyx is a new open injury. Sliding down in bed causes shear.",
      refs: ["A higher Braden score means lower pressure injury risk."],
      sources: [NPIAP, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Skin over the sacrum blanches when pressed", why: "Blanching shows blood flow returns and the tissue is not damaged." },
      { text: "Heels are pale pink with no redness", why: "Heels free of redness show offloading is working." },
      { text: "A purple area has appeared on the left heel", why: "Purple intact skin suggests deep tissue pressure injury." },
      { text: "Skin in the groin is intact and dry", why: "Dry, intact skin shows moisture is being controlled." },
      { text: "A clear blister has formed over the coccyx", why: "A blister is a new pressure injury, which shows the plan is not working." },
      { text: "Braden score has risen from 12 to 15", why: "A rising Braden score shows risk has fallen." },
      { text: "The client slides down in bed between turns", why: "Sliding creates shear that damages deep tissue." },
    ],
    correct: [0, 1, 3, 5],
  },
];
