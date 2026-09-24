import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c18-2";

/** Case 2. Community prenatal clinic. First prenatal visit in a second pregnancy. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A First Visit at the Prenatal Clinic",
  intro:
    "A 27-year-old woman comes to a community prenatal clinic for her first prenatal visit. She is 9 weeks pregnant by her last menstrual period. This is her second pregnancy. Her son is 3 years old. She works as a grocery cashier.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 2, para 1. First pregnancy: preeclampsia at 36 weeks, induced vaginal birth.",
        "Her mother had preeclampsia. No personal or family history of diabetes. Glucose screening in the first pregnancy was normal.",
        "Smokes 6 cigarettes a day. No alcohol since the positive pregnancy test. Takes no vitamins or other medications.",
        "Has a pet cat at home. Mild nausea on waking. Keeps food and fluids down.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      text: "BP 118/74 mmHg. Heart rate 84/minute. Temperature 36.7°C (98.1°F). Weight 86 kg. BMI 31.",
    },
    {
      title: "Laboratory Results",
      text: [
        "Blood type O, Rh negative. Antibody screen negative.",
        "Hemoglobin 10.2 g/dL (102 g/L).",
        "Urine protein negative. Urine glucose negative.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "HPM",
        topic: "Screening results at a first prenatal visit",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the client's history and first visit results. Which findings need follow-up? Select four.",
        rationale:
          "A hemoglobin of 10.2 g/dL is below the first trimester cutoff for anemia. An Rh-negative mother needs Rh immune globulin planning. Preeclampsia in a past pregnancy is a high risk factor for it again. Smoking harms fetal growth. A BP of 118/74 mmHg, mild morning nausea, a negative urine protein and a negative antibody screen are expected.",
        refs: ["Anemia in the first trimester is a hemoglobin below 11 g/dL (110 g/L)."],
        sources: [SRC.acogAnemia, SRC.acogRh, SRC.aspirin, SRC.tobacco],
      }),
      kind: "msn",
      select: 4,
      options: [
        { text: "Hemoglobin 10.2 g/dL", why: "A hemoglobin of 10.2 g/dL (102 g/L) is below the 11 g/dL cutoff for anemia in the first trimester." },
        { text: "BP 118/74 mmHg", why: "This BP is normal and gives a useful baseline for later visits." },
        { text: "Rh-negative blood type", why: "An Rh-negative mother needs Rh immune globulin to prevent sensitization." },
        { text: "Mild nausea on waking", why: "Mild nausea with food and fluids kept down is common in the first trimester." },
        { text: "Preeclampsia in her first pregnancy", why: "A past preeclampsia is a high risk factor for preeclampsia again." },
        { text: "Urine negative for protein", why: "Negative urine protein is an expected, normal baseline." },
        { text: "Smokes 6 cigarettes a day", why: "Smoking in pregnancy raises the risk of poor fetal growth and preterm birth." },
        { text: "Negative antibody screen", why: "A negative screen shows she is not yet sensitized. That is the desired result." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Linking prenatal findings to later risks",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse links each finding to the pregnancy risk it raises. For each finding, specify whether it relates to preeclampsia, Rh sensitization or anemia.",
        rationale:
          "A past preeclampsia is a high risk factor. Her mother's preeclampsia and a BMI over 30 are moderate risk factors. An Rh-negative mother with a negative antibody screen can still be sensitized by fetal blood. A hemoglobin of 10.2 g/dL is anemia now. Without an iron-containing supplement, her stores cannot keep pace with pregnancy needs.",
        refs: ["A BMI over 30 is a moderate risk factor for preeclampsia.", "Anemia in the first trimester is a hemoglobin below 11 g/dL (110 g/L)."],
        sources: [SRC.aspirin, SRC.acogRh, SRC.acogAnemia],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Preeclampsia", "Rh sensitization", "Anemia"],
      rows: [
        { text: "Preeclampsia in her first pregnancy", correct: [0], why: "A past preeclampsia is one of the strongest risk factors for it again." },
        { text: "Her mother had preeclampsia", correct: [0], why: "A mother or sister with preeclampsia is a moderate risk factor." },
        { text: "BMI 31", correct: [0], why: "A BMI over 30 is a moderate risk factor for preeclampsia." },
        { text: "Rh negative with a negative antibody screen", correct: [1], why: "She is not yet sensitized, but fetal Rh-positive blood could sensitize her." },
        { text: "Hemoglobin 10.2 g/dL (102 g/L)", correct: [2], why: "This value is below the 11 g/dL cutoff for the first trimester." },
        { text: "Takes no prenatal vitamin", correct: [2], why: "Without supplemental iron, stores fall as blood volume and fetal needs rise." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Ranking pregnancy risks at intake",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "The nurse weighs the history and results to decide which later complication the client is most at risk for. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Preeclampsia in her first pregnancy is a high risk factor. Her mother's preeclampsia adds a moderate one. Together they place her at high risk. A negative antibody screen and planned Rh immune globulin make sensitization unlikely. Her past glucose screen was normal. Mild nausea with food kept down does not suggest hyperemesis.",
        sources: [SRC.aspirin, SRC.acogRh, SRC.nvp],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "gestational diabetes", why: "Her glucose screen in the first pregnancy was normal and no relative has diabetes." },
            { text: "preeclampsia", why: "A past preeclampsia and a mother with preeclampsia both raise her risk." },
            { text: "hyperemesis gravidarum", why: "Her nausea is mild and she keeps food and fluids down." },
            { text: "Rh sensitization", why: "Her antibody screen is negative, and timely Rh immune globulin prevents sensitization." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a BP of 118/74 mmHg", why: "A normal BP now does not predict or rule out a later complication." },
            { text: "mild nausea on waking", why: "Mild morning nausea is expected at 9 weeks." },
            { text: "preeclampsia in her first pregnancy", why: "A past preeclampsia is a high risk factor for it again." },
            { text: "a negative antibody screen", why: "A negative screen is a reassuring result, not a risk factor." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "normal glucose screening before", why: "A normal past glucose screen lowers concern for diabetes." },
            { text: "urine negative for protein", why: "Negative urine protein is a normal baseline." },
            { text: "a hemoglobin of 10.2 g/dL", why: "A hemoglobin of 10.2 g/dL (102 g/L) shows anemia, not a risk of the listed conditions." },
            { text: "her mother's history of preeclampsia", why: "A mother with preeclampsia is a moderate risk factor for it." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Timing prenatal medications and vaccines",
        cjmm: "generate",
        difficulty: 4,
        stem: "The rubella result returns. The nurse plans the client's medications and vaccines with the primary health care provider. Drag the medication or vaccine that fits each time in the pregnancy.",
        tabs: [{ title: "Additional Results", text: "Rubella IgG: not immune." }],
        rationale:
          "A prenatal vitamin with folic acid and iron starts now for her anemia and fetal needs. Low-dose aspirin for her high preeclampsia risk starts after 12 weeks. An Rh-negative, unsensitized mother gets Rh immune globulin at about 28 weeks. Rubella vaccine is live, so a nonimmune mother gets MMR after the birth. A live nasal influenza vaccine is not given in pregnancy.",
        sources: [SRC.aspirin, SRC.acogRh, SRC.mmrAcip, SRC.acogAnemia],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Now, at 9 weeks", "After 12 weeks", "At about 28 weeks", "After the birth"],
      tokens: [
        { text: "Prenatal vitamin with folic acid and iron", why: "Folic acid and iron are started now. Her hemoglobin is low and she takes no vitamins." },
        { text: "Low-dose aspirin 81 mg daily", why: "Aspirin 81 mg daily after 12 weeks lowers the risk of preeclampsia in high-risk mothers." },
        { text: "Rho(D) immune globulin", why: "An unsensitized Rh-negative mother receives it at about 28 weeks." },
        { text: "Measles, mumps and rubella vaccine", why: "MMR is a live vaccine. A nonimmune mother receives it after the birth." },
        { text: "Live attenuated influenza vaccine", why: "The live nasal vaccine is not given in pregnancy. The inactivated shot is used instead." },
        { text: "Doxylamine-pyridoxine for nausea", why: "Her nausea is mild and she keeps food down, so diet changes come first." },
      ],
      correct: [0, 1, 2, 3],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to reduced smoking in pregnancy",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The client says, \"I already cut down to 6 cigarettes a day. Quitting all the way would stress me and the baby more than a few smokes.\" Which response by the nurse is best?",
        rationale:
          "No level of smoking is safe in pregnancy. Behavioral counseling helps pregnant people quit. The best response credits the effort she has made and invites her to plan the next step. Calling a lower amount safe gives false information. Threats raise defensiveness. Waiting until after the birth leaves the fetus exposed for months.",
        sources: [SRC.tobacco],
      }),
      kind: "mc",
      options: [
        { text: "\"Six a day is a safe amount, so stay at that number.\"", why: "No amount of smoking is safe in pregnancy. This gives false reassurance." },
        { text: "\"Cutting down took effort. What would help you stop for good?\"", why: "It credits her progress and opens a plan to quit, which counseling supports." },
        { text: "\"You need to quit right now or the baby will be harmed.\"", why: "A threat raises guilt and defensiveness and does not build a plan." },
        { text: "\"Stress is bad for the baby too, so wait until after the birth.\"", why: "Waiting exposes the fetus to smoke for the rest of the pregnancy." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Nausea and food safety teaching in pregnancy",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse teaches the client about easing nausea, safe food handling and living with her cat. Which statements by the client show understanding? Select all that apply.",
        rationale:
          "Crackers before rising and small, frequent meals ease pregnancy nausea. Meat cooked to a safe temperature checked with a thermometer kills Toxoplasma. Gloves for gardening block contact with cat feces in soil. Someone else should change the litter. Skipping meals worsens nausea. Raw meat can infect the cat.",
        sources: [SRC.nvp, SRC.toxo],
      }),
      kind: "sata",
      options: [
        { text: "\"I will eat a few crackers before getting up.\"", why: "Dry crackers before rising help ease morning nausea." },
        { text: "\"I will scoop the cat litter myself each morning.\"", why: "Another person should change the litter to limit contact with Toxoplasma." },
        { text: "\"I will cook meat to a safe heat using a thermometer.\"", why: "A thermometer confirms the meat is hot enough to kill Toxoplasma." },
        { text: "\"I will skip a meal whenever I start to feel queasy.\"", why: "An empty stomach tends to worsen nausea. Small, frequent meals help." },
        { text: "\"I will eat small meals every 2 to 3 hours.\"", why: "Small, frequent meals keep the stomach from getting empty and ease nausea." },
        { text: "\"I will feed the cat raw meat to keep it healthy.\"", why: "Raw meat can carry Toxoplasma and infect the cat." },
        { text: "\"I will wear gloves when I work in the garden.\"", why: "Soil can hold cat feces, so gloves limit contact with Toxoplasma." },
      ],
      correct: [0, 2, 4, 6],
    },
  ],
};
