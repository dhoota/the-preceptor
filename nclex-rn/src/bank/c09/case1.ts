import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c09-1";

/** Case 1. Orthopedic surgical unit. Older man with a reaction during a red cell transfusion. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Unit of Red Cells After Knee Surgery",
  intro:
    "A 66-year-old man is on day 1 after a left total knee arthroplasty on the orthopedic surgical unit. His hemoglobin this morning is 7.2 g/dL (72 g/L). At 1300 the nurse starts 1 unit of red blood cells.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Left total knee arthroplasty yesterday. Estimated blood loss 600 mL.",
        "Hypertension treated with amlodipine 5 mg by mouth daily.",
        "Hemoglobin before surgery 10.4 g/dL (104 g/L).",
        "No previous transfusions. Blood type A positive.",
        "Weight 88 kg. No known allergies.",
        "Indwelling urinary catheter in place since surgery.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Transfuse 1 unit of red blood cells over 2 hours.",
        "0.9% sodium chloride IV at 20 mL/hour to keep the vein open.",
        "Acetaminophen 1000 mg by mouth every 6 hours.",
      ].join("\n"),
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "0600", "Reference range"],
        rows: [
          ["Hemoglobin", "7.2 g/dL (72 g/L)", "13.5 to 17.5 g/dL (135 to 175 g/L)"],
          ["Creatinine", "0.9 mg/dL (80 micromol/L)", "0.6 to 1.2 mg/dL (53 to 106 micromol/L)"],
          ["Potassium", "4.1 mEq/L (4.1 mmol/L)", "3.5 to 5.0 mEq/L (3.5 to 5.0 mmol/L)"],
        ],
      },
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1245"],
        rows: [
          ["Temperature", "36.9°C (98.4°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "138/82 mmHg"],
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
        need: "PPT",
        topic: "Findings during a red cell transfusion",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1312 the client calls the nurse. The nurse checks the vital signs and writes the note below. Click to highlight the findings that require follow-up.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "1245", "1312"],
              rows: [
                ["Temperature", "36.9°C (98.4°F)", "38.4°C (101.1°F)"],
                ["Heart rate", "84/minute", "118/minute"],
                ["Respiratory rate", "16/minute", "22/minute"],
                ["BP", "138/82 mmHg", "96/58 mmHg"],
                ["SpO2", "96% on room air", "95% on room air"],
              ],
            },
          },
        ],
        rationale:
          "The client was stable at 1245. Soon after the red cells started, he developed chills, a temperature of 38.4°C and new low back pain. He also reports a sense of doom. His BP fell from 138/82 to 96/58 mmHg. Dark red urine suggests free hemoglobin from destroyed red cells. These findings point to a transfusion reaction. Mild knee pain, an old dry stain, clear lungs, full orientation and a clean IV site are expected.",
        sources: [SRC.nhsn, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Reports chills and shaking]]. [[Temperature 38.4°C (101.1°F)]]. [[Left knee pain 3 of 10]]. [[New low back pain, 7 of 10]]. [[Knee dressing dry with a small old stain]]. [[Says he feels that something bad is happening]]. [[BP 96/58 mmHg]]. [[Lungs clear in all fields]]. [[Urine in the catheter tubing is dark red]]. [[Oriented to person, place and time]]. [[IV site without redness or swelling]].",
      spans: [
        { text: "Reports chills and shaking", why: "New chills soon after red cells start can signal a transfusion reaction." },
        { text: "Temperature 38.4°C (101.1°F)", why: "The temperature rose from 36.9°C at 1245, after the transfusion began." },
        { text: "Left knee pain 3 of 10", why: "Mild knee pain is expected on day 1 after arthroplasty." },
        { text: "New low back pain, 7 of 10", why: "New back or flank pain during a transfusion is a sign of red cell destruction." },
        { text: "Knee dressing dry with a small old stain", why: "A small old stain on a dry dressing is expected after surgery." },
        { text: "Says he feels that something bad is happening", why: "A sense of doom can be an early sign of a serious transfusion reaction." },
        { text: "BP 96/58 mmHg", why: "The BP fell from 138/82 mmHg after the transfusion began, which suggests a reaction." },
        { text: "Lungs clear in all fields", why: "Clear lungs are reassuring and argue against circulatory overload." },
        { text: "Urine in the catheter tubing is dark red", why: "Dark red urine can reflect hemoglobin released from destroyed red cells." },
        { text: "Oriented to person, place and time", why: "Full orientation is expected and needs no follow-up." },
        { text: "IV site without redness or swelling", why: "A clean IV site needs no follow-up." },
      ],
      correct: [0, 1, 3, 5, 6, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Transfusion reaction or surgical recovery",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse sorts the client's findings. For each finding, specify whether it is consistent with a transfusion reaction or expected after knee arthroplasty.",
        rationale:
          "Back pain, a fast heart rate and fever all began after the red cells started. At 1245 the heart rate was 84/minute and the temperature was 36.9°C. Dark red urine fits hemoglobin released from destroyed red cells. Mild knee pain and an old dressing stain are expected on day 1. The hemoglobin fell from 10.4 g/dL (104 g/L) before surgery, which is the reason for the transfusion.",
        sources: [SRC.nhsn, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Consistent with a transfusion reaction", "Expected after knee arthroplasty"],
      rows: [
        { text: "New low back pain, 7 of 10", correct: [0], why: "Back or flank pain during a transfusion is a sign of hemolysis." },
        { text: "Left knee pain 3 of 10", correct: [1], why: "Mild pain at the surgical joint is expected on day 1." },
        { text: "Heart rate 118/minute, up from 84/minute", correct: [0], why: "The rise began after the transfusion started, with a falling BP." },
        { text: "Hemoglobin 7.2 g/dL (72 g/L) before the transfusion", correct: [1], why: "The fall from 10.4 g/dL (104 g/L) before surgery reflects surgical blood loss." },
        { text: "Dark red urine in the catheter tubing", correct: [0], why: "Free hemoglobin from destroyed red cells darkens the urine." },
        { text: "Temperature 38.4°C (101.1°F)", correct: [0], why: "The fever began after the transfusion started. At 1245 it was 36.9°C." },
        { text: "Small old stain on the knee dressing", correct: [1], why: "A small old stain on a dry dressing is expected after surgery." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Naming the transfusion reaction",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse weighs the possible causes of the client's findings at 1312. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Dark red urine and a fall in BP to 96/58 mmHg point to red cells breaking down in the circulation. With fever, chills and back pain soon after the start, this fits an acute hemolytic reaction. A febrile nonhemolytic reaction does not cause hypotension or dark urine. Clear lungs and a falling BP argue against circulatory overload. No hives or wheeze were described.",
        sources: [SRC.nhsn, SRC.brunner],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The client is most likely experiencing {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "a febrile nonhemolytic reaction", why: "This reaction causes fever and chills but not hypotension or dark urine." },
            { text: "an acute hemolytic reaction", why: "Fever, back pain, falling BP and dark urine fit red cell destruction." },
            { text: "an allergic transfusion reaction", why: "Allergic reactions show hives, itching or wheeze. None was described." },
            { text: "circulatory overload", why: "Overload raises the BP and causes crackles. His BP fell and his lungs are clear." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "clear lung sounds", why: "Clear lungs do not point to a hemolytic reaction." },
            { text: "a dry dressing", why: "The dressing reflects the surgery, not the transfusion." },
            { text: "an intact IV site", why: "An intact IV site does not point to any reaction." },
            { text: "dark red urine", why: "Dark red urine reflects hemoglobin released from destroyed red cells." },
          ],
          correct: 3,
        },
        {
          options: [
            { text: "a BP of 96/58 mmHg", why: "The fall from 138/82 mmHg fits the shock seen with hemolysis." },
            { text: "an SpO2 of 95%", why: "An SpO2 of 95% on room air is reassuring." },
            { text: "full orientation", why: "Orientation is intact and does not support any reaction." },
            { text: "mild knee pain", why: "Mild knee pain is expected after arthroplasty." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Response to a suspected hemolytic reaction",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse suspects an acute hemolytic transfusion reaction. Which actions should the nurse plan to take? Select all that apply.",
        rationale:
          "Every further mL of incompatible blood adds to the hemolysis, so the transfusion stops at once. New tubing with 0.9% sodium chloride keeps IV access without pushing the blood left in the old tubing into the vein. The bag and tubing go to the blood bank for testing. A urine specimen checks for free hemoglobin. The unit is not slowed, restarted or discarded.",
        sources: [SRC.brunner, SRC.nhsn, { body: "National Advisory Committee on Blood and Blood Products", work: "Overview of Adverse Transfusion Reaction Reporting for Hospitals in Canada", year: 2024, url: "https://nacblood.ca/en/resource/overview-adverse-transfusion-reaction-reporting-hospitals-canada-nac-and-quebec" }],
        canada: "The US NHSN protocol does not apply in Canada. Hospitals report blood component reactions to Canadian Blood Services, or Héma-Québec in Quebec, and to provincial programs that feed PHAC's Transfusion Transmitted Injuries Surveillance System.",
      }),
      kind: "sata",
      options: [
        { text: "Slow the transfusion to half the rate", why: "Any further donor cells add to the hemolysis. The transfusion is stopped, not slowed." },
        { text: "Stop the transfusion", why: "Stopping at once limits the amount of incompatible blood the client receives." },
        { text: "Give diphenhydramine and restart the unit", why: "Antihistamines treat mild allergic reactions. A suspected hemolytic reaction is not restarted." },
        { text: "Infuse 0.9% sodium chloride through new tubing", why: "New tubing keeps the vein open without giving the blood left in the old tubing." },
        { text: "Flush the blood tubing with 0.9% sodium chloride", why: "Flushing the old tubing pushes more incompatible blood into the client." },
        { text: "Send the blood bag and tubing to the blood bank", why: "The blood bank retests the unit to find the cause of the reaction." },
        { text: "Collect a urine specimen for hemoglobin", why: "Hemoglobin in the urine supports red cell destruction in the circulation." },
        { text: "Discard the blood bag in a biohazard bin", why: "Discarding the bag destroys the evidence the blood bank needs to test." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Mislabeled blood unit at the bedside",
        cjmm: "action",
        process: "clinical-judgment",
        difficulty: 4,
        stem: "The nurse stops the transfusion and checks the blood bag. The tag lists the name and record number of the client in the next room. The unit is type B positive. Which action should the nurse take next?",
        rationale:
          "The tag belongs to another client, so two units may have been switched. The client in the next room may be about to receive a unit meant for this client. The blood bank and that client's nurse must know now to prevent a second reaction. The event report follows once both clients are safe. No unit is relabeled or hung until the blood bank reviews the error.",
        sources: [SRC.tjc, SRC.brunner, { body: "Accreditation Canada", work: "Required Organizational Practices 2021 Handbook, Client Identification", year: 2021, url: "https://vitalitenb.ca/images/files/documents/medecins/2021_rop_handbook.pdf" }],
        canada: "The Joint Commission goals do not apply in Canada. Accreditation Canada's Client Identification practice requires at least two person-specific identifiers before any service, and a room or bed number is never one of them.",
      }),
      kind: "mc",
      options: [
        { text: "Relabel the unit with this client's name", why: "Relabeling hides the error and does nothing to protect the other client." },
        { text: "Complete the event report before any calls", why: "The report is needed but can wait. A second client may be at risk now." },
        { text: "Call the blood bank and the other client's nurse", why: "A switched unit may be about to reach the other client, so both need an alert now." },
        { text: "Hang this client's own unit when it arrives", why: "No further blood is given until the blood bank and provider review the reaction." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "RRP",
        topic: "Progress after a hemolytic reaction",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "At 1700 the nurse reviews the client's progress since the transfusion was stopped. Which findings show that the client's condition is improving? Select three.",
        rationale:
          "The BP has risen from 96/58 mmHg. The urine has cleared, which suggests less free hemoglobin. The back pain has eased from 7 of 10. The hemoglobin has fallen below the 7.2 g/dL (72 g/L) morning value, so red cell loss continues. New oozing can signal disseminated intravascular coagulation. A temperature above 38.4°C shows the fever is still rising.",
        sources: [SRC.brunner, SRC.nhsn],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "BP 126/78 mmHg", why: "The BP has recovered from 96/58 mmHg, which shows better perfusion." },
        { text: "Hemoglobin 6.8 g/dL (68 g/L)", why: "The hemoglobin has fallen below 7.2 g/dL (72 g/L), so red cell loss continues." },
        { text: "Urine in the tubing now light yellow", why: "Clearing urine suggests less free hemoglobin is reaching the kidneys." },
        { text: "New oozing at the old IV site", why: "New oozing can signal disseminated intravascular coagulation after hemolysis." },
        { text: "Low back pain 1 of 10", why: "Back pain has eased from 7 of 10, which fits less ongoing hemolysis." },
        { text: "Temperature 38.9°C (102.0°F)", why: "The temperature is higher than the 38.4°C reading at 1312." },
      ],
      correct: [0, 2, 4],
    },
  ],
};
