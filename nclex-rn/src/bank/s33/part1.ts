import type { Item } from "@/engine/types";
import { BINDING, DSM, HALTER, HINDUJA, HOCKENBERRY, POTENZA, UCSF_TRANS, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s33-01", {
      need: "PSY",
      topic: "Safer chest binding teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 17-year-old transgender client who was assigned female at birth wears a commercial chest binder every day. The client reports rib soreness and shortness of breath on stairs. After teaching about safer binding, which two statements by the client show understanding? Select two.",
      rationale:
        "The client has rib soreness and shortness of breath. In a large survey of people who bind, binding on more days each week was linked to more pain, breathing and skin problems. Planned days off give the chest wall a rest. Shortness of breath is a signal to remove the binder. Layering binders, buying a smaller size, elastic bandages and overnight wear all add compression. The nurse supports binding as part of gender affirmation and teaches safer use.",
      sources: [BINDING],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will take days off from binding each week.\"", why: "Binding on fewer days each week was linked to fewer harmful symptoms." },
      { text: "\"I will wear two binders on hard days.\"", why: "Layering binders adds compression and was a suspected cause of harm in binding research." },
      { text: "\"I will use an elastic bandage on wash days.\"", why: "Elastic bandages were linked to pain, skin and breathing symptoms in binding research." },
      { text: "\"I will remove the binder if I get short of breath.\"", why: "Shortness of breath signals that the chest is compressed too much." },
      { text: "\"I will sleep in my binder to save time.\"", why: "Overnight wear adds hours of compression and gives the ribs no rest." },
      { text: "\"I will buy a smaller size for a flatter chest.\"", why: "A binder that is too small adds compression and raises the risk of rib and breathing problems." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s33-02", {
      need: "PSY",
      topic: "Asking about anatomy in a transgender woman",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 34-year-old transgender woman comes to the emergency department with lower abdominal pain. To plan the workup, the triage nurse needs to know whether the client has had genital surgery. The client looks tense when the nurse starts the medical history. Which approach by the nurse is best?",
      rationale:
        "Anatomy varies with hormone use and surgical history, so the nurse does not assume it from gender identity or old records. Explaining that the question guides the workup for abdominal pain shows respect and lowers tension. The nurse then asks about organs and past surgery in neutral terms. Examination covers only what the complaint requires. Skipping or delaying the question leaves a gap in the triage assessment.",
      sources: [UCSF_TRANS],
    }),
    kind: "mc",
    options: [
      { text: "Explain the reason, then ask about past surgery", why: "A clear reason for the question builds trust and gives the history the workup needs." },
      { text: "Record the sex assigned at birth and skip the question", why: "Recorded sex at birth does not show current anatomy after hormones or surgery." },
      { text: "Ask the client to undress so the anatomy can be checked", why: "An exposing exam in place of a history question is invasive and is not needed for triage." },
      { text: "Leave the question for the primary health care provider", why: "Delaying the question leaves a gap in the triage history and suggests the topic is shameful." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-03", {
      need: "PSY",
      topic: "Spotting a child targeted online",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The parent of a 13-year-old says the child has seemed different for 3 weeks. The school counselor told the parent that classmates post mocking comments about the child online. Which findings should the nurse recognize as possible signs of cyberbullying? Select all that apply.",
      rationale:
        "Classmates are posting mocking comments, and the child has changed over 3 weeks. Distress after reading messages, closing a social media account, hiding the screen and pulling away from enjoyed activities are common signs that a child is being targeted online. A new interest in a team sport, normal growth and chatting about friends at dinner point toward ongoing social connection rather than harm.",
      sources: [HINDUJA, HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Gets upset after reading messages on the phone", why: "An emotional reaction to messages is a common sign of online harassment." },
      { text: "Asks to try out for the school soccer team", why: "Seeking a new team activity suggests social confidence, not withdrawal." },
      { text: "Closed a social media account without saying why", why: "Shutting down an account can be a way to escape online attacks." },
      { text: "Has grown taller since the last clinic visit", why: "Growth is expected at 13 years and is not linked to bullying." },
      { text: "Avoids school events the child used to enjoy", why: "Avoiding peers and events can follow online harassment by classmates." },
      { text: "Hides the screen when a parent walks by", why: "Hiding the device can mean the child is ashamed or afraid of what is on it." },
      { text: "Talks about friends at the dinner table", why: "Open talk about friends suggests the child still feels connected to peers." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s33-04", {
      need: "PSY",
      topic: "Online threat sent to a teen",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 14-year-old shows the school nurse messages a classmate sent the teen last night. One message says the classmate will \"hurt you after school.\" The teen has not replied. What should the nurse advise first?",
      rationale:
        "The message threatens physical harm today. A threat of violence is reported to law enforcement and the school, not handled only online. Saved screenshots keep the evidence that reports need. Replying can escalate the conflict. Deleting the messages loses the evidence. Taking away the phone punishes the teen who was targeted and can stop the teen from telling adults next time.",
      sources: [HINDUJA],
    }),
    kind: "mc",
    options: [
      { text: "Reply to the classmate and ask for the messages to stop", why: "Responding to the sender can escalate the conflict and does not address the threat." },
      { text: "Delete the messages so the teen stops rereading them", why: "Deleting the messages destroys the evidence needed for a report." },
      { text: "Save the messages and report the threat to police", why: "A threat of violence needs a report to law enforcement, with evidence kept." },
      { text: "Take the phone away from the teen for a month", why: "Removing the phone punishes the target and can stop future disclosure." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s33-05", {
      need: "PSY",
      topic: "Food restriction after a choking scare",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 10-year-old is brought to the clinic after losing 3 kg over 6 months. Since choking on a piece of chicken last year, the child eats only yogurt, applesauce and crackers. The child says, \"I want to eat more so I can play sports.\" The child voices no concern about body shape or weight. Which condition do these findings most suggest?",
      rationale:
        "The child restricts food after a choking event and has lost 3 kg. The child wants to eat more and has no concern about shape or weight. Restriction driven by fear of choking, with weight loss, fits avoidant/restrictive food intake disorder. Anorexia nervosa involves fear of weight gain or a disturbed body image. Bulimia nervosa involves binge eating with purging. Ordinary picky eating does not cause weight loss over 6 months.",
      sources: [DSM, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Anorexia nervosa, restricting type", why: "Anorexia nervosa needs fear of weight gain or a disturbed body image. The child has neither." },
      { text: "Avoidant/restrictive food intake disorder", why: "Restriction from fear of choking, with weight loss and no body image concern, fits this disorder." },
      { text: "Picky eating that is typical of middle childhood", why: "Ordinary picky eating does not cause a weight loss of 3 kg." },
      { text: "Bulimia nervosa", why: "The stem describes no binge eating and no purging." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-06", {
      need: "PSY",
      topic: "Plan for a child with avoidant restrictive eating",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 9-year-old with avoidant/restrictive food intake disorder accepts only a few foods and fears vomiting. The child's weight has fallen below the 5th percentile for age. Which measures should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "The child is underweight and anxious about food. New foods are offered in small steps beside foods the child already accepts. Praise for each new taste rewards brave tries. A calm mealtime lowers the fear that drives avoidance. Weight is tracked at each visit because the child is below the 5th percentile. Pressure, bribes and removing safe foods raise anxiety and can deepen weight loss.",
      sources: [DSM, HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Offer a new food in small amounts beside an accepted food", why: "Gradual exposure beside safe foods lowers fear and widens the diet." },
      { text: "Hold back dessert until the plate is finished", why: "Bribes and pressure raise mealtime anxiety and food avoidance." },
      { text: "Remove the accepted foods so the child must try others", why: "Taking away safe foods can cut intake further in an underweight child." },
      { text: "Praise the child for each new food tasted", why: "Praise for each try rewards the small steps that build tolerance." },
      { text: "Teach the parents to keep mealtimes calm", why: "A calm table lowers the anxiety that drives the child's avoidance." },
      { text: "Weigh the child at each visit", why: "The child is below the 5th percentile, so weight is tracked closely." },
      { text: "Keep the child at the table until each bite is eaten", why: "Forced eating raises fear of vomiting and worsens avoidance." },
    ],
    correct: [0, 3, 4, 5],
  },
  {
    ...meta("rn-s33-07", {
      need: "PSY",
      topic: "Interview cues of problem betting",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 46-year-old client sees the clinic nurse for trouble sleeping. The nurse records the client's account of daily life. Click to highlight the findings that suggest gambling disorder.",
      rationale:
        "Raising bet sizes to get the same excitement shows tolerance. Going back the next day to win back money is chasing losses. Hiding a credit card from the spouse is lying to conceal gambling. Restlessness and irritability when cutting back resemble withdrawal. These are criteria for gambling disorder. Watching sports with friends, a lunchtime walk, morning coffee and stable work are not signs of the disorder.",
      sources: [DSM],
    }),
    kind: "highlight",
    passage:
      "[[Watches football on television with friends on Sundays]]. [[Has raised bet sizes on a sports app to feel the same thrill]]. [[Returns the next day to win back money lost]]. [[Hid a second credit card from the spouse]]. [[Walks with a coworker at lunch]]. [[Feels restless and irritable when trying to cut back]]. [[Drinks one cup of coffee each morning]]. [[Has worked as an accountant for 12 years]].",
    spans: [
      { text: "Watches football on television with friends on Sundays", why: "Watching sports socially is not a sign of a gambling problem." },
      { text: "Has raised bet sizes on a sports app to feel the same thrill", why: "Needing larger bets for the same excitement shows tolerance." },
      { text: "Returns the next day to win back money lost", why: "Going back to recover losses is chasing, a core criterion." },
      { text: "Hid a second credit card from the spouse", why: "Hiding money or debt conceals how much the client gambles." },
      { text: "Walks with a coworker at lunch", why: "A lunchtime walk is a healthy habit and not a criterion." },
      { text: "Feels restless and irritable when trying to cut back", why: "Restlessness when cutting down is a criterion of gambling disorder." },
      { text: "Drinks one cup of coffee each morning", why: "One cup of coffee is not linked to gambling disorder." },
      { text: "Has worked as an accountant for 12 years", why: "Stable work does not point to the disorder." },
    ],
    correct: [1, 2, 3, 5],
  },
  {
    ...meta("rn-s33-08", {
      need: "PSY",
      topic: "Blocking access to betting",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 52-year-old client with gambling disorder has lost most of the family savings at a casino and on betting apps. The client has started cognitive behavioral therapy and asks what else can lower the chance of another large loss. Which plan should the nurse suggest?",
      rationale:
        "Self-exclusion bars the client from the casino and the betting apps that caused the losses. Removing access supports the work done in therapy. Keeping extra cash at home makes gambling easier. Gambling with friends still exposes the client to betting. Waiting until therapy ends leaves the client exposed during the riskiest early period of change.",
      sources: [POTENZA, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Keep a larger cash reserve at home for emergencies", why: "Ready cash at home makes impulsive betting easier." },
      { text: "Gamble only with friends who can watch the spending", why: "Any gambling keeps the client exposed to the behavior being treated." },
      { text: "Wait to change money habits until therapy has ended", why: "Delay leaves the client exposed during early treatment." },
      { text: "Enroll in self-exclusion at the casino and on apps", why: "Self-exclusion blocks access to the venues where the losses occurred." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s33-09", {
      need: "PSY",
      topic: "Fire risk in a cluttered home",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A home health nurse visits a 78-year-old client with hoarding disorder who lives alone. Stacks of newspapers block the back door. A space heater runs beside a pile of papers in the living room. Thick dust covers the shelves. The client refuses to discard anything and says, \"No one visits anymore.\" Which concern should the nurse address first?",
      rationale:
        "A space heater beside paper is an immediate fire danger, and the back door is blocked. Moving the heater away from the papers removes the most urgent threat to life. Refusal to discard, loneliness and dust are real problems. They are addressed over time once the client is safe.",
      sources: [HALTER, DSM],
    }),
    kind: "mc",
    options: [
      { text: "The space heater running beside the papers", why: "A heat source next to paper is an immediate fire risk." },
      { text: "The refusal to discard any newspapers", why: "Reducing clutter is a long-term goal built with the client over time." },
      { text: "The client's comment that no one visits", why: "Isolation matters but does not threaten life right now." },
      { text: "The thick dust covering the living room shelves", why: "Dust is a minor hazard compared with a fire risk." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-10", {
      need: "PSY",
      topic: "Family plan to clear a hoarded home",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 66-year-old client with hoarding disorder agrees to work on clearing the living room. The client's son tells the nurse he plans to rent a dumpster and empty the house this weekend while his parent is away. Which response by the nurse is best?",
      rationale:
        "The client has agreed to work on one room. Progress lasts when the client makes the decisions about each item, one area at a time. A forced cleanout causes great distress, damages trust and is often followed by new clutter. Choosing items for the client still takes away control. Waiting for another request ignores the agreement the client has already made.",
      sources: [HALTER, DSM],
    }),
    kind: "mc",
    options: [
      { text: "\"Clear the house while your parent is away to avoid conflict.\"", why: "A forced cleanout causes distress and damages trust, and clutter tends to return." },
      { text: "\"Remove only things your parent has not used in a year.\"", why: "The son still chooses for the client, which removes the client's control." },
      { text: "\"Let your parent decide what goes, one area at a time.\"", why: "Client-led sorting in small steps builds skills that last." },
      { text: "\"Wait until your parent asks you for more help.\"", why: "The client has already agreed to start, so waiting delays the work." },
    ],
    correct: 2,
  },
];
