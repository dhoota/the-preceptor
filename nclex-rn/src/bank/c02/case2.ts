import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c02-2";

/** Case 2. Labor and birth unit. First pregnancy at 34 weeks with severe hypertension. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "A Headache That Will Not Ease at 34 Weeks",
  intro:
    "A 29-year-old woman in her first pregnancy comes to the labor and birth unit at 1900. She is at 34 weeks of gestation. She has had a headache since the morning that acetaminophen did not relieve. She says she sees spots. Her rings have felt tight this week.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 1, para 0. Weight 78 kg.",
        "Prenatal BP 112/70 mmHg at 20 weeks. No history of hypertension.",
        "Fundal height 33 cm. No contractions. No vaginal bleeding. Uterus soft and nontender.",
        "Lungs clear. Patellar reflexes 3+ with 2 beats of ankle clonus.",
        "Fetal heart rate baseline 140/minute with moderate variability. No decelerations.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1900", "1915"],
        rows: [
          ["BP", "164/112 mmHg", "166/110 mmHg"],
          ["Heart rate", "92/minute", "94/minute"],
          ["Respiratory rate", "18/minute", "18/minute"],
          ["Temperature", "36.9°C (98.4°F)", "Not taken"],
          ["SpO2 on room air", "98%", "98%"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Platelets", "188 000/mm3", "150 000 to 400 000/mm3"],
          ["AST", "88 units/L", "10 to 40 units/L"],
          ["ALT", "94 units/L", "7 to 35 units/L"],
          ["Creatinine", "0.8 mg/dL (71 micromol/L)", "0.5 to 1.1 mg/dL"],
          ["Urine protein to creatinine ratio", "0.9", "Below 0.3"],
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
        topic: "Warning findings in late pregnancy",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse reviews the admission findings. Which four findings require immediate follow-up? Select four.",
        rationale:
          "A BP of 166/110 mmHg is in the severe range. A headache that acetaminophen did not relieve, with spots in the vision, points to cerebral irritability. An AST of 88 units/L is more than twice the upper limit of 40 units/L. Reflexes of 3+ with clonus show a nervous system at risk of seizure. The platelets, creatinine, fundal height and fetal heart rate are within expected limits.",
        refs: [
          "A BP of 160 mmHg systolic or more, or 110 mmHg diastolic or more, is in the severe range.",
          "Liver transaminases at twice the upper reference limit or more signal impaired liver function.",
          "After 20 weeks, fundal height in cm is expected to be within 2 of the weeks of gestation.",
        ],
        sources: [SRC.acog, SRC.lowdermilk, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results in SI units, so the platelet count reads 188 x 10^9/L and the creatinine 71 micromol/L. The Medical Council of Canada platelet range is 130 to 380 x 10^9/L.",
      }),
      kind: "msn",
      select: 4,
      options: [
        { text: "Platelets 188 000/mm3", why: "The count is within the reference range of 150 000 to 400 000/mm3." },
        { text: "BP 166/110 mmHg", why: "Both the systolic and the diastolic values are in the severe range." },
        { text: "Headache with spots in vision", why: "A headache that medicine does not relieve, with visual spots, is a cerebral warning sign." },
        { text: "Creatinine 0.8 mg/dL (71 micromol/L)", why: "The creatinine is within the reference range in the chart." },
        { text: "AST 88 units/L", why: "The AST is more than twice the upper limit of 40 units/L." },
        { text: "Fundal height 33 cm at 34 weeks", why: "Fundal height within 2 cm of the weeks of gestation is expected." },
        { text: "Patellar reflexes 3+ with clonus", why: "Brisk reflexes with clonus show irritability that can lead to a seizure." },
        { text: "Fetal baseline 140/minute", why: "A baseline of 140/minute with moderate variability is reassuring." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Interpreting maternal and fetal findings",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse analyzes the maternal and fetal findings. Complete the following sentences by choosing from the lists of options.",
        rationale:
          "New hypertension after 20 weeks with a protein to creatinine ratio of 0.9 is preeclampsia. A BP of 166/110 mmHg, a headache with visual spots and an AST of 88 units/L are severe features. No history of hypertension and a BP of 112/70 mmHg at 20 weeks make chronic hypertension unlikely. The fetal baseline of 140/minute with moderate variability and no decelerations is reassuring.",
        refs: [
          "A urine protein to creatinine ratio of 0.3 or more shows proteinuria in pregnancy.",
          "A normal fetal heart rate baseline is 110 to 160/minute.",
        ],
        sources: [SRC.acog, SRC.lowdermilk, { body: "Magee LA, Smith GN, Bloch C, et al. Society of Obstetricians and Gynaecologists of Canada", work: "Guideline No. 426: Hypertensive Disorders of Pregnancy: Diagnosis, Prediction, Prevention, and Management. J Obstet Gynaecol Can 44(5):547", year: 2022, url: "https://pubmed.ncbi.nlm.nih.gov/35577426/" }, { body: "von Dadelszen P, Magee LA", work: "Preventing deaths due to the hypertensive disorders of pregnancy. Best Practice and Research Clinical Obstetrics and Gynaecology 36:83", year: 2016, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5096310/" }],
        canada: "SOGC Guideline No. 426 (2022) calls headache, visual symptoms and a raised AST adverse conditions of preeclampsia. SOGC keeps the term severe preeclampsia for severe complications that call for delivery, such as eclampsia.",
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The client's findings are most consistent with {0}. The fetal heart rate tracing shows {1}.",
      blanks: [
        {
          options: [
            { text: "gestational hypertension", why: "Gestational hypertension has no proteinuria or organ signs. She has both." },
            { text: "chronic hypertension", why: "She has no history of hypertension and her BP was 112/70 mmHg at 20 weeks." },
            { text: "preeclampsia with severe features", why: "Severe range BP, cerebral signs and raised liver enzymes are severe features." },
            { text: "preeclampsia without severe features", why: "Her BP, headache and liver enzymes are severe features." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a normal baseline with moderate variability", why: "A baseline of 140/minute with moderate variability is reassuring." },
            { text: "a baseline above the normal range", why: "A baseline of 140/minute is within 110 to 160/minute." },
            { text: "minimal baseline variability", why: "The tracing shows moderate variability, not minimal." },
            { text: "recurrent late decelerations", why: "The tracing shows no decelerations." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Priority complication of severe preeclampsia",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "At 1930 the client says her headache is worse. Her BP is 168/112 mmHg. She has had no contractions or bleeding. Which complication is the nurse's priority concern?",
        rationale:
          "A worsening headache, visual spots, brisk reflexes with clonus and a BP of 168/112 mmHg show rising cerebral irritability. This puts her at high risk of an eclamptic seizure. A seizure threatens both the airway and the fetus. The uterus is soft with no bleeding, which does not suggest abruption. Clear lungs and an SpO2 of 98% do not suggest pulmonary edema. There are no contractions.",
        sources: [SRC.acog, SRC.lowdermilk],
      }),
      kind: "mc",
      options: [
        { text: "Eclamptic seizure", why: "Worsening headache, visual spots and clonus with severe BP signal a coming seizure." },
        { text: "Placental abruption", why: "Abruption causes pain, a firm uterus or bleeding. Her uterus is soft with no bleeding." },
        { text: "Pulmonary edema", why: "Her lungs are clear and her SpO2 is 98% on room air." },
        { text: "Preterm labor", why: "She has no contractions, so labor is not the present concern." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Planning for magnesium sulfate therapy",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The primary health care provider prescribes magnesium sulfate IV and labetalol IV. The nurse plans care for the infusion. Drag the words to fill in each blank.",
        rationale:
          "Seizure precautions include padded side rails and a dim, quiet room, because light and noise can trigger a seizure. Calcium gluconate reverses magnesium toxicity, so it is kept at hand. Magnesium leaves the body in urine. Toxicity first shows as lost reflexes, and slow breathing follows at higher levels. The nurse checks reflexes, respirations and urine output every hour.",
        sources: [SRC.acog, SRC.lowdermilk],
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "The nurse plans seizure precautions with {0}. The nurse keeps {1} available as the antidote. During the infusion the nurse checks {2} every hour.",
      targets: ["Seizure precautions", "Antidote", "Hourly checks"],
      tokens: [
        { text: "a bright, open room for close watching", why: "Bright light and activity can trigger a seizure. The room is kept dim and quiet." },
        { text: "calcium gluconate", why: "Calcium gluconate reverses the effects of magnesium toxicity." },
        { text: "bowel sounds, weight and oral intake", why: "These do not show early magnesium toxicity." },
        { text: "padded side rails and a dim, quiet room", why: "Padding prevents injury, and low stimulation lowers the seizure risk." },
        { text: "protamine sulfate", why: "Protamine reverses heparin. It has no effect on magnesium." },
        { text: "reflexes, respirations and urine output", why: "Lost reflexes are the first toxicity sign, slow breathing follows, and urine clears magnesium." },
      ],
      correct: [3, 1, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Magnesium sulfate maintenance rate",
        cjmm: "action",
        difficulty: 3,
        stem: "The loading dose is complete. The prescription is magnesium sulfate 2 g/hour IV. The pharmacy supplies magnesium sulfate 40 g in 1000 mL of lactated Ringer's solution. At what rate should the nurse set the infusion pump?",
        rationale:
          "The bag holds 40 g in 1000 mL, so each mL holds 0.04 g. Dividing 2 g/hour by 0.04 g/mL gives 50 mL/hour. Magnesium sulfate is a high-alert medication. The pump setting is checked independently by a second nurse before the infusion starts.",
        calc: { expr: "2 / (40 / 1000)", answer: 50, unit: "mL/hour", round: 0, steps: ["40 / 1000 = 0.04", "2 / 0.04 = 50"] },
        sources: [SRC.acog, SRC.ismp],
      }),
      kind: "mc",
      options: [
        { text: "5 mL/hour", why: "This is one tenth of the correct rate. It comes from a misplaced decimal." },
        { text: "25 mL/hour", why: "This rate gives 1 g/hour, half of the prescribed dose." },
        { text: "50 mL/hour", why: "2 g/hour divided by 0.04 g/mL gives 50 mL/hour." },
        { text: "80 mL/hour", why: "This multiplies 2 by 40. It would give more than the prescribed dose." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Supervising care during magnesium therapy",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "At 2200 a newly hired nurse cares for the client under the nurse's supervision. The client's respiratory rate is 10/minute and her patellar reflexes are absent. Her BP is 158/104 mmHg. For each action by the new nurse, specify whether it is appropriate or needs intervention.",
        rationale:
          "Absent reflexes and a respiratory rate of 10/minute are signs of magnesium toxicity. The infusion is stopped and the primary health care provider is told at once. Calcium gluconate is the antidote, given as 10 mL of a 10% solution IV over 3 minutes. Waiting 4 hours to recheck reflexes delays care. Raising the rate for the BP would worsen toxicity. Bright lights raise the seizure risk.",
        refs: ["Patellar reflexes are lost at a serum magnesium above 7 mEq/L (3.5 mmol/L).", "Magnesium toxicity is treated with calcium gluconate 10% solution, 10 mL IV over 3 minutes."],
        sources: [SRC.acog, SRC.delegation],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Appropriate", "Needs intervention"],
      rows: [
        { text: "Stops the magnesium sulfate infusion", correct: [0], why: "Stopping the infusion is the first step when signs of toxicity appear." },
        { text: "Plans to recheck the reflexes in 4 hours", correct: [1], why: "Absent reflexes need action now, not a recheck in 4 hours." },
        { text: "Notifies the primary health care provider", correct: [0], why: "The provider must know at once so the antidote and a level can be ordered." },
        { text: "Raises the magnesium rate because the BP is 158/104 mmHg", correct: [1], why: "Magnesium does not treat the BP. More magnesium would worsen the toxicity." },
        { text: "Prepares calcium gluconate 10% 10 mL IV", correct: [0], why: "Calcium gluconate reverses magnesium toxicity." },
        { text: "Turns the room lights up to watch her closely", correct: [1], why: "Bright light can trigger a seizure. The room stays dim." },
      ],
    },
  ],
};
