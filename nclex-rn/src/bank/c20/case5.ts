import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c20-5";

/** Case 5. Home health. Older adult with a painful one-sided chest rash. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Home Visit for a Painful Rash",
  intro:
    "A 78-year-old man receives a home health nursing visit at 1000. Yesterday his primary health care provider diagnosed a painful rash on the left side of his chest. He lives with his wife, and family members visit often.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Burning pain on the left chest began 5 days ago. The rash appeared 3 days ago.",
        "Hypertension, treated with lisinopril 10 mg by mouth daily. Osteoarthritis of both knees.",
        "Had chickenpox as a child. Has not received a shingles vaccine.",
        "Prescribed yesterday: valacyclovir 1 g by mouth three times daily for 7 days, gabapentin 100 mg by mouth at bedtime, acetaminophen 650 mg by mouth every 6 hours as needed.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1000"],
        rows: [
          ["Temperature", "37.4°C (99.3°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "16/minute"],
          ["BP", "146/84 mmHg"],
          ["SpO2", "97% on room air"],
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
        topic: "Comfort and basic needs with a painful rash",
        cjmm: "recognize",
        difficulty: 2,
        stem: "During the home visit, the nurse records the note below. Click to highlight the findings that show unmet comfort or basic care needs.",
        rationale:
          "Pain rated 8 of 10 is severe, and it limits his sleep to 3 hours a night. Eating only toast leaves protein and energy needs unmet for skin healing. Scratching at night can break blisters and cause infection. A one-sided band that stops at the midline is the expected pattern. Loose cotton clothing and help with showering meet his needs.",
        sources: [SRC.cdcShingles, SRC.zoster],
      }),
      kind: "highlight",
      passage:
        "[[Blisters on a red base in a band across the left chest]]. [[Rash stops at the midline]]. [[Rates burning pain 8 of 10]]. [[Sleeps about 3 hours a night because of pain]]. [[Wears a loose cotton shirt]]. [[Has eaten only toast since the rash began]]. [[Scratches the rash at night]]. [[Wife helps him in and out of the shower]].",
      spans: [
        { text: "Blisters on a red base in a band across the left chest", why: "A one-sided band of blisters is the expected pattern and needs routine care." },
        { text: "Rash stops at the midline", why: "Stopping at the midline is the expected pattern of this rash." },
        { text: "Rates burning pain 8 of 10", why: "Pain of 8 out of 10 is severe and not controlled by the current plan." },
        { text: "Sleeps about 3 hours a night because of pain", why: "Pain that limits sleep to 3 hours a night is an unmet rest need." },
        { text: "Wears a loose cotton shirt", why: "Loose cotton clothing reduces friction on the rash." },
        { text: "Has eaten only toast since the rash began", why: "Eating only toast for days does not meet his protein and energy needs for healing." },
        { text: "Scratches the rash at night", why: "Scratching can break blisters and let bacteria in." },
        { text: "Wife helps him in and out of the shower", why: "Help with showering is a support in place, not an unmet need." },
      ],
      correct: [2, 3, 5, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "SIPC",
        topic: "Protecting contacts from varicella zoster virus",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The client's blisters are still weeping and have not crusted. The nurse asks who has close contact with him. For each person, specify whether that person should avoid contact until the blisters crust or may continue usual contact.",
        rationale:
          "Weeping blisters shed virus that can cause chickenpox in people without immunity. The pregnant granddaughter has no immunity. Premature infants and people on chemotherapy face severe infection. These three avoid contact until the blisters crust. People with past chickenpox or 2 vaccine doses are immune. Covering the rash lowers spread.",
        sources: [SRC.cdcShingles, SRC.cdcShinglesHcp],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Avoid contact until the blisters crust", "May continue usual contact"],
      rows: [
        { text: "Wife, age 76, had chickenpox as a child", correct: [1], why: "Past chickenpox gives immunity, so she is not at risk of chickenpox from him." },
        { text: "Granddaughter, 24 weeks pregnant, with no past chickenpox or vaccine", correct: [0], why: "She has no immunity, and chickenpox in pregnancy can harm her and the fetus." },
        { text: "Neighbor's 5-week-old infant born at 30 weeks", correct: [0], why: "Premature infants are at high risk of severe infection." },
        { text: "Home health aide with 2 documented doses of varicella vaccine", correct: [1], why: "Two documented vaccine doses show immunity. The aide uses standard precautions." },
        { text: "Friend receiving chemotherapy for lymphoma", correct: [0], why: "A weakened immune system raises the risk of severe infection." },
        { text: "Son, age 50, had chickenpox at age 8", correct: [1], why: "Past chickenpox gives immunity to the virus." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "BCC",
        topic: "Priority problem with a painful rash",
        cjmm: "prioritize",
        difficulty: 2,
        stem: "The client says the pain is worst at night and he cannot rest. He has taken acetaminophen twice today. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Severe pain that stops him resting is the most pressing problem. The virus reactivates in a sensory nerve root, and the inflamed nerve causes burning pain along the band. His breathing is effective with an SpO2 of 97%. Knee pain is long-standing. No urinary symptoms are reported.",
        sources: [SRC.zoster],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The priority problem is {0} related to {1}.",
      blanks: [
        {
          options: [
            { text: "ineffective breathing", why: "His respiratory rate is 16/minute and SpO2 is 97%, so breathing is effective." },
            { text: "acute pain", why: "Burning pain that prevents rest is his most pressing problem." },
            { text: "impaired mobility", why: "His knee osteoarthritis is long-standing and is not the new problem." },
            { text: "urinary retention", why: "Nothing in the chart shows difficulty passing urine." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "splinting of the chest", why: "Splinting would lower the SpO2 or raise the respiratory rate. Neither has happened." },
            { text: "knee joint wear", why: "Knee wear explains chronic knee pain, not burning chest pain." },
            { text: "an inflamed sensory nerve", why: "The virus reactivates in a sensory nerve root and inflames the nerve that supplies the rash." },
            { text: "an enlarged prostate", why: "No urinary symptoms are reported." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort measures for a blistering rash",
        cjmm: "generate",
        process: "teaching",
        difficulty: 2,
        stem: "The nurse plans teaching to relieve the client's itching and skin discomfort. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Cool, damp compresses and a warm oatmeal bath ease itching. Loose cotton clothing limits friction. Popping blisters or rubbing the rash breaks the skin, spreads virus-filled fluid and invites bacterial infection. A tight elastic wrap rubs the blisters and traps moisture.",
        sources: [SRC.cdcShingles],
      }),
      kind: "sata",
      options: [
        { text: "Pop the blisters so they dry faster", why: "Opened blisters let bacteria in and spread virus-filled fluid." },
        { text: "Apply cool, damp compresses to the rash", why: "Cool, damp compresses soothe itching and burning." },
        { text: "Wrap the rash tightly with an elastic bandage", why: "A tight wrap rubs the blisters and traps moisture." },
        { text: "Soak in a warm oatmeal bath", why: "An oatmeal bath eases itching over a wide area." },
        { text: "Rub the rash firmly with a dry towel", why: "Firm rubbing breaks blisters and worsens pain." },
        { text: "Wear loose clothing made of cotton", why: "Loose cotton clothing limits friction on the rash." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Sedation with gabapentin and an opioid",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 4,
        stem: "Four days later the provider has increased gabapentin to 300 mg by mouth three times daily. His wife says he took 2 of her oxycodone 5 mg tablets last night for pain. He is drowsy but follows commands. Respiratory rate is 12/minute and SpO2 is 94%. Which action should the nurse take?",
        rationale:
          "Gabapentin and opioids both depress the central nervous system. Taken together they raise the risk of oversedation and slowed breathing in older adults. He is drowsy with a respiratory rate of 12/minute after taking his wife's oxycodone. The provider needs to review the pain plan today. He should not take medication prescribed for someone else.",
        sources: [SRC.beers, SRC.zoster],
      }),
      kind: "mc",
      options: [
        { text: "Give the next gabapentin dose as scheduled", why: "Another dose adds to the sedation already present." },
        { text: "Advise him to take the oxycodone with food", why: "Food does not reduce the sedation from combining these drugs." },
        { text: "Encourage a nap and recheck at the next visit", why: "Leaving a sedated client until the next visit misses worsening breathing." },
        { text: "Report the sedation to the primary health care provider", why: "Combined opioid and gabapentin sedation needs prompt review of his pain plan." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Recombinant zoster vaccine teaching",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "Three weeks later the rash has healed. The nurse teaches the client about the recombinant zoster vaccine. Which two statements show understanding? Select two.",
        rationale:
          "The recombinant zoster vaccine is recommended for adults aged 50 or older, including those who have had shingles. It is a 2-dose series given 2 to 6 months apart. It can start once the rash has resolved. No blood test for past chickenpox is needed.",
        refs: ["The recombinant zoster vaccine is recommended for immunocompetent adults aged 50 years or older."],
        sources: [SRC.rzv, { body: "Public Health Agency of Canada, NACI", work: "Canadian Immunization Guide: Herpes Zoster (Shingles) Vaccine", year: 2025, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-8-herpes-zoster-(shingles)-vaccine.html" }],
        canada: "The Canadian Immunization Guide gives the same 2 dose series from age 50. It says RZV may be considered at least 1 year after a shingles episode, a longer wait than the US advice this item follows.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I cannot get shingles again, so I do not need it.\"", why: "Shingles can recur, so vaccination is still advised after an episode." },
        { text: "\"The vaccine is two shots given 2 to 6 months apart.\"", why: "The recombinant vaccine is a 2-dose series given 2 to 6 months apart." },
        { text: "\"My wife needs a chickenpox blood test before her shot.\"", why: "Screening for past chickenpox is not needed before this vaccine." },
        { text: "\"Now that the rash is gone, I can start the vaccine.\"", why: "The vaccine is given once the acute episode has resolved." },
        { text: "\"One shot is enough protection at my age.\"", why: "One dose does not complete the series. Two doses are needed." },
        { text: "\"I should wait 5 years after shingles to get it.\"", why: "No long wait is needed after the rash resolves." },
      ],
      correct: [1, 3],
    },
  ],
};
