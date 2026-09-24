import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c20-2";

/** Case 2. Surgical unit. Adult admitted the day before removal of a cortisol-producing adrenal mass. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Admission the Day Before Surgery",
  intro:
    "A 46-year-old woman is admitted to the surgical unit at 1400 the day before a planned laparoscopic left adrenalectomy. Imaging found a 3.5 cm left adrenal mass. Testing showed that the mass produces excess cortisol.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight gain of 14 kg over 18 months, mostly in the face and abdomen.",
        "Bruises easily. A skin tear on the left shin has not healed in 3 weeks.",
        "Hypertension for 1 year, treated with amlodipine 10 mg by mouth daily.",
        "Type 2 diabetes for 8 months, treated with metformin 500 mg by mouth twice daily.",
        "Rib fracture after a coughing spell 3 months ago.",
        "Weight 92 kg. Works as a teacher. Lives with her husband and 2 teenage children.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "88/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "158/96 mmHg"],
          ["SpO2", "97% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result at 1430", "Reference range"],
        rows: [
          ["Potassium", "3.1 mEq/L (3.1 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Sodium", "144 mEq/L (144 mmol/L)", "135 to 145 mEq/L"],
          ["Glucose", "212 mg/dL (11.8 mmol/L)", "70 to 99 mg/dL"],
          ["Creatinine", "0.8 mg/dL (71 micromol/L)", "0.5 to 1.1 mg/dL"],
          ["Hemoglobin", "13.1 g/dL (131 g/L)", "12.0 to 15.5 g/dL"],
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
        topic: "Physical signs of cortisol excess",
        cjmm: "recognize",
        difficulty: 2,
        stem: "During the admission skin and body check, the nurse records the note below. Click to highlight the findings that fit long-standing cortisol excess.",
        rationale:
          "Excess cortisol moves fat to the face, upper back and trunk. It breaks down protein in skin and muscle. The result is a round face, a fat pad between the shoulders, wide purple striae, easy bruising and thin limbs. Capillary refill, scalp hair, bowel sounds and pedal pulses are normal.",
        sources: [SRC.cushing, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Round, red face]]. [[Fat pad over the upper back between the shoulders]]. [[Wide purple stretch marks on the abdomen]]. [[Capillary refill under 2 seconds]]. [[Several bruises on both forearms]]. [[Scalp hair thick and evenly spread]]. [[Bowel sounds active in all four quadrants]]. [[Thin arms and legs]]. [[Pedal pulses 2+ and equal]].",
      spans: [
        { text: "Round, red face", why: "Fat laid down in the face gives the rounded, flushed look of cortisol excess." },
        { text: "Fat pad over the upper back between the shoulders", why: "Cortisol shifts fat to the upper back and trunk." },
        { text: "Wide purple stretch marks on the abdomen", why: "Cortisol breaks down collagen, so stretched skin tears into wide purple striae." },
        { text: "Capillary refill under 2 seconds", why: "Normal capillary refill does not point to cortisol excess." },
        { text: "Several bruises on both forearms", why: "Thin skin and fragile vessels bruise easily with cortisol excess." },
        { text: "Scalp hair thick and evenly spread", why: "Thick, evenly spread scalp hair is a normal finding." },
        { text: "Bowel sounds active in all four quadrants", why: "Active bowel sounds are expected and unrelated to cortisol." },
        { text: "Thin arms and legs", why: "Cortisol wastes limb muscle while fat collects on the trunk." },
        { text: "Pedal pulses 2+ and equal", why: "Equal 2+ pedal pulses are a normal finding." },
      ],
      correct: [0, 1, 2, 4, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Preoperative results in cortisol excess",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the history, vital signs and laboratory results before surgery. For each finding, specify whether it is abnormal and linked to cortisol excess or within the expected range.",
        rationale:
          "Excess cortisol wastes potassium, raises glucose and raises BP. It also thins bone, which explains a rib fracture from a cough. A potassium of 3.1 mEq/L is below the reference range. A glucose of 212 mg/dL (11.8 mmol/L) is above it. The creatinine, hemoglobin and temperature are normal.",
        sources: [SRC.cushing, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report SI units only, so her potassium reads 3.1 mmol/L, her glucose 11.8 mmol/L and her hemoglobin 131 g/L. The Medical Council of Canada ranges are 3.5 to 5.1 mmol/L for potassium and 115 to 155 g/L for female hemoglobin.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Abnormal and linked to cortisol excess", "Within the expected range"],
      rows: [
        { text: "Potassium 3.1 mEq/L (3.1 mmol/L)", correct: [0], why: "At high levels, cortisol acts on kidney mineralocorticoid receptors and wastes potassium." },
        { text: "Creatinine 0.8 mg/dL (71 micromol/L)", correct: [1], why: "This creatinine is within the reference range." },
        { text: "Glucose 212 mg/dL (11.8 mmol/L)", correct: [0], why: "Cortisol raises glucose production and insulin resistance." },
        { text: "BP 158/96 mmHg", correct: [0], why: "Cortisol raises vascular tone and sodium retention, which raises BP." },
        { text: "Hemoglobin 13.1 g/dL (131 g/L)", correct: [1], why: "This hemoglobin is within the reference range." },
        { text: "Rib fracture after a coughing spell", correct: [0], why: "Cortisol thins bone, so minor stress can cause a fracture." },
        { text: "Temperature 36.9°C (98.4°F)", correct: [1], why: "This temperature is within the normal range." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Infection risk with cortisol excess",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse considers which complication the client's cortisol excess makes more likely after surgery. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Cortisol excess suppresses immune defenses and slows wound healing. Her skin tear has not healed in 3 weeks, which shows this effect. The surgical wound is therefore at higher risk of infection. Fever and redness may be blunted, so the wound needs close inspection. Cortisol excess lowers potassium, raises glucose and retains sodium and water, which rules out the other options.",
        sources: [SRC.cushing, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "After surgery the client is at increased risk for {0} because cortisol excess {1}.",
      blanks: [
        {
          options: [
            { text: "hyperkalemic dysrhythmia", why: "Cortisol excess lowers potassium. Her potassium is 3.1 mEq/L." },
            { text: "surgical site infection", why: "Cortisol dampens immune defenses and slows healing, so wounds infect more easily." },
            { text: "fluid volume deficit", why: "Cortisol excess causes sodium and water retention, not fluid loss." },
            { text: "hypoglycemic episodes", why: "Cortisol raises glucose. Her glucose is 212 mg/dL (11.8 mmol/L)." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "raises the serum potassium", why: "Cortisol lowers serum potassium by acting on the kidney." },
            { text: "increases sodium loss in urine", why: "Cortisol causes the kidney to hold sodium, not lose it." },
            { text: "lowers the blood glucose", why: "Cortisol raises blood glucose through gluconeogenesis." },
            { text: "suppresses the immune response", why: "Cortisol suppresses white cell function and inflammation, which lets infection take hold." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Reporting a preoperative electrolyte problem",
        cjmm: "generate",
        process: "communication",
        difficulty: 3,
        stem: "At 1530 the nurse prepares to call the surgeon about the client's preoperative results. Complete the following sentence by dragging one choice into each blank.",
        rationale:
          "A potassium of 3.1 mEq/L is below the reference range. Low potassium raises the risk of dysrhythmia during anesthesia. The nurse reports it and asks about replacement so it can be corrected before surgery. The creatinine, heart rate and hemoglobin are normal.",
        sources: [SRC.brunner, SRC.cushing],
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "The nurse should report {0} to the surgeon and ask about {1} before surgery.",
      targets: ["Finding", "Request"],
      tokens: [
        { text: "a potassium of 3.1 mEq/L", why: "Low potassium raises the risk of dysrhythmia under anesthesia and needs a plan before surgery." },
        { text: "a creatinine of 0.8 mg/dL (71 micromol/L)", why: "This creatinine is within the reference range and needs no report." },
        { text: "a heart rate of 88/minute", why: "A heart rate of 88/minute is within the normal range." },
        { text: "potassium replacement", why: "Replacing potassium before surgery lowers the risk of dysrhythmia." },
        { text: "a blood transfusion", why: "Her hemoglobin of 13.1 g/dL (131 g/L) is normal, so a transfusion is not needed." },
        { text: "a chest x-ray", why: "Nothing in the chart points to a new lung problem that needs imaging." },
      ],
      correct: [0, 3],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Potassium chloride infusion rate",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The surgeon prescribes potassium chloride 40 mEq in 1000 mL of 0.9% sodium chloride IV over 8 hours through the peripheral line. At what rate should the nurse set the infusion pump?",
        rationale:
          "The bag holds 1000 mL to run over 8 hours, so the rate is 125 mL/hour. This delivers 5 mEq of potassium each hour. The concentration is 40 mEq/L, which is within the usual peripheral limit. The hourly dose is below the usual ward maximum of 10 mEq. IV potassium runs on a pump to control the hourly dose.",
        refs: [
          "The usual maximum potassium concentration for a peripheral IV line in adults is 40 mEq/L (40 mmol/L).",
          "The usual maximum potassium chloride rate on a general ward is 10 mEq (10 mmol) per hour.",
        ],
        calc: { expr: "1000 / 8", answer: 125, unit: "mL/hour", round: 0, steps: ["1000 / 8 = 125"] },
        sources: [SRC.potassium, SRC.ismp, { body: "Institute for Safe Medication Practices Canada", work: "Preventable Tragedies: Two Pediatric Deaths Due to Intravenous Administration of Concentrated Electrolytes. ISMP Canada Safety Bulletin 19(1)", year: 2019, url: "https://ismpcanada.ca/wp-content/uploads/ISMPCSB2019-i1-ConcentratedElectrolytes.pdf" }],
        canada: "ISMP Canada states potassium chloride doses in mmol, so this bag holds 40 mmol in 1000 mL. An Accreditation Canada Required Organizational Practice keeps concentrated potassium solutions off the care units.",
      }),
      kind: "mc",
      options: [
        { text: "5 mL/hour", why: "This is the potassium dose per hour, 40 mEq over 8 hours, entered as a volume." },
        { text: "40 mL/hour", why: "This rate mistakes the 40 mEq dose for a volume per hour." },
        { text: "62.5 mL/hour", why: "This rate runs the bag over twice the prescribed time." },
        { text: "125 mL/hour", why: "1000 mL over 8 hours is 125 mL/hour, which delivers 5 mEq of potassium each hour." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Adapting to a changed appearance",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "On day 3 after surgery the client's face is still round. She avoids mirrors and has asked her children not to visit. The nurse has encouraged her to talk about these changes. Which two statements show she is beginning to adapt? Select two.",
        rationale:
          "Adaptation shows when a client views a change realistically and resumes social roles. Inviting her children back and expecting gradual recovery both show this. Staying home, covering mirrors and refusing to talk show continued avoidance. Expecting the weight to vanish before discharge is unrealistic and sets up disappointment.",
        sources: [SRC.cushing, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will stay home until I look like my old self.\"", why: "Planning to stay home until her looks change shows ongoing withdrawal." },
        { text: "\"I asked my husband to bring the kids tomorrow.\"", why: "Inviting her children back shows she is resuming close contact." },
        { text: "\"The weight should be gone before I go home.\"", why: "Expecting the changes to reverse within days is unrealistic. Recovery takes months." },
        { text: "\"I covered the bathroom mirror again today.\"", why: "Covering the mirror shows she is still avoiding her body." },
        { text: "\"I know my face will slim down slowly over months.\"", why: "A realistic view of gradual recovery supports adaptation." },
        { text: "\"I do not want to talk about my body anymore.\"", why: "Refusing to discuss her body shows avoidance, not adaptation." },
      ],
      correct: [1, 4],
    },
  ],
};
