import type { Item } from "@/engine/types";
import { BRIGHT, CAR_SEAT, IRON, JARVIS, MILESTONES, SLEEP, VAX_GENERAL, WONG, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s09-21", {
      topic: "Motor milestone at 9 months",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A parent brings a 9-month-old to a well-child visit. The nurse asks what the infant can do at home. Which report by the parent needs follow-up?",
      rationale:
        "Most infants sit without support by 9 months. An infant who cannot sit alone at this age has a missed motor milestone and needs a developmental screen. Walking without holding on, scribbling and saying three words besides mama or dada are listed for 18 months. Their absence at 9 months is expected.",
      refs: ["Most infants sit without support by 9 months. Walking without holding on, scribbling and saying three or more words besides mama or dada are 18 month milestones."],
      sources: [MILESTONES],
    }),
    kind: "mc",
    options: [
      { text: "The infant does not walk without holding on.", why: "Walking without holding on is an 18 month milestone. It is not expected at 9 months." },
      { text: "The infant cannot sit up without support.", why: "Sitting without support is expected by 9 months. Its absence needs a developmental screen." },
      { text: "The infant does not scribble with a crayon.", why: "Scribbling is an 18 month milestone. It is not expected at 9 months." },
      { text: "The infant says no words besides mama.", why: "Three or more words besides mama or dada are expected by 18 months, not 9 months." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s09-22", {
      topic: "Injury prevention for a toddler",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse gives anticipatory guidance to the parent of an 18-month-old who weighs 11 kg. The child rides in a rear-facing car seat rated to 18 kg and lives in a two-story house. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "The child weighs 11 kg and the seat is rated to 18 kg, so the seat stays rear facing until the child reaches its limit. Toddlers climb and explore, so medicines and cleaners are locked away. A water heater at 49°C (120°F) or lower limits scald burns. Gates guard the stairs in a two-story house. Whole grapes and peanuts are choking hazards. A toddler can drown in seconds in a tub.",
      sources: [CAR_SEAT, BRIGHT],
    }),
    kind: "sata",
    options: [
      { text: "Turn the car seat to face forward now", why: "The child is 11 kg in a seat rated to 18 kg. Rear facing continues until the seat's limit." },
      { text: "Lock medicines and cleaners out of reach", why: "Toddlers climb and put things in the mouth. Locked storage prevents poisoning." },
      { text: "Offer whole grapes and peanuts as finger foods", why: "Whole grapes and peanuts are a choking risk at this age. Grapes are cut up and whole nuts avoided." },
      { text: "Leave the child in the tub for a moment", why: "A toddler can drown in a few centimeters of water. An adult stays within reach." },
      { text: "Keep the car seat facing the rear", why: "Rear facing protects the head and neck best. The child is well under the 18 kg limit." },
      { text: "Set the water heater to 49°C (120°F) or lower", why: "A lower water heater setting limits scald burns from tap water." },
      { text: "Put gates at the top and bottom of stairs", why: "Gates prevent falls on the stairs of a two-story house." },
    ],
    correct: [1, 4, 5, 6],
  },
  {
    ...meta("rn-s09-23", {
      topic: "Vaccine contraindications at 12 months",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 12-month-old is due for the first dose of measles, mumps and rubella (MMR) vaccine. The child has a runny nose and a temperature of 37.9°C (100.2°F). The child once had hives after eating scrambled eggs. The mother is 20 weeks pregnant. Which action should the nurse take?",
      rationale:
        "None of these findings is a contraindication to MMR vaccine. A mild illness with a low-grade temperature of 37.9°C is not a reason to delay. Egg allergy is not a contraindication because the vaccine holds almost no egg protein. A pregnant household member is not a reason to withhold any routine vaccine from a child. Delay leaves the child unprotected against measles.",
      sources: [VAX_GENERAL],
    }),
    kind: "mc",
    options: [
      { text: "Delay the vaccine until the cold has cleared", why: "A mild illness with a low-grade fever is not a reason to delay vaccination." },
      { text: "Hold the vaccine until the mother gives birth", why: "A pregnant household member is not a contraindication to a child's routine vaccines." },
      { text: "Refer the child for egg allergy testing first", why: "Egg allergy is not a contraindication to MMR vaccine. Testing is not needed first." },
      { text: "Give the MMR vaccine at this visit", why: "No finding in the stem is a contraindication. The dose is given on schedule." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s09-24", {
      topic: "Psychosocial stages in childhood",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse plans care for four children on a pediatric unit and wants activities that support each child's psychosocial stage. Match each child with the developmental task Erikson describes for that age.",
      rationale:
        "A 2-year-old works on autonomy, so simple choices help. A 4-year-old works on initiative through play and make-believe. A 9-year-old works on industry by finishing tasks and schoolwork. A 15-year-old works on identity and needs privacy and time with peers. Trust belongs to infancy. Intimacy belongs to young adulthood.",
      sources: [WONG],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["Child aged 2 years", "Child aged 4 years", "Child aged 9 years", "Child aged 15 years"],
    tokens: [
      { text: "Trust versus mistrust", why: "Trust is the task of infancy, before the toddler years." },
      { text: "Industry versus inferiority", why: "Industry is the task of the school-age child, such as the 9-year-old." },
      { text: "Autonomy versus shame and doubt", why: "Autonomy is the task of the toddler, such as the 2-year-old." },
      { text: "Intimacy versus isolation", why: "Intimacy is the task of young adulthood, not childhood." },
      { text: "Identity versus role confusion", why: "Identity is the task of adolescence, such as the 15-year-old." },
      { text: "Initiative versus guilt", why: "Initiative is the task of the preschool child, such as the 4-year-old." },
    ],
    correct: [2, 5, 1, 4],
  },
  {
    ...meta("rn-s09-25", {
      topic: "Interviewing an adolescent",
      cjmm: "prioritize",
      process: "communication",
      difficulty: 3,
      stem: "A 15-year-old comes to a well visit with a parent. The teen gives short answers and glances at the parent before each one. The nurse needs to screen for risk behaviors such as substance use and sexual activity. Which action should the nurse take first?",
      rationale:
        "Teens report risk behaviors more openly when they are interviewed alone. The glances at the parent suggest the teen is holding back. The nurse first explains confidentiality and its limits, such as a risk of serious harm, and then asks the parent to step out. Asking in front of the parent or relying on the parent's report gives less accurate answers.",
      sources: [BRIGHT],
    }),
    kind: "mc",
    options: [
      { text: "Ask the parent to describe the teen's friends and grades", why: "The parent's report does not replace the teen's own account of risk behaviors." },
      { text: "Ask the screening questions with the parent present", why: "A teen who glances at the parent before each answer is unlikely to disclose risks in front of them." },
      { text: "Explain confidentiality and interview the teen alone", why: "Private time with clear limits of confidentiality helps the teen disclose risk behaviors." },
      { text: "Give the parent a form to finish with the teen", why: "A form done with the parent keeps the teen from answering privately." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s09-26", {
      topic: "Excess cow's milk in a toddler",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 15-month-old drinks about 1.4 L of cow's milk each day and eats little solid food. The skin and conjunctivae are pale. Hemoglobin is 9.2 g/dL (92 g/L). The primary health care provider prescribes oral iron. Which instruction should the nurse give the parent?",
      rationale:
        "A hemoglobin of 9.2 g/dL is below the 11.0 g/dL cutoff for anemia at this age. Cow's milk is low in iron and a large intake fills the child so less iron-rich food is eaten. Cutting back the milk and adding iron-rich foods treats the cause. Calcium in milk lowers iron absorption. Goat's milk is also low in iron.",
      refs: ["In children 1 to 3 years old, anemia is a hemoglobin below 11.0 g/dL (110 g/L)."],
      sources: [IRON, BRIGHT, { body: "Unger SL, Fenton TR, Jetty R, Critch JN, O'Connor DL. Canadian Paediatric Society", work: "Iron Requirements in the First 2 Years of Life. Position statement, reaffirmed 2025", year: 2019, url: "https://cps.ca/en/documents/position/iron-requirements" }],
      canada: "Canadian labs report hemoglobin in g/L only, so this value reads 92 g/L against the 110 g/L cutoff. The Canadian Paediatric Society advises limiting cow's milk to 500 mL a day from 1 to 2 years of age.",
    }),
    kind: "mc",
    options: [
      { text: "Cut back the milk and offer iron-rich foods", why: "Less milk leaves room for iron-rich foods and treats the cause of the anemia." },
      { text: "Serve milk before meals to add calories", why: "Milk before meals fills the child and displaces iron-rich food." },
      { text: "Switch from cow's milk to goat's milk", why: "Goat's milk is also low in iron. It does not correct the cause." },
      { text: "Mix the iron drops into the child's bottle of milk", why: "Calcium in milk lowers iron absorption. The bottle also keeps the milk habit going." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s09-27", {
      topic: "Readiness for toilet training",
      cjmm: "analyze",
      process: "teaching",
      difficulty: 2,
      stem: "The parent of a 22-month-old asks whether the child is ready to start toilet training. Which two findings indicate the child is ready? Select two.",
      rationale:
        "Staying dry for about 2 hours shows the bladder can hold urine. Telling the parent about a wet diaper shows awareness of the need and a way to communicate it. A child who walks only with support is not yet ready to get to the toilet. Saying no is typical toddler behavior. A new child care program and a new sibling are stressors that make it a poor time to start.",
      sources: [WONG],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Stays dry for 2 hours at a time", why: "Dry periods of about 2 hours show the bladder can hold urine." },
      { text: "Says no to most requests from adults", why: "Negativism is typical of toddlers. It is not a sign of readiness." },
      { text: "Walks only while holding furniture", why: "A child needs to walk well to reach the toilet. This child is not ready." },
      { text: "Tells the parent when the diaper is wet", why: "Awareness of wetness and the words to report it are signs of readiness." },
      { text: "Started a new child care program this week", why: "A major change is a stressor. Training is better started when routines are stable." },
      { text: "Has a new sibling due next month", why: "A new sibling is a stressor that often causes regression. It is not a sign of readiness." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s09-28", {
      topic: "Risk screening in an adolescent",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse at a school-based clinic reviews the intake notes of a 16-year-old at a sports physical. Click to highlight the findings that need follow-up.",
      rationale:
        "Six hours of sleep is well below the 8 to 10 hours teens need. Riding without a helmet raises the risk of head injury. Daily vaping points to nicotine dependence. Falling grades and sadness most days for 1 month can signal depression and need screening. Regular sport, breakfast and close friends are protective.",
      refs: ["Teens aged 13 to 18 years need 8 to 10 hours of sleep per 24 hours."],
      sources: [BRIGHT, SLEEP],
    }),
    kind: "highlight",
    passage:
      "[[Sleeps about 6 hours on school nights]]. [[Plays soccer after school 3 afternoons a week]]. [[Rides a bike to school without a helmet]]. [[Eats breakfast with family most school days]]. [[Uses a vape device daily]]. [[Has two close friends on the soccer team]]. [[Grades fell from mostly As to Cs this term]]. [[Reports feeling sad most days for 1 month]].",
    spans: [
      { text: "Sleeps about 6 hours on school nights", why: "Teens need 8 to 10 hours. Six hours is short sleep." },
      { text: "Plays soccer after school 3 afternoons a week", why: "Regular physical activity is a healthy behavior." },
      { text: "Rides a bike to school without a helmet", why: "Riding without a helmet raises the risk of head injury." },
      { text: "Eats breakfast with family most school days", why: "Regular breakfast is a healthy habit." },
      { text: "Uses a vape device daily", why: "Daily vaping exposes the teen to nicotine and dependence." },
      { text: "Has two close friends on the soccer team", why: "Close friends are a protective factor." },
      { text: "Grades fell from mostly As to Cs this term", why: "A sudden fall in grades can signal depression, substance use or other stress." },
      { text: "Reports feeling sad most days for 1 month", why: "Sadness most days for weeks needs depression screening." },
    ],
    correct: [0, 2, 4, 6, 7],
  },
  {
    ...meta("rn-s09-29", {
      topic: "Sexual maturity rating in a girl",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 10-year-old girl has a well-child visit. The nurse notes small breast buds with the breast and papilla raised as a small mound and a slightly wider areola. No pubic hair is present. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "A breast bud with the breast and papilla raised as a small mound and a wider areola is stage 2. Stage 1 has elevation of the papilla only. Stage 3 has further growth of the breast and areola with no separation of their contours. Menarche usually follows the start of breast budding by about 2 years.",
      refs: ["Menarche usually occurs about 2 years after breast budding begins."],
      sources: [JARVIS, WONG],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The breast findings match sexual maturity rating stage {0}, and menarche usually follows the start of breast budding by about {1}.",
    blanks: [
      {
        options: [
          { text: "1", why: "Stage 1 is preadolescent, with elevation of the papilla only." },
          { text: "2", why: "A breast bud with a small mound and a wider areola defines stage 2." },
          { text: "3", why: "Stage 3 has further growth of the breast and areola in one contour." },
          { text: "4", why: "Stage 4 has the areola and papilla forming a mound above the breast." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "6 months", why: "Menarche comes later than 6 months after budding in most girls." },
          { text: "2 years", why: "Menarche usually follows the start of breast budding by about 2 years." },
          { text: "4 years", why: "Four years is longer than the usual interval from budding to menarche." },
          { text: "5 years", why: "Five years is well beyond the usual interval from budding to menarche." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s09-30", {
      topic: "Booster seat use",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "An 8-year-old who is 127 cm tall rides in a belt-positioning booster seat in the back seat. The nurse teaches the parent about car safety. Which statement by the parent shows understanding?",
      rationale:
        "The child is 127 cm tall, below the height at which an adult belt usually fits. A booster raises the child so the lap belt lies on the thighs and the shoulder belt crosses the chest. It is used until the belt fits, not until a set birthday. Children younger than 13 years ride in the back seat. A shoulder belt behind the back gives no upper body restraint.",
      refs: ["Children use a belt-positioning booster until the lap and shoulder belt fits, typically at 145 cm (4 ft 9 in) and 8 to 12 years of age. Children younger than 13 years ride in the rear seat."],
      sources: [CAR_SEAT, { body: "Parachute", work: "Booster Seat Legislation", year: 2026, url: "https://parachute.ca/en/professional-resource/policy/booster-seat-legislation/" }],
      canada: "Booster seat laws vary by province. Alberta, the Northwest Territories and Nunavut have none, and some provinces let a child stop at a set age. Parachute advises a booster until the child is at least 145 cm tall or 12 years old.",
    }),
    kind: "mc",
    options: [
      { text: "\"She can use the seat belt alone now that she is 8.\"", why: "Belt fit depends on height, near 145 cm, not age. At 127 cm she still needs the booster." },
      { text: "\"She can ride in the front seat once she turns 10.\"", why: "Children younger than 13 years ride in the back seat." },
      { text: "\"The shoulder belt can go behind her back.\"", why: "A shoulder belt behind the back gives no upper body restraint in a crash." },
      { text: "\"She will stay in the booster until the belt fits.\"", why: "The booster stays until the lap and shoulder belt fit, usually near 145 cm." },
    ],
    correct: 3,
  },
];
