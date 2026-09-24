import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c08-5";

/** Case 5. Hematology unit. Man in his forties on day 2 of induction chemotherapy. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Day 2 of Induction on the Hematology Unit",
  intro:
    "A 41-year-old man with newly diagnosed acute lymphoblastic leukemia is on the hematology unit. He started induction chemotherapy yesterday at 1000. His white blood cell count at diagnosis was 142 000/mm3. It is now 0700.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Acute lymphoblastic leukemia diagnosed 3 days ago. No known kidney disease.",
        "Weight 80 kg. No known allergies.",
        "Married with two children aged 10 and 12. Works as an electrician.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "0.9% sodium chloride IV at 200 mL/hour.",
        "Allopurinol 300 mg by mouth daily at 0900.",
        "Strict intake and output. Continuous cardiac monitoring.",
        "Electrolytes, uric acid, phosphorus, calcium and creatinine every 6 hours.",
        "Hazardous drug precautions for body fluids for 48 hours after each chemotherapy dose.",
      ].join("\n"),
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Admission", "Today 0600"],
        rows: [
          ["Potassium", "4.4 mEq/L (4.4 mmol/L)", "6.4 mEq/L (6.4 mmol/L)"],
          ["Uric acid", "7.2 mg/dL (428 micromol/L)", "11.8 mg/dL (702 micromol/L)"],
          ["Phosphorus", "3.8 mg/dL (1.23 mmol/L)", "6.9 mg/dL (2.23 mmol/L)"],
          ["Calcium", "9.2 mg/dL (2.30 mmol/L)", "6.8 mg/dL (1.70 mmol/L)"],
          ["Creatinine", "0.9 mg/dL (80 micromol/L)", "1.8 mg/dL (159 micromol/L)"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "MOC",
        topic: "Finding the gaps in a handoff report",
        cjmm: "recognize",
        process: "communication",
        difficulty: 3,
        stem: "At 0700 the night nurse gives a handoff report at the bedside. Click to highlight the findings in the report that require follow-up.",
        rationale:
          "Urine output of 150 mL in 6 hours is low for a client receiving 200 mL/hour of IV fluid. A potassium of 6.4 mEq/L can cause dangerous dysrhythmias. Tingling fingers can signal low calcium, and the calcium has fallen to 6.8 mg/dL (1.70 mmol/L). The 0600 results have not reached the provider, which is a handoff gap that delays treatment. Calm orientation, the IV rate and the allopurinol time need no follow-up.",
        refs: ["Hyperkalemia in tumor lysis is a potassium above 6.0 mEq/L (6.0 mmol/L)."],
        sources: [SRC.handoff, SRC.howard, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report potassium in mmol/L only. The number is the same as in mEq/L, so this result reads 6.4 mmol/L.",
      }),
      kind: "highlight",
      passage:
        "[[Urine output 150 mL in the last 6 hours]]. [[IV fluid running at 200 mL/hour as prescribed]]. [[Potassium 6.4 mEq/L on the 0600 labs]]. [[Said his fingers felt tingly at 0500]]. [[The 0600 labs are not yet reported to the provider]]. [[Oriented and calm through the night]]. [[Allopurinol is due at 0900]].",
      spans: [
        { text: "Urine output 150 mL in the last 6 hours", why: "This is low for his weight and his fluid intake and suggests kidney injury." },
        { text: "IV fluid running at 200 mL/hour as prescribed", why: "The fluid is running as prescribed. The concern is the low output." },
        { text: "Potassium 6.4 mEq/L on the 0600 labs", why: "A potassium above 6.0 mEq/L can cause fatal dysrhythmias." },
        { text: "Said his fingers felt tingly at 0500", why: "Tingling fingers can be a sign of low calcium." },
        { text: "The 0600 labs are not yet reported to the provider", why: "Critical results that have not been reported delay treatment." },
        { text: "Oriented and calm through the night", why: "Normal mental status needs no follow-up." },
        { text: "Allopurinol is due at 0900", why: "The next dose time is routine information." },
      ],
      correct: [0, 2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Urine output by weight",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the intake and output record. The client weighs 80 kg. His urine output was 150 mL over the last 6 hours. What was his average urine output in mL/kg/hour?",
        rationale:
          "150 mL over 6 hours is 25 mL/hour. 25 mL/hour divided by 80 kg is 0.31 mL/kg/hour. An average below 0.5 mL/kg/hour for 6 hours is oliguria. In tumor lysis the target is at least 2 mL/kg/hour. His output is far below target and points to acute kidney injury.",
        refs: [
          "Oliguria is an average urine output below 0.5 mL/kg/hour for 6 hours.",
          "In tumor lysis prevention the urine output target is at least 2 mL/kg/hour.",
        ],
        calc: { expr: "150 / 6 / 80", answer: 0.3125, unit: "mL/kg/hour", round: 2, steps: ["150 / 6 = 25", "25 / 80 = 0.31"] },
        sources: [SRC.howard],
      }),
      kind: "mc",
      options: [
        { text: "0.08 mL/kg/hour", why: "This spreads the 6-hour volume over a full day." },
        { text: "0.31 mL/kg/hour", why: "150 mL over 6 hours is 25 mL/hour, and 25 divided by 80 kg is 0.31." },
        { text: "1.88 mL/kg/hour", why: "This divides the volume by weight but leaves out the 6 hours." },
        { text: "25 mL/kg/hour", why: "This is the hourly volume in mL/hour. It is not adjusted for weight." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority risk in tumor lysis",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0730 the cardiac monitor shows tall, peaked T waves. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "A potassium of 6.4 mEq/L with peaked T waves shows the heart is already affected. Hyperkalemia is the most dangerous part of tumor lysis and can cause sudden death. It comes before the other risks. Fluid overload, stones and bleeding matter but are not the immediate threat. A calm manner and the IV rate do not point to a dysrhythmia.",
        refs: ["Hyperkalemia in tumor lysis is a potassium above 6.0 mEq/L (6.0 mmol/L)."],
        sources: [SRC.howard, SRC.coiffier, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report potassium in mmol/L only. The value keeps the same number, so 6.4 mmol/L is still above the 6.0 mmol/L tumor lysis threshold.",
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "fluid overload", why: "Low output with IV fluid can lead to overload, but his heart rhythm is the immediate threat." },
            { text: "a kidney stone", why: "Uric acid stones are a risk but do not threaten life in the next hour." },
            { text: "a bleeding episode", why: "No bleeding or platelet data are given in the chart." },
            { text: "a cardiac dysrhythmia", why: "High potassium with ECG changes can progress to a fatal rhythm." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "a potassium of 6.4 mEq/L", why: "A potassium above 6.0 mEq/L can cause dysrhythmias." },
            { text: "an allopurinol dose due", why: "A routine dose time does not show a threat." },
            { text: "his calm manner", why: "A calm manner does not show a cardiac risk." },
            { text: "an IV rate of 200 mL/hour", why: "The IV rate is prescribed and does not affect the heart rhythm." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "his weight of 80 kg", why: "His weight does not show a cardiac risk." },
            { text: "peaked T waves", why: "Peaked T waves show high potassium is affecting the heart." },
            { text: "his age of 41", why: "His age does not show a cardiac risk." },
            { text: "a diagnosis 3 days ago", why: "The timing of diagnosis does not show a cardiac risk." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Safe use of rasburicase",
        cjmm: "generate",
        difficulty: 4,
        stem: "The provider treats the hyperkalemia and prescribes rasburicase IV. Which actions should the nurse include in the plan? Select all that apply.",
        rationale:
          "Rasburicase can cause severe hemolysis in G6PD deficiency, so screening comes first. It keeps breaking down uric acid in a blood sample at room temperature, so samples go on ice. It carries a boxed warning for anaphylaxis. The potassium of 6.4 mEq/L needs continued cardiac monitoring. Added potassium and high-potassium foods worsen hyperkalemia. Urine alkalinization is avoided because it promotes calcium phosphate crystals.",
        sources: [SRC.elitek, SRC.howard, { body: "sanofi-aventis Canada Inc.", work: "Fasturtec (rasburicase for injection) product monograph", year: 2023, url: "https://www.sanofi.com/assets/countries/canada/docs/products/prescription-products/fasturtec-en.pdf" }],
        canada: "In Canada rasburicase is sold as Fasturtec. Its Canadian product monograph (2023) lists anaphylaxis and hemolysis in G6PD deficiency in a Serious Warnings and Precautions box, the Canadian form of a boxed warning.",
      }),
      kind: "sata",
      options: [
        { text: "Add potassium chloride to the IV fluid", why: "Added potassium would worsen a potassium of 6.4 mEq/L." },
        { text: "Confirm G6PD screening before the first dose", why: "Rasburicase can cause severe hemolysis in G6PD deficiency." },
        { text: "Alkalinize the urine with sodium bicarbonate", why: "Alkaline urine lowers calcium phosphate solubility and is avoided." },
        { text: "Send uric acid samples to the lab on ice", why: "At room temperature the drug keeps breaking down uric acid in the tube, giving a false low result." },
        { text: "Encourage bananas and orange juice", why: "These foods are high in potassium and would worsen hyperkalemia." },
        { text: "Watch for an allergic reaction during infusion", why: "Rasburicase carries a boxed warning for anaphylaxis." },
        { text: "Keep continuous cardiac monitoring running", why: "Potassium is still high, so the heart rhythm needs watching." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Handling body fluids after chemotherapy",
        cjmm: "action",
        difficulty: 2,
        stem: "The nurse empties the client's urinal at 1000, 24 hours after his first chemotherapy dose. Complete the sentence by dragging the correct protection into each blank.",
        rationale:
          "Urine can contain active drug for 48 hours after a dose, so the order for hazardous drug precautions applies. The nurse wears two pairs of chemotherapy-tested gloves and a disposable gown that resists permeation. A single pair of exam gloves or a cloth gown does not protect against these drugs. An N95 respirator protects against airborne particles, not liquid splashes.",
        sources: [SRC.hazard],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "When emptying the urinal, the nurse wears {0} on the hands and {1} over the uniform.",
      targets: ["Hand protection", "Body protection"],
      tokens: [
        { text: "one pair of standard exam gloves", why: "A single pair of standard exam gloves is not enough for hazardous drug waste." },
        { text: "two pairs of chemo-tested gloves", why: "Double chemotherapy-tested gloves protect against drug in body fluids." },
        { text: "a washable cotton isolation gown", why: "Cloth absorbs liquid and does not protect against hazardous drugs." },
        { text: "a disposable impermeable gown", why: "A disposable gown that resists permeation protects against splashes of drug waste." },
        { text: "a fitted N95 respirator mask", why: "An N95 filters airborne particles and is not the barrier needed here." },
      ],
      correct: [1, 3],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Coping with a new leukemia diagnosis",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "By day 5 his laboratory values are improving. The nurse evaluates how he is coping with the diagnosis. For each statement, specify whether it shows effective coping or needs follow-up.",
        rationale:
          "Planning a visit from his children, writing questions for the team and talking with the chaplain show active coping and use of support. A wish not to wake up is a possible sign of suicidal thinking and needs direct follow-up. Refusing to eat because there is no point suggests hopelessness. Keeping the diagnosis from his family cuts him off from support.",
        sources: [SRC.halter],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Effective coping", "Needs follow-up"],
      rows: [
        { text: "\"I asked my wife to bring the kids on Saturday.\"", correct: [0], why: "Seeking contact with his children shows use of family support." },
        { text: "\"There's no point. I've stopped eating.\"", correct: [1], why: "Hopelessness with refusal to eat needs assessment and support." },
        { text: "\"I'm writing down questions for the oncologist.\"", correct: [0], why: "Seeking information is an active, problem-focused way of coping." },
        { text: "\"I'd be better off not waking up.\"", correct: [1], why: "This may be suicidal thinking and needs a direct safety assessment." },
        { text: "\"I talked with the chaplain about my fears.\"", correct: [0], why: "Sharing fears with a spiritual care provider uses available support." },
        { text: "\"I'm not telling my family anything.\"", correct: [1], why: "Withholding the diagnosis cuts him off from his main support." },
      ],
    },
  ],
};
