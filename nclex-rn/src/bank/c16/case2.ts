import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c16-2";

/** Case 2. Home health. Older man with dementia who leaves home at night, and his tired wife. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A Home Visit After a Night Walk",
  intro:
    "A home health nurse makes a first visit to an 84-year-old man and his 80-year-old wife. Last week police found him 2 km from home at 0300, dressed in pajamas, on a night of 4°C (39.2°F). His primary health care provider made the referral.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Alzheimer disease, moderate stage, diagnosed 6 years ago. Walks without an aid. Retired city bus driver.",
        "Sleeps for much of the afternoon. Awake and restless from about 0100 on most nights.",
        "Often says in the late afternoon that he must leave for work.",
        "Medications: donepezil 10 mg by mouth at bedtime.",
        "Wife: hypertension, prescribed amlodipine 5 mg by mouth daily. She is his only caregiver. A daughter lives 3 hours away.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Cues of strain in a spouse caregiver",
        cjmm: "recognize",
        process: "caring",
        difficulty: 2,
        stem: "The nurse talks with the wife in the kitchen while her husband naps. Click to highlight the statements that suggest caregiver strain.",
        rationale:
          "Short sleep from listening for the door, giving up her choir and unplanned weight loss show the load she carries. Yelling and then crying shows emotional exhaustion. Missed blood pressure pills show her own health slipping. A weekly call, a long marriage and a task he enjoys are not signs of strain.",
        sources: [SRC.fazio],
      }),
      kind: "highlight",
      passage:
        "[[I sleep about 4 hours a night because I listen for the door]]. [[Our daughter phones every Sunday]]. [[I stopped going to choir because I can't leave him alone]]. [[I have lost 4 kg since spring without trying]]. [[He still enjoys folding the towels]]. [[I yelled at him yesterday and then cried]]. [[We have been married 58 years]]. [[I have missed my blood pressure pills for a week]].",
      spans: [
        { text: "I sleep about 4 hours a night because I listen for the door", why: "Chronic short sleep from night watching is a common sign of strain." },
        { text: "Our daughter phones every Sunday", why: "A weekly call is a support, not a sign of strain." },
        { text: "I stopped going to choir because I can't leave him alone", why: "Losing her own social activities shows the load of constant care." },
        { text: "I have lost 4 kg since spring without trying", why: "Unplanned weight loss can reflect stress and missed meals." },
        { text: "He still enjoys folding the towels", why: "A task he enjoys is a strength to build on, not a sign of strain." },
        { text: "I yelled at him yesterday and then cried", why: "Anger followed by tears suggests emotional exhaustion." },
        { text: "We have been married 58 years", why: "The length of the marriage is not a sign of strain." },
        { text: "I have missed my blood pressure pills for a week", why: "Neglect of her own health care is a sign of caregiver strain." },
      ],
      correct: [0, 2, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "SIPC",
        topic: "Home hazards with dementia",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse walks through the home with the wife and notes the findings below. For each finding, specify whether it raises the risk of leaving home unnoticed, raises the risk of injury inside the home, or does neither.",
        rationale:
          "A door lock he can reach and open lets him leave at night. Car keys, a coat and a hat by the door can trigger the urge to go out. Scatter rugs and a cord across the floor are trip hazards inside. A night light and a grab bar lower injury risk.",
        sources: [SRC.alz, SRC.falls],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises risk of leaving unnoticed", "Raises risk of injury at home", "Neither"],
      rows: [
        { text: "Knob lock on the front door at waist height", correct: [0], why: "He can see and open a lock at this height. Locks placed high or low are harder to find." },
        { text: "Scatter rugs in the hallway", correct: [1], why: "Loose rugs are a trip hazard, most of all during night walking." },
        { text: "Car keys on a hook by the front door", correct: [0], why: "Keys in sight can prompt him to leave or try to drive." },
        { text: "Night light in the hallway", correct: [2], why: "A night light lowers the risk of falls at night." },
        { text: "Coat and hat hung beside the front door", correct: [0], why: "Outdoor clothes in sight can cue the urge to go out." },
        { text: "Extension cord across the bedroom floor", correct: [1], why: "A cord across a walkway is a trip hazard." },
        { text: "Grab bar beside the toilet", correct: [2], why: "A grab bar supports safe transfers and lowers injury risk." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Main safety risk with night wandering",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse weighs the police report, his night waking and the walk through the home to judge his main safety risk. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "He was found 2 km from home at 0300 in pajamas on a cold night. The front door lock is one he can open. Together these point to a high risk of harm while lost outdoors. Nothing in the chart suggests choking, overdose or falls from bed. A night light and a grab bar lower risk rather than raise it.",
        sources: [SRC.alz, SRC.fazio],
      }),
      kind: "cloze",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      scoring: "triad",
      blanks: [
        {
          options: [
            { text: "choking during meals", why: "No swallowing trouble is reported." },
            { text: "harm while lost outdoors", why: "He left home at night in pajamas and was found far from home in the cold." },
            { text: "an overdose of donepezil", why: "Nothing suggests he takes his own medicines or has taken extra." },
            { text: "a fall from bed", why: "He walks without an aid and no bed falls are reported." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "his bedtime donepezil", why: "Donepezil at bedtime does not show a risk of getting lost." },
            { text: "folding the towels", why: "An enjoyed task is a strength, not a risk." },
            { text: "the hallway night light", why: "A night light lowers fall risk and does not show wandering risk." },
            { text: "being found 2 km away at 0300", why: "Leaving home at night and being found far away shows the risk has already occurred." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "a door lock he can open", why: "A lock he can open leaves no barrier to leaving at night." },
            { text: "a grab bar by the toilet", why: "A grab bar lowers injury risk and does not relate to getting lost." },
            { text: "a daughter who phones weekly", why: "A weekly call is a support, not evidence of risk." },
            { text: "his retired bus job", why: "His past job is useful for redirection. It is not evidence of the risk." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Matching community services to needs",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans referrals with the wife. Drag the service that best matches each need.",
        rationale:
          "An adult day program gives him structured daytime activity and frees her for weekday choir. Daytime activity may also cut his long afternoon naps. Overnight in-home respite lets her sleep through the night. A safe-return ID registry helps responders identify him and bring him home. Moderate-stage dementia does not meet hospice criteria. He walks without an aid and no meal problem is reported for him.",
        sources: [SRC.alz, SRC.fazio, { body: "MedicAlert Foundation Canada", work: "Safe & Found program", year: 2026, url: "https://www.medicalert.ca/safe-and-found-subsidy" }],
        canada: "In Canada, MedicAlert Foundation Canada runs the Safe & Found program for people living with dementia. Its blue ID links first responders to a 24-hour hotline with health, wandering history and caregiver contacts.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Wife cannot leave him alone for weekday choir practice", "Wife sleeps about 4 hours a night", "Client carries no identification if lost"],
      tokens: [
        { text: "Home physical therapy visits", why: "He walks without an aid. No mobility need is reported." },
        { text: "Adult day program", why: "A day program gives him structured activity and frees her during the day." },
        { text: "Hospice care enrollment", why: "Hospice needs a prognosis of 6 months or less. Moderate-stage dementia does not meet this." },
        { text: "Overnight in-home respite", why: "A night aide watches him so she can sleep." },
        { text: "Home-delivered meals", why: "Meals do not meet any of the three listed needs." },
        { text: "Safe-return ID registry", why: "An ID bracelet linked to a registry helps responders bring a lost person home." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to a late-day urge to leave",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "At 1600 the client wakes, puts on his jacket and says, \"I have to go. My bus route starts in 10 minutes.\" Which two responses by the nurse are appropriate? Select two.",
        rationale:
          "Moderate dementia limits his ability to accept correction. Responding to the feeling behind the words and then redirecting keeps him calm. Talking about his years as a driver honors his identity. Tea offers a pleasant change of focus. Arguing, warning of danger or blocking the door tends to raise distress.",
        sources: [SRC.fazio, SRC.alz],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"You retired years ago. You don't have a route now.\"", why: "Correcting him tends to cause arguing and distress in moderate dementia." },
        { text: "\"You drove a bus for years. Tell me about your route.\"", why: "This validates his feelings and draws on his long memory." },
        { text: "\"If you leave, you will get lost again like last week.\"", why: "A warning he may not remember adds fear without changing behavior." },
        { text: "\"I will lock the door now so you cannot leave.\"", why: "Blocking him tends to raise agitation and does not address his need." },
        { text: "\"Let's have a cup of tea together before you go.\"", why: "A calm offer shifts his focus without arguing." },
        { text: "\"Sit down, please. Your wife is too tired for this.\"", why: "This adds guilt he cannot act on and may raise agitation." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Caregiver self-care outcome",
        cjmm: "evaluate",
        process: "nursing-process",
        difficulty: 2,
        stem: "Four weeks later the client attends an adult day program and a night aide comes twice a week. The nurse checks the wife's own health. Which finding shows that her self-care goals are being met?",
        rationale:
          "At the first visit she slept about 4 hours a night. Sleeping about 7 hours most nights shows the respite plan is protecting her health. Taking her pills on only 4 days a week is still poor adherence. More weight loss is a warning sign. Leaving home only for groceries shows she is still cut off from her own activities.",
        sources: [SRC.fazio],
      }),
      kind: "mc",
      options: [
        { text: "She has lost another 2 kg since the first visit.", why: "Ongoing weight loss suggests stress is still affecting her health." },
        { text: "She now leaves the house only for groceries.", why: "She is still isolated from her own social activities." },
        { text: "She takes her blood pressure pills 4 days a week.", why: "Missing 3 days a week is still poor adherence." },
        { text: "She sleeps about 7 hours on most nights.", why: "Better sleep shows the respite plan is working for her." },
      ],
      correct: 3,
    },
  ],
};
