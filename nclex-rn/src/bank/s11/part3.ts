import type { Item } from "@/engine/types";
import { ACOG_PMH, ALZ, HALTER, MI, PFA, SAFE, TIC, TOWNSEND, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s11-21", {
      topic: "Matching defense mechanisms",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reviews four client behaviors described in team notes. Match each behavior to the defense mechanism it shows.",
      rationale:
        "Yelling at a pet after being scolded moves anger to a safer target, which is displacement. Blaming the lab for a positive biopsy refuses to accept a painful fact, which is denial. Believing a coworker holds one's own resentment is projection. Calling a failed exam unfair gives an acceptable reason for a disappointment, which is rationalization. Sublimation and reaction formation do not match any behavior shown.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "After a supervisor scolds the client, the client goes home and yells at the dog",
      "The client insists the lab mixed up samples after a biopsy shows cancer",
      "The client, who resents a coworker, says the coworker hates the client",
      "After failing an exam, the client says the questions were unfair anyway",
    ],
    tokens: [
      { text: "Projection", why: "Projection places one's own unaccepted feelings onto another person, as with the coworker." },
      { text: "Displacement", why: "Displacement shifts feelings from the real source to a safer target, as with the dog." },
      { text: "Rationalization", why: "Rationalization offers an acceptable excuse for a failure, as with the exam." },
      { text: "Denial", why: "Denial refuses to accept a painful reality, as with the biopsy result." },
      { text: "Sublimation", why: "Sublimation channels an urge into a socially valued activity. No behavior shows this." },
      { text: "Reaction formation", why: "Reaction formation shows the opposite of a true feeling. No behavior shows this." },
    ],
    correct: [1, 3, 0, 2],
  },
  {
    ...meta("rn-s11-22", {
      topic: "Responding to confusion in dementia",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "An 84-year-old client with Alzheimer disease in a memory care unit asks every few minutes, \"Where is my mother? She will be worried.\" The client's mother died 30 years ago. Which response by the nurse is best?",
      rationale:
        "The client cannot retain new facts. Telling the client the mother died can bring fresh grief each time. Inviting the client to talk about the mother responds to the feeling behind the question. It then allows gentle redirection. Reality orientation and pointing out the repetition do not help a client with this degree of memory loss and can cause distress.",
      sources: [ALZ, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "\"Your mother died many years ago.\"", why: "The client may relive the loss as new grief each time the fact is repeated." },
      { text: "\"Let's check the calendar together for today's date.\"", why: "Reality orientation does not help this degree of memory loss and can frustrate the client." },
      { text: "\"You asked me that a few minutes ago.\"", why: "Pointing out the repetition embarrasses the client and does not ease the worry." },
      { text: "\"Tell me about your mother. What was she like?\"", why: "Responding to the feeling comforts the client and opens a path to redirect." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s11-23", {
      topic: "Stimulant intoxication findings",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 23-year-old client is brought to the emergency department after using methamphetamine at a party several hours ago. Which findings should the nurse expect? Select all that apply.",
      rationale:
        "Methamphetamine stimulates the sympathetic nervous system. It causes dilated pupils, a fast heart rate and a raised body temperature. Paranoid thinking is common with stimulant use. Slow breathing, drowsiness with slurred speech and pinpoint pupils point to opioid or sedative intoxication instead.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "sata",
    options: [
      { text: "Dilated pupils", why: "Sympathetic stimulation dilates the pupils." },
      { text: "Slow, shallow breathing", why: "Respiratory depression is typical of opioids, not stimulants." },
      { text: "Heart rate of 132/minute", why: "Stimulants raise the heart rate." },
      { text: "Drowsiness and slurred speech", why: "Sedation and slurred speech fit depressant drugs such as alcohol." },
      { text: "Temperature of 38.9°C (102.0°F)", why: "Stimulants raise body heat through muscle activity and blood vessel constriction." },
      { text: "Pinpoint pupils", why: "Pinpoint pupils are typical of opioid intoxication." },
      { text: "Paranoid thinking", why: "Stimulant use often causes paranoia." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s11-24", {
      topic: "Motivational interviewing reflection",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A 49-year-old client with high blood pressure drinks 5 or 6 beers most nights. The client says, \"I know I drink too much, but it is the only way I can relax after work.\" Which response by the nurse reflects motivational interviewing?",
      rationale:
        "The client voices both sides of ambivalence. A double-sided reflection states both the reason to drink and the concern about drinking. This lets the client hear their own reasons for change without pressure. Telling the client to stop triggers resistance. Advice given before the client is ready and why questions also tend to raise defensiveness.",
      sources: [MI],
    }),
    kind: "mc",
    options: [
      { text: "\"You need to stop before it damages your liver.\"", why: "Directing the client to change often provokes argument for the status quo." },
      { text: "\"Have you thought about joining a support group?\"", why: "Offering a solution before exploring the client's view skips the evoking process." },
      { text: "\"Beer helps you unwind, and you see it as too much.\"", why: "This double-sided reflection mirrors the client's ambivalence back without judgment." },
      { text: "\"Why do you keep drinking if it is too much?\"", why: "A why question can sound blaming and makes the client defend drinking." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s11-25", {
      topic: "Family teaching on relapse signs",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "The nurse teaches the parents of a 22-year-old client with schizophrenia about early signs of relapse. Which statements by the parents show understanding? Select two.",
      rationale:
        "Early warning signs of relapse include changes in sleep and social withdrawal. Calling the treatment team at these early signs allows care to be adjusted before psychosis returns in full. Waiting for voices means waiting for a late sign. Stress and other factors can trigger relapse even when medication is taken. One bad day is not a relapse. Doses are changed only by the prescriber.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"We should call if he stops sleeping at night.\"", why: "Sleep disturbance is a common early sign of relapse." },
      { text: "\"Relapse only happens if he stops his medicine.\"", why: "Stress, substance use and illness can also trigger relapse." },
      { text: "\"If he pulls away from friends, we will call the team.\"", why: "Social withdrawal is an early warning sign that warrants a call." },
      { text: "\"We will wait until he hears voices to call.\"", why: "Hallucinations are a late sign. Early action works better." },
      { text: "\"One bad day at work means he is relapsing.\"", why: "A single bad day is not a pattern of warning signs." },
      { text: "\"We can cut back his dose when he feels well.\"", why: "Only the prescriber changes the dose. Cutting back on their own raises relapse risk." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s11-26", {
      topic: "Planning care around compulsive rituals",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 29-year-old client with obsessive-compulsive disorder is admitted to a mental health unit. The client washes both hands for about 20 minutes before each meal and is often late to breakfast. Which plan should the nurse make first?",
      rationale:
        "The ritual relieves severe anxiety. Early in treatment the nurse allows time for it so the client can meet basic needs such as meals. Limits on the ritual are then set gradually with the client as other coping skills grow. Stopping or blocking the ritual sharply raises anxiety. Logic does not remove an obsession that the client already knows is excessive.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "Wake the client early to allow time for washing", why: "Allowing time for the ritual lowers anxiety and keeps the client on schedule for meals." },
      { text: "Stop the handwashing as soon as it begins", why: "Interrupting the ritual abruptly causes severe anxiety." },
      { text: "Lock the bathroom before each meal", why: "Blocking access raises anxiety and does not teach new coping." },
      { text: "Point out that the hands are already clean", why: "The client often knows the washing is excessive. Logic does not stop the urge." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s11-27", {
      topic: "Trauma-informed forensic examination",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A 20-year-old client arrives at the emergency department 6 hours after a sexual assault and agrees to a medical forensic examination. Which actions by the nurse reflect trauma-informed care? Select all that apply.",
      rationale:
        "Trauma-informed care restores safety, choice and control. The nurse explains each step, asks consent before each part and lets the client stop at any point. An advocate offers support. Rushing the exam removes control. Questions about how the client reacted imply blame. An open door removes privacy.",
      sources: [SAFE, TIC],
    }),
    kind: "sata",
    options: [
      { text: "Explain each step before it is done", why: "Knowing what comes next restores a sense of safety and control." },
      { text: "Complete the exam quickly without pausing", why: "Rushing removes the client's control over the pace of the exam." },
      { text: "Ask consent before each part of the exam", why: "Consent at each step lets the client choose what happens to their body." },
      { text: "Ask why the client did not fight back", why: "This question implies blame and can retraumatize the client." },
      { text: "Let the client stop the exam at any point", why: "The right to stop gives the client control throughout." },
      { text: "Leave the door open so staff can check in", why: "An open door removes privacy during an intimate exam." },
      { text: "Offer an advocate to stay with the client", why: "An advocate provides support and information during the exam." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s11-28", {
      topic: "Psychological first aid at a shelter",
      cjmm: "prioritize",
      process: "caring",
      difficulty: 2,
      stem: "A tornado destroyed several homes in a small town 3 hours ago. A nurse volunteers at a shelter. A 40-year-old resident sits alone, shivering in wet clothes, and says, \"I can't find my brother.\" What should the nurse do first?",
      rationale:
        "Psychological first aid starts with safety and basic needs. The resident is shivering in wet clothes, so dry clothes and warmth come first. The nurse then helps the resident seek news of the brother. Pressing for details of the event is not recommended. Referral for therapy is not an immediate need. Promising the brother is safe is false reassurance.",
      sources: [PFA],
    }),
    kind: "mc",
    options: [
      { text: "Ask the resident to describe the tornado", why: "Pushing survivors to recount events is not part of psychological first aid." },
      { text: "Provide dry clothes and a warm place to sit", why: "Meeting basic physical needs is the first step of psychological first aid." },
      { text: "Refer the resident to a counselor for therapy", why: "Most survivors recover without therapy. It is not the first need here." },
      { text: "Tell the resident the brother is surely safe", why: "The nurse cannot know this. False promises damage trust." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s11-29", {
      topic: "Signs of postpartum depression",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A home health nurse visits a client 4 weeks after the birth of her first child. The nurse reviews the visit note. Click to highlight the findings that need follow-up.",
      rationale:
        "Postpartum blues resolve within about 2 weeks. Crying most days since week 2, loss of interest and poor sleep even when the baby sleeps point to postpartum depression. Saying her family would be better off without her may reflect suicidal thinking and needs urgent assessment. White, scant lochia and a fundus that is no longer palpable are expected at 4 weeks. Frequent breastfeeding and a helping partner are expected or supportive.",
      sources: [ACOG_PMH, HALTER],
    }),
    kind: "highlight",
    passage:
      "[[Lochia scant and white]]. [[Cries most days since week 2]]. [[Cannot sleep even when the baby sleeps]]. [[Breastfeeds every 2 to 3 hours]]. [[Has lost interest in hobbies she enjoyed]]. [[Says her family would be better off without her]]. [[Partner helps with night feedings]]. [[Fundus not palpable]].",
    spans: [
      { text: "Lochia scant and white", why: "White, scant lochia is expected at 4 weeks after birth." },
      { text: "Cries most days since week 2", why: "Low mood lasting past 2 weeks is beyond the blues and suggests depression." },
      { text: "Cannot sleep even when the baby sleeps", why: "Insomnia when the chance to sleep exists suggests depression." },
      { text: "Breastfeeds every 2 to 3 hours", why: "This feeding pattern is expected for a breastfed newborn." },
      { text: "Has lost interest in hobbies she enjoyed", why: "Loss of interest is a core symptom of depression." },
      { text: "Says her family would be better off without her", why: "This may reflect suicidal thinking and needs direct assessment now." },
      { text: "Partner helps with night feedings", why: "Partner help is a support, not a warning sign." },
      { text: "Fundus not palpable", why: "The uterus has returned to the pelvis by 4 weeks, as expected." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s11-30", {
      topic: "Team response to splitting",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 26-year-old client with borderline personality disorder tells the day nurse, \"You are the only one who understands me. The night staff are cruel.\" The night staff report the client praised them and criticized the day staff. Which plan should the nurse suggest?",
      rationale:
        "Praising one group of staff while condemning another is splitting. It divides the team and weakens care. The team responds by agreeing on the same limits and expectations and applying them on every shift. Assigning a favorite nurse or letting the client choose staff rewards the splitting. Confronting the night staff takes the client's account at face value.",
      sources: [HALTER, TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "Assign the client's favorite nurse each shift", why: "Assigning a favorite rewards splitting and cannot be kept up on every shift." },
      { text: "Let the client choose which staff give care", why: "Staff choice lets the client divide the team further." },
      { text: "Talk with the night staff about their attitude", why: "This accepts the client's split view and sets staff against each other." },
      { text: "Agree on consistent limits all staff apply", why: "A united team with the same limits reduces splitting." },
    ],
    correct: 3,
  },
];
