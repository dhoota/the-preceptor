import type { Item, Source } from "@/engine/types";
import { AASM_INSOMNIA, ASAM_AWM, DSM, HALTER, HINKLE, PADIS, POTTER, RAMADAN, meta } from "./common";

const DIABETES_CANADA_HYPO: Source = {
  body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee",
  work: "Hypoglycemia. Canadian Journal of Diabetes 42(Suppl 1):S104",
  year: 2018,
  url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14",
};

export const PART2: Item[] = [
  {
    ...meta("rn-s28-11", {
      need: "BCC",
      topic: "Promoting sleep on a medical unit",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 58-year-old client on a medical unit reports sleeping about 3 hours a night since admission 4 days ago. The client says hallway noise, the room light and the 0200 vital signs keep waking them. Vital signs have been stable since admission. Which measures should the nurse include in the plan to promote sleep? Select all that apply.",
      rationale:
        "The client names noise, light and night checks as the causes of waking. Earplugs and an eye mask block noise and light. Grouping night care cuts the number of wake-ups. Dim evening light supports the body clock. The 0200 check can be moved if the client is stable. A television, a long daytime nap and evening caffeine each make night sleep harder.",
      sources: [PADIS, AASM_INSOMNIA, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Offer earplugs and an eye mask", why: "These block the noise and light the client says wake them." },
      { text: "Leave the television on low overnight", why: "Sound and light from a television disrupt sleep." },
      { text: "Group overnight care to limit waking", why: "Clustering care gives longer stretches of unbroken sleep." },
      { text: "Encourage a long nap after lunch", why: "Long daytime naps reduce the drive to sleep at night." },
      { text: "Dim the room lights in the evening", why: "Low evening light supports the natural sleep cycle." },
      { text: "Offer a cup of coffee with the evening snack", why: "Caffeine late in the day delays sleep onset." },
      { text: "Ask to reschedule the 0200 vital signs", why: "Moving a routine check for a stable client removes a cause of waking." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s28-12", {
      need: "PSY",
      topic: "Grief that has not eased after a year",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 63-year-old client's husband died of heart failure after a long illness 14 months ago. She still sets his place at dinner and feels intense longing for him most days. She avoids the church where the funeral was held and has not gone back to her part-time job. Which condition do these findings most suggest?",
      rationale:
        "The death was 14 months ago. Intense daily longing, avoiding reminders and not returning to work show grief that still disrupts function. In adults this pattern after 12 months or more fits prolonged grief disorder. Expected grief eases in intensity over time. Posttraumatic stress disorder needs a violent or accidental death, and this death followed a long illness. Acute stress disorder is limited to the first month after a trauma.",
      refs: ["Prolonged grief disorder in adults requires that at least 12 months have passed since the death."],
      sources: [DSM, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Prolonged grief disorder", why: "Intense longing and loss of function 14 months after the death fit this disorder." },
      { text: "Expected grief for this stage", why: "Grief this intense and disabling after more than a year is beyond the expected course." },
      { text: "Acute stress disorder", why: "Acute stress disorder is limited to the first month after a traumatic event." },
      { text: "Posttraumatic stress disorder", why: "A death from illness does not meet the trauma criterion, which needs a violent or accidental death." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s28-13", {
      need: "BCC",
      topic: "Checking crutch technique",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "Before discharge, the nurse watches a client with a sprained right ankle practice walking with axillary crutches. Which observation requires the nurse to intervene?",
      rationale:
        "Body weight belongs on the hand grips, not on the axillary pads. Leaning on the pads presses on the nerves in the armpit and can cause crutch palsy. Slightly bent elbows, tips placed ahead and to the side and weight carried on the hands are all correct technique.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Elbows bent slightly while holding the grips", why: "Slight elbow flexion lets the arms bear weight and is correct." },
      { text: "Crutch tips placed ahead and to the side", why: "This forms a wide tripod base and is correct." },
      { text: "Armpits resting on the pads between steps", why: "Pressure on the axillae can injure the nerves of the arm and needs correction." },
      { text: "Weight carried on the hands with each step", why: "The hands and arms should carry the weight, so this is correct." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s28-14", {
      need: "PSY",
      topic: "Early cues of rising aggression",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reads a note on a 31-year-old client admitted to an inpatient mental health unit 2 days ago. Click to highlight the findings that suggest the client's aggression is escalating.",
      rationale:
        "Pacing and slamming doors show rising motor tension. A voice that grows louder and fists that stay clenched are classic early cues of aggression. Staring at a peer after a conflict shows hostility aimed at a target. Eating lunch, sleeping 7 hours, joining the art group and attending to hygiene show the client is coping with routine.",
      sources: [HALTER],
    }),
    kind: "highlight",
    passage:
      "1400. [[Ate 75% of lunch]]. [[Pacing the hallway and slamming doors]]. [[Voice getting louder while talking with staff]]. [[Hands clenched into fists]]. [[Slept 7 hours last night]]. [[Took part in the morning art group and finished a drawing]]. [[Staring at a peer who changed the TV channel]]. [[Showered and dressed without any prompting from staff]].",
    spans: [
      { text: "Ate 75% of lunch", why: "Eating most of a meal is not a sign of escalation." },
      { text: "Pacing the hallway and slamming doors", why: "Pacing and slamming doors show rising motor agitation." },
      { text: "Voice getting louder while talking with staff", why: "A rising voice is an early verbal cue of escalation." },
      { text: "Hands clenched into fists", why: "Clenched fists show physical readiness to strike." },
      { text: "Slept 7 hours last night", why: "Adequate sleep does not signal escalation." },
      { text: "Took part in the morning art group and finished a drawing", why: "Joining a group shows engagement, not escalation." },
      { text: "Staring at a peer who changed the TV channel", why: "Fixed staring at a peer after a conflict shows targeted hostility." },
      { text: "Showered and dressed without any prompting from staff", why: "Independent self-care shows routine coping." },
    ],
    correct: [1, 2, 3, 6],
  },
  {
    ...meta("rn-s28-15", {
      need: "BCC",
      topic: "Liquid stool seeping around an impaction",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "An 84-year-old resident of a long-term care facility takes oxycodone for back pain. The resident has passed no formed stool for 6 days. Today small amounts of liquid stool are seeping onto the brief. The abdomen is distended. Which condition should the nurse suspect?",
      rationale:
        "Opioids slow the bowel. Six days without formed stool and a distended abdomen point to a hard mass of retained stool. Liquid stool from higher in the bowel can seep around the mass. This seepage is easy to mistake for diarrhea. Treating it as diarrhea would worsen the blockage.",
      sources: [POTTER, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Viral gastroenteritis", why: "Infection usually brings frequent large watery stools, not seepage after days without stool." },
      { text: "Opioid-related diarrhea", why: "Opioids slow bowel movement and cause constipation, not diarrhea." },
      { text: "Anal sphincter weakness", why: "Sphincter weakness does not explain days without stool and a distended abdomen." },
      { text: "Fecal impaction", why: "No formed stool for days, distension and liquid seepage fit an impaction." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s28-16", {
      need: "PSY",
      topic: "Supporting a religious fast with diabetes",
      cjmm: "generate",
      process: "culture",
      difficulty: 3,
      stem: "A 57-year-old Muslim client with type 2 diabetes tells the clinic nurse she plans to fast during Ramadan, from dawn to sunset. She takes metformin twice daily. Which actions should the nurse take? Select two.",
      rationale:
        "The nurse respects the client's decision and helps her fast safely. A medication review before Ramadan lets the provider move doses to the pre-dawn and sunset meals. Checking glucose does not break the fast, so the client can test during the day and stop the fast if glucose runs low. Telling her she cannot fast ignores her values. The pre-dawn meal should be kept. A large sweet meal at sunset raises glucose.",
      sources: [RAMADAN],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Tell her that diabetes rules out fasting", why: "Many people with type 2 diabetes fast safely after a risk review. This dismisses her values." },
      { text: "Arrange a medication review before Ramadan", why: "The provider can shift doses to the meals taken before dawn and after sunset." },
      { text: "Teach that glucose checks do not break the fast", why: "Testing during the day lets her detect low glucose and stop the fast safely." },
      { text: "Advise taking both metformin doses at midday", why: "Midday falls within the fasting hours when she will not eat or drink." },
      { text: "Advise skipping the pre-dawn meal", why: "The pre-dawn meal lowers the risk of low glucose during the fast." },
      { text: "Suggest a large sweet meal at sunset", why: "A large sugary meal after the fast causes a sharp glucose rise." },
    ],
    correct: [1, 2],
  },
  {
    ...meta("rn-s28-17", {
      need: "BCC",
      topic: "Retention after catheter removal",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 66-year-old client had an indwelling urinary catheter removed 8 hours ago after abdominal surgery. The client has not voided and reports lower abdominal pressure. The bladder is palpable above the symphysis pubis. A bladder scan shows 650 mL. Temperature is 37.0°C (98.6°F). Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The client has not voided in 8 hours and the scan shows 650 mL in the bladder. A full, palpable bladder with pressure means urine is made but not emptied. That is urinary retention. A temperature of 37.0°C does not point to infection. Kidney injury lowers urine production and would leave the bladder nearly empty.",
      sources: [POTTER, HINKLE],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is showing signs of {0} as evidenced by {1}.",
    blanks: [
      {
        options: [
          { text: "urinary tract infection", why: "The temperature is normal and the stem gives no burning or cloudy urine." },
          { text: "urinary retention", why: "A full bladder that the client cannot empty is retention." },
          { text: "acute kidney injury", why: "Kidney injury lowers urine output, so the bladder would not hold a large volume." },
          { text: "stress incontinence", why: "The client is not leaking urine. The bladder is holding it." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a temperature of 37.0°C", why: "This temperature is normal and is not evidence of a urinary problem." },
          { text: "a recent abdominal incision", why: "Surgery raises risk but is not a finding of retention itself." },
          { text: "a scanned volume of 650 mL", why: "A bladder volume this large with no voiding confirms retention." },
          { text: "the recent catheter removal", why: "Catheter removal is a risk factor, not a sign of retention." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s28-18", {
      need: "PSY",
      topic: "First client to see on a mental health unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse on an inpatient mental health unit receives report on four clients. Which client should the nurse see first?",
      rationale:
        "Voices that tell the client to hurt a roommate are command hallucinations with a named target. This is a risk of harm to others that needs assessment and action now. Lateness from rituals, eating half a meal and a request for a different nurse are real concerns. None carries an immediate safety risk.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Client with OCD who is 15 minutes late for group due to hand washing", why: "Rituals that delay activities are expected and can be addressed after safety needs." },
      { text: "Client with schizophrenia who says voices tell him to hurt his roommate", why: "Command hallucinations with a named target create an immediate risk to others." },
      { text: "Client with depression who ate half of breakfast and wants to stay in bed", why: "Low intake and fatigue need follow-up but pose no immediate danger." },
      { text: "Client with borderline personality disorder who asks for a different nurse", why: "The request needs a consistent team response but is not urgent." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-19", {
      need: "BCC",
      topic: "Mouth care for an unresponsive client",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse prepares to give mouth care to a client who does not respond to voice after a head injury and has a weak gag reflex. Which action should the nurse take?",
      rationale:
        "A weak gag reflex means fluid in the mouth can reach the airway. Turning the client to the side lets fluid drain out of the mouth. Suction should be ready. Rinsing with a large volume of water invites aspiration. Lemon and glycerin swabs dry the mucosa. Lying flat and supine lets fluid pool at the back of the throat.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Turn the client onto one side", why: "A side-lying position lets fluid drain from the mouth and protects the airway." },
      { text: "Rinse the mouth with a syringe of water", why: "A large volume of fluid in the mouth raises aspiration risk with a weak gag." },
      { text: "Swab the mouth with lemon and glycerin", why: "Lemon and glycerin swabs dry and irritate the oral mucosa." },
      { text: "Keep the client supine with the head flat", why: "Lying flat lets fluid pool in the throat and raises aspiration risk." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s28-20", {
      need: "PSY",
      topic: "Confusion and tremor after heavy drinking",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 52-year-old client is on day 3 after a bowel resection. The client drinks about 12 beers a day. Tonight the client is disoriented to place and time, picks at the air and says bugs are crawling on the wall. Heart rate is 124/minute, BP 168/98 mmHg and temperature 38.2°C (100.8°F). The hands tremble and the skin is soaked with sweat. The incision is clean and dry. Blood glucose is 112 mg/dL (6.2 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Heavy daily drinking stopped 3 days ago by surgery. Disorientation, visual hallucinations, tremor, sweating, a heart rate of 124/minute and a temperature of 38.2°C fit alcohol withdrawal delirium. A benzodiazepine given by protocol treats the withdrawal. A quiet, well-lit room reduces misperceptions. Heart rate, BP and orientation show whether treatment is working. A glucose of 112 mg/dL rules out hypoglycemia.",
      sources: [ASAM_AWM, HALTER, DIABETES_CANADA_HYPO],
      canada: "Canadian labs report blood glucose in mmol/L only, so the chart would show 6.2 mmol/L. Diabetes Canada defines hypoglycemia in people on insulin or secretagogues as a glucose below 4.0 mmol/L.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Hypoglycemia", why: "The blood glucose is 112 mg/dL, which is not low." },
      { text: "Alcohol withdrawal delirium", why: "Confusion, hallucinations and autonomic overactivity 3 days after heavy drinking stops fit this condition." },
      { text: "Wernicke encephalopathy", why: "Wernicke encephalopathy brings confusion, unsteady gait and eye movement changes without this autonomic surge." },
      { text: "Surgical wound infection", why: "The incision is clean and dry, and infection does not explain the tremor and hallucinations." },
    ],
    actions: [
      { text: "Give the prescribed lorazepam per protocol", why: "A benzodiazepine calms the overactive nervous system in withdrawal." },
      { text: "Apply four-point restraints to the client now", why: "Restraints are a last resort and can increase agitation and injury." },
      { text: "Place the client in a quiet, well-lit room", why: "Low noise and steady light reduce misperceptions and agitation." },
      { text: "Turn off the lights so the client can rest", why: "Darkness increases misperception of shadows and objects." },
      { text: "Hold all sedating medications until morning", why: "Withholding a benzodiazepine lets the withdrawal progress." },
    ],
    parameters: [
      { text: "Heart rate and blood pressure", why: "Autonomic signs show how severe the withdrawal is and whether treatment works." },
      { text: "Serum amylase and lipase levels", why: "Amylase does not guide treatment of alcohol withdrawal." },
      { text: "Orientation to place and time", why: "Improving orientation shows the delirium is clearing." },
      { text: "Hemoglobin A1C test result", why: "A1C reflects months of glucose control and does not guide acute care." },
      { text: "Fasting serum cholesterol level", why: "Lipid levels do not guide withdrawal treatment." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [0, 2] },
  },
];
