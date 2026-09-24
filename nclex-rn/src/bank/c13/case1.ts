import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c13-1";

/** Case 1. Day surgery unit. Middle-aged woman going home after gallbladder surgery. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Going Home on the Day of Gallbladder Surgery",
  intro:
    "A 46-year-old woman had a laparoscopic cholecystectomy at 0930 for gallstones that caused repeated pain after meals. At 1230 she arrives on the day surgery unit from the post-anesthesia care unit. The plan is discharge home today.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 94 kg. Body mass index 35.",
        "Obstructive sleep apnea. Uses a CPAP machine at home each night.",
        "Hypertension. Takes amlodipine 5 mg by mouth daily.",
        "No known drug allergies.",
        "Four laparoscopic port sites closed with skin glue.",
        "Her husband will drive her home. He works a night shift tonight.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Discharge home when the client tolerates oral fluids, has voided, walks steadily and has pain controlled with oral medication.",
        "A responsible adult must drive her home and stay with her overnight.",
        "Acetaminophen 1000 mg by mouth every 6 hours.",
        "Oxycodone 5 mg by mouth every 4 hours as needed for pain of 4 or more out of 10.",
        "Ondansetron 4 mg IV every 8 hours as needed for nausea.",
        "Bladder scan if the client has not voided by 1530. Straight catheterize once if the scan shows 600 mL or more.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1230"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "132/80 mmHg"],
          ["SpO2", "95% on room air"],
          ["Pain", "3 of 10"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Readiness cues on the day surgery unit",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1545 the nurse reassesses the client before discharge. Click to highlight the findings in the note below that need follow-up before the client can go home.",
        rationale:
          "The orders require voiding and fluid tolerance before discharge. The client has not voided since 0600. The bladder scan shows 720 mL, which is above the 600 mL limit in the orders. Vomiting after sips shows she cannot yet keep fluids down. Right shoulder aching is referred pain from the gas used to inflate the abdomen. Hypoactive bowel sounds are expected on the day of surgery.",
        sources: [SRC.brunner, SRC.pacu],
      }),
      kind: "highlight",
      passage:
        "[[Alert and oriented to person, place and time]]. [[Right shoulder aches, 3 of 10]]. [[Port sites dry, glue intact]]. [[Has not voided since 0600]]. [[Bladder scan shows 720 mL]]. [[Walked to the bathroom with a steady gait]]. [[Vomited 150 mL after sips of ginger ale]]. [[Bowel sounds hypoactive in all 4 quadrants]]. [[SpO2 95% on room air]].",
      spans: [
        { text: "Alert and oriented to person, place and time", why: "Full orientation shows recovery from anesthesia and needs no follow-up." },
        { text: "Right shoulder aches, 3 of 10", why: "Gas left under the diaphragm refers mild pain to the shoulder. This is expected after laparoscopy." },
        { text: "Port sites dry, glue intact", why: "Dry sites with intact glue show no bleeding." },
        { text: "Has not voided since 0600", why: "Voiding is a discharge criterion in the orders. No void since 0600 suggests urinary retention." },
        { text: "Bladder scan shows 720 mL", why: "720 mL is above the 600 mL limit in the orders, so the client needs a straight catheter." },
        { text: "Walked to the bathroom with a steady gait", why: "A steady gait meets the walking criterion for discharge." },
        { text: "Vomited 150 mL after sips of ginger ale", why: "Vomiting after sips means the client does not yet tolerate oral fluids." },
        { text: "Bowel sounds hypoactive in all 4 quadrants", why: "Anesthesia and opioids slow the bowel. Hypoactive sounds are expected on the day of surgery." },
        { text: "SpO2 95% on room air", why: "An SpO2 of 95% matches her value on arrival and needs no follow-up." },
      ],
      correct: [3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "MOC",
        topic: "Checking discharge criteria after day surgery",
        cjmm: "analyze",
        process: "nursing-process",
        difficulty: 3,
        stem: "At 1600 a straight catheter drains 750 mL of urine. Ondansetron 4 mg IV was given at 1550. Oxycodone 5 mg by mouth was given at 1300 and 1700. At 1800 the nurse reviews the client's progress against the discharge orders. For each finding, specify whether the discharge criterion is met or not met.",
        rationale:
          "Fluids are now kept down and the client has voided on her own. She walks steadily. Pain of 7 of 10 an hour after oxycodone shows her pain is not yet controlled on oral medication. Her husband works tonight, so no responsible adult will stay with her. Two criteria remain unmet, so she cannot go home yet.",
        sources: [SRC.pacu, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Criterion met", "Criterion not met"],
      rows: [
        { text: "Drank 240 mL of juice at 1700 without nausea", correct: [0], why: "Drinking 240 mL without nausea shows she tolerates oral fluids." },
        { text: "Port-site pain 7 of 10, 1 hour after oxycodone 5 mg", correct: [1], why: "Pain of 7 of 10 after an oral opioid dose is not yet controlled." },
        { text: "Voided 350 mL of clear urine at 1745", correct: [0], why: "A void of 350 mL after the catheter shows the bladder is emptying on its own." },
        { text: "Her husband will be at work overnight", correct: [1], why: "The orders need a responsible adult to stay with her overnight. Nobody is yet arranged." },
        { text: "Walked the hallway twice with a steady gait", correct: [0], why: "Walking twice with a steady gait meets the walking criterion." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Sleep apnea and opioids after day surgery",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1830 the client dozes in a chair, 90 minutes after her second oxycodone 5 mg dose. She snores loudly, and her SpO2 drifts to 88% while she sleeps. She did not bring her CPAP machine. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "The client has obstructive sleep apnea and has taken 2 oxycodone doses. Opioids blunt the drive to breathe and relax the upper airway. Loud snoring with an SpO2 of 88% during sleep points to airway obstruction and hypoventilation. This is the first concern. Her void of 350 mL shows retention has resolved. She is no longer vomiting and shows no sign of infection.",
        sources: [SRC.osa, SRC.opioid],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address the client's risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "urinary retention", why: "She voided 350 mL at 1745, so retention has resolved." },
            { text: "respiratory depression", why: "Sleep apnea plus opioids can depress breathing, and her SpO2 falls to 88% when she sleeps." },
            { text: "repeated vomiting", why: "She has kept fluids down since ondansetron at 1550." },
            { text: "wound infection", why: "Infection does not appear on the day of surgery, and her port sites are dry." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a void of 350 mL at 1745", why: "This void shows the bladder now empties. It is not a sign of risk." },
            { text: "dry port-site dressings", why: "Dry port sites point away from bleeding or infection." },
            { text: "an SpO2 of 88% while asleep", why: "A fall to 88% with loud snoring shows the airway closing during sleep." },
            { text: "pain of 7 out of 10 at 1800", why: "Pain needs treatment, but it does not threaten breathing." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Opioid safety teaching after day surgery",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "The client stays overnight for observation. Her sister brings the CPAP machine and will stay with her at home. At 0800 the next day she meets every discharge criterion. Home prescriptions are oxycodone 5 mg by mouth every 6 hours as needed and acetaminophen 1000 mg every 6 hours. Which instructions should the nurse include in the medication teaching? Select all that apply.",
        rationale:
          "Sleep apnea raises the risk of breathing problems with opioids. CPAP keeps the airway open during every sleep, including naps. Alcohol adds to the sedating effect of oxycodone. Many cold and flu remedies contain acetaminophen, which can push the daily total too high. Opioids slow the bowel, so fluids and walking help prevent constipation. Driving waits until she no longer needs the opioid.",
        sources: [SRC.opioid, SRC.osa],
      }),
      kind: "sata",
      options: [
        { text: "Take an extra oxycodone if pain wakes you", why: "Extra doses raise the risk of oversedation. She takes it only as prescribed." },
        { text: "Wear the CPAP for every sleep, including naps", why: "An opioid can close the airway in any sleep, not only at night." },
        { text: "Drive once the first day at home has passed", why: "Oxycodone slows reaction time. She does not drive while she takes it." },
        { text: "Avoid alcohol while taking oxycodone", why: "Alcohol adds to opioid sedation and can depress breathing." },
        { text: "Stop the acetaminophen once oxycodone starts", why: "Scheduled acetaminophen lowers the amount of opioid she needs." },
        { text: "Check cold remedies for added acetaminophen", why: "Hidden acetaminophen in other products can cause an overdose that injures the liver." },
        { text: "Drink fluids and walk to prevent constipation", why: "Opioids slow the bowel. Fluids and walking help keep stools soft." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "BCC",
        topic: "Eating after gallbladder removal",
        cjmm: "action",
        process: "teaching",
        difficulty: 2,
        stem: "Before she leaves, the client asks what she should eat over the next few days at home. Which instruction should the nurse give?",
        rationale:
          "Without a gallbladder, bile flows into the bowel steadily instead of in larger amounts with meals. Small meals with less fat are easier to digest while the body adjusts. She is already keeping fluids down, so she can advance her diet as she tolerates it. Large or fatty meals can cause cramps and loose stools. Long fluid-only diets are not needed.",
        sources: [SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Eat 3 large meals a day to regain strength", why: "Large meals are harder to digest in the first weeks and can cause cramps and loose stools." },
        { text: "Stay on clear fluids only for the first week", why: "A week of clear fluids is not needed. She already keeps fluids down and can advance her diet." },
        { text: "Advance to small, low-fat meals as tolerated", why: "Small, low-fat meals are easy to digest while the bowel adjusts to a steady flow of bile." },
        { text: "Take nothing by mouth until bowel sounds return", why: "She is drinking without nausea. Nothing by mouth is not needed after this surgery." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PA",
        topic: "Follow-up call after gallbladder surgery",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "On day 3 after surgery the nurse makes a follow-up telephone call. The client describes how she feels. For each finding, specify whether it is expected or needs prompt follow-up by the surgeon.",
        rationale:
          "Shoulder pain from the gas should ease over a few days. Bruising at a port site and loose stools after a fatty meal are common. Yellow eyes suggest a blocked or injured bile duct. A temperature of 38.6°C (101.5°F) suggests infection. Abdominal pain that worsens each day can signal a bile leak. These three findings need the surgeon today.",
        sources: [SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected", "Needs prompt follow-up"],
      rows: [
        { text: "Right shoulder ache that is easing", correct: [0], why: "Referred pain from the gas fades as the gas is absorbed." },
        { text: "Yellow tinge to the whites of the eyes", correct: [1], why: "Jaundice suggests a retained stone or injury to the bile duct." },
        { text: "Bruising around the navel port site", correct: [0], why: "Minor bruising at a port site is common and fades." },
        { text: "Temperature 38.6°C (101.5°F) since last night", correct: [1], why: "A temperature of 38.6°C on day 3 suggests infection or a bile leak." },
        { text: "Loose stool after a fried meal", correct: [0], why: "Fatty meals often cause loose stools while the bowel adjusts to steady bile flow." },
        { text: "Abdominal pain that is worse each day", correct: [1], why: "Pain should ease over time. Rising pain can signal a bile leak or peritonitis." },
      ],
    },
  ],
};
