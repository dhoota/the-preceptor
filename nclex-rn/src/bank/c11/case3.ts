import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c11-3";

/** Case 3. Inpatient mental health unit. Older widower with low mood. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Admission of a Recently Widowed Farmer",
  intro:
    "A 68-year-old man is admitted voluntarily to the adult inpatient mental health unit at 1600. His daughter brought him after she found a letter in which he left his farm to her. His wife died 7 months ago.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Major depressive disorder diagnosed 5 weeks ago by his primary health care provider.",
        "Sertraline 50 mg by mouth daily, started 4 weeks ago.",
        "Osteoarthritis of both knees.",
        "Drinks 4 to 5 beers every night since his wife died. Last drink was the night before admission.",
        "Lives alone on his farm. Keeps two hunting rifles in the house.",
        "Weight 71 kg. Weight 3 months ago was 78 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1610"],
        rows: [
          ["Temperature", "36.7°C (98.1°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "138/82 mmHg"],
          ["SpO2", "97% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Suicide risk cues in an older man",
        cjmm: "recognize",
        difficulty: 3,
        stem: "During the admission interview at 1630, the nurse records the widower's statements and behavior. Click to highlight the findings that raise his risk of suicide.",
        rationale:
          "Saying his family would be better off without him shows perceived burden. Having thought about using a rifle names a lethal method he can reach at home. Giving away a truck is a sign of settling affairs. Heavy nightly drinking lowers inhibition and deepens low mood. Eye contact, taking sertraline, asking about visits and agreeing to stay are not risk cues.",
        sources: [SRC.halter, SRC.safetyPlan],
      }),
      kind: "highlight",
      passage:
        "[[Says \"My family would be better off without me\"]]. [[Makes eye contact when answering questions]]. [[Gave his truck to his son-in-law last week]]. [[Says he has thought about using one of his rifles]]. [[Asks when his daughter can visit]]. [[Takes sertraline each morning as prescribed]]. [[Drinks 4 to 5 beers each night]]. [[Agrees to stay on the unit]].",
      spans: [
        { text: "Says \"My family would be better off without me\"", why: "Feeling like a burden to others is a warning sign of suicide." },
        { text: "Makes eye contact when answering questions", why: "Eye contact shows engagement and is not a risk cue." },
        { text: "Gave his truck to his son-in-law last week", why: "Giving away valued possessions can mean a person is preparing to die." },
        { text: "Says he has thought about using one of his rifles", why: "A named, lethal method that he can reach raises risk sharply." },
        { text: "Asks when his daughter can visit", why: "Wanting contact with family reflects connection, not risk." },
        { text: "Takes sertraline each morning as prescribed", why: "Taking his antidepressant as prescribed is not a risk cue." },
        { text: "Drinks 4 to 5 beers each night", why: "Heavy alcohol use lowers inhibition and worsens depression." },
        { text: "Agrees to stay on the unit", why: "Accepting admission is engagement in care, not a risk cue." },
      ],
      correct: [0, 2, 3, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Protective factors against suicide",
        cjmm: "analyze",
        difficulty: 3,
        stem: "At 1800 the nurse completes the social history. His daughter visits him every day. He says his faith teaches that suicide is wrong. He lives alone 40 km from town. He agrees to work on a safety plan. He stopped attending church after the funeral. He has had no close friends since he retired. For each finding, specify whether it is a protective factor.",
        rationale:
          "Daily contact with his daughter, a religious belief against suicide and willingness to build a safety plan are protective. They can be used in his plan of care. Living alone far from town, leaving his church community and having no close friends show social isolation. Isolation raises risk and removes protection.",
        sources: [SRC.halter, SRC.safetyPlan],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Protective factor", "Not a protective factor"],
      rows: [
        { text: "Daughter visits him every day", correct: [0], why: "Close family contact is a source of support and connection." },
        { text: "Lives alone 40 km from town", correct: [1], why: "Living alone and far from others adds to isolation." },
        { text: "Believes his faith forbids suicide", correct: [0], why: "A moral or religious objection to suicide is protective." },
        { text: "Stopped attending church after the funeral", correct: [1], why: "Leaving his church removed a source of community support." },
        { text: "Agrees to work on a safety plan", correct: [0], why: "Engagement in treatment is a protective factor." },
        { text: "No close friends since he retired", correct: [1], why: "Lack of friends reflects isolation, which raises risk." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Ranking problems in severe low mood",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "By 1900 the nurse has more data. He eats about 25% of each meal. He wakes at 0300 and cannot fall back asleep. He cries when he speaks of his wife. Which problem should the nurse address first?",
        rationale:
          "He has a lethal method in mind, has given away possessions and feels like a burden. The threat to his life comes before other needs. Poor intake, early waking and grief are real problems. They are addressed once his safety is in place.",
        sources: [SRC.halter, SRC.tjc],
      }),
      kind: "mc",
      options: [
        { text: "Disturbed sleep pattern", why: "Early waking needs care, but it does not threaten his life today." },
        { text: "Risk for suicide", why: "A lethal method in mind and signs of preparation make his safety the first need." },
        { text: "Imbalanced nutrition", why: "Eating 25% of meals and weight loss matter but are not the most urgent threat." },
        { text: "Complicated grieving", why: "Grief work comes after his immediate safety is secured." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Unit safety measures for suicide risk",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse plans care for the widower's first night on the unit. Which measures should the nurse include? Select all that apply.",
        rationale:
          "His plan names a lethal method, so he stays in continuous view of staff. A search of his belongings with him present removes items that could be used for self-harm. A written safety plan lists warning signs, coping steps and people to contact. Checks every 30 minutes leave gaps in which he could act. Belts and shoelaces can be used for hanging. A no-suicide contract has no proven benefit.",
        sources: [SRC.tjc, SRC.safetyPlan, SRC.halter],
      }),
      kind: "sata",
      options: [
        { text: "Check on him every 30 minutes", why: "Gaps of 30 minutes are too long for a client with a lethal plan." },
        { text: "Search his belongings with him present", why: "A search removes items that could be used for self-harm." },
        { text: "Let him keep his belt and shoelaces", why: "Belts and shoelaces can be used as ligatures." },
        { text: "Keep him in continuous view of staff", why: "Constant observation lets staff step in before he can harm himself." },
        { text: "Ask him to sign a no-suicide contract", why: "No-suicide contracts do not prevent suicide and can give false security." },
        { text: "Build a written safety plan with him", why: "A safety plan lists coping steps and contacts he can use in a crisis." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Serotonergic pain medicine with an antidepressant",
        cjmm: "action",
        difficulty: 4,
        stem: "On day 2 the nurse reviews new prescriptions for the widower. Which prescription should the nurse clarify with the primary health care provider before giving it?",
        tabs: [
          {
            title: "Orders",
            text: [
              "Sertraline 50 mg by mouth daily.",
              "Thiamine 100 mg by mouth daily.",
              "Melatonin 3 mg by mouth at bedtime as needed for sleep.",
              "Tramadol 50 mg by mouth every 6 hours as needed for knee pain.",
              "Docusate 100 mg by mouth daily.",
            ].join("\n"),
          },
        ],
        rationale:
          "Tramadol with sertraline raises the risk of serotonin syndrome and seizures. The tramadol label also warns against prescribing it for clients at risk of suicide. His last drink was the night before admission, and alcohol withdrawal also lowers the seizure threshold. The nurse asks for another pain option. Thiamine replaces a vitamin that heavy drinkers often lack. Melatonin and docusate have no serious interaction with sertraline.",
        sources: [SRC.tramadol, { body: "Government of Canada", work: "Controlled Drugs and Substances Act, S.C. 1996, c. 19, Schedule I", year: 2026, url: "https://laws-lois.justice.gc.ca/eng/acts/C-38.8/FullText.html" }],
        canada: "In Canada, tramadol is listed in Schedule I of the Controlled Drugs and Substances Act. The nurse handles it under the same controlled drug rules as other opioids.",
      }),
      kind: "mc",
      options: [
        { text: "Tramadol 50 mg every 6 hours as needed", why: "With sertraline, tramadol raises the risk of serotonin syndrome and seizures." },
        { text: "Thiamine 100 mg by mouth daily", why: "Thiamine replaces a vitamin often lacking with heavy alcohol use." },
        { text: "Melatonin 3 mg at bedtime as needed", why: "Melatonin has no serious interaction with sertraline." },
        { text: "Docusate 100 mg by mouth daily", why: "Docusate softens stool and does not interact with sertraline." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Sleep habits after discharge",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On day 10 the widower still wakes at 0300 on some nights. The nurse teaches sleep habits for use at home. Which two statements by the widower show understanding? Select two.",
        rationale:
          "Rising at the same time each morning steadies the sleep cycle. Keeping daytime naps short protects sleep at night. Alcohol at bedtime breaks up sleep later in the night. Lying awake in bed for long periods links the bed with wakefulness. Caffeine after supper and television in bed delay sleep.",
        sources: [SRC.potter],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"A beer at bedtime will help me stay asleep.\"", why: "Alcohol fragments sleep in the second half of the night." },
        { text: "\"I will get up at the same time every morning.\"", why: "A fixed wake time steadies the sleep and wake cycle." },
        { text: "\"I will stay in bed until sleep comes, however long.\"", why: "Lying awake for long periods links the bed with wakefulness." },
        { text: "\"I will have coffee after supper to stay alert.\"", why: "Caffeine late in the day delays sleep onset." },
        { text: "\"I will keep any daytime nap short.\"", why: "Short naps protect the drive to sleep at night." },
        { text: "\"I will watch television in bed until I drift off.\"", why: "Screens and activity in bed delay sleep." },
      ],
      correct: [1, 4],
    },
  ],
};
