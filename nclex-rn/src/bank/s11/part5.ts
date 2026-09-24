import type { Item } from "@/engine/types";
import { AAP_ADHD, ACOG_STILL, ALZ, HALTER, HOCKENBERRY, POTTER, TIP57, TJC_LGBT, TOWNSEND, WORDEN, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s11-41", {
      topic: "Late-day restlessness in dementia",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 79-year-old client with Alzheimer disease in a long-term care facility becomes restless and tries to leave the building each day at about 1600. Which plan should the nurse make?",
      rationale:
        "Restlessness that recurs in the late afternoon is a common pattern in dementia. A calm, familiar activity planned just before the usual time redirects the client and meets the need behind the behavior. Long daytime naps disturb night sleep and can worsen the pattern. Dim light adds to confusion. Reminding the client of rules does not work with impaired memory and can raise agitation.",
      sources: [ALZ],
    }),
    kind: "mc",
    options: [
      { text: "Schedule a long nap in the early afternoon", why: "Long naps disrupt the sleep cycle and can worsen late-day restlessness." },
      { text: "Plan a calm, familiar activity before 1600", why: "A meaningful activity before the usual time redirects the client." },
      { text: "Keep the room dim through the afternoon", why: "Low light increases confusion. Good lighting helps in the late afternoon." },
      { text: "Remind the client that leaving is not allowed", why: "The client cannot retain the rule, and reminders can raise agitation." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s11-42", {
      topic: "Communicating with a client with hearing loss",
      cjmm: "action",
      process: "communication",
      difficulty: 1,
      stem: "A 76-year-old client with severe hearing loss in both ears is admitted without hearing aids. The client reads lips. Which actions should the nurse take? Select all that apply.",
      rationale:
        "A client who reads lips needs a clear view of the speaker's face and a quiet room. The nurse gets the client's attention first and confirms key points in writing. Shouting and exaggerated mouth movements distort speech and lip patterns. A bright window behind the nurse puts the face in shadow.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Face the client when speaking", why: "Facing the client allows lip reading and shows facial expression." },
      { text: "Speak loudly into one ear", why: "Shouting distorts sound and hides the lips from view." },
      { text: "Turn off the TV and other noise", why: "Less background noise makes any remaining hearing more useful." },
      { text: "Stand with a bright window behind", why: "Backlight puts the nurse's face in shadow and blocks lip reading." },
      { text: "Confirm key points in writing", why: "Written notes make sure important information is understood." },
      { text: "Speak slowly with exaggerated lips", why: "Exaggerated movements distort normal lip patterns." },
      { text: "Get the client's attention first", why: "A light touch or wave before speaking lets the client focus on the speaker." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s11-43", {
      topic: "Bereavement care after stillbirth",
      cjmm: "action",
      process: "caring",
      difficulty: 4,
      stem: "A client gives birth to a stillborn infant at 36 weeks of gestation. The client and her partner sit quietly holding hands. Which action should the nurse take?",
      rationale:
        "Bereavement care recognizes the parents as parents and respects their choices. The nurse offers time with the infant and lets the parents decide. Many parents value seeing and holding their baby and making memories. Removing the infant takes away that choice. Urging contact also removes choice. Talk of another pregnancy dismisses this loss.",
      sources: [ACOG_STILL, WORDEN],
    }),
    kind: "mc",
    options: [
      { text: "Remove the infant before the parents see the baby", why: "Removing the infant takes away the parents' chance to decide about contact." },
      { text: "Tell the parents they can have another baby", why: "This dismisses the loss of this child and can hurt the parents." },
      { text: "Urge the parents to hold the baby right away", why: "Pressure takes away choice. Contact should be offered, not pushed." },
      { text: "Offer the parents time with the baby if they wish", why: "Offering contact while respecting choice supports healthy grieving." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s11-44", {
      topic: "A preschooler's understanding of death",
      cjmm: "analyze",
      process: "caring",
      difficulty: 2,
      stem: "A 4-year-old whose grandfather died last week asks the nurse, \"When is Grandpa coming back from being dead?\" How should the nurse interpret this question?",
      rationale:
        "Preschool children often see death as temporary and reversible, like sleep or a trip. The question fits this stage of thinking. The nurse answers with short, honest words that the body has stopped working and will not come back. The question does not signal complicated grief, delay or depression.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "A sign of complicated grief", why: "Asking about return is expected at this age and is not a grief disorder." },
      { text: "A sign of a developmental delay", why: "Understanding death as permanent develops later in childhood." },
      { text: "Expected thinking that death is temporary", why: "Preschoolers commonly believe death can be reversed." },
      { text: "An early sign of childhood depression", why: "A question about return shows developmental thinking, not low mood." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s11-45", {
      topic: "Memory gaps filled by invented stories",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 58-year-old client with a 30-year history of heavy alcohol use is admitted for a leg wound. The client cannot recall the nurse's name 5 minutes after hearing it. Asked about the morning, the client describes a trip to the bank that never happened. Complete the sentence by dragging the correct options.",
      rationale:
        "The client fills a memory gap with an invented event and does not intend to deceive. This is confabulation. Severe recent memory loss with confabulation after years of heavy drinking points to Korsakoff syndrome, which follows thiamine deficiency. A delusion is a fixed false belief, not a filled memory gap. Withdrawal delirium brings tremor, sweating and fluctuating attention, which are not described.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The client's account of the morning is {0}, which suggests {1}.",
    targets: ["Finding", "Condition"],
    tokens: [
      { text: "confabulation", why: "The client invents a memory to fill a gap without meaning to deceive." },
      { text: "a delusion", why: "A delusion is a fixed false belief, not a filled gap in memory." },
      { text: "deliberate lying", why: "The client is not trying to deceive. The brain fills the gap." },
      { text: "Korsakoff syndrome", why: "Recent memory loss with confabulation after long heavy drinking fits this syndrome." },
      { text: "alcohol withdrawal delirium", why: "Withdrawal delirium causes tremor, sweating and fluctuating attention, not described here." },
      { text: "schizophrenia", why: "Schizophrenia does not cause this pattern of recent memory loss." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s11-46", {
      topic: "Affirming name and pronouns",
      cjmm: "action",
      process: "culture",
      difficulty: 1,
      stem: "A 22-year-old client comes to the clinic. The name on the insurance record differs from the name the client gives at the front desk. What should the nurse do first?",
      rationale:
        "Asking the client which name and pronouns to use shows respect and builds trust. The insurance name is still used where billing needs it. Using a name the client did not give can cause distress. Questions about surgery are not relevant to the name. Avoiding names makes care impersonal.",
      canada:
        "In Canada the record would usually be a provincial or territorial health card, not private insurance. Each province and territory runs its own public health insurance plan and issues the cards.",
      sources: [TJC_LGBT,
        { body: "Health Canada", work: "About health insurance cards", year: 2025, url: "https://www.canada.ca/en/health-canada/services/health-cards.html" },
      ],
    }),
    kind: "mc",
    options: [
      { text: "Ask the client's name and pronouns to use", why: "Asking lets the client state how to be addressed and builds trust." },
      { text: "Use the name on the insurance record", why: "Using a name the client did not give can feel disrespectful." },
      { text: "Ask whether the client has had surgery", why: "Surgical history is not relevant to how the client is addressed." },
      { text: "Avoid using any name during the visit", why: "Avoiding names is impersonal and can make the client feel unwelcome." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-47", {
      topic: "Signs of caregiver role strain",
      cjmm: "recognize",
      process: "caring",
      difficulty: 2,
      stem: "A 71-year-old woman cares at home for her husband, who has Parkinson disease and dementia. At his clinic visit the nurse talks with her. Which findings suggest caregiver role strain? Select all that apply.",
      rationale:
        "Unplanned weight loss, loss of contact with friends, poor sleep and irritability followed by guilt show that caregiving demands exceed her resources. A caregiver group, respite care and help from a daughter are supports that protect against strain.",
      sources: [ALZ, HALTER],
    }),
    kind: "sata",
    options: [
      { text: "Has lost 4 kg without trying", why: "Unplanned weight loss can reflect neglect of her own health." },
      { text: "Attends a weekly caregiver group", why: "A support group is a protective resource." },
      { text: "Has not seen friends in months", why: "Social isolation is a common sign of caregiver strain." },
      { text: "Uses a respite program twice a month", why: "Respite gives the caregiver planned breaks." },
      { text: "Sleeps 4 hours a night due to his wandering", why: "Ongoing sleep loss from care duties is a sign of strain." },
      { text: "Says she snaps at him and feels guilty", why: "Irritability and guilt suggest the demands exceed her coping." },
      { text: "Has help from a daughter on weekends", why: "Family help reduces the caregiving load." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s11-48", {
      topic: "Responding to self-injury",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A 16-year-old client comes to the school nurse with several fresh, shallow cuts on the inner forearm. The client says, \"Cutting is the only thing that calms me down. I don't want to die.\" Which response by the nurse is best?",
      rationale:
        "The nurse treats the wounds in a calm, matter-of-fact way and explores the trigger. This builds trust and helps identify feelings the cutting relieves. The nurse still assesses suicide risk, because self-injury raises long-term risk. Demanding a promise, calling it attention seeking or asking why in a challenging way shames the client.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "\"You need to promise me you will stop cutting from now on.\"", why: "A forced promise ignores the need the cutting meets and can end honest talk." },
      { text: "\"I'll clean these cuts. What was happening before you cut?\"", why: "Calm wound care and a question about triggers build trust and explore feelings." },
      { text: "\"You must be doing this to get attention.\"", why: "Labeling self-injury as attention seeking shames the client." },
      { text: "\"If you don't want to die, why are you cutting?\"", why: "This challenges the client and suggests the nurse does not understand." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s11-49", {
      topic: "Evaluating progress in PTSD treatment",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 34-year-old veteran with post-traumatic stress disorder has attended 8 weeks of therapy. The nurse evaluates progress at a follow-up visit. Which findings show improvement? Select all that apply.",
      rationale:
        "Using a grounding skill during a flashback, fewer nightmares, a return to work and the ability to talk about the trauma show improved coping and function. Ongoing avoidance, more alcohol for sleep and daily startle with yelling show that symptoms persist or that coping is unhealthy.",
      sources: [TIP57, HALTER],
    }),
    kind: "sata",
    options: [
      { text: "Uses a grounding skill during a flashback", why: "Grounding shows the client can manage intrusive symptoms." },
      { text: "Still avoids driving past the base", why: "Ongoing avoidance is a persisting PTSD symptom." },
      { text: "Nightmares fell from 5 to 1 per week", why: "Fewer nightmares show fewer intrusive symptoms." },
      { text: "Drinks more beer to fall asleep", why: "Alcohol use for sleep is unhealthy coping and can worsen PTSD." },
      { text: "Returned to part-time work", why: "Returning to work shows improved daily function." },
      { text: "Startles and yells at noises daily", why: "Daily exaggerated startle shows ongoing hyperarousal." },
      { text: "Talks about the trauma in sessions", why: "Discussing the trauma shows less avoidance and progress in therapy." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s11-50", {
      topic: "Behavior strategies for ADHD at home",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "The parents of a 7-year-old with attention-deficit/hyperactivity disorder ask how to manage homework time. Which strategies should the nurse recommend? Select two.",
      rationale:
        "For school-age children with this disorder, parent training in behavior management is recommended along with medication. Short tasks with brief breaks match the child's attention span. Praise right after a finished task reinforces the behavior. A TV adds distraction. Taking away recess removes needed activity. Several instructions at once overload attention. A start time that changes each night removes the routine the child needs.",
      sources: [AAP_ADHD, HOCKENBERRY],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Break homework into short tasks with breaks", why: "Short tasks fit the child's attention span and build success." },
      { text: "Do homework in front of the TV to keep calm", why: "Background TV adds distraction and lowers focus." },
      { text: "Praise the child right after each finished task", why: "Immediate praise reinforces the desired behavior." },
      { text: "Remove recess when homework is not finished", why: "Physical activity helps attention. Removing it adds a harsh penalty." },
      { text: "Give several instructions at once to save time", why: "Multiple instructions overload attention. One step at a time works better." },
      { text: "Let the child pick a new start time each night", why: "A changing schedule removes the routine that helps the child focus." },
    ],
    correct: [0, 2],
  },
];
