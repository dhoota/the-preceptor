import type { Item } from "@/engine/types";
import { ANEMIA, CAFFEINE, CCHD, FISH, GBS, HBV, LOWDERMILK, VITK, WONG, meta } from "./common";

export const PART3: Item[] = [
  {
    ...meta("rn-s10-21", {
      topic: "Caffeine in pregnancy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client at 14 weeks of gestation drinks coffee through the day and estimates her caffeine intake at 400 mg a day. She asks whether she must give up coffee. Which response by the nurse is accurate?",
      rationale:
        "Caffeine intake below 200 mg a day in pregnancy is not linked to a clear rise in miscarriage or preterm birth. Her intake of 400 mg is twice that limit, so she should cut back. She does not need to stop all caffeine. The advice applies for the whole pregnancy, not only near term.",
      refs: ["Pregnant clients are advised to keep caffeine intake below 200 mg a day."],
      canada: "Health Canada sets the caffeine limit at 300 mg a day in pregnancy and breastfeeding, higher than the 200 mg in the key. At 400 mg a day this client should still cut back.",
      sources: [CAFFEINE, LOWDERMILK, { body: "Health Canada", work: "Caffeine in Food", year: 2025, url: "https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods/foods.html" }],
    }),
    kind: "mc",
    options: [
      { text: "\"You will need to stop all caffeine now.\"", why: "Moderate intake below 200 mg a day is acceptable. Stopping is not required." },
      { text: "\"Your current intake is fine to continue.\"", why: "An intake of 400 mg a day is twice the advised limit." },
      { text: "\"Cut back only once you reach the third trimester.\"", why: "The limit applies through the whole pregnancy." },
      { text: "\"Keep your caffeine under 200 mg a day.\"", why: "Intake below 200 mg a day is the advised limit in pregnancy." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s10-22", {
      topic: "Choosing fish in pregnancy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client at 18 weeks of gestation wants to eat fish 2 to 3 times a week for its nutrients. She asks which kinds are safe. Which choices should the nurse identify as best choices? Select all that apply.",
      rationale:
        "Fish gives protein and omega-3 fats that support fetal brain growth. Pregnant clients can eat 2 to 3 servings a week from the lowest mercury group. Salmon, shrimp and canned light tuna are in that group. Swordfish, king mackerel and bigeye tuna are high in mercury and should be avoided in pregnancy.",
      canada: "Health Canada does not ban these fish in pregnancy. It limits fresh or frozen tuna, shark, swordfish, marlin, orange roughy and escolar to 150 g a month combined.",
      sources: [FISH, LOWDERMILK, { body: "Health Canada", work: "Mercury in Fish: Questions and Answers", year: 2019, url: "https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/chemical-contaminants/environmental-contaminants/mercury/mercury-fish-questions-answers.html" }],
    }),
    kind: "sata",
    options: [
      { text: "Swordfish", why: "Swordfish is high in mercury and is on the list to avoid." },
      { text: "Salmon", why: "Salmon is low in mercury and rich in omega-3 fats." },
      { text: "King mackerel", why: "King mackerel is high in mercury and is on the list to avoid." },
      { text: "Shrimp", why: "Shrimp is low in mercury and is a best choice." },
      { text: "Bigeye tuna", why: "Bigeye tuna is high in mercury and is on the list to avoid." },
      { text: "Canned light tuna", why: "Canned light tuna is low in mercury and is a best choice." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s10-23", {
      topic: "Timing of group B strep screening",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A client at 32 weeks of gestation asks when she will have the vaginal and rectal swab for group B streptococcus. Which response by the nurse is accurate?",
      rationale:
        "Universal culture for group B streptococcus is done between 36 0/7 and 37 6/7 weeks. A culture at this time reflects carrier status at a term birth. A client with a positive culture gets antibiotics during labor to protect the newborn. Earlier cultures do not predict status at birth as well. Waiting for labor leaves no result to act on.",
      refs: ["Universal group B streptococcus culture is done between 36 0/7 and 37 6/7 weeks of gestation."],
      sources: [GBS, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "\"At your first prenatal visit.\"", why: "A culture this early does not predict carrier status at birth." },
      { text: "\"Between 24 and 28 weeks.\"", why: "This is the window for diabetes screening, not the strep culture." },
      { text: "\"Between 36 and 37 weeks.\"", why: "Culture at 36 0/7 to 37 6/7 weeks best predicts status at birth." },
      { text: "\"When you come in for labor.\"", why: "A culture taken in labor gives no result in time to guide antibiotics." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-24", {
      topic: "Heartburn in late pregnancy",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client at 30 weeks of gestation reports heartburn most evenings after dinner. She has no other symptoms. Which two measures should the nurse suggest? Select two.",
      rationale:
        "Progesterone relaxes the lower esophageal sphincter and the growing uterus presses on the stomach. Small, frequent meals keep the stomach from overfilling. Staying upright after eating lets gravity keep acid down. Lying down, large meals near bedtime and large drinks with meals all raise reflux. Baking soda adds a heavy sodium load and is not advised.",
      sources: [LOWDERMILK],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Lie down for a rest after eating", why: "Lying flat after a meal lets acid flow back into the esophagus." },
      { text: "Eat small, frequent meals", why: "Smaller meals keep the stomach from overfilling." },
      { text: "Take baking soda in water", why: "Baking soda carries a heavy sodium load and is not advised in pregnancy." },
      { text: "Stay upright for a while after meals", why: "An upright position helps keep stomach acid down." },
      { text: "Drink a large glass of fluid with meals", why: "Large volumes with meals distend the stomach and raise reflux." },
      { text: "Have a snack right before bed", why: "Eating just before lying down raises night-time reflux." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s10-25", {
      topic: "Physiologic change in pregnancy",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews findings for a client at 28 weeks of gestation. Her resting heart rate was 74/minute before pregnancy. Which finding needs follow-up?",
      rationale:
        "Plasma volume rises more than red cell mass in pregnancy, so hemoglobin falls a little. In the third trimester anemia is a hemoglobin below 11 g/dL (110 g/L). A value of 9.6 g/dL is anemia and needs follow-up. A heart rate rise of 10 to 15/minute is expected. Mild ankle swelling at day's end and a linea nigra are expected.",
      refs: [
        "Anemia in pregnancy is hemoglobin below 11 g/dL (110 g/L) in the first and third trimesters and below 10.5 g/dL (105 g/L) in the second.",
        "Resting heart rate rises by 10 to 15/minute during pregnancy.",
      ],
      canada: "Canadian labs report hemoglobin in g/L only. The nurse reads 96 g/L against the third trimester cutoff of 110 g/L.",
      sources: [ANEMIA, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Heart rate 84/minute", why: "A rise of 10/minute from 74/minute is expected in pregnancy." },
      { text: "Hemoglobin 9.6 g/dL (96 g/L)", why: "This is below 11 g/dL, the third trimester cutoff for anemia." },
      { text: "Mild ankle swelling at the end of the day", why: "Dependent swelling late in the day is common and expected." },
      { text: "Dark line down the middle of the abdomen", why: "Linea nigra comes from hormonal skin changes and is expected." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s10-26", {
      topic: "Uterine involution after birth",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      trend: true,
      stem: "A client had a vaginal birth and receives postpartum follow-up in hospital and then at home. The nurse reviews the flow sheet. Based on the trend, which conclusion is accurate?",
      tabs: [
        {
          title: "Postpartum Flow Sheet",
          table: {
            head: ["Finding", "Day 1", "Day 2", "Day 3", "Day 5"],
            rows: [
              ["Fundal height", "1 cm below umbilicus", "2 cm below umbilicus", "3 cm below umbilicus", "5 cm below umbilicus"],
              ["Fundal tone", "Firm", "Firm", "Firm", "Firm"],
              ["Lochia", "Rubra, moderate", "Rubra, moderate", "Rubra, small", "Serosa, small"],
              ["Temperature", "37.1°C (98.8°F)", "37.0°C (98.6°F)", "36.9°C (98.4°F)", "36.8°C (98.2°F)"],
            ],
          },
        },
      ],
      rationale:
        "The fundus stays firm and descends about 1 cm each day, from 1 cm below the umbilicus on day 1 to 5 cm below on day 5. Lochia moves from rubra to serosa and lessens. The temperature stays normal. This is the expected pattern of involution. Subinvolution, retained fragments and infection would show a high or boggy fundus, heavy rubra or fever.",
      refs: ["After birth the fundus descends about 1 cm a day. Lochia rubra lasts about 3 days and lochia serosa follows."],
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Subinvolution of the uterus", why: "Subinvolution shows a fundus that stays high. This fundus descends each day." },
      { text: "Retained placental fragments", why: "Retained tissue causes a boggy fundus and heavy bleeding. Neither is present." },
      { text: "Early postpartum infection", why: "Infection brings fever and tenderness. The temperature stays normal." },
      { text: "Involution as expected", why: "A firm fundus descending daily with fading lochia is expected." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s10-27", {
      topic: "Parents declining newborn vitamin K",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "The parents of a healthy term newborn say they want to decline the vitamin K injection because the baby seems healthy. Which response by the nurse is best?",
      rationale:
        "Newborns are born with low vitamin K stores and a sterile gut that makes little vitamin K. Breast milk is also low in vitamin K. The injection prevents vitamin K deficiency bleeding, which can occur in the brain without warning. Waiting for bleeding misses the purpose of prevention. The nurse gives accurate information and does not coerce.",
      sources: [VITK, WONG],
    }),
    kind: "mc",
    options: [
      { text: "\"Breast milk will supply enough vitamin K.\"", why: "Breast milk is low in vitamin K and does not prevent deficiency bleeding." },
      { text: "\"The law requires it before you go home.\"", why: "Coercion does not address the parents' concern or inform their choice." },
      { text: "\"Newborns have low vitamin K, so it prevents bleeding.\"", why: "Low stores at birth are the reason the injection prevents deficiency bleeding." },
      { text: "\"We can give it later if any bleeding starts.\"", why: "Bleeding can start in the brain without warning. The dose is meant to prevent it." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-28", {
      topic: "Newborn of a mother with hepatitis B",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 4,
      stem: "A term newborn was born 2 hours ago to a mother whose hepatitis B surface antigen test is positive. The newborn is stable and weighs 3.4 kg. Which action should the nurse anticipate?",
      rationale:
        "A newborn of a mother who is positive for hepatitis B surface antigen needs both hepatitis B vaccine and hepatitis B immune globulin within 12 hours of birth. The immune globulin gives immediate antibodies. The vaccine starts active immunity. Either one alone gives less protection. Delaying the vaccine leaves the newborn exposed.",
      refs: ["Infants of mothers positive for hepatitis B surface antigen receive hepatitis B vaccine and hepatitis B immune globulin within 12 hours of birth."],
      sources: [HBV],
    }),
    kind: "mc",
    options: [
      { text: "Vaccine and immune globulin within 12 hours", why: "Both products within 12 hours give the best protection after exposure at birth." },
      { text: "Vaccine at the 2-month well visit", why: "Waiting 2 months leaves the exposed newborn unprotected." },
      { text: "Vaccine alone before discharge", why: "Vaccine alone gives less protection than vaccine with immune globulin." },
      { text: "Immune globulin now and vaccine at 1 month of age", why: "Delaying the vaccine delays active immunity. Both are given within 12 hours." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-29", {
      topic: "Newborn heat loss",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews with a new graduate the ways a newborn loses body heat. Match each situation with the mechanism of heat loss it shows.",
      rationale:
        "Conduction moves heat to a colder surface in direct contact, such as a cold scale. Evaporation takes heat as fluid dries on wet skin. Radiation moves heat to a cold surface that is not touching, such as a window. Convection carries heat away in moving air, such as a draft from a vent. Nonshivering thermogenesis is how a newborn makes heat, not how heat is lost.",
      sources: [WONG, LOWDERMILK],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "Newborn placed on an uncovered cold scale",
      "Newborn left wet with amniotic fluid",
      "Crib placed beside a cold outside window",
      "Air from a ceiling vent blows across the crib",
    ],
    tokens: [
      { text: "Convection", why: "Moving air from a vent carries heat away from the skin." },
      { text: "Conduction", why: "Heat passes into a cold surface in direct contact with the skin." },
      { text: "Radiation", why: "Heat moves to a cold surface nearby that is not touching the newborn." },
      { text: "Nonshivering thermogenesis", why: "This is how a newborn produces heat by burning brown fat. It is not a route of loss." },
      { text: "Evaporation", why: "Fluid drying on the skin draws heat away." },
    ],
    correct: [1, 4, 2, 0],
  },
  {
    ...meta("rn-s10-30", {
      topic: "Newborn pulse oximetry screen",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A term newborn has pulse oximetry screening for critical congenital heart disease at 30 hours of age. Oxygen saturation is 97% in the right hand and 93% in the right foot. The newborn is pink and feeding well. What should the nurse do?",
      rationale:
        "A pass needs a saturation of 95% or more in both the right hand and a foot, with a difference of 3% or less. The foot reading of 93% is below 95%, and the foot is 4 points lower than the hand. No reading is below 90%, so this is not an immediate fail. The screen is repeated once in 1 hour.",
      refs: ["Pass: 95% or more in both the right hand and a foot, with a difference of 3% or less. Fail: below 90% at any site. Other results are repeated once in 1 hour."],
      sources: [CCHD],
    }),
    kind: "mc",
    options: [
      { text: "Record the result as a pass", why: "A pass needs 95% or more in both sites. The foot reads 93%." },
      { text: "Repeat the screen in 1 hour", why: "A result that neither passes nor fails is repeated once in 1 hour." },
      { text: "Report an immediate screen failure", why: "An immediate fail needs a reading below 90% at any site." },
      { text: "Repeat the screen before discharge day", why: "The repeat is done in 1 hour, not delayed to discharge." },
    ],
    correct: 1,
  },
];
