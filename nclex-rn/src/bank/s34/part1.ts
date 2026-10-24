import type { Item } from "@/engine/types";
import { AHS_IC, BLADDER_SCAN, GILLETTE_SOCKS, HINKLE, HOCKENBERRY, LEHNE, NEPHROSTOMY, POTTER, SPC_UHS, meta } from "./common";

export const PART1: Item[] = [
  {
    ...meta("rn-s34-01", {
      need: "BCC",
      topic: "Loose prosthetic socket late in the day",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A 58-year-old client with a left below-knee amputation wears a prosthesis over a gel liner and two 3-ply socks. By midafternoon the client says the socket feels loose and the limb sinks deeper into it with each step. The skin is intact. Which action should the nurse take?",
      rationale:
        "The residual limb loses volume during the day, so a socket that fit in the morning can be loose by afternoon. Adding a sock ply fills the space and restores a snug fit. A loose socket lets the limb move up and down inside it, which causes friction and skin breakdown. Removing ply makes the fit looser. Lotion makes the skin slide in the socket.",
      sources: [GILLETTE_SOCKS, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "Remove one of the 3-ply socks", why: "Removing ply makes the socket looser. Ply comes off when the socket feels tight." },
      { text: "Add a sock ply over the liner", why: "Extra ply fills the space left by volume loss and restores a snug fit." },
      { text: "Rub lotion onto the limb first", why: "Lotion softens the skin and lets it slide in the socket. It does not fill the gap." },
      { text: "Leave the prosthesis off until morning", why: "Volume loss during the day is expected. Adding ply restores the fit so the client can keep walking." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s34-02", {
      need: "PPT",
      topic: "Pinna position for ear drops by age",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "In an outpatient clinic, the nurse gives prescribed antibiotic ear drops to two clients with otitis externa. One is a 2-year-old child and the other is a 45-year-old adult. Complete the following sentence by choosing from the lists of options.",
      rationale:
        "The ear canal must be straightened so the drops reach it. In a child younger than 3 years the canal runs upward, so the pinna is pulled down and back. In an adult the canal curves forward and up, so the pinna is pulled up and back. Pulling the pinna forward bends the canal further.",
      refs: ["For a child younger than 3 years, the pinna is pulled down and back. For older children and adults, it is pulled up and back."],
      sources: [POTTER, HOCKENBERRY],
    }),
    kind: "cloze",
    scoring: "dyad",
    template: "To straighten the ear canal, the nurse pulls the pinna {0} for the child and {1} for the adult.",
    blanks: [
      {
        options: [
          { text: "down and back", why: "A young child's canal runs upward, so pulling down and back straightens it." },
          { text: "up and back", why: "Up and back suits an adult canal. It does not straighten a 2-year-old's canal." },
          { text: "down and forward", why: "Pulling forward bends the canal and blocks the drops." },
          { text: "straight forward", why: "Pulling forward closes the canal opening." },
        ],
        correct: 0,
      },
      {
        options: [
          { text: "down and back", why: "Down and back suits a child younger than 3 years, not an adult." },
          { text: "up and back", why: "An adult canal curves forward and up, so pulling up and back straightens it." },
          { text: "down and forward", why: "Pulling forward bends the adult canal and blocks the drops." },
          { text: "straight forward", why: "Pulling forward closes the canal opening." },
        ],
        correct: 1,
      },
    ],
  },
  {
    ...meta("rn-s34-03", {
      need: "BCC",
      topic: "Glasses and hearing aids during a hospital stay",
      cjmm: "generate",
      process: "nursing-process",
      difficulty: 3,
      stem: "An 83-year-old client is admitted from home with pneumonia. The client wears reading glasses and two behind-the-ear hearing aids. The record notes delirium during a past hospital stay. Which actions should the nurse include in the plan of care? Select all that apply.",
      rationale:
        "Glasses and hearing aids keep the client oriented and lower the risk of delirium, which this client has had before. The devices stay within reach and the aids are worn while the client is awake. Both go on the property list and the handoff report so they are tracked between shifts. Opening the battery door at night saves the battery. Aids left on trays or in linen are often thrown away.",
      sources: [POTTER, HINKLE],
    }),
    kind: "sata",
    options: [
      { text: "Keep the glasses and aid case within reach", why: "Devices within reach get used and are less likely to be lost." },
      { text: "Lock the hearing aids in the valuables safe", why: "Aids in a safe are not in use. The client needs them while awake." },
      { text: "Insert the hearing aids while the client is awake", why: "Clear hearing supports orientation and lowers delirium risk." },
      { text: "Leave the aids on the meal tray overnight", why: "Aids left on trays are often thrown away with the waste." },
      { text: "Remove the glasses so the eyes can rest", why: "Taking the glasses away limits vision and adds to confusion." },
      { text: "Record both devices on the handoff report", why: "Listing the devices lets each shift check that they are present." },
      { text: "Open the battery doors when the aids come out", why: "An open battery door at night stops the battery from draining." },
    ],
    correct: [0, 2, 5, 6],
  },
  {
    ...meta("rn-s34-04", {
      need: "BCC",
      topic: "Skin care at a healed suprapubic catheter site",
      cjmm: "action",
      process: "teaching",
      difficulty: 2,
      stem: "A 62-year-old client with multiple sclerosis has had a suprapubic catheter for 4 months. The site is healed with no redness or drainage. The client asks how to care for the skin around the tube. Which instruction should the nurse give?",
      rationale:
        "A healed suprapubic site is washed with soap and water and dried well, about twice a day. Powder and lotion around the tube can irritate the skin and hold moisture. The client can shower with the catheter and bag in place unless told otherwise. The site is checked each day for redness, swelling, pus or tenderness.",
      sources: [SPC_UHS, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "Dust the skin around the tube with talc", why: "Powder at the site can irritate the skin and clump around the tube." },
      { text: "Rub lotion into the skin around the tube", why: "Lotion keeps the skin moist and can irritate the site." },
      { text: "Wash with soap and water, then pat dry", why: "Soap and water with careful drying is the routine care for a healed site." },
      { text: "Keep the site out of the shower water", why: "The client can shower with the catheter and bag in place." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s34-05", {
      need: "BCC",
      topic: "Urethral leakage with a suprapubic catheter",
      cjmm: "prioritize",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 71-year-old client in long-term care has a suprapubic catheter. In the last 4 hours the bag has collected 20 mL of dark urine, and gritty sediment lines the tubing. The client's brief is wet with urine from the urethra. The client reports lower abdominal fullness. Temperature is 37.0°C (98.6°F). Complete the diagram by choosing the condition the client is most likely experiencing, 2 actions to take and 2 parameters to monitor.",
      rationale:
        "Only 20 mL drained in 4 hours, yet urine leaks from the urethra and the bladder feels full. Urine is being made but cannot leave through the tube. Gritty sediment points to a catheter blocked by encrustation. Leakage around or past a catheter often means blockage. The nurse first checks the tubing for kinks, then arranges a catheter change under the facility protocol. Urine flow into the bag and the scanned bladder volume show whether drainage is restored.",
      sources: [SPC_UHS, HINKLE],
    }),
    kind: "bowtie",
    conditions: [
      { text: "Catheter blocked by sediment", why: "Little drainage, urethral leakage, fullness and gritty sediment fit a blocked catheter." },
      { text: "Acute kidney injury", why: "Urine is still being made, since it leaks from the urethra. The kidneys are producing urine." },
      { text: "Urosepsis from the catheter", why: "The temperature is 37.0°C and the stem gives no signs of sepsis." },
      { text: "Dehydration with low output", why: "A full bladder with leakage shows urine is made but not draining." },
    ],
    actions: [
      { text: "Check the tubing for kinks and loops", why: "A kink is the quickest cause to find and correct." },
      { text: "Clamp the catheter for 2 hours", why: "Clamping would add to the bladder distension." },
      { text: "Arrange a catheter change per protocol", why: "An encrusted catheter that will not drain needs to be replaced." },
      { text: "Restrict fluids to limit leakage", why: "Low intake concentrates urine and adds to encrustation." },
      { text: "Pad the client and recheck next shift", why: "Waiting leaves the bladder distended and at risk of injury." },
    ],
    parameters: [
      { text: "Daily body weight", why: "Weight does not show whether the catheter drains." },
      { text: "Urine flow into the bag", why: "Steady flow into the bag shows the new catheter is draining." },
      { text: "Serum albumin level", why: "Albumin does not guide care of a blocked catheter." },
      { text: "Bladder volume on scan", why: "A falling scanned volume confirms the bladder is emptying." },
      { text: "Fingerstick glucose", why: "Glucose does not reflect catheter drainage." },
    ],
    correct: { condition: 0, actions: [0, 2], parameters: [1, 3] },
  },
  {
    ...meta("rn-s34-06", {
      need: "PPT",
      topic: "Order of eye drops and eye ointment",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 2,
      stem: "A client with bacterial conjunctivitis has prescriptions for moxifloxacin eye drops and erythromycin eye ointment. Both are due at 0900 in the right eye. How should the nurse give the two medications?",
      rationale:
        "Drops go in before ointment. Ointment leaves an oily film that keeps later drops from reaching the eye. A wait of about 5 minutes lets the drops absorb first. The ointment goes as a thin ribbon along the inside of the lower lid, from the inner to the outer corner. Vision may blur for a short time after ointment.",
      sources: [POTTER, LEHNE],
    }),
    kind: "mc",
    options: [
      { text: "Drops first, then the ointment 5 minutes later", why: "Drops absorb before the ointment film covers the eye." },
      { text: "Ointment first, then the drops 5 minutes later", why: "The ointment film blocks the drops from reaching the eye." },
      { text: "Drops and ointment together in the lower lid", why: "Given together, the ointment traps the drops and limits absorption." },
      { text: "Ointment along the upper lid, then the drops", why: "Ointment goes in the lower lid pocket and comes after the drops." },
    ],
    correct: 0,
  },
  {
    ...meta("rn-s34-07", {
      need: "BCC",
      topic: "Nephrostomy drainage bag at home",
      cjmm: "evaluate",
      process: "teaching",
      difficulty: 3,
      stem: "A 66-year-old client is going home with a right percutaneous nephrostomy tube. It drains to a leg bag by day and a larger bag at night. The nurse reviews the teaching. Which statement by the client shows understanding?",
      rationale:
        "Urine drains from the kidney by gravity, so the bag stays below the level of the kidney. A bag hung higher lets urine flow back and raises the risk of infection. The tube is not clamped, because the kidney keeps making urine. The bag is emptied before it is full so its weight does not pull on the tube.",
      sources: [NEPHROSTOMY, HINKLE],
    }),
    kind: "mc",
    options: [
      { text: "\"I will clamp the tube while I shower.\"", why: "Clamping stops drainage while the kidney keeps making urine." },
      { text: "\"I will hang the night bag on the headboard.\"", why: "A bag above the kidney lets urine flow back toward it." },
      { text: "\"I will keep the bag lower than my kidney.\"", why: "A bag below the kidney lets urine drain by gravity." },
      { text: "\"I will empty the bag once it is full.\"", why: "A full bag pulls on the tube. It is emptied before it fills." },
    ],
    correct: 2,
  },
  {
    ...meta("rn-s34-08", {
      need: "BCC",
      topic: "Steps of a portable bladder scan",
      cjmm: "action",
      process: "nursing-process",
      difficulty: 3,
      stem: "A 74-year-old man has not voided since his hip surgery 7 hours ago. The nurse prepares to measure his bladder volume with a portable bladder scanner. Place the steps in order.",
      rationale:
        "The client lies supine so the bladder sits under the lower abdomen. The scanner is set to the client's sex. Gel goes on the skin to carry the ultrasound. The probe sits just above the pubic bone and aims down toward the bladder. It is held still until the reading appears. The gel is wiped off at the end. A catheter is not inserted before the scan, which is meant to avoid needless catheterization.",
      sources: [BLADDER_SCAN],
    }),
    kind: "dnd",
    scoring: "zero-one",
    targets: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"],
    tokens: [
      { text: "Apply gel to the lower abdomen", why: "Gel goes on after the scanner is set and before the probe is placed." },
      { text: "Wipe the gel from the skin", why: "The gel is removed once the reading is complete." },
      { text: "Place the client supine", why: "Lying flat comes first so the bladder lies under the probe site." },
      { text: "Hold the probe still for the reading", why: "Moving the probe during the scan distorts the reading." },
      { text: "Place the probe over the umbilicus", why: "The umbilicus is too high. The probe sits just above the pubic bone." },
      { text: "Select the male setting", why: "The scanner is set to the client's sex before scanning." },
      { text: "Aim the probe down from above the pubic bone", why: "The probe points down toward the bladder from just above the pubic bone." },
      { text: "Drain the bladder with a straight catheter", why: "The scan replaces a catheter check. A catheter is not needed first." },
    ],
    correct: [2, 5, 0, 6, 3, 1],
  },
  {
    ...meta("rn-s34-09", {
      need: "BCC",
      topic: "Bladder scan setting after hysterectomy",
      cjmm: "analyze",
      process: "clinical-judgment",
      difficulty: 4,
      stem: "A 69-year-old woman had a total abdominal hysterectomy 3 years ago. She has not voided in the 6 hours since a hernia repair and reports lower abdominal fullness. On the female setting the bladder scanner reads 90 mL. A firm, rounded mass is felt above the pubic bone. What should the nurse conclude?",
      rationale:
        "Scanner guidance directs that a woman who has had a hysterectomy be scanned on the male setting. The female setting expects a uterus, and with no uterus present it can give a falsely low reading. Fullness, a firm mass above the pubic bone and no void in 6 hours all suggest a full bladder. The scan is repeated on the male setting before the 90 mL reading is trusted.",
      sources: [BLADDER_SCAN],
    }),
    kind: "mc",
    options: [
      { text: "The 90 mL reading rules out urinary retention", why: "The reading may be falsely low, and her signs point to a full bladder." },
      { text: "The female setting may have read falsely low", why: "With no uterus, the female setting can underestimate urine volume." },
      { text: "The firm mass is most likely the uterus", why: "Her uterus was removed 3 years ago." },
      { text: "The fullness is incision pain, not urine", why: "A firm mass above the pubic bone with no void suggests bladder filling." },
    ],
    correct: 1,
  },
  {
    ...meta("rn-s34-10", {
      need: "BCC",
      topic: "Catheterization volumes over a day",
      cjmm: "evaluate",
      process: "clinical-judgment",
      difficulty: 5,
      trend: true,
      stem: "A 29-year-old client with a spinal cord injury cannot void and has a prescription for intermittent catheterization every 6 hours. The goal is to keep each bladder volume below 500 mL. The nurse reviews the catheterization record. What should the nurse conclude?",
      tabs: [
        {
          title: "Intake and Output",
          table: {
            head: ["Time", "0000", "0600", "1200", "1800"],
            rows: [
              ["Volume drained (mL)", "420", "560", "610", "650"],
              ["Leakage since last catheterization", "None", "None", "Damp pad", "Wet pad"],
            ],
          },
        },
      ],
      rationale:
        "Volumes rose from 420 to 650 mL over the day and stayed above the 500 mL goal after 0000. Leakage appeared between catheterizations. The bladder is overfilling on a 6-hour schedule. Bladder protocols shorten the interval when a drained volume reaches 500 mL or more. Cutting fluids concentrates the urine and raises infection risk.",
      refs: ["A drained volume of 500 mL or more calls for the next catheterization in 3 hours. A volume of 401 to 500 mL calls for the next one in 4 hours."],
      sources: [AHS_IC, POTTER],
    }),
    kind: "mc",
    options: [
      { text: "The schedule meets the goal with no change", why: "Three of four volumes exceed the 500 mL goal." },
      { text: "Fluids should drop below 1000 mL a day", why: "Restricting fluids concentrates urine and raises infection risk." },
      { text: "The leakage shows the bladder is recovering", why: "Leakage with rising volumes is overflow from an overfull bladder." },
      { text: "Catheterization is needed more often than every 6 hours", why: "Volumes above 500 mL and new leakage call for a shorter interval." },
    ],
    correct: 3,
  },
];
