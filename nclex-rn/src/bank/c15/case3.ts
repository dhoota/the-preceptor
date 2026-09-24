import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c15-3";

/** Case 3. Long-term care. Older man with a chronic movement disorder who has started to fall. */
export const CASE3: CaseStudy = {
  id: ID,
  title: "Two Falls in One Week",
  intro:
    "An 81-year-old man with Parkinson disease for 9 years moved into a long-term care facility 2 weeks ago. He has fallen twice in the last 6 days. His daughter says he seems stiffer and slower than usual in the afternoons. The nurse reviews his record.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Parkinson disease for 9 years. Walks with a wheeled walker.",
        "Resting tremor of the right hand and a soft voice for several years.",
        "At home for 3 years: carbidopa-levodopa 25/100 mg, 1.5 tablets by mouth at 0600, 1000, 1400 and 1800.",
        "Facility prescription reads carbidopa-levodopa 25/100 mg, 1.5 tablets by mouth 4 times daily.",
        "Last bowel movement 4 days ago.",
        "Wakes 3 times a night to void.",
        "Weight 64 kg.",
      ].join("\n"),
    },
    {
      title: "Medication Administration Record",
      table: {
        head: ["Carbidopa-levodopa dose", "Home time", "Time given on day 6"],
        rows: [
          ["Dose 1", "0600", "0815"],
          ["Dose 2", "1000", "1210"],
          ["Dose 3", "1400", "1605"],
          ["Dose 4", "1800", "2010"],
        ],
      },
    },
    {
      title: "Nurses' Notes",
      text: [
        "Day 2, 1540: Found sitting on the floor beside his chair. No injury found.",
        "Day 5, 2100: Restless and pulling at his blanket. Haloperidol 0.5 mg by mouth given once under an as-needed prescription from the on-call provider.",
        "Day 6, 1550: Found on the floor beside the bathroom door. No injury found. Says his feet stuck to the floor.",
      ].join("\n"),
    },
  ],
  reviewed: false,
  version: 1,
  items: [
    {
      ...meta(`${ID}-1`, {
        need: "SIPC",
        topic: "Fall risk in a stiff older adult",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The nurse assesses the client on day 6 at 2030 and writes the note below. Click to highlight the findings that raise his risk of another fall.",
        rationale:
          "A fall in BP from 134/80 to 104/64 mmHg on standing is orthostatic hypotension. Freezing in doorways stops the feet while the body keeps moving. Backless slippers slip off. Haloperidol blocks dopamine and worsens stiffness and balance. Voiding 3 times a night means walking in the dark while drowsy. Orientation, a resting tremor, fair intake and intact skin do not add fall risk here.",
        sources: [SRC.pfHospital, SRC.beers, SRC.armstrong],
      }),
      kind: "highlight",
      passage:
        "[[Alert and knows his daughter by name]]. [[BP 134/80 lying, 104/64 standing]]. [[Freezes in doorways]]. [[Resting tremor of the right hand]]. [[Wears backless slippers]]. [[Haloperidol 0.5 mg at 2100 yesterday]]. [[Eats 75 percent of his meals]]. [[Voids 3 times a night]]. [[Skin intact over the sacrum]].",
      spans: [
        { text: "Alert and knows his daughter by name", why: "Intact orientation does not add to his fall risk." },
        { text: "BP 134/80 lying, 104/64 standing", why: "A systolic drop from 134 to 104 mmHg on standing is orthostatic hypotension." },
        { text: "Freezes in doorways", why: "Freezing stops the feet while the body keeps moving forward." },
        { text: "Resting tremor of the right hand", why: "A resting tremor is a long-standing sign and does not explain the recent falls." },
        { text: "Wears backless slippers", why: "Backless footwear slips and catches, which raises fall risk." },
        { text: "Haloperidol 0.5 mg at 2100 yesterday", why: "Haloperidol blocks dopamine and worsens stiffness and balance in this disease." },
        { text: "Eats 75 percent of his meals", why: "Fair intake does not add to his fall risk." },
        { text: "Voids 3 times a night", why: "Walking to the toilet at night while drowsy raises fall risk." },
        { text: "Skin intact over the sacrum", why: "Intact skin does not relate to fall risk." },
      ],
      correct: [1, 2, 4, 5, 7],
    },
    {
      ...meta(`${ID}-2`, {
        need: "PPT",
        topic: "Linking symptoms to levodopa timing",
        cjmm: "analyze",
        difficulty: 4,
        stem: "The nurse compares the client's symptoms with the times his carbidopa-levodopa was given. For each finding, specify whether it is most consistent with wearing off before a late dose or with a drug effect after a dose.",
        rationale:
          "Levodopa has a short effect. When a dose is late, stiffness, tremor, slowness and freezing return before it is given. Each facility dose was given about 2 hours after his home time. Writhing movements and nausea shortly after a dose are drug effects at peak levels. The pattern points to the dose timing, not to a need for a higher dose.",
        sources: [SRC.armstrong, SRC.pfHospital],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Wearing off before a late dose", "Drug effect after a dose"],
      rows: [
        { text: "Stiff and slow at 1530, before the 1605 dose", correct: [0], why: "The 1400 home dose was not yet given, so the last dose had worn off." },
        { text: "Writhing arm movements at 1700, about an hour after a dose", correct: [1], why: "Dyskinesia near the peak level is a drug effect." },
        { text: "Tremor returns at 1130, before the 1210 dose", correct: [0], why: "The dose due at 1000 was late, so symptoms came back." },
        { text: "Nausea 20 minutes after a dose", correct: [1], why: "Nausea soon after a dose is a common levodopa effect." },
        { text: "Freezing at the bathroom door at 1550", correct: [0], why: "Freezing returned while the 1400 dose was overdue." },
        { text: "Trouble turning in bed at 0700", correct: [0], why: "The overnight gap before the 0815 dose lets symptoms return." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "Dose times that drifted on admission",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse compares the home schedule with the times on the Medication Administration Record. Complete the following sentence by choosing from the lists of options.",
        rationale:
          "His home doses were set at 0600, 1000, 1400 and 1800. The facility prescription says only 4 times daily, so each dose now comes about 2 hours late. Both falls and the freezing came while a dose was overdue. Parkinson medications should be given within 15 minutes of the home schedule. A soft voice and a resting tremor are long-standing and do not explain the timing of the falls.",
        refs: ["Parkinson medications should be given within 15 minutes of the client's home schedule."],
        sources: [SRC.pfHospital, SRC.armstrong],
      }),
      kind: "cloze",
      scoring: "dyad",
      template: "The nurse should first address {0} because it is most likely {1}.",
      blanks: [
        {
          options: [
            { text: "his soft, quiet voice", why: "A soft voice is common in this disease and does not explain the falls." },
            { text: "his resting hand tremor", why: "The tremor is long-standing and does not explain the afternoon falls." },
            { text: "the drift in his dose times", why: "Each dose is about 2 hours late, and symptoms return before it is given." },
            { text: "his backless slippers", why: "Slippers add risk but do not explain why the falls come when doses are late." },
          ],
          correct: 2,
        },
        {
          options: [
            { text: "a sign of a new stroke", why: "No sudden one-sided weakness or speech change is described." },
            { text: "driving his afternoon falls", why: "Both falls and the freezing came while a dose was overdue." },
            { text: "an expected part of aging", why: "The falls follow a pattern tied to late doses, which aging does not explain." },
            { text: "caused by dehydration", why: "Dehydration would not explain why the falls cluster when doses are late." },
          ],
          correct: 1,
        },
      ],
    },
    {
      ...meta(`${ID}-4`, {
        need: "BCC",
        topic: "Mobility and bowel plan in a movement disorder",
        cjmm: "generate",
        difficulty: 3,
        stem: "The nurse plans care to improve the client's mobility and bowel function. Which measures should the nurse include? Select all that apply.",
        rationale:
          "Sitting on the bed edge before standing gives his BP time to adjust after the drop he shows on standing. A line on the floor gives a visual cue that can break a freeze. Fiber and fluids spread through the day treat 4 days without a stool. Cutting fluids to 1 L worsens both orthostatic hypotension and constipation. A lap belt is a restraint. Quick pivots invite a fall. Turns should be wide and slow.",
        sources: [SRC.armstrong, SRC.brunner],
      }),
      kind: "sata",
      options: [
        { text: "Apply a lap belt when he sits in his chair", why: "A lap belt is a restraint and can cause injury when he tries to rise." },
        { text: "Limit fluids to 1 L to cut night voiding", why: "Low fluid intake worsens orthostatic hypotension and constipation." },
        { text: "Have him sit on the bed edge before standing", why: "A pause lets his BP adjust and lowers the risk from orthostatic hypotension." },
        { text: "Teach him quick pivots when turning", why: "Quick pivots raise fall risk. Wide, slow turns are safer." },
        { text: "Use a floor line to help break a freeze", why: "A visual cue can help restart walking during a freeze." },
        { text: "Offer high-fiber foods and fluids", why: "Fiber and fluid treat the constipation common in this disease." },
      ],
      correct: [2, 4, 5],
    },
    {
      ...meta(`${ID}-5`, {
        need: "MOC",
        topic: "Referrals for a client with a movement disorder",
        cjmm: "action",
        process: "nursing-process",
        difficulty: 2,
        stem: "His daughter adds that he now coughs when he drinks thin liquids. The nurse arranges referrals for his problems. Match each problem to the most appropriate member of the care team.",
        rationale:
          "Gait and freezing problems go to the physical therapist, who trains walking and cueing. Fine motor tasks such as buttons go to the occupational therapist, who adapts daily activities. Coughing with thin liquids needs a swallowing assessment by the speech-language pathologist. A respiratory therapist and a dietitian may help later but do not assess these problems first.",
        sources: [SRC.armstrong, SRC.pfHospital],
      }),
      kind: "dnd",
      scoring: "zero-one",
      targets: ["Freezing and shuffling when he walks", "Trouble fastening buttons when dressing", "Coughing when he drinks thin liquids"],
      tokens: [
        { text: "Physical therapist", why: "The physical therapist treats gait, balance and freezing." },
        { text: "Occupational therapist", why: "The occupational therapist adapts dressing and other daily tasks." },
        { text: "Speech-language pathologist", why: "The speech-language pathologist assesses swallowing and sets safe liquid textures." },
        { text: "Respiratory therapist", why: "The respiratory therapist supports breathing but does not assess swallowing." },
        { text: "Registered dietitian", why: "A dietitian plans nutrition after the swallowing assessment sets safe textures." },
      ],
      correct: [0, 1, 2],
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Exercise teaching in a movement disorder",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "The physical therapist starts the client in a group exercise class 3 times a week. Two weeks later the nurse checks his understanding of the teaching. Which two statements show he understands? Select two.",
        rationale:
          "Regular exercise improves balance, gait and mobility in Parkinson disease. Planning activity for when his medication is working makes the class safer and more useful. Bed rest on stiff days speeds deconditioning. Exercise does not replace levodopa. The benefit fades if he stops, so the class should continue.",
        sources: [SRC.armstrong, SRC.brunner],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I should rest in bed on days when I feel stiff.\"", why: "Bed rest speeds loss of strength and balance." },
        { text: "\"Staying active helps my balance.\"", why: "Regular exercise improves balance and walking in this disease." },
        { text: "\"Exercise will slow the disease so I can cut my pills.\"", why: "Exercise supports function but does not replace levodopa." },
        { text: "\"I can stop the class once my balance gets better.\"", why: "The benefit fades when exercise stops, so it should continue." },
        { text: "\"I will exercise when my pills are working.\"", why: "Moving during the on period makes exercise safer and more effective." },
      ],
      correct: [1, 4],
    },
  ],
};
