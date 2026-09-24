import type { Item } from "@/engine/types";
import { AASM, ACP_UI, BRADEN_RISK, HINKLE, IDDSI, NPIAP, POTTER, STROKE, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s13-01", {
      topic: "Walking with a single-point cane",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "A 72-year-old client has weakness in the left leg after repair of a hip fracture. The client is learning to walk with a single-point cane. Which instruction should the nurse give?",
      rationale:
        "The left leg is the weak side. The cane goes in the right hand, on the stronger side. The cane and the weak left leg then move forward together. This spreads weight over a wider base. The handle sits level with the wrist crease when the arm hangs down, which leaves a slight bend at the elbow.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Hold the cane in the right hand", why: "A cane on the stronger side shares weight with the weak left leg as it steps." },
      { text: "Hold the cane in the left hand", why: "A cane on the weak side does not widen the base of support opposite the weak leg." },
      { text: "Move the cane with the right leg", why: "The cane moves forward with the weak left leg, not with the strong one." },
      { text: "Set the handle at shoulder height", why: "A handle this high bends the elbow too far. It belongs at the level of the wrist crease." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s13-02", {
      topic: "Climbing stairs with crutches",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 24-year-old client has a cast on the right lower leg and may not bear weight on it. The client uses axillary crutches with a three-point gait and asks how to go up the stairs at home. What should the client do first on each step?",
      rationale:
        "Going up stairs, the strong leg leads. The client keeps weight on the crutches and steps up with the uninjured left leg. The crutches and the casted right leg then follow. Going down, the crutches and the injured leg lead. Leading up with the crutches or the right leg puts load on the injured limb or tips the client backward.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Move both crutches up to the next step", why: "Crutches placed on the higher step first leave the body behind them and unbalance the climb." },
      { text: "Step up with the left leg", why: "The strong left leg lifts the body while the crutches below take the weight off the right leg." },
      { text: "Step up with the right leg", why: "The right leg may not bear weight. Leading with it loads the injured limb." },
      { text: "Move the crutches and right leg up together", why: "This is the order for going down stairs. Going up, the strong leg leads." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-03", {
      topic: "Whistling hearing aid",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "An 80-year-old client with 2 behind-the-ear hearing aids says the right aid whistles loudly after it is put in. The battery was changed yesterday. Which cause should the nurse check first?",
      rationale:
        "A high-pitched whistle is acoustic feedback. Amplified sound leaks out around the ear mold and reenters the microphone. The most common cause is an ear mold that is not fully seated in the canal. Earwax can also cause it. The new battery makes a power fault unlikely. A low volume or an aid switched off gives too little sound, not whistling.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "The volume is set too low", why: "Feedback comes with a high volume. A low volume makes sound faint, not whistling." },
      { text: "The battery has run down", why: "The battery was changed yesterday. A weak battery makes sound weak or absent." },
      { text: "The ear mold is not fully seated", why: "A loose mold lets sound leak back to the microphone, which causes the whistle." },
      { text: "The aid is switched to off", why: "An aid that is switched off makes no sound, so it cannot whistle." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s13-04", {
      topic: "Totaling shift intake",
      cjmm: "action",
      process: "communication",
      difficulty: 2,
      stem: "The nurse totals a client's intake for an 8-hour shift. The client drank 240 mL of juice, 180 mL of tea and 120 mL of water. The client ate 150 mL of gelatin and a cup of scrambled eggs. IV 0.9% sodium chloride ran at 75 mL/hour for the full 8 hours. How many mL of intake should the nurse record?",
      rationale:
        "Intake counts every liquid and every food that is liquid at room temperature. Gelatin counts. Scrambled eggs do not. Oral intake is 240 + 180 + 120 + 150 = 690 mL. The IV adds 75 * 8 = 600 mL. The total is 690 + 600 = 1290 mL.",
      calc: {
        expr: "240 + 180 + 120 + 150 + 75 * 8",
        answer: 1290,
        unit: "mL",
        round: 0,
        steps: ["240 + 180 + 120 + 150 = 690", "75 * 8 = 600", "690 + 600 = 1290"],
      },
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "690 mL", why: "This counts the oral fluids and leaves out the 600 mL of IV fluid." },
      { text: "1140 mL", why: "This leaves out the 150 mL of gelatin, which is liquid at room temperature." },
      { text: "1290 mL", why: "Oral fluids of 690 mL plus 600 mL of IV fluid give 1290 mL." },
      { text: "1530 mL", why: "This counts the cup of eggs as 240 mL of fluid. Solid food is not recorded as intake." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s13-05", {
      topic: "Pressure injury prevention on a standard mattress",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 68-year-old client who had a stroke has a Braden Scale score of 12. The client cannot turn without help and lies on a standard hospital mattress. Which action should the nurse include in the plan of care?",
      rationale:
        "A Braden score of 12 places the client at high risk of pressure injury. The client cannot turn alone. On a standard mattress the heels carry concentrated pressure, so they are floated off the bed. Massage over red skin damages fragile tissue. A head of bed above 30 degrees adds shear. Lying directly on the trochanter loads a bony prominence.",
      refs: [
        "A Braden Scale total of 10 to 12 marks high risk for pressure injury.",
        "The head of the bed is kept at 30 degrees or lower when the client's condition allows.",
      ],
      sources: [NPIAP, BRADEN_RISK, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Massage reddened skin over the sacrum", why: "Massage over reddened skin can damage fragile tissue. The guideline advises against it." },
      { text: "Float the heels with a pillow under the calves", why: "Heels bear high pressure on a standard mattress. Lifting them off the bed offloads them." },
      { text: "Keep the head of the bed at 45 degrees", why: "Raising the head of the bed above 30 degrees increases shear over the sacrum." },
      { text: "Turn the client directly onto the hip bone", why: "Lying on the trochanter loads a bony prominence. A 30 degree side tilt is used instead." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-06", {
      topic: "Stimulus control for insomnia",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 45-year-old client with chronic insomnia says, \"I lie in bed for an hour or more trying to fall asleep. When I cannot sleep, I watch television in bed.\" Which instruction should the nurse give?",
      rationale:
        "Stimulus control rebuilds the link between the bed and sleep. The client lies awake for an hour or more and watches television in bed. Both weaken that link. The client leaves the bed when unable to sleep and returns only when sleepy. Daytime naps weaken sleep drive. Earlier bedtimes add time lying awake in bed.",
      sources: [AASM],
    }),
    kind: "mc",
    options: [
      { text: "Stay in bed with eyes closed until sleep comes", why: "Lying awake in bed strengthens the link between the bed and wakefulness." },
      { text: "Nap in the afternoon to make up lost sleep", why: "Daytime naps lower sleep drive and make it harder to fall asleep at night." },
      { text: "Go to bed earlier to allow more time for sleeping", why: "More time in bed adds time lying awake. Sleep restriction does the opposite." },
      { text: "Leave the bed if not asleep in about 20 minutes", why: "Getting up when unable to sleep keeps the bed linked with sleep, not with waking." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-07", {
      topic: "Mealtime care after a stroke",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 70-year-old client has right hemiparesis and a right facial droop after a stroke. After a swallow evaluation, the speech-language pathologist prescribes mildly thick liquids and soft, bite-sized solids. Which actions should the nurse take during meals? Select all that apply.",
      rationale:
        "Sitting upright uses gravity and helps protect the airway. The right facial droop shows weakness on the right side of the mouth, so food goes on the stronger left side. Food pools in the weak right cheek, so the nurse checks it. Staying upright after meals limits reflux. Thin water was not prescribed. Tilting the head back opens the airway to aspiration. A straw delivers liquid fast.",
      sources: [STROKE, IDDSI, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Seat the client upright in a chair", why: "An upright position uses gravity to move food down and protects the airway." },
      { text: "Place food on the left side of the mouth", why: "The left side of the mouth is not weak, so the client controls food better there." },
      { text: "Offer small sips of thin water between bites", why: "Only mildly thick liquids are prescribed. Thin liquid moves fast and is easily aspirated." },
      { text: "Tilt the head back as the client swallows", why: "Tilting the head back opens the airway. A slight chin tuck protects it." },
      { text: "Check the right cheek for pocketed food", why: "Food collects on the weak right side, where the client may not feel it." },
      { text: "Offer liquids through a bendable straw", why: "A straw sends liquid quickly to the back of the throat. It is used only if the speech-language pathologist approves." },
      { text: "Keep the client upright 30 minutes after meals", why: "Staying upright after eating lowers the risk of reflux and aspiration." },
    ],
    correct: [0, 1, 4, 6],
  },
  {
    ...meta("rn-s13-08", {
      topic: "Preventing constipation in long-term care",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 78-year-old client in long-term care has had 2 hard, lumpy stools in the past 7 days. The client drinks about 900 mL of fluid a day and walks only to the bathroom. No fluid restriction is prescribed. Which measures should the nurse include in the plan? Select all that apply.",
      rationale:
        "Two hard, lumpy stools in 7 days point to slow transit. An intake of about 900 mL a day is low for an adult with no fluid restriction. More fluid and fiber soften stool. Toileting after breakfast uses the gastrocolic reflex. Walking stimulates peristalsis. Daily enemas cause dependence. Fruit adds fiber. Lying flat on a bedpan makes bearing down harder.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Give a soapsuds enema each morning", why: "Routine enemas irritate the bowel and lead to dependence on them." },
      { text: "Offer fluids through the day to raise intake", why: "About 900 mL a day is low. More fluid keeps stool soft." },
      { text: "Limit fresh fruit to prevent loose stools", why: "Fruit adds fiber and water to stool. Limiting it worsens constipation." },
      { text: "Add bran and prunes to meals", why: "Fiber holds water in stool and adds bulk that speeds transit." },
      { text: "Schedule toileting after breakfast", why: "The gastrocolic reflex after a meal makes a bowel movement more likely." },
      { text: "Use the bedpan while lying flat", why: "A flat position makes it hard to bear down. Sitting upright helps." },
      { text: "Walk in the hallway twice a day", why: "Regular walking stimulates peristalsis." },
    ],
    correct: [1, 3, 4, 6],
  },
  {
    ...meta("rn-s13-09", {
      topic: "Bladder training for urgency incontinence",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 58-year-old woman reports a sudden strong urge to void, then leakage before she reaches the toilet. Coughing and lifting do not cause leakage. She now voids about every hour \"just in case.\" Which two instructions should the nurse include in a bladder training plan? Select two.",
      rationale:
        "Urgency with leakage, and no leakage with coughing or lifting, fits urgency incontinence. Bladder training is first-line care for it. The client voids on a set schedule and stretches the interval over weeks. Voiding every hour trains the bladder to hold less. Severe fluid limits concentrate urine and irritate the bladder. A catheter does not treat urgency.",
      sources: [ACP_UI],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Void on a fixed schedule while awake", why: "A set schedule replaces voiding in response to urgency." },
      { text: "Cut fluid intake to 500 mL a day", why: "Concentrated urine irritates the bladder and can worsen urgency." },
      { text: "Void whenever the first urge is felt", why: "Voiding at every urge keeps bladder capacity small." },
      { text: "Lengthen the time between voids gradually", why: "Stretching the interval over weeks raises the volume the bladder holds." },
      { text: "Drink most fluids in the late evening", why: "Evening fluids raise night voiding and leakage." },
      { text: "Use an indwelling catheter at night", why: "A catheter adds infection risk and does not retrain the bladder." },
    ],
    correct: [0, 3],
  },
  {
    ...meta("rn-s13-10", {
      topic: "Hard stool with liquid seepage",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "An 84-year-old client with dementia in long-term care has had no bowel movement for 6 days. For 2 days, small amounts of liquid brown stool have leaked onto the brief. The abdomen is distended and firm in the left lower quadrant. Bowel sounds are present. The client takes oxycodone for hip pain. Temperature is 37.0°C (98.6°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Six days without a bowel movement, liquid seepage and a firm left lower quadrant fit fecal impaction. Oxycodone slows the bowel. Dementia can hide the urge to defecate. Liquid stool leaks around the hard mass. An oil retention enema softens the stool, and digital removal follows per protocol. Stool output and abdominal firmness show whether the impaction clears.",
      sources: [POTTER, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Clostridioides difficile infection", why: "This infection causes frequent watery stools and often fever. The temperature is 37.0°C and stool is only seepage." },
      { text: "Acute urinary retention", why: "Retention distends the bladder above the pubis. It does not explain firm stool in the left lower quadrant." },
      { text: "Fecal impaction", why: "No stool for 6 days, seepage around hard stool and a firm left lower quadrant fit impaction." },
      { text: "Paralytic ileus", why: "Ileus silences the bowel. Bowel sounds are present." },
    ],
    actions: [
      { text: "Give an oil retention enema as prescribed", why: "Oil softens and lubricates the hard mass so it can pass." },
      { text: "Give loperamide for the leakage", why: "An antidiarrheal slows the bowel further and worsens the impaction." },
      { text: "Restrict fluids to 1000 mL a day", why: "Limiting fluid hardens stool. The stem gives no reason to restrict it." },
      { text: "Remove stool digitally per protocol", why: "Digital removal breaks up a mass the client cannot pass after it is softened." },
      { text: "Encourage bed rest until the bowels move", why: "Inactivity slows peristalsis. Movement helps stool pass." },
    ],
    parameters: [
      { text: "Serum lipase level", why: "Lipase tracks pancreatic injury. Nothing in the stem suggests pancreatitis." },
      { text: "Stool output and consistency", why: "Formed stool passing shows the impaction is clearing." },
      { text: "Blood glucose before meals", why: "The stem gives no diabetes. Glucose does not track bowel function." },
      { text: "Peak expiratory flow rate", why: "Airflow does not reflect bowel function." },
      { text: "Abdominal girth and firmness", why: "Softening and less distension show the mass is gone." },
    ],
    correct: { condition: 2, actions: [0, 3], parameters: [1, 4] },
  },
];
