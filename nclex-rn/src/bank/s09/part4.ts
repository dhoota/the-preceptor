import type { Item } from "@/engine/types";
import { ALCOHOL, BP_MEASURE, BREAST, CRC, FETAL_SURV, HTN, LOWDERMILK, LUNG, MEC, OSTEO, STI, TOBACCO, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s09-31", {
      topic: "Starting colorectal cancer screening",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A 46-year-old man at a health fair has no symptoms and has never been screened for colorectal cancer. He has no personal or family history of colorectal cancer or polyps. He asks when he should start screening. Which response by the nurse is accurate?",
      rationale:
        "Adults at average risk start colorectal cancer screening at age 45. At 46 with no symptoms and no personal or family history, he is at average risk and is due now. The older start age of 50 no longer applies. Waiting for blood in the stool misses the early, silent stage that screening is meant to find.",
      refs: ["Adults at average risk start colorectal cancer screening at age 45 and continue through age 75."],
      sources: [CRC, { body: "Canadian Task Force on Preventive Health Care", work: "Recommendations on Screening for Colorectal Cancer in Primary Care. CMAJ 188(5):340", year: 2016, url: "https://canadiantaskforce.ca/guidelines/published-guidelines/colorectal-cancer/" }, { body: "Ontario Health", work: "Colon Cancer Screening Eligibility is Changing in Ontario", year: 2026, url: "https://www.ontariohealth.ca/news/colon-cancer-screening-eligibility-is-changing-in-ontario" }],
      canada: "The Canadian Task Force on Preventive Health Care (2016) advises a FIT every 2 years from 50 to 74 and not colonoscopy for average-risk screening. Start age varies by province. Prince Edward Island and Ontario lowered it to 45 in 2026.",
    }),
    kind: "mc",
    options: [
      { text: "\"Screening is advised for you now.\"", why: "At 46 and average risk, he is past the start age of 45." },
      { text: "\"Screening begins for men at age 50.\"", why: "The start age for average risk adults was lowered to 45." },
      { text: "\"Screening is needed if you see blood.\"", why: "Blood in the stool calls for diagnostic testing. Screening is for people without symptoms." },
      { text: "\"Screening at 45 is for family history.\"", why: "Age 45 is the start age for everyone at average risk, not only those with a family history." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s09-32", {
      topic: "Chlamydia and gonorrhea screening criteria",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse at a community clinic reviews the charts of four sexually active clients who have no symptoms. Which client meets the criteria for routine chlamydia and gonorrhea screening?",
      rationale:
        "Routine screening is advised for all sexually active women 24 years or younger. The 22-year-old woman meets that criterion. Oral contraceptives do not protect against these infections. Older women are screened when they have risk factors, and none are given for the 30-year-old or the 58-year-old. Evidence is not enough to advise routine screening of men.",
      refs: ["Screen all sexually active women 24 years or younger and older women at increased risk. Evidence is insufficient for routine screening of men."],
      sources: [STI, { body: "National Advisory Committee on Sexually Transmitted and Blood-Borne Infections, Public Health Agency of Canada", work: "Chlamydia and Gonorrhea Screening Recommendations for Non-Pregnant Adults and Adolescents. Canada Communicable Disease Report 52(4):156", year: 2026, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13268405/" }],
      canada: "PHAC's NAC-STBBI statement (2026) suggests yearly chlamydia and gonorrhea screening for all sexually active people under 30, of any gender. Under that guidance the 28-year-old man would also be screened. The key follows the US criteria.",
    }),
    kind: "mc",
    options: [
      { text: "A 30-year-old woman married to one partner for 8 years", why: "She is older than 24 and has no stated risk factor." },
      { text: "A 28-year-old man who has one female partner", why: "Evidence is not enough to advise routine screening of men." },
      { text: "A 22-year-old woman who takes oral contraceptives", why: "Sexually active women 24 or younger are screened. Pills do not prevent infection." },
      { text: "A 58-year-old woman with one partner for 20 years", why: "She is older than 24 and has no stated risk factor." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s09-33", {
      topic: "Pack-years and lung cancer screening",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 58-year-old client with no symptoms smoked 1.5 packs of cigarettes a day for 18 years and quit 6 years ago. The nurse calculates the pack-year history to check eligibility for lung cancer screening. Which finding is accurate?",
      rationale:
        "Pack-years equal packs per day times years smoked. 1.5 packs a day for 18 years is 27 pack-years. The client is 58, has at least 20 pack-years and quit 6 years ago, within the 15 year limit. That meets the criteria for yearly low-dose CT screening.",
      calc: { expr: "1.5 * 18", answer: 27, unit: "pack-years", round: 0, steps: ["1.5 * 18 = 27"] },
      refs: ["Yearly low-dose CT screening is advised for adults aged 50 to 80 years with a 20 pack-year history who smoke now or quit within the past 15 years."],
      sources: [LUNG, { body: "Canadian Task Force on Preventive Health Care", work: "Recommendations on Screening for Lung Cancer. CMAJ 188(6):425", year: 2016, url: "https://canadiantaskforce.ca/guidelines/published-guidelines/lung-cancer/" }, { body: "Canadian Partnership Against Cancer", work: "Lung Screening in Canada, 2023-24: Program Guidelines", year: 2024, url: "https://www.partnershipagainstcancer.ca/topics/lung-screening-canada-2023-2024/programs/guidelines/" }],
      canada: "The Canadian Task Force on Preventive Health Care (2016) limits low-dose CT screening to ages 55 to 74 with 30 or more pack-years, so this client would not qualify. Provincial programs vary by province, and most use the PLCOm2012 risk calculator instead.",
    }),
    kind: "mc",
    options: [
      { text: "12 pack-years, not eligible for screening", why: "12 subtracts the 6 years since quitting from the 18 years smoked. That is not a pack-year count." },
      { text: "27 pack-years, eligible for yearly screening", why: "1.5 packs a day for 18 years is 27 pack-years. Age and quit time also meet the criteria." },
      { text: "27 pack-years, not eligible after quitting", why: "Quitting 6 years ago is within the 15 year window, so the client stays eligible." },
      { text: "36 pack-years, eligible for yearly screening", why: "36 treats 1.5 packs a day as 2 packs a day." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s09-34", {
      topic: "Screening plan for an older woman",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 66-year-old woman comes for a wellness visit. She has no symptoms and no personal or family history of cancer. She smoked for 10 years and quit 25 years ago. Her last mammogram and colonoscopy were 11 years ago. She has never had a bone density test. Which screenings should the nurse expect to be recommended? Select all that apply.",
      rationale:
        "Mammograms are advised every 2 years from 40 to 74. Colorectal screening continues to 75, and her colonoscopy was 11 years ago, past the 10 year interval. Women 65 and older have a bone density scan. She quit smoking 25 years ago, past the 15 year window for lung screening. A chest x-ray is not a recommended screening test.",
      refs: [
        "Mammography every 2 years is advised for women aged 40 to 74 years.",
        "Colorectal cancer screening continues through age 75. Colonoscopy is repeated every 10 years.",
        "Women 65 years and older are screened for osteoporosis.",
        "Lung cancer screening stops once a person has not smoked for 15 years.",
      ],
      sources: [BREAST, CRC, OSTEO, LUNG],
    }),
    kind: "sata",
    options: [
      { text: "Low-dose chest CT scan", why: "She quit 25 years ago. Lung screening stops after 15 years without smoking." },
      { text: "Screening mammogram", why: "Mammograms every 2 years are advised from 40 to 74." },
      { text: "Bone density scan", why: "Women 65 and older are screened for osteoporosis. She has never been tested." },
      { text: "Colorectal cancer screening", why: "Her colonoscopy was 11 years ago, past the 10 year interval, and she is under 75." },
      { text: "Yearly chest x-ray", why: "Chest x-ray is not a recommended lung cancer screen. Low-dose CT is the recommended test." },
    ],
    correct: [1, 2, 3],
  },
  {
    ...meta("rn-s09-35", {
      topic: "Blood pressure measurement technique",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse watches an assistive personnel measure the BP of a client at a screening clinic. Which actions by the assistive personnel need correction? Select all that apply.",
      rationale:
        "A cuff placed over a sleeve, talking during the reading and crossed legs all raise or distort the reading. The cuff goes on bare skin, the client stays quiet and the feet rest flat on the floor. A 5 minute rest, an arm supported at heart level and a cuff bladder that circles 80% of the arm are correct technique.",
      sources: [BP_MEASURE],
    }),
    kind: "sata",
    options: [
      { text: "Has the client sit quietly for 5 minutes", why: "A 5 minute rest before the reading is correct technique." },
      { text: "Supports the arm at heart level on a table", why: "An arm supported at heart level is correct technique." },
      { text: "Places the cuff over the shirt sleeve", why: "A cuff over clothing gives an inaccurate reading. It goes on bare skin." },
      { text: "Uses a cuff bladder that circles 80% of the arm", why: "A bladder that circles 80% of the arm is the right size." },
      { text: "Chats with the client during the reading", why: "Talking during the reading raises the BP. The client stays quiet." },
      { text: "Has the client rest both feet on the floor", why: "Feet flat on the floor is correct technique." },
      { text: "Lets the client sit with legs crossed", why: "Crossed legs raise the BP reading. The legs stay uncrossed." },
    ],
    correct: [2, 4, 6],
  },
  {
    ...meta("rn-s09-36", {
      topic: "Blood pressure response to lifestyle change",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 52-year-old client with stage 1 hypertension started a lifestyle plan in January. The plan includes a lower sodium diet and walking 30 minutes 5 days a week. No medication was prescribed. The nurse reviews the clinic records. Based on the trend, which conclusion is accurate?",
      tabs: [
        {
          title: "Clinic Records",
          table: {
            head: ["Measure", "January", "March", "May", "July"],
            rows: [
              ["Average home BP (mmHg)", "136/86", "132/84", "128/80", "124/78"],
              ["Weight (kg)", "96", "93", "90", "88"],
            ],
          },
        },
      ],
      rationale:
        "In January the average BP of 136/86 mmHg is stage 1 hypertension. By July it is 124/78 mmHg, with systolic between 120 and 129 and diastolic below 80. That is the elevated category. Weight fell from 96 to 88 kg over the same months. The steady fall shows the plan is working. The BP is not yet normal, which needs a systolic below 120.",
      refs: ["Normal BP is below 120/80 mmHg. Elevated BP is systolic 120 to 129 mmHg with diastolic below 80 mmHg. Stage 1 hypertension is systolic 130 to 139 or diastolic 80 to 89 mmHg."],
      sources: [HTN, { body: "Goupil R, Tsuyuki RT, Santesso N, et al. Hypertension Canada", work: "Hypertension Canada Guideline for the Diagnosis and Treatment of Hypertension in Adults in Primary Care. CMAJ 197", year: 2025, url: "https://doi.org/10.1503/cmaj.241770" }],
      canada: "Hypertension Canada's 2025 primary care guideline defines hypertension as 130/80 mmHg or higher and does not use the elevated or stage 1 labels. Its systolic target is below 130 mmHg, which this client met by July.",
    }),
    kind: "mc",
    options: [
      { text: "BP has reached the normal category", why: "A systolic of 124 mmHg is above the normal limit of 120 mmHg." },
      { text: "BP has moved from stage 1 to elevated", why: "136/86 mmHg is stage 1. 124/78 mmHg is elevated." },
      { text: "BP is still stage 1 and needs a drug", why: "By July the reading of 124/78 mmHg is below the stage 1 range." },
      { text: "BP change is too small to matter", why: "The BP fell from 136/86 to 124/78 mmHg and changed category." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s09-37", {
      topic: "Brief tobacco intervention",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 44-year-old client who smokes 20 cigarettes a day comes for a routine visit. The nurse gives a brief tobacco cessation intervention. Place the steps in the order the nurse should perform them.",
      rationale:
        "The brief intervention follows five steps. The nurse asks about tobacco use and then advises quitting in clear, personal terms. Next the nurse assesses whether the client will try to quit in the next 30 days. The nurse then assists with a plan and medication and arranges follow-up in the first week after the quit date. Deferring the topic misses a chance to help.",
      sources: [TOBACCO],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Help build a quit plan with medication", why: "Assisting with a plan and medication comes after readiness is assessed." },
      { text: "Ask whether the client uses tobacco", why: "Asking about tobacco use at every visit comes first." },
      { text: "Arrange a contact in the first week", why: "Follow-up soon after the quit date comes last." },
      { text: "Defer advice until the client raises it", why: "Waiting for the client to raise it misses the chance to help. It is not a step." },
      { text: "Advise the client clearly to quit", why: "Clear, personal advice to quit follows the question about use." },
      { text: "Assess readiness to quit in 30 days", why: "Readiness is assessed after the advice and before a plan is made." },
    ],
    correct: [1, 4, 5, 0, 2],
  },
  {
    ...meta("rn-s09-38", {
      topic: "Screening for unhealthy alcohol use",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse screens a 45-year-old woman for unhealthy alcohol use at a primary care visit. Which statement by the client is a positive screen that calls for brief counseling?",
      rationale:
        "For women, drinking 4 or more drinks in a day even once in the past year is a positive single-question screen. Five drinks at a party twice last month meets that criterion. One glass of wine a week and 2 beers a week are within the limits of 3 a day and 7 a week. A client who stopped 3 years ago has a negative screen.",
      refs: ["For women, any day with 4 or more drinks in the past year is a positive single-question screen. Low-risk limits for women are 3 drinks a day and 7 drinks a week."],
      sources: [ALCOHOL, { body: "Canadian Centre on Substance Use and Addiction", work: "Canada's Guidance on Alcohol and Health: Final Report", year: 2023, url: "https://www.ccsa.ca/en/guidance-tools-resources/substance-use-and-addiction/alcohol/canadas-guidance-alcohol-and-health" }],
      canada: "Canada's Guidance on Alcohol and Health (CCSA, 2023) uses one scale for all sexes. It rates 1 to 2 drinks a week as low risk and 3 to 6 as moderate risk, and links more than 2 drinks on one occasion to more harm.",
    }),
    kind: "mc",
    options: [
      { text: "\"I have a glass of wine with dinner on Fridays.\"", why: "One drink a week is within the low-risk limits for women." },
      { text: "\"I stopped drinking alcohol 3 years ago.\"", why: "No drinking in the past year is a negative screen." },
      { text: "\"I had 5 drinks at a party twice last month.\"", why: "Four or more drinks in a day is heavy drinking for women. The screen is positive." },
      { text: "\"I have 2 beers on Saturday evenings.\"", why: "Two drinks a week is within the low-risk limits of 3 a day and 7 a week." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s09-39", {
      topic: "Contraindications to combined oral contraceptives",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "Several clients at a family planning clinic ask to start a combined oral contraceptive. Which two clients have a condition that makes this method an unacceptable health risk? Select two.",
      rationale:
        "Estrogen raises the risk of stroke and blood clots. Migraine with aura adds to stroke risk, so it is category 4. Age 35 or older with 15 or more cigarettes a day is also category 4. A BMI of 32 and migraine without aura are category 2, where benefits usually outweigh risks. Varicose veins and a family history of breast cancer are category 1.",
      refs: ["Combined hormonal contraception is category 4 for migraine with aura and for age 35 or older with 15 or more cigarettes a day. BMI of 30 or more and migraine without aura are category 2. Varicose veins and a family history of breast cancer are category 1."],
      sources: [MEC],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "A 24-year-old with migraine with visual aura", why: "Migraine with aura raises stroke risk with estrogen. It is category 4." },
      { text: "A 29-year-old with a BMI of 32", why: "A BMI of 30 or more is category 2. Benefits usually outweigh risks." },
      { text: "A 37-year-old who smokes 20 cigarettes a day", why: "Age 35 or older with 15 or more cigarettes a day is category 4." },
      { text: "A 31-year-old with varicose veins", why: "Varicose veins are category 1. They are not a restriction." },
      { text: "A 26-year-old with migraine without aura", why: "Migraine without aura is category 2. Benefits usually outweigh risks." },
      { text: "A 33-year-old whose mother had breast cancer", why: "A family history of breast cancer is category 1." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s09-40", {
      topic: "Triage of prenatal phone calls",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "The nurse at a prenatal clinic has four phone messages to return. Which client should the nurse call first?",
      rationale:
        "Less fetal movement in the third trimester can mean the fetus is compromised. It needs same-day assessment such as a nonstress test. Morning nausea in the first trimester, leg cramps at night and ankle swelling late in the day are common discomforts of pregnancy. Those calls can follow.",
      sources: [LOWDERMILK, FETAL_SURV],
    }),
    kind: "mc",
    options: [
      { text: "At 12 weeks, has nausea most mornings", why: "Morning nausea is common in the first trimester. It is not urgent without signs of dehydration." },
      { text: "At 32 weeks, feels the baby moving less", why: "Less fetal movement in the third trimester needs prompt fetal assessment." },
      { text: "At 28 weeks, wakes with calf cramps", why: "Leg cramps at night are a common discomfort of pregnancy." },
      { text: "At 36 weeks, has ankle swelling at night", why: "Ankle swelling late in the day is common and eases with rest." },
    ],
    correct: 1,
  },
];
