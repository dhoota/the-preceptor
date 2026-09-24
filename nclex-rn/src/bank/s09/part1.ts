import type { Item } from "@/engine/types";
import { EXERCISE, FETAL_SURV, FOLIC, GDM, LOWDERMILK, PERRY, RHD, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s09-01", {
      topic: "Folic acid before conception",
      cjmm: "generate",
      process: "teaching",
      difficulty: 1,
      stem: "A 27-year-old client tells the clinic nurse that she and her partner plan to try for a pregnancy in the next few months. She takes no supplements. Which recommendation should the nurse reinforce?",
      rationale:
        "A person who could become pregnant should take 400 to 800 mcg of folic acid every day. The neural tube closes in the first weeks of pregnancy, often before the pregnancy is known. Starting before conception covers that window. Iron does not prevent neural tube defects. High-dose vitamin A can harm the fetus.",
      sources: [FOLIC, LOWDERMILK, { body: "Society of Obstetricians and Gynaecologists of Canada", work: "Guideline No. 427: Folic Acid and Multivitamin Supplementation for Prevention of Folic Acid-Sensitive Congenital Anomalies. Journal of Obstetrics and Gynaecology Canada 44:707", year: 2022, url: "https://sogc.org/en/en/content/guidelines-jogc/latest-guidelines/Folic_Acid_and_Multivitamin_Supplementation_427.aspx" }],
      canada: "SOGC Guideline No. 427 (2022) advises a daily multivitamin with 0.4 mg folic acid, started 3 months before conception, for people at low risk. People at moderate or high risk take higher doses.",
    }),
    kind: "mc",
    options: [
      { text: "Start a daily iron supplement of 65 mg", why: "Iron does not prevent neural tube defects. Folic acid is the supplement to start before conception." },
      { text: "Wait to start vitamins until a test is positive", why: "The neural tube closes early, often before a pregnancy is known. Waiting misses that window." },
      { text: "Take folic acid 400 to 800 mcg each day", why: "Daily folic acid in this range before conception lowers the risk of neural tube defects." },
      { text: "Take vitamin A 10 000 units each day", why: "High doses of vitamin A are linked to birth defects. They are not advised before pregnancy." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s09-02", {
      topic: "Probable signs of pregnancy",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 24-year-old client with a missed menstrual period comes to a women's health clinic. The nurse reviews the findings from her history and exam. Which findings are probable signs of pregnancy? Select all that apply.",
      rationale:
        "Probable signs are found by an examiner but have other possible causes. A positive hCG test, Hegar sign and ballottement are probable signs. Breast tenderness and morning nausea are presumptive signs that the client reports. Fetal heart tones heard by Doppler are a positive sign, because only a fetus produces them.",
      sources: [LOWDERMILK],
    }),
    kind: "sata",
    options: [
      { text: "Positive urine hCG test", why: "An hCG test is a probable sign. Some tumors and drugs can also give a positive result." },
      { text: "Breast tenderness", why: "Breast tenderness is a presumptive sign. The client reports it and it has many causes." },
      { text: "Hegar sign on pelvic exam", why: "Softening of the lower uterine segment is found on exam. It is a probable sign." },
      { text: "Nausea in the morning", why: "Nausea is a presumptive sign. The client reports it and it has other causes." },
      { text: "Fetal heart tones by Doppler", why: "Fetal heart tones come only from a fetus. They are a positive sign, not a probable one." },
      { text: "Ballottement of the fetus", why: "A rebound of the fetus felt on exam is a probable sign. A tumor can mimic it." },
    ],
    correct: [0, 2, 5],
  },
  {
    ...meta("rn-s09-03", {
      topic: "Fundal height lag",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client at 30 weeks of gestation has a routine prenatal visit. Her fundal height today is 24 cm. At her visit at 26 weeks it was 25 cm. What should the nurse do?",
      rationale:
        "From 20 to 36 weeks the fundal height in centimeters should be close to the weeks of gestation. At 30 weeks this client measures 24 cm, and the height has fallen since 26 weeks. A lag like this can mean fetal growth restriction or low amniotic fluid. The provider needs to know so an ultrasound can assess growth.",
      refs: ["From 20 to 36 weeks of gestation, fundal height in centimeters approximates the weeks of gestation within about 2 cm."],
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Report the measurement to the provider", why: "The height is well below 30 cm and has fallen since the last visit. It needs follow-up for fetal growth." },
      { text: "Record it as expected for the weeks", why: "At 30 weeks the height should be near 30 cm. A height of 24 cm is not expected." },
      { text: "Recheck the height at the next visit", why: "Waiting delays an ultrasound. A height that falls between visits needs report now." },
      { text: "Teach the client to count fetal kicks", why: "Kick counts track fetal movement. They do not assess fetal growth." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s09-04", {
      topic: "Timing of gestational diabetes screening",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client at 12 weeks of gestation has no history of diabetes, no prior pregnancies and a body mass index of 23. She asks when she will be tested for diabetes of pregnancy. Which response by the nurse is accurate?",
      rationale:
        "Clients without risk factors are screened for gestational diabetes at 24 to 28 weeks. Insulin resistance rises in the second half of pregnancy, so testing then finds most cases. This client has a normal body mass index and no prior gestational diabetes, so early testing is not indicated. Urine glucose is not a reliable screen.",
      sources: [GDM, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "It is done at the first prenatal visit.", why: "Early testing is for clients with risk factors such as obesity or prior gestational diabetes. This client has none." },
      { text: "It is done only if urine shows sugar.", why: "Urine glucose is a poor screen. Pregnant clients are screened with a blood glucose test." },
      { text: "It is done after the baby is born.", why: "Postpartum testing follows gestational diabetes. It does not replace screening during pregnancy." },
      { text: "It is done at 24 to 28 weeks of pregnancy.", why: "Clients without risk factors are screened in this window, when insulin resistance rises." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s09-05", {
      topic: "Warning signs in pregnancy",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches a client at 20 weeks of gestation about warning signs to report during pregnancy. Which two statements by the client show understanding? Select two.",
      rationale:
        "A headache that does not go away can be a sign of preeclampsia. Fluid leaking from the vagina can mean the membranes have ruptured, which at 20 weeks is a serious problem. Ankle swelling late in the day, afternoon fatigue, heartburn and thin white discharge are common in pregnancy and do not need urgent report.",
      sources: [LOWDERMILK],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will call if I have a headache that will not go away.\"", why: "A persistent headache can signal preeclampsia and needs prompt assessment." },
      { text: "\"I will call if my ankles swell at the end of the day.\"", why: "Mild ankle swelling late in the day is common in pregnancy. It eases with rest." },
      { text: "\"I will call if I leak fluid from my vagina.\"", why: "Leaking fluid can mean ruptured membranes, which needs prompt assessment." },
      { text: "\"I will call if I feel tired in the afternoon.\"", why: "Fatigue is common in pregnancy and is not a warning sign by itself." },
      { text: "\"I will call if I get heartburn after meals.\"", why: "Heartburn is common as the uterus grows and progesterone relaxes the stomach sphincter." },
      { text: "\"I will call if I see a thin white discharge.\"", why: "Thin white discharge, called leukorrhea, is normal in pregnancy." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s09-06", {
      topic: "Antenatal Rh(D) immune globulin",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client at 28 weeks of gestation is Rh-negative. Her antibody screen today is negative. The father of the baby is Rh-positive. Which action should the nurse anticipate?",
      rationale:
        "An Rh-negative client who is not sensitized gets Rh(D) immune globulin at about 28 weeks. Small fetal bleeds late in pregnancy can sensitize her, and the dose prevents this. A negative antibody screen shows she is not yet sensitized. Titers are for a client who already has antibodies. The drug goes to the mother, not the newborn.",
      refs: ["Rh(D) immune globulin is given at about 28 weeks and again within 72 hours of birth if the newborn is Rh-positive."],
      sources: [RHD, LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Repeat the antibody screen at birth", why: "Waiting until birth leaves the third trimester without protection. The dose is due now." },
      { text: "Give Rh(D) immune globulin IM now", why: "A dose at 28 weeks prevents sensitization from small fetal bleeds late in pregnancy." },
      { text: "Give Rh(D) immune globulin to the newborn", why: "The drug is given to the Rh-negative mother. It stops her from forming antibodies." },
      { text: "Schedule antibody titers each week", why: "Serial titers are for a client who is already sensitized. Her screen is negative." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s09-07", {
      topic: "Sequence of Leopold maneuvers",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse prepares to perform Leopold maneuvers on a client at 36 weeks of gestation. Place the steps in the order the nurse should perform them.",
      rationale:
        "The client empties her bladder first so the uterus is easier to feel. The first maneuver palpates the fundus to identify the fetal part there. The second palpates each side to find the fetal back. The third grasps the part above the symphysis. The fourth moves toward the pelvis to find the brow. The fetal heart is then heard best over the back, not the fundus.",
      sources: [LOWDERMILK, PERRY],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Palpate the fundus for the fetal part", why: "The first maneuver identifies the part in the fundus, often the buttocks." },
      { text: "Palpate each side for the fetal back", why: "The second maneuver locates the smooth back and the small parts." },
      { text: "Grasp the part above the symphysis", why: "The third maneuver identifies the presenting part and whether it moves." },
      { text: "Palpate toward the pelvis for the brow", why: "The fourth maneuver finds the cephalic prominence and descent." },
      { text: "Listen to the fetal heart over the fundus", why: "The fetal heart is heard best over the fetal back, found in the second maneuver." },
      { text: "Ask the client to empty her bladder", why: "An empty bladder makes palpation more accurate and more comfortable. It comes first." },
    ],
    correct: [5, 0, 1, 2, 3],
  },
  {
    ...meta("rn-s09-08", {
      topic: "Interpreting a nonstress test",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client at 34 weeks of gestation has a nonstress test. Over 20 minutes the baseline is 140/minute with moderate variability. There are 2 accelerations that peak 15 beats/minute above baseline and last 15 seconds each. How should the nurse interpret the result?",
      rationale:
        "At 34 weeks a reactive test needs 2 accelerations that peak at least 15 beats/minute above baseline and last at least 15 seconds within 20 minutes. This tracing meets that standard. Moderate variability is also reassuring. A reactive result shows a well-oxygenated fetus at the time of the test.",
      refs: ["At 32 weeks or more, a nonstress test is reactive with 2 or more accelerations that peak at least 15 beats/minute above baseline and last at least 15 seconds within 20 minutes."],
      sources: [FETAL_SURV, LOWDERMILK, { body: "UBC Continuing Professional Development, FHS Canada", work: "Fundamentals of Fetal Health Surveillance Online Manual, Table 7.7: Classification of Antepartum Non-Stress Test, adapted from SOGC", year: 2023, url: "https://ubccpd.ca/sites/default/files/documents/Classification-of-antepartum-non-stress-test.pdf" }],
      canada: "SOGC classifies an antenatal NST as normal, atypical or abnormal, not reactive or nonreactive. Canadian charts would call this tracing a normal NST, with 2 accelerations of at least 15 beats/minute for 15 seconds within 40 minutes.",
    }),
    kind: "mc",
    options: [
      { text: "Nonreactive, which calls for a contraction stress test", why: "A nonreactive test lacks enough accelerations. This tracing has 2 that meet the criteria." },
      { text: "Suspicious, because variability is moderate", why: "Moderate variability is a reassuring finding. It is not a reason for concern." },
      { text: "Reactive, which shows reassuring fetal status", why: "Two accelerations of 15 beats/minute for 15 seconds in 20 minutes meet the reactive criteria." },
      { text: "Equivocal, which calls for a biophysical profile", why: "The tracing meets the reactive criteria, so an equivocal label does not apply." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s09-09", {
      topic: "Diet and activity in early pregnancy",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A client at 10 weeks of gestation asks about diet and activity. She walks 20 minutes most days and has a cat at home. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Unpasteurized soft cheese can carry Listeria, which can cause miscarriage. Cat feces and undercooked meat can carry Toxoplasma, so someone else changes the litter and meat is fully cooked. Pregnant clients without complications should aim for 150 minutes of moderate activity each week. Swordfish is high in mercury. No amount of alcohol is known to be safe in pregnancy.",
      sources: [EXERCISE, LOWDERMILK],
    }),
    kind: "sata",
    options: [
      { text: "Eat swordfish up to twice a week", why: "Swordfish is high in mercury, which harms the fetal nervous system." },
      { text: "Avoid soft cheese made from unpasteurized milk", why: "Unpasteurized soft cheese can carry Listeria, which can cause fetal loss." },
      { text: "Limit alcohol to one drink a day", why: "No safe amount of alcohol in pregnancy is known. The advice is to avoid it." },
      { text: "Stop exercising once pregnancy is confirmed", why: "Regular moderate activity is safe and helpful in an uncomplicated pregnancy." },
      { text: "Aim for 150 minutes of moderate activity each week", why: "This is the weekly target for pregnant clients without complications." },
      { text: "Have someone else change the cat litter", why: "Cat feces can carry Toxoplasma, which can infect the fetus." },
      { text: "Cook meat to a safe internal temperature", why: "Undercooked meat can carry Toxoplasma and other pathogens." },
    ],
    correct: [1, 4, 5, 6],
  },
  {
    ...meta("rn-s09-10", {
      topic: "Supine hypotension in late pregnancy",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client at 32 weeks of gestation lies flat on her back for a prenatal exam. After 5 minutes she reports dizziness and nausea. Her BP is 96/58 mmHg, down from 118/72 mmHg on arrival. What should the nurse do first?",
      rationale:
        "Lying flat lets the heavy uterus press on the inferior vena cava. Venous return falls, so cardiac output and BP drop. The BP fell from 118/72 to 96/58 mmHg with dizziness and nausea. Turning her to the left side lifts the uterus off the vena cava and restores blood flow. Raising the legs or giving oxygen does not relieve the compression.",
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Turn the client onto her left side", why: "A left lateral position moves the uterus off the vena cava and restores venous return." },
      { text: "Raise the client's legs on two pillows", why: "Raising the legs does not lift the uterus off the vena cava." },
      { text: "Start oxygen at 10 L/minute by mask", why: "Oxygen does not relieve the vena cava compression that caused the drop." },
      { text: "Recheck the BP again in 15 minutes", why: "Waiting leaves the vena cava compressed and the low BP untreated." },
    ],
    correct: 0,
  },
];
