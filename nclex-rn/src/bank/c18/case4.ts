import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c18-4";

/** Case 4. Community health clinic. Refugee child due for catch-up vaccines. */
export const CASE4: CaseStudy = {
  id: ID,
  title: "A New Family at the Neighborhood Clinic",
  intro:
    "A 5-year-old girl and her parents come to a community health clinic 3 weeks after arriving in the United States as refugees. The family speaks Dari. The father speaks limited English. The visit is for a health screening and catch-up vaccines.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Born outside the United States. Lived in a refugee camp for 2 years before arrival. Overseas medical exam completed before travel.",
        "No chronic illness. No known allergies. Weight 17 kg.",
        "Lives in a 2-bedroom apartment with 7 relatives. A resettlement agency helps the family.",
      ].join("\n"),
    },
    {
      title: "Immunization Record",
      table: {
        head: ["Vaccine", "Doses documented"],
        rows: [
          ["BCG", "At birth"],
          ["DTP-hepatitis B-Hib combined", "At 6, 10 and 14 weeks"],
          ["Inactivated polio (IPV)", "At 6, 10 and 14 weeks"],
          ["Measles", "At 9 months"],
          ["Varicella", "None recorded"],
        ],
      },
    },
    {
      title: "Vital Signs",
      text: "Temperature 36.8°C (98.2°F). Heart rate 96/minute. Respirations 22/minute.",
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "PSY",
        topic: "Psychosocial and cultural cues in a refugee family",
        cjmm: "recognize",
        process: "culture",
        difficulty: 3,
        stem: "The nurse completes the intake interview and writes the note below. Click to highlight the findings that point to a psychosocial or cultural need.",
        rationale:
          "A family member acting as interpreter can change or leave out health information. Nightly screaming since leaving the camp and a mother who cries about the journey suggest trauma that needs support. A question about pork products is a faith concern that affects consent. Normal speech, play, temperature and an expected BCG scar are physical findings that need no psychosocial action.",
        sources: [SRC.ahrq, SRC.wong],
      }),
      kind: "highlight",
      passage:
        "[[Father offers to interpret for the mother]]. [[Child speaks in full sentences in Dari]]. [[Child wakes screaming most nights since the family left the camp]]. [[Builds a tower of blocks and draws a circle]]. [[Mother asks whether any vaccine contains pork products]]. [[BCG scar on the left upper arm]]. [[Mother cries when asked about the journey]]. [[Temperature 36.8°C (98.2°F)]].",
      spans: [
        { text: "Father offers to interpret for the mother", why: "Family interpreters can omit or alter health details. A trained interpreter is needed." },
        { text: "Child speaks in full sentences in Dari", why: "Full sentences in her home language fit normal development at 5 years." },
        { text: "Child wakes screaming most nights since the family left the camp", why: "Night terrors or nightmares since displacement can signal trauma needing support." },
        { text: "Builds a tower of blocks and draws a circle", why: "These are expected motor skills and point to no psychosocial need." },
        { text: "Mother asks whether any vaccine contains pork products", why: "This faith concern must be answered so the parents can give informed consent." },
        { text: "BCG scar on the left upper arm", why: "A BCG scar is expected in a child vaccinated at birth abroad." },
        { text: "Mother cries when asked about the journey", why: "Distress about the journey suggests trauma or grief that needs a caring response." },
        { text: "Temperature 36.8°C (98.2°F)", why: "A normal temperature is a physical finding with no psychosocial meaning." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "HPM",
        topic: "Reading a foreign immunization record",
        cjmm: "analyze",
        difficulty: 5,
        stem: "The nurse compares the immunization record with the US catch-up schedule for a healthy 5-year-old. For each vaccine, specify whether a dose is due at this visit or not needed.",
        rationale:
          "Three DTP doses call for a fourth DTaP dose now. A final polio dose is due at age 4 years or older. The last hepatitis B dose was before 24 weeks of age, so one more is due. A measles dose before 12 months does not count, so MMR is due. She has no varicella doses. Hib catch-up stops at age 5 in healthy children. Rotavirus stops after 8 months.",
        refs: [
          "The final hepatitis B dose counts only if given at 24 weeks of age or older.",
          "A measles-containing dose given before 12 months of age does not count toward the 2-dose series.",
          "Rotavirus vaccine is not given after 8 months of age.",
          "A final IPV dose is given at age 4 years or older.",
        ],
        sources: [SRC.catchup, SRC.refugeeImz, SRC.bestPractice],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Due at this visit", "Not needed"],
      rows: [
        { text: "DTaP", correct: [0], why: "She has 3 documented doses. A fourth dose given after age 4 completes the series." },
        { text: "IPV", correct: [0], why: "Her 3 doses were in infancy. A final dose at age 4 years or older is needed." },
        { text: "Hib", correct: [1], why: "Catch-up Hib is not required for a healthy child aged 5 years or older." },
        { text: "Hepatitis B", correct: [0], why: "Her last dose at 14 weeks was before 24 weeks of age, so one more dose is needed." },
        { text: "MMR", correct: [0], why: "The measles dose at 9 months was before 12 months of age and does not count." },
        { text: "Rotavirus", correct: [1], why: "Rotavirus vaccine is not given after 8 months of age." },
        { text: "Varicella", correct: [0], why: "No doses or disease history are recorded, so the series starts now." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Interpreter use before vaccine consent",
        cjmm: "prioritize",
        process: "culture",
        difficulty: 3,
        stem: "The father says he can translate so the visit goes faster. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Informed consent needs information the parents understand in their own language. A trained medical interpreter conveys it accurately. Family members, phone relatives and English forms can distort or miss details. The mother asked about pork products. MMR and varicella vaccines contain gelatin, so the parents need an accurate answer before they decide.",
        sources: [SRC.ahrq, SRC.mmrLabel, SRC.varivax, { body: "Public Health Agency of Canada, NACI", work: "Canadian Immunization Guide, Part 1: Contents of immunizing agents available for use in Canada", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-1-key-immunization-information/page-15-contents-immunizing-agents-available-use-canada.html" }],
        canada:
          "In Canada, Priorix (MMR) and Varilrix (varicella) contain no gelatin, while M-M-R II and Varivax III do. The Canadian Immunization Guide lists each vaccine's contents to help answer the family's question.",
      }),
      kind: "cloze",
      scoring: "zero-one",
      template: "Before any consent for vaccines, the nurse should first arrange {0} so the parents can decide about {1}.",
      blanks: [
        {
          options: [
            { text: "the father's translation", why: "A family interpreter may omit or change details and puts the father in a hard role." },
            { text: "an English consent form", why: "The family speaks Dari, so an English form does not inform the parents." },
            { text: "a trained medical interpreter", why: "A trained interpreter conveys the full information accurately in Dari." },
            { text: "a relative on the phone", why: "An untrained relative has the same accuracy and privacy problems as the father." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "vaccines that contain gelatin", why: "MMR and varicella vaccines contain gelatin, which the mother asked about." },
            { text: "the child's BCG scar", why: "The BCG scar is expected and needs no decision." },
            { text: "the camp medical records", why: "The records are already in hand and need no parental decision." },
            { text: "the date of the next visit", why: "Scheduling does not require informed consent." },
          ],
          correct: 0,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Referrals for a newly arrived refugee child",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse finds brown cavities in 3 back teeth. The father says the family runs out of food before the end of each month. Drag the referral that best fits each need.",
        rationale:
          "Nightly screaming since displacement calls for a child mental health service trained in trauma care. Cavities need a pediatric dental clinic. Running out of food calls for the resettlement caseworker and a food bank. Nothing suggests abuse or neglect by the parents. The child is not in danger, so inpatient care is not needed. Her speech is normal.",
        sources: [SRC.wong, SRC.refugeeImz, { body: "Immigration, Refugees and Citizenship Canada", work: "Interim Federal Health Program: Summary of coverage", year: 2026, url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program/coverage-summary.html" }],
        canada:
          "In Canada, the federal Interim Federal Health Program covers refugees until provincial or territorial insurance begins. Its supplemental benefits include urgent dental care and mental health counselling.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Nightmares since leaving the camp", "Cavities in the back teeth", "Running out of food each month"],
      tokens: [
        { text: "Child protective services", why: "Nothing suggests abuse or neglect. Hardship from displacement is not neglect." },
        { text: "Trauma-informed child mental health service", why: "Trauma-trained clinicians can assess and treat sleep problems after displacement." },
        { text: "Speech and language therapy", why: "She speaks in full sentences in Dari, so speech therapy is not indicated." },
        { text: "Pediatric dental clinic", why: "Untreated cavities cause pain and infection and need dental care." },
        { text: "Inpatient child psychiatric unit", why: "She is not a danger to herself or others, so outpatient care fits." },
        { text: "Food bank and resettlement caseworker", why: "The caseworker links the family to food programs, and a food bank meets the gap now." },
      ],
      correct: [1, 3, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Vaccine refrigerator temperature alarm",
        cjmm: "action",
        difficulty: 3,
        stem: "Before drawing up the vaccines, the nurse checks the vaccine refrigerator. The digital thermometer reads 10°C (50°F) and the alarm is sounding. What should the nurse do first?",
        rationale:
          "A reading of 10°C is above the 2°C to 8°C range for refrigerated vaccines. The exposed vaccines are labeled do not use and kept at the correct temperature, apart from other stock. The manufacturer or immunization program then decides if they can be used. They are not thrown away first. Freezing can destroy many vaccines.",
        refs: ["Refrigerated vaccines are stored between 2°C and 8°C."],
        sources: [SRC.storage],
      }),
      kind: "mc",
      options: [
        { text: "Label the vaccines 'Do Not Use' and keep them cold", why: "Labeling and correct storage stop their use until viability is confirmed." },
        { text: "Discard every vaccine stored in the unit", why: "Many vaccines stay viable. The manufacturer decides before any are discarded." },
        { text: "Give the vaccines once the reading is back down to 5°C", why: "A normal reading later does not undo the heat exposure. Viability must be checked first." },
        { text: "Move the vaccines into the freezer to cool them", why: "Freezing can destroy refrigerated vaccines." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "BCC",
        topic: "Comfort care teaching after childhood vaccines",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "The child receives her vaccines, including MMR and varicella. Through a trained interpreter, the nurse teaches the parents about care at home. Which statements by the mother show understanding? Select all that apply.",
        rationale:
          "A cool, wet cloth eases sore injection sites. Extra fluids help if she feels warm. Acetaminophen is dosed by her weight. A mild fever or rash can appear 1 to 2 weeks after MMR. Aspirin is avoided after varicella vaccine because of Reye syndrome. The second MMR dose can come 4 weeks later, not in a year. Bed rest is not needed.",
        refs: [
          "Salicylates are avoided for 6 weeks after varicella vaccine.",
          "The second MMR dose may be given 4 weeks after the first.",
        ],
        sources: [SRC.varivax, SRC.mmrLabel, SRC.catchup],
      }),
      kind: "sata",
      options: [
        { text: "\"I will put a cool, wet cloth on the sore spots.\"", why: "A cool compress eases pain and swelling at the injection sites." },
        { text: "\"I will give her aspirin if she gets a fever.\"", why: "Aspirin is avoided for 6 weeks after varicella vaccine because of Reye syndrome." },
        { text: "\"I will keep her in bed for 3 days after the shots.\"", why: "Normal activity is fine. Moving the limb can ease soreness." },
        { text: "\"A mild rash or fever 1 to 2 weeks later can happen.\"", why: "The live MMR vaccine can cause a mild fever or rash 1 to 2 weeks later." },
        { text: "\"I will offer extra fluids if she feels warm.\"", why: "Fluids help prevent dehydration during a fever." },
        { text: "\"She will not need any more shots until 1 year from now.\"", why: "Her second MMR dose can be given 4 weeks after the first." },
        { text: "\"I will give acetaminophen based on her weight.\"", why: "Weight-based dosing gives a safe dose for fever or soreness." },
      ],
      correct: [0, 3, 4, 6],
    },
  ],
};
