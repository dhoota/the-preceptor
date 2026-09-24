import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c16-1";

/** Case 1. Home hospice. Man in the last days of life with a tired caregiver wife. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Morning Hospice Visit at Home",
  intro:
    "A 64-year-old man with pancreatic cancer that has spread to the liver receives hospice care at home. His wife is his main caregiver. She calls the hospice line at 0800 about changes overnight. The hospice nurse arrives at 1000.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Pancreatic cancer with liver metastases, diagnosed 7 months ago. Enrolled in hospice 5 weeks ago.",
        "Signed POLST form: do not attempt resuscitation, comfort-focused treatment. His stated wish is to die at home.",
        "Medications: morphine extended-release tablets 30 mg by mouth every 12 hours at 1000 and 2200, taken for 3 months (60 mg a day). Senna 2 tablets at bedtime.",
        "Roman Catholic. His wife asked last week about a visit from their parish priest.",
      ].join("\n"),
    },
    {
      title: "Nurses' Notes",
      text: "0800 phone call: Wife reports he could not swallow his 2200 morphine tablet last night. He has had no morphine since 1000 yesterday. He moaned most of the night.",
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Physical signs that death is near",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse assesses the client at 1015 and writes the note below. Click to highlight the findings that suggest death is likely within days.",
        rationale:
          "Cheyne-Stokes breathing and a death rattle are strong signs of impending death. A falling level of consciousness is an early sign. Low urine output and bluish, mottled limbs reflect failing circulation. Only 80 mL of urine since 2200 is a marked fall. A normal temperature, a soft abdomen and intact skin do not signal approaching death.",
        sources: [SRC.pdq],
      }),
      kind: "highlight",
      passage:
        "[[Wife holding his hand at the bedside]]. [[Responds to his name but does not open his eyes]]. [[Temperature 36.9°C (98.4°F)]]. [[Deep breaths followed by pauses of 20 seconds]]. [[Gurgling sound in the throat with each breath]]. [[Skin over the sacrum and heels intact]]. [[Knees and feet mottled and bluish]]. [[Voided 80 mL of dark urine since 2200]]. [[Abdomen soft and not distended]].",
      spans: [
        { text: "Wife holding his hand at the bedside", why: "Family presence is a comfort measure, not a physical sign of dying." },
        { text: "Responds to his name but does not open his eyes", why: "A falling level of consciousness is an early sign that death is near." },
        { text: "Temperature 36.9°C (98.4°F)", why: "A normal temperature does not signal approaching death." },
        { text: "Deep breaths followed by pauses of 20 seconds", why: "Cycles of deep breathing and apnea are Cheyne-Stokes breathing, a sign of impending death." },
        { text: "Gurgling sound in the throat with each breath", why: "Pooled secretions cause a death rattle, a late sign that death is near." },
        { text: "Skin over the sacrum and heels intact", why: "Intact skin shows good care and does not signal approaching death." },
        { text: "Knees and feet mottled and bluish", why: "Peripheral cyanosis reflects failing circulation in the last days of life." },
        { text: "Voided 80 mL of dark urine since 2200", why: "A marked fall in urine output is a late sign of impending death." },
        { text: "Abdomen soft and not distended", why: "A soft abdomen needs no follow-up and does not signal dying." },
      ],
      correct: [1, 3, 4, 6, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Nonverbal pain cues at the end of life",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The client cannot rate his pain. The nurse watches him at rest for 5 minutes, then turns him onto his side with the wife. For each finding, specify whether it suggests pain or does not suggest pain.",
        rationale:
          "The client cannot self-report, so the nurse reads behavior. Moaning, a tense frowning face and pulling the knees up while pushing a hand away are pain behaviors on the PAINAD scale. A relaxed face at rest shows comfort when he is still. Mottled skin reflects circulation and dry lips reflect mouth breathing. Neither is a pain behavior.",
        sources: [SRC.painad, SRC.pdq],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Suggests pain", "Does not suggest pain"],
      rows: [
        { text: "Moans when turned onto his side", correct: [0], why: "Moaning with movement is a vocal sign of pain." },
        { text: "Face relaxed while lying still", correct: [1], why: "A relaxed face at rest suggests comfort when he is not moved." },
        { text: "Frowns and tightens his brow during the turn", correct: [0], why: "Frowning and a tense face are facial signs of pain." },
        { text: "Mottled skin over both knees", correct: [1], why: "Mottling reflects slowing circulation, not pain." },
        { text: "Draws his knees up and pushes the nurse's hand away", correct: [0], why: "Guarding and pushing away care are body language signs of pain." },
        { text: "Dry lips with mouth open", correct: [1], why: "Mouth breathing dries the lips. It is not a pain behavior." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PPT",
        topic: "Lost oral route for scheduled opioid",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews the assessment findings and the 0800 phone call. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "The client moans and grimaces when turned and moaned most of the night. He could not swallow the 2200 tablet, so he has had no morphine since 1000 yesterday. Unrelieved pain comes first because comfort is the goal of his care. His skin is intact and his abdomen is soft. Scant, dark urine is expected in the last days and is not the comfort priority.",
        sources: [SRC.pdq, SRC.painad],
      }),
      kind: "cloze",
      template: "The nurse should first address {0} related to {1}.",
      scoring: "dyad",
      blanks: [
        {
          options: [
            { text: "impaired skin integrity", why: "The skin over the sacrum and heels is intact." },
            { text: "unrelieved pain", why: "Moaning, grimacing and guarding show pain, and comfort is the goal of care." },
            { text: "constipation", why: "The abdomen is soft and not distended. Nothing points to constipation." },
            { text: "fluid volume deficit", why: "Scant, dark urine is expected near death and is not the comfort priority." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a new bowel obstruction", why: "A soft, flat abdomen does not suggest an obstruction." },
            { text: "lying on his back", why: "Position does not explain a night of moaning." },
            { text: "missed oral morphine doses", why: "He could not swallow the 2200 tablet, so his last dose was at 1000 yesterday." },
            { text: "a low urine output", why: "Low urine output does not cause the pain behaviors seen on turning." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PSY",
        topic: "Supporting a spouse at the bedside",
        cjmm: "generate",
        process: "caring",
        difficulty: 3,
        stem: "The wife says, \"I don't know what to do when he makes that rattling sound. I keep thinking I should call an ambulance.\" Which actions should the nurse include in the plan to support the wife? Select all that apply.",
        rationale:
          "Knowing what to expect lowers fear, so the nurse explains the breathing changes. Turning him onto his side often eases the rattle and gives her a task she can do. Presence and touch comfort both of them. The couple is Catholic and she asked about their priest. An ambulance conflicts with his POLST form and his wish to die at home.",
        sources: [SRC.pdq, SRC.hfa],
      }),
      kind: "sata",
      options: [
        { text: "Advise her to call 911 when his breathing pauses", why: "Emergency care conflicts with his POLST form and his wish to die at home." },
        { text: "Explain the breathing changes expected near death", why: "Knowing that the rattle and pauses are expected lowers fear." },
        { text: "Encourage her to keep talking to him and holding his hand", why: "Presence and touch comfort both the client and his wife." },
        { text: "Suggest she wait outside the room during his care", why: "Sending her out cuts her off from him and from learning his care." },
        { text: "Offer to arrange a visit from their parish priest", why: "The couple is Catholic and she asked about a visit last week." },
        { text: "Suggest limiting family visits to protect his rest", why: "Family presence supports both of them at the end of life." },
        { text: "Show her how to turn him onto his side", why: "Repositioning often eases the rattle and gives her a useful role." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Concentrated oral morphine volume",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "The hospice primary health care provider prescribes morphine oral solution 10 mg sublingually every 4 hours in place of the extended-release tablets. The bottle is labeled morphine sulfate oral solution 100 mg per 5 mL (20 mg/mL). How many mL should the nurse teach the wife to give for each dose?",
        rationale:
          "The dose is 10 mg and each mL holds 20 mg. Dividing 10 mg by 20 mg/mL gives 0.5 mL. This strength is for opioid-tolerant clients only. He has taken 60 mg of oral morphine a day for 3 months, so he meets that standard. The small volume can be given when he can no longer swallow.",
        refs: ["Opioid tolerance means at least 60 mg of oral morphine a day for 1 week or longer."],
        calc: { expr: "10 / 20", answer: 0.5, unit: "mL", round: 1, steps: ["10 / 20 = 0.5"] },
        sources: [SRC.morphine, SRC.pdq],
      }),
      kind: "mc",
      options: [
        { text: "0.2 mL", why: "This volume holds less than half of the prescribed dose." },
        { text: "0.5 mL", why: "10 mg divided by 20 mg/mL gives 0.5 mL." },
        { text: "2 mL", why: "This divides 20 by 10. It gives four times the prescribed dose." },
        { text: "5 mL", why: "This is the volume that holds 100 mg, ten times the prescribed dose." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Plan for an expected death at home",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The next day the nurse reviews what to do when death occurs at home. Which two statements by the wife show understanding? Select two.",
        rationale:
          "An expected death under hospice is reported to the hospice line, not to emergency services. A hospice nurse comes to confirm the death and helps with next steps. Families may spend time with the body before the funeral home comes. Calling 911 or starting rescue breaths conflicts with his POLST form. A hospital transfer goes against his wish to die at home.",
        sources: [SRC.hfa],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will call 911 so they can try to restart his heart.\"", why: "Resuscitation conflicts with his POLST form and his comfort goals." },
        { text: "\"I will start rescue breaths if his lips turn blue.\"", why: "Rescue breaths are resuscitation, which his POLST form declines." },
        { text: "\"I will call the hospice number when his breathing stops.\"", why: "The hospice team confirms an expected death at home and guides next steps." },
        { text: "\"I should move him to the hospital before the end.\"", why: "A transfer goes against his stated wish to die at home." },
        { text: "\"I can sit with him for a while before anyone comes.\"", why: "Families may spend time with the body. The funeral home comes when they are ready." },
        { text: "\"I must have his body taken away within the hour.\"", why: "There is no need to move the body right away." },
      ],
      correct: [2, 4],
    },
  ],
};
