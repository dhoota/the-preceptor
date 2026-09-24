import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c09-4";

/** Case 4. Labor and birth unit. Sudden pain and dark bleeding at 35 weeks. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Sudden Pain at 35 Weeks",
  intro:
    "A 29-year-old woman, gravida 3, para 2, arrives at the labor and birth unit at 2140. She is at 35 weeks of gestation. She reports sudden, constant abdominal pain that began 1 hour ago, followed by vaginal bleeding.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Gravida 3, para 2. Two vaginal births at term. No previous uterine surgery.",
        "Chronic hypertension treated with labetalol 200 mg by mouth twice daily.",
        "Smokes 10 cigarettes a day.",
        "Blood type O negative. Antibody screen negative at 28 weeks.",
        "Ultrasound at 20 weeks: placenta on the fundus, clear of the cervix.",
        "Weight 72 kg.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Admission findings with third trimester bleeding",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 2145 the nurse completes the admission assessment. Which findings require immediate follow-up? Select all that apply.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "2145. Dark red vaginal bleeding, about 150 mL on pads and linen.",
              "Uterus firm and tender between contractions. Contractions every 2 minutes.",
              "Fetal heart rate baseline 150/minute with minimal variability. Late decelerations after each contraction.",
            ].join("\n"),
          },
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "2145"],
              rows: [
                ["Temperature", "36.8°C (98.2°F)"],
                ["Heart rate", "112/minute"],
                ["Respiratory rate", "22/minute"],
                ["BP", "148/94 mmHg"],
                ["SpO2", "98% on room air"],
              ],
            },
          },
        ],
        rationale:
          "A uterus that stays firm and tender between contractions suggests blood trapped behind the placenta. Dark red bleeding of about 150 mL confirms active blood loss. Late decelerations show the fetus is not tolerating contractions. A maternal heart rate of 112/minute can be an early sign of hypovolemia. Her usual hypertension can hide a fall in BP. The temperature, SpO2 and antibody screen are normal.",
        sources: [SRC.oyelese, SRC.lowdermilk],
      }),
      kind: "sata",
      options: [
        { text: "Temperature 36.8°C (98.2°F)", why: "This temperature is normal and needs no follow-up." },
        { text: "Uterus firm and tender between contractions", why: "A uterus that does not relax suggests bleeding behind the placenta." },
        { text: "Antibody screen negative at 28 weeks of gestation", why: "A negative screen means no Rh antibodies had formed and needs no urgent action." },
        { text: "Dark red bleeding of about 150 mL", why: "Visible bleeding with pain needs urgent evaluation." },
        { text: "SpO2 98% on room air", why: "Oxygen saturation is normal." },
        { text: "Late decelerations after each contraction", why: "Recurrent late decelerations reflect reduced oxygen transfer to the fetus." },
        { text: "Heart rate 112/minute", why: "Maternal tachycardia can be an early sign of blood loss." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Abruption compared with placenta previa",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse compares the client's presentation with the features of placenta previa. For each finding, specify whether it is more consistent with placental abruption or placenta previa.",
        rationale:
          "Abruption is separation of a normally placed placenta. It causes constant pain, a firm tender uterus and often dark bleeding. Chronic hypertension is a major risk factor. An ultrasound showing the placenta clear of the cervix rules out previa. Previa typically causes painless bright red bleeding with a soft, relaxed uterus.",
        sources: [SRC.oyelese, SRC.lowdermilk],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Placental abruption", "Placenta previa"],
      rows: [
        { text: "Constant abdominal pain", correct: [0], why: "Bleeding behind the placenta irritates the uterus and causes pain." },
        { text: "Painless bright red bleeding", correct: [1], why: "A low placenta bleeds as the cervix changes, usually without pain." },
        { text: "Firm, tender uterus", correct: [0], why: "Blood trapped in the uterine wall keeps the uterus firm and tender." },
        { text: "Soft, relaxed uterus", correct: [1], why: "In previa the uterus usually stays soft between contractions." },
        { text: "Dark red bleeding", correct: [0], why: "Blood that pools behind the placenta darkens before it passes." },
        { text: "Chronic hypertension", correct: [0], why: "Hypertension is a major risk factor for abruption." },
        { text: "Placenta clear of the cervix on ultrasound", correct: [0], why: "A placenta away from the cervix rules out previa." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority concern in placental separation",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 2155 the fetal heart rate tracing still shows a baseline of 150/minute, minimal variability and late decelerations after each contraction. Complete the following sentence by choosing from the lists of options.",
        refs: ["A normal fetal heart rate baseline is 110 to 160/minute."],
        rationale:
          "Placental separation cuts the surface for gas exchange. Recurrent late decelerations with minimal variability show the fetus is short of oxygen. This is the most urgent problem. A baseline of 150/minute is within the 110 to 160/minute range. A temperature of 36.8°C does not suggest infection. A negative antibody screen makes Rh disease unlikely.",
        sources: [SRC.lowdermilk, SRC.oyelese],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The priority concern is {0}, as shown by {1}.",
      blanks: [
        {
          options: [
            { text: "maternal infection", why: "The temperature is 36.8°C and nothing suggests infection." },
            { text: "fetal anemia from Rh disease", why: "The antibody screen was negative, so Rh disease is unlikely." },
            { text: "fetal hypoxia", why: "Placental separation reduces oxygen transfer to the fetus." },
            { text: "uterine rupture", why: "She has had vaginal births only and no uterine surgery." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a baseline of 150/minute", why: "A baseline of 150/minute is within the normal range." },
            { text: "recurrent late decelerations", why: "Late decelerations after each contraction reflect poor placental oxygen transfer." },
            { text: "a maternal temperature of 36.8°C", why: "A normal temperature does not point to a fetal problem." },
            { text: "a negative antibody screen", why: "A negative screen does not show fetal compromise." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Preparing for an emergency cesarean birth",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The primary health care provider plans an emergency cesarean birth, and the client signs the consent form. Which actions should the nurse include in the preoperative plan? Select all that apply.",
        rationale:
          "Two identifiers confirm the right client before surgery and before any blood product. An indwelling catheter keeps the bladder empty and away from the incision. Hair is left in place or clipped, because razors cause small cuts that raise infection risk. Rings and piercings come off because fingers and tissues can swell and jewelry can be lost or caught. An enema delays surgery. Oral fluids raise aspiration risk.",
        sources: [SRC.tjc, SRC.who, SRC.aorn, SRC.lowdermilk],
      }),
      kind: "sata",
      options: [
        { text: "Give a tap water enema", why: "An enema delays an emergency birth and has no benefit." },
        { text: "Shave the abdomen with a razor", why: "Razors cause small skin cuts that raise surgical site infection risk." },
        { text: "Confirm identity with two identifiers", why: "Two identifiers prevent wrong-client procedures and blood errors." },
        { text: "Encourage clear fluids until surgery", why: "Oral intake before emergency surgery raises aspiration risk." },
        { text: "Insert an indwelling urinary catheter", why: "An empty bladder is less likely to be injured during the incision." },
        { text: "Clip abdominal hair only if needed", why: "Clipping, when hair must be removed, avoids the skin cuts of shaving." },
        { text: "Remove rings and body piercings", why: "Rings can constrict swelling fingers, and jewelry can be lost or caught." },
      ],
      correct: [2, 4, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Delegation during an obstetric emergency",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse prepares the client for the operating room. Which tasks can the nurse delegate to the assistive personnel? Select two.",
        rationale:
          "Carrying specimens to the laboratory and gathering supplies are routine tasks with set steps and no judgment. They fit the assistive role. Assessing the fetal tracing and estimating blood loss need nursing judgment. Explaining surgical risks belongs to the provider who obtains consent. Medications are given by licensed nurses.",
        sources: [SRC.delegation, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Take the blood samples to the laboratory", why: "Transporting specimens is a routine task with no assessment." },
        { text: "Assess the fetal heart rate tracing", why: "Interpreting the tracing requires nursing judgment." },
        { text: "Explain the risks of cesarean birth", why: "The provider explains risks as part of informed consent." },
        { text: "Gather the supplies for catheter insertion", why: "Collecting supplies is routine and needs no judgment." },
        { text: "Give the prescribed Rh immune globulin", why: "Giving medication is outside the assistive role." },
        { text: "Evaluate the amount of vaginal bleeding", why: "Judging blood loss is an assessment for the nurse." },
      ],
      correct: [0, 3],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Coping after an emergency preterm birth",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "At 0100 the client is on the postpartum unit after the cesarean birth. The newborn is in the neonatal intensive care unit for breathing support. She says, \"This happened because I smoked. I will never forgive myself.\" After the nurse listens and offers support, which statement by the client shows improved coping?",
        rationale:
          "Wanting to see the newborn and learn how to help shows she is moving toward her new role. It turns guilt into action. Avoiding visitors or thoughts of the baby suggests withdrawal. Saying there is no point in quitting smoking suggests hopelessness and a missed chance for change.",
        sources: [SRC.lowdermilk],
      }),
      kind: "mc",
      options: [
        { text: "\"I want to see my baby and learn to help.\"", why: "Seeking contact and a role in care shows adaptive coping." },
        { text: "\"I don't want anyone to visit me right now.\"", why: "Withdrawing from support suggests she is not coping." },
        { text: "\"I'd rather not think about the baby yet.\"", why: "Avoiding thoughts of the newborn can delay attachment." },
        { text: "\"There is no point quitting smoking now.\"", why: "This statement suggests hopelessness, not improved coping." },
      ],
      correct: 0,
    },
  ],
};
