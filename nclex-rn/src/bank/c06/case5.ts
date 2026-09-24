import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c06-5";

/** Case 5. Long-term care home. Older woman on long-term prednisone with vomiting during a unit outbreak. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "Hard to Wake During a Stomach Bug Outbreak",
  intro:
    "A 78-year-old woman lives in a long-term care home. She has taken prednisone 7.5 mg daily for 4 years for polymyalgia rheumatica. She vomited 15 minutes after her 0800 prednisone dose yesterday and has had vomiting and watery diarrhea since. At 0600 today an assistive personnel (AP) asks the nurse to see her.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Polymyalgia rheumatica for 4 years.",
        "Hypertension treated with amlodipine.",
        "Cognition intact at baseline.",
        "Weight 52 kg.",
      ].join("\n"),
    },
    {
      title: "Medication Administration Record",
      text: [
        "Prednisone 7.5 mg by mouth daily at 0800. Yesterday's dose was given and vomited 15 minutes later. It was not repeated.",
        "Amlodipine 5 mg by mouth daily. Held yesterday for vomiting.",
      ].join("\n"),
    },
    {
      title: "Standing Orders",
      text: [
        "Hydrocortisone sodium succinate 100 mg IM once for a client on long-term steroids who cannot keep oral steroids down and shows signs of adrenal crisis.",
        "Also call emergency services and the primary health care provider.",
        "Hydrocortisone sodium succinate vial: 100 mg in 2 mL after mixing.",
      ].join("\n"),
    },
    {
      title: "Infection Control Log",
      text: "Three other clients on her hallway have had vomiting and diarrhea since Monday. One AP went home ill on Tuesday.",
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "MOC",
        topic: "Acting on a report from assistive personnel",
        cjmm: "recognize",
        process: "communication",
        difficulty: 2,
        stem: "At 0600 the AP gives the report below. Click to highlight the reported findings that the nurse must assess right away.",
        rationale:
          "New trouble waking is a change in consciousness and needs immediate assessment. Repeated vomiting, watery diarrhea and diffuse abdominal pain point to fluid loss. She also could not absorb her prednisone. Easy bruising is a known long-term steroid effect. The linen change, hearing aids and water cup need no urgent action.",
        sources: [SRC.crisis, SRC.potter, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, assistive personnel are unregulated care providers, such as health care aides. What an RN may assign or delegate to them is set by each provincial nursing regulator and varies by province.",
      }),
      kind: "highlight",
      passage:
        "[[She is hard to wake and mumbles when I say her name]]. [[She vomited twice since midnight]]. [[She had four watery stools between 2200 and 0500]]. [[She says her belly hurts all over]]. [[I changed her gown and bed linen at 0400]]. [[Her arms bruise easily, as they have for years]]. [[Her hearing aids are in the drawer]]. [[I put a clean water cup at her bedside]].",
      spans: [
        { text: "She is hard to wake and mumbles when I say her name", why: "A new drop in alertness needs immediate nursing assessment." },
        { text: "She vomited twice since midnight", why: "Ongoing vomiting causes fluid loss and stops oral medicines from being absorbed." },
        { text: "She had four watery stools between 2200 and 0500", why: "Watery diarrhea adds to fluid loss." },
        { text: "She says her belly hurts all over", why: "Diffuse abdominal pain with vomiting needs assessment. It is also a feature of adrenal crisis." },
        { text: "I changed her gown and bed linen at 0400", why: "Routine linen care needs no urgent follow-up." },
        { text: "Her arms bruise easily, as they have for years", why: "Fragile skin is a known long-term steroid effect and is not new." },
        { text: "Her hearing aids are in the drawer", why: "This is a care detail, not a finding that needs urgent assessment." },
        { text: "I put a clean water cup at her bedside", why: "This is routine care. It needs no follow-up now." },
      ],
      correct: [0, 1, 2, 3],
    },
    {
      ...meta(`${ID}-2`, {
        need: "SIPC",
        topic: "Two problems behind vomiting in long-term care",
        cjmm: "analyze",
        difficulty: 4,
        stem: "At 0610 the nurse checks her vital signs and glucose and reviews the Infection Control Log. For each finding, specify what it points to.",
        tabs: [
          {
            title: "Vital Signs",
            table: {
              head: ["Measure", "Yesterday at 1600", "Today at 0610"],
              rows: [
                ["BP", "118/70 mmHg", "82/48 mmHg"],
                ["Heart rate", "84/minute", "118/minute"],
                ["Respiratory rate", "16/minute", "22/minute"],
                ["Temperature", "37.4°C (99.3°F)", "38.1°C (100.6°F)"],
                ["SpO2", "96% on room air", "95% on room air"],
                ["Point-of-care glucose", "Not done", "68 mg/dL (3.8 mmol/L)"],
              ],
            },
          },
        ],
        rationale:
          "Three clients on one hallway and an ill AP within days point to a unit outbreak of gastroenteritis. Sudden vomiting and watery diarrhea without blood fit norovirus. Prednisone for 4 years suppresses her own adrenal response. She has absorbed no prednisone since yesterday morning. A glucose of 68 mg/dL fits cortisol deficiency.",
        sources: [SRC.noro, SRC.gcai, { body: "Medical Council of Canada", work: "Normal lab values reference list", year: 2020, url: "https://mcc.ca/examinations-assessments/resources-to-help-with-exam-prep/normal-lab-values/" }],
        canada: "Canadian labs report glucose only in mmol/L, so this result reads 3.8 mmol/L.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["A unit outbreak of gastroenteritis", "Cortisol deficiency"],
      rows: [
        { text: "Three other clients on her hallway ill since Monday", correct: [0], why: "Several clients ill on one hallway within days is an outbreak pattern." },
        { text: "Sudden vomiting and watery diarrhea without blood", correct: [0], why: "Abrupt vomiting with watery, non-bloody diarrhea fits norovirus." },
        { text: "An AP on her hallway went home ill on Tuesday", correct: [0], why: "Staff illness at the same time suggests spread through the unit." },
        { text: "No prednisone absorbed since yesterday morning", correct: [1], why: "After 4 years of prednisone her adrenal glands cannot make enough cortisol on their own." },
        { text: "Glucose 68 mg/dL (3.8 mmol/L)", correct: [1], why: "Cortisol supports glucose production. A low glucose fits cortisol deficiency." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First action in suspected adrenal crisis",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0615 the nurse calls emergency services. Complete the sentence below by choosing from the lists of options.",
        rationale:
          "She is hypotensive and hard to wake after losing her prednisone dose. In a client on long-term steroids this is suspected adrenal crisis. Hydrocortisone 100 mg IM is the first treatment and should not wait for hospital arrival. It replaces missing cortisol and supports BP and glucose. Stool testing and family updates come after.",
        sources: [SRC.crisis, SRC.gcai],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "While waiting for the ambulance, the nurse's priority is {0} because {1}.",
      blanks: [
        {
          options: [
            { text: "collecting a stool sample for testing", why: "A stool sample helps the outbreak response but does not treat shock." },
            { text: "offering oral rehydration fluid", why: "She is hard to wake and vomiting. Oral fluid risks aspiration and will not stay down." },
            { text: "giving the standing-order IM hydrocortisone", why: "Hydrocortisone replaces missing cortisol and is the first treatment for suspected adrenal crisis." },
            { text: "calling her daughter to update her", why: "Family is updated, but treating shock comes first." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "stool testing will confirm the outbreak", why: "Testing does not change her immediate treatment." },
            { text: "she cannot absorb oral steroids and shows signs of shock", why: "She vomited her prednisone and has a BP of 82/48 mmHg with reduced alertness." },
            { text: "fluid by mouth will replace her losses", why: "She is vomiting, so oral fluid will not stay down." },
            { text: "her family must agree to the transfer", why: "Emergency treatment does not wait for family agreement." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Containing norovirus in long-term care",
        cjmm: "generate",
        difficulty: 3,
        stem: "The ambulance is 20 minutes away. While the hydrocortisone is prepared, the nurse plans infection control for her room. Drag one option into each blank. Not all options are used.",
        rationale:
          "Norovirus spreads by contact with stool, vomit and contaminated surfaces. Contact precautions with a gown and gloves limit spread. Chlorine bleach solutions inactivate the virus on hard surfaces. Washing with soap and water removes it from hands better than alcohol rub alone. Airborne precautions are not indicated.",
        sources: [SRC.noro],
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "The nurse places her on {0}, cleans her bathroom with {1} and cleans hands after care with {2}.",
      targets: ["Precautions", "Surface cleaner", "Hand hygiene"],
      tokens: [
        { text: "contact precautions", why: "A gown and gloves block spread by contact with stool, vomit and surfaces." },
        { text: "airborne precautions", why: "Norovirus spreads by the fecal-oral route and vomit splash, not by airborne droplet nuclei." },
        { text: "a chlorine bleach solution", why: "Bleach solutions inactivate norovirus on hard surfaces." },
        { text: "a quaternary ammonium wipe", why: "Quaternary ammonium products are less active against norovirus than bleach." },
        { text: "soap and water", why: "Washing removes norovirus from hands and is preferred during an outbreak." },
        { text: "an alcohol rub alone", why: "Alcohol rub is less active against norovirus and does not replace washing here." },
      ],
      correct: [0, 2, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Giving emergency IM hydrocortisone",
        cjmm: "action",
        difficulty: 3,
        stem: "At 0618 the nurse draws up the standing-order hydrocortisone. She weighs 52 kg and her upper arms are thin. Which action should the nurse take?",
        rationale:
          "The standing order is 100 mg IM once, which is 2 mL. The ventrogluteal site is deep and away from large nerves and vessels. It holds 2 mL in an adult. Her thin deltoid is too small for 2 mL. Waiting for IV access delays treatment of a life-threatening crisis. Splitting the dose gives too little now.",
        sources: [SRC.potter, SRC.crisis],
      }),
      kind: "mc",
      options: [
        { text: "Inject 1 mL now and 1 mL in 6 hours", why: "The order is for 100 mg once. Splitting the dose delays treatment." },
        { text: "Inject 2 mL into the deltoid muscle", why: "The deltoid of a thin adult is small. 2 mL exceeds its usual volume." },
        { text: "Wait for paramedics to give it by IV instead", why: "The IM dose should not be delayed while waiting for IV access." },
        { text: "Inject 2 mL into the ventrogluteal site", why: "This large, deep muscle safely holds 2 mL and absorbs the drug well." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Sick-day rules for long-term steroids",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "On day 4 she returns to the long-term care home on her usual prednisone dose. The nurse reviews sick-day teaching with her and her daughter. Which two statements show understanding? Select two.",
        rationale:
          "Long-term prednisone suppresses her own cortisol production. Illness raises her need for cortisol. A medical alert bracelet and an emergency injection plan protect her when she cannot take tablets. Skipping, stopping or halving doses can bring on another crisis. Morning dosing fits the normal cortisol rhythm.",
        sources: [SRC.gcai, SRC.crisis],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will stop my prednisone once my muscles stop aching.\"", why: "Stopping suddenly after 4 years can cause another crisis. Any taper is planned by the provider." },
        { text: "\"I will wear a bracelet that says I take steroids.\"", why: "A medical alert bracelet tells responders she needs extra steroid in an emergency." },
        { text: "\"I will skip my prednisone on days my stomach is upset.\"", why: "Skipping doses during illness is what led to this crisis." },
        { text: "\"If I vomit my pills, staff will give me the emergency injection.\"", why: "An injection replaces cortisol when tablets cannot stay down." },
        { text: "\"I will take my prednisone at bedtime so I sleep better.\"", why: "Morning dosing matches the body's cortisol rhythm. Bedtime doses can disturb sleep." },
        { text: "\"A bad cold means I should cut my dose in half.\"", why: "Illness raises the body's need for cortisol. Doses go up during illness." },
      ],
      correct: [1, 3],
    },
  ],
};
