import type { Item } from "@/engine/types";
import { ASAM_BZD, DSM, GIGER, HALTER, HINKLE, HOCKENBERRY, INOUYE, POTTER, TIP63, TOWNSEND, USPSTF_ALC, WINSTEIN, AAP_DISC, AAP_TO, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s12-31", {
      topic: "Brief intervention after a positive alcohol screen",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "During a primary care visit, a 42-year-old man scores 6 on the AUDIT-C. He says he drinks 3 or 4 beers most evenings to unwind. He has no signs of alcohol dependence. Which response by the nurse fits a brief intervention?",
      rationale:
        "His AUDIT-C score of 6 is a positive screen for unhealthy drinking. He shows no dependence, so a brief intervention in primary care fits. The nurse gives clear feedback that the drinking is risky and asks how he feels about cutting back. This respects his choice and builds motivation. An order to stop, false reassurance and an inpatient referral do not match his level of risk.",
      refs: ["An AUDIT-C score of 4 or more in men is a positive screen for unhealthy alcohol use."],
      canada:
        "Canadian counselling would use Canada's Guidance on Alcohol and Health from CCSA. It rates 3 to 6 standard drinks a week as moderate risk and 7 or more as high risk, so his intake is high risk.",
      sources: [USPSTF_ALC,
        { body: "Canadian Centre on Substance Use and Addiction", work: "Canada's Guidance on Alcohol and Health: Final Report", year: 2023, url: "https://www.ccsa.ca/en/guidance-tools-resources/substance-use-and-addiction/alcohol/canadas-guidance-alcohol-and-health" },
      ],
    }),
    kind: "mc",
    options: [
      { text: "\"You should stop drinking alcohol at once, starting tonight.\"", why: "An order to stop tends to raise resistance and skips his own view of change." },
      { text: "\"This is risky drinking. How do you feel about cutting back?\"", why: "Clear feedback plus an open question on change is the core of a brief intervention." },
      { text: "\"Many adults drink to relax, so this level is not a concern.\"", why: "His score is a positive screen, so reassurance misses a real risk." },
      { text: "\"I will refer you to an inpatient alcohol treatment program.\"", why: "He shows no dependence. Inpatient care does not match his level of risk." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-32", {
      topic: "Signs of delirium in intensive care",
      cjmm: "recognize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse reviews a night note on a 74-year-old client in the intensive care unit on day 4 after cardiac surgery. The client was alert and fully oriented on day 3. Click to highlight the findings that suggest delirium.",
      rationale:
        "The client was fully oriented on day 3. Seeing bugs that are not there is a perceptual disturbance. Failing to count backward from 20 shows poor attention, the core feature of delirium. Orientation to name only is a new change. Alertness that swings between drowsy and agitated shows the fluctuating course. A clean incision, a heart rate of 84/minute, a 400 mL void and mild pain are expected.",
      sources: [INOUYE, DSM],
    }),
    kind: "highlight",
    passage:
      "[[Pulls at the oxygen tubing and says bugs are on the sheets]]. [[Cannot count backward from 20]]. [[Sternal incision dry with no redness]]. [[Oriented to name only]]. [[Heart rate 84/minute in sinus rhythm]]. [[Voided 400 mL of clear yellow urine]]. [[Alertness shifts between drowsy and agitated]]. [[Rates incision pain 2 of 10]].",
    spans: [
      { text: "Pulls at the oxygen tubing and says bugs are on the sheets", why: "Seeing things that are not there is a perceptual disturbance seen in delirium." },
      { text: "Cannot count backward from 20", why: "Failing a simple attention task shows inattention, the core feature of delirium." },
      { text: "Sternal incision dry with no redness", why: "A clean incision is expected and does not suggest delirium." },
      { text: "Oriented to name only", why: "Loss of orientation since day 3 is an acute change in cognition." },
      { text: "Heart rate 84/minute in sinus rhythm", why: "A normal heart rate and rhythm do not suggest delirium." },
      { text: "Voided 400 mL of clear yellow urine", why: "A normal void is expected and argues against urinary retention as a trigger." },
      { text: "Alertness shifts between drowsy and agitated", why: "A level of alertness that swings fits the fluctuating course of delirium." },
      { text: "Rates incision pain 2 of 10", why: "Mild pain is expected after surgery and is well controlled." },
    ],
    correct: [0, 1, 3, 6],
  },
  {
    ...meta("rn-s12-33", {
      topic: "Timing the first buprenorphine dose",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 33-year-old client with opioid use disorder is admitted to start buprenorphine. The last heroin use was 14 hours before admission. The prescription says to give the first dose when the COWS score is 13 or more. Based on the trend, what should the nurse do at 1100?",
      tabs: [
        {
          title: "Withdrawal Flow Sheet",
          table: {
            head: ["Time", "0800", "0900", "1000", "1100"],
            rows: [
              ["COWS score", "6", "8", "11", "14"],
              ["Heart rate (/minute)", "88", "94", "100", "106"],
              ["Pupil size", "4 mm", "5 mm", "6 mm", "6 mm"],
              ["Yawning and runny nose", "None", "Mild", "Present", "Present"],
              ["Gooseflesh", "None", "None", "Mild", "Present"],
            ],
          },
        },
      ],
      rationale:
        "The COWS score rises from 6 to 14 between 0800 and 1100. Heart rate rises, pupils widen, and yawning, a runny nose and gooseflesh appear. At 1100 the score of 14 meets the prescribed threshold of 13. Buprenorphine is a partial agonist. Given before clear withdrawal, it displaces other opioids and can bring on sudden withdrawal. Now that withdrawal is established, the first dose is given. Further waiting prolongs distress and raises the risk the client leaves.",
      refs: ["COWS scores of 13 to 24 indicate moderate opioid withdrawal."],
      sources: [TIP63],
    }),
    kind: "mc",
    options: [
      { text: "Recheck the COWS score in 4 hours", why: "The threshold is met. Waiting 4 hours prolongs withdrawal without benefit." },
      { text: "Hold the dose until the score reaches 25", why: "The prescription sets 13 or more. A score of 25 would mean needless moderately severe distress." },
      { text: "Give lorazepam to ease the symptoms", why: "A benzodiazepine does not treat opioid withdrawal and adds sedation risk." },
      { text: "Give the first buprenorphine dose now", why: "The score of 14 meets the threshold, so precipitated withdrawal is now unlikely." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-34", {
      topic: "Using a token economy",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "On an inpatient unit for adolescents, a 14-year-old boy often skips morning hygiene and group sessions. The team uses a token economy. Which approach fits this program?",
      rationale:
        "A token economy is a form of behavior modification. The client earns a token right after each target behavior, and tokens are traded later for privileges. Prompt, consistent rewards strengthen the behavior. Taking away the phone is punishment, not token reinforcement. Rewards held until the end of the week come too late to shape daily habits. Discussing reasons builds insight but is not part of the token system.",
      sources: [TOWNSEND],
    }),
    kind: "mc",
    options: [
      { text: "Give a token each time he completes a set task", why: "Prompt, consistent reward for each target behavior is how a token economy works." },
      { text: "Take away his phone until he attends all groups", why: "Removing a privilege is punishment and does not reinforce the wanted behavior." },
      { text: "Offer rewards only at the end of the week", why: "Delayed rewards weaken the link between the behavior and the reinforcement." },
      { text: "Discuss the reasons he avoids group each day", why: "Talking about reasons builds insight but is not how a token system works." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s12-35", {
      topic: "Teaching parents to use time-out",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "The parent of a 4-year-old boy asks the clinic nurse how to use time-out when he hits his sister. Which instruction should the nurse give?",
      rationale:
        "Time-out removes the child from attention for a short, set time. A common guide is about 1 minute per year of age, so about 4 minutes for this child. A dull, quiet spot works because nothing there rewards the child. A bedroom with toys is not a time-out, and an hour is far too long. Talking with the child during time-out gives attention. Spanking is harmful and is not recommended.",
      refs: ["Time-out often lasts about 1 minute per year of the child's age."],
      sources: [AAP_TO, AAP_DISC, HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Send him to his room with toys for an hour", why: "Toys make the space rewarding, and an hour is too long for a young child." },
      { text: "Talk through the rules with him during it", why: "Talking gives attention, which undoes the purpose of time-out." },
      { text: "Use a dull, quiet spot for 4 minutes", why: "A quiet spot for about 1 minute per year of age is how time-out works." },
      { text: "Add a spanking if he leaves the time-out", why: "Physical punishment is harmful and is not recommended." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s12-36", {
      topic: "Communicating with a client who has expressive aphasia",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "A 61-year-old client has expressive aphasia after a left-sided stroke. The client understands speech but struggles to find words and becomes tearful when trying to talk. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The client understands what is said but has trouble producing words. Giving time to answer lowers pressure. Yes-or-no questions let the client reply with a nod or a word. A picture board offers another way to state needs. Finishing sentences takes over and adds frustration. Comprehension is intact, so a loud, slow voice is not needed. Avoiding talk isolates the client.",
      sources: [WINSTEIN, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Finish sentences for the client", why: "Guessing the words takes control from the client and can add frustration." },
      { text: "Allow extra time to respond", why: "Time without pressure helps the client find and form words." },
      { text: "Ask questions with yes or no answers", why: "Simple closed questions let the client answer with little speech." },
      { text: "Speak loudly and slowly in short words", why: "The client understands speech. A loud, slow voice is not needed and can seem demeaning." },
      { text: "Offer a picture board for needs", why: "A picture board gives the client another way to communicate." },
      { text: "Limit talk to lessen frustration", why: "Avoiding talk isolates the client and removes practice." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s12-37", {
      topic: "Coping with a new chronic illness in adolescence",
      cjmm: "analyze",
      process: "caring",
      difficulty: 3,
      stem: "A 15-year-old with type 1 diabetes diagnosed 4 months ago has been skipping insulin doses at school. He can explain how insulin works. He tells the nurse, \"I'm not sick. None of my friends have to do this stuff.\" How should the nurse interpret his behavior?",
      rationale:
        "He can explain how insulin works, so a knowledge gap does not explain the missed doses. He says he is not sick and compares himself with his friends. This is denial, a common way of coping with a new chronic illness. The need to fit in with peers at this age adds to it. The stem gives no pattern of defiance toward adults and no signs of depression.",
      sources: [HOCKENBERRY, HALTER],
    }),
    kind: "mc",
    options: [
      { text: "A knowledge gap about insulin action", why: "He can explain how insulin works, so knowledge is not the problem." },
      { text: "Denial as a way to cope with the diagnosis", why: "Saying he is not sick while skipping doses reflects denial of the illness." },
      { text: "A pattern of oppositional defiant disorder", why: "The stem gives no lasting pattern of defiance toward adults." },
      { text: "Depression with loss of interest", why: "The stem gives no low mood or loss of interest." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s12-38", {
      topic: "Articles of faith before surgery",
      cjmm: "action",
      process: "culture",
      difficulty: 2,
      stem: "A 50-year-old Sikh client is being prepared for abdominal surgery. He wears a turban and a steel bracelet called a kara. Hospital policy says jewelry is removed before surgery. What should the nurse do?",
      rationale:
        "The turban and kara are articles of faith, not jewelry. Removing them without asking can cause distress. The nurse asks the client how he wants them handled. Options often include taping the kara in place or wearing a surgical head cover. Sending items home, storing them without consent or delaying surgery ignores his wishes and his rights.",
      sources: [GIGER],
    }),
    kind: "mc",
    options: [
      { text: "Remove the kara and send it home with family", why: "Removing an article of faith without asking can cause distress." },
      { text: "Have security store the turban and bracelet", why: "Storing sacred items without consent ignores his wishes." },
      { text: "Delay surgery until he removes both items", why: "A delay is not needed. Most articles of faith can be kept safely." },
      { text: "Ask how he wants his faith items handled", why: "Asking lets the team find a safe way to respect his faith." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s12-39", {
      topic: "Missed doses after long-term benzodiazepine use",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 58-year-old client has taken alprazolam 2 mg three times daily for 6 years. She was admitted 2 days ago after a fall, and the alprazolam was not prescribed on admission. She does not drink alcohol. She is anxious, cannot sleep and has a hand tremor. Heart rate is 118/minute, BP 162/94 mmHg and temperature 37.6°C (99.7°F). She says lights seem too bright and sounds too loud. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Daily alprazolam for 6 years causes physical dependence. It stopped 2 days ago on admission. Anxiety, insomnia, tremor, a heart rate of 118/minute and sensitivity to light and sound fit benzodiazepine withdrawal. Withdrawal can progress to seizures. The nurse tells the provider about the missed doses so the drug can be restarted or tapered. Seizure precautions are started. Level of consciousness, seizure activity, heart rate and BP show whether withdrawal is controlled.",
      sources: [ASAM_BZD],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Alcohol withdrawal syndrome", why: "She does not drink alcohol. The timing follows the stopped alprazolam." },
      { text: "Generalized anxiety disorder", why: "This disorder builds over months. It does not explain tremor, a fast pulse and sensory sensitivity 2 days after a stopped drug." },
      { text: "Benzodiazepine withdrawal", why: "Long daily use stopped 2 days ago, with anxiety, tremor and sensory sensitivity." },
      { text: "Thyroid storm", why: "The temperature is 37.6°C and the timing follows the missed doses, not a thyroid problem." },
    ],
    actions: [
      { text: "Give IV flumazenil", why: "Flumazenil blocks benzodiazepines and could bring on seizures in withdrawal." },
      { text: "Report the missed alprazolam", why: "The provider can restart the drug or plan a slow taper to stop withdrawal." },
      { text: "Advise her to stay off the drug", why: "Abrupt stopping is what caused withdrawal. Any taper is slow and planned." },
      { text: "Start seizure precautions", why: "Benzodiazepine withdrawal can cause seizures." },
      { text: "Raise the room lighting", why: "She finds light too bright. Brighter light adds to her sensory distress." },
    ],
    parameters: [
      { text: "Seizure activity and alertness", why: "Seizures and confusion are the dangerous stages of benzodiazepine withdrawal." },
      { text: "Serum albumin level", why: "Albumin does not guide withdrawal care." },
      { text: "Heart rate and BP", why: "Falling heart rate and BP show that withdrawal is coming under control." },
      { text: "Daily stool frequency", why: "Stool pattern does not track benzodiazepine withdrawal." },
      { text: "Urine specific gravity", why: "Urine concentration does not guide withdrawal care." },
    ],
    correct: { condition: 2, actions: [1, 3], parameters: [0, 2] },
  },
  {
    ...meta("rn-s12-40", {
      topic: "Guided imagery before a procedure",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 38-year-old client is anxious before a bone marrow biopsy and asks for a way to relax without medication. The nurse plans to use guided imagery. Which action fits this technique?",
      rationale:
        "Guided imagery uses the imagination to create a calm mental scene. The client pictures a peaceful place with sights, sounds and smells. This shifts attention from the procedure and lowers the stress response. Tensing and releasing muscles is progressive muscle relaxation. Explaining the procedure is preparatory teaching. Calming music is music therapy. Each may help, but none of them is guided imagery.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Guide the client to picture a calm place", why: "Building a detailed calm scene in the mind is the core of guided imagery." },
      { text: "Tense and relax each muscle group in turn", why: "This is progressive muscle relaxation, a different technique." },
      { text: "Explain each step of the biopsy procedure", why: "Explaining steps is preparatory teaching, not guided imagery." },
      { text: "Play music the client finds calming", why: "Calming music is music therapy, not guided imagery." },
    ],
    correct: 0,
  },
];
