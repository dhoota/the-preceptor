import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c13-5";

const REF_OUTBREAK = "An influenza outbreak in long-term care is 2 or more residents on the same unit with laboratory-confirmed influenza within 72 hours of each other.";

/** Case 5. Long-term care home in winter. Charge nurse facing several ill residents. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Winter Evening on a Long-Term Care Unit",
  intro:
    "It is January. The nurse is in charge of the evening shift on a 32-bed unit of a long-term care home. Influenza is circulating in the community. At 1500 the assistive personnel report changes in several residents.",
  tabs: [
    {
      title: "Unit Information",
      text: [
        "Most residents are older than 75 years.",
        "Residents eat together in a shared dining room and join daily group activities.",
        "Rapid molecular influenza testing is available on site.",
        "The infection preventionist is on call.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "SIPC",
        topic: "Spotting influenza in older residents",
        cjmm: "recognize",
        difficulty: 3,
        stem: "The nurse reviews the reports on 6 residents. For each report, specify whether it suggests influenza or does not suggest influenza.",
        rationale:
          "Older residents often show influenza with a low-grade fever or none at all. A behavior change such as new confusion can be the main sign. New cough with fatigue, new confusion with aches and fever, and new sore throat with chills all suggest influenza. A stable chronic cough, one loose stool after prune juice and knee pain after exercise have other clear causes.",
        sources: [SRC.fluLtc],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Suggests influenza", "Does not suggest influenza"],
      rows: [
        { text: "Room 204, age 88: new cough, temperature 37.9°C (100.2°F), tired and off her food", correct: [0], why: "New cough with fatigue and a low-grade fever fits influenza in an older adult." },
        { text: "Room 211, age 79: usual cough from COPD, temperature 36.8°C (98.2°F)", correct: [1], why: "A stable chronic cough without fever is her baseline." },
        { text: "Room 215, age 91: new confusion and muscle aches since noon, temperature 38.3°C (100.9°F)", correct: [0], why: "New confusion can be the main sign of influenza in older adults. Aches and fever add to it." },
        { text: "Room 220, age 84: one loose stool after prune juice, temperature 36.9°C (98.4°F)", correct: [1], why: "One loose stool after prune juice has a clear cause and no fever." },
        { text: "Room 208, age 86: sore throat, runny nose and chills since this morning", correct: [0], why: "New upper respiratory symptoms with chills can be influenza even without a fever." },
        { text: "Room 223, age 82: left knee pain after physiotherapy", correct: [1], why: "Knee pain after exercise is not a sign of infection." },
      ],
    },
    {
      ...meta(`${ID}-2`, {
        need: "MOC",
        topic: "Recognizing an influenza outbreak in long-term care",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The residents in rooms 204, 208 and 215 are tested at 1530. At 1700 rooms 204 and 215 are positive for influenza A. Room 208 is negative. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Two residents on the same unit have laboratory-confirmed influenza within 72 hours of each other. That meets the outbreak definition. A third case is not needed. Community spread and symptoms alone do not define an outbreak. The negative test in room 208 does not cancel the 2 positive results.",
        refs: [REF_OUTBREAK],
        sources: [SRC.fluLtc],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The unit {0} because {1}.",
      blanks: [
        {
          options: [
            { text: "has 2 sporadic cases", why: "Two confirmed cases on one unit within 72 hours are treated as an outbreak, not as sporadic cases." },
            { text: "needs a third case to confirm an outbreak", why: "Two confirmed cases within 72 hours are enough to define an outbreak." },
            { text: "has an influenza outbreak", why: "Two residents on the unit tested positive within 72 hours, which meets the definition." },
            { text: "has no outbreak yet", why: "The definition is already met by the 2 positive residents." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "influenza is circulating in the community", why: "Community spread raises the risk but does not define an outbreak on the unit." },
            { text: "the resident in room 208 tested negative", why: "One negative result does not cancel 2 positive results." },
            { text: "3 residents have respiratory symptoms", why: "Symptoms alone do not define an outbreak without laboratory confirmation." },
            { text: "2 residents tested positive within 72 hours", why: "Two laboratory-confirmed cases on one unit within 72 hours meet the outbreak definition." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Which resident to see first during an outbreak",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1730 the nurse receives updates on 4 residents. Which resident should the nurse assess first?",
        rationale:
          "The resident in room 215 has confirmed influenza, an SpO2 of 87% and a respiratory rate of 30/minute. These findings suggest pneumonia or respiratory failure, a common and deadly complication in older adults. The other residents are stable. A temperature of 38.0°C (100.4°F) needs follow-up but not first. An SpO2 of 91% is the usual level for the resident with COPD.",
        sources: [SRC.fluLtc, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Room 204, temperature 38.0°C (100.4°F), asking for a drink", why: "Her fever needs treatment, but she is alert and drinking, so she is more stable." },
        { text: "Room 211, SpO2 91% on room air, her usual level with COPD", why: "An SpO2 of 91% is her baseline and is not a new change." },
        { text: "Room 208, runny nose, wants to join the evening bingo", why: "Mild symptoms need precautions, but this resident is stable." },
        { text: "Room 215, SpO2 87% on room air, respiratory rate 30/minute", why: "Low oxygen and fast breathing with confirmed influenza suggest pneumonia or respiratory failure." },
      ],
      correct: 3,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Controlling influenza spread in long-term care",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 4,
        stem: "The nurse and the on-call infection preventionist plan the response to the outbreak. Which measures should be included? Select all that apply.",
        rationale:
          "Ill residents need droplet precautions. All well residents on the unit are offered antiviral prophylaxis, whether or not they were vaccinated. Large group activities are limited. The health department is notified of every suspected or confirmed outbreak. Staff with influenza-like illness stay home until at least 24 hours after fever ends. Treatment starts without waiting for test results.",
        refs: ["Staff with influenza-like illness stay off work until at least 24 hours after the fever ends."],
        sources: [SRC.fluLtc, SRC.fluRx, { body: "Public Health Agency of Canada", work: "Guidance: Infection prevention and control measures for healthcare workers in acute care and long-term care settings", year: 2021, url: "https://www.canada.ca/en/public-health/services/infectious-diseases/nosocomial-occupational-infections/guidance-infection-prevention-control-measures-healthcare-workers-acute-care-long-term-care-settings.html" }],
        canada:
          "PHAC guidance also advises offering chemoprophylaxis to all residents in the outbreak area, vaccinated or not. Outbreaks are reported to regional or provincial public health authorities as each province requires.",
      }),
      kind: "sata",
      options: [
        { text: "Place ill residents on droplet precautions", why: "Influenza spreads by large droplets at close range." },
        { text: "Limit prophylaxis to residents who missed the vaccine", why: "Vaccine protection is incomplete, so prophylaxis is offered to vaccinated residents too." },
        { text: "Offer antiviral prophylaxis to all well residents on the unit", why: "Prophylaxis for every well resident on the unit limits further spread." },
        { text: "Let staff with a fever work if they wear a mask", why: "Staff with influenza-like illness stay home until at least 24 hours after the fever ends." },
        { text: "Pause large group activities on the unit", why: "Group activities bring residents into close contact and spread the virus." },
        { text: "Wait for test results before treating new cases", why: "Antiviral treatment works best early and starts without waiting for results." },
        { text: "Notify the local health department", why: "Health departments are told of every suspected or confirmed outbreak in long-term care." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PSY",
        topic: "Responding to distress about isolation",
        cjmm: "action",
        process: "communication",
        difficulty: 2,
        stem: "The resident in room 204 has mild dementia. She is on droplet precautions and is served meals in her room. She is tearful and says, \"Why is everyone wearing masks? Did I do something wrong?\" Which response by the nurse is best?",
        rationale:
          "The resident is frightened and thinks she is being punished. A short, clear explanation suits her mild dementia. Telling her she did nothing wrong addresses her fear directly. False reassurance dismisses her feelings. Pointing to others who are sick does not answer her question. Putting off the talk leaves her distressed.",
        sources: [SRC.varcarolis, SRC.potter],
      }),
      kind: "mc",
      options: [
        { text: "\"Try not to worry. It will all be over soon.\"", why: "This is false reassurance and dismisses her fear." },
        { text: "\"The masks stop the flu spreading. You did nothing wrong.\"", why: "A simple explanation and direct reassurance answer both her question and her fear." },
        { text: "\"Many residents are sick, so you are not alone in this.\"", why: "This shifts the focus to others and does not answer her question." },
        { text: "\"We can talk about this once your fever is gone.\"", why: "Delaying the talk leaves her frightened and alone with her worry." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Influenza vaccination plans in long-term care",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 4,
        stem: "After the outbreak ends, the nurse reviews next season's vaccination plan with a newly hired nurse. Which two statements by the new nurse show correct understanding? Select two.",
        rationale:
          "Influenza vaccine is given every year because the strains and protection change. Staff vaccination protects residents who respond poorly to vaccines. For adults 65 and older, a high-dose, adjuvanted or recombinant vaccine is preferred. The nasal spray vaccine is licensed only for younger people. Past infection does not replace next year's vaccine. Inactivated vaccines cannot cause influenza.",
        sources: [SRC.acip, SRC.fluLtc, { body: "National Advisory Committee on Immunization. Public Health Agency of Canada", work: "Canadian Immunization Guide, Influenza vaccines", year: 2026, url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-10-influenza-vaccine.html" }],
        canada:
          "NACI likewise prefers high-dose, adjuvanted or recombinant vaccine for adults 65 and older. In Canada the nasal spray FluMist is given only from 2 to 59 years of age.",
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"Residents who had flu this year can skip next year's vaccine.\"", why: "Strains change and protection fades, so the vaccine is given every season." },
        { text: "\"Every staff member should get a flu vaccine each year.\"", why: "Staff vaccination lowers the chance of bringing the virus to residents." },
        { text: "\"The nasal spray vaccine is best for our residents.\"", why: "The nasal spray is licensed only for younger people and is not used for older residents." },
        { text: "\"Residents 65 and older should get a high-dose vaccine.\"", why: "High-dose, adjuvanted or recombinant vaccines are preferred at this age." },
        { text: "\"The shot can cause the flu, so we give it in spring.\"", why: "Inactivated vaccine cannot cause influenza. It is given before the season starts." },
      ],
      correct: [1, 3],
    },
  ],
};
