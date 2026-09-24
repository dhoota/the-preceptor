import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c01-4";

/** Case 4. Surgical unit. New agitation the morning after bowel surgery. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Restless Night After Bowel Surgery",
  intro:
    "A 56-year-old man had an open sigmoid colectomy yesterday afternoon for perforated diverticulitis. It is now 0600 on postoperative day 1. The night nurse reports that he became restless after midnight and did not sleep.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Admitted through the emergency department yesterday morning with abdominal pain and fever.",
        "On admission he reported drinking a few beers on weekends.",
        "Update 0530: his wife reports he drinks 10 to 12 beers daily. He had a withdrawal seizure 2 years ago. His last drink was about 24 hours ago.",
        "No other medical history.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2200", "0200", "0600"],
        rows: [
          ["Temperature", "37.2°C (99.0°F)", "37.4°C (99.3°F)", "37.9°C (100.2°F)"],
          ["Heart rate (/minute)", "92", "104", "122"],
          ["BP (mmHg)", "138/84", "150/92", "168/98"],
          ["Respiratory rate (/minute)", "18", "20", "24"],
          ["SpO2 (%)", "96", "95", "95"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test at 0500", "Result", "Reference range"],
        rows: [
          ["Magnesium", "1.4 mg/dL (0.58 mmol/L)", "1.7 to 2.2 mg/dL"],
          ["Potassium", "3.6 mEq/L (3.6 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Glucose", "102 mg/dL (5.7 mmol/L)", "70 to 99 mg/dL"],
          ["AST", "142 units/L", "10 to 40 units/L"],
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
        topic: "Early signs of alcohol withdrawal",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 0600 the nurse reads the night nurse's note below. Click to highlight the findings that require follow-up.",
        rationale:
          "Tremor, sweating, a racing heart and seeing insects that are not there are signs of central nervous system overactivity. With heavy daily drinking and a last drink about 24 hours ago, they point to alcohol withdrawal. Orientation is intact. Incision pain of 3 and hypoactive bowel sounds are expected on day 1 after a colectomy. Clear lungs are expected.",
        sources: [SRC.asam],
      }),
      kind: "highlight",
      passage:
        "[[Oriented to person, place and time]]. [[Hands tremble when he reaches for his cup]]. [[Incision edges together with no drainage]]. [[Says he sees insects on the wall]]. [[Pain 3 of 10 at the incision]]. [[Gown damp with sweat]]. [[Bowel sounds hypoactive]]. [[Lungs clear in all fields]].",
      spans: [
        { text: "Oriented to person, place and time", why: "Full orientation needs no follow-up." },
        { text: "Hands tremble when he reaches for his cup", why: "Tremor is an early sign of alcohol withdrawal." },
        { text: "Incision edges together with no drainage", why: "An intact, dry incision is expected." },
        { text: "Says he sees insects on the wall", why: "Visual hallucinations are a sign of withdrawal and need prompt follow-up." },
        { text: "Pain 3 of 10 at the incision", why: "Mild incision pain is expected on day 1." },
        { text: "Gown damp with sweat", why: "Sweating reflects autonomic overactivity in withdrawal." },
        { text: "Bowel sounds hypoactive", why: "Slow bowel activity is expected the day after bowel surgery." },
        { text: "Lungs clear in all fields", why: "Clear lungs are expected and need no follow-up." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PSY",
        topic: "Withdrawal versus expected postoperative findings",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse considers what explains the change in the client overnight. For each finding, specify whether it is consistent with alcohol withdrawal or expected after bowel surgery.",
        rationale:
          "Tremor, hallucinations and a steady rise in heart rate and BP from 2200 to 0600 reflect the rebound of the nervous system when alcohol stops. His last drink was about 24 hours ago and the signs began after midnight, which fits the usual onset of withdrawal. Mild incision pain, hypoactive bowel sounds and a dry incision are expected on day 1.",
        refs: ["Alcohol withdrawal signs usually begin 6 to 24 hours after the last drink."],
        sources: [SRC.asam, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Consistent with alcohol withdrawal", "Expected after bowel surgery"],
      rows: [
        { text: "Incision pain 3 of 10", correct: [1], why: "Mild pain is expected the day after surgery." },
        { text: "Hand tremor", correct: [0], why: "Tremor reflects nervous system overactivity after alcohol stops." },
        { text: "Seeing insects on the wall", correct: [0], why: "Visual hallucinations occur in alcohol withdrawal." },
        { text: "BP rise from 138/84 to 168/98 mmHg", correct: [0], why: "A steady BP rise reflects autonomic overactivity." },
        { text: "Hypoactive bowel sounds", correct: [1], why: "Slow bowel activity is expected after bowel surgery." },
        { text: "Heart rate rise from 92 to 122/minute", correct: [0], why: "A rising heart rate reflects autonomic overactivity." },
        { text: "Dry incision with edges together", correct: [1], why: "A clean, closed incision is expected." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Risk of withdrawal seizure",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "The nurse reviews the history and the 0500 laboratory results. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Withdrawal seizure risk peaks around 24 hours after the last drink, and his last drink was about 24 hours ago. A past withdrawal seizure raises the risk of another. A magnesium of 1.4 mg/dL (0.58 mmol/L) is below the 1.7 mg/dL (0.70 mmol/L) limit and lowers the seizure threshold. The dry incision argues against dehiscence. The AST reflects liver injury, not seizure risk.",
        refs: ["Withdrawal seizures usually occur 8 to 48 hours after the last drink, with risk peaking around 24 hours.", "Serum magnesium below 1.7 mg/dL (0.70 mmol/L) is low."],
        sources: [SRC.asam, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report magnesium only in mmol/L, so this result reads 0.58 mmol/L. Canadian lower limits are about 0.70 to 0.74 mmol/L, so the value is still low.",
      }),
      kind: "cloze",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      scoring: "triad",
      blanks: [
        {
          options: [
            { text: "wound dehiscence", why: "The incision edges are together with no drainage." },
            { text: "opioid toxicity", why: "Respirations are 24/minute and he is agitated, not sedated." },
            { text: "a withdrawal seizure", why: "Timing, a past seizure and low magnesium all raise this risk." },
            { text: "paralytic ileus", why: "Hypoactive bowel sounds on day 1 are expected and do not signal ileus." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "incision pain of 3", why: "Mild pain is expected and does not raise seizure risk." },
            { text: "a past withdrawal seizure", why: "A prior withdrawal seizure predicts another." },
            { text: "an SpO2 of 95%", why: "An SpO2 of 95% is acceptable and not a seizure risk." },
            { text: "hypoactive bowel sounds", why: "Bowel activity has no link to seizure risk." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a potassium of 3.6 mEq/L (3.6 mmol/L)", why: "This potassium is within the reference range." },
            { text: "a glucose of 102 mg/dL (5.7 mmol/L)", why: "A mildly raised glucose after surgery does not raise seizure risk." },
            { text: "an AST of 142 units/L", why: "A raised AST reflects liver injury, not seizure risk." },
            { text: "a magnesium of 1.4 mg/dL (0.58 mmol/L)", why: "Low magnesium lowers the seizure threshold." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safety measures during alcohol withdrawal",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse plans care to keep the client safe during withdrawal. Which measures should the nurse include in the plan? Select all that apply.",
        rationale:
          "A low bed limits injury from a fall or seizure. Suction and oxygen at the bedside are ready for a seizure. Scheduled CIWA-Ar scoring guides symptom-triggered medication. Dim light and low noise reduce stimulation. Restraints raise agitation and injury risk. A fully dark room makes shadows that feed hallucinations. Nothing is placed in the mouth during a seizure.",
        sources: [SRC.asam, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Apply wrist restraints to protect the incision", why: "Restraints raise agitation and the risk of injury." },
        { text: "Keep the bed in the lowest position", why: "A low bed limits injury from a fall or a seizure." },
        { text: "Turn off all lights in the room at night", why: "A dark room creates shadows that can feed hallucinations." },
        { text: "Keep suction and oxygen ready at the bedside", why: "Suction and oxygen support the airway if a seizure occurs." },
        { text: "Place a padded tongue blade at the bedside", why: "Objects placed in the mouth during a seizure can cause injury." },
        { text: "Score withdrawal with the CIWA-Ar on schedule", why: "Regular scoring guides symptom-triggered treatment." },
        { text: "Dim the lights and limit noise in the room", why: "Low stimulation reduces agitation." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Symptom-triggered lorazepam dose",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "At 0630 the client's CIWA-Ar score is 18. Lorazepam injection is supplied as 2 mg/mL. Based on the protocol, how many mL of lorazepam should the nurse give?",
        tabs: [
          {
            title: "Orders",
            text: [
              "Lorazepam IV per CIWA-Ar protocol every hour as needed.",
              "Score 10 to 15: give lorazepam 1 mg IV.",
              "Score 16 to 20: give lorazepam 2 mg IV.",
              "Score above 20: give lorazepam 2 mg IV and notify the primary health care provider.",
              "Thiamine 100 mg IV daily.",
              "Magnesium sulfate 2 g IV over 1 hour.",
            ].join("\n"),
          },
        ],
        rationale:
          "A score of 18 falls in the 16 to 20 band, so the dose is 2 mg. Dividing 2 mg by 2 mg/mL gives 1 mL. The label calls for dilution with an equal volume of compatible solution before IV use. The nurse injects no faster than 2 mg/minute and watches for sedation and slow breathing.",
        refs: ["IV lorazepam is diluted with an equal volume of compatible solution and injected no faster than 2 mg/minute."],
        calc: { expr: "2 / 2", answer: 1, unit: "mL", round: 0, steps: ["2 / 2 = 1"] },
        sources: [SRC.lorazepam, SRC.asam, { body: "Health Canada, Drug Product Database", work: "Lorazepam Injection USP, DIN 02243278, product information", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=67176" }],
        canada: "Lorazepam injection marketed in Canada comes as 4 mg/mL, so calculate the volume from the vial in hand. In Canada, lorazepam is a targeted substance under Schedule IV of the Controlled Drugs and Substances Act.",
      }),
      kind: "mc",
      options: [
        { text: "0.5 mL", why: "This gives 1 mg, the dose for a score of 10 to 15." },
        { text: "1 mL", why: "2 mg divided by 2 mg/mL gives 1 mL." },
        { text: "1.5 mL", why: "This exceeds every dose listed in the protocol." },
        { text: "2 mL", why: "This is twice the prescribed dose." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Follow-up plan after alcohol withdrawal",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "On day 5 the client's CIWA-Ar scores have been below 8 for 48 hours. The nurse evaluates his understanding of the plan for care after discharge. Which two statements show understanding? Select two.",
        rationale:
          "A booked addiction clinic visit links him to ongoing treatment after withdrawal. A family support group helps his wife and supports recovery at home. Cutting down to weekend drinking is not the plan. Thiamine is continued as prescribed. Waiting to relapse before seeking help misses the chance to prevent it. Leftover lorazepam is not part of the plan.",
        sources: [SRC.asam],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will only need help if I start drinking again.\"", why: "Ongoing support starts now to prevent relapse." },
        { text: "\"I have an addiction clinic visit on Monday.\"", why: "A booked referral links him to treatment after discharge." },
        { text: "\"I can cut down to a few beers on weekends.\"", why: "Returning to drinking is not part of the plan." },
        { text: "\"I will stop the thiamine when I feel stronger.\"", why: "Thiamine is taken as prescribed, not stopped on symptoms." },
        { text: "\"My wife will join a family support group.\"", why: "Family support improves recovery at home." },
        { text: "\"I will take leftover lorazepam if I get shaky.\"", why: "Self-treating with lorazepam is unsafe and is not in the plan." },
      ],
      correct: [1, 4],
    },
  ],
};
