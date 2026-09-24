import type { Item } from "@/engine/types";
import { CHILD_ABUSE, CLAS, DSM, FICA, HALTER, HOCKENBERRY, POTTER, TJC_SUICIDE, TOWNSEND, USPSTF_IPV, WORDEN, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s11-11", {
      topic: "Expected grief after a spouse dies",
      cjmm: "analyze",
      process: "caring",
      difficulty: 3,
      stem: "A 68-year-old client's wife died 5 weeks ago. The client tells the clinic nurse, \"I still set out two coffee cups some mornings. I cry when I hear her favorite song.\" The client sleeps 7 hours, eats regular meals and plays cards with friends each week. How should the nurse interpret these findings?",
      rationale:
        "Five weeks after a death, crying at reminders and old habits such as setting out two cups are part of normal grief. The client keeps sleep, meals and time with friends, so daily function is intact. Prolonged grief disorder cannot be diagnosed this early. The client knows his wife has died, so this is not denial.",
      refs: ["In adults, prolonged grief disorder requires at least 12 months since the death."],
      sources: [WORDEN, DSM],
    }),
    kind: "mc",
    options: [
      { text: "An expected grief response", why: "Waves of sadness and old habits with intact function fit normal grief at 5 weeks." },
      { text: "Prolonged grief disorder", why: "This diagnosis requires at least 12 months since the death in adults." },
      { text: "A major depressive episode", why: "Sleep, appetite and social contact are intact, which does not fit major depression." },
      { text: "Denial of the loss", why: "The client speaks of the death openly. Setting out a cup is a habit, not denial." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-12", {
      topic: "Therapeutic responses to bad news",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 58-year-old client learned an hour ago that a lung mass is cancer. The client cries quietly and says, \"I don't know how to tell my kids.\" Which responses by the nurse are therapeutic? Select all that apply.",
      rationale:
        "Therapeutic responses name the feeling, invite the client to say more and offer the nurse's presence. Offering to plan the conversation together keeps the client in charge of the decision. False reassurance, personal advice and why questions block the client from sharing feelings.",
      sources: [HALTER, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "\"Don't worry. Treatments are so good now.\"", why: "False reassurance dismisses the fear and closes the conversation." },
      { text: "\"This news is a lot to take in.\"", why: "Naming the feeling shows empathy and invites the client to go on." },
      { text: "\"If I were you, I would wait to tell them.\"", why: "Giving personal advice takes the decision away from the client." },
      { text: "\"What worries you most about telling them?\"", why: "An open question helps the client explore the concern." },
      { text: "\"Why are you so upset about telling them?\"", why: "A why question can sound judging and puts the client on the defensive." },
      { text: "\"I can sit with you for a while.\"", why: "Offering self shows care and support without pressure to talk." },
      { text: "\"Would it help to plan that talk together?\"", why: "Offering help with planning supports the client's own choice." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s11-13", {
      topic: "Interpreter for informed consent",
      cjmm: "action",
      process: "culture",
      difficulty: 1,
      stem: "A 62-year-old client who speaks Vietnamese and limited English needs to give consent for a colonoscopy. The client's 14-year-old grandson speaks fluent English and offers to translate. What should the nurse do?",
      rationale:
        "A client with limited English has a right to a qualified medical interpreter at no cost. Family members, and minors in particular, may not know medical terms and may change or leave out information. Gestures and pictures cannot carry the risks and choices of a procedure. Untrained staff are not qualified to interpret.",
      sources: [CLAS],
    }),
    kind: "mc",
    options: [
      { text: "Let the grandson interpret the consent form", why: "A minor family member is not a qualified interpreter and may filter information." },
      { text: "Use gestures and a picture diagram", why: "Pictures cannot explain risks and options well enough for informed consent." },
      { text: "Ask a bilingual housekeeper to help", why: "Untrained staff are not qualified medical interpreters." },
      { text: "Arrange a qualified medical interpreter", why: "A trained interpreter conveys the consent discussion accurately and privately." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s11-14", {
      topic: "Spiritual distress in serious illness",
      cjmm: "action",
      process: "culture",
      difficulty: 2,
      stem: "A 70-year-old client with advanced heart failure tells the nurse, \"My faith has always carried me, but lately God feels silent.\" Which response should the nurse make first?",
      rationale:
        "The client describes a change in a source of strength, which may be spiritual distress. The nurse first explores what faith means to the client and how it is changing. This is the start of a spiritual history and guides any referral to a chaplain. Reassurance, advice about practices and a change of subject close off the concern.",
      sources: [FICA, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Many people feel that way. It will pass.\"", why: "Quick reassurance dismisses the concern without learning what it means to the client." },
      { text: "\"Tell me more about what your faith means to you.\"", why: "An open question begins a spiritual assessment in the client's own words." },
      { text: "\"Have you tried reading scripture at night?\"", why: "Advice assumes a practice and skips assessment of the client's needs." },
      { text: "\"Your care team will focus on your comfort.\"", why: "This changes the subject away from the spiritual concern." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s11-15", {
      topic: "Identifying panic-level anxiety",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 24-year-old student runs into the campus health center. Heart rate is 128/minute and respirations are 30/minute. The student is trembling, cries \"I'm going to die\" and cannot follow a simple request to sit down. The episode began 10 minutes ago. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The client cannot follow a one-step request and fears dying. Loss of the ability to process simple directions marks panic-level anxiety. A fear of death with racing heart and breathing is typical of a panic attack. Mild and moderate anxiety leave the person able to follow directions. Nothing suggests mania, and the episode began suddenly 10 minutes ago.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The client is experiencing {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "mild anxiety", why: "Mild anxiety sharpens attention. The person can still follow directions." },
          { text: "moderate anxiety", why: "Moderate anxiety narrows focus, but the person can follow directions with help." },
          { text: "panic-level anxiety", why: "Inability to follow simple requests and a fear of dying mark panic." },
          { text: "a manic episode", why: "Mania develops over days with elevated mood. This began 10 minutes ago." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "heightened alertness", why: "Heightened alertness goes with mild anxiety and is not described here." },
          { text: "failure to follow a simple request", why: "Losing the ability to process a one-step request marks panic." },
          { text: "narrowed but intact focus", why: "A narrowed focus that still works fits moderate anxiety, not this client." },
          { text: "good problem solving", why: "Problem solving is lost at panic level and is not described here." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "mild muscle tension", why: "Mild tension fits lower levels of anxiety, not this presentation." },
          { text: "a stated fear of dying", why: "A fear of death is typical during a panic attack." },
          { text: "slight restlessness", why: "Slight restlessness fits mild anxiety, not the trembling and terror described." },
          { text: "a calm tone of voice", why: "The client is crying out. A calm tone is not described." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s11-16", {
      topic: "Nursing care during severe anxiety",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "A client waiting for a biopsy result breathes rapidly and wrings both hands. The client says, \"Something is wrong. I can't think straight.\" The client can answer only short questions. What should the nurse do?",
      rationale:
        "Rapid breathing, poor concentration and the ability to handle only short questions point to severe anxiety. The nurse stays with the client to provide safety and uses short, simple sentences the client can process. Detailed teaching cannot be absorbed at this level. Leaving the client alone can raise fear. Asking for causes demands insight the client cannot use yet.",
      sources: [HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Teach a detailed relaxation program", why: "Severe anxiety blocks learning of detailed new content." },
      { text: "Leave the client alone to rest quietly", why: "Being left alone during severe anxiety can raise fear." },
      { text: "Stay and use short, simple sentences", why: "Presence and simple words match the client's reduced ability to process." },
      { text: "Ask the client what caused this feeling", why: "Exploring causes needs insight the client cannot reach at this level." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s11-17", {
      topic: "Screening for intimate partner violence",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 26-year-old client comes to the prenatal clinic at 14 weeks of gestation. Her partner stays close and answers questions for her. The nurse plans to screen for intimate partner violence. Which actions are appropriate? Select all that apply.",
      rationale:
        "Screening is done with the client alone, because a partner's presence can make disclosure unsafe. The nurse explains the limits of confidentiality before asking. Direct questions in a calm tone make disclosure easier. Information on support services is offered whatever the answer. Waiting for the client to raise the topic misses abuse. Confronting the partner can raise the danger to the client.",
      sources: [USPSTF_IPV, HALTER],
    }),
    kind: "sata",
    options: [
      { text: "Ask the questions with the partner present", why: "An abusive partner in the room makes honest answers unsafe." },
      { text: "Wait for the client to raise the topic", why: "Many clients do not disclose unless asked directly." },
      { text: "Screen the client alone in a private room", why: "Privacy makes it safer for the client to disclose." },
      { text: "Confront the partner about the behavior", why: "Confrontation can provoke the partner and raise the client's risk." },
      { text: "Ask direct questions in a calm tone", why: "Direct, neutral questions make disclosure easier." },
      { text: "Explain the limits of confidentiality", why: "The client should know what the nurse must report before answering." },
      { text: "Give information on support services", why: "Referral to support services is part of screening whatever the answer." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s11-18", {
      topic: "Duty to report suspected child abuse",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 2-year-old is brought to the emergency department with a spiral fracture of the right femur. The parent says the child rolled off a couch onto carpet. The nurse also notes several round burns, each 8 mm wide, on the soles of both feet. Which action should the nurse take?",
      rationale:
        "A spiral fracture from a short fall and round burns on the soles do not fit the history given. These findings suggest inflicted injury. Nurses are mandated reporters and report a reasonable suspicion. Proof is not required. Questioning the parent in an accusing way can put the child at more risk. Discharge would return the child to possible harm.",
      canada:
        "In Canada, provincial and territorial child protection laws require a report of suspected abuse to a child protection agency or the police. Most apply this duty to every person, not only professionals.",
      sources: [CHILD_ABUSE, HOCKENBERRY,
        { body: "Public Health Agency of Canada", work: "Provincial and territorial child protection legislation and policy", year: 2018, url: "https://www.canada.ca/en/public-health/services/publications/health-risks-safety/provincial-territorial-child-protection-legislation-policy-2018.html" },
      ],
    }),
    kind: "mc",
    options: [
      { text: "Report the suspicion to child protective services", why: "A mandated reporter reports reasonable suspicion without waiting for proof." },
      { text: "Ask the parent whether they harmed the child", why: "An accusing question can alarm the parent and endanger the child." },
      { text: "Wait for proof of abuse before reporting", why: "The law requires a report on suspicion. Investigation is the agency's role." },
      { text: "Arrange discharge with a splint and clinic follow-up", why: "Discharge could return the child to the source of the injuries." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-19", {
      topic: "Rising energy in depression",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      trend: true,
      stem: "A 44-year-old client with major depression started an antidepressant 10 days before admission. The nurse reviews the flow sheet for the first 4 days on the unit. Based on the trend, which conclusion is most accurate?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Measure", "Day 1", "Day 2", "Day 3", "Day 4"],
            rows: [
              ["Sleep (hours)", "3", "4", "6", "7"],
              ["Meal intake (%)", "25", "40", "70", "90"],
              ["Energy, self-rated 0 to 10", "2", "3", "6", "7"],
              ["Behavior", "Stays in bed", "Stays in room", "Attends 1 group", "Calm, gives watch to roommate"],
            ],
          },
        },
      ],
      rationale:
        "Sleep, intake and energy rise over 4 days as the antidepressant takes effect. Energy often returns before hopeless thinking lifts. On day 4 the client is suddenly calm and gives away a watch. Giving away belongings is a warning sign. Together these point to rising suicide risk. The gains in sleep and intake show the medication is working, and 7 hours of sleep does not fit mania.",
      sources: [HALTER, TJC_SUICIDE],
    }),
    kind: "mc",
    options: [
      { text: "The depression is resolving for discharge", why: "The day 4 behavior is a warning sign that makes discharge planning unsafe now." },
      { text: "The antidepressant is not yet working", why: "Better sleep, intake and energy show the medication is taking effect." },
      { text: "The client is moving into a manic phase", why: "Sleep of 7 hours and a calm manner do not fit mania." },
      { text: "Suicide risk is rising as energy returns", why: "New energy with giving away a possession signals a higher risk of acting on suicidal thoughts." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s11-20", {
      topic: "Activity choice during mania",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 31-year-old client in an acute manic episode has slept 3 hours in 2 nights. The client talks nonstop and interrupts others in group. Which activity should the nurse plan for this afternoon?",
      rationale:
        "A client in acute mania is easily overstimulated and has trouble with limits and turn taking. A walk with one staff member uses energy in a low-stimulation setting with support. Competitive team games raise excitement and the risk of conflict. Group games and discussions demand turn taking the client cannot manage yet.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "A team volleyball game in the gym", why: "Competition and noise overstimulate the client and can lead to conflict." },
      { text: "A walk on the grounds with a staff member", why: "Physical activity with one staff member burns energy with little stimulation." },
      { text: "A board game in the dayroom with three other clients", why: "Turn taking with others is hard during acute mania and can cause friction." },
      { text: "A group discussion in the dayroom", why: "Group talk invites interruptions and adds stimulation." },
    ],
    correct: 1,
  },
];
