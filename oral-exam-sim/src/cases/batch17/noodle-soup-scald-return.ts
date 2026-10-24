// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const noodleSoupScaldReturn: OralCase = {
  id: "noodle-soup-scald-return",
  title: "A spill at the kitchen table",
  blueprint: "peds",
  alsoCovers: ["trauma", "id"],
  priorityTopic: "burns",
  keyFeatures: [
    { topic: "burns", n: 1 },
    { topic: "burns", n: 3 },
    { topic: "burns", n: 5 },
  ],
  summary: "A preschool boy is scalded at supper. The plan for home looks settled until he comes back.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 3 year old boy is carried in by his father 2 hours after he pulled a bowl of hot noodle soup off the table onto his chest and left arm. The nearest pediatric burn centre is 3 hours away.",
  card: {
    vitals: {
      temperature: "37.0°C tympanic",
      pulse: "142/minute",
      resp: "28/minute",
      bp: "98/62 mmHg",
      o2sat: "99% on room air",
      weight: "15 kg (33 lb)",
    },
    medications: "None",
    allergies: "None known",
  },
  findings: [
    {
      id: "hpi",
      label: "History of the injury",
      result:
        "At 17:30 he reached up at the kitchen table and pulled the placemat. A bowl of instant noodle soup, made with water just off the boil, spilled down his chest and inner left arm. He screamed at once. " +
        "His father pulled his shirt off, then held ice packs wrapped in a tea towel on the burns for 15 minutes and drove in with a wet cloth over them. No running water. No fall or other injury. It is now 19:30.",
    },
    {
      id: "witness",
      label: "Who was there, and development",
      result:
        "His father and 7 year old sister were at the table. Both describe the same spill. He walks, climbs onto chairs and speaks in short sentences. He points to the bowl and says 'hot soup'. No earlier injuries or emergency visits.",
    },
    {
      id: "pmh",
      label: "Past history and immunizations",
      result: "Born at term. Healthy. Immunizations up to date, including the 18 month dose of diphtheria, tetanus and pertussis vaccine. No medicines. No allergies.",
    },
    {
      id: "social",
      label: "Home circumstances",
      result:
        "Lives with his parents and sister in a town 40 minutes away. His father works day shifts at a sawmill and his mother is a personal support worker. They have a car and a family physician in town. He goes to daycare. His father says they can come back any time.",
    },
    {
      id: "burn",
      label: "Burn examination",
      result:
        "Pink and red, moist, blistered skin over the front of the chest and upper abdomen and the inner left upper arm, with irregular edges and drip marks down the abdomen. A 2 cm patch in the centre of the chest is white and dry, with reduced sensation and slow capillary refill. " +
        "Using his palm with fingers as 1% and a Lund and Browder chart, the blistered area is about 5% on the trunk and 2% on the arm. Reddened skin without blisters surrounds it. Face, neck, hands, axilla, genitals and joints spared. Not circumferential.",
    },
    {
      id: "other-exam",
      label: "Rest of the examination",
      result:
        "Crying but consolable in his father's arms. Airway clear, no soot, no facial burns. Chest clear. Abdomen soft. No other bruises, marks or burns. Frenulum intact. Skin over the burn feels cold where the ice was held.",
    },
    {
      id: "pain",
      label: "Pain score",
      result: "FLACC 9 out of 10 on arrival. He screams when the cloth is lifted.",
    },
    {
      id: "bedside",
      label: "Bedside tests",
      result: "Capillary glucose 6.2 mmol/L.",
    },
    {
      id: "return-history",
      label: "History at the return visit",
      result:
        "Fever to 39.5°C since last evening. Vomited three times overnight and four watery stools. Sleepy and irritable. This morning a red rash spread over his whole body. Only one wet diaper in 12 hours. " +
        "The burn dressing has stayed on since discharge. The burn clinic video review is booked for this evening. He has had acetaminophen and ibuprofen at home.",
    },
    {
      id: "return-exam",
      label: "Examination at the return visit",
      result:
        "Drowsy, opens eyes to voice. Temperature 39.8°C. Pulse 182/minute. Respirations 40/minute. BP 72/38 mmHg. O2 sat 95% on room air. Capillary refill 5 seconds, cool hands and feet. " +
        "Diffuse red, blanching rash like a sunburn, including palms. Red eyes without discharge. Red tongue. Under the dressing the burn looks clean, with little exudate and a thin rim of redness. Lungs clear. Liver not enlarged.",
    },
    {
      id: "return-labs",
      label: "Blood work at the return visit",
      result:
        "White cells 17.8 x 10^9/L. Hemoglobin 112 g/L. Platelets 98 x 10^9/L. Sodium 131 mmol/L. Creatinine 74 µmol/L. ALT 88 U/L. Albumin 22 g/L. CK 640 U/L. Lactate 4.6 mmol/L. Venous pH 7.26, bicarbonate 15 mmol/L. Glucose 5.0 mmol/L. Blood culture sent.",
    },
    {
      id: "swab",
      label: "Wound swab, reported two days later",
      result: "Heavy growth of Staphylococcus aureus, sensitive to cloxacillin. Toxic shock syndrome toxin positive.",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "On arrival",
      text: "He is screaming in his father's arms with a wet cloth on his chest. His father is shaking and says, 'I put ice on it right away. Did I do the right thing?' The triage nurse asks what you want first.",
      next: "q-first",
    },
    {
      kind: "question",
      id: "q-first",
      phase: "First minutes",
      prompt: "What do you do in the first 15 minutes?",
      seconds: 80,
      modelAnswer: [
        "Remove the ice and wet cloth. Ice deepens the injury and cools the child.",
        "He is within 3 hours of the burn. Cool the burn under cool running water for 20 minutes while keeping the rest of him warm.",
        "Intranasal fentanyl 1.5 mcg/kg, about 22 mcg, and repeat 0.75 to 1.5 mcg/kg after 5 to 10 minutes if needed.",
        "Score pain with FLACC and repeat it after each dose. Add oral acetaminophen and ibuprofen.",
        "Cover the burn loosely with cling film in strips, not wrapped around him.",
        "Reassure his father and keep him with his son.",
      ],
      rubric: ["bn-m1", "bn-m2", "bn-p2"],
      choices: [
        {
          id: "c-cool",
          label: "I removed the ice, gave intranasal fentanyl 22 mcg, cooled the burn under running water for 20 minutes while keeping him wrapped and warm, rechecked his FLACC score, gave a second fentanyl dose and covered the burn with strips of cling film.",
          next: "q-history",
          quality: "strong",
          feedback:
            "Good. Cooling with running water helps for up to 3 hours after a burn, and ice harms tissue. Intranasal fentanyl at 1.5 mcg/kg gives fast relief without an IV, and repeat scoring shows whether it worked.",
        },
        {
          id: "c-no-cool",
          label: "I gave oral acetaminophen and ibuprofen and applied a dressing. It was too late for cooling to help.",
          next: "s-no-cool",
          quality: "partial",
          feedback:
            "Cooling still helps for up to 3 hours after a burn, and he is at 2 hours. Oral analgesics alone are not enough for a blistering scald in a screaming child. Intranasal fentanyl works within minutes.",
        },
        {
          id: "c-ice-codeine",
          label: "I told his father to keep the ice packs on and gave codeine with acetaminophen by mouth.",
          next: "s-ice-codeine",
          quality: "unsafe",
          feedback:
            "Ice causes further tissue injury and hypothermia in a small child. Codeine should not be used in children because its conversion to morphine is unpredictable and can be fatal. Use running water and an effective opioid such as intranasal fentanyl.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-no-cool",
      phase: "Twenty minutes later",
      text: "He is still screaming with a FLACC of 8. The charge nurse asks whether the burn has been cooled. You give intranasal fentanyl 22 mcg and cool the burn under running water while keeping him warm.",
      next: "q-history",
    },
    {
      kind: "say",
      id: "s-ice-codeine",
      phase: "The pharmacist",
      text: "The pharmacist calls to say codeine is not used in children and the nurse notices his temperature is 35.9°C. You remove the ice, give intranasal fentanyl 22 mcg, warm him and cool only the burn with running water.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "He is calmer now. What history do you want from his father, and why?",
      seconds: 80,
      modelAnswer: [
        "Exact time of the burn, the liquid and how hot, and how long it was in contact. Clothing removed at once.",
        "First aid given and for how long.",
        "Who saw it, and whether the story fits his age and development. Any earlier injuries or visits.",
        "Other injuries, such as a fall from the chair.",
        "Past history and tetanus status.",
        "Home circumstances. Distance, transport, who will care for him and whether they can do dressings and return.",
      ],
      rubric: ["bn-h1", "bn-h2", "bn-h3"],
      next: "q-assess",
    },
    {
      kind: "question",
      id: "q-assess",
      phase: "Burn assessment",
      prompt: "Estimate the size and depth of his burn. Does anything about the pattern worry you?",
      seconds: 80,
      modelAnswer: [
        "About 7% total body surface area. Count only blistered and deeper burns, not simple redness.",
        "Use a Lund and Browder chart or his own palm with fingers as 1%. Adult rule of nines overestimates the limbs in a child.",
        "Mostly superficial partial thickness. A small deep partial patch on the central chest.",
        "The pattern fits a spill. Irregular edges, drip marks and the area a child pulling a bowl would reach.",
        "The story is consistent, witnessed and fits his development. No other marks.",
        "He does not need formula IV fluids for a 7% burn. Encourage oral fluids.",
      ],
      rubric: ["bn-p1", "bn-h2"],
      choices: [
        {
          id: "c-seven",
          label: "About 7% partial thickness, mostly superficial with a small deep patch on the chest, counted with a Lund and Browder chart. The spill pattern and the story fit his age, so I have no abuse concern. Oral fluids, no formula IV fluids.",
          next: "q-dispo",
          quality: "strong",
          feedback:
            "Correct. Excluding simple redness keeps the estimate accurate. Irregular splash and drip marks are typical of an accidental spill, unlike the sharp lines of an immersion burn.",
        },
        {
          id: "c-overcount",
          label: "About 15% including the red skin around it, so I started Ringer lactate by the Parkland formula.",
          next: "s-overcount",
          quality: "partial",
          feedback:
            "Simple redness is not counted, so this doubles the burn size. Formula fluids are not needed for a 7% burn in a child who can drink, and overestimates lead to fluid overload.",
        },
        {
          id: "c-nines",
          label: "I used the rule of nines, counted his whole left arm as 9% and the front of the trunk as 18%.",
          next: "s-overcount",
          quality: "partial",
          feedback:
            "The rule of nines is built for adults and overestimates partial areas of limbs and trunk in children. Use a Lund and Browder chart or the child's palm with fingers as 1%.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-overcount",
      phase: "Second look",
      text: "The nurse asks whether the red skin should be counted. You look again with a Lund and Browder chart and the blistered area adds up to about 7%. You stop the IV fluid and encourage him to drink.",
      next: "q-dispo",
    },
    {
      kind: "question",
      id: "q-dispo",
      phase: "Disposition",
      prompt: "Does he need transfer to the burn centre, or can he go home? What is your plan?",
      seconds: 80,
      modelAnswer: [
        "Call the pediatric burn centre. Children and partial thickness burns under 10% with a possibly deep area warrant consultation.",
        "Send photographs by the secure telehealth system so the burn team can judge depth.",
        "Here the burn team agrees he can go home. Small burn, no special areas, a reliable family with transport and a family physician.",
        "Dressing chosen with the burn team, such as a silver or foam dressing that stays on for several days. Review in 48 to 72 hours.",
        "Regular acetaminophen and ibuprofen. Oral fluids. Tetanus is up to date.",
        "Clear return advice. Fever, rash, vomiting, diarrhea, drowsiness or fewer wet diapers mean come back at once, because toxic shock can follow small burns.",
      ],
      rubric: ["bn-pr1", "bn-pr2", "bn-h3"],
      choices: [
        {
          id: "c-consult",
          label: "I called the pediatric burn centre and sent photos. We agreed on home with a silver foam dressing, review by video in 48 hours, regular analgesia and fluids, and I told his father to come back at once for fever, rash, vomiting, diarrhea, drowsiness or fewer wet diapers.",
          next: "s-return",
          quality: "strong",
          feedback:
            "Good. Pediatric burns, even small ones, benefit from burn centre input on depth, dressings and follow up. Home circumstances support discharge here. Specific warning signs for toxic shock are part of safe discharge.",
        },
        {
          id: "c-fp",
          label: "I discharged him with a dressing and follow up with his family physician in a week, and told his father to return if the burn looked infected.",
          next: "s-fp",
          quality: "partial",
          feedback:
            "A week is too long for a child with a possibly deep burn, and 'looks infected' misses the danger. Toxic shock often starts with fever, rash, vomiting and diarrhea. Involve the burn centre and give specific warning signs.",
        },
        {
          id: "c-transfer",
          label: "I sent him by ambulance to the burn centre tonight without calling them first.",
          next: "s-transfer",
          quality: "partial",
          feedback:
            "Sending him without a call wastes a 3 hour transfer and separates the family when the burn team might have managed him by telehealth. Consult first, then decide the disposition together.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-fp",
      phase: "Before he leaves",
      text: "The nurse asks whether the burn centre should see the deep patch. You call them and send photos. They advise a silver foam dressing, a video review in 48 hours and toxic shock warning signs, which you go over with his father.",
      next: "s-return",
    },
    {
      kind: "say",
      id: "s-transfer",
      phase: "The burn centre calls",
      text: "The burn surgeon calls before the ambulance leaves. After seeing photos, she advises home with a silver foam dressing and a video review in 48 hours. You cancel the transfer and go over toxic shock warning signs with his father.",
      next: "s-return",
    },
    {
      kind: "say",
      id: "s-return",
      phase: "Day 3, 06:10",
      text: "His father carries him back in. He has had a fever since last night, has vomited and had watery stools, and a red rash spread over his body this morning. He is drowsy. Pulse 182/minute, BP 72/38 mmHg, temperature 39.8°C, capillary refill 5 seconds.",
      next: "q-shock",
    },
    {
      kind: "question",
      id: "q-shock",
      phase: "The return visit",
      prompt: "What is going on, and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Septic shock. Fever, diffuse red rash, vomiting, diarrhea and hypotension 3 days after a small burn suggest toxic shock syndrome.",
        "Oxygen, monitor, two IV or IO lines. Glucose.",
        "Normal saline or balanced crystalloid 10 to 20 mL/kg (150 to 300 mL) per bolus, reassessing after each, up to 40 to 60 mL/kg in the first hour.",
        "Blood culture if it does not delay antibiotics. Antibiotics within 1 hour.",
        "An antistaphylococcal beta lactam such as cloxacillin or cefazolin, plus clindamycin to suppress toxin. Add vancomycin if MRSA is possible.",
        "Remove the dressing, inspect and swab the burn. The burn is the likely source.",
      ],
      rubric: ["bn-h4", "bn-p3", "bn-p4", "bn-m3", "bn-m4"],
      choices: [
        {
          id: "c-tss",
          label: "I called it septic shock from toxic shock syndrome after his burn. I gave oxygen, placed an IO line, gave 300 mL boluses with reassessment, drew a blood culture, gave cefazolin, clindamycin and vancomycin within the hour, and took down the dressing to swab the wound.",
          next: "s-fluids",
          quality: "strong",
          feedback:
            "Correct. Toxic shock is a known and sometimes fatal complication of small pediatric scalds, usually in the first week. Fluids in reassessed boluses, antibiotics within the hour and clindamycin for toxin suppression are the priorities.",
        },
        {
          id: "c-ceftriaxone",
          label: "I treated septic shock with fluid boluses and ceftriaxone and left the dressing on because it was due to be reviewed this evening.",
          next: "s-ceftriaxone",
          quality: "partial",
          feedback:
            "Fluids and early antibiotics are right. But you did not think of toxic shock, so there is no clindamycin to suppress toxin, and the wound was not inspected or swabbed.",
        },
        {
          id: "c-gastro",
          label: "I diagnosed gastroenteritis with a viral rash, gave ondansetron and started an oral rehydration trial.",
          next: "s-gastro",
          quality: "unsafe",
          feedback:
            "He is in shock, with hypotension, slow capillary refill and drowsiness. Toxic shock after small burns is often mistaken for a common childhood illness. Delay can be fatal.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-ceftriaxone",
      phase: "Thirty minutes later",
      text: "The pediatrician on the phone asks about the burn and the rash and says, 'This is toxic shock until proven otherwise.' You add clindamycin and vancomycin, take down the dressing and swab the wound.",
      next: "s-fluids",
    },
    {
      kind: "say",
      id: "s-gastro",
      phase: "Twenty minutes later",
      text: "He vomits the oral fluid and becomes harder to rouse. His pressure is 64/32. You place an IO line, start fluid boluses, draw a blood culture and give cefazolin, clindamycin and vancomycin.",
      next: "s-fluids",
    },
    {
      kind: "say",
      id: "s-fluids",
      phase: "One hour later",
      text: "He has had 600 mL, 40 mL/kg. His pulse is 170/minute and his BP is 76/40 mmHg. Capillary refill is 4 seconds. His lungs are clear and his liver is not enlarged. Lactate is 4.6 mmol/L.",
      next: "q-refractory",
    },
    {
      kind: "question",
      id: "q-refractory",
      phase: "Persistent shock",
      prompt: "He is still in shock after 40 mL/kg. What now?",
      seconds: 80,
      modelAnswer: [
        "Fluid refractory shock. Start epinephrine or norepinephrine by infusion through a peripheral or IO line. Do not wait for a central line.",
        "Reassess after each step for perfusion and for overload, such as crackles or a growing liver.",
        "Call pediatric critical care and the transport team now.",
        "Correct glucose and calcium if low. Prepare for intubation with a hemodynamically stable induction if he tires.",
        "Discuss IV immunoglobulin with pediatric critical care and infectious diseases as an adjunct.",
      ],
      rubric: ["bn-m3", "bn-pr5"],
      next: "q-transfer",
    },
    {
      kind: "question",
      id: "q-transfer",
      phase: "Transfer",
      prompt: "The pediatric intensive care unit at the burn centre accepts him. What goes in your handover, and how does he travel?",
      seconds: 70,
      modelAnswer: [
        "Transfer by the pediatric critical care transport team with the infusion running.",
        "Time of the burn and the return visit. Burn size and depth. Dressing course.",
        "Total fluid given and the response. Vasoactive drug and rate.",
        "Antibiotics and the time given. Cultures and swab sent.",
        "Latest vital signs, lactate, glucose and urine output. Copies of images and records.",
      ],
      rubric: ["bn-pr3"],
      next: "q-father",
    },
    {
      kind: "question",
      id: "q-father",
      phase: "Talking with his father",
      prompt: "His father asks, 'Did we do something wrong with the dressing? Is this my fault?' What do you say?",
      seconds: 70,
      modelAnswer: [
        "Sit down and speak plainly.",
        "Explain toxic shock. A toxin from bacteria on the skin can cause a severe illness even after a small burn.",
        "It is not caused by how they cared for him. Bringing him back quickly was exactly right.",
        "Explain the treatment, the transfer and that he will be in intensive care.",
        "Answer his questions and make sure he has a way to get to the burn centre.",
      ],
      rubric: ["bn-pr4"],
      choices: [
        {
          id: "c-reassure",
          label: "I explained toxic shock in plain words, said it can follow small burns and was not caused by their care, said coming back quickly was the right thing, and went over the transfer and how he could get there.",
          next: "end",
          quality: "strong",
          feedback:
            "Good. Honest, blame free information helps a frightened parent. Recognizing the warning signs and returning early is what the discharge advice was for.",
        },
        {
          id: "c-dressing",
          label: "I told him the dressing may have been left on too long and that the burn probably got infected at home.",
          next: "s-dressing",
          quality: "partial",
          feedback:
            "This speculates and assigns blame without evidence. The dressing was planned to stay on, and toxic shock can follow small burns without any lapse in care. Give the facts and support him.",
        },
        {
          id: "c-virus",
          label: "I told him it is probably a virus and he will be fine in a few days.",
          next: "s-dressing",
          quality: "partial",
          feedback:
            "False reassurance. His son is in shock and needs intensive care. He deserves an honest explanation of how serious this is.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-dressing",
      phase: "Before the transport team leaves",
      text: "The transport nurse overhears and gently corrects the explanation. You sit down with the father again, explain toxic shock and that it was not caused by their care, and go over the plan.",
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text: "He needs a norepinephrine infusion for 36 hours in the pediatric intensive care unit. The wound swab grows toxin producing Staphylococcus aureus. His skin peels on his hands a week later, and the burn heals without grafting. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "bn-h1",
      competency: "assessment",
      criterion: "history",
      text: "Asks the exact time of the burn, the liquid and its heat, and what first aid was given and for how long.",
      points: 2,
      teaching: "The time of the burn decides whether cooling still helps. Cooling with running water for 20 minutes is worthwhile up to 3 hours after the burn.",
      source: "rch-burns",
    },
    {
      id: "bn-h2",
      competency: "assessment",
      criterion: "history",
      text: "Asks who saw the injury and checks that the story and pattern fit his development, with no earlier injuries.",
      points: 1,
      teaching: "Every pediatric burn needs a check for non accidental injury. A witnessed spill with splash and drip marks that fits his abilities is reassuring.",
      source: "aba-referral",
    },
    {
      id: "bn-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about past history, tetanus status, home circumstances, distance and the family's ability to return for review.",
      points: 1,
      teaching: "Disposition after a burn depends on size, site, age, comorbidity and home circumstances. Caregiver needs and dressing changes are reasons to involve a burn centre.",
      source: "aba-referral",
    },
    {
      id: "bn-h4",
      competency: "assessment",
      criterion: "history",
      text: "On the return visit, asks when the fever, rash, vomiting and diarrhea began, the urine output and the dressing course.",
      points: 2,
      teaching: "Toxic shock after pediatric burns is usually diagnosed within the first week after the injury. It has followed burns of under 1% of body surface area.",
      source: "gutzler",
    },
    {
      id: "bn-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Estimates the burn at about 7% with a Lund and Browder chart or his palm, counting only blistered and deeper burns, and identifies the deep patch.",
      points: 2,
      teaching: "Simple redness is not counted. The adult rule of nines overestimates burns in young children, whose heads are larger and limbs smaller.",
      source: "rch-burns",
    },
    {
      id: "bn-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Scores pain with the FLACC scale and repeats the score after each analgesic dose.",
      points: 1,
      teaching: "Record pain and sedation scores before and after each dose of intranasal fentanyl. The child should be easy to rouse before a repeat dose.",
      source: "rch-fentanyl",
    },
    {
      id: "bn-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Recognizes septic shock with features of toxic shock syndrome, such as fever, a diffuse red rash, red eyes and tongue, diarrhea and organ dysfunction, 3 days after a small burn.",
      points: 3,
      critical: true,
      teaching: "Toxic shock syndrome is an important complication of pediatric burns of any size. Awareness among treating clinicians is crucial for a good outcome.",
      source: "gutzler",
    },
    {
      id: "bn-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Takes down the dressing, inspects the burn and swabs it as the likely source.",
      points: 1,
      teaching: "The burn is the likely source, so inspect and swab it. Toxic shock is caused by toxin, and it has followed burns of under 1% of body surface area.",
      source: "gutzler",
    },
    {
      id: "bn-m1",
      competency: "management",
      criterion: "management",
      text: "Removes the ice, cools the burn with running water for 20 minutes and keeps the child warm.",
      points: 2,
      teaching: "Cool running water for 20 minutes within 3 hours of the burn. Never use ice.",
      source: "rch-burns",
    },
    {
      id: "bn-m2",
      competency: "management",
      criterion: "management",
      text: "Gives intranasal fentanyl 1.5 mcg/kg, about 22 mcg, with a repeat dose of 0.75 to 1.5 mcg/kg after 5 to 10 minutes if needed.",
      points: 2,
      critical: true,
      teaching: "Intranasal fentanyl gives fast, effective analgesia without an IV in children from 12 months. The first dose is 1.5 mcg/kg, maximum 100 mcg.",
      source: "rch-fentanyl",
    },
    {
      id: "bn-m3",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives fluid in 10 to 20 mL/kg boluses with reassessment up to 40 to 60 mL/kg, then starts epinephrine or norepinephrine for fluid refractory shock.",
      points: 2,
      teaching: "In children with septic shock, give fluid in reassessed boluses over the first hour and start a vasoactive infusion if shock persists. It can run through a peripheral or IO line at first.",
      source: "weiss",
    },
    {
      id: "bn-m4",
      competency: "resuscitation",
      criterion: "management",
      text: "Gives antibiotics within 1 hour, with an antistaphylococcal beta lactam, clindamycin for toxin suppression and vancomycin when MRSA is possible.",
      points: 2,
      critical: true,
      teaching: "Clindamycin suppresses toxin production and is added to a cell wall active antibiotic for toxin mediated shock.",
      source: "stevens",
    },
    {
      id: "bn-pr1",
      competency: "disposition",
      criterion: "process",
      text: "Consults the pediatric burn centre with photographs before deciding on disposition and agrees on dressings and early review.",
      points: 2,
      teaching: "Pediatric burns may benefit from burn centre referral because of pain, dressing needs, rehabilitation and family needs. Partial thickness burns under 10% and possibly deep burns warrant consultation.",
      source: "aba-referral",
    },
    {
      id: "bn-pr2",
      competency: "communication",
      criterion: "process",
      text: "Gives specific return advice about toxic shock: fever, rash, vomiting, diarrhea, drowsiness or fewer wet diapers.",
      points: 2,
      teaching: "Toxic shock can follow small burns. Families who know the warning signs can return early.",
      source: "gutzler",
    },
    {
      id: "bn-pr3",
      competency: "disposition",
      criterion: "process",
      text: "Arranges transfer by pediatric critical care transport with a handover of burn time and size, fluids, vasoactive drug, antibiotic times and cultures.",
      points: 2,
      teaching: "Children with septic shock need early contact with pediatric critical care. A structured handover keeps the timeline clear for the receiving team.",
      source: "weiss",
    },
    {
      id: "bn-pr4",
      competency: "communication",
      criterion: "process",
      text: "Explains toxic shock to his father honestly and without blame, and confirms he returned at the right time.",
      points: 1,
      teaching: "Toxic shock can follow small burns. Parents need honest information and reassurance that they did not cause it.",
      source: "gutzler",
    },
    {
      id: "bn-pr5",
      competency: "resuscitation",
      criterion: "process",
      text: "Reassesses perfusion and looks for fluid overload, such as crackles or a growing liver, after each bolus.",
      points: 1,
      teaching: "Titrate fluid to markers of cardiac output and stop boluses if signs of fluid overload appear.",
      source: "weiss",
    },
  ],
  sources: [
    {
      id: "aba-referral",
      citation: "American Burn Association. Guidelines for burn patient referral. 2025.",
      url: "https://ameriburn.org/burnreferral",
    },
    {
      id: "rch-burns",
      citation: "The Royal Children's Hospital Melbourne. Clinical practice guideline. Burns, acute management. 2026.",
      url: "https://www.rch.org.au/clinicalguide/guideline_index/Burns/",
    },
    {
      id: "rch-fentanyl",
      citation: "The Royal Children's Hospital Melbourne. Clinical practice guideline. Intranasal fentanyl. 2025.",
      url: "https://www.rch.org.au/clinicalguide/guideline_index/Intranasal_Fentanyl/",
    },
    {
      id: "gutzler",
      citation:
        "Gutzler L, Schiestl C, Meuli M, Oliveira C. Toxic shock syndrome in paediatric thermal injuries. A case series and systematic literature review. Burns. 2018.",
      url: "https://folia.unifr.ch/unifr/documents/298413",
    },
    {
      id: "weiss",
      citation:
        "Weiss SL, Peters MJ, Alhazzani W, and colleagues. Surviving Sepsis Campaign international guidelines for the management of septic shock and sepsis-associated organ dysfunction in children. Pediatr Crit Care Med. 2020.",
    },
    {
      id: "stevens",
      citation:
        "Stevens DL, Bisno AL, Chambers HF, and colleagues. Practice guidelines for the diagnosis and management of skin and soft tissue infections. 2014 update by the Infectious Diseases Society of America. Clin Infect Dis. 2014.",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
