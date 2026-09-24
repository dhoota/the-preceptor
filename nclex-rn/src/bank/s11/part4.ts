import type { Item } from "@/engine/types";
import { APA_ED, COWS, HALTER, HOCKENBERRY, PHQ9, POTTER, TIP63, TOWNSEND, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s11-31", {
      topic: "Opioid withdrawal on a medical unit",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 33-year-old client is admitted with cellulitis of the left forearm. The client last injected heroin 20 hours ago. The client yawns often, has a runny nose and goosebumps, and reports stomach cramps and aching muscles. Pupils are 6 mm and heart rate is 108/minute. Temperature is 37.4°C (99.3°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Yawning, a runny nose, goosebumps, cramps, aches, dilated pupils and a heart rate of 108/minute about 20 hours after heroin fit opioid withdrawal. The nurse rates the symptoms with the Clinical Opiate Withdrawal Scale and reports to the provider so buprenorphine can be considered. Scores are repeated to track the course. Withdrawal can cause vomiting, diarrhea and sweating, so fluid intake and losses are tracked. Naloxone would worsen withdrawal.",
      sources: [COWS, TIP63],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Opioid overdose", why: "Overdose causes pinpoint pupils and slow breathing, not dilated pupils and yawning." },
      { text: "Opioid withdrawal", why: "These signs 20 hours after heroin use fit opioid withdrawal." },
      { text: "Stimulant intoxication", why: "Stimulants do not cause yawning, a runny nose and cramps." },
      { text: "Sepsis from the cellulitis", why: "The temperature is 37.4°C and the findings fit withdrawal better than sepsis." },
    ],
    actions: [
      { text: "Score symptoms with the COWS tool", why: "The scale measures withdrawal severity and guides treatment decisions." },
      { text: "Give IV naloxone to reverse the effects", why: "Naloxone blocks opioid receptors and would make withdrawal worse." },
      { text: "Ask the provider about buprenorphine", why: "Buprenorphine treats withdrawal and opioid use disorder once withdrawal is present." },
      { text: "Confine the client to the room alone", why: "Isolation adds distress and does not treat the withdrawal." },
      { text: "Tell the client to taper use at home", why: "Advising continued illicit use is unsafe and does not address the disorder." },
    ],
    parameters: [
      { text: "Serum ammonia each morning", why: "Ammonia tracks liver encephalopathy, which the stem does not suggest." },
      { text: "Withdrawal score trend", why: "Repeated scores show whether withdrawal is easing with treatment." },
      { text: "Blood alcohol concentration", why: "The client reports heroin use. Alcohol levels do not guide this care." },
      { text: "Fluid intake and losses", why: "Vomiting, diarrhea and sweating in withdrawal can cause dehydration." },
      { text: "Capillary refill in the toes", why: "The infection is in the forearm. Toe refill does not track withdrawal." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s11-32", {
      topic: "Supervision after meals in bulimia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 20-year-old client with bulimia nervosa is admitted to an eating disorder unit. The client has swollen parotid glands and calluses on the backs of two fingers. What should the nurse do after meals?",
      rationale:
        "Swollen parotid glands and calluses on the knuckles point to repeated self-induced vomiting. Staff observe the client for a set time after meals to prevent purging. Time alone or a bathroom visit right after eating gives a chance to vomit. Weighing after each meal adds focus on weight and does not prevent purging.",
      sources: [APA_ED, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Let the client rest alone in the room", why: "Time alone after meals allows the client to purge unseen." },
      { text: "Offer a bathroom break right after the meal ends", why: "Bathroom access right after eating gives an opportunity to vomit." },
      { text: "Observe the client closely after each meal", why: "Supervision after meals prevents purging and supports the meal plan." },
      { text: "Weigh the client right after each meal", why: "Frequent weighing increases weight focus and does not stop purging." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s11-33", {
      topic: "Evaluating stress management teaching",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 38-year-old client with high work stress attends a stress management class. Which statements show the client has learned healthy coping? Select all that apply.",
      rationale:
        "Healthy coping lowers the stress response without causing new harm. Regular exercise, slow breathing, reaching out to a friend and a steady sleep routine all do this. Nightly drinking, working late without limits and skipping meals relieve stress briefly or not at all and add health risks.",
      sources: [HALTER, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "\"I'll have a few drinks to unwind each night.\"", why: "Using alcohol to cope risks dependence and worsens sleep." },
      { text: "\"I'll take a 20-minute walk after work.\"", why: "Regular exercise lowers stress hormones and tension." },
      { text: "\"I'll stay late until every task is done.\"", why: "Working without limits adds to stress and fatigue." },
      { text: "\"I'll practice slow breathing when tense.\"", why: "Slow breathing calms the body's stress response." },
      { text: "\"I'll skip lunch to get more work done.\"", why: "Skipping meals lowers energy and adds physical stress." },
      { text: "\"I'll call a friend when I feel overwhelmed.\"", why: "Social support is a strong buffer against stress." },
      { text: "\"I'll keep a regular bedtime on work nights.\"", why: "Steady sleep improves the ability to manage stress." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s11-34", {
      topic: "Stage of grief in terminal illness",
      cjmm: "analyze",
      process: "caring",
      difficulty: 1,
      stem: "A 64-year-old client with terminal pancreatic cancer tells the nurse, \"If I can just live until my grandson's wedding in June, I will be ready to go.\" Which stage of grief is the client expressing?",
      rationale:
        "The client offers a condition in exchange for more time. Trying to strike a deal to delay a loss is bargaining. The client does not deny the illness or express anger. Acceptance would not hinge on reaching a set event first.",
      sources: [POTTER, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "Bargaining", why: "The client links readiness to a deal for more time until the wedding." },
      { text: "Denial", why: "The client speaks of dying, so the illness is not being denied." },
      { text: "Anger", why: "The statement shows no blame, resentment or hostility." },
      { text: "Acceptance", why: "Acceptance does not depend on first reaching a chosen event." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-35", {
      topic: "Sibling response to a child's serious illness",
      cjmm: "analyze",
      process: "caring",
      difficulty: 3,
      stem: "The parents of a 9-year-old with newly diagnosed leukemia say their 6-year-old daughter has started wetting the bed and having tantrums. She was toilet trained at age 3. How should the nurse interpret the daughter's behavior?",
      rationale:
        "A serious illness in one child shifts the family's attention and routines. Siblings often react with regression, such as bedwetting, and with acting out. Both began after the diagnosis, which points to a stress response. Bedwetting and tantrums are not expected at age 6 after years of dryness. A new bladder disorder would not explain the tantrums. A conduct disorder involves a lasting pattern of violating rules.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "A new bladder control disorder", why: "A bladder disorder would not explain the tantrums that began at the same time." },
      { text: "A stress response to the family change", why: "Regression and acting out are common sibling reactions to a family illness." },
      { text: "Early signs of a conduct disorder", why: "Conduct disorder is a lasting pattern of rule breaking, not a sudden change after a stressor." },
      { text: "Expected behavior for her age", why: "Bedwetting after years of dryness is not expected at age 6." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s11-36", {
      topic: "Community supports after discharge",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 45-year-old client with schizophrenia lives alone and is going home after a 3-week admission. The client missed 2 earlier outpatient visits because of a lack of transport. Which items should the nurse include in the discharge plan? Select all that apply.",
      rationale:
        "The client lives alone and has missed visits for lack of transport. A case manager coordinates services. A bus pass or ride service removes the known barrier. Peer support adds connection. A visit booked before discharge links the client to care early. Waiting for voices to return delays help. Stopping medicine when well raises relapse risk. Family contact is a support, not a risk.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "sata",
    options: [
      { text: "Advice to limit contact with family", why: "Family contact is a source of support for most clients." },
      { text: "Referral to a case manager", why: "A case manager links the client to housing, medical and social services." },
      { text: "Instruction to call only if voices return", why: "Hallucinations are a late sign. Earlier contact prevents relapse." },
      { text: "A bus pass or ride service for visits", why: "Transport addresses the reason the client missed earlier visits." },
      { text: "A plan to stop medicine once symptoms ease", why: "Stopping medicine is a leading cause of relapse." },
      { text: "Contact details for a peer support group", why: "Peer support reduces isolation for a client who lives alone." },
      { text: "An outpatient visit booked before discharge", why: "A set appointment makes the link to outpatient care more likely." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s11-37", {
      topic: "Asking directly about suicide",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 39-year-old client admitted with depression lies in bed facing the wall. The client says, \"Nobody can help me. Just leave me alone.\" Which response by the nurse is best?",
      rationale:
        "The statement expresses hopelessness, a strong risk factor for suicide. The nurse asks directly about suicidal thoughts. Asking does not plant the idea and shows the client the nurse takes the distress seriously. Leaving the client alone misses the risk. False reassurance and why questions do not assess safety.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "\"I'll come back later when you feel like talking.\"", why: "Leaving a hopeless client alone misses a chance to assess suicide risk." },
      { text: "\"We can help. You will feel better soon.\"", why: "False reassurance dismisses the hopelessness and ends the discussion." },
      { text: "\"Why do you think nobody can help you?\"", why: "A why question asks for reasons the client cannot give and skips safety." },
      { text: "\"Are you having thoughts of killing yourself?\"", why: "A direct question about suicide assesses risk after a hopeless statement." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s11-38", {
      topic: "Cognitive distortions in depression",
      cjmm: "analyze",
      process: "communication",
      difficulty: 5,
      stem: "A 20-year-old nursing student with depression tells the clinic nurse, \"I failed one quiz, so I will never become a nurse. My instructor must think I am stupid.\" Complete the following sentences by choosing from the lists of options.",
      rationale:
        "Drawing a sweeping conclusion from one failed quiz is overgeneralization. Assuming what the instructor thinks without evidence is mind reading. Cognitive therapy teaches the client to test such thoughts. Asking what evidence supports the thought helps the student weigh it. Reassurance, agreeing with the student or advising a change of program leaves the distortion in place.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The first statement shows {0}. The second statement shows {1}. A helpful nurse response is {2}.",
    blanks: [
      {
        options: [
          { text: "personalization", why: "Personalization blames oneself for events outside one's control, which is not the pattern here." },
          { text: "overgeneralization", why: "One failed quiz is turned into a rule about the whole future." },
          { text: "minimization", why: "Minimization shrinks the importance of events. The student enlarges one event." },
          { text: "should statements", why: "Should statements are rigid rules about how things ought to be. None is stated." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "all-or-nothing thinking", why: "This views things in two extremes. The second statement guesses another's thoughts." },
          { text: "minimization", why: "Minimization shrinks the importance of events, which does not fit this statement." },
          { text: "mind reading", why: "The student assumes the instructor's opinion without evidence." },
          { text: "should statements", why: "No rigid rule about how things ought to be is stated." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "telling the student not to worry", why: "Reassurance dismisses the thought without helping the student test it." },
          { text: "agreeing the quiz was unfair", why: "Agreeing adds blame and does not address the distortion." },
          { text: "asking what evidence supports the thought", why: "Examining the evidence helps the student test and reframe the thought." },
          { text: "advising a change of program", why: "This supports the distorted conclusion that the student will fail." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s11-39", {
      topic: "Progress toward accepting a body change",
      cjmm: "evaluate",
      process: "caring",
      difficulty: 3,
      stem: "A 47-year-old client had a left mastectomy 3 days ago. On day 1 she refused to look at the incision. The nurse has encouraged her to talk about the change and to view the site when ready. Which finding best shows progress toward accepting the body change?",
      rationale:
        "Looking at the incision is a first step in integrating a changed body into self-image. It shows the client is ready to face the loss. Asking to keep the site covered, saying she feels fine and changing the subject, and delaying support suggest continued avoidance.",
      sources: [HALTER, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "She looks at the incision during the dressing change", why: "Viewing the site shows she is beginning to face and accept the change." },
      { text: "She asks the nurse to keep the site covered", why: "Keeping the site hidden suggests continued avoidance." },
      { text: "She says she feels fine and changes the subject", why: "Changing the subject suggests she is not yet ready to discuss the loss." },
      { text: "She asks to delay the visit from the support volunteer", why: "Putting off support suggests avoidance rather than acceptance." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-40", {
      topic: "Tracking depression scores over time",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 36-year-old client with major depression is treated with an antidepressant and weekly therapy. The nurse reviews the clinic record. Based on the trend, how should the nurse evaluate the treatment?",
      tabs: [
        {
          title: "Clinic Record",
          table: {
            head: ["Measure", "Week 0", "Week 4", "Week 8", "Week 12"],
            rows: [
              ["PHQ-9 total score", "21", "16", "11", "7"],
              ["PHQ-9 item 9, thoughts of self-harm", "2", "1", "0", "0"],
              ["Work days missed per week", "3", "2", "1", "0"],
            ],
          },
        },
      ],
      refs: ["PHQ-9 totals of 5, 10, 15 and 20 mark the lower bounds of mild, moderate, moderately severe and severe depression."],
      rationale:
        "The PHQ-9 total falls steadily from 21 to 7 over 12 weeks. A score of 21 is in the severe range. A score of 7 is in the mild range. Thoughts of self-harm fall to 0 by week 8 and missed work days fall to 0. Treatment is working. A score of 7 still shows mild symptoms, so the client is not yet symptom free.",
      sources: [PHQ9],
    }),
    kind: "mc",
    options: [
      { text: "Symptoms are unchanged since week 0", why: "The score fell from 21 to 7, which is a clear change." },
      { text: "Depression has worsened to severe", why: "The score is falling. A score of 21 was severe at the start." },
      { text: "Severity has fallen from severe to mild", why: "Scores moved from 21 at week 0 to 7 at week 12." },
      { text: "The client is now free of symptoms", why: "A score of 7 is in the mild range, so symptoms remain." },
    ],
    correct: 2,
  },
];
