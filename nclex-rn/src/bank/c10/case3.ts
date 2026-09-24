import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c10-3";

/** Case 3. Pediatric unit. Toddler with prolonged fever and mucocutaneous changes. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "A Toddler With a Week of Fever",
  intro:
    "A 2-year-old boy is admitted to the pediatric unit from the clinic. He has had a fever for 7 days that has not settled with acetaminophen. His parent says he is irritable and refuses to walk. He weighs 12.5 kg.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Immunizations up to date. First doses of the measles, mumps and rubella vaccine and the varicella vaccine were given at 12 months.",
        "Mild eczema since infancy.",
        "No known drug allergies. No sick contacts.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1000"],
        rows: [
          ["Temperature", "39.6°C (103.3°F)"],
          ["Heart rate", "158/minute"],
          ["Respiratory rate", "30/minute"],
          ["BP", "94/56 mmHg"],
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
        topic: "Mucocutaneous findings with prolonged fever",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse completes the admission assessment. Which findings are relevant to the child's current illness and need follow-up? Select all that apply.",
        rationale:
          "The child has had fever for 7 days. Red eyes without drainage, red cracked lips, swollen red hands and feet, a trunk rash and a large node on one side of the neck form a pattern that needs urgent follow-up. Together these point to a systemic vasculitis. Dry patches behind the knees fit his known eczema. Pearly gray eardrums are normal. A capillary refill of 2 seconds is normal.",
        sources: [SRC.kd, SRC.wong],
      }),
      kind: "sata",
      options: [
        { text: "Red eyes on both sides with no drainage", why: "Bilateral conjunctival redness without exudate is part of the pattern." },
        { text: "Dry patches of eczema behind both knees", why: "These patches fit his known eczema and are not new." },
        { text: "Red, cracked lips and a bright red tongue", why: "Lip and tongue changes are part of the pattern." },
        { text: "Swelling and redness of the hands and feet", why: "Swollen, red extremities are part of the pattern." },
        { text: "Tympanic membranes pearly gray with a light reflex", why: "Pearly gray eardrums are normal and rule out ear infection as a cause." },
        { text: "A firm 2 cm node on one side of the neck", why: "A single enlarged neck node is part of the pattern." },
        { text: "Capillary refill of 2 seconds in the fingers", why: "A refill of 2 seconds is normal." },
        { text: "Red, blotchy rash across the trunk", why: "A trunk rash with prolonged fever is part of the pattern." },
      ],
      correct: [0, 2, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Laboratory signs of systemic inflammation",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the admission laboratory results. For each result, specify whether it is consistent with the child's acute inflammatory illness or not related to it.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "Result", "Reference range"],
              rows: [
                ["White blood cells", "21 400/mm3", "6000 to 17 000"],
                ["Hemoglobin", "9.8 g/dL (98 g/L)", "10.5 to 13.5"],
                ["Erythrocyte sedimentation rate", "68 mm/hour", "0 to 10"],
                ["Albumin", "2.8 g/dL (28 g/L)", "3.5 to 5.0"],
                ["Alanine aminotransferase", "88 units/L", "5 to 45"],
                ["Urine white blood cells", "12/high power field, culture no growth", "0 to 5"],
                ["Sodium", "136 mEq/L (136 mmol/L)", "135 to 145"],
                ["Glucose", "94 mg/dL (5.2 mmol/L)", "70 to 99"],
              ],
            },
          },
        ],
        rationale:
          "A high white cell count and a raised sedimentation rate reflect acute inflammation. Anemia is common and resolves as the inflammation settles. A low albumin and a raised liver enzyme reflect inflamed tissues and leaky vessels. White cells in the urine with no growth on culture are sterile pyuria, which is common in this illness. Sodium and glucose are in range.",
        sources: [SRC.kd, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Consistent with the acute illness", "Not related to the acute illness"],
      rows: [
        { text: "White blood cells 21 400/mm3", correct: [0], why: "A high white count is typical in the acute stage." },
        { text: "Hemoglobin 9.8 g/dL (98 g/L)", correct: [0], why: "Mild anemia is common and settles with the inflammation." },
        { text: "Sedimentation rate 68 mm/hour", correct: [0], why: "A raised sedimentation rate is a near universal acute phase finding." },
        { text: "Albumin 2.8 g/dL (28 g/L)", correct: [0], why: "Low albumin is common and linked with more severe disease." },
        { text: "Urine white cells 12/high power field, no growth", correct: [0], why: "Sterile pyuria is common in this illness." },
        { text: "Sodium 136 mEq/L (136 mmol/L)", correct: [1], why: "This sodium is within the reference range." },
        { text: "Glucose 94 mg/dL (5.2 mmol/L)", correct: [1], why: "This glucose is within the reference range." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PA",
        topic: "Main complication of Kawasaki disease",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The primary health care provider diagnoses Kawasaki disease and orders an echocardiogram. Complete the following sentence by dragging the options to the blanks.",
        rationale:
          "Kawasaki disease is an acute vasculitis of medium-sized arteries. The coronary arteries are the main target. About one in four untreated children develop coronary artery aneurysms. This is why treatment starts within the first 10 days of fever and why the heart is imaged. The illness does not destroy beta cells, obstruct the upper airway or cause meningitis from bacteria.",
        sources: [SRC.kd, SRC.kd2024],
        refs: ["Treatment is ideally given within the first 10 days of fever."],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "Without prompt treatment the child is at greatest risk for {0} because the illness causes {1}.",
      targets: ["Complication", "Cause"],
      tokens: [
        { text: "meningitis from a bacterial infection", why: "Any meningitis in this illness is aseptic, and no bacterial source is found." },
        { text: "inflammation of medium-sized arteries", why: "Vasculitis of medium-sized arteries is the core process of this illness." },
        { text: "obstruction of the upper airway", why: "This illness inflames arteries and does not narrow the upper airway." },
        { text: "coronary artery aneurysms", why: "Inflamed coronary artery walls weaken and dilate without treatment." },
        { text: "destruction of pancreatic beta cells", why: "Beta cell destruction causes type 1 diabetes, not this illness." },
        { text: "acute kidney injury from low blood flow", why: "Sterile pyuria is common, but kidney injury is not the main risk and his BP is 94/56 mmHg." },
      ],
      correct: [3, 1],
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "First-line treatment of Kawasaki disease",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse prepares the plan of care for the first 24 hours of treatment. Which two prescriptions should the nurse anticipate? Select two.",
        rationale:
          "Standard first treatment is a single infusion of IV immune globulin together with aspirin by mouth. The immune globulin lowers the risk of coronary aneurysms. Aspirin is given at an anti-inflammatory dose in the acute phase. Ibuprofen blocks the antiplatelet effect of aspirin. There is no bacterial infection to treat with ceftriaxone. Live vaccines are delayed after immune globulin. Nothing suggests fluid overload.",
        sources: [SRC.kd, SRC.kd2024, { body: "Chen A, et al. Canadian Paediatric Society, Community Paediatrics Committee", work: "Kawasaki disease: Practical guidance on diagnosis and management. Paediatrics and Child Health 31(5):550", year: 2026, url: "https://cps.ca/en/documents/position/kawasaki-disease" }],
        canada:
          "Canadian guidance calls aspirin ASA. The Canadian Paediatric Society accepts either a moderate dose of 30 to 50 mg/kg/day divided every 6 hours or low-dose ASA of 3 to 5 mg/kg once daily from the start.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "IV immune globulin infusion", why: "Immune globulin given early lowers the risk of coronary aneurysms." },
        { text: "Ibuprofen by mouth every 6 hours", why: "Ibuprofen interferes with the antiplatelet action of aspirin." },
        { text: "IV ceftriaxone every 24 hours", why: "The urine culture shows no growth and no bacterial source is found." },
        { text: "Aspirin by mouth every 6 hours", why: "Aspirin at an anti-inflammatory dose is part of acute treatment." },
        { text: "Measles, mumps and rubella booster", why: "Live vaccines are deferred after high-dose immune globulin." },
        { text: "IV furosemide every 12 hours", why: "Nothing in the chart shows fluid overload." },
      ],
      correct: [0, 3],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Immune globulin dose volume",
        cjmm: "action",
        difficulty: 3,
        stem: "The provider prescribes IV immune globulin 2 g/kg as a single infusion over 12 hours. The child weighs 12.5 kg. The pharmacy supplies immune globulin 10 g in 100 mL. How many mL will the nurse infuse?",
        rationale:
          "The dose is 2 g/kg for a child of 12.5 kg, which is 25 g. Each 100 mL holds 10 g, so 25 g is 250 mL. The nurse checks vital signs often, most closely early in the infusion, and watches for fever, chills, rash and low BP. Live virus vaccines are postponed after this dose.",
        calc: { expr: "12.5 * 2 / 10 * 100", answer: 250, unit: "mL", round: 0, steps: ["12.5 * 2 = 25", "25 / 10 = 2.5", "2.5 * 100 = 250"] },
        sources: [SRC.kd, SRC.wong, { body: "Betschel SD, Warrington RJ, Schellenberg R", work: "Clinical experience with Octagam 10%, a solvent detergent virus inactivated intravenous immunoglobulin: a Canadian retrospective review of utilization. Allergy, Asthma and Clinical Immunology 12:32", year: 2016, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4962395/" }],
        canada:
          "In Canada immune globulin is supplied as a blood product. Canadian Blood Services, or Héma-Québec in Quebec, distributes it to hospital blood banks, which dispense it as prescribed.",
      }),
      kind: "mc",
      options: [
        { text: "25 mL", why: "This confuses the 25 g dose with a volume in mL." },
        { text: "125 mL", why: "This is half the prescribed dose of 2 g/kg." },
        { text: "250 mL", why: "25 g at 10 g per 100 mL is 250 mL." },
        { text: "2500 mL", why: "This is 10 times the correct volume from a decimal error." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Discharge teaching after Kawasaki disease",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 4,
        stem: "The fever settles after treatment. The child goes home on low-dose aspirin once daily. The nurse reviews what the parent says during discharge teaching. Click to highlight the statements that show a need for further teaching.",
        refs: ["Measles, mumps and varicella vaccines are deferred for 11 months after high-dose immune globulin."],
        rationale:
          "Ibuprofen blocks the antiplatelet effect of aspirin, and a returning fever should be reported. Measles, mumps and varicella vaccines are deferred for 11 months after high-dose immune globulin. Peeling of the fingertips is expected in the weeks after the fever. It does not mean the illness is worsening. Reporting exposure to influenza or chickenpox is correct because of the risk of Reye syndrome. Only the inactivated influenza vaccine is given with aspirin.",
        sources: [SRC.kd, SRC.wong],
      }),
      kind: "highlight",
      passage:
        "[[\"I will give his aspirin once a day with food.\"]]\n[[\"I can give ibuprofen if his fever comes back.\"]]\n[[\"His measles booster can be given next month.\"]]\n[[\"I will call if he is near anyone with chickenpox or the flu.\"]]\n[[\"He should get the flu shot, not the nasal spray.\"]]\n[[\"Peeling skin on his fingers means the illness is getting worse.\"]]\n[[\"We will keep his heart scan appointment in 2 weeks.\"]]",
      spans: [
        { text: "\"I will give his aspirin once a day with food.\"", why: "Daily low-dose aspirin with food is the plan and limits stomach upset." },
        { text: "\"I can give ibuprofen if his fever comes back.\"", why: "Ibuprofen blocks aspirin's antiplatelet effect, and a new fever needs a call." },
        { text: "\"His measles booster can be given next month.\"", why: "Live vaccines are deferred for 11 months after high-dose immune globulin." },
        { text: "\"I will call if he is near anyone with chickenpox or the flu.\"", why: "Aspirin during these infections raises the risk of Reye syndrome." },
        { text: "\"He should get the flu shot, not the nasal spray.\"", why: "Only inactivated influenza vaccine is given to a child taking aspirin." },
        { text: "\"Peeling skin on his fingers means the illness is getting worse.\"", why: "Fingertip peeling is an expected later finding, not a sign of worsening." },
        { text: "\"We will keep his heart scan appointment in 2 weeks.\"", why: "Repeat echocardiograms check the coronary arteries after the acute phase." },
      ],
      correct: [1, 2, 5],
    },
  ],
};
