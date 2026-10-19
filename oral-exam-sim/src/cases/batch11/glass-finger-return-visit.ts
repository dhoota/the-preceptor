// DRAFT. Clinical content written for simulation only. Requires physician review before release. Verify every dose and threshold against current guidelines.

import type { OralCase } from "@/engine/types";

export const glassFingerReturnVisit: OralCase = {
  id: "glass-finger-return-visit",
  title: "Back with a sore finger",
  blueprint: "procedures",
  alsoCovers: ["id", "systems"],
  priorityTopic: "lacerations",
  keyFeatures: [
    { topic: "lacerations", n: 1 },
    { topic: "lacerations", n: 2 },
    { topic: "lacerations", n: 3 },
    { topic: "lacerations", n: 4 },
    { topic: "infectious-diseases", n: 4 },
    { topic: "cqi", n: 2 },
  ],
  summary: "A woman returns three days after a finger laceration was sutured in your department, and the finger is getting worse.",
  durationMinutes: 12,
  stem:
    "You are working in the emergency department of a community hospital when the following patient arrives. " +
    "A 46 year old woman returns with a painful, swollen left index finger. A colleague in your department sutured a cut on that finger 3 days ago.",
  card: {
    vitals: {
      temperature: "38.2°C oral",
      pulse: "104/minute",
      resp: "18/minute",
      bp: "132/80 mmHg",
      o2sat: "98% on room air",
      weight: "68 kg (150 lb)",
    },
    medications: "Metformin 1 000 mg twice daily, ramipril 5 mg daily",
    allergies: "None known",
  },
  findings: [
    {
      id: "injury",
      label: "How the injury happened",
      result:
        "Three days ago at 19:00 a glass mixing bowl shattered in the sink while she was washing it. A shard cut the palm side of the base of her left index finger as she grabbed for the bowl. " +
        "It bled heavily. She thinks a piece 'went in deep'. She came in 2 hours later.",
    },
    {
      id: "first-visit",
      label: "Record of the first visit",
      result:
        "Seen in fast track at 21:40 on a busy night. A 1.5 cm transverse laceration on the palmar surface of the left index finger over the proximal phalanx. " +
        "Note says 'NV intact, tendons intact'. Irrigated with 100 mL of saline. Closed with three 5-0 nylon sutures. No X ray. No antibiotics. Tetanus recorded as 'up to date per patient'.",
    },
    {
      id: "hpi",
      label: "Symptoms since then",
      result:
        "Throbbing pain since yesterday. The whole finger is swollen and she cannot straighten it. Chills overnight. " +
        "The thumb side of the fingertip has felt numb since the night of the injury. She thought it was from the swelling.",
    },
    {
      id: "pmh",
      label: "Past history",
      result: "Type 2 diabetes for 5 years. Last hemoglobin A1c 8.4 percent a month ago. Hypertension. No immune suppressing illness or drugs. No previous hand problems.",
    },
    {
      id: "meds",
      label: "Medications, allergies and immunization",
      result: "Metformin 1 000 mg twice daily. Ramipril 5 mg daily. No known drug allergies. Her last tetanus booster was 8 years ago, after a full childhood series.",
    },
    {
      id: "social",
      label: "Social history",
      result: "Left handed. Owns a hair salon and cuts hair all day. Lives with her partner and two teenagers. Does not smoke. Drinks wine on weekends.",
    },
    {
      id: "inspect",
      label: "Inspection of the hand",
      result:
        "The left index finger rests in partial flexion. It is evenly swollen along its whole length, like a sausage, and red on the palm side. " +
        "Three sutures are in place with a little cloudy fluid at the wound edge. No red streaks up the forearm. No swelling of the palm or thenar space.",
    },
    {
      id: "tendon",
      label: "Tendon sheath and tendon testing",
      result:
        "Marked tenderness along the flexor sheath from the fingertip into the distal palm. Severe pain when you passively extend the finger. " +
        "With the other fingers held straight she can flex the PIP joint, and with the PIP held she can flex the DIP joint. Both are weak and painful.",
    },
    {
      id: "nv",
      label: "Nerve and vascular exam",
      result:
        "Two point discrimination 12 mm on the radial side of the index fingertip and 4 mm on the ulnar side. Capillary refill under 2 seconds. Doppler signals in both digital arteries.",
    },
    {
      id: "xray",
      label: "Hand X ray, three views",
      result: "A 4 mm triangular radio-opaque fragment lies on the palm side of the base of the proximal phalanx, deep to the wound. No fracture. No gas in the soft tissue.",
    },
    {
      id: "pocus",
      label: "Bedside ultrasound of the finger",
      result: "Fluid around the flexor tendons within the sheath along the proximal phalanx. A bright 4 mm object with a shadow sits next to the sheath.",
    },
    {
      id: "labs",
      label: "Blood work",
      result:
        "WBC 14.6 x 10^9/L with neutrophilia. CRP 88 mg/L. Glucose 14.2 mmol/L. Creatinine 72 µmol/L. Lactate 1.6 mmol/L. Two sets of blood cultures drawn.",
    },
    {
      id: "surgeon",
      label: "Plastic surgery on call",
      result:
        "The plastic surgeon at the regional centre, 45 minutes away by road, can take her to the operating room tonight. " +
        "She asks for IV antibiotics now, a splint, nothing by mouth, and no probing of the wound in the emergency department.",
    },
    {
      id: "colleague",
      label: "The physician who saw her first",
      result: "Works in your group and is on shift tomorrow. The first visit was during a night when three ambulances were waiting to offload and one physician covered fast track.",
    },
    {
      id: "question",
      label: "Her question",
      result: "As you finish examining her, she asks, 'Did they miss something? I told them it was glass.'",
    },
  ],
  start: "s-open",
  nodes: [
    {
      kind: "say",
      id: "s-open",
      phase: "17:30",
      text:
        "The triage nurse has put her in a fast track chair. The note reads, 'Sutured here 3 days ago. Finger red and sore. Probably a stitch infection.' The nurse asks if she can just take the stitches out.",
      next: "q-history",
    },
    {
      kind: "question",
      id: "q-history",
      phase: "History",
      prompt: "What do you want to know from her and from the chart?",
      seconds: 90,
      modelAnswer: [
        "Exactly how it happened. Shattered glass, how deep it went, and whether a piece may still be inside.",
        "What was done at the first visit. Exploration, irrigation, X ray, tendon and nerve testing, closure, antibiotics.",
        "How the symptoms evolved. Swelling, fever, chills, pain on straightening the finger.",
        "Any numbness since the injury. A digital nerve may have been cut.",
        "Host factors. Diabetes control, immune suppression.",
        "Hand dominance and occupation. Tetanus status with the date of the last booster.",
      ],
      rubric: ["lc-h1", "lc-h2", "lc-h3", "lc-h4"],
      choices: [
        {
          id: "c-thorough",
          label:
            "I asked how the glass broke and how deep it went, reviewed the first visit note for imaging and tendon testing, asked about fever, swelling and numbness, and checked her diabetes, dominant hand, job and last tetanus booster.",
          next: "q-exam",
          quality: "strong",
          feedback:
            "Good. Glass in a hand wound is a foreign body risk until imaging says otherwise, and no X ray was done. " +
            "Numbness since the night of injury points to a nerve cut that was there from the start, not swelling. Diabetes raises her risk of serious infection.",
        },
        {
          id: "c-brief",
          label: "I asked how long it had been red and whether she had a fever, then moved on to examine the finger.",
          next: "s-brief",
          quality: "partial",
          feedback:
            "Fever and timing matter, but the mechanism and the first visit are the heart of this history. " +
            "The examiner wanted the glass, the missing X ray, the numbness since the injury and her host factors.",
        },
        {
          id: "c-stitch",
          label: "I agreed it looked like a stitch abscess, asked about allergies and planned to remove the sutures and start cephalexin.",
          next: "s-stitch",
          quality: "unsafe",
          feedback:
            "Calling this a stitch abscess before asking how it happened or examining the finger risks missing a closed space hand infection and a retained foreign body. " +
            "A febrile patient with a swollen, flexed finger needs a full history and a focused hand exam.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-brief",
      phase: "17:40",
      text: "As you examine her, she mentions that the thumb side of her fingertip has been numb since the night of the injury, and that she told the first doctor it was glass.",
      next: "q-exam",
    },
    {
      kind: "say",
      id: "s-stitch",
      phase: "17:45",
      text:
        "The nurse removes one suture and a little cloudy fluid comes out. The patient cries out when the nurse straightens the finger. The nurse asks you to come and look before she goes further.",
      next: "q-exam",
    },
    {
      kind: "question",
      id: "q-exam",
      phase: "Examination",
      prompt: "How do you examine this hand? Tell me what you are looking for.",
      seconds: 90,
      modelAnswer: [
        "Resting posture and swelling pattern. A flexed, evenly swollen finger.",
        "The four Kanavel signs. Flexed posture, fusiform swelling, sheath tenderness, pain on passive extension.",
        "FDS and FDP tested separately. Hold the other fingers straight for FDS. Hold the PIP for FDP.",
        "Two point discrimination on both sides of the finger. Capillary refill and digital artery signals.",
        "Look for spread. Palm and thenar space, lymphangitis, joint involvement.",
        "Signs of sepsis.",
        "Differential. Flexor tenosynovitis, cellulitis, stitch abscess, retained foreign body, felon, septic joint.",
      ],
      rubric: ["lc-p1", "lc-p2", "lc-p3", "lc-p4"],
      next: "q-workup",
    },
    {
      kind: "question",
      id: "q-workup",
      phase: "Investigations",
      prompt: "What investigations do you want, and why?",
      seconds: 60,
      modelAnswer: [
        "Plain X rays of the finger in three views. Glass of 2 mm or more is usually visible.",
        "Ultrasound can add information about sheath fluid but must not be used to exclude a foreign body.",
        "CBC, CRP, glucose, creatinine, lactate.",
        "Blood cultures before antibiotics if they do not cause delay. Wound swab.",
        "No investigation should delay antibiotics or the call to the hand surgeon.",
      ],
      rubric: ["lc-p5"],
      choices: [
        {
          id: "c-xray",
          label: "I ordered three view X rays of the finger to look for glass, plus blood work and blood cultures. I used ultrasound only to look at the sheath.",
          next: "s-results",
          quality: "strong",
          feedback:
            "Right. In a classic comparison study, plain films found radio-opaque objects such as glass 98 percent of the time, while ultrasound found only about half. " +
            "Blood cultures and inflammatory markers help, but do not wait on them.",
        },
        {
          id: "c-us-only",
          label: "I did a bedside ultrasound, and since I could not see glass I did not order an X ray.",
          next: "s-us-only",
          quality: "partial",
          feedback:
            "Ultrasound misses many foreign bodies, especially in the fingers, so a negative scan does not exclude glass. " +
            "The examiner wanted plain radiographs for any glass wound, and especially now.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-us-only",
      phase: "18:05",
      text: "The charge nurse asks whether an X ray was ever done. You order one. It shows a 4 mm fragment at the base of the proximal phalanx.",
      next: "s-results",
    },
    {
      kind: "say",
      id: "s-results",
      phase: "18:10",
      text:
        "The X ray shows a 4 mm glass fragment on the palm side of the base of the proximal phalanx. Her WBC is 14.6 and CRP 88. Her glucose is 14.2 mmol/L. " +
        "Her temperature is now 38.6°C.",
      next: "q-manage",
    },
    {
      kind: "question",
      id: "q-manage",
      phase: "Management",
      prompt: "What is your diagnosis, and what do you do now?",
      seconds: 90,
      modelAnswer: [
        "Pyogenic flexor tenosynovitis with a retained glass foreign body.",
        "IV antibiotics now, after blood cultures. Cover staphylococci, including MRSA where it is common, and streptococci.",
        "Splint in a safe position and elevate. Analgesia. Nothing by mouth.",
        "Treat her glucose.",
        "Tetanus booster. Last dose was 8 years ago and this is not a clean, minor wound.",
        "Call the hand surgeon now for urgent operative drainage and removal of the glass. Three or more Kanavel signs favour surgery.",
        "Do not open, probe or reclose the wound in the emergency department.",
      ],
      rubric: ["lc-m1", "lc-m2", "lc-m3", "lc-m4", "lc-m5"],
      choices: [
        {
          id: "c-iv-surgeon",
          label:
            "I diagnosed flexor tenosynovitis with retained glass, gave IV antibiotics after blood cultures, splinted and elevated the hand, kept her nothing by mouth, gave a tetanus booster and called the hand surgeon for the operating room tonight.",
          next: "s-surgeon",
          quality: "strong",
          feedback:
            "Correct. Infection in the flexor sheath can destroy the tendon and stiffen the finger within days. " +
            "Patients with three or more Kanavel signs or a late presentation usually need surgical irrigation, and the glass must come out. Early IV antibiotics and early surgery give the best chance of function.",
        },
        {
          id: "c-bedside",
          label: "I opened the wound, removed the glass at the bedside, irrigated it and sent her home on amoxicillin clavulanate with a recheck in 2 days.",
          next: "s-bedside",
          quality: "partial",
          feedback:
            "Removing the glass is right in principle, but pus in the flexor sheath cannot be drained through a skin wound, and the fragment sits next to the tendons and the nerve. " +
            "This needs IV antibiotics and operative irrigation by a hand surgeon.",
        },
        {
          id: "c-oral",
          label: "I took out two sutures to let it drain, started cephalexin and asked her to see her family doctor in a week.",
          next: "s-oral",
          quality: "unsafe",
          feedback:
            "This treats a closed space infection with a retained foreign body as a simple wound infection. " +
            "Delay risks tendon necrosis, a stiff finger or amputation in her dominant hand. She needs IV antibiotics and the hand surgeon today.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-bedside",
      phase: "18:40",
      text:
        "You cannot find the fragment through the wound. She has more bleeding and pain, and the finger is more swollen. You stop, splint the hand, start IV antibiotics and call the hand surgeon.",
      next: "s-surgeon",
    },
    {
      kind: "say",
      id: "s-oral",
      phase: "Next morning",
      text:
        "She returns at 07:00 with a temperature of 39.0°C and swelling into her palm. The hand surgeon is called, asks why she was sent home, and takes her to the operating room that morning.",
      next: "s-surgeon",
    },
    {
      kind: "say",
      id: "s-surgeon",
      phase: "The call",
      text: "The plastic surgeon on call at the regional centre is on the phone. She can take the patient to the operating room tonight and asks for your summary.",
      next: "q-handover",
    },
    {
      kind: "question",
      id: "q-handover",
      phase: "Handover",
      prompt: "What do you tell the surgeon?",
      seconds: 60,
      modelAnswer: [
        "A 46 year old left handed hairstylist with diabetes. Glass laceration to the left index finger 3 days ago, sutured without imaging.",
        "Now febrile with all four Kanavel signs.",
        "X ray shows a 4 mm fragment at the base of the proximal phalanx.",
        "Radial digital nerve deficit with two point discrimination of 12 mm, present since the injury.",
        "FDS and FDP intact but weak with pain.",
        "Antibiotics given and the time. Tetanus booster given. Last ate and drank. Glucose 14.2.",
      ],
      rubric: ["lc-pr4"],
      next: "q-disclose",
    },
    {
      kind: "question",
      id: "q-disclose",
      phase: "Her question",
      prompt: "While you wait for transport she asks, 'Did they miss something? I told them it was glass.' How do you respond?",
      seconds: 75,
      modelAnswer: [
        "Sit down. Make time. Answer honestly.",
        "Give the known facts. No X ray was done at the first visit. Today's X ray shows glass in the finger.",
        "Say you are sorry this has happened.",
        "Do not speculate about why, and do not blame the colleague. A review will look at what happened.",
        "Explain the plan. Antibiotics and surgery tonight, and the nerve repair.",
        "Tell her how she will hear about the review and who to contact. Document the conversation.",
      ],
      rubric: ["lc-pr1", "lc-pr2"],
      choices: [
        {
          id: "c-disclose",
          label:
            "I told her that no X ray was taken at the first visit and that today's X ray shows a piece of glass. I said I was sorry this had happened, explained the plan, and said the department would review her care and follow up with her.",
          next: "q-review",
          quality: "strong",
          feedback:
            "Good. The CMPA advises early disclosure of the known facts, a statement of regret, and a focus on the patient's needs. " +
            "You did not guess at the cause or blame anyone. Documenting the conversation in the chart is part of disclosure.",
        },
        {
          id: "c-deflect",
          label: "I told her that infections sometimes happen after stitches and that the surgeon would sort it out.",
          next: "s-deflect",
          quality: "partial",
          feedback:
            "This is true but incomplete. She asked a direct question and the retained glass is a known fact. " +
            "Patients who are not told often find out later and lose trust. The examiner wanted honest disclosure of the facts with regret.",
        },
        {
          id: "c-blame",
          label: "I told her the first doctor should have done an X ray and that it was a mistake.",
          next: "s-blame",
          quality: "unsafe",
          feedback:
            "Disclosure is required, but blaming a colleague before any review is unfair and unprofessional. " +
            "You do not know the full circumstances of that night. Give the facts, say you are sorry, and let the review find the causes.",
        },
      ],
    },
    {
      kind: "say",
      id: "s-deflect",
      phase: "19:00",
      text: "Her partner arrives and reads the discharge sheet from the first visit. He asks you directly whether anyone took an X ray last time. You tell them both that no X ray was done and that today's shows glass.",
      next: "q-review",
    },
    {
      kind: "say",
      id: "s-blame",
      phase: "19:00",
      text: "She says she wants to make a complaint about the first doctor. Your charge nurse asks you to step out and reminds you that the review has not happened yet.",
      next: "q-review",
    },
    {
      kind: "question",
      id: "q-review",
      phase: "After she leaves",
      prompt: "She is on her way to the regional centre. What do you do about the first visit, and what should the standard be for glass wounds of the hand?",
      seconds: 75,
      modelAnswer: [
        "File an incident report through the hospital system. Keep it factual.",
        "Speak with the colleague privately and supportively. Share the outcome.",
        "Look at system factors. Fast track staffing on a night with offload delays.",
        "Standard for glass wounds. Clarify the mechanism, X ray, explore in a bloodless field through full range of motion.",
        "Test each flexor tendon and both digital nerves separately and document the results.",
        "Do not close a wound that may hold glass until it has been imaged and explored.",
        "No routine antibiotics for simple clean lacerations. Give them for bites, heavy contamination or retained material, with close follow up.",
      ],
      rubric: ["lc-pr2", "lc-pr3", "lc-pr5"],
      next: "end",
    },
    {
      kind: "end",
      id: "end",
      text:
        "In the operating room the surgeon removes the glass, irrigates the sheath and repairs the radial digital nerve. She returns to work at 6 weeks with full flexion and recovering sensation. That is the end of the case.",
    },
  ],
  rubric: [
    {
      id: "lc-h1",
      competency: "assessment",
      criterion: "history",
      text: "Clarifies the mechanism. Shattered glass, how deep it went, and the risk that a fragment is still inside.",
      points: 2,
      teaching: "The mechanism sets the risk. About one third of foreign bodies are missed on first inspection.",
      source: "forsch",
    },
    {
      id: "lc-h2",
      competency: "assessment",
      criterion: "history",
      text: "Reviews the first visit. Exploration, irrigation, imaging, closure and the tendon and nerve exam that was documented.",
      points: 2,
      teaching: "A return visit is a second chance. Find out what was and was not done the first time.",
      source: "forsch",
    },
    {
      id: "lc-h3",
      competency: "assessment",
      criterion: "history",
      text: "Asks about fever, swelling of the whole finger, pain on straightening it, and numbness since the injury.",
      points: 2,
      teaching: "Symptoms that progress over 1 to 3 days after a penetrating wound are typical of flexor sheath infection. Numbness from the start points to a nerve cut.",
      source: "chapman",
    },
    {
      id: "lc-h4",
      competency: "assessment",
      criterion: "history",
      text: "Asks about diabetes control and immune status, hand dominance, occupation and the date of the last tetanus booster.",
      points: 1,
      teaching: "Diabetes and immune suppression worsen hand infections. Dominance and job shape the stakes and the plan.",
      source: "chapman",
    },
    {
      id: "lc-p1",
      competency: "assessment",
      criterion: "physical",
      text: "Looks for and finds the four Kanavel signs and diagnoses pyogenic flexor tenosynovitis.",
      points: 3,
      critical: true,
      teaching: "Flexed posture, fusiform swelling, sheath tenderness and pain on passive extension. Sheath tenderness and pain on passive extension are the strongest predictors.",
      source: "chapman",
    },
    {
      id: "lc-p2",
      competency: "assessment",
      criterion: "physical",
      text: "Tests FDS and FDP separately against resistance.",
      points: 2,
      teaching: "A partial tendon cut can still move the finger. Test each tendon in isolation and note pain or weakness.",
      source: "forsch",
    },
    {
      id: "lc-p3",
      competency: "assessment",
      criterion: "physical",
      text: "Tests two point discrimination on both sides of the finger and identifies a radial digital nerve deficit.",
      points: 2,
      teaching: "Test before anesthetic. Any nerve injury that impairs function needs referral to a hand surgeon.",
      source: "forsch",
    },
    {
      id: "lc-p4",
      competency: "assessment",
      criterion: "physical",
      text: "Gives a differential of flexor tenosynovitis, cellulitis, stitch abscess, retained foreign body, felon and septic joint.",
      points: 1,
      teaching: "A stitch abscess does not make the whole finger swell and flex. The pattern of swelling points to the sheath.",
      source: "chapman",
    },
    {
      id: "lc-p5",
      competency: "assessment",
      criterion: "physical",
      text: "Orders plain radiographs for glass and does not rely on ultrasound to exclude a foreign body.",
      points: 2,
      teaching: "Radiography detects radio-opaque objects such as glass in almost all cases. Ultrasound misses about half.",
      source: "manthey",
    },
    {
      id: "lc-m1",
      competency: "management",
      criterion: "management",
      text: "Starts IV antibiotics promptly, after blood cultures, covering staphylococci including MRSA where common and streptococci.",
      points: 3,
      critical: true,
      teaching: "Staphylococcus aureus causes most flexor sheath infections, and MRSA is rising. Do not delay antibiotics for tests.",
      source: "chapman",
    },
    {
      id: "lc-m2",
      competency: "disposition",
      criterion: "management",
      text: "Calls the hand surgeon urgently for operative drainage and removal of the glass the same day.",
      points: 3,
      critical: true,
      teaching: "Three or more Kanavel signs or a delayed presentation favour surgery. Complications reach 38 percent even with treatment.",
      source: "chapman",
    },
    {
      id: "lc-m3",
      competency: "management",
      criterion: "management",
      text: "Splints and elevates the hand, gives analgesia, keeps her nothing by mouth and treats her glucose.",
      points: 1,
      teaching: "Splinting and elevation reduce pain and swelling while she waits for the operating room.",
      source: "chapman",
    },
    {
      id: "lc-m4",
      competency: "management",
      criterion: "management",
      text: "Gives a tetanus booster because her last dose was 8 years ago and the wound is not clean and minor.",
      points: 1,
      teaching: "After a complete series, wounds other than clean minor ones need a booster if 5 years or more have passed. TIg is not needed.",
      source: "cig",
    },
    {
      id: "lc-m5",
      competency: "management",
      criterion: "management",
      text: "Does not open, probe or reclose the wound in the emergency department.",
      points: 1,
      teaching: "Pus in the flexor sheath cannot drain through the skin wound. Bedside probing risks the nerve and tendons.",
      source: "chapman",
    },
    {
      id: "lc-pr1",
      competency: "professionalism",
      criterion: "process",
      text: "Discloses honestly. Gives the known facts, says sorry for what happened, explains the plan, and does not speculate or blame.",
      points: 2,
      critical: true,
      teaching: "The CMPA advises early disclosure of known facts with a statement of regret. Blaming others before review is unfair and unprofessional.",
      source: "cmpa",
    },
    {
      id: "lc-pr2",
      competency: "professionalism",
      criterion: "process",
      text: "Documents the disclosure conversation and files a factual incident report.",
      points: 1,
      teaching: "Disclosure meetings belong in the chart. Reporting goes through the hospital's own channels and is separate from disclosure.",
      source: "cmpa",
    },
    {
      id: "lc-pr3",
      competency: "leadership",
      criterion: "process",
      text: "Reviews the first visit as a system issue with the colleague, and states the standard. Image glass wounds, explore through full range of motion, document each tendon and nerve.",
      points: 2,
      teaching: "Fast track wounds are often seen under time pressure. A clear local standard for glass wounds protects patients and staff.",
      source: "forsch",
    },
    {
      id: "lc-pr4",
      competency: "communication",
      criterion: "process",
      text: "Gives the surgeon a structured handover including the nerve deficit, antibiotic time, tetanus status and fasting time.",
      points: 2,
      teaching: "The surgeon needs to plan for the nerve repair as well as the drainage.",
      source: "chapman",
    },
    {
      id: "lc-pr5",
      competency: "disposition",
      criterion: "process",
      text: "States when lacerations need antibiotics. Not for simple clean wounds. Yes for bites, heavy contamination or retained material, with close follow up.",
      points: 1,
      teaching: "A meta-analysis found no benefit from prophylactic antibiotics in simple wounds that are not bites.",
      source: "forsch",
    },
  ],
  sources: [
    {
      id: "chapman",
      citation: "Chapman T, Ilyas AM. Pyogenic flexor tenosynovitis: evaluation and treatment strategies. J Hand Microsurg. 2019.",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6894957/",
    },
    {
      id: "forsch",
      citation: "Forsch RT, Little SH, Williams C. Laceration repair: a practical approach. Am Fam Physician. 2017.",
      url: "https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html",
    },
    {
      id: "manthey",
      citation: "Manthey DE, Storrow AB, Milbourn JM, Wagner BJ. Ultrasound versus radiography in the detection of soft tissue foreign bodies. Ann Emerg Med. 1996.",
      url: "https://pubmed.ncbi.nlm.nih.gov/8669741/",
    },
    {
      id: "cmpa",
      citation: "Canadian Medical Protective Association. Disclosing harm from healthcare delivery. Open and honest communication with patients. Version 3. 2017.",
      url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/disclosing-harm-from-healthcare-delivery-open-and-honest-communication-with-patients",
    },
    {
      id: "cig",
      citation: "Public Health Agency of Canada. Canadian Immunization Guide. Part 4. Tetanus toxoid. Tetanus prophylaxis in wound management. Updated 2026.",
      url: "https://www.canada.ca/en/public-health/services/publications/healthy-living/canadian-immunization-guide-part-4-active-vaccines/page-22-tetanus-toxoid.html",
    },
  ],
  reviewed: false,
  author: "Preceptor",
  version: 1,
};
