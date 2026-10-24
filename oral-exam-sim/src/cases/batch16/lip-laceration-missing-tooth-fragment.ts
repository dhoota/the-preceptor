// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const lipLacerationMissingToothFragment: OralCase = {
  id: "lip-laceration-missing-tooth-fragment",
  title: "A fall on the back steps",
  blueprint: "procedures",
  alsoCovers: ["trauma"],
  priorityTopic: "lacerations",
  keyFeatures: [
    { topic: "lacerations", n: 1 },
    { topic: "lacerations", n: 2 },
    { topic: "lacerations", n: 3 },
    { topic: "lacerations", n: 4 },
  ],
  summary: "A young man has a bleeding lip after he fell on icy steps at home.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a rural hospital when the following patient arrives. " +
    "A 24 year old man walks in 90 minutes after he slipped on icy steps and struck his mouth on the edge of a concrete step. His lower lip is bleeding.",
  card: {
    vitals: {
      temperature: "36.7°C oral",
      pulse: "92/minute",
      resp: "16/minute",
      bp: "134/78 mmHg",
      o2sat: "99% on room air",
      weight: "82 kg (181 lb)",
    },
    medications: "None",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of the presenting illness",
      result:
        "At 17:40 he slipped on the icy back steps while carrying the recycling and fell forward. His mouth hit the edge of a concrete step. He spat out blood and some grit. " +
        "One upper front tooth now feels sharp and broken and hurts when he breathes in cold air. He looked for the missing piece on the steps and could not find it. He did not choke or cough afterwards.",
    },
    {
      id: "head-neck",
      label: "Head and neck symptoms",
      result: "No loss of consciousness. He remembers the whole fall. No headache, vomiting, neck pain, numbness or weakness. He put his hands out and scraped both palms.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Healthy. No bleeding problems, no heart valve disease, no diabetes and no immune problems. No previous facial injuries.",
    },
    {
      id: "meds-immunization",
      label: "Medications and immunizations",
      result: "No medications or supplements. No anticoagulants. Childhood vaccines complete. His last tetanus-containing vaccine was the Tdap given at school at age 14, 10 years ago.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Works as a school music teacher and plays the trumpet. He is worried about the scar and about playing. Nonsmoker. No alcohol today. Lives with his partner.",
    },
    {
      id: "lip-exam",
      label: "Lip examination",
      result:
        "A 2.5 cm vertical laceration of the lower lip, 1.5 cm left of the midline. It crosses the vermilion border and extends 1 cm onto the chin skin. " +
        "Everting the lip shows a 2 cm mucosal wound that joins the outer wound, so it is through and through. The orbicularis oris muscle is divided. Grit is visible in the wound. A firm, tender spot lies deep in the lip beside the wound. Slow oozing only.",
    },
    {
      id: "teeth",
      label: "Teeth and mouth",
      result:
        "The upper left central incisor has lost about a third of its crown. A pink dot of pulp is visible in the fracture. The tooth is not mobile or displaced. Other teeth are intact. The bite is normal. No step in the gum or bone. The tongue and floor of the mouth are normal.",
    },
    {
      id: "face-neuro",
      label: "Face, neck and neurological examination",
      result:
        "No facial bone tenderness. The jaw opens fully and is stable. Sensation of the lower lip and chin is normal on both sides. GCS 15. No midline neck tenderness, and he can turn his head 45 degrees each way. Superficial abrasions on both palms with no foreign material.",
    },
    {
      id: "lip-xray",
      label: "Soft tissue radiograph of the lower lip",
      result: "A 4 mm radiopaque fragment shaped like a chip of tooth lies within the left lower lip, deep to the muscle, about 8 mm from the wound edge. Small specks of grit lie in the wound.",
    },
    {
      id: "chest-xray",
      label: "Chest X-ray (if ordered)",
      result: "No radiopaque foreign body in the airways or the upper abdomen. Lungs clear.",
    },
    {
      id: "resources",
      label: "Hospital resources",
      result:
        "A rural hospital with X-ray but no dental imaging. A dentist in town takes emergency calls and can see him at 08:00 tomorrow. Plastic surgery is at the regional centre, 2 hours away by road.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "19:10",
      text: "He is sitting up, pressing a folded towel to his mouth. The bleeding has slowed. He says, 'I need this to heal well. I play the trumpet for a living.'",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "What do you want to know from him?",
      seconds: 100,
      modelAnswer: [
        "Exactly how it happened. What his mouth struck, how dirty the surface was, and the time of injury.",
        "Whether his teeth hit, whether any tooth or piece of tooth is missing, and whether he choked or coughed afterwards.",
        "Head and neck injury screen. Loss of consciousness, amnesia, headache, vomiting and neck pain.",
        "Tetanus history, allergies, bleeding disorders, anticoagulants, diabetes, immune problems and heart valve disease.",
        "Occupation and what matters to him. A trumpet player needs a precise lip repair and a working front tooth.",
      ],
      rubric: ["la-h1", "la-h2", "la-h3", "la-h4"],
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination",
      prompt: "How do you examine him? Tell me what you are looking for.",
      seconds: 90,
      modelAnswer: [
        "Control bleeding with pressure and give analgesia so the exam is possible.",
        "Look inside the lip as well as outside. Decide whether the wound is through and through and whether the muscle is divided.",
        "Note whether the wound crosses the vermilion border and how far it extends onto skin.",
        "Feel the lip for a hard lump, grit or a fragment.",
        "Examine every tooth for fractures, pulp exposure, mobility and displacement. Check the bite, gums and bone.",
        "Check facial bones, the jaw, mental nerve sensation, the neck and his hands.",
      ],
      rubric: ["la-p1", "la-p2", "la-p3"],
      choices: [
        {
          id: "c-full-exam",
          label: "I everted the lip and found a through and through wound with the muscle divided, crossing the vermilion border. I felt a hard spot in the lip, found the broken incisor with an exposed pulp, and checked his bite, facial bones, lip sensation, neck and hands.",
          next: "q-plan",
          quality: "strong",
          feedback:
            "Good. Looking inside the lip shows the wound goes right through, which changes the repair and the infection risk. A broken tooth with a missing piece next to a lip wound means the piece may be in the lip. Pulp exposure needs a dentist soon.",
        },
        {
          id: "c-outside-only",
          label: "I looked at the outside of the wound, saw it crossed the vermilion border, and checked his lip sensation.",
          next: "s-outside-only",
          quality: "partial",
          feedback:
            "The vermilion border matters, but you missed that the wound goes right through to the mouth and that a tooth is broken. Always look inside the lip and at the teeth after a mouth injury. The broken tooth is the clue that a fragment may be buried in the wound.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-outside-only",
      phase: "A few minutes later",
      text: "As the nurse sets up the suture tray, he asks whether you can do anything about his front tooth, which aches in the cold air. You look in his mouth again and find the fractured incisor and the inner wound.",
      next: "q-plan",
    },
    {
      kind: "question",
      id: "q-plan",
      phase: "Before closing",
      prompt: "A third of his incisor crown is missing. What do you do before you close this wound?",
      seconds: 90,
      modelAnswer: [
        "Account for the missing fragment. It may be in the lip, on the ground, swallowed or inhaled.",
        "Order a soft tissue radiograph of the lower lip before closure.",
        "If the fragment is not in the lip and he coughed or choked, add a chest X-ray.",
        "Plan to irrigate and explore the wound and remove the fragment and any grit.",
        "Keep the fragment moist in water or saline if found. A dentist may bond it back.",
      ],
      rubric: ["la-m1", "la-pr1"],
      choices: [
        {
          id: "c-lip-film",
          label: "I ordered a soft tissue radiograph of the lower lip before closure to look for the missing piece of tooth, with a chest X-ray if it was not in the lip.",
          next: "s-film",
          quality: "strong",
          feedback:
            "This is the key decision. A missing piece of tooth with a lip wound must be accounted for. A soft tissue film of the lip finds most tooth chips. A fragment closed inside the lip causes infection and a painful lump.",
        },
        {
          id: "c-palpate-close",
          label: "I planned to irrigate and feel inside the wound with a gloved finger, and close if I felt nothing.",
          next: "s-palpate",
          quality: "partial",
          feedback:
            "Irrigation and exploration are needed, but a small fragment deep in the muscle is easy to miss by touch. About a third of foreign bodies are missed on first look. Image the lip before closure when a piece of tooth is missing.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-palpate",
      phase: "Twenty minutes later",
      text: "After the block and irrigation you feel only grit. The nurse asks whether the missing piece of tooth was found, and you send him for a soft tissue radiograph of the lip.",
      next: "s-film",
    },
    {
      kind: "say",
      id: "s-film",
      phase: "The radiograph",
      text: "The lip radiograph shows a 4 mm fragment shaped like a chip of tooth deep in the left lower lip, about 8 mm from the wound edge, and small specks of grit.",
      next: "q-repair",
    },
    {
      kind: "question",
      id: "q-repair",
      phase: "The repair",
      prompt: "Walk me through how you anesthetize and repair this lip.",
      seconds: 110,
      modelAnswer: [
        "Mark the vermilion border with a marking pen before any injection, because anesthetic swelling hides it.",
        "Use a left mental nerve block, 1 to 2 mL of lidocaine with epinephrine next to the foramen, so the lip is not distorted. Midline wounds need blocks on both sides.",
        "Irrigate with 50 to 100 mL per cm of wound. Explore, remove the tooth fragment and the grit, and trim only clearly dead tissue.",
        "Close in layers. Mucosa and orbicularis muscle with 4-0 absorbable sutures.",
        "Place the first skin suture exactly at the vermilion border, then close the skin with 6-0 nylon.",
        "Check the alignment of the border with the lip relaxed before you finish.",
      ],
      rubric: ["la-m2", "la-m3", "la-m4"],
      choices: [
        {
          id: "c-layered",
          label: "I marked the vermilion border, gave a left mental nerve block, irrigated well, removed the fragment and grit, closed the mucosa and muscle with 4-0 absorbable sutures, placed the first skin stitch at the vermilion border and closed the skin with 6-0 nylon.",
          next: "q-tooth",
          quality: "strong",
          feedback:
            "Correct. Even a small step in the vermilion border is easy to see. Marking it first and using a nerve block keeps the landmarks clear. Closing the muscle restores the lip's function, which matters for a trumpet player.",
        },
        {
          id: "c-infiltrate-skin",
          label: "I infiltrated lidocaine directly into the wound edges, irrigated, removed the fragment and closed the skin with 5-0 nylon in one layer.",
          next: "s-step",
          quality: "partial",
          feedback:
            "Removing the fragment was right. But local infiltration swells the lip and hides the vermilion border, and a single skin layer leaves the muscle gap and the mucosal wound open. A divided orbicularis needs its own layer, and the border needs the first stitch.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-step",
      phase: "At the end of the repair",
      text: "When the swelling settles, the nurse points out a 2 mm step in the vermilion border, and saliva wells up through the inner wound. You remove the sutures, close the mucosa and muscle in layers and realign the border.",
      next: "q-tooth",
    },
    {
      kind: "question",
      id: "q-tooth",
      phase: "The tooth",
      prompt: "The on call dentist cannot see him until 08:00 tomorrow. What do you do about the broken incisor?",
      seconds: 80,
      modelAnswer: [
        "A crown fracture with an exposed pulp needs urgent dental treatment to keep the pulp alive.",
        "Book the 08:00 dental visit and give the dentist the history directly or in a clear note.",
        "Keep the retrieved fragment moist in water or saline in a labelled container. It may be bonded back on.",
        "Analgesia. Avoid very hot and cold food and drink, and avoid biting on the tooth.",
        "Explain that the tooth needs follow-up for months, because the pulp can die later.",
      ],
      rubric: ["la-pr2"],
      next: "q-meds",
    },
    {
      kind: "question",
      id: "q-meds",
      phase: "Prevention of infection",
      prompt: "What about tetanus and antibiotics?",
      seconds: 90,
      modelAnswer: [
        "This is a contaminated wound and his last tetanus dose was 10 years ago. He needs a tetanus vaccine now.",
        "Give Tdap, because he has not had an adult pertussis dose. Tetanus immune globulin is not needed after a complete primary series.",
        "The through and through wound was contaminated with grit and held a tooth fragment. A short course of oral penicillin is reasonable, although the evidence is limited.",
        "His palm abrasions are clean and superficial and do not need antibiotics.",
        "Close follow-up for infection matters more than the antibiotic.",
      ],
      rubric: ["la-m5", "la-m6"],
      choices: [
        {
          id: "c-tdap-pen",
          label: "I gave Tdap because his last dose was 10 years ago and the wound was dirty, and I prescribed a 5 day course of oral penicillin for the contaminated through and through wound, with no antibiotics for his palms.",
          next: "q-talk",
          quality: "strong",
          feedback:
            "Good. Under the Canadian guide, any wound that is not clean and minor needs a tetanus vaccine if the last dose was 5 or more years ago. A through and through lip wound full of grit is infection prone, so a short course of penicillin is a reasonable choice.",
        },
        {
          id: "c-no-tdap",
          label: "I gave no tetanus vaccine because his childhood series was complete, and no antibiotics.",
          next: "s-no-tdap",
          quality: "partial",
          feedback:
            "A complete series is not enough for a contaminated wound when the last dose was 5 or more years ago. He needs a tetanus vaccine now. Withholding antibiotics is defensible for many mouth wounds, but this one was dirty and held a foreign body.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-tdap",
      phase: "At discharge",
      text: "The nurse checks the immunization table and points out that his last dose was 10 years ago and the wound was dirty. You order Tdap and review the antibiotic decision with him.",
      next: "q-talk",
    },
    {
      kind: "question",
      id: "q-talk",
      phase: "Discharge",
      prompt: "He asks whether a plastic surgeon should have done this, and when he can play the trumpet again. What do you tell him, and what are your discharge instructions?",
      seconds: 80,
      modelAnswer: [
        "A through and through lip wound without tissue loss can be repaired well in the emergency department. Refer when tissue is lost, a nerve or duct is injured, or the repair is beyond your skill.",
        "The scar will be red for months and fades over a year. Sun protection helps.",
        "Rinse the mouth after meals and eat soft food. Watch for fever, spreading redness, swelling or pus, and return if they appear.",
        "Skin sutures out in 3 to 5 days. The absorbable sutures inside dissolve.",
        "No trumpet until the wound has healed and the dentist has treated the tooth. Ask the dentist when he can play.",
        "Book a wound check in 48 hours and document the repair, the fragment and the teaching.",
      ],
      rubric: ["la-pr3", "la-pr4"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "The dentist bonds the fragment back onto the incisor the next morning and treats the exposed pulp. At his 48 hour check the lip is clean, and his sutures come out on day 5 with a well aligned border. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "la-h1",
      competency: "assessment",
      criterion: "history",
      text: "Clarifies the mechanism. What struck the lip, how dirty it was, whether the teeth hit, whether a piece of tooth is missing, and whether he choked or coughed afterwards.",
      points: 2,
      critical: true,
      teaching:
        "The mechanism predicts foreign bodies. When a tooth is broken and the piece is missing, it may be in the lip, on the ground, swallowed or inhaled, and it must be accounted for.",
      source: "iadt",
    },
    {
      id: "la-h2",
      competency: "assessment",
      criterion: "history",
      text: "Screens for associated head and neck injury. Loss of consciousness, amnesia, headache, vomiting and neck pain.",
      points: 1,
      teaching: "A face that hits concrete can come with a head or neck injury. A short screen keeps attention on the whole patient, not only the wound.",
      source: "forsch",
    },
    {
      id: "la-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about tetanus status, allergies, bleeding problems, anticoagulants, diabetes, immune problems and heart valve disease.",
      points: 2,
      teaching:
        "Tetanus history decides the vaccine. Diabetes, immune problems and anticoagulants change the infection and bleeding risk and the repair plan.",
      source: "cig-tetanus",
    },
    {
      id: "la-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about his work and what matters to him, and learns that he plays the trumpet.",
      points: 1,
      teaching:
        "Function and appearance shape the repair. For a trumpet player, both the lip muscle and the front tooth matter.",
      source: "forsch",
    },
    {
      id: "la-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Everts the lip and finds that the wound is through and through, the muscle is divided and the vermilion border is crossed.",
      points: 2,
      teaching:
        "A wound that crosses the vermilion border needs exact alignment. A through and through wound needs layered closure and carries a higher infection risk.",
      source: "forsch",
    },
    {
      id: "la-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Examines the teeth and finds the crown fracture with pulp exposure. Checks mobility, displacement, the bite and the alveolar bone.",
      points: 2,
      teaching:
        "A crown fracture with an exposed pulp is a complicated fracture. It needs urgent dental care to preserve the pulp.",
      source: "iadt",
    },
    {
      id: "la-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Feels the lip for a hard lump, and checks facial bones, the jaw, lower lip sensation, the neck and the hands.",
      points: 1,
      teaching:
        "A firm, tender spot beside a lip wound can be a buried fragment. Mental nerve sensation should be recorded before any block.",
      source: "merck-mental",
    },
    {
      id: "la-m1",
      competency: "management",
      criterion: "management",
      text: "Orders a soft tissue radiograph of the lip before closure to find the missing tooth fragment, with a chest X-ray if it is not found and aspiration is possible.",
      points: 3,
      critical: true,
      teaching:
        "The dental trauma guideline says missing fragments should be accounted for, and that a lip or cheek radiograph is indicated when there is a soft tissue injury. Closing over a fragment leads to infection.",
      source: "iadt",
    },
    {
      id: "la-m2",
      competency: "management",
      criterion: "management",
      text: "Marks the vermilion border before anesthesia and uses a mental nerve block of 1 to 2 mL to avoid distorting the lip.",
      points: 2,
      teaching:
        "A nerve block does not swell the wound edges the way infiltration does. Midline lower lip wounds need bilateral mental nerve blocks.",
      source: "merck-mental",
    },
    {
      id: "la-m3",
      competency: "management",
      criterion: "management",
      text: "Irrigates with 50 to 100 mL per cm of wound, explores, and removes the fragment and grit before closure.",
      points: 2,
      teaching:
        "Irrigation with potable water or saline at 50 to 100 mL per cm reduces infection. About a third of foreign bodies are missed on first inspection.",
      source: "forsch",
    },
    {
      id: "la-m4",
      competency: "management",
      criterion: "management",
      text: "Closes in layers with absorbable sutures for mucosa and muscle, places the first skin suture at the vermilion border, and closes the skin with 6-0 nylon.",
      points: 3,
      critical: true,
      teaching:
        "The cosmetic result depends on realigning the vermilion border, so the first skin suture goes there. Muscle and mucosa take 3-0 or 4-0 absorbable sutures, and skin takes 6-0 or 7-0 nylon.",
      source: "forsch",
    },
    {
      id: "la-m5",
      competency: "management",
      criterion: "management",
      text: "Gives Tdap now because the wound is contaminated and his last dose was 10 years ago.",
      points: 1,
      teaching:
        "For wounds that are not clean and minor, give a tetanus vaccine when the last dose was 5 or more years ago. Adults without an adult pertussis dose should receive Tdap.",
      source: "cig-tetanus",
    },
    {
      id: "la-m6",
      competency: "management",
      criterion: "management",
      text: "Prescribes a short course of oral penicillin for the contaminated through and through wound, explains the limited evidence, and gives none for the clean palm abrasions.",
      points: 1,
      teaching:
        "In a small trial of intraoral wounds, penicillin lowered the infection rate from 18.8% to 6.7%, a difference that was not clearly significant. Reserve antibiotics for infection prone wounds.",
      source: "steele",
    },
    {
      id: "la-pr1",
      competency: "leadership",
      criterion: "process",
      text: "Sequences the visit. Bleeding and pain control, full assessment, imaging, then repair, and does not close until the fragment is accounted for.",
      points: 1,
      teaching: "A wound that is closed too early cannot easily be explored again. Finish the assessment and imaging before the first suture.",
      source: "iadt",
    },
    {
      id: "la-pr2",
      competency: "disposition",
      criterion: "process",
      text: "Arranges urgent dental review with the fragment kept moist for bonding, gives analgesia and advice, and explains the need for dental follow-up.",
      points: 2,
      teaching:
        "If the fragment is available it can be bonded back after rehydration. Keep it moist in water or saline and send it with the patient.",
      source: "iadt",
    },
    {
      id: "la-pr3",
      competency: "communication",
      criterion: "process",
      text: "Gives wound care and return instructions. Mouth rinses after meals, soft diet, signs of infection, a 48 hour wound check and skin suture removal in 3 to 5 days.",
      points: 2,
      teaching: "Facial sutures come out in 3 to 5 days to limit suture marks. Clear return advice helps catch infection early.",
      source: "forsch",
    },
    {
      id: "la-pr4",
      competency: "professionalism",
      criterion: "process",
      text: "Answers his question about plastic surgery honestly, explains when referral is needed and what the scar will look like, and documents the repair.",
      points: 1,
      teaching:
        "A lip laceration without tissue loss is usually within emergency department skills. Consult a specialist when the injury needs sedation for repair, involves a salivary duct or a nerve, or is beyond your knowledge or skill.",
      source: "forsch",
    },
  ],
  sources: [
    {
      id: "forsch",
      citation: "Forsch RT, Little SH, Williams C. Laceration repair: a practical approach. Am Fam Physician. 2017.",
      url: "https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html",
    },
    {
      id: "iadt",
      citation:
        "Bourguignon C, Cohenca N, Lauridsen E, and colleagues. International Association of Dental Traumatology guidelines for the management of traumatic dental injuries: 1. Fractures and luxations. Dent Traumatol. 2020.",
      url: "https://eprints.whiterose.ac.uk/id/eprint/161684/1/IADT%20guidelines%20-%20Fractures%20and%20luxations.pdf",
    },
    {
      id: "cig-tetanus",
      citation: "Public Health Agency of Canada. Canadian Immunization Guide, Part 4. Tetanus toxoid. 2026.",
      url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html",
    },
    {
      id: "steele",
      citation: "Steele MT, Sainsbury CR, Robinson WA, Salomone JA 3rd, and colleagues. Prophylactic penicillin for intraoral wounds. Ann Emerg Med. 1989.",
    },
    {
      id: "merck-mental",
      citation: "Powers DB. How to do a mental nerve block. Merck Manual Professional Version. 2025.",
      url: "https://www.merckmanuals.com/professional/dental-disorders/how-to-do-dental-procedures/how-to-do-a-mental-nerve-block",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
