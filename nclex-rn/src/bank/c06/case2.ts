import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c06-2";

/** Case 2. Cardiac step-down unit. Middle-aged man with recurrent chest pressure before a planned catheterization. */
export const CASE2: CaseStudy = {
  id: ID,
  title: "Chest Pressure Before Dawn on the Step-Down Unit",
  intro:
    "A 58-year-old man was admitted to the cardiac step-down unit at 1900 last evening after 2 hours of chest pressure at home. His first troponin was raised. Cardiac catheterization is planned for this morning. At 0415 he presses his call light and reports chest pressure again.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Smokes 1 pack of cigarettes a day for 30 years.",
        "Type 2 diabetes treated with metformin.",
        "High cholesterol.",
        "His father died of a heart attack at age 60.",
        "Weight 94 kg.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "12-lead ECG with any episode of chest pain.",
        "Nitroglycerin 0.4 mg sublingual every 5 minutes as needed for chest pain, up to 3 doses.",
        "Heparin IV infusion by weight-based protocol.",
        "Metoprolol tartrate 25 mg by mouth every 12 hours. Next dose due 0800.",
        "Ibuprofen 400 mg by mouth every 6 hours as needed for back pain.",
        "Aspirin 81 mg by mouth daily. A 325 mg dose was chewed in the emergency department at 1745.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Cues of recurrent cardiac ischemia",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 0417 the nurse assesses the client. Which findings need immediate follow-up? Select all that apply.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "2000", "0417"],
              rows: [
                ["BP", "132/80 mmHg", "148/92 mmHg"],
                ["Heart rate", "78/minute", "108/minute"],
                ["Respiratory rate", "16/minute", "24/minute"],
                ["SpO2", "97% on room air", "95% on room air"],
                ["Temperature", "36.8°C (98.2°F)", "36.9°C (98.4°F)"],
              ],
            },
          },
        ],
        rationale:
          "Chest pressure of 7 at rest that spreads to the jaw signals new ischemia. Cool, damp skin, a heart rate of 108/minute and a respiratory rate of 24/minute show a stress response to it. His SpO2 of 95% does not call for oxygen. His temperature and bowel sounds are normal.",
        refs: ["Supplemental oxygen in acute coronary syndrome is given when SpO2 is below 90%."],
        sources: [SRC.acs, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Chest pressure 7 of 10 spreading to the jaw", why: "Pain at rest that spreads to the jaw signals ongoing ischemia." },
        { text: "SpO2 95% on room air, down from 97%", why: "95% is adequate. Oxygen is added only when SpO2 falls below 90%." },
        { text: "Cool, damp skin on his forehead", why: "Sweating with chest pain reflects a sympathetic response to ischemia." },
        { text: "Temperature 36.9°C (98.4°F)", why: "A temperature of 36.9°C is within the normal range." },
        { text: "Heart rate 108/minute", why: "The rate has risen from 78/minute. A faster rate raises oxygen demand in heart muscle already short of blood." },
        { text: "Bowel sounds present in all four quadrants", why: "Normal bowel sounds need no follow-up." },
        { text: "Respiratory rate 24/minute", why: "Rapid breathing with chest pain reflects distress and needs assessment." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Troponin and ECG trends",
        cjmm: "analyze",
        difficulty: 3,
        stem: "At 0420 a 12-lead ECG and blood tests are done. For each result, specify whether it points to ongoing myocardial ischemia or injury.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "1900", "2200", "0420", "Reference range"],
              rows: [
                ["High-sensitivity troponin I", "48 ng/L", "210 ng/L", "890 ng/L", "Below 20 ng/L"],
                ["Potassium", "Not done", "Not done", "4.2 mEq/L (4.2 mmol/L)", "3.5 to 5.0 mEq/L"],
                ["Magnesium", "Not done", "Not done", "2.0 mg/dL (0.82 mmol/L)", "1.7 mg/dL (0.70 mmol/L) to 2.2 mg/dL (0.91 mmol/L)"],
                ["Creatinine", "Not done", "Not done", "1.0 mg/dL (88 micromol/L)", "0.7 mg/dL (62 micromol/L) to 1.3 mg/dL (115 micromol/L)"],
              ],
            },
          },
          { title: "12-lead ECG", text: "1900: ST depression 1 mm in leads V5 and V6.\n0420: ST depression 2 mm in leads V4 to V6. No ST elevation." },
        ],
        rationale:
          "Troponin has risen from 48 to 890 ng/L since 1900. A rising value above the reference limit shows heart muscle injury. ST depression that deepened from 1 mm to 2 mm and spread to V4 shows worsening ischemia. Potassium, magnesium and creatinine are within their reference ranges.",
        sources: [SRC.acs, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report these results only in SI units. Potassium reads 4.2 mmol/L, magnesium 0.82 mmol/L and creatinine 88 micromol/L. Troponin is already reported in ng/L, so its values do not change.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Points to ischemia or injury", "Does not point to ischemia"],
      rows: [
        { text: "Troponin rising from 210 to 890 ng/L", correct: [0], why: "A rising troponin above 20 ng/L shows ongoing heart muscle injury." },
        { text: "ST depression deepened to 2 mm in V4 to V6", correct: [0], why: "Deeper and wider ST depression shows worsening ischemia." },
        { text: "Potassium 4.2 mEq/L (4.2 mmol/L)", correct: [1], why: "4.2 mEq/L lies between 3.5 and 5.0 mEq/L." },
        { text: "Magnesium 2.0 mg/dL (0.82 mmol/L)", correct: [1], why: "2.0 mg/dL lies between 1.7 and 2.2 mg/dL." },
        { text: "Creatinine 1.0 mg/dL (88 micromol/L)", correct: [1], why: "1.0 mg/dL lies between 0.7 and 1.3 mg/dL." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Ranking problems in a non-ST-elevation MI",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "At 0425 the nurse reviews the findings so far and sets priorities for the next hour. Which client problem is the priority?",
        rationale:
          "Rest pain, a rising troponin and deepening ST depression show heart muscle that is still losing its blood supply. Untreated, the infarct can extend and cause dysrhythmia or heart failure. It threatens life now. Bleeding risk and anxiety are real but less urgent. No glucose result supports hyperglycemia as a current problem.",
        sources: [SRC.acs],
      }),
      kind: "mc",
      options: [
        { text: "Anxiety about the planned catheterization", why: "Anxiety matters but does not threaten life as ischemia does." },
        { text: "Risk for bleeding from the heparin infusion", why: "No bleeding is reported. This risk is monitored but is not the priority." },
        { text: "Hyperglycemia from type 2 diabetes", why: "No glucose result is given. Diabetes is a chronic problem that is not acute now." },
        { text: "Ongoing ischemia of the heart muscle", why: "Rest pain with rising troponin and ST changes threatens life and comes first." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Holding unsafe cardiac prescriptions",
        cjmm: "generate",
        difficulty: 4,
        stem: "At 0428 the client says, \"My wife brought my pills from home. I took my sildenafil at 2300.\" For each prescription, specify whether the nurse should carry it out or hold it and clarify it with the primary health care provider.",
        rationale:
          "Sildenafil taken at 2300 is well inside 24 hours. A nitrate on top of it can cause severe hypotension, so nitroglycerin is held and clarified. Ibuprofen is an NSAID other than aspirin. It raises cardiovascular risk in this syndrome and adds to bleeding with heparin. The ECG, heparin and metoprolol are safe and indicated.",
        refs: ["Nitrates are avoided within 24 hours of sildenafil.", "NSAIDs other than aspirin are not given during an acute coronary syndrome."],
        sources: [SRC.acs],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Carry out", "Hold and clarify"],
      rows: [
        { text: "Nitroglycerin 0.4 mg sublingual as needed", correct: [1], why: "Sildenafil within 24 hours plus a nitrate can cause severe hypotension." },
        { text: "Repeat 12-lead ECG with chest pain", correct: [0], why: "An ECG during pain shows whether ischemia is worsening." },
        { text: "Continue the heparin infusion", correct: [0], why: "Anticoagulation is standard in this syndrome and no bleeding is reported." },
        { text: "Metoprolol tartrate 25 mg at 0800", correct: [0], why: "BP 148/92 mmHg and heart rate 108/minute allow a beta blocker, which lowers oxygen demand." },
        { text: "Ibuprofen 400 mg as needed for back pain", correct: [1], why: "This NSAID raises cardiovascular risk here and adds to bleeding with heparin." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to fear of dying",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The provider holds the nitroglycerin and prescribes IV morphine 2 mg once. At 0500 his pain is 2 of 10. He says, \"My father died of a heart attack. I think this is it for me.\" Which response by the nurse is best?",
        rationale:
          "He links his own illness to his father's death. Reflecting the feeling shows empathy and invites him to talk. Once his fear is voiced, the nurse can give accurate information about his care. Reassurance, promises and why questions shut the conversation down.",
        sources: [SRC.halter],
      }),
      kind: "mc",
      options: [
        { text: "\"Your care team is excellent, so try not to worry.\"", why: "This is false reassurance. It dismisses his fear and closes the conversation." },
        { text: "\"Why do you think this will end like it did for him?\"", why: "A why question asks him to defend his feeling and can feel like a challenge." },
        { text: "\"You fear this will end the way it did for your father.\"", why: "Reflecting his fear shows it is heard and invites him to say more." },
        { text: "\"Your pain is down to 2, so the worst is over.\"", why: "The nurse cannot promise this. Less pain does not rule out further injury." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Secondary prevention after a coronary stent",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On day 3, after a coronary stent is placed, he prepares for discharge. His prescriptions include aspirin 81 mg daily and ticagrelor 90 mg twice daily. Which two statements show understanding of the teaching? Select two.",
        rationale:
          "Dual antiplatelet therapy protects the new stent. Stopping ticagrelor early raises the risk of a clot in the stent. Cardiac rehabilitation improves survival and function after this syndrome. Smoking must stop, not just drop. Sildenafil with a nitrate can cause severe hypotension. Aspirin continues long term. Graded walking is encouraged.",
        sources: [SRC.acs],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will cut down to half a pack of cigarettes a day.\"", why: "Any smoking raises the risk of another event. The goal is to quit." },
        { text: "\"I will keep taking ticagrelor even when I feel well.\"", why: "Stopping the antiplatelet drug early raises the risk of a clot in the stent." },
        { text: "\"I can use my sildenafil with my nitroglycerin spray.\"", why: "Combining them can cause a dangerous drop in BP." },
        { text: "\"I will go to the cardiac rehab I was referred to.\"", why: "Cardiac rehabilitation lowers the risk of death and another event." },
        { text: "\"I can stop the aspirin once my chest pain is gone.\"", why: "Aspirin continues long term to protect the stent and the other arteries." },
        { text: "\"I should avoid walking until my follow-up visit.\"", why: "Early graded activity is encouraged. Rehabilitation builds it safely." },
      ],
      correct: [1, 3],
    },
  ],
};
