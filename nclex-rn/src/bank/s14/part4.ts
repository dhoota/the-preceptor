import type { Item } from "@/engine/types";
import { ASPEN_EN, HINKLE, LOWDERMILK, ODS_IRON, POTTER, meta } from "./common";

/** Batch s14, items 31 to 40. */
export const PART4: Item[] = [
  {
    ...meta("rn-s14-31", {
      topic: "Back pain in labor",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "A client in active labor is dilated 6 cm. The fetus is in an occiput posterior position. The client reports intense low back pain with each contraction. Which nondrug comfort measure should the nurse use?",
      rationale:
        "An occiput posterior position presses the fetal head against the sacrum and causes back pain. Firm counterpressure on the sacrum during contractions offsets that pressure. Lying flat on the back adds to the pressure and can lower blood flow to the uterus. Rapid, shallow breathing for long periods can cause hyperventilation. Pushing before full dilation can cause cervical swelling.",
      sources: [LOWDERMILK],
    }),
    kind: "mc",
    options: [
      { text: "Apply firm counterpressure to the sacrum", why: "Counterpressure offsets the pressure of the fetal head on the sacrum." },
      { text: "Position the client flat on the back", why: "Lying supine adds back pressure and can compress the great vessels." },
      { text: "Coach rapid, shallow breathing throughout", why: "Long periods of rapid breathing can cause hyperventilation." },
      { text: "Encourage pushing with each contraction", why: "Pushing before full dilation can cause the cervix to swell." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s14-32", {
      topic: "Devices after posterior hip replacement",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A client is going home after a posterior approach total hip arthroplasty with prescribed hip precautions. Which measures should the nurse include in the discharge plan? Select all that apply.",
      rationale:
        "After a posterior approach the hip can dislocate with deep flexion, crossing the legs or turning the leg inward. A raised toilet seat limits hip flexion. A reacher and a long-handled sock aid remove the need to bend forward. A pillow between the legs in bed keeps the leg from crossing the midline. Low, soft chairs, crossed legs and bending to tie shoes all break the precautions.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Sit in a low, soft recliner", why: "A low seat forces the hip into deep flexion." },
      { text: "Use a raised toilet seat", why: "A raised seat keeps hip flexion within the precautions." },
      { text: "Cross the legs when seated", why: "Crossing the legs moves the hip past the midline and can dislocate it." },
      { text: "Use a reacher to pick up items", why: "A reacher avoids bending forward at the hip." },
      { text: "Bend forward to tie the shoes", why: "Bending forward flexes the hip past the safe limit." },
      { text: "Use a long-handled sock aid", why: "A sock aid lets the client dress without deep hip flexion." },
      { text: "Keep a pillow between the legs in bed", why: "The pillow keeps the leg from crossing the midline." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s14-33", {
      topic: "Putting on compression stockings",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse applies knee-length graduated compression stockings to a client on bed rest. Place the steps in order.",
      rationale:
        "The legs are measured first so the stocking gives the right pressure. Turning the stocking inside out to the heel lets the foot slide in easily. The stocking is then drawn up the leg and smoothed so no wrinkles press on the skin. Rolling the top into a band acts like a tourniquet. Massaging the calves can dislodge a clot.",
      sources: [POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Slip the foot and heel into the stocking", why: "The foot goes in after the stocking is turned inside out." },
      { text: "Roll the top down into a band", why: "A rolled band at the top constricts the leg like a tourniquet." },
      { text: "Measure the legs to choose the size", why: "Measuring first gives the right size and pressure." },
      { text: "Pull the stocking up and smooth it", why: "Smoothing removes wrinkles that press on the skin." },
      { text: "Massage the calves before starting", why: "Massage can dislodge a clot in a client on bed rest." },
      { text: "Turn the stocking inside out to the heel", why: "This lets the foot slide in without bunching." },
    ],
    correct: [2, 5, 0, 3],
  },
  {
    ...meta("rn-s14-34", {
      topic: "Daily calories from continuous feeding",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client receives a continuous enteral formula that provides 1.5 kcal/mL. The pump runs at 55 mL per hour for 24 hours. How many kcal does the client receive in 24 hours?",
      rationale:
        "The pump gives 55 mL each hour for 24 hours, which is 1320 mL. Each mL of this formula provides 1.5 kcal. So 1320 mL provides 1980 kcal. The nurse compares this with the energy goal set by the dietitian.",
      calc: { expr: "55 * 24 * 1.5", answer: 1980, unit: "kcal", round: 0, steps: ["55 * 24 = 1320", "1320 * 1.5 = 1980"] },
      sources: [ASPEN_EN],
    }),
    kind: "mc",
    options: [
      { text: "82.5 kcal", why: "55 mL times 1.5 kcal/mL is the amount for a single hour only." },
      { text: "1320 kcal", why: "This is the volume in mL. It leaves out the 1.5 kcal/mL density." },
      { text: "1980 kcal", why: "1320 mL times 1.5 kcal/mL gives 1980 kcal." },
      { text: "2970 kcal", why: "This multiplies by 1.5 twice, which overstates the calories." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s14-35", {
      topic: "Totaling water flushes",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client with a gastrostomy tube has a prescription for a 30 mL water flush every 4 hours. The client also gets a 50 mL water flush with each of 3 daily medication passes. What is the total flush water in 24 hours?",
      rationale:
        "A flush every 4 hours happens 6 times in 24 hours. Six flushes of 30 mL give 180 mL. Three medication flushes of 50 mL give 150 mL. The total is 330 mL. This water counts toward the client's daily fluid intake.",
      calc: { expr: "30 * (24 / 4) + 50 * 3", answer: 330, unit: "mL", round: 0, steps: ["24 / 4 = 6", "30 * 6 = 180", "50 * 3 = 150", "180 + 150 = 330"] },
      sources: [ASPEN_EN],
    }),
    kind: "mc",
    options: [
      { text: "180 mL", why: "This counts the scheduled flushes and leaves out the 150 mL of medication flushes." },
      { text: "330 mL", why: "180 mL of scheduled flushes plus 150 mL of medication flushes is 330 mL." },
      { text: "480 mL", why: "This counts a 50 mL flush every 4 hours instead of 3 times a day." },
      { text: "720 mL", why: "This gives 30 mL every hour for 24 hours instead of every 4 hours." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s14-36", {
      topic: "Getting more iron from a plant-based diet",
      cjmm: "generate",
      process: "teaching",
      difficulty: 3,
      stem: "A 28-year-old client with iron deficiency anemia eats a mostly plant-based diet. Which suggestions should the nurse give to improve iron intake and absorption? Select all that apply.",
      rationale:
        "Iron from plants is absorbed less well than iron from meat. Vitamin C taken in the same meal raises its absorption. Red peppers and oranges add vitamin C to lentils and spinach. Fortified cereal adds iron. Tea and coffee contain polyphenols that block iron absorption. Calcium taken with a meal also lowers it.",
      sources: [ODS_IRON],
    }),
    kind: "sata",
    options: [
      { text: "Drink tea with each meal", why: "Polyphenols in tea block absorption of plant iron." },
      { text: "Eat lentils with sliced red peppers", why: "Vitamin C in peppers raises absorption of the iron in lentils." },
      { text: "Take calcium with iron-rich meals", why: "Calcium in the same meal lowers iron absorption." },
      { text: "Choose an iron-fortified cereal", why: "Fortified cereal adds a reliable source of iron." },
      { text: "Drink coffee right after meals", why: "Coffee near meals lowers iron absorption." },
      { text: "Add orange slices to spinach salad", why: "Vitamin C in oranges helps absorb the iron in spinach." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s14-37", {
      topic: "New confusion and low intake in dementia",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "An 84-year-old resident of a long-term care home has moderate dementia. The resident has become more confused over 2 days. Intake is about 600 mL a day and the resident rarely asks for a drink. Mucous membranes are dry and urine is dark amber. Heart rate is 104/minute. Temperature is 37.0°C (98.6°F). Serum sodium is 149 mEq/L (149 mmol/L). Complete the diagram by choosing the condition the resident is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "An intake of 600 mL a day, dry membranes, dark urine, a heart rate of 104/minute and a sodium of 149 mEq/L point to dehydration. The new confusion fits it. Older adults with dementia often do not feel or report thirst. Staff offer preferred fluids on a schedule and record intake and output. Urine color and output and the level of confusion show whether the deficit is improving.",
      refs: ["Normal serum sodium is 135 to 145 mEq/L (135 to 145 mmol/L)."],
      canada: "Canadian labs report serum sodium in mmol/L only. The Medical Council of Canada lists 136 to 146 mmol/L as the reference range, so 149 mmol/L is high.",
      sources: [POTTER, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Worsening dementia", why: "Dementia progresses over months. Change over 2 days with dry membranes points elsewhere." },
      { text: "Dehydration", why: "Low intake, dry membranes, dark urine, a fast pulse and a high sodium fit a fluid deficit." },
      { text: "Fluid volume excess", why: "Excess fluid lowers sodium and causes edema. This resident is dry." },
      { text: "Urinary tract infection", why: "The temperature is 37.0°C, and dark urine here reflects low intake with a high sodium." },
    ],
    actions: [
      { text: "Limit fluids to reduce incontinence", why: "Limiting fluid would worsen the deficit." },
      { text: "Offer preferred fluids every hour", why: "Scheduled offers of liked drinks raise intake in a resident who does not ask." },
      { text: "Wait until the resident asks to drink", why: "Thirst is blunted, so waiting keeps intake low." },
      { text: "Record all intake and output", why: "Accurate intake and output show whether fluid needs are met." },
      { text: "Apply restraints for the confusion", why: "Restraints do not treat the cause and add risk of harm." },
    ],
    parameters: [
      { text: "Pupil size and reaction", why: "Pupils do not track a fluid deficit." },
      { text: "Urine color and output", why: "Lighter urine and higher output show rising hydration." },
      { text: "Serum lipid levels", why: "Lipids do not change with hydration." },
      { text: "Level of confusion", why: "Confusion from dehydration eases as fluid is replaced." },
      { text: "Hemoglobin A1C level", why: "A1C reflects glucose over months, not fluid status." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [1, 3] },
  },
  {
    ...meta("rn-s14-38", {
      topic: "Bowel risk after knee replacement",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 70-year-old client is on day 3 after a right total knee arthroplasty. The client takes oxycodone every 4 hours for pain and walks only to the bathroom. There has been no bowel movement since surgery. Fluid intake is about 800 mL a day. Bowel sounds are present in all quadrants. Temperature is 36.9°C (98.4°F). Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Opioids slow bowel motility. Taking oxycodone every 4 hours with no bowel movement since surgery points to constipation. Fluid intake of about 800 mL a day is low and hardens stool. Bowel sounds in all quadrants make paralytic ileus unlikely. A temperature of 36.9°C does not suggest infection.",
      sources: [POTTER],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "constipation", why: "Opioids, low fluid and no bowel movement since surgery fit constipation." },
          { text: "paralytic ileus", why: "Bowel sounds are present in all quadrants, which argues against ileus." },
          { text: "urinary retention", why: "The stem gives no voiding problem or bladder distention." },
          { text: "diarrhea", why: "There has been no bowel movement at all since surgery." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "present bowel sounds", why: "Bowel sounds show the bowel is moving and do not point to a problem." },
          { text: "oxycodone every 4 hours", why: "Regular opioid doses slow bowel motility." },
          { text: "a temperature of 36.9°C", why: "36.9°C is normal and points to no problem here." },
          { text: "knee incision pain", why: "Pain alone does not cause the bowel change." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a normal temperature", why: "A normal temperature supports none of the listed problems." },
          { text: "a knee incision", why: "The incision itself does not slow the bowel." },
          { text: "intake of 800 mL a day", why: "Low fluid intake makes stool hard and slow to pass." },
          { text: "day 3 after surgery", why: "The day count alone is not evidence of the problem." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s14-39", {
      topic: "Items on a clear liquid diet",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client is on a clear liquid diet the day before a colonoscopy. The nurse checks the lunch tray. Which items fit a clear liquid diet? Select all that apply.",
      rationale:
        "Clear liquids are fluids you can see through, or that turn to clear fluid at body temperature, and leave little residue. Apple juice, broth, lemon gelatin and black coffee fit. Pudding, cream soup and juice with pulp are full liquid items.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Vanilla pudding", why: "Pudding is made with milk and is a full liquid item." },
      { text: "Apple juice", why: "Apple juice is clear and leaves no residue." },
      { text: "Cream of tomato soup", why: "Cream soup is a full liquid item." },
      { text: "Chicken broth", why: "Clear broth is a clear liquid." },
      { text: "Orange juice with pulp", why: "Pulp makes the juice cloudy and adds residue." },
      { text: "Lemon gelatin", why: "Gelatin melts to a clear liquid and fits the diet." },
      { text: "Black coffee", why: "Coffee without milk or cream is a clear liquid." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s14-40", {
      topic: "Judging a constipation plan over time",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 3,
      trend: true,
      stem: "A 68-year-old client with chronic constipation started a plan of more fiber, 1500 mL of fluid a day and a daily walk. The nurse reviews the client's bowel diary. Which findings show the plan is working? Select all that apply.",
      tabs: [
        {
          title: "Bowel Diary",
          table: {
            head: ["Measure", "Week 1", "Week 3", "Week 6"],
            rows: [
              ["Bowel movements per week", "2", "4", "6"],
              ["Days with straining", "5", "3", "1"],
              ["Usual stool form (Bristol type)", "1", "3", "4"],
              ["Days with bloating", "4", "2", "1"],
              ["Fluid intake (mL/day)", "900", "1300", "1500"],
            ],
          },
        },
      ],
      rationale:
        "Bowel movements rose from 2 to 6 a week. Straining fell from 5 days to 1. Stool form moved from Bristol type 1 to type 4, which is a normal stool. Bloating fell from 4 days to 1. Fluid intake reached the 1500 mL goal by week 6, so it is not below the goal.",
      refs: ["On the Bristol stool form scale, type 1 is separate hard lumps. Types 3 and 4 are normal stools."],
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Hard, lumpy stools at week 6", why: "Stool form at week 6 is type 4, a normal stool." },
      { text: "More bowel movements each week", why: "Frequency rose from 2 to 6 a week." },
      { text: "Fluid intake still below the goal", why: "Intake reached the 1500 mL goal by week 6." },
      { text: "Fewer days with straining", why: "Straining fell from 5 days to 1." },
      { text: "More days with bloating", why: "Bloating fell from 4 days to 1." },
      { text: "Stool form reaching type 4", why: "Stool form moved from type 1 to type 4, which is normal." },
    ],
    correct: [1, 3, 5],
  },
];
