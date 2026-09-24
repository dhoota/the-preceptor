import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c13-4";

const REF_URINE = "Urine output below 0.5 mL/kg/hour suggests poor kidney perfusion.";
const REF_SEVERE = "Severe Clostridioides difficile infection is a WBC of 15 000/mm3 or more, or a creatinine above 1.5 mg/dL (133 micromol/L).";
const REF_STOP = "Contact precautions continue for at least 48 hours after the diarrhea resolves.";

/** Case 4. Medical unit. Older man with new diarrhea during antibiotic treatment. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "New Diarrhea During a Hospital Stay",
  intro:
    "A 72-year-old man was admitted to the medical unit 8 days ago with cellulitis of the left lower leg. He has received IV clindamycin since admission. Since 1400 yesterday he has had frequent watery stools. He shares a semi-private room and bathroom with another client.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Cellulitis of the left lower leg. The red area has shrunk inside the border marked on admission.",
        "Gastroesophageal reflux. Takes pantoprazole 40 mg by mouth daily.",
        "Hypertension. Takes hydrochlorothiazide 25 mg by mouth daily.",
        "Weight 76 kg.",
        "Creatinine on admission 0.9 mg/dL (80 micromol/L).",
        "Lives with his wife. Their grandchildren visit often.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Admission", "Today 0800"],
        rows: [
          ["Temperature", "37.6°C (99.7°F)", "38.2°C (100.8°F)"],
          ["Heart rate", "88/minute", "104/minute"],
          ["Respiratory rate", "16/minute", "18/minute"],
          ["BP", "136/82 mmHg", "108/64 mmHg"],
          ["SpO2", "97% on room air", "97% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Cues of new diarrhea and fluid loss",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 0800 the nurse reads the night nurse's note. Click to highlight the findings in the note below that need follow-up.",
        rationale:
          "Seven watery stools since 1400 yesterday during antibiotic treatment point to antibiotic-associated diarrhea, including C. difficile. Cramping fits colitis. Dry mucous membranes show fluid loss. 180 mL of urine over 8 hours is well below 0.5 mL/kg/hour for a client of 76 kg. The shrinking leg redness, clear lungs and full orientation are reassuring.",
        refs: [REF_URINE],
        sources: [SRC.cdiff, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Seven watery stools since 1400 yesterday]]. [[Cramping lower abdominal pain, 5 of 10]]. [[Left leg redness inside the marked border]]. [[Mucous membranes dry]]. [[Urine output 180 mL over 8 hours]]. [[Lungs clear in all fields]]. [[Alert and oriented to person, place and time]].",
      spans: [
        { text: "Seven watery stools since 1400 yesterday", why: "Frequent watery stools during antibiotic treatment need testing for C. difficile." },
        { text: "Cramping lower abdominal pain, 5 of 10", why: "Cramping with diarrhea fits inflammation of the colon." },
        { text: "Left leg redness inside the marked border", why: "Redness that has shrunk shows the cellulitis is improving." },
        { text: "Mucous membranes dry", why: "Dry membranes show fluid loss from the diarrhea." },
        { text: "Urine output 180 mL over 8 hours", why: "This is below 0.5 mL/kg/hour for a client of 76 kg and suggests poor kidney perfusion." },
        { text: "Lungs clear in all fields", why: "Clear lungs are a normal finding and need no follow-up." },
        { text: "Alert and oriented to person, place and time", why: "Normal orientation shows no change in mental status." },
      ],
      correct: [0, 1, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Laboratory markers of severe C. difficile",
        cjmm: "analyze",
        difficulty: 3,
        stem: "Laboratory results return at 1000. The stool test is positive for C. difficile toxin. For each finding, specify whether it meets a criterion for severe infection or does not meet a criterion.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "1000", "Reference range"],
              rows: [
                ["WBC", "18 200/mm3", "4500 to 11 000/mm3"],
                ["Creatinine", "1.7 mg/dL (150 micromol/L)", "upper limit 1.2 mg/dL (106 micromol/L)"],
                ["Potassium", "3.1 mEq/L (3.1 mmol/L)", "3.5 to 5.0 mEq/L"],
                ["Albumin", "3.4 g/dL (34 g/L)", "lower limit 3.5 g/dL (35 g/L)"],
                ["Stool C. difficile toxin", "Positive", "Negative"],
              ],
            },
          },
        ],
        rationale:
          "Severe infection is defined by a WBC of 15 000/mm3 or more, or a creatinine above 1.5 mg/dL. His WBC is 18 200/mm3. His creatinine has risen from 0.9 to 1.7 mg/dL (150 micromol/L). Both meet a severe criterion. The low potassium, the albumin, the fever and the heart rate need attention but are not part of this definition.",
        refs: [REF_SEVERE],
        sources: [SRC.cdiff, SRC.cdiff2021, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada:
          "Canadian labs report these results in SI units only. The WBC reads 18.2 x 10^9/L and albumin 34 g/L, so the severe WBC cut point reads as 15 x 10^9/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Meets a severe criterion", "Does not meet a severe criterion"],
      rows: [
        { text: "WBC 18 200/mm3", correct: [0], why: "A WBC of 15 000/mm3 or more meets the severe criterion." },
        { text: "Potassium 3.1 mEq/L (3.1 mmol/L)", correct: [1], why: "Low potassium from diarrhea needs replacement but is not a severity criterion." },
        { text: "Temperature 38.2°C (100.8°F)", correct: [1], why: "Fever is common in this infection but is not one of the two severity criteria." },
        { text: "Creatinine 1.7 mg/dL (150 micromol/L)", correct: [0], why: "A creatinine above 1.5 mg/dL meets the severe criterion." },
        { text: "Albumin 3.4 g/dL (34 g/L)", correct: [1], why: "Albumin is slightly low but is not part of the severity definition." },
        { text: "Heart rate 104/minute", correct: [1], why: "A fast heart rate reflects fever and fluid loss but is not a severity criterion." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Most pressing risk with infectious diarrhea",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1030 the nurse reviews the findings so far. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Large stool losses have caused a fluid deficit. The BP has fallen from 136/82 to 108/64 mmHg and the heart rate has risen to 104/minute. Urine output of 180 mL in 8 hours and a rising creatinine show the kidneys are underperfused. Restoring volume comes first. The potassium of 3.1 mEq/L also needs replacement, but it does not show volume loss.",
        refs: [REF_URINE],
        sources: [SRC.brunner, SRC.cdiff],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address the client's risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "fluid overload", why: "He is losing fluid in his stools. His membranes are dry and his BP has fallen." },
            { text: "pressure injury", why: "Skin care matters with diarrhea, but it is not the most urgent risk." },
            { text: "hypovolemia", why: "Stool losses, falling BP, a fast pulse and low urine output show a fluid deficit." },
            { text: "leg infection", why: "The leg redness has shrunk inside the marked border, so the cellulitis is improving." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "urine output of 180 mL in 8 hours", why: "This output is below 0.5 mL/kg/hour and shows poor kidney perfusion." },
            { text: "a potassium of 3.1 mEq/L", why: "Low potassium needs replacement but is not a measure of volume." },
            { text: "redness inside the marked border", why: "Shrinking redness shows the cellulitis is improving." },
            { text: "clear lung sounds", why: "Clear lungs do not show a fluid deficit." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Precautions for C. difficile on a medical unit",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans infection control for the client now that the toxin test is positive. Which measures should the nurse include in the plan? Select all that apply.",
        rationale:
          "C. difficile spreads by spores on hands, equipment and surfaces. A private room with its own toilet protects his roommate. Gown and gloves are worn to enter. Dedicated equipment and a sporicidal disinfectant stop spread by surfaces. Alcohol rub does not kill spores, so soap and water is preferred. The organism does not spread by air. Precautions continue after the stools firm up.",
        refs: [REF_STOP],
        sources: [SRC.cdiff, SRC.cdcCdiff],
      }),
      kind: "sata",
      options: [
        { text: "Move him to a private room with its own toilet", why: "He shares a bathroom. A private toilet stops spread to his roommate." },
        { text: "Rely on alcohol rub alone after his care", why: "Alcohol does not kill spores. Soap and water is preferred after contact with stool." },
        { text: "Wear a gown and gloves to enter the room", why: "Gown and gloves block spores on clothing and hands." },
        { text: "Wear a fit-tested N95 respirator for care", why: "C. difficile spreads by contact, not through the air." },
        { text: "Use a dedicated stethoscope and thermometer", why: "Shared equipment carries spores to other clients." },
        { text: "Clean the room with a sporicidal disinfectant", why: "Spores survive many routine cleaners. A sporicidal product kills them." },
        { text: "End precautions once the first formed stool appears", why: "Precautions continue for at least 48 hours after the diarrhea resolves." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Oral vancomycin dose volume",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The primary health care provider stops the clindamycin and prescribes vancomycin 125 mg by mouth 4 times a day. The pharmacy supplies vancomycin oral solution 25 mg/mL. How many mL should the nurse give for each dose?",
        rationale:
          "Each dose is 125 mg. Each mL holds 25 mg. Dividing 125 mg by 25 mg/mL gives 5 mL. Oral vancomycin stays in the bowel and acts on C. difficile there. Stopping the clindamycin removes the drug that disrupted the normal bowel flora.",
        calc: { expr: "125 / 25", answer: 5, unit: "mL", round: 0, steps: ["125 / 25 = 5"] },
        sources: [SRC.cdiff, SRC.cdiff2021],
      }),
      kind: "mc",
      options: [
        { text: "5 mL", why: "125 mg divided by 25 mg/mL is 5 mL." },
        { text: "12.5 mL", why: "This divides the dose by 10 instead of by the 25 mg/mL strength. It gives more than twice the dose." },
        { text: "25 mL", why: "25 mL gives 5 times the prescribed dose." },
        { text: "50 mL", why: "50 mL gives 10 times the prescribed dose." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Preventing C. difficile spread at home",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "On the day of discharge the nurse evaluates the teaching given to the client's wife. Which two statements by the wife show understanding? Select two.",
        rationale:
          "Soap and water removes spores from hands, and alcohol rub does not kill them. Surfaces are cleaned with a product labeled to kill C. difficile spores. Disposable dishes are not needed. Visitors need not stay away if hands are washed and the bathroom is kept clean. A repeat stool test after symptoms end is not recommended, because spores and toxin can persist without disease.",
        sources: [SRC.cdcCdiff, SRC.cdiff],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"Hand sanitizer is all we need at home.\"", why: "Alcohol does not kill spores. Soap and water works better against them." },
        { text: "\"I'll wash with soap and water after helping him.\"", why: "Soap and water physically removes spores from the hands." },
        { text: "\"He should eat off paper plates for a month.\"", why: "Dishes washed in the usual way do not spread C. difficile." },
        { text: "\"I'll clean the toilet with a spore-killing product.\"", why: "A product labeled to kill spores is needed for bathroom surfaces." },
        { text: "\"The grandchildren must stay away until spring.\"", why: "Hand washing and cleaning protect visitors. A long ban is not needed." },
        { text: "\"He'll need another stool test once he feels better.\"", why: "Repeat testing after recovery is not advised. Tests can stay positive without disease." },
      ],
      correct: [1, 3],
    },
  ],
};
