import type { Item } from "@/engine/types";
import { ACOG_GBS, ACOG_RH, ERCP, HINKLE, JARVIS, NICE_BIPOLAR, PAGANA, POTTER, WONG, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s20-31", {
      topic: "Discharge teaching after amniocentesis",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 36-year-old client at 16 weeks of gestation had a genetic amniocentesis today. Her blood type is A negative with a negative antibody screen, and the father's blood type is unknown. Which instructions should the nurse include in discharge teaching? Select all that apply.",
      rationale:
        "The needle passes through the uterus into the amniotic sac. Leaking fluid can signal ruptured membranes. Fever or chills can signal infection. Worsening cramps can signal preterm labor or miscarriage. An Rh negative client whose fetus may be Rh positive receives Rh immune globulin after the procedure. Heavy bleeding is not expected. Strict bed rest and fluid limits are not needed.",
      sources: [ACOG_RH, PAGANA],
    }),
    kind: "sata",
    options: [
      { text: "Report fluid leaking from the vagina", why: "Leaking fluid can mean the membranes have ruptured." },
      { text: "Expect heavy bleeding for 2 days", why: "Heavy bleeding is not expected and needs prompt reporting." },
      { text: "Report a fever or chills", why: "Fever can signal infection of the amniotic sac." },
      { text: "Stay on strict bed rest for 1 week", why: "Normal activity resumes after a short rest. Prolonged bed rest is not needed." },
      { text: "Receive Rh immune globulin before leaving", why: "It prevents sensitization if fetal Rh positive cells entered her blood." },
      { text: "Limit fluids for the rest of the day", why: "Fluid limits are not part of care after amniocentesis." },
      { text: "Report cramps that keep getting worse", why: "Worsening cramps can signal preterm labor or miscarriage." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s20-32", {
      topic: "Timing of newborn blood spot screening",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A term newborn is going home at 20 hours of age after an uncomplicated birth. The newborn blood spot screen was collected at 18 hours of age. The newborn has breastfed well since birth. Which action should the nurse take?",
      rationale:
        "Screening for disorders such as phenylketonuria depends on the newborn taking in protein for a period. A sample taken before 24 hours of age can give a false negative result. The first screen was taken at 18 hours. The nurse arranges a repeat screen in the next few days. A second sample drawn now would still be under 24 hours. Keeping the newborn in hospital is not required.",
      refs: ["A newborn screen collected before 24 hours of age is repeated in the first days of life because early samples can miss disorders."],
      canada: "Newborn screening in Canada is run by each province and territory, so the disorders screened and the collection rules vary by province. Newborn Screening Ontario, for example, collects at 24 to 48 hours and needs a repeat after an earlier sample.",
      sources: [WONG, { body: "Newborn Screening Ontario", work: "Submitter Hub: Time of Collection", year: 2026, url: "https://submitterhub.newbornscreening.on.ca/dried-blood-spot/time-of-collection/" }],
    }),
    kind: "mc",
    options: [
      { text: "Tell the parents the screening is complete", why: "A sample at 18 hours can miss disorders, so the screen is not complete." },
      { text: "Collect a second blood spot before discharge", why: "A sample at 20 hours is still under 24 hours and has the same limits." },
      { text: "Arrange a repeat screen in the next few days", why: "A repeat after 24 hours of feeding gives a reliable result." },
      { text: "Keep the newborn in hospital until 48 hours", why: "Hospital stay is not needed. The repeat can be done as an outpatient." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s20-33", {
      topic: "Timing of group B streptococcus screening",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client at 32 weeks of gestation asks when she will be tested for group B streptococcus. She has no previous infant with this infection, and her urine cultures this pregnancy have been negative. Which response by the nurse is accurate?",
      rationale:
        "Universal screening uses a vaginal and rectal culture late in pregnancy. The window is 36 0/7 to 37 6/7 weeks of gestation. A culture this close to birth best predicts colonization at delivery. Earlier cultures predict it less well. Waiting until labor loses the chance to plan antibiotic prophylaxis.",
      refs: ["Universal group B streptococcus screening by vaginal and rectal culture is done between 36 0/7 and 37 6/7 weeks of gestation."],
      canada: "SOGC Guideline No. 298 (reaffirmed 2018) offers GBS screening at 35 to 37 weeks of gestation, with one swab to the vagina and then the rectum. The keyed 36 to 37 week window falls within it.",
      sources: [ACOG_GBS, { body: "Money D, Allen VM. Society of Obstetricians and Gynaecologists of Canada", work: "No. 298: The Prevention of Early-Onset Neonatal Group B Streptococcal Disease. Journal of Obstetrics and Gynaecology Canada 40(8):e665", year: 2018, url: "https://pubmed.ncbi.nlm.nih.gov/30103891/" }],
    }),
    kind: "mc",
    options: [
      { text: "Between 24 and 28 weeks", why: "A culture this early does not predict colonization at birth well." },
      { text: "Between 32 and 34 weeks", why: "This is earlier than the recommended window and less predictive." },
      { text: "Between 36 and 37 weeks", why: "Screening at 36 0/7 to 37 6/7 weeks best predicts status at birth." },
      { text: "At the onset of labor", why: "Waiting for labor leaves no time to plan prophylaxis from a culture." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s20-34", {
      topic: "Timing a serum lithium level",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client takes lithium carbonate 450 mg by mouth at 2100 each evening. The primary health care provider prescribes a serum lithium level for tomorrow. At what time should the nurse arrange the blood draw?",
      rationale:
        "Serum lithium ranges are set for samples drawn 12 hours after the last dose. The dose is taken at 2100, so the sample is drawn at 0900. A sample drawn sooner catches the level while absorption is still under way and reads falsely high. A sample drawn much later reads falsely low.",
      refs: ["Serum lithium levels are drawn 12 hours after the last dose."],
      sources: [NICE_BIPOLAR],
    }),
    kind: "mc",
    options: [
      { text: "0500 tomorrow", why: "This is too soon after the dose. The level still reflects absorption and reads high." },
      { text: "0900 tomorrow", why: "0900 is 12 hours after the 2100 dose, matching how ranges are set." },
      { text: "1300 tomorrow", why: "This is later than 12 hours, so the level reads lower than the standard sample." },
      { text: "2045 tomorrow", why: "This is just before the next dose and does not match the reference ranges." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s20-35", {
      topic: "Teaching after mastectomy with node removal",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client had a left modified radical mastectomy with axillary lymph node removal 2 days ago. She is going home with a wound drain. Which statements by the client show understanding of the discharge teaching? Select all that apply.",
      rationale:
        "Drain output is emptied and recorded so the surgeon can decide when to remove it. Node removal slows lymph flow in the left arm. Protecting that arm from injury and reporting swelling or redness helps prevent and detect lymphedema and infection. Prescribed arm exercises restore range of motion. Holding the arm still causes stiffness. The drain site is kept out of bath water.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "\"I will keep my left arm still until the drain is out.\"", why: "Prescribed exercises start early. Holding the arm still leads to stiffness." },
      { text: "\"I will empty the drain and write down the amount.\"", why: "Recorded output guides when the drain can be removed." },
      { text: "\"I will have blood pressures taken on my left arm.\"", why: "The arm on the side of node removal is protected from cuff pressure." },
      { text: "\"I will wear gloves when I work in the garden.\"", why: "Gloves prevent cuts that could lead to infection in the arm." },
      { text: "\"I will report new swelling or redness in my left arm.\"", why: "Swelling can signal lymphedema and redness can signal infection." },
      { text: "\"I will soak in the bathtub while the drain is in.\"", why: "Soaking the drain site raises the risk of infection." },
      { text: "\"I will do the arm exercises I was shown.\"", why: "Exercises restore shoulder motion after surgery." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s20-36", {
      topic: "Venipuncture site with an infusing IV",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client has dextrose 5% in 0.45% sodium chloride infusing through an IV in the left forearm. The nurse must draw blood for a glucose level by venipuncture. Where should the nurse draw the sample?",
      rationale:
        "Blood drawn near an infusion can mix with the IV fluid. Dextrose in the fluid would falsely raise the glucose. The opposite arm gives a sample free of the infusion. Drawing above the IV site or from the same arm risks contamination. Drawing from the running IV catheter adds fluid to the sample.",
      sources: [POTTER, PAGANA],
    }),
    kind: "mc",
    options: [
      { text: "Just above the IV site in the left arm", why: "Veins above the site carry the infused dextrose and falsely raise glucose." },
      { text: "From the IV catheter without pausing it", why: "A running infusion mixes fluid into the sample." },
      { text: "From the left antecubital vein", why: "This vein drains the arm with the infusion and can carry dextrose." },
      { text: "From a vein in the right arm", why: "The arm without an infusion gives a sample free of IV fluid." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s20-37", {
      topic: "Abdominal pain after ERCP",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A client had endoscopic retrograde cholangiopancreatography with sphincterotomy 6 hours ago. The client now reports severe upper abdominal pain that radiates to the back and has vomited twice. Heart rate is 112/minute and temperature 37.6°C (99.7°F). Serum lipase is 1450 units/L, with an upper reference limit of 60 units/L. An abdominal x-ray shows no free air. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Pancreatitis is the most common serious adverse event after this procedure. New severe epigastric pain radiating to the back fits it. A lipase of 1450 units/L is more than 3 times the limit of 60 units/L. That rise is the specific finding. No free air makes perforation less likely. The heart rate, temperature and vomiting are nonspecific.",
      refs: ["Pancreatitis after ERCP is defined by new or worse abdominal pain with amylase or lipase at least 3 times the upper limit of normal."],
      sources: [ERCP],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is most likely developing {0}, as shown by {1}.",
    blanks: [
      {
        options: [
          { text: "bowel perforation", why: "No free air on the x-ray makes perforation less likely." },
          { text: "pancreatitis", why: "Back-radiating epigastric pain and a lipase of 1450 units/L fit pancreatitis." },
          { text: "biliary colic", why: "Colic does not raise lipase to more than 3 times the limit." },
          { text: "aspiration pneumonia", why: "The stem gives no cough, crackles or low oxygen saturation." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a heart rate of 112/minute", why: "A fast heart rate fits many conditions and is not specific." },
          { text: "a temperature of 37.6°C", why: "A slight rise in temperature is not specific to any condition listed." },
          { text: "a lipase above 3 times normal", why: "A lipase of 1450 units/L is more than 3 times the 60 units/L limit." },
          { text: "two episodes of vomiting", why: "Vomiting occurs with many problems after sedation and procedures." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s20-38", {
      topic: "Positioning to assess jugular venous pressure",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse plans to assess jugular venous pressure in a client with suspected right-sided heart failure. How should the nurse position the client?",
      rationale:
        "Jugular venous pressure is assessed with the head of the bed raised to 30 to 45 degrees. At this angle the top of the venous column shows in the neck. Lying flat fills the neck veins in most people and hides a true rise. Sitting at 90 degrees can drop the column below the clavicle. Side-lying changes neck vein filling and gives no standard reading.",
      sources: [JARVIS],
    }),
    kind: "mc",
    options: [
      { text: "Flat on the back with no pillow", why: "Lying flat distends neck veins in most people and hides true pressure." },
      { text: "Sitting upright at 90 degrees", why: "At 90 degrees the venous column can fall below the clavicle." },
      { text: "Head of bed raised 30 to 45 degrees", why: "This angle shows the top of the venous column in the neck." },
      { text: "Lying on the left side", why: "Side-lying changes neck vein filling and prevents a standard reading." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s20-39", {
      topic: "Care after lumbar spinal fusion",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client is 4 hours after a posterior lumbar spinal fusion at L4 and L5. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The spine is kept aligned, so the client turns by log rolling. Leg movement and sensation are checked because swelling or bleeding can compress nerve roots. Clear fluid on the dressing can signal a dural tear with a spinal fluid leak. Anesthesia, opioids and lying flat can cause urinary retention. Twisting and low soft chairs strain the fusion.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Have the client twist to reach the table", why: "Twisting strains the fusion site." },
      { text: "Log roll the client to turn", why: "Log rolling keeps the spine aligned while turning." },
      { text: "Delay the first void check until morning", why: "Retention can develop within hours and needs early checks." },
      { text: "Check leg movement and sensation", why: "New weakness or numbness can signal nerve root compression." },
      { text: "Check the dressing for clear fluid", why: "Clear drainage can signal a spinal fluid leak from a dural tear." },
      { text: "Seat the client in a low soft chair", why: "A low soft chair forces spinal flexion when rising." },
      { text: "Monitor for urinary retention", why: "Anesthesia and opioids can cause retention after spinal surgery." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s20-40", {
      topic: "Collecting a clean-catch urine specimen",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse teaches a female client how to collect a clean-catch midstream urine specimen. Place the steps in the order the client should perform them.",
      rationale:
        "Hand hygiene comes first. The labia are cleaned from front to back so organisms from the rectal area are not carried forward. The first part of the stream flushes the urethra into the toilet. The midstream portion is caught in the sterile cup. The client finishes voiding into the toilet. The inside of the lid stays untouched.",
      sources: [POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Catch the midstream urine in the cup", why: "The midstream portion is least contaminated by urethral organisms." },
      { text: "Perform hand hygiene", why: "Clean hands come first to protect the sterile cup." },
      { text: "Finish voiding into the toilet", why: "The end of the stream is not needed in the sample." },
      { text: "Catch the first urine in the cup", why: "The first urine flushes urethral organisms and is not collected." },
      { text: "Clean the labia front to back", why: "Front to back cleaning avoids carrying rectal organisms forward." },
      { text: "Start voiding into the toilet", why: "The first part of the stream flushes the urethra." },
      { text: "Set the lid inside down on the counter", why: "The inside of the lid is sterile and is placed facing up." },
    ],
    correct: [1, 4, 5, 0, 2],
  },
];
