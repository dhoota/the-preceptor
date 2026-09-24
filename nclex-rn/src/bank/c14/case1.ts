import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c14-1";

const REF_EMERGENCY = "A hypertensive emergency is a BP above 180/120 mmHg with new target organ damage.";
const REF_FIRST_HOUR = "Without a compelling condition, SBP falls by no more than 25% in the first hour of treatment.";

/** Case 1. Emergency department, then intensive care. Middle-aged man off his BP medications. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Severe Headache in the Emergency Department",
  intro:
    "A 52-year-old man comes to the emergency department at 2140 with a severe headache and blurred vision that began 6 hours ago. He stopped his blood pressure medications 3 weeks ago after he lost his job and his health insurance.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Hypertension for 12 years.",
        "Home medications before he stopped them: amlodipine 10 mg by mouth daily and lisinopril 20 mg by mouth daily.",
        "Smokes 1 pack of cigarettes a day.",
        "No history of stroke, heart disease or kidney disease.",
        "Creatinine 1.0 mg/dL (88 micromol/L) at a clinic visit 6 months ago.",
        "Lives alone.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2145"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "96/minute, regular"],
          ["Respiratory rate", "20/minute"],
          ["BP, right arm", "228/136 mmHg"],
          ["BP, left arm", "224/132 mmHg"],
          ["SpO2", "97% on room air"],
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
        topic: "Neurological cues with severe hypertension",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 2150 the triage nurse completes a focused neurological and cardiopulmonary assessment. Click to highlight the findings in the note below that require immediate follow-up for this client.",
        rationale:
          "A BP of 228/136 mmHg with new symptoms points to a hypertensive emergency. A severe headache, blurred vision and vomiting are signs that the brain and eyes are under strain from the pressure. They need prompt follow-up. Orientation, clear speech, equal pupils and equal grasps show no focal deficit. Clear lungs and no chest pain show no sign of heart involvement yet.",
        refs: [REF_EMERGENCY],
        sources: [SRC.htn, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Alert and oriented to person, place and time]]. [[Speech clear]]. [[Headache 9 of 10 at the back of the head]]. [[Pupils equal and reactive to light]]. [[Reports blurred vision in both eyes]]. [[Hand grasps strong and equal]]. [[Vomited once in the waiting room]]. [[Lungs clear in all fields]]. [[Denies chest pain]].",
      spans: [
        { text: "Alert and oriented to person, place and time", why: "Full orientation shows no change in mental status at this time." },
        { text: "Speech clear", why: "Clear speech is a normal finding and needs no follow-up." },
        { text: "Headache 9 of 10 at the back of the head", why: "A severe headache with a BP of 228/136 mmHg can signal hypertensive encephalopathy." },
        { text: "Pupils equal and reactive to light", why: "Equal, reactive pupils are normal and need no follow-up." },
        { text: "Reports blurred vision in both eyes", why: "New blurred vision can signal retinal injury from severe hypertension." },
        { text: "Hand grasps strong and equal", why: "Strong, equal grasps show no focal weakness." },
        { text: "Vomited once in the waiting room", why: "Vomiting with a severe headache can signal rising pressure inside the skull." },
        { text: "Lungs clear in all fields", why: "Clear lungs show no sign of pulmonary edema." },
        { text: "Denies chest pain", why: "No chest pain lowers concern for acute cardiac injury at this time." },
      ],
      correct: [2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Target organ injury in severe hypertension",
        cjmm: "analyze",
        difficulty: 3,
        stem: "Laboratory results return at 2220. For each finding, specify whether it supports acute target organ injury or does not support it.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "2220", "Reference range"],
              rows: [
                ["Creatinine", "2.1 mg/dL (186 micromol/L)", "upper limit 1.3 mg/dL (115 micromol/L)"],
                ["Potassium", "4.3 mEq/L (4.3 mmol/L)", "3.5 to 5.0 mEq/L"],
                ["Troponin I", "less than 0.01 ng/mL", "less than 0.04 ng/mL"],
                ["Urine protein", "2+", "negative"],
                ["Urine red blood cells", "8 per high-power field", "0 to 2 per high-power field"],
              ],
            },
          },
        ],
        rationale:
          "A hypertensive emergency needs both a severe BP and new organ injury. Creatinine has risen from 1.0 to 2.1 mg/dL (186 micromol/L), and the urine holds protein and red cells. These findings show acute kidney injury. Blurred vision shows eye involvement. The troponin, potassium, oxygen saturation and lung sounds are normal. They do not show organ injury.",
        refs: [REF_EMERGENCY],
        sources: [SRC.htn, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report SI units only, so the creatinine reads 186 micromol/L and the potassium 4.3 mmol/L. The Medical Council of Canada reference list gives troponin I in ng/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports acute organ injury", "Does not support acute organ injury"],
      rows: [
        { text: "Creatinine 2.1 mg/dL (186 micromol/L)", correct: [0], why: "Creatinine has doubled from 1.0 mg/dL (88 micromol/L) 6 months ago, which signals acute kidney injury." },
        { text: "Troponin I less than 0.01 ng/mL", correct: [1], why: "A troponin below the reference limit shows no heart muscle injury at this time." },
        { text: "Urine protein 2+ with red blood cells", correct: [0], why: "Protein and red cells in the urine fit kidney injury from severe hypertension." },
        { text: "Potassium 4.3 mEq/L (4.3 mmol/L)", correct: [1], why: "A potassium of 4.3 mEq/L is within the reference range." },
        { text: "Blurred vision in both eyes", correct: [0], why: "Blurred vision can reflect retinal bleeding or swelling from severe hypertension." },
        { text: "SpO2 97% on room air with clear lungs", correct: [1], why: "Normal oxygen saturation and clear lungs show no pulmonary edema." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First concern in a hypertensive emergency",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 2230 the BP is 226/134 mmHg. The client says the headache is worse and asks for the lights to be dimmed. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A worsening headache and blurred vision with a BP of 226/134 mmHg point to hypertensive encephalopathy. Brain swelling or bleeding can follow, so the brain is the first concern. Kidney injury is present but threatens life less quickly. The troponin is normal, so a coronary syndrome is unlikely. A BP this high rules out hypovolemic shock.",
        sources: [SRC.htn, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address the client's risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "acute kidney failure", why: "Kidney injury is present, but it threatens life less quickly than brain injury." },
            { text: "hypertensive encephalopathy", why: "Worsening headache and vision changes with a BP of 226/134 mmHg fit brain injury from pressure." },
            { text: "acute coronary syndrome", why: "The troponin is below the reference limit and the client denies chest pain." },
            { text: "hypovolemic shock", why: "Shock lowers the BP. This client's BP is 226/134 mmHg." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a creatinine of 2.1 mg/dL (186 micromol/L)", why: "This shows kidney injury. It is not evidence of brain injury." },
            { text: "a heart rate of 96/minute", why: "A heart rate of 96/minute is within the normal range." },
            { text: "a worse headache with blurred vision", why: "These are the neurological signs of rising pressure on the brain." },
            { text: "a troponin below the limit", why: "A normal troponin points away from heart injury." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Planning IV treatment of a hypertensive emergency",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The client moves to the intensive care unit at 2300. A CT scan of the head shows no bleeding. Which actions should the nurse anticipate during the first hour of treatment? Select all that apply.",
        rationale:
          "A hypertensive emergency is treated with a titratable IV agent such as nicardipine in an intensive care unit. An arterial line gives continuous readings during titration. Neurological checks and hourly urine output track the brain and kidneys. SBP falls by no more than 25% in the first hour. A faster fall can cause brain and kidney ischemia. Oral and sublingual agents cannot be titrated safely.",
        refs: [REF_FIRST_HOUR],
        sources: [SRC.htn, SRC.nicardipine, { body: "Pham H. Canadian Society of Hospital Pharmacists", work: "Clinical Pearls: Hypertensive Crises", year: 2023, url: "https://www.cshp.ca/Site/Site/Content/News/news-items/cp-hc.aspx" }, { body: "Health Canada", work: "Drug Product Database, nicardipine and labetalol product listings", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/" }],
        canada: "IV nicardipine is not marketed in Canada, per the Health Canada Drug Product Database. Hospitals obtain it through the Special Access Program or titrate another IV agent, such as labetalol.",
      }),
      kind: "sata",
      options: [
        { text: "Start a titratable IV nicardipine infusion", why: "A titratable IV agent allows controlled, stepwise lowering of the BP." },
        { text: "Give his home amlodipine at double dose", why: "Oral amlodipine acts slowly and cannot be adjusted minute to minute." },
        { text: "Lower the BP to 120/80 mmHg within the hour", why: "A fall that fast can cause brain and kidney ischemia. SBP falls by no more than 25% in the first hour." },
        { text: "Monitor BP continuously with an arterial line", why: "Continuous arterial readings show each response to a dose change." },
        { text: "Perform neurological checks at set intervals", why: "Serial checks detect worsening encephalopathy or a new stroke." },
        { text: "Give immediate-release nifedipine under the tongue", why: "Immediate-release nifedipine can drop the BP suddenly and unpredictably." },
        { text: "Measure urine output every hour", why: "Hourly output tracks kidney perfusion as the BP falls." },
      ],
      correct: [0, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Nicardipine titration rate",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 3,
        stem: "Nicardipine 20 mg in 200 mL is infusing at 75 mL/hour. At 2345 the BP is 204/124 mmHg. The prescription is to increase the dose by 2.5 mg/hour every 15 minutes to reach the target, up to 15 mg/hour. At what rate should the nurse set the pump?",
        rationale:
          "The bag holds 20 mg in 200 mL, so each mL holds 0.1 mg. At 75 mL/hour the client receives 7.5 mg/hour. Adding 2.5 mg/hour gives 10 mg/hour. At 0.1 mg/mL, 10 mg/hour runs at 100 mL/hour. The new dose stays under the 15 mg/hour limit. A BP of 204/124 mmHg is a fall of less than 25% from 228/136 mmHg, so another step stays within the first-hour limit.",
        calc: {
          expr: "(75 * 20 / 200 + 2.5) / (20 / 200)",
          answer: 100,
          unit: "mL/hour",
          round: 0,
          steps: ["20 / 200 = 0.1", "75 * 0.1 = 7.5", "7.5 + 2.5 = 10", "10 / 0.1 = 100"],
        },
        refs: [REF_FIRST_HOUR],
        sources: [SRC.nicardipine, SRC.htn],
      }),
      kind: "mc",
      options: [
        { text: "25 mL/hour", why: "25 mL/hour delivers only 2.5 mg/hour. It sets the pump to the size of the step, not the new dose." },
        { text: "77.5 mL/hour", why: "This adds 2.5 to the mL rate instead of adding 2.5 mg/hour to the dose." },
        { text: "100 mL/hour", why: "The new dose is 10 mg/hour. At 0.1 mg/mL that runs at 100 mL/hour." },
        { text: "125 mL/hour", why: "This rate raises the dose by twice the prescribed step." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Evaluating discharge teaching after a hypertensive emergency",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "After 3 days the client's BP is 148/92 mmHg on oral medications. A social worker has enrolled him in a low-cost prescription program. The nurse evaluates his understanding before discharge. Which two statements show understanding? Select two.",
        rationale:
          "Home BP readings show the client and the clinic whether treatment is working. Calling the clinic about cost prevents another unplanned stop, which led to this admission. Normal readings mean the drugs are working, not that they can stop. Decongestants can raise BP. Extra doses for a headache are unsafe. Quitting smoking, not cutting down, is the goal.",
        sources: [SRC.htn, SRC.tobacco, { body: "Health Canada", work: "Canada's health care system", year: 2025, url: "https://www.canada.ca/en/health-canada/services/canada-health-care-system.html" }],
        canada: "In Canada, provincial and territorial plans cover medically necessary hospital and medical care. Outpatient prescription drugs are not fully covered, so drug coverage for adults varies by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will stop my pills once my readings are normal.\"", why: "Normal readings show the drugs are working. Stopping them lets the BP rise again." },
        { text: "\"I will check my BP at home and keep a log.\"", why: "Home readings guide dose changes and show whether treatment is working." },
        { text: "\"I will use a decongestant when I get a cold.\"", why: "Decongestants narrow blood vessels and can raise BP." },
        { text: "\"I will call the clinic if I cannot pay for refills.\"", why: "Asking for help with cost prevents another unplanned stop in treatment." },
        { text: "\"I will take an extra pill when I get a headache.\"", why: "Extra doses can drop the BP too far. A headache needs a BP check and a call." },
        { text: "\"I will cut down to half a pack of cigarettes.\"", why: "Cutting down is not quitting. Smoking harms the vessels at any amount." },
      ],
      correct: [1, 3],
    },
  ],
};
