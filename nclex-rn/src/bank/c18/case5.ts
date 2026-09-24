import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c18-5";

/** Case 5. Home health. Older woman with many medications after a fall. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Home Visit After a Kitchen Fall",
  intro:
    "An 82-year-old woman who lives alone receives a home health visit 5 days after a fall in her kitchen. She was not injured. Her daughter asked for the visit because her mother seems more confused at night. The nurse gathers all of her pill bottles.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Hypertension, type 2 diabetes, knee osteoarthritis, insomnia and reflux. Mild cognitive impairment.",
        "Uses a cane outdoors. Sees 3 prescribers and fills prescriptions at 2 pharmacies.",
      ].join("\n"),
    },
    {
      title: "Medication List",
      table: {
        head: ["Medication", "Dose", "Source"],
        rows: [
          ["Amlodipine", "5 mg daily", "Primary care"],
          ["Lisinopril", "20 mg daily", "Primary care"],
          ["Hydrochlorothiazide", "25 mg daily", "Primary care"],
          ["Glyburide", "5 mg twice daily", "Endocrinology"],
          ["Metformin", "500 mg twice daily", "Endocrinology"],
          ["Omeprazole", "20 mg daily for 3 years", "Primary care"],
          ["Lorazepam", "0.5 mg at bedtime", "Urgent care"],
          ["Diphenhydramine", "50 mg at bedtime", "Over the counter"],
          ["Ibuprofen", "400 mg three times daily", "Over the counter"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      text: [
        "Drawn 1 week ago.",
        "A1C 6.2%.",
        "Creatinine 1.3 mg/dL (115 micromol/L). eGFR 40 mL/min/1.73 m2.",
        "Sodium 132 mEq/L (132 mmol/L). Potassium 4.9 mEq/L (4.9 mmol/L).",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Home assessment findings after a fall",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1030 the home health nurse checks vital signs, glucose and a brief physical. Click to highlight the findings that need follow-up.",
        rationale:
          "A glucose of 62 mg/dL is low, and she has not eaten since last night while taking glyburide. Systolic BP falls from 148 to 118 mmHg on standing, more than the 20 mmHg that defines orthostatic hypotension. Dizziness on standing fits that drop. Clear lungs, a normal temperature, no ankle swelling and warm, dry skin are expected.",
        refs: [
          "Orthostatic hypotension is a fall of at least 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing.",
          "Hypoglycemia is a glucose below 70 mg/dL (3.9 mmol/L).",
        ],
        sources: [SRC.orthostatic, SRC.adaGlyc],
      }),
      kind: "highlight",
      passage:
        "[[Lungs clear in all fields]]. [[Has not eaten since supper last night]]. [[Temperature 36.7°C (98.1°F)]]. [[Fingerstick glucose 62 mg/dL (3.4 mmol/L)]]. BP lying 148/80 mmHg. [[BP standing at 3 minutes 118/66 mmHg]]. [[No swelling in either ankle]]. [[Reports dizziness when she stands]]. [[Skin warm and dry]].",
      spans: [
        { text: "Lungs clear in all fields", why: "Clear lungs are expected and need no follow-up." },
        { text: "Has not eaten since supper last night", why: "Skipping breakfast while taking glyburide sets up low glucose." },
        { text: "Temperature 36.7°C (98.1°F)", why: "A normal temperature does not suggest infection as a cause of confusion." },
        { text: "Fingerstick glucose 62 mg/dL (3.4 mmol/L)", why: "A glucose below 70 mg/dL is hypoglycemia and needs treatment." },
        { text: "BP standing at 3 minutes 118/66 mmHg", why: "A systolic fall from 148 mmHg meets the definition of orthostatic hypotension." },
        { text: "No swelling in either ankle", why: "No edema is a normal finding and needs no follow-up." },
        { text: "Reports dizziness when she stands", why: "Dizziness on standing matches the BP drop and raises fall risk." },
        { text: "Skin warm and dry", why: "Warm, dry skin is a normal finding here." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Matching medications to adverse effects in older adults",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse reviews the medication list against the findings. For each medication, specify the problem it is most likely contributing to.",
        rationale:
          "Glyburide is a long-acting sulfonylurea that causes prolonged low glucose in older adults. Diphenhydramine is strongly anticholinergic and causes confusion. Lorazepam adds sedation and confusion. Hydrochlorothiazide depletes volume and sodium, which lowers standing BP. Ibuprofen reduces kidney blood flow, a risk with an eGFR of 40, lisinopril and a diuretic.",
        sources: [SRC.beers, SRC.stopp],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Low blood glucose", "Night confusion and sedation", "BP drop on standing", "Kidney strain"],
      rows: [
        { text: "Glyburide 5 mg twice daily", correct: [0], why: "Glyburide acts for a long time and causes prolonged hypoglycemia in older adults." },
        { text: "Diphenhydramine 50 mg at bedtime", correct: [1], why: "Its strong anticholinergic effect causes confusion in older adults." },
        { text: "Lorazepam 0.5 mg at bedtime", correct: [1], why: "Benzodiazepines raise the risk of sedation, delirium and falls in older adults." },
        { text: "Hydrochlorothiazide 25 mg daily", correct: [2], why: "Volume loss from the diuretic lowers BP on standing." },
        { text: "Ibuprofen 400 mg three times daily", correct: [3], why: "NSAIDs reduce kidney blood flow, and her eGFR is already 40." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Fall risk in an older adult living alone",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse considers the client's safety while she lives alone. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "She fell 5 days ago. Dizziness from the drop in standing BP and a glucose of 62 mg/dL can each cause another fall. A lying BP of 148/80 mmHg is not a crisis. Clear lungs make aspiration unlikely. She walks, so a pressure injury is a lower concern. An A1C of 6.2% and her temperature point to no listed risk.",
        sources: [SRC.falls, SRC.orthostatic],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is at highest risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "a pressure injury", why: "She walks and moves on her own, so pressure injury risk is low." },
            { text: "a hypertensive crisis", why: "A lying BP of 148/80 mmHg is not in the crisis range." },
            { text: "aspiration", why: "Her lungs are clear and nothing suggests a swallowing problem." },
            { text: "another fall", why: "A recent fall, dizziness on standing and low glucose all raise fall risk." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "clear lung fields", why: "Clear lungs are normal and do not point to a listed risk." },
            { text: "dizziness on standing", why: "Dizziness from orthostatic hypotension can make her fall." },
            { text: "a lying BP of 148/80 mmHg", why: "The lying BP alone does not point to a fall. The standing drop does." },
            { text: "an A1C of 6.2%", why: "This A1C reflects average glucose over 3 months and is not a direct fall cue." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "no swelling in either ankle", why: "No edema is a normal finding." },
            { text: "a temperature of 36.7°C (98.1°F)", why: "A normal temperature points to no listed risk." },
            { text: "a glucose of 62 mg/dL (3.4 mmol/L)", why: "A glucose this low causes weakness and unsteadiness." },
            { text: "skin that is warm and dry", why: "Warm, dry skin is a normal finding." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Recommending deprescribing to the prescriber",
        cjmm: "generate",
        process: "communication",
        difficulty: 4,
        stem: "The nurse prepares to call the primary health care provider about the medication list. Which changes should the nurse recommend? Select four.",
        rationale:
          "Lorazepam and diphenhydramine cause confusion and falls in older adults. Lorazepam is tapered, not stopped at once. Glyburide causes prolonged hypoglycemia and can be replaced with a lower-risk agent. Acetaminophen avoids the kidney risk of ibuprofen. Metformin may continue at an eGFR of 40. Meclizine and zolpidem add fall risk. Omeprazole does not need a higher dose.",
        refs: ["Metformin is contraindicated when the eGFR is below 30 mL/min/1.73 m2."],
        sources: [
          SRC.beers,
          SRC.stopp,
          {
            body: "US Food and Drug Administration",
            work: "FDA Drug Safety Communication: FDA revises warnings regarding use of the diabetes medicine metformin in certain patients with reduced kidney function",
            year: 2016,
            url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-fda-revises-warnings-regarding-use-diabetes-medicine-metformin-certain",
          },
        ],
      }),
      kind: "msn",
      select: 4,
      options: [
        { text: "Taper and stop the lorazepam", why: "Benzodiazepines raise fall and confusion risk. A taper avoids withdrawal." },
        { text: "Add meclizine for the dizziness", why: "Meclizine is anticholinergic and adds to confusion and falls." },
        { text: "Replace glyburide with a lower-risk agent", why: "Glyburide causes prolonged hypoglycemia in older adults." },
        { text: "Stop the metformin because of the eGFR", why: "Metformin may continue at an eGFR of 40. It is stopped below 30." },
        { text: "Stop the nightly diphenhydramine", why: "Its anticholinergic effect causes confusion and falls in older adults." },
        { text: "Add zolpidem to help her sleep", why: "Zolpidem raises the risk of falls and confusion in older adults." },
        { text: "Use acetaminophen in place of ibuprofen", why: "Acetaminophen treats knee pain without the NSAID kidney risk." },
        { text: "Double the omeprazole dose", why: "Nothing suggests uncontrolled reflux, and long-term use carries its own risks." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PA",
        topic: "Treating low glucose in an alert client",
        cjmm: "action",
        difficulty: 2,
        stem: "At 1045 the client says she feels shaky and sweaty. A repeat fingerstick glucose is 58 mg/dL (3.2 mmol/L). She is alert and can swallow. Place the nurse's actions in order.",
        rationale:
          "An alert client who can swallow takes 15 to 20 g of glucose by mouth. Glucose is rechecked in 15 minutes and the dose repeated if it is still below 70 mg/dL. A meal or snack follows once glucose recovers. Glucagon is for a client who cannot swallow. Fat in peanut butter slows the rise in glucose.",
        refs: ["Treat a glucose below 70 mg/dL (3.9 mmol/L) with 15 to 20 g of glucose and recheck in 15 minutes."],
        sources: [SRC.adaGlyc, { body: "Yale JF, Paty B, Senior PA. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Chapter 14: Hypoglycemia. Diabetes Canada Clinical Practice Guidelines", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-14" }],
        canada:
          "Diabetes Canada treats a glucose below 4.0 mmol/L with 15 g of carbohydrate, preferably glucose, retests in 15 minutes and retreats if it is still below 4.0 mmol/L. Canadian labs report glucose in mmol/L only.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["First", "Second", "Third", "Fourth"],
      tokens: [
        { text: "Recheck glucose in 15 minutes", why: "A recheck in 15 minutes shows whether the first dose worked." },
        { text: "Give 15 g of glucose tablets", why: "Fast-acting glucose by mouth is the first treatment for an alert client." },
        { text: "Give a meal once glucose is above 70 mg/dL", why: "Food after recovery prevents glucose from falling again." },
        { text: "Repeat 15 g if glucose stays below 70 mg/dL", why: "A second dose is given if the recheck is still low." },
        { text: "Give 1 mg of glucagon IM", why: "Glucagon is for a client who cannot safely swallow. She can." },
        { text: "Give peanut butter crackers first", why: "Fat slows glucose absorption, so pure glucose comes first." },
      ],
      correct: [1, 0, 3, 2],
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Evaluating a home fall prevention plan",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "The nurse visits 2 weeks later. The primary health care provider stopped diphenhydramine and glyburide, began a lorazepam taper and changed ibuprofen to acetaminophen. For each finding, specify whether the fall prevention plan is working or needs more action.",
        rationale:
          "A standing BP of 132/76 mmHg after a lying BP of 138/78 mmHg is no longer orthostatic. No new falls and a lowest glucose of 104 mg/dL show the medication changes are helping. Rising slowly is a safe habit. Walking in the dark and a rug by the sink are home hazards that still need action.",
        refs: ["Orthostatic hypotension is a fall of at least 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing."],
        sources: [SRC.falls, SRC.orthostatic],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Plan working", "Needs more action"],
      rows: [
        { text: "BP lying 138/78 mmHg, standing at 3 minutes 132/76 mmHg", correct: [0], why: "The systolic fall is well under 20 mmHg, so she is no longer orthostatic." },
        { text: "No falls since the last visit", correct: [0], why: "No new falls in 2 weeks shows the plan is helping." },
        { text: "Lowest glucose in her log is 104 mg/dL (5.8 mmol/L)", correct: [0], why: "No low readings since glyburide stopped removes a fall trigger." },
        { text: "Walks to the bathroom at night without a light", correct: [1], why: "Walking in the dark is a trip hazard. A night light is needed." },
        { text: "Throw rug still in front of the kitchen sink", correct: [1], why: "Loose rugs are a trip hazard where she fell before." },
        { text: "Sits on the bed edge before standing up", correct: [0], why: "Pausing before standing lets BP adjust and lowers dizziness." },
      ],
    },
  ],
};
