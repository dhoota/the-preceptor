import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c09-3";

const TARGETS =
  "Pregnancy glucose goals are fasting under 95 mg/dL (5.3 mmol/L) and 1 hour after a meal under 140 mg/dL (7.8 mmol/L).";

/** Case 3. Prenatal clinic. Glucose above goal at 32 weeks on a meal plan alone. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "A Glucose Log at the Prenatal Clinic",
  intro:
    "A 34-year-old woman, gravida 2, para 1, comes to the prenatal clinic at 32 weeks of gestation. Gestational diabetes was diagnosed at 26 weeks. She has followed a meal plan and checked her glucose 4 times a day since then. She brings her glucose log.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 2, para 1. First baby born at 39 weeks, weighing 4200 g.",
        "Body mass index before pregnancy 33.",
        "Gestational diabetes diagnosed at 26 weeks by a 3-hour glucose tolerance test.",
        "Managed with a meal plan and a walk after dinner.",
        "Works as a bank teller. Eats lunch at her desk. Lunch is usually white rice with chicken and a large sweet iced tea.",
      ].join("\n"),
    },
    {
      title: "Glucose Log",
      table: {
        head: ["Day, mg/dL (mmol/L)", "Fasting", "1 hour after breakfast", "1 hour after lunch", "1 hour after dinner"],
        rows: [
          ["Monday", "102 (5.7)", "128 (7.1)", "152 (8.4)", "134 (7.4)"],
          ["Tuesday", "99 (5.5)", "131 (7.3)", "148 (8.2)", "129 (7.2)"],
          ["Wednesday", "104 (5.8)", "126 (7.0)", "157 (8.7)", "138 (7.7)"],
          ["Thursday", "101 (5.6)", "133 (7.4)", "149 (8.3)", "132 (7.3)"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "HPM",
        topic: "Clinic findings in gestational diabetes",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse reviews the glucose log and writes the clinic note below. Click to highlight the findings that require follow-up.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "Clinic visit"],
              rows: [
                ["BP", "118/74 mmHg"],
                ["Fetal heart rate", "142/minute"],
                ["Fundal height", "35 cm"],
              ],
            },
          },
        ],
        refs: [TARGETS, "From 20 to 36 weeks, fundal height in cm is expected to match the weeks of gestation within 2 cm."],
        rationale:
          "A fundal height of 35 cm at 32 weeks is more than 2 cm above the expected value. This suggests excess fetal growth or excess amniotic fluid. Every fasting value is above 95 mg/dL (5.3 mmol/L). Every reading after lunch is above 140 mg/dL (7.8 mmol/L). A large sweet tea at lunch explains the lunch peak. The BP, fetal heart rate, urine protein and fetal movement are normal.",
        sources: [SRC.ada, SRC.lowdermilk, { body: "Feig DS, Berger H, Donovan L, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Diabetes and Pregnancy. Canadian Journal of Diabetes 42(Suppl 1):S255", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-36" }],
        canada: "Diabetes Canada (2018) uses the same pregnancy targets in mmol/L only, fasting below 5.3 and 1 hour after meals below 7.8. It prefers a 50 g challenge then a 75 g test to diagnose, not a 3-hour test.",
      }),
      kind: "highlight",
      passage:
        "[[BP 118/74 mmHg]]. [[Fetal heart rate 142/minute]]. [[Fundal height 35 cm]]. [[Urine negative for protein]]. [[Fasting glucose above goal on all 4 days]]. [[Glucose 1 hour after lunch above goal on all 4 days]]. [[Glucose after breakfast and dinner within goal]]. [[Drinks a large sweet iced tea with lunch]]. [[Reports active fetal movement]].",
      spans: [
        { text: "BP 118/74 mmHg", why: "This BP is normal and shows no sign of a hypertensive disorder." },
        { text: "Fetal heart rate 142/minute", why: "A fetal heart rate of 142/minute is within the normal range." },
        { text: "Fundal height 35 cm", why: "At 32 weeks, 35 cm is more than 2 cm above the expected height." },
        { text: "Urine negative for protein", why: "Negative protein is expected and needs no follow-up." },
        { text: "Fasting glucose above goal on all 4 days", why: "Fasting values of 99 to 104 are above the 95 mg/dL (5.3 mmol/L) goal." },
        { text: "Glucose 1 hour after lunch above goal on all 4 days", why: "Readings of 148 to 157 exceed the 140 mg/dL (7.8 mmol/L) goal." },
        { text: "Glucose after breakfast and dinner within goal", why: "These readings are all below 140 mg/dL and need no change." },
        { text: "Drinks a large sweet iced tea with lunch", why: "A sugary drink at lunch fits the high readings after that meal." },
        { text: "Reports active fetal movement", why: "Active fetal movement is reassuring." },
      ],
      correct: [2, 4, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Reading a pregnancy glucose log",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse analyzes the pattern in the glucose log against the pregnancy goals. Complete the following sentence by choosing from the lists of options.",
        refs: [TARGETS],
        rationale:
          "Fasting values of 99 to 104 are all above the 95 mg/dL (5.3 mmol/L) goal. Lunch readings of 148 to 157 are the highest in the log and all exceed 140 mg/dL. Breakfast and dinner readings stay under 140 mg/dL. The log has no bedtime checks, so it cannot show a bedtime pattern.",
        sources: [SRC.ada, SRC.acog190, { body: "Feig DS, Berger H, Donovan L, et al. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Diabetes and Pregnancy. Canadian Journal of Diabetes 42(Suppl 1):S255", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-36" }],
        canada: "Canadian meters and labs report glucose in mmol/L only. Diabetes Canada (2018) sets the same targets in pregnancy, so fasting values of 5.5 to 5.8 mmol/L are above the 5.3 mmol/L goal.",
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The meal plan alone is not controlling {0}, and the highest readings follow {1}.",
      blanks: [
        {
          options: [
            { text: "the breakfast readings", why: "Breakfast readings of 126 to 133 are within goal." },
            { text: "the dinner readings", why: "Dinner readings of 129 to 138 are within goal." },
            { text: "the fasting glucose", why: "Every fasting value from 99 to 104 is above the 95 mg/dL goal." },
            { text: "the bedtime readings", why: "The log has no bedtime checks, so no bedtime pattern can be judged." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "lunch", why: "Readings of 148 to 157 after lunch are the highest in the log." },
            { text: "breakfast", why: "Readings after breakfast top out at 133." },
            { text: "dinner", why: "Readings after dinner top out at 138." },
            { text: "the overnight fast", why: "Fasting values are high but lower than the readings after lunch." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "HPM",
        topic: "Fetal concern with poorly controlled glucose",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse notes a fundal height of 35 cm at 32 weeks of gestation with glucose above goal. The client's first baby weighed 4200 g. Which fetal problem is the nurse most concerned about?",
        refs: ["From 20 to 36 weeks, fundal height in cm is expected to match the weeks of gestation within 2 cm."],
        rationale:
          "Maternal glucose crosses the placenta. The fetus responds with extra insulin, which drives growth and fat storage. A fundal height more than 2 cm above the weeks of gestation fits a large fetus. A previous baby of 4200 g and glucose above goal add to the concern. Growth restriction and low fluid would make the fundal height smaller, not larger.",
        sources: [SRC.acog190, SRC.lowdermilk],
      }),
      kind: "mc",
      options: [
        { text: "Excess fetal growth", why: "High maternal glucose drives fetal insulin and growth, which fits the large fundal height." },
        { text: "Fetal growth restriction", why: "Growth restriction makes the fundal height smaller than the weeks of gestation." },
        { text: "Low amniotic fluid volume", why: "Low fluid makes the fundal height smaller, not larger." },
        { text: "Breech presentation", why: "Presentation does not change fundal height and is not linked to high glucose." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Lunch changes in gestational diabetes",
        cjmm: "generate",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse plans advice to lower the client's glucose after lunch. Drag the best choices into the sentence below.",
        rationale:
          "The large sweet iced tea adds fast sugar to a starchy lunch. Water in its place removes that sugar with no loss of nutrition. Muscle work after a meal takes up glucose and blunts the peak. A short walk suits a desk job. A nap or rest after meals does not lower glucose. Skipping lunch raises the risk of ketosis and of overeating later.",
        sources: [SRC.acog190, SRC.ada],
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "For her lunch drink the nurse suggests {0}, and for activity the nurse suggests {1}.",
      targets: ["Lunch drink", "Activity"],
      tokens: [
        { text: "fruit juice in place of sweet tea", why: "Fruit juice is also a fast sugar and would keep the lunch peak high." },
        { text: "a short walk after lunch", why: "Working muscles take up glucose and lower the reading after the meal." },
        { text: "a nap after lunch", why: "Rest after a meal does not help muscles take up glucose." },
        { text: "water in place of sweet tea", why: "Water removes the fast sugar in the tea without adding carbohydrate." },
        { text: "skipping lunch", why: "Skipping meals in pregnancy can cause ketosis and later overeating." },
        { text: "bed rest after meals", why: "Bed rest does not lower glucose and adds risks such as clots." },
      ],
      correct: [3, 1],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Guilt about needing insulin in pregnancy",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The primary health care provider adds insulin to the plan. The client begins to cry and says, \"I must have done this to my baby. I tried so hard.\" Which response by the nurse is most appropriate?",
        rationale:
          "The client is expressing guilt and fear. Reflecting her feeling invites her to say more and shows the nurse is listening. Telling her not to blame herself or not to worry dismisses the feeling. Moving straight to insulin teaching changes the subject before she is ready to learn.",
        sources: [SRC.lowdermilk],
      }),
      kind: "mc",
      options: [
        { text: "\"You should not blame yourself for this.\"", why: "This reassurance dismisses her feeling and closes the conversation." },
        { text: "\"Lots of women need insulin, so try not to worry.\"", why: "This minimizes her concern and gives false comfort." },
        { text: "\"Let's focus on learning the insulin steps now.\"", why: "This changes the subject before her distress is addressed." },
        { text: "\"You sound worried that you harmed your baby.\"", why: "Reflecting her feeling invites her to share and shows the nurse is listening." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Evaluating insulin teaching in pregnancy",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "The primary health care provider prescribes NPH insulin 10 units subcutaneously at bedtime and insulin lispro 4 units subcutaneously before lunch. After teaching, which two statements by the client show understanding? Select two.",
        rationale:
          "NPH is a cloudy suspension, so the vial is rolled gently to mix it without bubbles. Insulin can cause low glucose, so she carries fast glucose at work. Lispro covers the lunch meal and is not taken at bedtime or when lunch is skipped. Shaking the vial hard adds bubbles that make the dose inaccurate. Glucose checks continue so the doses can be adjusted.",
        sources: [SRC.ada, SRC.lowdermilk],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will roll the NPH vial gently before drawing it up.\"", why: "Rolling mixes the cloudy suspension evenly without bubbles." },
        { text: "\"I will take the lispro at bedtime with the NPH.\"", why: "Lispro is prescribed before lunch to cover that meal, not at bedtime." },
        { text: "\"I will take the lispro even if I skip lunch.\"", why: "Rapid-acting insulin without food can cause low glucose." },
        { text: "\"I will keep glucose tablets with me at work.\"", why: "Fast glucose at hand treats a low reading quickly." },
        { text: "\"I will shake the NPH vial hard to mix it.\"", why: "Shaking creates bubbles and can give an inaccurate dose." },
        { text: "\"I can stop checking my glucose now that I take insulin.\"", why: "Glucose checks guide insulin dose changes and must continue." },
      ],
      correct: [0, 3],
    },
  ],
};
