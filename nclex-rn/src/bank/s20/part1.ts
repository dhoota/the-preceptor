import type { Item } from "@/engine/types";
import { ACR_CONTRAST, ADA_DX, CDC_TST, FREIFELD, HINKLE, INS, JARVIS, JENSEN_TB, PAGANA, USMSTF, WANG_CONTRAST, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s20-01", {
      topic: "Timing a split-dose bowel preparation",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A client is scheduled for an outpatient colonoscopy at 1100 tomorrow. The prescription is a split-dose bowel preparation. The client takes the first half at 1800 today. At what time should the nurse teach the client to start the second half?",
      rationale:
        "The second half of a split-dose preparation starts 4 to 6 hours before the colonoscopy. It is finished at least 2 hours before the procedure. For a start at 1100, a 0600 start fits that window. Taking the second half close to the procedure clears fluid from the right colon. Late intake leaves liquid in the stomach before sedation.",
      refs: ["The second half of a split-dose bowel preparation starts 4 to 6 hours before colonoscopy and is finished at least 2 hours before it."],
      sources: [USMSTF],
    }),
    kind: "mc",
    options: [
      { text: "2300 tonight", why: "Starting at 2300 makes this a full evening dose. The split benefit of a morning dose is lost." },
      { text: "0600 tomorrow", why: "0600 falls within 4 to 6 hours of an 1100 start and leaves time to finish 2 hours before." },
      { text: "0930 tomorrow", why: "Starting at 0930 cannot be finished at least 2 hours before 1100." },
      { text: "1030 tomorrow", why: "Starting at 1030 leaves fluid in the stomach when sedation begins at 1100." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s20-02", {
      topic: "Care after radial artery catheterization",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client returns to the unit after cardiac catheterization through the right radial artery. A compression band is on the right wrist. Which actions should the nurse take? Select all that apply.",
      rationale:
        "After radial access the main risks are bleeding at the site and loss of flow to the hand from radial artery occlusion. The nurse checks hand color, warmth and sensation. The nurse compares both radial pulses. The band is loosened in steps by protocol. Radial access does not need flat bed rest. The right arm is spared from cuff pressure, and the wrist stays straight.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Check the right hand for color and warmth", why: "Color and warmth show whether blood still reaches the hand past the puncture." },
      { text: "Keep the client flat in bed for 6 hours", why: "Flat bed rest is used after femoral access. Radial access allows the client to sit up." },
      { text: "Take blood pressures on the right arm", why: "A cuff on the access arm adds pressure to the site and can cause bleeding or occlusion." },
      { text: "Compare the right and left radial pulses", why: "A weaker right pulse can signal radial artery occlusion or a hematoma." },
      { text: "Release band air in steps per protocol", why: "Stepwise release lowers bleeding risk and keeps the artery open." },
      { text: "Ask about numbness in the right fingers", why: "Numbness can signal nerve compression or poor flow to the hand." },
      { text: "Have the client flex the right wrist often", why: "Wrist flexion strains the puncture site. The wrist is kept straight." },
    ],
    correct: [0, 3, 4, 5],
  },
  {
    ...meta("rn-s20-03", {
      topic: "Seafood allergy before a contrast scan",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client is scheduled for a CT scan of the abdomen with IV iodinated contrast. During screening the client says, \"I break out in hives when I eat shrimp.\" The client has had two contrast scans before with no reaction. Which action should the nurse take?",
      rationale:
        "Shellfish allergy does not raise the risk of a contrast reaction more than any other allergy. Iodine is not the allergen in shellfish. This client also tolerated contrast twice before. The nurse records the food allergy and continues to prepare the client. Routine steroid premedication, cancelling the study and an allergist review are not needed for a food allergy.",
      sources: [WANG_CONTRAST, ACR_CONTRAST],
    }),
    kind: "mc",
    options: [
      { text: "Record the allergy and continue scan preparation", why: "A shellfish allergy is not a reason to avoid or premedicate for iodinated contrast." },
      { text: "Ask the provider to change to a noncontrast scan", why: "Changing the study loses diagnostic detail for a risk that shellfish allergy does not create." },
      { text: "Request a prescription for steroid premedication", why: "Premedication is not advised for allergies to other substances such as shellfish." },
      { text: "Hold the scan until an allergist sees the client", why: "An allergist review is not needed. The client had two contrast scans without a reaction." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s20-04", {
      topic: "High potassium in a hemolyzed sample",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "Blood for a metabolic panel was drawn after a long tourniquet time while the client clenched a fist. The laboratory reports potassium 6.4 mEq/L (6.4 mmol/L) with the comment \"specimen hemolyzed.\" Yesterday the potassium was 4.1 mEq/L (4.1 mmol/L). The cardiac rhythm is unchanged from baseline. Which action should the nurse take?",
      rationale:
        "Hemolysis releases potassium from red cells into the sample. A long tourniquet time and fist clenching can also raise the measured potassium. The value of 6.4 mEq/L does not fit a level of 4.1 mEq/L yesterday and an unchanged rhythm. The nurse requests a new sample drawn without these errors before any treatment. Treating a false result exposes the client to low potassium.",
      refs: ["The normal serum potassium range for adults is 3.5 to 5 mEq/L (3.5 to 5 mmol/L)."],
      canada: "Canadian labs report potassium in mmol/L only, so this result reads 6.4 mmol/L against 4.1 mmol/L yesterday. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the reference range.",
      sources: [PAGANA, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Call the rapid response team for hyperkalemia", why: "The client is stable with an unchanged rhythm. The value is likely false from hemolysis." },
      { text: "Restrict potassium-rich foods for the day", why: "Diet change is not needed until a true high potassium is confirmed." },
      { text: "Ask the provider for a potassium-binding drug", why: "Treating a likely false value can drop the true potassium below the normal range." },
      { text: "Request a new blood sample for potassium", why: "A properly drawn sample shows whether the potassium of 6.4 mEq/L is real." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s20-05", {
      topic: "Absolute neutrophil count",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client receiving chemotherapy has a white blood cell count of 2400 cells/mm3. The differential shows segmented neutrophils 15% and band neutrophils 5%. Calculate the client's absolute neutrophil count.",
      rationale:
        "The absolute neutrophil count is the white cell count times the share of segmented and band neutrophils. Segs of 15% plus bands of 5% make 20%. 2400 times 20% is 480 cells/mm3. A count below 500 cells/mm3 is severe neutropenia. The client needs neutropenic precautions and prompt reporting of any fever.",
      refs: ["An absolute neutrophil count below 500 cells/mm3 is severe neutropenia."],
      calc: { expr: "2400 * (15 + 5) / 100", answer: 480, unit: "cells/mm3", round: 0, steps: ["15 + 5 = 20", "2400 * 20 / 100 = 480"] },
      canada: "Canadian labs report neutrophils as x 10^9/L. This count reads 0.48 x 10^9/L, and the severe neutropenia cutoff of 500 cells/mm3 reads 0.5 x 10^9/L.",
      sources: [FREIFELD, PAGANA, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "120 cells/mm3", why: "This counts the 5% bands alone and leaves out the segmented neutrophils." },
      { text: "360 cells/mm3", why: "This counts the 15% segs alone and leaves out the bands." },
      { text: "480 cells/mm3", why: "2400 times the combined 20% of segs and bands gives 480." },
      { text: "1920 cells/mm3", why: "This subtracts the neutrophils from the total and counts the other white cells." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s20-06", {
      topic: "Order of an abdominal examination",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse examines the abdomen of a client admitted with lower abdominal pain. Place the examination steps in the order the nurse should perform them.",
      rationale:
        "The abdomen is inspected first. Listening comes next because percussion and palpation can change bowel sounds. Percussion follows to assess tone and organ size. Palpation comes last, light before deep, with the tender area examined last. Rebound testing is painful and is not part of the routine sequence.",
      sources: [JARVIS],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Palpate the tender area first", why: "Starting at the tender area causes guarding and hides other findings." },
      { text: "Inspect the abdomen", why: "Inspection comes first and does not disturb the bowel." },
      { text: "Percuss the four quadrants", why: "Percussion follows listening so bowel sounds are heard unchanged." },
      { text: "Auscultate the bowel sounds", why: "Listening comes before touch because touch can alter bowel sounds." },
      { text: "Palpate lightly, then deeply", why: "Palpation comes last, moving from light to deep pressure." },
      { text: "Press and release for rebound", why: "Rebound testing is painful and is not part of the routine sequence." },
    ],
    correct: [1, 3, 2, 4],
  },
  {
    ...meta("rn-s20-07", {
      topic: "Low oxygen saturation on day 1 after surgery",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 3,
      stem: "A client is 1 day after an open bowel resection. SpO2 is 91% on room air, down from 96% before surgery. Breath sounds are diminished at both lung bases. The client splints the incision and has used the incentive spirometer twice. Temperature is 37.4°C (99.3°F). Both calves are soft and nontender. Which problem is most likely?",
      rationale:
        "Shallow breathing after an abdominal incision lets small airways at the bases close. Diminished breath sounds at both bases, splinting and little spirometer use fit atelectasis. The SpO2 fall from 96% to 91% is mild. The nurse coaches deep breathing and spirometer use. Soft, nontender calves make a leg clot less likely.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Fluid overload from IV fluids", why: "Fluid overload causes crackles and edema. The stem reports diminished sounds, not crackles." },
      { text: "Pneumonia from aspiration", why: "Aspiration pneumonia shows fever and crackles in one area. The temperature is 37.4°C." },
      { text: "Atelectasis at both lung bases", why: "Splinting, low spirometer use and diminished basal sounds fit collapsed alveoli." },
      { text: "Pulmonary embolism from a leg clot", why: "Embolism often starts suddenly with chest pain. The calves here are soft and nontender." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s20-08", {
      topic: "Preparing for an oral glucose tolerance test",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "An adult client is scheduled for a 2-hour 75 g oral glucose tolerance test tomorrow morning. The nurse teaches the client how to prepare. Which two statements by the client show understanding? Select two.",
      rationale:
        "The test starts after an overnight fast of at least 8 hours. The client eats a normal amount of carbohydrate for 3 days before. Low carbohydrate intake can falsely raise the result. During the test the client stays seated and does not smoke. Activity and smoking change glucose levels. The glucose drink is taken quickly, not over an hour.",
      refs: ["The oral glucose tolerance test follows an overnight fast of at least 8 hours. Carbohydrate intake of at least 150 g/day is kept for 3 days before the test."],
      sources: [ADA_DX, PAGANA],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "\"I will have only water for 8 hours before the test.\"", why: "An overnight fast of at least 8 hours is needed for a valid fasting value." },
      { text: "\"I will take a walk while waiting between blood draws.\"", why: "Exercise lowers glucose during the test. The client stays seated." },
      { text: "\"I will eat my usual carbohydrates for the 3 days before.\"", why: "Low carbohydrate intake before the test can falsely raise the result." },
      { text: "\"I will sip the glucose drink slowly over the first hour.\"", why: "The drink is finished within a few minutes so the timing is standard." },
      { text: "\"I will have one cigarette during the test to stay calm.\"", why: "Smoking changes glucose levels and is avoided during the test." },
      { text: "\"I will drink coffee with the glucose to settle my stomach.\"", why: "Only water is allowed. Coffee can change glucose results." },
    ],
    correct: [0, 2],
  },
  {
    ...meta("rn-s20-09", {
      topic: "Sudden distress after central line removal",
      cjmm: "generate",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "The nurse removes an internal jugular central venous catheter while the client sits upright. Seconds later the client becomes short of breath and reports chest pain. Heart rate is 128/minute, BP 84/50 mmHg and SpO2 85%. A churning sound is heard over the heart. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Removal of a neck catheter while upright lets air enter the vein as the client breathes in. Sudden dyspnea, chest pain, low BP and a churning sound over the heart fit venous air embolism. The nurse covers the site, places the client on the left side with the head down and gives 100% oxygen. Oxygen saturation and blood pressure show whether the air lock is resolving.",
      refs: ["Venous air embolism is managed by closing the entry site, a left side head-down position when not contraindicated and 100% oxygen."],
      sources: [INS],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Tension pneumothorax", why: "A pneumothorax is a risk at insertion. It does not cause a churning sound over the heart." },
      { text: "Venous air embolism", why: "Upright removal, sudden dyspnea, hypotension and a churning murmur fit air in the heart." },
      { text: "Vasovagal reaction", why: "A vasovagal reaction slows the heart. The heart rate here is 128/minute." },
      { text: "Acute myocardial infarction", why: "Infarction does not explain onset seconds after catheter removal or the churning sound." },
    ],
    actions: [
      { text: "Place on the left side with head down", why: "This position traps air in the right atrium away from the pulmonary outflow." },
      { text: "Raise the head of the bed fully", why: "Sitting upright lets more air move into the pulmonary artery." },
      { text: "Give 100% oxygen by mask", why: "Oxygen treats hypoxemia and helps the air bubble shrink." },
      { text: "Remove the dressing to inspect the site", why: "An occlusive dressing stops more air from entering and stays on." },
      { text: "Give sublingual nitroglycerin", why: "Nitroglycerin would lower an already low BP of 84/50 mmHg." },
    ],
    parameters: [
      { text: "Serum potassium", why: "Potassium does not reflect air embolism or its response to treatment." },
      { text: "Oxygen saturation", why: "SpO2 shows whether gas exchange improves as the air clears." },
      { text: "Urine specific gravity", why: "Specific gravity does not guide care in this emergency." },
      { text: "Blood pressure", why: "BP shows whether right heart outflow is recovering." },
      { text: "Capillary glucose", why: "Glucose does not reflect air embolism." },
    ],
    correct: { condition: 1, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s20-10", {
      topic: "Reading a tuberculin skin test",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 3,
      stem: "A newly hired nursing assistant had a tuberculin skin test placed on the forearm 60 hours ago. The assistant has no known exposure to tuberculosis. Today the site shows redness 14 mm across and a firm raised area 8 mm across. How should the nurse interpret the result?",
      rationale:
        "The test is read 48 to 72 hours after placement, so 60 hours is within the window. Only induration, the firm raised area, is measured. Redness is ignored. For health care workers, 10 mm or more of induration is positive. Induration of 8 mm is a negative result for this worker.",
      refs: ["A tuberculin skin test is read 48 to 72 hours after placement. Induration, not redness, is measured. For health care workers, 10 mm or more of induration is positive."],
      canada: "The Canadian Tuberculosis Standards (8th edition, 2022) also read the TST at 48 to 72 hours and use 10 mm of induration as positive for people at low risk. Workers who will be retested get a two-step TST at baseline, with the second step 1 to 4 weeks later.",
      sources: [CDC_TST, JENSEN_TB, { body: "Campbell JR, Pease C, Daley P, Pai M, Menzies D. Canadian Thoracic Society and Public Health Agency of Canada", work: "Canadian Tuberculosis Standards, 8th edition. Chapter 4: Diagnosis of Tuberculosis Infection", year: 2022, url: "https://www.canada.ca/en/public-health/services/diseases/tuberculosis/health-professionals/canadian-tuberculosis-standards/diagnosis-tuberculosis-infection.html" }],
    }),
    kind: "mc",
    options: [
      { text: "A negative result", why: "Induration of 8 mm is below the 10 mm cutoff for health care workers." },
      { text: "A positive result", why: "This reads the 14 mm of redness. Redness is not measured." },
      { text: "Too early to read", why: "Reading starts at 48 hours. The test was placed 60 hours ago." },
      { text: "Too late to read", why: "The window closes at 72 hours. The test was placed 60 hours ago." },
    ],
    correct: 0,
  },
];
