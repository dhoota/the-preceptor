import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c02-4";

/** Case 4. Pediatric emergency department. School-age girl with a breathing emergency after a cold. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A Girl Who Cannot Finish a Sentence",
  intro:
    "An 8-year-old girl is brought to the pediatric emergency department by her father at 2100. She has asthma and has had a cold for 3 days. Since this afternoon she has used her albuterol inhaler 6 times with little relief. The nurse starts albuterol by inhaler and spacer as the protocol directs.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 27 kg. Asthma diagnosed at age 5.",
        "Home medications: fluticasone inhaler twice daily and albuterol inhaler as needed, both with a spacer.",
        "No history of intubation or intensive care admission.",
      ].join("\n"),
    },
    {
      title: "Nurses' Notes",
      text: [
        "2105: Speaks 2 or 3 words at a time. Sits leaning forward with her hands on her knees.",
        "Retractions at the sternal notch and between the ribs. Expiratory wheezes in all lung fields. Alert.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2100"],
        rows: [
          ["Heart rate", "118/minute"],
          ["Respiratory rate", "34/minute"],
          ["SpO2 on room air", "91%"],
          ["Temperature", "37.6°C (99.7°F)"],
          ["Peak expiratory flow", "110 L/minute (personal best 260 L/minute)"],
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
        topic: "Risk factors for future asthma attacks",
        cjmm: "recognize",
        difficulty: 2,
        stem: "While the treatment runs, the nurse takes a history from the father. Click to highlight the findings that raise the child's risk of future asthma attacks.",
        rationale:
          "Skipping the inhaled steroid leaves airway inflammation untreated. Her father smokes near the home, and smoke exposure is a risk factor. A severe attack within the past year raises the risk of another. Needing albuterol on most days shows the asthma is not controlled. Sport, up-to-date immunizations, correct spacer use and a varied diet do not raise the risk.",
        sources: [SRC.gina, { body: "Health Canada", work: "Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
        canada: "Albuterol is sold in Canada as salbutamol, for example Ventolin HFA or generic salbutamol HFA inhalers. Canadian charts and prescriptions use the name salbutamol.",
      }),
      kind: "highlight",
      passage:
        "[[She often skips her fluticasone when she feels well]]. [[She plays soccer at school twice a week]]. [[Her father smokes on the back porch]]. [[Her immunizations are up to date]]. [[She had an emergency visit for a severe attack 8 months ago]]. [[She uses a spacer with each inhaler]]. [[She has needed albuterol on most days this month]]. [[She eats a varied diet with no food allergies]].",
      spans: [
        { text: "She often skips her fluticasone when she feels well", why: "Poor adherence to the inhaled steroid is a risk factor for attacks." },
        { text: "She plays soccer at school twice a week", why: "Regular activity is encouraged and is not a risk factor." },
        { text: "Her father smokes on the back porch", why: "Smoke on clothing and near the home still exposes her. Smoke exposure is a risk factor." },
        { text: "Her immunizations are up to date", why: "Current immunizations help prevent infections that trigger attacks." },
        { text: "She had an emergency visit for a severe attack 8 months ago", why: "A severe attack in the past year raises the risk of another." },
        { text: "She uses a spacer with each inhaler", why: "Spacer use improves drug delivery and is not a risk factor." },
        { text: "She has needed albuterol on most days this month", why: "Frequent reliever use shows uncontrolled asthma, a key risk factor." },
        { text: "She eats a varied diet with no food allergies", why: "A varied diet without food allergy is not a risk factor." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Grading the severity of an asthma attack",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse compares the findings at 2100 and 2105 with severity criteria for children aged 6 to 11 years. For each finding, specify whether it fits a mild to moderate attack or a severe attack.",
        rationale:
          "A respiratory rate of 34/minute, a peak flow of less than half of her best, speech of 2 or 3 words and retractions are severe features. A heart rate of 118/minute and an SpO2 of 91% fall in the mild to moderate bands. Severity is graded by the worst feature. This attack is severe and needs urgent treatment.",
        refs: [
          "In children aged 6 to 11 years, a severe attack shows talking in words, accessory muscle use or a respiratory rate over 30/minute.", "Other severe features are a pulse over 120/minute, SpO2 below 90% or peak flow of 50% of best or less.",
          "A mild to moderate attack shows a pulse of 100 to 120/minute and SpO2 of 90 to 95%.",
        ],
        sources: [SRC.gina],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Mild to moderate", "Severe"],
      rows: [
        { text: "Heart rate 118/minute", correct: [0], why: "A pulse of 118/minute is within the 100 to 120/minute band." },
        { text: "Respiratory rate 34/minute", correct: [1], why: "A rate over 30/minute is a severe feature." },
        { text: "SpO2 91% on room air", correct: [0], why: "An SpO2 of 91% is within the 90 to 95% band." },
        { text: "Peak flow 110 L/minute, best 260 L/minute", correct: [1], why: "This is less than half of her best, which is a severe feature." },
        { text: "Speaks 2 or 3 words at a time", correct: [1], why: "Talking in words, not phrases, is a severe feature." },
        { text: "Retractions at the sternal notch and ribs", correct: [1], why: "Accessory muscle use is a severe feature." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Impending respiratory failure in a child",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "By 2200 she has had three albuterol treatments and ipratropium. She is now drowsy. Her wheezes are fainter. Her SpO2 is 87% on oxygen by face mask. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Drowsiness with an SpO2 of 87% on oxygen shows failing gas exchange and fatigue. Fainter wheezes here mean less air is moving, not that the airways have opened. Drowsiness is a life-threatening feature that calls for intensive care. The low-grade temperature fits her cold. Frequent albuterol use explains why she came in, not the present danger.",
        refs: ["Oxygen is titrated to keep SpO2 at 94 to 98% in children aged 6 to 12 years."],
        sources: [SRC.gina, SRC.wong, { body: "Health Canada", work: "Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
        canada: "Canadian nurses know albuterol as salbutamol, the name on Canadian inhalers, nebules and prescriptions.",
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The child is at highest risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "improving airflow", why: "Fainter wheezes with drowsiness show less air movement, not improvement." },
            { text: "bacterial pneumonia", why: "A temperature of 37.6°C with a cold does not point to pneumonia." },
            { text: "respiratory failure", why: "Drowsiness and low SpO2 on oxygen show the child is tiring and failing." },
            { text: "anxious hyperventilation", why: "Anxiety makes a child alert and restless. She is drowsy." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a temperature of 37.6°C (99.7°F)", why: "A low-grade temperature fits her cold. It does not show failing gas exchange." },
            { text: "albuterol use 6 times today", why: "This shows poor control before arrival, not the present risk." },
            { text: "3 days of cold symptoms", why: "The cold triggered the attack. It does not show the present risk." },
            { text: "drowsiness with an SpO2 of 87%", why: "Drowsiness and an SpO2 below 94% on oxygen show failing gas exchange." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Handoff to the rapid response team",
        cjmm: "generate",
        process: "communication",
        difficulty: 3,
        stem: "The nurse calls the pediatric rapid response team and plans the report. Which information should the nurse include? Select all that apply.",
        rationale:
          "A useful report states the current problem, the treatment so far and the facts the team needs to act. Drowsiness with faint wheezes and an SpO2 of 87% on a mask describe the danger. The treatments given since arrival guide the next step. Her weight of 27 kg is needed for drug doses. Her sport, immunizations and her father's smoking do not guide rescue care.",
        sources: [SRC.sbar, SRC.gina, { body: "Health Canada", work: "Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
        canada: "In a Canadian handoff, the nurse reports the reliever by its Canadian name, salbutamol. It is the same drug as albuterol.",
      }),
      kind: "sata",
      options: [
        { text: "Drowsy with faint wheezes at 2200", why: "This is the current change that calls for the team." },
        { text: "Plays soccer twice a week", why: "Her activity level does not guide rescue care." },
        { text: "SpO2 87% on a face mask", why: "Low SpO2 on oxygen shows how severe the problem is." },
        { text: "Immunizations up to date", why: "Immunization status does not guide rescue care now." },
        { text: "Weight 27 kg", why: "Weight is needed to calculate pediatric drug doses." },
        { text: "Father smokes on the back porch", why: "Smoke exposure matters for discharge teaching, not for rescue care." },
        { text: "Albuterol three times and ipratropium", why: "The treatment so far guides the team's next step." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based oral prednisolone",
        cjmm: "action",
        difficulty: 2,
        stem: "At 2300 the child is alert and can swallow liquids. The primary health care provider prescribes prednisolone 1 mg/kg by mouth once daily. The pharmacy supplies prednisolone oral solution 15 mg/5 mL. The child weighs 27 kg. How many mL should the nurse give?",
        rationale:
          "The dose is 1 mg/kg for a child of 27 kg, which is 27 mg. The solution holds 15 mg in 5 mL, so each mL holds 3 mg. Dividing 27 mg by 3 mg/mL gives 9 mL. A dose of 27 mg is below the pediatric maximum of 40 mg.",
        refs: ["The prednisolone dose for a child with an asthma attack is 1 to 2 mg/kg daily, up to 40 mg."],
        calc: { expr: "27 * 1 / (15 / 5)", answer: 9, unit: "mL", round: 0, steps: ["27 * 1 = 27", "15 / 5 = 3", "27 / 3 = 9"] },
        sources: [SRC.gina, { body: "Health Canada", work: "Drug Product Database, PMS-Prednisolone oral solution 5 mg/5 mL, DIN 02245532", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=69619" }],
        canada: "The prednisolone oral solution marketed in Canada is 5 mg/5 mL (PMS-Prednisolone), not 15 mg/5 mL. With that product the same 27 mg dose is 27 mL, so calculate from the bottle in hand.",
      }),
      kind: "mc",
      options: [
        { text: "1.8 mL", why: "This divides 27 by 15 and leaves out the 5 mL volume." },
        { text: "4.5 mL", why: "This is half the correct volume. It gives half the prescribed dose." },
        { text: "5.4 mL", why: "This divides 27 by 5 and leaves out the 15 mg strength." },
        { text: "9 mL", why: "27 mg divided by 3 mg/mL gives 9 mL." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Evaluating inhaler teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Before discharge the nurse watches the child use her inhalers with a spacer and talks with her father. For each observation, specify whether it shows effective teaching or needs further teaching.",
        rationale:
          "Shaking the inhaler and a slow breath in through the spacer deliver the dose well. Rinsing the mouth after the steroid lowers the risk of thrush. Follow-up within 1 to 2 days is advised for children after an attack. Two puffs sprayed at once into the spacer waste medicine. The steroid is taken every day, not only when she has symptoms. Albuterol is a reliever for use as needed.",
        refs: ["After an asthma attack, children are followed up within 1 to 2 days."],
        sources: [SRC.gina, SRC.wong, { body: "Health Canada", work: "Drug Product Database, Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
        canada: "Canadian inhalers and teaching materials call albuterol salbutamol, so the nurse teaches the family the name on their inhaler.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Effective teaching", "Needs further teaching"],
      rows: [
        { text: "She shakes the inhaler before each puff", correct: [0], why: "Shaking mixes the medicine so each puff holds the full dose." },
        { text: "She sprays 2 puffs into the spacer at once", correct: [1], why: "Puffs go in one at a time, each followed by a breath in." },
        { text: "She breathes in slowly through the spacer", correct: [0], why: "A slow breath carries the medicine deep into the airways." },
        { text: "She rinses her mouth after the fluticasone", correct: [0], why: "Rinsing and spitting lowers the risk of thrush from the steroid." },
        { text: "Father: \"She can stop the fluticasone when she feels better.\"", correct: [1], why: "The steroid controls inflammation and is taken daily even when she is well." },
        { text: "Father: \"She should use albuterol every 4 hours from now on.\"", correct: [1], why: "Albuterol is a reliever for use as needed, not on a schedule." },
        { text: "Father: \"We will see her clinic in 1 to 2 days.\"", correct: [0], why: "Early follow-up after an attack is advised for children." },
      ],
    },
  ],
};
