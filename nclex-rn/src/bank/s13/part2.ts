import type { Item } from "@/engine/types";
import { AACN_ASP, ACP_LBP, ACP_LBP_2007, ADA_FOOT, ASPEN_EN, HINKLE, POTTER, WOCN, meta } from "./common";

export const PART2: Item[] = [
  {
    ...meta("rn-s13-11", {
      topic: "Checking a client on continuous tube feeding",
      cjmm: "recognize",
      process: "nursing-process",
      difficulty: 2,
      stem: "The nurse enters the room of a client who receives continuous formula through a nasogastric tube by an open system. Which finding needs action by the nurse?",
      rationale:
        "A client on continuous tube feeding needs the head of the bed at 30 to 45 degrees. At 15 degrees, formula can reflux and be aspirated. The unchanged tube mark suggests the tube has not moved. Formula hung 4 hours ago in an open system is within the 8 hour limit. Active bowel sounds are expected.",
      refs: [
        "The head of the bed is raised 30 to 45 degrees for a client on enteral feeding unless contraindicated.",
        "Formula in an open system may hang up to 8 hours for adults in a health care setting.",
      ],
      sources: [AACN_ASP, ASPEN_EN],
    }),
    kind: "mc",
    options: [
      { text: "Tube mark at the nostril matches the last check", why: "An unchanged external mark suggests the tube is still in place." },
      { text: "Formula in the open bag hung 4 hours ago", why: "Open system formula may hang up to 8 hours. 4 hours is within that limit." },
      { text: "Bowel sounds heard in all four quadrants", why: "Active bowel sounds are expected and support continued feeding." },
      { text: "Head of the bed raised to 15 degrees", why: "At 15 degrees reflux and aspiration are more likely. The bed goes up to at least 30 degrees." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-12", {
      topic: "Tube feeding rate with time off the pump",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A client is prescribed 1440 mL of enteral formula a day by continuous pump. The feeding is held for 4 hours each day for therapy and procedures. The full daily volume must still be given. At what rate should the nurse set the pump?",
      rationale:
        "The pump runs 24 - 4 = 20 hours a day. The full 1440 mL must go in over those 20 hours. 1440 / 20 = 72 mL/hour. A rate of 60 mL/hour ignores the hours off. A rate of 360 mL/hour divides by the hours held instead of the hours running.",
      calc: { expr: "1440 / (24 - 4)", answer: 72, unit: "mL/hour", round: 0, steps: ["24 - 4 = 20", "1440 / 20 = 72"] },
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "50 mL/hour", why: "This takes 4 hours of volume off the total and spreads the rest over 24 hours. The client gets too little." },
      { text: "60 mL/hour", why: "This spreads 1440 mL over 24 hours and ignores the 4 hours the pump is off." },
      { text: "72 mL/hour", why: "1440 mL over the 20 hours the pump runs is 72 mL/hour." },
      { text: "360 mL/hour", why: "This divides the volume by the 4 hours held, not by the 20 hours running." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s13-13", {
      topic: "Mouth care without a gag reflex",
      cjmm: "action",
      process: "caring",
      difficulty: 2,
      stem: "The nurse gives mouth care to a client who is unresponsive in the last days of life. The client's gag reflex is absent. How should the nurse position the client?",
      rationale:
        "An absent gag reflex means the client cannot protect the airway. Side-lying with the face turned toward the bed lets fluid drain out of the mouth. Suction is kept ready. Lying flat, extending the neck or raising the chin all direct fluid toward the airway.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Supine with the head of the bed flat", why: "Lying flat lets fluid pool at the back of the throat, where it can be aspirated." },
      { text: "Side-lying with the face turned toward the bed", why: "Fluid drains out of the mouth instead of toward the airway." },
      { text: "Supine with the neck gently extended", why: "Extending the neck opens the airway to any fluid in the mouth." },
      { text: "Sitting upright with the chin raised", why: "Raising the chin extends the neck and eases fluid into the airway." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s13-14", {
      topic: "Foot care teaching with neuropathy",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 2,
      stem: "The nurse teaches foot care to a 63-year-old client with type 2 diabetes and reduced sensation in both feet. Which statement by the client indicates a need for further teaching?",
      rationale:
        "Reduced sensation means the client may not feel a cut or burn. Cutting a corn with a razor blade risks a wound that goes unnoticed and becomes infected. Self-care of corns and calluses is discouraged. Daily inspection, testing water temperature and keeping lotion from between the toes are all correct.",
      sources: [ADA_FOOT, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "\"I will check my feet each day with a mirror.\"", why: "Daily inspection finds injuries the client cannot feel." },
      { text: "\"I will test bath water with my elbow first.\"", why: "Neuropathy blunts heat sensation in the feet. Testing with the elbow prevents burns." },
      { text: "\"I will trim my own corns with a razor blade.\"", why: "Cutting corns can open the skin. A foot care specialist treats corns and calluses." },
      { text: "\"I will keep lotion off the skin between my toes.\"", why: "Moisture between the toes invites fungal infection." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s13-15", {
      topic: "Cold pack after an ankle sprain",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "A 30-year-old client sprained the right ankle 2 hours ago. The nurse applies a cold pack wrapped in a thin towel. Which instruction about the cold pack should the nurse give?",
      rationale:
        "Cold in the first hours after a sprain constricts vessels and reduces swelling and pain. The pack stays on about 20 minutes, then comes off so the skin can rewarm. A cloth barrier protects the skin. Cold left on too long injures skin and nerves. Heat early in an injury increases swelling.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Keep the pack on for 20 minutes, then remove", why: "About 20 minutes cools the tissue and limits swelling without injuring the skin." },
      { text: "Remove the towel so the pack touches skin", why: "Direct contact with ice can cause a cold injury. The towel stays between the pack and the skin." },
      { text: "Keep the pack in place through the night", why: "Prolonged cold can damage skin and nerves." },
      { text: "Alternate the pack with a heating pad hourly", why: "Heat in the first hours of an injury increases swelling and bleeding." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s13-16", {
      topic: "Nondrug relief for acute low back pain",
      cjmm: "generate",
      process: "teaching",
      difficulty: 2,
      stem: "A 41-year-old client has had low back pain for 5 days after lifting boxes. There is no leg weakness, numbness or change in bladder control. Which nonpharmacologic measures should the nurse recommend? Select all that apply.",
      rationale:
        "Acute low back pain without leg weakness, numbness or bladder change has no red flags. The ACP guideline recommends superficial heat, with massage as another option. Staying active speeds recovery more than bed rest. A rigid brace worn all day is not supported and limits normal movement. Ice left on for hours can injure the skin.",
      sources: [ACP_LBP, ACP_LBP_2007],
    }),
    kind: "sata",
    options: [
      { text: "Stay on bed rest until pain resolves", why: "Bed rest slows recovery compared with staying active." },
      { text: "Apply superficial heat to the lower back", why: "Superficial heat eases acute low back pain, with moderate-quality evidence." },
      { text: "Stay as active as pain allows", why: "Keeping active speeds return to function." },
      { text: "Wear a rigid back brace through the day", why: "Evidence does not support rigid bracing for acute back pain, and it limits movement." },
      { text: "Try massage from a licensed therapist", why: "Massage is a recommended option for acute low back pain." },
      { text: "Apply ice for hours without a break", why: "Continuous cold for hours can cause cold injury to the skin." },
    ],
    correct: [1, 2, 4],
  },
  {
    ...meta("rn-s13-17", {
      topic: "Protecting sleep on a medical unit",
      cjmm: "generate",
      process: "caring",
      difficulty: 2,
      stem: "A 66-year-old client on a medical unit reports poor sleep since admission 3 nights ago. The client wakes for vital signs twice each night and hears alarms from the hallway. Vital signs have been stable for 48 hours. Which actions should the nurse take? Select all that apply.",
      rationale:
        "Stable vital signs for 48 hours let the team review how often overnight checks are needed. Grouping care into fewer visits protects sleep cycles. A familiar bedtime routine helps sleep. Earplugs, an eye mask, a closed door and dim light cut noise and light. Early baths, heavy meals and caffeine at night disrupt sleep.",
      sources: [POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Wake the client early for a morning bath", why: "Waking the client early shortens a night that is already broken." },
      { text: "Ask about the client's home bedtime routine", why: "A familiar routine cues the body for sleep." },
      { text: "Offer a large meal right before bedtime", why: "A heavy meal at bedtime causes discomfort and reflux that disturb sleep." },
      { text: "Group overnight care into fewer visits", why: "Fewer interruptions let the client complete more sleep cycles." },
      { text: "Offer caffeinated tea in the evening", why: "Caffeine delays sleep onset for hours." },
      { text: "Close the door and dim the hallway light", why: "Less noise and light reach the client from the hallway." },
      { text: "Offer earplugs and an eye mask", why: "Earplugs and a mask block the alarms and light that wake the client." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s13-18", {
      topic: "Changing a drainable ileostomy pouch",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "The nurse changes the one-piece drainable pouch of a client with a new ileostomy. Place the steps in the order the nurse should perform them.",
      rationale:
        "The old pouch comes off first, with the skin pressed away from the adhesive to prevent tearing. Warm water cleans the skin, and patting it dry helps the wafer stick. A new stoma shrinks for weeks, so it is measured at each change. The opening is cut to fit. A hand held over the wafer helps it seal. Alcohol dries and irritates skin. Lotion stops the wafer from sticking.",
      sources: [WOCN, POTTER],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth"],
    tokens: [
      { text: "Cut the wafer opening to the stoma size", why: "The opening is cut after measuring so it fits the stoma closely." },
      { text: "Remove the old pouch, pressing the skin away", why: "Pressing the skin away from the adhesive protects it from stripping." },
      { text: "Clean the skin with an alcohol wipe", why: "Alcohol dries and irritates the peristomal skin. It is not part of the sequence." },
      { text: "Measure the stoma with a guide", why: "A new stoma shrinks for weeks, so it is measured at each change." },
      { text: "Apply the pouch and hold a hand over it", why: "The warmth and pressure of a hand help the wafer seal to the skin." },
      { text: "Wash the skin with warm water and pat dry", why: "Clean, dry skin lets the wafer adhere." },
      { text: "Rub lotion into the skin around the stoma", why: "Lotion leaves a film that keeps the wafer from sticking. It is not part of the sequence." },
    ],
    correct: [1, 5, 3, 0, 4],
  },
  {
    ...meta("rn-s13-19", {
      topic: "Dizziness when first sitting up",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 75-year-old client has been on bed rest for 5 days with pneumonia. The client sits on the edge of the bed for the first time and reports dizziness. Lying BP was 128/76 mmHg with heart rate 78/minute. Sitting BP is 104/64 mmHg with heart rate 98/minute. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Systolic BP fell from 128 to 104 mmHg and diastolic from 76 to 64 mmHg when the client sat up. Heart rate rose from 78 to 98/minute. With dizziness, this meets the definition of orthostatic hypotension. Bed rest reduces vascular tone and plasma volume. Lying the client down restores blood flow to the brain. The client then sits up in stages.",
      refs: ["Orthostatic hypotension is a fall of 20 mmHg or more in systolic BP or 10 mmHg or more in diastolic BP on sitting up or standing."],
      sources: [HINKLE, POTTER],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "The client is most likely experiencing {0}, and the nurse should first {1}.",
    blanks: [
      {
        options: [
          { text: "a vasovagal response", why: "A vasovagal response slows the heart. This client's heart rate rose from 78 to 98/minute." },
          { text: "orthostatic hypotension", why: "Systolic BP fell from 128 to 104 mmHg on sitting up, with dizziness and a rising heart rate." },
          { text: "hypoglycemia", why: "The stem gives no glucose value, sweating or tremor to point to low glucose." },
          { text: "an expected response to sitting", why: "A fall in systolic BP from 128 to 104 mmHg with dizziness is more than the expected change." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "help the client stand and walk", why: "Standing would drop the BP further and risk a fall." },
          { text: "give a glass of orange juice", why: "Juice treats low glucose, which the stem does not show." },
          { text: "return the client to a lying position", why: "Lying down restores blood flow to the brain and relieves the dizziness." },
          { text: "recheck the BP in 1 hour", why: "The client has symptoms now. Waiting an hour leaves the client at risk of fainting." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s13-20", {
      topic: "Falling intake in an older adult",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      trend: true,
      stem: "An 88-year-old client in long-term care needs help to drink and has become less interested in fluids. The nurse reviews the intake and output record. Based on the trend, which problem is most likely developing?",
      tabs: [
        {
          title: "Intake and Output",
          table: {
            head: ["Measure", "Day 1", "Day 2", "Day 3", "Day 4"],
            rows: [
              ["Oral intake (mL)", "1500", "1200", "900", "700"],
              ["Urine output (mL)", "1300", "1000", "700", "450"],
              ["Weight (kg)", "58.0", "57.6", "57.1", "56.6"],
              ["Urine color", "Pale yellow", "Yellow", "Dark yellow", "Amber"],
            ],
          },
        },
      ],
      rationale:
        "Oral intake fell from 1500 to 700 mL a day over 4 days. Urine output fell from 1300 to 450 mL, and urine darkened from pale yellow to amber. Weight dropped from 58.0 to 56.6 kg. Together these show a growing fluid deficit. Older adults have a blunted thirst response and depend on help to drink. Fluid excess would raise weight.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Fluid volume excess", why: "Weight fell each day. Fluid excess causes weight gain." },
      { text: "Expected change with aging", why: "Aging blunts thirst, but a steady fall in intake, output and weight is not expected." },
      { text: "Fluid volume deficit", why: "Falling intake, output and weight with darker urine show a growing deficit." },
      { text: "Acute urinary retention", why: "Retention lowers output but does not explain falling intake, weight loss and darker urine." },
    ],
    correct: 2,
  },
];
