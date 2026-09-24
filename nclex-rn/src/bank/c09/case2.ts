import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c09-2";

/** Case 2. Cardiac step-down unit. Falling platelets on heparin after bypass surgery. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Day 6 on the Cardiac Step-Down Unit",
  intro:
    "A 68-year-old man is on day 6 after coronary artery bypass graft surgery on the cardiac step-down unit. He has received heparin 5000 units subcutaneously every 8 hours since day 1. At 0700 the nurse reviews the morning laboratory results.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Coronary artery bypass graft surgery 6 days ago, with full heparin during bypass.",
        "Left leg vein harvested for the grafts.",
        "Type 2 diabetes. Hyperlipidemia.",
        "No heparin exposure before this admission.",
        "Weight 76 kg.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Heparin 5000 units subcutaneously every 8 hours.",
        "Heparin lock flush 10 units/mL, 3 mL into the peripheral IV lock every 8 hours.",
        "Aspirin 81 mg by mouth daily.",
        "Metoprolol tartrate 25 mg by mouth twice daily.",
        "Atorvastatin 80 mg by mouth daily.",
      ].join("\n"),
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Before surgery", "Day 1", "Day 3", "Day 6"],
        rows: [
          ["Platelets (/mm3)", "230 000", "142 000", "196 000", "88 000"],
          ["Hemoglobin, g/dL (g/L)", "13.9 (139)", "10.4 (104)", "10.6 (106)", "10.5 (105)"],
          ["Creatinine, mg/dL (micromol/L)", "1.0 (88)", "1.1 (97)", "1.0 (88)", "1.0 (88)"],
          ["ALT (units/L)", "24", "31", "28", "26"],
        ],
      },
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 6, 0700"],
        rows: [
          ["Temperature", "37.2°C (99.0°F)"],
          ["Heart rate", "82/minute, regular"],
          ["Respiratory rate", "16/minute"],
          ["BP", "128/74 mmHg"],
          ["SpO2", "96% on room air"],
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
        topic: "Findings on day 6 after bypass surgery",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 0730 the nurse assesses the client and reviews the chart. Which findings require follow-up? Select all that apply.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "0730. Sternal incision edges together with no drainage.",
              "Left leg vein-harvest incision dry.",
              "Right calf swollen and tender. Right calf 3 cm larger than the left.",
              "Red lesion with a black center at an abdominal heparin injection site.",
              "Lungs clear. Heart rhythm regular.",
            ].join("\n"),
          },
        ],
        rationale:
          "The platelet count of 88 000/mm3 is well under half of the 230 000/mm3 before surgery. It fell after recovering to 196 000/mm3 on day 3. A swollen, tender right calf suggests a new clot. A black-centered lesion at a heparin site suggests skin necrosis. Together these need prompt follow-up. The stable hemoglobin, clean incisions and temperature of 37.2°C are expected.",
        sources: [SRC.ash, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report platelets as x 10^9/L only. The count reads 88 x 10^9/L, down from 230 x 10^9/L before surgery. The Medical Council of Canada range is 130 to 380 x 10^9/L.",
      }),
      kind: "sata",
      options: [
        { text: "Platelet count 88 000/mm3", why: "The count has fallen by more than half from 230 000/mm3 before surgery." },
        { text: "Vein-harvest incision on the left leg dry", why: "A dry harvest incision is expected on day 6." },
        { text: "Sternal incision edges together, no drainage", why: "Closed edges with no drainage show normal healing." },
        { text: "Right calf 3 cm larger than the left", why: "One-sided calf swelling and tenderness suggest a deep vein clot." },
        { text: "Hemoglobin 10.5 g/dL (105 g/L)", why: "The hemoglobin has held steady since day 1 and fits surgical blood loss." },
        { text: "Dark lesion at a heparin injection site", why: "A black-centered lesion at an injection site can be skin necrosis from heparin." },
        { text: "Temperature 37.2°C (99.0°F)", why: "This temperature is within the normal range." },
      ],
      correct: [0, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Pattern of platelet fall after bypass",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse analyzes the platelet counts in the laboratory results. Complete the following sentence by choosing from the lists of options.",
        refs: ["In heparin-induced thrombocytopenia the platelet count typically falls by more than 50%, starting 5 to 10 days after heparin begins."],
        rationale:
          "Some fall on day 1 is expected from dilution during bypass, and the count recovered to 196 000/mm3 by day 3. The second fall to 88 000/mm3 on day 6 is more than half of the count before surgery. It was found on day 6 after heparin began, inside the usual 5 to 10 day window. This timing and size fit heparin-induced thrombocytopenia. The stable hemoglobin and normal temperature argue against bleeding or sepsis.",
        sources: [SRC.ash, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report platelets in SI units only, so the counts read 230, 142, 196 and 88 x 10^9/L. The fall from 196 to 88 x 10^9/L is still more than half.",
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The platelet pattern is most consistent with {0} because the count fell {1}.",
      blanks: [
        {
          options: [
            { text: "dilution from bypass fluids", why: "Dilution explains the day 1 fall. The count then recovered before falling again." },
            { text: "sepsis-related consumption", why: "The temperature is 37.2°C and the incisions are clean." },
            { text: "heparin-induced thrombocytopenia", why: "A fall of more than half, found 6 days after heparin began, fits this reaction." },
            { text: "disseminated intravascular coagulation", why: "No bleeding is described and the hemoglobin is stable." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "within 24 hours of surgery", why: "The early fall recovered by day 3. It reflects dilution, not the current problem." },
            { text: "by less than one third", why: "The count fell from 230 000/mm3 to 88 000/mm3, which is more than half." },
            { text: "by over half between days 3 and 6", why: "The count dropped from 196 000/mm3 to 88 000/mm3 in the heparin window." },
            { text: "gradually over several weeks", why: "The fall happened within days, not weeks." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Greatest risk in suspected heparin reaction",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse suspects heparin-induced thrombocytopenia and considers the client's risks. Which complication poses the greatest threat to the client now?",
        rationale:
          "Heparin-induced thrombocytopenia is caused by antibodies that activate platelets. The main danger is new venous or arterial clots, not bleeding. The swollen right calf already suggests a deep vein clot. The heparin-site lesion reflects clotting in small skin vessels. Bleeding is uncommon despite the low count. The sternal incision is clean, and the rhythm is regular.",
        sources: [SRC.ash, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Spontaneous bleeding", why: "Bleeding is uncommon in this reaction despite the low platelet count." },
        { text: "New arterial or venous clots", why: "Activated platelets drive clotting, and the calf findings suggest a clot has formed." },
        { text: "Sternal wound infection", why: "The sternal incision is closed with no drainage and the temperature is normal." },
        { text: "Postoperative atrial fibrillation", why: "The heart rhythm is regular at 82/minute." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Removing heparin exposure",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 4,
        stem: "The primary health care provider confirms a high suspicion of heparin-induced thrombocytopenia. For each measure, specify whether it is indicated or not indicated for the client now.",
        refs: ["Warfarin is not started until the platelet count recovers, usually to 150 000/mm3 or more."],
        rationale:
          "Every source of heparin stops, including the lock flush. Heparin goes in the allergy record so it is not given again. A non-heparin anticoagulant such as argatroban treats the clotting risk. Enoxaparin can cross-react with the same antibodies. Warfarin waits until platelets recover to 150 000/mm3 or more. Platelets are not given without bleeding.",
        sources: [SRC.ash, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report platelets as x 10^9/L only, so the warfarin threshold reads 150 x 10^9/L. The current count reads 88 x 10^9/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Indicated", "Not indicated"],
      rows: [
        { text: "Stop the subcutaneous heparin", correct: [0], why: "Ongoing heparin feeds the antibody reaction." },
        { text: "Flush the IV lock with 0.9% sodium chloride", correct: [0], why: "Even the small dose in a heparin flush can sustain the reaction." },
        { text: "Switch to enoxaparin 40 mg daily", correct: [1], why: "Low molecular weight heparin can cross-react with the same antibodies." },
        { text: "Record heparin in the allergy record", correct: [0], why: "An allergy entry helps prevent heparin being given again." },
        { text: "Start warfarin today", correct: [1], why: "Warfarin waits until the platelet count recovers, to lower the risk of limb gangrene." },
        { text: "Transfuse 1 unit of platelets", correct: [1], why: "The client is not bleeding, and platelet transfusion is not routine in this reaction." },
        { text: "Start an argatroban infusion", correct: [0], why: "A non-heparin anticoagulant treats the high clotting risk." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Argatroban infusion rate",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes argatroban 2 mcg/kg/minute IV as a continuous infusion. The client weighs 76 kg. The pharmacy supplies argatroban 50 mg in 50 mL (1 mg/mL). At what rate should the nurse set the infusion pump?",
        refs: ["The argatroban aPTT target is 1.5 to 3 times the baseline value, not above 100 seconds."],
        rationale:
          "The dose is 2 mcg/kg/minute for 76 kg, which is 152 mcg/minute. Over 60 minutes that is 9120 mcg, or 9.12 mg each hour. At 1 mg/mL the rate is 9.1 mL/hour. No liver disease is recorded and the ALT of 26 units/L is close to the 24 units/L before surgery, so no dose reduction is needed. A baseline aPTT is drawn before the start and repeated 2 hours after.",
        calc: { expr: "2 * 76 * 60 / 1000", answer: 9.12, unit: "mL/hour", round: 1, steps: ["2 * 76 = 152", "152 * 60 = 9120", "9120 / 1000 = 9.12"] },
        sources: [SRC.argatroban, SRC.ash],
      }),
      kind: "mc",
      options: [
        { text: "2.5 mL/hour", why: "This divides 152 mcg/minute by 60 instead of multiplying. It underdoses the client." },
        { text: "9.1 mL/hour", why: "152 mcg/minute is 9.12 mg/hour, which is 9.1 mL/hour at 1 mg/mL." },
        { text: "20.1 mL/hour", why: "This converts the weight to pounds before dosing. The dose is per kg, so it overdoses the client." },
        { text: "152 mL/hour", why: "This treats the dose in mcg/minute as a rate in mL/hour." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Checking a handoff for heparin reaction care",
        cjmm: "evaluate",
        process: "communication",
        difficulty: 4,
        stem: "At 1900 the nurse reviews a handoff note written by a newly hired nurse for the night shift. Click to highlight the entries that need correction.",
        refs: ["The argatroban aPTT target is 1.5 to 3 times the baseline value, checked 2 hours after the start."],
        rationale:
          "A heparin flush re-exposes the client to heparin and must stop. Warfarin waits until the platelet count recovers, which has not happened. Enoxaparin can cross-react, so it is not the discharge plan. The argatroban rate, the aPTT result, calf checks, bleeding precautions and the allergy entry are all correct.",
        sources: [SRC.ash, SRC.argatroban],
      }),
      kind: "highlight",
      passage:
        "[[Argatroban running at 9.1 mL/hour since 1100]]. [[aPTT at 1300 was 2.1 times baseline]]. [[IV lock flushed with heparin 10 units/mL at 1600]]. [[Right calf measured each shift]]. [[Plan to start warfarin tonight]]. [[Uses an electric razor and a soft toothbrush]]. [[Switch to enoxaparin at discharge]]. [[Heparin listed in the allergy record]].",
      spans: [
        { text: "Argatroban running at 9.1 mL/hour since 1100", why: "This matches the calculated rate for 2 mcg/kg/minute." },
        { text: "aPTT at 1300 was 2.1 times baseline", why: "A value 2 hours after the start within 1.5 to 3 times baseline is on target." },
        { text: "IV lock flushed with heparin 10 units/mL at 1600", why: "Any heparin, even in a flush, can sustain the reaction." },
        { text: "Right calf measured each shift", why: "Serial calf measures track the suspected clot." },
        { text: "Plan to start warfarin tonight", why: "Warfarin waits until the platelet count recovers, which has not happened." },
        { text: "Uses an electric razor and a soft toothbrush", why: "These precautions lower injury and bleeding during anticoagulation." },
        { text: "Switch to enoxaparin at discharge", why: "Enoxaparin can cross-react with heparin antibodies." },
        { text: "Heparin listed in the allergy record", why: "The allergy entry protects the client from future heparin." },
      ],
      correct: [2, 4, 6],
    },
  ],
};
