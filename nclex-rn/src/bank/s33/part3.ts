import type { Item } from "@/engine/types";
import { CANNABIS_WD, DSM, HALTER, KRATOM, LITZ, MORAL_INJURY, ROSE_DEBRIEF, VAPE_TEXT, WHO_PFA, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s33-21", {
      need: "PSY",
      topic: "Expected findings after stopping daily cannabis",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 20-year-old client smoked cannabis several times a day for 2 years and stopped 3 days ago before starting a new job. The client comes to the clinic feeling unwell. Which two findings should the nurse recognize as expected in cannabis withdrawal? Select two.",
      rationale:
        "Cannabis withdrawal usually starts 24 to 48 hours after stopping and peaks around days 2 to 6. The client stopped 3 days ago. Irritability or anger and poor sleep with strange or vivid dreams are among the most common features. Appetite falls rather than rises. Pinpoint pupils with slow breathing point to opioid toxicity. Seizures and seeing insects point to alcohol or sedative withdrawal, not cannabis.",
      refs: ["Cannabis withdrawal symptoms usually begin 24 to 48 hours after stopping and peak at days 2 to 6."],
      sources: [CANNABIS_WD, DSM],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Increased appetite and weight gain", why: "Cannabis withdrawal lowers appetite and can cause weight loss." },
      { text: "Irritability and quick anger", why: "Irritability and anger are among the most common withdrawal features." },
      { text: "Pinpoint pupils and slow breathing", why: "These signs point to opioid toxicity, not cannabis withdrawal." },
      { text: "A generalized tonic-clonic seizure", why: "Seizures occur in alcohol or sedative withdrawal, not cannabis withdrawal." },
      { text: "Poor sleep with vivid dreams", why: "Disturbed sleep and strange dreams are common in cannabis withdrawal." },
      { text: "Seeing insects crawl on the walls", why: "Visual hallucinations suggest alcohol withdrawal delirium, not cannabis withdrawal." },
    ],
    correct: [1, 4],
  },
  {
    ...meta("rn-s33-22", {
      need: "PSY",
      topic: "Course of cannabis withdrawal on a unit",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 23-year-old client who used cannabis several times daily is admitted to a mental health unit for depression. The client has not used cannabis since admission on day 1. The nurse reviews the flow sheet. Which interpretation of the trend is most accurate?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Measure", "Day 1", "Day 3", "Day 6", "Day 10"],
            rows: [
              ["Irritability (0 to 10)", "3", "7", "6", "2"],
              ["Sleep (hours/night)", "7", "4", "5", "7"],
              ["Meals eaten (%)", "80", "40", "50", "85"],
              ["Mood (0 to 10, 10 is best)", "3", "3", "4", "5"],
            ],
          },
        },
      ],
      rationale:
        "Irritability rose from 3 to 7 and sleep fell to 4 hours by day 3. Intake dropped to 40% of meals. All three returned toward baseline by day 10. Onset within days of stopping, a peak in the first week and easing over about 2 weeks fit cannabis withdrawal. Mood rose slowly from 3 to 5, so depression is not worsening. There is no fever, confusion or alcohol history to suggest delirium or alcohol withdrawal.",
      refs: ["Cannabis withdrawal symptoms usually begin 24 to 48 hours after stopping, peak at days 2 to 6 and last about 1 to 2 weeks."],
      sources: [CANNABIS_WD],
    }),
    kind: "mc",
    options: [
      { text: "Cannabis withdrawal that is now easing", why: "Symptoms rose by day 3 and eased by day 10, the usual withdrawal course." },
      { text: "A deepening episode of major depression", why: "Mood improved from 3 to 5, so depression is not deepening." },
      { text: "Delirium from an unrecognized infection", why: "The flow sheet shows no confusion, and symptoms improved without treatment." },
      { text: "The start of alcohol withdrawal syndrome", why: "The stem gives no alcohol use, and the pattern follows stopping cannabis." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s33-23", {
      need: "PSY",
      topic: "Withdrawal from an herbal opioid-like product",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 38-year-old client is admitted with a fractured ankle. The client has taken kratom powder several times a day for 2 years for back pain and took the last dose 30 hours ago. The client now has yawning, a runny nose, watery eyes, muscle aches, diarrhea and restlessness. Pupils are dilated. Heart rate is 104/minute. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Kratom alkaloids act as partial agonists at mu opioid receptors. Daily use for 2 years can cause dependence. Yawning, runny nose, watery eyes, muscle aches, diarrhea, dilated pupils and restlessness 30 hours after the last dose fit opioid-like withdrawal. The provider needs to know about the kratom so withdrawal can be treated. A structured opioid withdrawal scale guides treatment. Diarrhea risks dehydration, so fluid balance is tracked.",
      sources: [KRATOM],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Stimulant withdrawal", why: "Stimulant withdrawal causes fatigue and heavy sleep, not a runny nose and diarrhea." },
      { text: "Serotonin syndrome", why: "No serotonergic drug is given, and there is no clonus or fever." },
      { text: "Alcohol withdrawal", why: "The stem describes kratom use, and the signs are opioid-like." },
      { text: "Kratom withdrawal", why: "Opioid-like signs 30 hours after daily kratom use fit withdrawal." },
    ],
    actions: [
      { text: "Report the daily kratom use to the provider", why: "The provider needs the history to treat withdrawal and plan pain care." },
      { text: "Give naloxone to reverse the kratom effects", why: "Naloxone blocks opioid receptors and would worsen withdrawal." },
      { text: "Score symptoms with an opioid withdrawal scale", why: "A structured scale measures severity and guides treatment." },
      { text: "Tell the client to take kratom from home", why: "Home kratom is unregulated and its dose is unknown." },
      { text: "Limit oral fluids until the diarrhea stops", why: "Limiting fluids with ongoing diarrhea risks dehydration." },
    ],
    parameters: [
      { text: "Serum ammonia and bilirubin levels", why: "These guide liver disease care and do not track withdrawal." },
      { text: "Opioid withdrawal scale score", why: "Serial scores show whether withdrawal is easing with treatment." },
      { text: "Peak expiratory flow rate", why: "Peak flow guides asthma care and does not track withdrawal." },
      { text: "Intake, output and hydration", why: "Diarrhea and sweating can cause fluid loss that needs tracking." },
      { text: "Hemoglobin A1C and fasting lipids", why: "These reflect long-term metabolic health and do not guide withdrawal care." },
    ],
    correct: { condition: 3, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s33-24", {
      need: "PSY",
      topic: "Teaching about kratom effects",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A 29-year-old client buys kratom online and takes it daily to ease opioid cravings. The nurse teaches the client about kratom. Which statement by the client shows understanding of the teaching?",
      rationale:
        "Kratom alkaloids act on mu opioid receptors as partial agonists. Regular use can lead to dependence and an opioid-like withdrawal when it stops. A natural source does not make a substance safe at any dose. Kratom does not block opioid receptors the way naloxone does. Stopping suddenly after daily use can bring on withdrawal.",
      sources: [KRATOM],
    }),
    kind: "mc",
    options: [
      { text: "\"Kratom comes from a plant, so it is safe in any amount.\"", why: "A plant source does not make a substance safe. Kratom can cause dependence." },
      { text: "\"Kratom blocks opioid receptors the way naloxone does.\"", why: "Kratom alkaloids stimulate mu opioid receptors as partial agonists." },
      { text: "\"Kratom can cause dependence and withdrawal like opioids.\"", why: "Its opioid receptor effects can lead to dependence and withdrawal." },
      { text: "\"I can stop kratom suddenly with no symptoms at all.\"", why: "Stopping after daily use can cause opioid-like withdrawal." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s33-25", {
      need: "PSY",
      topic: "Quit plan for a teen who vapes",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 16-year-old who vapes nicotine every day tells the school nurse about wanting to quit within the next month. Which strategies should the nurse include in the quit plan? Select all that apply.",
      rationale:
        "The teen wants to quit within a month. A text message quit program raised quit rates in adolescents who vape. Setting a quit date gives the plan a start. Planning for triggers such as parties builds coping skills. Support from people the teen trusts helps sustain the change. Switching to cigarettes trades one nicotine product for a more harmful one. Keeping the device nearby makes relapse easy.",
      sources: [VAPE_TEXT, HALTER],
    }),
    kind: "sata",
    options: [
      { text: "Switch to cigarettes while cutting down on vaping", why: "Cigarettes deliver nicotine with more toxic smoke." },
      { text: "Join a text message quit program for teens", why: "A text message program raised quit rates in adolescents who vape." },
      { text: "Keep the vape in a backpack in case urges get bad", why: "Easy access to the device makes relapse more likely." },
      { text: "Set a quit date within the next few weeks", why: "A set date turns the wish to quit into a plan." },
      { text: "Plan how to handle urges at parties", why: "Planning for triggers builds the coping skills a quit attempt needs." },
      { text: "Use stronger pods to vape fewer times a day", why: "Stronger pods raise nicotine intake and deepen dependence." },
      { text: "Ask a trusted adult for support", why: "Support from trusted people helps a teen stay quit." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s33-26", {
      need: "PSY",
      topic: "Urge to vape on day 2 of quitting",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 15-year-old stopped vaping 2 days ago. The teen tells the school nurse, \"I feel cranky and I can't focus in class. Maybe I should just vape a little.\" Which response by the nurse is best?",
      rationale:
        "Irritability and poor focus 2 days after stopping nicotine fit nicotine withdrawal. Naming the cause and telling the teen the feelings ease with time supports the quit attempt. Vaping a little restarts nicotine exposure. A judging remark shames the teen. Calling the parents breaks the confidential talk without a safety reason and can end the teen's trust.",
      sources: [DSM, VAPE_TEXT],
    }),
    kind: "mc",
    options: [
      { text: "\"Vaping a little is fine while you get through this.\"", why: "Any vaping keeps the brain exposed to nicotine and restarts the habit." },
      { text: "\"Those feelings are withdrawal, and they ease with time.\"", why: "Naming withdrawal and its short course helps the teen stay quit." },
      { text: "\"If you were serious, the cravings would be gone by now.\"", why: "A judging remark shames the teen and ignores normal withdrawal." },
      { text: "\"I will call your parents so they can watch you closely.\"", why: "Breaking confidentiality without a safety reason can end the teen's trust." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-27", {
      need: "PSY",
      topic: "Guilt and betrayal after rationed care",
      cjmm: "analyze",
      process: "caring",
      difficulty: 4,
      stem: "Now 6 months after a surge of critically ill clients, an intensive care nurse tells a colleague, \"I had to decide who got the last ventilator. I keep going over it, and I feel I betrayed the man who died. I am ashamed, and I no longer trust our leaders.\" The nurse still enjoys the work and sleeps well on days off. Which term best describes the nurse's experience?",
      rationale:
        "The nurse took part in an act that clashed with the nurse's own values. Guilt, shame and a sense of betrayal by leaders followed. These features fit moral injury. Burnout is exhaustion and detachment from chronic workload, and the nurse still enjoys the work. Compassion fatigue comes from absorbing others' suffering. Acute stress disorder occurs within the first month after trauma, and this is 6 months later.",
      sources: [LITZ, MORAL_INJURY, DSM],
    }),
    kind: "mc",
    options: [
      { text: "Burnout", why: "Burnout is exhaustion and detachment from workload. The nurse still enjoys the work." },
      { text: "Compassion fatigue", why: "Compassion fatigue comes from absorbing others' suffering, not guilt over one's own act." },
      { text: "Acute stress disorder", why: "This disorder occurs within the first month after trauma. It has been 6 months." },
      { text: "Moral injury", why: "Guilt, shame and betrayal after an act that clashed with the nurse's values fit moral injury." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s33-28", {
      need: "PSY",
      topic: "Leader actions after staff moral injury",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "After months of short staffing in which care had to be rationed, several nurses on a medical unit report guilt, anger and a sense of betrayal by leaders. Which actions by the nurse manager support staff with moral injury? Select all that apply.",
      rationale:
        "Moral injury grows when events go unspoken and trust in leaders breaks down. Open acknowledgment of what happened starts repair. Regular check-ins by leaders catch distress early. Peer support lets staff talk with people who know the work. A fair, confidential route for concerns rebuilds trust. Silence about the events deepens isolation. Claiming lessons were learned without making changes can cause further harm.",
      sources: [MORAL_INJURY],
    }),
    kind: "sata",
    options: [
      { text: "Announce that lessons were learned and move on", why: "Claiming lessons without changes can deepen the sense of betrayal." },
      { text: "Openly acknowledge what happened", why: "Open discussion of the events is a first step in moral repair." },
      { text: "Check in with staff on a regular basis", why: "Regular contact from leaders catches distress early." },
      { text: "Ask staff not to discuss the events", why: "Silence isolates staff and blocks repair." },
      { text: "Set up peer support with trusted colleagues", why: "Peers who know the work make it easier to talk about the events." },
      { text: "Create a confidential way to raise concerns", why: "A safe reporting route helps rebuild trust in leaders." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s33-29", {
      need: "PSY",
      topic: "Staff support after a mass shooting",
      cjmm: "action",
      process: "caring",
      difficulty: 5,
      stem: "After a mass shooting, an emergency department treated 23 injured people over 4 hours. The next morning the nurse manager plans support for the staff who worked that shift. Which plan reflects current evidence?",
      rationale:
        "A single compulsory session that has staff retell the event in detail is psychological debriefing. A Cochrane review found it no better than control conditions, with some evidence of more PTSD afterward. Psychological first aid, voluntary support and checking on staff over the next weeks are preferred. Forbidding talk for a week blocks support. Telling staff that PTSD is likely raises fear, since most people recover with time and support.",
      sources: [ROSE_DEBRIEF, WHO_PFA],
    }),
    kind: "mc",
    options: [
      { text: "Require each person to retell the event in detail in one group session", why: "Compulsory single-session debriefing may raise the risk of PTSD." },
      { text: "Offer voluntary support and check on staff in the coming weeks", why: "Voluntary support with follow-up matches current evidence." },
      { text: "Ask staff not to talk about the event until a week has passed", why: "Blocking talk cuts staff off from natural support." },
      { text: "Warn staff that most of them will likely develop PTSD", why: "Most people recover with time and support, and this warning adds fear." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s33-30", {
      need: "PSY",
      topic: "Family reception center after a crash",
      cjmm: "generate",
      process: "caring",
      difficulty: 2,
      stem: "A bus crash has caused many injuries and deaths. At the hospital family reception center, relatives wait for news. The nurse plans psychological first aid for the families. Which actions should the nurse include? Select all that apply.",
      rationale:
        "Psychological first aid offers comfort and practical help without pressure. The nurse listens if people want to talk. The nurse helps families reach each other and shares accurate updates as they arrive. Water and a quiet place meet basic needs. Pressing for details of the event is not part of first aid. Promising a good outcome before it is known gives false hope. Telling people how to feel dismisses their reactions.",
      sources: [WHO_PFA],
    }),
    kind: "sata",
    options: [
      { text: "Ask each person to describe what they saw in detail", why: "Pressing people to retell events is not part of psychological first aid." },
      { text: "Listen to those who want to talk", why: "Listening without pressure is a core action of psychological first aid." },
      { text: "Promise relatives that their family member is safe", why: "A promise made before the facts are known gives false hope." },
      { text: "Help relatives reach other family members", why: "Connecting people with loved ones is a core action." },
      { text: "Share accurate updates as they arrive", why: "Accurate information lowers uncertainty and fear." },
      { text: "Tell relatives they need to stay calm", why: "Telling people how to feel dismisses normal reactions." },
      { text: "Offer water and a quiet place to wait", why: "Meeting basic needs is part of practical care." },
    ],
    correct: [1, 3, 4, 6],
  },
];
