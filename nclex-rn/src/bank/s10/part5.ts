import type { Item } from "@/engine/types";
import { AAA, ACTIVITY, ADA, BP, ALCOHOL, BMI, GWG, HCV, HIV, LOWDERMILK, MILESTONES, POTTER, SKULL, SLEEP_ADULT, TTM, UV, WONG, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s10-41", {
      topic: "Aortic aneurysm screening",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "At a health fair the nurse reviews screening needs for four men with no symptoms. Which client should the nurse advise to ask about a one-time abdominal ultrasound for aortic aneurysm?",
      rationale:
        "One-time ultrasound screening for abdominal aortic aneurysm is advised for men 65 to 75 who have ever smoked. The 68-year-old who smoked for 20 years meets both criteria. The 58-year-old and the 62-year-old are younger than 65. The 79-year-old is older than 75.",
      refs: ["One-time ultrasound screening for abdominal aortic aneurysm is advised for men 65 to 75 years old who have ever smoked."],
      canada: "CTFPHC (2017) advises one-time ultrasound screening for men 65 to 80 with no smoking criterion. The 79-year-old would also qualify in Canada. The key follows US criteria.",
      sources: [AAA, { body: "Canadian Task Force on Preventive Health Care", work: "Recommendations on Screening for Abdominal Aortic Aneurysm in Primary Care. CMAJ 189(36):E1137", year: 2017, url: "https://canadiantaskforce.ca/guidelines/published-guidelines/abdominal-aortic-aneurysm/" }],
    }),
    kind: "mc",
    options: [
      { text: "A 58-year-old who smokes daily", why: "He is younger than 65, the age screening starts." },
      { text: "A 79-year-old who quit smoking 30 years ago", why: "He is older than 75, the upper age for routine screening." },
      { text: "A 68-year-old who smoked for 20 years", why: "He is 65 to 75 and has smoked, so he meets both criteria." },
      { text: "A 62-year-old who quit smoking last year", why: "He is younger than 65, the age screening starts." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-42", {
      topic: "Infection screening in a young adult",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 34-year-old client with no symptoms and no known risk factors has a first primary care visit in several years. The client has never had any infection screening. Which two screening tests should the nurse anticipate? Select two.",
      rationale:
        "HIV screening is advised at least once for everyone 15 to 65 years old. Hepatitis C screening is advised at least once for adults 18 to 79 years old. The client is 34 and has never been screened for either. Colorectal screening starts at 45. The other tests are for older adults or for clients with specific risk factors.",
      refs: ["HIV screening is advised for ages 15 to 65. Hepatitis C screening is advised for adults 18 to 79. Average-risk colorectal cancer screening starts at 45."],
      canada: "CTFPHC (2017) recommends against hepatitis C screening in adults who are not at elevated risk. This client would not be screened for hepatitis C under that guidance.",
      sources: [HIV, HCV, { body: "Grad R, Thombs BD, Tonelli M, et al. Canadian Task Force on Preventive Health Care", work: "Recommendations on Hepatitis C Screening for Adults. CMAJ 189(16):E594", year: 2017, url: "https://canadiantaskforce.ca/guidelines/published-guidelines/hepatitis-c/" }],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Screening colonoscopy", why: "Average-risk colorectal screening starts at 45." },
      { text: "HIV screening test", why: "Everyone 15 to 65 should be screened for HIV at least once." },
      { text: "Low-dose chest CT scan", why: "Lung cancer screening is for older adults with a heavy smoking history." },
      { text: "Hepatitis C antibody test", why: "Adults 18 to 79 should be screened for hepatitis C at least once." },
      { text: "Abdominal aortic ultrasound", why: "Aneurysm screening is for older men who have smoked." },
      { text: "Bone mineral density scan", why: "Bone density screening targets older women and others at high risk." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s10-43", {
      topic: "Calculating body mass index",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 45-year-old client at a wellness visit weighs 88 kg and is 170 cm tall. The nurse calculates the body mass index. Which result and category are accurate?",
      rationale:
        "Body mass index is weight in kilograms divided by height in meters squared. The height of 170 cm is 1.7 m. Squaring it gives 2.89. Dividing 88 by 2.89 gives 30.4. An index of 30 or more is in the obesity range.",
      refs: ["Adult BMI categories: 18.5 to 24.9 healthy weight, 25 to 29.9 overweight, 30 or more obesity."],
      calc: { expr: "88 / (170 / 100 * 170 / 100)", answer: 30.449826989619378, unit: "kg/m2", round: 1, steps: ["170 / 100 = 1.7", "1.7 * 1.7 = 2.89", "88 / 2.89 = 30.4"] },
      sources: [BMI],
    }),
    kind: "mc",
    options: [
      { text: "26.4, overweight", why: "The correct value is 30.4. This result understates the index." },
      { text: "29.4, overweight", why: "The correct value is 30.4, which is above the overweight range." },
      { text: "30.4, obesity", why: "88 divided by 2.89 is 30.4, which is in the obesity range." },
      { text: "51.8, obesity", why: "This divides the weight by 1.7 without squaring the height." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-44", {
      topic: "Development at 12 months",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 4,
      stem: "The nurse reviews the well-child note for a 12-month-old who was born at term. Click to highlight the findings that need follow-up.",
      rationale:
        "By 12 months an infant responds to the sound of their name and makes babbling sounds or says a first word. Not responding to the name and making no babbling sounds suggest a hearing, language or social delay. The Moro reflex should be gone by 6 months, so its presence at 12 months needs follow-up. Cruising, a pincer grasp, waving, a tripled birth weight and cup drinking with help are expected.",
      refs: [
        "By 12 months most infants pull to stand, walk holding furniture, use a pincer grasp, wave bye-bye, respond to their name, babble and drink from a cup that is held for them.",
        "The Moro reflex is gone by 6 months. Birth weight triples by about 12 months.",
      ],
      sources: [MILESTONES, WONG],
    }),
    kind: "highlight",
    passage:
      "[[Pulls to stand and walks holding furniture]]. [[Picks up small items with thumb and finger]]. [[Does not look up when name is called]]. [[Waves bye-bye]]. [[Moro reflex present when startled]]. [[Weight is triple the birth weight]]. [[Makes no babbling sounds]]. [[Drinks from a cup held by the parent]].",
    spans: [
      { text: "Pulls to stand and walks holding furniture", why: "Cruising along furniture is expected at 12 months." },
      { text: "Picks up small items with thumb and finger", why: "A pincer grasp is expected by 12 months." },
      { text: "Does not look up when name is called", why: "Infants respond to their name well before 12 months. Hearing and social skills need checking." },
      { text: "Waves bye-bye", why: "Waving is an expected social skill at 12 months." },
      { text: "Moro reflex present when startled", why: "The Moro reflex is gone by 6 months. Persistence needs neurologic follow-up." },
      { text: "Weight is triple the birth weight", why: "Tripling birth weight by 12 months is expected." },
      { text: "Makes no babbling sounds", why: "No babbling at 12 months suggests a hearing or language delay." },
      { text: "Drinks from a cup held by the parent", why: "Drinking from a held cup is expected at 12 months." },
    ],
    correct: [2, 4, 6],
  },
  {
    ...meta("rn-s10-45", {
      topic: "Lifestyle risks at a wellness visit",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse reviews the intake note of a 38-year-old man at a wellness visit. Click to highlight the findings that call for health promotion counseling.",
      rationale:
        "Adults need 7 or more hours of sleep a night, so 5 hours is too little. Five or more drinks on one occasion is binge drinking for a man. Tanning beds give off ultraviolet light that raises skin cancer risk. Brisk walking for 30 minutes on 5 days meets the weekly activity goal of 150 minutes. Seat belt use, fruit and vegetables and yearly dental care are healthy habits.",
      refs: [
        "Adults need 7 or more hours of sleep a night.",
        "For men, 5 or more drinks on one occasion is binge drinking.",
        "Adults need at least 150 minutes of moderate aerobic activity a week.",
      ],
      sources: [SLEEP_ADULT, ALCOHOL, ACTIVITY, POTTER],
    }),
    kind: "highlight",
    passage:
      "[[Walks briskly 30 minutes, 5 days a week]]. [[Sleeps about 5 hours a night]]. [[Wears a seat belt in the car]]. [[Drinks 5 or more beers most Saturdays]]. [[Eats fruit or vegetables at most meals]]. [[Uses a tanning bed twice a month]]. [[Sees a dentist every year]].",
    spans: [
      { text: "Walks briskly 30 minutes, 5 days a week", why: "This meets the goal of 150 minutes of moderate activity a week." },
      { text: "Sleeps about 5 hours a night", why: "Adults need 7 or more hours. Short sleep raises health risks." },
      { text: "Wears a seat belt in the car", why: "Seat belt use is a healthy safety habit." },
      { text: "Drinks 5 or more beers most Saturdays", why: "Five or more drinks at once is binge drinking for a man." },
      { text: "Eats fruit or vegetables at most meals", why: "Regular fruit and vegetables support health." },
      { text: "Uses a tanning bed twice a month", why: "Tanning beds expose the skin to ultraviolet light and raise skin cancer risk." },
      { text: "Sees a dentist every year", why: "Regular dental care is a healthy habit." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s10-46", {
      topic: "Sun protection for a young infant",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "The parent of a 4-month-old plans a summer afternoon at an outdoor park. Which instruction about sun protection should the nurse give?",
      rationale:
        "Infants younger than 6 months should be kept out of direct sunlight. Shade, light clothing that covers the skin and a brimmed hat are the main protection. Sunscreen may be used on small areas only when shade and clothing are not enough. Infant skin burns easily, so a gradual tan is not safe. Midday sun is the strongest.",
      refs: ["Infants younger than 6 months are kept out of direct sunlight. Sunscreen may be used on small areas if shade and clothing are not available."],
      sources: [UV],
    }),
    kind: "mc",
    options: [
      { text: "Cover all exposed skin with sunscreen", why: "Sunscreen is used only on small areas under 6 months. Shade comes first." },
      { text: "Let the infant tan slowly in short sessions", why: "Any tan is skin damage. Infant skin burns easily." },
      { text: "Plan the outing for the midday hours", why: "Ultraviolet light is strongest at midday." },
      { text: "Keep the infant in shade with a brimmed hat", why: "Shade and covering clothing are the main protection under 6 months." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s10-47", {
      topic: "Screening results needing prompt referral",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "At a community health fair, the nurse reviews screening results for four adults with no known health problems. Which client should the nurse refer for prompt follow-up first?",
      rationale:
        "A random glucose of 200 mg/dL (11.1 mmol/L) or more with classic symptoms such as thirst meets the criteria for diabetes. This client needs prompt evaluation. A BP of 128/78 mmHg is elevated and calls for lifestyle advice. The cholesterol and the body mass index need routine follow-up, not urgent referral.",
      refs: [
        "A random plasma glucose of 200 mg/dL (11.1 mmol/L) or more with classic symptoms of hyperglycemia is diagnostic of diabetes.",
        "Elevated BP is a systolic of 120 to 129 mmHg with a diastolic below 80 mmHg.",
      ],
      canada: "Diabetes Canada uses mmol/L only, with the same random cutoff of 11.1 mmol/L plus symptoms. Hypertension Canada (2025) defines hypertension as 130/80 mmHg or higher, so 128/78 mmHg is below it.",
      sources: [ADA, BP, { body: "Punthakee Z, Goldenberg R, Katz P. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Definition, Classification and Diagnosis of Diabetes, Prediabetes and Metabolic Syndrome. Canadian Journal of Diabetes 42(Suppl 1):S10", year: 2018, url: "https://doi.org/10.1016/j.jcjd.2017.10.003" }, { body: "Goupil R, Tsuyuki RT, Santesso N, et al. Hypertension Canada", work: "Hypertension Canada Guideline for the Diagnosis and Treatment of Hypertension in Adults in Primary Care. CMAJ 197:E549", year: 2025, url: "https://doi.org/10.1503/cmaj.241770" }],
    }),
    kind: "mc",
    options: [
      { text: "BP 128/78 mmHg on two readings, no symptoms", why: "This is elevated BP. It calls for lifestyle advice and routine recheck." },
      { text: "Total cholesterol 215 mg/dL (5.56 mmol/L), no family history", why: "This is borderline high and needs routine follow-up." },
      { text: "Random glucose 212 mg/dL (11.8 mmol/L) and thirst", why: "A random glucose of 200 mg/dL or more with symptoms meets diabetes criteria." },
      { text: "Body mass index 27 and a waist of 94 cm", why: "This is overweight and calls for routine lifestyle counseling." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s10-48", {
      topic: "Readiness to start exercising",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 52-year-old client who does not exercise says, \"I joined a gym yesterday and bought walking shoes. I plan to start going next Monday.\" Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The client intends to act within the next month and has taken small steps, joining a gym and buying shoes. This is the preparation stage. Contemplation involves weighing change without a firm plan. Action means the new behavior has already started. Precontemplation means no intent to change.",
      sources: [TTM, POTTER],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is in the {0} stage of change, as shown by {1}.",
    blanks: [
      {
        options: [
          { text: "contemplation", why: "Contemplation is weighing change without a firm plan or steps taken." },
          { text: "preparation", why: "A plan to act soon with first steps taken marks preparation." },
          { text: "action", why: "Action means the new behavior has already begun. The client has not started." },
          { text: "precontemplation", why: "Precontemplation means no intent to change. The client intends to change." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "weighing the pros and cons", why: "The client describes a plan, not a debate about pros and cons." },
          { text: "a start date and first steps", why: "A set start date and steps already taken show preparation." },
          { text: "weeks of regular workouts", why: "The client has not started working out yet." },
          { text: "no interest in changing", why: "The client has joined a gym, which shows interest in change." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s10-49", {
      topic: "Weight gain trend in pregnancy",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 4,
      trend: true,
      stem: "A client with a prepregnancy weight of 60 kg and a body mass index of 22 comes for prenatal visits. The nurse reviews her weight record. Based on the trend, which conclusion is accurate?",
      tabs: [
        {
          title: "Prenatal Weight Record",
          table: {
            head: ["Measure", "12 weeks", "20 weeks", "28 weeks", "34 weeks"],
            rows: [
              ["Weight (kg)", "62.0", "65.2", "68.6", "71.2"],
              ["Weekly gain since last visit (kg)", "Not applicable", "0.40", "0.43", "0.43"],
              ["BP (mmHg)", "112/70", "110/68", "114/70", "116/72"],
            ],
          },
        },
      ],
      rationale:
        "A body mass index of 22 is in the normal range. The advised gain in the second and third trimesters is about 0.42 kg a week, within 0.35 to 0.50 kg. The client gains 0.40 to 0.43 kg a week at each visit. The gain is steady and within range. The BP stays normal, so there is no sign of sudden fluid gain.",
      refs: ["For a normal prepregnancy BMI, the advised gain in the second and third trimesters is about 0.42 kg a week, within 0.35 to 0.50 kg."],
      sources: [GWG, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Gain is within the advised range", why: "Weekly gains of 0.40 to 0.43 kg sit inside the range of 0.35 to 0.50 kg." },
      { text: "Gain is below the advised range", why: "Each weekly gain is above the lower limit of 0.35 kg." },
      { text: "Gain is above the advised range", why: "Each weekly gain is below the upper limit of 0.50 kg." },
      { text: "A sudden gain suggests fluid retention", why: "The gain is steady and the BP stays normal." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s10-50", {
      topic: "Flat spot on an infant's head",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 3-month-old at a well visit has a flat area on the right back of the head. The right ear sits slightly forward of the left. The infant sleeps on the back and usually turns the head to the right. The infant turns the head fully both ways and meets milestones. Head circumference stays on the 50th percentile. Complete the diagram by choosing the condition the infant is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "A flat area on one side of the back of the head with the ear on that side pushed forward fits positional plagiocephaly. It comes from lying with the head turned the same way. The forward ear points away from lambdoid suture fusion. Full neck motion and steady head growth point away from torticollis and hydrocephalus. Supervised tummy time and alternating head position reduce pressure on the flat spot. Back sleeping stays in place.",
      sources: [SKULL, WONG],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Craniosynostosis", why: "Lambdoid suture fusion pulls the ear on the flat side backward. This ear sits forward." },
      { text: "Positional plagiocephaly", why: "A one-sided flat spot with the ear pushed forward fits pressure from positioning." },
      { text: "Congenital muscular torticollis", why: "Torticollis limits neck rotation. This infant turns fully both ways." },
      { text: "Hydrocephalus", why: "Hydrocephalus makes head circumference cross percentiles upward. It stays on the 50th." },
    ],
    actions: [
      { text: "Give supervised tummy time while awake", why: "Time prone while awake takes pressure off the back of the head." },
      { text: "Place the infant prone to sleep", why: "Back sleeping lowers the risk of sudden infant death and stays in place." },
      { text: "Alternate the head position at each sleep", why: "Changing the side the head faces spreads pressure over the skull." },
      { text: "Use a positioning pillow in the crib", why: "Soft items in the crib raise the risk of suffocation." },
      { text: "Arrange surgery on the skull sutures", why: "Positional flattening does not need surgery." },
    ],
    parameters: [
      { text: "Head shape at each visit", why: "Tracking the shape shows whether repositioning is working." },
      { text: "Serum calcium level", why: "Calcium does not guide positional head shape care." },
      { text: "Neck range of motion", why: "Neck motion is checked because a tight neck muscle can cause or worsen flattening." },
      { text: "Blood glucose level", why: "Glucose does not guide positional head shape care." },
      { text: "Hearing screen results", why: "Hearing is not affected by positional flattening." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [0, 2] },
  },
];
