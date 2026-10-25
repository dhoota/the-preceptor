import type { Item } from "@/engine/types";
import { ACOG_DYSTOCIA, ACOG_PREECLAMPSIA, HOCKENBERRY, PACHECO_AFE, SAYED_CORD, SOGC_HDP, SWEET_RDS, meta } from "./common";

export const PART5: Item[] = [
  {
    ...meta("rn-s38-41", {
      need: "PA",
      topic: "Home plan for a child on steroids for protein loss",
      cjmm: "generate",
      process: "teaching",
      difficulty: 4,
      stem: "A 4-year-old child with nephrotic syndrome is going home on daily prednisone. The urine protein is now trace and the edema is improving. Which instructions should the nurse include in the discharge teaching? Select all that apply.",
      rationale:
        "Relapse shows first as protein in the urine, so the first morning urine is tested and recorded each day. Daily weights on the same scale detect fluid gain early. Prednisone and the protein losses of the disease raise infection risk, so fever is reported promptly. Live vaccines are delayed during high-dose steroids. Prednisone is tapered, not stopped suddenly. Protein intake stays normal and fluids are not routinely limited.",
      sources: [HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Limit fluids to 500 mL each day", why: "Fluids are not routinely restricted once edema is improving." },
      { text: "Test the first morning urine for protein daily", why: "A rise in urine protein is the earliest sign of relapse." },
      { text: "Stop the prednisone when the urine is clear", why: "Prednisone is tapered on a schedule. Stopping suddenly risks adrenal insufficiency and relapse." },
      { text: "Weigh the child each day on the same scale", why: "Daily weights detect fluid retention early." },
      { text: "Offer a high-protein diet at every meal", why: "Extra protein does not reduce urine losses. A normal protein intake is advised." },
      { text: "Report a fever or signs of infection promptly", why: "Steroids and the loss of immune proteins in urine raise infection risk." },
      { text: "Delay live vaccines while on high-dose steroids", why: "Live vaccines can cause infection when the immune system is suppressed." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s38-42", {
      need: "PA",
      topic: "Right upper abdominal pain with low platelets at 33 weeks",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 30-year-old client at 33 weeks of gestation reports right upper abdominal pain and nausea. BP is 162/108 mmHg. Platelets are 72 000/mm3, AST is 214 units/L and LDH is 780 units/L. The blood smear shows fragmented red cells. Blood glucose is 92 mg/dL (5.1 mmol/L). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Fragmented red cells and an LDH of 780 units/L show hemolysis. An AST of 214 units/L shows liver injury, and platelets are 72 000/mm3. This is HELLP syndrome. Magnesium sulfate prevents seizures. A systolic BP of 162 mmHg is in the severe range and needs prompt IV labetalol. Platelets are rechecked because they can fall fast. Deep tendon reflexes detect magnesium toxicity.",
      refs: [
        "HELLP syndrome: LDH 600 units/L or more, AST more than twice the upper limit of normal and platelets below 100 000/mm3.",
        "Severe-range BP in pregnancy is systolic 160 mmHg or more or diastolic 110 mmHg or more.",
      ],
      sources: [ACOG_PREECLAMPSIA, SOGC_HDP],
      canada: "SOGC Guideline 426 also defines severe hypertension as a systolic BP of 160 mmHg or more or a diastolic BP of 110 mmHg or more, and advises magnesium sulphate. Canadian labs report platelets as 72 x 10^9/L and glucose as 5.1 mmol/L only.",
    }),
    kind: "bowtie",
    conditions: [
      { text: "Acute fatty liver of pregnancy", why: "This condition usually causes low blood glucose. The glucose here is 92 mg/dL." },
      { text: "Immune thrombocytopenia", why: "This lowers platelets alone and does not cause hemolysis, liver injury or high BP." },
      { text: "HELLP syndrome", why: "Hemolysis, raised liver enzymes and low platelets with high BP define this syndrome." },
      { text: "Acute cholecystitis", why: "Gallbladder disease does not cause hemolysis, low platelets or severe hypertension." },
    ],
    actions: [
      { text: "Start IV magnesium sulfate", why: "Magnesium sulfate prevents eclamptic seizures in this condition." },
      { text: "Give ibuprofen for the pain", why: "An NSAID impairs platelets that are already low and can worsen BP control." },
      { text: "Transfuse platelets right away", why: "A count of 72 000/mm3 without bleeding does not need transfusion now." },
      { text: "Give IV labetalol as prescribed", why: "A systolic BP of 162 mmHg is severe and needs prompt treatment to prevent stroke." },
      { text: "Start a heparin infusion", why: "Heparin adds bleeding risk when platelets are low." },
    ],
    parameters: [
      { text: "Platelet count", why: "Platelets can fall quickly in this syndrome." },
      { text: "Serum TSH level", why: "Thyroid function does not guide care in this emergency." },
      { text: "Urine culture result", why: "A urine culture does not track this condition." },
      { text: "Deep tendon reflexes", why: "Loss of reflexes is an early sign of magnesium toxicity." },
      { text: "Hemoglobin A1C level", why: "A1C reflects months of glucose control and does not guide care now." },
    ],
    correct: { condition: 2, actions: [0, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s38-43", {
      need: "PA",
      topic: "Sudden collapse during labor after membrane rupture",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 35-year-old client is in active labor at 39 weeks. Ten minutes after the membranes rupture she becomes agitated and says, \"Something is wrong.\" She becomes cyanotic, the SpO2 falls to 76% and she becomes unresponsive. The nurse finds no pulse. Which action should the nurse take first?",
      rationale:
        "Sudden distress, hypoxia and collapse soon after membrane rupture suggest amniotic fluid embolism. With no pulse, high-quality CPR starts at once. The uterus is displaced to the left by hand so it does not compress the vena cava and block blood return. Clotting tests matter later because bleeding often follows, but they do not restore circulation. The mother's resuscitation comes before fetal assessment.",
      sources: [PACHECO_AFE],
    }),
    kind: "mc",
    options: [
      { text: "Start CPR with manual left uterine displacement", why: "Immediate CPR with the uterus moved off the vena cava restores blood flow." },
      { text: "Draw blood for a coagulation panel", why: "A clotting disorder often follows, but testing does not treat the arrest." },
      { text: "Apply the fetal monitor to check the heart rate", why: "Maternal resuscitation comes first. Restoring her circulation also helps the fetus." },
      { text: "Place the client in a head-down position", why: "CPR needs a flat, firm surface with the uterus displaced to the left." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s38-44", {
      need: "PA",
      topic: "Loop of cord at the introitus",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client at 38 weeks of gestation is in labor with the cervix dilated 5 cm. Just after the membranes rupture, the nurse sees a loop of umbilical cord at the vaginal opening. The fetal heart rate is 70/minute. Which actions should the nurse take? Select all that apply.",
      rationale:
        "The presenting part is compressing the cord, which slows the fetal heart to 70/minute. The nurse calls for help and stays with the client. A gloved hand lifts the presenting part off the cord. A knee-chest or steep head-down position uses gravity to do the same. Birth is usually by emergency cesarean. Handling or replacing the cord causes spasm of its vessels. Oxytocin and pushing at 5 cm are not used.",
      sources: [SAYED_CORD],
    }),
    kind: "sata",
    options: [
      { text: "Push the cord back into the vagina", why: "Handling the cord causes its vessels to spasm. Manual replacement is not recommended." },
      { text: "Call for help without leaving the client", why: "Rapid help is needed and the nurse must keep relieving cord pressure." },
      { text: "Increase the oxytocin infusion", why: "Stronger contractions would compress the cord further." },
      { text: "Lift the presenting part off the cord", why: "Manual elevation relieves compression of the cord." },
      { text: "Ask the client to push with each contraction", why: "At 5 cm the cervix is not ready for pushing, and pushing adds compression." },
      { text: "Place the client in a knee-chest position", why: "This position uses gravity to move the presenting part off the cord." },
      { text: "Prepare for an emergency cesarean birth", why: "Rapid birth is usually needed when the cord prolapses before full dilation." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s38-45", {
      need: "PA",
      topic: "Fetal head retracting against the perineum",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "During a vaginal birth the fetal head delivers and then pulls back tightly against the perineum. The shoulders do not deliver with gentle downward traction. The primary health care provider announces a shoulder dystocia. Which action should the nurse take first?",
      rationale:
        "The McRoberts maneuver is the first step in shoulder dystocia. Sharply flexing the client's thighs onto the abdomen flattens the sacrum and widens the pelvic outlet. Fundal pressure drives the shoulder harder against the pubic bone and can cause injury. Oxytocin adds to the force on the impacted shoulder. A vacuum applies to the head, which is already delivered.",
      sources: [ACOG_DYSTOCIA],
    }),
    kind: "mc",
    options: [
      { text: "Apply firm pressure to the uterine fundus", why: "Fundal pressure wedges the shoulder against the pubic bone and can cause injury." },
      { text: "Flex the client's thighs sharply toward the abdomen", why: "This maneuver widens the pelvic outlet and frees the shoulder in many cases." },
      { text: "Give a bolus of IV oxytocin", why: "More uterine force pushes the impacted shoulder harder against the pubic bone." },
      { text: "Prepare the vacuum extractor", why: "A vacuum acts on the head, which has already delivered." },
    ],
    correct: 1,
  },
  // PULL (s38 review): tests the same point as rn-s09-18, which keys a newborn respiratory rate of 74/minute and nasal flaring as follow-up findings and acrocyanosis as expected. A unique point needs a full rewrite.
  {
    ...meta("rn-s38-46", {
      need: "PA",
      topic: "Breathing effort in a late preterm newborn",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse assesses a newborn born at 34 weeks of gestation 1 hour ago. Which three findings indicate respiratory distress? Select three.",
      rationale:
        "A respiratory rate of 76/minute is above the newborn range. Expiratory grunting is the newborn closing the glottis to keep the alveoli open. Nasal flaring shows extra effort to draw in air. Blue hands and feet are common in the first hours. A heart rate of 140/minute is normal. Short pauses in breathing of under 10 seconds are periodic breathing.",
      refs: ["Normal newborn respiratory rate is 30 to 60/minute.", "Periodic breathing is pauses of less than 10 seconds."],
      sources: [HOCKENBERRY, SWEET_RDS],
    }),
    kind: "msn",
    select: 3,
    options: [
      { text: "Blue hands and feet", why: "Acrocyanosis is common in the first hours after birth." },
      { text: "Respiratory rate of 76/minute", why: "A rate above 60/minute is tachypnea in a newborn." },
      { text: "Heart rate of 140/minute", why: "This heart rate is within the normal newborn range." },
      { text: "Grunting on each breath out", why: "Grunting keeps the alveoli open when surfactant is lacking." },
      { text: "Breathing pauses of 5 seconds", why: "Pauses under 10 seconds are normal periodic breathing." },
      { text: "Flaring of the nostrils", why: "Nasal flaring shows increased effort to breathe." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s38-47", {
      need: "PA",
      topic: "Fast breathing after a cesarean without labor",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A newborn was born at 39 weeks by scheduled cesarean birth before labor began. The amniotic fluid was clear. At 2 hours the respiratory rate is 82/minute with mild retractions. SpO2 is 95% on room air. The chest x-ray shows fluid in the lung fissures and hyperinflation. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Labor helps clear fluid from the fetal lungs. Without labor, fluid stays in the lungs and causes fast breathing. Fluid in the fissures with hyperinflation fits transient tachypnea of the newborn. It usually clears within days. Respiratory distress syndrome is a surfactant deficiency of preterm infants with a ground-glass x-ray. Meconium aspiration needs meconium-stained fluid. The SpO2 of 95% does not point to a diagnosis.",
      sources: [HOCKENBERRY, SWEET_RDS],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The newborn most likely has {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "respiratory distress syndrome", why: "This surfactant deficiency affects preterm infants and gives a ground-glass x-ray." },
          { text: "transient tachypnea of the newborn", why: "Retained lung fluid after birth without labor gives fast breathing and fluid in the fissures." },
          { text: "meconium aspiration syndrome", why: "The amniotic fluid was clear, so meconium aspiration is unlikely." },
          { text: "a spontaneous pneumothorax", why: "A pneumothorax shows free air, not fluid in the fissures." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "clear amniotic fluid", why: "Clear fluid rules out meconium but does not point to retained lung fluid." },
          { text: "an SpO2 of 95%", why: "An SpO2 of 95% does not identify a cause." },
          { text: "birth by cesarean before labor", why: "Labor helps clear lung fluid. Birth without labor leaves fluid behind." },
          { text: "a gestational age of 39 weeks", why: "Term age makes surfactant deficiency unlikely but does not show retained fluid." },
        ],
        correct: 2,
      },
      {
        options: [
          { text: "fluid in the lung fissures", why: "Fluid in the fissures on x-ray is typical of retained lung fluid." },
          { text: "the mild retractions", why: "Retractions show effort but occur in many breathing problems." },
          { text: "the clear amniotic fluid", why: "Clear fluid does not show retained lung fluid." },
          { text: "a ground-glass x-ray pattern", why: "The x-ray shows fluid in the fissures, not a ground-glass pattern." },
        ],
        correct: 0,
      },
    ],
  },
  {
    ...meta("rn-s38-48", {
      need: "PA",
      topic: "Feeding intolerance in a 29-week infant",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "An infant born at 29 weeks of gestation is now 10 days old and receives increasing tube feedings of breast milk. Which findings should the nurse report as possible signs of necrotizing enterocolitis? Select all that apply.",
      rationale:
        "Necrotizing enterocolitis injures the bowel wall of preterm infants, often as feedings advance. A rising abdominal girth and green gastric aspirates show the bowel is not moving feedings along. Blood in the stool reflects damaged mucosa. New apnea and an unstable temperature are early systemic signs. Yellow seedy stools, a soft abdomen with bowel sounds and steady weight gain are expected.",
      sources: [HOCKENBERRY],
    }),
    kind: "sata",
    options: [
      { text: "Yellow, seedy stools", why: "Seedy yellow stools are normal with breast milk feeding." },
      { text: "Abdominal girth up 2 cm since the last feed", why: "Increasing distension is an early sign of bowel injury." },
      { text: "Soft abdomen with active bowel sounds", why: "A soft abdomen with bowel sounds is a normal finding." },
      { text: "Green fluid in the gastric aspirate", why: "Bile-stained aspirate suggests the bowel is not moving feedings." },
      { text: "Blood in the stool", why: "Blood reflects injury to the bowel lining." },
      { text: "Weight gain of 20 g since yesterday", why: "Steady weight gain is expected with advancing feeds." },
      { text: "New episodes of apnea", why: "Apnea and temperature instability are early systemic signs." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s38-49", {
      need: "PA",
      topic: "Gas in the bowel wall of a preterm infant",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 12-day-old infant born at 30 weeks of gestation has a distended abdomen and blood in the stool. An abdominal x-ray shows gas in the bowel wall. Which prescription should the nurse implement first?",
      rationale:
        "Gas in the bowel wall confirms necrotizing enterocolitis. The first step is to rest the bowel. Feedings stop and an orogastric tube goes to suction to decompress the stomach and bowel. IV fluids and antibiotics follow. A hydrolyzed formula still feeds the injured bowel. A glycerin suppository stimulates a bowel that may perforate. Weighing the infant can wait.",
      sources: [HOCKENBERRY],
    }),
    kind: "mc",
    options: [
      { text: "Change the feeds to a hydrolyzed formula", why: "Any feeding still loads the injured bowel. Feeds stop entirely." },
      { text: "Insert a glycerin suppository", why: "Rectal stimulation can injure a bowel that may perforate." },
      { text: "Stop feeds and place an orogastric tube to suction", why: "Bowel rest and decompression are the first steps in this condition." },
      { text: "Weigh the infant before the next feed", why: "A weight does not treat the injured bowel and can wait." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s38-50", {
      need: "PA",
      topic: "Barking cough at night after a runny nose",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 3-year-old child has had a runny nose for 2 days. Tonight the child woke with a barking cough, a hoarse voice and stridor when crying. Temperature is 38.1°C (100.6°F). The child is not drooling and rests calmly in the parent's arms. Drag words from the choices below to fill in each blank.",
      rationale:
        "A viral cold followed by a barking cough, hoarse voice and stridor fits croup. Epiglottitis causes drooling, a muffled voice and a child who sits forward, and a barking cough is not typical. A barking cough without drooling separates the two. Stridor occurs in both. Both occur at this age. Bacterial tracheitis causes a toxic appearance with high fever. Foreign body aspiration starts suddenly with choking.",
      sources: [HOCKENBERRY],
    }),
    kind: "dnd",
    scoring: "dyad",
    template: "The child most likely has {0}. The finding that best distinguishes it from epiglottitis is {1}.",
    targets: ["Condition", "Distinguishing finding"],
    tokens: [
      { text: "bacterial tracheitis", why: "Tracheitis gives a toxic appearance and high fever, which this child lacks." },
      { text: "croup", why: "A cold followed by a barking cough, hoarseness and stridor fits croup." },
      { text: "foreign body aspiration", why: "Aspiration starts suddenly with choking, not after a cold." },
      { text: "the stridor when crying", why: "Stridor occurs in both croup and epiglottitis." },
      { text: "the barking cough without drooling", why: "A barking cough with no drooling points to croup rather than epiglottitis." },
      { text: "the child's age of 3 years", why: "Both conditions occur in children of this age." },
    ],
    correct: [1, 4],
  },
];
