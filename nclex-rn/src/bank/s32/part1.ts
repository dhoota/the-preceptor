import type { Item } from "@/engine/types";
import { AAN_ASM, ACOG_PB226, ADA_PREG, CDC_CO, LYNCH, NAMS_GSM, NAMS_HT, NAMS_NONHORMONE, USPSTF_BRCA, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s32-01", {
      need: "HPM",
      topic: "Choosing who needs a hereditary cancer referral",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A women's health clinic nurse reviews intake forms from four clients who have no personal history of cancer. Which client should the nurse flag for referral to genetic counseling?",
      rationale:
        "Ovarian cancer in a mother plus breast cancer before age 50 in an aunt on the same side of the family is a pattern that screens positive on familial risk tools. Women who screen positive are offered genetic counseling and, if indicated, BRCA testing. One grandmother with breast cancer at 81 years is a common late-onset pattern. Lung cancer in a father who smoked and cervical cancer in a sister do not suggest a BRCA variant. Dense breast tissue is not a reason for genetic referral.",
      sources: [USPSTF_BRCA],
    }),
    kind: "mc",
    options: [
      { text: "A 50-year-old whose grandmother had breast cancer at 81 years", why: "A single late-onset breast cancer in a second-degree relative does not screen positive on familial risk tools." },
      { text: "A 45-year-old whose father had lung cancer at 70 years after smoking for 40 years", why: "Lung cancer in a smoker is not a BRCA-related cancer and points to tobacco exposure." },
      { text: "A 38-year-old whose mother had ovarian cancer and aunt breast cancer at 44", why: "Ovarian cancer plus early breast cancer on one side of the family fits a possible inherited BRCA variant." },
      { text: "A 42-year-old whose sister had cervical cancer at 39 years", why: "Cervical cancer is caused by persistent HPV infection and is not part of BRCA-related cancer risk." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s32-02", {
      need: "HPM",
      topic: "Family history pattern of an inherited colon cancer syndrome",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 33-year-old client attends a wellness visit and has no symptoms. The nurse records the family history below. Click to highlight the entries that suggest an inherited cancer syndrome and warrant a genetic counseling referral.",
      rationale:
        "Colon cancer in the father at 46 years, endometrial cancer in a paternal aunt at 50 years and colon cancer in a paternal grandfather span two generations on the same side. Colon and endometrial cancers are the main Lynch syndrome cancers, and a diagnosis before 50 years adds to concern. Breast cancer at 79 years in one maternal relative is a common sporadic pattern. Hypertension, high cholesterol and a skin cancer removed from a sun-exposed site do not suggest Lynch syndrome.",
      sources: [LYNCH],
    }),
    kind: "highlight",
    passage:
      "Family history. Father: [[colon cancer diagnosed at 46 years]]. Paternal aunt: [[endometrial cancer diagnosed at 50 years]]. Paternal grandfather: [[colon cancer diagnosed at 61 years]]. Mother: [[hypertension treated with lisinopril since age 52]]. Maternal grandmother: [[breast cancer diagnosed at 79 years]]. Brother: [[high cholesterol treated with a daily statin]]. Maternal uncle: [[basal cell skin cancer removed from the nose]].",
    spans: [
      { text: "colon cancer diagnosed at 46 years", why: "Colon cancer before 50 years in a first-degree relative is a key Lynch syndrome feature." },
      { text: "endometrial cancer diagnosed at 50 years", why: "Endometrial cancer is the second main Lynch cancer and appears on the same paternal side." },
      { text: "colon cancer diagnosed at 61 years", why: "A third paternal relative with colon cancer in an older generation completes a two-generation pattern." },
      { text: "hypertension treated with lisinopril since age 52", why: "Hypertension is not linked to an inherited cancer syndrome." },
      { text: "breast cancer diagnosed at 79 years", why: "One late-onset breast cancer on the maternal side is a common sporadic finding." },
      { text: "high cholesterol treated with a daily statin", why: "High cholesterol does not point to an inherited cancer syndrome." },
      { text: "basal cell skin cancer removed from the nose", why: "Basal cell cancer on a sun-exposed site is common and is not a Lynch syndrome cancer." },
    ],
    correct: [0, 1, 2],
  },
  {
    ...meta("rn-s32-03", {
      need: "HPM",
      topic: "Responding to a high-risk cell-free DNA result",
      cjmm: "action",
      process: "communication",
      difficulty: 3,
      stem: "A 37-year-old client at 12 weeks of gestation learns that her cell-free DNA screen shows a high risk for trisomy 21. She says, \"So my baby has Down syndrome. I want to end the pregnancy this week.\" Which response by the nurse is most appropriate?",
      rationale:
        "Cell-free DNA is a screening test. A high-risk result is not a diagnosis, and false positives occur. Guidance advises that no irreversible decision be made on a screen alone. Chorionic villus sampling now or amniocentesis later gives a diagnosis. A repeat screen cannot confirm the result. A normal nuchal translucency does not rule out trisomy 21.",
      sources: [ACOG_PB226],
    }),
    kind: "mc",
    options: [
      { text: "\"This is a screen. A diagnostic test can confirm it before you decide.\"", why: "A screen-positive result needs chorionic villus sampling or amniocentesis to confirm before any irreversible step." },
      { text: "\"This test is highly accurate, so the result can be treated as final.\"", why: "High sensitivity does not make a screen diagnostic. Some positive results are false positives." },
      { text: "\"A second cell-free DNA test next week will confirm the result.\"", why: "Repeating a screen does not give a diagnosis. Only a diagnostic test can do that." },
      { text: "\"A normal neck fold on your next ultrasound would show the result is wrong.\"", why: "A normal nuchal translucency lowers the chance but does not rule out trisomy 21." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s32-04", {
      need: "HPM",
      topic: "Spina bifida screening after a cell-free DNA screen",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 29-year-old client at 11 weeks of gestation had a low-risk cell-free DNA screen for trisomies 13, 18 and 21. She asks, \"Does this mean the baby has been checked for spina bifida too?\" Which plan should the nurse explain?",
      rationale:
        "Cell-free DNA screens for chromosome conditions. It does not screen for open neural tube defects such as spina bifida. Those are screened in the second trimester with a detailed anatomy ultrasound, maternal serum alpha-fetoprotein or both. Chorionic villus sampling tests chromosomes, not neural tube closure. A repeat cell-free DNA screen still would not detect spina bifida.",
      sources: [ACOG_PB226],
    }),
    kind: "mc",
    options: [
      { text: "No more screening, since the result covers spina bifida", why: "Cell-free DNA does not assess neural tube defects, so this would leave spina bifida unscreened." },
      { text: "A repeat cell-free DNA screen later in the second trimester", why: "Cell-free DNA cannot detect an open neural tube defect at any gestational age." },
      { text: "Chorionic villus sampling at this visit", why: "Chorionic villus sampling tests chromosomes and does not detect a neural tube defect." },
      { text: "A second-trimester anatomy scan or serum alpha-fetoprotein", why: "These are the screens for open neural tube defects, done in the second trimester." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s32-05", {
      need: "HPM",
      topic: "Meaning of a cell-free DNA test with no result",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 34-year-old client at 10 weeks of gestation weighs 128 kg. The laboratory reports that her cell-free DNA screen gave no result because the fetal fraction was too low. The client asks whether this is good news. Which explanation should the nurse give?",
      rationale:
        "A screen with no result is not a normal result. Low fetal fraction is more common at higher maternal weight, but failed tests are also linked to a higher chance of fetal aneuploidy. The client is offered genetic counseling, an ultrasound and diagnostic testing. A repeat screen may be considered. Calling the failure benign or waiting until 20 weeks would delay that choice.",
      sources: [ACOG_PB226],
    }),
    kind: "mc",
    options: [
      { text: "It counts as a low-risk result for the three trisomies", why: "No result was reported, so it gives no reassurance about chromosomes." },
      { text: "It carries a higher chance of a chromosome condition", why: "Test failure is linked to aneuploidy, so counseling and diagnostic testing are offered." },
      { text: "It reflects her weight only, so her risk is unchanged", why: "Weight lowers fetal fraction, but a failed test still carries a higher aneuploidy risk." },
      { text: "It means the screen can be repeated only after 20 weeks", why: "Waiting until 20 weeks delays options. A repeat screen or diagnostic test can be offered now." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s32-06", {
      need: "HPM",
      topic: "Glucose control before conception in type 1 diabetes",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 27-year-old client with type 1 diabetes plans to have her contraceptive implant removed next month so she can conceive. Her A1C today is 8.1%. She has no hypoglycemia episodes. Which advice should the nurse give?",
      rationale:
        "An A1C of 8.1% is well above the preconception goal. Guidance aims for an A1C under 6.5% before conception when this is safe without hypoglycemia. High glucose around conception raises the risk of congenital anomalies and miscarriage. Contraception continues until glucose is optimized. Insulin stays the treatment in type 1 diabetes. Waiting for the first trimester misses the period when organs form.",
      refs: ["Preconception goal: A1C under 6.5% if achievable without significant hypoglycemia."],
      sources: [ADA_PREG],
    }),
    kind: "mc",
    options: [
      { text: "Have the implant removed now, since an A1C of 8.1% is safe for pregnancy", why: "An A1C of 8.1% raises the risk of congenital anomalies and is above the preconception goal." },
      { text: "Switch from insulin to an oral agent before trying to conceive", why: "Type 1 diabetes needs insulin. Oral agents do not replace it." },
      { text: "Keep the implant until the A1C is under 6.5% without hypoglycemia", why: "Effective contraception continues until glucose reaches the preconception goal safely." },
      { text: "Remove the implant and recheck the A1C in the first trimester", why: "The first trimester is when organs form, so control must be reached before conception." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s32-07", {
      need: "HPM",
      topic: "Planning pregnancy while taking valproate",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A 26-year-old client with generalized epilepsy has had no seizures for 2 years on valproate. She hopes to become pregnant next year and uses condoms inconsistently. Which actions should the nurse include in the preconception plan? Select all that apply.",
      rationale:
        "Valproate carries the highest risk of major malformations, neural tube defects and poor neurodevelopment. A neurologist reviews it before conception, because the neural tube closes before many people know they are pregnant. Folic acid at least 0.4 mg daily starts before conception. Effective contraception continues until the review is done. Stopping an antiseizure drug suddenly can trigger seizures, so the client takes it as prescribed until it is changed.",
      refs: ["Folic acid at least 0.4 mg daily before conception for people taking antiseizure medication."],
      sources: [AAN_ASM],
    }),
    kind: "sata",
    options: [
      { text: "Stop valproate once a home pregnancy test is positive", why: "The neural tube closes early in pregnancy, so a change after a positive test comes too late." },
      { text: "Arrange a neurology review of valproate before conception", why: "Valproate is avoided in pregnancy when feasible, so the medication is reviewed in advance." },
      { text: "Begin taking folic acid after the first prenatal visit", why: "Folic acid must start before conception to lower the neural tube defect risk." },
      { text: "Start folic acid at least 0.4 mg daily now", why: "Daily folic acid before conception lowers the neural tube defect risk with antiseizure medication." },
      { text: "Stop valproate this week to protect a future pregnancy", why: "Stopping an antiseizure drug suddenly can trigger seizures." },
      { text: "Use effective contraception until the review is done", why: "Reliable contraception prevents conception on valproate while the plan is made." },
      { text: "Keep taking valproate as prescribed until it is changed", why: "Seizure control continues until the neurologist changes the medication safely." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s32-08", {
      need: "HPM",
      topic: "Nondrug option for hot flashes with evidence",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 52-year-old client has had about 10 hot flashes a day since her last period 14 months ago. She had breast cancer 3 years ago and prefers not to take any medication. Which approach should the nurse suggest she discuss with her primary health care provider?",
      rationale:
        "Cognitive behavioral therapy has good evidence for reducing how much hot flashes bother people. It involves no drug, which fits the client's preference and her cancer history. Paced breathing did not beat control in trials. Black cohosh and soy supplements are not recommended because studies show little benefit, and their safety after breast cancer is not established.",
      sources: [NAMS_NONHORMONE],
    }),
    kind: "mc",
    options: [
      { text: "Cognitive behavioral therapy", why: "This therapy has good evidence for easing bothersome hot flashes and uses no medication." },
      { text: "Daily paced breathing exercises", why: "Trials showed no benefit over control, so this is not recommended for hot flashes." },
      { text: "Black cohosh capsules", why: "Herbal remedies such as black cohosh show little benefit and are not recommended." },
      { text: "Soy isoflavone supplements", why: "Soy supplements have not shown a reliable benefit and are not recommended for hot flashes." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s32-09", {
      need: "HPM",
      topic: "Checking menopause counseling on estrogen and dryness",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 4,
      stem: "A 54-year-old client with an intact uterus starts systemic estrogen with a progestin for hot flashes. She also reports vaginal dryness during sex. Which two statements by the client show understanding of the teaching? Select two.",
      rationale:
        "Estrogen alone thickens the lining of an intact uterus and raises the risk of endometrial cancer. The progestin protects the lining, so both are taken. Vaginal moisturizers used regularly and lubricants during sex are first-line care for dryness. Estrogen alone is not safer with a uterus. Paced breathing and black cohosh lack evidence. Lubricants do not worsen dryness.",
      sources: [NAMS_HT, NAMS_GSM],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I can skip the progestin if I have no bleeding.\"", why: "The progestin protects the uterine lining whether or not bleeding occurs." },
      { text: "\"I take the progestin to protect my uterus.\"", why: "With an intact uterus, a progestin prevents estrogen from overgrowing the lining." },
      { text: "\"Estrogen alone would be safer for my uterus.\"", why: "Unopposed estrogen raises the risk of endometrial hyperplasia and cancer." },
      { text: "\"A moisturizer and a lubricant can ease dryness.\"", why: "Regular moisturizers and lubricants during sex are first-line care for vaginal dryness." },
      { text: "\"Paced breathing will stop most of my hot flashes.\"", why: "Paced breathing did not reduce hot flashes in trials." },
      { text: "\"Lubricants during sex will make the dryness worse.\"", why: "Lubricants reduce friction and pain. They do not worsen dryness." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s32-10", {
      need: "SIPC",
      topic: "Steps when a home carbon monoxide alarm sounds",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A community health nurse teaches a family who installed a carbon monoxide alarm outside the bedrooms. The parents ask what to do if it sounds at night and their child has a headache. Place the steps in the order the family should take them.",
      rationale:
        "Carbon monoxide has no smell or color, so an alarm is treated as real. Everyone leaves for fresh air first, because each minute indoors adds exposure. The call to 911 is made from outside. A family member with a headache or dizziness needs prompt medical care. The family stays out until the fire department says the home is safe. Opening windows and staying in, or silencing the alarm, keeps people exposed.",
      sources: [CDC_CO],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Call 911 from outside the home", why: "The call is made from fresh air after everyone is out." },
      { text: "Open the windows and stay inside to air out the home", why: "Staying inside continues the exposure while the gas clears slowly." },
      { text: "Get everyone out to fresh air", why: "Leaving the home first stops further carbon monoxide exposure." },
      { text: "Stay out until the fire department clears the home", why: "Re-entering before the source is found risks more exposure." },
      { text: "Press the silence button and go back to bed", why: "Silencing a real alarm leaves the family breathing carbon monoxide." },
      { text: "Get prompt medical care for the child with a headache", why: "Headache can be an early sign of carbon monoxide poisoning and needs assessment." },
    ],
    correct: [2, 0, 5, 3],
  },
];
