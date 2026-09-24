import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c10-2";

/** Case 2. Community home visit. Low mood 5 weeks after birth. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A Home Visit Five Weeks After Birth",
  intro:
    "A community health nurse makes a home visit to a 29-year-old woman who gave birth to her first child 5 weeks ago. She is breastfeeding. Her partner works night shifts. At the 2-week visit she said she was tired but coping.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Major depression at age 19, treated with psychotherapy. Has never taken medication for mood.",
        "No history of mania or psychosis.",
        "Uncomplicated vaginal birth at 39 weeks of gestation.",
        "Infant weight gain on track at the 4-week clinic visit.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)"],
          ["Heart rate", "84/minute"],
          ["BP", "118/74 mmHg"],
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
        topic: "Mood cues at a postpartum home visit",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse writes the note below during the home visit. Click to highlight the findings that require follow-up.",
        rationale:
          "Sad mood most days for 3 weeks and withdrawal from friends are core depressive symptoms. Lying awake while the baby sleeps is insomnia, not infant care. Unwashed hair and pajamas in the afternoon suggest low energy and poor self-care. Saying the baby would be better off with someone else signals worthlessness and needs direct questions about self-harm. A good latch, a nonpalpable fundus, a healed perineum and a BP of 118/74 mmHg are expected at 5 weeks.",
        sources: [SRC.acog4, SRC.lowdermilk],
      }),
      kind: "highlight",
      passage:
        "[[Hair unwashed and still in pajamas at 1400]]. [[Says she has felt sad most days for 3 weeks]]. [[Has stopped returning calls from friends]]. [[Lies awake even when the baby sleeps]]. [[Says, \"The baby would be better off with someone else.\"]] [[Breastfeeds with a deep latch and audible swallows]]. [[Fundus not palpable]]. [[Perineum healed]]. [[BP 118/74 mmHg]].",
      spans: [
        { text: "Hair unwashed and still in pajamas at 1400", why: "Neglected self-care in the afternoon suggests low energy and low mood." },
        { text: "Says she has felt sad most days for 3 weeks", why: "Low mood most days for over 2 weeks is a core feature of depression." },
        { text: "Has stopped returning calls from friends", why: "Withdrawal from friends reflects loss of interest and social isolation." },
        { text: "Lies awake even when the baby sleeps", why: "Being unable to sleep when given the chance is insomnia, a depressive symptom." },
        { text: "Says, \"The baby would be better off with someone else.\"", why: "This signals worthlessness and needs direct questions about thoughts of harm." },
        { text: "Breastfeeds with a deep latch and audible swallows", why: "A deep latch with audible swallows shows effective breastfeeding." },
        { text: "Fundus not palpable", why: "The uterus is expected to be back in the pelvis by 5 weeks." },
        { text: "Perineum healed", why: "A healed perineum is expected 5 weeks after birth." },
        { text: "BP 118/74 mmHg", why: "This BP is in the normal range and needs no follow-up." },
      ],
      correct: [0, 1, 2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Comparing postpartum mood conditions",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse compares the client's findings with other postpartum mood conditions. For each finding, specify whether it is most consistent with postpartum blues, postpartum depression or postpartum psychosis.",
        rationale:
          "Postpartum blues start in the first days after birth and resolve within 2 weeks. Mood swings and brief tearful spells fit the blues. Sad mood, loss of interest and insomnia lasting past 2 weeks fit postpartum depression, as in this client. Hallucinations, disorganized thinking and bizarre behavior fit postpartum psychosis. Psychosis is a psychiatric emergency.",
        sources: [SRC.acog5, SRC.lowdermilk],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Postpartum blues", "Postpartum depression", "Postpartum psychosis"],
      rows: [
        { text: "Tearful spells in the first days that end within 2 weeks", correct: [0], why: "Brief tearfulness that resolves within 2 weeks fits the blues." },
        { text: "Sad mood most days for 3 weeks", correct: [1], why: "Low mood lasting past 2 weeks fits depression, not the blues." },
        { text: "Loss of interest in friends and activities", correct: [1], why: "Loss of interest is a core symptom of major depression." },
        { text: "Hearing voices that say the baby is evil", correct: [2], why: "Auditory hallucinations are a psychotic feature." },
        { text: "Mild mood swings starting 3 days after birth", correct: [0], why: "Early, mild mood swings fit the blues." },
        { text: "Disorganized thinking with bizarre behavior", correct: [2], why: "Disorganized thought and bizarre behavior are psychotic features." },
        { text: "Trouble sleeping even when the baby sleeps", correct: [1], why: "Insomnia when there is a chance to sleep is a depressive symptom." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PSY",
        topic: "Priority concern in postpartum depression",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The client completes the Edinburgh Postnatal Depression Scale and scores 18. On the item about thoughts of harming herself she answers \"hardly ever\". Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Any answer other than never on the self-harm item is a positive screen for suicidal thinking. It calls for an immediate assessment of risk before the nurse leaves. Her statement that the baby would be better off with someone else adds to the concern. Sleep, breastfeeding and bleeding matter less while self-harm risk is unknown. Her birth was uncomplicated and 5 weeks have passed.",
        sources: [SRC.acog4, SRC.lowdermilk],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse's priority is to further assess {0} because the client {1}.",
      blanks: [
        {
          options: [
            { text: "her sleep habits", why: "Sleep matters but is less urgent than possible self-harm." },
            { text: "her breastfeeding", why: "She breastfeeds with a deep latch and audible swallows." },
            { text: "her risk of suicide", why: "A positive self-harm item needs an immediate risk assessment." },
            { text: "her risk of bleeding", why: "Late postpartum bleeding is not suggested by any finding." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "reports thoughts of self-harm", why: "Any thought of self-harm on the screen needs direct follow-up." },
            { text: "has trouble with sleep", why: "Insomnia is a symptom but does not make suicide risk the priority." },
            { text: "breastfeeds her baby", why: "Breastfeeding is going well and is not a risk factor here." },
            { text: "had a vaginal birth", why: "Her birth was uncomplicated 5 weeks ago." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Care coordination for postpartum depression",
        cjmm: "generate",
        process: "communication",
        difficulty: 4,
        stem: "On direct questions the client says she has passing thoughts of not waking up. She has no plan or intent. There are no firearms in the home. Her partner can stay home tonight. Which actions should the nurse include in the plan? Select all that apply.",
        rationale:
          "Passing thoughts of death without a plan still need a same-day evaluation by the provider. A 24-hour crisis line gives her help at any hour. Including her partner, with her consent, adds support at home. A support group eases isolation. Calling her feelings the blues is false reassurance, because her low mood has lasted longer than the blues do. Waiting 6 months or leaving with only documentation delays care.",
        sources: [SRC.acog4, SRC.acog5, { body: "Public Health Agency of Canada", work: "Government of Canada launches three-digit suicide crisis helpline (9-8-8: Suicide Crisis Helpline)", year: 2023, url: "https://www.canada.ca/en/public-health/news/2023/11/government-of-canada-launches-three-digit-suicide-crisis-helpline.html" }],
        canada:
          "In Canada the 24-hour crisis line is 9-8-8, the Suicide Crisis Helpline. The Government of Canada launched it in November 2023, and it takes calls and texts in English and French.",
      }),
      kind: "sata",
      options: [
        { text: "Tell her these feelings are normal baby blues", why: "Lasting low mood with thoughts of death does not fit the blues." },
        { text: "Arrange a same-day evaluation with her provider", why: "A positive self-harm screen needs prompt, risk-based evaluation." },
        { text: "Plan a repeat depression screen at the 6-month visit", why: "Waiting 6 months leaves depression and self-harm risk untreated." },
        { text: "Involve her partner with her consent", why: "Her partner can stay with her and watch for worsening mood." },
        { text: "Document the screening score and end the visit", why: "Documentation without action leaves the risk unaddressed." },
        { text: "Give her a 24-hour crisis line number", why: "A crisis line gives access to help if thoughts worsen at night." },
        { text: "Refer her to a postpartum support group", why: "Peer support reduces isolation and supports recovery." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Antidepressant use while breastfeeding",
        cjmm: "action",
        process: "teaching",
        difficulty: 3,
        stem: "The provider prescribes sertraline 25 mg by mouth daily. The client asks whether she must stop breastfeeding. Which response should the nurse give?",
        rationale:
          "Sertraline is a first-line choice for postpartum depression in a client with no past medication history. It has the most breastfeeding safety data of the antidepressants. Guidelines advise against stopping mental health medication for lactation alone. Pumping and discarding milk is not needed. Delaying treatment until weaning leaves the depression untreated.",
        sources: [SRC.acog5],
      }),
      kind: "mc",
      options: [
        { text: "\"You can keep breastfeeding while you take it.\"", why: "Sertraline has extensive safety data in breastfeeding." },
        { text: "\"Pump and discard your milk for 4 hours after doses.\"", why: "Discarding milk is not needed with sertraline." },
        { text: "\"Switch the baby to formula before your first dose.\"", why: "Guidelines advise against stopping breastfeeding for this medication." },
        { text: "\"You can start the pills once the baby is weaned.\"", why: "Delaying treatment leaves the depression untreated." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Evaluating safe infant sleep teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "At the 5-week visit the nurse also saw the baby asleep on a couch cushion next to the client and taught safe sleep. Two weeks later the client's mood is improving. Which two statements show she understood the teaching? Select two.",
        rationale:
          "Infants sleep on their backs on a firm, flat surface in the parents' room but not in their bed. The sleep space holds no pillows, bumpers or soft bedding. Couches are among the most dangerous places for an infant to sleep. Side positioning and weighted sleep sacks are not recommended. Car seats are not for routine sleep.",
        sources: [SRC.sleep],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"She naps on the couch cushion next to me while I rest.\"", why: "Couch sleeping carries a high risk of suffocation." },
        { text: "\"I lay her on her back in the bassinet by our bed.\"", why: "Back sleeping in a separate space in the parents' room is recommended." },
        { text: "\"I prop her on her side with a rolled blanket.\"", why: "Side sleeping and soft props raise the risk of sudden death." },
        { text: "\"A weighted sleep sack helps her settle at night.\"", why: "Weighted sleep products are not recommended for infants." },
        { text: "\"I keep pillows and bumpers out of her bassinet.\"", why: "A bare sleep surface lowers the risk of suffocation." },
        { text: "\"She sleeps in her car seat in the crib at night.\"", why: "Sitting devices are not for routine sleep." },
      ],
      correct: [1, 4],
    },
  ],
};
