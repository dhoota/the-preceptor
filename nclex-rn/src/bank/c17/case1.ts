import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c17-1";

/** Case 1. Pediatric primary care clinic. School-age boy after an IM antibiotic. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "Clinic Visit After an Injection",
  intro:
    "An 8-year-old boy is at a pediatric primary care clinic with his mother. His right ear infection did not improve after 10 days of oral amoxicillin. At 1015 the nurse gave ceftriaxone 1 g IM in the left ventrogluteal site as prescribed. He has never received ceftriaxone before.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 26 kg.",
        "No known drug allergies.",
        "Mild intermittent asthma. Uses an albuterol inhaler about once a month.",
        "Right tympanic membrane red and bulging. Right ear pain 4 of 10.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1005"],
        rows: [
          ["Temperature", "38.3°C (100.9°F)"],
          ["Heart rate", "104/minute"],
          ["Respiratory rate", "22/minute"],
          ["BP", "102/64 mmHg"],
          ["SpO2", "98% on room air"],
        ],
      },
    },
    {
      title: "Orders",
      text: "Ceftriaxone 1 g IM once for acute otitis media not improved on amoxicillin. Observe in clinic for 15 minutes after the injection.",
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PA",
        topic: "Early cues after a first antibiotic injection",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1027 the mother calls the nurse back into the room. The nurse assesses the child and writes the note below. Click to highlight the findings that require immediate follow-up.",
        rationale:
          "Twelve minutes after a first dose of ceftriaxone, the child has raised wheals and swollen lips and eyelids. A hoarse voice points to swelling of the upper airway. Wheezes, respirations of 34/minute and an SpO2 of 91% show lower airway narrowing. A heart rate of 146/minute and a BP of 78/46 mmHg show failing circulation. A small red area at the injection site is a local effect. Ear pain of 3 and a temperature of 38.1°C fit the ear infection.",
        refs: ["Low systolic BP in a child aged 1 to 10 years is below 70 mmHg plus twice the age in years. At age 8 this is below 86 mmHg."],
        sources: [SRC.wao],
      }),
      kind: "highlight",
      passage:
        "[[Raised red wheals on the chest and back]]. [[Lips and eyelids swollen]]. [[Voice hoarse]]. [[Wheezes in all lung fields]]. [[Respirations 34/minute]]. [[SpO2 91% on room air]]. [[Heart rate 146/minute]]. [[BP 78/46 mmHg]]. [[Red area 1 cm wide at the injection site]]. [[Right ear pain 3 of 10]]. [[Temperature 38.1°C (100.6°F)]].",
      spans: [
        { text: "Raised red wheals on the chest and back", why: "New hives minutes after a new drug are a skin sign of an allergic reaction." },
        { text: "Lips and eyelids swollen", why: "Swelling of the lips and eyelids is angioedema, which can spread to the airway." },
        { text: "Voice hoarse", why: "Hoarseness points to swelling at the larynx and a threatened airway." },
        { text: "Wheezes in all lung fields", why: "Diffuse wheezes show bronchospasm, a respiratory sign of anaphylaxis." },
        { text: "Respirations 34/minute", why: "A rate of 34/minute is well above the 22/minute recorded at 1005." },
        { text: "SpO2 91% on room air", why: "An SpO2 of 91% is a fall from 98% at 1005 and shows poor oxygenation." },
        { text: "Heart rate 146/minute", why: "The rate rose from 104/minute and reflects the body answering low BP and low oxygen." },
        { text: "BP 78/46 mmHg", why: "A systolic BP of 78 mmHg is below the 86 mmHg floor for an 8-year-old." },
        { text: "Red area 1 cm wide at the injection site", why: "A small red area at the site is a common local effect of an IM injection." },
        { text: "Right ear pain 3 of 10", why: "Ear pain of 3 is lower than the 4 recorded at the visit and fits the ear infection." },
        { text: "Temperature 38.1°C (100.6°F)", why: "The fever is slightly lower than at 1005 and fits the ear infection." },
      ],
      correct: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Body systems in a severe allergic reaction",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse sorts the 1027 findings by body system. For each finding, specify the body system it reflects.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "1005", "1027"],
              rows: [
                ["Temperature", "38.3°C (100.9°F)", "38.1°C (100.6°F)"],
                ["Heart rate", "104/minute", "146/minute"],
                ["Respiratory rate", "22/minute", "34/minute"],
                ["BP", "102/64 mmHg", "78/46 mmHg"],
                ["SpO2", "98% on room air", "91% on room air"],
              ],
            },
          },
        ],
        rationale:
          "Anaphylaxis is highly likely when skin or mucosal signs begin soon after exposure and come with breathing or circulation signs. Wheals and swollen lips and eyelids are skin and mucosal signs. Hoarseness reflects swelling of the larynx. Wheezes and an SpO2 of 91% reflect bronchospasm. A BP of 78/46 mmHg and a heart rate of 146/minute reflect leaky, dilated vessels. Three systems are involved within minutes of a new drug.",
        sources: [SRC.wao],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Skin or mucosa", "Respiratory", "Cardiovascular"],
      rows: [
        { text: "Raised red wheals on the chest and back", correct: [0], why: "Wheals are hives, a skin sign of mast cell release." },
        { text: "Lips and eyelids swollen", correct: [0], why: "Swollen lips and eyelids are angioedema of the skin and mucosa." },
        { text: "Voice hoarse", correct: [1], why: "Hoarseness reflects swelling of the larynx in the upper airway." },
        { text: "Wheezes in all lung fields", correct: [1], why: "Wheezes reflect narrowing of the lower airways." },
        { text: "SpO2 91% on room air", correct: [1], why: "Low oxygen saturation reflects impaired gas exchange from bronchospasm." },
        { text: "BP 78/46 mmHg", correct: [2], why: "Low BP reflects vasodilation and fluid leaking out of the vessels." },
        { text: "Heart rate 146/minute", correct: [2], why: "A fast heart rate is the heart compensating for low BP." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "PPT",
        topic: "First medication in anaphylaxis",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "The nurse stays with the child and calls for help. The clinic has emergency medications on hand. Which medication is the priority for this child?",
        rationale:
          "The child has anaphylaxis with airway swelling, bronchospasm and low BP. IM epinephrine is the first-line drug. It tightens blood vessels, raises BP, reduces airway swelling and opens the bronchi. Delay in giving it is linked with worse outcomes. Albuterol and antihistamines each treat only part of the reaction. IV fluids support the circulation but come after epinephrine.",
        sources: [SRC.wao, { body: "Health Canada", work: "Drug Product Database: Ventolin HFA (salbutamol), DIN 02241497", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=65137" }],
        canada:
          "Albuterol is sold in Canada as salbutamol (Ventolin HFA). Epinephrine and diphenhydramine keep the same names.",
      }),
      kind: "mc",
      options: [
        { text: "Albuterol by metered-dose inhaler", why: "Albuterol eases bronchospasm but does not treat airway swelling or low BP." },
        { text: "Diphenhydramine by mouth", why: "An antihistamine relieves hives and itching only, and swallowing is unsafe with a hoarse voice." },
        { text: "Epinephrine IM in the thigh", why: "Epinephrine reverses airway swelling, bronchospasm and low BP within minutes." },
        { text: "IV 0.9% sodium chloride bolus", why: "Fluids support the BP but take time to start and do not reverse the reaction." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Emergency response in an outpatient clinic",
        cjmm: "generate",
        difficulty: 3,
        stem: "A second nurse prepares the epinephrine. The first nurse plans the next steps for the child in the clinic. Which actions should the nurse include? Select all that apply.",
        rationale:
          "A child who needs epinephrine for anaphylaxis goes by ambulance to an emergency department, because symptoms can return hours later. Oxygen treats the SpO2 of 91%. The nurse stays with the child because the airway and BP can worsen within minutes. Recording each dose time shows when a repeat is due. Ceftriaxone is the likely trigger. Standing or walking can drop the return of blood to the heart and cause collapse.",
        refs: ["Epinephrine may be repeated every 5 to 15 minutes if symptoms persist."],
        sources: [SRC.wao, SRC.pumphrey],
      }),
      kind: "sata",
      options: [
        { text: "Walk the child to the treatment room", why: "Standing and walking in anaphylaxis can empty the heart of returning blood and cause collapse." },
        { text: "Call emergency medical services", why: "A child given epinephrine for anaphylaxis needs transfer for monitoring in an emergency department." },
        { text: "Plan a second ceftriaxone dose", why: "Ceftriaxone is the likely trigger. Another dose could cause a worse reaction." },
        { text: "Give oxygen by face mask", why: "High-flow oxygen treats the SpO2 of 91% during respiratory distress." },
        { text: "Stay with the child and mother", why: "The airway and BP can worsen within minutes, so the child is not left alone." },
        { text: "Offer the child sips of water", why: "Oral fluids are unsafe while the lips and larynx are swelling." },
        { text: "Record the time of each dose", why: "Dose times show when a repeat dose is due if symptoms persist after 5 to 15 minutes." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Weight-based epinephrine volume",
        cjmm: "action",
        difficulty: 3,
        stem: "The clinic anaphylaxis protocol reads: epinephrine 1 mg/mL, 0.01 mg/kg IM into the anterolateral thigh, maximum 0.3 mg for a child aged 6 to 12 years. The child weighs 26 kg. How many mL should the nurse give?",
        rationale:
          "The dose is 0.01 mg/kg for a child of 26 kg, which is 0.26 mg. This is below the 0.3 mg maximum for a child aged 6 to 12 years, so the weight-based dose is given. The vial holds 1 mg in each mL, so 0.26 mg is 0.26 mL. The anterolateral thigh gives faster absorption than the arm.",
        calc: { expr: "0.01 * 26 / 1", answer: 0.26, unit: "mL", round: 2, steps: ["0.01 * 26 = 0.26", "0.26 / 1 = 0.26"] },
        sources: [SRC.wao],
      }),
      kind: "mc",
      options: [
        { text: "0.026 mL", why: "0.026 mL is one tenth of the dose. The decimal point is misplaced." },
        { text: "0.26 mL", why: "0.01 mg/kg for 26 kg is 0.26 mg, which is 0.26 mL of a 1 mg/mL solution." },
        { text: "0.5 mL", why: "0.5 mg is the adult maximum. It exceeds the 0.3 mg limit for this child." },
        { text: "2.6 mL", why: "2.6 mL is 10 times the correct volume and would give 2.6 mg." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Family teaching after drug anaphylaxis",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Two days later the child returns with his mother after an overnight stay in the emergency department. He now has an epinephrine auto-injector and a written emergency plan. Which three statements by the mother show understanding? Select three.",
        rationale:
          "An auto-injector helps only if it is with the child when a reaction starts. Every new provider needs to know about the ceftriaxone reaction so it is not given again. Epinephrine comes first, then a call for emergency help. Antihistamine syrup is too slow and treats only the skin. An asthma inhaler does not treat anaphylaxis. A referral to an allergist is part of care after anaphylaxis.",
        sources: [SRC.wao],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I will give his allergy syrup first and wait.\"", why: "Antihistamines act slowly and treat only skin signs. Waiting delays epinephrine." },
        { text: "\"I will keep his auto-injector with him wherever he goes.\"", why: "The device must be close at hand, because a reaction can start within minutes." },
        { text: "\"His inhaler can stand in for the auto-injector.\"", why: "Albuterol does not treat airway swelling or low BP." },
        { text: "\"I will tell each new provider he reacted to ceftriaxone.\"", why: "Reporting the reaction lets providers record the allergy and avoid the drug." },
        { text: "\"He can have ceftriaxone again at a lower dose.\"", why: "A lower dose can still trigger anaphylaxis. The drug is avoided unless an allergist advises otherwise." },
        { text: "\"I will use the auto-injector, then call 911.\"", why: "Epinephrine comes first, then emergency help, because symptoms can return." },
        { text: "\"He will not need to see an allergist now.\"", why: "Referral to an allergist is advised after anaphylaxis to confirm the trigger." },
      ],
      correct: [1, 3, 5],
    },
  ],
};
