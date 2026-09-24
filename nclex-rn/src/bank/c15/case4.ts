import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c15-4";

/** Case 4. Outpatient infusion clinic. Young woman with a chronic demyelinating disease on a short course of high-dose IV steroid. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Day 3 at the Infusion Clinic",
  intro:
    "A 34-year-old woman with relapsing multiple sclerosis for 6 years comes to the outpatient infusion clinic. Five days ago the vision in her left eye blurred and both legs went numb. She is receiving methylprednisolone 1000 mg IV once daily for 3 days. Today is day 3.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Relapsing multiple sclerosis for 6 years. Takes a disease-modifying drug.",
        "Last relapse 2 years ago.",
        "No history of diabetes or mood disorder.",
        "Smokes 10 cigarettes a day.",
        "Works as a bookkeeper. Lives with her husband.",
        "Weight 68 kg.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Methylprednisolone 1000 mg in 250 mL of 0.9% sodium chloride IV over 1 hour, once daily for 3 days.",
        "Fingerstick glucose before each infusion.",
        "Vital signs before and after each infusion.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 1 0900"],
        rows: [
          ["Temperature", "36.7°C (98.1°F)"],
          ["Heart rate", "76/minute"],
          ["BP", "116/74 mmHg"],
          ["Fingerstick glucose", "94 mg/dL (5.2 mmol/L)"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Findings before the last steroid dose",
        cjmm: "recognize",
        difficulty: 2,
        stem: "Before her day 3 infusion, the client describes her week. The nurse records her findings at 0900. Click to highlight each finding that needs follow-up before the infusion starts.",
        rationale:
          "Her glucose has risen from 94 mg/dL (5.2 mmol/L) on day 1 to 246 mg/dL, and she is thirsty and voiding often. Her BP has risen from 116/74 to 144/90 mmHg. Sleeping 2 hours a night and buying a car at 0300 suggest a steroid-related mood change. A metallic taste and flushing are common and minor. Clearer vision and unchanged numbness fit the relapse course.",
        sources: [SRC.nice, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report glucose in mmol/L only, so the rise is 5.2 to 13.7 mmol/L. The Medical Council of Canada random glucose range is 4.0 to 11.0 mmol/L.",
      }),
      kind: "highlight",
      passage:
        "[[Glucose 246 mg/dL (13.7 mmol/L)]]. [[Metallic taste during yesterday's infusion]]. [[BP 144/90 mmHg]]. [[Face flushed]]. [[Sleeps 2 hours a night]]. [[Left eye vision slightly clearer]]. [[Bought a car online at 0300]]. [[Legs still numb, same as day 1]]. [[Thirsty and voiding often]]. [[Oriented to person, place and time]].",
      spans: [
        { text: "Glucose 246 mg/dL (13.7 mmol/L)", why: "Her glucose was 94 mg/dL on day 1, so this rise needs follow-up." },
        { text: "Metallic taste during yesterday's infusion", why: "A metallic taste is a common, minor effect of IV methylprednisolone." },
        { text: "BP 144/90 mmHg", why: "Her BP was 116/74 mmHg on day 1. Steroids can raise BP." },
        { text: "Face flushed", why: "Facial flushing is a common, minor steroid effect." },
        { text: "Sleeps 2 hours a night", why: "Severe loss of sleep can signal a steroid-related mood change." },
        { text: "Left eye vision slightly clearer", why: "Improving vision is the hoped-for response to treatment." },
        { text: "Bought a car online at 0300", why: "Impulsive spending at night suggests elevated mood from the steroid." },
        { text: "Legs still numb, same as day 1", why: "Unchanged numbness fits the relapse and is not a new problem." },
        { text: "Thirsty and voiding often", why: "Thirst and frequent urination suggest high glucose." },
        { text: "Oriented to person, place and time", why: "Normal orientation needs no follow-up." },
      ],
      correct: [0, 2, 4, 6, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Mood change on high-dose steroid",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The client says she sleeps 2 hours a night and does not feel tired. Her husband adds that since the first infusion she talks fast and snaps at him when he interrupts. For each finding, specify what it is most consistent with.",
        rationale:
          "High-dose corticosteroids can cause elevated mood, less need for sleep, fast speech, irritability and impulsive acts. These began after the first dose in a client with no mood disorder. A rising glucose with thirst and frequent urination is a metabolic effect. A metallic taste and flushing are expected and minor.",
        sources: [SRC.nice, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Steroid-related mood change", "Steroid-related metabolic change", "Expected minor infusion effect"],
      rows: [
        { text: "Sleeping 2 hours a night without feeling tired", correct: [0], why: "Less need for sleep is a feature of elevated mood." },
        { text: "Glucose 246 mg/dL (13.7 mmol/L)", correct: [1], why: "Steroids raise glucose by increasing liver glucose output and insulin resistance." },
        { text: "Metallic taste during the infusion", correct: [2], why: "A metallic taste is common during the infusion and passes." },
        { text: "Fast speech and irritability", correct: [0], why: "Pressured speech and irritability fit a steroid-related mood change." },
        { text: "Thirst and frequent urination", correct: [1], why: "High glucose draws water into the urine and causes thirst." },
        { text: "Buying a car online at 0300", correct: [0], why: "Impulsive spending fits elevated mood." },
        { text: "Flushed face", correct: [2], why: "Flushing is a common, minor steroid effect." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PPT",
        topic: "Cause of new thirst on steroids",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "Her glucose was 94 mg/dL (5.2 mmol/L) on day 1 and is 246 mg/dL (13.7 mmol/L) today. Her temperature is 36.8°C (98.2°F) and she has no burning on urination. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Her glucose was normal before the first dose and is 246 mg/dL after two. She has no diabetes history. Thirst and frequent urination follow the high glucose. This points to steroid-induced hyperglycemia. A normal temperature and no burning argue against a urinary infection. Diabetes insipidus does not raise glucose.",
        sources: [SRC.brunner, SRC.nice],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client's thirst and frequent urination are most likely caused by {0} as shown by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "a urinary tract infection", why: "She has a normal temperature and no burning on urination." },
            { text: "steroid-induced hyperglycemia", why: "The glucose rose from normal after the steroid started, and thirst follows high glucose." },
            { text: "diabetes insipidus", why: "Diabetes insipidus causes thirst and dilute urine but does not raise glucose." },
            { text: "a new relapse affecting the bladder", why: "A bladder relapse causes urgency, not thirst with a high glucose." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a BP of 144/90 mmHg", why: "A higher BP is a steroid effect but does not explain the thirst." },
            { text: "a metallic taste in her mouth", why: "A metallic taste is a minor infusion effect unrelated to thirst." },
            { text: "numbness in both legs", why: "Leg numbness is part of the relapse, not the cause of thirst." },
            { text: "a glucose of 246 mg/dL", why: "A glucose this high causes osmotic diuresis and thirst." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "a normal glucose before the first dose", why: "A glucose of 94 mg/dL on day 1 ties the rise to the steroid." },
            { text: "a slightly clearer left eye", why: "Improving vision reflects the relapse treatment, not the thirst." },
            { text: "a flushed face during infusions", why: "Flushing is a minor effect and does not explain the thirst." },
            { text: "sleep of 2 hours a night", why: "Poor sleep reflects a mood effect, not the cause of thirst." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Sleep and diet after a steroid pulse",
        cjmm: "generate",
        process: "teaching",
        difficulty: 2,
        stem: "Today's infusion is her last dose. The nurse plans teaching to help her sleep and to limit her glucose rise over the next few days. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Caffeine late in the day delays sleep. A fixed bedtime and wake time steady the sleep cycle. Water in place of sweetened drinks limits sugar intake while glucose is high. A long afternoon nap cuts night sleep further. Fruit juice and a large starchy snack at bedtime raise glucose.",
        sources: [SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Take a 2-hour nap each afternoon", why: "A long daytime nap reduces the drive to sleep at night." },
        { text: "Avoid caffeine after noon", why: "Caffeine late in the day delays sleep onset." },
        { text: "Drink fruit juice to replace fluid lost in urine", why: "Fruit juice adds sugar and raises glucose further." },
        { text: "Keep the same bedtime and wake time each day", why: "A regular schedule steadies the sleep cycle." },
        { text: "Eat a large starchy snack at bedtime", why: "A large starchy snack raises glucose overnight." },
        { text: "Choose water over sweetened drinks", why: "Water replaces fluid without adding sugar." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Handoff after a steroid course",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The client will go home after today's infusion. The nurse calls the multiple sclerosis clinic nurse who will follow her by phone. Which three findings should the nurse include in the handoff? Select three.",
        rationale:
          "A handoff passes on the findings that need follow-up. The high glucose needs rechecking as the steroid wears off. The mood change and loss of sleep need watching for safety. The rise in BP needs a repeat reading. A metallic taste and flushing end with the infusions. A healthy IV site needs no follow-up after the cannula is removed.",
        sources: [SRC.sbar, SRC.nice],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Metallic taste during each infusion", why: "This minor effect ends with the infusions and needs no follow-up." },
        { text: "Glucose up to 246 mg/dL (13.7 mmol/L)", why: "The glucose needs rechecking until it returns to normal." },
        { text: "Flushed face during the infusions", why: "Flushing is minor and ends with the infusions." },
        { text: "Little sleep and impulsive spending", why: "A steroid-related mood change needs watching for safety." },
        { text: "BP up to 144/90 mmHg from 116/74 mmHg", why: "A raised BP needs a repeat reading after the course ends." },
        { text: "IV site in the left forearm without redness", why: "A healthy site needs no follow-up once the cannula is out." },
      ],
      correct: [1, 3, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Health habits in a demyelinating disease",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Three weeks later the nurse calls the client to follow up on teaching about staying well with multiple sclerosis. Which statement by the client shows understanding?",
        rationale:
          "Smoking speeds the progression of disability in multiple sclerosis. She smokes 10 cigarettes a day, so a quit date shows she has acted on the teaching. Vitamin D is not given solely to treat the disease. Steroids are not supplied for self-treatment at home. Regular exercise is encouraged and does not trigger relapses.",
        sources: [SRC.nice],
      }),
      kind: "mc",
      options: [
        { text: "\"I will take extra vitamin D to stop my relapses.\"", why: "Vitamin D is not given solely to treat multiple sclerosis." },
        { text: "\"I will ask for steroid tablets to keep at home.\"", why: "Steroids are not supplied for self-treatment of future relapses." },
        { text: "\"I will avoid exercise so I do not cause a relapse.\"", why: "Regular exercise is encouraged and helps fatigue and fitness." },
        { text: "\"I have set a date to stop smoking.\"", why: "Stopping smoking slows the progression of disability." },
      ],
      correct: 3,
    },
  ],
};
