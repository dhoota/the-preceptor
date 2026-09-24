import type { Item } from "@/engine/types";
import { ADA_DX, ADA_GOALS, ASA_FAST, ASGE, HINKLE, POTTER, SSC, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s19-31", {
      topic: "Confusion during a first dialysis run",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A client with newly diagnosed kidney failure is in the second hour of a first hemodialysis session. BUN before dialysis was 142 mg/dL (50.7 mmol/L). The client now reports a headache and nausea and seems restless and confused. BP is 138/84 mmHg. Which complication should the nurse suspect?",
      rationale:
        "A first dialysis session with a BUN of 142 mg/dL carries a high risk of disequilibrium syndrome. Urea falls faster in the blood than in the brain. Water moves into brain cells and causes cerebral edema. Headache, nausea, restlessness and confusion follow. The nurse notifies the provider, who may slow or stop the session.",
      canada: "Canadian labs report urea in mmol/L rather than BUN in mg/dL. A Canadian nurse would read this result as a urea of 50.7 mmol/L. The Medical Council of Canada lists 2.1 to 8.0 mmol/L as normal.",
      sources: [HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "mc",
    options: [
      { text: "Air embolism from the dialysis circuit", why: "Air embolism causes sudden dyspnea, chest pain and hypotension, not a gradual headache." },
      { text: "Hypotension from rapid fluid removal", why: "The BP of 138/84 mmHg does not show hypotension." },
      { text: "Dialysis disequilibrium syndrome", why: "Rapid urea removal in a first session shifts water into brain cells and causes headache, nausea and confusion." },
      { text: "Hyperkalemia from the dialysate", why: "Dialysis removes potassium. Hyperkalemia does not explain headache and confusion." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s19-32", {
      topic: "No void after spinal anesthesia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client had an open inguinal hernia repair under spinal anesthesia 7 hours ago. The client has not voided since surgery and reports lower abdominal fullness. Intermittent catheterization is prescribed as needed. What should the nurse do first?",
      rationale:
        "Spinal anesthesia and hernia repair raise the risk of urinary retention. The client has not voided in 7 hours and feels full. A bladder scan shows how much urine is retained. If the volume is high and the client still cannot void, the nurse catheterizes as prescribed. Scanning first avoids a needless catheter and its infection risk.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Insert an intermittent urinary catheter", why: "Catheterization comes after the bladder volume is confirmed." },
      { text: "Scan the bladder with a portable ultrasound", why: "A bladder scan measures the retained volume before any catheter is used." },
      { text: "Restrict oral fluids until the client voids", why: "Restricting fluids does not relieve retention and can cause dehydration." },
      { text: "Give the as-needed IV opioid for discomfort", why: "Opioids can worsen urinary retention and do not treat its cause." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s19-33", {
      topic: "Warning signs after polyp removal",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client had a colonoscopy with removal of a large polyp 2 hours ago. Which two findings need prompt follow-up by the nurse? Select two.",
      rationale:
        "Perforation and bleeding are the main risks after polyp removal. Severe abdominal pain with a rigid abdomen suggests perforation. A heart rate that rises from 76 to 128/minute suggests bleeding or perforation. Gas, mild cramping, drowsiness after sedation, thirst and a small streak of blood are expected.",
      sources: [ASGE, HINKLE],
    }),
    kind: "msn",
    select: 2,
    options: [
      { text: "Passing gas with mild abdominal cramping", why: "Gas and mild cramping come from air used to inflate the colon and are expected." },
      { text: "Severe pain with a rigid abdomen", why: "Severe pain and rigidity suggest bowel perforation." },
      { text: "Drowsy but rouses easily to voice", why: "Mild drowsiness after sedation is expected." },
      { text: "Heart rate 128/minute, was 76/minute", why: "A rising heart rate can signal bleeding or perforation." },
      { text: "Small streak of blood on the toilet tissue", why: "A small streak of blood after polyp removal is common." },
      { text: "Thirst after the bowel preparation", why: "Thirst after bowel preparation reflects fluid loss and is expected." },
    ],
    correct: [1, 3],
  },
  {
    ...meta("rn-s19-34", {
      topic: "Timed urine collection",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client is to collect a 24-hour urine specimen for creatinine clearance starting at 0700 today. Place the nurse's steps in order.",
      rationale:
        "A timed collection starts with an empty bladder. The client voids at 0700 and the nurse discards that urine. All urine for the next 24 hours goes into the chilled container. The client voids at 0700 the next day and that urine is added. If any urine is discarded, the collection restarts.",
      sources: [POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth"],
    tokens: [
      { text: "Save all urine in the chilled container", why: "Every void in the 24 hours goes into the container, kept cold." },
      { text: "Keep the 0700 void in the container", why: "Urine in the bladder at 0700 was made before the start time and is discarded." },
      { text: "Send the labeled container to the lab", why: "The labeled specimen goes to the laboratory after the final void." },
      { text: "Discard the 0700 void and note the time", why: "The collection starts with an empty bladder, so the first void is discarded." },
      { text: "Discard urine passed during the night", why: "Discarding any void during the period makes the collection incomplete." },
      { text: "Add the final void at 0700 tomorrow", why: "The final void at the end time completes the 24 hours." },
    ],
    correct: [3, 0, 5, 2],
  },
  {
    ...meta("rn-s19-35", {
      topic: "Emptying a closed wound drain",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 1,
      stem: "A client has a Jackson-Pratt drain after a mastectomy. The bulb is half full and round. After emptying and measuring the drainage, what should the nurse do next?",
      rationale:
        "A Jackson-Pratt drain works by gentle suction from a compressed bulb. A round bulb has lost its suction. After emptying and measuring the drainage, the nurse squeezes the bulb flat and closes the port while it is compressed. The bulb is then secured below the wound.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Squeeze the bulb flat and close the port", why: "Compressing the bulb before closing it restores the suction that pulls fluid from the wound." },
      { text: "Leave the bulb open to air to drain", why: "An open bulb has no suction, so fluid collects under the skin." },
      { text: "Fill the bulb with sterile saline", why: "Instilling fluid is not part of routine drain care." },
      { text: "Pin the bulb above the level of the wound", why: "The bulb is secured below the wound so gravity helps drainage." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s19-36", {
      topic: "Deterioration on day 2 after surgery",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      trend: true,
      stem: "A client is on day 2 after a gallbladder removal that was converted to an open procedure. The nurse reviews the flow sheet. Based on the trend, which condition should the nurse address first?",
      tabs: [
        {
          title: "Vital Signs",
          table: {
            head: ["Finding", "0800", "1200", "1600", "2000"],
            rows: [
              ["Temperature", "37.4°C (99.3°F)", "38.1°C (100.6°F)", "38.6°C (101.5°F)", "38.9°C (102.0°F)"],
              ["Heart rate (/minute)", "88", "102", "114", "126"],
              ["Respirations (/minute)", "18", "22", "24", "28"],
              ["BP (mmHg)", "128/76", "118/70", "104/62", "94/56"],
              ["Mental status", "Alert", "Alert", "Restless", "Confused"],
            ],
          },
        },
      ],
      rationale:
        "From 0800 to 2000 the temperature climbs to 38.9°C. The heart rate rises from 88 to 126/minute and respirations from 18 to 28/minute. The BP falls from 128/76 to 94/56 mmHg and the client becomes confused. Together these point to sepsis with falling perfusion. The nurse calls the rapid response team so cultures, lactate, fluids and antibiotics start without delay.",
      sources: [SSC, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Uncontrolled incisional pain", why: "Pain raises the pulse but does not cause fever and a falling BP." },
      { text: "Developing sepsis", why: "Rising temperature, heart rate and respirations with falling BP and new confusion fit sepsis." },
      { text: "Atelectasis after anesthesia", why: "Atelectasis can cause a low-grade fever but does not cause a falling BP and confusion." },
      { text: "Anxiety about a longer stay", why: "Anxiety does not cause fever or hypotension." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s19-37", {
      topic: "Snoring respirations after anesthesia",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client arrives in the postanesthesia care unit after general anesthesia. The client is drowsy, makes snoring sounds and has an SpO2 of 88%. The chest rises weakly. Which action should the nurse take first?",
      rationale:
        "Snoring in a drowsy client after anesthesia usually means the tongue has fallen back against the pharynx. With an SpO2 of 88%, the nurse opens the airway first with a jaw thrust or head tilt. An oral airway and oxygen may follow. The nurse then reassesses and calls for help if the obstruction persists.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Increase the IV fluid rate", why: "Fluids do not open an obstructed airway." },
      { text: "Call the anesthesia provider", why: "The nurse opens the airway first, then reports if the problem persists." },
      { text: "Place the client flat and supine", why: "Lying flat lets the tongue fall back further." },
      { text: "Perform a jaw thrust to open the airway", why: "Snoring signals the tongue blocking the pharynx. A jaw thrust lifts it forward." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s19-38", {
      topic: "Preoperative findings to report",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse completes a preoperative check on a 58-year-old client scheduled for an elective total knee arthroplasty at 1000. Click to highlight the findings the nurse should report to the surgical team before surgery.",
      rationale:
        "Three findings need the surgical team's attention. A dose of clopidogrel this morning adds bleeding risk. A potassium of 3.0 mEq/L is below normal and raises the risk of dysrhythmias. A temperature of 38.3°C with a new productive cough suggests a respiratory infection. Solid food at 2000 and clear juice at 0630 meet fasting rules for a 1000 start.",
      refs: ["Normal serum potassium is 3.5 to 5.0 mEq/L.", "Adults fast at least 6 hours after a light meal and at least 2 hours after clear liquids before elective anesthesia."],
      canada: "Canadian labs report serum potassium in mmol/L only, so this result reads 3.0 mmol/L. The Medical Council of Canada lists 3.5 to 5.1 mmol/L as the reference range.",
      sources: [ASA_FAST, HINKLE, { body: "Medical Council of Canada", work: "Normal Lab Values", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
    }),
    kind: "highlight",
    passage:
      "[[Last solid food at 2000 last night]]. [[Clear apple juice at 0630]]. [[Took clopidogrel 75 mg this morning]] by mistake. [[Potassium 3.0 mEq/L]]. [[Consent form signed and witnessed]]. [[Temperature 38.3°C (100.9°F) with a new productive cough]]. [[Dentures removed and labeled]]. [[Voided at 0800]].",
    spans: [
      { text: "Last solid food at 2000 last night", why: "Fasting since 2000 gives well over 6 hours before a 1000 start." },
      { text: "Clear apple juice at 0630", why: "Clear liquids are allowed up to 2 hours before anesthesia. 0630 is more than 2 hours before 1000." },
      { text: "Took clopidogrel 75 mg this morning", why: "An antiplatelet dose on the morning of surgery raises bleeding risk. The surgeon decides whether to proceed." },
      { text: "Potassium 3.0 mEq/L", why: "A potassium below 3.5 mEq/L raises the risk of dysrhythmias under anesthesia." },
      { text: "Consent form signed and witnessed", why: "A signed, witnessed consent is expected." },
      { text: "Temperature 38.3°C (100.9°F) with a new productive cough", why: "Fever with a new productive cough suggests a respiratory infection that raises anesthesia risk." },
      { text: "Dentures removed and labeled", why: "Removing dentures is expected preparation." },
      { text: "Voided at 0800", why: "Voiding before surgery is expected preparation." },
    ],
    correct: [2, 3, 5],
  },
  {
    ...meta("rn-s19-39", {
      topic: "Return of bowel function after surgery",
      cjmm: "evaluate",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client is on day 3 after a small bowel resection and has a nasogastric tube to low suction. Which findings show that bowel function is returning? Select all that apply.",
      rationale:
        "After bowel surgery, peristalsis returns over several days. Passing gas, bowel sounds in all four quadrants and less nasogastric drainage show the bowel is moving contents again. Increasing distension, hiccups with nausea and no gas or stool suggest ongoing ileus.",
      sources: [HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Increasing abdominal distension", why: "Growing distension suggests ongoing ileus or obstruction." },
      { text: "Passing gas", why: "Passing gas shows peristalsis has returned." },
      { text: "Hiccups with ongoing nausea", why: "Hiccups and nausea can signal gastric distension and ongoing ileus." },
      { text: "Bowel sounds in all four quadrants", why: "Bowel sounds in all quadrants show returning peristalsis." },
      { text: "No gas or stool since surgery", why: "No gas or stool shows the bowel is not yet moving." },
      { text: "Less nasogastric drainage than yesterday", why: "Falling nasogastric drainage suggests gastric contents are moving forward." },
    ],
    correct: [1, 3, 5],
  },
  {
    ...meta("rn-s19-40", {
      topic: "Interpreting a follow-up A1C",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "A client with type 2 diabetes had an A1C of 9.4% 3 months ago. After changes in diet and medication, today's A1C is 7.8%. How should the nurse interpret the new result?",
      rationale:
        "A1C reflects average blood glucose over about 3 months. The fall from 9.4% to 7.8% shows better control since the last test. For many adults the goal is less than 7%, so further change is needed. A1C does not need fasting.",
      refs: ["For many nonpregnant adults, the A1C goal is less than 7%. A1C reflects average glucose over about 3 months."],
      canada: "Diabetes Canada sets an A1C target of 7.0% or less for most adults with diabetes, adjusted for age, function and hypoglycemia risk. A result of 7.8% is still above that target.",
      sources: [ADA_GOALS, ADA_DX, { body: "Imran SA, Agarwal G, Bajaj HS, Ross S. Diabetes Canada Clinical Practice Guidelines Expert Committee", work: "Targets for Glycemic Control. Canadian Journal of Diabetes 42(Suppl 1):S42", year: 2018, url: "https://www.diabetes.ca/for-professionals/full-guidelines/chapter-8" }],
    }),
    kind: "mc",
    options: [
      { text: "Diabetes is now controlled at goal", why: "An A1C of 7.8% is above the usual goal of less than 7% for most adults." },
      { text: "The result reflects only the past week", why: "A1C reflects average glucose over about 3 months, not one week." },
      { text: "Glucose has improved but is above goal", why: "A fall from 9.4% to 7.8% shows improvement, but it is still above 7%." },
      { text: "The test must be repeated while fasting", why: "A1C does not require fasting." },
    ],
    correct: 2,
  },
];
