import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c04-4";

const TRANSFUSION_REF = "Red cell transfusion threshold in upper gastrointestinal bleeding: hemoglobin 7 g/dL (70 g/L).";

/** Case 4. Intensive care unit, then medical unit. Adult with blood loss from the upper gut. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "An Early Admission to Critical Care",
  intro:
    "A 58-year-old man is admitted to the intensive care unit at 0600. He vomited blood at home at 0400 and felt faint. He has taken naproxen for low back pain for 2 months. He drinks 4 to 6 cans of beer most evenings.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Low back pain from spinal osteoarthritis.",
        "Naproxen 500 mg by mouth twice daily, with an extra dose on bad days.",
        "Aspirin 81 mg by mouth daily, started on his own for heart health.",
        "Atorvastatin 20 mg by mouth daily for high cholesterol.",
        "Amlodipine 10 mg by mouth daily for hypertension.",
        "Acetaminophen 500 mg by mouth as needed.",
        "Weight 84 kg. No allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0600"],
        rows: [
          ["Temperature", "36.6°C (97.9°F)"],
          ["Heart rate", "118/minute, lying"],
          ["Respiratory rate", "22/minute"],
          ["BP", "104/66 mmHg, lying"],
          ["SpO2", "97% on room air"],
        ],
      },
    },
    {
      title: "Orders",
      text: [
        "NPO.",
        "Two large-bore IV catheters.",
        "0.9% sodium chloride 1000 mL IV bolus.",
        "Pantoprazole 80 mg IV now, then 8 mg/hour IV infusion.",
        "Type and crossmatch for 2 units of packed red blood cells.",
        "Hemoglobin every 4 hours.",
        "Upper endoscopy at 1000.",
        "Alcohol withdrawal assessment every 4 hours.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Signs of ongoing blood loss",
        cjmm: "recognize",
        difficulty: 2,
        refs: ["Orthostatic heart rate rise that suggests low blood volume: 20/minute or more."],
        stem: "Half an hour after his arrival in the unit, the critical care nurse writes the 0630 bedside note shown. Click to highlight the findings that require follow-up.",
        rationale:
          "Bright red vomit shows active bleeding in the upper gut. Black, tarry stool shows blood that has passed through the bowel. Cool, clammy skin and a capillary refill of 4 seconds show poor perfusion. A heart rate rise from 118/minute to 140/minute on sitting up suggests low blood volume. Orientation, clear lungs, no chest pain and present bowel sounds are reassuring.",
        sources: [SRC.ugib, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Vomited 200 mL of bright red blood at 0615]]. [[Alert and oriented to person, place and time]]. [[Black, tarry stool on the bed pad]]. [[Skin cool and clammy]]. [[Lungs clear in all fields]]. [[Capillary refill 4 seconds]]. [[Denies chest pain]]. [[Heart rate rose from 118/minute to 140/minute when he sat up]]. [[Bowel sounds present in all four quadrants]].",
      spans: [
        { text: "Vomited 200 mL of bright red blood at 0615", why: "Bright red vomit shows active bleeding in the upper gut." },
        { text: "Alert and oriented to person, place and time", why: "Intact orientation shows the brain is still well perfused." },
        { text: "Black, tarry stool on the bed pad", why: "Tarry stool shows blood that has been digested in the bowel." },
        { text: "Skin cool and clammy", why: "Cool, clammy skin reflects vasoconstriction from blood loss." },
        { text: "Lungs clear in all fields", why: "Clear lungs show no aspiration or fluid overload at present." },
        { text: "Capillary refill 4 seconds", why: "A slow refill shows poor peripheral perfusion." },
        { text: "Denies chest pain", why: "The absence of chest pain is reassuring in a client with blood loss." },
        { text: "Heart rate rose from 118/minute to 140/minute when he sat up", why: "A postural rise in heart rate of 20/minute or more suggests low blood volume." },
        { text: "Bowel sounds present in all four quadrants", why: "Present bowel sounds are an expected finding." },
      ],
      correct: [0, 2, 3, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Home medications that raise upper gut bleeding risk",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse reviews the client's home medication list with him. For each medication, specify whether it raises the risk of upper gastrointestinal bleeding or does not raise the risk.",
        rationale:
          "Naproxen blocks the prostaglandins that protect the stomach lining. Extra doses raise the risk further. Low-dose aspirin adds to the injury and impairs platelets. Taking an NSAID with aspirin raises the risk more than either alone. Atorvastatin, amlodipine and acetaminophen do not raise the risk of ulcer bleeding.",
        sources: [SRC.nsaid, SRC.ugib],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises the risk", "Does not raise the risk"],
      rows: [
        { text: "Naproxen 500 mg twice daily with extra doses", correct: [0], why: "NSAIDs block prostaglandins that protect the stomach lining." },
        { text: "Atorvastatin 20 mg daily", correct: [1], why: "A statin does not injure the stomach lining." },
        { text: "Aspirin 81 mg daily", correct: [0], why: "Even low-dose aspirin injures the stomach lining and impairs platelets." },
        { text: "Amlodipine 10 mg daily", correct: [1], why: "This calcium channel blocker does not raise ulcer bleeding risk." },
        { text: "Acetaminophen 500 mg as needed", correct: [1], why: "Acetaminophen does not block the prostaglandins that protect the stomach." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority risk with active bleeding",
        cjmm: "prioritize",
        difficulty: 4,
        stem: "The 0630 laboratory results are posted. At 0645 the BP is 94/60 mmHg lying down and the heart rate is 124/minute. Complete the following sentence by choosing from the lists of options.",
        tabs: [
          {
            title: "Laboratory Results",
            table: {
              head: ["Test", "0630", "Reference range"],
              rows: [
                ["Hemoglobin", "7.9 g/dL (79 g/L)", "13.5 to 17.5"],
                ["Hematocrit", "24%", "41 to 50"],
                ["BUN", "46 mg/dL (16.4 mmol/L)", "7 to 20"],
                ["Creatinine", "1.0 mg/dL (88 micromol/L)", "0.7 to 1.3"],
                ["INR", "1.0", "0.8 to 1.2"],
              ],
            },
          },
        ],
        rationale:
          "The hemoglobin is 7.9 g/dL. The BP has fallen from 104/66 mmHg to 94/60 mmHg while the heart rate has risen to 124/minute. These show ongoing blood loss and a threat of hypovolemic shock. A BUN of 46 mg/dL with a normal creatinine fits digested blood in the gut, not kidney injury. Clear lungs make overload unlikely.",
        sources: [SRC.ugib, SRC.brunner, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report SI units only, so hemoglobin reads 79 g/L, hematocrit 0.24 L/L and urea 16.4 mmol/L in place of BUN. The Medical Council of Canada urea range is 2.1 to 8.0 mmol/L.",
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The client is at highest risk for {0} as evidenced by {1}.",
      blanks: [
        {
          options: [
            { text: "acute kidney injury", why: "His creatinine of 1.0 mg/dL (88 micromol/L) is within range." },
            { text: "hypovolemic shock", why: "Ongoing blood loss with a falling BP and fast pulse threatens perfusion." },
            { text: "fluid volume overload", why: "He is losing volume, and his lungs are clear." },
            { text: "hepatic encephalopathy", why: "He is oriented, and an INR of 1.0 does not suggest liver failure." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a creatinine of 1.0 mg/dL", why: "A creatinine of 1.0 mg/dL (88 micromol/L) is normal." },
            { text: "an INR of 1.0", why: "A normal INR does not point to shock." },
            { text: "clear breath sounds", why: "Clear lungs do not point to shock." },
            { text: "a BP falling to 94/60 mmHg", why: "A falling BP with a rising pulse shows failing compensation for blood loss." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Mouth care and comfort after vomiting blood",
        cjmm: "generate",
        process: "caring",
        difficulty: 2,
        stem: "Endoscopy is planned for 1000 and the client is NPO. He has dried blood on his lips and says his mouth tastes of blood. He feels nauseated. Which comfort and hygiene measures should the nurse include? Select all that apply.",
        rationale:
          "Blood in the mouth and nausea cause distress and can trigger vomiting. Mouth care with water removes blood. An emesis basin in reach gives him control. A raised head eases nausea and lowers aspiration risk. Clean linens remove the sight and smell of blood. He is NPO, so ice chips wait. Alcohol mouthwash dries the mucosa. Lying flat raises aspiration risk.",
        sources: [SRC.brunner, SRC.potter],
      }),
      kind: "sata",
      options: [
        { text: "Offer ice chips to ease his dry, bloody mouth", why: "He is NPO before endoscopy, so nothing is given by mouth." },
        { text: "Give mouth care with swabs and water", why: "Mouth care removes blood and eases the taste." },
        { text: "Keep an emesis basin and tissues within reach", why: "He can manage nausea or vomiting quickly and with less distress." },
        { text: "Offer a mouthwash that contains alcohol", why: "Alcohol dries and irritates the oral mucosa." },
        { text: "Raise the head of the bed to at least 30 degrees", why: "A raised head eases nausea and lowers aspiration risk if he vomits." },
        { text: "Position him flat on his back so he can rest", why: "Lying flat raises aspiration risk if he vomits again." },
        { text: "Change his soiled gown and linens", why: "Clean linens remove the sight and smell of blood." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Safety check before a red cell transfusion",
        cjmm: "action",
        difficulty: 3,
        stem: "At 0800 the hemoglobin is 6.8 g/dL (68 g/L). The primary health care provider prescribes 1 unit of packed red blood cells. The pantoprazole infusion runs through one IV catheter. The unit arrives from the blood bank. Which action should the nurse take before starting the transfusion?",
        refs: [TRANSFUSION_REF],
        rationale:
          "A hemoglobin of 6.8 g/dL is below the 7 g/dL (70 g/L) threshold for transfusion in upper gastrointestinal bleeding. The client and the unit must be identified at the bedside before starting. Most ABO-incompatible reactions come from identification errors. Only 0.9% sodium chloride may run with blood. Medications may not share its tubing. The rate starts slowly.",
        sources: [SRC.blood, SRC.ugib, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report hemoglobin in g/L only. The result reads 68 g/L, below the 70 g/L transfusion threshold given in the item.",
      }),
      kind: "mc",
      options: [
        { text: "Prime the blood tubing with 5% dextrose in water", why: "Only 0.9% sodium chloride may be infused with red cells." },
        { text: "Connect the blood to the pantoprazole infusion line", why: "No medication may run through the same tubing as blood." },
        { text: "Confirm the client's identity against the unit at the bedside", why: "Identification errors are the main cause of ABO-incompatible transfusion." },
        { text: "Run the first 15 minutes at the full infusion rate", why: "The rate starts slowly because severe reactions can follow a small volume." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Evaluating statements about alcohol use",
        cjmm: "evaluate",
        process: "communication",
        difficulty: 3,
        stem: "On day 4 the client is on the medical unit. Endoscopy found a bleeding ulcer in the duodenum, which was treated. His withdrawal scores have stayed low. The nurse talks with him about his drinking before discharge. For each statement, specify whether it shows progress or requires follow-up.",
        rationale:
          "Recognizing harm, booking counseling and asking a relative for support show readiness to change. Saying beer is not a real problem minimizes his drinking. Blaming his wife deflects concern. Claiming he can cut back whenever he chooses dismisses the need for help. These statements need further exploration before discharge.",
        sources: [SRC.varcarolis, SRC.mi],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows progress", "Requires follow-up"],
      rows: [
        { text: "\"I can see that my drinking is hurting my health.\"", correct: [0], why: "Recognizing harm from drinking is a statement in favor of change." },
        { text: "\"I only drink beer, so it is not a real problem.\"", correct: [1], why: "Minimizing his use shows he does not yet accept the problem." },
        { text: "\"I booked an appointment with an addiction counselor for Monday.\"", correct: [0], why: "Taking a concrete step shows commitment to change." },
        { text: "\"My wife makes it sound like I drink more than I do.\"", correct: [1], why: "Blaming others for concern about his drinking is a form of denial." },
        { text: "\"I asked my brother to come with me to a support group.\"", correct: [0], why: "Seeking support strengthens his plan for change." },
        { text: "\"I can cut back on my own whenever I decide to.\"", correct: [1], why: "Claiming easy control dismisses the need for help." },
      ],
    },
  ],
};
