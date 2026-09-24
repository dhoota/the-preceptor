import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c04-1";

/** Case 1. Pediatric unit. Infant with a viral lower respiratory infection. */
export const CASE1: CaseStudy = {
  id: ID,
  title: "A Congested Infant on the Pediatric Unit",
  intro:
    "A 4-month-old boy is admitted to the pediatric unit from the emergency department at 1400. He has had a runny nose for 3 days and a cough for 2 days. His mother says he has fed poorly since last night.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Born at 39 weeks of gestation. No previous illnesses. Immunizations up to date for age.",
        "Formula fed. Usually takes 150 mL every 3 to 4 hours.",
        "Lives with his parents and a 3-year-old sister who attends day care.",
        "His father smokes outside the home.",
        "Weight at a well-child visit 1 week ago was 6.7 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1400"],
        rows: [
          ["Temperature", "38.1°C (100.6°F)"],
          ["Heart rate", "172/minute, awake"],
          ["Respiratory rate", "64/minute"],
          ["SpO2", "89% on room air"],
          ["Weight", "6.4 kg"],
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
        topic: "Work of breathing and intake in an infant",
        cjmm: "recognize",
        difficulty: 2,
        stem: "At 1430 the nurse examines the infant on his mother's lap and records the findings below. Click to highlight the findings that require follow-up.",
        rationale:
          "Nasal flaring and retractions show that the infant is working hard to breathe. Crackles and wheezes reflect swelling and mucus in the small airways. He has taken only 60 mL since 0600, far less than his usual 150 mL every 3 to 4 hours. One wet diaper since 0600 fits that low intake. Being consoled, a soft flat fontanel, moist mucosa and a capillary refill of 2 seconds are reassuring.",
        sources: [SRC.bronchiolitis, SRC.wong],
      }),
      kind: "highlight",
      passage:
        "[[Fussy but consoled by his mother]]. [[Anterior fontanel soft and flat]]. [[Nasal flaring with each breath]]. [[Subcostal and intercostal retractions]]. [[Fine crackles and expiratory wheezes in both lungs]]. [[Oral mucosa pink and moist]]. [[Has taken 60 mL of formula since 0600]]. [[Capillary refill 2 seconds]]. [[One wet diaper since 0600]].",
      spans: [
        { text: "Fussy but consoled by his mother", why: "An infant who settles with a parent is showing normal behavior." },
        { text: "Anterior fontanel soft and flat", why: "A soft, flat fontanel is expected. A sunken one would suggest dehydration." },
        { text: "Nasal flaring with each breath", why: "Flaring widens the airway and is a sign of respiratory distress in infants." },
        { text: "Subcostal and intercostal retractions", why: "Retractions show the infant is using extra effort to move air." },
        { text: "Fine crackles and expiratory wheezes in both lungs", why: "These sounds reflect narrowed small airways filled with mucus." },
        { text: "Oral mucosa pink and moist", why: "Moist mucosa shows adequate hydration at this point." },
        { text: "Has taken 60 mL of formula since 0600", why: "This is far below his usual 150 mL every 3 to 4 hours." },
        { text: "Capillary refill 2 seconds", why: "A refill of 2 seconds is within the normal limit." },
        { text: "One wet diaper since 0600", why: "Few wet diapers point to low intake and a risk of dehydration." },
      ],
      correct: [2, 3, 4, 6, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PA",
        topic: "Sorting respiratory and fluid findings in an infant",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse compares the infant's findings so far with norms for his age. For each finding, specify whether it indicates respiratory compromise, fluid volume deficit or is within the expected range for age.",
        refs: ["Awake infant heart rate 100 to 190/minute.", "Infant respiratory rate 30 to 53/minute."],
        rationale:
          "An infant's respiratory rate runs 30 to 53/minute, so 64/minute is fast. An SpO2 of 89% and nasal flaring add to the picture of respiratory compromise. The weight fell from 6.7 kg to 6.4 kg in a week. With one wet diaper since 0600, this points to a fluid deficit. A heart rate of 172/minute is inside the awake range of 100 to 190/minute. A soft, flat fontanel is expected.",
        sources: [SRC.pals, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Respiratory compromise", "Fluid volume deficit", "Within expected range for age"],
      rows: [
        { text: "Respiratory rate 64/minute", correct: [0], why: "This is above the infant range of 30 to 53/minute." },
        { text: "Weight 6.4 kg, down from 6.7 kg a week ago", correct: [1], why: "A quick weight loss in an infant reflects lost body water." },
        { text: "Heart rate 172/minute while awake", correct: [2], why: "This falls within the awake infant range of 100 to 190/minute." },
        { text: "SpO2 89% on room air", correct: [0], why: "A low saturation shows that oxygen exchange is impaired." },
        { text: "One wet diaper since 0600", correct: [1], why: "Low urine output reflects low intake and water loss." },
        { text: "Anterior fontanel soft and flat", correct: [2], why: "A soft, flat fontanel is normal for a 4-month-old." },
        { text: "Nasal flaring with each breath", correct: [0], why: "Flaring is a sign of increased work of breathing." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Setting the first care priority for an infant",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "At 1500 the infant's SpO2 is 88% on room air and respirations are 66/minute. He stops sucking after a few swallows to catch his breath. Complete the following sentence by choosing from the lists of options.",
        refs: ["Clinicians may withhold supplemental oxygen when SpO2 is above 90% in this illness."],
        rationale:
          "An SpO2 of 88% is below the 90% level the guideline uses for oxygen. Respirations of 66/minute and pauses in feeding to breathe show a high work of breathing. Swelling and mucus block the small airways and impair gas exchange. Breathing comes before fluids when setting priorities. The fluid deficit is real but less urgent. A temperature of 38.1°C does not explain the low SpO2.",
        sources: [SRC.bronchiolitis, SRC.wong],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The priority problem is {0}, which is mainly caused by {1}.",
      blanks: [
        {
          options: [
            { text: "deficient fluid volume", why: "The deficit is present but breathing comes first." },
            { text: "impaired gas exchange", why: "An SpO2 of 88% on room air shows oxygen is not reaching the blood." },
            { text: "hyperthermia", why: "A temperature of 38.1°C is a low fever and not the main threat." },
            { text: "acute pain", why: "He settles with his mother and the chart shows no signs of pain." },
          ],
          correct: 1,
        },
        {
          options: [
            { text: "a poor intake of formula", why: "Low intake explains the fluid deficit, not the low SpO2." },
            { text: "a temperature of 38.1°C", why: "A low fever raises oxygen need a little but does not block airways." },
            { text: "mucus plugging small airways", why: "Mucus and swelling narrow the bronchioles and block gas exchange." },
            { text: "an unfamiliar hospital room", why: "A new setting may upset him but does not lower his SpO2." },
          ],
          correct: 2,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Comfort and feeding measures for an infant with congestion",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "At 1530 the primary health care provider prescribes oxygen by nasal cannula to keep SpO2 above 90% and nasogastric feeds if oral intake stays poor. Which nursing measures should the nurse include in the plan of care? Select all that apply.",
        rationale:
          "Gentle suction of the nares before feeds clears the nose, since infants breathe mainly through the nose. The guideline notes that nasal suction may give short relief, while deep suction was linked to longer stays. Small, frequent feeds lower the effort of each feed. Clustered care lets him rest and lowers oxygen demand. Chest physiotherapy is not recommended. Waking him hourly breaks his rest.",
        sources: [SRC.bronchiolitis, SRC.wong],
      }),
      kind: "sata",
      options: [
        { text: "Suction the nares gently before feeds", why: "Clearing the nose eases breathing during feeds for a nose-breathing infant." },
        { text: "Perform chest physiotherapy every 4 hours", why: "The guideline advises against chest physiotherapy because it does not improve outcomes." },
        { text: "Offer small, frequent feeds", why: "Small feeds take less effort and lower the risk of tiring." },
        { text: "Suction deep into the nasopharynx hourly", why: "Deep suctioning was linked to longer hospital stays and can injure the mucosa." },
        { text: "Cluster care to allow rest periods", why: "Grouping care lets the infant rest and lowers oxygen demand." },
        { text: "Wake the infant hourly to offer feeds", why: "Hourly waking breaks rest and raises oxygen demand." },
      ],
      correct: [0, 2, 4],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Isolation for a respiratory virus in an infant",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "At 1600 the nasal swab returns positive for respiratory syncytial virus. Based on CDC isolation guidance, which precautions should the nurse add to standard precautions for this infant?",
        rationale:
          "This virus spreads mainly through contact with secretions on hands and surfaces. The CDC isolation guideline lists contact plus standard precautions for the length of the illness. Staff wear a gown and gloves on entry and use dedicated equipment. The AAP guideline notes that the virus survives on crib rails, tabletops and toys. Airborne precautions and a protective environment serve other conditions.",
        sources: [SRC.isolation, SRC.bronchiolitis, { body: "Public Health Agency of Canada", work: "Routine Practices and Additional Precautions for Preventing the Transmission of Infection in Healthcare Settings, Part C", year: 2017, url: "https://www.canada.ca/en/public-health/services/publications/diseases-conditions/routine-practices-precautions-healthcare-associated-infections/part-c.html" }],
        canada: "The Public Health Agency of Canada guideline lists droplet and contact precautions for this virus and for bronchiolitis, for the duration of symptoms. The item asks for CDC guidance, so the key stays contact precautions.",
      }),
      kind: "mc",
      options: [
        { text: "Droplet precautions", why: "The CDC guideline lists contact precautions for this virus. A mask is worn as standard precautions require." },
        { text: "Contact precautions", why: "Gown, gloves and dedicated equipment block spread from secretions on hands and surfaces." },
        { text: "Airborne precautions", why: "Airborne precautions are for infections spread by droplet nuclei, such as tuberculosis." },
        { text: "Protective environment", why: "A protective environment shields clients with severe immune suppression from outside germs." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Preventing respiratory infections after discharge",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "On day 3 the infant is ready to go home. The nurse has taught his parents about home care and preventing future infections. For each statement by a parent, specify whether it shows understanding or needs further teaching.",
        rationale:
          "Hand hygiene before and after contact limits the spread of the virus. The virus survives for hours on hard surfaces, so wiping crib rails and toys helps. Retractions are a sign of distress that needs care. Tobacco smoke raises the risk and severity of this illness, and smoke lingers on clothes. Asking for help to quit is recommended. A shared bottle passes secretions between the children.",
        sources: [SRC.bronchiolitis, SRC.wong],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"We will use hand sanitizer before and after we hold him.\"", correct: [0], why: "Alcohol hand rub before and after contact limits spread of the virus." },
        { text: "\"Smoke on his father's clothes will not affect him.\"", correct: [1], why: "Smoke lingers on clothes and in the home and still exposes the infant." },
        { text: "\"We will wipe down his crib rails and toys each day.\"", correct: [0], why: "The virus survives on hard surfaces, so cleaning them lowers spread." },
        { text: "\"His sister can share his bottle if she is thirsty.\"", correct: [1], why: "Sharing a bottle passes secretions between the children." },
        { text: "\"We will call if he pulls in between his ribs to breathe.\"", correct: [0], why: "Retractions are a sign of respiratory distress that needs prompt care." },
        { text: "\"His father will ask his provider for help to quit smoking.\"", correct: [0], why: "Counseling about quitting is recommended for families of infants with this illness." },
      ],
    },
  ],
};
