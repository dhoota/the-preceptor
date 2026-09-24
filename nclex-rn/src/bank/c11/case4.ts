import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c11-4";

/** Case 4. Inpatient mental health unit. Young woman with elevated mood after stopping her medicine. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Sleepless Nights and Constant Motion",
  intro:
    "A 29-year-old woman with bipolar I disorder is admitted to the inpatient mental health unit at 2200. Her sister says she has slept about 2 hours a night for 5 nights. She stopped taking lithium 3 weeks ago because she felt well.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Bipolar I disorder diagnosed at age 23. Two earlier admissions for mania.",
        "Lithium carbonate stopped 3 weeks ago. No other medications.",
        "Usual weight 58 kg. Weight on admission 54 kg.",
        "Has spent most of her savings on online purchases this week.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2210"],
        rows: [
          ["Temperature", "37.4°C (99.3°F)"],
          ["Heart rate", "112/minute"],
          ["Respiratory rate", "20/minute"],
          ["BP", "136/84 mmHg"],
          ["SpO2", "98% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Sodium", "133 mEq/L (133 mmol/L)", "135 to 145 mEq/L"],
          ["Blood urea nitrogen", "26 mg/dL (9.3 mmol/L)", "7 to 20 mg/dL"],
          ["Creatinine", "0.8 mg/dL (71 micromol/L)", "0.6 to 1.1 mg/dL"],
          ["Thyroid-stimulating hormone", "2.1 mU/L", "0.4 to 4.0 mU/L"],
          ["Urine specific gravity", "1.034", "1.005 to 1.030"],
          ["Serum hCG", "Negative", "Negative"],
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
        topic: "Physical threats during acute mania",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 2230 the nurse watches the woman on the unit and completes a physical check. Click to highlight the findings that pose a threat to her physical health.",
        rationale:
          "Dry, cracked lips and only sips of water today point to dehydration. Pacing for hours without rest adds to exhaustion and fluid loss. Open, reddened blisters on both heels are wounds that can become infected. Rapid speech, bright clothing, loud singing and joking are features of mania. They need a calm response but are not a direct physical threat.",
        sources: [SRC.halter],
      }),
      kind: "highlight",
      passage:
        "[[Talks rapidly and jumps between topics]]. [[Lips dry and cracked]]. [[Wears three scarves and bright makeup]]. [[Has taken only sips of water today]]. [[Sings loudly in the hallway]]. [[Paces the hall for hours without sitting]]. [[Jokes about the nurse's name badge]]. [[Open, reddened blisters on both heels]].",
      spans: [
        { text: "Talks rapidly and jumps between topics", why: "Pressured speech and flight of ideas are features of mania, not a physical threat." },
        { text: "Lips dry and cracked", why: "Dry, cracked lips point to fluid loss." },
        { text: "Wears three scarves and bright makeup", why: "Flamboyant dress reflects mood and is not a physical threat." },
        { text: "Has taken only sips of water today", why: "Minimal intake with constant activity leads to dehydration." },
        { text: "Sings loudly in the hallway", why: "Loud singing is a feature of mania and not a physical threat." },
        { text: "Paces the hall for hours without sitting", why: "Constant activity without rest leads to exhaustion and fluid loss." },
        { text: "Jokes about the nurse's name badge", why: "Humor and familiarity are features of elevated mood." },
        { text: "Open, reddened blisters on both heels", why: "Open wounds from constant walking can become infected." },
      ],
      correct: [1, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Laboratory review before restarting lithium",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The primary health care provider plans to restart lithium carbonate. The nurse reviews the admission laboratory results. For each result, specify whether it supports a safe restart or needs follow-up.",
        rationale:
          "Lithium is cleared by the kidneys and affects the thyroid, and it can harm a fetus. A creatinine of 0.8 mg/dL (71 micromol/L), a TSH of 2.1 mU/L and a negative hCG support a safe restart. A sodium of 133 mEq/L (133 mmol/L), a BUN of 26 mg/dL (9.3 mmol/L) and a urine specific gravity of 1.034 show low sodium and dehydration. Both raise the risk of lithium toxicity and need correction.",
        sources: [SRC.lithium, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report SI units only and report urea rather than BUN. Sodium reads 133 mmol/L against the Medical Council of Canada range of 136 to 146 mmol/L. Urea reads 9.3 mmol/L against 2.1 to 8.0 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Supports a safe restart", "Needs follow-up"],
      rows: [
        { text: "Sodium 133 mEq/L (133 mmol/L)", correct: [1], why: "Low sodium makes the kidneys hold lithium and raises toxicity risk." },
        { text: "Creatinine 0.8 mg/dL (71 micromol/L)", correct: [0], why: "Normal creatinine shows the kidneys can clear lithium." },
        { text: "Urine specific gravity 1.034", correct: [1], why: "Concentrated urine above the reference range shows dehydration." },
        { text: "TSH 2.1 mU/L", correct: [0], why: "A normal TSH gives a baseline because lithium can cause hypothyroidism." },
        { text: "BUN 26 mg/dL (9.3 mmol/L)", correct: [1], why: "A raised BUN with normal creatinine points to dehydration." },
        { text: "Serum hCG negative", correct: [0], why: "A negative pregnancy test is needed because lithium can harm a fetus." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "BCC",
        topic: "Food and fluid needs in acute mania",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse reviews the woman's intake, activity and results together. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "She has taken only sips of water while pacing for hours. Her urine specific gravity of 1.034 and BUN of 26 mg/dL (9.3 mmol/L) confirm dehydration from low intake. This is the most pressing physical need. She is not taking lithium, so toxicity is not present now. A TSH of 2.1 mU/L is normal. A creatinine of 0.8 mg/dL (71 micromol/L) shows no kidney injury.",
        sources: [SRC.halter, SRC.lithium, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report urea rather than BUN, so her result reads urea 9.3 mmol/L. This is above the Medical Council of Canada range of 2.1 to 8.0 mmol/L.",
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The woman is at highest risk for {0} because {1}.",
      blanks: [
        {
          options: [
            { text: "lithium toxicity", why: "She stopped lithium 3 weeks ago, so toxicity is not present now." },
            { text: "hypothyroidism", why: "Her TSH is 2.1 mU/L, within the reference range." },
            { text: "fluid volume deficit", why: "Sips of water with constant pacing and concentrated urine show dehydration." },
            { text: "acute kidney injury", why: "Her creatinine is 0.8 mg/dL (71 micromol/L), within the reference range." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "her urine is concentrated and her BUN is high", why: "Both results reflect low body water from poor intake." },
            { text: "she stopped taking lithium 3 weeks ago", why: "Stopping lithium explains the relapse, not a fluid problem." },
            { text: "her TSH is 2.1 mU/L", why: "A TSH of 2.1 mU/L is normal and shows no thyroid problem." },
            { text: "her creatinine is 0.8 mg/dL (71 micromol/L)", why: "A normal creatinine shows the kidneys are working." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Meeting food, fluid and rest needs in mania",
        cjmm: "generate",
        difficulty: 2,
        stem: "The nurse plans how to meet the woman's needs for food, fluid and rest over the next 24 hours. Which measures should the nurse include? Select all that apply.",
        rationale:
          "She cannot sit for a meal, so high-calorie finger foods let her eat while she moves. Offering water each hour builds intake without a large demand. A quiet, dim room at bedtime cuts stimulation and helps her rest. A busy dining table and an evening team game add stimulation. Cola adds caffeine, which worsens sleep. Forcing her to sit through meals invites conflict.",
        sources: [SRC.halter],
      }),
      kind: "sata",
      options: [
        { text: "Seat her at a busy table for meals", why: "Noise and people add stimulation and make eating harder." },
        { text: "Offer high-calorie finger foods", why: "Food she can carry lets her eat while pacing." },
        { text: "Offer cola to raise her fluid intake", why: "Caffeine worsens sleep and adds to overactivity." },
        { text: "Plan an evening volleyball game", why: "Competitive activity at night raises stimulation before sleep." },
        { text: "Offer a cup of water each hour", why: "Small, frequent drinks build intake without a large demand." },
        { text: "Require her to sit until meals end", why: "She cannot sit for long, and the demand invites conflict." },
        { text: "Keep her room quiet and dim at night", why: "Low stimulation at night supports rest." },
      ],
      correct: [1, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Rules for seclusion of an adult",
        cjmm: "action",
        difficulty: 4,
        stem: "On day 2 the woman throws a chair and strikes a staff member. Verbal de-escalation fails. At 1015 she is placed in seclusion under a prescription from the primary health care provider. Which two actions should the nurse take? Select two.",
        rationale:
          "Seclusion for violent behavior needs a face-to-face evaluation within 1 hour, so by 1115. An order for an adult lasts up to 4 hours, so renewal is due by 1415 if seclusion is still needed. Standing or as-needed orders for seclusion are not allowed. Seclusion ends as soon as she is safe. It is never a punishment and is not tied to a drug level. She is monitored throughout.",
        refs: ["Seclusion for violent behavior needs a face-to-face evaluation within 1 hour. An order for an adult lasts up to 4 hours."],
        sources: [SRC.restraint, { body: "Government of Ontario", work: "Mental Health Act, R.S.O. 1990, c. M.7, s. 53 Documentation of use of restraint", year: 2015, url: "https://www.ontario.ca/laws/statute/90m07" }],
        canada: "The 1 hour evaluation and 4 hour order limits come from US CMS rules. In Canada, seclusion and restraint rules come from provincial mental health laws and hospital policy, and they vary by province.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Obtain an as-needed seclusion order for later", why: "Standing or as-needed seclusion orders are not permitted." },
        { text: "Ensure a face-to-face evaluation by 1115", why: "A face-to-face evaluation is due within 1 hour of starting seclusion." },
        { text: "Keep her secluded until lithium is therapeutic", why: "Seclusion ends as soon as she is no longer a danger." },
        { text: "Leave her unobserved to lower stimulation", why: "A secluded client must be monitored for safety." },
        { text: "Obtain a renewed order by 1415 if still needed", why: "An adult seclusion order lasts up to 4 hours." },
        { text: "Tell her she stays secluded until she apologizes", why: "Seclusion is never used as punishment." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "PPT",
        topic: "Lithium teaching before discharge",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "On day 12 the woman sleeps 7 hours a night and eats full meals. Her lithium level is within the target range. The nurse teaches her about lithium. Which statement by the woman shows the teaching was effective?",
        rationale:
          "Lithium levels depend on steady sodium and fluid. Keeping salt and fluid intake the same each day keeps the level steady. Cutting salt makes the kidneys hold lithium and raises the level. Ibuprofen and other NSAIDs raise lithium levels. Stopping lithium when she feels well is how this relapse began.",
        sources: [SRC.lithium],
      }),
      kind: "mc",
      options: [
        { text: "\"I will cut back on salt to protect my heart.\"", why: "Less sodium makes the kidneys hold lithium and raises the level." },
        { text: "\"I can take ibuprofen for my monthly cramps.\"", why: "NSAIDs such as ibuprofen raise lithium levels." },
        { text: "\"I will keep my salt and fluid intake steady.\"", why: "Steady sodium and fluid intake keeps the lithium level stable." },
        { text: "\"I can stop lithium once I have felt well a month.\"", why: "Stopping lithium when well led to this relapse." },
      ],
      correct: 2,
    },
  ],
};
