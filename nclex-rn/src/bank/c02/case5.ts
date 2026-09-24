import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c02-5";

/** Case 5. Home health. Older man at home after a stroke, cared for by his wife. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Home Visit at Snack Time",
  intro:
    "A home health nurse visits a 77-year-old man at 1000. He came home 6 days ago after a right hemisphere ischemic stroke. He has weakness of the left arm and leg. He lives with his 75-year-old wife, who does most of his care. His discharge plan lists soft foods and mildly thick liquids.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Ischemic stroke 12 days ago. Left arm and leg weakness. Left facial droop.",
        "Hospital swallow study: delayed swallow with thin liquids. Speech-language pathologist advised mildly thick liquids and soft foods.",
        "Type 2 diabetes. Skin intact on last hospital check.",
        "Weight at hospital discharge 72 kg.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1000"],
        rows: [
          ["Temperature", "37.0°C (98.6°F)"],
          ["Heart rate", "84/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "138/82 mmHg"],
          ["SpO2 on room air", "95%"],
          ["Fingerstick glucose", "142 mg/dL (7.9 mmol/L)"],
          ["Weight", "69.5 kg"],
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
        topic: "Observing a meal after a stroke",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse watches the client eat a snack with his wife and writes the note below. Click to highlight the findings that require follow-up.",
        rationale:
          "Thin water through a straw goes against the swallow plan and speeds liquid into an airway that closes late. Coughing after swallows and a wet voice suggest food or fluid entering the airway. Food held in the weak left cheek can be inhaled later. Eating fast while talking raises the risk further. Sitting upright, feeding himself, small bites and cut-up food are safe practices.",
        sources: [SRC.stroke, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Sits upright in a kitchen chair]]. [[Drinks thin water through a straw]]. [[Feeds himself with his right hand]]. [[Coughs after several swallows]]. [[Takes small bites of soft food]]. [[Voice sounds wet after drinks]]. [[Wife cuts his food into small pieces]]. [[Food held in the left cheek]]. [[Eats fast and talks while chewing]].",
      spans: [
        { text: "Sits upright in a kitchen chair", why: "An upright position is a safe way to eat after a stroke." },
        { text: "Drinks thin water through a straw", why: "Thin liquid through a straw goes against the plan for mildly thick liquids." },
        { text: "Feeds himself with his right hand", why: "Using the strong hand supports independence and is expected." },
        { text: "Coughs after several swallows", why: "Coughing with swallows suggests food or fluid entering the airway." },
        { text: "Takes small bites of soft food", why: "Small bites of soft food match the swallow plan." },
        { text: "Voice sounds wet after drinks", why: "A wet voice suggests liquid sitting at the entrance to the airway." },
        { text: "Wife cuts his food into small pieces", why: "Cutting food small makes it easier and safer to swallow." },
        { text: "Food held in the left cheek", why: "Food pocketed on the weak side can be inhaled later." },
        { text: "Eats fast and talks while chewing", why: "Fast eating and talking with food in the mouth raise the choking risk." },
      ],
      correct: [1, 3, 5, 7, 8],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Linking findings to nutrition and swallowing problems",
        cjmm: "analyze",
        difficulty: 3,
        stem: "His wife says he eats about half of each meal. The nurse reviews the findings from the visit. For each finding, specify whether it supports aspiration risk, poor nutritional intake or neither.",
        rationale:
          "Coughing after swallows, a wet voice and food held in the weak cheek all point to unsafe swallowing. A weight drop from 72 kg to 69.5 kg in 6 days and eating half of each meal point to poor intake. A BP of 138/82 mmHg and feeding himself with his right hand support neither problem.",
        sources: [SRC.stroke, SRC.brunner],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Aspiration risk", "Poor nutritional intake", "Neither"],
      rows: [
        { text: "Coughs after several swallows", correct: [0], why: "Coughing with swallows is a sign of food or fluid entering the airway." },
        { text: "Weight 69.5 kg, down from 72 kg", correct: [1], why: "Weight loss over 6 days shows his intake is falling short." },
        { text: "Wet voice after drinks", correct: [0], why: "A wet voice suggests liquid pooling near the airway." },
        { text: "Eats about half of each meal", correct: [1], why: "Eating half of each meal leaves a gap in calories and protein." },
        { text: "BP 138/82 mmHg", correct: [2], why: "This BP does not point to either problem." },
        { text: "Food held in the left cheek", correct: [0], why: "Pocketed food on the weak side can be inhaled." },
        { text: "Feeds himself with his right hand", correct: [2], why: "Self-feeding with the strong hand is expected and supports neither problem." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "SIPC",
        topic: "Priority risk at home after a stroke",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "His wife says he has coughed at most meals this week. His lungs are clear and his temperature is 37.0°C (98.6°F). Which risk is the nurse's priority?",
        rationale:
          "Coughing at most meals, a wet voice and thin liquids through a straw show that food and fluid are reaching the airway. Aspiration can cause pneumonia or choking, which threaten breathing. Clear lungs and a normal temperature mean pneumonia has not yet shown, so prevention now matters most. A glucose of 142 mg/dL (7.9 mmol/L) is not low. No falls or skin problems are reported.",
        sources: [SRC.stroke, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Aspiration", why: "Signs of fluid entering the airway at most meals threaten breathing." },
        { text: "Hypoglycemia", why: "His glucose is 142 mg/dL (7.9 mmol/L), which is not low." },
        { text: "Pressure injury", why: "His skin was intact and he sits up in a chair. No skin problem is reported." },
        { text: "Falls", why: "Weakness raises fall risk, but no fall is reported. Airway risk at every meal comes first." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-4`, {
        need: "MOC",
        topic: "Referrals in home health",
        cjmm: "generate",
        process: "communication",
        difficulty: 2,
        stem: "His wife says she is exhausted and has not slept well since he came home. The nurse plans referrals. Drag the words to fill in each blank.",
        rationale:
          "The speech-language pathologist reassesses swallowing and sets safe food and liquid textures. The registered dietitian plans calories and protein to stop the weight loss. The social worker links an exhausted caregiver with respite care and community help. A physical therapist, respiratory therapist or pharmacist does not address these problems.",
        sources: [SRC.stroke, SRC.brunner, { body: "Health Canada", work: "Home and community care", year: 2026, url: "https://www.canada.ca/en/health-canada/services/home-continuing-care/home-community-care.html" }],
        canada: "In Canada, each province and territory organizes and delivers home care. Some home care services are not covered by provincial plans, so families may pay through private insurance or out of pocket.",
      }),
      kind: "dnd",
      scoring: "zero-one",
      template: "For the swallowing problem the nurse contacts {0}. For the weight loss the nurse contacts {1}. For the wife's exhaustion the nurse contacts {2}.",
      targets: ["Swallowing", "Weight loss", "Caregiver exhaustion"],
      tokens: [
        { text: "the physical therapist", why: "Physical therapy works on walking and strength, not these problems." },
        { text: "the registered dietitian", why: "A dietitian plans calories and protein to stop weight loss." },
        { text: "the respiratory therapist", why: "His breathing is not the present problem. His lungs are clear." },
        { text: "the speech-language pathologist", why: "This therapist assesses swallowing and sets safe textures." },
        { text: "the pharmacist", why: "A pharmacist reviews medications, which do not explain these problems." },
        { text: "the social worker", why: "A social worker links caregivers with respite and community help." },
      ],
      correct: [3, 1, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "SIPC",
        topic: "Teaching safe swallowing at home",
        cjmm: "action",
        process: "teaching",
        difficulty: 3,
        stem: "The nurse teaches his wife how to lower his aspiration risk at meals. Which instructions should the nurse include? Select all that apply.",
        rationale:
          "Sitting fully upright lets gravity guide food down. Liquids thickened to the level the therapist set move slowly enough for a delayed swallow. Tucking the chin narrows the airway entrance during the swallow. Checking the weak cheek removes pocketed food. A straw sends thin liquid in too fast. Lying down after meals and mixing thin broth into food both raise the risk.",
        sources: [SRC.brunner, SRC.stroke],
      }),
      kind: "sata",
      options: [
        { text: "Offer water through a straw between bites", why: "A straw delivers thin liquid too fast for a delayed swallow." },
        { text: "Seat him upright at 90 degrees for meals", why: "An upright position helps food pass into the esophagus." },
        { text: "Thicken liquids to the level the therapist set", why: "Thicker liquids move slowly enough for a delayed swallow." },
        { text: "Let him lie down right after eating", why: "Lying down after meals raises the risk of reflux and aspiration." },
        { text: "Have him tuck his chin when he swallows", why: "A chin tuck narrows the airway entrance during the swallow." },
        { text: "Mix thin broth into food to soften it", why: "Mixed thin and solid textures are hard to control and raise risk." },
        { text: "Check his left cheek for food after meals", why: "Food pockets on the weak side and can be inhaled later." },
      ],
      correct: [1, 2, 4, 6],
    },
    {
      ...meta(`${ID}-6`, {
        need: "MOC",
        topic: "Supervising a home health aide",
        cjmm: "evaluate",
        difficulty: 3,
        stem: "Two weeks later a home health aide visits 3 times a week. The nurse makes a supervisory visit and watches the aide at lunch. For each action by the aide, specify whether it is appropriate or needs correction.",
        rationale:
          "The nurse stays accountable for delegated care and checks that the aide follows the plan. Seating him upright, thickening liquids, recording intake and reporting coughing all follow the plan. Thin water through a straw and lying flat after lunch raise aspiration risk. Changing the diet texture is outside the aide's role and goes against the therapist's plan.",
        sources: [SRC.delegation, SRC.stroke, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
        canada: "In Canada, home health aides are unregulated care providers, such as home support workers or health care aides. What an RN may assign or delegate to them is set by each provincial regulator and varies by province.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Appropriate", "Needs correction"],
      rows: [
        { text: "Seats him upright in a chair for lunch", correct: [0], why: "Upright positioning follows the swallow plan." },
        { text: "Offers thin water with a straw when he coughs", correct: [1], why: "Thin liquid through a straw raises the aspiration risk." },
        { text: "Thickens his juice to the prescribed level", correct: [0], why: "Thickened liquids follow the therapist's plan." },
        { text: "Records how much of each meal he eats", correct: [0], why: "Intake records help track his nutrition." },
        { text: "Lays him flat for a nap right after lunch", correct: [1], why: "Lying flat after eating raises the risk of aspiration." },
        { text: "Tells the nurse he coughed twice at lunch", correct: [0], why: "Reporting changes lets the nurse act on them." },
        { text: "Switches him to thin liquids because he asked", correct: [1], why: "The aide cannot change the diet plan. The nurse and therapist decide." },
      ],
    },
  ],
};
