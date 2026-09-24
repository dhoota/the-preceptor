import type { Item } from "@/engine/types";
import { AACN_ASP, AASM, ASPEN_EN, HINKLE, NPIAP, PAINAD, POTTER, meta } from "./common";

export const PART4: Item[] = [
  {
    ...meta("rn-s13-31", {
      topic: "Leaking CPAP mask in hospital",
      cjmm: "prioritize",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 52-year-old client with obstructive sleep apnea uses CPAP at home and brought the machine to the hospital. The client says the mask leaks and blows air into the eyes at night. What should the nurse do first?",
      rationale:
        "Air blowing into the eyes points to a leak at the top of the mask. A mask of the wrong size or loose straps is the usual cause, so fit is checked first. Overtightening folds the cushion and can injure the skin. Stopping CPAP leaves the apnea untreated. Pressure settings change only by prescription.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Check the mask size and strap fit", why: "Poor fit is the most common cause of a leak, and it is checked before other changes." },
      { text: "Tighten the straps as far as they go", why: "Overtightening distorts the cushion, which can worsen the leak and injure the skin." },
      { text: "Turn off the CPAP for tonight", why: "Stopping therapy leaves the airway to collapse during sleep." },
      { text: "Raise the pressure on the machine", why: "Pressure changes need a prescription and can make a leak worse." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s13-32", {
      topic: "Timing a bowel program after spinal cord injury",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 34-year-old client with a complete T6 spinal cord injury is starting a bowel program on a rehabilitation unit. When should the nurse schedule the bowel program?",
      rationale:
        "A bowel program relies on regular timing. Scheduling it at the same time each day about 30 minutes after a meal uses the gastrocolic reflex. A complete T6 injury blocks the sensation of rectal fullness, so waiting for an urge fails. Waiting for incontinence or changing the time each day prevents a reliable pattern.",
      sources: [HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Same time daily, about 30 minutes after a meal", why: "Regular timing after a meal uses the gastrocolic reflex to trigger emptying." },
      { text: "Only when the client feels the urge to defecate", why: "A complete T6 injury blocks the sensation of rectal fullness, so an urge may not come." },
      { text: "Whenever stool is found in the brief", why: "Responding to incontinence does not train the bowel to empty on schedule." },
      { text: "At a different time each day, when convenient", why: "Changing times prevents the bowel from adapting to a pattern." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s13-33", {
      topic: "When heat is not the right choice",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 2,
      stem: "The nurse reviews four clients who ask for a heating pad. For which client should the nurse question the request?",
      rationale:
        "Heat dilates vessels and raises blood flow. In the first hours after an ankle sprain, this increases swelling and bleeding into the tissue. Cold is used instead. Heat relaxes muscle spasm, eases morning back stiffness and reduces joint stiffness in osteoarthritis.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Neck muscle spasm for 3 days", why: "Heat relaxes muscle spasm and eases the pain it causes." },
      { text: "Morning stiffness in the lower back", why: "Warmth loosens stiff muscles and eases movement." },
      { text: "An ankle sprain 1 hour ago", why: "Heat in the first hours after a sprain increases swelling and bleeding." },
      { text: "Knee stiffness from osteoarthritis", why: "Heat reduces joint stiffness and pain in osteoarthritis." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s13-34", {
      topic: "Contact lenses in an unresponsive client",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "An unresponsive client is admitted after a fall at home. The client wears soft contact lenses. There is no injury to the eyes. Which action should the nurse take?",
      rationale:
        "An unresponsive client does not blink normally. Lenses left in place starve the cornea of oxygen and can cause ulceration. With eye injury ruled out, the lenses come out. Each lens goes in its own labeled case with storage solution. A soft lens stored dry is damaged. Tap water can carry organisms that infect the cornea.",
      sources: [POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Leave the lenses in until the client wakes", why: "Lenses left in a client who does not blink can injure the cornea." },
      { text: "Store the lenses dry in a labeled cup", why: "A soft lens dries out and is damaged without solution." },
      { text: "Rinse the lenses in tap water and reinsert", why: "Tap water can carry organisms that infect the cornea." },
      { text: "Remove and store the lenses in solution", why: "Removal protects the cornea, and solution keeps the lenses intact." },
    ],
    correct: 3,
  },
  {
    ...meta("rn-s13-35", {
      topic: "Checking feeding tube position",
      cjmm: "analyze",
      process: "nursing-process",
      difficulty: 4,
      stem: "A client has a small-bore nasogastric tube that was placed 3 days ago and confirmed by x-ray. The external mark at the nostril is unchanged. The client is due for an intermittent feeding. Which finding best supports that the tube is still in the stomach?",
      rationale:
        "The x-ray confirmed placement at insertion. Before each feeding the nurse checks for signs that the tube has moved. An aspirate pH of 5 or less supports gastric placement, and a pH of 4 meets that. Air auscultation cannot tell stomach from lung or intestine. Absent coughing or bubbling does not rule out a tube in the airway.",
      refs: ["A gastric aspirate pH of 5 or less supports gastric placement of a feeding tube."],
      sources: [ASPEN_EN],
    }),
    kind: "mc",
    options: [
      { text: "Aspirate with a pH of 4", why: "Acidic aspirate at pH 4 supports placement in the stomach." },
      { text: "Gurgling over the stomach on air injection", why: "Sound from injected air can be heard even when the tube is in the lung or intestine." },
      { text: "No cough during the water flush", why: "A tube in the airway may not cause coughing, especially with a weak cough reflex." },
      { text: "No bubbles with the tube end under water", why: "Bubbling is an unreliable test and does not confirm gastric placement." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s13-36", {
      topic: "Denture care by assistive personnel",
      cjmm: "action",
      process: "teaching",
      difficulty: 1,
      stem: "The nurse teaches an assistive personnel how to care for a client's full upper and lower dentures. Which instructions should the nurse include? Select all that apply.",
      rationale:
        "A towel in the sink stops the dentures breaking if dropped. Dentures stay in cool water or soaking solution overnight so they keep their shape. Brushing the gums and tongue removes plaque and food. Sore spots signal a poor fit. Hot water warps the base. Tissue-wrapped dentures are often thrown away by mistake. Bleach can damage the base.",
      sources: [POTTER, { body: "Canadian Nurses Protective Society", work: "InfoLAW: Delegation to Unregulated Care Providers", year: 2024, url: "https://cnps.ca/article/infolaw-delegation-to-unregulated-care-providers/" }],
      canada:
        "In Canada, assistive personnel are called unregulated care providers, such as health care aides. Rules for delegating care to them and supervising it come from each provincial nursing regulator and vary by province.",
    }),
    kind: "sata",
    options: [
      { text: "Line the sink with a towel", why: "A towel cushions the dentures if they slip during cleaning." },
      { text: "Brush the dentures with hot water", why: "Hot water can warp the denture base and change the fit." },
      { text: "Store the dentures in cool water overnight", why: "Dentures kept moist hold their shape." },
      { text: "Wrap the dentures in a tissue on the tray", why: "Dentures wrapped in tissue are easily discarded by mistake." },
      { text: "Brush the gums and tongue gently", why: "Cleaning the gums and tongue removes plaque and food." },
      { text: "Soak the dentures in bleach solution", why: "Bleach can weaken and discolor the denture base." },
      { text: "Check the gums for sore spots", why: "Sore spots show a poor fit or early infection." },
    ],
    correct: [0, 2, 4, 6],
  },
  {
    ...meta("rn-s13-37", {
      topic: "Comfort measures in advanced dementia",
      cjmm: "action",
      process: "caring",
      difficulty: 3,
      stem: "An 86-year-old client with advanced dementia cannot rate pain. During turning, the nurse observes moaning, a frown and guarding of the left hip. The PAINAD score is 6. Which nonpharmacologic measures should the nurse use? Select all that apply.",
      rationale:
        "A PAINAD score of 6 shows moderate pain. The client moans, frowns and guards the left hip. Pillow support during turns cuts strain on the hip. Familiar music and a calm voice ease distress. Warmth relaxes muscles. The client cannot use a 0 to 10 scale. Rushed turns increase pain. Reorientation does not relieve pain.",
      refs: ["PAINAD totals of 4 to 6 indicate moderate pain."],
      sources: [PAINAD, POTTER],
    }),
    kind: "sata",
    options: [
      { text: "Ask the client to rate pain from 0 to 10", why: "The client cannot self-report, so a numeric scale gives no useful answer." },
      { text: "Support the left hip with pillows when turning", why: "Support limits movement of the painful joint during turns." },
      { text: "Turn the client quickly to shorten the discomfort", why: "Rushed movement jolts the painful hip and increases pain." },
      { text: "Play music the client enjoyed in the past", why: "Familiar music can calm distress and distract from pain." },
      { text: "Reorient the client to the date and place", why: "Reorientation does not ease pain and can upset a client with advanced dementia." },
      { text: "Speak calmly and explain each touch", why: "A calm voice and warning before touch reduce fear and guarding." },
      { text: "Cover the client with a warm blanket", why: "Warmth relaxes tense muscles and adds comfort." },
    ],
    correct: [1, 3, 5, 6],
  },
  {
    ...meta("rn-s13-38", {
      topic: "Skin damage from incontinence",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 5,
      stem: "A 77-year-old client in long-term care has urinary and fecal incontinence. The perineal and inner thigh skin is red, shiny and weeping, with blurred edges. No bony prominence is involved. The client reports burning when washed and repositions without help. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "Red, shiny, weeping skin with blurred edges on the perineum and inner thighs fits incontinence-associated dermatitis. The damage follows the skin exposed to stool and urine. It is not over a bony prominence. The client repositions without help, which lowers pressure risk. Burning on washing reflects inflamed, broken skin.",
      sources: [NPIAP, POTTER],
    }),
    kind: "cloze",
    scoring: "triad",
    template: "The skin damage is most consistent with {0} as evidenced by {1} and {2}.",
    blanks: [
      {
        options: [
          { text: "a stage 2 pressure injury", why: "Pressure injuries form over bony prominences. This damage is on the perineum and thighs, and the client moves without help." },
          { text: "candidal skin infection", why: "Candida shows as a bright red rash with satellite spots. The stem describes none." },
          { text: "bacterial cellulitis of the thigh", why: "Cellulitis causes warm, spreading redness with firm swelling. The stem does not describe these." },
          { text: "incontinence-associated dermatitis", why: "Moisture damage from urine and stool causes red, weeping skin with blurred edges." },
        ],
        correct: 3,
      },
      {
        options: [
          { text: "independent repositioning", why: "Moving without help lowers pressure risk but does not describe the skin." },
          { text: "redness with blurred edges", why: "Diffuse redness with blurred edges is typical of moisture damage." },
          { text: "a red rash with satellite spots", why: "The stem does not describe satellite spots." },
          { text: "clear demarcation over bone", why: "The stem states no bony prominence is involved and the edges are blurred." },
        ],
        correct: 1,
      },
      {
        options: [
          { text: "a wound over the sacral bone", why: "The damage is on the perineum and thighs, not over the sacrum." },
          { text: "a raised body temperature", why: "The stem gives no temperature." },
          { text: "skin exposed to stool and urine", why: "The damage follows the area in contact with stool and urine." },
          { text: "a dark purple skin area", why: "The stem describes red, shiny skin, not purple discoloration." },
        ],
        correct: 2,
      },
    ],
  },
  {
    ...meta("rn-s13-39", {
      topic: "Coughing during tube feeding with a flat bed",
      cjmm: "action",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 69-year-old client receives continuous nasogastric feeding. The nurse finds the head of the bed flat after a linen change. The client is coughing. SpO2 has fallen from 96% to 89%. Respirations are 28/minute, with new coarse crackles in the right lower lobe. Formula-colored secretions are suctioned from the mouth. Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "The head of the bed was flat during a continuous feeding. The client then coughed, SpO2 fell from 96% to 89% and new crackles appeared in the right lower lobe. Formula-colored secretions show the formula reached the airway. The nurse stops the feeding and raises the head of the bed. SpO2 and breath sounds show whether breathing worsens.",
      sources: [AACN_ASP, ASPEN_EN],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Pulmonary embolism", why: "An embolus causes sudden dyspnea, often with clear lungs. Formula in the secretions points to aspiration." },
      { text: "Aspiration of enteral formula", why: "A flat bed during feeding, cough, falling SpO2, new crackles and formula in the secretions fit aspiration." },
      { text: "Heart failure exacerbation", why: "The stem gives no edema or weight gain, and the crackles are new in one lobe after lying flat." },
      { text: "Anxiety reaction", why: "Anxiety does not cause falling SpO2, crackles or formula in the secretions." },
    ],
    actions: [
      { text: "Flush the tube with 60 mL of water", why: "More fluid in the stomach adds to what can be aspirated." },
      { text: "Stop the feeding pump", why: "Stopping the formula prevents more of it reaching the airway." },
      { text: "Lay the client flat to suction", why: "A flat position invites more reflux and aspiration." },
      { text: "Raise the head of the bed", why: "Elevation lowers reflux and eases breathing." },
      { text: "Raise the rate later to catch up", why: "A higher rate adds gastric volume and raises aspiration risk." },
    ],
    parameters: [
      { text: "Oxygen saturation", why: "SpO2 shows whether gas exchange is recovering or worsening." },
      { text: "Serum sodium level", why: "Sodium does not track aspiration or breathing." },
      { text: "Urine specific gravity", why: "Specific gravity reflects hydration, not lung status." },
      { text: "Breath sounds", why: "Spreading crackles would show worsening aspiration or pneumonia." },
      { text: "Serum calcium level", why: "Calcium does not track aspiration or breathing." },
    ],
    correct: { condition: 1, actions: [1, 3], parameters: [0, 3] },
  },
  {
    ...meta("rn-s13-40", {
      topic: "Evaluating a sleep plan",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 3,
      trend: true,
      stem: "A 71-year-old client on a rehabilitation unit started a sleep plan on night 1. The plan sets a fixed wake time, limits daytime naps and removes the television from the bedside. The nurse reviews the sleep log. Which findings show the plan is working? Select all that apply.",
      tabs: [
        {
          title: "Sleep Log",
          table: {
            head: ["Measure", "Night 1", "Night 2", "Night 3", "Night 4"],
            rows: [
              ["Hours asleep", "3.5", "4.5", "5.5", "6.5"],
              ["Awakenings", "6", "5", "3", "2"],
              ["Minutes to fall asleep", "75", "60", "40", "25"],
              ["Pain at bedtime (0 to 10)", "3", "3", "3", "3"],
            ],
          },
        },
      ],
      rationale:
        "The plan aims to consolidate sleep. Over 4 nights, hours asleep rose from 3.5 to 6.5. Time to fall asleep fell from 75 to 25 minutes. Awakenings fell from 6 to 2. Each shows better sleep. Pain stayed at 3, so it does not measure the change. A total under 7 hours is still rising and does not show failure.",
      sources: [AASM],
    }),
    kind: "sata",
    options: [
      { text: "Pain at bedtime stayed at 3 each night", why: "Pain did not change, so it does not show the effect of the sleep plan." },
      { text: "Hours asleep rose from 3.5 to 6.5", why: "Longer total sleep shows the plan is consolidating sleep." },
      { text: "Hours asleep stayed under 7 each night", why: "Sleep rose every night. A total under 7 hours does not mean the plan failed." },
      { text: "Awakenings fell from 6 to 2 a night", why: "Fewer awakenings show more continuous sleep." },
      { text: "Minutes to fall asleep fell from 75 to 25", why: "Falling asleep faster shows a stronger link between bed and sleep." },
    ],
    correct: [1, 3, 4],
  },
];
