import type { Item, Source } from "@/engine/types";
import { CLAS, DSM, HALTER, HINKLE, POTTER, SLOANE_BATH, WOCN_OSTOMY, meta } from "./common";

const MALNUTRITION: Source = {
  body: "White JV, Guenter P, Jensen G, Malone A, Schofield M. Academy of Nutrition and Dietetics, American Society for Parenteral and Enteral Nutrition",
  work: "Consensus Statement: Characteristics Recommended for the Identification and Documentation of Adult Malnutrition. JPEN Journal of Parenteral and Enteral Nutrition 36(3):275",
  year: 2012,
  url: "https://pubmed.ncbi.nlm.nih.gov/22535923/",
};

const NIDA_INHALANTS: Source = {
  body: "National Institute on Drug Abuse",
  work: "Inhalants: Research Topic",
  year: 2024,
  url: "https://nida.nih.gov/research-topics/inhalants",
};

const CNPS_YOUTH: Source = {
  body: "Canadian Nurses Protective Society",
  work: "InfoLAW: Balancing Privacy and Confidentiality in Youth Mental Health Care",
  year: 2026,
  url: "https://cnps.ca/article/infolaw-balancing-privacy-and-confidentiality-in-youth-mental-health-care/",
};

export const PART3: Item[] = [
  {
    ...meta("rn-s28-21", {
      need: "BCC",
      topic: "Scheduling a bowel training program",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 72-year-old client has fecal incontinence after a stroke and is starting a bowel training program. Before the stroke the client usually had a bowel movement after breakfast. Which plan should the nurse use?",
      rationale:
        "Bowel training uses a set time that matches the client's past habit. Eating triggers the gastrocolic reflex, which moves stool toward the rectum. Toileting 30 minutes after breakfast uses both the reflex and the old habit. Waiting for requests is not a schedule. Nightly stimulant laxatives cause dependence. Limiting fluids hardens stool.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Offer a bedpan or commode only when the client asks for one", why: "Toileting on request does not build a regular pattern." },
      { text: "Give a stimulant laxative each evening at bedtime", why: "Daily stimulant laxatives cause dependence and do not retrain the bowel." },
      { text: "Seat the client on the toilet 30 minutes after breakfast", why: "This matches the prior habit and uses the reflex that follows a meal." },
      { text: "Limit fluids after lunch to reduce stool volume", why: "Less fluid hardens stool and leads to constipation." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s28-22", {
      need: "PSY",
      topic: "Honoring a family's practices after a death",
      cjmm: "action",
      process: "culture",
      difficulty: 3,
      stem: "A Muslim client dies on a medical unit after a long illness. His wife and adult sons are at the bedside. Which actions by the nurse show respect for the family's religious and cultural practices? Select all that apply.",
      rationale:
        "Practices after death vary between families of the same faith. The nurse asks rather than assumes. Asking which rituals the family wants and who should handle the body lets them lead. Offering to call their own imam supports their faith. Starting routine care first, rushing the body away or calling a chaplain of another tradition overrides their wishes.",
      sources: [CLAS, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Tell the family the body must go to the morgue soon", why: "Rushing the family can interrupt rituals they need to perform." },
      { text: "Ask the family which rituals they want to perform", why: "Asking lets the family's own practices guide care." },
      { text: "Page the hospital chaplain to lead the prayers", why: "The family may want a leader of their own faith. The nurse should ask first." },
      { text: "Start routine postmortem care before asking the family", why: "Routine care may conflict with washing or handling the family wants to do." },
      { text: "Ask who the family prefers to handle the body", why: "Some families prefer that only family or same-sex members touch the body." },
      { text: "Offer to call the family's imam", why: "Contacting their own spiritual leader supports the family's faith." },
    ],
    correct: [1, 4, 5],
  },
  {
    ...meta("rn-s28-23", {
      need: "BCC",
      topic: "Falling weight and meal intake",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "The nurse reviews the weekly record of an 88-year-old long-term care resident with moderate dementia. The resident now needs verbal cues to keep eating. Based on the trend, which action should the nurse take?",
      tabs: [
        {
          title: "Weekly Record",
          table: {
            head: ["Measure", "Week 1", "Week 2", "Week 3", "Week 4"],
            rows: [
              ["Weight (kg)", "62.0", "61.2", "60.1", "58.9"],
              ["Meals eaten (%)", "75", "60", "50", "40"],
              ["Fluid intake (mL/day)", "1500", "1400", "1300", "1250"],
            ],
          },
        },
      ],
      rationale:
        "Weight fell each week from 62.0 to 58.9 kg, a loss of about 5 percent in under a month. Meals eaten fell from 75 to 40 percent. Fluid intake also dropped. This is significant unplanned weight loss with a falling intake. A dietitian can assess needs and adjust the diet. Waiting or only weighing more often delays treatment.",
      refs: ["An unplanned weight loss of 5% or more in 1 month is significant."],
      sources: [MALNUTRITION, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Keep the current plan and weigh again next week", why: "Steady loss and falling intake need action now, not another week of waiting." },
      { text: "Weigh the resident each day for the next week", why: "More weights confirm the loss but do nothing to treat it." },
      { text: "Replace one meal each day with a liquid supplement", why: "Supplements add to meals. Replacing a meal does not raise total intake." },
      { text: "Request a dietitian referral for the weight loss", why: "Significant weight loss with falling intake needs a nutrition assessment." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s28-24", {
      need: "PSY",
      topic: "A request to keep a secret",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 16-year-old client on an adolescent mental health unit says to the nurse, \"I'll tell you something, but only if you promise not to tell anyone.\" Which response by the nurse is best?",
      rationale:
        "The nurse cannot keep secrets that affect the client's safety. Stating the limit before the client speaks is honest and keeps trust. A promise the nurse may have to break damages the relationship. Sending the client to parents avoids the conversation. Saying everything is charted discourages sharing.",
      sources: [HALTER, CNPS_YOUTH],
      canada: "The Canadian Nurses Protective Society lists suspected child abuse or neglect and a risk of serious harm among the limits to a youth's confidentiality. The laws that set these limits vary by province.",
    }),
    kind: "mc",
    options: [
      { text: "\"I promise. Whatever you tell me stays just between us.\"", why: "The nurse may have to break this promise, which would damage trust." },
      { text: "\"I can't promise. Safety issues go to the team.\"", why: "This is honest about the limit of confidentiality before the client speaks." },
      { text: "\"You should tell your parents first, not me.\"", why: "This turns the client away and closes the conversation." },
      { text: "\"Everything you say goes into your chart.\"", why: "This discourages sharing and misstates how information is used." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s28-25", {
      need: "BCC",
      topic: "Bathing a resident with dementia",
      cjmm: "generate",
      process: "caring",
      difficulty: 3,
      stem: "An 86-year-old resident with advanced dementia hits and screams during tub baths. The nurse revises the bathing plan. Which approaches should the nurse include? Select all that apply.",
      rationale:
        "Bathing distress in dementia often comes from cold, exposure and not understanding what is happening. A towel bath in bed avoids the tub. Keeping the body covered and warming the room reduce cold and exposure. Short, simple cues help the resident follow along. Holding the arms and rushing in silence raise fear. A fixed early bath time ignores the resident's own routine.",
      sources: [SLOANE_BATH, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Give a towel bath in bed with warm cloths", why: "A towel bath avoids the tub and was linked with less agitation." },
      { text: "Keep the fixed early morning tub bath time", why: "A fixed time set by staffing ignores the resident's routine and mood." },
      { text: "Keep the body covered except the part being washed", why: "Covering the body reduces cold and the distress of exposure." },
      { text: "Have two aides hold the arms during the bath", why: "Restraining the arms raises fear and can escalate aggression." },
      { text: "Warm the bathroom before starting", why: "Feeling cold is a common trigger of bathing distress." },
      { text: "Explain each step in short, simple phrases", why: "Simple cues help the resident understand and cooperate." },
      { text: "Finish the bath quickly and without talking", why: "Silent, rushed care feels threatening to a person with dementia." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s28-26", {
      need: "PSY",
      topic: "Tracking response to treatment for mania",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 34-year-old client was admitted with acute mania 4 days ago. The nurse reviews the daily flow sheet. For each finding, specify whether it has improved, not changed or worsened since admission.",
      tabs: [
        {
          title: "Daily Flow Sheet",
          table: {
            head: ["Measure", "Day 1", "Day 2", "Day 3", "Day 4"],
            rows: [
              ["Sleep (hours)", "2", "3", "5", "6"],
              ["Food eaten (%)", "20", "40", "60", "75"],
              ["Speech", "Rapid, hard to interrupt", "Rapid", "Rapid at times", "Normal pace"],
              ["Enters other clients' rooms", "Yes", "Yes", "Yes", "Yes"],
              ["Episodes of shouting at staff", "1", "2", "4", "5"],
            ],
          },
        },
      ],
      rationale:
        "Sleep rose from 2 to 6 hours and food eaten rose from 20 to 75 percent. Speech slowed to a normal pace. These show the mania easing. The client still enters other clients' rooms each day, so that boundary problem has not changed. Shouting at staff rose from 1 to 5 episodes a day. Rising irritability needs attention even as other signs improve.",
      sources: [HALTER],
    }),
    kind: "matrix",
    mode: "single",
    columns: ["Improved", "No change", "Worsened"],
    rows: [
      { text: "Hours of sleep", correct: [0], why: "Sleep rose from 2 to 6 hours a night." },
      { text: "Food intake", correct: [0], why: "Intake rose from 20 to 75 percent of meals." },
      { text: "Rate of speech", correct: [0], why: "Speech moved from rapid to a normal pace." },
      { text: "Entering other clients' rooms", correct: [1], why: "The intrusive behavior occurred on all 4 days." },
      { text: "Shouting at staff", correct: [2], why: "Episodes rose from 1 to 5 a day." },
    ],
  },
  {
    ...meta("rn-s28-27", {
      need: "BCC",
      topic: "Cold therapy for a new sprain",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 24-year-old client sprained an ankle playing soccer 2 hours ago. The ankle is swollen and painful. Which instruction should the nurse give about applying cold?",
      rationale:
        "Cold narrows blood vessels and limits swelling and pain early after an injury. A cloth barrier protects the skin. Limiting each session to about 20 minutes prevents cold injury and rebound vessel widening. Ice straight on the skin for long periods can injure tissue. Heat in the first days increases swelling. Delaying cold loses its early benefit.",
      refs: ["Cold is applied for about 20 minutes at a time with a cloth barrier."],
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Apply ice wrapped in a towel for 20 minutes at a time", why: "A barrier and a time limit give the benefit of cold without skin injury." },
      { text: "Hold ice straight against the skin for an hour each time", why: "Direct, prolonged ice can cause cold injury to the skin." },
      { text: "Use a heating pad on the ankle for the first 2 days", why: "Heat widens blood vessels and increases swelling after a new injury." },
      { text: "Wait until tomorrow to start using ice on the ankle", why: "Cold works best early, while swelling is forming." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s28-28", {
      need: "PSY",
      topic: "Signs of inhalant use",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A mother tells the clinic nurse that her 13-year-old son has become irritable and his grades have dropped this term. Which additional finding reported by the mother most suggests inhalant use?",
      rationale:
        "Paint stains on the face and hands are a specific sign of inhaling spray paint or solvents. Irritability and falling grades can have many causes. Sleeping late, long gaming sessions and a change in friends are common in adolescents. None of these points to a particular substance.",
      sources: [NIDA_INHALANTS, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "He sleeps until noon on weekends", why: "Late weekend sleep is common in adolescents and is not specific to inhalants." },
      { text: "He plays video games for several hours every night", why: "Long gaming sessions do not point to any particular substance." },
      { text: "He has silver paint stains around his mouth", why: "Paint on the face is a specific sign of inhaling spray paint." },
      { text: "He has stopped seeing his old friends", why: "A change in friends is nonspecific and has many possible causes." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s28-29", {
      need: "BCC",
      topic: "Teaching colostomy pouch care",
      cjmm: "action",
      process: "teaching",
      difficulty: 3,
      stem: "A 61-year-old client has a new descending colostomy. The stoma is moist and red and measures 30 mm across. The nurse teaches the client to change the pouching system. Which instructions should the nurse include? Select two.",
      rationale:
        "A barrier opening that fits closely around the stoma protects the skin from stool. Emptying the pouch when it is one-third to one-half full prevents leaks and the weight pulling the seal loose. A wide opening exposes skin to stool. A full pouch strains the seal. Alcohol dries and irritates the skin. Lotion stops the barrier from sticking.",
      sources: [WOCN_OSTOMY, HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Cut the barrier opening to fit closely around the stoma", why: "A close fit keeps stool off the skin around the stoma." },
      { text: "Cut the barrier opening 10 mm wider than the stoma", why: "A wide gap leaves skin exposed to stool and leads to breakdown." },
      { text: "Empty the pouch when it is one-third to one-half full", why: "Emptying early prevents leaks and keeps weight off the seal." },
      { text: "Wait to empty the pouch until it is full", why: "A full, heavy pouch pulls on the seal and can leak." },
      { text: "Clean the skin around the stoma with alcohol wipes", why: "Alcohol dries and irritates the skin under the barrier." },
      { text: "Apply lotion to the skin before placing the barrier", why: "Lotion leaves a film that stops the barrier from sticking." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s28-30", {
      need: "PSY",
      topic: "Symptoms weeks after a fatal crash",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 29-year-old client was in a highway crash 6 weeks ago in which another driver died. The client has nightmares about the crash most nights and startles at loud sounds. The client now takes a bus rather than drive. The client's mood was stable before the crash. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The client was exposed to a fatal crash. Nightmares, a strong startle and avoidance of driving have lasted 6 weeks. Symptoms after a trauma that last longer than a month fit posttraumatic stress disorder. Avoiding driving is a core avoidance symptom. Acute stress disorder is limited to the first month. The stem does not describe low mood, broad worry or alcohol use.",
      sources: [DSM, HALTER],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The findings are most consistent with {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "acute stress disorder", why: "Acute stress disorder is limited to the first month after the trauma." },
          { text: "generalized anxiety disorder", why: "This involves broad worry about many topics, not symptoms tied to one event." },
          { text: "posttraumatic stress disorder", why: "Trauma-linked symptoms lasting longer than a month fit this disorder." },
          { text: "major depressive disorder", why: "The stem reports no low mood or loss of interest." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "a stable mood before the crash", why: "A stable prior mood is history and is not a symptom." },
          { text: "symptoms lasting 6 weeks", why: "Duration beyond a month separates this disorder from acute stress disorder." },
          { text: "worry about many daily matters", why: "The stem does not describe broad worry." },
          { text: "poor sleep from back pain", why: "The stem does not report pain. Sleep loss here comes from nightmares." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a recent loss of appetite", why: "The stem does not report a change in appetite." },
          { text: "daily alcohol use to sleep", why: "The stem does not report alcohol use." },
          { text: "avoiding driving since the crash", why: "Avoiding reminders of the trauma is a core symptom." },
          { text: "worry about paying bills", why: "The stem does not describe financial worry." },
        ],
        correct: 2,
      },
    ],
  },
];
