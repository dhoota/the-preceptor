import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c07-2";

/** Case 2. Medical telemetry unit. Man on hemodialysis who missed two sessions. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Missed Treatments and Shortness of Breath",
  intro:
    "A 58-year-old man with end-stage kidney disease is admitted to the medical telemetry unit from the emergency department at 1500 on a Tuesday. He receives hemodialysis on Monday, Wednesday and Friday. He missed his Friday and Monday sessions.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "End-stage kidney disease from diabetic kidney disease. Hemodialysis for 3 years through a left forearm arteriovenous fistula.",
        "Type 2 diabetes. Hypertension.",
        "Makes about 100 mL of urine a day.",
        "Target weight after dialysis (dry weight) 78 kg.",
        "His wife died 5 months ago. He lives alone. A daughter lives in another city.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1500"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "58/minute"],
          ["Respiratory rate", "26/minute"],
          ["BP", "178/96 mmHg"],
          ["SpO2", "90% on room air"],
          ["Weight", "84.2 kg"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Potassium", "7.0 mEq/L (7.0 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Sodium", "132 mEq/L (132 mmol/L)", "135 to 145 mEq/L"],
          ["Bicarbonate", "16 mEq/L (16 mmol/L)", "22 to 29 mEq/L"],
          ["Blood urea nitrogen", "118 mg/dL (42.1 mmol/L)", "7 to 20 mg/dL"],
          ["Glucose", "188 mg/dL (10.4 mmol/L)", "70 to 99 mg/dL"],
          ["Hemoglobin", "9.4 g/dL (94 g/L)", "13.5 to 17.5 g/dL"],
        ],
      },
    },
    { title: "ECG", text: "Sinus bradycardia at 58/minute with tall, peaked T waves." },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Psychosocial cues behind missed dialysis",
        cjmm: "recognize",
        process: "communication",
        difficulty: 3,
        stem: "While the nurse attaches the telemetry leads, the client talks about the missed sessions. The nurse records what he says. Click to highlight the statements that require follow-up.",
        rationale:
          "Loss of interest since his wife died and sleeping about 3 hours a night are signs of depression. Saying others would be better off without him is a passive death wish. It needs direct questions about suicide. A lost ride is a practical barrier that led to missed treatment. Calls from his daughter, taking his pill and trust in staff are supports.",
        sources: [SRC.uspstf, SRC.tjc],
      }),
      kind: "highlight",
      passage:
        "[[My ride stopped coming and I did not call anyone]]. [[I have not felt like doing much since my wife died]]. [[My daughter calls me every Sunday]]. [[Some nights I think everyone would be better off without me]]. [[I still take my blood pressure pill every morning]]. [[I sleep about 3 hours a night now]]. [[The dialysis staff have always been kind to me]].",
      spans: [
        { text: "My ride stopped coming and I did not call anyone", why: "A transport barrier caused the missed sessions and needs a plan." },
        { text: "I have not felt like doing much since my wife died", why: "Loss of interest after a major loss can signal depression." },
        { text: "My daughter calls me every Sunday", why: "Regular contact with family is a support, not a concern." },
        { text: "Some nights I think everyone would be better off without me", why: "A passive death wish needs direct questions about suicidal thoughts." },
        { text: "I still take my blood pressure pill every morning", why: "Taking his medication shows he still manages some self-care." },
        { text: "I sleep about 3 hours a night now", why: "Marked sleep loss is a common sign of depression." },
        { text: "The dialysis staff have always been kind to me", why: "A trusting relationship with staff is a strength to build on." },
      ],
      correct: [0, 1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Sorting acute and chronic findings in kidney failure",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the admission data. For each finding, specify whether it needs immediate follow-up or is expected with his chronic kidney failure.",
        rationale:
          "A potassium of 7.0 mEq/L with peaked T waves can cause a lethal rhythm. An SpO2 of 90% with respirations of 26/minute and a weight of 84.2 kg against a dry weight of 78 kg show fluid overload from missed dialysis. A hemoglobin of 9.4 g/dL reflects the anemia of kidney failure. Little urine output is expected on long-term dialysis.",
        sources: [SRC.kdigoK, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report hemoglobin only in g/L, so this result reads 94 g/L. Potassium keeps the same number in mmol/L, and blood urea nitrogen is reported as urea, 42.1 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Needs immediate follow-up", "Expected with chronic kidney failure"],
      rows: [
        { text: "Potassium 7.0 mEq/L (7.0 mmol/L)", correct: [0], why: "Severe hyperkalemia can cause a lethal dysrhythmia." },
        { text: "Tall, peaked T waves on the ECG", correct: [0], why: "Peaked T waves show potassium is already affecting the heart." },
        { text: "Hemoglobin 9.4 g/dL (94 g/L)", correct: [1], why: "Failing kidneys make less erythropoietin, so chronic anemia is common." },
        { text: "SpO2 90% on room air", correct: [0], why: "Low oxygen saturation with fast breathing suggests fluid in the lungs." },
        { text: "Weight 84.2 kg, dry weight 78 kg", correct: [0], why: "Weight well above dry weight shows fluid retained since the last session." },
        { text: "About 100 mL of urine a day", correct: [1], why: "Many clients on long-term dialysis make little or no urine." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting the report priority in hyperkalemia",
        cjmm: "prioritize",
        process: "communication",
        difficulty: 3,
        stem: "The nurse prepares an SBAR call to the nephrology provider. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Potassium of 7.0 mEq/L with peaked T waves is the most immediate threat. It can progress to ventricular fibrillation or asystole without warning. The hemoglobin, glucose and sodium are abnormal but none threatens life in the next minutes. They are reported after the potassium.",
        sources: [SRC.kdigoK, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results only in SI units. Hemoglobin reads 94 g/L and glucose 10.4 mmol/L. Potassium and sodium keep the same numbers in mmol/L.",
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The nurse should report {0} first because it can cause {1}.",
      blanks: [
        {
          options: [
            { text: "the hemoglobin of 9.4 g/dL (94 g/L)", why: "Chronic anemia is expected in kidney failure and is not immediately dangerous." },
            { text: "the potassium with peaked T waves", why: "Hyperkalemia with ECG changes can stop the heart and needs urgent treatment." },
            { text: "the glucose of 188 mg/dL (10.4 mmol/L)", why: "Moderate hyperglycemia needs attention but is not immediately life threatening." },
            { text: "the sodium of 132 mEq/L (132 mmol/L)", why: "Mild dilutional hyponatremia is less urgent than the potassium." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a hyperglycemic crisis", why: "The potassium does not cause a hyperglycemic crisis." },
            { text: "worsening fatigue", why: "Fatigue is not the danger that makes this report urgent." },
            { text: "delayed wound healing", why: "Wound healing is not the concern with a high potassium." },
            { text: "a lethal dysrhythmia", why: "High potassium slows conduction and can cause fibrillation or asystole." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Delegation while awaiting urgent dialysis",
        cjmm: "generate",
        difficulty: 2,
        stem: "The nurse works with an assistive personnel (AP) while the client waits for urgent dialysis. Which two tasks can the nurse delegate to the AP? Select two.",
        rationale:
          "Weighing a client and recording oral intake are routine, stable tasks with clear steps. The AP reports the results and the nurse interprets them. Assessing lung sounds, checking the fistula, teaching and judging ECG changes need nursing judgment. They stay with the nurse.",
        sources: [SRC.delegation, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Assess lung sounds every hour", why: "Assessment needs nursing judgment and cannot be delegated to an AP." },
        { text: "Weigh the client on the bed scale", why: "Weighing is a routine task with a clear procedure and a reportable result." },
        { text: "Teach the client his fluid limit", why: "Teaching is a nursing responsibility that is not delegated." },
        { text: "Check the fistula for a thrill", why: "Access assessment needs nursing judgment about what the finding means." },
        { text: "Record the fluids the client drinks", why: "Measuring oral intake is a routine task the AP can report back." },
        { text: "Decide if the ECG changes are worse", why: "Interpreting the ECG requires nursing judgment." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Calcium gluconate volume for hyperkalemia",
        cjmm: "action",
        difficulty: 3,
        stem: "The ECG still shows peaked T waves. The primary health care provider prescribes calcium gluconate 2 g IV over 10 minutes. The vial contains calcium gluconate 10%, 100 mg/mL. How many mL should the nurse prepare?",
        rationale:
          "The dose is 2 g, which is 2000 mg. Each mL holds 100 mg. Dividing 2000 mg by 100 mg per mL gives 20 mL. Calcium protects the heart muscle from the effect of potassium. It does not lower the potassium level. Insulin with glucose and dialysis are still needed.",
        calc: { expr: "2 * 1000 / 100", answer: 20, unit: "mL", round: 0, steps: ["2 * 1000 = 2000", "2000 / 100 = 20"] },
        sources: [SRC.kdigoK],
      }),
      kind: "mc",
      options: [
        { text: "2 mL", why: "This treats 2 g as 2 mL and ignores the concentration." },
        { text: "10 mL", why: "10 mL holds 1000 mg, which is half the prescribed dose." },
        { text: "20 mL", why: "2000 mg divided by 100 mg per mL is 20 mL." },
        { text: "200 mL", why: "This is 10 times the correct volume from a decimal error." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Self-care between dialysis sessions",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "After two dialysis sessions the client is ready for discharge. A suicide risk assessment found no plan or intent, and his safety plan is documented. A social worker has arranged van transport and a grief counseling referral. The nurse evaluates his teaching. Which statements show understanding? Select all that apply.",
        rationale:
          "A daily weight shows fluid gain between sessions. Calling the unit when a ride falls through prevents another missed session. New swelling or breathlessness means fluid is building up. Attending the counseling the social worker arranged addresses his low mood. Bananas and oranges are high in potassium. Fluid limits apply on every day. Missing sessions let potassium and fluid build up.",
        sources: [SRC.brunner, SRC.kdigoK],
      }),
      kind: "sata",
      options: [
        { text: "\"I will weigh myself each morning.\"", why: "A daily weight shows fluid gained between treatments." },
        { text: "\"I can drink freely on dialysis days.\"", why: "Fluid limits apply every day, not only between sessions." },
        { text: "\"I will call the unit if my van is late.\"", why: "Early contact lets staff reschedule so no session is missed." },
        { text: "\"I will snack on bananas and oranges.\"", why: "These fruits are high in potassium and can raise the level again." },
        { text: "\"I will call if my legs swell or I am short of breath.\"", why: "Swelling and breathlessness are signs that fluid is building up." },
        { text: "\"Missing one session now and then is safe.\"", why: "Two missed sessions let his potassium rise to 7.0 mEq/L." },
        { text: "\"I will go to the grief counseling that was set up.\"", why: "Treating his low mood supports his ability to keep up with care." },
      ],
      correct: [0, 2, 4, 6],
    },
  ],
};
