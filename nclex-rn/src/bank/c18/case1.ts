import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c18-1";

/** Case 1. Community health center. Man with type 2 diabetes and new hypertension treatment. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Check-Up at the Community Health Center",
  intro:
    "A 58-year-old man comes to a community health center for a diabetes and blood pressure check. He drives a city bus. He has had type 2 diabetes for 6 years. His blood pressure has been high for 1 year, and he has managed it with diet and walking.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Type 2 diabetes for 6 years. High blood pressure for 1 year, managed with diet and walking.",
        "Medications: metformin 1000 mg by mouth twice daily. No known drug allergies.",
        "Nonsmoker. Weight 104 kg. BMI 33.2.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0910", "0915"],
        rows: [
          ["BP (mmHg), seated", "154/96", "150/94"],
          ["Heart rate (/minute)", "78", "76"],
          ["Respirations (/minute)", "16", "16"],
          ["Temperature", "36.8°C (98.2°F)", "not repeated"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      text: [
        "Drawn 1 week ago.",
        "A1C 8.4%.",
        "Fasting glucose 172 mg/dL (9.5 mmol/L).",
        "Creatinine 1.0 mg/dL (88 micromol/L). eGFR 84 mL/min/1.73 m2.",
        "Potassium 4.4 mEq/L (4.4 mmol/L).",
        "Urine albumin-to-creatinine ratio 86 mg/g. Result 4 months ago: 52 mg/g.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Foot findings in long-standing diabetes",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse examines the client's feet and records the note below. Click to highlight the findings that need follow-up.",
        rationale:
          "Burning and tingling at night and a missed monofilament at 4 of 10 sites show loss of protective sensation. A callus with a dark red center has bleeding inside it and can break down into an ulcer. Walking barefoot on numb feet invites injuries he will not feel. Strong pulses, well-cut nails, intact skin and fitted shoes protect the feet.",
        sources: [SRC.adaFoot, SRC.iwgdf],
      }),
      kind: "highlight",
      passage:
        "[[Reports burning and tingling in both feet at night]]. [[Monofilament not felt at 4 of 10 sites on the left foot]]. [[Dorsalis pedis pulses 2+ on both feet]]. [[Thick callus with a dark red center under the ball of the left big toe]]. [[Toenails short and cut straight across]]. [[Skin between the toes dry and intact]]. [[Walks barefoot around his home]]. [[Wears closed work shoes that fit well]].",
      spans: [
        { text: "Reports burning and tingling in both feet at night", why: "Burning and tingling that worsen at night are typical of diabetic peripheral neuropathy." },
        { text: "Monofilament not felt at 4 of 10 sites on the left foot", why: "Missed monofilament sites show loss of protective sensation, a major ulcer risk." },
        { text: "Dorsalis pedis pulses 2+ on both feet", why: "Normal pulses show adequate arterial flow and need no follow-up." },
        { text: "Thick callus with a dark red center under the ball of the left big toe", why: "Bleeding inside a callus over a pressure point is a sign that an ulcer is forming." },
        { text: "Toenails short and cut straight across", why: "Straight-cut short nails lower the risk of ingrown nails and need no follow-up." },
        { text: "Skin between the toes dry and intact", why: "Dry, intact skin between the toes shows no maceration or fungal break in the skin." },
        { text: "Walks barefoot around his home", why: "Barefoot walking on numb feet exposes them to cuts and burns he may not feel." },
        { text: "Wears closed work shoes that fit well", why: "Closed shoes that fit well protect the feet and need no follow-up." },
      ],
      correct: [0, 1, 3, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Sorting kidney and nerve complications of diabetes",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the laboratory results and the foot examination. For each finding, specify whether it suggests kidney involvement, nerve involvement or neither.",
        rationale:
          "A urine albumin-to-creatinine ratio of 86 mg/g, after 52 mg/g 4 months ago, confirms raised albuminuria on two tests. That is early diabetic kidney disease even with an eGFR of 84. Night burning in the feet and missed monofilament sites show peripheral neuropathy. The potassium and the pedal pulses are normal.",
        refs: [
          "A urine albumin-to-creatinine ratio of 30 mg/g or more is raised albuminuria. Two of three tests over 3 to 6 months confirm it.",
          "An eGFR below 60 mL/min/1.73 m2 shows reduced kidney filtration.",
          "Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L).",
        ],
        sources: [SRC.adaCkd, SRC.adaFoot, { body: "McFarlane P, Cherney D, Gilbert RE, Senior P. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Chapter 29: Chronic Kidney Disease in Diabetes. Diabetes Canada Clinical Practice Guidelines", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-29" }],
        canada:
          "Canadian labs report the urine albumin-to-creatinine ratio in mg/mmol. Diabetes Canada defines abnormal albuminuria as 2.0 mg/mmol or more on 2 of 3 samples over 3 months, and 86 mg/g is about 9.7 mg/mmol.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Kidney involvement", "Nerve involvement", "Neither"],
      rows: [
        { text: "Urine albumin-to-creatinine ratio 86 mg/g", correct: [0], why: "A ratio of 30 mg/g or more on two tests 4 months apart shows albumin leaking through damaged glomeruli." },
        { text: "Burning and tingling in both feet at night", correct: [1], why: "Symmetric burning and tingling in the feet is a symptom of peripheral neuropathy." },
        { text: "eGFR 84 mL/min/1.73 m2", correct: [2], why: "An eGFR of 84 is above 60, so filtration is preserved. The albumin result shows the kidney damage." },
        { text: "Monofilament not felt at 4 sites", correct: [1], why: "Missed monofilament sites show loss of protective sensation from neuropathy." },
        { text: "Potassium 4.4 mEq/L (4.4 mmol/L)", correct: [2], why: "A potassium of 4.4 mEq/L is within the normal range of 3.5 to 5.0 mEq/L." },
        { text: "Dorsalis pedis pulses 2+", correct: [2], why: "Normal pulses show good arterial flow and point to neither complication." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "RRP",
        topic: "Ranking the foot risk in diabetes",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse considers the foot findings, the laboratory results and the blood pressure readings together. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Loss of protective sensation plus a callus with bleeding inside it is the pattern that comes before a diabetic foot ulcer. He also walks barefoot at home. Metformin alone rarely lowers glucose too far, and his fasting glucose is high. His potassium is normal. His eGFR of 84 does not put him at risk from metformin.",
        refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)."],
        sources: [SRC.adaFoot, SRC.adaCkd],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The client is at highest risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "hypoglycemia", why: "Metformin alone seldom causes low glucose, and his fasting glucose is 172 mg/dL (9.5 mmol/L)." },
            { text: "lactic acidosis", why: "His kidney filtration is preserved, so metformin-related lactic acidosis is unlikely." },
            { text: "a foot ulcer", why: "Numb feet, a bleeding callus and barefoot walking together set up a diabetic foot ulcer." },
            { text: "hyperkalemia", why: "His potassium of 4.4 mEq/L is within the normal range." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a fasting glucose of 172 mg/dL", why: "High glucose slows healing but does not show that the foot is breaking down now." },
            { text: "a bleeding callus on a numb foot", why: "Pressure he cannot feel has caused bleeding under the callus, the step before an ulcer." },
            { text: "a potassium of 4.4 mEq/L", why: "This potassium is normal and does not point to any of the listed problems." },
            { text: "dorsalis pedis pulses of 2+", why: "Normal pulses show good blood flow. They lower, not raise, concern about the foot." },
            { text: "an eGFR of 84", why: "An eGFR of 84 shows preserved filtration and does not point to a listed problem." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Teaching for a new ACE inhibitor",
        cjmm: "generate",
        process: "teaching",
        difficulty: 3,
        stem: "The primary health care provider prescribes lisinopril 10 mg by mouth once daily. Which instructions should the nurse plan to include in the client's teaching? Select all that apply.",
        rationale:
          "Lisinopril can cause angioedema, so swelling of the lips, tongue or face is reported at once. It raises potassium, so potassium salt substitutes are avoided. Light-headedness is common in the first days, so he rises slowly. Potassium and creatinine are checked after starting. The dose is daily, not only on high readings. Metformin continues. NSAIDs blunt the effect and strain the kidneys.",
        sources: [SRC.zestril, SRC.adaCv],
      }),
      kind: "sata",
      options: [
        { text: "Report any swelling of the lips, tongue or face", why: "Swelling of the face, lips or tongue can be angioedema, which can block the airway." },
        { text: "Take the dose only on days the BP reads high", why: "Lisinopril is taken daily to keep BP controlled. Skipping doses lets the BP rise." },
        { text: "Avoid salt substitutes that contain potassium", why: "Lisinopril lowers aldosterone and raises potassium. Potassium salt substitutes add to that risk." },
        { text: "Stop the metformin while starting lisinopril", why: "The two drugs are used together. Stopping metformin would raise his glucose further." },
        { text: "Change position slowly when getting up", why: "Light-headedness can occur, most often in the first days of treatment." },
        { text: "Return for potassium and creatinine tests", why: "Blood tests after starting check for a rise in potassium or creatinine." },
        { text: "Use ibuprofen for back pain after driving", why: "NSAIDs weaken the BP effect and, with an ACE inhibitor, can reduce kidney function." },
      ],
      correct: [0, 2, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "BCC",
        topic: "Care of a callus in diabetic neuropathy",
        cjmm: "action",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse teaches the client about the callus under the ball of his left big toe. Which instruction should the nurse give?",
        rationale:
          "A callus with bleeding inside it on a numb foot needs safe removal of the thick skin by a foot care specialist. Paring lowers the pressure that is forming an ulcer. He cannot feel a cut from a blade or a chemical burn from an acid plaster. Hot soaks can burn numb skin and soften it so it breaks down.",
        sources: [SRC.adaFoot, SRC.iwgdf],
      }),
      kind: "mc",
      options: [
        { text: "Soak both feet in hot water for 20 minutes each night", why: "He cannot sense heat well, so hot soaks risk burns. Soaking also softens skin so it breaks down." },
        { text: "Trim the callus with a razor blade", why: "Self-cutting on a numb foot can cause a wound he does not feel." },
        { text: "Have a foot care specialist pare the callus", why: "Trained paring removes the pressure point safely and allows a check for an ulcer beneath." },
        { text: "Apply an acid corn plaster to the callus", why: "Chemical corn removers can burn numb skin and start an ulcer." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Judging progress on diabetes and BP goals",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "The client returns 3 months later. At the first visit, the team set goals of BP below 130/80 mmHg, A1C below 7%, weight loss of 5 kg, daily foot checks and no barefoot walking. For each finding, specify whether the goal is met or not met.",
        rationale:
          "A BP of 128/78 mmHg meets the goal below 130/80 mmHg. The A1C of 7.6% has fallen from 8.4% but is still above 7%. At 101 kg he has lost weight, but less than the 5 kg goal. Nightly mirror checks and house shoes meet the foot care goals.",
        sources: [SRC.adaCv, SRC.adaGlyc, SRC.adaFoot],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Goal met", "Goal not met"],
      rows: [
        { text: "Clinic BP 128/78 mmHg", correct: [0], why: "Both numbers are below the goal of 130/80 mmHg." },
        { text: "A1C 7.6%", correct: [1], why: "The A1C improved from 8.4% but remains above the goal of below 7%." },
        { text: "Weight 101 kg", correct: [1], why: "He weighs less than the 104 kg at the first visit but has not lost 5 kg." },
        { text: "Checks his feet each night with a mirror", correct: [0], why: "Nightly checks with a mirror meet the daily foot check goal." },
        { text: "Wears house shoes whenever he is home", correct: [0], why: "Wearing house shoes at home meets the goal of no barefoot walking." },
      ],
    },
  ],
};
