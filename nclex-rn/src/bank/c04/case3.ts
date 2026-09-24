import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c04-3";

/** Case 3. Emergency department. Older woman with a sudden fast, irregular heartbeat. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "A Fluttering Heart in the Emergency Department",
  intro:
    "A 67-year-old woman comes to the emergency department at 2100. She says her heart has been racing and fluttering since she woke from a nap at 1800. She is short of breath when walking and lightheaded when she stands.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Hypertension treated with amlodipine 5 mg by mouth daily.",
        "Type 2 diabetes treated with metformin 1000 mg by mouth twice daily.",
        "No known heart disease. No history of stroke or bleeding.",
        "Weight 72 kg. No allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "2105"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "146/minute, irregular"],
          ["Respiratory rate", "22/minute"],
          ["BP", "108/68 mmHg"],
          ["SpO2", "95% on room air"],
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
        topic: "Circulation findings with a fast irregular pulse",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The emergency department nurse examines the woman at 2110 and records the note below. Which findings require follow-up? Select three.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "2110. Apical pulse 146/minute and irregular. Radial pulse 118/minute and irregular.",
              "Lightheaded when she stands to use the commode.",
              "Monitor shows an irregularly irregular rhythm with no clear P waves.",
              "Lungs clear. No edema of the feet or ankles.",
              "Skin warm and dry. Capillary refill 2 seconds.",
              "Smile symmetric. Grips equal. Speech clear.",
            ].join("\n"),
          },
        ],
        rationale:
          "An apical rate of 146/minute against a radial rate of 118/minute is a pulse deficit of 28/minute. Some beats fill the ventricle too little to reach the wrist. Lightheadedness on standing suggests reduced cardiac output. An irregular rhythm with no clear P waves needs a full ECG to name it. Clear lungs, normal refill and an intact neurologic check need no follow-up now.",
        sources: [SRC.af, SRC.brunner],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Pulse deficit of 28/minute", why: "Some beats are too weak to reach the wrist, a sign of poor filling." },
        { text: "Clear lungs and no ankle edema", why: "These show no fluid overload at present." },
        { text: "Lightheaded on standing", why: "Lightheadedness suggests reduced cardiac output from the fast rate." },
        { text: "Symmetric smile and equal grips", why: "These show no sign of stroke at present." },
        { text: "Irregularly irregular rhythm", why: "An irregular rhythm without clear P waves needs a full ECG." },
        { text: "Capillary refill of 2 seconds", why: "A refill of 2 seconds is normal." },
      ],
      correct: [0, 2, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Reading a fast irregular rhythm on ECG",
        cjmm: "analyze",
        difficulty: 3,
        stem: "A 12-lead ECG at 2120 shows an irregularly irregular narrow QRS rhythm at 146/minute with a wavy baseline and no distinct P waves. Complete the following sentences by choosing from the lists of options.",
        rationale:
          "An irregularly irregular narrow QRS rhythm with no distinct P waves and a wavy baseline is atrial fibrillation. At 146/minute the ventricles have little time to fill in diastole. The atria also stop contracting, so the atrial kick is lost. Stroke volume and cardiac output fall. Flutter shows sawtooth waves. Ventricular tachycardia has wide QRS complexes.",
        sources: [SRC.af, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The ECG is most consistent with {0}. A ventricular rate this fast lowers cardiac output mainly by {1}.",
      blanks: [
        {
          options: [
            { text: "atrial flutter", why: "Flutter shows regular sawtooth waves rather than a wavy baseline." },
            { text: "atrial fibrillation", why: "Irregular narrow QRS complexes with no P waves and a wavy baseline define it." },
            { text: "sinus tachycardia", why: "Sinus tachycardia is regular with a P wave before each QRS." },
            { text: "ventricular tachycardia", why: "This rhythm has wide QRS complexes, and hers are narrow." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "increasing venous return to the heart", why: "A fast rate does not increase venous return." },
            { text: "widening the QRS complexes", why: "Her QRS complexes are narrow." },
            { text: "shortening ventricular filling time", why: "Less time in diastole means less blood fills the ventricles." },
            { text: "lowering the blood oxygen level", why: "Her SpO2 of 95% is adequate and is not the main mechanism." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Choosing the priority problem in a rapid rhythm",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 2130 the client says she feels more lightheaded. BP is 102/64 mmHg and the heart rate is 150/minute. She is alert and denies chest pain. Which problem is the nurse's priority?",
        rationale:
          "Her lightheadedness is worse, and the BP has fallen from 108/68 mmHg to 102/64 mmHg as the rate climbs to 150/minute. A fast, irregular rate shortens filling and lowers cardiac output. This is a current threat to perfusion. Stroke risk shapes the later plan for anticoagulation. Anxiety and falls matter but follow from the low output.",
        sources: [SRC.af, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Risk for stroke from a clot forming in the atria", why: "Clot risk guides the later plan, but her circulation is threatened now." },
        { text: "Anxiety related to the sudden palpitations", why: "Anxiety is real but ranks below a threat to circulation." },
        { text: "Reduced cardiac output from the fast ventricular rate", why: "Worse lightheadedness and a falling BP show her output is dropping now." },
        { text: "Risk for falls related to her lightheadedness", why: "Falls are a concern, but the low output that causes them comes first." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PSY",
        topic: "Easing acute anxiety at the bedside",
        cjmm: "generate",
        process: "caring",
        difficulty: 2,
        stem: "At 2140 the client grips the bed rail. She says, \"I feel like something terrible is about to happen. Please do not leave me.\" Her heart rate is 148/minute. Which actions should the nurse include to reduce her anxiety? Select all that apply.",
        rationale:
          "Her fear and her plea not to be left alone show high anxiety. Anxiety also drives the heart rate up. Staying with her, short clear explanations, slow breathing and a calm room lower anxiety. False reassurance dismisses her feelings. High anxiety narrows attention, so detailed teaching waits. Leaving her alone ignores her request.",
        sources: [SRC.varcarolis],
      }),
      kind: "sata",
      options: [
        { text: "Tell her there is nothing to worry about", why: "False reassurance dismisses her fear and can lower trust." },
        { text: "Stay with her during the next assessment", why: "A calm presence lowers fear when she feels unsafe alone." },
        { text: "Teach her about long-term anticoagulant medication options", why: "High anxiety narrows attention, so detailed teaching should wait." },
        { text: "Explain the monitor alarms in short, simple sentences", why: "Brief, clear explanations suit the narrowed focus of high anxiety." },
        { text: "Guide her through slow, deep breathing", why: "Slow breathing gives her a task and eases the stress response." },
        { text: "Leave her alone so she can rest quietly", why: "Leaving her alone ignores her request and can raise her fear." },
        { text: "Lower the lights and noise in the room", why: "Fewer stimuli help calm a client with high anxiety." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based dose of an IV rate-control drug",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes diltiazem 0.25 mg/kg IV over 2 minutes. The vial contains diltiazem 5 mg/mL. The client weighs 72 kg. How many mL should the nurse give?",
        calc: { expr: "0.25 * 72 / 5", answer: 3.6, unit: "mL", round: 1, steps: ["0.25 * 72 = 18", "18 / 5 = 3.6"] },
        rationale:
          "The dose is 0.25 mg/kg for 72 kg, which is 18 mg. The vial holds 5 mg/mL, so 18 mg is 3.6 mL. The bolus is pushed over 2 minutes. Diltiazem slows conduction through the AV node and can lower BP, so the nurse watches the BP and heart rate closely.",
        sources: [SRC.diltiazem, SRC.af],
      }),
      kind: "mc",
      options: [
        { text: "1.8 mL", why: "This gives half of the 18 mg dose." },
        { text: "3.6 mL", why: "18 mg divided by 5 mg/mL is 3.6 mL." },
        { text: "7.2 mL", why: "This is twice the dose and risks hypotension." },
        { text: "18 mL", why: "This gives the dose in mg as a volume in mL, which is 5 times too much." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Checking fall precautions before transfer",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "The heart rate slows to 96/minute and a diltiazem infusion is started. At 2330 the nurse checks the client's room before transfer to the cardiac unit. She still feels lightheaded when she stands. For each finding, specify whether it is safe or requires follow-up.",
        rationale:
          "Lightheadedness on standing and a drug that can lower BP raise her risk of falling. A low, locked bed, a call light in reach and nonskid socks are in place. Walking alone to the bathroom, tubing across the floor and a silenced bed alarm leave her at risk. Each needs follow-up before transfer.",
        sources: [SRC.potter, SRC.diltiazem],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Safe", "Requires follow-up"],
      rows: [
        { text: "Bed in its lowest position with the wheels locked", correct: [0], why: "A low, locked bed lowers the chance of injury if she gets up." },
        { text: "Call light clipped within her reach", correct: [0], why: "She can call for help before getting up." },
        { text: "Walked alone to the bathroom 10 minutes ago", correct: [1], why: "Lightheadedness on standing makes walking alone unsafe." },
        { text: "Nonskid socks on both feet", correct: [0], why: "Nonskid footwear lowers the chance of slipping." },
        { text: "IV tubing loops across the floor to the pump", correct: [1], why: "Loose tubing on the floor is a trip hazard." },
        { text: "Bed exit alarm turned off", correct: [1], why: "The alarm alerts staff when a client at risk tries to get up alone." },
      ],
    },
  ],
};
