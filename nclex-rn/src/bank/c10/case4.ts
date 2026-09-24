import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c10-4";

/** Case 4. Pediatric emergency department at night. Barking cough and noisy breathing. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "Noisy Breathing After Midnight",
  intro:
    "At 0215 a parent brings a 3-year-old girl to the pediatric emergency department. She woke from sleep with a loud cough that sounds like a bark and noisy breathing. She has had a runny nose and a low fever for 2 days. She weighs 14 kg.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Born at term. Immunizations up to date.",
        "No history of asthma or wheezing. No choking episode reported.",
        "Has drunk about 120 mL of juice since noon yesterday. Last wet diaper at 1800.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "0220"],
        rows: [
          ["Temperature", "38.3°C (100.9°F)"],
          ["Heart rate", "148/minute"],
          ["Respiratory rate", "40/minute"],
          ["SpO2", "95% on room air"],
        ],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "MOC",
        topic: "Triage cues in upper airway illness",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The triage nurse writes the note below. Click to highlight the findings that show the child needs to be taken to a treatment room now rather than wait.",
        rationale:
          "Stridor that is heard at rest, suprasternal and intercostal retractions and nasal flaring show moderate upper airway narrowing and increased work of breathing. These need prompt treatment. A barking cough, a hoarse voice and a runny nose occur in mild illness too. Swallowing saliva without drooling makes epiglottitis less likely. Pink lips and an SpO2 of 95% show oxygenation is still adequate.",
        sources: [SRC.croup, SRC.wong, { body: "Warren DW, Jarvis A, LeBlanc L, Gravel J, CTAS National Working Group", work: "Revisions to the Canadian Triage and Acuity Scale Paediatric Guidelines (PaedCTAS). CJEM 10(3):224", year: 2008, url: "https://doi.org/10.1017/S1481803500010149" }],
        canada:
          "Canadian emergency departments triage children with the Paediatric Canadian Triage and Acuity Scale. Stridor with retractions and a protected airway is moderate respiratory distress, level II, with a goal of being seen within 15 minutes.",
      }),
      kind: "highlight",
      passage:
        "[[Barking cough]]. [[Hoarse voice]]. [[Stridor heard at rest while sitting on the parent's lap]]. [[Suprasternal and intercostal retractions]]. [[Nasal flaring with each breath]]. [[Clear runny nose]]. [[Swallows saliva without drooling]]. [[Lips and nail beds pink]]. [[SpO2 95% on room air]].",
      spans: [
        { text: "Barking cough", why: "A barking cough occurs in mild illness and alone does not show severity." },
        { text: "Hoarse voice", why: "Hoarseness reflects inflamed vocal cords and occurs in mild illness." },
        { text: "Stridor heard at rest while sitting on the parent's lap", why: "Stridor at rest while calm shows moderate airway narrowing." },
        { text: "Suprasternal and intercostal retractions", why: "Visible in-drawing shows increased work of breathing." },
        { text: "Nasal flaring with each breath", why: "Nasal flaring is a sign of respiratory distress in a young child." },
        { text: "Clear runny nose", why: "A runny nose is part of the viral illness and does not show severity." },
        { text: "Swallows saliva without drooling", why: "Normal swallowing makes epiglottitis less likely." },
        { text: "Lips and nail beds pink", why: "Pink lips and nail beds show adequate oxygenation." },
        { text: "SpO2 95% on room air", why: "An SpO2 of 95% shows oxygenation is still adequate." },
      ],
      correct: [2, 3, 4],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Hydration status in a young child",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse assesses the child's hydration in the treatment room at 0230. For each finding, specify whether it suggests a fluid deficit or does not suggest a fluid deficit.",
        rationale:
          "About 120 mL of juice since noon yesterday is far below a toddler's needs. No wet diaper since 1800 shows the kidneys are conserving water. Dry, sticky mucous membranes also point to a mild deficit. Tears when crying, brisk capillary refill and skin that recoils at once show the deficit is not severe.",
        sources: [SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Suggests a fluid deficit", "Does not suggest a fluid deficit"],
      rows: [
        { text: "About 120 mL of juice since noon yesterday", correct: [0], why: "This intake is far below a toddler's daily fluid needs." },
        { text: "No wet diaper since 1800", correct: [0], why: "A long gap without urine shows the kidneys conserving water." },
        { text: "Dry, sticky mucous membranes", correct: [0], why: "Dry membranes reflect low body water." },
        { text: "Tears present when crying", correct: [1], why: "Tears are usually preserved until a deficit becomes more severe." },
        { text: "Capillary refill under 2 seconds", correct: [1], why: "Brisk refill shows adequate perfusion." },
        { text: "Skin recoils at once after a pinch", correct: [1], why: "Normal turgor argues against a severe deficit." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting priorities in the emergency department",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 0235 the nurse is assigned this child and three other children. Which child should the nurse see first?",
        rationale:
          "Stridor at rest with retractions shows a narrowing airway that can worsen quickly. Airway comes first. A child with asthma who has an SpO2 of 96% and speaks in full sentences is stable for now. An infant with fever who feeds well is stable. An ankle injury with moderate pain can wait.",
        sources: [SRC.croup, SRC.wong],
      }),
      kind: "mc",
      options: [
        { text: "A 6-year-old with a swollen ankle after a fall and pain of 5 of 10", why: "An ankle injury with moderate pain is stable and can wait." },
        { text: "The 3-year-old with stridor at rest and chest wall retractions", why: "A narrowing upper airway is the most urgent threat." },
        { text: "A 10-year-old with asthma, SpO2 96%, speaking in full sentences", why: "Full sentences and an SpO2 of 96% show the asthma is controlled for now." },
        { text: "An 8-month-old with a temperature of 38.4°C (101.1°F) who feeds well", why: "A feeding infant with a moderate fever is stable." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "PPT",
        topic: "Treatment of moderate croup",
        cjmm: "generate",
        difficulty: 3,
        stem: "The primary health care provider diagnoses moderate croup. Which two prescriptions should the nurse anticipate? Select two.",
        rationale:
          "Moderate croup is treated with a single dose of oral dexamethasone and nebulized epinephrine. Dexamethasone reduces airway swelling over hours. Nebulized epinephrine shrinks the swollen mucosa within minutes. Humidified air and mist tents have no proven benefit. Albuterol acts on the lower airways. Croup is viral, so antibiotics do not help.",
        sources: [SRC.croup],
        canada:
          "The Canadian Paediatric Society notes that racemic epinephrine is not readily available in Canada. Nebulized L-epinephrine 1:1000 is equally effective, with 5 mL equal to 0.5 mL of the racemic form. Albuterol is called salbutamol in Canada.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "Cool mist tent at the bedside", why: "Humidified air and mist tents have no proven benefit in croup." },
        { text: "Oral dexamethasone single dose", why: "A single dose of dexamethasone reduces airway swelling." },
        { text: "Albuterol by nebulizer every 20 minutes", why: "Albuterol opens the lower airways and does not treat subglottic swelling." },
        { text: "IV ceftriaxone every 24 hours", why: "Croup is viral and does not respond to antibiotics." },
        { text: "Nebulized racemic epinephrine", why: "Nebulized epinephrine rapidly reduces upper airway swelling." },
        { text: "Oral amoxicillin for 10 days", why: "Antibiotics do not treat a viral upper airway infection." },
      ],
      correct: [1, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Precautions for parainfluenza in a young child",
        cjmm: "action",
        difficulty: 3,
        stem: "A nasal swab is positive for parainfluenza virus. The child will stay in the department for observation after treatment. Which actions should the nurse take? Select all that apply.",
        rationale:
          "Parainfluenza in infants and young children calls for contact precautions with standard precautions. Staff wear a gown and gloves on entry. Dedicated equipment such as a stethoscope stops spread on shared surfaces. Hand hygiene follows glove removal. A single room, or sharing with a child who has the same virus, limits spread. An N95 respirator and a negative pressure room are for airborne infections. A shared playroom spreads the virus.",
        sources: [SRC.isolation, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings", year: 2016, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections.html" }],
        canada:
          "The Public Health Agency of Canada lists parainfluenza and croup under Droplet and Contact Precautions. A Canadian nurse also wears facial protection, a mask with eye protection, within 2 metres of the child.",
      }),
      kind: "sata",
      options: [
        { text: "Wear a fit-tested N95 respirator for care", why: "Parainfluenza does not spread by the airborne route." },
        { text: "Wear a gown and gloves when entering the room", why: "Contact precautions block spread from hands and clothing." },
        { text: "Let her play in the shared playroom while waiting", why: "A shared playroom exposes other children to the virus." },
        { text: "Use a dedicated stethoscope for her care", why: "Dedicated equipment stops spread on shared surfaces." },
        { text: "Move her to a negative pressure airborne room", why: "Negative pressure is for airborne infections, not parainfluenza." },
        { text: "Perform hand hygiene after removing gloves", why: "Hands can be contaminated during glove removal." },
        { text: "Place her in a single room", why: "A single room limits contact spread to other children." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Observation before discharge after croup treatment",
        cjmm: "evaluate",
        difficulty: 4,
        stem: "At 0300 the child received oral dexamethasone and nebulized racemic epinephrine. At 0330 there is no stridor at rest and she is drinking juice. At 0345 the parent asks to go home. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "The response at 0330 is good, but nebulized epinephrine wears off within about 2 hours. Stridor can return as it wears off. Discharge is safe only if symptoms do not recur during 2 to 4 hours of observation after the dose. With the dose at 0300, observation continues until at least 0500. She is improving, so intensive care and a second steroid dose are not indicated.",
        refs: ["Discharge is safe if croup symptoms do not recur within 2 to 4 hours after nebulized epinephrine."],
        sources: [SRC.croup],
        canada:
          "In Canada the child would more likely receive nebulized L-epinephrine 1:1000, because racemic epinephrine is not readily available. The Canadian Paediatric Society observation period of 2 to 4 hours after nebulized epinephrine still applies.",
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "The nurse should {0} because the effect of nebulized epinephrine {1}.",
      blanks: [
        {
          options: [
            { text: "discharge her home with the parent now", why: "Discharge now could send her home before the epinephrine wears off." },
            { text: "continue observation until at least 0500", why: "Observation for 2 to 4 hours after epinephrine checks for return of stridor." },
            { text: "transfer her to the intensive care unit", why: "She is improving and has no stridor at rest." },
            { text: "give a second dose of dexamethasone", why: "A single dose is the standard treatment." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "lasts for about 24 hours", why: "The effect lasts about 2 hours, not a full day." },
            { text: "can wear off within 2 hours", why: "Stridor can return as the epinephrine wears off." },
            { text: "causes drowsiness in toddlers", why: "Epinephrine is a stimulant and does not cause drowsiness." },
            { text: "hides a bacterial infection", why: "Epinephrine does not mask infection." },
          ],
          correct: 1,
        },
      ],
    },
  ],
};
