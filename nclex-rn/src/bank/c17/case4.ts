import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c17-4";

/** Case 4. Long-term care. Older woman with rheumatoid arthritis about to start a weekly drug. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Care Conference for Hand Pain and Stiffness",
  intro:
    "A 72-year-old woman has lived in a long-term care facility for 2 years. She has had rheumatoid arthritis for 1 year. Her hand pain and stiffness have worsened despite her current drugs. The rheumatologist has recommended adding methotrexate. The nurse prepares for a care conference.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Weight 58 kg. Born in 1954.",
        "Medications: naproxen 500 mg by mouth twice daily. Prednisone 5 mg by mouth daily. Calcium carbonate 500 mg by mouth daily.",
        "No known drug allergies. Retired music teacher. Enjoys knitting.",
        "Immunizations: influenza vaccine 11 months ago. Tetanus-diphtheria booster 4 years ago. No pneumococcal or zoster vaccine on record.",
      ].join("\n"),
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Result", "Reference range"],
        rows: [
          ["Estimated creatinine clearance", "38 mL/minute", "90 to 120 mL/minute"],
          ["ALT", "22 units/L", "7 to 55 units/L"],
          ["Hemoglobin", "12.6 g/dL (126 g/L)", "12.0 g/dL (120 g/L) to 15.5 g/dL (155 g/L)"],
          ["Hepatitis B surface antigen", "Negative", "Negative"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "BCC",
        topic: "Function and comfort cues in hand arthritis",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse reviews the week's notes from the care staff. Click to highlight the findings that need follow-up to support the client's comfort and daily function.",
        rationale:
          "Morning stiffness of 90 minutes, trouble with buttons and a dropped fork show that hand arthritis limits dressing and eating. Waking 2 to 3 times each night with pain disrupts rest. Pain of 6 of 10 is not controlled. Each can be eased with pain relief timing, warmth before activity and adaptive equipment. Steady walking with her walker, good intake, intact skin and a daily bowel movement need no new action.",
        sources: [SRC.brunner, SRC.acr],
      }),
      kind: "highlight",
      passage:
        "[[Morning stiffness in both hands lasting 90 minutes]]. [[Unable to fasten buttons without help]]. [[Drops her fork at meals]]. [[Wakes 2 to 3 times each night with hand pain]]. [[Hand pain 6 of 10]]. [[Walks 30 m with her walker, gait steady]]. [[Eats 90% of each meal]]. [[Skin over the sacrum intact]]. [[Bowel movement daily]].",
      spans: [
        { text: "Morning stiffness in both hands lasting 90 minutes", why: "Long morning stiffness shows active joint inflammation that slows morning care." },
        { text: "Unable to fasten buttons without help", why: "Loss of fine hand movement limits dressing and independence." },
        { text: "Drops her fork at meals", why: "A weak grip can reduce intake and calls for adaptive utensils." },
        { text: "Wakes 2 to 3 times each night with hand pain", why: "Pain that wakes her disrupts rest and needs a comfort plan." },
        { text: "Hand pain 6 of 10", why: "Pain of 6 of 10 is not controlled by her current plan." },
        { text: "Walks 30 m with her walker, gait steady", why: "Steady walking with her usual walker needs no new action." },
        { text: "Eats 90% of each meal", why: "Intake of 90% shows adequate nutrition at present." },
        { text: "Skin over the sacrum intact", why: "Intact skin needs routine care only." },
        { text: "Bowel movement daily", why: "A daily bowel movement is a normal pattern." },
      ],
      correct: [0, 1, 2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Factors that raise methotrexate toxicity",
        cjmm: "analyze",
        difficulty: 4,
        stem: "Before the care conference, the nurse reviews the client's drugs and results against the methotrexate label. For each finding, specify whether it raises the client's risk of methotrexate toxicity.",
        rationale:
          "Methotrexate leaves the body through the kidneys. A creatinine clearance of 38 mL/minute slows its removal and raises blood levels. Naproxen and other NSAIDs have been linked with severe marrow and gut toxicity when given with methotrexate. Folic acid lowers common side effects. Calcium carbonate and low-dose prednisone do not raise methotrexate levels. A normal ALT and hemoglobin show no liver or marrow problem now.",
        sources: [SRC.mtx, SRC.acr],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises toxicity risk", "Does not raise toxicity risk"],
      rows: [
        { text: "Estimated creatinine clearance 38 mL/minute", correct: [0], why: "Reduced kidney function slows methotrexate removal and raises blood levels." },
        { text: "Naproxen 500 mg twice daily", correct: [0], why: "NSAIDs with methotrexate have been linked with severe marrow and gut toxicity." },
        { text: "Folic acid 1 mg daily planned with methotrexate", correct: [1], why: "Folic acid reduces common side effects such as mouth sores and nausea." },
        { text: "Calcium carbonate 500 mg daily", correct: [1], why: "Calcium carbonate does not change methotrexate levels." },
        { text: "Prednisone 5 mg daily", correct: [1], why: "Low-dose prednisone is often used with methotrexate and does not raise its levels." },
        { text: "ALT 22 units/L", correct: [1], why: "A normal ALT shows no current liver injury." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Catching a frequency error before the first dose",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The pharmacy sends the new entries for the medication administration record. The nurse compares them with the rheumatology note. Drag words from the choices below to fill in each blank in the following sentence.",
        tabs: [
          {
            title: "Orders",
            text: [
              "Rheumatology note: methotrexate 7.5 mg by mouth once weekly on Mondays. Folic acid 1 mg by mouth daily. Continue prednisone 5 mg daily.",
              "Medication administration record: methotrexate 7.5 mg by mouth daily. Folic acid 1 mg by mouth daily. Prednisone 5 mg by mouth daily.",
            ].join("\n"),
          },
        ],
        rationale:
          "The record lists methotrexate daily, while the note prescribes it once weekly. Mistaken daily dosing of a weekly dose has caused fatal toxicity. The frequency must be clarified with the prescriber before any dose is given. The folic acid and prednisone entries match the note. Folic acid reduces side effects and does not block the effect of methotrexate.",
        sources: [SRC.mtx, SRC.ismpLtc],
      }),
      kind: "dnd",
      scoring: "dyad",
      template: "Before the first dose, the nurse should clarify {0} because {1}.",
      targets: ["Entry", "Reason"],
      tokens: [
        { text: "the methotrexate frequency", why: "The record lists daily dosing, but the note prescribes a weekly dose." },
        { text: "the folic acid dose", why: "The folic acid entry matches the note at 1 mg daily." },
        { text: "the prednisone dose", why: "The prednisone entry matches the note at 5 mg daily." },
        { text: "daily dosing can cause fatal toxicity", why: "Taking a weekly methotrexate dose each day has led to deaths." },
        { text: "folic acid blocks the drug's effect", why: "Folic acid lowers side effects and is given with methotrexate on purpose." },
        { text: "prednisone must stop with methotrexate", why: "Low-dose prednisone is often continued with methotrexate." },
      ],
      correct: [0, 3],
    },
    {
      ...meta(`${ID}-4`, {
        need: "HPM",
        topic: "Vaccines before starting an immunosuppressant",
        cjmm: "generate",
        difficulty: 3,
        stem: "The weekly frequency is confirmed. The rheumatologist asks the nurse to update the client's vaccines before methotrexate starts. It is September. Which vaccines should the nurse plan to offer? Select all that apply.",
        rationale:
          "Vaccines work best before immunosuppression begins. Adults aged 50 years and older need recombinant zoster vaccine. A pneumococcal conjugate vaccine is advised at this age when none is on record. Influenza vaccine is given each year, and her last dose was 11 months ago. The nasal influenza vaccine is live. HPV vaccine is for younger adults. People born before 1957 are considered immune to measles. Her tetanus booster is not yet due.",
        refs: ["Recombinant zoster vaccine and pneumococcal conjugate vaccine are advised for adults aged 50 years and older.", "Adults born before 1957 are considered immune to measles, mumps and rubella.", "Tetanus-diphtheria boosters are given every 10 years.", "The nasal influenza vaccine is a live vaccine approved for ages 2 to 49 years.", "HPV vaccine is routine through age 26 years and considered through age 45 years."],
        sources: [SRC.cdcAdult, { body: "Public Health Agency of Canada, National Advisory Committee on Immunization", work: "Canadian Immunization Guide: Measles Vaccines", year: 2025, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-12-measles-vaccine.html" }, { body: "Public Health Agency of Canada, National Advisory Committee on Immunization", work: "Canadian Immunization Guide: Pneumococcal Vaccines", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-16-pneumococcal-vaccine.html" }, { body: "Public Health Agency of Canada, National Advisory Committee on Immunization", work: "Canadian Immunization Guide: Influenza Vaccines", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-10-influenza-vaccine.html" }],
        canada:
          "NACI presumes measles immunity in adults born before 1970 and gives routine pneumococcal conjugate vaccine from 65, so the key stands. In Canada FluMist is authorized to age 59, and NACI prefers high-dose, adjuvanted or recombinant influenza vaccine at 65 and older.",
      }),
      kind: "sata",
      options: [
        { text: "Recombinant zoster vaccine", why: "It is advised for adults aged 50 years and older and is not live." },
        { text: "Nasal spray influenza vaccine", why: "The nasal vaccine is live and approved only to age 49 years." },
        { text: "Human papillomavirus vaccine", why: "HPV vaccine is not indicated after age 45 years." },
        { text: "Pneumococcal conjugate vaccine", why: "No pneumococcal vaccine is on record, and it is advised from age 50 years." },
        { text: "Measles, mumps and rubella vaccine", why: "People born before 1957 are considered immune to measles." },
        { text: "Tetanus-diphtheria booster", why: "Her last booster was 4 years ago, and boosters are given every 10 years." },
        { text: "Inactivated influenza vaccine", why: "Influenza vaccine is given yearly, and her last dose was 11 months ago." },
      ],
      correct: [0, 3, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Preventing weekly dose errors in long-term care",
        cjmm: "action",
        difficulty: 3,
        stem: "The medication administration record is corrected to methotrexate 7.5 mg by mouth once weekly on Mondays. Which action by the nurse best protects the client from a dosing error?",
        rationale:
          "Oral methotrexate is a high-alert drug in long-term care because weekly doses have been given daily. Naming one day of the week on the record makes the schedule clear to every nurse. Storing the weekly drug with daily drugs invites a daily pass. A dose given on any day of the week can lead to two doses too close together. A daily entry with a hold note keeps the wrong frequency on the record.",
        sources: [SRC.ismpLtc, SRC.mtx],
      }),
      kind: "mc",
      options: [
        { text: "Store the tablets with her daily morning drugs", why: "Keeping a weekly drug with daily drugs makes a daily pass more likely." },
        { text: "Allow the dose on any day during the week", why: "A floating day can place two doses too close together." },
        { text: "Enter a daily task with a hold note on six days", why: "A daily entry keeps the wrong frequency on the record." },
        { text: "Schedule the dose on the record for Mondays only", why: "A named weekday makes the weekly schedule clear to every nurse." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "PSY",
        topic: "Coping with changing hand function",
        cjmm: "evaluate",
        process: "caring",
        difficulty: 3,
        stem: "Six weeks later the client talks with the nurse about living with arthritis. She says her hands no longer let her knit as she used to. Which three statements show effective coping? Select three.",
        rationale:
          "Effective coping uses problem solving and support. Asking about large-grip needles adapts a valued hobby. Talking with her daughter uses her support network. Joining an arthritis group adds peer support. Staying in her room to hide her hands is withdrawal. Saying there is no point in doing anything shows hopelessness. Skipping meals to avoid asking for help risks her nutrition.",
        sources: [SRC.halter],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I stay in my room so no one sees my hands.\"", why: "Hiding from others is withdrawal, not effective coping." },
        { text: "\"I asked the activity staff about large-grip needles.\"", why: "Seeking adapted tools keeps a valued hobby going." },
        { text: "\"There is no point in doing anything I enjoy now.\"", why: "This shows hopelessness and needs follow-up." },
        { text: "\"I call my daughter when I feel low.\"", why: "Turning to family is a healthy use of support." },
        { text: "\"I skip meals rather than ask for help.\"", why: "Avoiding help puts her nutrition at risk." },
        { text: "\"I plan to join the arthritis group here.\"", why: "A peer group gives support and practical ideas." },
      ],
      correct: [1, 3, 5],
    },
  ],
};
