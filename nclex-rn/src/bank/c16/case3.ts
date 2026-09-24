import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c16-3";

/** Case 3. Orthopedic surgical unit. Older woman on day 1 after hip repair, mobility and skin. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "The First Morning After Hip Surgery",
  intro:
    "An 86-year-old woman fell at home and broke her left femoral neck. Yesterday she had a left hip hemiarthroplasty through a posterior approach. She lives alone and walked with a cane before the fall. She weighs 52 kg.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Osteoporosis, diagnosed 9 years ago. Takes no medicine for it. No bone density scan in the last 5 years.",
        "Hypertension. Mild hearing loss in both ears.",
        "Alert and oriented before and after surgery.",
      ].join("\n"),
    },
    {
      title: "Orders",
      text: [
        "Weight bearing as tolerated, left leg. Posterior hip precautions.",
        "Physical therapy twice daily, first session at 0900 today.",
        "Acetaminophen 1000 mg by mouth every 8 hours, scheduled at 0600, 1400 and 2200.",
        "Oxycodone 5 mg by mouth every 4 hours as needed for moderate to severe pain.",
        "Enoxaparin 40 mg subcutaneously daily.",
        "Urinary catheter removed at 0600 on day 1.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "Day 1, 0800"],
        rows: [
          ["Temperature", "37.4°C (99.3°F)"],
          ["Heart rate", "92/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "128/70 mmHg"],
          ["SpO2", "95% on room air"],
          ["Pain", "3 of 10 at rest, 7 of 10 on movement"],
        ],
      },
    },
    {
      title: "Laboratory Results",
      table: {
        head: ["Test", "Before surgery", "Day 1"],
        rows: [["Hemoglobin", "12.2 g/dL (122 g/L)", "10.4 g/dL (104 g/L)"]],
      },
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "RRP",
        topic: "Early skin warning signs after hip repair",
        cjmm: "recognize",
        difficulty: 3,
        stem: "At 0830 on day 1 the nurse completes a skin and position check. Which three findings require follow-up? Select three.",
        rationale:
          "Redness over the sacrum that does not blanch is a stage 1 pressure injury. A damp pad after an incontinent void softens skin and raises breakdown risk. Sliding down in bed adds shear over the sacrum and puts the heels on the mattress. A pillow between the knees keeps the hip in line. Equal pulses, a dry incision and pain of 3 at rest are expected.",
        sources: [SRC.edsberg, SRC.epuap],
      }),
      kind: "msn",
      select: 3,
      options: [
        { text: "Incision dressing dry and intact", why: "A dry, intact dressing is expected on day 1." },
        { text: "Nonblanching red area on the sacrum", why: "Intact skin with redness that does not blanch is a stage 1 pressure injury." },
        { text: "Pillow in place between the knees", why: "A pillow between the knees keeps the hip from crossing the midline." },
        { text: "Damp bed pad after a void", why: "Moisture from urine softens the skin and raises breakdown risk." },
        { text: "Pedal pulses 2+ in both feet", why: "Strong, equal pulses show good blood flow to both legs." },
        { text: "Pain rated 3 of 10 at rest", why: "Mild pain at rest is expected on day 1." },
        { text: "Heels on the mattress after sliding down", why: "Sliding causes shear, and heels resting on the bed bear high pressure." },
      ],
      correct: [1, 3, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "RRP",
        topic: "Pressure injury risk factors after surgery",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse gathers more data for a pressure injury risk score. For each finding, specify whether it raises or does not raise her risk of pressure injury.",
        rationale:
          "Pressure injury risk tools score mobility, activity, moisture, nutrition, friction and shear, and sensory perception. Needing two staff to turn, eating little, urine on the skin and sliding when the bed is raised all add risk. She is alert, follows commands and has intact sensation in her feet. These findings do not add risk.",
        sources: [SRC.epuap],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Raises risk", "Does not raise risk"],
      rows: [
        { text: "Turns only with the help of two staff", correct: [0], why: "Limited mobility keeps pressure on the same areas for long periods." },
        { text: "Alert and follows commands", correct: [1], why: "An alert client can sense discomfort and ask to be moved." },
        { text: "Ate 25% of her breakfast", correct: [0], why: "Poor intake limits the protein and energy that skin needs." },
        { text: "Feels light touch in both feet", correct: [1], why: "Intact sensation lets her feel pressure and ask to be moved." },
        { text: "Incontinent of urine once since catheter removal", correct: [0], why: "Moisture weakens the skin and raises the risk of breakdown." },
        { text: "Slides down when the head of the bed is raised", correct: [0], why: "Sliding creates friction and shear over the sacrum." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Pain as the barrier to mobility",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "Physical therapy arrives at 0900. The client says, \"It hurts too much. I'm not getting up today.\" Her last oxycodone dose was at 0200. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "Pain is 7 of 10 on movement and her last oxycodone was at 0200. That pain is stopping her from getting up and changing position. Early walking and turning lower the risk of pressure injury, clots, pneumonia and loss of function. Her hearing loss is mild. A hemoglobin of 10.4 g/dL (104 g/L) is lower than before surgery but her heart rate and BP are stable.",
        sources: [SRC.aaos, SRC.brunner],
      }),
      kind: "cloze",
      template: "The nurse should first address {0} because it is preventing {1}.",
      scoring: "dyad",
      blanks: [
        {
          options: [
            { text: "mild hearing loss", why: "Mild hearing loss can be managed by speaking clearly. It is not stopping her." },
            { text: "the day 1 hemoglobin", why: "The drop is expected after surgery and her vital signs are stable." },
            { text: "pain on movement", why: "Pain of 7 of 10 on movement is the reason she refuses to get up." },
            { text: "a low-grade temperature", why: "37.4°C on day 1 is common after surgery and does not stop her moving." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "wound healing", why: "Pain does not stop the incision from healing." },
            { text: "walking and turning", why: "She will not get up or change position while pain is 7 of 10." },
            { text: "bladder emptying", why: "Nothing shows she cannot empty her bladder." },
            { text: "her hearing", why: "Pain does not affect her hearing." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Pressure injury prevention measures",
        cjmm: "generate",
        process: "nursing-process",
        difficulty: 3,
        stem: "The nurse updates the plan of care to protect her skin. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Pillows under the calves lift the heels off the bed. Regular turning moves pressure between areas. Keeping the head of the bed at 30 degrees or lower limits shear. A barrier cream protects skin from urine. Massage can damage tissue over a red area. Ring cushions concentrate pressure around the ring. A raised head of the bed makes her slide and adds shear.",
        sources: [SRC.epuap],
      }),
      kind: "sata",
      options: [
        { text: "Massage the red area on the sacrum", why: "Massage can damage fragile tissue over a pressure area." },
        { text: "Float the heels on calf pillows", why: "Lifting the heels off the bed removes pressure from them." },
        { text: "Place a ring cushion under the sacrum", why: "A ring concentrates pressure on the tissue around it." },
        { text: "Reposition her on a set schedule", why: "Regular turning moves pressure from one area to another." },
        { text: "Keep the bed head at 30 degrees or lower", why: "A lower head of bed limits sliding and shear over the sacrum." },
        { text: "Raise the head of the bed to 60 degrees", why: "A high head of bed makes her slide and adds shear over the sacrum." },
        { text: "Apply barrier cream after each void", why: "A barrier cream shields the skin from urine." },
      ],
      correct: [1, 3, 4, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Timing an opioid before therapy",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "The client's scheduled acetaminophen was given at 0600. Which action should the nurse take next so that she can take part in physical therapy?",
        rationale:
          "She has an as needed prescription for oxycodone 5 mg every 4 hours and has had none since 0200. Giving it now and moving the session lets the dose reach its peak effect during the walk. Her next acetaminophen is not due until 1400. An extra dose would break the schedule. Bed rest would raise her risk of complications.",
        sources: [SRC.aaos, SRC.brunner],
      }),
      kind: "mc",
      options: [
        { text: "Encourage her to walk now as scheduled", why: "Walking with pain of 7 of 10 is likely to fail and adds distress." },
        { text: "Request a prescription for bed rest today", why: "Bed rest raises the risk of pressure injury, clots and pneumonia." },
        { text: "Give oxycodone and reschedule the walk", why: "The dose is due, and a later session matches its peak effect." },
        { text: "Give an extra acetaminophen 1000 mg dose", why: "Acetaminophen is scheduled every 8 hours and the next dose is due at 1400." },
      ],
      correct: 2,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Bone health and fall teaching after hip fracture",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 3,
        stem: "On day 4 the client prepares to move to a rehabilitation unit. The nurse reviews bone health, fall prevention and hip precautions. For each statement, specify whether it shows understanding or needs further teaching.",
        rationale:
          "A hip fracture after a fall points to fragile bone, so she needs a bone density test and treatment. Calcium and vitamin D support bone. A night light lowers the risk of another fall. A low, soft chair and bending forward to reach her shoes flex the hip past 90 degrees. Stopping the walker too early raises fall risk.",
        refs: ["Posterior hip precautions: do not bend the hip past 90 degrees, cross the legs or turn the leg inward."],
        sources: [SRC.conley, SRC.falls, SRC.brunner, { body: "Morin SN, et al. Osteoporosis Canada", work: "Clinical practice guideline for management of osteoporosis and fracture prevention in Canada: 2023 update. CMAJ 195(39):E1333", year: 2023, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10610956/" }],
        canada: "Osteoporosis Canada's 2023 guideline recommends starting a bone medicine for adults age 50 or older after a hip fracture. A bone density test is not required before treatment starts.",
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Shows understanding", "Needs further teaching"],
      rows: [
        { text: "\"I will ask about a bone density test and a bone medicine.\"", correct: [0], why: "Osteoporosis care after a hip fracture lowers the risk of another fracture." },
        { text: "\"I will sit in my low, soft armchair to rest my hip.\"", correct: [1], why: "A low seat bends the hip past 90 degrees and risks dislocation." },
        { text: "\"I will keep a night light on between my bed and the bathroom.\"", correct: [0], why: "Lighting the path at night lowers the risk of another fall." },
        { text: "\"I will bend forward to put on my shoes.\"", correct: [1], why: "Bending forward flexes the hip past 90 degrees. A long-handled shoehorn avoids this." },
        { text: "\"I will get calcium and vitamin D in my diet each day.\"", correct: [0], why: "Calcium and vitamin D support bone strength." },
        { text: "\"I will stop using my walker once the pain is gone.\"", correct: [1], why: "Pain relief does not mean her balance and strength have returned." },
      ],
    },
  ],
};
