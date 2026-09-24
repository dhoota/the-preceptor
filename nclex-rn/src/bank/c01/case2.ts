import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c01-2";

/** Case 2. Labor and birth unit. Recovery period after a vaginal birth. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Recovery After a Vaginal Birth",
  intro:
    "A 31-year-old client gave birth vaginally to a 4.3 kg infant at 0900 after a 19-hour labor augmented with oxytocin. This is her third birth. The nurse cares for her in the labor and birth unit during recovery.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 3, para 3. Birth at 39 weeks of gestation.",
        "Mild persistent asthma. Uses a budesonide inhaler daily. Last asthma attack 8 months ago.",
        "No history of hypertension. Blood type O positive.",
        "Hemoglobin before birth 11.2 g/dL (112 g/L).",
        "Oxytocin infusion for labor augmentation for 11 hours.",
        "Quantitative blood loss at birth 400 mL. Placenta delivered intact at 0910.",
        "Oxytocin 30 units in 500 mL lactated Ringer's infusing IV since 0910.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0915", "0930", "0945"],
        rows: [
          ["Temperature", "37.1°C (98.8°F)", "not taken", "not taken"],
          ["Heart rate (/minute)", "84", "92", "112"],
          ["BP (mmHg)", "124/78", "118/72", "100/60"],
          ["Respiratory rate (/minute)", "18", "18", "22"],
          ["SpO2 (%)", "99", "98", "97"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "HPM",
        topic: "Fourth stage of labor assessment",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 0945 the nurse assesses the client and records the findings listed below. Which findings require immediate follow-up? Select all that apply.",
        rationale:
          "A boggy fundus means the uterus is not contracting enough to close the vessels at the placental site. A pad saturated in 15 minutes is excessive bleeding. A heart rate of 112/minute, up from 84/minute, is an early sign of volume loss. A fundus pushed to the right suggests a full bladder, which keeps the uterus from contracting. Lochia rubra with small clots, mild afterpains and a temperature of 37.1°C are expected.",
        sources: [SRC.lowdermilk, SRC.pph],
      }),
      kind: "sata",
      options: [
        { text: "Fundus boggy on palpation", why: "A soft uterus cannot compress the open vessels at the placental site." },
        { text: "Lochia rubra with small clots", why: "Red lochia with small clots is expected in the first hours after birth." },
        { text: "Pad saturated in 15 minutes", why: "Soaking a pad in 15 minutes signals excessive bleeding." },
        { text: "Heart rate 112/minute", why: "The heart rate has risen from 84/minute, an early sign of blood loss." },
        { text: "Afterpains rated 3 of 10", why: "Mild cramping is expected, more so after a third birth." },
        { text: "Fundus deviated to the right", why: "A displaced fundus suggests a full bladder that keeps the uterus from contracting." },
        { text: "Temperature 37.1°C (98.8°F)", why: "This temperature is within the normal range." },
      ],
      correct: [0, 2, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Cause of early postpartum bleeding",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse analyzes the 0945 findings together with the history. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Uterine atony is the most common cause of bleeding soon after birth. A boggy fundus is its direct sign. A long labor augmented with oxytocin tires the uterine muscle and raises the risk. A laceration bleeds while the fundus stays firm. A hematoma causes severe perineal pain or pressure. A clotting disorder shows as oozing from many sites. Lochia rubra and afterpains are expected.",
        sources: [SRC.pph, SRC.lowdermilk],
      }),
      kind: "cloze",
      template: "The bleeding is most likely caused by {0} as evidenced by {1} and {2}.",
      scoring: "triad",
      blanks: [
        {
          options: [
            { text: "a vaginal laceration", why: "A laceration bleeds while the fundus stays firm. This fundus is boggy." },
            { text: "uterine atony", why: "Poor uterine muscle tone leaves the placental site vessels open." },
            { text: "a vulvar hematoma", why: "A hematoma causes severe perineal pain or pressure. Neither is reported." },
            { text: "a clotting disorder", why: "A clotting disorder shows as oozing from several sites. None is described." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "lochia rubra", why: "Red lochia is expected in the first days after birth." },
            { text: "mild afterpains", why: "Afterpains are expected and show the uterus is contracting." },
            { text: "a normal temperature", why: "A normal temperature does not point to any cause of bleeding." },
            { text: "a boggy fundus", why: "A soft fundus is the direct sign of uterine atony." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "a long labor with oxytocin", why: "A long, augmented labor tires the uterine muscle and raises the risk of atony." },
            { text: "an O positive blood type", why: "Blood type does not affect uterine tone." },
            { text: "mild persistent asthma", why: "Asthma does not cause uterine atony." },
            { text: "a hemoglobin of 11.2 g/dL (112 g/L)", why: "This hemoglobin before birth does not affect uterine tone." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Priority problem in postpartum bleeding",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1000 the heart rate is 118/minute and BP is 94/58 mmHg. The client says she feels light-headed. Quantitative blood loss since birth now totals 1000 mL. Which problem is the nurse's priority?",
        rationale:
          "A total blood loss of 1000 mL meets the definition of postpartum hemorrhage. A heart rate of 118/minute, a BP of 94/58 mmHg and light-headedness show the body is no longer fully compensating. Circulating volume comes first. Pain, infection risk and bonding matter but do not threaten life in the next minutes.",
        refs: ["Postpartum hemorrhage is a cumulative blood loss of 1000 mL or more, or blood loss with signs of hypovolemia, within 24 hours of birth."],
        sources: [SRC.pph, { body: "Robinson D, Basso M, Chan C, Duckitt K, Lett R. Society of Obstetricians and Gynaecologists of Canada", work: "Guideline No. 431: Postpartum Hemorrhage and Hemorrhagic Shock. Journal of Obstetrics and Gynaecology Canada 44(12):1293", year: 2022, url: "https://www.jogc.com/article/S1701-2163(22)00668-5/abstract" }],
        canada: "SOGC Guideline No. 431 (2022) stages postpartum hemorrhage, starting at 500 mL after a vaginal birth. A loss of 1000 to 1500 mL with a heart rate above 110/minute is stage 2, moderate hemorrhage.",
      }),
      kind: "mc",
      options: [
        { text: "Risk for infection of the perineum", why: "Infection risk exists but does not threaten life now." },
        { text: "Hypovolemia from blood loss", why: "A loss of 1000 mL with a rising pulse and falling BP threatens perfusion." },
        { text: "Acute pain from uterine cramping", why: "Cramping is expected and is not the most urgent problem." },
        { text: "Risk for impaired bonding with the infant", why: "Bonding matters but comes after stabilizing circulation." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Selecting a second-line uterotonic",
        cjmm: "generate",
        difficulty: 4,
        stem: "The fundus stays boggy after massage while the oxytocin infuses. The protocol lists second-line uterotonic medications. Complete the sentence by dragging a medication into each blank.",
        rationale:
          "Methylergonovine causes sustained uterine contraction. It is avoided in hypertension, and this client has no hypertension and a BP of 94/58 mmHg. Carboprost is a prostaglandin that can cause bronchospasm. It is avoided in asthma, and this client has mild persistent asthma. Terbutaline and magnesium sulfate relax the uterus and would worsen atony.",
        sources: [SRC.pph, SRC.lowdermilk, { body: "Association of Ontario Midwives", work: "Clinical Practice Guideline No. 17: Prevention and Management of Postpartum Hemorrhage", year: 2024, url: "https://www.ontariomidwives.ca/sites/default/files/2024-06/CPG-Postpartum%20Hemorrhage-2024-PUB.pdf" }],
        canada: "Methylergonovine has not been sold in Canada since 1998. Canadian units give ergonovine maleate instead, which is also contraindicated in hypertension. Carboprost (Hemabate) is available in Canada and is avoided in asthma.",
      }),
      kind: "dnd",
      template: "The nurse prepares {0} as the next uterotonic and questions {1} because of the client's history.",
      scoring: "zero-one",
      targets: ["Medication to prepare", "Medication to question"],
      tokens: [
        { text: "Terbutaline 0.25 mg subcut", why: "Terbutaline relaxes uterine muscle and would worsen atony." },
        { text: "Methylergonovine 0.2 mg IM", why: "It contracts the uterus and is safe without hypertension." },
        { text: "Magnesium sulfate 4 g IV", why: "Magnesium relaxes smooth muscle, including the uterus." },
        { text: "Carboprost 250 mcg IM", why: "Carboprost can cause bronchospasm in a client with asthma." },
      ],
      correct: [1, 3],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Assigning tasks during a hemorrhage",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The nurse stays at the bedside and continues fundal massage. A second registered nurse and an assistive personnel (AP) arrive to help. For each task, specify the team member the nurse should assign.",
        rationale:
          "Giving medications, placing an IV catheter and assessing mental status need registered nurse knowledge and judgment. The client is unstable, so these stay with the second registered nurse. Weighing pads and bringing the hemorrhage cart are routine tasks with predictable outcomes. The AP can do them, and the nurses interpret the results.",
        sources: [SRC.delegation, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Second registered nurse", "Assistive personnel"],
      rows: [
        { text: "Give the IM methylergonovine", correct: [0], why: "Medication administration is outside the AP role." },
        { text: "Weigh saturated pads and linens", correct: [1], why: "Weighing is a routine task. The nurse interprets the result." },
        { text: "Assess level of consciousness", correct: [0], why: "Assessment of an unstable client needs registered nurse judgment." },
        { text: "Bring the hemorrhage cart to the room", correct: [1], why: "Fetching supplies is a routine task within the AP role." },
        { text: "Insert a second large-bore IV catheter", correct: [0], why: "IV insertion is a licensed nursing skill." },
      ],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PA",
        topic: "Evaluating hemorrhage treatment",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "At 1100 the nurse evaluates the client after treatment. Which two findings show that the treatment is effective? Select two.",
        rationale:
          "A firm fundus at the midline shows the uterus is now contracting. A BP of 112/68 mmHg, up from 94/58 mmHg, shows circulating volume is recovering. Rectal pressure with perineal pain suggests a hematoma. A pad soaked in 30 minutes is still heavy bleeding. Cool, clammy skin and a urine output of 20 mL in an hour show poor perfusion.",
        refs: ["Urine output below 30 mL/hour suggests poor renal perfusion."],
        sources: [SRC.lowdermilk, SRC.pph],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Fundus firm and midline at the umbilicus", why: "A firm, midline fundus shows effective uterine contraction." },
        { text: "New rectal pressure and perineal pain", why: "These suggest a hematoma forming and need follow-up." },
        { text: "A pad saturated in 30 minutes", why: "This is still heavy bleeding." },
        { text: "BP 112/68 mmHg, up from 94/58 mmHg", why: "A rising BP shows circulating volume is recovering." },
        { text: "Cool, clammy skin on the arms", why: "Cool, clammy skin reflects poor peripheral perfusion." },
        { text: "Urine output 20 mL in the last hour", why: "Output below 30 mL in an hour suggests poor kidney perfusion." },
      ],
      correct: [0, 3],
    },
  ],
};
