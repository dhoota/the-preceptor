import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c11-2";

/** Case 2. Emergency department. Infant with bruises and an unclear history. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Fussy Infant in the Evening",
  intro:
    "A 5-month-old boy is brought to the emergency department at 2140 by his mother and her partner. The partner says the infant rolled off an adult bed onto a carpeted floor. The infant has been fussy and feeding poorly since then.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Born at 40 weeks. No known medical conditions.",
        "Missed the 4-month well-child visit.",
        "Weight 7.1 kg.",
        "Partner says the fall happened 2 days ago in the afternoon.",
        "Mother later says the infant crawled off the couch while she was in the shower.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2145"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "168/minute, crying"],
          ["Respiratory rate", "44/minute"],
          ["BP", "88/50 mmHg"],
          ["SpO2", "98% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Cues of inflicted injury in an infant",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse undresses the infant for a full skin check and records the note below at 2150. Click to highlight the findings that raise concern for physical abuse.",
        rationale:
          "Bruising of the ear and the torso in an infant this young is a pattern linked to abuse. Three oval bruises on the back of the chest can match fingertip grip marks. A history that changes between caregivers and a 2 day delay before care are also warning signs. Smiling, a clean diaper area, a soft fontanel and a mother who comforts him do not suggest abuse.",
        sources: [SRC.ten4, SRC.abuseEval],
      }),
      kind: "highlight",
      passage:
        "[[Smiles and coos at the nurse between cries]]. [[Purple bruise, 2 cm, on the left ear]]. [[Diaper area clean with no rash]]. [[Three oval bruises on the back of the chest]]. [[Anterior fontanel soft and flat]]. [[Mother and partner give different accounts of the fall]]. [[Mother holds and rocks him during the exam]]. [[Care sought 2 days after the reported fall]].",
      spans: [
        { text: "Smiles and coos at the nurse between cries", why: "Social smiling is an expected behavior at 5 months." },
        { text: "Purple bruise, 2 cm, on the left ear", why: "Ear bruising is rare from accidents and is linked to abuse in young children." },
        { text: "Diaper area clean with no rash", why: "A clean diaper area shows no sign of neglect in hygiene." },
        { text: "Three oval bruises on the back of the chest", why: "Torso bruises in a clustered oval pattern can match a gripping hand." },
        { text: "Anterior fontanel soft and flat", why: "A soft, flat fontanel is expected and shows no raised pressure now." },
        { text: "Mother and partner give different accounts of the fall", why: "A history that differs between caregivers is a warning sign of abuse." },
        { text: "Mother holds and rocks him during the exam", why: "Comforting the infant is expected caregiver behavior." },
        { text: "Care sought 2 days after the reported fall", why: "Delay in seeking care for an injury is a warning sign of abuse." },
      ],
      correct: [1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Motor skills at 5 months",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse checks whether the mother's account fits what a 5-month-old can do. For each motor skill, specify whether it is expected by 5 months of age or not yet expected.",
        rationale:
          "By 4 months most infants hold the head steady when held, bring hands to mouth and push up onto the forearms on the tummy. Sitting alone, crawling on hands and knees and pulling to stand come months later. The mother says he crawled off the couch. A 5-month-old is not expected to crawl, so her account does not fit his development. A history that does not fit the child's development raises concern for abuse.",
        sources: [SRC.milestones, SRC.abuseEval],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Expected by 5 months", "Not yet expected"],
      rows: [
        { text: "Holds head steady when held upright", correct: [0], why: "Steady head control is expected by 4 months." },
        { text: "Crawls on hands and knees", correct: [1], why: "Crawling develops later in the first year, not at 5 months." },
        { text: "Brings hands to mouth", correct: [0], why: "Bringing hands to mouth is expected by 4 months." },
        { text: "Sits alone without support", correct: [1], why: "Sitting without support develops later in the first year." },
        { text: "Pushes up onto forearms on the tummy", correct: [0], why: "Pushing up on the forearms is expected by 4 months." },
        { text: "Pulls to stand holding furniture", correct: [1], why: "Pulling to stand develops near the end of the first year." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Signs of bleeding inside the skull in an infant",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "At 2300 the infant vomits twice. He has no fever or diarrhea. He is harder to wake and cries weakly. The anterior fontanel is now full and tense. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A fontanel that changes from soft and flat to full and tense signals rising pressure inside the skull. Growing difficulty waking shows a falling level of consciousness. With the bruise on the ear, these point to bleeding inside the skull from inflicted head trauma. He has no fever, so sepsis is less likely. The ear bruise shows a blow to the head but does not by itself show injury inside the skull.",
        sources: [SRC.abuseEval, SRC.wong],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The infant is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "viral gastroenteritis", why: "Vomiting alone could fit, but a tense fontanel and drowsiness do not." },
            { text: "bacterial sepsis", why: "The infant has no fever, and the findings point to raised pressure in the skull." },
            { text: "intracranial bleeding", why: "A tense fontanel and falling alertness after head trauma fit bleeding in the skull." },
            { text: "dehydration", why: "Dehydration sinks the fontanel. His fontanel is full and tense." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a full, tense fontanel", why: "A tense fontanel shows raised pressure inside the skull." },
            { text: "a bruise on the left ear", why: "The ear bruise shows trauma but not injury inside the skull." },
            { text: "a temperature of 36.9°C", why: "A normal temperature does not show raised pressure in the skull." },
            { text: "a heart rate of 168/minute", why: "This rate was recorded while crying and does not show pressure in the skull." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "fussiness for 2 days", why: "Fussiness is not specific to injury inside the skull." },
            { text: "oval bruises on the chest", why: "Chest bruises raise concern for abuse, not for bleeding in the skull." },
            { text: "increasing difficulty waking", why: "A falling level of consciousness is a sign of rising pressure in the skull." },
            { text: "poor feeding at home", why: "Poor feeding has many causes and is not specific to the skull." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "RRP",
        topic: "Tests for suspected inflicted injury",
        cjmm: "generate",
        difficulty: 4,
        stem: "The primary health care provider suspects inflicted injury and plans a full medical evaluation. Which diagnostic studies should the nurse anticipate for this infant? Select all that apply.",
        rationale:
          "A skeletal survey is advised for any child younger than 2 years with suspected physical abuse. Head CT is urgent because the fontanel is tense and he is harder to wake. Coagulation studies check for a bleeding disorder that could explain bruising. Liver enzyme levels screen for hidden abdominal injury. An EEG, a lumbar puncture and a stool culture do not fit an afebrile infant with no seizure or diarrhea.",
        refs: ["A skeletal survey is advised for children younger than 2 years with suspected physical abuse."],
        sources: [SRC.abuseEval],
      }),
      kind: "sata",
      options: [
        { text: "Electroencephalogram", why: "An EEG is used for seizures. None has been seen." },
        { text: "Skeletal survey", why: "A skeletal survey finds hidden or healing fractures in a child under 2 years." },
        { text: "Lumbar puncture", why: "He has no fever, and a lumbar puncture is unsafe with raised pressure in the skull." },
        { text: "Liver enzyme levels", why: "Raised liver enzymes can reveal hidden abdominal injury." },
        { text: "Head CT scan", why: "A tense fontanel and falling alertness need urgent head imaging." },
        { text: "Stool culture", why: "He has vomiting without fever or diarrhea, so a stool culture adds nothing." },
        { text: "Coagulation studies", why: "Clotting tests rule out a bleeding disorder as the cause of bruising." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Charting findings in suspected abuse",
        cjmm: "action",
        process: "communication",
        difficulty: 3,
        stem: "The nurse reports the concern to child protective services and then documents the findings. Complete the sentence by dragging the correct choice into each blank.",
        rationale:
          "The chart records what the nurse sees in objective terms: size, color and site of each bruise. The partner's explanation is written as the partner's exact words in quotation marks. Labels such as abuse, rough handling or untruthful are conclusions, not observations. A summary in the nurse's words can change the meaning. Objective records support the child protection investigation.",
        sources: [SRC.abuseEval, SRC.reporting, { body: "Canadian Child Welfare Research Portal", work: "Frequently Asked Questions: Duty to Report", year: 2026, url: "https://cwrp.ca/faqs" }],
        canada: "In Canada, child welfare laws give every person, nurses included, a duty to report suspected child maltreatment. The report goes to the local child welfare agency or police, and agency names vary by province.",
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "The nurse documents the ear injury as {0} and the partner's explanation as {1}.",
      targets: ["Ear injury", "Partner's explanation"],
      tokens: [
        { text: "a bruise that looks like abuse", why: "This is a conclusion. The chart records what is seen." },
        { text: "a 2 cm purple bruise on the left ear", why: "Size, color and site are objective and can be compared later." },
        { text: "a summary of what was meant", why: "A summary adds the nurse's interpretation and can change the meaning." },
        { text: "a bruise from rough handling", why: "The cause is not known. Naming one is an assumption." },
        { text: "exact words in quotation marks", why: "Direct quotes keep the caregiver's account accurate for investigators." },
        { text: "an account that seems untruthful", why: "Judging honesty is not the nurse's role in the chart." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Coping with infant crying",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On day 5 the infant is recovering on the pediatric unit. Child protective services has placed him with his grandmother. The nurse teaches her about infant crying. Which statement by the grandmother shows the teaching was effective?",
        rationale:
          "Crying can last a long time in healthy young infants. When a caregiver feels frustrated, placing the infant safely in the crib and stepping away for a few minutes prevents shaking. Long crying is not proof of illness. Infants do not cry to control adults, and holding them does not spoil them.",
        sources: [SRC.purple, SRC.wong],
      }),
      kind: "mc",
      options: [
        { text: "\"Crying this long means something is wrong with him.\"", why: "Long bouts of crying are common in healthy infants of this age." },
        { text: "\"He cries to control me, so I will leave him be.\"", why: "Infants do not cry to control adults. Crying signals a need." },
        { text: "\"Holding him too much will spoil him at this age.\"", why: "Responding to an infant builds trust and does not spoil him." },
        { text: "\"If I get upset, I will lay him in the crib and step away.\"", why: "Placing him safely and taking a break prevents harm when frustrated." },
      ],
      correct: 3,
    },
  ],
};
