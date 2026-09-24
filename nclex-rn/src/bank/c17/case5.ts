import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c17-5";

/** Case 5. Surgical transplant unit. Middle-aged man months after a kidney transplant. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Readmission Months After a Kidney Transplant",
  intro:
    "A 46-year-old man received a deceased-donor kidney transplant 5 months ago. At a routine transplant clinic visit today his creatinine has risen, and he is admitted to the surgical transplant unit. He changed jobs last month and his health insurance changed with it.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Kidney transplant in the right iliac fossa 5 months ago.",
        "Medications: tacrolimus 3 mg by mouth twice daily. Mycophenolate mofetil 1000 mg by mouth twice daily. Prednisone 5 mg by mouth daily.",
        "Weight 82 kg. Home weight 1 week ago 80 kg.",
        "No known drug allergies.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Clinic 1 month ago", "Admission"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)", "38.0°C (100.4°F)"],
          ["Heart rate", "78/minute", "98/minute"],
          ["Respiratory rate", "16/minute", "18/minute"],
          ["BP", "128/78 mmHg", "162/94 mmHg"],
          ["SpO2", "98% on room air", "97% on room air"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "1 month ago", "Admission", "Reference or target"],
        rows: [
          ["Creatinine", "1.2 mg/dL (106 micromol/L)", "2.4 mg/dL (212 micromol/L)", "0.7 mg/dL (62 micromol/L) to 1.3 mg/dL (115 micromol/L)"],
          ["Tacrolimus trough", "6.8 ng/mL", "2.1 ng/mL", "Target 5 to 8 ng/mL"],
          ["Potassium", "4.3 mEq/L (4.3 mmol/L)", "5.3 mEq/L (5.3 mmol/L)", "3.5 to 5.0 mEq/L"],
          ["White blood cells", "6.9 x 10^9/L", "7.4 x 10^9/L", "4.5 to 11.0 x 10^9/L"],
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
        topic: "Cues of graft trouble after kidney transplant",
        cjmm: "recognize",
        difficulty: 3,
        stem: "On the transplant unit the nurse examines the graft site, fluid status and medication history. Which findings in this note require follow-up? Click to highlight them.",
        rationale:
          "Graft tenderness, fever and less urine point to inflammation in the new kidney. A weight gain of 2 kg in 1 week, ankle edema and a BP of 162/94 mmHg show fluid the graft is not clearing. Running out of tacrolimus explains the low trough and is a key cause to address. A healed scar, clear lungs and a bladder scan of 40 mL do not need follow-up. The small post-void volume argues against retention.",
        sources: [SRC.kdigoTx, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Tenderness over the graft in the right lower abdomen]]. [[Urine output about half his usual amount for 3 days]]. [[Pitting edema 1+ in both ankles]]. [[Weight up 2 kg in 1 week]]. [[Temperature 38.0°C (100.4°F)]]. [[BP 162/94 mmHg]]. [[Says he ran out of tacrolimus 6 days ago]]. [[Transplant scar healed with no redness]]. [[Lungs clear in all fields]]. [[Bladder scan after voiding 40 mL]].",
      spans: [
        { text: "Tenderness over the graft in the right lower abdomen", why: "Tenderness over the graft suggests inflammation of the transplanted kidney." },
        { text: "Urine output about half his usual amount for 3 days", why: "Less urine suggests the graft is filtering less." },
        { text: "Pitting edema 1+ in both ankles", why: "New edema shows fluid the graft is not clearing." },
        { text: "Weight up 2 kg in 1 week", why: "A rise from 80 kg to 82 kg in 1 week reflects fluid retention." },
        { text: "Temperature 38.0°C (100.4°F)", why: "Fever can come with rejection or infection and needs follow-up." },
        { text: "BP 162/94 mmHg", why: "BP has risen from 128/78 mmHg, which fits fluid retention from graft trouble." },
        { text: "Says he ran out of tacrolimus 6 days ago", why: "Missed doses lower drug levels and can trigger rejection." },
        { text: "Transplant scar healed with no redness", why: "A healed scar shows no wound problem." },
        { text: "Lungs clear in all fields", why: "Clear lungs show no fluid in the lungs at present." },
        { text: "Bladder scan after voiding 40 mL", why: "A small volume after voiding shows the bladder empties well." },
      ],
      correct: [0, 1, 2, 3, 4, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Interpreting creatinine and drug levels after transplant",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse compares the admission results with those from 1 month ago. Complete the following sentence by choosing from the lists of options.",
        tabs: [
          {
            title: "Nurses' Notes",
            text: [
              "Bladder scan after voiding 40 mL.",
              "Client states he ran out of tacrolimus 6 days ago when his new insurance did not cover it.",
              "Weight 82 kg. Pitting edema 1+ in both ankles.",
            ].join("\n"),
          },
        ],
        rationale:
          "Creatinine doubled from 1.2 mg/dL (106 micromol/L) to 2.4 mg/dL (212 micromol/L) while the tacrolimus trough fell to 2.1 ng/mL, below the 5 to 8 ng/mL target. Too little drug lets the immune system attack the graft. Toxic tacrolimus levels can also raise creatinine, but the trough is low. Weight gain and edema argue against dehydration. A bladder scan of 40 mL after voiding argues against obstruction at the bladder.",
        sources: [SRC.kdigoTx],
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The rise in creatinine most likely reflects {0}, and the tacrolimus trough points to {1}.",
      blanks: [
        {
          options: [
            { text: "acute graft rejection", why: "A rising creatinine with a low drug level fits immune attack on the graft." },
            { text: "tacrolimus toxicity", why: "Toxicity needs a high trough, but the trough is 2.1 ng/mL." },
            { text: "fluid volume deficit", why: "Weight gain and edema show fluid excess, not deficit." },
            { text: "bladder outlet obstruction", why: "A post-void volume of 40 mL shows the bladder empties." },
          ],
          correct: 0,
        },
        {
          options: [
            { text: "underexposure from missed doses", why: "A trough of 2.1 ng/mL is below target after 6 days without the drug." },
            { text: "a toxic drug level", why: "A toxic level would be above the target range." },
            { text: "a level within target", why: "The target is 5 to 8 ng/mL, and 2.1 ng/mL is below it." },
            { text: "an expected drop over time", why: "The target stays the same, and the level was 6.8 ng/mL last month." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Ranking problems in suspected rejection",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The transplant team plans a graft ultrasound and biopsy. The nurse updates the plan of care. Which client problem is the priority?",
        rationale:
          "Rejection threatens the graft, and loss of the graft means a return to dialysis. The creatinine has doubled, and urine output has fallen. Clear lungs and an SpO2 of 97% show no pulmonary edema now. A healed scar with no redness argues against a wound infection. A potassium of 5.3 mEq/L needs monitoring but is only mildly raised.",
        sources: [SRC.kdigoTx, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Pulmonary edema from fluid overload", why: "The lungs are clear and SpO2 is 97%, so pulmonary edema is not present now." },
        { text: "Loss of kidney graft function", why: "A doubled creatinine and low urine output show the graft is failing." },
        { text: "Infection of the surgical wound", why: "The scar is healed with no redness." },
        { text: "Dysrhythmia from high potassium", why: "A potassium of 5.3 mEq/L is only mildly raised and needs monitoring." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Fluid and diet plan in graft dysfunction",
        cjmm: "generate",
        difficulty: 3,
        stem: "The biopsy confirms acute rejection, and treatment starts. The nurse plans basic care while the graft recovers. Which actions should the nurse include? Select all that apply.",
        rationale:
          "Intake and output and a daily weight on the same scale track fluid while urine output is low. A potassium of 5.3 mEq/L calls for limits on high-potassium foods. Grapefruit raises tacrolimus levels and is avoided. Large fluid volumes worsen edema when the graft is filtering less. An indwelling catheter adds infection risk in a client who voids and empties his bladder. High-sodium broth adds to fluid retention.",
        sources: [SRC.brunner, SRC.kdigoTx],
      }),
      kind: "sata",
      options: [
        { text: "Encourage 4 L of fluid each day", why: "Large fluid volumes worsen edema while the graft filters less." },
        { text: "Record intake and output each shift", why: "Intake and output show how well the graft is clearing fluid." },
        { text: "Limit foods high in potassium", why: "His potassium is 5.3 mEq/L, above the 5.0 mEq/L limit." },
        { text: "Insert an indwelling urinary catheter", why: "A catheter adds infection risk, and he voids and empties his bladder." },
        { text: "Weigh him each morning on one scale", why: "A daily weight on one scale tracks fluid gain accurately." },
        { text: "Offer salted broth between meals", why: "High-sodium foods add to fluid retention." },
        { text: "Remove grapefruit from his meal trays", why: "Grapefruit raises tacrolimus levels and can cause toxicity." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Matching needs to the transplant team",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The client tells the nurse three concerns before discharge. Drag the team member best suited to address each concern to its target.",
        rationale:
          "The social worker helps with insurance and drug costs, which caused the missed doses. The pharmacist reviews drug and food interactions such as grapefruit with tacrolimus. The dietitian builds a meal plan that limits potassium. A physical therapist and a chaplain have roles on the team, but neither addresses these three concerns.",
        sources: [SRC.brunner, SRC.kdigoTx, { body: "Government of Canada", work: "Canada Health Act, R.S.C. 1985, c. C-6", year: 2017, url: "https://laws-lois.justice.gc.ca/eng/acts/c-6/page-1.html" }],
        canada:
          "Outpatient drugs fall outside the Canada Health Act, so tacrolimus is paid by a provincial drug plan or private insurance. Coverage varies by province, and the social worker still helps find it.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: [
        "\"My new insurance will not pay for my tacrolimus.\"",
        "\"Which foods and drugs interact with my tacrolimus?\"",
        "\"How do I plan meals that are low in potassium?\"",
      ],
      tokens: [
        { text: "Physical therapist", why: "A physical therapist addresses mobility, which is not among his concerns." },
        { text: "Social worker", why: "A social worker finds coverage or assistance programs for drug costs." },
        { text: "Chaplain", why: "A chaplain gives spiritual support, which is not among his concerns." },
        { text: "Pharmacist", why: "A pharmacist reviews drug and food interactions with tacrolimus." },
        { text: "Dietitian", why: "A dietitian plans meals within a potassium limit." },
      ],
      correct: [1, 3, 4],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Long-term health habits after transplant",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "Eight days later the creatinine is 1.5 mg/dL (133 micromol/L) and his drug coverage is restored. The nurse reviews long-term self-care. Which three statements by the client show understanding? Select three.",
        rationale:
          "Long-term immunosuppression raises the risk of skin cancer, so sun protection and yearly skin checks help. Inactivated vaccines such as the yearly influenza shot are safe and advised. Refilling early and using reminders prevent the gaps that led to rejection. Live vaccines such as the nasal influenza vaccine are avoided. Ultraviolet light passes through clouds, so cloudy days still need sun protection. Doses are changed only by the transplant team.",
        sources: [SRC.kdigoTx],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I will use sunscreen and get a skin check each year.\"", why: "Immunosuppression raises skin cancer risk, so protection and checks help." },
        { text: "\"I will ask for the nasal spray flu vaccine.\"", why: "The nasal vaccine is live and is avoided after transplant." },
        { text: "\"I will get the flu shot each fall.\"", why: "Inactivated influenza vaccine is safe and advised after transplant." },
        { text: "\"I can skip sunscreen on cloudy days.\"", why: "Ultraviolet light passes through clouds, so protection is still needed." },
        { text: "\"I will refill early and set phone reminders.\"", why: "Early refills and reminders prevent the gaps that led to rejection." },
        { text: "\"I can lower my doses once my kidney improves.\"", why: "Dose changes are made only by the transplant team." },
      ],
      correct: [0, 2, 4],
    },
  ],
};
