import type { Item } from "@/engine/types";
import { CDIFF, FQ, HINKLE, HYPONATREMIA, ISMP_HIGH, LEHNE, MOUD, RHD, STROKE, THYROID, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s16-11", {
      topic: "Intramuscular injection volume",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A 40-year-old client has pain after knee arthroscopy. The primary health care provider prescribes ketorolac 15 mg IM every 6 hours as needed. The vial contains ketorolac 30 mg/mL. How many mL should the nurse draw up?",
      rationale:
        "The dose is 15 mg and each mL holds 30 mg. Dividing 15 mg by 30 mg/mL gives 0.5 mL. Drawing up 1 mL would give the full vial strength of 30 mg, twice the prescribed dose.",
      calc: { expr: "15 / 30", answer: 0.5, unit: "mL", round: 1, steps: ["15 / 30 = 0.5"] },
      sources: [LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "0.5 mL", why: "15 mg divided by 30 mg/mL is 0.5 mL." },
      { text: "1 mL", why: "One mL holds 30 mg, which is twice the prescribed dose." },
      { text: "1.5 mL", why: "This holds three times the prescribed dose." },
      { text: "2 mL", why: "This divides 30 by 15, which inverts the ratio." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s16-12", {
      canada: "Heart and Stroke's Canadian Stroke Best Practice Recommendations allow tenecteplase 0.25 mg/kg, to a maximum of 25 mg, as a single bolus in place of alteplase within 4.5 hours.",
      topic: "Blood pressure before thrombolysis",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 66-year-old client arrives 90 minutes after sudden right-sided weakness and slurred speech began. CT shows no bleeding. The team plans IV alteplase. BP is 196/112 mmHg on two readings 5 minutes apart. Prescriptions include IV labetalol for BP above target. Which action should the nurse take first?",
      refs: ["Before IV thrombolysis for ischemic stroke, BP must be below 185/110 mmHg."],
      rationale:
        "A BP of 196/112 mmHg is above the 185/110 mmHg limit for starting thrombolysis. High pressure raises the risk of bleeding into the brain. The nurse gives the prescribed labetalol and rechecks the BP. Alteplase can start once the BP is below the limit. Aspirin does not replace thrombolysis.",
      sources: [STROKE, HINKLE, { body: "Heart and Stroke Foundation of Canada", work: "Canadian Stroke Best Practice Recommendations: Acute Stroke Management, 7th edition", year: 2022 }],
    }),
    kind: "mc",
    options: [
      { text: "Start the alteplase bolus without delay", why: "Starting above the BP limit raises the risk of bleeding into the brain." },
      { text: "Give the labetalol and recheck BP", why: "Lowering the BP below 185/110 mmHg lets thrombolysis start safely." },
      { text: "Give aspirin 325 mg by mouth", why: "Aspirin does not replace thrombolysis. A swallow screen also comes before any oral drug." },
      { text: "Cancel the alteplase for today", why: "The client can still receive alteplase once the BP is controlled within the time window." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-13", {
      topic: "Carbidopa-levodopa teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 67-year-old client with Parkinson disease starts carbidopa-levodopa by mouth three times daily. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Levodopa can lower BP on standing, so the client rises slowly. New jerky or writhing movements are dyskinesias and are reported. Harmless darkening of urine or sweat can occur. Protein competes with levodopa for absorption. Stopping suddenly can cause a severe reaction. Doses are not doubled.",
      sources: [LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Take it with a high-protein meal", why: "Dietary protein competes with levodopa for absorption and weakens its effect." },
      { text: "Rise slowly from lying or sitting", why: "Levodopa can cause orthostatic hypotension and falls." },
      { text: "Stop it at once if nausea occurs", why: "Stopping suddenly can cause a crisis like neuroleptic malignant syndrome. Nausea is reported." },
      { text: "Report new jerky movements", why: "Involuntary movements are dyskinesias. The dose may need adjusting." },
      { text: "Expect urine or sweat to darken", why: "Levodopa breakdown products can darken urine and sweat. The change is harmless." },
      { text: "Double the dose if stiffness returns", why: "Extra doses raise the risk of dyskinesia and hallucinations. Wearing off is reported." },
    ],
    correct: [1, 3, 4],
  },
  {
    ...meta("rn-s16-14", {
      canada: "Canadian labs report the WBC as x 10^9/L. The WBC of 2100/mm3 reads as 2.1 x 10^9/L, below the Medical Council of Canada range of 3.5 to 10.5 x 10^9/L.",
      topic: "Methotrexate toxicity",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse reviews the admission note for a 61-year-old client with rheumatoid arthritis who takes oral methotrexate. Click to highlight the findings that need follow-up.",
      rationale:
        "Oral methotrexate for arthritis is taken once weekly. Taking 7.5 mg every morning is a daily dosing error that causes toxicity. Painful mouth sores, a WBC of 2100/mm3 and a temperature of 38.3°C point to marrow suppression with possible infection. Folic acid is expected. Brief morning stiffness is part of the arthritis.",
      sources: [ISMP_HIGH, LEHNE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
    }),
    kind: "highlight",
    passage:
      "[[Takes methotrexate 7.5 mg every morning since last week]]. [[Takes folic acid 1 mg daily]]. [[Reports painful mouth sores]]. [[Joint stiffness for 20 minutes each morning]]. [[WBC 2100/mm3]]. [[Temperature 38.3°C (100.9°F)]]. [[Wears sunscreen outdoors]].",
    spans: [
      { text: "Takes methotrexate 7.5 mg every morning since last week", why: "Methotrexate for arthritis is weekly. Daily dosing is a known cause of fatal toxicity." },
      { text: "Takes folic acid 1 mg daily", why: "Folic acid is prescribed with methotrexate to reduce side effects." },
      { text: "Reports painful mouth sores", why: "Mouth sores are an early sign of methotrexate toxicity." },
      { text: "Joint stiffness for 20 minutes each morning", why: "Brief morning stiffness is part of rheumatoid arthritis." },
      { text: "WBC 2100/mm3", why: "A low WBC shows marrow suppression and infection risk." },
      { text: "Temperature 38.3°C (100.9°F)", why: "Fever with a low WBC can signal a serious infection." },
      { text: "Wears sunscreen outdoors", why: "Sun protection is advised because methotrexate can cause photosensitivity." },
    ],
    correct: [0, 2, 4, 5],
  },
  {
    ...meta("rn-s16-15", {
      topic: "Fluoroquinolone tendon injury",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 74-year-old client takes prednisone 10 mg daily for polymyalgia rheumatica. On day 4 of levofloxacin 750 mg by mouth daily for pneumonia, the client reports sudden pain and swelling at the back of the right heel. What should the nurse do?",
      refs: ["Fluoroquinolone tendon injury is more likely after age 60 and with corticosteroid use."],
      rationale:
        "Fluoroquinolones can cause tendinitis and tendon rupture. The risk is higher after age 60 and with corticosteroid use, and this client has both. Heel pain and swelling suggest Achilles tendon injury. The drug is held, the leg is rested and the provider is told so another antibiotic can be chosen.",
      sources: [FQ, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Apply heat and give the next dose", why: "More drug adds to the tendon injury. Heat does not address the cause." },
      { text: "Teach calf stretches before walking", why: "Stretching an injured tendon can lead to rupture." },
      { text: "Hold the drug and notify the provider", why: "Stopping the drug and resting the leg limits tendon injury." },
      { text: "Give ibuprofen and keep giving the drug", why: "Pain relief masks the injury while the drug keeps harming the tendon." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s16-16", {
      canada: "Canadian labs report the WBC as x 10^9/L. The WBC of 17 000/mm3 reads as 17 x 10^9/L, above the Medical Council of Canada range of 3.5 to 10.5 x 10^9/L.",
      topic: "Diarrhea during antibiotic therapy",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "A 70-year-old client is on day 6 of IV clindamycin for a foot infection. Today the client has had 5 watery stools and abdominal cramps. Temperature is 38.2°C (100.8°F). WBC is 17 000/mm3. Which condition should the nurse suspect?",
      rationale:
        "Clindamycin disrupts normal bowel flora and allows Clostridioides difficile to grow. Several watery stools with cramps, fever and a WBC of 17 000/mm3 fit this infection. Mild antibiotic diarrhea does not cause fever and a high WBC. The client needs stool testing and contact precautions.",
      sources: [CDIFF, LEHNE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
    }),
    kind: "mc",
    options: [
      { text: "Mild antibiotic-related loose stools", why: "Mild diarrhea does not explain fever and a WBC of 17 000/mm3." },
      { text: "Allergic reaction to clindamycin", why: "An allergy shows as rash, hives or swelling, not watery stools with fever." },
      { text: "Viral gastroenteritis from a visitor", why: "The stem gives no exposure. The antibiotic history points to a drug-related infection." },
      { text: "Clostridioides difficile infection", why: "Watery stools, cramps, fever and a high WBC during clindamycin fit this infection." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s16-17", {
      topic: "Antithyroid drug teaching",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 36-year-old client with Graves disease starts methimazole 10 mg by mouth daily. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "Methimazole can cause agranulocytosis, so a sore throat or fever is reported at once. It can also injure the liver, which shows as yellow skin or dark urine. Taking it at the same time each day keeps the effect steady. It is not stopped when symptoms ease. Blood tests guide the dose. Extra iodine can blunt the response.",
      sources: [THYROID, LEHNE],
    }),
    kind: "sata",
    options: [
      { text: "Stop it once the palpitations ease", why: "Symptoms ease before the disease is controlled. Stopping early lets thyrotoxicosis return." },
      { text: "Eat more iodized salt and seaweed", why: "Extra iodine can blunt the response to antithyroid drugs." },
      { text: "Report a sore throat or fever at once", why: "These can signal agranulocytosis, a rare but serious effect." },
      { text: "Skip blood tests once you feel well", why: "Thyroid levels guide the dose even when the client feels well." },
      { text: "Report yellow skin or dark urine", why: "These can signal liver injury from the drug." },
      { text: "Take it at the same time each day", why: "A steady routine keeps the drug effect even." },
    ],
    correct: [2, 4, 5],
  },
  {
    ...meta("rn-s16-18", {
      canada: "Canadian labs report sodium in mmol/L only. The Medical Council of Canada range is 136 to 146 mmol/L, and the safe rise is also counted in mmol/L.",
      topic: "Hypertonic saline correction rate",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A 72-year-old client with confusion and a serum sodium of 116 mEq/L (116 mmol/L) receives 3% sodium chloride IV. The nurse reviews the flow sheet for the first 12 hours. Based on the trend, which action should the nurse take?",
      tabs: [
        {
          title: "Flow Sheet",
          table: {
            head: ["Time", "0200", "0600", "1000", "1400"],
            rows: [
              ["Serum sodium, mEq/L (mmol/L)", "116", "120", "125", "129"],
              ["Urine output (mL per hour)", "40", "90", "220", "310"],
              ["Glasgow Coma Scale score", "13", "14", "15", "15"],
            ],
          },
        },
      ],
      refs: ["Serum sodium should rise by no more than 10 mEq/L (10 mmol/L) in the first 24 hours of treatment."],
      rationale:
        "Sodium rose from 116 to 129 mEq/L in 12 hours. That already exceeds the 24-hour limit of 10 mEq/L. Urine output rising to 310 mL per hour shows a water diuresis that will push sodium up faster. Overly fast correction can cause osmotic demyelination. The nurse stops the hypertonic saline and notifies the provider.",
      sources: [HYPONATREMIA, HINKLE, { body: "Medical Council of Canada", work: "List of normal lab values", year: 2020 }],
    }),
    kind: "mc",
    options: [
      { text: "Increase the rate to speed recovery", why: "Sodium is already rising too fast. A faster rate adds to the risk of demyelination." },
      { text: "Continue the infusion at the current rate", why: "The rise has passed the safe limit. Continuing would push sodium higher still." },
      { text: "Stop the infusion and notify the provider", why: "A rise past 10 mEq/L in 12 hours needs the infusion stopped and new orders." },
      { text: "Give a dose of IV furosemide", why: "Furosemide causes water loss and would raise sodium further." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s16-19", {
      topic: "Starting buprenorphine",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A 31-year-old client with opioid use disorder plans to start sublingual buprenorphine-naloxone today. The client last used fentanyl 6 hours ago. The Clinical Opioid Withdrawal Scale score is 4. Pupils are normal in size and the client is calm. What should the nurse do?",
      refs: ["Buprenorphine starts once objective signs of opioid withdrawal are present."],
      rationale:
        "Buprenorphine binds opioid receptors tightly but only partly activates them. Given while fentanyl still fills the receptors, it can precipitate sudden withdrawal. A score of 4, normal pupils and a calm client show little withdrawal 6 hours after fentanyl. The nurse waits and reassesses before the first dose.",
      sources: [MOUD, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Give the first sublingual dose now", why: "Dosing before withdrawal is clear can precipitate sudden, severe withdrawal." },
      { text: "Wait and reassess withdrawal signs", why: "Waiting until withdrawal is clearer lowers the risk of precipitated withdrawal." },
      { text: "Give naloxone to start withdrawal", why: "Naloxone would cause abrupt withdrawal and is not part of induction." },
      { text: "Give the full day's dose at once", why: "A large first dose worsens precipitated withdrawal. Induction starts with a small dose." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s16-20", {
      canada: "Canadian Blood Services distributes Rh immune globulin, such as WinRho, as a blood product. Its clinical guide gives 120 mcg or 300 mcg within 72 hours of the birth of an RhD-positive newborn.",
      topic: "Postpartum Rh prophylaxis",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 27-year-old client gave birth 6 hours ago. The client's blood type is O negative and the antibody screen is negative. The newborn's blood type is A positive. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "An Rh-negative client with a negative antibody screen is not yet sensitized. Delivery of an Rh-positive newborn can expose the client to fetal Rh-positive cells. Rho(D) immune globulin given within 72 hours of birth prevents antibody formation. The ABO difference does not call for it. Vitamin K is for the newborn.",
      sources: [RHD, { body: "Clarke G, Hannon J. Canadian Blood Services", work: "Hemolytic Disease of the Fetus and Newborn and Perinatal Immune Thrombocytopenia. In: Clinical Guide to Transfusion", year: 2018 }],
    }),
    kind: "cloze",
    scoring: "zero-one",
    template: "The nurse should anticipate giving {0} within {1} because the client {2}.",
    blanks: [
      {
        options: [
          { text: "Rho(D) immune globulin", why: "It prevents Rh sensitization after birth of an Rh-positive newborn." },
          { text: "hepatitis B immune globulin", why: "This is for newborns of mothers with hepatitis B. The stem gives no such history." },
          { text: "vitamin K injection", why: "Vitamin K is given to the newborn, not the client." },
          { text: "a tetanus toxoid dose", why: "Nothing in the stem calls for tetanus protection." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "72 hours of birth", why: "Giving it within 72 hours of birth prevents sensitization." },
          { text: "7 days of birth", why: "This is later than the recommended window." },
          { text: "2 weeks of birth", why: "This is past the 72-hour window. A dose this late is a catch-up for a missed dose." },
          { text: "6 weeks of birth", why: "This is far past the recommended window." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "is Rh negative and not yet sensitized", why: "A negative antibody screen shows the client has not formed anti-D antibodies." },
          { text: "has blood type O and a type A newborn", why: "An ABO difference does not call for Rho(D) immune globulin." },
          { text: "is Rh negative and already sensitized", why: "The antibody screen is negative, so the client is not sensitized." },
          { text: "has a newborn who is Rh negative", why: "The newborn is A positive, which is Rh positive." },
        ],
        correct: 0,
      },
    ],
  },
];
