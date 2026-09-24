import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c17-3";

/** Case 3. Medical unit. Adult woman with known SLE and new kidney involvement. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Admission With Fatigue and Swollen Ankles",
  intro:
    "A 34-year-old woman is admitted to a medical unit. She has had systemic lupus erythematosus for 6 years. For 2 weeks she has had fatigue, joint pain and swollen ankles. She stopped her hydroxychloroquine 3 months ago because she felt well.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 68 kg. Weight 65 kg at a clinic visit 2 weeks ago.",
        "Medications: hydroxychloroquine 200 mg by mouth daily, not taken for 3 months.",
        "No known drug allergies. Not pregnant by her report. Uses no birth control.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Admission"],
        rows: [
          ["Temperature", "37.9°C (100.2°F)"],
          ["Heart rate", "96/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "156/98 mmHg"],
          ["SpO2", "97% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Admission", "6 months ago", "Reference range"],
        rows: [
          ["Creatinine", "1.6 mg/dL (141 micromol/L)", "0.8 mg/dL (71 micromol/L)", "0.6 mg/dL (53 micromol/L) to 1.1 mg/dL (97 micromol/L)"],
          ["Urine protein to creatinine ratio", "2400 mg/g", "90 mg/g", "Below 150 mg/g"],
          ["Urine microscopy", "Red blood cell casts", "No casts", "No casts"],
          ["Complement C3", "0.52 g/L", "1.10 g/L", "0.9 to 1.8 g/L"],
          ["Anti-double-stranded DNA", "210 IU/mL", "20 IU/mL", "Below 30 IU/mL"],
          ["Potassium", "4.4 mEq/L (4.4 mmol/L)", "4.1 mEq/L (4.1 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["Platelets", "212 x 10^9/L", "240 x 10^9/L", "150 to 400 x 10^9/L"],
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
        topic: "Signs of active lupus on admission",
        cjmm: "recognize",
        difficulty: 2,
        stem: "Her joints, skin, mouth and fluid status are examined on arrival, and the note is shown below. Which findings suggest active lupus? Click to highlight them.",
        rationale:
          "Active lupus can show in the skin, mucosa, joints and kidneys. A rash over the cheeks and nose and painless palate ulcers are skin and mucosal signs. Swollen, painful wrists and knuckles show inflammatory arthritis. Foamy urine, ankle edema, a weight gain of 3 kg and a BP of 156/98 mmHg point to protein loss and fluid retention from kidney involvement. Clear lungs, normal orientation and a brisk capillary refill do not suggest activity.",
        sources: [SRC.eular, SRC.kdigoLn],
      }),
      kind: "highlight",
      passage:
        "[[Red rash across both cheeks and the bridge of the nose]]. [[Two painless ulcers on the hard palate]]. [[Wrists and knuckles swollen and tender]]. [[Client reports foamy urine]]. [[Pitting edema 2+ in both ankles]]. [[Weight up 3 kg in 2 weeks]]. [[BP 156/98 mmHg]]. [[Alert and oriented to person, place and time]]. [[Lungs clear in all fields]]. [[Capillary refill 2 seconds]].",
      spans: [
        { text: "Red rash across both cheeks and the bridge of the nose", why: "A rash in this pattern is a skin sign of lupus activity." },
        { text: "Two painless ulcers on the hard palate", why: "Painless oral ulcers are a mucosal sign of lupus activity." },
        { text: "Wrists and knuckles swollen and tender", why: "Swollen, tender small joints show inflammatory arthritis from lupus." },
        { text: "Client reports foamy urine", why: "Foamy urine suggests heavy protein loss through the kidneys." },
        { text: "Pitting edema 2+ in both ankles", why: "Edema reflects fluid retention and low protein from kidney involvement." },
        { text: "Weight up 3 kg in 2 weeks", why: "A gain from 65 kg to 68 kg in 2 weeks reflects fluid retention." },
        { text: "BP 156/98 mmHg", why: "High BP with edema in lupus can signal kidney involvement." },
        { text: "Alert and oriented to person, place and time", why: "Normal orientation does not suggest nervous system involvement." },
        { text: "Lungs clear in all fields", why: "Clear lungs do not suggest pleurisy or fluid in the lungs." },
        { text: "Capillary refill 2 seconds", why: "A capillary refill of 2 seconds is normal perfusion." },
      ],
      correct: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Reading kidney and immune markers in lupus",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse compares the admission laboratory results with those from 6 months ago. For each admission result, specify what it most directly measures.",
        rationale:
          "Creatinine doubled from 0.8 mg/dL (71 micromol/L) to 1.6 mg/dL (141 micromol/L), which shows falling filtration. A urine protein to creatinine ratio of 2400 mg/g shows heavy protein loss. Red blood cell casts form in the kidney tubules and point to glomerular inflammation. A low C3 shows complement being used up by immune complexes. A rise in anti-double-stranded DNA to 210 IU/mL tracks immune activity. Potassium and platelets are within their ranges.",
        sources: [SRC.kdigoLn, SRC.eular, { body: "British Columbia Ministry of Health, Guidelines and Protocols Advisory Committee", work: "Chronic Kidney Disease: Identification, Evaluation and Management of Adult Patients (BC Guidelines)", year: 2026, url: "https://www2.gov.bc.ca/gov/content/health/practitioner-professional-resources/bc-guidelines/chronic-kidney-disease" }],
        canada:
          "Canadian labs report the urine protein to creatinine ratio in mg/mmol. A ratio of 2400 mg/g is about 270 mg/mmol, far above the 15 mg/mmol normal limit in the BC Guidelines.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Kidney damage", "Immune activity", "Within expected limits"],
      rows: [
        { text: "Creatinine 1.6 mg/dL (141 micromol/L)", correct: [0], why: "A creatinine that doubled shows a drop in kidney filtration." },
        { text: "Urine protein to creatinine ratio 2400 mg/g", correct: [0], why: "A ratio far above 150 mg/g shows protein leaking through damaged glomeruli." },
        { text: "Red blood cell casts in the urine", correct: [0], why: "Casts form in the tubules and show inflammation of the glomeruli." },
        { text: "Complement C3 0.52 g/L", correct: [1], why: "A low C3 shows complement consumed by immune complexes." },
        { text: "Anti-double-stranded DNA 210 IU/mL", correct: [1], why: "A rising antibody level tracks lupus immune activity." },
        { text: "Potassium 4.4 mEq/L (4.4 mmol/L)", correct: [2], why: "Potassium is within the 3.5 to 5.0 mEq/L range." },
        { text: "Platelets 212 x 10^9/L", correct: [2], why: "Platelets are within the 150 to 400 x 10^9/L range." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting the priority problem in a lupus flare",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse sets priorities for the first shift. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Kidney involvement can lead to lasting kidney failure, so it outranks the other problems. Creatinine doubled in 6 months and protein loss is heavy. The rash, the joint pain and the fatigue all need care. None of them threatens an organ in the same way. The kidney problem is the one that needs prompt treatment and close monitoring.",
        sources: [SRC.kdigoLn],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The priority problem for this client is {0}, as shown by {1}.",
      blanks: [
        {
          options: [
            { text: "declining kidney function", why: "Lupus in the kidney threatens lasting organ damage, so it comes first." },
            { text: "joint pain and stiffness", why: "Joint pain needs comfort care but does not threaten an organ." },
            { text: "a facial skin rash", why: "The rash needs care but does not threaten an organ." },
            { text: "fatigue and low energy", why: "Fatigue needs rest planning but is not the most urgent problem." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "a creatinine that doubled", why: "A rise from 0.8 mg/dL (71 micromol/L) to 1.6 mg/dL (141 micromol/L) shows filtration has fallen by about half." },
            { text: "the rash across the cheeks", why: "The rash is a skin sign and does not show kidney decline." },
            { text: "tender wrists and knuckles", why: "Joint tenderness is not a measure of kidney function." },
            { text: "ulcers on the hard palate", why: "Palate ulcers are a mucosal sign and do not show kidney decline." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Plan for pulse steroids and mycophenolate",
        cjmm: "generate",
        difficulty: 3,
        stem: "A kidney biopsy confirms active lupus nephritis. The primary health care provider writes the prescriptions below. Which actions should the nurse include in the plan of care? Select all that apply.",
        tabs: [
          {
            title: "Orders",
            text: [
              "Methylprednisolone 500 mg IV daily for 3 days, then prednisone by mouth.",
              "Mycophenolate mofetil 1000 mg by mouth twice daily.",
              "Restart hydroxychloroquine 200 mg by mouth daily.",
              "Lisinopril 10 mg by mouth daily.",
              "Pregnancy test. Daily weight. BP every 4 hours.",
            ].join("\n"),
          },
        ],
        rationale:
          "High-dose steroids raise blood glucose, so glucose is checked. Daily weight and BP track fluid and the response to lisinopril. Mycophenolate causes pregnancy loss and birth defects, so a negative pregnancy test comes before the first dose. Immunosuppression raises infection risk. Hydroxychloroquine is advised for nearly everyone with lupus and is restarted. A salt substitute holds potassium, which lisinopril also raises. Live vaccines are avoided during immunosuppression.",
        sources: [SRC.cellcept, SRC.eular, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Monitor capillary blood glucose", why: "High-dose methylprednisolone raises blood glucose." },
        { text: "Hold hydroxychloroquine during the steroid doses", why: "Hydroxychloroquine is advised for nearly all clients with lupus and is given with other treatment." },
        { text: "Confirm a negative pregnancy test first", why: "Mycophenolate harms a fetus, so pregnancy is ruled out before the first dose." },
        { text: "Offer a potassium salt substitute", why: "Salt substitutes hold potassium, and lisinopril also raises potassium." },
        { text: "Track daily weight and BP", why: "Weight and BP show fluid status and the response to lisinopril." },
        { text: "Plan a live varicella vaccine dose", why: "Live vaccines are avoided during high-dose immunosuppression." },
        { text: "Teach her to report fever or sore throat", why: "Steroids and mycophenolate lower resistance to infection." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Handling mycophenolate tablets",
        cjmm: "action",
        difficulty: 3,
        stem: "The pregnancy test is negative. The nurse prepares the first dose of mycophenolate mofetil, two 500 mg tablets. Which action by the nurse is appropriate?",
        rationale:
          "The label states that mycophenolate tablets are not crushed. The powder can harm a fetus and is kept off the skin and out of the air. The tablets are given whole with water. Crushing, splitting or dissolving the tablets exposes the nurse and others to the drug. None of these is needed for a client who can swallow.",
        sources: [SRC.cellcept],
      }),
      kind: "mc",
      options: [
        { text: "Give the tablets whole with water", why: "Whole tablets keep the drug powder from reaching the nurse or the air." },
        { text: "Crush the tablets and mix them in applesauce", why: "Crushing releases a powder that can harm a fetus on contact or inhalation." },
        { text: "Split each tablet to ease swallowing", why: "Splitting exposes the drug powder. The tablets are given whole." },
        { text: "Dissolve the tablets in juice first", why: "Dissolving handles the drug outside the tablet coating and is not advised." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Low-sodium meal choices",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The dietitian and the nurse teach the client a low-sodium diet to help control her edema and BP. The client chooses meals for the next day from the menu. Which three choices show understanding? Select three.",
        rationale:
          "Fresh foods cooked without added salt are low in sodium. Grilled chicken with fresh vegetables, oatmeal with fresh berries and baked fish with rice and lemon all fit. Canned soup, cured ham and frozen pizza are high in sodium. Instant noodles with the seasoning packet are also high in sodium. Sodium limits help control fluid retention and high BP.",
        sources: [SRC.brunner, SRC.kdigoLn],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Canned chicken noodle soup", why: "Canned soups are high in sodium." },
        { text: "Grilled chicken with fresh vegetables", why: "Fresh foods cooked without salt are low in sodium." },
        { text: "Ham and cheese sandwich", why: "Cured ham and processed cheese are high in sodium." },
        { text: "Oatmeal with fresh berries", why: "Plain oatmeal and fresh fruit are low in sodium." },
        { text: "Frozen pepperoni pizza", why: "Frozen pizza and cured pepperoni are high in sodium." },
        { text: "Baked fish with rice and lemon", why: "Lemon adds flavor without salt, and fresh fish is low in sodium." },
        { text: "Instant noodles with the seasoning", why: "Seasoning packets are high in sodium." },
      ],
      correct: [1, 3, 5],
    },
  ],
};
