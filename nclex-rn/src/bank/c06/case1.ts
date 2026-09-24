import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c06-1";

/** Case 1. Emergency department. Older woman with sudden right-sided weakness inside the thrombolysis window. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Sudden Word-Finding Trouble at Breakfast",
  intro:
    "A 67-year-old woman arrives by ambulance at the emergency department at 0935. Her husband last saw her well at 0840 at breakfast. At 0850 he found her unable to get words out, with a weak right arm. She has hypertension and atrial fibrillation.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Hypertension for 12 years. Atrial fibrillation diagnosed 2 years ago.",
        "She stopped taking apixaban 3 weeks ago because of its cost.",
        "Takes metoprolol and lisinopril by mouth daily.",
        "No surgery, trauma or bleeding in the past 3 months.",
        "Weight 72 kg on the emergency department bed scale.",
        "No known drug allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0940"],
        rows: [
          ["BP", "196/112 mmHg"],
          ["Heart rate", "94/minute, irregular"],
          ["Respiratory rate", "18/minute"],
          ["SpO2", "96% on room air"],
          ["Temperature", "36.8°C (98.2°F)"],
          ["Point-of-care glucose", "142 mg/dL (7.9 mmol/L)"],
        ],
      },
    },
    { title: "Nurses' Notes", text: "0937 Stroke alert called. Noncontrast head CT requested." },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Focal deficits in an acute stroke",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 0938 the nurse completes a focused neurological assessment and records the note below. Click to highlight the findings that show a new neurological deficit.",
        rationale:
          "Right facial droop, right arm drift and a weak right grip show new motor loss on the right side. Halting speech with intact comprehension is expressive aphasia. Together these point to a stroke in the left hemisphere. The left arm, comprehension and pupils are normal. The irregular rhythm fits her known atrial fibrillation. It is a likely source of a clot, not a deficit.",
        sources: [SRC.stroke, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Right side of the mouth droops when she smiles]]. [[Right arm drifts down within 5 seconds]]. [[Left arm holds its position for 10 seconds]]. [[Follows two-step commands correctly]]. [[Speaks only a few halting words]]. [[Pupils equal at 3 mm and reactive]]. [[Heart rhythm irregularly irregular on the monitor]]. [[Right hand grip weaker than the left]].",
      spans: [
        { text: "Right side of the mouth droops when she smiles", why: "One-sided facial droop is a new motor deficit." },
        { text: "Right arm drifts down within 5 seconds", why: "Arm drift shows new weakness on the right side." },
        { text: "Left arm holds its position for 10 seconds", why: "The left arm has normal strength, so it shows no deficit." },
        { text: "Follows two-step commands correctly", why: "Intact comprehension is not a deficit. It helps show the aphasia is expressive." },
        { text: "Speaks only a few halting words", why: "Halting speech with intact understanding is expressive aphasia." },
        { text: "Pupils equal at 3 mm and reactive", why: "Equal, reactive pupils are a normal finding." },
        { text: "Heart rhythm irregularly irregular on the monitor", why: "This fits her known atrial fibrillation. It is a risk factor, not a new deficit." },
        { text: "Right hand grip weaker than the left", why: "A weak right grip adds to the pattern of right-sided motor loss." },
      ],
      correct: [0, 1, 4, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Readiness for IV thrombolysis",
        cjmm: "analyze",
        difficulty: 3,
        stem: "At 1000 the head CT shows no bleeding. The stroke team plans IV tenecteplase. For each finding, specify whether it permits thrombolysis now or must be corrected first.",
        rationale:
          "Thrombolysis starts within 4.5 hours of last known well. Last known well was 0840, so she is inside the window at 1000. The CT excludes bleeding. A glucose of 142 mg/dL excludes hypoglycemia as a stroke mimic. Apixaban stopped 3 weeks ago leaves no drug effect. Only the BP of 196/112 mmHg needs correction. It is above the 185/110 mmHg limit.",
        refs: ["IV thrombolysis is given within 4.5 hours of last known well.", "BP must be below 185/110 mmHg before IV thrombolysis starts."],
        sources: [SRC.stroke, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report glucose only in mmol/L, so this result reads 7.9 mmol/L and is not low.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Permits thrombolysis now", "Must be corrected first"],
      rows: [
        { text: "Last known well at 0840", correct: [0], why: "At 1000 she is well inside the 4.5 hour window from last known well." },
        { text: "Head CT with no bleeding", correct: [0], why: "A CT free of blood is required before a thrombolytic is given." },
        { text: "BP 196/112 mmHg", correct: [1], why: "196/112 mmHg is above the 185/110 mmHg limit for starting thrombolysis." },
        { text: "Glucose 142 mg/dL (7.9 mmol/L)", correct: [0], why: "Glucose is checked to exclude hypoglycemia as a mimic. 142 mg/dL is not low." },
        { text: "Last apixaban dose 3 weeks ago", correct: [0], why: "A dose taken 3 weeks ago leaves no anticoagulant effect." },
        { text: "Heart rate 94/minute, irregular", correct: [0], why: "Atrial fibrillation at this rate does not bar thrombolysis." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First priority before thrombolysis",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1003 the primary health care provider prescribes IV labetalol now and tenecteplase once the BP goal is met. Complete the sentence below by choosing from the lists of options.",
        rationale:
          "Her BP is 196/112 mmHg. A thrombolytic given at this pressure raises the risk of bleeding into the brain. The team gives tenecteplase only once BP is below 185/110 mmHg. So the labetalol comes first. Aspiration, infection and skin injury are real risks. None of them must be controlled before the drug is given.",
        refs: ["BP must be below 185/110 mmHg before IV thrombolysis starts."],
        sources: [SRC.stroke],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "Before tenecteplase is given, the nurse's priority is to lower the risk of {0} by first achieving {1}.",
      blanks: [
        {
          options: [
            { text: "aspiration pneumonia", why: "Aspiration is a later risk. Keeping her NPO until a swallow screen manages it." },
            { text: "bleeding into the brain", why: "High BP during thrombolysis raises the chance of bleeding into the brain." },
            { text: "a urinary tract infection", why: "Infection is not the risk that must be controlled before the drug." },
            { text: "a pressure injury", why: "She has been in bed for a short time. Skin care does not come before reperfusion." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a passed swallow screen", why: "The swallow screen guides oral intake. It does not need to precede the drug." },
            { text: "an indwelling urinary catheter", why: "Catheters are delayed around thrombolysis when possible because insertion can cause bleeding." },
            { text: "a BP below 185/110 mmHg", why: "Thrombolysis starts only once BP is below 185/110 mmHg." },
            { text: "a turning schedule every 2 hours", why: "Repositioning is routine care. It does not lower the bleeding risk from the drug." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "RRP",
        topic: "Monitoring after thrombolysis",
        cjmm: "generate",
        difficulty: 3,
        stem: "At 1010 the BP is 178/102 mmHg. Tenecteplase will be given at 1012. Which actions should the nurse include in the plan for the first 24 hours after thrombolysis? Select all that apply.",
        rationale:
          "Tenecteplase raises bleeding risk for the next 24 hours. The plan keeps BP at or below 180/105 mmHg. Neurological checks every 15 minutes at first catch bleeding early. Nasogastric tubes are delayed. She stays NPO until she passes a swallow screen. Aspirin and heparin wait until imaging at 24 hours excludes bleeding.",
        refs: ["After IV thrombolysis, BP is kept at or below 180/105 mmHg for 24 hours.", "Neurological checks run every 15 minutes for 2 hours after IV thrombolysis starts."],
        sources: [SRC.stroke, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Give aspirin 325 mg with her first meal", why: "Antiplatelet drugs are usually held for 24 hours after thrombolysis, until imaging excludes bleeding." },
        { text: "Keep BP at or below 180/105 mmHg", why: "This limit, held for 24 hours, lowers the risk of bleeding into the brain." },
        { text: "Check neurological status every 4 hours", why: "Checks start every 15 minutes for the first 2 hours. Every 4 hours would miss early bleeding." },
        { text: "Keep her NPO until a swallow screen is passed", why: "Stroke often impairs swallowing. Nothing goes by mouth, including drugs, until she passes a screen." },
        { text: "Start subcutaneous heparin injections today", why: "Anticoagulants wait at least 24 hours after thrombolysis because they add to bleeding risk." },
        { text: "Delay inserting a nasogastric tube", why: "Invasive tubes are delayed after thrombolysis when safe because insertion can cause bleeding." },
        { text: "Check neurological status every 15 minutes at first", why: "Checks every 15 minutes for the first 2 hours detect early bleeding or swelling." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Tenecteplase dose volume",
        cjmm: "action",
        difficulty: 3,
        stem: "The prescription reads tenecteplase 0.25 mg/kg IV as a single bolus over 5 seconds, maximum dose 25 mg. Her weight is 72 kg. The reconstituted vial holds 5 mg/mL. How many mL should the nurse give?",
        rationale:
          "The dose is 0.25 mg/kg for 72 kg, which is 18 mg. This is below the 25 mg maximum. At 5 mg/mL, 18 mg is 3.6 mL. Thrombolytics are high-alert drugs, so a second nurse checks the dose. The unused drug left in the vial is discarded.",
        calc: { expr: "0.25 * 72 / 5", answer: 3.6, unit: "mL", round: 1, steps: ["0.25 * 72 = 18", "18 / 5 = 3.6"] },
        sources: [SRC.stroke, SRC.ismp],
      }),
      kind: "mc",
      options: [
        { text: "1.8 mL", why: "1.8 mL holds only half of the 18 mg dose." },
        { text: "3.6 mL", why: "18 mg at 5 mg/mL is 3.6 mL." },
        { text: "5 mL", why: "5 mL holds 25 mg, the maximum dose. Her weight calls for less." },
        { text: "18 mL", why: "This confuses the 18 mg dose with its volume. It would be a large overdose." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Communicating with expressive aphasia",
        cjmm: "evaluate",
        process: "communication",
        difficulty: 2,
        stem: "On day 2 she is on the stroke unit. She understands speech but still struggles to find words and cries when they will not come. The nurse observes an assistive personnel (AP), family and staff talking with her. Which two actions show effective communication? Select two.",
        rationale:
          "She has expressive aphasia. She understands but cannot easily produce words. Yes or no questions and unhurried waiting lower the demand on speech and respect her. Loud speech, several questions at once and finishing her sentences add to frustration. Talking about her in front of her ignores her intact understanding.",
        sources: [SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Her husband speaks more loudly to her", why: "She understands speech. A louder voice does not help word finding." },
        { text: "The AP asks yes or no questions", why: "Yes or no questions let her answer with a nod when words fail." },
        { text: "Her daughter finishes her sentences for her", why: "Finishing her sentences removes her practice and can add to her frustration." },
        { text: "A nurse asks three questions at once", why: "Several questions at once add to the load on her language system." },
        { text: "A therapist waits for her to answer", why: "Unhurried waiting gives her time to form words and lowers stress." },
        { text: "A visitor talks about her as if she is absent", why: "Talking around her ignores her intact understanding and harms her dignity." },
      ],
      correct: [1, 4],
    },
  ],
};
