import type { Item } from "@/engine/types";
import { AACN_FP, AAP_ABUSE, ASAM_AW, ENA_HT, HALTER, HOCKENBERRY, POTTER, TOWNSEND, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s12-01", {
      topic: "Fear voiced the night before surgery",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 58-year-old client is scheduled for a bowel resection in the morning. While the nurse checks the consent form, the client says quietly, \"What if I don't wake up after this?\" Which response by the nurse is most therapeutic?",
      rationale:
        "The client has voiced a fear of dying during surgery. The first step is to explore the fear with an open prompt. This tells the nurse what the client fears and shows the concern is taken seriously. Reassurance about the surgeon or about other clients closes the topic. A referral before exploring the fear passes the concern on unheard.",
      sources: [POTTER, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Your surgeon has done this operation many times.\"", why: "This offers false reassurance and moves the focus from the client to the surgeon." },
      { text: "\"Tell me more about what worries you most.\"", why: "An open prompt invites the client to describe the fear so the nurse can respond to it." },
      { text: "\"Most people who have this surgery do well.\"", why: "A generalization dismisses the client's own fear and ends the discussion." },
      { text: "\"I will ask the anesthesia provider to see you.\"", why: "A referral may help later, but it hands off the fear before the nurse has explored it." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-02", {
      topic: "Cues of human trafficking in the emergency department",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 17-year-old client comes to the emergency department with pelvic pain. She is with a man in his thirties who says he is her boyfriend. The nurse gathers a history. Which findings should the nurse recognize as possible signs of human trafficking? Select all that apply.",
      rationale:
        "A companion who will not leave and who holds the client's identity papers shows control over her movement. A tattoo of a name or a barcode can be a mark of ownership. A history that sounds rehearsed and vague suggests coaching. A wish for a female nurse, asthma and a question about wait time are common and do not point to trafficking.",
      sources: [ENA_HT],
    }),
    kind: "sata",
    options: [
      { text: "Companion refuses to leave the room", why: "A companion who will not allow a private interview may be controlling the client." },
      { text: "Client asks for a female nurse for the exam", why: "Many clients prefer a nurse of the same gender for a pelvic exam. This is not a sign of trafficking." },
      { text: "Companion holds her identity card", why: "Control of identity documents is a common way traffickers restrict a victim's freedom." },
      { text: "Client has a history of mild asthma", why: "A chronic illness such as asthma does not suggest trafficking." },
      { text: "Barcode tattoo with a man's name", why: "A name or barcode tattoo can be a brand that marks a victim as owned." },
      { text: "History sounds rehearsed and vague", why: "A scripted, vague story can mean the client was coached by someone else." },
      { text: "Client asks how long the wait will be", why: "Asking about wait time is common in the emergency department and is not a warning sign." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s12-03", {
      topic: "First step in a situational crisis",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 44-year-old client comes to an urgent care clinic the day after losing his job and learning that his wife is leaving him. He paces and wrings his hands. He says, \"I can't think straight. I don't know what to do next.\" Which action should the nurse take first?",
      rationale:
        "The client is in a situational crisis after two major losses in one day. Crisis intervention starts with safety. The nurse asks directly about thoughts of suicide or of harming others before any other step. Breathing exercises, a review of coping resources and a job referral are useful later. None of them comes before knowing whether the client is safe.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Teach him a slow breathing exercise", why: "Breathing can lower anxiety, but safety is assessed before comfort measures." },
      { text: "Help him list his coping resources", why: "Reviewing coping is a later step, after the nurse knows the client is safe." },
      { text: "Refer him to a local job placement service", why: "A job referral addresses one problem and skips the safety assessment." },
      { text: "Ask whether he has thoughts of suicide", why: "Two sudden losses raise suicide risk. Crisis care starts by assessing safety." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-04", {
      topic: "Steps of crisis intervention",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A nurse at a community crisis center meets a 31-year-old client who was robbed at knifepoint 2 days ago. The client cannot sleep and is afraid to leave the apartment. Place the crisis intervention steps in the order the nurse should carry them out.",
      rationale:
        "Crisis intervention is brief and focused on the present. The nurse first checks that the client is safe. Next the nurse learns how the client sees the robbery. Then the nurse asks what coping and supports the client has. With that picture the nurse and client plan a few concrete steps. A follow-up contact checks whether the plan worked. Exploring childhood roots and setting long-term therapy goals are not part of crisis work.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Explore past coping and current supports", why: "Coping and supports are assessed after the event is understood and before planning." },
      { text: "Assess the client's safety and risk of harm", why: "Safety comes first in every crisis contact." },
      { text: "Explore childhood roots of the client's reaction", why: "Crisis work stays in the present. Past conflicts belong to longer therapy." },
      { text: "Plan concrete short-term steps together", why: "Planning follows assessment and uses the client's own strengths." },
      { text: "Learn how the client views the robbery", why: "The client's view of the event shapes the crisis and is assessed after safety." },
      { text: "Set long-term goals for personality change", why: "Crisis intervention aims to restore the prior level of function, not to change personality." },
      { text: "Arrange a follow-up to review the plan", why: "Follow-up comes last and checks whether the plan restored coping." },
    ],
    correct: [1, 4, 0, 3, 6],
  },
  {
    ...meta("rn-s12-05", {
      topic: "Family member at a resuscitation",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A 70-year-old client on a medical unit goes into cardiac arrest. The resuscitation team is working at the bedside. The client's daughter arrives and asks to be with her father. What should the nurse do?",
      rationale:
        "Professional guidance supports offering families the choice to be present during resuscitation. A staff member stays with the family member to explain what is happening and to watch for distress. Presence can help families understand that everything was tried and can ease grief. Sending the daughter away, delaying her until the end or handing her to the chaplain outside denies a choice she has asked for.",
      sources: [AACN_FP],
    }),
    kind: "mc",
    options: [
      { text: "Bring her in with a staff member beside her", why: "A trained staff member explains events and supports her while she is present." },
      { text: "Ask her to wait in the family lounge for now", why: "This denies the presence she asked for, which guidance supports offering." },
      { text: "Let her in once the team has finished CPR", why: "Waiting until the end removes her chance to be present during the effort." },
      { text: "Ask the chaplain to sit with her in the hall", why: "Spiritual support helps, but it does not honor her request to be at the bedside." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s12-06", {
      topic: "Injury pattern in a young infant",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reviews the admission note for a 4-month-old infant brought to the emergency department by both parents. Click to highlight the findings that suggest possible physical abuse.",
      rationale:
        "An infant who does not yet roll over or cruise rarely bruises by accident. Bruises on the ear and neck are in areas that are seldom injured in falls. The parents give two different accounts of the injury. The couch account does not fit an infant who cannot roll. A 2-day delay in seeking care is another warning sign. Normal weight, current immunizations and a flat fontanel do not raise concern.",
      sources: [AAP_ABUSE, HOCKENBERRY],
    }),
    kind: "highlight",
    passage:
      "[[Infant is not yet rolling over]]. [[Bruises on the left ear and the side of the neck]]. [[Mother states the infant rolled off the couch]]. [[Father states the infant fell from a changing table]]. [[Injury occurred 2 days before arrival]]. [[Weight at the 50th percentile]]. [[Immunizations up to date]]. [[Anterior fontanel soft and flat]].",
    spans: [
      { text: "Infant is not yet rolling over", why: "An infant who cannot roll could not have rolled off a couch as described." },
      { text: "Bruises on the left ear and the side of the neck", why: "Any bruise in a non-mobile infant, and bruises on the ear or neck, raise concern for abuse." },
      { text: "Mother states the infant rolled off the couch", why: "This account does not fit the infant's development and conflicts with the father's account." },
      { text: "Father states the infant fell from a changing table", why: "A second, different account of the same injury is a warning sign." },
      { text: "Injury occurred 2 days before arrival", why: "A delay in seeking care for an injured infant is a warning sign." },
      { text: "Weight at the 50th percentile", why: "Normal growth does not suggest neglect or abuse." },
      { text: "Immunizations up to date", why: "Current immunizations show routine care and do not raise concern." },
      { text: "Anterior fontanel soft and flat", why: "A soft, flat fontanel is normal and does not suggest raised intracranial pressure." },
    ],
    correct: [0, 1, 2, 3, 4],
  },
  {
    ...meta("rn-s12-07", {
      topic: "Spotting a blocking question",
      cjmm: "evaluate",
      process: "communication",
      difficulty: 2,
      stem: "A nursing student talks with a client who stopped taking her antidepressant. The nurse observes the conversation. Which statement by the student needs follow-up?",
      rationale:
        "A why question asks the client to defend her choice. It sounds like judgment and tends to make clients guarded. The student can ask what happened instead. Restating a fact to check it, asking about the experience and inviting the client to go on are therapeutic techniques that keep the conversation open.",
      sources: [POTTER, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"You stopped the medicine two weeks ago?\"", why: "Restating a fact to check it is clarifying, a therapeutic technique." },
      { text: "\"What was it like after you stopped it?\"", why: "An open question about her experience invites her to share more." },
      { text: "\"Why would you stop a medicine that helps?\"", why: "A why question sounds judgmental and puts the client on the defensive." },
      { text: "\"Go on. I would like to hear more.\"", why: "A general lead encourages the client to keep talking." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-08", {
      topic: "Response to symptom-triggered withdrawal care",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 49-year-old client admitted for alcohol withdrawal receives lorazepam under a symptom-triggered protocol that uses the CIWA-Ar scale. Based on the trend, how should the nurse evaluate the client's response?",
      tabs: [
        {
          title: "Withdrawal Flow Sheet",
          table: {
            head: ["Time", "0600", "0800", "1000", "1200"],
            rows: [
              ["CIWA-Ar score", "18", "14", "9", "6"],
              ["Heart rate (/minute)", "118", "106", "94", "86"],
              ["BP (mmHg)", "164/98", "150/90", "138/84", "130/80"],
              ["Tremor", "Moderate", "Moderate", "Mild", "Minimal"],
              ["Level of consciousness", "Alert", "Alert", "Alert", "Alert"],
              ["Lorazepam given", "2 mg", "2 mg", "None", "None"],
            ],
          },
        },
      ],
      rationale:
        "The CIWA-Ar score falls from 18 to 6 over 6 hours. Heart rate falls from 118 to 86/minute and BP from 164/98 to 130/80 mmHg. Tremor eases from moderate to minimal. The client stays alert, so there is no sign of oversedation. No lorazepam was given at 1000 or 1200, when the scores were in the mild range. This pattern shows withdrawal easing with treatment.",
      refs: ["A CIWA-Ar score under 10 indicates mild alcohol withdrawal. A score of 10 or more indicates at least moderate withdrawal."],
      sources: [ASAM_AW],
    }),
    kind: "mc",
    options: [
      { text: "Withdrawal is moving toward delirium", why: "Falling scores, pulse and BP with a clear sensorium do not fit delirium." },
      { text: "The client is oversedated by lorazepam", why: "The client stays alert at every check, and no dose was given after 0800." },
      { text: "Withdrawal is easing with treatment", why: "Score, pulse, BP and tremor all fall steadily, which shows a response." },
      { text: "Symptoms are unchanged since admission", why: "The score falls from 18 to 6, which is a clear change." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-09", {
      topic: "Grief before an expected death",
      cjmm: "analyze",
      process: "caring",
      difficulty: 3,
      stem: "The wife of a 63-year-old client with advanced amyotrophic lateral sclerosis tells the home health nurse, \"I cry every night already. I keep picturing the funeral, and he is still here.\" She still cooks, keeps his appointments and sleeps 6 hours a night. How should the nurse interpret her statement?",
      rationale:
        "The wife is grieving a death she expects but that has not happened. This is anticipatory grief. It is a normal response that can help families prepare. She still functions, cooks, keeps appointments and sleeps 6 hours a night. Nothing suggests a depressive episode or complicated grief. She does not deny the prognosis because she openly pictures the funeral.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Complicated grief that needs referral", why: "Complicated grief follows a death and disrupts function. She is still functioning well." },
      { text: "Anticipatory grief before an expected loss", why: "Grieving before an expected death is a normal response called anticipatory grief." },
      { text: "Denial of her husband's prognosis", why: "She openly pictures his funeral, which shows she accepts the prognosis." },
      { text: "A major depressive episode needing treatment", why: "She sleeps, cooks and keeps appointments. The stem gives no sign of a depressive episode." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-10", {
      topic: "Hospital care for a client with low vision",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 76-year-old client with severe macular degeneration is admitted to a medical unit for pneumonia. The client lives alone, manages well at home and has normal hearing. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "Low vision makes a new room unfamiliar and unsafe. The nurse says who is entering so the client is not startled. Meal items are described by clock position so the client can eat without help. Orientation to the room layout and a guiding arm support safe movement. Dim light makes low vision worse. Hearing is normal, so a louder voice does not help. Putting items away out of sight makes them hard to find.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Say your name as you enter the room", why: "Announcing yourself prevents startling a client who cannot see who is there." },
      { text: "Keep the room lights dim during the day", why: "Good, even lighting helps low vision. Dim light makes it harder to see." },
      { text: "Describe the meal tray by clock positions", why: "Clock positions let the client find each food item without help." },
      { text: "Speak louder when giving instructions", why: "The client has a vision loss, not a hearing loss. A louder voice adds nothing." },
      { text: "Orient the client to the room layout", why: "Knowing where the bathroom, bed and call light are lowers fall risk." },
      { text: "Offer your arm for the client to hold", why: "A sighted guide lets the client walk safely and keep some control." },
      { text: "Put the client's belongings away in a drawer", why: "Items moved out of reach and sight are hard to find. They stay in consistent places." },
    ],
    correct: [0, 2, 4, 5],
  },
];
