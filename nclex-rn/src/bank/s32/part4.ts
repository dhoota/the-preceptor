import type { Item } from "@/engine/types";
import { AAP_DDH, AAP_OBESITY, ABM_MASTITIS, ACIP_GBP, ACIP_MMR, CDC_MEASLES_TRAVEL, CDC_MILK, HOCKENBERRY, JCIH, US_MEC, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s32-31", {
      need: "HPM",
      topic: "Classifying a child's BMI against the 95th percentile",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 9-year-old boy has a BMI of 23.4 at a well-child visit. On his growth chart this is the 97th percentile for age and sex. His chart marks the 95th percentile at a BMI of 21.0 and 120% of the 95th percentile at 25.2. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A BMI at or above the 95th percentile is obesity. Severe obesity starts at 120% of the 95th percentile value. His BMI of 23.4 is above 21.0 but below 25.2, so he has obesity but not severe obesity. The AAP advises starting intensive health behavior and lifestyle treatment at diagnosis. Watchful waiting is not advised. A severely restricted diet and surgery are not first steps for a 9-year-old.",
      refs: ["Child BMI: 85th to under 95th percentile is overweight, 95th percentile or more is obesity, and 120% of the 95th percentile value or more is severe obesity."],
      sources: [AAP_OBESITY],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The child's BMI is in the {0} range, and the nurse should anticipate {1}.",
    blanks: [
      {
        options: [
          { text: "overweight", why: "Overweight is the 85th to under the 95th percentile. His BMI is at the 97th." },
          { text: "obesity", why: "The 97th percentile is above the 95th, and 23.4 is below the severe cutoff of 25.2." },
          { text: "severe obesity", why: "Severe obesity starts at 120% of the 95th percentile value, which is 25.2 here." },
          { text: "healthy weight", why: "A healthy weight is below the 85th percentile." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "watchful waiting for 1 year", why: "Watchful waiting delays treatment and is not advised once obesity is found." },
          { text: "intensive lifestyle treatment now", why: "Intensive health behavior and lifestyle treatment is the first-line approach at diagnosis." },
          { text: "a diet under 800 kcal a day", why: "A severely restricted diet is not a first-line plan for a school-age child." },
          { text: "referral for weight-loss surgery", why: "Surgery is considered for adolescents with severe obesity, not as a first step at 9 years." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s32-32", {
      need: "HPM",
      topic: "Upward crossing of BMI percentiles over 4 years",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "The nurse reviews the growth record of a 7-year-old girl at a well-child visit. Based on the trend, which interpretation is accurate?",
      tabs: [
        {
          title: "Growth Record",
          table: {
            head: ["Measure", "Age 4", "Age 5", "Age 6", "Age 7"],
            rows: [
              ["Height percentile", "50th", "52nd", "51st", "50th"],
              ["BMI percentile", "60th", "78th", "89th", "96th"],
            ],
          },
        },
      ],
      rationale:
        "Height has tracked the 50th percentile while the BMI percentile rose from the 60th to the 96th. Percentiles already allow for normal age changes, so a steady climb across lines is not expected. The BMI passed the 85th percentile at age 6 and is now at the 96th, which is obesity. A healthy child tracks near one percentile line. The rise shows excess weight gain, not growth in height.",
      refs: ["Child BMI: 85th to under 95th percentile is overweight and 95th percentile or more is obesity."],
      sources: [AAP_OBESITY],
    }),
    kind: "mc",
    options: [
      { text: "Steady growth along one BMI percentile line", why: "The BMI percentile climbed from the 60th to the 96th, crossing several lines." },
      { text: "BMI rising across percentiles into the obesity range", why: "The 96th percentile at age 7 is obesity, after a steady climb since age 4." },
      { text: "Expected weight gain to match the rise in height", why: "Height stayed near the 50th percentile, so it does not explain the BMI rise." },
      { text: "Overweight range at the age 7 visit", why: "Overweight is the 85th to under the 95th percentile. The 96th is obesity." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s32-33", {
      need: "HPM",
      topic: "Motivational response to a teen about sugary drinks",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 13-year-old with obesity drinks about 3 cans of soda each school day. The client says, \"I know soda is not great, but it is the only thing that keeps me awake in class.\" Which response by the nurse best uses motivational interviewing?",
      rationale:
        "Motivational interviewing reflects both sides of the client's mixed feelings and invites the client's own ideas for change. Naming the wish to cut back and the need for energy does that. Telling the client to stop, warning about disease and making a plan with the parent alone are directive. They tend to raise resistance and leave the teen out of the decision.",
      sources: [AAP_OBESITY],
    }),
    kind: "mc",
    options: [
      { text: "\"Soda is the main cause of your weight, so you need to stop.\"", why: "A direct order triggers resistance and does not explore the client's reasons." },
      { text: "\"If you keep this up, you will get diabetes before long.\"", why: "Fear messages tend to raise defensiveness rather than motivation." },
      { text: "\"Your parent and I will work out a drink plan for you.\"", why: "Planning without the teen removes the client's own choice and voice." },
      { text: "\"You want to cut back but need the energy. What might help?\"", why: "Reflecting both sides and asking for the client's ideas builds motivation for change." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s32-34", {
      need: "HPM",
      topic: "Combined pills 4 weeks after a cesarean birth",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client is 28 days after a cesarean birth for preeclampsia. She is not breastfeeding. Her BP today is 118/76 mmHg. She asks to restart the combined estrogen and progestin pill she used before pregnancy. Which plan should the nurse expect?",
      rationale:
        "Clot risk stays raised for weeks after birth. From 21 to 42 days after birth, a nonbreastfeeding client with risk factors such as cesarean birth or preeclampsia is category 3 for combined methods. A progestin-only method does not add estrogen-related clot risk and can start now. Combined pills become category 1 after 42 days. An IUD can be placed 4 weeks or more after birth, and hormonal methods do not need a 6-month wait.",
      refs: ["Nonbreastfeeding, 21 to 42 days after birth with risk factors such as cesarean birth or preeclampsia: combined hormonal contraception is category 3. After 42 days it is category 1. An IUD is category 1 from 4 weeks after birth."],
      sources: [US_MEC],
    }),
    kind: "mc",
    options: [
      { text: "Restart the combined pill today, since her BP is normal", why: "Cesarean birth and preeclampsia keep clot risk high, so combined pills are category 3 at 28 days." },
      { text: "Start a progestin-only method now and review combined pills after 6 weeks", why: "Progestin-only methods are safe now, and combined pills are category 1 after 42 days." },
      { text: "Avoid all hormonal methods until 6 months after the birth", why: "Progestin-only methods are safe now. No 6-month wait is needed." },
      { text: "Wait until 6 months after the cesarean before placing an IUD", why: "An IUD can be placed 4 weeks or more after birth, including after a cesarean." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s32-35", {
      need: "HPM",
      topic: "Preventing a repeat of inflammatory mastitis",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A client had inflammatory mastitis with her first baby after pumping after every feeding to empty her breasts. She now has a healthy 4-day-old who latches well. She asks how to prevent mastitis this time. Which advice should the nurse include? Select all that apply.",
      rationale:
        "Mastitis is now seen as a spectrum driven by inflammation and swelling, often fed by oversupply. Feeding the baby on cue matches supply to demand. Extra pumping to empty the breast stimulates more milk and swelling. Deep massage injures tissue, while light strokes toward the armpit move fluid. A tight or underwire bra can compress ducts. Nipple pain or a poor latch needs early lactation help.",
      sources: [ABM_MASTITIS],
    }),
    kind: "sata",
    options: [
      { text: "Pump after each feeding to fully empty both breasts", why: "Extra pumping overstimulates supply and raises the risk of inflammation." },
      { text: "Feed the baby on cue rather than on a strict schedule", why: "Responsive feeding keeps milk supply matched to the baby's needs." },
      { text: "Use firm, deep massage on any firm area", why: "Deep massage damages breast tissue and worsens swelling." },
      { text: "Wear a supportive bra that does not press into the breast", why: "A well-fitted bra avoids pressure that can block flow." },
      { text: "Use light strokes toward the armpit if a breast feels full", why: "Gentle lymphatic strokes move fluid out and ease swelling." },
      { text: "Seek lactation help early if nipples become painful", why: "Early help with latch problems prevents nipple damage and milk stasis." },
      { text: "Apply heat and pump hard if a breast becomes swollen", why: "Heat and forceful pumping add to swelling. Ice and feeding on cue are advised." },
    ],
    correct: [1, 3, 4, 5],
  },
  {
    ...meta("rn-s32-36", {
      need: "HPM",
      topic: "Rules for storing and thawing expressed breast milk",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client who will express breast milk after returning to work. Which three statements by the client show understanding? Select three.",
      rationale:
        "Freshly expressed milk keeps up to 4 hours at room temperature and up to 4 days in the refrigerator. Milk thawed in the refrigerator is used within 24 hours and is not refrozen. Milk left after a feeding is used within 2 hours, then thrown out. A microwave heats unevenly and can burn the baby's mouth.",
      sources: [CDC_MILK],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "\"Fresh milk can stay on the counter for up to 4 hours.\"", why: "Freshly expressed milk is safe at room temperature for up to 4 hours." },
      { text: "\"I can refreeze thawed milk if the baby does not drink it.\"", why: "Thawed milk is not refrozen. It is used within 24 hours of thawing." },
      { text: "\"I will warm the bottle in the microwave on low.\"", why: "Microwaving creates hot spots that can burn the baby's mouth." },
      { text: "\"Milk thawed in the fridge gets used within 24 hours.\"", why: "Refrigerator-thawed milk is used within 24 hours after it is fully thawed." },
      { text: "\"Fresh milk keeps for 10 days in the fridge.\"", why: "Refrigerated fresh milk is used within 4 days." },
      { text: "\"I will toss milk left in the bottle after 2 hours.\"", why: "Leftover milk from a feeding is used within 2 hours, then discarded." },
    ],
    correct: [0, 3, 5],
  },
  {
    ...meta("rn-s32-37", {
      need: "HPM",
      topic: "Follow-up after a failed newborn hearing screen",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A newborn did not pass the hearing screen in the left ear on two tries before discharge. The right ear passed. The mother says, \"He jumps when the door slams, so his hearing must be fine.\" Which action should the nurse take?",
      rationale:
        "A startle to loud sound does not rule out hearing loss, and one-sided loss still affects speech and learning. National goals are screening by 1 month, diagnostic testing by 3 months and intervention by 6 months. The nurse makes sure the follow-up test is booked. Waiting for speech delay misses the period when early help works best.",
      refs: ["Newborn hearing goals: screen by 1 month, diagnose by 3 months, intervene by 6 months."],
      sources: [JCIH],
    }),
    kind: "mc",
    options: [
      { text: "Explain that a startle response shows his hearing is normal", why: "Infants with partial or one-sided hearing loss can still startle to loud noise." },
      { text: "Plan a recheck at the 12-month visit when speech begins", why: "Diagnosis is due by 3 months of age, well before speech develops." },
      { text: "Book the follow-up hearing test so it is done by 3 months", why: "Diagnostic testing by 3 months allows intervention by 6 months." },
      { text: "Retest only if he does not talk by 2 years of age", why: "Waiting for speech delay misses the best window for intervention." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s32-38", {
      need: "HPM",
      topic: "Unstable hip found at a 2-week newborn visit",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 2-week-old girl was a first-born frank breech baby delivered by cesarean birth. At the well visit the nurse notes a palpable clunk on the Ortolani maneuver of the left hip, uneven thigh skin folds and a lower left knee when both knees are bent. The infant moves both arms equally. Complete the diagram by choosing the condition the infant is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A clunk on the Ortolani maneuver means a dislocated hip that slides back into the socket. Uneven thigh folds and a lower knee on one side support it. Breech position, female sex and first birth add risk. A positive Ortolani sign needs prompt orthopedic referral. Swaddling keeps the hips bent and apart. Hip stability and leg symmetry are rechecked. Equal arm movement argues against a brachial plexus injury.",
      sources: [AAP_DDH, HOCKENBERRY],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Benign hip click", why: "A soft click without a clunk is benign. A clunk with leg asymmetry is not." },
      { text: "Developmental dysplasia of the hip", why: "A positive Ortolani clunk, uneven folds and a lower knee fit an unstable hip." },
      { text: "Brachial plexus birth injury", why: "This affects arm movement. The infant moves both arms equally." },
      { text: "Fractured femur from birth", why: "A fracture causes pain and swelling with movement. A cesarean birth and clunk do not fit." },
    ],
    actions: [
      { text: "Swaddle with the legs straight and together", why: "Straight, tight swaddling forces the hips into extension and worsens dysplasia." },
      { text: "Arrange prompt orthopedic referral", why: "A positive Ortolani sign needs evaluation by an orthopedic specialist." },
      { text: "Teach swaddling with hips bent and apart", why: "Hip-healthy swaddling lets the hips flex and spread, which supports the socket." },
      { text: "Wait to evaluate until she starts walking", why: "Treatment works best in early infancy. Waiting allows the hip to develop abnormally." },
      { text: "Do hip stretching exercises at each diaper change", why: "Forced stretching does not treat dysplasia and can injure the hip." },
    ],
    parameters: [
      { text: "Symmetry of the Moro reflex in both arms", why: "This checks for arm or clavicle injury, which the stem does not suggest." },
      { text: "Weekly head circumference measurement", why: "Head growth does not reflect hip stability." },
      { text: "Hip stability on Ortolani and Barlow", why: "These tests show whether the hip stays in the socket over time." },
      { text: "Serum bilirubin level on a heel stick", why: "Bilirubin relates to jaundice, not hip development." },
      { text: "Thigh fold and knee height symmetry", why: "Asymmetry shows a persistent dislocation or shortening on one side." },
    ],
    correct: { condition: 1, actions: [1, 2], parameters: [2, 4] },
  },
  {
    ...meta("rn-s32-39", {
      need: "HPM",
      topic: "Interrupted DTaP series at age 4",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 4-year-old's written record shows DTaP and polio vaccine doses at 2 and 4 months of age and no doses since. The parent asks whether the child must start the shots over. Which response by the nurse is correct?",
      rationale:
        "A longer than recommended interval between doses does not lower the final immune response. With few exceptions, an interrupted series is continued, not restarted, and no extra doses are added. The child gets the next doses due on the catch-up schedule. Starting over gives unneeded doses. Blood tests for immunity are not used to plan this catch-up.",
      sources: [ACIP_GBP],
    }),
    kind: "mc",
    options: [
      { text: "\"The series continues from where it stopped.\"", why: "An interrupted series is continued. The earlier doses still count." },
      { text: "\"The series must restart because of the gap.\"", why: "A long gap does not reduce the response, so restarting gives extra doses." },
      { text: "\"One extra dose is added for the long gap.\"", why: "No extra doses are added because of a long interval." },
      { text: "\"A blood test must show immunity first.\"", why: "Antibody testing is not needed to continue a DTaP or polio series." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s32-40", {
      need: "HPM",
      topic: "Early measles vaccine before infant travel",
      cjmm: "generate",
      process: "teaching",
      difficulty: 4,
      stem: "The parents of a healthy 8-month-old plan to visit relatives overseas in 4 weeks. The infant has had all vaccines due so far. They ask whether the baby can be protected against measles before the trip. Which plan should the nurse explain?",
      rationale:
        "Infants 6 through 11 months old who travel internationally receive an early MMR dose before departure. Maternal antibody can blunt the response at this age, so a dose before the first birthday does not count. The child still needs 2 more doses on the routine schedule, starting at 12 months. Immune globulin is used after exposure, not as routine travel protection.",
      refs: ["Infants 6 through 11 months receive 1 MMR dose before international travel. Doses before 12 months do not count toward the 2-dose series."],
      sources: [CDC_MEASLES_TRAVEL, ACIP_MMR],
    }),
    kind: "mc",
    options: [
      { text: "No MMR dose can be given before the first birthday", why: "An early dose from 6 months is advised before international travel." },
      { text: "One MMR dose now that counts as the first routine dose", why: "Doses before 12 months do not count, so 2 more doses are still needed." },
      { text: "Immune globulin before the flight instead of vaccine", why: "Immune globulin is used after a measles exposure, not as routine travel protection." },
      { text: "One MMR dose now, then 2 doses starting at 12 months", why: "An early dose protects during travel, and the routine 2-dose series still follows." },
    ],
    correct: 3,
  },
];
