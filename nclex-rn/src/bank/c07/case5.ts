import type { CaseStudy } from "@/engine/types";
import { meta, SRC } from "./helpers";

const ID = "rn-c07-5";

/** Case 5. Community home health visit. Young man with a high thoracic spinal cord injury. */
export const CASE5: CaseStudy = {
  id: ID,
  title: "A Home Visit With a Sudden Headache",
  intro:
    "A home health nurse visits a 29-year-old man at 1330. He has a complete spinal cord injury at the T4 level from a fall 2 years ago. He has an indwelling urinary catheter. He is lying flat in bed after a transfer. His partner is at home.",
  tabs: [
    {
      title: "History and Physical",
      text: [
        "Usual BP 96/60 mmHg.",
        "Bowel program each evening. Good result last evening.",
        "Baclofen 10 mg by mouth three times daily. Took the 0800 dose.",
        "Home prescription: nitroglycerin 2% ointment, 1 inch to the skin above the level of injury if systolic BP stays at or above 150 mmHg after the cause is sought.",
      ].join("\n"),
    },
    {
      title: "Vital Signs",
      table: {
        head: ["Measure", "1330"],
        rows: [
          ["Temperature", "36.8°C (98.2°F)"],
          ["Heart rate", "54/minute"],
          ["Respiratory rate", "18/minute"],
          ["BP", "184/102 mmHg"],
          ["SpO2", "98% on room air"],
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
        topic: "Cues of autonomic dysreflexia at home",
        cjmm: "recognize",
        difficulty: 2,
        stem: "The home health nurse writes a visit note at 1335. Click to highlight the findings that need follow-up.",
        rationale:
          "His BP of 184/102 mmHg is far above his usual 96/60 mmHg, and his heart rate is 54/minute. A pounding headache, flushing and sweating above the injury, and a stuffy nose come from reflex vasodilation above the lesion. Cool, pale legs reflect vasoconstriction below it. Only 40 mL in the bag since 0800 suggests the catheter is not draining. Orientation, intact sacral skin and loose clothing need no follow-up.",
        refs: ["Autonomic dysreflexia is a systolic BP rise of more than 20 mmHg above baseline in a person with injury at T6 or above."],
        sources: [SRC.ad, SRC.brunner],
      }),
      kind: "highlight",
      passage:
        "[[Reports a pounding headache that began 20 minutes ago]]. [[Alert and answers questions clearly]]. [[Face and neck flushed and sweaty]]. [[Skin on the legs cool and pale]]. [[Stuffy nose]]. [[Sacral skin intact with no redness]]. [[Urine bag last emptied at 0800 and holds 40 mL]]. [[Wearing loose sweatpants]].",
      spans: [
        { text: "Reports a pounding headache that began 20 minutes ago", why: "A sudden pounding headache is a common symptom of autonomic dysreflexia." },
        { text: "Alert and answers questions clearly", why: "Clear mentation needs no follow-up now." },
        { text: "Face and neck flushed and sweaty", why: "Flushing and sweating above the injury reflect reflex vasodilation." },
        { text: "Skin on the legs cool and pale", why: "Pale, cool skin below the injury reflects uncontrolled vasoconstriction." },
        { text: "Stuffy nose", why: "Nasal congestion is a sign of vasodilation above the level of injury." },
        { text: "Sacral skin intact with no redness", why: "Intact skin rules out a pressure injury at this site." },
        { text: "Urine bag last emptied at 0800 and holds 40 mL", why: "Little urine over several hours suggests the catheter is blocked." },
        { text: "Wearing loose sweatpants", why: "Loose clothing is not constricting and needs no follow-up." },
      ],
      correct: [0, 2, 3, 4, 6],
    },
    {
      ...meta(`${ID}-2`, {
        need: "BCC",
        topic: "Finding the trigger for autonomic dysreflexia",
        cjmm: "analyze",
        difficulty: 3,
        stem: "The nurse looks for the cause. The catheter tubing is kinked under his right thigh, and the bladder is firm and rounded above the pubic bone. For each finding, specify whether it is a likely trigger or an unlikely trigger for this episode.",
        rationale:
          "A kinked catheter lets the bladder fill. The firm, rounded bladder confirms distension. Bladder distension is the most common trigger. The bowel program worked last evening, so impaction is less likely. The sacral skin is intact. Loose sweatpants do not constrict. Baclofen taken as prescribed does not trigger an episode.",
        sources: [SRC.ad, SRC.adAcute],
      }),
      kind: "matrix",
      mode: "single",
      columns: ["Likely trigger", "Unlikely trigger"],
      rows: [
        { text: "Catheter tubing kinked under his thigh", correct: [0], why: "A kink blocks drainage and lets the bladder overfill." },
        { text: "Bladder firm and rounded above the pubic bone", correct: [0], why: "A distended bladder is the most common trigger of autonomic dysreflexia." },
        { text: "Good result from the bowel program last evening", correct: [1], why: "A recent good result makes fecal impaction less likely." },
        { text: "Sacral skin intact with no redness", correct: [1], why: "Intact skin rules out a sacral pressure injury as the trigger." },
        { text: "Wearing loose sweatpants", correct: [1], why: "Loose clothing does not constrict or stimulate the skin." },
        { text: "Took baclofen at 0800 as prescribed", correct: [1], why: "Taking baclofen as prescribed does not trigger an episode." },
      ],
    },
    {
      ...meta(`${ID}-3`, {
        need: "MOC",
        topic: "First action in autonomic dysreflexia",
        cjmm: "prioritize",
        difficulty: 3,
        stem: "The nurse plans the response to the BP of 184/102 mmHg. Which action should the nurse take first?",
        rationale:
          "Sitting him up with the legs lowered pools blood in the lower body and lowers BP at once. It is the first step while the cause is found. The tubing is straightened next. Nitroglycerin is used only if systolic BP stays at or above 150 mmHg after the cause is sought. A call to the provider can follow and would delay care now.",
        sources: [SRC.ad, SRC.adAcute],
      }),
      kind: "mc",
      options: [
        { text: "Apply the nitroglycerin ointment", why: "Sitting up comes first, and his prescription applies after the cause is sought." },
        { text: "Raise him to a sitting position", why: "Sitting up lowers BP at once by pooling blood in the legs." },
        { text: "Straighten the catheter tubing", why: "Removing the trigger is next, after he is sitting up." },
        { text: "Call the primary health care provider", why: "A call delays measures the nurse can start now." },
      ],
      correct: 1,
    },
    {
      ...meta(`${ID}-4`, {
        need: "SIPC",
        topic: "Safe care during an episode of autonomic dysreflexia",
        cjmm: "generate",
        difficulty: 3,
        stem: "The client is now sitting up with his legs lowered. The nurse plans care until the episode resolves. Which actions should the nurse include? Select all that apply.",
        rationale:
          "BP is rechecked every 2 minutes to track the response. Any strap or band is loosened. Lidocaine jelly lowers the stimulus if the catheter must be changed. Nitrates are unsafe after recent sildenafil use, so the nurse asks before using the ointment. Lying flat raises BP. Tapping the bladder adds stimulus. The client is not left alone while BP is high.",
        refs: ["Monitor BP and pulse every 1 to 2 minutes until the client is stable."],
        sources: [SRC.ad],
      }),
      kind: "sata",
      options: [
        { text: "Lay him flat until the headache eases", why: "Lying flat raises BP further during an episode." },
        { text: "Recheck BP every 2 minutes", why: "Frequent checks show whether the BP is falling or still rising." },
        { text: "Tap on the bladder to start urine flow", why: "Tapping or pressing the bladder adds stimulus and can worsen the episode." },
        { text: "Loosen the leg bag straps", why: "Constrictive devices are loosened as part of the first steps." },
        { text: "Leave him alone to rest in a dark room", why: "The client needs close monitoring while BP is high." },
        { text: "Use lidocaine jelly if the catheter is changed", why: "Anesthetic jelly lowers the stimulus from catheter insertion." },
        { text: "Ask about recent sildenafil use", why: "Nitrates with a recent phosphodiesterase inhibitor can cause severe hypotension." },
      ],
      correct: [1, 3, 5, 6],
    },
    {
      ...meta(`${ID}-5`, {
        need: "PPT",
        topic: "Antihypertensive use in autonomic dysreflexia",
        cjmm: "action",
        difficulty: 4,
        stem: "At 1350 the tubing is straightened and 600 mL of urine drains. At 1355 BP is 162/94 mmHg and the headache continues. He has not taken sildenafil or similar drugs. Which action should the nurse take next?",
        rationale:
          "Systolic BP is still 162 mmHg after the bladder has drained. His prescription calls for nitroglycerin ointment when systolic BP stays at or above 150 mmHg. The ointment goes on the skin above the level of injury. It comes before a rectal check, because rectal stimulation can worsen the episode. Lying flat raises BP. Waiting 30 minutes leaves a dangerous BP untreated.",
        refs: ["If systolic BP stays at or above 150 mmHg, a fast-acting antihypertensive is considered before checking for fecal impaction."],
        sources: [SRC.ad, SRC.adAcute, { body: "Health Canada", work: "Drug Product Database: NITROL nitroglycerin 2% ointment, DIN 01926454, status cancelled post market", year: 2026, url: "https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=12220" }],
        canada: "Nitroglycerin 2% ointment has not been marketed in Canada since 2018, according to the Health Canada Drug Product Database. A Canadian prescription would name another fast-acting antihypertensive, given at this same step.",
      }),
      kind: "mc",
      options: [
        { text: "Apply the nitroglycerin ointment", why: "Systolic BP stays above 150 mmHg, which meets his prescription." },
        { text: "Check the rectum for stool", why: "At this BP a fast-acting drug comes before a rectal check." },
        { text: "Lay him flat and raise his legs", why: "Lying flat raises BP further in autonomic dysreflexia." },
        { text: "Recheck the BP in 30 minutes", why: "Waiting leaves a high BP untreated and risks a stroke or seizure." },
      ],
      correct: 0,
    },
    {
      ...meta(`${ID}-6`, {
        need: "HPM",
        topic: "Preventing autonomic dysreflexia at home",
        cjmm: "evaluate",
        process: "teaching",
        difficulty: 2,
        stem: "At 1500 BP is 102/64 mmHg and the headache is gone. The nurse teaches the client and his partner about future episodes. Which two statements show understanding? Select two.",
        rationale:
          "BP is watched for at least 2 hours after an episode because it can recur. Keeping the tubing free of kinks prevents the trigger seen today. Lying flat raises BP. His usual BP is 96/60 mmHg, so 130/80 is well above baseline. Waiting for 200 mmHg delays care. Skipping the bowel program invites impaction.",
        refs: ["Monitor symptoms and BP for at least 2 hours after an episode resolves.", "A systolic rise of more than 20 mmHg above baseline signals an episode."],
        sources: [SRC.adAcute, SRC.ad],
      }),
      kind: "msn",
      select: 2,
      options: [
        { text: "\"I will lie down flat in bed if a headache starts.\"", why: "Lying flat raises BP. Sitting up is the first step." },
        { text: "\"We will check my BP for 2 hours after an episode.\"", why: "An episode can recur, so BP is watched for at least 2 hours." },
        { text: "\"A BP of 130/80 is a normal reading for me.\"", why: "His usual BP is 96/60 mmHg, so this is more than 20 mmHg above baseline." },
        { text: "\"We will keep the tubing free of kinks.\"", why: "A kinked catheter triggered today's episode." },
        { text: "\"I only need to act if my BP goes above 200.\"", why: "An episode starts well below 200 mmHg for someone with a low baseline." },
        { text: "\"I will skip the bowel program when I am tired.\"", why: "A missed bowel program can cause impaction, a common trigger." },
      ],
      correct: [1, 3],
    },
  ],
};
