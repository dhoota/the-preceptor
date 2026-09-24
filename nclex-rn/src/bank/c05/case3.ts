import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c05-3";

/** Case 3. Mother-baby unit, then special care nursery. Newborn of a mother with diabetes. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "A Shaky Newborn on the Mother-Baby Unit",
  intro:
    "A male infant was born by cesarean birth at 38 weeks of gestation at 0800. His mother has type 1 diabetes, and her A1C late in pregnancy was 8.1%. He weighs 4.6 kg. He stays with his mother on the mother-baby unit and breastfed once, at 0830.",
  tabs: [
    {
      title: "Newborn Record",
      text: [
        "Apgar scores 8 at 1 minute and 9 at 5 minutes.",
        "Mother's group B streptococcus screen negative. Membranes ruptured at surgery.",
        "Maternal temperature normal throughout.",
        "Glucose screening prescribed per unit protocol for infants of mothers with diabetes.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1000"],
        rows: [
          ["Axillary temperature", "36.4°C (97.5°F)"],
          ["Heart rate", "150/minute"],
          ["Respiratory rate", "66/minute"],
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
        topic: "Warning signs in an infant of a mother with diabetes",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1000 the mother calls the nurse because her baby is shaking. The nurse examines the infant and documents the findings below. Click to highlight the findings that require follow-up.",
        refs: ["Term newborn respiratory rate is 30 to 60/minute.", "Axillary temperature of 36.5 to 37.5°C is normal for a newborn."],
        rationale:
          "An infant of a mother with diabetes is at risk for low glucose after birth. Jitteriness, a weak suck, a respiratory rate of 66/minute and a temperature of 36.4°C are warning signs. A low temperature raises glucose use. Acrocyanosis, milia, a flat fontanelle and meconium are expected in the first day.",
        sources: [SRC.adamkin, SRC.lowdermilk],
      }),
      kind: "highlight",
      passage:
        "[[Arms and legs tremble when he is handled]]. [[Hands and feet bluish, trunk pink]]. [[Weak, brief suck at the breast]]. [[Tiny white papules on the nose]]. [[Respiratory rate 66/minute]]. [[Axillary temperature 36.4°C]]. [[Soft, flat anterior fontanelle]]. [[Passed a black, sticky stool]].",
      spans: [
        { text: "Arms and legs tremble when he is handled", why: "Jitteriness is a common sign of low blood glucose in a newborn." },
        { text: "Hands and feet bluish, trunk pink", why: "Acrocyanosis is expected in the first day of life." },
        { text: "Weak, brief suck at the breast", why: "A poor suck can signal low glucose and limits intake." },
        { text: "Tiny white papules on the nose", why: "Milia are harmless blocked glands." },
        { text: "Respiratory rate 66/minute", why: "A rate above 60/minute is fast for a newborn." },
        { text: "Axillary temperature 36.4°C", why: "A temperature below 36.5°C is low and raises glucose use." },
        { text: "Soft, flat anterior fontanelle", why: "A soft, flat fontanelle is normal." },
        { text: "Passed a black, sticky stool", why: "Meconium in the first day is expected." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Expected and unexpected newborn findings",
        cjmm: "analyze",
        difficulty: 2,
        stem: "The nurse compares the infant's findings with expected values for a term newborn. For each finding, specify whether it is expected or needs follow-up.",
        refs: [
          "Term newborn heart rate is 110 to 160/minute.",
          "Term newborn respiratory rate is 30 to 60/minute.",
          "Axillary temperature of 36.5 to 37.5°C is normal for a newborn.",
        ],
        rationale:
          "A heart rate of 150/minute, acrocyanosis and bowel sounds are expected. A respiratory rate of 66/minute is above 60/minute. An axillary temperature of 36.4°C is below 36.5°C. A weight of 4.6 kg at 38 weeks is large and reflects high maternal glucose in pregnancy. These three findings need follow-up.",
        sources: [SRC.lowdermilk],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected", "Needs follow-up"],
      rows: [
        { text: "Heart rate 150/minute", correct: [0], why: "150/minute is within the newborn range of 110 to 160/minute." },
        { text: "Respiratory rate 66/minute", correct: [1], why: "66/minute is above the newborn range of 30 to 60/minute." },
        { text: "Weight 4.6 kg at 38 weeks", correct: [1], why: "This weight is large for gestational age. Large infants of mothers with diabetes need glucose checks." },
        { text: "Bluish hands and feet", correct: [0], why: "Acrocyanosis is expected in the first day of life." },
        { text: "Axillary temperature 36.4°C", correct: [1], why: "36.4°C is below the normal range of 36.5 to 37.5°C." },
        { text: "Bowel sounds present", correct: [0], why: "Bowel sounds are expected within the first hours after birth." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Highest risk for a jittery newborn",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "A heel-stick glucose at 1005 is 32 mg/dL (1.8 mmol/L). The mother had a negative group B streptococcus screen and no fever. Choose the most likely option for each blank.",
        rationale:
          "A glucose of 32 mg/dL in a jittery infant with a weak suck is symptomatic hypoglycemia. The brain depends on glucose, so this infant is at highest risk for neurologic injury. The negative strep screen and normal maternal temperature make sepsis less likely. Acrocyanosis and a heart rate of 150/minute are normal.",
        sources: [SRC.adamkin, SRC.abm, { body: "Narvey MR, Marks SD. Canadian Paediatric Society Fetus and Newborn Committee", work: "The screening and management of newborns at risk for low blood glucose. Paediatrics and Child Health 24(8):536", year: 2019, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6901164/" }],
        canada: "Canadian glucose results are reported only in mmol/L, so this result reads 1.8 mmol/L. The Canadian Paediatric Society (2019) sets 2.6 mmol/L as the level to maintain in at-risk newborns during the first 72 hours.",
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The newborn is at highest risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "early-onset sepsis", why: "The mother screened negative for group B streptococcus and had no fever. Low glucose explains the signs." },
            { text: "a clavicle fracture at birth", why: "He was born by cesarean birth, and no arm weakness is described." },
            { text: "physiologic jaundice", why: "Physiologic jaundice appears after the first day. He is only a few hours old." },
            { text: "neurologic injury from hypoglycemia", why: "Low glucose with jitteriness and a weak suck threatens the brain, which depends on glucose." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "acrocyanosis of the hands and feet", why: "Acrocyanosis is expected in the first day." },
            { text: "jitteriness with a glucose of 32 mg/dL", why: "Tremor with a glucose this low shows symptomatic hypoglycemia." },
            { text: "a heart rate of 150/minute", why: "150/minute is within the normal newborn range." },
            { text: "a negative maternal strep screen", why: "A negative screen lowers the risk of sepsis. It does not point to any risk here." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Assigning tasks before a newborn transfer",
        cjmm: "generate",
        difficulty: 3,
        stem: "The primary health care provider prescribes IV dextrose 10% and transfer to the special care nursery. An assistive personnel (AP) is in the room while the nurse prepares for the transfer. Which tasks may the nurse assign to the AP? Select two.",
        rationale:
          "An AP can do routine tasks with predictable outcomes. Bringing warm linens and moving the transport isolette fit that rule. Assessing the suck, teaching the mother and deciding on a glucose plan need registered nurse knowledge and judgment. Starting an IV is outside the AP role.",
        sources: [SRC.delegation, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Bring a warmed blanket and hat for the infant", why: "Gathering warm linens is a routine task with a predictable outcome." },
        { text: "Assess how well the infant is sucking", why: "Assessment stays with the registered nurse." },
        { text: "Explain to the mother why her baby needs IV fluid", why: "Teaching needs registered nurse knowledge." },
        { text: "Push the transport isolette to the bedside", why: "Moving equipment is a routine task." },
        { text: "Recheck the glucose and decide the next step", why: "Interpreting a result and planning care need nursing judgment." },
        { text: "Place the IV catheter in the infant's hand", why: "Starting an IV is outside the AP role." },
      ],
      correct: [0, 3],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "IV dextrose bolus for a newborn",
        cjmm: "action",
        difficulty: 3,
        stem: "In the nursery the provider prescribes dextrose 200 mg/kg IV as a bolus, then a continuous infusion. The infant weighs 4.6 kg. Dextrose 10% contains 100 mg/mL. How many mL should the nurse give for the bolus?",
        refs: ["A symptomatic newborn with a glucose below 40 mg/dL (2.2 mmol/L) needs IV glucose."],
        rationale:
          "The dose is 200 mg/kg for 4.6 kg, which is 920 mg. Dextrose 10% holds 100 mg in each mL, so 920 mg is 9.2 mL. A symptomatic newborn with a glucose below 40 mg/dL needs IV glucose. The continuous infusion follows so the glucose does not fall again.",
        calc: { expr: "200 * 4.6 / 100", answer: 9.2, unit: "mL", round: 1, steps: ["200 * 4.6 = 920", "920 / 100 = 9.2"] },
        sources: [SRC.adamkin, { body: "Narvey MR, Marks SD. Canadian Paediatric Society Fetus and Newborn Committee", work: "The screening and management of newborns at risk for low blood glucose. Paediatrics and Child Health 24(8):536", year: 2019, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6901164/" }],
        canada: "The Canadian Paediatric Society (2019) advises IV dextrose for symptomatic hypoglycemic newborns and aims to keep glucose at 2.6 mmol/L or more. Its bolus of 2 mL/kg of dextrose 10% equals the 200 mg/kg dose here.",
      }),
      kind: "mc",
      options: [
        { text: "0.92 mL", why: "This misplaces the decimal and gives one tenth of the dose." },
        { text: "4.6 mL", why: "This gives half of the prescribed dose." },
        { text: "9.2 mL", why: "920 mg divided by 100 mg/mL is 9.2 mL." },
        { text: "92 mL", why: "This misplaces the decimal and gives 10 times the dose." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Response to IV dextrose in a newborn",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "The infant is in the special care nursery on a dextrose 10% infusion. At 1200 the nurse reviews the flow sheet. Which findings show that the treatment is effective? Select all that apply.",
        tabs: [
          {
            title: "Nursery Flow Sheet",
            table: {
              head: ["Measure", "1200"],
              rows: [
                ["Glucose", "58 mg/dL (3.2 mmol/L)"],
                ["Tone", "Calm, no tremor when handled"],
                ["Axillary temperature", "36.8°C (98.2°F)"],
                ["Respiratory rate", "48/minute"],
                ["IV site", "Right hand puffy, pale and cool"],
                ["Feeding", "Sucks weakly and tires after 2 minutes"],
              ],
            },
          },
        ],
        refs: [
          "After 4 hours of age, the target glucose before feeds is 45 mg/dL (2.5 mmol/L) or more.",
          "Term newborn respiratory rate is 30 to 60/minute.",
          "Axillary temperature of 36.5 to 37.5°C is normal for a newborn.",
        ],
        rationale:
          "A glucose of 58 mg/dL is above the target of 45 mg/dL. The tremor has stopped. A respiratory rate of 48/minute and a temperature of 36.8°C are now normal. These show the treatment is working. The puffy, cool IV site shows infiltration and needs action. The weak suck still needs follow-up.",
        sources: [SRC.adamkin, SRC.abm, { body: "Narvey MR, Marks SD. Canadian Paediatric Society Fetus and Newborn Committee", work: "The screening and management of newborns at risk for low blood glucose. Paediatrics and Child Health 24(8):536", year: 2019, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6901164/" }],
        canada: "Canadian labs report glucose only in mmol/L, so this result reads 3.2 mmol/L. The Canadian Paediatric Society (2019) target in the first 72 hours is 2.6 mmol/L or more, which this result still meets.",
      }),
      kind: "sata",
      options: [
        { text: "Glucose 58 mg/dL (3.2 mmol/L)", why: "A glucose above 45 mg/dL meets the target after 4 hours of age." },
        { text: "Right hand IV site puffy, pale and cool", why: "These signs show infiltration. Dextrose 10% can injure tissue." },
        { text: "No tremor when handled", why: "Loss of jitteriness shows the brain is receiving glucose." },
        { text: "Sucks weakly and tires after 2 minutes", why: "A weak suck persists and needs follow-up." },
        { text: "Respiratory rate 48/minute", why: "48/minute is within the newborn range of 30 to 60/minute." },
        { text: "Axillary temperature 36.8°C", why: "36.8°C is within the normal range of 36.5 to 37.5°C." },
      ],
      correct: [0, 2, 4, 5],
    },
  ],
};
