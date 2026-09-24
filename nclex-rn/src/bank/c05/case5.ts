import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c05-5";

/** Case 5. Home health. Older adult with an MRSA-colonized leg ulcer and a family caregiver. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Home Visit for a Leg Wound",
  intro:
    "A home health nurse visits an 81-year-old woman who lives with her daughter. She has a venous ulcer on the right lower leg. A wound culture last week grew methicillin-resistant Staphylococcus aureus (MRSA). Her daughter does most of the dressing changes between visits.",
  tabs: [
    {
      title: "Referral and History",
      text: [
        "Chronic venous insufficiency. Heart failure with preserved ejection fraction. Mild hearing loss.",
        "Ulcer on the right inner ankle, 4 cm by 3 cm, present for 5 months.",
        "Home health visits 3 times a week for wound care.",
        "Last visit 3 days ago: wound edges pink, redness limited to 1 cm around the wound, no odor.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Today at 1000"],
        rows: [
          ["Temperature", "38.3°C (100.9°F)"],
          ["Heart rate", "104/minute"],
          ["Respiratory rate", "20/minute"],
          ["BP", "118/70 mmHg"],
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
        need: "SIPC",
        topic: "Infection cues and lapses in the home",
        cjmm: "recognize",
        difficulty: 2,
        stem: "During today's visit the nurse writes the note below. Click to highlight the findings that call for action by the nurse during this visit.",
        rationale:
          "Redness has spread from 1 cm to 8 cm in 3 days, and the calf is warm and tender. With a temperature of 38.3°C and a heart rate of 104/minute, this suggests spreading cellulitis. Ungloved dressing changes and a shared towel let MRSA spread in the home. A red, moist wound bed, raised legs, a pill box and sanitizer are good findings.",
        sources: [SRC.idsa, SRC.cdcMrsa],
      }),
      kind: "highlight",
      passage:
        "[[Redness now spreads 8 cm above the wound]]. [[Right calf warm and tender to touch]]. [[Wound bed red and moist]]. [[Daughter changes the dressing without gloves]]. [[Hand sanitizer kept by the front door]]. [[Client and daughter share one bath towel]]. [[Takes her medications from a weekly pill box]]. [[Sleeps with her legs raised on a pillow]].",
      spans: [
        { text: "Redness now spreads 8 cm above the wound", why: "Redness spreading from 1 cm to 8 cm in 3 days suggests cellulitis." },
        { text: "Right calf warm and tender to touch", why: "Warmth and tenderness beyond the wound show spreading infection." },
        { text: "Wound bed red and moist", why: "A red, moist base is healthy granulation tissue." },
        { text: "Daughter changes the dressing without gloves", why: "Bare hands on an MRSA wound can carry the organism to the daughter and others." },
        { text: "Hand sanitizer kept by the front door", why: "Sanitizer close at hand supports hand hygiene." },
        { text: "Client and daughter share one bath towel", why: "MRSA survives on towels and spreads when they are shared." },
        { text: "Takes her medications from a weekly pill box", why: "A pill box supports safe medication use." },
        { text: "Sleeps with her legs raised on a pillow", why: "Raising the legs helps venous return in venous insufficiency." },
      ],
      correct: [0, 1, 3, 5],
    },
    {
      ...meta(`${ID}-2`, {
        need: "SIPC",
        topic: "Routes of MRSA spread in a household",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse considers how MRSA could pass between the people in this home. Choose the most likely option for each blank in the sentence.",
        rationale:
          "MRSA spreads by direct contact and through shared items. The daughter touches the wound without gloves, and the two share one bath towel. Both put her at risk of carrying MRSA. A healthy wound bed, a pill box and raised legs do not spread infection. No fall, error or caregiver strain is described in the note.",
        sources: [SRC.cdcMrsa, SRC.isolation],
      }),
      kind: "cloze",
      scoring: "triad",
      template: "The household is at risk for {0} as evidenced by {1} and {2}.",
      blanks: [
        {
          options: [
            { text: "a fall at home at night", why: "The note gives no fall history or hazard." },
            { text: "MRSA spread to the daughter", why: "Direct contact with the wound and shared items can carry MRSA to her." },
            { text: "an error with her medications", why: "She uses a weekly pill box, and no error is described." },
            { text: "strain on the caregiver", why: "The note describes no signs of caregiver strain." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a red, moist wound bed", why: "A healthy wound bed does not show a route of spread." },
            { text: "a weekly pill box", why: "A pill box has no link to MRSA spread." },
            { text: "dressing changes without gloves", why: "Bare hands on the wound are a direct contact route for MRSA." },
            { text: "legs raised on a pillow", why: "Raising the legs aids venous return and does not spread infection." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "sanitizer by the front door", why: "Sanitizer supports hand hygiene and lowers spread." },
            { text: "visits 3 times a week", why: "Visit frequency is not a route of spread." },
            { text: "mild hearing loss", why: "Hearing loss affects teaching, not MRSA spread." },
            { text: "one shared bath towel", why: "MRSA survives on towels, so a shared towel carries it between people." },
          ],
          correct: 3,
        },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Priority concern on a home visit",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "After the assessment the nurse lists the concerns for this visit. Which concern is the priority?",
        rationale:
          "A temperature of 38.3°C, a heart rate of 104/minute and redness spreading well beyond the wound point to an advancing infection. It could progress to sepsis in an 81-year-old client. This concern comes first and needs a same-day report to the primary health care provider. Teaching, slow healing and hearing loss follow.",
        sources: [SRC.idsa],
      }),
      kind: "mc",
      options: [
        { text: "Caregiver knowledge of MRSA spread", why: "Teaching matters, but it can follow once the infection is reported." },
        { text: "Wound healing over 5 months", why: "Slow healing needs review, but it is not an immediate threat." },
        { text: "Spreading leg infection with fever", why: "Fever, a heart rate of 104/minute and spreading redness suggest the infection is advancing." },
        { text: "Hearing loss during teaching", why: "Hearing loss changes how teaching is given. It is not a threat to health today." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Referrals in home health care",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse updates the plan of care with the client and her daughter. The daughter adds that she cannot afford gloves and feels worn out. For each need, specify the team member the nurse should involve.",
        rationale:
          "The primary health care provider handles new signs of infection and prescriptions. A wound care nurse specialist advises on dressings for an ulcer open for 5 months. A social worker addresses the cost of supplies and caregiver fatigue through funding and respite. Coordinating these referrals is part of home health case management.",
        sources: [SRC.brunner, SRC.idsa, { body: "Health Canada", work: "Home and community care", year: 2026, url: "https://www.canada.ca/en/health-canada/services/home-continuing-care.html" }],
        canada: "In Canada, provinces and territories organize and deliver home and community care, including respite. Some services and supplies are not covered by public health plans, so costs to the family vary by province.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Primary health care provider", "Wound care nurse specialist", "Social worker"],
      rows: [
        { text: "Fever with spreading redness", correct: [0], why: "New signs of infection need assessment and possible antibiotics from the provider." },
        { text: "Ulcer unhealed after 5 months", correct: [1], why: "A wound specialist advises on dressings and compression when healing is slow." },
        { text: "Cannot afford gloves and supplies", correct: [2], why: "A social worker links the family to funding and supply programs." },
        { text: "Needs an antibiotic prescription", correct: [0], why: "Only a prescriber can order the antibiotic." },
        { text: "Daughter is worn out and wants a break", correct: [2], why: "A social worker can arrange respite and caregiver support." },
        { text: "Choice of dressing for a moist ulcer", correct: [1], why: "The wound specialist matches the dressing to the wound bed." },
      ],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Bag technique on a home visit",
        cjmm: "action",
        difficulty: 3,
        stem: "The primary health care provider prescribes an oral antibiotic and asks the nurse to continue wound care. The nurse sets up for the dressing change in the home. Which actions follow infection control practice for this visit? Select all that apply.",
        rationale:
          "Bag technique keeps the nursing bag clean between homes. The bag sits on a clean barrier on a hard surface, and hands are cleaned before reaching in. Gloves protect the nurse while removing the soiled dressing. Equipment used for an MRSA client stays in the home or is cleaned before it goes back in the bag. Soiled dressings go in the household trash.",
        sources: [SRC.bag, SRC.isolation, SRC.cdcMrsa],
      }),
      kind: "sata",
      options: [
        { text: "Set the nursing bag on a clean barrier on a hard surface", why: "A barrier on a hard surface keeps the bag off contaminated areas." },
        { text: "Set the nursing bag on the client's bed to keep it close", why: "Beds and soft furnishings can contaminate the bag." },
        { text: "Perform hand hygiene before taking items from the bag", why: "Clean hands keep organisms out of the bag and its contents." },
        { text: "Put the used scissors back in the bag before cleaning them", why: "Dirty equipment would contaminate the bag. It is cleaned first." },
        { text: "Wear gloves to remove the old dressing", why: "Gloves protect the nurse's hands from the MRSA wound." },
        { text: "Carry the used dressing out to the car in the bag", why: "Soiled dressings are bagged and discarded in the household trash." },
        { text: "Leave a stethoscope in the home for this client", why: "Dedicated equipment kept in the home limits spread to other clients." },
      ],
      correct: [0, 2, 4, 6],
    },
    {
      ...meta(`${ID}-6`, {
        need: "SIPC",
        topic: "Caregiver steps to limit MRSA spread",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "At the next visit 2 days later, the nurse asks the daughter how she is preventing the spread of MRSA at home. Which statements show understanding? Select three.",
        rationale:
          "Hand hygiene before and after wound contact, separate towels and washing and drying of bedding all block MRSA spread in the home. The wound should stay covered. The full antibiotic course is taken even after the redness fades. A cloth used on the wound should not touch other skin.",
        sources: [SRC.cdcMrsa, SRC.cdcAthletes],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "\"I wash my hands before and after I touch the dressing.\"", why: "Hand hygiene is the main way to stop spread." },
        { text: "\"I leave the wound uncovered in the day so it can air out.\"", why: "An uncovered wound spreads organisms. It should stay covered." },
        { text: "\"We each have our own towel and washcloth now.\"", why: "Not sharing towels removes a route of spread." },
        { text: "\"I stopped her antibiotic once the redness faded.\"", why: "Stopping early can let the infection return. The full course is taken." },
        { text: "\"I wash her bedding at the warmest setting on the label.\"", why: "Washing and fully drying linens as the label directs helps remove MRSA." },
        { text: "\"I use the same cloth to clean her wound and her face.\"", why: "A shared cloth moves organisms from the wound to other skin." },
      ],
      correct: [0, 2, 4],
    },
  ],
};
