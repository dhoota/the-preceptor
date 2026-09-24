import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c09-5";

/** Case 5. Rural community hospital. Contractions at 31 weeks, far from a neonatal intensive care unit. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Call to the Rural Triage Line",
  intro:
    "A 22-year-old woman, gravida 1, para 0, calls the obstetric triage line of a rural community hospital at 1030. She is at 31 weeks of gestation. The hospital has a basic newborn nursery and no neonatal intensive care unit. The regional perinatal center is 90 minutes away by road.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 1, para 0. Pregnancy dated by an ultrasound at 9 weeks.",
        "Group B streptococcus culture not yet done.",
        "Urinary tract infection treated at 24 weeks.",
        "No known allergies. Weight 64 kg.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "MOC",
        topic: "Telephone triage for preterm labor signs",
        cjmm: "recognize",
        process: "communication",
        difficulty: 3,
        stem: "The triage nurse documents the call below. Click to highlight the findings that mean the client should come to the hospital now.",
        refs: ["Contractions every 10 minutes or more often for 1 hour are a warning sign of preterm labor."],
        rationale:
          "Tightening every 8 minutes for 2 hours is more often than every 10 minutes. A dull low backache, pink-tinged mucus and pelvic pressure are also warning signs of preterm labor at 31 weeks. Together they need same-day assessment. Heartburn, ankle swelling at the end of the day and night leg cramps are common in the third trimester. Normal fetal movement is reassuring.",
        sources: [SRC.lowdermilk, SRC.acog171],
      }),
      kind: "highlight",
      passage:
        "[[Tightening of the abdomen every 8 minutes for 2 hours]]. [[Dull low backache that comes and goes]]. [[Heartburn after meals]]. [[Pink-tinged mucus on her underwear this morning]]. [[Ankles swollen at the end of the day]]. [[Feeling of pressure low in the pelvis]]. [[Baby moving as usual]]. [[Leg cramps at night]].",
      spans: [
        { text: "Tightening of the abdomen every 8 minutes for 2 hours", why: "Contractions more often than every 10 minutes for an hour are a warning sign." },
        { text: "Dull low backache that comes and goes", why: "A rhythmic low backache can be a sign of preterm labor." },
        { text: "Heartburn after meals", why: "Heartburn is common late in pregnancy as the uterus presses on the stomach." },
        { text: "Pink-tinged mucus on her underwear this morning", why: "Blood-tinged mucus can signal cervical change." },
        { text: "Ankles swollen at the end of the day", why: "Mild swelling that builds through the day is common in the third trimester." },
        { text: "Feeling of pressure low in the pelvis", why: "Pelvic pressure can mean the fetus is moving down with cervical change." },
        { text: "Baby moving as usual", why: "Normal fetal movement is reassuring." },
        { text: "Leg cramps at night", why: "Night leg cramps are common in late pregnancy." },
      ],
      correct: [0, 1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Interpreting contractions at 31 weeks",
        cjmm: "analyze",
        difficulty: 3,
        stem: "At 1215 the client arrives at the hospital. The nurse's findings are in the notes. Which interpretation of these findings is most accurate?",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "1215. Contractions every 5 minutes, lasting 45 seconds. Uterus soft between contractions.",
              "Cervix 3 cm dilated and 80% effaced. Small amount of pink mucus.",
              "Sterile speculum exam shows no pooling of fluid. Membranes intact.",
              "Fetal heart rate baseline 145/minute with moderate variability and accelerations.",
              "Temperature 37.0°C (98.6°F). BP 116/70 mmHg. Heart rate 96/minute.",
            ].join("\n"),
          },
        ],
        refs: ["Preterm labor is regular contractions with cervical change before 37 weeks of gestation."],
        rationale:
          "Regular contractions every 5 minutes with a cervix 3 cm dilated and 80% effaced at 31 weeks meet the definition of preterm labor. Braxton Hicks contractions do not change the cervix. No pooling of fluid shows the membranes are intact. A soft uterus between contractions and only pink mucus argue against abruption.",
        sources: [SRC.acog171, SRC.lowdermilk],
      }),
      kind: "mc",
      options: [
        { text: "Braxton Hicks contractions", why: "These irregular contractions do not dilate the cervix. Her cervix is 3 cm dilated." },
        { text: "Preterm prelabor rupture of membranes", why: "The speculum exam shows no pooling of fluid, so the membranes are intact." },
        { text: "Placental abruption", why: "The uterus is soft between contractions and there is only pink mucus." },
        { text: "Preterm labor with cervical change", why: "Regular contractions with dilation and effacement at 31 weeks define preterm labor." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Arranging a higher level of care",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 1230 the primary health care provider and the nurse discuss the plan. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A newborn at 31 weeks is likely to need intensive care that this hospital cannot provide. Moving the client before birth is safer than moving a sick newborn after birth. Tocolysis can delay birth long enough for corticosteroids and transfer. Bed rest does not prevent preterm birth. The membranes are intact, the contractions continue and the cervix is 3 cm dilated.",
        sources: [SRC.acog171, SRC.lowdermilk],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The priority is to arrange {0} because {1}.",
      blanks: [
        {
          options: [
            { text: "discharge home on bed rest", why: "Bed rest does not prevent preterm birth, and she is in active preterm labor." },
            { text: "an induction of labor here", why: "Speeding birth at a hospital with no intensive care unit adds risk to the newborn." },
            { text: "transfer to a perinatal center", why: "A center with a neonatal intensive care unit can care for a 31 week newborn." },
            { text: "a clinic visit tomorrow", why: "Her cervix is already changing, so waiting a day is unsafe." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "the membranes have ruptured", why: "The speculum exam showed intact membranes." },
            { text: "the newborn may need intensive care", why: "Birth at 31 weeks often needs breathing and feeding support in intensive care." },
            { text: "the contractions have stopped", why: "Contractions continue every 5 minutes." },
            { text: "the cervix is still closed", why: "The cervix is 3 cm dilated." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort during magnesium for neuroprotection",
        cjmm: "generate",
        process: "caring",
        difficulty: 2,
        stem: "The client starts magnesium sulfate for fetal neuroprotection while she waits for transport. She feels hot and flushed and is anxious about the transfer. Which comfort measures should the nurse plan? Select all that apply.",
        tabs: [
          {
            title: "Orders",
            text: [
              "Nifedipine 20 mg by mouth now.",
              "Betamethasone 12 mg IM now and again in 24 hours.",
              "Magnesium sulfate 4 g IV over 30 minutes, then 1 g/hour, for fetal neuroprotection.",
              "Penicillin G IV for group B streptococcus prophylaxis.",
              "Transfer to the regional perinatal center.",
            ].join("\n"),
          },
        ],
        rationale:
          "Flushing and warmth are common effects of magnesium, and a cool cloth eases them. Side-lying with pillows is comfortable and avoids pressure on the vena cava. Short, clear updates lower anxiety about the transfer. Bed rest does not prevent preterm birth and adds clot risk. Extra fluids do not stop contractions and raise the risk of pulmonary edema with magnesium. Magnesium causes weakness and drowsiness, so hallway walks risk a fall.",
        sources: [SRC.acog171, SRC.acog455, SRC.lowdermilk],
      }),
      kind: "sata",
      options: [
        { text: "Strict bed rest until 37 weeks", why: "Bed rest does not prevent preterm birth and raises the risk of clots." },
        { text: "A cool cloth to the face and neck", why: "A cool cloth eases the flushing and warmth caused by magnesium." },
        { text: "Extra oral fluids to stop contractions", why: "Hydration does not stop preterm labor and adds fluid overload risk." },
        { text: "A side-lying position with pillows", why: "Side-lying is comfortable and keeps the uterus off the vena cava." },
        { text: "Brief, clear updates on the transfer", why: "Clear information lowers anxiety about an unfamiliar plan." },
        { text: "Walks in the hallway to ease discomfort", why: "Magnesium causes muscle weakness and drowsiness, which raises fall risk." },
      ],
      correct: [1, 3, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Safe setup of a magnesium infusion",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse prepares to start the magnesium sulfate infusion. Which actions should the nurse take? Select three.",
        rationale:
          "Magnesium sulfate is a high-alert medication. A programmed infusion pump controls the dose. A second nurse independently checks the pump settings. Calcium gluconate is kept close by to reverse toxicity. The drug runs as a secondary line so it can stop while the main line stays open. A premixed bag avoids mixing errors on the unit. The loading dose runs over 30 minutes, not as a push.",
        sources: [SRC.ismp, SRC.acog222],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Use a programmed infusion pump", why: "A pump prevents free flow and delivers the exact dose of a high-alert drug." },
        { text: "Hang it as the main IV line", why: "Magnesium runs as a secondary line so it can stop while the main line stays open." },
        { text: "Have a second nurse check the pump", why: "An independent double check catches setting errors before harm." },
        { text: "Keep calcium gluconate on the unit", why: "Calcium gluconate reverses magnesium toxicity." },
        { text: "Give the loading dose as an IV push", why: "The loading dose runs over 30 minutes. A push risks toxicity." },
        { text: "Mix the dose from stock vials on the unit", why: "Premixed bags lower the risk of concentration errors." },
      ],
      correct: [0, 2, 3],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Monitoring during magnesium therapy",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "At 1600 the nurse evaluates the client before transport. For each finding, specify whether it is an expected effect of magnesium sulfate or requires immediate action.",
        refs: [
          "Deep tendon reflexes are lost at a serum magnesium of about 9 mg/dL (3.7 mmol/L).",
          "A respiratory rate under 12/minute and urine output under 30 mL/hour are warning signs during magnesium therapy.",
        ],
        rationale:
          "Warmth, flushing, mild nausea and tiredness are common effects. Absent patellar reflexes signal a toxic level. A respiratory rate of 10/minute is below 12/minute and signals respiratory depression. Magnesium leaves the body in urine, so output under 30 mL/hour lets the level rise. These three need the infusion stopped and the provider notified.",
        sources: [SRC.acog222, SRC.lowdermilk],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected effect", "Requires immediate action"],
      rows: [
        { text: "Feels warm and flushed", correct: [0], why: "Vasodilation from magnesium causes warmth and flushing." },
        { text: "Patellar reflexes absent", correct: [1], why: "Loss of reflexes is an early sign of a toxic magnesium level." },
        { text: "Mild nausea", correct: [0], why: "Mild nausea is a common effect of magnesium." },
        { text: "Respiratory rate 10/minute", correct: [1], why: "A rate under 12/minute signals respiratory depression." },
        { text: "Feels tired and heavy", correct: [0], why: "Drowsiness and a heavy feeling are common with magnesium." },
        { text: "Urine output 20 mL/hour for 2 hours", correct: [1], why: "Low output lets magnesium build up because the kidneys excrete it." },
      ],
    },
  ],
};
