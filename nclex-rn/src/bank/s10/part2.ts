import type { Item } from "@/engine/types";
import { CALCIUM, GWG, HEAT, HELMET, JARVIS, LOWDERMILK, MEDIA, POTTER, SLEEP_PEDS, TOUHY, WONG, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s10-11", {
      topic: "Piaget stages of cognition",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews Piaget's stages of cognitive development with a nursing student. Match each child's behavior with the stage it reflects.",
      rationale:
        "Searching for a hidden toy shows object permanence, a sensorimotor skill of infancy. Believing the moon follows the car is magical, self-centered thinking from the preoperational stage. Knowing two glasses of different shape can hold the same amount shows conservation, a concrete operations skill. Reasoning about hypothetical events is formal operations. Autonomy versus shame and doubt is an Erikson stage, not a Piaget stage.",
      sources: [WONG],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: [
      "An 8-month-old looks under a blanket for a hidden toy",
      "A 4-year-old says the moon follows the family car",
      "A 9-year-old says a tall glass and a wide glass hold equal juice",
      "A 15-year-old debates what could happen in an imagined situation",
    ],
    tokens: [
      { text: "Concrete operations", why: "Conservation of volume develops in the school-age years." },
      { text: "Sensorimotor", why: "Object permanence develops in infancy during the sensorimotor stage." },
      { text: "Formal operations", why: "Abstract and hypothetical reasoning develops in adolescence." },
      { text: "Preoperational", why: "Magical, self-centered thinking marks the preschool years." },
      { text: "Autonomy versus shame and doubt", why: "This is Erikson's psychosocial stage for toddlers, not a Piaget stage." },
    ],
    correct: [1, 3, 0, 2],
  },
  {
    ...meta("rn-s10-12", {
      topic: "Order of an infant exam",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 9-month-old sits quietly on the parent's lap and watches the nurse with a wary look. Place the steps of the physical exam in the order the nurse should perform them.",
      rationale:
        "An infant of this age often shows stranger anxiety, so the exam is done on the parent's lap. The nurse observes and counts breathing first, before touch upsets the infant. The heart and lungs are heard while the infant is still quiet. The abdomen is palpated next. The ears are examined last because the otoscope is the most distressing step.",
      sources: [WONG, JARVIS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Examine the ears with an otoscope", why: "The otoscope is the most distressing step, so it comes last." },
      { text: "Observe general appearance and breathing", why: "Watching before touching gives an accurate count while the infant is calm." },
      { text: "Palpate the abdomen", why: "Palpation follows auscultation because touch may make the infant cry." },
      { text: "Auscultate the heart and lungs", why: "Heart and lung sounds are best heard while the infant is still quiet." },
      { text: "Move the infant to the table alone", why: "A wary infant is examined on the parent's lap to limit distress." },
    ],
    correct: [1, 3, 2, 0],
  },
  {
    ...meta("rn-s10-13", {
      topic: "Bicycle helmet fit",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a 9-year-old and the parent how to fit a new bicycle helmet. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "A helmet protects only when it fits. It should sit level on the head, low enough to leave about two finger widths above the eyebrows. The side straps form a V under each ear. The chin strap is buckled snugly. A helmet tilted back leaves the forehead bare. A helmet bought large to grow into moves on impact.",
      sources: [HELMET, WONG],
    }),
    kind: "sata",
    options: [
      { text: "Tilt the helmet back off the forehead", why: "A tilted helmet leaves the forehead unprotected in a fall." },
      { text: "Sit the helmet level on the head", why: "A level helmet covers the forehead and the top of the head." },
      { text: "Buy a larger size to allow for growth", why: "A loose helmet shifts on impact and does not protect the head." },
      { text: "Leave two finger widths above the eyebrows", why: "This height keeps the front of the helmet low enough to protect the forehead." },
      { text: "Keep the chin strap loose for comfort", why: "A loose chin strap lets the helmet come off in a crash." },
      { text: "Form a V with the side straps under each ear", why: "The V shape holds the helmet steady on the head." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s10-14", {
      topic: "Sleep hygiene for a teen",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 16-year-old sleeps about 6 hours on school nights and falls asleep in class. The teen uses a phone in bed until midnight and drinks energy drinks after school. Which recommendations should the nurse make? Select all that apply.",
      rationale:
        "Teens need 8 to 10 hours of sleep each night. Light and alerts from a phone in bed delay sleep, so the phone charges outside the bedroom. Caffeine late in the day delays sleep onset. A steady wake time keeps the body clock stable. Long weekend sleep-ins and long naps shift the body clock and make school nights harder. Hard exercise just before bed raises alertness.",
      refs: ["Teens 13 to 18 years need 8 to 10 hours of sleep in 24 hours."],
      sources: [SLEEP_PEDS, WONG],
    }),
    kind: "sata",
    options: [
      { text: "Sleep in until noon on weekends", why: "Late weekend waking shifts the body clock and worsens school night sleep." },
      { text: "Charge the phone outside the bedroom", why: "Screen light and alerts in bed delay sleep onset." },
      { text: "Stop energy drinks in the afternoon", why: "Caffeine late in the day delays falling asleep." },
      { text: "Take a 2-hour nap after school", why: "Long late naps make it harder to fall asleep at night." },
      { text: "Keep the same wake time every day", why: "A steady wake time keeps the sleep cycle stable." },
      { text: "Aim for 8 to 10 hours of sleep a night", why: "Teens need 8 to 10 hours of sleep for health and learning." },
      { text: "Exercise hard just before bedtime", why: "Hard exercise close to bedtime raises alertness and delays sleep." },
    ],
    correct: [1, 2, 4, 5],
  },
  {
    ...meta("rn-s10-15", {
      topic: "Screen media for a preschooler",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches the parent of a 3-year-old about screen media at a well-child visit. Which statement by the parent shows understanding?",
      rationale:
        "For children 2 to 5 years, screen use is limited to 1 hour a day of high-quality programs. A parent watching with the child helps the child understand what is seen. Screens at meals cut into family talk. A screen in the bedroom harms sleep. Apps do not replace reading together, which builds language.",
      refs: ["For children 2 to 5 years, screen use is limited to 1 hour a day of high-quality programs, watched with a parent."],
      sources: [MEDIA],
    }),
    kind: "mc",
    options: [
      { text: "\"She can use a tablet at meals to stay calm.\"", why: "Screens at meals replace family talk that builds language." },
      { text: "\"A TV in her room will help her fall asleep.\"", why: "Screens in the bedroom delay sleep and shorten it." },
      { text: "\"I will limit shows to 1 hour and watch with her.\"", why: "One hour a day of quality programs, watched together, fits this age." },
      { text: "\"Learning apps can replace our reading time.\"", why: "Reading together builds language in ways apps do not." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-16", {
      topic: "Psychosocial task of middle adulthood",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 47-year-old client at a wellness visit says, \"My kids are grown. I have started coaching a youth soccer team and mentoring new staff at work.\" Which developmental task is the client meeting?",
      rationale:
        "Middle adulthood is the stage of generativity versus stagnation. Guiding the next generation through coaching and mentoring shows generativity. Intimacy is the task of young adulthood. Integrity is the task of late adulthood. Identity is the task of adolescence.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Intimacy versus isolation", why: "This is the task of young adulthood, focused on close relationships." },
      { text: "Generativity versus stagnation", why: "Guiding the next generation is the task of middle adulthood." },
      { text: "Integrity versus despair", why: "This is the task of late adulthood, focused on life review." },
      { text: "Identity versus role confusion", why: "This is the task of adolescence, focused on a sense of self." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s10-17", {
      topic: "Bone health after menopause",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 56-year-old woman who went through menopause 4 years ago asks how to keep her bones strong. She does not smoke and has no chronic illness. Which recommendations should the nurse include? Select all that apply.",
      rationale:
        "Bone loss speeds up after menopause. Women over 50 need 1200 mg of calcium a day from food and supplements together. Vitamin D helps the gut absorb calcium. Weight-bearing exercise such as walking loads the bones and slows loss. Swimming does not load the bones. Supplements above the upper limit raise the risk of kidney stones. Dairy foods are a main calcium source.",
      refs: ["The calcium RDA for women 51 to 70 years is 1200 mg a day. The upper limit for adults over 50 is 2000 mg a day."],
      sources: [CALCIUM, TOUHY],
    }),
    kind: "sata",
    options: [
      { text: "Limit exercise to swimming", why: "Swimming does not put weight on the bones, so it does little to slow bone loss." },
      { text: "Take in 1200 mg of calcium a day", why: "This is the daily calcium need for women over 50." },
      { text: "Take a 2500 mg calcium supplement daily", why: "This exceeds the 2000 mg upper limit and raises the risk of kidney stones." },
      { text: "Walk or do weight-bearing exercise", why: "Loading the bones slows loss of bone density." },
      { text: "Cut out dairy foods to limit fat", why: "Dairy foods are a main source of calcium. Low-fat choices keep the calcium." },
      { text: "Get enough vitamin D each day", why: "Vitamin D is needed to absorb calcium from the gut." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s10-18", {
      topic: "Heat safety for an older adult",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A heat warning is issued with a forecast high of 37°C (98.6°F). The nurse phones a 79-year-old client who lives alone in an apartment without air conditioning. Which instructions should the nurse give? Select all that apply.",
      rationale:
        "Older adults sense thirst less and adjust to heat more slowly. The client should drink water before feeling thirsty. Time in a cooled public place, light loose clothing and cool showers lower body heat. A fan alone does not prevent heat illness at this temperature. Using the oven heats the home. Salt tablets are not advised without a prescription.",
      sources: [HEAT, TOUHY],
    }),
    kind: "sata",
    options: [
      { text: "Rely on an electric fan to stay cool", why: "At this temperature a fan alone does not prevent heat illness." },
      { text: "Cook meals in the oven at midday", why: "Using the oven adds heat to a home without air conditioning." },
      { text: "Drink water before feeling thirsty", why: "Thirst sense falls with age, so fluids should come on a schedule." },
      { text: "Take salt tablets with each meal", why: "Salt tablets are not advised without a prescription and can cause harm." },
      { text: "Spend the afternoon in a cooled public place", why: "Air conditioning is the most protective step in extreme heat." },
      { text: "Wear light, loose-fitting clothing", why: "Loose, light clothing lets heat leave the body." },
      { text: "Take a cool shower to lower body heat", why: "Cool water draws heat from the skin." },
    ],
    correct: [2, 4, 5, 6],
  },
  {
    ...meta("rn-s10-19", {
      topic: "Weight gain target in pregnancy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A client at 8 weeks of gestation has a prepregnancy body mass index of 27. She asks how much weight she should gain over the pregnancy. Which total gain should the nurse recommend?",
      rationale:
        "A body mass index of 27 falls in the overweight range of 25 to 29.9. The target total gain for this range is 7 to 11.5 kg. A normal index of 18.5 to 24.9 has a target of 11.5 to 16 kg. The lower range of 5 to 9 kg applies to an index of 30 or more.",
      refs: [
        "Total gain targets by prepregnancy BMI: under 18.5, 12.5 to 18 kg. 18.5 to 24.9, 11.5 to 16 kg. 25 to 29.9, 7 to 11.5 kg. 30 or more, 5 to 9 kg.",
      ],
      sources: [GWG, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "5 to 9 kg", why: "This target is for a body mass index of 30 or more." },
      { text: "7 to 11.5 kg", why: "This target matches an overweight index of 25 to 29.9." },
      { text: "11.5 to 16 kg", why: "This target is for a normal index of 18.5 to 24.9." },
      { text: "12.5 to 18 kg", why: "This target is for an underweight index below 18.5." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s10-20", {
      topic: "Recording obstetric history",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client at 20 weeks of gestation gives her obstetric history. She has a 4-year-old son born at 39 weeks. She had twins born at 33 weeks who are both living. She had a miscarriage at 9 weeks. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Gravida counts every pregnancy, including this one, so she is gravida 4. The son at 39 weeks is 1 term birth. The twins at 33 weeks count as 1 preterm birth because a multiple birth is one birth event. The loss at 9 weeks is 1 abortion. She has 3 living children.",
      refs: ["Term births occur at 37 weeks or later. Preterm births occur from 20 weeks to before 37 weeks. Losses before 20 weeks count as abortions."],
      sources: [LOWDERMILK],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse records gravida {0}, term births {1}, preterm births {2}, abortions {3} and living children {4}.",
    blanks: [
      {
        options: [
          { text: "3", why: "This leaves out the current pregnancy." },
          { text: "4", why: "Four pregnancies: the son, the twins, the miscarriage and this one." },
          { text: "5", why: "Twins are one pregnancy, so they add one to gravida, not two." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "1", why: "Only the son was born at 37 weeks or later." },
          { text: "2", why: "The twins were born before 37 weeks and are not term births." },
          { text: "3", why: "This counts the twins as term births and counts them twice." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "1", why: "The twin birth at 33 weeks is one preterm birth event." },
          { text: "2", why: "A multiple birth counts once, not once per infant." },
          { text: "0", why: "The twins were born at 33 weeks, which is preterm." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "0", why: "The loss at 9 weeks counts as an abortion." },
          { text: "1", why: "The miscarriage at 9 weeks is one abortion." },
          { text: "2", why: "There was one pregnancy loss, not two." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "2", why: "Both twins are living, as is the son." },
          { text: "3", why: "The son and both twins are living." },
          { text: "4", why: "The miscarriage did not produce a living child." },
        ],
        correct: 1,
      },
    ],
  },
];
