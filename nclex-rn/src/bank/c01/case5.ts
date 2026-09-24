import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c01-5";

/** Case 5. Long-term care. Older resident with an overnight change in behavior. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Morning Change in a Long-Term Care Resident",
  intro:
    "An 84-year-old woman has lived in a long-term care facility for 2 years. She has moderate Alzheimer disease and osteoarthritis. At 0700 the assistive personnel (AP) tells the nurse that she seems different today.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Moderate Alzheimer disease diagnosed 5 years ago.",
        "Baseline: oriented to person only. Recognizes her daughter. Calm most days. Follows one-step directions.",
        "Walks to the dining room with her walker and standby assistance.",
        "Continent with a toileting schedule. Eats 75% to 100% of most meals.",
        "Medications: donepezil 10 mg by mouth at bedtime, acetaminophen 650 mg by mouth every 6 hours as needed for joint pain.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Yesterday 0800", "Today 0700"],
        rows: [
          ["Temperature", "36.6°C (97.9°F)", "37.9°C (100.2°F)"],
          ["Heart rate (/minute)", "76", "104"],
          ["Respiratory rate (/minute)", "16", "22"],
          ["BP (mmHg)", "132/76", "108/62"],
          ["SpO2 (%)", "96", "95"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "BCC",
        topic: "Changes in intake and elimination",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The AP gives the nurse the report below. Click to highlight the findings that are a change from the resident's baseline and require follow-up.",
        rationale:
          "Her baseline is calm, continent on a schedule and eating 75% to 100% of meals. Shouting during breakfast, eating 25% of it and wetting the bed twice are new. Dark, strong-smelling urine points to low intake or infection. Getting up alone three times overnight is a new safety concern. Knowing her own name, using her walker and intact skin match her baseline.",
        sources: [SRC.delirium, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[She shouted at staff during breakfast]]. [[She ate 25% of breakfast]]. [[She knew her own name]]. [[She wet the bed twice overnight]]. [[Her skin over the sacrum is intact]]. [[Her urine is dark and strong smelling]]. [[She used her walker to reach the bathroom]]. [[She tried to get up alone three times overnight]].",
      spans: [
        { text: "She shouted at staff during breakfast", why: "Agitation is new for a resident who is calm most days." },
        { text: "She ate 25% of breakfast", why: "Her usual intake is 75% to 100% of meals." },
        { text: "She knew her own name", why: "Orientation to person matches her baseline." },
        { text: "She wet the bed twice overnight", why: "New incontinence in a resident who is continent on a schedule needs follow-up." },
        { text: "Her skin over the sacrum is intact", why: "Intact skin needs no follow-up." },
        { text: "Her urine is dark and strong smelling", why: "Dark, strong urine suggests low intake or a urinary infection." },
        { text: "She used her walker to reach the bathroom", why: "Using her walker is her usual, safe practice." },
        { text: "She tried to get up alone three times overnight", why: "Getting up alone is new and raises her fall risk." },
      ],
      correct: [0, 1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Delirium versus baseline dementia",
        cjmm: "analyze",
        difficulty: 4,
        stem: "Since 0700 the resident has drifted between drowsiness and agitation. She cannot keep her attention on a simple question. Her daughter asks whether the dementia is getting worse. For each finding, specify whether it is more consistent with delirium or with her baseline dementia.",
        rationale:
          "Delirium starts over hours, fluctuates and shows as poor attention. The change began overnight, and her alertness swings through the day. Fever and a heart rate of 104/minute suggest a physical cause. Orientation to person only, following one-step directions and slow memory loss over years are features of her Alzheimer disease.",
        sources: [SRC.delirium],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Delirium", "Baseline dementia"],
      rows: [
        { text: "Change in behavior that began overnight", correct: [0], why: "Delirium has an acute onset over hours to days." },
        { text: "Oriented to person only", correct: [1], why: "This matches her documented baseline." },
        { text: "Cannot keep attention on a simple question", correct: [0], why: "Inattention is the core feature of delirium." },
        { text: "Swings between drowsiness and agitation", correct: [0], why: "A fluctuating level of alertness points to delirium." },
        { text: "Memory loss that progressed over 5 years", correct: [1], why: "Slow progression over years is typical of Alzheimer disease." },
        { text: "Follows one-step directions", correct: [1], why: "This matches her documented baseline." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Priority safety risk in delirium",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews the report and the vital signs. The resident's skin is intact and she shifts her weight in bed without help. A swallow screen last month was normal. She has never tried to leave the building. Which risk should the nurse address first today?",
        rationale:
          "She tried to get up alone three times overnight, needs a walker and is newly confused. New incontinence adds trips to the bathroom. Her BP fell from 132/76 to 108/62 mmHg, which adds dizziness risk. Intact skin and independent weight shifts lower her pressure injury risk. A normal swallow screen lowers aspiration risk. She has no history of exit seeking.",
        sources: [SRC.falls],
      }),
      kind: "mc",
      options: [
        { text: "Pressure injury", why: "Her skin is intact and she shifts her weight without help." },
        { text: "Aspiration during meals", why: "Her swallow screen was normal last month." },
        { text: "A fall with injury", why: "New confusion, incontinence and unassisted attempts to stand raise fall risk." },
        { text: "Leaving the facility unsupervised", why: "She has no history of trying to leave the building." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Delegating care in long-term care",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans the resident's care for the day shift. Which tasks can the nurse delegate to the AP? Select three.",
        rationale:
          "Toileting on a schedule, recording fluid intake and measuring vital signs are routine tasks with predictable outcomes. The nurse gives clear instructions and interprets the results. Screening for delirium, teaching the daughter and deciding on safety devices need nursing assessment and judgment. These stay with the nurse.",
        sources: [SRC.delegation, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canadian long-term care, this role is filled by unregulated care providers such as personal support workers or health care aides. Rules for assigning and delegating tasks to them vary by province.",
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Take the resident to the toilet every 2 hours", why: "Scheduled toileting is a routine task within the AP role." },
        { text: "Assess her attention with a delirium screening tool", why: "Delirium screening needs nursing assessment." },
        { text: "Record the resident's fluid intake", why: "Measuring and recording intake is within the AP role." },
        { text: "Teach the daughter the signs of delirium", why: "Teaching is a nursing responsibility and cannot be delegated." },
        { text: "Check vital signs at 1100 and report them", why: "Measuring vital signs is routine. The nurse interprets them." },
        { text: "Decide whether she needs a bed alarm", why: "Choosing safety devices needs nursing judgment." },
      ],
      correct: [0, 2, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Structured report to the provider",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The nurse calls the primary health care provider using the SBAR format. Drag one statement to each part of the report.",
        rationale:
          "The situation states the current problem and when it began. The background gives the diagnosis and baseline that frame the change. The assessment gives the nurse's view of the likely problem. The recommendation asks for a specific response. Calling the change a bad day ignores a fever and new confusion. A restraint is not a first response to delirium.",
        sources: [SRC.sbar],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Situation", "Background", "Assessment", "Recommendation"],
      tokens: [
        { text: "I think she is having a bad day with her dementia.", why: "This dismisses a fever and an acute change in behavior." },
        { text: "She has had new confusion since last night and a fever today.", why: "The situation states the current problem and its onset." },
        { text: "She has moderate Alzheimer disease and was calm yesterday.", why: "The background gives the diagnosis and her baseline." },
        { text: "Please order a vest restraint to keep her in bed tonight.", why: "Restraints worsen agitation and are not a first response." },
        { text: "I think this may be delirium from a urinary infection.", why: "The assessment gives the nurse's view of the likely problem." },
        { text: "Please see her today and order a urinalysis and culture.", why: "The recommendation asks for a specific action." },
      ],
      correct: [1, 2, 4, 5],
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Supervising delegated care",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "Later in the shift the nurse observes the AP caring for the resident. For each action by the AP, specify whether it is appropriate or requires the nurse to intervene.",
        rationale:
          "Scheduled toileting, gentle reorientation and keeping the walker and call light in reach support safety and match the plan. Tucking sheets tightly to keep her in bed works as a physical restraint. A high bed raises injury risk if she gets up. Giving medication is outside the AP role. The nurse corrects these actions and reinforces the plan.",
        sources: [SRC.cms, SRC.delegation, { body: "Legislative Assembly of Ontario", work: "Fixing Long-Term Care Act, 2021, S.O. 2021, c. 39, Sched. 1, sections 28 and 35", year: 2021, url: "https://www.ontario.ca/laws/statute/21f39" }],
        canada: "Canadian long-term care is regulated by each province, not by CMS. In Ontario, the Fixing Long-Term Care Act, 2021 allows physical restraint only through the plan of care and requires immediate reporting of suspected abuse or neglect.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Appropriate", "Requires the nurse to intervene"],
      rows: [
        { text: "Walks beside her to the toilet at the scheduled times", correct: [0], why: "This follows the toileting plan and prevents unassisted trips." },
        { text: "Tucks the sheets tightly to keep her in bed", correct: [1], why: "Restricting movement this way acts as a physical restraint." },
        { text: "Reorients her to the day and place during care", correct: [0], why: "Gentle reorientation supports a resident with delirium." },
        { text: "Leaves the bed in the high position after care", correct: [1], why: "A high bed raises injury risk if she gets up alone." },
        { text: "Places her walker and call light within reach", correct: [0], why: "Items in reach reduce unassisted reaching and falls." },
        { text: "Gives her acetaminophen from the medication cart", correct: [1], why: "Giving medication is outside the AP role." },
      ],
    },
  ],
};
