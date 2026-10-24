import type { Item } from "@/engine/types";
import { BZD_TAPER, DSM, HALTER, LINEHAN, TIP33, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s33-11", {
      need: "PSY",
      topic: "Naming dissociative experiences",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A nurse on a mental health unit records statements made by four clients. Match each client statement to the experience it describes.",
      rationale:
        "Feeling outside one's own body, watching oneself, is depersonalization. Feeling that the surroundings are flat or unreal is derealization. Being unable to recall a stressful period is dissociative amnesia. Hearing a voice that no one else hears is an auditory hallucination, a perceptual disturbance rather than a dissociative one. Flight of ideas is a thought process sign of mania. A functional neurological symptom is a loss of movement or sensation.",
      sources: [DSM, HALTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "\"I feel like I am watching myself from outside my body.\"",
      "\"The room looks flat and unreal, like a stage set.\"",
      "\"I cannot recall anything from the week of the house fire.\"",
      "\"A voice tells me I am evil, and no one else hears it.\"",
    ],
    tokens: [
      { text: "Derealization", why: "A sense that the surroundings are unreal matches the second statement." },
      { text: "Auditory hallucination", why: "Hearing a voice others cannot hear is a hallucination, matching the fourth statement." },
      { text: "Depersonalization", why: "Feeling detached from one's own body or self matches the first statement." },
      { text: "Flight of ideas", why: "Flight of ideas is rapid jumping between topics. No statement describes it." },
      { text: "Dissociative amnesia", why: "Loss of memory for a stressful period matches the third statement." },
      { text: "Functional neurological symptom", why: "This is a loss of movement or sensation. No statement describes it." },
    ],
    correct: [2, 0, 4, 1],
  },
  {
    ...meta("rn-s33-12", {
      need: "PSY",
      topic: "Detachment with intact reality testing",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 24-year-old client reports episodes of feeling detached from their own body. The client says, \"It is as if I am a robot going through the motions. I know it is not truly happening, but it scares me.\" The mental status exam shows no hallucinations and no delusions. Which interpretation by the nurse is most accurate?",
      rationale:
        "The client knows the feeling is not real, and the exam shows no hallucinations or delusions. Insight that the experience is unreal means reality testing stays intact. This is a defining feature of depersonalization. A delusion is a fixed false belief, and psychosis involves loss of reality testing. Nothing in the stem suggests memory loss or a decline that would point to dementia at 24 years of age.",
      sources: [DSM, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "The client is in the early phase of a psychotic illness", why: "Psychosis involves loss of reality testing. The client knows the experience is not real." },
      { text: "Reality testing stays intact during the episodes", why: "The client recognizes the detachment as unreal, which shows intact reality testing." },
      { text: "The client is describing a delusion of control", why: "A delusion is held as true. The client knows the feeling is not truly happening." },
      { text: "The episodes are an early sign of dementia", why: "The client is 24 years old and reports no memory or functional decline." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-13", {
      need: "PSY",
      topic: "Using a crisis survival skill",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 19-year-old client in dialectical behavior therapy has practiced distress tolerance skills. The client tells the nurse about an intense urge to self-harm after an argument with a parent last night. Which action described by the client shows correct use of a crisis survival skill?",
      rationale:
        "Distress tolerance skills help a person get through a crisis without making it worse. Cold water or a cold pack on the face and slow, paced breathing change body chemistry and bring extreme emotion down fast. Listing the other person's faults feeds the anger. Calling back to keep arguing escalates the crisis. Putting off self-harm until later still plans the harmful act rather than tolerating the urge.",
      sources: [LINEHAN],
    }),
    kind: "mc",
    options: [
      { text: "\"I wrote a long list of everything my parent did wrong.\"", why: "Dwelling on the other person's faults keeps the anger high." },
      { text: "\"I called my parent back to finish the argument.\"", why: "Returning to the conflict during a crisis escalates distress." },
      { text: "\"I told myself I could self-harm later if needed.\"", why: "Delaying self-harm still keeps the harmful act as the plan." },
      { text: "\"I held a cold pack on my face and slowed my breathing.\"", why: "Cold on the face and paced breathing are crisis survival skills that calm the body fast." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s33-14", {
      need: "PSY",
      topic: "Opening an assertive request",
      cjmm: "generate",
      process: "communication",
      difficulty: 4,
      stem: "A client in a dialectical behavior therapy skills group wants to ask a roommate to stop borrowing clothes without asking. The nurse helps the client plan the request using interpersonal effectiveness skills. Which opening statement fits the first step of the skill?",
      rationale:
        "The interpersonal effectiveness skill for making a request runs in a set order. It starts by describing the facts of the situation without judgment. Naming the jacket and the two times it was taken this week does that. Expressing feelings comes second. Asserting the request comes third. Reinforcing, by saying what the other person gains, comes fourth.",
      sources: [LINEHAN],
    }),
    kind: "mc",
    options: [
      { text: "\"You took my blue jacket twice this week without asking.\"", why: "Describing the facts without judgment is the first step of the request skill." },
      { text: "\"I feel upset when my clothes go missing.\"", why: "Expressing feelings is the second step. It follows the description of the facts." },
      { text: "\"Please ask me before you borrow my clothes.\"", why: "Asserting the request is the third step. It comes after describing and expressing." },
      { text: "\"If you ask first, I will gladly lend you things.\"", why: "Reinforcing the request is the fourth step. It comes after the request is made." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-15", {
      need: "PSY",
      topic: "Intake cues of appearance preoccupation",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 22-year-old client comes to the college health clinic asking for a referral to a cosmetic surgeon. The nurse reviews the intake note. Click to highlight the findings that suggest body dysmorphic disorder.",
      rationale:
        "Body dysmorphic disorder is a preoccupation with a perceived flaw that others see as slight or absent. Friends say the nose looks normal. Checking mirrors for 3 hours a day is a repetitive behavior. Seeking two surgeons for the same flaw and hiding the face with a mask are common. Missing 6 classes to avoid being seen shows impairment. A band, regular meals and daily sunscreen are ordinary.",
      sources: [DSM, HALTER],
    }),
    kind: "highlight",
    passage:
      "[[Spends 3 hours a day checking the nose in mirrors]]. [[Has asked two surgeons for nose surgery]]. [[Friends say the nose looks normal]]. [[Wears a mask outdoors to hide the face]]. [[Plays guitar in a band]]. [[Eats three meals a day]]. [[Missed 6 classes this month to avoid being seen]]. [[Uses sunscreen daily]].",
    spans: [
      { text: "Spends 3 hours a day checking the nose in mirrors", why: "Hours of mirror checking is a repetitive behavior typical of the disorder." },
      { text: "Has asked two surgeons for nose surgery", why: "Repeated requests for cosmetic surgery are common in the disorder." },
      { text: "Friends say the nose looks normal", why: "The flaw is not seen by others, which is a defining feature." },
      { text: "Wears a mask outdoors to hide the face", why: "Camouflaging the perceived flaw is a common safety behavior." },
      { text: "Plays guitar in a band", why: "An ongoing hobby is not a sign of the disorder." },
      { text: "Eats three meals a day", why: "Regular meals do not point to this disorder." },
      { text: "Missed 6 classes this month to avoid being seen", why: "Avoiding class shows the preoccupation impairs daily function." },
      { text: "Uses sunscreen daily", why: "Daily sunscreen is ordinary skin care." },
    ],
    correct: [0, 1, 2, 3, 6],
  },
  {
    ...meta("rn-s33-16", {
      need: "PSY",
      topic: "Repeated questions about a perceived flaw",
      cjmm: "action",
      process: "communication",
      difficulty: 4,
      stem: "A 22-year-old client with body dysmorphic disorder asks the nurse four times during one visit, \"Does my nose look crooked to you?\" The client has missed several classes this month. Which response by the nurse is best?",
      rationale:
        "Reassurance brings brief relief, then the doubt returns and the client asks again. The cycle of asking and reassurance keeps the disorder going. Turning to how much of the day the worry takes shifts the focus to distress and function, which treatment targets. Checking in the mirror together joins the ritual. Suggesting surgery supports the belief, and cosmetic procedures often do not relieve the preoccupation.",
      sources: [HALTER, DSM],
    }),
    kind: "mc",
    options: [
      { text: "\"Your nose looks fine to me, there is nothing wrong.\"", why: "Reassurance gives brief relief and keeps the asking cycle going." },
      { text: "\"A surgeon could fix it if it bothers you so much.\"", why: "This supports the belief, and cosmetic procedures often do not ease the disorder." },
      { text: "\"This worry seems to take up a lot of your day.\"", why: "This shifts the focus from appearance to the distress and lost function." },
      { text: "\"Let us look in the mirror together and check.\"", why: "Mirror checking is part of the ritual and strengthens it." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s33-17", {
      need: "PSY",
      topic: "Psychosis and fever after a stimulant binge",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "Police bring a 31-year-old client to the emergency department after the client shouted at neighbors. The client has used methamphetamine daily for a week and has not slept for 3 days. The client says people are hiding in the walls and picks at arm sores, saying bugs are under the skin. Temperature is 38.9°C (102.0°F), heart rate 128/minute and BP 168/98 mmHg. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A week of daily methamphetamine, no sleep for 3 days, paranoia and the sense of bugs under the skin fit stimulant-induced psychosis. A temperature of 38.9°C, heart rate of 128/minute and BP of 168/98 mmHg show stimulant toxicity. A quiet room with moderate light lowers agitation without full sensory deprivation. Cooling treats the high temperature, which can lead to muscle breakdown and organ injury. Temperature, heart rate and BP show whether the toxicity is easing.",
      sources: [TIP33, HALTER],
    }),
    kind: "bowtie",
    conditions: [
      { text: "First episode of schizophrenia", why: "The psychosis follows a week of stimulant use and comes with tactile hallucinations and fever." },
      { text: "Stimulant-induced psychosis", why: "Paranoia and bugs under the skin after a week of methamphetamine fit this condition." },
      { text: "Alcohol withdrawal delirium", why: "The stem describes methamphetamine use, not stopping alcohol." },
      { text: "Opioid withdrawal syndrome", why: "Opioid withdrawal does not cause paranoid delusions or tactile hallucinations." },
    ],
    actions: [
      { text: "Argue that there are no bugs under the skin", why: "Arguing with a fixed belief raises agitation and mistrust." },
      { text: "Place the client in a quiet room with moderate light", why: "Low stimulation calms a paranoid, agitated client." },
      { text: "Apply four-point restraints right away", why: "Restraint is a last resort. Struggling against it raises body heat and muscle injury." },
      { text: "Begin cooling for the high temperature", why: "A temperature of 38.9°C in stimulant toxicity needs active cooling." },
      { text: "Offer a caffeinated drink for fluids", why: "Caffeine is a stimulant and adds to the toxicity." },
    ],
    parameters: [
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide this emergency." },
      { text: "Core body temperature", why: "Temperature shows whether cooling is working and hyperthermia is resolving." },
      { text: "Peak expiratory flow", why: "Peak flow guides asthma care and is not a concern here." },
      { text: "Fasting serum lipid panel", why: "Lipids do not change over hours and do not guide acute care." },
      { text: "Heart rate and BP", why: "A heart rate of 128/minute and BP of 168/98 mmHg show stimulant toxicity to track." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 4] },
  },
  {
    ...meta("rn-s33-18", {
      need: "PSY",
      topic: "Ward care in stimulant-induced paranoia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 27-year-old client is admitted to a mental health unit with methamphetamine-induced psychosis. He believes the staff are spying on him. He paces the hallway and startles at loud noises. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The client is paranoid, pacing and easily startled. A calm, low voice with short sentences is easy to follow. Keeping a safe distance with a clear path to the door lowers the sense of threat for both people. Less noise and no harsh light reduce stimulation. Frequent checks catch rising agitation early. Touch can be read as an attack. A busy group overstimulates. Long explanations do not change a paranoid belief.",
      sources: [HALTER, TIP33],
    }),
    kind: "sata",
    options: [
      { text: "Touch the client's arm gently to show support", why: "A paranoid client may read touch as a threat." },
      { text: "Speak in a calm, low voice with short sentences", why: "Short, calm speech is easier for an agitated client to follow." },
      { text: "Assign the client to a busy group activity", why: "A crowded, noisy group adds stimulation and fear." },
      { text: "Keep a safe distance and a clear path to the door", why: "Space lowers the client's sense of threat and keeps the nurse safe." },
      { text: "Explain at length that staff are not spying", why: "Long reasoning does not change a paranoid belief and can raise agitation." },
      { text: "Reduce noise and harsh light in the client's area", why: "A low-stimulation setting calms a client who startles easily." },
      { text: "Check on the client often for rising agitation", why: "Frequent observation catches early signs of aggression." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s33-19", {
      need: "PSY",
      topic: "Pace of a benzodiazepine taper",
      cjmm: "action",
      process: "teaching",
      difficulty: 4,
      stem: "A 64-year-old client has taken lorazepam 1 mg twice daily for 8 years. After two falls, the client and the primary health care provider agree to taper the drug. The client asks, \"How fast will we cut it down?\" Which response by the nurse matches current tapering guidance?",
      rationale:
        "Long-term daily lorazepam causes physical dependence. Current guidance starts with small cuts of about 5% to 10% of the dose and adjusts the pace to how the client feels. The pace typically does not exceed 25% every 2 weeks, and it slows or pauses if withdrawal appears. Halving the dose weekly or stopping at once risks severe withdrawal and seizures. A fixed end date ignores the client's response.",
      refs: ["Initial benzodiazepine taper reductions are generally 5% to 10% of the dose, and the pace typically does not exceed 25% every 2 weeks."],
      sources: [BZD_TAPER],
    }),
    kind: "mc",
    options: [
      { text: "\"The dose will be cut in half each week until it is gone.\"", why: "Halving the dose weekly far exceeds the 25% every 2 weeks ceiling." },
      { text: "\"Each cut is small, about 5% to 10%, with time to adjust.\"", why: "Small cuts adjusted to the client's response match current guidance." },
      { text: "\"You will stop it all at once so withdrawal ends sooner.\"", why: "Abrupt stopping after 8 years can cause severe withdrawal and seizures." },
      { text: "\"The taper will end after 2 weeks, however you feel.\"", why: "The pace is adjusted to symptoms, not fixed to a set end date." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-20", {
      need: "PSY",
      topic: "Symptoms after a larger taper step",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 61-year-old client is tapering lorazepam after 9 years of daily use. The nurse reviews the taper log at a clinic visit. Based on the trend, which conclusion is most accurate?",
      tabs: [
        {
          title: "Taper Log",
          table: {
            head: ["Measure", "Week 0", "Week 2", "Week 4", "Week 6"],
            rows: [
              ["Lorazepam daily dose (mg)", "2", "1.8", "1.6", "1.2"],
              ["Anxiety (0 to 10)", "4", "4", "4", "8"],
              ["Sleep (hours/night)", "6", "6", "6", "3"],
              ["Hand tremor", "None", "None", "None", "Present"],
              ["Heart rate (/minute)", "78", "80", "78", "104"],
            ],
          },
        },
      ],
      rationale:
        "The client was stable through the small steps from 2 mg to 1.6 mg. After the larger step to 1.2 mg, anxiety rose from 4 to 8, sleep fell to 3 hours, a tremor appeared and the heart rate rose to 104/minute. New tremor and a faster pulse right after a dose cut point to withdrawal. Guidance is to slow or pause the taper when significant symptoms emerge. Stopping now would worsen withdrawal.",
      sources: [BZD_TAPER],
    }),
    kind: "mc",
    options: [
      { text: "The taper is on track and should continue at this same pace", why: "Anxiety, sleep loss, tremor and a faster pulse after the last cut show it is not on track." },
      { text: "The anxiety disorder has returned and needs a new drug", why: "Tremor and a heart rate of 104/minute right after a cut point to withdrawal, not relapse." },
      { text: "The dose is low enough now to stop the drug", why: "Stopping now would worsen the withdrawal that has already started." },
      { text: "Withdrawal followed the last cut, so the taper should slow", why: "Symptoms that start right after a larger cut call for slowing or pausing the taper." },
    ],
    correct: 3,
  },
];
